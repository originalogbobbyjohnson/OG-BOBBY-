/* Onyx game (NYC map, Queens: South Jamaica). The A on the el over Liberty Av at Rockaway Blvd (the stop for John Adams High School,
   where Fredro Starr, Big DS and Sonny Seeza went to school and started the group in 1988), John Adams High on Rockaway Blvd (red brick
   and limestone, 1930), the barbershop on Jamaica Av where Fredro and his cousin Sticky Fingaz cut hair (the bald heads),
   B-Wiz's basement where they cut the first demos on a drum machine, and 115th Av & 140th St by Ajax Park (now Dr. Charles R. Drew Park),
   where Fredro met Sonny Seeza at a rap battle. 400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.5s}.bl3{animation-delay:1s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes wave{0%,100%{transform:skewY(0)}50%{transform:skewY(-7deg)}}.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.4s ease-in-out infinite}' +
    '@keyframes pole{from{transform:translateY(0)}to{transform:translateY(-16px)}}.pole{animation:pole .9s linear infinite}' +
    '@keyframes buzz{0%,100%{transform:translate(0,0)}25%{transform:translate(1px,-1px)}75%{transform:translate(-1px,1px)}}.buzz{animation:buzz .12s linear infinite}' +
    '@keyframes swing{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}.sw{transform-box:view-box;animation:swing 2.4s ease-in-out infinite}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.spin{transform-box:fill-box;transform-origin:50% 50%;animation:spin 1.6s linear infinite}' +
    '@keyframes jump{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}.jp{animation:jump .5s ease-in-out infinite}.jp2{animation-delay:.25s}' +
    '@keyframes bounce{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.bnc{transform-box:fill-box;transform-origin:50% 50%;animation:bounce .5s ease-in-out infinite}' +
    '@keyframes ball{0%,100%{transform:translateY(0)}50%{transform:translateY(22px)}}.ball{animation:ball .6s ease-in infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const BLUE = "#0039a6", RED = "#ff3b30", SILVER = "#d9dde3", GOLD = "#f2c14e", BRICK = "#9c3b28", LIME = "#e9dfc8", PARK = "#2e6b3a";
  const houses = (col, lit) => { let g = ""; [[0, 120], [52, 112], [104, 124], [296, 116], [348, 110]].forEach(([x, y]) => {
    g += '<rect x="' + x + '" y="' + y + '" width="50" height="' + (176 - y) + '" fill="' + col + '"/><path d="M' + (x - 2) + ' ' + y + 'l27-14 27 14z" fill="' + col + '"/>';
    if (lit) g += '<rect class="bl bl' + (x % 3 + 1) + '" x="' + (x + 10) + '" y="' + (y + 12) + '" width="10" height="10" fill="#ffd98a" opacity=".8"/><rect class="bl bl' + ((x + 1) % 3 + 1) + '" x="' + (x + 30) + '" y="' + (y + 12) + '" width="10" height="10" fill="#ffd98a" opacity=".8"/>'; }); return g; };

  /* 1. Rockaway Blvd, up on the el over Liberty Av: the canopy, the black station sign with the blue A, the train sliding in */
  function rockaway() {
    let win = "";
    for (let x = 24; x < 290; x += 34) win += '<rect x="' + x + '" y="112" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(10) + houses("#2a2f45", true) +
      '<path d="M0 44h400v10H0z" fill="#3d4652"/><rect x="0" y="54" width="400" height="4" fill="#6b7380"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + (x - 3) + '" y="58" width="6" height="104" fill="#55606e"/>').join("") +
      '<rect x="80" y="64" width="232" height="30" rx="3" fill="#111"/><rect x="80" y="64" width="232" height="3" fill="#fff"/>' +
      '<text x="96" y="86" ' + font + ' font-size="15" fill="#fff">Rockaway Blvd</text>' + bullet(292, 79, "A", BLUE) +
      '<g class="anim-train">' +
        '<rect x="6" y="102" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="0" y="136" width="306" height="4" fill="' + BLUE + '"/>' +
        '<rect x="286" y="110" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(294, 148, "A", BLUE) +
        '<circle cx="18" cy="150" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="158" width="400" height="10" fill="#eab308"/><rect x="0" y="168" width="400" height="14" fill="#3b3f46"/>' +
      [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="182" width="12" height="78" fill="#55606e"/><path d="M' + (x + 12) + ' 188l60 0" stroke="#55606e" stroke-width="4"/>').join("") +
      '<rect x="0" y="238" width="400" height="22" fill="#4a4a4f"/>' +
      '<g class="car"><rect x="0" y="242" width="40" height="13" rx="4" fill="' + RED + '"/></g><g class="car car2"><rect x="0" y="244" width="36" height="12" rx="4" fill="' + SILVER + '"/></g>' +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="9" fill="#e8e3d8" letter-spacing="3">LIBERTY AV</text>',
      sky("s1", "#141a33", "#6a4d7a"));
  }

  /* 2. John Adams High School on Rockaway Blvd: long red-brick front, limestone trim, columned entrance, white cupola, flag waving */
  function adams() {
    let win = "";
    for (let row = 0; row < 3; row++) for (let x = 30; x < 380; x += 26) { if (x > 160 && x < 240) continue; win += '<rect x="' + x + '" y="' + (108 + row * 28) + '" width="14" height="18" fill="#2c3a55" stroke="' + LIME + '" stroke-width="2"/>'; }
    let brick = "";
    for (let y = 104; y < 196; y += 6) brick += '<path d="M14 ' + y + 'H386" stroke="#86311f" stroke-width=".8" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' +
      '<circle cx="62" cy="40" r="16" fill="#fff4c4" opacity=".9"/>' +
      '<rect x="14" y="98" width="372" height="98" fill="' + BRICK + '"/>' + brick +
      '<rect x="14" y="94" width="372" height="8" fill="' + LIME + '"/><rect x="14" y="190" width="372" height="6" fill="' + LIME + '"/>' + win +
      /* central pavilion */
      '<rect x="160" y="78" width="80" height="118" fill="#a8432e"/><path d="M152 80l48-24 48 24z" fill="' + LIME + '"/>' +
      [170, 186, 202, 218].map(x => '<rect x="' + x + '" y="120" width="8" height="70" fill="#f4efe4"/>').join("") +
      '<rect x="164" y="114" width="72" height="8" fill="' + LIME + '"/>' +
      '<rect x="190" y="160" width="20" height="36" fill="#3a2a20"/>' +
            /* cupola */
      '<rect x="186" y="34" width="28" height="24" fill="#f4efe4"/><path d="M182 34l18-16 18 16z" fill="#4f7a6a"/><circle cx="200" cy="46" r="7" fill="#fff" stroke="#3a2a20" stroke-width="1.5"/>' +
      '<path d="M200 46v-4M200 46l3 2" stroke="#3a2a20" stroke-width="1.2"/>' +
      '<rect x="199" y="4" width="2" height="16" fill="#555"/><g class="flag"><rect x="201" y="4" width="20" height="12" fill="#b22234"/><rect x="201" y="4" width="9" height="7" fill="#3c3b6e"/><path d="M210 7h11M210 10h11M201 13h20" stroke="#fff" stroke-width="1.2"/></g>' +
      '<rect x="0" y="196" width="400" height="64" fill="#7b8b5a"/><rect x="0" y="222" width="400" height="38" fill="#55575c"/><rect x="0" y="222" width="400" height="4" fill="#8a8c90"/>' +
      '<rect x="186" y="196" width="28" height="26" fill="#c9c4b8"/>' +
      '<rect x="226" y="202" width="160" height="18" rx="2" fill="#1f4a2e" stroke="#fff" stroke-width="1.2"/><text x="306" y="215" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" letter-spacing=".5">JOHN ADAMS HIGH SCHOOL</text>' +
      '<g class="car"><rect x="0" y="232" width="62" height="18" rx="3" fill="' + GOLD + '"/><rect x="6" y="236" width="50" height="6" fill="#2c3a55"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="50" cy="250" r="4" fill="#111"/></g>' +
      '<text x="390" y="252" text-anchor="end" ' + font + ' font-size="9" fill="#e8e3d8" letter-spacing="2">ROCKAWAY BLVD</text>',
      sky("s2", "#6fb7ff", "#d9eeff"));
  }

  /* 3. The barbershop on Jamaica Av: barber pole spinning in the window, two chairs, clippers buzzing, two bald heads from behind */
  function barbershop() {
    let stripes = "";
    for (let y = -16; y < 120; y += 16) stripes += '<path d="M0 ' + y + 'l18 10v8L0 ' + (y + 8) + 'z" fill="#d6332b"/><path d="M0 ' + (y + 8) + 'l18 10v-0L0 ' + (y + 8) + 'z" fill="#1d3f8f"/>';
    let tiles = "";
    for (let i = 0; i < 20; i++) for (let j = 0; j < 3; j++) tiles += '<rect x="' + (i * 20) + '" y="' + (206 + j * 20) + '" width="20" height="20" fill="' + ((i + j) % 2 ? "#e9e6df" : "#1c1c1c") + '"/>';
    const chair = (x) => '<rect x="' + (x - 26) + '" y="150" width="52" height="16" rx="5" fill="#8b1e1e"/><rect x="' + (x - 22) + '" y="108" width="44" height="46" rx="8" fill="#a32525"/>' +
      '<rect x="' + (x - 4) + '" y="166" width="8" height="26" fill="#c9ced6"/><ellipse cx="' + x + '" cy="196" rx="24" ry="6" fill="#c9ced6"/>' +
      '<path d="M' + (x - 30) + ' 120q30-16 60 0v50h-60z" fill="#f4f4f4" opacity=".95"/>' +
      '<ellipse cx="' + x + '" cy="98" rx="17" ry="19" fill="#5a3a2a"/><ellipse cx="' + (x - 6) + '" cy="90" rx="6" ry="4" fill="#fff" opacity=".35"/>';
    return svg(
      '<rect width="400" height="260" fill="#2b2f3a"/>' +
      /* mirror wall */
      '<rect x="20" y="24" width="360" height="74" rx="4" fill="#9fb6c6" stroke="#c9ced6" stroke-width="4"/><path d="M40 30l30 60M120 30l30 60M260 30l30 60" stroke="#fff" stroke-width="6" opacity=".25"/>' +
      '<rect x="20" y="98" width="360" height="12" fill="#c9ced6"/>' +
            chair(130) + chair(270) +
      /* clippers buzzing over the right chair */
      '<g class="buzz"><rect x="282" y="66" width="14" height="30" rx="5" fill="#222" transform="rotate(25 289 81)"/><rect x="290" y="62" width="12" height="5" fill="' + SILVER + '" transform="rotate(25 289 81)"/></g>' +
      /* barber pole in the corner */
      '<rect x="356" y="110" width="22" height="8" rx="3" fill="' + SILVER + '"/><rect x="358" y="118" width="18" height="70" fill="#fff"/>' +
      '<svg x="358" y="118" width="18" height="70"><g class="pole">' + stripes + '</g></svg>' +
      '<rect x="356" y="188" width="22" height="8" rx="3" fill="' + SILVER + '"/>' +
      tiles +
      '<rect x="22" y="112" width="62" height="16" rx="2" fill="#111"/><text x="53" y="124" text-anchor="middle" ' + font + ' font-size="8.5" fill="' + GOLD + '">JAMAICA AV</text>',
      "");
  }

  /* 4. B-Wiz's basement: wood paneling, egg-crate foam, the drum machine pads blinking, tape reels turning, the bulb swinging */
  function basement() {
    let foam = "";
    for (let x = 230; x < 390; x += 12) for (let y = 30; y < 120; y += 12) foam += '<path d="M' + x + ' ' + y + 'l6 6-6 6-6-6z" fill="#4a4a52"/>';
    let panel = "";
    for (let x = 0; x < 230; x += 18) panel += '<rect x="' + x + '" y="0" width="16" height="190" fill="' + (x % 36 ? "#6b4428" : "#5e3b22") + '"/>';
    let pads = "";
    for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) pads += '<rect class="bl bl' + ((r + c) % 3 + 1) + '" x="' + (52 + c * 22) + '" y="' + (164 + r * 14) + '" width="16" height="10" rx="2" fill="' + (c % 2 ? RED : GOLD) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a2420"/>' + panel +
      '<rect x="222" y="22" width="170" height="104" fill="#3a3a42"/>' + foam +
      /* swinging bulb */
      '<g class="sw" style="transform-origin:150px 0px"><path d="M150 0v40" stroke="#222" stroke-width="2"/><circle class="flk" cx="150" cy="48" r="9" fill="#fff2b0"/><circle cx="150" cy="48" r="26" fill="#fff2b0" opacity=".15"/></g>' +
      /* table */
      '<rect x="20" y="190" width="360" height="12" fill="#3b2a1e"/><rect x="34" y="202" width="10" height="58" fill="#3b2a1e"/><rect x="356" y="202" width="10" height="58" fill="#3b2a1e"/>' +
      /* drum machine */
      '<rect x="40" y="150" width="110" height="40" rx="4" fill="#d8d4c8" stroke="#555" stroke-width="2"/><rect x="48" y="154" width="40" height="8" fill="#334"/>' + pads +
      /* tape deck with turning reels */
      '<rect x="170" y="146" width="96" height="44" rx="4" fill="#1e1e22" stroke="#555" stroke-width="2"/>' +
      '<g class="spin"><circle cx="196" cy="166" r="11" fill="#ccc"/><path d="M196 155v22M185 166h22" stroke="#555" stroke-width="3"/></g>' +
      '<g class="spin"><circle cx="240" cy="166" r="11" fill="#ccc"/><path d="M240 155v22M229 166h22" stroke="#555" stroke-width="3"/></g>' +
      /* mic stand */
      '<path d="M320 190V110" stroke="#888" stroke-width="4"/><path d="M300 190h40" stroke="#888" stroke-width="4"/><rect x="312" y="88" width="16" height="26" rx="8" fill="#333" stroke="' + SILVER + '" stroke-width="2"/>' +
      tag("DEMO", 60, 120, 30, GOLD, -8) + tag("1988", 240, 140, 18, SILVER, -4),
      "");
  }

  /* 5. 115th Av & 140th St by Ajax Park: green street signs, the handball wall tagged ONYX, chain-link, the park lights behind */
  function corner() {
    let link = "";
    for (let x = -60; x < 420; x += 10) link += '<path d="M' + x + ' 96l60 80M' + (x + 60) + ' 96l-60 80" stroke="#9aa3ad" stroke-width=".7" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(16) +
      '<circle cx="320" cy="36" r="14" fill="#eaf2ff" opacity=".85"/>' +
      /* park trees and lights */
      '<circle cx="40" cy="96" r="34" fill="#1d3b26"/><circle cx="96" cy="88" r="30" fill="#234a2e"/><circle cx="380" cy="94" r="32" fill="#1d3b26"/>' +
      [150, 260].map(x => '<rect x="' + (x - 2) + '" y="34" width="4" height="70" fill="#666"/><rect x="' + (x - 12) + '" y="28" width="24" height="8" fill="#888"/><circle class="flk" cx="' + x + '" cy="40" r="10" fill="#fff6c2" opacity=".35"/>').join("") +
      /* handball wall */
      '<rect x="110" y="70" width="200" height="106" fill="#b9b3a6"/><rect x="110" y="70" width="200" height="6" fill="#d8d2c4"/>' +
      tag("ONYX", 128, 150, 52, RED, -6) + tag("MAD FACE", 132, 98, 16, "#f4f4f4", -3) + tag("SLAM", 222, 170, 20, GOLD, -8) +
      /* chain-link fence in front */
      '<svg x="0" y="96" width="400" height="80"><g transform="translate(0,-96)">' + link + '</g></svg>' +
      '<path d="M0 96H400" stroke="#9aa3ad" stroke-width="2"/>' +
      [0, 100, 300, 398].map(x => '<rect x="' + (x - 1) + '" y="94" width="3" height="84" fill="#9aa3ad"/>').join("") +
      /* bouncing handball */
      '<g class="ball"><circle cx="300" cy="150" r="5" fill="#2b6cb0"/></g>' +
      /* park sign */
      '<rect x="20" y="140" width="76" height="30" rx="2" fill="' + PARK + '" stroke="#fff" stroke-width="1.5"/><text x="58" y="152" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">DR. CHARLES R.</text><text x="58" y="163" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">DREW PARK</text>' +
      '<rect x="0" y="176" width="400" height="16" fill="#8a8c90"/><rect x="0" y="192" width="400" height="68" fill="#4a4b50"/>' +
      '<path d="M0 226h40M70 226h40M140 226h40M210 226h40M280 226h40M350 226h40" stroke="#e6d36a" stroke-width="3"/>' +
      '<g class="car"><rect x="0" y="232" width="46" height="14" rx="4" fill="' + SILVER + '"/><circle cx="10" cy="246" r="4" fill="#111"/><circle cx="36" cy="246" r="4" fill="#111"/></g>' +
      /* street sign post */
      '<rect x="358" y="58" width="5" height="134" fill="#3d4b3f"/>' +
      '<rect x="296" y="62" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="346" y="78" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">115 Av</text>' +
      '<rect x="296" y="88" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="346" y="104" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">140 St</text>',
      sky("s5", "#0a0c1a", "#2c3554"));
  }

  window.SCENES = { rockaway: rockaway, adams: adams, barbershop: barbershop, basement: basement, corner: corner };
})();
