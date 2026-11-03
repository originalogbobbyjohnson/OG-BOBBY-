/* Havoc producer game: Queensbridge, Long Island City, Queens. Queensboro Plaza, the Houses in the snow, the beat lab, Big Allis on the river, the corner. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}.flk2{animation-delay:.8s}' +
    '@keyframes snow{from{transform:translateY(-30px)}to{transform:translateY(270px)}}.sn{animation:snow 6s linear infinite}.sn2{animation-delay:-2s;animation-duration:7s}.sn3{animation-delay:-4s;animation-duration:5s}' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}.bl4{animation-delay:1.2s}' +
    '@keyframes key{0%,100%{fill:#f4f1ea}10%,25%{fill:#5aa9e6}}.ky{animation:key 1.6s steps(1) infinite}.k1{animation-delay:0s}.k2{animation-delay:.4s}.k3{animation-delay:.8s}.k4{animation-delay:1.2s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}15%{transform:scale(1.12)}}.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .8s ease-out infinite}' +
    '@keyframes smoke{0%{transform:translate(0,0) scale(.6);opacity:.7}100%{transform:translate(40px,-60px) scale(1.8);opacity:0}}.sm{transform-box:fill-box;transform-origin:50% 50%;animation:smoke 4s linear infinite}.sm2{animation-delay:-1.3s}.sm3{animation-delay:-2.6s}' +
    '@keyframes boat{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.bt{animation:boat 16s linear infinite}' +
    '@keyframes ripple{0%,100%{opacity:.2}50%{opacity:.7}}.rp{animation:ripple 2s ease-in-out infinite}.rp2{animation-delay:1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const snow = () => { let s = ""; for (let i = 0; i < 36; i++) s += '<circle class="sn sn' + (i % 3 + 1) + '" cx="' + ((i * 71) % 400) + '" cy="' + ((i * 37) % 120 - 20) + '" r="' + (i % 2 ? 1.6 : 2.3) + '" fill="#fff" opacity=".85"/>'; return s; };
  const ICE = "#e8eef5", BLUE = "#5aa9e6", RED = "#c0392b", PURPLE = "#b933ad", YEL = "#fccc0a", BRICK = "#8e4632", BRICK2 = "#6e3424";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const skyline = (y, fill) => '<g fill="' + fill + '">' +
    '<rect x="10" y="' + (y - 30) + '" width="24" height="60"/><rect x="40" y="' + (y - 50) + '" width="20" height="80"/><rect x="66" y="' + (y - 22) + '" width="30" height="52"/>' +
    '<rect x="104" y="' + (y - 70) + '" width="22" height="100"/><rect x="110" y="' + (y - 86) + '" width="10" height="18"/><rect x="114" y="' + (y - 104) + '" width="2" height="20"/>' +
    '<rect x="134" y="' + (y - 40) + '" width="28" height="70"/><rect x="170" y="' + (y - 58) + '" width="18" height="88"/><path d="M170 ' + (y - 58) + 'l9-22 9 22z"/><rect x="178" y="' + (y - 94) + '" width="2" height="16"/>' +
    '<rect x="196" y="' + (y - 34) + '" width="34" height="64"/><rect x="238" y="' + (y - 62) + '" width="20" height="92"/><rect x="266" y="' + (y - 28) + '" width="30" height="58"/>' +
    '<rect x="304" y="' + (y - 46) + '" width="22" height="76"/><rect x="334" y="' + (y - 24) + '" width="30" height="54"/><rect x="370" y="' + (y - 40) + '" width="26" height="70"/></g>';

  /* 1. The 7 pulling into Queensboro Plaza, elevated: N, W and 7 */
  function station() {
    let windows = "";
    for (let x = 22; x < 260; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="20" rx="3" fill="#dff1ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(14) +
      skyline(110, "#1c2333") +
      '<rect x="0" y="70" width="400" height="8" fill="#3d4450"/>' +
      '<rect x="30" y="20" width="6" height="56" fill="#3d4450"/><rect x="364" y="20" width="6" height="56" fill="#3d4450"/>' +
      '<rect x="56" y="30" width="288" height="34" rx="4" fill="#111"/><rect x="56" y="30" width="288" height="4" fill="#fff"/>' +
      '<text x="68" y="55" ' + font + ' font-size="16" fill="#fff">Queensboro Plaza</text>' +
      bullet(266, 48, "7", PURPLE) + bullet(292, 48, "N", YEL, true) + bullet(318, 48, "W", YEL, true) +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="304" height="58" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="162" width="304" height="5" fill="' + PURPLE + '"/>' + windows +
        '<circle cx="304" cy="172" r="4" fill="#fff6c2"/>' + bullet(292, 140, "7", PURPLE) +
      '</g>' +
      '<rect x="0" y="182" width="400" height="8" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#2a2f38"/>' +
      '<rect x="0" y="190" width="400" height="4" fill="#4a505b"/>' +
      tag("HAV", 40, 240, 34, BLUE, -5) + tag("QB", 290, 240, 34, ICE, -8),
      sky("s1", "#0b1022", "#36405e"));
  }

  /* 2. The Houses in the snow: Queensbridge brick buildings at night, lamps glowing, snow falling */
  function snowhouses() {
    const block = (x, y, w, h) => {
      let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + BRICK + '"/><rect x="' + x + '" y="' + (y - 3) + '" width="' + w + '" height="5" fill="#f1f4f8"/>';
      for (let r = y + 10; r < y + h - 8; r += 14) for (let c = x + 6; c < x + w - 8; c += 14)
        s += '<rect x="' + c + '" y="' + r + '" width="7" height="8" fill="' + (((r * 3 + c) % 5) < 1 ? "#ffd98a" : "#24202a") + '"/>';
      return s;
    };
    const lamp = x => '<rect x="' + (x - 2) + '" y="170" width="4" height="66" fill="#2d3340"/><circle class="flk" cx="' + x + '" cy="168" r="7" fill="#ffe7a8"/><circle cx="' + x + '" cy="168" r="18" fill="#ffe7a8" opacity=".18"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' +
      block(0, 70, 120, 160) + block(140, 96, 120, 134) + block(280, 64, 120, 166) +
      '<rect x="0" y="228" width="400" height="32" fill="#e9eef4"/><path d="M0 236h400" stroke="#cdd6e0" stroke-width="2"/>' +
      lamp(128) + lamp(270) +
      '<path d="M40 238q20-6 40 0M300 240q24-6 48 0" stroke="#fff" stroke-width="3" fill="none"/>' +
      snow(),
      sky("s2", "#0a0f1e", "#3a4660"));
  }

  /* 3. The beat lab: sampler keyboard with a floppy drive, piano loop keys lighting up, speakers thumping */
  function beatlab() {
    let keys = "";
    for (let i = 0; i < 18; i++) keys += '<rect class="' + ([3, 7, 10, 14].indexOf(i) >= 0 ? "ky k" + ([3, 7, 10, 14].indexOf(i) + 1) : "") + '" x="' + (70 + i * 14) + '" y="186" width="13" height="44" fill="#f4f1ea" stroke="#333" stroke-width=".8"/>';
    for (let i = 0; i < 17; i++) if (i % 7 !== 2 && i % 7 !== 6) keys += '<rect x="' + (79 + i * 14) + '" y="186" width="8" height="26" fill="#111"/>';
    const spk = x => '<rect x="' + x + '" y="40" width="70" height="120" rx="4" fill="#1b1d22" stroke="#3a3f47" stroke-width="2"/>' +
      '<circle class="th" cx="' + (x + 35) + '" cy="118" r="24" fill="#2e323a" stroke="#555" stroke-width="3"/><circle cx="' + (x + 35) + '" cy="118" r="8" fill="#0d0e11"/>' +
      '<circle cx="' + (x + 35) + '" cy="66" r="12" fill="#2e323a" stroke="#555" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="#0f131b"/>' +
      '<rect x="0" y="0" width="400" height="170" fill="#151b26"/>' +
      spk(16) + spk(314) +
      '<rect x="110" y="30" width="180" height="96" rx="4" fill="#0a0d12" stroke="#3a3f47" stroke-width="3"/>' +
      '<path d="M120 100 L140 70 L160 92 L180 60 L200 96 L220 66 L240 88 L260 58 L280 92" fill="none" stroke="' + BLUE + '" stroke-width="2.5"/>' +
      '<text x="200" y="118" text-anchor="middle" ' + font + ' font-size="11" fill="' + ICE + '" letter-spacing="3">PIANO LOOP</text>' +
      '<rect x="0" y="160" width="400" height="100" fill="#2a2420"/>' +
      '<rect x="50" y="166" width="300" height="72" rx="5" fill="#3a3d44" stroke="#22252b" stroke-width="2"/>' +
      '<rect x="62" y="170" width="70" height="12" fill="#1f3a26"/><text x="66" y="180" font-family="Helvetica, Arial, sans-serif" font-size="9" fill="#7cf08a">LOOP 01</text>' +
      '<rect x="270" y="170" width="44" height="12" rx="1" fill="#15171b"/><rect x="278" y="175" width="28" height="3" fill="#555"/>' +
      '<circle class="bl" cx="326" cy="176" r="3" fill="' + RED + '"/>' +
      keys +
      '<rect x="292" y="140" width="30" height="30" fill="#1f2a3a" stroke="#0b0f16" stroke-width="2" transform="rotate(-10 307 155)"/><rect x="298" y="143" width="18" height="8" fill="#c8ccd2" transform="rotate(-10 307 155)"/>');
  }

  /* 4. Queensbridge Park on the East River: Big Allis smokestacks (red and white) smoking, a tug going by, the bridge on the left */
  function river() {
    const stack = (x, h) => {
      let s = '<rect x="' + x + '" y="' + (150 - h) + '" width="14" height="' + h + '" fill="#f1f1f1"/>';
      for (let y = 150 - h; y < 150; y += 24) s += '<rect x="' + x + '" y="' + y + '" width="14" height="10" fill="' + RED + '"/>';
      s += '<circle class="sm" cx="' + (x + 7) + '" cy="' + (146 - h) + '" r="8" fill="#cfd6e0"/><circle class="sm sm2" cx="' + (x + 7) + '" cy="' + (146 - h) + '" r="8" fill="#cfd6e0"/><circle class="sm sm3" cx="' + (x + 7) + '" cy="' + (146 - h) + '" r="8" fill="#cfd6e0"/>';
      return s;
    };
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' +
      '<rect x="180" y="128" width="210" height="24" fill="#5b5f68"/><rect x="200" y="110" width="80" height="20" fill="#6a6e78"/>' +
      stack(214, 92) + stack(246, 108) + stack(278, 92) + stack(330, 70) +
      '<rect x="0" y="40" width="10" height="112" fill="#9da0a3"/><rect x="0" y="92" width="170" height="7" fill="#8f9295"/><path d="M10 40Q90 100 170 92" fill="none" stroke="#9da0a3" stroke-width="3"/>' +
      '<rect x="0" y="150" width="400" height="60" fill="#1f3a52"/>' +
      '<path class="rp" d="M20 166h50M120 176h70M260 170h60M330 186h50" stroke="#8fb9d9" stroke-width="2"/><path class="rp rp2" d="M60 192h60M200 160h40M280 198h70" stroke="#8fb9d9" stroke-width="2"/>' +
      '<g class="bt"><path d="M0 176h44l-6 10H6z" fill="' + RED + '"/><rect x="10" y="166" width="18" height="10" fill="#f1f1f1"/><rect x="14" y="160" width="4" height="6" fill="#222"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#3d5a3a"/><rect x="0" y="210" width="400" height="6" fill="#8a8c90"/>' +
      (() => { let r = ""; for (let x = 6; x < 400; x += 18) r += '<rect x="' + x + '" y="200" width="3" height="14" fill="#2b2f36"/>'; return r; })() +
      '<rect x="0" y="202" width="400" height="3" fill="#2b2f36"/>',
      sky("s4", "#203a63", "#f0a36a"));
  }

  /* 5. The corner: 12 St & 41 Av in Queensbridge, green signs, HAVOC tag, Manhattan skyline across the river */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(16) +
      skyline(120, "#232c44") +
      (() => { let w = ""; for (let i = 0; i < 24; i++) w += '<rect class="bl bl' + (i % 4 + 1) + '" x="' + ((i * 61) % 390 + 4) + '" y="' + (40 + (i * 29) % 70) + '" width="3" height="4" fill="#ffd98a"/>'; return w; })() +
      '<rect x="0" y="120" width="400" height="104" fill="' + BRICK + '"/>' +
      (() => { let b = ""; for (let y = 126; y < 224; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="' + BRICK2 + '" stroke-width="1"/>'; return b; })() +
      tag("HAVOC", 26, 196, 52, BLUE, -5) + tag("MOBB DEEP", 150, 216, 22, ICE, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="236" width="40" height="14" rx="4" fill="#1d2b4a"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="30" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="330" y="40" width="5" height="186" fill="#3d4b3f"/>' +
      '<rect x="290" y="44" width="84" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="332" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">12 St</text>' +
      '<rect x="296" y="70" width="72" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="332" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">41 Av</text>' +
      '<circle class="flk" cx="333" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#070a16", "#2c3554"));
  }

  window.SCENES = { station: station, snowhouses: snowhouses, beatlab: beatlab, river: river, corner: corner };
})();
