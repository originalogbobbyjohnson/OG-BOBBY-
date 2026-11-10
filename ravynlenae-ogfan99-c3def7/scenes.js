/* ravynlenae scenes (Regions tab: Chicago; Pullman, far South Side, where she was raised). CSS classes prefixed rl- (the page's own anim-train is kept).
   1 111th St-Pullman on the Metra Electric: the island platform with its shelter at 111th & Cottage Grove, a silver Metra Electric train with its pantograph sliding in.
   2 Pullman Christian Reformed Church, her grandfather's congregation for 30 years, where she grew up singing: red brick, stained-glass window, notes floating out.
   3 Chicago High School for the Arts (ChiArts), where she studied classical voice: the recital room, grand piano, sheet music, stage light.
   4 Zero Fatigue (her crew with Monte Booker and Smino): the late-night home studio, drum pads lit, speaker cones pumping.
   5 S Cottage Grove Ave and E 111th St in Pullman: green signs, RAVYN tagged, the red-brick Hotel Florence (1881, Queen Anne gables, cream trim, long porch) behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rlflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.rl-flk{animation:rlflick 2.2s infinite}.rl-flk2{animation-delay:.7s}' +
    '@keyframes rlnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(30px,-70px);opacity:0}}.rl-note{animation:rlnote 3s ease-out infinite}.rl-note2{animation-delay:-1s}.rl-note3{animation-delay:-2s}' +
    '@keyframes rlglow{0%,100%{opacity:.35}50%{opacity:1}}.rl-glow{animation:rlglow 1.2s ease-in-out infinite}.rl-g2{animation-delay:-.4s}.rl-g3{animation-delay:-.8s}' +
    '@keyframes rlcone{0%,100%{transform:scale(1)}50%{transform:scale(.82)}}.rl-cone{transform-box:fill-box;transform-origin:50% 50%;animation:rlcone .5s ease-in-out infinite}' +
    '@keyframes rlbeam{0%,100%{opacity:.12}50%{opacity:.24}}.rl-beam{animation:rlbeam 3s ease-in-out infinite}' +
    '@keyframes rlstar{0%,100%{opacity:.3}50%{opacity:1}}.rl-st{animation:rlstar 2.4s ease-in-out infinite}.rl-st2{animation-delay:-1.2s}' +
    '@keyframes rlspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rl-sp{animation:rlspray 1.4s ease-out infinite}.rl-sp2{animation-delay:.45s}' +
    '@keyframes rlcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.rl-car{animation:rlcar 7s linear infinite}' +
    '@keyframes rlbird{0%{transform:translateX(-40px)}100%{transform:translateX(440px)}}.rl-bird{animation:rlbird 11s linear infinite}.rl-bird2{animation-delay:-5.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="4" fill="' + c + '"/><rect x="' + (x + 4) + '" y="' + (y - 18) + '" width="2" height="18" fill="' + c + '"/><path d="M' + (x + 6) + ' ' + (y - 18) + 'q8 4 6 10" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
  const ME = "#ff5f00", PINK = "#ff8fb1", GOLD = "#ffd166", LAV = "#9b8cff";

  /* 1. 111th St-Pullman, Metra Electric */
  function rlstation() {
    const train = '<g class="anim-train">' +
      '<path d="M200 62l20 -14h24l20 14" stroke="#333" stroke-width="2" fill="none"/>' +
      '<rect x="24" y="64" width="330" height="96" rx="7" fill="#d4d8dc" stroke="#7a828a" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (38 + i * 42) + '" y="76" width="30" height="22" rx="2" fill="#1f2a33"/>').join("") +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (38 + i * 42) + '" y="112" width="30" height="20" rx="2" fill="#1f2a33"/>').join("") +
      '<rect x="24" y="104" width="330" height="4" fill="' + ME + '"/><rect x="24" y="140" width="330" height="4" fill="#9aa1a8"/>' +
      '<rect x="334" y="70" width="18" height="86" rx="4" fill="#b3b9bf"/><circle cx="344" cy="150" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rls1)"/>' +
      '<path d="M0 40h400" stroke="#4a4f57" stroke-width="2"/><path d="M0 44h400" stroke="#4a4f57" stroke-width="1"/>' +
      [30, 140, 260, 370].map(x => '<rect x="' + (x - 2) + '" y="36" width="4" height="124" fill="#4a4f57"/>').join("") +
      '<g fill="#3a3346"><rect x="0" y="120" width="40" height="40"/><rect x="360" y="110" width="40" height="50"/></g>' +
      train +
      '<rect x="0" y="160" width="400" height="8" fill="#f2c200"/><rect x="0" y="168" width="400" height="40" fill="#8e8a82"/>' +
      '<rect x="250" y="120" width="120" height="6" fill="#55606a"/><rect x="256" y="126" width="4" height="42" fill="#55606a"/><rect x="360" y="126" width="4" height="42" fill="#55606a"/>' +
      '<rect x="0" y="208" width="400" height="12" fill="#5a4636"/>' + Array.from({ length: 26 }, (_, i) => '<rect x="' + (i * 16) + '" y="210" width="9" height="8" fill="#3e3026"/>').join("") +
      '<path d="M0 211h400M0 217h400" stroke="#a9a9a9" stroke-width="1.5"/><rect x="0" y="220" width="400" height="40" fill="#3a3a3f"/>' +
      '<rect x="22" y="174" width="196" height="30" rx="3" fill="#111"/><text x="34" y="194" ' + font + ' font-size="15" fill="#fff">111th St-Pullman</text>' + badge(224, 189, "ME", ME) +
      '<rect x="300" y="172" width="4" height="36" fill="#2a2a2a"/><circle class="rl-flk" cx="302" cy="170" r="6" fill="#ffe9a8"/>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">METRA ELECTRIC · 111TH &amp; COTTAGE GROVE · PULLMAN</text>',
      sky("rls1", "#2a2350", "#e98a7a"));
  }

  /* 2. Pullman Christian Reformed Church (her grandfather's church) */
  function rlchurch() {
    return svg(
      '<rect width="400" height="260" fill="url(#rls2)"/>' +
      '<rect x="110" y="90" width="180" height="130" fill="#9b3d2c"/>' + Array.from({ length: 15 }, (_, i) => '<path d="M110 ' + (98 + i * 8) + 'h180" stroke="#7f2f22" stroke-width="1"/>').join("") +
      '<path d="M100 92l100 -56l100 56z" fill="#4a3a36"/>' +
      '<rect x="186" y="10" width="28" height="40" fill="#9b3d2c"/><path d="M182 12l18 -12l18 12z" fill="#4a3a36"/><path d="M200 16v16M193 22h14" stroke="#f3e6d0" stroke-width="3"/>' +
      '<circle cx="200" cy="72" r="14" fill="#2b2442" stroke="#e8d9b0" stroke-width="2"/><path d="M200 58v28M186 72h28" stroke="#e8d9b0" stroke-width="1.5"/>' +
      '<path d="M140 180v-50q16 -20 32 0v50z" fill="#2b2442" stroke="#e8d9b0" stroke-width="2"/><path d="M228 180v-50q16 -20 32 0v50z" fill="#2b2442" stroke="#e8d9b0" stroke-width="2"/>' +
      '<g class="rl-glow"><path d="M144 178v-46q12 -16 24 0v46z" fill="' + LAV + '" opacity=".55"/></g><g class="rl-glow rl-g2"><path d="M232 178v-46q12 -16 24 0v46z" fill="' + PINK + '" opacity=".55"/></g>' +
      '<path d="M186 220v-36q14 -16 28 0v36z" fill="#4a2e1e"/><rect x="176" y="216" width="48" height="6" fill="#c9bfa8"/>' +
      note(180, 160, GOLD, "rl-note") + note(206, 150, PINK, "rl-note rl-note2") + note(226, 166, "#fff", "rl-note rl-note3") +
      '<rect x="0" y="220" width="400" height="40" fill="#6b8f4e"/><rect x="0" y="232" width="400" height="28" fill="#8e8a82"/>' +
      '<g fill="#3f6f3a"><ellipse cx="44" cy="190" rx="44" ry="40"/><ellipse cx="360" cy="186" rx="46" ry="42"/></g><rect x="40" y="200" width="8" height="32" fill="#4a3424"/><rect x="356" y="200" width="8" height="32" fill="#4a3424"/>' +
      '<rect x="120" y="238" width="160" height="18" rx="3" fill="#111"/><text x="200" y="251" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">SUNDAY CHOIR · PULLMAN</text>',
      sky("rls2", "#7fb2e0", "#f6d6b8"));
  }

  /* 3. ChiArts recital room */
  function rlchiarts() {
    return svg(
      '<rect width="400" height="260" fill="#1a1424"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#2a2036"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40 + 6) + '" y="0" width="28" height="150" fill="#33283f"/>').join("") +
      '<rect x="80" y="16" width="240" height="26" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="35" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" fill="' + GOLD + '">CHIARTS · CLASSICAL VOICE</text>' +
      '<path class="rl-beam" d="M200 42l-90 170h180z" fill="#fff4d6"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#5a3a26"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (188 + i * 8) + 'h400" stroke="#4a2e1e" stroke-width="1"/>').join("") +
      '<path d="M120 150h120q40 0 40 -20q0 -16 -30 -18h-130z" fill="#0d0d10" stroke="#3a3a44" stroke-width="2"/><rect x="120" y="150" width="120" height="12" fill="#0d0d10"/>' +
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (122 + i * 6) + '" y="152" width="5" height="9" fill="#f4f1ea"/>').join("") +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (126 + i * 8.5) + '" y="152" width="3" height="5" fill="#111"/>').join("") +
      '<rect x="130" y="162" width="4" height="30" fill="#111"/><rect x="230" y="162" width="4" height="30" fill="#111"/><rect x="270" y="134" width="4" height="58" fill="#111"/>' +
      '<rect x="150" y="100" width="40" height="14" fill="#f6efdf" transform="rotate(-8 170 107)"/><path d="M154 104h32M154 108h32M154 112h32" stroke="#555" stroke-width=".8" transform="rotate(-8 170 107)"/>' +
      '<rect x="320" y="96" width="4" height="84" fill="#888"/><rect x="306" y="92" width="32" height="20" fill="#f6efdf" stroke="#888"/><path d="M310 98h24M310 102h24M310 106h24" stroke="#555" stroke-width=".8"/>' +
      note(80, 110, GOLD, "rl-note") + note(60, 130, PINK, "rl-note rl-note2") + note(96, 136, LAV, "rl-note rl-note3"));
  }

  /* 4. Zero Fatigue studio */
  function rlstudio() {
    const pads = Array.from({ length: 16 }, (_, i) => '<rect class="rl-glow' + (i % 3 ? " rl-g" + (1 + i % 3) : "") + '" x="' + (150 + (i % 4) * 24) + '" y="' + (150 + Math.floor(i / 4) * 16) + '" width="20" height="12" rx="2" fill="' + [PINK, LAV, GOLD, "#5ec2b7"][i % 4] + '"/>').join("");
    const spk = x => '<rect x="' + x + '" y="96" width="56" height="84" rx="4" fill="#15151a" stroke="#333"/><circle cx="' + (x + 28) + '" cy="116" r="10" fill="#222"/><circle class="rl-cone" cx="' + (x + 28) + '" cy="150" r="18" fill="#2a2a30" stroke="#444"/>';
    return svg(
      '<rect width="400" height="260" fill="#120e1a"/>' +
      '<rect x="0" y="0" width="400" height="190" fill="#1d1630"/>' +
      Array.from({ length: 30 }, (_, i) => '<circle class="rl-st' + (i % 2 ? " rl-st2" : "") + '" cx="' + ((i * 71) % 400) + '" cy="' + (8 + (i * 37) % 70) + '" r="1.2" fill="#fff"/>').join("") +
      '<path d="M120 0v70h160v-70" fill="#0e0b16"/><circle cx="250" cy="30" r="14" fill="#f6efdf"/><circle cx="256" cy="26" r="12" fill="#0e0b16"/>' +
      tag("ZERO FATIGUE", 20, 60, 22, LAV, -4) +
      '<rect x="0" y="190" width="400" height="70" fill="#2a1f1a"/><rect x="60" y="186" width="280" height="10" fill="#3b2a20"/>' +
      spk(30) + spk(314) +
      '<rect x="140" y="140" width="116" height="80" rx="6" fill="#222" stroke="#555"/>' + pads +
      '<rect x="270" y="150" width="34" height="24" rx="2" fill="#0b0b10" stroke="#555"/><path d="M274 166l6 -8l6 6l6 -10l6 8" stroke="#5ec2b7" stroke-width="1.5" fill="none"/>' +
      '<rect x="196" y="96" width="8" height="40" fill="#777"/><rect x="190" y="80" width="20" height="22" rx="10" fill="#c9cdd2" stroke="#555"/>');
  }

  /* 5. S Cottage Grove Ave and E 111th St, Hotel Florence behind */
  function rlcorner() {
    const gable = (x, w, h) => '<path d="M' + x + ' 70l' + (w / 2) + ' -' + h + 'l' + (w / 2) + ' ' + h + 'z" fill="#8a2f22" stroke="#efe2c4" stroke-width="2"/>';
    const hotel = '<g>' +
      '<rect x="90" y="70" width="220" height="70" fill="#a33a2a"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M90 ' + (78 + i * 8) + 'h220" stroke="#862e21" stroke-width="1"/>').join("") +
      '<path d="M84 72l116 -22l116 22z" fill="#4a3a36"/>' + gable(100, 50, 36) + gable(175, 50, 40) + gable(250, 50, 36) +
      [125, 200, 275].map(x => '<rect x="' + (x - 6) + '" y="48" width="12" height="16" fill="#2b3442" stroke="#efe2c4"/>').join("") +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (100 + i * 24) + '" y="80" width="12" height="18" fill="#2b3442" stroke="#efe2c4" stroke-width="1.5"/>').join("") +
      '<rect x="84" y="112" width="232" height="6" fill="#efe2c4"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (88 + i * 20) + '" y="118" width="3" height="22" fill="#efe2c4"/>').join("") +
      '<rect x="182" y="26" width="2" height="16" fill="#333"/><g class="rl-glow"><rect x="184" y="26" width="14" height="9" fill="' + PINK + '"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rls5)"/>' +
      '<g class="rl-bird"><path d="M20 40q6 -6 12 0q6 -6 12 0" stroke="#2a2a3a" stroke-width="2" fill="none"/></g><g class="rl-bird rl-bird2"><path d="M20 24q5 -5 10 0q5 -5 10 0" stroke="#2a2a3a" stroke-width="2" fill="none"/></g>' +
      hotel +
      '<g fill="#3f6f3a"><ellipse cx="40" cy="120" rx="44" ry="34"/><ellipse cx="362" cy="118" rx="44" ry="36"/></g>' +
      '<rect x="0" y="136" width="400" height="88" fill="#7a6a5e"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#625448" stroke-width="1"/>').join("") +
      Array.from({ length: 11 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (136 + i * 8) + 'v8" stroke="#625448" stroke-width="1"/>').join("")).join("") +
      tag("RAVYN", 24, 198, 58, PINK, -6) + tag("ZERO FATIGUE", 40, 218, 16, LAV, -3) + tag("PULLMAN", 196, 214, 15, GOLD, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(232, 98, 158, "S Cottage Grove Av") + sign(262, 124, 112, "E 111th St") +
      '<g class="rl-car"><rect x="0" y="238" width="58" height="14" rx="5" fill="' + LAV + '"/><rect x="12" y="230" width="32" height="10" rx="3" fill="' + LAV + '"/><rect x="15" y="232" width="12" height="6" fill="#bfe3ff"/><rect x="30" y="232" width="12" height="6" fill="#bfe3ff"/><circle cx="13" cy="252" r="5" fill="#111"/><circle cx="45" cy="252" r="5" fill="#111"/></g>' +
      '<g class="rl-sp"><circle cx="192" cy="166" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="rl-sp rl-sp2"><circle cx="198" cy="160" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("rls5", "#3a2f6a", "#f2a6a0"));
  }

  window.SCENES = { rlstation: rlstation, rlchurch: rlchurch, rlchiarts: rlchiarts, rlstudio: rlstudio, rlcorner: rlcorner };
})();
