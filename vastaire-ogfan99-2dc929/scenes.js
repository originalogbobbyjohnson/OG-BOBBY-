/* vastaire scenes (OG FAN 99 Regions) */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-2.4s}.car3{animation-delay:-4.8s}' +
    '@keyframes carsL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}.bl4{animation-delay:1.05s}' +
    '@keyframes pad{0%,70%,100%{opacity:.25}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}' +
    '.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}.mt5{animation-delay:.3s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .5s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const pads = (x, y, c1, c2) => { let s = ""; for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) s += '<rect class="pd p' + (r * 4 + c + 1) + '" x="' + (x + c * 22) + '" y="' + (y + r * 18) + '" width="17" height="13" rx="2" fill="' + (r ? c2 : c1) + '"/>'; return s; };
  const turntable = (x, y, label) => '<rect x="' + x + '" y="' + y + '" width="110" height="70" rx="4" fill="#2c2c30" stroke="#55565c" stroke-width="2"/>' +
    '<g class="vn"><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="28" fill="#0b0b0b"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="20" fill="none" stroke="#2a2a2a"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="9" fill="' + label + '"/><rect x="' + (x + 46) + '" y="' + (y + 27) + '" width="4" height="5" fill="#fff"/></g>' +
    '<path d="M' + (x + 96) + ' ' + (y + 10) + 'l-14 30" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>';
  const brick = (x, y, w, h, c, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let yy = y + 8; yy < y + h; yy += 8) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>'; return s; };

  const ICE = "#7fc8ff", STL = "#c0c7d0", RED = "#ff5a3c";
  const X = '<style>@keyframes spray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sp{animation:spray 1.4s ease-out infinite}.sp2{animation-delay:.45s}.sp3{animation-delay:.9s}' +
    '@keyframes flap{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-14px)}}.fl{animation:flap 3.4s ease-in-out infinite}.fl2{animation-delay:-1.1s}.fl3{animation-delay:-2.2s}' +
    '@keyframes wing{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.wg{transform-box:fill-box;transform-origin:50% 100%;animation:wing .35s linear infinite}' +
    '@keyframes ballb{0%,100%{transform:translateY(0)}50%{transform:translateY(-46px)}}.bb{animation:ballb 1s ease-in-out infinite}' +
    '@keyframes chase{0%,100%{opacity:.25}50%{opacity:1}}.ch{animation:chase .8s steps(1) infinite}.ch2{animation-delay:.4s}' +
    '@keyframes snow{from{transform:translateY(-30px)}to{transform:translateY(270px)}}.sn{animation:snow 7s linear infinite}.sn2{animation-delay:-2.3s}.sn3{animation-delay:-4.6s}</style>';
  const bird = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')"><ellipse cx="0" cy="0" rx="9" ry="5" fill="' + (c || "#8a93a3") + '"/><circle cx="8" cy="-4" r="3.6" fill="' + (c || "#8a93a3") + '"/><path d="M11 -4l4 1-4 1z" fill="#e0b040"/><circle cx="9" cy="-5" r=".8" fill="#111"/>' +
    '<path class="wg" d="M-4 -2q-6 -12 -14 -10q6 4 8 10z" fill="#6f7888"/><path d="M-9 0l-6 3 1 -4z" fill="#555c68"/></g>';
  const flakes = () => { let s = ""; for (let i = 0; i < 30; i++) s += '<circle class="sn ' + ["", "sn2", "sn3"][i % 3] + '" cx="' + ((i * 113) % 400) + '" cy="' + ((i * 37) % 120) + '" r="' + (i % 2 ? 1.4 : 2.1) + '" fill="#fff" opacity=".8"/>'; return s; };
  const tower = (x, y, h, c) => '<rect x="' + x + '" y="' + y + '" width="14" height="' + h + '" fill="' + c + '"/><path d="M' + (x - 2) + ' ' + y + 'l9 -8 9 8z" fill="' + c + '"/><path d="M' + (x + 2) + ' ' + (y + h) + 'v10M' + (x + 12) + ' ' + (y + h) + 'v10" stroke="' + c + '" stroke-width="2"/>';

  /* 1. 125 St on the 8th Av line under St. Nicholas Av (A/C/B/D): underground, white tile, the train pulling in */
  function station() {
    let tiles = ""; for (let x = 0; x < 400; x += 16) tiles += '<path d="M' + x + ' 30v118" stroke="#d6d9dc" stroke-width="1"/>';
    for (let y = 30; y < 150; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d6d9dc" stroke-width="1"/>';
    return svg(X +
      '<rect width="400" height="260" fill="#1c1f24"/><rect x="0" y="30" width="400" height="118" fill="#eef0ee"/>' + tiles +
      '<rect x="0" y="30" width="400" height="12" fill="#2d6a8f"/><rect x="0" y="100" width="400" height="10" fill="#2d6a8f"/>' +
      '<text x="200" y="40" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" letter-spacing="6">125 STREET</text>' +
      '<rect x="60" y="54" width="280" height="40" rx="3" fill="#111"/><text x="78" y="81" ' + font + ' font-size="22" fill="#fff">125 St</text>' +
      bullet(222, 74, "A", "#0039a6") + bullet(250, 74, "C", "#0039a6") + bullet(278, 74, "B", "#ff6319") + bullet(306, 74, "D", "#ff6319") +
      [40, 140, 260, 360].map(x => '<rect x="' + (x - 5) + '" y="110" width="10" height="70" fill="#2a2d33"/>').join("") +
      '<rect x="0" y="176" width="400" height="10" fill="#e8c840"/><rect x="0" y="186" width="400" height="74" fill="#3a3d42"/>' +
      '<g class="anim-train"><rect x="10" y="118" width="250" height="62" rx="6" fill="#a9b0b8" stroke="#555" stroke-width="2"/>' +
      [30, 90, 150, 210].map(x => '<rect x="' + x + '" y="128" width="34" height="22" rx="2" fill="#1d2a36"/>').join("") +
      '<rect x="10" y="156" width="250" height="4" fill="#0039a6"/>' + bullet(244, 140, "A", "#0039a6") +
      '<circle cx="254" cy="170" r="3" fill="#fff6c2"/></g>' +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="11" fill="' + ICE + '" letter-spacing="3">HARLEM - 125 ST - ST NICHOLAS AV</text>');
  }

  /* 2. The Apollo on 125th: red-orange vertical sign, the marquee chasing lights, crowd under it */
  function apollo() {
    let bulbs = ""; for (let i = 0; i < 22; i++) bulbs += '<circle class="ch' + (i % 2 ? " ch2" : "") + '" cx="' + (96 + i * 10) + '" cy="132" r="2.4" fill="#ffe08a"/>';
    for (let i = 0; i < 22; i++) bulbs += '<circle class="ch' + (i % 2 ? "" : " ch2") + '" cx="' + (96 + i * 10) + '" cy="170" r="2.4" fill="#ffe08a"/>';
    return svg(X +
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(30) +
      brick(70, 40, 260, 180, "#8a5a3c", "#7a4d32") +
      [90, 150, 210, 270].map(x => '<rect x="' + x + '" y="56" width="34" height="46" fill="#2a2a38"/><rect x="' + (x + 4) + '" y="60" width="26" height="38" fill="#ffd27a" opacity=".55"/>').join("") +
      '<rect x="188" y="16" width="26" height="110" rx="3" fill="#d4291c" stroke="#7a1208" stroke-width="2"/>' +
      ["A", "P", "O", "L", "L", "O"].map((l, i) => '<text class="flk" x="201" y="' + (36 + i * 17) + '" text-anchor="middle" ' + font + ' font-size="15" fill="#fff4d0">' + l + '</text>').join("") +
      '<rect x="90" y="128" width="220" height="46" fill="#1b1b1b" stroke="#c8202a" stroke-width="3"/>' + bulbs +
      '<text x="200" y="150" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">AMATEUR NIGHT</text><text x="200" y="166" text-anchor="middle" ' + font + ' font-size="10" fill="' + ICE + '">CANNIBAL OX - THE COLD VEIN</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#3a3a3e"/><rect x="0" y="216" width="400" height="6" fill="#9a9a9a"/>' +
      [110, 140, 230, 262, 300].map((x, i) => '<g class="bob" style="animation-delay:' + (i * .2) + 's"><rect x="' + x + '" y="196" width="14" height="24" rx="4" fill="' + ["#222", "#3a2a4a", "#1e3a5a", "#4a2a20", "#222"][i] + '"/><circle cx="' + (x + 7) + '" cy="190" r="6" fill="#2b2b2b"/></g>').join(""),
      sky("g2", "#0b1430", "#2a3a6a"));
  }

  /* 3. A Harlem rooftop pigeon coop at dusk: water towers, the coop, pigeons flying over (Pigeon, The Cold Vein) */
  function coop() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<path d="M0 150V96h40v-20h30v20h50v-34h40v34h60v-14h40v14h50v-28h40v28h50v54z" fill="#2c2f3a"/>' +
      tower(60, 60, 26, "#5a4030") + tower(300, 50, 30, "#6a4a34") +
      '<rect x="0" y="150" width="400" height="110" fill="#6b4a3a"/><rect x="0" y="146" width="400" height="8" fill="#8a8a8a"/>' +
      '<rect x="120" y="96" width="150" height="70" fill="#d8d2c4" stroke="#6b6458" stroke-width="2"/><path d="M110 98l85 -26 85 26z" fill="#4a5a6a"/>' +
      '<rect x="134" y="108" width="122" height="40" fill="#3a3a3a"/>' + (() => { let s = ""; for (let x = 140; x < 256; x += 8) s += '<path d="M' + x + ' 108v40" stroke="#bbb" stroke-width="1.2"/>'; return s; })() +
      '<path d="M100 166h200" stroke="#3a3a3a" stroke-width="3"/><path d="M290 120l40 -40" stroke="#c0c0c0" stroke-width="2"/><path d="M326 76l12 6-8 6z" fill="' + RED + '"/>' +
      '<g class="fl">' + bird(70, 50, 1) + bird(110, 36, .8) + '</g><g class="fl fl2">' + bird(200, 30, 1.1) + bird(240, 46, .9) + '</g><g class="fl fl3">' + bird(330, 24, .8) + '</g>' +
      bird(150, 92, .9, "#9aa3b3") + bird(214, 92, .9) +
      '<text x="200" y="236" text-anchor="middle" ' + font + ' font-size="11" fill="' + ICE + '" letter-spacing="3">METALLIC WING PIGEON</text>',
      sky("g3", "#2a3a5a", "#d88a5a"));
  }

  /* 4. Rucker Park at 155th: green court, the fence, the Polo Grounds Towers behind, a ball bouncing */
  function rucker() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="34" width="62" height="120" fill="#9a6a52"/>' + (() => { let s = ""; for (let r = 0; r < 9; r++) for (let c = 0; c < 4; c++) s += '<rect x="' + (x + 6 + c * 14) + '" y="' + (42 + r * 12) + '" width="8" height="6" fill="' + ((r * 3 + c + x) % 5 ? "#3a2a24" : "#ffd27a") + '"/>'; return s; })()).join("") +
      '<rect x="0" y="150" width="400" height="110" fill="#2f7a4a"/><path d="M0 150h400" stroke="#ddd" stroke-width="2"/>' +
      '<path d="M40 250L120 160h160l80 90" fill="none" stroke="#fff" stroke-width="2"/><ellipse cx="200" cy="200" rx="40" ry="14" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<rect x="196" y="110" width="8" height="54" fill="#555"/><rect x="176" y="96" width="48" height="30" fill="#fff" stroke="#333" stroke-width="2"/><rect x="192" y="110" width="16" height="10" fill="none" stroke="' + RED + '" stroke-width="2"/><path d="M192 126h16l-3 10h-10z" fill="none" stroke="#eee" stroke-width="1.5"/>' +
      '<g class="bb"><circle cx="250" cy="200" r="7" fill="#e07020"/><path d="M243 200h14M250 193v14" stroke="#7a3a10" stroke-width="1"/></g>' +
      (() => { let s = ""; for (let x = 0; x < 400; x += 10) s += '<path d="M' + x + ' 140l10 10M' + (x + 10) + ' 140l-10 10" stroke="#9aa" stroke-width=".8"/>'; return s; })() +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="3">RUCKER PARK - 155 ST</text>',
      sky("g4", "#7ab0d8", "#e8eef2"));
  }

  /* 5. W 125 St and Lenox Av: green signs, VAST AIRE tagged, the Empire State far down the island (miracles on 34th), snow */
  function corner() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#g5)"/>' +
      '<rect x="250" y="40" width="20" height="80" fill="#9aa4b4"/><rect x="254" y="22" width="12" height="20" fill="#aab4c4"/><rect x="258" y="6" width="4" height="18" fill="#ccd"/><rect x="244" y="70" width="32" height="50" fill="#8a94a4"/>' +
      '<path d="M0 124V88h50v-12h40v12h60v-20h30v56zM300 124V80h40v-10h60v54z" fill="#3a4250"/>' +
      '<rect x="0" y="120" width="400" height="104" fill="#5a3a30"/>' + brick(0, 120, 400, 104, "#5a3a30", "#4a2f27") +
      tag("VAST AIRE", 30, 196, 52, ICE, -6) + tag("CAN OX", 40, 218, 16, RED, -3) + tag("STARVIN HARLEM", 140, 218, 15, STL, -3) +
      '<g class="sp"><circle cx="262" cy="160" r="3" fill="' + ICE + '"/></g><g class="sp sp2"><circle cx="268" cy="154" r="2" fill="' + ICE + '"/></g><g class="sp sp3"><circle cx="258" cy="150" r="2" fill="' + ICE + '"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="220" width="400" height="6" fill="#d8dce0"/>' +
      '<rect x="346" y="88" width="6" height="136" fill="#2f2f2f"/>' + sign(282, 90, 116, "W 125 St") + sign(282, 116, 116, "Lenox Av") +
      '<rect x="290" y="140" width="100" height="14" rx="2" fill="#fff"/><text x="340" y="150" text-anchor="middle" ' + font + ' font-size="8" fill="#0f6b3a">MALCOLM X BLVD</text>' + flakes(),
      sky("g5", "#1a2338", "#5a6a8a"));
  }

  window.SCENES = { station: station, apollo: apollo, coop: coop, rucker: rucker, corner: corner };
})();
