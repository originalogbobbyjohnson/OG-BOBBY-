/* jamilawoods scenes (Regions tab: Chicago; Beverly, far South Side, where she grew up). CSS classes prefixed jw- (the page's own anim-train is kept).
   1 103rd St-Beverly Hills on Metra's Rock Island (Beverly Branch): at-grade side platforms by Walden Pkwy, big Beverly trees, a silver bi-level train sliding in.
   2 Young Chicago Authors / Louder Than a Bomb: the youth poetry slam she helped run as Associate Artistic Director - mic, spotlight, pages flying.
   3 St. Ignatius College Prep (her high school): the 1869 cream limestone Second Empire building with the mansard roof and centre tower on Roosevelt Rd.
   4 Lake Michigan, always east (her father taught her the lake is east so she'd never get lost; "Water Made Us"): sunrise over the water, waves rolling in.
   5 W 99th St and S Longwood Dr in Beverly: green signs, JAMILA tagged, Frank Lloyd Wright's Robert W. Evans House (9914 S Longwood Dr, 1908) up on the Ridge behind: cream stucco, dark wood trim bands, low hipped roof. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jwflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.jw-flk{animation:jwflick 2.2s infinite}.jw-flk2{animation-delay:.7s}' +
    '@keyframes jwsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.jw-sway{transform-box:fill-box;transform-origin:50% 100%;animation:jwsway 4s ease-in-out infinite}.jw-sway2{animation-delay:-2s}' +
    '@keyframes jwbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.jw-beam{transform-box:fill-box;transform-origin:50% 0%;animation:jwbeam 4.5s ease-in-out infinite}' +
    '@keyframes jwpage{0%{transform:translate(0,0) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(70px,-120px) rotate(200deg);opacity:0}}.jw-pg{transform-box:fill-box;animation:jwpage 5s linear infinite}.jw-pg2{animation-delay:-1.7s}.jw-pg3{animation-delay:-3.4s}' +
    '@keyframes jwflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.jw-flag{transform-box:fill-box;transform-origin:0% 50%;animation:jwflag 1.6s ease-in-out infinite}' +
    '@keyframes jwleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-60px,200px) rotate(260deg)}}.jw-lf{transform-box:fill-box;animation:jwleaf 6s linear infinite}.jw-lf2{animation-delay:-2s}.jw-lf3{animation-delay:-4s}' +
    '@keyframes jwwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-24px)}}.jw-wv{animation:jwwave 4s ease-in-out infinite}.jw-wv2{animation-delay:-2s}' +
    '@keyframes jwsun{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.jw-sun{animation:jwsun 6s ease-in-out infinite}' +
    '@keyframes jwgull{0%{transform:translateX(-40px)}100%{transform:translateX(440px)}}.jw-gull{animation:jwgull 12s linear infinite}.jw-gull2{animation-delay:-6s}' +
    '@keyframes jwspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jw-sp{animation:jwspray 1.4s ease-out infinite}.jw-sp2{animation-delay:.45s}' +
    '@keyframes jwcar{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.jw-car{animation:jwcar 8s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const tree = (x, y, s, c, cls) => '<g class="' + (cls || "") + '"><rect x="' + (x - 3 * s) + '" y="' + (y - 6 * s) + '" width="' + (6 * s) + '" height="' + (26 * s) + '" fill="#4a3424"/><ellipse cx="' + x + '" cy="' + (y - 16 * s) + '" rx="' + (24 * s) + '" ry="' + (20 * s) + '" fill="' + c + '"/><ellipse cx="' + (x - 12 * s) + '" cy="' + (y - 8 * s) + '" rx="' + (14 * s) + '" ry="' + (11 * s) + '" fill="' + c + '" opacity=".85"/></g>';
  const RI = "#e2231a", GOLD = "#f4b942", PINK = "#e86a92", TEAL = "#5ec2b7";

  /* 1. 103rd St-Beverly Hills (Metra Rock Island, Beverly Branch), at grade */
  function jwstation() {
    const deck = (x, w) => '<rect x="' + x + '" y="96" width="' + w + '" height="30" rx="3" fill="#1f2a33"/>';
    const train = '<g class="anim-train">' +
      '<rect x="20" y="78" width="250" height="88" rx="6" fill="#d6dade" stroke="#7a828a" stroke-width="2"/>' +
      [34, 84, 134, 184, 222].map(x => deck(x, 34)).join("") +
      [34, 84, 134, 184, 222].map(x => '<rect x="' + x + '" y="132" width="34" height="18" rx="2" fill="#1f2a33"/>').join("") +
      '<rect x="20" y="126" width="250" height="3" fill="#9aa1a8"/>' +
      '<rect x="274" y="92" width="86" height="74" rx="6" fill="#cfd3d8" stroke="#7a828a" stroke-width="2"/><path d="M360 98q14 6 14 22v46h-14z" fill="#b8bec4"/>' +
      '<rect x="296" y="100" width="44" height="22" rx="3" fill="#1f2a33"/><rect x="274" y="140" width="100" height="6" fill="' + RI + '"/>' +
      '<circle cx="366" cy="154" r="4" fill="#fff6c2"/><circle cx="366" cy="110" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jws1)"/>' +
      tree(30, 70, 1.3, "#3f6f3a", "jw-sway") + tree(110, 60, 1.1, "#4c7d3f", "jw-sway jw-sway2") + tree(210, 66, 1.2, "#3a6534", "jw-sway") + tree(310, 58, 1.3, "#4c7d3f", "jw-sway jw-sway2") + tree(380, 70, 1.0, "#3f6f3a", "jw-sway") +
      '<rect x="0" y="160" width="400" height="10" fill="#6d5a48"/>' + Array.from({ length: 26 }, (_, i) => '<rect x="' + (i * 16) + '" y="162" width="9" height="6" fill="#4a3c30"/>').join("") +
      '<path d="M0 163h400M0 168h400" stroke="#a9a9a9" stroke-width="1.5"/>' +
      train +
      '<rect x="0" y="170" width="400" height="8" fill="#f2c200"/><rect x="0" y="178" width="400" height="32" fill="#9a958c"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#5a7a46"/><path d="M0 232h400" stroke="#4a6a38" stroke-width="2"/>' +
      '<rect x="28" y="140" width="6" height="40" fill="#333"/><rect x="190" y="140" width="6" height="40" fill="#333"/>' +
      '<rect x="22" y="182" width="226" height="30" rx="3" fill="#111"/><text x="34" y="202" ' + font + ' font-size="14" fill="#fff">103rd St-Beverly Hills</text>' + badge(254, 197, "RI", RI) +
      '<rect x="312" y="186" width="4" height="40" fill="#2a2a2a"/><circle class="jw-flk" cx="314" cy="184" r="6" fill="#ffe9a8"/>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">METRA ROCK ISLAND · BEVERLY BRANCH · WALDEN PKWY</text>',
      sky("jws1", "#2c3a66", "#f0a878"));
  }

  /* 2. Young Chicago Authors / Louder Than a Bomb poetry slam */
  function jwyca() {
    const seats = Array.from({ length: 3 }, (_, r) => Array.from({ length: 12 }, (_, i) => '<circle cx="' + (22 + i * 33 + (r % 2) * 14) + '" cy="' + (214 + r * 16) + '" r="9" fill="#1a1426"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="#120d1d"/>' +
      '<rect x="0" y="0" width="400" height="40" fill="#4a1630"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20 + 10) + ' 0v40" stroke="#36101f" stroke-width="6"/>').join("") +
      '<rect x="40" y="46" width="320" height="30" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="67" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="' + GOLD + '">LOUDER THAN A BOMB</text>' +
      '<g class="jw-beam"><path d="M200 40l-60 160h120z" fill="#fff4c9" opacity=".16"/></g>' +
      '<rect x="0" y="176" width="400" height="22" fill="#5a3a26"/><rect x="0" y="174" width="400" height="4" fill="#7a5236"/>' +
      '<rect x="198" y="112" width="4" height="64" fill="#888"/><path d="M186 176h28" stroke="#888" stroke-width="4"/><rect x="193" y="100" width="14" height="18" rx="7" fill="#444" stroke="#aaa"/>' +
      '<rect x="60" y="92" width="70" height="70" rx="4" fill="#1f1a2e" stroke="' + TEAL + '" stroke-width="2"/><text x="95" y="122" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" fill="' + TEAL + '">YOUNG</text><text x="95" y="138" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" fill="' + TEAL + '">CHICAGO</text><text x="95" y="154" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" fill="' + TEAL + '">AUTHORS</text>' +
      '<rect x="272" y="96" width="76" height="60" rx="3" fill="#f3ead6"/><path d="M282 110h56M282 120h56M282 130h46M282 140h52" stroke="#6b5a4a" stroke-width="2"/><text x="310" y="106" text-anchor="middle" ' + font + ' font-size="7" fill="#b33">SCORE 10.0</text>' +
      '<g class="jw-pg"><rect x="140" y="150" width="16" height="20" fill="#f6efdf" transform="rotate(-10 148 160)"/></g><g class="jw-pg jw-pg2"><rect x="230" y="156" width="16" height="20" fill="#f6efdf"/></g><g class="jw-pg jw-pg3"><rect x="180" y="160" width="14" height="18" fill="' + GOLD + '"/></g>' +
      seats +
      '<text x="200" y="94" text-anchor="middle" ' + font + ' font-size="9" fill="#e8d9ff" opacity=".85">YOUTH POETRY · CHICAGO</text>');
  }

  /* 3. St. Ignatius College Prep, 1869 building */
  function jwignatius() {
    const winRow = (y, n, x0, dx, h) => Array.from({ length: n }, (_, i) => '<rect x="' + (x0 + i * dx) + '" y="' + y + '" width="12" height="' + h + '" rx="5" fill="#2b3442"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jws3)"/>' +
      '<rect x="30" y="100" width="340" height="120" fill="#e3d3ae"/><rect x="30" y="98" width="340" height="6" fill="#cbb98f"/>' +
      '<path d="M26 100l12 -26h324l12 26z" fill="#5d6670"/><path d="M38 74h324" stroke="#3f464e" stroke-width="2"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (52 + i * 32) + '" y="80" width="10" height="14" rx="4" fill="#e3d3ae"/>').join("") +
      '<rect x="166" y="56" width="68" height="164" fill="#ead9b4"/><path d="M160 58l10 -26h60l10 26z" fill="#5d6670"/><rect x="190" y="18" width="20" height="16" fill="#5d6670"/><path d="M186 20l14 -12l14 12z" fill="#3f464e"/>' +
      '<rect x="198" y="0" width="2" height="12" fill="#333"/><g class="jw-flag"><rect x="200" y="0" width="16" height="10" fill="#a1182c"/></g>' +
      '<circle cx="200" cy="44" r="6" fill="#f6f0e0" stroke="#3f464e"/>' +
      winRow(110, 4, 46, 28, 24) + winRow(152, 4, 46, 28, 24) + winRow(110, 4, 248, 28, 24) + winRow(152, 4, 248, 28, 24) +
      '<rect x="178" y="70" width="14" height="24" rx="6" fill="#2b3442"/><rect x="208" y="70" width="14" height="24" rx="6" fill="#2b3442"/><rect x="178" y="110" width="14" height="24" rx="6" fill="#2b3442"/><rect x="208" y="110" width="14" height="24" rx="6" fill="#2b3442"/>' +
      '<path d="M184 220v-40q16 -16 32 0v40z" fill="#4a2e1e"/><rect x="170" y="216" width="60" height="6" fill="#bfae86"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#5c5a56"/><path d="M0 240h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="16 12"/>' +
      tree(16, 226, .9, "#c46a2a") + tree(386, 226, .9, "#d8902e") +
      '<g class="jw-lf"><ellipse cx="80" cy="20" rx="4" ry="2" fill="#d8902e"/></g><g class="jw-lf jw-lf2"><ellipse cx="300" cy="10" rx="4" ry="2" fill="#c46a2a"/></g><g class="jw-lf jw-lf3"><ellipse cx="360" cy="40" rx="4" ry="2" fill="#e0b040"/></g>' +
      '<rect x="120" y="230" width="160" height="22" rx="3" fill="#111"/><text x="200" y="245" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">1869 · ROOSEVELT RD</text>',
      sky("jws3", "#6fa4d8", "#f4dcb0"));
  }

  /* 4. Lake Michigan, always east: sunrise over the water */
  function jwlake() {
    return svg(
      '<rect width="400" height="260" fill="url(#jws4)"/>' +
      '<g class="jw-sun"><circle cx="270" cy="120" r="34" fill="#ffd27a"/><circle cx="270" cy="120" r="48" fill="#ffd27a" opacity=".25"/></g>' +
      '<g fill="#3b3550" opacity=".85"><rect x="0" y="100" width="10" height="34"/><rect x="12" y="84" width="12" height="50"/><rect x="26" y="70" width="8" height="64"/><rect x="36" y="92" width="14" height="42"/><rect x="52" y="104" width="10" height="30"/></g>' +
      '<rect x="0" y="132" width="400" height="80" fill="#2f6f8f"/><path d="M200 132l70 0l-50 80h-40z" fill="#ffd27a" opacity=".18"/>' +
      '<g class="jw-wv"><path d="M-20 150q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#a8dcec" stroke-width="2" fill="none"/></g>' +
      '<g class="jw-wv jw-wv2"><path d="M-20 172q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#d2f0f6" stroke-width="2.5" fill="none"/></g>' +
      '<g class="jw-wv"><path d="M-20 196q20 -7 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#ffffff" stroke-width="3" fill="none" opacity=".85"/></g>' +
      '<path d="M0 212q100 -10 200 0t200 0v48h-400z" fill="#e8cf9a"/>' +
      '<g class="jw-gull"><path d="M20 60q6 -6 12 0q6 -6 12 0" stroke="#2a2a3a" stroke-width="2" fill="none"/></g><g class="jw-gull jw-gull2"><path d="M20 44q5 -5 10 0q5 -5 10 0" stroke="#2a2a3a" stroke-width="2" fill="none"/></g>' +
      '<circle cx="66" cy="234" r="18" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><path d="M66 220l5 14h-10z" fill="' + PINK + '"/><text x="66" y="250" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">E</text>' +
      '<path d="M84 234h40" stroke="' + GOLD + '" stroke-width="3"/><path d="M124 228l10 6l-10 6z" fill="' + GOLD + '"/>' +
      '<rect x="210" y="222" width="174" height="26" rx="3" fill="#111" opacity=".85"/><text x="297" y="240" text-anchor="middle" ' + font + ' font-size="12" fill="' + TEAL + '">THE LAKE IS ALWAYS EAST</text>',
      sky("jws4", "#3a3f78", "#f4a6a0"));
  }

  /* 5. W 99th St and S Longwood Dr, Beverly: Frank Lloyd Wright's Evans House up on the Ridge */
  function jwcorner() {
    const house = '<g>' +
      '<path d="M86 70l124 -26l124 26z" fill="#3b3a36"/><rect x="104" y="70" width="212" height="8" fill="#5a4a3a"/>' +
      '<rect x="112" y="78" width="196" height="54" fill="#efe6d2"/><rect x="112" y="98" width="196" height="5" fill="#5a4a3a"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (122 + i * 23) + '" y="82" width="15" height="14" fill="#2b3442"/><path d="M' + (129.5 + i * 23) + ' 82v14" stroke="#5a4a3a" stroke-width="1.5"/>').join("") +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (126 + i * 38) + '" y="108" width="22" height="20" fill="#2b3442"/><path d="M' + (137 + i * 38) + ' 108v20" stroke="#5a4a3a" stroke-width="1.5"/>').join("") +
      '<path d="M60 108l50 -10h4v10z" fill="#3b3a36"/><rect x="60" y="108" width="54" height="24" fill="#efe6d2"/><rect x="60" y="106" width="56" height="4" fill="#5a4a3a"/>' +
      '<path d="M306 98l50 10h-50z" fill="#3b3a36"/><rect x="306" y="108" width="54" height="24" fill="#efe6d2"/><rect x="306" y="106" width="56" height="4" fill="#5a4a3a"/>' +
      '<rect x="196" y="40" width="28" height="12" fill="#8a6a4e"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jws5)"/>' +
      '<path d="M0 128q200 -30 400 0v20h-400z" fill="#4c7d3f"/>' + house +
      tree(30, 128, 1.2, "#3f6f3a", "jw-sway") + tree(376, 126, 1.1, "#3a6534", "jw-sway jw-sway2") +
      '<rect x="0" y="136" width="400" height="88" fill="#8a6a4e"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#6f5440" stroke-width="1"/>').join("") +
      Array.from({ length: 11 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (136 + i * 8) + 'v8" stroke="#6f5440" stroke-width="1"/>').join("")).join("") +
      tag("JAMILA", 20, 196, 56, GOLD, -6) + tag("HEAVN", 30, 218, 18, PINK, -4) + tag("LEGACY! LEGACY!", 120, 216, 15, TEAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(260, 98, 130, "W 99th St") + sign(256, 124, 128, "S Longwood Dr") +
      '<g class="jw-car"><rect x="0" y="238" width="58" height="14" rx="5" fill="' + PINK + '"/><rect x="12" y="230" width="32" height="10" rx="3" fill="' + PINK + '"/><rect x="15" y="232" width="12" height="6" fill="#bfe3ff"/><rect x="30" y="232" width="12" height="6" fill="#bfe3ff"/><circle cx="13" cy="252" r="5" fill="#111"/><circle cx="45" cy="252" r="5" fill="#111"/></g>' +
      '<g class="jw-sp"><circle cx="196" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="jw-sp jw-sp2"><circle cx="202" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("jws5", "#2c3a66", "#f0b080"));
  }

  window.SCENES = { jwstation: jwstation, jwyca: jwyca, jwignatius: jwignatius, jwlake: jwlake, jwcorner: jwcorner };
})();
