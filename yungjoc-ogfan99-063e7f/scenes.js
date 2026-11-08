/* yungjoc scenes (Regions tab: Atlanta; College Park, where Jasiel "Yung Joc" Robinson grew up - "Joc, where ya stay? Tell 'em College Park").
   CSS classes prefixed yj- (the page's own anim-train is kept on the bus).
   1 MARTA Route 187 Godby Rd / Sullivan Rd (NextGen loop, Apr 2026) at the College Park station bus bays: white bus, blue + orange bands.
   2 The motorcycle dance: a block party in the lot, a candy-red bike revving, the crowd silhouettes leaning on the handlebars (It's Goin' Down, 2006).
   3 His father's hair-care business, where he got his first shot writing a jingle: product shelves, the dryer chair, a mic and notes floating.
   4 Southside Day by Lake Princeton in College Park (the back-to-school giveaway he hosts): tents, a table of laptops, the lake rippling.
   5 Old National Hwy and Sullivan Rd: green signs, JOC tagged with SWAGG TEAM + GET LIKE ME, a candy-paint Chevy, the airport's
     rotating beacon sweeping the sky behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes yjglow{0%,100%{opacity:.35}50%{opacity:1}}.yj-glow{animation:yjglow 2.2s ease-in-out infinite}.yj-g2{animation-delay:-1.1s}' +
    '@keyframes yjspin{to{transform:rotate(360deg)}}.yj-spin{transform-box:fill-box;transform-origin:50% 50%;animation:yjspin .5s linear infinite}' +
    '@keyframes yjlean{0%,100%{transform:rotate(-7deg)}50%{transform:rotate(7deg)}}.yj-lean{transform-box:fill-box;transform-origin:50% 100%;animation:yjlean 1.1s ease-in-out infinite}.yj-l2{animation-delay:-.55s}' +
    '@keyframes yjbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.yj-bob{animation:yjbob .8s ease-in-out infinite}.yj-b2{animation-delay:-.4s}' +
    '@keyframes yjsmoke{0%{transform:translate(0,0) scale(.6);opacity:.7}100%{transform:translate(-40px,-14px) scale(1.6);opacity:0}}.yj-sm{transform-box:fill-box;transform-origin:50% 50%;animation:yjsmoke 1.2s ease-out infinite}.yj-sm2{animation-delay:-.6s}' +
    '@keyframes yjnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(26px,-56px);opacity:0}}.yj-n{animation:yjnote 3s ease-out infinite}.yj-n2{animation-delay:-1s}.yj-n3{animation-delay:-2s}' +
    '@keyframes yjrip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.yj-rip{animation:yjrip 3s ease-in-out infinite}.yj-r2{animation-delay:-1.5s}' +
    '@keyframes yjflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.yj-flag{transform-box:fill-box;transform-origin:0 50%;animation:yjflag 1.4s ease-in-out infinite}' +
    '@keyframes yjbeam{from{transform:rotate(0)}to{transform:rotate(360deg)}}.yj-beam{transform-origin:236px 52px;animation:yjbeam 4s linear infinite}' +
    '@keyframes yjspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.yj-sp{animation:yjspray 1.4s ease-out infinite}.yj-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const GOLD = "#ffb000", RED = "#e8322f", SKY = "#36c5f0", MBLUE = "#0a5fb4", MORANGE = "#f58025";
  const stars = (n, cls) => Array.from({ length: n }, (_, i) => '<circle class="' + (i % 4 ? "" : "yj-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>').join("");
  const pines = (y, n, c) => Array.from({ length: n }, (_, i) => { const x = i * (400 / (n - 1)) + ((i * 37) % 11); const h = 22 + (i * 13) % 16; return '<path d="M' + x + ' ' + y + 'l-8 0l8 -' + h + 'l8 ' + h + 'z" fill="' + c + '"/>'; }).join("");
  const note = (x, y, c, cls) => '<g class="yj-n ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'v-16l10 -3v16" stroke="' + c + '" stroke-width="2" fill="none"/><ellipse cx="' + (x - 3) + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '"/><ellipse cx="' + (x + 7) + '" cy="' + (y - 3) + '" rx="4" ry="3" fill="' + c + '"/></g>';
  /* faceless person silhouette: round head, body, arms */
  const person = (x, y, c, s) => { s = s || 1; return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><circle cx="0" cy="-46" r="7" fill="' + c + '"/><path d="M-9 -38h18l3 26h-24z" fill="' + c + '"/><rect x="-8" y="-13" width="6" height="13" fill="' + c + '"/><rect x="2" y="-13" width="6" height="13" fill="' + c + '"/></g>'; };

  /* 1. MARTA Route 187 at the College Park station bus bays */
  function yjbus() {
    const bus = '<g class="anim-train"><rect x="40" y="110" width="300" height="84" rx="10" fill="#f4f5f7" stroke="#5b6470" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (56 + i * 42) + '" y="122" width="34" height="32" rx="3" fill="#1d2a38"/>').join("") +
      '<rect x="306" y="118" width="30" height="48" rx="3" fill="#24384c"/><rect x="40" y="162" width="300" height="8" fill="' + MBLUE + '"/><rect x="40" y="170" width="300" height="5" fill="' + MORANGE + '"/>' +
      '<rect x="58" y="111" width="170" height="10" rx="2" fill="#111"/><text x="143" y="119" text-anchor="middle" ' + font + ' font-size="7.4" fill="#ffb020">187 GODBY RD / SULLIVAN RD</text>' +
      '<circle cx="96" cy="196" r="15" fill="#1b1b1b"/><circle cx="96" cy="196" r="6" fill="#9aa2ad"/><circle cx="282" cy="196" r="15" fill="#1b1b1b"/><circle cx="282" cy="196" r="6" fill="#9aa2ad"/>' +
      '<circle class="yj-glow" cx="333" cy="182" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yj1)"/>' + stars(16) + pines(98, 16, "#14202a") +
      /* station canopy */
      '<rect x="0" y="56" width="400" height="14" fill="#c9ccd1"/><rect x="0" y="70" width="400" height="5" fill="#8d939b"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (20 + i * 74) + '" y="75" width="6" height="128" fill="#8d939b"/>').join("") +
      Array.from({ length: 5 }, (_, i) => '<rect class="yj-glow' + (i % 2 ? " yj-g2" : "") + '" x="' + (44 + i * 74) + '" y="71" width="30" height="3" fill="#fff7d0"/>').join("") +
      /* station sign */
      '<rect x="234" y="16" width="156" height="34" rx="3" fill="#111" stroke="#666"/><text x="312" y="31" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">College Park</text>' +
      '<text x="312" y="44" text-anchor="middle" ' + font + ' font-size="8" fill="#cfd3d8">BUS BAYS · NORTH LOOP</text>' +
      '<rect x="12" y="16" width="60" height="34" rx="4" fill="' + MBLUE + '"/><text x="42" y="40" text-anchor="middle" ' + font + ' font-size="20" fill="#fff">187</text>' +
      '<rect x="0" y="203" width="400" height="57" fill="#3b3e44"/><rect x="0" y="203" width="400" height="5" fill="#d8d2c4"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 44) + '" y="232" width="24" height="3" fill="#f2d24a"/>').join("") + bus,
      sky("yj1", "#0e1630", "#3a4f74"));
  }

  /* 2. The motorcycle dance: block party in the lot, red bike revving, the crowd riding invisible handlebars */
  function yjdance() {
    const bike = '<g class="yj-bob"><circle class="yj-spin" cx="150" cy="206" r="22" fill="none" stroke="#111" stroke-width="8"/><circle cx="150" cy="206" r="22" fill="none" stroke="#777" stroke-width="2" stroke-dasharray="4 6" class="yj-spin"/>' +
      '<circle cx="262" cy="206" r="22" fill="none" stroke="#111" stroke-width="8"/><circle cx="262" cy="206" r="22" fill="none" stroke="#777" stroke-width="2" stroke-dasharray="4 6" class="yj-spin"/>' +
      '<path d="M150 206L184 172H236L262 206" stroke="#aab0b8" stroke-width="5" fill="none"/><path d="M180 176q20 -26 60 -10l8 14h-70z" fill="' + RED + '" stroke="#7a1414" stroke-width="2"/>' +
      '<rect x="170" y="160" width="40" height="10" rx="5" fill="#1a1a1a"/><path d="M244 168l14 -24" stroke="#aab0b8" stroke-width="4"/><path d="M250 142h20" stroke="#222" stroke-width="5" stroke-linecap="round"/>' +
      '<rect x="190" y="182" width="34" height="16" rx="3" fill="#555"/><path d="M150 196h-22" stroke="#aab0b8" stroke-width="4"/></g>' +
      '<circle class="yj-sm" cx="120" cy="196" r="9" fill="#ddd" opacity=".6"/><circle class="yj-sm yj-sm2" cx="116" cy="200" r="7" fill="#ccc" opacity=".5"/>';
    const crowd = [30, 70, 330, 370].map((x, i) => '<g class="yj-lean' + (i % 2 ? " yj-l2" : "") + '">' + person(x, 230, i % 2 ? "#6a4a8a" : "#3f6a86", 1.15) +
      '<path d="M' + (x - 14) + ' 182h28" stroke="' + GOLD + '" stroke-width="3" stroke-linecap="round"/></g>').join("");
    const lights = Array.from({ length: 14 }, (_, i) => '<circle class="yj-glow' + (i % 2 ? " yj-g2" : "") + '" cx="' + (14 + i * 28) + '" cy="' + (40 + Math.sin(i / 1.5) * 8) + '" r="4" fill="' + [GOLD, RED, SKY][i % 3] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#yj2)"/>' + stars(12) +
      '<path d="M0 40q100 22 200 0t200 0" stroke="#333" stroke-width="1.5" fill="none"/>' + lights +
      /* speakers stack */
      '<rect x="300" y="96" width="56" height="70" rx="4" fill="#15151a" stroke="#444"/><circle cx="328" cy="118" r="12" fill="#222" stroke="#555"/><circle class="yj-glow" cx="328" cy="118" r="5" fill="#444"/><circle cx="328" cy="148" r="9" fill="#222" stroke="#555"/>' +
      '<rect x="44" y="96" width="56" height="70" rx="4" fill="#15151a" stroke="#444"/><circle cx="72" cy="118" r="12" fill="#222" stroke="#555"/><circle class="yj-glow yj-g2" cx="72" cy="118" r="5" fill="#444"/><circle cx="72" cy="148" r="9" fill="#222" stroke="#555"/>' +
      '<rect x="0" y="166" width="400" height="94" fill="#2b2b30"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (i * 70 + 10) + '" y="244" width="40" height="3" fill="#e6e1d3" opacity=".5"/>').join("") +
      bike + crowd +
      '<text x="200" y="82" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="26" fill="' + GOLD + '" stroke="#000" stroke-width="3" paint-order="stroke">DO THE MOTORCYCLE</text>',
      sky("yj2", "#120c24", "#4a2240"));
  }

  /* 3. His father's hair-care business, where he wrote a jingle: shelves of bottles, the dryer chair, a mic and floating notes */
  function yjshop() {
    const bottles = (y, n) => Array.from({ length: n }, (_, i) => { const x = 26 + i * 22; const c = [GOLD, RED, SKY, "#f2efe6"][i % 4]; const h = 22 + (i * 7) % 10;
      return '<rect x="' + x + '" y="' + (y - h) + '" width="14" height="' + h + '" rx="3" fill="' + c + '" stroke="#222"/><rect x="' + (x + 4) + '" y="' + (y - h - 6) + '" width="6" height="6" fill="#222"/><rect x="' + (x + 2) + '" y="' + (y - h + 8) + '" width="10" height="6" fill="#fff" opacity=".7"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="#2a1e1a"/><rect x="0" y="0" width="400" height="190" fill="#3b2a24"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="20" height="190" fill="#432f28"/>').join("") +
      /* shelves */
      '<rect x="14" y="20" width="200" height="150" fill="#2a1c17" stroke="#6b4a32" stroke-width="3"/>' +
      [62, 112, 162].map(y => '<rect x="14" y="' + y + '" width="200" height="6" fill="#6b4a32"/>').join("") + bottles(62, 9) + bottles(112, 9) + bottles(162, 9) +
      /* dryer chair */
      '<path d="M262 120q30 -40 70 -10l6 30h-82z" fill="#d9d4cc" stroke="#777" stroke-width="2"/><rect x="290" y="140" width="12" height="40" fill="#777"/>' +
      '<rect x="262" y="176" width="70" height="30" rx="8" fill="' + RED + '" stroke="#7a1414" stroke-width="2"/><rect x="258" y="206" width="78" height="10" rx="3" fill="#555"/>' +
      /* mic */
      '<rect x="360" y="70" width="4" height="140" fill="#888"/><rect x="350" y="52" width="24" height="34" rx="12" fill="#444" stroke="#999" stroke-width="2"/>' +
      '<path d="M352 66h20M352 74h20" stroke="#777" stroke-width="1.5"/><rect x="346" y="206" width="32" height="6" rx="2" fill="#666"/>' +
      note(330, 70, GOLD) + note(306, 56, SKY, "yj-n2") + note(338, 100, "#f2efe6", "yj-n3") +
      /* counter + jingle sheet */
      '<rect x="0" y="216" width="400" height="44" fill="#5a3a26"/><rect x="0" y="214" width="400" height="4" fill="#8a5a3a"/>' +
      '<g transform="rotate(-4 160 236)"><rect x="120" y="222" width="80" height="34" fill="#f5f0e2"/>' + [230, 236, 242, 248].map(y => '<path d="M126 ' + y + 'h68" stroke="#999" stroke-width="1"/>').join("") +
      '<text x="160" y="232" text-anchor="middle" ' + font + ' font-size="7" fill="' + RED + '">THE JINGLE</text></g>' +
      '<rect class="yj-glow" x="236" y="24" width="120" height="22" rx="3" fill="#120c0a" stroke="' + GOLD + '"/><text x="296" y="39" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">HAIR CARE</text>',
      "");
  }

  /* 4. Southside Day by Lake Princeton: tents, laptops, the lake */
  function yjlake() {
    const tent = (x, c) => '<path d="M' + x + ' 150l40 -26l40 26z" fill="' + c + '"/><rect x="' + (x + 4) + '" y="150" width="72" height="6" fill="#fff" opacity=".8"/>' +
      '<rect x="' + (x + 4) + '" y="156" width="3" height="36" fill="#ddd"/><rect x="' + (x + 73) + '" y="156" width="3" height="36" fill="#ddd"/>';
    const laptop = (x) => '<rect x="' + x + '" y="176" width="22" height="14" rx="1" fill="#2c3440" stroke="#9aa"/><rect class="yj-glow" x="' + (x + 2) + '" y="178" width="18" height="10" fill="' + SKY + '"/><rect x="' + (x - 3) + '" y="190" width="28" height="3" fill="#9aa"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#yj4)"/><circle cx="330" cy="46" r="18" fill="#ffe28a"/>' +
      pines(110, 18, "#2f5a34") + '<rect x="0" y="108" width="400" height="22" fill="#4f8a4c"/>' +
      /* lake */
      '<path d="M0 118q200 -10 400 0v20h-400z" fill="#3c7ea8"/>' +
      '<g class="yj-rip"><path d="M30 126h40M160 122h50M290 128h44" stroke="#bfe3f5" stroke-width="2" opacity=".8"/></g><g class="yj-rip yj-r2"><path d="M90 132h30M230 130h36" stroke="#bfe3f5" stroke-width="2" opacity=".6"/></g>' +
      '<rect x="0" y="136" width="400" height="124" fill="#5f9a52"/>' +
      tent(20, RED) + tent(150, GOLD) + tent(280, SKY) +
      '<rect x="140" y="192" width="120" height="8" fill="#e8e2d2"/><rect x="146" y="200" width="4" height="20" fill="#aaa"/><rect x="250" y="200" width="4" height="20" fill="#aaa"/>' +
      laptop(150) + laptop(178) + laptop(206) + laptop(232) +
      /* boxes of tablets */
      '<rect x="40" y="200" width="30" height="22" fill="#c9a26a" stroke="#7a5a2a"/><rect x="44" y="190" width="26" height="12" fill="#d4b07a" stroke="#7a5a2a"/>' +
      '<rect x="320" y="198" width="32" height="24" fill="#c9a26a" stroke="#7a5a2a"/>' +
      '<g class="yj-bob">' + person(100, 240, "#2a2a36", 0.9) + '</g><g class="yj-bob yj-b2">' + person(300, 242, "#3a2a2a", 0.8) + '</g>' +
      '<g class="yj-flag"><rect x="120" y="60" width="160" height="30" fill="' + RED + '" stroke="#7a1414"/><text x="200" y="81" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="#fff">SOUTHSIDE DAY</text></g>' +
      '<rect x="118" y="56" width="3" height="80" fill="#ddd"/><rect x="279" y="56" width="3" height="80" fill="#ddd"/>',
      sky("yj4", "#6cc3f0", "#d8f0fb"));
  }

  /* 5. Old National Hwy and Sullivan Rd: tagged wall, candy-paint Chevy, airport beacon sweeping */
  function yjcorner() {
    const chevy = '<g><path d="M150 214l14 -22h86l22 22z" fill="' + RED + '" stroke="#5a0a0a" stroke-width="2"/><rect x="132" y="210" width="168" height="22" rx="6" fill="' + RED + '" stroke="#5a0a0a" stroke-width="2"/>' +
      '<path d="M170 196h34v16h-44zM212 196h34l16 16h-50z" fill="#1d2a38"/><path d="M212 196l-22 -40l-30 6l10 34z" fill="' + RED + '" stroke="#5a0a0a" stroke-width="2"/><path d="M198 176l-9 -15l-17 4l5 12z" fill="#1d2a38"/>' +
      '<circle cx="162" cy="234" r="12" fill="#111"/><circle class="yj-spin" cx="162" cy="234" r="7" fill="' + GOLD + '" stroke="#fff" stroke-dasharray="3 3"/><circle cx="272" cy="234" r="12" fill="#111"/><circle class="yj-spin" cx="272" cy="234" r="7" fill="' + GOLD + '" stroke="#fff" stroke-dasharray="3 3"/>' +
      '<circle class="yj-glow" cx="296" cy="218" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yj5)"/>' + stars(14) +
      /* airport beacon tower + sweeping beam */
      '<g class="yj-beam"><path d="M236 52L470 22L470 82z" fill="#c8ffd8" opacity=".2"/><path d="M236 52L2 22L2 82z" fill="#ffffff" opacity=".16"/></g>' +
      '<path d="M226 120l7 -64h6l7 64z" fill="#6a7078"/><path d="M229 96h14M231 76h10" stroke="#4a4f56" stroke-width="2"/><rect x="228" y="44" width="16" height="12" rx="2" fill="#2c3036"/><circle class="yj-glow" cx="236" cy="50" r="5" fill="#7dffa8"/>' +
      '<rect x="0" y="118" width="400" height="104" fill="#8c8a84"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M0 ' + (126 + i * 8) + 'h400" stroke="#77756f" stroke-width="1"/>').join("") +
      Array.from({ length: 26 }, (_, i) => '<path d="M' + ((i % 2 ? 8 : 0) + Math.floor(i / 2) * 32) + ' ' + (118 + (i % 13) * 8) + 'v8" stroke="#77756f"/>').join("") +
      tag("JOC", 24, 186, 58, GOLD, -6) + tag("SWAGG TEAM", 150, 150, 22, SKY, -4) + tag("GET LIKE ME", 20, 214, 16, RED, -3) +
      '<g class="yj-sp"><circle cx="134" cy="180" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="yj-sp yj-sp2"><circle cx="140" cy="174" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="222" width="400" height="38" fill="#55534e"/><rect x="0" y="220" width="400" height="4" fill="#e8e4dc"/>' + chevy +
      '<rect x="362" y="90" width="6" height="132" fill="#2f2f2f"/>' + sign(290, 92, 110, "Old National Hwy") + sign(306, 118, 86, "Sullivan Rd"),
      sky("yj5", "#0f1430", "#7a3a52"));
  }

  window.SCENES = { yjbus: yjbus, yjdance: yjdance, yjshop: yjshop, yjlake: yjlake, yjcorner: yjcorner };
})();
