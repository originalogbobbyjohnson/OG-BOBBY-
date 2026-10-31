/* Park Hill / Clifton, Staten Island opening scenes for Method Man's game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes leaf{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(30px,240px) rotate(300deg);opacity:.9}}' +
    '.leaf{animation:leaf 6s linear infinite}.l2{animation-delay:-1.5s}.l3{animation-delay:-3s}.l4{animation-delay:-4.5s}' +
    '@keyframes tug{from{transform:translateX(-120px)}to{transform:translateX(460px)}}' +
    '.tug{animation:tug 18s linear infinite;animation-delay:-7s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}' +
    '.bob{animation:bob 1.8s ease-in-out infinite}' +
    '@keyframes gull{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-12px)}100%{transform:translate(440px,4px)}}' +
    '.gul{animation:gull 12s linear infinite}' +
    '@keyframes win{0%,60%,100%{opacity:.95}65%,90%{opacity:.15}}' +
    '.win{animation:win 5s infinite}.w2{animation-delay:-1.7s}.w3{animation-delay:-3.3s}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}' +
    '.bnc{animation:bounce 1s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}' +
    '.drp{animation:drip 2.2s ease-in infinite}' +
    '@keyframes carR{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.cr1{animation:carR 5s linear infinite}' +
    '@keyframes flut{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.flg{transform-box:fill-box;transform-origin:0 50%;animation:flut 1.3s ease-in-out infinite}' +
    '@keyframes kite{0%,100%{transform:translate(0,0) rotate(0)}50%{transform:translate(8px,-6px) rotate(6deg)}}.kite{animation:kite 2.6s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}' +
    '@keyframes sway{0%,100%{transform:skewX(0)}50%{transform:skewX(-10deg)}}.sway{animation:sway 2s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}' +
    '@keyframes wave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.wv{animation:wave 3s linear infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  /* Staten Island Railway "SIR" bullet */
  const sir = (x, y) =>
    '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">SIR</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#f2c14e", RED = "#e63946", BLUE = "#5ec8ff";
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const YEL = "#ffd23f", BLZ = "#ff6b35", ICE = "#9ad1ff";
  const flag = (x, y, c) => '<path d="M' + x + ' ' + y + 'v-26" stroke="#ddd" stroke-width="2"/><path class="flg" d="M' + (x + 1) + ' ' + (y - 26) + 'h20v12h-20z" fill="' + c + '"/>';

  /* 1. Clifton: the SIR on its embankment over Bay St, side platform under the beige canopy, the train rolling in */
  function station() {
    let windows = "";
    for (let x = 22; x < 290; x += 44) windows += '<rect x="' + x + '" y="98" width="28" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' +
      '<circle cx="360" cy="64" r="14" fill="#ffd9a0"/>' +
      /* beige canopy over the platform */
      '<path d="M0 18h400v10H0z" fill="#d9c9a3"/><path d="M0 28h400v3H0z" fill="#9a8a66"/>' +
      '<rect x="70" y="31" width="5" height="58" fill="#7a6a4a"/><rect x="330" y="31" width="5" height="58" fill="#7a6a4a"/>' +
      /* black station sign */
      '<rect x="110" y="40" width="180" height="32" rx="4" fill="#111"/><rect x="110" y="40" width="180" height="4" fill="#fff"/>' +
      '<text x="124" y="64" ' + FONT + ' font-size="16" fill="#fff">Clifton</text>' + sir(264, 57) +
      '<g class="anim-train">' +
        '<rect x="8" y="88" width="300" height="56" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="124" width="300" height="6" fill="#0039a6"/>' + windows +
        '<circle cx="300" cy="136" r="4" fill="#fff6c2"/>' + sir(262, 136) +
      '</g>' +
      '<rect x="0" y="144" width="400" height="8" fill="#eab308"/><rect x="0" y="152" width="400" height="14" fill="#8a8f96"/>' +
      /* the grassy embankment, the stone wall and the girder bridge over the street */
      '<path d="M0 166h400v40H0z" fill="#4f7a33"/>' +
      (function () { let w = ""; for (let x = 0; x < 400; x += 18) w += '<rect x="' + x + '" y="196" width="16" height="10" fill="#8a8274" stroke="#5e584c"/>'; return w; })() +
      '<rect x="150" y="166" width="110" height="18" fill="#2f3a4a"/><path d="M150 172h110M150 178h110" stroke="#4a5868" stroke-width="2"/>' +
      '<rect x="150" y="184" width="110" height="52" fill="#1e232b"/>' +
      '<g class="cr1"><rect x="0" y="216" width="40" height="14" rx="4" fill="' + BLZ + '"/><rect x="8" y="208" width="22" height="10" rx="3" fill="' + BLZ + '"/><circle cx="8" cy="230" r="4" fill="#111"/><circle cx="32" cy="230" r="4" fill="#111"/></g>' +
      '<rect x="0" y="236" width="400" height="24" fill="#16191e"/><path d="M0 248h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      tag("PARK HILL", 14, 250, 24, YEL, -3) + tag("METH", 300, 252, 28, BLZ, -6),
      sky("g1", "#2a2a5a", "#e09a6a"));
  }

  /* 2. Grymes Hill: Wagner College's Main Hall, Collegiate Gothic brick with limestone trim and twin towers, flag flying */
  function wagner() {
    let wins = "";
    for (let x = 96; x < 310; x += 22) if (x < 158 || x > 236) { wins += '<path d="M' + x + ' 170v-18a6 6 0 0 1 12 0v18z" fill="#2c3a4a" stroke="#e6dcc4" stroke-width="2"/><path d="M' + x + ' 140v-12a6 6 0 0 1 12 0v12z" fill="#2c3a4a" stroke="#e6dcc4" stroke-width="2"/>'; }
    const tower = x => '<rect x="' + x + '" y="62" width="30" height="132" fill="#9a4632" stroke="#5a2418" stroke-width="2"/>' +
      '<path d="M' + x + ' 62v-8h6v4h6v-4h6v4h6v-4h6v8z" fill="#e6dcc4"/>' +
      '<path d="M' + (x + 9) + ' 110v-18a6 6 0 0 1 12 0v18z" fill="#2c3a4a" stroke="#e6dcc4" stroke-width="2"/>' +
      '<rect x="' + x + '" y="124" width="30" height="4" fill="#e6dcc4"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="340" cy="44" r="16" fill="#fff4c8"/>' +
      /* the harbor and lower Manhattan far below the hill */
      '<rect x="0" y="150" width="400" height="20" fill="#5a86a8"/>' +
      '<g fill="#7a8aa6"><rect x="330" y="132" width="10" height="18"/><rect x="342" y="120" width="8" height="30"/><path d="M352 150v-36l5-10 5 10v36z"/><rect x="364" y="128" width="12" height="22"/></g>' +
      /* the building */
      '<rect x="80" y="122" width="240" height="72" fill="#9a4632" stroke="#5a2418" stroke-width="2"/>' +
      '<path d="M74 124l14-18h224l14 18z" fill="#4c5560" stroke="#2e343c" stroke-width="2" stroke-linejoin="round"/>' +
      '<rect x="80" y="146" width="240" height="4" fill="#e6dcc4"/>' + wins +
      tower(168) + tower(208) + flag(223, 54, YEL) +
      /* the arched entrance between the towers */
      '<path d="M190 194v-26a10 10 0 0 1 20 0v26z" fill="#3a2a1e" stroke="#e6dcc4" stroke-width="2"/>' +
      /* lawn on the hilltop, autumn trees */
      '<path d="M0 194q200-14 400 0v66H0z" fill="#5c9a46"/><path d="M184 260l8-66h16l8 66z" fill="#c9b48a"/>' +
      '<rect x="30" y="140" width="7" height="60" fill="#4a3a2c"/><circle cx="34" cy="132" r="26" fill="#d9862a"/>' +
      '<rect x="366" y="146" width="7" height="54" fill="#4a3a2c"/><circle cx="370" cy="138" r="22" fill="#c8551f"/>' +
      '<path class="leaf" d="M60 0q6-6 10 0q-4 6-10 0z" fill="#e09a2a"/><path class="leaf l3" d="M330 0q6-6 10 0q-4 6-10 0z" fill="#c8551f"/>' +
      tag("GRYMES HILL", 18, 248, 22, YEL, -3),
      sky("g2", "#6fa6d6", "#f4dcae"));
  }

  /* 3. Freshkills Park: rolling grass hills over the old landfill, a kite in the wind, a hawk circling, Manhattan far off */
  function freshkills() {
    let grass = "";
    for (let x = 6; x < 400; x += 14) grass += '<path class="sway" d="M' + x + ' 236q3-12 0-22" stroke="#c9b05a" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="80" cy="50" r="18" fill="#fff4c8"/>' +
      '<g fill="#9aa8c0" opacity=".8"><rect x="300" y="108" width="6" height="12"/><rect x="308" y="98" width="5" height="22"/><path d="M315 120v-28l3-8 3 8v28z"/><rect x="323" y="104" width="7" height="16"/></g>' +
      /* the mounds */
      '<path d="M0 140q80-50 170-10t130-14 100 20v124H0z" fill="#7aa64a"/>' +
      '<path d="M0 180q100-40 200-6t200-10v96H0z" fill="#a8b85a"/>' +
      '<path d="M0 214q120-20 240 0t160-6v52H0z" fill="#c9b878"/>' + grass +
      '<path d="M150 156q40-8 90 6" stroke="#e8dcb8" stroke-width="3" fill="none" stroke-dasharray="6 6"/>' +
      /* the kite and its string */
      '<g class="kite"><path d="M268 40l14 16-14 22-14-22z" fill="' + BLZ + '" stroke="#5a2410" stroke-width="1.5"/><path d="M254 56h28M268 40v38" stroke="#5a2410" stroke-width="1"/><path d="M268 78q-6 10 2 18t-2 16" stroke="' + YEL + '" stroke-width="2" fill="none"/></g>' +
      '<path d="M268 78Q240 160 214 214" stroke="#444" stroke-width="1" fill="none"/>' +
      /* the hawk */
      '<g class="gul"><path d="M40 70q10-8 18 0q8-8 18 0" stroke="#3a2a1e" stroke-width="3" fill="none"/></g>' +
      tag("FRESHKILLS", 18, 250, 24, YEL, -3) + tag("TICAL", 300, 250, 24, BLZ, -6),
      sky("g3", "#5fa0e0", "#d6ecf6"));
  }

  /* 4. South Beach: the FDR Boardwalk at sunset, lamps lighting up, waves rolling in, the bridge far off up the Narrows */
  function boardwalk() {
    let boards = "";
    for (let x = 0; x < 400; x += 12) boards += '<path d="M' + x + ' 196l' + (x < 200 ? -10 : 10) + ' 64" stroke="#7a5a3a" stroke-width="1.5"/>';
    let lamps = "";
    [60, 200, 340].forEach((x, i) => lamps += '<rect x="' + x + '" y="134" width="4" height="62" fill="#1d2329"/><path d="M' + (x - 6) + ' 134h16" stroke="#1d2329" stroke-width="3"/><circle class="flk' + (i === 1 ? " flk2" : "") + '" cx="' + (x + 2) + '" cy="128" r="7" fill="#ffe7a8"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<circle cx="320" cy="96" r="22" fill="#ffb05a"/>' +
      /* the bridge far away */
      '<g stroke="#6a5a7a" fill="none" stroke-width="2" opacity=".85"><path d="M40 104v-34M120 104v-34"/><path d="M0 96Q40 70 40 70Q80 100 120 70Q140 84 170 98"/><path d="M0 104h170"/></g>' +
      /* the water and waves */
      '<rect x="0" y="104" width="400" height="44" fill="#3a6a94"/>' +
      '<path class="shim" d="M20 116h50M180 124h60M300 112h50" stroke="#ffcf8a" stroke-width="2"/>' +
      '<g class="wv"><path d="M0 146q10-6 20 0t20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0" stroke="#fff" stroke-width="3" fill="none" opacity=".8"/></g>' +
      '<rect x="0" y="148" width="400" height="30" fill="#e8d2a0"/>' +
      /* the boardwalk deck and rail */
      '<rect x="0" y="178" width="400" height="18" fill="#3d3328"/>' +
      (function () { let r = ""; for (let x = 4; x < 400; x += 20) r += '<rect x="' + x + '" y="178" width="3" height="18" fill="#c9b48a"/>'; return r; })() +
      '<path d="M0 178h400" stroke="#c9b48a" stroke-width="3"/>' + lamps +
      '<rect x="0" y="196" width="400" height="64" fill="#a8845a"/>' + boards +
      '<path class="gul" d="M20 60q6-6 12 0q6-6 12 0" stroke="#2a2a2a" stroke-width="2" fill="none"/>' +
      tag("SOUTH BEACH", 18, 250, 24, YEL, -3),
      sky("g4", "#3a3a7a", "#ff9a6a"));
  }

  /* 5. Targee St and Vanderbilt Ave in Park Hill, the Wu-Tang Clan District corner: green signs, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="372" cy="26" r="11" fill="#fff1d6"/>' +
      (function () { let b = '<rect x="16" y="60" width="232" height="160" fill="#2e3440"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 240; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#3a4250"/>'; return b; })() +
      tag("METHOD MAN", 22, 122, 34, YEL, -7) + tag("JOHNNY BLAZE", 32, 168, 24, BLZ, -3) + tag("TICAL", 60, 206, 28, ICE, -2) +
      '<rect class="drp" x="110" y="124" width="3" height="8" fill="' + YEL + '"/>' +
      /* streetlight */
      '<rect x="306" y="40" width="5" height="180" fill="#1d2329"/><path d="M308 42h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M324 46h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M324 54l26 0 34 166h-94z" fill="#ffe7a8"/></g>' +
      /* street signs and the honorary sign under them */
      '<rect x="270" y="70" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="310" y="83" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Targee St</text>' +
      '<rect x="262" y="92" width="96" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="310" y="105" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Vanderbilt Av</text>' +
      '<rect x="256" y="116" width="108" height="30" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="310" y="129" text-anchor="middle" ' + FONT + ' font-size="10" fill="#fff">Wu-Tang Clan</text>' +
      '<text x="310" y="141" text-anchor="middle" ' + FONT + ' font-size="10" fill="#fff">District</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#2a3a4a"));
  }

  window.SCENES = { station, wagner, freshkills, boardwalk, corner };
})();
