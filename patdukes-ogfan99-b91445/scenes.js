/* Staten Island opening scenes for Pat Dukes' game: St. George on the North Shore. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.4s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.45}50%{transform:translateX(9px);opacity:.95}}' +
    '.shim{animation:shim 3.2s ease-in-out infinite}.shim2{animation-delay:1.4s}' +
    '@keyframes sailR{from{transform:translateX(-200px)}to{transform:translateX(440px)}}' +
    '.sailR{animation:sailR 20s linear infinite;animation-delay:-9s}' +
    '@keyframes shipL{from{transform:translateX(430px)}to{transform:translateX(-200px)}}' +
    '.shipL{animation:shipL 26s linear infinite;animation-delay:-14s}' +
    '@keyframes carR{from{transform:translateX(-30px)}to{transform:translateX(430px)}}' +
    '@keyframes carL{from{transform:translateX(430px)}to{transform:translateX(-30px)}}' +
    '.carR{animation:carR 5s linear infinite}.carL{animation:carL 6s linear infinite}.d1{animation-delay:-1.7s}.d2{animation-delay:-3.4s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}' +
    '.bob{animation:bob 2s ease-in-out infinite}' +
    '@keyframes flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}' +
    '.flap{animation:flap .8s ease-in-out infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes drift{from{transform:translateX(0)}to{transform:translateX(60px)}}' +
    '.drift{animation:drift 9s ease-in-out infinite alternate}' +
    '@keyframes twinkle{0%,100%{opacity:.25}50%{opacity:1}}' +
    '.tw{animation:twinkle 1.6s ease-in-out infinite}.tw2{animation-delay:.5s}.tw3{animation-delay:1.1s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.hand{animation:spin 12s linear infinite;transform-box:view-box}' +
    '@keyframes wave{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}' +
    '.flag{animation:wave 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:left center}' +
    '@keyframes mist{0%{opacity:0;transform:translate(0,0) scale(.6)}30%{opacity:.8}100%{opacity:0;transform:translate(-26px,-10px) scale(1.4)}}' +
    '.mist{animation:mist 1.8s ease-out infinite;transform-box:fill-box;transform-origin:center}.mist2{animation-delay:.6s}.mist3{animation-delay:1.2s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  /* the Staten Island Railway bullet: blue rounded tag with white SIR */
  const sir = (x, y) =>
    '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">SIR</text>';
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GREEN = "#9be15d", ORANGE = "#ff7a1a", GOLD = "#f2c14e";
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="tw' + (i % 3 ? " tw" + (i % 3 + 1) : "") + '" cx="' + ((i * 89 + 13) % 400) + '" cy="' + (6 + (i * 47) % 64) + '" r="' + (i % 4 ? 0.9 : 1.5) + '" fill="#fff"/>'; return s; };
  /* the orange Staten Island ferry, side view facing right, at 0,0, about 160 x 50 at scale 1 */
  const ferry = s => {
    let w = "";
    for (let x = 20; x < 140; x += 9) w += '<rect x="' + x + '" y="19" width="5" height="7" fill="#1b2633"/>';
    for (let x = 44; x < 116; x += 9) w += '<rect x="' + x + '" y="6" width="5" height="5" fill="#1b2633"/>';
    return '<g transform="scale(' + s + ')">' +
      '<path d="M0 30h160l-12 18H12z" fill="' + ORANGE + '" stroke="#6e300a" stroke-width="1.5"/>' +
      '<path d="M4 36h152" stroke="#fff" stroke-width="2"/>' +
      '<rect x="14" y="14" width="132" height="16" fill="' + ORANGE + '" stroke="#6e300a" stroke-width="1.5"/>' +
      '<rect x="38" y="2" width="84" height="12" fill="' + ORANGE + '" stroke="#6e300a" stroke-width="1.5"/>' + w +
      '<rect x="62" y="-10" width="8" height="12" fill="#f4f4f4" stroke="#6e300a"/><rect x="90" y="-10" width="8" height="12" fill="#f4f4f4" stroke="#6e300a"/>' +
      '<text x="80" y="45" text-anchor="middle" ' + FONT + ' font-size="6" fill="#fff">STATEN ISLAND</text></g>';
  };
  const gull = (x, y) => '<g transform="translate(' + x + ' ' + y + ')"><path class="flap" d="M0 0q5-6 10 0q5-6 10 0" stroke="#f4f4f4" stroke-width="2" fill="none"/></g>';

  /* 1. St. George: the SIR train pulls into the terminal; the harbor and a ferry slip through the big glass wall */
  function station() {
    let windows = "";
    for (let x = 30; x < 290; x += 40) windows += '<rect x="' + x + '" y="136" width="26" height="20" rx="3" fill="#cfe6ff" opacity=".9"/>';
    let mull = "";
    for (let x = 0; x <= 400; x += 40) mull += '<rect x="' + (x - 2) + '" y="0" width="4" height="116" fill="#2b333e"/>';
    return svg(
      '<rect width="400" height="260" fill="#161c24"/>' +
      '<rect x="0" y="0" width="400" height="116" fill="url(#s1)"/>' +
      /* Manhattan far off across the harbor */
      '<path d="M210 86h10v-14h8v-8h6v22h10v-30h4l3-10 3 10h4v30h8v-18h10v18h12v-12h8v12h16v6H210z" fill="#2f3b58"/>' +
      '<rect x="0" y="86" width="400" height="30" fill="#2a5a7e"/>' +
      '<g class="sailR"><g transform="translate(0 72)">' + ferry(0.5) + '</g></g>' +
      '<path class="shim" d="M20 104h44M280 110h56" stroke="#ffcf6b" stroke-width="2"/>' + mull +
      '<rect x="0" y="0" width="400" height="8" fill="#2b333e"/><rect x="0" y="44" width="400" height="3" fill="#2b333e"/>' +
      /* black station sign */
      '<rect x="96" y="14" width="208" height="30" rx="4" fill="#111"/><rect x="96" y="14" width="208" height="4" fill="#fff"/>' +
      '<text x="108" y="37" ' + FONT + ' font-size="15" fill="#fff">St. George</text>' + sir(278, 30) +
      '<rect x="0" y="116" width="400" height="74" fill="#0e131a"/>' +
      /* the SIR car: stainless with the blue band */
      '<g class="anim-train">' +
        '<rect x="10" y="124" width="300" height="58" rx="8" fill="#c7ccd4" stroke="#69707c" stroke-width="2"/>' +
        '<rect x="10" y="162" width="300" height="6" fill="#0039a6"/>' + windows +
        '<rect x="294" y="134" width="12" height="24" rx="2" fill="#cfe6ff" opacity=".9"/>' +
        '<circle cx="302" cy="174" r="4" fill="#fff6c2"/>' + sir(262, 172) +
      '</g>' +
      '<rect x="0" y="182" width="400" height="9" fill="#eab308"/>' +
      '<rect x="0" y="191" width="400" height="69" fill="#1b222b"/>' +
      tag("PAT DUKES", 22, 242, 30, GREEN, -5) + tag("HORRIBLE NATURE", 196, 238, 22, GOLD, -3),
      sky("s1", "#26365f", "#e9925e"));
  }

  /* 2. The orange ferry crossing the harbor at sunset, the statue and lower Manhattan behind, gulls overhead */
  function ferryride() {
    let city = "";
    [[0, 12, 28], [14, 10, 42], [26, 16, 24], [44, 12, 56], [58, 18, 34], [78, 10, 48], [90, 14, 30], [106, 18, 44], [126, 12, 30], [140, 16, 52], [158, 12, 26]].forEach(b =>
      city += '<rect x="' + (170 + b[0]) + '" y="' + (104 - b[2]) + '" width="' + b[1] + '" height="' + b[2] + '" fill="#41406a"/>');
    /* the tall tower with its spire */
    city += '<path d="M226 104V30l7-12 7 12v74z" fill="#41406a"/><rect x="232" y="2" width="2" height="16" fill="#41406a"/>';
    let lit = "";
    for (let i = 0; i < 18; i++) lit += '<rect class="tw' + (i % 3 ? " tw" + (i % 3 + 1) : "") + '" x="' + (174 + (i * 37) % 160) + '" y="' + (62 + (i * 13) % 36) + '" width="2" height="3" fill="#ffd98a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' +
      '<circle cx="96" cy="80" r="26" fill="#ffb35a" opacity=".95"/>' + city + lit +
      /* the statue far off, copper green */
      '<rect x="58" y="96" width="24" height="8" fill="#4f8f80"/><path d="M64 96v-20l3-4v-9l3-6 3 6v9l3 4v20z" fill="#5fae9a"/><path d="M73 60l3-12" stroke="#5fae9a" stroke-width="2.5"/><circle cx="76" cy="47" r="2.5" fill="#ffd36b"/>' +
      '<rect x="0" y="104" width="400" height="156" fill="#2c5c84"/>' +
      '<path class="shim" d="M14 124h64M300 120h64M50 224h90M250 240h100" stroke="#ffd7a0" stroke-width="2"/>' +
      '<path class="shim shim2" d="M150 206h50M320 200h44M40 150h40" stroke="#ffd7a0" stroke-width="2"/>' +
      '<g class="sailR"><g class="bob"><g transform="translate(0 138)">' + ferry(1.1) + '</g><path d="M8 196q80 6 170 0" stroke="#e6f2fa" stroke-width="3" fill="none" opacity=".7"/></g></g>' +
      '<g class="drift">' + gull(280, 40) + gull(312, 58) + gull(250, 66) + '</g>' +
      tag("FREE RIDE", 236, 250, 26, ORANGE, -4),
      sky("s2", "#3d3474", "#ffae78"));
  }

  /* 3. The Verrazzano from the Staten Island side at night: the gray towers, the lit cables, Brooklyn across the Narrows, a ship sliding under */
  function narrows() {
    const tower = x =>
      '<rect x="' + (x - 9) + '" y="34" width="6" height="150" fill="#a9b3b8"/><rect x="' + (x + 3) + '" y="34" width="6" height="150" fill="#a9b3b8"/>' +
      '<rect x="' + (x - 9) + '" y="34" width="18" height="6" fill="#a9b3b8"/><rect x="' + (x - 9) + '" y="88" width="18" height="5" fill="#a9b3b8"/><rect x="' + (x - 9) + '" y="140" width="18" height="5" fill="#a9b3b8"/>' +
      '<circle class="tw" cx="' + x + '" cy="30" r="2.5" fill="#ff4d4d"/>';
    let lights = "";
    for (let i = 0; i <= 26; i++) {
      const t = i / 26, x = 70 + t * 250;
      const y = 40 + 92 * (1 - Math.pow(2 * t - 1, 2)) * 1;
      lights += '<circle class="tw' + (i % 3 ? " tw" + (i % 3 + 1) : "") + '" cx="' + x.toFixed(1) + '" cy="' + (y + 0).toFixed(1) + '" r="1.6" fill="#fff4c4"/>';
    }
    let hangers = "";
    for (let x = 80; x < 320; x += 12) { const t = (x - 70) / 250; const y = 40 + 92 * (1 - Math.pow(2 * t - 1, 2)); hangers += '<path d="M' + x + ' ' + y.toFixed(1) + 'V150" stroke="#8b979d" stroke-width=".6"/>'; }
    let brooklyn = "";
    [[0, 10, 10], [12, 14, 16], [28, 8, 12], [38, 12, 20], [52, 16, 14], [70, 10, 22], [82, 14, 12], [98, 12, 18]].forEach(b => brooklyn += '<rect x="' + (300 + b[0]) + '" y="' + (176 - b[2]) + '" width="' + b[1] + '" height="' + b[2] + '" fill="#1d2b44"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' + stars(26) +
      '<circle cx="30" cy="40" r="13" fill="#f4efd8"/><circle cx="36" cy="36" r="11" fill="#141c38"/>' +
      brooklyn + '<rect x="290" y="174" width="110" height="6" fill="#1a273d"/>' +
      '<rect x="0" y="176" width="400" height="84" fill="#122640"/>' +
      '<path class="shim" d="M120 196h50M230 204h60M40 216h40" stroke="#ffe6a6" stroke-width="1.6"/>' +
      /* main cables from tower to tower and down to the shores */
      '<path d="M70 40Q195 224 320 40" stroke="#c9d1d4" stroke-width="2" fill="none"/>' +
      '<path d="M-20 150Q30 100 70 40M320 40Q370 100 420 150" stroke="#c9d1d4" stroke-width="2" fill="none"/>' + hangers + lights +
      tower(70) + tower(320) +
      /* the deck with cars */
      '<rect x="-10" y="148" width="420" height="8" fill="#7f8b91"/><rect x="-10" y="156" width="420" height="3" fill="#56616a"/>' +
      '<g class="carR"><rect x="0" y="144" width="12" height="5" rx="2" fill="#ffe08a"/></g><g class="carR d1"><rect x="0" y="144" width="12" height="5" rx="2" fill="#ffe08a"/></g>' +
      '<g class="carL d2"><rect x="0" y="144" width="12" height="5" rx="2" fill="#ff6b6b"/></g>' +
      /* a cargo ship going under */
      '<g class="shipL"><path d="M0 188h90l-8 12H6z" fill="#3b2a2a"/><rect x="10" y="176" width="16" height="12" fill="#c2452d"/><rect x="28" y="178" width="16" height="10" fill="#2d6bc2"/><rect x="46" y="176" width="16" height="12" fill="#e0a526"/><rect x="70" y="170" width="12" height="18" fill="#e9e9e9"/><circle cx="76" cy="168" r="1.6" fill="#fff4c4" class="tw"/></g>' +
      /* Staten Island shore in front: the old stone fort wall and the railing */
      '<path d="M0 214h400v46H0z" fill="#20303f"/>' +
      '<rect x="0" y="206" width="170" height="20" fill="#8c8678"/>' +
      (function () { let b = ""; for (let x = 0; x < 170; x += 17) b += '<path d="M' + x + ' 206v20M' + x + ' 216h17" stroke="#6b665b" stroke-width="1"/>'; return b; })() +
      '<path d="M170 222h230" stroke="#c9d1d4" stroke-width="2"/><path d="M170 232h230" stroke="#c9d1d4" stroke-width="1.5"/>' +
      (function () { let p = ""; for (let x = 180; x < 400; x += 28) p += '<rect x="' + x + '" y="220" width="3" height="16" fill="#c9d1d4"/>'; return p; })() +
      tag("STATEN ISLAND BOY", 186, 254, 20, GREEN, -4) + tag("333", 20, 252, 24, GOLD, -6),
      sky("s3", "#0b1230", "#2b3c66"));
  }

  /* 4. St. George: Borough Hall's brick clock tower over Richmond Terrace, flag waving, traffic rolling by */
  function boro() {
    let win = "";
    for (let r = 0; r < 3; r++) for (let x = 96; x < 300; x += 22) if (x < 176 || x > 214) win += '<rect x="' + x + '" y="' + (128 + r * 26) + '" width="10" height="16" rx="1" fill="' + (r === 2 ? "#ffe3a0" : "#f3d58a") + '" class="' + ((x + r) % 3 ? "" : "flk") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' +
      '<circle cx="330" cy="54" r="22" fill="#ffe1a6" opacity=".9"/>' +
      /* the hill and trees */
      '<path d="M0 120q60-20 120-8t140 0t140-10V200H0z" fill="#2c4a34"/>' +
      '<circle cx="40" cy="146" r="22" fill="#356b3e"/><circle cx="66" cy="150" r="16" fill="#3e7a48"/><circle cx="352" cy="148" r="22" fill="#356b3e"/><circle cx="376" cy="154" r="16" fill="#3e7a48"/>' +
      /* Borough Hall: red brick with pale stone trim and a slate mansard */
      '<rect x="88" y="116" width="224" height="84" fill="#9a4a32"/>' +
      '<rect x="88" y="116" width="224" height="5" fill="#e9dcc0"/><rect x="88" y="150" width="224" height="3" fill="#e9dcc0"/><rect x="88" y="176" width="224" height="3" fill="#e9dcc0"/>' +
      '<path d="M84 116l10-14h212l10 14z" fill="#4a5560"/>' + win +
      /* the clock tower */
      '<rect x="178" y="40" width="44" height="160" fill="#a5543a"/>' +
      '<rect x="178" y="40" width="44" height="4" fill="#e9dcc0"/><rect x="178" y="100" width="44" height="4" fill="#e9dcc0"/>' +
      '<path d="M174 40l26-28 26 28z" fill="#4a5560"/><rect x="198" y="0" width="4" height="14" fill="#4a5560"/>' +
      '<circle cx="200" cy="70" r="15" fill="#f6efd9" stroke="#e9dcc0" stroke-width="3"/>' +
      '<path d="M200 70v-9" stroke="#222" stroke-width="2.2" stroke-linecap="round"/><path class="hand" style="transform-origin:200px 70px" d="M200 70v-12" stroke="#222" stroke-width="1.4" stroke-linecap="round"/>' +
      '<rect x="190" y="160" width="20" height="40" rx="10" fill="#3a1d14"/>' +
      '<rect x="186" y="112" width="28" height="22" rx="2" fill="#f3d58a" class="flk flk2"/>' +
      /* flag on the tower */
      '<rect x="221" y="2" width="2" height="26" fill="#ddd"/><g class="flag"><rect x="223" y="3" width="22" height="13" fill="#f4f4f4"/><path d="M223 4h22M223 8.3h22M223 12.6h22" stroke="#c8323a" stroke-width="1.8"/><path d="M223 16h22" stroke="#c8323a" stroke-width="1"/><rect x="223" y="3" width="9" height="7" fill="#1f3a8a"/></g>' +
      /* Richmond Terrace with cars */
      '<rect x="0" y="200" width="400" height="60" fill="#2a2e35"/><path d="M0 230h400" stroke="#e6c35c" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="carR"><rect x="0" y="208" width="34" height="12" rx="4" fill="' + GREEN + '"/><circle cx="8" cy="221" r="4" fill="#111"/><circle cx="26" cy="221" r="4" fill="#111"/></g>' +
      '<g class="carL d1"><rect x="0" y="238" width="36" height="12" rx="4" fill="#f4f4f4"/><circle cx="8" cy="251" r="4" fill="#111"/><circle cx="28" cy="251" r="4" fill="#111"/></g>' +
      tag("ST. GEORGE", 236, 258, 22, GOLD, -3),
      sky("s4", "#2e4a7a", "#f2b880"));
  }

  /* 5. The corner of Richmond Terrace and Wall St in St. George, brick wall tagged up */
  function corner() {
    let bricks = "";
    for (let y = 30; y < 200; y += 14) for (let x = (y / 14) % 2 ? -14 : 0; x < 400; x += 28) bricks += '<rect x="' + x + '" y="' + y + '" width="26" height="12" fill="#7d3f2c"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(16) +
      '<rect x="0" y="28" width="400" height="172" fill="#5e2e20"/>' + bricks +
      /* graffiti on the wall */
      tag("PAT DUKES", 70, 120, 46, GREEN, -6) +
      tag("WOWLLL PACINO", 150, 160, 24, GOLD, -4) +
      tag("INCITE 4EVER", 30, 186, 20, ORANGE, -3) +
      tag("HN", 226, 192, 26, "#f4f4f4", 6) +
      /* spray can with mist */
      '<g transform="translate(340 150)"><rect x="0" y="0" width="16" height="34" rx="3" fill="' + GREEN + '" stroke="#111" stroke-width="1.5"/><rect x="4" y="-6" width="8" height="6" fill="#ddd" stroke="#111"/></g>' +
      '<circle class="mist" cx="334" cy="142" r="6" fill="' + GREEN + '" opacity=".6"/><circle class="mist mist2" cx="332" cy="144" r="5" fill="' + GREEN + '" opacity=".6"/><circle class="mist mist3" cx="336" cy="140" r="4" fill="' + GREEN + '" opacity=".6"/>' +
      /* sidewalk */
      '<rect x="0" y="200" width="400" height="60" fill="#3a3d44"/><rect x="0" y="200" width="400" height="5" fill="#8a8d94"/>' +
      /* street light */
      '<rect x="40" y="20" width="5" height="182" fill="#2f4a3a"/><path d="M42 22h30" stroke="#2f4a3a" stroke-width="5"/><ellipse cx="74" cy="26" rx="10" ry="4" fill="#ffeaa8" class="flk"/>' +
      /* green street signs */
      '<rect x="374" y="10" width="5" height="192" fill="#55606b"/>' +
      '<rect x="296" y="12" width="96" height="22" rx="3" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/><text x="344" y="28" text-anchor="middle" ' + FONT + ' font-size="13" fill="#fff">Wall St</text>' +
      '<rect x="262" y="38" width="132" height="22" rx="3" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/><text x="328" y="54" text-anchor="middle" ' + FONT + ' font-size="12" fill="#fff">Richmond Ter</text>' +
      /* fire hydrant */
      '<g transform="translate(150 208)"><rect x="0" y="6" width="16" height="22" rx="3" fill="#d9a21b"/><rect x="-4" y="12" width="24" height="6" rx="2" fill="#d9a21b"/><path d="M0 6q8-10 16 0z" fill="#d9a21b"/></g>',
      sky("s5", "#0d1022", "#24293f"));
  }

  window.SCENES = { station, ferryride, narrows, boro, corner };
})();
