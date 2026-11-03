/* p-beatbutcha scenes: producer game */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-2.4s}.car3{animation-delay:-4.8s}' +
    '@keyframes carsL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}.bl4{animation-delay:1.05s}' +
    '@keyframes pad{0%,70%,100%{opacity:.25}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}' +
    '.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}.mt5{animation-delay:.3s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .5s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const pads = (x, y, c1, c2) => { let s = ""; for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) s += '<rect class="pd p' + (r * 4 + c + 1) + '" x="' + (x + c * 22) + '" y="' + (y + r * 18) + '" width="17" height="13" rx="2" fill="' + (r ? c2 : c1) + '"/>'; return s; };
  const turntable = (x, y, label) => '<rect x="' + x + '" y="' + y + '" width="110" height="70" rx="4" fill="#2c2c30" stroke="#55565c" stroke-width="2"/>' +
    '<g class="vn"><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="28" fill="#0b0b0b"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="20" fill="none" stroke="#2a2a2a"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="9" fill="' + label + '"/><rect x="' + (x + 46) + '" y="' + (y + 27) + '" width="4" height="5" fill="#fff"/></g>' +
    '<path d="M' + (x + 96) + ' ' + (y + 10) + 'l-14 30" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>';
  const brick = (x, y, w, h, c, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let yy = y + 8; yy < y + h; yy += 8) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>'; return s; };
  const BRED = "#e63946", BONE = "#f1ead8", AMBER = "#ffb703", NAVY = "#1d3557";

  /* 1. Lewisham DLR at the end of the line: the canopy, the station board, a driverless DLR train gliding in */
  function lewisham() {
    let win = ""; for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="96" width="24" height="24" rx="3" fill="#d8eef7" opacity=".9"/>';
    let doors = ""; [64, 166, 248].forEach(x => doors += '<rect x="' + x + '" y="94" width="20" height="46" fill="#2f6db5"/><path d="M' + (x + 10) + ' 94v46" stroke="#1d3557" stroke-width="1.5"/>');
    let posts = ""; for (let x = 10; x < 400; x += 78) posts += '<rect x="' + x + '" y="26" width="5" height="122" fill="#6b7480"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#l1)"/>' + stars(8) +
      '<path d="M0 14h400l-20 14H20z" fill="#c9ced6"/>' + posts +
      '<rect x="40" y="40" width="200" height="28" rx="3" fill="' + NAVY + '"/><rect x="40" y="40" width="200" height="3" fill="#fff"/>' +
      '<text x="54" y="60" ' + font + ' font-size="16" fill="#fff">Lewisham</text>' +
      '<rect x="256" y="40" width="130" height="28" rx="3" fill="#111"/><text x="266" y="59" font-family="Courier New, monospace" font-weight="700" font-size="12" fill="' + AMBER + '">1 Bank   2 min</text>' +
      '<g class="anim-train">' +
        '<rect x="10" y="86" width="300" height="58" rx="10" fill="#f4f4f4" stroke="#6b7280" stroke-width="2"/>' +
        '<path d="M282 86h18a10 10 0 0 1 10 10v38a10 10 0 0 1-10 10h-18z" fill="' + BRED + '"/>' +
        '<rect x="10" y="128" width="300" height="6" fill="' + BRED + '"/>' + win + doors +
        '<circle cx="302" cy="134" r="3.5" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="148" width="400" height="10" fill="#eab308"/><rect x="0" y="158" width="400" height="30" fill="#8a8f96"/>' +
      '<path d="M0 176h400M0 184h400" stroke="#4a4d52" stroke-width="3"/>' +
      '<rect x="0" y="188" width="400" height="72" fill="#1c1d22"/>' +
      tag("BUTCHA", 40, 244, 34, BRED, -5) + tag("SE LDN", 250, 242, 28, AMBER, -7),
      sky("l1", "#101531", "#4a3d60"));
  }

  /* 2. South London tower block at night: rows of lit flats, the pirate radio aerial on the roof blinking, where he started DJing at 16 */
  function towerblock() {
    let flats = "";
    for (let r = 0; r < 12; r++) for (let c = 0; c < 6; c++) flats += '<rect class="' + ((r * 7 + c * 3) % 11 === 0 ? "flk" : "") + '" x="' + (128 + c * 24) + '" y="' + (60 + r * 14) + '" width="14" height="8" fill="' + ((r * 5 + c * 3) % 4 ? "#2a2c3a" : "#ffd98a") + '"/>';
    let bal = ""; for (let r = 0; r < 12; r++) bal += '<rect x="122" y="' + (69 + r * 14) + '" width="156" height="2" fill="#9aa0a8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#t2)"/>' + stars(18) +
      '<rect x="20" y="150" width="80" height="90" fill="#3d3f4a"/><rect x="300" y="130" width="90" height="110" fill="#3a3c46"/>' +
      '<rect x="118" y="50" width="164" height="190" fill="#8a8578"/>' + flats + bal +
      '<rect x="190" y="18" width="3" height="34" fill="#c8c8c8"/><path d="M178 26h28M182 34h20M186 42h12" stroke="#c8c8c8" stroke-width="2"/>' +
      '<circle class="bl" cx="191.5" cy="16" r="4" fill="' + BRED + '"/>' +
      '<path class="bl bl2" d="M206 18q8 -6 0 -14M212 22q14 -10 0 -24" fill="none" stroke="' + AMBER + '" stroke-width="2"/>' +
      '<rect x="0" y="240" width="400" height="20" fill="#2b2b2e"/>' +
      '<g class="car"><rect x="0" y="230" width="60" height="22" rx="4" fill="' + BRED + '"/><rect x="0" y="222" width="60" height="10" rx="3" fill="' + BRED + '"/><rect x="6" y="226" width="48" height="5" fill="#d8eef7"/><circle cx="12" cy="252" r="4" fill="#111"/><circle cx="48" cy="252" r="4" fill="#111"/></g>' +
      '<text x="200" y="32" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".8" letter-spacing="3">' + '</text>',
      sky("t2", "#0b0d24", "#3b2d4f"));
  }

  /* 3. The beat lab: a butcher's block with a cleaver, the drum pads lit, a crate of drum kits, meters jumping */
  function butcherblock() {
    let eq = ""; for (let i = 0; i < 5; i++) eq += '<rect class="mt mt' + (i + 1) + '" x="' + (286 + i * 10) + '" y="40" width="7" height="44" fill="' + (i > 2 ? BRED : "#5ee06a") + '"/>';
    let tiles = ""; for (let y = 0; y < 150; y += 20) for (let x = (y / 20) % 2 ? 0 : 20; x < 400; x += 40) tiles += '<rect x="' + x + '" y="' + y + '" width="20" height="20" fill="#e6e1d4"/>';
    return svg(
      '<rect width="400" height="260" fill="#cfc8b8"/>' + tiles +
      '<rect x="276" y="30" width="76" height="62" rx="4" fill="#111" stroke="#444" stroke-width="2"/>' + eq +
      '<g class="bob"><rect x="40" y="26" width="50" height="34" rx="3" fill="#b8bec6" stroke="#5a6068" stroke-width="2"/><rect x="88" y="34" width="34" height="8" rx="3" fill="#3a2a22"/><circle cx="52" cy="36" r="4" fill="#5a6068"/></g>' +
      '<text x="134" y="104" font-family="Anton, Impact, sans-serif" font-size="20" fill="' + BRED + '" letter-spacing="2">STEROID PACK</text>' +
      '<rect x="0" y="150" width="400" height="110" fill="#5a3e2b"/>' +
      '<rect x="20" y="138" width="190" height="96" rx="6" fill="#a8743e" stroke="#6b4626" stroke-width="3"/><path d="M26 160h178M26 184h178M26 208h178" stroke="#8f5f30" stroke-width="1.5"/>' +
      '<rect x="40" y="150" width="150" height="74" rx="6" fill="#2c2c30" stroke="#111" stroke-width="2"/><rect x="50" y="158" width="58" height="14" fill="#1f3a26"/>' +
      '<text x="54" y="169" font-family="Helvetica, Arial, sans-serif" font-size="8" fill="#7cf08a">CHOP 16 / 16</text>' +
      pads(56, 182, BRED, AMBER) +
      '<rect x="234" y="176" width="140" height="58" fill="#7a5a3a" stroke="#4a3220" stroke-width="2"/>' +
      (() => { let s = ""; ["#e63946", "#ffb703", "#f1ead8", "#2f6db5", "#6a4c93", "#3f6b4a", "#e63946", "#ffb703"].forEach((c, i) => s += '<rect x="' + (240 + i * 16) + '" y="' + (160 + (i % 2) * 4) + '" width="13" height="30" fill="' + c + '"/>'); return s; })() +
      '<text x="304" y="224" text-anchor="middle" ' + font + ' font-size="10" fill="' + BONE + '" letter-spacing="2">DRUM KITS</text>');
  }

  /* 4. Buffalo, where the Griselda beats landed: the art deco City Hall tower at night, its crown lit, snow falling on Niagara Square */
  function buffalo() {
    let snow = ""; for (let i = 0; i < 26; i++) snow += '<circle class="bob' + '" cx="' + ((i * 61) % 400) + '" cy="' + (10 + (i * 37) % 200) + '" r="' + (i % 3 ? 1.3 : 2) + '" fill="#fff" opacity=".8"/>';
    let bands = ""; for (let y = 90; y < 220; y += 10) bands += '<path d="M150 ' + y + 'h100" stroke="#b9a37c" stroke-width="1"/>';
    let ribs = ""; for (let x = 160; x < 244; x += 12) ribs += '<rect x="' + x + '" y="84" width="4" height="140" fill="#b9a37c"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#b4)"/>' + stars(10) +
      '<rect x="40" y="170" width="100" height="56" fill="#cdb791"/><rect x="260" y="170" width="100" height="56" fill="#cdb791"/>' +
      '<rect x="150" y="84" width="100" height="142" fill="#d6c39c"/>' + bands + ribs +
      '<rect x="160" y="64" width="80" height="22" fill="#d6c39c"/><rect x="172" y="46" width="56" height="20" fill="#d6c39c"/>' +
      '<path d="M176 46q24 -36 48 0z" fill="#2f8f8a" stroke="#1d6a66" stroke-width="2"/>' +
      '<path d="M178 44q22 -30 44 0" fill="none" stroke="' + AMBER + '" stroke-width="2" class="flk"/>' +
      '<rect x="190" y="70" width="20" height="12" fill="#ffd98a" class="flk flk2"/>' +
      '<rect x="0" y="226" width="400" height="34" fill="#e8edf2"/><path d="M0 226h400" stroke="#bfc6cf" stroke-width="2"/>' +
      '<path d="M196 226l2 -54h4l2 54z" fill="#a8a8a8"/><path d="M198 172l2 -6 2 6z" fill="#a8a8a8"/><rect x="190" y="222" width="20" height="4" fill="#8a8a8a"/>' +
      snow +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="' + NAVY + '" letter-spacing="3">NIAGARA SQUARE, BUFFALO</text>',
      sky("b4", "#0c1430", "#38507a"));
  }

  /* 5. Rye Lane and Peckham High St: green street signs, the BUTCHA wall, the Shard lit up on the skyline behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(14) +
      '<path d="M150 140L176 12l8 0L210 140z" fill="#8fa8c4"/><path d="M176 12l4 -10 4 10z" fill="#cfe2f5"/>' +
      '<path d="M162 140L180 30v110z" fill="#6f88a6"/>' +
      '<circle class="bl" cx="180" cy="4" r="3" fill="' + BRED + '"/>' +
      '<rect x="40" y="110" width="60" height="30" fill="#2c2e3a"/><rect x="250" y="100" width="90" height="40" fill="#2c2e3a"/>' +
      brick(0, 140, 400, 84, "#7a6a5a", "#5f5246") +
      tag("BUTCHA", 24, 206, 46, BRED, -5) + tag("SE15", 230, 220, 26, AMBER, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#4a4c52"/><rect x="0" y="224" width="400" height="5" fill="#85878c"/>' +
      '<g class="carL"><rect x="0" y="232" width="70" height="20" rx="3" fill="' + BRED + '"/><rect x="4" y="235" width="62" height="6" fill="#d8eef7"/></g>' +
      '<rect x="338" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(290, 44, 100, "Rye Ln") + sign(268, 70, 130, "Peckham High St") +
      '<circle class="bl" cx="340" cy="36" r="5" fill="#fff6c2"/>',
      sky("c5", "#0b0c22", "#4a3550"));
  }

  window.SCENES = { lewisham: lewisham, towerblock: towerblock, butcherblock: butcherblock, buffalo: buffalo, corner: corner };
})();
