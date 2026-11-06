/* ojays scenes (Regions tab: Philadelphia; Center City, the Philadelphia International stretch of S Broad St). CSS classes prefixed oj- (the page's own anim-train is kept).
   1 Suburban Station on SEPTA Regional Rail: the underground platform, purple RR stripe, a silver Silverliner sliding in (the Love Train).
   2 Canton, Ohio, their hometown: the Pro Football Hall of Fame's white football-shaped rotunda, the flags snapping.
   3 Cleveland, '63: the DJ booth of Eddie O'Jay, the radio man they named the group after: ON AIR light, a 45 spinning, VU needles.
   4 The Rock and Roll Hall of Fame on Lake Erie (inducted 2005): the glass pyramid and white tower, waves and gulls.
   5 S Broad St and Spruce St, the north end of Gamble and Huff Walk: green signs + the brown honorary sign, O'JAYS tagged on the brick, the Union League's brownstone up Broad behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ojglow{0%,100%{opacity:.45}50%{opacity:1}}.oj-glow{animation:ojglow 2.4s ease-in-out infinite}.oj-glow2{animation-delay:-1.2s}' +
    '@keyframes ojblink{0%,100%{opacity:1}50%{opacity:.35}}.oj-blink{animation:ojblink 1s steps(1) infinite}' +
    '@keyframes ojflag{0%,100%{transform:skewY(0deg) scaleX(1)}50%{transform:skewY(-6deg) scaleX(.9)}}.oj-flag{transform-box:fill-box;transform-origin:0% 50%;animation:ojflag 1.3s ease-in-out infinite}.oj-flag2{animation-delay:-.6s}' +
    '@keyframes ojspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.oj-spin{transform-box:fill-box;transform-origin:50% 50%;animation:ojspin 1.8s linear infinite}' +
    '@keyframes ojvu{0%,100%{transform:rotate(-30deg)}35%{transform:rotate(18deg)}60%{transform:rotate(-8deg)}80%{transform:rotate(26deg)}}.oj-vu{transform-box:fill-box;transform-origin:50% 100%;animation:ojvu 1.3s ease-in-out infinite}.oj-vu2{animation-delay:-.5s}' +
    '@keyframes ojwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.oj-wave{animation:ojwave 3s ease-in-out infinite}.oj-wave2{animation-delay:-1.5s}' +
    '@keyframes ojbird{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.oj-bird{animation:ojbird 14s linear infinite}.oj-bird2{animation-delay:-7s}' +
    '@keyframes ojcloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.oj-cloud{animation:ojcloud 30s linear infinite}' +
    '@keyframes ojnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.oj-note{animation:ojnote 3.2s linear infinite}.oj-n2{animation-delay:-1.1s}' +
    '@keyframes ojcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.oj-car{animation:ojcar 7s linear infinite}' +
    '@keyframes ojspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.oj-sp{animation:ojspray 1.4s ease-out infinite}.oj-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt, col) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="' + (col || "#0f6b3a") + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (txt.length > 16 ? 9.5 : 12) + '" fill="#fff">' + txt + '</text>';
  const GOLD = "#ffc83d", ORANGE = "#e4572e", BLUE = "#3fa7d6", RR = "#91456c";
  const cloud = (x, y) => '<g class="oj-cloud"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9" fill="#fff" opacity=".85"/><ellipse cx="' + (x + 16) + '" cy="' + (y - 6) + '" rx="16" ry="9" fill="#fff" opacity=".85"/></g>';
  const bird = (y, cls) => '<g class="oj-bird ' + cls + '"><path d="M0 ' + y + 'q5 -5 10 0q5 -5 10 0" fill="none" stroke="#3a3a4a" stroke-width="1.5"/></g>';

  /* 1. Suburban Station, Regional Rail */
  function ojstation() {
    const train = '<g class="anim-train"><rect x="20" y="102" width="340" height="90" rx="8" fill="#d2d6da" stroke="#80868c" stroke-width="2"/>' +
      [34, 80, 172, 218, 310].map((x, i) => '<rect x="' + x + '" y="114" width="34" height="24" rx="3" fill="#1d2630"/>').join("") +
      '<rect x="20" y="144" width="340" height="6" fill="' + RR + '"/><rect x="20" y="151" width="340" height="4" fill="' + BLUE + '"/>' +
      '<rect x="128" y="112" width="34" height="78" fill="#bfc4c8" stroke="#80868c"/><path d="M145 112v78" stroke="#80868c"/>' +
      '<rect x="266" y="112" width="34" height="78" fill="#bfc4c8" stroke="#80868c"/><path d="M283 112v78" stroke="#80868c"/>' +
      '<rect x="30" y="104" width="96" height="8" rx="2" fill="#111"/><text x="78" y="110.5" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb000">LOVE TRAIN &#183; ALL ABOARD</text>' +
      '<path d="M210 168c-6 -4 -8 -8 -6 -11c2 -2 5 -1 6 1c1 -2 4 -3 6 -1c2 3 0 7 -6 11z" fill="' + ORANGE + '"/>' +
      '<circle cx="350" cy="172" r="4" fill="#fff6c2" class="oj-glow"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#26262c"/>' +
      '<rect x="0" y="0" width="400" height="94" fill="#cfc8b8"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 46 + 8) + '" y="0" width="10" height="94" fill="#bdb5a3"/>').join("") +
      '<rect x="0" y="66" width="400" height="10" fill="' + RR + '"/>' +
      '<rect x="0" y="0" width="400" height="12" fill="#3a3a40"/>' + [60, 200, 340].map(x => '<rect class="oj-glow" x="' + (x - 30) + '" y="10" width="60" height="4" fill="#fff8de"/>').join("") +
      '<rect x="80" y="22" width="240" height="34" rx="3" fill="#111" stroke="#555" stroke-width="1.5"/>' + badge(92, 39, "RR", RR) +
      '<text x="214" y="45" text-anchor="middle" ' + font + ' font-size="18" fill="#fff">Suburban Station</text>' +
      '<rect x="0" y="94" width="400" height="104" fill="#18181c"/>' + train +
      '<rect x="0" y="198" width="400" height="62" fill="#8c8a84"/><rect x="0" y="198" width="400" height="8" fill="#e8d36a"/>' +
      Array.from({ length: 40 }, (_, i) => '<circle cx="' + (5 + i * 10) + '" cy="202" r="1.2" fill="#b8a64a"/>').join("") +
      '<rect x="20" y="216" width="200" height="28" rx="3" fill="#111"/><text x="120" y="234" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">People all over the world, join hands</text>');
  }

  /* 2. Canton, Ohio: the Pro Football Hall of Fame rotunda */
  function ojcanton() {
    let ribs = "";
    for (let i = -3; i <= 3; i++) ribs += '<path d="M' + (200 + i * 12) + ' ' + (60 + Math.abs(i) * 4) + 'Q' + (200 + i * 20) + ' 110 ' + (200 + i * 12) + ' ' + (160 - Math.abs(i) * 4) + '" fill="none" stroke="#9aa2aa" stroke-width="2"/>';
    const flag = (x, col, cls) => '<rect x="' + x + '" y="96" width="2.5" height="84" fill="#c9ced4"/><g class="oj-flag ' + cls + '"><rect x="' + (x + 2.5) + '" y="98" width="24" height="15" fill="' + col + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#oj-s2)"/>' + cloud(60, 40) + cloud(280, 28) + bird(52, "") +
      '<rect x="40" y="150" width="320" height="40" fill="#e8e4dc"/><rect x="40" y="146" width="320" height="6" fill="#cfc9be"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (52 + i * 31) + '" y="158" width="18" height="24" fill="#2c3a48"/>').join("") +
      /* football-shaped rotunda */
      '<path d="M200 36C256 60 256 140 200 166C144 140 144 60 200 36z" fill="#f4f2ee" stroke="#9aa2aa" stroke-width="2"/>' + ribs +
      '<path d="M186 40l28 0M200 30v10" stroke="#9aa2aa" stroke-width="3"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (172 + i * 12) + '" y="120" width="6" height="22" fill="#2c3a48" opacity=".8"/>').join("") +
      flag(70, ORANGE, "") + flag(110, GOLD, "oj-flag2") + flag(290, BLUE, "") + flag(326, ORANGE, "oj-flag2") +
      '<rect x="0" y="190" width="400" height="70" fill="#7aa45a"/><rect x="0" y="190" width="400" height="6" fill="#bdb8ae"/>' +
      '<path d="M170 196h60l20 64h-100z" fill="#bdb8ae"/>' +
      '<rect x="20" y="214" width="140" height="28" rx="3" fill="#111"/><text x="90" y="232" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">CANTON, OHIO</text>' +
      '<rect x="240" y="214" width="140" height="28" rx="3" fill="#111"/><text x="310" y="232" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">HOMETOWN</text>',
      sky("oj-s2", "#7fc4ee", "#e8f2f6"));
  }

  /* 3. Eddie O'Jay's DJ booth, Cleveland '63 */
  function ojradio() {
    const vu = (x, cls) => '<rect x="' + x + '" y="150" width="40" height="26" rx="2" fill="#f2e6b8" stroke="#555"/><path d="M' + (x + 6) + ' 168q14 -14 28 0" fill="none" stroke="#333" stroke-width="1"/>' +
      '<rect class="oj-vu ' + cls + '" x="' + (x + 19.3) + '" y="156" width="1.4" height="17" fill="#111"/>';
    return svg(
      '<rect width="400" height="260" fill="#2c2238"/>' +
      Array.from({ length: 12 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<circle cx="' + (14 + c * 30 + (r % 2) * 15) + '" cy="' + (10 + r * 11) + '" r="2" fill="#3a2e48"/>').join("")).join("") +
      '<rect class="oj-blink" x="150" y="16" width="100" height="30" rx="4" fill="' + ORANGE + '"/><text x="200" y="37" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">ON AIR</text>' +
      '<rect x="280" y="20" width="96" height="70" rx="4" fill="#1a1424" stroke="' + GOLD + '" stroke-width="1.5"/><text x="328" y="44" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">CLEVELAND</text><text x="328" y="62" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">&apos;63</text><text x="328" y="78" text-anchor="middle" ' + font + ' font-size="8" fill="#ddd">EDDIE O&apos;JAY</text>' +
      /* mic boom */
      '<path d="M60 20v40l50 30" stroke="#888" stroke-width="4" fill="none"/><rect x="100" y="80" width="18" height="34" rx="9" fill="#c8c8c8" stroke="#666" stroke-width="2" transform="rotate(30 109 97)"/>' +
      /* desk + turntables */
      '<path d="M0 130h400v130h-400z" fill="#5a3a24"/><rect x="0" y="126" width="400" height="8" fill="#7a5032"/>' +
      [70, 330].map(x => '<rect x="' + (x - 52) + '" y="186" width="104" height="66" rx="4" fill="#3a3a3a"/><circle cx="' + x + '" cy="219" r="28" fill="#111"/>' +
        '<g class="oj-spin"><circle cx="' + x + '" cy="219" r="26" fill="#161616"/><circle cx="' + x + '" cy="219" r="18" fill="none" stroke="#2a2a2a"/><circle cx="' + x + '" cy="219" r="10" fill="' + (x < 200 ? GOLD : BLUE) + '"/><rect x="' + (x - 6) + '" y="216" width="12" height="2" fill="#111"/><circle cx="' + x + '" cy="219" r="2" fill="#fff"/></g>' +
        '<path d="M' + (x + 44) + ' 194l-12 28" stroke="#ccc" stroke-width="3"/>').join("") +
      '<text x="70" y="182" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">MIRACLES</text>' +
      vu(140, "") + vu(220, "oj-vu2") +
      '<rect x="146" y="186" width="108" height="66" rx="4" fill="#2a2a2a"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (160 + i * 16) + ' 196v46" stroke="#111" stroke-width="2"/><rect x="' + (155 + i * 16) + '" y="' + (204 + (i * 13) % 26) + '" width="10" height="6" rx="1" fill="' + (i === 2 ? ORANGE : "#ddd") + '"/>').join("") +
      '<g class="oj-note"><text x="170" y="120" font-size="18" fill="' + GOLD + '">&#9834;</text></g><g class="oj-note oj-n2"><text x="236" y="112" font-size="16" fill="' + BLUE + '">&#9835;</text></g>');
  }

  /* 4. Rock and Roll Hall of Fame, Cleveland lakefront */
  function ojrockhall() {
    return svg(
      '<rect width="400" height="260" fill="url(#oj-s4)"/>' + cloud(80, 34) + bird(46, "") + bird(64, "oj-bird2") +
      /* white tower */
      '<rect x="252" y="40" width="44" height="150" fill="#f2f2f0" stroke="#b8bcc0" stroke-width="1.5"/>' +
      '<path d="M252 70h44M252 100h44M252 130h44" stroke="#c8ccd0" stroke-width="1"/>' +
      /* cantilevered drum */
      '<ellipse cx="320" cy="96" rx="40" ry="10" fill="#e8e8e6" stroke="#b8bcc0"/><rect x="280" y="96" width="80" height="26" fill="#f0f0ee" stroke="#b8bcc0"/><ellipse cx="320" cy="122" rx="40" ry="10" fill="#dcdcda" stroke="#b8bcc0"/>' +
      /* glass pyramid */
      '<path d="M60 190L180 40L300 190z" fill="#9cc6dc" stroke="#e8f2f8" stroke-width="2"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (75 + i * 15) + ' ' + (190 - (i + 1) * 18.75) + 'L' + (285 - i * 15) + ' ' + (190 - (i + 1) * 18.75) + '" stroke="#e8f2f8" stroke-width="1"/>').join("") +
      Array.from({ length: 7 }, (_, i) => '<path d="M180 40L' + (90 + i * 30) + ' 190" stroke="#e8f2f8" stroke-width=".8"/>').join("") +
      '<path class="oj-glow" d="M180 40L120 115L180 115z" fill="#fff" opacity=".25"/>' +
      '<rect x="60" y="186" width="300" height="10" fill="#e0ddd6"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#2f6f9a"/>' +
      '<g class="oj-wave"><path d="M-20 212q15 -6 30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0" fill="none" stroke="#8cc6e6" stroke-width="2"/></g>' +
      '<g class="oj-wave oj-wave2"><path d="M-20 232q15 -6 30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0" fill="none" stroke="#8cc6e6" stroke-width="2"/></g>' +
      '<rect x="20" y="224" width="150" height="28" rx="3" fill="#111"/><text x="95" y="242" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">LAKE ERIE</text>' +
      '<rect x="230" y="224" width="150" height="28" rx="3" fill="#111"/><text x="305" y="242" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">CLASS OF 2005</text>',
      sky("oj-s4", "#f6a65a", "#fde4b8"));
  }

  /* 5. S Broad St & Spruce St, Gamble and Huff Walk */
  function ojcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#oj-s5)"/>' +
      /* Union League: brownstone + red brick, mansard roof, twin curved stairs */
      '<path d="M120 60h160l-10 -20h-140z" fill="#3e4652"/><rect x="186" y="26" width="28" height="18" fill="#3e4652"/><path d="M186 26l14 -10l14 10z" fill="#3e4652"/>' +
      '<rect x="120" y="60" width="160" height="80" fill="#8a3a2a"/><rect x="120" y="60" width="160" height="6" fill="#b89a78"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (132 + i * 24) + '" y="72" width="12" height="20" fill="#2a2430" stroke="#b89a78" stroke-width="1.5"/><rect class="oj-glow ' + (i % 2 ? "oj-glow2" : "") + '" x="' + (134 + i * 24) + '" y="74" width="8" height="16" fill="' + GOLD + '" opacity=".35"/>').join("") +
      '<path d="M170 140q-6 -20 18 -30h24q24 10 18 30" fill="none" stroke="#b89a78" stroke-width="5"/><rect x="190" y="98" width="20" height="24" fill="#3a2418" stroke="#b89a78" stroke-width="1.5"/>' +
      '<rect x="40" y="88" width="60" height="52" fill="#6a6478"/><rect x="300" y="80" width="56" height="60" fill="#5a5468"/>' +
      /* brick wall */
      '<rect x="0" y="130" width="400" height="94" fill="#7e3a2c"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#6a2e22" stroke-width="1"/>').join("") +
      '<rect x="0" y="126" width="400" height="6" fill="#4a3a32"/>' +
      tag("O&apos;JAYS", 20, 192, 50, GOLD, -6) + tag("LOVE TRAIN", 150, 216, 20, BLUE, -4) + tag("CANTON", 186, 168, 18, "#fff", -3) + tag("SHIP AHOY", 20, 218, 16, ORANGE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="oj-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + BLUE + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + BLUE + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="356" y="84" width="6" height="140" fill="#2f2f2f"/>' + sign(300, 86, 98, "S Broad St") + sign(312, 112, 86, "Spruce St") + sign(278, 140, 120, "Gamble and Huff Walk", "#6a3e22") +
      '<g class="oj-sp"><circle cx="160" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="oj-sp oj-sp2"><circle cx="166" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("oj-s5", "#1e2a4e", "#e8905a"));
  }

  window.SCENES = { ojstation: ojstation, ojcanton: ojcanton, ojradio: ojradio, ojrockhall: ojrockhall, ojcorner: ojcorner };
})();
