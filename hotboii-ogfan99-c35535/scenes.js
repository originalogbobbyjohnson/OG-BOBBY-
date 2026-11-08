/* hotboii scenes (Regions tab: South Florida region; Orlando - born there 2000, raised in Pine Hills on the west side).
   CSS classes prefixed hb- (the page's own anim-train slides the bus in).
   1 LYNX Link 125 rolling down Silver Star Rd into the Pine Hills Transfer Center.
   2 Lake Eola at night: the big fountain throwing colored water, swans on the lake, downtown behind.
   3 The Citrus Bowl stadium in Orlando's west side under the lights.
   4 The big observation wheel on International Drive turning at dusk, palms swaying.
   5 Pine Hills Rd and Silver Star Rd: green signs, HOTBOII tagged on the wall, the downtown Orlando towers behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes hbjet{0%,100%{transform:scaleY(.8)}50%{transform:scaleY(1.08)}}.hb-jet{transform-box:fill-box;transform-origin:50% 100%;animation:hbjet 1.6s ease-in-out infinite}.hb-jet2{animation-delay:-.8s}' +
    '@keyframes hbhue{0%{fill:#ff4d6d}33%{fill:#3fd3ff}66%{fill:#ffd23f}100%{fill:#ff4d6d}}.hb-hue{animation:hbhue 4s linear infinite}' +
    '@keyframes hbspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.hb-spin{transform-box:fill-box;transform-origin:50% 50%;animation:hbspin 26s linear infinite}' +
    '@keyframes hbglow{0%,100%{opacity:.35}50%{opacity:1}}.hb-glow{animation:hbglow 1.2s ease-in-out infinite}.hb-glow2{animation-delay:-.6s}' +
    '@keyframes hbswim{0%,100%{transform:translateX(0)}50%{transform:translateX(26px)}}.hb-swim{animation:hbswim 7s ease-in-out infinite}' +
    '@keyframes hbsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.hb-sway{transform-box:fill-box;transform-origin:50% 100%;animation:hbsway 3s ease-in-out infinite}.hb-sway2{animation-delay:-1.5s}' +
    '@keyframes hbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.hb-sp{animation:hbspray 1.4s ease-out infinite}.hb-sp2{animation-delay:.45s}' +
    '@keyframes hbcar{from{transform:translateX(-90px)}to{transform:translateX(470px)}}.hb-car{animation:hbcar 6s linear infinite}.hb-car2{animation-duration:8s;animation-delay:-4s}' +
    '@keyframes hbbeam{0%,100%{opacity:.15}50%{opacity:.45}}.hb-beam{animation:hbbeam 2s ease-in-out infinite}.hb-beam2{animation-delay:-1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const label = (x, w, txt) => '<rect x="' + x + '" y="232" width="' + w + '" height="20" rx="3" fill="#000" opacity=".6"/><text x="' + (x + w / 2) + '" y="246" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const HOT = "#ff4d2e", TEAL = "#2ec4b6", GOLD = "#ffd23f";
  const palm = (x, base, h, s, cls) => {
    const top = base - h;
    return '<g><path d="M' + (x - 3 * s) + ' ' + base + 'Q' + (x + 3 * s) + ' ' + (base - h / 2) + ' ' + (x - 1 * s) + ' ' + top + 'h' + (4 * s) + 'Q' + (x + 6 * s) + ' ' + (base - h / 2) + ' ' + (x + 3 * s) + ' ' + base + 'z" fill="#6f5f48"/>' +
      '<g class="hb-sway ' + (cls || "") + '" fill="#2f6b3a">' + [-80, -50, -20, 10, 40, 70, 200, 160].map(a => '<path transform="rotate(' + a + ' ' + (x + s) + ' ' + top + ')" d="M' + (x + s) + ' ' + top + 'l' + (30 * s) + ' ' + (-7 * s) + 'l' + (-4 * s) + ' ' + (11 * s) + 'z"/>').join("") + '</g></g>';
  };
  /* downtown Orlando: the stepped-crown tower and the tower with the lit spire crown */
  const skyline = (fill, lit) => '<g fill="' + fill + '"><rect x="60" y="96" width="24" height="64"/><rect x="88" y="80" width="20" height="80"/>' +
    '<rect x="150" y="54" width="34" height="106"/><rect x="156" y="44" width="22" height="12"/><rect x="162" y="36" width="10" height="10"/>' +
    '<rect x="200" y="66" width="30" height="94"/><path d="M200 66l15 -26l15 26z"/><rect x="244" y="86" width="22" height="74"/><rect x="272" y="100" width="26" height="60"/><rect x="306" y="90" width="18" height="70"/></g>' +
    (lit ? '<path d="M205 64l10 -18l10 18z" fill="#7fd3ff" class="hb-glow"/><rect x="160" y="40" width="14" height="4" fill="' + GOLD + '" class="hb-glow hb-glow2"/>' : '');
  const car = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="46" height="13" rx="4" fill="' + c + '"/><rect x="10" y="' + (y - 7) + '" width="24" height="8" rx="3" fill="' + c + '"/><circle cx="10" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="36" cy="' + (y + 14) + '" r="4" fill="#111"/><rect x="44" y="' + (y + 3) + '" width="3" height="3" fill="#fff6c2"/></g>';

  /* 1. LYNX Link 125 into the Pine Hills Transfer Center */
  function hbstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (50 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1b2630"/>').join("");
    const bus = '<g class="anim-train"><rect x="32" y="116" width="322" height="78" rx="10" fill="#f4f6f7" stroke="#6d757c" stroke-width="2"/>' + win +
      '<path d="M32 162h322v10H32z" fill="#d6247a"/><path d="M32 174h322v5H32z" fill="#2b4fa3"/>' +
      '<rect x="318" y="124" width="32" height="42" rx="4" fill="#1b2630"/><rect x="262" y="118" width="88" height="11" rx="2" fill="#111"/><text x="306" y="127" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">125 PINE HILLS</text>' +
      '<circle cx="88" cy="196" r="13" fill="#222"/><circle cx="88" cy="196" r="5.5" fill="#999"/><circle cx="300" cy="196" r="13" fill="#222"/><circle cx="300" cy="196" r="5.5" fill="#999"/><circle cx="350" cy="184" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#hbs1)"/><circle cx="330" cy="38" r="18" fill="#fff2b8" opacity=".9"/>' +
      palm(24, 120, 92, 1, "") + palm(376, 120, 84, .9, "hb-sway2") +
      '<path d="M84 80h232l-14 18H98z" fill="#d6247a"/><path d="M84 80h232v-4H84z" fill="#2b4fa3"/>' +
      '<g fill="#5a6168"><rect x="100" y="98" width="5" height="22"/><rect x="198" y="98" width="5" height="22"/><rect x="296" y="98" width="5" height="22"/></g>' +
      '<rect x="106" y="50" width="188" height="22" rx="2" fill="#111"/><text x="200" y="65" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">PINE HILLS TRANSFER CENTER</text>' +
      '<rect x="0" y="194" width="400" height="66" fill="#5d5f63"/><rect x="0" y="194" width="400" height="6" fill="#b9b4a8"/>' +
      '<path d="M0 226h40M70 226h40M140 226h40M210 226h40M280 226h40M350 226h40" stroke="#f2d64b" stroke-width="3"/>' +
      bus + label(70, 260, "LYNX LINK 125 · SILVER STAR RD"),
      sky("hbs1", "#86c9ec", "#e2f2f8"));
  }

  /* 2. Lake Eola fountain at night */
  function hbeola() {
    const swan = (x, y) => '<g class="hb-swim"><ellipse cx="' + x + '" cy="' + y + '" rx="14" ry="6" fill="#f4f4f4"/><path d="M' + (x + 10) + ' ' + y + 'q6 -16 0 -18q-4 0 -2 4" stroke="#f4f4f4" stroke-width="3" fill="none"/><path d="M' + (x + 8) + ' ' + (y - 18) + 'l-5 2" stroke="#ff8a3d" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#hbe1)"/>' +
      skyline("#1e1b38", true) +
      '<g fill="#ffe7a8" opacity=".6">' + [154, 164, 174, 204, 214, 248, 256].map((x, i) => '<rect x="' + x + '" y="' + (70 + (i % 3) * 18) + '" width="4" height="4"/>').join("") + '</g>' +
      '<rect x="0" y="160" width="400" height="100" fill="#0f2238"/>' +
      '<g stroke="#4a6a8a" stroke-width="2" opacity=".5"><path d="M20 210h40M120 226h50M260 214h40M320 236h50"/></g>' +
      /* the fountain: round tiers on a pedestal, jets changing color */
      '<g><path class="hb-jet hb-hue" d="M196 128q4 -60 8 0z" fill="#ff4d6d"/><path class="hb-jet hb-jet2 hb-hue" d="M168 138q-14 -36 -2 0z" fill="#3fd3ff"/><path class="hb-jet hb-jet2 hb-hue" d="M232 138q14 -36 2 0z" fill="#3fd3ff"/>' +
      '<path class="hb-jet hb-hue" d="M150 150q-26 -30 -6 0z" fill="#ffd23f"/><path class="hb-jet hb-hue" d="M250 150q26 -30 6 0z" fill="#ffd23f"/>' +
      '<ellipse cx="200" cy="132" rx="34" ry="6" fill="#d9d4c6"/><path d="M174 132l10 22h32l10 -22z" fill="#cfc8b6"/><ellipse cx="200" cy="154" rx="58" ry="8" fill="#e4dfd0"/>' +
      '<path d="M150 154l12 18h76l12 -18z" fill="#cfc8b6"/><ellipse cx="200" cy="172" rx="70" ry="7" fill="#8a8f96"/>' +
      '<g fill="#fff6c2">' + Array.from({ length: 7 }, (_, i) => '<circle class="hb-glow' + (i % 2 ? ' hb-glow2' : '') + '" cx="' + (156 + i * 15) + '" cy="156" r="2"/>').join("") + '</g></g>' +
      '<ellipse cx="200" cy="196" rx="80" ry="10" fill="#ff4d6d" opacity=".18" class="hb-hue"/>' +
      swan(60, 210) + swan(310, 222) +
      label(110, 180, "LAKE EOLA · DOWNTOWN ORLANDO"),
      sky("hbe1", "#0a0a1e", "#2a1f4a"));
  }

  /* 3. The Citrus Bowl stadium under the lights */
  function hbbowl() {
    const tower = (x) => '<rect x="' + (x - 2) + '" y="30" width="4" height="100" fill="#6a6f78"/><rect x="' + (x - 16) + '" y="22" width="32" height="14" fill="#2a2e36"/>' +
      '<g fill="#fffbe0">' + [0, 1, 2, 3].map(i => '<circle cx="' + (x - 11 + i * 7.3) + '" cy="29" r="2.6"/>').join("") + '</g>' +
      '<path class="hb-beam' + (x > 200 ? ' hb-beam2' : '') + '" d="M' + (x - 14) + ' 36L' + (x - 60) + ' 150h90z" fill="#fffbe0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hbb1)"/>' +
      '<g fill="#fff" opacity=".7"><circle cx="40" cy="30" r="1"/><circle cx="120" cy="16" r="1"/><circle cx="300" cy="20" r="1"/><circle cx="370" cy="40" r="1"/></g>' +
      tower(70) + tower(330) +
      /* the bowl: tiered decks, orange accent band */
      '<path d="M30 200V120q170 -40 340 0v80z" fill="#c9c4ba"/><path d="M30 130q170 -38 340 0v14q-170 -36 -340 0z" fill="#ff8a1e"/>' +
      '<g fill="#a9a499">' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (44 + i * 27) + '" y="150" width="6" height="50"/>').join("") + '</g>' +
      '<path d="M30 160q170 -30 340 0" stroke="#8e897e" stroke-width="2" fill="none"/>' +
      '<g fill="#f7f3e8">' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (70 + i * 46) + '" y="170" width="26" height="16" rx="2"/>').join("") + '</g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#4a4d52"/><rect x="0" y="200" width="400" height="4" fill="#9a958c"/>' +
      palm(18, 204, 70, .7, "") + palm(386, 204, 66, .7, "hb-sway2") +
      car("hb-car", 222, "#d93b3b") + car("hb-car hb-car2", 222, "#e8e8e8") +
      label(90, 220, "THE CITRUS BOWL · WEST ORLANDO"),
      sky("hbb1", "#0d1430", "#3a2a5a"));
  }

  /* 4. The big wheel on International Drive */
  function hbwheel() {
    const spokes = Array.from({ length: 16 }, (_, i) => { const a = i * Math.PI / 8; return '<path d="M0 0L' + (72 * Math.cos(a)).toFixed(1) + ' ' + (72 * Math.sin(a)).toFixed(1) + '" stroke="#e8eef4" stroke-width="1.5"/>'; }).join("");
    const pods = Array.from({ length: 16 }, (_, i) => { const a = i * Math.PI / 8; return '<circle cx="' + (76 * Math.cos(a)).toFixed(1) + '" cy="' + (76 * Math.sin(a)).toFixed(1) + '" r="5.5" fill="' + (i % 2 ? TEAL : "#f4f6f8") + '" stroke="#5a6a7a"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#hbw1)"/><circle cx="70" cy="60" r="22" fill="#ffcf7a" opacity=".9"/>' +
      '<g transform="translate(220 112)"><g class="hb-spin"><circle r="72" fill="none" stroke="#f4f6f8" stroke-width="4"/><circle r="66" fill="none" stroke="#cfd8e0" stroke-width="1.5"/>' + spokes + pods + '</g><circle r="8" fill="#5a6a7a"/></g>' +
      '<path d="M190 200L216 116h8L250 200z" fill="#8a96a2"/>' +
      '<rect x="120" y="186" width="200" height="16" fill="#3a3550"/><g fill="' + GOLD + '"><circle class="hb-glow" cx="140" cy="194" r="3"/><circle class="hb-glow hb-glow2" cx="180" cy="194" r="3"/><circle class="hb-glow" cx="260" cy="194" r="3"/><circle class="hb-glow hb-glow2" cx="300" cy="194" r="3"/></g>' +
      '<rect x="0" y="202" width="400" height="58" fill="#55585e"/><rect x="0" y="202" width="400" height="4" fill="#b9b4a8"/>' +
      palm(40, 206, 110, 1, "") + palm(92, 206, 84, .8, "hb-sway2") + palm(370, 206, 104, .95, "") +
      label(80, 240, "THE BIG WHEEL · INTERNATIONAL DRIVE"),
      sky("hbw1", "#ff9a6a", "#5a3a7a"));
  }

  /* 5. Pine Hills Rd and Silver Star Rd, downtown Orlando behind */
  function hbcorner() {
    const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#hbc1)"/>' +
      '<g transform="translate(0 0)">' + skyline("#2e2440", true) + '</g>' +
      palm(30, 154, 104, 1, "") +
      /* painted block wall */
      '<rect x="0" y="154" width="400" height="78" fill="#e7d7c4"/>' +
      '<g stroke="#c9b8a3" stroke-width="1">' + Array.from({ length: 4 }, (_, r) => '<path d="M0 ' + (170 + r * 16) + 'h400"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M' + (i * 40 + (r % 2) * 20) + ' ' + (154 + r * 16) + 'v16"/>').join("")).join("") + '</g>' +
      tag("HOTBOII", 26, 214, 48, HOT, -5) +
      tag("KUT DA FAN ON", 236, 184, 15, TEAL, 4) + tag("PINE HILLS", 248, 222, 17, GOLD, -3) +
      '<g fill="' + HOT + '" opacity=".75"><circle class="hb-sp" cx="224" cy="200" r="3"/><circle class="hb-sp hb-sp2" cx="232" cy="194" r="2.5"/><circle class="hb-sp" cx="228" cy="206" r="2"/></g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#5e6066"/>' +
      '<rect x="364" y="88" width="5" height="144" fill="#7a7f86"/>' +
      sign(276, 78, 120, "PINE HILLS RD") + sign(282, 104, 114, "SILVER STAR RD") +
      label(12, 252, "PINE HILLS RD &amp; SILVER STAR RD · ORLANDO"),
      sky("hbc1", "#1d1236", "#c2554a"));
  }

  window.SCENES = { hbstop, hbeola, hbbowl, hbwheel, hbcorner };
})();
