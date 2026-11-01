/* Staten Island opening scenes for Remedy's game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes sail{from{transform:translateX(-90px)}to{transform:translateX(470px)}}' +
    '.sail{animation:sail 18s linear infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}' +
    '.bob{animation:bob 1.4s ease-in-out infinite}.bob2{animation-delay:-.7s}' +
    '@keyframes spin{from{transform:translateX(0)}to{transform:translateX(-120px)}}' +
    '.ride{animation:spin 4s linear infinite}' +
    '@keyframes buzz{0%{transform:translate(0,0)}25%{transform:translate(14px,-10px)}50%{transform:translate(26px,4px)}75%{transform:translate(10px,12px)}100%{transform:translate(0,0)}}' +
    '.bee{animation:buzz 2.4s ease-in-out infinite}.b2{animation-delay:-.6s;animation-duration:2s}.b3{animation-delay:-1.2s;animation-duration:2.8s}.b4{animation-delay:-1.8s}' +
    '@keyframes wave{0%,100%{transform:skewX(0)}50%{transform:skewX(-12deg)}}' +
    '.flag{animation:wave 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:left}' +
    '@keyframes drip{0%{transform:scaleY(0)}60%,100%{transform:scaleY(1)}}' +
    '.drip{animation:drip 3s ease-out infinite;transform-box:fill-box;transform-origin:top}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const sir = (x, y) =>
    '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">SIR</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#f2c14e", RED = "#e0263a", HONEY = "#ffb42a";
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';

  /* 1. St. George: end of the line, the SIR rolling into the terminal at night, an orange ferry in the slip through the glass */
  function station() {
    let windows = "";
    for (let x = 22; x < 290; x += 44) windows += '<rect x="' + x + '" y="134" width="28" height="20" rx="3" fill="#fff4c9" opacity=".9"/>';
    let mullions = "";
    for (let x = 0; x <= 400; x += 40) mullions += '<path d="M' + x + ' 20v80" stroke="#55606c" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' +
      /* the terminal glass wall onto the harbor, a ferry waiting in the slip */
      '<rect x="0" y="20" width="400" height="80" fill="#132241"/>' + stars(10) +
      '<rect x="0" y="78" width="400" height="22" fill="#0f2c48"/>' +
      '<g transform="translate(230 58)"><path d="M0 22h130l-10 12H10z" fill="#f47b20"/><rect x="16" y="10" width="98" height="12" fill="#f47b20"/><rect x="34" y="2" width="62" height="8" fill="#f47b20"/>' +
      '<path d="M20 15h90" stroke="#fff4c9" stroke-width="3" stroke-dasharray="6 4" class="flk"/><rect x="60" y="-8" width="8" height="10" fill="#333"/></g>' +
      '<path class="shim" d="M20 92h50M150 96h60" stroke="#ffcf6b" stroke-width="2"/>' + mullions +
      '<rect x="0" y="16" width="400" height="6" fill="#8b96a3"/><rect x="0" y="100" width="400" height="6" fill="#8b96a3"/>' +
      /* black station sign */
      '<rect x="100" y="34" width="190" height="32" rx="4" fill="#111"/><rect x="100" y="34" width="190" height="4" fill="#fff"/>' +
      '<text x="112" y="58" ' + FONT + ' font-size="15" fill="#fff">St. George</text>' + sir(262, 51) +
      /* the SIR car: stainless with the blue band */
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="58" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="160" width="300" height="6" fill="#0039a6"/>' + windows +
        '<circle cx="300" cy="172" r="4" fill="#fff6c2"/>' + sir(262, 172) +
      '</g>' +
      '<rect x="0" y="106" width="400" height="16" fill="#2a3038"/>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1c232c"/>' +
      tag("SHAOLIN", 18, 240, 28, GOLD, -4) + tag("CODE RED", 236, 242, 28, RED, -7),
      sky("g1", "#0a1024", "#1f2a44"));
  }

  /* 2. Snug Harbor's Temple Row: the white Greek Revival halls with their columns, the dome on the middle one, the Kill Van Kull behind */
  function snug() {
    const hall = (x, w, cols, dome) => {
      let s = '<rect x="' + x + '" y="112" width="' + w + '" height="78" fill="#f3efe4" stroke="#b8b09c" stroke-width="1.5"/>';
      const pw = Math.min(w - 16, cols * 14 + 8), px = x + (w - pw) / 2;
      s += '<path d="M' + (px - 4) + ' 112L' + (x + w / 2) + ' ' + (dome ? 92 : 96) + 'L' + (px + pw + 4) + ' 112z" fill="#f7f4ec" stroke="#b8b09c" stroke-width="1.5"/>';
      for (let i = 0; i < cols; i++) { const cx = px + 6 + i * ((pw - 12) / (cols - 1)); s += '<rect x="' + (cx - 3) + '" y="114" width="6" height="70" fill="#fffdf6" stroke="#cfc8b4" stroke-width="1"/>'; }
      s += '<rect x="' + (px - 4) + '" y="184" width="' + (pw + 8) + '" height="6" fill="#ddd6c4"/>';
      for (let wx = x + 6; wx < x + w - 10; wx += 16) if (wx < px - 8 || wx > px + pw + 4) s += '<rect x="' + wx + '" y="124" width="8" height="14" fill="#6c7a86"/><rect x="' + wx + '" y="150" width="8" height="14" fill="#6c7a86"/>';
      if (dome) s += '<rect x="' + (x + w / 2 - 18) + '" y="72" width="36" height="20" fill="#f3efe4" stroke="#b8b09c"/><path d="M' + (x + w / 2 - 20) + ' 72a20 18 0 0 1 40 0z" fill="#c9cfd4" stroke="#8a929a"/><rect x="' + (x + w / 2 - 1.5) + '" y="44" width="3" height="12" fill="#8a929a"/>';
      return s;
    };
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<rect x="0" y="96" width="400" height="20" fill="#4f7fa3"/>' +
      '<g class="sail"><path d="M0 104h60l-6 6H6z" fill="#c0392b"/><rect x="10" y="96" width="34" height="8" fill="#e8e8e8"/></g>' +
      '<path class="shim" d="M40 108h50M240 104h70" stroke="#e6f2fb" stroke-width="2"/>' +
      /* the lawn */
      '<rect x="0" y="186" width="400" height="74" fill="#5e9a48"/>' +
      hall(2, 72, 4, false) + hall(80, 72, 4, false) + hall(158, 84, 6, true) + hall(248, 72, 4, false) + hall(326, 72, 4, false) +
      /* path and trees */
      '<path d="M170 260l20-70h20l20 70z" fill="#d9cfb2"/>' +
      '<circle cx="110" cy="200" r="16" fill="#3f7a35"/><circle cx="300" cy="204" r="14" fill="#3f7a35"/><rect x="108" y="206" width="4" height="16" fill="#5a3a22"/><rect x="298" y="210" width="4" height="14" fill="#5a3a22"/>' +
      tag("GENUINE ARTICLE", 16, 248, 24, GOLD, -3),
      sky("g2", "#7fb5e0", "#f5e3bd"));
  }

  /* 3. Willowbrook Park: the Carousel for All Children, striped canopy, horses going up and down */
  function carousel() {
    let stripes = "";
    for (let i = 0; i < 12; i++) stripes += '<path d="M200 58L' + (56 + i * 24) + ' 108h24z" fill="' + (i % 2 ? "#f4f0e6" : RED) + '"/>';
    let bulbs = "";
    for (let x = 64; x <= 340; x += 14) bulbs += '<circle class="flk' + (x % 28 ? " flk2" : "") + '" cx="' + x + '" cy="114" r="2.6" fill="#fff1a8"/>';
    const horse = (x, c, cls) => '<g class="bob ' + cls + '"><rect x="' + (x + 12) + '" y="118" width="2" height="62" fill="' + GOLD + '"/>' +
      '<path d="M' + x + ' 160q4-12 18-12h8l6-10 6 4-4 10q0 10-8 12h-20z" fill="' + c + '" stroke="#5a4636" stroke-width="1.5"/>' +
      '<path d="M' + (x + 2) + ' 166l-4 12M' + (x + 24) + ' 166l4 12" stroke="' + c + '" stroke-width="3"/><path d="M' + (x + 8) + ' 150h10" stroke="' + RED + '" stroke-width="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="40" cy="190" r="40" fill="#4f8a3a"/><circle cx="370" cy="186" r="44" fill="#4f8a3a"/>' +
      /* the round house */
      '<rect x="60" y="108" width="280" height="90" fill="#2a1d3a"/>' +
      '<g clip-path="url(#cl3)"><g class="ride">' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => horse(70 + i * 60, ["#f4f0e6", "#d7a76a", "#9ac7e8"][i % 3], i % 2 ? "bob2" : "")).join("") + '</g></g>' +
      '<rect x="56" y="104" width="288" height="10" fill="' + GOLD + '"/>' + stripes + bulbs +
      '<rect x="196" y="40" width="8" height="20" fill="' + GOLD + '"/><path class="flag" d="M204 40h18v10h-18z" fill="' + RED + '"/>' +
      '<rect x="52" y="196" width="296" height="10" fill="#8a6a4a"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#6aa04f"/>' +
      tag("WILLOWBROOK", 18, 244, 26, GOLD, -3),
      sky("g3", "#8cc3ea", "#fbe7c0") + '<clipPath id="cl3"><rect x="60" y="108" width="280" height="90"/></clipPath>');
  }

  /* 4. The Swarm: Killa Bee hives in a North Shore garden at golden hour, the bees pouring out */
  function swarm() {
    const hive = (x, y) => '<rect x="' + x + '" y="' + y + '" width="54" height="16" fill="#f2d15a" stroke="#7a5a12" stroke-width="1.5"/>' +
      '<rect x="' + x + '" y="' + (y + 16) + '" width="54" height="16" fill="#eab308" stroke="#7a5a12" stroke-width="1.5"/>' +
      '<rect x="' + x + '" y="' + (y + 32) + '" width="54" height="16" fill="#f2d15a" stroke="#7a5a12" stroke-width="1.5"/>' +
      '<rect x="' + (x - 4) + '" y="' + (y - 6) + '" width="62" height="7" fill="#e9e3d0" stroke="#7a5a12" stroke-width="1.5"/>' +
      '<rect x="' + (x + 20) + '" y="' + (y + 44) + '" width="14" height="3" fill="#2b1d08"/><rect x="' + (x - 2) + '" y="' + (y + 48) + '" width="58" height="6" fill="#6a4a2a"/>';
    const bee = (x, y, cls) => '<g class="bee ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.4" fill="#ffd21a"/><path d="M' + (x - 1.5) + ' ' + (y - 3) + 'v6M' + (x + 1.5) + ' ' + (y - 3) + 'v6" stroke="#111" stroke-width="1.4"/>' +
      '<ellipse cx="' + (x - 1) + '" cy="' + (y - 4.5) + '" rx="3" ry="2" fill="#e6f6ff" opacity=".85"/></g>';
    let bees = "";
    [[90, 140], [120, 110], [150, 130], [180, 96], [210, 120], [240, 90], [270, 112], [300, 80], [330, 104], [200, 70], [140, 86], [260, 60]].forEach((b, i) => bees += bee(b[0], b[1], ["", "b2", "b3", "b4"][i % 4]));
    let flowers = "";
    for (let x = 6; x < 400; x += 18) flowers += '<path d="M' + x + ' 230v-' + (14 + (x * 7) % 12) + '" stroke="#3d6b2c" stroke-width="2"/><circle cx="' + x + '" cy="' + (230 - 14 - (x * 7) % 12) + '" r="4" fill="' + ["#ffd34d", "#ff8a5b", "#f4f0e6", "#c9a4ff"][x % 4] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<circle cx="330" cy="70" r="26" fill="#ffd27a" opacity=".9"/>' +
      '<rect x="0" y="150" width="400" height="16" fill="#3a6f94"/>' +
      /* the Bayonne side cranes far off across the Kill */
      '<path d="M40 150v-30h20v6h-14v24M300 150v-36h26v6h-20v30" stroke="#6a5a6a" stroke-width="3" fill="none"/>' +
      '<rect x="0" y="166" width="400" height="94" fill="#5a8a3a"/>' +
      hive(60, 168) + hive(150, 172) + hive(240, 168) + flowers + bees +
      tag("KILLA BEES", 18, 252, 28, GOLD, -4),
      sky("g4", "#f2a65a", "#ffe2a8"));
  }

  /* 5. New Dorp Ln and Hylan Blvd, down from his old high school: green signs, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
      (function () { let b = '<rect x="16" y="60" width="240" height="160" fill="#3a2a24"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + Math.max(16, x) + '" y="' + y + '" width="' + (x < 16 ? 22 : 28) + '" height="10" fill="#4a362e"/>'; return b; })() +
      tag("REMEDY", 30, 132, 50, GOLD, -7) + tag("CODE RED", 40, 176, 28, RED, -3) + tag("SHAOLIN", 54, 208, 22, "#f4f0e6", -2) +
      '<rect class="drip" x="70" y="134" width="3" height="16" fill="' + GOLD + '"/><rect class="drip" x="150" y="128" width="3" height="20" fill="' + GOLD + '" style="animation-delay:-1s"/>' +
      /* a little bee painted by the piece */
      '<ellipse cx="226" cy="196" rx="12" ry="8" fill="#ffd21a" stroke="#000" stroke-width="2"/><path d="M222 189v14M230 189v14" stroke="#111" stroke-width="3"/><ellipse cx="222" cy="185" rx="7" ry="4" fill="#e6f6ff" stroke="#000"/>' +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="262" y="88" width="84" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="304" y="101" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">New Dorp Ln</text>' +
      '<rect x="266" y="110" width="76" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="304" y="123" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Hylan Blvd</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#2a2a3a"));
  }

  window.SCENES = { station, snug, carousel, swarm, corner };
})();
