/* bruiserwolf scenes (Regions tab: Detroit; west side, Plymouth Rd, "P-Rock"). CSS classes prefixed bw- (the page's own anim-train is kept, used on the bus).
   1 DDOT Route 38 Plymouth pulling up to the Plymouth & Greenfield stop on the west side, low brick storefronts at dusk.
   2 His landscaping crew ("I'm a landscaper... cut the grass so you can see the snakes", I'm A Instrument; he runs a landscaping company in Detroit): a riding mower striping a bungalow lawn, clippings flying, rake and leaf pile.
   3 West-side little league football (former college offensive lineman, little league coach; "I was in the field on the hash mark"): green field, hash marks, goalpost, a spiral in the air.
   4 The Tango pager on a 90s Plymouth Rd payphone ("Device That Made Me": the Sky Pager meant you were official): the pager buzzing on the shelf, the phone cord swinging.
   5 Plymouth Rd and Greenfield Rd: green signs, BRUISER WOLF tagged on the brick, Michigan Central's tower far off downtown.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bwglow{0%,100%{opacity:.45}50%{opacity:1}}.bw-glow{animation:bwglow 2.2s ease-in-out infinite}.bw-g2{animation-delay:-1.1s}' +
    '@keyframes bwcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.bw-car{animation:bwcar 7s linear infinite}.bw-car2{animation-delay:-3.5s}' +
    '@keyframes bwmow{0%,100%{transform:translateX(0)}50%{transform:translateX(150px)}}.bw-mow{animation:bwmow 8s ease-in-out infinite}' +
    '@keyframes bwclip{0%{transform:translate(0,0);opacity:1}100%{transform:translate(-26px,-22px);opacity:0}}.bw-clip{animation:bwclip 1s ease-out infinite}.bw-c2{animation-delay:-.35s}.bw-c3{animation-delay:-.7s}' +
    '@keyframes bwleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-40px,90px) rotate(240deg)}}.bw-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:bwleaf 4s linear infinite}.bw-l2{animation-delay:-1.3s}.bw-l3{animation-delay:-2.6s}' +
    '@keyframes bwball{0%{transform:translate(0,0) rotate(0)}50%{transform:translate(130px,-70px) rotate(180deg)}100%{transform:translate(260px,0) rotate(360deg)}}.bw-ball{transform-box:fill-box;transform-origin:50% 50%;animation:bwball 3.4s ease-in-out infinite}' +
    '@keyframes bwbuzz{0%,60%,100%{transform:translateX(0)}65%{transform:translateX(-2px)}70%{transform:translateX(2px)}75%{transform:translateX(-2px)}80%{transform:translateX(2px)}85%{transform:translateX(0)}}.bw-buzz{animation:bwbuzz 1.6s linear infinite}' +
    '@keyframes bwswing{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.bw-swing{transform-box:fill-box;transform-origin:50% 0;animation:bwswing 2.4s ease-in-out infinite}' +
    '@keyframes bwflag{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.8)}}.bw-flag{transform-box:fill-box;transform-origin:0 50%;animation:bwflag 1.4s ease-in-out infinite}' +
    '@keyframes bwspray{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(-14px,-22px);opacity:0}}.bw-sp{animation:bwspray 1.4s ease-out infinite}.bw-sp2{animation-delay:-.5s}.bw-sp3{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const GOLD = "#f0b43a", TEAL = "#3fb6a8", RUST = "#d9572b";
  const tree = (x, y, r, c) => '<rect x="' + (x - 3) + '" y="' + (y - 4) + '" width="6" height="' + (r + 10) + '" fill="#5a3d26"/><circle cx="' + x + '" cy="' + (y - r / 2) + '" r="' + r + '" fill="' + (c || "#3f7a3a") + '"/><circle cx="' + (x - r * .6) + '" cy="' + (y - r * .2) + '" r="' + r * .7 + '" fill="' + (c || "#3f7a3a") + '"/>';
  const bungalow = (x, y, body, roof) => '<g transform="translate(' + x + ' ' + y + ')"><rect x="0" y="20" width="90" height="46" fill="' + body + '"/><path d="M-8 22l53 -30l53 30z" fill="' + roof + '"/>' +
    '<rect x="12" y="32" width="18" height="16" fill="#fbe7a8" stroke="#fff" stroke-width="2"/><rect x="60" y="32" width="18" height="16" fill="#fbe7a8" stroke="#fff" stroke-width="2"/><rect x="38" y="38" width="14" height="28" fill="#6b3a24"/>' +
    '<rect x="-4" y="56" width="98" height="10" fill="#b9b0a0"/></g>';

  /* 1. DDOT 38 Plymouth at Plymouth & Greenfield */
  function bwstop() {
    const bus = '<g class="anim-train"><rect x="40" y="128" width="300" height="64" rx="8" fill="#f2f2ee" stroke="#556" stroke-width="2"/>' +
      '<rect x="40" y="170" width="300" height="10" fill="#1d7a3e"/><rect x="40" y="180" width="300" height="5" fill="#f2c230"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (78 + i * 42) + '" y="138" width="34" height="26" rx="2" fill="#24323a"/>').join("") +
      '<rect x="44" y="136" width="28" height="44" rx="2" fill="#2c3e48"/>' +
      '<rect x="80" y="130" width="200" height="6" fill="#111"/><text x="180" y="135.5" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb21e">38 PLYMOUTH</text>' +
      '<circle cx="90" cy="194" r="11" fill="#1a1a1a"/><circle cx="90" cy="194" r="5" fill="#888"/><circle cx="296" cy="194" r="11" fill="#1a1a1a"/><circle cx="296" cy="194" r="5" fill="#888"/>' +
      '<rect x="336" y="150" width="6" height="8" fill="#fff6c2" class="bw-glow"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bws1)"/>' +
      /* low brick storefronts along Plymouth Rd */
      '<rect x="0" y="92" width="96" height="104" fill="#8a4a32"/><rect x="100" y="80" width="80" height="116" fill="#a35a3a"/><rect x="184" y="98" width="110" height="98" fill="#7a4434"/><rect x="298" y="86" width="102" height="110" fill="#94523a"/>' +
      [10, 40, 70, 110, 140, 196, 230, 262, 310, 344, 374].map((x, i) => '<rect x="' + x + '" y="' + (i % 2 ? 104 : 110) + '" width="18" height="14" fill="#f6d27a" class="bw-glow' + (i % 3 ? " bw-g2" : "") + '"/>').join("") +
      /* sidewalk + street */
      '<rect x="0" y="196" width="400" height="12" fill="#b7b0a4"/><rect x="0" y="208" width="400" height="52" fill="#3f4247"/><path d="M0 236h400" stroke="#f2c230" stroke-width="2" stroke-dasharray="20 14"/>' +
      bus +
      /* stop pole + sign */
      '<rect x="360" y="110" width="4" height="88" fill="#6b6f76"/><rect x="346" y="96" width="32" height="34" rx="3" fill="#1d7a3e" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="362" y="108" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">BUS STOP</text><circle cx="362" cy="120" r="7.5" fill="#fff"/><text x="362" y="123.5" text-anchor="middle" ' + font + ' font-size="9" fill="#1d7a3e">38</text>' +
      /* station-style black sign */
      '<rect x="18" y="20" width="250" height="40" rx="3" fill="#111" stroke="#444" stroke-width="2"/><text x="30" y="46" ' + font + ' font-size="17" fill="#fff">Plymouth &amp; Greenfield</text>' +
      '<circle cx="250" cy="40" r="11" fill="#1d7a3e"/><text x="250" y="44.5" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">38</text>',
      sky("bws1", "#2b2140", "#e8865a"));
  }

  /* 2. The landscaping crew */
  function bwlawn() {
    const mower = '<g class="bw-mow"><g transform="translate(60 176)"><rect x="0" y="10" width="54" height="18" rx="4" fill="' + GOLD + '"/><rect x="30" y="-6" width="18" height="18" rx="3" fill="#222"/>' +
      '<path d="M36 -6l-6 -14h-8" stroke="#333" stroke-width="3" fill="none"/><circle cx="10" cy="30" r="8" fill="#1a1a1a"/><circle cx="46" cy="30" r="8" fill="#1a1a1a"/><circle cx="10" cy="30" r="3" fill="#888"/><circle cx="46" cy="30" r="3" fill="#888"/>' +
      ['bw-clip', 'bw-clip bw-c2', 'bw-clip bw-c3'].map((c, i) => '<rect class="' + c + '" x="' + (-2 - i * 3) + '" y="' + (20 + i * 3) + '" width="4" height="2" fill="#6fbf4a"/>').join("") + '</g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bws2)"/>' +
      tree(40, 120, 30) + tree(360, 116, 34, "#4a8a3e") +
      bungalow(140, 76, "#c9b08a", "#5a4a44") +
      /* lawn with mowing stripes */
      '<rect x="0" y="150" width="400" height="80" fill="#4f9a3e"/>' + [0, 1, 2, 3].map(i => '<rect x="0" y="' + (150 + i * 20) + '" width="400" height="10" fill="#5fae4a"/>').join("") +
      /* curb + street */
      '<rect x="0" y="230" width="400" height="8" fill="#b9b0a0"/><rect x="0" y="238" width="400" height="22" fill="#45484e"/>' +
      /* trailer with tools */
      '<rect x="300" y="196" width="90" height="30" rx="3" fill="#2a2a2e"/><circle cx="320" cy="228" r="8" fill="#111"/><circle cx="370" cy="228" r="8" fill="#111"/>' +
      '<path d="M310 196v-36M318 196v-30" stroke="#8a5a2b" stroke-width="3"/><path d="M302 160h16M310 166h14" stroke="#6b6f76" stroke-width="3"/>' +
      /* leaf pile + rake */
      '<path d="M220 222q20 -24 44 0z" fill="#c8742a"/><path d="M232 214q8 -8 16 0z" fill="#e0a03a"/><path d="M276 150l-14 72" stroke="#8a5a2b" stroke-width="3"/><path d="M252 222h22" stroke="#6b6f76" stroke-width="3"/>' +
      ['bw-leaf', 'bw-leaf bw-l2', 'bw-leaf bw-l3'].map((c, i) => '<path class="' + c + '" d="M' + (330 + i * 12) + ' ' + (90 + i * 6) + 'q5 -5 10 0q-5 5 -10 0z" fill="' + (i % 2 ? "#e0a03a" : RUST) + '"/>').join("") +
      mower +
      tag("I'M A LANDSCAPER", 20, 40, 22, GOLD, -3),
      sky("bws2", "#7cc2ea", "#d8eef6"));
  }

  /* 3. Little league football on the west side */
  function bwfield() {
    return svg(
      '<rect width="400" height="260" fill="url(#bws3)"/>' +
      /* bleachers + crowd */
      '<rect x="0" y="90" width="400" height="40" fill="#8a8f98"/>' + [0, 1, 2].map(i => '<rect x="0" y="' + (96 + i * 12) + '" width="400" height="3" fill="#b9bec6"/>').join("") +
      Array.from({ length: 26 }, (_, i) => '<circle class="bw-glow' + (i % 2 ? " bw-g2" : "") + '" cx="' + (8 + i * 15) + '" cy="' + (92 + (i % 3) * 12) + '" r="4" fill="' + [GOLD, TEAL, RUST, "#f2f2ee"][i % 4] + '"/>').join("") +
      /* field */
      '<rect x="0" y="130" width="400" height="130" fill="#3f8a3a"/>' +
      [40, 120, 200, 280, 360].map(x => '<path d="M' + x + ' 130v130" stroke="#fff" stroke-width="2.5"/>').join("") +
      Array.from({ length: 19 }, (_, i) => '<path d="M' + (12 + i * 20) + ' 176v6M' + (12 + i * 20) + ' 214v6" stroke="#fff" stroke-width="2"/>').join("") +
      /* goalpost */
      '<path d="M372 250v-60M352 190h40M352 190v-56M392 190v-56" stroke="#f2c230" stroke-width="5" fill="none"/>' +
      /* scoreboard (no 9s) */
      '<rect x="20" y="20" width="150" height="56" rx="4" fill="#111" stroke="#444" stroke-width="2"/><text x="55" y="38" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">HOME</text><text x="135" y="38" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">GUEST</text>' +
      '<text x="55" y="66" text-anchor="middle" ' + font + ' font-size="22" fill="' + GOLD + '">14</text><text x="135" y="66" text-anchor="middle" ' + font + ' font-size="22" fill="' + GOLD + '">7</text>' +
      /* the spiral */
      '<g class="bw-ball"><ellipse cx="70" cy="186" rx="11" ry="7" fill="#7a3f1c"/><path d="M64 186h12" stroke="#fff" stroke-width="1.5"/><path d="M67 184v4M70 184v4M73 184v4" stroke="#fff" stroke-width="1"/></g>' +
      /* pylon flag */
      '<rect x="300" y="30" width="3" height="46" fill="#ddd"/><path class="bw-flag" d="M303 32h30l-6 8l6 8h-30z" fill="' + GOLD + '"/>',
      sky("bws3", "#6fb2e0", "#cfe6f2"));
  }

  /* 4. The Tango pager on a Plymouth Rd payphone */
  function bwpager() {
    return svg(
      '<rect width="400" height="260" fill="url(#bws4)"/>' +
      /* brick wall */
      '<rect x="0" y="0" width="400" height="200" fill="#7a4434"/>' +
      Array.from({ length: 10 }, (_, r) => '<path d="M0 ' + (20 * r + 10) + 'h400" stroke="#5e3326" stroke-width="2"/>').join("") +
      /* payphone */
      '<rect x="60" y="30" width="110" height="170" rx="6" fill="#9aa0a8" stroke="#4a4f56" stroke-width="3"/><rect x="72" y="44" width="86" height="20" fill="#2a2f36"/>' +
      '<text x="115" y="58" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">PHONE</text>' +
      '<rect x="80" y="76" width="70" height="60" rx="4" fill="#c8ccd2"/>' + [0, 1, 2, 3].map(r => [0, 1, 2].map(c => '<rect x="' + (88 + c * 20) + '" y="' + (82 + r * 13) + '" width="14" height="9" rx="2" fill="#3a3f46"/>').join("")).join("") +
      '<g class="bw-swing"><path d="M156 90q12 40 -4 80" stroke="#222" stroke-width="3" fill="none"/><rect x="140" y="166" width="22" height="40" rx="8" fill="#2a2f36"/></g>' +
      '<rect x="56" y="196" width="118" height="10" fill="#4a4f56"/>' +
      /* shelf + the pager */
      '<rect x="210" y="150" width="170" height="12" fill="#3a2a20"/>' +
      '<g class="bw-buzz"><rect x="240" y="100" width="110" height="50" rx="10" fill="#1c1c1e" stroke="#555" stroke-width="2"/><rect x="254" y="110" width="82" height="24" rx="3" fill="#b9d36a"/>' +
      '<text x="295" y="127" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="13" fill="#1f2a10">313-411</text>' +
      '<rect x="262" y="138" width="16" height="6" rx="2" fill="#444"/><rect x="286" y="138" width="16" height="6" rx="2" fill="#444"/><rect x="310" y="138" width="16" height="6" rx="2" fill="#444"/></g>' +
      '<path class="bw-glow" d="M232 112l-10 -6M232 124h-12M232 136l-10 6M358 112l10 -6M358 124h12M358 136l10 6" stroke="' + GOLD + '" stroke-width="3" stroke-linecap="round"/>' +
      /* sidewalk */
      '<rect x="0" y="200" width="400" height="60" fill="#b7b0a4"/><path d="M0 230h400" stroke="#a39c90" stroke-width="2"/>' +
      tag("SKY PAGE", 220, 60, 30, GOLD, -5) + tag("OFFICIAL", 250, 90, 16, TEAL, -4),
      sky("bws4", "#2b2140", "#4a3050"));
  }

  /* 5. Plymouth Rd and Greenfield Rd */
  function bwcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bws5)"/>' +
      /* Michigan Central Station far off: the tall pale block with its rows of windows and the low arched station hall */
      '<g opacity=".8"><rect x="140" y="34" width="80" height="92" fill="#cfc4ae"/>' +
      Array.from({ length: 8 }, (_, r) => Array.from({ length: 8 }, (_, c) => '<rect x="' + (146 + c * 9.4) + '" y="' + (40 + r * 10.6) + '" width="5" height="6" fill="#7d7464"/>').join("")).join("") +
      '<rect x="136" y="30" width="88" height="6" fill="#b9ae98"/><rect x="100" y="98" width="40" height="28" fill="#c3b8a2"/><path d="M106 126v-14q8 -10 16 0v14M122 126v-14" stroke="#7d7464" stroke-width="2" fill="none"/></g>' +
      /* the wall */
      '<rect x="0" y="126" width="400" height="88" fill="#9a5038"/>' +
      Array.from({ length: 4 }, (_, r) => '<path d="M0 ' + (146 + r * 20) + 'h400" stroke="#7d3e2c" stroke-width="1.5"/>').join("") +
      tag("BRUISER WOLF", 18, 182, 38, GOLD, -5) + tag("BIG WOLF", 196, 206, 20, TEAL, -4) + tag("P-ROCK", 30, 206, 16, RUST, -3) +
      ['bw-sp', 'bw-sp bw-sp2', 'bw-sp bw-sp3'].map(c => '<circle class="' + c + '" cx="300" cy="184" r="3" fill="' + TEAL + '"/>').join("") +
      '<rect x="300" y="182" width="8" height="18" rx="2" fill="#333" transform="rotate(30 304 191)"/>' +
      /* sidewalk + street */
      '<rect x="0" y="214" width="400" height="10" fill="#cfc8ba"/><rect x="0" y="224" width="400" height="36" fill="#45484e"/>' +
      '<g class="bw-car"><rect x="0" y="230" width="70" height="18" rx="5" fill="#2f4a6a"/><rect x="12" y="222" width="40" height="12" rx="4" fill="#2f4a6a"/><circle cx="14" cy="250" r="6" fill="#111"/><circle cx="56" cy="250" r="6" fill="#111"/></g>' +
      /* sign post with green signs */
      '<rect x="340" y="104" width="5" height="120" fill="#6b6f76"/>' + sign(286, 88, 112, "Plymouth Rd", 12) + sign(286, 112, 112, "Greenfield Rd", 12),
      sky("bws5", "#e98a4a", "#fbd9a8"));
  }

  window.SCENES = { bwstop, bwlawn, bwfield, bwpager, bwcorner };
})();
