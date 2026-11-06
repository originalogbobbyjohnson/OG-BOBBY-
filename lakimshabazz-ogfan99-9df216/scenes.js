/* Lakim Shabazz game (New Jersey map, Newark). Founding Flavor Unit MC, produced by the 45 King.
   Rooms: Warren St-NJIT on the Newark Light Rail (underground, the old City Subway), the 45 King's home studio where the vocal booth was a glass
   telephone booth, Luxor Temple on the Nile and the feluccas at Aswan (he shot "The Lost Tribe of Shabazz" video in Egypt),
   and Irvine Turner Blvd & W Kinney St in the Central Ward with the old Essex County Courthouse dome behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lkflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.lk-flk{animation:lkflick 2.4s infinite}' +
    '@keyframes lkmeter{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}.lk-mt{transform-box:fill-box;transform-origin:50% 100%;animation:lkmeter .55s ease-in-out infinite}.lk-mt2{animation-delay:.18s}.lk-mt3{animation-delay:.36s}' +
    '@keyframes lkspin{to{transform:rotate(360deg)}}.lk-spin{transform-box:fill-box;transform-origin:50% 50%;animation:lkspin 1.6s linear infinite}' +
    '@keyframes lkpulse{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.lk-pls{transform-box:fill-box;transform-origin:50% 50%;animation:lkpulse .5s ease-in-out infinite}' +
    '@keyframes lksail{from{transform:translateX(-90px)}to{transform:translateX(470px)}}.lk-sail{animation:lksail 16s linear infinite}.lk-sail2{animation-duration:22s;animation-delay:-9s}.lk-sail3{animation-duration:19s;animation-delay:-14s}' +
    '@keyframes lkglint{0%,100%{opacity:.15}50%{opacity:.8}}.lk-gl{animation:lkglint 2.2s ease-in-out infinite}.lk-gl2{animation-delay:-1.1s}' +
    '@keyframes lkbird{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-12px)}100%{transform:translate(440px,4px)}}.lk-bird{animation:lkbird 12s linear infinite}' +
    '@keyframes lkcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.lk-car{animation:lkcar 7s linear infinite}' +
    '@keyframes lkspark{0%,90%,100%{opacity:0}93%{opacity:1}}.lk-spk{animation:lkspark 3s infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const GOLD = "#f2c14e", RED = "#d62828", GREEN = "#3fae49", CREAM = "#f4ead8", NJBLUE = "#0039a6", NJORANGE = "#f47b20";

  /* 1. Warren St-NJIT, Newark Light Rail (underground on the old City Subway): concrete walls, black sign, the light rail car gliding in under the wire */
  function warren() {
    let wall = "";
    for (let x = 0; x < 400; x += 40) wall += '<rect x="' + x + '" y="40" width="39" height="120" fill="' + (x % 80 ? "#8f8a80" : "#958f85") + '"/>';
    let win = "";
    for (let x = 52; x < 300; x += 30) win += '<rect x="' + x + '" y="124" width="20" height="18" rx="2" fill="#cfe3f2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lw)"/>' +
      /* underground: concrete ceiling with the platform lights */
      '<rect x="0" y="0" width="400" height="40" fill="#2b2b2e"/><rect x="0" y="34" width="400" height="6" fill="#1d1d20"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="lk-flk" style="animation-delay:-' + i * 0.6 + 's" x="' + (x - 26) + '" y="26" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      wall +
      /* overhead catenary wire */
      '<path d="M0 92H400" stroke="#2a2a2a" stroke-width="2"/><path d="M60 40v52M200 40v52M340 40v52" stroke="#3a3a3a" stroke-width="3"/>' +
      /* station sign */
      '<rect x="60" y="50" width="280" height="30" rx="3" fill="#111"/><rect x="60" y="50" width="280" height="3" fill="#fff"/>' +
      '<text x="74" y="71" ' + font + ' font-size="14" fill="#fff">Warren St–NJIT</text>' +
      '<circle cx="306" cy="66" r="12" fill="' + NJBLUE + '"/><text x="306" y="70" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">NLR</text>' +
      /* the light rail car */
      '<g class="anim-train">' +
        '<path d="M40 94l10-8h8l10 8" stroke="#222" stroke-width="2" fill="none"/>' +
        '<rect x="30" y="100" width="300" height="62" rx="10" fill="#d9dde2"/>' +
        '<rect x="30" y="146" width="300" height="5" fill="' + NJBLUE + '"/><rect x="30" y="152" width="300" height="4" fill="' + NJORANGE + '"/>' +
        win +
        '<rect x="300" y="110" width="26" height="32" rx="6" fill="#26313c"/><rect x="306" y="104" width="18" height="6" rx="2" fill="#111"/>' +
        '<rect x="160" y="112" width="6" height="40" fill="#9aa3ad"/>' +
        '<circle cx="324" cy="154" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<circle class="lk-spk" cx="196" cy="92" r="5" fill="#bfe3ff"/>' +
      /* platform */
      '<rect x="0" y="166" width="400" height="10" fill="#d8c44a"/><rect x="0" y="176" width="400" height="84" fill="#5d5a55"/>' +
      '<rect x="0" y="162" width="400" height="4" fill="#3a3733"/>' +
      [70, 190, 310].map(x => '<rect x="' + (x - 3) + '" y="176" width="6" height="40" fill="#2f4c6e"/><rect x="' + (x - 16) + '" y="214" width="32" height="5" rx="2" fill="#2f4c6e"/>').join(""),
      sky("lw", "#2b2b2e", "#3a3550"));
  }

  /* 2. The 45 King's home studio: wood paneling, crates, the turntables, and the glass telephone booth they used as the vocal booth */
  function booth() {
    let panel = "";
    for (let x = 0; x < 400; x += 22) panel += '<rect x="' + x + '" y="0" width="21" height="170" fill="' + (x % 44 ? "#6b4428" : "#744a2c") + '"/>';
    let crates = "";
    for (let i = 0; i < 3; i++) {
      const x = 16 + i * 46;
      crates += '<rect x="' + x + '" y="178" width="42" height="34" fill="#1d1d1d" stroke="#c9a24a" stroke-width="2"/>';
      for (let j = 0; j < 7; j++) crates += '<rect x="' + (x + 3 + j * 5.5) + '" y="168" width="4" height="22" fill="' + ["#d62828", "#111", "#3fae49", "#f2c14e", "#111", "#e9e1cf", "#333"][j] + '"/>';
    }
    return svg(
      panel +
      '<rect x="0" y="170" width="400" height="90" fill="#3b2a1e"/>' +
      '<rect x="0" y="170" width="400" height="4" fill="#24170f"/>' +
      /* pan-african flag pinned to the wall */
      '<rect x="40" y="26" width="70" height="14" fill="' + RED + '"/><rect x="40" y="40" width="70" height="14" fill="#111"/><rect x="40" y="54" width="70" height="14" fill="' + GREEN + '"/>' +
      txt("THE 45 KING", 200, 30, 12, GOLD, 'letter-spacing="3"') +
      /* the glass phone booth */
      '<rect x="270" y="36" width="80" height="140" rx="4" fill="#c9d8de" opacity=".25" stroke="#e8eef0" stroke-width="4"/>' +
      '<rect x="270" y="36" width="80" height="16" fill="#2b3a44"/>' + txt("PHONE", 310, 48, 10, "#fff") +
      '<path d="M310 52v124" stroke="#e8eef0" stroke-width="2" opacity=".6"/>' +
      '<path d="M292 76v60" stroke="#999" stroke-width="3"/><rect x="284" y="134" width="16" height="4" fill="#999"/>' +
      '<g class="lk-pls"><rect x="286" y="62" width="12" height="20" rx="6" fill="#aaa"/><path d="M288 68h8M288 72h8M288 76h8" stroke="#555"/></g>' +
      '<path d="M276 62l14 30M346 70l-12 40" stroke="#fff" stroke-width="2" opacity=".35"/>' +
      /* table with two turntables + a sampler */
      '<rect x="30" y="118" width="220" height="10" fill="#2a1b12"/><rect x="40" y="128" width="8" height="42" fill="#2a1b12"/><rect x="232" y="128" width="8" height="42" fill="#2a1b12"/>' +
      '<rect x="36" y="96" width="74" height="22" rx="2" fill="#2d2d2d"/><circle class="lk-spin" cx="66" cy="107" r="10" fill="#111" stroke="#444"/><circle cx="66" cy="107" r="3" fill="' + RED + '"/>' +
      '<rect x="170" y="96" width="74" height="22" rx="2" fill="#2d2d2d"/><circle class="lk-spin" cx="200" cy="107" r="10" fill="#111" stroke="#444"/><circle cx="200" cy="107" r="3" fill="' + GREEN + '"/>' +
      '<rect x="114" y="98" width="52" height="20" rx="2" fill="#bdb8ad"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (118 + i * 11) + '" y="110" width="8" height="5" fill="#444"/>').join("") +
      '<rect x="118" y="101" width="22" height="6" fill="#1e3b2a"/>' +
      /* VU meters */
      '<rect x="148" y="70" width="40" height="22" fill="#111"/>' +
      [152, 160, 168, 176].map((x, i) => '<rect class="lk-mt lk-mt' + (i % 3 + 1) + '" x="' + x + '" y="74" width="5" height="16" fill="' + (i == 3 ? RED : GREEN) + '"/>').join("") +
      crates +
      /* speakers */
      '<rect x="210" y="180" width="44" height="70" fill="#1b1b1b"/><circle class="lk-pls" cx="232" cy="222" r="14" fill="#333" stroke="#111" stroke-width="3"/><circle cx="232" cy="194" r="6" fill="#333"/>',
      "");
  }

  /* 3. Luxor Temple at dusk: sandstone pylon, the red-granite obelisk, papyrus columns, the Nile in front */
  function luxor() {
    let cols = "";
    for (let i = 0; i < 6; i++) {
      const x = 236 + i * 26;
      cols += '<rect x="' + x + '" y="92" width="16" height="74" fill="#d8b57a"/><path d="M' + (x - 5) + ' 92q13-16 26 0z" fill="#c9a266"/><rect x="' + (x - 4) + '" y="86" width="24" height="6" fill="#b8925a"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#lx)"/>' +
      '<circle cx="80" cy="70" r="24" fill="#ffcf6b" opacity=".9"/>' +
      '<g class="lk-bird"><path d="M0 40q5-5 10 0q5-5 10 0" stroke="#3a2a3a" stroke-width="2" fill="none"/><path d="M26 50q4-4 8 0q4-4 8 0" stroke="#3a2a3a" stroke-width="2" fill="none"/></g>' +
      /* pylon gate */
      '<path d="M40 166V90l8-4h62l8 4v76z" fill="#d9b77e"/><path d="M128 166V90l8-4h62l8 4v76z" fill="#d9b77e"/>' +
      '<rect x="118" y="120" width="10" height="46" fill="#3a2a22"/>' +
      [52, 64, 76, 88, 140, 152, 164, 176].map(x => '<path d="M' + x + ' 100v54" stroke="#b8925a" stroke-width="2" opacity=".6"/>').join("") +
      /* obelisk */
      '<path d="M20 166V64l7-14l7 14v102z" fill="#c4746a"/><path d="M27 50l7 14H20z" fill="#e7b36a"/>' +
      [80, 96, 112, 128, 144].map(y => '<rect x="24" y="' + y + '" width="6" height="2" fill="#8e4d47"/>').join("") +
      cols +
      '<rect x="230" y="78" width="160" height="8" fill="#c9a266"/>' +
      /* riverbank and Nile */
      '<rect x="0" y="166" width="400" height="10" fill="#b99a64"/>' +
      [30, 360].map(x => '<path d="M' + x + ' 166q-6-30 4-46M' + x + ' 166q10-26 22-30" stroke="#2e5a2a" stroke-width="3" fill="none"/><path d="M' + (x + 4) + ' 120l-14 6l14-2l12 6z" fill="#3d7a35"/>').join("") +
      '<rect x="0" y="176" width="400" height="84" fill="#2b5f7a"/>' +
      [190, 206, 222, 238].map((y, i) => '<path class="lk-gl' + (i % 2 ? " lk-gl2" : "") + '" d="M' + (20 + i * 70) + ' ' + y + 'h70" stroke="#ffd18a" stroke-width="2"/>').join("") +
      '<g class="lk-sail"><path d="M10 222h56l-8 10H18z" fill="#5a3a22"/><path d="M36 222V170l26 46z" fill="#f4ead8"/><path d="M36 170l-18 46h18z" fill="#e6dccb"/></g>' +
      txt("LUXOR", 340, 40, 16, CREAM, 'letter-spacing="4" opacity=".85"'),
      sky("lx", "#3b2a5a", "#f08a4b"));
  }

  /* 4. Aswan: white felucca sails floating down the Nile past the granite boulders and Nubian houses */
  function aswan() {
    const sail = (cls, y, s) => '<g class="lk-sail ' + cls + '"><g transform="translate(0 ' + y + ') scale(' + s + ')"><path d="M0 40h70l-10 12H10z" fill="#6a4426"/><path d="M34 40V-24l34 58z" fill="#fbf6ea"/><path d="M34 -24L8 36h26z" fill="#ece3d1"/><path d="M34 -24v64" stroke="#3b2414" stroke-width="2"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#la)"/>' +
      /* far bank: golden dunes and Nubian houses */
      '<path d="M0 120q60-30 120-8t130-14t150 6v40H0z" fill="#e3b46a"/>' +
      [[220, "#3fa7c9"], [244, "#f2c14e"], [270, "#e86a5a"], [296, "#7ac27a"], [322, "#f4ead8"]].map(([x, c]) => '<rect x="' + x + '" y="112" width="22" height="22" fill="' + c + '"/><rect x="' + (x + 8) + '" y="122" width="6" height="12" fill="#3a2a22"/><path d="M' + (x - 2) + ' 112h26" stroke="#fff" stroke-width="2"/>').join("") +
      '<rect x="0" y="134" width="400" height="6" fill="#c69a55"/>' +
      /* granite boulders */
      '<path d="M10 150q10-24 40-20q22-10 34 10q10 14-6 20H14z" fill="#4a3a36"/><path d="M330 154q6-22 32-18q26-4 30 18z" fill="#54423c"/>' +
      '<path d="M24 140q14-8 26 0" stroke="#7a6660" stroke-width="2" fill="none"/>' +
      /* the river */
      '<rect x="0" y="160" width="400" height="100" fill="#21647d"/>' +
      [176, 196, 216, 236].map((y, i) => '<path class="lk-gl' + (i % 2 ? " lk-gl2" : "") + '" d="M' + (40 + i * 80) + ' ' + y + 'h60" stroke="#bfe6f2" stroke-width="2"/>').join("") +
      sail("", 150, 1) + sail("lk-sail2", 190, 0.8) + sail("lk-sail3", 120, 0.6) +
      txt("ON THE NILE", 70, 36, 13, "#3b2414", 'letter-spacing="3"'),
      sky("la", "#8fd1ec", "#fbe3b0"));
  }

  /* 5. The corner: Irvine Turner Blvd & W Kinney St in the Central Ward, his name on the wall, the old courthouse dome behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#lc)"/>' +
      /* the courthouse: white marble, columns, dome */
      '<rect x="150" y="70" width="140" height="66" fill="#e9e4d8"/>' +
      [158, 176, 194, 212, 230, 248, 266].map(x => '<rect x="' + x + '" y="84" width="8" height="46" fill="#d4cdbd"/>').join("") +
      '<path d="M146 70h148l-74-22z" fill="#ddd6c6"/>' +
      '<rect x="196" y="22" width="48" height="26" fill="#e9e4d8"/><path d="M196 22q24-34 48 0z" fill="#c9c2b0"/><rect x="216" y="2" width="8" height="10" fill="#c9c2b0"/>' +
      txt("ESSEX COUNTY COURTHOUSE", 220, 66, 6.5, "#6b6355", 'letter-spacing="1"') +
      /* side buildings */
      '<rect x="0" y="60" width="140" height="76" fill="#4b3a3e"/><rect x="300" y="50" width="100" height="86" fill="#3e3440"/>' +
      [[14, 74], [44, 74], [74, 74], [104, 74], [14, 102], [74, 102], [314, 66], [344, 66], [374, 66], [314, 96], [374, 96]].map(([x, y], i) => '<rect class="' + (i % 3 ? "" : "lk-flk") + '" x="' + x + '" y="' + y + '" width="16" height="14" fill="#ffd98a"/>').join("") +
      /* the wall */
      '<rect x="0" y="136" width="400" height="92" fill="#6a3d34"/>' +
      (() => { let b = ""; for (let y = 146; y < 228; y += 10) b += '<path d="M0 ' + y + 'h400" stroke="#5a322b" stroke-width="1"/>'; return b; })() +
      tag("LAKIM SHABAZZ", 14, 190, 38, GOLD, -5) + tag("BLACK IS BACK", 196, 218, 18, RED, -3) + tag("45 KING", 24, 220, 15, GREEN, -4) +
      /* sidewalk + street */
      '<rect x="0" y="228" width="400" height="32" fill="#55575c"/><rect x="0" y="228" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="lk-car"><rect x="0" y="240" width="46" height="13" rx="4" fill="' + GREEN + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="36" cy="253" r="4" fill="#111"/></g>' +
      /* sign pole + green street signs */
      '<rect x="356" y="64" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="282" y="68" width="114" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Irvine Turner Blvd", 339, 83, 11, "#fff") +
      '<rect x="296" y="94" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("W Kinney St", 346, 109, 12, "#fff") +
      '<circle class="lk-flk" cx="358" cy="62" r="4" fill="#fff6c2"/>',
      sky("lc", "#0c1020", "#33304a"));
  }

  window.SCENES = { warren: warren, booth: booth, luxor: luxor, aswan: aswan, corner: corner };
})();
