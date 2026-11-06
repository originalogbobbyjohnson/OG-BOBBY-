/* Nicki Minaj game (NYC map, Queens: South Jamaica, "grew up out in Baisley"). The LIRR at Locust Manor (Farmers Blvd and Bedell St, up on the Atlantic Branch
   viaduct, two high side platforms, Far Rockaway and Long Beach trains), Port of Spain where she was born (Saint James; the Queen's Park Savannah with
   Stollmeyer's Castle and Carnival flags), the Greater Allen A.M.E. Cathedral on Merrick Blvd in South Jamaica, the Met's Fifth Avenue steps on Met Gala night
   (pink carpet), and Farmers Blvd & Bedell St with the LIRR viaduct behind. 400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}.flk2{animation-delay:.8s}' +
    '@keyframes drive{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.car{animation:drive 7s linear infinite}.car2{animation-delay:-3.6s}' +
    '@keyframes rail{from{transform:translateX(-260px)}to{transform:translateX(460px)}}.lirr{animation:rail 6s linear infinite}' +
    '@keyframes wave{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-7deg)}}.flag{transform-box:fill-box;transform-origin:0% 50%;animation:wave 1.5s ease-in-out infinite}.flag2{animation-delay:-.7s}' +
    '@keyframes flash{0%,86%,100%{opacity:0}90%{opacity:1}}.fl{animation:flash 2.2s linear infinite}.fl2{animation-delay:-.7s}.fl3{animation-delay:-1.4s}.fl4{animation-delay:-1.9s}' +
    '@keyframes glow{0%,100%{opacity:.5}50%{opacity:1}}.gl{animation:glow 3s ease-in-out infinite}.gl2{animation-delay:-1.5s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.bob{animation:bob 1.2s ease-in-out infinite}.bob2{animation-delay:-.6s}' +
    '@keyframes glide{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.bird{animation:glide 12s linear infinite}.bird2{animation-delay:-6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const SIGN = "#0f6b3a", PINK = "#ff4fa3", GOLD = "#ffd23f", CREAM = "#f4ead8", FROCK = "#6e3219", LBEACH = "#ff6319";
  const blade = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="20" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 14.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  /* an M7-style electric car: stainless, blue band, big windows */
  const car = (x) => {
    let w = ""; for (let i = 0; i < 6; i++) w += '<rect x="' + (x + 12 + i * 26) + '" y="120" width="18" height="16" rx="2" fill="#cfe6ff" opacity=".9"/>';
    return '<rect x="' + x + '" y="112" width="172" height="48" rx="4" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + w + '<rect x="' + x + '" y="142" width="172" height="4" fill="#1d3f8f"/>';
  };

  /* 1. Locust Manor, LIRR Atlantic Branch: up on the viaduct, a high side platform with its shelter and lamp posts, the train sliding in, the houses below */
  function train() {
    let houses = "";
    for (let x = 0; x < 400; x += 50) houses += '<rect x="' + x + '" y="208" width="44" height="32" fill="' + (x % 100 ? "#6a4a3a" : "#7d6a5a") + '"/><path d="M' + (x - 2) + ' 208l24-12 24 12z" fill="#3a2e2a"/><rect x="' + (x + 8) + '" y="216" width="8" height="10" fill="#ffe7a8" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#n1)"/>' + stars(14) +
      '' + houses +
      /* viaduct deck and piers */
      '<rect x="0" y="168" width="400" height="14" fill="#8a8f96"/>' + [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="182" width="16" height="78" fill="#7a7f86"/>').join("") +
      /* far platform canopy */
      '<rect x="0" y="66" width="400" height="6" fill="#56606c"/>' + [60, 200, 340].map(x => '<rect x="' + x + '" y="72" width="4" height="40" fill="#2b3440"/>').join("") +
      /* the train */
      '<g class="anim-train">' + car(4) + car(180) + '<rect x="352" y="118" width="4" height="22" fill="#2b3440"/><circle cx="346" cy="152" r="3" fill="#fff6c2"/></g>' +
      '<rect x="0" y="160" width="400" height="8" fill="#5b4a3a"/>' +
      /* near platform with lamp posts and the black station sign */
      '<rect x="0" y="182" width="400" height="10" fill="#9a9ea4"/><rect x="0" y="182" width="400" height="4" fill="' + GOLD + '"/>' +
      '<rect x="44" y="40" width="4" height="142" fill="#2b3440"/><circle class="flk" cx="46" cy="40" r="5" fill="#fff6c2"/>' +
      '<rect x="352" y="40" width="4" height="142" fill="#2b3440"/><circle class="flk flk2" cx="354" cy="40" r="5" fill="#fff6c2"/>' +
      '<rect x="96" y="18" width="208" height="44" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="42" text-anchor="middle" ' + font + ' font-size="20" fill="#fff">Locust Manor</text>' +
      '<rect x="108" y="48" width="96" height="9" rx="4.5" fill="' + FROCK + '"/><text x="156" y="55.2" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff" letter-spacing=".5">FAR ROCKAWAY</text>' +
      '<rect x="210" y="48" width="82" height="9" rx="4.5" fill="' + LBEACH + '"/><text x="251" y="55.2" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff" letter-spacing=".5">LONG BEACH</text>',
      sky("n1", "#0d1030", "#4a3a6a"));
  }

  /* 2. Port of Spain, where she was born: the Queen's Park Savannah lawn, Stollmeyer's Castle (white, turrets, red roofs), palms, Carnival flags flying */
  function savannah() {
    const flag = (x, y, cls) => '<rect x="' + x + '" y="' + y + '" width="3" height="70" fill="#ddd"/><g class="flag ' + cls + '"><rect x="' + (x + 3) + '" y="' + y + '" width="40" height="26" fill="#ce1126"/><path d="M' + (x + 3) + ' ' + y + 'h8l32 26h-8z" fill="#fff"/><path d="M' + (x + 6) + ' ' + y + 'h4l30 26h-4z" fill="#000"/></g>';
    const palm = (x) => '<path d="M' + x + ' 196q4-50 -2-96" stroke="#5a4028" stroke-width="5" fill="none"/><path d="M' + (x - 2) + ' 100q-24-4-34 10M' + (x - 2) + ' 100q-20-14-30-6M' + (x - 2) + ' 100q24-6 34 8M' + (x - 2) + ' 100q18-16 30-8M' + (x - 2) + ' 100q2-18 -6-26" stroke="#2e7a3a" stroke-width="6" fill="none" stroke-linecap="round"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#n2)"/>' +
      '<path d="M0 120q60-40 120-20q80-40 160-10q60-20 120 0v40H0z" fill="#3d7a4a" opacity=".7"/>' +
      '<path class="bird" d="M20 40q5-5 10 0q5-5 10 0" stroke="#333" stroke-width="2" fill="none"/>' +
      /* Stollmeyer's Castle */
      '<rect x="150" y="80" width="110" height="84" fill="#f4f1ea"/>' +
      '<rect x="134" y="62" width="30" height="102" fill="#f8f6f0"/><path d="M130 64l19-26 19 26z" fill="#b5462e"/>' +
      '<rect x="246" y="56" width="32" height="108" fill="#f8f6f0"/><path d="M242 58l20-30 20 30z" fill="#b5462e"/>' +
      '<rect x="192" y="58" width="26" height="26" fill="#f8f6f0"/><path d="M188 60l17-22 17 22z" fill="#b5462e"/>' +
      [160, 186, 212, 234].map(x => '<path d="M' + x + ' 140v-22a6 6 0 0 1 12 0v22z" fill="#5a6a7a"/>').join("") +
      '<path d="M142 90v-12a4 4 0 0 1 8 0v12zM254 84v-12a4 4 0 0 1 8 0v12z" fill="#5a6a7a"/>' +
      '<path d="M150 80h110M150 80v-6h8v6h8v-6h8v6h8v-6h8v6h8v-6h8v6h8v-6h8v6h8v-6h8v6h8v-6h8v6" stroke="#d8d4c8" stroke-width="2" fill="none"/>' +
      palm(70) + palm(340) +
      /* the Savannah lawn and the ring road */
      '<rect x="0" y="164" width="400" height="56" fill="#5aa04a"/><rect x="0" y="220" width="400" height="40" fill="#55575c"/><rect x="0" y="238" width="400" height="2" fill="#f4ead8" opacity=".6"/>' +
      flag(16, 152, "") + flag(354, 152, "flag2") +
      /* Carnival feathers bobbing */
      '<g class="bob"><path d="M150 214q-14-34 0-50q14 16 0 50z" fill="' + PINK + '"/><path d="M164 214q-6-30 10-44q8 20-10 44z" fill="' + GOLD + '"/><path d="M136 214q-12-26-2-44q12 18 2 44z" fill="#3fa7d6"/></g>' +
      '<g class="bob bob2"><path d="M250 214q-14-34 0-50q14 16 0 50z" fill="' + GOLD + '"/><path d="M264 214q-6-30 10-44q8 20-10 44z" fill="' + PINK + '"/><path d="M236 214q-12-26-2-44q12 18 2 44z" fill="#6cbe45"/></g>' +
      '<g class="car"><rect x="0" y="242" width="46" height="12" rx="4" fill="#ffd23f"/><circle cx="10" cy="254" r="4" fill="#111"/><circle cx="36" cy="254" r="4" fill="#111"/></g>',
      sky("n2", "#4fa8e0", "#bfe4f7"));
  }

  /* 3. The Greater Allen A.M.E. Cathedral, Merrick Blvd, South Jamaica: the big modern brick cathedral, steep gable, tall cross, stained glass glowing */
  function allen() {
    let glass = "";
    const cols = [PINK, GOLD, "#3fa7d6", "#6cbe45", "#b388ff"];
    for (let i = 0; i < 7; i++) glass += '<rect class="gl ' + (i % 2 ? "gl2" : "") + '" x="' + (170 + i * 9) + '" y="112" width="7" height="44" fill="' + cols[i % 5] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#n3)"/>' + stars(10) +
      /* side wings */
      '<rect x="30" y="140" width="110" height="80" fill="#a0583e"/><rect x="260" y="140" width="110" height="80" fill="#a0583e"/>' +
      '<rect x="26" y="134" width="118" height="8" fill="#d8ccb0"/><rect x="256" y="134" width="118" height="8" fill="#d8ccb0"/>' +
      [44, 74, 104, 274, 304, 334].map(x => '<rect x="' + x + '" y="156" width="16" height="30" fill="#ffe7a8" opacity=".75"/>').join("") +
      /* central gabled front */
      '<path d="M130 220V110l70-56 70 56v110z" fill="#b5654a"/><path d="M124 112l76-62 76 62" fill="none" stroke="#e9dfc8" stroke-width="6"/>' +
      '<rect x="164" y="106" width="72" height="56" fill="#2a1f2e"/>' + glass +
      '<rect x="196" y="12" width="8" height="46" fill="#f4ead8"/><rect x="184" y="24" width="32" height="8" fill="#f4ead8"/>' +
      '<rect x="176" y="176" width="48" height="44" fill="#e9dfc8"/><rect x="182" y="182" width="36" height="38" fill="#ffd98a" opacity=".85"/><path d="M200 182v38" stroke="#8a6a40" stroke-width="2"/>' +
      '<rect x="138" y="165" width="124" height="10" fill="#e9dfc8"/><text x="200" y="172.5" text-anchor="middle" ' + font + ' font-size="5.5" fill="#5a3a2a" letter-spacing="1">GREATER ALLEN CATHEDRAL</text>' +
      /* Merrick Blvd */
      '<rect x="0" y="220" width="400" height="40" fill="#55575c"/><rect x="0" y="220" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="236" width="78" height="20" rx="4" fill="#2b6cb0"/><rect x="6" y="240" width="64" height="7" fill="#cfe6ff" opacity=".8"/><circle cx="14" cy="256" r="4" fill="#111"/><circle cx="62" cy="256" r="4" fill="#111"/></g>',
      sky("n3", "#1b1036", "#6a4a7a"));
  }

  /* 4. The Met on Fifth Avenue, Met Gala night: the limestone front with paired columns and three arches, banners, the pink carpet up the steps, flashes popping */
  function metgala() {
    let steps = "";
    for (let i = 0; i < 6; i++) steps += '<rect x="' + (40 - i * 6) + '" y="' + (176 + i * 8) + '" width="' + (320 + i * 12) + '" height="8" fill="' + (i % 2 ? "#d8d0bc" : "#e4dcc8") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#n4)"/>' + stars(8) +
      /* facade */
      '<rect x="20" y="48" width="360" height="128" fill="#e9e1cc"/><rect x="14" y="40" width="372" height="10" fill="#d4c9ad"/>' +
      [60, 160, 240, 340].map(x => '<rect x="' + (x - 14) + '" y="50" width="10" height="126" fill="#f4eedc"/><rect x="' + (x + 4) + '" y="50" width="10" height="126" fill="#f4eedc"/><rect x="' + (x - 16) + '" y="50" width="32" height="6" fill="#cfc4a6"/>').join("") +
      [110, 200, 290].map(x => '<path d="M' + (x - 26) + ' 176v-80a26 26 0 0 1 52 0v80z" fill="#2a2a3a"/><path d="M' + (x - 26) + ' 96a26 26 0 0 1 52 0" fill="none" stroke="#bdb196" stroke-width="3"/>').join("") +
      /* banners hanging between the column pairs */
      [60, 160, 240, 340].map((x, i) => '<g class="gl' + (i % 2 ? ' gl2' : '') + '"><rect x="' + (x - 11) + '" y="62" width="22" height="64" fill="' + (i % 2 ? GOLD : PINK) + '"/><path d="M' + (x - 11) + ' 126l11 8 11-8z" fill="' + (i % 2 ? GOLD : PINK) + '"/></g>').join("") +
      /* steps + pink carpet */
      steps + '<path d="M180 176h40l16 48h-72z" fill="' + PINK + '"/>' +
      /* rope line posts */
      [130, 150, 250, 270].map(x => '<rect x="' + x + '" y="204" width="3" height="18" fill="' + GOLD + '"/>').join("") +
      '<path d="M131 208q10 6 20 0M251 208q10 6 20 0" stroke="#7a1450" stroke-width="2" fill="none"/>' +
      /* camera flashes */
      ['', 'fl2', 'fl3', 'fl4'].map((c, i) => '<g class="fl ' + c + '"><circle cx="' + [40, 90, 320, 370][i] + '" cy="' + [228, 240, 236, 226][i] + '" r="9" fill="#fff"/><circle cx="' + [40, 90, 320, 370][i] + '" cy="' + [228, 240, 236, 226][i] + '" r="18" fill="#fff" opacity=".35"/></g>').join("") +
      '<rect x="0" y="224" width="400" height="36" fill="#3a3a44" opacity=".85"/>' +
      [30, 60, 84, 300, 330, 362].map(x => '<rect x="' + (x - 8) + '" y="230" width="16" height="12" rx="2" fill="#111"/><circle cx="' + x + '" cy="236" r="4" fill="#555"/>').join(""),
      sky("n4", "#0d0a24", "#3a2a5a"));
  }

  /* 5. Farmers Blvd and Bedell St, by Locust Manor: green signs, the tag wall, the LIRR viaduct behind with a train running across */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#n5)"/>' + stars(16) +
      /* viaduct with a train */
      '<g class="lirr"><rect x="0" y="70" width="120" height="26" rx="3" fill="#c9ced6"/><rect x="124" y="70" width="120" height="26" rx="3" fill="#c9ced6"/>' +
      [8, 30, 52, 74, 96, 132, 154, 176, 198, 220].map(x => '<rect x="' + x + '" y="75" width="14" height="10" fill="#ffe7a8" opacity=".9"/>').join("") + '<rect x="0" y="88" width="244" height="3" fill="#1d3f8f"/></g>' +
      '<rect x="0" y="96" width="400" height="12" fill="#7a7f86"/>' + [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="108" width="14" height="44" fill="#6a6f76"/>').join("") +
      /* row houses */
      '<rect x="0" y="130" width="400" height="22" fill="#2a2030"/>' +
      /* tag wall */
      '<rect x="0" y="146" width="268" height="84" fill="#4d4b52"/>' +
      (() => { let b = ""; for (let y = 152; y < 230; y += 8) b += '<path d="M0 ' + y + 'h268" stroke="#3f3d44" stroke-width="1"/>'; return b; })() +
      tag("NICKI MINAJ", 8, 198, 32, PINK, -5) + tag("BARBZ", 18, 222, 16, CREAM, -3) + tag("HARAJUKU", 130, 224, 14, GOLD, -4) +
      '<path d="M226 164l6 10 7-8 7 8 6-10v14h-26z" fill="' + PINK + '" stroke="#000" stroke-width="2"/>' +
      /* street */
      '<rect x="0" y="230" width="400" height="30" fill="#55575c"/><rect x="0" y="230" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="241" width="44" height="13" rx="4" fill="' + PINK + '"/><circle cx="10" cy="254" r="4" fill="#111"/><circle cx="34" cy="254" r="4" fill="#111"/></g>' +
      /* sign pole */
      '<rect x="370" y="64" width="5" height="166" fill="#3d4b3f"/><circle class="flk" cx="372" cy="64" r="4" fill="#fff6c2"/>' +
      blade(286, 112, 112, "Farmers Blvd") + blade(296, 136, 102, "Bedell St"),
      sky("n5", "#0b0a1c", "#3a2a4e"));
  }

  window.SCENES = { train: train, savannah: savannah, allen: allen, metgala: metgala, corner: corner };
})();
