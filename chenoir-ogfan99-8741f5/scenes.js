/* chenoir scenes (Regions tab: Upstate New York; Broadway on Buffalo's East Side: "a kid from Deshler Street off of Broadway" on Shadow Puppet, "We was still livin' on Broadway" on '94). 400 x 260 SVGs.
   CSS classes prefixed cn- (the page's own anim-train is kept on the bus).
   0 NFTA Route 4 Broadway at the Broadway / Liddell St stop, right across from Deshler St: white-and-blue bus rolling in, East Side frame houses, snow.
   1 Her barbershop in Elmwood Village (she and her husband opened one there in 2022): Victorian storefront on Elmwood Ave, the barber pole spinning (no shop name).
   2 Silo City: the concrete grain elevators on the Buffalo River at sunset, a kayak gliding by.
   3 The Buffalo and Erie County Botanical Gardens: the white Lord & Burnham glass domes over a lotus pond (The Lotus Child).
   4 Broadway & Deshler St: green signs, CHE NOIR tagged, Corpus Christi Church's brownstone twin towers with green cupolas behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cnflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.35}55%{opacity:.9}}.cn-flk{animation:cnflick 2.6s infinite}.cn-flk2{animation-delay:.9s}' +
    '@keyframes cnpole{from{transform:translateY(0)}to{transform:translateY(-24px)}}.cn-pole{animation:cnpole 1.2s linear infinite}' +
    '@keyframes cnkayak{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.cn-kayak{animation:cnkayak 14s linear infinite}' +
    '@keyframes cnripple{0%,100%{transform:scaleX(1);opacity:.5}50%{transform:scaleX(1.25);opacity:.9}}.cn-rip{transform-box:fill-box;transform-origin:50% 50%;animation:cnripple 2.4s ease-in-out infinite}.cn-rip2{animation-delay:-1.2s}' +
    '@keyframes cnbloom{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.cn-bloom{transform-box:fill-box;transform-origin:50% 100%;animation:cnbloom 2.8s ease-in-out infinite}.cn-b2{animation-delay:-1.4s}' +
    '@keyframes cnglow{0%,100%{opacity:.45}50%{opacity:1}}.cn-glow{animation:cnglow 2.6s ease-in-out infinite}.cn-g2{animation-delay:-1.3s}' +
    '@keyframes cnwalk{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.cn-walk{animation:cnwalk 16s linear infinite}.cn-walk2{animation-delay:-8s;animation-duration:19s}' +
    '@keyframes cnspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cn-sp{animation:cnspray 1.4s ease-out infinite}.cn-sp2{animation-delay:.45s}' +
    '@keyframes cnsnow{from{transform:translateY(-20px)}to{transform:translateY(270px)}}.cn-sn{animation:cnsnow 7s linear infinite}.cn-sn2{animation-delay:-2.3s;animation-duration:8s}.cn-sn3{animation-delay:-4.6s;animation-duration:6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="' + (txt.length * 9 + 16) + '" height="20" rx="10" fill="' + color + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + (txt.length * 9 + 16) / 2) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const snow = n => Array.from({ length: n }, (_, i) => '<circle class="cn-sn cn-sn' + (i % 3 + 1) + '" cx="' + ((i * 71) % 400) + '" cy="' + ((i * 37) % 100 - 20) + '" r="' + (i % 2 ? 1.5 : 2.2) + '" fill="#fff" opacity=".85"/>').join("");
  const NFTA = "#1f4e79", GOLD = "#d4a24c", CREAM = "#f3e1c6", LOTUS = "#e58fb0", CHOC = "#5a3420";
  const house = (x, w, c, roof) => '<rect x="' + x + '" y="70" width="' + w + '" height="64" fill="' + c + '"/><path d="M' + (x - 4) + ' 72L' + (x + w / 2) + ' 44L' + (x + w + 4) + ' 72z" fill="' + roof + '"/>' +
    '<rect x="' + (x + 8) + '" y="80" width="12" height="16" fill="#ffe7a8" class="cn-glow"/><rect x="' + (x + w - 20) + '" y="80" width="12" height="16" fill="#3a4250"/><rect x="' + (x + 8) + '" y="104" width="12" height="16" fill="#3a4250"/><rect x="' + (x + w - 20) + '" y="104" width="12" height="16" fill="#ffe7a8" class="cn-glow cn-g2"/>' +
    '<path d="M' + (x + w / 2 - 6) + ' 56h12v10h-12z" fill="#3a4250"/>';

  /* 0. Route 4 Broadway at the Broadway / Liddell St stop, across from Deshler St: snowy dusk, wood-frame doubles, the NFTA stop sign, the white-and-blue bus pulling in */
  function cnstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 40) + '" y="146" width="30" height="22" rx="3" fill="#2a3340"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="136" width="300" height="70" rx="10" fill="#f4f6f8" stroke="#5b6270" stroke-width="2"/>' + win +
      '<rect x="40" y="176" width="300" height="10" fill="' + NFTA + '"/><rect x="40" y="186" width="300" height="3" fill="#7fb2e0"/>' +
      '<rect x="306" y="144" width="30" height="40" rx="4" fill="#2a3340"/><rect x="60" y="138" width="92" height="8" rx="2" fill="#111"/><text x="106" y="145" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb030" letter-spacing="1">4 BROADWAY</text>' +
      '<circle cx="90" cy="206" r="12" fill="#22252b"/><circle cx="90" cy="206" r="5" fill="#9aa1aa"/><circle cx="290" cy="206" r="12" fill="#22252b"/><circle cx="290" cy="206" r="5" fill="#9aa1aa"/><circle cx="336" cy="196" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cn0)"/>' +
      house(10, 70, "#c9b48a", "#5a4a3a") + house(96, 64, "#8fa7b8", "#3e4652") + house(240, 70, "#d9d2c4", "#6a3a2a") + house(326, 66, "#b5776a", "#3e4652") +
      '<rect x="0" y="134" width="400" height="8" fill="#e9eef2"/><rect x="0" y="210" width="400" height="50" fill="#4c4f55"/><rect x="0" y="206" width="400" height="5" fill="#e9eef2"/>' +
      '<path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' + bus +
      '<rect x="368" y="70" width="4" height="140" fill="#6e737b"/><rect x="352" y="70" width="36" height="34" rx="3" fill="#fff" stroke="' + NFTA + '" stroke-width="2"/><text x="370" y="84" text-anchor="middle" ' + font + ' font-size="7" fill="' + NFTA + '">METRO</text>' + badge(358, 96, "4", NFTA) +
      '<rect x="166" y="14" width="196" height="34" rx="4" fill="#111"/><rect x="166" y="14" width="196" height="3" fill="#fff"/>' +
      '<text x="178" y="38" ' + font + ' font-size="15" fill="#fff">Broadway / Liddell St</text>' +
      '<rect x="10" y="14" width="148" height="34" rx="4" fill="#111"/><text x="84" y="35" text-anchor="middle" ' + font + ' font-size="10" fill="#9cc7ea" letter-spacing=".5">ACROSS: DESHLER ST</text>' +
      snow(26),
      sky("cn0", "#1b2440", "#7a6a8a"));
  }

  /* 1. Her barbershop on Elmwood Ave, Elmwood Village: a painted Victorian storefront, big window with the chair inside, the red-white-blue pole spinning, people strolling */
  function cnshop() {
    const stripes = Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (i * 12) + 'l20 -12v6l-20 12z" fill="' + (i % 2 ? "#2a56b0" : "#d22b2b") + '"/>').join("");
    const people = [0, 1].map(i => '<g class="cn-walk' + (i ? " cn-walk2" : "") + '"><rect x="0" y="206" width="12" height="26" rx="5" fill="' + ["#3a2a55", "#7a4a2a"][i] + '"/><circle cx="6" cy="200" r="6" fill="#5a3a26"/><path d="M3 232v12M9 232v12" stroke="#222" stroke-width="3"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cn1)"/>' +
      '<rect x="40" y="40" width="320" height="170" fill="#6f8f7a"/><path d="M30 44L200 10L370 44z" fill="#4a3a52"/><rect x="34" y="40" width="332" height="8" fill="' + CREAM + '"/>' +
      [70, 170, 270].map(x => '<rect x="' + x + '" y="58" width="60" height="44" fill="#f7e9c6" class="cn-glow"/><path d="M' + (x + 30) + ' 58v44M' + x + ' 80h60" stroke="' + CREAM + '" stroke-width="3"/><rect x="' + (x - 4) + '" y="54" width="68" height="6" fill="' + CREAM + '"/>').join("") +
      '<rect x="40" y="112" width="320" height="10" fill="' + CREAM + '"/>' +
      '<rect x="64" y="128" width="180" height="76" fill="#fff4d6" stroke="' + CREAM + '" stroke-width="4"/>' +
      '<path d="M120 196v-24h26l6 -22h10l-4 22h8v24z" fill="#2a2a2a"/><rect x="114" y="196" width="56" height="6" fill="#999"/><rect x="200" y="140" width="30" height="40" rx="2" fill="#bfe0ef" opacity=".7"/>' +
      '<rect x="262" y="128" width="40" height="76" fill="#5a3420"/><circle cx="294" cy="168" r="3" fill="' + GOLD + '"/>' +
      '<rect x="318" y="124" width="22" height="6" rx="3" fill="#cfcfcf"/><rect x="320" y="130" width="18" height="60" fill="#fff" rx="2"/>' +
      '<svg x="320" y="130" width="18" height="60" viewBox="0 0 20 60"><g class="cn-pole">' + stripes + '<g transform="translate(0,96)">' + stripes + '</g></g></svg>' +
      '<rect x="318" y="190" width="22" height="6" rx="3" fill="#cfcfcf"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#8d8a84"/><rect x="0" y="244" width="400" height="16" fill="#5b5853"/>' +
      '<rect x="16" y="150" width="5" height="60" fill="#3a3a3a"/>' + sign(4, 128, 98, "Elmwood Ave") + people,
      sky("cn1", "#8ec0e8", "#f2e6d8"));
  }

  /* 2. Silo City on the Buffalo River at sunset: the tall concrete grain elevators, the marine leg towers, a kayak paddling by, the water rippling */
  function cnsilos() {
    const bins = (x, n, h) => Array.from({ length: n }, (_, i) => '<rect x="' + (x + i * 16) + '" y="' + (160 - h) + '" width="16" height="' + h + '" fill="' + (i % 2 ? "#b8ab98" : "#c8bba6") + '"/><path d="M' + (x + i * 16 + 8) + ' ' + (160 - h) + 'v' + h + '" stroke="#a89a86" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cn2)"/>' +
      '<circle cx="320" cy="96" r="26" fill="#ffcf7a" opacity=".9"/>' +
      bins(20, 6, 92) + '<rect x="20" y="58" width="96" height="12" fill="#9e917e"/>' +
      '<rect x="128" y="34" width="34" height="126" fill="#a99c88"/><rect x="132" y="40" width="26" height="6" fill="#6e6354"/><rect x="132" y="56" width="26" height="6" fill="#6e6354"/><path d="M162 60l30 40" stroke="#6e6354" stroke-width="5"/>' +
      bins(192, 8, 104) + '<rect x="192" y="48" width="128" height="10" fill="#9e917e"/><rect x="226" y="30" width="30" height="20" fill="#a99c88"/>' +
      '<text x="250" y="80" text-anchor="middle" ' + font + ' font-size="12" fill="#6e6354" letter-spacing="4" opacity=".8">SILO CITY</text>' +
      '<rect x="0" y="160" width="400" height="100" fill="#2d5f7a"/>' +
      [[60, 182], [180, 200], [300, 186], [120, 230], [260, 236]].map(([x, y], i) => '<path class="cn-rip' + (i % 2 ? " cn-rip2" : "") + '" d="M' + (x - 20) + ' ' + y + 'h40" stroke="#ffd9a0" stroke-width="2" opacity=".7"/>').join("") +
      '<g class="cn-kayak"><path d="M0 206q30 8 60 0q-30 -6 -60 0z" fill="' + LOTUS + '"/><circle cx="30" cy="196" r="5" fill="#5a3420"/><rect x="26" y="200" width="8" height="8" fill="' + GOLD + '"/><path d="M14 192l32 18" stroke="#333" stroke-width="2"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" letter-spacing="3">BUFFALO RIVER</text>',
      sky("cn2", "#4a3a6a", "#f2a66a"));
  }

  /* 3. The Botanical Gardens in South Park: the white glass Lord & Burnham conservatory with its big central dome, a pond of pink lotus in front */
  function cnlotus() {
    const ribs = (cx, cy, r) => Array.from({ length: 9 }, (_, i) => { const a = Math.PI + i * Math.PI / 8; return '<path d="M' + cx + ' ' + cy + 'L' + (cx + r * Math.cos(a)).toFixed(1) + ' ' + (cy + r * Math.sin(a)).toFixed(1) + '" stroke="#fff" stroke-width="1.5"/>'; }).join("");
    const dome = (cx, cy, r) => '<path d="M' + (cx - r) + ' ' + cy + 'a' + r + ' ' + r + ' 0 0 1 ' + (2 * r) + ' 0z" fill="#cfe8ee" opacity=".9"/>' + ribs(cx, cy, r) + '<path d="M' + (cx - r) + ' ' + cy + 'a' + r + ' ' + r + ' 0 0 1 ' + (2 * r) + ' 0" stroke="#fff" stroke-width="3" fill="none"/>' +
      '<path d="M' + (cx - r * 0.7) + ' ' + (cy - r * 0.7) + 'h' + (r * 1.4) + '" stroke="#fff" stroke-width="1.5"/>';
    const lotus = (x, y, k) => '<g class="cn-bloom' + (k % 2 ? " cn-b2" : "") + '"><path d="M' + x + ' ' + y + 'q-12 -4 -10 -16q6 2 10 16z" fill="' + LOTUS + '"/><path d="M' + x + ' ' + y + 'q12 -4 10 -16q-6 2 -10 16z" fill="' + LOTUS + '"/><path d="M' + x + ' ' + y + 'q-5 -10 0 -22q5 12 0 22z" fill="#f7c3d6"/></g>';
    const pads = [[60, 214], [130, 236], [210, 220], [290, 240], [350, 214]].map(([x, y]) => '<ellipse cx="' + x + '" cy="' + y + '" rx="18" ry="6" fill="#3f8f4a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cn3)"/>' +
      '<rect x="40" y="120" width="320" height="60" fill="#e6f2f4" opacity=".9"/>' + Array.from({ length: 17 }, (_, i) => '<path d="M' + (40 + i * 20) + ' 120v60" stroke="#fff" stroke-width="1.5"/>').join("") +
      dome(90, 120, 38) + dome(310, 120, 38) + dome(200, 120, 70) +
      '<rect x="190" y="44" width="20" height="8" fill="#fff"/><rect x="196" y="38" width="8" height="8" fill="#fff"/>' +
      '<rect x="40" y="176" width="320" height="6" fill="#bfb6a6"/><rect x="0" y="182" width="400" height="16" fill="#6aa04f"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3a6f86"/>' + pads +
      lotus(60, 214, 0) + lotus(210, 220, 1) + lotus(350, 214, 0) + lotus(130, 236, 1) +
      '<rect x="120" y="8" width="160" height="22" rx="4" fill="#111"/><text x="200" y="23" text-anchor="middle" ' + font + ' font-size="9" fill="' + LOTUS + '" letter-spacing="2">THE LOTUS CHILD</text>',
      sky("cn3", "#7fb6e6", "#e8f3f8"));
  }

  /* 4. Broadway & Deshler St at dusk: green signs, CHE NOIR tagged big on the brick, Corpus Christi Church's brownstone twin towers with green cupolas and crosses behind, light snow */
  function cncorner() {
    const towerC = x => '<rect x="' + x + '" y="40" width="30" height="110" fill="#7a4e3a"/>' + [56, 84, 112].map(y => '<path d="M' + (x + 9) + ' ' + (y + 14) + 'v-8a6 6 0 0 1 12 0v8z" fill="#2a1a12"/>').join("") +
      '<rect x="' + (x - 2) + '" y="36" width="34" height="6" fill="#6a4030"/><path d="M' + (x + 2) + ' 36q13 -26 26 0z" fill="#5f9e86"/><path d="M' + (x + 15) + ' 14v-10M' + (x + 11) + ' 8h8" stroke="' + GOLD + '" stroke-width="2"/>';
    const bricks = Array.from({ length: 12 }, (_, r) => '<path d="M150 ' + (110 + r * 10) + 'h250" stroke="#4a2a1c" stroke-width="1.2"/>').join("") +
      Array.from({ length: 60 }, (_, i) => { const r = Math.floor(i / 12), c = i % 12; return '<path d="M' + (152 + c * 21 + (r % 2) * 10) + ' ' + (110 + r * 10) + 'v10" stroke="#4a2a1c" stroke-width="1"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cn4)"/>' +
      '<rect x="0" y="120" width="400" height="40" fill="#2a3346"/><rect x="30" y="98" width="40" height="62" fill="#353f55"/><rect x="330" y="100" width="50" height="60" fill="#2f394d"/>' +
      '<g transform="translate(40,0)">' + towerC(180) + towerC(250) + '<rect x="210" y="70" width="40" height="80" fill="#6f4634"/><path d="M206 72L230 50L254 72z" fill="#5a3a2a"/><circle cx="230" cy="92" r="9" fill="#e8b84a" class="cn-glow"/></g>' +
      '<rect x="150" y="104" width="250" height="132" fill="#6b3a2a"/>' + bricks +
      tag("CHE NOIR", 160, 178, 44, CREAM, -6) + tag("BUFFALO QUEEN", 186, 214, 20, LOTUS, -4) + tag("716", 166, 130, 16, GOLD, -3) +
      '<rect class="cn-sp" x="356" y="146" width="4" height="4" fill="' + CREAM + '"/><rect class="cn-sp cn-sp2" x="364" y="156" width="3" height="3" fill="' + LOTUS + '"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#4c4f55"/><rect x="0" y="232" width="400" height="5" fill="#8e9196"/>' +
      '<rect x="56" y="70" width="5" height="166" fill="#5a5f66"/>' + sign(8, 64, 104, "Broadway") + sign(12, 88, 96, "Deshler St") +
      '<rect class="cn-glow" x="98" y="40" width="22" height="8" rx="3" fill="#fff1b8"/><path d="M61 44h40" stroke="#5a5f66" stroke-width="3"/>' +
      snow(20),
      sky("cn4", "#1f1a36", "#c0705a"));
  }

  window.SCENES = { cnstation: cnstation, cnshop: cnshop, cnsilos: cnsilos, cnlotus: cnlotus, cncorner: cncorner };
})();
