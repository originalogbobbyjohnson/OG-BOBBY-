/* vicspencer scenes (Regions tab: Chicago; Victor Terrell Spencer, b. Sept 23, 1981 in Chicago (Wikipedia). Complex (2014): born on the West Side, grew up on the North Side,
   group homes and foster homes as a teen, and he reps the EASTSIDE, where he has lived since about 19 - "Don't come over east" (198.1 Wmiz Fm). CSS classes prefixed vs- (the page's own anim-train is kept).
   1 The Metra Electric South Chicago branch pulling into 93rd St, the end of the line by the East Side, the black station sign with the ME bullet.
   2 The Chicago Skyway, the steel toll bridge humped high over the Calumet River on the East Side, traffic running across the deck, a freighter below.
   3 The Ewing Avenue Bridge, the blue bascule bridge over the Calumet River on the East Side, the leaf rising for a boat, the little bridge house.
   4 The old South Works ore walls on the lake at South Chicago, the long concrete walls on the shore, gulls and waves - "women by the lake".
   5 S Ewing Ave and E 106th St, the East Side main drag: green signs, VIC SPENCER tagged with BRAINIAC, VICTOR and SPENCER FOR HIGHER, the Skyway behind at dusk. The 9 in 93rd is drawn by hand with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes vsglow{0%,100%{opacity:.45}50%{opacity:1}}.vs-glow{animation:vsglow 2.6s ease-in-out infinite}.vs-g2{animation-delay:-1.3s}' +
    '@keyframes vscar{0%{transform:translateX(-80px)}100%{transform:translateX(480px)}}.vs-car{animation:vscar 5s linear infinite}.vs-c2{animation-delay:-2.5s}.vs-c3{animation-delay:-1.2s}' +
    '@keyframes vscarl{0%{transform:translateX(480px)}100%{transform:translateX(-80px)}}.vs-carl{animation:vscarl 6s linear infinite}.vs-cl2{animation-delay:-3s}' +
    '@keyframes vsboat{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.vs-boat{animation:vsboat 18s linear infinite;animation-delay:-6s}' +
    '@keyframes vsleaf{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-28deg)}}.vs-leaf{transform-box:fill-box;transform-origin:0% 100%;animation:vsleaf 6s ease-in-out infinite}' +
    '@keyframes vsleafr{0%,100%{transform:rotate(0deg)}50%{transform:rotate(28deg)}}.vs-leafr{transform-box:fill-box;transform-origin:100% 100%;animation:vsleafr 6s ease-in-out infinite}' +
    '@keyframes vswave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.vs-wave{animation:vswave 3s ease-in-out infinite}.vs-wv2{animation-delay:-1.5s}' +
    '@keyframes vsgull{0%{transform:translate(0,0)}50%{transform:translate(40px,-8px)}100%{transform:translate(0,0)}}.vs-gull{animation:vsgull 7s ease-in-out infinite}.vs-gl2{animation-delay:-3.5s}' +
    '@keyframes vsdrip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(24px);opacity:0}}.vs-dr{animation:vsdrip 1.9s ease-in infinite}' +
    '@keyframes vssp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.vs-sp{animation:vssp 1.4s ease-out infinite}.vs-sp2{animation-delay:.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const GOLD = "#ffb02e", TEAL = "#2fb8a8", RED = "#e8452f", METRA = "#e8730c", CHIBLUE = "#41b6e6", STAR = "#e4002b";
  const star = (cx, cy, r, c) => { let d = ""; for (let i = 0; i < 12; i++) { const a = Math.PI / 6 * i - Math.PI / 2, rr = i % 2 ? r * .45 : r; d += (i ? "L" : "M") + (cx + rr * Math.cos(a)).toFixed(1) + " " + (cy + rr * Math.sin(a)).toFixed(1); } return '<path d="' + d + 'z" fill="' + c + '"/>'; };
  /* a 9 drawn by hand: round head + straight stem (x = left edge, y = baseline) */
  const nine = (x, y, sz, c) => { const r = sz * 0.2, w = sz * 0.13; return '<circle cx="' + (x + r + w / 2 + sz * 0.02) + '" cy="' + (y - sz * 0.72 + r) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + w + '"/><path d="M' + (x + 2 * r + w / 2 + sz * 0.02) + ' ' + (y - sz * 0.72 + r) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w + '"/>'; };
  const minicar = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="26" height="9" rx="3" fill="' + c + '"/><rect x="6" y="' + (y - 5) + '" width="13" height="6" rx="2" fill="' + c + '" opacity=".8"/></g>';
  /* the Skyway truss: a long through-truss with a raised hump */
  const skyway = (y, s, c) => {
    const pts = []; for (let i = 0; i <= 20; i++) { const x = 20 + i * 18 * s; const hump = Math.sin(Math.PI * i / 20) * 46 * s; pts.push([x, y - hump]); }
    let top = "M" + pts.map(p => p[0].toFixed(1) + " " + p[1].toFixed(1)).join("L");
    let web = pts.map((p, i) => i ? '<path d="M' + pts[i - 1][0].toFixed(1) + ' ' + pts[i - 1][1].toFixed(1) + 'L' + p[0].toFixed(1) + ' ' + y + '"/>' : "").join("");
    let posts = pts.map(p => '<path d="M' + p[0].toFixed(1) + ' ' + p[1].toFixed(1) + 'V' + y + '"/>').join("");
    return '<g stroke="' + c + '" stroke-width="' + (2.2 * s) + '" fill="none"><path d="' + top + '"/>' + web + posts + '<path d="M20 ' + y + 'H' + (20 + 360 * s) + '"/></g>';
  };

  /* 0. Metra Electric, South Chicago branch, 93rd St at the end of the line */
  function vsstop() {
    const car = (x) => '<rect x="' + x + '" y="112" width="160" height="58" rx="5" fill="#c9ccd1" stroke="#6e737a" stroke-width="2"/>' +
      '<rect x="' + x + '" y="112" width="160" height="10" rx="5" fill="#9aa0a8"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (x + 10 + i * 24) + '" y="128" width="16" height="16" rx="2" fill="#2a3340"/>').join("") +
      '<rect x="' + x + '" y="150" width="160" height="5" fill="' + METRA + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#vs0)"/>' +
      /* catenary */
      '<path d="M0 98h400" stroke="#4a4f56" stroke-width="2"/>' + [40, 200, 360].map(x => '<rect x="' + x + '" y="70" width="5" height="120" fill="#5a5f66"/><path d="M' + (x - 20) + ' 76h45" stroke="#5a5f66" stroke-width="4"/>').join("") +
      '<rect x="0" y="176" width="400" height="10" fill="#8a8478"/><path d="M0 188h400M0 196h400" stroke="#6a5a4a" stroke-width="3"/>' +
      '<g class="anim-train">' + car(10) + car(176) + '<rect x="166" y="112" width="12" height="2" fill="#000"/><path d="M60 112l12 -14M120 112l-12 -14" stroke="#333" stroke-width="2"/><circle cx="16" cy="160" r="4" fill="#fff6c2"/></g>' +
      /* platform at grade */
      '<rect x="0" y="198" width="400" height="16" fill="#b9b3a6"/><rect x="0" y="198" width="400" height="3" fill="#f2c200"/><rect x="0" y="214" width="400" height="46" fill="#56565c"/>' +
      '<rect x="270" y="218" width="120" height="16" fill="#2a2a30"/><text x="330" y="230" text-anchor="middle" ' + font + ' font-size="9" fill="#ffd98a" class="vs-glow">END OF THE LINE</text>' +
      '<rect x="218" y="12" width="174" height="44" rx="3" fill="#111"/>' +
      '<rect x="228" y="20" width="34" height="28" rx="4" fill="' + METRA + '"/><text x="245" y="39" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">ME</text>' +
      nine(270, 36, 14, "#fff") + '<text x="278.5" y="36" ' + font + ' font-size="14" fill="#fff">3rd St</text><text x="270" y="50" ' + font + ' font-size="9" fill="#ccc">South Chicago</text>',
      sky("vs0", "#6d9fd2", "#f2d2a8"));
  }

  /* 1. The Chicago Skyway humped high over the Calumet River */
  function vsskyway() {
    return svg(
      '<rect width="400" height="260" fill="url(#vs1)"/>' +
      '<g fill="#7a7468" opacity=".6"><rect x="10" y="150" width="40" height="40"/><rect x="56" y="140" width="10" height="50"/><rect x="330" y="146" width="56" height="44"/><rect x="350" y="120" width="8" height="26"/></g>' +
      '<rect x="0" y="186" width="400" height="74" fill="#3d6b80"/>' +
      '<g class="vs-wave"><path d="M0 206q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#7ab0c4" stroke-width="2" fill="none" opacity=".6"/></g>' +
      '<g class="vs-wave vs-wv2"><path d="M0 230q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#7ab0c4" stroke-width="2" fill="none" opacity=".5"/></g>' +
      /* approach piers */
      [30, 80, 320, 370].map(x => '<rect x="' + (x - 4) + '" y="120" width="8" height="70" fill="#8a8a84"/>').join("") +
      [150, 250].map(x => '<rect x="' + (x - 7) + '" y="120" width="14" height="70" fill="#7a7a74"/>').join("") +
      skyway(120, 1, "#5f7a6a") +
      '<rect x="20" y="118" width="360" height="6" fill="#4a4f4a"/>' +
      minicar("vs-car", 112, "#e8e8e8") + minicar("vs-car vs-c2", 112, RED) + minicar("vs-carl", 112, GOLD) + minicar("vs-carl vs-cl2", 112, "#2a2a34") +
      /* freighter on the river */
      '<g class="vs-boat"><path d="M0 192h110l-10 16h-92z" fill="#8a2a22"/><rect x="10" y="182" width="80" height="10" fill="#3a3a40"/><rect x="80" y="166" width="20" height="16" fill="#e8e4d8"/><rect x="84" y="170" width="12" height="4" fill="#2a3340"/></g>' +
      '<rect x="140" y="20" width="120" height="20" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="34" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">CHICAGO SKYWAY</text>',
      sky("vs1", "#e88a5a", "#f6d6a0"));
  }

  /* 2. The Ewing Avenue Bridge, blue bascule over the Calumet River */
  function vsbridge() {
    return svg(
      '<rect width="400" height="260" fill="url(#vs2)"/>' +
      '<g fill="#6a6a70" opacity=".7"><rect x="0" y="120" width="60" height="70"/><rect x="20" y="96" width="10" height="24"/><rect x="40" y="104" width="8" height="16"/><rect x="330" y="130" width="70" height="60"/></g>' +
      '<rect x="0" y="186" width="400" height="74" fill="#34627a"/>' +
      '<g class="vs-wave"><path d="M0 214q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#7ab0c4" stroke-width="2" fill="none" opacity=".6"/></g>' +
      /* abutments */
      '<rect x="40" y="170" width="110" height="30" fill="#8a8478"/><rect x="250" y="170" width="110" height="30" fill="#8a8478"/>' +
      /* bridge houses */
      '<rect x="110" y="128" width="30" height="42" fill="#d8cfbf"/><path d="M106 128h38l-19 -12z" fill="#3a5a8a"/><rect x="118" y="138" width="14" height="10" fill="#2a3340" class="vs-glow"/>' +
      '<rect x="260" y="128" width="30" height="42" fill="#d8cfbf"/><path d="M256 128h38l-19 -12z" fill="#3a5a8a"/><rect x="268" y="138" width="14" height="10" fill="#2a3340"/>' +
      /* the two leaves (truss) rising */
      '<g class="vs-leaf"><g transform="translate(150 170)"><rect x="0" y="-8" width="50" height="8" fill="#2f6aa8"/><path d="M0 -8l10 -18h30l10 18M10 -26l10 18l10 -18l10 18" stroke="#2f6aa8" stroke-width="3" fill="none"/></g></g>' +
      '<g class="vs-leafr"><g transform="translate(200 170)"><rect x="0" y="-8" width="50" height="8" fill="#2f6aa8"/><path d="M0 -8l10 -18h30l10 18M10 -26l10 18l10 -18l10 18" stroke="#2f6aa8" stroke-width="3" fill="none"/></g></g>' +
      /* boat */
      '<g class="vs-boat"><path d="M0 196h60l-8 12h-48z" fill="#f2f2f2"/><rect x="14" y="184" width="26" height="12" fill="' + TEAL + '"/><rect x="30" y="170" width="3" height="14" fill="#555"/></g>' +
      '<rect x="132" y="20" width="136" height="20" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="34" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">EWING AVE BRIDGE</text>',
      sky("vs2", "#8ab8e0", "#eef0ea"));
  }

  /* 3. The old South Works ore walls on the lake */
  function vslake() {
    const gull = (cls, x, y) => '<g class="vs-gull ' + cls + '"><path d="M' + x + ' ' + y + 'q6 -6 12 0q6 -6 12 0" stroke="#f4f4f4" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#vs3)"/>' +
      '<circle cx="320" cy="60" r="22" fill="#fff2b0" class="vs-glow"/>' +
      '<rect x="0" y="130" width="400" height="130" fill="#3a7ea8"/>' +
      '<g class="vs-wave"><path d="M0 150q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#a8d4ec" stroke-width="2" fill="none" opacity=".7"/></g>' +
      '<g class="vs-wave vs-wv2"><path d="M0 170q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#a8d4ec" stroke-width="2" fill="none" opacity=".6"/></g>' +
      /* the long ore walls */
      '<path d="M0 196h300l30 -54h20l-24 54h74v64h-400z" fill="#a8a294"/>' +
      '<rect x="0" y="160" width="290" height="36" fill="#bdb6a6"/><rect x="0" y="156" width="290" height="6" fill="#d2ccbc"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (10 + i * 28) + '" y="166" width="3" height="28" fill="#958e80"/>').join("") +
      '<rect x="0" y="196" width="400" height="10" fill="#6a8a4a"/><rect x="0" y="206" width="400" height="54" fill="#7a9a54"/>' +
      '<path d="M0 230q100 -10 200 0t200 0" stroke="#c9b99a" stroke-width="10" fill="none"/>' +
      gull("", 80, 70) + gull("vs-gl2", 150, 96) + gull("", 240, 90) +
      '<rect x="130" y="20" width="140" height="20" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="34" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">SOUTH WORKS SHORE</text>',
      sky("vs3", "#5f9fd6", "#f2ead2"));
  }

  /* 4. S Ewing Ave and E 106th St, the Skyway behind at dusk */
  function vscorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#vs4)"/>' +
      '<g opacity=".85">' + skyway(118, .9, "#2a2440") + '</g><rect x="20" y="116" width="324" height="4" fill="#2a2440"/>' +
      '<g fill="#ffd98a">' + [70, 140, 210, 280].map((x, i) => '<rect class="vs-glow' + (i % 2 ? " vs-g2" : "") + '" x="' + x + '" y="113" width="4" height="3"/>').join("") + '</g>' +
      '<rect x="0" y="124" width="300" height="96" fill="#6e3a2c"/>' +
      Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (134 + r * 11) + 'h300" stroke="#542a20" stroke-width="1.5"/>').join("") +
      '<rect x="0" y="124" width="300" height="10" fill="' + CHIBLUE + '" opacity=".85"/>' + [40, 110, 180, 250].map(x => star(x, 129, 4, STAR)).join("") +
      tag("VIC SPENCER", 10, 184, 38, GOLD, -7) + tag("BRAINIAC", 20, 214, 16, TEAL, -4) + tag("VICTOR", 252, 212, 16, "#fff", -3) + tag("SPENCER FOR HIGHER", 116, 214, 12, RED, -3) +
      '<g class="vs-dr"><rect x="44" y="184" width="3" height="10" fill="' + GOLD + '"/></g><g class="vs-dr" style="animation-delay:-.9s"><rect x="150" y="182" width="3" height="10" fill="' + GOLD + '"/></g>' +
      '<g class="vs-sp"><circle cx="280" cy="148" r="3" fill="#fff" opacity=".7"/></g><g class="vs-sp vs-sp2"><circle cx="286" cy="142" r="2" fill="#fff" opacity=".6"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#4c4c52"/><rect x="0" y="216" width="400" height="6" fill="#b9b3a6"/>' +
      '<g class="vs-car"><rect x="0" y="228" width="60" height="16" rx="5" fill="' + TEAL + '"/><rect x="12" y="222" width="32" height="10" rx="3" fill="#1f8a7e"/><circle cx="12" cy="246" r="5" fill="#111"/><circle cx="48" cy="246" r="5" fill="#111"/></g>' +
      '<rect x="336" y="90" width="6" height="130" fill="#2f2f2f"/>' + sign(296, 92, 92, "S Ewing Ave") + sign(298, 118, 88, "E 106th St"),
      sky("vs4", "#1c1a38", "#f08a3a"));
  }

  window.SCENES = { vsstop: vsstop, vsskyway: vsskyway, vsbridge: vsbridge, vslake: vslake, vscorner: vscorner };
})();
