/* willsmith scenes (Regions tab: Philadelphia; Wynnefield, West Philly). CSS classes prefixed ws- (the page's own anim-train is kept).
   1 Wynnefield Av on SEPTA Regional Rail's Cynwyd Line: the little high-level platform with its shelter, catenary poles, leafy Wynnefield, a silver Silverliner sliding in.
   2 Tustin Playground (Tustin Recreation Center) in Overbrook, "on the playground": the chain-link fence, the hoop, the court lines, the ball bouncing, porch-front twins behind.
   3 Men in Black: the headquarters is the real Brooklyn-Battery Tunnel ventilation building at the Battery in Lower Manhattan: the plain tan monolith with tall vent grilles, black sedans, a saucer zipping over the harbor at night.
   4 Our Lady of Lourdes in Overbrook, his Catholic grade school: the gray stone Gothic church with its square bell tower and stained glass, the brick school wing, the bell swinging.
   5 Wynnefield Ave and Bryn Mawr Ave by the station: green signs, WILL SMITH tagged on the stone wall, the Mann Center's big white pavilion roof glowing in West Fairmount Park behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wsglow{0%,100%{opacity:.45}50%{opacity:1}}.ws-glow{animation:wsglow 2.6s ease-in-out infinite}.ws-glow2{animation-delay:-1.3s}' +
    '@keyframes wsbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-46px)}}.ws-ball{animation:wsbounce .9s cubic-bezier(.4,0,.6,1) infinite}' +
    '@keyframes wsufo{0%{transform:translate(-80px,30px)}50%{transform:translate(220px,-10px)}100%{transform:translate(520px,20px)}}.ws-ufo{animation:wsufo 6s ease-in-out infinite}' +
    '@keyframes wsbeam{0%,100%{opacity:0}40%,60%{opacity:.5}}.ws-beam{animation:wsbeam 6s ease-in-out infinite}' +
    '@keyframes wscar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.ws-car{animation:wscar 8s linear infinite}' +
    '@keyframes wsbell{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.ws-bl{transform-box:fill-box;transform-origin:50% 0%;animation:wsbell 1.6s ease-in-out infinite}' +
    '@keyframes wsbird{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.ws-bird{animation:wsbird 14s linear infinite}' +
    '@keyframes wsspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ws-sp{animation:wsspray 1.4s ease-out infinite}.ws-sp2{animation-delay:.45s}' +
    '@keyframes wswave{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.ws-wave{animation:wswave 3s ease-in-out infinite}.ws-wave2{animation-delay:-1.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "ws-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#5a3e28"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const GOLD = "#f2c14e", BLUE = "#4fc3f7", ORANGE = "#ff7a45", RR = "#91456c";
  /* SEPTA Silverliner IV: stainless body, red and blue stripes */
  const silverliner = (x, y, len, cls) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="' + len + '" height="62" rx="6" fill="#c9ced4" stroke="#6b7178" stroke-width="2"/>' +
    Array.from({ length: Math.floor((len - 20) / 44) }, (_, i) => '<rect x="' + (x + 14 + i * 44) + '" y="' + (y + 9) + '" width="30" height="20" rx="2" fill="#1f2830"/>').join("") +
    '<rect x="' + x + '" y="' + (y + 36) + '" width="' + len + '" height="4" fill="#c8102e"/><rect x="' + x + '" y="' + (y + 42) + '" width="' + len + '" height="4" fill="#1f4e9a"/>' +
    '<rect x="' + (x + len - 20) + '" y="' + (y + 4) + '" width="20" height="56" rx="4" fill="#a3a9b0"/><circle cx="' + (x + len - 8) + '" cy="' + (y + 52) + '" r="3.5" fill="#fff6c2"/></g>';

  /* 1. Wynnefield Av station on the Cynwyd Line */
  function wsstation() {
    return svg(
      '<rect width="400" height="260" fill="url(#ws-s1)"/>' +
      '<g class="ws-bird"><path d="M0 34q5 -5 10 0q5 -5 10 0" fill="none" stroke="#3a3a3a" stroke-width="1.5"/></g>' +
      tree(30, 110, 1.7, "#3f7a3a") + tree(92, 104, 1.3, "#4f8c3e") + tree(300, 104, 1.4, "#3d7536") + tree(372, 110, 1.8, "#4a8a3e") +
      /* stone twin houses through the trees */
      '<rect x="120" y="70" width="70" height="56" fill="#9a8f80"/><path d="M116 70l39 -22l39 22z" fill="#4a3e3a"/><rect x="130" y="82" width="12" height="16" fill="#2c3440"/><rect x="168" y="82" width="12" height="16" fill="#2c3440"/>' +
      '<rect class="ws-glow" x="132" y="84" width="8" height="12" fill="#ffd98a" opacity=".4"/>' +
      '<path d="M0 104h400" stroke="#333" stroke-width="1.5"/>' + [60, 210, 350].map(x => '<rect x="' + (x - 2) + '" y="42" width="4" height="92" fill="#5a5f66"/><path d="M' + (x - 16) + ' 48h32" stroke="#5a5f66" stroke-width="3"/>').join("") +
      /* little platform shelter */
      '<path d="M226 92h120l-8 -12h-104z" fill="#3a3f48"/><rect x="232" y="92" width="4" height="40" fill="#5a5f66"/><rect x="334" y="92" width="4" height="40" fill="#5a5f66"/>' +
      '<rect x="244" y="62" width="150" height="26" rx="3" fill="#111"/><text x="254" y="81" ' + font + ' font-size="14" fill="#fff">Wynnefield Av</text>' + badge(356, 75, "RR", RR) +
      '<g class="anim-train">' + silverliner(20, 134, 330, "") + '<path d="M170 134l-10 -26h30" fill="none" stroke="#333" stroke-width="2"/></g>' +
      '<rect x="0" y="198" width="400" height="8" fill="#f2c200"/><rect x="0" y="206" width="400" height="54" fill="#9a958c"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52) + ' 206v54" stroke="#8a857c" stroke-width="1"/>').join(""),
      sky("ws-s1", "#9fd3f4", "#f6ecd6"));
  }

  /* 2. Tustin Playground, Overbrook */
  function wstustin() {
    let fence = "";
    for (let i = 0; i < 40; i++) fence += '<path d="M' + (i * 10) + ' 108l10 46M' + (i * 10 + 10) + ' 108l-10 46" stroke="#9aa3ab" stroke-width=".8" opacity=".8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ws-s2)"/>' +
      '<circle cx="340" cy="44" r="20" fill="#fff2b0"/>' +
      /* porch-front twins */
      [0, 1, 2, 3].map(i => { const x = 10 + i * 98; return '<rect x="' + x + '" y="58" width="90" height="56" fill="' + (i % 2 ? "#a0583e" : "#8e4a34") + '"/><path d="M' + (x - 4) + ' 58h98l-8 -12h-82z" fill="#4a3a36"/>' +
        '<rect x="' + (x + 10) + '" y="66" width="14" height="16" fill="#2c3440"/><rect x="' + (x + 38) + '" y="66" width="14" height="16" fill="#2c3440"/><rect x="' + (x + 66) + '" y="66" width="14" height="16" fill="#2c3440"/>' +
        '<rect x="' + x + '" y="92" width="90" height="4" fill="#e8e2d6"/>'; }).join("") +
      tree(60, 104, 1.4, "#4a8a3e") + tree(250, 100, 1.6, "#3f7a3a") +
      '<rect x="0" y="106" width="400" height="4" fill="#7d868e"/>' + fence + '<rect x="0" y="152" width="400" height="3" fill="#7d868e"/>' +
      [40, 140, 260, 360].map(x => '<rect x="' + (x - 1.5) + '" y="104" width="3" height="52" fill="#6d767e"/>').join("") +
      '<rect x="18" y="118" width="108" height="20" rx="2" fill="#1c5a8a" stroke="#fff" stroke-width="1.5"/><text x="72" y="132" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">TUSTIN PLAYGROUND</text>' +
      /* court */
      '<path d="M0 156h400v104H0z" fill="#2f7a54"/><path d="M0 156h400" stroke="#fff" stroke-width="2"/>' +
      '<path d="M120 260q80 -86 160 0" fill="none" stroke="#fff" stroke-width="2.5"/><rect x="170" y="196" width="60" height="64" fill="#c8572e" stroke="#fff" stroke-width="2.5"/>' +
      '<ellipse cx="200" cy="196" rx="30" ry="9" fill="none" stroke="#fff" stroke-width="2"/>' +
      /* hoop */
      '<rect x="196" y="120" width="8" height="78" fill="#3a3f44"/><rect x="164" y="100" width="72" height="44" fill="#f4f4f0" stroke="#555" stroke-width="2"/>' +
      '<rect x="186" y="116" width="28" height="20" fill="none" stroke="' + ORANGE + '" stroke-width="2"/>' +
      '<ellipse cx="200" cy="146" rx="15" ry="3.5" fill="none" stroke="' + ORANGE + '" stroke-width="3"/>' +
      '<path d="M186 147l4 16M193 148l2 16M200 149v16M207 148l-2 16M214 147l-4 16M188 156h24" stroke="#fff" stroke-width="1"/>' +
      '<g class="ws-ball"><circle cx="276" cy="226" r="11" fill="#e8742a" stroke="#5a2a10" stroke-width="1.5"/><path d="M265 226h22M276 215v22M268 218q8 8 0 16M284 218q-8 8 0 16" fill="none" stroke="#5a2a10" stroke-width="1.2"/></g>' +
      '<ellipse cx="276" cy="240" rx="10" ry="2.5" fill="#000" opacity=".25"/>',
      sky("ws-s2", "#7cc4f0", "#f4e6c8"));
  }

  /* 3. The Men in Black headquarters: the Battery's tunnel ventilation building */
  function wsmib() {
    let grill = "";
    for (let i = 0; i < 14; i++) grill += '<rect x="' + (128 + i * 11) + '" y="96" width="6" height="74" fill="#6e6656"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ws-s3)"/>' + stars(22) +
      /* Lower Manhattan towers behind */
      '<rect x="0" y="84" width="40" height="96" fill="#1d2236"/><rect x="40" y="60" width="34" height="120" fill="#232a40"/><rect x="330" y="70" width="40" height="110" fill="#232a40"/><rect x="370" y="92" width="30" height="88" fill="#1d2236"/>' +
      Array.from({ length: 16 }, (_, i) => '<rect class="' + (i % 3 ? "" : "ws-glow") + '" x="' + ([6, 18, 46, 58, 336, 350, 376, 386][i % 8]) + '" y="' + (90 + Math.floor(i / 8) * 26 + (i % 2) * 10) + '" width="5" height="6" fill="#ffd98a" opacity=".6"/>').join("") +
      /* the ventilation building */
      '<rect x="110" y="66" width="180" height="114" fill="#b9ac90"/><rect x="110" y="66" width="180" height="10" fill="#a8997c"/>' +
      '<rect x="122" y="90" width="156" height="84" fill="#9c8f74"/>' + grill +
      '<rect x="182" y="150" width="36" height="30" fill="#2a2a2a"/><rect x="186" y="154" width="28" height="26" fill="#3d3d3d"/>' +
      '<rect class="ws-glow" x="188" y="156" width="24" height="3" fill="#bfe6ff" opacity=".6"/>' +
      /* the saucer + its beam */
      '<g class="ws-ufo"><path d="M60 52l-14 60h28z" class="ws-beam" fill="#bfe6ff"/><ellipse cx="60" cy="48" rx="26" ry="7" fill="#9aa4b0" stroke="#3a4048" stroke-width="1.5"/><path d="M46 46q14 -18 28 0z" fill="#bfe6ff" opacity=".8"/>' +
      '<circle cx="44" cy="50" r="1.8" fill="#ffe36a"/><circle cx="56" cy="52" r="1.8" fill="#ffe36a"/><circle cx="68" cy="52" r="1.8" fill="#ffe36a"/><circle cx="78" cy="49" r="1.8" fill="#ffe36a"/></g>' +
      /* plaza + harbor + sedans */
      '<rect x="0" y="180" width="400" height="80" fill="#3a3a40"/><rect x="0" y="180" width="400" height="5" fill="#55555c"/>' +
      '<rect x="0" y="232" width="400" height="28" fill="#13304a"/><path class="ws-wave" d="M0 240q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" fill="none" stroke="#4f86b0" stroke-width="1.5"/>' +
      '<path class="ws-wave ws-wave2" d="M-20 250q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" fill="none" stroke="#3a6c94" stroke-width="1.5"/>' +
      [70, 236].map(x => '<g><rect x="' + x + '" y="200" width="88" height="20" rx="5" fill="#0c0c0e"/><path d="M' + (x + 18) + ' 200l10 -12h34l10 12z" fill="#0c0c0e"/><rect x="' + (x + 30) + '" y="190" width="14" height="9" fill="#2a3440"/><rect x="' + (x + 48) + '" y="190" width="12" height="9" fill="#2a3440"/>' +
        '<circle cx="' + (x + 18) + '" cy="221" r="7" fill="#222"/><circle cx="' + (x + 70) + '" cy="221" r="7" fill="#222"/><circle cx="' + (x + 85) + '" cy="208" r="2.5" fill="#fff6c2"/></g>').join(""),
      sky("ws-s3", "#060a1c", "#2a3460"));
  }

  /* 4. Our Lady of Lourdes, Overbrook: his Catholic grade school and the gray stone Gothic church with its square bell tower */
  function wslourdes() {
    return svg(
      '<rect width="400" height="260" fill="url(#ws-s4)"/>' +
      '<g class="ws-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" fill="none" stroke="#3a3a3a" stroke-width="1.5"/></g>' +
      tree(26, 150, 1.8, "#3f7a3a") + tree(378, 150, 1.7, "#4a8a3e") +
      /* the church: nave + square bell tower */
      '<rect x="150" y="96" width="150" height="90" fill="#8f8b84"/><path d="M146 96l79 -40l79 40z" fill="#4a4a52"/>' +
      Array.from({ length: 4 }, (_, i) => '<path d="M' + (166 + i * 34) + ' 170v-46q8 -14 16 0v46z" fill="#3a4a6a"/><path class="ws-glow' + (i % 2 ? " ws-glow2" : "") + '" d="M' + (168 + i * 34) + ' 168v-42q6 -10 12 0v42z" fill="' + ["#c8463a", "#3a6ac8", "#e8b43a", "#3a9a5a"][i] + '" opacity=".55"/>').join("") +
      '<circle cx="225" cy="80" r="11" fill="#3a4a6a" stroke="#6e6a64" stroke-width="3"/><path d="M225 69v22M214 80h22" stroke="#6e6a64" stroke-width="2"/>' +
      '<rect x="92" y="54" width="54" height="132" fill="#85817a"/><path d="M88 54h62v-8h-62z" fill="#6e6a64"/>' + [92, 104, 116, 128, 140].map(x => '<rect x="' + x + '" y="38" width="7" height="9" fill="#6e6a64"/>').join("") +
      '<path d="M108 108v-26q11 -16 22 0v26z" fill="#2a2a32"/>' +
      '<g class="ws-bl"><path d="M113 84q6 -8 12 0l2 18h-16z" fill="' + GOLD + '"/><circle cx="119" cy="104" r="2.5" fill="' + GOLD + '"/></g>' +
      '<path d="M108 150v-28q11 -16 22 0v28z" fill="#3a4a6a"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M92 ' + (64 + i * 10) + 'h54M150 ' + (106 + (i % 8) * 10) + 'h150" stroke="#7a766f" stroke-width=".8"/>').join("") +
      /* the school: low brick wing */
      '<rect x="300" y="122" width="74" height="64" fill="#9a5a40"/><rect x="300" y="116" width="74" height="7" fill="#6a3a2a"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (308 + (i % 3) * 22) + '" y="' + (130 + Math.floor(i / 3) * 24) + '" width="14" height="14" fill="#2c3440" stroke="#e8e2d6" stroke-width="1.5"/>').join("") +
      '<path d="M190 186v-20h70v20" fill="#5a3a2a"/><path d="M208 186v-16q17 -14 34 0v16z" fill="#3a2418"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#6e6a64"/><rect x="0" y="186" width="400" height="6" fill="#8a857c"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#4a4844"/><path d="M0 245h400" stroke="#e8d23a" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="ws-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + ORANGE + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + ORANGE + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>',
      sky("ws-s4", "#86c6f0", "#fbe4c6"));
  }

  /* 5. Wynnefield Ave and Bryn Mawr Ave */
  function wscorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ws-s5)"/>' + stars(16) +
      /* the Mann Center in West Fairmount Park: the big white fan-shaped pavilion roof, stage lights glowing under it, trees around */
      '<path d="M70 140q130 -90 260 0z" fill="#1e3a26"/>' +
      '<path d="M96 118L200 70L304 118L290 124L200 86L110 124z" fill="#e8ecf2"/><path d="M110 124L200 86L290 124z" fill="#c8ced8"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M200 72L' + (110 + i * 30) + ' 123" stroke="#aab2be" stroke-width="1"/>').join("") +
      '<rect x="120" y="124" width="160" height="16" fill="#2a2440"/>' +
      [140, 170, 200, 230, 260].map((x, i) => '<path class="ws-glow' + (i % 2 ? " ws-glow2" : "") + '" d="M' + x + ' 126l-10 14h20z" fill="' + [GOLD, BLUE, ORANGE, BLUE, GOLD][i] + '" opacity=".6"/>').join("") +
      [112, 288].map(x => '<rect x="' + (x - 2) + '" y="112" width="4" height="28" fill="#c8ced8"/>').join("") +
      tree(26, 140, 1.8, "#1e3a26") + tree(370, 136, 1.9, "#1e3a26") +
      /* fieldstone wall */
      '<rect x="0" y="146" width="400" height="80" fill="#7c7466"/>' +
      Array.from({ length: 30 }, (_, i) => '<ellipse cx="' + ((i * 47) % 400 + 10) + '" cy="' + (154 + (i * 13) % 64) + '" rx="' + (10 + (i % 3) * 4) + '" ry="6" fill="none" stroke="#5e584c" stroke-width="1.2"/>').join("") +
      tag("WILL SMITH", 14, 196, 42, GOLD, -6) + tag("BIG WILLIE", 262, 186, 18, BLUE, -4) + tag("GETTIN' JIGGY", 20, 220, 18, "#fff", -3) + tag("WYNNEFIELD", 204, 214, 19, ORANGE, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="ws-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + BLUE + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + BLUE + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="384" y="98" width="6" height="128" fill="#2f2f2f"/>' + sign(282, 100, 112, "Wynnefield Av") + sign(292, 126, 102, "Bryn Mawr Av") +
      '<g class="ws-sp"><circle cx="196" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="ws-sp ws-sp2"><circle cx="202" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("ws-s5", "#0c1030", "#5a3a6a"));
  }

  window.SCENES = { wsstation: wsstation, wstustin: wstustin, wsmib: wsmib, wslourdes: wslourdes, wscorner: wscorner };
})();
