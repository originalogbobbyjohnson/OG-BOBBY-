/* Amityville, Long Island opening scenes for the De La Soul game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sail{from{transform:translateX(-110px)}to{transform:translateX(470px)}}' +
    '.sail{animation:sail 16s linear infinite;animation-delay:-5s}.sail2{animation-duration:22s;animation-delay:-9s}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}' +
    '.wave{animation:wave 3s ease-in-out infinite}.wave2{animation-delay:-1.5s}' +
    '@keyframes sway{0%,100%{transform:rotate(-7deg)}50%{transform:rotate(7deg)}}' +
    '.sway{transform-box:fill-box;transform-origin:50% 100%;animation:sway 2.4s ease-in-out infinite}.sway2{animation-delay:-1.2s}' +
    '@keyframes spin{to{transform:rotate(360deg)}}' +
    '.spin{transform-box:fill-box;transform-origin:50% 50%;animation:spin 2.2s linear infinite}' +
    '@keyframes gull{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,0)}}' +
    '.gull{animation:gull 11s linear infinite}.gull2{animation-delay:-5s}' +
    '@keyframes car{from{transform:translateX(420px)}to{transform:translateX(-90px)}}' +
    '.car{animation:car 6s linear infinite}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}' +
    '.note{animation:note 3s linear infinite}.note2{animation-delay:-1s}.note3{animation-delay:-2s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const badge = (x, y, w, label, color) =>
    '<rect x="' + x + '" y="' + (y - 10) + '" width="' + w + '" height="20" rx="4" fill="' + color + '"/><text x="' + (x + w / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">' + label + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const daisy = (x, y, r, petal, cls) => {
    let s = '<g class="' + (cls || "") + '"><path d="M' + x + ' ' + (y + r) + 'v' + (r * 3) + '" stroke="#2f9e5a" stroke-width="' + Math.max(2, r / 4) + '"/>';
    for (let i = 0; i < 8; i++) s += '<ellipse cx="' + x + '" cy="' + (y - r * 0.9) + '" rx="' + (r * 0.38) + '" ry="' + (r * 0.85) + '" fill="' + petal + '" transform="rotate(' + i * 45 + ' ' + x + ' ' + y + ')"/>';
    return s + '<circle cx="' + x + '" cy="' + y + '" r="' + (r * 0.5) + '" fill="#ffd23f"/></g>';
  };
  const YEL = "#ffd23f", PINK = "#ff5fa2", GREEN = "#3ccf6e", ORANGE = "#ff8a1f";

  /* 1. Amityville LIRR station: the elevated Babylon Branch platform over the village, a silver train with a blue stripe pulling in */
  function train() {
    let windows = "";
    for (let x = 24; x < 260; x += 44) windows += '<rect x="' + x + '" y="112" width="28" height="20" rx="3" fill="#dfeaf5" opacity=".9"/>';
    let posts = "";
    for (let x = 30; x < 400; x += 90) posts += '<rect x="' + x + '" y="28" width="6" height="66" fill="#8a8f96"/>';
    let piers = "";
    for (let x = 40; x < 400; x += 110) piers += '<rect x="' + x + '" y="180" width="26" height="80" fill="#b9b3a6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gs)"/>' +
      '<rect x="0" y="226" width="400" height="34" fill="#3a3d44"/><path d="M0 243h400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 14"/>' + piers +
      '<path d="M0 20h400v10H0z" fill="#5b6470"/><path d="M0 30h400" stroke="#2d3238" stroke-width="2"/>' + posts +
      '<rect x="40" y="40" width="320" height="40" rx="4" fill="#111"/>' +
      '<text x="54" y="67" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">Amityville</text>' +
      badge(160, 60, 50, "LIRR", "#0039a6") +
      '<text x="222" y="57" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">BABYLON BRANCH</text>' +
      '<text x="222" y="71" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">TO PENN STATION</text>' +
      '<g class="anim-train">' +
        '<rect x="8" y="100" width="300" height="56" rx="8" fill="#cfd5dc" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="138" width="300" height="6" fill="#0039a6"/><rect x="8" y="144" width="300" height="3" fill="#6a5acd"/>' + windows +
        '<rect x="284" y="112" width="16" height="20" rx="3" fill="#dfeaf5" opacity=".9"/><circle cx="300" cy="150" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="156" width="400" height="8" fill="#eab308"/><rect x="0" y="164" width="400" height="18" fill="#9a958b"/>' +
      daisy(372, 200, 7, "#fff", "sway") + daisy(352, 208, 5, PINK, "sway sway2"),
      sky("gs", "#7cc4f0", "#d9eefb"));
  }

  /* 2. Amityville Harbor on the Great South Bay: docks, canal houses and sailboats going by */
  function harbor() {
    let piles = "";
    for (let x = 18; x < 200; x += 26) piles += '<rect x="' + x + '" y="166" width="5" height="26" fill="#5b4532"/>';
    let houses = "";
    [[210, "#f2f2f2"], [252, "#9fc4e0"], [294, "#f6e3b4"], [336, "#f2f2f2"]].forEach(function (h) {
      houses += '<rect x="' + h[0] + '" y="128" width="38" height="30" fill="' + h[1] + '" stroke="#555" stroke-width="1"/><path d="M' + (h[0] - 3) + ' 128l22-16 22 16z" fill="#6b4a3a"/>' +
        '<rect x="' + (h[0] + 6) + '" y="136" width="8" height="8" fill="#2d4a6b"/><rect x="' + (h[0] + 23) + '" y="136" width="8" height="8" fill="#2d4a6b"/>';
    });
    const boat = (x, y, s, c, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
      '<path d="M0 0h70l-10 12H8z" fill="#f2f2f2" stroke="#333" stroke-width="1.5"/><path d="M34 -2V-62L64 -4z" fill="' + c + '"/><path d="M30 -4V-50L6 -4z" fill="#fff" stroke="#ccc"/><path d="M34 -2V-64" stroke="#333" stroke-width="2"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gh)"/>' +
      '<circle cx="330" cy="50" r="22" fill="#fff3b0"/>' +
      '<g class="gull"><path d="M60 50q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<g class="gull gull2"><path d="M20 70q5-5 10 0q5-5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<rect x="0" y="150" width="400" height="110" fill="#2b6fa3"/>' +
      '<rect x="200" y="150" width="200" height="10" fill="#7a9a5a"/>' + houses +
      '<g class="wave"><path d="M-20 200q20-6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#7fc0ea" stroke-width="2" fill="none"/></g>' +
      '<g class="wave wave2"><path d="M-20 228q20-6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#7fc0ea" stroke-width="2" fill="none"/></g>' +
      boat(0, 166, 0.6, YEL, "sail sail2") +
      '<rect x="0" y="160" width="200" height="8" fill="#8a6a4a"/>' + piles + boat(0, 226, 1, PINK, "sail") +
      '<text x="390" y="252" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#e6f2fb" letter-spacing="2">GREAT SOUTH BAY · AMITYVILLE</text>',
      sky("gh", "#8fd0f5", "#e8f6fd"));
  }

  /* 3. The Daisy Age: a field of daisies around a spinning record, notes floating up */
  function daisies() {
    let field = "";
    const cols = ["#fff", PINK, YEL, ORANGE, "#fff", GREEN];
    for (let i = 0; i < 16; i++) {
      const x = 14 + i * 25, y = 206 + ((i * 37) % 24), r = 6 + (i % 3) * 2;
      field += daisy(x, y, r, cols[i % cols.length] === GREEN ? "#fff" : cols[i % cols.length], "sway" + (i % 2 ? " sway2" : ""));
    }
    return svg(
      '<rect width="400" height="260" fill="url(#gd)"/>' +
      '<circle cx="70" cy="60" r="34" fill="' + YEL + '" opacity=".9"/>' +
      '<rect x="0" y="212" width="400" height="48" fill="#2f9e5a"/>' +
      '<g class="spin"><circle cx="210" cy="94" r="62" fill="#111"/>' +
        '<circle cx="210" cy="94" r="50" fill="none" stroke="#333" stroke-width="1"/><circle cx="210" cy="94" r="38" fill="none" stroke="#333" stroke-width="1"/>' +
        '<circle cx="210" cy="94" r="22" fill="' + PINK + '"/><path d="M196 88h28" stroke="#fff" stroke-width="3"/><circle cx="210" cy="94" r="3" fill="#111"/></g>' +
      '<text x="210" y="180" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="#fff" stroke="#1a1230" stroke-width="3" paint-order="stroke">DA INNER SOUND, Y\'ALL</text>' +
      '<g class="note"><text x="300" y="90" font-size="22" fill="#fff">&#9835;</text></g>' +
      '<g class="note note2"><text x="330" y="110" font-size="18" fill="' + YEL + '">&#9834;</text></g>' +
      '<g class="note note3"><text x="104" y="120" font-size="20" fill="' + PINK + '">&#9835;</text></g>' + field,
      sky("gd", "#7fd6ff", "#c9f1d6"));
  }

  /* 4. Jones Beach: the brick water tower with its green copper point, the boardwalk and the ocean */
  function tower() {
    let bricks = "";
    for (let y = 70; y < 190; y += 10) bricks += '<path d="M182 ' + y + 'h36" stroke="#7a4a30" stroke-width="1" opacity=".5"/>';
    let rail = "";
    for (let x = 0; x < 400; x += 16) rail += '<rect x="' + x + '" y="196" width="3" height="14" fill="#6b4f36"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gt)"/>' +
      '<g class="gull"><path d="M60 50q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<g class="gull gull2"><path d="M20 80q5-5 10 0q5-5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* ocean on the right, sand */
      '<rect x="0" y="170" width="400" height="90" fill="#e8d6a8"/>' +
      '<rect x="250" y="160" width="150" height="20" fill="#2b6fa3"/>' +
      '<g class="wave"><path d="M240 176q12-5 24 0t24 0t24 0t24 0t24 0t24 0t24 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      /* the water tower: tan-brown brick shaft, arcaded top, green copper pyramid */
      '<rect x="176" y="190" width="48" height="10" fill="#8b5a3c"/>' +
      '<path d="M182 190L184 62h32l2 128z" fill="#b5764f" stroke="#7a4a30" stroke-width="2"/>' + bricks +
      '<rect x="178" y="44" width="44" height="22" fill="#c9875e" stroke="#7a4a30" stroke-width="2"/>' +
      '<rect x="184" y="48" width="6" height="14" fill="#3a2418"/><rect x="197" y="48" width="6" height="14" fill="#3a2418"/><rect x="210" y="48" width="6" height="14" fill="#3a2418"/>' +
      '<rect x="174" y="40" width="52" height="5" fill="#e5d4b5"/>' +
      '<path d="M176 40L200 2L224 40z" fill="#5fa88a" stroke="#2f6b55" stroke-width="2"/><path d="M200 2v-0" stroke="#333"/>' +
      '<rect x="180" y="100" width="40" height="4" fill="#e5d4b5"/>' +
      /* boardwalk */
      '<rect x="0" y="208" width="400" height="12" fill="#a0784f"/>' + rail + '<rect x="0" y="194" width="400" height="3" fill="#6b4f36"/>' +
      '<rect x="0" y="220" width="400" height="6" fill="#7a5a3a"/>' +
      '<text x="390" y="252" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#5b4532" letter-spacing="2">JONES BEACH · SOUTH SHORE</text>',
      sky("gt", "#5fb4ec", "#e3f3fd"));
  }

  /* 5. Broadway and Merrick Rd, Amityville: green street signs, a wall tagged DE LA SOUL */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' + stars(10) +
      '<rect x="20" y="70" width="380" height="146" fill="#8a4b3a"/>' +
      '<rect x="20" y="70" width="380" height="8" fill="#5a2e22"/>' +
      (function () { let s = ""; for (let y = 86; y < 216; y += 12) s += '<path d="M20 ' + y + 'h380" stroke="#6e3a2c" stroke-width="1"/>'; return s; })() +
      daisy(370, 110, 12, "#fff", "") + daisy(340, 168, 8, PINK, "") +
      tag("DE LA SOUL", 120, 158, 38, YEL, -5) +
      tag("DAISY AGE", 200, 198, 24, PINK, -3) +
      tag("NATIVE TONGUES", 150, 108, 16, GREEN, -4) +
      '<rect x="60" y="20" width="6" height="200" fill="#6b7280"/>' +
      '<rect x="0" y="22" width="122" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="61" y="38" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">Broadway</text>' +
      '<rect x="6" y="48" width="120" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="66" y="64" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">Merrick Rd</text>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2d33"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="222" width="70" height="20" rx="6" fill="' + PINK + '"/><rect x="12" y="214" width="40" height="12" rx="4" fill="#ffc2dc"/><circle cx="16" cy="244" r="6" fill="#111"/><circle cx="54" cy="244" r="6" fill="#111"/></g>' +
      '<text x="390" y="254" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#e2e8f0" letter-spacing="2">AMITYVILLE, LONG ISLAND</text>',
      sky("gc", "#1a1230", "#4a3a78"));
  }

  window.SCENES = { train, harbor, daisies, tower, corner };
})();
