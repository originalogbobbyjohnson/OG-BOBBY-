/* pnbrock scenes (Regions tab: Philadelphia; Germantown). CSS classes prefixed pb- (the page's own anim-train is kept).
   1 Germantown on SEPTA Regional Rail (Chestnut Hill East Line): the gray stone station house on Chelten Ave, wires overhead, a silver Silverliner sliding in.
   2 Vernon Park on Germantown Ave: the white marble Germantown Pastorius Monument (Pastorius St is half of his name), the lamp glowing, the yellow Vernon House behind.
   3 Cliveden in Germantown: the gray Wissahickon-schist Georgian mansion with its urns on the roof line, autumn trees, leaves falling.
   4 Pennypack Park in Northeast Philly, where he lived as a teen: the old three-arch stone Frankford Avenue Bridge over Pennypack Creek, water rippling.
   5 E Pastorius St and Baynton St, the corner his name comes from: green signs, PNB ROCK tagged on the wall, Germantown Town Hall's clock tower behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes pbglow{0%,100%{opacity:.45}50%{opacity:1}}.pb-glow{animation:pbglow 2.6s ease-in-out infinite}.pb-glow2{animation-delay:-1.3s}' +
    '@keyframes pbleaf{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(34px,130px) rotate(240deg);opacity:0}}.pb-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:pbleaf 4.2s linear infinite}.pb-l2{animation-delay:-1.4s}.pb-l3{animation-delay:-2.8s}' +
    '@keyframes pbrip{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.pb-rip{animation:pbrip 3s ease-in-out infinite}.pb-rip2{animation-delay:-1.5s}' +
    '@keyframes pbcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.pb-car{animation:pbcar 8s linear infinite}' +
    '@keyframes pbbird{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.pb-bird{animation:pbbird 14s linear infinite}' +
    '@keyframes pbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.pb-sp{animation:pbspray 1.4s ease-out infinite}.pb-sp2{animation-delay:.45s}' +
    '@keyframes pbhand{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.pb-hand{transform-box:view-box;transform-origin:200px 74px;animation:pbhand 12s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "pb-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#5a3e28"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const leaves = (cols) => cols.map((c, i) => '<g class="pb-leaf' + (i % 3 === 1 ? " pb-l2" : i % 3 === 2 ? " pb-l3" : "") + '"><ellipse cx="' + (50 + i * 70) + '" cy="' + (20 + (i * 37) % 50) + '" rx="4" ry="2" fill="' + c + '"/></g>').join("");
  const ROSE = "#f4a99b", GOLD = "#ffd36e", TEAL = "#7fd1c7", RR = "#91456c";
  /* gray schist stone texture */
  const stones = (x, y, w, h, base, line) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>';
    for (let r = 0; r * 8 < h; r++) for (let c = 0; c * 16 < w; c++) {
      const sx = x + c * 16 + (r % 2) * 8, sy = y + r * 8;
      if (sx + 13 <= x + w && sy + 6 <= y + h) s += '<rect x="' + sx + '" y="' + sy + '" width="13" height="6" rx="2" fill="none" stroke="' + line + '" stroke-width=".7"/>';
    }
    return s;
  };

  /* 1. Germantown station (Chestnut Hill East Line): gray stone station house with a slate roof by Chelten Ave, catenary poles, a stainless Silverliner with red and blue stripes */
  function pbstation() {
    const tr = '<g class="anim-train"><rect x="20" y="132" width="330" height="70" rx="6" fill="#c9ced4" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 44) + '" y="142" width="30" height="22" rx="2" fill="#1f2830"/>').join("") +
      '<rect x="20" y="170" width="330" height="4" fill="#c8102e"/><rect x="20" y="176" width="330" height="4" fill="#1f4e9a"/>' +
      Array.from({ length: 30 }, (_, i) => '<path d="M' + (24 + i * 11) + ' 182v18" stroke="#b4b9c0" stroke-width="1"/>').join("") +
      '<rect x="330" y="136" width="20" height="64" rx="4" fill="#a3a9b0"/><circle cx="342" cy="190" r="3.5" fill="#fff6c2"/><path d="M170 132l-10 -26h30" fill="none" stroke="#333" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pb-s1)"/>' +
      '<g class="pb-bird"><path d="M0 30q5 -5 10 0q5 -5 10 0" fill="none" stroke="#3a3a3a" stroke-width="1.5"/></g>' +
      tree(22, 108, 1.4, "#c8642a") + tree(384, 104, 1.5, "#d98a2a") +
      '<path d="M0 104h400" stroke="#333" stroke-width="1.5"/>' + [60, 200, 340].map(x => '<rect x="' + (x - 2) + '" y="40" width="4" height="96" fill="#5a5f66"/><path d="M' + (x - 16) + ' 46h32" stroke="#5a5f66" stroke-width="3"/>').join("") +
      '<path d="M96 84h104l-10 -22h-84z" fill="#3a3f48"/>' + stones(100, 84, 96, 48, "#8d8a84", "#6e6b65") +
      '<rect x="114" y="98" width="16" height="22" rx="7" fill="#2c3440"/><rect x="140" y="98" width="16" height="22" rx="7" fill="#2c3440"/><rect x="166" y="98" width="16" height="22" rx="7" fill="#2c3440"/>' +
      '<rect class="pb-glow" x="117" y="102" width="10" height="16" rx="5" fill="#ffd98a" opacity=".5"/><rect class="pb-glow pb-glow2" x="169" y="102" width="10" height="16" rx="5" fill="#ffd98a" opacity=".5"/>' +
      tr +
      '<rect x="0" y="204" width="400" height="8" fill="#f2c200"/><rect x="0" y="212" width="400" height="48" fill="#9a958c"/>' +
      '<rect x="222" y="58" width="168" height="30" rx="3" fill="#111"/><text x="234" y="79" ' + font + ' font-size="15" fill="#fff">Germantown</text>' + badge(344, 73, "RR", RR) +
      leaves(["#e8a33a", "#d2692a", "#e8c43a", "#c8502a"]),
      sky("pb-s1", "#a9d6f2", "#f6ead6"));
  }

  /* 2. Vernon Park: the white marble Pastorius Monument (wide carved base, a robed figure holding up a lamp), the yellow Vernon House behind, big park trees */
  function pbvernon() {
    return svg(
      '<rect width="400" height="260" fill="url(#pb-s2)"/>' +
      '<rect x="230" y="70" width="130" height="80" fill="#e8cf86"/><path d="M224 70h142l-12 -18H236z" fill="#6a5a4a"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (240 + (i % 4) * 30) + '" y="' + (80 + Math.floor(i / 4) * 32) + '" width="14" height="20" fill="#3a4a5a" stroke="#fff" stroke-width="2"/>').join("") +
      '<rect x="286" y="122" width="18" height="28" fill="#6a3a2a"/><path d="M280 122h30l-15 -10z" fill="#f4f0e6"/>' +
      tree(40, 120, 2.2, "#3f7a3a") + tree(380, 128, 1.6, "#4a8a3e") + tree(110, 116, 1.5, "#356c32") +
      '<rect x="0" y="150" width="400" height="110" fill="#5f9a46"/><path d="M150 260q40 -60 50 -110h12q10 50 50 110z" fill="#c9b99a"/>' +
      '<rect x="146" y="150" width="120" height="16" fill="#e4e2dc"/><rect x="156" y="104" width="100" height="48" fill="#f2f1ec" stroke="#cfccc4" stroke-width="1.5"/>' +
      '<rect x="166" y="112" width="34" height="32" fill="none" stroke="#cfccc4" stroke-width="1.5"/><rect x="212" y="112" width="34" height="32" fill="none" stroke="#cfccc4" stroke-width="1.5"/>' +
      '<path d="M172 138q11 -16 22 0M218 138q11 -16 22 0" fill="none" stroke="#d6d3cb" stroke-width="2"/>' +
      '<rect x="176" y="92" width="60" height="14" fill="#e8e6e0"/>' +
      '<path d="M196 92q-4 -30 10 -46q14 16 10 46z" fill="#f6f5f1" stroke="#d2cfc8" stroke-width="1.2"/><circle cx="206" cy="40" r="6" fill="#f6f5f1" stroke="#d2cfc8" stroke-width="1"/>' +
      '<path d="M212 56l14 -22" stroke="#f6f5f1" stroke-width="4" stroke-linecap="round"/><path d="M222 30h10l-2 6h-6z" fill="#d9c58a"/>' +
      '<circle class="pb-glow" cx="227" cy="26" r="8" fill="' + GOLD + '" opacity=".7"/><circle cx="227" cy="27" r="3" fill="#fff6c2"/>' +
      '<rect x="20" y="196" width="60" height="5" fill="#6a4a2a"/><rect x="24" y="201" width="4" height="10" fill="#3a3a3a"/><rect x="72" y="201" width="4" height="10" fill="#3a3a3a"/>' +
      '<rect x="320" y="200" width="60" height="5" fill="#6a4a2a"/><rect x="324" y="205" width="4" height="10" fill="#3a3a3a"/><rect x="372" y="205" width="4" height="10" fill="#3a3a3a"/>' +
      '<g class="pb-bird"><path d="M0 50q5 -5 10 0q5 -5 10 0" fill="none" stroke="#2a2a2a" stroke-width="1.5"/></g>' +
      leaves(["#7aa63a", "#e8a33a", "#9ac24a"]),
      sky("pb-s2", "#8fc8ee", "#f4ecd8"));
  }

  /* 3. Cliveden: the gray stone Georgian house, hipped slate roof, dormers, five stone urns on the roof line, the center door with a pediment, autumn trees */
  function pbcliveden() {
    return svg(
      '<rect width="400" height="260" fill="url(#pb-s3)"/>' +
      tree(30, 146, 2.0, "#c8642a") + tree(372, 150, 2.0, "#d98a2a") +
      '<path d="M90 86l20 -30h180l20 30z" fill="#4a4e56"/>' +
      [140, 200, 260].map(x => '<rect x="' + (x - 9) + '" y="58" width="18" height="18" fill="#e8e4da"/><path d="M' + (x - 11) + ' 60l11 -10l11 10z" fill="#4a4e56"/><rect x="' + (x - 5) + '" y="63" width="10" height="11" fill="#2c3440"/>').join("") +
      [96, 148, 200, 252, 304].map(x => '<path d="M' + (x - 5) + ' 86h10l-2 -8h-6z" fill="#b8b2a6"/><ellipse cx="' + x + '" cy="76" rx="5" ry="4" fill="#b8b2a6"/>').join("") +
      stones(90, 86, 220, 96, "#8a877f", "#6c6962") +
      '<rect x="88" y="84" width="224" height="4" fill="#e8e4da"/>' +
      [108, 140, 236, 268].map(x => [96, 136].map(y => '<rect x="' + x + '" y="' + y + '" width="22" height="30" fill="#2c3440" stroke="#f2efe6" stroke-width="3"/><path d="M' + (x + 11) + ' ' + y + 'v30M' + x + ' ' + (y + 15) + 'h22" stroke="#f2efe6" stroke-width="1"/>').join("")).join("") +
      '<path d="M176 136l24 -14l24 14z" fill="#e8e4da"/><rect x="186" y="136" width="28" height="46" fill="#3a2a20" stroke="#e8e4da" stroke-width="3"/><rect x="192" y="96" width="16" height="24" fill="#2c3440" stroke="#f2efe6" stroke-width="3"/>' +
      '<rect x="176" y="182" width="48" height="6" fill="#b8b2a6"/>' +
      '<rect x="0" y="188" width="400" height="72" fill="#6a9a42"/><path d="M184 260l8 -72h16l8 72z" fill="#c9b99a"/>' +
      tree(70, 200, 1.2, "#e8a33a") + tree(330, 204, 1.2, "#c8502a") +
      leaves(["#e8a33a", "#d2692a", "#e8c43a", "#c8502a", "#e07a2a"]),
      sky("pb-s3", "#9ccbea", "#f2e2c8"));
  }

  /* 4. Pennypack Park: the three-arch Frankford Avenue stone bridge over Pennypack Creek, the woods, a car crossing, the creek rippling */
  function pbpennypack() {
    return svg(
      '<rect width="400" height="260" fill="url(#pb-s4)"/>' +
      tree(20, 120, 2.0, "#3f7a3a") + tree(70, 112, 1.6, "#4a8a3e") + tree(330, 116, 1.8, "#356c32") + tree(385, 120, 1.8, "#3f7a3a") +
      '<rect x="0" y="120" width="400" height="22" fill="#4f7f3a"/>' +
      '<g class="pb-car"><rect x="0" y="100" width="58" height="12" rx="5" fill="' + TEAL + '"/><rect x="12" y="93" width="32" height="9" rx="3" fill="' + TEAL + '"/><circle cx="12" cy="113" r="4" fill="#111"/><circle cx="46" cy="113" r="4" fill="#111"/></g>' +
      '<rect x="40" y="110" width="320" height="14" fill="#a39a8a"/><rect x="38" y="108" width="324" height="4" fill="#b8ae9c"/>' +
      stones(40, 124, 320, 60, "#9a9182", "#7a7264") +
      [100, 200, 300].map(x => '<path d="M' + (x - 38) + ' 184v-14a38 34 0 0 1 76 0v14z" fill="#2c3a34"/><path d="M' + (x - 40) + ' 170a40 36 0 0 1 80 0" fill="none" stroke="#b8ae9c" stroke-width="5"/>').join("") +
      '<rect x="0" y="184" width="400" height="76" fill="#4c7f8a"/>' +
      [100, 200, 300].map(x => '<path d="M' + (x - 36) + ' 186q36 14 72 0" fill="#3e6a74" opacity=".8"/>').join("") +
      '<g class="pb-rip"><path d="M20 204h70M170 214h80M300 206h70M60 238h90M240 244h100" stroke="#a9d3e2" stroke-width="2" stroke-linecap="round" opacity=".7"/></g>' +
      '<g class="pb-rip pb-rip2"><path d="M110 226h50M320 228h50M10 252h50" stroke="#cfe8f0" stroke-width="1.5" stroke-linecap="round" opacity=".6"/></g>' +
      '<path d="M0 184q20 -10 40 0v76H0z" fill="#3f6a34"/><path d="M400 184q-20 -10 -40 0v76h40z" fill="#3f6a34"/>' +
      leaves(["#7aa63a", "#9ac24a", "#e8c43a"]),
      sky("pb-s4", "#9fd0f2", "#eef4e2"));
  }

  /* 5. E Pastorius St and Baynton St: green signs, PNB ROCK tagged on the brick wall, Germantown Town Hall's columned front and clock tower behind at dusk */
  function pbcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#pb-s5)"/>' + stars(14) +
      tree(30, 128, 1.6, "#24402a") + tree(372, 124, 1.8, "#24402a") +
      '<rect x="186" y="28" width="28" height="86" fill="#d8d2c2"/><path d="M182 28h36l-4 -8h-28z" fill="#c8c0ac"/><path d="M190 20l10 -14l10 14z" fill="#5f8a7a"/>' +
      '<circle cx="200" cy="74" r="10" fill="#f6f2e2" stroke="#8a7e66" stroke-width="2"/><path d="M200 74v-7" stroke="#2a2a2a" stroke-width="1.5"/><path class="pb-hand" d="M200 74h6" stroke="#2a2a2a" stroke-width="1.2"/>' +
      '<path d="M120 112q80 -40 160 0z" fill="#cfc8b6"/><rect x="116" y="112" width="168" height="28" fill="#e2dccc"/><path d="M150 112l50 -16l50 16z" fill="#d8d2c2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (156 + i * 18) + '" y="114" width="6" height="26" fill="#f6f2ea"/>').join("") +
      '<rect class="pb-glow" x="124" y="118" width="10" height="14" fill="#ffd98a" opacity=".6"/><rect class="pb-glow pb-glow2" x="266" y="118" width="10" height="14" fill="#ffd98a" opacity=".6"/>' +
      '<rect x="0" y="140" width="400" height="84" fill="#7e4433"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (148 + i * 8) + 'h400" stroke="#6e3a2a" stroke-width="1"/>').join("") +
      tag("PNB ROCK", 16, 196, 44, ROSE, -6) + tag("NEW LANE", 252, 186, 24, TEAL, -4) + tag("ON FLEEK", 28, 218, 18, "#fff", -3) + tag("GERMANTOWN", 196, 216, 18, GOLD, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="pb-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + ROSE + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + ROSE + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="350" y="98" width="6" height="126" fill="#2f2f2f"/>' + sign(296, 100, 104, "E Pastorius St") + sign(306, 126, 92, "Baynton St") +
      '<g class="pb-sp"><circle cx="190" cy="168" r="3" fill="' + ROSE + '" opacity=".7"/></g><g class="pb-sp pb-sp2"><circle cx="196" cy="162" r="2" fill="' + ROSE + '" opacity=".6"/></g>',
      sky("pb-s5", "#141a3a", "#8a4a7a"));
  }

  window.SCENES = { pbstation: pbstation, pbvernon: pbvernon, pbcliveden: pbcliveden, pbpennypack: pbpennypack, pbcorner: pbcorner };
})();
