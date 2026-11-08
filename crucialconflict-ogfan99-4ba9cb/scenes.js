/* crucialconflict scenes (Regions tab: Chicago; the West Side). CSS classes and ids prefixed cc- (the page's own anim-train is kept).
   1 Ashland on the CTA Green + Pink Lines: the Lake Street 'L' over Lake St and Ashland Ave on the Near West Side, the green-and-pink platform sign,
     a Green Line train sliding in.
   2 "In the middle of the barn" ("Hay", their platinum hit): a red barn at dusk, hay bales stacked, the loft door open, a weather vane turning.
   3 The Union Stock Yard Gate (Exchange Ave and Peoria St): the 1879 limestone triple arch with the carved steer head on top, Chicago's own
     cowboy history for the group that put the rodeo in Chi-Town rap ("Ride the Rodeo"). A tumbleweed rolls through.
   4 The Double Door stage on Milwaukee Ave, where they ran "Hay" live for the hometown crowd: stage lights sweeping, crowd hands up, a set list taped down.
   5 W Madison St and N Central Park Ave on the West Side: green signs, CRUCIAL CONFLICT tagged on the brick, the gold dome of the Garfield Park
     fieldhouse behind.
   No logos, no faces; no 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ccvane{0%,100%{transform:rotate(-25deg)}50%{transform:rotate(25deg)}}.cc-vane{animation:ccvane 4s ease-in-out infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes ccfly{0%,100%{opacity:.1}50%{opacity:1}}.cc-fly{animation:ccfly 1.8s ease-in-out infinite}.cc-fly2{animation-delay:-.6s}.cc-fly3{animation-delay:-1.2s}' +
    '@keyframes cctumble{from{transform:translateX(-60px) rotate(0)}to{transform:translateX(470px) rotate(720deg)}}.cc-tumble{animation:cctumble 7s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes ccdust{0%{opacity:.6;transform:translateX(0)}100%{opacity:0;transform:translateX(-30px)}}.cc-dust{animation:ccdust 1.6s ease-out infinite}' +
    '@keyframes ccbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.cc-beam{animation:ccbeam 3s ease-in-out infinite;transform-box:view-box}.cc-beam2{animation-delay:-1.5s}' +
    '@keyframes cchand{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}.cc-hand{animation:cchand .8s ease-in-out infinite}.cc-hand2{animation-delay:-.4s}' +
    '@keyframes ccbl{0%,100%{opacity:.25}50%{opacity:1}}.cc-bl{animation:ccbl 1.4s ease-in-out infinite}.cc-bl2{animation-delay:-.7s}' +
    '@keyframes ccsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cc-sp{animation:ccsp 1.4s ease-out infinite}.cc-sp2{animation-delay:.45s}' +
    '@keyframes ccbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-16px)}}.cc-bird{animation:ccbird 12s linear infinite}' +
    '@keyframes cctrain{from{transform:translateX(440px)}to{transform:translateX(-420px)}}.cc-train{animation:cctrain 9s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const label = (txt, y, fill, bg) => '<rect x="0" y="' + (y - 14) + '" width="400" height="20" fill="' + (bg || "#000") + '" opacity=".55"/><text x="200" y="' + y + '" text-anchor="middle" ' + font + ' font-size="11" letter-spacing="1.5" fill="' + (fill || "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "cc-bl" + (i % 2 ? " cc-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const HAY = "#e8b931", RED = "#b3261e", DENIM = "#3a6ea5", CREAM = "#f4ecd8", GRN = "#009b3a", PINK = "#e27ea6";
  const bale = (x, y) => '<g><rect x="' + x + '" y="' + y + '" width="54" height="30" rx="3" fill="' + HAY + '" stroke="#9a7414" stroke-width="2"/>' +
    '<path d="M' + (x + 14) + ' ' + y + 'v30M' + (x + 40) + ' ' + y + 'v30" stroke="#8a5a14" stroke-width="2"/>' +
    Array.from({ length: 5 }, (_, i) => '<path d="M' + (x + 4) + ' ' + (y + 5 + i * 5) + 'h46" stroke="#c9961f" stroke-width="1" opacity=".7"/>').join("") + '</g>';

  /* 1. Ashland on the Green + Pink Lines, the 'L' over Lake St */
  function ccstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (52 + i * 40) + '" y="96" width="28" height="18" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><rect x="34" y="88" width="332" height="44" rx="8" fill="#d7dce1" stroke="#7d868f" stroke-width="2"/>' + win +
      '<rect x="34" y="118" width="332" height="5" fill="' + GRN + '"/><rect x="330" y="94" width="30" height="20" rx="3" fill="#1c2630"/>' +
      '<rect x="282" y="90" width="44" height="7" rx="1" fill="#111"/><text x="304" y="96" text-anchor="middle" ' + font + ' font-size="5" fill="#ffb84a">HARLEM/LAKE</text><circle cx="358" cy="126" r="3" fill="#fff6c2"/></g>';
    const canopy = '<rect x="0" y="54" width="400" height="10" fill="#6b7a70"/><path d="M0 54l200 -14l200 14z" fill="#8a9a90"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (18 + i * 74) + '" y="64" width="6" height="68" fill="#5e6a62"/>').join("");
    const posts = Array.from({ length: 6 }, (_, i) => '<rect x="' + (20 + i * 76) + '" y="150" width="10" height="70" fill="#5e6a62"/><path d="M' + (20 + i * 76) + ' 152l-14 -10M' + (30 + i * 76) + ' 152l14 -10" stroke="#5e6a62" stroke-width="4"/>').join("");
    const flats = '<g><rect x="0" y="66" width="80" height="154" fill="#8a5a44"/><rect x="320" y="74" width="80" height="146" fill="#6e4a3a"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (10 + (i % 2) * 36) + '" y="' + (74 + Math.floor(i / 2) * 26) + '" width="22" height="16" fill="#f1d58a" opacity=".5"/><rect x="' + (330 + (i % 2) * 36) + '" y="' + (82 + Math.floor(i / 2) * 26) + '" width="22" height="16" fill="#f1d58a" opacity=".5"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ccs1)"/>' +
      '<g class="cc-bird"><path d="M20 16q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      flats + canopy +
      '<rect x="0" y="132" width="400" height="20" fill="#4d5a52"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 134l10 16l10 -16" stroke="#3b4640" stroke-width="2" fill="none"/>').join("") +
      train + '<rect x="0" y="130" width="400" height="5" fill="#cfd5d8"/>' + posts +
      '<rect x="0" y="220" width="400" height="40" fill="#5d5a55"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="40" y="4" width="320" height="28" rx="3" fill="#111"/><rect x="40" y="4" width="160" height="4" fill="' + GRN + '"/><rect x="200" y="4" width="160" height="4" fill="' + PINK + '"/>' +
      '<text x="54" y="27" ' + font + ' font-size="16" fill="#fff">Ashland</text>' +
      '<rect x="196" y="11" width="74" height="17" rx="8.5" fill="' + GRN + '"/><text x="233" y="23.5" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">GREEN</text>' +
      '<rect x="276" y="11" width="74" height="17" rx="8.5" fill="' + PINK + '"/><text x="313" y="23.5" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">PINK</text>' +
      label("LAKE ST · ASHLAND AVE · THE WEST SIDE", 214, CREAM),
      sky("ccs1", "#8cc8f0", "#f4e2c2"));
  }

  /* 2. In the middle of the barn */
  function ccbarn() {
    const barn = '<g><path d="M110 92l90 -54l90 54v110h-180z" fill="' + RED + '" stroke="#5a120e" stroke-width="3"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M' + (122 + i * 15) + ' ' + (i < 6 ? 86 - i * 9 : 86 - (11 - i) * 9) + 'v' + (116 - (i < 6 ? 86 - i * 9 : 86 - (11 - i) * 9) + 86) + '" stroke="#8e1c16" stroke-width="1.2"/>').join("") +
      '<path d="M102 96l98 -60l98 60" stroke="#f4ecd8" stroke-width="6" fill="none" stroke-linejoin="round"/>' +
      '<rect x="182" y="66" width="36" height="30" fill="#2a1408" stroke="#f4ecd8" stroke-width="3"/><path d="M182 66l36 30M218 66l-36 30" stroke="#f4ecd8" stroke-width="2"/>' +
      '<rect x="190" y="78" width="20" height="18" fill="' + HAY + '"/>' +
      '<rect x="160" y="128" width="80" height="74" fill="#2a1408" stroke="#f4ecd8" stroke-width="4"/><path d="M160 128l80 74M240 128l-80 74" stroke="#f4ecd8" stroke-width="3"/>' +
      '<rect x="170" y="150" width="60" height="52" fill="#3a2010" opacity=".6"/>' + bale(173, 172) + '</g>';
    const vane = '<rect x="198" y="18" width="4" height="22" fill="#2a2a2a"/><g class="cc-vane"><path d="M182 20h36l-6 -5M218 20l-6 5" stroke="#2a2a2a" stroke-width="3" fill="none"/><path d="M182 20l8 -6v12z" fill="#2a2a2a"/></g>';
    const flies = [[60, 120], [90, 150], [320, 110], [350, 160], [300, 140], [40, 170]].map((p, i) => '<circle class="cc-fly' + (i % 3 ? " cc-fly" + (i % 3 + 1) : "") + '" cx="' + p[0] + '" cy="' + p[1] + '" r="2.2" fill="#fff6a0"/>').join("");
    const fence = Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 42) + '" y="176" width="5" height="34" fill="#7a5234"/>').join("") +
      '<rect x="0" y="182" width="104" height="4" fill="#7a5234"/><rect x="0" y="196" width="104" height="4" fill="#7a5234"/><rect x="296" y="182" width="104" height="4" fill="#7a5234"/><rect x="296" y="196" width="104" height="4" fill="#7a5234"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ccs2)"/>' + stars(10) +
      '<circle cx="330" cy="46" r="20" fill="#ffe7a8" opacity=".9"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#5a6a2a"/><path d="M0 200q100 -10 200 0t200 0v6h-400z" fill="#6f8034"/>' +
      fence + barn + vane + bale(40, 206) + bale(70, 186) + bale(100, 206) + bale(262, 206) + bale(300, 206) + bale(282, 186) + flies +
      label("IN THE MIDDLE OF THE BARN · HAY", 254, HAY),
      sky("ccs2", "#2b2552", "#e8915a"));
  }

  /* 3. The Union Stock Yard Gate, Exchange Ave */
  function ccstockyard() {
    const stone = "#d8c9a6", dark = "#a8946a";
    const gate = '<g>' +
      '<rect x="70" y="92" width="260" height="110" fill="' + stone + '" stroke="' + dark + '" stroke-width="2"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M70 ' + (106 + i * 12) + 'h80M250 ' + (106 + i * 12) + 'h80" stroke="' + dark + '" stroke-width="1" opacity=".6"/>').join("") +
      '<path d="M150 202v-62q50 -46 100 0v62z" fill="#3a3226"/>' +
      '<path d="M84 202v-44q24 -26 48 0v44z" fill="#3a3226"/><path d="M268 202v-44q24 -26 48 0v44z" fill="#3a3226"/>' +
      '<rect x="62" y="84" width="276" height="10" fill="' + dark + '"/>' +
      '<path d="M150 140q50 -46 100 0" stroke="' + dark + '" stroke-width="5" fill="none"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (154 + i * 11.5) + ' ' + (i < 5 ? 132 - i * 7 : 132 - (8 - i) * 7) + 'l' + (i < 4 ? -3 : i > 4 ? 3 : 0) + ' -8" stroke="' + dark + '" stroke-width="2"/>').join("") +
      '<path d="M176 84l24 -28l24 28z" fill="' + stone + '" stroke="' + dark + '" stroke-width="2"/>' +
      /* the carved steer head on the keystone */
      '<g transform="translate(200 70)"><ellipse cx="0" cy="4" rx="9" ry="11" fill="#c2b28a" stroke="' + dark + '" stroke-width="1.5"/>' +
      '<path d="M-8 -2q-14 -2 -18 -12M8 -2q14 -2 18 -12" stroke="#c2b28a" stroke-width="4" fill="none" stroke-linecap="round"/>' +
      '<ellipse cx="0" cy="11" rx="5" ry="3.5" fill="' + dark + '"/></g>' +
      '<rect x="58" y="202" width="284" height="8" fill="' + dark + '"/></g>';
    const tumble = '<g class="cc-tumble"><circle cx="20" cy="222" r="13" fill="none" stroke="#8a6a3a" stroke-width="2"/><path d="M8 216q12 10 24 0M10 228q10 -12 20 0M20 209v26" stroke="#8a6a3a" stroke-width="1.5" fill="none"/></g>';
    const dust = '<g class="cc-dust"><circle cx="300" cy="226" r="6" fill="#c9b48a" opacity=".5"/><circle cx="312" cy="230" r="4" fill="#c9b48a" opacity=".4"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ccs3)"/>' +
      '<g class="cc-bird"><path d="M20 26q6 -6 12 0q6 -6 12 0" stroke="#5a4a3a" stroke-width="2" fill="none"/></g>' +
      '<rect x="0" y="150" width="400" height="60" fill="#8a7a62" opacity=".35"/>' + gate +
      '<rect x="0" y="210" width="400" height="50" fill="#9a8460"/><path d="M0 236h400" stroke="#7a6648" stroke-width="2" stroke-dasharray="12 10"/>' +
      tumble + dust +
      label("UNION STOCK YARD GATE · THE CHI-TOWN RODEO", 254, CREAM),
      sky("ccs3", "#f0b36a", "#f8e2b8"));
  }

  /* 4. The Double Door stage */
  function ccstage() {
    const beam = (x, cls, col) => '<g class="' + cls + '" style="transform-origin:' + x + 'px 20px"><path d="M' + (x - 4) + ' 20l-40 170h88l-40 -170z" fill="' + col + '" opacity=".22"/></g>';
    const hands = Array.from({ length: 12 }, (_, i) => '<g class="cc-hand' + (i % 2 ? " cc-hand2" : "") + '"><rect x="' + (10 + i * 33) + '" y="' + (196 + (i % 3) * 6) + '" width="8" height="30" rx="4" fill="#1a1410"/><circle cx="' + (14 + i * 33) + '" cy="' + (194 + (i % 3) * 6) + '" r="6" fill="#1a1410"/></g>').join("");
    const heads = Array.from({ length: 14 }, (_, i) => '<circle cx="' + (i * 30 + 6) + '" cy="' + (230 + (i % 2) * 4) + '" r="16" fill="#0e0b08"/>').join("");
    const amp = (x) => '<rect x="' + x + '" y="128" width="50" height="58" rx="3" fill="#1d1d22" stroke="#444" stroke-width="2"/><circle cx="' + (x + 25) + '" cy="150" r="13" fill="#2c2c33" stroke="#555" stroke-width="2"/><circle cx="' + (x + 25) + '" cy="174" r="7" fill="#2c2c33" stroke="#555" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="#120c14"/>' +
      '<rect x="0" y="0" width="400" height="26" fill="#2a1f24"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (24 + i * 48) + '" y="16" width="14" height="10" fill="#555"/>').join("") +
      '<rect x="20" y="30" width="360" height="100" fill="#2a1030"/><path d="M20 30q30 60 0 100M380 30q-30 60 0 100" fill="#6a1a2a"/>' +
      '<text x="200" y="92" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="44" fill="' + HAY + '" stroke="#000" stroke-width="4" paint-order="stroke">HAY</text>' +
      '<text x="200" y="116" text-anchor="middle" ' + font + ' font-size="10" letter-spacing="3" fill="' + CREAM + '">LIVE ON MILWAUKEE AVE</text>' +
      '<rect x="0" y="184" width="400" height="8" fill="#3a2a20"/><rect x="0" y="130" width="400" height="56" fill="#2a1e18"/>' +
      amp(30) + amp(320) +
      '<path d="M200 186v-40" stroke="#888" stroke-width="3"/><rect x="194" y="134" width="12" height="18" rx="6" fill="#555"/>' +
      '<g transform="rotate(-4 120 176)"><rect x="96" y="166" width="48" height="18" fill="#f6f1e4"/><rect x="100" y="170" width="36" height="2" fill="#9a927e"/><rect x="100" y="175" width="28" height="2" fill="#9a927e"/><rect x="100" y="180" width="32" height="2" fill="#9a927e"/></g>' +
      beam(90, "cc-beam", HAY) + beam(200, "cc-beam cc-beam2", RED) + beam(310, "cc-beam", DENIM) +
      '<circle class="cc-bl" cx="90" cy="20" r="5" fill="#fff6c2"/><circle class="cc-bl cc-bl2" cx="200" cy="20" r="5" fill="#fff6c2"/><circle class="cc-bl" cx="310" cy="20" r="5" fill="#fff6c2"/>' +
      hands + heads +
      label("DOUBLE DOOR · MILWAUKEE AVE · HOMETOWN SHOW", 254, HAY));
  }

  /* 5. W Madison St and N Central Park Ave, the Garfield Park gold dome behind */
  function cccorner() {
    const dome = '<g><rect x="130" y="96" width="140" height="40" fill="#d9cfb8" stroke="#a89c80" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (138 + i * 19) + '" y="102" width="8" height="34" fill="#efe8d6"/>').join("") +
      '<rect x="160" y="74" width="80" height="24" fill="#d9cfb8" stroke="#a89c80" stroke-width="2"/>' +
      '<path d="M164 74q36 -56 72 0z" fill="#e2b13a" stroke="#9a7414" stroke-width="2"/><path d="M200 26v-8" stroke="#9a7414" stroke-width="3"/><circle cx="200" cy="16" r="3" fill="#e2b13a"/>' +
      '<path d="M182 70q4 -26 18 -40M218 70q-4 -26 -18 -40" stroke="#c9961f" stroke-width="1.5" fill="none"/></g>' +
      '<g fill="#2c3a2a"><circle cx="100" cy="122" r="26"/><circle cx="70" cy="130" r="20"/><circle cx="300" cy="122" r="26"/><circle cx="330" cy="130" r="20"/></g>';
    const bricks = '<rect x="0" y="136" width="400" height="88" fill="#7a4232"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (142 + i * 8) + 'h400" stroke="#5e3226" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ccs5)"/>' + stars(14) + dome + bricks +
      tag("CRUCIAL CONFLICT", 16, 190, 26, HAY, -5) + tag("GITTY UP", 60, 214, 15, RED, -3) + tag("FLICT", 200, 214, 16, "#fff", -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="352" y="104" width="6" height="120" fill="#2f2f2f"/>' +
      sign(282, 108, 116, "W Madison St") + sign(270, 134, 128, "N Central Park") +
      '<g class="cc-sp"><circle cx="250" cy="176" r="3" fill="' + HAY + '" opacity=".7"/></g><g class="cc-sp cc-sp2"><circle cx="256" cy="170" r="2" fill="' + HAY + '" opacity=".6"/></g>',
      sky("ccs5", "#151a35", "#d9805a"));
  }

  window.SCENES = { ccstation: ccstation, ccbarn: ccbarn, ccstockyard: ccstockyard, ccstage: ccstage, cccorner: cccorner };
})();
