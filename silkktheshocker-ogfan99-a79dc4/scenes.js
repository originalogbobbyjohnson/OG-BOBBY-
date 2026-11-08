/* silkktheshocker scenes (Regions tab: New Orleans; the Calliope projects (B.W. Cooper), 3rd Ward / Central City - where Silkk the Shocker (Vyshonne Miller) grew up before moving to Richmond, CA at 13). CSS classes prefixed sk- (the page's own anim-train is kept).
   1 RTA 28 M.L. King bus at Martin Luther King Jr Blvd and S Galvez St, the long four-story red-brick B.W. Cooper buildings behind (MLK Blvd ran along the Calliope's west side).
   2 "The Day I Was Made" (Made Man, 1999): the Don's back room - long table, empty leather chairs, candles, the chandelier swinging.
   3 Booker T. Washington High (S Roman St), the Calliope's neighborhood high school: buff-brick Art Deco auditorium with its stepped center tower, flag waving.
   4 "My gold and platinum plaques make you know what we did" (Just Be Straight With Me): studio wall of gold and platinum plaques, VU meters jumping, a blue neon bolt.
   5 S Galvez St and Erato St in the old Calliope: green signs, SILKK tagged on the brick, the arena's round silver roof on the skyline behind. Every 9 avoided. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes skflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.35}55%{opacity:.9}}.sk-flk{animation:skflick 2.4s infinite}.sk-flk2{animation-delay:.9s}' +
    '@keyframes skswing{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.sk-swing{transform-box:fill-box;transform-origin:50% 0%;animation:skswing 3.2s ease-in-out infinite}' +
    '@keyframes skflame{0%,100%{transform:scaleY(1);opacity:.95}50%{transform:scaleY(1.3);opacity:.7}}.sk-fl{transform-box:fill-box;transform-origin:50% 100%;animation:skflame .6s ease-in-out infinite}.sk-fl2{animation-delay:-.3s}' +
    '@keyframes skwave{0%,100%{transform:skewY(0deg) scaleX(1)}50%{transform:skewY(6deg) scaleX(.92)}}.sk-flag{transform-box:fill-box;transform-origin:0% 50%;animation:skwave 1.6s ease-in-out infinite}' +
    '@keyframes skbird{from{transform:translate(-40px,0)}to{transform:translate(460px,-30px)}}.sk-bird{animation:skbird 12s linear infinite}.sk-bird2{animation-delay:-6s}' +
    '@keyframes skvu{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}80%{transform:scaleY(.85)}}.sk-vu{transform-box:fill-box;transform-origin:50% 100%;animation:skvu .9s ease-in-out infinite}.sk-vu2{animation-delay:-.3s}.sk-vu3{animation-delay:-.6s}' +
    '@keyframes skshine{0%{transform:translateX(-60px)}60%,100%{transform:translateX(360px)}}.sk-shine{animation:skshine 3.6s ease-in-out infinite}' +
    '@keyframes skbolt{0%,100%{opacity:1}8%{opacity:.2}12%{opacity:1}16%{opacity:.4}20%{opacity:1}}.sk-bolt{animation:skbolt 2.8s infinite}' +
    '@keyframes skcloud{from{transform:translateX(-120px)}to{transform:translateX(440px)}}.sk-cloud{animation:skcloud 32s linear infinite}.sk-cloud2{animation-delay:-16s}' +
    '@keyframes skspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sk-spr{animation:skspray 1.4s ease-out infinite}.sk-spr2{animation-delay:.45s}' +
    '@keyframes skdrip{0%{transform:scaleY(0)}60%,100%{transform:scaleY(1)}}.sk-drip{transform-box:fill-box;transform-origin:50% 0%;animation:skdrip 3s ease-in infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const BLUE = "#4fc3ff", GOLD = "#f2c14e", SILV = "#d8dde6", BUS = "#c8102e";
  const bolt = (x, y, s, c) => '<path d="M' + x + ' ' + y + 'l' + (-8 * s) + ' ' + (18 * s) + 'h' + (7 * s) + 'l' + (-5 * s) + ' ' + (16 * s) + 'l' + (14 * s) + ' ' + (-22 * s) + 'h' + (-7 * s) + 'l' + (5 * s) + ' ' + (-12 * s) + 'z" fill="' + c + '"/>';
  /* a long four-story B.W. Cooper building: red brick, pitched roof, rows of small windows */
  const cooper = (x, y, w, lit) => {
    let win = "";
    for (let r = 0; r < 4; r++) for (let i = 0; i < Math.floor((w - 8) / 16); i++) {
      const on = lit && ((r * 7 + i * 3) % 5 === 0);
      win += '<rect class="' + (on && i % 2 ? "sk-flk" : "") + '" x="' + (x + 8 + i * 16) + '" y="' + (y + 10 + r * 17) + '" width="8" height="10" fill="' + (on ? "#ffd98a" : "#3a2420") + '"/>';
    }
    return '<g><path d="M' + (x - 4) + ' ' + y + 'l' + (w / 2 + 4) + ' -14l' + (w / 2 + 4) + ' 14z" fill="#5a2e24"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="72" fill="#9b4b36"/>' + win +
      '<rect x="' + (x + w / 2 - 7) + '" y="' + (y + 56) + '" width="14" height="16" fill="#2a1612"/><rect x="' + (x + w / 2 - 11) + '" y="' + (y + 52) + '" width="22" height="3" fill="#d8cfc0"/></g>';
  };

  /* 1. RTA 28 M.L. King at S Galvez St */
  function skstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 36) + '" y="128" width="28" height="22" rx="2" fill="#1d2a36"/>').join("");
    const bus = '<g class="anim-train"><rect x="60" y="118" width="268" height="72" rx="10" fill="#f2f4f6" stroke="#2a3440" stroke-width="2"/>' + win +
      '<rect x="296" y="124" width="30" height="40" rx="4" fill="#1d2a36"/><rect x="60" y="156" width="268" height="7" fill="' + BUS + '"/><rect x="60" y="163" width="268" height="4" fill="' + BLUE + '"/>' +
      '<rect x="252" y="108" width="74" height="12" rx="2" fill="#111"/><text x="289" y="117" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffd36a">28 M.L. KING</text>' +
      '<circle cx="104" cy="192" r="11" fill="#1c1c1c"/><circle cx="104" cy="192" r="4" fill="#888"/><circle cx="280" cy="192" r="11" fill="#1c1c1c"/><circle cx="280" cy="192" r="4" fill="#888"/>' +
      '<rect x="322" y="170" width="6" height="8" rx="1" fill="#ffe08a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sks1)"/>' +
      '<circle cx="330" cy="40" r="14" fill="#ffe6b0" opacity=".85"/>' +
      '<g class="sk-cloud"><ellipse cx="60" cy="58" rx="34" ry="8" fill="#ffffff" opacity=".18"/></g><g class="sk-cloud sk-cloud2"><ellipse cx="60" cy="40" rx="26" ry="6" fill="#ffffff" opacity=".14"/></g>' +
      cooper(-10, 86, 170, true) + cooper(176, 92, 150, true) + cooper(338, 90, 80, true) +
      '<rect x="0" y="190" width="400" height="10" fill="#bdb6aa"/><rect x="0" y="200" width="400" height="60" fill="#3a3a3e"/><path d="M0 230h400" stroke="#d9c45a" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="358" y="100" width="5" height="100" fill="#2f2f2f"/><rect x="340" y="104" width="44" height="44" rx="3" fill="#111" stroke="#fff" stroke-width="1"/>' +
      '<circle cx="362" cy="120" r="11" fill="' + BUS + '"/><text x="362" y="124.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">28</text><text x="362" y="142" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">RTA BUS</text>' +
      '<rect x="8" y="14" width="236" height="42" rx="3" fill="#111" stroke="#e8e8e8" stroke-width="1.5"/>' +
      '<text x="20" y="33" ' + font + ' font-size="14" fill="#fff">M.L. KING BLVD</text><text x="20" y="49" ' + font + ' font-size="11" fill="#cfd8dc">at S Galvez St  •  the Calliope</text>' +
      '<circle cx="222" cy="35" r="12" fill="' + BUS + '"/><text x="222" y="39.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">28</text>',
      sky("sks1", "#0e1630", "#c86a4a"));
  }

  /* 2. The Day I Was Made: the Don's back room */
  function skmade() {
    const chair = (x, back) => '<g><rect x="' + (x - 12) + '" y="' + (back ? 120 : 162) + '" width="24" height="' + (back ? 34 : 30) + '" rx="5" fill="#4a1a14" stroke="#2a0c08" stroke-width="2"/></g>';
    const candle = (x, d) => '<rect x="' + (x - 3) + '" y="138" width="6" height="14" fill="#f3ead2"/><path class="sk-fl' + (d ? " sk-fl2" : "") + '" d="M' + x + ' 128q4 6 0 10q-4 -4 0 -10z" fill="#ffc24a"/><circle cx="' + x + '" cy="134" r="10" fill="#ffc24a" opacity=".18"/>';
    let panels = "";
    for (let i = 0; i < 8; i++) panels += '<rect x="' + (6 + i * 50) + '" y="70" width="40" height="80" rx="2" fill="none" stroke="#5a3a22" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a1a10"/>' + panels +
      '<rect x="140" y="20" width="120" height="70" fill="#0b1426" stroke="#6a4a2a" stroke-width="5"/><path d="M200 20v70M140 55h120" stroke="#6a4a2a" stroke-width="3"/>' +
      '<rect x="150" y="62" width="8" height="26" fill="#2a3a5a"/><rect x="166" y="50" width="10" height="38" fill="#2a3a5a"/><rect x="214" y="58" width="10" height="30" fill="#2a3a5a"/><rect x="236" y="44" width="8" height="44" fill="#2a3a5a"/>' +
      '<rect x="168" y="56" width="3" height="3" fill="#ffd98a" class="sk-flk"/><rect x="238" y="52" width="3" height="3" fill="#ffd98a" class="sk-flk sk-flk2"/>' +
      '<g class="sk-swing"><path d="M200 0v26" stroke="' + GOLD + '" stroke-width="2"/><path d="M174 30q26 18 52 0" stroke="' + GOLD + '" stroke-width="3" fill="none"/>' +
      [176, 188, 200, 212, 224].map((x, i) => '<path d="M' + x + ' 30v8" stroke="' + GOLD + '" stroke-width="2"/><circle cx="' + x + '" cy="' + (40 + (i % 2) * 3) + '" r="3" fill="#fff6d0"/>').join("") +
      '<ellipse cx="200" cy="44" rx="40" ry="10" fill="#fff2c0" opacity=".12"/></g>' +
      chair(110, 1) + chair(160, 1) + chair(240, 1) + chair(290, 1) +
      '<rect x="186" y="104" width="28" height="50" rx="6" fill="#6a1a14" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<path d="M60 152h280l26 40h-332z" fill="#3a1e10" stroke="#1e0e06" stroke-width="2"/><path d="M68 156h264" stroke="#6a3a1e" stroke-width="2"/>' +
      candle(130, 0) + candle(200, 1) + candle(270, 0) +
      '<rect x="186" y="146" width="28" height="6" rx="1" fill="#2a1a10"/><circle cx="200" cy="149" r="5" fill="' + GOLD + '"/><circle cx="200" cy="149" r="2" fill="' + BLUE + '"/>' +
      chair(110, 0) + chair(160, 0) + chair(240, 0) + chair(290, 0) +
      '<rect x="0" y="192" width="400" height="68" fill="#1a0e08"/><path d="M0 200h400" stroke="#4a1a14" stroke-width="10"/>' +
      '<text x="200" y="236" text-anchor="middle" ' + font + ' font-size="16" fill="' + GOLD + '" letter-spacing="3">THE DAY I WAS MADE</text>');
  }

  /* 3. Booker T. Washington High, S Roman St: buff-brick Art Deco auditorium */
  function skschool() {
    let ribs = "";
    for (let i = 0; i < 5; i++) ribs += '<rect x="' + (176 + i * 11) + '" y="44" width="4" height="122" fill="#c9b38a"/>';
    let wings = "";
    for (let i = 0; i < 5; i++) wings += '<rect x="' + (40 + i * 22) + '" y="110" width="12" height="40" fill="#3a4a5a"/><rect x="' + (256 + i * 22) + '" y="110" width="12" height="40" fill="#3a4a5a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sks3)"/>' +
      '<g class="sk-cloud"><ellipse cx="70" cy="44" rx="40" ry="10" fill="#fff" opacity=".6"/></g><g class="sk-cloud sk-cloud2"><ellipse cx="80" cy="24" rx="28" ry="7" fill="#fff" opacity=".5"/></g>' +
      '<g class="sk-bird"><path d="M20 60q5 -5 10 0q5 -5 10 0" stroke="#33384a" stroke-width="2" fill="none"/></g><g class="sk-bird sk-bird2"><path d="M10 40q4 -4 8 0q4 -4 8 0" stroke="#33384a" stroke-width="2" fill="none"/></g>' +
      '<rect x="24" y="96" width="352" height="90" fill="#e2cfa6"/><rect x="24" y="92" width="352" height="6" fill="#c9b38a"/>' + wings +
      '<path d="M156 186v-110h16v-16h12v-14h32v14h12v16h16v110z" fill="#ead9b4"/>' + ribs +
      '<rect x="190" y="30" width="20" height="16" fill="#ead9b4"/><path d="M188 30h24l-4 -8h-16z" fill="#c9b38a"/>' +
      '<rect x="138" y="64" width="124" height="14" fill="#2e4a6a"/><text x="200" y="74.5" text-anchor="middle" ' + font + ' font-size="8" fill="#f3ead2" letter-spacing=".5">BOOKER T. WASHINGTON</text>' +
      '<rect x="168" y="140" width="64" height="46" fill="#2a2a30"/><path d="M178 140v46M190 140v46M210 140v46M222 140v46" stroke="#c9b38a" stroke-width="2"/>' +
      '<rect x="150" y="184" width="100" height="6" fill="#bfae8a"/><rect x="140" y="190" width="120" height="6" fill="#b0a07c"/>' +
      '<rect x="330" y="40" width="3" height="146" fill="#8a8a8a"/><g class="sk-flag"><rect x="333" y="42" width="36" height="20" fill="' + BLUE + '"/><rect x="333" y="56" width="36" height="6" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5f7a3e"/><rect x="0" y="214" width="400" height="46" fill="#3a3a3e"/><path d="M0 238h400" stroke="#d9c45a" stroke-width="3" stroke-dasharray="20 14"/>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="2">S ROMAN ST  •  CENTRAL CITY</text>',
      sky("sks3", "#6fb4e6", "#f4e2c0"));
  }

  /* 4. The plaque wall */
  function skplaques() {
    const plaque = (x, y, gold) => '<rect x="' + x + '" y="' + y + '" width="58" height="72" rx="2" fill="#1a1a20" stroke="' + (gold ? "#b8902a" : "#a8b0bc") + '" stroke-width="4"/>' +
      '<circle cx="' + (x + 29) + '" cy="' + (y + 30) + '" r="20" fill="' + (gold ? GOLD : SILV) + '"/><circle cx="' + (x + 29) + '" cy="' + (y + 30) + '" r="13" fill="none" stroke="' + (gold ? "#c89a2a" : "#9aa2ae") + '" stroke-width="1"/>' +
      '<circle cx="' + (x + 29) + '" cy="' + (y + 30) + '" r="6" fill="#222"/><rect x="' + (x + 10) + '" y="' + (y + 56) + '" width="38" height="8" fill="' + (gold ? "#c89a2a" : "#9aa2ae") + '"/>';
    const vu = (x, k) => '<rect x="' + x + '" y="196" width="8" height="30" fill="#0a0a0a"/><rect class="sk-vu' + (k ? " sk-vu" + (k + 1) : "") + '" x="' + (x + 1) + '" y="198" width="6" height="27" fill="url(#skvu)"/>';
    return svg(
      '<rect width="400" height="260" fill="#14121c"/><rect x="0" y="0" width="400" height="180" fill="#1e1a2a"/>' +
      plaque(24, 24, 1) + plaque(98, 24, 0) + plaque(172, 24, 1) + plaque(246, 24, 0) + plaque(320, 24, 1) +
      plaque(10, 104, 0) + plaque(332, 104, 1) +
      '<g class="sk-shine"><path d="M0 20l24 0l-30 160h-24z" fill="#fff" opacity=".12"/></g>' +
      '<g class="sk-bolt" filter="url(#skglow)">' + bolt(208, 102, 2.0, BLUE) + '</g>' +
      '<text x="200" y="174" text-anchor="middle" ' + font + ' font-size="11" fill="' + BLUE + '" letter-spacing="2" class="sk-bolt">CHARGE IT 2 DA GAME</text>' +
      '<path d="M20 186h360l14 74h-388z" fill="#2a2a32" stroke="#0a0a10" stroke-width="2"/>' +
      Array.from({ length: 18 }, (_, i) => vu(40 + i * 18, i % 3)).join("") +
      Array.from({ length: 18 }, (_, i) => '<circle cx="' + (44 + i * 18) + '" cy="238" r="4" fill="#cfd4dc"/><rect x="' + (42 + i * 18) + '" y="246" width="4" height="10" fill="#6a6a74"/>').join(""),
      '<linearGradient id="skvu" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#3ad16a"/><stop offset=".65" stop-color="#ffd23f"/><stop offset="1" stop-color="#ff4a3a"/></linearGradient>' +
      '<filter id="skglow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>');
  }

  /* 5. S Galvez St and Erato St */
  function skcorner() {
    let bricks = "";
    for (let r = 0; r < 9; r++) for (let i = 0; i < 12; i++) bricks += '<rect x="' + (i * 26 + (r % 2 ? 13 : 0) - 13) + '" y="' + (120 + r * 12) + '" width="24" height="10" fill="' + ((r + i) % 3 ? "#8e4432" : "#9b4b36") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sks5)"/>' +
      '<rect x="30" y="54" width="22" height="66" fill="#26304a"/><rect x="60" y="34" width="26" height="86" fill="#2a3452"/><rect x="300" y="44" width="24" height="76" fill="#26304a"/><rect x="334" y="62" width="30" height="58" fill="#2a3452"/>' +
      '<rect x="66" y="44" width="3" height="3" fill="#ffd98a" class="sk-flk"/><rect x="306" y="56" width="3" height="3" fill="#ffd98a" class="sk-flk sk-flk2"/>' +
      '<path d="M120 120v-26q80 -40 160 0v26z" fill="#b8c2cc"/><path d="M128 96q72 -32 144 0" stroke="#eef2f6" stroke-width="3" fill="none"/><path d="M124 106h152" stroke="#8a96a2" stroke-width="2"/>' +
      '<rect x="118" y="106" width="164" height="14" fill="#5a6672"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (124 + i * 16) + '" y="109" width="8" height="8" fill="#ffd98a" class="' + (i % 3 ? "" : "sk-flk") + '"/>').join("") +
      '<rect x="0" y="118" width="300" height="110" fill="#7a3a2a"/>' + bricks +
      tag("SILKK", 26, 186, 50, BLUE, -6) + tag("SHOCKER", 120, 214, 22, GOLD, -4) +
      '<path class="sk-drip" d="M70 190v16" stroke="' + BLUE + '" stroke-width="3"/><path class="sk-drip" d="M150 192v12" stroke="' + BLUE + '" stroke-width="3" style="animation-delay:-1.2s"/>' +
      '<g transform="translate(186 124)">' + bolt(20, 0, 1.4, GOLD) + '</g>' +
      '<rect x="300" y="118" width="100" height="110" fill="#bdb6aa"/><rect x="0" y="228" width="400" height="32" fill="#3a3a3e"/>' +
      '<rect x="336" y="70" width="5" height="158" fill="#2f2f2f"/>' + sign(286, 70, 106, "S GALVEZ ST") + sign(300, 96, 78, "ERATO ST") +
      '<g transform="translate(250 180)"><rect x="0" y="0" width="16" height="28" rx="5" fill="#d0d0d0"/><circle class="sk-spr" cx="8" cy="-4" r="4" fill="' + BLUE + '" opacity=".8"/><circle class="sk-spr sk-spr2" cx="12" cy="-6" r="3" fill="' + BLUE + '" opacity=".7"/></g>',
      sky("sks5", "#0b1430", "#3a4a7a"));
  }

  window.SCENES = { skstop, skmade, skschool, skplaques, skcorner };
})();
