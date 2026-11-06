/* Sweet Tee game (NYC map, Queens: Bayside — the Queens Library's 2019 hip hop panel billed her as hailing from Bayside).
   The LIRR pulling into Bayside in its open cut, Fort Totten's stone Castle on Little Neck Bay, the bronze-lattice museum in Washington, D.C.
   that holds her picture, the giant tulip tree in Alley Pond Park, and Bell Blvd & 35 Av with SWEET TEE on the wall. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes stcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.st-car{animation:stcar 8s linear infinite}.st-car2{animation-delay:-4s}' +
    '@keyframes stcarb{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.st-carb{animation:stcarb 9s linear infinite}' +
    '@keyframes stflk{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.st-flk{animation:stflk 2.6s infinite}' +
    '@keyframes stsail{0%,100%{transform:translateX(0)}50%{transform:translateX(60px)}}.st-sail{animation:stsail 12s ease-in-out infinite}' +
    '@keyframes stbob{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}.st-bob{animation:stbob 2.4s ease-in-out infinite}' +
    '@keyframes stflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-8deg)}}.st-flag{transform-box:fill-box;transform-origin:0% 50%;animation:stflag 1.2s ease-in-out infinite}' +
    '@keyframes stgull{0%{transform:translate(0,0)}50%{transform:translate(40px,-8px)}100%{transform:translate(0,0)}}.st-gull{animation:stgull 9s ease-in-out infinite}' +
    '@keyframes stcloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.st-cloud{animation:stcloud 26s linear infinite}.st-cloud2{animation-delay:-13s}' +
    '@keyframes stglint{0%,100%{opacity:.15}50%{opacity:.75}}.st-gl{animation:stglint 3s ease-in-out infinite}.st-gl2{animation-delay:-1s}.st-gl3{animation-delay:-2s}' +
    '@keyframes stleaf{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(30px,180px) rotate(300deg);opacity:0}}.st-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:stleaf 6s linear infinite}.st-leaf2{animation-delay:-2s}.st-leaf3{animation-delay:-4s}' +
    '@keyframes stray{0%,100%{opacity:.08}50%{opacity:.28}}.st-ray{animation:stray 4s ease-in-out infinite}' +
    '@keyframes stbird{0%{transform:translate(-40px,0)}100%{transform:translate(440px,-20px)}}.st-bird{animation:stbird 14s linear infinite}' +
    '@keyframes stdrip{0%{transform:scaleY(0)}60%,100%{transform:scaleY(1)}}.st-drip{transform-box:fill-box;transform-origin:50% 0%;animation:stdrip 3s ease-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const PINK = "#ff8fc7", GOLD = "#ffd166", MINT = "#7ae7d9", CREAM = "#f6eedd", LIRR = "#0039a6";
  /* the LIRR mark: a blue pill with white letters (MTA style, no logo) */
  const lirr = (x, y) => '<rect x="' + (x - 20) + '" y="' + (y - 10) + '" width="40" height="20" rx="10" fill="' + LIRR + '"/>' + txt("LIRR", x, y + 5, 12, "#fff");

  /* 1. Bayside, LIRR Port Washington Branch: the tracks in the open cut, the street bridge over the top, the platform canopy, the train sliding in */
  function stbayside() {
    let wall = "";
    for (let y = 60; y < 150; y += 14) for (let x = (y / 14) % 2 ? 0 : 18; x < 400; x += 36) wall += '<rect x="' + x + '" y="' + y + '" width="34" height="12" fill="#b9b2a4"/>';
    let win = "";
    for (let x = 28; x < 300; x += 30) win += '<rect x="' + x + '" y="134" width="20" height="18" rx="2" fill="#1f2a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#stb)"/>' +
      '<rect class="st-cloud" x="0" y="10" width="70" height="12" rx="6" fill="#fff" opacity=".7"/><rect class="st-cloud st-cloud2" x="0" y="24" width="50" height="9" rx="5" fill="#fff" opacity=".6"/>' +
      /* the street bridge across the cut, cars on it */
      '<rect x="0" y="36" width="400" height="16" fill="#8f8a80"/><rect x="0" y="32" width="400" height="5" fill="#5b5750"/>' +
      (() => { let r = ""; for (let x = 4; x < 400; x += 12) r += '<rect x="' + x + '" y="24" width="3" height="9" fill="#5b5750"/>'; return r; })() + '<rect x="0" y="23" width="400" height="3" fill="#5b5750"/>' +
      '<g class="st-car"><rect x="0" y="14" width="40" height="11" rx="4" fill="' + PINK + '"/><rect x="8" y="9" width="22" height="7" rx="3" fill="' + PINK + '"/></g>' +
      '<g class="st-carb"><rect x="0" y="14" width="44" height="11" rx="4" fill="#2f6fd6"/><rect x="10" y="9" width="22" height="7" rx="3" fill="#2f6fd6"/></g>' +
      /* the concrete cut wall */
      '<rect x="0" y="52" width="400" height="108" fill="#a39c8e"/>' + wall +
      /* station sign */
      '<rect x="70" y="66" width="260" height="34" rx="3" fill="#111"/><rect x="70" y="66" width="260" height="3" fill="#fff"/>' +
      '<text x="84" y="90" ' + font + ' font-size="17" fill="#fff">Bayside</text>' +
      '<text x="164" y="88" ' + font + ' font-size="8" fill="#cfd6e4">PORT WASHINGTON BRANCH</text>' + lirr(302, 83) +
      /* platform canopy */
      '<rect x="0" y="108" width="400" height="8" fill="#3c4b63"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="116" width="6" height="46" fill="#3c4b63"/>').join("") +
      /* the train: silver M7 with the blue stripe */
      '<g class="anim-train">' +
        '<rect x="6" y="124" width="320" height="40" rx="6" fill="#d3d7de" stroke="#7b8291" stroke-width="2"/>' + win +
        '<rect x="6" y="155" width="320" height="4" fill="' + LIRR + '"/><rect x="6" y="160" width="320" height="2" fill="#6a2c91"/>' +
        '<rect x="306" y="130" width="16" height="22" rx="2" fill="#1f2a3a"/>' +
        '<circle cx="318" cy="158" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge + platform */
      '<rect x="0" y="164" width="400" height="8" fill="#eab308"/><rect x="0" y="172" width="400" height="88" fill="#6b6760"/>' +
      person(350, 186, "#232323") + person(372, 190, "#2d2d2d") + person(60, 190, "#1d1d1d") +
      txt("BAYSIDE, QUEENS", 200, 236, 12, CREAM, 'letter-spacing="4"'),
      sky("stb", "#7fb6e8", "#d9ecf8"));
  }

  /* 2. Fort Totten's Castle (the old officers' club) on the point over Little Neck Bay: pale stone, crenellated towers, gothic windows, flag snapping, a sailboat */
  function sttotten() {
    const crenel = (x, y, w) => { let c = ""; for (let i = 0; i < w; i += 8) c += '<rect x="' + (x + i) + '" y="' + (y - 6) + '" width="5" height="6" fill="#d8ccb4"/>'; return c; };
    const gwin = (x, y) => '<path d="M' + x + ' ' + (y + 18) + 'v-12q5-8 10 0v12z" fill="#3b3a46"/><path d="M' + (x + 5) + ' ' + (y + 2) + 'v16" stroke="#d8ccb4" stroke-width="1"/>';
    let wins = "";
    [136, 156, 176, 216, 236, 256].forEach(x => { wins += gwin(x, 120) + gwin(x, 148); });
    return svg(
      '<rect width="400" height="260" fill="url(#stt)"/>' +
      '<circle cx="330" cy="46" r="20" fill="#ffe2a8" opacity=".9"/>' +
      '<g class="st-gull"><path d="M60 40q5-5 10 0q5-5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<g class="st-gull" style="animation-delay:-4s"><path d="M250 30q4-4 8 0q4-4 8 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* the bay */
      '<rect x="0" y="170" width="400" height="90" fill="#3d7fa6"/>' +
      [184, 200, 218, 238].map((y, i) => '<path class="st-gl st-gl' + (i % 3 + 1) + '" d="M' + (20 + i * 40) + ' ' + y + 'h60M' + (200 + i * 30) + ' ' + (y + 6) + 'h50" stroke="#cfe8f5" stroke-width="2"/>').join("") +
      '<g class="st-sail"><g class="st-bob"><path d="M30 214h44l-6 9h-32z" fill="#fff"/><path d="M50 212v-34l18 30z" fill="#fff"/><path d="M48 212v-26l-14 24z" fill="' + PINK + '"/></g></g>' +
      /* the point: green lawn, trees */
      '<path d="M0 176q120-26 250-20q90 4 150 18v6h-400z" fill="#5e9a4a"/>' +
      '<circle cx="60" cy="150" r="22" fill="#3f7a35"/><circle cx="82" cy="158" r="16" fill="#4c8a3f"/><circle cx="350" cy="152" r="20" fill="#3f7a35"/>' +
      /* the Castle: main hall + two towers */
      '<rect x="126" y="112" width="148" height="62" fill="#e6dcc6" stroke="#b9ab8e" stroke-width="2"/>' + crenel(126, 112, 148) +
      '<rect x="100" y="82" width="34" height="92" fill="#ddd1b8" stroke="#b9ab8e" stroke-width="2"/>' + crenel(100, 82, 34) +
      '<rect x="266" y="88" width="34" height="86" fill="#ddd1b8" stroke="#b9ab8e" stroke-width="2"/>' + crenel(266, 88, 34) +
      '<rect x="190" y="96" width="22" height="78" fill="#ddd1b8" stroke="#b9ab8e" stroke-width="2"/>' + crenel(190, 96, 22) +
      gwin(112, 96) + gwin(112, 130) + gwin(278, 104) + gwin(278, 136) + wins +
      '<path d="M193 174v-18q8-10 16 0v18z" fill="#7a1f2b"/>' +
      /* flag */
      '<rect x="200" y="62" width="2" height="34" fill="#555"/><rect class="st-flag" x="202" y="62" width="26" height="15" fill="#c8102e"/>' +
      '<rect class="st-flag" x="202" y="66" width="26" height="3" fill="#fff"/><rect class="st-flag" x="202" y="72" width="26" height="3" fill="#fff"/><rect class="st-flag" x="202" y="62" width="11" height="8" fill="#1f3b8c"/>' +
      txt("FORT TOTTEN · LITTLE NECK BAY", 200, 250, 11, CREAM, 'letter-spacing="2"'),
      sky("stt", "#f4a96b", "#fce3c2"));
  }

  /* 3. The bronze-lattice museum on the National Mall, Washington, D.C. (her picture hangs inside): three stacked, flared tiers, glass base, the Monument behind */
  function stmuseum() {
    const tier = (y, h, top, bot) => {
      const x1 = 200 - top / 2, x2 = 200 + top / 2, x3 = 200 + bot / 2, x4 = 200 - bot / 2;
      let g = '<path d="M' + x1 + ' ' + y + 'H' + x2 + 'L' + x3 + ' ' + (y + h) + 'H' + x4 + 'z" fill="#9a6a34" stroke="#6e4720" stroke-width="1.5"/>';
      for (let x = x1 + 6; x < x2 - 2; x += 7) { const t = (x - x1) / (x2 - x1), xb = x4 + t * (x3 - x4); g += '<path d="M' + x + ' ' + (y + 2) + 'L' + xb + ' ' + (y + h - 2) + '" stroke="#c48f4f" stroke-width="2"/>'; }
      for (let k = 1; k < 4; k++) { const yy = y + (h * k) / 4; g += '<path d="M' + (x1 + (x4 - x1) * k / 4) + ' ' + yy + 'H' + (x2 + (x3 - x2) * k / 4) + '" stroke="#6e4720" stroke-width="1" opacity=".6"/>'; }
      return g;
    };
    return svg(
      '<rect width="400" height="260" fill="url(#stm)"/>' +
      '<g class="st-cloud"><rect x="0" y="22" width="90" height="16" rx="8" fill="#fff" opacity=".85"/><rect x="20" y="14" width="44" height="14" rx="7" fill="#fff" opacity=".85"/></g>' +
      '<g class="st-cloud st-cloud2"><rect x="0" y="52" width="70" height="12" rx="6" fill="#fff" opacity=".7"/></g>' +
      /* the Monument behind, left */
      '<path d="M58 196V60l6-12l6 12v136z" fill="#f2efe8" stroke="#cfc9bb" stroke-width="1.5"/><path d="M58 120h12" stroke="#ddd6c6" stroke-width="1"/>' +
      /* lawn + trees */
      '<rect x="0" y="196" width="400" height="64" fill="#6fae55"/><rect x="0" y="206" width="400" height="10" fill="#e9dfc8"/>' +
      '<circle cx="24" cy="186" r="18" fill="#3f7d34"/><circle cx="372" cy="184" r="20" fill="#3f7d34"/><circle cx="346" cy="192" r="13" fill="#4c8c3f"/>' +
      /* glass base */
      '<rect x="120" y="170" width="160" height="28" fill="#9cc6d8" stroke="#5f7f8f" stroke-width="1.5"/>' +
      [140, 160, 180, 200, 220, 240, 260].map(x => '<rect x="' + x + '" y="170" width="1.5" height="28" fill="#5f7f8f"/>').join("") +
      '<rect class="st-gl" x="126" y="174" width="30" height="20" fill="#fff" opacity=".3"/>' +
      /* the three bronze tiers (each wider at the top) */
      tier(138, 32, 200, 160) + tier(104, 32, 214, 176) + tier(70, 32, 226, 190) +
      '<rect class="st-gl st-gl2" x="150" y="76" width="40" height="4" fill="#ffd99a"/><rect class="st-gl st-gl3" x="214" y="112" width="40" height="4" fill="#ffd99a"/>' +
      '<rect x="78" y="226" width="244" height="22" rx="4" fill="#1b1410" opacity=".85"/>' + txt("WASHINGTON, D.C.", 200, 242, 12, GOLD, 'letter-spacing="3"'),
      sky("stm", "#5ea3dc", "#cfe6f6"));
  }

  /* 4. Alley Pond Park: the Alley Pond Giant, the city's oldest and tallest tulip tree, sun through the canopy, leaves drifting, the trail fence */
  function stalley() {
    let fence = "";
    for (let x = 0; x < 400; x += 26) fence += '<rect x="' + x + '" y="200" width="5" height="26" fill="#7a5a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sta)"/>' +
      /* background woods */
      '<circle cx="30" cy="150" r="40" fill="#2f6a35"/><circle cx="90" cy="160" r="34" fill="#3a7a3f"/><circle cx="330" cy="156" r="40" fill="#2f6a35"/><circle cx="384" cy="150" r="34" fill="#3a7a3f"/>' +
      /* sun rays */
      '<path class="st-ray" d="M300 0L220 220H260L340 0z" fill="#fff6c2"/><path class="st-ray" style="animation-delay:-2s" d="M360 0L290 220H310L380 0z" fill="#fff6c2"/>' +
      /* the giant: wide trunk, huge canopy */
      '<path d="M176 230q8-70 6-130h36q-2 60 6 130z" fill="#5b4330"/><path d="M186 120v100M206 116v108" stroke="#47331f" stroke-width="2"/>' +
      '<path d="M160 230q20-12 30-8M240 230q-20-12-30-8" stroke="#5b4330" stroke-width="8" fill="none"/>' +
      '<circle cx="200" cy="70" r="62" fill="#3d8a3c"/><circle cx="148" cy="96" r="40" fill="#46963f"/><circle cx="252" cy="94" r="42" fill="#46963f"/><circle cx="200" cy="34" r="36" fill="#55a64a"/>' +
      /* tulip-shaped blooms */
      [[160, 60], [236, 52], [200, 90], [262, 104], [140, 108], [214, 30]].map(([x, y]) => '<path d="M' + x + ' ' + y + 'q-5-8 0-12q5 4 0 12zM' + x + ' ' + y + 'q5-8 0-12" fill="#f5a623" stroke="#e07b00" stroke-width="1"/>').join("") +
      /* falling leaves */
      '<path class="st-leaf" d="M120 60q6-6 10 0q-4 6-10 0z" fill="#9ccc4a"/><path class="st-leaf st-leaf2" d="M260 70q6-6 10 0q-4 6-10 0z" fill="#c9d94a"/><path class="st-leaf st-leaf3" d="M190 50q6-6 10 0q-4 6-10 0z" fill="#9ccc4a"/>' +
      /* trail + fence */
      '<rect x="0" y="222" width="400" height="38" fill="#a07c52"/>' + fence + '<rect x="0" y="204" width="400" height="4" fill="#7a5a3a"/><rect x="0" y="214" width="400" height="4" fill="#7a5a3a"/>' +
      '<rect x="14" y="168" width="112" height="26" rx="3" fill="#2d5a2e" stroke="#e9e1c9" stroke-width="1.5"/>' + txt("ALLEY POND PARK", 70, 185, 9, "#e9e1c9") +
      '<g class="st-bird"><path d="M0 40q4-4 8 0q4-4 8 0" stroke="#333" stroke-width="2" fill="none"/></g>',
      sky("sta", "#9fd3ef", "#e7f5d8"));
  }

  /* 5. Bell Blvd & 35 Av: green street signs, SWEET TEE tagged on the wall, Bell Blvd's lights, Fort Totten's tower far off at dusk */
  function stcorner() {
    let shops = "";
    [[0, "#3a2a40"], [92, "#2f3346"], [186, "#43303a"], [282, "#33303f"]].forEach(([x, c], i) => {
      shops += '<rect x="' + x + '" y="62" width="90" height="70" fill="' + c + '"/>';
      for (let yy = 70; yy < 104; yy += 14) for (let xx = x + 8; xx < x + 84; xx += 16) shops += '<rect class="st-gl st-gl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="8" height="8" fill="#ffd98a"/>';
      shops += '<path d="M' + (x + 4) + ' 110h82l-6 10h-70z" fill="' + [PINK, MINT, GOLD, PINK][i] + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#stc)"/>' +
      /* far-off castle tower on the point */
      '<rect x="330" y="30" width="16" height="32" fill="#5a4a6a"/><path d="M330 30v-4h3v4h3v-4h3v4h4v-4h3v4" stroke="#5a4a6a" stroke-width="3" fill="none"/>' +
      shops +
      /* the wall */
      '<rect x="0" y="132" width="400" height="94" fill="#46424c"/>' +
      (() => { let b = ""; for (let y = 142; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#3b3842" stroke-width="1"/>'; for (let y = 132; y < 226; y += 24) for (let x = 0; x < 400; x += 32) b += '<path d="M' + x + ' ' + y + 'v12M' + (x + 16) + ' ' + (y + 12) + 'v12" stroke="#3b3842" stroke-width="1"/>'; return b; })() +
      tag("SWEET TEE", 16, 198, 46, PINK, -5) + '<rect class="st-drip" x="60" y="200" width="3" height="16" fill="' + PINK + '"/><rect class="st-drip" style="animation-delay:-1.5s" x="150" y="194" width="3" height="20" fill="' + PINK + '"/>' +
      tag("TEE TIME", 190, 222, 20, GOLD, -3) + tag("SMOOTH TIP", 22, 222, 15, MINT, -2) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="st-car"><rect x="0" y="238" width="46" height="13" rx="4" fill="' + MINT + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="358" y="64" width="5" height="164" fill="#3d4b3f"/>' +
      '<rect x="300" y="68" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Bell Blvd", 348, 84, 12, "#fff") +
      '<rect x="300" y="94" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("35 Av", 348, 110, 12, "#fff") +
      '<circle class="st-flk" cx="360" cy="62" r="4" fill="#fff6c2"/>',
      sky("stc", "#2a1838", "#c9637a"));
  }

  window.SCENES = { stbayside: stbayside, sttotten: sttotten, stmuseum: stmuseum, stalley: stalley, stcorner: stcorner };
})();
