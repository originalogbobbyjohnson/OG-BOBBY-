/* laurendaigle scenes (Regions: New Orleans; Lafayette, Acadiana, Louisiana). CSS classes prefixed ldx- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ldxcar{0%{transform:translateX(-140px)}100%{transform:translateX(470px)}}.ldx-car{animation:ldxcar 7s linear infinite}' +
    '@keyframes ldxcl{0%{transform:translateX(0)}100%{transform:translateX(40px)}}.ldx-cl{animation:ldxcl 14s ease-in-out infinite alternate}' +
    '@keyframes ldxrip{0%{transform:translateX(0)}100%{transform:translateX(-30px)}}.ldx-rip{animation:ldxrip 3s linear infinite}' +
    '@keyframes ldxmoss{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.ldx-moss{transform-box:fill-box;transform-origin:50% 0;animation:ldxmoss 3.6s ease-in-out infinite}.ldx-m2{animation-delay:-1.8s}' +
    '@keyframes ldxbird{0%{transform:translate(-60px,10px)}100%{transform:translate(460px,-30px)}}.ldx-bird{animation:ldxbird 10s linear infinite}' +
    '@keyframes ldxflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.ldx-flap{transform-box:fill-box;transform-origin:50% 100%;animation:ldxflap .7s ease-in-out infinite}' +
    '@keyframes ldxnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(16px,-56px);opacity:0}}.ldx-nt{animation:ldxnote 3.2s ease-out infinite}.ldx-nt2{animation-delay:-1.1s}.ldx-nt3{animation-delay:-2.2s}' +
    '@keyframes ldxglow{0%,100%{opacity:.5}50%{opacity:1}}.ldx-glow{animation:ldxglow 2.2s ease-in-out infinite}.ldx-g2{animation-delay:-1.1s}' +
    '@keyframes ldxsqz{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.8)}}.ldx-sqz{transform-box:fill-box;transform-origin:50% 50%;animation:ldxsqz 1.6s ease-in-out infinite}' +
    '@keyframes ldxbell{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(10deg)}}.ldx-bell{transform-box:fill-box;transform-origin:50% 0;animation:ldxbell 1.4s ease-in-out infinite}' +
    '@keyframes ldxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ldx-sp{animation:ldxspray 1.4s ease-out infinite}.ldx-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="ldx-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const iShield = (x, y, n) => '<path d="M' + x + ' ' + (y + 8) + 'q20 -10 40 0v20q0 18 -20 26q-20 -8 -20 -26z" fill="#1d4f9a" stroke="#fff" stroke-width="2"/><path d="M' + x + ' ' + (y + 8) + 'q20 -10 40 0v6h-40z" fill="#c8202f"/><text x="' + (x + 20) + '" y="' + (y + 38) + '" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">' + n + '</text>';
  /* a live oak: wide low crown, Spanish moss hanging */
  const oak = (x, base, s) => '<g transform="translate(' + x + ' ' + base + ') scale(' + s + ')"><path d="M-6 0q-2 -30 -4 -40q-30 -6 -50 -20M6 0q2 -30 6 -42q30 -4 52 -16M0 -40v-10" stroke="#4a3a2a" stroke-width="10" fill="none" stroke-linecap="round"/>' +
    '<ellipse cx="0" cy="-66" rx="80" ry="30" fill="#3f6b3a"/><ellipse cx="-44" cy="-58" rx="40" ry="20" fill="#4a7a42"/><ellipse cx="46" cy="-56" rx="40" ry="20" fill="#4a7a42"/>' +
    [-60, -36, -10, 18, 44, 66].map((m, i) => '<path class="ldx-moss ' + (i % 2 ? "ldx-m2" : "") + '" d="M' + m + ' -46q-3 12 0 24q3 -12 2 -24" fill="#a9b39a"/>').join("") + '</g>';
  const cypress = (x, base, h) => '<path d="M' + (x - 8) + ' ' + base + 'q6 -12 6 -' + (h * 0.4) + 'v-' + (h * 0.6) + 'h4v' + (h * 0.6) + 'q0 ' + (h * 0.28) + ' 6 ' + (h * 0.4) + 'z" fill="#3a2e24"/>' +
    '<ellipse cx="' + x + '" cy="' + (base - h) + '" rx="' + (h * 0.22) + '" ry="' + (h * 0.12) + '" fill="#4b6b3a"/><ellipse cx="' + (x - 8) + '" cy="' + (base - h * 0.82) + '" rx="' + (h * 0.18) + '" ry="' + (h * 0.08) + '" fill="#567a42"/>' +
    '<path class="ldx-moss" d="M' + (x - 10) + ' ' + (base - h * 0.8) + 'q-3 16 0 30q3 -14 2 -30z" fill="#a9b39a"/><path class="ldx-moss ldx-m2" d="M' + (x + 8) + ' ' + (base - h * 0.95) + 'q-3 14 0 26q3 -12 2 -26z" fill="#a9b39a"/>';
  const GOLD = "#f4c95d", TEAL = "#6fb7a8", ROSE = "#e07a8f", CREAM = "#fbf3e4";

  /* 1. I-10 into Lafayette: the green exit sign for Exit 103A, Evangeline Thruway, cane fields and a car rolling in */
  function ldxsign() {
    return svg(
      '<rect width="400" height="260" fill="url(#ldx1)"/>' +
      '<g class="ldx-cl"><ellipse cx="70" cy="36" rx="36" ry="9" fill="#fff" opacity=".6"/><ellipse cx="250" cy="22" rx="30" ry="7" fill="#fff" opacity=".5"/></g>' +
      '<rect x="0" y="138" width="400" height="22" fill="#7a9a4a"/>' + Array.from({ length: 40 }, (_, i) => '<path d="M' + (i * 10 + 3) + ' 160l2 -26" stroke="#5f843a" stroke-width="2"/>').join("") +
      oak(30, 150, 0.45) + oak(370, 150, 0.4) +
      '<rect x="0" y="160" width="400" height="100" fill="#4a4a4e"/><rect x="0" y="158" width="400" height="4" fill="#d9d4c6"/>' +
      '<path d="M0 210h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="26 18"/><rect x="0" y="252" width="400" height="3" fill="#f2c14e"/>' +
      '<rect x="138" y="102" width="6" height="58" fill="#9aa0a6"/><rect x="306" y="102" width="6" height="58" fill="#9aa0a6"/>' +
      '<rect x="120" y="16" width="210" height="90" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="3"/>' +
      '<rect x="252" y="6" width="74" height="16" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><text x="289" y="18" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">EXIT 103A</text>' +
      '<text x="225" y="54" text-anchor="middle" ' + font + ' font-size="28" fill="#fff">Lafayette</text>' +
      '<text x="225" y="78" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="1">EVANGELINE THRUWAY</text>' +
      '<path d="M211 90h28l-6 -6M239 90l-6 6" stroke="#fff" stroke-width="2.5" fill="none"/>' +
      iShield(62, 88, "10") + '<rect x="58" y="142" width="48" height="14" fill="#fff" stroke="#111"/><text x="82" y="153" text-anchor="middle" ' + font + ' font-size="10" fill="#111">WEST</text><rect x="80" y="156" width="4" height="4" fill="#9aa0a6"/>' +
      '<g class="ldx-car"><rect x="0" y="186" width="66" height="18" rx="5" fill="' + TEAL + '"/><path d="M12 186l10 -12h22l10 12z" fill="' + TEAL + '"/><path d="M18 185l6 -8h8v8zM36 185v-8h8l6 8z" fill="#d6f0f7"/><circle cx="16" cy="206" r="7" fill="#111"/><circle cx="52" cy="206" r="7" fill="#111"/><circle cx="16" cy="206" r="3" fill="#bbb"/><circle cx="52" cy="206" r="3" fill="#bbb"/></g>',
      sky("ldx1", "#5b9bd5", "#f6dcc0"));
  }

  /* 2. Cathedral of St. John the Evangelist, downtown Lafayette: red and white striped brick, the tall tower, and the old St. John Oak */
  function ldxcathedral() {
    let stripes = "";
    for (let y = 92; y < 210; y += 10) stripes += '<rect x="150" y="' + y + '" width="140" height="4" fill="#f2e6d6" opacity=".9"/>';
    for (let y = 24; y < 92; y += 10) stripes += '<rect x="196" y="' + y + '" width="48" height="4" fill="#f2e6d6" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ldx2)"/>' +
      '<rect x="150" y="90" width="140" height="120" fill="#a8402e"/>' +
      '<path d="M144 92l76 -30l76 30z" fill="#7a2e22"/>' +
      '<rect x="196" y="22" width="48" height="70" fill="#a8402e"/>' + stripes +
      '<path d="M192 24l28 -20l28 20z" fill="#5a6a6a"/><rect x="218" y="0" width="4" height="8" fill="' + GOLD + '"/><rect x="214" y="2" width="12" height="3" fill="' + GOLD + '"/>' +
      '<g class="ldx-bell"><path d="M212 44q8 -10 16 0v10h-16z" fill="' + GOLD + '"/></g><path d="M206 40q14 -16 28 0v18h-28z" fill="none" stroke="#f2e6d6" stroke-width="2"/>' +
      '<circle cx="220" cy="120" r="14" fill="#3a5a8a" stroke="#f2e6d6" stroke-width="3"/><path d="M220 106v28M206 120h28" stroke="#f2e6d6" stroke-width="1.5"/>' +
      '<path d="M206 210v-34q14 -16 28 0v34z" fill="#3a2a22"/>' +
      [164, 260].map(x => '<path d="M' + x + ' 170v-26q8 -10 16 0v26z" fill="#3a5a8a" stroke="#f2e6d6" stroke-width="2"/>').join("") +
      oak(80, 214, 0.9) +
      '<rect x="0" y="210" width="400" height="50" fill="#6b8a4a"/><rect x="0" y="230" width="400" height="30" fill="#bdb6a6"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#3a2a22" letter-spacing="2">ST. JOHN CATHEDRAL · LAFAYETTE</text>' +
      note(330, 100, CREAM, "") + note(300, 130, GOLD, "ldx-nt2"),
      sky("ldx2", "#7ab0d8", "#f4dcc0"));
  }

  /* 3. Lake Martin, the cypress swamp outside town: moss in the trees, still water, an egret gliding by */
  function ldxswamp() {
    return svg(
      '<rect width="400" height="260" fill="url(#ldx3)"/>' +
      '<circle cx="300" cy="70" r="24" fill="#fff2c8" opacity=".9"/>' +
      '<path d="M0 150q100 -14 200 0t200 0v10h-400z" fill="#5a7a4a"/>' +
      '<rect x="0" y="156" width="400" height="104" fill="#3f6a62"/>' +
      '<g class="ldx-rip"><path d="M0 176h40M70 190h50M150 172h30M210 204h60M300 182h40M360 196h50M420 176h30" stroke="#a8d8cc" stroke-width="1.5" opacity=".6"/></g>' +
      '<rect x="0" y="230" width="400" height="30" fill="#5a8a5a" opacity=".55"/>' + Array.from({ length: 20 }, (_, i) => '<ellipse cx="' + (i * 21 + 8) + '" cy="' + (236 + (i % 3) * 6) + '" rx="7" ry="2.5" fill="#7ab35a"/>').join("") +
      cypress(40, 200, 150) + cypress(110, 180, 110) + cypress(250, 186, 120) + cypress(350, 206, 160) +
      '<path d="M296 164q12 4 24 0" stroke="#fff2c8" stroke-width="2" opacity=".5"/>' +
      '<g class="ldx-bird"><g transform="translate(0 110)"><ellipse cx="20" cy="0" rx="12" ry="3" fill="#fff"/><path d="M30 -1q8 -2 12 0" stroke="#fff" stroke-width="2"/><path d="M42 -1l6 1" stroke="' + GOLD + '" stroke-width="1.5"/><path d="M8 0l-10 2" stroke="#222" stroke-width="1.5"/><g class="ldx-flap"><path d="M14 -2q6 -14 16 -2z" fill="#fff"/></g></g></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '" letter-spacing="2">LAKE MARTIN · ACADIANA</text>',
      sky("ldx3", "#e8a07a", "#f8e0b0"));
  }

  /* 4. A Cajun dance night downtown: the accordion and the rubboard on stage, string lights, BON TEMPS banner */
  function ldxdance() {
    let lights = "";
    for (let i = 0; i < 13; i++) lights += '<circle cx="' + (12 + i * 31) + '" cy="' + (40 + Math.abs(6 - i) * 2) + '" r="4" fill="' + [GOLD, ROSE, TEAL][i % 3] + '" class="ldx-glow ' + (i % 2 ? "ldx-g2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ldx4)"/>' +
      '<path d="M0 34q200 30 400 0" stroke="#333" stroke-width="1.2" fill="none"/>' + lights +
      '<rect x="80" y="60" width="240" height="28" rx="3" fill="' + ROSE + '"/><text x="200" y="80" text-anchor="middle" ' + font + ' font-size="16" fill="' + CREAM + '" letter-spacing="3">BON TEMPS</text>' +
      '<rect x="40" y="170" width="320" height="16" fill="#6b4a2e"/><rect x="40" y="186" width="320" height="30" fill="#4a3220"/>' +
      /* accordion */
      '<g transform="translate(110 112)"><rect x="0" y="0" width="16" height="50" rx="2" fill="#7a1f2a"/><rect x="2" y="4" width="12" height="42" fill="' + CREAM + '"/>' +
      '<g class="ldx-sqz"><rect x="16" y="2" width="44" height="46" fill="#1a1a1a"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (20 + i * 7) + ' 2v46" stroke="' + GOLD + '" stroke-width="1"/>').join("") + '</g>' +
      '<rect x="60" y="0" width="16" height="50" rx="2" fill="#7a1f2a"/>' + Array.from({ length: 6 }, (_, i) => '<circle cx="68" cy="' + (6 + i * 7) + '" r="2" fill="' + CREAM + '"/>').join("") + '</g>' +
      /* rubboard (frottoir) */
      '<g transform="translate(240 104)"><path d="M0 0h50v14q-6 4 -8 60h-34q-2 -56 -8 -60z" fill="#c9ccd0" stroke="#8a8f96" stroke-width="1.5"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M10 ' + (20 + i * 6) + 'h30" stroke="#8a8f96" stroke-width="2"/>').join("") + '</g>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2a30"/>' +
      [[60, ROSE], [150, TEAL], [250, GOLD], [340, ROSE]].map((p, i) => '<g transform="translate(' + p[0] + ' 226)"><circle cx="0" cy="0" r="6" fill="#1a1a1a"/><path d="M-8 8q8 -6 16 0v22h-16z" fill="' + p[1] + '"/></g>').join("") +
      note(180, 120, GOLD, "") + note(210, 104, CREAM, "ldx-nt2") + note(160, 98, ROSE, "ldx-nt3"),
      sky("ldx4", "#1a1838", "#4a2a4a"));
  }

  /* 5. Her corner in Lafayette: Cajundome Blvd and W Congress St, a wall tagged DAIGLE, the white Cajundome behind */
  function ldxcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ldx5)"/>' +
      '<g class="ldx-cl"><ellipse cx="80" cy="30" rx="34" ry="8" fill="#fff" opacity=".5"/><ellipse cx="320" cy="40" rx="28" ry="7" fill="#fff" opacity=".4"/></g>' +
      '<path d="M70 150q130 -86 260 0z" fill="#eef0f2"/><path d="M90 150q110 -66 220 0" stroke="#c8ccd2" stroke-width="2" fill="none"/><path d="M120 150q80 -46 160 0" stroke="#c8ccd2" stroke-width="2" fill="none"/>' +
      '<rect x="60" y="146" width="280" height="14" fill="#c9ccd0"/><rect x="60" y="146" width="280" height="4" fill="' + TEAL + '"/>' +
      oak(30, 162, 0.5) +
      '<rect x="0" y="162" width="400" height="58" fill="#f2e2c6"/><rect x="0" y="158" width="400" height="6" fill="#7a2e22"/>' +
      tag("DAIGLE", 20, 206, 34, ROSE, -5) + tag("LOOK UP CHILD", 190, 192, 16, TEAL, -4) + tag("ACADIANA", 210, 214, 14, GOLD, -3) +
      '<g class="ldx-sp"><circle cx="168" cy="190" r="3" fill="' + ROSE + '" opacity=".7"/></g><g class="ldx-sp ldx-sp2"><circle cx="174" cy="184" r="2" fill="' + ROSE + '" opacity=".6"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#4c4a46"/><rect x="0" y="218" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="66" width="6" height="154" fill="#2f2f2f"/>' + sign(268, 66, 128, "CAJUNDOME BLVD") + sign(282, 92, 114, "W CONGRESS ST"),
      sky("ldx5", "#5b9bd5", "#f6c9b0"));
  }

  window.SCENES = { ldxsign: ldxsign, ldxcathedral: ldxcathedral, ldxswamp: ldxswamp, ldxdance: ldxdance, ldxcorner: ldxcorner };
})();
