/* dukedeuce scenes (Regions tab: Memphis + Tennessee; Whitehaven, "Blackhaven"). CSS classes and ids prefixed dd- (the page's own anim-train is kept).
   1 MATA stop at Millbranch Rd & Raines Rd in Whitehaven (Routes 42 Crosstown and 69 Winchester), a bus pulling in at dusk.
   2 A gangsta-walk battle in a Whitehaven parking lot: the Blackhaven Gangsta Walkers (BHG) circle, a boombox thumping.
   3 Duke Nitty's room that doubled as a studio: the bed, the beat pads, the mic, Duke grew up in it.
   4 The school marching band field: a row of tenor drums (Duke played tenors), stadium lights.
   5 Raines Rd & Hodge Rd: green signs, DUKE DEUCE tagged on the wall, David Carnes Park's pavilion and field lights behind.
   400 x 260 SVGs. No logos, no faces (all people are flat silhouettes). The only 9 is drawn as a path with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ddbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.dd-bob{animation:ddbob .5s ease-in-out infinite}.dd-bob2{animation-delay:-.25s}' +
    '@keyframes ddsway{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.dd-sw{transform-box:fill-box;transform-origin:50% 100%;animation:ddsway .5s ease-in-out infinite}.dd-sw2{animation-delay:-.25s}' +
    '@keyframes ddpulse{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}.dd-pu{transform-box:fill-box;transform-origin:50% 50%;animation:ddpulse .5s ease-in-out infinite}' +
    '@keyframes ddblink{0%,100%{opacity:.25}50%{opacity:1}}.dd-bl{animation:ddblink .9s ease-in-out infinite}.dd-bl2{animation-delay:-.3s}.dd-bl3{animation-delay:-.6s}' +
    '@keyframes ddhit{0%,100%{transform:rotate(0)}50%{transform:rotate(-24deg)}}.dd-hit{transform-box:fill-box;transform-origin:0% 100%;animation:ddhit .35s ease-in-out infinite}.dd-hit2{animation-delay:-.17s}' +
    '@keyframes ddwave{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1)}}.dd-wv{transform-box:fill-box;transform-origin:50% 50%;animation:ddwave .7s ease-in-out infinite}' +
    '@keyframes ddcar{from{transform:translateX(-170px)}to{transform:translateX(440px)}}.dd-car{animation:ddcar 7s linear infinite;animation-delay:-3s}' +
    '@keyframes ddtw{0%,100%{opacity:.3}50%{opacity:1}}.dd-tw{animation:ddtw 1.8s ease-in-out infinite}.dd-tw2{animation-delay:-.9s}' +
    '@keyframes ddspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dd-sp{animation:ddspray 1.4s ease-out infinite}.dd-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="dd-tw' + (i % 2 ? ' dd-tw2' : '') + '" cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 60) + '" r="' + (i % 3 ? 0.8 : 1.4) + '" fill="#fff"/>').join("");
  /* a 9 drawn as a path: round loop on top, straight stem down the right side */
  const nine = (x, y, h, c, sw) => { const r = h * 0.26; return '<path d="M' + (x + 2 * r) + ' ' + (y + r) + 'a' + r + ' ' + r + ' 0 1 0 0 0.01M' + (x + 2 * r) + ' ' + (y + r) + 'V' + (y + h) + '" stroke="' + c + '" stroke-width="' + sw + '" fill="none" stroke-linecap="round"/>'; };
  /* route badge: "42" as text; "69" = a text 6 plus a drawn 9 */
  const badge42 = (x, y) => '<rect x="' + x + '" y="' + y + '" width="30" height="20" rx="4" fill="#0057a8"/><text x="' + (x + 15) + '" y="' + (y + 15) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">42</text>';
  const badge69 = (x, y) => '<rect x="' + x + '" y="' + y + '" width="30" height="20" rx="4" fill="#d22630"/><text x="' + (x + 11) + '" y="' + (y + 15) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">6</text>' + nine(x + 16, y + 5, 10.5, "#fff", 2.2);
  const RED = "#e8262c", GOLD = "#f2c230", CHROME = "#c9d0d6";
  /* flat silhouette person, no face: head circle + body path; pose shifts arms/legs */
  const person = (x, y, s, c, pose) => {
    const k = v => (v * s).toFixed(1);
    const arms = pose === 1 ? 'M' + x + ' ' + (y + +k(14)) + 'l' + k(-14) + ' ' + k(-12) + 'M' + x + ' ' + (y + +k(14)) + 'l' + k(13) + ' ' + k(8)
      : pose === 2 ? 'M' + x + ' ' + (y + +k(14)) + 'l' + k(-12) + ' ' + k(10) + 'M' + x + ' ' + (y + +k(14)) + 'l' + k(15) + ' ' + k(-10)
        : 'M' + x + ' ' + (y + +k(14)) + 'l' + k(-9) + ' ' + k(14) + 'M' + x + ' ' + (y + +k(14)) + 'l' + k(9) + ' ' + k(14);
    const legs = pose === 1 ? 'M' + x + ' ' + (y + +k(32)) + 'l' + k(-12) + ' ' + k(18) + 'M' + x + ' ' + (y + +k(32)) + 'l' + k(10) + ' ' + k(10) + 'l' + k(8) + ' ' + k(-2)
      : pose === 2 ? 'M' + x + ' ' + (y + +k(32)) + 'l' + k(-6) + ' ' + k(10) + 'l' + k(-9) + ' ' + k(2) + 'M' + x + ' ' + (y + +k(32)) + 'l' + k(12) + ' ' + k(18)
        : 'M' + x + ' ' + (y + +k(32)) + 'l' + k(-6) + ' ' + k(19) + 'M' + x + ' ' + (y + +k(32)) + 'l' + k(6) + ' ' + k(19);
    return '<circle cx="' + x + '" cy="' + (y + +k(4)) + '" r="' + k(6) + '" fill="' + c + '"/><path d="M' + x + ' ' + (y + +k(10)) + 'V' + (y + +k(32)) + '" stroke="' + c + '" stroke-width="' + k(9) + '" stroke-linecap="round"/>' +
      '<path d="' + arms + legs + '" stroke="' + c + '" stroke-width="' + k(5) + '" stroke-linecap="round" stroke-linejoin="round" fill="none"/>';
  };

  /* 1. MATA stop, Millbranch Rd & Raines Rd */
  function ddstop() {
    const bus = '<g class="anim-train"><rect x="40" y="120" width="290" height="78" rx="9" fill="#f2f2ee" stroke="#9aa0a6" stroke-width="2"/>' +
      '<rect x="40" y="168" width="290" height="10" fill="#0057a8"/><rect x="40" y="178" width="290" height="5" fill="' + RED + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (56 + i * 40) + '" y="134" width="30" height="26" rx="3" fill="#1b2633"/>').join("") +
      '<rect x="298" y="132" width="26" height="40" rx="3" fill="#24313f"/><rect x="250" y="124" width="74" height="9" rx="2" fill="#111"/><text x="287" y="131.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">WINCHESTER</text>' +
      '<circle cx="92" cy="200" r="11" fill="#222"/><circle cx="92" cy="200" r="5" fill="#888"/><circle cx="282" cy="200" r="11" fill="#222"/><circle cx="282" cy="200" r="5" fill="#888"/><circle cx="326" cy="186" r="4" fill="#fff6c2"/></g>';
    const shelter = '<rect x="330" y="128" width="62" height="6" fill="#55606b"/><path d="M336 134v76M386 134v76" stroke="#55606b" stroke-width="3"/><rect x="338" y="138" width="46" height="50" fill="#9fc3d8" opacity=".35"/><rect x="342" y="190" width="38" height="5" fill="#6b4a2e"/>';
    const lots = '<rect x="0" y="96" width="120" height="30" fill="#2a2730"/><rect x="250" y="102" width="150" height="24" fill="#2a2730"/>' +
      '<rect x="10" y="104" width="22" height="10" class="dd-bl" fill="#ffd98a"/><rect x="60" y="104" width="22" height="10" class="dd-bl dd-bl2" fill="#ffd98a"/><rect x="270" y="108" width="20" height="9" class="dd-bl dd-bl3" fill="#ffd98a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dds1)"/>' + stars(14) +
      '<circle cx="330" cy="52" r="20" fill="#ffb15c" opacity=".55"/>' + lots +
      '<rect x="0" y="126" width="400" height="8" fill="#3b3d42"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3a3b40"/><path d="M0 230h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      shelter + bus +
      '<rect x="0" y="210" width="400" height="8" fill="#8a8d92"/>' +
      '<rect x="356" y="58" width="5" height="70" fill="#444"/><rect x="338" y="60" width="40" height="30" rx="3" fill="#fff" stroke="#0057a8" stroke-width="2"/><text x="358" y="73" text-anchor="middle" ' + font + ' font-size="7" fill="#0057a8">MATA</text><text x="358" y="84" text-anchor="middle" ' + font + ' font-size="7" fill="#333">BUS STOP</text>' +
      '<rect x="40" y="8" width="320" height="38" rx="3" fill="#111"/><text x="54" y="25" ' + font + ' font-size="13" fill="#fff">Millbranch Rd &amp; Raines Rd</text>' + badge42(250, 13) + badge69(286, 13) +
      '<text x="54" y="40" ' + font + ' font-size="8" fill="#bbb">WHITEHAVEN · MEMPHIS</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#ddd">42 CROSSTOWN  ·  WINCHESTER</text>',
      sky("dds1", "#1b1035", "#d0643a"));
  }

  /* 2. Gangsta-walk battle: the BHG circle in a parking lot */
  function ddwalk() {
    const crowd = Array.from({ length: 12 }, (_, i) => person(14 + i * 34, 150 - (i % 2) * 4, 0.9, "#16131c", 0)).join("");
    const boom = '<g transform="translate(300 196)"><rect x="0" y="0" width="70" height="34" rx="5" fill="#222" stroke="#666" stroke-width="2"/><path d="M14 0v-8h42v8" stroke="#666" stroke-width="3" fill="none"/>' +
      '<circle class="dd-pu" cx="16" cy="17" r="11" fill="#333" stroke="' + RED + '" stroke-width="2"/><circle class="dd-pu" cx="54" cy="17" r="11" fill="#333" stroke="' + RED + '" stroke-width="2"/><rect x="29" y="8" width="12" height="6" fill="' + GOLD + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dds2)"/>' + stars(18) +
      '<rect x="0" y="70" width="400" height="60" fill="#221d28"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (12 + i * 80) + '" y="82" width="64" height="22" fill="#3a2c3e"/><rect x="' + (18 + i * 80) + '" y="86" width="52" height="14" fill="' + (i % 2 ? '#ffd98a' : '#9fd3ff') + '" class="dd-bl' + (i % 3 ? ' dd-bl2' : '') + '" opacity=".8"/>').join("") +
      '<rect x="60" y="34" width="280" height="30" rx="3" fill="' + RED + '"/><text x="200" y="55" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">BLACKHAVEN GANGSTA WALKERS</text>' +
      '<rect x="0" y="150" width="400" height="110" fill="#38363d"/><path d="M40 260l30 -110M140 260l10 -110M260 260l-10 -110M360 260l-30 -110" stroke="#f2f2f2" stroke-width="2" opacity=".5"/>' +
      '<ellipse cx="190" cy="214" rx="120" ry="26" fill="#ffe7a3" opacity=".18"/>' + crowd +
      '<g class="dd-bob">' + person(150, 170, 1.4, "#0b0b0f", 1) + '</g><g class="dd-bob dd-bob2">' + person(226, 170, 1.4, "#0b0b0f", 2) + '</g>' +
      '<rect x="138" y="190" width="24" height="6" fill="' + RED + '"/><rect x="214" y="190" width="24" height="6" fill="' + RED + '"/>' + boom +
      '<path d="M376 160V96" stroke="#555" stroke-width="4"/><path d="M366 96h20" stroke="#555" stroke-width="4"/><path d="M364 100l-40 120h104z" fill="#fff4c2" opacity=".07"/>' +
      '<text x="20" y="248" ' + font + ' font-size="11" fill="#f2c230">BHG · WHITEHAVEN</text>',
      sky("dds2", "#07060c", "#2b1530"));
  }

  /* 3. Duke Nitty's room that doubled as a studio */
  function ddstudio() {
    const pads = Array.from({ length: 16 }, (_, i) => '<rect x="' + (232 + (i % 4) * 15) + '" y="' + (150 + Math.floor(i / 4) * 12) + '" width="12" height="9" rx="2" fill="' + (i % 3 ? RED : GOLD) + '" class="dd-bl' + (i % 3 === 1 ? ' dd-bl2' : i % 3 === 2 ? ' dd-bl3' : '') + '"/>').join("");
    const wave = Array.from({ length: 14 }, (_, i) => '<rect class="dd-wv" style="animation-delay:-' + (i * 0.11).toFixed(2) + 's" x="' + (262 + i * 6) + '" y="78" width="3.5" height="26" fill="#7ee08a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#2a2234"/><rect x="0" y="200" width="400" height="60" fill="#4a3a2e"/><path d="M0 200h400" stroke="#2a1d14" stroke-width="3"/>' +
      '<rect x="24" y="28" width="96" height="70" fill="#0d1630" stroke="#7a6a5a" stroke-width="5"/><path d="M72 28v70M24 63h96" stroke="#7a6a5a" stroke-width="3"/>' + '<circle cx="98" cy="46" r="6" fill="#f2f2e0"/><circle class="dd-tw" cx="40" cy="40" r="1.2" fill="#fff"/><circle class="dd-tw dd-tw2" cx="56" cy="80" r="1.2" fill="#fff"/>' +
      '<rect x="140" y="30" width="62" height="80" fill="#1a1420" stroke="' + GOLD + '" stroke-width="2"/><text x="171" y="62" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">DUKE</text><text x="171" y="78" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">NITTY</text><text x="171" y="98" text-anchor="middle" ' + font + ' font-size="7" fill="' + RED + '">LIVE TONIGHT</text>' +
      '<rect x="10" y="168" width="150" height="42" rx="4" fill="#3d4f8a"/><rect x="10" y="160" width="40" height="18" rx="6" fill="#e9e4d8"/><rect x="10" y="206" width="150" height="10" fill="#2a2a2a"/>' +
      '<rect x="210" y="138" width="180" height="10" fill="#6b4a2e"/><path d="M220 148v62M380 148v62" stroke="#6b4a2e" stroke-width="6"/>' +
      '<rect x="226" y="144" width="70" height="56" rx="3" fill="#222" transform="translate(0 -2)"/>' + pads +
      '<rect x="256" y="64" width="96" height="50" rx="3" fill="#111" stroke="#555" stroke-width="2"/><rect x="262" y="70" width="84" height="38" fill="#0b1a10"/>' + wave + '<rect x="298" y="114" width="12" height="24" fill="#444"/>' +
      '<rect x="316" y="146" width="30" height="40" rx="4" fill="#1d1d22"/><circle cx="331" cy="158" r="7" fill="#333"/><circle class="dd-pu" cx="331" cy="176" r="8" fill="#2c2c33" stroke="#777"/>' +
      '<rect x="356" y="146" width="30" height="40" rx="4" fill="#1d1d22"/><circle cx="371" cy="158" r="7" fill="#333"/><circle class="dd-pu" cx="371" cy="176" r="8" fill="#2c2c33" stroke="#777"/>' +
      '<path d="M190 250V120" stroke="#333" stroke-width="4"/><path d="M176 250h28" stroke="#333" stroke-width="5"/><path d="M190 120l20 -10" stroke="#333" stroke-width="3"/><rect x="204" y="90" width="14" height="26" rx="7" fill="#9aa0a6" transform="rotate(-25 211 103)"/>' +
      '<circle cx="228" cy="104" r="12" fill="none" stroke="#666" stroke-width="2"/><circle cx="228" cy="104" r="10" fill="#222" opacity=".5"/>' +
      '<text x="200" y="240" text-anchor="middle" ' + font + ' font-size="10" fill="#e9dcc4">DAD\'S ROOM · DAD\'S STUDIO</text>',
      '');
  }

  /* 4. Marching band field: the tenor drum line */
  function dddrum() {
    const quad = (x, d) => '<g transform="translate(' + x + ' 160)">' + person(0, -44, 1.15, "#101016", 0) +
      '<ellipse cx="-10" cy="4" rx="9" ry="4" fill="#e8e8e8" stroke="#999"/><ellipse cx="6" cy="2" rx="11" ry="5" fill="#f2f2f2" stroke="#999"/><ellipse cx="22" cy="5" rx="8" ry="3.5" fill="#e8e8e8" stroke="#999"/>' +
      '<rect x="-19" y="4" width="18" height="14" fill="' + RED + '"/><rect x="-5" y="2" width="22" height="16" fill="' + RED + '"/><rect x="14" y="5" width="16" height="12" fill="' + RED + '"/>' +
      '<path d="M-19 10h49" stroke="' + CHROME + '" stroke-width="1.5"/>' +
      '<g class="dd-hit' + (d ? ' dd-hit2' : '') + '"><path d="M-6 -8l-10 10" stroke="#d9b98a" stroke-width="2.5" stroke-linecap="round"/></g><g class="dd-hit' + (d ? '' : ' dd-hit2') + '"><path d="M12 -8l2 10" stroke="#d9b98a" stroke-width="2.5" stroke-linecap="round"/></g></g>';
    const light = x => '<path d="M' + x + ' 140V30" stroke="#666" stroke-width="4"/><rect x="' + (x - 20) + '" y="18" width="40" height="16" fill="#333"/>' + [0, 1, 2, 3].map(i => '<circle class="dd-tw' + (i % 2 ? ' dd-tw2' : '') + '" cx="' + (x - 14 + i * 9.5) + '" cy="26" r="3.5" fill="#fffbe0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dds4)"/>' + light(30) + light(370) +
      '<path d="M50 34l-50 106h130zM350 34l-80 106h130z" fill="#fffbe0" opacity=".06"/>' +
      '<rect x="0" y="92" width="400" height="44" fill="#2a2a33"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20 + 4) + '" y="' + (98 + (i % 3) * 10) + '" width="12" height="7" fill="#45404f"/>').join("") +
      '<rect x="0" y="136" width="400" height="124" fill="#2f7a3a"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (20 + i * 72) + ' 136l' + (-30 + i * 12) + ' 124" stroke="#e8f2e8" stroke-width="2" opacity=".7"/>').join("") +
      quad(80, 0) + quad(160, 1) + quad(240, 0) + quad(320, 1) +
      '<rect x="110" y="42" width="180" height="26" rx="3" fill="' + RED + '"/><text x="200" y="60" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">MARCHING BAND · TENORS</text>' +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="#e8f2e8">FRIDAY NIGHT · HALFTIME</text>',
      sky("dds4", "#05060f", "#1b2240"));
  }

  /* 5. Raines Rd & Hodge Rd: the corner, DUKE DEUCE on the wall, David Carnes Park behind */
  function ddcorner() {
    const pole = x => '<path d="M' + x + ' 120V40" stroke="#777" stroke-width="3"/><rect x="' + (x - 10) + '" y="34" width="20" height="8" fill="#444"/><circle class="dd-tw" cx="' + (x - 4) + '" cy="38" r="2" fill="#fffbe0"/><circle class="dd-tw dd-tw2" cx="' + (x + 4) + '" cy="38" r="2" fill="#fffbe0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dds5)"/>' + stars(12) +
      pole(250) + pole(370) +
      '<rect x="210" y="106" width="190" height="112" fill="#3f8a46"/><path d="M210 150h190" stroke="#4f9a56" stroke-width="2"/>' +
      '<path d="M230 96l50 -22l50 22z" fill="#2f6e4a"/><rect x="236" y="96" width="88" height="6" fill="#2f6e4a"/><path d="M242 102v18M318 102v18M280 102v18" stroke="#c9c2b0" stroke-width="3"/>' +
      '<text x="300" y="128" text-anchor="middle" ' + font + ' font-size="7" fill="#e8f2e8">DAVID CARNES PARK</text>' +
      '<rect x="0" y="60" width="210" height="160" fill="#7a3a2a"/>' + Array.from({ length: 16 }, (_, r) => '<path d="M0 ' + (66 + r * 10) + 'h210" stroke="#5e2b1f" stroke-width="1"/>').join("") +
      tag("DUKE DEUCE", 14, 128, 34, RED, -5) + tag("CRUNK AIN'T DEAD", 22, 168, 17, GOLD, -3) + tag("BHG", 150, 196, 20, CHROME, -8) +
      '<g transform="translate(170 150)"><circle class="dd-sp" cx="0" cy="0" r="3" fill="' + RED + '" opacity=".7"/><circle class="dd-sp dd-sp2" cx="6" cy="-4" r="2" fill="' + RED + '" opacity=".7"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#4a4b50"/><rect x="0" y="216" width="400" height="6" fill="#8a8d92"/>' +
      '<g class="dd-car"><path d="M10 222l14 -16h64l20 16h34v14H6v-14z" fill="#1c1c22"/><path d="M28 208h26v12H20zM58 208h26l14 12H58z" fill="#3a4a5c"/><rect x="6" y="226" width="136" height="3" fill="' + RED + '"/><circle cx="36" cy="238" r="9" fill="#111"/><circle cx="116" cy="238" r="9" fill="#111"/><circle cx="140" cy="226" r="3" fill="#fff6c2"/></g>' +
      '<path d="M300 250V140" stroke="#5a5f66" stroke-width="5"/>' + sign(254, 138, 92, "Raines Rd") + sign(262, 164, 78, "Hodge Rd") +
      '<text x="390" y="252" text-anchor="end" ' + font + ' font-size="9" fill="#ddd">Whitehaven · Memphis</text>',
      sky("dds5", "#0a0a1e", "#3a2550"));
  }

  window.SCENES = { ddstop, ddwalk, ddstudio, dddrum, ddcorner };
})();
