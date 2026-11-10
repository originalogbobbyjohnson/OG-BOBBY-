/* sturgillsimpson scenes (Regions: More of the South / Genres: country; Versailles + Woodford County KY, born Jackson, Breathitt County). CSS classes prefixed ssx- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const SKY = "#7cc4f0", FURY = "#e8602a", GRASS = "#7fc15a", CREAM = "#f4ead6";
  const css = '<style>' +
    '@keyframes ssxcloud{0%{transform:translateX(0)}100%{transform:translateX(50px)}}.ssx-cl{animation:ssxcloud 14s ease-in-out infinite alternate}' +
    '@keyframes ssxsmoke{0%{transform:translate(0,0) scale(.6);opacity:.8}100%{transform:translate(-30px,-50px) scale(1.6);opacity:0}}.ssx-sm{transform-box:fill-box;transform-origin:50% 50%;animation:ssxsmoke 3s ease-out infinite}.ssx-sm2{animation-delay:-1s}.ssx-sm3{animation-delay:-2s}' +
    '@keyframes ssxrun{0%{transform:translateX(-120px)}100%{transform:translateX(470px)}}.ssx-run{animation:ssxrun 6s linear infinite}.ssx-run2{animation-delay:-2.2s}.ssx-run3{animation-delay:-4.1s}' +
    '@keyframes ssxgal{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.ssx-gal{animation:ssxgal .45s ease-in-out infinite}' +
    '@keyframes ssxcar{0%{transform:translateX(0)}100%{transform:translateX(-300px)}}.ssx-coal{animation:ssxcar 10s linear infinite}' +
    '@keyframes ssxblink{0%,100%{opacity:.25}50%{opacity:1}}.ssx-bl{animation:ssxblink 1.6s ease-in-out infinite}.ssx-bl2{animation-delay:-.8s}' +
    '@keyframes ssxswing{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.ssx-sw{transform-box:fill-box;transform-origin:50% 0%;animation:ssxswing 2.4s ease-in-out infinite}' +
    '@keyframes ssxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ssx-sp{animation:ssxspray 1.4s ease-out infinite}.ssx-sp2{animation-delay:.45s}' +
    '@keyframes ssxhand{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.ssx-hand{transform-origin:0 0;animation:ssxhand 12s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const hills = (y, c, amp) => '<path d="M0 ' + y + 'q50 -' + amp + ' 100 -' + (amp / 3) + 't100 -' + (amp / 2) + 't100 ' + (amp / 3) + 't100 -' + (amp / 2) + 'V260H0z" fill="' + c + '"/>';
  const tree = (x, y, s, c) => '<path d="M' + x + ' ' + (y - 26 * s) + 'l' + (10 * s) + ' ' + (18 * s) + 'h-' + (5 * s) + 'l' + (8 * s) + ' ' + (12 * s) + 'h-' + (26 * s) + 'l' + (8 * s) + ' -' + (12 * s) + 'h-' + (5 * s) + 'z" fill="' + c + '"/><rect x="' + (x - 1.5 * s) + '" y="' + (y + 4 * s) + '" width="' + (3 * s) + '" height="' + (5 * s) + '" fill="#4a3020"/>';
  const horse = (c, j) => '<g class="ssx-gal"><path d="M0 0q10 -8 28 -6q6 -8 12 -6l2 4q-4 2 -6 6q2 10 -6 14l2 14h-3l-3 -12q-10 2 -18 0l-4 12h-3l2 -14q-6 -4 -3 -10q-6 2 -10 8q2 -8 8 -10z" fill="' + c + '"/><path d="M16 -8q4 -6 10 -4l-2 6z" fill="' + j + '"/></g>';
  const fence = (y, c) => { let s = '<path d="M0 ' + y + 'h400M0 ' + (y + 8) + 'h400" stroke="' + c + '" stroke-width="3"/>'; for (let x = 6; x < 400; x += 34) s += '<rect x="' + x + '" y="' + (y - 4) + '" width="4" height="18" fill="' + c + '"/>'; return s; };

  /* 1. Bluegrass Railroad Museum, Woodford County Park, Versailles KY: the excursion train pulling in at the depot platform, black station sign */
  function ssxdepot() {
    return svg(
      '<rect width="400" height="260" fill="url(#ssx1)"/>' +
      '<g class="ssx-cl"><ellipse cx="70" cy="34" rx="36" ry="9" fill="#fff" opacity=".7"/><ellipse cx="260" cy="24" rx="30" ry="7" fill="#fff" opacity=".6"/></g>' +
      hills(140, "#6fa84e", 30) + hills(156, "#5a9440", 18) +
      tree(30, 140, 1.2, "#2f6a2a") + tree(360, 136, 1.4, "#2f6a2a") + tree(384, 142, 1, "#3a7a34") +
      /* small white depot */
      '<rect x="250" y="104" width="120" height="56" fill="' + CREAM + '" stroke="#5a4a3a" stroke-width="1.5"/><path d="M240 106l70 -26l70 26z" fill="#7a2e22"/>' +
      '<rect x="270" y="122" width="16" height="22" fill="#2f4a5a"/><rect x="300" y="118" width="22" height="42" fill="#5a3a22"/><rect x="336" y="122" width="16" height="22" fill="#2f4a5a"/>' +
      /* platform */
      '<rect x="0" y="160" width="400" height="16" fill="#b8b0a2"/><rect x="0" y="174" width="400" height="4" fill="#e8d84a"/>' +
      '<rect x="0" y="178" width="400" height="82" fill="#3e3a36"/>' + Array.from({ length: 26 }, (_, i) => '<rect x="' + (i * 16) + '" y="214" width="10" height="34" fill="#5a4630"/>').join("") +
      '<path d="M0 222h400M0 240h400" stroke="#9aa0a6" stroke-width="3"/>' +
      /* the train (anim-train slides it in) */
      '<g class="anim-train">' +
        '<rect x="20" y="168" width="110" height="50" rx="4" fill="#1d4f36" stroke="#0e2a1c" stroke-width="2"/><rect x="30" y="176" width="20" height="16" fill="#cfe6f2"/><rect x="58" y="176" width="20" height="16" fill="#cfe6f2"/><rect x="86" y="176" width="34" height="16" fill="#cfe6f2"/>' +
        '<rect x="20" y="200" width="110" height="5" fill="#e8b04a"/><text x="75" y="214" text-anchor="middle" ' + font + ' font-size="7" fill="#e8b04a">BLUEGRASS RAILROAD</text>' +
        '<rect x="134" y="172" width="150" height="46" rx="4" fill="#7a2e22" stroke="#3a1610" stroke-width="2"/>' + [146, 172, 198, 224, 250].map(x => '<rect x="' + x + '" y="180" width="18" height="14" fill="#f2e6c8"/>').join("") +
        [40, 110, 156, 262].map(x => '<circle cx="' + x + '" cy="222" r="7" fill="#111"/><circle cx="' + x + '" cy="222" r="3" fill="#888"/>').join("") +
      '</g>' +
      /* black station sign */
      '<rect x="96" y="40" width="4" height="54" fill="#333"/><rect x="236" y="40" width="4" height="54" fill="#333"/>' +
      '<rect x="60" y="30" width="226" height="48" rx="4" fill="#111" stroke="#fff" stroke-width="2"/>' +
      '<text x="188" y="54" text-anchor="middle" ' + font + ' font-size="18" fill="#fff">VERSAILLES, KY</text>' +
      '<text x="188" y="70" text-anchor="middle" ' + font + ' font-size="8.5" fill="' + SKY + '" letter-spacing="1">WOODFORD COUNTY PARK</text>' +
      '<rect x="68" y="40" width="26" height="16" rx="3" fill="#1d4f36"/><text x="81" y="52" text-anchor="middle" ' + font + ' font-size="9" fill="#e8b04a">BRM</text>',
      sky("ssx1", "#5aa8e0", "#d8eef8"));
  }

  /* 2. Keeneland, on Versailles Road between Versailles and Lexington: the gray stone grandstand with green trim, white rails, horses racing */
  function ssxkeene() {
    return svg(
      '<rect width="400" height="260" fill="url(#ssx2)"/>' +
      '<g class="ssx-cl"><ellipse cx="300" cy="30" rx="40" ry="9" fill="#fff" opacity=".7"/></g>' +
      tree(20, 92, 1.4, "#3a7a34") + tree(48, 96, 1.1, "#2f6a2a") + tree(380, 92, 1.4, "#3a7a34") +
      /* stone grandstand */
      '<rect x="70" y="52" width="270" height="60" fill="#a8a296"/>' +
      Array.from({ length: 9 }, (_, r) => Array.from({ length: 18 }, (_, c) => '<rect x="' + (70 + c * 15 + (r % 2) * 7) + '" y="' + (52 + r * 6.6) + '" width="14" height="6" fill="none" stroke="#8e887c" stroke-width=".6"/>').join("")).join("") +
      '<rect x="62" y="42" width="286" height="12" fill="#1f5a36"/><path d="M62 42l20 -12h246l20 12z" fill="#2a6a42"/>' +
      [90, 130, 170, 210, 250, 290, 320].map(x => '<rect x="' + x + '" y="60" width="22" height="26" fill="#2b3a30" stroke="#1f5a36" stroke-width="2"/><path d="M' + x + ' 64q11 -8 22 0" fill="#1f5a36"/>').join("") +
      '<rect x="70" y="96" width="270" height="16" fill="#cfc8b8"/>' + Array.from({ length: 34 }, (_, i) => '<circle cx="' + (76 + i * 8) + '" cy="102" r="2.4" fill="' + ["#e8602a", "#fff", "#7cc4f0", "#e8b04a"][i % 4] + '"/>').join("") +
      /* infield and track */
      '<rect x="0" y="112" width="400" height="20" fill="#6fae4c"/>' +
      '<rect x="0" y="132" width="400" height="80" fill="#b08a5a"/>' + fence(130, "#fff") + fence(208, "#fff") +
      '<g transform="translate(0 168)"><g class="ssx-run">' + horse("#5a3220", "#e8602a") + '</g></g>' +
      '<g transform="translate(0 184)"><g class="ssx-run ssx-run2">' + horse("#2a1a12", "#7cc4f0") + '</g></g>' +
      '<g transform="translate(0 176)"><g class="ssx-run ssx-run3">' + horse("#8a5a30", "#e8b04a") + '</g></g>' +
      '<rect x="0" y="222" width="400" height="38" fill="#4f8a3a"/>' +
      '<rect x="150" y="226" width="100" height="22" rx="3" fill="#111"/><text x="200" y="241" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">VERSAILLES RD</text>',
      sky("ssx2", "#6ab6ea", "#e6f4fb"));
  }

  /* 3. High Top Mountain above Jackson, Breathitt County: Appalachian ridges, a coal train on the North Fork of the Kentucky River */
  function ssxhightop() {
    return svg(
      '<rect width="400" height="260" fill="url(#ssx3)"/>' +
      '<circle cx="330" cy="50" r="22" fill="#ffd27a" opacity=".9"/>' +
      '<path d="M0 120q60 -70 130 -50q50 -40 110 -20q60 -30 160 20V260H0z" fill="#4a6a5a"/>' +
      '<path d="M0 140q70 -40 150 -24q60 -30 120 -6q70 -20 130 10V260H0z" fill="#3a5a44"/>' +
      '<path d="M0 160q80 -30 170 -14q70 -20 130 0q50 -10 100 4V260H0z" fill="#2f4a36"/>' +
      Array.from({ length: 22 }, (_, i) => tree(8 + i * 18, 160 + (i % 3) * 3, .7, i % 2 ? "#243c2a" : "#2a4630")).join("") +
      '<text x="140" y="96" text-anchor="middle" ' + font + ' font-size="9" fill="#e8f2e0" opacity=".85">HIGH TOP MOUNTAIN</text>' +
      /* river */
      '<path d="M0 212q100 -10 200 0t200 -4V236q-100 6 -200 0t-200 4z" fill="#5a8a9a"/>' +
      /* rail line with coal cars */
      '<rect x="0" y="194" width="400" height="6" fill="#5a4630"/><path d="M0 196h400" stroke="#9aa0a6" stroke-width="2"/>' +
      '<g class="ssx-coal">' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (120 + i * 44) + '" y="178" width="40" height="16" fill="#3a3a3a" stroke="#222" stroke-width="1.5"/><path d="M' + (122 + i * 44) + ' 178q18 -10 36 0z" fill="#111"/><circle cx="' + (128 + i * 44) + '" cy="196" r="3" fill="#111"/><circle cx="' + (152 + i * 44) + '" cy="196" r="3" fill="#111"/>').join("") + '</g>' +
      /* road sign */
      '<rect x="40" y="226" width="4" height="34" fill="#9aa0a6"/><rect x="10" y="236" width="4" height="24" fill="#9aa0a6"/>' +
      '<rect x="0" y="214" width="96" height="30" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="48" y="227" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">JACKSON</text><text x="48" y="239" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">BREATHITT CO</text>' +
      '<rect x="0" y="244" width="400" height="16" fill="#2a2a2a"/>',
      sky("ssx3", "#e88a5a", "#f8d8a0"));
  }

  /* 4. The freight yard in Salt Lake City where he worked the railroad before music: yellow locomotives, a swinging lantern, the Wasatch range behind */
  function ssxyard() {
    return svg(
      '<rect width="400" height="260" fill="url(#ssx4)"/>' +
      '<path d="M0 120l40 -40l30 20l50 -56l40 40l30 -24l60 50l40 -30l50 46l60 -40V160H0z" fill="#6a7a94"/>' +
      '<path d="M108 56L120 44L132 56l-6 4l-6 -4l-6 4zM181 67L190 60L199 67l-5 3zM282 86L290 80L298 87l-5 2z" fill="#f2f4f8"/>' +
      '<rect x="0" y="140" width="400" height="120" fill="#5a524a"/>' +
      [160, 196, 232].map(y => '<rect x="0" y="' + y + '" width="400" height="4" fill="#3a2a1a"/><path d="M0 ' + (y - 2) + 'h400M0 ' + (y + 5) + 'h400" stroke="#9aa0a6" stroke-width="1.5"/>').join("") +
      /* yellow locomotives */
      ['<g transform="translate(30 116)">', '<g transform="translate(200 152)">'].map(g => g +
        '<rect x="0" y="10" width="150" height="34" rx="3" fill="#f2c230" stroke="#6a5010" stroke-width="2"/><rect x="0" y="34" width="150" height="6" fill="#8a1f22"/><rect x="110" y="0" width="40" height="22" fill="#f2c230" stroke="#6a5010" stroke-width="2"/><rect x="118" y="4" width="12" height="10" fill="#cfe6f2"/><rect x="134" y="4" width="12" height="10" fill="#cfe6f2"/>' +
        [20, 46, 104, 130].map(x => '<circle cx="' + x + '" cy="46" r="6" fill="#222"/>').join("") + '<rect x="30" y="2" width="10" height="8" fill="#444"/></g>').join("") +
      '<g transform="translate(66 112)"><circle class="ssx-sm" r="6" fill="#ddd"/><circle class="ssx-sm ssx-sm2" r="6" fill="#ddd"/><circle class="ssx-sm ssx-sm3" r="6" fill="#ddd"/></g>' +
      /* signal + lantern */
      '<rect x="360" y="70" width="5" height="90" fill="#333"/><rect x="352" y="62" width="21" height="34" rx="4" fill="#111"/><circle class="ssx-bl" cx="362" cy="72" r="5" fill="#e83a2a"/><circle class="ssx-bl ssx-bl2" cx="362" cy="86" r="5" fill="#4ae06a"/>' +
      '<g transform="translate(20 210)"><g class="ssx-sw"><path d="M0 0v10" stroke="#333" stroke-width="2"/><rect x="-7" y="10" width="14" height="18" rx="3" fill="#ffd27a" stroke="#333" stroke-width="2"/></g></g>' +
      '<rect x="250" y="20" width="130" height="26" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/><text x="315" y="38" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">SALT LAKE CITY YARD</text>',
      sky("ssx4", "#4a6a9a", "#d8c8b8"));
  }

  /* 5. His corner in Versailles: Main St and Court St, a brick wall tagged STURGILL, the red-brick Woodford County Courthouse with white columns and its clock tower behind */
  function ssxcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ssx5)"/>' +
      '<g class="ssx-cl"><ellipse cx="60" cy="30" rx="34" ry="8" fill="#fff" opacity=".5"/></g>' +
      /* courthouse */
      '<rect x="190" y="30" width="30" height="40" fill="#9a3a2a"/><path d="M186 30l19 -16l19 16z" fill="#f2f0ea"/><circle cx="205" cy="48" r="10" fill="#f2f0ea" stroke="#333" stroke-width="1.5"/>' +
      '<g transform="translate(205 48)"><path class="ssx-hand" d="M0 0V-7" stroke="#111" stroke-width="1.5"/><path d="M0 0h5" stroke="#111" stroke-width="1.5"/></g>' +
      '<rect x="110" y="70" width="190" height="80" fill="#a8432e"/>' + Array.from({ length: 11 }, (_, r) => '<path d="M110 ' + (74 + r * 7) + 'h190" stroke="#8e3424" stroke-width=".7"/>').join("") +
      '<path d="M160 70l45 -20l45 20z" fill="#f2f0ea"/>' + [166, 186, 206, 226, 244].map(x => '<rect x="' + x + '" y="72" width="6" height="64" fill="#f2f0ea"/>').join("") +
      [120, 138, 268, 286].map(x => '<rect x="' + x + '" y="84" width="10" height="16" fill="#e8eef2"/><rect x="' + x + '" y="112" width="10" height="16" fill="#e8eef2"/>').join("") +
      '<rect x="110" y="136" width="190" height="14" fill="#d8d0c0"/>' +
      tree(60, 136, 1.5, "#3a7a34") + tree(350, 136, 1.5, "#3a7a34") +
      /* brick wall with tags */
      '<rect x="0" y="150" width="400" height="72" fill="#7a4a36"/>' + Array.from({ length: 10 }, (_, r) => '<path d="M0 ' + (156 + r * 7) + 'h400" stroke="#5e3626" stroke-width=".8" opacity=".7"/>').join("") +
      tag("STURGILL", 14, 200, 34, SKY, -5) + tag("BLUE SKIES", 206, 184, 16, FURY, -4) + tag("SAILOR", 226, 210, 15, GRASS, -3) +
      '<g class="ssx-sp"><circle cx="176" cy="186" r="3" fill="' + SKY + '" opacity=".7"/></g><g class="ssx-sp ssx-sp2"><circle cx="182" cy="180" r="2" fill="' + SKY + '" opacity=".6"/></g>' +
      '<rect x="0" y="222" width="400" height="38" fill="#4c4a46"/><rect x="0" y="220" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="344" y="60" width="6" height="162" fill="#2f2f2f"/>' + sign(300, 60, 94, "MAIN ST") + sign(304, 86, 90, "COURT ST"),
      sky("ssx5", "#2a3a6a", "#e8a070"));
  }

  window.SCENES = { ssxdepot: ssxdepot, ssxkeene: ssxkeene, ssxhightop: ssxhightop, ssxyard: ssxyard, ssxcorner: ssxcorner };
})();
