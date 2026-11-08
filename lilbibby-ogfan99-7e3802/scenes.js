/* lilbibby scenes (Regions tab: Chicago; South Shore, the East Side off 79th St). CSS classes prefixed lbb- (the page's own anim-train is kept).
   1 The CTA #79 bus pulling up to the stop at 79th St & Yates Blvd in South Shore ("around 79th Street", east of State).
   2 South Shore Cultural Center: the white stucco 1916 clubhouse with red-tile roofs and arched loggia, the lake behind, gulls drifting.
   3 A South Shore park basketball court: the jump shot his friend named him "Bibby" for, the ball arcing into the hoop.
   4 Grade A Productions, the label he co-founded: a studio booth with the board's level meters jumping.
   5 E 79th St and S Essex Ave ("pull up on Essex"): green signs, BIBBY tagged, the downtown skyline far up the lake behind.
   No logos, no faces; any 9 is drawn with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lbbbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-18px)}}.lbb-bird{animation:lbbbird 13s linear infinite}.lbb-bird2{animation-delay:-6.5s}' +
    '@keyframes lbbwave{0%,100%{transform:translateX(0)}50%{transform:translateX(14px)}}.lbb-wave{animation:lbbwave 3s ease-in-out infinite}.lbb-wave2{animation-delay:-1.5s}' +
    '@keyframes lbbball{0%{transform:translate(0,0)}50%{transform:translate(95px,-92px)}100%{transform:translate(190px,-46px)}}.lbb-ball{animation:lbbball 2.4s cubic-bezier(.3,.1,.6,1) infinite}' +
    '@keyframes lbbnet{0%,85%,100%{transform:scaleY(1)}92%{transform:scaleY(1.25)}}.lbb-net{animation:lbbnet 2.4s linear infinite;transform-origin:50% 0;transform-box:fill-box}' +
    '@keyframes lbbmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.lbb-m{animation:lbbmeter .9s ease-in-out infinite;transform-origin:50% 100%;transform-box:fill-box}' +
    '@keyframes lbbblink{0%,100%{opacity:.25}50%{opacity:1}}.lbb-bl{animation:lbbblink 1.4s ease-in-out infinite}.lbb-bl2{animation-delay:-.7s}' +
    '@keyframes lbbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lbb-sp{animation:lbbspray 1.4s ease-out infinite}.lbb-sp2{animation-delay:.45s}' +
    '@keyframes lbbflag{0%,100%{transform:skewY(0)}50%{transform:skewY(7deg)}}.lbb-flag{animation:lbbflag 1.6s ease-in-out infinite;transform-origin:0 50%;transform-box:fill-box}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* a 9 drawn by hand: round head + straight stem. x = left edge, y = baseline, sz = cap height */
  const nine = (x, y, sz, c) => { const r = sz * 0.25, w = sz * 0.17; return '<circle cx="' + (x + r + w / 2) + '" cy="' + (y - sz * 0.72 + r) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + w + '"/><path d="M' + (x + 2 * r + w / 2) + ' ' + (y - sz * 0.72 + r) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w + '"/>'; };
  const tree = (x, base, s, c) => '<g><rect x="' + (x - 3 * s) + '" y="' + (base - 34 * s) + '" width="' + (6 * s) + '" height="' + (34 * s) + '" fill="#5b4330"/>' +
    [[-16, -44, 18], [10, -50, 20], [0, -62, 18], [18, -36, 14], [-20, -32, 13]].map(k => '<ellipse cx="' + (x + k[0] * s) + '" cy="' + (base + k[1] * s) + '" rx="' + (k[2] * s) + '" ry="' + (k[2] * 0.8 * s) + '" fill="' + (c || "#3f7a3a") + '"/>').join("") + '</g>';
  const gulls = '<g class="lbb-bird"><path d="M20 30q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="lbb-bird lbb-bird2"><path d="M60 50q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>';
  const CTA = "#1f4e79", BLUE = "#3fb6ff", GOLD = "#f5c242";

  /* 1. CTA #79 bus at 79th & Yates */
  function lbbstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 42) + '" y="112" width="34" height="30" rx="3" fill="#1c2630"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="96" width="320" height="86" rx="10" fill="#f1f3f5" stroke="#8a939b" stroke-width="2"/>' + win +
      '<rect x="40" y="150" width="320" height="7" fill="' + CTA + '"/><rect x="40" y="158" width="320" height="3" fill="#c8102e"/>' +
      '<path d="M340 102h14q6 0 6 8v34h-20z" fill="#1c2630"/><rect x="44" y="102" width="20" height="40" rx="3" fill="#1c2630"/>' +
      '<rect x="270" y="100" width="66" height="10" rx="2" fill="#111"/><text x="303" y="108" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">79 79TH STREET</text>' +
      '<circle cx="352" cy="172" r="3.5" fill="#fff6c2"/>' +
      '<circle cx="96" cy="184" r="13" fill="#111"/><circle cx="96" cy="184" r="5" fill="#9aa1a8"/><circle cx="306" cy="184" r="13" fill="#111"/><circle cx="306" cy="184" r="5" fill="#9aa1a8"/></g>';
    const stopSign = '<rect x="372" y="70" width="4" height="126" fill="#6b737b"/><rect x="356" y="64" width="36" height="46" rx="3" fill="#fff" stroke="#6b737b" stroke-width="1.5"/>' +
      '<rect x="356" y="64" width="36" height="12" rx="2" fill="' + CTA + '"/><text x="374" y="73" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">BUS</text>' +
      '<rect x="361" y="80" width="26" height="18" rx="3" fill="' + CTA + '"/><text x="374" y="94" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">79</text>';
    const shops = [["#7d4a3a", 0], ["#a2724e", 70], ["#5f6a72", 140], ["#94573f", 210], ["#6d5a48", 280]].map(s => '<rect x="' + s[1] + '" y="40" width="68" height="60" fill="' + s[0] + '"/><rect x="' + (s[1] + 8) + '" y="50" width="18" height="16" fill="#cfe3f0" opacity=".7"/><rect x="' + (s[1] + 38) + '" y="50" width="18" height="16" fill="#cfe3f0" opacity=".7"/><rect x="' + s[1] + '" y="40" width="68" height="5" fill="#3a2a22"/><rect x="' + (s[1] + 6) + '" y="78" width="56" height="16" fill="#2a2420"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lbbs1)"/>' + gulls + shops + tree(352, 100, 0.85) +
      '<rect x="0" y="100" width="400" height="96" fill="#5d5a55"/><path d="M0 150h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      bus + stopSign +
      '<rect x="0" y="194" width="400" height="8" fill="#cfc8b8"/><rect x="0" y="202" width="400" height="58" fill="#a8a296"/>' +
      '<rect x="30" y="208" width="340" height="40" rx="3" fill="#111"/>' +
      '<text x="44" y="226" ' + font + ' font-size="14" fill="#fff">79th St &amp; Yates</text><text x="44" y="242" ' + font + ' font-size="9" fill="#cfd6dc">CTA BUS · SOUTH SHORE · THE EAST SIDE</text>' +
      '<rect x="306" y="215" width="50" height="26" rx="4" fill="' + CTA + '"/><text x="331" y="233" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">79</text>',
      sky("lbbs1", "#7fb6e3", "#f4e2c2"));
  }

  /* 2. South Shore Cultural Center */
  function lbbcultural() {
    const arches = Array.from({ length: 7 }, (_, i) => '<path d="M' + (112 + i * 26) + ' 176v-26q10 -14 20 0v26z" fill="#3b4a55"/>').join("");
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (118 + i * 30) + '" y="112" width="14" height="20" rx="7" fill="#3b4a55"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lbbs2)"/>' + gulls +
      '<rect x="0" y="120" width="400" height="40" fill="#3f86b8"/>' +
      '<path class="lbb-wave" d="M0 132q20 -5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe3f7" stroke-width="2" fill="none"/>' +
      '<path class="lbb-wave lbb-wave2" d="M-20 146q20 -5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#9fd0ee" stroke-width="2" fill="none"/>' +
      /* wings */
      '<rect x="40" y="118" width="66" height="58" fill="#f4efe4"/><path d="M34 120l39 -22l39 22z" fill="#b4472e"/>' +
      '<rect x="294" y="118" width="66" height="58" fill="#f4efe4"/><path d="M288 120l39 -22l39 22z" fill="#b4472e"/>' +
      '<rect x="56" y="134" width="12" height="18" rx="6" fill="#3b4a55"/><rect x="80" y="134" width="12" height="18" rx="6" fill="#3b4a55"/>' +
      '<rect x="310" y="134" width="12" height="18" rx="6" fill="#3b4a55"/><rect x="334" y="134" width="12" height="18" rx="6" fill="#3b4a55"/>' +
      /* main hall */
      '<rect x="104" y="100" width="192" height="76" fill="#fbf7ee"/><path d="M96 102l104 -36l104 36z" fill="#c4512f"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (110 + i * 22) + ' 99l10 -3" stroke="#9a3a22" stroke-width="1"/>').join("") +
      wins + '<rect x="104" y="140" width="192" height="4" fill="#e2d8c4"/>' + arches +
      /* bell tower */
      '<rect x="184" y="44" width="32" height="56" fill="#fbf7ee"/><path d="M180 46l20 -20l20 20z" fill="#c4512f"/><rect x="192" y="56" width="16" height="20" rx="8" fill="#3b4a55"/>' +
      '<path d="M200 26v-12" stroke="#555" stroke-width="1.5"/><path class="lbb-flag" d="M200 14h14l-3 4l3 4h-14z" fill="' + BLUE + '"/>' +
      '<rect x="0" y="176" width="400" height="84" fill="#5f9e4a"/><path d="M0 176h400" stroke="#4b8a3a" stroke-width="3"/>' +
      '<path d="M200 176l-30 84h60z" fill="#d9cfb8"/>' + tree(26, 196, 0.9, "#3d7a36") + tree(376, 198, 0.95, "#3d7a36") +
      '<rect x="80" y="222" width="240" height="24" rx="3" fill="#111" opacity=".82"/><text x="200" y="238" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">SOUTH SHORE CULTURAL CENTER · 71ST ST</text>',
      sky("lbbs2", "#8cc8ee", "#fdf1d8"));
  }

  /* 3. The court: where the jump shot got him the name */
  function lbbcourt() {
    const fence = Array.from({ length: 21 }, (_, i) => '<path d="M' + (i * 20) + ' 60l20 60M' + (i * 20 + 20) + ' 60l-20 60" stroke="#8d969c" stroke-width=".8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lbbs3)"/>' + gulls +
      tree(40, 112, 1, "#3f7a3a") + tree(130, 108, 0.8, "#467f3c") + tree(300, 110, 0.9, "#3f7a3a") +
      '<rect x="0" y="58" width="400" height="3" fill="#6f777d"/>' + fence + '<rect x="0" y="118" width="400" height="3" fill="#6f777d"/>' +
      '<path d="M0 120h400v140h-400z" fill="#2f6d8e"/><path d="M30 250l60 -110h220l60 110z" fill="#3b85ab"/>' +
      '<path d="M90 140h220M30 250l60 -110M370 250l-60 -110" stroke="#f4f4f4" stroke-width="2.5" fill="none"/>' +
      '<path d="M150 140v46h100v-46" stroke="#f4f4f4" stroke-width="2.5" fill="none"/><ellipse cx="200" cy="186" rx="50" ry="12" stroke="#f4f4f4" stroke-width="2.5" fill="none"/>' +
      '<path d="M70 250q130 -110 260 0" stroke="#f4f4f4" stroke-width="2.5" fill="none"/>' +
      /* hoop */
      '<rect x="296" y="66" width="6" height="104" fill="#5a6168"/><rect x="262" y="58" width="58" height="40" fill="#f7f7f7" stroke="#333" stroke-width="2"/><rect x="280" y="72" width="22" height="16" fill="none" stroke="#d33" stroke-width="2"/>' +
      '<ellipse cx="291" cy="96" rx="13" ry="3.5" fill="none" stroke="#e0562b" stroke-width="3"/>' +
      '<path class="lbb-net" d="M278 96l4 16h18l4 -16M284 96l2 16M291 96v16M298 96l-2 16" stroke="#f4f4f4" stroke-width="1.3" fill="none"/>' +
      '<g class="lbb-ball"><circle cx="100" cy="142" r="9" fill="#e0782b" stroke="#6b2f10" stroke-width="1.5"/><path d="M91 142h18M100 133v18" stroke="#6b2f10" stroke-width="1.2"/></g>' +
      '<rect x="36" y="218" width="328" height="26" rx="3" fill="#111" opacity=".85"/><text x="200" y="235" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">THE COURTS · SOUTH SHORE · THE JUMPER THAT NAMED HIM</text>',
      sky("lbbs3", "#f0a96a", "#fbe3c0"));
  }

  /* 4. Grade A Productions: in the booth */
  function lbbstudio() {
    const meters = Array.from({ length: 14 }, (_, i) => '<rect class="lbb-m" style="animation-delay:-' + ((i * 0.13) % 0.9).toFixed(2) + 's" x="' + (96 + i * 15) + '" y="150" width="9" height="34" fill="' + (i % 4 === 3 ? GOLD : BLUE) + '"/>').join("");
    const faders = Array.from({ length: 14 }, (_, i) => '<rect x="' + (99 + i * 15) + '" y="196" width="3" height="26" fill="#2a2f36"/><rect x="' + (95 + i * 15) + '" y="' + (200 + (i * 7) % 16) + '" width="11" height="6" rx="1" fill="#d9dde2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#10161d"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 0v130" stroke="#1b2530" stroke-width="16"/>').join("") +
      /* booth glass */
      '<rect x="110" y="20" width="180" height="104" rx="4" fill="#1d3346" stroke="#55606a" stroke-width="4"/>' +
      '<path d="M200 44v34" stroke="#9aa3ab" stroke-width="3"/><rect x="188" y="34" width="24" height="16" rx="8" fill="#2c2f33" stroke="#9aa3ab" stroke-width="2"/>' +
      '<path d="M200 78q-20 0 -20 18" stroke="#9aa3ab" stroke-width="2" fill="none"/>' +
      '<circle class="lbb-bl" cx="276" cy="32" r="5" fill="#e23b3b"/><text x="262" y="35" text-anchor="end" ' + font + ' font-size="8" fill="#e23b3b">ON AIR</text>' +
      /* desk */
      '<path d="M50 140h300l30 100h-360z" fill="#2b2f35"/><rect x="86" y="144" width="228" height="44" rx="3" fill="#0b0f14"/>' + meters + faders +
      '<rect x="56" y="150" width="26" height="40" rx="3" fill="#1b1e22"/><circle cx="69" cy="162" r="8" fill="#333"/><circle cx="69" cy="162" r="3" fill="#888"/>' +
      '<rect x="318" y="150" width="26" height="40" rx="3" fill="#1b1e22"/><circle cx="331" cy="162" r="8" fill="#333"/><circle cx="331" cy="162" r="3" fill="#888"/>' +
      '<rect x="120" y="232" width="160" height="22" rx="3" fill="' + GOLD + '"/><text x="200" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#111">GRADE A · THE LABEL HE BUILT</text>');
  }

  /* 5. E 79th St & S Essex Ave */
  function lbbcorner() {
    const sky5 = sky("lbbs5", "#1b2a4a", "#e9875a");
    const skyline = '<g fill="#2a2f45">' + [[60, 70, 18], [82, 52, 14], [100, 80, 22], [126, 40, 12], [142, 64, 16], [162, 90, 20]].map(b => '<rect x="' + b[0] + '" y="' + (112 - b[1]) + '" width="' + b[2] + '" height="' + b[1] + '"/>').join("") +
      '<rect x="104" y="18" width="4" height="14"/><rect x="114" y="18" width="4" height="14"/></g>';
    const wall = '<rect x="0" y="118" width="250" height="110" fill="#9a5b45"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M0 ' + (124 + i * 8) + 'h250" stroke="#84493a" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lbbs5)"/>' +
      '<circle class="lbb-bl" cx="40" cy="20" r="1.3" fill="#fff"/><circle class="lbb-bl lbb-bl2" cx="300" cy="14" r="1.2" fill="#fff"/><circle class="lbb-bl" cx="220" cy="30" r="1" fill="#fff"/>' +
      '<rect x="0" y="104" width="400" height="14" fill="#4a6b8c" opacity=".7"/>' + skyline +
      wall + tag("BIBBY", 22, 184, 46, BLUE, -7) + tag("GRADE A", 150, 214, 22, GOLD, -4) +
      '<g class="lbb-sp"><circle cx="208" cy="156" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="lbb-sp lbb-sp2"><circle cx="214" cy="150" r="2.2" fill="' + BLUE + '" opacity=".6"/></g>' +
      '<rect x="250" y="150" width="150" height="78" fill="#4b4f55"/>' +
      /* sign pole */
      '<rect x="318" y="66" width="6" height="162" fill="#5b6067"/>' +
      '<rect x="262" y="70" width="118" height="24" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="321" y="87" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">E 79th St</text>' +
      '<rect x="270" y="98" width="102" height="24" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="321" y="115" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">S Essex Ave</text>' +
      '<text x="321" y="134" text-anchor="middle" ' + font + ' font-size="8" fill="#f2f2f2">2500 E</text>' +
      '<rect x="0" y="228" width="400" height="32" fill="#3d3f43"/><path d="M0 244h400" stroke="#d6c25a" stroke-width="2" stroke-dasharray="16 12"/>',
      sky5);
  }

  window.SCENES = { lbbstation, lbbcultural, lbbcourt, lbbstudio, lbbcorner };
})();
