/* stylistics scenes (Regions tab: Philadelphia; North Philly, N Broad St & W Oxford St, the Virtue Studios block where the group cut its first record). CSS classes prefixed sy- (the page's own anim-train is kept).
   1 Broad St & Oxford St on SEPTA's Route 16 bus up North Broad: Victorian brownstones, the silver-white bus sliding in, the black stop sign with the 16 badge.
   2 Virtue Studios, 1618 N Broad St, 1970: the $400 session that cut "You're a Big Girl Now" - console, tape reels spinning, VU needles, five mics through the glass.
   3 The Mike Douglas Show stage in Philadelphia (six visits): TV cameras with red tally lights, the blinking APPLAUSE sign, five singers in matching powder-blue tuxes (silhouettes, no faces).
   4 London, 1975: "Can't Give You Anything (But My Love)" at No. 1 in the UK, ten Top of the Pops visits: Elizabeth Tower in honey stone, the Thames, a red double-decker rolling past, the chart card.
   5 N Broad St and W Oxford St: green signs, STYLISTICS tagged on the brick, the Blue Horizon's brownstone front and blue sign glowing down Broad behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes syglow{0%,100%{opacity:.45}50%{opacity:1}}.sy-glow{animation:syglow 2.4s ease-in-out infinite}.sy-glow2{animation-delay:-1.2s}' +
    '@keyframes syspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.sy-spin{transform-box:fill-box;transform-origin:50% 50%;animation:syspin 2.4s linear infinite}' +
    '@keyframes syvu{0%,100%{transform:rotate(-30deg)}35%{transform:rotate(18deg)}60%{transform:rotate(-8deg)}80%{transform:rotate(26deg)}}.sy-vu{transform-box:fill-box;transform-origin:50% 100%;animation:syvu 1.3s ease-in-out infinite}.sy-vu2{animation-delay:-.5s}' +
    '@keyframes synote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.sy-note{animation:synote 3.2s linear infinite}.sy-n2{animation-delay:-1.1s}.sy-n3{animation-delay:-2.2s}' +
    '@keyframes sysway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.sy-sway{transform-box:fill-box;transform-origin:50% 100%;animation:sysway 1.8s ease-in-out infinite}.sy-sw2{animation-delay:-.4s}.sy-sw3{animation-delay:-.8s}.sy-sw4{animation-delay:-1.2s}.sy-sw5{animation-delay:-1.6s}' +
    '@keyframes sycar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.sy-car{animation:sycar 9s linear infinite}' +
    '@keyframes syblink{0%,49%{opacity:1}50%,100%{opacity:.15}}.sy-blink{animation:syblink 1.2s steps(1) infinite}' +
    '@keyframes syspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sy-sp{animation:syspray 1.4s ease-out infinite}.sy-sp2{animation-delay:.45s}' +
    '@keyframes syhand{from{transform:rotate(0)}to{transform:rotate(360deg)}}.sy-hand{transform-box:view-box;transform-origin:96px 92px;animation:syhand 12s linear infinite}' +
    '@keyframes syripple{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}.sy-rip{animation:syripple 3s ease-in-out infinite}.sy-rip2{animation-delay:-1.5s}' +
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
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "sy-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const BLUE = "#9ad7ff", GOLD = "#f4c95d", PINK = "#ff8fb1";
  const note = (x, y, cls, col) => '<g class="sy-note ' + cls + '"><text x="' + x + '" y="' + y + '" font-size="18" fill="' + col + '">&#9834;</text></g>';
  /* a singer silhouette in a matching tux (no face) */
  const singer = (x, y, col, cls) => '<g class="sy-sway ' + cls + '"><circle cx="' + x + '" cy="' + (y - 44) + '" r="7" fill="#1a1420"/><path d="M' + (x - 11) + ' ' + y + 'l2 -34q9 -6 18 0l2 34z" fill="' + col + '"/><path d="M' + (x - 3) + ' ' + (y - 34) + 'l3 6l3 -6z" fill="#fff"/><rect x="' + (x - 9) + '" y="' + y + '" width="7" height="22" fill="' + col + '"/><rect x="' + (x + 2) + '" y="' + y + '" width="7" height="22" fill="' + col + '"/></g>';

  /* 1. Broad St & Oxford St, Route 16 bus */
  function systation() {
    const bus = '<g class="anim-train"><rect x="40" y="128" width="270" height="70" rx="8" fill="#eef0f2" stroke="#6a7078" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 38) + '" y="138" width="30" height="26" rx="3" fill="#1d2731"/>').join("") +
      '<rect x="40" y="170" width="270" height="5" fill="#1f4e9a"/><rect x="40" y="176" width="270" height="3" fill="#c8102e"/>' +
      '<rect x="286" y="136" width="22" height="40" rx="3" fill="#1d2731"/><rect x="264" y="130" width="44" height="8" rx="2" fill="#111"/><text x="286" y="136.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb000">16 15TH-MARKET</text>' +
      '<circle cx="304" cy="186" r="3.5" fill="#fff6c2" class="sy-glow"/>' + [92, 262].map(x => '<circle cx="' + x + '" cy="198" r="9" fill="#2a2a2a"/><circle cx="' + x + '" cy="198" r="4" fill="#888"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sy-s1)"/>' + stars(10) +
      /* North Broad Victorian brownstones */
      '<rect x="0" y="62" width="96" height="140" fill="#6a4434"/><path d="M0 62h96l-6 -10h-84z" fill="#5a382a"/><rect x="96" y="76" width="84" height="126" fill="#7a5040"/><rect x="180" y="58" width="96" height="144" fill="#5e3c30"/><path d="M180 58l48 -18l48 18z" fill="#4e3026"/><rect x="276" y="80" width="124" height="122" fill="#6e4838"/>' +
      Array.from({ length: 16 }, (_, i) => { const xs = [10, 38, 66, 106, 136, 194, 224, 252, 290, 320, 350, 378, 10, 66, 194, 252]; const ys = [72, 72, 72, 86, 86, 70, 70, 70, 92, 92, 92, 92, 104, 104, 102, 102]; return '<rect class="' + (i % 4 ? "" : "sy-glow sy-glow2") + '" x="' + xs[i] + '" y="' + ys[i] + '" width="14" height="22" rx="6" fill="' + (i % 3 ? "#ffd98a" : "#2a2230") + '" opacity=".88"/>'; }).join("") +
      /* sidewalk + street */
      '<rect x="0" y="198" width="400" height="12" fill="#b8b2a8"/><rect x="0" y="210" width="400" height="50" fill="#45433f"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 44 + 8) + '" y="234" width="24" height="4" fill="#e8d26a"/>').join("") +
      bus +
      /* stop pole + black sign */
      '<rect x="356" y="110" width="5" height="100" fill="#2f2f2f"/><rect x="340" y="106" width="38" height="24" rx="3" fill="#fff" stroke="#111"/><circle cx="352" cy="118" r="8" fill="#1a1818" stroke="#fff" stroke-width="1.5"/><text x="352" y="121.5" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">16</text><text x="370" y="121" text-anchor="middle" ' + font + ' font-size="7" fill="#1f4e9a">BUS</text>' +
      '<rect x="128" y="14" width="258" height="36" rx="3" fill="#111"/><text x="140" y="38" ' + font + ' font-size="15" fill="#fff">Broad St &amp; Oxford St</text>' +
      '<circle cx="364" cy="32" r="12" fill="#1a1818" stroke="#fff" stroke-width="2"/><text x="364" y="37" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">16</text>',
      sky("sy-s1", "#121634", "#5a4a7a"));
  }

  /* 2. Virtue Studios, 1618 N Broad, 1970 */
  function systudio() {
    return svg(
      '<clipPath id="sy-glass"><rect x="192" y="14" width="192" height="92"/></clipPath>' + '<rect width="400" height="260" fill="#241c18"/>' +
      /* wall + plate */
      '<rect x="0" y="0" width="400" height="120" fill="#3a2c24"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 52) + '" y="0" width="2" height="120" fill="#2e221c"/>').join("") +
      '<rect x="18" y="12" width="150" height="34" rx="3" fill="#c9a24a" stroke="#7a5a1a" stroke-width="2"/><text x="93" y="27" text-anchor="middle" ' + font + ' font-size="10" fill="#3a2a0a">VIRTUE STUDIOS</text>' + t9("1618 N BROAD ST", 93 - t9w("1618 N BROAD ST", 8) / 2, 40, 8, "#3a2a0a") +
      /* glass to the live room with five mics */
      '<rect x="190" y="12" width="196" height="96" rx="4" fill="#1a2a3a" stroke="#6a5a4a" stroke-width="4"/>' +
      '<g clip-path="url(#sy-glass)">' + [214, 248, 282, 316, 350].map((x, i) => singer(x, 98, BLUE, "sy-sw" + (i + 1)).replace(/fill="#9ad7ff"/g, 'fill="#3a6a8a"') + '<rect x="' + (x + 13) + '" y="62" width="2" height="46" fill="#aaa"/><rect x="' + (x + 9) + '" y="50" width="8" height="14" rx="4" fill="#ccc"/>').join("") + '</g>' +
      '<rect x="190" y="12" width="196" height="96" rx="4" fill="#9ad7ff" opacity=".08"/>' +
      note(240, 40, "", GOLD) + note(330, 40, "sy-n2", PINK) +
      /* the $400 card */
      '<rect x="22" y="58" width="80" height="44" fill="#f4ecd4" transform="rotate(-4 62 80)"/><text x="62" y="76" text-anchor="middle" ' + font + ' font-size="13" fill="#a01818" transform="rotate(-4 62 80)">$400</text><text x="62" y="92" text-anchor="middle" ' + font + ' font-size="7" fill="#333" transform="rotate(-4 62 80)">ONE SESSION</text>' +
      t9("1970", 118, 96, 16, GOLD) +
      /* console */
      '<path d="M0 150l40 -30h320l40 30v110h-400z" fill="#4a4038"/><rect x="40" y="124" width="320" height="10" fill="#2a2420"/>' +
      Array.from({ length: 22 }, (_, i) => '<rect x="' + (52 + i * 14) + '" y="160" width="4" height="50" fill="#1a1612"/><rect x="' + (48 + i * 14) + '" y="' + (170 + (i * 13) % 30) + '" width="12" height="7" rx="1" fill="' + (i % 4 ? "#ddd" : GOLD) + '"/>').join("") +
      Array.from({ length: 22 }, (_, i) => '<circle cx="' + (54 + i * 14) + '" cy="146" r="3" fill="' + ["#c33", "#3a8", "#38c", "#cc3"][i % 4] + '"/>').join("") +
      /* tape machine reels */
      '<rect x="14" y="124" width="0" height="0"/>' +
      [[60, 228], [120, 228]].map(([x, y]) => '<g class="sy-spin"><circle cx="' + x + '" cy="' + y + '" r="22" fill="#1a1a1a" stroke="#8a8a8a" stroke-width="2"/><circle cx="' + x + '" cy="' + y + '" r="5" fill="#ccc"/><path d="M' + x + ' ' + (y - 18) + 'v10M' + (x - 15) + ' ' + (y + 9) + 'l8 -5M' + (x + 15) + ' ' + (y + 9) + 'l-8 -5" stroke="#888" stroke-width="4"/></g>').join("") +
      /* VU meters */
      [270, 330].map((x, i) => '<rect x="' + (x - 26) + '" y="212" width="52" height="34" rx="3" fill="#f4e8b8" stroke="#222" stroke-width="2"/><path d="M' + (x - 18) + ' 236q18 -16 36 0" fill="none" stroke="#a33" stroke-width="1"/><rect class="sy-vu ' + (i ? "sy-vu2" : "") + '" x="' + (x - 1) + '" y="218" width="2" height="24" fill="#111"/>').join(""));
  }

  /* 3. The Mike Douglas Show stage */
  function symike() {
    return svg(
      '<rect width="400" height="260" fill="#120c1c"/>' +
      /* stage backdrop: soft blue drapes + lights */
      '<rect x="20" y="20" width="360" height="140" fill="#1e2a52"/>' + Array.from({ length: 18 }, (_, i) => '<path d="M' + (20 + i * 20) + ' 20q10 70 0 140" stroke="#2c3c6e" stroke-width="6" fill="none"/>').join("") +
      Array.from({ length: 9 }, (_, i) => '<circle class="sy-glow ' + (i % 2 ? "sy-glow2" : "") + '" cx="' + (40 + i * 40) + '" cy="30" r="5" fill="#fff1b0"/>').join("") +
      '<rect x="110" y="40" width="180" height="22" rx="3" fill="#0e1430" stroke="' + GOLD + '" stroke-width="1.5"/><text x="200" y="55" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" letter-spacing="1">THE MIKE DOUGLAS SHOW</text>' +
      /* the floor + five singers in powder blue */
      '<rect x="20" y="150" width="360" height="14" fill="#c9b9a0"/>' +
      [120, 160, 200, 240, 280].map((x, i) => singer(x, 148, BLUE, "sy-sw" + (i + 1)) + '<rect x="' + (x - 1) + '" y="112" width="2" height="38" fill="#999"/>').join("") +
      note(90, 110, "", GOLD) + note(306, 104, "sy-n2", PINK) + note(200, 80, "sy-n3", "#fff") +
      /* APPLAUSE sign */
      '<rect x="146" y="168" width="108" height="20" rx="3" fill="#2a0a0a" stroke="#555"/><text class="sy-blink" x="200" y="182" text-anchor="middle" ' + font + ' font-size="12" fill="#ff4a4a" letter-spacing="2">APPLAUSE</text>' +
      /* cameras */
      [[54, 0], [346, 1]].map(([x, f]) => '<g><rect x="' + (x - 24) + '" y="186" width="48" height="30" rx="4" fill="#3a3a40" stroke="#222" stroke-width="2"/><rect x="' + (f ? x - 40 : x + 24) + '" y="194" width="16" height="14" fill="#2a2a30"/><circle class="sy-blink" cx="' + (x - 14) + '" cy="192" r="3" fill="#ff3030"/><rect x="' + (x - 3) + '" y="216" width="6" height="26" fill="#333"/><path d="M' + (x - 20) + ' 250l20 -10l20 10" stroke="#333" stroke-width="4" fill="none"/></g>').join("") +
      /* audience heads */
      Array.from({ length: 24 }, (_, i) => '<circle cx="' + (100 + (i % 12) * 18) + '" cy="' + (i < 12 ? 214 : 236) + '" r="8" fill="#0a0810"/>').join("") +
      '<rect x="0" y="244" width="400" height="16" fill="#0a0810"/>');
  }

  /* 4. London, 1975: UK No. 1 */
  function sylondon() {
    const tower = '<rect x="78" y="74" width="36" height="150" fill="#d8c38a"/><path d="M74 74h44l-4 -14h-36z" fill="#c8b07a"/><path d="M80 60l16 -40l16 40z" fill="#3a4a3a"/><rect x="94" y="8" width="4" height="14" fill="#c9a24a"/>' +
      '<circle cx="96" cy="92" r="14" fill="#f4efe0" stroke="#c9a24a" stroke-width="3"/>' + Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<rect x="' + (95.2 + 11 * Math.sin(a)).toFixed(1) + '" y="' + (91.2 - 11 * Math.cos(a)).toFixed(1) + '" width="1.6" height="1.6" fill="#222"/>'; }).join("") +
      '<path d="M96 92v-8" stroke="#111" stroke-width="2"/><path class="sy-hand" d="M96 92v-11" stroke="#111" stroke-width="1.2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (82 + (i % 3) * 10) + '" y="' + (120 + Math.floor(i / 3) * 40) + '" width="6" height="26" fill="#a8925a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sy-s4)"/>' + stars(8) +
      /* Parliament roofline */
      '<rect x="114" y="150" width="200" height="74" fill="#c8b07a"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (118 + i * 10) + '" y="142" width="4" height="10" fill="#c8b07a"/><rect class="' + (i % 5 ? "" : "sy-glow") + '" x="' + (118 + i * 10) + '" y="166" width="5" height="12" fill="' + (i % 3 ? "#ffe6a0" : "#6a5a3a") + '"/>').join("") +
      tower +
      /* the Thames */
      '<rect x="0" y="224" width="400" height="36" fill="#1a2a44"/>' + [0, 1, 2].map(i => '<path class="sy-rip ' + (i % 2 ? "sy-rip2" : "") + '" d="M' + (10 + i * 30) + ' ' + (234 + i * 8) + 'h60M' + (160 + i * 40) + ' ' + (232 + i * 9) + 'h70M' + (300 - i * 10) + ' ' + (238 + i * 7) + 'h50" stroke="#ffd98a" stroke-width="1.5" opacity=".5"/>').join("") +
      /* bridge deck + red double-decker */
      '<rect x="0" y="212" width="400" height="12" fill="#5a6a5a"/>' +
      '<g class="sy-car"><rect x="0" y="172" width="70" height="40" rx="5" fill="#c8102e"/><rect x="4" y="176" width="62" height="12" fill="#2a2a3a"/><rect x="4" y="194" width="62" height="10" fill="#2a2a3a"/><rect x="0" y="190" width="70" height="3" fill="#f4e8c8"/><circle cx="14" cy="212" r="5" fill="#111"/><circle cx="56" cy="212" r="5" fill="#111"/></g>' +
      /* UK No. 1 chart card */
      '<rect x="236" y="22" width="150" height="96" rx="6" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="311" y="44" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '" letter-spacing="1">UK SINGLES</text>' +
      '<text x="270" y="80" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="34" fill="#fff">1</text><text x="244" y="68" ' + font + ' font-size="9" fill="#fff">NO.</text>' +
      '<text x="336" y="64" text-anchor="middle" ' + font + ' font-size="8" fill="' + BLUE + '">CAN\'T GIVE YOU</text><text x="336" y="76" text-anchor="middle" ' + font + ' font-size="8" fill="' + BLUE + '">ANYTHING</text>' +
      t9("1975", 311 - t9w("1975", 12) / 2, 104, 12, PINK) + '<circle class="sy-glow" cx="248" cy="32" r="3" fill="' + PINK + '"/>',
      sky("sy-s4", "#0e1428", "#3a3a6a"));
  }

  /* 5. N Broad St and W Oxford St */
  function sycorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sy-s5)"/>' + stars(16) +
      /* the Blue Horizon's brownstone front down Broad */
      '<rect x="120" y="66" width="130" height="92" fill="#6a4a3a"/><path d="M116 66h138l-6 -10h-126z" fill="#5a3c2e"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect class="' + (i % 4 ? "" : "sy-glow") + '" x="' + (130 + (i % 3) * 40) + '" y="' + (76 + Math.floor(i / 3) * 26) + '" width="14" height="18" rx="6" fill="' + (i % 2 ? "#ffd98a" : "#2a2230") + '"/>').join("") +
      '<rect x="252" y="60" width="16" height="98" rx="2" fill="#0a1430" stroke="#6ab4ff" stroke-width="1.5"/>' + "BLUE".split("").map((c, i) => '<text class="sy-glow" x="260" y="' + (74 + i * 12) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#6ab4ff">' + c + '</text>').join("") +
      '<rect x="146" y="40" width="80" height="16" rx="2" fill="#0a1430" stroke="#6ab4ff"/><text class="sy-glow sy-glow2" x="186" y="52" text-anchor="middle" ' + font + ' font-size="9" fill="#6ab4ff" letter-spacing="1">HORIZON</text>' +
      /* row homes left */
      '<rect x="0" y="92" width="64" height="134" fill="#7a4a3a"/><rect x="64" y="104" width="54" height="122" fill="#8a5644"/>' +
      [[0, 64], [64, 54]].map(([x, w]) => [0, 1, 2].map(r => '<rect class="' + (r === 1 ? "sy-glow" : "") + '" x="' + (x + w / 2 - 9) + '" y="' + (112 + r * 34) + '" width="18" height="22" fill="' + (r === 1 ? "#ffd98a" : "#2a2230") + '" stroke="#e8e2d6" stroke-width="1.5"/>').join("") + '<rect x="' + x + '" y="90" width="' + w + '" height="6" fill="#e8e2d6"/>').join("") +
      /* brick wall with the tags */
      '<rect x="130" y="150" width="270" height="76" fill="#7a3e30"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M130 ' + (158 + i * 8) + 'h270" stroke="#6a3226" stroke-width="1"/>').join("") +
      tag("STYLISTICS", 140, 198, 32, BLUE, -5) + tag("BETCHA BY GOLLY", 146, 220, 14, GOLD, -3) + tag("BRAND NEW", 300, 220, 14, PINK, -4) +
      /* street */
      '<rect x="0" y="226" width="400" height="34" fill="#4a4844"/><rect x="0" y="224" width="400" height="4" fill="#d8dce2"/><path d="M0 240h400M0 248h400" stroke="#7a766e" stroke-width="2"/>' +
      '<g class="sy-car"><rect x="0" y="236" width="62" height="13" rx="5" fill="' + GOLD + '"/><rect x="12" y="228" width="34" height="10" rx="3" fill="' + GOLD + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="50" cy="250" r="4" fill="#111"/></g>' +
      /* signs */
      '<rect x="384" y="62" width="6" height="164" fill="#2f2f2f"/>' + sign(288, 64, 108, "N Broad St") + sign(288, 90, 108, "W Oxford St") +
      '<g class="sy-sp"><circle cx="292" cy="176" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="sy-sp sy-sp2"><circle cx="298" cy="170" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("sy-s5", "#0e1028", "#4a3a6a"));
  }

  window.SCENES = { systation: systation, systudio: systudio, symike: symike, sylondon: sylondon, sycorner: sycorner };
})();
