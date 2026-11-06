/* lastemperor scenes (Regions tab: Philadelphia; West Philly). CSS classes prefixed le- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes leflag{0%,100%{transform:skewY(0deg) scaleX(1)}50%{transform:skewY(-6deg) scaleX(.92)}}.le-flag{transform-box:fill-box;transform-origin:0% 50%;animation:leflag 1.6s ease-in-out infinite}.le-flag2{animation-delay:-.8s}' +
    '@keyframes lenote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(16px,-64px);opacity:0}}.le-note{animation:lenote 3s ease-out infinite}.le-n2{animation-delay:-1s}.le-n3{animation-delay:-2s}' +
    '@keyframes lesweep{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.le-sw{transform-box:fill-box;transform-origin:50% 0%;animation:lesweep 3.4s ease-in-out infinite}.le-sw2{animation-delay:-1.7s}' +
    '@keyframes lebob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.le-bob{animation:lebob .9s ease-in-out infinite}.le-bob2{animation-delay:-.45s}' +
    '@keyframes lejet{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.25)}}.le-jet{transform-box:fill-box;transform-origin:50% 100%;animation:lejet 1.2s ease-in-out infinite}.le-jet2{animation-delay:-.6s}' +
    '@keyframes lespray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.le-sp{animation:lespray 1.4s ease-out infinite}.le-sp2{animation-delay:.45s}' +
    '@keyframes letruck{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.le-truck{animation:letruck 9s linear infinite}' +
    '@keyframes leglow{0%,100%{opacity:.5}50%{opacity:1}}.le-glow{animation:leglow 2.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "le-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, c, cls) => '<g class="le-note ' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="0" rx="5" ry="3.6" fill="' + c + '"/><rect x="3.6" y="-18" width="2" height="18" fill="' + c + '"/><path d="M5.6 -18q8 4 6 12" stroke="' + c + '" stroke-width="2" fill="none"/></g></g>';
  const GOLD = "#e8b84a", RED = "#c8312b", JADE = "#2fa38a", MFL = "#0f75bc";

  /* 1. 60th St on the Market-Frankford Line: the El up over Market St in West Philly, the open-air platform, the steel canopy, the black sign with the blue MFL bullet, the silver car with the blue stripe sliding in, rowhouse roofs behind */
  function station() {
    const tr = '<g class="anim-train"><rect x="20" y="112" width="330" height="70" rx="7" fill="#d3d7dc" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 44) + '" y="122" width="30" height="24" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="20" y="154" width="330" height="6" fill="' + MFL + '"/><rect x="20" y="163" width="330" height="2" fill="' + MFL + '"/>' +
      '<rect x="330" y="116" width="20" height="64" rx="4" fill="#a9afb6"/><circle cx="342" cy="170" r="3.5" fill="#fff6c2"/></g>';
    const roofs = Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 42) + '" y="' + (84 + (i % 3) * 6) + '" width="40" height="40" fill="' + (i % 2 ? "#8a4b3a" : "#7a4232") + '"/><rect x="' + (i * 42) + '" y="' + (82 + (i % 3) * 6) + '" width="40" height="4" fill="#4a2a22"/>' +
      '<rect x="' + (i * 42 + 8) + '" y="' + (94 + (i % 3) * 6) + '" width="8" height="10" fill="#e9dcb8" opacity=".7"/><rect x="' + (i * 42 + 24) + '" y="' + (94 + (i % 3) * 6) + '" width="8" height="10" fill="#e9dcb8" opacity=".7"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#le1)"/>' + roofs +
      '<path d="M0 34h400" stroke="#4d5560" stroke-width="10"/><path d="M0 40h400" stroke="#39414b" stroke-width="3"/>' +
      [30, 140, 260, 370].map(x => '<rect x="' + (x - 4) + '" y="38" width="8" height="150" fill="#4d5560"/><path d="M' + (x - 22) + ' 40l22 16 22 -16" stroke="#4d5560" stroke-width="4" fill="none"/>').join("") +
      '<rect x="60" y="58" width="176" height="30" rx="3" fill="#111"/><text x="72" y="79" ' + font + ' font-size="16" fill="#fff">60th St</text>' + badge(178, 73, "MFL", MFL) +
      tr +
      '<rect x="0" y="182" width="400" height="8" fill="#f2c200"/><rect x="0" y="190" width="400" height="22" fill="#9a958c"/>' +
      '<rect x="0" y="212" width="400" height="48" fill="#4a4f57"/>' + Array.from({ length: 14 }, (_, i) => '<rect x="' + (i * 30) + '" y="212" width="6" height="48" fill="#3a3e45"/>').join("") +
      '<rect class="le-glow" x="150" y="196" width="100" height="5" rx="2.5" fill="#fff6c2" opacity=".5"/>',
      sky("le1", "#7fb2de", "#f2e6c8"));
  }

  /* 2. Lincoln University in Chester County, where he studied political science and won over the campus at a freshman talent show: a red-brick hall with a white portico and white cupola, orange and blue banners waving, a mic stand on the lawn stage */
  function lincoln() {
    const cols = Array.from({ length: 4 }, (_, i) => '<rect x="' + (166 + i * 20) + '" y="110" width="9" height="60" fill="#f3efe6"/>').join("");
    const wins = [[64, 112], [96, 112], [128, 112], [262, 112], [294, 112], [326, 112], [64, 146], [96, 146], [128, 146], [262, 146], [294, 146], [326, 146]].map(p => '<rect x="' + p[0] + '" y="' + p[1] + '" width="14" height="22" fill="#2b3442" stroke="#f3efe6" stroke-width="2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#le2)"/>' +
      '<ellipse cx="60" cy="96" rx="50" ry="34" fill="#3f7a3a"/><ellipse cx="350" cy="92" rx="56" ry="38" fill="#3f7a3a"/>' +
      '<rect x="50" y="98" width="300" height="80" fill="#a8452f"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M50 ' + (106 + i * 8) + 'h300" stroke="#963c28" stroke-width="1"/>').join("") +
      '<path d="M44 98h312l-12 -10H56z" fill="#e8e2d4"/>' + wins +
      '<path d="M156 108l44 -26 44 26z" fill="#f3efe6" stroke="#cfc8b8" stroke-width="2"/><rect x="156" y="106" width="88" height="6" fill="#e8e2d4"/>' + cols +
      '<rect x="190" y="146" width="20" height="32" fill="#4a2a1a"/>' +
      '<rect x="186" y="56" width="28" height="28" fill="#f3efe6"/><path d="M182 56l18 -22 18 22z" fill="#5f8f86"/><circle cx="200" cy="70" r="7" fill="#fff" stroke="#333" stroke-width="1.5"/><path d="M200 70v-4M200 70h3" stroke="#333" stroke-width="1.2"/>' +
      '<rect x="0" y="178" width="400" height="82" fill="#5a9a46"/><path d="M180 260l12 -82h16l12 82z" fill="#c9bfa6"/>' +
      '<rect x="40" y="150" width="3" height="60" fill="#555"/><g class="le-flag"><rect x="43" y="152" width="30" height="20" fill="#f58025"/></g>' +
      '<rect x="356" y="150" width="3" height="60" fill="#555"/><g class="le-flag le-flag2"><rect x="359" y="152" width="30" height="20" fill="#1d3f8a"/></g>' +
      '<rect x="252" y="214" width="110" height="10" fill="#6b4a2a"/><rect x="252" y="224" width="110" height="20" fill="#4a3220"/>' +
      '<path d="M306 214v-34" stroke="#222" stroke-width="2.5"/><rect x="302" y="174" width="8" height="12" rx="4" fill="#333"/>' +
      note(320, 196, GOLD, "") + note(288, 190, "#f58025", "le-n2") + note(334, 182, "#fff", "le-n3"),
      sky("le2", "#8cc4ec", "#eef6fb"));
  }

  /* 3. The palace his name comes from (Bertolucci's The Last Emperor; his album Palace of the Pretender): the Forbidden City's Hall of Supreme Harmony, the white marble terraces, the red columns and walls, the golden double roof, a dragon kite riding the wind */
  function palace() {
    const cols = Array.from({ length: 9 }, (_, i) => '<rect x="' + (104 + i * 24) + '" y="104" width="8" height="44" fill="#b3241f"/>').join("");
    const rails = (y, x1, x2) => '<rect x="' + x1 + '" y="' + y + '" width="' + (x2 - x1) + '" height="10" fill="#f1eee6"/>' + Array.from({ length: Math.floor((x2 - x1) / 12) + 1 }, (_, i) => '<rect x="' + (x1 + i * 12 - 1) + '" y="' + (y - 4) + '" width="3" height="6" fill="#e2ded4"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#le3)"/>' +
      '<rect x="0" y="120" width="400" height="40" fill="#a4322a"/><path d="M0 120h400" stroke="#d8a33a" stroke-width="4"/>' +
      '<path d="M70 104h260l26 -16H44z" fill="#e2a72a"/><path d="M44 88q-10 -2 -16 -10M356 88q10 -2 16 -10" stroke="#e2a72a" stroke-width="5" fill="none"/>' +
      '<rect x="96" y="76" width="208" height="14" fill="#2f6b62"/><path d="M96 76h208l22 -18H74z" fill="#efb52e"/><path d="M74 58q-8 -2 -14 -9M326 58q8 -2 14 -9" stroke="#efb52e" stroke-width="5" fill="none"/>' +
      '<path d="M120 40h160" stroke="#c48d1e" stroke-width="6"/>' + Array.from({ length: 16 }, (_, i) => '<path d="M' + (82 + i * 15) + ' 60v14M' + (52 + i * 19) + ' 90v12" stroke="#c48d1e" stroke-width="1.5"/>').join("") +
      '<rect x="96" y="104" width="208" height="44" fill="#7a1f1a"/>' + cols +
      '<rect x="190" y="116" width="20" height="32" fill="#e2a72a" opacity=".85"/>' +
      rails(148, 84, 316) + '<rect x="84" y="158" width="232" height="12" fill="#e7e3d8"/>' + rails(170, 64, 336) + '<rect x="64" y="180" width="272" height="12" fill="#ddd8cb"/>' + rails(192, 44, 356) + '<rect x="44" y="202" width="312" height="12" fill="#d3cebf"/>' +
      '<path d="M176 214l-6 -66h60l-6 66z" fill="#cfc9b8"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#b7b0a2"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 214l-20 46" stroke="#a69f90" stroke-width="1"/>').join("") +
      '<g class="le-bob"><path d="M330 30q10 -8 20 0t20 0" stroke="' + RED + '" stroke-width="7" fill="none" stroke-linecap="round"/><circle cx="374" cy="28" r="6" fill="' + GOLD + '"/><path d="M330 30q-10 30 -40 40" stroke="#fff" stroke-width=".8" fill="none" opacity=".7"/></g>',
      sky("le3", "#6fa9d8", "#f6e6c4"));
  }

  /* 4. Eakins Oval, Hip Hop in the Park 2025, his first hometown show in about twenty years: the Washington Monument fountain (granite tiers, the bronze rider on top), jets going, the flags down the Parkway, the stage lights */
  function eakins() {
    return svg(
      '<rect width="400" height="260" fill="url(#le4)"/>' +
      '<g fill="#6e6a8a">' + [[0, 120, 30], [34, 104, 24], [62, 126, 30], [330, 110, 26], [360, 96, 40]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (150 - b[1]) + '"/>').join("") + '</g>' +
      Array.from({ length: 8 }, (_, i) => { const x = 20 + i * 48; return '<rect x="' + x + '" y="110" width="2" height="44" fill="#ccc"/><g class="le-flag' + (i % 2 ? " le-flag2" : "") + '"><rect x="' + (x + 2) + '" y="111" width="14" height="9" fill="' + ["#c8312b", "#1d3f8a", "#2fa38a", "#e8b84a"][i % 4] + '"/></g>'; }).join("") +
      '<rect x="0" y="150" width="400" height="110" fill="#8a8476"/>' +
      '<ellipse cx="200" cy="212" rx="150" ry="30" fill="#3f78a8"/><ellipse cx="200" cy="212" rx="150" ry="30" fill="none" stroke="#d6d0c0" stroke-width="5"/>' +
      '<g class="le-jet"><path d="M120 212q6 -40 12 0zM268 212q6 -40 12 0z" fill="#d6ecff" opacity=".8"/></g><g class="le-jet le-jet2"><path d="M150 214q5 -30 10 0zM240 214q5 -30 10 0z" fill="#d6ecff" opacity=".7"/></g>' +
      '<path d="M156 206h88l-8 -20h-72z" fill="#c9c2b0"/><path d="M168 186h64l-6 -30h-52z" fill="#d8d2c2"/><rect x="180" y="132" width="40" height="24" fill="#cfc8b6"/>' +
      '<g fill="#3d4f3a"><ellipse cx="198" cy="120" rx="18" ry="8"/><path d="M184 122l-6 12h4l6 -10zM190 124l-2 10h4l2 -10zM206 124l4 10h4l-4 -10zM212 120l8 10h4l-8 -12z"/><path d="M212 118q6 -4 8 -14l6 2q-2 12 -10 16z"/><path d="M220 104l8 2 -2 6 -6 -2z"/><path d="M180 118q-8 4 -8 12l3 1q1 -8 7 -10z"/>' +
      '<rect x="194" y="98" width="9" height="16" rx="3"/><circle cx="198.5" cy="94" r="4.5"/><path d="M194 92h9l-4.5 -6z"/><path d="M202 102l10 -6" stroke="#3d4f3a" stroke-width="3"/></g>' +
      '<rect x="296" y="160" width="96" height="40" fill="#1a1416"/><rect x="292" y="152" width="104" height="8" fill="#2a2228"/>' +
      '<g class="le-sw"><path d="M320 160l-22 60h30z" fill="' + GOLD + '" opacity=".3"/></g><g class="le-sw le-sw2"><path d="M366 160l-8 60h30z" fill="' + RED + '" opacity=".3"/></g>' +
      note(330, 150, GOLD, "") + note(360, 146, "#fff", "le-n2"),
      sky("le4", "#f0a35a", "#fde3b8"));
  }

  /* 5. N 60th St and Haverford Ave, West Philly: green signs, LAST EMP tagged on the rowhouse wall, the gray Gothic tower of Saint Joseph's Barbelin Hall up on City Ave behind, a mail truck rolling by (he carries mail in Philly now) */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#le5)"/>' + stars(16) +
      '<g fill="#5d6170"><rect x="252" y="50" width="34" height="90"/><path d="M252 50l17 -40 17 40z"/><rect x="246" y="46" width="6" height="94"/><rect x="286" y="46" width="6" height="94"/><path d="M246 46l3 -10 3 10zM286 46l3 -10 3 10z"/></g>' +
      '<rect x="262" y="62" width="14" height="22" rx="7" fill="#ffd98a" class="le-glow" opacity=".8"/><rect x="262" y="96" width="14" height="18" fill="#3a3e4a"/>' +
      '<g fill="#2b2a3e"><rect x="0" y="86" width="70" height="54"/><rect x="150" y="96" width="90" height="44"/><rect x="300" y="90" width="100" height="50"/></g>' +
      '<rect x="0" y="134" width="400" height="90" fill="#7a3e2e"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (142 + i * 8) + 'h400" stroke="#6a3426" stroke-width="1"/>').join("") +
      tag("LAST EMP", 18, 190, 40, GOLD, -6) + tag("MONUMENTAL", 212, 182, 17, RED, -4) + tag("RED PLANET", 28, 216, 18, "#fff", -3) + tag("WEST PHILLY", 190, 214, 18, JADE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="le-truck"><rect x="0" y="226" width="54" height="26" rx="3" fill="#f2f2f2"/><rect x="54" y="232" width="20" height="20" rx="3" fill="#f2f2f2"/><rect x="58" y="235" width="12" height="8" fill="#2b3442"/><rect x="0" y="238" width="54" height="3" fill="#1d3f8a"/><rect x="0" y="242" width="54" height="3" fill="' + RED + '"/><circle cx="14" cy="252" r="5" fill="#111"/><circle cx="60" cy="252" r="5" fill="#111"/></g>' +
      '<rect x="350" y="98" width="6" height="126" fill="#2f2f2f"/>' + sign(300, 100, 100, "N 60th St") + sign(286, 126, 114, "Haverford Ave") +
      '<g class="le-sp"><circle cx="178" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="le-sp le-sp2"><circle cx="184" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("le5", "#16123a", "#c8614a"));
  }

  window.SCENES = { station: station, lincoln: lincoln, palace: palace, eakins: eakins, corner: corner };
})();
