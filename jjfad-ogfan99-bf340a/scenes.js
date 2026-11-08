/* jjfad scenes (Regions tab: Los Angeles + SoCal; Rialto, the Inland Empire). CSS classes prefixed jjf- (the page's own anim-train is kept).
   1 Rialto Metrolink station (San Bernardino Line) on Palm Ave downtown: the silver bi-level train sliding in, the snowy San Bernardino Mountains behind.
   2 The Wigwam Motel on Foothill Blvd (old Route 66) in Rialto: white concrete tepees with red zigzag trim, the neon sign flickering.
   3 The 10 Freeway out to Rialto (the drive Dre and Arabian Prince made to hear the girls): green overhead sign, cars zooming by "Supersonic".
   4 Double-dutch in a Rialto driveway: the jump-rope chant that ends "Supersonic" ("Eenie meenie disaleenie..."), ropes swinging.
   5 S Riverside Ave and W Rialto Ave in downtown Rialto: green signs, J.J. FAD tagged, the San Bernardino Mountains behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jjfflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.95}}.jjf-flk{animation:jjfflick 2.4s infinite}.jjf-flk2{animation-delay:-1.1s}' +
    '@keyframes jjfglow{0%,100%{opacity:.35}50%{opacity:1}}.jjf-glow{animation:jjfglow 1.6s ease-in-out infinite}.jjf-g2{animation-delay:-.8s}' +
    '@keyframes jjfcar{from{transform:translateX(-100px)}to{transform:translateX(500px)}}.jjf-car{animation:jjfcar 5s linear infinite}.jjf-car2{animation-delay:-2.5s}' +
    '@keyframes jjffast{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.jjf-fast{animation:jjffast 1.4s linear infinite}.jjf-f2{animation-delay:-.7s}' +
    '@keyframes jjfcarL{from{transform:translateX(500px)}to{transform:translateX(-100px)}}.jjf-carL{animation:jjfcarL 2.2s linear infinite}.jjf-carL2{animation-delay:-1.1s}' +
    '@keyframes jjfsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.jjf-sway{transform-box:fill-box;transform-origin:50% 100%;animation:jjfsway 3.4s ease-in-out infinite}' +
    '@keyframes jjfjet{from{transform:translate(-80px,30px)}to{transform:translate(480px,-20px)}}.jjf-jet{animation:jjfjet 4s linear infinite}' +
    '@keyframes jjfropeA{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-1)}}.jjf-rope{transform-box:fill-box;transform-origin:50% 0;animation:jjfropeA .8s ease-in-out infinite}.jjf-rope2{animation-delay:-.4s}' +
    '@keyframes jjfjump{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}.jjf-jump{animation:jjfjump .4s ease-in-out infinite}' +
    '@keyframes jjfcld{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.jjf-cld{animation:jjfcld 34s linear infinite}.jjf-cld2{animation-delay:-17s}' +
    '@keyframes jjfspray{0%,100%{transform:scaleY(.8)}50%{transform:scaleY(1.1)}}.jjf-spray{transform-box:fill-box;transform-origin:50% 100%;animation:jjfspray 1s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 11) + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="' + (letter.length > 1 ? 11 : 15) + '" fill="#fff">' + letter + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const palm = (x, y, h, c) => '<g class="jjf-sway"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#3a2c20" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 66, -66].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + (c || "#2f5a35") + '" stroke-width="4" fill="none"/>').join("") + '</g>';
  const car = (x, y, body, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><rect x="0" y="8" width="70" height="16" rx="5" fill="' + body + '"/><path d="M14 8l8 -9h26l10 9z" fill="' + body + '"/><path d="M20 7l5 -6h9v6zM37 7v-6h9l7 6z" fill="#bfe3f2"/>' +
    '<circle cx="16" cy="25" r="6" fill="#111"/><circle cx="16" cy="25" r="3" fill="#cfcfcf"/><circle cx="54" cy="25" r="6" fill="#111"/><circle cx="54" cy="25" r="3" fill="#cfcfcf"/></g></g>';
  const cloud = (x, y, cls) => '<g class="' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="8" fill="#fff" opacity=".8"/><ellipse cx="' + (x + 14) + '" cy="' + (y - 5) + '" rx="14" ry="8" fill="#fff" opacity=".8"/></g>';
  /* the San Bernardino Mountains, snow on the high peaks */
  const mtns = (y, c) => '<path d="M0 ' + y + 'l40 -26l34 12l50 -46l36 26l44 -34l50 40l36 -18l44 30l30 -14l36 22v' + 30 + 'H0z" fill="' + c + '"/>' +
    '<path d="M124 ' + (y - 60) + 'L106.6 ' + (y - 44) + 'L114 ' + (y - 47) + 'L120 ' + (y - 42) + 'L127 ' + (y - 47) + 'L134 ' + (y - 43) + 'L146 ' + (y - 44) + 'Z' +
    'M204 ' + (y - 68) + 'L185.9 ' + (y - 54) + 'L193 ' + (y - 57) + 'L199 ' + (y - 52) + 'L206 ' + (y - 57) + 'L213 ' + (y - 53) + 'L221.5 ' + (y - 54) + 'Z" fill="#f4f4f8"/>';
  const BLUE = "#40c4ff", PINK = "#ff3fa4", YEL = "#ffe14d", SB = "#a32136";

  /* 1. Rialto Metrolink station, San Bernardino Line */
  function jjstation() {
    const car2 = (x) => {
      let w = ""; for (let i = 0; i < 6; i++) w += '<rect x="' + (x + 12 + i * 22) + '" y="114" width="16" height="11" rx="2" fill="#1d2a3a"/><rect x="' + (x + 12 + i * 22) + '" y="134" width="16" height="11" rx="2" fill="#1d2a3a"/>';
      return '<rect x="' + x + '" y="104" width="150" height="64" rx="6" fill="#e2e5e9" stroke="#8b939c" stroke-width="2"/>' + w +
        '<rect x="' + x + '" y="150" width="150" height="5" fill="#23406e"/><rect x="' + x + '" y="155" width="150" height="3" fill="' + BLUE + '"/>' +
        '<circle cx="' + (x + 26) + '" cy="172" r="8" fill="#111"/><circle cx="' + (x + 124) + '" cy="172" r="8" fill="#111"/>';
    };
    const train = '<g class="anim-train">' + car2(14) + car2(168) +
      '<path d="M322 104h34q22 0 30 30v34h-64z" fill="#e2e5e9" stroke="#8b939c" stroke-width="2"/><path d="M358 110q16 2 22 22h-22z" fill="#1d2a3a"/><rect x="322" y="150" width="64" height="5" fill="#23406e"/>' +
      '<circle cx="378" cy="160" r="4" fill="#fff6c2"/>' + bullet(340, 130, "SB", SB, 10) + '<circle cx="342" cy="172" r="8" fill="#111"/><circle cx="372" cy="172" r="8" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jjs1)"/>' + cloud(80, 30, "jjf-cld") + cloud(250, 20, "jjf-cld jjf-cld2") +
      mtns(100, "#7f86a8") + palm(24, 104, 56) + palm(380, 104, 48) +
      '<rect x="0" y="176" width="400" height="10" fill="#6b5e50"/><rect x="0" y="178" width="400" height="2" fill="#c9ccd1"/><rect x="0" y="184" width="400" height="2" fill="#c9ccd1"/>' +
      train +
      /* platform with mission-style shelter */
      '<rect x="0" y="186" width="400" height="20" fill="#d6cdb9"/><rect x="0" y="186" width="400" height="4" fill="#f2d24c"/><rect x="0" y="206" width="400" height="54" fill="#c0b49c"/>' +
      '<path d="M150 214h100v36h-100z" fill="#efe2c6" stroke="#b39d74"/><path d="M142 216l58 -22l58 22z" fill="#c4643c"/><path d="M180 250v-20q20 -16 40 0v20" fill="#7a5a3c"/>' +
      /* black station sign */
      '<rect x="40" y="214" width="96" height="26" rx="3" fill="#121418"/><text x="96" y="232" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">RIALTO</text>' + bullet(56, 227, "SB", SB, 10) +
      '<text x="330" y="232" text-anchor="middle" ' + font + ' font-size="9" fill="#4b4436">PALM AVE</text>',
      sky("jjs1", "#7fc0ec", "#f6dfb4"));
  }

  /* 2. The Wigwam Motel on Foothill Blvd */
  function jjwigwam() {
    const tepee = (x, s) => '<g transform="translate(' + x + ' 184) scale(' + s + ')"><path d="M0 0l24 -74l24 74z" fill="#f4f1ea" stroke="#b8b0a2" stroke-width="1.5"/>' +
      '<path d="M8 -26l8 -6l8 6l8 -6l8 6" stroke="#c8352e" stroke-width="4" fill="none"/><path d="M19 -74l-4 -10M29 -74l4 -10M24 -74v-10" stroke="#8a6a4a" stroke-width="2.5"/>' +
      '<path d="M16 0v-18q8 -8 16 0v18z" fill="#c8352e"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jjs2)"/>' + mtns(120, "#6a5f8a") +
      tepee(18, 1.05) + tepee(92, 0.9) + tepee(220, 0.95) + tepee(300, 1.1) +
      /* neon roadside sign */
      '<rect x="160" y="52" width="6" height="132" fill="#555"/><rect x="118" y="40" width="96" height="44" rx="6" fill="#1a1a26" stroke="' + YEL + '" stroke-width="2"/>' +
      '<text class="jjf-flk" x="166" y="60" text-anchor="middle" ' + font + ' font-size="12" fill="' + PINK + '">WIGWAM</text><text class="jjf-flk jjf-flk2" x="166" y="77" text-anchor="middle" ' + font + ' font-size="13" fill="' + BLUE + '">MOTEL</text>' +
      '<rect class="jjf-glow" x="132" y="88" width="64" height="16" rx="3" fill="#c8352e"/><text x="164" y="100" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">VACANCY</text>' +
      /* lot, Foothill Blvd */
      '<rect x="0" y="184" width="400" height="16" fill="#d9cbb0"/><rect x="0" y="200" width="400" height="60" fill="#47494f"/><path d="M0 230h400" stroke="' + YEL + '" stroke-width="2" stroke-dasharray="18 12"/>' +
      car(0, 204, "#2d8bd6", "jjf-car") + car(0, 204, PINK, "jjf-car jjf-car2") + '<rect x="378" y="150" width="4" height="36" fill="#6b6f75"/>' + sign(278, 140, 112, "W Foothill Blvd", 11),
      sky("jjs2", "#ff9c6b", "#ffe3b0"));
  }

  /* 3. The 10 Freeway out to Rialto */
  function jjfreeway() {
    const streak = (y, cls) => '<g class="' + cls + '"><path d="M0 ' + y + 'h70" stroke="#fff" stroke-width="2" opacity=".6"/><path d="M10 ' + (y + 6) + 'h50" stroke="#fff" stroke-width="2" opacity=".4"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jjs3)"/>' + mtns(140, "#8a90b0") +
      /* jet with a vapor cone */
      '<g class="jjf-jet"><ellipse cx="34" cy="40" rx="20" ry="10" fill="#fff" opacity=".7"/><path d="M40 36h40l10 4l-10 4h-40z" fill="#c9d2dc"/><path d="M58 36l-10 -12h8l14 12zM58 44l-10 12h8l14 -12z" fill="#9aa6b2"/></g>' +
      /* overhead sign gantry */
      '<rect x="40" y="56" width="8" height="120" fill="#7b8088"/><rect x="352" y="56" width="8" height="120" fill="#7b8088"/><rect x="40" y="58" width="320" height="6" fill="#8d939b"/>' +
      '<rect x="90" y="66" width="220" height="62" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<path d="M108 80h28v8q0 14 -14 20q-14 -6 -14 -20z" fill="#1f4fa3" stroke="#fff" stroke-width="1.5"/><rect x="108" y="80" width="28" height="6" fill="#c8352e"/><text x="122" y="101" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">10</text>' +
      '<text x="150" y="88" ' + font + ' font-size="13" fill="#fff">Riverside Ave</text><text x="150" y="108" ' + font + ' font-size="13" fill="#fff">Rialto</text><text x="292" y="120" text-anchor="end" ' + font + ' font-size="10" fill="#fff">EXIT ONLY</text>' +
      /* lanes */
      '<path d="M0 176h400v84H0z" fill="#4b4d53"/><path d="M0 204h400M0 232h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="20 14"/>' +
      car(0, 178, PINK, "jjf-fast") + streak(190, "jjf-fast") + car(0, 206, BLUE, "jjf-fast jjf-f2") + streak(218, "jjf-fast jjf-f2") + car(0, 234, YEL, "jjf-carL") + car(0, 234, "#e9e9e9", "jjf-carL jjf-carL2"),
      sky("jjs3", "#6fb2e6", "#ffe9c2"));
  }

  /* 4. Double-dutch in a Rialto driveway */
  function jjdutch() {
    const kid = (x, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="150" r="8" fill="' + c + '"/><path d="M' + (x - 10) + ' 160h20l4 26h-8l-2 22h-8l-2 -22h-8z" fill="' + c + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jjs4)"/>' + mtns(110, "#9aa0bf") +
      /* stucco house with garage */
      '<rect x="30" y="96" width="220" height="92" fill="#f0dcc0"/><path d="M20 98l120 -44l120 44z" fill="#b4553a"/><rect x="140" y="124" width="98" height="64" fill="#e2cfb1" stroke="#b9a383"/>' +
      '<path d="M140 140h98M140 156h98M140 172h98" stroke="#c9b493"/><rect x="50" y="122" width="34" height="26" fill="#2b3a4a" stroke="#fff" stroke-width="2"/><rect x="96" y="132" width="22" height="56" fill="#6b3f26"/>' +
      palm(300, 120, 70) + palm(360, 126, 56) +
      /* driveway */
      '<path d="M0 188h400v72H0z" fill="#cfc6b6"/><path d="M0 188h400" stroke="#a89f8f" stroke-width="2"/>' +
      '<text x="64" y="244" ' + font + ' font-size="12" fill="' + PINK + '" opacity=".8">EENIE MEENIE</text><text x="250" y="250" ' + font + ' font-size="11" fill="#2d8bd6" opacity=".8">DISALEENIE</text>' +
      /* two turners, two ropes, one jumper */
      kid(150, "#2a2440") + kid(310, "#2a2440") +
      '<path class="jjf-rope" d="M160 170q70 50 140 0" stroke="' + PINK + '" stroke-width="4" fill="none"/><path class="jjf-rope jjf-rope2" d="M160 170q70 50 140 0" stroke="' + YEL + '" stroke-width="4" fill="none"/>' +
      kid(230, "#3a2a5a", "jjf-jump"),
      sky("jjs4", "#86c8f2", "#fff0cf"));
  }

  /* 5. S Riverside Ave and W Rialto Ave, downtown Rialto */
  function jjcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#jjs5)"/>' + mtns(128, "#7a7fa6") +
      palm(26, 136, 64) + palm(212, 132, 54) +
      '<rect x="0" y="128" width="400" height="84" fill="#f1e2c8"/><rect x="0" y="128" width="400" height="6" fill="#cdb894"/>' +
      tag("J.J. FAD", 30, 186, 40, BLUE, -5) + tag("SUPERSONIC", 190, 172, 19, PINK, -4) + tag("JUST JAMMIN'", 196, 200, 15, YEL, -3) +
      '<g class="jjf-spray"><rect x="170" y="188" width="10" height="22" rx="3" fill="' + PINK + '" stroke="#111"/><rect x="172" y="184" width="6" height="5" fill="#ccc"/></g>' +
      '<rect x="0" y="212" width="400" height="12" fill="#d5cdbd"/><rect x="0" y="224" width="400" height="36" fill="#47494f"/>' + car(0, 226, YEL, "jjf-car") + car(0, 226, BLUE, "jjf-car jjf-car2") +
      '<rect x="334" y="80" width="5" height="132" fill="#6b6f75"/>' + sign(276, 78, 118, "S Riverside Ave", 11) + sign(280, 104, 110, "W Rialto Ave", 11),
      sky("jjs5", "#79b8ea", "#fde7c0"));
  }

  window.SCENES = { jjstation, jjwigwam, jjfreeway, jjdutch, jjcorner };
})();
