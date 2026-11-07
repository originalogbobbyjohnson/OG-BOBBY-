/* skimask scenes (Regions tab: South Florida; Fort Lauderdale, Broward). CSS classes and ids prefixed sk- (the page's own anim-train is kept).
   1 Tri-Rail at Fort Lauderdale station (Broward Blvd by I-95): a white double-deck commuter train pulling in, palms, the I-95 sign behind.
   2 Fort Lauderdale Beach: the white wave wall along A1A, palms, turquoise water, a cruise ship heading out of Port Everglades.
   3 Shibuya, Tokyo (his song "Shibuya"; the anime kid): the scramble crossing at night under neon, people streaming across.
   4 The New River downtown: a drawbridge lifting as a yacht slides through (the Venice of America), Riverwalk palms.
   5 Sistrunk Blvd and NW 7 Av in Fort Lauderdale: green signs, SKI MASK tagged on the stucco wall with a water splash, downtown towers behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sksway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.sk-palm{transform-box:fill-box;transform-origin:50% 100%;animation:sksway 3.2s ease-in-out infinite}.sk-palm2{animation-delay:-1.6s}' +
    '@keyframes skcloud{from{transform:translateX(-140px)}to{transform:translateX(460px)}}.sk-cloud{animation:skcloud 26s linear infinite}.sk-cloud2{animation-delay:-13s}' +
    '@keyframes skwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.sk-wv{animation:skwave 3s ease-in-out infinite}.sk-wv2{animation-delay:-1.5s}' +
    '@keyframes skship{from{transform:translateX(0)}to{transform:translateX(-120px)}}.sk-ship{animation:skship 16s ease-in-out infinite alternate}' +
    '@keyframes skwalk{from{transform:translateX(-40px)}to{transform:translateX(40px)}}.sk-walk{animation:skwalk 4s linear infinite alternate}.sk-walk2{animation-direction:alternate-reverse}' +
    '@keyframes skneon{0%,100%{opacity:1}45%{opacity:1}50%{opacity:.35}55%{opacity:1}}.sk-ne{animation:skneon 2.6s linear infinite}.sk-ne2{animation-delay:-1.3s}' +
    '@keyframes skbridge{0%,15%{transform:rotate(0)}45%,65%{transform:rotate(-38deg)}95%,100%{transform:rotate(0)}}.sk-brl{transform-origin:96px 166px;animation:skbridge 9s ease-in-out infinite;animation-delay:-4.5s}' +
    '@keyframes skbridger{0%,15%{transform:rotate(0)}45%,65%{transform:rotate(38deg)}95%,100%{transform:rotate(0)}}.sk-brr{transform-origin:304px 166px;animation:skbridger 9s ease-in-out infinite;animation-delay:-4.5s}' +
    '@keyframes skyacht{0%,30%{transform:translateX(-200px)}70%,100%{transform:translateX(260px)}}.sk-yacht{animation:skyacht 9s ease-in-out infinite;animation-delay:-4.5s}' +
    '@keyframes skdrip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(22px);opacity:0}}.sk-dr{animation:skdrip 1.3s ease-in infinite}.sk-dr2{animation-delay:-.45s}.sk-dr3{animation-delay:-.9s}' +
    '@keyframes skblink{0%,100%{opacity:.35}50%{opacity:1}}.sk-bl{animation:skblink 1.8s ease-in-out infinite}.sk-bl2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const pill = (x, y, txt, color, tc) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="' + (tc || "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 13) + '" fill="#fff">' + txt + '</text>';
  const label = (txt, y) => '<rect x="' + (200 - txt.length * 3.6 - 12) + '" y="' + (y - 12) + '" width="' + (txt.length * 7.2 + 24) + '" height="18" rx="2" fill="#111" opacity=".78"/><text x="200" y="' + (y + 1) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const palm = (x, base, h, cls) => {
    const trunk = '<path d="M' + x + ' ' + base + 'q' + (h * 0.12) + ' ' + (-h * 0.5) + ' ' + (h * 0.04) + ' ' + (-h) + '" stroke="#8a6a48" stroke-width="' + (h * 0.07) + '" fill="none" stroke-linecap="round"/>';
    const tx = x + h * 0.04, ty = base - h;
    const fr = [[-1, -0.1], [-0.8, 0.35], [-0.3, -0.45], [0.3, -0.45], [0.8, 0.35], [1, -0.1]].map(f => '<path d="M' + tx + ' ' + ty + 'q' + (f[0] * h * 0.3) + ' ' + (-h * 0.22 + f[1] * h * 0.1) + ' ' + (f[0] * h * 0.55) + ' ' + (f[1] * h * 0.35 + h * 0.05) + '" stroke="#2f7a3a" stroke-width="' + (h * 0.06) + '" fill="none" stroke-linecap="round"/>').join("");
    return '<g>' + trunk + '<g class="sk-palm ' + (cls || "") + '">' + fr + '</g></g>';
  };
  const TRI = "#0072bc", TRIG = "#7ac143", WATER = "#2fd3ff", SLIME = "#b6ff3b", PINK = "#ff4fd8";

  /* 1. Tri-Rail, Fort Lauderdale station (Broward Blvd at I-95) */
  function skstop() {
    const win = (y) => Array.from({ length: 9 }, (_, i) => '<rect x="' + (36 + i * 34) + '" y="' + y + '" width="24" height="14" rx="2" fill="#23313c"/>').join("");
    const train = '<g class="anim-train"><path d="M20 84h330q20 0 26 20v50H20z" fill="#f4f6f8" stroke="#8a939c" stroke-width="2"/>' + win(92) + win(118) +
      '<rect x="20" y="138" width="356" height="6" fill="' + TRI + '"/><rect x="20" y="144" width="356" height="4" fill="' + TRIG + '"/>' +
      '<path d="M350 90q16 2 20 18h-20z" fill="#23313c"/><circle cx="366" cy="148" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sks1)"/>' +
      '<circle cx="330" cy="40" r="20" fill="#fff1b8" opacity=".9"/>' +
      '<g class="sk-cloud"><ellipse cx="60" cy="30" rx="34" ry="8" fill="#fff" opacity=".7"/></g><g class="sk-cloud sk-cloud2"><ellipse cx="40" cy="58" rx="22" ry="6" fill="#fff" opacity=".55"/></g>' +
      '<rect x="0" y="62" width="400" height="10" fill="#b9b3a8"/><rect x="40" y="38" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="88" y="54" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">I-95 NORTH</text><path d="M88 60v2" stroke="#5b6168" stroke-width="3"/>' +
      palm(16, 160, 88) + palm(392, 160, 80, "sk-palm2") +
      '<rect x="0" y="154" width="400" height="10" fill="#d8d2c4"/>' + train +
      '<rect x="0" y="164" width="400" height="20" fill="#c9c2b4"/><path d="M0 164h400" stroke="#ffd23f" stroke-width="3"/>' +
      '<rect x="0" y="184" width="400" height="76" fill="#8a8478"/>' +
      '<rect x="90" y="192" width="220" height="50" rx="3" fill="#111"/><text x="102" y="212" ' + font + ' font-size="15" fill="#fff">Fort Lauderdale</text><text x="102" y="231" ' + font + ' font-size="10" fill="#cfd8e0">Broward Blvd · I-95</text>' +
      pill(228, 226, "TRI-RAIL", TRI),
      sky("sks1", "#3a9ee0", "#cdeefc"));
  }

  /* 2. Fort Lauderdale Beach: the white wave wall on A1A */
  function skbeach() {
    let wall = '<path d="M0 176';
    for (let i = 0; i <= 10; i++) wall += 'q20 -' + (i % 2 ? 14 : 8) + ' 40 0';
    wall += 'v14H0z" fill="#fbfbfb" stroke="#c9d3da" stroke-width="1.5"/>';
    const ship = '<g class="sk-ship"><g transform="translate(250 96)"><path d="M0 18h110l-10 14H8z" fill="#f5f6f7" stroke="#8a939c"/><rect x="12" y="6" width="86" height="12" fill="#fbfbfb" stroke="#9aa3ab"/><rect x="26" y="-4" width="60" height="10" fill="#fbfbfb" stroke="#9aa3ab"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (16 + i * 8) + '" y="10" width="4" height="4" fill="#2b5a7a"/>').join("") + '<rect x="62" y="-14" width="10" height="10" fill="' + WATER + '"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sks2)"/>' +
      '<circle cx="70" cy="44" r="22" fill="#fff4c0"/>' +
      '<g class="sk-cloud"><ellipse cx="80" cy="30" rx="40" ry="9" fill="#fff" opacity=".85"/></g>' +
      '<rect x="0" y="110" width="400" height="44" fill="#1fb3c8"/>' + ship +
      '<g class="sk-wv"><path d="M-20 130q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bff3fa" stroke-width="2" fill="none"/></g>' +
      '<g class="sk-wv sk-wv2"><path d="M-20 144q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#fff" stroke-width="2.5" fill="none"/></g>' +
      '<rect x="0" y="152" width="400" height="26" fill="#f2e2b8"/>' + wall +
      palm(60, 196, 96) + palm(200, 196, 84, "sk-palm2") + palm(340, 196, 92) +
      '<rect x="0" y="190" width="400" height="70" fill="#7b7f84"/><path d="M0 222h400" stroke="#fff" stroke-width="2" stroke-dasharray="16 12" opacity=".6"/>' +
      label("FORT LAUDERDALE BEACH · A1A", 250),
      sky("sks2", "#38a9e6", "#c9f0fb"));
  }

  /* 3. Shibuya scramble crossing at night */
  function skshibuya() {
    const bld = [[0, 30, 70, "#1b1230"], [72, 50, 60, "#221638"], [136, 20, 70, "#160f2a"], [210, 44, 64, "#21163a"], [278, 26, 60, "#1a1130"], [342, 46, 58, "#24183c"]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (150 - b[1]) + '" fill="' + b[3] + '"/>').join("");
    const neon = [[10, 50, 46, 30, PINK], [84, 66, 36, 44, WATER], [146, 36, 50, 26, SLIME], [222, 60, 40, 30, "#ffd23f"], [288, 40, 44, 40, PINK], [352, 64, 38, 26, WATER]].map((n, i) =>
      '<rect class="sk-ne' + (i % 2 ? " sk-ne2" : "") + '" x="' + n[0] + '" y="' + n[1] + '" width="' + n[2] + '" height="' + n[3] + '" rx="3" fill="' + n[4] + '" opacity=".9"/>').join("") +
      '<rect x="150" y="70" width="80" height="50" fill="#0e2a3a" stroke="' + WATER + '" stroke-width="2"/><path d="M160 84h60M160 96h44M160 108h52" stroke="' + WATER + '" stroke-width="3" class="sk-ne"/>';
    let zebra = "";
    for (let i = 0; i < 14; i++) zebra += '<rect x="' + (14 + i * 27) + '" y="178" width="14" height="40" fill="#e9e9ef" opacity=".85"/>';
    zebra += '<path d="M60 160L340 236M340 160L60 236" stroke="#e9e9ef" stroke-width="9" stroke-dasharray="7 9" opacity=".6"/>';
    const people = (y, cls, n, off) => '<g class="' + cls + '">' + Array.from({ length: n }, (_, i) => { const x = off + i * 34; return '<rect x="' + x + '" y="' + y + '" width="7" height="16" rx="3" fill="' + ["#2b2b33", "#3a3a48", "#4a2a3a"][i % 3] + '"/><circle cx="' + (x + 3.5) + '" cy="' + (y - 3) + '" r="3.5" fill="#2b2b33"/><path d="M' + (x - 5) + ' ' + (y - 6) + 'q8.5 -8 17 0" fill="' + [PINK, WATER, SLIME, "#ffd23f"][i % 4] + '" opacity=".9"/>'; }).join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sks3)"/>' + bld + neon +
      '<rect x="0" y="150" width="400" height="110" fill="#2a2a34"/>' + zebra +
      people(186, "sk-walk", 9, 30) + people(210, "sk-walk sk-walk2", 8, 50) +
      label("SHIBUYA · OUTSIDE IN JAPAN", 250),
      sky("sks3", "#05030f", "#2a1a4a"));
  }

  /* 4. The New River downtown: drawbridge up, yacht through */
  function skriver() {
    const towers = '<g fill="#5d7a96" opacity=".7"><rect x="20" y="40" width="34" height="96"/><rect x="60" y="60" width="26" height="76"/><rect x="300" y="30" width="30" height="106"/><rect x="336" y="56" width="40" height="80"/></g>';
    const leafL = '<g class="sk-brl"><rect x="96" y="164" width="56" height="8" fill="#8a939c"/><rect x="96" y="160" width="56" height="4" fill="#d24a3a"/></g>';
    const leafR = '<g class="sk-brr"><rect x="248" y="164" width="56" height="8" fill="#8a939c"/><rect x="248" y="160" width="56" height="4" fill="#d24a3a"/></g>';
    const yacht = '<g class="sk-yacht"><g transform="translate(130 176)"><path d="M0 14h120l-14 14H10z" fill="#fbfbfb" stroke="#8a939c" stroke-width="1.5"/><path d="M20 14l10 -12h56l10 12z" fill="#f2f4f6" stroke="#9aa3ab"/><rect x="36" y="4" width="40" height="6" fill="#23313c"/><path d="M106 28q16 0 26 -4" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sks4)"/>' +
      '<g class="sk-cloud"><ellipse cx="80" cy="30" rx="40" ry="9" fill="#fff" opacity=".85"/></g>' + towers +
      palm(110, 160, 70) + palm(300, 160, 64, "sk-palm2") +
      '<rect x="0" y="152" width="96" height="20" fill="#c9c2b4"/><rect x="304" y="152" width="96" height="20" fill="#c9c2b4"/>' +
      '<rect x="86" y="130" width="14" height="42" fill="#b9b3a8"/><rect x="300" y="130" width="14" height="42" fill="#b9b3a8"/><rect x="84" y="124" width="18" height="8" fill="#d24a3a"/><rect x="298" y="124" width="18" height="8" fill="#d24a3a"/>' +
      '<rect x="0" y="172" width="400" height="88" fill="#2f7f86"/><path d="M0 196h400M0 220h400" stroke="#8fd3d6" stroke-width="1" opacity=".5"/>' +
      yacht + leafL + leafR +
      label("THE NEW RIVER · DOWNTOWN FORT LAUDERDALE", 250),
      sky("sks4", "#4aa9e4", "#d8f2fb"));
  }

  /* 5. Sistrunk Blvd & NW 7 Av, Fort Lauderdale; downtown towers behind */
  function skcorner() {
    const towers = '<g fill="#1d2a3a"><rect x="40" y="56" width="30" height="84"/><rect x="78" y="30" width="24" height="110"/><rect x="110" y="66" width="34" height="74"/><rect x="152" y="40" width="26" height="100"/><rect x="186" y="74" width="30" height="66"/></g>' +
      Array.from({ length: 10 }, (_, i) => '<rect class="sk-bl' + (i % 2 ? " sk-bl2" : "") + '" x="' + [46, 84, 118, 158, 192][i % 5] + '" y="' + (80 + Math.floor(i / 5) * 24) + '" width="8" height="3" fill="#ffd27a"/>').join("");
    const drips = [60, 120, 176].map((x, i) => '<circle class="sk-dr' + (i ? " sk-dr" + (i + 1) : "") + '" cx="' + x + '" cy="200" r="3.5" fill="' + WATER + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sks5)"/>' +
      '<circle cx="330" cy="46" r="18" fill="#ffe6a0" opacity=".9"/>' + towers +
      '<rect x="0" y="136" width="400" height="8" fill="#a8a296"/>' +
      palm(26, 140, 80) + palm(236, 140, 74, "sk-palm2") +
      '<rect x="0" y="140" width="246" height="88" fill="#efe2cf"/><rect x="0" y="140" width="246" height="6" fill="#d6c3a8"/>' +
      '<path d="M18 176q-8 -16 6 -22q4 -12 18 -6q10 -10 22 0q14 -4 16 10q12 6 2 18z" fill="' + WATER + '" opacity=".35"/>' +
      tag("SKI MASK", 16, 194, 42, WATER, -5) + tag("WATER!", 120, 222, 18, SLIME, -3) + drips +
      '<rect x="262" y="96" width="5" height="132" fill="#5b6168"/>' + sign(272, 100, 120, "SISTRUNK BLVD", 12) + sign(272, 126, 120, "NW 7 AV") +
      '<rect x="0" y="228" width="400" height="32" fill="#6a6c70"/><path d="M0 244h400" stroke="#fff" stroke-width="2" stroke-dasharray="14 12" opacity=".5"/>' +
      '<text x="330" y="214" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">FORT LAUDERDALE</text>',
      sky("sks5", "#1a2050", "#ff8fb8"));
  }

  window.SCENES = { skstop, skbeach, skshibuya, skriver, skcorner };
})();
