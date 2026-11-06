/* Big L game (NYC map, Manhattan: Harlem, 139th St & Lenox Av, the "Danger Zone"). The 2 at 135 St under Lenox Av, the record shop on
   W 125th St where he met Lord Finesse at an autograph signing (summer 1990), Black Rock on W 52nd St (Columbia Records, his first deal),
   the late-night college-radio freestyle on 89.9 FM, and Lenox Av & W 139th St with the tenement block of the Danger Zone behind.
   400 x 260 SVGs. No logos, no faces. Every 9 is drawn with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.5s}.bl3{animation-delay:1s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes spin{to{transform:rotate(360deg)}}.spin{transform-box:fill-box;transform-origin:50% 50%;animation:spin 1.8s linear infinite}' +
    '@keyframes drift{from{transform:translateX(-120px)}to{transform:translateX(440px)}}.cloud{animation:drift 26s linear infinite}.cloud2{animation-delay:-13s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1s ease-in-out infinite}.bob2{animation-delay:-.5s}' +
    '@keyframes wave{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}.wv{transform-box:fill-box;transform-origin:50% 50%;animation:wave .6s ease-in-out infinite}.wv2{animation-delay:-.2s}.wv3{animation-delay:-.4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark, r) => { r = r || 11; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * 0.48) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (r * 1.36) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>'; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, c) => '<circle cx="' + x + '" cy="' + (y - 30) + '" r="6" fill="' + c + '"/><rect x="' + (x - 6) + '" y="' + (y - 24) + '" width="12" height="16" rx="4" fill="' + c + '"/><path d="M' + (x - 3) + ' ' + (y - 9) + 'v9M' + (x + 3) + ' ' + (y - 9) + 'v9" stroke="' + c + '" stroke-width="4" stroke-linecap="round"/>';
  /* a 9 drawn by hand: round head + straight stem (never a hooked, G-looking 9). x = left edge, y = baseline, sz = cap height */
  const nine = (x, y, sz, c) => { const r = sz * 0.24, w = sz * 0.13; return '<circle cx="' + (x + r + w / 2) + '" cy="' + (y - sz * 0.72 + r) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + w + '"/><path d="M' + (x + 2 * r + w / 2) + ' ' + (y - sz * 0.72 + r) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w + '"/>'; };
  const RED = "#ee352e", GOLD = "#ffd166", LAV = "#b388ff", CREAM = "#f4ead8", SIGN = "#0f6b3a";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';

  /* 1. The 2 pulling into 135 St, underground under Lenox Av: white tile, the violet tile band, blue-green name tablets,
        green terracotta plaques under the white cornice, the black sign with the red 2 and 3 */
  function station() {
    let tile = "";
    for (let y = 30; y < 150; y += 10) tile += '<path d="M0 ' + y + 'h400" stroke="#dcdcd4" stroke-width="1"/>';
    let win = "";
    for (let x = 30; x < 300; x += 36) win += '<rect x="' + x + '" y="126" width="24" height="22" rx="2" fill="#bcd3ea" opacity=".9"/>';
    const plaque = x => '<rect x="' + x + '" y="34" width="26" height="18" fill="#3f8f5a" stroke="#2b6a40" stroke-width="2"/><circle cx="' + (x + 13) + '" cy="43" r="4" fill="#c9e3b8"/>';
    return svg(
      '<rect width="400" height="260" fill="#f2f1ea"/>' + tile +
      '<rect x="0" y="0" width="400" height="22" fill="#3a3d40"/>' +
      [20, 150, 280].map(x => '<rect x="' + x + '" y="8" width="44" height="5" rx="2" fill="#fffbe6" class="flk"/>').join("") +
      '<rect x="0" y="22" width="400" height="10" fill="#fbfaf5" stroke="#d8d6cc" stroke-width="1"/>' +
      [16, 116, 216, 316].map(plaque).join("") +
      /* violet band */
      '<rect x="0" y="60" width="400" height="10" fill="#6b4c9a"/><rect x="0" y="58" width="400" height="2" fill="#4a3270"/><rect x="0" y="70" width="400" height="2" fill="#4a3270"/>' +
      /* name tablet: blue-green field */
      '<rect x="40" y="78" width="120" height="34" fill="#2c7d86" stroke="#1d5560" stroke-width="3"/><rect x="46" y="84" width="108" height="22" fill="#f2f1ea"/>' +
      '<text x="100" y="101" text-anchor="middle" ' + font + ' font-size="16" fill="#1d5560" letter-spacing="2">135TH ST</text>' +
      /* black sign */
      '<rect x="210" y="80" width="150" height="28" rx="2" fill="#111"/><rect x="210" y="80" width="150" height="3" fill="#fff"/>' +
      '<text x="222" y="100" ' + font + ' font-size="14" fill="#fff">135 St</text>' + bullet(314, 95, "2", RED, false, 9) + bullet(338, 95, "3", RED, false, 9) +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="6" y="116" width="310" height="60" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="296" y="124" width="16" height="24" rx="2" fill="#bcd3ea"/>' + bullet(304, 162, "2", RED, false, 9) +
        '<circle cx="16" cy="166" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/><rect x="0" y="186" width="400" height="74" fill="#8a8c88"/>' +
      [80, 200, 320].map(x => '<rect x="' + (x - 6) + '" y="186" width="12" height="2" fill="#666"/>').join("") +
      person(60, 248, "#2a2433") + person(250, 252, "#33241f") +
      tag("UPTOWN", 286, 240, 22, LAV, -4)
    );
  }

  /* 2. The record shop on W 125th St, summer 1990: crates and twelve-inches in the window, a record spinning on the display deck,
        the AUTOGRAPHS TODAY banner, the line of kids out the door to meet Lord Finesse, where Big L got his shot */
  function shop() {
    let sleeves = "";
    const cols = [LAV, GOLD, RED, "#2c7d86", "#f4ead8", "#6cbe45"];
    for (let i = 0; i < 6; i++) sleeves += '<rect x="' + (52 + i * 34) + '" y="' + (98 + (i % 2) * 6) + '" width="28" height="28" fill="' + cols[i] + '" stroke="#111" stroke-width="1.5"/><circle cx="' + (66 + i * 34) + '" cy="' + (112 + (i % 2) * 6) + '" r="7" fill="#111"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#r2)"/>' +
      '<rect x="0" y="20" width="400" height="190" fill="#6e4a3a"/>' +
      (() => { let b = ""; for (let y = 24; y < 70; y += 7) b += '<path d="M0 ' + y + 'h400" stroke="#5c3c2e" stroke-width="1"/>'; return b; })() +
      [30, 120, 210, 300].map(x => '<rect x="' + x + '" y="28" width="40" height="30" fill="#2c2a40"/>').join("") +
      /* awning + banner */
      '<path d="M30 70h340l-14 16H44z" fill="' + RED + '"/>' + (() => { let s = ""; for (let x = 44; x < 356; x += 24) s += '<path d="M' + x + ' 86l12-16h12l-12 16z" fill="#fff" opacity=".85"/>'; return s; })() +
      '<rect class="flk" x="120" y="54" width="160" height="16" fill="' + GOLD + '"/><text x="200" y="66" text-anchor="middle" ' + font + ' font-size="10" fill="#111" letter-spacing="1">AUTOGRAPHS TODAY</text>' +
      /* window */
      '<rect x="40" y="88" width="230" height="96" fill="#1c1d2c" stroke="#bbb" stroke-width="4"/>' + sleeves +
      '<rect x="60" y="146" width="80" height="30" fill="#333" stroke="#777"/><circle class="spin" cx="100" cy="158" r="13" fill="#111" stroke="#444"/><circle cx="100" cy="158" r="4" fill="' + LAV + '"/>' +
      '<rect x="160" y="146" width="96" height="30" fill="#5a3a20"/><path d="M166 146v30M182 146v30M198 146v30M214 146v30M230 146v30" stroke="#3a2412" stroke-width="2"/>' +
      /* door */
      '<rect x="290" y="88" width="56" height="96" fill="#2a2a2a" stroke="#bbb" stroke-width="4"/><rect x="298" y="96" width="40" height="44" fill="#3a4a6a"/>' +
      '<text x="318" y="160" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">OPEN</text>' +
      /* sidewalk + line */
      '<rect x="0" y="184" width="400" height="76" fill="#9a9a96"/><rect x="0" y="184" width="400" height="4" fill="#bdbdb8"/>' +
      '<g class="bob">' + person(360, 236, "#2a2433") + '</g><g class="bob bob2">' + person(330, 240, "#3b2a24") + '</g><g class="bob">' + person(300, 236, "#1f2a44") + '</g><g class="bob bob2">' + person(270, 240, "#4a2a3a") + '</g>' +
      '<rect x="0" y="246" width="400" height="14" fill="#55575c"/>' +
      '<rect x="18" y="150" width="4" height="96" fill="#3d4b3f"/><rect x="2" y="140" width="64" height="18" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="34" y="153" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">W 125 St</text>',
      sky("r2", "#7fb4e6", "#ffe0b8"));
  }

  /* 3. Black Rock, W 52nd St: the dark granite tower of triangular piers rising straight up, Columbia Records' home when Big L signed,
        the sunken plaza, yellow cabs rolling by, clouds drifting over Midtown */
  function blackrock() {
    let piers = "";
    for (let x = 130; x <= 270; x += 14) piers += '<rect x="' + x + '" y="20" width="8" height="200" fill="#2a2a2e"/><rect x="' + (x + 8) + '" y="20" width="6" height="200" fill="#5d6874" opacity=".85"/>';
    let lit = "";
    for (let y = 30; y < 210; y += 12) for (let x = 138; x < 280; x += 14) if ((x + y * 3) % 5 === 0) lit += '<rect class="bl bl' + ((x + y) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="6" height="7" fill="#ffe7a8" opacity=".75"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#b3)"/>' +
      '<g class="cloud"><ellipse cx="40" cy="40" rx="34" ry="11" fill="#fff" opacity=".85"/><ellipse cx="62" cy="34" rx="20" ry="10" fill="#fff" opacity=".85"/></g>' +
      '<g class="cloud cloud2"><ellipse cx="40" cy="70" rx="28" ry="9" fill="#fff" opacity=".7"/></g>' +
      /* neighbours */
      '<rect x="0" y="80" width="110" height="150" fill="#b7a58a"/><rect x="300" y="60" width="100" height="170" fill="#9fa7b3"/>' +
      [10, 40, 70].map(x => [96, 126, 156, 186].map(y => '<rect x="' + x + '" y="' + y + '" width="18" height="16" fill="#6a7d96"/>').join("")).join("") +
      [312, 342, 372].map(x => [76, 106, 136, 166, 196].map(y => '<rect x="' + x + '" y="' + y + '" width="16" height="14" fill="#4a5a70"/>').join("")).join("") +
      /* the granite tower */
      '<rect x="126" y="14" width="152" height="8" fill="#1e1e22"/><rect x="126" y="20" width="152" height="200" fill="#4a5562"/>' + piers + lit +
      /* plaza */
      '<rect x="100" y="218" width="200" height="12" fill="#3a3a3f"/><rect x="186" y="200" width="32" height="20" fill="#ffe7a8" opacity=".6"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#55575c"/><rect x="0" y="230" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="238" width="48" height="14" rx="4" fill="#f7c600"/><rect x="16" y="234" width="14" height="5" fill="#f7c600"/><circle cx="10" cy="252" r="4" fill="#111"/><circle cx="38" cy="252" r="4" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="242" width="48" height="14" rx="4" fill="#f7c600"/><circle cx="10" cy="256" r="4" fill="#111"/><circle cx="38" cy="256" r="4" fill="#111"/></g>' +
      '<rect x="356" y="160" width="4" height="70" fill="#3d4b3f"/><rect x="318" y="150" width="78" height="18" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="357" y="163" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">W 52 St</text>' +
      tag("SIGNED", 14, 222, 22, GOLD, -6),
      sky("b3", "#5d9ad6", "#d9ecfa"));
  }

  /* 4. The college-radio freestyle on 89.9 FM: two mics on booms, the turntables spinning, the ON AIR light blinking,
        the sound wave jumping on the board, the window looking out on Morningside at night */
  function radio() {
    let bars = "";
    for (let i = 0; i < 12; i++) bars += '<rect class="wv wv' + (i % 3 + 1) + '" x="' + (150 + i * 9) + '" y="168" width="5" height="22" fill="' + (i % 2 ? LAV : GOLD) + '"/>';
    const mic = (x, flip) => '<path d="M' + x + ' 30L' + (x + flip * 40) + ' 70L' + (x + flip * 40) + ' 104" stroke="#777" stroke-width="4" fill="none"/><rect x="' + (x + flip * 40 - 8) + '" y="104" width="16" height="26" rx="8" fill="#2b2b2b" stroke="#aaa" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="#17131c"/>' +
      /* foam wall */
      (() => { let f = ""; for (let y = 0; y < 150; y += 16) for (let x = (y / 16) % 2 ? 8 : 0; x < 400; x += 16) f += '<path d="M' + x + ' ' + y + 'l8 8-8 8-8-8z" fill="#221c2a"/>'; return f; })() +
      /* window on Morningside */
      '<rect x="264" y="20" width="118" height="80" fill="#0b1630" stroke="#555" stroke-width="5"/>' + stars(6).replace(/cx="(\d+)"/g, (m, a) => 'cx="' + (270 + (+a % 106)) + '"').replace(/cy="(\d+)"/g, (m, a) => 'cy="' + (26 + (+a % 30)) + '"') +
      '<rect x="276" y="60" width="20" height="40" fill="#2a2f45"/><rect x="300" y="50" width="26" height="50" fill="#262b40"/><rect x="332" y="64" width="40" height="36" fill="#2a2f45"/>' +
      [280, 306, 316, 340, 356].map((x, i) => '<rect class="bl bl' + (i % 3 + 1) + '" x="' + x + '" y="' + (70 + (i % 2) * 10) + '" width="5" height="6" fill="#ffd98a"/>').join("") +
      /* ON AIR */
      '<rect x="26" y="18" width="96" height="30" rx="4" fill="#300"/><text class="bl" x="74" y="39" text-anchor="middle" ' + font + ' font-size="17" fill="#ff3b3b" letter-spacing="2">ON AIR</text>' +
      /* 89.9 FM, hand-drawn nines */
      '<text x="26" y="84" ' + font + ' font-size="26" fill="' + LAV + '">8</text>' + nine(44, 84, 26, LAV) + '<circle cx="64" cy="82" r="2.5" fill="' + LAV + '"/>' + nine(70, 84, 26, LAV) +
      '<text x="92" y="84" ' + font + ' font-size="20" fill="' + LAV + '">FM</text>' +
      mic(150, 1) + mic(250, -1) +
      /* desk */
      '<path d="M20 150h360l10 60H10z" fill="#3a3a40"/>' +
      '<rect x="32" y="158" width="100" height="40" rx="3" fill="#222"/><circle class="spin" cx="72" cy="178" r="16" fill="#111" stroke="#444" stroke-width="2"/><circle cx="72" cy="178" r="5" fill="' + RED + '"/><path d="M116 164l-20 16" stroke="#ccc" stroke-width="2"/>' +
      '<rect x="268" y="158" width="100" height="40" rx="3" fill="#222"/><circle class="spin" cx="308" cy="178" r="16" fill="#111" stroke="#444" stroke-width="2"/><circle cx="308" cy="178" r="5" fill="' + GOLD + '"/><path d="M352 164l-20 16" stroke="#ccc" stroke-width="2"/>' +
      '<rect x="144" y="160" width="114" height="36" rx="3" fill="#111"/>' + bars +
      '<rect x="0" y="210" width="400" height="50" fill="#100c14"/>' +
      tag("FREESTYLE", 120, 246, 24, GOLD, -3)
    );
  }

  /* 5. Lenox Av and W 139th St, the Danger Zone: green street signs, the tenement block with fire escapes and the water tower behind,
        the wall tagged BIG L, a streetlight flickering, cars rolling down Lenox */
  function corner() {
    let wins = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) wins += '<rect x="' + (24 + c * 44) + '" y="' + (44 + r * 30) + '" width="16" height="20" fill="' + ((r * 3 + c) % 4 ? "#2a2f45" : "#ffd98a") + '"' + ((r + c) % 5 === 0 ? ' class="flk"' : '') + '/>';
    let fe = "";
    [56, 188].forEach(x => { for (let r = 0; r < 4; r++) fe += '<rect x="' + (x - 4) + '" y="' + (64 + r * 30) + '" width="56" height="3" fill="#1a1a1a"/><path d="M' + (x - 4) + ' ' + (58 + r * 30) + 'h56M' + (x + 4) + ' ' + (58 + r * 30) + 'v6M' + (x + 20) + ' ' + (58 + r * 30) + 'v6M' + (x + 36) + ' ' + (58 + r * 30) + 'v6" stroke="#1a1a1a" stroke-width="1.5"/>' + (r < 3 ? '<path d="M' + (x + 4) + ' ' + (67 + r * 30) + 'l40 27" stroke="#1a1a1a" stroke-width="2"/>' : ''); });
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(14) +
      /* water tower */
      '<path d="M220 22h30v20h-30z" fill="#6b4a2e"/><path d="M216 22l19-10 19 10z" fill="#3a2a1e"/><path d="M222 42l-4 12M248 42l4 12" stroke="#3a2a1e" stroke-width="2"/>' +
      /* tenements */
      '<rect x="10" y="34" width="290" height="170" fill="#7a4434"/><rect x="6" y="30" width="298" height="7" fill="#c9b79a"/>' +
      '<rect x="300" y="60" width="100" height="144" fill="#5e3a2e"/>' + wins +
      [316, 356].map(x => [76, 112, 148].map(y => '<rect x="' + x + '" y="' + y + '" width="18" height="22" fill="#2a2f45"/>').join("")).join("") + fe +
      /* tag wall at street level */
      '<rect x="0" y="160" width="300" height="68" fill="#4d4a50"/>' +
      (() => { let b = ""; for (let y = 166; y < 228; y += 8) b += '<path d="M0 ' + y + 'h300" stroke="#3f3c42" stroke-width="1"/>'; return b; })() +
      tag("BIG L", 16, 214, 46, LAV, -5) + tag("DANGER ZONE", 150, 200, 18, GOLD, -4) + tag("FLAMBOYANT", 152, 222, 15, CREAM, -3) +
      '<rect x="0" y="228" width="400" height="32" fill="#55575c"/><rect x="0" y="228" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="240" width="44" height="13" rx="4" fill="' + LAV + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="34" cy="253" r="4" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="244" width="40" height="12" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="256" r="3.5" fill="#111"/><circle cx="30" cy="256" r="3.5" fill="#111"/></g>' +
      /* pole + signs */
      '<rect x="358" y="70" width="5" height="158" fill="#3d4b3f"/><path d="M360 70q0-14 -18-14" stroke="#3d4b3f" stroke-width="4" fill="none"/><circle class="flk" cx="340" cy="58" r="5" fill="#fff6c2"/>' +
      '<rect x="304" y="84" width="92" height="20" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="350" y="98.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Lenox Av</text>' +
      '<rect x="304" y="108" width="92" height="20" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="346" y="122.5" text-anchor="end" ' + font + ' font-size="12" fill="#fff">W 13</text>' + nine(347, 122.5, 12, "#fff") + '<text x="356" y="122.5" ' + font + ' font-size="12" fill="#fff">th St</text>',
      sky("c5", "#0a0c1a", "#2c3554"));
  }

  window.SCENES = { station: station, shop: shop, blackrock: blackrock, radio: radio, corner: corner };
})();
