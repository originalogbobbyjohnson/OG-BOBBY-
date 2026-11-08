/* rockiefresh scenes (Regions tab: Chicago; Homewood, the south suburbs, by way of the South Side). CSS classes prefixed rf- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rfflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.rf-flk{animation:rfflick 2.4s infinite}.rf-flk2{animation-delay:.8s}' +
    '@keyframes rfglow{0%,100%{opacity:.45}50%{opacity:1}}.rf-glow{animation:rfglow 2.2s ease-in-out infinite}.rf-g2{animation-delay:-1.1s}' +
    '@keyframes rfball{0%{transform:translate(0,0)}50%{transform:translate(70px,-46px)}100%{transform:translate(140px,0)}}.rf-ball{animation:rfball 2.6s linear infinite}' +
    '@keyframes rfflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.rf-flag{transform-box:fill-box;transform-origin:0 50%;animation:rfflag 1.6s ease-in-out infinite}' +
    '@keyframes rftrail{0%{transform:translateX(0);opacity:0}20%{opacity:1}100%{transform:translateX(-420px);opacity:0}}.rf-tr{animation:rftrail 1.6s linear infinite}.rf-tr2{animation-delay:-.5s}.rf-tr3{animation-delay:-1.1s}' +
    '@keyframes rfneedle{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(6deg)}}.rf-ndl{transform-box:view-box;transform-origin:318px 214px;animation:rfneedle 1.2s ease-in-out infinite}' +
    '@keyframes rfzap{0%,100%{opacity:0}10%,30%{opacity:1}40%{opacity:0}}.rf-zap{animation:rfzap 2.8s infinite}.rf-zap2{animation-delay:-1.4s}' +
    '@keyframes rfcar{0%{transform:translateX(-140px)}100%{transform:translateX(520px)}}.rf-car{animation:rfcar 4.5s linear infinite}.rf-car2{animation-delay:-2.2s}' +
    '@keyframes rfspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rf-sp{animation:rfspray 1.4s ease-out infinite}.rf-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "rf-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const BLUE = "#39c0ff", ORANGE = "#ff8a3d", GOLD = "#ffd34d", METRA = "#1f4e79";
  /* an "8" drawn as two stacked rings (clean, no hooks) */
  const eight = (x, y, s, c) => '<g fill="none" stroke="' + c + '" stroke-width="' + (s * 0.22) + '"><circle cx="' + x + '" cy="' + (y - s * 0.62) + '" r="' + (s * 0.3) + '"/><circle cx="' + x + '" cy="' + (y - s * 0.02) + '" r="' + (s * 0.36) + '"/></g>';

  /* 1. Metra Electric at Flossmoor, the stop for H-F: the steep-gabled Tudor depot (cream stucco, dark half-timber, red-brown roof) on the embankment, the silver bilevel train sliding in */
  function rfstation() {
    const car = (x) => '<rect x="' + x + '" y="112" width="150" height="70" rx="6" fill="#c9ced4" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (x + 10 + i * 23) + '" y="120" width="17" height="14" rx="2" fill="#1d2633"/><rect x="' + (x + 10 + i * 23) + '" y="142" width="17" height="14" rx="2" fill="#1d2633"/>').join("") +
      '<rect x="' + x + '" y="162" width="150" height="5" fill="' + METRA + '"/>';
    const tr = '<g class="anim-train">' + car(20) + car(176) + '<rect x="318" y="114" width="8" height="66" fill="#a3a9b0"/><circle cx="320" cy="174" r="3.5" fill="#fff6c2"/>' +
      '<path d="M40 112v-14M70 112v-14M200 112v-14M230 112v-14" stroke="#333" stroke-width="2"/><path d="M0 96h400" stroke="#333" stroke-width="1.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rf1)"/>' + stars(10) +
      /* the depot: cream stucco, brown half-timber, steep red-brown roof, a squat chimney */
      '<path d="M236 70l52 -46l52 46z" fill="#7a3b2a"/><rect x="246" y="70" width="84" height="40" fill="#efe4c8"/>' +
      '<path d="M246 70h84M246 82h84M288 70v40M266 70v40M310 70v40M246 70l20 12M330 70l-20 12" stroke="#4a3022" stroke-width="3"/>' +
      '<rect x="306" y="30" width="10" height="22" fill="#8a4a34"/><rect class="rf-glow" x="270" y="88" width="12" height="16" fill="#ffd98a"/><rect class="rf-glow rf-g2" x="294" y="88" width="12" height="16" fill="#ffd98a"/>' +
      '<path d="M180 70l40 -30l40 30z" fill="#6c3324"/><rect x="186" y="70" width="68" height="40" fill="#e8dcbd"/><path d="M186 82h68M220 70v40" stroke="#4a3022" stroke-width="3"/>' +
      '<rect x="0" y="100" width="400" height="10" fill="#5a5f66"/>' + tr +
      '<rect x="0" y="182" width="400" height="8" fill="#f2c200"/><rect x="0" y="190" width="400" height="70" fill="#8d8a84"/>' +
      '<rect x="40" y="206" width="5" height="40" fill="#333"/><rect x="200" y="206" width="5" height="40" fill="#333"/>' +
      '<rect x="20" y="196" width="232" height="30" rx="3" fill="#111"/><text x="34" y="217" ' + font + ' font-size="16" fill="#fff">Flossmoor</text>' + badge(130, 211, "METRA ELECTRIC", METRA) +
      '<rect class="rf-flk" x="290" y="232" width="90" height="5" rx="2" fill="#fff6c2" opacity=".5"/>' +
      '<text x="200" y="16" text-anchor="middle" ' + font + ' font-size="10" fill="#e8eef8">METRA ELECTRIC · FLOSSMOOR · THE STOP FOR H-F</text>',
      sky("rf1", "#101a3a", "#6a7aa8"));
  }

  /* 2. The Little League diamond on the South Side where he played as a kid: red infield clay, white chalk lines, the chain-link backstop, a ball looping over, the pennant flapping */
  function rfdiamond() {
    return svg(
      '<rect width="400" height="260" fill="url(#rf2)"/>' +
      '<g fill="#3f5a3a"><circle cx="40" cy="96" r="30"/><circle cx="90" cy="88" r="26"/><circle cx="330" cy="92" r="30"/><circle cx="380" cy="100" r="24"/></g>' +
      '<rect x="0" y="104" width="400" height="156" fill="#4f8a3c"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 50) + '" y="104" width="25" height="156" fill="#57943f" opacity=".6"/>').join("") +
      '<path d="M200 244l-120 -84l120 -60l120 60z" fill="#b5653a"/><path d="M200 226l-86 -62l86 -46l86 46z" fill="#4f8a3c"/>' +
      '<path d="M200 244L40 130M200 244L360 130" stroke="#fff" stroke-width="3"/>' +
      [[200, 236], [292, 164], [200, 112], [108, 164]].map(p => '<rect x="' + (p[0] - 6) + '" y="' + (p[1] - 6) + '" width="12" height="12" transform="rotate(45 ' + p[0] + ' ' + p[1] + ')" fill="#fff"/>').join("") +
      '<circle cx="200" cy="172" r="12" fill="#b5653a"/><rect x="194" y="170" width="12" height="3" fill="#fff"/>' +
      /* backstop */
      '<path d="M140 250q60 -60 120 0" fill="none" stroke="#9aa1a8" stroke-width="3"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (146 + i * 13) + ' 250v-' + (16 + Math.round(30 * Math.sin(Math.PI * (i + 1) / 10))) + '" stroke="#9aa1a8" stroke-width="1.2"/>').join("") +
      '<circle class="rf-ball" cx="130" cy="150" r="4" fill="#fff" stroke="#c0392b" stroke-width="1"/>' +
      '<rect x="356" y="40" width="3" height="70" fill="#ddd"/><path class="rf-flag" d="M359 42h34l-8 10l8 10h-34z" fill="' + ORANGE + '"/>' +
      '<rect x="70" y="8" width="260" height="20" rx="3" fill="#111" opacity=".75"/><text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">SOUTH SIDE LITTLE LEAGUE · WHERE HE PLAYED</text>',
      sky("rf2", "#7ec8f0", "#d8f0ff"));
  }

  /* 3. "Driving 88": a brushed-steel gull-wing coupe, doors thrown up, on Lake Shore Drive at night, light trails streaking, the speedometer needle at 88 */
  function rf88() {
    const trail = (y, c, cls) => '<rect class="rf-tr ' + cls + '" x="400" y="' + y + '" width="120" height="3" rx="1.5" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rf3)"/>' + stars(16) +
      /* the lake and a far skyline */
      '<g fill="#18223e"><rect x="20" y="70" width="18" height="40"/><rect x="40" y="56" width="22" height="54"/><rect x="64" y="78" width="16" height="32"/><rect x="300" y="64" width="20" height="46"/><rect x="322" y="80" width="26" height="30"/><rect x="350" y="70" width="18" height="40"/></g>' +
      '<rect x="0" y="110" width="400" height="26" fill="#0d2d4a"/><path d="M0 120h400M0 128h400" stroke="#2b5a80" stroke-width="1" opacity=".6"/>' +
      '<rect x="0" y="136" width="400" height="124" fill="#2a2c33"/><path d="M0 196h400" stroke="#e8d36b" stroke-width="3" stroke-dasharray="24 16"/>' +
      trail(150, ORANGE, "") + trail(160, "#ff4d4d", "rf-tr2") + trail(232, BLUE, "rf-tr3") + trail(242, "#fff", "") +
      /* the coupe: low wedge, steel body, doors up like wings */
      '<path d="M60 206l14 -26q10 -10 40 -12l70 -4q30 0 50 18l44 6q14 4 14 18v8H60z" fill="#b8bec6" stroke="#5c636b" stroke-width="2"/>' +
      '<path d="M120 170l-34 -40q-6 -8 4 -10l40 -4z" fill="#cfd4da" stroke="#5c636b" stroke-width="2"/><path d="M182 166l30 -42q6 -8 -4 -10l-40 0z" fill="#cfd4da" stroke="#5c636b" stroke-width="2"/>' +
      '<path d="M122 170l58 -4l20 16h-88z" fill="#1d2633"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M' + (230 + i * 6) + ' 196v10" stroke="#5c636b" stroke-width="1.5"/>').join("") +
      '<circle cx="104" cy="216" r="16" fill="#111"/><circle cx="104" cy="216" r="7" fill="#9aa1a8"/><circle cx="246" cy="216" r="16" fill="#111"/><circle cx="246" cy="216" r="7" fill="#9aa1a8"/>' +
      '<rect class="rf-glow" x="282" y="194" width="10" height="5" fill="#ff4d4d"/><path class="rf-zap" d="M40 150l14 10l-8 4l16 12" stroke="' + BLUE + '" stroke-width="3" fill="none"/><path class="rf-zap rf-zap2" d="M300 150l12 10l-8 4l14 12" stroke="' + BLUE + '" stroke-width="3" fill="none"/>' +
      /* speedometer at 88 */
      '<circle cx="318" cy="214" r="32" fill="#0b0d14" stroke="' + ORANGE + '" stroke-width="3"/>' + eight(306, 226, 18, GOLD) + eight(328, 226, 18, GOLD) +
      '<path class="rf-ndl" d="M318 214l-22 -18" stroke="#ff4d4d" stroke-width="3" stroke-linecap="round"/><text x="318" y="242" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">MPH</text>' +
      '<rect x="96" y="8" width="208" height="20" rx="3" fill="#111" opacity=".75"/><text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">DRIVING EIGHTY-EIGHT · LAKE SHORE DR</text>',
      sky("rf3", "#05070f", "#1c2448"));
  }

  /* 4. "Electric Highway": the Dan Ryan at night, the blue I-94 shield, car lights streaming toward the skyline, lightning arcing over the lanes */
  function rfhighway() {
    const car = (y, c, cls) => '<g class="rf-car ' + cls + '"><rect x="0" y="' + y + '" width="40" height="14" rx="4" fill="' + c + '"/><circle cx="38" cy="' + (y + 7) + '" r="2.5" fill="#fff6c2"/><circle cx="8" cy="' + (y + 15) + '" r="4" fill="#111"/><circle cx="30" cy="' + (y + 15) + '" r="4" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rf4)"/>' + stars(12) +
      /* skyline: a black tower with twin antennas, a slim spire, a tall white one */
      '<g fill="#0d1122"><rect x="168" y="30" width="34" height="96"/><rect x="176" y="14" width="3" height="16"/><rect x="191" y="10" width="3" height="20"/><rect x="204" y="52" width="20" height="74"/><rect x="118" y="60" width="26" height="66"/><rect x="146" y="76" width="20" height="50"/><rect x="236" y="70" width="28" height="56"/><rect x="266" y="88" width="22" height="38"/><rect x="290" y="46" width="22" height="80"/><rect x="299" y="30" width="4" height="16"/><rect x="80" y="84" width="34" height="42"/></g>' +
      Array.from({ length: 20 }, (_, i) => '<rect class="' + (i % 3 ? "" : "rf-glow") + '" x="' + (120 + (i * 37) % 180) + '" y="' + (60 + (i * 29) % 56) + '" width="3" height="3" fill="#ffe7a8" opacity=".7"/>').join("") +
      '<path class="rf-zap" d="M60 20l20 30l-12 6l26 40" stroke="' + BLUE + '" stroke-width="4" fill="none"/><path class="rf-zap rf-zap2" d="M340 16l-18 30l12 6l-22 40" stroke="' + BLUE + '" stroke-width="4" fill="none"/>' +
      '<rect x="0" y="126" width="400" height="134" fill="#26282e"/><rect x="0" y="186" width="400" height="8" fill="#9aa1a8"/>' +
      '<path d="M0 156h400M0 228h400" stroke="#e8e4dc" stroke-width="2" stroke-dasharray="20 14" opacity=".7"/>' +
      car(136, ORANGE, "") + car(166, "#c9ced4", "rf-car2") + car(206, BLUE, "") + car(236, "#e2574c", "rf-car2") +
      /* the overhead I-94 shield, interstate blue/red */
      '<rect x="226" y="100" width="6" height="26" fill="#555"/><rect x="354" y="100" width="6" height="26" fill="#555"/><rect x="226" y="96" width="134" height="6" fill="#666"/>' +
      '<rect x="232" y="70" width="120" height="26" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="304" y="88" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">CHICAGO LOOP</text>' +
      '<path d="M240 73h22v4q0 14 -11 18q-11 -4 -11 -18z" fill="#1a4ea8" stroke="#fff" stroke-width="1.2"/><rect x="240" y="73" width="22" height="5" fill="#c8102e"/><g fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"><circle cx="247" cy="84" r="2.4"/><path d="M249.4 84v6.5"/><path d="M256 80l-3.4 6.5h4.8M256.4 82v8.5"/></g>' +
      '<rect x="100" y="8" width="200" height="20" rx="3" fill="#111" opacity=".75"/><text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">ELECTRIC HIGHWAY · THE DAN RYAN</text>',
      sky("rf4", "#060818", "#2a2050"));
  }

  /* 5. Flossmoor Rd and Kedzie Ave, out by H-F: green signs, ROCKIE tagged on the brick wall, the Chicago skyline far up the Metra line behind */
  function rfcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#rf5)"/>' + stars(14) +
      '<g fill="#2a2a4a" opacity=".85"><rect x="140" y="70" width="18" height="62"/><rect x="145" y="60" width="2" height="10"/><rect x="152" y="58" width="2" height="12"/><rect x="160" y="88" width="14" height="44"/><rect x="120" y="96" width="16" height="36"/><rect x="178" y="80" width="12" height="52"/><rect x="194" y="98" width="20" height="34"/></g>' +
      '<g fill="#3e5a3a"><circle cx="40" cy="120" r="28"/><circle cx="90" cy="124" r="22"/><circle cx="270" cy="118" r="26"/><circle cx="320" cy="124" r="20"/></g>' +
      '<rect x="0" y="128" width="400" height="96" fill="#7a4232"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (136 + i * 8) + 'h400" stroke="#6a3628" stroke-width="1"/>').join("") +
      tag("ROCKIE", 18, 186, 50, BLUE, -6) + tag("FRESH", 200, 176, 30, ORANGE, -4) + tag("DRIVING 88", 26, 216, 18, GOLD, -3) + tag("STAY FLY", 188, 212, 20, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="344" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(290, 98, 104, "Flossmoor Rd") + sign(300, 124, 90, "Kedzie Ave") +
      '<g class="rf-sp"><circle cx="150" cy="158" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="rf-sp rf-sp2"><circle cx="156" cy="152" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("rf5", "#0e1638", "#e08a4a"));
  }

  window.SCENES = { rfstation: rfstation, rfdiamond: rfdiamond, rf88: rf88, rfhighway: rfhighway, rfcorner: rfcorner };
})();
