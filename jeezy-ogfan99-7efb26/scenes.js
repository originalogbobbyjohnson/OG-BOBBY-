/* jeezy scenes (Regions tab: Atlanta; "I put on for my city" - Eastside, Southside, Westside all meet downtown; raised in Macon). CSS classes prefixed jz- (the page's own anim-train is kept).
   1 Five Points station, MARTA's hub where all four lines cross (Red, Gold, Blue, Green): underground platform, coffered concrete ceiling, a silver train sliding in.
   2 Sweet Auburn: historic Ebenezer Baptist Church, red brick with its bell tower and the tall neon sign ("My President": "he said that he had a dream").
   3 The Fox Theatre on Peachtree St on a rare Atlanta snow day (The Snowman): cream-and-tan Moorish facade, onion-dome minarets, marquee lights, snow falling.
   4 Macon, where he came up as a teen: the City Auditorium's big green copper dome over its columned drum.
   5 Peachtree St and Auburn Ave: green signs, JEEZY tagged on the wall, a blue sports car rolling by ("my Lambo's blue"), 191 Peachtree's twin crowns behind.
   400 x 260 SVGs. No logos, no faces, no digits drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jzflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.jz-flk{animation:jzflick 2.4s infinite}.jz-flk2{animation-delay:.8s}' +
    '@keyframes jzneon{0%,100%{opacity:1}60%{opacity:.55}62%{opacity:1}64%{opacity:.4}66%{opacity:1}}.jz-neon{animation:jzneon 3.2s infinite}' +
    '@keyframes jzsnow{from{transform:translateY(-30px)}to{transform:translateY(280px)}}.jz-snow{animation:jzsnow 6s linear infinite}.jz-snow2{animation-duration:8s;animation-delay:-3s}.jz-snow3{animation-duration:7s;animation-delay:-5s}' +
    '@keyframes jzbulb{0%,100%{opacity:1}50%{opacity:.25}}.jz-bulb{animation:jzbulb .8s steps(1) infinite}.jz-bulb2{animation-delay:.4s}' +
    '@keyframes jzbird{0%{transform:translate(0,0)}100%{transform:translate(440px,-20px)}}.jz-bird{animation:jzbird 12s linear infinite}.jz-bird2{animation-delay:-6s}' +
    '@keyframes jzflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.jz-flag{transform-box:fill-box;transform-origin:0 50%;animation:jzflag 1.2s ease-in-out infinite}' +
    '@keyframes jzcar{from{transform:translateX(-160px)}to{transform:translateX(560px)}}.jz-car{animation:jzcar 6s linear infinite}' +
    '@keyframes jzspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jz-sp{animation:jzspray 1.4s ease-out infinite}.jz-sp2{animation-delay:.45s}' +
    '@keyframes jzglow{0%,100%{opacity:.35}50%{opacity:.85}}.jz-glow{animation:jzglow 3s ease-in-out infinite}.jz-glow2{animation-delay:-1.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const pill = (x, y, w, txt, c, tc) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="9" fill="' + c + '"/><text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="' + (tc || "#fff") + '">' + txt + '</text>';
  const snow = (n, seed) => Array.from({ length: n }, (_, i) => '<circle class="jz-snow' + (i % 3 === 1 ? " jz-snow2" : i % 3 === 2 ? " jz-snow3" : "") + '" cx="' + ((i * 53 + seed) % 400) + '" cy="' + ((i * 37) % 60 - 40) + '" r="' + (1.2 + (i % 3) * .7) + '" fill="#fff" opacity=".9"/>').join("");
  const BLUE = "#3fa9ff", GOLD = "#e6c35c", RED = "#ff4d4d";

  /* 1. Five Points: underground platform, coffered concrete ceiling, silver MARTA train sliding in */
  function jzstation() {
    const coffers = Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 42 + 2) + '" y="6" width="36" height="22" fill="#5a5852"/><rect x="' + (i * 42 + 8) + '" y="10" width="24" height="14" fill="#4a4843"/>').join("");
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="112" width="34" height="20" rx="3" fill="#1d2731"/>').join("");
    const train = '<g class="anim-train"><path d="M20 104h312q24 0 30 28v26H20z" fill="#dfe3e8" stroke="#7d868f" stroke-width="2"/>' + wins +
      '<rect x="20" y="138" width="342" height="5" fill="#0075b2"/><rect x="20" y="143" width="342" height="3" fill="#f39a1e"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (96 + i * 92) + '" y="110" width="4" height="46" fill="#aeb6be"/>').join("") +
      '<path d="M332 108q22 4 28 24h-28z" fill="#1d2731"/><circle cx="354" cy="150" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#3a3935"/>' + coffers +
      '<rect x="0" y="28" width="400" height="6" fill="#2a2926"/>' +
      [70, 200, 330].map(x => '<g class="jz-flk' + (x === 200 ? " jz-flk2" : "") + '"><rect x="' + (x - 30) + '" y="36" width="60" height="4" fill="#fff3c4"/></g>').join("") +
      '<rect x="0" y="40" width="400" height="66" fill="#6b6860"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 46 + 6) + '" y="46" width="34" height="56" fill="#76736a"/>').join("") +
      [40, 150, 260, 370].map(x => '<rect x="' + (x - 7) + '" y="40" width="14" height="66" fill="#8a877c"/>').join("") +
      train +
      '<rect x="0" y="158" width="400" height="6" fill="#f2c200"/><rect x="0" y="164" width="400" height="26" fill="#9c988c"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#4a4842"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 46) + '" y="242" width="30" height="3" fill="#f2f2f2" opacity=".5"/>').join("") +
      '<rect x="56" y="196" width="288" height="44" rx="3" fill="#111"/><text x="70" y="216" ' + font + ' font-size="17" fill="#fff">Five Points</text>' +
      pill(70, 220, 38, "RED", "#ce242b") + pill(112, 220, 42, "GOLD", "#d4a723", "#111") + pill(158, 220, 42, "BLUE", "#0075b2") + pill(204, 220, 50, "GREEN", "#009d4b") +
      '<text x="330" y="216" text-anchor="end" ' + font + ' font-size="9" fill="#cfcfcf">ALL LINES</text><text x="330" y="232" text-anchor="end" ' + font + ' font-size="9" fill="#cfcfcf">MEET HERE</text>',
      "");
  }

  /* 2. Sweet Auburn: Ebenezer Baptist Church, red brick, bell tower, the tall neon sign */
  function jzauburn() {
    const bricks = Array.from({ length: 16 }, (_, i) => '<path d="M96 ' + (100 + i * 8) + 'h210" stroke="#6e2a1c" stroke-width="1"/>').join("");
    const arch = (x, y, w, h) => '<path d="M' + x + ' ' + (y + h) + 'v-' + (h - w / 2) + 'q' + (w / 2) + ' -' + (w * .8) + ' ' + w + ' 0v' + (h - w / 2) + 'z" fill="#2a1a2e"/><path d="M' + (x + 2) + ' ' + (y + h - 2) + 'v-' + (h - w / 2 - 2) + 'q' + (w / 2 - 2) + ' -' + (w * .7) + ' ' + (w - 4) + ' 0v' + (h - w / 2 - 2) + 'z" fill="url(#jzg)" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jzs2)"/>' +
      '<g class="jz-bird"><path d="M0 30q5 -5 10 0q5 -5 10 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g><g class="jz-bird jz-bird2"><path d="M-40 40q4 -4 8 0q4 -4 8 0" stroke="#2a2a2a" stroke-width="1.6" fill="none"/></g>' +
      '<rect x="0" y="150" width="96" height="78" fill="#c9b79a"/><rect x="10" y="164" width="16" height="22" fill="#5b6f84"/><rect x="40" y="164" width="16" height="22" fill="#5b6f84"/><rect x="70" y="164" width="16" height="22" fill="#5b6f84"/>' +
      '<rect x="306" y="140" width="94" height="88" fill="#a88a6a"/><rect x="316" y="154" width="16" height="22" fill="#5b6f84"/><rect x="346" y="154" width="16" height="22" fill="#5b6f84"/><rect x="376" y="154" width="16" height="22" fill="#5b6f84"/>' +
      '<rect x="96" y="96" width="210" height="132" fill="#9a3a26"/>' + bricks +
      '<path d="M150 96l76 -40l76 40z" fill="#5a2418"/><path d="M150 96h152" stroke="#e8dcc4" stroke-width="3"/>' +
      '<rect x="100" y="40" width="44" height="188" fill="#8f3523"/>' + Array.from({ length: 22 }, (_, i) => '<path d="M100 ' + (46 + i * 8) + 'h44" stroke="#6e2a1c" stroke-width="1"/>').join("") +
      '<path d="M96 40h52v-8h-52z" fill="#e8dcc4"/>' + [98, 110, 122, 134].map(x => '<rect x="' + x + '" y="24" width="8" height="10" fill="#e8dcc4"/>').join("") +
      arch(112, 56, 20, 30) + arch(112, 120, 20, 30) +
      arch(190, 110, 30, 50) + arch(240, 110, 30, 50) +
      '<rect x="214" y="180" width="34" height="48" fill="#3a2214"/><path d="M214 180q17 -20 34 0z" fill="#3a2214"/><path d="M231 166v48" stroke="#e8dcc4" stroke-width="0"/>' +
      '<rect x="206" y="226" width="50" height="5" fill="#d8cdb8"/><rect x="198" y="231" width="66" height="5" fill="#c8bda8"/>' +
      '<rect x="156" y="104" width="24" height="96" rx="3" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<g class="jz-neon">' + "EBENEZER".split("").map((ch, i) => '<text x="168" y="' + (116 + i * 11) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#7fd0ff">' + ch + '</text>').join("") + '</g>' +
      '<rect x="0" y="228" width="400" height="32" fill="#7d7a72"/><rect x="0" y="236" width="400" height="2" fill="#a9a59a"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#fff8e8" opacity=".95">SWEET AUBURN · THE DREAM STARTED HERE</text>',
      sky("jzs2", "#6fa8e8", "#f6e2c2") + '<linearGradient id="jzg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a6ad8"/><stop offset=".5" stop-color="#e6c35c"/><stop offset="1" stop-color="#c8463a"/></linearGradient>');
  }

  /* 3. Fox Theatre on Peachtree in the snow: cream and tan Moorish facade, onion domes, marquee lights */
  function jzfox() {
    const stripes = Array.from({ length: 12 }, (_, i) => '<path d="M110 ' + (92 + i * 10) + 'h180" stroke="#c9a77a" stroke-width="3" opacity=".7"/>').join("");
    const minaret = x => '<rect x="' + (x - 9) + '" y="56" width="18" height="140" fill="#e7d6b6"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (x - 9) + ' ' + (62 + i * 13) + 'h18" stroke="#c9a77a" stroke-width="2"/>').join("") +
      '<path d="M' + (x - 12) + ' 56q12 -34 24 0z" fill="#c98a3a"/><path d="M' + x + ' 22v-8" stroke="#c98a3a" stroke-width="2"/><rect x="' + (x - 12) + '" y="54" width="24" height="4" fill="#9a6a2a"/>';
    const bulbs = Array.from({ length: 22 }, (_, i) => '<circle class="jz-bulb' + (i % 2 ? " jz-bulb2" : "") + '" cx="' + (128 + i * 6.8) + '" cy="171" r="1.8" fill="#fff2a8"/>').join("") +
      Array.from({ length: 22 }, (_, i) => '<circle class="jz-bulb' + (i % 2 ? "" : " jz-bulb2") + '" cx="' + (128 + i * 6.8) + '" cy="193" r="1.8" fill="#fff2a8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jzs3)"/>' +
      '<rect x="0" y="120" width="96" height="110" fill="#5d5a66"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (8 + (i % 4) * 22) + '" y="' + (132 + Math.floor(i / 4) * 30) + '" width="12" height="16" fill="#f5d98a" opacity=".7"/>').join("") +
      '<rect x="304" y="100" width="96" height="130" fill="#4f4c58"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (312 + (i % 4) * 22) + '" y="' + (112 + Math.floor(i / 4) * 30) + '" width="12" height="16" fill="#f5d98a" opacity=".7"/>').join("") +
      '<rect x="100" y="86" width="200" height="144" fill="#ead9b8"/>' + stripes +
      '<path d="M100 86h200l-8 -10h-184z" fill="#c9a77a"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (112 + i * 20) + ' 76l6 -8l6 8z" fill="#c9a77a"/>').join("") +
      minaret(100) + minaret(300) +
      [128, 176, 224].map(x => '<path d="M' + x + ' 150v-26q24 -28 48 0v26z" fill="#6a4a2a"/><path d="M' + (x + 4) + ' 150v-24q20 -22 40 0v24z" fill="#f5c46a" opacity=".55"/>').join("") +
      '<rect x="120" y="164" width="160" height="36" rx="2" fill="#7a2a1e" stroke="#c98a3a" stroke-width="2"/>' + bulbs +
      '<rect x="134" y="176" width="132" height="12" fill="#f8efd8"/>' +
      '<rect x="150" y="200" width="100" height="30" fill="#3a2214"/>' + [162, 184, 206, 228].map(x => '<rect x="' + x + '" y="204" width="16" height="26" fill="#f5d98a" opacity=".6"/>').join("") +
      '<rect x="0" y="230" width="400" height="30" fill="#e9eef5"/><path d="M0 230h400" stroke="#fff" stroke-width="3"/>' +
      '<path d="M98 56q2 -4 4 0M298 56q2 -4 4 0" stroke="#fff" stroke-width="3"/><rect x="100" y="84" width="200" height="3" fill="#fff"/><rect x="120" y="162" width="160" height="3" fill="#fff"/>' +
      snow(46, 7) +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#38425a">PEACHTREE ST · A SNOW DAY IN THE A</text>',
      sky("jzs3", "#7b8698", "#d8dde6"));
  }

  /* 4. Macon City Auditorium: green copper dome over a columned drum */
  function jzmacon() {
    const cols = Array.from({ length: 11 }, (_, i) => '<rect x="' + (96 + i * 20) + '" y="150" width="8" height="58" fill="#efe6d2"/><rect x="' + (94 + i * 20) + '" y="148" width="12" height="4" fill="#d9ceb6"/>').join("");
    const ribs = Array.from({ length: 9 }, (_, i) => { const x = 110 + i * 22.5; return '<path d="M' + x + ' 138Q' + (200 + (x - 200) * .45) + ' 66 200 58" stroke="#3f8a76" stroke-width="2" fill="none"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jzs4)"/>' +
      '<g class="jz-bird"><path d="M0 34q5 -5 10 0q5 -5 10 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>' +
      Array.from({ length: 8 }, (_, i) => '<ellipse cx="' + (i * 56 + 10) + '" cy="200" rx="34" ry="26" fill="' + (i % 2 ? "#3d6a3a" : "#4a7a42") + '"/>').join("") +
      '<path d="M90 140Q200 20 310 140z" fill="#5fae96"/>' + ribs + '<path d="M90 140Q200 20 310 140" stroke="#2f6a5a" stroke-width="3" fill="none"/>' +
      '<path d="M120 100Q200 40 280 100" stroke="#8fd6c0" stroke-width="3" fill="none" opacity=".5"/>' +
      '<rect x="188" y="44" width="24" height="16" fill="#efe6d2"/><path d="M186 44q14 -14 28 0z" fill="#5fae96"/>' +
      '<rect x="199" y="16" width="2" height="18" fill="#555"/><path class="jz-flag" d="M201 16h16l-4 5l4 5h-16z" fill="#c8463a"/>' +
      '<rect x="84" y="138" width="232" height="12" fill="#d9ceb6"/>' + cols + '<rect x="90" y="150" width="220" height="58" fill="#c9b796" opacity=".35"/>' +
      '<rect x="84" y="206" width="232" height="8" fill="#d9ceb6"/><rect x="70" y="214" width="260" height="14" fill="#a9a08a"/>' +
      [150, 200, 250].map(x => '<rect x="' + (x - 9) + '" y="176" width="18" height="30" fill="#3a2a1a"/>').join("") +
      '<rect x="0" y="228" width="400" height="32" fill="#6f6a60"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff8e8" opacity=".95">MACON · THE COPPER DOME · WHERE HE CAME UP</text>',
      sky("jzs4", "#f2a65a", "#fbe3b8"));
  }

  /* 5. Peachtree St and Auburn Ave: green signs, JEEZY tagged, a blue sports car, 191 Peachtree's twin crowns behind */
  function jzcorner() {
    const tower = '<rect x="196" y="40" width="60" height="96" fill="#3a3550"/><rect x="200" y="24" width="20" height="18" fill="#3a3550"/><rect x="232" y="24" width="20" height="18" fill="#3a3550"/>' +
      '<path d="M200 24l10 -10l10 10zM232 24l10 -10l10 10z" fill="' + GOLD + '"/>' +
      '<rect class="jz-glow" x="204" y="28" width="12" height="10" fill="#ffe6a0"/><rect class="jz-glow jz-glow2" x="236" y="28" width="12" height="10" fill="#ffe6a0"/>' +
      Array.from({ length: 9 }, (_, k) => '<rect class="jz-glow' + (k % 2 ? " jz-glow2" : "") + '" x="200" y="' + (46 + k * 10) + '" width="52" height="2" fill="#ffd98a"/>').join("");
    const others = [[110, 90, 30], [146, 70, 22], [276, 84, 26], [310, 100, 34]].map(t => '<rect x="' + t[0] + '" y="' + t[1] + '" width="' + t[2] + '" height="' + (136 - t[1]) + '" fill="#2a2640"/>' +
      Array.from({ length: Math.floor((136 - t[1]) / 12) }, (_, k) => '<rect class="jz-glow' + (k % 2 ? " jz-glow2" : "") + '" x="' + (t[0] + 4) + '" y="' + (t[1] + 6 + k * 12) + '" width="' + (t[2] - 8) + '" height="2" fill="#ffd98a"/>').join("")).join("");
    const car = '<g class="jz-car"><path d="M0 246v-8l18 -4l22 -12h44l22 12l20 4v8z" fill="' + BLUE + '"/><path d="M44 224h36l14 10h-62z" fill="#123"/>' +
      '<rect x="0" y="238" width="126" height="2" fill="#d8f0ff"/>' + [24, 100].map(cx => '<circle cx="' + cx + '" cy="247" r="7" fill="#111"/><circle cx="' + cx + '" cy="247" r="4" fill="' + BLUE + '"/>').join("") + '<circle cx="124" cy="240" r="2.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jzs5)"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + ((i * 67) % 400) + '" cy="' + ((i * 19) % 30 + 6) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      others + tower +
      '<rect x="0" y="134" width="400" height="90" fill="#2c2c34"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (142 + i * 8) + 'h400" stroke="#1e1e26" stroke-width="1"/>').join("") +
      Array.from({ length: 11 }, (_, i) => Array.from({ length: 10 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (134 + i * 8) + 'v8" stroke="#1e1e26" stroke-width="1"/>').join("")).join("") +
      tag("JEEZY", 26, 194, 52, BLUE, -6) + tag("JEAH!", 196, 168, 24, GOLD, -4) + tag("CTE", 34, 152, 18, "#f2f2f2", -4) + tag("JIZZLE", 60, 218, 20, RED, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55534f"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(286, 98, 108, "Peachtree St") + sign(282, 124, 116, "Auburn Ave") +
      car +
      '<g class="jz-sp"><circle cx="164" cy="172" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="jz-sp jz-sp2"><circle cx="170" cy="166" r="2" fill="' + BLUE + '" opacity=".6"/></g>' +
      '<text x="200" y="256" text-anchor="middle" ' + font + ' font-size="9" fill="#e8e6f0" opacity=".9">PEACHTREE ST · AUBURN AVE · DOWNTOWN ATLANTA</text>',
      sky("jzs5", "#0e1226", "#3a3a6a"));
  }

  window.SCENES = { jzstation: jzstation, jzauburn: jzauburn, jzfox: jzfox, jzmacon: jzmacon, jzcorner: jzcorner };
})();
