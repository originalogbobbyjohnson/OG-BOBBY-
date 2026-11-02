/* Queensbridge opening scenes for the MC Shan game: the Juice Crew, "The Bridge" (1986). Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 28s linear infinite}.cld2{animation-delay:-14s}' +
    '@keyframes car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}' +
    '.car{animation:car 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes leaf{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-40px,200px) rotate(320deg);opacity:0}}' +
    '.leaf{animation:leaf 6s linear infinite}.lf2{animation-delay:-1.5s}.lf3{animation-delay:-3s}.lf4{animation-delay:-4.5s}' +
    '@keyframes flow{from{stroke-dashoffset:0}to{stroke-dashoffset:-40}}' +
    '.flow{animation:flow 1.6s linear infinite}' +
    '@keyframes flut{0%,100%{transform:translate(0,0)}25%{transform:translate(14px,-10px)}50%{transform:translate(28px,0)}75%{transform:translate(14px,8px)}}' +
    '.flut{animation:flut 4s ease-in-out infinite}.flut2{animation-delay:-2s}' +
    '@keyframes wing{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.2)}}' +
    '.wing{transform-box:fill-box;transform-origin:center;animation:wing .3s linear infinite}' +
    '@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:.25}}' +
    '.blk{animation:blink 1.4s infinite}' +
    '@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}' +
    '.sway{transform-box:fill-box;transform-origin:bottom;animation:sway 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  /* graffiti tag: outlined, slightly tilted */
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark, r) => {
    const k = r || 11;
    return '<circle cx="' + x + '" cy="' + y + '" r="' + k + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + k * .5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (k * 1.36) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const sign = (x, y, w, txt) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  const tree = (x, y, s, c) =>
    '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-3" y="-6" width="6" height="40" fill="#4a3424"/>' +
    '<circle cx="0" cy="-20" r="20" fill="' + c + '"/><circle cx="-14" cy="-8" r="14" fill="' + c + '"/><circle cx="14" cy="-8" r="14" fill="' + c + '"/></g>';
  const css2 = '<style>' +
    '@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}' +
    '.spin{transform-box:fill-box;transform-origin:center;animation:spin 2.4s linear infinite}' +
    '@keyframes beam{0%,100%{transform:rotate(-24deg);opacity:.15}50%{transform:rotate(24deg);opacity:.55}}' +
    '.beam{transform-origin:200px 74px;animation:beam 5s ease-in-out infinite}' +
    '@keyframes boat{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.boat{animation:boat 16s linear infinite}' +
    '@keyframes vu{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}' +
    '.vu{transform-box:fill-box;transform-origin:bottom;animation:vu .9s ease-in-out infinite}.vu2{animation-delay:-.3s}.vu3{animation-delay:-.6s}.vu4{animation-delay:-.15s}' +
    '@keyframes pad{0%,24%{opacity:1}25%,100%{opacity:.25}}' +
    '.pad{animation:pad 1.6s steps(1) infinite}.p2{animation-delay:-.4s}.p3{animation-delay:-.8s}.p4{animation-delay:-1.2s}' +
    '@keyframes ripple{0%{transform:scale(.3);opacity:.9}100%{transform:scale(1.6);opacity:0}}' +
    '.rip{transform-box:fill-box;transform-origin:center;animation:ripple 2.4s ease-out infinite}.rip2{animation-delay:-1.2s}' +
    '</style>';
  const sv = (inner, defs) => svg(css2 + inner, defs);
  const BLUE = "#9fe3ff", ORANGE = "#ff9a2e", GOLD = "#f2c14e", FORANGE = "#ff6319";


  /* 2. The Roosevelt Island Lighthouse (1872) at the island's north tip, seen across the East River channel from the Queens shore: gray stone octagon, lantern, sweeping beam */
  function lighthouse() {
    let stones = "";
    for (let y = 98; y < 190; y += 9) stones += '<path d="M' + (186 - (y - 98) * .08) + ' ' + y + 'H' + (214 + (y - 98) * .08) + '" stroke="#6e6a64" stroke-width="1"/>';
    return sv(
      '<rect width="400" height="260" fill="url(#l1)"/>' + stars(22) +
      '<path class="beam" d="M200 74L420 40L420 108z" fill="#fff6c2"/>' +
      /* Manhattan far behind */
      '<path d="M0 170V150h20v-14h14v20h18v-30h12v30h20v-16h16v16h24v20zM260 170V140h18v-12h12v12h22v-24h14v24h20v14h18v-10h36v26z" fill="#2a3352"/>' +
      /* island tip: rocks and lawn */
      '<path d="M120 196Q200 176 290 196z" fill="#3e5a34"/><path d="M110 198q20 -10 40 0q20 -8 36 0q24 -10 44 0q20 -8 40 0q20 -10 40 0z" fill="#58554f"/>' +
      /* tower: tapered octagon of gray gneiss */
      '<path d="M184 98L216 98L222 192L178 192z" fill="#9a958c"/><path d="M200 98L200 192" stroke="#85807a" stroke-width="1"/>' + stones +
      '<rect x="194" y="120" width="8" height="12" rx="4" fill="#2a2a30"/><rect x="196" y="152" width="8" height="12" rx="4" fill="#2a2a30"/>' +
      '<rect x="193" y="176" width="14" height="16" rx="6" fill="#4a3424"/>' +
      /* gallery + lantern + dome */
      '<rect x="178" y="92" width="44" height="6" fill="#55524c"/><rect x="186" y="66" width="28" height="26" fill="#2a2a30"/>' +
      '<rect x="190" y="70" width="20" height="18" fill="#ffe9a8" class="flk"/><path d="M186 66q14 -18 28 0z" fill="#3a3a40"/><rect x="198" y="44" width="4" height="8" fill="#3a3a40"/>' +
      /* river */
      '<rect x="0" y="196" width="400" height="64" fill="#1c3250"/>' +
      (function () { let w = ""; for (let y = 206; y < 260; y += 12) w += '<path d="M0 ' + y + 'q25 -4 50 0t50 0t50 0t50 0t50 0t50 0t50 0t50 0" stroke="#3a5a80" stroke-width="1.5" fill="none" stroke-dasharray="12 8" class="flow"/>'; return w; })() +
      '<path d="M200 200L190 260H210z" fill="#ffe9a8" opacity=".18"/>' +
      '<g class="boat"><path d="M0 222h54l-8 10h-40z" fill="#e8e0cc"/><rect x="14" y="214" width="22" height="8" fill="#c23a2e"/><circle cx="44" cy="226" r="1.6" fill="#ffe9a8"/></g>' +
      '<text x="200" y="252" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#9fe3ff" letter-spacing="2">ROOSEVELT ISLAND LIGHTHOUSE · 1872</text>',
      sky("l1", "#0e1630", "#3b4a7a"));
  }

  /* 3. The Noguchi Museum garden on Vernon Blvd: the gray brick-and-concrete building, the old tree, basalt and granite stones, the water stone brimming over */
  function noguchi() {
    let brick = "";
    for (let y = 70; y < 196; y += 8) brick += '<path d="M40 ' + y + 'H360" stroke="#7d7a74" stroke-width="1"/>';
    return sv(
      '<rect width="400" height="260" fill="url(#n1)"/>' +
      '<g class="cld"><ellipse cx="0" cy="30" rx="44" ry="6" fill="#fff" opacity=".5"/></g>' +
      /* building */
      '<rect x="40" y="60" width="320" height="136" fill="#9c9890"/>' + brick +
      '<rect x="40" y="56" width="320" height="8" fill="#6e6a64"/>' +
      '<rect x="210" y="96" width="140" height="100" fill="#2f3438"/>' +
      (function () { let g = ""; for (let x = 214; x < 346; x += 22) g += '<rect x="' + x + '" y="100" width="18" height="92" fill="#8fb0b8" opacity=".55"/>'; return g; })() +
      /* the tree */
      '<path d="M100 196q4 -50 -8 -84q20 20 18 -16q8 30 22 10q-6 40 -12 90z" fill="#4a3424"/>' +
      '<circle cx="100" cy="86" r="34" fill="#4f7a34"/><circle cx="72" cy="104" r="22" fill="#5a8a3a"/><circle cx="130" cy="100" r="24" fill="#456e2e"/>' +
      /* gravel ground */
      '<rect x="0" y="196" width="400" height="64" fill="#cfc8b8"/>' +
      (function () { let g = ""; for (let i = 0; i < 60; i++) g += '<circle cx="' + ((i * 67) % 400) + '" cy="' + (200 + (i * 29) % 56) + '" r="1" fill="#a8a090"/>'; return g; })() +
      /* stones: a tall dark basalt, a rough granite, the round water stone */
      '<path d="M170 210L176 128L196 122L200 212z" fill="#2c2c30"/><path d="M178 132l16 -4" stroke="#55555c" stroke-width="2"/>' +
      '<path d="M300 214q-6 -30 12 -40q22 -6 30 14q8 22 -4 28z" fill="#b2a48e"/>' +
      '<ellipse cx="250" cy="222" rx="30" ry="14" fill="#3a3a40"/><ellipse cx="250" cy="214" rx="28" ry="9" fill="#4a4a52"/>' +
      '<ellipse cx="250" cy="213" rx="22" ry="6" fill="#6aa8c8"/>' +
      '<ellipse class="rip" cx="250" cy="213" rx="8" ry="2.4" fill="none" stroke="#d8f2fa" stroke-width="1.2"/><ellipse class="rip rip2" cx="250" cy="213" rx="8" ry="2.4" fill="none" stroke="#d8f2fa" stroke-width="1.2"/>' +
      '<path d="M224 216q-2 8 2 14M276 216q2 8 -2 14" stroke="#9fd0e6" stroke-width="2" fill="none" stroke-dasharray="4 4" class="flow"/>' +
      '<text x="200" y="252" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#3a3a40" letter-spacing="2">NOGUCHI MUSEUM GARDEN · VERNON BLVD</text>',
      sky("n1", "#8ec6e8", "#e6eef0"));
  }

  /* 4. Marley Marl's House of Hits, 1986, in a Queensbridge apartment: reel-to-reel turning, the drum machine pads lighting up, VU meters, "THE BRIDGE" on the tape box */
  function studio() {
    let bricks = "";
    for (let y = 64; y < 96; y += 8) for (let x = (y / 8) % 2 ? 248 : 256; x < 356; x += 16) bricks += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#9a4a34"/>';
    const reel = (cx, cy) => '<g class="spin"><circle cx="' + cx + '" cy="' + cy + '" r="24" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="15" fill="#4a3a2a"/><circle cx="' + cx + '" cy="' + cy + '" r="4" fill="#e8e0cc"/>' +
      '<path d="M' + cx + ' ' + (cy - 22) + 'v8M' + (cx - 19) + ' ' + (cy + 11) + 'l7 -4M' + (cx + 19) + ' ' + (cy + 11) + 'l-7 -4" stroke="#6b7280" stroke-width="3"/></g>';
    return sv(
      '<rect width="400" height="260" fill="#2a1e2e"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#3b2c40"/>' +
      /* window: QB brick and a night sky */
      '<rect x="244" y="20" width="124" height="80" fill="#0e1630" stroke="#d8d0bc" stroke-width="4"/>' + bricks +
      stars(0) + '<circle cx="270" cy="34" r="1.4" fill="#fff"/><circle cx="340" cy="42" r="1.2" fill="#fff"/><circle cx="320" cy="30" r="6" fill="#f4eccc"/>' + '<path d="M306 20v80M244 60h124" stroke="#d8d0bc" stroke-width="3"/>' +
      /* reel-to-reel deck */
      '<rect x="24" y="24" width="150" height="112" rx="4" fill="#1d1d22" stroke="#6b7280" stroke-width="2"/>' +
      reel(64, 64) + reel(134, 64) + '<path d="M64 88L99 108L134 88" stroke="#4a3a2a" stroke-width="2" fill="none"/>' +
      '<rect x="88" y="104" width="22" height="10" fill="#6b7280"/>' +
      '<g transform="translate(34 118)"><rect class="vu" x="0" y="0" width="5" height="12" fill="#6be36b"/><rect class="vu vu2" x="8" y="0" width="5" height="12" fill="#6be36b"/><rect class="vu vu3" x="110" y="0" width="5" height="12" fill="#f2c14e"/><rect class="vu vu4" x="118" y="0" width="5" height="12" fill="#f2c14e"/></g>' +
      /* desk */
      '<rect x="0" y="150" width="400" height="110" fill="#5a3a26"/><rect x="0" y="150" width="400" height="6" fill="#7a5236"/>' +
      /* drum machine with 8 pads */
      '<rect x="30" y="168" width="190" height="66" rx="4" fill="#cfc8b8" stroke="#6b6458" stroke-width="2"/><rect x="40" y="176" width="70" height="16" fill="#1d2a1d"/>' +
      '<text x="44" y="188" font-family="Courier New, monospace" font-size="10" fill="#6be36b">BPM 98</text>' +
      (function () { let p = "", c = ["", " p2", " p3", " p4"]; for (let i = 0; i < 8; i++) p += '<rect class="pad' + c[i % 4] + '" x="' + (44 + (i % 4) * 42) + '" y="' + (198 + Math.floor(i / 4) * 18) + '" width="34" height="14" rx="2" fill="' + (i % 2 ? ORANGE : BLUE) + '"/>'; return p; })() +
      /* tape box */
      '<g transform="rotate(-6 300 200)"><rect x="244" y="172" width="112" height="56" rx="3" fill="#efe6d2" stroke="#8a8070" stroke-width="2"/>' +
      '<rect x="244" y="172" width="112" height="12" fill="' + ORANGE + '"/><text x="300" y="208" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="17" fill="#1d1d22">THE BRIDGE</text>' +
      '<text x="300" y="222" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="8" fill="#5a5048">MASTER · 1986</text></g>' +
      '<text x="200" y="252" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#efe6d2" letter-spacing="2">THE HOUSE OF HITS · QUEENSBRIDGE</text>');
  }

  /* 5. 21st St and 40th Av: street signs, the F entrance, the tag wall of the Houses */
  function corner() {
    let bricks = "";
    for (let y = 96; y < 214; y += 10) for (let x = (y / 10) % 2 ? 0 : 12; x < 400; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="8" fill="#8a4230"/>';
    return sv(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(18) +
      /* the Queensboro Bridge, three-quarter view receding toward Manhattan */
      '<g><style>@keyframes lmTw{0%,100%{opacity:1}50%{opacity:.35}}.lmTw0{animation:lmTw 2.6s infinite}.lmTw1{animation:lmTw 2.6s infinite -.9s}.lmTw2{animation:lmTw 2.6s infinite -1.7s}@keyframes lmBk{0%,60%{opacity:1}61%,100%{opacity:.15}}.lmBk{animation:lmBk 1.6s steps(1) infinite}</style><path d="M430 85.7L430 72.2M409.8 84.6L409.8 68.4M430 85.7L409.8 68.4M391.5 83.6L391.5 64.8M409.8 68.4L391.5 83.6M374.6 82.7L374.6 61.6M391.5 83.6L374.6 61.6M359.1 81.9L359.1 58.7M374.6 61.6L359.1 81.9M344.8 81.1L344.8 55.9M359.1 81.9L344.8 55.9M331.6 80.4L331.6 53.4M344.8 55.9L331.6 80.4M319.3 79.8L319.3 51.1M331.6 80.4L319.3 51.1M307.9 79.1L307.9 48.9M319.3 51.1L307.9 79.1M297.3 78.6L297.3 46.9M307.9 79.1L297.3 46.9M287.3 78L287.3 45M297.3 46.9L287.3 78M278 77.5L278 43.2M287.3 78L278 43.2M271.3 77.2L271.3 41.9M278 43.2L271.3 77.2M269.2 77.1L269.2 42.5M271.3 77.2L269.2 42.5M260.9 76.6L260.9 44.9M269.2 42.5L260.9 76.6M253.2 76.2L253.2 47.1M260.9 76.6L253.2 47.1M245.8 75.8L245.8 49.2M253.2 47.1L245.8 75.8M238.9 75.4L238.9 51.2M245.8 75.8L238.9 51.2M232.3 75.1L232.3 53.1M238.9 51.2L232.3 75.1M226.1 74.7L226.1 54.9M232.3 75.1L226.1 54.9M220.1 74.4L220.1 56.6M226.1 54.9L220.1 74.4M214.5 74.1L214.5 58.2M220.1 74.4L214.5 58.2M209.1 73.8L209.1 59.8M214.5 58.2L209.1 73.8M204 73.5L204 61.2M209.1 73.8L204 61.2M199.1 73.3L199.1 62.6M204 61.2L199.1 73.3M194.5 73L194.5 64M199.1 73.3L194.5 64M190 72.8L190 65.2M194.5 64L190 72.8M185.7 72.6L185.7 66.5M190 72.8L185.7 66.5M181.6 72.3L181.6 66.4M185.7 66.5L181.6 72.3M177.7 72.1L177.7 65M181.6 72.3L177.7 65M173.9 71.9L173.9 63.8M177.7 65L173.9 71.9M170.3 71.7L170.3 62.5M173.9 71.9L170.3 62.5M166.8 71.5L166.8 61.4M170.3 62.5L166.8 71.5M163.5 71.4L163.5 60.2M166.8 71.5L163.5 60.2M160.3 71.2L160.3 59.1M163.5 60.2L160.3 71.2M157.2 71L157.2 58.1M160.3 71.2L157.2 58.1M154.2 70.9L154.2 57.1M157.2 58.1L154.2 70.9M151.3 70.7L151.3 56.1M154.2 70.9L151.3 56.1M148.5 70.5L148.5 55.1M151.3 56.1L148.5 70.5M145.8 70.4L145.8 54.2M148.5 70.5L145.8 54.2M143.2 70.3L143.2 53.3M145.8 54.2L143.2 70.3M140.7 70.1L140.7 52.5M143.2 70.3L140.7 52.5M138.2 70L138.2 51.7M140.7 52.5L138.2 70M137.7 70L137.7 51.5M138.2 70L137.7 51.5M135.9 69.9L135.9 52.4M137.7 51.5L135.9 69.9M133.6 69.7L133.6 53.7M135.9 69.9L133.6 53.7M131.4 69.6L131.4 54.9M133.6 53.7L131.4 69.6M129.2 69.5L129.2 56M131.4 69.6L129.2 56M127.2 69.4L127.2 57.2M129.2 56L127.2 69.4M125.1 69.3L125.1 58.3M127.2 69.4L125.1 58.3M123.2 69.2L123.2 59.4M125.1 58.3L123.2 69.2M121.3 69.1L121.3 60.4M123.2 69.2L121.3 60.4M119.4 69L119.4 59.5M121.3 60.4L119.4 69M117.6 68.9L117.6 58.5M119.4 69L117.6 58.5M115.9 68.8L115.9 57.7M117.6 58.5L115.9 68.8M114.2 68.7L114.2 56.8M115.9 68.8L114.2 56.8M112.5 68.6L112.5 56M114.2 56.8L112.5 68.6M110.9 68.5L110.9 55.2M112.5 68.6L110.9 55.2M109.3 68.4L109.3 54.4M110.9 55.2L109.3 68.4M107.8 68.3L107.8 53.6M109.3 68.4L107.8 53.6M106.3 68.3L106.3 54.6M107.8 53.6L106.3 68.3M104.8 68.2L104.8 55.6M106.3 68.3L104.8 55.6M103.4 68.1L103.4 56.6M104.8 55.6L103.4 68.1M102 68L102 57.6M103.4 68.1L102 57.6M100.7 68L100.7 58.5M102 57.6L100.7 68M99.3 67.9L99.3 59.4M100.7 68L99.3 59.4M98.1 67.8L98.1 60.3M99.3 59.4L98.1 67.8M96.8 67.8L96.8 61.2M98.1 67.8L96.8 61.2M95.6 67.7L95.6 62M96.8 61.2L95.6 67.7M94.4 67.6L94.4 62.9M95.6 67.7L94.4 62.9M93.2 67.6L93.2 63.7M94.4 62.9L93.2 67.6M92 67.5L92 64.5M93.2 67.6L92 64.5M90.9 67.4L90.9 64M92 64.5L90.9 67.4M89.8 67.4L89.8 63.2M90.9 67.4L89.8 63.2M88.7 67.3L88.7 62.4M89.8 63.2L88.7 67.3M87.7 67.3L87.7 61.6M88.7 67.3L87.7 61.6M86.7 67.2L86.7 60.9M87.7 61.6L86.7 67.2M85.7 67.2L85.7 60.1M86.7 67.2L85.7 60.1M84.7 67.1L84.7 59.4M85.7 60.1L84.7 67.1M83.7 67.1L83.7 58.7M84.7 67.1L83.7 58.7M82.7 67L82.7 58M83.7 58.7L82.7 67M81.8 66.9L81.8 57.3M82.7 67L81.8 57.3M80.9 66.9L80.9 56.6M81.8 57.3L80.9 66.9M80 66.9L80 55.9M80.9 66.9L80 55.9M79.6 66.8L79.6 55.6M80 55.9L79.6 66.8M79.1 66.8L79.1 56M79.6 66.8L79.1 56M78.3 66.8L78.3 56.8M79.1 56L78.3 66.8M77.4 66.7L77.4 57.6M78.3 66.8L77.4 57.6M76.6 66.7L76.6 58.3M77.4 57.6L76.6 66.7M75.8 66.6L75.8 59.1M76.6 66.7L75.8 59.1M75 66.6L75 59.8M75.8 59.1L75 66.6M74.2 66.5L74.2 60.5M75 66.6L74.2 60.5M73.5 66.5L73.5 61.2M74.2 60.5L73.5 66.5M72.7 66.5L72.7 61.9M73.5 66.5L72.7 61.9M72 66.4L72 62.6M72.7 61.9L72 66.4M71.2 66.4L71.2 63.2M72 66.4L71.2 63.2M70.5 66.3L70.5 63.9M71.2 63.2L70.5 66.3" stroke="#6f7f9f" stroke-width="1.3" fill="none" opacity=".85"/><path d="M430 72.2L409.8 68.4L391.5 64.8L374.6 61.6L359.1 58.7L344.8 55.9L331.6 53.4L319.3 51.1L307.9 48.9L297.3 46.9L287.3 45L278 43.2L271.3 41.9L269.2 42.5L260.9 44.9L253.2 47.1L245.8 49.2L238.9 51.2L232.3 53.1L226.1 54.9L220.1 56.6L214.5 58.2L209.1 59.8L204 61.2L199.1 62.6L194.5 64L190 65.2L185.7 66.5L181.6 66.4L177.7 65L173.9 63.8L170.3 62.5L166.8 61.4L163.5 60.2L160.3 59.1L157.2 58.1L154.2 57.1L151.3 56.1L148.5 55.1L145.8 54.2L143.2 53.3L140.7 52.5L138.2 51.7L137.7 51.5L135.9 52.4L133.6 53.7L131.4 54.9L129.2 56L127.2 57.2L125.1 58.3L123.2 59.4L121.3 60.4L119.4 59.5L117.6 58.5L115.9 57.7L114.2 56.8L112.5 56L110.9 55.2L109.3 54.4L107.8 53.6L106.3 54.6L104.8 55.6L103.4 56.6L102 57.6L100.7 58.5L99.3 59.4L98.1 60.3L96.8 61.2L95.6 62L94.4 62.9L93.2 63.7L92 64.5L90.9 64L89.8 63.2L88.7 62.4L87.7 61.6L86.7 60.9L85.7 60.1L84.7 59.4L83.7 58.7L82.7 58L81.8 57.3L80.9 56.6L80 55.9L79.6 55.6L79.1 56L78.3 56.8L77.4 57.6L76.6 58.3L75.8 59.1L75 59.8L74.2 60.5L73.5 61.2L72.7 61.9L72 62.6L71.2 63.2L70.5 63.9" stroke="#6f7f9f" stroke-width="3.5" fill="none" stroke-linejoin="round"/><path d="M430 80L409.8 79.2L391.5 78.4L374.6 77.7L359.1 77.1L344.8 76.5L331.6 76L319.3 75.5L307.9 75L297.3 74.6L287.3 74.2L278 73.8L271.3 73.5L269.2 73.4L260.9 73.1L253.2 72.8L245.8 72.5L238.9 72.2L232.3 71.9L226.1 71.7L220.1 71.4L214.5 71.2L209.1 71L204 70.8L199.1 70.6L194.5 70.4L190 70.2L185.7 70L181.6 69.8L177.7 69.7L173.9 69.5L170.3 69.4L166.8 69.2L163.5 69.1L160.3 69L157.2 68.8L154.2 68.7L151.3 68.6L148.5 68.5L145.8 68.4L143.2 68.3L140.7 68.2L138.2 68.1L137.7 68L135.9 68L133.6 67.9L131.4 67.8L129.2 67.7L127.2 67.6L125.1 67.5L123.2 67.4L121.3 67.4L119.4 67.3L117.6 67.2L115.9 67.1L114.2 67.1L112.5 67L110.9 66.9L109.3 66.9L107.8 66.8L106.3 66.8L104.8 66.7L103.4 66.6L102 66.6L100.7 66.5L99.3 66.5L98.1 66.4L96.8 66.4L95.6 66.3L94.4 66.3L93.2 66.2L92 66.2L90.9 66.1L89.8 66.1L88.7 66L87.7 66L86.7 66L85.7 65.9L84.7 65.9L83.7 65.8L82.7 65.8L81.8 65.8L80.9 65.7L80 65.7L79.6 65.7L79.1 65.6L78.3 65.6L77.4 65.6L76.6 65.5L75.8 65.5L75 65.5L74.2 65.4L73.5 65.4L72.7 65.4L72 65.4L71.2 65.3L70.5 65.3" stroke="#6f7f9f" stroke-width="3.1" fill="none"/><path d="M430 85.7L409.8 84.6L391.5 83.6L374.6 82.7L359.1 81.9L344.8 81.1L331.6 80.4L319.3 79.8L307.9 79.1L297.3 78.6L287.3 78L278 77.5L271.3 77.2L269.2 77.1L260.9 76.6L253.2 76.2L245.8 75.8L238.9 75.4L232.3 75.1L226.1 74.7L220.1 74.4L214.5 74.1L209.1 73.8L204 73.5L199.1 73.3L194.5 73L190 72.8L185.7 72.6L181.6 72.3L177.7 72.1L173.9 71.9L170.3 71.7L166.8 71.5L163.5 71.4L160.3 71.2L157.2 71L154.2 70.9L151.3 70.7L148.5 70.5L145.8 70.4L143.2 70.3L140.7 70.1L138.2 70L137.7 70L135.9 69.9L133.6 69.7L131.4 69.6L129.2 69.5L127.2 69.4L125.1 69.3L123.2 69.2L121.3 69.1L119.4 69L117.6 68.9L115.9 68.8L114.2 68.7L112.5 68.6L110.9 68.5L109.3 68.4L107.8 68.3L106.3 68.3L104.8 68.2L103.4 68.1L102 68L100.7 68L99.3 67.9L98.1 67.8L96.8 67.8L95.6 67.7L94.4 67.6L93.2 67.6L92 67.5L90.9 67.4L89.8 67.4L88.7 67.3L87.7 67.3L86.7 67.2L85.7 67.2L84.7 67.1L83.7 67.1L82.7 67L81.8 66.9L80.9 66.9L80 66.9L79.6 66.8L79.1 66.8L78.3 66.8L77.4 66.7L76.6 66.7L75.8 66.6L75 66.6L74.2 66.5L73.5 66.5L72.7 66.5L72 66.4L71.2 66.4L70.5 66.3" stroke="#6f7f9f" stroke-width="2.6" fill="none"/><path d="M274.8 97.2L274.8 41.7L267.9 42.2L267.9 96.4Z" fill="#6f7f9f"/><path d="M276.4 41.6L274.8 27.4L273.3 41.8Z" fill="#6f7f9f"/><circle cx="274.8" cy="26.2" r="1.3" fill="#6f7f9f"/><path d="M269.4 42.1L267.9 28.2L266.5 42.3Z" fill="#6f7f9f"/><circle cx="267.9" cy="27.1" r="1.3" fill="#6f7f9f"/><path d="M138.6 80.4L138.6 51.4L136.7 51.5L136.7 80.1Z" fill="#6f7f9f"/><path d="M139 51.4L138.6 43.9L138.2 51.4Z" fill="#6f7f9f"/><circle cx="138.6" cy="43.3" r="0.7" fill="#6f7f9f"/><path d="M137.1 51.5L136.7 44.2L136.3 51.6Z" fill="#6f7f9f"/><circle cx="136.7" cy="43.6" r="0.7" fill="#6f7f9f"/><path d="M108.4 76.6L108.4 53.6L107.2 53.6L107.2 76.5Z" fill="#6f7f9f"/><path d="M108.6 53.5L108.4 47.6L108.1 53.6Z" fill="#6f7f9f"/><circle cx="108.4" cy="47.1" r="0.6" fill="#6f7f9f"/><path d="M107.4 53.6L107.2 47.8L106.9 53.7Z" fill="#6f7f9f"/><circle cx="107.2" cy="47.3" r="0.6" fill="#6f7f9f"/><path d="M79.9 73.1L79.9 55.6L79.2 55.6L79.2 73Z" fill="#6f7f9f"/><path d="M80.1 55.6L79.9 51.1L79.8 55.6Z" fill="#6f7f9f"/><circle cx="79.9" cy="50.7" r="0.6" fill="#6f7f9f"/><path d="M79.4 55.6L79.2 51.2L79.1 55.6Z" fill="#6f7f9f"/><circle cx="79.2" cy="50.8" r="0.6" fill="#6f7f9f"/><circle class="lmTw0" cx="414.7" cy="77.4" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="374.6" cy="75.9" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="341.4" cy="74.7" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="313.5" cy="73.7" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="289.7" cy="72.8" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="269.2" cy="72.1" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="251.3" cy="71.5" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="235.5" cy="70.9" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="221.6" cy="70.4" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="209.1" cy="69.9" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="197.9" cy="69.5" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="187.8" cy="69.2" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="178.7" cy="68.8" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="170.3" cy="68.5" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="162.7" cy="68.2" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="155.7" cy="68" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="149.2" cy="67.8" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="143.2" cy="67.5" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="137.7" cy="67.3" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="132.5" cy="67.2" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="127.7" cy="67" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="123.2" cy="66.8" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="119" cy="66.7" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="115" cy="66.5" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="111.3" cy="66.4" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="107.8" cy="66.3" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="104.5" cy="66.1" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="101.3" cy="66" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="98.4" cy="65.9" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="95.6" cy="65.8" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="92.9" cy="65.7" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="90.4" cy="65.6" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="88" cy="65.5" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="85.7" cy="65.5" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="83.5" cy="65.4" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="81.4" cy="65.3" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="79.4" cy="65.2" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="77.4" cy="65.2" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="75.6" cy="65.1" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="73.8" cy="65" r="1.1" fill="#ffe7a8"/><circle class="lmTw0" cx="72.2" cy="65" r="1.1" fill="#ffe7a8"/><circle r="1.6" fill="#fff6c2"><animateMotion dur="6s" begin="0s" repeatCount="indefinite" path="M430 78.7L400.4 77.6L374.6 76.6L351.8 75.7L331.6 75L313.5 74.3L297.3 73.7L282.6 73.1L269.2 72.6L257 72.1L245.8 71.7L235.5 71.3L226.1 71L217.3 70.6L209.1 70.3L201.5 70L194.5 69.8L187.8 69.5L181.6 69.3L175.8 69.1L170.3 68.8L165.2 68.6L160.3 68.5L155.7 68.3L151.3 68.1L147.1 68L143.2 67.8L139.5 67.7L135.9 67.5L132.5 67.4L129.2 67.3L126.1 67.2L123.2 67.1L120.3 66.9L117.6 66.8L115 66.7L112.5 66.6L110.1 66.6L107.8 66.5L105.5 66.4L103.4 66.3L101.3 66.2L99.3 66.2L97.4 66.1L95.6 66L93.8 65.9L92 65.9L90.4 65.8L88.7 65.7L87.2 65.7L85.7 65.6L84.2 65.6L82.7 65.5L81.4 65.5L80 65.4L78.7 65.4L77.4 65.3L76.2 65.3L75 65.2L73.8 65.2L72.7 65.1L71.6 65.1L70.5 65.1"/></circle><circle r="1.6" fill="#fff6c2"><animateMotion dur="6s" begin="-3s" repeatCount="indefinite" path="M430 78.7L400.4 77.6L374.6 76.6L351.8 75.7L331.6 75L313.5 74.3L297.3 73.7L282.6 73.1L269.2 72.6L257 72.1L245.8 71.7L235.5 71.3L226.1 71L217.3 70.6L209.1 70.3L201.5 70L194.5 69.8L187.8 69.5L181.6 69.3L175.8 69.1L170.3 68.8L165.2 68.6L160.3 68.5L155.7 68.3L151.3 68.1L147.1 68L143.2 67.8L139.5 67.7L135.9 67.5L132.5 67.4L129.2 67.3L126.1 67.2L123.2 67.1L120.3 66.9L117.6 66.8L115 66.7L112.5 66.6L110.1 66.6L107.8 66.5L105.5 66.4L103.4 66.3L101.3 66.2L99.3 66.2L97.4 66.1L95.6 66L93.8 65.9L92 65.9L90.4 65.8L88.7 65.7L87.2 65.7L85.7 65.6L84.2 65.6L82.7 65.5L81.4 65.5L80 65.4L78.7 65.4L77.4 65.3L76.2 65.3L75 65.2L73.8 65.2L72.7 65.1L71.6 65.1L70.5 65.1"/></circle></g>' + 
      '<rect x="0" y="90" width="400" height="126" fill="#6e3424"/>' + bricks +
      tag("JUICE CREW", 80, 136, 30, ORANGE, -6) + tag("SHAN", 258, 160, 34, BLUE, -4) + tag("THE BRIDGE", 96, 200, 26, GOLD, -3) +
      '<rect x="0" y="214" width="400" height="46" fill="#3a3a3e"/><rect x="0" y="214" width="400" height="5" fill="#8a8a8e"/>' +
      /* subway entrance globe */
      '<rect x="380" y="150" width="4" height="66" fill="#1d2a1d"/><circle cx="382" cy="146" r="7" fill="#6be36b" class="flk"/>' +
      '<rect x="54" y="40" width="5" height="176" fill="#5a5f66"/>' + sign(26, 34, 62, "21 St") + sign(26, 56, 62, "40 Av") +
      '<g class="car"><rect x="0" y="228" width="64" height="18" rx="5" fill="#e8e0cc"/><rect x="12" y="220" width="36" height="12" rx="4" fill="#e8e0cc"/><circle cx="14" cy="248" r="6" fill="#111"/><circle cx="52" cy="248" r="6" fill="#111"/></g>',
      sky("c5", "#0d1424", "#2a3a5e"));
  }

  /* ---- redrawn landmark scenes (OG FAN 99 landmark pass): small shared helpers, prefixed L ---- */
  const Lcss = '<style>' +
    '@keyframes lmCar{from{transform:translateX(-170px)}to{transform:translateX(480px)}}.lm-car{animation:lmCar 8s linear infinite}' +
    '@keyframes lmCarB{from{transform:translateX(480px)}to{transform:translateX(-170px)}}.lm-carb{animation:lmCarB 10s linear infinite}' +
    '@keyframes lmBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.lm-bob{animation:lmBob 1.6s ease-in-out infinite}' +
    '@keyframes lmFlk{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.95}}.lm-flk{animation:lmFlk 2.3s infinite}' +
    '@keyframes lmSpin{to{transform:rotate(360deg)}}.lm-spin{animation:lmSpin 1.8s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes lmRise{0%{transform:translateY(0) scale(.8);opacity:0}20%{opacity:.85}100%{transform:translateY(-70px) scale(1.4);opacity:0}}.lm-rise{animation:lmRise 4s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes lmSway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.lm-sway{animation:lmSway 3s ease-in-out infinite;transform-box:fill-box;transform-origin:bottom center}' +
    '@keyframes lmBlk{0%,49%{opacity:1}50%,100%{opacity:.25}}.lm-blk{animation:lmBlk 1s steps(1) infinite}' +
    '@keyframes lmFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.lm-flag{animation:lmFlag 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:left center}' +
    '@keyframes lmFall{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-30px,230px) rotate(280deg);opacity:0}}.lm-fall{animation:lmFall 6s linear infinite}' +
    '@keyframes lmCld{from{transform:translateX(-120px)}to{transform:translateX(470px)}}.lm-cld{animation:lmCld 30s linear infinite}' +
    '@keyframes lmPls{0%,100%{opacity:.35}50%{opacity:1}}.lm-pls{animation:lmPls 2.2s ease-in-out infinite}' +
    '@keyframes lmWav{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.lm-wav{animation:lmWav 3s ease-in-out infinite}' +
    '@keyframes lmBeat{0%,100%{transform:scale(1)}50%{transform:scale(1.07)}}.lm-beat{animation:lmBeat .7s ease-in-out infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes lmNote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.lm-note{animation:lmNote 3s linear infinite}' +
    '.lmd1{animation-delay:-1s}.lmd2{animation-delay:-2s}.lmd3{animation-delay:-3s}.lmd4{animation-delay:-4.5s}.lmd5{animation-delay:-6s}' +
    '</style>';
  const LF = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const LT = (s, x, y, size, fill, anchor, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || "middle") + '" ' + LF + ' font-size="' + size + '" fill="' + fill + '"' + (extra || "") + '>' + s + '</text>';
  const LA = (s, x, y, size, fill, anchor, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || "middle") + '" font-family="Anton, Impact, sans-serif" font-size="' + size + '" fill="' + fill + '"' + (extra || "") + '>' + s + '</text>';
  const LR = (x, y, w, h, fill, extra) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + fill + '"' + (extra || "") + '/>';
  const Lbul = (x, y, l, col, r) => { r = r || 11; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + col + '"/>' + LT(l, x, y + r * 0.42, r * 1.22, col === "#fccc0a" ? "#000" : "#fff"); };
  const Lpill = (x, y, l, col) => { const w = l.length * 8 + 14; return '<rect x="' + (x - w / 2) + '" y="' + (y - 10) + '" width="' + w + '" height="20" rx="10" fill="' + col + '"/>' + LT(l, x, y + 4.5, 11, "#fff"); };
  /* black MTA-style station sign: lines = [["B","#ff6319"],...]; a long name like "MN" draws a pill */
  const Lsign = (x, y, w, name, lines, size) => { let b = "", bx = x + w - 18; for (let i = lines.length - 1; i >= 0; i--) { const l = lines[i]; if (l[0].length > 1) { b += Lpill(bx - 10, y + 17, l[0], l[1]); bx -= l[0].length * 8 + 22; } else { b += Lbul(bx, y + 17, l[0], l[1], 10); bx -= 24; } }
    return LR(x, y, w, 32, "#111", ' rx="3"') + LR(x, y, w, 4, "#fff") + LT(name, x + 10, y + 23, size || 15, "#fff", "start") + b; };
  /* green NYC street sign blade */
  const Lblade = (x, y, t, w) => { w = w || t.length * 7.2 + 20; return LR(x, y, w, 19, "#0f6b3a", ' rx="2" stroke="#fff" stroke-width="1.5"') + LT(t, x + w / 2, y + 14, 12, "#fff"); };
  /* two green signs on a pole at x, crossing */
  const Lpole = (x, y, a, b) => { const wa = a.length * 7.2 + 20, wb = b.length * 7.2 + 20; return LR(x, y, 6, 236 - y, "#2a3138") + Lblade(x + 3 - wa / 2, y + 6, a) + Lblade(x + 3 - wb / 2, y + 30, b) + LR(x - 2, y - 4, 10, 6, "#2a3138"); };
  const Lbrick = (x, y, w, h, base, mortar) => { let s = LR(x, y, w, h, base); for (let yy = y + 6; yy < y + h; yy += 6) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + mortar + '" stroke-width=".8"/>'; return s; };
  const Lwin = (x, y, cols, rows, dx, dy, w, h, lit, dark) => { let s = ""; for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { const on = ((r * 7 + c * 3) % 5) < 2; s += '<rect x="' + (x + c * dx) + '" y="' + (y + r * dy) + '" width="' + w + '" height="' + h + '" fill="' + (on ? lit : dark) + '"' + (on && (r + c) % 4 === 0 ? ' class="lm-flk"' : '') + '/>'; } return s; };
  const Lstars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const Lcloud = (x, y, s, cls) => '<g class="lm-cld ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="9"/><ellipse cx="-12" cy="-4" rx="11" ry="7"/></g></g>';
  const Ltree = (x, y, r, col, cls) => '<g class="lm-sway ' + (cls || "") + '">' + LR(x - 3, y, 6, r * 1.3, "#5a3d24") + '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + col + '"/><circle cx="' + (x - r * .5) + '" cy="' + (y + r * .3) + '" r="' + r * .7 + '" fill="' + col + '" opacity=".85"/><circle cx="' + (x + r * .55) + '" cy="' + (y + r * .25) + '" r="' + r * .65 + '" fill="' + col + '" opacity=".9"/></g>';
  /* faceless figure: head + body, x = centre, y = feet */
  const Lman = (x, y, body, cls, cap) => '<g' + (cls ? ' class="' + cls + '"' : "") + '>' + '<rect x="' + (x - 7) + '" y="' + (y - 30) + '" width="14" height="22" rx="5" fill="' + body + '"/><rect x="' + (x - 6) + '" y="' + (y - 10) + '" width="5" height="10" fill="#1d1d24"/><rect x="' + (x + 1) + '" y="' + (y - 10) + '" width="5" height="10" fill="#1d1d24"/>' +
    '<circle cx="' + x + '" cy="' + (y - 37) + '" r="7" fill="#5a3a26"/>' + (cap ? '<path d="M' + (x - 8) + ' ' + (y - 39) + 'q8-10 16 0z" fill="' + cap + '"/><rect x="' + (x - 1) + '" y="' + (y - 41) + '" width="12" height="3" fill="' + cap + '"/>' : '') + '</g>';
  /* subway car (stainless) seen from the side, x,y top-left */
  const Lcar = (x, y, w, l, col, band) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="52" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>'; for (let i = x + 16; i < x + w - 60; i += 40) s += '<rect x="' + i + '" y="' + (y + 9) + '" width="26" height="18" rx="3" fill="#cfe6ff" opacity=".9"/>';
    return s + LR(x, y + 33, w, 5, band || col) + Lbul(x + w - 22, y + 18, l, col, 10) + '<circle cx="' + (x + w - 8) + '" cy="' + (y + 44) + '" r="3.5" fill="#fff6c2"/>'; };
  const Lcab = (x, y) => '<rect x="' + x + '" y="' + (y + 8) + '" width="70" height="20" rx="5" fill="#f7c600"/><path d="M' + (x + 12) + ' ' + (y + 8) + 'l8-10h28l10 10z" fill="#f7c600"/><path d="M' + (x + 22) + ' ' + y + 'h10v8h-14zM' + (x + 35) + ' ' + y + 'h10l7 8h-17z" fill="#bfe0ff"/>' +
    LR(x + 26, y - 6, 18, 6, "#fff", ' rx="1"') + LT("TAXI", x + 35, y - 1.5, 5, "#111") + '<path d="M' + x + ' ' + (y + 17) + 'h70" stroke="#111" stroke-width="1" stroke-dasharray="3 3"/><circle cx="' + (x + 15) + '" cy="' + (y + 28) + '" r="6" fill="#111"/><circle cx="' + (x + 55) + '" cy="' + (y + 28) + '" r="6" fill="#111"/>';
  const Lauto = (x, y, col) => '<rect x="' + x + '" y="' + (y + 6) + '" width="56" height="16" rx="5" fill="' + col + '"/><rect x="' + (x + 11) + '" y="' + (y - 2) + '" width="32" height="11" rx="3" fill="#cfe6ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 22) + '" r="5" fill="#111"/><circle cx="' + (x + 43) + '" cy="' + (y + 22) + '" r="5" fill="#111"/>';
  /* turntable from above at an angle */
  const Ldeck = (cx, cy, r, lab) => '<rect x="' + (cx - r - 12) + '" y="' + (cy - r * .45 - 10) + '" width="' + (r * 2 + 30) + '" height="' + (r * .9 + 20) + '" rx="4" fill="#2a2a30"/><g transform="translate(' + cx + ' ' + cy + ') scale(1 .42)"><g class="lm-spin"><circle r="' + r + '" fill="#0c0c0e"/><circle r="' + r * .72 + '" fill="none" stroke="#2c2c30" stroke-width="2"/><circle r="' + r * .5 + '" fill="none" stroke="#2c2c30" stroke-width="2"/><circle r="' + r * .3 + '" fill="' + lab + '"/><rect x="-2" y="' + (-r * .3) + '" width="4" height="' + r * .2 + '" fill="#fff"/></g></g><path d="M' + (cx + r + 6) + ' ' + (cy - r * .4) + 'l-8 ' + r * .5 + '" stroke="#c9ced6" stroke-width="3"/>';
  /* 0. 21 St–Queensbridge (F): one of the deep 63rd St line stations, riding the long escalator up past a poster for The Bridge (1986) */
  function LM_train() {
    let steps = ""; for (let i = 0; i < 14; i++) steps += '<path d="M' + (150 + i * 14) + ' ' + (236 - i * 13) + 'h40" stroke="#5a6068" stroke-width="2"/>';
    const poster = (x, y, d) => '<g class="' + d + '">' + LR(x, y, 52, 70, "#0e1a2e", ' stroke="#f2c14e" stroke-width="2"') +
      '<path d="M' + (x + 4) + ' ' + (y + 40) + 'h44" stroke="#9fe3ff" stroke-width="2"/>' + [8, 20, 32, 44].map(k => '<path d="M' + (x + k) + ' ' + (y + 40) + 'v-14l3-4 3 4v14" stroke="#9fe3ff" stroke-width="1.5" fill="none"/>').join("") +
      LT("THE BRIDGE", x + 26, y + 54, 7.5, "#f2c14e") + LT("MC SHAN · 1986", x + 26, y + 64, 5.5, "#fff") + LT("JUICE CREW", x + 26, y + 14, 6, "#ff9a2e") + '</g>';
    return svg(Lcss + '<rect width="400" height="260" fill="#1a2232"/>' +
      /* the tube */
      '<path d="M0 0h400v40Q200 70 0 40z" fill="#2a3448"/>' + '<g class="lm-flk"><path d="M60 26h80M260 26h80" stroke="#fffbe6" stroke-width="4"/></g>' +
      '<path d="M120 260L330 30h70v230z" fill="#c9c4b8"/>' + '<path d="M0 260V80l140 0-100 180z" fill="#c9c4b8" opacity=".6"/>' +
      /* escalator */
      '<path d="M140 250L340 30h30L176 260z" fill="#3a3f48"/>' + steps + '<path d="M132 248L332 28" stroke="#111" stroke-width="5"/><path d="M180 260L378 40" stroke="#111" stroke-width="5"/>' +
      Lman(250, 136, "#ff9a2e", "lm-bob", "#9fe3ff") + Lman(300, 84, "#9fe3ff", "lm-bob lmd1") +
      /* posters climbing the wall */
      poster(14, 128, "") + poster(76, 128, "lm-bob lmd2") +
      Lsign(10, 54, 196, "21 St–Queensbridge", [["F", "#ff6319"]], 13) + LR(10, 90, 196, 20, "#111", ' rx="2"') + LT("EXIT ⬈ 41 Av &amp; 21 St · the Houses", 108, 104, 9, "#f2c14e") +
      tag("SHAN", 14, 250, 30, "#9fe3ff", -5) + tag("JUICE CREW", 250, 250, 20, "#f2c14e", -4),
      "");
  }

  window.SCENES = { train: LM_train, lighthouse, noguchi, studio, corner };
})();
