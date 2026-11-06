/* Eric B. & Rakim game (NYC map, Long Island: Wyandanch, where Rakim came up; Eric B. from East Elmhurst, Queens).
   The LIRR Ronkonkoma Branch pulling into Deer Park (high-level side platforms, the new canopies, pines), Power Play Studios in
   Long Island City where Paid in Full was cut in 1987 (the board, two turntables, the reel-to-reel), the Palladium on E 14th St
   ("Me and Eric B was coolin' at the Palladium"), Wyandanch 1985 (Eric B. rolls up with crates of records looking for an MC),
   and Long Island Av & Executive Av by the station with the Fire Island Lighthouse far off on the horizon. 400 x 260 SVGs.
   All CSS classes prefixed ebr-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ebrflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.ebr-flk{animation:ebrflick 2.4s infinite}' +
    '@keyframes ebrblink{0%,100%{opacity:.25}50%{opacity:1}}.ebr-bl{animation:ebrblink 1.4s ease-in-out infinite}.ebr-bl2{animation-delay:.45s}.ebr-bl3{animation-delay:.9s}' +
    '@keyframes ebrspin{to{transform:rotate(360deg)}}.ebr-spin{transform-box:fill-box;transform-origin:50% 50%;animation:ebrspin 1.3s linear infinite}.ebr-spin2{animation-duration:2.2s}' +
    '@keyframes ebrmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.ebr-mt{transform-box:fill-box;transform-origin:50% 100%;animation:ebrmeter .55s ease-in-out infinite}.ebr-mt2{animation-delay:.18s}.ebr-mt3{animation-delay:.36s}' +
    '@keyframes ebrsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.ebr-beam{transform-box:fill-box;transform-origin:50% 100%;animation:ebrsweep 3.4s ease-in-out infinite}.ebr-beam2{animation-delay:-1.7s}' +
    '@keyframes ebrlh{0%,100%{transform:rotate(-40deg)}50%{transform:rotate(40deg)}}.ebr-lh{transform-box:fill-box;transform-origin:0% 50%;animation:ebrlh 4s ease-in-out infinite}' +
    '@keyframes ebrbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.ebr-bob{animation:ebrbob .5s ease-in-out infinite}.ebr-bob2{animation-delay:.25s}' +
    '@keyframes ebrpull{0%{transform:translateX(-260px)}55%,100%{transform:translateX(0)}}.ebr-pull{animation:ebrpull 5s ease-out infinite}' +
    '@keyframes ebrsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.ebr-sway{transform-box:fill-box;transform-origin:50% 100%;animation:ebrsway 3s ease-in-out infinite}' +
    '@keyframes ebrcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.ebr-car{animation:ebrcar 7s linear infinite}.ebr-car2{animation-delay:-3.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (6 + (i * 53) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const GOLD = "#d9b45b", GREEN = "#2e8b57", CREAM = "#f4ead8", LIRR = "#0039a6", SIGN = "#0f6b3a";
  const pine = (x, y, s) => '<g class="ebr-sway"><rect x="' + (x - 2) + '" y="' + (y - 6) + '" width="4" height="10" fill="#4a3220"/><path d="M' + x + ' ' + (y - 46 * s) + 'l' + (14 * s) + ' ' + (22 * s) + 'h' + (-6 * s) + 'l' + (10 * s) + ' ' + (18 * s) + 'h' + (-36 * s) + 'l' + (10 * s) + ' ' + (-18 * s) + 'h' + (-6 * s) + 'z" fill="#1f5a3a"/></g>';
  const blade = (x, y, w, t) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' + txt(t, x + w / 2, y + 16, 12, "#fff");

  /* 1. Deer Park, LIRR Ronkonkoma Branch: two high-level side platforms, the new canopies, the black station sign with the LIRR pill, pines, the train sliding in */
  function deerpark() {
    let win = "";
    for (let x = 26; x < 270; x += 30) win += '<rect x="' + x + '" y="118" width="20" height="14" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ebrd)"/>' +
      pine(30, 112, 1.1) + pine(70, 108, .9) + pine(330, 110, 1) + pine(372, 114, 1.2) + pine(210, 104, .8) +
      /* far platform + canopy */
      '<rect x="0" y="96" width="400" height="10" fill="#9aa3ab"/><rect x="0" y="60" width="400" height="6" fill="#2b4a7a"/>' +
      [40, 140, 240, 340].map(x => '<rect x="' + (x - 2) + '" y="66" width="4" height="30" fill="#2b4a7a"/>').join("") +
      /* the sign hanging from the canopy */
      '<rect x="110" y="70" width="180" height="22" rx="2" fill="#111"/><rect x="110" y="70" width="180" height="2" fill="#fff"/>' +
      '<text x="122" y="86" ' + font + ' font-size="13" fill="#fff">Deer Park</text>' +
      '<rect x="234" y="74" width="48" height="14" rx="7" fill="' + LIRR + '"/>' + txt("LIRR", 258, 85, 10, "#fff") +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="6" y="108" width="300" height="52" rx="5" fill="#cdd2d8" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="6" y="140" width="300" height="5" fill="' + LIRR + '"/><rect x="290" y="114" width="12" height="20" rx="2" fill="#cfe2f5"/>' +
        '<circle cx="300" cy="150" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* near platform with canopy posts */
      '<rect x="0" y="160" width="400" height="10" fill="#eab308"/><rect x="0" y="170" width="400" height="90" fill="#8d949b"/>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 3) + '" y="170" width="6" height="70" fill="#2b4a7a"/>').join("") +
      '<rect x="0" y="236" width="400" height="8" fill="#2b4a7a"/>' +
      person(118, 196, "#1b1b1b") + person(140, 200, "#2a2a2a") +
      txt("RONKONKOMA BRANCH", 270, 222, 10, "#1b2a44", 'letter-spacing="3"'),
      sky("ebrd", "#8fc3e8", "#e8f2f7"));
  }

  /* 2. Power Play Studios, Long Island City, 1987: the control room for Paid in Full. The big board with blinking faders, VU meters jumping,
     the reel-to-reel turning, two turntables for Eric B.'s cuts, the vocal booth window with the mic */
  function powerplay() {
    let faders = "";
    for (let x = 70; x < 330; x += 12) faders += '<rect x="' + x + '" y="186" width="3" height="22" fill="#111"/><rect class="ebr-bl ebr-bl' + (x % 3 + 1) + '" x="' + (x - 3) + '" y="' + (190 + (x * 7) % 12) + '" width="9" height="5" fill="' + (x % 24 ? "#e0e0e0" : GOLD) + '"/>';
    let leds = "";
    for (let x = 70; x < 330; x += 12) leds += '<circle class="ebr-bl ebr-bl' + ((x / 12) % 3 + 1) + '" cx="' + (x + 1) + '" cy="178" r="2" fill="' + (x % 36 ? "#7fff7f" : "#ff5a5a") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a2420"/>' +
      /* wood slat wall */
      (() => { let w = ""; for (let x = 0; x < 400; x += 16) w += '<rect x="' + x + '" y="0" width="14" height="150" fill="#5a4030" opacity=".7"/>'; return w; })() +
      /* booth window with the mic */
      '<rect x="120" y="24" width="160" height="86" rx="4" fill="#1b2a33" stroke="#111" stroke-width="5"/>' +
      '<rect x="128" y="32" width="144" height="70" fill="#2c4250"/>' +
      '<rect x="198" y="58" width="4" height="40" fill="#999"/><rect x="190" y="44" width="20" height="18" rx="9" fill="#bfc4ca" stroke="#555"/>' +
      '<rect x="204" y="52" width="14" height="22" rx="7" fill="#111" opacity=".6"/>' +
      txt("POWER PLAY STUDIOS", 200, 18, 10, CREAM, 'letter-spacing="3"') +
      /* VU meters */
      '<rect x="20" y="40" width="80" height="44" rx="3" fill="#f3e6b8" stroke="#111" stroke-width="3"/>' +
      [32, 48, 64, 80].map((x, i) => '<rect class="ebr-mt ebr-mt' + (i % 3 + 1) + '" x="' + x + '" y="50" width="8" height="28" fill="' + (i === 3 ? "#e74c3c" : GREEN) + '"/>').join("") +
      /* reel-to-reel */
      '<rect x="296" y="32" width="90" height="96" rx="4" fill="#c8c8c8" stroke="#555" stroke-width="2"/>' +
      '<g class="ebr-spin ebr-spin2"><circle cx="320" cy="62" r="16" fill="#222"/><path d="M320 46v32M304 62h32" stroke="#666" stroke-width="3"/></g>' +
      '<g class="ebr-spin ebr-spin2"><circle cx="362" cy="62" r="16" fill="#222"/><path d="M362 46v32M346 62h32" stroke="#666" stroke-width="3"/></g>' +
      '<path d="M320 78L340 104L362 78" stroke="#7a4a20" stroke-width="2" fill="none"/>' +
      /* the console */
      '<path d="M40 170L360 170L390 232H10z" fill="#3b3b40" stroke="#111" stroke-width="2"/>' + leds + faders +
      /* two turntables on the side table */
      '<rect x="14" y="132" width="110" height="30" rx="3" fill="#4a4a50"/>' +
      '<g class="ebr-spin"><ellipse cx="44" cy="146" rx="22" ry="8" fill="#111"/><ellipse cx="44" cy="146" rx="6" ry="2.5" fill="' + GOLD + '"/><path d="M28 146h6" stroke="#444"/></g>' +
      '<g class="ebr-spin"><ellipse cx="96" cy="146" rx="22" ry="8" fill="#111"/><ellipse cx="96" cy="146" rx="6" ry="2.5" fill="' + GREEN + '"/><path d="M104 146h6" stroke="#444"/></g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#1a1512"/>' +
      txt("LONG ISLAND CITY", 200, 250, 10, GOLD, 'letter-spacing="4"'));
  }

  /* 3. The Palladium, E 14th St: the old brick theater front with the tall arched windows, the marquee lit, searchlights sweeping, the line outside */
  function palladium() {
    let brick = "";
    for (let y = 66; y < 190; y += 7) for (let x = (y / 7) % 2 ? 46 : 39; x < 362; x += 14) brick += '<rect x="' + x + '" y="' + y + '" width="12" height="5" fill="#6b2a20" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ebrp)"/>' + stars(16) +
      '<rect class="ebr-beam" x="96" y="0" width="16" height="190" fill="#fff6c2" opacity=".18"/>' +
      '<rect class="ebr-beam ebr-beam2" x="290" y="0" width="16" height="190" fill="#bde0ff" opacity=".18"/>' +
      '<rect x="36" y="60" width="328" height="136" fill="#8a3a2a"/>' +
      '<g clip-path="url(#ebrpc)">' + brick + '</g>' +
      '<rect x="30" y="54" width="340" height="10" fill="#d8c6a0"/>' +
      [70, 130, 250, 310].map(x => '<path d="M' + x + ' 130V88q12-16 24 0V130z" fill="#ffd98a" class="ebr-bl ebr-bl' + (x % 3 + 1) + '" opacity=".8"/><path d="M' + (x + 12) + ' 80v50" stroke="#5a2018" stroke-width="2"/>').join("") +
      /* marquee */
      '<rect x="120" y="134" width="160" height="30" fill="#151515" stroke="' + GOLD + '" stroke-width="2"/>' +
      (() => { let b = ""; for (let x = 126; x < 280; x += 8) b += '<circle class="ebr-bl ebr-bl' + (x % 3 + 1) + '" cx="' + x + '" cy="138" r="1.6" fill="#fff6c2"/><circle class="ebr-bl ebr-bl' + ((x + 1) % 3 + 1) + '" cx="' + x + '" cy="160" r="1.6" fill="#fff6c2"/>'; return b; })() +
      txt("PALLADIUM", 200, 155, 14, CREAM, 'letter-spacing="3"') +
      '<rect x="170" y="166" width="60" height="30" fill="#1a0f0c"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#4d4b50"/><rect x="0" y="196" width="400" height="4" fill="#8a8c90"/>' +
      [60, 80, 100, 290, 310, 330, 350].map((x, i) => person(x, 206, i % 2 ? "#151515" : "#252525", i % 2 ? "ebr-bob ebr-bob2" : "ebr-bob")).join("") +
      '<path d="M120 236h160" stroke="' + GOLD + '" stroke-width="2"/>' +
      txt("E 14TH ST", 200, 252, 10, CREAM, 'letter-spacing="4"'),
      sky("ebrp", "#0b0a1a", "#3a1f3f") + '<clipPath id="ebrpc"><rect x="36" y="60" width="328" height="136"/></clipPath>');
  }

  /* 4. Wyandanch, the mid-eighties: the Cape Cod houses under the trees, porch light on, Eric B.'s car pulling up with a crate of records in the open trunk */
  function wyandanch() {
    const house = (x, col) => '<path d="M' + x + ' 150l40-34l40 34z" fill="#4a3a32"/><rect x="' + (x + 6) + '" y="150" width="68" height="50" fill="' + col + '"/>' +
      '<rect x="' + (x + 14) + '" y="160" width="14" height="14" fill="#ffd98a" class="ebr-bl"/><rect x="' + (x + 50) + '" y="160" width="14" height="14" fill="#ffd98a" opacity=".6"/><rect x="' + (x + 33) + '" y="172" width="12" height="28" fill="#3a2a22"/>' +
      '<rect x="' + (x + 30) + '" y="128" width="18" height="12" fill="#ffd98a" opacity=".5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ebrw)"/>' + stars(14) +
      '<circle cx="340" cy="40" r="16" fill="#fff4d0"/><circle cx="334" cy="36" r="16" fill="url(#ebrw)" opacity="0"/>' +
      '<ellipse cx="60" cy="120" rx="50" ry="34" fill="#1f3a28"/><ellipse cx="380" cy="118" rx="44" ry="32" fill="#1f3a28"/>' +
      house(30, "#c9b79a") + house(150, "#9fb3c2") + house(270, "#d8c7a8") +
      '<rect x="0" y="200" width="400" height="10" fill="#4f7a3a"/><rect x="0" y="210" width="400" height="50" fill="#3f3f44"/>' +
      '<path d="M0 236h400" stroke="#d8c26a" stroke-width="2" stroke-dasharray="14 12"/>' +
      /* the car pulling up, trunk open with records */
      '<g class="ebr-pull">' +
        '<rect x="110" y="208" width="120" height="22" rx="5" fill="#7a1e2c"/><path d="M134 208l12-16h50l12 16z" fill="#6a1a26"/><path d="M146 206l8-11h34l8 11z" fill="#cfe2f5" opacity=".8"/>' +
        '<path d="M110 208l-8-22h22z" fill="#5a1520"/>' +
        '<rect x="104" y="196" width="22" height="14" fill="#7b5b35" stroke="#4a361e"/>' + [107, 112, 117].map(x => '<rect x="' + x + '" y="188" width="4" height="12" fill="#111"/>').join("") +
        '<circle cx="134" cy="232" r="9" fill="#111"/><circle cx="208" cy="232" r="9" fill="#111"/><circle cx="134" cy="232" r="3" fill="#888"/><circle cx="208" cy="232" r="3" fill="#888"/>' +
        '<circle cx="230" cy="216" r="3" fill="#fff6c2"/>' +
      '</g>' +
      txt("WYANDANCH", 330, 252, 10, CREAM, 'letter-spacing="3"'),
      sky("ebrw", "#0a0e22", "#2c3550"));
  }

  /* 5. Long Island Av & Executive Av by the Deer Park station: green signs, the wall tagged, the Fire Island Lighthouse far off on the horizon, its beam sweeping */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ebrc)"/>' + stars(16) +
      /* lighthouse far off, black and white bands */
      '<g transform="translate(250 34)">' +
        '<path class="ebr-lh" d="M9 8L150 -14L150 30z" fill="#fff6c2" opacity=".22"/>' +
        '<path d="M2 18L4 70H14L16 18z" fill="#f4f4f4"/>' +
        [26, 42, 58].map(y => '<path d="M' + (2.3 + (y - 18) * 0.04) + ' ' + y + 'H' + (15.7 - (y - 18) * 0.04) + 'V' + (y + 8) + 'H' + (2.3 + (y - 10) * 0.04) + 'z" fill="#1b1b1b"/>').join("") +
        '<rect x="3" y="10" width="12" height="8" fill="#ffe9a0" class="ebr-flk"/><path d="M1 10h16l-8-6z" fill="#333"/>' +
      '</g>' +
      '<rect x="0" y="104" width="400" height="10" fill="#1c2a3a"/>' +
      pine(40, 128, .7) + pine(70, 126, .6) + pine(370, 128, .7) +
      /* the wall */
      '<rect x="0" y="128" width="400" height="98" fill="#3c3e45"/>' +
      (() => { let b = ""; for (let y = 138; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("ERIC B. &amp; RAKIM", 14, 190, 40, GOLD, -5) + tag("PRESIDENT", 24, 218, 18, CREAM, -3) +
      tag("MOVE THE CROWD", 160, 222, 16, "#7fd1b9", -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="ebr-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + GREEN + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<g class="ebr-car ebr-car2"><rect x="0" y="240" width="40" height="12" rx="4" fill="#c0392b"/><circle cx="9" cy="252" r="4" fill="#111"/><circle cx="31" cy="252" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      blade(286, 66, 110, "Long Island Av") + blade(286, 92, 110, "Executive Av") +
      '<circle class="ebr-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("ebrc", "#070b1a", "#2a3550"));
  }

  window.SCENES = { deerpark: deerpark, powerplay: powerplay, palladium: palladium, wyandanch: wyandanch, corner: corner };
})();
