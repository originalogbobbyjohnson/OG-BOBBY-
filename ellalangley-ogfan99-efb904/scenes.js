/* ellalangley scenes (Regions: More of the South / Genres: country; Hope Hull, Alabama, 9 miles southwest of Montgomery). CSS classes prefixed ell- (the page's own anim-train is kept, used on the bus).
   Sources: Wikipedia "Ella Langley" (born Hope Hull May 3 1999; homeschooled in Montgomery; Hooper Academy, Hope Hull, class of 2017, first public performance at its 2016 talent show;
   taught herself guitar at 14 on her late grandfather's restrung guitar and practiced in front of the family's cow pasture; Auburn University, forestry; played bars across Alabama before Nashville in 2019);
   Wikipedia "Montgomery Area Transit System" (The M, Intermodal Center hub, 495 Molton St downtown); Hooper Academy site (380 Fischer Rd, Hope Hull; the Colts);
   AARoads US 31 South (Mobile Hwy runs to Hope Hull, I-65 Exit 164, Fischer Rd spurs to the private school from a light on US 31); Toomer's Corner, Auburn (live oaks rolled in toilet paper).
   Every 9 is drawn as a path (round head + straight stem), never as a font glyph. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const CREAM = "#f4e9d8", ORANGE = "#e07a2e", GOLD = "#f2c94c", NAVY = "#0c2340", PINE = "#2f5a34";
  const css = '<style>' +
    '@keyframes ellglow{0%,100%{opacity:.45}50%{opacity:1}}.ell-glow{animation:ellglow 2.4s ease-in-out infinite}.ell-g2{animation-delay:-1.2s}' +
    '@keyframes ellnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-58px);opacity:0}}.ell-nt{animation:ellnote 3.2s ease-out infinite}.ell-nt2{animation-delay:-1.1s}.ell-nt3{animation-delay:-2.2s}' +
    '@keyframes ellcloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.ell-cl{animation:ellcloud 14s ease-in-out infinite alternate}' +
    '@keyframes ellsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.ell-sway{transform-box:fill-box;transform-origin:50% 0;animation:ellsway 2.6s ease-in-out infinite}.ell-s2{animation-delay:-1.3s}' +
    '@keyframes ellgraze{0%,100%{transform:translateY(0)}50%{transform:translateY(4px)}}.ell-graze{animation:ellgraze 3s ease-in-out infinite}.ell-gz2{animation-delay:-1.5s}' +
    '@keyframes ellbeam{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(10deg)}}.ell-beam{transform-box:fill-box;transform-origin:50% 0;animation:ellbeam 3s ease-in-out infinite}' +
    '@keyframes elldrive{0%{transform:translateX(-140px)}100%{transform:translateX(440px)}}.ell-drive{animation:elldrive 9s linear infinite;animation-delay:-2s}' +
    '@keyframes ellfluff{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(60px,-70px);opacity:0}}.ell-fl{animation:ellfluff 4s ease-out infinite}.ell-fl2{animation-delay:-1.4s}.ell-fl3{animation-delay:-2.7s}' +
    '@keyframes ellspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ell-sp{animation:ellspray 1.4s ease-out infinite}.ell-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="ell-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const pine = (x, y, h, c) => '<rect x="' + (x - 1.5) + '" y="' + (y + h * .7) + '" width="3" height="' + (h * .35) + '" fill="#4a3424"/><path d="M' + x + ' ' + y + 'l' + (h * .22) + ' ' + (h * .4) + 'h-' + (h * .1) + 'l' + (h * .16) + ' ' + (h * .32) + 'h-' + (h * .56) + 'l' + (h * .16) + ' -' + (h * .32) + 'h-' + (h * .1) + 'z" fill="' + c + '"/>';
  const bricks = (x, y, w, h, c, m) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let j = 0; j < h; j += 8) s += '<path d="M' + x + ' ' + (y + j) + 'h' + w + '" stroke="' + m + '" stroke-width=".8"/>'; return s; };
  const dand = (x, y, cls) => '<g class="ell-sway ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'v22" stroke="#5a8a3a" stroke-width="1.5"/><circle cx="' + x + '" cy="' + y + '" r="5" fill="' + GOLD + '"/><circle cx="' + x + '" cy="' + y + '" r="2" fill="#d9a020"/></g>';
  const puff = (x, y, cls) => '<g class="ell-fl ' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="2.4" fill="#fff" opacity=".9"/><path d="M' + x + ' ' + y + 'v6" stroke="#fff" stroke-width=".8"/></g>';

  /* ROOM 0: The M pulls into the Intermodal Center on Molton St, downtown Montgomery, the hub you ride before heading south to Hope Hull */
  function ellstation() {
    return svg(
      '<rect width="400" height="260" fill="url(#ell1)"/>' +
      '<g class="ell-cl"><ellipse cx="70" cy="30" rx="40" ry="8" fill="#fff" opacity=".6"/><ellipse cx="280" cy="24" rx="46" ry="8" fill="#fff" opacity=".5"/></g>' +
      /* low downtown skyline behind */
      '<rect x="0" y="70" width="60" height="70" fill="#9aa4ae"/><rect x="66" y="50" width="44" height="90" fill="#8a949e"/><rect x="300" y="60" width="50" height="80" fill="#8a949e"/><rect x="356" y="80" width="44" height="60" fill="#9aa4ae"/>' +
      /* the transfer center canopy, brick base, long roof */
      bricks(118, 92, 176, 48, "#a85a3a", "#7a3e26") + '<path d="M104 92h204l-10 -16h-184z" fill="#d6d2ca" stroke="#8a867e" stroke-width="1.2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (128 + i * 28) + '" y="102" width="18" height="22" fill="#2a3a4a" class="' + (i % 2 ? "ell-glow" : "") + '"/>').join("") +
      /* black station sign */
      '<rect x="30" y="132" width="4" height="56" fill="#333"/><rect x="132" y="132" width="4" height="56" fill="#333"/><rect x="12" y="96" width="182" height="40" rx="2" fill="#111"/><path d="M12 102h182" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="103" y="116" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">INTERMODAL CENTER</text>' +
      '<text x="64" y="131" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">MOLTON ST</text>' +
      '<rect x="140" y="122" width="44" height="11" rx="2" fill="' + ORANGE + '"/><text x="162" y="130.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#fff">THE M</text>' +
      /* curb + road */
      '<rect x="0" y="186" width="400" height="8" fill="#d8d0c0"/><rect x="0" y="194" width="400" height="66" fill="#4a4a4e"/><path d="M0 232h400" stroke="' + GOLD + '" stroke-width="2" stroke-dasharray="16 12"/>' +
      /* the bus sliding in */
      '<g class="anim-train"><g transform="translate(150 0)"><rect x="0" y="150" width="200" height="46" rx="6" fill="#f2f2ee" stroke="#8a8e94" stroke-width="1.5"/>' +
      '<rect x="0" y="180" width="200" height="6" fill="' + ORANGE + '"/><rect x="0" y="186" width="200" height="3" fill="' + NAVY + '"/>' +
      '<rect x="6" y="156" width="24" height="22" rx="2" fill="#2a3a4a"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (38 + i * 26) + '" y="156" width="20" height="18" rx="2" fill="#2a3a4a"/>').join("") +
      '<rect x="6" y="146" width="60" height="8" rx="1" fill="#111"/><text x="36" y="152.5" text-anchor="middle" ' + font + ' font-size="6" fill="' + GOLD + '">MOBILE HWY</text>' +
      '<circle cx="4" cy="190" r="3" fill="#ffe28a" class="ell-glow"/><circle cx="40" cy="198" r="9" fill="#222"/><circle cx="40" cy="198" r="3.5" fill="#888"/><circle cx="164" cy="198" r="9" fill="#222"/><circle cx="164" cy="198" r="3.5" fill="#888"/></g></g>',
      sky("ell1", "#5a9ad6", "#f2dcb8"));
  }

  /* ROOM 1: Hooper Academy in Hope Hull, the Colts gym, the 2016 talent show where she played her first show */
  function ellhooper() {
    const crowd = Array.from({ length: 14 }, (_, i) => { const x = 14 + i * 28; return '<circle cx="' + x + '" cy="' + (222 - (i % 2) * 3) + '" r="8" fill="#141414"/><path d="M' + (x - 13) + ' 260q13 -34 26 0z" fill="#141414"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="#120e14"/>' +
      /* gym wall, banner */
      '<rect x="0" y="0" width="400" height="150" fill="#2a2430"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 40) + ' 0v150" stroke="#342e3a" stroke-width="2"/>').join("") +
      '<rect x="90" y="20" width="220" height="30" fill="' + ORANGE + '" stroke="#fff" stroke-width="2"/><text x="200" y="41" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" fill="#fff" letter-spacing=".5">HOOPER ACADEMY COLTS</text>' +
      '<rect x="140" y="56" width="120" height="18" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/><text x="200" y="69" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">TALENT SHOW</text>' +
      /* spotlight beam */
      '<path class="ell-beam" d="M200 0l-46 190h92z" fill="#fff4d0" opacity=".2"/>' +
      /* stage */
      '<rect x="40" y="150" width="320" height="40" fill="#5a3a24"/><path d="M40 150h320" stroke="#8a5a34" stroke-width="3"/>' +
      '<path d="M20 0q24 60 20 190h-20z" fill="#7a1e1e"/><path d="M380 0q-24 60 -20 190h20z" fill="#7a1e1e"/>' +
      /* girl with guitar, silhouette on a stool, long hair */
      '<g fill="#000"><circle cx="200" cy="104" r="9"/><path d="M191 104q-4 14 0 24h18q4 -10 0 -24z"/><path d="M192 112h16l4 26h-24z"/><rect x="188" y="138" width="24" height="4"/><path d="M192 142l-4 8M208 142l4 8" stroke="#000" stroke-width="3"/></g>' +
      '<ellipse cx="196" cy="130" rx="12" ry="9" fill="#8a5a2a" stroke="#000" stroke-width="1"/><circle cx="196" cy="130" r="3" fill="#2a1a0a"/><path d="M206 126l28 -14" stroke="#5a3a1a" stroke-width="3"/>' +
      '<rect x="236" y="104" width="2" height="46" fill="#888"/><circle cx="237" cy="104" r="3" fill="#aaa"/>' +
      note(150, 120, GOLD) + note(250, 112, ORANGE, "ell-nt2") + note(200, 90, CREAM, "ell-nt3") + crowd,
      "");
  }

  /* ROOM 2: the family cow pasture in Hope Hull at dusk, the fence where she practiced her first songs for the cows on her grandfather's guitar */
  function ellpasture() {
    const cow = (x, y, s, cls) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="ell-graze ' + (cls || "") + '"><path d="M0 0h40q6 0 6 6v12h-46z" fill="#2a1e18"/><rect x="2" y="18" width="5" height="14" fill="#2a1e18"/><rect x="36" y="18" width="5" height="14" fill="#2a1e18"/>' +
      '<path d="M0 4q-12 2 -14 12q0 6 8 6q6 -2 8 -8z" fill="#2a1e18"/><ellipse cx="22" cy="6" rx="6" ry="4" fill="#efe6d2"/><path d="M-4 4l-4 -6M-10 6l-6 -4" stroke="#d8cfbe" stroke-width="2"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ell3)"/>' +
      '<circle cx="300" cy="120" r="26" fill="#ffb25a" opacity=".85"/>' +
      Array.from({ length: 12 }, (_, i) => pine(10 + i * 36, 70 + (i % 3) * 8, 64, i % 2 ? PINE : "#24482a")).join("") +
      '<rect x="0" y="138" width="400" height="122" fill="#6a8a3a"/><path d="M0 150q100 -10 200 0t200 0v110h-400z" fill="#5a7a30"/>' +
      cow(60, 150, .9) + cow(250, 160, 1, "ell-gz2") + cow(330, 142, .6) +
      /* wooden fence */
      '<rect x="0" y="196" width="400" height="5" fill="#8a6a44"/><rect x="0" y="214" width="400" height="5" fill="#8a6a44"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (10 + i * 48) + '" y="188" width="6" height="44" fill="#6a4e30"/>').join("") +
      /* girl with guitar sitting on the fence, silhouette */
      '<g fill="#000"><circle cx="180" cy="160" r="8"/><path d="M172 160q-3 12 0 20h16q3 -8 0 -20z"/><path d="M173 168h14l3 28h-20z"/><path d="M172 196l-6 22M186 196l6 22" stroke="#000" stroke-width="4"/></g>' +
      '<ellipse cx="176" cy="186" rx="11" ry="8" fill="#7a4a22" stroke="#000" stroke-width="1"/><circle cx="176" cy="186" r="2.6" fill="#2a1a0a"/><path d="M185 182l26 -12" stroke="#4a2a12" stroke-width="3"/>' +
      dand(40, 236) + dand(110, 240, "ell-s2") + dand(300, 238) + dand(360, 242, "ell-s2") +
      puff(112, 220) + puff(300, 222, "ell-fl2") + puff(220, 230, "ell-fl3") +
      note(214, 150, GOLD) + note(196, 136, CREAM, "ell-nt2"),
      sky("ell3", "#3a3a6a", "#f2a06a"));
  }

  /* ROOM 3: Toomer's Corner at Auburn, where she studied forestry: the live oaks rolled in white streamers, orange and navy */
  function elltoomers() {
    const oak = (x, y) => '<rect x="' + (x - 5) + '" y="' + y + '" width="10" height="70" fill="#4a3424"/><path d="M' + x + ' ' + (y + 10) + 'l-24 -16M' + x + ' ' + (y + 14) + 'l26 -18" stroke="#4a3424" stroke-width="5"/>' +
      '<ellipse cx="' + x + '" cy="' + (y - 14) + '" rx="54" ry="30" fill="#3a6a32"/><ellipse cx="' + (x - 30) + '" cy="' + (y - 4) + '" rx="26" ry="16" fill="#335e2c"/><ellipse cx="' + (x + 30) + '" cy="' + (y - 4) + '" rx="26" ry="16" fill="#335e2c"/>' +
      Array.from({ length: 7 }, (_, i) => '<path class="ell-sway' + (i % 2 ? ' ell-s2' : '') + '" d="M' + (x - 42 + i * 14) + ' ' + (y - 20 + (i % 3) * 6) + 'q4 26 -2 48" stroke="#fff" stroke-width="2.4" fill="none" opacity=".95"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ell4)"/>' +
      /* brick storefront row behind */
      bricks(150, 96, 250, 74, "#9a4a32", "#6a2e1e") + Array.from({ length: 6 }, (_, i) => '<rect x="' + (160 + i * 40) + '" y="110" width="24" height="26" fill="#2a3a4a" class="' + (i % 2 ? "ell-glow" : "") + '"/>').join("") +
      '<rect x="146" y="90" width="258" height="8" fill="#e8e2d4"/>' +
      /* orange and navy awning */
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (156 + i * 20) + '" y="140" width="20" height="10" fill="' + (i % 2 ? NAVY : ORANGE) + '"/>').join("") +
      oak(80, 110) + oak(250, 104) +
      '<rect x="0" y="180" width="400" height="80" fill="#8a8478"/><path d="M0 182h400" stroke="#b8b0a2" stroke-width="2"/>' +
      /* streamers on the ground */
      '<path d="M20 200q40 10 80 -4t90 6" stroke="#fff" stroke-width="2" fill="none"/><path d="M200 214q50 -8 100 6t90 -4" stroke="#fff" stroke-width="2" fill="none"/>' +
      '<rect x="300" y="186" width="4" height="40" fill="#6a6e72"/>' + sign(254, 186, 96, "COLLEGE ST") + sign(250, 210, 104, "MAGNOLIA AVE") +
      tag("WAR EAGLE", 24, 248, 20, ORANGE, -4),
      sky("ell4", "#4a8ad6", "#f6dcb0"));
  }

  /* ROOM 4: her corner in Hope Hull, US 31 (Mobile Hwy) and Fischer Rd, the light by her old school, the I-65 Exit 164 sign behind */
  function ellcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ell5)"/>' +
      Array.from({ length: 12 }, (_, i) => pine(i * 36, 74 + (i % 3) * 6, 58, i % 2 ? PINE : "#24482a")).join("") +
      /* I-65 overpass + green exit sign behind */
      '<rect x="0" y="108" width="400" height="10" fill="#b8b2a6"/><rect x="0" y="118" width="400" height="3" fill="#8a857c"/>' + [60, 180, 300].map(x => '<rect x="' + x + '" y="121" width="8" height="26" fill="#a8a296"/>').join("") +
      '<g class="ell-drive"><rect x="0" y="100" width="34" height="9" rx="2" fill="#3a4a6a"/><rect x="40" y="100" width="22" height="9" rx="2" fill="#d8d8d2"/></g>' +
      '<rect x="236" y="54" width="130" height="46" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><rect x="250" y="44" width="58" height="12" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/><text x="279" y="53.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">EXIT 164</text>' +
      '<text x="301" y="76" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">HOPE HULL</text><text x="301" y="92" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">US 31</text>' +
      '<rect x="262" y="100" width="4" height="10" fill="#6a6e72"/><rect x="336" y="100" width="4" height="10" fill="#6a6e72"/>' +
      /* wall with the tags */
      bricks(0, 146, 400, 74, "#b8643a", "#8a4424") +
      tag("ELLA LANGLEY", 100, 200, 26, CREAM, -5) + tag("HOPE HULL", 306, 172, 17, GOLD, -8) + tag("HUNGOVER", 312, 212, 14, ORANGE, -3) +
      '<g class="ell-sp"><circle cx="300" cy="198" r="2" fill="' + GOLD + '"/><circle cx="306" cy="192" r="1.5" fill="' + GOLD + '"/></g><g class="ell-sp ell-sp2"><circle cx="294" cy="204" r="1.5" fill="' + CREAM + '"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#8a8478"/><path d="M0 222h400" stroke="#b8b0a2" stroke-width="2"/>' +
      /* street sign pole + traffic light */
      '<rect x="44" y="70" width="5" height="152" fill="#6a6e72"/>' + sign(4, 70, 124, "US 31 MOBILE HWY") + sign(16, 96, 92, "FISCHER RD") +
      '<rect x="140" y="56" width="4" height="90" fill="#6a6e72"/><rect x="132" y="40" width="20" height="44" rx="3" fill="#222"/><circle cx="142" cy="50" r="5" fill="#5a1a1a"/><circle cx="142" cy="62" r="5" fill="#5a4a1a"/><circle cx="142" cy="74" r="5" fill="#3aff7a" class="ell-glow"/>' +
      dand(370, 236) + dand(390, 240, "ell-s2"),
      sky("ell5", "#1c2240", "#e88a4a"));
  }

  window.SCENES = { ellstation: ellstation, ellhooper: ellhooper, ellpasture: ellpasture, elltoomers: elltoomers, ellcorner: ellcorner };
})();
