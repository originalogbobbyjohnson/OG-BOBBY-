/* Phife Dawg game (NYC map, Queens: St. Albans). Five small animated SVGs, 400 x 260. CSS classes are prefixed "pf-".
   1. The Q4 bus stop at Linden Blvd & Francis Lewis Blvd: the bus pulling in at the blue stop sign, Linden Blvd shops behind.
   2. St. Albans Park on Merrick Blvd: the basketball court at sundown ("I was the b-ball playing, fly rhyme saying").
   3. Maracas Bay, Trinidad: the green Northern Range dropping into the bay ("Trini gladiator", his family's island).
   4. Peachtree St, Atlanta, at night ("Everybody knows I go to Georgia often"): the skyline with the gold-topped tower, a plane crossing.
   5. 192nd St and 113th Ave, St. Albans ("192 is the area where we represent"): green signs, frame houses, his name on the wall,
      and two blocks down at Linden Blvd the green co-name sign Malik "Phife Dawg" Taylor Way. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes pf-flick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.pf-flk{animation:pf-flick 2.4s infinite}.pf-flk2{animation-delay:1.1s}' +
    '@keyframes pf-bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-46px)}}.pf-ball{animation:pf-bounce .9s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes pf-net{0%,100%{transform:skewX(0)}50%{transform:skewX(6deg)}}.pf-net{transform-box:fill-box;transform-origin:50% 0;animation:pf-net 1.8s ease-in-out infinite}' +
    '@keyframes pf-wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.pf-wv{animation:pf-wave 3.2s ease-in-out infinite}.pf-wv2{animation-delay:-1.6s}' +
    '@keyframes pf-sway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(5deg)}}.pf-palm{transform-box:fill-box;transform-origin:50% 100%;animation:pf-sway 3s ease-in-out infinite}.pf-palm2{animation-delay:-1.5s}' +
    '@keyframes pf-plane{from{transform:translateX(-60px)}to{transform:translateX(470px)}}.pf-plane{animation:pf-plane 11s linear infinite}' +
    '@keyframes pf-bus{from{transform:translateX(440px)}to{transform:translateX(-150px)}}.pf-bus{animation:pf-bus 9s linear infinite}' +
    '@keyframes pf-car{from{transform:translateX(-90px)}to{transform:translateX(460px)}}.pf-car{animation:pf-car 6s linear infinite}' +
    '@keyframes pf-flag{0%,100%{transform:skewY(0)}50%{transform:skewY(5deg)}}.pf-flag{transform-box:fill-box;transform-origin:0 50%;animation:pf-flag 1.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const badge = (x, y, w, label, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="' + w + '" height="20" rx="4" fill="' + color + '"/><text x="' + (x + w / 2) + '" y="' + (y + 4.5) +
    '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">' + label + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* a 9 drawn by hand: round head + straight stem (never a hooked 9). x = left edge, y = baseline, sz = font size */
  const nine = (x, y, sz, c) => { const r = sz * 0.2, w = sz * 0.13; return '<circle cx="' + (x + r + w / 2 + sz * 0.02) + '" cy="' + (y - sz * 0.72 + r) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + w + '"/><path d="M' + (x + 2 * r + w / 2 + sz * 0.02) + ' ' + (y - sz * 0.72 + r) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w + '"/>'; };
  const RED = "#e63b2e", GOLD = "#f2c230", GREEN = "#2fae5a", CREAM = "#f7f3ea", SIGN = "#0f6b3a";

  /* 1. The Q4 stop at Linden Blvd & Francis Lewis Blvd: the bus pulling in at the blue stop sign, Linden Blvd shops behind */
  function linden() {
    let shops = "";
    [[0, 70, "#7a4a3a"], [74, 66, "#5d6b7a"], [144, 80, "#8a6d4a"], [228, 64, "#6a4a5e"], [296, 104, "#4f6a58"]].forEach(([x, w, col], i) => {
      shops += '<rect x="' + x + '" y="70" width="' + w + '" height="96" fill="' + col + '"/><rect x="' + x + '" y="66" width="' + w + '" height="6" fill="#2b2b33"/>' +
        '<rect x="' + (x + 6) + '" y="80" width="' + (w - 12) + '" height="22" fill="#ffd98a" opacity=".55" class="pf-flk' + (i % 2 ? " pf-flk2" : "") + '"/>' +
        '<rect x="' + (x + 6) + '" y="116" width="' + (w - 12) + '" height="44" fill="#1d2030"/><rect x="' + (x + 6) + '" y="116" width="' + (w - 12) + '" height="44" fill="#ffd98a" opacity=".3"/>' +
        '<path d="M' + x + ' 104h' + w + 'l-4 10H' + (x + 4) + 'z" fill="' + [RED, GREEN, GOLD, "#3f7fbf", RED][i] + '"/>';
    });
    let win = "";
    for (let x = 30; x < 230; x += 36) win += '<rect x="' + x + '" y="148" width="26" height="22" rx="2" fill="#9fc6e0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pf1)"/>' + stars(10) + shops +
      /* sidewalk */
      '<rect x="0" y="166" width="400" height="18" fill="#8a8c90"/><rect x="0" y="182" width="400" height="4" fill="#5f6166"/><rect x="0" y="186" width="400" height="74" fill="#2f3138"/>' +
      /* the Q4 pulling in */
      '<g class="anim-train">' +
        '<rect x="10" y="138" width="270" height="62" rx="6" fill="#e9edf2" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="10" y="176" width="270" height="6" fill="#0039a6"/>' +
        '<rect x="258" y="144" width="18" height="40" rx="2" fill="#9fc6e0"/>' +
        '<rect x="160" y="140" width="92" height="12" rx="2" fill="#111"/><text x="206" y="149.5" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb000">Q4 CAMBRIA HTS</text>' +
        '<circle cx="60" cy="202" r="11" fill="#111"/><circle cx="60" cy="202" r="4" fill="#888"/><circle cx="230" cy="202" r="11" fill="#111"/><circle cx="230" cy="202" r="4" fill="#888"/>' +
        '<circle cx="276" cy="190" r="4" fill="#fff6c2"/>' +
      '</g>' +
      /* street */
      '<rect x="0" y="212" width="400" height="48" fill="#2f3138"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<text x="120" y="254" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="' + CREAM + '" letter-spacing="3">LINDEN BLVD</text>' +
      /* the blue bus stop sign */
      '<rect x="331" y="96" width="4" height="114" fill="#9aa3ab"/>' +
      '<rect x="306" y="46" width="54" height="56" rx="4" fill="#0039a6" stroke="#fff" stroke-width="2"/>' +
      '<text x="333" y="62" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS STOP</text>' +
      '<rect x="314" y="68" width="38" height="22" rx="3" fill="#fff"/><text x="333" y="85" text-anchor="middle" ' + font + ' font-size="16" fill="#0039a6">Q4</text>' +
      /* street signs */
      '<rect x="296" y="112" width="100" height="16" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1"/><text x="346" y="124" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Linden Blvd</text>' +
      '<rect x="292" y="130" width="106" height="16" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1"/><text x="345" y="142" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">Francis Lewis Blvd</text>',
      sky("pf1", "#141a3a", "#e98a5a"));
  }

  /* 2. St. Albans Park basketball court */
  function courts() {
    let fence = "";
    for (let x = 0; x <= 400; x += 10) fence += '<path d="M' + x + ' 92l10 70M' + (x + 10) + ' 92l-10 70" stroke="#9aa3ab" stroke-width=".8" opacity=".55"/>';
    let trees = "";
    [[20, 78, 34], [70, 70, 30], [330, 74, 36], [380, 80, 28], [250, 84, 24]].forEach(([x, y, r]) => trees += '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#2d5a2f"/><circle cx="' + (x + r * .4) + '" cy="' + (y - r * .3) + '" r="' + (r * .6) + '" fill="#3c7440"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#pf2)"/>' + '<circle cx="300" cy="70" r="26" fill="#ffcf6a" opacity=".85"/>' + trees +
      /* chain-link fence and posts */
      fence + [0, 100, 200, 300, 398].map(x => '<rect x="' + (x - 1.5) + '" y="88" width="3" height="76" fill="#7d8790"/>').join("") + '<rect x="0" y="88" width="400" height="3" fill="#7d8790"/>' +
      /* court */
      '<path d="M0 164h400v96H0z" fill="#3b6f8f"/><path d="M40 164h320l40 96H0z" fill="#c2553a"/>' +
      '<path d="M120 164h160l14 50H106z" fill="#d76a4c" stroke="#fff" stroke-width="2"/><path d="M106 214q94 40 188 0" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<path d="M40 164h320" stroke="#fff" stroke-width="2"/>' +
      /* hoop: pole, backboard, rim, net */
      '<rect x="196" y="74" width="8" height="92" fill="#4a4f57"/><rect x="164" y="48" width="72" height="44" rx="2" fill="#f4f6f8" stroke="#4a4f57" stroke-width="3"/>' +
      '<rect x="186" y="66" width="28" height="20" fill="none" stroke="' + RED + '" stroke-width="2.5"/>' +
      '<ellipse cx="200" cy="92" rx="15" ry="3.5" fill="none" stroke="#e8562b" stroke-width="3"/>' +
      '<g class="pf-net"><path d="M186 93l4 16h20l4-16M192 93l2 16M200 93v16M208 93l-2 16M188 100h24" stroke="#fff" stroke-width="1.2" fill="none"/></g>' +
      /* ball */
      '<g class="pf-ball"><circle cx="262" cy="214" r="11" fill="#e8742b" stroke="#6b2d0f" stroke-width="1.5"/><path d="M251 214h22M262 203v22M254 206q8 8 0 16M270 206q-8 8 0 16" stroke="#6b2d0f" stroke-width="1.2" fill="none"/></g>' +
      '<ellipse cx="262" cy="230" rx="10" ry="2.5" fill="#000" opacity=".25"/>' +
      /* the park sign */
      '<rect x="18" y="186" width="5" height="40" fill="#5a3b22"/><rect x="60" y="186" width="5" height="40" fill="#5a3b22"/>' +
      '<rect x="8" y="170" width="70" height="26" rx="3" fill="#3f6b3a" stroke="' + CREAM + '" stroke-width="1.5"/>' +
      '<text x="43" y="181" text-anchor="middle" ' + font + ' font-size="8" fill="' + CREAM + '">ST. ALBANS</text><text x="43" y="191" text-anchor="middle" ' + font + ' font-size="8" fill="' + CREAM + '">PARK</text>',
      sky("pf2", "#f28a4b", "#ffd9a0"));
  }

  /* 3. Maracas Bay, Trinidad */
  function maracas() {
    const palm = (x, y, cls) => '<g class="pf-palm ' + cls + '"><path d="M' + x + ' ' + y + 'q6-40-4-78" stroke="#6b4a2a" stroke-width="5" fill="none"/>' +
      [[-34, -6], [-26, 14], [30, -10], [34, 10], [0, -30]].map(([dx, dy]) => '<path d="M' + (x - 4) + ' ' + (y - 78) + 'q' + (dx / 2) + ' ' + (dy - 10) + ' ' + dx + ' ' + (dy + 8) + '" stroke="#2f8a3c" stroke-width="6" fill="none" stroke-linecap="round"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pf3)"/>' + '<circle cx="320" cy="48" r="20" fill="#fff3c4"/>' +
      /* the Northern Range */
      '<path d="M0 96q40-46 90-40t80-6q40-26 90 6t70 4q40-20 70-2v70H0z" fill="#2f7a3a"/>' +
      '<path d="M0 120q50-30 110-20t90 0q60-26 110 4t90 2v40H0z" fill="#3f9447"/>' +
      /* the bay */
      '<path d="M0 140h400v52H0z" fill="#1fa3b8"/><path d="M0 140h400v8H0z" fill="#53c6d4"/>' +
      '<g class="pf-wv"><path d="M-20 160q20-6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bff0f5" stroke-width="2" fill="none"/></g>' +
      '<g class="pf-wv pf-wv2"><path d="M-20 176q20-6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#e6fbfd" stroke-width="2.5" fill="none"/></g>' +
      /* golden sand crescent */
      '<path d="M0 192q200-22 400 0v68H0z" fill="#ecd08a"/><path d="M0 200q200-20 400 0" stroke="#f7e6b4" stroke-width="3" fill="none"/>' +
      palm(40, 236, "") + palm(352, 240, "pf-palm2") +
      /* the flag of Trinidad and Tobago on a pole */
      '<rect x="186" y="150" width="3" height="80" fill="#7b7b7b"/>' +
      '<g class="pf-flag"><rect x="189" y="150" width="46" height="28" fill="#ce1126"/><path d="M189 150h10l36 28h-10z" fill="#fff"/><path d="M192 150h5l36 28h-5z" fill="#000"/></g>' +
      '<text x="214" y="236" ' + font + ' font-size="13" fill="#6b4a2a" opacity=".85">MARACAS BAY</text>',
      sky("pf3", "#4fb3e8", "#c8ecf8"));
  }

  /* 4. Peachtree St, Atlanta, at night */
  function peachtree() {
    let city = "";
    [[0, 120, 40], [44, 100, 36], [84, 132, 30], [118, 86, 40], [210, 108, 44], [258, 92, 34], [296, 124, 40], [340, 104, 30], [372, 128, 28]].forEach(([x, y, w]) => {
      city += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (200 - y) + '" fill="#1e2442"/>';
      for (let yy = y + 8; yy < 194; yy += 12) for (let xx = x + 5; xx < x + w - 5; xx += 9) city += '<rect class="pf-flk' + ((xx + yy) % 3 ? "" : " pf-flk2") + '" x="' + xx + '" y="' + yy + '" width="4" height="6" fill="#ffd98a" opacity=".7"/>';
    });
    /* the tall tower with its gold-topped spire */
    let tw = "";
    for (let yy = 64; yy < 196; yy += 9) for (let xx = 166; xx < 200; xx += 8) tw += '<rect x="' + xx + '" y="' + yy + '" width="4" height="5" fill="#ffe7a8" opacity=".75"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pf4)"/>' + stars(16) +
      '<g class="pf-plane"><path d="M0 40h22l6-6h4l-3 6h8l3-3h3l-2 5 2 5h-3l-3-3h-8l3 6h-4l-6-6H0z" fill="#cfd6df"/><circle cx="2" cy="42" r="1.6" fill="#ff4d4d" class="pf-flk"/></g>' +
      city +
      '<path d="M160 200V62h46v138z" fill="#2a3256"/>' + tw +
      '<path d="M160 62l23-22 23 22z" fill="#d4a72c"/><path d="M176 40h14l-7-14z" fill="#e8bf45"/><rect x="181.5" y="6" width="3" height="22" fill="#e8bf45"/>' +
      '<path d="M168 62h30" stroke="#f7d774" stroke-width="2"/>' +
      /* street */
      '<rect x="0" y="200" width="400" height="60" fill="#2b2d33"/><path d="M0 230h400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<g class="pf-car"><rect x="0" y="236" width="56" height="15" rx="5" fill="' + RED + '"/><rect x="10" y="230" width="30" height="9" rx="3" fill="#bfe1f5"/><circle cx="12" cy="252" r="4.5" fill="#111"/><circle cx="44" cy="252" r="4.5" fill="#111"/></g>' +
      /* street sign */
      '<rect x="338" y="150" width="5" height="54" fill="#4b5563"/><rect x="292" y="140" width="100" height="20" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="342" y="154" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">Peachtree St</text>',
      sky("pf4", "#07081a", "#3a2f5e"));
  }

  /* 5. 192nd St and 113th Ave, St. Albans */
  function corner() {
    const house = (x, w, col, roof) => '<rect x="' + x + '" y="98" width="' + w + '" height="62" fill="' + col + '"/><path d="M' + (x - 6) + ' 100l' + (w / 2 + 6) + '-30l' + (w / 2 + 6) + ' 30z" fill="' + roof + '"/>' +
      '<rect x="' + (x + 8) + '" y="110" width="14" height="14" fill="#ffd98a" class="pf-flk"/><rect x="' + (x + w - 22) + '" y="110" width="14" height="14" fill="#ffd98a"/>' +
      '<rect x="' + (x - 2) + '" y="134" width="' + (w + 4) + '" height="4" fill="#efe6d2"/>' + [0, 1, 2].map(i => '<rect x="' + (x + i * (w / 2) - 1) + '" y="138" width="3" height="22" fill="#efe6d2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#pf5)"/>' + stars(12) +
      house(14, 74, "#8a6d55", "#4a3a30") + house(104, 70, "#c9b89a", "#5a4636") + house(190, 66, "#6f7f8f", "#3d4652") +
      /* down the block toward Linden Blvd: the green co-name sign on its pole */
      '<rect x="274" y="84" width="3" height="76" fill="#4b5563"/><rect x="242" y="76" width="68" height="20" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1"/>' +
      '<text x="276" y="85" text-anchor="middle" ' + font + ' font-size="5.6" fill="#fff">MALIK "PHIFE DAWG"</text><text x="276" y="92.5" text-anchor="middle" ' + font + ' font-size="5.6" fill="#fff">TAYLOR WAY</text>' +
      '<rect x="250" y="98" width="52" height="11" rx="1.5" fill="' + SIGN + '" stroke="#fff" stroke-width=".8"/><text x="276" y="106" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">Linden Blvd</text>' +
      '<circle cx="310" cy="70" r="3" fill="#fff6c2" class="pf-flk"/>' +
      /* the Q4 rolling by */
      '<g class="pf-bus"><rect x="0" y="134" width="110" height="28" rx="4" fill="#e9edf2" stroke="#6b7280" stroke-width="1.5"/><rect x="0" y="152" width="110" height="4" fill="#0039a6"/>' +
        [8, 30, 52, 74].map(x => '<rect x="' + x + '" y="139" width="16" height="10" rx="1.5" fill="#9fc6e0"/>').join("") +
        '<rect x="94" y="139" width="12" height="16" rx="1.5" fill="#9fc6e0"/><text x="104" y="135" text-anchor="end" ' + font + ' font-size="7" fill="#111">Q4</text>' +
        '<circle cx="20" cy="163" r="5" fill="#111"/><circle cx="88" cy="163" r="5" fill="#111"/></g>' +
      /* the wall */
      '<rect x="0" y="164" width="300" height="66" fill="#6b4637"/>' +
      (() => { let b = ""; for (let y = 170; y < 230; y += 8) b += '<path d="M0 ' + y + 'h300" stroke="#55372b" stroke-width="1"/>'; return b; })() +
      tag("PHIFE", 18, 214, 44, GOLD, -6) + tag("FIVE FOOTER", 150, 222, 19, CREAM, -4) + tag("MALIK", 200, 190, 26, RED, -8) +
      /* sidewalk and street */
      '<rect x="0" y="230" width="400" height="30" fill="#55575c"/><rect x="0" y="230" width="400" height="4" fill="#8a8c90"/>' +
      /* the corner sign post */
      '<rect x="356" y="96" width="5" height="136" fill="#3d4b3f"/>' +
      '<rect x="306" y="98" width="92" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="333" y="114" ' + font + ' font-size="12" fill="#fff">1</text>' + nine(339.8, 114, 12, "#fff") + '<text x="347" y="114" ' + font + ' font-size="12" fill="#fff">2 St</text>' +
      '<rect x="306" y="124" width="92" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="352" y="140" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">113 Av</text>' +
      '<circle class="pf-flk" cx="358" cy="92" r="4" fill="#fff6c2"/>',
      sky("pf5", "#0b0d1c", "#34304f"));
  }

  window.SCENES = { linden: linden, courts: courts, maracas: maracas, peachtree: peachtree, corner: corner };
})();
