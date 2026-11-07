/* travisthompson scenes (Regions tab: The Northwest; Burien, south of Seattle). CSS classes prefixed tt- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ttflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.tt-flk{animation:ttflick 2.6s infinite}.tt-flk2{animation-delay:.9s}' +
    '@keyframes ttrain{0%{transform:translate(0,-40px)}100%{transform:translate(-14px,280px)}}.tt-rn{animation:ttrain 1.1s linear infinite}.tt-rn2{animation-delay:-.37s}.tt-rn3{animation-delay:-.74s}' +
    '@keyframes ttbike{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.tt-bike{animation:ttbike 8s linear infinite;animation-delay:-3.6s}' +
    '@keyframes ttspin{to{transform:rotate(360deg)}}.tt-wh{transform-box:fill-box;transform-origin:50% 50%;animation:ttspin .6s linear infinite}' +
    '@keyframes ttferry{0%{transform:translateX(0)}100%{transform:translateX(-160px)}}.tt-ferry{animation:ttferry 16s ease-in-out infinite alternate}' +
    '@keyframes ttwave{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}.tt-wv{animation:ttwave 3s ease-in-out infinite}.tt-wv2{animation-delay:-1.5s}' +
    '@keyframes ttmono{0%{transform:translateX(-260px)}100%{transform:translateX(460px)}}.tt-mono{animation:ttmono 9s linear infinite;animation-delay:-4s}' +
    '@keyframes ttglow{0%,100%{opacity:.45}50%{opacity:1}}.tt-glow{animation:ttglow 2.2s ease-in-out infinite}.tt-g2{animation-delay:-1.1s}' +
    '@keyframes ttspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tt-sp{animation:ttspray 1.4s ease-out infinite}.tt-sp2{animation-delay:.45s}' +
    '@keyframes ttcloud{0%{transform:translateX(0)}100%{transform:translateX(50px)}}.tt-cl{animation:ttcloud 14s ease-in-out infinite alternate}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, fg) => { const w = txt.length * 8 + 12; return '<rect x="' + x + '" y="' + (y - 9) + '" width="' + w + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + w / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (fg || "#fff") + '">' + txt + '</text>'; };
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const rain = n => Array.from({ length: n }, (_, i) => '<path class="tt-rn' + ["", " tt-rn2", " tt-rn3"][i % 3] + '" d="M' + ((i * 37) % 420) + ' ' + ((i * 29) % 120) + 'l-3 12" stroke="#cfe3f2" stroke-width="1.2" opacity=".5"/>').join("");
  const GRN = "#00653a", GOLD = "#ffc20e", RR = "#c8102e", RRY = "#f6b221", BLUE = "#4fb8e8";

  /* 1. Burien Transit Center: the bus bays under the canopy, the black sign with the RapidRide F Line and the 131/132 badges, a red-and-yellow RapidRide bus pulling into the bay in the drizzle */
  function ttstation() {
    const bus = '<g class="anim-train"><rect x="24" y="118" width="300" height="74" rx="10" fill="' + RR + '" stroke="#5a0a10" stroke-width="2"/>' +
      '<rect x="24" y="168" width="300" height="10" fill="' + RRY + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 44) + '" y="128" width="34" height="30" rx="3" fill="#1b2630"/>').join("") +
      '<rect x="300" y="128" width="20" height="54" rx="2" fill="#1b2630"/><rect x="250" y="120" width="70" height="8" rx="2" fill="#111"/><text x="285" y="127" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">F  RENTON</text>' +
      '<circle cx="80" cy="194" r="12" fill="#222"/><circle cx="80" cy="194" r="5" fill="#9aa1a8"/><circle cx="270" cy="194" r="12" fill="#222"/><circle cx="270" cy="194" r="5" fill="#9aa1a8"/><circle cx="320" cy="182" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tt1)"/>' +
      '<g fill="#4a5560"><rect x="250" y="40" width="140" height="80"/><rect x="0" y="60" width="80" height="60"/></g>' +
      '<g fill="#e8d27a" opacity=".5">' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (262 + (i % 6) * 21) + '" y="' + (52 + Math.floor(i / 6) * 22) + '" width="10" height="10"/>').join("") + '</g>' +
      '<rect x="0" y="120" width="400" height="90" fill="#5d636a"/>' + bus +
      '<rect x="0" y="206" width="400" height="8" fill="#c9c4b8"/><rect x="0" y="214" width="400" height="46" fill="#8f8a80"/>' +
      [70, 200, 330].map(x => '<rect x="' + (x - 3) + '" y="70" width="6" height="140" fill="#2f3b46"/>').join("") +
      '<path d="M10 72h380l-20 -14h-340z" fill="#2f3b46"/>' +
      '<rect x="64" y="10" width="272" height="36" rx="3" fill="#111"/><text x="76" y="26" ' + font + ' font-size="12" fill="#fff">Burien Transit Center</text><text x="76" y="39" ' + font + ' font-size="8" fill="#bbb">KING COUNTY METRO</text>' +
      badge(222, 33, "F", RR) + badge(246, 33, "131", RRY, "#111") + badge(288, 33, "132", RRY, "#111") +
      '<rect x="150" y="226" width="100" height="5" rx="2" fill="#fff6c2" opacity=".4" class="tt-flk"/>' + rain(26),
      sky("tt1", "#56636f", "#a5b0b9"));
  }

  /* 2. Ambaum Blvd SW, the boulevard he grew up on (BLVD BOY): low shops, power lines, a kid on a ten-speed rolling down the boulevard ("ridin' on my ten-speed") */
  function ttblvd() {
    const bike = '<g class="tt-bike"><g transform="translate(0 0)"><g class="tt-wh"><circle cx="20" cy="200" r="14" fill="none" stroke="#222" stroke-width="3"/><path d="M6 200h28M20 186v28" stroke="#666" stroke-width="1"/></g>' +
      '<g class="tt-wh"><circle cx="66" cy="200" r="14" fill="none" stroke="#222" stroke-width="3"/><path d="M52 200h28M66 186v28" stroke="#666" stroke-width="1"/></g>' +
      '<path d="M20 200l18 -22h22l6 22M38 178l-6 -8h10M60 178l2 -10h6" stroke="' + BLUE + '" stroke-width="3" fill="none"/>' +
      '<path d="M40 170l10 -20l12 4" stroke="#2a2a2e" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="54" cy="142" r="7" fill="#2a2a2e"/><path d="M48 160l-6 16M50 160l12 18" stroke="#2a2a2e" stroke-width="4" stroke-linecap="round"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tt2)"/>' +
      '<g class="tt-cl"><ellipse cx="90" cy="34" rx="60" ry="12" fill="#fff" opacity=".6"/><ellipse cx="290" cy="24" rx="50" ry="10" fill="#fff" opacity=".5"/></g>' +
      '<g><rect x="10" y="100" width="110" height="70" fill="#c9b79a"/><rect x="10" y="94" width="110" height="10" fill="#8a3b2e"/><rect x="24" y="120" width="34" height="30" fill="#2c3a44"/><rect x="70" y="120" width="34" height="30" fill="#2c3a44"/>' +
      '<rect x="140" y="110" width="90" height="60" fill="#9fb3a6"/><rect x="150" y="124" width="70" height="26" fill="#2c3a44"/>' +
      '<rect x="250" y="96" width="140" height="74" fill="#d8d0c0"/><rect x="250" y="90" width="140" height="10" fill="' + GRN + '"/><rect x="266" y="118" width="40" height="34" fill="#2c3a44"/><rect x="330" y="118" width="40" height="34" fill="#2c3a44"/></g>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 3) + '" y="40" width="6" height="130" fill="#6b5440"/><rect x="' + (x - 18) + '" y="48" width="36" height="4" fill="#6b5440"/>').join("") +
      '<path d="M0 52q60 14 120 2t140 2t140 -2M0 60q60 14 120 2t140 2t140 -2" stroke="#333" stroke-width="1" fill="none"/>' +
      '<rect x="0" y="170" width="400" height="10" fill="#b7b2a6"/><rect x="0" y="180" width="400" height="80" fill="#4d5156"/><path d="M0 222h400" stroke="' + GOLD + '" stroke-width="3" stroke-dasharray="26 16"/>' +
      bike + sign(18, 62, 140, "AMBAUM BLVD SW"),
      sky("tt2", "#8fb6d4", "#dbe6ec"));
  }

  /* 3. Seahurst Park, Burien's beach on Puget Sound: driftwood on the gray sand, the ferry crossing the Sound, the snowy Olympic Mountains across the water */
  function ttseahurst() {
    return svg(
      '<rect width="400" height="260" fill="url(#tt3)"/>' +
      '<path d="M0 120l40 -30l26 14l30 -34l34 30l28 -22l40 36l36 -28l30 20l40 -30l34 26l30 -16l32 34v10h-400z" fill="#6d7f95"/>' +
      '<path d="M96 70l12 12l-14 -2zM164 76l10 12l-16 -4zM302 88l12 10l-14 -2zM40 90l10 8l-12 0z" fill="#f4f6f8"/>' +
      '<rect x="0" y="120" width="400" height="80" fill="#3f6475"/>' +
      Array.from({ length: 9 }, (_, i) => '<path class="tt-wv' + (i % 2 ? " tt-wv2" : "") + '" d="M' + (14 + i * 44) + ' ' + (136 + (i % 3) * 20) + 'h26" stroke="#a9c8d4" stroke-width="2" opacity=".6"/>').join("") +
      '<g class="tt-ferry"><g transform="translate(250 0)"><path d="M0 132h110l-10 12h-92z" fill="#f2f2ee" stroke="#555" stroke-width="1.5"/><rect x="14" y="120" width="80" height="12" fill="#f2f2ee" stroke="#555" stroke-width="1.5"/><rect x="18" y="124" width="72" height="4" fill="#1d6b45"/><rect x="40" y="110" width="26" height="10" fill="#f2f2ee" stroke="#555" stroke-width="1.5"/><rect x="48" y="104" width="10" height="6" fill="#1d6b45"/></g></g>' +
      '<path d="M0 200q100 -16 200 -6t200 -4v70h-400z" fill="#b9ad98"/>' +
      '<path d="M40 222l80 -10l4 6l-80 10z" fill="#8a7a62"/><path d="M220 232l90 -6l2 6l-90 6z" fill="#9a8a70"/><path d="M300 214l50 4l-2 5l-50 -4z" fill="#7a6a52"/>' +
      sign(250, 236, 130, "SEAHURST PARK"),
      sky("tt3", "#9cbcd6", "#e2ebf0"));
  }

  /* 4. MoPOP at Seattle Center, where he came up through The Residency rap program: the crumpled metal skin in gold, red, purple and blue, the monorail gliding through it */
  function ttmopop() {
    const mono = '<g class="tt-mono"><rect x="0" y="118" width="210" height="22" rx="11" fill="#e9ecef" stroke="#7a8590" stroke-width="1.5"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (14 + i * 24) + '" y="122" width="16" height="9" rx="2" fill="#2a3a48"/>').join("") + '<rect x="0" y="133" width="210" height="3" fill="' + RR + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tt4)"/>' +
      '<path d="M20 200q-6 -80 50 -100q40 -14 60 30q10 30 -10 70z" fill="#d9a441"/>' +
      '<path d="M110 200q-10 -110 60 -130q60 -14 70 60q4 40 -20 70z" fill="#b8323a"/>' +
      '<path d="M210 200q0 -90 60 -96q50 -4 56 54q2 22 -10 42z" fill="#7b4a9e"/>' +
      '<path d="M300 200q10 -60 50 -62q40 0 46 40v22z" fill="#3a78b8"/>' +
      Array.from({ length: 12 }, (_, i) => '<path class="tt-glow' + (i % 2 ? " tt-g2" : "") + '" d="M' + (40 + i * 30) + ' ' + (110 + (i % 4) * 14) + 'q8 -6 16 0" stroke="#fff" stroke-width="2" fill="none" opacity=".5"/>').join("") +
      '<rect x="0" y="140" width="400" height="6" fill="#9aa4ad"/>' + mono +
      [60, 200, 340].map(x => '<rect x="' + (x - 5) + '" y="146" width="10" height="56" fill="#9aa4ad"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#5b6168"/>' +
      tag("THE RESIDENCY", 120, 236, 22, GOLD, -3),
      sky("tt4", "#7aa8cc", "#d5e3ec"));
  }

  /* 5. Ambaum Blvd SW and SW 154th St in Burien: green street signs, a wall with TRAVIS THOMPSON tagged in Sonics green and gold, Mount Rainier rising to the southeast */
  function ttcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#tt5)"/>' +
      '<path d="M120 140l70 -64q10 -8 20 0l80 64z" fill="#8a9cb0"/><path d="M168 96l22 -20q10 -8 20 0l26 22l-14 -4l-10 6l-12 -8l-14 8z" fill="#fff"/>' +
      '<g fill="#25472f"><path d="M0 140l16 -44l16 44zM28 140l14 -36l14 36zM360 140l16 -42l16 42z"/></g>' +
      '<rect x="0" y="136" width="400" height="10" fill="#5f8a4a"/>' +
      '<rect x="20" y="112" width="270" height="108" fill="#cfc6b6"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M20 ' + (122 + i * 10) + 'h270" stroke="#bdb3a2" stroke-width="1"/>').join("") +
      tag("TRAVIS", 40, 170, 44, GOLD, -6) + tag("THOMPSON", 66, 206, 30, "#1ea05a", -4) + tag("BLVD BOY", 200, 132, 15, "#fff", -3) +
      '<circle class="tt-sp" cx="252" cy="160" r="3" fill="' + GOLD + '"/><circle class="tt-sp tt-sp2" cx="260" cy="156" r="2" fill="' + GOLD + '"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#55595e"/><path d="M0 238h400" stroke="#e6e2d8" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="338" y="92" width="6" height="132" fill="#6e737b"/>' + sign(278, 88, 120, "AMBAUM BLVD SW") + sign(296, 114, 100, "SW 154TH ST"),
      sky("tt5", "#8fb8d8", "#e6eef2"));
  }

  window.SCENES = { ttstation, ttblvd, ttseahurst, ttmopop, ttcorner };
})();
