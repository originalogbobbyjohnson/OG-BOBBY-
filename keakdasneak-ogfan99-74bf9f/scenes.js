/* keakdasneak scenes (Regions tab: The Bay Area; Allendale, East Oakland). CSS classes prefixed kds- (the page's own anim-train is kept).
   1 MacArthur Blvd & 38th Ave: the AC Transit 57 pulling up along MacArthur in the Laurel, the 580 freeway up on its wall behind.
   2 Bret Harte Middle School on Coolidge Ave, where he did the talent shows: the stage, red curtains, one mic, a sweeping spotlight.
   3 Allendale Park and Rec Center by his elementary school: the outdoor court, a ball bouncing, oaks swaying.
   4 The farm outside Sacramento where he lives now: red barn, fence, goats and cattle grazing, the sun dropping.
   5 38th Ave and Allendale Ave: green signs, KEAK DA SNEAK tagged with 3X, the Grand Lake Theatre's rooftop sign lit behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kdsflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.95}}.kds-flk{animation:kdsflick 2.4s infinite}.kds-flk2{animation-delay:.8s}' +
    '@keyframes kdscar{from{transform:translateX(-120px)}to{transform:translateX(540px)}}.kds-car{animation:kdscar 6s linear infinite}.kds-car2{animation-delay:-3s}' +
    '@keyframes kdscarb{from{transform:translateX(540px)}to{transform:translateX(-140px)}}.kds-carb{animation:kdscarb 7s linear infinite}' +
    '@keyframes kdsspot{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.kds-spot{transform-box:view-box;transform-origin:200px 0px;animation:kdsspot 4s ease-in-out infinite}' +
    '@keyframes kdsbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.kds-bob{animation:kdsbob .6s ease-in-out infinite}.kds-bob2{animation-delay:-.3s}' +
    '@keyframes kdsball{0%,100%{transform:translateY(0)}50%{transform:translateY(-42px)}}.kds-ball{animation:kdsball .9s ease-in infinite}' +
    '@keyframes kdssway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.kds-tree{transform-box:fill-box;transform-origin:50% 100%;animation:kdssway 4s ease-in-out infinite}.kds-tree2{animation-delay:-2s}' +
    '@keyframes kdsgoat{0%,100%{transform:translateX(0)}50%{transform:translateX(26px)}}.kds-goat{animation:kdsgoat 6s ease-in-out infinite}.kds-goat2{animation-delay:-3s}' +
    '@keyframes kdsgraze{0%,100%{transform:rotate(0)}50%{transform:rotate(14deg)}}.kds-head{transform-box:fill-box;transform-origin:100% 0;animation:kdsgraze 2.2s ease-in-out infinite}' +
    '@keyframes kdssun{from{transform:translateY(0)}to{transform:translateY(16px)}}.kds-sun{animation:kdssun 8s ease-in-out infinite alternate}' +
    '@keyframes kdsspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kds-sp{animation:kdsspray 1.4s ease-out infinite}.kds-sp2{animation-delay:.5s}' +
    '@keyframes kdschase{0%,100%{opacity:.25}50%{opacity:1}}.kds-bulb{animation:kdschase 1s steps(1) infinite}.kds-bulb2{animation-delay:-.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="54" height="13" rx="5" fill="' + c + '"/><rect x="' + (x + 11) + '" y="' + (y - 8) + '" width="30" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 14) + '" y="' + (y - 6) + '" width="11" height="6" fill="#bfe3ff"/><rect x="' + (x + 28) + '" y="' + (y - 6) + '" width="11" height="6" fill="#bfe3ff"/><circle cx="' + (x + 12) + '" cy="' + (y + 13) + '" r="5" fill="#111"/><circle cx="' + (x + 42) + '" cy="' + (y + 13) + '" r="5" fill="#111"/></g>';
  const oak = (x, y, s, cls) => '<g class="kds-tree ' + (cls || "") + '"><rect x="' + (x - 4 * s) + '" y="' + (y - 30 * s) + '" width="' + (8 * s) + '" height="' + (30 * s) + '" fill="#5a3f2a"/><circle cx="' + x + '" cy="' + (y - 40 * s) + '" r="' + (22 * s) + '" fill="#2f6b34"/><circle cx="' + (x - 16 * s) + '" cy="' + (y - 32 * s) + '" r="' + (15 * s) + '" fill="#3a7d3e"/><circle cx="' + (x + 16 * s) + '" cy="' + (y - 33 * s) + '" r="' + (15 * s) + '" fill="#2a5f30"/></g>';
  const GOLD = "#ffd23f", HYG = "#2ee86b", PNK = "#ff4f81", ACG = "#00843d", ACB = "#0072bc";

  /* 1. MacArthur Blvd & 38th Ave: AC Transit 57 */
  function kdsstop() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 42) + '" y="112" width="32" height="24" rx="2" fill="#1d2a38"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="102" width="320" height="74" rx="10" fill="#f4f6f4" stroke="#7d868e" stroke-width="2"/>' + wins +
      '<rect x="40" y="146" width="320" height="9" fill="' + ACG + '"/><rect x="40" y="155" width="320" height="5" fill="' + ACB + '"/>' +
      '<rect x="328" y="112" width="30" height="44" rx="3" fill="#1d2a38"/><rect x="326" y="104" width="34" height="8" rx="2" fill="#111"/><text x="343" y="111" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">57</text>' +
      '<circle cx="356" cy="166" r="3.5" fill="#fff6c2"/><circle cx="92" cy="178" r="12" fill="#111"/><circle cx="92" cy="178" r="5" fill="#777"/><circle cx="300" cy="178" r="12" fill="#111"/><circle cx="300" cy="178" r="5" fill="#777"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kds1)"/>' +
      '<path d="M0 70q60-26 120-8t130-16 150 10v40H0z" fill="#3b4a52"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (i * 30 + 4) + '" y="' + (66 + (i % 3) * 4) + '" width="3" height="3" fill="#ffe7a0" class="kds-flk' + (i % 2 ? " kds-flk2" : "") + '"/>').join("") +
      '<rect x="0" y="80" width="400" height="22" fill="#8c8f8a"/><rect x="0" y="76" width="400" height="6" fill="#b4b6b0"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 42 + 10) + '" y="70" width="4" height="8" fill="#9a9c96"/>').join("") +
      car("kds-car", 0, 66, PNK) + car("kds-car kds-car2", 0, 66, "#6fb3ff") +
      '<rect x="0" y="176" width="400" height="84" fill="#3a3d42"/><rect x="0" y="176" width="400" height="5" fill="#c9c4b4"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 54 + 6) + '" y="222" width="30" height="4" fill="#e8d36a"/>').join("") +
      bus +
      '<rect x="18" y="58" width="4" height="120" fill="#7a7f86"/><rect x="4" y="58" width="50" height="30" rx="3" fill="#fff" stroke="' + ACG + '" stroke-width="3"/>' +
      '<text x="29" y="71" text-anchor="middle" ' + font + ' font-size="6.5" fill="' + ACG + '">AC TRANSIT</text><text x="28" y="84" text-anchor="middle" ' + font + ' font-size="12" fill="#111">57</text>' +
      sign(232, 30, 128, "MacArthur Blvd") + sign(256, 54, 80, "38th Av") + '<rect x="294" y="76" width="4" height="26" fill="#2a2a2a"/>',
      sky("kds1", "#1d2240", "#e98a5a"));
  }

  /* 2. Bret Harte Middle School talent show */
  function kdsharte() {
    const heads = Array.from({ length: 12 }, (_, i) => '<g class="kds-bob' + (i % 2 ? " kds-bob2" : "") + '"><circle cx="' + (18 + i * 33) + '" cy="226" r="12" fill="#14161c"/><rect x="' + (6 + i * 33) + '" y="234" width="24" height="30" rx="8" fill="#14161c"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="#2a1a20"/>' +
      '<rect x="0" y="0" width="400" height="26" fill="#6e1020"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 26q10 14 20 0" fill="#8e1a2c"/>').join("") +
      '<rect x="40" y="36" width="320" height="146" fill="#3b2a24"/><rect x="40" y="170" width="320" height="16" fill="#7a5532"/><rect x="30" y="184" width="340" height="8" fill="#5a3c22"/>' +
      '<path d="M0 26h70v170H0z" fill="#9c1428"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (6 + i * 11) + ' 30v162" stroke="#6e0d1c" stroke-width="3"/>').join("") +
      '<path d="M330 26h70v170h-70z" fill="#9c1428"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (336 + i * 11) + ' 30v162" stroke="#6e0d1c" stroke-width="3"/>').join("") +
      '<g class="kds-spot"><path d="M200 0L150 186h100z" fill="#fff6c8" opacity=".22"/></g>' +
      '<ellipse cx="200" cy="178" rx="44" ry="7" fill="#fff6c8" opacity=".35"/>' +
      '<rect x="198" y="118" width="4" height="56" fill="#c9ccd2"/><rect x="186" y="172" width="28" height="4" rx="2" fill="#c9ccd2"/><rect x="194" y="106" width="12" height="16" rx="6" fill="#2b2b2b"/><rect x="195" y="108" width="10" height="7" rx="3" fill="#8a8f96"/>' +
      '<rect x="110" y="46" width="180" height="26" rx="3" fill="#f2e6c8" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="64" text-anchor="middle" ' + font + ' font-size="11" fill="#6e1020">BRET HARTE TALENT SHOW</text>' +
      '<rect x="120" y="140" width="34" height="30" rx="3" fill="#1b1b1b"/><circle cx="137" cy="155" r="10" fill="#333"/><circle cx="137" cy="155" r="4" fill="#666"/>' +
      '<rect x="246" y="140" width="34" height="30" rx="3" fill="#1b1b1b"/><circle cx="263" cy="155" r="10" fill="#333"/><circle cx="263" cy="155" r="4" fill="#666"/>' +
      heads);
  }

  /* 3. Allendale Park and Rec Center */
  function kdspark() {
    return svg(
      '<rect width="400" height="260" fill="url(#kds3)"/>' +
      '<path d="M0 100q80-30 170-10t230-6v40H0z" fill="#4f7d5a"/>' +
      oak(40, 140, 1.3) + oak(360, 136, 1.2, "kds-tree2") +
      '<rect x="100" y="76" width="200" height="62" fill="#e9dcc0"/><path d="M92 78h216l-12-16H104z" fill="#8a5a3a"/>' +
      '<rect x="114" y="92" width="34" height="24" fill="#3b5a72"/><rect x="164" y="92" width="34" height="24" fill="#3b5a72"/><rect x="252" y="92" width="34" height="24" fill="#3b5a72"/><rect x="212" y="100" width="28" height="38" fill="#6a4a30"/>' +
      '<rect x="128" y="64" width="144" height="14" fill="#f4f1e8" stroke="#2f6b34" stroke-width="1.5"/><text x="200" y="75" text-anchor="middle" ' + font + ' font-size="9" fill="#2f6b34">ALLENDALE REC CENTER</text>' +
      '<rect x="0" y="138" width="400" height="122" fill="#2f7a5a"/><rect x="30" y="150" width="340" height="104" fill="#3c8f6a" stroke="#f4f1e8" stroke-width="3"/>' +
      '<path d="M200 150v104" stroke="#f4f1e8" stroke-width="2"/><circle cx="200" cy="202" r="18" fill="none" stroke="#f4f1e8" stroke-width="2"/>' +
      '<path d="M330 172h40v60h-40z" fill="none" stroke="#f4f1e8" stroke-width="2"/>' +
      '<rect x="356" y="120" width="5" height="90" fill="#8a8f96"/><rect x="334" y="114" width="40" height="28" fill="#fff" stroke="#333" stroke-width="2"/><rect x="345" y="124" width="16" height="12" fill="none" stroke="' + PNK + '" stroke-width="2"/>' +
      '<ellipse cx="346" cy="144" rx="10" ry="3" fill="none" stroke="#ff7a1a" stroke-width="2.5"/><path d="M337 145l4 12h10l4-12" fill="none" stroke="#fff" stroke-width="1"/>' +
      '<g class="kds-ball"><circle cx="300" cy="230" r="9" fill="#e8742b"/><path d="M291 230h18M300 221v18" stroke="#5a2a10" stroke-width="1.3"/></g>' +
      '<ellipse cx="300" cy="241" rx="9" ry="2" fill="#1f5a40"/>',
      sky("kds3", "#8fd0ff", "#e8f6ff"));
  }

  /* 4. The farm outside Sacramento */
  function kdsfarm() {
    const goat = (x, y, c, cls) => '<g class="' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="16" ry="9" fill="' + c + '"/><g class="kds-head"><path d="M' + (x - 14) + ' ' + (y - 4) + 'l-8-10l-6 4l6 10z" fill="' + c + '"/><path d="M' + (x - 20) + ' ' + (y - 14) + 'l-2-7M' + (x - 17) + ' ' + (y - 15) + 'l1-7" stroke="#6a5a4a" stroke-width="2"/></g>' +
      '<path d="M' + (x - 10) + ' ' + (y + 6) + 'v12M' + (x - 4) + ' ' + (y + 7) + 'v11M' + (x + 6) + ' ' + (y + 7) + 'v11M' + (x + 12) + ' ' + (y + 6) + 'v12" stroke="' + c + '" stroke-width="3"/><path d="M' + (x + 15) + ' ' + (y - 4) + 'l5-5" stroke="' + c + '" stroke-width="3"/></g>';
    const cow = (x, y) => '<g><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="14" fill="#2b2b2b"/><ellipse cx="' + (x + 4) + '" cy="' + (y - 4) + '" rx="8" ry="6" fill="#f4f1e8"/><path d="M' + (x - 24) + ' ' + (y - 6) + 'l-12 4l2 12l12-2z" fill="#2b2b2b"/>' +
      '<path d="M' + (x - 16) + ' ' + (y + 10) + 'v14M' + (x - 6) + ' ' + (y + 12) + 'v12M' + (x + 10) + ' ' + (y + 12) + 'v12M' + (x + 20) + ' ' + (y + 10) + 'v14" stroke="#2b2b2b" stroke-width="5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kds4)"/>' +
      '<g class="kds-sun"><circle cx="300" cy="70" r="26" fill="#ffcf5a"/></g>' +
      '<path d="M0 128q100-24 200-6t200-8v30H0z" fill="#9aa86a"/>' +
      '<rect x="0" y="134" width="400" height="126" fill="#c9b45a"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (150 + i * 9) + 'q200 -6 400 0" stroke="#b8a24a" stroke-width="1.5" fill="none"/>').join("") +
      '<rect x="40" y="70" width="110" height="80" fill="#b5302a"/><path d="M30 74l65-40 65 40z" fill="#7a1e1a"/>' +
      '<rect x="74" y="98" width="42" height="52" fill="#f4f1e8"/><path d="M74 98l42 52M116 98l-42 52" stroke="#b5302a" stroke-width="4"/><rect x="84" y="56" width="22" height="14" fill="#f4f1e8"/>' +
      '<rect x="168" y="62" width="22" height="88" rx="10" fill="#c9ccd2"/><path d="M168 66q11-14 22 0" fill="#8a8f96"/>' +
      '<rect x="210" y="104" width="78" height="20" rx="2" fill="#6a4a30"/><text x="249" y="118" text-anchor="middle" ' + font + ' font-size="11" fill="#f4e6c0">THE FARM</text><rect x="246" y="124" width="5" height="26" fill="#6a4a30"/>' +
      cow(330, 170) +
      goat(150, 196, "#f4f1e8", "kds-goat") + goat(240, 214, "#8a6a4a", "kds-goat kds-goat2") +
      '<path d="M0 232h400M0 246h400" stroke="#7a5532" stroke-width="4"/>' + Array.from({ length: 11 }, (_, i) => '<rect x="' + (i * 40 + 4) + '" y="222" width="6" height="38" fill="#7a5532"/>').join(""),
      sky("kds4", "#ff9a5a", "#ffe0a0"));
  }

  /* 5. 38th Ave and Allendale Ave */
  function kdscorner() {
    const bulbs = Array.from({ length: 10 }, (_, i) => '<circle cx="' + (122 + i * 17) + '" cy="30" r="2.5" fill="#fff3b0" class="kds-bulb' + (i % 2 ? " kds-bulb2" : "") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kds5)"/>' +
      '<rect x="110" y="20" width="180" height="56" rx="3" fill="#1a1028" stroke="#ff4fd8" stroke-width="2"/>' + bulbs +
      '<text x="200" y="64" text-anchor="middle" ' + font + ' font-size="24" fill="#ff7ae0" class="kds-flk" stroke="#fff" stroke-width=".6">GRAND LAKE</text>' +
      '<rect x="190" y="76" width="4" height="20" fill="#333"/><rect x="206" y="76" width="4" height="20" fill="#333"/>' +
      '<path d="M0 104h400v20H0z" fill="#2a2440"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 52) + '" y="88" width="40" height="18" fill="#3a3456"/>').join("") +
      '<rect x="0" y="118" width="400" height="98" fill="#7a3b2a"/>' +
      Array.from({ length: 7 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<rect x="' + (c * 30 + (r % 2 ? 15 : 0) - 10) + '" y="' + (118 + r * 14) + '" width="28" height="12" fill="#8a4532"/>').join("")).join("") +
      tag("KEAK DA SNEAK", 18, 172, 31, GOLD, -5) + tag("3X", 40, 208, 28, HYG, 8) + tag("HYPHY", 150, 206, 22, PNK, -4) +
      '<g class="kds-sp"><circle cx="372" cy="150" r="4" fill="' + HYG + '" opacity=".7"/></g><g class="kds-sp kds-sp2"><circle cx="380" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g>' +
      '<rect x="0" y="216" width="400" height="44" fill="#3a3d42"/><rect x="0" y="216" width="400" height="5" fill="#c9c4b4"/>' +
      car("kds-carb", 0, 236, "#ffd23f") +
      '<rect x="352" y="96" width="5" height="122" fill="#2f3a2f"/>' + sign(304, 96, 92, "38th Av") + sign(294, 120, 102, "Allendale Av"),
      sky("kds5", "#120c2a", "#4a2a5a"));
  }

  window.SCENES = { kdsstop, kdsharte, kdspark, kdsfarm, kdscorner };
})();
