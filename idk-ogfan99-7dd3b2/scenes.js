/* idk scenes (Regions tab: The DMV; Riverdale, Prince George's County). CSS classes prefixed ik- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ikflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.ik-flk{animation:ikflick 2.6s infinite}.ik-flk2{animation-delay:.9s}' +
    '@keyframes ikbird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-30px)}}.ik-bird{animation:ikbird 11s linear infinite}.ik-bird2{animation-delay:-5.5s}' +
    '@keyframes ikplane{0%{transform:translate(-140px,30px)}100%{transform:translate(460px,-20px)}}.ik-plane{animation:ikplane 13s linear infinite}' +
    '@keyframes iksock{0%,100%{transform:skewY(0) scaleX(1)}50%{transform:skewY(6deg) scaleX(.85)}}.ik-sock{transform-box:fill-box;transform-origin:0% 50%;animation:iksock 1.6s ease-in-out infinite}' +
    '@keyframes ikbeam{0%,100%{opacity:.15}50%{opacity:.8}}.ik-beam{animation:ikbeam 2s ease-in-out infinite}' +
    '@keyframes ikleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-50px,190px) rotate(260deg)}}.ik-lf{transform-box:fill-box;animation:ikleaf 7s linear infinite}.ik-lf2{animation-delay:-2.3s}.ik-lf3{animation-delay:-4.6s}' +
    '@keyframes ikyak{0%{transform:translateX(-80px)}100%{transform:translateX(460px)}}.ik-yak{animation:ikyak 16s linear infinite}.ik-yak2{animation-delay:-8s;animation-duration:20s}' +
    '@keyframes ikripple{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}.ik-rip{animation:ikripple 3s ease-in-out infinite}.ik-rip2{animation-delay:-1.5s}' +
    '@keyframes ikmarc{0%{transform:translateX(420px)}100%{transform:translateX(-520px)}}.ik-marc{animation:ikmarc 9s linear infinite}' +
    '@keyframes ikspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ik-sp{animation:ikspray 1.4s ease-out infinite}.ik-sp2{animation-delay:.45s}' +
    '@keyframes ikcar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.ik-car{animation:ikcar 6s linear infinite}.ik-car2{animation-delay:-3s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const dot = (x, y, c, txt, tc) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="' + c + '" stroke="#fff" stroke-width="1.5"/><text x="' + x + '" y="' + (y + 4) + '" text-anchor="middle" ' + font + ' font-size="10" fill="' + (tc || "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GR = "#00b140", YL = "#ffd100", RD = "#e94b3c", GOLD = "#f5d76e", SKY = "#6fb3e0";
  const bird = (cls, x, y) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'q5 -5 10 0q5 -5 10 0" stroke="#2a2a3a" stroke-width="2" fill="none"/></g>';

  /* 1. College Park-U of Md: Metro's elevated island platform under the concrete canopy, the silver railcar with the Green/Yellow stripe sliding in, MARC tracks and the campus treeline behind */
  function ikstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (44 + i * 46) + '" y="104" width="30" height="20" rx="3" fill="#1d2833"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="94" width="330" height="58" rx="8" fill="#d9dde1" stroke="#7d858d" stroke-width="2"/>' + win +
      '<rect x="24" y="130" width="330" height="4" fill="#5a5f66"/><rect x="24" y="134" width="330" height="3" fill="#bf0d3e"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (68 + i * 60) + '" y="128" width="20" height="22" fill="#c4c9ce" stroke="#9aa1a8"/>').join("") +
      '<rect x="332" y="98" width="20" height="50" rx="5" fill="#bfc4c9"/><circle cx="342" cy="144" r="3.5" fill="#fff6c2"/>' +
      '<rect x="262" y="97" width="68" height="11" rx="2" fill="#111"/><text x="296" y="105.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + GR + '">GREENBELT</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#iks1)"/>' + bird("ik-bird", 10, 40) + bird("ik-bird ik-bird2", 30, 26) +
      /* campus treeline + brick dorm roofs behind */
      '<g fill="#3f5a3a" opacity=".85"><circle cx="20" cy="132" r="26"/><circle cx="60" cy="126" r="22"/><circle cx="350" cy="128" r="26"/><circle cx="390" cy="134" r="22"/></g>' +
      '<g fill="#8a4a36" opacity=".8"><rect x="300" y="110" width="44" height="40"/><path d="M296 110l26 -14l26 14z" fill="#5d3a30"/></g>' +
      /* open concrete canopy over the island platform */
      '<path d="M10 64q190 -34 380 0v10q-190 -30 -380 0z" fill="#cfc8bb" stroke="#8f887c" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (38 + i * 80) + '" y="70" width="8" height="84" fill="#b9b2a5"/>').join("") +
      '<g class="ik-flk"><rect x="80" y="70" width="40" height="3" fill="#fff3c4"/></g><g class="ik-flk ik-flk2"><rect x="270" y="70" width="40" height="3" fill="#fff3c4"/></g>' +
      train +
      /* granite platform edge with the flashing light strip */
      '<rect x="0" y="154" width="400" height="6" fill="#d8cfbd"/><rect x="0" y="160" width="400" height="18" fill="#a59d90"/>' +
      Array.from({ length: 20 }, (_, i) => '<circle cx="' + (10 + i * 20) + '" cy="157" r="1.6" fill="#fff" class="ik-flk' + (i % 2 ? " ik-flk2" : "") + '"/>').join("") +
      /* elevated guideway and piers */
      '<rect x="0" y="178" width="400" height="16" fill="#bdb6a8"/><rect x="0" y="194" width="400" height="4" fill="#8f887c"/>' +
      Array.from({ length: 4 }, (_, i) => '<path d="M' + (40 + i * 110) + ' 198h34l-6 62h-22z" fill="#b2ab9e"/>').join("") +
      '<rect x="0" y="236" width="400" height="24" fill="#3b3a40"/>' +
      /* brown Metro pylon */
      '<rect x="14" y="80" width="14" height="74" fill="#5a3a24"/><rect x="11" y="72" width="20" height="18" rx="2" fill="#5a3a24"/><text x="21" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">M</text>' +
      '<rect x="15" y="94" width="12" height="4" fill="' + GR + '"/><rect x="15" y="99" width="12" height="4" fill="' + YL + '"/>' +
      '<rect x="78" y="204" width="244" height="30" rx="3" fill="#111"/><text x="90" y="225" ' + font + ' font-size="15" fill="#fff">College Park-U of Md</text>' + dot(276, 219, GR, "GR") + dot(300, 219, YL, "YL", "#111") +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff8e8">PRINCE GEORGE\'S COUNTY · UP THE ROAD FROM RIVERDALE</text>',
      sky("iks1", "#1f2a52", "#f2a46a"));
  }

  /* 2. Riversdale (Riverdale Park): the pale-yellow stucco Federal mansion with its white columned portico and two wings, gray hipped roof, big lawn, an oriole crossing and leaves falling */
  function ikriversdale() {
    const winrow = (x, y, n, gap) => Array.from({ length: n }, (_, i) => '<rect x="' + (x + i * gap) + '" y="' + y + '" width="12" height="18" fill="#3b4a5a" stroke="#fff" stroke-width="1.5"/>').join("");
    const leaves = Array.from({ length: 8 }, (_, i) => '<ellipse class="ik-lf' + ["", " ik-lf2", " ik-lf3"][i % 3] + '" cx="' + (30 + i * 48) + '" cy="' + (6 + (i * 19) % 40) + '" rx="4" ry="2.5" fill="' + ["#e2874c", GOLD, "#c0502e"][i % 3] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ikr1)"/>' +
      '<g fill="#5e7d4a"><circle cx="24" cy="150" r="40"/><circle cx="70" cy="140" r="30"/><circle cx="374" cy="146" r="40"/><circle cx="334" cy="152" r="26"/></g>' +
      /* wings */
      '<rect x="72" y="108" width="62" height="70" fill="#e9d9a6" stroke="#c9b880"/><path d="M68 108l35 -16l35 16z" fill="#7d8088"/>' +
      '<rect x="266" y="108" width="62" height="70" fill="#e9d9a6" stroke="#c9b880"/><path d="M262 108l35 -16l35 16z" fill="#7d8088"/>' +
      winrow(80, 120, 3, 15) + winrow(278, 120, 3, 16) + winrow(80, 148, 3, 15) + winrow(278, 148, 3, 16) +
      /* central block */
      '<rect x="128" y="78" width="144" height="100" fill="#efe0ae" stroke="#c9b880"/><path d="M120 80l80 -30l80 30z" fill="#6f727a"/>' +
      '<rect x="160" y="52" width="10" height="20" fill="#8a7a6a"/><rect x="230" y="52" width="10" height="20" fill="#8a7a6a"/>' +
      winrow(140, 88, 6, 22) + winrow(140, 118, 2, 22) + winrow(236, 118, 2, 22) +
      /* white portico */
      '<path d="M170 112h60l-30 -14z" fill="#fff" stroke="#d9d2c0"/><rect x="170" y="112" width="60" height="5" fill="#fff"/>' +
      [174, 188, 206, 220].map(x => '<rect x="' + x + '" y="117" width="5" height="58" fill="#fff"/>').join("") +
      '<rect x="192" y="140" width="16" height="35" fill="#5a3a24"/><rect x="164" y="175" width="72" height="5" fill="#d9d2c0"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#6f9a4e"/><path d="M200 180l-30 80h60z" fill="#c9b98f"/>' +
      '<g class="ik-bird"><path d="M30 60q6 -6 12 0q6 -6 12 0" stroke="#e8771e" stroke-width="3" fill="none"/><circle cx="42" cy="60" r="2.5" fill="#1a1a1a"/></g>' +
      leaves +
      '<rect x="88" y="226" width="224" height="22" rx="3" fill="#1a1a1a" opacity=".85"/><text x="200" y="241" text-anchor="middle" ' + font + ' font-size="11" fill="#f5e7b8">RIVERSDALE · RIVERDALE PARK, MD · 1801</text>',
      sky("ikr1", "#7fb4e0", "#f6e4c4"));
  }

  /* 3. College Park Airport, the world's oldest continuously operating airfield (1909): a Wright-style biplane crossing, the hangars, the windsock and the rotating beacon */
  function ikairport() {
    const plane = '<g class="ik-plane"><g transform="translate(0 60)">' +
      '<rect x="0" y="0" width="90" height="4" rx="1" fill="#f3ead2" stroke="#8a7a5a"/><rect x="0" y="18" width="90" height="4" rx="1" fill="#f3ead2" stroke="#8a7a5a"/>' +
      [10, 30, 60, 80].map(x => '<path d="M' + x + ' 4v14" stroke="#6a5a3a" stroke-width="1.5"/>').join("") +
      '<path d="M45 22l-6 14h12z" fill="#6a5a3a"/><path d="M90 11h26" stroke="#6a5a3a" stroke-width="1.5"/><rect x="114" y="5" width="4" height="14" fill="#f3ead2" stroke="#8a7a5a"/>' +
      '<path d="M-14 9h12M-14 13h12" stroke="#6a5a3a" stroke-width="1.5"/><rect x="-18" y="4" width="4" height="14" fill="#f3ead2" stroke="#8a7a5a"/>' +
      '<circle cx="40" cy="12" r="3" fill="#3a2a2a"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ika1)"/>' + plane +
      '<g fill="#4f6b44" opacity=".9"><circle cx="30" cy="160" r="24"/><circle cx="70" cy="164" r="18"/><circle cx="380" cy="158" r="26"/></g>' +
      /* hangars */
      '<path d="M90 176v-40q50 -26 100 0v40z" fill="#e8e4da" stroke="#9a968c" stroke-width="2"/><rect x="118" y="148" width="44" height="28" fill="#5d6670"/>' +
      '<path d="M200 176v-34q40 -20 80 0v34z" fill="#d7d3c8" stroke="#9a968c" stroke-width="2"/><rect x="222" y="152" width="36" height="24" fill="#5d6670"/>' +
      /* beacon tower */
      '<path d="M318 176l8 -76h8l8 76z" fill="none" stroke="#9aa1a8" stroke-width="2"/><path d="M320 150h20M322 126h16" stroke="#9aa1a8" stroke-width="1.5"/>' +
      '<rect x="323" y="92" width="14" height="10" rx="2" fill="#2c3238"/><path class="ik-beam" d="M337 96l60 -16v14z" fill="#fff6b0"/><path class="ik-beam" d="M323 96l-60 -12v12z" fill="#b8f0c0" style="animation-delay:-1s"/>' +
      /* windsock */
      '<path d="M60 176v-56" stroke="#5a5a5a" stroke-width="3"/><g class="ik-sock"><path d="M60 120l40 4v10l-40 4z" fill="#ff7a2a"/><path d="M72 121v15M84 122v13" stroke="#fff" stroke-width="4"/></g>' +
      /* runway */
      '<rect x="0" y="176" width="400" height="84" fill="#6f9a4e"/><path d="M0 206h400v30h-400z" fill="#4a4a50"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (10 + i * 42) + '" y="219" width="22" height="4" fill="#f2f2f2"/>').join("") +
      '<rect x="98" y="240" width="204" height="18" rx="3" fill="#1a1a1a" opacity=".85"/><text x="200" y="253" text-anchor="middle" ' + font + ' font-size="10.5" fill="#f5e7b8">COLLEGE PARK AIRPORT · SINCE 1909</text>',
      sky("ika1", "#5fa3dc", "#d9ecf7"));
  }

  /* 4. Bladensburg Waterfront Park on the Anacostia, a few minutes from Riverdale: the wooden pier, kayaks gliding past, marsh grass, the boathouse and a gold sunset */
  function ikwater() {
    const yak = (cls, y, c) => '<g class="ik-yak ' + cls + '"><path d="M0 ' + y + 'q30 8 60 0q-30 -6 -60 0z" fill="' + c + '"/><circle cx="30" cy="' + (y - 6) + '" r="4" fill="#2a2a2a"/><path d="M14 ' + (y - 12) + 'l32 10" stroke="#3a3a3a" stroke-width="2"/></g>';
    const grass = Array.from({ length: 26 }, (_, i) => '<path d="M' + (i * 16) + ' 200q' + (i % 2 ? 4 : -4) + ' -22 ' + (i % 3 - 1) * 3 + ' -34" stroke="#7a8a3a" stroke-width="2.5" fill="none"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ikw1)"/><circle cx="300" cy="96" r="26" fill="#ffd88a" opacity=".9"/>' +
      '<g fill="#3d5a3a"><path d="M0 128q40 -22 90 -6q60 -20 120 0q70 -18 190 2v16h-400z"/></g>' +
      /* boathouse */
      '<rect x="40" y="110" width="70" height="30" fill="#7a5a3e"/><path d="M34 110l41 -18l41 18z" fill="#4a3a2e"/><rect x="62" y="120" width="26" height="20" fill="#3a2a20"/>' +
      '<rect x="0" y="140" width="400" height="120" fill="#3f6f86"/>' +
      '<g class="ik-rip"><path d="M20 160h50M150 172h60M280 158h40M330 186h50" stroke="#a9d3e6" stroke-width="2" opacity=".7"/></g>' +
      '<g class="ik-rip ik-rip2"><path d="M70 196h40M200 206h60M30 222h50" stroke="#a9d3e6" stroke-width="2" opacity=".6"/></g>' +
      '<path d="M300 140v6" stroke="#ffd88a" stroke-width="40" opacity=".18"/>' +
      yak("", 176, "#ff7a2a") + yak("ik-yak2", 196, GOLD) +
      /* wooden pier */
      '<path d="M210 150h190v10h-190z" fill="#9a7450"/>' + [220, 260, 300, 340, 380].map(x => '<rect x="' + x + '" y="160" width="6" height="40" fill="#6a4e36"/>').join("") +
      '<path d="M210 150v-14M400 150v-14M210 140h190" stroke="#6a4e36" stroke-width="3"/>' +
      '<g transform="translate(0 40)">' + grass + '</g>' +
      '<rect x="74" y="236" width="252" height="18" rx="3" fill="#1a1a1a" opacity=".85"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="10.5" fill="#f5e7b8">BLADENSBURG WATERFRONT · ANACOSTIA RIVER</text>',
      sky("ikw1", "#3a3f78", "#f4a96a"));
  }

  /* 5. Kenilworth Ave and Riverdale Rd in Riverdale: green street signs, a cinderblock wall with IDK tagged, a MARC train rolling past on the Camden Line behind, cars on Kenilworth */
  function ikcorner() {
    const car = (cls, c) => '<g class="ik-car ' + cls + '"><rect x="0" y="214" width="62" height="18" rx="5" fill="' + c + '"/><rect x="12" y="204" width="36" height="14" rx="4" fill="' + c + '"/><rect x="16" y="207" width="12" height="8" fill="#9fc6dd"/><rect x="32" y="207" width="12" height="8" fill="#9fc6dd"/><circle cx="14" cy="232" r="6" fill="#1a1a1a"/><circle cx="48" cy="232" r="6" fill="#1a1a1a"/></g>';
    const marc = '<g class="ik-marc">' + Array.from({ length: 4 }, (_, i) => '<g transform="translate(' + (i * 112) + ' 0)"><rect x="0" y="70" width="108" height="34" rx="4" fill="#c9ced3" stroke="#7d858d"/>' +
      Array.from({ length: 6 }, (_, j) => '<rect x="' + (8 + j * 17) + '" y="76" width="11" height="10" fill="#26323e"/>').join("") +
      '<rect x="0" y="92" width="108" height="4" fill="#1f4e9a"/><rect x="0" y="96" width="108" height="3" fill="#d23a2a"/></g>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ikc1)"/>' +
      '<g fill="#2a2f4a"><rect x="0" y="60" width="70" height="60"/><rect x="320" y="52" width="80" height="68"/></g>' +
      /* rail embankment + train */
      '<rect x="0" y="104" width="400" height="10" fill="#5a5048"/><path d="M0 106h400" stroke="#8a8a8a" stroke-width="2"/>' + marc +
      /* cinderblock wall */
      '<rect x="0" y="114" width="400" height="104" fill="#b9b4aa"/>' + Array.from({ length: 13 }, (_, r) => Array.from({ length: 11 }, (_, c) => '<rect x="' + (c * 40 - (r % 2) * 20) + '" y="' + (114 + r * 8) + '" width="40" height="8" fill="none" stroke="#a29d93" stroke-width="1"/>').join("")).join("") +
      tag("IDK", 30, 190, 66, RD, -6) + tag("HXLY", 160, 172, 36, GOLD, -4) + tag("NO SHOES ON THE RUG", 28, 210, 15, "#fff", -3) + tag("PG", 200, 206, 22, SKY, -4) +
      '<g class="ik-sp"><circle cx="150" cy="160" r="3" fill="' + RD + '" opacity=".7"/></g><g class="ik-sp ik-sp2"><circle cx="156" cy="154" r="2" fill="' + RD + '" opacity=".6"/></g>' +
      '<rect x="0" y="218" width="400" height="42" fill="#4a4a50"/><path d="M0 244h400" stroke="#f2c200" stroke-width="2.5" stroke-dasharray="18 12"/>' +
      car("", "#7a1f2a") + car("ik-car2", "#2a4a7a") +
      /* sign pole */
      '<rect x="330" y="96" width="6" height="122" fill="#2f2f2f"/>' + sign(278, 96, 110, "Kenilworth Ave") + sign(286, 122, 96, "Riverdale Rd"),
      sky("ikc1", "#16183a", "#e2704e"));
  }

  window.SCENES = { ikstation: ikstation, ikriversdale: ikriversdale, ikairport: ikairport, ikwater: ikwater, ikcorner: ikcorner };
})();
