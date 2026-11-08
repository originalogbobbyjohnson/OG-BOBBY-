/* pitbull scenes (Regions tab: South Florida; Little Havana, Miami - Mr. 305, Mr. Worldwide). CSS classes prefixed pb- (the page's own anim-train is kept, used on the bus).
   1 Metrobus Route 8 pulling up on SW 8th Street (Calle Ocho) at SW 27th Avenue, the west end of Little Havana: palms, pastel stucco, a pink Miami dusk.
   2 SLAM! Miami, the sports charter school he helped open in Little Havana in 2013: the school block by the ballpark, a basketball arcing toward the hoop on the court out front.
   3 Pitbull Stadium, FIU's football stadium in Westchester (he bought the naming rights in 2024): blue and gold stands under the lights, fireworks over the field.
   4 Mr. Worldwide: a jet climbing out of Miami International at night, the control tower blinking, a globe spinning in the sky.
   5 NW 7th Street and NW 16th Avenue in Little Havana: green signs, PITBULL tagged with MR. 305 and DALE, the big white roof of the ballpark behind.
   400 x 260 SVGs. No logos, no faces, no numeral 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes pbsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.pb-palm{transform-box:fill-box;transform-origin:50% 100%;animation:pbsway 3.2s ease-in-out infinite}.pb-palm2{animation-delay:-1.6s}' +
    '@keyframes pbcloud{from{transform:translateX(-140px)}to{transform:translateX(460px)}}.pb-cloud{animation:pbcloud 26s linear infinite}.pb-cloud2{animation-delay:-13s}' +
    '@keyframes pbflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.pb-flk{animation:pbflick 2.2s infinite}.pb-flk2{animation-delay:.8s}' +
    '@keyframes pbball{0%{transform:translate(0,0)}50%{transform:translate(70px,-70px)}100%{transform:translate(140px,-30px)}}.pb-ball{animation:pbball 2.4s ease-in-out infinite}' +
    '@keyframes pbfw{0%{transform:scale(.2);opacity:0}30%{opacity:1}100%{transform:scale(1.2);opacity:0}}.pb-fw{transform-box:fill-box;transform-origin:center;animation:pbfw 2.4s ease-out infinite}.pb-fw2{animation-delay:-1.2s}' +
    '@keyframes pbjet{0%{transform:translate(-80px,60px)}100%{transform:translate(460px,-120px)}}.pb-jet{animation:pbjet 7s linear infinite}' +
    '@keyframes pbspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.pb-spin{transform-box:fill-box;transform-origin:center;animation:pbspin 14s linear infinite}' +
    '@keyframes pbmer{0%{transform:translateX(-24px)}100%{transform:translateX(24px)}}.pb-mer{animation:pbmer 4s linear infinite}' +
    '@keyframes pbbl{0%,100%{opacity:.2}50%{opacity:1}}.pb-bl{animation:pbbl 1.2s ease-in-out infinite}.pb-bl2{animation-delay:-.6s}' +
    '@keyframes pbsp{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(14px,-22px);opacity:0}}.pb-sp{animation:pbsp 1.3s ease-out infinite}.pb-sp2{animation-delay:-.6s}' +
    '@keyframes pbcar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.pb-car{animation:pbcar 6.5s linear infinite}.pb-car2{animation-delay:-3.2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const palm = (x, base, h, cls) => '<g class="pb-palm ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q4 -' + (h / 2) + ' 2 -' + h + '" stroke="#7a5a3a" stroke-width="5" fill="none"/>' +
    [[-30, 8], [-18, -10], [0, -16], [18, -10], [30, 8]].map(p => '<path d="M' + (x + 2) + ' ' + (base - h) + 'q' + (p[0] / 2) + ' ' + (p[1] - 10) + ' ' + p[0] + ' ' + (p[1] + 6) + '" stroke="#2f8a4a" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const cloud = (cls, x, y) => '<g class="' + cls + '" opacity=".7"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="8" fill="#fff"/><ellipse cx="' + (x + 14) + '" cy="' + (y - 6) + '" rx="14" ry="8" fill="#fff"/></g>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const GOLD = "#ffd23f", AQUA = "#00b4d8", CORAL = "#ff4f6d", MDT = "#0a6fb5";

  /* 1. Metrobus Route 8 on SW 8th St at SW 27th Ave */
  function pbstation() {
    const shop = (x, w, c, aw) => '<rect x="' + x + '" y="84" width="' + w + '" height="64" fill="' + c + '"/><rect x="' + x + '" y="80" width="' + w + '" height="6" fill="#e9e0cf"/>' +
      '<path d="M' + x + ' 104h' + w + 'l-6 10h-' + (w - 12) + 'z" fill="' + aw + '"/><rect x="' + (x + 8) + '" y="116" width="' + (w - 16) + '" height="30" fill="#ffe4a8" opacity=".85"/>';
    const bus = '<g class="anim-train"><rect x="30" y="112" width="250" height="70" rx="10" fill="#f4f6f8" stroke="#6b7076" stroke-width="2"/>' +
      '<rect x="30" y="160" width="250" height="12" fill="' + MDT + '"/><rect x="30" y="156" width="250" height="4" fill="' + AQUA + '"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (72 + i * 40) + '" y="120" width="32" height="28" rx="3" fill="#22313c"/>').join("") +
      '<rect x="34" y="120" width="30" height="52" rx="3" fill="#2c3a44"/><path d="M49 120v52" stroke="#8a9096"/>' +
      '<rect x="34" y="113" width="96" height="8" rx="2" fill="#111"/><text x="82" y="119.5" text-anchor="middle" ' + font + ' font-size="6.2" fill="' + GOLD + '">8 · SW 8 ST · EAST</text>' +
      '<circle cx="76" cy="184" r="13" fill="#1a1a1a"/><circle cx="76" cy="184" r="5" fill="#888"/><circle cx="236" cy="184" r="13" fill="#1a1a1a"/><circle cx="236" cy="184" r="5" fill="#888"/>' +
      '<circle cx="32" cy="166" r="3.5" fill="#fff6c2" class="pb-flk"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pbs1)"/>' + cloud("pb-cloud", 40, 40) + cloud("pb-cloud pb-cloud2", 60, 26) +
      shop(0, 96, "#f2b8a0", CORAL) + shop(98, 88, "#9fd8cf", AQUA) + shop(188, 96, "#f6e08a", "#e07a2a") + shop(286, 114, "#c9b6e8", "#7a5ab8") +
      palm(190, 150, 70) + palm(360, 150, 80, "pb-palm2") +
      '<rect x="0" y="148" width="400" height="44" fill="#b8b2a6"/><rect x="0" y="190" width="400" height="6" fill="#e2ddd2"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3f4148"/><path d="M0 230h400" stroke="#ffd36b" stroke-width="2" stroke-dasharray="16 12"/>' +
      bus + car("pb-car", 0, 236, CORAL) +
      '<rect x="318" y="100" width="5" height="92" fill="#555"/><rect x="300" y="84" width="42" height="22" rx="3" fill="' + MDT + '" stroke="#fff" stroke-width="1.5"/><text x="321" y="99" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUS</text>' +
      '<rect x="312" y="110" width="18" height="16" rx="3" fill="' + AQUA + '"/><text x="321" y="122" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">8</text>' +
      '<rect x="150" y="200" width="246" height="26" rx="3" fill="#111"/><text x="160" y="218" ' + font + ' font-size="13.5" fill="#fff">SW 8 St &amp; SW 27 Av</text>' +
      '<rect x="366" y="205" width="22" height="16" rx="3" fill="' + MDT + '"/><text x="377" y="217" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">8</text>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">METROBUS ROUTE 8 · CALLE OCHO · LITTLE HAVANA</text>',
      sky("pbs1", "#2a1d4a", "#ff8a6a"));
  }

  /* 2. SLAM! Miami, the sports charter school in Little Havana */
  function pbschool() {
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="22" height="16" fill="#bfe8f4" stroke="#fff" stroke-width="1.5"/>';
    let wins = ""; for (let r = 0; r < 3; r++) for (let c = 0; c < 8; c++) wins += win(52 + c * 38, 48 + r * 26);
    return svg(
      '<rect width="400" height="260" fill="url(#pbs2)"/>' + cloud("pb-cloud", 30, 24) +
      '<rect x="40" y="36" width="320" height="94" fill="#f4f1ea"/><rect x="40" y="30" width="320" height="8" fill="' + MDT + '"/>' + wins +
      '<rect x="160" y="112" width="80" height="18" fill="' + MDT + '"/><text x="200" y="126" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">SLAM! MIAMI</text>' +
      palm(24, 132, 76) + palm(378, 132, 70, "pb-palm2") +
      '<rect x="0" y="130" width="400" height="130" fill="#d9663a"/><rect x="20" y="140" width="360" height="110" fill="#e9814f" stroke="#fff" stroke-width="2"/>' +
      '<path d="M200 140v110" stroke="#fff" stroke-width="2"/><circle cx="200" cy="195" r="20" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<path d="M20 172h40a24 24 0 0 1 0 46h-40" fill="none" stroke="#fff" stroke-width="2"/><path d="M380 172h-40a24 24 0 0 0 0 46h40" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<rect x="356" y="150" width="4" height="46" fill="#ddd"/><rect x="340" y="140" width="34" height="22" fill="#fff" stroke="#999"/><rect x="351" y="150" width="12" height="9" fill="none" stroke="' + CORAL + '" stroke-width="1.5"/>' +
      '<ellipse cx="350" cy="164" rx="9" ry="3" fill="none" stroke="' + CORAL + '" stroke-width="2"/><path d="M342 165l3 10M350 167v10M358 165l-3 10" stroke="#fff" stroke-width="1"/>' +
      '<g class="pb-ball"><circle cx="200" cy="200" r="8" fill="#e8742a" stroke="#6a2a0a" stroke-width="1.2"/><path d="M192 200h16M200 192v16" stroke="#6a2a0a" stroke-width="1"/></g>' +
      '<rect x="80" y="234" width="240" height="18" rx="3" fill="#111"/><text x="200" y="247" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">SPORTS LEADERSHIP · LITTLE HAVANA · 2013</text>',
      sky("pbs2", "#4aa8e8", "#bfe6ff"));
  }

  /* 3. Pitbull Stadium, FIU in Westchester */
  function pbstadium() {
    const fw = (x, y, c, cls) => '<g class="pb-fw ' + (cls || "") + '">' + Array.from({ length: 10 }, (_, i) => { const a = i * Math.PI / 5; return '<path d="M' + x + ' ' + y + 'l' + (Math.cos(a) * 18).toFixed(1) + ' ' + (Math.sin(a) * 18).toFixed(1) + '" stroke="' + c + '" stroke-width="2" stroke-linecap="round"/>'; }).join("") + '</g>';
    const light = x => '<rect x="' + (x - 2) + '" y="20" width="4" height="70" fill="#555"/><rect x="' + (x - 16) + '" y="12" width="32" height="12" fill="#333"/>' + [0, 1, 2, 3].map(i => '<circle cx="' + (x - 12 + i * 8) + '" cy="18" r="3" fill="#fffbe0" class="pb-flk' + (i % 2 ? " pb-flk2" : "") + '"/>').join("");
    let seats = ""; for (let r = 0; r < 5; r++) seats += '<path d="M0 ' + (96 + r * 12) + 'h400" stroke="' + (r % 2 ? "#0c2f6e" : "#123f8a") + '" stroke-width="10"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pbs3)"/>' + fw(90, 50, GOLD) + fw(300, 40, AQUA, "pb-fw2") + fw(200, 30, CORAL) +
      light(40) + light(360) + seats +
      '<rect x="0" y="86" width="400" height="6" fill="#c9a227"/><rect x="0" y="148" width="400" height="6" fill="#c9a227"/>' +
      '<rect x="120" y="70" width="160" height="18" fill="#0a1f4a" stroke="' + GOLD + '" stroke-width="1.5"/><text x="200" y="83" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">PITBULL STADIUM</text>' +
      '<rect x="0" y="154" width="400" height="106" fill="#2f8f3e"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (20 + i * 45) + ' 154l' + ((i - 4) * 10) + ' 106" stroke="#fff" stroke-width="1.5" opacity=".7"/>').join("") +
      '<path d="M0 200h400" stroke="#fff" stroke-width="1.5" opacity=".7"/>' +
      '<path d="M200 204v-24M184 180h32M184 180v-26M216 180v-26" stroke="' + GOLD + '" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      Array.from({ length: 60 }, (_, i) => '<circle cx="' + (6 + (i * 151 + (i * i * 7)) % 392) + '" cy="' + (98 + (i * 29 + i * i) % 46) + '" r="2" fill="' + ["#fff", GOLD, "#9fc4ff"][i % 3] + '" opacity=".75"/>').join("") +
      '<rect x="100" y="232" width="200" height="18" rx="3" fill="#111"/><text x="200" y="245" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">FIU · WESTCHESTER · BLUE AND GOLD</text>',
      sky("pbs3", "#05081e", "#1b2a5e"));
  }

  /* 4. Mr. Worldwide: a jet out of Miami International at night, the globe spinning */
  function pbjet() {
    const stars = Array.from({ length: 22 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + (10 + (i * 37) % 90) + '" r="1.2" fill="#fff" opacity=".8"/>').join("");
    const globe = '<g transform="translate(300 70)"><circle r="38" fill="#0b5a8e"/><clipPath id="pbgc"><circle r="38"/></clipPath><g clip-path="url(#pbgc)"><g class="pb-mer">' +
      '<path d="M-60 -14c10 -12 26 -10 30 2s16 10 22 -4s22 -6 26 6s16 4 24 -2M-56 14c12 -6 22 4 34 -2s22 -10 32 0s24 6 36 -4" stroke="#3fc18a" stroke-width="10" fill="none" stroke-linecap="round"/></g></g>' +
      '<g fill="none" stroke="#bfe8ff" stroke-width="1" opacity=".7"><ellipse rx="38" ry="12"/><ellipse rx="14" ry="38"/><path d="M-38 0h76M0 -38v76"/></g><circle r="38" fill="none" stroke="' + GOLD + '" stroke-width="2"/></g>';
    const jet = '<g class="pb-jet"><g transform="rotate(-18 60 180)"><path d="M20 180h80l14 -4l-6 8h-88z" fill="#e8eef4"/><path d="M60 180l-14 -20h8l22 20z" fill="#cfd8e0"/><path d="M60 184l-14 20h8l22 -20z" fill="#cfd8e0"/><path d="M24 180l-8 -12h6l10 12z" fill="' + AQUA + '"/>' +
      '<circle cx="108" cy="180" r="2.5" fill="' + CORAL + '" class="pb-bl"/><circle cx="20" cy="180" r="2" fill="#fff" class="pb-bl pb-bl2"/></g></g>';
    const tower = '<rect x="60" y="120" width="14" height="90" fill="#cfd4da"/><path d="M50 108h34l-4 14h-26z" fill="#2a4a6a" stroke="#cfd4da" stroke-width="2"/><rect x="62" y="96" width="10" height="12" fill="#cfd4da"/><circle cx="67" cy="94" r="3" fill="' + CORAL + '" class="pb-bl"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pbs4)"/>' + stars + globe + tower +
      '<rect x="0" y="210" width="400" height="50" fill="#1f2430"/><path d="M0 230h400" stroke="#fff" stroke-width="2" stroke-dasharray="20 14"/>' +
      Array.from({ length: 20 }, (_, i) => '<circle cx="' + (10 + i * 20) + '" cy="214" r="2" fill="' + (i % 2 ? GOLD : AQUA) + '" class="pb-bl' + (i % 2 ? " pb-bl2" : "") + '"/>').join("") +
      jet +
      '<rect x="110" y="236" width="180" height="18" rx="3" fill="#111"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">MIA · MR. WORLDWIDE · WHEELS UP</text>',
      sky("pbs4", "#070a24", "#2a2a6a"));
  }

  /* 5. NW 7th St and NW 16th Ave, Little Havana, the ballpark roof behind */
  function pbcorner() {
    const park = '<path d="M60 112q140 -70 280 0v20h-280z" fill="#f2f4f6" stroke="#b8c0c8" stroke-width="2"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M' + (100 + i * 34) + ' ' + (i === 3 ? 76 : 86 + Math.abs(i - 3) * 2) + 'v46" stroke="#c8d0d8" stroke-width="2"/>').join("") +
      '<rect x="60" y="126" width="280" height="12" fill="#2a8ad0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pbs5)"/>' + cloud("pb-cloud", 20, 30) + park + palm(30, 140, 70) + palm(250, 140, 60, "pb-palm2") +
      '<rect x="0" y="134" width="400" height="90" fill="#f0c6a4"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (146 + i * 14) + 'h400" stroke="#e2b28e" stroke-width="1"/>').join("") +
      tag("PITBULL", 16, 186, 40, GOLD, -6) + tag("MR. 305", 30, 214, 20, AQUA, -3) + tag("DALE", 200, 214, 22, CORAL, -5) +
      '<g class="pb-sp"><circle cx="196" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="pb-sp pb-sp2"><circle cx="202" cy="152" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="120" width="6" height="104" fill="#2f2f2f"/>' + sign(278, 128, 120, "NW 7 St") + sign(282, 154, 112, "NW 16 Av"),
      sky("pbs5", "#5ab8ee", "#ffd2a8"));
  }

  window.SCENES = { pbstation: pbstation, pbschool: pbschool, pbstadium: pbstadium, pbjet: pbjet, pbcorner: pbcorner };
})();
