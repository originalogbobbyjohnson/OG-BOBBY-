/* tamelamann scenes (Regions: Houston + Texas; born and raised in Fort Worth, youngest of 14, Church of God in Christ choir by 12, finished at O.D. Wyatt High,
   lead voice with Kirk Franklin & the Family, then years on the road in the gospel stage plays). CSS classes prefixed tm- (the page's own anim-train is kept). 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tmnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.tm-note{animation:tmnote 3s ease-out infinite}.tm-n2{animation-delay:-1s}.tm-n3{animation-delay:-2s}' +
    '@keyframes tmsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.tm-sway{transform-box:fill-box;transform-origin:50% 100%;animation:tmsway 2s ease-in-out infinite}.tm-s2{animation-delay:-1s}' +
    '@keyframes tmglow{0%,100%{opacity:.35}50%{opacity:1}}.tm-glow{animation:tmglow 1.8s ease-in-out infinite}.tm-g2{animation-delay:-.6s}.tm-g3{animation-delay:-1.2s}' +
    '@keyframes tmbeam{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.tm-beam{transform-box:fill-box;transform-origin:50% 0%;animation:tmbeam 4s ease-in-out infinite}.tm-b2{animation-delay:-2s}' +
    '@keyframes tmcurt{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.9)}}.tm-curt{transform-box:fill-box;transform-origin:0% 50%;animation:tmcurt 4s ease-in-out infinite}.tm-curtR{transform-origin:100% 50%}' +
    '@keyframes tmcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.tm-car{animation:tmcar 7s linear infinite}.tm-car2{animation-delay:-3.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = '#e9c46a', PURPLE = '#9d4edd', CORAL = '#e76f51', CREAM = '#fbf3e4', TEAL = '#2a9d8f';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, cls, c) => '<g class="tm-note ' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="10" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 0 10)"/><rect x="3.6" y="-8" width="1.8" height="18" fill="' + c + '"/><path d="M5.4 -8q7 3 6 10" stroke="' + c + '" stroke-width="2" fill="none"/></g></g>';
  const singer = (x, y, robe, cls) => '<g class="tm-sway ' + (cls || '') + '"><circle cx="' + x + '" cy="' + (y - 30) + '" r="8" fill="#3a2418"/>' +
    '<path d="M' + (x - 14) + ' ' + (y + 20) + 'l4 -42q10 -6 20 0l4 42z" fill="' + robe + '"/><path d="M' + (x - 6) + ' ' + (y - 20) + 'l6 8l6 -8" stroke="' + GOLD + '" stroke-width="2.4" fill="none"/></g>';
  /* downtown Fort Worth skyline: Burnett Plaza's dark slab, the twin glass towers, the stepped tower, lit windows */
  const skyline = (base, col, lit) => {
    let g = '<g fill="' + col + '">' +
      '<rect x="40" y="' + (base - 120) + '" width="44" height="120"/><rect x="92" y="' + (base - 92) + '" width="30" height="92"/><path d="M92 ' + (base - 92) + 'l15 -16l15 16z"/>' +
      '<rect x="134" y="' + (base - 106) + '" width="28" height="106"/><rect x="166" y="' + (base - 106) + '" width="28" height="106"/>' +
      '<rect x="206" y="' + (base - 76) + '" width="40" height="76"/><rect x="214" y="' + (base - 90) + '" width="24" height="14"/>' +
      '<rect x="258" y="' + (base - 60) + '" width="34" height="60"/></g>';
    if (lit) for (let i = 0; i < 18; i++) g += '<rect class="tm-glow tm-g' + (i % 3 + 1) + '" x="' + (46 + (i * 37) % 240) + '" y="' + (base - 100 + (i * 23) % 80) + '" width="4" height="5" fill="#ffe8a8"/>';
    return g;
  };

  /* 1. Trinity Metro's Route 25 bus pulling up on E Seminary Dr, southeast side houses and live oaks behind */
  function tmbus() {
    let win = "";
    for (let x = 60; x < 280; x += 36) win += '<rect x="' + x + '" y="140" width="28" height="22" rx="2" fill="#bfe3f2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tms1)"/>' +
      '<circle cx="330" cy="50" r="22" fill="#ffd27a" opacity=".9"/>' +
      /* southeast side houses and live oaks */
      (() => { let h = ""; [[10,'#d8c8a8'],[110,'#b8d0c8'],[210,'#e0b8a0'],[300,'#c8c0d8']].forEach(([x,c]) => h += '<rect x="' + x + '" y="112" width="70" height="58" fill="' + c + '"/><path d="M' + (x - 6) + ' 112l41 -28l41 28z" fill="#6a4a3a"/><rect x="' + (x + 10) + '" y="128" width="16" height="14" fill="#2a3a4a"/><rect x="' + (x + 44) + '" y="138" width="14" height="32" fill="#5a3a2a"/>'); return h; })() +
      '<circle cx="95" cy="96" r="22" fill="#3f7a3a"/><circle cx="195" cy="92" r="20" fill="#4a8a4a"/><rect x="92" y="110" width="6" height="60" fill="#5a3a2a"/><rect x="192" y="106" width="6" height="64" fill="#5a3a2a"/>' +
      /* bus stop sign */
      '<rect x="352" y="104" width="4" height="80" fill="#666"/><rect x="336" y="96" width="36" height="26" rx="3" fill="' + TEAL + '"/><text x="354" y="113" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">25</text>' +
      '<rect x="0" y="170" width="400" height="90" fill="#4a4d55"/><rect x="0" y="170" width="400" height="5" fill="#a0a4ab"/>' +
      '<g class="anim-train">' +
        '<rect x="40" y="126" width="270" height="70" rx="10" fill="#f4f4f4" stroke="#7a8590" stroke-width="2"/>' +
        '<rect x="40" y="170" width="270" height="10" fill="' + TEAL + '"/><rect x="40" y="180" width="270" height="4" fill="' + CORAL + '"/>' + win +
        '<rect x="288" y="136" width="18" height="40" rx="3" fill="#9fc6e8"/><rect x="290" y="128" width="16" height="8" rx="2" fill="#111"/><text x="298" y="135" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb84a">25</text>' +
        '<circle cx="90" cy="198" r="11" fill="#111"/><circle cx="260" cy="198" r="11" fill="#111"/><circle cx="90" cy="198" r="4" fill="#888"/><circle cx="260" cy="198" r="4" fill="#888"/>' +
      '</g>' +
      '<path d="M0 230h40M80 230h40M160 230h40M240 230h40M320 230h40" stroke="#e8d27a" stroke-width="3"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#d8dbe0" letter-spacing="3">E SEMINARY DR</text>',
      sky("tms1", "#5aa0d8", "#f4c98a"));
  }

  /* 2. The Church of God in Christ choir loft: a 12-year-old soloist out front of the adult choir */
  function tmchoir() {
    return svg(
      '<rect width="400" height="260" fill="url(#tms2)"/>' +
      '<path d="M200 20v40M184 36h32" stroke="' + GOLD + '" stroke-width="6"/>' +
      '<rect x="40" y="70" width="320" height="80" rx="6" fill="#5a2a3a"/>' +
      singer(80, 120, PURPLE, "") + singer(130, 116, PURPLE, "tm-s2") + singer(180, 120, PURPLE, "") + singer(230, 116, PURPLE, "tm-s2") + singer(280, 120, PURPLE, "") + singer(330, 116, PURPLE, "tm-s2") +
      '<rect x="0" y="150" width="400" height="22" fill="#6e3b24"/>' +
      /* the young soloist in front, smaller, white robe */
      '<g class="tm-sway"><circle cx="200" cy="172" r="7" fill="#3a2418"/><path d="M188 214l3 -36q9 -5 18 0l3 36z" fill="' + CREAM + '"/></g>' +
      '<rect x="230" y="176" width="3" height="40" fill="#999"/><rect x="226" y="170" width="10" height="10" rx="5" fill="#333"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#4a2618"/>' +
      (() => { let p = ""; for (let i = 0; i < 4; i++) p += '<rect x="' + (20 + i * 100) + '" y="226" width="70" height="10" rx="3" fill="#7a4a2e"/>'; return p; })() +
      note(110, 70, "", GOLD) + note(260, 66, "tm-n2", CREAM) + note(340, 74, "tm-n3", CORAL),
      sky("tms2", "#2a1630", "#3a1f2a"));
  }

  /* 3. With the Family: a big gospel choir on risers, red robes, the director's hands up, stage lights */
  function tmfamily() {
    let rows = "";
    for (let r = 0; r < 3; r++) for (let i = 0; i < 9; i++) {
      const x = 40 + i * 40 + (r % 2) * 20, y = 120 + r * 30;
      rows += '<g class="tm-sway ' + ((i + r) % 2 ? 'tm-s2' : '') + '"><circle cx="' + x + '" cy="' + (y - 16) + '" r="6" fill="#2a1a12"/><path d="M' + (x - 10) + ' ' + (y + 10) + 'l3 -22q7 -4 14 0l3 22z" fill="' + (r === 1 ? CORAL : '#c0392b') + '"/></g>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#tms3)"/>' +
      '<path class="tm-beam" d="M80 0l-40 210h80z" fill="' + GOLD + '" opacity=".18"/><path class="tm-beam tm-b2" d="M320 0l-40 210h80z" fill="' + PURPLE + '" opacity=".22"/>' +
      '<rect x="20" y="126" width="360" height="10" fill="#333"/><rect x="20" y="156" width="360" height="10" fill="#333"/><rect x="20" y="186" width="360" height="10" fill="#333"/>' +
      rows +
      '<rect x="0" y="210" width="400" height="50" fill="#141428"/>' +
      /* the director from behind, arms up */
      '<g class="tm-sway"><circle cx="200" cy="214" r="9" fill="#111"/><path d="M186 260l4 -38h20l4 38z" fill="#111"/><path d="M190 226l-16 -22M210 226l16 -22" stroke="#111" stroke-width="6" stroke-linecap="round"/></g>' +
      note(60, 60, "", GOLD) + note(200, 50, "tm-n2", CREAM) + note(340, 60, "tm-n3", CORAL),
      sky("tms3", "#0a0a1e", "#2a1640"));
  }

  /* 4. The stage play on the road: red velvet curtains, the footlights, a kitchen-table set and a church hat on the chair */
  function tmplay() {
    return svg(
      '<rect width="400" height="260" fill="url(#tms4)"/>' +
      '<rect x="0" y="0" width="400" height="26" fill="#6a0f1a"/>' +
      (() => { let s = ""; for (let i = 0; i < 20; i++) s += '<path d="M' + (i * 20) + ' 26q10 14 20 0" fill="#8a1424"/>'; return s; })() +
      /* set: a window, a table and chair */
      '<rect x="150" y="60" width="100" height="70" fill="#f4e7c8" stroke="#8a6a3a" stroke-width="4"/><path d="M200 60v70M150 95h100" stroke="#8a6a3a" stroke-width="3"/>' +
      '<rect x="150" y="160" width="100" height="8" fill="#7a4a24"/><rect x="158" y="168" width="6" height="30" fill="#7a4a24"/><rect x="236" y="168" width="6" height="30" fill="#7a4a24"/>' +
      '<rect x="270" y="150" width="34" height="8" fill="#7a4a24"/><rect x="298" y="110" width="6" height="88" fill="#7a4a24"/><rect x="272" y="158" width="5" height="40" fill="#7a4a24"/>' +
      /* a wide church hat on the chair */
      '<ellipse cx="287" cy="148" rx="22" ry="5" fill="' + PURPLE + '"/><path d="M275 148q12 -18 24 0z" fill="' + PURPLE + '"/><path d="M299 142q8 -8 10 -2" stroke="' + GOLD + '" stroke-width="3" fill="none"/>' +
      '<circle cx="185" cy="154" r="6" fill="' + CREAM + '"/><rect x="210" y="146" width="8" height="14" fill="#fff" opacity=".8"/>' +
      '<path class="tm-beam" d="M200 26l-60 180h120z" fill="#fff" opacity=".1"/>' +
      '<g class="tm-curt"><path d="M0 26h80q-20 90 0 190h-80z" fill="#a01828"/><path d="M20 26v190M44 26v190" stroke="#7a0f1c" stroke-width="3"/></g>' +
      '<g class="tm-curt tm-curtR"><path d="M400 26h-80q20 90 0 190h80z" fill="#a01828"/><path d="M380 26v190M356 26v190" stroke="#7a0f1c" stroke-width="3"/></g>' +
      '<rect x="0" y="198" width="400" height="18" fill="#5a3a22"/>' +
      (() => { let f = ""; for (let i = 0; i < 16; i++) f += '<circle class="tm-glow tm-g' + (i % 3 + 1) + '" cx="' + (14 + i * 25) + '" cy="214" r="3" fill="#ffe8a8"/>'; return f; })() +
      '<rect x="0" y="216" width="400" height="44" fill="#140a14"/>' +
      (() => { let h = ""; for (let i = 0; i < 10; i++) h += '<circle cx="' + (20 + i * 40) + '" cy="256" r="14" fill="#0a050a"/>'; return h; })(),
      sky("tms4", "#1a0a12", "#2a1420"));
  }

  /* 5. The corner: E Seminary Dr and Miller Ave, TAMELA tagged, downtown Fort Worth lit up behind */
  function tmcorner() {
    const BRICK = "#5a3428", BRICK2 = "#46281e";
    return svg(
      '<rect width="400" height="260" fill="url(#tms5)"/>' + stars(14) +
      skyline(132, "#2a2f4a", true) +
      '<rect x="0" y="128" width="400" height="96" fill="' + BRICK + '"/>' +
      (() => { let b = ""; for (let y = 134; y < 224; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="' + BRICK2 + '" stroke-width="1"/>'; return b; })() +
      tag("TAMELA", 18, 196, 50, GOLD, -5) + tag("MANN", 236, 214, 26, CORAL, -4) + tag("BEST DAYS", 40, 216, 18, PURPLE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="tm-car"><rect x="0" y="236" width="40" height="14" rx="4" fill="' + TEAL + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="30" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="330" y="40" width="5" height="186" fill="#3d4b3f"/>' +
      '<rect x="274" y="44" width="118" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="333" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">E Seminary Dr</text>' +
      '<rect x="286" y="70" width="94" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="333" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Miller Ave</text>' +
      '<circle class="tm-glow" cx="333" cy="36" r="5" fill="#fff6c2"/>',
      sky("tms5", "#0a0a1a", "#3a2a4a"));
  }

  window.SCENES = { tmbus: tmbus, tmchoir: tmchoir, tmfamily: tmfamily, tmplay: tmplay, tmcorner: tmcorner };
})();
