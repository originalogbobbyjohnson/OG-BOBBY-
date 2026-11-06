/* frankieavalon scenes (Regions tab: Philadelphia; South Philly / West Passyunk, the 1900 block of S Hemberger St). CSS classes prefixed fa- (the page's own anim-train is kept).
   1 23rd St & Mifflin St on SEPTA's Route 7 bus, by St. Edmond School where he went to grade school: South Philly rowhouses with marble steps, the stop flag, a white SEPTA bus sliding in.
   2 South Philadelphia High School at Broad & Snyder, the 1907 grey-stone Norman Romanesque building he walked into in the mid-50s: arched entry, twin towers, trumpet notes floating out of a window (he was a kid trumpet player first).
   3 Studio 50 on Broadway, New York, 1959, where he sang "Why" on the big Sunday-night TV variety show: red curtain, a 1950s studio camera with its tally light, the APPLAUSE sign blinking, a mic in the spotlight.
   4 Malibu, 1963, where Beach Party started shooting: surfboards in the sand, a bonfire, waves rolling in, the sun going down.
   5 S Hemberger St and Mifflin St, his block for eight years: green signs, FRANKIE AVALON tagged on the brick, St. Edmond's Romanesque front with its rose window and clay-tile roof behind (21st & Snyder, his parish). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes faglow{0%,100%{opacity:.45}50%{opacity:1}}.fa-glow{animation:faglow 2.6s ease-in-out infinite}.fa-glow2{animation-delay:-1.3s}' +
    '@keyframes fanote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(36px,-44px);opacity:0}}.fa-note{animation:fanote 3s ease-out infinite}.fa-n2{animation-delay:-1s}.fa-n3{animation-delay:-2s}' +
    '@keyframes fablink{0%,100%{opacity:1}50%{opacity:.2}}.fa-blink{animation:fablink 1.1s steps(1) infinite}' +
    '@keyframes fawave{0%,100%{transform:translateX(0)}50%{transform:translateX(-18px)}}.fa-wave{animation:fawave 3s ease-in-out infinite}.fa-wave2{animation-delay:-1.5s}' +
    '@keyframes fafire{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.3)}}.fa-fire{transform-box:fill-box;transform-origin:50% 100%;animation:fafire .5s ease-in-out infinite}.fa-fire2{animation-delay:-.25s}' +
    '@keyframes faspot{0%,100%{opacity:.18}50%{opacity:.32}}.fa-spot{animation:faspot 2s ease-in-out infinite}' +
    '@keyframes faflag{0%,100%{transform:skewY(0)}50%{transform:skewY(5deg)}}.fa-flag{transform-box:fill-box;transform-origin:0 50%;animation:faflag 1.8s ease-in-out infinite}' +
    '@keyframes faspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.fa-sp{animation:faspray 1.4s ease-out infinite}.fa-sp2{animation-delay:.45s}' +
    '@keyframes facar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.fa-car{animation:facar 9s linear infinite}' +
    '@keyframes fagull{from{transform:translate(-40px,0)}to{transform:translate(460px,-20px)}}.fa-gull{animation:fagull 11s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  /* a 9 with a straight stem */
  const nine = (x, y, h, col) => '<circle cx="' + (x + h * 0.27) + '" cy="' + (y - h * 0.7) + '" r="' + (h * 0.22) + '" fill="none" stroke="' + col + '" stroke-width="' + (h * 0.17) + '"/><rect x="' + (x + h * 0.40) + '" y="' + (y - h * 0.72) + '" width="' + (h * 0.17) + '" height="' + (h * 0.72) + '" fill="' + col + '"/>';
  const mono = (str, x, y, h, col) => { let o = "", cw = h * 0.62; for (let i = 0; i < str.length; i++) { const ch = str[i], cx = x + i * cw; if (ch === "9") o += nine(cx + h * 0.08, y, h * 0.7, col); else if (ch !== " ") o += '<text x="' + cx + '" y="' + y + '" font-family="Courier New, monospace" font-weight="700" font-size="' + h + '" fill="' + col + '">' + ch + '</text>'; } return o; };
  const monoW = (str, h) => str.length * h * 0.62;
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "fa-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, cls, col) => '<g class="fa-note ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="4" fill="' + col + '"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="2" height="14" fill="' + col + '"/><path d="M' + (x + 5) + ' ' + (y - 14) + 'q6 3 4 9" stroke="' + col + '" stroke-width="2" fill="none"/></g>';
  const ORG = "#ffa63d", BLUE = "#4aa8ff", SAND = "#f7e7a6", PINK = "#ff7a8a", BUS = "#1f4e79";

  /* 1. 23rd St & Mifflin St, Route 7 bus */
  function fastation() {
    const house = (x, col, aw) => '<rect x="' + x + '" y="74" width="66" height="108" fill="' + col + '"/><rect x="' + x + '" y="68" width="66" height="7" fill="#e2dccc"/>' +
      '<rect class="fa-glow" x="' + (x + 8) + '" y="84" width="18" height="22" fill="#ffd98a" opacity=".85"/><rect x="' + (x + 38) + '" y="84" width="18" height="22" fill="#3a3040"/>' +
      '<path d="M' + (x + 4) + ' 126h58l-6 -8h-46z" fill="' + aw + '"/><rect x="' + (x + 10) + '" y="128" width="18" height="44" fill="#4a3428"/><rect x="' + (x + 38) + '" y="132" width="20" height="20" fill="#3a3040"/>' +
      '<rect x="' + (x + 6) + '" y="172" width="26" height="4" fill="#f4f2ee"/><rect x="' + (x + 4) + '" y="176" width="30" height="4" fill="#e6e2da"/>';
    const bus = '<g class="anim-train"><rect x="20" y="132" width="300" height="70" rx="8" fill="#f2f2f0" stroke="#7b828a" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (34 + i * 40) + '" y="142" width="30" height="24" rx="2" fill="#1d2731"/>').join("") +
      '<rect x="20" y="172" width="300" height="5" fill="#c8102e"/><rect x="20" y="178" width="300" height="5" fill="' + BUS + '"/>' +
      '<rect x="282" y="140" width="36" height="34" rx="3" fill="#1d2731"/><rect x="246" y="140" width="28" height="46" fill="#aab1b9" stroke="#7b828a"/>' +
      '<rect x="270" y="134" width="46" height="8" fill="#111"/><text x="293" y="141" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">7 PIER 70</text>' +
      '<circle cx="70" cy="202" r="12" fill="#222"/><circle cx="70" cy="202" r="5" fill="#888"/><circle cx="270" cy="202" r="12" fill="#222"/><circle cx="270" cy="202" r="5" fill="#888"/><circle cx="314" cy="186" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fa-s1)"/>' +
      house(0, "#a85a40", BLUE) + house(66, "#8e4a3a", ORG) + house(132, "#b06848", "#8fd08a") + house(198, "#94503c", PINK) + house(264, "#a85a40", BLUE) + house(330, "#8e4a3a", ORG) +
      '<rect x="0" y="180" width="400" height="22" fill="#b8b2a6"/>' +
      bus +
      '<rect x="0" y="210" width="400" height="50" fill="#4e4c48"/><path d="M0 236h400" stroke="#e8e2a0" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="352" y="96" width="5" height="114" fill="#555"/><g class="fa-flag"><rect x="357" y="98" width="30" height="40" fill="#fff" stroke="#333"/><rect x="361" y="104" width="22" height="14" rx="3" fill="' + BUS + '"/><text x="372" y="115" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">7</text><rect x="361" y="122" width="22" height="3" fill="#c8102e"/></g>' +
      '<rect x="92" y="14" width="216" height="32" rx="3" fill="#111"/><text x="104" y="35" ' + font + ' font-size="14" fill="#fff">23rd St &amp; Mifflin St</text>' +
      '<rect x="272" y="20" width="28" height="20" rx="4" fill="' + BUS + '"/><text x="286" y="34" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">7</text>',
      sky("fa-s1", "#78b8e8", "#f6dcb0"));
  }

  /* 2. South Philadelphia High School, Broad & Snyder (1907 building) */
  function faschool() {
    const stone = (x, y, w, h) => { let o = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#9a9a96"/>'; for (let r = 0; r < h / 10; r++) o += '<path d="M' + x + ' ' + (y + r * 10) + 'h' + w + '" stroke="#86867f" stroke-width="1"/>' + Array.from({ length: Math.ceil(w / 22) }, (_, c) => '<path d="M' + (x + c * 22 + (r % 2) * 11) + ' ' + (y + r * 10) + 'v10" stroke="#86867f" stroke-width="1"/>').join(""); return o; };
    const arch = (x, y, w, h) => '<path d="M' + x + ' ' + (y + h) + 'v-' + (h - w / 2) + 'a' + (w / 2) + ' ' + (w / 2) + ' 0 0 1 ' + w + ' 0v' + (h - w / 2) + 'z" fill="#cfe0e6" stroke="#6e6e68" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fa-s2)"/>' +
      stone(30, 72, 340, 140) +
      /* twin towers with battlements */
      stone(46, 30, 64, 182) + stone(290, 30, 64, 182) +
      [46, 290].map(x => Array.from({ length: 4 }, (_, i) => '<rect x="' + (x + i * 17) + '" y="22" width="11" height="10" fill="#9a9a96" stroke="#86867f"/>').join("") + arch(x + 20, 50, 24, 40) + arch(x + 20, 120, 24, 40)).join("") +
      /* arched windows across the front */
      [128, 162, 214, 248].map(x => arch(x, 88, 22, 36) + arch(x, 140, 22, 36)).join("") +
      /* Romanesque arched entry */
      '<path d="M170 212v-50a30 30 0 0 1 60 0v50z" fill="#3a3430" stroke="#6e6e68" stroke-width="4"/><path d="M164 212v-50a36 36 0 0 1 72 0v50" fill="none" stroke="#b4b4ae" stroke-width="4"/>' +
      '<path d="M136 74v-22h128v22z" fill="#9a9a96" stroke="#86867f"/><rect x="146" y="56" width="108" height="14" fill="#b4b4ae"/><text x="186" y="66.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#3a3a36" letter-spacing="1">SOUTHERN HIGH</text>' +
      mono("1907", 228, 67, 9, "#3a3a36") +
      /* trumpet notes from a window */
      '<rect class="fa-glow" x="128" y="88" width="22" height="36" fill="#ffd98a" opacity=".5"/>' +
      note(150, 100, "", ORG) + note(156, 112, "fa-n2", BLUE) + note(146, 94, "fa-n3", PINK) +
      '<rect x="0" y="212" width="400" height="10" fill="#c8c4bc"/><rect x="0" y="222" width="400" height="38" fill="#55524c"/><path d="M0 242h400" stroke="#e8e2a0" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="fa-car"><rect x="0" y="230" width="62" height="14" rx="6" fill="' + PINK + '"/><rect x="14" y="221" width="32" height="11" rx="4" fill="' + PINK + '"/><circle cx="14" cy="244" r="4" fill="#111"/><circle cx="48" cy="244" r="4" fill="#111"/><rect x="58" y="234" width="5" height="3" fill="#fff6c2"/></g>',
      sky("fa-s2", "#86c4ec", "#eef4f2"));
  }

  /* 3. Studio 50 on Broadway, 1959 */
  function fasullivan() {
    let folds = ""; for (let i = 0; i < 20; i++) folds += '<rect x="' + (i * 20) + '" y="0" width="10" height="196" fill="#8a1424" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="#b01c2e"/>' + folds +
      '<path d="M0 0h400v26q-100 18 -200 0q-100 18 -200 0z" fill="#7a0e1c"/>' +
      /* APPLAUSE sign */
      '<rect x="140" y="34" width="120" height="26" rx="4" fill="#111" stroke="#555" stroke-width="2"/><text class="fa-blink" x="200" y="52" text-anchor="middle" ' + font + ' font-size="14" fill="#ffe08a" letter-spacing="2">APPLAUSE</text>' +
      /* spotlight + mic */
      '<path class="fa-spot" d="M180 0h40l60 196h-160z" fill="#fff6d8"/>' +
      '<ellipse cx="200" cy="196" rx="70" ry="12" fill="#fff6d8" opacity=".35"/>' +
      '<rect x="198" y="120" width="4" height="76" fill="#999"/><rect x="190" y="98" width="20" height="26" rx="9" fill="#c8ced4" stroke="#000" stroke-width="2"/><path d="M186 196l14 -4l14 4" stroke="#999" stroke-width="4" fill="none"/>' +
      note(222, 110, "", SAND) + note(228, 126, "fa-n2", ORG) + note(216, 100, "fa-n3", BLUE) +
      /* stage floor */
      '<rect x="0" y="196" width="400" height="64" fill="#3a2a22"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 196l-14 64" stroke="#2c1e18" stroke-width="2"/>').join("") +
      '<rect x="0" y="196" width="400" height="4" fill="' + SAND + '"/>' +
      /* studio camera */
      '<g transform="translate(300 0)"><rect x="10" y="138" width="60" height="36" rx="3" fill="#3a3a40" stroke="#000" stroke-width="2"/><rect x="-10" y="144" width="20" height="22" fill="#222"/>' +
      '<circle cx="-12" cy="150" r="5" fill="#444" stroke="#000"/><circle cx="-12" cy="162" r="4" fill="#444" stroke="#000"/>' +
      '<rect class="fa-blink" x="56" y="132" width="10" height="6" fill="#ff2a2a"/><rect x="36" y="174" width="6" height="44" fill="#555"/><path d="M20 230l19 -12l19 12" stroke="#555" stroke-width="4" fill="none"/></g>' +
      /* studio name card */
      '<rect x="14" y="214" width="120" height="34" rx="3" fill="#111" stroke="' + SAND + '" stroke-width="1.5"/><text x="74" y="230" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">STUDIO 50</text><text x="74" y="243" text-anchor="middle" ' + font + ' font-size="8" fill="' + SAND + '">BROADWAY</text>' +
      mono("1959", 360 - monoW("1959", 12) / 2, 248, 12, SAND));
  }

  /* 4. Malibu, 1963: Beach Party */
  function fabeach() {
    const board = (x, col, rot) => '<g transform="rotate(' + rot + ' ' + x + ' 200)"><ellipse cx="' + x + '" cy="170" rx="10" ry="46" fill="' + col + '" stroke="#000" stroke-width="2"/><path d="M' + x + ' 126v88" stroke="#fff" stroke-width="2" opacity=".8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fa-s4)"/>' +
      '<circle cx="300" cy="118" r="34" fill="#ffd26a"/><circle cx="300" cy="118" r="44" fill="#ffd26a" opacity=".25"/>' +
      '<path class="fa-gull" d="M0 50q6 -6 12 0q6 -6 12 0" stroke="#3a3a4a" stroke-width="2" fill="none"/>' +
      /* ocean */
      '<rect x="0" y="126" width="400" height="60" fill="#2a78b8"/>' +
      '<g class="fa-wave"><path d="M-20 140q20 -8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe6ff" stroke-width="3" fill="none"/></g>' +
      '<g class="fa-wave fa-wave2"><path d="M-20 160q20 -8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#e6f6ff" stroke-width="3" fill="none"/></g>' +
      '<path d="M0 180q100 -10 200 0t200 0v80h-400z" fill="#e8f6ff" opacity=".8"/>' +
      '<path d="M0 186q100 -8 200 0t200 0v74h-400z" fill="' + SAND + '"/>' +
      board(60, ORG, -8) + board(86, BLUE, 4) + board(112, PINK, -3) +
      /* bonfire */
      '<path d="M222 236l40 -10M226 226l36 10" stroke="#6a4020" stroke-width="6" stroke-linecap="round"/>' +
      '<path class="fa-fire" d="M242 228q-14 -14 0 -40q14 26 0 40z" fill="#ff7a2a"/><path class="fa-fire fa-fire2" d="M242 228q-7 -8 0 -24q7 16 0 24z" fill="#ffe06a"/>' +
      /* beach blanket + radio */
      '<rect x="300" y="214" width="70" height="30" fill="' + PINK + '" transform="rotate(-6 335 229)"/><path d="M304 220l64 -6M306 230l64 -6M308 240l64 -6" stroke="#fff" stroke-width="2" opacity=".7"/>' +
      '<rect x="320" y="200" width="30" height="20" rx="3" fill="' + BLUE + '" stroke="#000" stroke-width="2"/><circle cx="330" cy="210" r="5" fill="#222"/><rect x="340" y="204" width="6" height="12" fill="#ddd"/>' +
      note(352, 196, "", ORG) + note(358, 206, "fa-n2", "#fff") +
      '<text x="20" y="30" ' + font + ' font-size="14" fill="#fff" letter-spacing="3">MALIBU</text>' + mono("1963", 20, 48, 12, "#fff"),
      sky("fa-s4", "#ff8a5a", "#ffd8a0"));
  }

  /* 5. S Hemberger St and Mifflin St, St. Edmond's behind */
  function facorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#fa-s5)"/>' + stars(16) +
      /* St. Edmond's: Romanesque gable front, rose window, clay-tile roof, round tower */
      '<rect x="262" y="48" width="34" height="100" fill="#c9a888"/><path d="M262 48a17 8 0 0 1 34 0z" fill="#b0503a"/>' + [70, 96].map(y => '<path d="M273 ' + (y + 14) + 'v-8a6 6 0 0 1 12 0v8z" fill="#3a2a3a"/>').join("") +
      '<path d="M120 150v-70l80 -44l80 44v70z" fill="#d4b490"/><path d="M114 82l86 -50l86 50" stroke="#b0503a" stroke-width="8" fill="none"/>' +
      '<path d="M128 84h144" stroke="#a06a4a" stroke-width="3"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (140 + i * 24) + ' 90v8" stroke="#a06a4a" stroke-width="2"/>').join("") +
      '<circle cx="200" cy="96" r="22" fill="#2a2240" stroke="#a06a4a" stroke-width="4"/>' +
      '<g class="fa-glow">' + Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return '<path d="M200 96L' + (200 + 18 * Math.cos(a)).toFixed(1) + ' ' + (96 + 18 * Math.sin(a)).toFixed(1) + '" stroke="' + [ORG, BLUE, PINK, SAND][i % 4] + '" stroke-width="3"/>'; }).join("") + '<circle cx="200" cy="96" r="5" fill="' + SAND + '"/></g>' +
      '<path d="M182 150v-18a18 18 0 0 1 36 0v18z" fill="#3a2a22" stroke="#a06a4a" stroke-width="3"/>' +
      /* rowhouse brick wall */
      '<rect x="0" y="140" width="400" height="86" fill="#8e4836"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (148 + i * 8) + 'h400" stroke="#7a3c2c" stroke-width="1"/>').join("") +
      '<rect x="0" y="134" width="400" height="7" fill="#e2dccc"/>' +
      tag("FRANKIE AVALON", 20, 194, 32, ORG, -5) + tag("HEY VENUS", 60, 220, 16, BLUE, -3) + tag("MIFFLIN ST", 196, 220, 14, PINK, -4) +
      /* trumpet painted on the wall */
      '<g transform="translate(300 196) rotate(-12)"><rect x="0" y="-3" width="44" height="6" fill="' + SAND + '" stroke="#000"/><path d="M44 -3l16 -10v26l-16 -10z" fill="' + SAND + '" stroke="#000"/><rect x="12" y="-10" width="3" height="8" fill="#000"/><rect x="19" y="-10" width="3" height="8" fill="#000"/><rect x="26" y="-10" width="3" height="8" fill="#000"/></g>' +
      /* street */
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="fa-car"><rect x="0" y="238" width="62" height="14" rx="6" fill="' + BLUE + '"/><rect x="14" y="229" width="32" height="11" rx="4" fill="' + BLUE + '"/><circle cx="14" cy="252" r="4" fill="#111"/><circle cx="48" cy="252" r="4" fill="#111"/><rect x="58" y="242" width="5" height="3" fill="#fff6c2"/></g>' +
      '<rect x="384" y="70" width="6" height="156" fill="#2f2f2f"/>' + sign(286, 72, 108, "S Hemberger St") + sign(300, 98, 94, "Mifflin St") +
      '<g class="fa-sp"><circle cx="206" cy="166" r="3" fill="' + ORG + '" opacity=".7"/></g><g class="fa-sp fa-sp2"><circle cx="212" cy="160" r="2" fill="' + ORG + '" opacity=".6"/></g>',
      sky("fa-s5", "#101030", "#5a3060"));
  }

  window.SCENES = { fastation: fastation, faschool: faschool, fasullivan: fasullivan, fabeach: fabeach, facorner: facorner };
})();
