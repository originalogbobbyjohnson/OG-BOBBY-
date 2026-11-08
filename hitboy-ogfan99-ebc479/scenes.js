/* hitboy scenes (Regions tab: Los Angeles + SoCal; Fontana, the Inland Empire). Rap game (his own songs). CSS classes prefixed hbr- (the page's own anim-train is kept).
   1 Fontana Metrolink station (San Bernardino Line), Orange Way by Sierra Ave: at-grade platform, the silver bi-level train sliding in, the San Gabriels behind.
   2 Pasadena City Hall ("Pasadena and Fontana, I brought chips back through", Slipping Into Darkness): the domed tower, the arcade and the courtyard fountain.
   3 The beat lab ("808 rolling", Tony Fontana III): pads lighting up on the drum machine, the speaker pumping, the waveform on the screen.
   4 The Tide ("Surf or drown", "I stand above the surface"): a surfboard riding a big curling wave at sunset.
   5 Arrow Blvd and Sierra Ave in downtown Fontana: green signs, HIT-BOY tagged, the Arrowhead on the San Bernardino Mountains behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes hbrglow{0%,100%{opacity:.35}50%{opacity:1}}.hbr-glow{animation:hbrglow 1.6s ease-in-out infinite}.hbr-g2{animation-delay:-.4s}.hbr-g3{animation-delay:-.8s}.hbr-g4{animation-delay:-1.2s}' +
    '@keyframes hbrpump{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}.hbr-pump{transform-box:fill-box;transform-origin:50% 50%;animation:hbrpump .5s ease-in-out infinite}' +
    '@keyframes hbrwave{from{transform:translateX(0)}to{transform:translateX(-80px)}}.hbr-wv{animation:hbrwave 3s linear infinite}.hbr-wv2{animation-duration:4.4s}' +
    '@keyframes hbrride{0%,100%{transform:translate(0,0) rotate(-6deg)}50%{transform:translate(-14px,-8px) rotate(4deg)}}.hbr-ride{transform-box:fill-box;transform-origin:50% 50%;animation:hbrride 3.2s ease-in-out infinite}' +
    '@keyframes hbrspl{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-22px);opacity:0}}.hbr-spl{animation:hbrspl 1.4s ease-out infinite}.hbr-spl2{animation-delay:-.7s}' +
    '@keyframes hbrfount{0%,100%{transform:scaleY(.85)}50%{transform:scaleY(1.1)}}.hbr-fount{transform-box:fill-box;transform-origin:50% 100%;animation:hbrfount 1.3s ease-in-out infinite}' +
    '@keyframes hbrcld{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.hbr-cld{animation:hbrcld 34s linear infinite}.hbr-cld2{animation-delay:-17s}' +
    '@keyframes hbrcar{from{transform:translateX(-100px)}to{transform:translateX(500px)}}.hbr-car{animation:hbrcar 6s linear infinite}' +
    '@keyframes hbrspray{0%,100%{transform:scaleY(.8)}50%{transform:scaleY(1.1)}}.hbr-spray{transform-box:fill-box;transform-origin:50% 100%;animation:hbrspray 1s ease-in-out infinite}' +
    '@keyframes hbrbird{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-6px)}}.hbr-bird{animation:hbrbird 6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 11) + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="' + (letter.length > 1 ? 11 : 15) + '" fill="#fff">' + letter + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const palm = (x, y, h, c) => '<g><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#3a2c20" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 66, -66].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + (c || "#2f5a35") + '" stroke-width="4" fill="none"/>').join("") + '</g>';
  const cloud = (x, y, cls) => '<g class="' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="8" fill="#fff" opacity=".8"/><ellipse cx="' + (x + 14) + '" cy="' + (y - 5) + '" rx="14" ry="8" fill="#fff" opacity=".8"/></g>';
  const mtns = (y, c, snow) => '<path d="M0 ' + y + 'l50 -40l30 16l46 -52l40 34l36 -22l54 44l40 -34l50 38l34 -20l20 12v' + 40 + 'H0z" fill="' + c + '"/>' +
    (snow ? '<path d="M126 ' + (y - 76) + 'l-12 14l8 -2l6 6l6 -6l8 2zM260 ' + (y - 56) + 'l-10 10l7 0l4 5l5 -5l6 1z" fill="#f4f4f8"/>' : "");
  const BLUE = "#38b6ff", ORANGE = "#ff8a3d", CREAM = "#f2e6c9", SB = "#a32136";

  /* 1. Fontana Metrolink station, San Bernardino Line */
  function hbrstation() {
    const car = (x) => {
      let w = ""; for (let i = 0; i < 6; i++) w += '<rect x="' + (x + 12 + i * 22) + '" y="112" width="16" height="12" rx="2" fill="#1d2a3a"/><rect x="' + (x + 12 + i * 22) + '" y="134" width="16" height="12" rx="2" fill="#1d2a3a"/>';
      return '<rect x="' + x + '" y="102" width="150" height="66" rx="6" fill="#dfe3e7" stroke="#8b939c" stroke-width="2"/>' + w +
        '<rect x="' + x + '" y="150" width="150" height="6" fill="#23406e"/><rect x="' + x + '" y="156" width="150" height="3" fill="' + BLUE + '"/>' +
        '<rect x="' + (x + 68) + '" y="128" width="16" height="38" fill="#9aa3ad" stroke="#6d7680"/>' +
        '<circle cx="' + (x + 24) + '" cy="172" r="8" fill="#111"/><circle cx="' + (x + 42) + '" cy="172" r="8" fill="#111"/><circle cx="' + (x + 108) + '" cy="172" r="8" fill="#111"/><circle cx="' + (x + 126) + '" cy="172" r="8" fill="#111"/>';
    };
    const train = '<g class="anim-train">' + car(10) + car(164) +
      '<path d="M314 102h40q22 0 30 30v36h-70z" fill="#dfe3e7" stroke="#8b939c" stroke-width="2"/><path d="M356 108q16 2 22 22h-22z" fill="#1d2a3a"/><rect x="314" y="150" width="70" height="6" fill="#23406e"/><rect x="314" y="156" width="70" height="3" fill="' + BLUE + '"/>' +
      '<circle cx="376" cy="160" r="4" fill="#fff6c2"/>' + bullet(334, 130, "SB", SB, 10) +
      '<circle cx="332" cy="172" r="8" fill="#111"/><circle cx="366" cy="172" r="8" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#hbrs1)"/>' + cloud(60, 34, "hbr-cld") + cloud(220, 22, "hbr-cld hbr-cld2") +
      mtns(98, "#8c8aa6", true) +
      palm(30, 100, 50) + palm(372, 100, 58) +
      /* rails */
      '<rect x="0" y="176" width="400" height="10" fill="#6b5e50"/><rect x="0" y="178" width="400" height="2" fill="#c9ccd1"/><rect x="0" y="184" width="400" height="2" fill="#c9ccd1"/>' +
      train +
      /* platform + canopy */
      '<rect x="0" y="186" width="400" height="22" fill="#cfc6b4"/><rect x="0" y="186" width="400" height="4" fill="#f2d24c"/>' +
      '<rect x="0" y="208" width="400" height="52" fill="#b9ae98"/>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="58" width="6" height="150" fill="#5c5f66"/>').join("") +
      '<path d="M0 50h400l-10 12H10z" fill="#e8e1d2" stroke="#9a937f"/>' +
      /* station sign */
      '<rect x="112" y="64" width="176" height="34" rx="3" fill="#121418"/><text x="200" y="88" text-anchor="middle" ' + font + ' font-size="20" fill="#fff">FONTANA</text>' +
      bullet(96, 81, "SB", SB, 12) +
      '<text x="200" y="230" text-anchor="middle" ' + font + ' font-size="10" fill="#4b4436">SAN BERNARDINO LINE · ORANGE WAY</text>',
      sky("hbrs1", "#7fb7e8", "#f4dcae"));
  }

  /* 2. Pasadena City Hall */
  function hbrcityhall() {
    let arc = ""; for (let x = 60; x < 340; x += 28) arc += '<path d="M' + x + ' 196v-26q14 -16 28 0v26" fill="#6e5a3c"/>';
    let win = ""; for (let i = 0; i < 4; i++) win += '<rect x="' + (182 + i * 10) + '" y="96" width="6" height="14" rx="3" fill="#5a4a32"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hbrs2)"/>' + cloud(70, 30, "hbr-cld") + cloud(280, 44, "hbr-cld hbr-cld2") +
      mtns(150, "#93a0b8", false) +
      /* wings */
      '<rect x="40" y="136" width="320" height="64" fill="#e9dcc0" stroke="#b9a57e"/><path d="M36 136h328l-8 -10H44z" fill="#c9673f"/>' + arc +
      [70, 330].map(x => '<rect x="' + (x - 14) + '" y="112" width="28" height="26" fill="#e9dcc0" stroke="#b9a57e"/><path d="M' + (x - 18) + ' 112h36l-18 -12z" fill="#c9673f"/>').join("") +
      /* tower tiers */
      '<rect x="160" y="112" width="80" height="88" fill="#efe3c8" stroke="#b9a57e"/>' + win +
      '<rect x="170" y="84" width="60" height="30" fill="#efe3c8" stroke="#b9a57e"/><path d="M166 84h68l-6 -6h-56z" fill="#d6c6a2"/>' +
      [176, 192, 208, 224].map(x => '<rect x="' + x + '" y="88" width="4" height="22" fill="#d6c6a2"/>').join("") +
      '<rect x="178" y="58" width="44" height="22" fill="#efe3c8" stroke="#b9a57e"/>' + [184, 196, 208].map(x => '<path d="M' + x + ' 78v-12q4 -5 8 0v12" fill="#5a4a32"/>').join("") +
      /* tiled dome + lantern */
      '<path d="M176 58q24 -36 48 0z" fill="#c9673f" stroke="#8e4026"/><path d="M188 52q12 -22 24 0" fill="none" stroke="#e08a5c" stroke-width="1.5"/>' +
      '<rect x="196" y="22" width="8" height="12" fill="#efe3c8" stroke="#b9a57e"/><path d="M194 22h12l-6 -10z" fill="#c9673f"/>' +
      /* courtyard fountain */
      '<rect x="0" y="200" width="400" height="60" fill="#b7a27a"/><ellipse cx="200" cy="226" rx="70" ry="12" fill="#6e8fa6" stroke="#cbbd9c" stroke-width="4"/>' +
      '<rect x="196" y="204" width="8" height="20" fill="#cbbd9c"/><g class="hbr-fount"><path d="M200 206q-14 -20 -28 6M200 206q14 -20 28 6M200 206v-18" stroke="#cfeaff" stroke-width="3" fill="none"/></g>' +
      palm(30, 210, 70) + palm(372, 210, 80) +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#4b3b22">PASADENA AND FONTANA</text>',
      sky("hbrs2", "#6fb0ea", "#f7e3be"));
  }

  /* 3. The beat lab: drum machine + 808 speaker */
  function hbrlab() {
    const cols = [ORANGE, BLUE, "#f2c14e", "#e85d75"];
    let pads = ""; for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
      const k = (r * 4 + c) % 4; pads += '<rect x="' + (128 + c * 30) + '" y="' + (138 + r * 22) + '" width="24" height="17" rx="3" fill="#2a2d33"/>' +
        '<rect class="hbr-glow hbr-g' + (k + 1) + '" x="' + (128 + c * 30) + '" y="' + (138 + r * 22) + '" width="24" height="17" rx="3" fill="' + cols[(r + c) % 4] + '"/>'; }
    let wave = ""; for (let x = 0; x < 160; x += 4) wave += '<rect x="' + (128 + x) + '" y="' + (106 - Math.abs(Math.sin(x / 9)) * 12) + '" width="2" height="' + (Math.abs(Math.sin(x / 9)) * 24 + 2) + '" fill="' + BLUE + '"/>';
    const spk = (x) => '<rect x="' + (x - 34) + '" y="96" width="68" height="132" rx="6" fill="#1b1d22" stroke="#3b3f47" stroke-width="2"/>' +
      '<circle cx="' + x + '" cy="128" r="14" fill="#2f333a"/><circle cx="' + x + '" cy="128" r="6" fill="#111"/>' +
      '<g class="hbr-pump"><circle cx="' + x + '" cy="186" r="26" fill="#2f333a" stroke="#555a63" stroke-width="3"/><circle cx="' + x + '" cy="186" r="10" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#14161c"/><rect x="0" y="0" width="400" height="90" fill="#1d2029"/>' +
      [30, 90, 150, 210, 270, 330].map(x => '<rect x="' + x + '" y="10" width="40" height="70" fill="#262a35" stroke="#2f3442"/>').join("") +
      '<rect x="0" y="228" width="400" height="32" fill="#3a2c22"/><rect x="0" y="224" width="400" height="6" fill="#5a4332"/>' +
      spk(52) + spk(348) +
      /* drum machine body */
      '<rect x="110" y="88" width="180" height="140" rx="8" fill="#c9c6bd" stroke="#8a867c" stroke-width="2"/>' +
      '<rect x="122" y="96" width="164" height="22" rx="3" fill="#0d1a24"/>' + wave +
      [130, 152, 174, 196].map(x => '<circle cx="' + (x + 120) + '" cy="' + 126 + '" r="0" fill="none"/>').join("") +
      [250, 266].map(x => '<circle cx="' + x + '" cy="128" r="5" fill="#555"/>').join("") +
      pads +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="13" fill="' + ORANGE + '">808 ROLLING</text>',
      "");
  }

  /* 4. The Tide: surf or drown */
  function hbrtide() {
    return svg(
      '<rect width="400" height="260" fill="url(#hbrs4)"/>' +
      '<circle cx="300" cy="96" r="34" fill="#ffd36b" opacity=".9"/>' +
      '<g class="hbr-bird"><path d="M60 50q6 -6 12 0q6 -6 12 0M100 64q5 -5 10 0q5 -5 10 0" stroke="#2b2b3a" stroke-width="2" fill="none"/></g>' +
      '<rect x="0" y="120" width="400" height="140" fill="#1f5f8b"/>' +
      '<g class="hbr-wv"><path d="M0 132q20 -8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0v8H0z" fill="#2f7fb3"/></g>' +
      /* the big curl */
      '<path d="M0 260V150q60 -10 120 -40q70 -40 140 -30q60 10 70 60q-30 -40 -80 -26q-50 14 -60 60q-10 50 40 86z" fill="#1b6aa0"/>' +
      '<path d="M120 110q70 -40 140 -30q60 10 70 60q-30 -40 -80 -26" fill="none" stroke="#e6f6ff" stroke-width="6" stroke-linecap="round"/>' +
      '<path d="M250 114q-50 14 -60 60q-10 50 40 86h-70q-30 -50 0 -110z" fill="#145785"/>' +
      '<g class="hbr-spl"><circle cx="320" cy="138" r="4" fill="#e6f6ff"/><circle cx="300" cy="128" r="3" fill="#e6f6ff"/></g><g class="hbr-spl hbr-spl2"><circle cx="330" cy="150" r="3" fill="#e6f6ff"/><circle cx="286" cy="120" r="2.5" fill="#e6f6ff"/></g>' +
      /* surfboard riding the face */
      '<g class="hbr-ride"><path d="M130 184q40 -22 92 -14q-40 20 -92 14z" fill="' + ORANGE + '" stroke="#7a3b12" stroke-width="2"/><path d="M140 182q36 -14 74 -10" stroke="' + CREAM + '" stroke-width="2" fill="none"/></g>' +
      '<g class="hbr-wv hbr-wv2"><path d="M0 236q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0v24H0z" fill="#0f4a73"/></g>' +
      '<text x="200" y="40" text-anchor="middle" ' + font + ' font-size="18" fill="#fff" stroke="#16324a" stroke-width="3" paint-order="stroke">SURF OR DROWN</text>',
      sky("hbrs4", "#f39a5d", "#ffe0a8"));
  }

  /* 5. Arrow Blvd and Sierra Ave, the Arrowhead behind */
  function hbrcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#hbrs5)"/>' + cloud(90, 26, "hbr-cld") +
      /* San Bernardino Mountains with the Arrowhead */
      '<path d="M0 126l40 -30l40 10l50 -44l46 24l40 -30l50 30l44 -22l50 34l40 -14v42H0z" fill="#8a7d72"/>' +
      '<path d="M194 84l12 6l12 -6l-12 36z" fill="#d9cbb0" stroke="#bfae8f"/>' +
      '<path d="M0 126h400v12H0z" fill="#a89a84"/>' +
      palm(30, 150, 104) + palm(372, 150, 92) +
      /* wall */
      '<rect x="56" y="136" width="288" height="84" fill="#e9dfcc"/><rect x="56" y="136" width="288" height="6" fill="#c7b796"/>' +
      tag("HIT-BOY", 84, 192, 38, BLUE, -5) + tag("SURF OR DROWN", 98, 212, 13, ORANGE, -3) + tag("TONY", 262, 172, 16, CREAM, -9) +
      '<g class="hbr-spray"><path d="M318 200v-26" stroke="' + ORANGE + '" stroke-width="5" stroke-linecap="round"/></g>' +
      /* street */
      '<rect x="0" y="220" width="400" height="10" fill="#cac2ae"/><rect x="0" y="230" width="400" height="30" fill="#4a4c52"/><path d="M0 246h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="hbr-car"><rect x="0" y="234" width="62" height="12" rx="4" fill="#6a1f8a"/><path d="M12 234l8 -7h22l8 7z" fill="#6a1f8a"/><circle cx="14" cy="248" r="5" fill="#111"/><circle cx="14" cy="248" r="2.5" fill="#e8c35a"/><circle cx="48" cy="248" r="5" fill="#111"/><circle cx="48" cy="248" r="2.5" fill="#e8c35a"/></g>' +
      /* sign pole */
      '<rect x="356" y="38" width="5" height="182" fill="#7d8288"/>' + sign(226, 40, 156, "W Arrow Blvd", 13) + sign(226, 66, 156, "Sierra Ave", 13),
      sky("hbrs5", "#8fc2ec", "#f5e2bd"));
  }

  window.SCENES = { hbrstation, hbrcityhall, hbrlab, hbrtide, hbrcorner };
})();
