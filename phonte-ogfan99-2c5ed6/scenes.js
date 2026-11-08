/* phonte scenes (Regions tab: The Carolinas; East Greensboro, NC - "Eastside, Bingham St. repper", "the 336 is what raised 'em"). CSS classes and ids prefixed ph- (the page's own anim-train is kept on the bus).
   1 GTA Route 5 (Gorrell St) pulling up at the Apache St & Avalon Rd timepoint in East Greensboro: white bus, blue + green bands, the stop sign with the 5 badge, porch houses and pines.
   2 "I got a room and a microphone" (Who Loves You More / Eternally "one room studio, no amenities"): a bedroom booth at night, mic + pop filter, meters bouncing, the moon in the window.
   3 Friday night lights in Greensboro (he played high school football here, then fullback at NC Central): the field under the lights, a fullback rumbling up the middle.
   4 "Back in the kitchen with a silk apron, let that boy saute" (Dance in the Reign) + "leafy greens, 2 veggies, protein and a starch" (Not Here Anymore): the pan flipping, steam rising.
   5 Bingham St and Hillsboro St on the Eastside: green signs, PHONTE tagged on the brick, NC A&T's Dudley Memorial Building (red brick, white portico, white cupola) behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes phflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.ph-flk{animation:phflick 2.2s infinite}.ph-flk2{animation-delay:.7s}' +
    '@keyframes phmeter{0%,100%{transform:scaleY(.25)}30%{transform:scaleY(1)}60%{transform:scaleY(.5)}}.ph-m{transform-box:fill-box;transform-origin:50% 100%;animation:phmeter 1.1s ease-in-out infinite}.ph-m2{animation-delay:-.3s}.ph-m3{animation-delay:-.6s}.ph-m4{animation-delay:-.85s}' +
    '@keyframes phnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-46px);opacity:0}}.ph-note{animation:phnote 2.6s ease-out infinite}.ph-note2{animation-delay:-1.3s}' +
    '@keyframes phrun{0%{transform:translateX(-60px)}100%{transform:translateX(250px)}}.ph-run{animation:phrun 4.2s linear infinite}' +
    '@keyframes phflip{0%,60%,100%{transform:translateY(0) rotate(0)}75%{transform:translateY(-26px) rotate(-14deg)}}.ph-flip{transform-box:fill-box;transform-origin:50% 100%;animation:phflip 1.8s ease-in-out infinite}' +
    '@keyframes phsteam{0%{transform:translateY(0) scale(.8);opacity:.6}100%{transform:translateY(-40px) scale(1.4);opacity:0}}.ph-st{transform-box:fill-box;transform-origin:50% 50%;animation:phsteam 2.4s ease-out infinite}.ph-st2{animation-delay:-.8s}.ph-st3{animation-delay:-1.6s}' +
    '@keyframes phsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.ph-sway{transform-box:fill-box;transform-origin:50% 0%;animation:phsway 2.8s ease-in-out infinite}' +
    '@keyframes phcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.ph-car{animation:phcar 8s linear infinite}.ph-car2{animation-delay:-4s}' +
    '@keyframes phspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ph-sp{animation:phspray 1.4s ease-out infinite}.ph-sp2{animation-delay:.45s}' +
    '@keyframes phblink{0%,100%{opacity:.3}50%{opacity:1}}.ph-bl{animation:phblink 1.6s ease-in-out infinite}.ph-bl2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="' + (txt.length * 9 + 14) + '" height="20" rx="10" fill="' + color + '"/><text x="' + (x + (txt.length * 9 + 14) / 2) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const pine = (x, y, s) => '<path d="M' + x + ' ' + (y - 60 * s) + 'l' + (14 * s) + ' ' + (22 * s) + 'h' + (-6 * s) + 'l' + (12 * s) + ' ' + (20 * s) + 'h' + (-7 * s) + 'l' + (13 * s) + ' ' + (18 * s) + 'h' + (-52 * s) + 'l' + (13 * s) + ' ' + (-18 * s) + 'h' + (-7 * s) + 'l' + (12 * s) + ' ' + (-20 * s) + 'h' + (-6 * s) + 'z" fill="#24402e"/><rect x="' + (x - 2 * s) + '" y="' + y + '" width="' + (4 * s) + '" height="' + (8 * s) + '" fill="#4a3426"/>';
  const BLUE = "#1d5fa8", GREEN = "#5cb85c", GOLD = "#f2c14e", CBLUE = "#7bafd4";

  /* 1. GTA Route 5 at Apache St & Avalon Rd */
  function phstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 42) + '" y="116" width="34" height="26" rx="2" fill="#1c2833"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="102" width="320" height="86" rx="10" fill="#f4f5f6" stroke="#8a929a" stroke-width="2"/>' + win +
      '<path d="M40 152h320v8H40z" fill="' + BLUE + '"/><path d="M40 160h320v5H40z" fill="' + GREEN + '"/><path d="M200 152q60 -16 160 -10v10z" fill="' + GREEN + '" opacity=".85"/>' +
      '<rect x="44" y="116" width="16" height="52" fill="#26323c"/><rect x="330" y="106" width="26" height="38" rx="3" fill="#26323c"/>' +
      '<rect x="270" y="105" width="56" height="12" rx="2" fill="#111"/><text x="298" y="114" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">5 GORRELL</text>' +
      '<circle cx="100" cy="188" r="13" fill="#222"/><circle cx="100" cy="188" r="5" fill="#888"/><circle cx="310" cy="188" r="13" fill="#222"/><circle cx="310" cy="188" r="5" fill="#888"/><circle cx="354" cy="172" r="3.5" fill="#fff6c2"/></g>';
    const house = (x, c) => '<g><path d="M' + x + ' 72l26 -18l26 18z" fill="#5b3b2e"/><rect x="' + (x + 4) + '" y="72" width="44" height="28" fill="' + c + '"/><rect x="' + (x + 2) + '" y="86" width="48" height="3" fill="#f1ede4"/><rect x="' + (x + 10) + '" y="76" width="9" height="9" fill="#f6dfa3" class="ph-flk"/><rect x="' + (x + 31) + '" y="76" width="9" height="9" fill="#f6dfa3"/><rect x="' + (x + 21) + '" y="88" width="10" height="12" fill="#3b2a22"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#phs1)"/>' +
      pine(26, 92, 0.9) + pine(374, 92, 1) + house(70, "#d8c9a8") + house(150, "#a9b8c4") + house(236, "#e3d3b5") + pine(326, 96, 0.7) +
      '<rect x="0" y="98" width="400" height="6" fill="#c7c1b5"/>' +
      bus +
      '<rect x="0" y="200" width="400" height="60" fill="#55565b"/><path d="M0 230h400" stroke="#e9d65a" stroke-width="3" stroke-dasharray="20 14"/>' +
      '<rect x="0" y="192" width="400" height="8" fill="#c7c1b5"/>' +
      '<rect x="64" y="207" width="272" height="34" rx="3" fill="#111"/><text x="78" y="230" ' + font + ' font-size="15" fill="#fff">Apache St &amp; Avalon Rd</text>' + badge(298, 224, "5", BLUE),
      sky("phs1", "#6fa3d6", "#f4dcb8"));
  }

  /* 2. A room and a microphone */
  function phroom() {
    const meters = [0, 1, 2, 3, 4, 5].map(i => '<rect class="ph-m ph-m' + (1 + i % 4) + '" x="' + (258 + i * 9) + '" y="150" width="6" height="26" fill="' + (i > 3 ? "#e8553f" : GREEN) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#2b2233"/>' +
      '<rect x="0" y="0" width="400" height="190" fill="#3a2f45"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (14 + i * 18) + '" y="30" width="14" height="14" fill="#4b3d5a"/><rect x="' + (14 + i * 18) + '" y="48" width="14" height="14" fill="#453853"/>').join("") +
      '<rect x="40" y="96" width="110" height="82" rx="3" fill="#18233a" stroke="#c9b28a" stroke-width="5"/><circle cx="118" cy="122" r="14" fill="#f4efd8"/><circle cx="124" cy="118" r="12" fill="#18233a"/>' +
      '<circle cx="62" cy="112" r="1.4" fill="#fff" class="ph-bl"/><circle cx="86" cy="138" r="1.2" fill="#fff" class="ph-bl ph-bl2"/><circle cx="136" cy="156" r="1.3" fill="#fff" class="ph-bl"/>' +
      '<rect x="230" y="28" width="132" height="30" rx="2" fill="#f1e6cc" stroke="#8a6d3b" stroke-width="3"/><text x="296" y="48" text-anchor="middle" ' + font + ' font-size="11" fill="#5a3b1e">HOME IS WHERE</text>' +
      '<rect x="230" y="62" width="132" height="22" rx="2" fill="#f1e6cc" stroke="#8a6d3b" stroke-width="3"/><text x="296" y="78" text-anchor="middle" ' + font + ' font-size="10" fill="#5a3b1e">CHARITY STARTS</text>' +
      '<rect x="0" y="190" width="400" height="70" fill="#5a4030"/><rect x="230" y="176" width="150" height="10" fill="#6b4a32"/><rect x="236" y="186" width="8" height="60" fill="#4a3322"/><rect x="366" y="186" width="8" height="60" fill="#4a3322"/>' +
      '<rect x="248" y="138" width="70" height="40" rx="3" fill="#1a1a1a"/>' + meters +
      '<rect x="326" y="128" width="40" height="48" rx="3" fill="#20242a"/><circle cx="346" cy="162" r="10" fill="#3a3f47"/><circle cx="346" cy="162" r="4" fill="#111"/><circle cx="346" cy="140" r="5" fill="#3a3f47"/>' +
      '<path d="M190 250V140" stroke="#888" stroke-width="4"/><path d="M174 250h32" stroke="#888" stroke-width="5"/><path d="M190 140l-24 -26" stroke="#888" stroke-width="4"/>' +
      '<rect x="150" y="86" width="22" height="34" rx="11" fill="#c9ccd1" stroke="#555" stroke-width="2" transform="rotate(-42 161 103)"/>' +
      '<circle cx="196" cy="88" r="20" fill="none" stroke="#777" stroke-width="2"/><circle cx="196" cy="88" r="18" fill="#222" opacity=".35"/><path d="M196 108l-14 6" stroke="#777" stroke-width="2"/>' +
      '<g fill="' + GOLD + '"><path class="ph-note" d="M232 128v-16l10 -3v16"/><circle class="ph-note" cx="229" cy="128" r="4"/><path class="ph-note ph-note2" d="M214 150v-14l9 -3v14"/><circle class="ph-note ph-note2" cx="211" cy="150" r="3.5"/></g>' +
      '<path d="M98 210q20 -26 46 0" stroke="#222" stroke-width="6" fill="none"/><rect x="90" y="206" width="14" height="18" rx="5" fill="#222"/><rect x="138" y="206" width="14" height="18" rx="5" fill="#222"/>');
  }

  /* 3. Friday night lights */
  function phfield() {
    const light = (x) => '<rect x="' + (x - 2) + '" y="40" width="4" height="70" fill="#777"/><rect x="' + (x - 18) + '" y="26" width="36" height="16" rx="2" fill="#555"/>' +
      [0, 1, 2, 3].map(i => '<circle class="ph-flk' + (i % 2 ? " ph-flk2" : "") + '" cx="' + (x - 12 + i * 8) + '" cy="34" r="3.2" fill="#fffbe0"/>').join("") +
      '<path d="M' + (x - 18) + ' 42L' + (x - 90) + ' 260h180L' + (x + 18) + ' 42z" fill="#fffbe0" opacity=".08"/>';
    const yard = Array.from({ length: 9 }, (_, i) => '<path d="M' + (20 + i * 45) + ' 150L' + (-10 + i * 52) + ' 260" stroke="#e8f3e8" stroke-width="2" opacity=".8"/>').join("");
    const player = '<g class="ph-run"><circle cx="60" cy="168" r="8" fill="#7bafd4"/><rect x="52" y="176" width="16" height="22" rx="4" fill="#7bafd4"/><text x="60" y="192" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">33</text>' +
      '<path d="M54 198l-6 16M66 198l6 16" stroke="#f4f4f4" stroke-width="5" stroke-linecap="round"/><ellipse cx="73" cy="184" rx="6" ry="4" fill="#8b4a22"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#phs3)"/>' +
      '<rect x="0" y="108" width="400" height="38" fill="#2a2f3a"/>' + Array.from({ length: 40 }, (_, i) => '<circle cx="' + (6 + i * 10) + '" cy="' + (118 + (i % 3) * 8) + '" r="3" fill="' + ["#c9b8a0", "#7bafd4", "#e8e2d5"][i % 3] + '" opacity=".75"/>').join("") +
      light(60) + light(340) +
      '<rect x="150" y="56" width="100" height="44" rx="3" fill="#111" stroke="#444" stroke-width="2"/><text x="175" y="72" text-anchor="middle" ' + font + ' font-size="9" fill="#ccc">HOME</text><text x="225" y="72" text-anchor="middle" ' + font + ' font-size="9" fill="#ccc">GUEST</text>' +
      '<text x="175" y="92" text-anchor="middle" ' + font + ' font-size="17" fill="#ffb347" class="ph-flk">21</text><text x="225" y="92" text-anchor="middle" ' + font + ' font-size="17" fill="#ffb347">14</text>' +
      '<rect x="0" y="146" width="400" height="114" fill="#2f7d3a"/>' + yard + '<path d="M0 150h400" stroke="#fff" stroke-width="3"/>' + player,
      sky("phs3", "#0b1326", "#25324f"));
  }

  /* 4. Back in the kitchen with a silk apron */
  function phkitchen() {
    return svg(
      '<rect width="400" height="260" fill="#efe4cf"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="96" width="38" height="18" fill="#dfeef2" stroke="#c4d6db"/><rect x="' + (i * 40 + 20) + '" y="116" width="38" height="18" fill="#dfeef2" stroke="#c4d6db"/>').join("") +
      '<rect x="0" y="0" width="400" height="60" fill="#c9a77a"/><rect x="10" y="8" width="90" height="46" fill="#a9845a"/><rect x="110" y="8" width="90" height="46" fill="#a9845a"/><rect x="300" y="8" width="90" height="46" fill="#a9845a"/>' +
      '<g class="ph-sway"><path d="M240 64h28l6 10l-4 56h-32l-4 -56z" fill="#b3264a"/><path d="M244 64q10 -10 20 0" stroke="#7a1830" stroke-width="2" fill="none"/><path d="M236 86h36" stroke="#e8c26a" stroke-width="3"/></g>' +
      '<rect x="0" y="150" width="400" height="110" fill="#4d4f55"/><rect x="0" y="146" width="400" height="8" fill="#9a9ca2"/>' +
      '<rect x="60" y="154" width="190" height="96" fill="#2c2e33"/><rect x="66" y="160" width="178" height="30" fill="#1d1f23"/>' +
      '<ellipse cx="120" cy="160" rx="34" ry="6" fill="#e8553f" opacity=".7" class="ph-flk"/><ellipse cx="200" cy="160" rx="26" ry="5" fill="#3a3c40"/>' +
      '<g class="ph-flip"><ellipse cx="120" cy="150" rx="40" ry="9" fill="#2a2a2a"/><path d="M160 150h58" stroke="#2a2a2a" stroke-width="7" stroke-linecap="round"/>' +
      '<circle cx="106" cy="144" r="5" fill="#4caf50"/><circle cx="118" cy="142" r="4" fill="#ff8f3a"/><circle cx="130" cy="145" r="5" fill="#6bbf59"/><rect x="110" y="146" width="14" height="5" rx="2" fill="#c98a5a"/></g>' +
      '<ellipse class="ph-st" cx="110" cy="128" rx="10" ry="6" fill="#fff" opacity=".5"/><ellipse class="ph-st ph-st2" cx="126" cy="124" rx="9" ry="6" fill="#fff" opacity=".5"/><ellipse class="ph-st ph-st3" cx="118" cy="120" rx="8" ry="5" fill="#fff" opacity=".5"/>' +
      '<ellipse cx="320" cy="144" rx="52" ry="12" fill="#f8f8f5" stroke="#c9c9c2" stroke-width="2"/>' +
      '<path d="M286 140q8 -10 18 -2q8 -10 16 0z" fill="#3e8e41"/><circle cx="314" cy="140" r="4" fill="#ff8f3a"/><circle cx="322" cy="141" r="4" fill="#ff8f3a"/><circle cx="330" cy="139" r="3" fill="#7cc35b"/><circle cx="336" cy="141" r="3" fill="#7cc35b"/>' +
      '<rect x="338" y="134" width="18" height="9" rx="4" fill="#b06a3a"/><ellipse cx="300" cy="146" rx="9" ry="4" fill="#f3e8c8"/>' +
      '<rect x="280" y="170" width="84" height="22" rx="3" fill="#2c2e33"/><text x="322" y="185" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">SAUTE</text>');
  }

  /* 5. Bingham St & Hillsboro St, A&T's Dudley Building behind */
  function phcorner() {
    const brick = "#9c3d2c";
    const cols = Array.from({ length: 6 }, (_, i) => '<rect x="' + (166 + i * 13) + '" y="60" width="6" height="40" fill="#f3efe6"/>').join("");
    const wins = Array.from({ length: 5 }, (_, i) => '<rect x="' + (108 + i * 12) + '" y="66" width="7" height="12" fill="#2a2f3a"/><rect x="' + (108 + i * 12) + '" y="84" width="7" height="12" fill="#2a2f3a"/><rect x="' + (252 + i * 12) + '" y="66" width="7" height="12" fill="#2a2f3a"/><rect x="' + (252 + i * 12) + '" y="84" width="7" height="12" fill="#2a2f3a"/>').join("");
    const dudley = '<g><rect x="100" y="58" width="200" height="44" fill="' + brick + '"/>' + wins + '<path d="M156 58l44 -16l44 16z" fill="#f3efe6"/><rect x="160" y="56" width="80" height="4" fill="#f3efe6"/>' + cols +
      '<rect x="190" y="22" width="20" height="20" fill="#f3efe6"/><path d="M186 22l14 -12l14 12z" fill="#e6e0d2"/><rect x="198" y="2" width="3" height="10" fill="#e6e0d2"/><rect x="194" y="28" width="12" height="10" fill="#c9c2b3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#phs5)"/>' + pine(40, 100, 0.8) + pine(360, 100, 0.9) + dudley +
      '<rect x="0" y="100" width="400" height="104" fill="#7a4a3a"/>' +
      Array.from({ length: 6 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<rect x="' + (c * 30 + (r % 2) * 15 - 10) + '" y="' + (102 + r * 17) + '" width="28" height="15" fill="#8a5543"/>').join("")).join("") +
      tag("PHONTE", 70, 168, 42, GOLD, -5) + tag("336", 292, 190, 24, CBLUE, -4) +
      '<circle class="ph-sp" cx="236" cy="132" r="3" fill="' + GOLD + '"/><circle class="ph-sp ph-sp2" cx="244" cy="126" r="2.5" fill="' + GOLD + '"/>' +
      '<rect x="0" y="204" width="400" height="56" fill="#55565b"/>' + car("ph-car", 0, 226, "#7bafd4") + car("ph-car ph-car2", 0, 226, "#c0392b") +
      '<rect x="344" y="112" width="5" height="96" fill="#5f6b63"/>' + sign(270, 112, 120, "Bingham St") + sign(270, 138, 120, "Hillsboro St"),
      sky("phs5", "#f2a65a", "#5d6fa8"));
  }

  window.SCENES = { phstation: phstation, phroom: phroom, phfield: phfield, phkitchen: phkitchen, phcorner: phcorner };
})();
