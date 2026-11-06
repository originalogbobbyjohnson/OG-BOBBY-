/* Father MC game (NYC map, Queens: Far Rockaway, where Timothy Brown was raised). Scenes:
   1. the A train pulling into Beach 60 St, up on the concrete Rockaway viaduct (other Rockaway games already use Mott Av, Beach 25/36/44 St);
   2. Rockaway Community Park at nightfall, four Jeeps rolling in like a convoy ("Everything's Gonna Be Alright");
   3. Arverne by the Sea at sunset, the surf rolling in, a boombox on the blanket ("Close to You");
   4. Gordy Groove Recording in Brooklyn, where the Father's Day album was cut (reels spinning, meters jumping);
   5. Rockaway Beach Blvd & Beach 60 St, the wall tagged FATHER MC, the A rolling on the viaduct behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fmcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.fm-car{animation:fmcar 7s linear infinite}.fm-car2{animation-delay:-3.5s}' +
    '@keyframes fmjeep{0%{transform:translateX(-260px)}100%{transform:translateX(420px)}}.fm-jeep{animation:fmjeep 9s linear infinite;animation-delay:-4.6s}' +
    '@keyframes fmblink{0%,100%{opacity:.25}50%{opacity:1}}.fm-bl{animation:fmblink 1.6s ease-in-out infinite}.fm-bl2{animation-delay:.5s}.fm-bl3{animation-delay:1s}' +
    '@keyframes fmflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.fm-flk{animation:fmflick 2.4s infinite}' +
    '@keyframes fmbass{0%{transform:scale(.6);opacity:.8}100%{transform:scale(1.6);opacity:0}}.fm-bass{transform-box:fill-box;transform-origin:50% 50%;animation:fmbass 1s ease-out infinite}.fm-bass2{animation-delay:.5s}' +
    '@keyframes fmwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-18px)}}.fm-wave{animation:fmwave 3s ease-in-out infinite}.fm-wave2{animation-delay:-1.5s}' +
    '@keyframes fmnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-46px);opacity:0}}.fm-note{animation:fmnote 2.6s linear infinite}.fm-note2{animation-delay:-.9s}.fm-note3{animation-delay:-1.8s}' +
    '@keyframes fmspin{to{transform:rotate(360deg)}}.fm-spin{transform-box:fill-box;transform-origin:50% 50%;animation:fmspin 2s linear infinite}' +
    '@keyframes fmmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.fm-mt{transform-box:fill-box;transform-origin:50% 100%;animation:fmmeter .6s ease-in-out infinite}.fm-mt2{animation-delay:.2s}.fm-mt3{animation-delay:.4s}' +
    '@keyframes fmbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.fm-bob{animation:fmbob .55s ease-in-out infinite}.fm-bob2{animation-delay:.27s}' +
    '@keyframes fmgull{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-12px)}100%{transform:translate(440px,0)}}.fm-gull{animation:fmgull 12s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ROSE = "#ff6f91", GOLD = "#f2c14e", SKY = "#7ad3e8", CREAM = "#f6ecdc", BLUE = "#0039a6";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const jeep = (x, col) => '<g transform="translate(' + x + ' 0)">' +
    '<rect x="0" y="176" width="58" height="22" rx="3" fill="' + col + '"/><rect x="8" y="160" width="38" height="18" rx="2" fill="' + col + '"/>' +
    '<rect x="12" y="163" width="14" height="11" fill="#bfe3f2" opacity=".85"/><rect x="29" y="163" width="14" height="11" fill="#bfe3f2" opacity=".85"/>' +
    '<rect x="-6" y="182" width="7" height="12" rx="2" fill="#222"/><circle cx="56" cy="183" r="3" fill="#fff6c2"/>' +
    '<circle cx="13" cy="199" r="7" fill="#111"/><circle cx="13" cy="199" r="3" fill="#888"/><circle cx="45" cy="199" r="7" fill="#111"/><circle cx="45" cy="199" r="3" fill="#888"/></g>';

  /* 1. Beach 60 St: the elevated platform on the concrete Rockaway viaduct, the black sign with the A, the A train pulling in, the ocean out past the rooftops */
  function beach60() {
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="96" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    let piers = "";
    for (let x = 20; x < 400; x += 76) piers += '<rect x="' + x + '" y="166" width="26" height="70" fill="#b7b2a6"/><rect x="' + x + '" y="166" width="26" height="6" fill="#8f8a7f"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fs)"/>' +
      '<rect x="0" y="118" width="400" height="14" fill="#3b7ea1"/><path class="fm-wave" d="M0 122q20-4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe7f4" stroke-width="1.5" fill="none" opacity=".7"/>' +
      /* canopy */
      '<rect x="0" y="22" width="400" height="10" fill="#4a5a4f"/>' + [60, 160, 260, 360].map(x => '<rect x="' + (x - 3) + '" y="32" width="6" height="118" fill="#4a5a4f"/>').join("") +
      [60, 160, 260, 360].map((x, i) => '<rect class="fm-flk" style="animation-delay:-' + i * 0.6 + 's" x="' + (x - 22) + '" y="32" width="44" height="4" rx="2" fill="#fff8d6"/>').join("") +
      /* sign */
      '<rect x="70" y="44" width="260" height="30" rx="3" fill="#111"/><rect x="70" y="44" width="260" height="3" fill="#fff"/>' +
      '<text x="86" y="65" ' + font + ' font-size="15" fill="#fff">Beach 60 St</text>' + bullet(304, 59, "A", BLUE) +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="10" y="86" width="300" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="94" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 130, "A", BLUE) +
        '<rect x="10" y="122" width="280" height="4" fill="' + BLUE + '"/><circle cx="22" cy="134" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge + viaduct deck */
      '<rect x="0" y="144" width="400" height="8" fill="#eab308"/><rect x="0" y="152" width="400" height="16" fill="#a8a397"/>' +
      piers +
      '<rect x="0" y="236" width="400" height="24" fill="#4b4d52"/><rect x="0" y="236" width="400" height="3" fill="#7d8086"/>' +
      '<g class="fm-car"><rect x="0" y="242" width="44" height="12" rx="4" fill="' + ROSE + '"/><circle cx="10" cy="254" r="4" fill="#111"/><circle cx="34" cy="254" r="4" fill="#111"/></g>' +
      txt("ROCKAWAY FWY", 200, 206, 11, CREAM, 'letter-spacing="3"'),
      sky("fs", "#f7b27a", "#fbe3c4"));
  }

  /* 2. Rockaway Community Park at nightfall: Jamaica Bay behind, four Jeeps rolling in like a convoy, the bass booming, the crowd */
  function park() {
    const crowd = [];
    for (let x = 220; x < 400; x += 22) crowd.push(person(x, 230, "#0d0d12", x % 44 ? "fm-bob" : "fm-bob fm-bob2"));
    return svg(
      '<rect width="400" height="260" fill="url(#fp)"/>' + stars(18) +
      '<circle cx="330" cy="40" r="14" fill="#fff4cf" opacity=".9"/>' +
      /* bay + far shore lights */
      '<rect x="0" y="112" width="400" height="34" fill="#1f3a5c"/>' +
      [30, 80, 140, 210, 260, 330, 370].map((x, i) => '<circle class="fm-bl fm-bl' + (i % 3 + 1) + '" cx="' + x + '" cy="108" r="1.8" fill="#ffe7a1"/>').join("") +
      '<path class="fm-wave" d="M0 124q20-3 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#5f86b0" stroke-width="1.5" fill="none" opacity=".6"/>' +
      /* park: grass, trees, lamps, the sign */
      '<rect x="0" y="146" width="400" height="114" fill="#24452c"/>' +
      [16, 70, 120].map(x => '<rect x="' + (x + 8) + '" y="120" width="5" height="30" fill="#3d2a1a"/><circle cx="' + (x + 10) + '" cy="118" r="16" fill="#1d3a24"/>').join("") +
      '<rect x="168" y="128" width="4" height="40" fill="#555"/><circle class="fm-flk" cx="170" cy="126" r="5" fill="#fff6c2"/>' +
      '<rect x="200" y="132" width="176" height="24" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("ROCKAWAY COMMUNITY PARK", 288, 148, 9.5, "#fff") +
      '<rect x="0" y="198" width="400" height="22" fill="#3a3c40"/>' +
      /* the convoy */
      '<g class="fm-jeep">' + jeep(0, "#1c1c22") + jeep(70, ROSE) + jeep(140, "#e8e3d8") + jeep(210, "#2e4b8f") + '</g>' +
      /* bass rings from the speaker */
      '<rect x="40" y="226" width="34" height="30" rx="3" fill="#111" stroke="#444"/><circle cx="57" cy="241" r="9" fill="#2b2b2b"/><circle cx="57" cy="241" r="4" fill="#555"/>' +
      '<circle class="fm-bass" cx="57" cy="241" r="14" fill="none" stroke="' + GOLD + '" stroke-width="2"/><circle class="fm-bass fm-bass2" cx="57" cy="241" r="14" fill="none" stroke="' + ROSE + '" stroke-width="2"/>' +
      crowd.join("") + '<rect x="0" y="232" width="400" height="28" fill="#1a2f1f" opacity=".0"/>',
      sky("fp", "#0b0f2a", "#4a2f5c"));
  }

  /* 3. Arverne by the Sea at sunset: the row houses behind the dunes, dune grass, the surf rolling in, a boombox on the blanket, gulls */
  function arverne() {
    const house = (x, col, roof) => '<rect x="' + x + '" y="96" width="44" height="50" fill="' + col + '"/><path d="M' + (x - 4) + ' 98l26 -22l26 22z" fill="' + roof + '"/>' +
      '<rect x="' + (x + 8) + '" y="106" width="10" height="12" fill="#ffe6a8"/><rect x="' + (x + 26) + '" y="106" width="10" height="12" fill="#ffe6a8"/><rect x="' + (x + 17) + '" y="126" width="10" height="20" fill="#5a4636"/>';
    let grass = "";
    for (let x = 6; x < 400; x += 14) grass += '<path d="M' + x + ' 160q2-12 -3-20M' + (x + 4) + ' 160q1-14 5-22" stroke="#7a8a3a" stroke-width="1.6" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fa)"/>' +
      '<circle cx="300" cy="78" r="26" fill="#ffd27a"/><circle cx="300" cy="78" r="40" fill="#ffd27a" opacity=".25"/>' +
      house(20, "#e9d3b4", "#7a4a3a") + house(76, "#bcd4e0", "#4a5a6a") + house(132, "#f0c9c0", "#7a4a3a") + house(188, "#d9e2c4", "#4a5a6a") +
      txt("ARVERNE BY THE SEA", 120, 66, 11, "#3a2230", 'letter-spacing="2"') +
      /* dunes */
      '<path d="M0 160q60-26 130-8t130-6t140 2v20h-400z" fill="#e7cf9f"/>' + grass +
      /* the beach + ocean (the ocean is in front, south) */
      '<rect x="0" y="168" width="400" height="40" fill="#efd9a8"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#2f7ea8"/>' +
      '<g class="fm-wave"><path d="M-20 208q20-8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#fff" stroke-width="3" fill="none"/></g>' +
      '<g class="fm-wave fm-wave2"><path d="M-20 226q20-6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#cdeef8" stroke-width="2" fill="none" opacity=".8"/></g>' +
      /* blanket + boombox + notes */
      '<path d="M236 196l70 -6l12 14l-72 6z" fill="' + ROSE + '"/><path d="M246 198l60 -5" stroke="#fff" stroke-width="2" opacity=".6"/>' +
      '<rect x="262" y="172" width="44" height="22" rx="4" fill="#222" stroke="#888"/><circle cx="274" cy="184" r="7" fill="#444"/><circle cx="294" cy="184" r="7" fill="#444"/><rect x="278" y="168" width="12" height="4" fill="#888"/><path d="M266 170q18-12 36 0" stroke="#888" stroke-width="2" fill="none"/>' +
      '<text class="fm-note" x="276" y="166" font-size="14" fill="' + GOLD + '">&#9834;</text><text class="fm-note fm-note2" x="292" y="164" font-size="12" fill="#fff">&#9835;</text><text class="fm-note fm-note3" x="300" y="168" font-size="12" fill="' + ROSE + '">&#9834;</text>' +
      /* gulls */
      '<g class="fm-gull"><path d="M0 40q6-6 12 0q6-6 12 0" stroke="#3a2a2a" stroke-width="2" fill="none"/><path d="M40 54q5-5 10 0q5-5 10 0" stroke="#3a2a2a" stroke-width="2" fill="none"/></g>',
      sky("fa", "#f48fa0", "#ffd9a8"));
  }

  /* 4. Gordy Groove Recording, Brooklyn: the control room, the console meters jumping, reels spinning, the booth window with the mic, a gold record on the wall */
  function studio() {
    let meters = "", faders = "";
    for (let i = 0; i < 12; i++) meters += '<rect class="fm-mt fm-mt' + (i % 3 + 1) + '" x="' + (70 + i * 22) + '" y="176" width="10" height="24" fill="' + (i % 4 ? "#6cbe45" : GOLD) + '"/>';
    for (let i = 0; i < 16; i++) faders += '<rect x="' + (64 + i * 17) + '" y="214" width="3" height="22" fill="#111"/><rect x="' + (60 + i * 17) + '" y="' + (218 + (i * 7) % 12) + '" width="11" height="6" rx="1" fill="' + (i % 5 ? "#ddd" : ROSE) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a1d1a"/>' +
      /* acoustic wall */
      (() => { let p = ""; for (let y = 10; y < 160; y += 20) for (let x = 0; x < 400; x += 20) p += '<rect x="' + x + '" y="' + y + '" width="19" height="19" fill="' + ((x + y) % 40 ? "#3a2925" : "#33241f") + '"/>'; return p; })() +
      /* booth window */
      '<rect x="110" y="34" width="180" height="96" rx="4" fill="#1d3240" stroke="#111" stroke-width="6"/>' +
      '<rect x="110" y="34" width="180" height="96" fill="url(#fg)" opacity=".5"/>' +
      '<path d="M200 128v-46" stroke="#999" stroke-width="3"/><rect x="190" y="58" width="20" height="28" rx="10" fill="#c9ced6" stroke="#666"/><circle cx="200" cy="72" r="16" fill="none" stroke="#222" stroke-width="3"/>' +
      '<circle class="fm-bl" cx="276" cy="46" r="5" fill="#e63946"/>' + txt("ON AIR", 250, 50, 9, "#ff8a8a") +
      /* gold record */
      '<rect x="20" y="40" width="64" height="76" fill="#120c0a" stroke="' + GOLD + '" stroke-width="3"/><circle cx="52" cy="72" r="22" fill="' + GOLD + '"/><circle cx="52" cy="72" r="7" fill="#7a5a10"/><rect x="28" y="100" width="48" height="8" fill="#c9a24a"/>' +
      /* reel to reel */
      '<rect x="312" y="40" width="72" height="90" rx="4" fill="#3a3a40" stroke="#777"/>' +
      '<g class="fm-spin"><circle cx="333" cy="64" r="14" fill="#1a1a1a" stroke="#aaa"/><path d="M333 52v24M321 64h24" stroke="#aaa" stroke-width="2"/></g>' +
      '<g class="fm-spin"><circle cx="363" cy="64" r="14" fill="#1a1a1a" stroke="#aaa"/><path d="M363 52v24M351 64h24" stroke="#aaa" stroke-width="2"/></g>' +
      '<rect x="322" y="96" width="52" height="8" fill="#222"/><circle cx="330" cy="116" r="4" fill="' + ROSE + '"/><circle cx="346" cy="116" r="4" fill="#888"/>' +
      /* sign */
      '<rect x="96" y="138" width="208" height="22" rx="3" fill="#0e0a09" stroke="' + GOLD + '" stroke-width="1.5"/>' + txt("GORDY GROOVE · BROOKLYN", 200, 153, 10, GOLD, 'letter-spacing="1"') +
      /* console */
      '<path d="M30 260l20 -94h300l20 94z" fill="#4a4038"/><rect x="50" y="166" width="300" height="42" fill="#1f1b18"/>' + meters + faders,
      sky("fg", "#7ad3e8", "#1d3240"));
  }

  /* 5. Rockaway Beach Blvd & Beach 60 St: green signs, the wall tagged FATHER MC, the A on the viaduct behind */
  function corner() {
    let piers = "";
    for (let x = 10; x < 400; x += 70) piers += '<rect x="' + x + '" y="84" width="20" height="50" fill="#9a958a"/>';
    let win = "";
    for (let x = 14; x < 250; x += 30) win += '<rect x="' + x + '" y="56" width="18" height="12" rx="2" fill="#ffe9a8" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fc)"/>' + stars(14) +
      /* viaduct + the A sliding by */
      '<rect x="0" y="74" width="400" height="12" fill="#b3aea2"/>' +
      '<g class="fm-car" style="animation-duration:6s"><rect x="0" y="48" width="260" height="26" rx="4" fill="#c9ced6"/>' + win + bullet(244, 61, "A", BLUE) + '</g>' +
      piers +
      /* the wall */
      '<rect x="0" y="130" width="400" height="96" fill="#5a3f4a"/>' +
      (() => { let b = ""; for (let y = 142; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#4d3540" stroke-width="1"/>'; return b; })() +
      tag("FATHER MC", 16, 194, 46, ROSE, -5) + tag("UPTOWN", 30, 220, 18, GOLD, -3) + tag("TREAT EM RIGHT", 160, 220, 16, CREAM, -4) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="fm-car fm-car2"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + SKY + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* pole + green signs */
      '<rect x="352" y="96" width="5" height="132" fill="#3d4b3f"/>' +
      '<rect x="262" y="98" width="134" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Rockaway Beach Blvd", 329, 114, 11, "#fff") +
      '<rect x="296" y="124" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Beach 60 St", 346, 140, 12, "#fff") +
      '<circle class="fm-flk" cx="354" cy="92" r="4" fill="#fff6c2"/>',
      sky("fc", "#0c0b22", "#3d2448"));
  }

  window.SCENES = { beach60: beach60, park: park, arverne: arverne, studio: studio, corner: corner };
})();
