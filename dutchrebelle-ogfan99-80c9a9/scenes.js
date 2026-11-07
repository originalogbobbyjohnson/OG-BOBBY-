/* dutchrebelle scenes (Regions tab: Boston + New England; Mattapan, raised between Mattapan and Milton, born in Hinche, Haiti). CSS classes prefixed dr- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes drflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.dr-flk{animation:drflick 2.4s infinite}.dr-flk2{animation-delay:.8s}' +
    '@keyframes drglow{0%,100%{opacity:.45}50%{opacity:1}}.dr-glow{animation:drglow 2.2s ease-in-out infinite}.dr-g2{animation-delay:-1.1s}' +
    '@keyframes drflow{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.dr-river{animation:drflow 3s linear infinite}' +
    '@keyframes drroll{0%{transform:translateX(0)}70%{transform:translateX(150px)}100%{transform:translateX(150px)}}.dr-ball{animation:drroll 3s ease-in infinite}' +
    '@keyframes drtip{0%,62%{transform:rotate(0)}80%,100%{transform:rotate(-70deg)}}.dr-pin{transform-box:fill-box;transform-origin:50% 100%;animation:drtip 3s ease-in infinite}' +
    '@keyframes drspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dr-sp{animation:drspray 1.4s ease-out infinite}.dr-sp2{animation-delay:.45s}' +
    '@keyframes drcloud{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.dr-cloud{animation:drcloud 22s linear infinite}.dr-c2{animation-delay:-11s}' +
    '@keyframes drleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-60px,200px) rotate(260deg)}}.dr-lf{transform-box:fill-box;animation:drleaf 6s linear infinite}.dr-lf2{animation-delay:-2s}.dr-lf3{animation-delay:-4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "dr-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* Haitian flag, plain blue over red (no coat of arms) */
  const htflag = (x, y, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (w * 0.3) + '" fill="#00209f"/><rect x="' + x + '" y="' + (y + w * 0.3) + '" width="' + w + '" height="' + (w * 0.3) + '" fill="#d21034"/>';
  const ROSE = "#ff4f8b", GOLD = "#f5c542", RED = "#da291c", TEAL = "#3fd0c9";

  /* 1. Mattapan, end of the Mattapan Line: the orange-and-cream PCC trolley rolling into the open-air terminal, the canopy, the black sign with the red M bullet */
  function drstation() {
    const tr = '<g class="anim-train"><rect x="40" y="110" width="290" height="80" rx="16" fill="#f1e6c8" stroke="#6b5a3a" stroke-width="2"/>' +
      '<rect x="40" y="152" width="290" height="38" rx="6" fill="#e2712b"/><rect x="40" y="150" width="290" height="4" fill="#7a3a12"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (60 + i * 44) + '" y="120" width="34" height="26" rx="4" fill="#24323e"/>').join("") +
      '<path d="M200 110l-20 -34M200 110l20 -34" stroke="#333" stroke-width="2"/><circle cx="318" cy="172" r="4" fill="#fff6c2"/><rect x="70" y="186" width="40" height="8" rx="3" fill="#333"/><rect x="250" y="186" width="40" height="8" rx="3" fill="#333"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dr1)"/>' +
      '<path d="M0 70h400" stroke="#333" stroke-width="1.5"/>' +
      '<g fill="#3b4a3a"><circle cx="20" cy="110" r="30"/><circle cx="380" cy="104" r="34"/><circle cx="350" cy="120" r="24"/></g>' + tr +
      '<rect x="0" y="194" width="400" height="10" fill="#8c8f94"/><rect x="0" y="204" width="400" height="6" fill="#5a4a3a"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="210" width="8" height="4" fill="#5a4a3a"/>').join("") +
      '<rect x="0" y="214" width="400" height="46" fill="#a9a59c"/><rect x="0" y="214" width="400" height="5" fill="#f2c200"/>' +
      /* canopy */
      '<path d="M0 0h400v20l-20 8H20l-20 -8z" fill="#4a5562"/>' + [70, 200, 330].map(x => '<rect class="dr-flk" x="' + (x - 22) + '" y="24" width="44" height="4" rx="2" fill="#fff8dc"/>').join("") +
      [24, 376].map(x => '<rect x="' + (x - 5) + '" y="20" width="10" height="194" fill="#566270"/>').join("") +
      '<rect x="100" y="36" width="200" height="32" rx="3" fill="#111"/><text x="114" y="58" ' + font + ' font-size="17" fill="#fff">Mattapan</text>' + badge(254, 52, "M", RED),
      sky("dr1", "#f6b27a", "#9fd2f0"));
  }

  /* 2. The Neponset River at Mattapan Square: the old stone bridge, water running under it, the trolley line's trees on the far bank, a Haitian flag on a storefront pole */
  function drriver() {
    return svg(
      '<rect width="400" height="260" fill="url(#dr2)"/>' +
      '<g class="dr-cloud"><ellipse cx="60" cy="40" rx="34" ry="12" fill="#fff" opacity=".85"/></g><g class="dr-cloud dr-c2"><ellipse cx="60" cy="64" rx="26" ry="9" fill="#fff" opacity=".7"/></g>' +
      '<g fill="#2f6b3a"><circle cx="30" cy="112" r="34"/><circle cx="90" cy="104" r="30"/><circle cx="320" cy="108" r="32"/><circle cx="380" cy="100" r="36"/></g>' +
      '<g fill="#7a6a5a"><rect x="150" y="70" width="70" height="50"/><rect x="226" y="80" width="56" height="40"/></g>' + [158, 176, 194, 234, 252].map(x => '<rect x="' + x + '" y="84" width="10" height="12" fill="#2a2228"/>').join("") +
      '<rect x="286" y="62" width="2" height="58" fill="#555"/>' + htflag(288, 62, 30) +
      '<rect x="0" y="120" width="400" height="14" fill="#5a7a3a"/>' +
      /* stone bridge */
      '<path d="M0 134h400v34H0z" fill="#8f8a80"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 134v34" stroke="#7a756c" stroke-width="1"/>').join("") +
      '<path d="M0 146h400M0 158h400" stroke="#7a756c" stroke-width="1"/>' +
      '<path d="M40 168q40 -46 80 0zM160 168q40 -46 80 0zM280 168q40 -46 80 0z" fill="#22303a"/>' +
      '<rect x="0" y="128" width="400" height="6" fill="#6f6a62"/>' +
      /* river */
      '<rect x="0" y="168" width="400" height="92" fill="#2e5f7a"/>' +
      '<g class="dr-river">' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (186 + (i % 3) * 22) + 'q10 -6 20 0t20 0" stroke="#7fb6d0" stroke-width="2" fill="none"/>').join("") + '</g>' +
      '<rect x="12" y="226" width="150" height="22" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="87" y="242" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">NEPONSET RIVER</text>',
      sky("dr2", "#7cc4f0", "#e9f4fb"));
  }

  /* 3. Great Blue Hill in Milton: the Blue Hills ridge, the stone weather-observatory tower on the summit, fall leaves blowing */
  function drbluehill() {
    return svg(
      '<rect width="400" height="260" fill="url(#dr3)"/>' +
      '<g class="dr-cloud"><ellipse cx="60" cy="36" rx="34" ry="11" fill="#fff" opacity=".8"/></g>' +
      '<path d="M0 190q60 -90 140 -110q60 -14 110 6q80 34 150 104v60H0z" fill="#3e5c8a"/>' +
      '<path d="M0 210q80 -60 160 -60t240 50v60H0z" fill="#2f4a3a"/>' +
      /* the observatory: square stone tower and lower wing */
      '<rect x="168" y="44" width="34" height="46" fill="#a49c8e"/><rect x="164" y="40" width="42" height="6" fill="#8a8274"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (165 + i * 9) + '" y="33" width="5" height="7" fill="#8a8274"/>').join("") +
      '<rect x="202" y="64" width="40" height="26" fill="#9a9284"/><path d="M200 64l22 -12l22 12z" fill="#6b5a4a"/>' +
      '<rect x="180" y="54" width="10" height="14" fill="#2a2a30"/><rect x="214" y="72" width="8" height="10" fill="#2a2a30"/>' +
      '<path d="M185 33v-14" stroke="#555" stroke-width="2"/><path class="dr-flk" d="M185 19l10 -3" stroke="#ccc" stroke-width="2"/>' +
      '<path d="M0 260v-40q100 -20 200 -6t200 -4v50z" fill="#4a6a2e"/>' +
      [[60, 30, "#e2712b"], [140, 10, "#d9412e"], [300, 20, GOLD], [360, 40, "#e2712b"], [230, 0, "#d9412e"]].map((a, i) => '<path class="dr-lf ' + ["", "dr-lf2", "dr-lf3"][i % 3] + '" d="M' + a[0] + ' ' + a[1] + 'q6 -6 12 0q-6 6 -12 0z" fill="' + a[2] + '"/>').join("") +
      '<rect x="250" y="226" width="136" height="22" rx="3" fill="#6b4a2e"/><text x="318" y="242" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">GREAT BLUE HILL</text>',
      sky("dr3", "#2b6cb0", "#f6c98a"));
  }

  /* 4. The bowling alley on Morrissey Blvd ("still hitting Boston Bowl up for some pizza"): neon over the lanes, a ball rolling down and pins falling */
  function drbowl() {
    return svg(
      '<rect width="400" height="260" fill="#14101c"/>' +
      '<rect x="0" y="0" width="400" height="60" fill="#211830"/>' +
      '<text class="dr-glow" x="200" y="42" text-anchor="middle" ' + font + ' font-size="28" fill="' + ROSE + '" stroke="#ff9cc0" stroke-width="1">BOWL</text>' +
      '<text class="dr-glow dr-g2" x="200" y="56" text-anchor="middle" ' + font + ' font-size="9" fill="' + TEAL + '">OPEN LATE · PIZZA</text>' +
      /* lanes in perspective */
      '<path d="M70 260L170 90h60l100 170z" fill="#d9a35a"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (90 + i * 30) + ' 260L' + (176 + i * 7) + ' 90" stroke="#b9853e" stroke-width="1"/>').join("") +
      '<path d="M40 260L160 90h10L70 260zM330 260L230 90h10l120 170z" fill="#3a2a40"/>' +
      '<rect x="160" y="74" width="80" height="18" fill="#2a2030"/>' +
      /* pins */
      [[190, 84], [200, 84], [210, 84], [195, 88], [205, 88], [200, 92]].map((p, i) => '<g class="' + (i > 2 ? "dr-pin" : "") + '"><ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="3" ry="7" fill="#fff"/><rect x="' + (p[0] - 3) + '" y="' + (p[1] - 3) + '" width="6" height="1.5" fill="' + RED + '"/></g>').join("") +
      '<g class="dr-ball"><circle cx="130" cy="240" r="14" fill="#4b2a7a" stroke="#2a1440" stroke-width="2"/><circle cx="126" cy="235" r="2" fill="#120a20"/><circle cx="133" cy="234" r="2" fill="#120a20"/></g>' +
      '<rect x="0" y="200" width="40" height="60" fill="#2a2030"/><rect x="360" y="200" width="40" height="60" fill="#2a2030"/>' +
      [20, 380].map(x => '<rect class="dr-flk" x="' + (x - 12) + '" y="70" width="24" height="4" fill="#fff8dc"/>').join(""),
      "");
  }

  /* 5. Blue Hill Ave and River St in Mattapan Square: her name tagged on the wall, the green signs, the Hancock and Prudential towers far off downtown */
  function drcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dr5)"/>' + stars(14) +
      '<g fill="#2a2f4a"><rect x="168" y="22" width="26" height="112"/><rect x="204" y="44" width="30" height="90"/><rect x="216" y="30" width="6" height="14"/></g>' +
      '<path class="dr-glow" d="M168 22h26v112h-26z" fill="#5a8ad6" opacity=".25"/>' +
      [0, 1, 2, 3].map(i => '<rect class="dr-glow' + (i % 2 ? " dr-g2" : "") + '" x="' + (209 + (i % 2) * 12) + '" y="' + (56 + Math.floor(i / 2) * 20) + '" width="6" height="8" fill="#ffd98a"/>').join("") +
      '<g fill="#22263a"><rect x="0" y="92" width="120" height="44"/><rect x="262" y="86" width="72" height="50"/><rect x="336" y="100" width="64" height="36"/></g>' +
      '<rect x="0" y="132" width="400" height="92" fill="#6a5a7a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#5c4d6c" stroke-width="1"/>').join("") +
      tag("DUTCH", 14, 186, 40, ROSE, -6) + tag("REBELLE", 170, 182, 32, GOLD, -5) + tag("MATTAPAN", 22, 216, 18, "#fff", -3) + tag("KISS KISS", 196, 216, 18, TEAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="344" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(286, 98, 112, "Blue Hill Ave") + sign(304, 124, 82, "River St") +
      '<g class="dr-sp"><circle cx="300" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="dr-sp dr-sp2"><circle cx="306" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("dr5", "#1a1438", "#d0607a"));
  }

  window.SCENES = { drstation: drstation, drriver: drriver, drbluehill: drbluehill, drbowl: drbowl, drcorner: drcorner };
})();
