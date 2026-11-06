/* delfonics scenes (Regions tab: Philadelphia; Overbrook, West Philly). CSS classes prefixed df- (the page's own anim-train is kept).
   1 Lancaster Av & 59th St on SEPTA's Route 10 trolley (street-running on Lancaster Ave, overhead wire), a cream-and-red trolley sliding in, the green T badge.
   2 The studio, 1968: Thom Bell's sound - the lone French horn on its stand, harpsichord, strings, three vocal mics in a row, tape reels spinning, notes floating.
   3 The Philadelphia Music Alliance Walk of Fame on S Broad St: THE DELFONICS bronze plaque in the sidewalk (1995), the Academy of Music's brownstone front and glowing globe lamps behind.
   4 Overbrook High, the Castle on the Hill at 59th & Lancaster, where the group came together: buff Collegiate Gothic front with the battlemented tower, three silhouettes harmonizing on the steps.
   5 N 59th St and Lancaster Ave: green signs, DELFONICS tagged on the brick, the Route 10 wire overhead, Center City's towers glowing far down Lancaster behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dfglow{0%,100%{opacity:.45}50%{opacity:1}}.df-glow{animation:dfglow 2.6s ease-in-out infinite}.df-glow2{animation-delay:-1.3s}' +
    '@keyframes dfspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.df-spin{transform-box:fill-box;transform-origin:50% 50%;animation:dfspin 2.6s linear infinite}' +
    '@keyframes dfvu{0%,100%{transform:rotate(-30deg)}35%{transform:rotate(18deg)}60%{transform:rotate(-8deg)}80%{transform:rotate(26deg)}}.df-vu{transform-box:fill-box;transform-origin:50% 100%;animation:dfvu 1.3s ease-in-out infinite}.df-vu2{animation-delay:-.5s}' +
    '@keyframes dfnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.df-note{animation:dfnote 3.2s linear infinite}.df-n2{animation-delay:-1.1s}.df-n3{animation-delay:-2.2s}' +
    '@keyframes dfsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.df-sway{transform-box:fill-box;transform-origin:50% 100%;animation:dfsway 1.8s ease-in-out infinite}.df-sw2{animation-delay:-.6s}.df-sw3{animation-delay:-1.2s}' +
    '@keyframes dfcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.df-car{animation:dfcar 8s linear infinite}' +
    '@keyframes dfspark{0%,100%{opacity:0}45%,55%{opacity:1}}.df-spark{animation:dfspark 1.6s steps(2) infinite}' +
    '@keyframes dfspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.df-sp{animation:dfspray 1.4s ease-out infinite}.df-sp2{animation-delay:.45s}' +
    '@keyframes dfwalk{from{transform:translateX(0)}to{transform:translateX(440px)}}.df-walk{animation:dfwalk 14s linear infinite}.df-wk2{animation-delay:-7s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  /* a 9 with a straight stem */
  const nine = (x, y, h, col) => '<circle cx="' + (x + h * 0.27) + '" cy="' + (y - h * 0.7) + '" r="' + (h * 0.22) + '" fill="none" stroke="' + col + '" stroke-width="' + (h * 0.17) + '"/><rect x="' + (x + h * 0.40) + '" y="' + (y - h * 0.72) + '" width="' + (h * 0.17) + '" height="' + (h * 0.72) + '" fill="' + col + '"/>';
  /* monospace number/text line; every 9 drawn with nine() */
  const mono = (str, x, y, h, col) => { let o = "", cw = h * 0.62; for (let i = 0; i < str.length; i++) { const ch = str[i], cx = x + i * cw; if (ch === "9") o += nine(cx + h * 0.08, y, h * 0.7, col); else if (ch !== " ") o += '<text x="' + cx + '" y="' + y + '" font-family="Courier New, monospace" font-weight="700" font-size="' + h * 1.0 + '" fill="' + col + '">' + ch + '</text>'; } return o; };
  /* text where every 9 gets a straight stem: fixed advance per char (textLength) so the drawn 9 lines up */
  const t9 = (str, x, y, size, col) => { const cw = size * 0.6; let o = "", run = "", rx = x; const flush = () => { if (run) { o += '<text x="' + rx + '" y="' + y + '" ' + font + ' font-size="' + size + '" fill="' + col + '" textLength="' + (run.length * cw).toFixed(1) + '" lengthAdjust="spacingAndGlyphs">' + run.replace(/&/g, "&amp;") + '</text>'; rx += run.length * cw; run = ""; } };
    for (const ch of str) { if (ch === "9") { flush(); o += nine(rx + size * 0.04, y, size * 0.74, col); rx += cw; } else run += ch; } flush(); return o; };
  const monoW = (str, h) => str.length * h * 0.62;
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "df-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const PINK = "#ffb3c7", GOLD = "#f2c14e", TEAL = "#8fd3c7", TROL = "#5a960a";
  const note = (x, y, cls, col) => '<g class="df-note ' + cls + '"><text x="' + x + '" y="' + y + '" font-size="18" fill="' + col + '">&#9834;</text></g>';

  /* 1. Lancaster Av & 59th St, Route 10 trolley */
  function dfstation() {
    const trolley = '<g class="anim-train"><rect x="30" y="118" width="300" height="72" rx="10" fill="#efe7d4" stroke="#7a7262" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (46 + i * 44) + '" y="128" width="32" height="26" rx="3" fill="#1d2731"/>').join("") +
      '<rect x="30" y="160" width="300" height="5" fill="#c8102e"/><rect x="30" y="166" width="300" height="3" fill="#1f4e9a"/>' +
      '<rect x="306" y="124" width="24" height="64" rx="5" fill="#e2d9c2"/><rect x="310" y="128" width="16" height="12" rx="2" fill="#111"/><text x="318" y="137.5" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb000">10</text>' +
      '<circle cx="318" cy="180" r="3.5" fill="#fff6c2" class="df-glow"/>' +
      [92, 248].map(x => '<circle cx="' + x + '" cy="190" r="7" fill="#2a2a2a"/>').join("") +
      '<path d="M180 118l-30 -40" stroke="#333" stroke-width="2.5"/><circle cx="150" cy="78" r="3" fill="#333"/><circle class="df-spark" cx="150" cy="76" r="4" fill="#bfe8ff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#df-s1)"/>' + stars(10) +
      /* Lancaster Ave storefronts */
      '<rect x="0" y="80" width="80" height="110" fill="#6a4a3a"/><rect x="80" y="94" width="70" height="96" fill="#7a5644"/><rect x="250" y="86" width="80" height="104" fill="#6a4a3a"/><rect x="330" y="98" width="70" height="92" fill="#5a3e32"/>' +
      '<rect x="150" y="100" width="100" height="90" fill="#7a5a48"/>' +
      Array.from({ length: 18 }, (_, i) => '<rect class="' + (i % 5 ? "" : "df-glow df-glow2") + '" x="' + [10, 30, 50, 90, 110, 128, 160, 190, 220, 260, 282, 304, 340, 362, 380, 12, 268, 344][i] + '" y="' + (i < 15 ? 96 : 112) + '" width="10" height="12" fill="' + (i % 3 ? "#ffd98a" : "#2a2230") + '" opacity=".85"/>').join("") +
      /* overhead trolley wire */
      '<path d="M0 72h400" stroke="#222" stroke-width="1.5"/>' + [60, 340].map(x => '<rect x="' + (x - 3) + '" y="64" width="6" height="136" fill="#3a3f46"/><path d="M' + x + ' 70v4" stroke="#222"/>').join("") +
      trolley +
      /* street with rails */
      '<rect x="0" y="198" width="400" height="62" fill="#4a4844"/><path d="M0 204h400M0 214h400" stroke="#8a8680" stroke-width="2"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 44 + 8) + '" y="236" width="24" height="4" fill="#e8e2c8"/>').join("") +
      /* stop sign pole + black station sign */
      '<rect x="372" y="120" width="5" height="120" fill="#2f2f2f"/>' +
      '<rect x="160" y="18" width="226" height="34" rx="3" fill="#111"/>' + t9("Lancaster Av & 59th St", 170, 40, 14, "#fff") + '' +
      '<circle cx="368" cy="35" r="11" fill="' + TROL + '"/><text x="368" y="40" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">T</text>' +
      '<rect x="356" y="120" width="34" height="22" rx="3" fill="#fff" stroke="#111"/><circle cx="366" cy="131" r="7" fill="' + TROL + '"/><text x="366" y="135" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">T</text><text x="382" y="135" text-anchor="middle" ' + font + ' font-size="9" fill="#111">10</text>',
      sky("df-s1", "#1c1838", "#d27a6a"));
  }

  /* 2. The studio, 1968: horn, harpsichord, strings, three mics */
  function dfstudio() {
    const mic = x => '<rect x="' + (x - 1.5) + '" y="150" width="3" height="66" fill="#999"/><rect x="' + (x - 6) + '" y="134" width="12" height="20" rx="6" fill="#c8ccd2" stroke="#666"/><path d="M' + (x - 12) + ' 216h24" stroke="#777" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="#1d1418"/>' +
      /* acoustic wall panels */
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 50 + 3) + '" y="8" width="44" height="100" fill="' + (i % 2 ? "#3a2830" : "#33222a") + '"/>' +
        Array.from({ length: 5 }, (_, j) => '<path d="M' + (i * 50 + 6) + ' ' + (18 + j * 18) + 'h38" stroke="#2a1a20" stroke-width="2"/>').join("")).join("") +
      /* control room glass with tape machine + VU meters */
      '<rect x="250" y="20" width="140" height="80" rx="3" fill="#0e1a24" stroke="#555" stroke-width="3"/>' +
      '<circle class="df-spin" cx="282" cy="46" r="14" fill="#333" stroke="#888" stroke-width="2"/><path d="M282 34v24M270 46h24" stroke="#888" stroke-width="2" class="df-spin"/>' +
      '<circle class="df-spin" cx="320" cy="46" r="14" fill="#333" stroke="#888" stroke-width="2"/><path d="M320 34v24M308 46h24" stroke="#888" stroke-width="2" class="df-spin"/>' +
      [346, 368].map((x, i) => '<rect x="' + (x - 10) + '" y="36" width="20" height="16" rx="2" fill="#f2e6b8"/><path class="df-vu' + (i ? " df-vu2" : "") + '" d="M' + x + ' 50l0 -11" stroke="#a01818" stroke-width="1.5"/>').join("") +
      '<rect x="262" y="68" width="116" height="24" fill="#2a2a30"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (266 + i * 9.5) + '" y="' + (72 + (i % 3) * 4) + '" width="5" height="4" fill="' + (i % 4 ? "#bbb" : PINK) + '"/>').join("") +
      /* tape box with the year */
      '<rect x="18" y="20" width="60" height="34" fill="#e8dcc0" stroke="#8a7a5a"/>' + mono("1968", 48 - monoW("1968", 12) / 2, 44, 12, "#5a3a2a") +
      /* harpsichord */
      '<path d="M20 150h120l-10 -34h-90z" fill="#7a4a2a" stroke="#3a2010" stroke-width="2"/><rect x="24" y="150" width="112" height="12" fill="#f4efe0"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (27 + i * 8) + '" y="150" width="4" height="7" fill="#111"/>').join("") +
      '<path d="M30 162v54M130 162v54" stroke="#3a2010" stroke-width="4"/>' +
      /* French horn on its stand (the lone horn) */
      '<rect x="168" y="168" width="4" height="48" fill="#666"/><path d="M156 216h28" stroke="#666" stroke-width="3"/>' +
      '<circle cx="170" cy="150" r="20" fill="none" stroke="' + GOLD + '" stroke-width="5"/><circle cx="170" cy="150" r="11" fill="none" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<path d="M188 158q18 6 26 24" stroke="' + GOLD + '" stroke-width="5" fill="none"/><ellipse cx="216" cy="186" rx="13" ry="7" fill="' + GOLD + '" transform="rotate(-30 216 186)"/><ellipse cx="216" cy="186" rx="8" ry="4" fill="#8a6418" transform="rotate(-30 216 186)"/>' +
      /* violin + cello on stands */
      '<g class="df-sway df-sw2"><ellipse cx="380" cy="190" rx="12" ry="18" fill="#9a4a1e" stroke="#4a200a"/><rect x="378" y="140" width="4" height="36" fill="#2a1a10"/></g>' +
      /* three vocal mics, one for each voice */
      mic(244) + mic(286) + mic(328) +
      note(236, 128, "", PINK) + note(280, 124, "df-n2", GOLD) + note(322, 128, "df-n3", TEAL) +
      /* floor */
      '<rect x="0" y="216" width="400" height="44" fill="#3a2a22"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 216v44" stroke="#2a1c16" stroke-width="2"/>').join("") +
      '<path d="M244 216q20 20 60 30t80 6" stroke="#111" stroke-width="2" fill="none"/>');
  }

  /* 3. Walk of Fame on S Broad St, the Academy of Music behind */
  function dfplaque() {
    const lamp = x => '<rect x="' + (x - 2) + '" y="150" width="4" height="50" fill="#1a1a1a"/><circle class="df-glow" cx="' + x + '" cy="146" r="8" fill="#fff0c0"/><circle cx="' + x + '" cy="146" r="12" fill="#ffe6a0" opacity=".25"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#df-s3)"/>' + stars(12) +
      /* Academy of Music: brownstone Italianate front, tall arched windows, cornice */
      '<rect x="40" y="44" width="320" height="150" fill="#8a5a42"/><rect x="34" y="38" width="332" height="10" fill="#6a4030"/><rect x="40" y="96" width="320" height="4" fill="#6a4030"/>' +
      Array.from({ length: 7 }, (_, i) => { const x = 58 + i * 44; return '<path d="M' + x + ' 90v-28a10 10 0 0 1 20 0v28z" fill="' + (i % 2 ? "#ffd98a" : "#f0c070") + '" opacity=".85" class="' + (i % 3 ? "" : "df-glow") + '"/><path d="M' + x + ' 186v-56a10 10 0 0 1 20 0v56z" fill="#ffe2a0" opacity=".9"/><path d="M' + (x + 10) + ' 130v56" stroke="#8a5a42" stroke-width="1.5"/>'; }).join("") +
      '<rect x="40" y="110" width="320" height="8" fill="#b4846a"/><text x="200" y="117" text-anchor="middle" ' + font + ' font-size="7" fill="#3a2010" letter-spacing="3">ACADEMY OF MUSIC</text>' +
      /* sidewalk */
      '<rect x="0" y="194" width="400" height="66" fill="#a8a296"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 194l-20 66" stroke="#928c80" stroke-width="1.5"/>').join("") +
      lamp(30) + lamp(370) +
      /* feet walking by */
      '<g class="df-walk"><rect x="-40" y="196" width="10" height="18" fill="#2a2a34"/><rect x="-26" y="196" width="10" height="18" fill="#2a2a34"/><ellipse cx="-34" cy="215" rx="7" ry="3" fill="#111"/><ellipse cx="-20" cy="215" rx="7" ry="3" fill="#111"/></g>' +
      '<g class="df-walk df-wk2"><rect x="-40" y="198" width="9" height="16" fill="#6a2a3a"/><rect x="-27" y="198" width="9" height="16" fill="#6a2a3a"/><ellipse cx="-35" cy="215" rx="6" ry="3" fill="#111"/><ellipse cx="-22" cy="215" rx="6" ry="3" fill="#111"/></g>' +
      /* the bronze plaque, set in the sidewalk */
      '<g transform="translate(200 228) scale(1 .55)"><rect x="-86" y="-40" width="172" height="80" rx="4" fill="#8a6a2a" stroke="#4a3810" stroke-width="3"/><rect x="-78" y="-32" width="156" height="64" rx="3" fill="#b88a3a"/>' +
      '<text x="0" y="-8" text-anchor="middle" ' + font + ' font-size="20" fill="#3a2a08">THE DELFONICS</text>' + mono("1995", -monoW("1995", 13) / 2, 20, 13, "#3a2a08") + '</g>',
      sky("df-s3", "#141030", "#4a2a4a"));
  }

  /* 4. Overbrook High, the Castle on the Hill */
  function dfcastle() {
    const BUFF = "#d8c49a", TRIM = "#efe6cf", SH = "#b8a47a";
    const singer = (x, cls, col) => '<g class="df-sway ' + cls + '"><circle cx="' + x + '" cy="186" r="7" fill="#120a14"/><path d="M' + (x - 9) + ' 222v-22q0 -8 9 -8q9 0 9 8v22z" fill="' + col + '"/><rect x="' + (x - 8) + '" y="222" width="6" height="14" fill="#120a14"/><rect x="' + (x + 2) + '" y="222" width="6" height="14" fill="#120a14"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#df-s4)"/>' +
      /* the hill */
      '<path d="M0 170q200 -30 400 0v90h-400z" fill="#4a6a3a"/>' +
      /* wings */
      '<rect x="20" y="96" width="140" height="78" fill="' + BUFF + '"/><rect x="240" y="96" width="140" height="78" fill="' + BUFF + '"/>' +
      [20, 240].map(x => Array.from({ length: 10 }, (_, i) => '<rect x="' + (x + 6 + i * 13) + '" y="90" width="8" height="8" fill="' + BUFF + '"/>').join("") +
        Array.from({ length: 14 }, (_, i) => '<rect class="' + (i % 5 ? "" : "df-glow") + '" x="' + (x + 10 + (i % 7) * 18) + '" y="' + (106 + Math.floor(i / 7) * 30) + '" width="10" height="20" fill="' + (i % 3 ? "#5a6a7a" : "#ffe2a0") + '" stroke="' + TRIM + '" stroke-width="1.5"/>').join("")).join("") +
      /* central tower with battlements */
      '<rect x="160" y="40" width="80" height="134" fill="' + SH + '"/><rect x="166" y="40" width="68" height="134" fill="' + BUFF + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (160 + i * 14) + '" y="30" width="10" height="12" fill="' + BUFF + '"/>').join("") +
      '<rect x="156" y="40" width="88" height="5" fill="' + TRIM + '"/>' +
      [150, 238].map(x => '<rect x="' + x + '" y="36" width="12" height="138" fill="' + SH + '"/><path d="M' + x + ' 36l6 -12l6 12z" fill="' + TRIM + '"/>').join("") +
      '<path d="M184 110v-34a16 16 0 0 1 32 0v34z" fill="#5a6a7a" stroke="' + TRIM + '" stroke-width="3"/><path d="M200 60v50M184 88h32" stroke="' + TRIM + '" stroke-width="2"/>' +
      '<path d="M182 174v-40a18 18 0 0 1 36 0v40z" fill="#3a2a22" stroke="' + TRIM + '" stroke-width="3"/>' +
      '<rect x="170" y="118" width="60" height="9" fill="' + TRIM + '"/><text x="200" y="125.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#5a4a2a" letter-spacing="1">OVERBROOK</text>' +
      /* front steps */
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (150 - i * 14) + '" y="' + (174 + i * 8) + '" width="' + (100 + i * 28) + '" height="8" fill="' + (i % 2 ? "#cfc6b4" : "#d8d0be") + '"/>').join("") +
      /* trees */
      [16, 384].map(x => '<rect x="' + (x - 3) + '" y="150" width="6" height="40" fill="#4a3424"/><circle cx="' + x + '" cy="146" r="20" fill="#3a5a2a"/>').join("") +
      /* three voices harmonizing on the steps */
      singer(176, "", PINK) + singer(200, "df-sw2", GOLD) + singer(224, "df-sw3", TEAL) +
      note(160, 176, "", PINK) + note(206, 170, "df-n2", GOLD) + note(236, 176, "df-n3", TEAL),
      sky("df-s4", "#2a3a6a", "#f0a07a"));
  }

  /* 5. N 59th St and Lancaster Ave */
  function dfcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#df-s5)"/>' + stars(16) +
      /* Center City far down Lancaster: City Hall tower + spire towers */
      '<g opacity=".9"><rect x="150" y="70" width="18" height="60" fill="#2a2640"/><rect x="172" y="56" width="14" height="74" fill="#302a48"/><path d="M172 56l7 -24l7 24z" fill="#302a48"/>' +
      '<rect x="196" y="74" width="14" height="56" fill="#2a2640"/><path d="M196 74q7 -14 14 0z" fill="#2a2640"/><rect x="201.5" y="56" width="3" height="12" fill="#3a3456"/><circle cx="203" cy="55" r="2" fill="#3a3456"/><circle class="df-glow" cx="203" cy="80" r="3" fill="#fff1b0"/>' +
      '<rect x="216" y="62" width="16" height="68" fill="#302a48"/><path d="M216 62l8 -16l8 16z" fill="#302a48"/><rect x="236" y="80" width="20" height="50" fill="#2a2640"/></g>' +
      Array.from({ length: 10 }, (_, i) => '<rect class="' + (i % 3 ? "" : "df-glow df-glow2") + '" x="' + (152 + (i * 9) % 100) + '" y="' + (86 + (i * 7) % 36) + '" width="3" height="4" fill="#ffd98a"/>').join("") +
      /* trolley wire */
      '<path d="M0 60h400" stroke="#111" stroke-width="1.5"/>' +
      /* row homes left */
      '<rect x="0" y="100" width="70" height="126" fill="#7a4a3a"/><rect x="70" y="110" width="60" height="116" fill="#8a5644"/>' +
      [[0, 70], [70, 60]].map(([x, w]) => [0, 1, 2].map(r => '<rect class="' + (r === 1 ? "df-glow" : "") + '" x="' + (x + w / 2 - 9) + '" y="' + (118 + r * 34) + '" width="18" height="22" fill="' + (r === 1 ? "#ffd98a" : "#2a2230") + '" stroke="#e8e2d6" stroke-width="1.5"/>').join("") + '<rect x="' + x + '" y="98" width="' + w + '" height="6" fill="#e8e2d6"/>').join("") +
      /* brick wall with the tags */
      '<rect x="140" y="138" width="260" height="88" fill="#7a3e30"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M140 ' + (146 + i * 8) + 'h260" stroke="#6a3226" stroke-width="1"/>').join("") +
      tag("DELFONICS", 150, 190, 36, PINK, -6) + tag("LA-LA", 160, 216, 18, GOLD, -3) + tag("POOGIE", 266, 214, 18, TEAL, -4) +
      /* street */
      '<rect x="0" y="226" width="400" height="34" fill="#4a4844"/><rect x="0" y="224" width="400" height="4" fill="#d8dce2"/><path d="M0 240h400M0 248h400" stroke="#7a766e" stroke-width="2"/>' +
      '<g class="df-car"><rect x="0" y="236" width="60" height="13" rx="5" fill="' + TEAL + '"/><rect x="12" y="228" width="34" height="10" rx="3" fill="' + TEAL + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="48" cy="250" r="4" fill="#111"/></g>' +
      /* signs */
      '<rect x="384" y="70" width="6" height="156" fill="#2f2f2f"/>' + sign(286, 72, 110, "") + t9("N 59th St", 341 - 4.5 * 12 * 0.6, 88, 12, "#fff") + sign(286, 98, 110, "Lancaster Av") +
      '<g class="df-sp"><circle cx="300" cy="166" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="df-sp df-sp2"><circle cx="306" cy="160" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("df-s5", "#110c24", "#6a3a58"));
  }

  window.SCENES = { dfstation: dfstation, dfstudio: dfstudio, dfplaque: dfplaque, dfcastle: dfcastle, dfcorner: dfcorner };
})();
