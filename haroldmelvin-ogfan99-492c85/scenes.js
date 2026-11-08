/* haroldmelvin scenes (Regions tab: Philadelphia; North Philly, N Woodstock St & W Norris St, where Blue Note Lawrence Brown grew up singing on the corner). CSS classes prefixed bn- (the page's own anim-train is kept).
   1 19th St & Norris St on SEPTA's Route 33 bus: North Philly brick row homes with white cornices, the bus sliding in, the black stop sign with the red 33 badge.
   2 Don's Doo Shop, the North Philly barbershop where Bernard Wilson came up as a teenager: the striped pole spinning, the chairs through the window, three kids harmonizing on the pavement.
   3 Club Harlem on Kentucky Ave in Atlantic City, one of the rooms the Blue Notes worked: the neon sign flickering, the marquee, an AC jitney rolling past.
   4 The Mitch Thomas Show on Channel 12, the teen dance show the early Blue Notes sang on: a wood-cabinet TV set with rabbit ears, black-and-white dancers bouncing on the screen.
   5 N Woodstock St and W Norris St: green signs, BLUE NOTES tagged on the brick, the Church of the Advocate's grey Gothic tower behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bnglow{0%,100%{opacity:.45}50%{opacity:1}}.bn-glow{animation:bnglow 2.4s ease-in-out infinite}.bn-glow2{animation-delay:-1.2s}' +
    '@keyframes bnflick{0%,100%{opacity:1}8%{opacity:.3}12%{opacity:1}60%{opacity:.85}64%{opacity:.2}68%{opacity:1}}.bn-flick{animation:bnflick 3s linear infinite}' +
    '@keyframes bnpole{from{transform:translateY(0)}to{transform:translateY(-16px)}}.bn-pole{animation:bnpole 1s linear infinite}' +
    '@keyframes bnnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.bn-note{animation:bnnote 3.2s linear infinite}.bn-n2{animation-delay:-1.1s}.bn-n3{animation-delay:-2.2s}' +
    '@keyframes bnsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.bn-sway{transform-box:fill-box;transform-origin:50% 100%;animation:bnsway 1.8s ease-in-out infinite}.bn-sw2{animation-delay:-.6s}.bn-sw3{animation-delay:-1.2s}' +
    '@keyframes bnbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.bn-bounce{animation:bnbounce .7s ease-in-out infinite}.bn-b2{animation-delay:-.35s}' +
    '@keyframes bncar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.bn-car{animation:bncar 9s linear infinite}' +
    '@keyframes bnscan{from{transform:translateY(0)}to{transform:translateY(120px)}}.bn-scan{animation:bnscan 2.5s linear infinite}' +
    '@keyframes bnspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bn-sp{animation:bnspray 1.4s ease-out infinite}.bn-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  /* a 9 with a straight stem */
  const nine = (x, y, h, col) => '<circle cx="' + (x + h * 0.27) + '" cy="' + (y - h * 0.7) + '" r="' + (h * 0.22) + '" fill="none" stroke="' + col + '" stroke-width="' + (h * 0.17) + '"/><rect x="' + (x + h * 0.40) + '" y="' + (y - h * 0.72) + '" width="' + (h * 0.17) + '" height="' + (h * 0.72) + '" fill="' + col + '"/>';
  /* text where every 9 gets a straight stem: fixed advance per char so the drawn 9 lines up */
  const t9 = (str, x, y, size, col) => { const cw = size * 0.6; let o = "", run = "", rx = x; const flush = () => { if (run) { o += '<text x="' + rx + '" y="' + y + '" ' + font + ' font-size="' + size + '" fill="' + col + '" textLength="' + (run.length * cw).toFixed(1) + '" lengthAdjust="spacingAndGlyphs">' + run.replace(/&/g, "&amp;") + '</text>'; rx += run.length * cw; run = ""; } };
    for (const ch of str) { if (ch === "9") { flush(); o += nine(rx + size * 0.04, y, size * 0.74, col); rx += cw; } else run += ch; } flush(); return o; };
  const t9w = (str, size) => str.length * size * 0.6;
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "bn-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const BLUE = "#4aa3ff", GOLD = "#e8c15a", RED = "#e86a5a";
  const note = (x, y, cls, col) => '<g class="bn-note ' + cls + '"><text x="' + x + '" y="' + y + '" font-size="18" fill="' + col + '">&#9834;</text></g>';
  /* North Philly brick row homes with white cornices */
  const rows = (x0, n, w, top, bot, cls) => Array.from({ length: n }, (_, i) => { const x = x0 + i * w, y = top + (i % 2) * 6; return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (bot - y) + '" fill="' + ["#7a3a2e", "#8a4636", "#6e3428"][i % 3] + '" stroke="#5a2a20"/><rect x="' + (x - 1) + '" y="' + (y - 5) + '" width="' + (w + 2) + '" height="7" fill="#e8e2d6"/>' +
    [0, 1].map(r => '<rect class="' + ((i + r) % 3 ? "" : cls) + '" x="' + (x + w / 2 - 8) + '" y="' + (y + 10 + r * 30) + '" width="16" height="20" fill="' + ((i + r) % 3 ? "#2a2230" : "#ffd98a") + '" stroke="#e8e2d6" stroke-width="1.5"/>').join(""); }).join("");

  /* 1. 19th St & Norris St, Route 33 bus */
  function bnstation() {
    const bus = '<g class="anim-train"><rect x="40" y="132" width="270" height="68" rx="8" fill="#eef0f2" stroke="#6a7078" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 38) + '" y="142" width="30" height="26" rx="3" fill="#1d2731"/>').join("") +
      '<rect x="40" y="174" width="270" height="5" fill="#1f4e9a"/><rect x="40" y="180" width="270" height="3" fill="#c8102e"/>' +
      '<rect x="286" y="140" width="22" height="40" rx="3" fill="#1d2731"/><rect x="262" y="134" width="46" height="8" rx="2" fill="#111"/><text x="285" y="140.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb000">5TH-MARKET</text>' +
      '<circle cx="304" cy="190" r="3.5" fill="#fff6c2" class="bn-glow"/>' + [92, 262].map(x => '<circle cx="' + x + '" cy="200" r="9" fill="#2a2a2a"/><circle cx="' + x + '" cy="200" r="4" fill="#888"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bn-s1)"/>' + stars(10) +
      rows(0, 8, 50, 74, 202, "bn-glow") +
      '<rect x="0" y="200" width="400" height="12" fill="#b8b2a8"/><rect x="0" y="212" width="400" height="48" fill="#45433f"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 44 + 8) + '" y="236" width="24" height="4" fill="#e8d26a"/>').join("") +
      bus +
      '<rect x="356" y="112" width="5" height="100" fill="#2f2f2f"/><rect x="340" y="108" width="38" height="24" rx="3" fill="#fff" stroke="#111"/><circle cx="352" cy="120" r="8" fill="#ef3340"/><text x="352" y="123.5" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">33</text><text x="370" y="123" text-anchor="middle" ' + font + ' font-size="7" fill="#1f4e9a">BUS</text>' +
      '<rect x="128" y="14" width="258" height="36" rx="3" fill="#111"/>' + t9("19th St & Norris St", 140, 38, 15, "#fff") +
      '<circle cx="364" cy="32" r="12" fill="#ef3340"/><text x="364" y="37" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">33</text>',
      sky("bn-s1", "#0e1430", "#4a5a8a"));
  }

  /* 2. Don's Doo Shop */
  function bnbarber() {
    const kid = (x, cls) => '<g class="bn-sway ' + cls + '"><circle cx="' + x + '" cy="176" r="8" fill="#1a1420"/><path d="M' + (x - 11) + ' 218l2 -32q9 -6 18 0l2 32z" fill="#2a3a5a"/><rect x="' + (x - 9) + '" y="218" width="7" height="24" fill="#1a2238"/><rect x="' + (x + 2) + '" y="218" width="7" height="24" fill="#1a2238"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bn-s2)"/>' +
      /* shop front */
      '<rect x="20" y="40" width="300" height="190" fill="#6a3a2e"/><rect x="20" y="36" width="300" height="10" fill="#e8e2d6"/>' +
      '<rect x="40" y="62" width="200" height="120" fill="#ffe6a8" stroke="#2a1a14" stroke-width="5"/>' +
      /* inside: mirror, two chairs */
      '<rect x="56" y="74" width="168" height="34" fill="#cfe6ee" stroke="#8a7a6a" stroke-width="2"/>' +
      [96, 180].map(x => '<rect x="' + (x - 18) + '" y="128" width="36" height="22" rx="4" fill="#b82a2a"/><rect x="' + (x - 20) + '" y="116" width="40" height="14" rx="4" fill="#b82a2a"/><rect x="' + (x - 3) + '" y="150" width="6" height="18" fill="#bbb"/><rect x="' + (x - 14) + '" y="166" width="28" height="5" fill="#999"/>').join("") +
      '<text x="140" y="100" text-anchor="middle" ' + font + ' font-size="16" fill="#8a1a1a" letter-spacing="1" opacity=".9">DON\'S DOO SHOP</text>' +
      /* door */
      '<rect x="256" y="70" width="48" height="112" fill="#3a2418" stroke="#2a1a14" stroke-width="3"/><rect x="264" y="80" width="32" height="44" fill="#ffe6a8"/><circle cx="296" cy="132" r="3" fill="' + GOLD + '"/>' +
      /* barber pole */
      '<rect x="326" y="56" width="22" height="10" rx="3" fill="#ccc"/><rect x="326" y="150" width="22" height="10" rx="3" fill="#ccc"/>' +
      '<clipPath id="bn-polec"><rect x="328" y="66" width="18" height="84"/></clipPath><rect x="328" y="66" width="18" height="84" fill="#fff"/>' +
      '<g clip-path="url(#bn-polec)"><g class="bn-pole">' + Array.from({ length: 8 }, (_, i) => '<path d="M328 ' + (60 + i * 16) + 'l18 -10v6l-18 10z" fill="' + (i % 2 ? "#1f4e9a" : "#c8102e") + '"/>').join("") + '</g></g>' +
      /* pavement + three kids harmonizing */
      '<rect x="0" y="230" width="400" height="30" fill="#9a948a"/><rect x="0" y="226" width="400" height="5" fill="#c8c2b8"/>' +
      kid(196, "") + kid(226, "bn-sw2") + kid(256, "bn-sw3") +
      note(180, 160, "", GOLD) + note(270, 150, "bn-n2", BLUE) + note(230, 140, "bn-n3", "#fff") +
      '<rect x="352" y="80" width="48" height="150" fill="#5a3226"/>',
      sky("bn-s2", "#162040", "#6a6a9a"));
  }

  /* 3. Club Harlem, Kentucky Ave, Atlantic City */
  function bnclub() {
    return svg(
      '<rect width="400" height="260" fill="url(#bn-s3)"/>' + stars(14) +
      '<rect x="0" y="90" width="70" height="140" fill="#2a2440"/><rect x="330" y="80" width="70" height="150" fill="#2a2440"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect class="' + (i % 3 ? "" : "bn-glow") + '" x="' + (i < 4 ? 10 + (i % 2) * 30 : 340 + (i % 2) * 30) + '" y="' + (104 + Math.floor((i % 4) / 2) * 40) + '" width="16" height="20" fill="' + (i % 2 ? "#ffd98a" : "#3a3256") + '"/>').join("") +
      /* the club front */
      '<rect x="70" y="70" width="260" height="160" fill="#1a1428"/><rect x="70" y="70" width="260" height="8" fill="#3a2a5a"/>' +
      '<rect x="96" y="22" width="208" height="46" rx="6" fill="#120a1e" stroke="#ff4fa0" stroke-width="2"/>' +
      '<text class="bn-flick" x="200" y="56" text-anchor="middle" font-family="Brush Script MT, cursive" font-style="italic" font-size="32" fill="#ff7ac0" stroke="#ff4fa0" stroke-width=".6">Club Harlem</text>' +
      /* marquee with chasing bulbs */
      '<rect x="88" y="96" width="224" height="44" fill="#f4ecd4" stroke="#c9a24a" stroke-width="3"/>' +
      Array.from({ length: 20 }, (_, i) => '<circle class="bn-glow ' + (i % 2 ? "bn-glow2" : "") + '" cx="' + (94 + i * 11.2) + '" cy="92" r="2.6" fill="#fff1b0"/>').join("") +
      '<text x="200" y="114" text-anchor="middle" ' + font + ' font-size="10" fill="#1a1428" letter-spacing="2">TONIGHT</text><text x="200" y="132" text-anchor="middle" ' + font + ' font-size="14" fill="#1f3e8a" letter-spacing="1">THE BLUE NOTES</text>' +
      '<rect x="160" y="160" width="80" height="70" fill="#5a1a2a"/><rect x="198" y="160" width="4" height="70" fill="#2a0a12"/><rect x="150" y="150" width="100" height="10" fill="#c9a24a"/>' +
      '<rect x="100" y="164" width="44" height="44" fill="#ff9ac8" opacity=".35"/><rect x="256" y="164" width="44" height="44" fill="#ff9ac8" opacity=".35"/>' +
      note(116, 196, "", "#fff") + note(272, 196, "bn-n2", GOLD) +
      /* Kentucky Ave sign + street + a jitney */
      '<rect x="340" y="40" width="4" height="190" fill="#2f2f2f"/>' + sign(304, 34, 92, "Kentucky Av") +
      '<rect x="0" y="230" width="400" height="30" fill="#3a3836"/><path d="M0 246h400" stroke="#e8d26a" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="bn-car"><rect x="0" y="222" width="76" height="26" rx="6" fill="#9ad0ec"/><rect x="6" y="226" width="58" height="10" fill="#1d2731"/><rect x="66" y="226" width="8" height="10" fill="#1d2731"/><text x="34" y="245" text-anchor="middle" ' + font + ' font-size="6" fill="#1f3e8a">JITNEY</text><circle cx="16" cy="250" r="5" fill="#111"/><circle cx="60" cy="250" r="5" fill="#111"/></g>',
      sky("bn-s3", "#0a0a20", "#3a2a5a"));
  }

  /* 4. The Mitch Thomas Show on Channel 12 */
  function bntv() {
    const dancer = (x, cls, skirt) => '<g class="bn-bounce ' + cls + '"><circle cx="' + x + '" cy="' + 112 + '" r="5" fill="#ddd"/><path d="M' + (x - 6) + ' 140l2 -22h8l2 22z" fill="' + (skirt ? "#bbb" : "#888") + '"/>' + (skirt ? '<path d="M' + (x - 10) + ' 146l4 -12h12l4 12z" fill="#ccc"/>' : '') + '<rect x="' + (x - 5) + '" y="140" width="3" height="12" fill="#999"/><rect x="' + (x + 2) + '" y="140" width="3" height="12" fill="#999"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#3a2e3a"/>' +
      /* wallpaper stripes + lamp */
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="0" width="8" height="190" fill="#443644"/>').join("") +
      '<rect x="0" y="190" width="400" height="70" fill="#5a3e2a"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (196 + i * 8) + 'h400" stroke="#4a3220" stroke-width="1"/>').join("") +
      '<path d="M330 64h44l-8 -30h-28z" fill="#e8d6a0" class="bn-glow"/><rect x="350" y="64" width="4" height="100" fill="#8a7a5a"/><rect x="336" y="160" width="32" height="30" fill="#6a4a2a"/>' +
      /* TV cabinet */
      '<rect x="70" y="52" width="240" height="170" rx="10" fill="#7a4a24" stroke="#4a2a12" stroke-width="4"/><rect x="88" y="66" width="160" height="124" rx="16" fill="#1a1a1a"/>' +
      '<clipPath id="bn-scr"><rect x="96" y="72" width="144" height="112" rx="14"/></clipPath>' +
      '<g clip-path="url(#bn-scr)"><rect x="96" y="72" width="144" height="112" fill="#6a6a6a"/><rect x="96" y="150" width="144" height="34" fill="#4a4a4a"/>' +
      dancer(116, "", true) + dancer(136, "bn-b2", false) + dancer(160, "", false) + dancer(182, "bn-b2", true) + dancer(204, "", true) + dancer(224, "bn-b2", false) +
      '<rect x="100" y="78" width="136" height="18" fill="#2a2a2a"/><text x="168" y="91" text-anchor="middle" ' + font + ' font-size="9" fill="#eee" letter-spacing="1">MITCH THOMAS SHOW</text>' +
      '<rect class="bn-scan" x="96" y="66" width="144" height="4" fill="#fff" opacity=".18"/></g>' +
      /* dial + speaker */
      '<circle cx="280" cy="96" r="18" fill="#c9a24a" stroke="#4a2a12" stroke-width="3"/><text x="280" y="101" text-anchor="middle" ' + font + ' font-size="13" fill="#3a2a0a">12</text><text x="280" y="126" text-anchor="middle" ' + font + ' font-size="7" fill="#f4e8c8">CHANNEL</text>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="264" y="' + (140 + i * 8) + '" width="32" height="3" fill="#4a2a12"/>').join("") +
      '<rect x="84" y="222" width="12" height="20" fill="#4a2a12"/><rect x="284" y="222" width="12" height="20" fill="#4a2a12"/>' +
      /* rabbit ears */
      '<path d="M190 52l-30 -46M190 52l34 -44" stroke="#bbb" stroke-width="2.5"/><ellipse cx="190" cy="50" rx="12" ry="5" fill="#333"/>' +
      note(40, 120, "", GOLD) + note(320, 220, "bn-n2", BLUE));
  }

  /* 5. N Woodstock St and W Norris St */
  function bncorner() {
    const advocate = '<g opacity=".95"><rect x="120" y="40" width="44" height="120" fill="#8a8a92"/>' +
      '<path d="M116 40h52v-6h-52z" fill="#7a7a82"/>' + [118, 130, 142, 154, 164].map(x => '<path d="M' + x + ' 34l3 -12l3 12z" fill="#7a7a82"/>').join("") +
      '<path d="M132 70q10 -18 20 0v30h-20z" fill="#2a2a40"/><path d="M132 112q10 -14 20 0v22h-20z" fill="#2a2a40"/>' +
      '<rect x="164" y="80" width="110" height="80" fill="#9a9aa2"/><path d="M164 80l55 -30l55 30z" fill="#6a6a72"/>' +
      [180, 210, 240].map(x => '<path class="bn-glow" d="M' + x + ' 140v-34q8 -14 16 0v34z" fill="#c8a24a" opacity=".85"/>').join("") +
      '<circle cx="219" cy="72" r="9" fill="#2a2a40" stroke="#7a7a82" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bn-s5)"/>' + stars(16) +
      advocate +
      rows(0, 2, 56, 96, 226, "bn-glow") +
      /* brick wall with the tags */
      '<rect x="112" y="150" width="288" height="76" fill="#7a3e30"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M112 ' + (158 + i * 8) + 'h288" stroke="#6a3226" stroke-width="1"/>').join("") +
      tag("BLUE NOTES", 122, 198, 34, BLUE, -5) + tag("BAD LUCK", 130, 220, 14, GOLD, -3) + tag("HAROLD M", 286, 220, 14, RED, -4) +
      '<rect x="0" y="226" width="400" height="34" fill="#4a4844"/><rect x="0" y="224" width="400" height="4" fill="#d8dce2"/><path d="M0 240h400M0 248h400" stroke="#7a766e" stroke-width="2"/>' +
      '<g class="bn-car"><rect x="0" y="236" width="62" height="13" rx="5" fill="' + RED + '"/><rect x="12" y="228" width="34" height="10" rx="3" fill="' + RED + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="50" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="384" y="62" width="6" height="164" fill="#2f2f2f"/>' + sign(278, 64, 118, "N Woodstock St") + sign(278, 90, 118, "W Norris St") +
      '<g class="bn-sp"><circle cx="300" cy="176" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="bn-sp bn-sp2"><circle cx="306" cy="170" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("bn-s5", "#0c1026", "#3a3a6a"));
  }

  window.SCENES = { bnstation: bnstation, bnbarber: bnbarber, bnclub: bnclub, bntv: bntv, bncorner: bncorner };
})();
