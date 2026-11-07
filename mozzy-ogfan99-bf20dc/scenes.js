/* mozzy scenes (Regions tab: The Bay Area / Northern California; Oak Park, Sacramento). CSS classes prefixed mz- (the page's own anim-train is kept).
   1 M L King Jr Blvd / Broadway in Oak Park: the SacRT 68 "Oak Park" bus pulling up to the stop, palms, the low Broadway storefronts.
   2 The Guild Theater on 35th St in Oak Park: cream Moorish stucco front, arched windows, the marquee with chasing bulbs.
   3 McClatchy Park, Oak Park: the hoop court under the big trees ("hoop court was overcrowded"), a ball dropping through the net.
   4 Downtown Sacramento's arena: the glass front with the giant hangar doors open, purple light, the crowd inside (no logos).
   5 Broadway and 35th St, Oak Park: green signs, MOZZY tagged, the downtown Sacramento skyline with the stepped crown tower behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mzflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.mz-flk{animation:mzflick 2.2s infinite}.mz-flk2{animation-delay:.7s}' +
    '@keyframes mzcar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.mz-car{animation:mzcar 7s linear infinite}.mz-car2{animation-delay:-3.5s}' +
    '@keyframes mzcarL{from{transform:translateX(540px)}to{transform:translateX(-160px)}}.mz-carL{animation:mzcarL 8s linear infinite}.mz-carL2{animation-delay:-4s}' +
    '@keyframes mzchase{0%,100%{opacity:1}50%{opacity:.2}}.mz-bulb{animation:mzchase .8s steps(1) infinite}.mz-bulb2{animation-delay:-.4s}' +
    '@keyframes mzball{0%{transform:translate(-80px,-30px)}45%{transform:translate(0,-4px)}60%{transform:translate(0,20px)}100%{transform:translate(0,64px);opacity:0}}.mz-ball{animation:mzball 2.6s ease-in infinite}' +
    '@keyframes mznet{0%,50%,100%{transform:scaleY(1)}62%{transform:scaleY(1.25)}}.mz-net{transform-box:fill-box;transform-origin:50% 0%;animation:mznet 2.6s ease-in infinite}' +
    '@keyframes mzsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.mz-sway{transform-box:fill-box;transform-origin:50% 100%;animation:mzsway 4s ease-in-out infinite}.mz-sway2{animation-delay:-2s}' +
    '@keyframes mzbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.mz-beam{transform-box:fill-box;transform-origin:50% 100%;animation:mzbeam 4s ease-in-out infinite}.mz-beam2{animation-delay:-2s}' +
    '@keyframes mzjump{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.mz-crowd{animation:mzjump .7s ease-in-out infinite}.mz-crowd2{animation-delay:-.35s}' +
    '@keyframes mzspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mz-sp{animation:mzspray 1.4s ease-out infinite}.mz-sp2{animation-delay:.45s}' +
    '@keyframes mzblink{0%,100%{opacity:.25}50%{opacity:1}}.mz-bl{animation:mzblink 1.6s ease-in-out infinite}.mz-bl2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const palm = (x, base, h, cls) => '<g class="mz-sway ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q4 ' + (-h / 2) + ' 0 ' + (-h) + '" stroke="#6b4a2a" stroke-width="5" fill="none"/>' +
    [[-26, -4], [-18, 10], [24, -2], [18, 12], [0, -16]].map(d => '<path d="M' + x + ' ' + (base - h) + 'q' + (d[0] / 2) + ' ' + (d[1] - 10) + ' ' + d[0] + ' ' + (d[1] + 4) + '" stroke="#2f6b3a" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const tree = (x, base, r, c) => '<rect x="' + (x - 4) + '" y="' + (base - r) + '" width="8" height="' + r + '" fill="#5a3d26"/><circle cx="' + x + '" cy="' + (base - r - 10) + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * 0.6) + '" cy="' + (base - r + 2) + '" r="' + (r * 0.7) + '" fill="' + c + '"/><circle cx="' + (x + r * 0.6) + '" cy="' + (base - r) + '" r="' + (r * 0.75) + '" fill="' + c + '"/>';
  const SAC = "#005ba6", GOLD = "#f2b134", PURP = "#6c4bd6";

  /* 1. M L King Jr Blvd / Broadway, the SacRT 68 */
  function mzstation() {
    const wins = Array.from({ length: 7 }, (_, i) => '<rect x="' + (52 + i * 38) + '" y="104" width="28" height="22" rx="2" fill="#1f2a33"/>').join("");
    const bus = '<g class="anim-train"><rect x="34" y="96" width="316" height="52" rx="8" fill="#f4f6f8" stroke="#8a929a" stroke-width="2"/>' + wins +
      '<rect x="34" y="130" width="316" height="6" fill="' + SAC + '"/><rect x="34" y="136" width="316" height="3" fill="' + GOLD + '"/>' +
      '<rect x="190" y="98" width="8" height="48" fill="#3a3e46"/>' +
      '<path d="M334 98q16 2 16 18v22h-18z" fill="#1f2a33"/><rect x="334" y="100" width="14" height="9" rx="1" fill="#111"/><text x="341" y="107.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">68</text>' +
      '<circle cx="84" cy="150" r="8" fill="#111"/><circle cx="164" cy="150" r="8" fill="#111"/><circle cx="300" cy="150" r="8" fill="#111"/><circle cx="346" cy="138" r="3" fill="#fff6c2"/></g>';
    const shops = '<g><rect x="0" y="60" width="110" height="62" fill="#c98f5a"/><rect x="110" y="70" width="90" height="52" fill="#e7d2a6"/><rect x="200" y="56" width="80" height="66" fill="#8a5b3e"/><rect x="280" y="66" width="120" height="56" fill="#d6b07a"/>' +
      '<rect x="10" y="80" width="40" height="22" fill="#2b3a44"/><rect x="60" y="80" width="40" height="22" fill="#2b3a44"/><rect x="120" y="84" width="70" height="20" fill="#2b3a44"/><rect x="214" y="76" width="52" height="24" fill="#2b3a44"/><rect x="292" y="82" width="96" height="20" fill="#2b3a44"/>' +
      '<rect x="0" y="72" width="110" height="5" fill="#a83a2a"/><rect x="280" y="76" width="120" height="5" fill="#2a6a5a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mzs1)"/>' + shops + palm(36, 96, 70) + palm(366, 96, 80, "mz-sway2") +
      bus +
      '<rect x="0" y="156" width="400" height="10" fill="#c9c3b6"/><rect x="0" y="166" width="400" height="94" fill="#3c3d42"/><path d="M0 212h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="16 12"/>' +
      car("mz-car", 0, 196, "#c94a3a") + car("mz-carL", 0, 236, "#3a6fb0") + car("mz-carL mz-carL2", 0, 236, GOLD) +
      /* stop sign post */
      '<rect x="368" y="110" width="4" height="56" fill="#555"/><rect x="356" y="100" width="28" height="20" rx="2" fill="' + SAC + '"/><text x="370" y="114" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">68</text>' +
      /* station sign */
      '<rect x="44" y="12" width="312" height="44" rx="3" fill="#111"/><text x="58" y="31" ' + font + ' font-size="15" fill="#fff">M L King Jr Blvd / Broadway</text>' +
      '<text x="58" y="49" ' + font + ' font-size="10" fill="#bfc7d0" letter-spacing="2">OAK PARK · SACRAMENTO</text>' + badge(268, 44, "68", SAC) + badge(304, 44, "BUS", "#3a3e46"),
      sky("mzs1", "#f6b26b", "#fbe3b8"));
  }

  /* 2. The Guild Theater */
  function mzguild() {
    const bulbs = (y, x0, x1, cls) => { let s = ""; for (let x = x0, i = 0; x <= x1; x += 10, i++) s += '<circle class="mz-bulb ' + (i % 2 ? "mz-bulb2" : "") + '" cx="' + x + '" cy="' + y + '" r="2.4" fill="#ffe08a"/>'; return s; };
    return svg(
      '<rect width="400" height="260" fill="url(#mzs2)"/>' +
      tree(30, 200, 30, "#2f5a34") + tree(372, 200, 30, "#2f5a34") +
      /* stucco front with Moorish arches and a stepped parapet */
      '<path d="M70 200V74h20v-10h40v-8h140v8h40v10h20v126z" fill="#efe1c4"/>' +
      '<path d="M70 74h260" stroke="#c9b48c" stroke-width="3"/>' +
      [110, 170, 230, 290].map(x => '<path d="M' + (x - 16) + ' 120v-22q16 -22 32 0v22z" fill="#5b3d2c"/><path d="M' + (x - 12) + ' 120v-20q12 -16 24 0v20z" fill="#e7b25a" opacity=".55"/>').join("") +
      '<rect x="182" y="40" width="36" height="20" rx="2" fill="#c45a3a"/><path d="M182 40l18 -14l18 14z" fill="#b04a2e"/>' +
      /* marquee */
      '<rect x="96" y="128" width="208" height="38" fill="#1b1b22" stroke="#c9a24a" stroke-width="2"/>' + bulbs(126, 100, 300) + bulbs(168, 100, 300) +
      '<text x="200" y="154" text-anchor="middle" ' + font + ' font-size="22" fill="#ffd56b" letter-spacing="6">GUILD</text>' +
      '<rect x="150" y="168" width="100" height="32" fill="#3a2a22"/><rect x="156" y="172" width="40" height="28" fill="#6a4a36"/><rect x="204" y="172" width="40" height="28" fill="#6a4a36"/>' +
      '<rect x="0" y="200" width="400" height="14" fill="#c9c3b6"/><rect x="0" y="214" width="400" height="46" fill="#3c3d42"/>' +
      car("mz-car", 0, 228, "#7a4ad0") + car("mz-car mz-car2", 0, 228, "#d0d4da") +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" opacity=".85">35TH ST · OAK PARK</text>',
      sky("mzs2", "#2d2350", "#d9785a"));
  }

  /* 3. McClatchy Park hoop court */
  function mzpark() {
    return svg(
      '<rect width="400" height="260" fill="url(#mzs3)"/>' +
      tree(40, 140, 34, "#2f6a34") + tree(120, 132, 40, "#3a7a3a") + tree(300, 134, 38, "#2f6a34") + tree(370, 140, 32, "#3a7a3a") +
      '<rect x="0" y="136" width="400" height="20" fill="#5c8f3e"/>' +
      /* court */
      '<path d="M20 256L70 150h260l50 106z" fill="#3b6b8f"/><path d="M20 256L70 150h260l50 106z" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<path d="M150 150v46h100v-46" stroke="#fff" stroke-width="2" fill="#a8452f" opacity=".9"/><path d="M168 196q32 26 64 0" stroke="#fff" stroke-width="2" fill="none"/>' +
      '<path d="M110 150q90 90 180 0" stroke="#fff" stroke-width="2" fill="none"/>' +
      /* hoop */
      '<rect x="197" y="70" width="6" height="80" fill="#555"/><rect x="172" y="52" width="56" height="36" fill="#f4f4f4" stroke="#333" stroke-width="2"/><rect x="188" y="66" width="24" height="16" fill="none" stroke="#c0392b" stroke-width="2"/>' +
      '<ellipse cx="200" cy="90" rx="13" ry="3" fill="none" stroke="#e8642c" stroke-width="3"/>' +
      '<path class="mz-net" d="M188 90l4 16h16l4 -16M193 90l3 16M200 90v16M207 90l-3 16" stroke="#fff" stroke-width="1.4" fill="none"/>' +
      '<g class="mz-ball"><circle cx="200" cy="80" r="7" fill="#e8742c"/><path d="M193 80h14M200 73v14" stroke="#7a3a12" stroke-width="1"/></g>' +
      '<text x="200" y="24" text-anchor="middle" ' + font + ' font-size="11" fill="#1f3a22">McCLATCHY PARK · OAK PARK</text>',
      sky("mzs3", "#8fcbe8", "#e9f2d8"));
  }

  /* 4. Downtown arena: glass front, hangar doors open */
  function mzarena() {
    const panes = Array.from({ length: 8 }, (_, i) => '<path d="M' + (60 + i * 36) + ' 70v120" stroke="#9fb0c8" stroke-width="1.5"/>').join("");
    const crowd = (cls, y, c) => '<g class="' + cls + '">' + Array.from({ length: 18 }, (_, i) => '<circle cx="' + (98 + i * 12) + '" cy="' + y + '" r="5" fill="' + c + '"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mzs4)"/>' +
      '<g class="mz-beam"><path d="M140 70L110 0h20z" fill="' + PURP + '" opacity=".35"/></g><g class="mz-beam mz-beam2"><path d="M260 70L270 0h20z" fill="' + PURP + '" opacity=".35"/></g>' +
      /* body: sandstone fins + glass */
      '<path d="M20 196V78l40 -14h280l40 14v118z" fill="#c7a77a"/>' +
      '<rect x="60" y="64" width="280" height="132" fill="#2c3550"/>' + panes +
      /* the open hangar doors: bright inside */
      '<rect x="90" y="96" width="220" height="100" fill="#5a3fa8"/><rect x="90" y="96" width="220" height="100" fill="url(#mzglow)"/>' +
      '<rect x="80" y="60" width="240" height="36" fill="#3a4466"/><path d="M80 60h240" stroke="#aeb8cc" stroke-width="3"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (84 + i * 47) + '" y="64" width="40" height="28" fill="#4a5578"/>').join("") +
      crowd("mz-crowd", 180, "#1b1430") + crowd("mz-crowd mz-crowd2", 190, "#120c22") +
      '<rect x="0" y="196" width="400" height="64" fill="#b9b2a4"/><path d="M0 220h400" stroke="#a39c8e" stroke-width="2"/>' +
      '<g class="mz-bl"><circle cx="40" cy="186" r="4" fill="#ffe9a8"/></g><g class="mz-bl mz-bl2"><circle cx="360" cy="186" r="4" fill="#ffe9a8"/></g>' +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="11" fill="#3a3530" letter-spacing="3">DOWNTOWN SACRAMENTO</text>',
      sky("mzs4", "#120c22", "#4a3070") + '<radialGradient id="mzglow" cx="50%" cy="40%" r="60%"><stop offset="0" stop-color="#ffd27a" stop-opacity=".8"/><stop offset="1" stop-color="#5a3fa8" stop-opacity="0"/></radialGradient>');
  }

  /* 5. Broadway and 35th St */
  function mzcorner() {
    const towers = '<g fill="#2b2848"><rect x="20" y="92" width="34" height="46"/><rect x="60" y="74" width="28" height="64"/><rect x="250" y="80" width="30" height="58"/><rect x="290" y="96" width="40" height="42"/><rect x="340" y="86" width="30" height="52"/></g>' +
      /* the stepped-crown tower */
      '<g fill="#3a3560"><rect x="140" y="58" width="44" height="80"/><rect x="146" y="46" width="32" height="14"/><rect x="152" y="36" width="20" height="12"/><path d="M156 36l6 -14l6 14z"/></g>' +
      '<g fill="#ffe7a0">' + [0, 1, 2, 3, 4].map(i => '<rect class="mz-bl ' + (i % 2 ? "mz-bl2" : "") + '" x="' + (146 + (i % 3) * 12) + '" y="' + (68 + i * 12) + '" width="6" height="4"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mzs5)"/>' + towers +
      '<rect x="0" y="130" width="400" height="94" fill="#8a4a32"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#6f3a26" stroke-width="1"/>').join("") +
      Array.from({ length: 11 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#6f3a26" stroke-width="1"/>').join("")).join("") +
      tag("MOZZY", 24, 196, 58, GOLD, -6) + tag("OAK PARK", 132, 218, 20, "#c9b6ff", -4) + tag("MACRAMENTO", 18, 220, 15, "#ff8a6b", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 140, "Broadway") + sign(270, 124, 100, "35th St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="mz-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      palm(226, 130, 60) +
      '<g class="mz-sp"><circle cx="200" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="mz-sp mz-sp2"><circle cx="206" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("mzs5", "#241b44", "#e8875a"));
  }

  window.SCENES = { mzstation: mzstation, mzguild: mzguild, mzpark: mzpark, mzarena: mzarena, mzcorner: mzcorner };
})();
