/* ANKHLEJOHN (Capitol Hill, Washington D.C. — THE DMV region) opening scenes. 400 x 260 animated SVGs. CSS classes prefixed ak- */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes akblink{0%,49%{opacity:1}50%,100%{opacity:.15}}.ak-blk{animation:akblink 1s steps(1) infinite}.ak-blk2{animation-delay:.5s}' +
    '@keyframes akflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.35}55%{opacity:.9}}.ak-flk{animation:akflick 2.4s infinite}.ak-flk2{animation-delay:.9s}' +
    '@keyframes akhop{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.ak-hop{animation:akhop .9s ease-in-out infinite}.ak-hop2{animation-delay:.3s}.ak-hop3{animation-delay:.6s}' +
    '@keyframes akroll{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.ak-car{animation:akroll 6s linear infinite}.ak-car2{animation-duration:8s;animation-delay:-4s}' +
    '@keyframes akrollb{from{transform:translateX(520px)}to{transform:translateX(-120px)}}.ak-carb{animation:akrollb 7s linear infinite}' +
    '@keyframes akflame{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.25)}}.ak-flame{transform-box:fill-box;transform-origin:50% 100%;animation:akflame .7s ease-in-out infinite}' +
    '@keyframes akdrift{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.ak-cloud{animation:akdrift 28s linear infinite}.ak-cloud2{animation-delay:-14s}' +
    '@keyframes akbird{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,0)}}.ak-bird{animation:akbird 9s linear infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const bricks = (y0, y1, c) => { let b = ""; for (let y = y0; y < y1; y += 13) for (let x = ((y - y0) / 13) % 2 ? -18 : 0; x < 400; x += 36) b += '<rect x="' + x + '" y="' + y + '" width="34" height="11" fill="' + c + '"/>'; return b; };
  /* WMATA line bullet */
  const bullet = (x, y, color, label, dark) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="' + color + '"/><text x="' + x + '" y="' + (y + 3.6) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="9.5" fill="' + (dark ? "#111" : "#fff") + '">' + label + '</text>';
  const GOLD = "#e8b84a", PURP = "#9b7be0", RED = "#e05a3a";
  const BL = "#009cde", OR = "#ed8b00", SV = "#919d9d";

  /* 1. Eastern Market station (Blue / Orange / Silver), underground: the waffle-coffered concrete vault, the train pulling in, platform lights blinking */
  function akstation() {
    let coffers = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 12; c++) {
      const y = 8 + r * 22, w = 30 - r * 2, x = c * 34 + (r % 2 ? 0 : 0) + 2;
      coffers += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#6e665c" stroke="#4d463e" stroke-width="2"/><rect x="' + (x + 6) + '" y="' + (y + 5) + '" width="' + (w - 12) + '" height="8" fill="#5a534a"/>';
    }
    const car = (x) => '<rect x="' + x + '" y="128" width="168" height="62" rx="5" fill="#c4c9ce" stroke="#6b7177" stroke-width="1.5"/>' +
      '<rect x="' + x + '" y="170" width="168" height="4" fill="' + BL + '"/><rect x="' + x + '" y="175" width="168" height="2" fill="' + OR + '"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 14 + i * 38) + '" y="138" width="26" height="22" rx="3" fill="#1d2630"/>').join("") +
      '<rect x="' + (x + 66) + '" y="136" width="16" height="44" fill="#9ea4aa"/><path d="M' + (x + 74) + ' 136v44" stroke="#6b7177"/>' +
      '<circle cx="' + (x + 26) + '" cy="192" r="5" fill="#222"/><circle cx="' + (x + 142) + '" cy="192" r="5" fill="#222"/>';
    const cab = '<path d="M348 190v-58q0-4 4-4h30q12 4 16 22v40z" fill="#c4c9ce" stroke="#6b7177" stroke-width="1.5"/><path d="M372 134h12q8 4 11 18h-23z" fill="#11161c"/>' +
      '<rect x="348" y="170" width="50" height="4" fill="' + BL + '"/><rect x="374" y="140" width="20" height="7" rx="1" fill="#000"/><text x="384" y="145.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="5" fill="#ffb03c">BLUE</text>' +
      '<circle cx="392" cy="180" r="3" fill="#fff6c2" class="ak-flk"/><circle cx="370" cy="192" r="5" fill="#222"/>';
    let edge = "";
    for (let x = 8; x < 400; x += 26) edge += '<rect x="' + x + '" y="199" width="10" height="3" rx="1.5" fill="#ffd27a" class="ak-blk' + (x % 52 ? " ak-blk2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a2520"/>' +
      '<path d="M0 0h400v100q-200 40-400 0z" fill="#7a7166"/>' + coffers +
      '<path d="M0 100q200 40 400 0v28H0z" fill="#3a342d"/>' +
      '<g class="ak-flk"><rect x="0" y="112" width="400" height="3" fill="#ffe6b0" opacity=".5"/></g>' +
      '<rect x="0" y="122" width="400" height="6" fill="#1e1a16"/>' +
      '<g class="anim-train">' + car(4) + car(176) + cab + '</g>' +
      '<rect x="0" y="196" width="400" height="8" fill="#d8d2c4"/>' + edge +
      '<rect x="0" y="204" width="400" height="56" fill="#8c4a3a"/>' +
      '<rect x="18" y="140" width="14" height="64" fill="#4a3628"/><rect x="18" y="140" width="14" height="4" fill="' + BL + '"/><rect x="18" y="144" width="14" height="3" fill="' + OR + '"/><rect x="18" y="147" width="14" height="3" fill="' + SV + '"/>' +
      '<rect x="70" y="212" width="260" height="40" rx="3" fill="#2b2119" stroke="#fff" stroke-width="1.5"/>' +
      bullet(92, 232, BL, "BL") + bullet(114, 232, OR, "OR") + bullet(136, 232, SV, "SV") +
      '<text x="236" y="237" text-anchor="middle" ' + F + ' font-weight="700" font-size="17" fill="#fff">Eastern Market</text>' +
      '<text x="236" y="248" text-anchor="middle" ' + F + ' font-size="7" fill="#e8dccb">CAPITOL HILL · SE</text>');
  }

  /* 2. Eastern Market, 7th St SE: the 1873 red-brick market hall with tall arched windows, weekend stalls out front, people moving */
  function akmarket() {
    let arches = "";
    for (let i = 0; i < 7; i++) { const x = 48 + i * 44; arches += '<path d="M' + x + ' 168v-46q0-14 14-14t14 14v46z" fill="#ffe2a8" opacity=".8" stroke="#f1e6d0" stroke-width="3"/><path d="M' + (x + 14) + ' 108v60" stroke="#7a3a26" stroke-width="1.5"/>'; }
    let people = "";
    for (let i = 0; i < 12; i++) people += '<g class="ak-hop ' + ["", "ak-hop2", "ak-hop3"][i % 3] + '"><rect x="' + (10 + i * 33) + '" y="222" width="14" height="28" rx="6" fill="' + ["#2a2a3a", "#5a2a2a", "#2a4a3a", "#3a2a4a"][i % 4] + '"/><circle cx="' + (17 + i * 33) + '" cy="216" r="6" fill="' + ["#2a2a3a", "#5a2a2a", "#2a4a3a", "#3a2a4a"][i % 4] + '"/></g>';
    const tent = (x, c) => '<path d="M' + x + ' 196l20-16h40l20 16z" fill="' + c + '"/><rect x="' + (x + 4) + '" y="196" width="72" height="20" fill="#e9dcc0"/><path d="M' + (x + 4) + ' 196v24M' + (x + 76) + ' 196v24" stroke="#555" stroke-width="2"/>' +
      [0, 1, 2, 3].map(i => '<circle cx="' + (x + 14 + i * 17) + '" cy="203" r="4" fill="' + ["#d94a3a", "#f2b134", "#5aa04a", "#e07a2a"][i] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#as2)"/>' +
      '<g class="ak-cloud"><ellipse cx="60" cy="30" rx="34" ry="8" fill="#fff" opacity=".7"/></g><g class="ak-cloud ak-cloud2"><ellipse cx="60" cy="18" rx="22" ry="6" fill="#fff" opacity=".6"/></g>' +
      /* market hall */
      '<rect x="30" y="80" width="340" height="110" fill="#9c3f2a"/><path d="M24 82l176-38 176 38z" fill="#5a4a44"/><rect x="24" y="80" width="352" height="6" fill="#d9c9a8"/>' +
      '<rect x="140" y="88" width="120" height="16" fill="#f4ecd8"/><text x="200" y="100" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#4a2a1e" letter-spacing="1.5">EASTERN MARKET</text>' +
      arches +
      '<rect x="30" y="186" width="340" height="6" fill="#d9c9a8"/>' +
      '<rect x="0" y="192" width="400" height="68" fill="#a8a196"/>' +
      tent(20, "#2f6a8a") + tent(150, "#b8452e") + tent(280, "#3a7a4a") +
      people,
      sky("as2", "#78b3e0", "#e8dcc0"));
  }

  /* 3. Adams Morgan, 18th St NW at night: painted rowhouses in loud colors, a wall mural of color blocks, lit windows, cars rolling */
  function akadams() {
    const house = (x, w, h, c, trim) => '<rect x="' + x + '" y="' + (190 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><rect x="' + (x - 2) + '" y="' + (186 - h) + '" width="' + (w + 4) + '" height="6" fill="' + trim + '"/>' +
      [0, 1].map(r => [0, 1, 2].map(k => '<rect x="' + (x + 8 + k * (w - 16) / 3) + '" y="' + (196 - h + 8 + r * 30) + '" width="' + ((w - 16) / 3 - 6) + '" height="18" fill="' + ((r + k) % 2 ? "#ffd98a" : "#2a2438") + '"' + ((r + k) % 2 ? ' class="ak-flk' + (k % 2 ? " ak-flk2" : "") + '"' : "") + '/>').join("")).join("") +
      '<rect x="' + (x + 6) + '" y="168" width="' + (w - 12) + '" height="22" fill="#2a1a10"/><rect x="' + (x + 8) + '" y="170" width="' + (w - 16) + '" height="14" fill="#ffcf70" opacity=".7"/>';
    const car = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="50" height="16" rx="5" fill="' + c + '"/><circle cx="11" cy="' + (y + 17) + '" r="4" fill="#111"/><circle cx="39" cy="' + (y + 17) + '" r="4" fill="#111"/><circle cx="48" cy="' + (y + 6) + '" r="2.5" fill="#fff8c0"/></g>';
    const carb = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="50" height="16" rx="5" fill="' + c + '"/><circle cx="11" cy="' + (y + 17) + '" r="4" fill="#111"/><circle cx="39" cy="' + (y + 17) + '" r="4" fill="#111"/><circle cx="2" cy="' + (y + 6) + '" r="2.5" fill="#ff4a3a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#as3)"/>' + stars(16) +
      house(0, 84, 96, "#d9485a", "#f4e3c0") + house(84, 76, 108, "#f2b134", "#fff4d6") + house(160, 80, 92, "#3fa8b8", "#e8f4f4") +
      /* mural wall of color blocks */
      '<rect x="240" y="86" width="80" height="104" fill="#2a2a3a"/>' +
      '<rect x="246" y="92" width="32" height="44" fill="' + RED + '"/><rect x="282" y="92" width="32" height="24" fill="' + GOLD + '"/><rect x="282" y="120" width="32" height="40" fill="' + PURP + '"/><rect x="246" y="140" width="32" height="44" fill="#3fa86a"/><circle cx="298" cy="174" r="8" fill="#f4f1e6"/>' +
      house(320, 80, 102, "#8e6bd8", "#f0e8ff") +
      '<rect x="0" y="190" width="400" height="70" fill="#2e2f34"/><rect x="0" y="188" width="400" height="5" fill="#8d8a84"/><path d="M0 226h400" stroke="#e8c547" stroke-width="3" stroke-dasharray="26 14"/>' +
      car("ak-car", 198, "#e8e2d2") + carb("ak-carb", 234, RED) + car("ak-car ak-car2", 198, BL) +
      '<rect x="134" y="10" width="132" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="200" y="24" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">18th St NW</text>' +
      '<text x="200" y="46" text-anchor="middle" ' + A + ' font-size="13" fill="' + GOLD + '" letter-spacing="2">ADAMS MORGAN</text>',
      sky("as3", "#0a0b22", "#3a2a5a"));
  }

  /* 4. The Library of Congress, Jefferson Building on Capitol Hill: pale granite front, the green copper dome topped with the gold Torch of Learning, birds crossing */
  function aklibrary() {
    let cols = "";
    for (let i = 0; i < 8; i++) cols += '<rect x="' + (120 + i * 21) + '" y="150" width="9" height="46" fill="#e8e2d4" stroke="#b8b0a0" stroke-width="1"/>';
    let win = "";
    for (let i = 0; i < 6; i++) win += '<rect x="' + (36 + i * 14) + '" y="160" width="7" height="14" fill="#5a6a7a"/><rect x="' + (304 + i * 14) + '" y="160" width="7" height="14" fill="#5a6a7a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#as4)"/>' +
      '<g class="ak-bird"><path d="M0 40q5-5 10 0q5-5 10 0" stroke="#333" stroke-width="1.5" fill="none"/></g>' +
      '<g class="ak-cloud"><ellipse cx="40" cy="60" rx="30" ry="7" fill="#fff" opacity=".7"/></g>' +
      /* wings */
      '<rect x="20" y="140" width="360" height="60" fill="#d8d0bf" stroke="#a89f8c" stroke-width="1.5"/><rect x="16" y="134" width="368" height="8" fill="#c8bfac"/>' + win +
      /* central pavilion */
      '<rect x="110" y="118" width="180" height="82" fill="#e2dccd" stroke="#a89f8c" stroke-width="1.5"/><path d="M106 120l94-22 94 22z" fill="#d0c7b4" stroke="#a89f8c" stroke-width="1.5"/>' + cols +
      /* drum + green copper dome + gold lantern and torch */
      '<rect x="160" y="80" width="80" height="26" fill="#d8d0bf" stroke="#a89f8c" stroke-width="1.2"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (166 + i * 15) + '" y="85" width="6" height="16" fill="#8a96a0"/>').join("") +
      '<path d="M156 82q44-68 88 0z" fill="#4f9a86" stroke="#2f6a5a" stroke-width="1.5"/>' +
      [0, 1, 2, 3].map(i => '<path d="M' + (170 + i * 20) + ' 82q' + (30 - i * 20) / 3 + ' -40 ' + (200 - (170 + i * 20)) / 1.5 + ' -48" stroke="#2f6a5a" stroke-width="1" fill="none"/>').join("") +
      '<rect x="193" y="26" width="14" height="14" fill="' + GOLD + '" stroke="#8a6a1a" stroke-width="1"/><path d="M196 26q4-8 4-10q0 2 4 10z" fill="' + GOLD + '"/>' +
      '<path d="M196 18q4-14 4-16q2 6 4 16z" fill="#ff9a2a" class="ak-flame"/>' +
      /* steps + plaza */
      '<rect x="130" y="200" width="140" height="6" fill="#cfc8b8"/><rect x="120" y="206" width="160" height="6" fill="#c2bba9"/>' +
      '<rect x="0" y="212" width="400" height="48" fill="#7f8a72"/>' +
      '<rect x="128" y="226" width="144" height="22" rx="3" fill="#1f2a3a" stroke="' + GOLD + '" stroke-width="1.5"/><text x="200" y="241" text-anchor="middle" ' + F + ' font-weight="700" font-size="9.5" fill="#f4ecd8">LIBRARY OF CONGRESS</text>',
      sky("as4", "#86bde6", "#f0e6d2"));
  }

  /* 5. The corner: Pennsylvania Ave SE & 8th St SE (Barracks Row) on Capitol Hill, his name on the brick, RFK Stadium's wavy bowl behind */
  function akcorner() {
    return svg(
      '<rect width="400" height="260" fill="#14100e"/>' +
      '<rect x="0" y="0" width="400" height="100" fill="url(#as5)"/>' + stars(9) +
      /* RFK Stadium: round bowl with the wavy roofline */
      '<path d="M40 100v-34q40-14 80 0q40 14 80 0q40-14 80 0q40 14 80 0v34z" fill="#c9c2b4" opacity=".85"/>' +
      '<path d="M40 66q40-14 80 0q40 14 80 0q40-14 80 0q40 14 80 0" stroke="#efe9dc" stroke-width="3" fill="none"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => '<rect x="' + (50 + i * 22) + '" y="76" width="6" height="22" fill="#8f877a"/>').join("") +
      bricks(100, 212, "#6b3428") +
      tag("ANKHLEJOHN", 14, 166, 42, GOLD, -5) + tag("SHAAP", 34, 204, 20, PURP, -3) + tag("BIG LORDI", 200, 200, 20, RED, -4) +
      '<rect x="0" y="212" width="400" height="48" fill="#8d8b85"/><rect x="0" y="210" width="400" height="4" fill="#b1aea6"/>' +
      '<g class="ak-car ak-car2"><rect x="0" y="236" width="56" height="16" rx="5" fill="' + PURP + '"/><circle cx="12" cy="253" r="4" fill="#111"/><circle cx="44" cy="253" r="4" fill="#111"/></g>' +
      '<rect x="336" y="58" width="5" height="156" fill="#4a5058"/>' +
      '<rect x="262" y="56" width="134" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="329" y="71" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">Pennsylvania Ave SE</text>' +
      '<rect x="262" y="80" width="134" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="329" y="95" text-anchor="middle" ' + F + ' font-weight="700" font-size="11.5" fill="#fff">8th St SE</text>' +
      '<rect x="300" y="108" width="72" height="16" rx="2" fill="#7a1f2a" stroke="#fff" stroke-width="1"/><text x="336" y="119.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#fff">BARRACKS ROW</text>',
      sky("as5", "#0b1430", "#4a3a5a"));
  }

  window.SCENES = { akstation, akmarket, akadams, aklibrary, akcorner };
})();
