/* pouya scenes (Regions tab: South Florida; Kendall, Miami-Dade). CSS classes and ids prefixed py- (the page's own anim-train is kept).
   1 Metrorail at Dadeland South, the end of the line on the south side: elevated guideway, silver train pulling in, palms, pink dusk.
   2 Devon Aire, Kendall: the elementary schoolyard where he skated as a kid, a skateboard flying off the chain-link fence.
   3 The Everglades: an airboat skimming the sawgrass and a gator gliding by (his GATOR album).
   4 Bayfront Park, downtown Miami: a festival stage at night with the skyline lit up and the crowd jumping.
   5 SW 104 St and SW 122 Ave in Kendall: green signs, POUYA tagged on the stucco wall, a canal, royal palms and a Turnpike sign behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes pysway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.py-palm{transform-box:fill-box;transform-origin:50% 100%;animation:pysway 3.2s ease-in-out infinite}.py-palm2{animation-delay:-1.6s}' +
    '@keyframes pycloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.py-cloud{animation:pycloud 24s linear infinite}.py-cloud2{animation-delay:-12s}' +
    '@keyframes pyboard{0%{transform:translate(0,0) rotate(0)}40%{transform:translate(60px,-46px) rotate(-20deg)}80%{transform:translate(120px,0) rotate(0)}100%{transform:translate(120px,0)}}.py-skate{animation:pyboard 2.6s ease-in-out infinite}' +
    '@keyframes pyboat{from{transform:translateX(-160px)}to{transform:translateX(480px)}}.py-boat{animation:pyboat 7s linear infinite;animation-delay:-3.2s}' +
    '@keyframes pyfan{from{transform:rotate(0)}to{transform:rotate(360deg)}}.py-fan{transform-box:fill-box;transform-origin:50% 50%;animation:pyfan .3s linear infinite}' +
    '@keyframes pygator{0%,100%{transform:translateX(0)}50%{transform:translateX(-24px)}}.py-gator{animation:pygator 5s ease-in-out infinite}' +
    '@keyframes pyjump{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}.py-j{animation:pyjump .6s ease-in-out infinite}.py-j2{animation-delay:-.3s}' +
    '@keyframes pybeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.py-beam{transform-box:fill-box;transform-origin:50% 0%;animation:pybeam 3s ease-in-out infinite}.py-beam2{animation-delay:-1.5s}' +
    '@keyframes pyblink{0%,100%{opacity:.3}50%{opacity:1}}.py-bl{animation:pyblink 1.6s ease-in-out infinite}.py-bl2{animation-delay:-.8s}' +
    '@keyframes pyspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.py-sp{animation:pyspray 1.4s ease-out infinite}.py-sp2{animation-delay:.45s}' +
    '@keyframes pyripple{0%{transform:scaleX(.6);opacity:.7}100%{transform:scaleX(1.4);opacity:0}}.py-rip{transform-box:fill-box;transform-origin:50% 50%;animation:pyripple 2.4s ease-out infinite}.py-rip2{animation-delay:-1.2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const palm = (x, base, h, cls) => {
    const trunk = '<path d="M' + x + ' ' + base + 'q' + (h * 0.12) + ' ' + (-h * 0.5) + ' ' + (h * 0.04) + ' ' + (-h) + '" stroke="#8a6a48" stroke-width="' + (h * 0.07) + '" fill="none" stroke-linecap="round"/>';
    const tx = x + h * 0.04, ty = base - h;
    const fr = [[-1, -0.1], [-0.8, 0.35], [-0.3, -0.45], [0.3, -0.45], [0.8, 0.35], [1, -0.1]].map(f => '<path d="M' + tx + ' ' + ty + 'q' + (f[0] * h * 0.3) + ' ' + (-h * 0.22 + f[1] * h * 0.1) + ' ' + (f[0] * h * 0.55) + ' ' + (f[1] * h * 0.35 + h * 0.05) + '" stroke="#2f7a3a" stroke-width="' + (h * 0.06) + '" fill="none" stroke-linecap="round"/>').join("");
    return '<g>' + trunk + '<g class="py-palm ' + (cls || "") + '">' + fr + '</g></g>';
  };
  const MR = "#1f4e79", GREEN = "#7fd14b", PINK = "#ff6fae", GOLD = "#ffd23f";

  /* 1. Metrorail, Dadeland South */
  function pystop() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (40 + i * 44) + '" y="98" width="30" height="20" rx="3" fill="#24323e"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="88" width="340" height="50" rx="8" fill="#d9dee3" stroke="#8a939c" stroke-width="2"/>' + win +
      '<rect x="24" y="122" width="340" height="5" fill="' + GREEN + '"/><rect x="24" y="128" width="340" height="3" fill="#f28c28"/>' +
      '<rect x="340" y="94" width="20" height="30" rx="3" fill="#2b3640"/><circle cx="360" cy="130" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pys1)"/>' +
      '<circle cx="80" cy="54" r="24" fill="#ffd27a" opacity=".85"/>' +
      '<g class="py-cloud"><ellipse cx="60" cy="30" rx="30" ry="8" fill="#fff" opacity=".5"/></g>' +
      '<g fill="#6b4a76" opacity=".5"><rect x="150" y="40" width="40" height="60"/><rect x="196" y="56" width="30" height="44"/><rect x="300" y="48" width="50" height="52"/></g>' +
      palm(18, 150, 92) + palm(386, 150, 84, "py-palm2") +
      '<rect x="0" y="138" width="400" height="14" fill="#b9b3a8"/><rect x="0" y="150" width="400" height="5" fill="#8f897e"/>' +
      [70, 200, 330].map(x => '<rect x="' + (x - 9) + '" y="155" width="18" height="70" fill="#c9c2b4"/><path d="M' + (x - 22) + ' 155h44l-13 12h-18z" fill="#b9b3a8"/>').join("") +
      train +
      '<rect x="0" y="225" width="400" height="35" fill="#6a6c70"/><path d="M0 242h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".6"/>' +
      '<rect x="112" y="168" width="176" height="44" rx="3" fill="#111"/><text x="124" y="186" ' + font + ' font-size="14" fill="#fff">Dadeland South</text><text x="124" y="203" ' + font + ' font-size="10" fill="#cfd8e0">Metrorail · Kendall</text>' + badge(240, 196, "MR", MR),
      sky("pys1", "#3b2d63", "#ff9ab8"));
  }

  /* 2. Devon Aire schoolyard, skating the fence */
  function pyskate() {
    let fence = "";
    for (let x = 0; x <= 400; x += 10) fence += '<path d="M' + x + ' 120l10 10M' + (x + 10) + ' 120l-10 10M' + x + ' 130l10 10M' + (x + 10) + ' 130l-10 10M' + x + ' 140l10 10M' + (x + 10) + ' 140l-10 10" stroke="#a9b0b6" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pys2)"/>' +
      '<g class="py-cloud"><ellipse cx="80" cy="40" rx="34" ry="10" fill="#fff" opacity=".9"/></g><g class="py-cloud py-cloud2"><ellipse cx="60" cy="66" rx="24" ry="7" fill="#fff" opacity=".7"/></g>' +
      '<rect x="150" y="56" width="230" height="64" fill="#f1e2c4"/><rect x="150" y="50" width="230" height="8" fill="#c55a3a"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (162 + i * 44) + '" y="70" width="30" height="22" fill="#5b8fb0"/>').join("") +
      '<rect x="250" y="96" width="30" height="24" fill="#7a4a2a"/>' +
      palm(120, 120, 70) + palm(392, 120, 60, "py-palm2") +
      '<rect x="0" y="120" width="400" height="30" fill="#000" opacity=".05"/>' + fence + '<path d="M0 120h400" stroke="#8a9198" stroke-width="2.5"/>' +
      [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="118" width="3" height="34" fill="#8a9198"/>').join("") +
      '<rect x="0" y="150" width="400" height="110" fill="#9a958c"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 56) + ' 150l-24 110" stroke="#8b867c" stroke-width="1.5"/>').join("") +
      '<g class="py-skate"><g transform="translate(70 196)"><rect x="0" y="0" width="54" height="6" rx="3" fill="' + PINK + '" stroke="#111" stroke-width="1.5"/><circle cx="10" cy="10" r="4" fill="#f4f4f0" stroke="#111"/><circle cx="44" cy="10" r="4" fill="#f4f4f0" stroke="#111"/></g></g>' +
      tag("SOUTH SIDE", 250, 190, 22, GREEN, -4) +
      '<rect x="112" y="234" width="176" height="18" rx="2" fill="#111" opacity=".75"/><text x="200" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">DEVON AIRE · KENDALL</text>',
      sky("pys2", "#58b4ec", "#d8f0fb"));
  }

  /* 3. The Everglades, airboat and gator */
  function pygator() {
    let grass = "";
    for (let i = 0; i < 80; i++) { const x = (i * 23) % 400, h = 14 + (i * 7) % 18; grass += '<path d="M' + x + ' 150l' + ((i % 3) - 1) * 4 + ' ' + (-h) + '" stroke="' + (i % 2 ? "#9a8a4a" : "#7d8a3a") + '" stroke-width="2"/>'; }
    const boat = '<g class="py-boat"><g transform="translate(0 168)"><path d="M0 18h96l-8 12H8z" fill="#e8e6df" stroke="#555" stroke-width="1.5"/><rect x="20" y="4" width="16" height="14" fill="#2b3640"/><rect x="40" y="0" width="10" height="18" fill="#c9302c"/>' +
      '<rect x="62" y="-14" width="4" height="32" fill="#777"/><circle cx="76" cy="-2" r="16" fill="none" stroke="#666" stroke-width="2.5"/><g class="py-fan"><path d="M76 -16v28M62 -2h28" stroke="#333" stroke-width="3"/></g>' +
      '<path d="M-6 30q-20 4 -40 0" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/></g></g>';
    const gator = '<g class="py-gator"><g transform="translate(250 214)"><path d="M0 0q30 -10 70 -4l20 2q6 2 0 4l-20 2q-40 6 -70 -4z" fill="#3e5a2a" stroke="#1d2d12" stroke-width="1.5"/>' +
      [10, 22, 34, 46, 58].map(x => '<path d="M' + x + ' -4l4 -5 4 5" fill="#2e4520"/>').join("") + '<circle cx="74" cy="-4" r="2.5" fill="#e8d36b"/><circle cx="74" cy="-4" r="1" fill="#111"/></g>' +
      '<ellipse class="py-rip" cx="300" cy="218" rx="60" ry="4" fill="none" stroke="#cfe6e6" stroke-width="1.5"/><ellipse class="py-rip py-rip2" cx="300" cy="218" rx="40" ry="3" fill="none" stroke="#cfe6e6" stroke-width="1.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pys3)"/>' +
      '<circle cx="320" cy="60" r="22" fill="#fff1b0"/>' +
      '<g class="py-cloud"><ellipse cx="100" cy="44" rx="40" ry="11" fill="#fff" opacity=".85"/></g>' +
      '<g fill="#3f6b3a"><ellipse cx="40" cy="132" rx="40" ry="18"/><ellipse cx="190" cy="128" rx="30" ry="16"/><ellipse cx="350" cy="134" rx="46" ry="16"/></g>' +
      palm(70, 138, 56) + palm(330, 138, 50, "py-palm2") +
      '<rect x="0" y="134" width="400" height="20" fill="#8a9a4a"/>' + grass +
      '<rect x="0" y="150" width="400" height="110" fill="#5f8c8a"/><path d="M0 170h400M0 196h400M0 232h400" stroke="#8fb9b6" stroke-width="1" opacity=".5"/>' +
      boat + gator +
      '<rect x="132" y="236" width="136" height="18" rx="2" fill="#111" opacity=".75"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">THE EVERGLADES · GATOR</text>',
      sky("pys3", "#7ec8ea", "#f4e3b0"));
  }

  /* 4. Bayfront Park, festival stage at night */
  function pystage() {
    const towers = [[20, 70, 30, 140], [56, 40, 26, 170], [90, 60, 34, 150], [300, 50, 30, 160], [336, 30, 24, 180], [366, 64, 34, 146]].map(t =>
      '<rect x="' + t[0] + '" y="' + t[1] + '" width="' + t[2] + '" height="' + t[3] + '" fill="#141a2e"/>' +
      Array.from({ length: Math.floor(t[3] / 14) }, (_, i) => '<rect x="' + (t[0] + 4) + '" y="' + (t[1] + 6 + i * 14) + '" width="' + (t[2] - 8) + '" height="3" fill="' + (i % 3 ? "#ffd27a" : PINK) + '" opacity=".55"/>').join("")).join("");
    let crowd = "";
    for (let i = 0; i < 46; i++) { const x = 6 + i * 8.6, y = 214 + (i % 3) * 6; crowd += '<g class="py-j' + (i % 2 ? " py-j2" : "") + '"><circle cx="' + x + '" cy="' + y + '" r="5" fill="#0a0a12"/><rect x="' + (x - 5) + '" y="' + (y + 4) + '" width="10" height="30" fill="#0a0a12"/>' + (i % 5 === 0 ? '<path d="M' + (x + 3) + ' ' + (y + 4) + 'l6 -16" stroke="#0a0a12" stroke-width="3"/>' : "") + '</g>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#pys4)"/>' + towers +
      '<path d="M120 200V80h160v120" fill="#1b1b24" stroke="#555" stroke-width="3"/><path d="M110 82h180" stroke="#777" stroke-width="6"/>' +
      '<rect x="134" y="98" width="132" height="70" fill="#0d0d14"/><g class="py-bl"><rect x="134" y="98" width="132" height="70" fill="' + GREEN + '" opacity=".18"/></g>' +
      '<text x="200" y="144" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="30" letter-spacing="4" fill="' + GREEN + '" stroke="#000" stroke-width="1.5" paint-order="stroke">POUYA</text>' +
      '<g class="py-beam"><path d="M150 84l-40 140h30z" fill="' + PINK + '" opacity=".35"/></g><g class="py-beam py-beam2"><path d="M250 84l40 140h-30z" fill="' + GOLD + '" opacity=".3"/></g>' +
      '<rect x="120" y="168" width="160" height="32" fill="#2a2a34"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#121218"/>' + crowd +
      '<rect x="128" y="240" width="144" height="16" rx="2" fill="#111" opacity=".8"/><text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">BAYFRONT PARK · MIAMI</text>',
      sky("pys4", "#06061a", "#3a1e4e"));
  }

  /* 5. SW 104 St and SW 122 Ave, Kendall */
  function pycorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#pys5)"/>' +
      '<circle cx="330" cy="50" r="20" fill="#ffe6a0"/>' +
      '<rect x="210" y="40" width="4" height="66" fill="#6b7178"/><rect x="290" y="40" width="4" height="66" fill="#6b7178"/>' +
      '<rect x="188" y="22" width="128" height="34" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="252" y="37" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">TURNPIKE</text><text x="252" y="50" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">KENDALL DR · NEXT EXIT</text>' +
      '<rect x="0" y="100" width="400" height="10" fill="#a8a296"/>' +
      palm(150, 112, 96) + palm(330, 112, 88, "py-palm2") + palm(380, 112, 70) +
      '<rect x="0" y="110" width="400" height="22" fill="#4f8a86"/><path d="M0 120h400" stroke="#9ccac6" stroke-width="1" opacity=".6"/>' +
      '<rect x="0" y="132" width="250" height="96" fill="#f2dcc0"/><rect x="0" y="132" width="250" height="6" fill="#d9bfa0"/>' +
      tag("POUYA", 22, 196, 46, PINK, -5) + tag("BABY BONE", 140, 220, 16, GREEN, -3) +
      '<g class="py-sp"><circle cx="232" cy="172" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="py-sp py-sp2"><circle cx="238" cy="166" r="2" fill="' + PINK + '" opacity=".7"/></g>' +
      '<rect x="258" y="96" width="5" height="132" fill="#5b6168"/>' + sign(268, 104, 110, "SW 104 ST") + sign(268, 130, 110, "SW 122 AVE") +
      '<rect x="0" y="228" width="400" height="32" fill="#6a6c70"/><path d="M0 244h400" stroke="#fff" stroke-width="2" stroke-dasharray="14 12" opacity=".5"/>' +
      '<text x="330" y="214" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">KENDALL</text>',
      sky("pys5", "#ff9e7a", "#ffe0b8"));
  }

  window.SCENES = { pystop, pyskate, pygator, pystage, pycorner };
})();
