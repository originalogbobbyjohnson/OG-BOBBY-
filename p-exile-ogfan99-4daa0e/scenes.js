/* exile producer scenes */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-2.4s}.car3{animation-delay:-4.8s}' +
    '@keyframes carsL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}.bl4{animation-delay:1.05s}' +
    '@keyframes pad{0%,70%,100%{opacity:.25}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}' +
    '.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}.mt5{animation-delay:.3s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .5s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const pads = (x, y, c1, c2) => { let s = ""; for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) s += '<rect class="pd p' + (r * 4 + c + 1) + '" x="' + (x + c * 22) + '" y="' + (y + r * 18) + '" width="17" height="13" rx="2" fill="' + (r ? c2 : c1) + '"/>'; return s; };
  const turntable = (x, y, label) => '<rect x="' + x + '" y="' + y + '" width="110" height="70" rx="4" fill="#2c2c30" stroke="#55565c" stroke-width="2"/>' +
    '<g class="vn"><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="28" fill="#0b0b0b"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="20" fill="none" stroke="#2a2a2a"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="9" fill="' + label + '"/><rect x="' + (x + 46) + '" y="' + (y + 27) + '" width="4" height="5" fill="#fff"/></g>' +
    '<path d="M' + (x + 96) + ' ' + (y + 10) + 'l-14 30" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>';
  const brick = (x, y, w, h, c, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let yy = y + 8; yy < y + h; yy += 8) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>'; return s; };
  const GOLD = "#f2b134", SKY = "#5fb7e5", RUST = "#d0573a", PALM = "#2f5a3a", ALINE = "#0072bc";
  const palm = (x, y, h) => '<g class="bob"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#3b2c22" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 70, -70].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + PALM + '" stroke-width="4" fill="none"/>').join("") + '</g>';
  const rain = n => { let s = '<style>@keyframes rn{from{transform:translate(0,-40px)}to{transform:translate(-20px,280px)}}.rn{animation:rn 1.1s linear infinite}</style>'; for (let i = 0; i < n; i++) s += '<path class="rn" style="animation-delay:-' + ((i * 37) % 110) / 100 + 's" d="M' + ((i * 53) % 420) + ' ' + ((i * 29) % 60) + 'l-4 12" stroke="#bcd7ee" stroke-width="1.4" opacity=".7"/>'; return s; };

  /* 1. The Metro A Line rolling into Lincoln/Cypress station in Lincoln Heights */
  function station() {
    let win = ""; for (let x = 26; x < 280; x += 40) win += '<rect x="' + x + '" y="98" width="26" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(10) +
      palm(360, 150, 90) +
      '<rect x="0" y="66" width="400" height="3" fill="#2b2b2b"/>' +
      '<rect x="20" y="14" width="250" height="40" rx="4" fill="#111"/><rect x="20" y="14" width="250" height="4" fill="#fff"/>' +
      '<text x="32" y="42" ' + font + ' font-size="16" fill="#fff">Lincoln / Cypress</text>' + bullet(250, 34, "A", ALINE) +
      '<g class="anim-train">' +
        '<rect x="10" y="88" width="300" height="60" rx="14" fill="#d9dde2" stroke="#7a8088" stroke-width="2"/>' +
        '<rect x="10" y="128" width="300" height="8" fill="' + ALINE + '"/>' + win +
        '<path d="M150 88l18 -20M190 88l-18 -20" stroke="#333" stroke-width="2"/>' +
        '<circle cx="300" cy="140" r="4" fill="#fff6c2"/>' + bullet(280, 110, "A", ALINE) +
      '</g>' +
      '<rect x="0" y="150" width="400" height="10" fill="#eab308"/><rect x="0" y="160" width="400" height="34" fill="#8a8c90"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#2a2c32"/>' +
      tag("EXILE", 40, 240, 38, GOLD, -5) + tag("DIRTY SCIENCE", 196, 236, 22, SKY, -6),
      sky("s1", "#101a3c", "#c0624a"));
  }

  /* 2. The Airliner on North Broadway on a beat night: neon sign, line outside, bass pulsing */
  function airliner() {
    let line = ""; for (let i = 0; i < 6; i++) line += '<g class="bob' + (i % 2 ? " bo2" : "") + '"><rect x="' + (226 + i * 26) + '" y="186" width="12" height="34" rx="5" fill="' + ["#3b3f4a", "#5a3a4a", "#2f4a5a"][i % 3] + '"/><circle cx="' + (232 + i * 26) + '" cy="180" r="7" fill="#2a2a2a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' + stars(10) +
      '<rect x="20" y="60" width="360" height="164" fill="#4f5d63"/><rect x="20" y="60" width="360" height="10" fill="#3b464b"/>' +
      '<rect x="40" y="20" width="200" height="40" rx="6" fill="#0d0b12" stroke="#333" stroke-width="2"/>' +
      '<text class="flk" x="140" y="49" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="24" letter-spacing="5" fill="#57d4ff" stroke="#b6ecff" stroke-width=".6">AIRLINER</text>' +
      '<rect x="44" y="96" width="140" height="80" fill="#1a1022"/><g class="th"><circle cx="114" cy="136" r="26" fill="#2a1a3a"/><circle cx="114" cy="136" r="12" fill="#ff5ea8" opacity=".6"/></g>' +
      '<rect x="44" y="96" width="140" height="80" fill="none" stroke="#222" stroke-width="4"/>' +
      '<rect x="196" y="120" width="26" height="104" fill="#222"/><rect x="200" y="124" width="18" height="96" fill="#5a1f2a"/>' +
      '<text x="290" y="110" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" letter-spacing="2">BEAT NIGHT</text>' +
      '<text x="290" y="130" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" letter-spacing="2">LIVE MPC SETS</text>' +
      line +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="234" width="40" height="14" rx="4" fill="' + RUST + '"/><circle cx="8" cy="248" r="4" fill="#111"/><circle cx="32" cy="248" r="4" fill="#111"/></g>',
      sky("s2", "#0b0f2a", "#3a2a5a"));
  }

  /* 3. The beat lab: 16 pads lighting up, four-track tape reels turning, a stack of records */
  function lab() {
    let grid = ""; for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) grid += '<rect class="pd p' + ((r * 4 + c) % 8 + 1) + '" x="' + (34 + c * 30) + '" y="' + (150 + r * 22) + '" width="24" height="17" rx="3" fill="' + (r < 2 ? GOLD : SKY) + '"/>';
    const reel = cx => '<g class="vn"><circle cx="' + cx + '" cy="90" r="22" fill="#2a2a2e" stroke="#777" stroke-width="2"/><path d="M' + cx + ' 70v40M' + (cx - 20) + ' 90h40" stroke="#777" stroke-width="3"/><circle cx="' + cx + '" cy="90" r="5" fill="#ddd"/></g>';
    let recs = ""; ["#d0573a", "#f2b134", "#5fb7e5", "#e9e4d8", "#7a5ea8"].forEach((c, i) => recs += '<rect x="' + (300 + i * 14) + '" y="' + (150 + (i % 2) * 4) + '" width="10" height="70" fill="' + c + '"/>');
    return svg(
      '<rect width="400" height="260" fill="#1c1a20"/><rect x="0" y="0" width="400" height="130" fill="#2c3340"/>' +
      '<rect x="190" y="56" width="180" height="70" rx="5" fill="#3a3a3e" stroke="#555" stroke-width="2"/>' + reel(236) + reel(320) +
      '<rect x="244" y="106" width="68" height="10" fill="#111"/><text x="280" y="50" text-anchor="middle" ' + font + ' font-size="10" fill="#bbb" letter-spacing="2">4 TRACK</text>' +
      '<rect x="20" y="28" width="140" height="80" fill="#0f1a2e" stroke="#555" stroke-width="3"/>' + palm(120, 108, 50) +
      '<rect x="0" y="130" width="400" height="130" fill="#5a3e2b"/><rect x="0" y="130" width="400" height="6" fill="#6e4c34"/>' +
      '<rect x="22" y="140" width="170" height="104" rx="6" fill="#8c9096" stroke="#4a4d52" stroke-width="2"/>' + grid +
      '<rect x="160" y="152" width="24" height="12" fill="#1f3a26"/><circle cx="172" cy="190" r="9" fill="#333"/><circle cx="172" cy="220" r="6" fill="#333"/>' +
      recs);
  }

  /* 4. Downtown LA in the rain: the Sixth Street Viaduct arches lit up, raindrops falling */
  function viaduct() {
    let arches = ""; for (let i = 0; i < 5; i++) { const x = 20 + i * 76; arches += '<path d="M' + x + ' 160q38 -70 76 0" stroke="#eef2f6" stroke-width="5" fill="none"/>' + '<path d="M' + (x + 38) + ' 125v35" stroke="#cfd6de" stroke-width="2"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' +
      '<rect x="40" y="46" width="30" height="100" fill="#2c3550"/><rect x="80" y="20" width="36" height="126" fill="#34405e"/><rect x="126" y="56" width="26" height="90" fill="#2c3550"/>' +
      '<rect x="250" y="36" width="34" height="110" fill="#34405e"/><rect x="292" y="60" width="30" height="86" fill="#2c3550"/><rect x="330" y="30" width="28" height="116" fill="#3a4766"/>' +
      '<rect x="0" y="160" width="400" height="10" fill="#c8ced6"/>' + arches +
      '<g class="car"><rect x="0" y="150" width="30" height="10" rx="3" fill="' + RUST + '"/></g><g class="carL"><rect x="0" y="150" width="30" height="10" rx="3" fill="' + GOLD + '"/></g>' +
      '<path d="M40 170v60M120 170v60M200 170v60M280 170v60M360 170v60" stroke="#9aa3ad" stroke-width="6"/>' +
      '<rect x="0" y="218" width="400" height="42" fill="#3a4a5c"/><path d="M0 230h400" stroke="#6f8aa8" stroke-width="2" opacity=".6"/>' +
      rain(60) +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" opacity=".85" letter-spacing="3">DANCING IN THE RAIN, L.A.</text>',
      sky("s4", "#1a2238", "#4a5a7a"));
  }

  /* 5. The corner: N Broadway and Daly St, EXILE tag, white City Hall tower downtown behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(8) +
      '<rect x="150" y="70" width="70" height="80" fill="#e8e4da"/><rect x="164" y="40" width="42" height="30" fill="#e8e4da"/><rect x="172" y="22" width="26" height="18" fill="#e8e4da"/>' +
      '<path d="M172 22l13 -18 13 18z" fill="#d8d2c4"/><path d="M164 70h42M172 40h26" stroke="#bdb6a6" stroke-width="2"/>' +
      '<rect x="60" y="96" width="50" height="54" fill="#3a4a63"/><rect x="250" y="84" width="60" height="66" fill="#3a4a63"/>' +
      palm(30, 140, 80) + palm(372, 140, 96) +
      brick(0, 140, 400, 84, "#9a6a48", "#7c5236") +
      tag("EXILE", 26, 202, 48, GOLD, -5) + tag("BLU", 196, 214, 26, SKY, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="carL"><rect x="0" y="236" width="34" height="12" rx="3" fill="' + RUST + '"/></g>' +
      '<rect x="336" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(270, 44, 120, "N Broadway") + sign(294, 70, 90, "Daly St") +
      '<circle class="bl" cx="339" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#141838", "#b85a4a"));
  }

  window.SCENES = { station: station, airliner: airliner, lab: lab, viaduct: viaduct, corner: corner };
})();
