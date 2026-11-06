/* Loon game (NYC map, Manhattan: Harlem). Five small animated SVGs, 400 x 260. CSS classes are prefixed "ln-".
   1. Harlem–125 St on Metro-North: up on the Park Av viaduct, the train pulling in under the station canopy.
   2. The studio, 2003: the console where the "Loon" album was cut, gold plaques on the wall, the vocal booth with
      "IT'S YOUR TURN NOW KID" on the glass, meters jumping.
   3. West Harlem Piers on the Hudson at 125 St: the white yacht cruising by at sunset ("bottles on ice tonight"),
      the Palisades across the river, the George Washington Bridge lit up to the north.
   4. The rock show: a summer stadium stage with lights sweeping and the crowd's hands up
      ("make a hip hop show look like a rock show").
   5. Park Av and E 125 St: green signs, LOON on the wall, the Metro-North viaduct with a train crossing behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ln-flick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.ln-flk{animation:ln-flick 2.4s infinite}.ln-flk2{animation-delay:1.1s}' +
    '@keyframes ln-meter{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}80%{transform:scaleY(.85)}}.ln-mt{transform-box:fill-box;transform-origin:50% 100%;animation:ln-meter .9s ease-in-out infinite}.ln-mt2{animation-delay:-.3s}.ln-mt3{animation-delay:-.6s}' +
    '@keyframes ln-blink{0%,49%{opacity:1}50%,100%{opacity:.2}}.ln-blink{animation:ln-blink 1.2s steps(1) infinite}' +
    '@keyframes ln-cruise{from{transform:translateX(-200px)}to{transform:translateX(440px)}}.ln-cruise{animation:ln-cruise 16s linear infinite;animation-delay:-8s}' +
    '@keyframes ln-wave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.ln-wave{animation:ln-wave 4s linear infinite}' +
    '@keyframes ln-sweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.ln-beam{transform-box:fill-box;transform-origin:50% 0%;animation:ln-sweep 3s ease-in-out infinite}.ln-beam2{animation-delay:-1.5s}' +
    '@keyframes ln-hands{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.ln-hand{animation:ln-hands .9s ease-in-out infinite}.ln-hand2{animation-delay:-.45s}' +
    '@keyframes ln-pass{from{transform:translateX(-330px)}to{transform:translateX(430px)}}.ln-pass{animation:ln-pass 9s linear infinite;animation-delay:-4s}' +
    '@keyframes ln-glow{0%,100%{opacity:.55}50%{opacity:1}}.ln-glow{animation:ln-glow 2.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const CHAMP = "#f0d58a", RED = "#e0263a", ICE = "#9fd6ff", CREAM = "#f7f3ea", SIGN = "#0f6b3a", MN = "#0039a6";
  const mnCar = (x, y, w) => {
    let win = "";
    for (let wx = x + 14; wx < x + w - 20; wx += 32) win += '<rect x="' + wx + '" y="' + (y + 10) + '" width="20" height="14" rx="2" fill="#24344a"/>';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="50" rx="6" fill="#d7dbe0" stroke="#7a8088" stroke-width="2"/>' + win +
      '<rect x="' + x + '" y="' + (y + 30) + '" width="' + w + '" height="5" fill="' + MN + '"/><rect x="' + x + '" y="' + (y + 36) + '" width="' + w + '" height="2" fill="' + RED + '"/>';
  };

  /* 1. Harlem–125 St, Metro-North, up on the Park Av viaduct */
  function station() {
    let blds = "";
    [[0, 70, 60, "#7d5a48"], [66, 60, 40, "#b49a7a"], [130, 90, 22, "#6f6a78"], [224, 70, 50, "#a8735a"], [298, 102, 34, "#8d7c6a"]].forEach(([x, w, y, col], i) => {
      blds += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (120 - y) + '" fill="' + col + '"/>';
      for (let yy = y + 8; yy < 110; yy += 18) for (let xx = x + 8; xx < x + w - 10; xx += 18) blds += '<rect x="' + xx + '" y="' + yy + '" width="9" height="11" fill="' + ((xx + yy + i) % 3 ? "#9fc6e0" : "#ffd98a") + '"/>';
    });
    let ribs = "";
    for (let x = 10; x < 400; x += 40) ribs += '<path d="M' + x + ' 92v28" stroke="#3b4a56" stroke-width="4"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ln1)"/>' + blds +
      /* the canopy over the platform */
      '<path d="M0 84h400v10H0z" fill="#46596a"/><path d="M0 84l20-14h360l20 14z" fill="#5d7487"/>' + ribs +
      /* the black station sign */
      '<rect x="112" y="100" width="176" height="28" rx="2" fill="#111"/><text x="210" y="119" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">Harlem–125 St</text>' +
      '<circle cx="128" cy="114" r="10" fill="' + MN + '"/><text x="128" y="117.5" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">MN</text>' +
      /* platform edge, the train, the viaduct below */
      '<rect x="0" y="182" width="400" height="10" fill="#cfcac0"/><rect x="0" y="182" width="400" height="3" fill="#f2d24a"/>' +
      '<g class="anim-train">' + mnCar(10, 132, 320) + '<rect x="296" y="138" width="30" height="12" rx="2" fill="#111"/><text x="311" y="147" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb300">GCT</text><circle cx="326" cy="176" r="3" fill="#fff6c2"/></g>' +
      '<rect x="0" y="192" width="400" height="20" fill="#6b5a4a"/>' +
      (() => { let a = ""; for (let x = 0; x < 400; x += 80) a += '<path d="M' + (x + 8) + ' 260v-30q32-26 64 0v30z" fill="#1c1a24"/><rect x="' + x + '" y="212" width="8" height="48" fill="#7a6a58"/>'; return a; })() +
      '<rect x="0" y="212" width="400" height="10" fill="#7a6a58"/>' +
      '<text x="200" y="206" text-anchor="middle" ' + font + ' font-size="8" fill="' + CREAM + '" letter-spacing="3">PARK AV · E 125 ST</text>',
      sky("ln1", "#2a3f6a", "#e9a774"));
  }

  /* 2. The studio, 2003 */
  function studio() {
    let knobs = "", meters = "";
    for (let x = 40; x < 360; x += 14) knobs += '<circle cx="' + x + '" cy="206" r="3" fill="#c9cdd4"/><rect x="' + (x - 2) + '" y="214" width="4" height="16" rx="1" fill="#555"/><rect x="' + (x - 3) + '" y="' + (218 + (x % 3) * 3) + '" width="6" height="4" fill="#ddd"/>';
    [150, 164, 178, 192, 206, 220, 234, 248].forEach((x, i) => meters += '<rect x="' + x + '" y="176" width="9" height="18" fill="' + (i > 5 ? RED : "#4fd16a") + '" class="ln-mt' + (i % 3 ? " ln-mt" + ((i % 3) + 1) : "") + '"/>');
    const plaque = (x, y, title) => '<rect x="' + x + '" y="' + y + '" width="66" height="78" fill="#2a1d16" stroke="' + CHAMP + '" stroke-width="3"/><circle cx="' + (x + 33) + '" cy="' + (y + 32) + '" r="22" fill="' + CHAMP + '" class="ln-glow"/>' +
      '<circle cx="' + (x + 33) + '" cy="' + (y + 32) + '" r="7" fill="' + RED + '"/><text x="' + (x + 33) + '" y="' + (y + 68) + '" text-anchor="middle" ' + font + ' font-size="5.4" fill="' + CHAMP + '">' + title + '</text>';
    return svg(
      '<rect width="400" height="260" fill="#241a26"/><rect x="0" y="0" width="400" height="150" fill="#2f2234"/>' +
      plaque(14, 18, "HOW YOU WANT THAT") + plaque(88, 18, "DOWN FOR ME") +
      /* the booth window with the mic */
      '<rect x="176" y="14" width="210" height="122" fill="#121a2a" stroke="#0a0a0a" stroke-width="6"/>' +
      '<rect x="182" y="20" width="198" height="110" fill="#1d2a44" opacity=".9"/>' +
      '<path d="M282 34v54" stroke="#888" stroke-width="3"/><rect x="274" y="40" width="16" height="26" rx="8" fill="#c9cdd4"/><circle cx="282" cy="76" r="12" fill="none" stroke="#666" stroke-width="2"/>' +
      '<path d="M262 128v-30l20-6 20 6v30z" fill="#555"/>' +
      '<text x="282" y="118" text-anchor="middle" ' + font + ' font-size="10" fill="' + ICE + '" letter-spacing="1" opacity=".8">IT\'S YOUR TURN NOW KID</text>' +
      '<rect x="190" y="26" width="34" height="12" rx="2" fill="' + RED + '" class="ln-blink"/><text x="207" y="35" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">REC</text>' +
      /* console */
      '<rect x="0" y="150" width="400" height="110" fill="#1a141c"/><path d="M14 196h372l14 64H0z" fill="#3a3540"/><rect x="140" y="166" width="124" height="30" fill="#111" stroke="#444"/>' + meters + knobs +
      '<text x="56" y="184" ' + font + ' font-size="9" fill="' + CHAMP + '" letter-spacing="2">LOON · 2003</text>' +
      '<rect x="300" y="160" width="66" height="30" rx="3" fill="#111"/><circle cx="318" cy="175" r="10" fill="#333" stroke="#777"/><circle cx="348" cy="175" r="10" fill="#333" stroke="#777"/>',
      "");
  }

  /* 3. West Harlem Piers on the Hudson */
  function piers() {
    let waves = "";
    for (let y = 168; y < 230; y += 13) { let d = "M0 " + y; for (let x = 0; x <= 460; x += 20) d += " q5 -4 10 0 t10 0"; waves += '<path class="ln-wave" d="' + d + '" stroke="#ffd2a8" stroke-width="1.2" fill="none" opacity=".4"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#ln3)"/>' +
      '<circle cx="110" cy="122" r="30" fill="#ffcf7a" opacity=".9"/>' +
      /* the Palisades across the river */
      '<path d="M0 150v-26l30-8 40 4 60-10 50 6 60-8 70 4 50-6 40 4v40z" fill="#3c4a3a"/><path d="M0 150v-10h400v10z" fill="#2e3a2e"/>' +
      /* the George Washington Bridge far upriver */
      '<path d="M300 132v-34M352 132v-34" stroke="#8a95a8" stroke-width="3"/><path d="M270 120q30-28 30-22q26 22 52 0q30-6 48 22" stroke="#8a95a8" stroke-width="1.5" fill="none"/><path d="M260 124h140" stroke="#8a95a8" stroke-width="2.5"/>' +
      [272, 290, 310, 330, 350, 370, 390].map((x, i) => '<circle cx="' + x + '" cy="123" r="1.4" fill="#fff4b0" class="ln-flk' + (i % 2 ? " ln-flk2" : "") + '"/>').join("") +
      '<rect x="0" y="150" width="400" height="90" fill="#3a5f86"/>' + waves +
      /* the yacht cruising, bottles on ice on the deck */
      '<g class="ln-cruise"><path d="M0 176h150l-18 22H10z" fill="#f4f6f8" stroke="#8a95a3" stroke-width="1.2"/><rect x="28" y="158" width="80" height="18" rx="4" fill="#e9edf2"/><rect x="34" y="163" width="68" height="6" fill="#1e2a3a"/>' +
        '<rect x="50" y="146" width="40" height="12" rx="3" fill="#e9edf2"/><path d="M6 186h136" stroke="' + CHAMP + '" stroke-width="2"/>' +
        '<path d="M116 168h14l-2 8h-10z" fill="#c9cdd4"/><rect x="119" y="160" width="3" height="9" fill="#2f6b3a"/><rect x="124" y="159" width="3" height="10" fill="' + CHAMP + '"/></g>' +
      /* the pier deck with its curved steel shade frame */
      '<rect x="0" y="232" width="400" height="28" fill="#6b5a4a"/><rect x="0" y="228" width="400" height="4" fill="#8a7a66"/>' +
      '<path d="M220 228v-40q40-30 90-20q40 8 60 20v40" stroke="#9aa3ad" stroke-width="4" fill="none"/><path d="M230 192q40-24 80-16q30 6 56 16" stroke="#c9cdd4" stroke-width="2" fill="none"/>' +
      '<path d="M20 228v-24M40 228v-24" stroke="#444" stroke-width="2"/><path d="M20 204h20" stroke="#444" stroke-width="2"/>' +
      '<text x="30" y="250" ' + font + ' font-size="8.5" fill="' + CREAM + '" letter-spacing="2">HUDSON RIVER · W 125 ST</text>',
      sky("ln3", "#5a5aa0", "#ff9a6a"));
  }

  /* 4. The rock show */
  function rockshow() {
    let crowd = "";
    for (let x = 6; x < 400; x += 18) {
      const y = 228 + (x % 3) * 4;
      crowd += '<circle cx="' + x + '" cy="' + y + '" r="7" fill="#0c0a10"/><rect x="' + (x - 8) + '" y="' + (y + 6) + '" width="16" height="30" rx="6" fill="#0c0a10"/>';
      if (x % 36 === 6) crowd += '<g class="ln-hand' + (x % 72 === 6 ? "" : " ln-hand2") + '"><path d="M' + (x + 4) + ' ' + (y + 2) + 'l6-22" stroke="#0c0a10" stroke-width="4" stroke-linecap="round"/><circle cx="' + (x + 10) + '" cy="' + (y - 21) + '" r="3.5" fill="#0c0a10"/></g>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#ln4)"/>' + stars(18) +
      /* light rig and beams */
      '<rect x="40" y="20" width="320" height="8" fill="#333"/>' +
      [70, 130, 200, 270, 330].map((x, i) => '<path class="ln-beam' + (i % 2 ? " ln-beam2" : "") + '" d="M' + (x - 4) + ' 28h8l40 160h-88z" fill="' + [ICE, CHAMP, RED, CHAMP, ICE][i] + '" opacity=".22"/><rect x="' + (x - 6) + '" y="26" width="12" height="8" rx="2" fill="#ddd"/>').join("") +
      /* the stage */
      '<path d="M30 190h340l20 18H10z" fill="#1b1b22"/><rect x="60" y="120" width="280" height="70" fill="#141018" stroke="#333"/>' +
      '<text x="200" y="164" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="28" fill="' + CHAMP + '" class="ln-glow" letter-spacing="1">THE ROCK SHOW</text>' +
      '<rect x="44" y="100" width="22" height="90" fill="#222"/><rect x="334" y="100" width="22" height="90" fill="#222"/>' +
      [112, 130, 148, 166].map(y => '<circle cx="55" cy="' + y + '" r="6" fill="#111" stroke="#555"/><circle cx="345" cy="' + y + '" r="6" fill="#111" stroke="#555"/>').join("") +
      '<path d="M200 190v-26" stroke="#888" stroke-width="2"/><circle cx="200" cy="162" r="3" fill="#ccc"/>' +
      '<path d="M80 190l-6-16h8zM320 190l-6-16h8z" fill="#ff8a3a" class="ln-flk"/>' + crowd,
      sky("ln4", "#0a0820", "#3a1840"));
  }

  /* 5. Park Av and E 125 St */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ln5)"/>' + stars(14) +
      /* the viaduct with a train crossing */
      '<rect x="0" y="96" width="400" height="14" fill="#5a4a3e"/><rect x="0" y="92" width="400" height="5" fill="#3e3630"/>' +
      (() => { let a = ""; for (let x = 0; x < 400; x += 70) a += '<rect x="' + x + '" y="110" width="10" height="40" fill="#5a4a3e"/>'; return a; })() +
      '<g class="ln-pass">' + mnCar(0, 52, 150).replace(/height="50"/, 'height="40"') + mnCar(154, 52, 150).replace(/height="50"/, 'height="40"') + '</g>' +
      /* the wall */
      '<rect x="0" y="150" width="300" height="80" fill="#4e3a3e"/>' +
      (() => { let b = ""; for (let y = 156; y < 230; y += 8) b += '<path d="M0 ' + y + 'h300" stroke="#3e2d31" stroke-width="1"/>'; return b; })() +
      tag("LOON", 20, 214, 46, CHAMP, -5) + tag("HARLEM WORLD", 150, 176, 16, ICE, -5) + tag("IT'S YOUR TURN", 140, 210, 15, CREAM, -3) + tag("WIZARD", 160, 228, 14, RED, -2) +
      '<rect x="0" y="230" width="400" height="30" fill="#55575c"/><rect x="0" y="230" width="400" height="4" fill="#8a8c90"/>' +
      '<rect x="356" y="96" width="5" height="136" fill="#3d4b3f"/>' +
      '<rect x="306" y="120" width="94" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="353" y="136" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Park Av</text>' +
      '<rect x="306" y="146" width="94" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="353" y="162" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">E 125 St</text>' +
      '<circle class="ln-flk" cx="358" cy="116" r="4" fill="#fff6c2"/>',
      sky("ln5", "#0b0d1c", "#40304e"));
  }

  window.SCENES = { station: station, studio: studio, piers: piers, rockshow: rockshow, corner: corner };
})();
