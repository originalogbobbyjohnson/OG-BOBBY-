/* Cold Crush Brothers game (NYC map, the Bronx: Williamsbridge, up the White Plains Rd el where the T-Connection live tapes were cut).
   The 2 and 5 pulling into 225 St on the el, the PAL on Webster Av at E 183 St (where Charlie Chase got noticed), the East River Park Amphitheater
   (the Wild Style finale), James Monroe High School on Boynton Av (the DJ battle with Theodore), and White Plains Rd & E 225 St under the el.
   400 x 260 SVGs. No digit nine is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ccflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.cc-flk{animation:ccflick 2.4s infinite}.cc-flk2{animation-delay:1.1s}' +
    '@keyframes ccbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.cc-bob{animation:ccbob .55s ease-in-out infinite}.cc-bob2{animation-delay:.27s}' +
    '@keyframes ccspin{to{transform:rotate(360deg)}}.cc-spin{transform-box:fill-box;transform-origin:50% 50%;animation:ccspin 1.4s linear infinite}' +
    '@keyframes ccbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.cc-beam{transform-box:fill-box;transform-origin:50% 0%;animation:ccbeam 3s ease-in-out infinite}.cc-beam2{animation-delay:-1.5s}' +
    '@keyframes ccel{from{transform:translateX(440px)}to{transform:translateX(-380px)}}.cc-el{animation:ccel 6s linear infinite}' +
    '@keyframes ccboat{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.cc-boat{animation:ccboat 14s linear infinite}' +
    '@keyframes ccmist{0%{opacity:.8;transform:translate(0,0) scale(.5)}100%{opacity:0;transform:translate(-26px,-10px) scale(1.5)}}.cc-mist{transform-box:fill-box;transform-origin:50% 50%;animation:ccmist 1.3s ease-out infinite}.cc-mist2{animation-delay:.45s}.cc-mist3{animation-delay:.9s}' +
    '@keyframes cctw{0%,100%{opacity:.25}50%{opacity:1}}.cc-tw{animation:cctw 2s ease-in-out infinite}.cc-tw2{animation-delay:1s}' +
    '@keyframes ccflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(6deg)}}.cc-flag{transform-box:fill-box;transform-origin:0% 50%;animation:ccflag 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 2 ? "cc-tw" : "cc-tw cc-tw2") + '" cx="' + ((i * 97 + 13) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const ICE = "#9be7ff", GOLD = "#ffcc33", ROSE = "#ff4f6d", RED = "#ee352e", GRN = "#00933c";
  const crowd = (y, n, x0, step) => { let s = ""; for (let i = 0; i < n; i++) s += person(x0 + i * step, y + (i % 2) * 3, ["#1b1b22", "#2a2233", "#1d2a3a", "#33261d"][i % 4], i % 3 === 0 ? "cc-bob" : i % 3 === 1 ? "cc-bob cc-bob2" : ""); return s; };
  const block = (x, y, w, h, col, seed) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + col + '"/>';
    let k = seed || 1;
    for (let yy = y + 10; yy < y + h - 8; yy += 14) for (let xx = x + 6; xx < x + w - 8; xx += 14) { k = (k * 37 + 11) % 101; s += '<rect x="' + xx + '" y="' + yy + '" width="8" height="9" fill="' + (k % 4 === 0 ? "#ffd98a" : "#231a17") + '"/>'; }
    return s;
  };

  /* 1. 225 St up on the White Plains Rd el: the 2 pulling in under the canopy, black sign with the red 2 and green 5, the avenue below */
  function st225() {
    let win = "";
    for (let x = 34; x < 290; x += 34) win += '<rect x="' + x + '" y="134" width="22" height="18" rx="2" fill="#d6e6f5" opacity=".9"/>';
    let girders = "";
    for (let x = 0; x < 400; x += 40) girders += '<path d="M' + x + ' 188l20 22l20-22" stroke="#4a3f36" stroke-width="3" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cs1)"/>' + stars(10) +
      block(0, 54, 80, 110, "#6b4a3a", 3) + block(310, 44, 90, 120, "#7a5240", 5) +
      '<path d="M0 92h400v8H0z" fill="#3b4e5c"/><path d="M0 92l200-12l200 12z" fill="#4c6475"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + (x - 3) + '" y="100" width="6" height="74" fill="#3b4e5c"/>').join("") +
      '<rect x="88" y="102" width="224" height="24" rx="3" fill="#111"/><rect x="88" y="102" width="224" height="3" fill="#fff"/>' +
      '<text x="100" y="120" ' + font + ' font-size="14" fill="#fff">225 St</text>' +
      bullet(268, 114, "2", RED) + bullet(294, 114, "5", GRN) +
      '<g class="anim-train">' +
        '<rect x="10" y="128" width="300" height="46" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="134" width="16" height="22" rx="2" fill="#d6e6f5"/>' + bullet(298, 164, "2", RED) +
        '<rect x="10" y="158" width="276" height="3" fill="' + RED + '"/><circle cx="22" cy="166" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="174" width="400" height="8" fill="#eab308"/><rect x="0" y="182" width="400" height="8" fill="#5c534a"/>' + girders +
      '<rect x="0" y="210" width="400" height="50" fill="#2b2b30"/>' +
      [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="234" width="40" height="3" fill="#e8d36b"/>').join("") +
      '<rect x="40" y="188" width="8" height="40" fill="#4a3f36"/><rect x="350" y="188" width="8" height="40" fill="#4a3f36"/>' +
      person(334, 196, "#1b1b1b") + person(356, 200, "#2a2a2a", "cc-bob"),
      sky("cs1", "#0d1a3a", "#4a6fa8"));
  }

  /* 2. The PAL on Webster Av at E 183 St: the gym, the DJ table with two turntables and the speaker stacks, the hoop, kids dancing */
  function pal() {
    let floor = "";
    for (let x = 0; x < 400; x += 26) floor += '<rect x="' + x + '" y="196" width="24" height="64" fill="' + ((x / 26) % 2 ? "#c99a5b" : "#d4a766") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#e7d7b4"/>' +
      [0, 1, 2, 3, 4, 5, 6].map(i => '<rect x="0" y="' + (i * 28) + '" width="400" height="2" fill="#cdbb94"/>').join("") +
      /* high windows */
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="16" width="44" height="34" fill="#9fc3e0" stroke="#7a6a50" stroke-width="3"/><path d="M' + (x + 22) + ' 16v34M' + x + ' 33h44" stroke="#7a6a50" stroke-width="2"/>').join("") +
      /* banner */
      '<rect x="120" y="58" width="160" height="30" fill="#1d3a7a"/>' + txt("PAL · WEBSTER AV", 200, 78, 13, "#fff") +
      /* hoop */
      '<rect x="18" y="56" width="50" height="36" fill="#fff" stroke="#c33" stroke-width="3"/><rect x="34" y="74" width="18" height="12" fill="none" stroke="#c33" stroke-width="2"/><path d="M33 92h20l-4 18h-12z" fill="none" stroke="#eee" stroke-width="1.5"/><path d="M33 92h20" stroke="#ff7a1a" stroke-width="3"/>' +
      floor + '<path d="M0 196h400" stroke="#8a6a3a" stroke-width="2"/>' +
      /* speaker stacks */
      [300, 352].map(x => '<rect x="' + x + '" y="110" width="44" height="86" fill="#1c1c20"/><circle class="cc-bob" cx="' + (x + 22) + '" cy="136" r="13" fill="#333" stroke="#555" stroke-width="3"/><circle class="cc-bob cc-bob2" cx="' + (x + 22) + '" cy="174" r="13" fill="#333" stroke="#555" stroke-width="3"/>').join("") +
      /* DJ table */
      '<rect x="150" y="146" width="130" height="12" fill="#5a3b24"/><rect x="156" y="158" width="8" height="38" fill="#3b2614"/><rect x="266" y="158" width="8" height="38" fill="#3b2614"/>' +
      '<rect x="156" y="132" width="52" height="16" rx="2" fill="#bfbfbf"/><rect x="222" y="132" width="52" height="16" rx="2" fill="#bfbfbf"/>' +
      '<g class="cc-spin"><ellipse cx="182" cy="134" rx="18" ry="6" fill="#111"/><ellipse cx="182" cy="134" rx="4" ry="1.6" fill="' + ROSE + '"/></g>' +
      '<g class="cc-spin"><ellipse cx="248" cy="134" rx="18" ry="6" fill="#111"/><ellipse cx="248" cy="134" rx="4" ry="1.6" fill="' + ICE + '"/></g>' +
      '<rect x="208" y="136" width="14" height="10" fill="#333"/>' +
      crowd(186, 6, 30, 22) + crowd(200, 4, 160, 30));
  }

  /* 3. East River Park Amphitheater (the Wild Style finale): the concrete bandshell arch tagged up, the stage with the crew and speakers,
        the crowd on the benches, the East River and the bridge behind, a boat going by */
  function amph() {
    let benches = "";
    for (let r = 0; r < 3; r++) benches += '<rect x="0" y="' + (212 + r * 16) + '" width="400" height="5" fill="#9a958c"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cs3)"/>' + stars(6) +
      /* river and bridge */
      '<rect x="0" y="118" width="400" height="34" fill="#1d3b55"/>' +
      '<g class="cc-boat"><path d="M0 132h40l-6 8H6z" fill="#e8e2d0"/><rect x="12" y="124" width="14" height="8" fill="#c94c3c"/></g>' +
      '<path d="M260 118V46M330 118V46" stroke="#5a6b7a" stroke-width="7"/><path d="M200 90q60-40 95-44t95 44" stroke="#5a6b7a" stroke-width="3" fill="none"/><path d="M200 100h200" stroke="#5a6b7a" stroke-width="5"/>' +
      [270, 280, 290, 300, 310, 320].map(x => '<path d="M' + x + ' 100V' + (66 + Math.abs(x - 295) / 2) + '" stroke="#5a6b7a" stroke-width="1"/>').join("") +
      /* the bandshell */
      '<path d="M60 196V120q0-80 140-80t140 80v76z" fill="#c9c3b6"/><path d="M84 196V124q0-62 116-62t116 62v72z" fill="#3a3632"/>' +
      [100, 140, 180, 220, 260, 300].map(x => '<path d="M' + x + ' 64v8" stroke="#a8a294" stroke-width="2"/>').join("") +
      tag("WILD STYLE", 142, 60, 18, ROSE, -3) + tag("CC", 64, 160, 13, GOLD, -10) + tag("CRUSH", 318, 166, 11, ICE, 8) +
      /* lights sweeping */
      '<path class="cc-beam" d="M150 66l-30 120h20z" fill="' + GOLD + '" opacity=".22"/><path class="cc-beam cc-beam2" d="M250 66l30 120h-20z" fill="' + ICE + '" opacity=".22"/>' +
      /* stage */
      '<rect x="84" y="176" width="232" height="20" fill="#5a524a"/>' +
      '<rect x="98" y="148" width="26" height="28" fill="#1c1c20"/><rect x="276" y="148" width="26" height="28" fill="#1c1c20"/>' +
      '<rect x="176" y="160" width="48" height="16" fill="#2a2a2a"/><g class="cc-spin"><ellipse cx="192" cy="160" rx="10" ry="3.5" fill="#111"/></g><g class="cc-spin"><ellipse cx="210" cy="160" rx="10" ry="3.5" fill="#111"/></g>' +
      person(140, 148, "#e7e7e7", "cc-bob") + person(160, 150, "#1b1b1b", "cc-bob cc-bob2") + person(240, 150, "#e7e7e7", "cc-bob") + person(260, 148, "#1b1b1b", "cc-bob cc-bob2") +
      '<rect x="0" y="196" width="400" height="64" fill="#7a756c"/>' + benches +
      crowd(204, 9, 12, 46),
      sky("cs3", "#1a2a5a", "#e9a06b"));
  }

  /* 4. James Monroe High School on Boynton Av: the long red-brick school with white trim and the cupola tower, a battle banner out front,
        the lights inside, a flag waving */
  function monroe() {
    let wins = "";
    for (let r = 0; r < 3; r++) for (let x = 24; x < 380; x += 26) { if (x > 170 && x < 230) continue; wins += '<rect x="' + x + '" y="' + (108 + r * 26) + '" width="14" height="18" fill="' + ((x + r * 7) % 5 === 0 ? "#ffe39a" : "#2b3448") + '" stroke="#f1ebdf" stroke-width="2"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#cs4)"/>' + stars(8) +
      /* cupola tower */
      '<rect x="180" y="40" width="40" height="56" fill="#9a3f2c"/><rect x="176" y="36" width="48" height="6" fill="#f1ebdf"/>' +
      '<rect x="188" y="16" width="24" height="22" fill="#f1ebdf"/><path d="M184 18l16-14l16 14z" fill="#3d6b5a"/><rect x="199" y="0" width="2" height="6" fill="#ddd"/>' +
      '<circle cx="200" cy="62" r="9" fill="#f1ebdf"/><path d="M200 62v-6M200 62h4" stroke="#333" stroke-width="1.5"/>' +
      '<g class="cc-flag"><rect x="224" y="20" width="2" height="30" fill="#ccc"/><rect x="226" y="20" width="20" height="12" fill="' + RED + '"/><rect x="226" y="20" width="8" height="6" fill="#1d3a7a"/></g>' +
      /* main building */
      '<rect x="10" y="96" width="380" height="104" fill="#a3442f"/><rect x="10" y="92" width="380" height="6" fill="#f1ebdf"/>' + wins +
      /* center entrance with columns */
      '<rect x="168" y="96" width="64" height="104" fill="#b34c34"/><path d="M164 100l36-18l36 18z" fill="#f1ebdf"/>' +
      [176, 192, 208, 224].map(x => '<rect x="' + (x - 3) + '" y="112" width="6" height="66" fill="#f1ebdf"/>').join("") +
      '<rect x="186" y="150" width="28" height="50" fill="#3a2a22"/>' +
      '<rect x="172" y="132" width="56" height="14" fill="#f1ebdf"/>' + txt("MONROE", 200, 143, 10, "#3a2a22") +
      /* banner */
      '<g class="cc-flk"><rect x="40" y="166" width="120" height="24" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' + txt("DJ BATTLE TONIGHT", 100, 182, 10, GOLD) + '</g>' +
      /* steps + sidewalk */
      '<rect x="150" y="200" width="100" height="6" fill="#d8d2c4"/><rect x="140" y="206" width="120" height="6" fill="#cbc4b4"/>' +
      '<rect x="0" y="212" width="400" height="48" fill="#6c6a64"/>' +
      crowd(196, 5, 270, 22) + person(80, 200, "#1d2a3a", "cc-bob"),
      sky("cs4", "#101a3a", "#5d4a7a"));
  }

  /* 5. White Plains Rd & E 225 St: green street signs, the wall tagged COLD CRUSH BROS, the 2 rattling by up on the el behind */
  function corner() {
    let brick = "";
    for (let y = 150; y < 232; y += 8) for (let x = (y / 8) % 2 ? 0 : -8; x < 250; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#7a3322"/>';
    const sign = (x, y, t, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 13.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + t + '</text>';
    let cars = "";
    for (let i = 0; i < 4; i++) cars += '<rect x="' + (i * 92) + '" y="62" width="88" height="26" rx="4" fill="#c9ced6" stroke="#6b7280" stroke-width="1.5"/>' + [10, 34, 58].map(d => '<rect x="' + (i * 92 + d) + '" y="67" width="16" height="10" fill="#d6e6f5"/>').join("") + '<rect x="' + (i * 92) + '" y="80" width="88" height="2" fill="' + RED + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cs5)"/>' + stars(6) +
      /* el structure across the sky */
      '<rect x="0" y="88" width="400" height="10" fill="#4a3f36"/><rect x="0" y="98" width="400" height="4" fill="#3a3129"/>' +
      [20, 110, 200, 290, 380].map(x => '<rect x="' + (x - 4) + '" y="100" width="8" height="134" fill="#4a3f36"/>').join("") +
      '<g class="cc-el">' + cars + bullet(14, 75, "2", RED) + '</g>' +
      block(260, 110, 140, 40, "#6b4a3a", 4) +
      '<rect x="250" y="150" width="150" height="84" fill="#3b3b42"/>' +
      [270, 330].map(x => '<rect x="' + x + '" y="196" width="36" height="3" fill="#e8d36b"/>').join("") +
      /* the tag wall */
      '<rect x="0" y="146" width="250" height="88" fill="#8a3b26"/>' + brick +
      tag("COLD CRUSH BROS", 12, 192, 26, ICE, -5) + tag("WEEKEND", 18, 222, 15, ROSE, -3) + tag("HEARTBREAKERS", 108, 226, 13, GOLD, -4) +
      '<rect x="278" y="58" width="6" height="176" fill="#4a4f56"/>' +
      sign(196, 108, "WHITE PLAINS RD", 124) + sign(216, 130, "E 225 ST", 84) +
      '<g transform="translate(222 196) rotate(-20)"><rect x="0" y="0" width="14" height="30" rx="3" fill="' + ROSE + '"/><rect x="3" y="-6" width="8" height="7" fill="#ccc"/></g>' +
      '<circle class="cc-mist" cx="214" cy="184" r="6" fill="' + ICE + '"/><circle class="cc-mist cc-mist2" cx="214" cy="184" r="5" fill="' + ICE + '"/><circle class="cc-mist cc-mist3" cx="214" cy="184" r="4" fill="' + ICE + '"/>' +
      '<rect x="0" y="234" width="400" height="26" fill="#3a3a40"/><rect x="0" y="234" width="400" height="3" fill="#cfcfcf"/>',
      sky("cs5", "#0f1838", "#3d5a8a"));
  }

  window.SCENES = { st225: st225, pal: pal, amph: amph, monroe: monroe, corner: corner };
})();
