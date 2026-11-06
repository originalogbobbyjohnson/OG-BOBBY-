/* Brand Nubian game (Westchester: New Rochelle). Grand Puba, Sadat X, Lord Jamar and DJ Alamo.
   0 a Bee-Line 45 bus pulling up at the North Av / New Rochelle High School stop, 1 New Rochelle High School across Huguenot Lake,
   2 the downtown mall front (the group picked the name "Brand Nubian" at a mall in New Rochelle), 3 Davenport Park at sunrise on the Sound ("Wake Up"),
   4 Huguenot St & Division St with the grey stone tower of Trinity-St. Paul's behind. 400 x 260 SVGs. Classes prefixed bnb-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bnbcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.bnb-car{animation:bnbcar 8s linear infinite}.bnb-car2{animation-delay:-4s}' +
    '@keyframes bnbblink{0%,100%{opacity:.25}50%{opacity:1}}.bnb-bl{animation:bnbblink 1.6s ease-in-out infinite}.bnb-bl2{animation-delay:.5s}.bnb-bl3{animation-delay:1s}' +
    '@keyframes bnbswan{0%,100%{transform:translateX(0)}50%{transform:translateX(70px)}}.bnb-swan{animation:bnbswan 9s ease-in-out infinite}' +
    '@keyframes bnbrip{0%,100%{opacity:.25;transform:scaleX(.8)}50%{opacity:.7;transform:scaleX(1.1)}}.bnb-rip{transform-box:fill-box;transform-origin:50% 50%;animation:bnbrip 2.6s ease-in-out infinite}.bnb-rip2{animation-delay:-1.3s}' +
    '@keyframes bnbrise{0%{transform:translateY(26px)}100%{transform:translateY(0)}}.bnb-sun{animation:bnbrise 5s ease-out infinite alternate}' +
    '@keyframes bnbgull{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,0)}}.bnb-gull{animation:bnbgull 11s linear infinite}.bnb-gull2{animation-delay:-5s}' +
    '@keyframes bnbbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.bnb-bob{animation:bnbbob 1.8s ease-in-out infinite}.bnb-bob2{animation-delay:-.9s}' +
    '@keyframes bnbchase{0%,100%{opacity:.2}33%{opacity:1}}.bnb-ch{animation:bnbchase 1.2s linear infinite}.bnb-ch2{animation-delay:.4s}.bnb-ch3{animation-delay:.8s}' +
    '@keyframes bnbleaf{from{transform:translate(0,-20px) rotate(0)}to{transform:translate(-40px,260px) rotate(300deg)}}.bnb-leaf{animation:bnbleaf 7s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const tree = (x, y, r, col) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (r + 8) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + col + '"/><circle cx="' + (x - r * .6) + '" cy="' + (y + r * .3) + '" r="' + r * .7 + '" fill="' + col + '"/><circle cx="' + (x + r * .6) + '" cy="' + (y + r * .3) + '" r="' + r * .7 + '" fill="' + col + '"/>';
  const ORANGE = "#ff9f43", GREEN = "#2fbf71", RED = "#e63946", CREAM = "#f4ead8", BEEBLUE = "#003a70", BEEYEL = "#f6c445";

  /* 0. Bee-Line 45 pulling up on North Av at the New Rochelle High School stop: blue Bee-Line stop flag, the white bus with blue and gold bands sliding in */
  function bus() {
    let win = "";
    for (let x = 44; x < 250; x += 30) win += '<rect x="' + x + '" y="112" width="24" height="26" rx="2" fill="#bcd6ea"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bnbs0)"/>' +
      /* trees and the school's tower far behind */
      '<rect x="248" y="40" width="26" height="70" fill="#d9cfb8"/><path d="M244 40l17 -16l17 16z" fill="#8a8f96"/><rect x="256" y="52" width="10" height="16" rx="5" fill="#5b4a36"/>' +
      tree(40, 86, 26, "#2f6b3a") + tree(110, 92, 22, "#3a7d45") + tree(200, 88, 26, "#2f6b3a") + tree(320, 84, 28, "#346f3e") + tree(380, 94, 20, "#3a7d45") +
      /* sidewalk + road */
      '<rect x="0" y="168" width="400" height="20" fill="#9a9690"/><rect x="0" y="186" width="400" height="74" fill="#3f4145"/>' +
      '<path d="M0 226h400" stroke="#f6c445" stroke-width="3" stroke-dasharray="26 18"/>' +
      /* the bus */
      '<g class="anim-train">' +
        '<rect x="30" y="98" width="260" height="78" rx="8" fill="#f4f4f2" stroke="#9aa0a6" stroke-width="2"/>' + win +
        '<rect x="30" y="144" width="260" height="8" fill="' + BEEBLUE + '"/><rect x="30" y="152" width="260" height="4" fill="' + BEEYEL + '"/>' +
        '<rect x="262" y="106" width="24" height="44" rx="3" fill="#bcd6ea"/>' +
        '<rect x="44" y="101" width="120" height="10" rx="2" fill="#111"/><text x="50" y="109" ' + font + ' font-size="8" fill="#ffb03a">45 NEW ROCHELLE</text>' +
        '<circle cx="72" cy="178" r="12" fill="#111"/><circle cx="72" cy="178" r="5" fill="#777"/><circle cx="240" cy="178" r="12" fill="#111"/><circle cx="240" cy="178" r="5" fill="#777"/>' +
        '<rect x="284" y="160" width="6" height="6" fill="#fff6c2"/>' +
      '</g>' +
      /* the stop: pole + blue flag */
      '<rect x="336" y="84" width="5" height="100" fill="#6b7280"/>' +
      '<rect x="306" y="58" width="80" height="62" rx="4" fill="' + BEEBLUE + '" stroke="#fff" stroke-width="2"/>' +
      '<rect x="306" y="58" width="80" height="16" rx="4" fill="' + BEEYEL + '"/>' + txt("BEE-LINE", 346, 70, 10, BEEBLUE) +
      '<circle cx="324" cy="92" r="11" fill="#fff"/>' + txt("45", 324, 96.5, 11, BEEBLUE) +
      txt("North Av", 362, 89, 8, "#fff") + txt("New Ro HS", 362, 101, 8, "#fff") + txt("BUS STOP", 346, 114, 8, BEEYEL) +
      person(370, 152, "#1b1b1b") + person(352, 156, "#2a2a2a", "bnb-bob") +
      txt("NORTH AVENUE · NEW ROCHELLE", 200, 248, 11, CREAM, 'letter-spacing="2"'),
      sky("bnbs0", "#f7c59f", "#9ec5e6"));
  }

  /* 1. New Rochelle High School across Huguenot Lake: the long pale-stone Collegiate Gothic front with its central tower, pointed windows, the lake in front, a swan gliding */
  function school() {
    let wins = "";
    for (let x = 30; x < 380; x += 26) if (x < 168 || x > 232) wins += '<path d="M' + x + ' 116v-14q6-8 12 0v14z" fill="#3c4a5c"/><path d="M' + x + ' 136v-12h12v12z" fill="#3c4a5c"/>';
    let refl = "";
    for (let y = 178; y < 250; y += 7) refl += '<rect class="bnb-rip' + (y % 14 ? "" : " bnb-rip2") + '" x="' + (40 + (y * 7) % 60) + '" y="' + y + '" width="' + (120 + (y * 3) % 90) + '" height="2" fill="#e8dcc0" opacity=".35"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bnbs1)"/>' +
      tree(14, 120, 22, "#2f6b3a") + tree(392, 116, 24, "#2f6b3a") +
      /* wings */
      '<rect x="22" y="94" width="356" height="62" fill="#e3d6b8"/><rect x="22" y="90" width="356" height="6" fill="#b9ab8c"/>' +
      (() => { let c = ""; for (let x = 22; x < 378; x += 10) c += '<rect x="' + x + '" y="84" width="6" height="7" fill="#e3d6b8"/>'; return c; })() + wins +
      /* central tower */
      '<rect x="168" y="36" width="64" height="120" fill="#e9dcbe"/><rect x="162" y="30" width="76" height="8" fill="#b9ab8c"/>' +
      [164, 178, 192, 206, 220].map(x => '<rect x="' + x + '" y="22" width="9" height="9" fill="#e9dcbe"/>').join("") +
      '<rect x="162" y="22" width="6" height="134" fill="#d4c6a6"/><rect x="232" y="22" width="6" height="134" fill="#d4c6a6"/>' +
      '<path d="M186 84v-26q14-18 28 0v26z" fill="#3c4a5c"/><path d="M200 58v26" stroke="#e9dcbe" stroke-width="2"/>' +
      '<path d="M184 156v-40q16-20 32 0v40z" fill="#5b3b24"/><path d="M200 120v36" stroke="#3a2416" stroke-width="2"/>' +
      '<rect x="0" y="156" width="400" height="10" fill="#4c7a3c"/>' +
      /* lake */
      '<rect x="0" y="166" width="400" height="94" fill="#41708f"/>' + refl +
      '<path d="M0 166h400" stroke="#2f5674" stroke-width="2"/>' +
      /* swan */
      '<g class="bnb-swan"><path d="M70 218q16 10 36 0q-4 -12 -22 -10z" fill="#fff"/><path d="M98 212q4 -16 -2 -22q-4 -3 -8 1" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M86 192l-5 2" stroke="' + ORANGE + '" stroke-width="3" stroke-linecap="round"/></g>' +
      txt("HUGUENOT LAKE", 300, 246, 11, CREAM, 'letter-spacing="3"'),
      sky("bnbs1", "#8fc0e6", "#dcecf6"));
  }

  /* 2. The downtown New Ro mall front where they settled on the name: glass entrance, the long sign band with chasing bulbs, shoppers going in, three silhouettes huddled by the fountain */
  function mall() {
    let bulbs = "";
    for (let x = 40; x < 364; x += 12) bulbs += '<circle class="bnb-ch bnb-ch' + ((x / 12) % 3 + 1) + '" cx="' + x + '" cy="66" r="3" fill="#ffd98a"/><circle class="bnb-ch bnb-ch' + (((x / 12) + 1) % 3 + 1) + '" cx="' + x + '" cy="104" r="3" fill="#ffd98a"/>';
    let panes = "";
    for (let x = 118; x < 284; x += 24) panes += '<rect x="' + x + '" y="122" width="20" height="62" fill="#9ccbe0" opacity=".85"/><rect x="' + x + '" y="122" width="5" height="62" fill="#fff" opacity=".35"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bnbs2)"/>' +
      /* building */
      '<rect x="20" y="56" width="360" height="132" fill="#c98c5a"/><rect x="20" y="56" width="360" height="6" fill="#8a5a36"/>' +
      (() => { let b = ""; for (let y = 116; y < 188; y += 8) b += '<path d="M20 ' + y + 'h360" stroke="#b07448" stroke-width="1"/>'; return b; })() +
      '<rect x="34" y="70" width="332" height="30" fill="#2a1a12"/>' + bulbs +
      txt("THE MALL · SHOPS · RECORDS · FOOD", 200, 91, 13, ORANGE, 'letter-spacing="2"') +
      '<rect x="110" y="114" width="180" height="74" fill="#3a2a20"/>' + panes +
      '<rect x="190" y="140" width="20" height="48" fill="#3a2a20"/>' +
      /* plaza */
      '<rect x="0" y="188" width="400" height="72" fill="#b7aa96"/>' +
      (() => { let t = ""; for (let x = 0; x < 400; x += 32) t += '<path d="M' + x + ' 188l-20 72" stroke="#a39682" stroke-width="1"/>'; return t; })() +
      /* fountain */
      '<ellipse cx="82" cy="222" rx="44" ry="12" fill="#6f8fa3" stroke="#8a7c68" stroke-width="3"/>' +
      '<path class="bnb-bob" d="M82 222v-26M82 196q-12 4 -16 16M82 196q12 4 16 16" stroke="#cfe6f3" stroke-width="3" fill="none"/>' +
      /* three silhouettes picking the name + DJ crate */
      person(300, 200, "#141414") + person(320, 204, "#1d1d1d", "bnb-bob") + person(340, 200, "#141414", "bnb-bob bnb-bob2") +
      '<rect x="356" y="218" width="22" height="16" fill="#5b3b24"/><rect x="358" y="214" width="3" height="8" fill="#111"/><rect x="363" y="214" width="3" height="8" fill="' + RED + '"/><rect x="368" y="214" width="3" height="8" fill="' + GREEN + '"/>' +
      person(150, 196, "#2a2a2a", "bnb-bob bnb-bob2") + person(232, 198, "#222", "bnb-bob") +
      txt("“BRAND NEW” · “NUBIAN”", 310, 252, 10, CREAM, 'letter-spacing="1"'),
      sky("bnbs2", "#1d1a3a", "#7a4a6a"));
  }

  /* 3. Davenport Park at sunrise: the rocky point on Long Island Sound, the sun coming up, gulls, a sailboat bobbing. Wake up. */
  function sunrise() {
    let glint = "";
    for (let y = 168; y < 250; y += 9) glint += '<rect class="bnb-rip' + (y % 18 ? "" : " bnb-rip2") + '" x="' + (196 - (y - 160) * .7) + '" y="' + y + '" width="' + (20 + (y - 160) * 1.4) + '" height="3" fill="#ffd98a" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bnbs3)"/>' +
      '<g class="bnb-sun"><circle cx="206" cy="160" r="40" fill="#ffd98a"/><circle cx="206" cy="160" r="54" fill="#ffd98a" opacity=".2"/></g>' +
      /* far shore */
      '<path d="M0 160q60 -8 120 -2t140 -4t140 4v6h-400z" fill="#6a4a6a"/>' +
      '<rect x="0" y="164" width="400" height="96" fill="#5a6f9a"/>' + glint +
      /* sailboat */
      '<g class="bnb-bob"><path d="M300 196h40l-6 8h-28z" fill="#f4ead8"/><path d="M318 194v-38l18 34z" fill="#fff"/><path d="M316 194v-30l-14 26z" fill="' + ORANGE + '"/></g>' +
      /* rocks + grass of the point */
      '<path d="M0 214q30 -20 70 -14q30 -16 60 2q20 -6 34 10v48h-164z" fill="#5d5a55"/>' +
      '<path d="M20 206q20 -8 40 -4M84 198q20 -6 36 4" stroke="#7a7670" stroke-width="3" fill="none"/>' +
      '<path d="M0 236h170v24h-170z" fill="#3f6b38"/>' + tree(30, 196, 18, "#2f5a2e") +
      /* bench */
      '<rect x="96" y="226" width="44" height="5" fill="#6b4a2c"/><rect x="100" y="231" width="4" height="10" fill="#4a3424"/><rect x="132" y="231" width="4" height="10" fill="#4a3424"/>' +
      /* gulls */
      '<g class="bnb-gull"><path d="M0 60q6 -6 12 0q6 -6 12 0" stroke="#2a2a2a" stroke-width="2.5" fill="none"/></g>' +
      '<g class="bnb-gull bnb-gull2"><path d="M0 86q5 -5 10 0q5 -5 10 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>' +
      txt("WAKE UP", 300, 40, 22, "#fff", 'letter-spacing="6" opacity=".9"') + txt("DAVENPORT PARK · THE SOUND", 290, 252, 10, CREAM, 'letter-spacing="2"'),
      sky("bnbs3", "#3b2a5c", "#ff9f6e"));
  }

  /* 4. Huguenot St & Division St downtown: green street signs, the wall tagged BRAND NUBIAN, the grey stone tower of Trinity-St. Paul's behind */
  function corner() {
    let stone = "";
    for (let y = 40; y < 140; y += 8) for (let x = (y / 8) % 2 ? 140 : 146; x < 212; x += 12) stone += '<rect x="' + x + '" y="' + y + '" width="11" height="7" fill="#8e9298"/>';
    let leaves = "";
    for (let i = 0; i < 6; i++) leaves += '<rect class="bnb-leaf" style="animation-delay:-' + i * 1.2 + 's" x="' + (60 + i * 60) + '" y="0" width="6" height="4" rx="2" fill="' + (i % 2 ? ORANGE : "#c9572e") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bnbs4)"/>' +
      /* church tower */
      '<rect x="140" y="40" width="72" height="100" fill="#7d8188"/>' + stone +
      [140, 158, 176, 194].map(x => '<rect x="' + x + '" y="30" width="12" height="12" fill="#7d8188"/>').join("") +
      '<path d="M164 96v-30q12-16 24 0v30z" fill="#2a2f3a"/><path d="M176 66v30" stroke="#7d8188" stroke-width="2"/>' +
      '<rect x="70" y="80" width="70" height="60" fill="#6f737a"/><path d="M70 80l35 -22l35 22z" fill="#55595f"/>' +
      '<path d="M96 120v-24q9-12 18 0v24z" fill="#b65a3a" opacity=".9"/>' +
      /* downtown buildings */
      '<rect x="230" y="50" width="70" height="90" fill="#4a4e5a"/><rect x="306" y="70" width="80" height="70" fill="#565a66"/>' +
      (() => { let w = ""; for (let y = 60; y < 136; y += 12) for (let x = 238; x < 384; x += 14) if (x < 294 || x > 310) w += '<rect class="bnb-bl bnb-bl' + ((x + y) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="7" height="7" fill="#ffd98a" opacity=".7"/>'; return w; })() +
      /* wall */
      '<rect x="0" y="134" width="400" height="92" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 144; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("BRAND NUBIAN", 14, 196, 40, ORANGE, -5) + tag("NOW RULE", 222, 220, 20, GREEN, -4) + tag("WORD IS BOND", 20, 222, 15, CREAM, -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="bnb-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<g class="bnb-car bnb-car2"><rect x="0" y="240" width="40" height="12" rx="4" fill="' + GREEN + '"/><circle cx="9" cy="252" r="4" fill="#111"/><circle cx="31" cy="252" r="4" fill="#111"/></g>' +
      /* pole + green signs */
      '<rect x="356" y="66" width="5" height="162" fill="#3d4b3f"/>' +
      '<rect x="292" y="70" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Huguenot St", 344, 86, 12, "#fff") +
      '<rect x="292" y="96" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Division St", 344, 112, 12, "#fff") +
      leaves,
      sky("bnbs4", "#1b2140", "#e08a5a"));
  }

  window.SCENES = { bus: bus, school: school, mall: mall, sunrise: sunrise, corner: corner };
})();
