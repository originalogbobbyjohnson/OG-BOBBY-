/* brandonlake scenes (Regions: The Carolinas; grew up in Myrtle Beach SC, came up at Seacoast Church, Charleston area). CSS classes prefixed blk- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes blkspin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.blk-spin{transform-box:fill-box;transform-origin:50% 50%;animation:blkspin 22s linear infinite}' +
    '@keyframes blkrip{0%{transform:translateX(0)}100%{transform:translateX(-32px)}}.blk-rip{animation:blkrip 3s linear infinite}' +
    '@keyframes blkgull{0%{transform:translate(-60px,10px)}100%{transform:translate(460px,-20px)}}.blk-gull{animation:blkgull 11s linear infinite}' +
    '@keyframes blkflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.5)}}.blk-flap{transform-box:fill-box;transform-origin:50% 100%;animation:blkflap .6s ease-in-out infinite}' +
    '@keyframes blkblink{0%,100%{opacity:.3}50%{opacity:1}}.blk-blink{animation:blkblink 1.3s ease-in-out infinite}.blk-b2{animation-delay:-.45s}.blk-b3{animation-delay:-.9s}' +
    '@keyframes blkbeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.blk-beam{transform-box:fill-box;transform-origin:50% 100%;animation:blkbeam 3.6s ease-in-out infinite}.blk-bm2{animation-delay:-1.8s}' +
    '@keyframes blkhand{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.blk-hand{animation:blkhand 1.1s ease-in-out infinite}.blk-h2{animation-delay:-.55s}' +
    '@keyframes blkcar{0%{transform:translateX(-80px)}100%{transform:translateX(470px)}}.blk-car{animation:blkcar 6s linear infinite}' +
    '@keyframes blksp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.blk-sp{animation:blksp 1.4s ease-out infinite}.blk-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const gull = (x, y) => '<g class="blk-gull"><g transform="translate(' + x + ' ' + y + ')"><path class="blk-flap" d="M0 0q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g></g>';
  const palm = (x, base, h) => '<path d="M' + x + ' ' + base + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#6b4f2e" stroke-width="5" fill="none"/>' +
    [[-26, 8], [-18, -6], [0, -12], [18, -6], [26, 8]].map(([dx, dy]) => '<path d="M' + x + ' ' + (base - h) + 'q' + (dx / 2) + ' ' + (dy - 10) + ' ' + dx + ' ' + (dy + 4) + '" stroke="#2f7a3e" stroke-width="5" fill="none" stroke-linecap="round"/>').join('');
  /* the SkyWheel: white wheel with glass gondolas */
  const wheel = (cx, cy, r) => '<path d="M' + (cx - 22) + ' ' + (cy + r + 34) + 'l22 -' + (r + 34) + 'l22 ' + (r + 34) + '" stroke="#e8edf2" stroke-width="5" fill="none"/>' +
    '<g class="blk-spin"><circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="#f4f7fa" stroke-width="4"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (r - 10) + '" fill="none" stroke="#9fd8f0" stroke-width="1.5" opacity=".7"/>' +
    Array.from({ length: 14 }, (_, i) => { const a = i * Math.PI * 2 / 14, x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r; return '<path d="M' + cx + ' ' + cy + 'L' + x.toFixed(1) + ' ' + y.toFixed(1) + '" stroke="#dfe6ec" stroke-width="1"/><ellipse cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" rx="6" ry="5" fill="#bfe6f7" stroke="#fff" stroke-width="1.2"/>'; }).join('') +
    '<circle cx="' + cx + '" cy="' + cy + '" r="6" fill="#fff"/></g>';

  /* 1. Coast RTA bus rolling down Kings Highway into Myrtle Beach, palms and the ocean glow */
  function blkstop() {
    return svg('<rect width="400" height="260" fill="url(#blks1)"/>' + gull(40, 50) + gull(10, 70) +
      '<circle cx="320" cy="80" r="26" fill="#ffd27a" opacity=".9"/>' + palm(40, 196, 90) + palm(370, 196, 80) +
      '<rect x="0" y="196" width="400" height="64" fill="#45484d"/><rect x="0" y="226" width="400" height="3" fill="#f2d16b" opacity=".75"/>' +
      '<rect x="296" y="120" width="5" height="78" fill="#9aa4ad"/>' + '<rect x="250" y="70" width="140" height="44" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><text x="320" y="88" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">KINGS HWY</text><text x="320" y="104" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">MYRTLE BEACH</text>' +
      '<rect x="306" y="132" width="44" height="30" rx="3" fill="#111"/><circle cx="318" cy="147" r="9" fill="#0072bc"/><text x="318" y="151" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">RTA</text><text x="338" y="150" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">BUS</text>' +
      '<g class="anim-train"><rect x="30" y="160" width="220" height="56" rx="8" fill="#f6f7f9"/><rect x="30" y="192" width="220" height="10" fill="#0072bc"/><rect x="30" y="202" width="220" height="4" fill="#f5a623"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (42 + i * 31) + '" y="166" width="25" height="20" rx="2" fill="#253240"/>').join('') +
      '<rect x="228" y="164" width="18" height="34" rx="2" fill="#253240"/><rect x="170" y="152" width="76" height="10" rx="2" fill="#111"/><text x="208" y="160" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb400">MYRTLE BEACH</text>' +
      '<circle cx="70" cy="218" r="10" fill="#1a1a1a"/><circle cx="70" cy="218" r="4" fill="#888"/><circle cx="210" cy="218" r="10" fill="#1a1a1a"/><circle cx="210" cy="218" r="4" fill="#888"/><circle cx="248" cy="206" r="3" fill="#fff3b0"/></g>',
      sky('blks1', '#ff9f6b', '#ffd9a0'));
  }

  /* 2. The Ravenel Bridge: two white diamond towers and fanned cables over the Cooper River, the road to Mount Pleasant */
  function blkbridge() {
    const tower = (x) => '<path d="M' + (x - 22) + ' 170l22 -130l22 130h-10l-12 -96l-12 96z" fill="#f2f4f6"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + x + ' ' + (52 + i * 6) + 'L' + (x - 30 - i * 16) + ' 150M' + x + ' ' + (52 + i * 6) + 'L' + (x + 30 + i * 16) + ' 150" stroke="#e6eaee" stroke-width="1"/>').join('');
    return svg('<rect width="400" height="260" fill="url(#blks2)"/>' + gull(60, 40) +
      '<path d="M0 166h400" stroke="#1c3550" stroke-width="2"/>' + tower(120) + tower(290) +
      '<rect x="0" y="148" width="400" height="8" fill="#d8dde2"/><rect x="0" y="156" width="400" height="4" fill="#9aa2aa"/>' +
      '<g class="blk-car"><rect x="0" y="141" width="20" height="8" rx="2" fill="#d23"/></g><g class="blk-car" style="animation-delay:-3s"><rect x="0" y="141" width="18" height="8" rx="2" fill="#2a6fd6"/></g>' +
      '<rect x="0" y="170" width="400" height="90" fill="#2c5878"/>' +
      '<g class="blk-rip">' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 32) + ' ' + (190 + (i % 3) * 18) + 'q8 -3 16 0" stroke="#9cc6e0" stroke-width="1.5" fill="none" opacity=".6"/>').join('') + '</g>' +
      '<path d="M98 260l22 -60l22 60z" fill="#f2f4f6" opacity=".12"/><path d="M268 260l22 -60l22 60z" fill="#f2f4f6" opacity=".12"/>',
      sky('blks2', '#6cb6e8', '#f6d2a2'));
  }

  /* 3. Sunday at the church: stage lights, the band, hands up in the room */
  function blkchurch() {
    return svg('<rect width="400" height="260" fill="#0e0f1e"/>' +
      '<rect class="blk-beam" x="80" y="10" width="14" height="150" fill="#7fd3e6" opacity=".22"/><rect class="blk-beam blk-bm2" x="190" y="0" width="16" height="160" fill="#ffd56b" opacity=".2"/><rect class="blk-beam" x="306" y="10" width="14" height="150" fill="#f29e5c" opacity=".22"/>' +
      '<rect x="40" y="40" width="320" height="90" rx="4" fill="#1d2140"/><text x="200" y="92" text-anchor="middle" ' + font + ' font-size="26" fill="#ffd56b" letter-spacing="2">HALLELUJAH</text>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => '<circle class="blk-blink ' + (i % 3 ? 'blk-b' + (i % 3 + 1) : '') + '" cx="' + (60 + i * 35) + '" cy="30" r="4" fill="#fff6c8"/>').join('') +
      '<rect x="20" y="140" width="360" height="22" fill="#2a2d3f"/>' +
      /* band on stage: mic stand, keys, drum kit */
      '<rect x="196" y="112" width="3" height="30" fill="#999"/><circle cx="197.5" cy="110" r="4" fill="#333"/><rect x="80" y="122" width="50" height="8" fill="#ddd"/><rect x="80" y="130" width="4" height="12" fill="#555"/><rect x="126" y="130" width="4" height="12" fill="#555"/>' +
      '<ellipse cx="300" cy="134" rx="18" ry="8" fill="#c0392b"/><circle cx="276" cy="122" r="8" fill="none" stroke="#e7c35a" stroke-width="2"/><circle cx="324" cy="122" r="8" fill="none" stroke="#e7c35a" stroke-width="2"/>' +
      '<rect x="0" y="162" width="400" height="98" fill="#15172a"/>' +
      Array.from({ length: 13 }, (_, i) => '<g class="blk-hand ' + (i % 2 ? 'blk-h2' : '') + '"><circle cx="' + (16 + i * 31) + '" cy="208" r="10" fill="#07080f"/><rect x="' + (6 + i * 31) + '" y="216" width="20" height="44" rx="6" fill="#07080f"/><path d="M' + (8 + i * 31) + ' 210l-6 -26M' + (24 + i * 31) + ' 210l6 -26" stroke="#07080f" stroke-width="5" stroke-linecap="round"/></g>').join(''));
  }

  /* 4. Myrtle Beach: the pier at sunrise, waves rolling in */
  function blkpier() {
    return svg('<rect width="400" height="260" fill="url(#blks4)"/>' + gull(100, 60) + gull(60, 40) +
      '<circle cx="290" cy="128" r="30" fill="#ffcf6a"/><rect x="0" y="128" width="400" height="80" fill="#3d7fa6"/>' +
      '<path d="M260 132h60" stroke="#ffe4a0" stroke-width="3" opacity=".7"/><path d="M270 142h40" stroke="#ffe4a0" stroke-width="2" opacity=".6"/>' +
      /* wooden pier out to the ocean */
      '<path d="M0 150h300" stroke="#7a5a3a" stroke-width="6"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (10 + i * 25) + '" y="150" width="4" height="' + (40 - i * 2) + '" fill="#5e4428"/>').join('') +
      '<rect x="270" y="134" width="30" height="16" fill="#e8e0d0"/><path d="M266 134l19 -10l19 10z" fill="#b54a3a"/>' +
      '<g class="blk-rip">' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 32) + ' ' + (170 + (i % 3) * 12) + 'q8 -4 16 0" stroke="#d6eef8" stroke-width="2" fill="none" opacity=".7"/>').join('') + '</g>' +
      '<path d="M0 208q100 -14 200 0t200 0v52h-400z" fill="#ecd8a8"/><path d="M0 214q100 -14 200 0t200 0" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/>' +
      '<rect x="60" y="214" width="3" height="28" fill="#555"/><path d="M40 216q22 -20 44 0z" fill="#e94b3c"/><path d="M52 216q10 -18 22 0" fill="#fff" opacity=".8"/>',
      sky('blks4', '#f7a37a', '#ffe0b0'));
  }

  /* 5. The corner: green street signs on Ocean Blvd, the name tagged on a beach wall, the SkyWheel behind */
  function blkcorner() {
    return svg('<rect width="400" height="260" fill="url(#blks5)"/>' + wheel(120, 82, 58) +
      '<rect x="0" y="140" width="400" height="80" fill="#e9e1cf"/>' +
      [0, 1, 2, 3, 4].map(r => '<path d="M0 ' + (150 + r * 14) + 'h400" stroke="#d6cbb2" stroke-width="1"/>').join('') +
      tag('BRANDON', 24, 184, 34, '#2fb7d6', -4) + tag('LAKE', 160, 212, 36, '#ff8a4c', -4) +
      '<g class="blk-sp"><circle cx="276" cy="186" r="3" fill="#2fb7d6" opacity=".7"/></g><g class="blk-sp blk-sp2"><circle cx="282" cy="192" r="2.4" fill="#ff8a4c" opacity=".7"/></g>' +
      '<rect x="262" y="190" width="16" height="28" rx="3" fill="#2fb7d6"/><rect x="265" y="182" width="10" height="8" fill="#ddd"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#45484d"/>' +
      '<rect x="346" y="40" width="5" height="180" fill="#4a5a4a"/>' + sign(292, 44, 102, 'Ocean Blvd') + sign(292, 70, 102, '9th Ave N'),
      sky('blks5', '#5fb4e0', '#ffd9a8'));
  }

  window.SCENES = { blkstop: blkstop, blkbridge: blkbridge, blkchurch: blkchurch, blkpier: blkpier, blkcorner: blkcorner };
})();
