/* Tems game (GENRES: Afrobeats; INTERNATIONAL region: AFRICA; Lagos, Nigeria - born in Lagos, grew up in Ilupeju, Lekki and Ajah).
   Rooms: the LAGFERRY boat pulling into Badore Terminal in Ajah on the Lagos Lagoon, the Lekki Conservation Centre canopy walkway
   (Born in the Wild), Lekki beach under an orange sunset (If Orange Was a Place), a Lagos night when the light comes back
   ("your love turn me up like NEPA") with a yellow danfo passing, and Admiralty Way in Lekki Phase 1 with the Lekki-Ikoyi Link
   Bridge pylon lit behind. CSS classes prefixed "tms" (the page's anim-train is kept). No logos, no faces, no 9s. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tmsFlow{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.tmsFlow{animation:tmsFlow 3s linear infinite}.tmsFl2{animation-duration:4.4s}' +
    '@keyframes tmsBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.tmsBob{animation:tmsBob 1.6s ease-in-out infinite}.tmsBb2{animation-delay:-.8s}' +
    '@keyframes tmsSway{0%,100%{transform:rotate(-1.2deg)}50%{transform:rotate(1.2deg)}}.tmsSway{transform-box:fill-box;transform-origin:50% 0%;animation:tmsSway 3.2s ease-in-out infinite}' +
    '@keyframes tmsBird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-30px)}}.tmsBird{animation:tmsBird 11s linear infinite}.tmsBd2{animation-delay:-5s}' +
    '@keyframes tmsGlow{0%,100%{opacity:.45}50%{opacity:1}}.tmsGlow{animation:tmsGlow 2.4s ease-in-out infinite}.tmsGl2{animation-delay:-1.2s}' +
    '@keyframes tmsWave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.tmsWave{animation:tmsWave 2.6s ease-in-out infinite}.tmsWv2{animation-delay:-1.3s}' +
    '@keyframes tmsRide{0%{transform:translateX(-80px)}100%{transform:translateX(480px)}}.tmsRide{animation:tmsRide 9s linear infinite}' +
    '@keyframes tmsBulb{0%,38%{opacity:.08}40%,44%{opacity:1}46%{opacity:.2}48%,100%{opacity:1}}.tmsBulb{animation:tmsBulb 5s linear infinite}' +
    '@keyframes tmsDanfo{0%{transform:translateX(440px)}100%{transform:translateX(-300px)}}.tmsDanfo{animation:tmsDanfo 7s linear infinite}' +
    '@keyframes tmsHue{0%,100%{stroke:#ff8a1f}33%{stroke:#2ec4b6}66%{stroke:#b46cff}}.tmsHue{animation:tmsHue 4s linear infinite}' +
    '@keyframes tmsCar{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.tmsCar{animation:tmsCar 5s linear infinite}.tmsCr2{animation-delay:-2.5s}' +
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
  const ORANGE = "#ff8a1f", GOLD = "#ffd166", TEAL = "#2ec4b6", NAVY = "#123a6b", LBLUE = "#1e88e5", GREEN = "#0f6b3a";
  const birds = '<g class="tmsBird"><path d="M0 34q6 -6 12 0q6 -6 12 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>' +
    '<g class="tmsBird tmsBd2"><path d="M0 54q5 -5 10 0q5 -5 10 0" stroke="#2a2a2a" stroke-width="1.8" fill="none"/></g>';
  const palm = (x, base, h, c) => '<g><path d="M' + x + ' ' + base + 'q' + (-6) + ' ' + (-h / 2) + ' ' + 4 + ' ' + (-h) + '" stroke="' + (c || "#5a3e22") + '" stroke-width="5" fill="none"/>' +
    '<g fill="' + (c ? c : "#2f7a3a") + '"><path d="M' + (x + 4) + ' ' + (base - h) + 'q-26 -4 -34 14q14 -14 34 -14z"/><path d="M' + (x + 4) + ' ' + (base - h) + 'q26 -6 36 12q-16 -12 -36 -12z"/>' +
    '<path d="M' + (x + 4) + ' ' + (base - h) + 'q-14 -20 -32 -18q20 2 32 18z"/><path d="M' + (x + 4) + ' ' + (base - h) + 'q14 -22 32 -16q-20 0 -32 16z"/></g></g>';
  const waterLines = (y0, y1, c) => {
    let s = '<g class="tmsFlow">';
    for (let y = y0; y < y1; y += 10) for (let x = -20; x < 440; x += 40) s += '<path d="M' + (x + (y % 20)) + ' ' + y + 'q10 -4 20 0" stroke="' + c + '" stroke-width="1.6" fill="none" opacity=".6"/>';
    return s + '</g>';
  };
  /* Lekki-Ikoyi Link Bridge: one tall white pylon, fan of stays, deck */
  const pylon = (x, base, k, lit) => {
    const h = 150 * k;
    let st = "";
    for (let i = 1; i <= 6; i++) {
      const y = base - h + 14 * k + i * 12 * k;
      st += '<path d="M' + x + ' ' + y + 'L' + (x - 30 * k - i * 26 * k) + ' ' + (base - 2) + 'M' + x + ' ' + y + 'L' + (x + 30 * k + i * 26 * k) + ' ' + (base - 2) + '" stroke="' + (lit ? ORANGE : "#e8eef2") + '" stroke-width="' + (1.4 * k) + '"' + (lit ? ' class="tmsHue"' : '') + '/>';
    }
    return '<g>' + st + '<path d="M' + (x - 5 * k) + ' ' + base + 'L' + (x - 2.5 * k) + ' ' + (base - h) + 'h' + (5 * k) + 'L' + (x + 5 * k) + ' ' + base + 'z" fill="#f2f4f6"/>' +
      '<rect x="' + (x - 220) + '" y="' + (base - 3) + '" width="440" height="' + (6 * k) + '" fill="#d9dde2"/></g>';
  };

  /* 1. Badore Terminal, Ajah: the LAGFERRY boat gliding in on the Lagos Lagoon, the blue-roofed jetty, palms behind */
  function tmsferry() {
    let wins = "";
    for (let x = 96; x < 250; x += 22) wins += '<rect x="' + x + '" y="128" width="16" height="12" rx="2" fill="#bfe3ff"/>';
    const boat = '<g class="anim-train"><g class="tmsBob">' +
      '<path d="M40 150h250q18 0 30 14l-12 22H58q-14 -10 -18 -36z" fill="#f6f8fa" stroke="#9aa6b2" stroke-width="1.5"/>' +
      '<rect x="44" y="164" width="272" height="6" fill="' + LBLUE + '"/><rect x="50" y="172" width="258" height="3" fill="' + GOLD + '"/>' +
      '<rect x="84" y="120" width="180" height="30" rx="6" fill="#fff" stroke="#9aa6b2" stroke-width="1.5"/>' + wins +
      '<rect x="80" y="116" width="188" height="6" rx="3" fill="' + LBLUE + '"/>' +
      '<rect x="270" y="126" width="24" height="24" rx="3" fill="#dfe6ec"/><rect x="274" y="130" width="16" height="10" fill="#bfe3ff"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tms1)"/>' + birds +
      '<circle cx="320" cy="46" r="18" fill="#fff1c4" opacity=".9"/>' +
      palm(26, 118, 52) + palm(70, 120, 40) + palm(360, 116, 48) +
      '<path d="M0 120q100 -10 200 -4t200 0v10H0z" fill="#3f7a46"/>' +
      '<rect x="0" y="124" width="400" height="136" fill="#3a7fa8"/>' + waterLines(134, 250, "#bfe3ff") +
      /* jetty: concrete pier with blue canopy, to the right */
      '<rect x="300" y="96" width="100" height="6" fill="' + LBLUE + '"/><path d="M296 96l8 -10h96v10z" fill="#1565c0"/>' +
      '<g fill="#8a939c"><rect x="306" y="102" width="5" height="92"/><rect x="346" y="102" width="5" height="92"/><rect x="386" y="102" width="5" height="92"/></g>' +
      '<rect x="298" y="148" width="102" height="8" fill="#c9cdd2"/><path d="M298 148h102" stroke="#fff" stroke-width="1"/>' +
      boat +
      /* terminal sign */
      '<rect x="20" y="20" width="4" height="40" fill="#9aa3ab"/><rect x="176" y="20" width="4" height="40" fill="#9aa3ab"/>' +
      '<rect x="12" y="14" width="176" height="42" rx="4" fill="' + NAVY + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="100" y="36" text-anchor="middle" ' + F + ' font-size="15" fill="#fff">Badore Terminal</text>' +
      '<rect x="40" y="42" width="120" height="10" rx="5" fill="' + GOLD + '"/><text x="100" y="50" text-anchor="middle" ' + F + ' font-size="7" fill="#123a6b">LAGFERRY · AJAH · LAGOS</text>',
      sky("tms1", "#ffd59a", "#f6efe0"));
  }

  /* 2. Lekki Conservation Centre: the long rope-and-plank canopy walkway swinging through the forest, a monkey on a branch */
  function tmscanopy() {
    let planks = "", nets = "";
    for (let x = 60; x <= 340; x += 10) {
      const y = 120 + 22 * Math.sin(Math.PI * (x - 60) / 280);
      planks += '<rect x="' + (x - 4) + '" y="' + y + '" width="8" height="4" fill="#a8713a"/>';
      nets += '<path d="M' + x + ' ' + (y - 22) + 'v22" stroke="#e0b070" stroke-width="1"/>';
    }
    const leaves = (cx, cy, r, c) => '<g fill="' + c + '"><circle cx="' + cx + '" cy="' + cy + '" r="' + r + '"/><circle cx="' + (cx - r * .8) + '" cy="' + (cy + r * .3) + '" r="' + (r * .7) + '"/><circle cx="' + (cx + r * .8) + '" cy="' + (cy + r * .3) + '" r="' + (r * .7) + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tms2)"/>' +
      leaves(30, 60, 50, "#2d6a3a") + leaves(200, 30, 46, "#347a42") + leaves(380, 64, 52, "#2d6a3a") +
      '<g fill="#5a3e26"><rect x="40" y="40" width="20" height="220"/><rect x="340" y="40" width="20" height="220"/><rect x="190" y="60" width="16" height="200"/></g>' +
      /* platforms */
      '<rect x="28" y="116" width="44" height="8" fill="#8a5a2e"/><rect x="328" y="116" width="44" height="8" fill="#8a5a2e"/>' +
      '<g class="tmsSway"><path d="M60 98Q200 142 340 98" stroke="#e0b070" stroke-width="2" fill="none"/>' + nets +
      '<path d="M60 120Q200 164 340 120" stroke="#7a5030" stroke-width="2" fill="none"/>' + planks + '</g>' +
      leaves(110, 210, 40, "#3f8f4a") + leaves(290, 220, 44, "#3a8444") + leaves(200, 250, 40, "#2f7a3a") +
      /* monkey silhouette on a branch */
      '<path d="M206 84h70" stroke="#5a3e26" stroke-width="5"/>' +
      '<g class="tmsBob" fill="#3a2a1e"><ellipse cx="250" cy="74" rx="9" ry="11"/><circle cx="250" cy="58" r="7"/><path d="M258 80q14 6 10 22" stroke="#3a2a1e" stroke-width="3" fill="none"/></g>' +
      birds + tag("BORN IN THE WILD", 70, 40, 20, GOLD, -4),
      sky("tms2", "#9fd6a0", "#e8f5d0"));
  }

  /* 3. Lekki beach under an orange sky (If Orange Was a Place): Atlantic waves rolling in, palms, a horse rider on the sand */
  function tmsorange() {
    return svg(
      '<rect width="400" height="260" fill="url(#tms3)"/>' +
      '<circle cx="200" cy="118" r="34" fill="#ffe08a"/>' +
      '<rect x="0" y="118" width="400" height="60" fill="#e8733a"/>' + waterLines(124, 176, "#ffd0a0") +
      '<g class="tmsWave"><path d="M-20 176q30 -10 60 0t60 0t60 0t60 0t60 0t60 0t60 0t60 0v8H-20z" fill="#fff3e0" opacity=".9"/></g>' +
      '<g class="tmsWave tmsWv2"><path d="M-20 184q30 -8 60 0t60 0t60 0t60 0t60 0t60 0t60 0t60 0v6H-20z" fill="#ffe2c0" opacity=".7"/></g>' +
      '<rect x="0" y="188" width="400" height="72" fill="#e9c08a"/>' +
      palm(30, 200, 70, "#3a2416") + palm(372, 204, 80, "#3a2416") +
      /* beach umbrellas */
      '<path d="M90 214q20 -22 40 0z" fill="' + TEAL + '"/><path d="M110 214v26" stroke="#5a3e22" stroke-width="2"/>' +
      '<path d="M290 220q18 -20 36 0z" fill="#ffd166"/><path d="M308 220v22" stroke="#5a3e22" stroke-width="2"/>' +
      /* horse and rider silhouette walking the shoreline */
      '<g class="tmsRide" fill="#3a2416"><path d="M0 214h30q6 -4 10 -12l6 -4l3 6l-6 6q-2 6 -4 10v14h-3v-12h-22v12h-3v-12q-6 -2 -11 -8z"/>' +
      '<rect x="14" y="196" width="7" height="14" rx="3"/><circle cx="17.5" cy="192" r="4"/>' +
      '<path d="M4 224v12M30 224v12" stroke="#3a2416" stroke-width="3"/></g>' +
      tag("IF ORANGE WAS A PLACE", 40, 52, 21, "#fff", -3),
      sky("tms3", "#ff7a2a", "#ffc070"));
  }

  /* 4. "Your love turn me up like NEPA": a Lagos street at night, the bulb flicks on and the block cheers "Up NEPA!", a yellow danfo passes */
  function tmsnepa() {
    let wins = "";
    for (let i = 0; i < 4; i++) wins += '<rect x="' + (38 + i * 26) + '" y="104" width="16" height="16" fill="#ffe08a" class="tmsBulb"/>';
    const danfo = '<g class="tmsDanfo"><rect x="0" y="182" width="120" height="44" rx="8" fill="#f5c400"/>' +
      '<rect x="0" y="202" width="120" height="5" fill="#111"/><rect x="0" y="210" width="120" height="3" fill="#111"/>' +
      '<g fill="#2a3a48"><rect x="10" y="188" width="18" height="12" rx="2"/><rect x="32" y="188" width="18" height="12" rx="2"/><rect x="54" y="188" width="18" height="12" rx="2"/><rect x="76" y="188" width="18" height="12" rx="2"/></g>' +
      '<rect x="98" y="186" width="18" height="16" rx="3" fill="#2a3a48"/>' +
      '<g fill="#1b1b1b"><circle cx="26" cy="228" r="9"/><circle cx="96" cy="228" r="9"/></g><circle cx="118" cy="214" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tms4)"/>' +
      Array.from({ length: 18 }, (_, i) => '<circle cx="' + ((i * 83) % 400) + '" cy="' + (10 + (i * 37) % 60) + '" r="1.1" fill="#fff" opacity=".6"/>').join("") +
      /* houses */
      '<rect x="20" y="90" width="130" height="100" fill="#c96a3a"/><path d="M12 90l73 -30l73 30z" fill="#6a3a2a"/>' + wins +
      '<rect x="160" y="110" width="90" height="80" fill="#5a7a8a"/><path d="M154 110l51 -22l51 22z" fill="#3a4a56"/>' +
      '<rect x="176" y="126" width="18" height="18" fill="#ffe08a" class="tmsBulb"/><rect x="214" y="126" width="18" height="18" fill="#ffe08a" class="tmsBulb"/>' +
      /* power pole + wires + bulb */
      '<rect x="300" y="40" width="7" height="150" fill="#6a5a4a"/><rect x="284" y="48" width="40" height="5" fill="#6a5a4a"/>' +
      '<path d="M0 60Q150 80 286 50M0 70Q150 92 322 50M304 52Q350 70 400 64" stroke="#222" stroke-width="1.4" fill="none"/>' +
      '<path d="M340 66v24" stroke="#222" stroke-width="1.4"/><circle cx="340" cy="98" r="10" fill="#fff2a8" class="tmsBulb"/><circle cx="340" cy="98" r="22" fill="#fff2a8" opacity=".25" class="tmsBulb"/>' +
      '<rect x="336" y="86" width="8" height="5" fill="#888"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#3a3a40"/><path d="M0 240h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="14 12"/>' +
      danfo +
      '<g class="tmsBulb">' + tag("UP NEPA!", 196, 72, 30, GOLD, -5) + '</g>',
      sky("tms4", "#0c1430", "#2a2a5a"));
  }

  /* 5. Admiralty Way, Lekki Phase 1: green Lagos street signs, the wall with her name, the Lekki-Ikoyi Link Bridge pylon lit behind */
  function tmscorner() {
    const sign = (x, y, w, t, s) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="' + GREEN + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + F + ' font-size="' + (s || 12) + '" fill="#fff">' + t + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#tms5)"/>' +
      '<g opacity=".95">' + pylon(150, 140, 0.9, true) + '</g>' +
      '<g class="tmsCar"><rect x="0" y="130" width="14" height="5" rx="2" fill="#ffe08a"/></g><g class="tmsCar tmsCr2"><rect x="0" y="131" width="14" height="5" rx="2" fill="#ff6a5a"/></g>' +
      '<g fill="#1f2a44"><rect x="250" y="80" width="28" height="64"/><rect x="282" y="96" width="22" height="48"/><rect x="308" y="70" width="30" height="74"/><rect x="342" y="100" width="24" height="44"/><rect x="0" y="104" width="40" height="40"/></g>' +
      '<g fill="#ffd98a" class="tmsGlow"><rect x="256" y="88" width="4" height="4"/><rect x="266" y="100" width="4" height="4"/><rect x="314" y="80" width="4" height="4"/><rect x="326" y="96" width="4" height="4"/><rect x="350" y="110" width="4" height="4"/></g>' +
      /* wall */
      '<rect x="0" y="144" width="400" height="78" fill="#d9cdb6"/>' +
      '<path d="M0 160h400M0 176h400M0 192h400M0 208h400" stroke="#c4b79e" stroke-width="1"/>' +
      tag("LEADING VIBE", 30, 172, 17, TEAL, -3) +
      tag("TEMS", 60, 212, 44, ORANGE, -5) +
      tag("FREE MIND", 200, 206, 18, GOLD, -2) +
      '<rect x="0" y="222" width="400" height="38" fill="#36363c"/><rect x="0" y="220" width="400" height="4" fill="#b0b0b6"/>' +
      '<path d="M0 244h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      /* sign post */
      '<rect x="352" y="70" width="5" height="152" fill="#4a4a4a"/>' +
      sign(282, 72, 112, "ADMIRALTY WAY") +
      sign(294, 98, 100, "FOLA OSIBO RD", 11) +
      '<text x="344" y="134" text-anchor="middle" ' + F + ' font-size="8" fill="#fff">LEKKI PHASE 1</text>',
      sky("tms5", "#14183a", "#4a2a5a"));
  }

  window.SCENES = { tmsferry, tmscanopy, tmsorange, tmsnepa, tmscorner };
})();
