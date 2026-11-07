/* babyfaceray scenes (Regions tab: Detroit; east side, Seven Mile). CSS classes prefixed br- (the page's own anim-train is kept).
   1 DDOT Route 7 Seven Mile pulling up to the 7 Mile & Gratiot stop on the east side, a party store and flats at night.
   2 The home studio: he set up a studio in his house and learned to engineer his own sessions. Monitors, mic, waveform, WAVY GANG on the wall.
   3 The jeweler's counter ("Waves On Every Chain", "I had to visit my jeweler" from Masterpiece): glass case, chains, sparkles.
   4 Coleman A. Young (City Airport) on the east side off Gratiot: the little terminal tower, a private jet taxiing (Fly Gods, "We on G6s").
   5 E 7 Mile Rd and Gratiot Ave: green signs, BABYFACE RAY tagged, the downtown skyline far down Gratiot behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes brflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.br-flk{animation:brflick 2.4s infinite}.br-flk2{animation-delay:.8s}' +
    '@keyframes brwave{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1)}}.br-wv{transform-box:fill-box;transform-origin:50% 50%;animation:brwave .7s ease-in-out infinite}.br-wv2{animation-delay:-.35s}.br-wv3{animation-delay:-.2s}' +
    '@keyframes brglint{0%,100%{opacity:0;transform:scale(.4)}50%{opacity:1;transform:scale(1)}}.br-gl{transform-box:fill-box;transform-origin:50% 50%;animation:brglint 1.4s ease-in-out infinite}.br-gl2{animation-delay:-.7s}.br-gl3{animation-delay:-.35s}' +
    '@keyframes brjet{0%{transform:translateX(-60px)}100%{transform:translateX(120px)}}.br-jet{animation:brjet 6s ease-in-out infinite alternate}' +
    '@keyframes brbeacon{0%,100%{opacity:1}50%{opacity:.15}}.br-bc{animation:brbeacon 1s steps(1) infinite}' +
    '@keyframes brcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.br-car{animation:brcar 6s linear infinite}.br-car2{animation-delay:-3s}' +
    '@keyframes brsp{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(16px,-24px);opacity:0}}.br-sp{animation:brsp 1.3s ease-out infinite}.br-sp2{animation-delay:-.6s}' +
    '@keyframes brtw{0%,100%{opacity:.25}50%{opacity:1}}.br-tw{animation:brtw 1.6s ease-in-out infinite}.br-tw2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const DDOT = "#0b6e4f", WAVE = "#5fd3ff", VIO = "#b07cff", GOLD = "#ffd166";
  const win = (x, y, w, h, lit) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (lit ? "#ffd98a" : "#2a2a36") + '" stroke="#e8e0cc" stroke-width="1.5"/><path d="M' + (x + w / 2) + ' ' + y + 'v' + h + 'M' + x + ' ' + (y + h / 2) + 'h' + w + '" stroke="#e8e0cc" stroke-width="1"/>';
  const wavy = (x, y, w, c, sw) => { let d = 'M' + x + ' ' + y; for (let i = 0; i < w; i += 12) d += 'q3 -5 6 0t6 0'; return '<path d="' + d + '" stroke="' + c + '" stroke-width="' + (sw || 2) + '" fill="none"/>'; };

  /* 1. DDOT 7 Seven Mile at 7 Mile & Gratiot */
  function brstation() {
    const flat = (x, c) => '<rect x="' + x + '" y="62" width="84" height="84" fill="' + c + '"/><rect x="' + (x - 3) + '" y="58" width="90" height="6" fill="#3a2e2a"/>' +
      win(x + 10, 72, 22, 22, true) + win(x + 52, 72, 22, 22, false) + win(x + 10, 106, 22, 22, false) + win(x + 52, 106, 22, 22, true);
    const store = '<rect x="268" y="70" width="132" height="76" fill="#d8d0bc"/><rect x="268" y="66" width="132" height="8" fill="#1f3a8a"/>' +
      '<rect x="330" y="80" width="68" height="18" fill="#111"/><text x="364" y="93" text-anchor="middle" ' + font + ' font-size="8.5" fill="' + WAVE + '" class="br-flk">PARTY STORE</text>' +
      '<rect x="338" y="104" width="24" height="42" fill="#3a2a20"/><rect x="366" y="104" width="28" height="34" fill="#ffd98a" opacity=".8"/>';
    const bus = '<g class="anim-train"><rect x="34" y="104" width="250" height="74" rx="10" fill="#f4f4f0" stroke="#6b6f73" stroke-width="2"/>' +
      '<rect x="34" y="154" width="250" height="14" fill="' + DDOT + '"/><rect x="34" y="150" width="250" height="4" fill="#ffcc33"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (74 + i * 40) + '" y="114" width="32" height="28" rx="3" fill="#24323c"/>').join("") +
      '<rect x="38" y="112" width="30" height="56" rx="3" fill="#2c3a44"/><path d="M53 112v56" stroke="#8a9096"/>' +
      '<rect x="38" y="106" width="64" height="8" rx="2" fill="#111"/><text x="70" y="112.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffcc33">7 SEVEN MILE</text>' +
      '<circle cx="80" cy="180" r="13" fill="#1a1a1a"/><circle cx="80" cy="180" r="5" fill="#888"/><circle cx="240" cy="180" r="13" fill="#1a1a1a"/><circle cx="240" cy="180" r="5" fill="#888"/>' +
      '<circle cx="36" cy="162" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#brs1)"/>' +
      '<circle cx="60" cy="30" r="1.4" fill="#fff" class="br-tw"/><circle cx="150" cy="18" r="1.2" fill="#fff" class="br-tw br-tw2"/><circle cx="250" cy="26" r="1.3" fill="#fff" class="br-tw"/><circle cx="340" cy="34" r="12" fill="#f4eccf"/>' +
      flat(4, "#5a4a6a") + flat(96, "#6e5a48") + flat(188, "#4e4a5e") + store +
      '<rect x="0" y="146" width="400" height="46" fill="#a9a59c"/><rect x="0" y="190" width="400" height="6" fill="#d8d4cb"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3f4148"/><path d="M0 230h400" stroke="#ffd36b" stroke-width="2" stroke-dasharray="16 12"/>' +
      bus + car("br-car", 0, 238, VIO) + car("br-car br-car2", 0, 238, "#d6d6d6") +
      '<rect x="306" y="100" width="5" height="92" fill="#555"/><rect x="290" y="88" width="38" height="22" rx="3" fill="' + DDOT + '" stroke="#fff" stroke-width="1.5"/><text x="309" y="103" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUS</text>' +
      '<rect x="292" y="114" width="34" height="14" rx="3" fill="#ffcc33"/><text x="309" y="125" text-anchor="middle" ' + font + ' font-size="10" fill="#111">6 7 68</text>' +
      '<rect x="216" y="200" width="174" height="26" rx="3" fill="#111"/><text x="226" y="218" ' + font + ' font-size="14" fill="#fff">7 Mile &amp; Gratiot</text>' +
      '<rect x="364" y="205" width="20" height="16" rx="3" fill="' + DDOT + '"/><text x="374" y="217" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">7</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">DDOT ROUTE 7 · SEVEN MILE · EAST SIDE</text>',
      sky("brs1", "#0a0f2e", "#5a3a7a"));
  }

  /* 2. The home studio, where he engineers his own sessions */
  function brstudio() {
    const bars = [10, 22, 34, 18, 28, 40, 24, 14, 30, 20, 36, 16, 26, 12];
    return svg(
      '<rect width="400" height="260" fill="#141a2e"/>' +
      Array.from({ length: 8 }, (_, i) => Array.from({ length: 5 }, (_, j) => '<path d="M' + (i * 50 + (j % 2) * 25) + ' ' + (j * 30) + 'l12 15l-12 15l-12 -15z" fill="#1c2440"/>').join("")).join("") +
      '<rect x="240" y="20" width="140" height="50" rx="4" fill="#0a0f1e" stroke="' + WAVE + '" stroke-width="2"/>' + tag("WAVY GANG", 252, 54, 20, WAVE, -3) +
      '<rect x="0" y="190" width="400" height="70" fill="#2a2030"/>' +
      /* desk, screen with waveform, speakers */
      '<rect x="30" y="160" width="300" height="30" fill="#1a1a1a"/><rect x="40" y="152" width="280" height="10" fill="#333"/>' +
      Array.from({ length: 16 }, (_, i) => '<rect x="' + (48 + i * 17) + '" y="154" width="6" height="6" rx="1" fill="' + (i % 3 ? "#666" : GOLD) + '"/>').join("") +
      '<rect x="100" y="70" width="160" height="80" rx="4" fill="#0a0f1e" stroke="#555" stroke-width="3"/>' +
      '<g transform="translate(180 110)">' + bars.map((h, i) => '<rect x="' + (i * 10 - 68) + '" y="' + (-h) + '" width="6" height="' + (h * 2) + '" fill="' + (i % 2 ? WAVE : VIO) + '" class="br-wv' + (i % 3 === 1 ? " br-wv2" : i % 3 === 2 ? " br-wv3" : "") + '"/>').join("") + '</g>' +
      '<text x="108" y="82" ' + font + ' font-size="7" fill="#9aa3ad">REC ● FACE_FINAL_v7</text>' +
      '<rect x="40" y="96" width="44" height="58" rx="4" fill="#1a1a1a"/><circle cx="62" cy="136" r="12" fill="#333" stroke="#555"/><circle cx="62" cy="110" r="6" fill="#333"/>' +
      '<rect x="276" y="96" width="44" height="58" rx="4" fill="#1a1a1a"/><circle cx="298" cy="136" r="12" fill="#333" stroke="#555"/><circle cx="298" cy="110" r="6" fill="#333"/>' +
      '<rect x="356" y="96" width="4" height="120" fill="#888"/><rect x="344" y="214" width="28" height="4" fill="#888"/><rect x="348" y="78" width="20" height="30" rx="10" fill="#c9c2b0"/><circle cx="358" cy="93" r="22" fill="none" stroke="' + VIO + '" stroke-width="3" opacity=".5"/>' +
      '<circle cx="250" cy="82" r="3" fill="#e8402a" class="br-flk"/>' +
      '<rect x="100" y="228" width="200" height="22" rx="3" fill="#111"/><text x="200" y="243" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">ENGINEERS HIS OWN SESSIONS</text>');
  }

  /* 3. The jeweler's counter: waves on every chain */
  function brjeweler() {
    const chain = (x, c, len) => { let o = ''; for (let i = 0; i < len; i++) o += '<ellipse cx="' + (x + Math.sin(i / 2) * 4) + '" cy="' + (64 + i * 6) + '" rx="3.2" ry="4" fill="none" stroke="' + c + '" stroke-width="2"/>'; return o; };
    const glint = (x, y, cls) => '<path class="br-gl ' + (cls || "") + '" d="M' + x + ' ' + (y - 7) + 'l2 5l5 2l-5 2l-2 5l-2 -5l-5 -2l5 -2z" fill="#fff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#brs3)"/>' +
      '<rect x="0" y="40" width="400" height="6" fill="' + GOLD + '" opacity=".6"/>' +
      '<rect x="40" y="50" width="320" height="10" fill="#2a2a3a"/>' +
      chain(80, GOLD, 14) + chain(130, "#e8ecf2", 16) + chain(180, GOLD, 12) + chain(230, "#e8ecf2", 15) + chain(280, GOLD, 13) + chain(320, WAVE, 14) +
      '<path d="M120 158q-6 10 0 20h20q6 -10 0 -20z" fill="' + WAVE + '" stroke="#fff" stroke-width="1.5"/><path d="M270 150l12 14l-12 16l-12 -16z" fill="#e8ecf2" stroke="' + WAVE + '" stroke-width="1.5"/>' +
      '<rect x="20" y="150" width="360" height="60" fill="#1a2a3a" opacity=".55" stroke="#e8ecf2" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (40 + i * 66) + '" y="186" width="50" height="14" rx="3" fill="#2a1a3a"/>' + wavy(44 + i * 66, 193, 40, i % 2 ? GOLD : WAVE, 2)).join("") +
      '<rect x="20" y="210" width="360" height="20" fill="#2a1a2a"/><rect x="0" y="230" width="400" height="30" fill="#140c18"/>' +
      glint(86, 70) + glint(134, 100, "br-gl2") + glint(232, 80, "br-gl3") + glint(284, 110) + glint(324, 74, "br-gl2") + glint(270, 164, "br-gl3") + glint(126, 168) +
      '<rect x="110" y="234" width="180" height="20" rx="3" fill="#111"/><text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">WAVES ON EVERY CHAIN</text>',
      sky("brs3", "#1a1030", "#3a2050"));
  }

  /* 4. City Airport on the east side: the terminal tower and a private jet */
  function brairport() {
    const jet = '<g class="br-jet"><path d="M60 170h120q22 0 30 8q-8 8 -30 8h-120q-10 0 -14 -8q4 -8 14 -8z" fill="#f4f4f0" stroke="#8a9096" stroke-width="1.5"/>' +
      '<path d="M66 170l-14 -24h12l22 24z" fill="#e8ecf2" stroke="#8a9096"/><path d="M110 184l30 18h12l-16 -18z" fill="#d8dde3" stroke="#8a9096"/>' +
      Array.from({ length: 6 }, (_, i) => '<circle cx="' + (100 + i * 14) + '" cy="176" r="2.6" fill="#24323c"/>').join("") +
      '<path d="M196 174h10" stroke="#24323c" stroke-width="3"/>' + wavy(70, 181, 100, VIO, 2) +
      '<circle cx="90" cy="190" r="3.5" fill="#222"/><circle cx="180" cy="190" r="3.5" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#brs4)"/>' +
      '<rect x="0" y="110" width="400" height="40" fill="#5a6a7a"/>' +
      '<rect x="230" y="70" width="120" height="70" fill="#c9c2b0"/><rect x="230" y="64" width="120" height="8" fill="#8a8478"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (238 + i * 19) + '" y="82" width="12" height="40" fill="#3a5a7a"/>').join("") +
      '<rect x="300" y="20" width="22" height="50" fill="#c9c2b0"/><rect x="292" y="6" width="38" height="18" fill="#3a5a7a" stroke="#c9c2b0" stroke-width="3"/><rect x="309" y="0" width="4" height="8" fill="#888"/><circle cx="311" cy="0" r="3" fill="#e8402a" class="br-bc"/>' +
      '<text x="290" y="136" text-anchor="middle" ' + font + ' font-size="8" fill="#3a3a3a">CITY AIRPORT</text>' +
      '<rect x="0" y="150" width="400" height="110" fill="#4a4c52"/><path d="M0 200h400" stroke="#fff" stroke-width="3" stroke-dasharray="24 16"/>' +
      jet +
      Array.from({ length: 10 }, (_, i) => '<circle cx="' + (20 + i * 40) + '" cy="226" r="2.5" fill="' + (i % 2 ? WAVE : GOLD) + '" class="br-bc"/>').join("") +
      '<rect x="100" y="234" width="200" height="20" rx="3" fill="#111"/><text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">WE ON G6s · OVER THE CLOUDS</text>',
      sky("brs4", "#ff9a6a", "#ffd8a8"));
  }

  /* 5. E 7 Mile Rd and Gratiot Ave, the skyline far down Gratiot */
  function brcorner() {
    const sky1 = '<g fill="#2a2440" opacity=".9"><rect x="150" y="70" width="18" height="60"/><rect x="172" y="50" width="16" height="80"/><rect x="192" y="34" width="22" height="96"/><circle cx="203" cy="34" r="11"/><rect x="218" y="56" width="18" height="74"/><rect x="240" y="44" width="14" height="86"/><path d="M240 44l7 -12l7 12z"/><rect x="258" y="66" width="20" height="64"/></g>' +
      Array.from({ length: 18 }, (_, i) => '<rect x="' + (152 + (i * 23) % 124) + '" y="' + (60 + (i * 17) % 60) + '" width="3" height="3" fill="#ffd98a" class="br-tw' + (i % 2 ? " br-tw2" : "") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#brs5)"/>' + sky1 +
      '<rect x="0" y="130" width="400" height="94" fill="#3a3a5a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#2e2e4a" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#2e2e4a" stroke-width="1"/>').join("")).join("") +
      tag("BABYFACE RAY", 14, 184, 29, WAVE, -6) + tag("WAVY GANG", 22, 214, 16, VIO, -3) + tag("TEAM EASTSIDE", 140, 216, 15, GOLD, -4) +
      '<g class="br-sp"><circle cx="246" cy="160" r="3" fill="' + WAVE + '" opacity=".7"/></g><g class="br-sp br-sp2"><circle cx="252" cy="152" r="2" fill="' + WAVE + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="340" y="104" width="6" height="120" fill="#2f2f2f"/>' + sign(286, 112, 112, "E 7 Mile Rd") + sign(286, 138, 112, "Gratiot Ave") +
      '<rect x="392" y="200" width="4" height="24" fill="#222"/>',
      sky("brs5", "#0e0a2a", "#6a3a8a"));
  }

  window.SCENES = { brstation: brstation, brstudio: brstudio, brjeweler: brjeweler, brairport: brairport, brcorner: brcorner };
})();
