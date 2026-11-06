/* lildicky scenes (Regions tab: Philadelphia; Cheltenham / Elkins Park, just outside the city). CSS classes prefixed ld- (the page's own anim-train is kept).
   1 Elkins Park on SEPTA Regional Rail: the old stone station house, the wires overhead, a silver Silverliner sliding in.
   2 Beth Sholom Synagogue on Old York Road (Frank Lloyd Wright, 1959): the glowing translucent pyramid, the copper-and-glass "mountain of light".
   3 Cheltenham High School in Wyncote: the long brick school, the glass entrance, the flag waving, a ball bouncing on the court.
   4 The University of Richmond ("I was undergrad down there in Richmond"): the Gothic stone Boatwright tower over Westhampton Lake.
   5 Old York Rd and Church Rd, Elkins Park: green signs, LIL DICKY tagged on the wall, the white columns of Lynnewood Hall behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ldglow{0%,100%{opacity:.45}50%{opacity:1}}.ld-glow{animation:ldglow 2.6s ease-in-out infinite}.ld-glow2{animation-delay:-1.3s}' +
    '@keyframes ldflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.ld-flag{transform-box:fill-box;transform-origin:0 50%;animation:ldflag 1.4s ease-in-out infinite}' +
    '@keyframes ldball{0%,100%{transform:translateY(0)}50%{transform:translateY(-26px)}}.ld-ball{animation:ldball .8s ease-in infinite}' +
    '@keyframes ldripple{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.ld-rip{animation:ldripple 3s ease-in-out infinite}.ld-rip2{animation-delay:-1.5s}' +
    '@keyframes ldduck{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.ld-duck{animation:ldduck 16s linear infinite}' +
    '@keyframes ldleaf{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(30px,120px) rotate(220deg);opacity:0}}.ld-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:ldleaf 4s linear infinite}.ld-l2{animation-delay:-1.4s}.ld-l3{animation-delay:-2.7s}' +
    '@keyframes ldcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.ld-car{animation:ldcar 7.5s linear infinite}' +
    '@keyframes ldspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ld-sp{animation:ldspray 1.4s ease-out infinite}.ld-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "ld-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#5a3e28"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const YEL = "#ffd23f", SKY = "#3ec7ff", PINK = "#ff6b9a", RR = "#91456c";

  /* 1. Elkins Park station: the old gray fieldstone station house with its steep slate roof, the low platform, catenary wires, a stainless Silverliner with red and blue stripes sliding in */
  function ldstation() {
    const tr = '<g class="anim-train"><rect x="20" y="132" width="330" height="70" rx="6" fill="#c9ced4" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 44) + '" y="142" width="30" height="22" rx="2" fill="#1f2830"/>').join("") +
      '<rect x="20" y="170" width="330" height="4" fill="#c8102e"/><rect x="20" y="176" width="330" height="4" fill="#1f4e9a"/>' +
      Array.from({ length: 30 }, (_, i) => '<path d="M' + (24 + i * 11) + ' 182v18" stroke="#b4b9c0" stroke-width="1"/>').join("") +
      '<rect x="330" y="136" width="20" height="64" rx="4" fill="#a3a9b0"/><circle cx="342" cy="190" r="3.5" fill="#fff6c2"/><path d="M170 132l-10 -26h30" fill="none" stroke="#333" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ld-s1)"/>' +
      tree(20, 110, 1.4, "#3f7a3a") + tree(380, 106, 1.5, "#356c32") +
      '<path d="M0 104h400" stroke="#333" stroke-width="1.5"/>' + [60, 200, 340].map(x => '<rect x="' + (x - 2) + '" y="40" width="4" height="96" fill="#5a5f66"/><path d="M' + (x - 16) + ' 46h32" stroke="#5a5f66" stroke-width="3"/>').join("") +
      '<path d="M110 92l46 -52 46 52z" fill="#3e4652"/><rect x="118" y="92" width="76" height="40" fill="#9a958a"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (120 + (i % 4) * 18 + (Math.floor(i / 4) % 2) * 8) + '" y="' + (94 + Math.floor(i / 4) * 12) + '" width="14" height="9" rx="2" fill="#a8a296" stroke="#857f72" stroke-width=".8"/>').join("") +
      '<rect x="136" y="104" width="14" height="20" fill="#2c3440"/><rect x="162" y="104" width="14" height="20" fill="#2c3440"/><rect class="ld-glow" x="138" y="106" width="10" height="16" fill="#ffd98a" opacity=".5"/>' +
      tr +
      '<rect x="0" y="204" width="400" height="8" fill="#f2c200"/><rect x="0" y="212" width="400" height="48" fill="#9a958c"/>' +
      '<rect x="226" y="60" width="160" height="30" rx="3" fill="#111"/><text x="240" y="81" ' + font + ' font-size="16" fill="#fff">Elkins Park</text>' + badge(338, 75, "RR", RR) +
      '<g class="ld-leaf"><ellipse cx="240" cy="40" rx="4" ry="2" fill="#e8a33a"/></g><g class="ld-leaf ld-l2"><ellipse cx="90" cy="30" rx="4" ry="2" fill="#d2692a"/></g><g class="ld-leaf ld-l3"><ellipse cx="300" cy="20" rx="4" ry="2" fill="#e8c43a"/></g>',
      sky("ld-s1", "#a6d4f2", "#f3ead8"));
  }

  /* 2. Beth Sholom Synagogue: the translucent pyramid roof glowing from inside, the copper-colored ridge beams, the triangular concrete base, the lawn and Old York Road at dusk */
  function ldsynagogue() {
    return svg(
      '<rect width="400" height="260" fill="url(#ld-s2)"/>' + stars(12) +
      tree(30, 196, 1.6, "#2f5a34") + tree(372, 196, 1.6, "#2a5230") +
      '<path class="ld-glow" d="M200 30L310 178H90z" fill="#fff1c4" opacity=".55"/>' +
      '<path d="M200 30L310 178H90z" fill="url(#ld-pyr)" opacity=".9"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (90 + i * 36.6) + ' 178L200 30" stroke="#d4dbe2" stroke-width="1" opacity=".6"/>').join("") +
      Array.from({ length: 5 }, (_, i) => { const y = 60 + i * 24; const hw = (y - 30) / 148 * 110; return '<path d="M' + (200 - hw).toFixed(1) + ' ' + y + 'H' + (200 + hw).toFixed(1) + '" stroke="#c9d2da" stroke-width="1" opacity=".7"/>'; }).join("") +
      '<path d="M200 30L90 178M200 30L310 178M200 30V178" stroke="#b5733a" stroke-width="5"/>' +
      '<path d="M200 18v14" stroke="#b5733a" stroke-width="3"/>' +
      '<path d="M70 178h260l-30 24H100z" fill="#cfc8b8"/><path d="M100 202h200v8H100z" fill="#b5ad9b"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (120 + i * 40) + ' 186l10 12l10 -12" fill="none" stroke="#a89e88" stroke-width="2"/>').join("") +
      '<rect x="0" y="210" width="400" height="26" fill="#3f6a34"/><rect x="0" y="236" width="400" height="24" fill="#55524c"/>' +
      '<g class="ld-car"><rect x="0" y="242" width="58" height="12" rx="5" fill="' + SKY + '"/><rect x="12" y="235" width="32" height="9" rx="3" fill="' + SKY + '"/><circle cx="12" cy="255" r="4" fill="#111"/><circle cx="46" cy="255" r="4" fill="#111"/></g>',
      sky("ld-s2", "#1f2a52", "#d88a5a") + '<linearGradient id="ld-pyr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6f2e6"/><stop offset="1" stop-color="#dfe6ec"/></linearGradient>');
  }

  /* 3. Cheltenham High School in Wyncote: the long red-brick school, white trim, the glass entrance, the flag waving, a basketball bouncing on the court out front */
  function ldschool() {
    return svg(
      '<rect width="400" height="260" fill="url(#ld-s3)"/>' +
      tree(16, 150, 1.5, "#3f7a3a") + tree(386, 150, 1.5, "#3f7a3a") +
      '<rect x="30" y="90" width="340" height="80" fill="#9a4a36"/><rect x="30" y="84" width="340" height="8" fill="#e8e2d6"/>' +
      Array.from({ length: 10 }, (_, i) => i === 4 || i === 5 ? "" : '<rect x="' + (42 + i * 33) + '" y="102" width="22" height="22" fill="#2c3a48"/><rect x="' + (42 + i * 33) + '" y="134" width="22" height="22" fill="#2c3a48"/>').join("") +
      '<rect x="168" y="70" width="64" height="100" fill="#7fa8c4"/>' + Array.from({ length: 4 }, (_, i) => '<path d="M' + (168 + i * 16) + ' 70v100" stroke="#e8e2d6" stroke-width="2"/>').join("") + '<path d="M168 110h64M168 140h64" stroke="#e8e2d6" stroke-width="2"/>' +
      '<rect x="162" y="64" width="76" height="8" fill="#e8e2d6"/>' +
      '<rect x="110" y="172" width="180" height="16" rx="2" fill="#e8e2d6"/><text x="200" y="184" text-anchor="middle" ' + font + ' font-size="10" fill="#7a2a1e">CHELTENHAM HIGH SCHOOL</text>' +
      '<rect x="318" y="30" width="3" height="60" fill="#888"/><g class="ld-flag"><rect x="321" y="30" width="30" height="18" fill="#c8102e"/>' + [0, 1, 2].map(i => '<rect x="321" y="' + (33 + i * 6) + '" width="30" height="2.5" fill="#fff"/>').join("") + '<rect x="321" y="30" width="12" height="10" fill="#1f3a8a"/></g>' +
      '<rect x="0" y="188" width="400" height="72" fill="#4a7a3f"/><rect x="60" y="200" width="200" height="52" fill="#c46a3a"/><path d="M60 226h200M160 200v52" stroke="#fff" stroke-width="2"/><circle cx="160" cy="226" r="10" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<rect x="66" y="208" width="3" height="30" fill="#ddd"/><rect x="62" y="206" width="12" height="8" fill="#fff" stroke="#999"/>' +
      '<g class="ld-ball"><circle cx="110" cy="230" r="6" fill="#e8742a"/><path d="M104 230h12M110 224v12" stroke="#7a3a10" stroke-width="1"/></g>',
      sky("ld-s3", "#8ccaf0", "#f4ecd8"));
  }

  /* 4. The University of Richmond: the Gothic tan-stone Boatwright tower with its pointed windows, the bridge over Westhampton Lake, ripples and a duck drifting by */
  function ldrichmond() {
    return svg(
      '<rect width="400" height="260" fill="url(#ld-s4)"/>' +
      tree(40, 150, 1.8, "#3f7a3a") + tree(90, 156, 1.4, "#356c32") + tree(330, 150, 1.8, "#3f7a3a") + tree(372, 156, 1.4, "#2f6030") +
      '<rect x="130" y="100" width="150" height="56" fill="#c9a77e"/><path d="M130 100l14 -14h122l14 14z" fill="#5a5a62"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (142 + i * 28) + ' 150v-28l7 -10l7 10v28z" fill="#3a4450"/>').join("") +
      '<rect x="184" y="24" width="42" height="132" fill="#cfae84"/><path d="M180 24h50v-6h-50z" fill="#b8956a"/>' +
      [180, 196, 212, 226].map(x => '<path d="M' + x + ' 18l2 -12l2 12z" fill="#b8956a"/>').join("") +
      '<path d="M196 70v-20l9 -12l9 12v20z" fill="#3a4450"/><path d="M196 110v-24l9 -10l9 10v24z" fill="#3a4450"/><circle cx="205" cy="128" r="6" fill="#f2efe6" stroke="#6a5a40"/>' +
      '<rect x="0" y="156" width="400" height="104" fill="#4c7f96"/>' +
      '<path d="M120 170q85 -26 170 0" fill="none" stroke="#cfae84" stroke-width="8"/><path d="M120 174h170" stroke="#b8956a" stroke-width="3"/>' +
      [150, 205, 260].map(x => '<path d="M' + (x - 12) + ' 174q12 18 24 0" fill="#3e6a80"/>').join("") +
      '<g class="ld-rip"><path d="M20 200h70M170 214h80M300 206h70M60 238h90M240 244h100" stroke="#a9d3e2" stroke-width="2" stroke-linecap="round" opacity=".7"/></g>' +
      '<g class="ld-rip ld-rip2"><path d="M110 226h50M320 228h50M10 252h50" stroke="#cfe8f0" stroke-width="1.5" stroke-linecap="round" opacity=".6"/></g>' +
      '<g class="ld-duck"><ellipse cx="0" cy="222" rx="12" ry="6" fill="#7a5a3a"/><circle cx="10" cy="214" r="5" fill="#2f6a3a"/><path d="M14 214l6 1l-6 2z" fill="#f2b23a"/></g>',
      sky("ld-s4", "#9fd0f2", "#f4ead8"));
  }

  /* 5. Old York Rd and Church Rd, Elkins Park: green signs, LIL DICKY tagged on the brick wall, the white Corinthian columns of Lynnewood Hall glowing on the hill behind */
  function ldcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ld-s5)"/>' + stars(14) +
      tree(30, 120, 1.6, "#24402a") + tree(360, 116, 1.8, "#24402a") +
      '<rect x="100" y="76" width="200" height="60" fill="#e6e0d2"/><path d="M150 76l50 -24l50 24z" fill="#d8d0be"/><rect x="96" y="70" width="208" height="8" fill="#d8d0be"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (156 + i * 18) + '" y="78" width="7" height="58" fill="#f6f2ea"/>').join("") +
      Array.from({ length: 4 }, (_, i) => '<rect class="ld-glow' + (i % 2 ? " ld-glow2" : "") + '" x="' + (108 + (i % 2) * 22 + (i > 1 ? 160 : 0)) + '" y="90" width="12" height="18" fill="#ffd98a" opacity=".6"/>').join("") +
      '<rect x="0" y="136" width="400" height="88" fill="#8a4a36"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#7a3e2c" stroke-width="1"/>').join("") +
      tag("LIL DICKY", 18, 194, 44, YEL, -6) + tag("LD", 262, 190, 34, SKY, -4) + tag("HONESTLY", 30, 218, 18, "#fff", -3) + tag("BRAIN", 200, 216, 18, PINK, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="ld-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + PINK + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + PINK + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="346" y="98" width="6" height="126" fill="#2f2f2f"/>' + sign(298, 100, 100, "Old York Rd") + sign(304, 126, 88, "Church Rd") +
      '<g class="ld-sp"><circle cx="180" cy="166" r="3" fill="' + YEL + '" opacity=".7"/></g><g class="ld-sp ld-sp2"><circle cx="186" cy="160" r="2" fill="' + YEL + '" opacity=".6"/></g>',
      sky("ld-s5", "#141a3a", "#7a4a8a"));
  }

  window.SCENES = { ldstation: ldstation, ldsynagogue: ldsynagogue, ldschool: ldschool, ldrichmond: ldrichmond, ldcorner: ldcorner };
})();
