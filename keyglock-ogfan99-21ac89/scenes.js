/* keyglock scenes (Regions tab: Memphis + Tennessee; South Memphis). CSS classes and ids prefixed kg- (the page's own anim-train is kept).
   1 MATA Route 57 Park bus pulling up at Bellevue Blvd & McLemore Ave in South Memphis.
   2 Central High School on S Bellevue Blvd (his school): brick front, pale stone columns, flag waving.
   3 A riverboat's paddlewheel turning at Beale Street Landing on the Mississippi at sunset.
   4 Crump Stadium (next to Central High) under the Friday-night lights, scoreboard reading CLIMB.
   5 Bellevue Blvd and Trigg Ave in South Memphis: green signs, KEY GLOCK tagged in yellow, Crosstown Concourse's white tower far up Bellevue/Cleveland behind.
   400 x 260 SVGs. No logos, no faces. No 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kgtw{0%,100%{opacity:.3}50%{opacity:1}}.kg-tw{animation:kgtw 1.8s ease-in-out infinite}.kg-tw2{animation-delay:-.9s}' +
    '@keyframes kgflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-6deg)}}.kg-flag{animation:kgflag 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:left center}' +
    '@keyframes kgspin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.kg-wheel{animation:kgspin 6s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes kgwave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.kg-wave{animation:kgwave 3s linear infinite}' +
    '@keyframes kgglow{0%,100%{opacity:.45}50%{opacity:1}}.kg-gl{animation:kgglow 2s ease-in-out infinite}.kg-gl2{animation-delay:-1s}' +
    '@keyframes kgball{0%{transform:translate(0,0)}50%{transform:translate(70px,-46px)}100%{transform:translate(140px,0)}}.kg-ball{animation:kgball 2.6s ease-in-out infinite}' +
    '@keyframes kgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kg-sp{animation:kgspray 1.4s ease-out infinite}.kg-sp2{animation-delay:.5s}' +
    '@keyframes kgleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.kg-leaf{animation:kgleaf 3s ease-in-out infinite;transform-box:fill-box;transform-origin:bottom center}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="kg-tw' + (i % 2 ? ' kg-tw2' : '') + '" cx="' + ((i * 73 + 11) % 400) + '" cy="' + (8 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.8 : 1.4) + '" fill="#fff"/>').join("");
  const MATA = "#0057a8", YEL = "#ffd21f", ORG = "#ff9f1c", SKY = "#38b6ff", RED = "#c8102e";
  const tree = (x, base, r) => '<g class="kg-leaf"><rect x="' + (x - 2) + '" y="' + (base - r) + '" width="4" height="' + (r + 4) + '" fill="#4a3324"/><circle cx="' + x + '" cy="' + (base - r - 4) + '" r="' + r + '" fill="#2f6b3a"/><circle cx="' + (x + r * .6) + '" cy="' + (base - r) + '" r="' + r * .7 + '" fill="#3b7d45"/></g>';

  /* 1. MATA Route 57 Park at Bellevue Blvd & McLemore Ave */
  function kgstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1b2633"/>').join("");
    const bus = '<g class="anim-train"><rect x="36" y="116" width="316" height="66" rx="10" fill="#f4f6f8" stroke="#7d868f" stroke-width="2"/>' + win +
      '<path d="M36 160h316v10H36z" fill="' + MATA + '"/><path d="M36 170h316v4H36z" fill="' + YEL + '"/>' +
      '<rect x="326" y="124" width="22" height="40" rx="3" fill="#2b3640"/><rect x="286" y="118" width="66" height="9" rx="2" fill="#111"/><text x="319" y="125.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">57 PARK</text>' +
      '<circle cx="90" cy="184" r="11" fill="#222"/><circle cx="90" cy="184" r="4" fill="#888"/><circle cx="300" cy="184" r="11" fill="#222"/><circle cx="300" cy="184" r="4" fill="#888"/><circle cx="348" cy="172" r="3.5" fill="#fff6c2"/></g>';
    const shop = (x, w, c, roof) => '<rect x="' + x + '" y="80" width="' + w + '" height="36" fill="' + c + '"/><rect x="' + x + '" y="76" width="' + w + '" height="6" fill="' + roof + '"/>' +
      '<rect x="' + (x + 6) + '" y="90" width="' + (w / 2 - 10) + '" height="14" fill="#ffe7a0" opacity=".75"/><rect x="' + (x + w / 2 + 4) + '" y="92" width="10" height="24" fill="#4a3324"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kgs1)"/>' +
      shop(10, 70, "#b98a5e", "#5a4636") + tree(98, 116, 16) + shop(118, 64, "#c9b49a", "#4a3a2e") + tree(198, 116, 18) + shop(220, 76, "#9fb7c9", "#3d4a57") + tree(312, 116, 15) + shop(330, 64, "#d9c7a6", "#6a4a36") +
      '<rect x="0" y="116" width="400" height="80" fill="#55565a"/><path d="M0 150h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#b9b3a6"/><path d="M0 196h400" stroke="#8f897c" stroke-width="3"/>' +
      '<rect x="372" y="150" width="5" height="70" fill="#4a4f55"/><circle cx="374.5" cy="142" r="13" fill="' + MATA + '" stroke="#fff" stroke-width="2"/><text x="374.5" y="147" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">57</text>' +
      '<rect x="22" y="204" width="336" height="44" rx="3" fill="#111"/><text x="34" y="222" ' + font + ' font-size="13" fill="#fff">Bellevue Blvd &amp; McLemore Ave</text>' +
      '<circle cx="42" cy="236" r="7" fill="' + MATA + '"/><text x="42" y="239.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">57</text><text x="56" y="240" ' + font + ' font-size="10.5" fill="#cfd8e0">Park · South Memphis</text>',
      sky("kgs1", "#7fb7e6", "#f1d9b0"));
  }

  /* 2. Central High School on S Bellevue Blvd */
  function kgcentral() {
    const brick = "#9c4a32", stone = "#e8dcc2";
    const winRow = (y) => Array.from({ length: 12 }, (_, i) => { const x = 40 + i * 28 + (i >= 5 ? 44 : 0); return x > 370 ? "" : '<rect x="' + x + '" y="' + y + '" width="14" height="20" fill="#2a3a4a" stroke="' + stone + '" stroke-width="2"/>'; }).join("");
    const cols = Array.from({ length: 4 }, (_, i) => '<rect x="' + (172 + i * 16) + '" y="92" width="8" height="72" fill="' + stone + '"/><rect x="' + (170 + i * 16) + '" y="88" width="12" height="5" fill="#d6c8aa"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kgs2)"/>' +
      '<rect x="20" y="66" width="360" height="110" fill="' + brick + '"/><rect x="20" y="62" width="360" height="8" fill="' + stone + '"/><rect x="20" y="126" width="360" height="4" fill="' + stone + '" opacity=".8"/>' +
      winRow(80) + winRow(138) +
      '<path d="M160 70l46 -28l46 28z" fill="' + stone + '"/><path d="M168 68l38 -22l38 22z" fill="#cdbd9d"/>' +
      '<rect x="162" y="70" width="88" height="94" fill="#b65a3e"/>' + cols +
      '<rect x="164" y="74" width="84" height="12" fill="' + stone + '"/><text x="206" y="83.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#5a3a2a">CENTRAL HIGH</text>' +
      '<rect x="192" y="140" width="28" height="24" fill="#3a2418"/>' +
      '<rect x="150" y="164" width="112" height="6" fill="#cdbd9d"/><rect x="140" y="170" width="132" height="6" fill="#bfae8c"/>' +
      '<rect x="60" y="20" width="3" height="46" fill="#c0c4c8"/><g class="kg-flag"><rect x="63" y="20" width="30" height="16" fill="' + MATA + '"/><rect x="63" y="26" width="30" height="4" fill="#fff"/></g>' +
      '<rect x="0" y="176" width="400" height="84" fill="#5f9a4a"/><path d="M190 176h32l30 84h-92z" fill="#c9c0ad"/>' +
      tree(30, 196, 18) + tree(372, 196, 20) + tree(110, 200, 12) + tree(300, 200, 12) +
      '<rect x="0" y="236" width="400" height="24" fill="#55565a"/><text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#f2ead8">S BELLEVUE BLVD · MIDTOWN</text>',
      sky("kgs2", "#5aa8e8", "#d8ecf7"));
  }

  /* 3. Riverboat paddlewheel at Beale Street Landing, Mississippi sunset */
  function kgriver() {
    const spokes = Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return '<path d="M0 0L' + (Math.cos(a) * 30).toFixed(1) + ' ' + (Math.sin(a) * 30).toFixed(1) + '" stroke="' + RED + '" stroke-width="4"/>'; }).join("");
    const waves = Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' 0q10 -4 20 0t20 0" stroke="#f6c37a" stroke-width="1.5" fill="none" opacity=".6"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kgs3)"/>' +
      '<circle cx="300" cy="120" r="30" fill="#ffd27a" opacity=".9"/>' +
      '<path d="M0 150h400v110H0z" fill="#3b4a5e"/>' +
      '<g class="kg-wave"><g transform="translate(0 168)">' + waves + '</g><g transform="translate(20 196)">' + waves + '</g><g transform="translate(0 226)">' + waves + '</g></g>' +
      '<path d="M0 150l60 -10l40 10z" fill="#2a3a2a"/>' +
      /* landing: tiered green roofs */
      '<path d="M0 150v-26l60 -12l60 12v26z" fill="#6b8f5a"/><rect x="10" y="132" width="100" height="18" fill="#c9c0ad"/>' +
      /* riverboat */
      '<rect x="140" y="140" width="190" height="22" fill="#f4f1ea"/><rect x="150" y="118" width="160" height="22" fill="#f4f1ea"/><rect x="170" y="100" width="110" height="18" fill="#f4f1ea"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (156 + i * 15) + '" y="124" width="8" height="10" fill="#2a3a4a"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (178 + i * 17) + '" y="104" width="8" height="9" fill="#2a3a4a"/>').join("") +
      '<rect x="138" y="138" width="194" height="3" fill="' + RED + '"/><rect x="148" y="116" width="164" height="3" fill="' + RED + '"/><rect x="168" y="98" width="114" height="3" fill="' + RED + '"/>' +
      '<rect x="196" y="62" width="8" height="38" fill="#222"/><rect x="246" y="62" width="8" height="38" fill="#222"/><rect x="194" y="58" width="12" height="5" fill="' + YEL + '"/><rect x="244" y="58" width="12" height="5" fill="' + YEL + '"/>' +
      '<g transform="translate(352 150)"><circle r="32" fill="none" stroke="' + RED + '" stroke-width="4"/><g class="kg-wheel">' + spokes + '<circle r="32" fill="none" stroke="#7a0a1a" stroke-width="2" stroke-dasharray="6 6"/></g><circle r="5" fill="#222"/></g>' +
      '<rect x="0" y="236" width="400" height="24" fill="#2a2f38"/><text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#f6c37a">BEALE STREET LANDING · MISSISSIPPI RIVER</text>',
      sky("kgs3", "#3b2a5a", "#f08a4a"));
  }

  /* 4. Crump Stadium under the lights, scoreboard reads CLIMB */
  function kgcrump() {
    const light = (x) => '<rect x="' + (x - 2) + '" y="30" width="4" height="96" fill="#8a8f96"/><rect x="' + (x - 18) + '" y="20" width="36" height="14" rx="2" fill="#3a3f46"/>' +
      Array.from({ length: 6 }, (_, i) => '<circle class="kg-gl' + (i % 2 ? ' kg-gl2' : '') + '" cx="' + (x - 14 + i * 5.6) + '" cy="27" r="2.4" fill="#fff8d0"/>').join("") +
      '<path d="M' + (x - 18) + ' 34L' + (x - 70) + ' 200h140L' + (x + 18) + ' 34z" fill="#fff8d0" opacity=".08"/>';
    const seats = Array.from({ length: 6 }, (_, i) => '<rect x="0" y="' + (112 + i * 7) + '" width="400" height="4" fill="' + (i % 2 ? "#2d3b55" : "#344466") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kgs4)"/>' + stars(14) +
      light(46) + light(354) + seats +
      /* art deco gate */
      '<rect x="150" y="70" width="100" height="84" fill="#d8b98a"/><path d="M150 70l50 -26l50 26z" fill="#c9a874"/><rect x="186" y="96" width="28" height="58" fill="#3a2a1a"/>' +
      '<rect x="160" y="80" width="8" height="70" fill="#c9a874"/><rect x="232" y="80" width="8" height="70" fill="#c9a874"/><rect x="164" y="74" width="72" height="12" fill="#b88f5a"/><text x="200" y="83" text-anchor="middle" ' + font + ' font-size="8" fill="#3a2a1a">CRUMP STADIUM</text>' +
      /* scoreboard */
      '<rect x="270" y="56" width="70" height="40" rx="3" fill="#111" stroke="' + YEL + '" stroke-width="2"/><text x="305" y="74" text-anchor="middle" ' + font + ' font-size="11" fill="' + YEL + '">CLIMB</text><text x="305" y="89" text-anchor="middle" ' + font + ' font-size="10" fill="#ff5a3c">THE RANKS</text>' +
      '<rect x="0" y="154" width="400" height="106" fill="#2f7a3a"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 50 + 20) + ' 154v106" stroke="#fff" stroke-width="2" opacity=".5"/>').join("") +
      '<path d="M0 154h400" stroke="#fff" stroke-width="3"/>' +
      '<g class="kg-ball"><ellipse cx="120" cy="214" rx="10" ry="6" fill="#7a3e1a" stroke="#fff" stroke-width="1"/></g>',
      sky("kgs4", "#0a1226", "#22325a"));
  }

  /* 5. Bellevue Blvd & Trigg Ave, Crosstown Concourse far up the boulevard */
  function kgcorner() {
    const crosstown = '<g><rect x="262" y="70" width="88" height="80" fill="#eceae4"/><rect x="286" y="34" width="40" height="116" fill="#f4f2ec"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (290 + i * 6) + '" y="40" width="3" height="104" fill="#cfcac0"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (266 + i * 10) + '" y="78" width="5" height="66" fill="#cfcac0"/>').join("") +
      '<rect x="284" y="30" width="44" height="6" fill="#d8d3c8"/><circle class="kg-gl" cx="306" cy="26" r="2.5" fill="#ff5a3c"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kgs5)"/>' + stars(16) + crosstown +
      '<rect x="0" y="150" width="400" height="10" fill="#555a60"/>' +
      '<rect x="20" y="96" width="214" height="110" fill="#c9c2b4"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M20 ' + (106 + i * 13) + 'h214" stroke="#b1aa9c" stroke-width="1"/>').join("") +
      tag("KEY", 40, 142, 38, YEL, -6) + tag("GLOCK", 70, 186, 36, ORG, -6) + tag("GLIZOCK", 150, 124, 16, SKY, 8) +
      '<circle class="kg-sp" cx="218" cy="178" r="3" fill="' + YEL + '"/><circle class="kg-sp kg-sp2" cx="224" cy="172" r="2.5" fill="' + ORG + '"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#4a4b50"/><path d="M0 206h400" stroke="#2d2e32" stroke-width="3"/>' +
      '<rect x="364" y="124" width="6" height="86" fill="#4a4f55"/>' + sign(250, 132, 146, "S Bellevue Blvd") + sign(276, 158, 120, "Trigg Ave") +
      '<rect x="360" y="184" width="14" height="10" rx="2" fill="#4a4f55"/>',
      sky("kgs5", "#0a1530", "#4a3a2a"));
  }

  window.SCENES = { kgstop, kgcentral, kgriver, kgcrump, kgcorner };
})();
