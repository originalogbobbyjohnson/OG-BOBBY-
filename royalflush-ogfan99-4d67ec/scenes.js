/* Royal Flush game (NYC map, Queens: Flushing). Five small animated SVGs, 400 x 260. CSS classes are prefixed "rf-".
   1. Murray Hill (LIRR Port Washington Branch, 150 St & 41 Av, Flushing): the train pulling into the open cut under the street.
   2. The old RKO Keith's theater on Northern Blvd at Main St: the terracotta front, the marquee chasing lights for GHETTO MILLIONAIRE
      ("motion picture analyze the world").
   3. The World's Fair Marina on Flushing Bay: yachts on the water and bottles on the dock ("poppin' Crystal in yachts, layin' low on
      the docks"), a jet climbing out of LaGuardia.
   4. A Main St jeweler's window at night: iced-down medallions on the velvet, sparkling.
   5. 41 Av and 150 St, up the block from Murray Hill: green signs, ROYAL FLUSH on the wall, St. George's spire on Main St behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rf-flick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.rf-flk{animation:rf-flick 2.4s infinite}.rf-flk2{animation-delay:1.1s}' +
    '@keyframes rf-chase{0%,49%{opacity:1}50%,100%{opacity:.2}}.rf-ch{animation:rf-chase .8s steps(1) infinite}.rf-ch2{animation-delay:.4s}' +
    '@keyframes rf-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}.rf-bob{animation:rf-bob 3s ease-in-out infinite}.rf-bob2{animation-delay:-1.5s}' +
    '@keyframes rf-wave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.rf-wave{animation:rf-wave 4s linear infinite}' +
    '@keyframes rf-jet{from{transform:translate(-60px,60px)}to{transform:translate(460px,-40px)}}.rf-jet{animation:rf-jet 11s linear infinite}' +
    '@keyframes rf-spark{0%,100%{opacity:0;transform:scale(.4)}50%{opacity:1;transform:scale(1)}}.rf-sp{transform-box:fill-box;transform-origin:50% 50%;animation:rf-spark 1.6s ease-in-out infinite}.rf-sp2{animation-delay:-.5s}.rf-sp3{animation-delay:-1.1s}' +
    '@keyframes rf-car{from{transform:translateX(-120px)}to{transform:translateX(470px)}}.rf-car{animation:rf-car 7s linear infinite}' +
    '@keyframes rf-glow{0%,100%{opacity:.55}50%{opacity:1}}.rf-glow{animation:rf-glow 2.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const ICE = "#8fe3ff", GOLD = "#f5c518", RED = "#e0263a", CREAM = "#f7f3ea", SIGN = "#0f6b3a", LIRR = "#0039a6";

  /* 1. Murray Hill, LIRR Port Washington Branch, in the open cut under 150 St */
  function murrayhill() {
    let houses = "";
    [[0, 60, 40, "#9a5b45"], [58, 70, 30, "#c9b89a"], [126, 54, 44, "#7d6a5a"], [178, 80, 24, "#a8735a"], [256, 64, 36, "#bfae90"], [318, 82, 28, "#8a5a44"]].forEach(([x, w, y, col], i) => {
      houses += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (78 - y) + '" fill="' + col + '"/><rect x="' + (x - 2) + '" y="' + y + '" width="' + (w + 4) + '" height="4" fill="#4a3a30"/>';
      for (let k = 0; k < Math.floor(w / 22); k++) houses += '<rect x="' + (x + 6 + k * 22) + '" y="' + (y + 10) + '" width="12" height="14" fill="' + (k % 2 ? "#ffd98a" : "#9fc6e0") + '"' + (k % 2 ? ' class="rf-flk' + (i % 2 ? " rf-flk2" : "") + '"' : "") + '/>';
    });
    let win = "";
    for (let x = 22; x < 300; x += 34) win += '<rect x="' + x + '" y="160" width="22" height="16" rx="2" fill="#2b3a4f"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rf1)"/>' + houses +
      /* the street up top, the fence, the footbridge */
      '<rect x="0" y="78" width="400" height="10" fill="#77797e"/><path d="M0 88h400" stroke="#2c2e33" stroke-width="2"/>' +
      (() => { let f = ""; for (let x = 4; x < 400; x += 8) f += '<path d="M' + x + ' 78v-10" stroke="#3a3c40" stroke-width="1"/>'; return f; })() + '<path d="M0 70h400" stroke="#3a3c40" stroke-width="1.5"/>' +
      /* the concrete walls of the cut */
      '<rect x="0" y="88" width="400" height="58" fill="#a9a59c"/>' +
      (() => { let p = ""; for (let x = 0; x < 400; x += 50) p += '<path d="M' + x + ' 88v58" stroke="#8d8980" stroke-width="2"/>'; return p; })() +
      /* the station sign */
      '<rect x="120" y="96" width="160" height="32" rx="2" fill="#111"/><text x="200" y="118" text-anchor="middle" ' + font + ' font-size="18" fill="#fff">Murray Hill</text>' +
      '<circle cx="104" cy="112" r="11" fill="' + LIRR + '"/><text x="104" y="116" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">PW</text>' +
      '<text x="296" y="108" ' + font + ' font-size="7" fill="#333">LIRR</text><text x="296" y="118" ' + font + ' font-size="7" fill="#333">PORT WASHINGTON</text><text x="296" y="128" ' + font + ' font-size="7" fill="#333">BRANCH</text>' +
      /* platform + tracks */
      '<rect x="0" y="146" width="400" height="6" fill="#d9c56a"/><rect x="0" y="198" width="400" height="16" fill="#cfcac0"/><rect x="0" y="198" width="400" height="4" fill="#f2d24a"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#3a3632"/>' + (() => { let t = ""; for (let x = 0; x < 400; x += 14) t += '<rect x="' + x + '" y="232" width="8" height="20" fill="#5a4636"/>'; return t; })() +
      '<path d="M0 236h400M0 248h400" stroke="#9a9a9a" stroke-width="2"/>' +
      /* the train pulling in: stainless car, blue band, no logos */
      '<g class="anim-train">' +
        '<rect x="8" y="150" width="330" height="56" rx="6" fill="#d7dbe0" stroke="#7a8088" stroke-width="2"/>' + win +
        '<rect x="8" y="182" width="330" height="5" fill="' + LIRR + '"/><rect x="8" y="188" width="330" height="2" fill="#8a1c2a"/>' +
        '<rect x="120" y="158" width="18" height="40" fill="#c2c7cd" stroke="#7a8088"/><rect x="250" y="158" width="18" height="40" fill="#c2c7cd" stroke="#7a8088"/>' +
        '<rect x="300" y="156" width="34" height="14" rx="2" fill="#111"/><text x="317" y="166" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb300">PENN</text>' +
        '<circle cx="334" cy="196" r="3" fill="#fff6c2"/>' +
      '</g>',
      sky("rf1", "#f0b37a", "#7aa3c8"));
  }

  /* 2. The old Keith's theater, Northern Blvd at Main St */
  function keiths() {
    let bulbs = "";
    for (let x = 64; x <= 336; x += 8) bulbs += '<circle cx="' + x + '" cy="128" r="2" fill="#fff4b0" class="rf-ch' + ((x / 8) % 2 ? " rf-ch2" : "") + '"/><circle cx="' + x + '" cy="172" r="2" fill="#fff4b0" class="rf-ch' + ((x / 8) % 2 ? "" : " rf-ch2") + '"/>';
    let blade = "";
    "KEITHS".split("").forEach((c, i) => { blade += '<text x="200" y="' + (30 + i * 14) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '" class="rf-glow">' + c + '</text>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#rf2)"/>' + stars(16) +
      /* terracotta front with arches */
      '<rect x="40" y="40" width="320" height="200" fill="#e6d3ad"/><path d="M40 40h320v10H40z" fill="#c9a876"/>' +
      '<path d="M70 120V80q20-24 40 0v40zM180 120V74q20-26 40 0v46zM290 120V80q20-24 40 0v40z" fill="#5a3a2a"/>' +
      '<path d="M70 80q20-24 40 0M180 74q20-26 40 0M290 80q20-24 40 0" stroke="#b07a3a" stroke-width="3" fill="none"/>' +
      (() => { let o = ""; for (let x = 52; x < 360; x += 24) o += '<circle cx="' + x + '" cy="58" r="4" fill="#c9a876"/>'; return o; })() +
      /* vertical blade sign */
      '<rect x="186" y="14" width="28" height="94" rx="3" fill="#7a1420" stroke="' + GOLD + '" stroke-width="2"/>' + blade +
      /* the marquee */
      '<path d="M54 122h292l10 6v44l-10 6H54l-10-6v-44z" fill="#1b1424" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<rect x="70" y="134" width="260" height="32" fill="#f7f0d8"/>' +
      '<text x="200" y="149" text-anchor="middle" ' + font + ' font-size="13" fill="#111" letter-spacing="1">GHETTO MILLIONAIRE</text>' +
      '<text x="200" y="162" text-anchor="middle" ' + font + ' font-size="10" fill="' + RED + '" letter-spacing="2">ROYAL FLUSH · TONIGHT</text>' +
      /* doors, sidewalk, crowd shapes */
      '<rect x="110" y="184" width="180" height="56" fill="#2a1d16"/>' + [120, 160, 200, 240].map(x => '<rect x="' + x + '" y="190" width="30" height="50" fill="#c9a24a" opacity=".85"/>').join("") +
      '<rect x="0" y="240" width="400" height="20" fill="#55575c"/>' +
      [30, 52, 330, 356].map((x, i) => '<g class="rf-bob' + (i % 2 ? " rf-bob2" : "") + '"><circle cx="' + x + '" cy="214" r="7" fill="#141414"/><rect x="' + (x - 9) + '" y="221" width="18" height="22" rx="6" fill="#141414"/></g>').join(""),
      sky("rf2", "#090b1e", "#3b2a4a"));
  }

  /* 3. World's Fair Marina, Flushing Bay */
  function marina() {
    let waves = "";
    for (let y = 176; y < 260; y += 14) { let d = "M0 " + y; for (let x = 0; x <= 460; x += 20) d += " q5 -4 10 0 t10 0"; waves += '<path class="rf-wave" d="' + d + '" stroke="#cfe8ff" stroke-width="1.2" fill="none" opacity=".45"/>'; }
    const yacht = (x, y, s, cls) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'h' + (110 * s) + 'l-' + (14 * s) + ' ' + (18 * s) + 'H' + (x + 8 * s) + 'z" fill="#f4f6f8" stroke="#8a95a3" stroke-width="1.2"/>' +
      '<rect x="' + (x + 22 * s) + '" y="' + (y - 16 * s) + '" width="' + (56 * s) + '" height="' + (16 * s) + '" rx="' + (3 * s) + '" fill="#e9edf2"/><rect x="' + (x + 28 * s) + '" y="' + (y - 12 * s) + '" width="' + (44 * s) + '" height="' + (6 * s) + '" fill="#1e2a3a"/>' +
      '<rect x="' + (x + 38 * s) + '" y="' + (y - 26 * s) + '" width="' + (24 * s) + '" height="' + (10 * s) + '" rx="' + (2 * s) + '" fill="#e9edf2"/><path d="M' + (x + 50 * s) + ' ' + (y - 26 * s) + 'v-' + (14 * s) + '" stroke="#8a95a3" stroke-width="1.5"/>' +
      '<path d="M' + (x + 4 * s) + ' ' + (y + 6 * s) + 'h' + (100 * s) + '" stroke="' + ICE + '" stroke-width="' + (2 * s) + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rf3)"/>' +
      '<circle cx="320" cy="70" r="26" fill="#ffd27a" opacity=".85"/>' +
      /* far shore: the Bronx / Whitestone line, low */
      '<path d="M0 150h40v-10h20v6h30v-14h18v18h40v-8h30v8h60v-12h24v12h50v-6h40v6h48v14H0z" fill="#3b4a66"/>' +
      '<g class="rf-jet"><path d="M0 30h34l8-8h5l-4 8h12l4-4h4l-2 6 2 6h-4l-4-4h-12l4 8h-5l-8-8H0z" fill="#e8ecf2"/><circle cx="2" cy="32" r="1.6" fill="#ff4d4d" class="rf-flk"/></g>' +
      '<rect x="0" y="164" width="400" height="96" fill="#2f5e86"/>' + waves +
      yacht(150, 168, 1.15, "rf-bob") + yacht(36, 182, 0.8, "rf-bob rf-bob2") +
      /* the dock, the bucket with two bottles (plain, no labels) */
      '<path d="M250 204h150v12H250z" fill="#8a6a4a"/><path d="M260 216v40M300 216v40M340 216v40M380 216v40" stroke="#5a4430" stroke-width="5"/>' +
      '<path d="M326 186h26l-3 18h-20z" fill="#c9cdd4" stroke="#7a8088"/><rect x="332" y="170" width="6" height="18" rx="2" fill="#2f6b3a"/><rect x="341" y="168" width="6" height="20" rx="2" fill="' + GOLD + '"/>' +
      '<circle cx="335" cy="167" r="2" fill="' + GOLD + '"/><circle cx="344" cy="165" r="2" fill="#fff"/>' +
      '<rect x="262" y="178" width="4" height="26" fill="#5a4430"/><circle cx="264" cy="176" r="5" fill="#fff4b0" class="rf-glow"/>' +
      '<text x="70" y="250" ' + font + ' font-size="9" fill="' + CREAM + '" letter-spacing="2">FLUSHING BAY</text>',
      sky("rf3", "#f39a5b", "#5b6fa8"));
  }

  /* 4. Main St jeweler's window, iced-down medallions */
  function jeweler() {
    const piece = (x, y, r, col, inner) => '<path d="M' + (x - r - 6) + ' ' + (y - r - 26) + 'q' + (r + 6) + ' ' + (r + 20) + ' ' + (2 * r + 12) + ' 0" stroke="' + GOLD + '" stroke-width="3" fill="none"/>' +
      '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + col + '" stroke="#fff" stroke-width="1.5"/>' + inner;
    const spark = (x, y, c) => '<path class="rf-sp ' + (c || "") + '" d="M' + x + ' ' + (y - 6) + 'l1.5 4.5 4.5 1.5-4.5 1.5-1.5 4.5-1.5-4.5-4.5-1.5 4.5-1.5z" fill="#fff"/>';
    const crown = (x, y) => '<path d="M' + (x - 12) + ' ' + (y + 6) + 'l-2-14 7 7 7-11 7 11 7-7-2 14z" fill="' + GOLD + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#14101c"/>' +
      '<rect x="24" y="18" width="352" height="200" rx="4" fill="#2a1430" stroke="#b08a2a" stroke-width="4"/>' +
      '<rect x="34" y="28" width="332" height="180" fill="url(#rf4)"/>' +
      '<text x="200" y="54" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="24" fill="' + ICE + '" stroke="#0a4a6a" stroke-width="1" class="rf-glow">Iced Down</text>' +
      /* velvet busts */
      '<path d="M50 208q20-60 60-60t60 60zM140 208q20-70 60-70t60 70zM230 208q20-60 60-60t60 60z" fill="#4a1630"/>' +
      piece(110, 160, 16, "#dfe8f0", crown(110, 162)) +
      piece(200, 150, 22, ICE, crown(200, 152) + '<circle cx="200" cy="150" r="22" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="2 4"/>') +
      piece(290, 160, 16, "#dfe8f0", '<text x="290" y="165" text-anchor="middle" ' + font + ' font-size="13" fill="' + RED + '">Q</text>') +
      spark(186, 136) + spark(214, 160, "rf-sp2") + spark(100, 150, "rf-sp3") + spark(300, 152) + spark(204, 130, "rf-sp3") + spark(120, 170, "rf-sp2") +
      '<rect x="0" y="218" width="400" height="42" fill="#55575c"/><rect x="0" y="218" width="400" height="4" fill="#8a8c90"/>' +
      '<rect x="40" y="226" width="320" height="10" fill="#2a2a2e"/><text x="200" y="234" text-anchor="middle" ' + font + ' font-size="7" fill="#aaa" letter-spacing="3">MAIN ST · FLUSHING</text>',
      sky("rf4", "#1b0f2a", "#4a1f3a"));
  }

  /* 5. 41 Av and 150 St, St. George's spire on Main St behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#rf5)"/>' + stars(14) +
      /* St. George's spire and the low Flushing roofline */
      '<path d="M120 150V70h16V40l8-30 8 30v30h16v80z" fill="#3a3346"/><circle cx="144" cy="82" r="6" fill="#ffe8a8" class="rf-glow"/><path d="M144 10v-6M141 6h6" stroke="#3a3346" stroke-width="2"/>' +
      '<path d="M0 150v-30h40v-14h30v44zM180 150v-40h50v-12h40v52zM280 150v-24h60v24z" fill="#232036"/>' +
      [190, 204, 218, 244, 258].map((x, i) => '<rect x="' + x + '" y="' + (114 + (i % 2) * 8) + '" width="6" height="7" fill="#ffd98a" class="rf-flk' + (i % 2 ? " rf-flk2" : "") + '"/>').join("") +
      /* the wall */
      '<rect x="0" y="150" width="300" height="80" fill="#5a3f34"/>' +
      (() => { let b = ""; for (let y = 156; y < 230; y += 8) b += '<path d="M0 ' + y + 'h300" stroke="#47322a" stroke-width="1"/>'; return b; })() +
      tag("ROYAL FLUSH", 10, 210, 30, ICE, -4) + tag("WASTELANDZ", 176, 170, 14, GOLD, -5) + tag("WORLDWIDE", 14, 172, 14, CREAM, -3) + tag("THE GOVERNOR", 150, 228, 14, RED, -2) +
      '<rect x="0" y="230" width="400" height="30" fill="#55575c"/><rect x="0" y="230" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="rf-car"><rect x="0" y="240" width="62" height="14" rx="5" fill="#1e2a3a"/><rect x="12" y="234" width="32" height="9" rx="3" fill="#bfe1f5"/><circle cx="14" cy="255" r="4.5" fill="#111"/><circle cx="50" cy="255" r="4.5" fill="#111"/></g>' +
      '<rect x="356" y="96" width="5" height="136" fill="#3d4b3f"/>' +
      '<rect x="306" y="98" width="94" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="353" y="114" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">41 Av</text>' +
      '<rect x="312" y="124" width="84" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="354" y="140" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">150 St</text>' +
      '<circle class="rf-flk" cx="358" cy="92" r="4" fill="#fff6c2"/>',
      sky("rf5", "#0b0d1c", "#3a3050"));
  }

  window.SCENES = { murrayhill: murrayhill, keiths: keiths, marina: marina, jeweler: jeweler, corner: corner };
})();
