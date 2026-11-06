/* Digable Planets game (NYC map, Brooklyn: Fort Greene, where Butterfly, Ladybug Mecca and Doodlebug all lived when they made Blowout Comb).
   1. Lafayette Av on the C, underground under Fulton St.
   2. The Space Needle in Seattle (Butterfly's hometown) with planets in orbit.
   3. The Silver Theatre in Silver Spring, Maryland (Ladybug Mecca's hometown): cream Art Deco front, tall blade sign, chasing marquee bulbs.
   4. The Liberty Bell in Philadelphia (Doodlebug's hometown, where he and Butterfly met), Independence Hall's brick tower behind.
   5. Lafayette Av & S Elliott Pl: green street signs, the wall tagged DIGABLE PLANETS, the Lafayette Avenue Presbyterian Church tower behind.
   400 x 260 SVGs. No logos, no faces. All scene CSS classes are prefixed "dp-". */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dpcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.dp-car{animation:dpcar 7s linear infinite}.dp-car2{animation-delay:-3.5s}' +
    '@keyframes dptw{0%,100%{opacity:.2}50%{opacity:1}}.dp-tw{animation:dptw 1.8s ease-in-out infinite}.dp-tw2{animation-delay:.6s}.dp-tw3{animation-delay:1.2s}' +
    '@keyframes dpflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.25}55%{opacity:.9}}.dp-flk{animation:dpflick 2.6s infinite}' +
    '@keyframes dporbit{to{transform:rotate(360deg)}}.dp-orb{transform-origin:200px 70px;animation:dporbit 14s linear infinite}.dp-orb2{animation-duration:22s;animation-direction:reverse}' +
    '@keyframes dpchase{0%,100%{opacity:.25}50%{opacity:1}}.dp-bulb{animation:dpchase .9s linear infinite}.dp-b2{animation-delay:.3s}.dp-b3{animation-delay:.6s}' +
    '@keyframes dpfly{0%{transform:translate(0,0)}50%{transform:translate(60px,-14px)}100%{transform:translate(120px,4px)}}.dp-bird{animation:dpfly 6s ease-in-out infinite alternate}.dp-bird2{animation-delay:-2s}' +
    '@keyframes dpleaf{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(-30px,240px) rotate(360deg)}}.dp-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:dpleaf 6s linear infinite}.dp-leaf2{animation-delay:-2s}.dp-leaf3{animation-delay:-4s}' +
    '@keyframes dpsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.dp-sway{transform-box:fill-box;transform-origin:50% 0;animation:dpsway 3s ease-in-out infinite}' +
    '@keyframes dpbeam{0%,100%{opacity:.15}50%{opacity:.45}}.dp-beam{animation:dpbeam 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = (n, maxY) => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="dp-tw dp-tw' + (i % 3 + 1) + '" cx="' + ((i * 97 + 13) % 400) + '" cy="' + (6 + (i * 53) % (maxY || 90)) + '" r="' + (i % 3 ? 0.9 : 1.5) + '" fill="#fff"/>'; return s; };
  const TEAL = "#7fd1c7", AMBER = "#f2a541", VIOLET = "#c084fc", CREAM = "#f4ead8", BLUE = "#0039a6";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col) => '<g><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';

  /* 1. Lafayette Av (C), underground under Fulton St: white tile, a teal band, the black sign with the C, the C train sliding in */
  function lafayette() {
    let tiles = "";
    for (let y = 30; y < 150; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#f1efe8"/>';
    let band = "";
    for (let x = 0; x < 400; x += 14) band += '<rect x="' + x + '" y="40" width="7" height="6" fill="' + (x % 28 ? "#2e6b63" : "#e2d9b8") + '"/>';
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#dcd8cc"/>' + tiles +
      '<rect x="0" y="36" width="400" height="14" fill="#1d4a44"/>' + band +
      '<rect x="0" y="0" width="400" height="30" fill="#26262a"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="dp-flk" style="animation-delay:-' + i * 0.7 + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      '<rect x="60" y="58" width="280" height="32" rx="3" fill="#111"/><rect x="60" y="58" width="280" height="3" fill="#fff"/>' +
      '<text x="76" y="80" ' + font + ' font-size="15" fill="#fff">Lafayette Av</text>' + bullet(318, 74, "C", BLUE) +
      [20, 380].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="130" fill="#5b6b78"/>').join("") +
      '<g class="anim-train">' +
        '<rect x="10" y="102" width="300" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="110" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 148, "C", BLUE) +
        '<rect x="10" y="140" width="280" height="4" fill="' + BLUE + '"/>' +
        '<circle cx="22" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#eab308"/><rect x="0" y="170" width="400" height="90" fill="#5d5a55"/>' +
      '<rect x="0" y="170" width="400" height="3" fill="#3b3935"/>' +
      person(326, 196, "#1b1b1b") + person(350, 199, "#2c2c34") +
      txt("FORT GREENE", 150, 236, 12, "#f1ead8", 'letter-spacing="4"'));
  }

  /* 2. The Space Needle, Seattle (Butterfly's hometown) at night, planets orbiting over it, Elliott Bay below */
  function needle() {
    let water = "";
    for (let i = 0; i < 9; i++) water += '<rect class="dp-tw dp-tw' + (i % 3 + 1) + '" x="' + (20 + i * 42) + '" y="' + (226 + (i % 3) * 8) + '" width="22" height="2" fill="#9fd8ff" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ns)"/>' + stars(30, 120) +
      /* mountain far away */
      '<path d="M240 204 Q300 150 330 142 Q360 150 420 204z" fill="#3b4566" opacity=".75"/><path d="M308 156 Q322 145 330 142 Q340 145 352 156 L342 160 L334 154 L326 161 L318 155z" fill="#e9eef7" opacity=".85"/>' +
      /* planets in orbit */
      '<g class="dp-orb"><circle cx="200" cy="10" r="9" fill="' + AMBER + '"/><ellipse cx="200" cy="10" rx="16" ry="4" fill="none" stroke="#ffe0a8" stroke-width="2"/></g>' +
      '<g class="dp-orb dp-orb2"><circle cx="292" cy="70" r="6" fill="' + TEAL + '"/><circle cx="108" cy="70" r="4" fill="' + VIOLET + '"/></g>' +
      /* skyline */
      '<rect x="0" y="182" width="60" height="40" fill="#1b2036"/><rect x="66" y="170" width="34" height="52" fill="#20263f"/><rect x="300" y="176" width="44" height="46" fill="#1b2036"/><rect x="350" y="186" width="50" height="36" fill="#20263f"/>' +
      /* the needle: three legs pinched at the waist, saucer top, spire */
      '<path d="M172 222 L182 222 L196 146 L194 100 L188 100 L190 146z" fill="#e8e6e1"/>' +
      '<path d="M228 222 L218 222 L204 146 L206 100 L212 100 L210 146z" fill="#e8e6e1"/>' +
      '<path d="M197 222 L203 222 L201 146 L202 100 L198 100 L199 146z" fill="#d6d3cc"/>' +
      '<rect x="188" y="144" width="24" height="4" rx="1" fill="#c9c6bf"/><rect x="186" y="186" width="28" height="3" fill="#c9c6bf" opacity=".8"/>' +
      '<path d="M150 90 Q200 74 250 90 L238 98 Q200 106 162 98z" fill="#f2f0eb"/>' +
      '<path d="M162 98 Q200 106 238 98 L232 102 Q200 110 168 102z" fill="' + AMBER + '"/>' +
      '<rect x="176" y="80" width="48" height="8" rx="3" fill="#d6d3cc"/>' +
      '<path d="M199 52 L201 52 L202 80 L198 80z" fill="#e8e6e1"/><circle class="dp-flk" cx="200" cy="50" r="2.5" fill="#ff5a5a"/>' +
      [170, 186, 200, 214, 230].map((x, i) => '<rect class="dp-bulb dp-b' + (i % 3 + 1) + '" x="' + (x - 2) + '" y="91" width="4" height="3" fill="#fff6c2"/>').join("") +
      '<rect x="0" y="220" width="400" height="40" fill="#0f2238"/>' + water +
      txt("SEATTLE", 60, 248, 11, CREAM, 'letter-spacing="4" opacity=".85"'),
      sky("ns", "#070a1f", "#2a2f5a"));
  }

  /* 3. The Silver Theatre, Silver Spring MD (Ladybug Mecca's hometown): cream Art Deco front, tall blade sign, curved marquee with chasing bulbs */
  function silver() {
    let bulbs = "";
    for (let i = 0; i < 22; i++) bulbs += '<circle class="dp-bulb dp-b' + (i % 3 + 1) + '" cx="' + (96 + i * 10) + '" cy="150" r="2.4" fill="#fff3b0"/>';
    let blade = "";
    for (let i = 0; i < 6; i++) blade += '<circle class="dp-bulb dp-b' + (i % 3 + 1) + '" cx="200" cy="' + (36 + i * 16) + '" r="2" fill="#fff3b0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sv)"/>' + stars(18, 40) +
      /* side wings */
      '<rect x="20" y="96" width="90" height="130" fill="#e8dcc2"/><rect x="290" y="96" width="90" height="130" fill="#e8dcc2"/>' +
      [30, 50, 70, 90].map(x => '<rect x="' + x + '" y="110" width="10" height="60" fill="#b9ab8c"/>').join("") +
      [300, 320, 340, 360].map(x => '<rect x="' + x + '" y="110" width="10" height="60" fill="#b9ab8c"/>').join("") +
      /* center block with streamline bands */
      '<rect x="110" y="70" width="180" height="156" fill="#f1e7cf"/>' +
      [80, 88, 96].map(y => '<rect x="110" y="' + y + '" width="180" height="3" fill="#c9b78f"/>').join("") +
      /* blade sign */
      '<rect x="186" y="22" width="28" height="104" rx="4" fill="#1e3a5f" stroke="#c9d6e6" stroke-width="2"/>' +
      ['S', 'I', 'L', 'V', 'E', 'R'].map((c, i) => '<text x="200" y="' + (42 + i * 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#e8eef7">' + c + '</text>').join("") +
      /* marquee */
      '<path d="M88 140 Q200 124 312 140 L312 160 Q200 146 88 160z" fill="#1e3a5f" stroke="#c9d6e6" stroke-width="2"/>' + bulbs +
      '<rect x="120" y="164" width="160" height="22" fill="#fbf6e6" stroke="#333" stroke-width="1"/>' +
      txt("TONIGHT: JAZZ ON FILM", 200, 179, 10, "#1e1e1e") +
      /* doors */
      '<rect x="140" y="192" width="120" height="34" fill="#3a2f22"/>' + [150, 180, 210, 240].map(x => '<rect x="' + x + '" y="196" width="22" height="30" fill="#f5d27a" opacity=".55"/>').join("") +
      '<rect x="0" y="226" width="400" height="34" fill="#4f4c48"/><rect x="0" y="226" width="400" height="4" fill="#8d8a84"/>' +
      person(70, 200, "#2a2a2e") + person(330, 202, "#2a2a2e") +
      txt("SILVER SPRING, MD", 200, 250, 10, CREAM, 'letter-spacing="3" opacity=".85"'),
      sky("sv", "#141a33", "#3e3a5a"));
  }

  /* 4. The Liberty Bell, Philadelphia (Doodlebug's hometown), Independence Hall's brick tower and white steeple behind the glass */
  function liberty() {
    return svg(
      '<rect width="400" height="260" fill="url(#lb)"/>' +
      /* Independence Hall tower */
      '<rect x="240" y="96" width="70" height="130" fill="#9c4a32"/>' +
      [104, 130, 156, 182].map(y => [250, 270, 290].map(x => '<rect x="' + x + '" y="' + y + '" width="10" height="16" fill="#f2efe6"/>').join("")).join("") +
      '<rect x="252" y="60" width="46" height="36" fill="#f2efe6"/><circle cx="275" cy="78" r="10" fill="#f8f6ef" stroke="#555" stroke-width="1.5"/><path d="M275 78v-7M275 78l5 2" stroke="#333" stroke-width="1.5"/>' +
      '<rect x="258" y="40" width="34" height="20" fill="#f2efe6"/><path d="M262 40 L275 14 L288 40z" fill="#f2efe6"/><rect x="274" y="4" width="2" height="12" fill="#c9a24a"/>' +
      '<rect x="120" y="140" width="120" height="86" fill="#9c4a32"/>' + [134, 160, 186, 212].map(x => '<rect x="' + x + '" y="156" width="12" height="20" fill="#f2efe6"/>').join("") +
      '<rect x="310" y="140" width="90" height="86" fill="#9c4a32"/>' + [322, 348, 374].map(x => '<rect x="' + x + '" y="156" width="12" height="20" fill="#f2efe6"/>').join("") +
      /* the glass pavilion frame */
      '<rect x="10" y="70" width="210" height="160" fill="#cfe6f2" opacity=".25" stroke="#7d8b95" stroke-width="3"/>' +
      [80, 150].map(x => '<rect x="' + x + '" y="70" width="3" height="160" fill="#7d8b95"/>').join("") +
      /* wooden yoke + the bell */
      '<rect x="56" y="84" width="118" height="14" rx="3" fill="#5a3a22"/><rect x="62" y="98" width="8" height="128" fill="#5a3a22"/><rect x="160" y="98" width="8" height="128" fill="#5a3a22"/>' +
      '<g class="dp-sway">' +
        '<rect x="106" y="98" width="18" height="10" fill="#3a2a1c"/>' +
        '<path d="M115 106 C92 106 88 124 86 150 C84 168 74 178 70 190 L160 190 C156 178 146 168 144 150 C142 124 138 106 115 106z" fill="#8a6a3a"/>' +
        '<path d="M70 190 L160 190 L162 198 L68 198z" fill="#6e5230"/>' +
        '<path d="M96 126 C96 120 104 116 112 116" stroke="#b08a52" stroke-width="3" fill="none"/>' +
        '<path d="M120 190 L118 176 L123 164 L119 150 L122 140" stroke="#2a1d10" stroke-width="2.5" fill="none"/>' +
      '</g>' +
      '<g class="dp-bird"><path d="M20 40 q6-6 12 0 q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<g class="dp-bird dp-bird2"><path d="M60 26 q5-5 10 0 q5-5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#b9b2a4"/><rect x="0" y="226" width="400" height="4" fill="#8f897d"/>' +
      txt("PHILADELPHIA", 300, 248, 11, "#3a2a1c", 'letter-spacing="4"'),
      sky("lb", "#8ec5e8", "#e7f2f8"));
  }

  /* 5. Lafayette Av & S Elliott Pl: green signs, brownstones, the church tower behind, the wall tagged */
  function corner() {
    let leaves = "";
    for (let i = 0; i < 6; i++) leaves += '<ellipse class="dp-leaf dp-leaf' + (i % 3 + 1) + '" cx="' + (40 + i * 60) + '" cy="20" rx="4" ry="2.5" fill="' + (i % 2 ? AMBER : "#c96a2a") + '"/>';
    const stoop = x => '<rect x="' + x + '" y="70" width="70" height="80" fill="#6e4636"/>' +
      [84, 112].map(y => [x + 10, x + 30, x + 50].map(xx => '<rect class="dp-tw dp-tw' + ((xx + y) % 3 + 1) + '" x="' + xx + '" y="' + y + '" width="11" height="16" fill="#ffd98a" opacity=".8"/>').join("")).join("") +
      '<rect x="' + x + '" y="66" width="70" height="5" fill="#4d2f24"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dc)"/>' + stars(14, 40) +
      /* the church: brownstone tower with a pointed spire */
      '<rect x="168" y="38" width="48" height="112" fill="#7a3f2e"/><path d="M164 40 L192 4 L220 40z" fill="#5c2f22"/>' +
      '<path d="M182 64 a10 10 0 0 1 20 0 v20 h-20z" fill="#2a1a14"/><circle cx="192" cy="104" r="8" fill="#e9c46a" opacity=".7"/>' +
      '<rect x="216" y="80" width="70" height="70" fill="#6f3a2a"/><path d="M216 80 L251 56 L286 80z" fill="#5c2f22"/>' +
      stoop(10) + stoop(88) + stoop(300) +
      /* trees */
      '<circle cx="150" cy="90" r="26" fill="#2f5d3a"/><circle cx="296" cy="96" r="22" fill="#2f5d3a"/>' +
      /* the wall */
      '<rect x="0" y="134" width="400" height="92" fill="#3b3d44"/>' +
      (() => { let b = ""; for (let y = 144; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("DIGABLE", 14, 186, 40, TEAL, -5) + tag("PLANETS", 40, 218, 32, AMBER, -4) +
      tag("COOL LIKE DAT", 196, 176, 16, VIOLET, -3) + tag("DIG PLANS", 200, 214, 18, CREAM, -5) +
      leaves +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="dp-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + TEAL + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<g class="dp-car dp-car2"><rect x="0" y="240" width="40" height="11" rx="4" fill="' + AMBER + '"/><circle cx="9" cy="251" r="4" fill="#111"/><circle cx="31" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="300" y="66" width="98" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Lafayette Av", 349, 82, 11.5, "#fff") +
      '<rect x="300" y="92" width="98" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("S Elliott Pl", 349, 108, 11.5, "#fff") +
      '<circle class="dp-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("dc", "#0b0a1a", "#2c2846"));
  }

  window.SCENES = { lafayette: lafayette, needle: needle, silver: silver, liberty: liberty, corner: corner };
})();
