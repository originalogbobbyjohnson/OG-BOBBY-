/* Tony Yayo game (NYC map, Queens: South Jamaica). The E and F underground at Briarwood (the subway stop down Van Wyck Blvd from South Jamaica),
   the Iron Market (Marché en Fer) in Port-au-Prince, Haiti, where his parents came from (red iron, minaret towers, clock),
   the Citadelle Laferrière on its mountain in northern Haiti, the 2003 awards-night red carpet when "Free Yayo" shirts went worldwide,
   and 160th St & 109th Av in South Jamaica with the red-brick South Jamaica Houses behind. 400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.5s}.bl3{animation-delay:1s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes wave{0%,100%{transform:skewY(0)}50%{transform:skewY(-7deg)}}.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.4s ease-in-out infinite}' +
    '@keyframes drift{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.cloud{animation:drift 16s linear infinite}.cloud2{animation-delay:-8s}' +
    '@keyframes flash{0%,80%,100%{opacity:0}85%{opacity:1}}.fl{animation:flash 1.8s infinite}.fl2{animation-delay:.6s}.fl3{animation-delay:1.2s}' +
    '@keyframes walk{from{transform:translateX(0)}to{transform:translateX(60px)}}.wk{animation:walk 5s linear infinite alternate}.wk2{animation-delay:-2.5s}' +
    '@keyframes bird{0%{transform:translate(0,0)}50%{transform:translate(40px,-8px)}100%{transform:translate(80px,0)}}.bd{animation:bird 6s ease-in-out infinite alternate}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const BLUE = "#0039a6", ORANGE = "#ff6319", GREEN = "#7ed957", GOLD = "#ffd23f", HRED = "#d21034", HBLUE = "#00209f", IRON = "#b5352a";
  const hflag = (x, y) => '<rect x="' + x + '" y="' + y + '" width="2" height="34" fill="#ddd"/><g class="flag"><rect x="' + (x + 2) + '" y="' + y + '" width="26" height="8" fill="' + HBLUE + '"/><rect x="' + (x + 2) + '" y="' + (y + 8) + '" width="26" height="8" fill="' + HRED + '"/><rect x="' + (x + 11) + '" y="' + (y + 5) + '" width="8" height="6" fill="#fff"/></g>';
  const cloud = (x, y, cls) => '<g class="cloud ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9" fill="#fff" opacity=".85"/><ellipse cx="' + (x + 16) + '" cy="' + (y - 6) + '" rx="16" ry="9" fill="#fff" opacity=".85"/></g>';

  /* 1. Briarwood, underground: tiled walls, the black sign with the blue E and orange F, the train sliding in */
  function briarwood() {
    let tiles = "";
    for (let y = 0; y < 100; y += 10) for (let x = (y / 10) % 2 ? 0 : -10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#ece8dc"/>';
    let win = "";
    for (let x = 24; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#fff8d6" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#cfc9b8"/>' + tiles +
      '<rect x="0" y="44" width="400" height="10" fill="#7a9a6a"/><rect x="0" y="54" width="400" height="3" fill="#4f6b45"/>' +
      '<rect x="78" y="62" width="240" height="30" rx="3" fill="#111"/><rect x="78" y="62" width="240" height="3" fill="#fff"/>' +
      '<text x="94" y="84" ' + font + ' font-size="15" fill="#fff">Briarwood</text>' + bullet(270, 77, "E", BLUE) + bullet(296, 77, "F", ORANGE) +
      '<rect x="0" y="98" width="400" height="66" fill="#1c1d22"/>' +
      '<g class="anim-train">' +
        '<rect x="6" y="104" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="286" y="112" width="16" height="22" rx="2" fill="#fff8d6"/>' + bullet(270, 148, "E", BLUE) + bullet(294, 148, "F", ORANGE) +
        '<circle cx="18" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      [40, 140, 240, 340].map(x => '<rect x="' + (x - 6) + '" y="98" width="12" height="66" fill="#1e3a5a"/>').join("") +
      '<rect x="0" y="164" width="400" height="10" fill="#eab308"/><rect x="0" y="174" width="400" height="86" fill="#9a958a"/>' +
      [100, 300].map(x => '<circle class="flk" cx="' + x + '" cy="28" r="6" fill="#fff6c2"/>').join("") +
      '',
      "");
  }

  /* 2. The Iron Market in Port-au-Prince: red iron halls, the gate with four minaret towers and the clock, vendors under the arches */
  function ironmarket() {
    const tower = x => '<rect x="' + (x - 7) + '" y="42" width="14" height="96" fill="' + IRON + '" stroke="#6e1d16" stroke-width="1.5"/><path d="M' + (x - 9) + ' 42q9-22 18 0z" fill="#2f7a4a"/><rect x="' + (x - 1) + '" y="14" width="2" height="10" fill="#2f7a4a"/><circle cx="' + x + '" cy="24" r="2" fill="' + GOLD + '"/>' +
      '<rect x="' + (x - 3) + '" y="58" width="6" height="12" rx="3" fill="#2a2a2a"/><rect x="' + (x - 3) + '" y="84" width="6" height="12" rx="3" fill="#2a2a2a"/>';
    let arches = "";
    for (let x = 20; x < 380; x += 34) { if (x > 150 && x < 250) continue; arches += '<path d="M' + x + ' 190v-40q14-18 28 0v40z" fill="#2a1d18" stroke="#6e1d16" stroke-width="2"/>'; }
    const vendor = (x, c, cls) => '<g class="wk ' + cls + '"><circle cx="' + x + '" cy="200" r="5" fill="#2b1a12"/><path d="M' + (x - 6) + ' 228l3-22h6l3 22z" fill="' + c + '"/><ellipse cx="' + x + '" cy="193" rx="9" ry="3" fill="#e8c26a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' + cloud(60, 30, "") + cloud(240, 22, "cloud2") +
      '<path d="M0 120q60-40 120-12t140-10 140 6V140H0z" fill="#4c7a52"/>' +
      /* side halls */
      '<rect x="10" y="124" width="140" height="70" fill="' + IRON + '"/><path d="M6 124l74-26 74 26z" fill="#2f7a4a"/>' +
      '<rect x="250" y="124" width="140" height="70" fill="' + IRON + '"/><path d="M246 124l74-26 74 26z" fill="#2f7a4a"/>' +
      arches +
      /* central gate */
      '<rect x="150" y="88" width="100" height="106" fill="' + IRON + '" stroke="#6e1d16" stroke-width="2"/>' +
      '<path d="M176 194v-56q24-30 48 0v56z" fill="#2a1d18"/>' +
      '<circle cx="200" cy="108" r="12" fill="#fdf6e3" stroke="#2a2a2a" stroke-width="2"/><path d="M200 108v-7M200 108l5 3" stroke="#2a2a2a" stroke-width="1.5"/>' +
      tower(156) + tower(176) + tower(224) + tower(244) +
      
      '<rect x="0" y="194" width="400" height="66" fill="#d8c7a0"/>' +
      vendor(60, "#e86a3a", "") + vendor(130, "#3a8ad8", "wk2") + vendor(270, "#7ed957", "") + vendor(330, "#ffd23f", "wk2") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#5a2a1e" letter-spacing="3">MARCHÉ EN FER · PORT-AU-PRINCE</text>' +
      hflag(370, 60),
      sky("s2", "#3aa0ff", "#bfe7ff"));
  }

  /* 3. The Citadelle Laferrière on the mountaintop: the grey stone prow, green mountains, clouds drifting, the flag flying */
  function citadelle() {
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' + cloud(40, 40, "") + cloud(220, 30, "cloud2") +
      '<path d="M0 260V150q60-60 120-40t110-50 90 20 80 10v170z" fill="#2f6b3a"/>' +
      '<path d="M0 260V190q80-30 160-10t140-20 100 10v90z" fill="#3f8a4a"/>' +
      /* fortress */
      '<path d="M130 120l70-60 90 20 10 50-60 24H150z" fill="#8f8a7e" stroke="#5a564d" stroke-width="2"/>' +
      '<path d="M200 60l90 20v50l-90-20z" fill="#a39d90"/><path d="M130 120l70-60v50z" fill="#7a7569"/>' +
      [[214, 86], [236, 90], [258, 95], [214, 104], [236, 108], [258, 113]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="8" height="5" fill="#3a3732"/>').join("") +
      '<path d="M150 154h90l-10 10h-70z" fill="#6e695e"/>' +
      hflag(196, 26) +
      '<g class="bd"><path d="M70 90q6-6 12 0q6-6 12 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="10" fill="#fdf6e3" letter-spacing="3">CITADELLE LAFERRIÈRE</text>',
      sky("s3", "#5ab0ff", "#e0f3ff"));
  }

  /* 4. Awards night 2003: the red carpet, flashbulbs popping, the white tee printed FREE YAYO under the spotlight */
  function freeyayo() {
    let bulbs = "";
    [[40, 120], [80, 150], [330, 125], [370, 160], [60, 190], [350, 200]].forEach(([x, y], i) => bulbs += '<g class="fl fl' + (i % 3 + 1) + '"><circle cx="' + x + '" cy="' + y + '" r="10" fill="#fff"/><circle cx="' + x + '" cy="' + y + '" r="22" fill="#fff" opacity=".25"/></g>' +
      '<rect x="' + (x - 6) + '" y="' + (y + 4) + '" width="12" height="9" rx="2" fill="#111"/>');
    return svg(
      '<rect width="400" height="260" fill="#120a14"/>' + stars(20) +
      '<path d="M200 0L110 210h180z" fill="#fff6d0" opacity=".12"/>' +
      '<path d="M150 260L180 150h40l30 110z" fill="#a3101f"/><path d="M150 260L180 150h40l30 110z" fill="url(#cp)" opacity=".35"/>' +
      '<path d="M170 150h60" stroke="' + GOLD + '" stroke-width="3"/>' +
      [150, 250].map(x => '<rect x="' + (x - 3) + '" y="140" width="6" height="40" fill="' + GOLD + '"/><circle cx="' + x + '" cy="138" r="5" fill="' + GOLD + '"/>').join("") +
      '<path d="M147 150q53 14 106 0" stroke="#7a0c18" stroke-width="4" fill="none"/>' +
      /* the tee */
      '<path d="M160 52l20-10h40l20 10 16 22-18 10-8-10v58h-60V74l-8 10-18-10z" fill="#f7f7f7" stroke="#bbb" stroke-width="2"/>' +
      '<text x="200" y="92" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" fill="#111">FREE</text>' +
      '<text x="200" y="114" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" fill="#111">YAYO</text>' +
      bulbs + tag("2003", 288, 60, 22, GOLD, -8),
      '<linearGradient id="cp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000"/><stop offset="1" stop-color="#fff"/></linearGradient>');
  }

  /* 5. 160th St & 109th Av: green street signs, the wall tagged TONY YAYO, the red-brick South Jamaica Houses behind */
  function corner() {
    let houses = "";
    [[0, 70], [104, 80], [208, 66], [312, 76]].forEach(([x, y]) => {
      houses += '<rect x="' + x + '" y="' + y + '" width="92" height="' + (150 - y) + '" fill="#7a3a2a"/><rect x="' + x + '" y="' + (y - 4) + '" width="92" height="5" fill="#5a2a1e"/>';
      for (let yy = y + 10; yy < 140; yy += 16) for (let xx = x + 8; xx < x + 88; xx += 18) houses += '<rect class="bl bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="8" height="9" fill="#ffd98a" opacity=".8"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(14) + houses +
      '<rect x="0" y="134" width="400" height="92" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("TONY YAYO", 14, 196, 40, GREEN, -5) + tag("FREE YAYO", 210, 220, 20, "#f7f7f7", -4) + tag("THE UNIT", 252, 168, 16, GOLD, -7) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="238" width="46" height="14" rx="4" fill="' + GREEN + '"/><circle cx="10" cy="252" r="4" fill="#111"/><circle cx="36" cy="252" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="296" y="66" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="346" y="82" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">160 St</text>' +
      '<rect x="296" y="92" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="346" y="108" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">109 Av</text>' +
      '<circle class="flk" cx="358" cy="62" r="4" fill="#fff6c2"/>',
      sky("s5", "#0a0c1a", "#2c3554"));
  }

  window.SCENES = { briarwood: briarwood, ironmarket: ironmarket, citadelle: citadelle, freeyayo: freeyayo, corner: corner };
})();
