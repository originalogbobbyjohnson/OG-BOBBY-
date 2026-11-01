/* Clifton and Park Hill, Staten Island opening scenes for Inspectah Deck's game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:.2}}.blk{animation:blink 1s steps(1) infinite}.b2{animation-delay:-.25s}.b3{animation-delay:-.5s}.b4{animation-delay:-.75s}' +
    '@keyframes spin{to{transform:rotate(360deg)}}.spin{animation:spin 1.8s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes sway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.sway{animation:sway 3s ease-in-out infinite;transform-box:fill-box;transform-origin:top center}.sw2{animation-delay:-1.5s}' +
    '@keyframes rise{0%{transform:translateY(0);opacity:.0}20%{opacity:.6}100%{transform:translateY(-60px);opacity:0}}.rise{animation:rise 4s linear infinite}.r2{animation-delay:-1.3s}.r3{animation-delay:-2.6s}' +
    '@keyframes slide{from{transform:translateX(-140px)}to{transform:translateX(480px)}}.slide{animation:slide 20s linear infinite;animation-delay:-6s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.8s ease-in-out infinite}' +
    '@keyframes lift{0%,100%{transform:translateY(0)}50%{transform:translateY(-26px)}}.lift{animation:lift 1.6s ease-in-out infinite}' +
    '@keyframes shoot{0%{transform:translate(0,0);opacity:0}10%{opacity:1}40%{transform:translate(-160px,70px);opacity:0}100%{opacity:0;transform:translate(-160px,70px)}}.shoot{animation:shoot 5s ease-out infinite}' +
    '@keyframes pulse{0%,100%{opacity:.35}50%{opacity:1}}.pls{animation:pulse 2.4s ease-in-out infinite}.p2{animation-delay:-1.2s}' +
    '@keyframes run{from{transform:translateX(0)}to{transform:translateX(300px)}}.run{animation:run 5s linear infinite}.rn2{animation-delay:-2.5s}' +
    '@keyframes splash{0%,100%{transform:scale(.6);opacity:0}40%{transform:scale(1);opacity:.9}}.spl{animation:splash 1.6s ease-out infinite;transform-box:fill-box;transform-origin:bottom center}' +
    '@keyframes pop{0%,100%{transform:scale(.85)}50%{transform:scale(1.08)}}.pop{animation:pop 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}.drp{animation:drip 2.2s ease-in infinite}' +
    '@keyframes rain{from{transform:translate(0,-40px)}to{transform:translate(-20px,260px)}}.rain{animation:rain .9s linear infinite}.rn3{animation-delay:-.45s}' +
    '@keyframes hop{0%,40%,100%{transform:translate(0,0)}20%{transform:translate(0,-14px)}}.hop{animation:hop 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* Staten Island Railway "SIR" bullet */
  const sir = (x, y) => '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + FONT + ' font-size="13" fill="#fff">SIR</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* the SIR car: stainless with the blue band, w long, top-left at x,y */
  const sirCar = (x, y, w) => { let win = ""; for (let i = x + 16; i < x + w - 76; i += 42) win += '<rect x="' + i + '" y="' + (y + 10) + '" width="28" height="19" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="54" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/><rect x="' + x + '" y="' + (y + 35) + '" width="' + w + '" height="6" fill="#0039a6"/>' + win +
      '<circle cx="' + (x + w - 8) + '" cy="' + (y + 46) + '" r="4" fill="#fff6c2"/>' + sir(x + w - 46, y + 20); };
  /* black station sign */
  const stSign = (x, y, w, name) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="32" rx="4" fill="#111"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#fff"/>' +
    '<text x="' + (x + 12) + '" y="' + (y + 24) + '" ' + FONT + ' font-size="16" fill="#fff">' + name + '</text>' + sir(x + w - 24, y + 17);
  /* green NYC street sign blade */
  const blade = (cx, y, txt) => { const w = txt.length * 7 + 18; return '<rect x="' + (cx - w / 2) + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="' + cx + '" y="' + (y + 13) + '" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">' + txt + '</text>'; };
  const brick = (x, y, w, h, base, mortar) => { let b = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 2; yy < y + h - 4; yy += 12) for (let xx = x + (((yy - y) / 12) % 2 ? -8 : 2); xx < x + w - 6; xx += 30) b += '<rect x="' + Math.max(x, xx) + '" y="' + yy + '" width="' + Math.min(28, x + w - Math.max(x, xx)) + '" height="10" fill="' + mortar + '"/>'; return b; };
  /* street corner: wall with tags, streetlight, two street blades */
  const corner = (g, s1, s2, tags, accent) => svg(
    '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) + '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
    brick(16, 60, 240, 160, "#4a2a24", "#5a3229") + '<rect x="16" y="56" width="240" height="6" fill="#2a1a16"/>' + tags +
    '<rect class="drp" x="120" y="126" width="3" height="8" fill="' + accent + '"/><rect class="drp" x="186" y="114" width="3" height="8" fill="' + accent + '" style="animation-delay:-1s"/>' +
    '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
    '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
    blade(302, 88, s1) + blade(302, 110, s2) +
    '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
    sky("g5", g[0], g[1]));
  const PINK = "#ff6fb5", GOLD = "#f2c14e", CYAN = "#5ec8ff";

  /* 1. Clifton: the SIR on its embankment in the rain at night, the canopy lights on, Bay St below */
  function station() {
    let rain = "";
    for (let i = 0; i < 26; i++) rain += '<path class="rain' + (i % 2 ? " rn3" : "") + '" d="M' + ((i * 37) % 420) + ' ' + ((i * 23) % 60) + 'l-3 12" stroke="#9fc4e8" stroke-width="1.2" opacity=".6"/>';
    return svg('<rect width="400" height="260" fill="url(#g1)"/>' +
      '<path d="M0 110l40-20 30 14 40-30 30 22 50-26 40 30 40-18 50 22 40-16 40 20v20H0z" fill="#1a2238"/>' +
      /* the beige canopy */
      '<rect x="0" y="20" width="400" height="8" fill="#c8b48a"/><rect x="0" y="28" width="400" height="3" fill="#0039a6"/>' +
      '<rect x="50" y="31" width="5" height="64" fill="#8a7a5a"/><rect x="345" y="31" width="5" height="64" fill="#8a7a5a"/>' +
      '<circle class="flk" cx="120" cy="34" r="3" fill="#fff4c8"/><circle class="flk flk2" cx="280" cy="34" r="3" fill="#fff4c8"/>' +
      stSign(118, 42, 164, "Clifton") +
      '<g class="anim-train">' + sirCar(10, 92, 300) + '</g>' +
      '<rect x="0" y="146" width="400" height="7" fill="#eab308"/><rect x="0" y="153" width="400" height="10" fill="#5a5f68"/>' +
      /* the stone embankment wall down to Bay St */
      brick(0, 163, 400, 60, "#6a6458", "#7a7466") +
      '<rect x="0" y="223" width="400" height="37" fill="#1a1d22"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<path class="pls" d="M40 252h70M200 250h90" stroke="#ffd98a" stroke-width="3" opacity=".4"/>' +
      rain + tag("REBEL INS", 230, 210, 26, PINK, -5),
      sky("g1", "#0a0f22", "#2a3550"));
  }

  /* 2. Bayley Seton on Vanderbilt Ave: the 1930s Mayan Revival hospital tower, buff brick stepping back, the flag flying */
  function bayley() {
    let win = "";
    for (let y = 86; y < 200; y += 16) for (let x = 110; x < 292; x += 18) if (!(y < 110 && (x < 150 || x > 250))) win += '<rect x="' + x + '" y="' + y + '" width="8" height="10" fill="' + ((x + y) % 3 ? "#3a4a5a" : "#ffe6a8") + '"/>';
    return svg('<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="64" cy="48" r="16" fill="#fff3c4"/>' +
      /* side wings */
      '<rect x="20" y="130" width="90" height="80" fill="#d8c49a" stroke="#a8946a" stroke-width="2"/><rect x="290" y="130" width="90" height="80" fill="#d8c49a" stroke="#a8946a" stroke-width="2"/>' +
      '<path d="M30 146h70M30 166h70M30 186h70M300 146h70M300 166h70M300 186h70" stroke="#5a6a7a" stroke-width="6" stroke-dasharray="8 6"/>' +
      /* the stepped tower */
      '<rect x="100" y="100" width="200" height="110" fill="#e2cfa4" stroke="#a8946a" stroke-width="2"/>' +
      '<rect x="140" y="76" width="120" height="26" fill="#e2cfa4" stroke="#a8946a" stroke-width="2"/>' +
      '<rect x="166" y="54" width="68" height="24" fill="#e2cfa4" stroke="#a8946a" stroke-width="2"/>' +
      '<rect x="184" y="40" width="32" height="16" fill="#e2cfa4" stroke="#a8946a" stroke-width="2"/>' +
      /* the Mayan-style zigzag bands */
      '<path d="M140 80l6-4 6 4 6-4 6 4 6-4 6 4 6-4 6 4 6-4 6 4 6-4 6 4 6-4 6 4 6-4 6 4 6-4 6 4 6-4 6 4" stroke="#b5824a" stroke-width="2" fill="none"/>' +
      '<path d="M100 104l8-5 8 5 8-5 8 5 8-5 8 5 8-5 8 5 8-5 8 5 8-5 8 5 8-5 8 5 8-5 8 5 8-5 8 5 8-5 8 5 8-5 8 5 8-5 8 5" stroke="#b5824a" stroke-width="2" fill="none"/>' +
      win +
      /* the flag on top */
      '<path d="M200 40V10" stroke="#555" stroke-width="2"/><g class="sway" style="transform-box:view-box;transform-origin:200px 12px"><path d="M200 12h26v14h-26z" fill="#b22234"/><path d="M200 15h26M200 19h26M200 23h26" stroke="#fff" stroke-width="1.6"/><rect x="200" y="12" width="11" height="8" fill="#3c3b6e"/></g>' +
      /* the lawn and the drive */
      '<rect x="0" y="210" width="400" height="50" fill="#5a8a3a"/><path d="M170 260l14-50h32l14 50z" fill="#b8b2a4"/>' +
      '<rect x="180" y="190" width="40" height="20" fill="#3a2e24"/>' +
      tag("CLIFTON", 20, 250, 26, PINK, -3),
      sky("g2", "#6eaee0", "#e8e0c8"));
  }

  /* 3. Rosebank: the Garibaldi-Meucci house, the little 1840s Gothic Revival cottage on Tompkins Ave, the Italian flag, a phone ringing (Meucci's telephone) */
  function cottage() {
    return svg('<rect width="400" height="260" fill="url(#g3)"/>' +
      '<rect x="20" y="110" width="10" height="100" fill="#5a3e2a"/><circle cx="25" cy="100" r="34" fill="#3d7a33"/><circle cx="380" cy="104" r="30" fill="#4f8f3a"/><rect x="376" y="110" width="8" height="100" fill="#5a3e2a"/>' +
      /* the house: cream clapboard, dark green trim, steep gables */
      '<rect x="90" y="110" width="220" height="96" fill="#efe3c0" stroke="#2f4a32" stroke-width="2"/>' +
      '<path d="M90 118h220M90 130h220M90 142h220M90 154h220M90 166h220M90 178h220M90 190h220" stroke="#d8caa0" stroke-width="1"/>' +
      '<path d="M80 112l120-46 120 46z" fill="#4a3e3a" stroke="#2a2220" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M170 112l30-54 30 54z" fill="#efe3c0" stroke="#2f4a32" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M178 108l22-40 22 40" fill="none" stroke="#2f4a32" stroke-width="2" stroke-dasharray="3 3"/>' +
      '<path d="M192 104v-18l8-10 8 10v18z" fill="#2c3a4a" stroke="#2f4a32" stroke-width="2"/>' +
      '<rect x="132" y="56" width="12" height="30" fill="#8a4a3a"/><rect x="256" y="56" width="12" height="30" fill="#8a4a3a"/>' +
      /* windows with shutters */
      '<rect x="112" y="134" width="22" height="34" fill="#2c3a4a"/><rect x="104" y="134" width="7" height="34" fill="#2f4a32"/><rect x="135" y="134" width="7" height="34" fill="#2f4a32"/>' +
      '<rect x="266" y="134" width="22" height="34" fill="#2c3a4a"/><rect x="258" y="134" width="7" height="34" fill="#2f4a32"/><rect x="289" y="134" width="7" height="34" fill="#2f4a32"/>' +
      /* the porch */
      '<rect x="150" y="124" width="100" height="6" fill="#2f4a32"/><path d="M156 130v76M196 130v76M204 130v76M244 130v76" stroke="#f6efdc" stroke-width="4"/>' +
      '<rect x="186" y="150" width="28" height="56" fill="#3a2a1a"/><rect x="140" y="204" width="120" height="8" fill="#a8a294"/>' +
      /* the flag */
      '<path d="M330 210V112" stroke="#555" stroke-width="3"/><g class="sway" style="transform-box:view-box;transform-origin:330px 114px"><rect x="330" y="114" width="12" height="24" fill="#009246"/><rect x="342" y="114" width="12" height="24" fill="#f6efdc"/><rect x="354" y="114" width="12" height="24" fill="#ce2b37"/></g>' +
      /* the old telephone ringing */
      '<rect x="44" y="198" width="34" height="12" rx="3" fill="#2a1a10"/><path d="M48 198q13-14 26 0" fill="#2a1a10"/><rect x="42" y="190" width="38" height="6" rx="3" fill="#3a2a1a"/>' +
      '<path class="pls" d="M36 182q-6 6 0 12M30 178q-10 10 0 20M86 182q6 6 0 12M92 178q10 10 0 20" stroke="' + PINK + '" stroke-width="2" fill="none"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#5a8a3a"/><rect x="0" y="236" width="400" height="24" fill="#3a3e46"/>' +
      tag("ROSEBANK", 230, 252, 24, PINK, -3),
      sky("g3", "#86c0ea", "#f2e2c0"));
  }

  /* 4. Park Hill rooftop at night, drawn like a comic book page: water tower, the towers lit up, a big KRAK! burst */
  function comic() {
    let wins = "";
    [[30, 60, 70], [120, 40, 60], [260, 70, 64], [340, 50, 56]].forEach(b => { wins += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (160 - b[1]) + '" fill="#2a1f3a" stroke="#000" stroke-width="3"/>';
      for (let y = b[1] + 8; y < 150; y += 14) for (let x = b[0] + 6; x < b[0] + b[2] - 8; x += 14) wins += '<rect class="' + ((x + y) % 4 ? "" : "pls") + '" x="' + x + '" y="' + y + '" width="7" height="7" fill="' + ((x * y) % 5 ? "#ffd98a" : "#3a2e4a") + '"/>'; });
    let dots = "";
    for (let y = 8; y < 60; y += 8) for (let x = (y / 8) % 2 ? 4 : 8; x < 400; x += 8) dots += '<circle cx="' + x + '" cy="' + y + '" r="1.4" fill="#ff6fb5" opacity=".35"/>';
    return svg('<rect width="400" height="260" fill="#14102a"/>' + dots + wins +
      /* the rooftop */
      '<rect x="0" y="160" width="400" height="100" fill="#3a3448" stroke="#000" stroke-width="4"/><path d="M0 172h400" stroke="#000" stroke-width="3"/>' +
      /* water tower */
      '<path d="M40 160l6-40M90 160l-6-40M48 140h34" stroke="#000" stroke-width="3"/><rect x="40" y="88" width="50" height="34" fill="#8a5a3a" stroke="#000" stroke-width="3"/><path d="M36 90l29-20 29 20z" fill="#5a3a22" stroke="#000" stroke-width="3" stroke-linejoin="round"/>' +
      /* the KRAK! burst */
      '<g class="pop"><path d="M250 120l14-30 6 22 22-26-4 28 30-10-20 22 30 8-30 8 18 22-28-8 2 28-18-22-12 26-6-28-24 14 10-24-28-2 24-14-20-18 28 4z" fill="' + GOLD + '" stroke="#000" stroke-width="3" stroke-linejoin="round"/>' +
      '<text x="282" y="136" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="26" fill="#d7263d" stroke="#000" stroke-width="2" paint-order="stroke" transform="rotate(-8 282 130)">KRAK!</text></g>' +
      /* panel borders */
      '<rect x="4" y="4" width="392" height="252" fill="none" stroke="#f6efdc" stroke-width="6"/><path d="M4 180h392" stroke="#f6efdc" stroke-width="6"/>' +
      '<rect x="20" y="192" width="200" height="30" fill="#f6efdc" stroke="#000" stroke-width="2"/><text x="28" y="212" font-family="Anton, Impact, sans-serif" font-size="12" fill="#14102a">MEANWHILE, IN PARK HILL...</text>' +
      tag("CZARFACE", 230, 244, 26, CYAN, -4),
      "");
  }

  /* 5. Vanderbilt Ave and Tompkins Ave in Clifton */
  function block() {
    return corner(["#0d1022", "#3a2a3a"], "Vanderbilt Av", "Tompkins Av",
      tag("DECK", 26, 116, 50, PINK, -7) + tag("INSPECTAH", 36, 154, 26, GOLD, -4) + tag("C.R.E.A.M.", 120, 190, 24, CYAN, -3) + tag("WU-TANG", 30, 214, 22, "#f6efdc", -2), PINK);
  }

  window.SCENES = { station, bayley, cottage, comic, block };
})();
