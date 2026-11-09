/* seanpaul scenes (Regions tab: CARIBBEAN; born and raised in Kingston, Jamaica). CSS classes prefixed sp- (the page's own anim-train is kept).
   1 Half Way Tree Transport Centre, the JUTC hub: a yellow JUTC bus pulling under the canopy, black stop sign with the 72 / 75 / 900 (the Hope Road routes), the white Half Way Tree clock tower across the square.
   2 The national pool at Independence Park, Kingston: he played on Jamaica's national water polo team from 13 to 21; lane ropes, a goal, the ball bobbing.
   3 A Kingston street dance: stacked sound-system speaker boxes, a DUTTY CUP banner, lights flashing.
   4 Wolmer's Boys' School, National Heroes Circle (founded 1729; maroon and gold), his old school.
   5 Heroes Circle and Marescaux Road: green street signs, DUTTY tagged on the wall, National Heroes Park's palms and white monument behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes spbob{0%,100%{transform:translateY(0)}50%{transform:translateY(4px)}}.sp-bob{animation:spbob 1.8s ease-in-out infinite}' +
    '@keyframes spwave{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.sp-wv{animation:spwave 3s ease-in-out infinite}.sp-wv2{animation-delay:-1.5s}' +
    '@keyframes spthump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.sp-cone{transform-box:fill-box;transform-origin:50% 50%;animation:spthump .45s ease-in-out infinite}.sp-cone2{animation-delay:-.22s}' +
    '@keyframes spblink{0%,100%{opacity:1}50%{opacity:.2}}.sp-lt{animation:spblink .9s infinite}.sp-lt2{animation-delay:-.45s}' +
    '@keyframes spflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.sp-flag{transform-box:fill-box;transform-origin:0 50%;animation:spflag 2s ease-in-out infinite}' +
    '@keyframes spsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.sp-palm{transform-box:fill-box;transform-origin:50% 100%;animation:spsway 3.4s ease-in-out infinite}.sp-palm2{animation-delay:-1.7s}' +
    '@keyframes spspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sp-sp{animation:spspray 1.4s ease-out infinite}.sp-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12.5" fill="#fff">' + txt + '</text>';
  const BLUE = "#3ec7f5", GOLD = "#ffd23f", PINK = "#ff4f9a", MAROON = "#7a1f2b";
  const palm = (x, y, s, cls) => '<g class="sp-palm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q' + (4 * s) + ' -' + (40 * s) + ' ' + (2 * s) + ' -' + (80 * s) + '" stroke="#7a5a3a" stroke-width="' + (5 * s) + '" fill="none"/>' +
    [[-34, -6], [-26, 12], [30, -8], [24, 12], [0, -26]].map(d => '<path d="M' + (x + 2 * s) + ' ' + (y - 80 * s) + 'q' + (d[0] * s / 2) + ' ' + (d[1] * s - 10 * s) + ' ' + (d[0] * s) + ' ' + (d[1] * s + 8 * s) + '" stroke="#2f7d32" stroke-width="' + (4 * s) + '" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const clock = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-14" y="0" width="28" height="110" fill="#f4f2ea" stroke="#cfcabd" stroke-width="1.5"/><rect x="-18" y="-6" width="36" height="8" fill="#e6e2d6"/>' +
    '<path d="M-14 -6l14 -26l14 26z" fill="#e6e2d6" stroke="#cfcabd" stroke-width="1"/><circle cx="0" cy="18" r="10" fill="#ffffff" stroke="#333" stroke-width="2"/><path d="M0 18v-7M0 18h5" stroke="#333" stroke-width="1.6"/>' +
    '<rect x="-6" y="44" width="12" height="20" rx="6" fill="#b9c4cc"/><rect x="-20" y="106" width="40" height="8" fill="#d6d1c3"/></g>';

  /* 1. Half Way Tree Transport Centre */
  function spbus() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1d262e"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="118" width="300" height="74" rx="10" fill="#ffcc00" stroke="#8a6d00" stroke-width="2"/>' + wins +
      '<rect x="40" y="164" width="300" height="5" fill="#222"/><rect x="306" y="126" width="30" height="34" rx="3" fill="#1d262e"/>' +
      '<rect x="304" y="120" width="34" height="8" rx="2" fill="#111"/><text x="321" y="127" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">75</text>' +
      '<path d="M310 172h22v12h-22z" fill="#0b8a3e"/><path d="M310 172l22 12M332 172l-22 12" stroke="#ffcc00" stroke-width="2.4"/><path d="M310 172l11 6l-11 6zM332 172l-11 6l11 6z" fill="#111"/>' +
      '<circle cx="90" cy="194" r="12" fill="#222"/><circle cx="90" cy="194" r="5" fill="#888"/><circle cx="286" cy="194" r="12" fill="#222"/><circle cx="286" cy="194" r="5" fill="#888"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sp1)"/>' +
      '<g fill="#5b7a99"><path d="M0 96l60 -30l50 18l60 -34l60 24l60 -20l110 36v20H0z" opacity=".6"/></g>' +
      clock(200, 4, 0.9) +
      '<rect x="0" y="84" width="400" height="10" fill="#d8dde2"/><path d="M0 84l200 -14l200 14z" fill="#eef1f4" stroke="#b7bec5" stroke-width="1"/>' +
      [30, 130, 270, 370].map(x => '<rect x="' + (x - 3) + '" y="94" width="6" height="104" fill="#8f979e"/>').join("") +
      '<rect x="0" y="198" width="400" height="62" fill="#6b6b68"/><rect x="0" y="198" width="400" height="5" fill="#f2c200"/>' +
      bus +
      '<rect x="10" y="20" width="160" height="56" rx="3" fill="#111"/><text x="90" y="38" text-anchor="middle" ' + font + ' font-size="12.5" fill="#fff">Half Way Tree</text>' +
      '<text x="90" y="50" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="7.5" fill="#cfcfcf">TRANSPORT CENTRE</text>' +
      [["72", 52], ["75", 90], ["900", 128]].map(b => '<circle cx="' + b[1] + '" cy="63" r="11" fill="#ffcc00"/><text x="' + b[1] + '" y="67" text-anchor="middle" ' + font + ' font-size="' + (b[0].length > 2 ? 8.5 : 11) + '" fill="#111">' + b[0] + '</text>').join("") +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="#ffffff">JUTC · HOPE ROAD · HALF WAY TREE</text>',
      sky("sp1", "#5fb2ea", "#dff0fa"));
  }

  /* 2. The pool at Independence Park: water polo */
  function sppool() {
    const ropes = [126, 156, 186, 216].map((y, i) => '<g class="sp-wv' + (i % 2 ? " sp-wv2" : "") + '">' + Array.from({ length: 24 }, (_, j) => '<circle cx="' + (j * 18) + '" cy="' + y + '" r="3" fill="' + (j % 2 ? "#ffffff" : "#e8432b") + '"/>').join("") + '</g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sp2)"/>' +
      '<rect x="0" y="40" width="400" height="56" fill="#3b5163"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="0" y="' + (44 + i * 10) + '" width="400" height="5" fill="#4d667a"/>').join("") +
      '<g class="sp-flag"><path d="M20 18h30v18h-30z" fill="#0b8a3e"/><path d="M20 18l30 18M50 18l-30 18" stroke="#ffcc00" stroke-width="3"/><path d="M20 18l15 9l-15 9zM50 18l-15 9l15 9z" fill="#111"/></g><rect x="18" y="16" width="2" height="30" fill="#666"/>' +
      '<rect x="0" y="96" width="400" height="14" fill="#e8ecef"/>' +
      '<rect x="0" y="110" width="400" height="150" fill="#1fa3e0"/>' + ropes +
      '<g class="sp-wv"><path d="M20 140h40M200 170h50M300 200h40M60 240h60" stroke="#bfeaff" stroke-width="2" stroke-linecap="round" opacity=".7"/></g>' +
      '<rect x="300" y="96" width="70" height="40" fill="none" stroke="#ffffff" stroke-width="4"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (304 + i * 12) + ' 100v34" stroke="#ffffff" stroke-width="1" opacity=".6"/>').join("") +
      '<g class="sp-bob"><circle cx="190" cy="196" r="13" fill="' + GOLD + '"/><path d="M178 192q12 6 24 0M184 184q6 14 0 24M196 184q-6 14 0 24" stroke="#1a5aa0" stroke-width="2" fill="none"/></g>' +
      '<rect x="0" y="228" width="400" height="32" fill="#06121c" opacity=".45"/>' +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="#ffffff">INDEPENDENCE PARK POOL · WATER POLO · AGE 13 TO 21</text>',
      sky("sp2", "#7cc8f0", "#e8f6fc"));
  }

  /* 3. A Kingston street dance */
  function spdance() {
    const box = (x, y, w, h, cls) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="3" fill="#161616" stroke="#3a3a3a" stroke-width="2"/>' +
      '<circle class="sp-cone ' + (cls || "") + '" cx="' + (x + w / 2) + '" cy="' + (y + h / 2) + '" r="' + (Math.min(w, h) / 2 - 6) + '" fill="#2b2b2b" stroke="#555" stroke-width="2"/><circle cx="' + (x + w / 2) + '" cy="' + (y + h / 2) + '" r="5" fill="#666"/>';
    const stack = (x) => box(x, 112, 60, 56) + box(x, 168, 60, 56, "sp-cone2") + box(x + 6, 74, 48, 38, "sp-cone2");
    return svg(
      '<rect width="400" height="260" fill="url(#sp3)"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle class="sp-lt' + (i % 2 ? " sp-lt2" : "") + '" cx="' + (14 + i * 28) + '" cy="' + (30 + (i % 3) * 4) + '" r="4" fill="' + [BLUE, GOLD, PINK][i % 3] + '"/>').join("") +
      '<path d="M0 28q100 14 200 2q100 14 200 -2" stroke="#555" stroke-width="1.5" fill="none"/>' +
      '<rect x="0" y="64" width="400" height="160" fill="#2a2030"/>' +
      '<rect x="110" y="54" width="180" height="34" rx="3" fill="' + GOLD + '"/><text x="200" y="79" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="24" fill="#111">DUTTY CUP</text>' +
      stack(20) + stack(320) + box(96, 150, 50, 74) + box(254, 150, 50, 74, "sp-cone2") +
      '<rect x="160" y="190" width="80" height="34" rx="3" fill="#333"/><circle cx="182" cy="204" r="10" fill="#111" stroke="#666"/><circle cx="218" cy="204" r="10" fill="#111" stroke="#666"/>' +
      '<rect x="0" y="224" width="400" height="36" fill="#3d3a38"/>' +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">STREET DANCE · KINGSTON · GET BUSY</text>',
      sky("sp3", "#0c0a22", "#3a1f4a"));
  }

  /* 4. Wolmer's Boys' School, Heroes Circle */
  function spschool() {
    const wins = (y) => Array.from({ length: 7 }, (_, i) => '<rect x="' + (72 + i * 38) + '" y="' + y + '" width="16" height="22" rx="8" fill="#3d5a6c"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sp4)"/>' +
      '<g fill="#3e7d3a"><circle cx="40" cy="70" r="34"/><circle cx="70" cy="50" r="30"/><circle cx="20" cy="40" r="24"/></g><rect x="40" y="90" width="10" height="80" fill="#6b4a2a"/>' +
      '<path d="M54 82l146 -36l146 36z" fill="' + MAROON + '"/><rect x="60" y="82" width="280" height="96" fill="#f3ead2" stroke="#d9cdb0" stroke-width="1"/>' +
      wins(94) + wins(140) + '<rect x="60" y="126" width="280" height="6" fill="' + MAROON + '"/>' +
      '<rect x="176" y="150" width="48" height="28" fill="' + MAROON + '"/><rect x="186" y="156" width="28" height="22" rx="2" fill="#3b2a1a"/>' +
      '<rect x="150" y="56" width="100" height="18" rx="2" fill="' + MAROON + '" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="70" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">WOLMER’S</text>' +
      '<rect x="0" y="178" width="400" height="82" fill="#4f8a3a"/>' +
      Array.from({ length: 21 }, (_, i) => '<path d="M' + (i * 20) + ' 186v34" stroke="#222" stroke-width="2.5"/>').join("") + '<path d="M0 192h400M0 214h400" stroke="#222" stroke-width="2"/>' +
      '<rect x="0" y="182" width="400" height="5" fill="' + GOLD + '"/>' +
      '<rect x="0" y="226" width="400" height="34" fill="#777570"/>' +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="#ffffff">WOLMER’S BOYS’ SCHOOL · HEROES CIRCLE · 1729</text>',
      sky("sp4", "#58b0ea", "#e6f4fb"));
  }

  /* 5. Heroes Circle and Marescaux Road */
  function spcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sp5)"/>' +
      '<rect x="0" y="100" width="400" height="30" fill="#5a9a48"/>' +
      '<path d="M190 104l14 -84l14 84z" fill="#f4f2ea" stroke="#cfcabd" stroke-width="1.5"/><rect x="176" y="100" width="56" height="8" fill="#e6e2d6"/>' +
      palm(90, 126, 0.9) + palm(300, 126, 0.95, "sp-palm2") + palm(360, 126, 0.75) +
      '<rect x="0" y="126" width="400" height="98" fill="#e9dfc6"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (142 + i * 16) + 'h400" stroke="#d3c7aa" stroke-width="1"/>').join("") +
      Array.from({ length: 6 }, (_, i) => Array.from({ length: 10 }, (_, j) => '<path d="M' + (j * 44 + (i % 2) * 22) + ' ' + (126 + i * 16) + 'v16" stroke="#d3c7aa" stroke-width="1"/>').join("")).join("") +
      '<rect x="0" y="126" width="400" height="5" fill="' + MAROON + '"/><rect x="0" y="131" width="400" height="3" fill="' + GOLD + '"/>' +
      tag("DUTTY", 22, 194, 58, BLUE, -6) + tag("SEAN DA PAUL", 30, 218, 17, "#ffffff", -3) + tag("GET BUSY", 214, 210, 22, GOLD, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(254, 96, 142, "Heroes Circle") + sign(262, 122, 128, "Marescaux Rd") +
      '<g class="sp-sp"><circle cx="164" cy="168" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="sp-sp sp-sp2"><circle cx="170" cy="162" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("sp5", "#74bdea", "#f3e6cc"));
  }

  window.SCENES = { spbus: spbus, sppool: sppool, spdance: spdance, spschool: spschool, spcorner: spcorner };
})();
