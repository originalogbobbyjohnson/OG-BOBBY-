/* Mike Dimes scenes (Regions tab: HOUSTON + TEXAS; born in Killeen, military family that moved around, settled in San Antonio -
   Johnson High School, part-time cashier at the grocery off Bulverde Rd and Loop 1604, started rapping at 17. DLOG = DoubleLambOG.)
   1 VIA Centro Plaza (VIA Metropolitan Transit's downtown transit center): a VIA Primo bus pulling into the bay.
   2 Johnson High hallway: lockers, a trophy case, the bell ringing, a notebook of bars on a desk.
   3 The grocery on Bulverde Rd: checkout lane, the scanner beeping, receipt printing ("I never throw away receipts").
   4 Mission San Jose: the limestone church with its bell tower and dome, papel picado blowing across the plaza.
   5 Bulverde Rd and Loop 1604: green signs, MIKE DIMES tagged, the Tower of the Americas behind.
   CSS classes prefixed "md" (the page's own anim-train is kept). No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mdBlink{0%,100%{opacity:1}50%{opacity:.15}}.mdBl{animation:mdBlink 1s steps(1) infinite}.mdBl2{animation-delay:.5s}' +
    '@keyframes mdFlag{0%,100%{transform:skewX(0)}50%{transform:skewX(10deg)}}.mdFlag{transform-box:fill-box;transform-origin:50% 0;animation:mdFlag 1.4s ease-in-out infinite}.mdF2{animation-delay:-.7s}' +
    '@keyframes mdRing{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.mdRing{transform-box:fill-box;transform-origin:50% 0;animation:mdRing .5s ease-in-out infinite}' +
    '@keyframes mdPrint{0%{transform:translateY(0)}100%{transform:translateY(16px)}}.mdPrint{animation:mdPrint 2.4s linear infinite}' +
    '@keyframes mdBeam{0%,100%{opacity:.1}50%{opacity:.85}}.mdBeam{animation:mdBeam .9s ease-in-out infinite}' +
    '@keyframes mdCloud{0%{transform:translateX(-120px)}100%{transform:translateX(480px)}}.mdCloud{animation:mdCloud 22s linear infinite}.mdC2{animation-delay:-11s}' +
    '@keyframes mdBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.mdBob{animation:mdBob .8s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#e8b931", BLUE = "#2fa4d6", RED = "#e4572e", VIA = "#0b5aa7", PRIMO = "#e2231a";
  const cloud = (x, y, cls) => '<g class="mdCloud ' + cls + '" fill="#fff" opacity=".85"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9"/><ellipse cx="' + (x + 14) + '" cy="' + (y - 6) + '" rx="16" ry="9"/></g>';
  const picado = (y, cls) => { let s = '<path d="M0 ' + y + 'Q200 ' + (y + 14) + ' 400 ' + y + '" stroke="#555" stroke-width="1" fill="none"/>'; const c = ["#e4572e", "#2fa4d6", "#e8b931", "#7fc241", "#e04fa0", "#8a5cd0"];
    for (let i = 0, x = 6; x < 400; x += 26, i++) { const yy = y + 14 * (1 - Math.pow((x - 200) / 200, 2)) * .5 + 2; s += '<path class="mdFlag ' + (i % 2 ? "mdF2" : "") + ' ' + (cls || "") + '" d="M' + x + ' ' + yy + 'h20v16l-4 -3l-4 3l-4 -3l-4 3l-4 -3z" fill="' + c[i % 6] + '"/>'; } return s; };

  /* 1. VIA Centro Plaza */
  function mdstation() {
    let wins = "";
    for (let x = 64; x < 270; x += 34) wins += '<rect x="' + x + '" y="126" width="28" height="26" rx="2" fill="#22303b"/>';
    const bus = '<g class="anim-train">' +
      '<path d="M40 120q0 -6 8 -6h250q16 0 20 14v54H40z" fill="#f4f4f4" stroke="#2a2a2a" stroke-width="2"/>' + wins +
      '<path d="M290 120h18q8 2 10 12v26h-28z" fill="#22303b"/>' +
      '<path d="M40 160h278v8H40z" fill="' + VIA + '"/><path d="M40 168h278v5H40z" fill="' + PRIMO + '"/>' +
      '<rect x="292" y="114" width="22" height="6" rx="1" fill="#111"/><text x="303" y="119" text-anchor="middle" ' + F + ' font-size="4.5" fill="#ffb627">PRIMO 100</text>' +
      '<rect x="308" y="172" width="8" height="5" fill="#fff3b0"/>' +
      '<g fill="#1a1a1a"><circle cx="90" cy="184" r="10"/><circle cx="270" cy="184" r="10"/></g><g fill="#888"><circle cx="90" cy="184" r="4"/><circle cx="270" cy="184" r="4"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mds1)"/>' + cloud(60, 20, "") + cloud(260, 14, "mdC2") +
      /* the canopy: white sail roofs */
      '<path d="M0 56l60 -18l60 18l60 -18l60 18l60 -18l60 18l40 -12v10H0z" fill="#f2efe6" stroke="#9aa3ab" stroke-width="1.5"/>' +
      [20, 140, 260, 380].map(x => '<rect x="' + (x - 3) + '" y="56" width="6" height="128" fill="#7d868f"/>').join("") +
      '<rect x="0" y="184" width="400" height="10" fill="#d4cbb8"/><rect x="0" y="184" width="400" height="3" fill="' + GOLD + '"/>' +
      bus +
      '<path d="M0 194h400v66H0z" fill="#5a5e63"/><path d="M0 226h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="20" y="74" width="140" height="30" rx="3" fill="' + VIA + '" stroke="#fff" stroke-width="2"/>' +
      '<text x="90" y="88" text-anchor="middle" ' + F + ' font-size="11" fill="#fff" letter-spacing="1">CENTRO PLAZA</text>' +
      '<text x="90" y="99" text-anchor="middle" ' + F + ' font-size="6.5" fill="#cfe6ff" letter-spacing=".5">VIA METROPOLITAN TRANSIT</text>' +
      '<rect x="300" y="74" width="80" height="20" rx="3" fill="' + PRIMO + '" stroke="#fff" stroke-width="1.5"/><text x="340" y="88" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">PRIMO 100</text>',
      sky("mds1", "#86c3ef", "#fbe5c4"));
  }

  /* 2. Johnson High hallway */
  function mdschool() {
    let lockers = "";
    for (let x = 0; x < 230; x += 23) lockers += '<rect x="' + x + '" y="70" width="21" height="110" fill="#1d4f8a" stroke="#123760"/><path d="M' + (x + 5) + ' 80h11M' + (x + 5) + ' 84h11M' + (x + 5) + ' 88h11" stroke="#123760"/><rect x="' + (x + 15) + '" y="120" width="3" height="10" fill="#c9cdd2"/>';
    return svg(
      '<rect width="400" height="260" fill="#efe7d6"/><rect x="0" y="0" width="400" height="60" fill="#e3d8c2"/>' +
      '<rect x="0" y="56" width="400" height="6" fill="' + GOLD + '"/>' + lockers +
      /* banner */
      '<rect x="22" y="14" width="190" height="32" rx="3" fill="#123760"/><text x="117" y="36" text-anchor="middle" ' + F + ' font-size="15" fill="' + GOLD + '" letter-spacing="2">JOHNSON HS</text>' +
      /* bell */
      '<rect x="292" y="8" width="4" height="10" fill="#555"/><g class="mdRing"><path d="M282 18h24q0 -14 -12 -14q-12 0 -12 14z" fill="#c9302c"/><circle cx="294" cy="21" r="3" fill="#333"/></g>' +
      '<path class="mdBl" d="M270 12l-8 -4M270 20l-10 0M318 12l8 -4M318 20l10 0" stroke="#c9302c" stroke-width="2"/>' +
      /* trophy case */
      '<rect x="244" y="60" width="140" height="110" fill="#6b4a2c"/><rect x="252" y="68" width="124" height="94" fill="#cfe7ef" opacity=".7"/>' +
      '<path d="M252 114h124" stroke="#6b4a2c" stroke-width="3"/>' +
      '<g fill="' + GOLD + '"><path d="M266 106h14l-3 -16h-8z"/><rect x="270" y="106" width="6" height="6"/><path d="M302 110h18l-4 -22h-10z"/><rect x="306" y="108" width="10" height="4"/><circle cx="350" cy="96" r="10"/><rect x="346" y="106" width="8" height="6"/>' +
      '<path d="M270 158h14l-3 -16h-8z"/><path d="M330 158h18l-4 -22h-10z"/></g>' +
      /* floor + desk with notebook */
      '<path d="M0 180h400v80H0z" fill="#b9a98c"/><path d="M0 200h400M0 224h400" stroke="#a49478" stroke-width="1"/>' +
      '<rect x="120" y="198" width="160" height="10" rx="2" fill="#8a5a33"/><rect x="132" y="208" width="8" height="40" fill="#555"/><rect x="262" y="208" width="8" height="40" fill="#555"/>' +
      '<g class="mdBob"><rect x="150" y="180" width="70" height="18" fill="#fff" stroke="#999"/><path d="M156 186h56M156 191h44" stroke="' + BLUE + '" stroke-width="1.5"/><rect x="184" y="178" width="2" height="22" fill="#e4572e"/></g>' +
      '<text x="250" y="196" ' + F + ' font-size="9" fill="#123760">BARS</text>',
      "");
  }

  /* 3. The grocery checkout on Bulverde Rd */
  function mdstore() {
    let shelves = "";
    const c = ["#e4572e", "#2fa4d6", "#e8b931", "#7fc241", "#d8d8d8"];
    for (let r = 0; r < 3; r++) for (let x = 10, i = r; x < 390; x += 14, i++) shelves += '<rect x="' + x + '" y="' + (44 + r * 26) + '" width="11" height="18" rx="1" fill="' + c[i % 5] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#f3f1ea"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#c0392b"/><text x="200" y="21" text-anchor="middle" ' + F + ' font-size="13" fill="#fff" letter-spacing="2">BULVERDE RD</text>' +
      '<path d="M0 62h400M0 88h400M0 114h400" stroke="#b9b4a6" stroke-width="4"/>' + shelves +
      /* lane light */
      '<rect x="300" y="36" width="4" height="90" fill="#777"/><rect x="286" y="30" width="34" height="18" rx="3" fill="#222"/><text x="303" y="44" text-anchor="middle" ' + F + ' font-size="13" fill="' + GOLD + '" class="mdBl">4</text>' +
      /* checkout counter + belt */
      '<path d="M0 150h400v110H0z" fill="#8f8a80"/><rect x="0" y="140" width="290" height="22" fill="#2a2a2a"/><path d="M0 151h290" stroke="#444" stroke-width="2" stroke-dasharray="10 6"/>' +
      '<rect x="40" y="124" width="26" height="16" rx="2" fill="' + RED + '"/><rect x="80" y="118" width="18" height="22" rx="2" fill="#7fc241"/><circle cx="122" cy="130" r="10" fill="#e8b931"/>' +
      /* scanner with beam */
      '<rect x="190" y="132" width="60" height="10" fill="#555"/><rect class="mdBeam" x="196" y="128" width="48" height="4" fill="#ff3030"/>' +
      /* register + receipt */
      '<rect x="300" y="112" width="70" height="44" rx="4" fill="#3a3f45"/><rect x="308" y="118" width="54" height="18" fill="#9be7a4"/><text x="335" y="131" text-anchor="middle" font-family="monospace" font-size="10" fill="#1d4d24">$10.00</text>' +
      '<rect x="318" y="156" width="34" height="6" fill="#222"/><g class="mdPrint"><rect x="322" y="160" width="26" height="30" fill="#fff" stroke="#bbb"/><path d="M326 166h18M326 171h12M326 176h16M326 181h10" stroke="#999"/></g>' +
      '<text x="336" y="212" text-anchor="middle" ' + F + ' font-size="9" fill="#f3f1ea">KEEP RECEIPT</text>' +
      tag("CASHIER", 40, 218, 26, GOLD, -4),
      "");
  }

  /* 4. Mission San Jose */
  function mdmission() {
    return svg(
      '<rect width="400" height="260" fill="url(#mds4)"/>' + cloud(70, 24, "") + cloud(300, 16, "mdC2") +
      /* church: limestone facade, bell tower left, dome right */
      '<rect x="110" y="96" width="200" height="110" fill="#d9c7a4"/>' +
      '<path d="M150 96q50 -40 100 0z" fill="#d9c7a4"/>' +
      '<rect x="74" y="52" width="46" height="154" fill="#d2be98"/><rect x="80" y="30" width="34" height="24" fill="#d2be98"/><path d="M80 30q17 -22 34 0z" fill="#c8b48c"/>' +
      '<g fill="#5b4a36"><path d="M88 66q9 -12 18 0v18h-18z"/><path d="M90 38q7 -9 14 0v12h-14z"/></g>' +
      '<path d="M268 96q24 -46 48 0z" fill="#e9dfc8"/><rect x="290" y="44" width="4" height="10" fill="#7a6a52"/>' +
      /* carved doorway + rose window */
      '<path d="M190 206v-56q20 -22 40 0v56z" fill="#5b3d26"/><path d="M186 206v-58q24 -28 48 0v58" fill="none" stroke="#b49a6c" stroke-width="5"/>' +
      '<circle cx="210" cy="118" r="9" fill="#5b4a36" stroke="#b49a6c" stroke-width="3"/>' +
      '<g fill="#b49a6c"><rect x="160" y="140" width="8" height="40"/><rect x="252" y="140" width="8" height="40"/></g>' +
      '<rect x="0" y="206" width="400" height="54" fill="#c9b07e"/>' +
      picado(204, "") +
      '<rect x="140" y="226" width="140" height="22" rx="3" fill="#7a4a2a" stroke="#f0dfb8" stroke-width="1.5"/><text x="210" y="241" text-anchor="middle" ' + F + ' font-size="10" fill="#f0dfb8" letter-spacing="1">MISSION SAN JOSE</text>',
      sky("mds4", "#6fb6ea", "#ffd9a8"));
  }

  /* 5. Bulverde Rd and Loop 1604 */
  function mdcorner() {
    let bricks = "";
    for (let y = 110; y < 204; y += 12) for (let x = (y / 12) % 2 ? 0 : 14; x < 400; x += 28) bricks += '<rect x="' + x + '" y="' + y + '" width="26" height="10" fill="#9a7b5a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mds5)"/>' + cloud(60, 26, "") +
      /* Tower of the Americas: concrete shaft with the round top house */
      '<rect x="270" y="30" width="18" height="80" fill="#cfcac0"/><path d="M262 30h34l-4 -10h-26z" fill="#e8e3d8"/>' +
      '<rect x="256" y="10" width="46" height="12" rx="2" fill="#d9d4c9" stroke="#8a8579"/><path d="M262 10h34l-4 -4h-26z" fill="#bdb7aa"/><rect x="277" y="0" width="4" height="8" fill="#8a8579"/>' +
      '<g class="mdBl"><rect x="260" y="14" width="38" height="3" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="106" width="400" height="98" fill="#7d6247"/>' + bricks +
      '<rect x="0" y="102" width="400" height="6" fill="#5a4532"/>' +
      tag("MIKE DIMES", 26, 172, 44, GOLD, -5) +
      tag("DLOG", 30, 130, 22, BLUE, -4) + tag("WISS", 40, 198, 18, RED, 2) + tag("TEXAS BOY", 150, 198, 17, "#fff", -2) +
      '<path d="M0 204h400v56H0z" fill="#5c6066"/><rect x="0" y="202" width="400" height="6" fill="#a9a59c"/>' +
      '<rect x="354" y="120" width="5" height="84" fill="#3a5a40"/>' +
      '<rect x="296" y="122" width="104" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="348" y="135" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">BULVERDE RD</text>' +
      '<rect x="318" y="142" width="80" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="358" y="155" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">LOOP 1604</text>' +
      '<g class="mdBob"><circle cx="70" cy="232" r="9" fill="#c0c4c8" stroke="#777" stroke-width="2"/><text x="70" y="236" text-anchor="middle" ' + F + ' font-size="7" fill="#555">10c</text></g>',
      sky("mds5", "#ff9e5e", "#ffe1a8"));
  }

  window.SCENES = { mdstation, mdschool, mdstore, mdmission, mdcorner };
})();
