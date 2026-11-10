/* Futuristic scenes (Regions tab: Los Angeles + SoCal, no Arizona region yet). Born in Bloomington, Illinois; moved to Tempe, Arizona and went to
   McClintock High School (Charger red and blue); still lives in Tempe. On "ikigai": "I'm AZ's king and I ain't even from here."
   On "The Greatest": "Coming from the basement." CSS classes prefixed fu- (the page's own anim-train is kept).
   0 McClintock/Apache Blvd (Valley Metro A Line, Tempe): street-median island platform, shade canopies, a light-rail car sliding in, black sign with the blue A bullet.
   1 McClintock High School: red + blue walls, CHARGERS banner, a lightning bolt, the flag waving, heat shimmer.
   2 The basement studio: foam panels, mic with pop filter, speakers pumping, a stream screen with a waveform and a blinking LIVE light.
   3 Papago Park: the red sandstone Hole-in-the-Rock butte, sun glowing through the hole, saguaros, a hawk circling.
   4 S McClintock Dr and E Del Rio Dr in Tempe: green signs, FUTURISTIC tagged on a block wall, palms, the Superstition Mountains behind at sunset. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fuflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.fu-flag{transform-box:fill-box;transform-origin:0% 50%;animation:fuflag 1.6s ease-in-out infinite}' +
    '@keyframes fuheat{0%,100%{transform:translateY(0);opacity:.2}50%{transform:translateY(-3px);opacity:.5}}.fu-heat{animation:fuheat 2.2s ease-in-out infinite}.fu-h2{animation-delay:-1.1s}' +
    '@keyframes fupump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.fu-pump{transform-box:fill-box;transform-origin:50% 50%;animation:fupump .5s ease-in-out infinite}' +
    '@keyframes fublink{0%,55%{opacity:1}56%,100%{opacity:.15}}.fu-blink{animation:fublink 1.2s steps(1) infinite}' +
    '@keyframes fuwave{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1)}}.fu-wv{transform-box:fill-box;transform-origin:50% 50%;animation:fuwave .7s ease-in-out infinite}.fu-w2{animation-delay:-.2s}.fu-w3{animation-delay:-.4s}.fu-w4{animation-delay:-.55s}' +
    '@keyframes fuhawk{0%{transform:translate(0,0)}25%{transform:translate(40px,-8px)}50%{transform:translate(80px,0)}75%{transform:translate(40px,8px)}100%{transform:translate(0,0)}}.fu-hawk{animation:fuhawk 9s ease-in-out infinite}' +
    '@keyframes fuglow{0%,100%{opacity:.55}50%{opacity:1}}.fu-glow{animation:fuglow 2.6s ease-in-out infinite}' +
    '@keyframes fuspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.fu-sp{animation:fuspray 1.4s ease-out infinite}.fu-sp2{animation-delay:.45s}' +
    '@keyframes fubolt{0%,70%,100%{opacity:1}75%{opacity:.2}80%{opacity:1}85%{opacity:.3}}.fu-bolt{animation:fubolt 2.4s infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const ABLUE = "#1f6fc5", CRED = "#c8102e", CBLUE = "#1d3f8f", GOLD = "#f2c14e", CYAN = "#39d0ff", SAND = "#d9b88a";
  const saguaro = (x, y, h, c) => '<g fill="' + (c || "#3f6b3a") + '"><rect x="' + (x - 5) + '" y="' + (y - h) + '" width="10" height="' + h + '" rx="5"/>' +
    '<path d="M' + (x - 5) + ' ' + (y - h * .45) + 'h-9a4 4 0 0 1 -4 -4v-' + (h * .25) + 'a4 4 0 0 1 8 0v' + (h * .17) + 'h5z"/>' +
    '<path d="M' + (x + 5) + ' ' + (y - h * .6) + 'h8a4 4 0 0 0 4 -4v-' + (h * .2) + 'a4 4 0 0 0 -8 0v' + (h * .13) + 'h-4z"/></g>';
  const palm = (x, y, h) => '<path d="M' + x + ' ' + y + 'q-3 -' + (h / 2) + ' 2 -' + h + '" stroke="#5a4632" stroke-width="5" fill="none"/>' +
    '<g fill="#2f6b3a">' + [-60, -25, 10, 45, 80, 120].map(a => '<path d="M' + (x + 2) + ' ' + (y - h) + 'q' + (Math.cos(a * Math.PI / 180) * 14) + ' ' + (-8 + Math.sin(a * Math.PI / 180) * 4) + ' ' + (Math.cos(a * Math.PI / 180) * 26) + ' ' + (6 + Math.sin(a * Math.PI / 180) * 10) + 'q' + (-Math.cos(a * Math.PI / 180) * 12) + ' -4 ' + (-Math.cos(a * Math.PI / 180) * 26) + ' ' + (-6 - Math.sin(a * Math.PI / 180) * 10) + 'z"/>').join("") + '</g>';
  const hawk = '<g class="fu-hawk"><path d="M60 52q8 -8 14 0q6 -8 14 0" stroke="#2a1f1a" stroke-width="2.4" fill="none"/></g>';

  /* 0. McClintock/Apache Blvd, Valley Metro A Line */
  function fustation() {
    const train = '<g class="anim-train"><rect x="20" y="128" width="280" height="68" rx="14" fill="#eceff2" stroke="#7a828c" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (38 + i * 42) + '" y="140" width="32" height="24" rx="3" fill="#24303d"/>').join("") +
      '<path d="M20 175h280" stroke="' + ABLUE + '" stroke-width="7"/><path d="M20 184h280" stroke="#9aa3ad" stroke-width="3"/>' +
      '<rect x="284" y="138" width="12" height="26" rx="3" fill="#24303d"/><circle cx="292" cy="188" r="3.5" fill="#fff6c2"/>' +
      '<path d="M130 128l14 -16h40l14 16" stroke="#555" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fu0)"/>' +
      '<circle cx="64" cy="54" r="18" fill="#fff1c9" opacity=".9"/>' +
      '<path d="M0 124l60 -18l50 10l70 -22l80 20l60 -12l80 16v10h-400z" fill="#b88a62" opacity=".55"/>' +
      '<rect x="0" y="120" width="400" height="10" fill="#cdbb9c"/>' +
      palm(30, 128, 70) + palm(370, 128, 82) +
      /* canopies over the island platform */
      '<path d="M300 90q48 -16 96 0z" fill="' + ABLUE + '"/><path d="M300 90q48 -16 96 0" stroke="#d9e4ef" stroke-width="2" fill="none"/>' +
      '<rect x="310" y="90" width="4" height="108" fill="#666"/><rect x="382" y="90" width="4" height="108" fill="#666"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#8a8276"/><rect x="0" y="196" width="400" height="6" fill="#e8d84a"/>' +
      '<path d="M0 222h400M0 240h400" stroke="#5a544a" stroke-width="3"/>' +
      '<g class="fu-heat"><path d="M10 214q20 -4 40 0t40 0" stroke="#fff" stroke-width="1.4" fill="none" opacity=".4"/></g><g class="fu-heat fu-h2"><path d="M300 230q20 -4 40 0t40 0" stroke="#fff" stroke-width="1.4" fill="none" opacity=".4"/></g>' +
      train +
      '<rect x="96" y="14" width="290" height="40" rx="3" fill="#111"/>' +
      '<circle cx="120" cy="34" r="13" fill="' + ABLUE + '"/><text x="120" y="39.5" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">A</text>' +
      '<text x="142" y="31" ' + font + ' font-size="14" fill="#fff">McClintock/Apache Blvd</text><text x="142" y="46" font-family="Helvetica, Arial, sans-serif" font-size="9" fill="#cfd6de">Valley Metro Rail · Tempe, AZ</text>',
      sky("fu0", "#4f98d6", "#f7cf9e"));
  }

  /* 1. McClintock High School */
  function fuschool() {
    return svg(
      '<rect width="400" height="260" fill="url(#fu1)"/>' +
      '<path d="M0 104l50 -16l40 8l60 -20l50 14l60 -10l70 16l70 -6v20h-400z" fill="#9b7a5e" opacity=".6"/>' +
      '<rect x="36" y="98" width="328" height="106" fill="#e7dcc8"/><rect x="36" y="98" width="328" height="16" fill="' + CRED + '"/><rect x="36" y="190" width="328" height="14" fill="' + CBLUE + '"/>' +
      '<text x="200" y="110" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">McCLINTOCK HIGH SCHOOL</text>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (54 + i * 52) + '" y="124" width="30" height="22" fill="#3d4f66"/>').join("") +
      '<rect x="168" y="150" width="64" height="54" fill="#33302c"/><rect x="198" y="150" width="4" height="54" fill="' + CRED + '"/>' +
      /* CHARGERS banner with bolt */
      '<rect x="62" y="150" width="62" height="38" fill="' + CBLUE + '" stroke="' + CRED + '" stroke-width="2.5"/>' +
      '<path class="fu-bolt" d="M98 153l-14 18h8l-6 14l16 -20h-8z" fill="' + GOLD + '"/>' +
      '<text x="93" y="186" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">CHARGERS</text>' +
      '<rect x="276" y="150" width="62" height="38" fill="' + CRED + '" stroke="' + CBLUE + '" stroke-width="2.5"/>' +
      '<text x="307" y="166" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">TEMPE</text><text x="307" y="179" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">AZ</text>' +
      /* flagpole */
      '<rect x="20" y="40" width="3" height="164" fill="#bbb"/><g class="fu-flag"><path d="M23 42h44l-10 13l10 13h-44z" fill="' + CRED + '"/><path d="M42 45l-8 10h5l-4 9l10 -12h-5z" fill="#fff"/><path d="M23 66h40" stroke="' + CBLUE + '" stroke-width="3"/></g>' +
      '<rect x="0" y="204" width="400" height="56" fill="#c7a679"/><rect x="0" y="204" width="400" height="5" fill="#8a7a62"/>' +
      saguaro(374, 210, 60) +
      '<g class="fu-heat"><path d="M40 232q20 -4 40 0t40 0" stroke="#fff" stroke-width="1.4" fill="none" opacity=".45"/></g><g class="fu-heat fu-h2"><path d="M230 244q20 -4 40 0t40 0" stroke="#fff" stroke-width="1.4" fill="none" opacity=".45"/></g>',
      sky("fu1", "#3f8fd6", "#f4d6a8"));
  }

  /* 2. The basement studio */
  function fubasement() {
    const foam = Array.from({ length: 5 }, (_, r) => Array.from({ length: 12 }, (_, c) => '<rect x="' + (c * 34) + '" y="' + (r * 30) + '" width="32" height="28" fill="' + ((r + c) % 2 ? "#2a2f3a" : "#242833") + '"/>').join("")).join("");
    const bars = Array.from({ length: 14 }, (_, i) => '<rect class="fu-wv fu-w' + (i % 4 + 1) + '" x="' + (148 + i * 8) + '" y="' + (66 - (i % 5) * 3) + '" width="5" height="' + (14 + (i % 5) * 6) + '" fill="' + CYAN + '"/>').join("");
    const spk = (x) => '<rect x="' + x + '" y="112" width="46" height="70" rx="4" fill="#15171c" stroke="#3a3f4a" stroke-width="2"/>' +
      '<circle class="fu-pump" cx="' + (x + 23) + '" cy="160" r="15" fill="#2b2f38" stroke="#555c6a" stroke-width="2"/><circle cx="' + (x + 23) + '" cy="160" r="5" fill="#111"/><circle cx="' + (x + 23) + '" cy="128" r="6" fill="#2b2f38" stroke="#555c6a" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="#1b1e26"/>' + foam +
      '<rect x="0" y="150" width="400" height="110" fill="#2e2a26"/>' +
      /* stream screen */
      '<rect x="128" y="34" width="144" height="84" rx="4" fill="#0b0f18" stroke="#444" stroke-width="3"/>' + bars +
      '<rect x="136" y="40" width="34" height="12" rx="2" fill="#d62828" class="fu-blink"/><text x="153" y="49" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">LIVE</text>' +
      '<text x="200" y="110" text-anchor="middle" ' + font + ' font-size="7.5" fill="#9fb3c8">REACTING TO YOUR MUSIC</text>' +
      '<rect x="194" y="118" width="12" height="18" fill="#333"/>' +
      /* desk */
      '<rect x="40" y="182" width="320" height="10" fill="#5a4030"/><rect x="56" y="192" width="8" height="60" fill="#3a2a20"/><rect x="336" y="192" width="8" height="60" fill="#3a2a20"/>' +
      spk(64) + spk(290) +
      '<rect x="150" y="166" width="100" height="16" rx="2" fill="#20232a"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (156 + i * 9) + '" y="170" width="5" height="8" fill="' + (i % 3 ? "#777" : GOLD) + '"/>').join("") +
      /* mic + pop filter */
      '<path d="M200 260v-58" stroke="#888" stroke-width="4"/><path d="M200 204l-30 -26" stroke="#888" stroke-width="4"/>' +
      '<rect x="158" y="138" width="22" height="40" rx="11" fill="#9aa0a8" stroke="#555" stroke-width="2"/><path d="M162 150h14M162 158h14M162 166h14" stroke="#555" stroke-width="1.5"/>' +
      '<path d="M182 158h12" stroke="#777" stroke-width="2"/><circle cx="208" cy="156" r="15" fill="#111" opacity=".6" stroke="#777" stroke-width="2.5"/>' +
      '<text x="200" y="24" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">COMING FROM THE BASEMENT</text>',
      "");
  }

  /* 3. Papago Park, Hole-in-the-Rock */
  function fupapago() {
    return svg(
      '<rect width="400" height="260" fill="url(#fu3)"/>' +
      '<circle class="fu-glow" cx="236" cy="120" r="34" fill="#ffd27a" opacity=".5"/>' + hawk +
      '<path d="M0 176l60 -10l50 6l70 -12l90 8l60 -6l70 10v40h-400z" fill="#a8683e" opacity=".7"/>' +
      /* the butte with a hole */
      '<path d="M112 200l8 -40l-6 -14l14 -30l18 -6l10 -20l22 -6l14 8l24 -10l20 12l16 -2l14 22l-4 14l14 18l-2 24l10 30z" fill="#b5532e"/>' +
      '<path d="M128 116l18 -6l10 -20l22 -6l14 8l24 -10l20 12l16 -2l14 22" stroke="#d27448" stroke-width="4" fill="none" stroke-linejoin="round"/>' +
      '<path d="M150 150l10 8M270 150l-8 12M180 128l-6 10" stroke="#8f3d20" stroke-width="3"/>' +
      '<path d="M140 170q30 6 60 -2M210 186q40 4 76 -6" stroke="#8f3d20" stroke-width="3" fill="none"/>' +
      '<ellipse cx="236" cy="124" rx="22" ry="16" fill="#ffd9a0"/><ellipse cx="236" cy="124" rx="22" ry="16" fill="none" stroke="#7e3418" stroke-width="3"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#c9965e"/>' +
      saguaro(60, 214, 72) + saguaro(340, 220, 58) + saguaro(110, 224, 36, "#4a7a44") +
      '<g fill="#6f8a4a"><ellipse cx="300" cy="226" rx="16" ry="6"/><ellipse cx="160" cy="236" rx="12" ry="5"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#4a2a14">PAPAGO PARK · TEMPE / PHOENIX</text>',
      sky("fu3", "#3b4a8c", "#f2a35e"));
  }

  /* 4. S McClintock Dr and E Del Rio Dr */
  function fucorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#fu4)"/>' +
      /* Superstition Mountains */
      '<path d="M0 118l40 -6l30 -26l20 8l30 -30l16 12l24 -22l20 18l30 -10l40 22l40 -6l50 18l60 -4v40h-400z" fill="#7a4a5a"/>' +
      palm(40, 132, 80) + palm(372, 128, 90) +
      '<rect x="0" y="128" width="400" height="98" fill="#cdb79a"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (140 + i * 16) + 'h400" stroke="#b39c80" stroke-width="1.4"/>').join("") +
      Array.from({ length: 6 }, (_, i) => Array.from({ length: 11 }, (_, j) => '<path d="M' + (j * 40 + (i % 2) * 20) + ' ' + (128 + i * 16) + 'v16" stroke="#b39c80" stroke-width="1.4"/>').join("")).join("") +
      tag("FUTURISTIC", 22, 196, 44, CYAN, -6) + tag("NEVER 2 LATE", 150, 216, 18, GOLD, -4) + tag("DROPOUT", 34, 218, 15, "#ff6b6b", -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#5d5a55"/><rect x="0" y="224" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="322" y="86" width="6" height="140" fill="#2f2f2f"/>' + sign(250, 88, 140, "S McClintock Dr") + sign(256, 114, 128, "E Del Rio Dr") +
      '<g class="fu-sp"><circle cx="160" cy="170" r="3" fill="' + CYAN + '" opacity=".7"/></g><g class="fu-sp fu-sp2"><circle cx="166" cy="164" r="2" fill="' + CYAN + '" opacity=".6"/></g>',
      sky("fu4", "#2c2f66", "#f4946a"));
  }

  window.SCENES = { fustation: fustation, fuschool: fuschool, fubasement: fubasement, fupapago: fupapago, fucorner: fucorner };
})();
