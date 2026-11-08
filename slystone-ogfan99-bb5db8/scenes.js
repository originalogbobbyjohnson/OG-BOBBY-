/* Sly and the Family Stone scenes (Regions tab: The Bay Area; Vallejo). CSS classes prefixed sly- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes slyglow{0%,100%{opacity:.35}50%{opacity:1}}.sly-glow{animation:slyglow 2.2s ease-in-out infinite}.sly-g2{animation-delay:-1.1s}' +
    '@keyframes slybob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.sly-bob{animation:slybob 1s ease-in-out infinite}.sly-b2{animation-delay:-.5s}.sly-b3{animation-delay:-.25s}' +
    '@keyframes slynote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-46px);opacity:0}}.sly-note{animation:slynote 2.6s ease-out infinite}.sly-n2{animation-delay:-.9s}.sly-n3{animation-delay:-1.7s}' +
    '@keyframes slyspin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.sly-spin{transform-box:fill-box;transform-origin:50% 50%;animation:slyspin 14s linear infinite}' +
    '@keyframes slyhue{0%,100%{fill:#ff5fa2}33%{fill:#ffd23f}66%{fill:#6fd0ff}}.sly-hue{animation:slyhue 3s linear infinite}.sly-h2{animation-delay:-1s}.sly-h3{animation-delay:-2s}' +
    '@keyframes slysway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.sly-sway{transform-box:fill-box;transform-origin:50% 100%;animation:slysway 1.8s ease-in-out infinite}.sly-s2{animation-delay:-.9s}' +
    '@keyframes slyrise{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.sly-rise{animation:slyrise 5s ease-in-out infinite}' +
    '@keyframes slyspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sly-sp{animation:slyspray 1.4s ease-out infinite}.sly-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "sly-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, c, k) => '<g class="sly-note' + (k ? " sly-n" + k : "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '"/><path d="M' + (x + 3.5) + ' ' + y + 'v-14l7 3" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  /* a singer silhouette, no face: head, body, arm up to a mic or out */
  const person = (x, y, c, k, arm) => '<g class="sly-bob' + (k ? " sly-b" + k : "") + '"><circle cx="' + x + '" cy="' + (y - 50) + '" r="8" fill="#1a1016"/>' +
    '<path d="M' + (x - 11) + ' ' + y + 'l3 -38h16l3 38z" fill="' + c + '"/>' +
    (arm ? '<path d="M' + (x + 7) + ' ' + (y - 34) + 'l12 -12" stroke="#1a1016" stroke-width="4" stroke-linecap="round"/>' : '<path d="M' + (x - 7) + ' ' + (y - 34) + 'l-10 12M' + (x + 7) + ' ' + (y - 34) + 'l10 12" stroke="#1a1016" stroke-width="4" stroke-linecap="round"/>') +
    '<path d="M' + (x - 5) + ' ' + y + 'v18M' + (x + 5) + ' ' + y + 'v18" stroke="#1a1016" stroke-width="5"/></g>';
  const ORANGE = "#ff7a2f", GOLD = "#ffd23f", PURPLE = "#a05cff", PINK = "#ff5fa2", STB = "#0067b1", STG = "#7ac143";

  /* 1. SolTrans route 6 pulling up on Tennessee St at Sacramento St in central Vallejo, palm trees and low storefronts at sunset */
  function slystop() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 42) + '" y="116" width="32" height="24" rx="2" fill="#1e2c40"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="106" width="320" height="70" rx="10" fill="#f4f6f4" stroke="#7d868e" stroke-width="2"/>' + wins +
      '<path d="M40 148h320v9h-320z" fill="' + STB + '"/><path d="M40 157h320v5h-320z" fill="' + STG + '"/>' +
      '<rect x="326" y="116" width="30" height="42" rx="3" fill="#1e2c40"/><rect x="326" y="108" width="28" height="8" rx="2" fill="#111"/><text x="339" y="115" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">6</text>' +
      '<circle cx="356" cy="168" r="3.5" fill="#fff6c2"/><circle cx="92" cy="178" r="12" fill="#111"/><circle cx="92" cy="178" r="5" fill="#777"/><circle cx="300" cy="178" r="12" fill="#111"/><circle cx="300" cy="178" r="5" fill="#777"/></g>';
    const shops = [["#c86a3a", 0, 76], ["#3a7a8a", 80, 60], ["#d8a83a", 144, 84], ["#7a4a8a", 232, 66], ["#4a8a5a", 302, 98]].map(s =>
      '<rect x="' + s[1] + '" y="58" width="' + s[2] + '" height="50" fill="#efe2c6" stroke="#bcae92" stroke-width="1"/><path d="M' + s[1] + ' 74h' + s[2] + 'l-5 10h-' + (s[2] - 10) + 'z" fill="' + s[0] + '"/>' +
      '<rect x="' + (s[1] + 8) + '" y="88" width="' + (s[2] - 16) + '" height="18" fill="#ffd98a" opacity=".55" class="sly-glow"/>').join("");
    const palm = (x, h) => '<g class="sly-sway"><path d="M' + x + ' 108q-4 -' + (h / 2) + ' 2 -' + h + '" stroke="#5a3a24" stroke-width="5" fill="none"/>' +
      [[-22, 6], [22, 6], [-16, -6], [16, -6], [0, -10]].map(l => '<path d="M' + (x + 2) + ' ' + (108 - h) + 'q' + (l[0] / 2) + ' ' + (l[1] - 8) + ' ' + l[0] + ' ' + (l[1] + 6) + '" stroke="#2f7a3a" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sly1)"/><circle class="sly-rise" cx="300" cy="44" r="20" fill="#ffcf6a" opacity=".9"/>' + palm(60, 70) + palm(250, 62) + shops +
      '<rect x="0" y="176" width="400" height="84" fill="#3c3e44"/><rect x="0" y="176" width="400" height="5" fill="#c9c4b4"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 54 + 6) + '" y="222" width="30" height="4" fill="#f0d24a"/>').join("") +
      bus +
      '<rect x="16" y="120" width="4" height="58" fill="#7a7f86"/><rect x="2" y="104" width="36" height="22" rx="3" fill="#fff" stroke="' + STB + '" stroke-width="2.5"/>' +
      '<text x="20" y="113" text-anchor="middle" ' + font + ' font-size="5.5" fill="' + STB + '">SOLTRANS</text><text x="20" y="123" text-anchor="middle" ' + font + ' font-size="9" fill="#111">6</text>' +
      '<rect x="372" y="44" width="4" height="64" fill="#2a2a2a"/>' + sign(286, 8, 108, "Tennessee St") + sign(296, 32, 100, "Sacramento St"),
      sky("sly1", "#2a2050", "#f0915a"));
  }

  /* 2. Vallejo High School: the teenage doo-wop group out front, four voices around one mic, the school's long two-story front behind */
  function slyschool() {
    const wins = Array.from({ length: 2 }, (_, r) => Array.from({ length: 10 }, (_, i) => '<rect x="' + (24 + i * 36) + '" y="' + (52 + r * 34) + '" width="24" height="22" fill="#2a3a52" stroke="#e8e0cc" stroke-width="2"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sly2)"/>' + stars(6) +
      '<rect x="10" y="40" width="380" height="96" fill="#d9c49a" stroke="#a8925e" stroke-width="2"/><rect x="10" y="34" width="380" height="8" fill="#9a4a2a"/>' + wins +
      '<rect x="168" y="96" width="64" height="40" fill="#4a3424"/><rect x="172" y="100" width="26" height="36" fill="#6a4a30"/><rect x="202" y="100" width="26" height="36" fill="#6a4a30"/>' +
      '<rect x="100" y="18" width="200" height="20" fill="#efe6d0" stroke="#a8925e"/><text x="200" y="32" text-anchor="middle" ' + font + ' font-size="11" fill="#5a3a24" letter-spacing="1">VALLEJO HIGH SCHOOL</text>' +
      '<rect x="0" y="136" width="400" height="16" fill="#bdb3a0"/><rect x="0" y="152" width="400" height="108" fill="#6a8a4a"/><rect x="0" y="200" width="400" height="60" fill="#5a7a3e"/>' +
      '<rect x="198" y="168" width="3" height="60" fill="#bbb"/><ellipse cx="199.5" cy="166" rx="5" ry="6" fill="#444"/>' +
      person(150, 222, ORANGE, 0, false) + person(178, 222, GOLD, 2, false) + person(222, 222, PURPLE, 3, true) + person(250, 222, PINK, 0, false) +
      note(130, 150, "#fff", 0) + note(270, 146, GOLD, 2) + note(200, 132, ORANGE, 3),
      sky("sly2", "#1c2a52", "#e88a5a"));
  }

  /* 3. The Winchester Cathedral club in Redwood City, 1966-67: the Family Stone's house-band nights, drums, organ, horns, the light show on the wall */
  function slyclub() {
    const blobs = [[70, 60, 40, ""], [200, 46, 52, " sly-h2"], [330, 66, 42, " sly-h3"], [130, 96, 30, " sly-h3"], [270, 100, 34, ""]].map(b =>
      '<circle class="sly-hue' + b[3] + '" cx="' + b[0] + '" cy="' + b[1] + '" r="' + b[2] + '" opacity=".55"/>').join("");
    const drums = '<g><ellipse cx="200" cy="196" rx="22" ry="20" fill="#e8e0d0" stroke="#999" stroke-width="2"/><circle cx="200" cy="196" r="9" fill="' + ORANGE + '"/><rect x="164" y="178" width="18" height="10" rx="3" fill="#ccc"/><rect x="218" y="178" width="18" height="10" rx="3" fill="#ccc"/>' +
      '<ellipse class="sly-glow" cx="160" cy="164" rx="14" ry="3" fill="#e8c860"/><ellipse class="sly-glow sly-g2" cx="242" cy="164" rx="14" ry="3" fill="#e8c860"/></g>';
    const organ = '<rect x="40" y="176" width="70" height="36" fill="#6a3a24"/><rect x="40" y="172" width="70" height="8" fill="#fff"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (42 + i * 7) + '" y="172" width="1" height="8" fill="#333"/>').join("");
    const horn = (x, c, k) => '<g class="sly-bob' + (k ? " sly-b" + k : "") + '"><circle cx="' + x + '" cy="138" r="8" fill="#1a1016"/><path d="M' + (x - 11) + ' 188l3 -40h16l3 40z" fill="' + c + '"/><path d="M' + (x + 4) + ' 140l22 -4l6 -6v16l-6 -4z" fill="#e8c860"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#120a1a"/>' + blobs +
      '<path d="M120 0v40q80 -50 160 0v-40z" fill="#120a1a" opacity=".6"/>' +
      '<rect x="90" y="8" width="220" height="22" rx="4" fill="#1a1020" stroke="' + GOLD + '" stroke-width="2"/><text class="sly-glow" x="200" y="24" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" fill="' + GOLD + '" letter-spacing="1">WINCHESTER CATHEDRAL</text>' +
      '<rect x="0" y="212" width="400" height="48" fill="#2a1a12"/><rect x="0" y="208" width="400" height="6" fill="' + ORANGE + '"/>' +
      organ + drums + horn(300, PINK, 2) + horn(344, PURPLE, 3) +
      person(80, 172, GOLD, 0, true).replace('sly-bob"', 'sly-bob sly-b3"') +
      note(120, 120, "#fff", 0) + note(250, 110, GOLD, 2) + note(330, 100, PINK, 3),
      "");
  }

  /* 4. Woodstock, August 1969: the stage under its scaffold towers at dawn, half a million hands up, going higher */
  function slywood() {
    const crowd = Array.from({ length: 26 }, (_, i) => '<g class="sly-bob' + (i % 3 ? " sly-b" + (i % 3 + 1) : "") + '"><circle cx="' + (6 + i * 15.5) + '" cy="226" r="7" fill="#1a1420"/><rect x="' + (i * 15.5) + '" y="232" width="13" height="30" rx="5" fill="#1a1420"/>' +
      (i % 2 ? '<path d="M' + (8 + i * 15.5) + ' 230l4 -22" stroke="#1a1420" stroke-width="3" stroke-linecap="round"/>' : "") + '</g>').join("");
    const tower = x => '<g stroke="#5a4a3a" stroke-width="2" fill="none"><path d="M' + x + ' 160v-120M' + (x + 18) + ' 160v-120"/>' + [0, 1, 2, 3, 4, 5].map(i => '<path d="M' + x + ' ' + (160 - i * 20) + 'l18 -20M' + x + ' ' + (140 - i * 20) + 'l18 20"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sly4)"/><circle class="sly-rise" cx="200" cy="120" r="38" fill="#ffb84a" opacity=".85"/>' +
      '<path d="M0 150q100 -30 200 -10t200 -8v40h-400z" fill="#5a7a3a"/>' +
      tower(70) + tower(312) +
      '<rect x="100" y="120" width="200" height="12" fill="#3a2a1e"/><path d="M96 120l104 -26l104 26z" fill="#e8e0d0" opacity=".9"/>' +
      '<rect x="100" y="132" width="200" height="34" fill="#2a1e16"/>' +
      '<g class="sly-glow"><path d="M140 132l-30 80h60z" fill="' + GOLD + '" opacity=".18"/><path d="M260 132l-30 80h60z" fill="' + PINK + '" opacity=".18"/></g>' +
      '<rect x="0" y="166" width="400" height="94" fill="#4a6a32"/>' +
      tag("HIGHER!", 120, 70, 40, GOLD, -4) + crowd,
      sky("sly4", "#3a2a6a", "#ff9a6a"));
  }

  /* 5. Sacramento St and Denio St in Vallejo Heights, by the first Vallejo home at 125 Denio: SLY tagged big, the old white flour-mill silos on the waterfront behind */
  function slycorner() {
    const silos = Array.from({ length: 6 }, (_, i) => '<rect x="' + (150 + i * 22) + '" y="34" width="20" height="90" rx="9" fill="#ece6d8" stroke="#bdb6a6" stroke-width="1"/>').join("") +
      '<rect x="146" y="22" width="140" height="14" fill="#e2dccc" stroke="#bdb6a6"/><rect x="286" y="10" width="26" height="114" fill="#e2dccc" stroke="#bdb6a6"/>' +
      '<rect class="sly-glow" x="292" y="18" width="6" height="6" fill="#ffd98a"/><rect class="sly-glow sly-g2" x="300" y="40" width="6" height="6" fill="#ffd98a"/>';
    const house = (x, c) => '<rect x="' + x + '" y="92" width="52" height="34" fill="' + c + '"/><path d="M' + (x - 4) + ' 94l30 -18l30 18z" fill="#6a4a3a"/><rect class="sly-glow" x="' + (x + 8) + '" y="102" width="12" height="10" fill="#ffd98a"/><rect x="' + (x + 30) + '" y="106" width="12" height="20" fill="#4a3a2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sly5)"/>' + stars(10) +
      '<rect x="0" y="118" width="400" height="10" fill="#2a4a6a"/>' + silos + house(8, "#c9b48a") + house(70, "#9ab0a0") + house(334, "#d8a88a") +
      '<rect x="0" y="126" width="400" height="98" fill="#7a4a3a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#6a3e30" stroke-width="1"/>').join("") +
      tag("SLY", 20, 196, 64, ORANGE, -6) + tag("FAMILY STONE", 140, 186, 24, GOLD, -4) + tag("HIGHER", 150, 214, 18, PURPLE, -3) + tag("STAND!", 262, 214, 18, "#fff", -7) +
      '<rect x="0" y="224" width="400" height="36" fill="#56544f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="360" y="98" width="6" height="126" fill="#2f2f2f"/>' + sign(296, 100, 104, "Sacramento St") + sign(312, 126, 84, "Denio St") +
      '<g class="sly-sp"><circle cx="128" cy="160" r="3" fill="' + ORANGE + '" opacity=".7"/></g><g class="sly-sp sly-sp2"><circle cx="134" cy="152" r="2" fill="' + ORANGE + '" opacity=".6"/></g>',
      sky("sly5", "#1a1438", "#d87a5a"));
  }

  window.SCENES = { slystop: slystop, slyschool: slyschool, slyclub: slyclub, slywood: slywood, slycorner: slycorner };
})();
