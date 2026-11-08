/* lionelrichie scenes (Regions tab: More of the South, Tuskegee AL). CSS classes prefixed lnr- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lnrglow{0%,100%{opacity:.45}50%{opacity:1}}.lnr-glow{animation:lnrglow 2.4s ease-in-out infinite}.lnr-g2{animation-delay:-1.2s}' +
    '@keyframes lnrnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(24px,-66px);opacity:0}}.lnr-nt{animation:lnrnote 3.2s ease-out infinite}.lnr-nt2{animation-delay:-1.1s}.lnr-nt3{animation-delay:-2.2s}' +
    '@keyframes lnrsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.lnr-sw{transform-box:fill-box;transform-origin:50% 100%;animation:lnrsway 3s ease-in-out infinite}.lnr-sw2{animation-delay:-1.5s}' +
    '@keyframes lnrplane{0%{transform:translate(-120px,30px)}100%{transform:translate(460px,-40px)}}.lnr-plane{animation:lnrplane 9s linear infinite}' +
    '@keyframes lnrcloud{0%{transform:translateX(0)}100%{transform:translateX(60px)}}.lnr-cl{animation:lnrcloud 14s ease-in-out infinite alternate}' +
    '@keyframes lnrbird{0%{transform:translateX(-40px)}100%{transform:translateX(440px)}}.lnr-bd{animation:lnrbird 16s linear infinite}' +
    '@keyframes lnrspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lnr-sp{animation:lnrspray 1.4s ease-out infinite}.lnr-sp2{animation-delay:.45s}' +
    '@keyframes lnrsock{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.lnr-sock{transform-box:fill-box;transform-origin:0% 50%;animation:lnrsock 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="lnr-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const pine = (x, base, h, c) => '<g class="lnr-sw"><rect x="' + (x - 2) + '" y="' + (base - h * 0.3) + '" width="4" height="' + (h * 0.3) + '" fill="#4a3322"/>' +
    '<path d="M' + x + ' ' + (base - h) + 'L' + (x + h * 0.22) + ' ' + (base - h * 0.55) + 'H' + (x + h * 0.1) + 'L' + (x + h * 0.3) + ' ' + (base - h * 0.25) + 'H' + (x - h * 0.3) + 'L' + (x - h * 0.1) + ' ' + (base - h * 0.55) + 'H' + (x - h * 0.22) + 'Z" fill="' + (c || "#1f4a2c") + '"/></g>';
  const bricks = (x, y, w, h, base, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 6; yy < y + h; yy += 6) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".7" opacity=".6"/>'; return s; };
  const GOLD = "#f0c24b", CRIM = "#b3122e", IVORY = "#f6ecd6", SKY = "#7fd1e8", BRICK = "#9a4a32";

  /* 1. Coming in off I-85: the green Exit 38 sign for AL-81 South to Tuskegee, a car sliding in on the interstate, Alabama pines */
  function lnrhwy() {
    let trees = "";
    for (let i = 0; i < 12; i++) trees += pine(10 + i * 36, 168, 46 + (i * 17) % 22, i % 2 ? "#1f4a2c" : "#2a5a34");
    const shield = (x, y) => '<path d="M' + x + ' ' + y + 'h30v20q0 14 -15 20q-15 -6 -15 -20z" fill="#0b3d91" stroke="#fff" stroke-width="2"/><path d="M' + x + ' ' + y + 'h30v8h-30z" fill="#c8102e"/>' +
      '<text x="' + (x + 15) + '" y="' + (y + 7) + '" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">INTERSTATE</text><text x="' + (x + 15) + '" y="' + (y + 25) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">85</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#lnr1)"/>' +
      '<g class="lnr-cl"><ellipse cx="60" cy="40" rx="34" ry="9" fill="#fff" opacity=".7"/><ellipse cx="300" cy="28" rx="40" ry="10" fill="#fff" opacity=".6"/></g>' +
      '<circle cx="350" cy="56" r="16" fill="#ffd36b" opacity=".9"/>' + trees +
      '<rect x="0" y="168" width="400" height="92" fill="#4a4d52"/><rect x="0" y="166" width="400" height="4" fill="#d9d4c6"/>' +
      '<path d="M0 214h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="26 22"/><rect x="0" y="252" width="400" height="3" fill="#f2c14e"/>' +
      /* overhead sign gantry */
      '<rect x="96" y="40" width="6" height="128" fill="#8b9096"/><rect x="330" y="40" width="6" height="128" fill="#8b9096"/><rect x="96" y="56" width="240" height="5" fill="#8b9096"/>' +
      '<rect x="112" y="30" width="206" height="96" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' +
      '<rect x="230" y="18" width="88" height="18" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><text x="274" y="32" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">EXIT 38</text>' +
      '<rect x="126" y="40" width="34" height="34" rx="2" fill="#fff"/><rect x="128" y="42" width="30" height="30" fill="#fff" stroke="#000" stroke-width="1.5"/><text x="143" y="63" text-anchor="middle" ' + font + ' font-size="17" fill="#000">81</text>' +
      '<text x="168" y="64" ' + font + ' font-size="15" fill="#fff">SOUTH</text>' +
      '<text x="215" y="102" text-anchor="middle" ' + font + ' font-size="26" fill="#fff">Tuskegee</text>' +
      '<path d="M296 84l10 -14l10 14h-6v16h-8v-16z" fill="#fff" transform="rotate(35 306 86)"/>' +
      shield(40, 108) +
      '<g class="anim-train"><g transform="translate(210 0)"><rect x="0" y="196" width="104" height="26" rx="8" fill="' + CRIM + '"/><path d="M18 196l14 -18h40l16 18z" fill="#8a0e24"/><path d="M24 194l10 -13h16v13z" fill="#a8d4ea"/><path d="M54 194v-13h16l12 13z" fill="#a8d4ea"/>' +
      '<circle cx="24" cy="222" r="9" fill="#1a1a1a"/><circle cx="24" cy="222" r="4" fill="#9a9a9a"/><circle cx="82" cy="222" r="9" fill="#1a1a1a"/><circle cx="82" cy="222" r="4" fill="#9a9a9a"/>' +
      '<rect x="98" y="202" width="6" height="5" rx="1" fill="#fff6c2" class="lnr-glow"/></g></g>',
      sky("lnr1", "#5fa8d8", "#f3c98a"));
  }

  /* 2. The Commodores Museum on E Martin Luther King Hwy downtown: a small brick storefront, the band's old horn and kit in the window, notes drifting out */
  function lnrmuseum() {
    return svg(
      '<rect width="400" height="260" fill="url(#lnr2)"/>' +
      '<g class="lnr-cl"><ellipse cx="80" cy="36" rx="36" ry="9" fill="#fff" opacity=".6"/></g>' +
      pine(20, 150, 70) + pine(380, 150, 76) +
      bricks(50, 52, 300, 128, BRICK, "#6e2f1f") +
      '<rect x="44" y="44" width="312" height="12" fill="#5a2a1c"/><rect x="50" y="56" width="300" height="4" fill="#d9c7a3"/>' +
      '<rect x="84" y="66" width="232" height="26" rx="3" fill="#1d1d1d" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="85" text-anchor="middle" ' + font + ' font-size="14" fill="' + GOLD + '" letter-spacing="1.5">COMMODORES MUSEUM</text>' +
      /* windows */
      '<rect x="66" y="102" width="110" height="70" fill="#20303c" stroke="#d9c7a3" stroke-width="3"/><rect x="224" y="102" width="110" height="70" fill="#20303c" stroke="#d9c7a3" stroke-width="3"/>' +
      '<rect x="184" y="104" width="32" height="76" fill="#3a2016" stroke="#d9c7a3" stroke-width="2"/><circle cx="210" cy="144" r="2" fill="' + GOLD + '"/>' +
      '<path d="M66 102l20 70M176 102l-24 70" stroke="#fff" stroke-width="1" opacity=".12"/>' +
      /* saxophone in left window */
      '<g transform="translate(96 108)"><path d="M18 4c-4 0 -4 6 0 6v34c0 10 8 16 16 12c6 -3 6 -10 6 -16" stroke="' + GOLD + '" stroke-width="6" fill="none" stroke-linecap="round"/><ellipse cx="40" cy="38" rx="7" ry="4" fill="' + GOLD + '"/>' +
      '<circle cx="18" cy="18" r="1.6" fill="#7a5a1a"/><circle cx="18" cy="26" r="1.6" fill="#7a5a1a"/><circle cx="18" cy="34" r="1.6" fill="#7a5a1a"/><path d="M14 4l-8 -2" stroke="#222" stroke-width="2"/></g>' +
      /* drum kit in right window */
      '<g transform="translate(244 118)"><ellipse cx="34" cy="34" rx="20" ry="18" fill="' + CRIM + '"/><ellipse cx="34" cy="34" rx="12" ry="10" fill="#f6ecd6"/><rect x="58" y="22" width="14" height="22" rx="2" fill="' + CRIM + '"/>' +
      '<path d="M2 8h22M13 8v40" stroke="' + GOLD + '" stroke-width="2.5"/><path d="M60 4h24M72 4v44" stroke="' + GOLD + '" stroke-width="2.5"/></g>' +
      note(150, 112, GOLD) + note(300, 108, IVORY, "lnr-nt2") + note(200, 96, SKY, "lnr-nt3") +
      '<rect x="0" y="180" width="400" height="80" fill="#c9c2b2"/><rect x="0" y="180" width="400" height="5" fill="#e8e1d0"/><rect x="0" y="214" width="400" height="46" fill="#4a4d52"/>' +
      '<path d="M0 238h400" stroke="#f2c14e" stroke-width="2" stroke-dasharray="20 16"/>' +
      '<rect x="372" y="120" width="5" height="94" fill="#2f2f2f"/>' + sign(318, 108, 76, "E MLK Hwy"),
      sky("lnr2", "#7cb8e0", "#f6dca8"));
  }

  /* 3. Tuskegee University Chapel: the red-brown brick chapel with its folded, tilted rooflines and tall slit windows, organ music in the air */
  function lnrchapel() {
    let lawn = "";
    for (let i = 0; i < 26; i++) lawn += '<path d="M' + (i * 16) + ' 214q3 -8 6 0" stroke="#3f7a3a" stroke-width="1.5" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lnr3)"/>' +
      '<g class="lnr-cl"><ellipse cx="320" cy="34" rx="40" ry="9" fill="#fff" opacity=".55"/></g>' +
      '<g class="lnr-bd"><path d="M0 50q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="1.5" fill="none"/></g>' +
      pine(26, 200, 90) + pine(374, 200, 96) + pine(354, 200, 70, "#2a5a34") +
      /* chapel masses */
      '<path d="M70 200V112l70 -40v128z" fill="#8c3f2b"/><path d="M140 200V72l58 -30l60 40v118z" fill="#a24c33"/><path d="M258 200V82l72 30v88z" fill="#7d3726"/>' +
      '<path d="M70 112l70 -40l58 -30l60 40l72 30" stroke="#5a2618" stroke-width="3" fill="none"/>' +
      Array.from({ length: 16 }, (_, i) => '<path d="M70 ' + (120 + i * 5) + 'h260" stroke="#5e2a1c" stroke-width=".6" opacity=".45"/>').join("") +
      /* tall slit windows with warm glow */
      [160, 176, 192, 208, 224, 240].map((x, i) => '<rect class="lnr-glow ' + (i % 2 ? "lnr-g2" : "") + '" x="' + x + '" y="' + (96 - (i < 3 ? i * 4 : (5 - i) * 4)) + '" width="6" height="' + (88 + (i < 3 ? i * 4 : (5 - i) * 4)) + '" fill="#ffd98a"/>').join("") +
      '<rect x="92" y="130" width="8" height="54" fill="#ffd98a" class="lnr-glow lnr-g2"/><rect x="290" y="128" width="8" height="56" fill="#ffd98a" class="lnr-glow"/>' +
      '<rect x="178" y="166" width="44" height="34" fill="#3a1a10"/><path d="M178 166h44" stroke="' + IVORY + '" stroke-width="2"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#4f8f45"/>' + lawn +
      '<path d="M160 260l26 -60h28l26 60z" fill="#d9cfb8"/>' +
      note(120, 108, IVORY) + note(270, 100, GOLD, "lnr-nt2") + note(330, 120, SKY, "lnr-nt3"),
      sky("lnr3", "#6aa6d6", "#f7d9a8"));
  }

  /* 4. Moton Field, home of the Tuskegee Airmen: the red-brick hangar, the windsock, a red-tailed trainer sweeping across the sky */
  function lnrmoton() {
    return svg(
      '<rect width="400" height="260" fill="url(#lnr4)"/>' +
      '<g class="lnr-cl"><ellipse cx="90" cy="46" rx="44" ry="10" fill="#fff" opacity=".7"/><ellipse cx="290" cy="62" rx="36" ry="8" fill="#fff" opacity=".6"/></g>' +
      '<g class="lnr-plane"><g transform="translate(0 70)"><path d="M0 14q30 -8 60 0q-30 8 -60 0z" fill="#9aa6ae"/><path d="M50 8l12 -10h6l-6 16z" fill="' + CRIM + '"/><path d="M48 14l14 2l-14 2z" fill="' + CRIM + '"/>' +
      '<path d="M22 14l-8 18h10l14 -18z" fill="#7f8a92"/><path d="M22 14l-6 -12h8l12 12z" fill="#8a959d"/><circle cx="2" cy="14" r="3" fill="#333"/><path d="M14 10q6 -6 12 0" fill="#a8d4ea"/></g></g>' +
      pine(16, 176, 60) + pine(46, 176, 50, "#2a5a34") + pine(386, 176, 62) +
      /* hangar */
      bricks(80, 104, 230, 76, "#a0503a", "#6e2f1f") +
      '<path d="M76 108q119 -46 238 0z" fill="#e8e1d0"/><path d="M76 108q119 -46 238 0" stroke="#8a8378" stroke-width="2" fill="none"/>' +
      '<rect x="112" y="118" width="166" height="62" fill="#3a3f45"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (114 + i * 27.5) + '" y="120" width="25" height="58" fill="#4c535b"/>').join("") +
      '<rect x="112" y="118" width="166" height="10" fill="#e8e1d0"/><text x="195" y="126" text-anchor="middle" ' + font + ' font-size="8" fill="#5a2a1c" letter-spacing="3">MOTON FIELD</text>' +
      /* control tower */
      '<rect x="318" y="88" width="20" height="92" fill="#e8e1d0" stroke="#8a8378" stroke-width="1.5"/><rect x="312" y="76" width="32" height="16" fill="#2c4256" stroke="#e8e1d0" stroke-width="2"/>' +
      /* windsock */
      '<rect x="360" y="110" width="3" height="70" fill="#555"/><g class="lnr-sock"><path d="M363 112l28 4v8l-28 4z" fill="#ff7a1a"/><path d="M372 113.3v13.4M381 114.6v10.8" stroke="#fff" stroke-width="3"/></g>' +
      '<rect x="0" y="180" width="400" height="80" fill="#6aa04e"/><rect x="0" y="206" width="400" height="30" fill="#5b5f63"/><path d="M0 221h400" stroke="#fff" stroke-width="2" stroke-dasharray="18 14"/>',
      sky("lnr4", "#4f9ad6", "#cfe8f4"));
  }

  /* 5. His corner: W Montgomery Rd and Booker T Washington Blvd at the Lincoln Gates of Tuskegee University (brick piers, limestone caps, the gold seal) */
  function lnrcorner() {
    const pier = x => bricks(x, 92, 30, 120, "#a04a30", "#6e2f1f") + '<rect x="' + (x - 4) + '" y="84" width="38" height="10" fill="#e4dcc6"/><path d="M' + (x - 2) + ' 84l17 -10l17 10z" fill="#d8cfb6"/><rect x="' + (x - 3) + '" y="140" width="36" height="5" fill="#e4dcc6"/>';
    let gate = "";
    for (let x = 136; x <= 262; x += 9) gate += '<path d="M' + x + ' 118v86" stroke="#1c1c1c" stroke-width="2.5"/><path d="M' + (x - 2) + ' 118l2 -6l2 6z" fill="#1c1c1c"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lnr5)"/>' +
      pine(20, 150, 80) + pine(56, 150, 64, "#2a5a34") + pine(300, 150, 84) + pine(350, 150, 70, "#2a5a34") +
      /* campus behind: Lincoln Gates */
      '<rect x="0" y="150" width="400" height="60" fill="#4f8f45"/>' +
      gate + '<path d="M130 132h140M130 196h140" stroke="#1c1c1c" stroke-width="3"/>' + pier(100) + pier(270) +
      '<circle cx="200" cy="126" r="15" fill="' + GOLD + '" stroke="#7a5a1a" stroke-width="2.5" class="lnr-glow"/><circle cx="200" cy="126" r="9" fill="none" stroke="#7a5a1a" stroke-width="1.5"/>' +
      /* low wall with the tags */
      '<rect x="0" y="176" width="400" height="48" fill="#7a3a28"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M0 ' + (182 + i * 6) + 'h400" stroke="#5e2a1c" stroke-width="1"/>').join("") +
      '<rect x="0" y="172" width="400" height="5" fill="#e4dcc6"/>' +
      tag("LIONEL", 26, 214, 40, GOLD, -5) + tag("ALL NIGHT LONG", 196, 200, 18, SKY, -4) + tag("TUSKEGEE", 214, 220, 16, IVORY, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="64" width="6" height="160" fill="#2f2f2f"/>' + sign(272, 66, 124, "W Montgomery Rd") + sign(256, 92, 140, "Booker T Wash Blvd") +
      '<g class="lnr-sp"><circle cx="150" cy="190" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="lnr-sp lnr-sp2"><circle cx="156" cy="184" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("lnr5", "#1c2550", "#e0905a"));
  }

  window.SCENES = { lnrhwy: lnrhwy, lnrmuseum: lnrmuseum, lnrchapel: lnrchapel, lnrmoton: lnrmoton, lnrcorner: lnrcorner };
})();
