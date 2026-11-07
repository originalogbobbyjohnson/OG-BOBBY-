/* megantheestallion scenes (Regions tab: Houston + Texas; South Park, Houston). CSS classes prefixed mg- (the page's own anim-train is kept).
   1 TSU/UH Athletics District on the METRORail Purple Line: the at-grade island platform on Scott St, live oaks and low campus brick behind, the light-rail car gliding in.
   2 Texas Southern University (where she earned her degree in 2021): red-brick hall with white columns and a white cupola, maroon and gray banners, grad caps flying.
   3 Pearland (she lived there from 14 to 18, Pearland High): the white water tower over the town, a pumpjack nodding, Friday-night stadium lights.
   4 RodeoHouston at NRG Stadium (she headlined the rodeo in 2023): the dirt arena, the star-shaped stage, spotlights sweeping, a stallion running.
   5 MLK Blvd and Van Fleet St in South Park: green signs, MEGAN tagged on the brick, the Texas Medical Center towers lit up behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mgflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.mg-flk{animation:mgflick 2.2s infinite}.mg-flk2{animation-delay:.7s}' +
    '@keyframes mgblink{0%,100%{opacity:.3}50%{opacity:1}}.mg-bl{animation:mgblink 1.6s ease-in-out infinite}.mg-bl2{animation-delay:-.8s}' +
    '@keyframes mgcap{0%{transform:translate(0,0) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(10px,-90px) rotate(200deg);opacity:0}}.mg-cap{animation:mgcap 2.8s ease-out infinite;transform-box:fill-box;transform-origin:center}.mg-c2{animation-delay:-.9s}.mg-c3{animation-delay:-1.8s}' +
    '@keyframes mgpump{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.mg-pump{animation:mgpump 2.4s ease-in-out infinite;transform-box:view-box;transform-origin:300px 168px}' +
    '@keyframes mgrun{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.mg-run{animation:mgrun 6s linear infinite}' +
    '@keyframes mggallop{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.mg-gal{animation:mggallop .4s ease-in-out infinite}' +
    '@keyframes mgsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.mg-sw{animation:mgsweep 4s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 0}.mg-sw2{animation-delay:-2s}' +
    '@keyframes mgspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.mg-spin{animation:mgspin 14s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes mgflag{0%,100%{transform:skewY(0)}50%{transform:skewY(4deg)}}.mg-flag{animation:mgflag 1.8s ease-in-out infinite;transform-box:fill-box;transform-origin:0 50%}' +
    '@keyframes mgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mg-sp{animation:mgspray 1.4s ease-out infinite}.mg-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const oak = (x, base, s) => '<g><rect x="' + (x - 3 * s) + '" y="' + (base - 26 * s) + '" width="' + (6 * s) + '" height="' + (26 * s) + '" fill="#4a3526"/>' +
    '<ellipse cx="' + x + '" cy="' + (base - 34 * s) + '" rx="' + (30 * s) + '" ry="' + (16 * s) + '" fill="#2f5a34"/><ellipse cx="' + (x - 14 * s) + '" cy="' + (base - 40 * s) + '" rx="' + (16 * s) + '" ry="' + (11 * s) + '" fill="#3a6b3e"/><ellipse cx="' + (x + 14 * s) + '" cy="' + (base - 42 * s) + '" rx="' + (15 * s) + '" ry="' + (10 * s) + '" fill="#356340"/></g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "mg-bl" + (i % 2 ? " mg-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const RED = "#ff3b2f", GOLD = "#ffd23f", PURP = "#7a2c8e", MAROON = "#7a1f2b", GRAY = "#9aa0a6";

  /* 1. TSU/UH Athletics District, METRORail Purple Line (at-grade, Scott St) */
  function mgstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="122" width="36" height="24" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><path d="M24 182V120q0 -12 14 -12h300q24 0 30 30v44z" fill="#e9ecef" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="24" y="154" width="344" height="7" fill="' + PURP + '"/><rect x="24" y="163" width="344" height="3" fill="#1f3c88"/>' +
      '<path d="M340 112q22 4 26 30h-26z" fill="#1c2630"/><circle cx="356" cy="174" r="3.5" fill="#fff6c2"/>' +
      '<rect x="200" y="98" width="70" height="10" fill="#8a939b"/><path d="M210 98l25 -26l25 26" stroke="#555" stroke-width="2" fill="none"/>' +
      '<rect x="40" y="110" width="96" height="10" rx="2" fill="#111"/><text x="88" y="118" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">PURPLE · PALM CENTER</text></g>';
    const campus = '<rect x="10" y="64" width="110" height="34" fill="#9c4a36"/><rect x="150" y="56" width="120" height="42" fill="#a65540"/><rect x="300" y="66" width="90" height="32" fill="#8e4433"/>' +
      [16, 34, 52, 70, 88, 104, 158, 176, 194, 212, 230, 248, 308, 326, 344, 362].map((x, i) => '<rect x="' + x + '" y="' + (i > 5 && i < 12 ? 64 : 72) + '" width="8" height="10" fill="' + (i % 4 ? "#2a1a14" : "#ffd98a") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mgs1)"/>' + campus +
      oak(30, 104, 1) + oak(140, 104, 0.9) + oak(285, 104, 1) + oak(380, 104, 0.9) +
      '<path d="M0 66h400" stroke="#333" stroke-width="1.5"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="60" width="6" height="128" fill="#7a8088"/>').join("") +
      '<path d="M0 50h400v14h-400z" fill="#c9cdd2"/><rect x="0" y="60" width="400" height="4" fill="' + PURP + '"/>' +
      train +
      '<rect x="0" y="186" width="400" height="8" fill="#f2c200"/><rect x="0" y="194" width="400" height="66" fill="#b3ada2"/><path d="M0 226h400" stroke="#9a948a" stroke-width="2"/>' +
      '<rect x="18" y="202" width="364" height="40" rx="3" fill="#111"/><text x="30" y="227" ' + font + ' font-size="15" fill="#fff">TSU/UH Athletics District</text>' + badge(296, 222, "PURPLE", PURP),
      sky("mgs1", "#5d8fd0", "#f6c8a0"));
  }

  /* 2. Texas Southern University: red brick, white columns, white cupola, maroon and gray */
  function mgtsu() {
    const cols = Array.from({ length: 6 }, (_, i) => '<rect x="' + (148 + i * 22) + '" y="120" width="10" height="66" fill="#f4f1e8"/><rect x="' + (145 + i * 22) + '" y="116" width="16" height="5" fill="#e6e1d4"/>').join("");
    const win = (x) => [0, 1].map(r => [0, 1, 2].map(c => '<rect x="' + (x + c * 22) + '" y="' + (118 + r * 34) + '" width="12" height="20" fill="' + ((r + c) % 3 ? "#26303a" : "#ffe2a0") + '" stroke="#f4f1e8" stroke-width="2"/>').join("")).join("");
    const caps = [0, 1, 2, 3, 4].map(i => '<g class="mg-cap' + (i % 3 ? " mg-c" + (i % 3 + 1) : "") + '"><path d="M' + (90 + i * 54) + ' ' + (196 - (i % 2) * 6) + 'l14 -6l14 6l-14 6z" fill="#111"/><path d="M' + (104 + i * 54) + ' ' + (196 - (i % 2) * 6) + 'v6" stroke="' + [MAROON, GRAY, GOLD, MAROON, GRAY][i] + '" stroke-width="2"/></g>').join("");
    const grads = Array.from({ length: 9 }, (_, i) => '<g><circle cx="' + (40 + i * 40) + '" cy="212" r="6" fill="#6b4532"/><path d="M' + (30 + i * 40) + ' 236q0 -18 10 -18q10 0 10 18z" fill="' + (i % 2 ? MAROON : "#222") + '"/><path d="M' + (32 + i * 40) + ' 206l8 -4l8 4l-8 4z" fill="#111"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mgs2)"/>' + stars(8) +
      '<rect x="40" y="104" width="320" height="86" fill="#a5452f"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M40 ' + (112 + i * 8) + 'h320" stroke="#00000022"/>').join("") +
      '<path d="M134 116l66 -26l66 26z" fill="#f4f1e8"/><rect x="134" y="112" width="132" height="8" fill="#e6e1d4"/>' + cols +
      win(56) + win(282) +
      '<rect x="180" y="54" width="40" height="36" fill="#f4f1e8"/><path d="M176 56q24 -28 48 0z" fill="#e6e1d4"/><rect x="198" y="16" width="4" height="22" fill="#e6e1d4"/>' +
      '<rect x="188" y="62" width="8" height="18" rx="4" fill="#26303a"/><rect x="204" y="62" width="8" height="18" rx="4" fill="#26303a"/>' +
      '<g class="mg-flag"><rect x="62" y="80" width="20" height="30" fill="' + MAROON + '"/><rect x="62" y="80" width="20" height="5" fill="' + GRAY + '"/></g><g class="mg-flag"><rect x="318" y="80" width="20" height="30" fill="' + GRAY + '"/><rect x="318" y="80" width="20" height="5" fill="' + MAROON + '"/></g>' +
      '<rect x="60" y="78" width="2" height="34" fill="#555"/><rect x="316" y="78" width="2" height="34" fill="#555"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#4f8a3f"/><rect x="170" y="186" width="60" height="74" fill="#c9c2b2"/>' + grads + caps,
      sky("mgs2", "#2a3f7a", "#f0a875"));
  }

  /* 3. Pearland: the white water tower, a pumpjack, stadium lights */
  function mgpearland() {
    const light = x => '<rect x="' + (x - 2) + '" y="30" width="4" height="96" fill="#666"/><rect x="' + (x - 16) + '" y="22" width="32" height="12" fill="#444"/>' + [0, 1, 2, 3].map(i => '<circle class="mg-bl' + (i % 2 ? " mg-bl2" : "") + '" cx="' + (x - 11 + i * 7.3) + '" cy="28" r="2.6" fill="#fffbe0"/>').join("");
    const houses = Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 52) + '" y="' + (150 - (i % 2) * 4) + '" width="44" height="' + (34 + (i % 2) * 4) + '" fill="' + ["#c9b79a", "#a7896b", "#d8cdb6", "#9b7c5e"][i % 4] + '"/><path d="M' + (i * 52 - 4) + ' ' + (152 - (i % 2) * 4) + 'l26 -14l26 14z" fill="#5a4a44"/><rect x="' + (i * 52 + 8) + '" y="' + (160 - (i % 2) * 4) + '" width="10" height="9" class="' + (i % 3 ? "" : "mg-flk") + '" fill="#ffe2a0"/>').join("");
    const pump = '<rect x="290" y="168" width="20" height="16" fill="#3a3a3a"/><path d="M300 168l-8 -40h16z" fill="#555"/>' +
      '<g class="mg-pump"><rect x="250" y="124" width="100" height="8" rx="2" fill="#2b2b2b"/><path d="M346 116q18 4 16 24l-16 -4z" fill="#2b2b2b"/><rect x="244" y="122" width="12" height="22" rx="2" fill="#c8102e"/></g>' +
      '<path d="M358 140v44" stroke="#444" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mgs3)"/>' + stars(14) + light(30) + light(370) +
      '<rect x="146" y="70" width="6" height="110" fill="#d9dde1"/><rect x="200" y="70" width="6" height="110" fill="#d9dde1"/><path d="M149 100l54 40M203 100l-54 40M149 140l54 40M203 140l-54 40" stroke="#c4c8cc" stroke-width="2"/>' +
      '<rect x="173" y="70" width="6" height="110" fill="#c4c8cc"/>' +
      '<ellipse cx="176" cy="54" rx="48" ry="26" fill="#f4f6f8" stroke="#b9c0c6" stroke-width="2"/><path d="M128 54q48 18 96 0" stroke="#d6dbe0" stroke-width="2" fill="none"/>' +
      '<text x="176" y="58" text-anchor="middle" ' + font + ' font-size="13" fill="#1d3f7a" letter-spacing="1">PEARLAND</text><rect x="174" y="22" width="4" height="10" fill="#e1e5e9"/>' +
      houses + pump +
      '<rect x="0" y="184" width="400" height="76" fill="#3f6b35"/><rect x="0" y="214" width="400" height="46" fill="#4c4c52"/><path d="M0 238h40M70 238h40M140 238h40M210 238h40M280 238h40M350 238h40" stroke="#e8d36a" stroke-width="2"/>',
      sky("mgs3", "#0f1636", "#5a3a6a"));
  }

  /* 4. RodeoHouston at NRG: dirt arena, star stage, spotlights, a stallion running */
  function mgrodeo() {
    const crowd = Array.from({ length: 50 }, (_, i) => '<circle cx="' + (4 + i * 8) + '" cy="' + (104 + (i % 3) * 4) + '" r="3" fill="' + ["#5a4a6a", "#8a6a4a", "#3a3a5a", RED][i % 4] + '"/>').join("");
    const beam = (x, cls) => '<path class="mg-sw ' + cls + '" d="M' + x + ' 20l-26 150h52z" fill="#fff8d0" opacity=".16"/>';
    const star = '<g class="mg-spin"><path d="M200 128l9 20h22l-18 13l7 21l-20 -13l-20 13l7 -21l-18 -13h22z" fill="' + GOLD + '" stroke="#8a6a1a" stroke-width="2"/></g>';
    const horse = '<g class="mg-run"><g class="mg-gal"><path d="M10 200q4 -16 26 -18h30q8 -12 18 -14l8 -8l4 10q6 4 2 10l-10 2q-6 10 -10 14v14h-6v-12h-28l-6 12h-6l2 -14q-8 0 -10 -6z" fill="#3b2216"/>' +
      '<path d="M86 166q-10 6 -14 18" stroke="#1a0e08" stroke-width="5" fill="none"/><path d="M10 194q-10 2 -14 12" stroke="#1a0e08" stroke-width="4" fill="none"/>' +
      '<path d="M22 210l-6 14M30 210l2 14M62 210l-4 14M70 210l6 14" stroke="#3b2216" stroke-width="5"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mgs4)"/>' +
      '<path d="M0 30q200 -40 400 0v14q-200 -36 -400 0z" fill="#d8dde2"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M' + (i * 40) + ' 10v34" stroke="#b4bac0" stroke-width="2"/>').join("") +
      '<rect x="0" y="96" width="400" height="22" fill="#241c2c"/>' + crowd + '<rect x="0" y="118" width="400" height="6" fill="' + RED + '"/>' +
      '<rect x="0" y="124" width="400" height="136" fill="#9b6a3e"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (140 + i * 20) + 'q200 ' + (i % 2 ? 6 : -6) + ' 400 0" stroke="#86592f" stroke-width="2" fill="none"/>').join("") +
      '<ellipse cx="200" cy="158" rx="70" ry="22" fill="#2a2a32"/>' + star +
      beam(110, "") + beam(290, "mg-sw2") + horse +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (i * 52) + '" y="232" width="4" height="28" fill="#e8e3d8"/>').join("") + '<path d="M0 238h400M0 250h400" stroke="#e8e3d8" stroke-width="3"/>',
      sky("mgs4", "#0b0b1a", "#3a1e2a"));
  }

  /* 5. MLK Blvd and Van Fleet St, South Park; TMC towers behind */
  function mgcorner() {
    const tower = (x, w, h, c) => '<rect x="' + x + '" y="' + (126 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
      Array.from({ length: Math.floor(h / 10) }, (_, r) => Array.from({ length: Math.floor(w / 9) }, (_, k) => '<rect x="' + (x + 3 + k * 9) + '" y="' + (130 - h + r * 10) + '" width="4" height="5" fill="' + ((r * 3 + k) % 5 ? "#ffe9a8" : "#2a3446") + '" opacity=".8"/>').join("")).join("");
    const tmc = '<g opacity=".95">' + tower(150, 30, 92, "#2b3550") + tower(184, 40, 110, "#33405e") + tower(228, 26, 80, "#2b3550") + tower(258, 36, 98, "#38466a") + tower(298, 24, 70, "#2b3550") +
      '<rect class="mg-bl" x="202" y="10" width="4" height="8" fill="' + RED + '"/><rect class="mg-bl mg-bl2" x="274" y="22" width="4" height="8" fill="' + RED + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mgs5)"/>' + stars(14) + tmc +
      '<rect x="0" y="126" width="400" height="98" fill="#9b4a3c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#7f3a30" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#7f3a30" stroke-width="1"/>').join("")).join("") +
      tag("MEGAN", 18, 194, 58, RED, -6) + tag("HOT GIRL", 24, 220, 20, GOLD, -4) + tag("TINA SNOW", 168, 218, 18, "#c9a6ff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(262, 98, 134, "MLK Blvd") + sign(256, 124, 140, "Van Fleet St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="mg-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="mg-sp"><circle cx="236" cy="160" r="3" fill="' + RED + '" opacity=".7"/></g><g class="mg-sp mg-sp2"><circle cx="242" cy="154" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("mgs5", "#1b1640", "#e07a5a"));
  }

  window.SCENES = { mgstation: mgstation, mgtsu: mgtsu, mgpearland: mgpearland, mgrodeo: mgrodeo, mgcorner: mgcorner };
})();
