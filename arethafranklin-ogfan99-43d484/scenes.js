/* arethafranklin scenes (Regions tab: Detroit). CSS classes prefixed af- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes afglow{0%,100%{opacity:.45}50%{opacity:1}}.af-glow{animation:afglow 2.4s ease-in-out infinite}.af-g2{animation-delay:-1.2s}' +
    '@keyframes afnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(24px,-74px);opacity:0}}.af-nt{animation:afnote 3.4s ease-out infinite}.af-nt2{animation-delay:-1.1s}.af-nt3{animation-delay:-2.3s}' +
    '@keyframes afsway{0%,100%{transform:translateX(0)}50%{transform:translateX(4px)}}.af-sw{animation:afsway 1.8s ease-in-out infinite}.af-sw2{animation-delay:-.9s}' +
    '@keyframes afbeam{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.af-bm{transform-box:fill-box;transform-origin:50% 0%;animation:afbeam 4.4s ease-in-out infinite}.af-bm2{animation-delay:-2.2s}' +
    '@keyframes afleaf{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-40px,150px) rotate(240deg);opacity:0}}.af-lf{animation:afleaf 5s linear infinite}.af-lf2{animation-delay:-1.7s}.af-lf3{animation-delay:-3.4s}' +
    '@keyframes afchase{0%,100%{opacity:1}50%{opacity:.2}}.af-ch{animation:afchase .9s steps(1) infinite}.af-ch2{animation-delay:-.45s}' +
    '@keyframes afboat{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.af-boat{animation:afboat 22s linear infinite}' +
    '@keyframes afspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.af-sp{animation:afspray 1.4s ease-out infinite}.af-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "af-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, c, cls) => '<g class="af-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const GOLD = "#f5c542", MAG = "#c2185b", SKY = "#7fc8f8", IVORY = "#f7efdc", DPM = "#1f5fa8";

  /* 1. The People Mover gliding into Broadway station downtown, a block off Aretha Franklin Way: old brick and terracotta buildings, the elevated guideway, the black station sign */
  function afstation() {
    let win = "";
    for (let x = 34; x < 250; x += 36) win += '<rect x="' + x + '" y="114" width="24" height="18" rx="3" fill="#2c4256"/><rect x="' + (x + 3) + '" y="116" width="6" height="14" fill="#fff" opacity=".35"/>';
    const bldg = (x, w, top, c, cols) => { let s = '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (152 - top) + '" fill="' + c + '"/>';
      for (let yy = top + 8; yy < 144; yy += 12) for (let i = 0; i < cols; i++) s += '<rect class="' + ((i + yy) % 3 ? "" : "af-glow") + '" x="' + (x + 5 + i * ((w - 10) / cols)) + '" y="' + yy + '" width="' + ((w - 10) / cols - 4) + '" height="6" fill="#ffd98a" opacity=".55"/>';
      return s; };
    return svg(
      '<rect width="400" height="260" fill="url(#af1)"/>' + stars(10) +
      bldg(0, 70, 60, "#7a4a3a", 4) + bldg(78, 54, 34, "#b98a5e", 3) + bldg(140, 80, 74, "#5c3a3a", 5) + bldg(228, 60, 40, "#8a6a52", 3) + bldg(296, 104, 66, "#6a4636", 6) +
      '<rect x="0" y="152" width="400" height="16" fill="#bdb8ad"/><rect x="0" y="168" width="400" height="6" fill="#8f8a80"/>' +
      '<rect x="70" y="174" width="22" height="86" fill="#a8a397"/><rect x="310" y="174" width="22" height="86" fill="#a8a397"/>' +
      '<g class="anim-train"><rect x="20" y="102" width="250" height="50" rx="12" fill="#e9eef2" stroke="#556" stroke-width="2"/>' +
      '<rect x="20" y="138" width="250" height="6" fill="' + DPM + '"/>' + win + '<circle cx="262" cy="130" r="4" fill="#fff6c2"/></g>' +
      '<rect x="150" y="18" width="236" height="32" rx="3" fill="#111"/><text x="162" y="40" ' + font + ' font-size="16" fill="#fff">Broadway</text>' + badge(320, 34, "DPM", DPM) +
      '<rect x="0" y="232" width="400" height="28" fill="#2f2f36"/><rect x="0" y="228" width="400" height="4" fill="' + GOLD + '" opacity=".6"/>' +
      '<text x="390" y="250" text-anchor="end" ' + font + ' font-size="10" fill="' + IVORY + '" opacity=".85">A BLOCK OFF ARETHA FRANKLIN WAY</text>',
      sky("af1", "#151a3a", "#d0875a"));
  }

  /* 2. New Bethel Baptist Church at Linwood (C.L. Franklin Blvd) and Philadelphia, her father's church in the old Oriole Theater: tan brick front, the row of glass doors, the cross, the choir's songs drifting out */
  function afchurch() {
    const doors = Array.from({ length: 8 }, (_, i) => '<rect x="' + (104 + i * 24) + '" y="170" width="20" height="40" fill="#2a3a4a" stroke="#d8cdb4" stroke-width="2"/><rect class="af-glow' + (i % 2 ? " af-g2" : "") + '" x="' + (107 + i * 24) + '" y="174" width="14" height="32" fill="#fff1c2" opacity=".55"/>').join("");
    const bricks = Array.from({ length: 12 }, (_, i) => '<path d="M60 ' + (78 + i * 8) + 'h280" stroke="#a88c62" stroke-width=".8" opacity=".6"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#af2)"/>' + stars(8) +
      '<rect x="60" y="70" width="280" height="140" fill="#cfb68a"/>' + bricks +
      '<rect x="60" y="62" width="280" height="10" fill="#b39a70"/>' +
      '<rect x="196" y="26" width="8" height="36" fill="' + IVORY + '"/><rect x="186" y="36" width="28" height="7" fill="' + IVORY + '"/>' +
      '<circle cx="200" cy="42" r="22" fill="#fff6c2" opacity=".1"/>' +
      '<rect x="92" y="96" width="216" height="40" rx="3" fill="#1b2a5a" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="114" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">NEW BETHEL</text><text x="200" y="129" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">BAPTIST CHURCH</text>' +
      '<rect x="96" y="148" width="208" height="16" fill="#b39a70"/>' + doors +
      '<rect x="0" y="210" width="400" height="50" fill="#4a4a50"/><rect x="0" y="210" width="400" height="5" fill="#9a968e"/>' +
      note(140, 160, GOLD) + note(260, 156, IVORY, "af-nt2") + note(200, 150, SKY, "af-nt3") +
      '<rect x="18" y="140" width="5" height="70" fill="#2f2f2f"/>' + sign(0, 140, 112, "C.L. Franklin Blvd") +
      '<text x="390" y="250" text-anchor="end" ' + font + ' font-size="10" fill="' + IVORY + '" opacity=".85">LINWOOD · PHILADELPHIA</text>',
      sky("af2", "#1a1440", "#8a4a6a"));
  }

  /* 3. The big 1916 house on LaSalle Blvd where she grew up: brick, deep front porch, the parlor window glowing where the piano sat, autumn leaves drifting off the boulevard trees */
  function afhouse() {
    const leaf = (x, y, c, cls) => '<path class="af-lf ' + cls + '" d="M' + x + ' ' + y + 'q5 -6 10 0q-5 6 -10 0z" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#af3)"/>' + stars(6) +
      '<path d="M0 120q30 -60 60 -30q20 -40 50 -10v100h-110z" fill="#3a2a1a"/><path d="M300 110q30 -50 60 -20q30 -30 40 0v100h-100z" fill="#3a2a1a"/>' +
      '<circle cx="40" cy="96" r="34" fill="#c0682a" opacity=".85"/><circle cx="80" cy="84" r="26" fill="#d9902a" opacity=".85"/><circle cx="350" cy="92" r="34" fill="#b85a26" opacity=".85"/>' +
      '<rect x="110" y="96" width="180" height="114" fill="#8a3f2c"/>' +
      Array.from({ length: 13 }, (_, i) => '<path d="M110 ' + (102 + i * 8) + 'h180" stroke="#6e2f20" stroke-width=".8"/>').join("") +
      '<path d="M100 98l100 -54l100 54z" fill="#3a3030"/><rect x="176" y="62" width="48" height="30" fill="#8a3f2c"/><path d="M170 64l30 -16l30 16z" fill="#3a3030"/>' +
      '<rect x="186" y="70" width="28" height="18" fill="#2a3540"/>' +
      '<rect x="130" y="110" width="40" height="34" fill="#2a3540" stroke="' + IVORY + '" stroke-width="3"/><rect x="230" y="110" width="40" height="34" fill="#2a3540" stroke="' + IVORY + '" stroke-width="3"/>' +
      '<rect class="af-glow" x="133" y="113" width="34" height="28" fill="#ffd98a" opacity=".6"/>' +
      '<rect x="138" y="128" width="24" height="9" fill="#1a1010"/><rect x="139" y="129" width="22" height="3" fill="#f6f3ea"/>' +
      '<rect x="100" y="156" width="200" height="8" fill="' + IVORY + '"/>' + [108, 150, 248, 288].map(x => '<rect x="' + x + '" y="164" width="8" height="40" fill="' + IVORY + '"/>').join("") +
      '<rect x="186" y="166" width="28" height="44" fill="#4a2a1a"/><circle cx="208" cy="190" r="2" fill="' + GOLD + '"/>' +
      '<rect x="100" y="204" width="200" height="8" fill="#9a8a78"/><rect x="170" y="212" width="60" height="10" fill="#9a8a78"/>' +
      '<rect x="0" y="222" width="400" height="38" fill="#3f4a32"/><rect x="0" y="236" width="400" height="24" fill="#55555c"/>' +
      leaf(60, 60, "#d9902a", "") + leaf(330, 50, "#c0682a", "af-lf2") + leaf(90, 40, "#e8b04a", "af-lf3") + leaf(370, 70, "#d9902a", "") +
      note(150, 108, GOLD, "af-nt2") +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="10" fill="' + IVORY + '" opacity=".85">LA SALLE BLVD · BUILT 1916</text>',
      sky("af3", "#2a2050", "#e0a070"));
  }

  /* 4. Aretha Franklin Amphitheatre on the riverfront: white tent peaks over the stage, the Detroit River and the Windsor lights across, a crowd swaying under sweeping beams */
  function afamph() {
    const crowd = Array.from({ length: 22 }, (_, i) => '<g class="af-sw' + (i % 2 ? " af-sw2" : "") + '"><circle cx="' + (8 + i * 18.5) + '" cy="228" r="7" fill="#07070c"/><rect x="' + (i * 18.5 + 1) + '" y="234" width="15" height="30" rx="5" fill="#07070c"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#af4)"/>' + stars(18) +
      '<rect x="0" y="120" width="400" height="44" fill="#16324e"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 46 + 6) + ' ' + (130 + (i % 3) * 9) + 'h20" stroke="#9fc2e0" stroke-width="1.2" opacity=".5"/>').join("") +
      '<g fill="#232a3a"><rect x="0" y="106" width="50" height="14"/><rect x="60" y="100" width="26" height="20"/><rect x="300" y="102" width="40" height="18"/><rect x="350" y="96" width="24" height="24"/></g>' +
      Array.from({ length: 14 }, (_, i) => '<circle class="af-glow' + (i % 2 ? " af-g2" : "") + '" cx="' + (6 + i * 28) + '" cy="' + (110 + (i % 3) * 2) + '" r="1.3" fill="#ffd98a"/>').join("") +
      '<g class="af-boat"><path d="M0 146h60l-8 8h-46z" fill="#e8e4da"/><rect x="14" y="138" width="30" height="8" fill="#e8e4da"/><circle class="af-glow" cx="40" cy="142" r="1.6" fill="#fff6c2"/></g>' +
      '<path class="af-bm" d="M150 76l-60 150h120z" fill="' + GOLD + '" opacity=".16"/><path class="af-bm af-bm2" d="M250 76l-60 150h120z" fill="' + MAG + '" opacity=".18"/>' +
      '<path d="M70 120L120 52L170 112L200 40L230 112L280 52L330 120z" fill="#f4f2ec" stroke="#c9c4b8" stroke-width="2"/>' +
      '<path d="M120 52v68M200 40v80M280 52v68" stroke="#9a968e" stroke-width="2"/>' +
      '<rect x="96" y="120" width="208" height="56" fill="#1a1220"/><rect x="96" y="176" width="208" height="12" fill="#3a2a30"/>' +
      '<rect class="af-glow" x="184" y="132" width="32" height="44" fill="' + GOLD + '" opacity=".3"/><rect x="198" y="146" width="3" height="30" fill="#ccc"/><circle cx="199.5" cy="144" r="3" fill="#ccc"/>' +
      [112, 140, 248, 276].map((x, i) => '<rect class="af-glow' + (i % 2 ? " af-g2" : "") + '" x="' + x + '" y="124" width="10" height="6" fill="' + (i % 2 ? MAG : GOLD) + '"/>').join("") +
      '<path d="M0 198q200 -22 400 0v62h-400z" fill="#2a2a34"/>' + crowd +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="' + IVORY + '" opacity=".85">ARETHA FRANKLIN AMPHITHEATRE · DETROIT RIVER</text>',
      sky("af4", "#0c0f26", "#3a2050"));
  }

  /* 5. Aretha Franklin Way (Madison St) and Brush St downtown, the old Music Hall's lit marquee behind, ARETHA tagged big on the wall */
  function afcorner() {
    const bulbs = Array.from({ length: 16 }, (_, i) => '<circle class="af-ch' + (i % 2 ? " af-ch2" : "") + '" cx="' + (128 + i * 9.5) + '" cy="87" r="2" fill="#fff3b0"/>').join("");
    let wins = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) wins += '<rect class="' + ((r + c) % 3 ? "" : "af-glow") + '" x="' + (124 + c * 26) + '" y="' + (16 + r * 16) + '" width="14" height="10" fill="#ffd98a" opacity=".5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#af5)"/>' + stars(10) +
      '<rect x="110" y="8" width="180" height="120" fill="#b07a55"/>' + wins +
      '<rect x="120" y="82" width="160" height="28" fill="#1a1012" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="104" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">MUSIC HALL</text>' +
      '<rect x="0" y="40" width="100" height="92" fill="#3a2a3a"/><rect x="300" y="30" width="100" height="102" fill="#2a2a40"/>' +
      '<rect x="0" y="128" width="400" height="96" fill="#7a3a2c"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (136 + i * 8) + 'h400" stroke="#64301f" stroke-width="1"/>').join("") +
      tag("ARETHA", 18, 194, 62, GOLD, -6) + tag("R-E-S-P-E-C-T", 222, 214, 19, MAG, -4) + tag("QUEEN OF SOUL", 22, 216, 17, IVORY, -3) + tag("TCB", 300, 180, 26, SKY, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(272, 98, 126, "Aretha Franklin Way") + sign(316, 124, 82, "Brush St") +
      '<g class="af-sp"><circle cx="186" cy="156" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="af-sp af-sp2"><circle cx="192" cy="150" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("af5", "#141a38", "#b8704e"));
  }

  window.SCENES = { afstation: afstation, afchurch: afchurch, afhouse: afhouse, afamph: afamph, afcorner: afcorner };
})();
