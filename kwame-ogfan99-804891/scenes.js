/* Kwame game (NYC map, Queens: South Jamaica). He grew up at 155-54 115th Drive (Queens Chronicle), was born in East Elmhurst, and wore the polka dots.
   1. Laurelton on the LIRR Atlantic Branch, up on the embankment: the platform canopy, the silver train sliding in (Jamaica station, Locust Manor and the subway stops near his block are taken by other games).
   2. August Martin High School on Baisley Blvd, around the corner from his block: the long tan-brick school, the aviation school's little plane on the lawn
      (his 1990 album A Day in the Life is a high school day told as a story).
   3. The Marine Air Terminal at LaGuardia, East Elmhurst, where he was born: the round Art Deco terminal, the band of flying fish, a plane lifting off the bay.
   4. The TV dance line, 1990: Kwame & A New Beginning, the live band, polka dots everywhere (the Ownlee Eue era).
   5. 115th Dr & 155th St: green street signs, the wall tagged KWAME in polka dots, the row houses, a jet dropping toward Kennedy.
   400 x 260 SVGs. No logos, no faces. All scene CSS classes are prefixed "kw". */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kwcars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.kwcar{animation:kwcars 7s linear infinite}.kwcar2{animation-delay:-3.5s}' +
    '@keyframes kwblink{0%,100%{opacity:.25}50%{opacity:1}}.kwbl{animation:kwblink 1.6s ease-in-out infinite}.kwbl2{animation-delay:.5s}.kwbl3{animation-delay:1s}' +
    '@keyframes kwflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.kwflk{animation:kwflick 2.4s infinite}' +
    '@keyframes kwtake{0%{transform:translate(-60px,40px)}100%{transform:translate(460px,-90px)}}.kwplane{animation:kwtake 9s linear infinite}' +
    '@keyframes kwland{0%{transform:translate(460px,-20px)}100%{transform:translate(-80px,50px)}}.kwjet{animation:kwland 10s linear infinite}' +
    '@keyframes kwflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.kwflag{transform-box:fill-box;transform-origin:0 50%;animation:kwflag 1.4s ease-in-out infinite}' +
    '@keyframes kwwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.kwwv{animation:kwwave 3s ease-in-out infinite}' +
    '@keyframes kwbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.kwbob{animation:kwbob .5s ease-in-out infinite}.kwbob2{animation-delay:-.25s}' +
    '@keyframes kwbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.kwbeam{transform-box:view-box;animation:kwbeam 3s ease-in-out infinite}.kwbeam2{animation-delay:-1.5s}' +
    '@keyframes kwdots{from{transform:translateY(0)}to{transform:translateY(40px)}}.kwdots{animation:kwdots 4s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const BLUE = "#4fb3ff", GOLD = "#ffd23f", PINK = "#ff5ea8", CREAM = "#f4ead8", SIGN = "#0f6b3a";
  const blade = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="20" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 14.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const dotPat = (id, bg, dot, s) => '<pattern id="' + id + '" width="' + s + '" height="' + s + '" patternUnits="userSpaceOnUse"><rect width="' + s + '" height="' + s + '" fill="' + bg + '"/><circle cx="' + s / 4 + '" cy="' + s / 4 + '" r="' + s / 7 + '" fill="' + dot + '"/><circle cx="' + 3 * s / 4 + '" cy="' + 3 * s / 4 + '" r="' + s / 7 + '" fill="' + dot + '"/></pattern>';
  const plane = (c, s) => '<g transform="scale(' + s + ')"><path d="M0 10h44q8 0 10 4q-2 4-10 4H6z" fill="' + c + '"/><path d="M18 12l8-12h6l-4 12zM18 16l8 12h6l-4-12z" fill="' + c + '"/><path d="M2 10l-2-8h5l5 8z" fill="' + c + '"/></g>';

  /* 1. Laurelton, LIRR Atlantic Branch: the raised platform, the canopy on steel columns, the black station sign, the silver train with its blue stripe sliding in */
  function laurelton() {
    let win = "";
    for (let x = 22; x < 262; x += 30) win += '<rect x="' + x + '" y="124" width="20" height="18" rx="2" fill="#cfe2f5" opacity=".9"/>';
    let tracks = "";
    for (let x = 0; x < 400; x += 14) tracks += '<rect x="' + x + '" y="206" width="8" height="4" fill="#4a3a2c"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kws1)"/>' +
      '<rect x="0" y="70" width="70" height="90" fill="#5d6a7c"/><rect x="330" y="56" width="70" height="104" fill="#4f5b6c"/><rect x="250" y="84" width="60" height="76" fill="#6b778a"/>' +
      /* canopy */
      '<path d="M0 50h400v12H0z" fill="#d7dade"/><path d="M0 62h400v4H0z" fill="#9aa1aa"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + (x - 3) + '" y="66" width="6" height="104" fill="#3e4f63"/><path d="M' + (x - 24) + ' 50l24 16 24-16" stroke="#3e4f63" stroke-width="3" fill="none"/>').join("") +
      /* sign */
      '<rect x="96" y="74" width="208" height="34" rx="3" fill="#111"/><rect x="96" y="74" width="208" height="3" fill="#fff"/>' +
      '<text x="200" y="97" text-anchor="middle" ' + font + ' font-size="18" fill="#fff">Laurelton</text>' +
      /* train */
      '<g class="anim-train">' +
        '<rect x="4" y="114" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="4" y="150" width="300" height="5" fill="#1f4e9e"/><rect x="4" y="156" width="300" height="2" fill="#6d4ba3"/>' +
        '<rect x="282" y="120" width="18" height="22" rx="2" fill="#cfe2f5"/><circle cx="298" cy="164" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="170" width="400" height="10" fill="#eab308"/><rect x="0" y="180" width="400" height="22" fill="#6d7178"/>' +
      '<rect x="0" y="202" width="400" height="58" fill="#3a3d42"/>' + tracks + '<rect x="0" y="204" width="400" height="2" fill="#9aa1aa"/><rect x="0" y="212" width="400" height="2" fill="#9aa1aa"/>' +
      '<text x="200" y="242" text-anchor="middle" ' + font + ' font-size="11" fill="' + CREAM + '" letter-spacing="3">ATLANTIC BRANCH</text>',
      sky("kws1", "#f2a65a", "#ffe1b8"));
  }

  /* 2. August Martin High School, Baisley Blvd: the long tan-brick school, rows of windows, the flag, the aviation school's little plane on the lawn, a jet overhead */
  function school() {
    let wins = "";
    for (let r = 0; r < 3; r++) for (let x = 40; x < 360; x += 22) if (x < 176 || x > 222) wins += '<rect x="' + x + '" y="' + (84 + r * 28) + '" width="14" height="18" fill="#7fa9c9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kws2)"/>' +
      '<g class="kwjet"><g transform="translate(0,30)">' + plane("#e9eef3", 0.8) + '</g></g>' +
      '<rect x="24" y="70" width="352" height="110" fill="#d8bf92"/>' +
      (() => { let b = ""; for (let y = 76; y < 180; y += 7) b += '<path d="M24 ' + y + 'h352" stroke="#c4a979" stroke-width="1"/>'; return b; })() + wins +
      '<rect x="20" y="64" width="360" height="8" fill="#a68a5c"/>' +
      '<rect x="174" y="56" width="52" height="124" fill="#c9ad7d"/><rect x="186" y="140" width="28" height="40" fill="#2f3e4d"/>' +
      '<text x="200" y="128" text-anchor="middle" ' + font + ' font-size="6.5" fill="#3a2e1c">AUGUST MARTIN</text><text x="200" y="136" text-anchor="middle" ' + font + ' font-size="5.5" fill="#3a2e1c">HIGH SCHOOL</text>' +
      '<rect x="0" y="180" width="400" height="80" fill="#5d9a45"/><rect x="0" y="232" width="400" height="28" fill="#55575c"/>' +
      '<g class="kwcar"><rect x="0" y="240" width="44" height="13" rx="4" fill="' + BLUE + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="34" cy="253" r="4" fill="#111"/></g>' +
      /* small plane on the lawn */
      '<g transform="translate(40,196)"><path d="M0 14h56l8-4v8l-8 4H0z" fill="#f2f2f2" stroke="#666"/><path d="M20 10h22v14H20z" fill="#e23b3b" opacity=".85"/><path d="M4 14l-4-12h8l6 12z" fill="#e23b3b"/><circle cx="18" cy="28" r="3" fill="#222"/><circle cx="46" cy="28" r="3" fill="#222"/></g>' +
      /* flag */
      '<rect x="330" y="120" width="3" height="60" fill="#888"/><g class="kwflag"><rect x="333" y="120" width="30" height="18" fill="#fff"/><rect x="333" y="120" width="30" height="3" fill="#c33"/><rect x="333" y="126" width="30" height="3" fill="#c33"/><rect x="333" y="132" width="30" height="3" fill="#c33"/><rect x="333" y="120" width="12" height="9" fill="#2a3f8f"/></g>' +
      '<text x="200" y="224" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="3">BAISLEY BLVD</text>',
      sky("kws2", "#79b9f0", "#d9efff"));
  }

  /* 3. The Marine Air Terminal, LaGuardia (East Elmhurst): the round buff Art Deco terminal, the band of flying fish, the winged entrance, a plane lifting off the bay */
  function marine() {
    let fish = "";
    for (let x = 96; x < 304; x += 26) fish += '<path d="M' + x + ' 96q8-6 16 0q-8 6-16 0z M' + (x + 16) + ' 96l5-4v8z" fill="#1f4f7a"/>';
    let waves = "";
    for (let x = 0; x < 440; x += 40) waves += '<path d="M' + x + ' 0q10-5 20 0t20 0" stroke="#e6f8ff" stroke-width="2" fill="none" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kws3)"/>' +
      '<g class="kwplane"><g transform="translate(0,60) rotate(-12)">' + plane("#f4f6f8", 1) + '</g></g>' +
      /* rotunda */
      '<rect x="80" y="84" width="240" height="96" fill="#e8d7b0"/>' +
      '<path d="M80 84q120-26 240 0" fill="#d9c69c"/><rect x="80" y="88" width="240" height="16" fill="#cbb688"/>' + fish +
      '<rect x="76" y="80" width="248" height="8" fill="#b89d6c"/>' +
      [96, 122, 278, 304].map(x => '<rect x="' + x + '" y="114" width="12" height="54" fill="#5b7fa0"/>').join("") +
      /* entrance pavilion with wings */
      '<rect x="160" y="108" width="80" height="72" fill="#f0e3c4" stroke="#b89d6c" stroke-width="2"/>' +
      '<path d="M200 118l-34 8 34 4 34-4z" fill="#1f4f7a"/><circle cx="200" cy="124" r="6" fill="' + GOLD + '"/>' +
      '<rect x="182" y="140" width="36" height="40" fill="#2c3a55"/><path d="M182 140h36M200 140v40" stroke="#b89d6c" stroke-width="2"/>' +
      '<rect x="0" y="180" width="400" height="14" fill="#a3a59f"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#2f86c2"/>' +
      '<g transform="translate(0,210)"><g class="kwwv">' + waves + '</g></g><g transform="translate(0,238)"><g class="kwwv">' + waves + '</g></g>' +
      '<text x="200" y="76" text-anchor="middle" ' + font + ' font-size="10" fill="#1f4f7a" letter-spacing="3">MARINE AIR TERMINAL</text>',
      sky("kws3", "#8ccaf2", "#e8f6ff"));
  }

  /* 4. The TV dance line, 1990: the polka-dot backdrop, the live band (drums, keys, bass), spotlights sweeping, dancers bobbing */
  function dance() {
    const dancer = (x, c, cls) => '<g class="kwbob ' + cls + '"><circle cx="' + x + '" cy="176" r="7" fill="#2a1d14"/><rect x="' + (x - 7) + '" y="184" width="14" height="26" rx="5" fill="' + c + '"/><path d="M' + (x - 6) + ' 188l-10-14M' + (x + 6) + ' 188l10-14" stroke="' + c + '" stroke-width="4" stroke-linecap="round"/><path d="M' + (x - 3) + ' 210l-4 18M' + (x + 3) + ' 210l4 18" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#120a24"/>' +
      '<g class="kwdots"><rect x="0" y="-40" width="400" height="200" fill="url(#kwdp)"/></g>' +
      '<rect x="0" y="0" width="400" height="12" fill="#1c1236"/>' +
      '<path class="kwbeam" style="transform-origin:80px 0px" d="M80 0l-40 200h80z" fill="#fff6c2" opacity=".18"/><path class="kwbeam kwbeam2" style="transform-origin:320px 0px" d="M320 0l-40 200h80z" fill="#9fe3ff" opacity=".18"/>' +
      /* stage riser and band */
      '<rect x="40" y="120" width="320" height="40" fill="#2b2140"/><rect x="40" y="118" width="320" height="4" fill="' + GOLD + '"/>' +
      '<circle cx="120" cy="104" r="16" fill="#e8e8e8" stroke="#555" stroke-width="2"/><rect x="104" y="110" width="32" height="10" fill="#c33"/><circle cx="92" cy="96" r="9" fill="' + GOLD + '" opacity=".9"/><path d="M92 96v24" stroke="#888" stroke-width="2"/>' +
      '<rect x="230" y="98" width="70" height="10" rx="2" fill="#222"/>' + (() => { let k = ""; for (let x = 232; x < 298; x += 6) k += '<rect x="' + x + '" y="100" width="5" height="6" fill="#f4f4f4"/>'; return k; })() + '<path d="M240 108v12M290 108v12" stroke="#666" stroke-width="2"/>' +
      '<path d="M170 72l20 46" stroke="#7a4a2a" stroke-width="5" stroke-linecap="round"/><path d="M165 66l10 10" stroke="#333" stroke-width="3"/><ellipse cx="192" cy="116" rx="12" ry="8" fill="#b5651d" transform="rotate(-24 192 116)"/>' +
      '<rect x="0" y="160" width="400" height="100" fill="#3a2f55"/>' +
      (() => { let t = ""; for (let x = 0; x < 400; x += 40) for (let y = 160; y < 260; y += 20) t += '<rect x="' + (x + ((y / 20) % 2 ? 20 : 0)) + '" y="' + y + '" width="20" height="20" fill="#4a3d6b"/>'; return t; })() +
      dancer(70, BLUE, "") + dancer(140, PINK, "kwbob2") + dancer(260, GOLD, "") + dancer(330, "#fff", "kwbob2") +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="4">A NEW BEGINNING</text>',
      dotPat("kwdp", "#1f6fd1", "#ffffff", 28));
  }

  /* 5. 115th Dr & 155th St, South Jamaica: green signs, the polka-dot wall tagged KWAME, attached brick houses with awnings, a jet dropping toward Kennedy */
  function corner() {
    let houses = "";
    for (let i = 0; i < 6; i++) { const x = i * 66; houses += '<rect x="' + x + '" y="78" width="64" height="66" fill="' + (i % 2 ? "#8a4b3a" : "#9c5a44") + '"/><rect x="' + (x + 10) + '" y="92" width="16" height="16" fill="#ffd98a" class="kwbl kwbl' + (i % 3 + 1) + '"/><rect x="' + (x + 38) + '" y="92" width="16" height="16" fill="#2a2f45"/><path d="M' + (x + 6) + ' 86h52l-4-6H' + (x + 10) + 'z" fill="' + (i % 2 ? "#2f6b4f" : "#b33a3a") + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#kws5)"/>' + stars(18) +
      '<g class="kwjet"><g transform="translate(0,26)">' + plane("#dfe4ea", 0.9) + '<circle cx="2" cy="12" r="2" fill="#ff4d4d" class="kwflk"/><circle cx="50" cy="14" r="2.5" fill="#fff6c2"/></g></g>' +
      houses +
      /* polka-dot wall */
      '<rect x="0" y="136" width="400" height="90" fill="url(#kwdp5)"/>' +
      '<rect x="0" y="136" width="400" height="4" fill="#2a2f45"/>' +
      tag("KWAME", 22, 200, 48, GOLD, -5) + tag("NEW BEGINNING", 190, 218, 20, PINK, -3) + tag("K-1 MIL", 250, 172, 24, "#fff", -7) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="kwcar"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + PINK + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<g class="kwcar kwcar2"><rect x="0" y="240" width="38" height="12" rx="4" fill="#e9e9e9"/><circle cx="9" cy="252" r="4" fill="#111"/><circle cx="29" cy="252" r="4" fill="#111"/></g>' +
      '<rect x="358" y="58" width="5" height="170" fill="#3d4b3f"/>' +
      blade(300, 62, 96, "115 Dr") + blade(300, 88, 96, "155 St") +
      '<circle class="kwflk" cx="360" cy="58" r="4" fill="#fff6c2"/>',
      sky("kws5", "#0b1024", "#2c3554") + dotPat("kwdp5", "#1d4f9e", "#e9f2ff", 22));
  }

  window.SCENES = { laurelton: laurelton, school: school, marine: marine, dance: dance, corner: corner };
})();
