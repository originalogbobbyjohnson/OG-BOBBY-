/* kidink scenes (Regions tab: Los Angeles + SoCal; Mid-City, Los Angeles). CSS classes prefixed ki- (the page's own anim-train is kept).
   1 Metro Local 212 pulling up at the La Brea / Venice stop (lines 33 + 212), Mid-City: low stucco storefronts, palms, power lines.
   2 A tattoo shop on Melrose Ave: he took his name from his tattoos (100+). Neon TATTOO sign flickering, flash sheets in the window, the machine buzzing.
   3 Space Shuttle Endeavour standing up at the California Science Center, Exposition Park: the rocket ship for "Rocketshipshawty" and "Up & Away", the rose garden in front.
   4 The ring: "Money and the Power" was a WrestleMania 31 theme and "Hello World" says "treat this game like WrestleMania, off top of the ropes". Spotlights sweep, pyro pops.
   5 W Washington Blvd and S La Brea Ave, Mid-City: green signs, KID INK tagged with BATGANG, the downtown skyline behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kiflick{0%,100%{opacity:1}44%{opacity:.85}48%{opacity:.25}52%{opacity:.95}70%{opacity:.6}72%{opacity:1}}.ki-flk{animation:kiflick 2.8s infinite}.ki-flk2{animation-delay:-1.3s}' +
    '@keyframes kisway{0%,100%{transform:rotate(-2.5deg)}50%{transform:rotate(2.5deg)}}.ki-sway{transform-box:fill-box;transform-origin:50% 100%;animation:kisway 3.6s ease-in-out infinite}.ki-sway2{animation-delay:-1.8s}' +
    '@keyframes kibuzz{0%,100%{transform:translate(0,0)}25%{transform:translate(.8px,-.6px)}75%{transform:translate(-.8px,.6px)}}.ki-buzz{animation:kibuzz .12s linear infinite}' +
    '@keyframes kicloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.ki-cl{animation:kicloud 26s linear infinite}.ki-cl2{animation-delay:-13s}' +
    '@keyframes kibeam{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.ki-beam{transform-box:fill-box;transform-origin:50% 0%;animation:kibeam 4.2s ease-in-out infinite}.ki-beam2{animation-delay:-2.1s}' +
    '@keyframes kipyro{0%{transform:translateY(0);opacity:0}10%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.ki-pyro{animation:kipyro 1.6s ease-out infinite}.ki-p2{animation-delay:-.5s}.ki-p3{animation-delay:-1.05s}' +
    '@keyframes kibob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.ki-bob{animation:kibob .9s ease-in-out infinite}.ki-bob2{animation-delay:-.45s}.ki-bob3{animation-delay:-.2s}' +
    '@keyframes kirope{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}.ki-rope{animation:kirope 1.1s ease-in-out infinite}' +
    '@keyframes kitw{0%,100%{opacity:.25}50%{opacity:1}}.ki-tw{animation:kitw 2s ease-in-out infinite}.ki-tw2{animation-delay:-1s}' +
    '@keyframes kicar{from{transform:translateX(-110px)}to{transform:translateX(500px)}}.ki-car{animation:kicar 7s linear infinite}.ki-car2{animation-delay:-3.5s}' +
    '@keyframes kibat{0%{transform:translate(-40px,30px) scaleY(1)}25%{transform:translate(60px,10px) scaleY(.4)}50%{transform:translate(160px,26px) scaleY(1)}75%{transform:translate(260px,6px) scaleY(.4)}100%{transform:translate(460px,20px) scaleY(1)}}.ki-bat{animation:kibat 9s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 12) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 12) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const palm = (x, base, h, c, cls) => '<g class="ki-sway ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q5 -' + (h / 2) + ' 2 -' + h + '" stroke="#4a3a2a" stroke-width="4" fill="none"/>' +
    [-44, -22, 0, 22, 44, -64, 64].map(a => '<path d="M' + (x + 2) + ' ' + (base - h) + 'q' + (a / 2) + ' -12 ' + a + ' ' + (Math.abs(a) / 3 + 4) + '" stroke="' + (c || "#2f5a35") + '" stroke-width="4" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const car = (y, body, cls) => '<g class="' + cls + '"><g transform="translate(0 ' + y + ')"><rect x="0" y="8" width="70" height="16" rx="5" fill="' + body + '"/><path d="M14 8l8 -9h26l10 9z" fill="' + body + '"/><path d="M20 7l5 -6h9v6zM37 7v-6h9l7 6z" fill="#bfe3f2"/>' +
    '<circle cx="16" cy="25" r="6" fill="#111"/><circle cx="16" cy="25" r="3" fill="#cfcfcf"/><circle cx="54" cy="25" r="6" fill="#111"/><circle cx="54" cy="25" r="3" fill="#cfcfcf"/></g></g>';
  const bat = (x, y, s, c) => '<path transform="translate(' + x + ' ' + y + ') scale(' + s + ')" d="M0 0q6 -6 10 -2q2 -4 4 -4q2 0 4 4q4 -4 10 2q-6 0 -8 6q-2 -3 -6 -1q-4 -2 -6 1q-2 -6 -8 -6z" fill="' + c + '"/>';
  const METRO = "#e16710", INKB = "#3fd0ff", RED = "#ff4d6d", LAV = "#c9a7ff", INK = "#0b0c12";

  /* 1. Metro Local 212 at La Brea / Venice */
  function kistation() {
    let win = ""; for (let i = 0; i < 6; i++) win += '<rect x="' + (80 + i * 38) + '" y="128" width="32" height="30" rx="3" fill="#22303d"/>';
    const bus = '<g class="anim-train"><rect x="34" y="116" width="290" height="80" rx="10" fill="#f3f3f0" stroke="#8d949b" stroke-width="2"/>' + win +
      '<rect x="42" y="128" width="30" height="56" rx="3" fill="#22303d"/><path d="M57 128v56" stroke="#8d949b" stroke-width="1.5"/>' +
      '<rect x="34" y="164" width="290" height="10" fill="' + METRO + '"/><rect x="34" y="176" width="290" height="4" fill="#9c4209"/>' +
      '<rect x="300" y="124" width="20" height="40" rx="4" fill="#22303d"/><rect x="292" y="118" width="30" height="8" rx="2" fill="#111"/><text x="307" y="124.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb347">212</text>' +
      '<circle cx="80" cy="198" r="13" fill="#1a1a1a"/><circle cx="80" cy="198" r="6" fill="#bbb"/><circle cx="276" cy="198" r="13" fill="#1a1a1a"/><circle cx="276" cy="198" r="6" fill="#bbb"/>' +
      '<rect x="316" y="182" width="10" height="6" rx="2" fill="#fff6c2"/><rect x="120" y="104" width="120" height="12" rx="3" fill="#d6d8d6"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kis1)"/>' +
      '<circle cx="74" cy="44" r="18" fill="#ffd27a" opacity=".85"/>' +
      /* far Mid-City storefronts */
      '<rect x="0" y="70" width="90" height="40" fill="#e7c9a3"/><rect x="90" y="62" width="70" height="48" fill="#d8b0c4"/><rect x="160" y="74" width="110" height="36" fill="#c9d6c0"/><rect x="270" y="66" width="80" height="44" fill="#e0b58e"/><rect x="350" y="72" width="50" height="38" fill="#cfc3e0"/>' +
      [10, 40, 100, 130, 176, 216, 284, 316, 360].map(x => '<rect x="' + x + '" y="84" width="20" height="14" fill="#6d7f8c" opacity=".75"/>').join("") +
      palm(26, 112, 70) + palm(206, 112, 82, "#3a6b40", "ki-sway2") + palm(380, 112, 66) +
      /* power lines */
      '<path d="M0 34q100 14 200 4t200 6" stroke="#333" stroke-width="1" fill="none"/><path d="M0 42q100 14 200 4t200 6" stroke="#333" stroke-width="1" fill="none"/>' +
      '<rect x="0" y="110" width="400" height="8" fill="#bdb3a3"/>' +
      bus +
      /* curb + street */
      '<rect x="0" y="210" width="400" height="8" fill="#d8d0c0"/><rect x="0" y="218" width="400" height="42" fill="#4a4c52"/><path d="M0 240h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* stop pole + black stop sign with the two lines */
      '<rect x="350" y="100" width="4" height="112" fill="#7d8288"/>' +
      '<rect x="296" y="78" width="98" height="46" rx="3" fill="#111" stroke="#555"/><text x="345" y="94" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">La Brea / Venice</text>' +
      badge(306, 110, "33", METRO) + badge(340, 110, "212", METRO),
      sky("kis1", "#f7b267", "#fde4bd"));
  }

  /* 2. Tattoo shop on Melrose */
  function kitattoo() {
    const flash = (x, y, inner) => '<g transform="translate(' + x + ' ' + y + ')"><rect width="46" height="56" fill="#f4ecd8" stroke="#8a7a5a"/>' + inner + '</g>';
    return svg(
      '<rect width="400" height="260" fill="#161320"/>' +
      /* storefront */
      '<rect x="20" y="30" width="360" height="190" fill="#2a2333"/><rect x="20" y="30" width="360" height="16" fill="#3a2f46"/>' +
      '<rect x="40" y="96" width="210" height="110" fill="#0f1a24" stroke="#6b5a7a" stroke-width="3"/>' +
      /* neon sign */
      '<g class="ki-flk"><rect x="60" y="54" width="170" height="34" rx="8" fill="none" stroke="' + RED + '" stroke-width="3"/><text x="145" y="80" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="26" fill="' + RED + '" stroke="#ffd1da" stroke-width=".8">TATTOO</text></g>' +
      '<g class="ki-flk ki-flk2"><text x="315" y="74" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" fill="' + INKB + '">OPEN</text><rect x="288" y="58" width="54" height="22" rx="6" fill="none" stroke="' + INKB + '" stroke-width="2"/></g>' +
      /* flash sheets in the window */
      flash(52, 108, '<path d="M23 12l5 11 12 1-9 8 3 12-11-7-11 7 3-12-9-8 12-1z" fill="#e8505b" stroke="#222"/>') +
      flash(104, 108, '<path d="M8 34q10 -24 30 -16q-6 4 -8 10q8 2 10 10q-14 -6 -22 4q-2 -6 -10 -8z" fill="#3fa7d6" stroke="#222"/><circle cx="34" cy="20" r="2" fill="#222"/>') +
      flash(156, 108, '<circle cx="23" cy="24" r="12" fill="#d64550" stroke="#222"/><path d="M17 22q6 -8 12 0q-6 8 -12 0z" fill="#a82a35"/><path d="M23 36v14M23 44q-8 -4 -10 2M23 42q8 -4 10 2" stroke="#2f7a3a" stroke-width="3" fill="none"/>') +
      flash(52, 166, bat(9, 14, 1, "#222") + '<text x="23" y="48" text-anchor="middle" ' + font + ' font-size="8" fill="#222">BAT</text>') +
      flash(104, 166, '<path d="M10 40l26 -26M12 14l22 26" stroke="#222" stroke-width="3"/><circle cx="23" cy="27" r="7" fill="#f2c14e" stroke="#222"/>') +
      flash(156, 166, '<path d="M23 8q-14 10 -6 26q6 10 6 14q0 -4 6 -14q8 -16 -6 -26z" fill="#6bbf59" stroke="#222"/>') +
      /* door */
      '<rect x="270" y="96" width="80" height="124" fill="#4a3a5a" stroke="#6b5a7a" stroke-width="3"/><rect x="282" y="108" width="56" height="60" fill="#0f1a24"/><circle cx="338" cy="168" r="3" fill="#d9c27a"/>' +
      /* tattoo machine buzzing on the sill */
      '<g class="ki-buzz"><g transform="translate(206 176)"><rect x="0" y="0" width="22" height="10" rx="3" fill="#9aa3ad" stroke="#333"/><circle cx="6" cy="-4" r="5" fill="#c08a3e" stroke="#333"/><circle cx="16" cy="-4" r="5" fill="#c08a3e" stroke="#333"/><rect x="22" y="3" width="16" height="4" fill="#ccc"/><path d="M38 5h6" stroke="#222" stroke-width="1.5"/></g></g>' +
      '<path d="M252 186q4 -3 8 0q4 3 8 0" stroke="' + INKB + '" stroke-width="1.2" fill="none" class="ki-flk"/>' +
      /* sidewalk + Melrose sign */
      '<rect x="0" y="220" width="400" height="40" fill="#3b3b42"/><rect x="0" y="220" width="400" height="6" fill="#55555e"/>' +
      '<rect x="368" y="150" width="4" height="70" fill="#7d8288"/>' + sign(316, 128, 84, "Melrose Av", 12),
      "");
  }

  /* 3. Space Shuttle Endeavour standing up, California Science Center, Exposition Park */
  function kishuttle() {
    const cloud = (x, y, s, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><ellipse cx="0" cy="0" rx="26" ry="10" fill="#fff" opacity=".9"/><ellipse cx="16" cy="-6" rx="16" ry="10" fill="#fff" opacity=".9"/><ellipse cx="-14" cy="-4" rx="14" ry="8" fill="#fff" opacity=".9"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kis3)"/>' +
      cloud(0, 40, 1, "ki-cl") + cloud(0, 70, .8, "ki-cl ki-cl2") +
      /* the tall pavilion frame behind */
      '<rect x="150" y="20" width="120" height="180" fill="#cfd8e0" opacity=".55"/>' + [0, 1, 2, 3, 4, 5].map(i => '<path d="M150 ' + (30 + i * 30) + 'h120" stroke="#aab6c2" stroke-width="1"/>').join("") +
      /* orange external tank */
      '<path d="M196 54q14 -26 28 0v134h-28z" fill="#d4772c" stroke="#8a4512" stroke-width="2"/><path d="M200 70h20M200 110h20M200 150h20" stroke="#b25e1e" stroke-width="1.5"/>' +
      /* two white boosters */
      '<path d="M176 76q6 -14 12 0v118h-12z" fill="#f2f2ee" stroke="#777" stroke-width="1.5"/><path d="M232 76q6 -14 12 0v118h-12z" fill="#f2f2ee" stroke="#777" stroke-width="1.5"/>' +
      '<path d="M174 194h16l-2 8h-12zM230 194h16l-2 8h-12z" fill="#555"/>' +
      /* orbiter in front, nose up */
      '<path d="M210 64q-12 10 -12 34v84l-28 18h80l-28 -18v-84q0 -24 -12 -34z" fill="#f7f7f4" stroke="#555" stroke-width="2"/>' +
      '<path d="M210 64q-8 6 -10 14h20q-2 -8 -10 -14z" fill="#222"/><path d="M203 86l7 -4l7 4v6h-14z" fill="#2c3e50"/>' +
      '<path d="M170 200l28 -18v18zM250 200l-28 -18v18z" fill="#222"/><rect x="204" y="200" width="12" height="8" fill="#666"/>' +
      '<rect x="198" y="120" width="24" height="3" fill="#c22"/><rect x="198" y="124" width="24" height="3" fill="#fff"/><rect x="198" y="128" width="24" height="3" fill="#1f4fa3"/>' +
      /* lawn + rose garden in front */
      '<rect x="0" y="206" width="400" height="54" fill="#5f9e4c"/><rect x="0" y="206" width="400" height="5" fill="#4b8a3c"/>' +
      Array.from({ length: 14 }, (_, i) => '<g class="ki-sway' + (i % 2 ? " ki-sway2" : "") + '"><path d="M' + (14 + i * 28) + ' 250v-22" stroke="#2f6b2a" stroke-width="2"/><circle cx="' + (14 + i * 28) + '" cy="226" r="6" fill="' + ["#e8505b", "#ff8fb1", "#f2c14e", "#ffffff"][i % 4] + '"/></g>').join("") +
      '<path d="M160 260l20 -50h60l20 50z" fill="#d9d2c0"/>' +
      '<rect x="20" y="180" width="110" height="18" rx="2" fill="#1d3d5c"/><text x="75" y="192.5" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">EXPOSITION PARK</text>',
      sky("kis3", "#7cc4ef", "#e6f4fb"));
  }

  /* 4. The ring (WrestleMania 31 theme) */
  function kiring() {
    const crowd = Array.from({ length: 22 }, (_, i) => '<g class="ki-bob' + (i % 3 === 1 ? " ki-bob2" : i % 3 === 2 ? " ki-bob3" : "") + '"><circle cx="' + (10 + i * 18) + '" cy="' + (156 + (i % 2) * 6) + '" r="7" fill="#1c1a26"/><rect x="' + (3 + i * 18) + '" y="' + (162 + (i % 2) * 6) + '" width="14" height="20" rx="5" fill="#1c1a26"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="#0d0b16"/>' +
      /* spotlights from the rig */
      '<rect x="0" y="0" width="400" height="10" fill="#2a2a34"/>' +
      '<g class="ki-beam"><path d="M110 8l-50 170h100z" fill="' + INKB + '" opacity=".16"/></g><g class="ki-beam ki-beam2"><path d="M290 8l-50 170h100z" fill="' + RED + '" opacity=".16"/></g>' +
      '<circle cx="110" cy="10" r="6" fill="#fff6c2"/><circle cx="290" cy="10" r="6" fill="#fff6c2"/>' +
      /* screen */
      '<rect x="120" y="22" width="160" height="56" rx="3" fill="#111" stroke="#444" stroke-width="2"/><text x="200" y="46" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" fill="' + INKB + '" class="ki-flk">MONEY AND</text><text x="200" y="68" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" fill="' + RED + '" class="ki-flk ki-flk2">THE POWER</text>' +
      /* pyro */
      '<g class="ki-pyro"><circle cx="40" cy="130" r="4" fill="#ffd34d"/><circle cx="46" cy="138" r="3" fill="#ff8a3d"/></g><g class="ki-pyro ki-p2"><circle cx="360" cy="130" r="4" fill="#ffd34d"/><circle cx="354" cy="138" r="3" fill="#ff8a3d"/></g><g class="ki-pyro ki-p3"><circle cx="200" cy="112" r="3" fill="#fff"/></g>' +
      crowd +
      /* the ring */
      '<path d="M70 196h260l30 30H40z" fill="#e9e6df"/><path d="M40 226h320v20H40z" fill="#1f1f2a"/><text x="200" y="240.5" text-anchor="middle" ' + font + ' font-size="10" fill="#c9a7ff">OFF TOP OF THE ROPES</text>' +
      '<rect x="66" y="150" width="6" height="58" fill="#c0c0c0"/><rect x="328" y="150" width="6" height="58" fill="#c0c0c0"/><rect x="34" y="176" width="7" height="56" fill="#c0c0c0"/><rect x="359" y="176" width="7" height="56" fill="#c0c0c0"/>' +
      '<g class="ki-rope"><path d="M72 160h256M72 172h256M72 184h256" stroke-width="3" fill="none" stroke="' + RED + '"/><path d="M41 186l31 -26M41 198l31 -26M41 210l31 -26M359 186l-31 -26M359 198l-31 -26M359 210l-31 -26" stroke="#f7f3ea" stroke-width="3"/></g>' +
      '<rect x="64" y="156" width="10" height="8" fill="' + INKB + '"/><rect x="326" y="156" width="10" height="8" fill="' + INKB + '"/>',
      "");
  }

  /* 5. W Washington Blvd & S La Brea Ave, downtown skyline behind */
  function kicorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#kis5)"/>' +
      '<g class="ki-bat">' + bat(0, 30, 1.1, "#1b1626") + '</g>' +
      /* downtown skyline far east */
      '<g fill="#6f6a8a" opacity=".85"><rect x="90" y="70" width="18" height="60"/><rect x="112" y="56" width="22" height="74"/><path d="M140 130v-82l12 -8l12 8v82z"/><rect x="152" y="18" width="2" height="22"/>' +
      '<rect x="170" y="62" width="20" height="68"/><path d="M196 130v-90q12 -10 24 0v90z"/><rect x="226" y="60" width="18" height="70"/><rect x="250" y="76" width="22" height="54"/><rect x="278" y="84" width="16" height="46"/></g>' +
      '<g fill="#fff3c4">' + [[116, 66], [124, 80], [176, 72], [204, 56], [212, 76], [230, 70], [256, 88]].map(p => '<rect class="ki-tw" x="' + p[0] + '" y="' + p[1] + '" width="3" height="3"/>').join("") + '</g>' +
      palm(30, 142, 92) + palm(360, 142, 104, "#3a6b40", "ki-sway2") +
      '<rect x="0" y="128" width="400" height="16" fill="#b9ab95"/>' +
      /* wall + tags */
      '<rect x="40" y="140" width="300" height="76" fill="#efe2c8"/><rect x="40" y="140" width="300" height="6" fill="#cdbd9e"/>' +
      tag("KID INK", 62, 190, 36, INKB, -5) + tag("BATGANG", 210, 206, 20, RED, -4) + tag("RSS", 268, 168, 18, LAV, -8) + bat(222, 160, 1.3, "#1b1626") +
      /* sidewalk + street */
      '<rect x="0" y="216" width="400" height="12" fill="#c9c1ae"/><rect x="0" y="228" width="400" height="32" fill="#4a4c52"/><path d="M0 244h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      car(214, "#2b2b33", "ki-car") + car(214, "#d8d2c4", "ki-car ki-car2") +
      /* sign pole */
      '<rect x="370" y="34" width="5" height="182" fill="#7d8288"/>' + sign(238, 36, 150, "W Washington Bl", 13) + sign(250, 62, 138, "S La Brea Av", 13),
      sky("kis5", "#3a2f5c", "#f2a65a"));
  }

  window.SCENES = { kistation, kitattoo, kishuttle, kiring, kicorner };
})();
