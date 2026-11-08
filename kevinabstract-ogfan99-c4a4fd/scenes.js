/* kevinabstract scenes (Regions tab: Houston + Texas; Southside Corpus Christi, TX). CSS classes prefixed kab- (the page's own anim-train is kept).
   1 CCRTA stop 2554, Cimarron @ Saratoga on the Southside: Route 26 Airline/Lipes pulling in, the shelter, palms. A mile from Brockhampton St.
   2 Bob Hall Pier on Padre Island, the Gulf side of Corpus Christi: the long concrete pier on pilings, waves, gulls, a sandcastle ("I wanna build a sandcastle", Yellow).
   3 The Woodlands Waterway, north of Houston: where Kevin, Matt Champion and Merlyn Wood made music as Woodlands High classmates before BROCKHAMPTON. Water taxi, fountain jets, the lamp-lit brick walk.
   4 "I got Georgia on my mind": I-75 into Atlanta, where he moved at 15 to live with his sister ("Atlanta, we was kids", Peach). Peach orchard, the skyline, a car driving in.
   5 Lipes Blvd and Brockhampton St, his childhood street that BROCKHAMPTON is named after: green signs, KEVIN tagged on the fence, the 2019 ARIZONA BABY treadmill livestream on the lawn,
     the twin towers of the bayfront skyline far off behind.
   No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kabblink{0%,100%{opacity:.25}50%{opacity:1}}.kab-bl{animation:kabblink 1.6s ease-in-out infinite}.kab-bl2{animation-delay:-.8s}' +
    '@keyframes kabwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-18px)}}.kab-wave{animation:kabwave 3.4s ease-in-out infinite}.kab-wave2{animation-delay:-1.7s}' +
    '@keyframes kabbird{from{transform:translateX(-60px)}to{transform:translateX(470px)}}.kab-bird{animation:kabbird 13s linear infinite}.kab-bird2{animation-delay:-6.5s}' +
    '@keyframes kabflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.35)}}.kab-flap{transform-box:fill-box;transform-origin:center;animation:kabflap .8s ease-in-out infinite}' +
    '@keyframes kabsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.kab-sway{transform-box:fill-box;transform-origin:50% 100%;animation:kabsway 3s ease-in-out infinite}' +
    '@keyframes kabboat{0%{transform:translateX(-90px)}100%{transform:translateX(420px)}}.kab-boat{animation:kabboat 14s linear infinite}' +
    '@keyframes kabjet{0%,100%{transform:scaleY(.55)}50%{transform:scaleY(1)}}.kab-jet{transform-box:fill-box;transform-origin:50% 100%;animation:kabjet 1.3s ease-in-out infinite}.kab-jet2{animation-delay:-.65s}' +
    '@keyframes kabcar{0%{transform:translate(0,0) scale(.35)}100%{transform:translate(-40px,70px) scale(1.15)}}.kab-car{transform-box:fill-box;transform-origin:center;animation:kabcar 5s ease-in infinite}' +
    '@keyframes kabbelt{from{stroke-dashoffset:0}to{stroke-dashoffset:-16}}.kab-belt{animation:kabbelt .5s linear infinite}' +
    '@keyframes kabspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kab-spr{animation:kabspray 1.4s ease-out infinite}.kab-spr2{animation-delay:.45s}' +
    '@keyframes kabfall{0%{transform:translateY(0)}100%{transform:translateY(24px);opacity:0}}.kab-fall{animation:kabfall 2.4s ease-in infinite}.kab-fall2{animation-delay:-1.2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const PEACH = "#f4a259", BLUE = "#7ec8e3", YEL = "#f6d55c", R26 = "#7b3f98";
  const palm = (x, base, h, c) => '<g><path d="M' + x + ' ' + base + 'q-4 ' + (-h / 2) + ' 4 ' + (-h) + '" stroke="#6a5238" stroke-width="4" fill="none"/>' +
    '<g transform="translate(' + (x + 4) + ' ' + (base - h) + ')"><g class="kab-sway">' +
    [[-26, -2], [-20, 10], [24, -4], [20, 10], [-4, -16], [8, -14]].map(p => '<path d="M0 0q' + (p[0] / 2) + ' ' + (p[1] - 10) + ' ' + p[0] + ' ' + p[1] + '" stroke="' + c + '" stroke-width="4" fill="none" stroke-linecap="round"/>').join("") + '</g></g></g>';
  const gull = (x, y, cls) => '<g class="kab-bird ' + (cls || "") + '"><g class="kab-flap"><path d="M' + x + ' ' + y + 'q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g></g>';
  const route = (x, y, n) => '<rect x="' + x + '" y="' + (y - 11) + '" width="28" height="22" rx="5" fill="' + R26 + '"/><text x="' + (x + 14) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + n + '</text>';

  /* 1. CCRTA stop 2554, Cimarron @ Saratoga, Route 26 Airline/Lipes */
  function kabstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (84 + i * 40) + '" y="142" width="32" height="24" rx="3" fill="#1b2a38"/>').join("");
    const bus = '<g class="anim-train"><path d="M46 214V140q0 -10 10 -10h286q16 0 20 14l6 70z" fill="#f4f6f8" stroke="#8a939b" stroke-width="2"/>' + win +
      '<path d="M340 134q20 4 24 36h-24z" fill="#1b2a38"/>' +
      '<path d="M46 178h322v8H46z" fill="' + R26 + '"/><path d="M46 188h322v4H46z" fill="' + PEACH + '"/>' +
      '<rect x="58" y="172" width="20" height="38" rx="2" fill="#cfd5db" stroke="#9aa1a8"/>' +
      '<rect x="230" y="122" width="116" height="10" rx="2" fill="#111"/><text x="288" y="130" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">26 AIRLINE / LIPES</text>' +
      '<circle cx="110" cy="216" r="13" fill="#222"/><circle cx="110" cy="216" r="5" fill="#888"/><circle cx="310" cy="216" r="13" fill="#222"/><circle cx="310" cy="216" r="5" fill="#888"/>' +
      '<circle cx="364" cy="196" r="4" fill="#ffe9a8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kabs1)"/>' +
      '<circle cx="330" cy="46" r="22" fill="#fff3c4" opacity=".9"/>' +
      '<path d="M0 150h400v12H0z" fill="#b9c7a0"/>' +
      '<rect x="20" y="112" width="70" height="40" fill="#e7d6b8"/><path d="M14 114l41-18 41 18z" fill="#9b6b4a"/><rect x="34" y="126" width="14" height="12" fill="#6b8fa8"/><rect x="60" y="126" width="14" height="12" fill="#6b8fa8"/>' +
      '<rect x="300" y="116" width="84" height="36" fill="#d9c7a7"/><path d="M294 118l48-20 48 20z" fill="#8d5f40"/>' +
      palm(120, 152, 64, "#2f8a4c") + palm(268, 152, 72, "#2f8a4c") +
      '<rect x="0" y="162" width="400" height="98" fill="#4a4d52"/><path d="M0 232h400" stroke="#f2d24b" stroke-width="3" stroke-dasharray="22 16"/>' +
      '<rect x="0" y="158" width="400" height="8" fill="#c9c2b4"/>' +
      bus +
      '<g><rect x="14" y="64" width="6" height="100" fill="#6d7378"/><rect x="4" y="40" width="112" height="60" rx="4" fill="#fff" stroke="#2a2a2a" stroke-width="2"/>' +
      '<text x="60" y="56" text-anchor="middle" ' + font + ' font-size="9" fill="#2a2a2a">CCRTA BUS STOP</text>' +
      '<text x="60" y="70" text-anchor="middle" ' + font + ' font-size="8.5" fill="#2a2a2a">CIMARRON @ SARATOGA</text>' +
      route(14, 86, "26") + '<text x="48" y="90" ' + font + ' font-size="8" fill="#2a2a2a">AIRLINE / LIPES</text></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="11" fill="#2a3a4a" letter-spacing="2">SOUTHSIDE  CORPUS CHRISTI</text>',
      sky("kabs1", "#8fd0ee", "#f7e2c0"));
  }

  /* 2. Bob Hall Pier, Padre Island */
  function kabpier() {
    const piles = Array.from({ length: 16 }, (_, i) => '<rect x="' + (60 + i * 21) + '" y="' + (112 - i * 0.6) + '" width="4" height="' + (58 + i * 0.6) + '" fill="#cfc7b6"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kabs2)"/>' +
      '<circle cx="84" cy="70" r="26" fill="#ffd27a"/><circle cx="84" cy="70" r="40" fill="#ffd27a" opacity=".18"/>' +
      '<rect y="120" width="400" height="80" fill="#2f8fa6"/>' +
      '<g class="kab-wave"><path d="M-20 140q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe8f0" stroke-width="2" fill="none" opacity=".7"/></g>' +
      '<g class="kab-wave kab-wave2"><path d="M-20 162q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#dff6f8" stroke-width="2.5" fill="none" opacity=".8"/></g>' +
      piles +
      '<path d="M40 112L400 102v8L40 120z" fill="#e8e1d2" stroke="#9c9484" stroke-width="1.5"/>' +
      '<path d="M40 104L400 94" stroke="#9c9484" stroke-width="1.5"/>' + Array.from({ length: 18 }, (_, i) => '<path d="M' + (44 + i * 20) + ' ' + (112 - i * 0.55) + 'v-8" stroke="#9c9484" stroke-width="1.2"/>').join("") +
      '<rect x="360" y="84" width="30" height="14" fill="#e8e1d2" stroke="#9c9484"/>' +
      gull(40, 44) + gull(180, 30, "kab-bird2") +
      '<path d="M0 196q60 -12 120 -4t140 2t140 -6V260H0z" fill="#e9d3a5"/>' +
      '<g class="kab-wave kab-wave2"><path d="M0 194q40 8 80 0t80 0t80 0t80 0t80 0" stroke="#fff" stroke-width="3" fill="none" opacity=".8"/></g>' +
      '<g transform="translate(250 206)"><rect x="0" y="20" width="56" height="18" fill="#d9b97f"/><rect x="8" y="6" width="16" height="16" fill="#d9b97f"/><rect x="32" y="6" width="16" height="16" fill="#d9b97f"/>' +
      '<path d="M8 6h4v-4h4v4h4v-4h4v4" fill="#d9b97f"/><path d="M32 6h4v-4h4v4h4v-4h4v4" fill="#d9b97f"/><rect x="22" y="28" width="12" height="10" rx="5" fill="#b8975e"/>' +
      '<path d="M40 -2v-16l14 6-14 6" fill="' + PEACH + '"/><path d="M40 -18v24" stroke="#6a5238" stroke-width="1.5"/></g>' +
      '<g class="kab-sway"><path d="M40 230q2 -26 -6 -40M48 232q4 -24 8 -38M56 232q-2 -20 -12 -30" stroke="#a5a35a" stroke-width="2.5" fill="none"/></g>' +
      '<rect x="120" y="214" width="96" height="26" rx="3" fill="#2a5a7a" stroke="#fff" stroke-width="1.5"/><text x="168" y="231" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">BOB HALL PIER</text>',
      sky("kabs2", "#f3b98f", "#9fd6e6"));
  }

  /* 3. The Woodlands Waterway */
  function kabwaterway() {
    const lamps = [40, 120, 280, 360].map(x => '<rect x="' + x + '" y="128" width="3" height="40" fill="#2b2f33"/><circle class="kab-bl" cx="' + (x + 1.5) + '" cy="126" r="5" fill="#ffe7a1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kabs3)"/>' +
      '<rect x="248" y="38" width="62" height="112" fill="#d9c6a3"/><path d="M244 40h70l-8 -14h-54z" fill="#6f8f7a"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M254 ' + (52 + i * 11) + 'h50" stroke="#a8936d" stroke-width="3" stroke-dasharray="6 4"/>').join("") +
      '<rect x="90" y="78" width="80" height="72" fill="#c9b08a"/><path d="M86 80h88l-6 -10h-76z" fill="#7d9b85"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M98 ' + (92 + i * 11) + 'h64" stroke="#a08664" stroke-width="3" stroke-dasharray="6 4"/>').join("") +
      Array.from({ length: 9 }, (_, i) => '<circle cx="' + (i * 50 + 5) + '" cy="' + (140 + (i % 2) * 6) + '" r="' + (24 + (i % 3) * 5) + '" fill="' + (i % 2 ? "#2f6b3d" : "#3a7d47") + '"/>').join("") +
      '<rect y="166" width="400" height="10" fill="#b5523b"/><path d="M0 171h400" stroke="#8f3d2c" stroke-width="1" stroke-dasharray="6 3"/>' +
      lamps +
      '<rect y="176" width="400" height="84" fill="#2f6f86"/>' +
      '<g class="kab-wave"><path d="M-20 196q20 -5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#9fd3e0" stroke-width="2" fill="none" opacity=".6"/></g>' +
      '<g class="kab-wave kab-wave2"><path d="M-20 226q20 -5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#9fd3e0" stroke-width="2" fill="none" opacity=".6"/></g>' +
      '<g transform="translate(196 214)">' + [-30, -15, 0, 15, 30].map((d, i) => '<rect class="kab-jet' + (i % 2 ? " kab-jet2" : "") + '" x="' + (d - 2) + '" y="-34" width="4" height="34" rx="2" fill="#e8f7fb" opacity=".85"/>').join("") + '<ellipse cx="0" cy="2" rx="40" ry="5" fill="#cdeef5" opacity=".7"/></g>' +
      '<g class="kab-boat"><path d="M0 208h70l-8 12H8z" fill="#fff" stroke="#3a4a55" stroke-width="1.5"/><rect x="10" y="194" width="46" height="14" fill="#f4f1e8" stroke="#3a4a55" stroke-width="1.2"/><path d="M6 194h56" stroke="' + PEACH + '" stroke-width="4"/>' +
      '<rect x="14" y="198" width="8" height="6" fill="#7ec8e3"/><rect x="26" y="198" width="8" height="6" fill="#7ec8e3"/><rect x="38" y="198" width="8" height="6" fill="#7ec8e3"/></g>' +
      '<rect x="12" y="12" width="176" height="26" rx="3" fill="#2d4d3a" stroke="#e9e1c9" stroke-width="1.5"/><text x="100" y="30" text-anchor="middle" ' + font + ' font-size="11" fill="#e9e1c9">THE WOODLANDS WATERWAY</text>',
      sky("kabs3", "#2a3f6b", "#e8a36f"));
  }

  /* 4. I-75 into Atlanta, Georgia on his mind */
  function kabgeorgia() {
    const trees = Array.from({ length: 10 }, (_, i) => { const x = i < 5 ? 14 + i * 26 : 276 + (i - 5) * 26, y = 176 + (i % 2) * 10;
      return '<rect x="' + (x - 2) + '" y="' + y + '" width="4" height="14" fill="#6a4a2e"/><circle cx="' + x + '" cy="' + (y - 4) + '" r="12" fill="#3e8a3a"/>' +
        '<circle cx="' + (x - 5) + '" cy="' + (y - 6) + '" r="3" fill="' + PEACH + '"/><circle cx="' + (x + 5) + '" cy="' + (y - 1) + '" r="3" fill="' + PEACH + '"/>'; }).join("");
    const city = '<g fill="#5b3f63">' +
      '<rect x="150" y="96" width="16" height="50"/><rect x="170" y="70" width="18" height="76"/><path d="M170 70l9 -26 9 26z"/><rect x="178" y="30" width="2" height="16"/>' +
      '<rect x="192" y="86" width="22" height="60"/><rect x="216" y="100" width="14" height="46"/><rect x="232" y="78" width="16" height="68"/><circle cx="240" cy="74" r="8"/>' +
      '<rect x="250" y="108" width="20" height="38"/><rect x="132" y="112" width="16" height="34"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kabs4)"/>' +
      '<circle cx="200" cy="120" r="44" fill="#ffd28a" opacity=".85"/>' +
      city +
      '<rect y="146" width="400" height="114" fill="#6fa04a"/>' + trees +
      '<path d="M176 146h48l90 114H86z" fill="#4a4d52"/><path d="M200 150v110" stroke="#f2f2f2" stroke-width="2.5" stroke-dasharray="10 10"/>' +
      '<g class="kab-car"><g transform="translate(206 160)"><rect x="-16" y="-8" width="32" height="14" rx="4" fill="#2b2f36"/><rect x="-11" y="-14" width="22" height="8" rx="3" fill="#3c434c"/>' +
      '<circle cx="-11" cy="0" r="3" fill="#ffe9a8"/><circle cx="11" cy="0" r="3" fill="#ffe9a8"/></g></g>' +
      '<rect x="110" y="20" width="4" height="40" fill="#7b8085"/><rect x="286" y="20" width="4" height="40" fill="#7b8085"/>' +
      '<rect x="96" y="12" width="208" height="44" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<path d="M114 22h24v10q0 10 -12 14q-12 -4 -12 -14z" fill="#1d4fa0" stroke="#fff" stroke-width="1.5"/><rect x="114" y="22" width="24" height="6" fill="#c8102e"/><text x="126" y="41" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">75</text>' +
      '<text x="222" y="32" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">NORTH</text><text x="222" y="49" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">ATLANTA</text>' +
      '<g transform="translate(46 112)"><circle cx="0" cy="0" r="18" fill="' + PEACH + '"/><path d="M0 -18q-6 12 0 36" stroke="#e07b39" stroke-width="2" fill="none"/><path d="M0 -18q10 -12 20 -8q-8 10 -20 8z" fill="#3e8a3a"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="2" opacity=".9">GEORGIA ON MY MIND</text>',
      sky("kabs4", "#e06a7a", "#f7c38a"));
  }

  /* 5. Lipes Blvd and Brockhampton St */
  function kabcorner() {
    const towers = '<g fill="#4b4f6d"><rect x="282" y="34" width="20" height="96"/><rect x="306" y="34" width="20" height="96"/><path d="M282 34l10 -8 10 8zM306 34l10 -8 10 8z"/>' +
      '<rect x="250" y="80" width="26" height="50"/><rect x="332" y="70" width="22" height="60"/><rect x="358" y="92" width="30" height="38"/></g>' +
      Array.from({ length: 12 }, (_, i) => '<rect class="kab-bl' + (i % 2 ? " kab-bl2" : "") + '" x="' + (i % 2 ? 311 : 287) + '" y="' + (42 + Math.floor(i / 2) * 14) + '" width="10" height="3" fill="#ffe7a1"/>').join("");
    const house = '<rect x="150" y="118" width="120" height="44" fill="#e9dcc3"/><path d="M142 120l68 -26 68 26z" fill="#8a6a55"/><rect x="164" y="130" width="22" height="16" fill="#6b8fa8"/><rect x="232" y="130" width="22" height="16" fill="#6b8fa8"/><rect x="200" y="130" width="18" height="32" fill="#7a5238"/>';
    const tread = '<g transform="translate(176 172)"><rect x="0" y="16" width="64" height="8" rx="3" fill="#2b2f36"/><path class="kab-belt" d="M4 16h56" stroke="#7d848c" stroke-width="3" stroke-dasharray="4 4"/>' +
      '<path d="M54 16l8 -26M60 -10h-10" stroke="#2b2f36" stroke-width="3" fill="none"/><rect x="46" y="-14" width="20" height="6" rx="2" fill="#3c434c"/></g>' +
      '<g transform="translate(266 160)"><path d="M0 34l6 -26 6 26M6 8v26" stroke="#2b2f36" stroke-width="2" fill="none"/><rect x="-2" y="-6" width="16" height="14" rx="2" fill="#111"/>' +
      '<circle class="kab-bl" cx="16" cy="-10" r="3" fill="#ff3b3b"/><text x="22" y="-7" ' + font + ' font-size="7" fill="#ff3b3b">LIVE</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kabs5)"/>' +
      Array.from({ length: 22 }, (_, i) => '<circle class="' + (i % 3 ? "" : "kab-bl") + '" cx="' + ((i * 83 + 17) % 400) + '" cy="' + (6 + (i * 41) % 60) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      towers +
      '<rect y="130" width="400" height="40" fill="#3f6b3f"/>' + palm(118, 162, 70, "#2f7a44") + house +
      '<rect y="168" width="400" height="40" fill="#4f8a45"/>' + tread +
      '<rect y="206" width="400" height="54" fill="#4a4d52"/><path d="M0 236h400" stroke="#f2d24b" stroke-width="3" stroke-dasharray="20 14"/>' +
      '<rect x="0" y="150" width="140" height="56" fill="#c9b79a"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 10 + 5) + ' 150v56" stroke="#a8977c" stroke-width="1.5"/>').join("") +
      tag("KEVIN", 14, 186, 30, PEACH, -8) + tag("BROCKHAMPTON", 18, 202, 11, BLUE, -6) +
      '<g transform="translate(118 190)"><circle class="kab-spr" cx="0" cy="0" r="2" fill="' + PEACH + '"/><circle class="kab-spr kab-spr2" cx="5" cy="-3" r="1.5" fill="' + PEACH + '"/></g>' +
      '<rect x="356" y="100" width="5" height="110" fill="#6d7378"/>' + sign(290, 92, 104, "LIPES BLVD") + sign(272, 118, 122, "BROCKHAMPTON ST"),
      sky("kabs5", "#151a33", "#5a4a7a"));
  }

  window.SCENES = { kabstation, kabpier, kabwaterway, kabgeorgia, kabcorner };
})();
