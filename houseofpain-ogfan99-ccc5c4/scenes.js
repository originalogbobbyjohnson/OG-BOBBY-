/* houseofpain scenes (REGIONS tab: Los Angeles + SoCal; Woodland Hills, San Fernando Valley - Everlast and Danny Boy met at Taft High; DJ Lethal came to LA in 1987). CSS classes prefixed hp-.
   1 Metro G Line busway, Pierce College station on Winnetka Ave: the silver G Line bus pulling in, black station sign with the orange G bullet.
   2 Taft High, Ventura Blvd and Winnetka Ave: the low tan campus in red, gold and black, the flag waving, where Everlast and Danny Boy met.
   3 Jump Around in the stands: a college stadium at night, red and white rows jumping, the light towers blazing (the song every stadium jumps to).
   4 The 101 Ventura Freeway through Woodland Hills at dusk: green overhead signs, cars streaming, the Santa Monica Mountains behind.
   5 Ventura Blvd and Winnetka Ave by Taft High: green signs, HOUSE OF PAIN tagged in green, white and orange, the Warner Center towers behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes hpflk{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.hp-flk{animation:hpflk 2.2s infinite}.hp-flk2{animation-delay:.7s}' +
    '@keyframes hpcarR{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.hp-carR{animation:hpcarR 5s linear infinite}.hp-carR2{animation-delay:-2.5s}' +
    '@keyframes hpcarL{from{transform:translateX(520px)}to{transform:translateX(-140px)}}.hp-carL{animation:hpcarL 4.4s linear infinite}.hp-carL2{animation-delay:-2.2s}' +
    '@keyframes hpsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.hp-palm{transform-box:fill-box;transform-origin:50% 100%;animation:hpsway 3.5s ease-in-out infinite}.hp-palm2{animation-delay:-1.7s}' +
    '@keyframes hpflag{0%,100%{transform:skewY(0deg) scaleX(1)}50%{transform:skewY(-6deg) scaleX(.9)}}.hp-flag{transform-box:fill-box;transform-origin:0% 50%;animation:hpflag 1.4s ease-in-out infinite}' +
    '@keyframes hpjump{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.hp-jump{animation:hpjump .6s ease-in-out infinite}.hp-j2{animation-delay:-.3s}.hp-j3{animation-delay:-.15s}' +
    '@keyframes hpbeam{0%,100%{opacity:.16}50%{opacity:.4}}.hp-beam{animation:hpbeam 1.6s ease-in-out infinite}.hp-beam2{animation-delay:-.8s}' +
    '@keyframes hpspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.hp-sp{animation:hpspray 1.4s ease-out infinite}.hp-sp2{animation-delay:.45s}' +
    '@keyframes hpblink{0%,60%,100%{opacity:1}70%,90%{opacity:.15}}.hp-blink{animation:hpblink 1.8s infinite}' +
    '@keyframes hpwin{0%,30%{opacity:.2}45%,100%{opacity:.95}}.hp-win{animation:hpwin 4s ease-in-out infinite alternate}.hp-w2{animation-delay:-1.3s}.hp-w3{animation-delay:-2.7s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GREEN = "#2fb35a", GOLD = "#e8b23a", ORANGE = "#f08a2c", GLINE = "#f68b1f", RED = "#b8202e";
  const palm = (x, base, h, cls) => '<g class="hp-palm' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#2a1d14" stroke-width="4" fill="none"/>' +
    [[-22, -6], [-16, 8], [20, -6], [16, 9], [0, -14]].map(([dx, dy]) => '<path d="M' + (x + 2) + ' ' + (base - h) + 'q' + dx / 2 + ' ' + (dy - 8) + ' ' + dx + ' ' + dy + '" stroke="#1f2a1c" stroke-width="4" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const car = (x, y, body, cls) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="44" height="11" rx="4" fill="' + body + '"/><rect x="' + (x + 9) + '" y="' + (y - 7) + '" width="24" height="8" rx="3" fill="' + body + '" opacity=".85"/>' +
    '<circle cx="' + (x + 10) + '" cy="' + (y + 12) + '" r="4" fill="#111"/><circle cx="' + (x + 34) + '" cy="' + (y + 12) + '" r="4" fill="#111"/><circle cx="' + (x + 43) + '" cy="' + (y + 4) + '" r="2" fill="#fff6c8"/></g>';
  const shamrock = (x, y, r, fill) => '<g fill="' + fill + '"><circle cx="' + x + '" cy="' + (y - r) + '" r="' + r + '"/><circle cx="' + (x - r) + '" cy="' + (y + r * 0.2) + '" r="' + r + '"/><circle cx="' + (x + r) + '" cy="' + (y + r * 0.2) + '" r="' + r + '"/>' +
    '<path d="M' + x + ' ' + (y + r * 0.6) + 'q2 ' + (r * 1.6) + ' ' + (r * 1.2) + ' ' + (r * 2.4) + '" stroke="' + fill + '" stroke-width="' + Math.max(1.5, r / 3) + '" fill="none"/></g>';
  const mtns = (y, fill, op) => '<path d="M0 ' + y + ' L40 ' + (y - 26) + ' L84 ' + (y - 10) + ' L130 ' + (y - 34) + ' L182 ' + (y - 14) + ' L232 ' + (y - 40) + ' L288 ' + (y - 16) + ' L336 ' + (y - 32) + ' L400 ' + (y - 12) + ' V' + (y + 20) + ' H0z" fill="' + fill + '" opacity="' + op + '"/>';

  /* 1. Metro G Line busway, Pierce College station */
  function hpstation() {
    const wins = (x0, n) => Array.from({ length: n }, (_, i) => '<rect x="' + (x0 + i * 32) + '" y="122" width="24" height="20" rx="2" fill="#22303a"/>').join("");
    const bus = '<g class="anim-train">' +
      '<rect x="20" y="112" width="170" height="54" rx="7" fill="#d9dde2" stroke="#7a8088" stroke-width="2"/>' + wins(30, 5) +
      '<rect x="196" y="112" width="170" height="54" rx="7" fill="#d9dde2" stroke="#7a8088" stroke-width="2"/>' + wins(206, 4) +
      '<rect x="186" y="118" width="14" height="44" fill="#4a4f56"/><path d="M188 120v40M192 120v40M196 120v40" stroke="#2a2e33" stroke-width="1"/>' +
      '<rect x="20" y="146" width="346" height="7" fill="' + GLINE + '"/>' +
      '<rect x="334" y="120" width="30" height="24" rx="3" fill="#22303a"/><rect x="300" y="113" width="64" height="7" rx="1" fill="#111"/><text x="332" y="118.6" text-anchor="middle" ' + font + ' font-size="5" fill="#ffb000">G LINE CHATSWORTH</text>' +
      '<circle cx="64" cy="168" r="11" fill="#1a1a1a"/><circle cx="64" cy="168" r="5" fill="#aaa"/><circle cx="240" cy="168" r="11" fill="#1a1a1a"/><circle cx="240" cy="168" r="5" fill="#aaa"/><circle cx="330" cy="168" r="11" fill="#1a1a1a"/><circle cx="330" cy="168" r="5" fill="#aaa"/>' +
      '<circle class="hp-flk" cx="362" cy="158" r="3" fill="#fff6c8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#hps1)"/>' +
      '<circle cx="330" cy="40" r="20" fill="#fff1c0" opacity=".85"/>' +
      mtns(92, "#8a7a6a", ".5") +
      palm(30, 108, 70) + palm(372, 108, 80, " hp-palm2") +
      /* station canopy */
      '<rect x="58" y="60" width="284" height="8" fill="#5c6670"/><path d="M58 60 L200 46 L342 60z" fill="#7d8892"/>' +
      '<rect x="80" y="68" width="5" height="46" fill="#4a535c"/><rect x="315" y="68" width="5" height="46" fill="#4a535c"/>' +
      /* black station sign with the orange G bullet */
      '<rect x="120" y="72" width="160" height="30" rx="3" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<circle cx="140" cy="87" r="11" fill="' + GLINE + '"/><text x="140" y="92.5" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">G</text>' +
      '<text x="216" y="92" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Pierce College</text>' +
      /* busway + platform */
      '<rect x="0" y="108" width="400" height="72" fill="#4c4c4f"/><rect x="0" y="178" width="400" height="10" fill="#d4c9a8"/><rect x="0" y="186" width="400" height="74" fill="#b8ab88"/>' +
      '<path d="M0 182h400" stroke="#f2d64b" stroke-width="3" stroke-dasharray="12 8"/>' +
      bus +
      '<rect x="40" y="200" width="320" height="4" fill="#8a7d5e"/>',
      sky("hps1", "#5aa6dc", "#f6d9a6"));
  }

  /* 2. Taft High: low tan campus, red/gold/black, flag waving */
  function hptaft() {
    const winrow = (y) => Array.from({ length: 10 }, (_, i) => '<rect x="' + (66 + i * 28) + '" y="' + y + '" width="18" height="16" fill="#2c3a46"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#hps2)"/>' +
      '<circle cx="64" cy="44" r="22" fill="#fff4cc"/>' +
      mtns(122, "#9c8c76", ".45") +
      palm(26, 196, 96) + palm(376, 196, 104, " hp-palm2") +
      /* main building */
      '<rect x="54" y="100" width="292" height="96" fill="#dcc79c"/><rect x="54" y="96" width="292" height="8" fill="#6a4a2a"/>' +
      '<rect x="54" y="104" width="292" height="4" fill="' + RED + '"/><rect x="54" y="108" width="292" height="2" fill="' + GOLD + '"/>' +
      winrow(118) + winrow(150) +
      /* entry block with the name */
      '<rect x="150" y="80" width="100" height="116" fill="#e6d4ac" stroke="#6a4a2a" stroke-width="2"/>' +
      '<rect x="150" y="80" width="100" height="22" fill="#111"/><text x="200" y="96" text-anchor="middle" ' + font + ' font-size="14" fill="' + GOLD + '">TAFT HIGH</text>' +
      '<rect x="176" y="150" width="48" height="46" fill="#3a2a1a"/><path d="M200 150v46" stroke="#e6d4ac" stroke-width="2"/>' +
      '<rect x="160" y="112" width="80" height="30" fill="#2c3a46"/><path d="M180 112v30M200 112v30M220 112v30" stroke="#e6d4ac" stroke-width="2"/>' +
      /* flagpole + flag (plain red/gold/black school colors) */
      '<rect x="292" y="40" width="3" height="60" fill="#c0c5ce"/><circle cx="293.5" cy="39" r="2.5" fill="' + GOLD + '"/>' +
      '<g class="hp-flag"><rect x="295" y="42" width="38" height="24" fill="' + RED + '" stroke="#111" stroke-width="1.5"/><text x="314" y="60" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '">T</text></g>' +
      /* lawn + walk */
      '<rect x="0" y="196" width="400" height="64" fill="#5e9a48"/><path d="M176 196 L150 260 H250 L224 196z" fill="#d8cdb0"/>' +
      '<rect x="0" y="196" width="400" height="4" fill="#4c8038"/>' +
      Array.from({ length: 16 }, (_, i) => '<path d="M' + (8 + i * 25) + ' 232q3 -6 6 0" stroke="#4c8038" stroke-width="2" fill="none"/>').join(""),
      sky("hps2", "#78b6e6", "#fbe6bc"));
  }

  /* 3. Jump Around: stadium at night, red and white rows jumping */
  function hpstadium() {
    const row = (y, n, cls, c1, c2) => '<g class="hp-jump ' + cls + '">' + Array.from({ length: n }, (_, i) => {
      const x = 6 + i * (388 / n);
      const c = i % 2 ? c1 : c2;
      return '<circle cx="' + (x + 6) + '" cy="' + y + '" r="5" fill="#2a1a1a"/><rect x="' + (x + 1) + '" y="' + (y + 4) + '" width="10" height="13" rx="3" fill="' + c + '"/>' +
        '<path d="M' + (x + 1) + ' ' + (y + 6) + 'l-4 -10M' + (x + 11) + ' ' + (y + 6) + 'l4 -10" stroke="' + c + '" stroke-width="3" stroke-linecap="round"/>';
    }).join("") + '</g>';
    const tower = (x) => '<rect x="' + x + '" y="26" width="5" height="70" fill="#5a5f66"/><rect x="' + (x - 16) + '" y="14" width="38" height="16" fill="#3a3f46"/>' +
      Array.from({ length: 4 }, (_, i) => '<circle class="hp-flk' + (i % 2 ? " hp-flk2" : "") + '" cx="' + (x - 10 + i * 9) + '" cy="22" r="3.4" fill="#fffbe0"/>').join("") +
      '<path class="hp-beam" d="M' + (x - 16) + ' 30 L' + (x - 70) + ' 140 L' + (x + 70) + ' 140 L' + (x + 22) + ' 30z" fill="#fffbe0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hps3)"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + ((i * 67) % 400) + '" cy="' + (8 + (i * 13) % 40) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      tower(60) + tower(336) +
      /* brick stadium wall with arches */
      '<rect x="0" y="88" width="400" height="24" fill="#8c4a32"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (10 + i * 40) + ' 112 v-12 a10 10 0 0 1 20 0 v12z" fill="#3a1e14"/>').join("") +
      /* stands */
      '<path d="M0 112 H400 V260 H0z" fill="#e8e6e2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="0" y="' + (118 + i * 20) + '" width="400" height="3" fill="#a8a6a2"/>').join("") +
      row(124, 22, "", RED, "#f6f4f0") + row(146, 20, "hp-j2", "#f6f4f0", RED) + row(168, 22, "hp-j3", RED, "#f6f4f0") + row(190, 20, "", "#f6f4f0", RED) + row(212, 22, "hp-j2", RED, "#f6f4f0") +
      '<rect x="0" y="236" width="400" height="24" fill="#3a7a3a"/><path d="M0 240h400M0 250h400" stroke="#4a8a4a" stroke-width="2"/>' +
      '<text x="200" y="76" text-anchor="middle" ' + font + ' font-size="22" fill="' + GOLD + '" stroke="#000" stroke-width="2.5" paint-order="stroke" class="hp-blink">JUMP! JUMP!</text>',
      sky("hps3", "#0a0e22", "#28325a"));
  }

  /* 4. The 101 Ventura Freeway through Woodland Hills at dusk */
  function hpfreeway() {
    const shield = (x, y) => '<path d="M' + x + ' ' + y + 'h26v6q0 16 -13 22q-13 -6 -13 -22z" fill="#fff" stroke="#111" stroke-width="1.5"/><text x="' + (x + 13) + '" y="' + (y + 19) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#111">101</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#hps4)"/>' +
      '<circle cx="300" cy="96" r="26" fill="#ffcf7a" opacity=".9"/>' +
      mtns(118, "#5a4a5e", ".8") + mtns(134, "#3e3448", ".9") +
      palm(30, 148, 70) + palm(372, 150, 76, " hp-palm2") +
      /* overhead sign gantry */
      '<rect x="40" y="40" width="6" height="110" fill="#6a6e74"/><rect x="354" y="40" width="6" height="110" fill="#6a6e74"/><rect x="40" y="40" width="320" height="6" fill="#6a6e74"/>' +
      '<rect x="62" y="46" width="132" height="54" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' + shield(72, 54) +
      '<text x="148" y="70" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Ventura Fwy</text><text x="148" y="88" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">NORTH</text>' +
      '<rect x="206" y="46" width="132" height="54" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="272" y="66" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Winnetka Av</text><text x="272" y="84" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">Woodland Hills</text>' +
      '<path d="M262 90 l10 6 l10 -6" stroke="#fff" stroke-width="2.5" fill="none"/>' +
      /* freeway lanes */
      '<rect x="0" y="150" width="400" height="110" fill="#3c3c40"/><rect x="0" y="198" width="400" height="6" fill="#bfbfbf"/>' +
      '<path d="M0 174h400M0 228h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="14 12"/>' +
      car(0, 160, "#c43a3a", "hp-carR") + car(0, 182, "#e0e0e0", "hp-carR hp-carR2") +
      car(0, 210, "#2f6fb3", "hp-carL") + car(0, 236, GREEN, "hp-carL hp-carL2"),
      sky("hps4", "#2b2a5a", "#f29a5e"));
  }

  /* 5. Ventura Blvd & Winnetka Ave by Taft High; Warner Center towers behind */
  function hpcorner() {
    const tower = (x, w, h, c) => '<rect x="' + x + '" y="' + (128 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
      Array.from({ length: Math.floor(h / 10) }, (_, r) => Array.from({ length: Math.floor(w / 8) }, (_, k) =>
        '<rect class="hp-win hp-w' + (1 + (r + k) % 3) + '" x="' + (x + 3 + k * 8) + '" y="' + (128 - h + 4 + r * 10) + '" width="4" height="5" fill="#ffe6a0"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#hps5)"/>' +
      mtns(110, "#3a3050", ".7") +
      '<g opacity=".95">' + tower(150, 34, 70, "#3a4a5e") + tower(190, 26, 92, "#2e3c50") + tower(222, 36, 60, "#43546a") + '<circle class="hp-blink" cx="203" cy="34" r="2.4" fill="#ff3b3b"/></g>' +
      palm(70, 128, 74) + palm(330, 128, 84, " hp-palm2") +
      /* wall */
      '<rect x="0" y="126" width="400" height="98" fill="#d9cfb8"/>' + Array.from({ length: 30 }, (_, i) => '<circle cx="' + ((i * 61) % 400) + '" cy="' + (132 + (i * 23) % 88) + '" r="1.2" fill="#b8ac90"/>').join("") +
      '<rect x="0" y="126" width="400" height="5" fill="' + GREEN + '"/><rect x="0" y="131" width="400" height="2" fill="#fff"/><rect x="0" y="133" width="400" height="2" fill="' + ORANGE + '"/>' +
      tag("HOUSE OF", 16, 174, 34, GREEN, -6) + tag("PAIN", 30, 212, 44, GREEN, -5) + tag("CELTIC JAZZ", 150, 214, 16, ORANGE, -3) + tag("TOP O' THE MORNIN'", 150, 182, 15, "#ffffff", -7) +
      shamrock(270, 200, 7, GREEN) +
      '<rect x="0" y="224" width="400" height="36" fill="#5a5753"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 146, "Ventura Blvd") + sign(266, 124, 114, "Winnetka Av") +
      '<g class="hp-sp"><circle cx="132" cy="200" r="3" fill="' + GREEN + '" opacity=".7"/></g><g class="hp-sp hp-sp2"><circle cx="138" cy="194" r="2" fill="' + GREEN + '" opacity=".6"/></g>',
      sky("hps5", "#14183a", "#e8845a"));
  }

  window.SCENES = { hpstation: hpstation, hptaft: hptaft, hpstadium: hpstadium, hpfreeway: hpfreeway, hpcorner: hpcorner };
})();
