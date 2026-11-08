/* lalahhathaway scenes (Regions tab: Chicago; Bronzeville, 47th Street = her father's family's street, the lead single of Made in Chicago). CSS classes prefixed lhh- (the page's own anim-train is kept).
   1 47th on the CTA Green Line, up on the 'L' over 47th St: green steel, the canopy, the black sign with the Green Line bar, the silver train sliding in
   2 47th Street, where her father's family settled in the Great Migration: greystone two-flats, the porch light on and the door open (known for their hospitality), a suitcase on the steps, leaves falling
   3 The American Conservatory of Music, where she learned piano: a practice room, an upright piano, the metronome swinging, the Loop 'L' rattling past the tall window on Wabash
   4 "Something" (the Grammy-winning take with Snarky Puppy): the band in a circle, the crowd in headphones, one voice splitting into a chord of three waves
   5 E 47th St and S Prairie Ave: green signs, LALAH tagged on the wall, the Green Line 'L' over 47th and the red-brick Rosenwald Courts behind */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lhhglow{0%,100%{opacity:.45}50%{opacity:1}}.lhh-glow{animation:lhhglow 2.2s ease-in-out infinite}.lhh-g2{animation-delay:-1.1s}' +
    '@keyframes lhhflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.lhh-flk{animation:lhhflick 2.6s infinite}' +
    '@keyframes lhhleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-60px,220px) rotate(260deg)}}.lhh-lf{transform-box:fill-box;animation:lhhleaf 6s linear infinite}.lhh-lf2{animation-delay:-2s}.lhh-lf3{animation-delay:-4s}' +
    '@keyframes lhhtick{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.lhh-met{transform-box:fill-box;transform-origin:50% 100%;animation:lhhtick 1s ease-in-out infinite}' +
    '@keyframes lhhpass{0%{transform:translateX(-260px)}100%{transform:translateX(420px)}}.lhh-pass{animation:lhhpass 5s linear infinite}' +
    '@keyframes lhhwave{0%{transform:translateX(0)}100%{transform:translateX(-60px)}}.lhh-wv{animation:lhhwave 2.4s linear infinite}.lhh-wv2{animation-duration:3.1s}.lhh-wv3{animation-duration:3.8s}' +
    '@keyframes lhhbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.lhh-bob{animation:lhhbob 1s ease-in-out infinite}.lhh-bob2{animation-delay:-.5s}' +
    '@keyframes lhhspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lhh-sp{animation:lhhspray 1.4s ease-out infinite}.lhh-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "lhh-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const BLUE = "#7fb2ff", GOLD = "#e8c46a", VIO = "#c084fc", CTAG = "#009b3a";
  const lcar = (x) => '<rect x="' + x + '" y="0" width="150" height="46" rx="5" fill="#cfd4da" stroke="#6b7178" stroke-width="2"/>' +
    Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + 10 + i * 27) + '" y="8" width="20" height="16" rx="2" fill="#1d262e"/>').join("") + '<rect x="' + x + '" y="30" width="150" height="4" fill="' + CTAG + '"/>';

  /* 1 */
  function lhhstation() {
    const tr = '<g class="anim-train"><g transform="translate(20 104)">' + lcar(0) + lcar(156) + '<circle cx="300" cy="38" r="3.5" fill="#fff6c2"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lhh1)"/>' +
      '<g fill="#3a3550">' + [[0, 120, 60], [64, 100, 44], [300, 96, 50], [356, 112, 44]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (200 - b[1]) + '"/>').join("") + '</g>' +
      '<path d="M0 64h400l-14-18h-372z" fill="#2f5a3a"/><rect x="0" y="64" width="400" height="6" fill="#244a2e"/>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 4) + '" y="70" width="8" height="84" fill="#2f5a3a"/>').join("") +
      '<rect x="0" y="150" width="400" height="12" fill="#3d6a48"/>' + tr +
      '<rect x="0" y="154" width="400" height="10" fill="#2f5a3a"/><rect x="0" y="164" width="400" height="8" fill="#e8c400"/><rect x="0" y="172" width="400" height="26" fill="#8a8680"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 36) + ' 198l18 62M' + (i * 36 + 36) + ' 198l-18 62" stroke="#2f5a3a" stroke-width="4"/>').join("") +
      '<rect x="0" y="198" width="400" height="6" fill="#2f5a3a"/><rect x="0" y="236" width="400" height="24" fill="#4e4e54"/>' +
      '<rect x="80" y="70" width="240" height="28" rx="3" fill="#111"/><text x="96" y="90" ' + font + ' font-size="17" fill="#fff">47th</text>' +
      '<rect x="210" y="77" width="96" height="14" rx="2" fill="' + CTAG + '"/><text x="258" y="87.5" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">Green Line</text>' +
      '<rect x="20" y="58" width="50" height="4" rx="2" fill="#fff8dc" class="lhh-flk" opacity=".8"/><rect x="330" y="58" width="50" height="4" rx="2" fill="#fff8dc" class="lhh-flk" opacity=".8"/>',
      sky("lhh1", "#2b2a5a", "#e8946a"));
  }

  /* 2 */
  function lhh47th() {
    const flat = (x, stone) => '<rect x="' + x + '" y="40" width="120" height="150" fill="' + stone + '"/><rect x="' + x + '" y="34" width="124" height="10" fill="#6a6a62" transform="translate(-2 0)"/>' +
      [62, 112].map(y => '<rect x="' + (x + 14) + '" y="' + y + '" width="24" height="34" fill="#22283a"/><rect x="' + (x + 48) + '" y="' + y + '" width="24" height="34" fill="#22283a"/><rect x="' + (x + 82) + '" y="' + y + '" width="24" height="34" fill="#22283a"/>').join("") +
      '<path d="M' + (x + 10) + ' 58h100M' + (x + 10) + ' 108h100" stroke="#e8e2d2" stroke-width="3"/>';
    const leaves = Array.from({ length: 9 }, (_, i) => '<ellipse class="lhh-lf' + ["", " lhh-lf2", " lhh-lf3"][i % 3] + '" cx="' + (40 + i * 42) + '" cy="' + (6 + (i * 23) % 40) + '" rx="4" ry="2.5" fill="' + ["#e2874c", "#e8c46a", "#c0502e"][i % 3] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lhh2)"/>' +
      flat(0, "#a8a294") + flat(140, "#b8b2a2") + flat(280, "#9e9888") +
      /* the middle house: porch, open door glowing, light on */
      '<rect x="176" y="150" width="48" height="40" fill="#ffd98a" class="lhh-glow"/><rect x="170" y="146" width="60" height="6" fill="#5a4a3a"/><circle cx="234" cy="140" r="4" fill="#fff3b0" class="lhh-glow lhh-g2"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (162 + i * -4) + '" y="' + (190 + i * 8) + '" width="' + (76 + i * 8) + '" height="8" fill="#8a8478" stroke="#6a665a"/>').join("") +
      '<path d="M162 190v-40M238 190v-40" stroke="#3a3430" stroke-width="3"/>' +
      '<rect x="250" y="206" width="30" height="20" rx="3" fill="#7a4a2a" stroke="#3a2010" stroke-width="2"/><path d="M258 206v-4h14v4" stroke="#3a2010" stroke-width="2" fill="none"/>' +
      '<rect x="0" y="222" width="400" height="38" fill="#4e4e54"/><rect x="0" y="222" width="400" height="4" fill="#c9c4b4"/>' +
      '<rect x="20" y="170" width="5" height="52" fill="#3a3a3a"/>' + sign(0, 150, 90, "E 47th St") +
      leaves,
      sky("lhh2", "#f2c88a", "#f6e2c2"));
  }

  /* 3 */
  function lhhconserv() {
    return svg(
      '<rect width="400" height="260" fill="#2a2018"/>' +
      '<rect x="0" y="0" width="400" height="190" fill="#6a4e3a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 0v190" stroke="#5a4030" stroke-width="2"/>').join("") +
      /* tall window with the Wabash 'L' going past */
      '<rect x="230" y="20" width="140" height="130" fill="#9cc6e8"/><g clip-path="url(#lhh3c)"><rect x="230" y="70" width="140" height="10" fill="#3a3e46"/>' +
      '<g class="lhh-pass"><g transform="translate(0 46)"><rect x="0" y="0" width="120" height="24" rx="3" fill="#cfd4da" stroke="#6b7178"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (8 + i * 22) + '" y="5" width="14" height="10" fill="#1d262e"/>').join("") + '<rect x="0" y="17" width="120" height="3" fill="#c60c30"/></g></g>' +
      '<path d="M240 80v70M300 80v70M360 80v70" stroke="#3a3e46" stroke-width="4"/></g>' +
      '<rect x="226" y="16" width="148" height="138" fill="none" stroke="#3a2a1e" stroke-width="8"/><path d="M300 20v130M230 84h140" stroke="#3a2a1e" stroke-width="5"/>' +
      /* upright piano */
      '<rect x="30" y="84" width="170" height="120" rx="4" fill="#1a1410" stroke="#3a2a1e" stroke-width="2"/><rect x="40" y="94" width="150" height="44" fill="#241a14"/>' +
      '<rect x="36" y="148" width="158" height="16" fill="#f8f6ee"/>' + Array.from({ length: 24 }, (_, i) => '<path d="M' + (36 + i * 6.6) + ' 148v16" stroke="#bbb" stroke-width=".8"/>').join("") +
      Array.from({ length: 24 }, (_, i) => [1, 2, 4, 5, 6].includes(i % 7) ? '<rect x="' + (40.4 + i * 6.6) + '" y="148" width="3.6" height="9" fill="#111"/>' : "").join("") +
      '<rect x="80" y="104" width="60" height="30" fill="#f4efe0"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M84 ' + (110 + i * 5) + 'h52" stroke="#555" stroke-width=".8"/>').join("") +
      /* metronome */
      '<path d="M160 136l10-40h12l10 40z" fill="#7a4a2a" stroke="#3a2010" stroke-width="1.5"/><g class="lhh-met"><path d="M176 132v-34" stroke="#e8c46a" stroke-width="2"/><rect x="172.5" y="104" width="7" height="6" fill="#e8c46a"/></g>' +
      '<rect x="0" y="204" width="400" height="56" fill="#5a3a24"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52) + ' 204v56" stroke="#4a2e1c" stroke-width="1.5"/>').join("") +
      '<rect x="72" y="210" width="86" height="12" rx="3" fill="#3a2418"/>' +
      '<rect x="20" y="12" width="190" height="24" rx="3" fill="#111"/><text x="115" y="29" text-anchor="middle" ' + font + ' font-size="10.5" fill="' + GOLD + '" letter-spacing="1">CONSERVATORY OF MUSIC</text>',
      '<clipPath id="lhh3c"><rect x="230" y="20" width="140" height="130"/></clipPath>');
  }

  /* 4 */
  function lhhchord() {
    const wave = (y, c, cls, amp) => '<g class="' + cls + '"><path d="M120 ' + y + Array.from({ length: 8 }, (_, i) => 'q15 ' + (i % 2 ? amp : -amp) + ' 30 0').join("") + '" stroke="' + c + '" stroke-width="3" fill="none"/></g>';
    const head = (x, y, c) => '<g class="lhh-bob' + (x % 2 ? " lhh-bob2" : "") + '"><circle cx="' + x + '" cy="' + y + '" r="9" fill="#05060a"/><path d="M' + (x - 10) + ' ' + y + 'q0-14 10-14t10 14" stroke="' + c + '" stroke-width="3" fill="none"/><rect x="' + (x - 12) + '" y="' + (y - 2) + '" width="5" height="8" rx="2" fill="' + c + '"/><rect x="' + (x + 7) + '" y="' + (y - 2) + '" width="5" height="8" rx="2" fill="' + c + '"/><rect x="' + (x - 11) + '" y="' + (y + 8) + '" width="22" height="20" rx="6" fill="#05060a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#0a0b16"/>' +
      '<ellipse cx="200" cy="200" rx="190" ry="50" fill="#16182a"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (10 + i * 70) + '" y="0" width="40" height="8" fill="#22243a"/><circle cx="' + (30 + i * 70) + '" cy="14" r="4" fill="#ffe8b0" class="lhh-glow' + (i % 2 ? " lhh-g2" : "") + '"/>').join("") +
      /* the band: drum kit, keys, bass */
      '<g transform="translate(40 150)"><circle cx="20" cy="20" r="16" fill="#2a2e40" stroke="#9aa1b8" stroke-width="2"/><circle cx="50" cy="8" r="9" fill="#2a2e40" stroke="#9aa1b8" stroke-width="2"/><ellipse cx="60" cy="-8" rx="12" ry="2.5" fill="' + GOLD + '"/></g>' +
      '<g transform="translate(300 150)"><rect x="0" y="0" width="70" height="12" rx="2" fill="#111" stroke="#555"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (3 + i * 6.5) + '" y="2" width="5" height="8" fill="#eee"/>').join("") + '<path d="M8 12v26M62 12v26" stroke="#555" stroke-width="3"/></g>' +
      /* the mic and the one voice splitting into three */
      '<path d="M200 230v-70" stroke="#3a3e46" stroke-width="4"/><path d="M184 230h32" stroke="#3a3e46" stroke-width="4"/><rect x="193" y="138" width="14" height="24" rx="7" fill="#c9ced6" stroke="#555" stroke-width="1.5"/>' +
      '<g clip-path="url(#lhh4c)">' + wave(70, BLUE, "lhh-wv", 10) + wave(92, VIO, "lhh-wv lhh-wv2", 7) + wave(112, GOLD, "lhh-wv lhh-wv3", 5) + '</g>' +
      '<path d="M200 136q0-30 -40-46M200 136q0-20 -40-26M200 136q0-12 -40-6" stroke="#fff" stroke-width="1.5" fill="none" opacity=".5"/>' +
      Array.from({ length: 12 }, (_, i) => head(18 + i * 34, 236, [BLUE, VIO, GOLD][i % 3])).join("") +
      '<rect x="120" y="14" width="160" height="24" rx="3" fill="#111"/><text x="200" y="31" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" letter-spacing="3">ONE VOICE, A CHORD</text>',
      '<clipPath id="lhh4c"><rect x="120" y="50" width="200" height="80"/></clipPath>');
  }

  /* 5 */
  function lhhcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#lhh5)"/>' + stars(16) +
      /* Rosenwald Courts: long red-brick walk-up blocks with the courtyard arch */
      '<rect x="20" y="54" width="250" height="82" fill="#8a3e2c"/>' + Array.from({ length: 3 }, (_, r) => Array.from({ length: 12 }, (_, c) => '<rect class="' + ((r + c) % 5 === 0 ? "lhh-glow" : "") + '" x="' + (28 + c * 20) + '" y="' + (62 + r * 22) + '" width="10" height="14" fill="' + ((r + c) % 5 === 0 ? "#ffd98a" : "#2a2230") + '"/>').join("")).join("") +
      '<path d="M128 136v-30q17-18 34 0v30z" fill="#2a1a18"/><rect x="18" y="50" width="254" height="6" fill="#d8c8a8"/>' +
      /* the Green Line 'L' over 47th */
      '<rect x="0" y="34" width="400" height="10" fill="#2f5a3a"/>' + [290, 340, 390].map(x => '<rect x="' + (x - 3) + '" y="44" width="6" height="92" fill="#2f5a3a"/>').join("") +
      '<g class="lhh-pass"><g transform="translate(0 16)"><rect x="0" y="0" width="120" height="18" rx="3" fill="#cfd4da"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (8 + i * 22) + '" y="4" width="14" height="8" fill="#ffe8a8" class="lhh-glow"/>').join("") + '<rect x="0" y="14" width="120" height="3" fill="' + CTAG + '"/></g></g>' +
      '<rect x="0" y="136" width="400" height="88" fill="#3a3448"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#2e2a3c" stroke-width="1"/>').join("") +
      tag("LALAH", 24, 196, 60, BLUE, -6) + tag("47TH STREET", 222, 178, 18, GOLD, -4) + tag("FIRST DAUGHTER", 26, 216, 16, "#fff", -3) + tag("SING THE CHORD", 214, 210, 16, VIO, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(306, 98, 92, "E 47th St") + sign(300, 124, 100, "S Prairie Ave") +
      '<g class="lhh-sp"><circle cx="196" cy="160" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="lhh-sp lhh-sp2"><circle cx="202" cy="154" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("lhh5", "#0e1030", "#6a4a8a"));
  }

  window.SCENES = { lhhstation: lhhstation, lhh47th: lhh47th, lhhconserv: lhhconserv, lhhchord: lhhchord, lhhcorner: lhhcorner };
})();
