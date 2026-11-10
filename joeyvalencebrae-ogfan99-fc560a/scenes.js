/* JOEY VALENCE & BRAE (State College, Pennsylvania — PHILADELPHIA / Pennsylvania region) opening scenes. 400 x 260 animated SVGs. CSS classes prefixed jv- */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes jvblink{0%,49%{opacity:1}50%,100%{opacity:.2}}.jv-blk{animation:jvblink 1s steps(1) infinite}.jv-blk2{animation-delay:.5s}' +
    '@keyframes jvflick{0%,100%{opacity:1}45%{opacity:.6}50%{opacity:.3}55%{opacity:.9}}.jv-flk{animation:jvflick 1.6s infinite}.jv-flk2{animation-delay:.7s}.jv-flk3{animation-delay:1.1s}' +
    '@keyframes jvdrift{from{transform:translateX(-80px)}to{transform:translateX(470px)}}.jv-cloud{animation:jvdrift 30s linear infinite}.jv-cloud2{animation-delay:-15s}' +
    '@keyframes jvbird{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,0)}}.jv-bird{animation:jvbird 10s linear infinite}.jv-bird2{animation-delay:-5s}' +
    '@keyframes jvleaf{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(-40px,260px) rotate(300deg)}}.jv-leaf{animation:jvleaf 6s linear infinite}.jv-leaf2{animation-delay:-2s;animation-duration:7s}.jv-leaf3{animation-delay:-4s;animation-duration:5s}' +
    '@keyframes jvroll{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.jv-car{animation:jvroll 7s linear infinite}.jv-car2{animation-duration:9s;animation-delay:-4s}' +
    '@keyframes jvbeam{0%,100%{opacity:.25}50%{opacity:.7}}.jv-beam{animation:jvbeam 2.2s ease-in-out infinite}.jv-beam2{animation-delay:-1.1s}' +
    '@keyframes jvjump{0%,100%{transform:translateY(0)}40%{transform:translateY(-5px)}}.jv-jump{animation:jvjump .6s ease-in-out infinite}.jv-jump2{animation-delay:-.3s}' +
    '@keyframes jvflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.jv-flag{transform-box:fill-box;transform-origin:0 50%;animation:jvflag 1.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const bricks = (y0, y1, c) => { let b = ""; for (let y = y0; y < y1; y += 13) for (let x = ((y - y0) / 13) % 2 ? -18 : 0; x < 400; x += 36) b += '<rect x="' + x + '" y="' + y + '" width="34" height="11" fill="' + c + '"/>'; return b; };
  const cloud = (x, y, cls) => '<g class="jv-cloud ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9" fill="#fff" opacity=".85"/><ellipse cx="' + (x + 16) + '" cy="' + (y - 6) + '" rx="16" ry="9" fill="#fff" opacity=".85"/></g>';
  const bird = (x, y, cls) => '<g class="jv-bird ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q5-6 10 0q5-6 10 0" stroke="#2a2a33" stroke-width="1.6" fill="none"/></g>';
  const bullet = (x, y, color, label, dark) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="' + color + '" stroke="#333" stroke-width="1"/><text x="' + x + '" y="' + (y + 3.6) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="' + (dark ? "#111" : "#fff") + '">' + label + '</text>';
  const leaf = (x, c, cls) => '<g class="jv-leaf ' + cls + '"><path d="M' + x + ' 0q6-6 12 0q-6 6-12 0z" fill="' + c + '"/></g>';
  const RED = "#ff3b3b", YEL = "#ffd400", BLU = "#3bb0ff", NAVY = "#1e407c";

  /* 1. CATA White Loop / Blue Loop stop at College Ave & Allen St, downtown State College: the bus pulling in */
  function jvstation() {
    let shops = "";
    const cols = ["#9a4a36", "#b8865a", "#7d3b2e", "#a35e40", "#8c5a44"];
    for (let i = 0; i < 6; i++) {
      const x = i * 68, h = 70 + (i % 3) * 14;
      shops += '<rect x="' + x + '" y="' + (150 - h) + '" width="66" height="' + h + '" fill="' + cols[i % 5] + '"/>';
      for (let r = 0; r < 2; r++) for (let c = 0; c < 3; c++) shops += '<rect x="' + (x + 8 + c * 19) + '" y="' + (158 - h + r * 22) + '" width="12" height="15" fill="#f6e2a8" opacity="' + ((i + r + c) % 3 ? .85 : .45) + '"/>';
      shops += '<rect x="' + (x + 4) + '" y="128" width="58" height="22" fill="#2a2420"/><rect x="' + (x + 4) + '" y="124" width="58" height="5" fill="' + (i % 2 ? NAVY : "#3a6a3a") + '"/>';
    }
    const bus = '<rect x="40" y="150" width="220" height="62" rx="8" fill="#f4f4f2" stroke="#8a8f96" stroke-width="1.5"/>' +
      '<path d="M40 196h220v8H40z" fill="' + NAVY + '"/><path d="M40 188q110-14 220 0v6q-110-12-220 0z" fill="#5aa04a"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (52 + i * 34) + '" y="158" width="26" height="22" rx="3" fill="#1d2630"/>').join("") +
      '<rect x="226" y="156" width="30" height="40" rx="3" fill="#24303a"/><rect x="226" y="152" width="30" height="7" rx="1" fill="#000"/><text x="241" y="157.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="4.8" fill="#ffb03c">WHITE LOOP</text>' +
      '<circle cx="256" cy="202" r="3" fill="#fff6c2" class="jv-flk"/><circle cx="80" cy="214" r="9" fill="#222"/><circle cx="80" cy="214" r="4" fill="#777"/><circle cx="220" cy="214" r="9" fill="#222"/><circle cx="220" cy="214" r="4" fill="#777"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#js1)"/>' + cloud(60, 30) + cloud(260, 20, "jv-cloud2") +
      shops +
      '<rect x="0" y="150" width="400" height="74" fill="#55555a"/><rect x="0" y="222" width="400" height="38" fill="#b9b4aa"/><rect x="0" y="220" width="400" height="3" fill="#e2ddd2"/>' +
      '<path d="M0 186h400" stroke="#f2d64a" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="anim-train">' + bus + '</g>' +
      '<rect x="318" y="120" width="4" height="102" fill="#4a5058"/>' +
      '<rect x="296" y="96" width="48" height="26" rx="2" fill="' + NAVY + '" stroke="#fff" stroke-width="1"/><text x="320" y="113" text-anchor="middle" ' + A + ' font-size="13" fill="#fff">BUS</text>' +
      '<rect x="60" y="228" width="280" height="28" rx="3" fill="#22252b" stroke="#fff" stroke-width="1.5"/>' +
      bullet(80, 242, "#f4f4f2", "W", true) + bullet(102, 242, "#2a6fd6", "B") +
      '<text x="220" y="246" text-anchor="middle" ' + F + ' font-weight="700" font-size="13" fill="#fff" textLength="200" lengthAdjust="spacingAndGlyphs">College Ave &amp; Allen St</text>',
      sky("js1", "#8fc4ec", "#f5e2bc"));
  }

  /* 2. The Nittany Lion Shrine, Penn State: the pale limestone mountain lion crouched on its rock under the trees, leaves falling */
  function jvlion() {
    let trees = "";
    [[30, 110, "#c8642a"], [90, 96, "#d98c2a"], [320, 100, "#b8501f"], [380, 112, "#e0a030"]].forEach(([x, y, c]) => trees += '<rect x="' + (x - 4) + '" y="' + y + '" width="8" height="110" fill="#4a3424"/><circle cx="' + x + '" cy="' + y + '" r="40" fill="' + c + '"/><circle cx="' + (x + 18) + '" cy="' + (y - 16) + '" r="24" fill="' + c + '" opacity=".85"/>');
    const lion =
      '<path d="M120 176q10-30 50-34q30-2 52 6q20-18 44-12q18 6 22 24q4 10-4 18l-6 4q4 12 0 20h-14l-2-14q-20 6-46 6q-30 0-50-4l-4 14h-14l2-18q-24-2-30-10z" fill="#e8e2d2" stroke="#a8a090" stroke-width="2"/>' +
      '<path d="M120 176q-16-2-22-14q-4-10 6-8q8 8 18 10" fill="#e8e2d2" stroke="#a8a090" stroke-width="2"/>' +
      '<path d="M258 138l6-10 6 10M272 140l6-8 4 10" fill="#e8e2d2" stroke="#a8a090" stroke-width="2"/>' +
      '<path d="M266 156q8 2 14-2" stroke="#8a8272" stroke-width="2" fill="none"/><circle cx="268" cy="148" r="2" fill="#8a8272"/><path d="M180 160q20 8 40 0" stroke="#c8c0ae" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#js2)"/>' + trees +
      '<path d="M0 214q200-20 400 0v46H0z" fill="#6a9a4a"/>' +
      '<path d="M90 222q20-26 70-28h120q40 4 50 28z" fill="#9a9488" stroke="#6e695e" stroke-width="2"/>' +
      lion +
      leaf(120, "#d98c2a", "") + leaf(240, "#c8642a", "jv-leaf2") + leaf(340, "#e0a030", "jv-leaf3") + leaf(60, "#b8501f", "jv-leaf2") +
      '<rect x="110" y="232" width="180" height="20" rx="3" fill="' + NAVY + '" stroke="#fff" stroke-width="1"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + A + ' font-size="12" fill="#fff" textLength="164" lengthAdjust="spacingAndGlyphs">THE NITTANY LION SHRINE</text>',
      sky("js2", "#7fb6e6", "#f4dcb0"));
  }

  /* 3. Old Main, Penn State: the sandstone hall with its columned portico and the bell tower, lawn and elms out front */
  function jvoldmain() {
    let win = "";
    for (let f = 0; f < 3; f++) for (let i = 0; i < 6; i++) {
      win += '<rect x="' + (44 + i * 18) + '" y="' + (128 + f * 24) + '" width="9" height="15" fill="#3a3a44"/>';
      win += '<rect x="' + (256 + i * 18) + '" y="' + (128 + f * 24) + '" width="9" height="15" fill="#3a3a44"/>';
    }
    let colsP = "";
    for (let i = 0; i < 6; i++) colsP += '<rect x="' + (166 + i * 13.5) + '" y="132" width="6" height="68" fill="#efe6d2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#js3)"/>' + cloud(40, 40) + cloud(240, 26, "jv-cloud2") + bird(70, 70) + bird(300, 56, "jv-bird2") +
      '<path d="M0 206h400v54H0z" fill="#5f9a46"/><path d="M190 260l6-54h8l6 54z" fill="#cfc6b0"/>' +
      '<rect x="36" y="118" width="328" height="88" fill="#c9b28a"/><path d="M30 120h340l-12-12H42z" fill="#6a6058"/>' + win +
      '<rect x="156" y="112" width="88" height="94" fill="#d4bf98"/><path d="M152 132l48-22 48 22z" fill="#e2d2b2" stroke="#a89878" stroke-width="1.5"/>' + colsP +
      '<rect x="182" y="40" width="36" height="74" fill="#d4bf98" stroke="#a89878" stroke-width="1"/>' +
      '<rect x="178" y="36" width="44" height="6" fill="#a89878"/><rect x="186" y="16" width="28" height="22" fill="#e2d2b2"/><path d="M184 18h32l-16-14z" fill="#6a6058"/>' +
      '<circle cx="200" cy="64" r="10" fill="#f6f1e2" stroke="#3a3a44" stroke-width="1.5"/><path d="M200 64v-7M200 64l5 3" stroke="#222" stroke-width="1.4"/>' +
      '<path d="M193 96v-12a7 7 0 0 1 14 0v12z" fill="#3a3a44"/>' +
      '<rect x="199" y="0" width="2" height="6" fill="#555"/>' +
      [[20, 190], [370, 192], [120, 214], [290, 214]].map(([x, y]) => '<rect x="' + (x - 3) + '" y="' + (y - 4) + '" width="6" height="22" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 16) + '" r="20" fill="#3f7a3a"/><circle cx="' + (x + 8) + '" cy="' + (y - 26) + '" r="13" fill="#4c8c45"/>').join("") +
      '<rect x="130" y="232" width="140" height="20" rx="3" fill="' + NAVY + '" stroke="#fff" stroke-width="1"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + A + ' font-size="12" fill="#fff" textLength="120" lengthAdjust="spacingAndGlyphs">OLD MAIN · PENN STATE</text>',
      sky("js3", "#6fa8dc", "#f4d9a8"));
  }

  /* 4. Beaver Stadium white-out: the whole bowl in white, light towers beaming, the crowd jumping */
  function jvstadium() {
    let crowd = "";
    for (let r = 0; r < 7; r++) for (let i = 0; i < 40; i++) {
      const x = 6 + i * 10 + (r % 2) * 5, y = 96 + r * 11;
      crowd += '<circle cx="' + x + '" cy="' + y + '" r="3.2" fill="#f4f4f2" class="' + ((i + r) % 3 === 0 ? "jv-flk" : (i + r) % 3 === 1 ? "jv-flk2" : "jv-flk3") + '"/>';
    }
    const tower = x => '<rect x="' + (x - 2) + '" y="20" width="4" height="70" fill="#9aa0a8"/><rect x="' + (x - 16) + '" y="12" width="32" height="14" fill="#cfd4da"/>' +
      [0, 1, 2, 3].map(i => '<circle cx="' + (x - 11 + i * 7.3) + '" cy="19" r="2.6" fill="#fff8d0"/>').join("") +
      '<path d="M' + (x - 14) + ' 26L' + (x - 70) + ' 200h120L' + (x + 14) + ' 26z" fill="#fff8d0" class="jv-beam' + (x > 200 ? " jv-beam2" : "") + '" opacity=".3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#js4)"/>' + stars(20) +
      tower(60) + tower(340) +
      '<path d="M0 88h400v96H0z" fill="#1e2a44"/>' + '<g class="jv-jump">' + crowd + '</g>' +
      '<rect x="0" y="84" width="400" height="6" fill="' + NAVY + '"/>' +
      '<rect x="0" y="184" width="400" height="8" fill="' + NAVY + '"/>' +
      '<path d="M0 192h400v68H0z" fill="#3f8a3a"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<path d="M' + (i * 52) + ' 192l-14 68" stroke="#fff" stroke-width="1.6" opacity=".7"/>').join("") +
      '<rect x="120" y="212" width="160" height="26" rx="3" fill="' + NAVY + '" stroke="#fff" stroke-width="1.2"/>' +
      '<text x="200" y="230" text-anchor="middle" ' + A + ' font-size="15" fill="#fff" textLength="140" lengthAdjust="spacingAndGlyphs">BEAVER STADIUM WHITE OUT</text>',
      sky("js4", "#05081a", "#1a2240"));
  }

  /* 5. The corner: College Ave & Allen St, JVB tagged on the wall, Mount Nittany behind at sunset */
  function jvcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#js5)"/>' + '<g class="jv-flk"><circle cx="236" cy="52" r="16" fill="#ffd27a" opacity=".85"/></g>' +
      '<path d="M0 108q60-40 140-46q60-6 120 10q70 18 140 22v20H0z" fill="#3a5a3a"/>' +
      '<path d="M0 108q60-30 140-36q60-4 120 10q70 16 140 20" stroke="#5a7a4a" stroke-width="2" fill="none"/>' +
      bricks(104, 214, "#7a3a2c") +
      '<rect x="0" y="100" width="400" height="6" fill="#4a2a20"/>' +
      tag("JVB", 24, 170, 62, RED, -6) + tag("HOOLIGANG", 140, 160, 30, YEL, -4) + tag("DANCING IS MANDATORY", 26, 204, 18, BLU, -3) +
      '<rect x="0" y="214" width="400" height="46" fill="#8d8b85"/><rect x="0" y="212" width="400" height="4" fill="#b1aea6"/>' +
      '<g class="jv-car jv-car2"><rect x="0" y="236" width="56" height="16" rx="5" fill="' + BLU + '"/><circle cx="12" cy="253" r="4" fill="#111"/><circle cx="44" cy="253" r="4" fill="#111"/></g>' +
      '<rect x="336" y="58" width="5" height="156" fill="#4a5058"/>' +
      '<rect x="270" y="56" width="126" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="333" y="71" text-anchor="middle" ' + F + ' font-weight="700" font-size="11.5" fill="#fff">E College Ave</text>' +
      '<rect x="270" y="80" width="126" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="333" y="95" text-anchor="middle" ' + F + ' font-weight="700" font-size="11.5" fill="#fff">S Allen St</text>' +
      '<rect x="290" y="108" width="92" height="16" rx="2" fill="' + NAVY + '" stroke="#fff" stroke-width="1"/><text x="336" y="119.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="7.5" fill="#fff">MOUNT NITTANY</text>',
      sky("js5", "#2a2a5a", "#f08a5a"));
  }

  window.SCENES = { jvstation, jvlion, jvoldmain, jvstadium, jvcorner };
})();
