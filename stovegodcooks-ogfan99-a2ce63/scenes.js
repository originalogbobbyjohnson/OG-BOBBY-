/* stovegodcooks scenes (Regions tab: Upstate New York; Syracuse, NY, where Aaron "Stove God Cook$" Cook grew up). 400 x 260 SVGs. CSS classes prefixed sg- (the page's own anim-train is kept on the bus).
   0 Centro Transit Hub at S Salina St & E Adams St downtown: the sawtooth canopy, a white Centro bus pulling into its bay.
   1 Grandpa's church: he and his mom taught a gospel group at his grandfather's church (unnamed): brick church in the snow, stained glass glowing, robed choir singing.
   2 Syracuse Orange basketball under the dome ("Jim Boeheim" on Reasonable Drought): orange court, the white roof, the crowd in orange.
   3 The Niagara Mohawk Building on Erie Blvd at night: Art Deco steel-and-black-glass tower lit in colored bands, the winged "Spirit of Light" statue on the front.
   4 Burnet Ave & Lodi St on the Near Northeast side (Burnet is the street he names on "Bread of Life"): green signs, COOK$ tagged, the State Tower Building's Art Deco top downtown behind, snow. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sgflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.35}55%{opacity:.9}}.sg-flk{animation:sgflick 2.6s infinite}.sg-flk2{animation-delay:.9s}' +
    '@keyframes sgsway{0%,100%{transform:translateX(0)}50%{transform:translateX(3px)}}.sg-sway{animation:sgsway 1.4s ease-in-out infinite}.sg-sway2{animation-delay:-.7s}' +
    '@keyframes sgnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.sg-note{animation:sgnote 3s ease-out infinite}.sg-n2{animation-delay:-1s}.sg-n3{animation-delay:-2s}' +
    '@keyframes sgball{0%{transform:translate(0,0)}25%{transform:translate(40px,-50px)}50%{transform:translate(80px,0)}75%{transform:translate(40px,-30px)}100%{transform:translate(0,0)}}.sg-ball{animation:sgball 3s ease-in-out infinite}' +
    '@keyframes sgbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.sg-bob{animation:sgbob .8s ease-in-out infinite}.sg-bob2{animation-delay:-.4s}' +
    '@keyframes sgglow{0%,100%{opacity:.45}50%{opacity:1}}.sg-glow{animation:sgglow 2.6s ease-in-out infinite}.sg-g2{animation-delay:-1.3s}.sg-g3{animation-delay:-.6s}' +
    '@keyframes sgcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.sg-car{animation:sgcar 7s linear infinite}.sg-car2{animation-delay:-3.5s}' +
    '@keyframes sgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sg-sp{animation:sgspray 1.4s ease-out infinite}.sg-sp2{animation-delay:.45s}' +
    '@keyframes sgsnow{from{transform:translateY(-20px)}to{transform:translateY(270px)}}.sg-sn{animation:sgsnow 7s linear infinite}.sg-sn2{animation-delay:-2.3s;animation-duration:8s}.sg-sn3{animation-delay:-4.6s;animation-duration:6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="' + (txt.length * 9 + 16) + '" height="20" rx="10" fill="' + color + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + (txt.length * 9 + 16) / 2) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const snow = n => Array.from({ length: n }, (_, i) => '<circle class="sg-sn sg-sn' + (i % 3 + 1) + '" cx="' + ((i * 71) % 400) + '" cy="' + ((i * 37) % 100 - 20) + '" r="' + (i % 2 ? 1.5 : 2.2) + '" fill="#fff" opacity=".85"/>').join("");
  const CBLUE = "#1d5fa8", CGREEN = "#5bab3c", ORANGE = "#f37321", NAVY = "#0b2a52", GOLD = "#f2c14e", ICE = "#bfe6f2";

  /* 0. Centro Transit Hub, S Salina St & E Adams St: the sawtooth canopy over the bays, a white Centro bus (blue and green stripes) rolling in, black stop sign */
  function sgstation() {
    const teeth = Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 50) + ' 64L' + (i * 50 + 50) + ' 40V64z" fill="#c7ccd3"/><path d="M' + (i * 50 + 50) + ' 40V64" stroke="#8b939e" stroke-width="2"/>').join("");
    const cols = [40, 140, 260, 360].map(x => '<rect x="' + (x - 4) + '" y="64" width="8" height="118" fill="#6f7782"/>').join("");
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (68 + i * 40) + '" y="122" width="30" height="24" rx="3" fill="#2a3340"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="112" width="300" height="74" rx="10" fill="#f4f6f8" stroke="#5b6270" stroke-width="2"/>' + win +
      '<rect x="40" y="152" width="300" height="5" fill="' + CBLUE + '"/><rect x="40" y="159" width="300" height="4" fill="' + CGREEN + '"/><rect x="40" y="165" width="300" height="3" fill="' + CBLUE + '"/>' +
      '<rect x="306" y="120" width="30" height="42" rx="4" fill="#2a3340"/><rect x="306" y="114" width="30" height="8" rx="2" fill="#111"/><text x="321" y="121" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb030">10</text>' +
      '<rect x="60" y="114" width="80" height="8" rx="2" fill="#111"/><text x="100" y="121" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb030" letter-spacing="1">10 S SALINA</text>' +
      '<circle cx="90" cy="186" r="12" fill="#22252b"/><circle cx="90" cy="186" r="5" fill="#9aa1aa"/><circle cx="290" cy="186" r="12" fill="#22252b"/><circle cx="290" cy="186" r="5" fill="#9aa1aa"/>' +
      '<circle cx="336" cy="176" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sg0)"/>' +
      '<rect x="0" y="64" width="400" height="6" fill="#8b939e"/>' + teeth + cols +
      [70, 200, 330].map((x, i) => '<rect class="sg-flk' + (i === 1 ? " sg-flk2" : "") + '" x="' + (x - 24) + '" y="70" width="48" height="4" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="196" width="400" height="64" fill="#7f8389"/><rect x="0" y="194" width="400" height="5" fill="#f2c200"/>' + bus +
      '<rect x="28" y="74" width="210" height="34" rx="4" fill="#111"/><rect x="28" y="74" width="210" height="3" fill="#fff"/>' +
      '<text x="40" y="98" ' + font + ' font-size="17" fill="#fff">Centro Transit Hub</text>' +
      '<rect x="250" y="74" width="122" height="34" rx="4" fill="#111"/>' + badge(256, 91, "10", CBLUE) + badge(290, 91, "54", CGREEN) + badge(324, 91, "68", CBLUE) +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" letter-spacing="2">S SALINA ST  ·  E ADAMS ST  ·  DOWNTOWN SYRACUSE</text>',
      sky("sg0", "#9fc4e4", "#e6eef4"));
  }

  /* 1. Grandpa's church: red-brick church with a white steeple in the snow, the rose window and stained glass glowing, the robed gospel choir swaying inside the open doors, notes rising */
  function sgchurch() {
    const glass = (x, y, w, h, c1, c2) => '<path d="M' + x + ' ' + (y + h) + 'V' + (y + w / 2) + 'a' + (w / 2) + ' ' + (w / 2) + ' 0 0 1 ' + w + ' 0V' + (y + h) + 'z" fill="' + c1 + '" class="sg-glow"/><path d="M' + (x + w / 2) + ' ' + y + 'V' + (y + h) + 'M' + x + ' ' + (y + h * 0.6) + 'h' + w + '" stroke="' + c2 + '" stroke-width="1.5"/>';
    const choir = Array.from({ length: 6 }, (_, i) => '<g class="sg-sway' + (i % 2 ? " sg-sway2" : "") + '"><path d="M' + (162 + i * 13) + ' 226v-26q6 -6 12 0v26z" fill="' + (i % 2 ? "#7a1f2b" : "#5b2a86") + '"/><path d="M' + (164 + i * 13) + ' 204h8" stroke="' + GOLD + '" stroke-width="2"/><circle cx="' + (168 + i * 13) + '" cy="196" r="5" fill="#5a3a26"/></g>').join("");
    const notes = [[120, 150], [290, 140], [250, 120]].map(([x, y], i) => '<text class="sg-note sg-n' + (i + 1) + '" x="' + x + '" y="' + y + '" font-size="18" fill="' + GOLD + '">&#9835;</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sg1)"/>' +
      '<rect x="182" y="34" width="36" height="40" fill="#f4f1ea"/><path d="M178 36L200 12L222 36z" fill="#f4f1ea" stroke="#c9c3b6" stroke-width="1.5"/><path d="M200 12v-10M195 6h10" stroke="' + GOLD + '" stroke-width="2"/><path d="M194 44h12v18h-12z" fill="#2a2f3a"/>' +
      '<path d="M110 74L200 42L290 74z" fill="#7d2e22"/><rect x="110" y="74" width="180" height="156" fill="#9c3f2e"/>' +
      Array.from({ length: 15 }, (_, r) => '<path d="M110 ' + (80 + r * 10) + 'h180" stroke="#7d2e22" stroke-width="1"/>').join("") +
      '<circle cx="200" cy="96" r="16" fill="#3a6fc2" class="sg-glow"/>' + Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return '<path d="M200 96L' + (200 + 16 * Math.cos(a)).toFixed(1) + ' ' + (96 + 16 * Math.sin(a)).toFixed(1) + '" stroke="#d9b14a" stroke-width="1.5"/>'; }).join("") + '<circle cx="200" cy="96" r="5" fill="#e8462f"/>' +
      glass(122, 120, 22, 50, "#e8462f", "#4a2018") + glass(256, 120, 22, 50, "#2f8f5a", "#4a2018") +
      '<path d="M156 230v-46a44 26 0 0 1 88 0v46z" fill="#2a1a12"/><path d="M156 230v-46a44 26 0 0 1 88 0v46z" fill="#f2b84a" opacity=".55" class="sg-glow sg-g2"/>' + choir +
      '<rect x="146" y="228" width="108" height="8" fill="#cfc8bb"/><rect x="138" y="236" width="124" height="8" fill="#bdb6a8"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#eef2f6"/><path d="M110 74h180" stroke="#eef2f6" stroke-width="3"/>' + notes +
      '<rect x="14" y="10" width="140" height="20" rx="3" fill="#111"/><text x="84" y="24" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '" letter-spacing="1.5">GRANDPA\'S CHURCH</text>' +
      snow(24),
      sky("sg1", "#1a2340", "#5c6b92"));
  }

  /* 2. Orange basketball under the dome: the white roof up top, the crowd in orange, the hardwood with an orange key, the ball bouncing (no logos) */
  function sgdome() {
    const crowd = Array.from({ length: 66 }, (_, i) => {
      const x = 6 + (i % 33) * 12, y = 78 + Math.floor(i / 33) * 14;
      return '<circle class="sg-bob' + (i % 2 ? " sg-bob2" : "") + '" cx="' + x + '" cy="' + y + '" r="5" fill="' + (i % 4 === 3 ? NAVY : i % 4 === 1 ? "#ffffff" : ORANGE) + '"/>';
    }).join("");
    return svg(
      '<rect width="400" height="260" fill="#151a24"/>' +
      '<path d="M0 64Q200 -10 400 64V0H0z" fill="#e9edf2"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 64Q200 ' + (-10 + Math.abs(4 - i) * 6) + ' ' + (400 - i * 50) + ' 64" stroke="#c9cfd8" stroke-width="1" fill="none" opacity=".6"/>').join("") +
      '<path d="M0 64Q200 -10 400 64" stroke="' + ORANGE + '" stroke-width="4" fill="none"/>' +
      [80, 200, 320].map((x, i) => '<rect class="sg-glow sg-g' + (i + 1) + '" x="' + (x - 22) + '" y="40" width="44" height="6" rx="3" fill="#fff7d6"/>').join("") +
      '<rect x="0" y="66" width="400" height="44" fill="#232b3a"/>' + crowd +
      '<rect x="0" y="108" width="400" height="8" fill="' + ORANGE + '"/><rect x="0" y="116" width="400" height="6" fill="' + NAVY + '"/>' +
      '<path d="M0 122H400V260H0z" fill="#d9a066"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M0 ' + (126 + i * 10) + 'H400" stroke="#c48a50" stroke-width="1" opacity=".6"/>').join("") +
      '<path d="M200 122V260" stroke="#fff" stroke-width="3"/><ellipse cx="200" cy="190" rx="44" ry="20" fill="none" stroke="#fff" stroke-width="3"/>' +
      '<path d="M0 150h90v80H0" fill="' + ORANGE + '" stroke="#fff" stroke-width="3"/><path d="M400 150h-90v80h90" fill="' + ORANGE + '" stroke="#fff" stroke-width="3"/>' +
      '<circle class="sg-ball" cx="150" cy="226" r="9" fill="#e06a1b" stroke="#5a2a0a" stroke-width="1.5"/>' +
      '<rect x="122" y="128" width="156" height="24" rx="4" fill="' + NAVY + '" stroke="' + ORANGE + '" stroke-width="2"/><text x="200" y="145" text-anchor="middle" ' + font + ' font-size="12" fill="' + ORANGE + '" letter-spacing="2">GO ORANGE</text>',
      "");
  }

  /* 3. The Niagara Mohawk Building at night: Art Deco steel and black glass, stepped wings, the bands lit in color, the winged Spirit of Light statue over the entrance */
  function sgniamo() {
    const bands = (x, w, y0, n) => Array.from({ length: n }, (_, r) => '<rect class="sg-glow' + (r % 3 ? " sg-g" + (r % 3 + 1) : "") + '" x="' + (x + 4) + '" y="' + (y0 + r * 12) + '" width="' + (w - 8) + '" height="4" fill="' + ["#ff6fb5", "#7fd1ff", "#ffd36f"][r % 3] + '" opacity=".8"/>').join("");
    const fins = (x, w, y) => Array.from({ length: Math.floor(w / 10) }, (_, i) => '<path d="M' + (x + 5 + i * 10) + ' ' + y + 'V228" stroke="#c6ccd4" stroke-width="2"/>').join("");
    const spirit = '<g transform="translate(200,150)"><path d="M0 -26l-6 10h12z" fill="#e8ecf0"/><path d="M-4 -16h8v26h-8z" fill="#e8ecf0"/><path d="M-4 -12L-30 -26L-24 -6z M4 -12L30 -26L24 -6z" fill="#dfe4ea" stroke="#9aa3ad" stroke-width="1"/><circle cx="0" cy="-30" r="4" fill="#e8ecf0"/>' +
      Array.from({ length: 7 }, (_, i) => '<path class="sg-glow" d="M0 -30L' + (Math.cos(-Math.PI / 2 + (i - 3) * 0.35) * 20).toFixed(1) + ' ' + (-30 + Math.sin(-Math.PI / 2 + (i - 3) * 0.35) * 20).toFixed(1) + '" stroke="' + GOLD + '" stroke-width="2"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sg3)"/>' +
      Array.from({ length: 30 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + ((i * 29) % 60) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      '<rect x="40" y="120" width="80" height="108" fill="#20242c"/>' + fins(40, 80, 120) + bands(40, 80, 128, 8) +
      '<rect x="280" y="120" width="80" height="108" fill="#20242c"/>' + fins(280, 80, 120) + bands(280, 80, 128, 8) +
      '<rect x="120" y="70" width="160" height="158" fill="#262b34"/>' + fins(120, 160, 70) + bands(120, 160, 78, 5) +
      '<rect x="150" y="40" width="100" height="32" fill="#2b313b"/>' + fins(150, 100, 40) + '<rect x="172" y="22" width="56" height="20" fill="#2f3540"/>' + fins(172, 56, 22) + '<rect x="190" y="10" width="20" height="14" fill="#353b46"/>' +
      '<rect class="sg-glow" x="194" y="4" width="12" height="6" fill="' + GOLD + '"/>' +
      '<rect x="168" y="168" width="64" height="60" fill="#14171c"/><path d="M168 168h64" stroke="' + GOLD + '" stroke-width="2"/>' + spirit +
      '<rect x="0" y="228" width="400" height="32" fill="#3a3e45"/><rect x="0" y="226" width="400" height="3" fill="#7f848c"/>' +
      '<g class="sg-car"><rect x="0" y="238" width="44" height="12" rx="4" fill="#b8323a"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="34" cy="250" r="4" fill="#111"/><circle cx="44" cy="243" r="2" fill="#fff6c2"/></g>' +
      '<g class="sg-car sg-car2"><rect x="0" y="238" width="44" height="12" rx="4" fill="#d6d9de"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="34" cy="250" r="4" fill="#111"/><circle cx="44" cy="243" r="2" fill="#fff6c2"/></g>' +
      '<rect x="10" y="12" width="150" height="20" rx="3" fill="#111"/><text x="85" y="26" text-anchor="middle" ' + font + ' font-size="9" fill="#c6ccd4" letter-spacing="1.5">ERIE BLVD  ·  SYRACUSE</text>',
      sky("sg3", "#070b1a", "#2a2f52"));
  }

  /* 4. Burnet Ave & Lodi St, Near Northeast: green signs, COOK$ tagged big on the brick, the State Tower Building's stepped Art Deco top lit downtown behind, snow */
  function sgcorner() {
    const tower = '<rect x="236" y="40" width="44" height="90" fill="#cfc4ae"/>' + Array.from({ length: 10 }, (_, r) => '<rect x="242" y="' + (48 + r * 8) + '" width="32" height="3" fill="#6f7a8a"/>').join("") +
      '<rect x="244" y="26" width="28" height="16" fill="#d8ceb8"/><rect x="250" y="14" width="16" height="14" fill="#e0d7c3"/><path d="M254 14l4 -10l4 10z" fill="#e0d7c3"/><circle class="sg-glow" cx="258" cy="3" r="2.5" fill="#ff4a3a"/>';
    const bricks = Array.from({ length: 12 }, (_, r) => '<path d="M150 ' + (110 + r * 10) + 'h250" stroke="#6a3426" stroke-width="1.2"/>').join("") +
      Array.from({ length: 60 }, (_, i) => { const r = Math.floor(i / 12), c = i % 12; return '<path d="M' + (152 + c * 21 + (r % 2) * 10) + ' ' + (110 + r * 10) + 'v10" stroke="#6a3426" stroke-width="1"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sg4)"/>' +
      '<rect x="0" y="120" width="400" height="40" fill="#2a3346"/><rect x="30" y="98" width="40" height="62" fill="#353f55"/><rect x="180" y="92" width="40" height="68" fill="#353f55"/><rect x="300" y="100" width="50" height="60" fill="#2f394d"/>' +
      tower +
      '<rect x="150" y="104" width="250" height="132" fill="#8a4434"/>' + bricks +
      tag("COOK$", 172, 180, 52, GOLD, -6) + tag("LET HIM COOK", 196, 216, 20, ORANGE, -4) + tag("SALT CITY", 300, 132, 14, ICE, -3) +
      '<rect class="sg-sp" x="358" y="140" width="4" height="4" fill="' + GOLD + '"/><rect class="sg-sp sg-sp2" x="366" y="150" width="3" height="3" fill="' + ORANGE + '"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#4c4f55"/><rect x="0" y="232" width="400" height="5" fill="#8e9196"/>' +
      '<rect x="56" y="70" width="5" height="166" fill="#5a5f66"/>' + sign(8, 64, 104, "Burnet Ave") + sign(18, 88, 84, "Lodi St") +
      '<rect class="sg-glow" x="98" y="40" width="22" height="8" rx="3" fill="#fff1b8"/><path d="M61 44h40" stroke="#5a5f66" stroke-width="3"/>' +
      snow(24),
      sky("sg4", "#1c2240", "#d07a3e"));
  }

  window.SCENES = { sgstation: sgstation, sgchurch: sgchurch, sgdome: sgdome, sgniamo: sgniamo, sgcorner: sgcorner };
})();
