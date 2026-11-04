/* Kansas City opening scenes for the Tech N9ne game. Each one is a small animated SVG, 400 x 260. Every 9 is drawn as a path with a straight stem. */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes tw{0%,100%{opacity:.25}50%{opacity:1}}.tw{animation:tw 2.6s ease-in-out infinite}.tw2{animation-delay:1.3s}' +
    '@keyframes jump{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.jp{transform-box:fill-box;animation:jump .8s ease-in-out infinite}.jp2{animation-delay:.27s}.jp3{animation-delay:.54s}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(40px,-90px);opacity:0}}.nt{animation:note 3.2s linear infinite}.nt2{animation-delay:-1.1s}.nt3{animation-delay:-2.2s}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}.mt5{animation-delay:.3s}' +
    '@keyframes steam{0%{transform:translate(0,0) scale(.6);opacity:.8}100%{transform:translate(8px,-34px) scale(1.6);opacity:0}}.stm{transform-box:fill-box;transform-origin:50% 100%;animation:steam 2.4s ease-out infinite}.stm2{animation-delay:-.8s}.stm3{animation-delay:-1.6s}' +
    '@keyframes boom{0%{transform:scale(.2);opacity:0}20%{opacity:1}100%{transform:scale(1.4);opacity:0}}.fw{transform-box:fill-box;transform-origin:50% 50%;animation:boom 2.6s ease-out infinite}.fw2{animation-delay:-1.3s}' +
    '@keyframes beam{0%,100%{opacity:.12}50%{opacity:.45}}.bmz{animation:beam 3s ease-in-out infinite}.bmz2{animation-delay:1.5s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  /* a 9 drawn by hand: round loop on top, straight stem straight down (never a hooked tail) */
  const nine = (x, y, h, fill) => {
    const r = h * 0.27, cx = x + r, cy = y - h + r, sx = x + 2 * r, w = h * 0.17;
    const d = 'M' + sx + ' ' + cy + 'A' + r + ' ' + r + ' 0 1 0 ' + sx + ' ' + (cy + 0.01) + 'M' + sx + ' ' + cy + 'V' + y;
    return '<path d="' + d + '" fill="none" stroke="#000" stroke-width="' + (w + 4) + '" stroke-linecap="round"/><path d="' + d + '" fill="none" stroke="' + fill + '" stroke-width="' + w + '" stroke-linecap="round"/>';
  };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="tw ' + (i % 2 ? "tw2" : "") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 80) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff"/>'; return s; };
  const RED = "#e31837", GOLD = "#ffb81c", TEAL = "#3ec1d3", CAR = "#1d5aa8";

  /* 1. KC Streetcar pulling into the Union Station stop on Main St, the big limestone station behind */
  function streetcar() {
    let arches = "";
    for (let i = 0; i < 3; i++) arches += '<path d="M' + (138 + i * 46) + ' 108v-30a17 17 0 0 1 34 0v30z" fill="#ffd98a" opacity=".55" class="flk ' + (i === 1 ? "flk2" : "") + '"/>';
    let win = "";
    for (let x = 40; x < 290; x += 34) win += '<rect x="' + x + '" y="134" width="24" height="20" rx="3" fill="#cfe9f7" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#k1)"/>' + stars(12) +
      /* Union Station: long limestone hall, three big arched windows, clock */
      '<rect x="60" y="66" width="280" height="56" fill="#cdbf9f"/><rect x="56" y="60" width="288" height="8" fill="#b8a984"/>' +
      '<rect x="120" y="50" width="160" height="12" fill="#b8a984"/>' + arches +
      '<circle cx="200" cy="44" r="7" fill="#fff4dc" stroke="#7a6a48" stroke-width="1.5"/><path d="M200 44v-4M200 44h3" stroke="#333" stroke-width="1"/>' +
      '<text x="200" y="118" text-anchor="middle" ' + F + ' font-weight="700" font-size="7" letter-spacing="2" fill="#5d5034">UNION STATION</text>' +
      /* overhead wire */
      '<path d="M0 100h400" stroke="#222" stroke-width="1.5"/>' +
      /* stop sign on its pole */
      '<rect x="330" y="96" width="5" height="74" fill="#4a5058"/>' +
      '<rect x="286" y="70" width="104" height="30" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="338" y="84" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">Union Station</text>' +
      '<text x="338" y="95" text-anchor="middle" ' + F + ' font-size="7" fill="' + TEAL + '">KC STREETCAR · MAIN ST</text>' +
      /* the streetcar */
      '<g class="anim-train">' +
        '<path d="M150 124l10-24M172 124l-12-24" stroke="#333" stroke-width="2"/>' +
        '<rect x="20" y="124" width="290" height="50" rx="10" fill="#f4f6f8" stroke="#7d848c" stroke-width="2"/>' +
        '<rect x="20" y="158" width="290" height="9" fill="' + CAR + '"/><rect x="20" y="155" width="290" height="3" fill="' + TEAL + '"/>' + win +
        '<path d="M296 124q18 4 22 26v24h-22z" fill="#e8ecef" stroke="#7d848c" stroke-width="2"/><path d="M300 130q12 4 14 18h-14z" fill="#1c2733"/>' +
        '<circle cx="312" cy="166" r="3.5" fill="#fff6c2"/>' +
        '<rect x="196" y="134" width="20" height="34" rx="2" fill="#d6dde3" stroke="#7d848c"/>' +
      '</g>' +
      /* street and rails */
      '<rect x="0" y="174" width="400" height="86" fill="#2b2e36"/><rect x="0" y="178" width="400" height="3" fill="#9aa0a8"/><rect x="0" y="188" width="400" height="3" fill="#9aa0a8"/>' +
      '<rect x="0" y="172" width="400" height="4" fill="' + GOLD + '"/>' +
      tag("STRANGE", 40, 236, 30, RED, -4) + tag("KC", 300, 238, 34, GOLD, -7),
      sky("k1", "#0e0a22", "#5a2a3a"));
  }

  /* 2. Arrowhead on game day: the red bowl, the gold rim, the crowd jumping, fireworks over the Red Kingdom */
  function arrowhead() {
    let seats = "";
    for (let r = 0; r < 6; r++) seats += '<path d="M' + (30 - r * 6) + ' ' + (120 + r * 12) + 'q' + (170 + r * 6) + ' -' + (34 - r * 3) + ' ' + (340 + r * 12) + ' 0" stroke="' + (r % 2 ? "#b3122c" : RED) + '" stroke-width="10" fill="none"/>';
    let crowd = "";
    for (let i = 0; i < 18; i++) {
      const x = 14 + i * 22, c = ["#2a1014", "#3a1418", "#1d1d24"][i % 3];
      crowd += '<g class="jp ' + ["", "jp2", "jp3"][i % 3] + '"><circle cx="' + x + '" cy="' + (216 - (i % 2) * 4) + '" r="7" fill="' + c + '"/><rect x="' + (x - 8) + '" y="' + (223 - (i % 2) * 4) + '" width="16" height="40" rx="6" fill="' + (i % 4 ? c : RED) + '"/>' +
        (i % 3 === 1 ? '<path d="M' + (x + 5) + ' ' + (220 - (i % 2) * 4) + 'l8-16" stroke="' + c + '" stroke-width="4" stroke-linecap="round"/><rect x="' + (x + 9) + '" y="' + (196 - (i % 2) * 4) + '" width="12" height="8" fill="' + GOLD + '"/>' : "") + '</g>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#k2)"/>' + stars(16) +
      '<g class="fw"><circle cx="80" cy="44" r="16" fill="none" stroke="' + GOLD + '" stroke-width="2" stroke-dasharray="3 5"/></g>' +
      '<g class="fw fw2"><circle cx="320" cy="36" r="18" fill="none" stroke="' + RED + '" stroke-width="2" stroke-dasharray="3 5"/></g>' +
      '<path class="bmz" d="M40 20L120 120h-40z" fill="#fff"/><path class="bmz bmz2" d="M360 20L320 120h-40z" fill="#fff"/>' +
      /* light towers */
      '<rect x="34" y="14" width="14" height="8" fill="#ddd"/><rect x="352" y="14" width="14" height="8" fill="#ddd"/>' +
      /* scoreboard */
      '<rect x="130" y="40" width="140" height="40" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="68" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" textLength="120" lengthAdjust="spacingAndGlyphs" fill="' + RED + '" class="flk">RED KINGDOM</text>' +
      '<rect x="196" y="80" width="8" height="18" fill="#333"/>' +
      /* the bowl */
      '<path d="M0 112q200-44 400 0v100H0z" fill="#7a0f20"/>' + seats +
      '<path d="M0 112q200-44 400 0" stroke="' + GOLD + '" stroke-width="4" fill="none"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#2f6b34"/><path d="M0 204h400" stroke="#fff" stroke-width="1.5" opacity=".6"/>' +
      crowd,
      sky("k2", "#0a0a1e", "#3a1630"));
  }

  /* 3. 18th & Vine: the Jazz District at night, the Gem Theater's tall neon sign, sax notes floating up */
  function vine() {
    let bricks = "";
    for (let y = 90; y < 196; y += 12) for (let x = (y / 12) % 2 ? -16 : 0; x < 400; x += 32) bricks += '<rect x="' + x + '" y="' + y + '" width="30" height="10" fill="#5a2f22"/>';
    let bulbs = "";
    for (let x = 116; x < 290; x += 12) bulbs += '<circle class="flk ' + (x % 24 ? "flk2" : "") + '" cx="' + x + '" cy="126" r="2.2" fill="#ffe7a8"/><circle class="flk ' + (x % 24 ? "" : "flk2") + '" cx="' + x + '" cy="152" r="2.2" fill="#ffe7a8"/>';
    const notes = [[60, 190, ""], [90, 196, "nt2"], [330, 192, "nt3"]].map(n => '<g class="nt ' + n[2] + '"><circle cx="' + n[0] + '" cy="' + n[1] + '" r="5" fill="' + GOLD + '"/><rect x="' + (n[0] + 3.5) + '" y="' + (n[1] - 20) + '" width="2" height="20" fill="' + GOLD + '"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#k3)"/>' + stars(14) +
      '<rect x="0" y="88" width="400" height="110" fill="#4a261b"/>' + bricks +
      /* Gem marquee */
      '<rect x="108" y="120" width="190" height="40" rx="3" fill="#1b1013" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="203" y="146" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" letter-spacing="2" fill="#fff">18TH &amp; VINE</text>' +
      /* vertical blade sign */
      '<rect x="188" y="20" width="30" height="96" rx="4" fill="#1b1013" stroke="' + RED + '" stroke-width="2"/>' +
      '<g class="flk" font-family="Anton, Impact, sans-serif" font-size="24" fill="' + RED + '" text-anchor="middle"><text x="203" y="50">G</text><text x="203" y="78">E</text><text x="203" y="106">M</text></g>' +
      /* doors and windows */
      '<rect x="140" y="166" width="24" height="32" fill="#120a0c"/><rect x="242" y="166" width="24" height="32" fill="#120a0c"/>' +
      '<rect x="20" y="104" width="60" height="44" fill="#ffd98a" opacity=".35" class="flk flk2"/><rect x="320" y="104" width="60" height="44" fill="#ffd98a" opacity=".35" class="flk"/>' +
      /* sidewalk + a saxophone leaning on the wall */
      '<rect x="0" y="198" width="400" height="62" fill="#3a3a40"/><rect x="0" y="196" width="400" height="4" fill="#77777f"/>' +
      notes +
      '<text x="200" y="246" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="1" fill="' + GOLD + '">THE JAZZ DISTRICT · KANSAS CITY</text>',
      sky("k3", "#0b0a1c", "#2e1c38"));
  }

  /* 4. The studio at Strange Music in Lee's Summit: the booth mic, the board, meters jumping, plaques on the wall */
  function studio() {
    let plaques = "";
    for (let i = 0; i < 5; i++) plaques += '<rect x="' + (24 + i * 74) + '" y="26" width="50" height="62" rx="2" fill="#2a1a12" stroke="#8a6a3a" stroke-width="2"/><circle cx="' + (49 + i * 74) + '" cy="52" r="16" fill="' + (i % 2 ? "#c0c4ca" : GOLD) + '"/><circle cx="' + (49 + i * 74) + '" cy="52" r="5" fill="' + RED + '"/><rect x="' + (32 + i * 74) + '" y="74" width="34" height="6" fill="#d8c8a0"/>';
    let meters = "";
    for (let i = 0; i < 10; i++) meters += '<rect class="mt mt' + (i % 5 + 1) + '" x="' + (150 + i * 10) + '" y="166" width="6" height="28" fill="' + (i % 3 ? "#5fd16a" : GOLD) + '"/>';
    let faders = "";
    for (let i = 0; i < 16; i++) faders += '<rect x="' + (48 + i * 19) + '" y="210" width="3" height="26" fill="#111"/><rect x="' + (44 + i * 19) + '" y="' + (214 + (i * 7) % 16) + '" width="11" height="6" rx="1" fill="#ddd"/>';
    return svg(
      '<rect width="400" height="260" fill="#14101a"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#1f1824"/>' + plaques +
      /* booth window with the mic */
      '<rect x="110" y="100" width="180" height="100" rx="4" fill="#0e1a22" stroke="#555" stroke-width="3"/>' +
      '<path class="bmz" d="M200 100L150 200h100z" fill="' + TEAL + '"/>' +
      '<rect x="198" y="128" width="4" height="56" fill="#888"/><rect x="190" y="112" width="20" height="28" rx="10" fill="#bbb" stroke="#555" stroke-width="2"/>' +
      '<circle cx="200" cy="128" r="16" fill="none" stroke="#444" stroke-width="2" stroke-dasharray="2 2"/>' +
      meters +
      /* the board */
      '<path d="M20 204h360l14 40H6z" fill="#2c2c34" stroke="#55565c" stroke-width="2"/>' + faders +
      '<text x="200" y="256" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" letter-spacing="2" fill="' + GOLD + '">STRANGE MUSIC · LEE\'S SUMMIT, MO</text>');
  }

  /* 5. The corner: E 9th St and Woodland Ave, where Wayne Miner Court stood, the name tagged, Liberty Memorial lit up behind */
  function corner() {
    let bricks = "";
    for (let y = 92; y < 210; y += 13) for (let x = (y / 13) % 2 ? -18 : 0; x < 400; x += 36) bricks += '<rect x="' + x + '" y="' + y + '" width="34" height="11" fill="#4a1f26"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a0e14"/>' +
      '<rect x="0" y="0" width="400" height="92" fill="url(#k5)"/>' + stars(10) + IC_LIB + bricks +
      '<rect x="0" y="90" width="400" height="4" fill="#2a1418"/>' +
      tag("TECH", 26, 140, 40, RED, -6) +
      /* "N9NE": N, a straight-stem 9 path, NE */
      '<g transform="rotate(-4 120 186)">' + tag("N", 108, 188, 40, GOLD, 0) + nine(140, 186, 34, GOLD) + tag("NE", 168, 188, 40, GOLD, 0) + '</g>' +
      tag("K.O.D.", 214, 140, 24, TEAL, -8) +
      /* sidewalk */
      '<rect x="0" y="210" width="400" height="50" fill="#8d8b85"/><rect x="0" y="208" width="400" height="4" fill="#b1aea6"/>' +
      /* signpost */
      '<rect x="356" y="96" width="5" height="114" fill="#4a5058"/>' +
      '<rect x="296" y="96" width="100" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
      '<text x="346" y="111" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">E 9th St</text>' +
      '<rect x="290" y="120" width="106" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
      '<text x="343" y="135" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Woodland Ave</text>',
      sky("k5", "#0d0a20", "#4a2236"));
  }

  /* Liberty Memorial: the tall limestone tower on the hill with the glowing steam at the top, downtown towers beside it */
  const IC_LIB = '<g>' +
    '<rect x="60" y="54" width="34" height="38" fill="#2a2038"/><rect x="104" y="44" width="26" height="48" fill="#2a2038"/><rect x="270" y="40" width="30" height="52" fill="#2a2038"/><rect x="310" y="52" width="40" height="40" fill="#2a2038"/>' +
    '<rect x="150" y="80" width="100" height="12" fill="#cfc4a8"/>' +
    '<path d="M190 80l3-58h14l3 58z" fill="#ddd2b6"/><rect x="188" y="18" width="24" height="6" fill="#cfc4a8"/>' +
    '<circle cx="200" cy="14" r="5" fill="' + GOLD + '" class="flk"/>' +
    '<g class="stm"><circle cx="200" cy="10" r="5" fill="#ffd0a0" opacity=".7"/></g><g class="stm stm2"><circle cx="198" cy="10" r="4" fill="#ffb070" opacity=".7"/></g><g class="stm stm3"><circle cx="202" cy="10" r="4" fill="#ffe0c0" opacity=".7"/></g>' +
    '</g>';

  window.SCENES = { streetcar, arrowhead, vine, studio, corner };
})();
