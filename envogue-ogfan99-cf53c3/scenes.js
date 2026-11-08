/* envogue scenes (Regions tab: The Bay Area; Oakland). CSS classes prefixed ev- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes evflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.ev-flk{animation:evflick 2.6s infinite}.ev-flk2{animation-delay:.9s}' +
    '@keyframes evglow{0%,100%{opacity:.45}50%{opacity:1}}.ev-glow{animation:evglow 2.2s ease-in-out infinite}.ev-g2{animation-delay:-1.1s}' +
    '@keyframes evlvl{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}.ev-lv{transform-box:fill-box;transform-origin:50% 100%;animation:evlvl .8s ease-in-out infinite}.ev-lv2{animation-delay:-.3s}.ev-lv3{animation-delay:-.55s}' +
    '@keyframes evbeam{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.ev-bm{transform-box:fill-box;transform-origin:50% 0%;animation:evbeam 3.6s ease-in-out infinite}.ev-bm2{animation-delay:-1.8s}' +
    '@keyframes evsway{0%,100%{transform:translateX(0)}50%{transform:translateX(4px)}}.ev-sw{animation:evsway 1.6s ease-in-out infinite}.ev-sw2{animation-delay:-.8s}' +
    '@keyframes evfall{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(40px);opacity:0}}.ev-fall{animation:evfall 1.6s linear infinite}.ev-f2{animation-delay:-.55s}.ev-f3{animation-delay:-1.1s}' +
    '@keyframes evspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ev-sp{animation:evspray 1.4s ease-out infinite}.ev-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, ink) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (ink || "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "ev-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const mic = (x, y) => '<rect x="' + (x - 1.5) + '" y="' + y + '" width="3" height="' + (196 - y) + '" fill="#9aa1a8"/><rect x="' + (x - 10) + '" y="194" width="20" height="4" rx="2" fill="#9aa1a8"/><rect x="' + (x - 5) + '" y="' + (y - 14) + '" width="10" height="16" rx="5" fill="#c9ccd2" stroke="#555" stroke-width="1"/>';
  const PLUM = "#b0306a", SILVER = "#d8d8e4", GOLD = "#e3b55a", BART_Y = "#ffe800";

  /* 1. Rockridge BART, the elevated platform up in the middle of Highway 24: the silver train pulling in, the black sign with the Yellow Line bullet, the Oakland hills behind */
  function evstation() {
    let win = "";
    for (let x = 40; x < 300; x += 34) win += '<rect x="' + x + '" y="108" width="24" height="18" rx="2" fill="#24323e"/>';
    const car = '<g class="anim-train"><path d="M20 100h290q24 0 30 20v32h-320z" fill="#cfd4da" stroke="#7a8188" stroke-width="2"/>' + win +
      '<rect x="20" y="136" width="320" height="4" fill="#5a6f8a"/><rect x="314" y="106" width="20" height="18" rx="3" fill="#1d262e"/><circle cx="334" cy="140" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ev1)"/>' +
      '<path d="M0 90q50 -40 110 -26t120 -20t170 30v30h-400z" fill="#5d7a52"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + (i * 26 + 8) + '" cy="' + (78 - (i % 4) * 5) + '" r="9" fill="#4a6a42"/>').join("") +
      '<rect x="0" y="96" width="400" height="6" fill="#9aa1a8"/>' + car +
      '<rect x="0" y="152" width="400" height="12" fill="#b8b4aa"/><rect x="0" y="164" width="400" height="5" fill="' + BART_Y + '"/>' +
      '<rect x="0" y="169" width="400" height="30" fill="#7c7a74"/>' +
      Array.from({ length: 8 }, (_, i) => '<g class="ev-glow' + (i % 2 ? " ev-g2" : "") + '"><rect x="' + (i * 52 + 10) + '" y="214" width="20" height="8" rx="3" fill="' + (i % 2 ? "#ff5a4a" : "#fff6c2") + '"/></g>').join("") +
      '<rect x="0" y="199" width="400" height="61" fill="#3c3c40"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 54) + '" y="236" width="30" height="3" fill="#e8e4dc" opacity=".7"/>').join("") +
      [30, 370].map(x => '<rect x="' + (x - 4) + '" y="18" width="8" height="134" fill="#5a5f66"/>').join("") +
      '<rect x="60" y="14" width="280" height="34" rx="3" fill="#111"/><text x="74" y="37" ' + font + ' font-size="16" fill="#fff">Rockridge</text>' + badge(238, 31, "YELLOW", BART_Y, "#111"),
      sky("ev1", "#8fc0e6", "#f2dcc0"));
  }

  /* 2. The Richmond studio where "Hold On" was cut: the mixing board with its meters dancing, four mics lined up in the booth glass */
  function evstudio() {
    const faders = Array.from({ length: 22 }, (_, i) => '<rect x="' + (52 + i * 14) + '" y="196" width="3" height="40" fill="#222"/><rect x="' + (48 + i * 14) + '" y="' + (204 + (i * 7) % 24) + '" width="11" height="6" rx="1" fill="' + (i % 5 ? SILVER : PLUM) + '"/>').join("");
    const meters = Array.from({ length: 10 }, (_, i) => '<rect class="ev-lv ' + ["", "ev-lv2", "ev-lv3"][i % 3] + '" x="' + (150 + i * 10) + '" y="160" width="6" height="22" fill="' + (i < 6 ? "#4ad66a" : i < 8 ? "#f5d03a" : "#ff5a4a") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1a1420"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (i * 34) + '" y="0" width="30" height="40" fill="#2a2030"/>').join("") +
      '<rect x="40" y="36" width="320" height="104" rx="4" fill="#0e1622" stroke="#555" stroke-width="4"/>' +
      '<rect x="44" y="40" width="312" height="96" fill="#1c2a3e"/>' +
      '<g opacity=".22"><path class="ev-glow" d="M44 40h312v96h-312z" fill="' + PLUM + '"/></g>' +
      mic(110, 92) + mic(170, 92) + mic(230, 92) + mic(290, 92) +
      [110, 170, 230, 290].map((x, i) => '<rect x="' + (x - 24) + '" y="70" width="48" height="4" fill="#333"/><path d="M' + (x - 14) + ' 66q14 -16 28 0" stroke="#222" stroke-width="3" fill="none"/>').join("") +
      '<rect x="0" y="140" width="400" height="10" fill="#3a2a1a"/>' +
      '<path d="M20 150h360l20 110h-400z" fill="#2a2a30"/><rect x="40" y="152" width="320" height="34" fill="#151519"/>' + meters +
      '<rect x="60" y="164" width="70" height="16" rx="2" fill="#0a0a0c"/><text x="95" y="176" text-anchor="middle" ' + font + ' font-size="10" fill="#4ad66a">HOLD ON</text>' +
      '<rect x="270" y="164" width="70" height="16" rx="2" fill="#0a0a0c"/><circle class="ev-flk" cx="282" cy="172" r="4" fill="#ff3a3a"/><text x="312" y="176" text-anchor="middle" ' + font + ' font-size="9" fill="#ff8a8a">REC</text>' + faders,
      "");
  }

  /* 3. Chase Center on the San Francisco waterfront, the 2025 All-Star halftime salute to the Bay: the curved silver arena, the court lit, beams and confetti */
  function evchase() {
    const crowd = Array.from({ length: 24 }, (_, i) => '<g class="ev-sw' + (i % 2 ? " ev-sw2" : "") + '"><circle cx="' + (6 + i * 17) + '" cy="230" r="7" fill="#07070c"/><rect x="' + (i * 17 - 1) + '" y="236" width="14" height="26" rx="5" fill="#07070c"/></g>').join("");
    const conf = Array.from({ length: 16 }, (_, i) => '<rect class="ev-fall ' + ["", "ev-f2", "ev-f3"][i % 3] + '" x="' + (20 + i * 24) + '" y="' + (30 + (i * 13) % 50) + '" width="4" height="7" fill="' + [GOLD, PLUM, "#2e7dd6", "#fff"][i % 4] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#0a0c18"/>' +
      '<path d="M0 30q200 -40 400 0v40q-200 -30 -400 0z" fill="#20283a"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' ' + (30 - Math.sin(i / 9 * Math.PI) * 18) + 'v40" stroke="#3a4560" stroke-width="2"/>').join("") +
      '<path d="M0 70q200 -26 400 0v40q-200 -20 -400 0z" fill="#141a2a"/>' + Array.from({ length: 40 }, (_, i) => '<circle cx="' + (5 + i * 10) + '" cy="' + (86 - Math.sin(i / 39 * Math.PI) * 10 + (i % 2) * 6) + '" r="1.6" fill="' + ["#ffd98a", "#8ab4ff", "#fff"][i % 3] + '" opacity=".7"/>').join("") +
      '<rect x="150" y="12" width="100" height="40" rx="3" fill="#111" stroke="#555" stroke-width="2"/><rect class="ev-glow" x="156" y="18" width="88" height="28" fill="#2e7dd6" opacity=".6"/><text x="200" y="37" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">THE BAY</text>' +
      '<path class="ev-bm" d="M80 0l-50 200h100z" fill="' + PLUM + '" opacity=".2"/><path class="ev-bm ev-bm2" d="M320 0l-50 200h100z" fill="' + GOLD + '" opacity=".2"/>' +
      '<path d="M40 130h320l30 70h-380z" fill="#c8945a"/><path d="M200 130v70" stroke="#fff" stroke-width="2"/><ellipse cx="200" cy="164" rx="34" ry="14" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<path d="M40 130l-30 70M360 130l30 70" stroke="#2e7dd6" stroke-width="5"/>' +
      '<rect x="140" y="146" width="120" height="16" rx="2" fill="#2a2a32"/>' +
      [170, 190, 210, 230].map((x, i) => '<g class="ev-sw' + (i % 2 ? " ev-sw2" : "") + '"><circle cx="' + x + '" cy="128" r="5" fill="#111"/><path d="M' + (x - 7) + ' 146l3 -14h8l3 14z" fill="' + [PLUM, SILVER, GOLD, "#e35a5a"][i] + '"/></g>').join("") +
      conf + crowd,
      "");
  }

  /* 4. Woodminster Amphitheater up in Joaquin Miller Park in the Oakland hills: the stone stage under the redwoods, the cascade of fountains stepping down, a summer night show */
  function evwood() {
    const steps = Array.from({ length: 6 }, (_, i) => '<rect x="' + (176 - i * 2) + '" y="' + (150 + i * 12) + '" width="' + (48 + i * 4) + '" height="10" fill="#cfc6b4"/><rect class="ev-glow' + (i % 2 ? " ev-g2" : "") + '" x="' + (182 - i * 2) + '" y="' + (151 + i * 12) + '" width="' + (36 + i * 4) + '" height="5" fill="#8fd0ff" opacity=".7"/>').join("");
    const rows = Array.from({ length: 4 }, (_, r) => '<path d="M' + (20 + r * 4) + ' ' + (190 + r * 18) + 'q180 -' + (14 - r * 2) + ' 360 0" stroke="#5a4a3a" stroke-width="7" fill="none"/>').join("");
    const heads = Array.from({ length: 18 }, (_, i) => '<g class="ev-sw' + (i % 2 ? " ev-sw2" : "") + '"><circle cx="' + (30 + i * 20 - (i > 8 ? 0 : 0)) + '" cy="' + (i % 2 ? 200 : 218) + '" r="6" fill="#07070c"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ev4)"/>' + stars(18) +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 46 + 6) + ' 150l14 -' + (90 + (i % 3) * 16) + 'l14 ' + (90 + (i % 3) * 16) + 'z" fill="#14281c"/>').join("") +
      '<rect x="110" y="70" width="180" height="70" fill="#d8cfbc"/><rect x="104" y="64" width="192" height="10" fill="#c4baa4"/>' +
      [120, 150, 236, 266].map(x => '<rect x="' + x + '" y="74" width="14" height="66" fill="#c4baa4"/>').join("") +
      '<path d="M170 140v-50q30 -26 60 0v50z" fill="#241a2c"/><path class="ev-bm" d="M200 90l-40 70h80z" fill="' + GOLD + '" opacity=".25"/>' +
      '<rect x="110" y="138" width="180" height="12" fill="#b8ae98"/>' +
      [184, 196, 208, 220].map((x, i) => '<g class="ev-sw' + (i % 2 ? " ev-sw2" : "") + '"><circle cx="' + x + '" cy="118" r="4" fill="#111"/><path d="M' + (x - 5) + ' 134l2 -12h6l2 12z" fill="' + [PLUM, SILVER, GOLD, "#e35a5a"][i] + '"/></g>').join("") +
      steps + rows + heads +
      '<text x="200" y="24" text-anchor="middle" ' + font + ' font-size="10" fill="#f2e6d0" opacity=".85">WOODMINSTER · OAKLAND HILLS</text>',
      sky("ev4", "#0b1030", "#3a2a56"));
  }

  /* 5. College Ave and Broadway on the north side of Oakland, EN VOGUE tagged on the wall, the San Francisco skyline and its white pyramid across the bay at dusk */
  function evcorner() {
    const sf = '<g fill="#3a3550"><rect x="40" y="80" width="18" height="44"/><rect x="62" y="70" width="14" height="54"/><rect x="80" y="86" width="22" height="38"/><rect x="128" y="74" width="16" height="50"/><rect x="148" y="90" width="20" height="34"/><rect x="172" y="68" width="18" height="56"/><rect x="214" y="78" width="20" height="46"/><rect x="238" y="88" width="24" height="36"/></g>' +
      '<path d="M104 124l11 -84l11 84z" fill="#e8e4ea"/><path d="M112 60h6v-8h-6z" fill="#e8e4ea"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ev5)"/>' + stars(10) + sf +
      '<rect x="0" y="122" width="400" height="12" fill="#2a3a5a"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle class="ev-glow' + (i % 2 ? " ev-g2" : "") + '" cx="' + (12 + i * 28) + '" cy="' + (96 + (i * 17) % 24) + '" r="1.3" fill="#ffd98a"/>').join("") +
      '<rect x="0" y="132" width="400" height="92" fill="#4a3a5a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#3e3050" stroke-width="1"/>').join("") +
      tag("EN VOGUE", 18, 194, 52, PLUM, -6) + tag("HOLD ON", 34, 218, 18, SILVER, -3) + tag("FUNKY DIVAS", 150, 214, 20, GOLD, -3) + tag("33RD ST", 286, 214, 13, "#8fd0ff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(304, 98, 92, "College Ave") + sign(310, 124, 84, "Broadway") +
      '<g class="ev-sp"><circle cx="150" cy="160" r="3" fill="' + PLUM + '" opacity=".7"/></g><g class="ev-sp ev-sp2"><circle cx="156" cy="154" r="2" fill="' + PLUM + '" opacity=".6"/></g>',
      sky("ev5", "#1c1840", "#e0906a"));
  }

  window.SCENES = { evstation: evstation, evstudio: evstudio, evchase: evchase, evwood: evwood, evcorner: evcorner };
})();
