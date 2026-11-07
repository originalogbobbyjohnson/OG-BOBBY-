/* pushat scenes (Regions tab: Virginia; Virginia Beach). Silverleaf Transit Center (HRT), Mount Trashmore, the Norfolk concert hall on Monticello Ave, the Granby St barbershop, Virginia Beach Blvd & Independence Blvd with the Town Center tower. CSS classes prefixed pu-. 400 x 260 each. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes puflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.pu-flk{animation:puflick 2.4s infinite}.pu-flk2{animation-delay:.8s}' +
    '@keyframes pudrift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.pu-cld{animation:pudrift 32s linear infinite}.pu-cld2{animation-delay:-16s}' +
    '@keyframes purun{from{transform:translateX(-30px)}to{transform:translateX(430px)}}.pu-run{animation:purun 12s linear infinite}.pu-run2{animation-delay:-6s}' +
    '@keyframes pukite{0%,100%{transform:translate(0,0) rotate(-6deg)}50%{transform:translate(8px,-6px) rotate(6deg)}}.pu-kite{transform-box:fill-box;transform-origin:50% 100%;animation:pukite 3s ease-in-out infinite}' +
    '@keyframes puglow{0%,100%{opacity:.45}50%{opacity:1}}.pu-glow{animation:puglow 1.6s ease-in-out infinite}.pu-g2{animation-delay:-.8s}' +
    '@keyframes pubulb{0%,100%{opacity:1}50%{opacity:.2}}.pu-bulb{animation:pubulb .9s steps(1) infinite}.pu-b2{animation-delay:-.45s}' +
    '@keyframes pupole{from{transform:translateY(0)}to{transform:translateY(-16px)}}.pu-pole{animation:pupole 1s linear infinite}' +
    '@keyframes puswim{0%,100%{transform:translateX(0)}50%{transform:translateX(14px)}}.pu-swim{animation:puswim 4s ease-in-out infinite}' +
    '@keyframes puspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.pu-sp{animation:puspray 1.4s ease-out infinite}.pu-sp2{animation-delay:.45s}' +
    '@keyframes pucar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.pu-car{animation:pucar 6s linear infinite}.pu-car2{animation-delay:-3s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const T = (x, y, s, fill, txt, extra) => '<text x="' + x + '" y="' + y + '" ' + font + ' font-size="' + s + '" fill="' + fill + '"' + (extra || "") + '>' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="20" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 14.5) + '" text-anchor="middle" ' + font + ' font-size="11.5" fill="#fff">' + txt + '</text>';
  const cloud = (x, y, s, cls) => '<g class="pu-cld ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="9"/><ellipse cx="-12" cy="-4" rx="12" ry="7"/></g></g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "pu-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ICE = "#7fd6ff", GOLD = "#d4af37", RED = "#e02424", HRT = "#1f4e79", CREAM = "#f4efe2";

  /* 1. Silverleaf Transit Center, Virginia Beach: covered bus bays, the black HRT stop sign, a blue-and-white HRT bus pulling in */
  function pustation() {
    const bus = '<g class="anim-train"><rect x="26" y="112" width="300" height="80" rx="10" fill="#f2f4f6" stroke="#5d6670" stroke-width="2"/>' +
      '<rect x="26" y="168" width="300" height="12" fill="' + HRT + '"/><rect x="26" y="180" width="300" height="4" fill="' + ICE + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 42) + '" y="124" width="34" height="32" rx="3" fill="#1d262e"/>').join("") +
      '<rect x="294" y="122" width="30" height="58" rx="3" fill="#2a3440"/><rect x="306" y="104" width="18" height="10" rx="2" fill="#111"/>' +
      '<rect x="296" y="116" width="28" height="6" fill="#111"/>' +
      '<circle cx="80" cy="192" r="14" fill="#1b1b1b"/><circle cx="80" cy="192" r="6" fill="#9aa1a8"/><circle cx="270" cy="192" r="14" fill="#1b1b1b"/><circle cx="270" cy="192" r="6" fill="#9aa1a8"/>' +
      '<circle class="pu-glow" cx="322" cy="174" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pu1)"/>' + cloud(60, 34, 1) + cloud(260, 22, .8, "pu-cld2") +
      '<g fill="#3f6f4a"><ellipse cx="40" cy="96" rx="40" ry="20"/><ellipse cx="370" cy="98" rx="44" ry="22"/><ellipse cx="300" cy="100" rx="30" ry="16"/></g>' +
      /* canopy */
      '<rect x="0" y="54" width="400" height="12" fill="#c7ccd2"/><rect x="0" y="66" width="400" height="4" fill="#8a929b"/>' +
      [30, 150, 270, 380].map(x => '<rect x="' + x + '" y="70" width="6" height="128" fill="#8a929b"/>').join("") +
      [60, 180, 300].map((x, i) => '<rect class="pu-flk' + (i === 1 ? " pu-flk2" : "") + '" x="' + x + '" y="68" width="50" height="3" rx="1" fill="#fff8dc"/>').join("") +
      /* road + curb */
      '<rect x="0" y="198" width="400" height="62" fill="#4a4d52"/><rect x="0" y="196" width="400" height="5" fill="#d8d4c8"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 56) + '" y="236" width="30" height="4" fill="#f2c200"/>').join("") +
      bus +
      /* stop sign */
      '<rect x="346" y="96" width="5" height="102" fill="#2a2a2a"/><rect x="306" y="80" width="88" height="40" rx="3" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<rect x="312" y="86" width="30" height="13" rx="6.5" fill="' + HRT + '"/>' + T(327, 96, 9.5, "#fff", "HRT", ' text-anchor="middle"') +
      T(312, 112, 10, "#fff", "SILVERLEAF") + T(348, 96, 6.5, "#cfd6de", "TRANSIT CTR"),
      sky("pu1", "#7cc2ec", "#d9eefa"));
  }

  /* 2. Mount Trashmore Park: the big grassy mound, the lake at its foot, a kite over the top, runners on the path */
  function putrashmore() {
    const runner = (cls, c) => '<g class="pu-run ' + cls + '"><circle cx="0" cy="168" r="3.4" fill="#5a3a26"/><path d="M0 172v10M0 175l-5 4M0 175l5 2M0 182l-4 8M0 182l5 7" stroke="' + c + '" stroke-width="2.4" stroke-linecap="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pu2)"/>' + cloud(90, 40, 1.1) + cloud(300, 28, .8, "pu-cld2") +
      /* the mound */
      '<path d="M-10 170Q60 150 110 96Q150 60 200 58Q250 60 290 96Q340 150 410 170V200H-10z" fill="#5c9a3e"/>' +
      '<path d="M120 96Q160 70 200 68Q240 70 280 96" stroke="#7bb94f" stroke-width="5" fill="none"/>' +
      '<path d="M60 160Q140 120 200 100" stroke="#cfc4a4" stroke-width="3" fill="none" stroke-dasharray="1 0"/>' +
      /* lone trees + benches on top */
      '<g fill="#2f6b2a"><circle cx="170" cy="64" r="7"/><circle cx="238" cy="66" r="6"/></g><rect x="198" y="58" width="16" height="3" fill="#6b4a2a"/>' +
      /* kite */
      '<g class="pu-kite"><path d="M250 20l12 14-12 14-12-14z" fill="' + RED + '"/><path d="M250 20v28M238 34h24" stroke="#fff" stroke-width="1"/></g><path d="M250 48Q230 70 214 60" stroke="#fff" stroke-width=".8" fill="none"/>' +
      /* lake */
      '<rect x="0" y="196" width="400" height="64" fill="#3d7fa8"/><path d="M0 200h400" stroke="#9fd0ea" stroke-width="2" opacity=".6"/>' +
      '<g class="pu-swim"><ellipse cx="90" cy="226" rx="8" ry="3.5" fill="#f4f4f4"/><circle cx="96" cy="221" r="2.5" fill="#f4f4f4"/><path d="M98 221l3 1" stroke="#e8a020" stroke-width="1.5"/></g>' +
      '<g class="pu-swim" style="animation-delay:-2s"><ellipse cx="300" cy="240" rx="8" ry="3.5" fill="#f4f4f4"/><circle cx="306" cy="235" r="2.5" fill="#f4f4f4"/><path d="M308 235l3 1" stroke="#e8a020" stroke-width="1.5"/></g>' +
      /* lakeside path */
      '<rect x="0" y="186" width="400" height="10" fill="#cfc4a4"/>' + runner("", ICE) + runner("pu-run2", GOLD) +
      '<rect x="10" y="140" width="84" height="22" rx="2" fill="#5b3a22"/>' + T(52, 155, 9, CREAM, "MT. TRASHMORE", ' text-anchor="middle"') + '<rect x="46" y="162" width="4" height="24" fill="#5b3a22"/>',
      sky("pu2", "#6fb6e6", "#cfe9f7"));
  }

  /* 3. The concert hall on Monticello Ave, downtown Norfolk: red brick, white trim, lit marquee with chasing bulbs, crowd line */
  function punorva() {
    const bulbs = (x, y, w) => Array.from({ length: Math.floor(w / 10) }, (_, i) => '<circle class="pu-bulb' + (i % 2 ? " pu-b2" : "") + '" cx="' + (x + 5 + i * 10) + '" cy="' + y + '" r="2" fill="#ffe28a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#pu3)"/>' + stars(18) +
      '<rect x="70" y="40" width="260" height="170" fill="#8e3a2a"/>' +
      Array.from({ length: 16 }, (_, i) => '<path d="M70 ' + (48 + i * 10) + 'h260" stroke="#7a2f22" stroke-width="1"/>').join("") +
      '<rect x="64" y="34" width="272" height="10" fill="' + CREAM + '"/><rect x="70" y="44" width="260" height="4" fill="#d8d0bc"/>' +
      [90, 140, 230, 280].map(x => '<rect x="' + x + '" y="58" width="30" height="40" fill="#2a2018"/><rect x="' + x + '" y="58" width="30" height="5" fill="' + CREAM + '"/><rect class="pu-glow" x="' + (x + 4) + '" y="66" width="22" height="28" fill="#ffcf7a" opacity=".55"/>').join("") +
      /* marquee */
      '<path d="M92 112h216l-10 30H102z" fill="#1b1b1f" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs(98, 116, 204) + bulbs(104, 138, 192) +
      T(200, 132, 13, "#fff", "TONIGHT: KING PUSH", ' text-anchor="middle"') +
      '<rect x="160" y="150" width="80" height="60" fill="#241a12"/><rect x="164" y="154" width="34" height="56" fill="#3a2a1c"/><rect x="202" y="154" width="34" height="56" fill="#3a2a1c"/>' +
      '<rect class="pu-glow pu-g2" x="166" y="156" width="30" height="24" fill="#ffcf7a" opacity=".4"/><rect class="pu-glow" x="204" y="156" width="30" height="24" fill="#ffcf7a" opacity=".4"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#3b3b40"/><rect x="0" y="208" width="400" height="4" fill="#cfcabe"/>' +
      /* crowd line (simple shapes, no faces) */
      Array.from({ length: 12 }, (_, i) => { const x = 16 + i * 30 + (i > 4 ? 90 : 0); if (x > 390) return ""; return '<g class="' + (i % 2 ? "pu-glow" : "") + '"><circle cx="' + x + '" cy="200" r="5" fill="#1a1410"/><rect x="' + (x - 6) + '" y="205" width="12" height="18" rx="4" fill="' + ["#2c3e66", "#55202a", "#2f4a2f", "#4a3a6a"][i % 4] + '"/></g>'; }).join(""),
      sky("pu3", "#0f1430", "#3a2a4a"));
  }

  /* 4. The barbershop on Granby St, Norfolk: spinning barber pole, big window, two chairs, mirrors, clippers buzzing */
  function pubarber() {
    const pole = '<rect x="22" y="70" width="22" height="96" rx="10" fill="#fff" stroke="#999" stroke-width="2"/><clipPath id="pupc"><rect x="24" y="72" width="18" height="92" rx="9"/></clipPath>' +
      '<g clip-path="url(#pupc)"><g class="pu-pole">' + Array.from({ length: 16 }, (_, i) => '<path d="M14 ' + (64 + i * 8) + 'l40 -16v6l-40 16z" fill="' + (i % 2 ? RED : "#2a5cff") + '"/>').join("") + '</g></g>' +
      '<rect x="20" y="64" width="26" height="8" rx="3" fill="' + GOLD + '"/><rect x="20" y="164" width="26" height="8" rx="3" fill="' + GOLD + '"/>';
    const chair = x => '<rect x="' + x + '" y="150" width="46" height="30" rx="6" fill="#7a1d1d"/><rect x="' + (x + 6) + '" y="118" width="34" height="36" rx="6" fill="#8e2424"/><rect x="' + (x + 20) + '" y="180" width="6" height="22" fill="#aaa"/><rect x="' + (x + 6) + '" y="200" width="34" height="5" rx="2" fill="#888"/>';
    return svg(
      '<rect width="400" height="260" fill="#efe6d2"/>' +
      '<rect x="0" y="0" width="400" height="40" fill="#1d2a3a"/>' + T(200, 27, 16, CREAM, "GRANBY ST  ·  CUTS  ·  SHAVES", ' text-anchor="middle"') +
      /* checker floor */
      '<rect x="0" y="200" width="400" height="60" fill="#f4f4f4"/>' + Array.from({ length: 40 }, (_, i) => '<rect x="' + ((i % 20) * 20 + (Math.floor(i / 20) % 2 ? 10 : 0)) + '" y="' + (200 + Math.floor(i / 20) * 30) + '" width="10" height="30" fill="#151515"/>').join("") +
      /* mirrors */
      [120, 250].map(x => '<rect x="' + x + '" y="56" width="90" height="62" rx="4" fill="#bcd7e6" stroke="#6b4a2a" stroke-width="4"/><path d="M' + (x + 12) + ' 66l20 -0M' + (x + 12) + ' 74l40 0" stroke="#fff" stroke-width="2" opacity=".7"/>').join("") +
      '<rect x="110" y="120" width="250" height="8" fill="#6b4a2a"/>' +
      chair(140) + chair(272) +
      /* clippers buzzing on the counter */
      '<g class="pu-glow"><rect x="230" y="110" width="22" height="9" rx="3" fill="#222"/><rect x="250" y="111" width="5" height="7" fill="#bbb"/></g>' +
      '<path class="pu-flk" d="M258 108l4 -4M258 120l4 4" stroke="#555" stroke-width="1.2"/>' +
      '<rect x="210" y="104" width="10" height="16" rx="2" fill="#2aa6c4"/><rect x="212" y="100" width="6" height="5" fill="#ddd"/>' +
      pole +
      '<rect x="356" y="56" width="36" height="140" fill="#cfe6f2" stroke="#6b4a2a" stroke-width="3"/>' + T(374, 120, 8, "#1d2a3a", "OPEN", ' text-anchor="middle"'),
      "");
  }

  /* 5. Virginia Beach Blvd & Independence Blvd: green signs, PUSHA T tagged on the wall, the Town Center tower lit up behind */
  function pucorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#pu5)"/>' + stars(14) +
      /* Town Center tower: tall pale glass slab with stepped crown */
      '<rect x="168" y="22" width="56" height="124" fill="#9fb3c4"/><rect x="176" y="12" width="40" height="12" fill="#8aa0b2"/><rect x="186" y="4" width="20" height="10" fill="#7d93a6"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="172" y="' + (28 + i * 8) + '" width="48" height="3" fill="' + (i % 3 ? "#d9ecf8" : "#ffe9a8") + '" opacity=".8"/>').join("") +
      '<rect class="pu-glow" x="192" y="6" width="8" height="4" fill="' + RED + '"/>' +
      '<g fill="#2a3346"><rect x="0" y="92" width="80" height="54"/><rect x="96" y="80" width="56" height="66"/><rect x="240" y="74" width="48" height="72"/><rect x="300" y="96" width="100" height="50"/></g>' +
      Array.from({ length: 10 }, (_, i) => '<rect class="pu-glow' + (i % 2 ? " pu-g2" : "") + '" x="' + [10, 30, 104, 124, 250, 270, 312, 340, 370, 56][i] + '" y="' + [104, 120, 92, 112, 86, 110, 106, 124, 108, 130][i] + '" width="6" height="7" fill="#ffd98a"/>').join("") +
      /* wall */
      '<rect x="0" y="140" width="400" height="86" fill="#3b3f48"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (148 + i * 8) + 'h400" stroke="#33363e" stroke-width="1"/>').join("") +
      tag("PUSHA T", 16, 196, 46, ICE, -6) + tag("KING PUSH", 210, 168, 22, GOLD, -4) + tag("YUUGH!", 28, 218, 16, "#fff", -3) + tag("VA BEACH", 210, 210, 18, RED, -3) +
      '<g class="pu-sp"><circle cx="196" cy="160" r="3" fill="' + ICE + '" opacity=".7"/></g><g class="pu-sp pu-sp2"><circle cx="202" cy="154" r="2" fill="' + ICE + '" opacity=".6"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="pu-car"><rect x="0" y="236" width="50" height="14" rx="5" fill="#ececec"/><rect x="10" y="229" width="28" height="9" rx="4" fill="#ececec"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="38" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="352" y="92" width="6" height="134" fill="#2f2f2f"/>' + sign(268, 94, 128, "Virginia Beach Blvd") + sign(272, 118, 120, "Independence Blvd"),
      sky("pu5", "#0e1730", "#4a5a8a"));
  }

  window.SCENES = { pustation: pustation, putrashmore: putrashmore, punorva: punorva, pubarber: pubarber, pucorner: pucorner };
})();
