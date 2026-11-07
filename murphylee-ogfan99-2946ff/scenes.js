/* murphylee scenes (Regions tab: St. Louis + Ohio; University City, "Da Skool Boy"). CSS classes prefixed ml- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mlglow{0%,100%{opacity:.45}50%{opacity:1}}.ml-glow{animation:mlglow 2.2s ease-in-out infinite}.ml-g2{animation-delay:-1.1s}' +
    '@keyframes mlflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.ml-flag{transform-box:fill-box;transform-origin:0% 50%;animation:mlflag 1.6s ease-in-out infinite}' +
    '@keyframes mlbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.ml-bob{animation:mlbob .8s ease-in-out infinite}.ml-bob2{animation-delay:-.4s}' +
    '@keyframes mlspin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.ml-spin{transform-box:fill-box;transform-origin:50% 50%;animation:mlspin 1.2s linear infinite}' +
    '@keyframes mlbeam{0%,100%{transform:rotate(-30deg)}50%{transform:rotate(30deg)}}.ml-beam{transform-box:fill-box;transform-origin:50% 100%;animation:mlbeam 4s ease-in-out infinite}' +
    '@keyframes mlbubble{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-34px);opacity:0}}.ml-bu{animation:mlbubble 1.8s ease-out infinite}.ml-bu2{animation-delay:-.6s}.ml-bu3{animation-delay:-1.2s}' +
    '@keyframes mlspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ml-sp{animation:mlspray 1.4s ease-out infinite}.ml-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const RED = "#ff5a36", GOLD = "#ffcf3f", PURP = "#9b6bff", BLUE = "#0b6cb5", MLRED = "#d9262e";

  /* 1. Skinker station on the MetroLink Blue Line, down in the open cut under Forest Park Pkwy: concrete walls, the canopy, the black station sign with the Blue Line bullet, the white light-rail car sliding in */
  function mlstation() {
    const car = '<g class="anim-train"><rect x="24" y="112" width="320" height="76" rx="10" fill="#f2f3f5" stroke="#7d848c" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (40 + i * 42) + '" y="124" width="30" height="28" rx="3" fill="#1d2833"/>').join("") +
      '<rect x="24" y="158" width="320" height="7" fill="' + MLRED + '"/><rect x="24" y="167" width="320" height="5" fill="' + BLUE + '"/>' +
      '<path d="M84 112l20 -16M124 112l-20 -16" stroke="#555" stroke-width="2"/><rect x="88" y="94" width="32" height="3" fill="#555"/>' +
      '<circle class="ml-glow" cx="338" cy="176" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ml1)"/>' +
      '<g fill="#7ea866"><circle cx="40" cy="34" r="22"/><circle cx="90" cy="26" r="18"/><circle cx="330" cy="30" r="24"/><circle cx="378" cy="38" r="18"/></g>' +
      '<rect x="0" y="44" width="400" height="18" fill="#9a9a94"/><rect x="0" y="40" width="400" height="6" fill="#c4c1b8"/>' +
      '<rect x="0" y="62" width="400" height="128" fill="#b9b5ab"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 62v128" stroke="#a7a398" stroke-width="2"/>').join("") +
      '<rect x="0" y="62" width="400" height="12" fill="#3a4048"/>' + [60, 180, 300].map((x, i) => '<rect class="ml-glow' + (i === 1 ? " ml-g2" : "") + '" x="' + x + '" y="74" width="50" height="4" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="188" width="400" height="8" fill="#f2c200"/><rect x="0" y="196" width="400" height="64" fill="#8f8b84"/>' + car +
      '<rect x="210" y="208" width="170" height="38" rx="3" fill="#111"/><text x="316" y="233" text-anchor="middle" ' + font + ' font-size="20" fill="#fff">Skinker</text>' +
      '<rect x="216" y="217" width="40" height="20" rx="10" fill="' + BLUE + '"/><text x="236" y="231" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">BLUE</text>',
      sky("ml1", "#7cc0ee", "#d6ecf8"));
  }

  /* 2. University City High School: the 1930 red-brick school with its limestone trim and central tower, the flag on the pole, the yellow bus out front ("a good high school out in U-City") */
  function mlschool() {
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="14" height="22" fill="#2a3442"/><rect x="' + x + '" y="' + (y + 10) + '" width="14" height="2" fill="#e6dcc4"/>';
    let wins = ""; for (let r = 0; r < 2; r++) for (let i = 0; i < 6; i++) { wins += win(30 + i * 20, 104 + r * 36) + win(250 + i * 20, 104 + r * 36); }
    return svg(
      '<rect width="400" height="260" fill="url(#ml2)"/>' +
      '<rect x="20" y="92" width="360" height="104" fill="#9a4a33"/><rect x="20" y="88" width="360" height="8" fill="#e6dcc4"/>' + wins +
      '<rect x="160" y="40" width="80" height="156" fill="#a65238"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (156 + i * 15) + '" y="32" width="9" height="10" fill="#e6dcc4"/>').join("") +
      '<rect x="156" y="40" width="88" height="6" fill="#e6dcc4"/><path d="M186 92v-30q14 -18 28 0v30z" fill="#2a3442"/><path d="M190 88v-24q10 -12 20 0v24z" class="ml-glow" fill="#ffd98a" opacity=".6"/>' +
      '<rect x="168" y="100" width="64" height="16" fill="#e6dcc4"/><text x="200" y="112" text-anchor="middle" ' + font + ' font-size="7.5" fill="#5a2a1e">UNIVERSITY CITY</text>' +
      '<path d="M182 196v-46q18 -22 36 0v46z" fill="#e6dcc4"/><path d="M188 196v-40q12 -14 24 0v40z" fill="#3a2a20"/>' +
      '<rect x="0" y="196" width="400" height="16" fill="#cfc8b8"/><rect x="0" y="212" width="400" height="48" fill="#5f9a4a"/>' +
      '<rect x="340" y="40" width="3" height="156" fill="#bbb"/><g class="ml-flag"><rect x="343" y="42" width="34" height="20" fill="#fff"/>' + Array.from({ length: 4 }, (_, i) => '<rect x="343" y="' + (42 + i * 5) + '" width="34" height="2.5" fill="#c8262c"/>').join("") + '<rect x="343" y="42" width="14" height="10" fill="#1f3a7a"/></g>' +
      '<g class="ml-bob"><rect x="30" y="200" width="110" height="40" rx="6" fill="#f2b81e"/>' + Array.from({ length: 4 }, (_, i) => '<rect x="' + (40 + i * 22) + '" y="206" width="16" height="12" rx="2" fill="#2a3442"/>').join("") + '<rect x="30" y="224" width="110" height="3" fill="#222"/><circle cx="54" cy="240" r="7" fill="#222"/><circle cx="118" cy="240" r="7" fill="#222"/></g>',
      sky("ml2", "#5aa9e6", "#cfe7f7"));
  }

  /* 3. The corner store: a St. Louis food mart with the hot red chip bags clipped up and a pitcher of red drink on the counter ("I need some Kool-Aid with my red hot riplets") */
  function mlstore() {
    const bag = (x, y, k) => '<g class="ml-bob' + (k ? " ml-bob2" : "") + '"><path d="M' + x + ' ' + y + 'h26l-2 38h-22z" fill="#d42020" stroke="#8a1010" stroke-width="1.5"/><rect x="' + (x + 2) + '" y="' + (y - 4) + '" width="22" height="5" fill="#8a1010"/>' +
      '<text x="' + (x + 13) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="7" fill="' + GOLD + '">RED</text><text x="' + (x + 13) + '" y="' + (y + 25) + '" text-anchor="middle" ' + font + ' font-size="7" fill="' + GOLD + '">HOT</text>' +
      '<path d="M' + (x + 8) + ' ' + (y + 30) + 'q5 -4 10 0" stroke="#ffb03a" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#2a1c22"/>' +
      '<rect x="0" y="0" width="400" height="40" fill="#1a1218"/><rect x="100" y="8" width="200" height="26" rx="4" fill="#111"/><text class="ml-glow" x="200" y="27" text-anchor="middle" ' + font + ' font-size="17" fill="' + RED + '">FOOD MART</text>' +
      '<rect x="20" y="52" width="360" height="6" fill="#6a5a4a"/><rect x="20" y="112" width="360" height="6" fill="#6a5a4a"/>' +
      [30, 64, 98, 132, 166, 200, 234, 268, 302, 336].map((x, i) => bag(x, 62 + (i % 2) * 4, i % 2)).join("") +
      [30, 72, 114, 156, 198, 240, 282, 324].map((x, i) => '<rect x="' + x + '" y="' + (124 + i % 3 * 2) + '" width="30" height="24" rx="3" fill="' + ["#f2b81e", "#3a8ad1", "#7bd389", "#e86ad1"][i % 4] + '"/>').join("") +
      '<rect x="0" y="168" width="400" height="92" fill="#6b4a32"/><rect x="0" y="164" width="400" height="8" fill="#8a6a4a"/>' +
      '<path d="M170 198h52l-6 52h-40z" fill="#ffffff" opacity=".35" stroke="#fff" stroke-width="2"/><path d="M174 210h44l-5 38h-34z" fill="#e0182c"/><path d="M222 206q16 4 10 24" stroke="#fff" stroke-width="3" fill="none" opacity=".6"/>' +
      [184, 196, 206].map((x, i) => '<circle class="ml-bu' + (i ? " ml-bu" + (i + 1) : "") + '" cx="' + x + '" cy="214" r="2.5" fill="#ff8a9a"/>').join("") +
      '<path d="M250 236l16 -40h18l16 40z" fill="#d42020"/><rect x="252" y="234" width="46" height="6" fill="#8a1010"/>' +
      '<rect x="60" y="200" width="70" height="44" rx="4" fill="#222"/><rect x="66" y="206" width="58" height="22" fill="#3a5a3a"/><text x="95" y="222" text-anchor="middle" ' + font + ' font-size="12" fill="#7bd389">$0.99</text>',
      "");
  }

  /* 4. The parking lot: candy-paint Cutlass sitting up on 28-inch rims, the wheels spinning, fresh sneakers lined up on the hood ("take a look at my shoes") */
  function mlshoes() {
    const rim = cx => '<circle cx="' + cx + '" cy="206" r="30" fill="#111"/><g class="ml-spin"><circle cx="' + cx + '" cy="206" r="22" fill="#d8dde3"/>' +
      Array.from({ length: 6 }, (_, i) => { const a = i * Math.PI / 3; return '<path d="M' + cx + ' 206L' + (cx + 20 * Math.cos(a)).toFixed(1) + ' ' + (206 + 20 * Math.sin(a)).toFixed(1) + '" stroke="#8a929c" stroke-width="4"/>'; }).join("") + '</g><circle cx="' + cx + '" cy="206" r="5" fill="#555"/>';
    const shoe = (x, c) => '<path d="M' + x + ' 116q0 -12 10 -12l8 6h16q8 0 8 8v4h-42z" fill="#fff" stroke="#999" stroke-width="1"/><path d="M' + (x + 10) + ' 108l16 6" stroke="' + c + '" stroke-width="3"/><rect x="' + x + '" y="116" width="42" height="4" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ml4)"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#3a3d42"/>' + [40, 140, 240, 340].map(x => '<path d="M' + x + ' 214l-12 46" stroke="#f2f2f2" stroke-width="3"/>').join("") +
      '<rect x="0" y="80" width="12" height="130" fill="#555"/><circle class="ml-glow" cx="30" cy="80" r="10" fill="#fff6c2"/><rect x="6" y="76" width="30" height="6" fill="#555"/>' +
      '<path d="M50 176v-26q0 -10 12 -12l40 -8l28 -26h120l34 26l50 6q14 2 14 14v26z" fill="' + PURP + '" stroke="#4a2a8a" stroke-width="2"/>' +
      '<path d="M140 128l20 -20h50l22 20z" fill="#1d2833"/><path d="M236 128l-10 -20h18l20 20z" fill="#1d2833"/>' +
      '<rect x="50" y="160" width="300" height="5" fill="#d8dde3"/><circle class="ml-glow" cx="344" cy="148" r="5" fill="#fff6c2"/>' +
      rim(110) + rim(296) + shoe(64, RED) + shoe(114, GOLD) + shoe(270, "#3ec1f3") +
      '<text x="200" y="40" text-anchor="middle" ' + font + ' font-size="15" letter-spacing="2" fill="' + GOLD + '">TAKE A LOOK AT MY SHOES</text>',
      sky("ml4", "#2a1a4a", "#e86a4a"));
  }

  /* 5. Balson Ave and Shaftesbury Ave by U-City High at dusk: green signs, MURPH tagged big on the brick, University City Hall's white octagon tower with its searchlight sweeping behind */
  function mlcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ml5)"/>' +
      '<g class="ml-beam"><path d="M190 18L60 -4L60 34z" fill="#fff8d0" opacity=".22"/></g>' +
      /* University City Hall: the eight-sided white tower over the old Magazine Building */
      '<rect x="110" y="96" width="170" height="40" fill="#e9e4d6"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (118 + i * 20) + '" y="104" width="10" height="20" fill="#5a6070"/>').join("") +
      '<path d="M172 96v-54l8 -6h20l8 6v54z" fill="#f2eee2" stroke="#c8c2b0" stroke-width="1.5"/><path d="M180 96v-60M200 96v-60" stroke="#d4cdbb" stroke-width="1.5"/>' +
      [52, 70].map(y => '<rect x="182" y="' + y + '" width="6" height="12" fill="#5a6070"/><rect x="192" y="' + y + '" width="6" height="12" fill="#5a6070"/>').join("") +
      '<path d="M174 36l16 -16l16 16z" fill="#c8c2b0"/><circle class="ml-glow" cx="190" cy="18" r="4" fill="#fff6c2"/>' +
      '<g fill="#3a2a40"><rect x="0" y="100" width="90" height="36"/><rect x="300" y="92" width="100" height="44"/></g>' +
      '<rect x="0" y="132" width="400" height="92" fill="#7a3a2c"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#6a3024" stroke-width="1"/>').join("") +
      tag("MURPH", 22, 190, 58, RED, -6) + tag("SKOOL BOY", 226, 214, 18, GOLD, -3) + tag("U CITY", 24, 216, 16, "#fff", -3) + tag("WAT DA HOOK", 100, 216, 16, PURP, -3) +
      '<g class="ml-sp"><circle cx="210" cy="160" r="3" fill="' + RED + '" opacity=".7"/></g><g class="ml-sp ml-sp2"><circle cx="216" cy="154" r="2" fill="' + RED + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(294, 98, 90, "Balson Ave") + sign(276, 124, 124, "Shaftesbury Ave"),
      sky("ml5", "#1c1638", "#e0784a"));
  }

  window.SCENES = { mlstation: mlstation, mlschool: mlschool, mlstore: mlstore, mlshoes: mlshoes, mlcorner: mlcorner };
})();
