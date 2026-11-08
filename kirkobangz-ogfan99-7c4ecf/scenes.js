/* kirkobangz scenes (Regions tab: Houston + Texas; North Shore, east side of H-Town). CSS classes and ids prefixed kb- (the page's own anim-train is kept).
   1 METRO's 137 Northshore Express at the Uvalde Rd @ East Fwy stop, under the I-10 overpass in North Shore.
   2 Prairie View A&M, where he studied communications: red-brick hall, purple and gold banners waving.
   3 The Houston Ship Channel by North Shore: the high Beltway 8 bridge over the water, a cargo ship sliding under it.
   4 "I don't ride the toll, don't pay the change, I'm EZ tag like Peter Pan" (Drank In My Cup): a toll plaza at night, cars flying through the tag lanes.
   5 Uvalde Rd and Woodforest Blvd in North Shore: green signs, KIRKO tagged on the wall, the downtown skyline far off down I-10.
   No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kbblink{0%,100%{opacity:.3}50%{opacity:1}}.kb-bl{animation:kbblink 1.6s ease-in-out infinite}.kb-bl2{animation-delay:-.8s}' +
    '@keyframes kbflag{0%,100%{transform:skewY(0)}50%{transform:skewY(5deg)}}.kb-flag{transform-box:fill-box;transform-origin:50% 0;animation:kbflag 1.8s ease-in-out infinite}.kb-flag2{animation-delay:-.9s}' +
    '@keyframes kbship{from{transform:translateX(-200px)}to{transform:translateX(460px)}}.kb-ship{animation:kbship 16s linear infinite;animation-delay:-8s}' +
    '@keyframes kbcarR{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.kb-carR{animation:kbcarR 3.2s linear infinite}.kb-carR2{animation-delay:-1.6s}' +
    '@keyframes kbcarL{from{transform:translateX(520px)}to{transform:translateX(-140px)}}.kb-carL{animation:kbcarL 4.4s linear infinite}' +
    '@keyframes kbflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.kb-flk{animation:kbflick 2.4s infinite}' +
    '@keyframes kbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kb-spr{animation:kbspray 1.4s ease-out infinite}.kb-spr2{animation-delay:.45s}' +
    '@keyframes kbripple{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.kb-rip{animation:kbripple 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 16) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 16) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "kb-bl" + (i % 2 ? " kb-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 80) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const METRO = "#0072ce", PURPLE = "#5b2c83", GOLD = "#f2c14e", BLUE = "#4fa3ff", RED = "#e8475f";
  const car = (x, y, c) => '<g><rect x="' + x + '" y="' + y + '" width="46" height="13" rx="4" fill="' + c + '"/><path d="M' + (x + 9) + ' ' + y + 'l6 -8h16l6 8z" fill="' + c + '"/><path d="M' + (x + 16) + ' ' + (y - 6) + 'h14l4 6h-22z" fill="#1c2633"/>' +
    '<circle cx="' + (x + 10) + '" cy="' + (y + 13) + '" r="4.5" fill="#111"/><circle cx="' + (x + 36) + '" cy="' + (y + 13) + '" r="4.5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 5) + '" r="2" fill="#fff6c2"/></g>';
  const skyline = (base, c, lit) => '<g fill="' + c + '">' + [[40, 22, 46], [66, 18, 70], [88, 26, 58], [118, 16, 92], [138, 24, 76], [166, 20, 62], [190, 14, 84], [210, 22, 66], [236, 18, 52]].map(b => '<rect x="' + b[0] + '" y="' + (base - b[2]) + '" width="' + b[1] + '" height="' + b[2] + '"/>').join("") +
    '<path d="M118 ' + (base - 92) + 'l8 -10l8 10z"/><path d="M190 ' + (base - 84) + 'h14l-7 -12z"/></g>' +
    (lit ? [[44, 40], [70, 60], [92, 50], [122, 80], [142, 66], [194, 74], [214, 56]].map((p, i) => '<rect class="' + (i % 2 ? "kb-bl" : "kb-bl kb-bl2") + '" x="' + (p[0] + 2) + '" y="' + (base - p[1]) + '" width="3" height="3" fill="#ffe08a"/>').join("") : "");

  /* 1. METRO 137 Northshore Express at Uvalde Rd @ East Fwy */
  function kbstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (64 + i * 44) + '" y="128" width="36" height="24" rx="3" fill="#1b2836"/>').join("");
    const bus = '<g class="anim-train"><path d="M34 192V122q0 -10 10 -10h296q22 0 28 22l4 58z" fill="#eef1f4" stroke="#7b848c" stroke-width="2"/>' + win +
      '<path d="M336 116q26 4 32 34h-32z" fill="#1b2836"/>' +
      '<path d="M34 160h340v10H34z" fill="' + METRO + '"/><path d="M34 172h340v3H34z" fill="#8fa0b0"/>' +
      '<rect x="44" y="114" width="108" height="11" rx="2" fill="#111"/><text x="98" y="122.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">137 NORTHSHORE EXPRESS</text>' +
      '<circle cx="364" cy="182" r="3.5" fill="#fff6c2"/><circle cx="100" cy="194" r="10" fill="#222"/><circle cx="100" cy="194" r="4" fill="#777"/><circle cx="310" cy="194" r="10" fill="#222"/><circle cx="310" cy="194" r="4" fill="#777"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kbs1)"/>' +
      '<path d="M0 46h400v20H0z" fill="#8c8a84"/><path d="M0 66h400v6H0z" fill="#6b6964"/><path d="M0 44h400" stroke="#b9b6ae" stroke-width="3"/>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 9) + '" y="72" width="18" height="120" fill="#a9a59c"/><rect x="' + (x - 13) + '" y="70" width="26" height="8" fill="#8c8a84"/>').join("") +
      '<rect x="250" y="20" width="120" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="310" y="35" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">I-10 EAST · Beaumont</text>' +
      '<g class="kb-carL">' + car(0, 30, "#c94040") + '</g>' +
      '<rect x="0" y="108" width="400" height="88" fill="#41454c"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="8" fill="#cfc8b8"/><rect x="0" y="204" width="400" height="56" fill="#aaa294"/>' +
      '<rect x="22" y="132" width="4" height="78" fill="#2b2b2b"/><rect x="12" y="120" width="24" height="16" rx="2" fill="' + METRO + '"/><text x="24" y="131.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS</text>' +
      '<rect x="60" y="208" width="280" height="40" rx="3" fill="#111"/><text x="74" y="226" ' + font + ' font-size="15" fill="#fff">Uvalde Rd @ East Fwy</text><text x="74" y="240" ' + font + ' font-size="9" fill="#bfc6cc">NORTH SHORE · METRO</text>' + badge(272, 228, "137", METRO),
      sky("kbs1", "#5d8fc9", "#f6d6a6"));
  }

  /* 2. Prairie View A&M: red brick, purple and gold */
  function kbpv() {
    const winRow = y => Array.from({ length: 9 }, (_, i) => '<rect x="' + (78 + i * 28) + '" y="' + y + '" width="14" height="20" fill="#f4e6b8" opacity=".9"/>').join("");
    const banner = (x, c, cls) => '<rect x="' + (x - 1) + '" y="52" width="2" height="10" fill="#444"/><g class="kb-flag ' + cls + '"><path d="M' + (x - 10) + ' 60h20v44l-10 -8l-10 8z" fill="' + c + '"/><text x="' + x + '" y="84" text-anchor="middle" ' + font + ' font-size="9" fill="' + (c === PURPLE ? GOLD : PURPLE) + '">PV</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kbs2)"/>' +
      '<rect x="60" y="60" width="280" height="140" fill="#9c4a32"/>' + Array.from({ length: 17 }, (_, i) => '<path d="M60 ' + (68 + i * 8) + 'h280" stroke="#86402b" stroke-width="1"/>').join("") +
      '<path d="M50 60h300l-20 -26H70z" fill="#5a2a1e"/><rect x="50" y="56" width="300" height="6" fill="#e8dcc0"/>' +
      winRow(110) + winRow(146) +
      '<rect x="174" y="160" width="52" height="40" fill="#3a1d14"/><path d="M174 160q26 -24 52 0z" fill="#e8dcc0"/><rect x="164" y="152" width="72" height="6" fill="#e8dcc0"/>' +
      [176, 192, 208, 224].map(x => '<rect x="' + x + '" y="160" width="4" height="40" fill="#e8dcc0"/>').join("") +
      banner(90, PURPLE, "") + banner(140, GOLD, "kb-flag2") + banner(260, GOLD, "") + banner(310, PURPLE, "kb-flag2") +
      '<text x="200" y="50" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '" letter-spacing="2">PRAIRIE VIEW</text>' +
      '<rect x="0" y="200" width="400" height="60" fill="#5f9a46"/><path d="M150 260l30 -60h40l30 60z" fill="#d9cfb8"/>' +
      '<g fill="#3e7a32"><circle cx="24" cy="186" r="22"/><circle cx="376" cy="186" r="22"/><rect x="21" y="196" width="6" height="16" fill="#5a3a22"/><rect x="373" y="196" width="6" height="16" fill="#5a3a22"/></g>',
      sky("kbs2", "#7fb6e6", "#e9f2fa"));
  }

  /* 3. The Ship Channel and the high Beltway 8 bridge */
  function kbbridge() {
    const deck = '<path d="M0 92Q200 40 400 92" stroke="#c9c4b8" stroke-width="10" fill="none"/><path d="M0 100Q200 48 400 100" stroke="#a9a397" stroke-width="5" fill="none"/>';
    const piers = [60, 130, 270, 340].map(x => { const y = 92 - 52 * (1 - Math.pow((x - 200) / 200, 2)); return '<rect x="' + (x - 7) + '" y="' + y.toFixed(1) + '" width="14" height="' + (150 - y).toFixed(1) + '" fill="#b5afa2"/>'; }).join("");
    const ship = '<g class="kb-ship"><path d="M0 150h170l-14 22H12z" fill="#2e3f5a"/><rect x="130" y="124" width="30" height="26" fill="#e8e8e8"/><rect x="134" y="128" width="22" height="5" fill="#1b2836"/>' +
      [[10, "#c94040"], [38, "#2f7fbf"], [66, "#e0a030"], [94, "#3a8a5a"]].map(b => '<rect x="' + b[0] + '" y="132" width="26" height="18" fill="' + b[1] + '" stroke="#00000033"/>').join("") +
      [[24, "#2f7fbf"], [52, "#c94040"], [80, "#e0a030"]].map(b => '<rect x="' + b[0] + '" y="116" width="26" height="16" fill="' + b[1] + '" stroke="#00000033"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kbs3)"/>' +
      '<g fill="#7d8796"><rect x="300" y="128" width="10" height="24"/><rect x="316" y="118" width="8" height="34"/><rect x="330" y="132" width="40" height="20"/><path d="M372 152v-30h4v30z"/></g>' +
      piers + deck +
      '<rect x="0" y="150" width="400" height="110" fill="#3f6a7a"/>' +
      ship +
      '<g class="kb-rip"><path d="M-10 186q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#7fb0c0" stroke-width="2" fill="none"/></g>' +
      '<path d="M0 218q100 -10 200 0t200 0V260H0z" fill="#5b6b4a"/>' +
      '<rect x="20" y="222" width="190" height="24" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="115" y="238" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">HOUSTON SHIP CHANNEL</text>',
      sky("kbs3", "#f5a35c", "#ffd9a0"));
  }

  /* 4. EZ tag: a toll plaza at night, cars flying through */
  function kbtoll() {
    const lane = (x, txt, c) => '<rect x="' + x + '" y="62" width="70" height="22" rx="2" fill="#111"/><text x="' + (x + 35) + '" y="77" text-anchor="middle" ' + font + ' font-size="10" fill="' + c + '">' + txt + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#kbs4)"/>' + stars(12) +
      '<rect x="20" y="52" width="360" height="10" fill="#6d7680"/><rect x="24" y="62" width="8" height="120" fill="#6d7680"/><rect x="368" y="62" width="8" height="120" fill="#6d7680"/>' +
      lane(50, "EZ TAG", "#7dff9a") + lane(130, "EZ TAG", "#7dff9a") + lane(210, "EZ TAG", "#7dff9a") + lane(290, "EZ TAG", "#7dff9a") +
      [85, 165, 245, 325].map((x, i) => '<circle class="kb-bl' + (i % 2 ? " kb-bl2" : "") + '" cx="' + x + '" cy="96" r="5" fill="#3cff6a"/>').join("") +
      '<rect x="0" y="150" width="400" height="110" fill="#2c2f36"/>' +
      [0, 1, 2, 3].map(i => '<path d="M' + (20 + i * 120) + ' 206h60" stroke="#e8e2c8" stroke-width="3"/>').join("") +
      '<g class="kb-carR">' + car(0, 172, BLUE) + '</g><g class="kb-carR kb-carR2">' + car(0, 220, "#d8d8d8") + '</g><g class="kb-carL">' + car(0, 190, RED) + '</g>' +
      '<text x="200" y="40" text-anchor="middle" ' + font + ' font-size="14" fill="' + GOLD + '" letter-spacing="1">NO CASH · DON\'T PAY THE CHANGE</text>',
      sky("kbs4", "#0b1030", "#3a2a5a"));
  }

  /* 5. Uvalde Rd and Woodforest Blvd, North Shore */
  function kbcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#kbs5)"/>' + stars(14) +
      skyline(130, "#23304d", true) +
      '<rect x="0" y="126" width="400" height="98" fill="#d0c8b8"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#bbb2a0" stroke-width="1"/>').join("") +
      '<rect x="0" y="126" width="400" height="6" fill="#998f7c"/>' +
      tag("KIRKO", 22, 192, 54, BLUE, -6) + tag("BANGZ", 40, 218, 26, GOLD, -5) + tag("H-TOWN", 196, 172, 26, RED, -4) + tag("KEEP IT TRILL", 176, 202, 17, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 148, "Uvalde Rd") + sign(250, 124, 148, "Woodforest Blvd") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="kb-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="kb-spr"><circle cx="160" cy="180" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="kb-spr kb-spr2"><circle cx="166" cy="174" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("kbs5", "#0e1430", "#4a3a6a"));
  }

  window.SCENES = { kbstation: kbstation, kbpv: kbpv, kbbridge: kbbridge, kbtoll: kbtoll, kbcorner: kbcorner };
})();
