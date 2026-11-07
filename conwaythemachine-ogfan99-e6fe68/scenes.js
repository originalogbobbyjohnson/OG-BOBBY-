/* conwaythemachine scenes (Regions tab: Upstate New York; East Side Buffalo, Genesee-Moselle / May St). 400 x 260 SVGs. CSS classes prefixed cw- (the page's own anim-train is kept).
   0 Humboldt-Hospital Metro Rail station under Main St, 1 the Buffalo Museum of Science in MLK Park with the basin fountain, 2 a snowy Bills game out in Orchard Park,
   3 the Broadway Market hall on the East Side, 4 Genesee St & Moselle St with CONWAY tagged and the Liberty Building's two statues on the skyline. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cwflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.35}55%{opacity:.9}}.cw-flk{animation:cwflick 2.6s infinite}.cw-flk2{animation-delay:.9s}' +
    '@keyframes cwjet{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.82)}}.cw-jet{transform-box:fill-box;transform-origin:50% 100%;animation:cwjet 1.2s ease-in-out infinite}' +
    '@keyframes cwdrop{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(22px);opacity:0}}.cw-dr{animation:cwdrop 1.1s ease-in infinite}.cw-dr2{animation-delay:.35s}.cw-dr3{animation-delay:.7s}' +
    '@keyframes cwball{0%{transform:translate(0,0) rotate(0)}50%{transform:translate(120px,-56px) rotate(180deg)}100%{transform:translate(240px,0) rotate(360deg)}}.cw-ball{transform-box:fill-box;transform-origin:50% 50%;animation:cwball 3.2s ease-in-out infinite}' +
    '@keyframes cwbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.cw-bob{animation:cwbob .8s ease-in-out infinite}.cw-bob2{animation-delay:-.4s}' +
    '@keyframes cwflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-7deg)}}.cw-flag{transform-box:fill-box;transform-origin:0 50%;animation:cwflag 1.8s ease-in-out infinite}' +
    '@keyframes cwwalk{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.cw-walk{animation:cwwalk 16s linear infinite}.cw-walk2{animation-delay:-8s;animation-duration:19s}' +
    '@keyframes cwglow{0%,100%{opacity:.5}50%{opacity:1}}.cw-glow{animation:cwglow 2.6s ease-in-out infinite}.cw-g2{animation-delay:-1.3s}' +
    '@keyframes cwspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cw-sp{animation:cwspray 1.4s ease-out infinite}.cw-sp2{animation-delay:.45s}' +
    '@keyframes cwsnow{from{transform:translateY(-20px)}to{transform:translateY(270px)}}.cw-sn{animation:cwsnow 7s linear infinite}.cw-sn2{animation-delay:-2.3s;animation-duration:8s}.cw-sn3{animation-delay:-4.6s;animation-duration:6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="' + (txt.length * 9 + 16) + '" height="20" rx="10" fill="' + color + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + (txt.length * 9 + 16) / 2) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const snow = n => Array.from({ length: n }, (_, i) => '<circle class="cw-sn cw-sn' + (i % 3 + 1) + '" cx="' + ((i * 71) % 400) + '" cy="' + ((i * 37) % 100 - 20) + '" r="' + (i % 2 ? 1.5 : 2.2) + '" fill="#fff" opacity=".85"/>').join("");
  const NFTA = "#1f4e79", GOLD = "#f0c64a", BBLUE = "#00338d", BRED = "#c60c30", STEEL = "#d7dde4";

  /* 0. Humboldt-Hospital, underground under Main St: cream and terracotta tiles, the black station sign with the MR bullet, the silver Metro Rail car pulling in */
  function cwstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 42) + '" y="120" width="28" height="22" rx="3" fill="#cfe6f7" opacity=".9"/>').join("");
    const tr = '<g class="anim-train"><rect x="16" y="108" width="324" height="72" rx="10" fill="#c3c9d1" stroke="#5b6270" stroke-width="2"/>' + win +
      '<rect x="16" y="150" width="324" height="6" fill="' + NFTA + '"/><rect x="16" y="157" width="324" height="3" fill="' + GOLD + '"/>' +
      '<rect x="318" y="116" width="18" height="32" rx="3" fill="#2b3340"/><circle cx="332" cy="170" r="4" fill="#fff6c2"/>' +
      '<rect x="160" y="112" width="24" height="62" rx="2" fill="none" stroke="#5b6270" stroke-width="2"/><path d="M172 112v62" stroke="#5b6270" stroke-width="1.5"/></g>';
    const tiles = Array.from({ length: 40 }, (_, i) => '<rect x="' + ((i % 20) * 20) + '" y="' + (22 + Math.floor(i / 20) * 34) + '" width="20" height="34" fill="' + ((i + Math.floor(i / 20)) % 2 ? "#e9dcc2" : "#f3ead7") + '"/>').join("") +
      '<rect x="0" y="22" width="400" height="6" fill="#b5532f"/><rect x="0" y="84" width="400" height="6" fill="#b5532f"/>';
    return svg(
      '<rect width="400" height="260" fill="#efe5d0"/>' + tiles +
      '<rect x="0" y="0" width="400" height="22" fill="#20242b"/>' + [36, 166, 296].map((x, i) => '<rect class="cw-flk' + (i === 2 ? " cw-flk2" : "") + '" x="' + x + '" y="8" width="66" height="5" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="94" width="400" height="10" fill="' + NFTA + '"/><rect x="0" y="104" width="400" height="84" fill="#272b33"/>' + tr +
      '<rect x="0" y="182" width="400" height="8" fill="#f2c200"/><rect x="0" y="190" width="400" height="70" fill="#7f7b75"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 50) + '" y="190" width="50" height="70" fill="none" stroke="#6f6b65" stroke-width="1"/>').join("") +
      '<rect x="56" y="32" width="288" height="50" rx="4" fill="#111"/><rect x="56" y="32" width="288" height="4" fill="#fff"/>' +
      '<text x="74" y="66" ' + font + ' font-size="23" fill="#fff">Humboldt-Hospital</text>' + badge(296, 58, "MR", NFTA) +
      '<text x="76" y="78" ' + font + ' font-size="8" fill="#9cc7ea" letter-spacing="2">METRO RAIL  ·  MAIN ST  ·  TO THE EAST SIDE</text>' +
      [10, 390].map(x => '<rect x="' + (x - 8) + '" y="22" width="16" height="160" fill="#4a5260"/>').join("") +
      '<rect x="150" y="214" width="100" height="5" rx="2" fill="#fff6c2" opacity=".4" class="cw-flk"/>',
      "");
  }

  /* 1. The Buffalo Museum of Science in MLK Park: the long pale limestone hall with its tall columns, the basin in front with the fountain jets dancing */
  function cwmuseum() {
    const cols = Array.from({ length: 8 }, (_, i) => {
      const x = 144 + i * 16;
      return '<rect x="' + x + '" y="70" width="9" height="62" fill="#efe8d8"/><path d="M' + (x + 3) + ' 72v58M' + (x + 6) + ' 72v58" stroke="#d6cdb8" stroke-width="1"/><rect x="' + (x - 2) + '" y="66" width="13" height="5" fill="#e3dac6"/>';
    }).join("");
    const wins = (x0, n) => Array.from({ length: n }, (_, i) => '<rect x="' + (x0 + i * 22) + '" y="84" width="12" height="30" rx="1" fill="#6f7f8f"/><rect x="' + (x0 + i * 22) + '" y="80" width="12" height="4" fill="#d6cdb8"/>').join("");
    const jets = [150, 200, 250].map((x, i) => '<path class="cw-jet" style="animation-delay:' + (-i * 0.4) + 's" d="M' + (x - 4) + ' 196q4 -' + (34 + i % 2 * 12) + ' 8 0z" fill="#d9f0ff" opacity=".9"/>' +
      [0, 1, 2].map(k => '<circle class="cw-dr cw-dr' + (k + 1) + '" cx="' + (x - 10 + k * 10) + '" cy="' + (166 - i % 2 * 10) + '" r="2" fill="#e8f6ff"/>').join("")).join("");
    const trees = [[26, 150, 30], [66, 156, 22], [344, 152, 28], [384, 158, 22]].map(([x, y, r]) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="30" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 6) + '" r="' + r + '" fill="#3f7a3a"/><circle cx="' + (x + 9) + '" cy="' + (y - 14) + '" r="' + (r * 0.6) + '" fill="#4f8f45"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cw1)"/>' +
      '<rect x="60" y="72" width="280" height="64" fill="#e8e0cc"/><rect x="56" y="62" width="288" height="12" fill="#ddd4be"/><rect x="52" y="56" width="296" height="7" fill="#e8e0cc"/>' +
      '<path d="M136 58L200 34L264 58z" fill="#efe8d8" stroke="#d6cdb8" stroke-width="2"/><rect x="132" y="56" width="136" height="12" fill="#e3dac6"/>' +
      wins(68, 3) + wins(276, 3) + cols +
      '<text x="200" y="64" text-anchor="middle" ' + font + ' font-size="7" fill="#8a7f68" letter-spacing="2">MUSEUM OF SCIENCE</text>' +
      '<rect x="130" y="132" width="140" height="6" fill="#d6cdb8"/><rect x="120" y="138" width="160" height="6" fill="#cbc2ac"/>' +
      '<rect x="0" y="144" width="400" height="116" fill="#5f9a4a"/>' + trees +
      '<ellipse cx="200" cy="204" rx="150" ry="28" fill="#9c9486"/><ellipse cx="200" cy="203" rx="142" ry="23" fill="#4a86b5"/>' +
      '<path class="cw-glow" d="M90 206q30 -6 60 0t60 0t60 0t40 0" stroke="#a7d3f2" stroke-width="2" fill="none"/>' + jets +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="3">MLK PARK  ·  EAST SIDE</text>',
      sky("cw1", "#7fb6e6", "#d6ebf8"));
  }

  /* 2. Bills game out in Orchard Park in the snow: blue and red stands, the green field with white lines, the ball spiraling, snow coming down (no logos) */
  function cwbills() {
    const crowd = Array.from({ length: 64 }, (_, i) => {
      const x = 8 + (i % 32) * 12.2, y = 66 + Math.floor(i / 32) * 16;
      return '<circle class="cw-bob' + (i % 2 ? " cw-bob2" : "") + '" cx="' + x + '" cy="' + y + '" r="5" fill="' + (i % 3 === 0 ? BRED : i % 3 === 1 ? BBLUE : "#f2f2f2") + '"/>';
    }).join("");
    const lines = Array.from({ length: 9 }, (_, i) => '<path d="M' + (40 + i * 40) + ' 120L' + (10 + i * 47.5) + ' 250" stroke="#fff" stroke-width="2" opacity=".85"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cw2)"/>' +
      '<rect x="0" y="40" width="400" height="16" fill="#26324a"/>' + [30, 130, 230, 330].map(x => '<rect class="cw-glow" x="' + x + '" y="44" width="40" height="8" rx="2" fill="#fff7d6"/>').join("") +
      '<rect x="0" y="56" width="400" height="44" fill="#12305e"/>' + crowd +
      '<rect x="0" y="100" width="400" height="10" fill="' + BRED + '"/><rect x="0" y="110" width="400" height="10" fill="#0a1e3d"/>' +
      '<path d="M0 120H400V260H0z" fill="#2f7d3a"/><path d="M0 120H400V140H0z" fill="#e9eef2" opacity=".55"/>' + lines +
      '<path d="M0 248H400" stroke="#e9eef2" stroke-width="8" opacity=".7"/>' +
      '<g class="cw-ball"><ellipse cx="70" cy="190" rx="10" ry="6" fill="#7a3b1c"/><path d="M64 190h12" stroke="#fff" stroke-width="1.5"/></g>' +
      '<rect x="128" y="8" width="144" height="26" rx="4" fill="#0b1426" stroke="' + BBLUE + '" stroke-width="2"/><text x="200" y="27" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '" letter-spacing="2">ORCHARD PARK</text>' +
      snow(34),
      sky("cw2", "#1d2a44", "#4c5f80"));
  }

  /* 3. The Broadway Market on the East Side: the long brick market hall, the stalls out front, shoppers passing, a flag on the roof */
  function cwmarket() {
    const arches = Array.from({ length: 6 }, (_, i) => '<path d="M' + (66 + i * 46) + ' 140v-34a14 14 0 0 1 28 0v34z" fill="#3a2a22"/><path d="M' + (66 + i * 46) + ' 108a14 14 0 0 1 28 0" stroke="#e6d4b8" stroke-width="3" fill="none"/>').join("");
    const stalls = [[40, BRED], [128, "#2f7d3a"], [216, GOLD], [304, BBLUE]].map(([x, c]) => '<rect x="' + x + '" y="168" width="70" height="34" fill="#6b4a32"/><path d="M' + (x - 4) + ' 168h78l-6 -14h-66z" fill="' + c + '"/><path d="M' + x + ' 154v14M' + (x + 14) + ' 154v14M' + (x + 28) + ' 154v14M' + (x + 42) + ' 154v14M' + (x + 56) + ' 154v14" stroke="#fff" stroke-width="3" opacity=".6"/>' +
      [0, 1, 2, 3].map(k => '<circle cx="' + (x + 12 + k * 15) + '" cy="164" r="5" fill="' + ["#f0e2c2", "#d9a441", "#8bb84a", "#e07a5f"][k] + '"/>').join("")).join("");
    const people = [0, 1, 2].map(i => '<g class="cw-walk' + (i === 1 ? " cw-walk2" : "") + '" style="animation-delay:' + (-i * 5) + 's"><rect x="0" y="206" width="12" height="26" rx="5" fill="' + ["#2b3a55", "#7a2a2a", "#3a5a3a"][i] + '"/><circle cx="6" cy="200" r="6" fill="#5a4636"/><path d="M3 232v12M9 232v12" stroke="#222" stroke-width="3"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cw3)"/>' +
      '<rect x="40" y="76" width="320" height="76" fill="#9c4a30"/><rect x="36" y="68" width="328" height="10" fill="#7a3824"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M40 ' + (84 + i * 7) + 'h320" stroke="#874028" stroke-width="1"/>').join("") + arches +
      '<rect x="122" y="80" width="156" height="18" rx="2" fill="#efe3c8"/><text x="200" y="93" text-anchor="middle" ' + font + ' font-size="10" fill="#7a3824" letter-spacing="1.5">BROADWAY MARKET</text>' +
      '<path d="M200 68v-30" stroke="#555" stroke-width="2"/><rect class="cw-flag" x="200" y="38" width="26" height="16" fill="' + BBLUE + '"/><rect class="cw-flag" x="200" y="44" width="26" height="4" fill="#fff"/>' +
      '<rect x="0" y="152" width="400" height="108" fill="#8d8a84"/><rect x="0" y="244" width="400" height="16" fill="#5b5853"/>' + stalls + people,
      sky("cw3", "#8ec0e8", "#e3f0f8"));
  }

  /* 4. Genesee St & Moselle St on the East Side at dusk: green signs, CONWAY tagged big on the brick, the Liberty Building downtown with its two statues on top, light snow */
  function cwcorner() {
    const lib = (x) => '<rect x="' + x + '" y="38" width="40" height="110" fill="#c9c3b6"/>' +
      Array.from({ length: 12 }, (_, r) => '<rect x="' + (x + 6) + '" y="' + (46 + r * 8) + '" width="28" height="3" fill="#7d8796" opacity=".8"/>').join("") +
      '<rect x="' + (x + 6) + '" y="30" width="28" height="10" fill="#bdb6a8"/>';
    const statue = (x) => '<path d="M' + (x - 3) + ' 30v-14h6v14z" fill="#6fae9c"/><circle cx="' + x + '" cy="13" r="3" fill="#6fae9c"/><path d="M' + (x + 2) + ' 16l3 -12" stroke="#6fae9c" stroke-width="2"/><circle class="cw-glow" cx="' + (x + 5) + '" cy="3" r="2.5" fill="#ffd27a"/>';
    const bricks = Array.from({ length: 12 }, (_, r) => '<path d="M150 ' + (110 + r * 10) + 'h250" stroke="#6a3426" stroke-width="1.2"/>').join("") +
      Array.from({ length: 60 }, (_, i) => { const r = Math.floor(i / 12), c = i % 12; return '<path d="M' + (152 + c * 21 + (r % 2) * 10) + ' ' + (110 + r * 10) + 'v10" stroke="#6a3426" stroke-width="1"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cw4)"/>' +
      '<rect x="0" y="120" width="400" height="40" fill="#2a3346"/><rect x="40" y="96" width="40" height="64" fill="#353f55"/><rect x="250" y="88" width="34" height="72" fill="#353f55"/><rect x="300" y="104" width="46" height="56" fill="#2f394d"/>' +
      '<g transform="translate(60,6)">' + lib(160) + statue(170) + statue(190) + '</g>' +
      '<rect x="150" y="104" width="250" height="132" fill="#8a4434"/>' + bricks +
      tag("CONWAY", 168, 176, 46, STEEL, -6) + tag("DRUMWORK", 214, 214, 22, BRED, -4) +
      '<rect class="cw-sp" x="356" y="140" width="4" height="4" fill="' + STEEL + '"/><rect class="cw-sp cw-sp2" x="364" y="150" width="3" height="3" fill="' + BRED + '"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#4c4f55"/><rect x="0" y="232" width="400" height="5" fill="#8e9196"/>' +
      '<rect x="56" y="70" width="5" height="166" fill="#5a5f66"/>' + sign(8, 64, 104, "Genesee St") + sign(14, 88, 92, "Moselle St") +
      '<rect class="cw-glow" x="98" y="40" width="22" height="8" rx="3" fill="#fff1b8"/><path d="M61 44h40" stroke="#5a5f66" stroke-width="3"/>' +
      snow(22),
      sky("cw4", "#20263f", "#c06a52"));
  }

  window.SCENES = { cwstation: cwstation, cwmuseum: cwmuseum, cwbills: cwbills, cwmarket: cwmarket, cwcorner: cwcorner };
})();
