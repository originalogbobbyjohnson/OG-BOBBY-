/* mo3 scenes (Regions tab: Houston + Texas; North Dallas). CSS classes and ids prefixed m3- (the page's own anim-train is kept).
   1 LBJ/Skillman station on the DART Blue Line (at grade, side platforms, beside the I-635 LBJ Freeway; the pedestrian bridge over the freeway lands on Audelia Rd): the light-rail car gliding in, freeway traffic behind.
   2 Stoney Brook apartments on Audelia Rd in North Dallas (his childhood complex, the "Hold Ya Tongue" video spot): two-story brick garden apartments, outside stairs, porch lights, a car rolling by.
   3 The courthouse square in McKinney, where he was born: the 1927 neoclassical limestone courthouse (paired columns, tripartite windows, flat parapet roof), brick storefronts, string lights twinkling.
   4 The chicken-and-waffles spot where he and his partners split plates (Dallas Observer): neon in the window, a plate of chicken and waffles, syrup dripping. No business name drawn.
   5 Audelia Rd and Forest Ln (the Forest Lane side of North Dallas he names in "Hold Ya Tongue"): green signs, MO3 tagged on the wall, Bank of America Plaza's green outline lit up downtown behind.
   No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes m3carR{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.m3-carR{animation:m3carR 6s linear infinite}.m3-carR2{animation-delay:-3s}' +
    '@keyframes m3carL{from{transform:translateX(540px)}to{transform:translateX(-160px)}}.m3-carL{animation:m3carL 7.5s linear infinite}.m3-carL2{animation-delay:-3.6s}' +
    '@keyframes m3blink{0%,100%{opacity:.3}50%{opacity:1}}.m3-bl{animation:m3blink 1.6s ease-in-out infinite}.m3-bl2{animation-delay:-.8s}' +
    '@keyframes m3glow{0%,100%{opacity:.55}50%{opacity:1}}.m3-glow{animation:m3glow 2.4s ease-in-out infinite}' +
    '@keyframes m3flick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.25}55%{opacity:.9}}.m3-flk{animation:m3flick 2.6s infinite}' +
    '@keyframes m3drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(22px);opacity:0}}.m3-drip{animation:m3drip 1.8s ease-in infinite}.m3-drip2{animation-delay:-.9s}' +
    '@keyframes m3steam{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-24px);opacity:0}}.m3-st{animation:m3steam 2.2s ease-out infinite}.m3-st2{animation-delay:-1.1s}' +
    '@keyframes m3flag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.m3-flag{transform-box:fill-box;transform-origin:0 50%;animation:m3flag 1.4s ease-in-out infinite}' +
    '@keyframes m3spray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.m3-sp{animation:m3spray 1.4s ease-out infinite}.m3-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 16) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 16) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "m3-bl" + (i % 2 ? " m3-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 80) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const DBLUE = "#0067b1", SKY = "#3fb6ff", GOLD = "#ffd23f", ROSE = "#ff4d6d";
  const car = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="46" height="13" rx="4" fill="' + c + '"/><rect x="10" y="' + (y - 7) + '" width="24" height="9" rx="3" fill="' + c + '"/><rect x="13" y="' + (y - 5) + '" width="8" height="6" fill="#bfe3ff" opacity=".8"/><rect x="23" y="' + (y - 5) + '" width="8" height="6" fill="#bfe3ff" opacity=".8"/><circle cx="10" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="36" cy="' + (y + 14) + '" r="4" fill="#111"/></g>';

  /* Bank of America Plaza: a tall slab tower outlined in green light */
  const boa = (x, base, s) => {
    const h = 150 * s, w = 34 * s, top = base - h;
    let win = "";
    for (let i = 0; i < 16; i++) win += '<path d="M' + (x - w / 2 + 3 * s).toFixed(1) + ' ' + (top + 10 * s + i * 8.6 * s).toFixed(1) + 'h' + (w - 6 * s).toFixed(1) + '" stroke="#3b4a66" stroke-width="1.2"/>';
    return '<g><rect x="' + (x - w / 2) + '" y="' + top.toFixed(1) + '" width="' + w + '" height="' + h.toFixed(1) + '" fill="#1b2236"/>' + win +
      '<rect class="m3-glow" x="' + (x - w / 2) + '" y="' + top.toFixed(1) + '" width="' + w + '" height="' + h.toFixed(1) + '" fill="none" stroke="#39ff7a" stroke-width="2.2"/>' +
      '<path class="m3-glow" d="M' + (x - w / 2 + 5 * s).toFixed(1) + ' ' + (top + 5 * s).toFixed(1) + 'h' + (w - 10 * s).toFixed(1) + '" stroke="#39ff7a" stroke-width="1.6"/></g>';
  };

  /* 1. LBJ/Skillman station, DART Blue Line, beside I-635 */
  function m3station() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="132" width="36" height="22" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><path d="M24 188V132q0 -14 14 -14h300q24 0 30 30v40z" fill="#eceef0" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="24" y="160" width="344" height="7" fill="' + DBLUE + '"/><rect x="24" y="169" width="344" height="3" fill="#c9cdd2"/><rect x="24" y="174" width="344" height="4" fill="#5d646b"/>' +
      '<path d="M340 122q22 4 26 30h-26z" fill="#1c2630"/><circle cx="358" cy="181" r="3.5" fill="#fff6c2"/>' +
      '<rect x="200" y="108" width="70" height="10" fill="#8a939b"/><path d="M210 108l25 -22l25 22" stroke="#555" stroke-width="2" fill="none"/>' +
      '<rect x="40" y="121" width="96" height="10" rx="2" fill="#111"/><text x="88" y="129" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">BLUE · ROWLETT</text>' +
      '<circle cx="96" cy="190" r="7" fill="#222"/><circle cx="296" cy="190" r="7" fill="#222"/></g>';
    /* the pedestrian bridge over I-635 to Audelia Rd: a steel truss */
    let truss = "";
    for (let i = 0; i < 12; i++) truss += '<path d="M' + (20 + i * 30) + ' 30l15 18l15 -18" stroke="#c7ccd4" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#m3s1)"/>' +
      /* freeway behind */
      '<rect x="0" y="62" width="400" height="34" fill="#55585f"/><path d="M0 79h400" stroke="#e8e2c4" stroke-width="1.5" stroke-dasharray="14 10"/><rect x="0" y="94" width="400" height="5" fill="#9aa0a8"/>' +
      car("m3-carR", 64, "#d7dbe2") + car("m3-carR m3-carR2", 64, ROSE) + car("m3-carL", 82, GOLD) + car("m3-carL m3-carL2", 82, "#5a7bd6") +
      '<rect x="0" y="28" width="400" height="4" fill="#c7ccd4"/><rect x="0" y="48" width="400" height="4" fill="#c7ccd4"/>' + truss +
      '<rect x="64" y="52" width="8" height="48" fill="#9aa0a8"/><rect x="328" y="52" width="8" height="48" fill="#9aa0a8"/>' +
      '<rect x="150" y="34" width="100" height="12" rx="2" fill="#0f6b3a"/><text x="200" y="43.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">I-635 · AUDELIA RD</text>' +
      /* platform canopy */
      '<path d="M0 108h400l-10 -8H10z" fill="#2a4d7a"/>' + [70, 200, 330].map(x => '<rect x="' + (x - 3) + '" y="108" width="6" height="84" fill="#7a8088"/>').join("") +
      train +
      '<rect x="0" y="192" width="400" height="8" fill="#f2c200"/><rect x="0" y="200" width="400" height="60" fill="#b0aaa0"/><path d="M0 230h400" stroke="#9c958a" stroke-width="2"/>' +
      '<rect x="54" y="208" width="292" height="38" rx="3" fill="#111"/><text x="72" y="233" ' + font + ' font-size="18" fill="#fff">LBJ/Skillman</text>' + badge(262, 227, "BLUE", DBLUE),
      sky("m3s1", "#5aa6e0", "#f6dcb0"));
  }

  /* 2. Stoney Brook apartments on Audelia Rd */
  function m3apts() {
    const unit = (x, y) => '<rect x="' + x + '" y="' + y + '" width="54" height="40" fill="#9a4f36"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M' + x + ' ' + (y + 8 + i * 8) + 'h54" stroke="#80402b" stroke-width="1"/>').join("") +
      '<rect x="' + (x + 6) + '" y="' + (y + 10) + '" width="18" height="16" fill="#ffe2a0" class="m3-flk"/><path d="M' + (x + 15) + ' ' + (y + 10) + 'v16M' + (x + 6) + ' ' + (y + 18) + 'h18" stroke="#80402b" stroke-width="1.2"/>' +
      '<rect x="' + (x + 32) + '" y="' + (y + 8) + '" width="14" height="32" fill="#3a3f4a"/><circle cx="' + (x + 43) + '" cy="' + (y + 24) + '" r="1.2" fill="' + GOLD + '"/>';
    const bldg = x => '<g><path d="M' + (x - 6) + ' 74h132l-8 -14H' + (x + 2) + 'z" fill="#4a4f5c"/>' + unit(x, 76) + unit(x + 66, 76) + '<rect x="' + (x - 4) + '" y="116" width="128" height="6" fill="#d8d2c4"/>' +
      Array.from({ length: 16 }, (_, i) => '<rect x="' + (x - 2 + i * 8) + '" y="106" width="2" height="10" fill="#d8d2c4"/>').join("") + unit(x, 122) + unit(x + 66, 122) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#m3s2)"/>' + stars(12) +
      '<circle cx="340" cy="40" r="16" fill="#f4f1de"/><circle cx="346" cy="36" r="14" fill="#262b4a"/>' +
      bldg(10) + bldg(272) +
      /* outside stair between buildings */
      '<path d="M150 162L228 116h14v6l-78 46z" fill="#6b6f78"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (154 + i * 9) + ' ' + (162 - i * 5.3).toFixed(1) + 'v-10" stroke="#d8d2c4" stroke-width="1.5"/>').join("") +
      '<path d="M150 152L232 104" stroke="#d8d2c4" stroke-width="2"/><rect x="228" y="116" width="44" height="6" fill="#d8d2c4"/>' +
      '<circle class="m3-bl" cx="200" cy="96" r="4" fill="#ffe9a8"/><path d="M200 100v10" stroke="#333" stroke-width="1.5"/>' +
      '<rect x="0" y="162" width="400" height="20" fill="#3f7a3a"/>' +
      /* the stone monument sign by the drive */
      '<rect x="132" y="170" width="136" height="26" rx="3" fill="#cfc6b2" stroke="#8d846f" stroke-width="2"/><text x="200" y="188" text-anchor="middle" ' + font + ' font-size="12" fill="#3a3324">STONEY BROOK</text>' +
      '<rect x="0" y="196" width="400" height="64" fill="#45474d"/><path d="M0 228h400" stroke="#e8e2c4" stroke-width="2" stroke-dasharray="18 12"/>' +
      car("m3-carR", 206, SKY) + car("m3-carL", 236, "#e9eef5") +
      sign(4, 172, 118, "Audelia Rd"),
      sky("m3s2", "#141833", "#3d3f6e"));
  }

  /* 3. The courthouse square in McKinney */
  function m3square() {
    const col = x => '<rect x="' + x + '" y="92" width="7" height="76" fill="#efe6cf"/><rect x="' + (x - 2) + '" y="88" width="11" height="5" fill="#d9cfb4"/><rect x="' + (x - 2) + '" y="166" width="11" height="4" fill="#d9cfb4"/>';
    const tri = (x, y) => '<rect x="' + x + '" y="' + y + '" width="36" height="22" fill="#3a4658"/><path d="M' + (x + 12) + ' ' + y + 'v22M' + (x + 24) + ' ' + y + 'v22" stroke="#efe6cf" stroke-width="2"/>';
    const lights = Array.from({ length: 22 }, (_, i) => '<circle class="' + (i % 2 ? "m3-bl" : "m3-bl m3-bl2") + '" cx="' + (8 + i * 18) + '" cy="' + (64 + Math.sin(i / 21 * Math.PI) * 18).toFixed(1) + '" r="2.2" fill="#ffe49a"/>').join("");
    const store = (x, w, c) => '<rect x="' + x + '" y="110" width="' + w + '" height="78" fill="' + c + '"/><rect x="' + x + '" y="104" width="' + w + '" height="8" fill="#5b3a2c"/>' +
      '<rect x="' + (x + 6) + '" y="118" width="' + (w / 2 - 9) + '" height="18" fill="#ffe2a0" opacity=".85"/><rect x="' + (x + w / 2 + 3) + '" y="118" width="' + (w / 2 - 9) + '" height="18" fill="#ffe2a0" opacity=".85"/>' +
      '<rect x="' + (x + 4) + '" y="152" width="' + (w - 8) + '" height="36" fill="#2c3240"/><path d="M' + (x + 4) + ' 150h' + (w - 8) + '" stroke="' + ROSE + '" stroke-width="5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#m3s3)"/>' + stars(8) +
      store(0, 70, "#8a4a32") + store(330, 70, "#7a5a3a") +
      /* the courthouse: three floors of pale limestone, flat parapet roof, paired columns, tripartite windows */
      '<rect x="80" y="76" width="240" height="112" fill="#e9dfc4"/><rect x="76" y="70" width="248" height="8" fill="#d9cfb4"/><rect x="74" y="64" width="252" height="7" fill="#cfc4a6"/>' +
      '<rect x="150" y="84" width="100" height="6" fill="#d9cfb4"/>' + col(158) + col(170) + col(223) + col(235) +
      tri(92, 96) + tri(92, 132) + tri(272, 96) + tri(272, 132) + tri(182, 98) + tri(182, 132) +
      '<rect x="184" y="160" width="32" height="28" fill="#4a3a2c"/><path d="M200 160v28" stroke="#2a2018" stroke-width="1.5"/>' +
      '<path d="M140 188h120v6H140z" fill="#cfc4a6"/><path d="M132 194h136v6H132z" fill="#c3b896"/>' +
      /* flagpole on the roof */
      '<rect x="199" y="30" width="2.5" height="36" fill="#bbb"/><g class="m3-flag"><rect x="201" y="31" width="22" height="6.5" fill="#fff"/><rect x="201" y="37.5" width="22" height="6.5" fill="#bf0a30"/><rect x="201" y="31" width="8" height="13" fill="#1d3f7a"/><path d="M205 35.5l1 2 2 .2-1.6 1.3.5 2-1.9-1.1-1.9 1.1.5-2-1.6-1.3 2-.2z" fill="#fff"/></g>' +
      lights +
      '<rect x="0" y="200" width="400" height="60" fill="#7d6b5a"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 22) + ' 200l-10 60" stroke="#6a5a4a" stroke-width="1.5"/>').join("") +
      '<rect x="120" y="212" width="160" height="26" rx="3" fill="#111" opacity=".75"/><text x="200" y="230" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '" letter-spacing="2">McKINNEY, TX</text>',
      sky("m3s3", "#1c2448", "#c86a5a"));
  }

  /* 4. The chicken-and-waffles spot */
  function m3waffle() {
    let grid = "";
    for (let i = 0; i < 5; i++) for (let j = 0; j < 5; j++) grid += '<rect x="' + (158 + i * 13) + '" y="' + (176 + j * 8) + '" width="10" height="5.5" rx="1" fill="#b8792a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#m3s4)"/>' +
      /* the big front window with neon */
      '<rect x="30" y="20" width="340" height="112" rx="4" fill="#141a2c" stroke="#5b3a2c" stroke-width="8"/>' + stars(10).replace(/cy="(\d+)"/g, (m, v) => 'cy="' + (26 + (+v % 90)) + '"') +
      '<text class="m3-flk" x="200" y="70" text-anchor="middle" font-family="Pacifico, Brush Script MT, cursive" font-size="30" fill="#ff7ab0" stroke="#ff2d87" stroke-width="1">Chicken &amp; Waffles</text>' +
      '<text class="m3-glow" x="200" y="104" text-anchor="middle" ' + font + ' font-size="14" fill="' + SKY + '" letter-spacing="4">OPEN LATE</text>' +
      '<rect x="0" y="132" width="400" height="128" fill="#d0473a"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="' + (132 + (i % 2) * 0) + '" width="20" height="128" fill="#f3ece0" opacity=".9"/>').join("") +
      '<rect x="0" y="132" width="400" height="128" fill="none"/>' +
      /* the plate */
      '<ellipse cx="200" cy="200" rx="118" ry="42" fill="#f6f4ef" stroke="#c9c3b6" stroke-width="3"/><ellipse cx="200" cy="200" rx="96" ry="32" fill="none" stroke="#e1dccf" stroke-width="2"/>' +
      '<rect x="150" y="170" width="76" height="46" rx="6" fill="#d9993e" transform="rotate(-6 188 193)"/>' + '<g transform="rotate(-6 188 193)">' + grid + '</g>' +
      '<rect x="176" y="178" width="18" height="12" rx="2" fill="#fff3c4"/>' +
      /* fried chicken */
      '<path d="M236 176q26 -10 40 6q8 14 -6 26q-20 10 -36 -2q-12 -14 2 -30z" fill="#c4762a" stroke="#8a4a12" stroke-width="2"/><path d="M244 186q6 -4 12 0M250 196q6 -4 12 0M240 200q5 -3 10 0" stroke="#e6a24a" stroke-width="2" fill="none"/>' +
      '<rect x="268" y="196" width="16" height="7" rx="3" fill="#efe2c8" transform="rotate(30 276 200)"/>' +
      /* syrup bottle and drips */
      '<path d="M90 120h20v12l8 10v56h-36v-56l8 -10z" fill="#7a3c12" opacity=".9"/><rect x="92" y="112" width="16" height="9" fill="#e9eef5"/>' +
      '<path d="M170 176q10 -2 12 6" stroke="#6a300c" stroke-width="3" fill="none"/>' +
      '<circle class="m3-drip" cx="182" cy="184" r="3" fill="#7a3c12"/><circle class="m3-drip m3-drip2" cx="196" cy="182" r="2.6" fill="#7a3c12"/>' +
      '<path class="m3-st" d="M250 170q-6 -8 0 -16" stroke="#fff" stroke-width="2" fill="none" opacity=".6"/><path class="m3-st m3-st2" d="M262 168q-6 -8 0 -16" stroke="#fff" stroke-width="2" fill="none" opacity=".6"/>' +
      /* fork, knife */
      '<rect x="326" y="168" width="5" height="64" rx="2" fill="#c7ccd4"/><path d="M322 168v-16M326 168v-16M331 168v-16M335 168v-16" stroke="#c7ccd4" stroke-width="2"/><rect x="342" y="152" width="7" height="80" rx="3" fill="#c7ccd4"/>',
      sky("m3s4", "#1a1d33", "#2c2f4d"));
  }

  /* 5. Audelia Rd and Forest Ln, North Dallas */
  function m3corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#m3s5)"/>' + stars(18) +
      '<g fill="#232a40"><rect x="24" y="100" width="24" height="30"/><rect x="52" y="90" width="18" height="40"/><rect x="128" y="96" width="22" height="34"/><rect x="262" y="92" width="26" height="38"/><rect x="296" y="104" width="20" height="26"/><rect x="170" y="80" width="20" height="50"/></g>' +
      boa(222, 130, 0.62) +
      '<rect x="0" y="126" width="400" height="98" fill="#c9c2b4"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#b3ab9b" stroke-width="1"/>').join("") +
      '<rect x="0" y="126" width="400" height="6" fill="#8f8776"/>' +
      tag("MO3", 26, 190, 60, SKY, -6) + tag("BG4L", 40, 216, 26, GOLD, -5) + tag("NAWFSIDE", 176, 172, 24, ROSE, -4) + tag("STAYED SOLID", 186, 202, 15, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(262, 98, 136, "Audelia Rd") + sign(266, 124, 132, "Forest Ln") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="m3-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="m3-sp"><circle cx="160" cy="170" r="3" fill="' + SKY + '" opacity=".7"/></g><g class="m3-sp m3-sp2"><circle cx="166" cy="164" r="2" fill="' + SKY + '" opacity=".6"/></g>',
      sky("m3s5", "#10183a", "#4a6fb0"));
  }

  window.SCENES = { m3station: m3station, m3apts: m3apts, m3square: m3square, m3waffle: m3waffle, m3corner: m3corner };
})();
