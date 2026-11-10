/* tashapagelockhart scenes (Regions: Detroit; born and raised in Detroit, sang first in her mother's women's gospel group Witness, high school basketball with WNBA dreams,
   won BET's Sunday Best in 2013). CSS classes prefixed tp- (the page's own anim-train is kept). 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tpnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.tp-note{animation:tpnote 3s ease-out infinite}.tp-n2{animation-delay:-1s}.tp-n3{animation-delay:-2s}' +
    '@keyframes tpsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.tp-sway{transform-box:fill-box;transform-origin:50% 100%;animation:tpsway 2s ease-in-out infinite}.tp-s2{animation-delay:-1s}' +
    '@keyframes tpglow{0%,100%{opacity:.35}50%{opacity:1}}.tp-glow{animation:tpglow 1.8s ease-in-out infinite}.tp-g2{animation-delay:-.6s}.tp-g3{animation-delay:-1.2s}' +
    '@keyframes tpbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(46px)}}.tp-ball{animation:tpbounce .8s cubic-bezier(.5,0,.5,1) infinite}' +
    '@keyframes tpbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.tp-beam{transform-box:fill-box;transform-origin:50% 0%;animation:tpbeam 4s ease-in-out infinite}.tp-b2{animation-delay:-2s}' +
    '@keyframes tpfall{0%{transform:translateY(-20px);opacity:0}15%{opacity:1}100%{transform:translateY(150px);opacity:0}}.tp-conf{animation:tpfall 3s linear infinite}.tp-c2{animation-delay:-1s}.tp-c3{animation-delay:-2s}' +
    '@keyframes tpcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.tp-car{animation:tpcar 7s linear infinite}.tp-car2{animation-delay:-3.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = '#ffd166', ROSE = '#ef476f', SKY = '#4cc9f0', CREAM = '#fbf3e4', RED = '#d6202e';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, cls, c) => '<g class="tp-note ' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="10" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 0 10)"/><rect x="3.6" y="-8" width="1.8" height="18" fill="' + c + '"/><path d="M5.4 -8q7 3 6 10" stroke="' + c + '" stroke-width="2" fill="none"/></g></g>';
  /* Guardian Building: orange brick stepped tower with two octagonal tops */
  const guardian = (x, base, s) => '<g>' +
    '<rect x="' + (x - 34 * s) + '" y="' + (base - 120 * s) + '" width="' + (68 * s) + '" height="' + (120 * s) + '" fill="#c8602a"/>' +
    '<rect x="' + (x - 24 * s) + '" y="' + (base - 150 * s) + '" width="' + (48 * s) + '" height="' + (32 * s) + '" fill="#d0682e"/>' +
    '<rect x="' + (x - 16 * s) + '" y="' + (base - 172 * s) + '" width="' + (14 * s) + '" height="' + (24 * s) + '" fill="#d87436"/><rect x="' + (x + 2 * s) + '" y="' + (base - 166 * s) + '" width="' + (14 * s) + '" height="' + (18 * s) + '" fill="#d87436"/>' +
    (() => { let w = ""; for (let i = 0; i < 6; i++) w += '<rect x="' + (x - 28 * s + i * 10 * s) + '" y="' + (base - 116 * s) + '" width="' + (3 * s) + '" height="' + (112 * s) + '" fill="#8a3a18" opacity=".55"/>'; return w; })() +
    '<path d="M' + (x - 34 * s) + ' ' + (base - 120 * s) + 'h' + (68 * s) + '" stroke="#f0b070" stroke-width="' + (2 * s) + '"/></g>';
  /* Renaissance Center: tall glass cylinder ringed by four shorter ones */
  const rencen = (x, base, s, col) => {
    let g = '<g fill="' + col + '">';
    [[-46, 90], [-26, 104], [26, 104], [46, 90]].forEach(([dx, h]) => g += '<rect x="' + (x + dx * s - 10 * s) + '" y="' + (base - h * s) + '" width="' + (20 * s) + '" height="' + (h * s) + '" rx="' + (6 * s) + '"/>');
    g += '<rect x="' + (x - 15 * s) + '" y="' + (base - 150 * s) + '" width="' + (30 * s) + '" height="' + (150 * s) + '" rx="' + (8 * s) + '"/></g>';
    for (let i = 0; i < 7; i++) g += '<rect class="tp-glow tp-g' + (i % 3 + 1) + '" x="' + (x - 10 * s) + '" y="' + (base - 140 * s + i * 18 * s) + '" width="' + (20 * s) + '" height="' + (2 * s) + '" fill="#9cc4ff"/>';
    return g;
  };
  /* a robed singer seen from behind or in silhouette (no faces) */
  const singer = (x, y, robe, cls) => '<g class="tp-sway ' + (cls || '') + '"><circle cx="' + x + '" cy="' + (y - 30) + '" r="8" fill="#3a2418"/>' +
    '<path d="M' + (x - 14) + ' ' + (y + 20) + 'l4 -42q10 -6 20 0l4 42z" fill="' + robe + '"/><path d="M' + (x - 6) + ' ' + (y - 20) + 'l6 8l6 -8" stroke="' + GOLD + '" stroke-width="2.4" fill="none"/></g>';

  /* 1. The QLine streetcar pulling into the Campus Martius stop on Woodward, the RenCen behind */
  function tpqline() {
    let windows = "";
    for (let x = 30; x < 290; x += 34) windows += '<rect x="' + x + '" y="134" width="24" height="24" rx="3" fill="#dff1ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tps1)"/>' + stars(12) +
      rencen(330, 184, 0.8, "#2a3654") +
      '<rect x="0" y="100" width="44" height="84" fill="#252b40"/><rect x="246" y="118" width="40" height="66" fill="#2f3550"/>' +
      /* stop canopy and sign */
      '<rect x="40" y="58" width="210" height="34" rx="3" fill="#111"/><rect x="40" y="58" width="210" height="4" fill="' + RED + '"/>' +
      '<text x="145" y="82" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">Campus Martius</text>' +
      '<rect x="60" y="92" width="5" height="34" fill="#666"/><rect x="225" y="92" width="5" height="34" fill="#666"/>' +
      '<rect x="252" y="62" width="34" height="22" rx="3" fill="' + RED + '"/><text x="269" y="77" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">QLINE</text>' +
      '<g class="anim-train">' +
        '<rect x="14" y="122" width="290" height="62" rx="16" fill="' + CREAM + '" stroke="#8a95a3" stroke-width="2"/>' +
        '<rect x="14" y="166" width="290" height="7" fill="' + RED + '"/>' + windows +
        '<rect x="282" y="134" width="16" height="26" rx="4" fill="#9fc6e8"/><circle cx="294" cy="176" r="4" fill="#fff6c2"/>' +
        '<path d="M150 122l-14 -18M150 122l14 -18" stroke="#555" stroke-width="2"/>' +
      '</g>' +
      '<path d="M0 102h400" stroke="#444" stroke-width="1.5"/>' +
      '<rect x="0" y="184" width="400" height="76" fill="#3a3f48"/><rect x="0" y="184" width="400" height="5" fill="#9aa0a8"/>' +
      '<path d="M0 196h400M0 204h400" stroke="#8a8d93" stroke-width="2"/>' +
      '<g class="tp-car"><rect x="0" y="226" width="46" height="14" rx="4" fill="' + ROSE + '"/><circle cx="10" cy="240" r="4" fill="#111"/><circle cx="36" cy="240" r="4" fill="#111"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#cfd3da" letter-spacing="3">WOODWARD AVE</text>',
      sky("tps1", "#141c3a", "#e08a5a"));
  }

  /* 2. Mom's church: the women's gospel group up front, stained glass, the organ */
  function tpchoir() {
    const glass = (x) => '<path d="M' + x + ' 120v-56q20 -26 40 0v56z" fill="#1b1f3a" stroke="#c9a24a" stroke-width="3"/>' +
      '<path d="M' + (x + 4) + ' 116v-50q16 -20 32 0v50z" fill="' + SKY + '" opacity=".55"/><path d="M' + (x + 20) + ' 52v64M' + (x + 4) + ' 86h32" stroke="#c9a24a" stroke-width="2"/>' +
      '<circle class="tp-glow" cx="' + (x + 20) + '" cy="74" r="7" fill="' + GOLD + '" opacity=".8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tps2)"/>' +
      glass(40) + glass(180) + glass(320) +
      '<rect x="0" y="150" width="400" height="20" fill="#5a2f1e"/>' +
      singer(110, 170, "#7b2d8e", "") + singer(160, 168, "#7b2d8e", "tp-s2") + singer(210, 170, "#7b2d8e", "") + singer(260, 168, "#7b2d8e", "tp-s2") +
      '<rect x="0" y="190" width="400" height="70" fill="#6e3b24"/>' +
      '<rect x="20" y="200" width="70" height="34" rx="3" fill="#3a1f12"/><path d="M26 206h58M26 214h58" stroke="#e8e0d0" stroke-width="3"/>' +
      (() => { let p = ""; for (let i = 0; i < 6; i++) p += '<rect x="' + (300 + i * 14) + '" y="' + (170 - i % 3 * 8) + '" width="8" height="' + (30 + i % 3 * 8) + '" fill="#c9a24a"/>'; return p; })() +
      note(130, 120, "", GOLD) + note(200, 116, "tp-n2", CREAM) + note(250, 124, "tp-n3", ROSE),
      sky("tps2", "#2a1630", "#4a2a3a"));
  }

  /* 3. The high school gym: hardwood, the hoop, a ball bouncing - she wanted the WNBA */
  function tphoops() {
    let boards = "";
    for (let x = 0; x < 400; x += 20) boards += '<path d="M' + x + ' 170v90" stroke="#b07a3a" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tps3)"/>' +
      (() => { let l = ""; for (let i = 0; i < 5; i++) l += '<rect class="tp-glow tp-g' + (i % 3 + 1) + '" x="' + (30 + i * 80) + '" y="14" width="40" height="8" rx="3" fill="#fff6c2"/>'; return l; })() +
      /* bleachers */
      (() => { let b = ""; for (let r = 0; r < 4; r++) b += '<rect x="0" y="' + (100 + r * 16) + '" width="170" height="10" fill="#8a8f9a"/>'; return b; })() +
      '<rect x="0" y="170" width="400" height="90" fill="#d9a15a"/>' + boards +
      '<path d="M220 260q0 -60 90 -60h90" stroke="#fff" stroke-width="3" fill="none"/>' +
      /* hoop */
      '<rect x="340" y="40" width="6" height="130" fill="#555"/><rect x="290" y="48" width="66" height="44" fill="#fff" stroke="#333" stroke-width="2"/>' +
      '<rect x="310" y="64" width="24" height="18" fill="none" stroke="' + ROSE + '" stroke-width="2"/>' +
      '<ellipse cx="322" cy="94" rx="16" ry="4" fill="none" stroke="#ff7a1a" stroke-width="3"/><path d="M308 96l6 18M322 98v18M336 96l-6 18" stroke="#eee" stroke-width="1.5"/>' +
      /* bouncing ball */
      '<g class="tp-ball"><circle cx="230" cy="110" r="13" fill="#e8742a"/><path d="M217 110h26M230 97v26M221 101q9 9 0 18M239 101q-9 9 0 18" stroke="#5a2a0a" stroke-width="1.5" fill="none"/></g>' +
      '<ellipse cx="230" cy="172" rx="14" ry="3" fill="#000" opacity=".25"/>' +
      '<text x="86" y="92" text-anchor="middle" ' + font + ' font-size="14" fill="' + GOLD + '" letter-spacing="2">HOME</text>',
      sky("tps3", "#2a2f3a", "#4a4f5a"));
  }

  /* 4. The gospel TV competition stage she won in 2013: spotlights, mic stand, confetti */
  function tpstage() {
    let conf = "";
    [[60, ROSE, ""], [120, GOLD, "tp-c2"], [180, SKY, "tp-c3"], [240, GOLD, ""], [300, ROSE, "tp-c2"], [350, SKY, "tp-c3"]].forEach(([x, c, k]) => conf += '<rect class="tp-conf ' + k + '" x="' + x + '" y="20" width="6" height="10" fill="' + c + '"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#tps4)"/>' +
      '<path class="tp-beam" d="M100 0l-40 200h80z" fill="' + GOLD + '" opacity=".18"/><path class="tp-beam tp-b2" d="M300 0l-40 200h80z" fill="' + SKY + '" opacity=".18"/>' +
      '<path d="M200 0l-50 200h100z" fill="#fff" opacity=".12"/>' +
      '<rect x="0" y="190" width="400" height="16" fill="#2a2a44"/>' +
      (() => { let s = ""; for (let i = 0; i < 20; i++) s += '<rect class="tp-glow tp-g' + (i % 3 + 1) + '" x="' + (i * 20 + 4) + '" y="196" width="12" height="4" fill="' + (i % 2 ? GOLD : ROSE) + '"/>'; return s; })() +
      '<rect x="0" y="206" width="400" height="54" fill="#141428"/>' +
      /* mic stand and a glowing star trophy on the stage */
      '<rect x="198" y="120" width="4" height="70" fill="#999"/><path d="M186 190h28" stroke="#999" stroke-width="4"/><rect x="194" y="108" width="12" height="16" rx="6" fill="#333"/>' +
      '<path d="M300 152l5 11h12l-10 7l4 12l-11 -7l-11 7l4 -12l-10 -7h12z" fill="' + GOLD + '"/><rect x="298" y="180" width="14" height="10" fill="' + GOLD + '"/>' +
      conf +
      /* the crowd's raised hands */
      (() => { let h = ""; for (let i = 0; i < 9; i++) h += '<g class="tp-sway ' + (i % 2 ? 'tp-s2' : '') + '"><path d="M' + (20 + i * 44) + ' 260v-34" stroke="#0a0a18" stroke-width="7" stroke-linecap="round"/></g>' + '<circle cx="' + (30 + i * 44) + '" cy="250" r="14" fill="#0a0a18"/>'; return h; })(),
      sky("tps4", "#0a0a1e", "#2a1640"));
  }

  /* 5. The corner: Woodward Ave and Michigan Ave at Campus Martius, TASHA tagged, the Guardian Building behind */
  function tpcorner() {
    const BRICK = "#4a2c3a", BRICK2 = "#3a2030";
    return svg(
      '<rect width="400" height="260" fill="url(#tps5)"/>' + stars(14) +
      guardian(150, 132, 0.62) +
      '<rect x="20" y="84" width="40" height="48" fill="#232c44"/><rect x="220" y="92" width="34" height="40" fill="#232c44"/>' +
      '<rect x="0" y="128" width="400" height="96" fill="' + BRICK + '"/>' +
      (() => { let b = ""; for (let y = 134; y < 224; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="' + BRICK2 + '" stroke-width="1"/>'; return b; })() +
      tag("TASHA PAGE", 16, 192, 40, GOLD, -5) + tag("WHY NOT ME", 40, 216, 18, SKY, -4) + tag("DIFFERENT", 170, 214, 18, ROSE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="tp-car"><rect x="0" y="236" width="40" height="14" rx="4" fill="' + SKY + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="30" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="330" y="40" width="5" height="186" fill="#3d4b3f"/>' +
      '<rect x="278" y="44" width="110" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="333" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Woodward Ave</text>' +
      '<rect x="278" y="70" width="110" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="333" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Michigan Ave</text>' +
      '<circle class="tp-glow" cx="333" cy="36" r="5" fill="#fff6c2"/>',
      sky("tps5", "#070a16", "#2c3554"));
  }

  window.SCENES = { tpqline: tpqline, tpchoir: tpchoir, tphoops: tphoops, tpstage: tpstage, tpcorner: tpcorner };
})();
