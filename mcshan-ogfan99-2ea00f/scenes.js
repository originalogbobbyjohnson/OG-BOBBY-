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

  /* 1. The F pulling into 21 St–Queensbridge, deep underground under 41st Av: white tile, the orange band, steel columns */
  function train() {
    let tile = "", cols = "", windows = "";
    for (let y = 0; y < 116; y += 10) tile += '<path d="M0 ' + y + 'H400" stroke="#d6d8d6" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 20) tile += '<path d="M' + x + ' 0V116" stroke="#d6d8d6" stroke-width="1"/>';
    [[30], [370]].forEach(c => { cols += '<rect x="' + (c[0] - 6) + '" y="0" width="12" height="196" fill="#1f3a5c"/>'; });
    for (let x = 40; x < 250; x += 50) windows += '<rect x="' + x + '" y="134" width="34" height="22" rx="3" fill="#fff4d6" opacity=".9"/>';
    return sv(
      '<rect width="400" height="260" fill="#f1f2ee"/>' + tile +
      '<rect x="0" y="22" width="400" height="10" fill="' + FORANGE + '"/><rect x="0" y="34" width="400" height="3" fill="#1f3a5c"/>' +
      '<rect x="0" y="0" width="400" height="8" fill="#1f3a5c"/>' +
      '<rect x="66" y="48" width="268" height="38" rx="4" fill="#111"/><rect x="66" y="48" width="268" height="4" fill="#fff"/>' +
      '<text x="80" y="76" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">21 St–Queensbridge</text>' +
      bullet(310, 68, "F", FORANGE) +
      '<rect x="0" y="116" width="400" height="80" fill="#23232a"/>' +
      '<g class="anim-train">' +
        '<rect x="14" y="122" width="300" height="66" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="14" y="160" width="300" height="5" fill="' + FORANGE + '"/>' + windows +
        '<rect x="292" y="132" width="16" height="26" rx="2" fill="#2b2f36"/>' + bullet(270, 176, "F", FORANGE, false, 8) +
        '<circle cx="306" cy="176" r="4" fill="#fff6c2" class="flk"/>' +
      '</g>' + cols +
      '<rect x="0" y="196" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#7f7d78"/>' +
      '<text x="200" y="240" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#23232a" letter-spacing="2">41 AV · QUEENSBRIDGE, QUEENS</text>');
  }

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
      /* the bridge's cantilever span on the skyline */
      '<path d="M180 70L250 40L320 70L390 40" stroke="#3a4a6a" stroke-width="3" fill="none"/><path d="M180 80H400" stroke="#3a4a6a" stroke-width="3"/>' +
      '<rect x="244" y="22" width="12" height="68" fill="#3a4a6a"/><path d="M244 22l6 -14 6 14z" fill="#3a4a6a"/>' +
      '<rect x="0" y="90" width="400" height="126" fill="#6e3424"/>' + bricks +
      tag("JUICE CREW", 80, 136, 30, ORANGE, -6) + tag("SHAN", 258, 160, 34, BLUE, -4) + tag("THE BRIDGE", 96, 200, 26, GOLD, -3) +
      '<rect x="0" y="214" width="400" height="46" fill="#3a3a3e"/><rect x="0" y="214" width="400" height="5" fill="#8a8a8e"/>' +
      /* subway entrance globe */
      '<rect x="380" y="150" width="4" height="66" fill="#1d2a1d"/><circle cx="382" cy="146" r="7" fill="#6be36b" class="flk"/>' +
      '<rect x="54" y="40" width="5" height="176" fill="#5a5f66"/>' + sign(26, 34, 62, "21 St") + sign(26, 56, 62, "40 Av") +
      '<g class="car"><rect x="0" y="228" width="64" height="18" rx="5" fill="#e8e0cc"/><rect x="12" y="220" width="36" height="12" rx="4" fill="#e8e0cc"/><circle cx="14" cy="248" r="6" fill="#111"/><circle cx="52" cy="248" r="6" fill="#111"/></g>',
      sky("c5", "#0d1424", "#2a3a5e"));
  }

  window.SCENES = { train, lighthouse, noguchi, studio, corner };
})();
