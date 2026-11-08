/* Bankroll Fresh scenes (Regions tab: Atlanta; Zone 3 - "born and raised in Zone 3", south side of downtown: Mechanicsville / Pittsburgh / Summerhill).
   CSS classes and ids prefixed bf- (the page's own anim-train is kept on the bus).
   1 MARTA Route 42 (McDaniel St / Pryor Rd) pulling up on McDaniel St SW in Pittsburgh: white MARTA bus with the blue + orange bands,
     the stop flag, the little shotgun and craftsman houses (his mother drove a MARTA bus).
   2 The old Turner Field in Summerhill, Zone 3 (now Center Parc Stadium): red-brick and white-steel ballpark front, the tall light towers,
     pennants flapping.
   3 Bourbon Street, New Orleans ("All-Star 2014 ... on Bourbon" - Hot Boy): iron balconies, gas lamps, beads flying, neon (no names).
   4 Sydney Harbour ("...went up out in Sydney" - Sydney): the white Opera House sails, the Harbour Bridge arch behind, a ferry crossing.
   5 McDaniel St SW and Fulton St SW in Mechanicsville: green signs, BANKROLL FRESH tagged with STREET MONEY and ZONE 3, downtown's
     skyline with the lit stepped crown of the Truist Plaza tower behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bfblink{0%,100%{opacity:1}50%{opacity:.2}}.bf-blink{animation:bfblink 1.1s infinite}.bf-blink2{animation-delay:-.55s}' +
    '@keyframes bfflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.bf-flag{transform-box:fill-box;transform-origin:0% 50%;animation:bfflag 1.3s ease-in-out infinite}' +
    '@keyframes bfbead{0%{transform:translate(0,0)}50%{transform:translate(14px,-26px)}100%{transform:translate(28px,0)}}.bf-bead{animation:bfbead 1.6s ease-in-out infinite}.bf-bead2{animation-delay:-.8s}' +
    '@keyframes bfferry{from{transform:translateX(-120px)}to{transform:translateX(440px)}}.bf-ferry{animation:bfferry 16s linear infinite}' +
    '@keyframes bfwave{0%,100%{transform:translateX(0);opacity:.35}50%{transform:translateX(10px);opacity:.8}}.bf-wave{animation:bfwave 3s ease-in-out infinite}.bf-wave2{animation-delay:-1.5s}' +
    '@keyframes bfspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.bf-sp{animation:bfspray 1.4s ease-out infinite}.bf-sp2{animation-delay:.5s}' +
    '@keyframes bftw{0%,100%{opacity:.25}50%{opacity:1}}.bf-tw{animation:bftw 1.8s ease-in-out infinite}.bf-tw2{animation-delay:-.9s}' +
    '@keyframes bfroll{from{transform:translateX(-140px)}to{transform:translateX(460px)}}.bf-roll{animation:bfroll 6.5s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 11) + '" fill="#fff">' + txt + '</text>';
  const label = (x, w, txt) => '<rect x="' + x + '" y="234" width="' + w + '" height="18" rx="3" fill="#000" opacity=".55"/><text x="' + (x + w / 2) + '" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="' + (i % 4 ? "" : "bf-tw" + (i % 8 ? "" : " bf-tw2")) + '" cx="' + ((i * 71) % 400) + '" cy="' + (6 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.8 : 1.3) + '" fill="#fff" opacity=".7"/>').join("");
  const BLUE = "#3fa9f5", GOLD = "#f5c542", RED = "#e8433a", MBLUE = "#1f5fa8", MORANGE = "#f08a24";

  /* 1. MARTA Route 42 on McDaniel St SW */
  function bfbus() {
    const house = (x, c, roof) => '<rect x="' + x + '" y="112" width="58" height="56" fill="' + c + '"/><path d="M' + (x - 6) + ' 114l35 -26l35 26z" fill="' + roof + '"/>' +
      '<rect x="' + (x + 6) + '" y="126" width="14" height="16" fill="#2a3540"/><rect x="' + (x + 38) + '" y="126" width="14" height="16" fill="#2a3540"/><rect x="' + (x + 23) + '" y="140" width="12" height="28" fill="#5a3a24"/>' +
      '<rect x="' + (x - 4) + '" y="146" width="66" height="4" fill="#e9e3d6"/>';
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (110 + i * 42) + '" y="152" width="32" height="22" rx="2" fill="#1e2a33"/>').join("");
    const bus = '<g class="anim-train"><rect x="90" y="140" width="250" height="70" rx="10" fill="#f4f4f2" stroke="#9aa0a6" stroke-width="2"/>' + win +
      '<rect x="90" y="182" width="250" height="6" fill="' + MBLUE + '"/><rect x="90" y="190" width="250" height="4" fill="' + MORANGE + '"/>' +
      '<rect x="318" y="150" width="20" height="44" rx="2" fill="#1e2a33"/><rect x="250" y="142" width="66" height="10" rx="2" fill="#111"/>' +
      '<text x="283" y="150" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">42 McDANIEL ST</text>' +
      '<circle cx="130" cy="212" r="12" fill="#222"/><circle cx="130" cy="212" r="5" fill="#888"/><circle cx="300" cy="212" r="12" fill="#222"/><circle cx="300" cy="212" r="5" fill="#888"/>' +
      '<circle class="bf-blink" cx="336" cy="200" r="3" fill="#ffd36b"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bfs1)"/>' +
      '<g fill="#7e93a8" opacity=".7"><rect x="150" y="30" width="18" height="70"/><rect x="172" y="46" width="22" height="54"/><path d="M200 100V22l8 -12l8 12v78z"/><rect x="222" y="50" width="20" height="50"/></g>' +
      '<rect x="0" y="100" width="400" height="70" fill="#7aa35a"/>' +
      house(6, "#d9c7a0", "#6d4a3a") + house(84, "#9cc0c8", "#4d4d55") + house(300, "#e2b3a0", "#5a3a2a") +
      '<rect x="0" y="168" width="400" height="10" fill="#cfcac0"/>' +
      '<rect x="0" y="178" width="400" height="82" fill="#3a3a3e"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      /* bus stop flag */
      '<rect x="370" y="96" width="4" height="82" fill="#6b6b6b"/><rect x="356" y="96" width="32" height="26" rx="3" fill="' + MBLUE + '"/><text x="372" y="113" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">42</text>' +
      bus + label(110, 180, "McDANIEL ST SW · ZONE 3"),
      sky("bfs1", "#6aa5da", "#f6d9a2"));
  }

  /* 2. The old Turner Field, Summerhill (now Center Parc Stadium) */
  function bfstadium() {
    const tower = (x) => '<rect x="' + (x - 3) + '" y="34" width="6" height="110" fill="#d9dde0"/><rect x="' + (x - 22) + '" y="18" width="44" height="22" fill="#e8ecef" stroke="#9aa0a6" stroke-width="2"/>' +
      Array.from({ length: 4 }, (_, i) => '<circle class="bf-blink' + (i % 2 ? " bf-blink2" : "") + '" cx="' + (x - 15 + i * 10) + '" cy="29" r="3.5" fill="#fff6c2"/>').join("");
    const pen = (x, c) => '<rect x="' + (x - 1) + '" y="72" width="2" height="30" fill="#777"/><path class="bf-flag" d="M' + x + ' 72l22 6l-22 6z" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bfs2)"/>' + stars(16) +
      tower(40) + tower(360) +
      /* brick base, white steel truss upper deck */
      '<rect x="40" y="102" width="320" height="104" fill="#a2452e"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (56 + i * 52) + ' 206v-56q20 -22 40 0v56z" fill="#2a2a30"/>').join("") +
      '<rect x="40" y="96" width="320" height="10" fill="#f2f2ee"/>' +
      '<path d="M40 96l20 -26h280l20 26z" fill="#e6e8e4" stroke="#b0b4b0" stroke-width="2"/>' +
      '<g stroke="#b0b4b0" stroke-width="2" fill="none">' + Array.from({ length: 13 }, (_, i) => '<path d="M' + (66 + i * 22) + ' 72l11 22l11 -22"/>').join("") + '</g>' +
      pen(80, RED) + pen(150, BLUE) + pen(230, GOLD) + pen(300, RED) +
      '<rect x="0" y="206" width="400" height="54" fill="#5a5a60"/><path d="M0 232h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      label(70, 260, "THE OLD TURNER FIELD, SUMMERHILL · ZONE 3"),
      sky("bfs2", "#0f1838", "#3a4a7a"));
  }

  /* 3. Bourbon Street, New Orleans */
  function bfbourbon() {
    const bldg = (x, w, c) => '<rect x="' + x + '" y="40" width="' + w + '" height="170" fill="' + c + '"/>' +
      '<rect x="' + (x - 4) + '" y="104" width="' + (w + 8) + '" height="5" fill="#1b1b1b"/>' +
      '<g stroke="#1b1b1b" stroke-width="2">' + Array.from({ length: Math.floor(w / 10) }, (_, i) => '<path d="M' + (x + 4 + i * 10) + ' 86v18"/>').join("") + '<path d="M' + (x - 4) + ' 86h' + (w + 8) + '"/></g>' +
      '<rect x="' + (x + 10) + '" y="54" width="16" height="30" fill="#2a3540"/><rect x="' + (x + w - 26) + '" y="54" width="16" height="30" fill="#2a3540"/>' +
      '<rect x="' + (x + 10) + '" y="130" width="18" height="80" fill="#2a3540"/><rect x="' + (x + w - 28) + '" y="130" width="18" height="80" fill="#2a3540"/>';
    const lamp = x => '<rect x="' + (x - 2) + '" y="140" width="4" height="74" fill="#1b1b1b"/><rect x="' + (x - 7) + '" y="126" width="14" height="16" rx="2" fill="#1b1b1b"/><rect class="bf-blink" x="' + (x - 4) + '" y="129" width="8" height="10" fill="#ffcf6b"/>';
    const bead = (x, y, c, d) => '<g class="bf-bead' + (d ? " bf-bead2" : "") + '"><circle cx="' + x + '" cy="' + y + '" r="8" fill="none" stroke="' + c + '" stroke-width="3" stroke-dasharray="2 2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bfs3)"/>' + stars(12) +
      bldg(0, 128, "#c9875a") + bldg(136, 128, "#7fa0b8") + bldg(272, 128, "#d6b45e") +
      '<rect class="bf-blink" x="150" y="112" width="100" height="10" rx="5" fill="#ff4fa3" opacity=".85"/><rect class="bf-blink bf-blink2" x="18" y="112" width="80" height="10" rx="5" fill="#4fe0ff" opacity=".85"/>' +
      lamp(132) + lamp(268) +
      bead(60, 96, GOLD) + bead(200, 92, "#9b59d0", 1) + bead(330, 96, "#2ecc71") +
      '<rect x="0" y="210" width="400" height="50" fill="#4a4844"/>' +
      '<rect x="16" y="216" width="58" height="14" fill="#fff"/><text x="45" y="226.5" text-anchor="middle" ' + font + ' font-size="9" fill="#1d4f91">BOURBON</text>' +
      label(90, 220, "BOURBON ST · ALL-STAR 2014 (HOT BOY)"),
      sky("bfs3", "#1a1240", "#5a3a7a"));
  }

  /* 4. Sydney Harbour: the Opera House sails, the Harbour Bridge behind */
  function bfsydney() {
    const sail = (x, h, w) => '<path d="M' + x + ' 170q' + (w * 0.15) + ' -' + h + ' ' + w + ' -' + h + 'q-' + (w * 0.35) + ' ' + (h * 0.45) + ' -' + (w * 0.2) + ' ' + h + 'z" fill="#f7f5ee" stroke="#cfcabd" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bfs4)"/>' +
      /* Harbour Bridge arch */
      '<path d="M200 140q100 -110 200 0" stroke="#5c6670" stroke-width="10" fill="none"/><path d="M200 140q100 -90 200 0" stroke="#5c6670" stroke-width="4" fill="none"/>' +
      '<g stroke="#5c6670" stroke-width="2">' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (220 + i * 20) + ' 140v-' + (20 + Math.round(Math.sin((i + 1) / 10 * Math.PI) * 50)) + '"/>').join("") + '</g>' +
      '<rect x="190" y="136" width="210" height="6" fill="#5c6670"/><rect x="186" y="104" width="16" height="40" fill="#b8a98a"/>' +
      '<rect x="0" y="150" width="400" height="70" fill="#1f6fa8"/>' +
      '<path class="bf-wave" d="M20 196h40M140 206h50M260 190h40" stroke="#bfe8f5" stroke-width="2"/><path class="bf-wave bf-wave2" d="M80 212h30M210 198h40M320 214h40" stroke="#bfe8f5" stroke-width="2"/>' +
      /* Opera House on its granite podium */
      '<rect x="20" y="168" width="200" height="16" fill="#c9a77a"/>' +
      sail(40, 70, 60) + sail(76, 58, 50) + sail(106, 44, 40) + sail(128, 62, 54) + sail(160, 48, 42) + sail(184, 34, 30) +
      '<g class="bf-ferry"><path d="M0 220h70l-8 10H8z" fill="#1d6b3a"/><rect x="12" y="208" width="46" height="12" fill="#f2d24a"/><rect x="18" y="210" width="34" height="5" fill="#2a3540"/></g>' +
      '<rect x="0" y="230" width="400" height="30" fill="#155a88"/>' +
      label(100, 200, "SYDNEY · \"OUT IN SYDNEY\""),
      sky("bfs4", "#4fa8e0", "#fbe3b4"));
  }

  /* 5. McDaniel St SW and Fulton St SW, the stepped crown of Truist Plaza behind */
  function bfcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bfs5)"/>' + stars(22) +
      /* skyline + the stepped, lit crown */
      '<g fill="#2c3550"><rect x="262" y="60" width="18" height="50"/><rect x="360" y="66" width="20" height="44"/><rect x="384" y="80" width="16" height="30"/></g>' +
      '<g fill="#3d4766"><rect x="290" y="40" width="60" height="70"/><rect x="296" y="30" width="48" height="12"/><rect x="302" y="20" width="36" height="12"/><rect x="308" y="10" width="24" height="12"/><rect x="314" y="2" width="12" height="10"/></g>' +
      '<g class="bf-blink" stroke="#9fd3ff" stroke-width="1.5" fill="none"><path d="M296 30h48M302 20h36M308 10h24M314 2h12"/></g>' +
      '<g fill="#fff3c4" opacity=".7">' + Array.from({ length: 5 }, (_, r) => Array.from({ length: 4 }, (_, c) => '<rect x="' + (298 + c * 13) + '" y="' + (48 + r * 11) + '" width="5" height="4"/>').join("")).join("") + '</g>' +
      /* wall */
      '<rect x="0" y="104" width="262" height="100" fill="#4b4f57"/><g stroke="#3d4148" stroke-width="1">' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (114 + i * 10) + 'h262"/>').join("") + '</g>' +
      tag("STREET MONEY", 20, 130, 18, GOLD, -3) + tag("BANKROLL", 14, 170, 40, BLUE, -6) + tag("FRESH", 60, 202, 32, "#fff", -4) + tag("ZONE 3", 176, 200, 18, RED, -2) +
      '<g fill="' + BLUE + '"><circle class="bf-sp" cx="236" cy="160" r="3"/><circle class="bf-sp bf-sp2" cx="228" cy="168" r="2.5"/></g>' +
      /* sign pole */
      '<rect x="326" y="110" width="6" height="96" fill="#6b6b6b"/>' + sign(264, 112, 130, "McDaniel St SW", 11) + sign(270, 138, 118, "Fulton St SW", 11) +
      '<rect x="0" y="204" width="400" height="56" fill="#3a3a3e"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="bf-roll"><rect x="0" y="240" width="46" height="13" rx="4" fill="' + BLUE + '"/><circle cx="10" cy="254" r="4" fill="#111"/><circle cx="36" cy="254" r="4" fill="#111"/></g>',
      sky("bfs5", "#0d1430", "#3a3f6a"));
  }

  window.SCENES = { bfbus, bfstadium, bfbourbon, bfsydney, bfcorner };
})();
