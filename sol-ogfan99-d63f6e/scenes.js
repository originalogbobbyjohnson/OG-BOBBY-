/* sol scenes (Regions tab: The Northwest; Seattle). CSS classes prefixed so- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes soflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.so-flk{animation:soflick 2.4s infinite}.so-flk2{animation-delay:.8s}' +
    '@keyframes sopetal{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-50px,230px) rotate(300deg)}}.so-pt{transform-box:fill-box;animation:sopetal 6s linear infinite}.so-pt2{animation-delay:-2s}.so-pt3{animation-delay:-4s}' +
    '@keyframes soglow{0%,100%{opacity:.4}50%{opacity:1}}.so-glow{animation:soglow 1.6s ease-in-out infinite}.so-g2{animation-delay:-.8s}' +
    '@keyframes sosweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.so-sw{transform-box:fill-box;transform-origin:50% 0%;animation:sosweep 3.4s ease-in-out infinite}.so-sw2{animation-delay:-1.7s}' +
    '@keyframes sowheel{to{transform:rotate(360deg)}}.so-wh{transform-box:fill-box;transform-origin:50% 50%;animation:sowheel 24s linear infinite}' +
    '@keyframes sobob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.so-bob{animation:sobob .8s ease-in-out infinite}.so-bob2{animation-delay:-.4s}' +
    '@keyframes sospray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.so-sp{animation:sospray 1.4s ease-out infinite}.so-sp2{animation-delay:.45s}' +
    '@keyframes sogull{0%{transform:translateX(-40px)}100%{transform:translateX(440px)}}.so-gl{animation:sogull 14s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (cx, cy, txt, color) => '<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="' + color + '"/><text x="' + cx + '" y="' + (cy + 5) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const ORANGE = "#ffb347", SKY = "#7fd1ff", PURPLE = "#b07cf0", LINK1 = "#28813f";

  /* 1. University of Washington Station, 1 Line: the deep platform under Montlake by Husky Stadium, warm-lit tiled walls, the black sign with the green 1 bullet, the white Link train sliding in */
  function sostation() {
    const tr = '<g class="anim-train"><rect x="22" y="104" width="330" height="78" rx="12" fill="#f2f4f6" stroke="#8a929a" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 50) + '" y="116" width="36" height="28" rx="3" fill="#1d262e"/>').join("") +
      '<rect x="22" y="150" width="330" height="12" fill="#1f5fa8"/><rect x="22" y="162" width="330" height="4" fill="' + LINK1 + '"/>' +
      '<path d="M352 108q14 4 14 40v28q0 6 -14 6z" fill="#dfe3e7" stroke="#8a929a" stroke-width="2"/><circle cx="356" cy="172" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#cdbfa6"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 0v92" stroke="#bcae94" stroke-width="1"/>').join("") +
      '<rect x="0" y="0" width="400" height="12" fill="#3a3632"/>' + [40, 160, 280].map((x, i) => '<rect class="so-flk' + (i === 1 ? " so-flk2" : "") + '" x="' + x + '" y="4" width="80" height="4" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="80" width="400" height="12" fill="#6b3fa0"/><rect x="0" y="92" width="400" height="98" fill="#22262c"/>' + tr +
      '<rect x="0" y="190" width="400" height="8" fill="#f2c200"/><rect x="0" y="198" width="400" height="62" fill="#b8b2a8"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle cx="' + (16 + i * 34) + '" cy="230" r="2" fill="#9a958c"/>').join("") +
      '<rect x="40" y="22" width="320" height="38" rx="3" fill="#111"/><text x="54" y="47" ' + font + ' font-size="15" fill="#fff">University of Washington</text>' + bullet(334, 41, "1", LINK1),
      "");
  }

  /* 2. The Quad at UW, where he graduated in 2011: cherry trees in full pink bloom in front of the brick Collegiate Gothic halls, petals falling */
  function soquad() {
    const tree = (x, s) => '<g transform="translate(' + x + ' 150) scale(' + s + ')"><path d="M0 60v-50M0 20l-22 -26M0 14l24 -24M0 30l-30 -8" stroke="#4a2e24" stroke-width="7" fill="none" stroke-linecap="round"/>' +
      [[-30, -18, 26], [0, -34, 30], [28, -20, 26], [-12, -6, 22], [16, -2, 22]].map(c => '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + c[2] + '" fill="#f7b8cf"/>').join("") +
      [[-20, -26, 8], [10, -40, 9], [30, -10, 7]].map(c => '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + c[2] + '" fill="#fce3ec"/>').join("") + '</g>';
    const petals = Array.from({ length: 12 }, (_, i) => '<ellipse class="so-pt' + ["", " so-pt2", " so-pt3"][i % 3] + '" cx="' + (30 + i * 33) + '" cy="' + (60 + (i * 23) % 50) + '" rx="3" ry="2" fill="#f7b8cf"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#so2)"/>' +
      '<g fill="#9a5a44"><rect x="20" y="40" width="360" height="120"/></g>' +
      [60, 140, 220, 300].map(x => '<path d="M' + x + ' 40v-22l12 -12l12 12v22z" fill="#8a4e3a"/><rect x="' + (x + 6) + '" y="60" width="12" height="34" fill="#2a3442"/><path d="M' + (x + 6) + ' 60q6 -10 12 0" fill="#2a3442"/>').join("") +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (30 + i * 40) + '" y="104" width="14" height="22" fill="#2a3442"/>').join("") +
      '<path d="M20 40h360" stroke="#d8c8a8" stroke-width="3"/><path d="M20 100h360" stroke="#d8c8a8" stroke-width="2"/>' +
      '<rect x="0" y="160" width="400" height="100" fill="#5e8a4a"/><path d="M0 214h400" stroke="#cfc6b4" stroke-width="16"/>' +
      tree(60, 1) + tree(170, 1.1) + tree(290, 1) + tree(380, .9) + petals,
      sky("so2", "#9fd0f0", "#e6f2fa"));
  }

  /* 3. The arena at Seattle Center (KeyArena, now Climate Pledge Arena) where he watched the Sonics as a kid and opened for Macklemore: the sweeping roof, the glass walls lit up, spotlights at night */
  function soarena() {
    return svg(
      '<rect width="400" height="260" fill="url(#so3)"/>' +
      '<path class="so-sw" d="M110 0l-50 180h100z" fill="#fff6c8" opacity=".12"/><path class="so-sw so-sw2" d="M290 0l-50 180h100z" fill="' + SKY + '" opacity=".14"/>' +
      '<path d="M30 120q170 -90 340 0z" fill="#b8c2cc"/><path d="M30 120q170 -90 340 0" stroke="#e8edf2" stroke-width="5" fill="none"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (60 + i * 35) + ' ' + (120 - Math.round(Math.sin((i + 1) / 10 * Math.PI) * 40)) + 'v6" stroke="#8a96a2" stroke-width="2"/>').join("") +
      '<rect x="40" y="120" width="320" height="70" fill="#1c2a3a"/>' + Array.from({ length: 16 }, (_, i) => '<rect class="' + (i % 3 ? "" : "so-glow" + (i % 2 ? " so-g2" : "")) + '" x="' + (44 + i * 20) + '" y="126" width="16" height="58" fill="' + (i % 2 ? "#ffd98a" : "#7fd1ff") + '" opacity=".75"/>').join("") +
      '<path d="M40 120h320" stroke="#e8edf2" stroke-width="3"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#2e3238"/>' +
      Array.from({ length: 16 }, (_, i) => '<g class="so-bob' + (i % 2 ? " so-bob2" : "") + '"><circle cx="' + (8 + i * 26) + '" cy="226" r="7" fill="#0a0c10"/><rect x="' + (i * 26) + '" y="232" width="17" height="28" rx="5" fill="#0a0c10"/></g>').join(""),
      sky("so3", "#0b1430", "#3a2a5a"));
  }

  /* 4. The marquee on 1st Ave the night he sold out his hometown's big old ballroom (Live at the Showbox, 2019): bulbs chasing, his name in lights */
  function soshow() {
    const bulbs = (x, y, w, h) => { let s = ""; const n = Math.round(w / 12); for (let i = 0; i <= n; i++) { s += '<circle class="so-glow' + (i % 2 ? " so-g2" : "") + '" cx="' + (x + i * w / n) + '" cy="' + y + '" r="2.6" fill="#ffe08a"/><circle class="so-glow' + (i % 2 ? "" : " so-g2") + '" cx="' + (x + i * w / n) + '" cy="' + (y + h) + '" r="2.6" fill="#ffe08a"/>'; } return s; };
    return svg(
      '<rect width="400" height="260" fill="url(#so4)"/>' +
      '<rect x="0" y="30" width="400" height="170" fill="#3a2a2a"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (20 + i * 64) + '" y="40" width="40" height="34" fill="' + (i % 2 ? "#2a3442" : "#ffd98a") + '"/>').join("") +
      '<path d="M50 96h300l-14 70h-272z" fill="#151018"/>' + bulbs(60, 102, 280, 58) +
      '<rect x="74" y="112" width="252" height="40" fill="#f7f3ea"/><text x="200" y="130" text-anchor="middle" ' + font + ' font-size="16" fill="#111" letter-spacing="3">TONIGHT: SOL</text>' +
      '<text x="200" y="148" text-anchor="middle" ' + font + ' font-size="12" fill="#c0392b" letter-spacing="4">SOLD OUT</text>' +
      '<rect x="120" y="166" width="160" height="34" fill="#c89a5a"/><rect x="132" y="170" width="60" height="30" fill="#ffe2a8"/><rect x="208" y="170" width="60" height="30" fill="#ffe2a8"/>' +
      '<rect x="0" y="200" width="400" height="20" fill="#8a857c"/><rect x="0" y="220" width="400" height="40" fill="#2e3238"/>' +
      Array.from({ length: 10 }, (_, i) => '<g class="so-bob' + (i % 2 ? " so-bob2" : "") + '"><circle cx="' + (20 + i * 40) + '" cy="196" r="7" fill="#0a0c10"/><rect x="' + (12 + i * 40) + '" y="202" width="16" height="20" rx="5" fill="#0a0c10"/></g>').join("") +
      '<text x="18" y="248" ' + font + ' font-size="10" fill="#c9ced6" letter-spacing="3">1ST AVE</text>',
      sky("so4", "#0a0a1a", "#2a1a3a"));
  }

  /* 5. 1st Ave and Pike St, downtown by the water: green signs, SOL tagged big on the wall, the Great Wheel turning over Elliott Bay behind, gulls going by */
  function socorner() {
    const spokes = Array.from({ length: 21 }, (_, i) => { const a = i * 2 * Math.PI / 21; return '<path d="M0 0L' + (Math.cos(a) * 64).toFixed(1) + ' ' + (Math.sin(a) * 64).toFixed(1) + '" stroke="#e8edf2" stroke-width="1.2"/><rect x="' + (Math.cos(a) * 64 - 4).toFixed(1) + '" y="' + (Math.sin(a) * 64 - 3).toFixed(1) + '" width="8" height="7" rx="2" fill="#f7f3ea"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#so5)"/>' +
      '<rect x="0" y="118" width="400" height="20" fill="#3a6a8a"/>' +
      '<g transform="translate(250 72)"><g class="so-wh"><circle r="64" fill="none" stroke="#e8edf2" stroke-width="3"/>' + spokes + '</g><circle r="6" fill="#c9ced6"/></g>' +
      '<path d="M250 72l-26 64M250 72l26 64" stroke="#c9ced6" stroke-width="4"/>' +
      '<g class="so-gl"><path d="M0 30q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      '<rect x="0" y="134" width="400" height="90" fill="#7a4a3a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (142 + i * 8) + 'h400" stroke="#6a3e30" stroke-width="1"/>').join("") +
      tag("SOL", 24, 200, 66, ORANGE, -6) + tag("ZILLA", 150, 180, 30, SKY, -4) + tag("STAGE DIVE", 140, 214, 18, "#fff", -3) + tag("YOURS TRULY", 24, 218, 14, PURPLE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55585e"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(304, 98, 90, "1st Ave") + sign(304, 124, 90, "Pike St") +
      '<g class="so-sp"><circle cx="134" cy="170" r="3" fill="' + ORANGE + '" opacity=".7"/></g><g class="so-sp so-sp2"><circle cx="140" cy="164" r="2" fill="' + ORANGE + '" opacity=".6"/></g>',
      sky("so5", "#ffcf8a", "#f28a5a"));
  }

  window.SCENES = { sostation: sostation, soquad: soquad, soarena: soarena, soshow: soshow, socorner: socorner };
})();
