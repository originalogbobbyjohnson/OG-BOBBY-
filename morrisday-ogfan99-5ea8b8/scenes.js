/* morrisday scenes (Regions tab: Minneapolis; North Minneapolis, Plymouth Av). CSS classes and ids prefixed td- (the page's own anim-train is kept).
   1 Penn & Plymouth on the METRO C Line (rapid bus up Penn Av through the North Side): the station pylon and heated shelter, black sign with the C bullet, the bus pulling in.
   2 The Way on Plymouth Av N (the North Side community center at the heart of the young R&B scene the band came out of): low brick front, painted sign, a band set up out front.
   3 North High (North Community High School), the Polars' school on the North Side: brick front with the tall entry, the marquee, snow falling.
   4 Flyte Tyme studio (Jimmy Jam and Terry Lewis named it after the band's first name): the big mixing desk, keys, gold records on the wall, meters jumping.
   5 Plymouth Av N and Penn Av N: green signs, THE TIME tagged on the wall, a valet's hand-mirror, the downtown Minneapolis skyline with the Capella Tower's lit crown behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tdflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.td-flk{animation:tdflick 2.4s infinite}.td-flk2{animation-delay:.8s}' +
    '@keyframes tdglow{0%,100%{opacity:.35}50%{opacity:1}}.td-glow{animation:tdglow 1.8s ease-in-out infinite}.td-g2{animation-delay:-.9s}' +
    '@keyframes tdsnow{from{transform:translateY(-30px)}to{transform:translateY(270px)}}.td-sn{animation:tdsnow 7s linear infinite}.td-sn2{animation-delay:-2.3s}.td-sn3{animation-delay:-4.6s}' +
    '@keyframes tdmeter{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}80%{transform:scaleY(.85)}}.td-mt{transform-box:fill-box;transform-origin:50% 100%;animation:tdmeter .9s ease-in-out infinite}.td-mt2{animation-delay:-.3s}.td-mt3{animation-delay:-.6s}' +
    '@keyframes tdfade{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}.td-fd{animation:tdfade 2.6s ease-in-out infinite}.td-fd2{animation-delay:-1.3s}.td-fd3{animation-delay:-.6s}' +
    '@keyframes tdnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-80px);opacity:0}}.td-note{animation:tdnote 3.4s ease-out infinite}.td-n2{animation-delay:-1.1s}.td-n3{animation-delay:-2.2s}' +
    '@keyframes tdhit{0%,100%{transform:translateY(0)}50%{transform:translateY(4px)}}.td-hit{animation:tdhit .45s ease-in-out infinite}.td-hit2{animation-delay:-.22s}' +
    '@keyframes tdshine{0%,100%{opacity:.15}50%{opacity:.9}}.td-sh{animation:tdshine 1.6s ease-in-out infinite}' +
    '@keyframes tdspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.td-sp{animation:tdspray 1.4s ease-out infinite}.td-sp2{animation-delay:.45s}' +
    '@keyframes tdcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.td-car{animation:tdcar 6s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const snow = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="td-sn ' + ["", "td-sn2", "td-sn3"][i % 3] + '" cx="' + ((i * 61) % 400) + '" cy="' + ((i * 37) % 120) + '" r="' + (i % 2 ? 1.4 : 2) + '" fill="#fff" opacity=".85"/>'; return s; };
  const note = (x, y, cls, c) => '<g class="td-note ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><path d="M' + (x + 4.5) + ' ' + (y - 1) + 'v-18l8 4" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
  const GOLD = "#ffd23f", PINK = "#e0457b", TEAL = "#3fd0c9", CLINE = "#6d6e71";

  /* 1. Penn & Plymouth, METRO C Line: the pylon, the shelter, the black sign, the bus pulling in */
  function tdstation() {
    const bus = '<g class="anim-train"><rect x="30" y="130" width="300" height="70" rx="8" fill="#eef0f2" stroke="#7a828c" stroke-width="2"/>' +
      '<rect x="30" y="130" width="300" height="10" rx="5" fill="#3a3f46"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (46 + i * 44) + '" y="146" width="34" height="26" rx="3" fill="#1d2833"/>').join("") +
      '<rect x="30" y="178" width="300" height="7" fill="#0053a0"/><rect x="30" y="185" width="300" height="3" fill="#c4262e"/>' +
      '<rect x="306" y="146" width="22" height="30" rx="3" fill="#1d2833"/><rect x="300" y="132" width="28" height="10" rx="2" fill="#111"/><text x="314" y="140" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb000">C</text>' +
      '<circle cx="80" cy="202" r="12" fill="#1b1d22"/><circle cx="80" cy="202" r="5" fill="#8a9099"/><circle cx="280" cy="202" r="12" fill="#1b1d22"/><circle cx="280" cy="202" r="5" fill="#8a9099"/>' +
      '<circle cx="326" cy="190" r="3.5" fill="#fff6c2"/></g>';
    /* North Side houses behind */
    const houses = [[0, 84], [70, 92], [140, 80], [210, 90], [280, 84], [350, 92]].map(([x, y], i) =>
      '<rect x="' + (x + 6) + '" y="' + y + '" width="58" height="' + (126 - y) + '" fill="' + ["#7d6a58", "#6a7a8a", "#8a6a5a", "#5f7064", "#7a6878", "#6d6252"][i] + '"/><path d="M' + x + ' ' + (y + 2) + 'l35 -24l35 24z" fill="#3e3a38"/>' +
      '<rect class="' + (i % 2 ? "td-glow" : "td-glow td-g2") + '" x="' + (x + 16) + '" y="' + (y + 12) + '" width="12" height="12" fill="#ffd98a"/><rect x="' + (x + 40) + '" y="' + (y + 12) + '" width="12" height="12" fill="#2a3440"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#td1)"/>' + houses +
      '<rect x="0" y="122" width="400" height="90" fill="#4a4d54"/><path d="M0 124h400" stroke="#8a8e95" stroke-width="2"/>' +
      bus +
      '<rect x="0" y="212" width="400" height="48" fill="#a8a29a"/><rect x="0" y="210" width="400" height="5" fill="#d9d4cb"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 22) + ' 214v46" stroke="#958f87" stroke-width="1"/>').join("") +
      /* the shelter: glass box with a flat dark roof */
      '<rect x="340" y="96" width="56" height="118" fill="#bcd3e0" opacity=".35" stroke="#3d4a56" stroke-width="3"/><rect x="334" y="90" width="66" height="8" fill="#3d4a56"/><rect class="td-flk" x="346" y="100" width="44" height="3" fill="#fff8dc"/>' +
      /* the pylon */
      '<rect x="8" y="70" width="18" height="144" fill="#2b2f36"/><rect x="8" y="78" width="18" height="18" fill="' + CLINE + '"/><text x="17" y="92" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">C</text><rect class="td-flk td-flk2" x="11" y="104" width="12" height="40" fill="#ffb000" opacity=".8"/>' +
      '<rect x="62" y="34" width="276" height="34" rx="3" fill="#111"/><text x="76" y="57" ' + font + ' font-size="17" fill="#fff">Penn &amp; Plymouth</text>' +
      '<rect x="262" y="42" width="58" height="18" rx="9" fill="' + CLINE + '"/><text x="291" y="55.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">C LINE</text>',
      sky("td1", "#1f2238", "#d9845a"));
  }

  /* 2. The Way on Plymouth Av N: low brick front, painted sign, a band set up out front */
  function tdway() {
    return svg(
      '<rect width="400" height="260" fill="url(#td2)"/>' +
      '<circle cx="330" cy="50" r="22" fill="#ffd27a" opacity=".85"/>' +
      '<rect x="30" y="80" width="340" height="120" fill="#8e4f36"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M30 ' + (92 + i * 16) + 'h340" stroke="#7a412b" stroke-width="1"/>').join("") +
      '<rect x="24" y="72" width="352" height="10" fill="#3e3a38"/>' +
      '<rect x="110" y="88" width="180" height="34" rx="3" fill="#f4eee0" stroke="#2a2a2a" stroke-width="3"/><text x="200" y="114" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="24" fill="#2a2a2a" letter-spacing="5">THE WAY</text>' +
      [50, 300].map(x => '<rect x="' + x + '" y="96" width="50" height="34" fill="#2c3a4a"/><rect class="td-glow" x="' + (x + 4) + '" y="100" width="42" height="26" fill="#ffd98a" opacity=".5"/>').join("") +
      '<rect x="176" y="132" width="48" height="68" fill="#2a2018"/><rect x="198" y="132" width="4" height="68" fill="#8e4f36"/>' +
      /* sidewalk + a band out front: drum kit, guitar amp, keys */
      '<rect x="0" y="200" width="400" height="60" fill="#b4ada2"/>' +
      '<ellipse cx="200" cy="214" rx="20" ry="14" fill="' + GOLD + '" stroke="#5a4210" stroke-width="2.5"/><ellipse class="td-hit" cx="168" cy="196" rx="13" ry="4" fill="#e0c060"/><path d="M168 200v24" stroke="#777" stroke-width="2"/><ellipse class="td-hit td-hit2" cx="232" cy="192" rx="14" ry="4" fill="#e0c060"/><path d="M232 196v28" stroke="#777" stroke-width="2"/>' +
      '<rect x="80" y="196" width="40" height="34" rx="3" fill="#1b1d22"/><rect x="86" y="202" width="28" height="22" rx="2" fill="#3a3d44"/>' + Array.from({ length: 3 }, (_, i) => '<circle cx="' + (92 + i * 8) + '" cy="226" r="1.6" fill="#ddd"/>').join("") +
      '<rect x="280" y="204" width="70" height="8" rx="2" fill="#1b1d22"/><rect x="284" y="205" width="62" height="4" fill="#f4f4f4"/><path d="M290 212l-4 18M342 212l4 18" stroke="#555" stroke-width="3"/>' +
      note(140, 180, "", GOLD) + note(250, 176, "td-n2", PINK) + note(320, 184, "td-n3", TEAL) +
      '<rect x="0" y="246" width="400" height="14" fill="#3a3d44"/>',
      sky("td2", "#5a88b8", "#f2c98a"));
  }

  /* 3. North High: brick front, tall entry, marquee, snow */
  function tdnorth() {
    return svg(
      '<rect width="400" height="260" fill="url(#td3)"/>' +
      '<rect x="0" y="90" width="400" height="122" fill="#a35a3e"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (100 + i * 14) + 'h400" stroke="#8c4b32" stroke-width="1"/>').join("") +
      '<rect x="0" y="84" width="400" height="8" fill="#d9d2c4"/>' +
      Array.from({ length: 2 }, (_, r) => Array.from({ length: 12 }, (_, i) => (i > 4 && i < 7) ? "" : '<rect x="' + (12 + i * 33) + '" y="' + (102 + r * 44) + '" width="20" height="28" fill="' + ((i + r) % 5 ? "#33475a" : "#ffd98a") + '"/>').join("")).join("") +
      /* tall glass entry */
      '<rect x="166" y="54" width="68" height="158" fill="#1e2b38"/>' + Array.from({ length: 4 }, (_, i) => '<path d="M' + (166 + i * 17) + ' 54v158" stroke="#5c7488" stroke-width="2"/>').join("") + Array.from({ length: 6 }, (_, i) => '<path d="M166 ' + (70 + i * 24) + 'h68" stroke="#5c7488" stroke-width="2"/>').join("") +
      '<rect x="160" y="48" width="80" height="8" fill="#e8ecef"/>' +
      '<rect x="104" y="150" width="192" height="22" rx="2" fill="#1b1d22"/><text x="200" y="165.5" text-anchor="middle" ' + font + ' font-size="11.5" fill="#fff" letter-spacing="1.5">NORTH HIGH SCHOOL</text>' +
      /* marquee sign on the lawn */
      '<rect x="292" y="206" width="8" height="26" fill="#3b4048"/><rect x="342" y="206" width="8" height="26" fill="#3b4048"/><rect x="282" y="176" width="78" height="32" rx="3" fill="#111"/><text x="321" y="190" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">GO POLARS</text><text class="td-glow" x="321" y="202" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">CONCERT FRI</text>' +
      '<rect x="0" y="212" width="400" height="48" fill="#eef3f8"/><path d="M180 260l8 -48h24l8 48z" fill="#c9c2b4"/>' +
      [40, 110].map(x => '<rect x="' + (x - 3) + '" y="180" width="6" height="34" fill="#4a3424"/><path d="M' + (x - 18) + ' 184q18 -40 36 0z" fill="#3e4a3a"/><path d="M' + (x - 14) + ' 170q14 -28 28 0z" fill="#eef3f8" opacity=".8"/>').join("") +
      snow(28),
      sky("td3", "#3b4a6e", "#c9b7c8"));
  }

  /* 4. Flyte Tyme studio: the mixing desk, keys, gold records, meters */
  function tdflyte() {
    const gold = x => '<rect x="' + x + '" y="20" width="56" height="70" rx="2" fill="#2a1d14" stroke="#c9a24a" stroke-width="3"/><circle cx="' + (x + 28) + '" cy="48" r="20" fill="' + GOLD + '"/><circle cx="' + (x + 28) + '" cy="48" r="13" fill="none" stroke="#c9a24a" stroke-width="1"/><circle cx="' + (x + 28) + '" cy="48" r="5" fill="#2a1d14"/><rect x="' + (x + 10) + '" y="74" width="36" height="8" fill="#e8e0c8"/>';
    return svg(
      '<rect width="400" height="260" fill="#17141c"/>' +
      Array.from({ length: 9 }, (_, i) => Array.from({ length: 4 }, (_, j) => '<rect x="' + (8 + i * 44) + '" y="' + (8 + j * 30) + '" width="40" height="26" rx="3" fill="#221d29"/>').join("")).join("") +
      gold(30) + gold(100) + '<rect class="td-sh" x="100" y="28" width="8" height="40" fill="#fff" opacity=".5" transform="rotate(20 104 48)"/>' +
      '<rect x="230" y="24" width="150" height="40" rx="4" fill="#0e0b12" stroke="#3a3044" stroke-width="3"/><text x="305" y="51" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="' + PINK + '" letter-spacing="1.5">FLYTE TYME</text>' +
      /* meters */
      '<rect x="170" y="100" width="90" height="46" rx="3" fill="#0d0f14" stroke="#4a505c" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect class="td-mt ' + ["", "td-mt2", "td-mt3"][i % 3] + '" x="' + (178 + i * 11) + '" y="108" width="7" height="32" fill="' + (i < 5 ? TEAL : PINK) + '"/>').join("") +
      /* the desk */
      '<path d="M0 160h400v100h-400z" fill="#2c2733"/><path d="M14 166h372l12 36h-396z" fill="#3a3444"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (28 + i * 25) + '" y="172" width="3" height="24" fill="#14121a"/><rect class="td-fd ' + ["", "td-fd2", "td-fd3"][i % 3] + '" x="' + (22 + i * 25) + '" y="' + (176 + (i % 3) * 4) + '" width="15" height="6" rx="1" fill="' + (i % 5 ? "#c9ced6" : GOLD) + '"/>').join("") +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + (29.5 + i * 25) + '" cy="168" r="2.5" fill="' + (i % 2 ? PINK : TEAL) + '"/>').join("") +
      /* keyboard on the desk's edge */
      '<rect x="60" y="214" width="280" height="22" rx="3" fill="#1b1d22"/>' + Array.from({ length: 34 }, (_, i) => '<rect x="' + (64 + i * 8) + '" y="217" width="7" height="16" fill="#f4f4f4"/>').join("") +
      Array.from({ length: 34 }, (_, i) => ([1, 2, 4, 5, 6].includes(i % 7) ? '<rect x="' + (69 + i * 8) + '" y="217" width="4" height="10" fill="#111"/>' : "")).join("") +
      note(330, 130, "", GOLD) + note(350, 140, "td-n2", TEAL));
  }

  /* 5. Plymouth Av N and Penn Av N: green signs, THE TIME tagged, the skyline with the lit crown behind */
  function tdcorner() {
    const towers = [[166, 92, 34, "#4d5864"], [204, 70, 30, "#5f6b78"], [240, 44, 34, "#56616c"], [280, 80, 40, "#66717d"], [326, 60, 30, "#525d69"], [360, 96, 40, "#5f6b78"]].map(([x, y, w, c]) =>
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (180 - y) + '" fill="' + c + '"/>' +
      Array.from({ length: Math.floor((180 - y) / 14) * Math.floor(w / 10) }, (_, i) => (i % 3 ? "" : '<rect class="td-glow ' + (i % 2 ? "td-g2" : "") + '" x="' + (x + 4 + (i % Math.floor(w / 10)) * 10) + '" y="' + (y + 8 + Math.floor(i / Math.floor(w / 10)) * 14) + '" width="4" height="5" fill="#ffe2a0"/>')).join("")).join("") +
      /* the crown: an open lit ring on top of the tallest tower */
      '<rect x="248" y="30" width="18" height="14" fill="#56616c"/><ellipse class="td-glow" cx="257" cy="24" rx="16" ry="8" fill="none" stroke="#e8f4ff" stroke-width="3"/><rect x="255" y="8" width="4" height="10" fill="#aab4be"/>';
    const mirror = '<g class="td-fd"><ellipse cx="40" cy="70" rx="11" ry="14" fill="#cfe6ff" stroke="' + GOLD + '" stroke-width="3.5"/><rect x="37" y="83" width="6" height="18" rx="3" fill="' + GOLD + '"/><path d="M34 64q3 -6 8 -6" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#td5)"/>' + towers +
      '<rect x="0" y="180" width="400" height="80" fill="#3a3d44"/><path d="M0 220h400" stroke="#d8c25a" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="td-car"><rect x="0" y="196" width="76" height="18" rx="5" fill="' + PINK + '"/><path d="M12 196l12 -12h28l12 12z" fill="#a8305a"/><circle cx="16" cy="216" r="6" fill="#111"/><circle cx="60" cy="216" r="6" fill="#111"/></g>' +
      '<rect x="0" y="40" width="150" height="150" fill="#5a5f6a"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M0 ' + (52 + i * 16) + 'h150" stroke="#4c515b" stroke-width="1"/>').join("") +
      tag("THE TIME", 8, 148, 27, GOLD, -8) + tag("Morris Day", 20, 182, 20, PINK, -6) + mirror +
      '<g><circle class="td-sp" cx="132" cy="140" r="3" fill="' + GOLD + '"/><circle class="td-sp td-sp2" cx="138" cy="134" r="2" fill="' + GOLD + '"/></g>' +
      '<rect x="146" y="12" width="6" height="182" fill="#3b4048"/>' + sign(70, 12, 134, "Plymouth Av N") + sign(98, 38, 106, "Penn Av N"),
      sky("td5", "#1c1630", "#b8607a"));
  }

  window.SCENES = { tdstation, tdway, tdnorth, tdflyte, tdcorner };
})();
