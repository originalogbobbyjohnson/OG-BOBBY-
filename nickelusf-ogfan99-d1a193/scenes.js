/* nickelusf scenes (Regions tab: Virginia; Richmond). The GRTC Pulse pulling into VCU & VUU station on Broad St, the Belle Isle footbridge hung under the Lee Bridge
   over the James River rapids, Main Street Station's clock tower, Oregon Hill row houses with a painted wall, S Laurel St & W Cary St with the State Capitol behind. 400 x 260 SVGs.
   CSS classes prefixed nf- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes nfflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.nf-flk{animation:nfflick 2.4s infinite}' +
    '@keyframes nfwater{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.nf-wt{animation:nfwater 2.2s linear infinite}.nf-wt2{animation-duration:3s}' +
    '@keyframes nfkayak{0%{transform:translateX(420px)}100%{transform:translateX(-80px)}}.nf-ky{animation:nfkayak 11s linear infinite}' +
    '@keyframes nfwalk{0%{transform:translateX(0)}100%{transform:translateX(300px)}}.nf-wk{animation:nfwalk 12s linear infinite}.nf-wk2{animation-delay:-6s}' +
    '@keyframes nfhand{from{transform:rotate(0)}to{transform:rotate(360deg)}}.nf-hd{transform-origin:200px 70px;animation:nfhand 10s linear infinite}.nf-hd2{animation-duration:60s}' +
    '@keyframes nfbird{0%{transform:translate(0,0)}100%{transform:translate(-420px,-30px)}}.nf-bd{animation:nfbird 13s linear infinite}.nf-bd2{animation-delay:-6s}' +
    '@keyframes nfsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.nf-sw{transform-box:fill-box;transform-origin:50% 100%;animation:nfsway 3s ease-in-out infinite}' +
    '@keyframes nfglow{0%,100%{opacity:.5}50%{opacity:1}}.nf-glow{animation:nfglow 2.2s ease-in-out infinite}.nf-g2{animation-delay:-1.1s}' +
    '@keyframes nfspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.nf-sp{animation:nfspray 1.4s ease-out infinite}.nf-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="' + (txt.length * 9 + 16) + '" height="20" rx="10" fill="' + color + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + (txt.length * 9 + 16) / 2) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GOLD = "#f2c94c", TEAL = "#3fb8a0", RUST = "#e0663f", GRTC = "#1f4e79";

  /* 1. VCU & VUU station on Broad St: the glass canopy, the tall station pylon with the PULSE bullet, the Pulse bus pulling in on its own lane */
  function nfstation() {
    const bus = '<g class="anim-train"><rect x="24" y="128" width="300" height="74" rx="12" fill="#f4f6f7" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 40) + '" y="140" width="32" height="28" rx="3" fill="#22313e"/>').join("") +
      '<rect x="284" y="138" width="34" height="34" rx="4" fill="#22313e"/><rect x="24" y="176" width="300" height="7" fill="' + GRTC + '"/><rect x="24" y="185" width="300" height="3" fill="' + TEAL + '"/>' +
      '<rect x="150" y="136" width="26" height="62" rx="2" fill="none" stroke="#9aa1a8" stroke-width="2"/>' +
      '<rect x="232" y="130" width="84" height="10" rx="2" fill="#111"/><text x="274" y="138" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">PULSE  ROCKETTS</text>' +
      '<circle cx="80" cy="204" r="12" fill="#222"/><circle cx="80" cy="204" r="5" fill="#9aa1a8"/><circle cx="268" cy="204" r="12" fill="#222"/><circle cx="268" cy="204" r="5" fill="#9aa1a8"/>' +
      '<circle cx="320" cy="190" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nf1)"/>' +
      '<g fill="#8a6a58"><rect x="0" y="70" width="70" height="70"/><rect x="74" y="56" width="50" height="84"/></g><g fill="#a7a296"><rect x="300" y="64" width="100" height="76"/></g>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (10 + i * 15) + '" y="84" width="8" height="10" fill="#e6d6b8"/><rect x="' + (84 + (i % 3) * 14) + '" y="' + (70 + Math.floor(i / 3) * 20) + '" width="8" height="10" fill="#e6d6b8"/>').join("") +
      /* canopy */
      '<rect x="110" y="50" width="200" height="8" fill="#5a646e"/><rect x="110" y="58" width="200" height="16" fill="#bfe3ef" opacity=".7"/>' + [130, 290].map(x => '<rect x="' + x + '" y="74" width="5" height="70" fill="#5a646e"/>').join("") +
      /* pylon */
      '<rect x="336" y="24" width="40" height="120" rx="2" fill="#1c252e"/><rect x="336" y="24" width="40" height="5" fill="' + TEAL + '"/>' + badge(332, 52, "PULSE", GRTC) +
      '<text x="356" y="84" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">VCU &amp;</text><text x="356" y="96" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">VUU</text>' +
      '<rect x="0" y="140" width="400" height="12" fill="#cfcac0"/><rect x="0" y="150" width="400" height="6" fill="#f2c200"/>' +
      '<rect x="0" y="156" width="400" height="104" fill="#55555b"/><rect x="0" y="200" width="400" height="60" fill="#8a3a32" opacity=".55"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="12" fill="#f4e6dc" letter-spacing="6" opacity=".8">BUS ONLY</text>' + bus +
      '<text x="210" y="44" text-anchor="middle" ' + font + ' font-size="13" fill="#1c252e">VCU &amp; VUU</text><text x="210" y="30" text-anchor="middle" ' + font + ' font-size="8" fill="#4a5560" letter-spacing="2">BROAD ST</text>',
      sky("nf1", "#8cc0e6", "#eaf2f4"));
  }

  /* 2. The Belle Isle footbridge hung under the Lee Bridge's concrete arches, the James River rapids rushing over the rocks, a kayak sliding through */
  function nfbelleisle() {
    const arches = Array.from({ length: 5 }, (_, i) => '<path d="M' + (i * 90 - 20) + ' 112q45 -46 90 0" fill="none" stroke="#c9c4b8" stroke-width="10"/><rect x="' + (i * 90 + 62) + '" y="100" width="16" height="104" fill="#bdb8ac"/>').join("");
    const rocks = [[40, 214, 26], [130, 226, 20], [220, 210, 30], [320, 222, 24], [380, 206, 18]].map(([x, y, r]) => '<ellipse cx="' + x + '" cy="' + y + '" rx="' + r + '" ry="' + (r * 0.45) + '" fill="#6e665c"/>').join("");
    const foam = Array.from({ length: 12 }, (_, i) => '<path class="nf-wt' + (i % 2 ? " nf-wt2" : "") + '" d="M' + (i * 40) + ' ' + (200 + (i % 4) * 14) + 'q10 -6 20 0t20 0t20 0" stroke="#e8f4f7" stroke-width="3" fill="none" opacity=".8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#nf2)"/>' +
      '<g fill="#5f7a54"><path d="M0 120q60 -30 120 -6t140 -10t140 6v40H0z"/></g>' +
      '<rect x="0" y="54" width="400" height="12" fill="#d8d3c6"/><rect x="0" y="66" width="400" height="6" fill="#bdb8ac"/>' + arches +
      /* the footbridge: a deck hung from cables under the road */
      '<path d="M0 150q200 18 400 0" stroke="#3a4048" stroke-width="5" fill="none"/>' +
      Array.from({ length: 20 }, (_, i) => { const x = 10 + i * 20, y = 150 + 18 * (1 - Math.pow((x - 200) / 200, 2)) * 0.5; return '<path d="M' + x + ' 72L' + x + ' ' + y + '" stroke="#7a8088" stroke-width="1"/>'; }).join("") +
      '<g class="nf-wk"><circle cx="40" cy="146" r="3" fill="' + RUST + '"/><rect x="38" y="149" width="4" height="7" fill="' + RUST + '"/></g><g class="nf-wk nf-wk2"><circle cx="40" cy="147" r="3" fill="' + GOLD + '"/><rect x="38" y="150" width="4" height="7" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="176" width="400" height="84" fill="#5a7e86"/>' + rocks + '<g>' + foam + '</g>' +
      '<g class="nf-ky"><path d="M0 238q30 8 60 0q-30 -6 -60 0z" fill="' + RUST + '"/><circle cx="30" cy="230" r="4" fill="#222"/><path d="M14 226l32 10" stroke="#222" stroke-width="2"/></g>',
      sky("nf2", "#9ac8e6", "#eef4ee"));
  }

  /* 3. Main Street Station: the cream brick train shed and the clock tower with the red tile roof, clock hands turning, pigeons crossing */
  function nfmainst() {
    return svg(
      '<rect width="400" height="260" fill="url(#nf3)"/>' +
      '<rect x="20" y="120" width="360" height="100" fill="#e2cfa8"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M20 ' + (128 + i * 8) + 'h360" stroke="#d2bd94" stroke-width="1"/>').join("") +
      '<path d="M14 124L60 92H340L386 124z" fill="#b5442e"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (70 + i * 20) + ' 98v24" stroke="#943422" stroke-width="2"/>').join("") +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (34 + i * 50) + ' 200v-46q12 -18 24 0v46z" fill="#2c3a44" stroke="#f2e8d0" stroke-width="2"/>').join("") +
      /* the tower */
      '<rect x="172" y="40" width="56" height="180" fill="#e8d6b0"/><path d="M164 44L200 6L236 44z" fill="#b5442e"/><path d="M200 6v-6" stroke="#5a4636" stroke-width="2"/>' +
      '<circle cx="200" cy="70" r="20" fill="#f7f1e0" stroke="#5a4636" stroke-width="3"/>' + Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<rect x="' + (200 + Math.sin(a) * 15 - 1) + '" y="' + (70 - Math.cos(a) * 15 - 1) + '" width="2" height="2" fill="#333"/>'; }).join("") +
      '<path class="nf-hd" d="M200 70v-14" stroke="#222" stroke-width="2.5"/><path class="nf-hd nf-hd2" d="M200 70h10" stroke="#222" stroke-width="3"/>' +
      '<path d="M186 140v-30q14 -18 28 0v30z" fill="#2c3a44" stroke="#f2e8d0" stroke-width="2"/><rect x="176" y="100" width="48" height="5" fill="#f2e8d0"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#6a6a70"/><path d="M0 236h400M0 248h400" stroke="#3a3a40" stroke-width="3"/>' +
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20 + 4) + '" y="234" width="6" height="16" fill="#4a3a2a"/>').join("") +
      [0, 1].map(i => '<g class="nf-bd' + (i ? " nf-bd2" : "") + '"><path d="M' + (400 + i * 40) + ' ' + (40 + i * 16) + 'q6 -6 12 0q6 -6 12 0" stroke="#3a3e46" stroke-width="2" fill="none"/></g>').join(""),
      sky("nf3", "#86b6de", "#f4e4c8"));
  }

  /* 4. Oregon Hill: narrow row houses with front porches up S Laurel St, a painted wall at the end of the block, porch flags and a tree swaying */
  function nforegonhill() {
    const cols = ["#b8503c", "#d8c8a0", "#6e8aa0", "#9a6a4a", "#c0a070"];
    const houses = cols.map((c, i) => {
      const x = 10 + i * 46;
      return '<rect x="' + x + '" y="70" width="44" height="130" fill="' + c + '"/><path d="M' + (x - 2) + ' 72l24 -16l24 16z" fill="#4a3a32"/>' +
        '<rect x="' + (x + 6) + '" y="86" width="12" height="18" fill="#2a3442"/><rect x="' + (x + 26) + '" y="86" width="12" height="18" fill="' + (i % 2 ? "#ffd98a" : "#2a3442") + '" class="' + (i % 2 ? "nf-glow" : "") + '"/>' +
        '<rect x="' + (x + 6) + '" y="122" width="12" height="18" fill="#2a3442"/><rect x="' + (x + 26) + '" y="148" width="12" height="30" fill="#3a2a22"/>' +
        '<rect x="' + (x - 2) + '" y="144" width="48" height="5" fill="#f2ede2"/><path d="M' + (x + 2) + ' 149v32M' + (x + 42) + ' 149v32" stroke="#f2ede2" stroke-width="3"/><rect x="' + x + '" y="176" width="44" height="6" fill="#f2ede2"/>';
    }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#nf4)"/>' + houses +
      /* the painted wall at the end of the block */
      '<rect x="244" y="96" width="156" height="104" fill="#2b3a4a"/>' +
      '<circle cx="290" cy="140" r="30" fill="' + GOLD + '"/><path d="M244 186q40 -40 80 -10t76 -20v44H244z" fill="' + TEAL + '"/><path d="M330 100l40 50l30 -30v-24z" fill="' + RUST + '"/>' +
      tag("AGM", 256, 128, 28, "#fff", -6) + tag("RVA", 336, 186, 22, GOLD, -4) +
      '<rect x="0" y="200" width="400" height="12" fill="#c7c2b6"/><rect x="0" y="212" width="400" height="48" fill="#4e4e54"/>' +
      '<g class="nf-sw"><rect x="228" y="150" width="6" height="52" fill="#4a3424"/><circle cx="231" cy="140" r="18" fill="#4f8f45"/><circle cx="222" cy="130" r="11" fill="#5fa055"/></g>',
      sky("nf4", "#a6cfe8", "#f6e8d0"));
  }

  /* 5. S Laurel St and W Cary St in Oregon Hill: green signs, NICKELUS F tagged on the brick, the white Capitol on the hill behind at dusk */
  function nfcorner() {
    const capitol = '<g fill="#efeadf"><rect x="148" y="74" width="104" height="52"/><path d="M140 76L200 46L260 76z"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (156 + i * 16) + '" y="78" width="7" height="46" fill="#fbf8f0"/>').join("") +
      '<rect x="110" y="96" width="38" height="30"/><rect x="252" y="96" width="38" height="30"/><rect x="140" y="124" width="120" height="6" fill="#d9d3c4"/></g>' +
      '<path d="M156 70L200 50L244 70z" fill="#d9d3c4"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#nf5)"/>' +
      '<path d="M0 140q100 -40 200 -32t200 22v40H0z" fill="#2c3a2e"/>' + capitol +
      '<rect class="nf-glow" x="166" y="108" width="68" height="10" fill="#ffe0a0" opacity=".5"/>' +
      '<g fill="#1e2a2a"><rect x="20" y="96" width="40" height="44"/><rect x="300" y="88" width="34" height="52"/><rect x="340" y="104" width="50" height="36"/></g>' +
      '<rect x="0" y="136" width="400" height="90" fill="#8a4a36"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#76402e" stroke-width="1"/>').join("") +
      tag("NICKELUS F", 22, 196, 44, GOLD, -6) + tag("SWEET PETEY", 40, 220, 18, "#fff", -3) + tag("AGM", 206, 222, 22, TEAL, -4) +
      '<rect x="0" y="226" width="400" height="34" fill="#55534e"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="342" y="98" width="6" height="128" fill="#2f2f2f"/>' + sign(298, 100, 92, "S Laurel St") + sign(298, 126, 92, "W Cary St") +
      '<g class="nf-sp"><circle cx="266" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="nf-sp nf-sp2"><circle cx="272" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("nf5", "#24304e", "#e8946a"));
  }

  window.SCENES = { nfstation: nfstation, nfbelleisle: nfbelleisle, nfmainst: nfmainst, nforegonhill: nforegonhill, nfcorner: nfcorner };
})();
