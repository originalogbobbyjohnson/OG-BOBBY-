/* Paterson, New Jersey opening scenes for the Fetty Wap game (Eastside). Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}' +
    '@keyframes chase{0%,100%{opacity:1}50%{opacity:.2}}.bulb{animation:chase .8s infinite}.bulb2{animation-delay:-.4s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.bob{animation:bob .7s ease-in-out infinite}.bob2{animation-delay:-.35s}' +
    '@keyframes beam{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.beam{transform-box:fill-box;transform-origin:50% 100%;animation:beam 3s ease-in-out infinite}.beam2{animation-delay:-1.5s}' +
    '@keyframes carR{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.carR{animation:carR 4.5s linear infinite}.carR2{animation-delay:-2.2s}' +
    '@keyframes carL{from{transform:translateX(480px)}to{transform:translateX(-120px)}}.carL{animation:carL 5.5s linear infinite}.carL2{animation-delay:-2.7s}' +
    '@keyframes flag{0%,100%{transform:skewY(0)}50%{transform:skewY(7deg)}}.flag{transform-box:fill-box;transform-origin:0 50%;animation:flag 1.4s ease-in-out infinite}' +
    '@keyframes sway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.sway{transform-box:fill-box;transform-origin:50% 100%;animation:sway 3.4s ease-in-out infinite}.sway2{animation-delay:-1.7s}' +
    '@keyframes spout{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-16px);opacity:0}}.sp{animation:spout 1.2s linear infinite}.sp2{animation-delay:-.4s}.sp3{animation-delay:-.8s}' +
    '@keyframes drip{to{stroke-dashoffset:-16}}.drip{animation:drip .6s linear infinite}' +
    '@keyframes shine{0%,100%{opacity:.2}50%{opacity:1}}.shine{animation:shine 1.6s ease-in-out infinite}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-40px);opacity:0}}.note{animation:note 2.6s linear infinite}.note2{animation-delay:-1.3s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97 + 13) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const lbl = (x, y, t, size, fill, ls) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="' + size + '" letter-spacing="' + (ls || 2) + '" fill="' + fill + '">' + t + '</text>';
  const car = (x, y, color, cls) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="64" height="16" rx="5" fill="' + color + '"/><path d="M' + (x + 12) + ' ' + y + 'l8-10h24l8 10z" fill="' + color + '"/><path d="M' + (x + 22) + ' ' + (y - 8) + 'h20l5 7h-30z" fill="#bfe3ff" opacity=".8"/><circle cx="' + (x + 14) + '" cy="' + (y + 17) + '" r="5" fill="#111"/><circle cx="' + (x + 50) + '" cy="' + (y + 17) + '" r="5" fill="#111"/></g>';
  const AMB = "#f2a93b", TEAL = "#2fd3c6", RED = "#ff5a5f", GOLD = "#ffd23f", NAVY = "#1d2f6f", ORG = "#f47b20";

  /* 1. Interstate 80 East at dusk: the green overhead sign for Exit 58B, Madison Ave, Paterson, traffic rolling under it */
  function highway() {
    let lights = "";
    for (let i = 0; i < 22; i++) lights += '<rect x="' + (i * 19) + '" y="' + (120 + (i * 7) % 14) + '" width="3" height="3" fill="#ffd98a" opacity=".8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(8) +
      /* Paterson low skyline + hills */
      '<path d="M0 136q60-26 120-10t130-8 150 6V150H0z" fill="#2c2440"/>' +
      '<path d="M0 150V128h26v-10h18v10h30v-16h16v16h40v-8h22v8h34v-20h12v20h44v-12h18v12h60v-6h24v6h56V150z" fill="#1d1a2c"/>' + lights +
      /* gantry */
      '<rect x="18" y="40" width="8" height="140" fill="#6b7280"/><rect x="374" y="40" width="8" height="140" fill="#6b7280"/>' +
      '<rect x="18" y="44" width="364" height="6" fill="#7a818c"/><rect x="18" y="104" width="364" height="5" fill="#7a818c"/>' +
      /* exit tab */
      '<rect x="238" y="22" width="112" height="24" rx="3" fill="#0b6b3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="294" y="40" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">EXIT 58B</text>' +
      /* main sign */
      '<rect x="150" y="46" width="230" height="60" rx="5" fill="#0b6b3a" stroke="#fff" stroke-width="2.5"/>' +
      '<text x="168" y="72" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="19" fill="#fff">Madison Ave</text>' +
      '<text x="168" y="96" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">Paterson</text>' +
      '<path d="M352 74v16M344 82l8-10 8 10" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" transform="rotate(30 352 82)"/>' +
      /* I-80 sign */
      '<rect x="34" y="50" width="104" height="54" rx="5" fill="#0b6b3a" stroke="#fff" stroke-width="2.5"/>' +
      '<path d="M54 60h28v6q0 22-14 30q-14-8-14-30z" fill="#1d4ed8" stroke="#fff" stroke-width="1.5"/><path d="M54 60h28v8H54z" fill="#dc2626"/>' +
      '<text x="68" y="88" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">80</text>' +
      '<text x="88" y="76" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">EAST</text>' +
      '<text x="88" y="92" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">G.W. Br</text>' +
      /* road */
      '<rect x="0" y="180" width="400" height="80" fill="#2b2d33"/>' +
      '<path d="M0 206h400M0 234h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="22 16"/>' +
      '<rect x="0" y="170" width="400" height="12" fill="#b9b4a8"/><path d="M0 170h400" stroke="#8d887c" stroke-width="2"/>' +
      tag("1738", 30, 180, 15, AMB, -2) + tag("ZOO", 300, 180, 15, TEAL, -2) +
      /* the car sliding in (anim-train) + traffic */
      '<g class="anim-train">' + car(150, 214, RED, "") + '<rect x="210" y="218" width="4" height="4" fill="#fff6c2"/></g>' +
      car(0, 188, "#e5e7eb", "carR") + car(0, 188, TEAL, "carR carR2") + car(0, 240, AMB, "carR carR2"),
      sky("g1", "#2a1446", "#f08a4b"));
  }

  /* 2. Eastside High School, 150 Park Ave: the 1926 brick school, limestone entry, navy-and-orange Ghosts banners, flag going */
  function school() {
    let win = "";
    for (let y = 92; y < 186; y += 30) for (let x = 40; x < 370; x += 26) if (x < 170 || x > 228) win += '<rect x="' + x + '" y="' + y + '" width="14" height="20" fill="#cfe3f2" stroke="#e8dcc4" stroke-width="2"/><path d="M' + x + ' ' + (y + 10) + 'h14" stroke="#e8dcc4" stroke-width="1.5"/>';
    let cols = "";
    for (let x = 174; x <= 222; x += 16) cols += '<rect x="' + x + '" y="112" width="8" height="74" fill="#efe6d2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<rect x="24" y="76" width="352" height="120" fill="#9a4a32"/>' +
      '<rect x="20" y="70" width="360" height="10" fill="#e8dcc4"/><rect x="24" y="140" width="352" height="4" fill="#e8dcc4" opacity=".7"/>' +
      /* central entry pavilion */
      '<rect x="160" y="56" width="80" height="140" fill="#a8553a"/><path d="M154 58L200 34 246 58z" fill="#e8dcc4"/>' +
      '<rect x="164" y="100" width="72" height="10" fill="#e8dcc4"/>' + cols +
      '<rect x="188" y="150" width="24" height="36" rx="2" fill="#3a2418"/>' +
      lbl(200, 108.5, "EASTSIDE", 8.5, "#5a3020", 2) + win +
      /* banners */
      '<rect x="60" y="150" width="28" height="40" fill="' + NAVY + '"/><path d="M60 190l14-8 14 8z" fill="' + NAVY + '"/><rect x="60" y="158" width="28" height="5" fill="' + ORG + '"/>' +
      '<rect x="312" y="150" width="28" height="40" fill="' + ORG + '"/><path d="M312 190l14-8 14 8z" fill="' + ORG + '"/><rect x="312" y="158" width="28" height="5" fill="' + NAVY + '"/>' +
      /* ghost emblem on banners */
      '<path d="M66 182v-12a8 8 0 0 1 16 0v12l-4-3-4 3-4-3z" fill="#fff"/><path d="M318 182v-12a8 8 0 0 1 16 0v12l-4-3-4 3-4-3z" fill="#fff"/>' +
      /* flagpole */
      '<rect x="199" y="6" width="2" height="30" fill="#ccc"/><g class="flag"><rect x="201" y="7" width="22" height="13" fill="' + NAVY + '"/><rect x="201" y="12" width="22" height="3" fill="' + ORG + '"/></g>' +
      /* steps, lawn, street */
      '<rect x="150" y="196" width="100" height="6" fill="#d8cdb6"/><rect x="140" y="202" width="120" height="6" fill="#c8bda6"/>' +
      '<rect x="0" y="196" width="140" height="16" fill="#5f9a4a"/><rect x="260" y="196" width="140" height="16" fill="#5f9a4a"/>' +
      '<rect x="0" y="208" width="400" height="52" fill="#3a3d44"/><path d="M0 234h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<rect x="10" y="214" width="170" height="16" rx="3" fill="' + NAVY + '"/>' + lbl(95, 226, "EASTSIDE HIGH · GHOSTS", 9, "#fff", 1.5) +
      car(0, 238, "#f7d046", "carL") + lbl(330, 254, "PARK AVE · PATERSON", 8, "#f6efdc"),
      sky("g2", "#7ec3f2", "#e8f4fb"));
  }

  /* 3. Eastside Park: the Victorian bandstand and the Alice Weight shell fountain, old trees swaying */
  function park() {
    let trees = "";
    [[20, 120, 34], [70, 110, 28], [340, 112, 32], [388, 124, 26]].forEach(([x, y, r], i) => {
      trees += '<g class="sway' + (i % 2 ? " sway2" : "") + '"><rect x="' + (x - 3) + '" y="' + y + '" width="6" height="60" fill="#5a3a22"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#3f7a3a"/><circle cx="' + (x + r / 2) + '" cy="' + (y - r / 2) + '" r="' + (r * 0.7) + '" fill="#4f8f45"/></g>';
    });
    let posts = "";
    for (let x = 116; x <= 196; x += 20) posts += '<rect x="' + x + '" y="106" width="4" height="56" fill="#f4f1ea"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + trees +
      '<rect x="0" y="176" width="400" height="84" fill="#6aa84f"/>' +
      '<path d="M0 214q200-20 400 0V260H0z" fill="#d9cbb0"/>' +
      /* bandstand */
      '<path d="M98 106L158 70 218 106z" fill="#3f6e5a" stroke="#2c4e40" stroke-width="2"/><path d="M152 70l6-14 6 14z" fill="#3f6e5a"/><circle cx="158" cy="54" r="3" fill="' + GOLD + '"/>' +
      '<path d="M100 106h116" stroke="#f4f1ea" stroke-width="5"/>' +
      '<path d="M104 108q8 8 16 0q8 8 16 0q8 8 16 0q8 8 16 0q8 8 16 0q8 8 16 0q8 8 16 0" stroke="#f4f1ea" stroke-width="2" fill="none"/>' + posts +
      '<rect x="96" y="160" width="124" height="16" fill="#b7a07a"/><path d="M100 162h116" stroke="#f4f1ea" stroke-width="2"/>' +
      '<path d="M104 150h108" stroke="#f4f1ea" stroke-width="2"/>' +
      /* musical notes rising */
      '<text class="note" x="140" y="140" font-size="16" fill="' + GOLD + '">&#9834;</text><text class="note note2" x="170" y="136" font-size="14" fill="' + GOLD + '">&#9835;</text>' +
      /* shell fountain */
      '<ellipse cx="302" cy="206" rx="58" ry="12" fill="#8fb6c9" stroke="#c8c0ae" stroke-width="4"/>' +
      '<rect x="296" y="164" width="12" height="38" fill="#d6cfbf"/><path d="M286 202h32l-6-8h-20z" fill="#c8c0ae"/>' +
      '<path d="M270 166q32-26 64 0q-8 6-32 6t-32-6z" fill="#e2dccd" stroke="#b3ab98" stroke-width="2"/>' +
      '<path d="M280 160l8 10M292 154l4 14M302 152v16M312 154l-4 14M324 160l-8 10" stroke="#b3ab98" stroke-width="1.5"/>' +
      '<path class="drip" d="M274 168q-6 14-4 34M330 168q6 14 4 34" stroke="#bfe3ff" stroke-width="2" fill="none" stroke-dasharray="4 4"/>' +
      '<circle class="sp" cx="302" cy="148" r="3" fill="#bfe3ff"/><circle class="sp sp2" cx="298" cy="150" r="2.5" fill="#bfe3ff"/><circle class="sp sp3" cx="306" cy="150" r="2.5" fill="#bfe3ff"/>' +
      /* iron fence */
      (function () { let f = ""; for (let x = 240; x <= 364; x += 8) f += '<path d="M' + x + ' 222v-12" stroke="#1f2328" stroke-width="2"/>'; return f + '<path d="M240 212h124" stroke="#1f2328" stroke-width="2"/>'; })() +
      '<rect x="120" y="226" width="160" height="22" rx="3" fill="#1f5e3a"/>' + lbl(200, 241, "EASTSIDE PARK", 11, "#fff", 3),
      sky("g3", "#f7b267", "#fde9c8"));
  }

  /* 4. Bauerle Field, Paterson: the 2015 homecoming show for the city's high schoolers, stage lights sweeping, the crowd jumping, the key to the city */
  function field() {
    let crowd = "";
    for (let x = 4; x < 400; x += 14) crowd += '<g class="bob' + ((x / 14) % 2 ? " bob2" : "") + '"><circle cx="' + x + '" cy="' + (214 + (x % 3) * 3) + '" r="6" fill="#141018"/><rect x="' + (x - 6) + '" y="' + (220 + (x % 3) * 3) + '" width="12" height="40" rx="4" fill="#141018"/>' + ((x / 14) % 3 === 0 ? '<path d="M' + (x + 4) + ' ' + (214 + (x % 3) * 3) + 'l6-16" stroke="#141018" stroke-width="4" stroke-linecap="round"/>' : '') + '</g>';
    let seats = "";
    for (let y = 84; y < 140; y += 8) seats += '<path d="M0 ' + y + 'H400" stroke="#4b4f5a" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(14) +
      /* light towers */
      '<rect x="20" y="20" width="4" height="70" fill="#555"/><rect x="8" y="14" width="28" height="12" fill="#fff6c2" class="flk"/>' +
      '<rect x="376" y="20" width="4" height="70" fill="#555"/><rect x="364" y="14" width="28" height="12" fill="#fff6c2" class="flk"/>' +
      '<rect x="0" y="80" width="400" height="62" fill="#353844"/>' + seats +
      /* beams */
      '<g opacity=".35"><path class="beam" d="M140 160L120 20h40z" fill="' + TEAL + '"/><path class="beam beam2" d="M260 160L240 20h40z" fill="' + AMB + '"/></g>' +
      /* stage */
      '<rect x="90" y="120" width="220" height="70" fill="#111"/><rect x="84" y="112" width="232" height="10" fill="#2a2a2a"/>' +
      '<rect x="100" y="128" width="200" height="40" fill="#1a1a24"/>' +
      lbl(200, 146, "WELCOME HOME", 13, GOLD, 3) + lbl(200, 162, "PATERSON", 9, "#fff", 5) +
      /* the key to the city */
      '<g class="shine"><circle cx="200" cy="96" r="10" fill="none" stroke="' + GOLD + '" stroke-width="4"/><rect x="208" y="93" width="34" height="6" fill="' + GOLD + '"/><rect x="232" y="99" width="4" height="8" fill="' + GOLD + '"/><rect x="224" y="99" width="4" height="6" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="190" width="400" height="20" fill="#2f7d3a"/><path d="M0 200h400" stroke="#fff" stroke-width="1.5" stroke-dasharray="4 26"/>' +
      crowd + lbl(200, 254, "BAUERLE FIELD", 10, "#fff", 4),
      sky("g4", "#0b0a1c", "#2b1d48"));
  }

  /* IC: shared iconic landmark in the corner backdrop (its own little animations, prefixed ic-) */
  const IC_CSS = '<style>' +
    '@keyframes icFl{to{stroke-dashoffset:-24}}.ic-fl{animation:icFl .7s linear infinite}' +
    '@keyframes icMi{0%{transform:translateY(0);opacity:0}30%{opacity:.7}100%{transform:translateY(-22px);opacity:0}}.ic-mi{animation:icMi 3.2s ease-out infinite}.ic-m2{animation-delay:-1.1s}.ic-m3{animation-delay:-2.2s}' +
    '@keyframes icMoon{0%,100%{opacity:.85}50%{opacity:1}}.ic-moon{animation:icMoon 4s ease-in-out infinite}' +
    '</style>';
  /* far off to the west from the Eastside at night, over the rooftops: the Great Falls under a full moon, the white water pouring off the dark basalt, mist lifting */
  const icBg = () => { let f = "";
    for (let x = 196; x < 246; x += 4) f += '<path class="ic-fl" d="M' + x + ' 46V78" stroke="#eef6fb" stroke-width="1.4" stroke-dasharray="6 6" opacity=".8" style="animation-delay:-' + ((x % 7) * 0.1).toFixed(2) + 's"/>';
    return IC_CSS +
      '<circle class="ic-moon" cx="300" cy="30" r="16" fill="#f6efd6"/>' +
      '<path d="M150 80V52l20-10 26 4V80zM246 80V44l22-6 30 10 22-2V80z" fill="#221c26"/>' +
      '<path d="M190 46h60v4h-60z" fill="#5d7f94"/>' + f +
      '<ellipse class="ic-mi" cx="210" cy="76" rx="12" ry="4" fill="#f2f6f8"/><ellipse class="ic-mi ic-m2" cx="232" cy="76" rx="14" ry="4" fill="#f2f6f8"/><ellipse class="ic-mi ic-m3" cx="222" cy="78" rx="10" ry="3" fill="#f2f6f8"/>' +
      '<path d="M186 60q34-6 68 0" stroke="#cfc6b8" stroke-width="1.6" fill="none"/>' +
      '<text x="220" y="94" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="7" letter-spacing="3" fill="#cfd8e0" opacity=".8">GREAT FALLS</text>'; };

  /* 5. Park Ave and E 18th St, by Eastside High: green street signs, his name on the wall, the Great Falls far off behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) + icBg() +
      '<path d="M0 100V84h40v-8h30v8h40v-12h26v28zM290 100V80h30v-8h34v8h46v20z" fill="#18141e"/>' +
      /* tag wall */
      '<rect x="14" y="100" width="300" height="120" fill="#3a3340"/>' +
      (function () { let s = ""; for (let y = 112; y < 220; y += 12) s += '<path d="M14 ' + y + 'h300" stroke="#312a37" stroke-width="1"/>'; return s; })() +
      tag("FETTY WAP", 30, 166, 42, AMB, -6) +
      tag("1738", 40, 208, 26, TEAL, -3) + tag("REMY BOYZ", 120, 200, 22, RED, -4) +
      tag("ZOO GANG", 236, 214, 14, GOLD, -3) +
      /* streetlight */
      '<rect x="332" y="70" width="5" height="150" fill="#1d2329"/><path d="M334 72h-22" stroke="#1d2329" stroke-width="5"/><path class="flk" d="M300 76h24l-6 8h-12z" fill="#ffe7a8"/>' +
      /* street signs */
      '<rect x="318" y="112" width="78" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="357" y="125" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Park Ave</text>' +
      '<rect x="322" y="134" width="70" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="357" y="147" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">E 18th St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      car(0, 226, AMB, "carR") +
      '<text x="390" y="254" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#ffe2b8" letter-spacing="2">EASTSIDE, PATERSON NJ</text>',
      sky("g5", "#0d0b1a", "#3a2140"));
  }

  window.SCENES = { highway, school, park, field, corner };
})();
