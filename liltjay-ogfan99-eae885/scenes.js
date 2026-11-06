/* Lil Tjay game (NYC map, the Bronx: Soundview / Bronx River). The 2 and the 5 at 174 St up on the el over Southern Blvd, Starlight Park on the
   Bronx River (kayaks by the boathouse), Soundview Park at the mouth of the river with the planes dropping into LaGuardia, West Farms Square under
   the el at night with the phone ringing at 2:22 ("Calling My Phone", "222"), and Bronx River Av & E 174 St with the river behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes paddle{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.kay{animation:paddle 14s linear infinite}.kay2{animation-delay:-7s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.bob{animation:bob 1.4s ease-in-out infinite}' +
    '@keyframes land{0%{transform:translate(-40px,-30px)}100%{transform:translate(440px,60px)}}.plane{animation:land 9s linear infinite;animation-delay:-4s}' +
    '@keyframes ring{0%,100%{transform:rotate(0)}10%{transform:rotate(-6deg)}20%{transform:rotate(6deg)}30%{transform:rotate(-6deg)}40%{transform:rotate(0)}}.ring{transform-box:fill-box;transform-origin:50% 100%;animation:ring 1.2s ease-in-out infinite}' +
    '@keyframes pulse{0%{r:6;opacity:.8}100%{r:26;opacity:0}}.pl{animation:pulse 1.2s ease-out infinite}.pl2{animation-delay:.6s}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.wv{animation:wave 3s ease-in-out infinite}' +
    '@keyframes elrun{from{transform:translateX(-300px)}to{transform:translateX(460px)}}.elt{animation:elrun 6s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* low Bronx skyline: brick walk-ups and a few taller blocks with lit windows */
  const skyline = (col, lit, base) => { let g = ""; [[0, 92, 50], [52, 70, 40], [96, 100, 46], [146, 80, 36], [186, 64, 44], [234, 96, 40], [278, 74, 52], [334, 88, 66]].forEach(([x, y, w]) => {
    g += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (base - y) + '" fill="' + col + '"/>';
    if (lit) for (let yy = y + 8; yy < base - 8; yy += 13) for (let xx = x + 5; xx < x + w - 8; xx += 11) if ((xx * 7 + yy * 3) % 5 < 3) g += '<rect class="bl bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="5" height="6" fill="#ffd98a" opacity=".8"/>'; }); return g; };
  const RED = "#ee352e", GREEN6 = "#00933c", ICE = "#9be7ff", PINK = "#ff5fa2", GOLD = "#ffd23f", CREAM = "#f4ead8";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';

  /* 1. 174 St on the White Plains Road line: up on the el over Southern Blvd, the canopy, the black sign with the red 2 and the green 5, the train sliding in */
  function station() {
    let win = "";
    for (let x = 24; x < 290; x += 34) win += '<rect x="' + x + '" y="112" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(14) + skyline("#2a2f45", true, 170) +
      '<path d="M0 44h400v10H0z" fill="#3c4a3f"/><rect x="0" y="54" width="400" height="4" fill="#6c7d6f"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + (x - 3) + '" y="58" width="6" height="106" fill="#2f5a3c"/>').join("") +
      '<rect x="88" y="64" width="224" height="32" rx="3" fill="#111"/><rect x="88" y="64" width="224" height="3" fill="#fff"/>' +
      '<text x="102" y="87" ' + font + ' font-size="17" fill="#fff">174 St</text>' + bullet(266, 80, "2", RED) + bullet(292, 80, "5", GREEN6) +
      '<g class="anim-train">' +
        '<rect x="6" y="102" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="286" y="110" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(294, 146, "2", RED) +
        '<circle cx="18" cy="150" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="158" width="400" height="10" fill="#eab308"/><rect x="0" y="168" width="400" height="14" fill="#3b3f46"/>' +
      [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="182" width="12" height="78" fill="#2f5a3c"/><path d="M' + (x + 12) + ' 186l60 0" stroke="#2f5a3c" stroke-width="4"/>').join("") +
      '<rect x="0" y="238" width="400" height="22" fill="#4a4a4f"/>' +
      '<g class="car"><rect x="0" y="242" width="40" height="13" rx="4" fill="' + ICE + '"/></g>' +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="9" fill="#e8e3d8" letter-spacing="3">SOUTHERN BLVD</text>',
      sky("s1", "#0d1430", "#3d3a6e"));
  }

  /* 2. Starlight Park on the Bronx River: grassy banks, the wooden boathouse with its dock, kayaks paddling by, trees on the far bank */
  function starlight() {
    let trees = "";
    for (let x = -10; x < 420; x += 34) trees += '<circle cx="' + x + '" cy="' + (118 + (x * 7) % 12) + '" r="' + (20 + (x % 3) * 3) + '" fill="' + (x % 68 ? "#2f6b3a" : "#3f8a4a") + '"/>';
    let waves = "";
    for (let x = 0; x < 440; x += 40) waves += '<path d="M' + x + ' 0q10-4 20 0t20 0" stroke="#d6f1ff" stroke-width="1.6" fill="none" opacity=".6"/>';
    const kayak = (cls, col, y) => '<g class="' + cls + '"><g class="bob"><path d="M0 ' + y + 'q30 8 60 0q-30 -6 -60 0z" fill="' + col + '"/><circle cx="30" cy="' + (y - 8) + '" r="4" fill="#1a1a1a"/><rect x="27" y="' + (y - 5) + '" width="6" height="6" rx="2" fill="#1a1a1a"/>' +
      '<path d="M14 ' + (y - 12) + 'L46 ' + (y + 2) + '" stroke="#e8e3d8" stroke-width="2"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' +
      '<circle cx="320" cy="56" r="20" fill="#ffd27a"/>' + skyline("#6c5a6e", false, 120) + trees +
      '<rect x="0" y="132" width="400" height="20" fill="#4f8a3f"/>' +
      '<rect x="0" y="150" width="400" height="70" fill="#3d7fa3"/>' +
      '<g transform="translate(0,166)"><g class="wv">' + waves + '</g></g><g transform="translate(0,196)"><g class="wv">' + waves + '</g></g>' +
      /* boathouse: weathered wood siding, dark roof, open bay */
      '<rect x="244" y="96" width="120" height="54" fill="#8a6a4a"/>' +
      (() => { let s = ""; for (let x = 248; x < 364; x += 8) s += '<path d="M' + x + ' 100v50" stroke="#6f533a" stroke-width="1.5"/>'; return s; })() +
      '<path d="M236 98l68 -26l68 26z" fill="#3b3f46"/><rect x="288" y="114" width="34" height="36" fill="#2a2420"/>' +
      '<rect x="250" y="146" width="130" height="6" fill="#b0906a"/>' +
      kayak("kay", "#ff8a2a", 176) + kayak("kay kay2", "#ffd23f", 204) +
      '<rect x="0" y="218" width="400" height="42" fill="#5e9a48"/><path d="M0 218q100 -8 200 0t200 0" fill="#5e9a48"/>' +
      '<path d="M0 236h400" stroke="#c9b48a" stroke-width="8"/>' +
      '<rect x="20" y="196" width="4" height="40" fill="#555"/><rect x="6" y="186" width="50" height="14" rx="2" fill="#5a3a22"/><text x="31" y="196" text-anchor="middle" ' + font + ' font-size="7" fill="' + CREAM + '">STARLIGHT</text>' +
      tag("BRONX RIVER", 230, 252, 18, ICE, -3),
      sky("s2", "#f29a5b", "#ffd9a8"));
  }

  /* 3. Soundview Park where the Bronx River meets the East River: marsh grass, the meadow, the ballfield lights, a jet dropping into LaGuardia across the water */
  function soundview() {
    let grass = "";
    for (let x = 0; x < 400; x += 6) grass += '<path d="M' + x + ' 196q' + (2 + x % 4) + ' -' + (14 + (x * 3) % 12) + ' ' + (4 + x % 3) + ' -' + (20 + (x * 5) % 10) + '" stroke="' + (x % 12 ? "#b7a35a" : "#8f8a45") + '" stroke-width="2" fill="none"/>';
    let lights = "";
    for (let x = 20; x < 400; x += 22) lights += '<circle class="bl bl' + (x % 3 + 1) + '" cx="' + x + '" cy="138" r="1.6" fill="#ffe7a8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' + stars(8) +
      '<g class="plane"><path d="M0 0l34 6l-34 6l6 -6z" fill="#e8ecf2"/><path d="M14 6l-8 -10h6l12 10zM14 6l-8 10h6l12 -10z" fill="#c9ced6"/><circle class="bl" cx="34" cy="6" r="2" fill="#ff5a5a"/></g>' +
      /* Queens shore across the water */
      '<rect x="0" y="126" width="400" height="14" fill="#232a44"/>' + lights +
      '<rect x="0" y="140" width="400" height="34" fill="#2c5f86"/>' +
      '<path d="M0 154h400M0 164h400" stroke="#9cc8e6" stroke-width="1" opacity=".35"/>' +
      /* meadow and the field lights */
      '<rect x="0" y="172" width="400" height="88" fill="#3f7a3a"/>' + grass +
      [70, 330].map(x => '<rect x="' + (x - 2) + '" y="104" width="4" height="96" fill="#9aa0a8"/><rect x="' + (x - 14) + '" y="98" width="28" height="10" rx="2" fill="#5d636c"/>' +
        '<rect class="flk" x="' + (x - 12) + '" y="100" width="24" height="6" fill="#fff6c2"/>').join("") +
      '<path d="M120 260q80 -70 160 0z" fill="#c9844a"/><path d="M200 252l-22 -18l22 -18l22 18z" fill="#4f8a3f" stroke="#fff" stroke-width="2"/>' + [[200,252],[178,234],[200,216],[222,234]].map(([x,y]) => '<rect x="' + (x-3) + '" y="' + (y-3) + '" width="6" height="6" fill="#fff"/>').join("") +
      '<rect x="12" y="226" width="4" height="30" fill="#3d4b3f"/><rect x="0" y="214" width="76" height="16" rx="2" fill="#2e6b3f"/><text x="38" y="225" text-anchor="middle" ' + font + ' font-size="7.5" fill="#fff">SOUNDVIEW PARK</text>' +
      tag("SOUNDVIEW", 228, 248, 24, GOLD, -4),
      sky("s3", "#1a2550", "#e07a5f"));
  }

  /* 4. West Farms Square at night: the 2 and the 5 curving over E Tremont Av on the el, street lights, a phone in a hand lighting up at 2:22 */
  function westfarms() {
    let girders = "";
    for (let x = 0; x < 400; x += 20) girders += '<path d="M' + x + ' 92l10 14l10 -14" stroke="#24442f" stroke-width="2" fill="none"/>';
    let cars = "";
    for (let x = 0; x < 300; x += 60) cars += '<rect x="' + x + '" y="62" width="56" height="26" rx="4" fill="#c9ced6"/><rect x="' + (x + 6) + '" y="68" width="16" height="10" rx="1" fill="#cfe2f5"/><rect x="' + (x + 30) + '" y="68" width="16" height="10" rx="1" fill="#cfe2f5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' + stars(10) + skyline("#1f2338", true, 150) +
      '<g class="elt">' + cars + bullet(278, 76, "5", GREEN6) + '</g>' +
      '<rect x="0" y="88" width="400" height="6" fill="#2f5a3c"/><rect x="0" y="104" width="400" height="6" fill="#2f5a3c"/>' + girders +
      [40, 150, 260, 370].map(x => '<rect x="' + (x - 5) + '" y="110" width="10" height="94" fill="#2f5a3c"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#3a3c44"/><path d="M0 230h400" stroke="#d8c25a" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="car car2"><rect x="0" y="236" width="44" height="14" rx="4" fill="' + PINK + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="34" cy="250" r="4" fill="#111"/></g>' +
      [100, 220].map(x => '<rect x="' + x + '" y="130" width="3" height="72" fill="#555b66"/><circle class="flk" cx="' + (x + 1.5) + '" cy="128" r="5" fill="#fff3b0"/>').join("") +
      '<rect x="20" y="186" width="96" height="16" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/><text x="68" y="198" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">West Farms Sq</text>' +
      /* the phone in a hand, ringing */
      '<circle class="pl" cx="318" cy="168" r="6" fill="none" stroke="' + ICE + '" stroke-width="2"/><circle class="pl pl2" cx="318" cy="168" r="6" fill="none" stroke="' + ICE + '" stroke-width="2"/>' +
      '<g class="ring"><rect x="296" y="128" width="44" height="80" rx="7" fill="#111" stroke="#555" stroke-width="2"/><rect x="300" y="136" width="36" height="62" rx="3" fill="#0e2a3e"/>' +
      '<text x="318" y="160" text-anchor="middle" ' + font + ' font-size="13" fill="' + ICE + '">2:22</text>' +
      '<text x="318" y="174" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="6" fill="#e8e3d8">INCOMING</text>' +
      '<circle cx="308" cy="188" r="5" fill="#ee352e"/><circle cx="328" cy="188" r="5" fill="#2ecc71"/></g>' +
      '<path d="M286 260v-40q0 -14 12 -18l10 -4h26q10 4 10 14v48z" fill="#6b4a36"/>',
      sky("s4", "#070b1e", "#2b2f5a"));
  }

  /* 5. Bronx River Av & E 174 St: green street signs, the brick wall tagged LIL TJAY, the Bronx River and the 174 St bridge behind */
  function corner() {
    let rail = "";
    for (let x = 0; x < 400; x += 14) rail += '<rect x="' + x + '" y="98" width="3" height="18" fill="#6a7d8c"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(14) +
      '<rect x="0" y="84" width="400" height="44" fill="#23415a"/>' +
      '<circle cx="80" cy="96" r="22" fill="#1d3b2a"/><circle cx="120" cy="92" r="18" fill="#24472f"/><circle cx="300" cy="94" r="24" fill="#1d3b2a"/><circle cx="350" cy="90" r="18" fill="#24472f"/>' +
      '<rect x="0" y="94" width="400" height="4" fill="#8aa0b0"/>' + rail + '<rect x="0" y="114" width="400" height="5" fill="#8aa0b0"/>' +
      '<rect x="0" y="119" width="400" height="12" fill="#4b5560"/>' +
      '<g class="car"><rect x="0" y="104" width="40" height="11" rx="3" fill="' + GOLD + '"/></g>' +
      '<g transform="translate(0,124)"><g class="wv"><path d="M0 0q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#9cc8e6" stroke-width="1.5" fill="none" opacity=".5"/></g></g>' +
      '<rect x="0" y="130" width="400" height="96" fill="#6b3a2c"/>' +
      (() => { let b = ""; for (let y = 136; y < 226; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#55291e" stroke-width="1"/>'; for (let y = 130; y < 226; y += 16) for (let x = (y / 8) % 4 ? 0 : 12; x < 400; x += 24) b += '<path d="M' + x + ' ' + y + 'v8" stroke="#55291e" stroke-width="1"/>'; return b; })() +
      tag("LIL TJAY", 14, 196, 42, ICE, -5) + tag("222", 236, 214, 30, GOLD, -4) + tag("T2M", 330, 200, 22, PINK, -8) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car car2"><rect x="0" y="238" width="40" height="13" rx="4" fill="#3b6fb6"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="30" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="56" width="5" height="172" fill="#3d4b3f"/>' +
      '<rect x="284" y="60" width="112" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="340" y="76" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Bronx River Av</text>' +
      '<rect x="302" y="86" width="94" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="349" y="102" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">E 174 St</text>' +
      '<circle class="flk" cx="358" cy="56" r="4" fill="#fff6c2"/>',
      sky("s5", "#060914", "#1f2a4a"));
  }

  window.SCENES = { station: station, starlight: starlight, soundview: soundview, westfarms: westfarms, corner: corner };
})();
