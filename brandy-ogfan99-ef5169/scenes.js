/* brandy scenes (Regions tab: Los Angeles + SoCal). CSS classes prefixed bn- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bnglow{0%,100%{opacity:.45}50%{opacity:1}}.bn-glow{animation:bnglow 2.4s ease-in-out infinite}.bn-g2{animation-delay:-1.2s}' +
    '@keyframes bnnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(24px,-74px);opacity:0}}.bn-nt{animation:bnnote 3.4s ease-out infinite}.bn-nt2{animation-delay:-1.1s}.bn-nt3{animation-delay:-2.3s}' +
    '@keyframes bnpalm{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.bn-palm{transform-box:fill-box;transform-origin:50% 100%;animation:bnpalm 3.2s ease-in-out infinite}.bn-p2{animation-delay:-1.6s}' +
    '@keyframes bncar{0%{transform:translateX(-90px)}100%{transform:translateX(480px)}}.bn-car{animation:bncar 7s linear infinite}.bn-car2{animation-delay:-3.5s}' +
    '@keyframes bnpass{0%{transform:translateX(420px)}100%{transform:translateX(-520px)}}.bn-pass{animation:bnpass 12s linear infinite}' +
    '@keyframes bnspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bn-sp{animation:bnspray 1.4s ease-out infinite}.bn-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="bn-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const palm = (x, base, h, cls) => '<g class="bn-palm ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#3a2a1e" stroke-width="5" fill="none"/>' +
    [[-26, -6], [-20, 8], [24, -8], [22, 8], [0, -16]].map(([dx, dy]) => '<path d="M' + (x + 2) + ' ' + (base - h) + 'q' + (dx / 2) + ' ' + (dy - 10) + ' ' + dx + ' ' + (dy + 4) + '" stroke="#1f4a2a" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const PINK = "#ff9ec8", BLUE = "#8fd8ff", GOLD = "#f6d77a", IVORY = "#fbf3e4", SILVER = "#adb8bf";

  /* 1. Metro J Line bus pulling into Harbor Gateway Transit Center, up the 110 from Carson: the long canopy, the freeway ramps behind, the black station sign */
  function bnstation() {
    let win = "";
    for (let x = 40; x < 250; x += 30) win += '<rect x="' + x + '" y="134" width="22" height="20" rx="2" fill="#2c3e50"/><rect x="' + (x + 3) + '" y="136" width="5" height="16" fill="#fff" opacity=".35"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bn1)"/>' +
      '<path d="M0 110q200 -30 400 -4v14h-400z" fill="#8a8f96"/><rect x="0" y="118" width="400" height="6" fill="#6a6f76"/>' + [40, 140, 240, 340].map(x => '<rect x="' + x + '" y="124" width="10" height="40" fill="#7a7f86"/>').join("") +
      '<g class="bn-car"><rect x="0" y="102" width="30" height="10" rx="3" fill="' + PINK + '"/><circle cx="7" cy="113" r="2.5" fill="#222"/><circle cx="23" cy="113" r="2.5" fill="#222"/></g>' +
      '<g class="bn-car bn-car2"><rect x="0" y="100" width="34" height="11" rx="3" fill="#e8e4da"/><circle cx="8" cy="112" r="2.5" fill="#222"/><circle cx="26" cy="112" r="2.5" fill="#222"/></g>' +
      '<rect x="10" y="88" width="380" height="10" fill="#d8d4ca"/><path d="M10 98h380l-10 8h-360z" fill="#b8b4aa"/>' + [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="98" width="6" height="96" fill="#9a968e"/>').join("") +
      '<g class="anim-train"><rect x="24" y="124" width="250" height="62" rx="8" fill="#eceff1" stroke="#555" stroke-width="2"/><rect x="24" y="166" width="250" height="8" fill="' + SILVER + '"/>' + win +
      '<rect x="252" y="134" width="18" height="30" fill="#2c3e50"/><circle cx="60" cy="188" r="9" fill="#222"/><circle cx="230" cy="188" r="9" fill="#222"/><circle cx="268" cy="174" r="3" fill="#fff6c2"/>' +
      '<rect x="40" y="128" width="40" height="5" fill="#ffb347"/></g>' +
      '<rect x="40" y="22" width="320" height="50" rx="3" fill="#111"/><text x="56" y="44" ' + font + ' font-size="15" fill="#fff">Harbor Gateway</text><text x="56" y="62" ' + font + ' font-size="11" fill="#ddd">Transit Center</text>' +
      '<circle cx="330" cy="47" r="14" fill="' + SILVER + '"/><text x="330" y="52" text-anchor="middle" ' + font + ' font-size="15" fill="#111">J</text>' +
      '<rect x="0" y="198" width="400" height="62" fill="#4a4a50"/><rect x="0" y="196" width="400" height="4" fill="#c9c4b8"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 54) + '" y="228" width="30" height="4" fill="#e8d36a" opacity=".7"/>').join("") +
      '<text x="390" y="252" text-anchor="end" ' + font + ' font-size="10" fill="' + IVORY + '" opacity=".85">UP THE 110 FROM CARSON</text>',
      sky("bn1", "#2a3a6a", "#f0a878"));
  }

  /* 2. McComb, Mississippi, where she was born: the old red-brick railroad depot with its deep eaves, a black steam engine on display, a passenger train rolling through */
  function bndepot() {
    return svg(
      '<rect width="400" height="260" fill="url(#bn2)"/>' +
      '<g fill="#2f5a2a"><circle cx="20" cy="120" r="30"/><circle cx="60" cy="110" r="26"/><circle cx="350" cy="116" r="32"/><circle cx="390" cy="124" r="24"/></g>' +
      '<rect x="110" y="98" width="200" height="66" fill="#9a3e2a"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M110 ' + (104 + i * 8) + 'h200" stroke="#7e3020" stroke-width=".8"/>').join("") +
      '<path d="M92 100l118 -36l118 36z" fill="#4a3a32"/><rect x="92" y="98" width="236" height="6" fill="#3a2a22"/>' +
      [130, 170, 230, 270].map(x => '<rect x="' + x + '" y="114" width="22" height="30" fill="#2a3540" stroke="' + IVORY + '" stroke-width="2"/>').join("") +
      '<rect x="198" y="118" width="24" height="46" fill="#4a2a1a" stroke="' + IVORY + '" stroke-width="2"/>' +
      '<rect x="160" y="74" width="100" height="16" rx="2" fill="' + IVORY + '"/><text x="210" y="86" text-anchor="middle" ' + font + ' font-size="11" fill="#3a2a22">McCOMB</text>' +
      '<rect x="0" y="164" width="400" height="10" fill="#8a847a"/>' +
      '<g transform="translate(14 0)"><rect x="0" y="140" width="80" height="22" rx="4" fill="#1a1a1a"/><rect x="56" y="122" width="26" height="28" fill="#1a1a1a"/><rect x="14" y="126" width="10" height="14" fill="#1a1a1a"/><rect x="60" y="126" width="18" height="10" fill="#e8d36a" opacity=".6"/>' +
      [12, 30, 48, 66].map(x => '<circle cx="' + x + '" cy="164" r="8" fill="#2a2a2a" stroke="#b33a2a" stroke-width="2"/>').join("") + '<path d="M0 150l-10 12h10z" fill="#333"/></g>' +
      '<rect x="0" y="184" width="400" height="4" fill="#6a5a4a"/><rect x="0" y="196" width="400" height="4" fill="#6a5a4a"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 21) + '" y="182" width="8" height="20" fill="#4a3a2a"/>').join("") +
      '<g class="bn-pass"><rect x="0" y="168" width="140" height="26" rx="4" fill="#c9cdd2"/><rect x="0" y="176" width="140" height="4" fill="#2a4a8a"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (8 + i * 22) + '" y="171" width="14" height="5" fill="#2c3e50"/>').join("") +
      '<rect x="146" y="168" width="140" height="26" rx="4" fill="#c9cdd2"/><rect x="146" y="176" width="140" height="4" fill="#2a4a8a"/></g>' +
      '<rect x="0" y="202" width="400" height="58" fill="#5a6a3a"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="' + IVORY + '" opacity=".9">McCOMB, MISSISSIPPI · WHERE SHE WAS BORN</text>',
      sky("bn2", "#6aa8d8", "#f6e0b0"));
  }

  /* 3. Her daddy's church choir (he was minister of music): a low SoCal stucco church, palms swaying, voices singing out a cappella */
  function bnchurch() {
    const singer = (x, cls) => '<g class="' + cls + '"><circle cx="' + x + '" cy="176" r="8" fill="#3a2418"/><path d="M' + (x - 12) + ' 214q0 -30 12 -30t12 30z" fill="#5a2a6a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bn3)"/>' +
      '<circle cx="330" cy="54" r="22" fill="#fff1b0" opacity=".9"/>' +
      palm(40, 214, 120, "") + palm(370, 214, 110, "bn-p2") +
      '<rect x="80" y="104" width="240" height="110" fill="#f1e2c8"/><path d="M70 106l130 -40l130 40z" fill="#b8573a"/>' +
      '<rect x="186" y="34" width="28" height="70" fill="#f1e2c8"/><path d="M182 36l18 -14l18 14z" fill="#b8573a"/><path d="M200 42v20M192 50h16" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<path d="M176 214v-50q24 -24 48 0v50z" fill="#5a2a1a"/><rect class="bn-glow" x="182" y="170" width="36" height="44" fill="#ffd98a" opacity=".45"/>' +
      [100, 136, 248, 284].map(x => '<path d="M' + x + ' 160v-30q8 -10 16 0v30z" fill="#2a3a5a" stroke="#8a6a4a" stroke-width="2"/>').join("") +
      singer(120, "") + singer(150, "") + singer(250, "") + singer(280, "") +
      note(140, 150, PINK) + note(260, 146, BLUE, "bn-nt2") + note(200, 140, "#7a4a2a", "bn-nt3") +
      '<rect x="0" y="214" width="400" height="46" fill="#c9c0aa"/><rect x="0" y="212" width="400" height="3" fill="#9a907a"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#4a3a2a">HER DADDY\'S CHURCH CHOIR · A CAPPELLA</text>',
      sky("bn3", "#7ab8e8", "#f8d8b0"));
  }

  /* 4. Hollywood High at Sunset and Highland, where she went to school: the long cream Streamline Moderne front, the Hollywood Hills behind, cars rolling down Sunset */
  function bnhigh() {
    return svg(
      '<rect width="400" height="260" fill="url(#bn4)"/>' +
      '<path d="M0 110q60 -50 120 -30q60 -40 140 -6q60 -30 140 4v40h-400z" fill="#8a7a5a"/><path d="M0 120q80 -30 160 -14q90 -26 240 6v30h-400z" fill="#6a6a44"/>' +
      palm(30, 200, 110, "") + palm(380, 200, 118, "bn-p2") +
      '<rect x="60" y="100" width="280" height="100" fill="#efe6cf"/><rect x="60" y="96" width="280" height="8" fill="#d8ccb0"/>' +
      '<path d="M60 100h40v100h-40q-16 0 -16 -16v-68q0 -16 16 -16z" fill="#efe6cf"/>' +
      Array.from({ length: 3 }, (_, r) => '<path d="M70 ' + (126 + r * 22) + 'h260" stroke="#c9bfa2" stroke-width="2"/>').join("") +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (110 + i * 24) + '" y="132" width="16" height="14" fill="#3a5a7a"/><rect x="' + (110 + i * 24) + '" y="154" width="16" height="14" fill="#3a5a7a"/>').join("") +
      '<rect x="180" y="104" width="40" height="96" fill="#e3d8bc"/><rect x="190" y="172" width="20" height="28" fill="#3a2a22"/>' +
      '<text x="200" y="120" text-anchor="middle" ' + font + ' font-size="9.5" fill="#2a4a6a">HOLLYWOOD HIGH SCHOOL</text>' +
      '<rect x="0" y="200" width="400" height="60" fill="#4a4a50"/><rect x="0" y="198" width="400" height="4" fill="#c9c4b8"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 54) + '" y="230" width="30" height="4" fill="#e8d36a" opacity=".7"/>').join("") +
      '<g class="bn-car"><rect x="0" y="210" width="44" height="14" rx="4" fill="' + PINK + '"/><rect x="8" y="204" width="26" height="8" rx="3" fill="' + PINK + '"/><circle cx="10" cy="225" r="4" fill="#222"/><circle cx="34" cy="225" r="4" fill="#222"/></g>' +
      '<g class="bn-car bn-car2"><rect x="0" y="238" width="44" height="14" rx="4" fill="' + BLUE + '"/><rect x="8" y="232" width="26" height="8" rx="3" fill="' + BLUE + '"/><circle cx="10" cy="253" r="4" fill="#222"/><circle cx="34" cy="253" r="4" fill="#222"/></g>' +
      '<text x="200" y="24" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">SUNSET BLVD · HIGHLAND AVE</text>',
      sky("bn4", "#5a9ad8", "#f6d0a0"));
  }

  /* 5. Ambler Ave and Sherman Dr in Carson, by her old elementary school: the Palos Verdes hills behind at sunset, BRANDY tagged on the wall, palms swaying */
  function bncorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bn5)"/>' +
      '<circle cx="90" cy="96" r="26" fill="#ffd27a" opacity=".85"/>' +
      '<path d="M0 118q70 -40 150 -26q80 -28 160 -6q50 -10 90 6v40h-400z" fill="#5a4a6a"/><path d="M0 130q100 -22 200 -10q100 -14 200 4v30h-400z" fill="#3e3550"/>' +
      Array.from({ length: 10 }, (_, i) => '<circle class="bn-glow' + (i % 2 ? " bn-g2" : "") + '" cx="' + (20 + i * 40) + '" cy="' + (124 + (i % 3) * 3) + '" r="1.3" fill="#ffd98a"/>').join("") +
      palm(30, 136, 70, "") + palm(320, 136, 80, "bn-p2") +
      '<rect x="0" y="132" width="400" height="92" fill="#d9c7a8"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (146 + i * 14) + 'h400" stroke="#c4b08e" stroke-width="1"/>').join("") +
      tag("BRANDY", 18, 196, 62, PINK, -6) + tag("VOCAL BIBLE", 26, 216, 18, BLUE, -3) + tag("B ROCKA", 196, 214, 18, GOLD, -3) + tag("CARSON", 280, 186, 18, IVORY, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(300, 98, 98, "S Ambler Ave") + sign(304, 124, 94, "E Sherman Dr") +
      '<g class="bn-sp"><circle cx="190" cy="156" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="bn-sp bn-sp2"><circle cx="196" cy="150" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("bn5", "#3a2a6a", "#f08a6a"));
  }

  window.SCENES = { bnstation: bnstation, bndepot: bndepot, bnchurch: bnchurch, bnhigh: bnhigh, bncorner: bncorner };
})();
