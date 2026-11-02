/* Cedarhurst / Five Towns, Long Island opening scenes for the Lil Tecca game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 1.8s infinite}.flk2{animation-delay:-.9s}' +
    '@keyframes plane{0%{transform:translate(-120px,40px)}100%{transform:translate(460px,-30px)}}' +
    '.plane{animation:plane 9s linear infinite}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.orbit{transform-box:view-box;transform-origin:200px 130px;animation:spin 14s linear infinite}' +
    '@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}' +
    '.float{animation:float 2.4s ease-in-out infinite}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}' +
    '.wave{animation:wave 3s ease-in-out infinite}.wave2{animation-delay:-1.5s}' +
    '@keyframes gull{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,0)}}' +
    '.gull{animation:gull 11s linear infinite}.gull2{animation-delay:-5s}' +
    '@keyframes car{from{transform:translateX(420px)}to{transform:translateX(-90px)}}' +
    '.car{animation:car 6s linear infinite}' +
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
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 120) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const CYAN = "#7df9ff", PURP = "#b26bff", YEL = "#ffe14d";

  /* 1. Cedarhurst LIRR station, Far Rockaway Branch: street-level platform, the silver train with its blue stripe pulling in */
  function train() {
    let windows = "";
    for (let x = 24; x < 260; x += 44) windows += '<rect x="' + x + '" y="112" width="28" height="20" rx="3" fill="#dfeaf5" opacity=".9"/>';
    let posts = "";
    for (let x = 30; x < 400; x += 90) posts += '<rect x="' + x + '" y="28" width="6" height="66" fill="#59606a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gs)"/>' +
      '<path d="M0 20h400v10H0z" fill="#3a414b"/>' + posts +
      '<rect x="40" y="40" width="320" height="40" rx="4" fill="#111"/>' +
      '<text x="54" y="67" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">Cedarhurst</text>' +
      badge(160, 60, 50, "LIRR", "#0039a6") +
      '<text x="224" y="57" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">FAR ROCKAWAY BRANCH</text>' +
      '<text x="224" y="71" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">TO PENN STATION</text>' +
      '<g class="anim-train">' +
        '<rect x="8" y="100" width="300" height="56" rx="8" fill="#cfd5dc" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="138" width="300" height="6" fill="#0039a6"/><rect x="8" y="144" width="300" height="3" fill="#6a5acd"/>' + windows +
        '<rect x="284" y="112" width="16" height="20" rx="3" fill="#dfeaf5" opacity=".9"/><circle cx="300" cy="150" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="156" width="400" height="8" fill="#eab308"/><rect x="0" y="164" width="400" height="30" fill="#9c968a"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#2c2f38"/>' +
      tag("TECCA", 30, 240, 34, CYAN, -5) + tag("GALACTIC", 210, 236, 28, PURP, -4),
      sky("gs", "#7fb6e6", "#d7e9f6"));
  }

  /* 2. Springfield Gardens, where he grew up: a jet coming in low over the row of houses toward JFK, runway lights blinking */
  function airport() {
    let houses = "";
    for (let i = 0; i < 7; i++) { const x = 6 + i * 56, c = ["#c9b79c", "#e2d3b8", "#a8b6c2", "#d9c2a8"][i % 4];
      houses += '<rect x="' + x + '" y="150" width="48" height="50" fill="' + c + '"/><path d="M' + (x - 4) + ' 150l28-22 28 22z" fill="#5a4a44"/><rect x="' + (x + 8) + '" y="164" width="12" height="12" fill="#ffe8a8"/><rect x="' + (x + 28) + '" y="172" width="12" height="28" fill="#6b4a3a"/>'; }
    let lights = "";
    for (let x = 10; x < 400; x += 30) lights += '<circle class="flk' + ((x / 30) % 2 ? " flk2" : "") + '" cx="' + x + '" cy="226" r="3" fill="' + ((x / 30) % 2 ? "#ff5a4f" : YEL) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ga)"/>' +
      '<circle cx="330" cy="60" r="26" fill="#ffcf7a" opacity=".9"/>' +
      '<g class="plane"><path d="M20 70h90q14 0 14 6t-14 6H20l-10-6z" fill="#e8ecf0" stroke="#6b7280" stroke-width="1.5"/><path d="M60 76l-24 26h12l30-26z" fill="#c8ced6"/><path d="M58 70l-18-18h10l26 18z" fill="#c8ced6"/><path d="M20 70l-10-20h8l14 20z" fill="' + PURP + '"/>' +
        '<g fill="#5a6a7a">' + [36, 46, 56, 66, 76, 86, 96].map(x => '<circle cx="' + x + '" cy="75" r="1.6"/>').join("") + '</g></g>' +
      houses +
      '<rect x="0" y="200" width="400" height="60" fill="#3a3d44"/><path d="M0 214h400" stroke="#eee" stroke-width="2" stroke-dasharray="24 16"/>' + lights +
      '<text x="200" y="250" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="#e9eef5" letter-spacing="3">SPRINGFIELD GARDENS · JFK</text>',
      sky("ga", "#3a5a9a", "#f2b07a"));
  }

  /* 3. Galactic: his label's galaxy, a ringed planet, his rocket floating through the stars */
  function galaxy() {
    return svg(
      '<rect width="400" height="260" fill="url(#gg)"/>' + stars(40) +
      '<g class="orbit"><circle cx="200" cy="52" r="8" fill="' + YEL + '"/><circle cx="200" cy="208" r="6" fill="' + CYAN + '"/></g>' +
      '<circle cx="200" cy="130" r="44" fill="' + PURP + '"/><circle cx="186" cy="116" r="14" fill="#c99bff" opacity=".6"/>' +
      '<ellipse cx="200" cy="130" rx="80" ry="16" fill="none" stroke="' + CYAN + '" stroke-width="5" transform="rotate(-14 200 130)"/>' +
      '<path d="M156 128a44 44 0 0 0 88 0" fill="' + PURP + '" opacity=".001"/>' +
      '<g class="float"><path d="M318 170q14-34 30-40 6 16-10 46z" fill="#e8ecf0" stroke="#6b7280" stroke-width="1.5"/><circle cx="336" cy="152" r="5" fill="' + CYAN + '"/>' +
        '<path d="M320 170l-8 6 4 6 8-4zM338 176l2 10 6-2-2-10z" fill="#ff5a4f"/><path class="flk" d="M322 178l-12 16 16-8z" fill="' + YEL + '"/></g>' +
      '<text x="200" y="244" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="' + CYAN + '" letter-spacing="6">GALACTIC</text>',
      sky("gg", "#0b0a1f", "#2a1a5a"));
  }


  /* 5. The corner: Central Ave and Cedarhurst Ave, green signs, his name sprayed on the wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gk)"/>' + stars(10) +
      '<rect x="20" y="70" width="380" height="146" fill="#3e4458"/>' +
      '<rect x="20" y="70" width="380" height="8" fill="#262b3a"/>' +
      (function () { let s = ""; for (let y = 86; y < 216; y += 14) s += '<path d="M20 ' + y + 'h380" stroke="#343a4c" stroke-width="1"/>'; return s; })() +
      tag("LIL TECCA", 140, 156, 38, CYAN, -5) +
      tag("WLYT", 250, 198, 28, PURP, -3) +
      tag("GALACTIC", 170, 108, 18, YEL, -4) +
      '<rect x="60" y="20" width="6" height="200" fill="#6b7280"/>' +
      '<rect x="0" y="22" width="122" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="61" y="38" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Central Ave</text>' +
      '<rect x="6" y="48" width="120" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="66" y="64" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Cedarhurst Ave</text>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2d33"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="222" width="70" height="20" rx="6" fill="' + PURP + '"/><rect x="12" y="214" width="40" height="12" rx="4" fill="#e2d0ff"/><circle cx="16" cy="244" r="6" fill="#111"/><circle cx="54" cy="244" r="6" fill="#111"/></g>' +
      '<text x="390" y="254" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#d8e4f0" letter-spacing="2">CEDARHURST, LONG ISLAND</text>',
      sky("gk", "#0b0a1f", "#2a3a6a"));
  }

  /* ---- redrawn landmark scenes (OG FAN 99 landmark pass): small shared helpers, prefixed L ---- */
  const Lcss = '<style>' +
    '@keyframes lmCar{from{transform:translateX(-170px)}to{transform:translateX(480px)}}.lm-car{animation:lmCar 8s linear infinite}' +
    '@keyframes lmCarB{from{transform:translateX(480px)}to{transform:translateX(-170px)}}.lm-carb{animation:lmCarB 10s linear infinite}' +
    '@keyframes lmBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.lm-bob{animation:lmBob 1.6s ease-in-out infinite}' +
    '@keyframes lmFlk{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.95}}.lm-flk{animation:lmFlk 2.3s infinite}' +
    '@keyframes lmSpin{to{transform:rotate(360deg)}}.lm-spin{animation:lmSpin 1.8s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes lmRise{0%{transform:translateY(0) scale(.8);opacity:0}20%{opacity:.85}100%{transform:translateY(-70px) scale(1.4);opacity:0}}.lm-rise{animation:lmRise 4s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes lmSway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.lm-sway{animation:lmSway 3s ease-in-out infinite;transform-box:fill-box;transform-origin:bottom center}' +
    '@keyframes lmBlk{0%,49%{opacity:1}50%,100%{opacity:.25}}.lm-blk{animation:lmBlk 1s steps(1) infinite}' +
    '@keyframes lmFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.lm-flag{animation:lmFlag 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:left center}' +
    '@keyframes lmFall{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-30px,230px) rotate(280deg);opacity:0}}.lm-fall{animation:lmFall 6s linear infinite}' +
    '@keyframes lmCld{from{transform:translateX(-120px)}to{transform:translateX(470px)}}.lm-cld{animation:lmCld 30s linear infinite}' +
    '@keyframes lmPls{0%,100%{opacity:.35}50%{opacity:1}}.lm-pls{animation:lmPls 2.2s ease-in-out infinite}' +
    '@keyframes lmWav{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.lm-wav{animation:lmWav 3s ease-in-out infinite}' +
    '@keyframes lmBeat{0%,100%{transform:scale(1)}50%{transform:scale(1.07)}}.lm-beat{animation:lmBeat .7s ease-in-out infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes lmNote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.lm-note{animation:lmNote 3s linear infinite}' +
    '.lmd1{animation-delay:-1s}.lmd2{animation-delay:-2s}.lmd3{animation-delay:-3s}.lmd4{animation-delay:-4.5s}.lmd5{animation-delay:-6s}' +
    '</style>';
  const LF = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const LT = (s, x, y, size, fill, anchor, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || "middle") + '" ' + LF + ' font-size="' + size + '" fill="' + fill + '"' + (extra || "") + '>' + s + '</text>';
  const LA = (s, x, y, size, fill, anchor, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || "middle") + '" font-family="Anton, Impact, sans-serif" font-size="' + size + '" fill="' + fill + '"' + (extra || "") + '>' + s + '</text>';
  const LR = (x, y, w, h, fill, extra) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + fill + '"' + (extra || "") + '/>';
  const Lbul = (x, y, l, col, r) => { r = r || 11; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + col + '"/>' + LT(l, x, y + r * 0.42, r * 1.22, col === "#fccc0a" ? "#000" : "#fff"); };
  const Lpill = (x, y, l, col) => { const w = l.length * 8 + 14; return '<rect x="' + (x - w / 2) + '" y="' + (y - 10) + '" width="' + w + '" height="20" rx="10" fill="' + col + '"/>' + LT(l, x, y + 4.5, 11, "#fff"); };
  /* black MTA-style station sign: lines = [["B","#ff6319"],...]; a long name like "MN" draws a pill */
  const Lsign = (x, y, w, name, lines, size) => { let b = "", bx = x + w - 18; for (let i = lines.length - 1; i >= 0; i--) { const l = lines[i]; if (l[0].length > 1) { b += Lpill(bx - 10, y + 17, l[0], l[1]); bx -= l[0].length * 8 + 22; } else { b += Lbul(bx, y + 17, l[0], l[1], 10); bx -= 24; } }
    return LR(x, y, w, 32, "#111", ' rx="3"') + LR(x, y, w, 4, "#fff") + LT(name, x + 10, y + 23, size || 15, "#fff", "start") + b; };
  /* green NYC street sign blade */
  const Lblade = (x, y, t, w) => { w = w || t.length * 7.2 + 20; return LR(x, y, w, 19, "#0f6b3a", ' rx="2" stroke="#fff" stroke-width="1.5"') + LT(t, x + w / 2, y + 14, 12, "#fff"); };
  /* two green signs on a pole at x, crossing */
  const Lpole = (x, y, a, b) => { const wa = a.length * 7.2 + 20, wb = b.length * 7.2 + 20; return LR(x, y, 6, 236 - y, "#2a3138") + Lblade(x + 3 - wa / 2, y + 6, a) + Lblade(x + 3 - wb / 2, y + 30, b) + LR(x - 2, y - 4, 10, 6, "#2a3138"); };
  const Lbrick = (x, y, w, h, base, mortar) => { let s = LR(x, y, w, h, base); for (let yy = y + 6; yy < y + h; yy += 6) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + mortar + '" stroke-width=".8"/>'; return s; };
  const Lwin = (x, y, cols, rows, dx, dy, w, h, lit, dark) => { let s = ""; for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { const on = ((r * 7 + c * 3) % 5) < 2; s += '<rect x="' + (x + c * dx) + '" y="' + (y + r * dy) + '" width="' + w + '" height="' + h + '" fill="' + (on ? lit : dark) + '"' + (on && (r + c) % 4 === 0 ? ' class="lm-flk"' : '') + '/>'; } return s; };
  const Lstars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const Lcloud = (x, y, s, cls) => '<g class="lm-cld ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="9"/><ellipse cx="-12" cy="-4" rx="11" ry="7"/></g></g>';
  const Ltree = (x, y, r, col, cls) => '<g class="lm-sway ' + (cls || "") + '">' + LR(x - 3, y, 6, r * 1.3, "#5a3d24") + '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + col + '"/><circle cx="' + (x - r * .5) + '" cy="' + (y + r * .3) + '" r="' + r * .7 + '" fill="' + col + '" opacity=".85"/><circle cx="' + (x + r * .55) + '" cy="' + (y + r * .25) + '" r="' + r * .65 + '" fill="' + col + '" opacity=".9"/></g>';
  /* faceless figure: head + body, x = centre, y = feet */
  const Lman = (x, y, body, cls, cap) => '<g' + (cls ? ' class="' + cls + '"' : "") + '>' + '<rect x="' + (x - 7) + '" y="' + (y - 30) + '" width="14" height="22" rx="5" fill="' + body + '"/><rect x="' + (x - 6) + '" y="' + (y - 10) + '" width="5" height="10" fill="#1d1d24"/><rect x="' + (x + 1) + '" y="' + (y - 10) + '" width="5" height="10" fill="#1d1d24"/>' +
    '<circle cx="' + x + '" cy="' + (y - 37) + '" r="7" fill="#5a3a26"/>' + (cap ? '<path d="M' + (x - 8) + ' ' + (y - 39) + 'q8-10 16 0z" fill="' + cap + '"/><rect x="' + (x - 1) + '" y="' + (y - 41) + '" width="12" height="3" fill="' + cap + '"/>' : '') + '</g>';
  /* subway car (stainless) seen from the side, x,y top-left */
  const Lcar = (x, y, w, l, col, band) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="52" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>'; for (let i = x + 16; i < x + w - 60; i += 40) s += '<rect x="' + i + '" y="' + (y + 9) + '" width="26" height="18" rx="3" fill="#cfe6ff" opacity=".9"/>';
    return s + LR(x, y + 33, w, 5, band || col) + Lbul(x + w - 22, y + 18, l, col, 10) + '<circle cx="' + (x + w - 8) + '" cy="' + (y + 44) + '" r="3.5" fill="#fff6c2"/>'; };
  const Lcab = (x, y) => '<rect x="' + x + '" y="' + (y + 8) + '" width="70" height="20" rx="5" fill="#f7c600"/><path d="M' + (x + 12) + ' ' + (y + 8) + 'l8-10h28l10 10z" fill="#f7c600"/><path d="M' + (x + 22) + ' ' + y + 'h10v8h-14zM' + (x + 35) + ' ' + y + 'h10l7 8h-17z" fill="#bfe0ff"/>' +
    LR(x + 26, y - 6, 18, 6, "#fff", ' rx="1"') + LT("TAXI", x + 35, y - 1.5, 5, "#111") + '<path d="M' + x + ' ' + (y + 17) + 'h70" stroke="#111" stroke-width="1" stroke-dasharray="3 3"/><circle cx="' + (x + 15) + '" cy="' + (y + 28) + '" r="6" fill="#111"/><circle cx="' + (x + 55) + '" cy="' + (y + 28) + '" r="6" fill="#111"/>';
  const Lauto = (x, y, col) => '<rect x="' + x + '" y="' + (y + 6) + '" width="56" height="16" rx="5" fill="' + col + '"/><rect x="' + (x + 11) + '" y="' + (y - 2) + '" width="32" height="11" rx="3" fill="#cfe6ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 22) + '" r="5" fill="#111"/><circle cx="' + (x + 43) + '" cy="' + (y + 22) + '" r="5" fill="#111"/>';
  /* turntable from above at an angle */
  const Ldeck = (cx, cy, r, lab) => '<rect x="' + (cx - r - 12) + '" y="' + (cy - r * .45 - 10) + '" width="' + (r * 2 + 30) + '" height="' + (r * .9 + 20) + '" rx="4" fill="#2a2a30"/><g transform="translate(' + cx + ' ' + cy + ') scale(1 .42)"><g class="lm-spin"><circle r="' + r + '" fill="#0c0c0e"/><circle r="' + r * .72 + '" fill="none" stroke="#2c2c30" stroke-width="2"/><circle r="' + r * .5 + '" fill="none" stroke="#2c2c30" stroke-width="2"/><circle r="' + r * .3 + '" fill="' + lab + '"/><rect x="-2" y="' + (-r * .3) + '" width="4" height="' + r * .2 + '" fill="#fff"/></g></g><path d="M' + (cx + r + 6) + ' ' + (cy - r * .4) + 'l-8 ' + r * .5 + '" stroke="#c9ced6" stroke-width="3"/>';
  /* 3. Green Acres Mall, Valley Stream: the long low white mall next to the Five Towns, the big lot, sunset */
  function LM_beach() {
    let lines = ""; for (let x = 10; x < 400; x += 28) lines += '<path d="M' + x + ' 196l-10 40" stroke="#e8e4da" stroke-width="2"/>';
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + '<circle cx="320" cy="96" r="30" fill="#ffd27a"/>' + Lcloud(80, 40, 1, "") + Lcloud(250, 30, .8, "lmd3") +
      /* the mall */
      LR(10, 110, 380, 70, "#f2f0ea") + LR(10, 104, 380, 8, "#d8d4ca") + LR(10, 160, 380, 20, "#c9c4b8") +
      LR(150, 92, 100, 88, "#f8f6f0") + LR(146, 86, 108, 8, "#d8d4ca") + '<path d="M160 180v-50q40-30 80 0v50z" fill="#7aa8c8"/><path d="M200 120v60" stroke="#f8f6f0" stroke-width="3"/>' +
      LA("GREEN ACRES", 200, 116, 14, "#2a7a4a") + LT("MALL", 200, 128, 7, "#2a7a4a") +
      [40, 80, 290, 330].map(x => LR(x, 128, 26, 30, "#7aa8c8")).join("") + '<g class="lm-pls">' + [44, 84, 294, 334].map(x => LR(x, 132, 18, 10, "#ffe7a8", ' opacity=".7"')).join("") + '</g>' +
      [20, 120, 280, 380].map(x => Ltree(x, 178, 10, "#3f7f3a")).join("") +
      /* parking lot */
      LR(0, 186, 400, 74, "#4a4a52") + lines + [0, 1, 2, 3, 4].map(i => Lauto(20 + i * 76, 206, ["#b26bff", "#e8e8e8", "#3a3a44", "#7df9ff", "#d7263d"][i])).join("") +
      [60, 340].map(x => LR(x, 150, 4, 50, "#2a2a30") + '<circle class="lm-pls" cx="' + (x + 2) + '" cy="148" r="5" fill="#fff3c4"/>').join("") +
      '<g class="lm-car" style="animation-duration:9s">' + Lauto(0, 236, "#ffe14d") + '</g>' +
      LR(8, 8, 196, 34, "#111", ' rx="3" opacity=".85"') + LT("GREEN ACRES MALL", 106, 23, 12, "#7df9ff") + LT("VALLEY STREAM · NEXT TO THE FIVE TOWNS", 106, 36, 7.5, "#fff") +
      tag("TECCA", 250, 70, 30, "#b26bff", -5) + tag("WLYT", 20, 100, 18, "#ffe14d", -4),
      sky("sk", "#5a3a8a", "#ff9a6a"));
  }

  window.SCENES = { train, airport, galaxy, beach: LM_beach, corner };
})();
