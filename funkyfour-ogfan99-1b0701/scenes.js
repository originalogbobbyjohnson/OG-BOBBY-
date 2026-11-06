/* Funky 4 + 1 game (NYC map, the Bronx: East Tremont, by Crotona Av and the Murphy Houses where the Brothers Disco played the first jam).
   The 2 and 5 pulling into E 180 St with the old Mission-style station house, the Murphy Houses courtyard jam with the garbage-can speakers,
   the TV studio stage in 1981 (first rap group on national TV), the Mudd Club on White St downtown, and Crotona Av & E 175 St. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fkflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.fk-flk{animation:fkflick 2.4s infinite}.fk-flk2{animation-delay:1.1s}' +
    '@keyframes fkbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.fk-bob{animation:fkbob .55s ease-in-out infinite}.fk-bob2{animation-delay:.27s}' +
    '@keyframes fkpulse{0%{opacity:.9;transform:scale(.6)}100%{opacity:0;transform:scale(1.6)}}.fk-wave{transform-box:fill-box;transform-origin:50% 50%;animation:fkpulse 1.2s ease-out infinite}.fk-wave2{animation-delay:.6s}' +
    '@keyframes fkspin{to{transform:rotate(360deg)}}.fk-spin{transform-box:fill-box;transform-origin:50% 50%;animation:fkspin 1.4s linear infinite}' +
    '@keyframes fksweep{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.fk-beam{transform-box:fill-box;transform-origin:50% 0%;animation:fksweep 3.2s ease-in-out infinite}.fk-beam2{animation-delay:-1.6s}' +
    '@keyframes fkblink{0%,100%{opacity:1}50%{opacity:.25}}.fk-blink{animation:fkblink 1.1s steps(2) infinite}' +
    '@keyframes fktaxi{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.fk-taxi{animation:fktaxi 5s linear infinite}' +
    '@keyframes fkmist{0%{opacity:.8;transform:translate(0,0) scale(.5)}100%{opacity:0;transform:translate(-26px,-10px) scale(1.5)}}.fk-mist{transform-box:fill-box;transform-origin:50% 50%;animation:fkmist 1.3s ease-out infinite}.fk-mist2{animation-delay:.45s}.fk-mist3{animation-delay:.9s}' +
    '@keyframes fkstar{0%,100%{opacity:.25}50%{opacity:1}}.fk-tw{animation:fkstar 2s ease-in-out infinite}.fk-tw2{animation-delay:1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 2 ? "fk-tw" : "fk-tw fk-tw2") + '" cx="' + ((i * 97 + 13) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const GOLD = "#ffd23f", RED = "#ee352e", GRN = "#00933c", BRICK = "#8a3b26";

  /* brick NYCHA tower: brick face, rows of windows (some lit) */
  const tower = (x, y, w, h, seed) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + BRICK + '"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#5c2416"/>';
    let k = seed || 1;
    for (let yy = y + 10; yy < y + h - 8; yy += 13) for (let xx = x + 6; xx < x + w - 8; xx += 14) { k = (k * 37 + 11) % 101; s += '<rect x="' + xx + '" y="' + yy + '" width="8" height="8" fill="' + (k % 4 === 0 ? "#ffd98a" : "#2a1a14") + '"/>'; }
    return s;
  };

  /* 1. E 180 St: the 2 and the 5 pulling in on the open platform, the 1912 Mission-style station house (cream stucco, red tile roof, arched windows) behind */
  function e180() {
    let win = "";
    for (let x = 34; x < 290; x += 34) win += '<rect x="' + x + '" y="148" width="22" height="18" rx="2" fill="#d6e6f5" opacity=".9"/>';
    let arches = "";
    for (let x = 118; x < 290; x += 30) arches += '<path d="M' + x + ' 104v-14a8 8 0 0 1 16 0v14z" fill="#3a2a22"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fs1)"/>' + stars(8) +
      /* station house */
      '<g transform="translate(0 -18)">' +
      '<rect x="96" y="70" width="210" height="62" fill="#efe1c2"/>' +
      '<path d="M88 72l20-18h186l20 18z" fill="#b5462a"/><path d="M88 72h226" stroke="#7d2d1a" stroke-width="2"/>' +
      '<rect x="176" y="34" width="50" height="40" fill="#efe1c2"/><path d="M170 36l31-18l31 18z" fill="#b5462a"/>' +
      '<path d="M190 66v-16a11 11 0 0 1 22 0v16z" fill="#3a2a22"/>' + arches +
      '<rect x="96" y="104" width="210" height="4" fill="#d8c59c"/>' +
      [104, 298].map(x => '<rect x="' + x + '" y="108" width="6" height="24" fill="#d8c59c"/>').join("") + '</g>' +
      /* canopy over the platform */
      '<rect x="0" y="100" width="400" height="8" fill="#2f4a3a"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + (x - 3) + '" y="108" width="6" height="78" fill="#2f4a3a"/>').join("") +
      /* black sign */
      '<rect x="80" y="110" width="240" height="26" rx="3" fill="#111"/><rect x="80" y="110" width="240" height="3" fill="#fff"/>' +
      '<text x="94" y="129" ' + font + ' font-size="14" fill="#fff">E 180 St</text>' + bullet(274, 123, "2", RED) + bullet(300, 123, "5", GRN) +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="10" y="140" width="300" height="46" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="146" width="16" height="22" rx="2" fill="#d6e6f5"/>' + bullet(298, 176, "2", RED) +
        '<rect x="10" y="170" width="276" height="3" fill="' + RED + '"/><circle cx="22" cy="180" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="186" width="400" height="8" fill="#eab308"/><rect x="0" y="194" width="400" height="66" fill="#6a665f"/>' +
      person(334, 210, "#1b1b1b") + person(356, 214, "#2a2a2a", "fk-bob") +
      txt("EAST TREMONT, THE BRONX", 150, 236, 11, "#f1ead8", 'letter-spacing="3"'),
      sky("fs1", "#1d2350", "#f08a4b"));
  }

  /* 2. The Murphy Houses courtyard jam: the Brothers Disco with garbage-can speakers, turntables on a folding table, power off the lamppost, the crowd moving */
  function murphy() {
    const can = (x, y) => '<rect x="' + x + '" y="' + y + '" width="30" height="40" rx="3" fill="#a9b0b8" stroke="#5b636c" stroke-width="2"/>' +
      '<path d="M' + x + ' ' + (y + 12) + 'h30M' + x + ' ' + (y + 26) + 'h30" stroke="#7d858e" stroke-width="2"/>' +
      '<circle cx="' + (x + 15) + '" cy="' + (y + 20) + '" r="9" fill="#1a1a1a" stroke="#333"/><circle cx="' + (x + 15) + '" cy="' + (y + 20) + '" r="3" fill="#555"/>';
    const crowd = [40, 64, 88, 300, 324, 348, 372].map((x, i) => person(x, 196 + (i % 2) * 4, i % 3 ? "#16121c" : "#231b2a", i % 2 ? "fk-bob" : "fk-bob fk-bob2")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fs2)"/>' + stars(10) +
      tower(10, 40, 96, 140, 3) + tower(296, 30, 96, 150, 7) + tower(130, 70, 70, 110, 5) +
      '<rect x="0" y="178" width="400" height="82" fill="#3b3a40"/><rect x="0" y="178" width="400" height="3" fill="#56545c"/>' +
      /* lamppost with the cord */
      '<rect x="232" y="112" width="5" height="68" fill="#2a2d33"/><path d="M234 112q10-8 20-3" stroke="#2a2d33" stroke-width="4" fill="none"/><circle cx="254" cy="112" r="6" fill="#fff1b8" class="fk-flk"/>' +
      '<path d="M234 170q-30 30-74 2" stroke="#111" stroke-width="2" fill="none"/>' +
      /* banner */
      '<rect x="130" y="78" width="140" height="22" fill="#f6efdc" transform="rotate(-2 200 89)"/>' +
      '<text x="200" y="94" text-anchor="middle" textLength="126" lengthAdjust="spacingAndGlyphs" font-family="Permanent Marker, Sedgwick Ave Display, cursive" font-size="13" fill="#c1121f" transform="rotate(-2 200 89)">THE BROTHERS DISCO</text>' +
      /* speakers + table */
      can(104, 146) + can(104, 106) + can(266, 146) + can(266, 106) +
      '<circle class="fk-wave" cx="119" cy="126" r="16" fill="none" stroke="' + GOLD + '" stroke-width="2"/><circle class="fk-wave fk-wave2" cx="281" cy="126" r="16" fill="none" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<rect x="150" y="150" width="100" height="8" fill="#5a3d2b"/><rect x="156" y="158" width="4" height="28" fill="#3a271b"/><rect x="240" y="158" width="4" height="28" fill="#3a271b"/>' +
      [176, 224].map(x => '<rect x="' + (x - 18) + '" y="140" width="36" height="10" rx="2" fill="#222"/><ellipse class="fk-spin" cx="' + x + '" cy="142" rx="13" ry="4" fill="#111" stroke="#444"/>').join("") +
      '<rect x="194" y="142" width="12" height="8" fill="#333"/>' +
      crowd +
      txt("MURPHY HOUSES", 200, 238, 12, "#f1ead8", 'letter-spacing="4"'),
      sky("fs2", "#140f2e", "#5a2d5e"));
  }

  /* 3. The TV studio stage, 1981: lighting grid, sweeping spotlights, two cameras on pedestals, five mic stands, the ON AIR light blinking */
  function studio() {
    let grid = "";
    for (let x = 20; x < 400; x += 40) grid += '<rect x="' + (x - 6) + '" y="14" width="12" height="10" rx="2" fill="#3d3d44"/><circle cx="' + x + '" cy="26" r="3" fill="#ffe9a8"/>';
    const mics = [120, 160, 200, 240, 280].map(x => '<rect x="' + (x - 1) + '" y="150" width="2" height="40" fill="#cfd3d8"/><ellipse cx="' + x + '" cy="148" rx="4" ry="5" fill="#2a2a2a" stroke="#cfd3d8"/><path d="M' + (x - 9) + ' 190h18" stroke="#cfd3d8" stroke-width="2"/>').join("");
    const cam = x => '<g><rect x="' + (x - 22) + '" y="176" width="44" height="26" rx="3" fill="#2b2d33"/><rect x="' + (x + 18) + '" y="182" width="16" height="12" rx="2" fill="#1a1b1f"/><rect x="' + (x - 3) + '" y="202" width="6" height="30" fill="#2b2d33"/><path d="M' + (x - 20) + ' 236h40" stroke="#2b2d33" stroke-width="5"/><circle cx="' + (x - 14) + '" cy="182" r="2.5" fill="#e63946" class="fk-blink"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#120f18"/>' +
      '<rect x="0" y="10" width="400" height="6" fill="#2a2a30"/>' + grid +
      '<path class="fk-beam" d="M100 26l-40 150h80z" fill="#fff4c2" opacity=".18"/><path class="fk-beam fk-beam2" d="M300 26l-40 150h80z" fill="#cde8ff" opacity=".18"/>' +
      /* back wall, ON AIR */
      '<rect x="60" y="44" width="280" height="96" rx="4" fill="#24203a"/>' +
      [80, 120, 160, 200, 240, 280, 320].map((x, i) => '<rect x="' + (x - 14) + '" y="56" width="28" height="70" fill="' + (i % 2 ? "#2f2a4d" : "#3a3460") + '"/>').join("") +
      '<rect x="160" y="62" width="80" height="22" rx="3" fill="#2a0a0a" stroke="#555"/><text class="fk-blink" x="200" y="78" text-anchor="middle" ' + font + ' font-size="14" fill="#ff3b3b">ON AIR</text>' +
      txt("STUDIO 8H", 200, 112, 13, "#d9d4ff", 'letter-spacing="4"') +
      /* stage */
      '<path d="M70 190h260l20 14H50z" fill="#3a2f2a"/><rect x="50" y="204" width="300" height="10" fill="#241c18"/>' + mics +
      '<ellipse cx="200" cy="192" rx="110" ry="8" fill="#fff4c2" opacity=".12"/>' +
      cam(36) + cam(364) +
      '<rect x="0" y="240" width="400" height="20" fill="#0c0a10"/>' +
      txt("FIRST RAP ON NATIONAL TV", 200, 254, 10, GOLD, 'letter-spacing="2"'));
  }

  /* 4. The Mudd Club downtown, 77 White St: the old stone loft front at night, a chain across the door, the line outside, a cab rolling by */
  function mudd() {
    let wins = "";
    for (let fl = 0; fl < 4; fl++) for (let i = 0; i < 4; i++) wins += '<rect x="' + (110 + i * 48) + '" y="' + (30 + fl * 34) + '" width="24" height="24" fill="' + ((fl + i) % 3 ? "#1d2230" : "#ffd98a") + '"/><rect x="' + (108 + i * 48) + '" y="' + (54 + fl * 34) + '" width="28" height="3" fill="#bdb6a6"/>';
    const line = [40, 62, 84, 330, 352].map((x, i) => person(x, 186, i % 2 ? "#121212" : "#1f1f24", i % 2 ? "fk-bob" : "fk-bob fk-bob2")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fs4)"/>' + stars(9) +
      '<rect x="0" y="40" width="90" height="170" fill="#2a2a33"/><rect x="310" y="30" width="90" height="180" fill="#262630"/>' +
      '<rect x="96" y="18" width="208" height="192" fill="#d8d0bd"/><rect x="92" y="14" width="216" height="8" fill="#bdb6a6"/>' + wins +
      /* ground floor */
      '<rect x="96" y="166" width="208" height="44" fill="#2e2a26"/>' +
      '<rect x="180" y="170" width="40" height="40" fill="#0f0d0c"/><path d="M180 192q20 10 40 0" stroke="#c9ced6" stroke-width="2" fill="none"/>' +
      [176, 224].map(x => '<rect x="' + (x - 2) + '" y="186" width="4" height="24" fill="#c9ced6"/>').join("") +
      txt("77", 200, 166, 11, "#2e2a26") +
      '<text x="140" y="196" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="12" fill="' + GOLD + '" class="fk-flk">MUDD CLUB</text>' +
      '<rect x="0" y="210" width="400" height="50" fill="#33333a"/><rect x="0" y="210" width="400" height="3" fill="#55555e"/>' +
      line +
      '<g class="fk-taxi"><rect x="0" y="222" width="70" height="20" rx="5" fill="#f2c200"/><rect x="12" y="214" width="40" height="12" rx="3" fill="#f2c200"/><rect x="16" y="216" width="14" height="8" fill="#9fc5e8"/><rect x="34" y="216" width="14" height="8" fill="#9fc5e8"/><circle cx="14" cy="242" r="6" fill="#111"/><circle cx="56" cy="242" r="6" fill="#111"/><circle cx="68" cy="230" r="2.5" fill="#fff6c2"/></g>' +
      txt("WHITE ST, DOWNTOWN", 200, 256, 10, "#f1ead8", 'letter-spacing="3"'),
      sky("fs4", "#0b0e22", "#2c2350"));
  }

  /* 5. Crotona Av and E 175 St: green street signs, the Murphy Houses towers behind, the brick wall with the group's name tagged, spray in the air */
  function corner() {
    let brick = "";
    for (let y = 150; y < 230; y += 8) for (let x = (y / 8) % 2 ? 0 : -8; x < 400; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#7a3322"/>';
    const sign = (x, y, t, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 13.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + t + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#fs5)"/>' +
      tower(20, 26, 90, 124, 2) + tower(126, 44, 70, 106, 4) + tower(214, 20, 96, 130, 6) +
      '<rect x="0" y="146" width="400" height="88" fill="#8a3b26"/>' + brick +
      tag("FUNKY 4+1", 40, 200, 40, GOLD, -5) + tag("GET FUNKY", 196, 226, 16, "#4cc9f0", -3) +
      /* sign pole */
      '<rect x="338" y="58" width="6" height="176" fill="#4a4f56"/>' +
      sign(268, 62, "CROTONA AV", 118) + sign(282, 84, "E 175 ST", 92) +
      /* spray can + mist */
      '<g transform="translate(320 180) rotate(-20)"><rect x="0" y="0" width="14" height="30" rx="3" fill="#ff3b3b"/><rect x="3" y="-6" width="8" height="7" fill="#ccc"/></g>' +
      '<circle class="fk-mist" cx="312" cy="168" r="6" fill="' + GOLD + '"/><circle class="fk-mist fk-mist2" cx="312" cy="168" r="5" fill="' + GOLD + '"/><circle class="fk-mist fk-mist3" cx="312" cy="168" r="4" fill="' + GOLD + '"/>' +
      '<rect x="0" y="234" width="400" height="26" fill="#3a3a40"/><rect x="0" y="234" width="400" height="3" fill="#cfcfcf"/>',
      sky("fs5", "#2a4f8a", "#f5b26b"));
  }

  window.SCENES = { e180: e180, murphy: murphy, studio: studio, mudd: mudd, corner: corner };
})();
