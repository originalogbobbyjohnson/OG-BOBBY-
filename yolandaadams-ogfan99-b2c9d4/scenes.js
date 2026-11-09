/* yolandaadams scenes (Regions tab: Houston + Texas; Southeast Houston). CSS classes prefixed ya- (the page's own anim-train is kept).
   1 METRO's 73 Bellfort bus pulling up to Bellfort Ave / S Wayside Dr on the Southeast side (Sterling High country).
   2 Sterling High School on Martindale Rd, class of '79: blue-and-white Raiders, a choir on the front steps, the flag waving.
   3 Forrester Elementary, where Ms. Adams taught second and third grade: chalkboard, little desks, the clock ticking.
   4 The Yolanda Adams Morning Show studio: ON AIR light, the mic, a sunrise over Houston through the window, notes floating.
   5 Bellfort Ave and S Wayside Dr: green signs, YOLANDA tagged on the wall, Wells Fargo Plaza's green glass glowing downtown.
   No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes yablink{0%,100%{opacity:.25}50%{opacity:1}}.ya-bl{animation:yablink 1.4s ease-in-out infinite}.ya-bl2{animation-delay:-.7s}' +
    '@keyframes yasway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.ya-sway{animation:yasway 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.ya-s2{animation-delay:-.4s}.ya-s3{animation-delay:-.8s}.ya-s4{animation-delay:-1.2s}' +
    '@keyframes yanote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(12px,-56px);opacity:0}}.ya-note{animation:yanote 3s ease-out infinite}.ya-n2{animation-delay:-1s}.ya-n3{animation-delay:-2s}' +
    '@keyframes yawave{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.ya-flag{animation:yawave 1.2s ease-in-out infinite;transform-box:fill-box;transform-origin:0 50%}' +
    '@keyframes yatick{from{transform:rotate(0)}to{transform:rotate(360deg)}}.ya-hand{animation:yatick 6s linear infinite;transform-box:view-box;transform-origin:330px 52px}' +
    '@keyframes yaonair{0%,100%{opacity:1}50%{opacity:.45}}.ya-onair{animation:yaonair 1.2s ease-in-out infinite}' +
    '@keyframes yarise{0%,100%{transform:translateY(4px)}50%{transform:translateY(-3px)}}.ya-sun{animation:yarise 3s ease-in-out infinite}' +
    '@keyframes yaspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ya-sp{animation:yaspray 1.4s ease-out infinite}.ya-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "ya-bl" + (i % 2 ? " ya-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const brick = (x, y, w, h, base, line) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>' + Array.from({ length: Math.floor(h / 10) }, (_, r) => '<path d="M' + x + ' ' + (y + 10 + r * 10) + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>').join("");
  const oak = (x, base, s) => '<g><rect x="' + (x - 3 * s) + '" y="' + (base - 26 * s) + '" width="' + (6 * s) + '" height="' + (26 * s) + '" fill="#4a3526"/>' +
    '<ellipse cx="' + x + '" cy="' + (base - 34 * s) + '" rx="' + (30 * s) + '" ry="' + (16 * s) + '" fill="#2f5a34"/><ellipse cx="' + (x - 14 * s) + '" cy="' + (base - 40 * s) + '" rx="' + (16 * s) + '" ry="' + (11 * s) + '" fill="#3a6b3e"/></g>';
  const ROSE = "#ff8fb8", GOLD = "#e9c46a", BLUE = "#6ec3ff", BUS = "#1f5fa8", RED = "#e5484d", RAID = "#1f4fb0";
  const robe = (x, base, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (base - 38) + '" r="6.5" fill="#2a1a12"/>' +
    '<path d="M' + (x - 11) + ' ' + base + 'l3 -28q8 -6 16 0l3 28z" fill="' + c + '"/><path d="M' + (x - 6) + ' ' + (base - 30) + 'q6 5 12 0" stroke="' + GOLD + '" stroke-width="2" fill="none"/></g>';
  const note = (x, y, c, cls) => '<g class="ya-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="1.6" height="14" fill="' + c + '"/></g>';

  /* 1. METRO 73 Bellfort at Bellfort Ave / S Wayside Dr */
  function yastation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (70 + i * 44) + '" y="122" width="34" height="26" rx="3" fill="#1c2630"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="108" width="320" height="76" rx="10" fill="#f2f4f6" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="40" y="156" width="320" height="8" fill="' + BUS + '"/><rect x="40" y="166" width="320" height="4" fill="' + RED + '"/>' +
      '<rect x="44" y="118" width="22" height="46" rx="3" fill="#24303a"/>' +
      '<rect x="292" y="112" width="64" height="12" rx="2" fill="#111"/><text x="324" y="121.5" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb84a">73 BELLFORT</text>' +
      '<circle cx="104" cy="186" r="13" fill="#222"/><circle cx="104" cy="186" r="5" fill="#999"/><circle cx="306" cy="186" r="13" fill="#222"/><circle cx="306" cy="186" r="5" fill="#999"/>' +
      '<circle cx="352" cy="172" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yas1)"/>' + stars(10) +
      '<rect x="0" y="84" width="110" height="46" fill="#5a4a6a"/><rect x="10" y="94" width="26" height="14" fill="#ffd98a" opacity=".7"/><rect x="60" y="94" width="26" height="14" fill="#ffd98a" opacity=".5"/>' +
      '<rect x="290" y="90" width="110" height="40" fill="#4a3a5a"/><rect x="304" y="98" width="30" height="14" fill="#ffd98a" opacity=".6"/>' +
      oak(150, 112, 1.1) + oak(250, 114, 0.9) +
      '<rect x="0" y="130" width="400" height="66" fill="#2c2e34"/><path d="M0 176h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#a8a196"/><path d="M0 200h400" stroke="#d8d2c6" stroke-width="3"/>' +
      '<rect x="370" y="100" width="5" height="110" fill="#8a9096"/><rect x="352" y="96" width="42" height="40" rx="3" fill="#fff" stroke="' + BUS + '" stroke-width="3"/><circle cx="373" cy="112" r="9" fill="' + BUS + '"/><text x="373" y="116" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">73</text><text x="373" y="131" text-anchor="middle" ' + font + ' font-size="7" fill="' + BUS + '">STOP</text>' +
      '<rect x="14" y="208" width="330" height="42" rx="3" fill="#111"/><circle cx="38" cy="229" r="13" fill="' + BUS + '"/><text x="38" y="234" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">73</text>' +
      '<text x="60" y="226" ' + font + ' font-size="14" fill="#fff">BELLFORT AVE / S WAYSIDE DR</text><text x="60" y="242" ' + font + ' font-size="10" fill="' + ROSE + '">BELLFORT · SOUTHEAST HOUSTON</text>',
      sky("yas1", "#2a1440", "#f08a6a"));
  }

  /* 2. Sterling High School, the Raiders */
  function yasterling() {
    const wins = Array.from({ length: 10 }, (_, i) => '<rect x="' + (36 + i * 34) + '" y="76" width="22" height="16" fill="#cfe6ff" opacity=".85"/><rect x="' + (36 + i * 34) + '" y="104" width="22" height="16" fill="#cfe6ff" opacity=".7"/>').join("");
    const steps = [2, 1, 0].map(r => '<rect x="' + (110 - r * 16) + '" y="' + (204 - r * 16) + '" width="' + (180 + r * 32) + '" height="16" fill="' + ["#c9c4b8", "#b8b2a6", "#a8a296"][r] + '"/>').join("");
    const singers = [2, 1, 0].map(r => Array.from({ length: 5 + r }, (_, i) => robe(130 - r * 16 + i * 34, 204 - r * 16 + 2, r === 1 ? "#f2f4f8" : RAID, "ya-sway ya-s" + (1 + (i + r) % 4))).join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#yas2)"/>' +
      '<rect x="20" y="58" width="360" height="100" fill="#d8cfbe"/>' + wins +
      '<rect x="20" y="58" width="360" height="8" fill="' + RAID + '"/>' +
      '<rect x="140" y="38" width="120" height="22" fill="' + RAID + '"/><text x="200" y="53" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">STERLING HIGH</text>' +
      '<rect x="176" y="124" width="48" height="34" fill="' + RAID + '"/><path d="M200 124v34" stroke="#fff" stroke-width="2"/>' +
      '<rect x="356" y="8" width="3" height="52" fill="#ccc"/><g class="ya-flag"><rect x="359" y="10" width="30" height="18" fill="' + RAID + '"/><rect x="359" y="16" width="30" height="5" fill="#fff"/></g>' +
      '<rect x="0" y="158" width="400" height="102" fill="#3a6a3a"/>' + steps + singers +
      note(60, 160, BLUE) + note(340, 150, "#fff", "ya-n2") + note(260, 120, BLUE, "ya-n3") +
      '<rect x="10" y="226" width="140" height="26" rx="3" fill="#111" opacity=".85"/><text x="80" y="238" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">MARTINDALE RD</text><text x="80" y="248" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + BLUE + '">RAIDERS · BLUE &amp; WHITE</text>',
      sky("yas2", "#4a8ae0", "#f6d8b0"));
  }

  /* 3. Forrester Elementary, Ms. Adams' classroom */
  function yaclass() {
    const desks = Array.from({ length: 8 }, (_, i) => { const x = 40 + (i % 4) * 90, y = 186 + Math.floor(i / 4) * 38; return '<rect x="' + x + '" y="' + y + '" width="50" height="8" rx="2" fill="#c98a4a"/><rect x="' + (x + 4) + '" y="' + (y + 8) + '" width="4" height="18" fill="#6a6a70"/><rect x="' + (x + 42) + '" y="' + (y + 8) + '" width="4" height="18" fill="#6a6a70"/>' +
      '<rect x="' + (x + 10) + '" y="' + (y - 6) + '" width="16" height="6" fill="' + [RED, BLUE, GOLD, ROSE][i % 4] + '"/>'; }).join("");
    const abc = ["A", "B", "C", "D", "E", "F", "G", "H"].map((l, i) => '<rect x="' + (30 + i * 30) + '" y="8" width="24" height="22" rx="2" fill="' + [RED, BLUE, GOLD, ROSE][i % 4] + '"/><text x="' + (42 + i * 30) + '" y="25" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">' + l + '</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="#f3e6c8"/>' + abc +
      '<rect x="30" y="40" width="250" height="110" rx="4" fill="#2f4a3a" stroke="#8a6a3a" stroke-width="6"/>' +
      '<text x="50" y="70" font-family="Comic Sans MS, Chalkboard, cursive" font-size="18" fill="#f7f3ea">Ms. Adams</text>' +
      '<text x="50" y="98" font-family="Comic Sans MS, Chalkboard, cursive" font-size="14" fill="#f7f3ea">2 + 3 = 5</text>' +
      '<text x="50" y="124" font-family="Comic Sans MS, Chalkboard, cursive" font-size="13" fill="' + GOLD + '">Day by day!</text>' +
      '<path d="M190 120q20 -30 50 -10" stroke="' + ROSE + '" stroke-width="3" fill="none"/><path d="M226 104l14 6 -10 10" stroke="' + ROSE + '" stroke-width="3" fill="none"/>' +
      '<rect x="40" y="150" width="230" height="6" fill="#8a6a3a"/>' +
      '<circle cx="330" cy="52" r="22" fill="#fff" stroke="#333" stroke-width="3"/><rect x="329" y="36" width="2" height="16" fill="#333"/><g class="ya-hand"><rect x="329.2" y="40" width="1.6" height="13" fill="' + RED + '"/></g>' +
      '<rect x="300" y="90" width="70" height="60" rx="3" fill="#fff" stroke="#c9a24a" stroke-width="3"/><circle cx="335" cy="112" r="10" fill="' + GOLD + '"/><path d="M310 144l14 -20 10 12 8 -8 14 16z" fill="#3a8a4a"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#c8b48a"/>' + desks +
      '<rect x="230" y="232" width="160" height="22" rx="3" fill="#111" opacity=".85"/><text x="310" y="243" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">FORRESTER ELEMENTARY</text><text x="310" y="251" text-anchor="middle" ' + font + ' font-size="7" fill="' + ROSE + '">MS. ADAMS · 2ND &amp; 3RD GRADE</text>');
  }

  /* 4. The morning show studio */
  function yaradio() {
    return svg(
      '<rect width="400" height="260" fill="#241a30"/>' +
      '<rect x="20" y="20" width="200" height="120" rx="4" fill="url(#yas4)" stroke="#555" stroke-width="4"/>' +
      '<g clip-path="url(#yaclip4)"><g class="ya-sun"><circle cx="120" cy="112" r="20" fill="' + GOLD + '"/></g>' +
      '<g fill="#2a2440"><rect x="30" y="96" width="18" height="44"/><rect x="54" y="80" width="22" height="60"/><rect x="82" y="106" width="16" height="34"/><rect x="150" y="84" width="20" height="56"/><rect x="176" y="98" width="16" height="42"/><rect x="196" y="76" width="18" height="64"/></g></g>' +
      '<rect x="20" y="132" width="200" height="8" fill="#3a3a50"/>' +
      '<rect x="252" y="24" width="120" height="34" rx="6" fill="#3a0a0a"/><rect class="ya-onair" x="256" y="28" width="112" height="26" rx="4" fill="' + RED + '"/><text x="312" y="47" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">ON AIR</text>' +
      '<rect x="240" y="74" width="140" height="58" rx="4" fill="#1a1a24"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (250 + i * 12) + '" y="' + (84 + (i * 7) % 26) + '" width="6" height="' + (40 - (i * 7) % 26) + '" fill="' + (i % 3 ? BLUE : ROSE) + '" class="' + (i % 2 ? "ya-bl" : "ya-bl ya-bl2") + '"/>').join("") +
      '<rect x="0" y="160" width="400" height="100" fill="#5a3a2a"/><rect x="0" y="160" width="400" height="10" fill="#7a5038"/>' +
      '<rect x="182" y="96" width="5" height="70" fill="#888" transform="rotate(-20 184 166)"/><rect x="150" y="80" width="26" height="40" rx="12" fill="#c8c8d0" stroke="#666" stroke-width="2"/><path d="M152 92h22M152 100h22M152 108h22" stroke="#888" stroke-width="1.5"/>' +
      '<rect x="60" y="180" width="120" height="36" rx="4" fill="#2a2a34"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (68 + i * 14) + '" y="188" width="8" height="20" rx="2" fill="#555"/><rect x="' + (68 + i * 14) + '" y="' + (192 + (i * 5) % 12) + '" width="8" height="4" fill="' + GOLD + '"/>').join("") +
      '<path d="M260 210q20 -30 40 0" stroke="#2a2a34" stroke-width="8" fill="none"/><rect x="250" y="206" width="16" height="20" rx="6" fill="#2a2a34"/><rect x="294" y="206" width="16" height="20" rx="6" fill="#2a2a34"/>' +
      note(210, 80, ROSE) + note(230, 110, GOLD, "ya-n2") + note(120, 60, "#fff", "ya-n3") +
      '<rect x="210" y="228" width="182" height="26" rx="3" fill="#111" opacity=".85"/><text x="301" y="240" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">THE MORNING SHOW</text><text x="301" y="250" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + ROSE + '">GOOD MORNING, HOUSTON</text>',
      sky("yas4", "#f6b26b", "#fde2b0") + '<clipPath id="yaclip4"><rect x="22" y="22" width="196" height="110"/></clipPath>');
  }

  /* 5. Bellfort Ave and S Wayside Dr, Wells Fargo Plaza far off downtown */
  function yacorner() {
    const towers = '<g fill="#1a2236"><rect x="40" y="96" width="30" height="54"/><rect x="78" y="80" width="26" height="70"/><rect x="112" y="90" width="22" height="60"/><rect x="250" y="88" width="28" height="62"/><rect x="286" y="100" width="24" height="50"/></g>' +
      '<path d="M150 150v-110q24 -10 48 0v110z" fill="#1d5a4a"/><path d="M156 150v-104q18 -7 36 0v104" stroke="#3fae8a" stroke-width="2" fill="none" opacity=".7"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect class="' + (i % 4 ? "" : "ya-bl") + '" x="' + (160 + (i % 3) * 10) + '" y="' + (56 + Math.floor(i / 3) * 22) + '" width="5" height="10" fill="#7fe0c0" opacity=".6"/>').join("") +
      Array.from({ length: 16 }, (_, i) => '<rect x="' + [46, 84, 96, 118, 256, 268, 292][i % 7] + '" y="' + (100 + (i * 11) % 44) + '" width="4" height="4" fill="#ffd98a" opacity=".8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#yas5)"/>' + stars(16) + towers +
      '<rect x="0" y="150" width="400" height="110" fill="#2b2b30"/>' +
      brick(130, 120, 270, 100, "#6a5a7a", "#544664") +
      tag("YOLANDA", 150, 184, 40, ROSE, -8) + tag("BE BLESSED", 260, 208, 20, GOLD, -4) + tag("SE CHOIR", 142, 214, 15, BLUE, -3) +
      '<g class="ya-sp"><circle cx="350" cy="166" r="3" fill="' + ROSE + '" opacity=".7"/></g><g class="ya-sp ya-sp2"><circle cx="356" cy="172" r="2" fill="' + ROSE + '" opacity=".6"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#9a958c"/><path d="M0 222h400" stroke="#d8d2c6" stroke-width="3"/>' +
      '<rect x="62" y="92" width="5" height="140" fill="#5a6066"/>' + sign(10, 86, 108, "BELLFORT AVE") + sign(10, 112, 108, "S WAYSIDE DR") +
      '<text x="64" y="80" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">SOUTHEAST HOUSTON</text>',
      sky("yas5", "#140f30", "#7a3a5a"));
  }

  window.SCENES = { yastation, yasterling, yaclass, yaradio, yacorner };
})();
