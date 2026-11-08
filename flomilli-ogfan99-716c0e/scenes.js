/* flomilli scenes (Regions tab: More of the South; Mobile, Alabama). CSS classes prefixed fm- (the page's own anim-train is kept for the bus). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fmblink{0%,100%{opacity:1}50%{opacity:.25}}.fm-bl{animation:fmblink .9s steps(1) infinite}.fm-bl2{animation-delay:-.45s}' +
    '@keyframes fmglow{0%,100%{opacity:.45}50%{opacity:1}}.fm-glow{animation:fmglow 2.4s ease-in-out infinite}.fm-g2{animation-delay:-1.2s}' +
    '@keyframes fmsweep{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.fm-sw{transform-box:fill-box;transform-origin:50% 100%;animation:fmsweep 4s ease-in-out infinite}.fm-sw2{animation-delay:-2s}' +
    '@keyframes fmdrop{0%{transform:translateY(0);opacity:1}100%{transform:translateY(22px);opacity:0}}.fm-dr{animation:fmdrop 1.1s ease-in infinite}.fm-dr2{animation-delay:-.37s}.fm-dr3{animation-delay:-.74s}' +
    '@keyframes fmmoss{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.fm-ms{transform-box:fill-box;transform-origin:50% 0%;animation:fmmoss 3.6s ease-in-out infinite}.fm-ms2{animation-delay:-1.8s}' +
    '@keyframes fmfly{0%{transform:translateX(-80px)}100%{transform:translateX(480px)}}.fm-fly{animation:fmfly 14s linear infinite}.fm-fly2{animation-delay:-7s}' +
    '@keyframes fmflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.fm-fl{transform-box:fill-box;transform-origin:50% 100%;animation:fmflap .8s ease-in-out infinite}' +
    '@keyframes fmshim{0%,100%{opacity:.2}50%{opacity:.75}}.fm-sh{animation:fmshim 2s ease-in-out infinite}.fm-sh2{animation-delay:-1s}' +
    '@keyframes fmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.fm-sp{animation:fmspray 1.4s ease-out infinite}.fm-sp2{animation-delay:.45s}' +
    '@keyframes fmsq{0%,60%,100%{transform:translateX(0)}70%{transform:translateX(-10px)}85%{transform:translateX(6px)}}.fm-sq{animation:fmsq 5s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, txt, color) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const PINK = "#ff6fb5", GOLD = "#ffd166", BLUE = "#7fd1ff", RA = "#0072ce", RB = "#00a19a";
  const tile = (x, y, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="7" fill="#b5502e"/>' + Array.from({ length: Math.floor(w / 6) }, (_, i) => '<path d="M' + (x + 3 + i * 6) + ' ' + y + 'v7" stroke="#8a3a20" stroke-width="1"/>').join("");
  const oak = (cx, cy, s) => '<g transform="translate(' + cx + ' ' + cy + ') scale(' + s + ')"><path d="M-6 0q-4 -40 -30 -60M6 0q4 -40 34 -58M0 0v-50" stroke="#4a3a2a" stroke-width="10" fill="none" stroke-linecap="round"/>' +
    '<ellipse cx="0" cy="-74" rx="96" ry="34" fill="#2f5a2a"/><ellipse cx="-50" cy="-66" rx="50" ry="24" fill="#3a6b32"/><ellipse cx="46" cy="-68" rx="54" ry="24" fill="#36652f"/>' +
    [-70, -40, -12, 20, 52, 80].map((x, i) => '<path class="fm-ms' + (i % 2 ? " fm-ms2" : "") + '" d="M' + x + ' -52q-4 14 2 26q-6 10 0 22" stroke="#a9b59a" stroke-width="5" fill="none" stroke-linecap="round" opacity=".85"/>').join("") + '</g>';

  /* 1. GM&O Transit Center, 110 Beauregard St: the 1907 Mission Revival terminal (white stucco, twin towers, red clay tile, arched arcade), the bus pulling in, the black stop sign with the A and B route bullets */
  function fmstation() {
    const bus = '<g class="anim-train"><rect x="40" y="150" width="250" height="70" rx="9" fill="#f4f4f2" stroke="#8e959c" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (82 + i * 40) + '" y="160" width="34" height="26" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="160" width="28" height="50" rx="2" fill="#24323e"/><rect x="40" y="194" width="250" height="5" fill="' + RA + '"/><rect x="40" y="201" width="250" height="3" fill="' + PINK + '"/>' +
      '<rect x="46" y="151" width="96" height="9" rx="2" fill="#111"/><text x="94" y="158.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">A  AIRPORT BLVD</text>' +
      '<circle cx="86" cy="220" r="12" fill="#222"/><circle cx="86" cy="220" r="5" fill="#9aa1a8"/><circle cx="246" cy="220" r="12" fill="#222"/><circle cx="246" cy="220" r="5" fill="#9aa1a8"/><circle cx="43" cy="208" r="3.5" fill="#fff6c2"/></g>';
    const arches = Array.from({ length: 7 }, (_, i) => '<path d="M' + (88 + i * 34) + ' 150v-28a12 12 0 0 1 24 0v28z" fill="#5a4a3a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fm1)"/>' +
      /* terminal */
      '<rect x="70" y="84" width="260" height="70" fill="#f3ead8"/>' + tile(66, 78, 268) +
      '<path d="M160 84v-26q10 -14 22 -12q8 -16 18 -16t18 16q12 -2 22 12v26z" fill="#f3ead8" stroke="#d8ccb2" stroke-width="2"/><circle cx="200" cy="54" r="7" fill="#c9b994"/>' +
      '<rect x="40" y="52" width="40" height="102" fill="#efe4cf"/><path d="M36 54l24 -20l24 20z" fill="#b5502e"/><rect x="50" y="66" width="8" height="16" rx="4" fill="#5a4a3a"/><rect x="62" y="66" width="8" height="16" rx="4" fill="#5a4a3a"/>' +
      '<rect x="320" y="52" width="40" height="102" fill="#efe4cf"/><path d="M316 54l24 -20l24 20z" fill="#b5502e"/><rect x="330" y="66" width="8" height="16" rx="4" fill="#5a4a3a"/><rect x="342" y="66" width="8" height="16" rx="4" fill="#5a4a3a"/>' +
      arches + '<rect x="0" y="150" width="400" height="6" fill="#cfc4ae"/>' +
      '<path d="M10 154q6 -40 2 -70M8 90q-14 -6 -22 2M12 88q14 -8 24 -2M10 86q-4 -12 -14 -14M12 86q8 -12 18 -10" stroke="#3e6b2e" stroke-width="4" fill="none" stroke-linecap="round"/>' +
      '<path d="M390 154q-6 -40 -2 -70M392 90q14 -6 22 2M388 88q-14 -8 -24 -2M390 86q4 -12 14 -14" stroke="#3e6b2e" stroke-width="4" fill="none" stroke-linecap="round"/>' +
      '<rect x="0" y="156" width="400" height="104" fill="#6a6a70"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      /* stop sign */
      '<rect x="331" y="120" width="5" height="120" fill="#4a5058"/><rect x="290" y="96" width="102" height="44" rx="3" fill="#111" stroke="#444" stroke-width="1"/>' +
      '<text x="341" y="112" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">GM&amp;O TRANSIT CTR</text><text x="322" y="132" text-anchor="middle" ' + font + ' font-size="7" fill="#bbb">THE WAVE</text>' +
      bullet(352, 128, "A", RA).replace('r="10"', 'r="8"').replace('font-size="14"', 'font-size="11"').replace('y="133"', 'y="132"') + bullet(374, 128, "B", RB).replace('r="10"', 'r="8"').replace('font-size="14"', 'font-size="11"').replace('y="133"', 'y="132"'),
      sky("fm1", "#7fbfe8", "#f6e2c4"));
  }

  /* 2. The movie theater out west where she cut her first songs in the back: neon marquee, chasing bulbs, "they watch me like I'm a new movie" */
  function fmmovie() {
    const bulbs = (y) => Array.from({ length: 25 }, (_, i) => '<circle class="fm-bl' + (i % 2 ? " fm-bl2" : "") + '" cx="' + (66 + i * 11) + '" cy="' + y + '" r="2.6" fill="' + GOLD + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fm2)"/>' + Array.from({ length: 22 }, (_, i) => '<circle class="' + (i % 3 ? "" : "fm-glow") + '" cx="' + ((i * 83) % 400) + '" cy="' + (8 + (i * 37) % 50) + '" r="1.1" fill="#fff" opacity=".7"/>').join("") +
      '<path class="fm-sw" d="M110 118l-36 -118h24z" fill="' + BLUE + '" opacity=".16"/><path class="fm-sw fm-sw2" d="M290 118l36 -118h-24z" fill="' + PINK + '" opacity=".16"/>' +
      '<rect x="40" y="70" width="320" height="140" fill="#2b1f33"/><rect x="40" y="62" width="320" height="10" fill="#3d2c48"/>' +
      '<rect x="56" y="86" width="288" height="66" rx="4" fill="#120c18" stroke="' + PINK + '" stroke-width="3"/>' + bulbs(80) + bulbs(158) +
      '<text x="200" y="106" text-anchor="middle" ' + font + ' font-size="12" fill="' + BLUE + '" letter-spacing="3">NOW SHOWING</text>' +
      '<text x="200" y="128" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="#fff" letter-spacing="2">A NEW MOVIE</text>' +
      '<text class="fm-glow" x="200" y="146" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" fill="' + PINK + '" letter-spacing="4">STARRING FLO MILLI</text>' +
      [70, 150, 230, 310].map(x => '<rect x="' + x + '" y="166" width="22" height="34" rx="2" fill="#1a1222" stroke="' + GOLD + '" stroke-width="1.5"/>').join("") +
      '<rect x="110" y="168" width="38" height="40" fill="#ffd98a" opacity=".85"/><rect x="190" y="168" width="38" height="40" fill="#ffd98a" opacity=".85"/><rect x="270" y="168" width="38" height="40" fill="#ffd98a" opacity=".85"/>' +
      '<path d="M129 168v40M209 168v40M289 168v40" stroke="#8a6a3a" stroke-width="2"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#4a4550"/><path d="M0 214h400" stroke="#6a6470" stroke-width="3"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#2e2a34"/>' +
      '<path d="M60 236l6 -16h16l6 16z" fill="#f4f0ea"/><path d="M60 236l6 -16M70 236l2 -16M78 236l-1 -16" stroke="#e2574c" stroke-width="2"/>' +
      '<circle cx="66" cy="218" r="4" fill="#fff6d8"/><circle cx="74" cy="216" r="4" fill="#fff6d8"/><circle cx="80" cy="219" r="3.5" fill="#fff6d8"/>',
      sky("fm2", "#0b0920", "#3a1d44"));
  }

  /* 3. Bienville Square downtown: the cast-iron fountain under live oaks hung with Spanish moss, iron fence, a squirrel on the lawn */
  function fmsquare() {
    const drops = [176, 200, 224].map((x, i) => '<circle class="fm-dr' + ["", " fm-dr2", " fm-dr3"][i] + '" cx="' + x + '" cy="134" r="2.4" fill="#bfe6ff"/>').join("") +
      [186, 214].map((x, i) => '<circle class="fm-dr' + (i ? " fm-dr3" : " fm-dr2") + '" cx="' + x + '" cy="106" r="2" fill="#bfe6ff"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fm3)"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#5f8a44"/><path d="M0 190q200 -30 400 0v70h-400z" fill="#c9bfa8"/>' +
      oak(70, 168, 1.05) + oak(330, 166, 1.0) +
      /* fountain: dark green cast iron, three tiers */
      '<ellipse cx="200" cy="206" rx="84" ry="16" fill="#2c3a34"/><ellipse cx="200" cy="202" rx="76" ry="12" fill="#6fb4d8"/><ellipse class="fm-sh" cx="186" cy="202" rx="30" ry="4" fill="#d8f0ff"/>' +
      '<rect x="194" y="120" width="12" height="82" fill="#25332d"/>' +
      '<path d="M160 150q40 14 80 0l-6 8q-34 10 -68 0z" fill="#2f4038"/><ellipse cx="200" cy="150" rx="40" ry="6" fill="#36493f"/>' +
      '<path d="M178 122q22 10 44 0l-4 6q-18 7 -36 0z" fill="#2f4038"/><ellipse cx="200" cy="122" rx="22" ry="4" fill="#36493f"/>' +
      '<path d="M194 112q6 -18 12 0z" fill="#36493f"/><circle cx="200" cy="96" r="4" fill="#36493f"/>' + drops +
      '<path d="M160 156q-4 12 -2 40M240 156q4 12 2 40" stroke="#bfe6ff" stroke-width="2" fill="none" opacity=".7" class="fm-sh fm-sh2"/>' +
      /* iron fence */
      '<path d="M0 232h400M0 222h400" stroke="#1d2420" stroke-width="2"/>' + Array.from({ length: 41 }, (_, i) => '<path d="M' + (i * 10) + ' 236v-18l2 -4l2 4" stroke="#1d2420" stroke-width="2" fill="none"/>').join("") +
      '<g class="fm-sq"><ellipse cx="292" cy="212" rx="7" ry="5" fill="#8a6a50"/><path d="M286 210q-10 -12 -2 -18q4 6 6 14" fill="#8a6a50"/><circle cx="298" cy="207" r="3.5" fill="#8a6a50"/></g>' +
      '<rect x="20" y="236" width="128" height="18" rx="2" fill="#1d2420"/><text x="84" y="249" text-anchor="middle" ' + font + ' font-size="10" fill="#e8dcc0" letter-spacing="1">BIENVILLE SQUARE</text>',
      sky("fm3", "#9fd0ee", "#f2ecd6"));
  }

  /* 4. Mobile Bay at sunset: the battleship USS Alabama (BB-60) in haze gray at Battleship Memorial Park, pelicans gliding over the water */
  function fmbay() {
    const pel = (x, y, cls) => '<g class="fm-fly' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><path class="fm-fl" d="M-14 0q7 -6 14 0q7 -6 14 0" stroke="#2a2030" stroke-width="2.5" fill="none"/><path d="M0 0l6 2" stroke="#2a2030" stroke-width="2"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fm4)"/><circle cx="300" cy="132" r="30" fill="#ffcf6b" class="fm-glow"/>' +
      '<rect x="0" y="146" width="400" height="114" fill="#2c4a6e"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect class="fm-sh' + (i % 2 ? " fm-sh2" : "") + '" x="' + (250 + (i % 4) * 22) + '" y="' + (152 + i * 8) + '" width="' + (30 - (i % 3) * 6) + '" height="2" rx="1" fill="#ffcf6b"/>').join("") +
      /* tree line on the causeway */
      '<path d="M0 146q20 -8 40 0t40 0t40 0t40 0v4h-160z" fill="#1f3326"/>' +
      /* battleship */
      '<path d="M40 176l14 -18h270l26 -6l-12 24z" fill="#7d858c"/><path d="M40 176h298l-4 6h-290z" fill="#5a6168"/>' +
      '<rect x="120" y="132" width="70" height="26" fill="#8e979e"/><rect x="140" y="110" width="34" height="22" fill="#8e979e"/><rect x="150" y="92" width="14" height="18" fill="#8e979e"/><path d="M157 92v-22M150 78h14M152 84h10" stroke="#5a6168" stroke-width="2"/>' +
      '<rect x="200" y="138" width="26" height="20" fill="#8e979e"/><rect x="205" y="124" width="16" height="14" fill="#7d858c"/>' +
      '<rect x="244" y="148" width="34" height="10" rx="3" fill="#6d757c"/><path d="M276 151h30M276 155h30" stroke="#5a6168" stroke-width="3"/>' +
      '<rect x="84" y="148" width="30" height="10" rx="3" fill="#6d757c"/><path d="M84 151h-28M84 155h-28" stroke="#5a6168" stroke-width="3"/>' +
      '<text x="322" y="170" ' + font + ' font-size="10" fill="#e8ecef">60</text>' +
      '<path d="M120 132h70M140 110h34" stroke="#a7b0b6" stroke-width="1"/>' +
      pel(40, 60, "") + pel(70, 74, "") + pel(10, 40, " fm-fly2") + pel(-20, 56, " fm-fly2") +
      '<rect x="20" y="226" width="162" height="18" rx="2" fill="#11233a" opacity=".85"/><text x="101" y="239" text-anchor="middle" ' + font + ' font-size="10" fill="#ffe2b0" letter-spacing="1">MOBILE BAY · BB-60</text>',
      sky("fm4", "#3b2a5e", "#ff9a6b"));
  }

  /* 5. Her corner out west: Airport Blvd and Schillinger Rd, a pink wall with FLO MILLI tagged, a live oak, the downtown skyline and the RSA Battle House Tower behind */
  function fmcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#fm5)"/>' +
      /* skyline + RSA Battle House Tower (glass, crown spire) */
      '<rect x="40" y="96" width="26" height="54" fill="#4a5a78"/><rect x="72" y="84" width="22" height="66" fill="#56668a"/><rect x="300" y="100" width="30" height="50" fill="#4a5a78"/><rect x="336" y="90" width="22" height="60" fill="#56668a"/>' +
      '<rect x="102" y="40" width="36" height="110" fill="#6f9bb8"/><path d="M102 40l18 -14l18 14z" fill="#8fb8d0"/><path d="M120 26v-14" stroke="#cfe4f0" stroke-width="2"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M102 ' + (50 + i * 10) + 'h36" stroke="#8fb8d0" stroke-width="1" opacity=".6"/>').join("") +
      '<circle class="fm-glow" cx="120" cy="12" r="2.5" fill="#ff5a5a"/>' +
      /* pink wall */
      '<rect x="0" y="120" width="400" height="104" fill="#f2a6c8"/>' + Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (128 + r * 12) + 'h400" stroke="#e48fb4" stroke-width="1"/>').join("") +
      tag("FLO MILLI", 150, 186, 40, PINK, -8) + tag("251", 40, 212, 20, GOLD, -4) + tag("FEELIN MYSELF", 196, 216, 16, BLUE, -3) +
      '<g class="fm-sp"><circle cx="356" cy="162" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="fm-sp fm-sp2"><circle cx="362" cy="168" r="2.5" fill="' + GOLD + '" opacity=".7"/></g>' +
      '<rect x="352" y="168" width="12" height="24" rx="3" fill="#ddd" stroke="#555" stroke-width="1"/><rect x="354" y="164" width="8" height="5" fill="' + PINK + '"/>' +
      '<rect x="0" y="224" width="400" height="36" fill="#6a6a70"/><path d="M0 226h400" stroke="#cfcfcf" stroke-width="3"/>' +
      /* sign pole */
      '<rect x="306" y="60" width="6" height="168" fill="#6b7178"/>' + sign(250, 58, 120, "AIRPORT BLVD") + sign(250, 84, 132, "SCHILLINGER RD") +
      '<g transform="translate(22 0)">' + oak(0, 128, .55) + '</g>',
      sky("fm5", "#ff9ac8", "#ffe0b8"));
  }

  window.SCENES = { fmstation: fmstation, fmmovie: fmmovie, fmsquare: fmsquare, fmbay: fmbay, fmcorner: fmcorner };
})();
