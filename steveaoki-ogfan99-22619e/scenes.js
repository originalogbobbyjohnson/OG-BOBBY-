/* Steve Aoki game (GENRES: EDM + DANCE; region: LOS ANGELES + SOCAL; Newport Beach, California).
   Rooms: OCTA Route 1 on Pacific Coast Hwy at Balboa Blvd, Newport Harbor High (class of '95, varsity badminton),
   the Pickle Patch (his Isla Vista co-op room at UC Santa Barbara where the DIY shows and Dim Mak started),
   a festival stage with a cake flying into the crowd, and Balboa Blvd at Main St with the Balboa Pavilion behind.
   CSS classes prefixed "aok" (the page's anim-train is kept for the bus). No logos, no faces, no 9s. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes aokTw{0%,100%{opacity:1}50%{opacity:.2}}.aokTw{animation:aokTw 1.4s ease-in-out infinite}.aokT2{animation-delay:.45s}.aokT3{animation-delay:.9s}' +
    '@keyframes aokBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.aokBob{animation:aokBob .6s ease-in-out infinite}.aokBb2{animation-delay:.3s}' +
    '@keyframes aokPalm{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.aokPalm{transform-box:fill-box;transform-origin:50% 100%;animation:aokPalm 3s ease-in-out infinite}' +
    '@keyframes aokBird{0%{transform:translate(-80px,20px) rotate(0)}50%{transform:translate(220px,-40px) rotate(180deg)}100%{transform:translate(480px,30px) rotate(360deg)}}.aokBird{transform-box:fill-box;transform-origin:50% 50%;animation:aokBird 4s linear infinite}' +
    '@keyframes aokCake{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-150px,60px) rotate(-200deg)}}.aokCake{transform-box:fill-box;transform-origin:50% 50%;animation:aokCake 2.4s ease-in infinite}' +
    '@keyframes aokBeam{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.aokBeam{transform-box:fill-box;transform-origin:50% 100%;animation:aokBeam 3.2s ease-in-out infinite}.aokBm2{animation-delay:-1.6s}' +
    '@keyframes aokWheel{to{transform:rotate(360deg)}}.aokWheel{transform-origin:84px 96px;animation:aokWheel 14s linear infinite}' +
    '@keyframes aokWave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.aokWave{animation:aokWave 3s ease-in-out infinite}' +
    '@keyframes aokAmp{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}.aokAmp{transform-box:fill-box;transform-origin:50% 50%;animation:aokAmp .4s ease-in-out infinite}' +
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
  const PNK = "#ff3fa4", CYN = "#2ee6ff", YEL = "#ffe14d", OCB = "#0b5fa5";
  const stars = (n, y0, y1) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = (i * 73 + 17) % 400, y = y0 + ((i * 37) % (y1 - y0));
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (i % 3 ? 0.9 : 1.5) + '" fill="#fff" class="aokTw' + (i % 3 === 1 ? ' aokT2' : i % 3 === 2 ? ' aokT3' : '') + '"/>';
    }
    return s;
  };
  const crowd = (y, n, fill) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = 6 + i * (400 / n), up = i % 3 === 0;
      s += '<g class="aokBob' + (i % 2 ? ' aokBb2' : '') + '" fill="' + fill + '"><circle cx="' + x + '" cy="' + (y - 14) + '" r="5.5"/><rect x="' + (x - 6) + '" y="' + (y - 9) + '" width="12" height="22" rx="5"/>' +
        (up ? '<path d="M' + (x + 4) + ' ' + (y - 6) + 'l7 -15M' + (x - 4) + ' ' + (y - 6) + 'l-7 -15" stroke="' + fill + '" stroke-width="3" stroke-linecap="round"/>' : '') + '</g>';
    }
    return s;
  };
  const palm = (x, y, h, cls) => '<g class="aokPalm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q6 -' + (h / 2) + ' 0 -' + h + '" stroke="#7a5a3a" stroke-width="6" fill="none"/>' +
    '<g fill="#2f8a4a"><path d="M' + x + ' ' + (y - h) + 'q-26 -6 -40 10q20 -14 40 -10z"/><path d="M' + x + ' ' + (y - h) + 'q26 -6 40 10q-20 -14 -40 -10z"/><path d="M' + x + ' ' + (y - h) + 'q-18 -20 -36 -16q20 0 36 16z"/><path d="M' + x + ' ' + (y - h) + 'q18 -20 36 -16q-20 0 -36 16z"/><path d="M' + x + ' ' + (y - h) + 'q-2 -24 6 -30q-4 12 -6 30z"/></g></g>';
  const cake = (x, y, cls) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="30" height="18" rx="3" fill="#fff4e0" stroke="#c98a5a" stroke-width="2"/><path d="M' + x + ' ' + (y + 5) + 'q7 5 15 0t15 0" stroke="' + PNK + '" stroke-width="3" fill="none"/><rect x="' + (x + 13) + '" y="' + (y - 8) + '" width="4" height="8" fill="' + CYN + '"/><path d="M' + (x + 15) + ' ' + (y - 13) + 'q3 3 0 5q-3 -2 0 -5z" fill="' + YEL + '"/></g>';

  /* 1. OCTA Route 1 on Pacific Coast Hwy at Balboa Blvd: blue-and-white bus pulling in, stop sign with the route 1 bullet, palms, ocean haze */
  function aokbus() {
    let wins = "";
    for (let x = 44; x < 270; x += 30) wins += '<rect x="' + x + '" y="134" width="24" height="22" rx="2" fill="#1d2a3a"/>';
    const bus = '<g class="anim-train">' +
      '<rect x="24" y="120" width="290" height="70" rx="10" fill="#f4f6f8" stroke="#1a2a3a" stroke-width="2"/>' +
      '<rect x="24" y="160" width="290" height="14" fill="' + OCB + '"/><rect x="24" y="174" width="290" height="4" fill="' + CYN + '"/>' +
      wins + '<path d="M286 128h22q4 0 4 6v26h-26z" fill="#1d2a3a"/>' +
      '<rect x="288" y="122" width="24" height="8" rx="2" fill="#111"/><text x="300" y="129" text-anchor="middle" ' + F + ' font-size="7" fill="' + YEL + '">1</text>' +
      '<rect x="306" y="178" width="8" height="5" fill="#fff6c4"/>' +
      '<g fill="#111"><circle cx="74" cy="192" r="10"/><circle cx="262" cy="192" r="10"/></g><g fill="#888"><circle cx="74" cy="192" r="4"/><circle cx="262" cy="192" r="4"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#aoks1)"/>' +
      '<rect x="0" y="96" width="400" height="12" fill="#7ab8d8"/>' +
      palm(30, 120, 76, "") + palm(370, 118, 84, "aokBb2") + palm(160, 112, 60, "aokBb2") +
      /* bus stop sign */
      '<rect x="350" y="70" width="5" height="132" fill="#4a4a4a"/>' +
      '<rect x="318" y="62" width="70" height="40" rx="4" fill="' + OCB + '" stroke="#fff" stroke-width="2"/>' +
      '<circle cx="334" cy="82" r="11" fill="#fff"/><text x="334" y="87" text-anchor="middle" ' + F + ' font-size="14" fill="' + OCB + '">1</text>' +
      '<text x="368" y="78" text-anchor="middle" ' + F + ' font-size="8" fill="#fff">OCTA</text><text x="368" y="91" text-anchor="middle" ' + F + ' font-size="8" fill="#fff">STOP</text>' +
      '<rect x="20" y="40" width="190" height="24" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="115" y="57" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">Pacific Coast Hwy &amp; Balboa</text>' +
      bus +
      '<rect x="0" y="200" width="400" height="60" fill="#55575c"/><rect x="0" y="198" width="400" height="6" fill="#d8d4c8"/>' +
      '<path d="M0 236h400" stroke="#f4d03a" stroke-width="3" stroke-dasharray="20 14"/>' +
      '<g fill="#2b3644"><circle cx="380" cy="212" r="5"/><rect x="374" y="217" width="12" height="22" rx="4"/></g>',
      sky("aoks1", "#7cc4f0", "#f4e6c8"));
  }

  /* 2. Newport Harbor High: white Spanish-style building, red tile roof, the clock tower, a shuttlecock flying over a badminton net */
  function aokschool() {
    let arches = "";
    for (let x = 60; x < 360; x += 34) { if (x > 160 && x < 240) continue; arches += '<path d="M' + x + ' 196v-22a10 10 0 0 1 20 0v22z" fill="#5a4a3a"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#aoks2)"/>' +
      '<g fill="#fff" opacity=".9"><path d="M40 40q10 -12 22 -4q10 -10 20 2q12 0 10 10h-56q-4 -6 4 -8z"/><path d="M300 30q10 -12 22 -4q10 -10 20 2q12 0 10 10h-56q-4 -6 4 -8z"/></g>' +
      palm(24, 160, 90, "") + palm(380, 160, 96, "aokBb2") +
      /* main building */
      '<rect x="40" y="140" width="320" height="58" fill="#f6f1e6"/>' +
      '<path d="M32 140h336l-14 -16H46z" fill="#c4553a"/>' + arches +
      /* clock tower */
      '<rect x="168" y="70" width="64" height="128" fill="#f6f1e6" stroke="#d8cdb8" stroke-width="2"/>' +
      '<path d="M160 70h80l-40 -32z" fill="#c4553a"/>' +
      '<circle cx="200" cy="96" r="14" fill="#fff" stroke="#2a2a2a" stroke-width="2"/><path d="M200 96v-9M200 96h7" stroke="#2a2a2a" stroke-width="2"/>' +
      '<path d="M186 196v-40a14 14 0 0 1 28 0v40z" fill="#5a4a3a"/>' +
      '<rect x="180" y="122" width="40" height="10" fill="' + OCB + '"/><text x="200" y="130" text-anchor="middle" ' + F + ' font-size="7" fill="#fff">SAILORS</text>' +
      /* lawn and badminton net */
      '<rect x="0" y="198" width="400" height="62" fill="#4fa04a"/>' +
      '<path d="M120 246V212M280 246V212" stroke="#444" stroke-width="3"/><path d="M120 214h160v14H120z" fill="none" stroke="#fff" stroke-width="1"/>' +
      '<path d="M120 218h160M120 222h160M120 226h160" stroke="#fff" stroke-width=".6" opacity=".7"/>' +
      '<g class="aokBird"><path d="M130 180l10 -6l-2 10z" fill="#fff" stroke="#888" stroke-width="1"/><circle cx="141" cy="179" r="3" fill="' + PNK + '"/></g>',
      sky("aoks2", "#7cc4f0", "#f0f6fa"));
  }

  /* 3. The Pickle Patch: the Isla Vista co-op room, a DIY show, amp and drum kit, records and flyers on the wall */
  function aokpatch() {
    let flyers = "";
    const fc = [PNK, YEL, CYN, "#fff", PNK, YEL];
    for (let i = 0; i < 6; i++) flyers += '<rect x="' + (30 + i * 58) + '" y="' + (30 + (i % 2) * 14) + '" width="40" height="52" fill="' + fc[i] + '" transform="rotate(' + ((i % 3) - 1) * 6 + ' ' + (50 + i * 58) + ' 56)"/>' +
      '<path d="M' + (36 + i * 58) + ' ' + (46 + (i % 2) * 14) + 'h28M' + (36 + i * 58) + ' ' + (56 + (i % 2) * 14) + 'h20" stroke="#111" stroke-width="3" transform="rotate(' + ((i % 3) - 1) * 6 + ' ' + (50 + i * 58) + ' 56)"/>';
    return svg(
      '<rect width="400" height="260" fill="#3a2a22"/>' +
      '<rect x="0" y="0" width="400" height="160" fill="#5a4636"/>' + flyers +
      /* a string of bulbs */
      '<path d="M0 100q100 20 200 0t200 0" stroke="#222" stroke-width="2" fill="none"/>' +
      '<g fill="' + YEL + '"><circle cx="40" cy="106" r="4" class="aokTw"/><circle cx="100" cy="110" r="4" class="aokTw aokT2"/><circle cx="160" cy="104" r="4" class="aokTw aokT3"/><circle cx="240" cy="96" r="4" class="aokTw"/><circle cx="300" cy="94" r="4" class="aokTw aokT2"/><circle cx="360" cy="98" r="4" class="aokTw aokT3"/></g>' +
      /* the band corner: amp, drum kit */
      '<rect x="40" y="130" width="60" height="58" rx="3" fill="#1d1d22" stroke="#555" stroke-width="2"/><circle cx="70" cy="162" r="18" fill="#2a2a30" stroke="#777" stroke-width="2" class="aokAmp"/>' +
      '<ellipse cx="300" cy="172" rx="30" ry="22" fill="' + PNK + '" stroke="#222" stroke-width="2"/><ellipse cx="300" cy="172" rx="20" ry="14" fill="#f4f0e4"/>' +
      '<path d="M262 124l26 4M338 122l-26 6" stroke="#c9a24a" stroke-width="4"/><path d="M275 126v40M325 125v40" stroke="#666" stroke-width="2"/>' +
      /* a turntable on a crate */
      '<rect x="150" y="150" width="100" height="40" fill="#6a4a2e"/><rect x="156" y="136" width="88" height="16" rx="2" fill="#2a2d36"/><circle cx="190" cy="144" r="6" fill="#111"/><circle cx="190" cy="144" r="2" fill="' + CYN + '"/>' +
      '<g fill="#111"><rect x="160" y="160" width="4" height="22"/><rect x="168" y="160" width="4" height="22"/><rect x="176" y="160" width="4" height="22"/><rect x="226" y="160" width="4" height="22"/><rect x="234" y="160" width="4" height="22"/></g>' +
      '<rect x="0" y="188" width="400" height="72" fill="#7a5a3a"/><path d="M0 210h400M0 234h400" stroke="#6a4a2e" stroke-width="2"/>' +
      crowd(258, 18, "#140e0a"),
      '');
  }

  /* 4. The festival stage: lights, a cake flying off the stage into a jumping crowd */
  function aokstage() {
    return svg(
      '<rect width="400" height="260" fill="url(#aoks4)"/>' + stars(26, 6, 70) +
      '<path class="aokBeam" d="M80 150L56 0h48z" fill="' + PNK + '" opacity=".25"/><path class="aokBeam aokBm2" d="M320 150L296 0h48z" fill="' + CYN + '" opacity=".25"/>' +
      '<path class="aokBeam aokBm2" d="M200 140L180 0h40z" fill="' + YEL + '" opacity=".2"/>' +
      /* stage and LED wall */
      '<rect x="60" y="40" width="280" height="90" rx="4" fill="#120c24" stroke="#3a2a5a" stroke-width="3"/>' +
      '<g fill="' + PNK + '" class="aokTw"><rect x="74" y="54" width="14" height="14"/><rect x="134" y="84" width="14" height="14"/><rect x="254" y="54" width="14" height="14"/><rect x="314" y="96" width="14" height="14"/></g>' +
      '<g fill="' + CYN + '" class="aokTw aokT2"><rect x="104" y="96" width="14" height="14"/><rect x="194" y="54" width="14" height="14"/><rect x="284" y="84" width="14" height="14"/></g>' +
      '<g fill="' + YEL + '" class="aokTw aokT3"><rect x="164" y="104" width="14" height="14"/><rect x="224" y="94" width="14" height="14"/></g>' +
      '<rect x="20" y="130" width="360" height="40" fill="#22222a"/><rect x="20" y="128" width="360" height="5" fill="' + PNK + '"/>' +
      '<rect x="150" y="110" width="100" height="22" rx="3" fill="#1d2030" stroke="#5a5e6a" stroke-width="2"/><circle cx="174" cy="121" r="7" fill="#111"/><circle cx="226" cy="121" r="7" fill="#111"/>' +
      /* a big flying cake */
      cake(260, 100, "aokCake") +
      crowd(258, 22, "#0b0816") + crowd(236, 16, "#1a1330"),
      sky("aoks4", "#0a0820", "#3a1a4a"));
  }

  /* 5. Balboa Blvd at Main St: green street signs, the AOKI wall, the white Balboa Pavilion with its cupola, the Fun Zone wheel */
  function aokcorner() {
    let spokes = "";
    for (let a = 0; a < 360; a += 30) { const r = a * Math.PI / 180; spokes += '<path d="M84 96L' + (84 + 40 * Math.cos(r)).toFixed(1) + ' ' + (96 + 40 * Math.sin(r)).toFixed(1) + '" stroke="#f4f4f4" stroke-width="1.5"/><rect x="' + (78 + 40 * Math.cos(r)).toFixed(1) + '" y="' + (92 + 40 * Math.sin(r)).toFixed(1) + '" width="12" height="9" rx="2" fill="' + [PNK, CYN, YEL][(a / 30) % 3] + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#aoks5)"/>' +
      /* Fun Zone wheel */
      '<g class="aokWheel"><circle cx="84" cy="96" r="40" fill="none" stroke="#f4f4f4" stroke-width="3"/>' + spokes + '</g>' +
      '<path d="M84 96l-24 64M84 96l24 64" stroke="#e8e8e8" stroke-width="4"/>' +
      /* Balboa Pavilion: long white Victorian hall, red roof, cupola with a small spire */
      '<rect x="150" y="100" width="190" height="60" fill="#f8f6f0" stroke="#c8c4b8" stroke-width="2"/>' +
      '<path d="M144 100h202l-16 -18H160z" fill="#c4553a"/>' +
      '<rect x="222" y="54" width="46" height="30" fill="#f8f6f0" stroke="#c8c4b8" stroke-width="2"/>' +
      '<path d="M216 54h58l-29 -24z" fill="#c4553a"/><rect x="244" y="18" width="2" height="12" fill="#555"/>' +
      '<g fill="#3a4a5a"><rect x="230" y="62" width="8" height="14"/><rect x="252" y="62" width="8" height="14"/></g>' +
      '<g fill="#5a7a9a">' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (160 + i * 22) + '" y="112" width="12" height="18"/>').join("") + '</g>' +
      palm(370, 160, 100, "aokBb2") +
      /* the tagged wall */
      '<rect x="0" y="160" width="400" height="48" fill="#2a3a5a"/>' +
      '<path d="M0 174h400M0 188h400" stroke="#23314c" stroke-width="1"/>' +
      tag("DIM MAK", 10, 182, 16, CYN, -4) +
      tag("AOKI", 140, 204, 42, PNK, -4) +
      tag("CAKE FACE", 270, 188, 15, YEL, -6) +
      '<rect x="0" y="208" width="400" height="52" fill="#55575c"/><rect x="0" y="206" width="400" height="4" fill="#d8d4c8"/>' +
      '<path d="M0 238h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
            /* green street name signs */
      '<rect x="384" y="22" width="5" height="186" fill="#4a4a4a"/>' +
      '<rect x="276" y="20" width="122" height="24" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="337" y="37" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">Balboa Blvd</text>' +
      '<rect x="276" y="48" width="104" height="24" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="328" y="65" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">Main St</text>',
      sky("aoks5", "#7cc4f0", "#f4e6c8"));
  }

  window.SCENES = { aokbus, aokschool, aokpatch, aokstage, aokcorner };
})();
