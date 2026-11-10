/* Martin Garrix game (GENRES: EDM + DANCE; INTERNATIONAL region: UK + EUROPE; Amstelveen, Netherlands).
   Rooms: Amstelveen Stadshart tram stop (GVB tram 5, blue-and-white low-floor tram under the wires), the bedroom studio in
   Amstelveen where a teenage Martijn Garritsen made his first tracks (laptop, monitors, the guitar he learned at 8),
   the Tomorrowland main stage in Boom (fairy-tale stage, fireworks, flags; no logos), the Johan Cruijff ArenA in Amsterdam
   during ADE where he was crowned world No. 1 DJ (white roof arches; no logos), and Stadsplein at Sandbergplein in
   Amstelveen with the Cobra Museum and the Riekermolen windmill behind. CSS classes prefixed "gmx" (the page's anim-train
   is kept). No logos, no faces, no 9s. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes gmxTw{0%,100%{opacity:1}50%{opacity:.2}}.gmxTw{animation:gmxTw 1.4s ease-in-out infinite}.gmxT2{animation-delay:.45s}.gmxT3{animation-delay:.9s}' +
    '@keyframes gmxBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.gmxBob{animation:gmxBob .6s ease-in-out infinite}.gmxBb2{animation-delay:.3s}' +
    '@keyframes gmxPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.gmxPulse{transform-box:fill-box;transform-origin:50% 50%;animation:gmxPulse .5s ease-in-out infinite}' +
    '@keyframes gmxBeam{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.gmxBeam{transform-box:fill-box;transform-origin:50% 100%;animation:gmxBeam 3s ease-in-out infinite}.gmxBm2{animation-delay:-1.5s}' +
    '@keyframes gmxBoom{0%{transform:scale(.2);opacity:0}30%{opacity:1}100%{transform:scale(1.3);opacity:0}}.gmxBoom{transform-box:fill-box;transform-origin:50% 50%;animation:gmxBoom 2.2s ease-out infinite}.gmxBo2{animation-delay:.8s}.gmxBo3{animation-delay:1.5s}' +
    '@keyframes gmxFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(8deg)}}.gmxFlag{transform-box:fill-box;transform-origin:0 50%;animation:gmxFlag .9s ease-in-out infinite}' +
    '@keyframes gmxSail{to{transform:rotate(360deg)}}.gmxSail{transform-box:view-box;animation:gmxSail 8s linear infinite}' +
    '@keyframes gmxBike{0%{transform:translateX(-80px)}100%{transform:translateX(480px)}}.gmxBike{animation:gmxBike 10s linear infinite}' +
    '@keyframes gmxBar{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.gmxBar{transform-box:fill-box;transform-origin:50% 100%;animation:gmxBar .7s ease-in-out infinite}.gmxBr2{animation-delay:.2s}.gmxBr3{animation-delay:.4s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const CYN = "#00d1ff", WHT = "#f4f6fa", ORG = "#ff8a1a", GVB = "#16357a";
  const stars = (n, y0, y1) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = (i * 73 + 17) % 400, y = y0 + ((i * 37) % (y1 - y0));
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (i % 3 ? 0.9 : 1.5) + '" fill="#fff" class="gmxTw' + (i % 3 === 1 ? ' gmxT2' : i % 3 === 2 ? ' gmxT3' : '') + '"/>';
    }
    return s;
  };
  const crowd = (y, n, fill) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = 6 + i * (400 / n), up = i % 3 === 0;
      s += '<g class="gmxBob' + (i % 2 ? ' gmxBb2' : '') + '" fill="' + fill + '"><circle cx="' + x + '" cy="' + (y - 14) + '" r="5.5"/><rect x="' + (x - 6) + '" y="' + (y - 9) + '" width="12" height="22" rx="5"/>' +
        (up ? '<path d="M' + (x + 4) + ' ' + (y - 6) + 'l7 -15M' + (x - 4) + ' ' + (y - 6) + 'l-7 -15" stroke="' + fill + '" stroke-width="3" stroke-linecap="round"/>' : '') + '</g>';
    }
    return s;
  };
  const tree = (x, y, r, c) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (r + 12) + '" fill="#5a3e2a"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * .5) + '" cy="' + (y + r * .3) + '" r="' + (r * .7) + '" fill="' + c + '"/><circle cx="' + (x + r * .5) + '" cy="' + (y + r * .3) + '" r="' + (r * .7) + '" fill="' + c + '"/>';
  const bike = (y, col) => '<g class="gmxBike"><circle cx="0" cy="' + y + '" r="8" fill="none" stroke="#111" stroke-width="2.5"/><circle cx="34" cy="' + y + '" r="8" fill="none" stroke="#111" stroke-width="2.5"/><path d="M0 ' + y + 'l12 -16h16l6 16M12 ' + (y - 16) + 'l-4 -6M28 ' + (y - 16) + 'l2 -6" stroke="' + col + '" stroke-width="3" fill="none"/><g fill="#2b3644"><circle cx="18" cy="' + (y - 40) + '" r="5"/><rect x="13" y="' + (y - 36) + '" width="10" height="18" rx="4"/></g></g>';

  /* 1. Amstelveen Stadshart tram stop: overhead wires, a low glass shelter, the dark-blue stop pole with the tram sign and the 5,
        a long white-and-blue GVB low-floor tram pulling in */
  function gmxstation() {
    let wins = "";
    for (let x = 42; x < 300; x += 28) wins += '<rect x="' + x + '" y="130" width="20" height="26" rx="3" fill="#1d2a40"/>';
    const tram = '<g class="anim-train">' +
      '<path d="M228 110l14 -12h14l-10 12" stroke="#2a2a2a" stroke-width="2" fill="none"/>' +
      '<rect x="24" y="112" width="290" height="70" rx="10" fill="' + WHT + '" stroke="#1a1a1a" stroke-width="2"/>' +
      '<path d="M314 112q24 6 26 40v30h-26z" fill="' + GVB + '" stroke="#1a1a1a" stroke-width="2"/>' +
      '<path d="M318 120q14 6 16 28h-16z" fill="#a8d4f0"/>' + wins +
      '<rect x="24" y="162" width="316" height="10" fill="' + GVB + '"/>' +
      '<g fill="#d0d6e0"><rect x="112" y="128" width="12" height="44" rx="2"/><rect x="222" y="128" width="12" height="44" rx="2"/></g>' +
      '<rect x="318" y="114" width="16" height="10" rx="2" fill="#111"/><text x="326" y="122" text-anchor="middle" ' + F + ' font-size="8" fill="#ffb020">5</text>' +
      '<rect x="330" y="166" width="8" height="5" fill="#fff6c4"/>' +
      '<g fill="#111"><rect x="54" y="180" width="40" height="8" rx="3"/><rect x="240" y="180" width="40" height="8" rx="3"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gmxs1)"/>' +
      /* Stadshart buildings and trees behind */
      '<rect x="0" y="64" width="120" height="70" fill="#c7b9a6"/><rect x="120" y="50" width="90" height="84" fill="#b3a593"/><rect x="210" y="70" width="190" height="64" fill="#cfc4b4"/>' +
      '<g fill="#7f93a8"><rect x="12" y="76" width="16" height="12"/><rect x="40" y="76" width="16" height="12"/><rect x="68" y="76" width="16" height="12"/><rect x="134" y="62" width="14" height="12"/><rect x="160" y="62" width="14" height="12"/><rect x="186" y="62" width="14" height="12"/><rect x="226" y="82" width="20" height="12"/><rect x="262" y="82" width="20" height="12"/><rect x="298" y="82" width="20" height="12"/><rect x="334" y="82" width="20" height="12"/><rect x="370" y="82" width="20" height="12"/></g>' +
      tree(16, 104, 16, "#5f8f4a") + tree(380, 104, 18, "#557f44") +
      /* overhead wire and masts */
      '<path d="M0 90h400" stroke="#2a2a2a" stroke-width="1.5"/><g fill="#5b6270"><rect x="8" y="80" width="5" height="120"/><rect x="390" y="80" width="5" height="120"/></g>' +
      '<path d="M10 86h30M392 86h-30" stroke="#5b6270" stroke-width="3"/>' +
      tram +
      /* platform */
      '<rect x="0" y="190" width="400" height="70" fill="#9a9894"/><rect x="0" y="190" width="400" height="5" fill="#f1f1f1"/>' +
      '<path d="M0 218h400" stroke="#86847f" stroke-width="1"/>' +
      /* glass shelter */
      '<rect x="18" y="200" width="110" height="4" fill="#3a3f4a"/><rect x="22" y="204" width="4" height="40" fill="#3a3f4a"/><rect x="120" y="204" width="4" height="40" fill="#3a3f4a"/>' +
      '<rect x="26" y="206" width="94" height="34" fill="#cfe8f5" opacity=".45"/>' +
      /* stop sign: dark-blue panel, tram pictogram, line 5, stop name */
      '<rect x="210" y="196" width="4" height="60" fill="#3a3f4a"/>' +
      '<rect x="156" y="198" width="190" height="36" rx="4" fill="' + GVB + '" stroke="#fff" stroke-width="2"/>' +
      '<rect x="164" y="204" width="24" height="24" rx="3" fill="#fff"/><path d="M168 220h16v-10h-16zM176 210v-3M172 207h8M170 222l-2 4M182 222l2 4" stroke="' + GVB + '" stroke-width="2" fill="none"/>' +
      '<text x="252" y="216" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">Amstelveen</text>' +
      '<text x="252" y="229" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">Stadshart</text>' +
      '<rect x="314" y="204" width="24" height="24" rx="3" fill="#fff"/><text x="326" y="222" text-anchor="middle" ' + F + ' font-size="15" fill="' + GVB + '">5</text>' +
      /* a rider with a record bag */
      '<g fill="#2b3644"><circle cx="370" cy="226" r="5"/><rect x="364" y="231" width="12" height="22" rx="4"/></g>' +
      '<rect x="376" y="238" width="16" height="13" rx="2" fill="' + CYN + '"/>',
      sky("gmxs1", "#8fbfe6", "#eaf2f8"));
  }

  /* 2. The bedroom studio in Amstelveen: laptop with a beat grid, two monitor speakers pumping, a midi keyboard, the guitar on the wall,
        a night window and a sticky note */
  function gmxbedroom() {
    let grid = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 8; c++) if ((r * 3 + c * 5) % 4 !== 1)
      grid += '<rect x="' + (154 + c * 12) + '" y="' + (92 + r * 10) + '" width="10" height="7" rx="1" fill="' + (r % 2 ? CYN : ORG) + '" opacity=".9"/>';
    const spk = x => '<rect x="' + x + '" y="96" width="44" height="70" rx="5" fill="#1b1e26" stroke="#3a3f4a" stroke-width="2"/>' +
      '<circle cx="' + (x + 22) + '" cy="114" r="8" fill="#2c313c"/><g class="gmxPulse"><circle cx="' + (x + 22) + '" cy="144" r="15" fill="#2c313c" stroke="' + CYN + '" stroke-width="2"/><circle cx="' + (x + 22) + '" cy="144" r="5" fill="#111"/></g>';
    let keys = "";
    for (let i = 0; i < 14; i++) keys += '<rect x="' + (142 + i * 8) + '" y="182" width="7" height="16" fill="#f4f4f2"/>';
    for (let i = 0; i < 13; i++) if (i % 7 !== 2 && i % 7 !== 6) keys += '<rect x="' + (147 + i * 8) + '" y="182" width="5" height="10" fill="#111"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a2f45"/>' +
      '<rect x="0" y="0" width="400" height="170" fill="#353b58"/>' +
      /* window with night sky and stars */
      '<rect x="20" y="20" width="96" height="76" fill="#0c1430" stroke="#c9ccd6" stroke-width="4"/>' + '<g>' + stars(6, 26, 60).replace(/cx="(\d+)"/g, (m, v) => 'cx="' + (24 + (v % 88)) + '"') + '</g>' +
      '<path d="M68 20v76M20 58h96" stroke="#c9ccd6" stroke-width="3"/><circle cx="96" cy="36" r="8" fill="#f2f0d8"/>' +
      /* guitar on the wall */
      '<g transform="rotate(-14 330 60)"><rect x="326" y="16" width="8" height="54" fill="#7a5230"/><rect x="323" y="8" width="14" height="12" rx="2" fill="#3a2a1a"/>' +
      '<path d="M330 70q-22 0 -20 22q2 16 20 16q18 0 20 -16q2 -22 -20 -22z" fill="#c8742a" stroke="#5a3010" stroke-width="2"/><circle cx="330" cy="88" r="6" fill="#2a1a10"/></g>' +
      /* sticky note */
      '<rect x="252" y="30" width="44" height="34" fill="#ffe46b" transform="rotate(4 274 47)"/><text x="274" y="52" text-anchor="middle" transform="rotate(4 274 47)" ' + F + ' font-size="8" fill="#333">ANIMALS</text>' +
      /* desk */
      '<rect x="20" y="166" width="360" height="12" fill="#6b4a32"/><rect x="34" y="178" width="10" height="82" fill="#5a3e2a"/><rect x="356" y="178" width="10" height="82" fill="#5a3e2a"/>' +
      spk(70) + spk(286) +
      /* laptop */
      '<rect x="142" y="80" width="116" height="74" rx="5" fill="#1a1d24" stroke="#8a919c" stroke-width="3"/>' + grid +
      '<rect x="154" y="134" width="94" height="10" fill="#0f1218"/><g fill="' + CYN + '"><rect class="gmxBar" x="158" y="134" width="6" height="10"/><rect class="gmxBar gmxBr2" x="168" y="134" width="6" height="10"/><rect class="gmxBar gmxBr3" x="178" y="134" width="6" height="10"/><rect class="gmxBar" x="188" y="134" width="6" height="10"/><rect class="gmxBar gmxBr2" x="198" y="134" width="6" height="10"/></g>' +
      '<path d="M178 104v20" stroke="#fff" stroke-width="1.5" class="gmxTw"/>' +
      '<path d="M128 166l14 -12h116l14 12z" fill="#8a919c"/>' +
      /* midi keyboard */
      '<rect x="136" y="178" width="128" height="26" rx="3" fill="#20242e"/>' + keys +
      /* headphones */
      '<path d="M300 186q20 -26 40 0" stroke="#111" stroke-width="4" fill="none"/><rect x="294" y="184" width="12" height="16" rx="4" fill="' + ORG + '"/><rect x="334" y="184" width="12" height="16" rx="4" fill="' + ORG + '"/>',
      '');
  }

  /* 3. Tomorrowland main stage in Boom: a storybook castle stage with towers and a giant open book, lasers, fireworks, a crowd waving flags */
  function gmxtomorrow() {
    const flag = (x, y, a, b) => '<path d="M' + x + ' ' + (y + 30) + 'v-34" stroke="#ddd" stroke-width="2"/><g class="gmxFlag"><rect x="' + x + '" y="' + (y - 4) + '" width="20" height="7" fill="' + a + '"/><rect x="' + x + '" y="' + (y + 3) + '" width="20" height="7" fill="' + b + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#0d0a22"/>' + stars(22, 6, 70) +
      /* fireworks */
      '<g class="gmxBoom"><circle cx="70" cy="40" r="22" fill="none" stroke="' + ORG + '" stroke-width="3" stroke-dasharray="3 5"/></g>' +
      '<g class="gmxBoom gmxBo2"><circle cx="330" cy="34" r="24" fill="none" stroke="' + CYN + '" stroke-width="3" stroke-dasharray="3 5"/></g>' +
      '<g class="gmxBoom gmxBo3"><circle cx="200" cy="22" r="18" fill="none" stroke="#ffd84a" stroke-width="3" stroke-dasharray="3 5"/></g>' +
      /* castle towers */
      '<rect x="40" y="70" width="44" height="120" fill="#4a3f6e"/><path d="M36 70l26 -34l26 34z" fill="#7a3f8e"/>' +
      '<rect x="316" y="70" width="44" height="120" fill="#4a3f6e"/><path d="M312 70l26 -34l26 34z" fill="#7a3f8e"/>' +
      '<rect x="96" y="96" width="34" height="94" fill="#5a4d82"/><path d="M92 96l21 -26l21 26z" fill="#8e4a9e"/>' +
      '<rect x="270" y="96" width="34" height="94" fill="#5a4d82"/><path d="M266 96l21 -26l21 26z" fill="#8e4a9e"/>' +
      '<g fill="#ffd84a" class="gmxTw"><rect x="56" y="96" width="12" height="16" rx="6"/><rect x="332" y="96" width="12" height="16" rx="6"/><rect x="107" y="120" width="10" height="14" rx="5"/><rect x="281" y="120" width="10" height="14" rx="5"/></g>' +
      /* giant open storybook in the middle */
      '<path d="M140 150q30 -26 60 -10q30 -16 60 10v34h-120z" fill="#f2e6c8" stroke="#8a6a3a" stroke-width="2"/>' +
      '<path d="M200 140v44" stroke="#8a6a3a" stroke-width="2"/><path d="M152 158q24 -12 44 -4M152 168q24 -12 44 -4M204 154q20 -8 44 4M204 164q20 -8 44 4" stroke="#b89a6a" stroke-width="1.5" fill="none"/>' +
      /* lasers */
      '<path class="gmxBeam" d="M200 150L180 0h40z" fill="' + CYN + '" opacity=".2"/><path class="gmxBeam gmxBm2" d="M120 160L100 0h40z" fill="' + ORG + '" opacity=".2"/><path class="gmxBeam" d="M280 160L260 0h40z" fill="#c84aff" opacity=".2"/>' +
      /* stage deck and DJ booth */
      '<rect x="20" y="186" width="360" height="12" fill="#2a2140"/><rect x="170" y="172" width="60" height="16" rx="2" fill="#111" stroke="' + CYN + '" stroke-width="1.5"/>' +
      '<g class="gmxBob"><rect x="194" y="158" width="12" height="16" rx="4" fill="#0a0a0a"/><circle cx="200" cy="154" r="5" fill="#0a0a0a"/></g>' +
      /* crowd with flags */
      '<rect x="0" y="198" width="400" height="62" fill="#120f22"/>' + crowd(236, 22, "#2a2448") +
      flag(40, 206, "#ae1c28", "#21468b") + flag(150, 204, "#000", "#fdda24") + flag(260, 206, "#fff", "#c8102e") + flag(350, 204, ORG, "#fff"),
      '');
  }

  /* 4. Johan Cruijff ArenA during ADE: the bowl under the white roof with its two big arches, a giant number-one plinth on the screen,
        light beams over the crowd */
  function gmxarena() {
    let tr = "";
    for (let x = 60; x <= 340; x += 20) tr += '<path d="M' + x + ' ' + (62 - Math.round(Math.sin((x - 60) / 280 * Math.PI) * 28)) + 'v20" stroke="#c6ccd6" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gmxs4)"/>' + stars(14, 6, 40) +
      /* roof arches */
      '<path d="M40 86Q200 4 360 86" stroke="#eef1f6" stroke-width="7" fill="none"/>' +
      '<path d="M60 82Q200 20 340 82" stroke="#d4d9e2" stroke-width="4" fill="none"/>' + tr +
      '<path d="M30 92Q200 54 370 92v14H30z" fill="#e4e8ee"/>' +
      /* stands */
      '<path d="M20 106h360l-30 70H50z" fill="#3a3f52"/>' +
      '<g fill="#c8102e" opacity=".7"><path d="M40 116h320l-6 12H46z"/></g><g fill="#5a6078"><path d="M48 134h304l-6 12H54z"/><path d="M56 152h288l-6 12H62z"/></g>' +
      '<g fill="#fff" class="gmxTw"><circle cx="80" cy="140" r="1.5"/><circle cx="140" cy="158" r="1.5"/><circle cx="260" cy="140" r="1.5"/><circle cx="320" cy="158" r="1.5"/></g>' +
      '<g fill="#fff" class="gmxTw gmxT2"><circle cx="110" cy="122" r="1.5"/><circle cx="200" cy="140" r="1.5"/><circle cx="290" cy="122" r="1.5"/></g>' +
      /* big screen with a number-one trophy */
      '<rect x="150" y="96" width="100" height="56" rx="3" fill="#0b0f1a" stroke="' + CYN + '" stroke-width="2"/>' +
      '<path d="M186 104h28v10q0 16 -14 18q-14 -2 -14 -18z" fill="#ffd84a"/><path d="M186 108h-8q0 10 10 10M214 108h8q0 10 -10 10" stroke="#ffd84a" stroke-width="2" fill="none"/>' +
      '<rect x="194" y="132" width="12" height="6" fill="#ffd84a"/><rect x="186" y="138" width="28" height="6" rx="1" fill="#c9a24a"/>' +
      '<text x="200" y="124" text-anchor="middle" ' + F + ' font-size="12" fill="#0b0f1a">1</text>' +
      /* beams and pitch */
      '<path class="gmxBeam" d="M110 200L96 60h28z" fill="' + CYN + '" opacity=".18"/><path class="gmxBeam gmxBm2" d="M290 200L276 60h28z" fill="' + ORG + '" opacity=".18"/>' +
      '<rect x="0" y="176" width="400" height="84" fill="#141826"/>' + crowd(228, 24, "#2a3048") +
      '<rect x="170" y="182" width="60" height="16" rx="2" fill="#111" stroke="' + CYN + '" stroke-width="1.5"/>',
      sky("gmxs4", "#0d1430", "#2a3460"));
  }

  /* 5. Stadsplein at Sandbergplein in Amstelveen: the low white Cobra Museum and the Riekermolen windmill behind, the tagged wall,
        a bike going by, dark-blue Dutch street signs */
  function gmxcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gmxs5)"/>' +
      /* Riekermolen windmill: dark octagonal body on a base, white sails turning */
      '<path d="M58 160l6 -70h24l6 70z" fill="#3e3a36"/><path d="M60 90q16 -20 32 0z" fill="#2a2724"/>' +
      '<g class="gmxSail" style="transform-origin:76px 92px"><path d="M76 92l4 -56h-8zM76 92l56 4v-8zM76 92l-4 56h8zM76 92l-56 -4v8z" fill="#f2efe6" stroke="#7a6a52" stroke-width="1"/></g>' +
      '<circle cx="76" cy="92" r="4" fill="#7a6a52"/>' +
      /* Cobra Museum: long low white building, glass band, angled roof edge */
      '<path d="M140 160v-46l120 -12l120 12v46z" fill="#f2f2ee" stroke="#b6b6ae" stroke-width="2"/>' +
      '<rect x="150" y="122" width="220" height="14" fill="#7fa7c2"/><g stroke="#f2f2ee" stroke-width="2"><path d="M182 122v14M214 122v14M246 122v14M278 122v14M310 122v14M342 122v14"/></g>' +
      '<g fill="' + ORG + '"><circle cx="170" cy="148" r="5"/></g><g fill="#c8102e"><rect x="196" y="143" width="10" height="10"/></g><g fill="#21468b"><path d="M224 153l6 -10l6 10z"/></g>' +
      tree(118, 124, 16, "#5f8f4a") + tree(388, 122, 14, "#557f44") +
      /* the tagged wall */
      '<rect x="0" y="160" width="400" height="50" fill="#22314a"/>' +
      '<path d="M0 174h400M0 188h400" stroke="#1b283d" stroke-width="1"/>' +
      tag("STMPD", 10, 182, 16, ORG, -4) +
      tag("MARTIN GARRIX", 64, 202, 25, CYN, -3) +
      tag("YTRAM", 300, 182, 14, WHT, -6) +
      '<rect x="0" y="210" width="400" height="50" fill="#6a6660"/><rect x="0" y="208" width="400" height="4" fill="#a6a9b0"/>' +
      '<rect x="0" y="230" width="400" height="10" fill="#a8463c" opacity=".75"/>' + bike(236, CYN) +
      /* street name signs: dark blue, white letters */
      '<rect x="372" y="24" width="5" height="184" fill="#2a2a2a"/>' +
      '<rect x="262" y="24" width="134" height="26" rx="2" fill="#1d3a6e" stroke="#fff" stroke-width="2"/>' +
      '<text x="329" y="42" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">Stadsplein</text>' +
      '<rect x="262" y="54" width="134" height="26" rx="2" fill="#1d3a6e" stroke="#fff" stroke-width="2"/>' +
      '<text x="329" y="72" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">Sandbergplein</text>',
      sky("gmxs5", "#8fc2ea", "#eae6dc"));
  }

  window.SCENES = { gmxstation, gmxbedroom, gmxtomorrow, gmxarena, gmxcorner };
})();
