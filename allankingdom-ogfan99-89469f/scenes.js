/* allankingdom scenes (Regions tab: Minneapolis; St. Paul). CSS classes prefixed ak- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes aksnow{0%{transform:translateY(-20px)}100%{transform:translateY(280px)}}.ak-sn{animation:aksnow 7s linear infinite}.ak-sn2{animation-delay:-2.4s}.ak-sn3{animation-delay:-4.8s}' +
    '@keyframes akglow{0%,100%{opacity:.45}50%{opacity:1}}.ak-glow{animation:akglow 2.4s ease-in-out infinite}.ak-g2{animation-delay:-1.2s}' +
    '@keyframes akwave{0%,100%{transform:translateX(0) scaleY(1)}50%{transform:translateX(-14px) scaleY(1.15)}}.ak-au{transform-box:fill-box;transform-origin:50% 100%;animation:akwave 6s ease-in-out infinite}.ak-au2{animation-delay:-3s}' +
    '@keyframes akhue{0%,100%{fill:#7fd6ff}33%{fill:#b48cff}66%{fill:#8ff2c4}}.ak-hue{animation:akhue 5s linear infinite}.ak-hue2{animation-delay:-1.7s}.ak-hue3{animation-delay:-3.4s}' +
    '@keyframes aksmoke{0%{transform:translate(0,0);opacity:.7}100%{transform:translate(-14px,-40px);opacity:0}}.ak-sm{animation:aksmoke 3s ease-out infinite}.ak-sm2{animation-delay:-1.5s}' +
    '@keyframes akspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.ak-sp{animation:akspray 1.4s ease-out infinite}.ak-sp2{animation-delay:.5s}' +
    '@keyframes akmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.ak-mt{transform-box:fill-box;transform-origin:50% 100%;animation:akmeter .7s ease-in-out infinite}.ak-mt2{animation-delay:-.35s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const snow = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="ak-sn' + (i % 3 === 1 ? " ak-sn2" : i % 3 === 2 ? " ak-sn3" : "") + '" cx="' + ((i * 61) % 400) + '" cy="' + ((i * 37) % 120) + '" r="' + (i % 2 ? 1.4 : 2) + '" fill="#fff" opacity=".85"/>'; return s; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "ak-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (6 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const pine = (x, y, s, c) => '<path d="M' + x + ' ' + (y - 40 * s) + 'l' + (14 * s) + ' ' + (18 * s) + 'h' + (-6 * s) + 'l' + (12 * s) + ' ' + (14 * s) + 'h' + (-7 * s) + 'l' + (13 * s) + ' ' + (14 * s) + 'h' + (-52 * s) + 'l' + (13 * s) + ' ' + (-14 * s) + 'h' + (-7 * s) + 'l' + (12 * s) + ' ' + (-14 * s) + 'h' + (-6 * s) + 'z" fill="' + c + '"/><rect x="' + (x - 2 * s) + '" y="' + (y + 6 * s) + '" width="' + (4 * s) + '" height="' + (6 * s) + '" fill="#3a2a1a"/>';
  const GREEN = "#00a94f", MINT = "#9be7c4", GOLD = "#f2c14e", ICE = "#bfe8ff";

  /* 1. Union Depot, METRO Green Line, Lowertown St. Paul: the pale stone depot with its row of columns, the white train with the green band sliding in, snow falling */
  function akstation() {
    const tr = '<g class="anim-train"><rect x="30" y="150" width="300" height="62" rx="10" fill="#f2f4f5" stroke="#8a9196" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (46 + i * 46) + '" y="160" width="34" height="24" rx="3" fill="#1d2a33"/>').join("") +
      '<rect x="30" y="190" width="300" height="7" fill="' + GREEN + '"/><rect x="30" y="199" width="300" height="3" fill="#0a3d6b"/>' +
      '<path d="M170 150l14 -16h20" stroke="#555" stroke-width="2" fill="none"/><circle cx="318" cy="204" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ak1)"/>' + stars(10) +
      /* the depot: long pale stone front, a row of tall columns, the cornice */
      '<rect x="40" y="62" width="320" height="84" fill="#d8cdb4"/><rect x="34" y="56" width="332" height="10" fill="#c4b89c"/><rect x="40" y="66" width="320" height="6" fill="#bfb293"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (60 + i * 30) + '" y="74" width="12" height="66" fill="#eee5d0" stroke="#b5a888" stroke-width="1"/>').join("") +
      Array.from({ length: 9 }, (_, i) => '<rect class="ak-glow' + (i % 2 ? " ak-g2" : "") + '" x="' + (75 + i * 30) + '" y="84" width="12" height="44" fill="#ffd98a" opacity=".8"/>').join("") +
      '<text x="200" y="64" text-anchor="middle" ' + font + ' font-size="8" fill="#6a5d42" letter-spacing="3">UNION DEPOT</text>' +
      '<rect x="0" y="146" width="400" height="70" fill="#1a2028" opacity=".55"/>' + tr +
      '<rect x="0" y="212" width="400" height="8" fill="#f2c200"/><rect x="0" y="220" width="400" height="40" fill="#9aa0a6"/><rect x="0" y="232" width="400" height="28" fill="#eef4f8" opacity=".75"/>' +
      '<rect x="352" y="100" width="6" height="112" fill="#2f3338"/><rect x="246" y="96" width="146" height="34" rx="3" fill="#111"/>' +
      '<text x="256" y="118" ' + font + ' font-size="13" fill="#fff">Union Depot</text>' + badge(338, 113, "GRN", GREEN) +
      snow(26),
      sky("ak1", "#0c1830", "#3a5a7a"));
  }

  /* 2. The Winter Carnival ice palace in St. Paul: towers cut from pale-blue lake ice, colored lights glowing inside, snow coming down (So Cold) */
  function akpalace() {
    const block = (x, y, w, h) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + ICE + '" opacity=".75" stroke="#e9f8ff" stroke-width="1.2"/>';
    let ice = "";
    for (let r = 0; r < 6; r++) for (let c = 0; c < 12; c++) ice += block(40 + c * 27 + (r % 2 ? 13 : 0), 210 - (r + 1) * 16, 27, 16);
    const tower = (x, top, w) => { let s = ""; for (let y = 210; y > top; y -= 16) s += block(x, y - 16, w, 16); return s + '<path d="M' + (x - 4) + ' ' + top + 'l' + (w / 2 + 4) + ' -34l' + (w / 2 + 4) + ' 34z" fill="#d8f3ff" stroke="#fff" stroke-width="1.2"/>'; };
    return svg(
      '<rect width="400" height="260" fill="url(#ak2)"/>' + stars(16) +
      ice.replace(/<rect x="(\d+)"/g, (m, x) => +x > 368 ? '<rect x="' + x + '" opacity="0"' : m) +
      tower(70, 82, 40) + tower(290, 82, 40) + tower(176, 50, 48) +
      '<rect class="ak-glow" x="182" y="110" width="36" height="90" fill="#8ff2c4" opacity=".55"/><rect class="ak-glow ak-g2" x="76" y="130" width="28" height="70" fill="#b48cff" opacity=".55"/><rect class="ak-glow" x="296" y="130" width="28" height="70" fill="#7fd6ff" opacity=".55"/>' +
      '<path d="M182 210v-40q18 -20 36 0v40z" fill="#123047" opacity=".85"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#eef6fb"/><path d="M0 214q100 -8 200 0t200 0" stroke="#cfe3ee" stroke-width="3" fill="none"/>' +
      '<g fill="#1d2a3a">' + [30, 60, 330, 362].map((x, i) => '<rect x="' + (x - 4) + '" y="' + (218 + (i % 2) * 6) + '" width="8" height="18" rx="3"/><circle cx="' + x + '" cy="' + (214 + (i % 2) * 6) + '" r="5"/>').join("") + '</g>' +
      snow(30),
      sky("ak2", "#050b1e", "#28406e"));
  }

  /* 3. Northern Lights over the Mississippi: green and violet curtains moving over the river bluffs, the long steel High Bridge arch, ice on the water */
  function aknorth() {
    const curtain = (d, fill, cls) => '<path class="ak-au ' + (cls || "") + '" d="' + d + '" fill="url(#' + fill + ')"/>';
    const fade = (id, c) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c + '" stop-opacity="0"/><stop offset=".35" stop-color="' + c + '" stop-opacity=".7"/><stop offset="1" stop-color="' + c + '" stop-opacity="0"/></linearGradient>';
    return svg(
      '<rect width="400" height="260" fill="url(#ak3)"/>' + stars(30) +
      curtain("M-10 70q60 -50 120 -20t130 -30t170 6v120q-90 -20 -170 6t-130 -6t-120 14z", "akg") +
      curtain("M-10 100q80 -40 160 -16t120 -30t140 0v90q-70 -14 -140 4t-120 -4t-160 10z", "akv", "ak-au2") +
      curtain("M-10 56q60 -36 180 -12t110 -20t130 6v70q-70 -14 -140 0t-110 -4t-180 10z", "akg2", "ak-au2") +
      /* bluffs */
      '<path d="M0 150q40 -18 90 -10t70 4l0 36h-160z" fill="#0d1a1c"/><path d="M250 150q50 -16 90 -8t60 -4v40h-150z" fill="#0d1a1c"/>' +
      '<g fill="#14262a">' + [20, 46, 70, 300, 330, 370].map((x, i) => pine(x, 146 - (i % 2) * 4, 0.55, "#14262a")).join("") + '</g>' +
      /* the High Bridge: steel arch and deck */
      '<path d="M60 150h280" stroke="#3a4a58" stroke-width="6"/><path d="M110 196q90 -80 180 0" stroke="#4a6070" stroke-width="5" fill="none"/>' +
      Array.from({ length: 13 }, (_, i) => { const x = 116 + i * 14; const t = (x - 110) / 180; const y = 196 - 4 * 40 * t * (1 - t) * 1; return '<path d="M' + x + ' 150V' + y.toFixed(1) + '" stroke="#4a6070" stroke-width="1.6"/>'; }).join("") +
      '<rect x="104" y="150" width="8" height="50" fill="#3a4a58"/><rect x="288" y="150" width="8" height="50" fill="#3a4a58"/>' +
      Array.from({ length: 8 }, (_, i) => '<circle class="ak-glow' + (i % 2 ? " ak-g2" : "") + '" cx="' + (80 + i * 34) + '" cy="146" r="1.8" fill="#ffe8a8"/>').join("") +
      /* river with ice */
      '<rect x="0" y="186" width="400" height="74" fill="#0e2530"/>' +
      '<path d="M0 200q100 10 200 0t200 0" stroke="#8ff2c4" stroke-width="2" opacity=".35" class="ak-glow"/><path d="M0 220q120 8 240 -2t160 4" stroke="#b48cff" stroke-width="2" opacity=".3" class="ak-glow ak-g2"/>' +
      '<g fill="#dbe9f0" opacity=".85"><path d="M20 236l40 -6l30 8l-50 6z"/><path d="M180 246l50 -6l40 8l-70 6z"/><path d="M300 228l40 -4l30 6l-56 4z"/></g>',
      sky("ak3", "#020611", "#0c1f2e") + fade("akg", "#5dffb0") + fade("akv", "#b07cff") + fade("akg2", "#7fffd4"));
  }

  /* 4. The studio in the Wisconsin woods: an old wooden house in the snowy pines, warm windows, the mixing board glowing inside, smoke from the chimney */
  function akbarn() {
    return svg(
      '<rect width="400" height="260" fill="url(#ak4)"/>' + stars(18) +
      '<g>' + [20, 60, 100, 300, 340, 380].map((x, i) => pine(x, 168 - (i % 3) * 6, 1.3 - (i % 2) * 0.25, i % 2 ? "#163a2a" : "#1d4a34")).join("") + '</g>' +
      /* the house */
      '<rect x="128" y="104" width="150" height="86" fill="#7a4a2c"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M128 ' + (112 + i * 9) + 'h150" stroke="#6a3e24" stroke-width="1.2"/>').join("") +
      '<path d="M116 108l87 -50l87 50z" fill="#3a2a22"/><path d="M116 108l87 -50l87 50" stroke="#f4f8fb" stroke-width="5" fill="none"/>' +
      '<rect x="236" y="64" width="14" height="30" fill="#5a3a2a"/>' +
      '<circle class="ak-sm" cx="243" cy="58" r="7" fill="#cfd8de"/><circle class="ak-sm ak-sm2" cx="243" cy="58" r="6" fill="#cfd8de"/>' +
      /* window with the board inside */
      '<rect x="146" y="124" width="70" height="44" fill="#ffd98a"/><rect x="146" y="124" width="70" height="44" fill="none" stroke="#3a2416" stroke-width="3"/>' +
      '<rect x="152" y="150" width="58" height="14" fill="#2a2a30"/>' + Array.from({ length: 7 }, (_, i) => '<rect class="ak-mt' + (i % 2 ? " ak-mt2" : "") + '" x="' + (155 + i * 8) + '" y="140" width="4" height="10" fill="' + (i % 3 ? GREEN : GOLD) + '"/>').join("") +
      '<rect x="232" y="132" width="30" height="58" fill="#4a2c18"/><circle cx="256" cy="162" r="2" fill="' + GOLD + '"/>' +
      '<rect class="ak-glow" x="146" y="124" width="70" height="44" fill="#fff3c8" opacity=".25"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#eef4f8"/><path d="M0 190q100 -6 200 0t200 0" stroke="#d2e2ec" stroke-width="3" fill="none"/>' +
      '<path d="M236 190l-30 70h40l10 -70z" fill="#d9e6ee"/>' +
      '<text x="200" y="242" text-anchor="middle" ' + font + ' font-size="11" fill="#5a6c78" letter-spacing="3">EAU CLAIRE, WISCONSIN</text>' +
      snow(22),
      sky("ak4", "#0a1426", "#2d4a6a"));
  }

  /* 5. W 5th St and Market St at Rice Park: green signs, KINGDOM tagged on the wall, the Landmark Center's rose granite towers and red roofs behind */
  function akcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ak5)"/>' + stars(14) +
      /* Landmark Center: rose-brown granite block, corner turrets with pointed red roofs, the tall center tower */
      '<rect x="110" y="66" width="190" height="80" fill="#9a6e5e"/>' +
      Array.from({ length: 3 }, (_, r) => Array.from({ length: 7 }, (_, c) => '<path class="' + ((r + c) % 3 ? "" : "ak-glow") + '" d="M' + (122 + c * 26) + ' ' + (98 + r * 16) + 'v-8q5 -6 10 0v8z" fill="' + ((r + c) % 3 ? "#2a2430" : "#ffd98a") + '"/>').join("")).join("") +
      '<rect x="100" y="54" width="22" height="92" fill="#8a5e50"/><path d="M96 56l15 -28l15 28z" fill="#a8382c"/><rect x="288" y="54" width="22" height="92" fill="#8a5e50"/><path d="M284 56l15 -28l15 28z" fill="#a8382c"/>' +
      '<rect x="190" y="30" width="30" height="40" fill="#8a5e50"/><path d="M186 32l19 -26l19 26z" fill="#a8382c"/><circle cx="205" cy="44" r="6" fill="#efe6d4" stroke="#5a3a30" stroke-width="1.5"/>' +
      '<rect x="0" y="100" width="100" height="46" fill="#1c2236"/><rect x="310" y="90" width="90" height="56" fill="#1c2236"/>' +
      /* the wall with the tag */
      '<rect x="0" y="140" width="400" height="84" fill="#5a5f6a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (148 + i * 8) + 'h400" stroke="#4c515c" stroke-width="1"/>').join("") +
      tag("KINGDOM", 22, 196, 52, MINT, -6) + tag("SO COLD", 196, 214, 26, ICE, -4) + tag("PB PRINCE", 36, 218, 18, GOLD, -3) +
      '<g class="ak-sp"><circle cx="186" cy="168" r="3" fill="' + MINT + '" opacity=".7"/></g><g class="ak-sp ak-sp2"><circle cx="192" cy="162" r="2" fill="' + MINT + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#6a6e74"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/><rect x="0" y="246" width="400" height="14" fill="#eef4f8" opacity=".8"/>' +
      '<rect x="352" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(306, 98, 98, "W 5th St") + sign(300, 124, 104, "Market St") +
      snow(16),
      sky("ak5", "#0e1630", "#4a5a8a"));
  }

  window.SCENES = { akstation: akstation, akpalace: akpalace, aknorth: aknorth, akbarn: akbarn, akcorner: akcorner };
})();
