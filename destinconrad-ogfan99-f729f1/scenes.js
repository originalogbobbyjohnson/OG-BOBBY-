/* destinconrad scenes (Regions tab: South Florida region, Tampa; born and raised in Tampa, Philip Shore Elementary Magnet (performing arts) in Ybor City, sang in church with his aunt incl. church boat rides, hometown show at Jannus Live in St. Pete). CSS classes prefixed dcn- (the page's own anim-train is kept).
   1 The Tampa heritage streetcar pulling into Centennial Park station on E 8th Ave in Ybor: cream-and-maroon car, the shelter, palms, black sign with a streetcar bullet.
   2 Philip Shore Elementary (1922, 1908 E 2nd Ave): two-story tan brick school with an arched entry and red tile trim, palms, music notes drifting out the windows.
   3 A church boat ride on Hillsborough Bay at sunset: the boat with choir robes on deck (silhouettes), water rippling, a pelican.
   4 Jannus Live courtyard in St. Pete, his hometown show: brick walls, string lights pulsing, the stage, hands up in the crowd.
   5 E 2nd Ave and N 19th St in Ybor: green signs, DESTIN tagged with 813 and COLORWAY, downtown Tampa's round "beer can" tower behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dcnglow{0%,100%{opacity:.4}50%{opacity:1}}.dcn-glow{animation:dcnglow 2.4s ease-in-out infinite}.dcn-g2{animation-delay:-1.2s}' +
    '@keyframes dcnsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.dcn-sw{transform-box:fill-box;transform-origin:50% 100%;animation:dcnsway 3.4s ease-in-out infinite}.dcn-sw2{animation-delay:-1.7s}' +
    '@keyframes dcnnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(30px,-60px);opacity:0}}.dcn-note{animation:dcnnote 3.2s ease-out infinite}.dcn-n2{animation-delay:-1.1s}.dcn-n3{animation-delay:-2.2s}' +
    '@keyframes dcnrock{0%,100%{transform:translateY(0) rotate(-1deg)}50%{transform:translateY(3px) rotate(1deg)}}.dcn-rock{transform-box:fill-box;transform-origin:50% 100%;animation:dcnrock 3s ease-in-out infinite}' +
    '@keyframes dcnrip{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.dcn-rip{animation:dcnrip 3s linear infinite}' +
    '@keyframes dcnbird{0%{transform:translate(-50px,0)}100%{transform:translate(470px,-20px)}}.dcn-bird{animation:dcnbird 12s linear infinite}' +
    '@keyframes dcnhand{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.dcn-hand{animation:dcnhand 1s ease-in-out infinite}.dcn-h2{animation-delay:-.5s}' +
    '@keyframes dcndrip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(22px);opacity:0}}.dcn-dr{animation:dcndrip 1.9s ease-in infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const PINK = "#f6b3d0", TEAL = "#7fd6c2", SUN = "#ffd166", MAR = "#7a1f2a";
  const palm = (x, y, h, d) => '<g class="dcn-sw' + (d ? " dcn-sw2" : "") + '"><path d="M' + x + ' ' + y + 'q-4 -' + (h / 2) + ' 4 -' + h + '" stroke="#7a5a3a" stroke-width="5" fill="none"/>' +
    [[-30, 8], [-18, -6], [0, -12], [18, -6], [30, 8]].map(([dx, dy]) => '<path d="M' + (x + 4) + ' ' + (y - h) + 'q' + (dx / 2) + ' ' + (dy - 10) + ' ' + dx + ' ' + (dy + 4) + '" stroke="#2e7a3a" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const note = (x, y, cls, c) => '<g class="dcn-note ' + cls + '"><path d="M' + x + ' ' + y + 'v-14l9 -3v14" stroke="' + c + '" stroke-width="2" fill="none"/><ellipse cx="' + (x - 3) + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '"/><ellipse cx="' + (x + 6) + '" cy="' + (y - 3) + '" rx="4" ry="3" fill="' + c + '"/></g>';

  /* 1. Streetcar at Centennial Park station, Ybor */
  function dcnstop() {
    const car = '<g class="anim-train"><rect x="60" y="96" width="250" height="20" rx="6" fill="#5a5048"/>' +
      '<rect x="56" y="112" width="258" height="50" fill="#f1e2bf" stroke="#6b5a3a" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (66 + i * 34) + '" y="120" width="26" height="30" rx="3" fill="#2a3440"/>').join("") +
      '<rect x="56" y="162" width="258" height="34" fill="' + MAR + '" stroke="#4a1018" stroke-width="2"/><rect x="56" y="170" width="258" height="3" fill="' + SUN + '"/>' +
      '<path d="M185 96l-20 -40" stroke="#333" stroke-width="2"/>' +
      '<circle cx="100" cy="204" r="9" fill="#222"/><circle cx="270" cy="204" r="9" fill="#222"/><circle cx="60" cy="182" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dcn0)"/>' +
      '<path d="M0 56h400" stroke="#333" stroke-width="1.5"/>' +
      palm(24, 196, 100, 0) + palm(384, 196, 110, 1) +
      '<rect x="0" y="196" width="400" height="18" fill="#c9bfae"/><rect x="0" y="214" width="400" height="46" fill="#7a3a2a"/>' +
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="214" width="19" height="9" fill="#8a4432"/><rect x="' + (i * 20 + 10) + '" y="224" width="19" height="9" fill="#8a4432"/>').join("") +
      '<path d="M0 240h400M0 250h400" stroke="#555" stroke-width="3"/>' +
      '<path d="M300 92h96l-8 10h-80z" fill="#2f5a3a"/><rect x="312" y="102" width="5" height="94" fill="#2f5a3a"/><rect x="378" y="102" width="5" height="94" fill="#2f5a3a"/>' +
      car +
      '<rect x="14" y="14" width="232" height="36" rx="3" fill="#111"/><circle cx="36" cy="32" r="13" fill="' + MAR + '"/><path d="M28 30h16v8h-16z M30 26h12v4h-12z" fill="#f1e2bf"/>' +
      '<text x="56" y="38" ' + font + ' font-size="14" fill="#fff">Centennial Park</text>',
      sky("dcn0", "#4aa8e0", "#ffe9c8"));
  }

  /* 2. Philip Shore Elementary, Ybor City */
  function dcnschool() {
    return svg(
      '<rect width="400" height="260" fill="url(#dcn1)"/>' +
      '<circle cx="340" cy="44" r="22" fill="' + SUN + '" class="dcn-glow"/>' +
      '<rect x="60" y="76" width="280" height="118" fill="#d9b98a" stroke="#9a7a4a" stroke-width="2"/>' +
      '<rect x="56" y="70" width="288" height="10" fill="#b5523a"/><rect x="160" y="56" width="80" height="22" fill="#d9b98a" stroke="#9a7a4a" stroke-width="2"/><rect x="156" y="52" width="88" height="6" fill="#b5523a"/>' +
      [0, 1].map(r => [0, 1, 2, 3, 4, 5, 6, 7].filter(c => !(r === 1 && (c === 3 || c === 4))).map(c => '<rect x="' + (74 + c * 32) + '" y="' + (92 + r * 48) + '" width="20" height="30" fill="#2e3e52" stroke="#f3ead6" stroke-width="2"/>').join("")).join("") +
      '<path d="M176 194v-38a24 24 0 0 1 48 0v38z" fill="#3a2a1a" stroke="#f3ead6" stroke-width="3"/>' +
      '<text x="200" y="70" text-anchor="middle" ' + font + ' font-size="8" fill="#5a3a1a">SHORE</text>' +
      note(110, 110, "", "#7a2a6a") + note(280, 104, "dcn-n2", "#2a6a7a") + note(250, 150, "dcn-n3", "#7a2a6a") +
      palm(34, 196, 96, 0) + palm(368, 196, 104, 1) +
      '<rect x="0" y="194" width="400" height="66" fill="#6aa04a"/><path d="M176 194h48l20 66h-88z" fill="#d8d0bc"/>' +
      '<rect x="118" y="160" width="3" height="40" fill="#555"/>',
      sky("dcn1", "#5ab4ea", "#e6f4fb"));
  }

  /* 3. Church boat ride on Hillsborough Bay at sunset */
  function dcnboat() {
    const robes = [0, 1, 2, 3, 4].map(i => '<g><circle cx="' + (126 + i * 22) + '" cy="120" r="6" fill="#1a1020"/><path d="M' + (132 + i * 22) + ' 146l4 -20h12l4 20z" fill="' + (i % 2 ? "#5a2a7a" : "#7a3a9a") + '"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dcn2)"/>' +
      '<circle cx="80" cy="150" r="34" fill="#ffb347" class="dcn-glow"/>' +
      '<g fill="#3a2a4a" opacity=".8"><rect x="250" y="110" width="14" height="44"/><rect x="268" y="96" width="18" height="58"/><rect x="290" y="120" width="12" height="34"/><rect x="306" y="104" width="16" height="50" rx="7"/><rect x="326" y="116" width="14" height="38"/></g>' +
      '<rect x="0" y="154" width="400" height="106" fill="#2a4a7a"/>' +
      '<g class="dcn-rip">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (176 + (i % 3) * 22) + 'q10 -4 20 0" stroke="#ffd1a0" stroke-width="2" fill="none" opacity=".7"/>').join("") + '</g>' +
      '<g class="dcn-rock"><path d="M100 160h220l-24 34h-176z" fill="#f4f0e8" stroke="#8a8478" stroke-width="2"/>' +
      '<rect x="130" y="146" width="160" height="14" fill="#e2dcd0"/>' + robes +
      '<rect x="250" y="60" width="4" height="86" fill="#8a8478"/><path d="M254 64l40 70h-40z" fill="#fff" opacity=".9"/>' +
      '<path d="M120 172h180" stroke="' + TEAL + '" stroke-width="3"/></g>' +
      note(170, 104, "", "#fff") + note(230, 100, "dcn-n2", SUN) +
      '<g class="dcn-bird"><path d="M0 60q8 -6 16 0q8 -6 16 0" stroke="#2a1a1a" stroke-width="2.5" fill="none"/></g>',
      sky("dcn2", "#5a3a7a", "#ff9a6a"));
  }

  /* 4. Jannus Live courtyard, St. Pete */
  function dcnjannus() {
    const bulbs = (y0, a) => Array.from({ length: 14 }, (_, i) => { const x = 10 + i * 29, y = y0 + Math.sin(i / 13 * Math.PI) * a; return '<circle cx="' + x + '" cy="' + y.toFixed(1) + '" r="3.5" fill="#ffe7a0" class="dcn-glow' + (i % 2 ? " dcn-g2" : "") + '"/>'; }).join("");
    const hands = Array.from({ length: 12 }, (_, i) => '<g class="dcn-hand' + (i % 2 ? " dcn-h2" : "") + '"><rect x="' + (16 + i * 33) + '" y="' + (196 + (i % 3) * 6) + '" width="6" height="26" rx="3" fill="#0d0a0f"/><circle cx="' + (19 + i * 33) + '" cy="' + (194 + (i % 3) * 6) + '" r="5" fill="#0d0a0f"/></g>').join("");
    const heads = Array.from({ length: 21 }, (_, i) => '<circle cx="' + (8 + i * 19) + '" cy="' + (228 + (i % 2) * 6) + '" r="9" fill="#0d0a0f"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dcn3)"/>' +
      '<rect x="0" y="40" width="70" height="200" fill="#8a4a36"/><rect x="330" y="40" width="70" height="200" fill="#8a4a36"/>' +
      Array.from({ length: 18 }, (_, i) => '<path d="M0 ' + (50 + i * 11) + 'h70M330 ' + (50 + i * 11) + 'h70" stroke="#6e3a2a" stroke-width="1"/>').join("") +
      '<rect x="110" y="96" width="180" height="100" fill="#1a1222"/><rect x="104" y="88" width="192" height="10" fill="#3a2a3a"/>' +
      '<rect x="104" y="190" width="192" height="12" fill="#4a3a2a"/>' +
      '<circle cx="150" cy="104" r="7" fill="' + PINK + '" class="dcn-glow"/><circle cx="200" cy="104" r="7" fill="' + TEAL + '" class="dcn-glow dcn-g2"/><circle cx="250" cy="104" r="7" fill="' + SUN + '" class="dcn-glow"/>' +
      '<rect x="198" y="150" width="3" height="40" fill="#bbb"/><circle cx="199.5" cy="150" r="4" fill="#ddd"/>' +
      '<path d="M0 24q200 60 400 0" stroke="#222" stroke-width="1.2" fill="none"/>' + bulbs(24, 30) +
      '<path d="M0 60q200 50 400 0" stroke="#222" stroke-width="1.2" fill="none"/>' + bulbs(60, 25) +
      palm(90, 200, 90, 1) + palm(312, 200, 96, 0) + hands + heads,
      sky("dcn3", "#0e1236", "#4a2a5a"));
  }

  /* 5. E 2nd Ave and N 19th St, Ybor */
  function dcncorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dcn4)"/>' +
      '<g fill="#6a7a8e"><rect x="60" y="70" width="22" height="70"/><rect x="88" y="54" width="26" height="86"/><rect x="230" y="64" width="24" height="76"/><rect x="258" y="80" width="20" height="60"/></g>' +
      '<rect x="160" y="24" width="44" height="116" rx="20" fill="#8a9aae"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M162 ' + (40 + i * 10) + 'h40" stroke="#5a6a7e" stroke-width="2"/>').join("") +
      '<rect x="0" y="100" width="400" height="104" fill="#b0563a"/>' +
      Array.from({ length: 10 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<rect x="' + (c * 30 + (r % 2) * 15 - 15) + '" y="' + (100 + r * 10) + '" width="29" height="9" fill="#bb6244"/>').join("")).join("") +
      '<rect x="0" y="96" width="400" height="6" fill="#d9c9a8"/>' +
      tag("DESTIN", 24, 170, 44, PINK, -6) + tag("813", 220, 150, 26, SUN, -4) + tag("COLORWAY", 196, 190, 18, TEAL, 3) +
      '<path d="M60 176v16M120 172v16" stroke="' + PINK + '" stroke-width="3" class="dcn-dr"/>' +
      palm(372, 204, 120, 0) +
      '<rect x="0" y="204" width="400" height="56" fill="#4a4a50"/><rect x="0" y="204" width="400" height="10" fill="#c9bfae"/>' +
      '<rect x="330" y="30" width="6" height="180" fill="#2b4a2e"/>' +
      '<rect x="262" y="34" width="112" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="318" y="50" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">E 2nd Ave</text>' +
      '<rect x="262" y="62" width="112" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="284" y="78" ' + font + ' font-size="12" fill="#fff">N 1</text>' +
      '<circle cx="309" cy="69.5" r="4" fill="none" stroke="#fff" stroke-width="2.3"/><path d="M313 69.5V78.5" stroke="#fff" stroke-width="2.3"/>' +
      '<text x="317" y="78" ' + font + ' font-size="12" fill="#fff">th St</text>',
      sky("dcn4", "#6ab4e6", "#ffe0c0"));
  }

  window.SCENES = { dcnstop, dcnschool, dcnboat, dcnjannus, dcncorner };
})();
