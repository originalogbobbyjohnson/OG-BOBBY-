/* Roosevelt / Freeport, Long Island opening scenes for the Chuck D game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:.15}}' +
    '.blink{animation:blink 1.6s steps(1) infinite}' +
    '@keyframes glide{from{transform:translateX(-40px)}to{transform:translateX(440px)}}' +
    '.gull{animation:glide 12s linear infinite}.gull2{animation-delay:-5s}.gull3{animation-delay:-9s}' +
    '@keyframes drive{from{transform:translateX(-120px)}to{transform:translateX(460px)}}' +
    '.car{animation:drive 5s linear infinite}.car2{animation-delay:-2.4s}' +
    '@keyframes back{from{transform:translateX(460px)}to{transform:translateX(-120px)}}' +
    '.carb{animation:back 6s linear infinite}.carb2{animation-delay:-3.1s}' +
    '@keyframes bob{0%,100%{transform:translateY(0) rotate(-1.5deg)}50%{transform:translateY(3px) rotate(1.5deg)}}' +
    '.bob{transform-box:fill-box;transform-origin:50% 100%;animation:bob 3.2s ease-in-out infinite}.bob2{animation-delay:1.3s}.bob3{animation-delay:2.1s}' +
    '@keyframes fall{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(30px,150px) rotate(300deg)}}' +
    '.leaf{transform-box:fill-box;transform-origin:50% 50%;animation:fall 6s linear infinite}.lf2{animation-delay:-2s}.lf3{animation-delay:-4s}.lf4{animation-delay:-1s}' +
    '@keyframes wave{0%,100%{transform:skewY(0) scaleX(1)}50%{transform:skewY(5deg) scaleX(.92)}}' +
    '.wave{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.4s ease-in-out infinite}' +
    '@keyframes fly{0%{transform:translate(-90px,40px) rotate(0)}45%{transform:translate(150px,30px) rotate(-4deg)}100%{transform:translate(480px,-80px) rotate(-12deg)}}' +
    '.plane{animation:fly 9s ease-in infinite}' +
    '@keyframes spin{0%{transform:scaleY(1)}50%{transform:scaleY(.15)}100%{transform:scaleY(1)}}' +
    '.prop{transform-box:fill-box;transform-origin:50% 50%;animation:spin .12s linear infinite}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}' +
    '.pulse{transform-box:fill-box;transform-origin:50% 50%;animation:pulse .5s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  /* graffiti tag: outlined, slightly tilted */
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const gull = (x, y, cls) => '<path class="gull ' + (cls || "") + '" d="M' + x + ' ' + y + 'q5-5 10 0q5-5 10 0" stroke="#f4f4f4" stroke-width="2" fill="none"/>';
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const RED = "#e0262b", WHITE = "#ffffff", AMBER = "#ffb347", LIRR = "#0039a6";

  /* 1. LIRR Babylon Branch pulling into Freeport: an elevated concrete station above Main St */
  function train() {
    let windows = "";
    for (let x = 22; x < 300; x += 44) windows += '<rect x="' + x + '" y="116" width="28" height="18" rx="3" fill="#cfe6ff" opacity=".85"/>';
    let cols = "";
    for (let x = 20; x < 400; x += 76) cols += '<rect x="' + x + '" y="178" width="16" height="52" fill="#9a9a94"/><rect x="' + (x - 4) + '" y="176" width="24" height="6" fill="#b1b1aa"/>';
    let shops = "";
    for (let x = 0; x < 400; x += 66) shops += '<rect x="' + x + '" y="196" width="60" height="34" fill="#2b2f3a"/><rect class="flk ' + (x % 132 ? "flk2" : "") + '" x="' + (x + 8) + '" y="204" width="44" height="14" fill="#ffd98a" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(12) +
      '<circle cx="352" cy="26" r="12" fill="#fff1d6" opacity=".9"/>' + shops +
      /* platform canopy on steel posts */
      '<path d="M0 30h400v8H0z" fill="#56606c"/><path d="M0 38h400v4H0z" fill="#2b3440"/>' +
      '<rect x="40" y="42" width="5" height="64" fill="#2b3440"/><rect x="200" y="42" width="5" height="64" fill="#2b3440"/><rect x="358" y="42" width="5" height="64" fill="#2b3440"/>' +
      '<circle class="flk" cx="120" cy="46" r="3" fill="#ffe7a8"/><circle class="flk flk2" cx="282" cy="46" r="3" fill="#ffe7a8"/>' +
      /* LIRR station sign */
      '<rect x="96" y="50" width="208" height="42" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="76" text-anchor="middle" ' + F + ' font-weight="700" font-size="21" fill="#fff">Freeport</text>' +
      '<text x="104" y="88" ' + F + ' font-size="7" fill="#dbe6f3">BABYLON BRANCH</text>' +
      '<rect x="262" y="80" width="36" height="10" rx="2" fill="' + LIRR + '"/><text x="280" y="88" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#fff">LIRR</text>' +
      /* train slides in on the elevated track: stainless car with a blue band */
      '<g class="anim-train">' +
        '<rect x="8" y="108" width="304" height="54" rx="7" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="140" width="304" height="6" fill="' + LIRR + '"/>' + windows +
        '<path d="M300 112h8q4 0 4 6v20h-12z" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="304" cy="154" r="4" fill="#fff6c2"/>' +
        '<text x="160" y="157" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#334">LIRR · BABYLON</text>' +
      '</g>' +
      /* platform edge and the concrete viaduct */
      '<rect x="0" y="162" width="400" height="4" fill="#e8c547"/>' +
      '<rect x="0" y="166" width="400" height="12" fill="#a9a9a2"/><rect x="0" y="176" width="400" height="3" fill="#6f6f69"/>' + cols +
      /* Main St under the tracks */
      '<rect x="0" y="230" width="400" height="30" fill="#14181d"/><path d="M0 246h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="234" width="46" height="12" rx="4" fill="' + RED + '"/><circle cx="40" cy="240" r="2" fill="#fff6c2"/></g>' +
      '<g class="carb"><rect x="0" y="248" width="46" height="10" rx="4" fill="#d9d9d9"/></g>',
      sky("g1", "#0b1020", "#3a2c48"));
  }

  /* 2. Adelphi University, Garden City: Levermore Hall, red brick with white trim and the white cupola; WBAU on the dial */
  function adelphi() {
    let wins = "";
    for (let x = 92; x < 312; x += 26) if (x < 176 || x > 222) { wins += '<rect x="' + x + '" y="120" width="12" height="18" fill="#f3e9c6" stroke="#fff" stroke-width="1.5"/><rect x="' + x + '" y="156" width="12" height="20" fill="#f3e9c6" stroke="#fff" stroke-width="1.5"/>'; }
    let tree = (x, y, r, c) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="40" fill="#4a3322"/><circle cx="' + x + '" cy="' + (y - 4) + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r / 2) + '" cy="' + (y + 4) + '" r="' + r * .7 + '" fill="' + c + '" opacity=".9"/>';
    const leaf = (x, y, c, cls) => '<path class="leaf ' + cls + '" d="M' + x + ' ' + y + 'q4-5 8 0q-4 5-8 0z" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      /* WBAU radio mast, blinking */
      '<path d="M360 40l-8 150h16z" fill="none" stroke="#c7ccd4" stroke-width="1.5"/><path d="M356 80h8M355 110h10M354 140h12" stroke="#c7ccd4"/>' +
      '<circle class="blink" cx="360" cy="38" r="3.5" fill="#ff3b30"/>' +
      '<rect x="326" y="58" width="64" height="16" rx="3" fill="#111" opacity=".75"/><text x="358" y="70" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="' + AMBER + '">WBAU 90.3</text>' +
      /* cupola and clock */
      '<path d="M200 22l-6 10h12z" fill="#ddd"/><rect x="199" y="12" width="2" height="12" fill="#bbb"/>' +
      '<rect x="186" y="32" width="28" height="30" fill="#f7f5ee" stroke="#cfcac0"/><path d="M190 36v22M196 36v22M204 36v22M210 36v22" stroke="#cfcac0"/>' +
      '<rect x="180" y="62" width="40" height="22" fill="#f7f5ee" stroke="#cfcac0"/><circle cx="200" cy="73" r="8" fill="#fff" stroke="#333" stroke-width="1.2"/>' +
      '<path d="M200 73v-5M200 73l4 2" stroke="#222" stroke-width="1.2"/>' +
      /* roof and brick body */
      '<path d="M72 98l14-14h228l14 14z" fill="#3f4a52"/>' +
      '<rect x="78" y="98" width="244" height="92" fill="#9b3b2a"/>' +
      '<path d="M78 98h244" stroke="#fff" stroke-width="3"/><path d="M78 146h244" stroke="#e9e2d6" stroke-width="2"/>' + wins +
      /* white portico with columns and pediment */
      '<path d="M170 98l30-20 30 20z" fill="#f7f5ee" stroke="#cfcac0"/>' +
      '<rect x="170" y="98" width="60" height="6" fill="#f7f5ee"/>' +
      '<rect x="174" y="104" width="6" height="86" fill="#f7f5ee"/><rect x="190" y="104" width="6" height="86" fill="#f7f5ee"/><rect x="204" y="104" width="6" height="86" fill="#f7f5ee"/><rect x="220" y="104" width="6" height="86" fill="#f7f5ee"/>' +
      '<rect x="190" y="150" width="20" height="40" fill="#3a2418"/>' +
      /* lawn, path, autumn trees */
      '<rect x="0" y="190" width="400" height="70" fill="#3f7a3a"/><path d="M190 190h20l40 70h-100z" fill="#cdbf9e"/>' +
      tree(30, 156, 26, "#d9822b") + tree(60, 170, 18, "#b8461e") + tree(340, 196, 20, "#e0a73a") +
      leaf(36, 140, "#e8942c", "") + leaf(60, 150, "#c4502a", "lf2") + leaf(330, 170, "#e0a73a", "lf3") + leaf(20, 160, "#d97a2b", "lf4"),
      sky("g2", "#7fb3e0", "#d9ecf7"));
  }

  /* 3. Roosevelt Field, 1927: the grass airfield that named the town's mall; a silver monoplane lifts off over the hangar */
  function field() {
    let grass = "";
    for (let x = 0; x < 400; x += 14) grass += '<path d="M' + x + ' 230l3-8 3 8" stroke="#2f5a26" stroke-width="1.5" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="64" cy="170" r="30" fill="#ffd68a" opacity=".85"/>' +
      '<ellipse cx="300" cy="50" rx="50" ry="10" fill="#fff" opacity=".5"/><ellipse cx="120" cy="70" rx="40" ry="8" fill="#fff" opacity=".4"/>' +
      /* hangar with a curved roof */
      '<path d="M210 186v-40q70-40 140 0v40z" fill="#6f7a6a" stroke="#4a5246" stroke-width="2"/>' +
      '<rect x="240" y="152" width="80" height="34" fill="#2b2f2a"/><path d="M240 152v34M260 152v34M280 152v34M300 152v34" stroke="#4a5246"/>' +
      '<rect x="226" y="132" width="108" height="14" fill="#f2ead2"/><text x="280" y="143" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#3a3a3a">ROOSEVELT FIELD</text>' +
      /* windsock */
      '<rect x="370" y="140" width="3" height="50" fill="#ccc"/><g class="wave"><path d="M373 142l22 4v8l-22 4z" fill="#ff7a1a"/><path d="M380 143.3v13.4M388 144.7v10.6" stroke="#fff" stroke-width="2"/></g>' +
      /* field and runway */
      (function () { let f = ""; for (let x = 4; x < 200; x += 12) f += '<rect x="' + x + '" y="176" width="2" height="12" fill="#6b5a40"/>'; return f + '<path d="M0 180h200" stroke="#6b5a40" stroke-width="1.5"/>'; })() +
      (function () { let p = ""; [30, 46, 58, 120, 134, 150].forEach((x, i) => { p += '<circle cx="' + x + '" cy="' + (178 - i % 2 * 2) + '" r="4" fill="#3a3030"/><rect x="' + (x - 4) + '" y="' + (181 - i % 2 * 2) + '" width="8" height="10" rx="3" fill="#3a3030"/>'; }); return p; })() +
      '<rect x="0" y="186" width="400" height="74" fill="#5c8a3e"/><path d="M0 220h400v14H0z" fill="#8a7a55" opacity=".6"/>' + grass +
      /* the silver monoplane taking off */
      '<g class="plane"><g transform="translate(110 170) scale(-1 1)">' +
        '<path d="M0 10q4-8 16-8h44q8 0 10 4l-8 6H6z" fill="#c9ced6" stroke="#6b7280" stroke-width="1.2"/>' +
        '<rect x="10" y="-2" width="50" height="4" rx="2" fill="#aeb4bd" stroke="#6b7280"/>' +
        '<path d="M60 4l10-10h4l-4 12z" fill="#aeb4bd" stroke="#6b7280"/>' +
        '<path d="M14 12l-4 10M24 12l4 10" stroke="#444" stroke-width="1.5"/><circle cx="10" cy="23" r="3" fill="#222"/><circle cx="28" cy="23" r="3" fill="#222"/>' +
        '<rect x="-3" y="4" width="3" height="10" fill="#555"/><rect class="prop" x="-5" y="-4" width="2" height="26" fill="#333"/>' +
      '</g></g>',
      sky("g3", "#f2b27a", "#fbe2bd"));
  }

  /* 4. Freeport's Nautical Mile on Woodcleft Av: fishing boats, shingled seafood shacks, string lights over the canal */
  function mile() {
    let lights = "";
    for (let x = 6; x < 400; x += 18) lights += '<circle class="flk ' + (x % 36 ? "flk2" : "") + '" cx="' + x + '" cy="' + (40 + Math.sin(x / 40) * 6) + '" r="2.5" fill="#ffe08a"/>';
    let shingles = "";
    for (let y = 92; y < 150; y += 8) shingles += '<path d="M0 ' + y + 'h230" stroke="#6f7478" stroke-width="1"/>';
    const boat = (x, y, hull, cab, cls) => '<g class="bob ' + cls + '"><path d="M' + x + ' ' + y + 'h80l-10 18h-62z" fill="' + hull + '" stroke="#333" stroke-width="1"/>' +
      '<rect x="' + (x + 14) + '" y="' + (y - 18) + '" width="30" height="18" fill="' + cab + '" stroke="#333"/><rect x="' + (x + 18) + '" y="' + (y - 14) + '" width="10" height="8" fill="#9fd0ea"/>' +
      '<path d="M' + (x + 56) + ' ' + y + 'v-40M' + (x + 56) + ' ' + (y - 36) + 'l18 30" stroke="#333" stroke-width="1.5" fill="none"/><path d="M' + x + ' ' + (y + 6) + 'h80" stroke="#1f6fb2" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<path d="M0 40q100 14 200 0t200 0" stroke="#333" stroke-width="1" fill="none"/>' + lights +
      /* seafood shacks */
      '<rect x="0" y="86" width="230" height="70" fill="#8d9296"/>' + shingles +
      '<path d="M-6 88l60-26 60 26z" fill="#3c4146"/><path d="M110 88l60-26 66 26z" fill="#3c4146"/>' +
      '<rect x="20" y="104" width="34" height="26" fill="#ffe7a8" opacity=".85"/><rect x="140" y="104" width="34" height="26" fill="#ffe7a8" opacity=".85"/>' +
      '<rect x="60" y="96" width="70" height="20" fill="#c8102e"/><text x="95" y="110" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#fff">CLAMS · CRABS</text>' +
      '<rect x="244" y="70" width="140" height="26" rx="3" fill="#0e4f6e" stroke="#fff" stroke-width="1.5"/><text x="314" y="88" text-anchor="middle" ' + F + ' font-weight="700" font-size="13" fill="#fff">NAUTICAL MILE</text>' +
      '<rect x="252" y="96" width="4" height="60" fill="#5b4a36"/><rect x="372" y="96" width="4" height="60" fill="#5b4a36"/>' +
      /* wooden dock and pilings */
      '<rect x="0" y="156" width="400" height="10" fill="#7a5f42"/>' +
      '<rect x="40" y="156" width="8" height="40" fill="#5b4a36"/><rect x="200" y="156" width="8" height="40" fill="#5b4a36"/><rect x="340" y="156" width="8" height="40" fill="#5b4a36"/>' +
      /* canal water */
      '<rect x="0" y="166" width="400" height="94" fill="#1d4d63"/>' +
      '<path class="shim" d="M20 200h50M150 216h60M290 206h70" stroke="#9fd0ea" stroke-width="2" opacity=".6"/><path class="shim shim2" d="M80 240h60M230 234h50" stroke="#9fd0ea" stroke-width="2" opacity=".6"/>' +
      boat(30, 190, "#f4f4f2", "#e9e4d6", "") + boat(230, 206, "#f4f4f2", "#cfe0ea", "bob2") +
      gull(60, 60, "") + gull(180, 50, "gull2") + gull(300, 58, "gull3"),
      sky("g4", "#2a4a7a", "#f2a65a"));
  }

  /* 5. Nassau Rd and Babylon Tpke in Roosevelt: the wall with the tags, a boombox thumping */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="360" cy="34" r="14" fill="#fff1d6"/>' +
      (function () { let b = '<rect x="16" y="56" width="240" height="164" fill="#2c2a2a"/>'; for (let y = 58; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#3b3636"/>'; return b; })() +
      tag("CHUCK D", 26, 124, 44, WHITE, -7) + tag("PUBLIC ENEMY", 30, 166, 26, RED, -3) + tag("MISTACHUCK", 54, 204, 22, AMBER, -2) +
      /* boombox on the sidewalk */
      '<g transform="translate(212 196)"><rect x="0" y="0" width="70" height="26" rx="4" fill="#222" stroke="#666"/><path d="M14 0q21-14 42 0" stroke="#666" stroke-width="3" fill="none"/>' +
      '<circle class="pulse" cx="16" cy="13" r="9" fill="#444" stroke="#999"/><circle class="pulse" cx="54" cy="13" r="9" fill="#444" stroke="#999"/><rect x="29" y="7" width="12" height="8" fill="' + AMBER + '"/></g>' +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="262" y="88" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">Nassau Rd</text>' +
      '<rect x="254" y="110" width="96" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">Babylon Tpke</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car car2"><rect x="0" y="226" width="50" height="13" rx="4" fill="#3a5f9a"/><circle cx="44" cy="232" r="2" fill="#fff6c2"/></g>',
      sky("g5", "#0d1022", "#3a1e24"));
  }

  window.SCENES = { train, adelphi, field, mile, corner };
})();
