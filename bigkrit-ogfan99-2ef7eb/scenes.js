/* bigkrit scenes (Regions tab: More of the South; Meridian, Mississippi). CSS classes and ids prefixed kx- (the page's own anim-train is kept).
   1 Meridian Union Station on Front St: the red-brick depot with arched windows, the silver Crescent pulling in.
   2 The Dentzel Carousel in Highland Park: the twelve-sided pavilion, hand-carved horses going round.
   3 Grandma's kitchen, where he cut his first records: the sampler and mic on the table, a pot on the stove, the pecan tree out the window.
   4 Front Street downtown, The MAX (Mississippi Arts + Entertainment Experience): a candy-red Cadillac slabbin' past.
   5 22nd Ave and 6th St, downtown Meridian: green signs, KRIT tagged on the brick, the Threefoot Building behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kxcloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.kx-cloud{animation:kxcloud 26s linear infinite}.kx-cloud2{animation-delay:-13s}' +
    '@keyframes kxbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}.kx-bob{animation:kxbob 1.4s ease-in-out infinite}.kx-bob2{animation-delay:-.7s}' +
    '@keyframes kxspin{from{transform:translateX(0)}to{transform:translateX(-120px)}}.kx-ride{animation:kxspin 4s linear infinite}' +
    '@keyframes kxsteam{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-30px);opacity:0}}.kx-st{animation:kxsteam 2s ease-out infinite}.kx-st2{animation-delay:-1s}' +
    '@keyframes kxled{0%,100%{opacity:.3}50%{opacity:1}}.kx-led{animation:kxled 1s steps(2) infinite}.kx-led2{animation-delay:-.5s}' +
    '@keyframes kxcar{from{transform:translateX(-200px)}to{transform:translateX(480px)}}.kx-car{animation:kxcar 6s linear infinite;animation-delay:-2.6s}' +
    '@keyframes kxsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.kx-tree{transform-box:fill-box;transform-origin:50% 100%;animation:kxsway 4s ease-in-out infinite}' +
    '@keyframes kxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kx-sp{animation:kxspray 1.4s ease-out infinite}.kx-sp2{animation-delay:.45s}' +
    '@keyframes kxwave{0%,100%{transform:skewX(0)}50%{transform:skewX(-8deg)}}.kx-flag{transform-box:fill-box;transform-origin:0% 50%;animation:kxwave 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const bricks = (x, y, w, h, c, m) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let r = 0; r < h / 8; r++) { s += '<path d="M' + x + ' ' + (y + r * 8) + 'h' + w + '" stroke="' + m + '" stroke-width=".8"/>'; for (let k = 0; k < w / 18; k++) s += '<path d="M' + (x + k * 18 + (r % 2) * 9) + ' ' + (y + r * 8) + 'v8" stroke="' + m + '" stroke-width=".8"/>'; } return s; };
  const AMTK = "#1f4e79", GOLD = "#d6a84a", CANDY = "#b23a48", SKY = "#5ec2e8";

  /* 1. Meridian Union Station, the Crescent */
  function kxstop() {
    const arches = [0, 1, 2, 3, 4].map(i => '<path d="M' + (66 + i * 56) + ' 112v-24a12 12 0 0 1 24 0v24z" fill="#2f3a46" stroke="#e8dcc4" stroke-width="2"/>').join("");
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (38 + i * 44) + '" y="152" width="30" height="16" rx="3" fill="#24323e"/>').join("");
    const train = '<g class="anim-train"><rect x="20" y="142" width="350" height="46" rx="8" fill="#c9cdd2" stroke="#7d868f" stroke-width="2"/>' + win +
      '<rect x="20" y="172" width="350" height="4" fill="#c9302c"/><rect x="20" y="176" width="350" height="3" fill="#fff"/><rect x="20" y="179" width="350" height="4" fill="' + AMTK + '"/>' +
      '<path d="M370 146q16 4 18 24v14h-18z" fill="#c9cdd2" stroke="#7d868f" stroke-width="2"/><circle cx="384" cy="178" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kxs1)"/>' +
      '<g class="kx-cloud"><ellipse cx="80" cy="30" rx="34" ry="9" fill="#fff" opacity=".8"/></g>' +
      bricks(40, 60, 320, 70, "#9c4a32", "#7a3524") + '<path d="M30 60h340l-20 -22H50z" fill="#5a4a42"/>' +
      '<rect x="180" y="16" width="40" height="44" fill="#9c4a32"/><path d="M174 18h52l-26 -14z" fill="#5a4a42"/><circle cx="200" cy="38" r="11" fill="#f4efe2" stroke="#3a2a22" stroke-width="2"/><path d="M200 38v-7M200 38l5 3" stroke="#222" stroke-width="1.6"/>' +
      arches + '<rect x="40" y="118" width="320" height="12" fill="#e8dcc4"/>' +
      '<rect x="0" y="130" width="400" height="12" fill="#bdb6a8"/>' + train +
      '<rect x="0" y="188" width="400" height="8" fill="#5b4a3a"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="196" width="12" height="4" fill="#4a3a2c"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#8f8a80"/>' +
      '<rect x="96" y="208" width="208" height="42" rx="3" fill="#111"/><text x="108" y="226" ' + font + ' font-size="13" fill="#fff">Meridian Union Station</text><text x="108" y="242" ' + font + ' font-size="10" fill="#cfd8e0">Crescent · Front St</text>' + badge(242, 236, "AMTK", AMTK),
      sky("kxs1", "#7cb7e0", "#f3dcb6"));
  }

  /* 2. Dentzel Carousel, Highland Park */
  function kxcarousel() {
    const horse = (x, c, cls) => '<g class="kx-bob ' + cls + '"><rect x="' + (x + 13) + '" y="104" width="2" height="66" fill="' + GOLD + '"/><path d="M' + x + ' 138q4 -10 16 -10h8l6 -8 4 2 -4 8q2 8 -2 12h-26z" fill="' + c + '" stroke="#3a2a22" stroke-width="1.2"/><path d="M' + (x + 2) + ' 142v10M' + (x + 22) + ' 142v10" stroke="' + c + '" stroke-width="3"/><path d="M' + (x + 8) + ' 132h10v6h-10z" fill="' + CANDY + '"/></g>';
    let ride = ""; const cols = ["#f4efe2", "#d9a441", "#a8714a", "#f4efe2", "#8a8f96"];
    for (let i = 0; i < 10; i++) ride += horse(70 + i * 40, cols[i % 5], i % 2 ? "kx-bob2" : "");
    return svg(
      '<rect width="400" height="260" fill="url(#kxs2)"/>' +
      '<g class="kx-cloud"><ellipse cx="60" cy="26" rx="30" ry="8" fill="#fff" opacity=".8"/></g>' +
      '<g fill="#3f6b3a"><circle cx="20" cy="110" r="34"/><circle cx="384" cy="104" r="36"/></g>' +
      '<path d="M50 70L200 26 350 70z" fill="#6b4a32" stroke="#3a2a22" stroke-width="2"/><path d="M200 26v-12" stroke="#3a2a22" stroke-width="2"/><g class="kx-flag"><path d="M200 14h16l-4 4 4 4h-16z" fill="' + CANDY + '"/></g>' +
      '<rect x="50" y="70" width="300" height="16" fill="#e8dcc4" stroke="#3a2a22" stroke-width="1.5"/>' + Array.from({ length: 12 }, (_, i) => '<circle cx="' + (62 + i * 25) + '" cy="78" r="3" fill="' + (i % 2 ? GOLD : "#fff6c2") + '" class="kx-led' + (i % 2 ? " kx-led2" : "") + '"/>').join("") +
      '<rect x="56" y="86" width="288" height="96" fill="#2a1f1a"/><rect x="186" y="86" width="28" height="96" fill="#c9a24a" stroke="#7a5a1a" stroke-width="2"/>' +
      '<svg x="56" y="86" width="288" height="96" viewBox="56 86 288 96"><g class="kx-ride">' + ride + '</g></svg>' +
      '<rect x="52" y="182" width="296" height="10" fill="#7a5a3a"/>' + [56, 128, 200, 272, 344].map(x => '<rect x="' + (x - 3) + '" y="70" width="6" height="112" fill="#e8dcc4" stroke="#3a2a22" stroke-width="1"/>').join("") +
      '<rect x="0" y="192" width="400" height="68" fill="#6c9a4a"/>' +
      '<rect x="112" y="232" width="176" height="18" rx="2" fill="#111" opacity=".75"/><text x="200" y="245" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">DENTZEL CAROUSEL · HIGHLAND PARK</text>',
      sky("kxs2", "#86c3ea", "#e9f4d8"));
  }

  /* 3. Grandma's kitchen studio */
  function kxkitchen() {
    let pads = ""; for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) pads += '<rect x="' + (232 + c * 13) + '" y="' + (176 + r * 9) + '" width="10" height="7" rx="1.5" fill="' + ((r + c) % 3 ? "#d9d4c8" : CANDY) + '"' + ((r * 4 + c) % 5 === 0 ? ' class="kx-led"' : "") + '/>';
    return svg(
      '<rect width="400" height="260" fill="#f1e2b8"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 0v150" stroke="#e4d2a2" stroke-width="6"/>').join("") +
      '<rect x="40" y="26" width="140" height="96" fill="url(#kxs3)" stroke="#fff" stroke-width="6"/><path d="M110 26v96M40 74h140" stroke="#fff" stroke-width="4"/>' +
      '<g class="kx-tree"><rect x="78" y="80" width="8" height="42" fill="#6b4a2a"/><ellipse cx="82" cy="70" rx="32" ry="22" fill="#4f7a2e"/><circle cx="70" cy="70" r="3" fill="#8a5a2a"/><circle cx="92" cy="64" r="3" fill="#8a5a2a"/><circle cx="84" cy="80" r="3" fill="#8a5a2a"/></g>' +
      '<path d="M34 22h152v8H34z" fill="' + CANDY + '"/><path d="M34 30q19 14 38 0q19 14 38 0q19 14 38 0q19 14 38 0" fill="' + CANDY + '"/>' +
      '<rect x="260" y="70" width="110" height="90" fill="#f4f1e8" stroke="#8a8478" stroke-width="2"/><rect x="266" y="60" width="98" height="12" fill="#3a3a3a"/><circle cx="292" cy="66" r="4" fill="#d24a2a"/><circle cx="338" cy="66" r="4" fill="#3a3a3a"/>' +
      '<rect x="270" y="100" width="90" height="50" rx="3" fill="#2a2a2a"/><path d="M276 54h40l-4 -18h-32z" fill="#5a5a5a"/><g class="kx-st"><path d="M290 32q-6 -8 0 -16" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/></g><g class="kx-st kx-st2"><path d="M302 32q6 -8 0 -16" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/></g>' +
      '<rect x="0" y="160" width="400" height="100" fill="#7a5a3a"/><rect x="0" y="160" width="400" height="10" fill="#8f6b46"/>' +
      '<rect x="222" y="168" width="70" height="46" rx="4" fill="#4a4a50" stroke="#222" stroke-width="2"/>' + pads + '<rect x="228" y="172" width="20" height="4" fill="#5ec2e8" class="kx-led kx-led2"/>' +
      '<rect x="130" y="120" width="4" height="60" fill="#333"/><rect x="120" y="178" width="24" height="6" rx="2" fill="#333"/><rect x="122" y="96" width="20" height="30" rx="10" fill="#9aa3ab" stroke="#333" stroke-width="2"/><path d="M124 104h16M124 110h16M124 116h16" stroke="#555" stroke-width="1"/>' +
      '<ellipse cx="60" cy="196" rx="34" ry="8" fill="#f4f1e8"/><circle cx="50" cy="192" r="6" fill="#e8b84a"/><circle cx="64" cy="192" r="6" fill="#e8b84a"/><circle cx="57" cy="186" r="6" fill="#e8b84a"/>' +
      '<rect x="112" y="232" width="176" height="18" rx="2" fill="#111" opacity=".75"/><text x="200" y="245" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">GRANDMA\'S KITCHEN · FIRST BEATS</text>',
      sky("kxs3", "#8fc8ea", "#e8f4fb"));
  }

  /* 4. Front Street, The MAX, a Cadillac slabbin' past */
  function kxmax() {
    const caddy = '<g class="kx-car"><g transform="translate(0 186)"><path d="M0 22q0 -12 14 -14l30 -2 16 -14h52l18 14 34 4q8 2 8 12v6H0z" fill="' + CANDY + '" stroke="#3a1018" stroke-width="2"/><path d="M64 4h44l12 10H52z" fill="#9cc6e8"/><path d="M0 24h172" stroke="#e8e8e8" stroke-width="2"/>' +
      '<circle cx="36" cy="30" r="12" fill="#222"/><circle cx="36" cy="30" r="7" fill="' + GOLD + '"/><circle cx="136" cy="30" r="12" fill="#222"/><circle cx="136" cy="30" r="7" fill="' + GOLD + '"/><circle cx="170" cy="20" r="3" fill="#fff6c2"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kxs4)"/>' +
      '<g class="kx-cloud"><ellipse cx="300" cy="30" rx="36" ry="9" fill="#fff" opacity=".8"/></g>' +
      bricks(30, 60, 150, 120, "#a85a3a", "#7a3e28") +
      '<rect x="180" y="40" width="190" height="140" fill="#d9d4c8"/><rect x="190" y="52" width="80" height="120" fill="#3c5a6e" opacity=".85"/><path d="M190 92h80M190 132h80M230 52v120" stroke="#d9d4c8" stroke-width="3"/>' +
      '<rect x="280" y="70" width="80" height="60" fill="' + GOLD + '"/><text x="320" y="108" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="#2a1f1a">THE MAX</text>' +
      '<rect x="280" y="136" width="80" height="44" fill="#2a2a2e"/>' +
      [0, 1, 2].map(r2 => [0, 1, 2, 3].map(c2 => '<rect x="' + (40 + c2 * 34) + '" y="' + (74 + r2 * 34) + '" width="20" height="22" fill="#2f3a46"/>').join("")).join("") +
      '<rect x="0" y="180" width="400" height="12" fill="#bdb6a8"/><rect x="0" y="192" width="400" height="68" fill="#55565a"/><path d="M0 238h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      caddy +
      '<rect x="112" y="240" width="176" height="16" rx="2" fill="#111" opacity=".8"/><text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">FRONT ST · DOWNTOWN MERIDIAN</text>',
      sky("kxs4", "#6fb2e0", "#f6e2bc"));
  }

  /* 5. 22nd Ave and 6th St, the Threefoot Building behind */
  function kxcorner() {
    const tower = '<rect x="262" y="40" width="90" height="140" fill="#efe2c4"/><rect x="274" y="22" width="66" height="20" fill="#efe2c4"/><rect x="288" y="8" width="38" height="16" fill="#efe2c4"/><path d="M302 8l5 -8 5 8z" fill="#c97a3a"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12].map(r => [0, 1, 2, 3, 4].map(c => '<rect x="' + (268 + c * 17) + '" y="' + (48 + r * 11) + '" width="10" height="7" fill="#3c5a6e"/>').join("")).join("") +
      '<path d="M262 40h90M274 22h66M288 8h38" stroke="#c97a3a" stroke-width="3"/><path d="M262 44h90" stroke="#3f7a5a" stroke-width="2"/><path d="M274 26h66" stroke="#3f7a5a" stroke-width="2"/>' +
      '<path d="M262 40v140M352 40v140" stroke="#d9c49a" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kxs5)"/>' + tower +
      bricks(0, 110, 240, 118, "#9c4a32", "#7a3524") +
      tag("KRIT", 20, 190, 52, GOLD, -5) + tag("MULTI", 150, 214, 20, SKY, -3) +
      '<g class="kx-sp"><circle cx="226" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="kx-sp kx-sp2"><circle cx="232" cy="162" r="2" fill="' + GOLD + '" opacity=".7"/></g>' +
      '<rect x="252" y="96" width="5" height="132" fill="#5b6168"/>' + sign(262, 104, 104, "22ND AVE") + sign(262, 130, 104, "6TH ST") +
      '<rect x="0" y="228" width="400" height="32" fill="#55565a"/><path d="M0 244h400" stroke="#fff" stroke-width="2" stroke-dasharray="14 12" opacity=".5"/>' +
      '<text x="314" y="214" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">MERIDIAN, MS</text>',
      sky("kxs5", "#ffae7a", "#ffe4bc"));
  }

  window.SCENES = { kxstop, kxcarousel, kxkitchen, kxmax, kxcorner };
})();
