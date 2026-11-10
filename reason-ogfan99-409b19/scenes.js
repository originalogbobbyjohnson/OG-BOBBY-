/* reason scenes (Regions tab: Los Angeles + SoCal; Carson, the Del Amo side). CSS classes prefixed rs- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rsflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.rs-flk{animation:rsflick 2.6s infinite}.rs-flk2{animation-delay:.9s}' +
    '@keyframes rssway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.rs-sway{transform-box:fill-box;transform-origin:50% 100%;animation:rssway 4s ease-in-out infinite}.rs-sw2{animation-delay:-2s}' +
    '@keyframes rsrock{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.rs-rock{transform-box:fill-box;transform-origin:50% 0%;animation:rsrock 2.8s ease-in-out infinite}' +
    '@keyframes rsspin{to{transform:rotate(360deg)}}.rs-spin{transform-box:view-box;transform-origin:200px 92px;animation:rsspin 9s linear infinite}' +
    '@keyframes rsball{0%{transform:translate(0,0)}50%{transform:translate(70px,-60px)}100%{transform:translate(140px,-20px)}}.rs-ball{animation:rsball 2.2s ease-in-out infinite}' +
    '@keyframes rsglow{0%,100%{opacity:.45}50%{opacity:1}}.rs-glow{animation:rsglow 2.2s ease-in-out infinite}.rs-g2{animation-delay:-1.1s}' +
    '@keyframes rsflare{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.35)}}.rs-flare{transform-box:fill-box;transform-origin:50% 100%;animation:rsflare .9s ease-in-out infinite}' +
    '@keyframes rsspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rs-sp{animation:rsspray 1.4s ease-out infinite}.rs-sp2{animation-delay:.45s}' +
    '@keyframes rspetal{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.rs-tul{animation:rspetal 1.6s ease-in-out infinite}.rs-tul2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const palm = (x, base, h, cls) => {
    const top = base - h;
    let fr = "";
    for (let i = 0; i < 9; i++) { const a = (-160 + i * 17.5) * Math.PI / 180, l = 22 + (i % 2) * 6; fr += '<path d="M' + x + ' ' + top + 'q' + (Math.cos(a) * l * .5) + ' ' + (Math.sin(a) * l * .5 - 6) + ' ' + (Math.cos(a) * l) + ' ' + (Math.sin(a) * l + 4) + '" stroke="#1d2a22" stroke-width="3.2" fill="none" stroke-linecap="round"/>'; }
    return '<g class="rs-sway ' + (cls || "") + '"><path d="M' + (x - 2) + ' ' + base + 'q4 -' + (h / 2) + ' 2 -' + h + 'h2q0 ' + (h / 2) + ' 1 ' + h + 'z" fill="#2a2a26"/>' + fr + '</g>';
  };
  const GOLD = "#e9b949", RED = "#c8323a", TEAL = "#4cc3b5", METRO = "#e56b1f";

  /* 1. Metro Local 205 pulling up on Wilmington Ave at Del Amo Blvd in Carson, where the 205 turns off Wilmington: wide flat street, low tilt-up warehouses, palms, the bus slides in */
  function rsstation() {
    const bus = '<g class="anim-train"><rect x="40" y="128" width="300" height="74" rx="9" fill="#f2f2ef" stroke="#8d949b" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (64 + i * 40) + '" y="140" width="32" height="28" rx="3" fill="#22303b"/>').join("") +
      '<rect x="308" y="138" width="26" height="40" rx="3" fill="#22303b"/><rect x="40" y="176" width="300" height="9" fill="' + METRO + '"/>' +
      '<rect x="248" y="131" width="80" height="10" rx="2" fill="#111"/><text x="288" y="139" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">205 WILMINGTON</text>' +
      '<circle cx="92" cy="204" r="14" fill="#1b1b1b"/><circle cx="92" cy="204" r="6" fill="#9a9a9a"/><circle cx="288" cy="204" r="14" fill="#1b1b1b"/><circle cx="288" cy="204" r="6" fill="#9a9a9a"/>' +
      '<circle cx="336" cy="190" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rs1)"/>' +
      '<g fill="#b9b2a4"><rect x="0" y="96" width="120" height="38"/><rect x="250" y="90" width="150" height="44"/></g><g fill="#a19a8c"><rect x="0" y="96" width="120" height="5"/><rect x="250" y="90" width="150" height="5"/></g>' +
      palm(334, 134, 70) + palm(376, 134, 84, "rs-sw2") +
      '<rect x="226" y="36" width="5" height="98" fill="#5a4a3a"/><path d="M0 50q120 12 228 -6t172 8" stroke="#222" stroke-width="1.2" fill="none"/>' +
      '<rect x="0" y="134" width="400" height="10" fill="#c9c2b4"/><rect x="0" y="144" width="400" height="116" fill="#4b4b4f"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (i * 90 + 10) + '" y="236" width="50" height="5" fill="#f1d36b"/>').join("") +
      bus +
      '<rect x="18" y="86" width="5" height="112" fill="#555"/><rect x="2" y="66" width="38" height="26" rx="3" fill="#111"/><rect x="6" y="70" width="30" height="18" rx="2" fill="' + METRO + '"/><text x="21" y="84" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">205</text>' +
      '<rect x="92" y="12" width="216" height="34" rx="4" fill="#111" stroke="#333"/><text x="200" y="35" text-anchor="middle" ' + font + ' font-size="16" fill="#fff" letter-spacing="1">WILMINGTON / DEL AMO</text>',
      sky("rs1", "#3f86c9", "#f2c99a"));
  }

  /* 2. The porch (his album "Porches"): a Carson tract house at dusk, porch light on, two chairs, one rocking, the lawn and the sidewalk */
  function rsporch() {
    return svg(
      '<rect width="400" height="260" fill="url(#rs2)"/>' +
      palm(352, 150, 120, "rs-sw2") +
      '<path d="M60 96L200 40l140 56z" fill="#6b4a3a" stroke="#4a3226" stroke-width="2"/>' +
      '<rect x="74" y="96" width="252" height="80" fill="#e7dcc6" stroke="#b8a888" stroke-width="2"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M74 ' + (104 + i * 9) + 'h252" stroke="#d6c9ae" stroke-width="1"/>').join("") +
      '<rect x="96" y="110" width="44" height="34" fill="#ffd98a" class="rs-glow"/><path d="M118 110v34M96 127h44" stroke="#8a6d45" stroke-width="2"/>' +
      '<rect x="262" y="110" width="44" height="34" fill="#3d5266"/><path d="M284 110v34M262 127h44" stroke="#8a6d45" stroke-width="2"/>' +
      '<rect x="184" y="114" width="32" height="62" fill="#7a2e2a"/><circle cx="210" cy="146" r="2" fill="' + GOLD + '"/>' +
      '<path d="M66 100h268l-10 14H76z" fill="#5a3d2e"/>' + [86, 160, 240, 314].map(x => '<rect x="' + x + '" y="112" width="6" height="64" fill="#f4f1e8"/>').join("") +
      '<circle cx="232" cy="122" r="5" fill="#fff4b0" class="rs-glow rs-g2"/>' +
      '<rect x="66" y="176" width="268" height="10" fill="#9b8f80"/><rect x="176" y="186" width="48" height="8" fill="#b3a898"/><rect x="170" y="194" width="60" height="8" fill="#c4baab"/>' +
      '<g class="rs-rock"><path d="M118 150v26M146 150v26M118 150h28M118 164h28" stroke="#3b2a1e" stroke-width="3" fill="none"/><path d="M112 178q20 6 40 0" stroke="#3b2a1e" stroke-width="3" fill="none"/></g>' +
      '<path d="M254 150v26M282 150v26M254 150h28M254 164h28" stroke="#3b2a1e" stroke-width="3" fill="none"/>' +
      '<rect x="0" y="202" width="400" height="34" fill="#5d9442"/><rect x="0" y="236" width="400" height="24" fill="#c9c4bb"/>',
      sky("rs2", "#2d3a74", "#e98f6b"));
  }

  /* 3. The gym at Northwestern College in Iowa, where he hooped and started freestyling: hardwood, red-and-white walls, a jumper arcing to the rim */
  function rsgym() {
    return svg(
      '<rect width="400" height="260" fill="#e9e3d6"/>' +
      '<rect x="0" y="0" width="400" height="22" fill="#3b3b40"/>' + [60, 160, 260, 340].map(x => '<rect class="rs-flk" x="' + x + '" y="8" width="40" height="6" rx="2" fill="#fffbe6"/>').join("") +
      '<rect x="0" y="22" width="400" height="90" fill="#efe9dc"/>' + Array.from({ length: 7 }, (_, i) => '<rect x="0" y="' + (30 + i * 12) + '" width="400" height="6" fill="#d9d1c0"/>').join("") +
      '<rect x="0" y="104" width="400" height="20" fill="' + RED + '"/><text x="110" y="119" text-anchor="middle" ' + font + ' font-size="13" fill="#fff" letter-spacing="5">RED RAIDERS</text>' +
      '<rect x="0" y="124" width="400" height="136" fill="#d39a5a"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 30) + ' 124l-30 136" stroke="#c08446" stroke-width="1"/>').join("") +
      '<path d="M200 160a90 30 0 0 1 180 0" stroke="#fff" stroke-width="2.5" fill="none"/><path d="M0 200h400" stroke="#fff" stroke-width="2"/><rect x="300" y="160" width="100" height="40" fill="' + RED + '" opacity=".75"/>' +
      '<rect x="356" y="40" width="6" height="120" fill="#555"/><rect x="318" y="52" width="70" height="46" fill="#fff" stroke="#333" stroke-width="2"/><rect x="340" y="68" width="26" height="18" fill="none" stroke="' + RED + '" stroke-width="2"/>' +
      '<path d="M336 96h34" stroke="#e46b1c" stroke-width="3"/><path d="M338 98l6 14 8 -14 8 14 6 -14" stroke="#fff" stroke-width="1.2" fill="none"/>' +
      '<g class="rs-ball"><circle cx="190" cy="170" r="8" fill="#e07a2c" stroke="#5a2d0c" stroke-width="1.2"/><path d="M182 170h16M190 162v16" stroke="#5a2d0c" stroke-width="1"/></g>',
      "");
  }

  /* 4. The Dutch windmill in Orange City, Iowa, the college town where he started freestyling: red-brick body, white sails turning, tulip beds */
  function rswindmill() {
    return svg(
      '<rect width="400" height="260" fill="url(#rs4)"/>' +
      '<g fill="#fff" opacity=".85"><ellipse cx="70" cy="50" rx="30" ry="10"/><ellipse cx="96" cy="44" rx="22" ry="9"/><ellipse cx="320" cy="64" rx="34" ry="10"/></g>' +
      '<rect x="0" y="176" width="400" height="84" fill="#6aa84f"/>' +
      '<path d="M176 182l10 -86h28l10 86z" fill="#9b3b2a" stroke="#6e271b" stroke-width="2"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (177 + i * 1.2) + ' ' + (172 - i * 10) + 'h' + (46 - i * 2.4) + '" stroke="#7d2e20" stroke-width="1"/>').join("") +
      '<path d="M182 100q18 -26 36 0z" fill="#3f3f44"/><rect x="194" y="150" width="12" height="32" fill="#4a3426"/><rect x="186" y="118" width="8" height="10" fill="#f4f1e8"/><rect x="206" y="118" width="8" height="10" fill="#f4f1e8"/>' +
      '<rect x="168" y="138" width="64" height="6" fill="#5a4030"/>' +
      '<g class="rs-spin">' + [0, 90, 180, 270].map(a => '<g transform="rotate(' + a + ' 200 92)"><rect x="197" y="16" width="6" height="76" fill="#5a4030"/><rect x="203" y="20" width="18" height="64" fill="#f6f3ea" stroke="#8a7d6a" stroke-width="1.2"/>' +
        [30, 42, 54, 66].map(y => '<path d="M203 ' + y + 'h18" stroke="#c9bfae" stroke-width="1"/>').join("") + '</g>').join("") + '<circle cx="200" cy="92" r="5" fill="#333"/></g>' +
      Array.from({ length: 22 }, (_, i) => { const x = 14 + i * 18, y = 214 + (i % 2) * 10, c = ["#e63946", "#f4d35e", "#ff8fab", "#e63946"][i % 4]; return '<g class="rs-tul' + (i % 2 ? " rs-tul2" : "") + '"><path d="M' + x + ' ' + (y + 22) + 'v-18" stroke="#2f6b2a" stroke-width="2"/><path d="M' + (x - 5) + ' ' + y + 'q0 -10 5 -10q5 0 5 10q-5 4 -10 0z" fill="' + c + '"/></g>'; }).join(""),
      sky("rs4", "#5aa6e6", "#d7ecf8"));
  }

  /* 5. S Main St and Del Amo Blvd: green signs, a tan wall with REASON tagged, the refinery towers lit up behind at night */
  function rscorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#rs5)"/>' +
      '<g fill="#2a2d3a"><rect x="40" y="70" width="12" height="54"/><rect x="60" y="56" width="8" height="68"/><rect x="80" y="84" width="40" height="40" rx="18"/><rect x="130" y="62" width="10" height="62"/><rect x="250" y="76" width="44" height="48" rx="20"/><rect x="300" y="60" width="8" height="64"/><rect x="316" y="72" width="12" height="52"/></g>' +
      '<path d="M40 90h100M250 96h80" stroke="#2a2d3a" stroke-width="3"/>' +
      [[46, 74], [64, 60], [134, 66], [304, 64], [322, 76], [90, 90], [270, 84]].map((p, i) => '<circle class="rs-glow' + (i % 2 ? " rs-g2" : "") + '" cx="' + p[0] + '" cy="' + p[1] + '" r="1.8" fill="#ffd27a"/>').join("") +
      '<g class="rs-flare"><path d="M60 56q-4 -8 4 -16q2 8 4 4q2 6 -4 12z" fill="#ffa53b"/></g><g class="rs-flare"><path d="M300 60q-4 -8 4 -16q2 8 4 4q2 6 -4 12z" fill="#ffa53b"/></g>' +
      palm(196, 124, 86) +
      '<rect x="0" y="120" width="400" height="104" fill="#d4c3a2"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (132 + i * 16) + 'h400" stroke="#c4b18c" stroke-width="1"/>').join("") +
      tag("REASON", 18, 194, 52, TEAL, -6) + tag("DEL AMO", 236, 178, 20, GOLD, -4) + tag("SOMETHING MORE", 24, 218, 15, "#fff", -3) + tag("BETTER DAYZ", 180, 216, 18, RED, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#4d4d50"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(304, 98, 88, "S Main St") + sign(298, 124, 100, "Del Amo Blvd") +
      '<g class="rs-sp"><circle cx="140" cy="160" r="3" fill="' + TEAL + '" opacity=".7"/></g><g class="rs-sp rs-sp2"><circle cx="146" cy="154" r="2" fill="' + TEAL + '" opacity=".6"/></g>',
      sky("rs5", "#121630", "#5a3a5a"));
  }

  window.SCENES = { rsstation: rsstation, rsporch: rsporch, rsgym: rsgym, rswindmill: rswindmill, rscorner: rscorner };
})();
