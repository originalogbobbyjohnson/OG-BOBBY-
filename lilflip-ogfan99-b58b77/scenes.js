/* lilflip scenes (Regions tab: Houston + Texas; Cloverland, South Houston). CSS classes and ids prefixed lf- (the page's own anim-train is kept).
   1 METRO 29 Cullen/Hirsch bus pulling into the Cullen Blvd / Mowery Rd stop at the edge of Cloverland: wide boulevard, live oaks, the stop sign with the 29.
   2 Cloverland Park: green grass full of clovers, a swing set, a rainbow ending in a leprechaun's pot of gold (his first album, The Leprechaun), coins bouncing.
   3 Worthing High School on Scott St (he went there; "Next year I might buy Worthing"): the new brick-and-glass campus, Kelly green, gold and black Colts banners, a flag waving.
   4 Game Over: an arcade cabinet in a dark room, the pixel screen blinking GAME OVER / INSERT COIN, joystick and buttons, a FLIP high score.
   5 Hickok Ln and Scott St in Cloverland: green street signs, LIL' FLIP tagged on the wall, Scott St running north to the downtown skyline and Wells Fargo Plaza's curved glass top. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lfleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.lf-leaf{transform-box:fill-box;transform-origin:50% 100%;animation:lfleaf 3s ease-in-out infinite}' +
    '@keyframes lfcoin{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}.lf-coin{animation:lfcoin 1.2s ease-in-out infinite}.lf-c2{animation-delay:-.4s}.lf-c3{animation-delay:-.8s}' +
    '@keyframes lfglow{0%,100%{opacity:.95}50%{opacity:.55}}.lf-glow{animation:lfglow 2.4s ease-in-out infinite}' +
    '@keyframes lfswing{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.lf-swing{transform-box:view-box;transform-origin:96px 120px;animation:lfswing 2.4s ease-in-out infinite}' +
    '@keyframes lfflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.lf-flag{transform-box:fill-box;transform-origin:0% 50%;animation:lfflag 1.6s ease-in-out infinite}' +
    '@keyframes lfblink{0%,49%{opacity:1}50%,100%{opacity:0}}.lf-blink{animation:lfblink 1s steps(1) infinite}.lf-blink2{animation-delay:.5s}' +
    '@keyframes lfstar{0%,100%{opacity:.2}50%{opacity:1}}.lf-twk{animation:lfstar 1.8s ease-in-out infinite}' +
    '@keyframes lfspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lf-sp{animation:lfspray 1.4s ease-out infinite}.lf-sp2{animation-delay:.45s}' +
    '@keyframes lfcloud{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.lf-cloud{animation:lfcloud 26s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "lf-twk") + '" cx="' + ((i * 89) % 400) + '" cy="' + (6 + (i * 47) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const METRO = "#1f4e79", GREEN = "#2ecc71", KELLY = "#2a8f3c", GOLD = "#ffd23f", BLACK = "#111";
  const oak = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-5" y="0" width="10" height="44" fill="#5b4632"/><path d="M-5 12l-18 -10M5 10l18 -12" stroke="#5b4632" stroke-width="5"/><g class="lf-leaf"><ellipse cx="0" cy="-8" rx="44" ry="22" fill="#3f6b35"/><ellipse cx="-22" cy="-16" rx="22" ry="14" fill="#4d7d40"/><ellipse cx="22" cy="-14" rx="20" ry="12" fill="#4d7d40"/></g></g>';
  const clover = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="' + (c || "#3cb043") + '"><circle cx="-4" cy="-4" r="4.5"/><circle cx="4" cy="-4" r="4.5"/><circle cx="0" cy="3" r="4.5"/><path d="M0 4q2 8 6 12" stroke="#2a7a2e" stroke-width="1.6" fill="none"/></g>';
  /* a 9 drawn with a straight stem: bowl + vertical stem; x = left edge, y = baseline, s = font size */
  const n9 = (x, y, s, c) => '<circle cx="' + (x + s * 0.27) + '" cy="' + (y - s * 0.5) + '" r="' + (s * 0.19) + '" fill="none" stroke="' + c + '" stroke-width="' + (s * 0.13) + '"/><path d="M' + (x + s * 0.46) + ' ' + (y - s * 0.62) + 'V' + y + '" stroke="' + c + '" stroke-width="' + (s * 0.13) + '"/>';
  /* "29": a text 2 then the straight-stem 9; cx = center */
  const r29 = (cx, y, s, c) => '<text x="' + (cx - s * 0.06) + '" y="' + y + '" text-anchor="end" ' + font + ' font-size="' + s + '" fill="' + c + '">2</text>' + n9(cx + s * 0.02, y, s, c);
  const cloud = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".9"><ellipse cx="0" cy="0" rx="26" ry="10"/><ellipse cx="14" cy="-8" rx="16" ry="10"/><ellipse cx="-12" cy="-6" rx="14" ry="8"/></g>';

  /* 1. METRO 29 Cullen/Hirsch at Cullen Blvd / Mowery Rd */
  function lfstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (62 + i * 36) + '" y="146" width="30" height="22" rx="3" fill="#1d2833"/>').join("");
    const bus = '<g class="anim-train"><rect x="28" y="136" width="318" height="70" rx="10" fill="#f4f5f3" stroke="#8f979e" stroke-width="2"/>' + win +
      '<rect x="34" y="146" width="22" height="48" rx="2" fill="#1d2833"/><rect x="28" y="176" width="318" height="8" fill="' + METRO + '"/><rect x="28" y="186" width="318" height="3" fill="#e31837"/>' +
      '<rect x="32" y="138" width="130" height="10" rx="2" fill="#111"/>' + r29(46, 146, 7.5, "#ffb84a") + '<text x="56" y="146" ' + font + ' font-size="7.5" fill="#ffb84a">CULLEN/HIRSCH</text>' +
      '<circle cx="80" cy="208" r="12" fill="#222"/><circle cx="80" cy="208" r="5" fill="#9aa1a8"/><circle cx="294" cy="208" r="12" fill="#222"/><circle cx="294" cy="208" r="5" fill="#9aa1a8"/>' +
      '<circle cx="340" cy="196" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lfs1)"/>' + '<g class="lf-cloud">' + cloud(60, 40, 1) + cloud(240, 26, .8) + '</g>' +
      '<rect x="0" y="120" width="400" height="20" fill="#7fb35a"/>' + oak(40, 112, .9) + oak(200, 110, .75) + oak(330, 114, .8) +
      '<rect x="0" y="140" width="400" height="80" fill="#5c5d63"/><path d="M0 214h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="18 14"/>' + bus +
      '<rect x="0" y="216" width="400" height="44" fill="#b9b3a6"/>' +
      '<rect x="372" y="94" width="5" height="122" fill="#6b7178"/><rect x="352" y="80" width="44" height="34" rx="3" fill="' + METRO + '" stroke="#fff" stroke-width="1.5"/><text x="374" y="93" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">METRO</text>' + r29(374, 108, 12, "#fff") + '' +
      '<rect x="20" y="224" width="320" height="30" rx="3" fill="#111"/><text x="32" y="244" ' + font + ' font-size="13" fill="#fff">Cullen Blvd / Mowery Rd</text><rect x="278" y="230" width="48" height="18" rx="9" fill="' + METRO + '"/>' + r29(302, 243, 12, "#fff") + '',
      sky("lfs1", "#6fb2e6", "#f3e6c8"));
  }

  /* 2. Cloverland Park, a rainbow and a pot of gold */
  function lfpark() {
    const bands = ["#e74c3c", "#f39c12", "#f1c40f", "#2ecc71", "#3498db", "#8e44ad"];
    const rainbow = '<g class="lf-glow">' + bands.map((c, i) => '<path d="M' + (60 + i * 7) + ' 196A' + (150 - i * 7) + ' ' + (150 - i * 7) + ' 0 0 1 ' + (360 - i * 7 - (0)) + ' 196" stroke="' + c + '" stroke-width="7" fill="none" opacity=".85"/>').join("") + '</g>';
    const pot = '<g transform="translate(318 180)"><ellipse cx="0" cy="0" rx="30" ry="8" fill="' + GOLD + '"/>' +
      '<path d="M-28 2q-6 30 10 36h36q16 -6 10 -36z" fill="#1a1a1a" stroke="#000" stroke-width="2"/><rect x="-32" y="-2" width="64" height="8" rx="4" fill="#2a2a2a"/>' +
      [-16, -4, 8, 18].map((x, i) => '<circle class="lf-coin' + (i % 3 ? " lf-c" + (i % 3 + 1) : "") + '" cx="' + x + '" cy="' + (-8 - (i % 2) * 6) + '" r="6" fill="' + GOLD + '" stroke="#b8860b" stroke-width="1.5"/>').join("") + '</g>';
    const swing = '<path d="M60 120l-14 80M60 120l14 80M132 120l-14 80M132 120l14 80M58 120h76" stroke="#c0392b" stroke-width="5" fill="none"/>' +
      '<g class="lf-swing"><path d="M88 120v52M104 120v52" stroke="#555" stroke-width="2"/><rect x="84" y="170" width="24" height="6" rx="2" fill="#333"/></g>';
    let field = ""; for (let i = 0; i < 26; i++) field += clover(10 + (i * 61) % 390, 214 + (i * 17) % 40, .9 + (i % 3) * .2, i % 2 ? "#3cb043" : "#2f9a39");
    return svg(
      '<rect width="400" height="260" fill="url(#lfs2)"/>' + '<g class="lf-cloud">' + cloud(90, 36, .9) + '</g>' + rainbow +
      '<rect x="0" y="196" width="400" height="64" fill="#5fae47"/>' + oak(26, 156, .8) + swing + field + pot +
      '<rect x="150" y="226" width="140" height="22" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="220" y="241" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">CLOVERLAND PARK</text>',
      sky("lfs2", "#5aa8e8", "#d9f0ff"));
  }

  /* 3. Worthing High School, Kelly green, gold and black */
  function lfworthing() {
    const glass = Array.from({ length: 8 }, (_, i) => '<rect x="' + (150 + i * 24) + '" y="70" width="20" height="96" fill="#7fb7d6" opacity=".85"/>').join("");
    const brick = '<rect x="40" y="96" width="110" height="100" fill="#a5523a"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M40 ' + (106 + r * 10) + 'h110" stroke="#8a4230" stroke-width="1"/>').join("") +
      '<rect x="342" y="96" width="40" height="100" fill="#a5523a"/>';
    const banner = (x, c1, c2, t) => '<rect x="' + x + '" y="104" width="22" height="58" fill="' + c1 + '" stroke="' + c2 + '" stroke-width="2"/><text x="' + (x + 11) + '" y="137" text-anchor="middle" transform="rotate(-90 ' + (x + 11) + ' 133)" ' + font + ' font-size="9" fill="' + c2 + '">' + t + '</text>';
    const flag = '<rect x="22" y="40" width="4" height="156" fill="#ccc"/><g class="lf-flag"><rect x="26" y="42" width="44" height="26" fill="' + KELLY + '"/><rect x="26" y="52" width="44" height="6" fill="' + GOLD + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lfs3)"/>' + '<g class="lf-cloud">' + cloud(300, 30, .8) + '</g>' +
      brick + '<rect x="150" y="60" width="192" height="136" fill="#d8d2c4"/>' + glass + '<rect x="150" y="166" width="192" height="30" fill="#c9c1b0"/>' +
      '<rect x="150" y="54" width="192" height="14" fill="' + KELLY + '"/><text x="246" y="65" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" fill="' + GOLD + '">WORTHING HIGH SCHOOL</text>' +
      banner(58, KELLY, GOLD, "COLTS") + banner(88, BLACK, GOLD, "PRIDE") + banner(118, GOLD, BLACK, "SUNNYSIDE") +
      '<rect x="226" y="172" width="40" height="24" fill="#2b3a44"/>' + flag +
      '<rect x="0" y="196" width="400" height="64" fill="#6fae4f"/><rect x="0" y="232" width="400" height="28" fill="#5c5d63"/>' + oak(370, 186, .6) +
      '<rect x="100" y="206" width="200" height="20" rx="3" fill="' + BLACK + '"/><text x="200" y="220" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">HOME OF THE COLTS · SCOTT ST</text>',
      sky("lfs3", "#79b8ea", "#f4f0e0"));
  }

  /* 4. Game Over: an arcade cabinet */
  function lfarcade() {
    const px = (s, x0, y0, c, cls) => { /* tiny pixel letters made of rects */
      const F = { G: ["111", "100", "101", "101", "111"], A: ["111", "101", "111", "101", "101"], M: ["101", "111", "111", "101", "101"], E: ["111", "100", "110", "100", "111"], O: ["111", "101", "101", "101", "111"], V: ["101", "101", "101", "101", "010"], R: ["110", "101", "110", "101", "101"], " ": ["000", "000", "000", "000", "000"] };
      let o = '<g class="' + (cls || "") + '" fill="' + c + '">'; [...s].forEach((ch, k) => (F[ch] || F[" "]).forEach((row, r) => [...row].forEach((b, q) => { if (b === "1") o += '<rect x="' + (x0 + k * 16 + q * 4) + '" y="' + (y0 + r * 4) + '" width="4" height="4"/>'; })));
      return o + '</g>';
    };
    const cab = '<path d="M120 30h160l10 40v170h-180v-170z" fill="#1d6b2c" stroke="#0b3a14" stroke-width="3"/><rect x="128" y="36" width="144" height="26" rx="3" fill="#111"/>' +
      '<text x="200" y="55" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="' + GOLD + '">FREESTYLE KING</text>' +
      '<rect x="132" y="70" width="136" height="96" rx="4" fill="#06120a" stroke="#555" stroke-width="3"/>' +
      px("GAME", 172, 84, "#ff4f4f", "lf-glow") + px("OVER", 172, 108, "#ff4f4f", "lf-glow") +
      '<text x="200" y="146" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '" class="lf-blink">INSERT COIN</text><text x="200" y="160" text-anchor="middle" ' + font + ' font-size="7" fill="#7fe0a0">HI-SCORE  FLIP</text>' +
      '<path d="M116 170h168l12 26h-192z" fill="#155221" stroke="#0b3a14" stroke-width="2"/><rect x="150" y="178" width="6" height="12" fill="#ddd"/><circle cx="153" cy="176" r="6" fill="#e74c3c"/>' +
      '<circle cx="210" cy="184" r="5" fill="' + GOLD + '"/><circle cx="226" cy="184" r="5" fill="#3498db"/><circle cx="242" cy="184" r="5" fill="#fff"/>' +
      '<rect x="186" y="208" width="28" height="14" rx="2" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/><rect x="198" y="211" width="4" height="8" fill="' + GOLD + '" class="lf-blink"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lfs4)"/>' +
      '<path d="M0 240h400" stroke="#2a2a35" stroke-width="40"/>' + [0, 1, 2, 3, 4, 5].map(i => '<path d="M' + (i * 80) + ' 220l-30 40" stroke="#3a3a48" stroke-width="2"/>').join("") +
      '<path d="M132 70l-60 170h256l-60 -170z" fill="#ff4f4f" opacity=".06"/>' + cab +
      '<g class="lf-coin"><circle cx="70" cy="200" r="9" fill="' + GOLD + '" stroke="#b8860b" stroke-width="2"/></g><g class="lf-coin lf-c3"><circle cx="330" cy="196" r="9" fill="' + GOLD + '" stroke="#b8860b" stroke-width="2"/></g>',
      sky("lfs4", "#07060f", "#1d1430"));
  }

  /* 5. Hickok Ln and Scott St */
  function lfcorner() {
    const skyline = '<g fill="#7d8fa3" opacity=".9"><rect x="250" y="70" width="16" height="50"/><rect x="270" y="58" width="14" height="62"/><rect x="306" y="66" width="18" height="54"/><rect x="330" y="80" width="14" height="40"/></g>' +
      '<path d="M284 120V50q0 -14 11 -20q11 6 11 20v70z" fill="#3e7f7a"/><path d="M288 120V52q0 -10 7 -16" stroke="#9fd9d2" stroke-width="2" fill="none"/>' +
      '<path d="M120 200L262 120h16L230 200z" fill="#6a6a70"/>';
    const wall = '<rect x="0" y="118" width="210" height="100" fill="#c9c0a8"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (126 + r * 10) + 'h210" stroke="#ada386" stroke-width="1"/>').join("") +
      tag("LIL' FLIP", 12, 176, 40, GREEN, -6) + tag("CLOVER G'S", 30, 206, 18, GOLD, -4) + clover(156, 196, 1.5, GREEN) +
      '<circle class="lf-sp" cx="200" cy="140" r="3" fill="' + GREEN + '"/><circle class="lf-sp lf-sp2" cx="206" cy="150" r="2.5" fill="' + GREEN + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lfs5)"/>' + skyline +
      '<rect x="0" y="150" width="400" height="70" fill="#6a9a4a"/>' + oak(380, 168, .55) + wall +
      '<rect x="0" y="218" width="400" height="42" fill="#4e4f55"/><path d="M0 242h400" stroke="#f2c200" stroke-width="2.5" stroke-dasharray="20 14"/>' +
      '<rect x="262" y="116" width="6" height="106" fill="#6b7178"/>' + sign(206, 118, 120, "HICKOK LN") + sign(214, 144, 104, "SCOTT ST"),
      sky("lfs5", "#7fb8e8", "#f6dcb8"));
  }

  window.SCENES = { lfstation: lfstation, lfpark: lfpark, lfworthing: lfworthing, lfarcade: lfarcade, lfcorner: lfcorner };
})();
