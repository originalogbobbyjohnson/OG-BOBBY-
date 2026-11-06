/* Poor Righteous Teachers game (OG FAN 99 New Jersey: Trenton). Wise Intelligent, Culture Freedom and Father Shaheed came up in
   North Trenton (Donnelly Homes, Passaic St block parties). Rooms: the River LINE pulling into Hamilton Avenue, the Old Barracks (1758 fieldstone,
   white galleries), Cadwalader Park with the Ellarslie villa and the deer, the Trenton War Memorial theater, and Pennington Av & Prospect St
   with the Battle Monument column down at Five Points. 400 x 260 SVGs. All animation classes are prefixed prt-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes prtcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.prt-car{animation:prtcar 7s linear infinite}.prt-car2{animation-delay:-3.6s}' +
    '@keyframes prtblink{0%,100%{opacity:.3}50%{opacity:1}}.prt-bl{animation:prtblink 1.8s ease-in-out infinite}.prt-bl2{animation-delay:.6s}.prt-bl3{animation-delay:1.2s}' +
    '@keyframes prtflag{0%,100%{transform:skewY(0deg) scaleX(1)}50%{transform:skewY(-5deg) scaleX(.92)}}.prt-flag{transform-box:fill-box;transform-origin:0% 50%;animation:prtflag 1.4s ease-in-out infinite}' +
    '@keyframes prtbird{0%{transform:translate(-40px,10px)}100%{transform:translate(440px,-20px)}}.prt-bird{animation:prtbird 9s linear infinite}.prt-bird2{animation-delay:-4s}' +
    '@keyframes prtbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.prt-bob{animation:prtbob 1.1s ease-in-out infinite}.prt-bob2{animation-delay:.5s}' +
    '@keyframes prtleaf{0%{transform:translate(0,-20px) rotate(0deg);opacity:0}15%{opacity:1}100%{transform:translate(30px,150px) rotate(220deg);opacity:0}}.prt-leaf{animation:prtleaf 5s linear infinite}.prt-leaf2{animation-delay:-1.7s}.prt-leaf3{animation-delay:-3.3s}' +
    '@keyframes prtsweep{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.prt-beam{transform-box:fill-box;transform-origin:50% 100%;animation:prtsweep 3.2s ease-in-out infinite}.prt-beam2{animation-delay:-1.6s}' +
    '@keyframes prtglow{0%,100%{opacity:.55}50%{opacity:1}}.prt-glow{animation:prtglow 2.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const bullet = (x, y, label, color, dark, r) => { r = r || 11; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * 0.42) + '" text-anchor="middle" ' + font + ' font-size="' + (label.length > 1 ? r * 0.95 : r * 1.3) + '" fill="' + (dark ? "#000" : "#fff") + '">' + label + '</text>'; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="prt-bl prt-bl' + (i % 3 + 1) + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 50) + '" r="' + (i % 3 ? 0.9 : 1.3) + '" fill="#fff"/>'; return s; };
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const ORANGE = "#ff9d2e", TEAL = "#3fd0c9", CREAM = "#f6f0e0", RL = "#0090c5", GOLD = "#f2c14e";
  const rowhouses = (y, col) => { let s = ""; const cs = ["#7a4a3a", "#8a5a44", "#6b4033", "#94654c", "#5e3a30"]; for (let i = 0; i < 9; i++) { const x = i * 46 - 6, h = 34 + (i * 13) % 18; s += '<rect x="' + x + '" y="' + (y - h) + '" width="44" height="' + h + '" fill="' + (col || cs[i % 5]) + '"/><rect x="' + x + '" y="' + (y - h) + '" width="44" height="4" fill="#3a2a24"/>'; for (let k = 0; k < 3; k++) s += '<rect class="prt-bl prt-bl' + ((i + k) % 3 + 1) + '" x="' + (x + 6 + k * 13) + '" y="' + (y - h + 10) + '" width="7" height="9" fill="#ffd98a" opacity=".8"/>'; } return s; };

  /* 1. Hamilton Avenue on NJ Transit's River LINE, Trenton: street-level platform under a small canopy, the white diesel light-rail car rolling in */
  function prtriverline() {
    let win = "";
    for (let x = 34; x < 300; x += 30) if (x < 140 || x > 186) win += '<rect x="' + x + '" y="134" width="20" height="18" rx="2" fill="#bfe3f2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#prs)"/>' + stars(14) + rowhouses(150) +
      /* canopy + posts */
      '<path d="M18 92h364l-10 12H28z" fill="#2c3e50"/><rect x="18" y="88" width="364" height="5" fill="' + RL + '"/>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="104" width="6" height="88" fill="#44515e"/>').join("") +
      '<circle class="prt-glow" cx="120" cy="108" r="4" fill="#fff6c2"/><circle class="prt-glow" cx="280" cy="108" r="4" fill="#fff6c2"/>' +
      /* black station sign */
      '<rect x="88" y="44" width="224" height="34" rx="3" fill="#111"/><rect x="88" y="44" width="224" height="3" fill="#fff"/>' +
      '<text x="100" y="67" ' + font + ' font-size="15" fill="#fff">Hamilton Avenue</text>' + bullet(286, 61, "RL", RL, false, 12) +
      /* the River LINE car */
      '<g class="anim-train">' +
        '<path d="M14 126h292q10 0 12 10v34H10v-36q0-8 4-8z" fill="#f4f6f8" stroke="#7b8794" stroke-width="2"/>' +
        '<rect x="140" y="122" width="46" height="48" rx="3" fill="#e3e7ea" stroke="#7b8794" stroke-width="1.5"/><rect x="146" y="130" width="34" height="8" fill="#9aa5b1"/>' + win +
        '<rect x="300" y="132" width="14" height="22" rx="3" fill="#bfe3f2"/>' +
        '<rect x="10" y="156" width="308" height="6" fill="' + RL + '"/><rect x="10" y="162" width="308" height="3" fill="' + GOLD + '"/>' +
        '<circle cx="312" cy="164" r="3" fill="#fff6c2"/>' +
        [40, 110, 210, 280].map(x => '<circle cx="' + x + '" cy="172" r="6" fill="#2b2b2b"/>').join("") +
      '</g>' +
      /* platform */
      '<rect x="0" y="176" width="400" height="8" fill="#e8c547"/><rect x="0" y="184" width="400" height="76" fill="#6b6862"/>' +
      '<rect x="0" y="184" width="400" height="3" fill="#4a4844"/>' +
      person(330, 200, "#1d1d1d") + person(352, 204, "#2b2b2b") + person(60, 204, "#222") +
      txt("TRENTON, NEW JERSEY", 190, 240, 11, CREAM, 'letter-spacing="3"'),
      sky("prs", "#141b33", "#e0864a"));
  }

  /* 2. The Old Barracks (1758): long gray fieldstone barracks with white two-story galleries, gable roofs and chimneys, the flag flying */
  function prtbarracks() {
    let stones = "";
    for (let y = 96; y < 200; y += 9) for (let x = 20 + ((y / 9) % 2) * 9; x <= 364; x += 18) stones += '<rect x="' + x + '" y="' + y + '" width="16" height="7" rx="2" fill="' + ((x + y) % 3 ? "#8d8a80" : "#a29e92") + '"/>';
    let rails = "";
    for (let x = 60; x < 340; x += 10) rails += '<rect x="' + x + '" y="136" width="2" height="14" fill="#fff"/><rect x="' + x + '" y="176" width="2" height="16" fill="#fff"/>';
    let wins = "";
    [70, 110, 150, 230, 270, 310].forEach(x => { wins += '<rect x="' + x + '" y="104" width="16" height="22" fill="#2d3a40" stroke="#fff" stroke-width="2"/><rect x="' + x + '" y="156" width="16" height="22" fill="#2d3a40" stroke="#fff" stroke-width="2"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#pbs)"/>' +
      '<g class="prt-bird"><path d="M0 40l6 4 6-4" stroke="#333" stroke-width="2" fill="none"/></g><g class="prt-bird prt-bird2"><path d="M0 60l5 3 5-3" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* roof + chimneys */
      '<path d="M14 98L60 62h280l46 36z" fill="#5a4a42"/><path d="M14 98L60 62h280l46 36" stroke="#3b302b" stroke-width="2" fill="none"/>' +
      '<rect x="96" y="44" width="14" height="24" fill="#7d6b5e"/><rect x="290" y="44" width="14" height="24" fill="#7d6b5e"/>' +
      /* stone body */
      '<rect x="20" y="96" width="360" height="104" fill="#96928a"/>' + stones + wins +
      /* white galleries (porches) across the front */
      '<rect x="52" y="128" width="296" height="8" fill="#fff"/><rect x="52" y="168" width="296" height="8" fill="#fff"/>' + rails +
      [52, 118, 184, 250, 316, 346].map(x => '<rect x="' + x + '" y="128" width="4" height="72" fill="#fff"/>').join("") +
      '<rect x="190" y="160" width="20" height="40" fill="#8b2f2a"/>' +
      /* flagpole */
      '<rect x="370" y="20" width="3" height="180" fill="#ccc"/>' +
      '<g class="prt-flag"><rect x="373" y="22" width="24" height="16" fill="#b22234"/><rect x="373" y="25" width="24" height="2" fill="#fff"/><rect x="373" y="30" width="24" height="2" fill="#fff"/><rect x="373" y="35" width="24" height="2" fill="#fff"/><rect x="373" y="22" width="10" height="8" fill="#3c3b6e"/></g>' +
      /* lawn + path */
      '<rect x="0" y="200" width="400" height="60" fill="#5d8b3f"/><path d="M188 200h24l40 60h-104z" fill="#c9b99a"/>' +
      person(120, 214, "#2b2b2b", "prt-bob") + person(300, 218, "#3a3a3a", "prt-bob prt-bob2") +
      txt("THE OLD BARRACKS", 200, 252, 11, "#fff", 'letter-spacing="3"'),
      sky("pbs", "#8fc4ea", "#e9f2f7"));
  }

  /* 3. Cadwalader Park (Olmsted's park, up by the Donnelly Homes): the Ellarslie villa with its square tower, big trees, the deer in the paddock */
  function prtcadwalader() {
    const tree = (x, y, r, c) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (196 - y) + '" fill="#5a3d2b"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * 0.5) + '" cy="' + (y + 6) + '" r="' + r * 0.7 + '" fill="' + c + '"/><circle cx="' + (x + r * 0.5) + '" cy="' + (y + 6) + '" r="' + r * 0.7 + '" fill="' + c + '"/>';
    const deer = (x, y, cls) => '<g class="' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="13" ry="7" fill="#9b6b43"/><rect x="' + (x - 10) + '" y="' + (y + 4) + '" width="3" height="12" fill="#7a5233"/><rect x="' + (x + 8) + '" y="' + (y + 4) + '" width="3" height="12" fill="#7a5233"/><path d="M' + (x + 10) + ' ' + (y - 3) + 'l6-10 6 2-4 8z" fill="#9b6b43"/><path d="M' + (x + 17) + ' ' + (y - 12) + 'l-2-7M' + (x + 19) + ' ' + (y - 12) + 'l3-6" stroke="#5a3d2b" stroke-width="1.5"/></g>';
    let fence = "";
    for (let x = 0; x < 400; x += 14) fence += '<rect x="' + x + '" y="196" width="3" height="24" fill="#4a4a4a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pcs)"/>' +
      tree(40, 120, 30, "#3f7d3a") + tree(360, 112, 34, "#4b8a3f") +
      /* Ellarslie: Italianate villa, cream stucco, bracketed eaves, square belvedere tower */
      '<rect x="120" y="96" width="170" height="100" fill="#e7d9b8"/><path d="M112 98h186l-10-10H122z" fill="#7b5b43"/>' +
      '<rect x="182" y="52" width="44" height="46" fill="#e7d9b8"/><path d="M176 54h56l-8-10h-40z" fill="#7b5b43"/>' +
      [190, 204, 218].map(x => '<rect x="' + (x - 3) + '" y="62" width="7" height="16" rx="3" fill="#33424a"/>').join("") +
      [136, 160, 236, 260].map(x => '<rect x="' + x + '" y="110" width="12" height="22" rx="5" fill="#33424a"/><rect x="' + x + '" y="152" width="12" height="24" rx="5" fill="#33424a"/>').join("") +
      '<rect x="190" y="150" width="28" height="46" fill="#5b3e2c"/><path d="M182 148h44l-4-8h-36z" fill="#7b5b43"/>' +
      tree(96, 140, 22, "#5a9a46") + tree(316, 146, 20, "#5a9a46") +
      /* paddock */
      '<rect x="0" y="196" width="400" height="64" fill="#6aa04a"/>' + fence + '<rect x="0" y="200" width="400" height="3" fill="#4a4a4a"/><rect x="0" y="212" width="400" height="3" fill="#4a4a4a"/>' +
      deer(110, 232, "prt-bob") + deer(250, 238, "prt-bob prt-bob2") +
      '<circle class="prt-leaf" cx="60" cy="110" r="3" fill="#d98b2b"/><circle class="prt-leaf prt-leaf2" cx="340" cy="100" r="3" fill="#c9622b"/><circle class="prt-leaf prt-leaf3" cx="300" cy="120" r="2.5" fill="#e0a23a"/>' +
      txt("CADWALADER PARK", 200, 30, 13, "#1d3b25", 'letter-spacing="3"'),
      sky("pcs", "#9fd2f0", "#eef7e8"));
  }

  /* 4. The Trenton War Memorial (1932): cream limestone Renaissance-style front, arched windows, the theater marquee lit, spotlights sweeping */
  function prtwarmemorial() {
    let arches = "";
    for (let i = 0; i < 7; i++) { const x = 66 + i * 40; arches += '<path d="M' + x + ' 176v-34a12 12 0 0 1 24 0v34z" fill="#2a2f3a"/><path class="prt-bl prt-bl' + (i % 3 + 1) + '" d="M' + (x + 3) + ' 174v-30a9 9 0 0 1 18 0v30z" fill="#ffcf7a" opacity=".6"/>'; }
    let upper = "";
    for (let i = 0; i < 7; i++) upper += '<rect x="' + (70 + i * 40) + '" y="100" width="16" height="22" fill="#2a2f3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pws)"/>' + stars(20) +
      '<path class="prt-beam" d="M108 90L84 0h48z" fill="#fff6c2" opacity=".12"/><path class="prt-beam prt-beam2" d="M292 90L268 0h48z" fill="#fff6c2" opacity=".12"/>' +
      /* building */
      '<rect x="40" y="84" width="320" height="116" fill="#e6dcc3"/><rect x="34" y="78" width="332" height="10" fill="#d4c7a8"/><path d="M34 78h332l-12-14H46z" fill="#b5462f"/>' +
      '<rect x="40" y="130" width="320" height="4" fill="#d4c7a8"/>' + upper + arches +
      /* marquee */
      '<rect x="120" y="182" width="160" height="22" rx="3" fill="#1a1a1a" stroke="' + GOLD + '" stroke-width="2"/>' +
      txt("WAR MEMORIAL", 200, 198, 12, GOLD) +
      [128, 144, 160, 176, 192, 208, 224, 240, 256, 272].map((x, i) => '<circle class="prt-bl prt-bl' + (i % 3 + 1) + '" cx="' + x + '" cy="207" r="2" fill="#ffe08a"/>').join("") +
      /* steps + street */
      '<rect x="30" y="204" width="340" height="8" fill="#cfc4a6"/><rect x="0" y="212" width="400" height="48" fill="#3d3d40"/>' +
      '<g class="prt-car"><rect x="0" y="230" width="46" height="14" rx="4" fill="' + TEAL + '"/><circle cx="10" cy="244" r="4" fill="#111"/><circle cx="36" cy="244" r="4" fill="#111"/></g>' +
      txt("TRENTON", 200, 60, 12, CREAM, 'letter-spacing="5" opacity=".85"'),
      sky("pws", "#0c1024", "#3a2a4a"));
  }

  /* 5. Pennington Av & Prospect St, North Trenton by the Donnelly Homes: green signs, the wall tagged, the Battle Monument column down at Five Points */
  function prtcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#pks)"/>' + stars(12) +
      /* Battle Monument: granite base, fluted column, capital, small statue silhouette on top */
      '<rect x="176" y="34" width="28" height="110" fill="#a7a196"/>' +
      [182, 188, 194, 200].map(x => '<rect x="' + x + '" y="38" width="2" height="104" fill="#8f8a80"/>').join("") +
      '<rect x="170" y="28" width="40" height="8" fill="#8f8a80"/><rect x="174" y="22" width="32" height="7" fill="#b7b1a5"/><path d="M186 22v-12h8v12z" fill="#5c5a55"/><circle cx="190" cy="7" r="4" fill="#5c5a55"/>' +
      '<rect class="prt-glow" x="176" y="34" width="6" height="98" fill="#fff6c2" opacity=".25"/>' +
      rowhouses(140) +
      /* the wall */
      '<rect x="0" y="136" width="400" height="90" fill="#3e3a44"/>' +
      (() => { let b = ""; for (let y = 146; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#34313a" stroke-width="1"/>'; return b; })() +
      tag("POOR RIGHTEOUS", 14, 182, 30, ORANGE, -5) + tag("TEACHERS", 40, 216, 32, TEAL, -4) + tag("PEACE GOD", 220, 210, 16, CREAM, -6) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="prt-car prt-car2"><rect x="0" y="238" width="46" height="13" rx="4" fill="' + ORANGE + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="352" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="288" y="66" width="108" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Pennington Av", 342, 82, 12, "#fff") +
      '<rect x="288" y="92" width="108" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Prospect St", 342, 108, 12, "#fff") +
      '<circle class="prt-bl" cx="354" cy="60" r="4" fill="#fff6c2"/>',
      sky("pks", "#0d0f22", "#4a3350"));
  }

  window.SCENES = { prtriverline: prtriverline, prtbarracks: prtbarracks, prtcadwalader: prtcadwalader, prtwarmemorial: prtwarmemorial, prtcorner: prtcorner };
})();
