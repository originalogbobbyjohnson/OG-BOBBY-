/* gloriaestefan scenes (Regions tab: South Florida; Miami). CSS classes prefixed ge- (the page's own anim-train is kept).
   1 Metrorail University station, up on the guideway over US-1 (Green + Orange lines), the stop for the University of Miami.
   2 Our Lady of Lourdes Academy, where she was in the National Honor Society: the school front, palms, the bell.
   3 University of Miami, class of '79 (psychology): Lake Osceola's fountain, palms, orange and green, caps in the air.
   4 The Dupont Plaza Hotel, 1975: the wedding gig where she sang with the Miami Latin Boys, soon the Miami Sound Machine. A conga line.
   5 Ocean Dr and Gloria Estefan Way (13th St), Miami Beach: green signs, GLORIA tagged, the art-deco hotel front behind, neon glowing.
   No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes geblink{0%,100%{opacity:.25}50%{opacity:1}}.ge-bl{animation:geblink 1.4s ease-in-out infinite}.ge-bl2{animation-delay:-.7s}' +
    '@keyframes gepalm{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(3deg)}}.ge-palm{animation:gepalm 3s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.ge-p2{animation-delay:-1.2s}' +
    '@keyframes gefount{0%,100%{transform:scaleY(.8);opacity:.7}50%{transform:scaleY(1.1);opacity:1}}.ge-fount{animation:gefount 1.2s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}' +
    '@keyframes gecap{0%{transform:translateY(0) rotate(0)}50%{transform:translateY(-30px) rotate(180deg)}100%{transform:translateY(0) rotate(360deg)}}.ge-cap{animation:gecap 2.4s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}.ge-c2{animation-delay:-.8s}.ge-c3{animation-delay:-1.6s}' +
    '@keyframes gestep{0%,100%{transform:translate(0,0)}25%{transform:translate(3px,-3px)}50%{transform:translate(6px,0)}75%{transform:translate(3px,-3px)}}.ge-step{animation:gestep .9s ease-in-out infinite}.ge-s2{animation-delay:-.3s}.ge-s3{animation-delay:-.6s}' +
    '@keyframes geswing{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.ge-bell{animation:geswing 1s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 0}' +
    '@keyframes genote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(12px,-56px);opacity:0}}.ge-note{animation:genote 3s ease-out infinite}.ge-n2{animation-delay:-1s}.ge-n3{animation-delay:-2s}' +
    '@keyframes geneon{0%,100%{opacity:1}45%{opacity:1}50%{opacity:.35}55%{opacity:1}}.ge-neon{animation:geneon 2.2s linear infinite}' +
    '@keyframes gespray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ge-sp{animation:gespray 1.4s ease-out infinite}.ge-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "ge-bl" + (i % 2 ? " ge-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const brick = (x, y, w, h, base, line) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>' + Array.from({ length: Math.floor(h / 10) }, (_, r) => '<path d="M' + x + ' ' + (y + 10 + r * 10) + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>').join("");
  const palm = (x, base, s, cls) => '<g class="ge-palm ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q' + (4 * s) + ' ' + (-40 * s) + ' ' + (-2 * s) + ' ' + (-80 * s) + '" stroke="#6a5040" stroke-width="' + (5 * s) + '" fill="none"/>' +
    [[-30, -8], [-22, 10], [26, -6], [22, 12], [0, -18]].map(([dx, dy]) => '<path d="M' + (x - 2 * s) + ' ' + (base - 80 * s) + 'q' + (dx * s / 2) + ' ' + (dy * s - 10 * s) + ' ' + (dx * s) + ' ' + (dy * s + 6 * s) + '" stroke="#2f7a3a" stroke-width="' + (5 * s) + '" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const CORAL = "#ff6b6b", AQUA = "#3ad6c8", GOLD = "#ffd166", PINK = "#ff8fc8", GRN = "#00a651", ORG = "#f7941d";
  const note = (x, y, c, cls) => '<g class="ge-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="1.6" height="14" fill="' + c + '"/></g>';
  const label = (x, y, w, a, b, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="26" rx="3" fill="#111" opacity=".88"/><text x="' + (x + w / 2) + '" y="' + (y + 11) + '" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">' + a + '</text><text x="' + (x + w / 2) + '" y="' + (y + 21) + '" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + (c || AQUA) + '">' + b + '</text>';
  const person = (x, base, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (base - 34) + '" r="6" fill="#4a2e1e"/><path d="M' + (x - 9) + ' ' + base + 'l2 -26q7 -5 14 0l2 26z" fill="' + c + '"/></g>';

  /* 1. Metrorail University station over US-1 */
  function gestation() {
    const cars = [0, 1].map(k => { const x = 40 + k * 162; return '<rect x="' + x + '" y="92" width="156" height="50" rx="8" fill="#d8dce0" stroke="#7b848c" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + 10 + i * 29) + '" y="102" width="20" height="18" rx="2" fill="#1c2630"/>').join("") +
      '<rect x="' + x + '" y="126" width="156" height="5" fill="' + GRN + '"/><rect x="' + x + '" y="131" width="156" height="4" fill="' + ORG + '"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ges1)"/>' +
      palm(30, 200, 1.1) + palm(372, 204, 1.0, "ge-p2") +
      '<rect x="0" y="142" width="400" height="16" fill="#cfc8bc"/><rect x="0" y="156" width="400" height="6" fill="#a8a196"/>' +
      [70, 200, 330].map(x => '<rect x="' + (x - 9) + '" y="160" width="18" height="60" fill="#bdb6aa"/>').join("") +
      '<rect x="20" y="70" width="360" height="8" fill="#e8e2d6"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="76" width="6" height="68" fill="#bdb6aa"/>').join("") +
      '<g class="anim-train">' + cars + '<circle cx="356" cy="132" r="3" fill="#fff6c2"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#3a3c42"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<rect x="64" y="12" width="272" height="44" rx="3" fill="#111"/>' +
      '<circle cx="90" cy="34" r="13" fill="' + GRN + '"/><text x="90" y="38" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">GRN</text>' +
      '<circle cx="120" cy="34" r="13" fill="' + ORG + '"/><text x="120" y="38" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">ORG</text>' +
      '<text x="144" y="32" ' + font + ' font-size="17" fill="#fff">UNIVERSITY</text><text x="144" y="48" ' + font + ' font-size="9" fill="' + GOLD + '">METRORAIL · US-1 · CORAL GABLES</text>',
      sky("ges1", "#ff9a76", "#ffe0b0"));
  }

  /* 2. Our Lady of Lourdes Academy */
  function gelourdes() {
    const wins = Array.from({ length: 8 }, (_, i) => '<path d="M' + (44 + i * 42) + ' 132v-24q9 -10 18 0v24z" fill="#9fd3e6"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ges2)"/>' +
      '<rect x="24" y="80" width="352" height="98" fill="#f4ecdc"/><rect x="24" y="80" width="352" height="8" fill="#c8a46a"/>' + wins +
      '<rect x="24" y="140" width="352" height="6" fill="#e2d6be"/>' +
      '<path d="M160 80v-26h80v26z" fill="#f4ecdc"/><path d="M152 56l48 -30 48 30z" fill="#b8642e"/>' +
      '<g class="ge-bell"><path d="M192 40q8 -14 16 0v8h-16z" fill="' + GOLD + '"/><circle cx="200" cy="50" r="2.5" fill="#a07a1a"/></g>' +
      '<path d="M182 178v-30q18 -20 36 0v30z" fill="#5a3a2a"/><path d="M200 152v26" stroke="#3a2418" stroke-width="2"/>' +
      '<rect x="0" y="178" width="400" height="82" fill="#5a9a4a"/><path d="M170 178l-20 82h100l-20 -82z" fill="#d8cfbe"/>' +
      palm(20, 180, 1.1) + palm(384, 182, 1.0, "ge-p2") +
      person(110, 214, "#2a4a8a") + person(132, 216, "#ffffff") + person(286, 214, "#2a4a8a") +
      '<g transform="translate(300 150)"><rect x="0" y="0" width="64" height="22" rx="3" fill="#2a4a8a"/><text x="32" y="15" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">HONOR</text><path d="M28 22l4 10 4 -10" fill="' + GOLD + '"/></g>' +
      label(10, 228, 210, "OUR LADY OF LOURDES ACADEMY", "NATIONAL HONOR SOCIETY", GOLD),
      sky("ges2", "#5aa8e8", "#d8f0ff"));
  }

  /* 3. University of Miami: Lake Osceola, class of '79 */
  function gecampus() {
    const caps = [0, 1, 2].map(i => '<g class="ge-cap ge-c' + (i + 1) + '"><path d="M' + (120 + i * 80) + ' ' + (60 + (i % 2) * 14) + 'l16 -6 16 6 -16 6z" fill="#111"/><path d="M' + (136 + i * 80) + ' ' + (62 + (i % 2) * 14) + 'v8" stroke="' + GOLD + '" stroke-width="2"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ges3)"/>' +
      '<rect x="40" y="96" width="120" height="50" fill="#f2ead8"/><rect x="40" y="96" width="120" height="6" fill="' + ORG + '"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (50 + i * 22) + '" y="108" width="12" height="28" fill="#9fc8d8"/>').join("") +
      '<rect x="250" y="84" width="110" height="62" fill="#e8dcc4"/><rect x="250" y="84" width="110" height="6" fill="' + GRN + '"/>' + Array.from({ length: 4 }, (_, i) => '<rect x="' + (262 + i * 24) + '" y="98" width="14" height="36" fill="#9fc8d8"/>').join("") +
      [[180, ORG], [214, GRN]].map(([x, c]) => '<rect x="' + x + '" y="70" width="3" height="70" fill="#888"/><rect x="' + (x + 3) + '" y="72" width="16" height="30" fill="' + c + '"/>').join("") +
      '<rect x="0" y="146" width="400" height="114" fill="#5a9a4a"/>' +
      '<ellipse cx="200" cy="200" rx="200" ry="44" fill="#2a7aa8"/><ellipse cx="200" cy="200" rx="180" ry="34" fill="#3a8fbe"/>' +
      '<g class="ge-fount"><path d="M196 196q-10 -40 4 -60q14 20 4 60z" fill="#d8f2ff" opacity=".85"/><path d="M188 198q-20 -24 -14 -40M212 198q20 -24 14 -40" stroke="#d8f2ff" stroke-width="3" fill="none" opacity=".7"/></g>' +
      '<ellipse cx="200" cy="198" rx="24" ry="5" fill="#fff" opacity=".5"/>' +
      palm(26, 170, 1.2) + palm(374, 172, 1.1, "ge-p2") + caps +
      label(110, 230, 180, "UNIVERSITY OF MIAMI · LAKE OSCEOLA", "B.A. IN PSYCHOLOGY", ORG),
      sky("ges3", "#3a9ae0", "#f6e2b8"));
  }

  /* 4. Dupont Plaza Hotel, 1975: the wedding gig */
  function gewedding() {
    const line = Array.from({ length: 7 }, (_, i) => person(60 + i * 30, 236, [CORAL, AQUA, GOLD, PINK, "#fff", CORAL, AQUA][i], "ge-step ge-s" + (1 + i % 3))).join("");
    const chand = x => '<g><path d="M' + x + ' 0v14" stroke="' + GOLD + '" stroke-width="2"/><path d="M' + (x - 18) + ' 20q18 14 36 0z" fill="' + GOLD + '"/>' + [-14, -5, 5, 14].map(d => '<circle class="ge-bl" cx="' + (x + d) + '" cy="24" r="2.5" fill="#fff6c2"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="#2a1a2e"/>' + chand(80) + chand(320) +
      '<rect x="120" y="40" width="270" height="110" fill="#3a2440"/><rect x="112" y="146" width="286" height="12" fill="#6a3a2a"/>' +
      '<path d="M120 40h270v10q-135 14 -270 0z" fill="' + CORAL + '"/>' +
      person(160, 146, "#222") + person(200, 146, "#f2f2f2") + '<rect x="199" y="98" width="2" height="48" fill="#888"/><circle cx="200" cy="98" r="4" fill="#444"/>' +
      person(240, 146, "#222") + '<rect x="228" y="118" width="20" height="5" rx="2" fill="' + GOLD + '" transform="rotate(-25 238 120)"/>' +
      '<g transform="translate(272 108)"><path d="M0 38l4 -34h16l4 34z" fill="#b8642e" stroke="#6a3418" stroke-width="2"/><ellipse cx="12" cy="4" rx="8" ry="3" fill="#f2e6d0"/><path d="M28 38l4 -28h14l4 28z" fill="#c8743e" stroke="#6a3418" stroke-width="2"/><ellipse cx="39" cy="10" rx="7" ry="3" fill="#f2e6d0"/></g>' +
      person(350, 146, "#222") +
      note(180, 80, GOLD) + note(260, 70, AQUA, "ge-n2") + note(330, 84, PINK, "ge-n3") +
      '<g transform="translate(26 80)"><rect x="0" y="22" width="60" height="34" fill="#fff"/><rect x="6" y="10" width="48" height="14" fill="#fff"/><rect x="16" y="0" width="28" height="12" fill="#fff"/><path d="M0 34h60M6 18h48" stroke="' + PINK + '" stroke-width="2"/></g>' +
      '<rect x="0" y="160" width="400" height="100" fill="#4a2a3a"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="160" width="20" height="100" fill="#5a3448" opacity=".5"/>').join("") +
      line +
      label(200, 6, 192, "DUPONT PLAZA HOTEL", "THE WEDDING GIG · THE MIAMI LATIN BOYS", GOLD));
  }

  /* 5. Ocean Dr and Gloria Estefan Way, Miami Beach */
  function gecorner() {
    const deco = '<rect x="150" y="36" width="230" height="110" rx="20" fill="#f6f1e4"/><rect x="150" y="36" width="60" height="110" rx="20" fill="#efe6d2"/>' +
      [62, 92, 122].map(y => '<rect x="146" y="' + y + '" width="238" height="5" rx="2" fill="#e2d6be"/>').join("") +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (222 + (i % 3) * 50) + '" y="' + (44 + Math.floor(i / 3) * 30) + '" width="34" height="14" fill="' + (i % 4 ? "#ffd98a" : "#9fd3e6") + '" opacity=".85"/>').join("") +
      '<rect x="230" y="22" width="70" height="16" fill="#f6f1e4"/><path d="M230 22h70" stroke="' + AQUA + '" stroke-width="3"/>' +
      '<path class="ge-neon" d="M160 140h214" stroke="' + PINK + '" stroke-width="3"/><path class="ge-neon" d="M176 40v100" stroke="' + AQUA + '" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ges5)"/>' + stars(14) + deco + palm(126, 150, 1.0) + palm(390, 150, 0.9, "ge-p2") +
      '<rect x="0" y="150" width="400" height="110" fill="#2b2b30"/>' +
      brick(130, 120, 270, 100, "#7ad6cc", "#5ab8ae") +
      tag("GLORIA", 156, 186, 42, CORAL, -8) + tag("CONGA", 290, 210, 22, GOLD, -4) + tag("MIAMI SOUND MACHINE", 146, 214, 12, "#fff", -3) +
      '<g class="ge-sp"><circle cx="352" cy="166" r="3" fill="' + CORAL + '" opacity=".7"/></g><g class="ge-sp ge-sp2"><circle cx="358" cy="172" r="2" fill="' + CORAL + '" opacity=".6"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#d8cfb8"/><path d="M0 222h400" stroke="#f2ead8" stroke-width="3"/>' +
      '<rect x="62" y="92" width="5" height="140" fill="#5a6066"/>' + sign(4, 86, 120, "OCEAN DR") + sign(4, 112, 120, "GLORIA ESTEFAN WAY", 9.5) +
      '<text x="64" y="80" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">13TH ST · MIAMI BEACH</text>',
      sky("ges5", "#1a1040", "#c85a8a"));
  }

  window.SCENES = { gestation, gelourdes, gecampus, gewedding, gecorner };
})();
