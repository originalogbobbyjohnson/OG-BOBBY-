/* canon scenes (Regions tab: Chicago; Aaron "Canon" McCain, born Mar 1, 1989 in Chicago ("Chicago-bred/Atlanta-based", his own bio) - he reps the West Side on "My City":
   "the brothas on Cermak, the brothers on Ogden, them brothers up in Lawndale, the brothas on Karlov, brothas on Pulaski"). CSS classes prefixed cn- (the page's own anim-train is kept).
   1 The CTA Pink Line pulling into Pulaski, up on the steel 'L' over Pulaski Rd by Cermak on the West Side, the black station sign with the Pink bullet.
   2 "I remember them hot days with them fire hydrants, water all up in the street": a West Side two-flat block, the hydrant blasting an arc of water, a Cadillac rolling by.
   3 "I remember that man with ice cream rolling down the block with a cart ... corn in a cup and fruit man": the carts at Douglass Park, the North Lawndale park, umbrellas, bells ringing.
   4 Moody Bible Institute on N LaSalle, where his mom worked and introduced him to God: red-brick campus, the arched gateway, students crossing, the 'L' in the distance.
   5 W Cermak Rd and S Karlov Ave: green signs, CANON tagged with LOOSE CANON, RMG and CHI TOWN, the downtown skyline far off to the east at dusk. Every 9 drawn with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cnglow{0%,100%{opacity:.45}50%{opacity:1}}.cn-glow{animation:cnglow 2.6s ease-in-out infinite}.cn-g2{animation-delay:-1.3s}' +
    '@keyframes cnsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.cn-sw{transform-box:fill-box;transform-origin:50% 100%;animation:cnsway 3.6s ease-in-out infinite}.cn-sw2{animation-delay:-1.8s}' +
    '@keyframes cnspray{0%{transform:translate(0,0);opacity:1}100%{transform:translate(70px,40px);opacity:0}}.cn-dropl{animation:cnspray 1.1s linear infinite}' +
    '@keyframes cncar{0%{transform:translateX(-140px)}100%{transform:translateX(480px)}}.cn-car{animation:cncar 7s linear infinite;animation-delay:-2s}' +
    '@keyframes cncart{0%,100%{transform:translateX(0)}50%{transform:translateX(26px)}}.cn-cart{animation:cncart 5s ease-in-out infinite}' +
    '@keyframes cnbell{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.cn-bell{transform-box:fill-box;transform-origin:50% 0%;animation:cnbell .9s ease-in-out infinite}' +
    '@keyframes cnwalk{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.cn-walk{animation:cnwalk 14s linear infinite}.cn-w2{animation-delay:-7s}' +
    '@keyframes cnsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.cn-sp{animation:cnsp 1.4s ease-out infinite}.cn-sp2{animation-delay:.5s}' +
    '@keyframes cndrip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(24px);opacity:0}}.cn-dr{animation:cndrip 1.9s ease-in infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const PINK = "#e27ea6", ORANGE = "#ff8c1a", CHIBLUE = "#41b6e6", STAR = "#e4002b";
  const star = (cx, cy, r, c) => { let d = ""; for (let i = 0; i < 12; i++) { const a = Math.PI / 6 * i - Math.PI / 2, rr = i % 2 ? r * .45 : r; d += (i ? "L" : "M") + (cx + rr * Math.cos(a)).toFixed(1) + " " + (cy + rr * Math.sin(a)).toFixed(1); } return '<path d="' + d + 'z" fill="' + c + '"/>'; };
  const tree = (x, y, s, d) => '<g class="cn-sw' + (d ? " cn-sw2" : "") + '"><rect x="' + (x - 3 * s) + '" y="' + (y - 30 * s) + '" width="' + (6 * s) + '" height="' + (30 * s) + '" fill="#5a4030"/><circle cx="' + x + '" cy="' + (y - 40 * s) + '" r="' + (22 * s) + '" fill="#3a7a3a"/><circle cx="' + (x - 14 * s) + '" cy="' + (y - 32 * s) + '" r="' + (14 * s) + '" fill="#2f6a30"/><circle cx="' + (x + 14 * s) + '" cy="' + (y - 33 * s) + '" r="' + (14 * s) + '" fill="#347234"/></g>';
  const twoflat = (x, y, c) => '<g><rect x="' + x + '" y="' + (y - 86) + '" width="70" height="86" fill="' + c + '"/><rect x="' + (x - 3) + '" y="' + (y - 92) + '" width="76" height="8" fill="#6a5a4a"/>' +
    [0, 1].map(r => [0, 1, 2].map(k => '<rect x="' + (x + 8 + k * 20) + '" y="' + (y - 78 + r * 36) + '" width="13" height="22" fill="#2a3040"/><rect x="' + (x + 6 + k * 20) + '" y="' + (y - 80 + r * 36) + '" width="17" height="3" fill="#d8cfbf"/>').join("")).join("") +
    '<rect x="' + (x + 24) + '" y="' + (y - 18) + '" width="22" height="6" fill="#bdb3a3"/></g>';

  /* 0. CTA Pink Line at Pulaski, up on the 'L' over Pulaski Rd */
  function cnstop() {
    const car = (x) => '<rect x="' + x + '" y="92" width="150" height="46" rx="4" fill="#d9dde2" stroke="#7a8088" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + 10 + i * 27) + '" y="100" width="20" height="18" rx="2" fill="#2a3340"/>').join("") +
      '<rect x="' + x + '" y="124" width="150" height="5" fill="' + PINK + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cn0)"/>' +
      '<g fill="#8a6a5a">' + [0, 70, 300].map((x, i) => '<rect x="' + x + '" y="' + (150 + (i % 2) * 6) + '" width="62" height="70"/>').join("") + '</g>' +
      '<g fill="#ffe08a" class="cn-glow">' + [12, 36, 82, 106, 314, 338].map(x => '<rect x="' + x + '" y="166" width="10" height="12"/>').join("") + '</g>' +
      /* steel structure */
      '<rect x="0" y="140" width="400" height="14" fill="#5a5f66"/><rect x="0" y="152" width="400" height="5" fill="#3d4147"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="156" width="10" height="84" fill="#4a4f56"/><path d="M' + (x - 14) + ' 156l14 22M' + (x + 24) + ' 156l-14 22" stroke="#4a4f56" stroke-width="5"/>').join("") +
      '<g class="anim-train">' + car(20) + car(176) + '<circle cx="24" cy="128" r="4" fill="#fff6c2"/></g>' +
      '<rect x="0" y="240" width="400" height="20" fill="#56565c"/><path d="M0 250h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 10"/>' +
      '<rect x="236" y="14" width="156" height="44" rx="3" fill="#111"/>' +
      '<rect x="246" y="22" width="40" height="28" rx="4" fill="' + PINK + '"/><text x="266" y="41" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">PINK</text>' +
      '<text x="296" y="43" ' + font + ' font-size="17" fill="#fff">Pulaski</text>',
      sky("cn0", "#5f9fd6", "#cfe4f2"));
  }

  /* 1. Hot day, the fire hydrant open on a West Side block */
  function cnhydrant() {
    const drops = Array.from({ length: 12 }, (_, i) => '<circle class="cn-dropl" style="animation-delay:' + (-(i * .09)).toFixed(2) + 's" cx="' + (196 + (i % 3) * 3) + '" cy="' + (190 - (i % 4) * 3) + '" r="2.4" fill="#bfe8ff"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cn1)"/>' +
      '<circle cx="340" cy="44" r="24" fill="#fff2a8" class="cn-glow"/>' +
      twoflat(10, 196, "#a8583e") + twoflat(90, 196, "#c9a27a") + twoflat(250, 196, "#8e4a36") + twoflat(330, 196, "#b77a52") +
      tree(180, 196, 1.1, 0) +
      '<rect x="0" y="196" width="400" height="12" fill="#bdb6a8"/><rect x="0" y="208" width="400" height="52" fill="#4a4a50"/>' +
      '<path d="M206 186q50 -36 110 20" stroke="#bfe8ff" stroke-width="6" fill="none" opacity=".75"/><path d="M206 186q40 -24 90 26" stroke="#e6f6ff" stroke-width="3" fill="none" opacity=".8"/>' +
      drops +
      '<ellipse cx="300" cy="226" rx="60" ry="8" fill="#7fb8d8" opacity=".55"/>' +
      /* hydrant */
      '<rect x="186" y="178" width="20" height="26" rx="3" fill="#d4c21a"/><rect x="182" y="174" width="28" height="6" rx="2" fill="#b8a614"/><path d="M188 174q8 -12 16 0z" fill="#d4c21a"/><rect x="204" y="182" width="8" height="8" fill="#b8a614"/><rect x="182" y="202" width="28" height="5" fill="#8a7a10"/>' +
      '<g class="cn-car"><rect x="0" y="222" width="80" height="20" rx="6" fill="#2a2a34"/><path d="M14 222l10 -12h32l12 12z" fill="#1c1c24"/><rect x="26" y="212" width="12" height="9" fill="#6a8aa8"/><rect x="42" y="212" width="12" height="9" fill="#6a8aa8"/><circle cx="18" cy="244" r="6" fill="#111"/><circle cx="62" cy="244" r="6" fill="#111"/><rect x="0" y="230" width="80" height="2" fill="#c0c0c8"/></g>',
      sky("cn1", "#6ab0e8", "#f6e2b2"));
  }

  /* 2. The carts in Douglass Park: ice cream, corn in a cup, the fruit man */
  function cnpark() {
    const umb = (x, c1, c2) => '<path d="M' + (x - 30) + ' 150q30 -30 60 0z" fill="' + c1 + '"/><path d="M' + (x - 30) + ' 150q15 -24 30 -30v30zM' + x + ' 120q15 6 30 30h-30z" fill="' + c2 + '"/><path d="M' + x + ' 150v26" stroke="#555" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cn2)"/>' +
      tree(40, 170, 1.4, 0) + tree(120, 168, 1.1, 1) + tree(300, 168, 1.2, 0) + tree(370, 170, 1.4, 1) +
      '<rect x="0" y="168" width="400" height="92" fill="#5a9a46"/><path d="M0 214q200 -20 400 0v46h-400z" fill="#c9b99a"/>' +
      '<rect x="150" y="20" width="100" height="20" rx="3" fill="#2f5a2e"/><text x="200" y="34" text-anchor="middle" ' + font + ' font-size="10" fill="#f4f1ea">DOUGLASS PARK</text>' +
      /* ice cream cart rolling */
      '<g class="cn-cart">' + umb(90, "#ff7aa8", "#fff") + '<rect x="64" y="176" width="54" height="34" rx="4" fill="#f4f4f4" stroke="#999" stroke-width="1.5"/><text x="91" y="197" text-anchor="middle" ' + font + ' font-size="9" fill="#e4002b">ICE CREAM</text>' +
      '<circle cx="72" cy="214" r="6" fill="#333"/><circle cx="110" cy="214" r="6" fill="#333"/><g class="cn-bell"><path d="M120 176v6" stroke="#888"/><path d="M116 182h8l-2 6h-4z" fill="#e2b33a"/></g></g>' +
      /* elote cart */
      umb(210, "#ffd23f", "#2f8a3a") + '<rect x="184" y="176" width="54" height="34" rx="4" fill="#3a6aa8"/><text x="211" y="191" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">CORN IN</text><text x="211" y="202" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">A CUP</text>' +
      '<rect x="244" y="188" width="10" height="14" fill="#fff8e0" stroke="#bbb"/><g class="cn-sp"><path d="M247 186q-3 -6 2 -12" stroke="#fff" stroke-width="1.5" fill="none" opacity=".7"/></g>' +
      '<circle cx="192" cy="214" r="6" fill="#333"/><circle cx="230" cy="214" r="6" fill="#333"/>' +
      /* fruit stand */
      umb(330, "#e4002b", "#fff") + '<rect x="302" y="176" width="56" height="34" rx="4" fill="#8a5a3a"/>' +
      [0, 1, 2, 3].map(i => '<circle cx="' + (312 + i * 12) + '" cy="182" r="5" fill="' + ["#ff8c1a", "#e4002b", "#ffd23f", "#6ac24a"][i] + '"/>').join("") +
      '<text x="330" y="203" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">FRUTA</text>',
      sky("cn2", "#7ab8ec", "#e8f3ff"));
  }

  /* 3. Moody Bible Institute on N LaSalle, where his mom worked */
  function cnmoody() {
    const wins = (x, y, cols, rows) => Array.from({ length: rows }, (_, r) => Array.from({ length: cols }, (_, c) => '<rect x="' + (x + c * 16) + '" y="' + (y + r * 20) + '" width="9" height="13" fill="#2a3346"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cn3)"/>' +
      '<g fill="#7a8494" opacity=".6"><rect x="10" y="40" width="30" height="80"/><rect x="350" y="30" width="34" height="90"/></g>' +
      '<rect x="20" y="70" width="120" height="132" fill="#9c4a32"/>' + wins(30, 82, 7, 5) +
      '<rect x="260" y="70" width="120" height="132" fill="#9c4a32"/>' + wins(270, 82, 7, 5) +
      /* arched gateway building */
      '<rect x="134" y="60" width="132" height="142" fill="#a85538"/><rect x="130" y="54" width="140" height="10" fill="#d8c8a8"/>' +
      '<path d="M168 202v-60q32 -40 64 0v60z" fill="#2a2a30"/><path d="M164 204v-62q36 -46 72 0v62" fill="none" stroke="#d8c8a8" stroke-width="5"/>' +
      '<rect x="146" y="74" width="108" height="16" fill="#d8c8a8"/><text x="200" y="86" text-anchor="middle" ' + font + ' font-size="10" fill="#5a2a1a">820 N LASALLE</text>' +
      wins(146, 98, 2, 1) + wins(234, 98, 2, 1) +
      '<rect x="0" y="202" width="400" height="14" fill="#c4bcac"/><rect x="0" y="216" width="400" height="44" fill="#4c4c52"/>' +
      [0, 1].map(i => '<g class="cn-walk' + (i ? " cn-w2" : "") + '"><circle cx="0" cy="182" r="5" fill="#3a2a22"/><rect x="-5" y="187" width="10" height="16" rx="3" fill="' + (i ? CHIBLUE : ORANGE) + '"/><rect x="-6" y="190" width="5" height="9" fill="#5a4a3a"/></g>').join("") +
      '<g class="cn-glow"><rect x="182" y="150" width="36" height="6" fill="#ffd98a" opacity=".6"/></g>',
      sky("cn3", "#8ab8e0", "#f2ede2"));
  }

  /* 4. W Cermak Rd and S Karlov Ave, skyline far off to the east */
  function cncorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#cn4)"/>' +
      '<g fill="#2a2440"><rect x="150" y="60" width="14" height="80"/><rect x="166" y="40" width="20" height="100"/><rect x="170" y="26" width="3" height="16"/><rect x="180" y="26" width="3" height="16"/><rect x="188" y="74" width="16" height="66"/><path d="M206 140V52l10 -14l10 14v88z"/><rect x="228" y="84" width="18" height="56"/><rect x="248" y="66" width="12" height="74"/></g>' +
      '<g fill="#ffd98a">' + [170, 196, 232, 252].map((x, i) => '<rect class="cn-glow' + (i % 2 ? " cn-g2" : "") + '" x="' + x + '" y="' + (70 + i * 10) + '" width="4" height="4"/>').join("") + '</g>' +
      '<rect x="0" y="124" width="300" height="96" fill="#7a3e2e"/>' +
      Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (134 + r * 11) + 'h300" stroke="#5e2e22" stroke-width="1.5"/>').join("") +
      '<rect x="0" y="124" width="300" height="10" fill="' + CHIBLUE + '" opacity=".85"/>' + [40, 110, 180, 250].map(x => star(x, 129, 4, STAR)).join("") +
      tag("CANON", 18, 182, 46, ORANGE, -7) + tag("LOOSE CANON", 190, 148, 14, CHIBLUE, -4) + tag("RMG", 214, 192, 20, "#fff", -3) + tag("CHI TOWN", 150, 212, 16, "#ff5a5a", -3) +
      '<g class="cn-dr"><rect x="48" y="184" width="3" height="10" fill="' + ORANGE + '"/></g><g class="cn-dr" style="animation-delay:-.9s"><rect x="118" y="182" width="3" height="10" fill="' + ORANGE + '"/></g>' +
      '<g class="cn-sp"><circle cx="280" cy="148" r="3" fill="#fff" opacity=".7"/></g><g class="cn-sp cn-sp2"><circle cx="286" cy="142" r="2" fill="#fff" opacity=".6"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#4c4c52"/><rect x="0" y="216" width="400" height="6" fill="#b9b3a6"/>' +
      '<g class="cn-car"><rect x="0" y="226" width="60" height="16" rx="5" fill="' + CHIBLUE + '"/><rect x="12" y="220" width="32" height="10" rx="3" fill="#2a7aa6"/><circle cx="12" cy="244" r="5" fill="#111"/><circle cx="48" cy="244" r="5" fill="#111"/></g>' +
      '<rect x="336" y="90" width="6" height="130" fill="#2f2f2f"/>' + sign(290, 92, 100, "W Cermak Rd") + sign(298, 118, 84, "S Karlov Ave"),
      sky("cn4", "#1c1c3e", "#e8743a"));
  }

  window.SCENES = { cnstop: cnstop, cnhydrant: cnhydrant, cnpark: cnpark, cnmoody: cnmoody, cncorner: cncorner };
})();
