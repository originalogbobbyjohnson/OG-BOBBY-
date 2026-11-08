/* arresteddevelopment scenes (Regions tab: Atlanta; Midtown). CSS classes and ids prefixed ad- (the page's own anim-train is kept).
   1 MARTA Arts Center station in Midtown (underground, Red + Gold lines): the silver train sliding in, black station sign with the RED and GOLD line dots.
   2 The Art Institute of Atlanta, where 21-year-old art student Speech wrote "Tennessee" (drawn generic): drafting tables, sketches, a paint brush stroking.
   3 Ripley, Tennessee ("Past Dyersburg into Ripley"): red-dirt country road, tall oaks, a green route sign, the horseshoe game ("Headliner, I challenge you").
   4 "Mr. Wendal" / "Raining Revolution": rain falling on a Midtown sidewalk, a rainbow breaking through, a new pair of shoes and two dollars on the bench.
   5 Peachtree St NE and 15th St NE in Midtown: green signs, ARRESTED DEVELOPMENT tagged, the High Museum's white panels behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes adbr{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(10deg)}}.ad-brush{transform-box:fill-box;transform-origin:90% 90%;animation:adbr 2.4s ease-in-out infinite}' +
    '@keyframes adshoe{0%{transform:translate(0,0) rotate(0)}40%{transform:translate(70px,-60px) rotate(200deg)}80%,100%{transform:translate(150px,0) rotate(360deg)}}.ad-hs{transform-box:fill-box;transform-origin:50% 50%;animation:adshoe 3.2s ease-in infinite}' +
    '@keyframes adrain{from{transform:translateY(-40px)}to{transform:translateY(270px)}}.ad-rn{animation:adrain 1.1s linear infinite}.ad-r2{animation-delay:-.37s}.ad-r3{animation-delay:-.74s}' +
    '@keyframes adbow{0%,100%{opacity:.35}50%{opacity:.9}}.ad-bow{animation:adbow 4s ease-in-out infinite}' +
    '@keyframes adleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.ad-leaf{transform-box:fill-box;transform-origin:50% 100%;animation:adleaf 3.6s ease-in-out infinite}' +
    '@keyframes adtw{0%,100%{opacity:.2;transform:scale(.6)}50%{opacity:1;transform:scale(1.1)}}.ad-tw{transform-box:fill-box;transform-origin:50% 50%;animation:adtw 1.8s ease-in-out infinite}.ad-tw2{animation-delay:-.6s}' +
    '@keyframes adcar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.ad-car{animation:adcar 6.5s linear infinite}' +
    '@keyframes adblink{0%,100%{opacity:.3}50%{opacity:1}}.ad-bl{animation:adblink 1.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const RED = "#ce242b", GOLDL = "#d4a723", GOLD = "#f2b134", GREEN = "#2e9e5b", EARTH = "#b5562b";
  const oak = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="ad-leaf"><rect x="-5" y="-40" width="10" height="40" fill="#5a3a22"/><path d="M-5 -28l-14 -12M5 -32l14 -10" stroke="#5a3a22" stroke-width="4"/>' +
    '<ellipse cx="0" cy="-58" rx="34" ry="24" fill="' + c + '"/><ellipse cx="-22" cy="-44" rx="18" ry="14" fill="' + c + '"/><ellipse cx="22" cy="-46" rx="18" ry="14" fill="' + c + '"/></g></g>';

  /* 1. MARTA Arts Center, Midtown: underground platform, Red + Gold line train sliding in */
  function adstation() {
    const tr = '<g class="anim-train"><rect x="20" y="112" width="340" height="74" rx="8" fill="#c9ced4" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (34 + i * 54) + '" y="124" width="38" height="26" rx="3" fill="#26323c"/>').join("") +
      '<rect x="20" y="160" width="340" height="6" fill="' + RED + '"/><rect x="20" y="166" width="340" height="4" fill="' + GOLDL + '"/>' +
      '<rect x="150" y="122" width="24" height="56" rx="2" fill="#8d959c"/><rect x="214" y="122" width="24" height="56" rx="2" fill="#8d959c"/>' +
      '<rect x="24" y="114" width="70" height="8" rx="2" fill="#111"/><text x="59" y="120.5" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb84a">NORTH SPRINGS</text>' +
      '<circle cx="28" cy="176" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ad1)"/>' +
      /* tunnel ceiling and tiles */
      '<path d="M0 0h400v40q-200 26 -400 0z" fill="#3a3f46"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (20 + i * 50) + '" y="18" width="30" height="5" rx="2" fill="#fff8d8" class="' + (i % 3 ? "" : "ad-bl") + '"/>').join("") +
      '<rect x="0" y="44" width="400" height="66" fill="#8c7a64"/>' +
      Array.from({ length: 5 }, (_, r) => '<path d="M0 ' + (52 + r * 12) + 'h400" stroke="#7a6a56" stroke-width="1"/>').join("") +
      /* station sign */
      '<rect x="92" y="54" width="216" height="40" rx="3" fill="#111" stroke="#555" stroke-width="2"/>' +
      '<text x="182" y="80" text-anchor="middle" ' + font + ' font-size="19" fill="#fff">ARTS CENTER</text>' +
      '<circle cx="276" cy="66" r="9" fill="' + RED + '"/><text x="276" y="69.5" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">RED</text>' +
      '<circle cx="276" cy="84" r="9" fill="' + GOLDL + '"/><text x="276" y="87" text-anchor="middle" ' + font + ' font-size="6" fill="#111">GOLD</text>' +
      '<text x="200" y="104" text-anchor="middle" ' + font + ' font-size="7" fill="#f2efe6">MIDTOWN · MARTA</text>' +
      tr +
      '<rect x="0" y="186" width="400" height="10" fill="' + GOLD + '"/><rect x="0" y="196" width="400" height="64" fill="#6b6560"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 42) + '" y="186" width="20" height="10" fill="#e8c35a"/>').join("") +
      '<rect x="40" y="208" width="6" height="40" fill="#2f2f2f"/><rect x="354" y="208" width="6" height="40" fill="#2f2f2f"/>',
      sky("ad1", "#2a2e36", "#4a4f58"));
  }

  /* 2. The Art Institute of Atlanta studio: drafting tables, the brush painting a tree */
  function adartschool() {
    const easel = (x) => '<g transform="translate(' + x + ' 0)"><path d="M0 220l30 -140M60 220l-30 -140M30 80v150" stroke="#7a5230" stroke-width="5"/>' +
      '<rect x="-6" y="96" width="72" height="66" fill="#fbf6ea" stroke="#5a3a22" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ad2)"/>' +
      /* big studio window */
      '<rect x="24" y="22" width="352" height="110" fill="#bfe1f2" stroke="#e8e2d6" stroke-width="6"/>' +
      '<path d="M141 22v110M258 22v110M24 77h352" stroke="#e8e2d6" stroke-width="5"/>' +
      '<g fill="#7a8c9a" opacity=".6"><rect x="40" y="88" width="30" height="44"/><rect x="80" y="70" width="24" height="62"/><rect x="290" y="80" width="34" height="52"/><rect x="334" y="66" width="22" height="66"/></g>' +
      '<rect x="0" y="132" width="400" height="128" fill="#d9c9ad"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#a88b62"/>' +
      easel(60) +
      /* the canvas sketch: a tree with roots, red/black/green stripes */
      '<g transform="translate(60 0)"><rect x="-2" y="100" width="64" height="8" fill="' + RED + '"/><rect x="-2" y="108" width="64" height="8" fill="#111"/><rect x="-2" y="116" width="64" height="8" fill="' + GREEN + '"/>' +
      '<rect x="27" y="132" width="6" height="22" fill="#5a3a22"/><ellipse cx="30" cy="132" rx="18" ry="10" fill="#3f7a3a"/><path d="M27 154l-8 6M33 154l8 6M30 154v7" stroke="#5a3a22" stroke-width="2"/></g>' +
      '<g class="ad-brush"><rect x="130" y="128" width="6" height="44" rx="2" fill="#c9a24a" transform="rotate(-30 133 150)"/><path d="M118 124l8 -4l4 10z" fill="' + RED + '"/></g>' +
      /* drafting table with sketchbook + pencils */
      '<path d="M200 150l170 -16v14l-170 16z" fill="#e8e2d6" stroke="#8a7a60" stroke-width="2"/><path d="M220 166v50M350 152v64" stroke="#5a5048" stroke-width="5"/>' +
      '<rect x="236" y="138" width="80" height="22" fill="#fff" transform="rotate(-5 276 149)" stroke="#bbb"/>' +
      '<text x="276" y="153" text-anchor="middle" ' + font + ' font-size="8" fill="#5a3a22" transform="rotate(-5 276 149)">TENNESSEE</text>' +
      '<rect x="326" y="128" width="30" height="4" fill="' + GOLD + '" transform="rotate(-20 340 130)"/><rect x="322" y="136" width="30" height="4" fill="' + GREEN + '" transform="rotate(-10 336 138)"/>' +
      /* paint jars */
      '<rect x="150" y="196" width="16" height="16" rx="2" fill="' + RED + '"/><rect x="170" y="196" width="16" height="16" rx="2" fill="' + GOLD + '"/><rect x="190" y="196" width="16" height="16" rx="2" fill="' + GREEN + '"/>' +
      '<rect x="120" y="226" width="160" height="22" rx="3" fill="#2a1d12" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="241" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">THE ART INSTITUTE OF ATLANTA</text>',
      sky("ad2", "#f4ead6", "#e6d6b8"));
  }

  /* 3. Ripley, Tennessee: red dirt road, oaks, the horseshoe game */
  function adripley() {
    return svg(
      '<rect width="400" height="260" fill="url(#ad3)"/>' +
      '<circle cx="320" cy="50" r="22" fill="#ffd77a" opacity=".9"/>' +
      '<path d="M0 130q100 -24 200 -6t200 -8v144h-400z" fill="#6f9a4a"/>' +
      '<path d="M0 150q120 -18 240 -4t160 0v114h-400z" fill="#5e8a3e"/>' +
      /* red-dirt road */
      '<path d="M170 132q20 0 30 0l120 128h-260z" fill="' + EARTH + '"/><path d="M196 132h10l40 128h-12z" fill="#c9733e" opacity=".6"/>' +
      oak(60, 150, 1.1, "#3f6b2e") + oak(120, 136, .7, "#4a7a34") + oak(330, 156, 1.2, "#3a6228") + oak(276, 136, .6, "#4a7a34") +
      /* route sign */
      '<rect x="244" y="96" width="4" height="50" fill="#6b7178"/><rect x="220" y="72" width="62" height="30" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="251" y="85" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">RIPLEY</text><text x="251" y="97" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">DYERSBURG →</text>' +
      /* horseshoe pit */
      '<rect x="40" y="214" width="34" height="14" fill="#c9a46a"/><rect x="55" y="200" width="4" height="22" fill="#777"/>' +
      '<rect x="210" y="214" width="34" height="14" fill="#c9a46a"/><rect x="225" y="200" width="4" height="22" fill="#777"/>' +
      '<g class="ad-hs"><path d="M60 196a10 10 0 1 1 14 0" fill="none" stroke="#9aa1a8" stroke-width="5" stroke-linecap="round"/></g>' +
      '<rect x="84" y="232" width="232" height="20" rx="3" fill="#2a1d12" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">RIPLEY, TENNESSEE · GAME OF HORSESHOES</text>',
      sky("ad3", "#9fd0ee", "#f6e6c4"));
  }

  /* 4. Rain on a Midtown sidewalk: the rainbow breaking through, shoes + two dollars on the bench */
  function adrain() {
    const drops = (cls, off) => '<g class="ad-rn ' + cls + '">' + Array.from({ length: 16 }, (_, i) => '<path d="M' + ((i * 53 + off) % 400) + ' ' + ((i * 37) % 120) + 'l-3 10" stroke="#cfe6f6" stroke-width="1.6" stroke-linecap="round"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ad4)"/>' +
      '<g class="ad-bow" fill="none" stroke-width="7"><path d="M60 150a140 120 0 0 1 280 0" stroke="#e8505b"/><path d="M68 150a132 112 0 0 1 264 0" stroke="#f2b134"/><path d="M76 150a124 104 0 0 1 248 0" stroke="#3fae5a"/><path d="M84 150a116 96 0 0 1 232 0" stroke="#3a7bd5"/></g>' +
      '<g fill="#4a5462">' + [[0, 70, 40], [44, 50, 30], [80, 86, 34], [300, 60, 36], [340, 40, 26], [370, 76, 30]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (150 - b[1]) + '"/>').join("") + '</g>' +
      '<rect x="0" y="150" width="400" height="110" fill="#6b6f76"/><rect x="0" y="150" width="400" height="6" fill="#9aa1a8"/>' +
      '<path d="M0 200h400" stroke="#5a5e64" stroke-width="2"/>' +
      '<ellipse cx="120" cy="228" rx="60" ry="6" fill="#8fb4d0" opacity=".5"/><ellipse cx="300" cy="238" rx="50" ry="5" fill="#8fb4d0" opacity=".5"/>' +
      /* bench */
      '<rect x="140" y="170" width="140" height="8" rx="2" fill="#7a5230"/><rect x="140" y="158" width="140" height="6" rx="2" fill="#7a5230"/>' +
      '<rect x="150" y="178" width="6" height="22" fill="#333"/><rect x="264" y="178" width="6" height="22" fill="#333"/>' +
      /* a new pair of shoes and two dollar bills */
      '<path d="M170 170q0 -10 10 -10h14q8 0 12 6l6 4z" fill="#f2efe6" stroke="#333" stroke-width="1.5"/><path d="M196 170q0 -10 10 -10h14q8 0 12 6l6 4z" fill="#f2efe6" stroke="#333" stroke-width="1.5"/>' +
      '<rect x="240" y="162" width="24" height="10" fill="#8fbf7a" stroke="#3e6b34" stroke-width="1" transform="rotate(-8 252 167)"/><rect x="244" y="164" width="24" height="10" fill="#9fcf8a" stroke="#3e6b34" stroke-width="1" transform="rotate(6 256 169)"/>' +
      /* streetlight */
      '<rect x="40" y="70" width="5" height="130" fill="#2f2f2f"/><path d="M42 72h22" stroke="#2f2f2f" stroke-width="4"/><circle class="ad-bl" cx="64" cy="78" r="6" fill="#fff3b0"/>' +
      drops("", 0) + drops("ad-r2", 21) + drops("ad-r3", 40) +
      '<rect x="110" y="232" width="180" height="20" rx="3" fill="#2a1d12" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">HERE, HAVE A DOLLAR · LET IT RAIN</text>',
      sky("ad4", "#7c8a9a", "#c9d6e0"));
  }

  /* 5. Peachtree St NE and 15th St NE in Midtown: the High Museum behind */
  function adcorner() {
    const museum = '<g><rect x="150" y="50" width="130" height="84" fill="#f4f4f0"/>' +
      Array.from({ length: 6 }, (_, c) => Array.from({ length: 4 }, (_, r) => '<rect x="' + (154 + c * 21) + '" y="' + (54 + r * 20) + '" width="18" height="17" fill="#ffffff" stroke="#d6d6d0" stroke-width="1"/>').join("")).join("") +
      '<path d="M150 134v-70q-40 10 -40 70z" fill="#e9e9e4"/><path d="M150 64q-30 8 -34 70" stroke="#cfcfc8" stroke-width="2" fill="none"/>' +
      '<path d="M280 50h24v84h-24z" fill="#e2e2dc"/><path d="M110 134l-20 0" stroke="#e9e9e4" stroke-width="3"/></g>';
    const city = '<g fill="#2a2f3c">' + [[0, 70, 36], [40, 44, 26], [70, 82, 36], [316, 56, 30], [350, 80, 50]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (134 - b[1]) + '"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ad5)"/>' +
      city + museum +
      '<rect x="0" y="134" width="400" height="90" fill="#5a4636"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (134 + r * 10) + 'h400" stroke="#4a382a" stroke-width="1"/>').join("") +
      tag("ARRESTED", 18, 172, 32, GOLD, -5) + tag("DEVELOPMENT", 28, 206, 30, GREEN, -4) + tag("SPEECH", 220, 162, 18, "#fff", -6) + tag("TAKE ME HOME", 180, 216, 15, RED, -3) +
      '<g class="ad-tw"><path d="M300 176l3 7l7 3l-7 3l-3 7l-3 -7l-7 -3l7 -3z" fill="' + GOLD + '"/></g><g class="ad-tw ad-tw2"><path d="M150 150l2 5l5 2l-5 2l-2 5l-2 -5l-5 -2l5 -2z" fill="#fff"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="ad-car"><rect x="0" y="232" width="70" height="16" rx="6" fill="' + RED + '"/><rect x="12" y="226" width="40" height="10" rx="4" fill="#a01c22"/><circle cx="14" cy="249" r="5" fill="#111"/><circle cx="56" cy="249" r="5" fill="#111"/><circle cx="68" cy="238" r="2.5" fill="#fff6c2"/></g>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(282, 98, 112, "Peachtree St NE") + sign(296, 124, 86, "15th St NE"),
      sky("ad5", "#f2a65a", "#f6dcb0"));
  }

  window.SCENES = { adstation: adstation, adartschool: adartschool, adripley: adripley, adrain: adrain, adcorner: adcorner };
})();
