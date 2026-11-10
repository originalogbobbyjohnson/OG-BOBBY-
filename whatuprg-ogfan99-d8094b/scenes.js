/* whatuprg scenes (Regions tab: Atlanta; Gwinnett County - "I'm from Gwinnett"; Pleasant Hill Rd at I-85 Exit 104, Duluth). CSS classes prefixed wr- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wrglow{0%,100%{opacity:.45}50%{opacity:1}}.wr-glow{animation:wrglow 2.2s ease-in-out infinite}.wr-g2{animation-delay:-1.1s}' +
    '@keyframes wrcar{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.wr-car{animation:wrcar 5s linear infinite}.wr-car2{animation-delay:-2.5s}' +
    '@keyframes wrcarb{0%{transform:translateX(460px)}100%{transform:translateX(-120px)}}.wr-carb{animation:wrcarb 6s linear infinite}' +
    '@keyframes wrflag{0%,100%{transform:skewX(-6deg)}50%{transform:skewX(6deg)}}.wr-fl{transform-box:fill-box;transform-origin:50% 0%;animation:wrflag 1.8s ease-in-out infinite}.wr-fl2{animation-delay:-.9s}' +
    '@keyframes wrbeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.wr-bm{transform-box:fill-box;transform-origin:50% 0%;animation:wrbeam 4s ease-in-out infinite}.wr-bm2{animation-delay:-2s}' +
    '@keyframes wrspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.wr-sp{animation:wrspray 1.4s ease-out infinite}.wr-sp2{animation-delay:.45s}' +
    '@keyframes wrdrip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(30px);opacity:0}}.wr-dr{animation:wrdrip 1.8s ease-in infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const ROSE = "#f2a88f", GOLD = "#ffd27a", TEAL = "#7fd1c7", RBLUE = "#0a5cab", RGREEN = "#7ac143";

  /* 0. Gwinnett Place Transit Center by Pleasant Hill Rd, Duluth: a Ride Gwinnett local bus pulling into the bays under the canopy, the black stop sign with the 30 and 40 route badges */
  function wrstation() {
    const bus = '<g class="anim-train"><rect x="34" y="114" width="256" height="84" rx="10" fill="#f6f6f4" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (76 + i * 40) + '" y="126" width="34" height="30" rx="3" fill="#22303c"/>').join("") +
      '<rect x="40" y="126" width="28" height="60" rx="2" fill="#22303c"/>' +
      '<path d="M34 176h256v8h-256z" fill="' + RBLUE + '"/><path d="M150 176q60 -26 140 -18v18z" fill="' + RGREEN + '"/>' +
      '<rect x="38" y="115" width="104" height="11" rx="2" fill="#111"/><text x="90" y="123.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">30 GWINNETT PLACE TC</text>' +
      '<circle cx="84" cy="198" r="12" fill="#222"/><circle cx="84" cy="198" r="5" fill="#9aa1a8"/><circle cx="244" cy="198" r="12" fill="#222"/><circle cx="244" cy="198" r="5" fill="#9aa1a8"/>' +
      '<circle cx="38" cy="186" r="3.5" fill="#fff6c2"/></g>';
    const badge = (x, n, c) => '<circle cx="' + x + '" cy="41" r="10" fill="' + c + '"/><text x="' + x + '" y="45.5" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + n + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#wr0)"/>' +
      '<g fill="#5a6470"><rect x="0" y="66" width="70" height="44"/><rect x="300" y="58" width="100" height="52"/></g>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (310 + i * 15) + '" y="68" width="8" height="10" fill="#ffd98a" opacity=".7"/>').join("") +
      '<path d="M0 86h400v10h-400z" fill="#d8dde2"/><path d="M0 96h400" stroke="#9aa4ae" stroke-width="2"/>' +
      [40, 140, 240, 340].map(x => '<rect x="' + x + '" y="96" width="6" height="40" fill="#8a949e"/>').join("") +
      '<rect x="0" y="136" width="400" height="14" fill="#c4c0b6"/><rect x="0" y="150" width="400" height="110" fill="#4c4c52"/><path d="M0 232h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="338" y="104" width="5" height="46" fill="#6b7178"/><rect x="318" y="82" width="46" height="26" rx="3" fill="' + RBLUE + '" stroke="#fff" stroke-width="1.5"/><text x="341" y="93" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">RIDE</text><text x="341" y="103" text-anchor="middle" ' + font + ' font-size="7" fill="' + RGREEN + '">GWINNETT</text>' +
      '<rect x="12" y="24" width="292" height="34" rx="3" fill="#111"/><text x="24" y="46" ' + font + ' font-size="12.5" fill="#fff">Gwinnett Place Transit Center</text>' +
      badge(318, "30", RBLUE) + badge(342, "40", RBLUE),
      sky("wr0", "#2b3a66", "#e9a07a"));
  }

  /* 1. I-85 North at night: the big green overhead sign "EXIT 104 - Pleasant Hill Rd", the yellow exit tab, the red and white streaks of traffic underneath */
  function wrexit() {
    return svg(
      '<rect width="400" height="260" fill="url(#wr1)"/>' +
      Array.from({ length: 20 }, (_, i) => '<circle cx="' + (i * 21 % 400) + '" cy="' + (10 + i * 13 % 60) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      '<path d="M0 170L160 112h80L400 170z" fill="#2c2c34"/><path d="M0 170h400v90h-400z" fill="#36363e"/>' +
      '<path d="M200 112v148" stroke="#f2c200" stroke-width="3" stroke-dasharray="14 12"/><path d="M110 260L186 112M290 260L214 112" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="16 14"/>' +
      '<rect x="20" y="18" width="8" height="150" fill="#7a828a"/><rect x="372" y="18" width="8" height="150" fill="#7a828a"/><rect x="20" y="22" width="360" height="8" fill="#7a828a"/>' +
      '<rect x="60" y="34" width="160" height="70" rx="5" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<rect x="146" y="20" width="74" height="18" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><text x="183" y="34" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">EXIT 104</text>' +
      '<text x="140" y="62" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">Pleasant Hill Rd</text><text x="140" y="82" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Duluth</text>' +
      '<path d="M140 88l8 10h-5v6h-6v-6h-5z" fill="#fff"/>' +
      '<rect x="232" y="34" width="124" height="70" rx="5" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<path d="M264 44h26v6q0 14 -13 20q-13 -6 -13 -20z" fill="#003f87" stroke="#fff" stroke-width="1.5"/><rect x="264" y="40" width="26" height="6" fill="#c8102e"/><text x="277" y="61" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">85</text>' +
      '<text x="326" y="58" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">NORTH</text><text x="294" y="90" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Greenville</text>' +
      '<path d="M294 94v8" stroke="#fff" stroke-width="2"/>' +
      '<g class="wr-car"><rect x="0" y="206" width="56" height="18" rx="5" fill="#2a3a6a"/><circle cx="2" cy="216" r="3" fill="#ff4a3a"/><circle cx="12" cy="224" r="5" fill="#111"/><circle cx="44" cy="224" r="5" fill="#111"/><path d="M-90 214h90" stroke="#ff4a3a" stroke-width="3" opacity=".4"/></g>' +
      '<g class="wr-car wr-car2"><rect x="0" y="232" width="62" height="18" rx="5" fill="#7a2a3a"/><circle cx="2" cy="242" r="3" fill="#ff4a3a"/><circle cx="14" cy="250" r="5" fill="#111"/><circle cx="48" cy="250" r="5" fill="#111"/><path d="M-90 240h90" stroke="#ff4a3a" stroke-width="3" opacity=".4"/></g>' +
      '<g class="wr-carb"><rect x="0" y="182" width="50" height="14" rx="4" fill="#5a5a62"/><circle cx="50" cy="189" r="3" fill="#fff6c2"/><path d="M52 189h80" stroke="#fff6c2" stroke-width="3" opacity=".35"/></g>',
      sky("wr1", "#0c1430", "#3a2a5a"));
  }

  /* 2. Buford Highway, the Latin strip running up into Gwinnett: low plazas with bright painted stucco, a panaderia awning and a taqueria awning (no names), papel picado strings flapping over the lot */
  function wrbuford() {
    const picado = (y, cols) => '<path d="M0 ' + y + 'q200 18 400 0" stroke="#444" stroke-width="1" fill="none"/>' +
      Array.from({ length: 16 }, (_, i) => '<rect class="wr-fl' + (i % 2 ? " wr-fl2" : "") + '" x="' + (8 + i * 25) + '" y="' + (y + 2 + Math.sin(i / 15 * Math.PI) * 8) + '" width="16" height="14" fill="' + cols[i % cols.length] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#wr2)"/>' +
      '<rect x="10" y="88" width="130" height="84" fill="#f2b84a"/><rect x="150" y="76" width="110" height="96" fill="#e86a7a"/><rect x="270" y="92" width="120" height="80" fill="#4ab0a8"/>' +
      '<path d="M14 112h122l-8 16h-106z" fill="#c0392b"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (22 + i * 20) + ' 112l-4 16h10l4 -16z" fill="#fff" opacity=".85"/>').join("") +
      '<path d="M154 104h102l-8 16h-86z" fill="#2a8a4a"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M' + (162 + i * 20) + ' 104l-4 16h10l4 -16z" fill="#fff" opacity=".85"/>').join("") +
      '<path d="M274 116h112l-8 14h-96z" fill="#f2d24a"/>' +
      '<rect x="30" y="134" width="40" height="38" fill="#2a3442"/><rect x="84" y="134" width="40" height="28" fill="#ffd98a" class="wr-glow"/>' +
      '<rect x="170" y="128" width="34" height="44" fill="#2a3442"/><rect x="214" y="128" width="34" height="30" fill="#ffd98a" class="wr-glow wr-g2"/>' +
      '<rect x="290" y="136" width="80" height="26" fill="#ffd98a" class="wr-glow"/>' +
      '<rect x="0" y="172" width="400" height="88" fill="#55555c"/>' + [40, 120, 200, 280, 360].map(x => '<path d="M' + x + ' 182v30" stroke="#e8e8e8" stroke-width="2"/>').join("") +
      '<rect x="380" y="96" width="6" height="76" fill="#6b7178"/>' + sign(296, 100, 92, "Buford Hwy") +
      picado(14, [ROSE, GOLD, TEAL, "#c0392b", "#7a4ad8", RGREEN]) + picado(48, [GOLD, "#c0392b", TEAL, ROSE, RGREEN, "#7a4ad8"]),
      sky("wr2", "#8ec8ee", "#f6e2c4"));
  }

  /* 3. The big arena on Sugarloaf Pkwy in Duluth where Gwinnett comes to see shows: the glass front lit up at night, crowd lights and stage beams sweeping */
  function wrarena() {
    return svg(
      '<rect width="400" height="260" fill="#0e0c18"/>' +
      '<g class="wr-bm"><path d="M120 0l-46 170h92z" fill="' + ROSE + '" opacity=".16"/></g><g class="wr-bm wr-bm2"><path d="M280 0l-46 170h92z" fill="' + TEAL + '" opacity=".16"/></g>' +
      '<path d="M40 170V92q160 -60 320 0v78z" fill="#3a3e4c"/><path d="M40 92q160 -60 320 0" stroke="#8a90a0" stroke-width="3" fill="none"/>' +
      '<path d="M120 170V104h160v66z" fill="#1c3a5a"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (120 + i * 20) + ' 104v66" stroke="#6a8aaa" stroke-width="1.5"/>').join("") +
      '<path d="M120 126h160M120 148h160" stroke="#6a8aaa" stroke-width="1.5"/>' +
      Array.from({ length: 16 }, (_, i) => '<rect class="wr-glow' + (i % 2 ? " wr-g2" : "") + '" x="' + (124 + (i % 8) * 20) + '" y="' + (108 + Math.floor(i / 8) * 22) + '" width="12" height="16" fill="' + GOLD + '" opacity=".55"/>').join("") +
      '<rect x="0" y="170" width="400" height="90" fill="#2c2c34"/><path d="M0 184h400" stroke="#4a4a54" stroke-width="2"/>' +
      Array.from({ length: 22 }, (_, i) => '<circle class="wr-glow' + (i % 3 ? "" : " wr-g2") + '" cx="' + (12 + i * 18) + '" cy="' + (206 + (i % 3) * 14) + '" r="2.4" fill="#fff6c2"/>').join("") +
      '<rect x="160" y="40" width="80" height="22" rx="3" fill="#111" stroke="' + ROSE + '" stroke-width="1.5"/><text x="200" y="55" text-anchor="middle" ' + font + ' font-size="10" fill="' + ROSE + '">TONIGHT</text>',
      '');
  }

  /* 4. The corner: Pleasant Hill Rd and Satellite Blvd in Duluth by the old mall, WHATUPRG tagged on the wall, the long mall front with its tall entrance tower behind */
  function wrcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#wr4)"/>' +
      '<g fill="#3a3448"><rect x="10" y="84" width="380" height="56"/><path d="M168 140V54l32 -20l32 20v86z"/></g>' +
      '<rect x="182" y="62" width="36" height="40" fill="#5a5268"/><path d="M182 62l18 -12l18 12" stroke="#7a7090" stroke-width="2" fill="none"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect class="' + (i % 3 ? "" : "wr-glow") + '" x="' + (24 + i * 30 + (i > 5 ? 20 : 0)) + '" y="100" width="14" height="10" fill="#ffd98a" opacity=".75"/>').join("") +
      '<rect x="0" y="136" width="400" height="90" fill="#6a5a6e"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#5a4a5e" stroke-width="1"/>').join("") +
      tag("WHATUPRG", 14, 198, 40, ROSE, -5) + tag("LIL HOLY", 30, 222, 20, GOLD, -3) + tag("RG", 290, 214, 30, TEAL, -6) + tag("GWINNETT", 160, 222, 18, "#fff", -4) +
      '<g class="wr-dr"><path d="M60 206q-4 6 0 10q4 -4 0 -10z" fill="' + ROSE + '"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="352" y="96" width="6" height="130" fill="#2f2f2f"/>' + sign(270, 98, 128, "Pleasant Hill Rd") + sign(290, 124, 108, "Satellite Blvd") +
      '<g class="wr-sp"><circle cx="150" cy="166" r="3" fill="' + ROSE + '" opacity=".7"/></g><g class="wr-sp wr-sp2"><circle cx="156" cy="160" r="2" fill="' + ROSE + '" opacity=".6"/></g>',
      sky("wr4", "#1a1430", "#e88a7a"));
  }

  window.SCENES = { wrstation: wrstation, wrexit: wrexit, wrbuford: wrbuford, wrarena: wrarena, wrcorner: wrcorner };
})();
