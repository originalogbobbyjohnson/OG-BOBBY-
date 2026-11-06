/* Nine game (NYC map, the Bronx: placed at W 231 St and Broadway, Kingsbridge, under the 1 el).
   Nine's exact Bronx block isn't documented, so the rooms come from his own records: the 1 pulling into 231 St up on the el,
   a park jam after dark in Van Cortlandt Park ("hit the park after dark... homemade mics and wheels of steel, amp plugged in the street light"),
   cruising Broadway under the el in the Jeep with a cassette in the deck, the Wave Hill pergola over the Hudson with a black cat on the wall
   (Nine Livez), and the corner of W 231 St and Broadway with the el behind. 400 x 260 SVGs. Classes prefixed n9-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes n9car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.n9-car{animation:n9car 7s linear infinite}.n9-car2{animation-delay:-3.5s}' +
    '@keyframes n9blink{0%,100%{opacity:.25}50%{opacity:1}}.n9-bl{animation:n9blink 1.6s ease-in-out infinite}.n9-bl2{animation-delay:.5s}.n9-bl3{animation-delay:1s}' +
    '@keyframes n9flick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.n9-flk{animation:n9flick 2.4s infinite}' +
    '@keyframes n9el{from{transform:translateX(430px)}to{transform:translateX(-380px)}}.n9-el{animation:n9el 6s linear infinite}' +
    '@keyframes n9spin{to{transform:rotate(360deg)}}.n9-rec{transform-box:fill-box;transform-origin:50% 50%;animation:n9spin 1.2s linear infinite}' +
    '@keyframes n9bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.n9-bob{animation:n9bob .5s ease-in-out infinite}.n9-bob2{animation-delay:.25s}.n9-bob3{animation-delay:.12s}' +
    '@keyframes n9cone{0%,100%{opacity:.55}50%{opacity:.85}}.n9-cone{animation:n9cone 1.8s ease-in-out infinite}' +
    '@keyframes n9note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-40px);opacity:0}}.n9-note{animation:n9note 2.2s linear infinite}.n9-note2{animation-delay:-.7s}.n9-note3{animation-delay:-1.4s}' +
    '@keyframes n9cloud{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.n9-cloud{animation:n9cloud 26s linear infinite}.n9-cloud2{animation-delay:-13s}' +
    '@keyframes n9tail{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(18deg)}}.n9-tail{transform-box:fill-box;transform-origin:0% 100%;animation:n9tail 1.6s ease-in-out infinite}' +
    '@keyframes n9boat{0%,100%{transform:translateX(0)}50%{transform:translateX(26px)}}.n9-boat{animation:n9boat 9s ease-in-out infinite}' +
    '@keyframes n9drip{0%{transform:scaleY(0)}60%,100%{transform:scaleY(1)}}.n9-drip{transform-box:fill-box;transform-origin:50% 0%;animation:n9drip 3s ease-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97 + 13) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffd23f", RED = "#ee352e", CREAM = "#f4ead8", GREEN = "#7ac74f";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  /* el girders: the steel 1 el over Broadway, painted green */
  const elDeck = (y, col) => {
    let g = '<rect x="0" y="' + y + '" width="400" height="14" fill="' + col + '"/><rect x="0" y="' + (y + 14) + '" width="400" height="4" fill="#1d2b22"/>';
    for (let x = 0; x < 400; x += 16) g += '<path d="M' + x + ' ' + y + 'l8 14l8 -14" stroke="#1d2b22" stroke-width="1.5" fill="none"/>';
    return g;
  };

  /* 1. 231 St (1), up on the el over Broadway: the open platform under the canopy, black sign with the red 1, the 1 train sliding in, Kingsbridge rooftops below */
  function st231() {
    let roofs = "";
    [[0, 150, 60], [64, 140, 50], [118, 156, 70], [192, 136, 56], [252, 148, 64], [320, 140, 80]].forEach((b, i) => {
      roofs += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (200 - b[1]) + '" fill="' + (i % 2 ? "#5b3b2e" : "#6e4a37") + '"/>';
      for (let yy = b[1] + 8; yy < 190; yy += 12) for (let xx = b[0] + 6; xx < b[0] + b[2] - 8; xx += 12) roofs += '<rect class="n9-bl n9-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="6" height="7" fill="#ffd98a" opacity=".7"/>';
    });
    let win = "";
    for (let x = 28; x < 290; x += 34) win += '<rect x="' + x + '" y="112" width="22" height="18" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#n9s1)"/>' + stars(10) + roofs +
      /* canopy */
      '<path d="M0 30h400v14H0z" fill="#2f5d45"/><path d="M0 44h400" stroke="#1d3b2b" stroke-width="3"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + (x - 3) + '" y="44" width="6" height="128" fill="#2f5d45"/>').join("") +
      [80, 180, 280].map((x, i) => '<rect class="n9-flk" style="animation-delay:-' + i * 0.7 + 's" x="' + (x - 22) + '" y="46" width="44" height="5" rx="2" fill="#fff8d6"/>').join("") +
      /* sign */
      '<rect x="96" y="60" width="208" height="30" rx="3" fill="#111"/><rect x="96" y="60" width="208" height="3" fill="#fff"/>' +
      '<text x="110" y="81" ' + font + ' font-size="15" fill="#fff">231 St</text>' + bullet(282, 75, "1", RED) +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="8" y="100" width="300" height="60" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="108" width="14" height="24" rx="2" fill="#cfe2f5"/>' + bullet(296, 146, "1", RED) +
        '<rect x="8" y="136" width="276" height="4" fill="' + RED + '"/><circle cx="20" cy="150" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge + floor */
      '<rect x="0" y="172" width="400" height="8" fill="#eab308"/><rect x="0" y="180" width="400" height="80" fill="#6a6660"/>' +
      '<rect x="0" y="180" width="400" height="3" fill="#3b3935"/>' +
      /* railing with Broadway below */
      '<path d="M0 214h400" stroke="#2f5d45" stroke-width="3"/>' + (() => { let r = ""; for (let x = 6; x < 400; x += 14) r += '<rect x="' + x + '" y="214" width="2" height="26" fill="#2f5d45"/>'; return r; })() +
      person(340, 186, "#1b1b1b") + person(362, 190, "#2a2a2a") +
      txt("UPTOWN &amp; THE BRONX", 200, 252, 10, CREAM, 'letter-spacing="3"'),
      sky("n9s1", "#1a1440", "#d9733b"));
  }

  /* 2. Van Cortlandt Park after dark: the old fieldstone Van Cortlandt House behind, a park lamppost with the amp plugged in,
        turntables on a folding table, crowd bobbing. Straight from Whutcha Want: "amp plugged in the street light" */
  function park() {
    let crowd = "";
    for (let i = 0; i < 9; i++) crowd += person(20 + i * 22 + (i % 2) * 4, 188 + (i % 3) * 4, i % 2 ? "#141414" : "#222", "n9-bob n9-bob" + (i % 3 + 1));
    return svg(
      '<rect width="400" height="260" fill="url(#n9s2)"/>' + stars(24) +
      /* trees */
      '<path d="M0 140q30-60 70-20q30-50 70 0q20-40 60 10v20H0z" fill="#0f2416"/><path d="M220 140q40-70 90-20q30-40 90 0v20H220z" fill="#0f2416"/>' +
      /* Van Cortlandt House: grey fieldstone Georgian, brick arches over the windows, white trim, hip roof */
      '<rect x="150" y="96" width="120" height="58" fill="#7d7a72"/>' +
      (() => { let s = ""; for (let y = 100; y < 152; y += 7) for (let x = 152 + (y % 2) * 5; x < 266; x += 11) s += '<rect x="' + x + '" y="' + y + '" width="9" height="5" rx="1.5" fill="#8e8a80"/>'; return s; })() +
      '<path d="M144 96l14-18h104l14 18z" fill="#3b3f46"/><rect x="200" y="70" width="8" height="12" fill="#5a4a40"/>' +
      [160, 186, 224, 250].map(x => '<path d="M' + x + ' 112a6 6 0 0 1 12 0" fill="#9c3d2e"/><rect x="' + x + '" y="112" width="12" height="16" fill="#ffe6a8" opacity=".8"/><rect x="' + (x - 1) + '" y="128" width="14" height="2" fill="#eee"/>').join("") +
      '<rect x="205" y="134" width="12" height="20" fill="#3a2a22"/><rect x="203" y="132" width="16" height="2" fill="#eee"/>' +
      txt("VAN CORTLANDT PARK", 210, 64, 9, CREAM, 'letter-spacing="3" opacity=".85"') +
      /* grass */
      '<rect x="0" y="152" width="400" height="108" fill="#1c3b1f"/>' +
      /* lamppost with the light cone + extension cord */
      '<path class="n9-cone" d="M338 70l-50 150h100z" fill="#fff3b0" opacity=".6"/>' +
      '<rect x="335" y="70" width="6" height="160" fill="#2e4a36"/><path d="M326 66h24l-4 8h-16z" fill="#2e4a36"/><circle cx="338" cy="74" r="4" fill="#fff6c2"/>' +
      '<path d="M338 150q-30 30 -80 46q-30 10 -46 28" stroke="#ff9f1c" stroke-width="2" fill="none"/>' +
      /* folding table, turntables, mic */
      '<rect x="196" y="196" width="104" height="8" fill="#9aa0a6"/><path d="M204 204l-6 30M292 204l6 30" stroke="#9aa0a6" stroke-width="3"/>' +
      '<rect x="202" y="182" width="42" height="14" rx="2" fill="#2b2b30"/><rect x="252" y="182" width="42" height="14" rx="2" fill="#2b2b30"/>' +
      '<ellipse cx="223" cy="187" rx="16" ry="4" fill="#111"/><ellipse class="n9-flk" cx="223" cy="187" rx="5" ry="1.6" fill="' + RED + '"/>' +
      '<ellipse cx="273" cy="187" rx="16" ry="4" fill="#111"/><ellipse class="n9-flk" style="animation-delay:-1.2s" cx="273" cy="187" rx="5" ry="1.6" fill="' + GOLD + '"/>' +
      '<path class="n9-bob" d="M240 182l-10 4M290 182l-10 4" stroke="#ddd" stroke-width="2" stroke-linecap="round"/>' +
      /* speaker stack */
      '<rect x="306" y="176" width="40" height="60" rx="3" fill="#18181b"/><circle cx="326" cy="194" r="9" fill="#333"/><circle cx="326" cy="220" r="11" fill="#333"/>' +
      '<circle class="n9-bob" cx="326" cy="220" r="5" fill="#555"/>' +
      '<text class="n9-note" x="350" y="176" font-size="16" fill="' + GOLD + '">&#9834;</text><text class="n9-note n9-note2" x="360" y="186" font-size="14" fill="' + GOLD + '">&#9835;</text><text class="n9-note n9-note3" x="300" y="170" font-size="14" fill="' + GOLD + '">&#9834;</text>' +
      crowd + tag("PARK JAM", 18, 246, 22, GOLD, -4),
      sky("n9s2", "#05060f", "#1e2b4a"));
  }

  /* 3. Broadway under the 1 el: the Jeep cruising with the deck going, the train rumbling overhead, storefront light under the steel */
  function broadway() {
    let shops = "";
    [[0, 70, "#7a3b2e"], [74, 60, "#4a5560"], [138, 80, "#6b4a2e"], [222, 66, "#5d3a4a"], [292, 108, "#3d5248"]].forEach((s, i) => {
      shops += '<rect x="' + s[0] + '" y="70" width="' + s[1] + '" height="120" fill="' + s[2] + '"/>';
      for (let y = 80; y < 140; y += 16) for (let x = s[0] + 6; x < s[0] + s[1] - 10; x += 14) shops += '<rect class="n9-bl n9-bl' + ((x + y + i) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="8" height="9" fill="#ffd98a" opacity=".7"/>';
      shops += '<rect x="' + (s[0] + 4) + '" y="152" width="' + (s[1] - 8) + '" height="30" fill="#ffe9a8" opacity=".55"/>' +
        '<rect x="' + (s[0] + 2) + '" y="144" width="' + (s[1] - 4) + '" height="8" fill="' + ["#c0392b", "#1f6f8b", "#e67e22", "#8e44ad", "#27ae60"][i] + '"/>';
    });
    let el = elDeck(26, "#3c6b4d");
    [40, 140, 240, 340].forEach(x => { el += '<rect x="' + (x - 4) + '" y="44" width="8" height="150" fill="#3c6b4d"/><path d="M' + (x - 16) + ' 44l12 14M' + (x + 16) + ' 44l-12 14" stroke="#3c6b4d" stroke-width="4"/>'; });
    const train = '<g class="n9-el"><rect x="0" y="6" width="330" height="22" rx="4" fill="#c9ced6" stroke="#6b7280"/>' +
      (() => { let w = ""; for (let x = 10; x < 320; x += 26) w += '<rect x="' + x + '" y="10" width="16" height="9" fill="#cfe2f5"/>'; return w; })() + '<rect x="0" y="22" width="330" height="3" fill="' + RED + '"/></g>';
    const jeep = '<g class="n9-car"><rect x="0" y="206" width="78" height="26" rx="4" fill="#1f3d2b"/><rect x="10" y="194" width="50" height="16" rx="3" fill="#1f3d2b"/>' +
      '<rect x="14" y="197" width="18" height="10" fill="#9fc2d9"/><rect x="36" y="197" width="18" height="10" fill="#9fc2d9"/>' +
      '<rect x="76" y="212" width="4" height="8" fill="#ffe08a"/><circle cx="18" cy="234" r="8" fill="#111"/><circle cx="60" cy="234" r="8" fill="#111"/>' +
      '<circle cx="18" cy="234" r="3" fill="#888"/><circle cx="60" cy="234" r="3" fill="#888"/>' +
      '<text class="n9-note" x="40" y="194" font-size="14" fill="' + GOLD + '">&#9834;</text><text class="n9-note n9-note2" x="52" y="194" font-size="12" fill="' + GOLD + '">&#9835;</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#n9s3)"/>' + stars(8) + shops +
      train + el +
      '<rect x="0" y="190" width="400" height="70" fill="#2f3033"/><rect x="0" y="188" width="400" height="4" fill="#8a8c90"/>' +
      (() => { let d = ""; for (let x = 0; x < 400; x += 40) d += '<rect x="' + x + '" y="240" width="22" height="3" fill="#e9d36a"/>'; return d; })() +
      /* cassette sign in a shop window */
      '<g transform="translate(150 118)"><rect width="40" height="26" rx="3" fill="#222" stroke="' + GOLD + '" stroke-width="2"/><circle cx="12" cy="12" r="5" fill="none" stroke="' + GOLD + '" stroke-width="2"/><circle cx="28" cy="12" r="5" fill="none" stroke="' + GOLD + '" stroke-width="2"/><rect x="8" y="19" width="24" height="4" fill="' + GOLD + '"/></g>' +
      jeep + txt("BROADWAY", 330, 252, 11, CREAM, 'letter-spacing="3"'),
      sky("n9s3", "#0d1024", "#3a2b52"));
  }

  /* 4. Wave Hill over the Hudson: the stone pergola at sunset, the Palisades cliffs across the river, clouds drifting, a black cat (nine lives) on the wall */
  function wavehill() {
    let posts = "";
    for (let x = 30; x <= 250; x += 44) posts += '<rect x="' + x + '" y="92" width="12" height="92" fill="#cfc6b4"/><rect x="' + (x - 3) + '" y="88" width="18" height="6" fill="#b9af9c"/>';
    let beams = "";
    for (let x = 24; x <= 270; x += 12) beams += '<rect x="' + x + '" y="80" width="5" height="10" fill="#8a6a4a"/>';
    const cloud = (x, y, s, cls) => '<g class="n9-cloud ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><ellipse cx="0" cy="0" rx="26" ry="10" fill="#ffe2d0" opacity=".9"/><ellipse cx="16" cy="-6" rx="16" ry="10" fill="#ffe2d0" opacity=".9"/><ellipse cx="-14" cy="-4" rx="12" ry="8" fill="#ffe2d0" opacity=".9"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#n9s4)"/>' +
      '<circle cx="320" cy="120" r="26" fill="#ffd27a" opacity=".95"/>' + cloud(-40, 44, 1, "") + cloud(-40, 70, .7, "n9-cloud2") +
      /* Palisades: dark basalt cliffs across the river */
      '<path d="M0 128l40-10l60 4l70-8l80 6l70-10l80 6v34H0z" fill="#3b3348"/>' +
      (() => { let c = ""; for (let x = 8; x < 400; x += 12) c += '<path d="M' + x + ' 124v26" stroke="#2c2638" stroke-width="2"/>'; return c; })() +
      /* the Hudson */
      '<rect x="0" y="150" width="400" height="30" fill="#e79a6a"/><path d="M0 158h400M0 168h400" stroke="#f5c09a" stroke-width="1.5" opacity=".7"/>' +
      '<g class="n9-boat"><path d="M260 166h40l-6 6h-28z" fill="#fff"/><path d="M280 140v26l14-4z" fill="#fff"/></g>' +
      /* lawn + stone wall */
      '<rect x="0" y="180" width="400" height="80" fill="#3f6b38"/>' +
      '<rect x="0" y="184" width="300" height="22" fill="#a89f8a"/>' +
      (() => { let s = ""; for (let y = 186; y < 206; y += 7) for (let x = (y % 2) * 6; x < 300; x += 14) s += '<rect x="' + x + '" y="' + y + '" width="12" height="5" rx="1.5" fill="#bdb49e"/>'; return s; })() +
      posts + beams + '<rect x="20" y="78" width="258" height="6" fill="#7a5a3c"/>' +
      /* wisteria on the pergola */
      (() => { let f = ""; for (let x = 30; x < 270; x += 18) f += '<ellipse cx="' + x + '" cy="' + (90 + (x % 3) * 3) + '" rx="5" ry="9" fill="#9b7fd1" opacity=".85"/>'; return f; })() +
      /* black cat on the wall, tail swishing */
      '<g transform="translate(320 160)"><ellipse cx="0" cy="18" rx="14" ry="10" fill="#111"/><circle cx="12" cy="6" r="8" fill="#111"/>' +
      '<path d="M7 0l2-8l4 6zM15 0l3-8l3 7z" fill="#111"/><circle cx="14" cy="5" r="1.6" fill="' + GOLD + '"/>' +
      '<path class="n9-tail" d="M-12 22q-14-4 -10 -22" stroke="#111" stroke-width="4" fill="none" stroke-linecap="round"/></g>' +
      '<rect x="296" y="184" width="104" height="22" fill="#a89f8a"/>' +
      txt("WAVE HILL", 200, 244, 12, CREAM, 'letter-spacing="4"'),
      sky("n9s4", "#3b2d6b", "#f08a5d"));
  }

  /* 5. W 231 St and Broadway: green street signs, the wall with NINE tagged, the 1 el and the 231 St station behind */
  function corner() {
    let el = elDeck(40, "#3c6b4d");
    [60, 200, 340].forEach(x => { el += '<rect x="' + (x - 4) + '" y="58" width="8" height="74" fill="#3c6b4d"/>'; });
    const train = '<g class="n9-el" style="animation-duration:8s"><rect x="0" y="20" width="330" height="22" rx="4" fill="#c9ced6" stroke="#6b7280"/>' +
      (() => { let w = ""; for (let x = 10; x < 320; x += 26) w += '<rect x="' + x + '" y="24" width="16" height="9" fill="#cfe2f5"/>'; return w; })() + '<rect x="0" y="36" width="330" height="3" fill="' + RED + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#n9s5)"/>' + stars(14).replace(/cy="(1[0-9]|2[0-9]|3[0-9])(\.[0-9]+)?"/g, 'cy="8"') +
      train + el +
      /* station house on the el */
      '<rect x="150" y="10" width="100" height="30" fill="#5a6b5e"/><path d="M146 10h108l-8 -8h-92z" fill="#3c6b4d"/>' +
      '<rect x="160" y="16" width="80" height="12" fill="#111"/><text x="186" y="26" ' + font + ' font-size="9" fill="#fff">231 St</text>' + bullet(228, 22, "1", RED).replace(/r="11"/, 'r="6"').replace(/font-size="15"/, 'font-size="8"').replace(/y="27.5"/, 'y="25"') +
      /* the wall */
      '<rect x="0" y="132" width="400" height="94" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 142; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; for (let x = 0; x < 400; x += 24) b += '<path d="M' + x + ' 132v94" stroke="#36383e" stroke-width="1"/>'; return b; })() +
      tag("NINE", 24, 200, 62, GOLD, -6) +
      '<rect class="n9-drip" x="52" y="196" width="3" height="14" fill="' + GOLD + '"/><rect class="n9-drip" x="118" y="189" width="3" height="18" fill="' + GOLD + '" style="animation-delay:-1s"/>' +
      tag("WHUTCHA WANT", 186, 214, 20, RED, -4) + tag("DEUCES WILD", 20, 222, 14, CREAM, -3) + tag("NINE DOUBLE M", 196, 168, 15, GREEN, -5) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="n9-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<g class="n9-car n9-car2"><rect x="0" y="240" width="40" height="12" rx="4" fill="#e9c46a"/><circle cx="9" cy="252" r="4" fill="#111"/><circle cx="31" cy="252" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="64" width="5" height="164" fill="#3d4b3f"/>' +
      '<rect x="296" y="68" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("W 231 St", 346, 84, 12, "#fff") +
      '<rect x="296" y="94" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Broadway", 346, 110, 12, "#fff") +
      '<circle class="n9-flk" cx="358" cy="62" r="4" fill="#fff6c2"/>',
      sky("n9s5", "#0a0c1a", "#2c2a44"));
  }

  window.SCENES = { st231: st231, park: park, broadway: broadway, wavehill: wavehill, corner: corner };
})();
