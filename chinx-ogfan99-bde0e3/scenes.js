/* Chinx game (NYC map, Queens: Far Rockaway). The A train on the viaduct at Beach 44 St, the JFK control tower ("Welcome to JFK"),
   a summer block party at the Edgemere Houses (now Ocean Bay) towers where he grew up, the Cross Bay Bridge out over Jamaica Bay at night,
   and Beach Channel Dr & Beach 51 St with Jamaica Bay and a jet coming down to JFK behind. Other Rockaway games already use Mott Av, Beach 25 St,
   Beach 36 St, the bay trestle, the boardwalk, Riis Park, Bayswater Point, Fort Tilden, Wavecrest, Redfern and Beach 9 St. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes carsL{from{transform:translateX(480px)}to{transform:translateX(-80px)}}.carL{animation:carsL 6s linear infinite}.carL2{animation-delay:-3s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes takeoff{0%{transform:translate(-60px,40px)}100%{transform:translate(460px,-120px)}}.to{animation:takeoff 9s linear infinite}' +
    '@keyframes land{0%{transform:translate(460px,-60px)}100%{transform:translate(-80px,40px)}}.ld{animation:land 11s linear infinite}' +
    '@keyframes beam{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.bm{transform-box:fill-box;transform-origin:0% 50%;animation:beam 4s linear infinite}' +
    '@keyframes dance{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}.dn{animation:dance .6s ease-in-out infinite}.dn2{animation-delay:-.3s}' +
    '@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.pl{transform-box:fill-box;transform-origin:50% 50%;animation:pulse .6s ease-in-out infinite}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.wv{animation:wave 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* Ocean Bay (old Edgemere Houses) style tall brick towers */
  const tower = (x, y, w, h, col, lit) => { let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + col + '"/>';
    for (let yy = y + 8; yy < y + h - 8; yy += 12) for (let xx = x + 5; xx < x + w - 6; xx += 10) g += '<rect' + (lit && (xx + yy) % 4 ? ' class="bl bl' + ((xx + yy) % 3 + 1) + '"' : '') + ' x="' + xx + '" y="' + yy + '" width="5" height="7" fill="' + (lit ? "#ffd98a" : "#33404f") + '"' + (lit && !((xx + yy) % 4) ? ' opacity=".25"' : '') + '/>';
    return g; };
  const jet = (cls, flip) => '<g class="' + cls + '"><g' + (flip ? ' transform="matrix(-1 0 0 1 72 0)"' : '') + '><path d="M0 10l46-2 8-6h6l-6 7 10 1v4l-10 1 6 7h-6l-8-6-46-2z" fill="#eef2f6" stroke="#8a95a3" stroke-width="1"/><path d="M14 9l12-12h6l-6 12zM14 15l12 12h6l-6-12z" fill="#d6dde6"/><circle class="bl" cx="2" cy="12" r="2" fill="#ff5a5a"/></g></g>';
  const ABLUE = "#0039a6", GREEN = "#3ee08f", GOLD = "#d9b44a", SKY = "#59b7ff", CREAM = "#f4ead8";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';

  /* 1. Beach 44 St: the A train on the viaduct over the Rockaway Freeway, black sign with the blue A, Edgemere towers at dusk */
  function station() {
    let win = "";
    for (let x = 24; x < 290; x += 34) win += '<rect x="' + x + '" y="112" width="22" height="20" rx="2" fill="#ffe9b0" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(8) +
      tower(6, 40, 56, 70, "#7a4434", true) + tower(334, 30, 60, 80, "#7a4434", true) +
      /* canopy */
      '<path d="M0 26h400v12H0z" fill="#3c4650"/><rect x="0" y="38" width="400" height="3" fill="#1f262c"/>' +
      [40, 150, 260, 370].map(x => '<rect x="' + (x - 3) + '" y="41" width="6" height="121" fill="#3c4650"/>').join("") +
      '<circle class="flk" cx="95" cy="46" r="4" fill="#fff3c0"/><circle class="flk" cx="315" cy="46" r="4" fill="#fff3c0"/>' +
      /* sign */
      '<rect x="92" y="56" width="216" height="30" rx="3" fill="#111"/><rect x="92" y="56" width="216" height="3" fill="#fff"/>' +
      '<text x="106" y="78" ' + font + ' font-size="15" fill="#fff">Beach 44 St</text>' + bullet(288, 71, "A", ABLUE) +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="6" y="102" width="300" height="56" rx="6" fill="#b9bfc8" stroke="#5b6270" stroke-width="2"/>' + win +
        '<rect x="6" y="138" width="300" height="5" fill="' + ABLUE + '"/>' +
        '<rect x="286" y="110" width="16" height="22" rx="2" fill="#ffe9b0"/>' + bullet(292, 148, "A", ABLUE) +
        '<circle cx="18" cy="150" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="158" width="400" height="8" fill="#eab308"/><rect x="0" y="166" width="400" height="14" fill="#a9a293"/>' +
      [0, 80, 160, 240, 320].map(x => '<path d="M' + x + ' 180h80v58h-12v-22q-28-24-56 0v22H' + x + 'z" fill="#958e80"/>').join("") +
      '<rect x="0" y="238" width="400" height="22" fill="#33353a"/>' +
      '<g class="carL"><rect x="0" y="242" width="40" height="13" rx="4" fill="' + GREEN + '"/><circle cx="3" cy="247" r="2" fill="#fff6c2"/></g>' +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="9" fill="#e6e0d2" letter-spacing="3">EDGEMERE</text>',
      sky("s1", "#1c2450", "#e9875a"));
  }

  /* 2. JFK: the tall white control tower with its flared green-glass cab, the beacon sweeping, runway lights, a jet taking off ("Welcome to JFK") */
  function jfk() {
    let lights = "";
    for (let x = 0; x < 400; x += 20) lights += '<circle class="bl bl' + (x / 20 % 3 + 1) + '" cx="' + x + '" cy="214" r="2" fill="#ffd36b"/><circle class="bl bl' + ((x / 20 + 1) % 3 + 1) + '" cx="' + (x + 10) + '" cy="236" r="2" fill="#7fd7ff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' + stars(16) +
      /* terminal low in the back */
      '<rect x="0" y="168" width="400" height="30" fill="#2b3446"/>' +
      (() => { let w = ""; for (let x = 6; x < 400; x += 14) w += '<rect x="' + x + '" y="176" width="8" height="10" fill="#ffd98a" opacity=".55"/>'; return w; })() +
      /* control tower: tapered white shaft, flared cab with green glass, antenna */
      '<path d="M236 198l6-122h20l6 122z" fill="#e9edf1" stroke="#aeb7c2" stroke-width="1.5"/>' +
      '<path d="M244 120h16M244 140h16M243 160h18" stroke="#c4ccd6" stroke-width="2"/>' +
      '<path d="M222 76h60l-8-12h-44z" fill="#e9edf1" stroke="#aeb7c2" stroke-width="1.5"/>' +
      '<path d="M226 64l-6-22h64l-6 22z" fill="#3aa486" stroke="#e9edf1" stroke-width="2"/>' +
      '<path d="M234 64l-3-22M246 64l-1-22M258 64l1-22M270 64l3-22" stroke="#e9edf1" stroke-width="1.5"/>' +
      '<path d="M218 42h68l-6-8h-56z" fill="#f4f6f8"/><rect x="250" y="16" width="4" height="18" fill="#c4ccd6"/>' +
      '<circle class="bl" cx="252" cy="15" r="3" fill="#ff5a5a"/>' +
      '<g transform="translate(252 38)"><rect class="bm" x="0" y="-3" width="120" height="6" fill="#fff6c2" opacity=".18"/></g>' +
      /* runway */
      '<rect x="0" y="198" width="400" height="62" fill="#1a1d24"/><path d="M0 226h400" stroke="#e9e9e9" stroke-width="2" stroke-dasharray="18 14"/>' + lights +
      '<g transform="translate(0,120)">' + jet("to", true) + '</g>' +
      '<text x="20" y="40" ' + font + ' font-size="13" fill="' + CREAM + '" letter-spacing="4">WELCOME TO JFK</text>',
      sky("s2", "#0b1026", "#3c3f6e"));
  }

  /* 3. Edgemere Houses (now Ocean Bay): the brick towers on a summer night, a block party with a DJ table, speakers thumping, string lights */
  function block() {
    let bulbs = "";
    for (let x = 0; x <= 400; x += 16) bulbs += '<circle class="bl bl' + (x / 16 % 3 + 1) + '" cx="' + x + '" cy="' + (124 + Math.round(10 * Math.sin(x / 400 * Math.PI))) + '" r="3" fill="' + ["#ffd36b", "#3ee08f", "#ff6b6b"][x / 16 % 3] + '"/>';
    let crowd = "";
    for (let x = 20; x < 400; x += 26) if (x < 140 || x > 270) crowd += '<g class="dn' + (x % 52 ? "" : " dn2") + '"><circle cx="' + x + '" cy="186" r="7" fill="#121212"/><rect x="' + (x - 7) + '" y="193" width="14" height="22" rx="5" fill="' + [GREEN, "#f4f4f4", GOLD, SKY][x % 4] + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' + stars(12) +
      tower(10, 20, 70, 140, "#8a4a36", true) + tower(100, 40, 60, 120, "#7e4432", true) + tower(240, 30, 66, 130, "#8a4a36", true) + tower(326, 46, 64, 114, "#7e4432", true) +
      '<path d="M0 124Q200 144 400 124" stroke="#333" stroke-width="1" fill="none"/>' + bulbs +
      '<rect x="0" y="160" width="400" height="100" fill="#3b3e44"/><rect x="0" y="160" width="400" height="4" fill="#5c6068"/>' +
      /* DJ table and speakers */
      '<rect x="150" y="182" width="100" height="14" fill="#1b1b1b"/><rect x="156" y="196" width="88" height="34" fill="#2a2a2a"/>' +
      '<circle cx="176" cy="188" r="8" fill="#0d0d0d" stroke="#555"/><circle cx="224" cy="188" r="8" fill="#0d0d0d" stroke="#555"/>' +
      '<rect x="120" y="170" width="28" height="56" fill="#141414"/><circle class="pl" cx="134" cy="188" r="9" fill="#2a2a2a" stroke="#666"/><circle class="pl" cx="134" cy="212" r="7" fill="#2a2a2a" stroke="#666"/>' +
      '<rect x="252" y="170" width="28" height="56" fill="#141414"/><circle class="pl" cx="266" cy="188" r="9" fill="#2a2a2a" stroke="#666"/><circle class="pl" cx="266" cy="212" r="7" fill="#2a2a2a" stroke="#666"/>' +
      crowd +
      tag("EDGEMERE", 130, 250, 26, GREEN, -3),
      sky("s3", "#120f2a", "#40285a"));
  }

  /* 4. The Cross Bay Bridge at night: the long low bridge over Jamaica Bay, lamp posts, headlights and taillights streaking, the moon on the water */
  function bridge() {
    let posts = "";
    for (let x = 10; x < 400; x += 50) posts += '<rect x="' + x + '" y="112" width="3" height="28" fill="#8d96a3"/><circle class="flk" cx="' + (x + 1.5) + '" cy="110" r="4" fill="#fff0b0"/>';
    let piers = "";
    for (let x = 30; x < 400; x += 60) piers += '<rect x="' + x + '" y="156" width="14" height="36" fill="#6d727a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' + stars(18) +
      '<circle cx="320" cy="56" r="18" fill="#f4f1e0"/>' +
      '<path d="M0 118h40v-10h20v10h60v-6h30v6h250v20H0z" fill="#1b2235" opacity=".8"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#14263d"/>' +
      '<g transform="translate(0,200)"><g class="wv"><path d="M300 0h44M290 10h60M306 20h30" stroke="#f4f1e0" stroke-width="2" opacity=".5"/></g></g>' +
      piers +
      /* deck */
      '<rect x="0" y="140" width="400" height="16" fill="#9aa1ab"/><rect x="0" y="136" width="400" height="5" fill="#c5cbd2"/>' + posts +
      '<g class="car"><rect x="0" y="142" width="34" height="8" rx="3" fill="#d6dde6"/><rect x="-26" y="145" width="26" height="2" fill="#ff4d4d" opacity=".7"/></g>' +
      '<g class="car car2"><rect x="0" y="142" width="30" height="8" rx="3" fill="' + GREEN + '"/><rect x="-24" y="145" width="24" height="2" fill="#ff4d4d" opacity=".7"/></g>' +
      '<g class="carL"><rect x="0" y="148" width="34" height="8" rx="3" fill="#2b2f36"/><rect x="34" y="151" width="30" height="2" fill="#fff6c2" opacity=".8"/></g>' +
      '<g class="carL carL2"><rect x="0" y="148" width="30" height="8" rx="3" fill="' + GOLD + '"/><rect x="30" y="151" width="26" height="2" fill="#fff6c2" opacity=".8"/></g>' +
      tag("HOW TO GET RICH", 60, 244, 26, GOLD, -3),
      sky("s4", "#060a18", "#24345a"));
  }

  /* 5. Beach Channel Dr & Beach 51 St: green street signs, the wall tagged CHINX, Jamaica Bay behind with a jet coming down to JFK */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(10) +
      '<rect x="0" y="100" width="400" height="36" fill="#2a4a63"/>' +
      '<path d="M0 104q30-8 60 0t60 0M200 106q30-6 60 0" stroke="#4f7f5a" stroke-width="4" fill="none"/>' +
      '<rect x="230" y="78" width="4" height="24" fill="#dfe5ec"/><path d="M224 78h16l-3-6h-10z" fill="#3aa486"/><circle class="bl" cx="232" cy="70" r="2" fill="#ff5a5a"/>' +
      '<g transform="translate(0,30)">' + jet("ld") + '</g>' +
      /* wall */
      '<rect x="0" y="134" width="400" height="92" fill="#2e3b33"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#26322b" stroke-width="1"/>'; return b; })() +
      tag("CHINX", 22, 200, 50, GREEN, -6) + tag("ROCKAWAY RIOT", 150, 216, 18, CREAM, -3) + tag("GO GET IT", 200, 168, 22, GOLD, -5) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="238" width="40" height="13" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="30" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="282" y="66" width="116" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="340" y="82" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Beach Channel Dr</text>' +
      '<rect x="290" y="92" width="108" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="344" y="108" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Beach 51 St</text>' +
      '<circle class="flk" cx="358" cy="62" r="4" fill="#fff6c2"/>',
      sky("s5", "#0a1420", "#284a5c"));
  }

  window.SCENES = { station: station, jfk: jfk, block: block, bridge: bridge, corner: corner };
})();
