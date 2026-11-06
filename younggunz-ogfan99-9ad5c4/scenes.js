/* younggunz scenes (Regions tab: Philadelphia; Nicetown, North Philly). CSS classes prefixed yg- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ygpole{from{transform:translateY(0)}to{transform:translateY(-16px)}}.yg-pole{animation:ygpole 1s linear infinite}' +
    '@keyframes ygnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(14px,-60px);opacity:0}}.yg-note{animation:ygnote 2.8s ease-out infinite}.yg-n2{animation-delay:-.9s}.yg-n3{animation-delay:-1.9s}' +
    '@keyframes ygdrum{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}.yg-drum{animation:ygdrum .36s ease-in-out infinite}.yg-drum2{animation-delay:-.18s}' +
    '@keyframes ygball{0%{transform:translate(0,0)}50%{transform:translate(40px,-70px)}100%{transform:translate(80px,-34px)}}.yg-ball{animation:ygball 1.8s ease-in-out infinite alternate}' +
    '@keyframes ygnet{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.85)}}.yg-net{transform-box:fill-box;transform-origin:50% 0%;animation:ygnet .9s ease-in-out infinite}' +
    '@keyframes ygspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.yg-sp{animation:ygspray 1.4s ease-out infinite}.yg-sp2{animation-delay:.45s}' +
    '@keyframes ygsmoke{0%{transform:translate(0,0) scale(.6);opacity:.6}100%{transform:translate(30px,-40px) scale(1.6);opacity:0}}.yg-smoke{transform-box:fill-box;transform-origin:50% 50%;animation:ygsmoke 3.4s ease-out infinite}.yg-sm2{animation-delay:-1.7s}' +
    '@keyframes ygglow{0%,100%{opacity:.5}50%{opacity:1}}.yg-glow{animation:ygglow 2.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "yg-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, c, cls) => '<g class="yg-note ' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="0" rx="5" ry="3.6" fill="' + c + '"/><rect x="3.6" y="-18" width="2" height="18" fill="' + c + '"/><path d="M5.6 -18q8 4 6 12" stroke="' + c + '" stroke-width="2" fill="none"/></g></g>';
  const GOLD = "#e8c547", RED = "#d0342c", BLUE = "#2d6fd1", RR = "#91456c";

  /* 1. Wayne Junction, the Regional Rail station in Nicetown: the old red-brick head house with its arched windows and hipped roof, the raised platform with the canopy, catenary overhead, the black sign with the RR bullet, a stainless Silverliner sliding in */
  function station() {
    const tr = '<g class="anim-train"><rect x="16" y="120" width="340" height="66" rx="6" fill="#cdd2d8" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (28 + i * 40) + '" y="130" width="26" height="22" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="16" y="160" width="340" height="5" fill="' + RR + '"/><rect x="16" y="168" width="340" height="2" fill="#2d6fd1"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M' + (24 + i * 28) + ' 174v10" stroke="#9aa0a8" stroke-width="1"/>').join("") +
      '<rect x="338" y="124" width="18" height="60" rx="4" fill="#a9afb6"/><circle cx="348" cy="176" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yg1)"/>' +
      '<rect x="230" y="40" width="150" height="70" fill="#9c3f2c"/><path d="M222 42l83 -28 83 28z" fill="#4a4e57"/>' +
      [244, 276, 308, 340].map(x => '<path d="M' + x + ' 100v-34a10 10 0 0 1 20 0v34z" fill="#2b3442" stroke="#e8dcc4" stroke-width="2"/>').join("") +
      '<rect x="230" y="56" width="150" height="3" fill="#e8dcc4" opacity=".6"/>' +
      '<path d="M0 26h400M0 32h400" stroke="#3c3f46" stroke-width="2"/>' + [60, 180, 300].map(x => '<rect x="' + (x - 3) + '" y="20" width="6" height="100" fill="#5a5e66"/><path d="M' + (x - 14) + ' 26h28" stroke="#5a5e66" stroke-width="3"/>').join("") +
      '<path d="M0 102h220l10 -8H0z" fill="#3e4f45"/><rect x="0" y="102" width="220" height="6" fill="#2c3a32"/>' + [30, 110, 190].map(x => '<rect x="' + (x - 3) + '" y="104" width="6" height="84" fill="#2c3a32"/>').join("") +
      '<rect x="40" y="58" width="180" height="30" rx="3" fill="#111"/><text x="52" y="79" ' + font + ' font-size="15" fill="#fff">Wayne Junction</text>' + badge(176, 73, "RR", RR) +
      tr +
      '<rect x="0" y="186" width="400" height="8" fill="#f2c200"/><rect x="0" y="194" width="400" height="66" fill="#8f8a82"/>' +
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="194" width="1" height="66" fill="#7f7a72"/>').join("") +
      '<rect class="yg-glow" x="150" y="210" width="100" height="5" rx="2.5" fill="#fff6c2" opacity=".5"/>',
      sky("yg1", "#86b8e2", "#f1e4c6"));
  }

  /* 2. The Nicetown barbershops they ran around as kids: a brick storefront row, the shop window with the chair and the mirror, the barber pole spinning, a hand-painted FRESH CUTS sign */
  function barber() {
    const stripes = Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (i * 16 - 16) + 'l16 16" stroke="' + (i % 2 ? RED : BLUE) + '" stroke-width="5"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#yg2)"/>' +
      '<rect x="0" y="40" width="400" height="180" fill="#8e4634"/>' + Array.from({ length: 22 }, (_, i) => '<path d="M0 ' + (46 + i * 8) + 'h400" stroke="#7d3c2c" stroke-width="1"/>').join("") +
      '<rect x="40" y="60" width="96" height="40" fill="#2b3442" stroke="#e8dcc4" stroke-width="3"/><rect x="264" y="60" width="96" height="40" fill="#2b3442" stroke="#e8dcc4" stroke-width="3"/>' +
      '<rect x="110" y="112" width="200" height="22" fill="#1b1b1b"/><text x="210" y="128" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '" letter-spacing="2">FRESH CUTS</text>' +
      '<path d="M100 134h220l-10 14H110z" fill="' + RED + '"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M' + (112 + i * 30) + ' 134l-2 14" stroke="#fff" stroke-width="6" opacity=".85"/>').join("") +
      '<rect x="118" y="148" width="184" height="72" fill="#d8ecf2" opacity=".9"/><rect x="118" y="148" width="184" height="72" fill="none" stroke="#3a3a3a" stroke-width="4"/>' +
      '<rect x="134" y="156" width="56" height="34" fill="#b8d4dc" stroke="#888"/><rect x="226" y="156" width="56" height="34" fill="#b8d4dc" stroke="#888"/>' +
      '<g transform="translate(176 172)"><rect x="-14" y="18" width="40" height="8" rx="3" fill="' + RED + '"/><rect x="-10" y="0" width="10" height="26" rx="3" fill="' + RED + '"/><rect x="2" y="26" width="6" height="18" fill="#555"/><rect x="-8" y="42" width="26" height="4" fill="#555"/></g>' +
      '<rect x="320" y="150" width="30" height="70" fill="#4a2a1a"/><circle cx="344" cy="186" r="2.5" fill="' + GOLD + '"/>' +
      '<rect x="72" y="142" width="18" height="6" rx="2" fill="#ccc"/><rect x="72" y="206" width="18" height="6" rx="2" fill="#ccc"/>' +
      '<clipPath id="ygpc"><rect x="74" y="148" width="14" height="58" rx="6"/></clipPath><rect x="74" y="148" width="14" height="58" rx="6" fill="#fff"/>' +
      '<g clip-path="url(#ygpc)"><g transform="translate(74 148)"><g class="yg-pole">' + stripes + '<g transform="translate(0 64)">' + stripes + '</g></g></g></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#8a8680"/><rect x="0" y="218" width="400" height="4" fill="#b8b3aa"/>',
      sky("yg2", "#8cc0e6", "#eef4f8"));
  }

  /* 3. The sixth-grade lunchroom in Nicetown where it clicked: Chris drumming a beat on the long table, Neef writing his first verse in a notebook, trays and milk cartons, notes jumping off the table */
  function lunch() {
    return svg(
      '<rect width="400" height="260" fill="#e9e1c8"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (i * 34) + '" y="120" width="34" height="34" fill="' + (i % 2 ? "#cbbf9e" : "#d9cfb1") + '"/>').join("") +
      '<rect x="0" y="0" width="400" height="18" fill="#c8c0a8"/>' + [60, 200, 340].map(x => '<rect x="' + (x - 40) + '" y="2" width="80" height="10" rx="2" fill="#fff8e0" class="yg-glow"/>').join("") +
      '<rect x="30" y="36" width="110" height="70" fill="#7fb6d9" stroke="#f3efe6" stroke-width="5"/><path d="M85 36v70M30 71h110" stroke="#f3efe6" stroke-width="3"/>' +
      '<rect x="260" y="36" width="110" height="70" fill="#7fb6d9" stroke="#f3efe6" stroke-width="5"/><path d="M315 36v70M260 71h110" stroke="#f3efe6" stroke-width="3"/>' +
      '<rect x="168" y="30" width="64" height="40" rx="3" fill="#2a4a3a"/><circle cx="200" cy="50" r="15" fill="#fff" stroke="#333" stroke-width="2"/><path d="M200 50v-9M200 50h7" stroke="#333" stroke-width="2"/>' +
      '<rect x="0" y="154" width="400" height="106" fill="#b7ae98"/>' +
      '<rect x="20" y="168" width="360" height="20" rx="3" fill="#e7a84a"/><rect x="20" y="186" width="360" height="6" fill="#b9802a"/>' + [50, 350].map(x => '<rect x="' + (x - 4) + '" y="192" width="8" height="46" fill="#6b6b6b"/>').join("") +
      '<rect x="32" y="200" width="336" height="10" rx="3" fill="#2d6fd1"/>' +
      '<rect x="70" y="158" width="44" height="12" rx="2" fill="#9aa4ae"/><rect x="76" y="152" width="10" height="10" fill="#fff"/><path d="M76 152l5 -5 5 5" fill="#fff" stroke="#2d6fd1" stroke-width="1"/>' +
      '<rect x="280" y="158" width="44" height="12" rx="2" fill="#9aa4ae"/><circle cx="300" cy="160" r="5" fill="' + RED + '"/>' +
      '<g class="yg-drum"><rect x="150" y="150" width="16" height="16" rx="6" fill="#7a4a2a"/><path d="M158 150v-20" stroke="' + RED + '" stroke-width="8" stroke-linecap="round"/></g>' +
      '<g class="yg-drum yg-drum2"><rect x="178" y="150" width="16" height="16" rx="6" fill="#7a4a2a"/><path d="M186 150v-20" stroke="' + RED + '" stroke-width="8" stroke-linecap="round"/></g>' +
      '<g transform="translate(230 158)"><rect x="0" y="0" width="40" height="12" fill="#fff" stroke="#9aa" stroke-width="1"/><path d="M4 4h30M4 8h24" stroke="' + BLUE + '" stroke-width="1"/><path d="M40 2l14 -18" stroke="#e8c547" stroke-width="3"/><path d="M54 -16l3 -4" stroke="#444" stroke-width="3"/></g>' +
      note(170, 130, RED, "") + note(200, 128, BLUE, "yg-n2") + note(150, 126, "#3a2a1a", "yg-n3"),
      "");
  }

  /* 4. The neighborhood court (the name Young Gunz comes from gunning on the court): the blacktop with painted lines, the chain-link fence, the hoop with the chain net swaying, the ball arcing up, rowhouses behind at golden hour */
  function court() {
    return svg(
      '<rect width="400" height="260" fill="url(#yg4)"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 46) + '" y="' + (80 + (i % 2) * 8) + '" width="44" height="60" fill="' + (i % 2 ? "#8a4b3a" : "#7a4232") + '"/><rect x="' + (i * 46) + '" y="' + (78 + (i % 2) * 8) + '" width="44" height="4" fill="#4a2a22"/><rect x="' + (i * 46 + 8) + '" y="' + (92 + (i % 2) * 8) + '" width="8" height="12" fill="#ffd98a" opacity=".6"/><rect x="' + (i * 46 + 26) + '" y="' + (92 + (i % 2) * 8) + '" width="8" height="12" fill="#ffd98a" opacity=".6"/>').join("") +
      '<rect x="0" y="120" width="400" height="30" fill="none" stroke="#9aa0a8" stroke-width="1"/>' + Array.from({ length: 40 }, (_, i) => '<path d="M' + (i * 10) + ' 120l10 30M' + (i * 10 + 10) + ' 120l-10 30" stroke="#9aa0a8" stroke-width=".7"/>').join("") +
      '<rect x="0" y="150" width="400" height="110" fill="#3a3d42"/>' +
      '<path d="M0 252h400M200 150v110" stroke="#f2f2f2" stroke-width="2" opacity=".7"/><path d="M290 252a60 40 0 0 1 0 -80" stroke="#f2f2f2" stroke-width="2" fill="none" opacity=".7"/><rect x="330" y="172" width="70" height="80" fill="none" stroke="#f2f2f2" stroke-width="2" opacity=".7"/>' +
      '<rect x="364" y="70" width="8" height="170" fill="#2a2a2a"/><rect x="330" y="70" width="48" height="34" fill="#f2f2f2" stroke="#2a2a2a" stroke-width="2"/><rect x="342" y="84" width="20" height="14" fill="none" stroke="' + RED + '" stroke-width="2"/>' +
      '<ellipse cx="342" cy="104" rx="14" ry="3" fill="none" stroke="' + RED + '" stroke-width="3"/><g class="yg-net"><path d="M330 104l4 16h16l4 -16M336 104l2 16M348 104l-2 16" stroke="#c9ccd0" stroke-width="1.5" fill="none"/></g>' +
      '<g class="yg-ball"><circle cx="230" cy="168" r="9" fill="#e07a2a"/><path d="M221 168h18M230 159v18" stroke="#5a2a10" stroke-width="1.2"/></g>',
      sky("yg4", "#f4a95e", "#fde3b0"));
  }

  /* 5. N 18th St and W Lycoming St, Nicetown: green signs, YOUNG GUNZ tagged on the brick wall, the old Tasty Baking bakery's long brick building and water tower over on Hunting Park Ave behind at dusk */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#yg5)"/>' + stars(14) +
      '<rect x="40" y="70" width="250" height="66" fill="#6e3b2e"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (50 + i * 20) + '" y="80" width="12" height="18" fill="#ffd98a" opacity="' + (i % 3 ? .7 : .35) + '"/><rect x="' + (50 + i * 20) + '" y="106" width="12" height="18" fill="#ffd98a" opacity="' + (i % 2 ? .6 : .3) + '"/>').join("") +
      '<rect x="40" y="66" width="250" height="6" fill="#4e2a20"/><rect x="230" y="40" width="26" height="30" fill="#6e3b2e"/>' +
      '<path d="M300 28h36v18h-36z" fill="#5b6270"/><path d="M296 28h44l-22 -12z" fill="#4a505c"/><path d="M304 46l-4 90M332 46l4 90M318 46v90M302 86h32" stroke="#4a505c" stroke-width="3"/>' +
      '<g class="yg-smoke"><circle cx="243" cy="34" r="8" fill="#c8c0cc"/></g><g class="yg-smoke yg-sm2"><circle cx="243" cy="34" r="6" fill="#c8c0cc"/></g>' +
      '<rect x="0" y="134" width="400" height="90" fill="#7a3e2e"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (142 + i * 8) + 'h400" stroke="#6a3426" stroke-width="1"/>').join("") +
      tag("YOUNG GUNZ", 16, 190, 38, GOLD, -6) + tag("C &amp; NEEF", 26, 216, 20, "#fff", -3) + tag("GUNNAZ", 196, 214, 22, BLUE, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="356" y="98" width="6" height="126" fill="#2f2f2f"/>' + sign(306, 100, 92, "N 18th St") + sign(290, 126, 108, "W Lycoming St") +
      '<g class="yg-sp"><circle cx="190" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="yg-sp yg-sp2"><circle cx="196" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("yg5", "#1a1438", "#d8724a"));
  }

  window.SCENES = { station: station, barber: barber, lunch: lunch, court: court, corner: corner };
})();
