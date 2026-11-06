/* Chi-Ali game (NYC map, the Bronx: Co-op City, where he grew up). The 5 pulling into Eastchester-Dyre Av in its open cut,
   the Jefferson Market Library clock tower ("Downtown the Village" from Age Ain't Nothin' But a #), the Funky Lemonade stand on the Co-op City Greenway,
   the Kennedy Center's Grand Foyer and its Millennium Stage (he played there in 2026), and Co-op City Blvd & Dreiser Loop with the townhouses behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes caflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.35}55%{opacity:.9}}.ca-flk{animation:caflick 2.6s infinite}' +
    '@keyframes cabob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.ca-bob{animation:cabob .6s ease-in-out infinite}.ca-bob2{animation-delay:.3s}' +
    '@keyframes caspin{to{transform:rotate(360deg)}}.ca-hand{transform-box:view-box;transform-origin:200px 62px;animation:caspin 6s linear infinite}.ca-hand2{animation-duration:60s}' +
    '@keyframes casway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.ca-sway{transform-box:fill-box;transform-origin:50% 100%;animation:casway 2.6s ease-in-out infinite}.ca-sway2{animation-delay:-1.3s}' +
    '@keyframes caice{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.ca-ice{animation:caice 1.2s ease-in-out infinite}.ca-ice2{animation-delay:.4s}' +
    '@keyframes caspark{0%,100%{opacity:0;transform:scale(.4)}50%{opacity:1;transform:scale(1)}}.ca-spk{transform-box:fill-box;transform-origin:50% 50%;animation:caspark 1.6s ease-in-out infinite}.ca-spk2{animation-delay:.5s}.ca-spk3{animation-delay:1s}' +
    '@keyframes caray{0%,100%{opacity:.35}50%{opacity:.8}}.ca-ray{animation:caray 2.2s ease-in-out infinite}' +
    '@keyframes camist{0%{opacity:.8;transform:translate(0,0) scale(.5)}100%{opacity:0;transform:translate(-26px,-10px) scale(1.5)}}.ca-mist{transform-box:fill-box;transform-origin:50% 50%;animation:camist 1.3s ease-out infinite}.ca-mist2{animation-delay:.45s}.ca-mist3{animation-delay:.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const tree = (x, y, s, cls) => '<g class="' + (cls || "") + '"><rect x="' + (x - 3 * s) + '" y="' + (y - 4) + '" width="' + 6 * s + '" height="' + 34 * s + '" fill="#5a3d2b"/><circle cx="' + x + '" cy="' + (y - 14 * s) + '" r="' + 20 * s + '" fill="#3f8f4a"/><circle cx="' + (x - 14 * s) + '" cy="' + (y - 4 * s) + '" r="' + 13 * s + '" fill="#4fa35a"/><circle cx="' + (x + 14 * s) + '" cy="' + (y - 4 * s) + '" r="' + 13 * s + '" fill="#367d40"/></g>';
  const LEMON = "#ffe14d", ORANGE = "#ff7a1a", GRN = "#00933c";

  /* 1. Eastchester-Dyre Av: the 5's last stop, tracks down in an open cut with concrete walls, trees on top, the platform canopy and the black sign */
  function dyre() {
    let win = "";
    for (let x = 34; x < 290; x += 34) win += '<rect x="' + x + '" y="148" width="22" height="18" rx="2" fill="#d6e6f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cs1)"/>' +
      tree(30, 50, 1, "ca-sway") + tree(110, 44, 1.1, "ca-sway ca-sway2") + tree(290, 48, 1, "ca-sway") + tree(370, 42, 1.1, "ca-sway ca-sway2") +
      /* cut walls */
      '<rect x="0" y="66" width="400" height="74" fill="#b9b3a6"/>' +
      [0, 50, 100, 150, 200, 250, 300, 350].map(x => '<rect x="' + x + '" y="66" width="2" height="74" fill="#9e9789"/>').join("") +
      '<rect x="0" y="62" width="400" height="6" fill="#8d877a"/>' +
      /* canopy */
      '<rect x="0" y="96" width="400" height="8" fill="#5b2a2a"/>' +
      [40, 140, 240, 340].map(x => '<rect x="' + (x - 3) + '" y="104" width="6" height="82" fill="#5b2a2a"/>').join("") +
      '<rect x="60" y="108" width="280" height="26" rx="3" fill="#111"/><rect x="60" y="108" width="280" height="3" fill="#fff"/>' +
      '<text x="74" y="127" ' + font + ' font-size="13" fill="#fff">Eastchester-Dyre Av</text>' + bullet(318, 121, "5", GRN) +
      '<g class="anim-train">' +
        '<rect x="10" y="140" width="300" height="46" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="146" width="16" height="22" rx="2" fill="#d6e6f5"/>' + bullet(298, 176, "5", GRN) +
        '<rect x="10" y="170" width="276" height="3" fill="' + GRN + '"/><circle cx="22" cy="180" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="186" width="400" height="8" fill="#eab308"/><rect x="0" y="194" width="400" height="66" fill="#6a665f"/>' +
      person(330, 210, "#1b1b1b", "ca-bob") + person(354, 214, "#2a2a2a") +
      txt("LAST STOP ON THE 5", 150, 236, 11, "#f1ead8", 'letter-spacing="3"'),
      sky("cs1", "#7ec8f0", "#fbe7b5"));
  }

  /* 2. Jefferson Market Library, Greenwich Village: red brick Victorian Gothic with pale stone bands, pointed windows, the clock tower with its slate cap */
  function village() {
    const band = y => '<rect x="96" y="' + y + '" width="210" height="4" fill="#e9dcc0"/>';
    let gw = "";
    [110, 142, 238, 270].forEach(x => { gw += '<path d="M' + x + ' 196v-34l10-14l10 14v34z" fill="#1d2a3a" stroke="#e9dcc0" stroke-width="2"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#cs2)"/>' +
      '<rect x="0" y="120" width="80" height="110" fill="#a8604a"/><rect x="320" y="110" width="80" height="120" fill="#8f5a48"/>' +
      [10, 34, 58, 330, 354, 378].map(x => '<rect x="' + x + '" y="136" width="12" height="16" fill="#2a2f3a"/>').join("") +
      /* main hall */
      '<rect x="96" y="120" width="210" height="110" fill="#a5442d"/>' + band(120) + band(150) + band(206) + gw +
      '<path d="M90 122l40-26h142l40 26z" fill="#4a5058"/>' +
      /* tower */
      '<rect x="176" y="40" width="48" height="190" fill="#a5442d"/>' + '<rect x="176" y="40" width="48" height="4" fill="#e9dcc0"/>' +
      '<path d="M170 42l30-34l30 34z" fill="#4a5058"/><rect x="198" y="0" width="4" height="10" fill="#4a5058"/>' +
      '<circle cx="200" cy="62" r="15" fill="#f6efdc" stroke="#e9dcc0" stroke-width="3"/>' +
      '<path class="ca-hand" d="M200 62v-11" stroke="#222" stroke-width="2" stroke-linecap="round"/><path class="ca-hand ca-hand2" d="M200 62h8" stroke="#222" stroke-width="2.5" stroke-linecap="round"/>' +
      '<path d="M190 120v-30l10-12l10 12v30z" fill="#1d2a3a" stroke="#e9dcc0" stroke-width="2"/>' +
      '<rect x="184" y="196" width="32" height="34" fill="#2b1a12"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#5d5a55"/><rect x="0" y="228" width="400" height="3" fill="#bdb6a6"/>' +
      person(60, 200, "#1b1b1b", "ca-bob") + person(340, 202, "#2a2a2a", "ca-bob ca-bob2") +
      txt("DOWNTOWN THE VILLAGE", 200, 252, 11, "#f1ead8", 'letter-spacing="3"'),
      sky("cs2", "#f6a36b", "#fde6b8"));
  }

  /* 3. The Funky Lemonade stand on the Co-op City Greenway: shade trees, park lamps, the stand, pitcher and cups, ice bobbing */
  function stand() {
    const cup = (x, i) => '<g class="ca-ice' + (i % 2 ? " ca-ice2" : "") + '"><path d="M' + (x - 7) + ' 160h14l-2 18h-10z" fill="' + LEMON + '" stroke="#c9a000" stroke-width="1"/><rect x="' + (x - 3) + '" y="162" width="5" height="5" fill="#fff" opacity=".8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cs3)"/>' +
      '<circle cx="340" cy="44" r="22" fill="#fff3b0"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect class="ca-ray" x="338" y="6" width="4" height="12" fill="#fff3b0" transform="rotate(' + i * 45 + ' 340 44)"/>').join("") +
      tree(40, 120, 1.4, "ca-sway") + tree(130, 110, 1.2, "ca-sway ca-sway2") + tree(280, 116, 1.3, "ca-sway") + tree(370, 112, 1.2, "ca-sway ca-sway2") +
      '<rect x="0" y="150" width="400" height="110" fill="#6fae5c"/>' +
      '<path d="M0 210q200-40 400 0v50H0z" fill="#d9cfb8"/>' +
      [70, 330].map(x => '<rect x="' + (x - 2) + '" y="128" width="4" height="70" fill="#2b2f36"/><circle cx="' + x + '" cy="126" r="7" fill="#fff6c2"/>').join("") +
      /* the stand */
      '<rect x="130" y="136" width="140" height="70" fill="#f6e3b0" stroke="#8a5a2b" stroke-width="3"/>' +
      [140, 160, 180, 200, 220, 240, 260].map(x => '<rect x="' + x + '" y="166" width="2" height="40" fill="#d9c08a"/>').join("") +
      '<rect x="124" y="156" width="152" height="10" fill="#8a5a2b"/>' +
      '<rect x="132" y="92" width="6" height="64" fill="#8a5a2b"/><rect x="262" y="92" width="6" height="64" fill="#8a5a2b"/>' +
      '<path d="M120 96h160l-10-24h-140z" fill="' + ORANGE + '"/><path d="M130 72h20l-4 24h-20zM170 72h20l-2 24h-20zM210 72h20l2 24h-20zM250 72h20l6 24h-20z" fill="#fff" opacity=".85"/>' +
      '<rect x="146" y="106" width="108" height="24" rx="3" fill="' + LEMON + '" stroke="#8a5a2b" stroke-width="2"/>' +
      '<text x="200" y="123" text-anchor="middle" textLength="96" lengthAdjust="spacingAndGlyphs" font-family="Permanent Marker, Sedgwick Ave Display, cursive" font-size="13" fill="#8a3a00">FUNKY LEMONADE</text>' +
      /* pitcher + cups on the counter */
      '<path d="M176 156v-26h22v26z" fill="' + LEMON + '" opacity=".9" stroke="#fff" stroke-width="2"/><path d="M198 136q10 2 0 14" stroke="#fff" stroke-width="3" fill="none"/>' +
      '<circle cx="186" cy="138" r="5" fill="#fff8c8" stroke="#c9a000"/>' +
      [220, 240].map((x, i) => '<g class="ca-ice' + (i ? " ca-ice2" : "") + '"><path d="M' + (x - 7) + ' 140h14l-2 16h-10z" fill="' + LEMON + '" stroke="#c9a000"/></g>').join("") +
      cup(60, 0) + cup(350, 1) +
      person(84, 190, "#1b1b1b", "ca-bob") + person(312, 192, "#2a2a2a", "ca-bob ca-bob2") +
      txt("CO-OP CITY GREENWAY", 200, 246, 11, "#3a2a14", 'letter-spacing="3"'),
      sky("cs3", "#6fc3f2", "#d8f1ff"));
  }

  /* 4. The Kennedy Center's Grand Foyer: long red carpet, tall gold-framed mirrors, crystal chandeliers, the Millennium Stage at the end */
  function kennedy() {
    const chand = (x, y) => '<g><rect x="' + (x - 1) + '" y="0" width="2" height="' + (y - 12) + '" fill="#c9a24a"/>' +
      '<path d="M' + (x - 20) + ' ' + y + 'q20 34 40 0z" fill="#f2f6ff" opacity=".9"/><path d="M' + (x - 14) + ' ' + (y - 10) + 'q14 24 28 0z" fill="#ffffff"/>' +
      '<circle class="ca-spk" cx="' + (x - 10) + '" cy="' + (y + 8) + '" r="2.5" fill="#fff"/><circle class="ca-spk ca-spk2" cx="' + (x + 8) + '" cy="' + (y + 12) + '" r="2.5" fill="#fff"/><circle class="ca-spk ca-spk3" cx="' + x + '" cy="' + (y + 18) + '" r="2" fill="#fff"/></g>';
    const mirror = x => '<rect x="' + x + '" y="40" width="34" height="120" fill="#c9a24a"/><rect x="' + (x + 4) + '" y="44" width="26" height="112" fill="#8fa3b8"/><rect x="' + (x + 8) + '" y="48" width="6" height="104" fill="#c9d6e3" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="#efe5d3"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#e2d4bb"/>' +
      [10, 70, 296, 356].map(mirror).join("") +
      [52, 112, 288, 348].map(x => '<rect x="' + (x - 4) + '" y="30" width="8" height="140" fill="#e2d4bb"/>').join("") +
      /* stage at the far end */
      '<rect x="140" y="70" width="120" height="70" fill="#2a1418"/>' +
      '<rect x="146" y="76" width="108" height="14" fill="#3a1d22"/><text x="200" y="87" text-anchor="middle" ' + font + ' font-size="8" letter-spacing="2" fill="' + LEMON + '">MILLENNIUM STAGE</text>' +
      '<rect x="199" y="104" width="2" height="30" fill="#ddd"/><ellipse cx="200" cy="102" rx="4" ry="5" fill="#222" stroke="#ddd"/>' +
      '<path d="M140 140h120l10 8H130z" fill="#5a2a1a"/>' +
      '<ellipse cx="200" cy="138" rx="40" ry="5" fill="#fff4c2" opacity=".35" class="ca-flk"/>' +
      /* red carpet in perspective */
      '<path d="M130 148h140l90 112H40z" fill="#b3122e"/><path d="M130 148h140l90 112H40z" fill="none" stroke="#7d0b1f" stroke-width="2"/>' +
      chand(120, 26) + chand(200, 22) + chand(280, 26) +
      person(170, 168, "#1b1b1b", "ca-bob") + person(236, 172, "#2a2a2a", "ca-bob ca-bob2") +
      txt("THE KENNEDY CENTER", 200, 250, 11, "#fbe7b5", 'letter-spacing="3"'));
  }

  /* 5. Co-op City Blvd & Dreiser Loop: green street signs, the Co-op City townhouses and Greenway trees behind, the wall with his name, spray in the air */
  function corner() {
    const sign = (x, y, t, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 13.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + t + '</text>';
    let homes = "";
    for (let i = 0; i < 6; i++) { const x = 10 + i * 64; homes += '<rect x="' + x + '" y="92" width="60" height="60" fill="' + (i % 2 ? "#9c5a3f" : "#b0694a") + '"/><path d="M' + (x - 2) + ' 94l32-16l32 16z" fill="#5d4a42"/><rect x="' + (x + 8) + '" y="104" width="14" height="14" fill="#2a2f3a"/><rect x="' + (x + 38) + '" y="104" width="14" height="14" fill="#ffd98a"/><rect x="' + (x + 24) + '" y="124" width="12" height="28" fill="#4a2a1a"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#cs5)"/>' +
      tree(40, 84, 1, "ca-sway") + tree(200, 80, 1.1, "ca-sway ca-sway2") + tree(350, 84, 1, "ca-sway") + homes +
      '<rect x="0" y="150" width="400" height="84" fill="#d6cfc2"/>' +
      [0, 80, 160, 240, 320].map(x => '<rect x="' + x + '" y="150" width="2" height="84" fill="#bdb5a6"/>').join("") +
      tag("CHI-ALI", 30, 210, 46, LEMON, -5) + tag("COOL IT COYOTE", 190, 226, 15, ORANGE, -3) +
      '<rect x="338" y="58" width="6" height="176" fill="#4a4f56"/>' +
      sign(250, 62, "CO-OP CITY BLVD", 140) + sign(276, 84, "DREISER LOOP", 110) +
      '<g transform="translate(300 176) rotate(-20)"><rect x="0" y="0" width="14" height="30" rx="3" fill="' + ORANGE + '"/><rect x="3" y="-6" width="8" height="7" fill="#ccc"/></g>' +
      '<circle class="ca-mist" cx="292" cy="164" r="6" fill="' + LEMON + '"/><circle class="ca-mist ca-mist2" cx="292" cy="164" r="5" fill="' + LEMON + '"/><circle class="ca-mist ca-mist3" cx="292" cy="164" r="4" fill="' + LEMON + '"/>' +
      '<rect x="0" y="234" width="400" height="26" fill="#3a3a40"/><rect x="0" y="234" width="400" height="3" fill="#cfcfcf"/>',
      sky("cs5", "#5aa7e0", "#ffd9a0"));
  }

  window.SCENES = { dyre: dyre, village: village, stand: stand, kennedy: kennedy, corner: corner };
})();
