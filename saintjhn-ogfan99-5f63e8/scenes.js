/* SAINt JHN game (NYC map, Brooklyn: East New York). Scenes:
   1. the J pulling into Norwood Av, up on the Jamaica Av el (red canopy with green frames, silver lampposts, black sign, brown J and Z bullets);
   2. St. George's Cathedral, Georgetown, Guyana: the tall white timber Gothic cathedral where he spent his childhood years between NY and Guyana, an Easter kite flying;
   3. the Georgetown Lighthouse: red-and-white striped octagonal tower at the mouth of the brown Demerara, a boat rolling by ("Georgetown massive");
   4. Kaieteur Falls, Guyana: the giant single drop off the sandstone table, the mist rising out of the green gorge;
   5. Jamaica Av & Norwood Av: green signs, the wall tagged SAINt JHN, the J sliding along the el behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sjcar{from{transform:translateX(-300px)}to{transform:translateX(460px)}}.sj-car{animation:sjcar 8s linear infinite}.sj-car2{animation:sjcar 6s linear infinite;animation-delay:-2s}' +
    '@keyframes sjflk{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.sj-flk{animation:sjflk 2.4s infinite}' +
    '@keyframes sjkite{0%,100%{transform:translate(0,0) rotate(-4deg)}50%{transform:translate(10px,-8px) rotate(5deg)}}.sj-kite{transform-box:fill-box;transform-origin:50% 100%;animation:sjkite 3s ease-in-out infinite}' +
    '@keyframes sjcloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.sj-cloud{animation:sjcloud 26s linear infinite}.sj-cloud2{animation-delay:-13s}' +
    '@keyframes sjbeam{0%,100%{opacity:.15}50%{opacity:.75}}.sj-beam{animation:sjbeam 2.2s ease-in-out infinite}' +
    '@keyframes sjboat{0%{transform:translateX(420px)}100%{transform:translateX(-140px)}}.sj-boat{animation:sjboat 14s linear infinite}' +
    '@keyframes sjwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-16px)}}.sj-wave{animation:sjwave 3s ease-in-out infinite}.sj-wave2{animation-delay:-1.5s}' +
    '@keyframes sjfall{from{transform:translateY(-40px)}to{transform:translateY(0)}}.sj-fall{animation:sjfall .7s linear infinite}' +
    '@keyframes sjmist{0%,100%{opacity:.45;transform:scale(1)}50%{opacity:.85;transform:scale(1.08)}}.sj-mist{transform-box:fill-box;transform-origin:50% 50%;animation:sjmist 2.6s ease-in-out infinite}.sj-mist2{animation-delay:-1.3s}' +
    '@keyframes sjbird{0%{transform:translate(-30px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,0)}}.sj-bird{animation:sjbird 11s linear infinite}.sj-bird2{animation-delay:-5s}' +
    '@keyframes sjsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.sj-sway{transform-box:fill-box;transform-origin:50% 100%;animation:sjsway 3.4s ease-in-out infinite}' +
    '@keyframes sjdrip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(14px);opacity:0}}.sj-drip{animation:sjdrip 1.8s ease-in infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const cloud = (x, y, s, cls) => '<g class="sj-cloud ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><ellipse cx="0" cy="0" rx="26" ry="9" fill="#fff" opacity=".9"/><ellipse cx="14" cy="-6" rx="14" ry="9" fill="#fff" opacity=".9"/><ellipse cx="-10" cy="-4" rx="11" ry="7" fill="#fff" opacity=".9"/></g></g>';
  const palm = (x, y, h) => '<g class="sj-sway"><path d="M' + x + ' ' + y + 'q-4 -' + (h / 2) + ' 2 -' + h + '" stroke="#7a5a3a" stroke-width="5" fill="none"/>' +
    '<g transform="translate(' + (x + 2) + ' ' + (y - h) + ')"><path d="M0 0q-18-8-30 4M0 0q18-8 30 4M0 0q-12-16-26-14M0 0q12-16 26-14M0 0q0-14 4-20" stroke="#2f8a3f" stroke-width="5" fill="none" stroke-linecap="round"/></g></g>';
  const ROSE = "#ff7a93", GOLD = "#f2b63c", GREEN = "#3fbf7f", CREAM = "#f6ecdc", BROWN = "#996633";
  const jcar = (x, w) => {
    let win = ""; for (let wx = x + 14; wx < x + w - 20; wx += 30) win += '<rect x="' + wx + '" y="0" width="20" height="16" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return win;
  };

  /* 1. Norwood Av: the elevated platform over Jamaica Av, red canopy on green frames, silver lampposts, black sign with J and Z, the J pulling in */
  function sjNorwood() {
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="98" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    let roofs = "";
    [[0, 150, 70, "#7a5040"], [70, 158, 60, "#8a6a58"], [130, 148, 80, "#6a4a3e"], [210, 156, 70, "#9a7a62"], [280, 146, 60, "#7a5a4a"], [340, 154, 60, "#8a5a44"]].forEach(r => {
      roofs += '<rect x="' + r[0] + '" y="' + r[1] + '" width="' + r[2] + '" height="' + (200 - r[1]) + '" fill="' + r[3] + '"/>';
      for (let wx = r[0] + 8; wx < r[0] + r[2] - 10; wx += 18) roofs += '<rect x="' + wx + '" y="' + (r[1] + 10) + '" width="8" height="10" fill="#ffe9a8" opacity=".75"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#sjn)"/>' + cloud(60, 30, 1) + cloud(260, 46, .8, "sj-cloud2") +
      /* the green rise behind Jamaica Av */
      '<path d="M0 150q90-40 200-26t200 6v70H0z" fill="#4f7a4a"/>' + roofs +
      /* canopy: red roof on green frames */
      '<path d="M0 18h400v10H0z" fill="#b8322e"/><path d="M0 28h400v4H0z" fill="#8a2420"/>' +
      [40, 140, 240, 340].map(x => '<rect x="' + (x - 3) + '" y="32" width="6" height="118" fill="#2f6b45"/><path d="M' + (x - 14) + ' 32l14 12l14-12" stroke="#2f6b45" stroke-width="3" fill="none"/>').join("") +
      /* silver lampposts */
      [90, 300].map(x => '<rect x="' + (x - 2) + '" y="40" width="4" height="110" fill="#c9ced6"/><rect class="sj-flk" x="' + (x - 9) + '" y="38" width="18" height="6" rx="3" fill="#fff8d6"/>').join("") +
      /* black station sign */
      '<rect x="88" y="52" width="224" height="30" rx="3" fill="#111"/><rect x="88" y="52" width="224" height="3" fill="#fff"/>' +
      '<text x="102" y="73" ' + font + ' font-size="15" fill="#fff">Norwood Av</text>' + bullet(264, 67, "J", BROWN) + bullet(290, 67, "Z", BROWN) +
      /* the J */
      '<g class="anim-train">' +
        '<rect x="10" y="88" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="10" y="124" width="300" height="4" fill="' + BROWN + '"/>' + bullet(292, 110, "J", BROWN) +
        '<rect x="150" y="98" width="20" height="40" fill="#9aa3ad"/><circle cx="304" cy="134" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge */
      '<rect x="0" y="146" width="400" height="10" fill="#d8c060"/><rect x="0" y="156" width="400" height="18" fill="#6c6f75"/>' +
      '<rect x="0" y="174" width="400" height="8" fill="#3d3f44"/>' +
      /* the el under the platform + Jamaica Av below */
      [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="182" width="14" height="58" fill="#4a4d52"/>').join("") +
      '<rect x="0" y="230" width="400" height="30" fill="#55575c"/>' +
      '<g class="sj-car2"><rect x="0" y="236" width="46" height="14" rx="4" fill="' + ROSE + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/></g>',
      sky("sjn", "#2b4d7a", "#f2a96b"));
  }

  /* 2. St. George's Cathedral, Georgetown: the tall white wooden Gothic cathedral with its grey roof and spire, palms, an Easter kite */
  function sjCathedral() {
    let lancets = "";
    for (let x = 118; x < 300; x += 24) lancets += '<path d="M' + x + ' 196v-34q6-12 12 0v34z" fill="#5a7fa8" stroke="#e8e4da" stroke-width="2"/>';
    let clap = "";
    for (let y = 132; y < 220; y += 6) clap += '<path d="M104 ' + y + 'h214" stroke="#dcd8ce" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sjc)"/>' + cloud(40, 40, 1) + cloud(250, 26, .7, "sj-cloud2") +
      /* lawn */
      '<rect x="0" y="214" width="400" height="46" fill="#5fae4f"/><path d="M0 222h400" stroke="#4f9a40" stroke-width="2"/>' +
      /* nave: white timber, grey pitched roof */
      '<path d="M96 132l115-38l115 38z" fill="#7c8590"/><path d="M96 132l115-38l115 38" stroke="#5c646e" stroke-width="2" fill="none"/>' +
      '<rect x="104" y="132" width="214" height="84" fill="#f4f1ea"/>' + clap + lancets +
      /* the tower + tall spire */
      '<rect x="186" y="78" width="50" height="138" fill="#f7f4ee" stroke="#d6d1c6" stroke-width="1.5"/>' +
      '<path d="M186 78l25-62l25 62z" fill="#8a929c" stroke="#666e78" stroke-width="1.5"/>' +
      '<path d="M211 16v-12M205 9h12" stroke="#c9a24a" stroke-width="2.5"/>' +
      [182, 240].map(x => '<path d="M' + x + ' 82l4-14l4 14z" fill="#8a929c"/>').join("") +
      '<path d="M198 150v-30q13-22 26 0v30z" fill="#5a7fa8" stroke="#e8e4da" stroke-width="2"/><circle cx="211" cy="104" r="9" fill="#e8e4da" stroke="#c9c2b4"/><path d="M211 98v6l4 3" stroke="#555" stroke-width="1.5" fill="none"/>' +
      '<path d="M198 216v-40q13-18 26 0v40z" fill="#6a4a32"/>' +
      /* palms */
      palm(56, 216, 110) + palm(352, 216, 96) +
      /* a kite on a long string */
      '<path d="M330 212q-20-80 -6 -150" stroke="#fff" stroke-width=".8" fill="none" opacity=".8"/>' +
      '<g class="sj-kite"><path d="M324 34l14 16l-14 22l-14-22z" fill="' + GOLD + '" stroke="#fff" stroke-width="1"/><path d="M324 34v38M310 50h28" stroke="#c0392b" stroke-width="1.5"/><path d="M324 72q4 8 -2 14q6 6 0 12" stroke="' + ROSE + '" stroke-width="2" fill="none"/></g>' +
      /* sign */
      '<rect x="110" y="232" width="180" height="20" rx="3" fill="#123" opacity=".85"/>' + txt("ST. GEORGE'S · GEORGETOWN", 200, 246, 10, "#fff", 'letter-spacing="1"'),
      sky("sjc", "#3f8fd6", "#bfe3f5"));
  }

  /* 3. The Georgetown Lighthouse: red-and-white striped octagonal tower at the mouth of the Demerara, a boat going by */
  function sjLighthouse() {
    let bands = "";
    for (let i = 0; i < 7; i++) {
      const y = 70 + i * 18, t = i * 1.2;
      bands += '<path d="M' + (178 - t) + ' ' + y + 'h' + (44 + 2 * t) + 'l1.2 18h-' + (46.4 + 2 * t) + 'z" fill="' + (i % 2 ? "#f4f1ea" : "#c8262b") + '"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#sjl)"/>' + stars(8) +
      /* light beams */
      '<path class="sj-beam" d="M200 52l-200-30v40z" fill="#fff6c2"/><path class="sj-beam" style="animation-delay:-1.1s" d="M200 52l200-24v36z" fill="#fff6c2"/>' +
      /* the river: brown Demerara water */
      '<rect x="0" y="180" width="400" height="80" fill="#8a6a42"/>' +
      '<path class="sj-wave" d="M0 196q20-5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#b8956a" stroke-width="2" fill="none"/>' +
      '<path class="sj-wave sj-wave2" d="M0 222q20-5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#a8855a" stroke-width="2" fill="none"/>' +
      /* shore wall */
      '<rect x="0" y="194" width="140" height="12" fill="#8a8a84"/><rect x="0" y="206" width="140" height="54" fill="#6f6a60"/>' +
      /* the tower */
      '<rect x="168" y="198" width="64" height="10" fill="#9a958a"/>' + bands +
      '<rect x="174" y="58" width="52" height="8" fill="#222"/><rect x="182" y="40" width="36" height="18" fill="#fff6c2" stroke="#222" stroke-width="3"/>' +
      '<path d="M178 40l22-14l22 14z" fill="#c8262b" stroke="#222" stroke-width="1.5"/><circle cx="200" cy="49" r="5" fill="#fff" class="sj-flk"/>' +
      '<rect x="194" y="174" width="12" height="18" fill="#3a2a1a"/>' +
      /* the boat */
      '<g class="sj-boat"><path d="M0 196h70l-10 14H8z" fill="#2f6b9a"/><rect x="18" y="182" width="30" height="14" fill="#f4f1ea"/><rect x="22" y="186" width="6" height="5" fill="#5a7fa8"/><rect x="32" y="186" width="6" height="5" fill="#5a7fa8"/><rect x="44" y="172" width="4" height="12" fill="#c8262b"/></g>' +
      /* sign */
      '<rect x="252" y="232" width="140" height="20" rx="3" fill="#111" opacity=".85"/>' + txt("GEORGETOWN LIGHTHOUSE", 322, 246, 9.5, "#fff"),
      sky("sjl", "#14234a", "#f08a5a"));
  }

  /* 4. Kaieteur Falls: the wide single drop off the sandstone tabletop, mist rising from the jungle gorge */
  function sjKaieteur() {
    let streaks = "";
    for (let x = 153; x < 248; x += 7) streaks += '<path d="M' + x + ' 30v240" stroke="' + (x % 3 ? "#ffffff" : "#e8c890") + '" stroke-width="' + (1.5 + (x % 4) * .6) + '" opacity=".75" stroke-dasharray="' + (34 + (x * 7) % 30) + ' ' + (6 + (x % 5) * 3) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sjk)"/>' + cloud(70, 26, .9) + cloud(300, 40, .7, "sj-cloud2") +
      /* far jungle tableland */
      '<path d="M0 56h400v20H0z" fill="#2f6a3a"/>' +
      /* cliffs: dark sandstone walls */
      '<path d="M0 60h150v200H0z" fill="#5a4030"/><path d="M250 60h150v200H250z" fill="#5a4030"/>' +
      '<path d="M0 60h150v10H0zM250 60h150v10H250z" fill="#2f6a3a"/>' +
      '<path d="M30 90v150M80 80v170M120 100v140M290 90v150M340 80v170" stroke="#4a3426" stroke-width="3"/>' +
      /* the amber-white falls */
      '<rect x="148" y="58" width="104" height="10" rx="4" fill="#c88a3a"/><rect x="150" y="66" width="100" height="194" fill="url(#sjkf)"/>' +
      '<clipPath id="sjkc"><rect x="150" y="66" width="100" height="194"/></clipPath><g clip-path="url(#sjkc)"><g class="sj-fall">' + streaks + '</g></g>' +
      /* mist + gorge jungle */
      '<ellipse class="sj-mist" cx="200" cy="232" rx="110" ry="30" fill="#fff" opacity=".6"/><ellipse class="sj-mist sj-mist2" cx="160" cy="214" rx="60" ry="18" fill="#fff" opacity=".6"/>' +
      [10, 50, 90, 300, 340, 380].map((x, i) => '<circle cx="' + x + '" cy="' + (238 + (i % 2) * 6) + '" r="26" fill="' + (i % 2 ? "#2f7a3a" : "#3f9a4a") + '"/>').join("") +
      /* birds */
      '<g class="sj-bird"><path d="M0 40q6-6 12 0q6-6 12 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      '<g class="sj-bird sj-bird2"><path d="M0 30q5-5 10 0q5-5 10 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      /* sign */
      '<rect x="12" y="232" width="128" height="20" rx="3" fill="#111" opacity=".85"/>' + txt("KAIETEUR FALLS", 76, 246, 10.5, "#fff", 'letter-spacing="1"'),
      sky("sjk", "#4aa3e0", "#d6eef8") + sky("sjkf", "#d9a85a", "#f7f2e8"));
  }

  /* 5. Jamaica Av & Norwood Av: green signs, the wall tagged SAINt JHN, the J on the el behind */
  function sjCorner() {
    let piers = "";
    for (let x = 10; x < 400; x += 70) piers += '<rect x="' + x + '" y="84" width="14" height="50" fill="#4a4d52"/>';
    let win = "";
    for (let x = 14; x < 250; x += 30) win += '<rect x="' + x + '" y="56" width="18" height="12" rx="2" fill="#ffe9a8" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sjx)"/>' + stars(14) +
      /* the el + the J sliding by */
      '<rect x="0" y="74" width="400" height="12" fill="#5a5d62"/><path d="M0 86h400" stroke="#3a3c40" stroke-width="2"/>' +
      '<g class="sj-car" style="animation-duration:7s"><rect x="0" y="48" width="260" height="26" rx="4" fill="#c9ced6"/>' + win + bullet(244, 61, "J", BROWN) + '</g>' +
      piers +
      /* the wall */
      '<rect x="0" y="130" width="400" height="96" fill="#3a2a40"/>' +
      (() => { let b = ""; for (let y = 142; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#2f2236" stroke-width="1"/>'; return b; })() +
      tag("SAINt JHN", 16, 192, 44, ROSE, -5) + tag("GHETTO LENNY", 22, 220, 16, GOLD, -3) + tag("SANTO", 196, 220, 18, GREEN, -4) +
      '<path class="sj-drip" d="M60 196v8" stroke="' + ROSE + '" stroke-width="3"/><path class="sj-drip" style="animation-delay:-.9s" d="M170 190v8" stroke="' + ROSE + '" stroke-width="3"/>' +
      /* a rose sprayed by the tag */
      '<g transform="translate(250 160)"><circle cx="0" cy="0" r="10" fill="' + ROSE + '" stroke="#000" stroke-width="2"/><path d="M-5 -2q5-6 10 0q-5 5-10 0" stroke="#7a1d33" stroke-width="2" fill="none"/><path d="M0 10v26" stroke="#2f8a3f" stroke-width="3"/><path d="M0 22q-8-4-10 2q6 2 10-2z" fill="#3f9a4a"/></g>' +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="sj-car2"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* pole + green signs */
      '<rect x="352" y="96" width="5" height="132" fill="#3d4b3f"/>' +
      '<rect x="276" y="98" width="120" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Jamaica Av", 336, 114, 12, "#fff") +
      '<rect x="282" y="124" width="114" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Norwood Av", 339, 140, 12, "#fff") +
      '<circle class="sj-flk" cx="354" cy="92" r="4" fill="#fff6c2"/>',
      sky("sjx", "#0c0b22", "#4a2440"));
  }

  window.SCENES = { sjNorwood: sjNorwood, sjCathedral: sjCathedral, sjLighthouse: sjLighthouse, sjKaieteur: sjKaieteur, sjCorner: sjCorner };
})();
