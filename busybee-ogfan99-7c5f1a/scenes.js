/* Busy Bee game (NYC map, the Bronx: Bronx River). Busy Bee Starski, the Chief Rocker, came up MCing for the Zulu Nation parties
   at the Bronx River Center ("123 Bronx River... Cedar Park" in "Old School"). Every subway stop around Bronx River and Soundview is
   already on the map, so room 1 is the real bus stop: the Bx11 at E 174 St & Harrod Av, by the Bronx River Houses.
   Rooms: the Bx11 pulling in, the Bronx River Center gym jam, the Dixie club battle from Wild Style (his battle with Rodney Cee),
   the art-deco lobby at 220 E 42 St with the giant globe ("she called the Daily News" in "Making Cash Money"),
   and Harrod Av & E 174 St with the Bronx River Houses towers behind. 400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bbcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.bb-car{animation:bbcar 7s linear infinite}' +
    '@keyframes bbblink{0%,100%{opacity:.25}50%{opacity:1}}.bb-bl{animation:bbblink 1.6s ease-in-out infinite}.bb-bl2{animation-delay:.5s}.bb-bl3{animation-delay:1s}' +
    '@keyframes bbflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.bb-flk{animation:bbflick 2.4s infinite}' +
    '@keyframes bbspin{to{transform:rotate(360deg)}}.bb-rec{transform-box:fill-box;transform-origin:50% 50%;animation:bbspin 1.3s linear infinite}.bb-rec2{animation-duration:.9s}' +
    '@keyframes bbbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.bb-bob{animation:bbbob .5s ease-in-out infinite}.bb-bob2{animation-delay:.25s}' +
    '@keyframes bbsweep{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.bb-beam{transform-box:fill-box;transform-origin:50% 0%;animation:bbsweep 3s ease-in-out infinite}.bb-beam2{animation-delay:-1.5s}' +
    '@keyframes bbbuzz{0%{transform:translate(0,0)}25%{transform:translate(40px,-12px)}50%{transform:translate(80px,4px)}75%{transform:translate(40px,14px)}100%{transform:translate(0,0)}}.bb-bee{animation:bbbuzz 4s ease-in-out infinite}' +
    '@keyframes bbwing{0%,100%{opacity:.9}50%{opacity:.2}}.bb-wing{animation:bbwing .15s linear infinite}' +
    '@keyframes bbglobe{from{transform:translateX(-36px)}to{transform:translateX(36px)}}.bb-mer{animation:bbglobe 5s linear infinite}.bb-mer2{animation-delay:-1.66s}.bb-mer3{animation-delay:-3.33s}' +
    '@keyframes bbmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.bb-mt{transform-box:fill-box;transform-origin:50% 100%;animation:bbmeter .6s ease-in-out infinite}.bb-mt2{animation-delay:.2s}.bb-mt3{animation-delay:.4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const HONEY = "#ffc61a", ORANGE = "#ff7a1a", CREAM = "#f6ecd2", MTA = "#0039a6", SKY = "#7fd6ff";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  /* a little cartoon bee (no face) */
  const bee = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')"><ellipse class="bb-wing" cx="-3" cy="-8" rx="6" ry="4" fill="#e8f6ff"/><ellipse class="bb-wing" cx="5" cy="-8" rx="6" ry="4" fill="#e8f6ff"/>' +
    '<ellipse cx="0" cy="0" rx="11" ry="7" fill="' + HONEY + '" stroke="#1a1408" stroke-width="1.5"/><path d="M-4 -6.5v13M2 -6.8v13.6" stroke="#1a1408" stroke-width="3"/><path d="M11 0l5 0" stroke="#1a1408" stroke-width="2"/></g>';
  /* brick tower with lit windows */
  const tower = (x, y, w, base) => { let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (base - y) + '" fill="#8a3f2b"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#5e2a1d"/>';
    for (let yy = y + 9; yy < base - 8; yy += 11) for (let xx = x + 5; xx < x + w - 7; xx += 11) g += '<rect class="bb-bl bb-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="6" height="6" fill="#ffd98a" opacity=".7"/>'; return g; };

  /* 1. The Bx11 pulling up to E 174 St & Harrod Av: the bus stop sign, the shelter, the blue-striped bus sliding in, the Bronx River Houses at dusk */
  function busstop() {
    let win = "";
    for (let x = 48; x < 230; x += 34) win += '<rect x="' + x + '" y="134" width="26" height="24" rx="2" fill="#bfe0f7" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bs)"/>' + stars(12) +
      tower(10, 56, 70, 168) + tower(92, 74, 60, 168) + tower(300, 50, 80, 168) +
      '<rect x="0" y="168" width="400" height="16" fill="#9a9c9f"/><rect x="0" y="182" width="400" height="78" fill="#3f4146"/>' +
      '<path d="M0 222h40M70 222h40M140 222h40M210 222h40M280 222h40M350 222h40" stroke="#e8d36a" stroke-width="3"/>' +
      /* the shelter */
      '<rect x="296" y="112" width="92" height="6" fill="#4b5563"/><rect x="298" y="118" width="4" height="54" fill="#4b5563"/><rect x="382" y="118" width="4" height="54" fill="#4b5563"/>' +
      '<rect x="304" y="122" width="74" height="40" fill="#cfe7f5" opacity=".35"/>' +
      person(326, 140, "#16161a") + person(352, 144, "#22222a", "bb-bob") +
      /* the stop sign on its pole */
      '<rect x="272" y="80" width="4" height="96" fill="#6b7280"/>' +
      '<rect x="236" y="64" width="76" height="40" rx="3" fill="' + MTA + '" stroke="#fff" stroke-width="1.5"/>' +
      txt("Bx11", 274, 82, 13, "#fff") + txt("E 174 St / Harrod Av", 274, 97, 7.5, "#fff") +
      /* the bus */
      '<g class="anim-train">' +
        '<rect x="30" y="122" width="250" height="56" rx="8" fill="#eef1f4" stroke="#8a9099" stroke-width="2"/>' + win +
        '<rect x="30" y="162" width="250" height="5" fill="' + MTA + '"/><rect x="30" y="168" width="250" height="3" fill="#ff8a00"/>' +
        '<rect x="248" y="126" width="28" height="22" rx="3" fill="#111"/><text x="262" y="141" text-anchor="middle" ' + font + ' font-size="9" fill="#ffb02e">Bx11</text>' +
        '<circle cx="74" cy="180" r="10" fill="#1b1b1b"/><circle cx="74" cy="180" r="4" fill="#888"/><circle cx="236" cy="180" r="10" fill="#1b1b1b"/><circle cx="236" cy="180" r="4" fill="#888"/>' +
        '<circle cx="276" cy="166" r="3" fill="#fff6c2"/>' +
      '</g>' +
      txt("BRONX RIVER · THE BRONX", 200, 246, 11, CREAM, 'letter-spacing="3"'),
      sky("bs", "#141a3a", "#d97b4f"));
  }

  /* 2. The Bronx River Center gym, a Zulu Nation party: the folding table with two turntables, speaker stacks, the crowd, the mic up front */
  function center() {
    const crowd = [];
    for (let x = 14; x < 400; x += 24) crowd.push('<g class="bb-bob' + (x % 48 ? " bb-bob2" : "") + '"><circle cx="' + x + '" cy="226" r="8" fill="#0d0d12"/><rect x="' + (x - 9) + '" y="234" width="18" height="26" rx="6" fill="#0d0d12"/></g>');
    let boards = "";
    for (let x = 0; x < 400; x += 26) boards += '<path d="M' + x + ' 170v90" stroke="#b07a3e" stroke-width="1"/>';
    const stack = x => '<rect x="' + x + '" y="96" width="44" height="74" fill="#18181c" stroke="#3a3a44" stroke-width="2"/>' +
      '<circle cx="' + (x + 22) + '" cy="116" r="12" fill="#2b2b33"/><circle class="bb-bl" cx="' + (x + 22) + '" cy="116" r="5" fill="#44444f"/>' +
      '<circle cx="' + (x + 22) + '" cy="148" r="14" fill="#2b2b33"/><circle class="bb-bl bb-bl2" cx="' + (x + 22) + '" cy="148" r="6" fill="#44444f"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a2420"/>' +
      /* cinder block wall */
      (() => { let b = ""; for (let y = 0; y < 170; y += 14) for (let x = (y / 14) % 2 ? 0 : 20; x < 400; x += 40) b += '<rect x="' + x + '" y="' + y + '" width="38" height="12" fill="#ded6c4"/>'; return b; })() +
      '<rect x="0" y="0" width="400" height="12" fill="#3a3a40"/>' +
      [70, 200, 330].map((x, i) => '<rect class="bb-flk" style="animation-delay:-' + i * 0.7 + 's" x="' + (x - 24) + '" y="10" width="48" height="5" fill="#fff8d6"/>').join("") +
      /* the banner */
      '<rect x="88" y="26" width="224" height="30" fill="#1f5f2e" stroke="' + HONEY + '" stroke-width="2"/>' +
      txt("BRONX RIVER CENTER", 200, 47, 15, HONEY, 'letter-spacing="2"') +
      /* the basketball hoop up top */
      '<rect x="176" y="60" width="48" height="30" fill="#fff" stroke="#c23a2b" stroke-width="2"/><path d="M188 90h24l-4 14h-16z" fill="none" stroke="#e4572e" stroke-width="2"/>' +
      stack(14) + stack(342) +
      /* gym floor */
      '<rect x="0" y="170" width="400" height="90" fill="#c8924f"/>' + boards +
      /* table + decks */
      '<rect x="120" y="140" width="160" height="34" fill="#4a3424" stroke="#2a1d14" stroke-width="2"/>' +
      '<rect x="134" y="102" width="50" height="40" rx="3" fill="#232327"/><rect x="216" y="102" width="50" height="40" rx="3" fill="#232327"/>' +
      '<g class="bb-rec"><circle cx="159" cy="122" r="17" fill="#0c0c0e" stroke="#333"/><circle cx="159" cy="122" r="5" fill="' + HONEY + '"/><path d="M159 107v6" stroke="#666" stroke-width="2"/></g>' +
      '<g class="bb-rec bb-rec2"><circle cx="241" cy="122" r="17" fill="#0c0c0e" stroke="#333"/><circle cx="241" cy="122" r="5" fill="' + ORANGE + '"/><path d="M241 107v6" stroke="#666" stroke-width="2"/></g>' +
      /* the mic stand up front */
      '<path d="M200 214v-52" stroke="#c9ced6" stroke-width="3"/><rect x="194" y="154" width="12" height="16" rx="6" fill="#2b2b33" stroke="#c9ced6"/>' +
      '<g class="bb-bee">' + bee(70, 74, 1.1) + '</g>' +
      crowd.join(""));
  }

  /* 3. The Dixie: the club stage from Wild Style, two mics, the red-and-gold curtain, the neon sign, the battle crowd */
  function dixie() {
    const crowd = [];
    for (let x = 10; x < 400; x += 22) crowd.push('<g class="bb-bob' + (x % 44 ? "" : " bb-bob2") + '"><circle cx="' + x + '" cy="230" r="8" fill="#08080c"/><rect x="' + (x - 9) + '" y="238" width="18" height="24" rx="6" fill="#08080c"/></g>');
    let curtain = "";
    for (let x = 30; x < 370; x += 16) curtain += '<path d="M' + x + ' 64q8 60 0 112" stroke="#6e0f19" stroke-width="5" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dx)"/>' +
      '<rect x="22" y="58" width="356" height="122" fill="#a3172a"/>' + curtain +
      '<rect x="22" y="56" width="356" height="12" fill="' + HONEY + '"/><path d="M22 68q22 16 44 0t44 0t44 0t44 0t44 0t44 0t44 0t44 0" fill="#c9a227"/>' +
      /* the neon sign */
      '<rect x="120" y="12" width="160" height="38" rx="8" fill="#12060c" stroke="#ff4fa3" stroke-width="2"/>' +
      '<text class="bb-flk" x="200" y="40" text-anchor="middle" font-family="Brush Script MT, Sedgwick Ave Display, cursive" font-style="italic" font-weight="700" font-size="26" fill="#ff79c0" stroke="#ff4fa3" stroke-width=".6">The Dixie</text>' +
      /* spot beams */
      '<g class="bb-beam"><path d="M110 50l-34 150h68z" fill="#fff6c2" opacity=".13"/></g><g class="bb-beam bb-beam2"><path d="M290 50l-34 150h68z" fill="' + SKY + '" opacity=".13"/></g>' +
      /* the stage */
      '<rect x="22" y="176" width="356" height="18" fill="#2a1a12"/><rect x="22" y="174" width="356" height="4" fill="' + HONEY + '"/>' +
      /* two MCs (silhouettes) at two mic stands */
      '<path d="M130 174v-40" stroke="#c9ced6" stroke-width="3"/><rect x="125" y="128" width="10" height="12" rx="5" fill="#222"/>' +
      '<path d="M270 174v-40" stroke="#c9ced6" stroke-width="3"/><rect x="265" y="128" width="10" height="12" rx="5" fill="#222"/>' +
      '<g class="bb-bob"><circle cx="152" cy="122" r="9" fill="#050507"/><rect x="142" y="132" width="20" height="40" rx="7" fill="#050507"/><path d="M144 140l-10 -6" stroke="#050507" stroke-width="5" stroke-linecap="round"/></g>' +
      '<g><circle cx="248" cy="122" r="9" fill="#050507"/><rect x="238" y="132" width="20" height="40" rx="7" fill="#050507"/><path d="M256 140l12 -14" stroke="#050507" stroke-width="5" stroke-linecap="round"/></g>' +
      tag("MC BATTLE", 150, 104, 20, HONEY, -4) +
      crowd.join(""),
      sky("dx", "#0c0710", "#2a0f22"));
  }

  /* 4. 220 E 42 St, the art-deco lobby with the giant turning globe sunk in the floor, the black glass dome above, clocks of the world on the wall */
  function globe() {
    const clocks = [70, 130, 270, 330].map((x, i) => '<circle cx="' + x + '" cy="58" r="13" fill="' + CREAM + '" stroke="' + HONEY + '" stroke-width="2"/>' +
      '<path d="M' + x + ' 58v-8M' + x + ' 58l' + (4 + i) + ' 3" stroke="#222" stroke-width="2" stroke-linecap="round"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1c1a17"/>' +
      /* deco walls */
      '<rect x="0" y="0" width="400" height="190" fill="#3b2f25"/>' +
      [20, 40, 360, 380].map(x => '<rect x="' + (x - 4) + '" y="0" width="8" height="190" fill="#5a4636"/>').join("") +
      '<path d="M60 0l40 40h200l40-40z" fill="#14120f"/><path d="M100 40h200" stroke="' + HONEY + '" stroke-width="2"/>' +
      '<path d="M120 0l20 30h120l20-30" fill="none" stroke="' + HONEY + '" stroke-width="1.5" opacity=".7"/>' +
      clocks +
      txt("220 E 42 ST", 200, 90, 12, HONEY, 'letter-spacing="4"') +
      /* the globe in its well */
      '<ellipse cx="200" cy="208" rx="120" ry="24" fill="#0f0e0c" stroke="' + HONEY + '" stroke-width="3"/>' +
      '<clipPath id="gclip"><circle cx="200" cy="158" r="56"/></clipPath>' +
      '<circle cx="200" cy="158" r="56" fill="#2f6fa8"/>' +
      '<g clip-path="url(#gclip)">' +
        '<path class="bb-mer" d="M160 128q16 -14 30 0q10 18 -4 30q-16 4 -26 -10z" fill="#5e9b52"/>' +
        '<path class="bb-mer bb-mer2" d="M210 158q20 -10 34 6q-4 22 -20 24q-16 -6 -14 -30z" fill="#5e9b52"/>' +
        '<path class="bb-mer bb-mer3" d="M176 184q12 -6 22 4q-6 12 -18 8z" fill="#5e9b52"/>' +
        '<ellipse class="bb-mer" cx="200" cy="158" rx="20" ry="56" fill="none" stroke="#cfe7f5" stroke-width="1" opacity=".6"/>' +
        '<ellipse class="bb-mer bb-mer2" cx="200" cy="158" rx="20" ry="56" fill="none" stroke="#cfe7f5" stroke-width="1" opacity=".6"/>' +
        '<path d="M144 158h112M150 132h100M150 184h100" stroke="#cfe7f5" stroke-width="1" opacity=".5"/>' +
      '</g>' +
      '<circle cx="200" cy="158" r="56" fill="none" stroke="#0e2a44" stroke-width="2"/>' +
      '<rect x="80" y="204" width="240" height="8" fill="' + HONEY + '" opacity=".6"/>' +
      /* compass lines in the floor */
      '<path d="M0 252l200 -20l200 20M200 234v26" stroke="#6b5a3a" stroke-width="2"/>' +
      person(40, 196, "#0f0f12") + person(356, 198, "#16161a", "bb-bob") +
      tag("CALL THE PAPER", 236, 252, 16, HONEY, -3));
  }

  /* 5. Harrod Av & E 174 St: green street signs, the wall tagged BUSY BEE, the Bronx River Houses towers behind, the Bx11 going by */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bc)"/>' + stars(14) +
      tower(16, 36, 74, 140) + tower(104, 58, 64, 140) + tower(184, 28, 78, 140) + tower(278, 46, 70, 140) +
      txt("BRONX RIVER HOUSES", 222, 22, 9, CREAM, 'letter-spacing="3" opacity=".85"') +
      /* the wall */
      '<rect x="0" y="130" width="400" height="96" fill="#3a3c42"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#303238" stroke-width="1"/>'; return b; })() +
      tag("BUSY BEE", 14, 194, 46, HONEY, -5) + tag("CHIEF ROCKER", 30, 220, 17, ORANGE, -3) + tag("STARSKI", 214, 218, 18, CREAM, -4) +
      bee(270, 160, 1.4) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="bb-car"><rect x="0" y="234" width="70" height="20" rx="4" fill="#eef1f4"/><rect x="0" y="246" width="70" height="3" fill="' + MTA + '"/><circle cx="14" cy="255" r="4" fill="#111"/><circle cx="56" cy="255" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="298" y="66" width="98" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Harrod Av", 347, 82, 12, "#fff") +
      '<rect x="298" y="92" width="98" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("E 174 St", 347, 108, 12, "#fff") +
      '<circle class="bb-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("bc", "#0a0c1a", "#2d2a40"));
  }

  window.SCENES = { busstop: busstop, center: center, dixie: dixie, globe: globe, corner: corner };
})();
