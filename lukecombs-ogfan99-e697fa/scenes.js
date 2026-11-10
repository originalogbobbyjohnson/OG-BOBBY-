/* lukecombs scenes (Regions tab: The Carolinas, Asheville NC). CSS classes prefixed lc- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lcglow{0%,100%{opacity:.45}50%{opacity:1}}.lc-glow{animation:lcglow 2.4s ease-in-out infinite}.lc-g2{animation-delay:-1.2s}' +
    '@keyframes lcnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(22px,-62px);opacity:0}}.lc-nt{animation:lcnote 3.2s ease-out infinite}.lc-nt2{animation-delay:-1.1s}.lc-nt3{animation-delay:-2.2s}' +
    '@keyframes lcsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.lc-sw{transform-box:fill-box;transform-origin:50% 100%;animation:lcsway 3s ease-in-out infinite}' +
    '@keyframes lccloud{0%{transform:translateX(0)}100%{transform:translateX(60px)}}.lc-cl{animation:lccloud 14s ease-in-out infinite alternate}' +
    '@keyframes lcleaf{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-40px,120px) rotate(200deg);opacity:0}}.lc-lf{animation:lcleaf 5s linear infinite}.lc-lf2{animation-delay:-1.7s}.lc-lf3{animation-delay:-3.4s}' +
    '@keyframes lccar{0%{offset-distance:0%}100%{offset-distance:100%}}' +
    '@keyframes lcdrive{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.lc-drive{animation:lcdrive 7s linear infinite}' +
    '@keyframes lcspout{0%,100%{transform:scaleY(.8)}50%{transform:scaleY(1.15)}}.lc-spout{transform-box:fill-box;transform-origin:50% 100%;animation:lcspout 1.4s ease-in-out infinite}' +
    '@keyframes lcstrum{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(8deg)}}.lc-strum{transform-box:fill-box;transform-origin:20% 20%;animation:lcstrum .5s ease-in-out infinite}' +
    '@keyframes lcspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lc-sp{animation:lcspray 1.4s ease-out infinite}.lc-sp2{animation-delay:.45s}' +
    '@keyframes lctwk{0%,100%{opacity:.2}50%{opacity:1}}.lc-tw{animation:lctwk 1.8s ease-in-out infinite}.lc-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="lc-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const tree = (x, base, r, c) => '<g class="lc-sw"><rect x="' + (x - 3) + '" y="' + (base - r) + '" width="6" height="' + r + '" fill="#4a3322"/><circle cx="' + x + '" cy="' + (base - r - r * 0.4) + '" r="' + r * 0.8 + '" fill="' + c + '"/><circle cx="' + (x - r * 0.6) + '" cy="' + (base - r) + '" r="' + r * 0.55 + '" fill="' + c + '"/><circle cx="' + (x + r * 0.6) + '" cy="' + (base - r) + '" r="' + r * 0.55 + '" fill="' + c + '"/></g>';
  const pine = (x, base, h, c) => '<path d="M' + x + ' ' + (base - h) + 'l' + (h * 0.3) + ' ' + h + 'h-' + (h * 0.6) + 'z" fill="' + (c || "#1f3a2a") + '"/>';
  const bricks = (x, y, w, h, base, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 6; yy < y + h; yy += 6) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".7" opacity=".6"/>'; return s; };
  const leaf = (x, y, c, cls) => '<g class="lc-lf ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="2.4" fill="' + c + '"/></g>';
  const AMBER = "#e8a33d", DENIM = "#5b8fd6", GREEN = "#6fbf73", CREAM = "#f3ead8", FALL = ["#d9622b", "#e8a33d", "#b8402a", "#f0c24a"];

  /* 1. An ART bus pulling into the ART Station on Coxe Ave, downtown Asheville, the Blue Ridge behind */
  function lcstation() {
    let ridges = '<path d="M0 120q60 -40 120 -20t110 -26t170 18v40h-400z" fill="#7d93b8"/><path d="M0 136q80 -30 160 -10t120 -18t120 8v30h-400z" fill="#5d7598"/>';
    let bays = "";
    for (let i = 0; i < 4; i++) bays += '<rect x="' + (40 + i * 90) + '" y="104" width="6" height="66" fill="#3a4a5a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lc1)"/>' +
      '<g class="lc-cl"><ellipse cx="80" cy="40" rx="36" ry="8" fill="#fff" opacity=".7"/><ellipse cx="300" cy="30" rx="30" ry="7" fill="#fff" opacity=".6"/></g>' + ridges +
      /* the station canopy and building */
      bricks(250, 90, 140, 80, "#b5674a", "#7a3a24") + '<rect x="262" y="104" width="30" height="40" fill="#22303c"/><rect x="304" y="104" width="30" height="40" fill="#22303c"/><rect x="346" y="104" width="30" height="40" fill="#22303c"/>' +
      '<path d="M20 96h380l-10 10h-360z" fill="#3a6a8a"/>' + bays +
      /* black station sign */
      '<rect x="60" y="62" width="178" height="30" rx="3" fill="#111"/><text x="149" y="83" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">ART Station</text>' +
      '<rect x="244" y="64" width="80" height="26" rx="3" fill="#111"/><text x="284" y="81" text-anchor="middle" ' + font + ' font-size="10" fill="' + AMBER + '">COXE AVE</text>' +
      '<rect x="0" y="170" width="400" height="90" fill="#4a4d52"/><rect x="0" y="166" width="400" height="6" fill="#cfc9bb"/><path d="M0 222h400" stroke="#fff" stroke-width="3" stroke-dasharray="26 20"/>' +
      /* the bus sliding in */
      '<g class="anim-train"><g transform="translate(70 120)"><rect x="0" y="0" width="230" height="72" rx="10" fill="#f4f4f4" stroke="#333" stroke-width="2"/>' +
      '<rect x="0" y="50" width="230" height="8" fill="' + DENIM + '"/><rect x="0" y="58" width="230" height="5" fill="' + GREEN + '"/>' +
      '<rect x="8" y="6" width="214" height="12" rx="2" fill="#111"/><text x="115" y="16" text-anchor="middle" ' + font + ' font-size="9" fill="' + AMBER + '" class="lc-glow">ART STATION</text>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (14 + i * 38) + '" y="22" width="32" height="24" rx="3" fill="#a9d4f0"/>').join("") + '<rect x="206" y="22" width="18" height="40" rx="2" fill="#7fb6d8"/>' +
      '<circle cx="44" cy="74" r="12" fill="#222"/><circle cx="44" cy="74" r="5" fill="#bbb"/><circle cx="186" cy="74" r="12" fill="#222"/><circle cx="186" cy="74" r="5" fill="#bbb"/><rect x="224" y="40" width="6" height="8" fill="#fff6c0"/></g></g>',
      sky("lc1", "#5aa0d8", "#d8ecf7"));
  }

  /* 2. The Blue Ridge Parkway's Linn Cove Viaduct curling around Grandfather Mountain, up the road from Boone, fall leaves blowing */
  function lcparkway() {
    let ridges = '<path d="M0 110l60 -40l40 20l60 -54l40 30l50 -36l60 50l40 -20l50 30v80h-400z" fill="#5d6f8a"/>' +
      '<path d="M0 140q70 -36 140 -10t140 -22t120 12v40h-400z" fill="#3e5a4a"/>';
    let trees = "";
    for (let i = 0; i < 14; i++) trees += tree(8 + i * 30, 200 + (i % 3) * 6, 10 + (i * 7) % 6, FALL[i % 4]);
    let piers = "";
    for (let i = 0; i < 7; i++) piers += '<rect x="' + (52 + i * 48) + '" y="' + (150 - Math.sin(i / 6 * Math.PI) * 20) + '" width="8" height="' + (80 + Math.sin(i / 6 * Math.PI) * 20) + '" fill="#9a9a94"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lc2)"/>' +
      '<g class="lc-cl"><ellipse cx="90" cy="30" rx="40" ry="8" fill="#fff" opacity=".7"/></g>' + ridges +
      /* Grandfather's rocky profile */
      '<path d="M200 38l14 -10l10 6l12 -4l10 14z" fill="#4a5568"/>' +
      '<rect x="0" y="160" width="400" height="100" fill="#3a5a34"/><path d="M0 230q100 -14 200 0t200 0v30h-400z" fill="#2f4a2a"/>' + piers +
      /* the curved deck of the viaduct */
      '<path d="M0 156q200 -60 400 0" stroke="#bdbbb2" stroke-width="16" fill="none"/><path d="M0 150q200 -60 400 0" stroke="#8a8a84" stroke-width="3" fill="none"/>' +
      '<path d="M0 158q200 -60 400 0" stroke="#fff" stroke-width="1.2" stroke-dasharray="10 10" fill="none" opacity=".8"/>' +
      '<g class="lc-drive"><rect x="0" y="118" width="26" height="10" rx="3" fill="' + DENIM + '"/><rect x="5" y="112" width="14" height="8" rx="2" fill="#a9d4f0"/><circle cx="6" cy="129" r="3" fill="#222"/><circle cx="20" cy="129" r="3" fill="#222"/></g>' +
      trees +
      leaf(320, 40, FALL[0]) + leaf(260, 30, FALL[1], "lc-lf2") + leaf(370, 60, FALL[3], "lc-lf3") + leaf(150, 50, FALL[2], "lc-lf2"),
      sky("lc2", "#7ab6e6", "#f2d9b0"));
  }

  /* 3. Friday night on Rivers St in Boone: the little college-bar stage where he worked the door, then got the gig — stool, guitar, mic, string lights */
  function lcboone() {
    let bulbs = "";
    for (let i = 0; i < 16; i++) bulbs += '<circle cx="' + (12 + i * 25) + '" cy="' + (30 + Math.sin(i / 2) * 6) + '" r="3.5" fill="#ffe08a" class="lc-glow' + (i % 2 ? " lc-g2" : "") + '"/>';
    let crowd = "";
    for (let i = 0; i < 14; i++) crowd += '<circle cx="' + (14 + i * 29) + '" cy="' + (214 + (i % 2) * 6) + '" r="11" fill="#1a1410"/><rect x="' + (4 + i * 29) + '" y="' + (222 + (i % 2) * 6) + '" width="20" height="40" rx="8" fill="#1a1410"/>';
    let planks = "";
    for (let i = 0; i < 12; i++) planks += '<path d="M' + (i * 34) + ' 0v190" stroke="#3a2416" stroke-width="2" opacity=".5"/>';
    return svg(
      '<rect width="400" height="260" fill="#5a3a24"/>' + planks +
      '<path d="M0 30q100 16 200 0t200 0" stroke="#222" stroke-width="1" fill="none"/>' + bulbs +
      /* a sign board on the back wall */
      '<rect x="110" y="48" width="180" height="36" rx="4" fill="#1a1410" stroke="' + AMBER + '" stroke-width="2"/><text x="200" y="66" text-anchor="middle" ' + font + ' font-size="12" fill="' + AMBER + '" class="lc-glow">LIVE MUSIC TONIGHT</text><text x="200" y="79" text-anchor="middle" ' + font + ' font-size="8" fill="' + CREAM + '">RIVERS ST  ·  BOONE NC</text>' +
      /* stage */
      '<rect x="40" y="150" width="320" height="40" fill="#3a2416"/><rect x="40" y="146" width="320" height="6" fill="#7a5232"/>' +
      /* stool + guitar + mic */
      '<rect x="186" y="112" width="30" height="6" rx="2" fill="#2a1a10"/><path d="M190 118l-6 30M212 118l6 30" stroke="#2a1a10" stroke-width="3"/>' +
      '<g class="lc-strum"><g transform="translate(150 108)"><path d="M0 26q-14 -2 -12 -16q2 -10 12 -8q4 -8 12 -6q10 4 6 14q8 8 0 16q-8 6 -18 0z" fill="' + AMBER + '" stroke="#6a3a14" stroke-width="2"/><circle cx="6" cy="14" r="4" fill="#2a1a10"/><rect x="14" y="2" width="44" height="5" rx="2" fill="#6a3a14" transform="rotate(-24 14 4)"/></g></g>' +
      '<rect x="244" y="96" width="4" height="52" fill="#bbb"/><path d="M234 148h24" stroke="#bbb" stroke-width="3"/><rect x="240" y="86" width="12" height="14" rx="6" fill="#333"/>' +
      '<rect x="80" y="126" width="38" height="22" rx="3" fill="#222"/><circle cx="99" cy="137" r="7" fill="#444"/>' +
      crowd + note(60, 140, CREAM) + note(320, 140, AMBER, "lc-nt2") + note(350, 120, GREEN, "lc-nt3"),
      "");
  }

  /* 4. Biltmore House at dusk: pale Indiana limestone, steep blue-gray slate roofs and spires, the long lawn and fountain out front */
  function lcbiltmore() {
    const LIME = "#e6dcc6", SLATE = "#5a6474";
    let wins = "";
    for (let i = 0; i < 12; i++) wins += '<rect x="' + (64 + i * 23) + '" y="128" width="10" height="18" fill="#ffd98a" class="lc-glow' + (i % 3 ? " lc-g2" : "") + '"/><rect x="' + (64 + i * 23) + '" y="156" width="10" height="18" fill="#2a3040"/>';
    let dorm = "";
    for (let i = 0; i < 6; i++) dorm += '<path d="M' + (78 + i * 46) + ' 106l8 -18l8 18z" fill="' + LIME + '"/><rect x="' + (83 + i * 46) + '" y="96" width="6" height="8" fill="#2a3040"/>';
    let trees = "";
    for (let i = 0; i < 3; i++) trees += tree(14 + i * 12, 196, 14, "#2f5a2a") + tree(386 - i * 12, 196, 14, "#2f5a2a");
    return svg(
      '<rect width="400" height="260" fill="url(#lc4)"/>' +
      '<path d="M0 120q80 -30 160 -10t140 -16t100 10v30h-400z" fill="#4a5a78"/>' +
      /* main block */
      '<rect x="56" y="110" width="290" height="80" fill="' + LIME + '"/>' +
      '<path d="M50 112l20 -40h262l20 40z" fill="' + SLATE + '"/>' + dorm + wins +
      /* the tall stair tower and the corner tower */
      '<rect x="164" y="74" width="40" height="116" fill="' + LIME + '"/><path d="M160 76l24 -54l24 54z" fill="' + SLATE + '"/><rect x="182" y="10" width="4" height="14" fill="' + SLATE + '"/>' +
      '<path d="M176 90l8 -10l8 10M176 110l8 -10l8 10M176 130l8 -10l8 10" stroke="#ffd98a" stroke-width="2" fill="none" class="lc-glow"/>' +
      '<rect x="300" y="88" width="36" height="102" fill="' + LIME + '"/><path d="M296 90l22 -34l22 34z" fill="' + SLATE + '"/>' +
      '<path d="M50 112h302" stroke="#bfb39a" stroke-width="2"/><rect x="176" y="160" width="16" height="30" rx="8" fill="#3a2a20"/>' +
      /* the lawn and fountain */
      '<rect x="0" y="190" width="400" height="70" fill="#3f7a3a"/><path d="M150 260l30 -70h40l30 70z" fill="#d9cdb4"/>' +
      '<ellipse cx="200" cy="226" rx="44" ry="10" fill="#7ab6d6" stroke="' + LIME + '" stroke-width="3"/><rect x="197" y="206" width="6" height="18" fill="' + LIME + '"/>' +
      '<path d="M200 206q-10 -14 -18 0M200 206q10 -14 18 0" stroke="#bfe6ff" stroke-width="2" fill="none" class="lc-spout"/>' + trees,
      sky("lc4", "#2a3460", "#f0a46a"));
  }

  /* 5. Patton Ave and Biltmore Ave at Pack Square: his name on the wall, Asheville City Hall's Art Deco tower with its pink and green tile crown behind */
  function lccorner() {
    const PINKT = "#e39a8a", JADE = "#3f9a7a";
    let tiers = "";
    [[150, 60, 100], [160, 46, 80], [170, 34, 60]].forEach(([x, y, w], i) => { tiers += '<path d="M' + x + ' ' + (y + 14) + 'l' + (w * 0.1) + ' -14h' + (w * 0.8) + 'l' + (w * 0.1) + ' 14z" fill="' + (i % 2 ? JADE : PINKT) + '" stroke="#7a3a2a" stroke-width="1"/>'; });
    let wins = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) wins += '<rect x="' + (166 + c * 12) + '" y="' + (84 + r * 22) + '" width="6" height="14" fill="' + (r === 1 && c % 2 ? "#ffd98a" : "#2a3040") + '"' + (r === 1 && c % 2 ? ' class="lc-glow"' : '') + '/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lc5)"/>' +
      '<circle cx="60" cy="40" r="2" fill="#fff" class="lc-tw"/><circle cx="340" cy="30" r="2" fill="#fff" class="lc-tw lc-tw2"/><circle cx="290" cy="60" r="1.6" fill="#fff" class="lc-tw"/>' +
      '<path d="M0 150q80 -40 160 -14t140 -20t100 10v30h-400z" fill="#2c3550"/>' +
      /* City Hall: pink brick tower, stepped tile crown */
      '<rect x="120" y="126" width="160" height="54" fill="#d98a72"/><rect x="150" y="74" width="100" height="106" fill="#e7a58e"/>' + tiers +
      '<path d="M190 34l10 -16l10 16z" fill="' + JADE + '"/>' + wins +
      '<rect x="150" y="74" width="100" height="5" fill="#f3ead8"/><path d="M120 126h160" stroke="#f3ead8" stroke-width="3"/>' +
      /* low wall with the tags */
      '<rect x="0" y="178" width="400" height="46" fill="#4a3a30"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M0 ' + (184 + i * 6) + 'h400" stroke="#2a201a" stroke-width="1"/>').join("") +
      '<rect x="0" y="174" width="400" height="5" fill="#e4dcc6"/>' +
      tag("LUKE", 20, 216, 42, AMBER, -5) + tag("HURRICANE", 140, 208, 20, DENIM, -4) + tag("ASHEVILLE", 250, 220, 17, CREAM, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="360" y="66" width="6" height="158" fill="#2f2f2f"/>' + sign(300, 66, 96, "Patton Ave") + sign(290, 92, 106, "Biltmore Ave") +
      '<g class="lc-sp"><circle cx="128" cy="196" r="3" fill="' + AMBER + '" opacity=".7"/></g><g class="lc-sp lc-sp2"><circle cx="134" cy="190" r="2" fill="' + AMBER + '" opacity=".6"/></g>',
      sky("lc5", "#121a3a", "#d07a5a"));
  }

  window.SCENES = { lcstation: lcstation, lcparkway: lcparkway, lcboone: lcboone, lcbiltmore: lcbiltmore, lccorner: lccorner };
})();
