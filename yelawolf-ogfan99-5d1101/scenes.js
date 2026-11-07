/* yelawolf scenes (Regions tab: More of the South; Gadsden, Alabama). CSS classes and ids prefixed yw- (the page's own anim-train is kept).
   1 Gadsden Greyhound stop, 503 W Meighan Blvd: a silver-and-blue coach pulling in, the stop sign post on the curb.
   2 Noccalula Falls on Black Creek: the water dropping off the sandstone ledge into the gorge, pines on the rim.
   3 The Coosa River: a bass boat drifting, a catfish jumping (Catfish Billy).
   4 Talladega Superspeedway down the road: the high banking, a box Chevy lapping past ("might go to Talladega and see me a race").
   5 Broad St and 4th St, downtown Gadsden: green signs, YELAWOLF tagged on the brick, the Etowah Memorial Bridge's concrete arches over the Coosa behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ywcloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.yw-cloud{animation:ywcloud 26s linear infinite}.yw-cloud2{animation-delay:-13s}' +
    '@keyframes ywfall{from{transform:translateY(-24px)}to{transform:translateY(0)}}.yw-fall{animation:ywfall .6s linear infinite}' +
    '@keyframes ywmist{0%,100%{opacity:.35;transform:scale(1)}50%{opacity:.7;transform:scale(1.08)}}.yw-mist{transform-box:fill-box;transform-origin:50% 50%;animation:ywmist 2.4s ease-in-out infinite}' +
    '@keyframes ywjump{0%,55%,100%{transform:translate(0,40px) rotate(0)}70%{transform:translate(14px,-18px) rotate(-20deg)}85%{transform:translate(28px,10px) rotate(25deg)}}.yw-fish{transform-box:fill-box;transform-origin:50% 50%;animation:ywjump 3s ease-in-out infinite}' +
    '@keyframes ywbob{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}.yw-bob{animation:ywbob 2s ease-in-out infinite}' +
    '@keyframes ywripple{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.yw-rip{transform-box:fill-box;transform-origin:50% 50%;animation:ywripple 3s ease-out infinite}' +
    '@keyframes ywlap{from{transform:translateX(-220px)}to{transform:translateX(480px)}}.yw-car{animation:ywlap 3.2s linear infinite}.yw-car2{animation-delay:-1.6s}' +
    '@keyframes ywflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.yw-flag{transform-box:fill-box;transform-origin:0% 50%;animation:ywflag 1s ease-in-out infinite}' +
    '@keyframes ywspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.yw-sp{animation:ywspray 1.4s ease-out infinite}.yw-sp2{animation-delay:.45s}' +
    '@keyframes ywblink{0%,100%{opacity:.3}50%{opacity:1}}.yw-led{animation:ywblink 1s steps(2) infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const label = (txt, y) => '<rect x="' + (200 - txt.length * 3.4 - 12) + '" y="' + (y || 232) + '" width="' + (txt.length * 6.8 + 24) + '" height="18" rx="2" fill="#111" opacity=".78"/><text x="200" y="' + ((y || 232) + 13) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const bricks = (x, y, w, h, c, m) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let r = 0; r < h / 8; r++) { s += '<path d="M' + x + ' ' + (y + r * 8) + 'h' + w + '" stroke="' + m + '" stroke-width="1"/>'; for (let k = (r % 2) * 10; k < w; k += 20) s += '<path d="M' + (x + k) + ' ' + (y + r * 8) + 'v8" stroke="' + m + '" stroke-width="1"/>'; } return s; };
  const pine = (x, y, s, c) => '<path d="M' + x + ' ' + (y - 46 * s) + 'l' + (14 * s) + ' ' + (20 * s) + 'h' + (-6 * s) + 'l' + (12 * s) + ' ' + (16 * s) + 'h' + (-6 * s) + 'l' + (12 * s) + ' ' + (14 * s) + 'h' + (-52 * s) + 'l' + (12 * s) + ' ' + (-14 * s) + 'h' + (-6 * s) + 'l' + (12 * s) + ' ' + (-16 * s) + 'h' + (-6 * s) + 'z" fill="' + (c || "#2f5a34") + '"/><rect x="' + (x - 2 * s) + '" y="' + y + '" width="' + (4 * s) + '" height="' + (8 * s) + '" fill="#5a3a22"/>';
  const YEL = "#f2c230", RED = "#b8262e", RIVER = "#6bb3d6", GBLUE = "#1f62b0";

  /* 1. Greyhound stop, 503 W Meighan Blvd */
  function ywstop() {
    const win = Array.from({ length: 8 }, (_, i) => '<rect x="' + (52 + i * 36) + '" y="128" width="28" height="22" rx="3" fill="#24323e"/>').join("");
    const bus = '<g class="anim-train"><rect x="30" y="118" width="330" height="70" rx="10" fill="#d7dbe0" stroke="#7d868f" stroke-width="2"/>' + win +
      '<rect x="30" y="158" width="330" height="10" fill="' + GBLUE + '"/><rect x="30" y="168" width="330" height="3" fill="#fff"/>' +
      '<path d="M360 122q18 4 20 26v34h-20z" fill="#9cc6e8" stroke="#7d868f" stroke-width="2"/><rect x="360" y="160" width="20" height="22" fill="#d7dbe0" stroke="#7d868f" stroke-width="2"/><circle cx="374" cy="176" r="3.5" fill="#fff6c2"/>' +
      '<rect x="40" y="130" width="6" height="40" fill="#24323e"/>' +
      '<circle cx="90" cy="190" r="13" fill="#222"/><circle cx="90" cy="190" r="6" fill="#aab"/><circle cx="300" cy="190" r="13" fill="#222"/><circle cx="300" cy="190" r="6" fill="#aab"/><circle cx="330" cy="190" r="13" fill="#222"/><circle cx="330" cy="190" r="6" fill="#aab"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yws1)"/>' +
      '<g class="yw-cloud"><ellipse cx="80" cy="30" rx="34" ry="9" fill="#fff" opacity=".8"/></g><g class="yw-cloud yw-cloud2"><ellipse cx="60" cy="50" rx="24" ry="6" fill="#fff" opacity=".6"/></g>' +
      pine(20, 104, 1.1) + pine(372, 104, 1.2) + pine(345, 108, .8, "#3a6a3e") +
      '<rect x="60" y="62" width="200" height="50" fill="#e9e3d4" stroke="#8a8478" stroke-width="2"/><rect x="54" y="56" width="212" height="8" fill="#c97a3a"/><rect x="230" y="78" width="22" height="34" fill="#5a6470"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (72 + i * 38) + '" y="76" width="26" height="18" fill="#3c5a6e"/>').join("") +
      '<rect x="0" y="112" width="400" height="8" fill="#bdb6a8"/><rect x="0" y="200" width="400" height="60" fill="#55565a"/><path d="M0 212h400" stroke="' + YEL + '" stroke-width="2" stroke-dasharray="18 12" opacity=".7"/>' + bus +
      '<rect x="14" y="140" width="4" height="74" fill="#5b6168"/><rect x="2" y="122" width="28" height="22" rx="3" fill="' + GBLUE + '" stroke="#fff" stroke-width="1.5"/><text x="16" y="137" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUS</text>' +
      '<rect x="90" y="214" width="250" height="38" rx="3" fill="#111"/>' +
      '<rect x="100" y="222" width="46" height="18" rx="4" fill="' + GBLUE + '"/><text x="123" y="235" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">GREY</text>' +
      '<text x="154" y="232" ' + font + ' font-size="12" fill="#fff">Gadsden Bus Stop</text><text x="154" y="246" ' + font + ' font-size="9" fill="#cfd8e0">503 W Meighan Blvd · Gadsden, AL</text>',
      sky("yws1", "#7cb7e0", "#f3dcb6"));
  }

  /* 2. Noccalula Falls */
  function ywfalls() {
    let water = ""; for (let i = 0; i < 9; i++) water += '<path d="M' + (176 + i * 6) + ' 60v170" stroke="' + (i % 2 ? "#e8f6ff" : "#bfe2f5") + '" stroke-width="4" stroke-dasharray="12 12"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#yws2)"/>' +
      '<g class="yw-cloud"><ellipse cx="300" cy="24" rx="30" ry="8" fill="#fff" opacity=".8"/></g>' +
      '<path d="M0 56h170v-4h66v4h164v204H0z" fill="#9a7a52"/>' +
      '<path d="M0 70h168l-6 26 10 30 -8 40 6 64H0z" fill="#b08a5a" stroke="#6e5232" stroke-width="2"/><path d="M400 70H238l6 26 -10 30 8 40 -6 64h164z" fill="#a8824f" stroke="#6e5232" stroke-width="2"/>' +
      '<path d="M0 96h150M10 126h146M0 160h152M250 100h150M246 136h154M252 176h148" stroke="#7d5f3c" stroke-width="2" opacity=".6"/>' +
      pine(30, 56, 1) + pine(70, 54, 1.2) + pine(120, 56, .9) + pine(280, 56, 1.1) + pine(330, 54, 1.3) + pine(372, 56, .9) +
      '<rect x="168" y="56" width="70" height="8" fill="#9fd2ee"/><path d="M168 64h70l-4 162h-62z" fill="#8cc4e2"/>' +
      '<svg x="168" y="60" width="70" height="170" viewBox="168 60 70 170"><g class="yw-fall">' + water + '<path d="M176 36v24M188 36v24M200 36v24M212 36v24M224 36v24" stroke="#e8f6ff" stroke-width="4" stroke-dasharray="12 12"/></g></svg>' +
      '<ellipse cx="203" cy="226" rx="90" ry="18" fill="#4f8fb0"/><g class="yw-mist"><ellipse cx="203" cy="220" rx="56" ry="14" fill="#fff" opacity=".5"/></g>' +
      '<rect x="0" y="236" width="400" height="24" fill="#3f6b3a"/>' + label("NOCCALULA FALLS · BLACK CREEK", 238),
      sky("yws2", "#86c3ea", "#e9f4d8"));
  }

  /* 3. The Coosa River, catfish jumping */
  function ywcoosa() {
    const boat = '<g class="yw-bob"><path d="M210 150h120l-14 18H222z" fill="' + RED + '" stroke="#3a1018" stroke-width="2"/><path d="M216 150h108" stroke="#f4f1e8" stroke-width="3"/><rect x="300" y="132" width="6" height="18" fill="#333"/><rect x="296" y="126" width="14" height="8" rx="2" fill="#555"/>' +
      '<path d="M250 150v-34" stroke="#6b4a2a" stroke-width="2"/><path d="M250 116q30 10 46 40" stroke="#ddd" stroke-width="1" fill="none"/></g>';
    const fish = '<g class="yw-fish"><path d="M96 168q22 -14 46 0q-22 14 -46 0z" fill="#7a7a62" stroke="#3a3a2a" stroke-width="2"/><path d="M96 168l-12 -8v16z" fill="#7a7a62" stroke="#3a3a2a" stroke-width="2"/><circle cx="134" cy="166" r="2" fill="#111"/><path d="M142 168l10 -4M142 170l10 4" stroke="#3a3a2a" stroke-width="1.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yws3)"/>' +
      '<g class="yw-cloud"><ellipse cx="80" cy="34" rx="34" ry="9" fill="#fff" opacity=".8"/></g>' +
      '<path d="M0 116q60 -20 120 -6t140 -10 140 4v40H0z" fill="#4f7a3e"/>' + pine(40, 108, .8) + pine(90, 104, 1) + pine(300, 102, .9) + pine(350, 104, 1.1) +
      '<rect x="0" y="140" width="400" height="120" fill="#4b7f8f"/><path d="M0 140h400" stroke="#9fd2ee" stroke-width="2"/>' +
      '<path d="M20 180h60M150 196h80M290 186h70M60 222h90M250 230h110" stroke="#9fd2ee" stroke-width="2" opacity=".6"/>' +
      '<ellipse cx="124" cy="190" rx="22" ry="5" fill="none" stroke="#e8f6ff" stroke-width="2" class="yw-rip"/>' + fish + boat +
      label("COOSA RIVER · CATFISH BILLY", 236),
      sky("yws3", "#f2b06a", "#f9e3b8"));
  }

  /* 4. Talladega Superspeedway */
  function ywtrack() {
    const car = (c, cls) => '<g class="yw-car ' + cls + '"><g transform="translate(0 176)"><path d="M0 26v-12h20l14 -12h56l14 12h20v12z" fill="' + c + '" stroke="#222" stroke-width="2"/><path d="M38 4h48l10 10H30z" fill="#9cc6e8"/><circle cx="26" cy="28" r="9" fill="#222"/><circle cx="26" cy="28" r="4" fill="#ccc"/><circle cx="100" cy="28" r="9" fill="#222"/><circle cx="100" cy="28" r="4" fill="#ccc"/></g></g>';
    let stands = ""; for (let r = 0; r < 6; r++) stands += '<path d="M0 ' + (70 + r * 8) + 'h400" stroke="' + (r % 2 ? "#8a8f96" : "#a8adb4") + '" stroke-width="7"/>';
    let crowd = ""; for (let i = 0; i < 80; i++) crowd += '<circle cx="' + (i * 5 + 2) + '" cy="' + (72 + (i % 6) * 8) + '" r="1.6" fill="' + ["#f2c230", "#b8262e", "#fff", "#6bb3d6"][i % 4] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#yws4)"/>' +
      '<rect x="0" y="40" width="400" height="26" fill="#5a6068"/><rect x="40" y="26" width="80" height="16" fill="#3c4450"/><rect x="250" y="22" width="110" height="20" fill="#3c4450"/>' +
      stands + crowd + '<rect x="0" y="118" width="400" height="6" fill="#ddd"/>' +
      '<path d="M0 124h400v40H0z" fill="#6a6c70"/><path d="M0 164h400l0 50H0z" fill="#4a4c50"/><path d="M0 126h400" stroke="' + RED + '" stroke-width="3"/><path d="M0 214h400" stroke="#fff" stroke-width="3"/>' +
      '<path d="M0 190h400" stroke="' + YEL + '" stroke-width="2" stroke-dasharray="20 14" opacity=".7"/>' +
      car(RED, "") + car(YEL, "yw-car2") +
      '<rect x="0" y="216" width="400" height="44" fill="#4f8a3a"/>' +
      '<rect x="360" y="90" width="3" height="40" fill="#333"/><g class="yw-flag"><rect x="363" y="90" width="26" height="16" fill="#fff"/><path d="M363 90h6.5v4h-6.5zM376 90h6.5v4h-6.5zM369.5 94h6.5v4h-6.5zM382.5 94h6.5v4h-6.5zM363 98h6.5v4h-6.5zM376 98h6.5v4h-6.5zM369.5 102h6.5v4h-6.5zM382.5 102h6.5v4h-6.5z" fill="#111"/></g>' +
      label("TALLADEGA SUPERSPEEDWAY · SEE ME A RACE", 236),
      sky("yws4", "#6fb2e0", "#f6e2bc"));
  }

  /* 5. Broad St and 4th St, Etowah Memorial Bridge behind */
  function ywcorner() {
    let arches = ""; for (let i = 0; i < 6; i++) { const x = 4 + i * 64; arches += '<path d="M' + x + ' 166q32 -70 64 0" fill="none" stroke="#e8e2d4" stroke-width="7"/>'; [10, 20, 44, 54].forEach(k => { arches += '<path d="M' + (x + k) + ' 108V' + (k === 10 || k === 54 ? 146 : 130) + '" stroke="#e8e2d4" stroke-width="3"/>'; }); }
    return svg(
      '<rect width="400" height="260" fill="url(#yws5)"/>' +
      '<rect x="0" y="150" width="400" height="30" fill="#4b7f8f"/><path d="M0 150h400" stroke="#9fd2ee" stroke-width="2"/><rect x="0" y="180" width="400" height="48" fill="#6a8a4e"/>' +
      '<rect x="0" y="100" width="400" height="9" fill="#e8e2d4"/><path d="M0 98h400" stroke="#cfc8b8" stroke-width="2"/>' + arches +
      [40, 120, 200, 280, 360].map(x => '<rect x="' + (x - 1) + '" y="86" width="2" height="14" fill="#555"/><circle cx="' + x + '" cy="85" r="3" fill="#fff6c2" class="yw-led"/>').join("") +
      bricks(0, 120, 240, 108, "#8c3f2c", "#6a2c1e") +
      tag("YELAWOLF", 14, 186, 40, YEL, -5) + tag("SLUMERICAN", 70, 214, 18, RIVER, -3) +
      '<g class="yw-sp"><circle cx="224" cy="168" r="3" fill="' + YEL + '" opacity=".7"/></g><g class="yw-sp yw-sp2"><circle cx="230" cy="162" r="2" fill="' + YEL + '" opacity=".7"/></g>' +
      '<rect x="262" y="96" width="5" height="132" fill="#5b6168"/>' + sign(272, 104, 104, "BROAD ST") + sign(272, 130, 104, "4TH ST") +
      '<rect x="0" y="228" width="400" height="32" fill="#55565a"/><path d="M0 244h400" stroke="#fff" stroke-width="2" stroke-dasharray="14 12" opacity=".5"/>' +
      '<text x="324" y="214" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">GADSDEN, AL</text>',
      sky("yws5", "#ffae7a", "#ffe4bc"));
  }

  window.SCENES = { ywstop, ywfalls, ywcoosa, ywtrack, ywcorner };
})();
