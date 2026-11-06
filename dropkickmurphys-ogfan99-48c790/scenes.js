/* dropkickmurphys scenes (Regions tab: Boston + New England; Quincy, MA). CSS classes and ids prefixed dk- (the page's own anim-train is kept).
   1 Quincy Center on the Red Line (and the Old Colony Commuter Rail): open-air island platform down in the cut, the canopy overhead, the silver train with its red band sliding in.
   2 The Quincy barbershop where the band started in 1996, practicing in the basement: brick storefront, the barber pole spinning, the basement window glowing with an amp and a drum kit, notes floating up.
   3 The Huntington Avenue Grounds ("up from third base to Huntington", "Tessie"): the 1903 World Series field, now a lawn with the home-plate marker and a bronze pitcher statue in his wind-up (silhouette), the old brick behind, a ball flying, a pennant waving.
   4 USS Constitution at the Charlestown Navy Yard ("climbing up the topsails", "I'm Shipping Up to Boston"): the black hull with its white gun stripe, three masts and furled sails, flags flapping, harbor water rolling, a gull.
   5 Hancock St and Washington St in Quincy Center: green signs, DKM tagged on the brick, the gray granite columns and cupola of United First Parish Church (the Church of the Presidents) behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dkflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.dk-flk{animation:dkflick 2.2s infinite}.dk-flk2{animation-delay:.7s}' +
    '@keyframes dkpole{from{transform:translateY(0)}to{transform:translateY(-16px)}}.dk-pole{animation:dkpole .9s linear infinite}' +
    '@keyframes dknote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(24px,-60px);opacity:0}}.dk-note{animation:dknote 3s ease-out infinite}.dk-note2{animation-delay:-1s}.dk-note3{animation-delay:-2s}' +
    '@keyframes dkball{0%{transform:translate(0,0)}100%{transform:translate(300px,-150px)}}.dk-ball{animation:dkball 3.2s ease-out infinite}' +
    '@keyframes dkflag{0%,100%{transform:skewY(0)}50%{transform:skewY(7deg)}}.dk-flag{transform-box:fill-box;transform-origin:0 50%;animation:dkflag 1.5s ease-in-out infinite}' +
    '@keyframes dkwave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.dk-wave{animation:dkwave 3s linear infinite}.dk-wave2{animation-duration:4.4s}' +
    '@keyframes dkrock{0%,100%{transform:rotate(-.8deg)}50%{transform:rotate(.8deg)}}.dk-rock{transform-box:fill-box;transform-origin:50% 100%;animation:dkrock 4s ease-in-out infinite}' +
    '@keyframes dkbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-24px)}}.dk-bird{animation:dkbird 12s linear infinite}.dk-bird2{animation-delay:-6s}' +
    '@keyframes dkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dk-sp{animation:dkspray 1.4s ease-out infinite}.dk-sp2{animation-delay:.45s}' +
    '@keyframes dkcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.dk-car{animation:dkcar 7s linear infinite}.dk-car2{animation-delay:-3.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const note = (cls, x, y, c) => '<g class="dk-note ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><path d="M' + (x + 4.4) + ' ' + y + 'v-18l9 4" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
  const RED = "#da291c", CR = "#80276c", GREEN = "#1f9e4a", GOLD = "#e8b23a", CREAM = "#f4f1e8";

  /* 1. Quincy Center, Red Line + Commuter Rail, open cut with canopy */
  function dkstation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (44 + i * 48) + '" y="132" width="34" height="22" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="122" width="330" height="70" rx="8" fill="#cfd4d8" stroke="#6d757c" stroke-width="2"/>' + win +
      '<rect x="24" y="160" width="330" height="9" fill="' + RED + '"/><rect x="24" y="172" width="330" height="3" fill="' + RED + '"/>' +
      '<rect x="334" y="126" width="18" height="60" rx="4" fill="#aeb4ba"/><circle cx="344" cy="180" r="3.5" fill="#fff6c2"/>' +
      '<rect x="276" y="128" width="54" height="12" rx="2" fill="#111"/><text x="303" y="137" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">BRAINTREE</text></g>';
    const cols = [40, 120, 200, 280, 360].map(x => '<rect x="' + (x - 3) + '" y="44" width="6" height="78" fill="#55606b"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dks1)"/>' +
      /* Quincy skyline up top: granite church cupola and low blocks */
      '<g fill="#3d4656"><rect x="0" y="22" width="70" height="22"/><rect x="300" y="14" width="44" height="30"/><rect x="346" y="24" width="54" height="20"/><rect x="96" y="18" width="30" height="26"/><path d="M106 18v-8h10v8z"/></g>' +
      /* concrete retaining walls of the cut */
      '<rect x="0" y="44" width="400" height="78" fill="#9b968c"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 44v78" stroke="#8a857c" stroke-width="2"/>').join("") +
      /* canopy */
      '<path d="M0 36h400v10H0z" fill="#3a4450"/><path d="M0 46h400" stroke="#222" stroke-width="2"/>' + cols +
      '<g class="dk-flk"><rect x="60" y="48" width="44" height="4" rx="2" fill="#fff6d6"/></g><g class="dk-flk dk-flk2"><rect x="296" y="48" width="44" height="4" rx="2" fill="#fff6d6"/></g>' +
      '<rect x="86" y="62" width="228" height="30" rx="3" fill="#111"/><text x="98" y="83" ' + font + ' font-size="16" fill="#fff">Quincy Center</text>' + badge(234, 77, "RL", RED) + badge(272, 77, "CR", CR) +
      train +
      '<rect x="0" y="194" width="400" height="8" fill="#f2c200"/><rect x="0" y="202" width="400" height="58" fill="#8e8a84"/><path d="M0 230h400" stroke="#7e7a74" stroke-width="2"/>' +
      '<rect x="36" y="212" width="6" height="36" fill="#444"/><rect x="22" y="208" width="34" height="8" rx="2" fill="#555"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '">QUINCY CENTER · RED LINE · OLD COLONY</text>',
      sky("dks1", "#1f2a44", "#5a6b8c"));
  }

  /* 2. The barbershop in Quincy, the band's first practice space in the basement */
  function dkbarber() {
    const bricks = Array.from({ length: 14 }, (_, i) => '<path d="M0 ' + (30 + i * 10) + 'h400" stroke="#6e3526" stroke-width="1"/>').join("");
    const pole = '<g><rect x="300" y="64" width="18" height="70" rx="9" fill="#f4f1e8" stroke="#555" stroke-width="2"/>' +
      '<clipPath id="dkpc"><rect x="302" y="66" width="14" height="66" rx="7"/></clipPath><g clip-path="url(#dkpc)"><g class="dk-pole">' +
      Array.from({ length: 8 }, (_, i) => '<path d="M300 ' + (62 + i * 16) + 'l20 -12v6l-20 12z" fill="#c8102e"/><path d="M300 ' + (70 + i * 16) + 'l20 -12v4l-20 12z" fill="#1f3a93"/>').join("") +
      '</g></g><rect x="298" y="58" width="22" height="8" rx="3" fill="#c9a24a"/><rect x="298" y="132" width="22" height="8" rx="3" fill="#c9a24a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dks2)"/>' +
      '<rect x="0" y="24" width="400" height="160" fill="#8a4434"/>' + bricks +
      '<rect x="40" y="30" width="44" height="34" fill="#f6dfa3" opacity=".75"/><rect x="316" y="30" width="44" height="22" fill="#f6dfa3" opacity=".75"/>' +
      /* storefront */
      '<rect x="60" y="70" width="220" height="12" fill="#1f3a5c"/><text x="170" y="80" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '">BARBER SHOP</text>' +
      '<rect x="66" y="82" width="208" height="70" fill="#2a3540"/><rect x="72" y="88" width="120" height="58" fill="#f3d9a4" opacity=".9"/><rect x="200" y="88" width="68" height="64" fill="#5a3a2a"/>' +
      /* barber chair and mirror inside */
      '<rect x="82" y="94" width="40" height="30" rx="3" fill="#c7d8e0" stroke="#7a8a92" stroke-width="2"/><rect x="132" y="112" width="22" height="16" rx="3" fill="#8b1e1e"/><rect x="128" y="126" width="30" height="5" fill="#333"/><rect x="141" y="131" width="4" height="12" fill="#555"/>' +
      '<rect x="210" y="98" width="8" height="8" rx="4" fill="#c9a24a"/>' +
      pole +
      /* sidewalk and basement window */
      '<rect x="0" y="152" width="400" height="10" fill="#c7c1b5"/><rect x="0" y="162" width="400" height="22" fill="#5d4a40"/>' +
      '<rect x="96" y="164" width="150" height="18" fill="#ffcf6b" opacity=".9"/><path d="M96 164h150M171 164v18" stroke="#3a2a20" stroke-width="2"/>' +
      '<rect x="106" y="170" width="12" height="12" fill="#222"/><rect x="108" y="172" width="8" height="5" fill="#666"/><ellipse cx="146" cy="178" rx="10" ry="4" fill="#c0392b"/><ellipse cx="160" cy="174" rx="6" ry="2" fill="#d4af37"/><rect x="190" y="168" width="6" height="14" fill="#2b2b2b"/><circle cx="214" cy="176" r="5" fill="#8a5a2b"/>' +
      note("", 140, 160, GOLD) + note("dk-note2", 178, 162, GREEN) + note("dk-note3", 210, 160, CREAM) +
      '<rect x="0" y="184" width="400" height="76" fill="#4a4a4f"/><path d="M0 222h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="18 14"/>' +
      car("dk-car", 0, 228, "#1f6a3a") + car("dk-car dk-car2", 0, 244, "#d8d8d8") +
      '<text x="200" y="18" text-anchor="middle" ' + font + ' font-size="11" fill="' + CREAM + '">QUINCY · WHERE IT STARTED, 1996</text>',
      sky("dks2", "#1c2347", "#3c3a6b"));
  }

  /* 3. Huntington Avenue Grounds, home of the 1903 World Series */
  function dkgrounds() {
    const statue = '<g fill="#5b4a2e"><rect x="186" y="150" width="40" height="26" fill="#8d8f93"/><rect x="182" y="146" width="48" height="6" fill="#a4a6aa"/>' +
      /* pitcher in wind-up, plain silhouette */
      '<circle cx="206" cy="88" r="7"/><path d="M200 96h12l4 26h-6l-2 24h-6l-2 -24h-4z"/><path d="M212 98l14 -12 4 4 -14 14z"/><path d="M200 98l-12 8 2 4 12 -6z"/><path d="M204 120l-14 26h6l12 -22z"/><path d="M210 120l10 26h-6l-8 -20z"/><rect x="200" y="80" width="12" height="4" rx="1"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dks3)"/>' +
      '<g class="dk-bird"><path d="M20 40q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* brick buildings behind */
      '<rect x="0" y="92" width="150" height="84" fill="#9a4b33"/><rect x="262" y="84" width="138" height="92" fill="#9a4b33"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (14 + i * 34) + '" y="104" width="20" height="26" fill="#d9c7a0"/><rect x="' + (14 + i * 34) + '" y="140" width="20" height="26" fill="#d9c7a0"/>').join("") +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (276 + i * 32) + '" y="98" width="20" height="26" fill="#d9c7a0"/><rect x="' + (276 + i * 32) + '" y="136" width="20" height="26" fill="#d9c7a0"/>').join("") +
      /* pennant */
      '<rect x="160" y="40" width="3" height="136" fill="#8a8f96"/><g class="dk-flag"><path d="M163 42l50 10 -50 10z" fill="#c8102e"/><text x="168" y="55" ' + font + ' font-size="6" fill="#fff">ROOTERS</text></g>' +
      statue +
      /* lawn and home plate marker */
      '<rect x="0" y="176" width="400" height="84" fill="#4f8a3a"/><path d="M0 200q200 -14 400 0" stroke="#6aa14c" stroke-width="3" fill="none"/>' +
      '<path d="M120 214h20v8l-10 8 -10 -8z" fill="#f4f1e8" stroke="#555" stroke-width="1.5"/>' +
      '<rect x="270" y="196" width="104" height="30" rx="3" fill="#2e2a24"/><text x="322" y="208" text-anchor="middle" ' + font + ' font-size="7" fill="' + GOLD + '">HUNTINGTON AVE GROUNDS</text><text x="322" y="220" text-anchor="middle" ' + font + ' font-size="7" fill="' + GOLD + '">FIRST WORLD SERIES</text>' +
      '<g class="dk-ball"><circle cx="70" cy="200" r="5" fill="#fff" stroke="#c8102e" stroke-width="1.2"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '">UP FROM THIRD BASE TO HUNTINGTON</text>',
      sky("dks3", "#7fb6e0", "#eaf4fb"));
  }

  /* 4. USS Constitution, Charlestown Navy Yard */
  function dkship() {
    const mast = (x, h) => '<rect x="' + (x - 2) + '" y="' + (150 - h) + '" width="4" height="' + h + '" fill="#5a3d24"/>' +
      [0, 1, 2].map(i => '<rect x="' + (x - 26 + i * 4) + '" y="' + (150 - h + 10 + i * 30) + '" width="' + (52 - i * 8) + '" height="4" fill="#5a3d24"/><rect x="' + (x - 24 + i * 4) + '" y="' + (150 - h + 14 + i * 30) + '" width="' + (48 - i * 8) + '" height="7" rx="3" fill="#efe6cf"/>').join("");
    const ports = Array.from({ length: 14 }, (_, i) => '<rect x="' + (78 + i * 18) + '" y="160" width="8" height="6" fill="#1a1a1a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dks4)"/>' +
      '<g class="dk-bird"><path d="M20 50q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="dk-bird dk-bird2"><path d="M20 70q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* rigging lines */
      '<path d="M60 152L130 36M130 36L210 30M210 30L290 40M290 40L350 152M130 36L130 152M60 152L210 30" stroke="#3b2b1e" stroke-width="1" fill="none" opacity=".7"/>' +
      '<g class="dk-rock">' + mast(130, 116) + mast(210, 124) + mast(290, 108) +
      '<g class="dk-flag"><rect x="210" y="20" width="22" height="12" fill="#c8102e"/><rect x="210" y="20" width="10" height="7" fill="#1f3a93"/><path d="M210 25h22M210 29h22" stroke="#fff" stroke-width="1.4"/></g>' +
      /* hull: black with the white gun stripe, copper bottom */
      '<path d="M50 150h306l-8 40H66z" fill="#141414"/><rect x="62" y="156" width="290" height="14" fill="#f2efe6"/>' + ports +
      '<path d="M66 190h282l-6 10H72z" fill="#b5652b"/><path d="M356 150l24 -8 -2 6 -24 8z" fill="#5a3d24"/></g>' +
      /* water */
      '<rect x="0" y="196" width="400" height="64" fill="#2f5e86"/>' +
      '<g class="dk-wave">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' 210q10 -6 20 0t20 0" stroke="#9cc4e4" stroke-width="2" fill="none"/>').join("") + '</g>' +
      '<g class="dk-wave dk-wave2">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40 + 20) + ' 232q10 -6 20 0t20 0" stroke="#7fb0d8" stroke-width="2" fill="none"/>').join("") + '</g>' +
      '<rect x="0" y="182" width="40" height="18" fill="#7a6a58"/><rect x="360" y="182" width="40" height="18" fill="#7a6a58"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '">CHARLESTOWN NAVY YARD · CLIMBING UP THE TOPSAILS</text>',
      sky("dks4", "#f0b27a", "#fbe3c4"));
  }

  /* 5. Hancock St and Washington St, Quincy Center, United First Parish Church behind */
  function dkcorner() {
    const church = '<g><rect x="120" y="76" width="140" height="62" fill="#9a9b9e"/><path d="M114 78l76 -28 76 28z" fill="#8a8b8e"/><rect x="114" y="76" width="152" height="6" fill="#b4b5b8"/>' +
      [128, 154, 180, 206, 232].map(x => '<rect x="' + x + '" y="82" width="10" height="56" fill="#c3c4c7"/>').join("") +
      '<rect x="168" y="30" width="44" height="24" fill="#a9aaad"/><rect x="174" y="14" width="32" height="18" fill="#b4b5b8"/>' +
      [176, 186, 196].map(x => '<rect x="' + x + '" y="18" width="4" height="12" fill="#6b6c70"/>').join("") +
      '<path d="M172 14h36l-18 -10z" fill="#8a8b8e"/><rect x="188" y="0" width="4" height="6" fill="#c9a24a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dks5)"/>' +
      '<g fill="#2b2f45"><rect x="0" y="92" width="80" height="46"/><rect x="300" y="84" width="100" height="54"/></g>' +
      church +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("DKM", 30, 196, 62, GREEN, -6) + tag("DROPKICK MURPHYS", 22, 218, 17, GOLD, -3) + tag("SHIPPING UP", 226, 186, 17, CREAM, -5) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 140, "Hancock St") + sign(244, 124, 152, "Washington St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="dk-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="dk-sp"><circle cx="150" cy="170" r="3" fill="' + GREEN + '" opacity=".7"/></g><g class="dk-sp dk-sp2"><circle cx="156" cy="164" r="2" fill="' + GREEN + '" opacity=".6"/></g>',
      sky("dks5", "#24305a", "#e89a62"));
  }

  window.SCENES = { dkstation: dkstation, dkbarber: dkbarber, dkgrounds: dkgrounds, dkship: dkship, dkcorner: dkcorner };
})();
