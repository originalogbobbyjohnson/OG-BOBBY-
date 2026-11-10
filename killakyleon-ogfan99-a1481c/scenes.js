/* killakyleon scenes (Regions tab: Houston + Texas; the Dead End on the Southside, where last.fm says he grew up - "the notorious Dead End Drive on the Southside of Houston"). CSS classes and ids prefixed ky- (the page's own anim-train is kept).
   1 METRO 80 MLK/Lockwood bus pulling into the M L King Blvd @ Reed Rd stop (transitapp stop list), just up MLK from the Dead End: wide boulevard, live oaks, a low strip of shops.
   2 Quarter Pound Records on the Northside, where he says he got his first real studio time (The Boombox interview): the board, the booth, the red ON AIR light, the meters jumping.
   3 "Flip down the head, you know I'm lookin' tight / Trunk was up and poppin'" (Flip, 2023): a candy-red drop-top on MLK, the head folding down, the trunk rising with neon inside, Texas plates.
   4 Sixth Street, Austin at night (SXSW showcasing artist 2012 and 2015): old two-story storefronts, neon, a little stage with lights sweeping and hands up.
   5 Reed Rd and M L King Blvd on the Southside: green signs, KILLA KYLEON tagged on the wall, NRG Stadium's white roof trusses lit up off to the west behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kytw{0%,100%{opacity:.25}50%{opacity:1}}.ky-tw{animation:kytw 1.8s ease-in-out infinite}.ky-tw2{animation-delay:-.6s}.ky-tw3{animation-delay:-1.2s}' +
    '@keyframes kyleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.ky-leaf{transform-box:fill-box;transform-origin:50% 100%;animation:kyleaf 3s ease-in-out infinite}' +
    '@keyframes kyonair{0%,49%{opacity:1}50%,100%{opacity:.25}}.ky-on{animation:kyonair 1.2s steps(1) infinite}' +
    '@keyframes kyvu{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}80%{transform:scaleY(.85)}}.ky-vu{transform-box:fill-box;transform-origin:50% 100%;animation:kyvu .9s ease-in-out infinite}.ky-vu2{animation-delay:-.3s}.ky-vu3{animation-delay:-.6s}' +
    '@keyframes kyhead{0%,15%{transform:rotate(0)}45%,80%{transform:rotate(-160deg)}100%{transform:rotate(0)}}.ky-head{transform-box:fill-box;transform-origin:100% 100%;animation:kyhead 5s ease-in-out infinite}' +
    '@keyframes kytrunk{0%,30%{transform:rotate(0)}50%,85%{transform:rotate(-55deg)}100%{transform:rotate(0)}}.ky-trunk{transform-box:fill-box;transform-origin:0% 100%;animation:kytrunk 5s ease-in-out infinite}' +
    '@keyframes kyneon{0%,100%{opacity:.35}50%{opacity:1}}.ky-neon{animation:kyneon 1s ease-in-out infinite}' +
    '@keyframes kysweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.ky-sw{transform-box:fill-box;transform-origin:50% 0%;animation:kysweep 3s ease-in-out infinite}.ky-sw2{animation-delay:-1.5s}' +
    '@keyframes kyhand{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}.ky-hd{animation:kyhand .8s ease-in-out infinite}.ky-hd2{animation-delay:-.4s}' +
    '@keyframes kyspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ky-sp{animation:kyspray 1.4s ease-out infinite}.ky-sp2{animation-delay:.45s}' +
    '@keyframes kyglow{0%,100%{opacity:.5}50%{opacity:.95}}.ky-glow{animation:kyglow 2.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="ky-tw' + (i % 3 ? " ky-tw" + (i % 3 + 1) : "") + '" cx="' + ((i * 83 + 17) % 400) + '" cy="' + (6 + (i * 41) % 80) + '" r="' + (i % 4 ? 0.9 : 1.5) + '" fill="#fff"/>'; return s; };
  const METRO = "#1f4e79", CANDY = "#d7263d", GOLD = "#f5c542", ICE = "#4fc3f7";
  const oak = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-5" y="0" width="10" height="44" fill="#5b4632"/><path d="M-5 12l-18 -10M5 10l18 -12" stroke="#5b4632" stroke-width="5"/><g class="ky-leaf"><ellipse cx="0" cy="-8" rx="44" ry="22" fill="#3f6b35"/><ellipse cx="-22" cy="-16" rx="22" ry="14" fill="#4d7d40"/><ellipse cx="22" cy="-14" rx="20" ry="12" fill="#4d7d40"/></g></g>';
  const swanga = (cx, cy) => '<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="#222"/><circle cx="' + cx + '" cy="' + cy + '" r="7" fill="#d6dbe0" stroke="#8a9096" stroke-width="1.5"/><path d="M' + cx + ' ' + cy + 'l14 3" stroke="#eef2f5" stroke-width="3" stroke-linecap="round"/>';

  /* 1. METRO 80 at M L King Blvd @ Reed Rd */
  function kystation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (62 + i * 36) + '" y="146" width="30" height="22" rx="3" fill="#1d2833"/>').join("");
    const bus = '<g class="anim-train"><rect x="28" y="136" width="318" height="70" rx="10" fill="#f4f5f3" stroke="#8f979e" stroke-width="2"/>' + win +
      '<rect x="34" y="146" width="22" height="48" rx="2" fill="#1d2833"/><rect x="28" y="176" width="318" height="8" fill="' + METRO + '"/><rect x="28" y="186" width="318" height="3" fill="#e31837"/>' +
      '<rect x="32" y="138" width="124" height="10" rx="2" fill="#111"/><text x="94" y="146" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">80 MLK / LOCKWOOD</text>' +
      '<circle cx="80" cy="208" r="12" fill="#222"/><circle cx="80" cy="208" r="5" fill="#9aa1a8"/><circle cx="294" cy="208" r="12" fill="#222"/><circle cx="294" cy="208" r="5" fill="#9aa1a8"/>' +
      '<circle cx="32" cy="196" r="3.5" fill="#fff6c2"/></g>';
    const shops = '<rect x="90" y="84" width="240" height="46" fill="#c8b79a"/><rect x="90" y="80" width="240" height="8" fill="#8a7a62"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (98 + i * 58) + '" y="94" width="48" height="26" fill="#2f3b46"/><rect x="' + (98 + i * 58) + '" y="88" width="48" height="5" fill="' + ["#d7263d", "#2b6cb0", "#f5c542", "#3a8f4f"][i] + '"/>').join("") +
      '<text x="210" y="78" text-anchor="middle" ' + font + ' font-size="8" fill="#5b4632">SOUTHSIDE PLAZA</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#kys1)"/>' +
      '<circle cx="330" cy="40" r="18" fill="#fff3c4" opacity=".9"/>' + shops +
      oak(40, 86, 1) + oak(366, 88, .95) +
      '<rect x="0" y="128" width="400" height="10" fill="#cfc9bd"/><rect x="0" y="138" width="400" height="122" fill="#55565c"/><path d="M0 232h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="22 16"/>' +
      bus +
      '<rect x="374" y="104" width="5" height="112" fill="#6b7178"/><rect x="356" y="92" width="40" height="30" rx="3" fill="' + METRO + '" stroke="#fff" stroke-width="1.5"/><text x="376" y="104" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">METRO</text><text x="376" y="117" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">80</text>' +
      '<rect x="14" y="220" width="320" height="34" rx="3" fill="#111"/><text x="24" y="242" ' + font + ' font-size="13" fill="#fff">M L King Blvd @ Reed Rd</text><rect x="278" y="228" width="44" height="18" rx="9" fill="' + METRO + '"/><text x="300" y="241" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">80</text>',
      sky("kys1", "#7cc0ea", "#e7f4fb"));
  }

  /* 2. Quarter Pound Records, the Northside studio */
  function kystudio() {
    const faders = Array.from({ length: 14 }, (_, i) => '<rect x="' + (66 + i * 18) + '" y="186" width="4" height="26" fill="#111"/><rect x="' + (62 + i * 18) + '" y="' + (190 + (i * 7) % 16) + '" width="12" height="6" rx="1" fill="' + (i % 4 ? "#d6dbe0" : CANDY) + '"/>').join("");
    const knobs = Array.from({ length: 14 }, (_, i) => [0, 1].map(r => '<circle cx="' + (68 + i * 18) + '" cy="' + (166 + r * 10) + '" r="3" fill="' + (r ? GOLD : ICE) + '"/>').join("")).join("");
    const vu = [0, 1, 2, 3, 4, 5].map(i => '<rect class="ky-vu' + (i % 3 ? " ky-vu" + (i % 3 + 1) : "") + '" x="' + (150 + i * 16) + '" y="118" width="10" height="28" fill="' + (i > 3 ? CANDY : "#4cd964") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1a1416"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#2a2024"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 52 + 4) + '" y="6" width="44" height="40" fill="#3a2c30"/>').join("") +
      '<rect x="40" y="52" width="320" height="96" rx="4" fill="#0e1418" stroke="#5a4a40" stroke-width="5"/>' +
      '<rect x="48" y="60" width="304" height="80" fill="#13232c"/>' +
      '<g transform="translate(250 66)"><rect x="18" y="0" width="16" height="30" rx="8" fill="#c9ced3"/><rect x="24" y="30" width="4" height="40" fill="#777"/><path d="M8 70h36" stroke="#777" stroke-width="3"/><circle cx="26" cy="14" r="22" fill="none" stroke="#333" stroke-width="2" opacity=".7"/></g>' +
      '<rect x="138" y="112" width="104" height="38" rx="3" fill="#0b0b0b"/>' + vu +
      '<g class="ky-on"><rect x="70" y="66" width="64" height="20" rx="3" fill="' + CANDY + '"/><text x="102" y="80" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">ON AIR</text></g>' +
      '<rect x="20" y="150" width="360" height="72" rx="6" fill="#3a3a40"/><rect x="28" y="156" width="344" height="60" rx="4" fill="#26262c"/>' + knobs + faders +
      '<rect x="0" y="222" width="400" height="38" fill="#120d10"/>' +
      '<rect x="24" y="228" width="352" height="24" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="1"/><text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">QUARTER POUND RECORDS · THE NORTHSIDE</text>');
  }

  /* 3. Flip down the head, trunk up and poppin' */
  function kyflip() {
    const car = '<g transform="translate(70 148)">' +
      '<rect x="0" y="20" width="252" height="34" rx="10" fill="' + CANDY + '"/><path d="M6 30h240" stroke="#fff" stroke-width="2" opacity=".35"/><path d="M10 44h232" stroke="#ff8a9a" stroke-width="1.5" opacity=".5"/>' +
      '<rect x="92" y="6" width="96" height="16" rx="3" fill="#3a1a1a"/><path d="M182 20l-14 -22h6l14 22z" fill="#cfe9ff" opacity=".8"/>' +
      '<rect x="104" y="8" width="24" height="12" rx="3" fill="#f2e8d0"/><rect x="136" y="8" width="24" height="12" rx="3" fill="#f2e8d0"/>' +
      '<g class="ky-head"><path d="M66 20q16 -32 54 -32h40v32z" fill="#151515"/></g>' +
      '<g class="ky-trunk"><rect x="2" y="12" width="56" height="9" rx="2" fill="' + CANDY + '" stroke="#000" stroke-width=".8"/><text class="ky-neon" x="30" y="10" text-anchor="middle" ' + font + ' font-size="8" fill="' + ICE + '" transform="rotate(0)">KILLA</text></g>' +
      '<rect x="246" y="30" width="6" height="6" fill="#fff6c2"/><rect x="0" y="32" width="5" height="6" fill="#ff5a5a"/>' +
      '<rect x="18" y="40" width="34" height="12" rx="2" fill="#f2f2f2" stroke="#333" stroke-width=".8"/><text x="35" y="47" text-anchor="middle" ' + font + ' font-size="4.5" fill="#1f4e79">TEXAS</text><text x="35" y="51.5" text-anchor="middle" ' + font + ' font-size="4.5" fill="#111">KILLA</text>' +
      swanga(52, 56) + swanga(206, 56) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kys3)"/>' +
      '<circle cx="342" cy="48" r="22" fill="' + GOLD + '" class="ky-glow"/>' +
      '<g fill="#93a9bb" opacity=".7"><rect x="20" y="96" width="22" height="58"/><rect x="46" y="80" width="18" height="74"/><rect x="68" y="104" width="26" height="50"/></g>' +
      '<path d="M0 150q60 -18 120 -6t130 -4t150 4v16h-400z" fill="#7aa25c"/>' + oak(330, 112, .8) +
      '<rect x="0" y="160" width="400" height="100" fill="#5a5b61"/><path d="M0 236h400" stroke="' + GOLD + '" stroke-width="3"/>' +
      car +
      '<rect x="62" y="14" width="236" height="28" rx="4" fill="#111" opacity=".85"/><text x="180" y="34" text-anchor="middle" ' + font + ' font-size="14" fill="' + CANDY + '">FLIP DOWN THE HEAD</text>',
      sky("kys3", "#5fb4ec", "#dff1fb"));
  }

  /* 4. Sixth Street, Austin, showcase night */
  function kysixth() {
    const front = (x, w, c, win) => '<rect x="' + x + '" y="70" width="' + w + '" height="110" fill="' + c + '"/><rect x="' + x + '" y="66" width="' + w + '" height="8" fill="#3a2a22"/>' +
      [0, 1].map(i => '<rect x="' + (x + 8 + i * (w / 2 - 4)) + '" y="84" width="' + (w / 2 - 16) + '" height="22" fill="' + win + '"/>').join("");
    const neon = (x, y, t, c) => '<text class="ky-neon" x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="11" fill="' + c + '" stroke="' + c + '" stroke-width=".4">' + t + '</text>';
    const hands = Array.from({ length: 12 }, (_, i) => '<g class="ky-hd' + (i % 2 ? " ky-hd2" : "") + '"><rect x="' + (14 + i * 32) + '" y="' + (214 + (i % 3) * 4) + '" width="7" height="22" rx="3" fill="#2a1d22"/><circle cx="' + (17 + i * 32) + '" cy="' + (212 + (i % 3) * 4) + '" r="5" fill="#2a1d22"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kys4)"/>' + stars(26) +
      front(0, 96, "#8a5a3c", "#ffd27a") + front(96, 104, "#6f7a86", "#9be7ff") + front(200, 92, "#a3743e", "#ffd27a") + front(292, 108, "#5e4a6e", "#ffb3d1") +
      neon(48, 126, "LIVE MUSIC", CANDY) + neon(344, 126, "OPEN LATE", ICE) +
      '<rect x="120" y="126" width="160" height="14" fill="#111"/><text x="200" y="137" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">SHOWCASE TONIGHT</text>' +
      '<g class="ky-sw"><path d="M150 140l-30 80h60z" fill="#fff6c2" opacity=".18"/></g><g class="ky-sw ky-sw2"><path d="M250 140l-30 80h60z" fill="#9be7ff" opacity=".16"/></g>' +
      '<rect x="110" y="176" width="180" height="16" fill="#2b2026"/><rect x="104" y="190" width="192" height="8" fill="#1a1216"/>' +
      '<g transform="translate(196 150)"><rect x="2" y="0" width="5" height="26" fill="#777"/><rect x="0" y="-8" width="9" height="12" rx="4" fill="#c9ced3"/></g>' +
      '<rect x="0" y="198" width="400" height="62" fill="#1d1418"/>' + hands +
      '<rect x="12" y="10" width="200" height="22" rx="3" fill="#111" opacity=".9"/><text x="112" y="26" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">SIXTH STREET · AUSTIN</text>',
      sky("kys4", "#0a0a1e", "#33204a"));
  }

  /* 5. Reed Rd and M L King Blvd, NRG Stadium behind */
  function kycorner() {
    const stadium = '<g class="ky-glow"><path d="M150 110q0 -46 110 -46t110 46z" fill="#e9edf2"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (166 + i * 23) + ' 110v-' + (26 + Math.round(16 * Math.sin((i + 1) * Math.PI / 10))) + '" stroke="#b8c2cc" stroke-width="2"/>').join("") +
      '<path d="M160 76q100 -26 200 0" stroke="#c9d3dc" stroke-width="3" fill="none"/><path d="M160 86q100 -24 200 0" stroke="#c9d3dc" stroke-width="2" fill="none"/>' +
      '<rect x="150" y="104" width="220" height="8" fill="#7d1f2b"/></g>';
    const wall = '<rect x="0" y="120" width="400" height="104" fill="#6f4a3c"/>' + Array.from({ length: 10 }, (_, r) => '<path d="M0 ' + (130 + r * 10) + 'h400" stroke="#5a3a2e" stroke-width="1"/>').join("") +
      Array.from({ length: 10 }, (_, r) => Array.from({ length: 10 }, (_, c) => '<path d="M' + (c * 40 + (r % 2) * 20) + ' ' + (120 + r * 10) + 'v10" stroke="#5a3a2e" stroke-width="1"/>').join("")).join("");
    const spray = '<g transform="translate(92 176)"><rect x="0" y="0" width="16" height="34" rx="3" fill="' + CANDY + '"/><rect x="3" y="-6" width="10" height="7" fill="#ccc"/><circle class="ky-sp" cx="8" cy="-10" r="3" fill="' + CANDY + '" opacity=".7"/><circle class="ky-sp ky-sp2" cx="4" cy="-12" r="2.5" fill="' + GOLD + '" opacity=".7"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kys5)"/>' + stars(22) + stadium +
      wall +
      tag("KILLA KYLEON", 128, 174, 33, CANDY, -5) + tag("TEAM RUN IT", 196, 212, 20, GOLD, -3) + tag("BILL", 330, 206, 18, ICE, 4) + spray +
      '<rect x="0" y="224" width="400" height="36" fill="#3a3b40"/><path d="M0 242h400" stroke="#ddd" stroke-width="2" stroke-dasharray="18 14" opacity=".5"/>' +
      '<rect x="28" y="60" width="5" height="164" fill="#6b7178"/>' + sign(6, 52, 104, "Reed Rd") + sign(4, 78, 136, "M L King Blvd"),
      sky("kys5", "#0d0d22", "#3a2846"));
  }

  window.SCENES = { kystation, kystudio, kyflip, kysixth, kycorner };
})();
