/* shaqisdope scenes (Regions tab: Canada; Downtown Toronto). CSS classes prefixed sq- (the page's own anim-train is kept).
   1 Queen station on Line 1 Yonge-University, underground: the silver train sliding in, the yellow Line 1 bullet.
   2 The Eaton Centre galleria (his DWNTWN video): the long glass vault, the flock of Canada geese hanging under it, shoppers below.
   3 Sankofa Square (Yonge-Dundas) at night: the big glowing screens, the crowd, a red streetcar rolling along Dundas.
   4 The old Toronto Coach Terminal on Bay St ("taking trips on the Greyhound / In New York City"): the cream art deco front, a coach pulling out for New York.
   5 Bay St & Queen St W: green street signs, SHAQ IS DOPE tagged on the wall, Old City Hall's clock tower behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sqflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.sq-flk{animation:sqflick 2.4s infinite}.sq-flk2{animation-delay:.8s}' +
    '@keyframes sqglow{0%,100%{opacity:.5}50%{opacity:1}}.sq-glow{animation:sqglow 2.2s ease-in-out infinite}.sq-g2{animation-delay:-1.1s}' +
    '@keyframes sqgoose{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.sq-gs{animation:sqgoose 2.6s ease-in-out infinite}.sq-gs2{animation-delay:-1.3s}' +
    '@keyframes sqcar{0%{transform:translateX(-200px)}100%{transform:translateX(460px)}}.sq-car{animation:sqcar 9s linear infinite}' +
    '@keyframes sqcoach{0%{transform:translateX(0)}60%,100%{transform:translateX(-300px)}}.sq-coach{animation:sqcoach 8s ease-in infinite}' +
    '@keyframes sqbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.sq-bob{animation:sqbob .9s ease-in-out infinite}.sq-bob2{animation-delay:-.45s}' +
    '@keyframes sqspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sq-sp{animation:sqspray 1.4s ease-out infinite}.sq-sp2{animation-delay:.45s}' +
    '@keyframes sqsnow{0%{transform:translateY(-20px)}100%{transform:translateY(270px)}}.sq-sn{animation:sqsnow 7s linear infinite}.sq-sn2{animation-delay:-2.3s}.sq-sn3{animation-delay:-4.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "sq-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const Y1 = "#ffc41e", RED = "#da251d", GOLD = "#f5c518";

  /* 1. Queen station, Line 1 */
  function sqstation() {
    const tr = '<g class="anim-train"><rect x="20" y="104" width="336" height="78" rx="8" fill="#c9ced6" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (34 + i * 80) + '" y="116" width="44" height="26" rx="3" fill="#1d262e"/>').join("") +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (82 + i * 80) + '" y="112" width="24" height="66" rx="2" fill="' + RED + '"/><path d="M' + (94 + i * 80) + ' 114v62" stroke="#7a1410" stroke-width="1.5"/>').join("") +
      '<rect x="20" y="150" width="336" height="4" fill="#6b7178"/><rect x="336" y="108" width="20" height="72" rx="4" fill="#a3a9b0"/><circle cx="348" cy="168" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#cfc9b8"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 16v70" stroke="#bfb8a4" stroke-width="1"/>').join("") +
      '<rect x="0" y="0" width="400" height="16" fill="#2e2e30"/>' + [50, 170, 290].map((x, i) => '<rect class="sq-flk' + (i === 1 ? " sq-flk2" : "") + '" x="' + x + '" y="6" width="60" height="5" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="84" width="400" height="8" fill="' + Y1 + '"/><rect x="0" y="92" width="400" height="98" fill="#26262a"/>' + tr +
      '<rect x="0" y="190" width="400" height="7" fill="#f2c200"/><rect x="0" y="197" width="400" height="63" fill="#8a8680"/>' +
      '<rect x="96" y="24" width="208" height="38" rx="3" fill="#111"/><text x="150" y="50" text-anchor="middle" ' + font + ' font-size="20" fill="#fff">Queen</text>' +
      '<circle cx="262" cy="43" r="13" fill="' + Y1 + '"/><text x="262" y="49" text-anchor="middle" ' + font + ' font-size="16" fill="#111">1</text>' +
      '<rect x="128" y="218" width="144" height="20" rx="3" fill="#000" opacity=".55"/><text x="200" y="232" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">LINE 1 YONGE-UNIVERSITY</text>',
      "");
  }

  /* 2. Eaton Centre galleria with the hanging geese */
  function sqgalleria() {
    const goose = (x, y, s, c) => '<g class="sq-gs' + c + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q14 -8 30 0q-14 3 -30 0z" fill="#e8e4dc" stroke="#5a5a5a" stroke-width="1"/><path d="M8 -2l10 -14l6 12z" fill="#cfcac0" stroke="#5a5a5a" stroke-width="1"/><path d="M30 0q6 -4 10 -2" stroke="#222" stroke-width="2.5" fill="none"/><circle cx="40" cy="-2" r="2" fill="#222"/></g></g>';
    let geese = ""; for (let i = 0; i < 9; i++) geese += goose(40 + i * 36, 70 + (i % 3) * 14 + i * 3, 0.9 - (i % 3) * 0.08, i % 2 ? " sq-gs2" : "");
    return svg(
      '<rect width="400" height="260" fill="url(#sq2)"/>' +
      /* the glass vault */
      '<path d="M0 60Q200 -20 400 60" stroke="#8a96a4" stroke-width="3" fill="none"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (60 - Math.sin(i / 10 * Math.PI) * 40) + 'v-6" stroke="#8a96a4" stroke-width="2"/>').join("") +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 40 + 20) + ' 10l0 50" stroke="#a8b4c2" stroke-width="1" opacity=".6"/>').join("") +
      geese +
      /* the shop levels */
      [140, 178].map((y, r) => '<rect x="0" y="' + y + '" width="400" height="6" fill="#e8e4dc"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (6 + i * 50) + '" y="' + (y - 28) + '" width="42" height="26" fill="' + (i % 3 ? "#fff1c2" : "#ffd98a") + '" opacity=".75"/>').join("")).join("") +
      '<rect x="0" y="184" width="400" height="76" fill="#d6d0c4"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 184l-20 76" stroke="#c4bdae" stroke-width="1"/>').join("") +
      [60, 120, 230, 300, 350].map((x, i) => '<g class="sq-bob' + (i % 2 ? " sq-bob2" : "") + '"><circle cx="' + x + '" cy="206" r="6" fill="#3a2a22"/><rect x="' + (x - 6) + '" y="212" width="12" height="20" rx="3" fill="' + ["#2f6b8a", RED, "#3a3a44", GOLD, "#5a7a4a"][i] + '"/></g>').join("") +
      '<rect x="118" y="236" width="164" height="18" rx="3" fill="#000" opacity=".55"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">THE GALLERIA, DOWNTOWN</text>',
      sky("sq2", "#a8cfe8", "#e8eef2"));
  }

  /* 3. Sankofa Square at night */
  function sqsquare() {
    const scr = (x, y, w, h, c, k) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#111"/><rect class="sq-glow' + k + '" x="' + (x + 3) + '" y="' + (y + 3) + '" width="' + (w - 6) + '" height="' + (h - 6) + '" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sq3)"/>' + stars(18) +
      '<rect x="0" y="40" width="120" height="150" fill="#1c2030"/><rect x="280" y="30" width="120" height="160" fill="#1c2030"/><rect x="130" y="70" width="140" height="120" fill="#22263a"/>' +
      scr(10, 54, 100, 60, "#3aa0ff", "") + scr(10, 122, 100, 40, RED, " sq-g2") + scr(290, 44, 100, 70, GOLD, " sq-g2") + scr(290, 122, 100, 44, "#9a4adf", "") + scr(150, 84, 100, 50, "#2ec27e", "") +
      '<text x="60" y="90" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">THE 6</text><text x="340" y="84" text-anchor="middle" ' + font + ' font-size="13" fill="#111">DOWNTOWN</text>' +
      '<rect x="0" y="190" width="400" height="70" fill="#3a3a40"/><path d="M0 214h400M0 222h400" stroke="#9aa1a8" stroke-width="2"/>' +
      '<g class="sq-car"><rect x="0" y="176" width="150" height="40" rx="6" fill="' + RED + '" stroke="#fff" stroke-width="1.5"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (10 + i * 23) + '" y="184" width="16" height="14" rx="2" fill="#1d262e"/>').join("") +
      '<path d="M75 176l10 -20" stroke="#222" stroke-width="2"/><rect x="0" y="204" width="150" height="4" fill="#fff"/></g>' +
      [40, 80, 200, 250, 330, 370].map((x, i) => '<g class="sq-bob' + (i % 2 ? " sq-bob2" : "") + '"><circle cx="' + x + '" cy="232" r="6" fill="#111"/><rect x="' + (x - 6) + '" y="238" width="12" height="18" rx="3" fill="#111"/></g>').join("") +
      '<rect x="128" y="8" width="144" height="20" rx="3" fill="#000" opacity=".55"/><text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">SANKOFA SQUARE</text>',
      sky("sq3", "#0a0c1a", "#2a1a3a"));
  }

  /* 4. The old Coach Terminal on Bay St, a coach heading out to New York */
  function sqcoach() {
    return svg(
      '<rect width="400" height="260" fill="url(#sq4)"/>' +
      '<g class="sq-sn"><circle cx="40" cy="0" r="2" fill="#fff"/><circle cx="220" cy="20" r="1.6" fill="#fff"/><circle cx="340" cy="10" r="2" fill="#fff"/></g><g class="sq-sn sq-sn2"><circle cx="120" cy="0" r="1.6" fill="#fff"/><circle cx="280" cy="30" r="2" fill="#fff"/></g><g class="sq-sn sq-sn3"><circle cx="70" cy="10" r="2" fill="#fff"/><circle cx="380" cy="0" r="1.6" fill="#fff"/></g>' +
      '<rect x="60" y="44" width="280" height="140" fill="#e8dcc0"/><rect x="150" y="30" width="100" height="20" fill="#e8dcc0"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (74 + i * 38) + '" y="60" width="16" height="70" fill="#2a3442"/><path d="M' + (70 + i * 38) + ' 56v80" stroke="#cfc0a0" stroke-width="2"/>').join("") +
      '<rect x="120" y="138" width="160" height="16" fill="#3a3a40"/><text x="200" y="150" text-anchor="middle" ' + font + ' font-size="9.5" fill="' + GOLD + '">COACH TERMINAL · BAY ST</text>' +
      '<rect x="160" y="156" width="80" height="28" fill="#2a2a30"/><rect x="0" y="184" width="400" height="76" fill="#4e4e54"/><path d="M0 230h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      '<g class="sq-coach"><rect x="210" y="164" width="180" height="58" rx="8" fill="#e8eef2" stroke="#6b7178" stroke-width="2"/><rect x="210" y="196" width="180" height="6" fill="#2f6b8a"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (234 + i * 26) + '" y="172" width="22" height="18" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="212" y="166" width="20" height="30" rx="2" fill="#1d262e"/><rect x="262" y="206" width="80" height="11" rx="2" fill="#111"/><text x="302" y="214.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">NEW YORK CITY</text>' +
      '<circle cx="236" cy="224" r="10" fill="#222"/><circle cx="370" cy="224" r="10" fill="#222"/><circle cx="214" cy="210" r="3" fill="#fff6c2"/></g>',
      sky("sq4", "#6a7a8a", "#c8d0d8"));
  }

  /* 5. Bay St & Queen St W, Old City Hall clock tower behind */
  function sqcorner() {
    const STONE = "#b07a5e", ROOF = "#5f9e8a";
    return svg(
      '<rect width="400" height="260" fill="url(#sq5)"/>' +
      /* Old City Hall: sandstone body, the tall clock tower with green copper roof */
      '<rect x="150" y="70" width="140" height="60" fill="' + STONE + '"/><path d="M150 70l20 -16h100l20 16z" fill="' + ROOF + '"/>' +
      '<rect x="196" y="24" width="30" height="106" fill="' + STONE + '"/><path d="M196 24l15 -18l15 18z" fill="' + ROOF + '"/>' +
      '<circle cx="211" cy="42" r="9" fill="#f2ecd8" stroke="#3a2a22" stroke-width="1.5"/><path d="M211 42v-6M211 42l4 2" stroke="#3a2a22" stroke-width="1.5"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (160 + i * 28) + ' 86v20" stroke="#5a3a2a" stroke-width="5"/>').join("") +
      /* the wall */
      '<rect x="0" y="120" width="290" height="110" fill="#4a5262"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (126 + i * 10) + 'h290" stroke="#3e4554" stroke-width="1"/>').join("") +
      tag("SHAQ", 18, 178, 42, GOLD, -6) + tag("IS DOPE", 108, 210, 36, "#3aa0ff", -4) + tag("TWO UP", 182, 150, 18, RED, -8) +
      '<circle class="sq-sp" cx="252" cy="160" r="3" fill="#3aa0ff"/><circle class="sq-sp sq-sp2" cx="258" cy="168" r="2.5" fill="#3aa0ff"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#5a5a60"/><path d="M0 232h400" stroke="#bdb8ae" stroke-width="4"/>' +
      '<rect x="326" y="60" width="6" height="172" fill="#3e4a3e"/>' + sign(286, 70, 84, "Bay St") + sign(278, 96, 108, "Queen St W") +
      '<rect x="320" y="150" width="18" height="26" rx="3" fill="#222"/><circle class="sq-glow" cx="329" cy="157" r="4" fill="#ff6a3a"/><circle cx="329" cy="168" r="4" fill="#444"/>',
      sky("sq5", "#16203a", "#d2804a"));
  }

  window.SCENES = { sqstation, sqgalleria, sqsquare, sqcoach, sqcorner };
})();
