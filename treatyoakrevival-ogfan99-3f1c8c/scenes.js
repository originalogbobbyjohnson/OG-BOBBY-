/* treatyoakrevival scenes (Regions: Houston + Texas / Genres: country; Odessa TX - I-20 / US 385, the Ector Theatre, the Odessa Jackrabbit, the UTPB Stonehenge replica, Friday night lights at Ratliff Stadium). CSS classes prefixed tor- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes torglow{0%,100%{opacity:.4}50%{opacity:1}}.tor-glow{animation:torglow 2.2s ease-in-out infinite}.tor-g2{animation-delay:-1.1s}' +
    '@keyframes torneon{0%,46%,54%,100%{opacity:1}50%{opacity:.25}}.tor-neon{animation:torneon 3s steps(1) infinite}' +
    '@keyframes torcloud{0%{transform:translateX(0)}100%{transform:translateX(44px)}}.tor-cl{animation:torcloud 14s ease-in-out infinite alternate}' +
    '@keyframes torroll{0%{transform:translateX(-60px) rotate(0deg)}100%{transform:translateX(460px) rotate(900deg)}}.tor-weed{transform-box:fill-box;transform-origin:50% 50%;animation:torroll 9s linear infinite}.tor-weed2{animation-delay:-4.5s}' +
    '@keyframes torwalk{0%{transform:translateX(-120px)}100%{transform:translateX(440px)}}.tor-walk{animation:torwalk 15s linear infinite}.tor-walk2{animation-delay:-7.5s}' +
    '@keyframes torear{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-7deg)}}.tor-ear{transform-box:fill-box;transform-origin:50% 100%;animation:torear 2.6s ease-in-out infinite}' +
    '@keyframes torbird{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,0)}}.tor-bird{animation:torbird 13s linear infinite}' +
    '@keyframes torsun{0%,100%{transform:translateY(0)}50%{transform:translateY(5px)}}.tor-sun{animation:torsun 6s ease-in-out infinite}' +
    '@keyframes torspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tor-sp{animation:torspray 1.4s ease-out infinite}.tor-sp2{animation-delay:.45s}' +
    '@keyframes tortwk{0%,100%{opacity:.2}50%{opacity:1}}.tor-tw{animation:tortwk 1.8s ease-in-out infinite}.tor-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  /* Interstate shield: blue body, red top band */
  const iShield = (x, y, n) => '<path d="M' + x + ' ' + (y + 4) + 'q20 -8 40 0q4 26 -20 40q-24 -14 -20 -40z" fill="#fff"/><path d="M' + (x + 2) + ' ' + (y + 6) + 'q18 -7 36 0l-.4 6h-35.2z" fill="#c8102e"/><path d="M' + (x + 1.6) + ' ' + (y + 13) + 'h36.8q1 20 -18.4 29q-19.4 -9 -18.4 -29z" fill="#003f87"/>' +
    '<text x="' + (x + 20) + '" y="' + (y + 11) + '" text-anchor="middle" ' + font + ' font-size="4.6" fill="#fff">INTERSTATE</text><text x="' + (x + 20) + '" y="' + (y + 31) + '" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">' + n + '</text>';
  const usShield = (x, y, n) => '<path d="M' + x + ' ' + y + 'h40q-2 6 2 12q-4 22 -22 30q-18 -8 -22 -30q4 -6 2 -12z" fill="#fff" stroke="#111" stroke-width="2.5"/><text x="' + (x + 20) + '" y="' + (y + 28) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#111">' + n + '</text>';
  const GOLD = "#e8b04a", RUST = "#c8553d", SAGE = "#8fb39a", CREAM = "#f3ead8";
  /* mesquite bush + tumbleweed */
  const mesq = (x, y, s) => '<path d="M' + x + ' ' + y + 'l-2 -' + (8 * s) + 'M' + x + ' ' + y + 'l4 -' + (7 * s) + '" stroke="#5a4630" stroke-width="2"/><ellipse cx="' + (x - 2) + '" cy="' + (y - 10 * s) + '" rx="' + (9 * s) + '" ry="' + (5 * s) + '" fill="#6a7a44"/><ellipse cx="' + (x + 5) + '" cy="' + (y - 9 * s) + '" rx="' + (7 * s) + '" ry="' + (4 * s) + '" fill="#7a8a4e"/>';
  const weed = (x, y, r, cls) => '<g class="tor-weed ' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="none" stroke="#a07a4a" stroke-width="1.6"/><path d="M' + (x - r) + ' ' + y + 'q' + r + ' -' + r + ' ' + (2 * r) + ' 0M' + x + ' ' + (y - r) + 'q' + r + ' ' + r + ' 0 ' + (2 * r) + 'M' + (x - r * .7) + ' ' + (y - r * .7) + 'l' + (r * 1.4) + ' ' + (r * 1.4) + '" stroke="#8a6438" stroke-width="1.2" fill="none"/></g>';

  /* 1. I-20 into Odessa: green guide sign, I-20 and US 385 shields, flat Permian Basin scrub, a far-off pumpjack, a pickup rolling in */
  function torsign() {
    let bush = "";
    [[20, 170, 1], [70, 168, .8], [330, 170, 1.1], [380, 168, .9], [262, 169, .7]].forEach(p => bush += mesq(p[0], p[1], p[2]));
    return svg(
      '<rect width="400" height="260" fill="url(#tor1)"/>' +
      '<g class="tor-sun"><circle cx="340" cy="44" r="20" fill="#fff0c0" opacity=".95"/></g>' +
      '<g class="tor-cl"><ellipse cx="60" cy="28" rx="34" ry="7" fill="#fff" opacity=".55"/><ellipse cx="236" cy="18" rx="28" ry="6" fill="#fff" opacity=".45"/></g>' +
      '<rect x="0" y="150" width="400" height="26" fill="#c9a874"/><path d="M0 152q100 -6 200 0t200 -2" stroke="#b08e5e" stroke-width="2" fill="none"/>' +
      /* distant pumpjack silhouette, small */
      '<g fill="#5a4a3a"><rect x="356" y="136" width="3" height="16"/><path d="M340 136l34 -4l0 3l-34 4z"/><path d="M340 134q-4 4 0 10l3 -1q-3 -4 0 -8z"/><rect x="352" y="148" width="12" height="4"/></g>' +
      bush +
      '<rect x="0" y="176" width="400" height="84" fill="#4a4a4e"/><rect x="0" y="174" width="400" height="4" fill="#d9d4c6"/>' +
      '<path d="M0 218h400" stroke="#f2c14e" stroke-width="3" stroke-dasharray="26 18"/><rect x="0" y="252" width="400" height="3" fill="#f2f2f2"/>' +
      '<rect x="146" y="104" width="6" height="72" fill="#9aa0a6"/><rect x="314" y="104" width="6" height="72" fill="#9aa0a6"/>' +
      '<rect x="128" y="18" width="210" height="90" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="3"/>' +
      '<text x="233" y="54" text-anchor="middle" ' + font + ' font-size="27" fill="#fff">Odessa</text>' +
      '<text x="233" y="76" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="1">US 385  DOWNTOWN</text>' +
      '<text x="233" y="96" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="1">NEXT 4 EXITS</text>' +
      iShield(40, 88, "20") + usShield(88, 92, "385") + '<rect x="58" y="130" width="4" height="46" fill="#9aa0a6"/><rect x="106" y="122" width="4" height="54" fill="#9aa0a6"/>' +
      '<g class="anim-train"><g transform="translate(150 0)"><rect x="0" y="196" width="78" height="20" rx="3" fill="' + RUST + '"/><path d="M10 196l8 -15h24l6 15z" fill="' + RUST + '"/><path d="M20 194l5 -10h14l4 10z" fill="#bfe2f0"/><rect x="50" y="190" width="28" height="6" fill="#8a3424"/>' +
      '<rect x="-2" y="206" width="5" height="5" fill="#ffd27a" class="tor-glow"/><circle cx="16" cy="218" r="7" fill="#111"/><circle cx="62" cy="218" r="7" fill="#111"/><circle cx="16" cy="218" r="3" fill="#bbb"/><circle cx="62" cy="218" r="3" fill="#bbb"/></g></g>' +
      weed(0, 166, 6) + weed(0, 160, 4, "tor-weed2"),
      sky("tor1", "#4f8fcf", "#f2d9a8"));
  }

  /* 2. The Ector Theatre (1951, Art Moderne) on N Texas Ave: dark orange brick, green granite blocks, wraparound marquee, vertical neon blade sign */
  function torector() {
    let brick = "", gran = "", bulbs = "";
    for (let r = 0; r < 14; r++) brick += '<path d="M60 ' + (40 + r * 7) + 'h290" stroke="#8a3e1e" stroke-width=".7" opacity=".55"/>';
    for (let i = 0; i < 8; i++) for (let j = 0; j < 2; j++) gran += '<rect x="' + (72 + i * 34) + '" y="' + (176 + j * 18) + '" width="30" height="15" fill="' + ((i + j) % 2 ? "#2f5a48" : "#3a6a54") + '" stroke="#1e3a2e" stroke-width="1"/>';
    for (let i = 0; i < 28; i++) bulbs += '<circle cx="' + (68 + i * 10.4) + '" cy="132" r="1.8" fill="#ffe7a0" class="tor-glow' + (i % 2 ? " tor-g2" : "") + '"/><circle cx="' + (68 + i * 10.4) + '" cy="166" r="1.8" fill="#ffe7a0" class="tor-glow' + (i % 2 ? "" : " tor-g2") + '"/>';
    const letters = "ECTOR".split("").map((c, i) => '<text x="102" y="' + (44 + i * 17) + '" text-anchor="middle" ' + font + ' font-size="15" fill="#ff5a4a" stroke="#ffd0c0" stroke-width=".5">' + c + '</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#tor2)"/>' +
      [[30, 20], [150, 12], [260, 26], [370, 14], [330, 40]].map((p, i) => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.4" fill="#fff" class="tor-tw' + (i % 2 ? " tor-tw2" : "") + '"/>').join("") +
      /* brick facade */
      '<rect x="60" y="36" width="290" height="176" fill="#b8582a"/>' + brick +
      '<rect x="56" y="30" width="298" height="8" fill="#8a3e1e"/>' +
      /* streamline bands with neon outline */
      '<rect x="140" y="52" width="196" height="6" rx="3" fill="#d8d0c0"/><rect x="140" y="66" width="196" height="6" rx="3" fill="#d8d0c0"/><rect x="140" y="80" width="196" height="6" rx="3" fill="#d8d0c0"/>' +
      '<rect x="136" y="46" width="204" height="46" fill="none" stroke="#5af0d0" stroke-width="1.5" class="tor-neon"/>' +
      /* vertical blade sign */
      '<rect x="88" y="22" width="28" height="104" rx="4" fill="#1a1a22" stroke="#5af0d0" stroke-width="2" class="tor-neon"/>' + '<g class="tor-glow">' + letters + '</g>' +
      /* marquee */
      '<path d="M58 128h294l6 8v26l-6 8h-294l-6 -8v-26z" fill="#f4efe2" stroke="#c8a040" stroke-width="2"/>' + bulbs +
      '<text x="205" y="146" text-anchor="middle" ' + font + ' font-size="11" fill="#1a1a22" letter-spacing="1">TREATY OAK REVIVAL</text>' +
      '<text x="205" y="160" text-anchor="middle" ' + font + ' font-size="9" fill="' + RUST + '" letter-spacing="2">TONIGHT  ODESSA TX</text>' +
      gran +
      /* doors + box office */
      '<rect x="176" y="178" width="58" height="34" fill="#1a1a22"/><path d="M176 178h58v34h-58z M205 178v34" stroke="#c0c4c8" stroke-width="1.5" fill="none"/>' +
      '<rect x="190" y="182" width="30" height="14" fill="#c0c4c8" opacity=".4"/>' +
      '<rect x="0" y="212" width="400" height="48" fill="#3e3e42"/><rect x="0" y="210" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="tor-walk"><circle cx="0" cy="214" r="4" fill="#3a2a22"/><rect x="-4" y="218" width="8" height="16" rx="3" fill="#6a8aa8"/><rect x="-3" y="234" width="2.5" height="10" fill="#2a2a3a"/><rect x="1" y="234" width="2.5" height="10" fill="#2a2a3a"/><path d="M-6 212h12l-2 -4h-8z" fill="#c8a070"/></g>' +
      '<g class="tor-walk tor-walk2"><circle cx="0" cy="216" r="4" fill="#5a3a22"/><rect x="-4" y="220" width="8" height="15" rx="3" fill="' + RUST + '"/><rect x="-3" y="235" width="2.5" height="10" fill="#2a2a3a"/><rect x="1" y="235" width="2.5" height="10" fill="#2a2a3a"/></g>',
      sky("tor2", "#141832", "#4a3a5a"));
  }

  /* 3. The Odessa Jackrabbit (1962): the giant jackrabbit statue downtown, tan with white belly, tumbleweeds rolling past */
  function torrabbit() {
    const F = "#b8946a", D = "#8a6a48";
    return svg(
      '<rect width="400" height="260" fill="url(#tor3)"/>' +
      '<g class="tor-cl"><ellipse cx="90" cy="34" rx="40" ry="8" fill="#fff" opacity=".6"/><ellipse cx="300" cy="22" rx="32" ry="7" fill="#fff" opacity=".5"/></g>' +
      '<g class="tor-bird"><path d="M0 60q5 -5 10 0q5 -5 10 0" stroke="#3a3a3a" stroke-width="1.6" fill="none"/></g>' +
      '<rect x="0" y="176" width="400" height="84" fill="#cdb48a"/><rect x="0" y="176" width="400" height="5" fill="#b49a70"/>' +
      '<path d="M0 230h400" stroke="#b49a70" stroke-width="2" opacity=".6"/>' +
      /* low downtown buildings behind */
      '<rect x="10" y="130" width="60" height="46" fill="#c8b8a0"/><rect x="74" y="112" width="40" height="64" fill="#a89a88"/><rect x="300" y="122" width="44" height="54" fill="#b8a890"/><rect x="348" y="138" width="46" height="38" fill="#c8b8a0"/>' +
      [[18, 140], [40, 140], [82, 122], [96, 122], [82, 140], [96, 140], [308, 132], [324, 132], [356, 148], [372, 148]].map(p => '<rect x="' + p[0] + '" y="' + p[1] + '" width="8" height="10" fill="#5a6a7a"/>').join("") +
      /* plinth */
      '<rect x="138" y="176" width="124" height="20" fill="#d8d0c0" stroke="#9a9080" stroke-width="2"/><rect x="128" y="194" width="144" height="10" fill="#bab2a2"/>' +
      '<text x="200" y="190" text-anchor="middle" ' + font + ' font-size="9" fill="#5a4a3a" letter-spacing="2">ODESSA JACKRABBIT</text>' +
      /* the rabbit, sitting up */
      '<ellipse cx="206" cy="150" rx="40" ry="28" fill="' + F + '" stroke="' + D + '" stroke-width="2"/>' +
      '<ellipse cx="236" cy="168" rx="22" ry="9" fill="' + F + '" stroke="' + D + '" stroke-width="2"/>' +
            '<ellipse cx="182" cy="120" rx="18" ry="24" fill="' + F + '" stroke="' + D + '" stroke-width="2"/>' +
      '<ellipse cx="176" cy="100" rx="17" ry="14" fill="' + F + '" stroke="' + D + '" stroke-width="2"/>' +
      '<g class="tor-ear"><ellipse cx="172" cy="64" rx="6" ry="26" fill="' + F + '" stroke="' + D + '" stroke-width="2"/><ellipse cx="172" cy="66" rx="2.8" ry="20" fill="#e8b0a0"/></g>' +
      '<g class="tor-ear" style="animation-delay:-1.3s"><ellipse cx="186" cy="66" rx="6" ry="25" fill="' + F + '" stroke="' + D + '" stroke-width="2"/><ellipse cx="186" cy="68" rx="2.8" ry="19" fill="#e8b0a0"/></g>' +
      '<circle cx="168" cy="98" r="3" fill="#2a1a10"/><circle cx="167" cy="97" r="1" fill="#fff"/><ellipse cx="161" cy="106" rx="2.4" ry="1.8" fill="#6a3a2a"/>' +
      '<ellipse cx="186" cy="140" rx="12" ry="16" fill="#f6f2ea" opacity=".9"/>' +
      '<ellipse cx="178" cy="170" rx="8" ry="5" fill="' + F + '" stroke="' + D + '" stroke-width="1.5"/>' +
      weed(0, 214, 9) + weed(0, 236, 6, "tor-weed2"),
      sky("tor3", "#58a0dc", "#f4dcb0"));
  }

  /* 4. The Stonehenge replica at UTPB, Odessa: grey limestone trilithons at West Texas sundown */
  function torstones() {
    const S = "#a8a49a", SD = "#7e7a72";
    const tri = (x, h, w) => '<rect x="' + x + '" y="' + (178 - h) + '" width="14" height="' + h + '" fill="' + S + '" stroke="' + SD + '" stroke-width="1.5"/><rect x="' + (x + w - 14) + '" y="' + (178 - h) + '" width="14" height="' + h + '" fill="' + S + '" stroke="' + SD + '" stroke-width="1.5"/>' +
      '<rect x="' + (x - 3) + '" y="' + (178 - h - 12) + '" width="' + (w + 6) + '" height="12" fill="#b4b0a6" stroke="' + SD + '" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tor4)"/>' +
      '<g class="tor-sun"><circle cx="200" cy="150" r="34" fill="#ffb24a" opacity=".95"/><circle cx="200" cy="150" r="46" fill="#ff8a3a" opacity=".25"/></g>' +
      '<g class="tor-bird"><path d="M0 70q5 -5 10 0q5 -5 10 0" stroke="#3a1e2a" stroke-width="1.6" fill="none"/><path d="M24 80q4 -4 8 0q4 -4 8 0" stroke="#3a1e2a" stroke-width="1.4" fill="none"/></g>' +
      '<rect x="0" y="176" width="400" height="84" fill="#8a6a4a"/><path d="M0 176q200 -8 400 0v6h-400z" fill="#6a5038"/>' +
      tri(40, 58, 62) + tri(160, 72, 80) + tri(298, 58, 62) +
      '<rect x="120" y="134" width="14" height="44" fill="' + S + '" stroke="' + SD + '" stroke-width="1.5"/><rect x="266" y="138" width="14" height="40" fill="' + S + '" stroke="' + SD + '" stroke-width="1.5"/>' +
      '<rect x="18" y="146" width="12" height="32" fill="' + S + '" stroke="' + SD + '" stroke-width="1.5"/><rect x="372" y="150" width="12" height="28" fill="' + S + '" stroke="' + SD + '" stroke-width="1.5"/>' +
      '<rect x="170" y="190" width="60" height="10" fill="#b4b0a6" stroke="' + SD + '" stroke-width="1.5"/>' +
      '<rect x="150" y="226" width="100" height="18" rx="2" fill="#2a1e18" opacity=".85"/><text x="200" y="239" text-anchor="middle" ' + font + ' font-size="8.5" fill="' + GOLD + '" letter-spacing="2">UTPB  ODESSA</text>' +
      weed(0, 212, 7),
      sky("tor4", "#3a3a7a", "#f0a060"));
  }

  /* 5. Their corner: N Grant Ave and E 8th St, Odessa, a brick wall with the name tagged, Friday night stadium lights glowing behind */
  function torcorner() {
    let lights = "";
    [[56, 40], [262, 40]].forEach(p => lights += '<rect x="' + (p[0] - 2) + '" y="' + p[1] + '" width="4" height="106" fill="#8a8f96"/><rect x="' + (p[0] - 18) + '" y="' + (p[1] - 14) + '" width="36" height="16" fill="#3a3a44"/>' +
      Array.from({ length: 8 }, (_, i) => '<circle cx="' + (p[0] - 14 + (i % 4) * 9.3) + '" cy="' + (p[1] - 10 + Math.floor(i / 4) * 8) + '" r="3" fill="#fff8d8" class="tor-glow' + (i % 2 ? " tor-g2" : "") + '"/>').join("") +
      '<circle cx="' + p[0] + '" cy="' + (p[1] - 6) + '" r="26" fill="#fff8d8" opacity=".12"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#tor5)"/>' +
      [[30, 20], [120, 30], [210, 14], [280, 32], [380, 12]].map((p, i) => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.4" fill="#fff" class="tor-tw' + (i % 2 ? " tor-tw2" : "") + '"/>').join("") +
      lights +
      /* stadium stands rim */
      '<path d="M90 146q110 -40 220 0z" fill="#2a2a34"/><path d="M100 146q100 -30 200 0" stroke="#e8e8e8" stroke-width="2" fill="none" opacity=".5"/>' +
      '<rect x="0" y="146" width="400" height="76" fill="#9a4a2a"/>' +
      Array.from({ length: 10 }, (_, r) => '<path d="M0 ' + (146 + r * 7.6) + 'h400" stroke="#7a3a1e" stroke-width=".8" opacity=".6"/>').join("") +
      '<rect x="0" y="142" width="400" height="6" fill="#5a2a14"/>' +
      tag("TREATY OAK", 10, 186, 27, GOLD, -5) + tag("REVIVAL", 40, 212, 22, CREAM, -4) + tag("TOR", 222, 196, 22, SAGE, -4) + tag("WEST TEXAS", 214, 214, 12, RUST, -3) +
      '<g class="tor-sp"><circle cx="214" cy="190" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="tor-sp tor-sp2"><circle cx="220" cy="184" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="222" width="400" height="38" fill="#3e3e42"/><rect x="0" y="220" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="350" y="60" width="5" height="162" fill="#8a9096"/>' +
      sign(290, 62, 104, "N Grant Ave") + sign(304, 88, 90, "E 8th St") +
      weed(0, 244, 6),
      sky("tor5", "#141030", "#5a3040"));
  }

  window.SCENES = { torsign: torsign, torector: torector, torrabbit: torrabbit, torstones: torstones, torcorner: torcorner };
})();
