/* steadyb scenes (Regions tab: Philadelphia; Kingsessing / Southwest Philly). CSS classes prefixed sb- (the page's own anim-train is kept).
   Every 9 is drawn by hand (circle + straight stem), never typed in a font. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sbflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.sb-flk{animation:sbflick 2.6s infinite}.sb-flk2{animation-delay:.9s}' +
    '@keyframes sbglow{0%,100%{opacity:.45}50%{opacity:1}}.sb-glow{animation:sbglow 2.2s ease-in-out infinite}.sb-g2{animation-delay:-1.1s}' +
    '@keyframes sbspin{to{transform:rotate(360deg)}}.sb-spin{transform-box:fill-box;transform-origin:50% 50%;animation:sbspin 1.8s linear infinite}.sb-spin2{animation-duration:2.6s}' +
    '@keyframes sbvu{0%,100%{transform:scaleY(.25)}40%{transform:scaleY(1)}70%{transform:scaleY(.55)}}.sb-vu{transform-box:fill-box;transform-origin:50% 100%;animation:sbvu .6s ease-in-out infinite}.sb-v2{animation-delay:-.2s}.sb-v3{animation-delay:-.4s}' +
    '@keyframes sbsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.sb-sw{transform-box:fill-box;transform-origin:50% 100%;animation:sbsweep 3.6s ease-in-out infinite}.sb-sw2{animation-delay:-1.8s}' +
    '@keyframes sbbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.sb-bob{animation:sbbob .7s ease-in-out infinite}.sb-bob2{animation-delay:-.35s}' +
    '@keyframes sbclap{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.sb-clap{animation:sbclap .5s ease-in-out infinite}.sb-clap2{animation-delay:-.25s}' +
    '@keyframes sbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sb-sp{animation:sbspray 1.4s ease-out infinite}.sb-sp2{animation-delay:.45s}' +
    '@keyframes sbtrol{0%{transform:translateX(-200px)}100%{transform:translateX(460px)}}.sb-trol{animation:sbtrol 11s linear infinite;animation-delay:-4.5s}' +
    '@keyframes sbnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-60px);opacity:0}}.sb-note{animation:sbnote 2.8s ease-out infinite}.sb-n2{animation-delay:-.9s}.sb-n3{animation-delay:-1.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* a hand-drawn 9: round bowl on top, straight stem down the right side. (x,y) = baseline left, s = font size */
  const nine = (x, y, s, c) => {
    const r = s * 0.2, cx = x + s * 0.27, cy = y - s * 0.5, sw = s * 0.12;
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + sw + '"/>' +
      '<path d="M' + (cx + r) + ' ' + (cy - r * 0.2) + 'V' + y + '" stroke="' + c + '" stroke-width="' + sw + '" fill="none"/>';
  };
  /* "49th ..." written as: "4" in the font, a drawn 9, then the rest in the font */
  const t49 = (x, y, s, c, rest) => '<text x="' + x + '" y="' + y + '" ' + font + ' font-size="' + s + '" fill="' + c + '">4</text>' + nine(x + s * 0.56, y, s, c) +
    '<text x="' + (x + s * 1.14) + '" y="' + y + '" ' + font + ' font-size="' + s + '" fill="' + c + '">' + rest + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "sb-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffd23f", CYAN = "#29c5f6", PINK = "#ff4f8b", RR = "#91456c";

  /* 1. 49th Street station, SEPTA Regional Rail Media/Wawa Line, Kingsessing (49th St & Chester Ave): low-level side platforms at grade under the catenary,
        a stainless Silverliner with red and blue stripes pulling in, the black station sign with the purple Regional Rail badge, Kingsessing row homes behind */
  function sbstation() {
    const train = '<g class="anim-train"><rect x="24" y="112" width="330" height="72" rx="6" fill="#c9ced6" stroke="#7a8088" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (38 + i * 44) + '" y="122" width="30" height="24" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="24" y="152" width="330" height="5" fill="#d2232a"/><rect x="24" y="158" width="330" height="5" fill="#1f3f8f"/>' +
      '<rect x="334" y="114" width="20" height="68" rx="4" fill="#a7adb5"/><circle cx="346" cy="172" r="3.5" fill="#fff6c2"/>' +
      '<path d="M120 112l18 -22M138 90h30M168 90l-14 22" stroke="#3a3e46" stroke-width="2.5" fill="none"/></g>';
    const rows = Array.from({ length: 9 }, (_, i) => {
      const x = i * 46, h = 34 + (i % 3) * 6, c = ["#8a4b3a", "#9a5a44", "#7a4434"][i % 3];
      return '<rect x="' + x + '" y="' + (98 - h) + '" width="44" height="' + h + '" fill="' + c + '"/><rect x="' + x + '" y="' + (94 - h) + '" width="44" height="5" fill="#5a3226"/>' +
        '<rect x="' + (x + 8) + '" y="' + (106 - h) + '" width="10" height="10" fill="' + (i % 2 ? "#ffe9a8" : "#2c3440") + '"' + (i % 2 ? ' class="sb-glow"' : '') + '/><rect x="' + (x + 26) + '" y="' + (106 - h) + '" width="10" height="10" fill="#2c3440"/>';
    }).join("");
    const masts = Array.from({ length: 4 }, (_, i) => '<rect x="' + (28 + i * 112) + '" y="54" width="5" height="136" fill="#59606a"/><rect x="' + (12 + i * 112) + '" y="58" width="38" height="3" fill="#59606a"/>').join("") +
      '<path d="M0 84H400" stroke="#2a2e34" stroke-width="1.5"/><path d="M0 88H400" stroke="#2a2e34" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sb1)"/>' + stars(10) + rows +
      '<rect x="0" y="98" width="400" height="6" fill="#4a4e56"/>' + masts + train +
      '<rect x="0" y="184" width="400" height="6" fill="#6b5a44"/><rect x="0" y="190" width="400" height="8" fill="#f2c200"/><rect x="0" y="198" width="400" height="62" fill="#8d8a84"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 42) + ' 198v62" stroke="#7b7872" stroke-width="1"/>').join("") +
      /* station sign */
      '<rect x="96" y="14" width="5" height="36" fill="#2a2a2a"/><rect x="300" y="14" width="5" height="36" fill="#2a2a2a"/>' +
      '<rect x="70" y="12" width="260" height="50" rx="3" fill="#111"/>' +
      '<rect x="80" y="20" width="38" height="22" rx="4" fill="' + RR + '"/><text x="99" y="36" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">RR</text>' +
      t49(134, 39, 20, "#fff", "th Street") +
      '<text x="134" y="55" ' + font + ' font-size="9" fill="#e8e4dc" letter-spacing="1.5">MEDIA/WAWA LINE</text>' +
      '<circle class="sb-flk" cx="40" cy="70" r="5" fill="#fff6c8"/><circle class="sb-flk sb-flk2" cx="360" cy="70" r="5" fill="#fff6c8"/>',
      sky("sb1", "#141a3a", "#e07a4a"));
  }

  /* 2. The record shop on Market Street where his Pop Art 12-inches sold out: racks of 12-inch singles, the window full of sleeves in 80s pop-art colors,
        a turntable spinning on the counter, the neon RECORDS sign flickering, the Market-Frankford El girders overhead outside */
  function sbshop() {
    const sleeve = (x, y, a, b, k) => '<g transform="rotate(' + k + ' ' + (x + 22) + ' ' + (y + 22) + ')"><rect x="' + x + '" y="' + y + '" width="44" height="44" fill="' + a + '" stroke="#111" stroke-width="2"/>' +
      '<circle cx="' + (x + 22) + '" cy="' + (y + 22) + '" r="12" fill="' + b + '"/><circle cx="' + (x + 22) + '" cy="' + (y + 22) + '" r="3" fill="#111"/><path d="M' + (x + 4) + ' ' + (y + 40) + 'l12 -10l8 6l16 -14" stroke="#111" stroke-width="2" fill="none"/></g>';
    const rack = (x) => '<rect x="' + x + '" y="196" width="96" height="40" fill="#5a3a24"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (x + 6 + i * 10) + '" y="' + (180 + (i % 3) * 3) + '" width="8" height="22" fill="' + [CYAN, PINK, GOLD, "#f2f2f2", "#7bd389"][i % 5] + '" stroke="#111" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#2a1e2e"/>' +
      /* El girders outside, seen through the top of the window */
      '<rect x="0" y="0" width="400" height="26" fill="#1a1a22"/><rect x="0" y="22" width="400" height="8" fill="#3c4048"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 48) + ' 0l24 22l24 -22" stroke="#4a4e58" stroke-width="3" fill="none"/>').join("") +
      /* storefront window */
      '<rect x="18" y="40" width="364" height="134" fill="#1b2434" stroke="#c9a24a" stroke-width="4"/>' +
      sleeve(34, 96, PINK, GOLD, -6) + sleeve(86, 104, CYAN, PINK, 4) + sleeve(140, 96, GOLD, CYAN, -3) + sleeve(266, 98, "#7bd389", PINK, 5) + sleeve(318, 104, PINK, CYAN, -5) +
      /* neon sign */
      '<rect x="120" y="50" width="160" height="34" rx="6" fill="#120c18" stroke="' + PINK + '" stroke-width="2"/>' +
      '<text class="sb-flk" x="200" y="74" text-anchor="middle" ' + font + ' font-size="20" fill="' + PINK + '" stroke="#ffd0e0" stroke-width=".6" letter-spacing="3">RECORDS</text>' +
      '<text x="296" y="68" ' + font + ' font-size="10" fill="' + CYAN + '" class="sb-glow sb-g2">12 INCH</text>' +
      /* counter turntable */
      '<rect x="196" y="140" width="62" height="34" rx="3" fill="#2c2c30" stroke="#888" stroke-width="1.5"/><g class="sb-spin"><circle cx="220" cy="157" r="14" fill="#111"/><circle cx="220" cy="157" r="5" fill="' + GOLD + '"/><path d="M220 145v4" stroke="#555" stroke-width="2"/></g>' +
      '<path d="M248 146l-10 14" stroke="#ccc" stroke-width="2"/>' +
      '<g class="sb-note"><text x="246" y="138" ' + font + ' font-size="14" fill="' + GOLD + '">&#9834;</text></g><g class="sb-note sb-n2"><text x="232" y="134" ' + font + ' font-size="12" fill="' + CYAN + '">&#9835;</text></g>' +
      /* floor and racks */
      '<rect x="0" y="174" width="400" height="86" fill="#3a2a22"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 56) + ' 174l-20 86" stroke="#2e2019" stroke-width="2"/>').join("") +
      rack(20) + rack(150) + rack(280) +
      '<rect x="164" y="236" width="72" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">Market St</text>',
      "");
  }

  /* 3. The studio at Pop Art Records on City Line Avenue, where the Hilltop Hustlers cut their records: the mixing desk with bouncing VU meters,
        the reel-to-reel turning, two turntables spinning for the cuts, a HILLTOP road case, the vocal mic behind the glass */
  function sbstudio() {
    const vu = (x) => Array.from({ length: 5 }, (_, i) => '<rect class="sb-vu' + (i % 3 === 1 ? " sb-v2" : i % 3 === 2 ? " sb-v3" : "") + '" x="' + (x + i * 9) + '" y="128" width="6" height="26" fill="' + (i < 3 ? "#7bd389" : i < 4 ? GOLD : PINK) + '"/>').join("");
    const reel = (cx) => '<g class="sb-spin sb-spin2"><circle cx="' + cx + '" cy="58" r="20" fill="#2a2a2e" stroke="#9aa0a8" stroke-width="2"/>' +
      [0, 120, 240].map(a => '<circle cx="' + (cx + 10 * Math.cos(a * Math.PI / 180)) + '" cy="' + (58 + 10 * Math.sin(a * Math.PI / 180)) + '" r="4" fill="#9aa0a8"/>').join("") + '<circle cx="' + cx + '" cy="58" r="3" fill="#ddd"/></g>';
    const deck = (x) => '<rect x="' + x + '" y="196" width="78" height="40" rx="3" fill="#2c2c30" stroke="#777" stroke-width="1.5"/><g class="sb-spin"><circle cx="' + (x + 32) + '" cy="216" r="16" fill="#111"/><circle cx="' + (x + 32) + '" cy="216" r="5" fill="' + PINK + '"/><path d="M' + (x + 32) + ' 202v4" stroke="#666" stroke-width="2"/></g><path d="M' + (x + 68) + ' 202l-12 16" stroke="#ccc" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="#1c1626"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="38" height="100" fill="#251d33"/>').join("") +
      /* booth glass with the vocal mic */
      '<rect x="230" y="14" width="152" height="86" fill="#0e2a3a" stroke="#555" stroke-width="3"/><rect class="sb-glow" x="236" y="20" width="140" height="74" fill="' + CYAN + '" opacity=".12"/>' +
      '<path d="M306 40v44M290 84h32" stroke="#888" stroke-width="3"/><rect x="298" y="26" width="16" height="22" rx="8" fill="#c9ced6" stroke="#555" stroke-width="1.5"/>' +
      '<rect x="244" y="22" width="44" height="14" rx="2" fill="#d2232a" class="sb-glow"/><text x="266" y="33" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">ON AIR</text>' +
      /* reel-to-reel */
      '<rect x="22" y="22" width="120" height="78" rx="4" fill="#3a3a40" stroke="#777" stroke-width="2"/>' + reel(52) + reel(112) + '<path d="M52 78h60" stroke="#6a4a2a" stroke-width="2"/>' +
      /* mixing desk */
      '<path d="M10 120h380l-20 50h-340z" fill="#3a3540" stroke="#666" stroke-width="2"/>' + vu(40) + vu(110) + vu(250) + vu(320) +
      Array.from({ length: 16 }, (_, i) => '<rect x="' + (34 + i * 21) + '" y="' + (158 + (i * 7) % 8) + '" width="8" height="5" rx="1" fill="#ddd"/>').join("") +
      '<rect x="170" y="128" width="62" height="24" rx="2" fill="#120c18"/><text x="201" y="145" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" class="sb-glow">CITY LINE</text>' +
      /* road case + turntables */
      '<rect x="0" y="176" width="400" height="84" fill="#2a2230"/>' +
      '<rect x="150" y="186" width="100" height="56" rx="4" fill="#1a1a1e" stroke="#9aa0a8" stroke-width="2"/>' + tag("HILLTOP", 156, 226, 20, GOLD, -4) +
      deck(36) + deck(286),
      "");
  }

  /* 4. The Spectrum in South Philly, where the Hilltop crew rocked the big shows: the round arena at night, its ring of tall vertical piers,
        the marquee lit up, spotlights sweeping the sky, the crowd out front clapping their hands */
  function sbstage() {
    const piers = Array.from({ length: 15 }, (_, i) => { const x = 40 + i * 22; return '<rect x="' + x + '" y="64" width="9" height="102" fill="#d9d2c4"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sb4)"/>' + stars(16) +
      '<path class="sb-sw" d="M90 166l-26 -170h52z" fill="#fff6c8" opacity=".16"/><path class="sb-sw sb-sw2" d="M310 166l-26 -170h52z" fill="' + CYAN + '" opacity=".18"/>' +
      /* the arena drum */
      '<ellipse cx="200" cy="64" rx="176" ry="16" fill="#8a8476"/>' +
      '<rect x="24" y="64" width="352" height="102" fill="#6e2a2a"/>' + piers +
      '<rect x="24" y="98" width="352" height="10" fill="#b8b0a0"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect class="' + (i % 3 ? "" : "sb-glow") + '" x="' + (50 + i * 22) + '" y="118" width="6" height="26" fill="#ffe2a0" opacity=".85"/>').join("") +
      /* marquee */
      '<rect x="128" y="132" width="144" height="40" rx="3" fill="#121018" stroke="' + GOLD + '" stroke-width="2"/>' +
      Array.from({ length: 18 }, (_, i) => '<circle class="sb-flk' + (i % 2 ? " sb-flk2" : "") + '" cx="' + (134 + i * 7.6) + '" cy="136" r="1.6" fill="' + GOLD + '"/>').join("") +
      '<text x="200" y="152" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" letter-spacing="2">THE SPECTRUM</text>' +
      '<text x="200" y="166" text-anchor="middle" ' + font + ' font-size="10" fill="' + PINK + '" class="sb-glow">STEADY B LIVE</text>' +
      '<rect x="0" y="172" width="400" height="88" fill="#2b2b33"/>' +
      /* crowd clapping */
      '<g>' + Array.from({ length: 16 }, (_, i) => {
        const x = 8 + i * 25, y = 214 + (i % 2) * 8;
        return '<g class="sb-bob' + (i % 2 ? " sb-bob2" : "") + '"><circle cx="' + x + '" cy="' + y + '" r="8" fill="#07070b"/><rect x="' + (x - 10) + '" y="' + (y + 6) + '" width="20" height="40" rx="6" fill="#07070b"/></g>' +
          (i % 3 === 0 ? '<g class="sb-clap' + (i % 2 ? " sb-clap2" : "") + '"><path d="M' + (x - 6) + ' ' + (y + 8) + 'l-4 -22M' + (x + 6) + ' ' + (y + 8) + 'l4 -22" stroke="#07070b" stroke-width="5" stroke-linecap="round"/></g>' : "");
      }).join("") + '</g>',
      sky("sb4", "#0c0a24", "#5a2a6a"));
  }

  /* 5. S 49th St and Chester Ave in Kingsessing, Southwest Philly: green street signs, STEADY B tagged big on a row-home side wall,
        the trolley gliding along Chester Ave under its wire, Center City's towers glowing far up behind */
  function sbcorner() {
    const trolley = '<g class="sb-trol"><rect x="0" y="150" width="120" height="40" rx="6" fill="#f2efe6" stroke="#666" stroke-width="1.5"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (8 + i * 22) + '" y="156" width="16" height="14" rx="1" fill="#1d262e"/>').join("") +
      '<rect x="0" y="174" width="120" height="4" fill="#d2232a"/><rect x="0" y="179" width="120" height="3" fill="#1f3f8f"/><path d="M60 150l14 -26" stroke="#333" stroke-width="2"/>' +
      '<circle cx="24" cy="190" r="5" fill="#222"/><circle cx="96" cy="190" r="5" fill="#222"/></g>';
    const towers = '<g fill="#3a3f66">' +
      '<rect x="168" y="30" width="20" height="90"/><path d="M168 30l10 -12l10 12z"/>' +
      '<rect x="196" y="18" width="24" height="102"/><rect x="200" y="8" width="16" height="12"/><rect x="206" y="0" width="4" height="10"/>' +
      '<rect x="228" y="44" width="18" height="76"/><rect x="120" y="60" width="30" height="60"/><rect x="254" y="58" width="26" height="62"/></g>' +
      Array.from({ length: 12 }, (_, i) => '<rect class="' + (i % 3 ? "" : "sb-glow") + '" x="' + (172 + (i % 3) * 22 + (i % 2) * 4) + '" y="' + (40 + Math.floor(i / 3) * 16) + '" width="3" height="5" fill="#ffd98a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sb5)"/>' + stars(14) + towers +
      '<g fill="#25223a"><rect x="0" y="92" width="110" height="40"/><rect x="290" y="88" width="110" height="44"/></g>' +
      '<path d="M0 124H400" stroke="#1a1a1a" stroke-width="1.5"/>' +
      /* street with trolley tracks */
      '<rect x="0" y="132" width="400" height="66" fill="#4a4a50"/><path d="M0 190H400M0 196H400" stroke="#8a8a90" stroke-width="2"/>' + trolley +
      /* row-home side wall with the tags */
      '<rect x="0" y="198" width="400" height="62" fill="#8a4b3a"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M0 ' + (204 + i * 8) + 'h400" stroke="#7a3f30" stroke-width="1"/>').join("") +
      tag("STEADY B", 18, 246, 40, GOLD, -5) + tag("HILLTOP", 224, 236, 26, CYAN, -4) + tag("JUST CALL US DEF", 210, 256, 13, PINK, -2) +
      /* sign pole */
      '<rect x="346" y="64" width="6" height="134" fill="#2f2f2f"/>' +
      '<rect x="296" y="66" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + '<text x="310" y="82" ' + font + ' font-size="13" fill="#fff">S</text>' + t49(324, 82, 13, "#fff", "th St") +
      sign(292, 92, 104, "Chester Ave") +
      '<g class="sb-sp"><circle cx="180" cy="222" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="sb-sp sb-sp2"><circle cx="186" cy="216" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("sb5", "#121a36", "#d0784a"));
  }

  window.SCENES = { sbstation: sbstation, sbshop: sbshop, sbstudio: sbstudio, sbstage: sbstage, sbcorner: sbcorner };
})();
