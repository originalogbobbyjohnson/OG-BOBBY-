/* mickjenkins scenes (Regions tab: Chicago; Burnside, South Side). CSS classes prefixed mjk- (the page's own anim-train is kept).
   1 The CTA #4 Cottage Grove bus pulling up to the stop at Cottage Grove & 91st St ("Burnside off 91st ... right off Cottage Grove").
   2 Hirsch Metropolitan High School (Grand Crossing), where he did mock trial: three-story brown-red brick with limestone trim, gavel tapping.
   3 The Chicago Water Tower on Michigan Ave (pale yellow limestone castle tower) for the water theme, drops falling.
   4 The Chicago River with a raised bascule bridge and a tour boat gliding (The Water[s]).
   5 Cottage Grove Ave and 91st St in Burnside: green signs, MICK tagged, the Pullman clock tower behind. Every 9 is hand drawn with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mjkdrop{0%{transform:translateY(0);opacity:0}15%{opacity:1}100%{transform:translateY(90px);opacity:0}}.mjk-drop{animation:mjkdrop 2.2s linear infinite}.mjk-d2{animation-delay:-.7s}.mjk-d3{animation-delay:-1.4s}' +
    '@keyframes mjkflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.mjk-flag{animation:mjkflag 1.6s ease-in-out infinite;transform-origin:0 50%}' +
    '@keyframes mjkgav{0%,60%,100%{transform:rotate(0)}70%{transform:rotate(-28deg)}80%{transform:rotate(0)}}.mjk-gav{animation:mjkgav 1.8s ease-in-out infinite}' +
    '@keyframes mjkboat{from{transform:translateX(-160px)}to{transform:translateX(560px)}}.mjk-boat{animation:mjkboat 14s linear infinite}' +
    '@keyframes mjkrip{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.mjk-rip{animation:mjkrip 3s ease-in-out infinite}.mjk-rip2{animation-delay:-1.5s}' +
    '@keyframes mjkbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-20px)}}.mjk-bird{animation:mjkbird 13s linear infinite}.mjk-bird2{animation-delay:-6.5s}' +
    '@keyframes mjkblink{0%,100%{opacity:.3}50%{opacity:1}}.mjk-bl{animation:mjkblink 1.4s ease-in-out infinite}.mjk-bl2{animation-delay:-.7s}' +
    '@keyframes mjkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mjk-sp{animation:mjkspray 1.4s ease-out infinite}.mjk-sp2{animation-delay:.45s}' +
    '@keyframes mjkhand{from{transform:rotate(0)}to{transform:rotate(360deg)}}.mjk-hand{animation:mjkhand 8s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* a 9 drawn by hand: round head + straight stem (never a hooked, G-looking 9). x = left edge, y = baseline, sz = cap height */
  const nine = (x, y, sz, c) => { const r = sz * 0.25, w = sz * 0.17; return '<circle cx="' + (x + r + w / 2) + '" cy="' + (y - sz * 0.72 + r) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + w + '"/><path d="M' + (x + 2 * r + w / 2) + ' ' + (y - sz * 0.72 + r) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w + '"/>'; };
  const sign = (x, y, w, inner) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + inner;
  const tree = (x, base, s) => '<g><rect x="' + (x - 3 * s) + '" y="' + (base - 34 * s) + '" width="' + (6 * s) + '" height="' + (34 * s) + '" fill="#5b4330"/>' +
    [[-16, -44, 18], [10, -50, 20], [0, -62, 18], [18, -36, 14], [-20, -32, 13]].map(c => '<ellipse cx="' + (x + c[0] * s) + '" cy="' + (base + c[1] * s) + '" rx="' + (c[2] * s) + '" ry="' + (c[2] * 0.8 * s) + '" fill="#3f7a3a"/>').join("") + '</g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "mjk-bl" + (i % 2 ? " mjk-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 80) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const BLUE = "#4fc3f7", GOLD = "#f2c94c", MINT = "#7ee0b5", CTA = "#1f4e79";

  /* 1. CTA #4 Cottage Grove bus at 91st St */
  function mjkstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 42) + '" y="112" width="34" height="30" rx="3" fill="#1c2630"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="96" width="320" height="86" rx="10" fill="#f1f3f5" stroke="#8a939b" stroke-width="2"/>' + win +
      '<rect x="40" y="150" width="320" height="7" fill="' + CTA + '"/><rect x="40" y="158" width="320" height="3" fill="#c8102e"/>' +
      '<path d="M340 102h14q6 0 6 8v34h-20z" fill="#1c2630"/><rect x="44" y="102" width="20" height="40" rx="3" fill="#1c2630"/>' +
      '<rect x="270" y="100" width="66" height="10" rx="2" fill="#111"/><text x="303" y="108" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">4 COTTAGE GROVE</text>' +
      '<circle cx="352" cy="172" r="3.5" fill="#fff6c2"/>' +
      '<circle cx="96" cy="184" r="13" fill="#111"/><circle cx="96" cy="184" r="5" fill="#9aa1a8"/><circle cx="306" cy="184" r="13" fill="#111"/><circle cx="306" cy="184" r="5" fill="#9aa1a8"/></g>';
    const stopSign = '<rect x="372" y="70" width="4" height="126" fill="#6b737b"/><rect x="356" y="64" width="36" height="46" rx="3" fill="#fff" stroke="#6b737b" stroke-width="1.5"/>' +
      '<rect x="356" y="64" width="36" height="12" rx="2" fill="' + CTA + '"/><text x="374" y="73" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">BUS</text>' +
      '<rect x="363" y="80" width="22" height="18" rx="3" fill="' + CTA + '"/><text x="374" y="94" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">4</text>';
    const shops = [["#8a4b3a", 0], ["#a8754f", 70], ["#6f6a5e", 140], ["#9a5a44", 210], ["#7d6450", 280]].map(s => '<rect x="' + s[1] + '" y="40" width="68" height="60" fill="' + s[0] + '"/><rect x="' + (s[1] + 8) + '" y="50" width="18" height="16" fill="#cfe3f0" opacity=".7"/><rect x="' + (s[1] + 38) + '" y="50" width="18" height="16" fill="#cfe3f0" opacity=".7"/><rect x="' + s[1] + '" y="40" width="68" height="5" fill="#3a2a22"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mjks1)"/>' +
      '<g class="mjk-bird"><path d="M20 22q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      shops + tree(350, 100, 0.9) +
      '<rect x="0" y="100" width="400" height="96" fill="#5d5a55"/><path d="M0 150h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      bus + stopSign +
      '<rect x="0" y="194" width="400" height="8" fill="#cfc8b8"/><rect x="0" y="202" width="400" height="58" fill="#a8a296"/>' +
      '<rect x="30" y="208" width="340" height="40" rx="3" fill="#111"/>' +
      '<text x="44" y="226" ' + font + ' font-size="14" fill="#fff">Cottage Grove &amp;</text>' + nine(44, 242, 14, "#fff") + '<text x="54" y="242" ' + font + ' font-size="14" fill="#fff">1st Street</text>' +
      '<rect x="306" y="215" width="50" height="26" rx="4" fill="' + CTA + '"/><text x="331" y="233" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">4</text>',
      sky("mjks1", "#7fb6e3", "#f4e2c2"));
  }

  /* 2. Hirsch Metropolitan High School, mock trial */
  function mjkhirsch() {
    const wins = []; for (let r = 0; r < 3; r++) for (let c = 0; c < 10; c++) { if (c === 4 || c === 5) continue; wins.push('<rect x="' + (52 + c * 30) + '" y="' + (70 + r * 32) + '" width="16" height="22" fill="#2c3d4d"/><rect x="' + (50 + c * 30) + '" y="' + (92 + r * 32) + '" width="20" height="3" fill="#e6dcc3"/>'); }
    return svg(
      '<rect width="400" height="260" fill="url(#mjks2)"/>' +
      '<g class="mjk-bird"><path d="M30 30q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="mjk-bird mjk-bird2"><path d="M70 46q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<rect x="40" y="56" width="320" height="116" fill="#8e4a35"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M40 ' + (62 + i * 8) + 'h320" stroke="#7a3d2b" stroke-width="1"/>').join("") +
      '<rect x="36" y="50" width="328" height="8" fill="#e6dcc3"/><rect x="40" y="166" width="320" height="6" fill="#e6dcc3"/>' + wins.join("") +
      '<rect x="166" y="40" width="68" height="132" fill="#9a5540"/><rect x="162" y="36" width="76" height="8" fill="#e6dcc3"/>' +
      '<path d="M180 172v-40q20 -22 40 0v40z" fill="#e6dcc3"/><path d="M186 172v-36q14 -16 28 0v36z" fill="#3a2a22"/>' +
      '<rect x="172" y="56" width="56" height="14" fill="#e6dcc3"/><text x="200" y="66" text-anchor="middle" ' + font + ' font-size="8" fill="#5a3a2a">HIRSCH</text>' +
      '<rect x="198" y="4" width="2" height="36" fill="#666"/><g class="mjk-flag"><rect x="200" y="6" width="24" height="14" fill="#fff"/><path d="M200 9h24M200 15h24" stroke="#7fb6e3" stroke-width="2.5"/><g fill="#c8102e"><path d="M206 13l1 -2l1 2l-2 -1h2z"/><path d="M214 13l1 -2l1 2l-2 -1h2z"/></g></g>' +
      '<rect x="0" y="172" width="400" height="88" fill="#7aae5c"/>' + tree(18, 176, 0.9) + tree(382, 176, 0.9) +
      '<path d="M186 172l-30 88h88l-30 -88z" fill="#cfc8b8"/>' +
      '<g transform="translate(300 214)"><rect x="-26" y="10" width="52" height="8" rx="2" fill="#5a3a22"/><g class="mjk-gav" style="transform-origin:14px 6px"><rect x="-14" y="-4" width="34" height="5" rx="2" fill="#7a4a28" transform="rotate(-20)"/><rect x="-22" y="-14" width="14" height="22" rx="3" fill="#8a5a36" transform="rotate(-20)"/></g></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#173a1c">HIRSCH METRO HIGH · MOCK TRIAL</text>',
      sky("mjks2", "#8cc8f0", "#f4f0d8"));
  }

  /* 3. Chicago Water Tower */
  function mjktower() {
    const LS = "#eadfb6", LSd = "#c9bb8c";
    const turret = (x, y, h) => '<rect x="' + (x - 7) + '" y="' + y + '" width="14" height="' + h + '" fill="' + LS + '" stroke="' + LSd + '" stroke-width="1.5"/><path d="M' + (x - 9) + ' ' + y + 'h18l-9 -16z" fill="' + LSd + '"/>' +
      [0, 1].map(i => '<rect x="' + (x - 2) + '" y="' + (y + 12 + i * 22) + '" width="4" height="10" fill="#6a6250"/>').join("");
    const drops = [0, 1, 2, 3, 4].map(i => '<g class="mjk-drop' + (i % 3 ? " mjk-d" + (i % 3 + 1) : "") + '"><path d="M' + (40 + i * 80) + ' ' + (20 + (i % 2) * 18) + 'q-5 8 0 12q5 -4 0 -12z" fill="' + BLUE + '"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mjks3)"/>' +
      '<g fill="#8796a6" opacity=".55"><rect x="10" y="40" width="50" height="150"/><rect x="66" y="70" width="40" height="120"/><rect x="300" y="30" width="44" height="160"/><rect x="348" y="60" width="46" height="130"/><path d="M296 30l26 -24l26 24z"/></g>' +
      '<rect x="110" y="132" width="180" height="60" fill="' + LS + '" stroke="' + LSd + '" stroke-width="2"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M110 ' + (140 + i * 8) + 'h180" stroke="' + LSd + '" stroke-width="1"/>').join("") +
      '<path d="M110 132v-8h10v8h10v-8h10v8h10v-8h10v8h10v-8h10v8h10v-8h10v8h10v-8h10v8h10v-8h10v8h10v-8h10v8h10v-8h10v8h10v-8h10v8" fill="' + LS + '" stroke="' + LSd + '" stroke-width="1.5"/>' +
      '<path d="M180 192v-26q20 -18 40 0v26z" fill="#4a4436"/>' +
      turret(116, 108, 84) + turret(284, 108, 84) +
      '<rect x="176" y="52" width="48" height="80" fill="' + LS + '" stroke="' + LSd + '" stroke-width="2"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M176 ' + (60 + i * 8) + 'h48" stroke="' + LSd + '" stroke-width="1"/>').join("") +
      '<rect x="194" y="70" width="12" height="22" rx="6" fill="#4a4436"/><rect x="194" y="102" width="12" height="18" rx="6" fill="#4a4436"/>' +
      turret(176, 40, 30) + turret(224, 40, 30) +
      '<rect x="186" y="18" width="28" height="34" fill="' + LS + '" stroke="' + LSd + '" stroke-width="2"/><path d="M184 18h32l-16 -14z" fill="' + LSd + '"/><circle cx="200" cy="34" r="5" fill="#4a4436"/>' +
      drops +
      '<rect x="0" y="192" width="400" height="12" fill="#cfc8b8"/><rect x="0" y="204" width="400" height="56" fill="#55565c"/><path d="M0 232h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="20 14"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#eaf6ff">CHICAGO WATER TOWER · DRINK MORE WATER</text>',
      sky("mjks3", "#7fb8e6", "#e7f2fa"));
  }

  /* 4. Chicago River, bascule bridge up, boat gliding */
  function mjkriver() {
    const towers = '<g fill="#5d6b7a"><rect x="20" y="60" width="40" height="100"/><rect x="64" y="30" width="34" height="130"/><rect x="300" y="50" width="36" height="110"/><rect x="340" y="80" width="50" height="80"/></g>' +
      [[118, 52], [150, 52]].map(t => '<g><rect x="' + t[0] + '" y="' + t[1] + '" width="26" height="108" rx="13" fill="#e8e4da"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M' + t[0] + ' ' + (t[1] + 10 + i * 8) + 'q13 5 26 0" stroke="#a9a49a" stroke-width="2" fill="none"/>').join("") + '</g>').join("") +
      '<g fill="#ffd98a" opacity=".6">' + Array.from({ length: 16 }, (_, i) => '<rect class="' + (i % 4 ? "" : "mjk-bl") + '" x="' + (26 + (i % 4) * 8) + '" y="' + (70 + Math.floor(i / 4) * 18) + '" width="3" height="5"/>').join("") + '</g>';
    const bridge = '<g><rect x="200" y="140" width="16" height="30" fill="#6b5a3e"/><rect x="290" y="140" width="16" height="30" fill="#6b5a3e"/>' +
      '<path d="M216 150l30 -64l8 4l-30 64z" fill="#55606b"/><path d="M290 150l-30 -64l-8 4l30 64z" fill="#55606b"/>' +
      '<path d="M222 146l26 -54M284 146l-26 -54" stroke="#8a96a1" stroke-width="2"/><rect x="196" y="132" width="24" height="10" fill="#7d6b4c"/><rect x="286" y="132" width="24" height="10" fill="#7d6b4c"/></g>';
    const boat = '<g class="mjk-boat"><path d="M10 196h110l-12 16h-88z" fill="#f4f1e8" stroke="#333" stroke-width="1.5"/><rect x="26" y="184" width="70" height="12" rx="2" fill="#2f6f8f"/><rect x="30" y="187" width="62" height="5" fill="#cfe9ff"/><rect x="52" y="174" width="3" height="10" fill="#333"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mjks4)"/>' + towers +
      '<rect x="0" y="160" width="400" height="12" fill="#8a8578"/>' + bridge +
      '<rect x="0" y="172" width="400" height="88" fill="#2f7f74"/>' +
      '<g class="mjk-rip"><path d="M20 222h40M150 236h50M300 220h44" stroke="#9fe0d4" stroke-width="2" stroke-linecap="round"/></g><g class="mjk-rip mjk-rip2"><path d="M80 246h36M240 250h40M350 238h30" stroke="#9fe0d4" stroke-width="2" stroke-linecap="round"/></g>' +
      boat + '<rect x="100" y="240" width="200" height="18" rx="9" fill="#123c37" opacity=".85"/>' +
      '<text x="200" y="253" text-anchor="middle" ' + font + ' font-size="11" fill="#eafaf6">CHICAGO RIVER · THE WATER[S]</text>',
      sky("mjks4", "#f2b880", "#7aa6d6"));
  }

  /* 5. Cottage Grove Ave and 91st St, Pullman clock tower behind */
  function mjkcorner() {
    const clock = '<g><rect x="206" y="66" width="120" height="60" fill="#8e3f2c"/><path d="M200 66h132l-14 -12h-104z" fill="#5a3a2a"/>' +
      '<rect x="248" y="22" width="36" height="44" fill="#9a4a33"/><path d="M244 22h44l-22 -18z" fill="#4a5a52"/><rect x="262" y="0" width="8" height="8" fill="#4a5a52"/>' +
      '<circle cx="266" cy="42" r="12" fill="#f4efe0" stroke="#3a2a22" stroke-width="2"/>' + Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<path d="M' + (266 + Math.sin(a) * 9) + ' ' + (42 - Math.cos(a) * 9) + 'L' + (266 + Math.sin(a) * 11) + ' ' + (42 - Math.cos(a) * 11) + '" stroke="#3a2a22" stroke-width="1.2"/>'; }).join("") +
      '<path d="M266 42v-7" stroke="#3a2a22" stroke-width="1.8"/><g class="mjk-hand" style="transform-origin:266px 42px"><path d="M266 42v-10" stroke="#3a2a22" stroke-width="1.2"/></g>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (214 + i * 22) + '" y="80" width="10" height="16" fill="#ffd98a" opacity=".7"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mjks5)"/>' + stars(14) + clock +
      '<rect x="0" y="126" width="400" height="98" fill="#d8d2c4"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#c4bdae" stroke-width="1"/>').join("") +
      tag("MICK", 24, 192, 66, BLUE, -6) + tag("FREE NATION", 214, 214, 18, GOLD, -4) + tag("DRINK MORE WATER", 22, 216, 14, MINT, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' +
      sign(232, 98, 166, '<text x="315" y="114" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Cottage Grove Ave</text>') +
      sign(278, 124, 84, nine(296, 140.5, 13, "#fff") + '<text x="306" y="140.5" ' + font + ' font-size="13" fill="#fff">1st St</text>') +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="mjk-bl" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="mjk-sp"><circle cx="176" cy="166" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="mjk-sp mjk-sp2"><circle cx="182" cy="160" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("mjks5", "#14203a", "#d98a5a"));
  }

  window.SCENES = { mjkstation: mjkstation, mjkhirsch: mjkhirsch, mjktower: mjktower, mjkriver: mjkriver, mjkcorner: mjkcorner };
})();
