/* fleelord scenes (NYC map: Far Rockaway, Queens). CSS classes prefixed fl- (the page's own anim-train is kept). No logos, no faces.
   0 Beach 25 St–Wavecrest on the Rockaway el (A), 1 the Loyalty or Death booth (twelve drops on the wall),
   2 SOB's on Varick St (he opened Benny's Tana Talk 3 release show there), 3 a Tokyo stage under Tokyo Tower ("got shows in Japan"),
   4 Cornaga Av & Beach 20 St, FLEE LORD tagged, the A on the el and the ocean at the end of the block. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flglow{0%,100%{opacity:.4}50%{opacity:1}}.fl-glow{animation:flglow 2.2s ease-in-out infinite}.fl-g2{animation-delay:-1.1s}.fl-g3{animation-delay:-.5s}' +
    '@keyframes flspin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fl-spin{transform-box:fill-box;transform-origin:50% 50%;animation:flspin 1.8s linear infinite}' +
    '@keyframes flvu{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}80%{transform:scaleY(.85)}}.fl-vu{transform-box:fill-box;transform-origin:50% 100%;animation:flvu .9s ease-in-out infinite}.fl-v2{animation-delay:-.3s}.fl-v3{animation-delay:-.6s}' +
    '@keyframes flwave{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}.fl-hand{animation:flwave .8s ease-in-out infinite}.fl-h2{animation-delay:-.27s}.fl-h3{animation-delay:-.53s}' +
    '@keyframes flbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.fl-beam{transform-box:fill-box;transform-origin:50% 0%;animation:flbeam 3s ease-in-out infinite}.fl-b2{animation-delay:-1.5s}' +
    '@keyframes flsea{0%{transform:translateX(0)}100%{transform:translateX(-80px)}}.fl-sea{animation:flsea 4s linear infinite}' +
    '@keyframes flspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.fl-sp{animation:flspray 1.4s ease-out infinite}.fl-sp2{animation-delay:.45s}' +
    '@keyframes flcar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.fl-car{animation:flcar 6s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (cx, cy, r, letter, color, dark) => '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + color + '"/><text x="' + cx + '" y="' + (cy + r * 0.38) + '" text-anchor="middle" ' + font + ' font-size="' + (r * 1.15) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "fl-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#e8c26a", RED = "#c0392b", SEA = "#3aa0c8", MTA = "#0039a6";

  /* 0. Beach 25 St–Wavecrest: the concrete Rockaway el, the A pulling in, the black station sign, the ocean past the rooftops at dawn */
  function flstop() {
    const train = '<g class="anim-train">' + [0, 1].map(c => {
      const x = 20 + c * 176;
      return '<rect x="' + x + '" y="96" width="170" height="62" rx="6" fill="#c9ced3" stroke="#7d848b" stroke-width="2"/>' +
        Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + 12 + i * 31) + '" y="106" width="22" height="22" rx="2" fill="#24303c"/>').join("") +
        '<rect x="' + x + '" y="136" width="170" height="4" fill="#8a9097"/>' +
        '<rect x="' + (x + 70) + '" y="104" width="28" height="48" rx="2" fill="#aeb4ba" stroke="#7d848b"/>';
    }).join("") +
      '<rect x="360" y="100" width="22" height="16" rx="2" fill="#111"/>' + bullet(371, 108, 6.5, "A", MTA) +
      '<circle cx="364" cy="146" r="3" fill="#fff6c2"/></g>';
    const roofs = [[0, 36, "#7a5a48"], [44, 28, "#8c6a52"], [80, 44, "#6a4c3e"], [270, 30, "#7a5a48"], [310, 46, "#5e4a40"], [356, 34, "#8c6a52"]].map(([x, h, c]) =>
      '<rect x="' + x + '" y="' + (176 - h) + '" width="40" height="' + h + '" fill="' + c + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fl0)"/>' +
      '<circle cx="300" cy="78" r="22" fill="#ffd9a0" opacity=".9"/>' +
      '<rect x="0" y="80" width="400" height="16" fill="#3f7fa6"/>' +
      '<g class="fl-sea">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' 88q10 -4 20 0t20 0" stroke="#bfe3f2" stroke-width="1.5" fill="none"/>').join("") + '</g>' +
      roofs +
      /* concrete el deck and piers */
      '<rect x="0" y="158" width="400" height="18" fill="#b9b2a6"/><rect x="0" y="174" width="400" height="5" fill="#8f887c"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="179" width="22" height="81" fill="#a8a194"/><rect x="' + (x - 6) + '" y="176" width="34" height="8" fill="#9a9386"/>').join("") +
      '<rect x="0" y="230" width="400" height="30" fill="#4a4a4e"/><rect x="0" y="228" width="400" height="3" fill="#c9c3b6"/>' +
      /* platform canopy and railing */
      '<rect x="0" y="62" width="400" height="10" fill="#5c6670"/>' + [40, 140, 240, 340].map(x => '<rect x="' + x + '" y="72" width="5" height="86" fill="#5c6670"/>').join("") +
      train +
      '<rect x="0" y="154" width="400" height="4" fill="#ffd84a"/>' +
      /* black station sign */
      '<rect x="40" y="12" width="320" height="38" rx="3" fill="#111"/><rect x="40" y="16" width="320" height="2" fill="#fff"/>' +
      '<text x="54" y="40" ' + font + ' font-size="16" fill="#fff">Beach 25 St</text>' +
      '<text x="162" y="40" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#d8d8d8">Wavecrest</text>' +
      bullet(336, 33, 10, "A", MTA),
      sky("fl0", "#f3b27a", "#7fb3cf"));
  }

  /* 1. The Loyalty or Death booth: twelve drops on the wall, the record spinning, the VU meter jumping, the mic in the booth window */
  function flbooth() {
    const covers = Array.from({ length: 12 }, (_, i) => {
      const x = 18 + (i % 6) * 34, y = 22 + Math.floor(i / 6) * 34, c = ["#c0392b", "#e8c26a", "#3aa0c8", "#2b2b2b", "#7a4a8a", "#3f6f4a"][i % 6];
      return '<rect x="' + x + '" y="' + y + '" width="28" height="28" fill="' + c + '" stroke="#e9e2cf" stroke-width="1.5"/><circle cx="' + (x + 14) + '" cy="' + (y + 14) + '" r="7" fill="#111" opacity=".55"/>';
    }).join("");
    return svg(
      '<rect width="400" height="260" fill="#2a2024"/><rect x="0" y="0" width="400" height="160" fill="#3a2c30"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="38" height="160" fill="#45353a" opacity=".5"/>').join("") +
      '<rect x="12" y="16" width="210" height="74" fill="#1c1517"/>' + covers +
      '<text x="117" y="104" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" letter-spacing="2">12 DROPS · 12 MONTHS</text>' +
      /* booth window with mic */
      '<rect x="240" y="18" width="146" height="110" rx="6" fill="#141a22" stroke="#7a6a5a" stroke-width="5"/>' +
      '<rect x="246" y="24" width="134" height="98" fill="url(#fl1)"/>' +
      '<rect x="311" y="40" width="5" height="70" fill="#9aa0a6"/><rect x="300" y="38" width="26" height="36" rx="13" fill="#2b2f34" stroke="#bfc4c9" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M302 ' + (46 + i * 5) + 'h22" stroke="#6b7076" stroke-width="1"/>').join("") +
      '<circle cx="280" cy="64" r="14" fill="none" stroke="#c9ced3" stroke-width="2" opacity=".7"/><path d="M280 50v28" stroke="#c9ced3" opacity=".5"/>' +
      '<rect x="264" y="104" width="28" height="9" rx="2" fill="' + RED + '" class="fl-glow"/><text x="278" y="111" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">ON AIR</text>' +
      /* desk, turntable, VU meter */
      '<rect x="0" y="160" width="400" height="100" fill="#4a3426"/><rect x="0" y="160" width="400" height="8" fill="#6a4a36"/>' +
      '<rect x="24" y="176" width="150" height="70" rx="4" fill="#1d1d1f" stroke="#555" stroke-width="2"/>' +
      '<g class="fl-spin"><circle cx="92" cy="211" r="30" fill="#0c0c0c"/><circle cx="92" cy="211" r="22" fill="none" stroke="#222" stroke-width="2"/><circle cx="92" cy="211" r="10" fill="' + GOLD + '"/><path d="M92 202v6" stroke="#5a3a10" stroke-width="2"/></g>' +
      '<circle cx="92" cy="211" r="2" fill="#111"/><path d="M158 186l-22 30" stroke="#bfc4c9" stroke-width="3"/><circle cx="158" cy="186" r="5" fill="#888"/>' +
      '<rect x="200" y="178" width="176" height="66" rx="4" fill="#151515" stroke="#555" stroke-width="2"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect class="fl-vu ' + ["", "fl-v2", "fl-v3"][i % 3] + '" x="' + (212 + i * 16) + '" y="190" width="10" height="44" fill="' + (i > 7 ? RED : i > 5 ? GOLD : "#4cc26a") + '"/>').join("") +
      '<text x="288" y="254" text-anchor="middle" ' + font + ' font-size="8" fill="#c9b79a" letter-spacing="2">LOYALTY OR DEATH</text>',
      sky("fl1", "#2a3646", "#141a22"));
  }

  /* 2. SOB's on Varick St at night: the low venue front with its canopy, the marquee, the line of fans with hands up, a cab rolling by */
  function flsobs() {
    const fans = Array.from({ length: 11 }, (_, i) => {
      const x = 30 + i * 32, c = ["#2b2b2b", "#5a2a2a", "#2a3a5a", "#3a3a3a"][i % 4];
      return '<g><circle cx="' + x + '" cy="196" r="8" fill="#1a1414"/><rect x="' + (x - 10) + '" y="204" width="20" height="34" rx="6" fill="' + c + '"/>' +
        (i % 3 === 0 ? '<path class="fl-hand ' + ["", "fl-h2", "fl-h3"][i % 3] + '" d="M' + (x + 8) + ' 206l8 -22" stroke="' + c + '" stroke-width="5" stroke-linecap="round"/>' : "") + '</g>';
    }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fl2)"/>' + stars(18) +
      /* neighbors: taller loft buildings */
      '<rect x="0" y="26" width="90" height="150" fill="#3b3440"/><rect x="310" y="16" width="90" height="160" fill="#34303c"/>' +
      [0, 310].map(o => Array.from({ length: 12 }, (_, i) => '<rect class="' + (i % 5 ? "" : "fl-glow fl-g2") + '" x="' + (o + 10 + (i % 3) * 26) + '" y="' + (38 + Math.floor(i / 3) * 30) + '" width="16" height="16" fill="#ffd98a" opacity=".55"/>').join("")).join("") +
      /* the venue: a low brick front */
      '<rect x="90" y="70" width="220" height="106" fill="#5a2f2a"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M90 ' + (78 + i * 14) + 'h220" stroke="#4a2420" stroke-width="1"/>').join("") +
      '<rect x="96" y="76" width="208" height="38" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' +
      Array.from({ length: 26 }, (_, i) => '<circle class="' + (i % 2 ? "fl-glow" : "fl-glow fl-g2") + '" cx="' + (102 + i * 7.9) + '" cy="80" r="1.6" fill="#ffe7a3"/>').join("") +
      '<text x="200" y="99" text-anchor="middle" ' + font + ' font-size="13" fill="#fff" letter-spacing="1">TONIGHT: FLEE LORD</text>' +
      '<text x="200" y="110" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="8" fill="' + GOLD + '" letter-spacing="2">204 VARICK ST</text>' +
      '<path d="M110 126h180l-10 14h-160z" fill="#1d1d1d"/><rect x="170" y="140" width="60" height="36" fill="#2a1a14"/><rect x="176" y="146" width="48" height="30" fill="#ffcf7a" opacity=".55" class="fl-glow"/>' +
      '<rect x="0" y="176" width="400" height="84" fill="#3a3a3e"/><rect x="0" y="176" width="400" height="5" fill="#bdbab2"/>' +
      '<path d="M40 186h320" stroke="#d6c08a" stroke-width="3" stroke-dasharray="2 8"/>' + fans +
      '<g class="fl-car"><rect x="0" y="236" width="70" height="18" rx="5" fill="#f2c230"/><rect x="12" y="228" width="40" height="12" rx="4" fill="#f2c230"/><rect x="16" y="230" width="14" height="8" fill="#203040"/><rect x="34" y="230" width="14" height="8" fill="#203040"/><circle cx="14" cy="255" r="5" fill="#111"/><circle cx="56" cy="255" r="5" fill="#111"/></g>' +
      sign(8, 150, 104, "Varick St"),
      sky("fl2", "#0d0f22", "#3a2340"));
  }

  /* 3. Shows in Japan: a Tokyo stage at night, Tokyo Tower's orange-and-white lattice lit up behind, beams sweeping, the crowd's hands up */
  function fltokyo() {
    const tower = '<g>' +
      '<path d="M200 16l-6 0l-40 196h20l26 -150l26 150h20l-40 -196z" fill="#e8562a"/>' +
      '<path d="M190 70h20M180 110h40M172 150h56M164 186h72" stroke="#fff" stroke-width="7"/>' +
      '<path d="M200 0v18" stroke="#e8562a" stroke-width="3"/>' +
      '<rect x="182" y="92" width="36" height="10" fill="#fff"/><rect x="172" y="140" width="56" height="12" fill="#fff"/>' +
      '</g>';
    const city = Array.from({ length: 14 }, (_, i) => { const x = i * 30, h = 30 + (i * 23) % 50; return '<rect x="' + x + '" y="' + (170 - h) + '" width="26" height="' + h + '" fill="#1d1a30"/>' + '<rect class="' + (i % 3 ? "" : "fl-glow") + '" x="' + (x + 6) + '" y="' + (176 - h) + '" width="5" height="5" fill="#ffd98a" opacity=".7"/>'; }).join("");
    const hands = Array.from({ length: 16 }, (_, i) => { const x = 10 + i * 25; return '<circle cx="' + x + '" cy="232" r="10" fill="#0e0c14"/><rect x="' + (x - 12) + '" y="240" width="24" height="24" rx="6" fill="#0e0c14"/>' +
      (i % 2 ? '<path class="fl-hand ' + ["", "fl-h2", "fl-h3"][i % 3] + '" d="M' + (x + 6) + ' 236l6 -26" stroke="#0e0c14" stroke-width="6" stroke-linecap="round"/>' : ""); }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fl3)"/>' + stars(20) + city + tower +
      '<g opacity=".35"><path class="fl-beam" d="M70 150l-40 110h80z" fill="' + GOLD + '"/><path class="fl-beam fl-b2" d="M330 150l-40 110h80z" fill="' + SEA + '"/></g>' +
      '<rect x="40" y="170" width="320" height="40" fill="#16121c"/><rect x="40" y="170" width="320" height="5" fill="' + GOLD + '"/>' +
      '<rect x="60" y="150" width="10" height="20" fill="#222"/><rect x="330" y="150" width="10" height="20" fill="#222"/>' +
      '<circle class="fl-glow" cx="65" cy="150" r="5" fill="#fff6c2"/><circle class="fl-glow fl-g2" cx="335" cy="150" r="5" fill="#fff6c2"/>' +
      '<text x="200" y="196" text-anchor="middle" ' + font + ' font-size="14" fill="#fff" letter-spacing="3">LORD MOBB · TOKYO</text>' +
      hands,
      sky("fl3", "#120f2a", "#4a2a4e"));
  }

  /* 4. Cornaga Av & Beach 20 St: green street signs, FLEE LORD tagged on the wall, the A on the el down the block, the ocean at sunrise */
  function flcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#fl4)"/>' +
      '<circle cx="330" cy="92" r="18" fill="#ffd9a0"/>' +
      '<rect x="230" y="96" width="170" height="14" fill="#3f7fa6"/>' +
      '<g class="fl-sea">' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (230 + i * 40) + ' 103q10 -4 20 0t20 0" stroke="#bfe3f2" stroke-width="1.5" fill="none"/>').join("") + '</g>' +
      /* the concrete el in the distance with an A train */
      '<rect x="230" y="70" width="170" height="8" fill="#b9b2a6"/>' + [250, 300, 350].map(x => '<rect x="' + x + '" y="78" width="6" height="32" fill="#a8a194"/>').join("") +
      '<g class="fl-car"><rect x="0" y="58" width="70" height="12" rx="2" fill="#c9ced3"/><circle cx="66" cy="64" r="3" fill="' + MTA + '"/></g>' +
      /* brick wall */
      '<rect x="0" y="40" width="230" height="170" fill="#8a4a36"/>' +
      Array.from({ length: 12 }, (_, r) => Array.from({ length: 9 }, (_, c) => '<rect x="' + (c * 28 - (r % 2) * 14) + '" y="' + (42 + r * 14) + '" width="26" height="12" fill="#9a5640" opacity=".6"/>').join("")).join("") +
      tag("FLEE LORD", 18, 138, 40, GOLD, -8) +
      tag("LOD", 150, 190, 24, RED, -4) +
      '<g class="fl-sp"><circle cx="196" cy="110" r="3" fill="' + GOLD + '" opacity=".7"/><circle cx="204" cy="104" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<g class="fl-sp fl-sp2"><circle cx="200" cy="118" r="2.5" fill="' + RED + '" opacity=".6"/></g>' +
      '<rect x="188" y="112" width="10" height="24" rx="3" fill="#e9e2cf"/><rect x="188" y="108" width="10" height="5" fill="' + RED + '"/>' +
      /* sidewalk and street */
      '<rect x="0" y="210" width="400" height="50" fill="#505056"/><rect x="0" y="206" width="400" height="6" fill="#c9c3b6"/>' +
      '<rect x="230" y="110" width="170" height="96" fill="#e3d3ad"/><path d="M230 150h170" stroke="#cdb98e" stroke-width="2"/>' + [290, 350].map(x => '<rect x="' + x + '" y="132" width="4" height="30" fill="#fff"/><rect x="' + (x - 8) + '" y="128" width="20" height="6" fill="#fff"/>').join("") +
      /* sign pole */
      '<rect x="262" y="40" width="6" height="170" fill="#4d5358"/>' +
      sign(210, 40, 110, "Cornaga Av") + sign(222, 66, 110, "Beach 20 St"),
      sky("fl4", "#f3b27a", "#9ec3d8"));
  }

  window.SCENES = { flstop: flstop, flbooth: flbooth, flsobs: flsobs, fltokyo: fltokyo, flcorner: flcorner };
})();
