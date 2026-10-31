/* Long Island City opening scenes for the Nas game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes neon{0%,100%{opacity:1}90%{opacity:1}92%{opacity:.25}94%{opacity:1}96%{opacity:.4}98%{opacity:1}}' +
    '.neon{animation:neon 3.6s infinite}' +
    '@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:.15}}' +
    '.blk{animation:blink 1.6s steps(1) infinite}.blk2{animation-delay:.8s}' +
    '@keyframes ripple{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}' +
    '.rip{animation:ripple 3s ease-in-out infinite}.rip2{animation-delay:-1.5s}' +
    '@keyframes boat{from{transform:translateX(-120px)}to{transform:translateX(480px)}}' +
    '.bt{animation:boat 18s linear infinite}' +
    '@keyframes smoke{0%{transform:translate(0,0) scale(.6);opacity:0}20%{opacity:.7}100%{transform:translate(70px,-60px) scale(1.8);opacity:0}}' +
    '.smk{transform-box:fill-box;transform-origin:50% 50%;animation:smoke 4.5s ease-out infinite}.smk2{animation-delay:1.5s}.smk3{animation-delay:3s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.reel{transform-box:fill-box;transform-origin:50% 50%;animation:spin 2.4s linear infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}' +
    '.bob{animation:bob 2.8s ease-in-out infinite}' +
    '@keyframes eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}' +
    '.eq{transform-box:fill-box;transform-origin:50% 100%;animation:eq .7s ease-in-out infinite}.eq2{animation-delay:-.25s}.eq3{animation-delay:-.5s}' +
    '@keyframes cars{from{transform:translateX(-60px)}to{transform:translateX(460px)}}' +
    '.car{animation:cars 7s linear infinite}' +
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
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#f0c75e", RED = "#e8322b", BLUE = "#6fb3d9", PURPLE = "#b933ad", YELLOW = "#fccc0a";

  /* lit windows grid for a tower */
  const lit = (x, y, w, h, gap, seed) => {
    let s = "";
    for (let yy = y; yy < y + h; yy += gap) for (let xx = x; xx < x + w; xx += gap) {
      const on = ((xx * 7 + yy * 13 + seed) % 5) < 2;
      if (on) s += '<rect x="' + xx + '" y="' + yy + '" width="3" height="3" fill="#ffd98a" opacity=".8"/>';
    }
    return s;
  };

  /* 1. The 7 pulling into Queensboro Plaza, high up on the steel el, Court Square tower behind */
  function train() {
    let truss = "";
    for (let x = 0; x <= W; x += 40) truss += '<path d="M' + x + ' 186L' + (x + 20) + ' 204L' + (x + 40) + ' 186" fill="none" stroke="#4d5a52" stroke-width="3"/>';
    let cols = "";
    [30, 200, 370].forEach(x => {
      cols += '<rect x="' + (x - 6) + '" y="204" width="12" height="56" fill="#3f4b44"/>';
      for (let y = 210; y < 258; y += 8) cols += '<circle cx="' + (x - 3) + '" cy="' + y + '" r="1.1" fill="#6f7d74"/><circle cx="' + (x + 3) + '" cy="' + y + '" r="1.1" fill="#6f7d74"/>';
    });
    let windows = "";
    for (let x = 22; x < 260; x += 46) windows += '<rect x="' + x + '" y="126" width="30" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(16) +
      /* Long Island City skyline: One Court Square green glass tower with its blinking roof light, newer towers */
      '<rect x="40" y="46" width="34" height="110" fill="#1d3b3a"/>' + lit(44, 52, 28, 96, 8, 1) +
      '<rect x="244" y="22" width="44" height="134" fill="#2f6b5e"/><rect x="244" y="22" width="44" height="134" fill="url(#gl)" opacity=".5"/>' +
      '<path d="M252 22v134M262 22v134M272 22v134M282 22v134" stroke="#1d4a40" stroke-width="1"/>' +
      '<circle class="blk" cx="266" cy="18" r="2.6" fill="#ff3b30"/>' +
      '<rect x="300" y="60" width="40" height="96" fill="#26303c"/>' + lit(304, 66, 34, 86, 8, 3) +
      '<rect x="346" y="80" width="38" height="76" fill="#1f2833"/>' + lit(350, 86, 30, 66, 8, 5) +
      '<rect x="120" y="70" width="40" height="86" fill="#222b36"/>' + lit(124, 76, 34, 76, 8, 2) +
      /* the el: green-painted steel deck, roof canopy, columns */
      '<rect x="0" y="34" width="400" height="8" fill="#3f4b44"/>' +
      '<rect x="18" y="42" width="5" height="134" fill="#3f4b44"/><rect x="377" y="42" width="5" height="134" fill="#3f4b44"/>' +
      /* station sign */
      '<rect x="60" y="54" width="280" height="36" rx="4" fill="#111"/><rect x="60" y="54" width="280" height="4" fill="#fff"/>' +
      '<text x="72" y="80" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">Queensboro Plaza</text>' +
      bullet(256, 73, "7", PURPLE) + bullet(282, 73, "N", YELLOW, true) + bullet(308, 73, "W", YELLOW, true) +
      /* train slides in from the right and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="114" width="304" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="156" width="304" height="4" fill="#2b2f36"/>' + windows +
        '<circle cx="304" cy="166" r="4" fill="#fff6c2"/>' +
        bullet(292, 134, "7", PURPLE) +
      '</g>' +
      /* platform edge, deck truss, and the street far below */
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/>' + truss +
      '<rect x="0" y="186" width="400" height="4" fill="#3f4b44"/>' +
      '<rect x="0" y="204" width="400" height="56" fill="#121519"/>' + cols +
      tag("QB'S FINEST", 46, 244, 26, GOLD, -4) + tag("ESCO", 284, 246, 30, RED, -8),
      sky("g1", "#0b1428", "#40507a") +
      '<linearGradient id="gl" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8fe0c6"/><stop offset="1" stop-color="#0f2a24"/></linearGradient>');
  }

  /* 2. Gantry Plaza State Park: the two restored black gantries with LONG ISLAND, the big red neon sign on its steel frame, the East River */
  function gantry() {
    const gantryAt = (x) =>
      '<path d="M' + x + ' 196V96M' + (x + 46) + ' 196V96" stroke="#15181c" stroke-width="7"/>' +
      '<path d="M' + x + ' 196L' + (x + 46) + ' 140M' + (x + 46) + ' 196L' + x + ' 140M' + x + ' 140L' + (x + 46) + ' 100" stroke="#15181c" stroke-width="3"/>' +
      '<rect x="' + (x - 10) + '" y="84" width="76" height="16" fill="#15181c"/>' +
      '<path d="M' + (x + 56) + ' 100l20 30v66" stroke="#15181c" stroke-width="4" fill="none"/>';
    let skyline = "";
    [[0, 120, 26], [28, 104, 18], [48, 130, 30], [80, 96, 14], [96, 118, 24], [124, 108, 20]].forEach(([x, y, w]) => { skyline += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (172 - y) + '" fill="#2a3550"/>' + lit(x + 3, y + 4, w - 4, 172 - y - 8, 7, x); });
    /* the neon frame: scaffold, a script-style red neon swoosh, the bottle; no brand lettering */
    let scaffold = "";
    for (let x = 196; x <= 392; x += 14) scaffold += '<path d="M' + x + ' 70v58" stroke="#3a3f47" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(18) +
      /* Manhattan across the river */
      skyline +
      /* the red neon sign up on its frame */
      '<g>' + scaffold + '<path d="M192 70h204M192 128h204M192 70l28 58M248 70l28 58M304 70l28 58M360 70l28 58" stroke="#3a3f47" stroke-width="1.5" fill="none"/>' +
      '<rect x="210" y="132" width="5" height="40" fill="#3a3f47"/><rect x="370" y="132" width="5" height="40" fill="#3a3f47"/></g>' +
      '<g class="neon"><rect x="196" y="78" width="196" height="54" rx="20" fill="' + RED + '" opacity=".16"/></g>' +
      '<g class="neon" fill="none" stroke="' + RED + '" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M206 112q10-34 30-22q8 8-8 16q-12 6-14 18" />' +
        '<path d="M238 110q6-10 14-6q4 6-6 8q-6 2 4 6q8 2 12-6" />' +
        '<path d="M270 114q4-16 14-14q6 4-2 10q-6 4 0 4q8 0 12-8" />' +
        '<path d="M300 112q6-12 12-8l-4 14M320 110q8-14 18-8q4 6-4 8q-8 2-2 6" />' +
        '<path d="M344 112q8-10 14-6q4 6-4 8M362 118q4-20 12-14q4 6-6 10" />' +
        '<path d="M202 124q90 10 186-6" stroke-width="3"/>' +
      '</g>' +
      /* sign reflection on the river */
      '<rect x="0" y="172" width="400" height="30" fill="#0d1a2c"/>' +
      '<g class="rip"><path d="M210 180h170M226 188h140M244 196h100" stroke="' + RED + '" stroke-width="2" opacity=".45"/></g>' +
      '<g class="rip rip2"><path d="M10 184h120M30 194h90" stroke="#ffd98a" stroke-width="1.5" opacity=".35"/></g>' +
      /* ferry crossing */
      '<g class="bt"><path d="M0 176h56l-6 8h-46z" fill="#e8ecf2"/><rect x="10" y="168" width="34" height="8" fill="#3b6fb6"/><rect x="16" y="170" width="22" height="3" fill="#dff1ff"/></g>' +
      /* the pier and the two gantries */
      '<rect x="0" y="196" width="400" height="64" fill="#1b1f24"/><path d="M0 196h400" stroke="#5b6168" stroke-width="2"/>' +
      gantryAt(26) + gantryAt(112) +
      '<text x="54" y="96" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="10" letter-spacing="1.5" fill="#fff">LONG</text>' +
      '<text x="140" y="96" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="10" letter-spacing="1.5" fill="#fff">ISLAND</text>' +
      /* railing + plaque */
      (function () { let r = ""; for (let x = 0; x < 400; x += 12) r += '<rect x="' + x + '" y="206" width="2" height="16" fill="#3a3f47"/>'; return r; })() +
      '<rect x="0" y="206" width="400" height="2" fill="#5b6168"/>' +
      '<rect x="236" y="226" width="140" height="22" rx="3" fill="#1f5a3a" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      '<text x="306" y="241" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="2" fill="#fff">GANTRY PLAZA</text>',
      sky("g2", "#070d1c", "#2e3a64"));
  }

  /* 3. Ravenswood: the red-and-white striped Big Allis stacks with smoke drifting, Silvercup's red rooftop letters in front */
  function allis() {
    const stack = (x, w, top) => {
      let s = '<path d="M' + (x - w / 2) + ' 176L' + (x - w / 2 + 3) + ' ' + top + 'H' + (x + w / 2 - 3) + 'L' + (x + w / 2) + ' 176z" fill="#f2efe8"/>';
      const band = (176 - top) / 8;
      for (let i = 0; i < 8; i += 2) s += '<rect x="' + (x - w / 2 + 1) + '" y="' + (top + i * band) + '" width="' + (w - 2) + '" height="' + band + '" fill="#d42a22"/>';
      s += '<rect x="' + (x - w / 2 + 2) + '" y="' + (top - 3) + '" width="' + (w - 4) + '" height="4" fill="#3a3f47"/>';
      s += '<circle class="blk" cx="' + x + '" cy="' + (top + 4) + '" r="2.2" fill="#ff3b30"/>';
      s += '<g class="smk"><circle cx="' + x + '" cy="' + (top - 8) + '" r="8" fill="#cfd6e0" opacity=".6"/></g>' +
        '<g class="smk smk2"><circle cx="' + x + '" cy="' + (top - 8) + '" r="7" fill="#cfd6e0" opacity=".6"/></g>' +
        '<g class="smk smk3"><circle cx="' + x + '" cy="' + (top - 8) + '" r="6" fill="#cfd6e0" opacity=".6"/></g>';
      return s;
    };
    const letters = "SILVERCUP".split("").map((c, i) =>
      '<text x="' + (200 + (i - 4) * 28) + '" y="192" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="36" fill="#e3261f" stroke="#7a0f0b" stroke-width="1">' + c + '</text>').join("");
    let frame = "";
    for (let i = 0; i < 9; i++) frame += '<path d="M' + (200 + (i - 4) * 28) + ' 192v12" stroke="#2a2f36" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(14) +
      '<circle cx="62" cy="44" r="14" fill="#fff4dc" opacity=".9"/>' +
      /* the plant building and its four stacks */
      '<rect x="120" y="150" width="270" height="40" fill="#2a2f36"/>' +
      stack(160, 22, 50) + stack(216, 22, 40) + stack(272, 22, 46) + stack(336, 26, 30) +
      /* bakery rooftop with the big red letters on a frame */
      '<rect x="20" y="204" width="360" height="56" fill="#cfc4ae"/>' +
      (function () { let w = ""; for (let x = 34; x < 370; x += 26) w += '<rect x="' + x + '" y="214" width="16" height="12" fill="#3a3330"/><rect x="' + x + '" y="236" width="16" height="12" fill="#ffd98a" opacity=".75"/>'; return w; })() +
      '<rect x="20" y="200" width="360" height="6" fill="#8a7f6a"/>' +
      '<path d="M36 204h330" stroke="#2a2f36" stroke-width="2"/>' + frame + letters,
      sky("g3", "#0b1226", "#5a4a6a"));
  }

  /* 4. The King's throne room: chessboard floor, gold throne, a floating crown, and a 1994 boom box playing the tape */
  function throne() {
    let floor = "";
    for (let r = 0; r < 5; r++) {
      const y0 = 176 + r * 17, y1 = y0 + 17;
      for (let c = -6; c < 14; c++) {
        const k = (v, y) => 200 + (v - 4) * (40 + (y - 176) * 0.9);
        floor += '<path d="M' + k(c, y0) + ' ' + y0 + 'L' + k(c + 1, y0) + ' ' + y0 + 'L' + k(c + 1, y1) + ' ' + y1 + 'L' + k(c, y1) + ' ' + y1 + 'z" fill="' + ((r + c) % 2 ? "#0e0c0a" : "#e8dcc2") + '"/>';
      }
    }
    return svg(
      '<rect width="400" height="260" fill="#1a0f0a"/>' +
      /* deep red drapes */
      '<path d="M0 0h70q-10 90 10 176H0z" fill="#6e1414"/><path d="M400 0h-70q10 90-10 176h80z" fill="#6e1414"/>' +
      '<path d="M20 0q8 90-6 176M44 0q10 90-2 176M356 0q-8 90 6 176M380 0q-10 90 2 176" stroke="#4a0c0c" stroke-width="3" fill="none"/>' +
      '<rect x="0" y="0" width="400" height="24" fill="#3a0a0a"/><path d="M0 24h400" stroke="' + GOLD + '" stroke-width="2"/>' +
      floor +
      /* the throne */
      '<path d="M168 168V70q32-30 64 0v98z" fill="#c99a2e" stroke="#7a5512" stroke-width="2"/>' +
      '<path d="M178 160V80q22-20 44 0v80z" fill="#7a1414"/>' +
      '<rect x="160" y="132" width="80" height="14" rx="3" fill="#e0b040" stroke="#7a5512" stroke-width="1.5"/>' +
      '<rect x="160" y="146" width="10" height="30" fill="#c99a2e"/><rect x="230" y="146" width="10" height="30" fill="#c99a2e"/>' +
      '<circle cx="200" cy="58" r="6" fill="' + RED + '" stroke="#7a5512" stroke-width="1.5"/>' +
      /* crown floating over the throne */
      '<g class="bob"><path d="M178 50l6-22 10 12 6-16 6 16 10-12 6 22z" fill="#ffcc33" stroke="#7a5512" stroke-width="1.5"/>' +
      '<rect x="178" y="48" width="44" height="6" rx="1" fill="#e0a52c" stroke="#7a5512" stroke-width="1"/>' +
      '<circle cx="190" cy="51" r="1.8" fill="' + RED + '"/><circle cx="200" cy="51" r="1.8" fill="' + BLUE + '"/><circle cx="210" cy="51" r="1.8" fill="' + RED + '"/></g>' +
      /* chess king and queen pieces on the floor */
      '<path d="M104 200h24l-4-6h-16zM110 194l2-20h8l2 20zM108 174h16v-4h-16zM116 170v-10M112 164h8" fill="#e8dcc2" stroke="#0e0c0a" stroke-width="1.5"/>' +
      /* the boom box: silver, two speakers, tape deck with spinning reels, EQ lights */
      '<g transform="translate(248 166)">' +
        '<path d="M28 0v-10h64v10" fill="none" stroke="#9aa0a6" stroke-width="4"/>' +
        '<rect x="0" y="0" width="120" height="56" rx="6" fill="#b9bec6" stroke="#4a4f55" stroke-width="2"/>' +
        '<circle cx="22" cy="32" r="17" fill="#2a2d33"/><circle cx="22" cy="32" r="8" fill="#14161a"/>' +
        '<circle cx="98" cy="32" r="17" fill="#2a2d33"/><circle cx="98" cy="32" r="8" fill="#14161a"/>' +
        '<rect x="42" y="18" width="36" height="24" rx="2" fill="#1a1c20"/>' +
        '<rect x="45" y="21" width="30" height="18" rx="1" fill="#f4efe6"/>' +
        '<text x="60" y="27.5" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="5" fill="#1a1c20">ILLMATIC</text>' +
        '<rect x="48" y="29" width="24" height="8" rx="2" fill="#3a3330"/>' +
        '<g class="reel"><circle cx="54" cy="33" r="3" fill="#f4efe6"/><path d="M54 30v6M51 33h6" stroke="#3a3330" stroke-width="1"/></g>' +
        '<g class="reel"><circle cx="66" cy="33" r="3" fill="#f4efe6"/><path d="M66 30v6M63 33h6" stroke="#3a3330" stroke-width="1"/></g>' +
        '<rect x="44" y="6" width="32" height="8" rx="1" fill="#1a1c20"/>' +
        '<rect class="eq" x="47" y="8" width="3" height="5" fill="#6cbe45"/><rect class="eq eq2" x="52" y="8" width="3" height="5" fill="#6cbe45"/>' +
        '<rect class="eq eq3" x="57" y="8" width="3" height="5" fill="' + GOLD + '"/><rect class="eq" x="62" y="8" width="3" height="5" fill="' + GOLD + '"/>' +
        '<rect class="eq eq2" x="67" y="8" width="3" height="5" fill="' + RED + '"/><rect class="eq eq3" x="72" y="8" width="3" height="5" fill="' + RED + '"/>' +
        '<rect x="46" y="46" width="6" height="5" fill="#4a4f55"/><rect x="54" y="46" width="6" height="5" fill="#4a4f55"/><rect x="62" y="46" width="6" height="5" fill="#4a4f55"/><rect x="70" y="46" width="6" height="5" fill="#4a4f55"/>' +
      '</g>' +
      /* the banner */
      '<text x="200" y="17" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" letter-spacing="4" fill="' + GOLD + '">THE WORLD IS YOURS</text>',
      "");
  }

  /* 5. Vernon Blvd and 40th Av by the Bridge: street signs, streetlight, a painted roll-down gate with the tags */
  function corner() {
    let gate = "";
    for (let y = 76; y < 220; y += 6) gate += '<path d="M24 ' + y + 'h222" stroke="#2c3138" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) +
      /* storefront with a roll-down gate */
      '<rect x="14" y="54" width="242" height="166" fill="#1e2228"/><rect x="14" y="54" width="242" height="18" fill="#3a3f47"/>' +
      '<rect x="24" y="74" width="222" height="146" fill="#55606c"/>' + gate +
      tag("NAS", 44, 134, 56, GOLD, -7) + tag("QB'S FINEST", 104, 164, 24, BLUE, -5) +
      tag("THE WORLD IS YOURS", 34, 208, 20, RED, -3) +
      /* streetlight with flicker */
      '<rect x="320" y="56" width="5" height="164" fill="#1d2329"/><path d="M322 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M338 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M338 70l26 0 30 150h-90z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="270" y="88" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="316" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Vernon Blvd</text>' +
      '<rect x="276" y="110" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="316" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">40 Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      /* a yellow cab rolling by */
      '<g class="car"><rect x="0" y="226" width="50" height="14" rx="4" fill="#f5c518"/><rect x="10" y="219" width="28" height="9" rx="3" fill="#f5c518"/><rect x="13" y="221" width="10" height="6" fill="#bfe3ff"/><rect x="25" y="221" width="10" height="6" fill="#bfe3ff"/>' +
      '<circle cx="12" cy="241" r="4" fill="#111"/><circle cx="40" cy="241" r="4" fill="#111"/></g>',
      sky("g5", "#0d1630", "#2a3a5a"));
  }

  window.SCENES = { train, gantry, allis, throne, corner };
})();
