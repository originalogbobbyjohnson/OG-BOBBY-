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

  /* 4. Long Beach boardwalk next door: wide planks, lifeguard stand, waves rolling in */
  function beach() {
    let boards = "";
    for (let x = 0; x < 400; x += 16) boards += '<path d="M' + x + ' 150v26" stroke="#7a6a54" stroke-width="1"/>';
    let rail = "";
    for (let x = 0; x < 400; x += 20) rail += '<rect x="' + x + '" y="130" width="3" height="20" fill="#e8e4da"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gj)"/>' +
      '<circle cx="80" cy="54" r="22" fill="#fff3b0"/>' +
      '<rect x="0" y="128" width="400" height="4" fill="#e8e4da"/>' + rail +
      '<rect x="0" y="150" width="400" height="26" fill="#a8916c"/>' + boards +
      '<rect x="0" y="176" width="400" height="34" fill="#f1dca8"/>' +
      '<path d="M280 206l10-46h24l10 46M286 184h32" stroke="#e8e4da" stroke-width="4" fill="none"/><rect x="284" y="150" width="36" height="12" fill="#ff5a4f"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#2d82b7"/>' +
      '<path class="wave" d="M-20 214q20-8 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#fff" stroke-width="3" fill="none" opacity=".85"/>' +
      '<path class="wave wave2" d="M-20 236q20-8 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#bfe6fa" stroke-width="2" fill="none" opacity=".7"/>' +
      '<g class="gull"><path d="M0 90q8-8 14 0q6-8 14 0" stroke="#1d2a33" stroke-width="2" fill="none"/></g>' +
      '<g class="gull gull2"><path d="M0 110q6-6 10 0q4-6 10 0" stroke="#1d2a33" stroke-width="2" fill="none"/></g>' +
      '<text x="140" y="196" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="#6a5030" letter-spacing="3">LONG BEACH BOARDWALK</text>',
      sky("gj", "#7cc6f0", "#e6f5fb"));
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

  window.SCENES = { train, airport, galaxy, beach, corner };
})();
