/* luhtyler scenes (Regions tab: South Florida region; Tallahassee - born and raised, between FAMU and FSU). CSS classes prefixed lt- (the page's own anim-train slides the bus in).
   1 A StarMetro bus pulling into C.K. Steele Plaza, the downtown transfer plaza on W Tennessee St, live oaks with Spanish moss, the Capitol tower up the hill.
   2 Bragg Memorial Stadium at FAMU on homecoming at sunset (he filmed the "Law & Order" video behind it at the 2022 homecoming): orange + green stands, the band marching.
   3 Doak Campbell Stadium at FSU on a Saturday night ("I'm in Tallahassee with the Seminoles"): red-brick gothic arches, garnet + gold lights (no logos).
   4 The Old Capitol downtown: white dome, red + white striped awnings, the tall New Capitol tower behind, the state flag waving.
   5 W Tennessee St and N Macomb St at the edge of Frenchtown: green signs, LUH TYLER tagged on the wall, the Capitol tower and moss-hung oaks behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ltmoss{0%,100%{transform:skewX(0)}50%{transform:skewX(6deg)}}.lt-moss{transform-box:fill-box;transform-origin:50% 0%;animation:ltmoss 3.6s ease-in-out infinite}.lt-moss2{animation-delay:-1.8s}' +
    '@keyframes ltmarch{from{transform:translateX(-120px)}to{transform:translateX(420px)}}.lt-march{animation:ltmarch 14s linear infinite}' +
    '@keyframes ltstep{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.lt-step{animation:ltstep .5s ease-in-out infinite}.lt-step2{animation-delay:-.25s}' +
    '@keyframes ltglow{0%,100%{opacity:.45}50%{opacity:1}}.lt-glow{animation:ltglow 1.6s ease-in-out infinite}.lt-glow2{animation-delay:-.8s}' +
    '@keyframes ltconf{0%{transform:translateY(-20px);opacity:0}15%{opacity:1}100%{transform:translateY(120px);opacity:0}}.lt-conf{animation:ltconf 3.2s linear infinite}.lt-conf2{animation-delay:-1.1s}.lt-conf3{animation-delay:-2.2s}' +
    '@keyframes ltflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.lt-flag{transform-box:fill-box;transform-origin:0% 50%;animation:ltflag 1.6s ease-in-out infinite}' +
    '@keyframes ltcloud{from{transform:translateX(-120px)}to{transform:translateX(440px)}}.lt-cloud{animation:ltcloud 30s linear infinite}.lt-cloud2{animation-duration:42s;animation-delay:-20s}' +
    '@keyframes ltbeam{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(10deg)}}.lt-beam{transform-box:fill-box;transform-origin:50% 100%;animation:ltbeam 4s ease-in-out infinite}.lt-beam2{animation-delay:-2s}' +
    '@keyframes ltspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lt-sp{animation:ltspray 1.4s ease-out infinite}.lt-sp2{animation-delay:.45s}' +
    '@keyframes ltcar{from{transform:translateX(-90px)}to{transform:translateX(460px)}}.lt-car{animation:ltcar 7s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const label = (x, w, txt) => '<rect x="' + x + '" y="232" width="' + w + '" height="20" rx="3" fill="#000" opacity=".6"/><text x="' + (x + w / 2) + '" y="246" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const ORANGE = "#ff8a1f", GREEN = "#1f9a5a", GOLD = "#f2c14e", GARNET = "#7a1f2b";
  /* live oak with Spanish moss */
  const oak = (x, base, s, cls) => '<g><path d="M' + (x - 6 * s) + ' ' + base + 'q' + (4 * s) + ' ' + (-30 * s) + ' ' + (-2 * s) + ' ' + (-52 * s) + 'h' + (10 * s) + 'q' + (-2 * s) + ' ' + (22 * s) + ' ' + (6 * s) + ' ' + (52 * s) + 'z" fill="#4a3b2c"/>' +
    '<path d="M' + x + ' ' + (base - 44 * s) + 'q' + (-30 * s) + ' ' + (-8 * s) + ' ' + (-50 * s) + ' ' + (4 * s) + 'M' + x + ' ' + (base - 44 * s) + 'q' + (30 * s) + ' ' + (-10 * s) + ' ' + (52 * s) + ' ' + (2 * s) + '" stroke="#4a3b2c" stroke-width="' + (5 * s) + '" fill="none"/>' +
    '<g fill="#2f5a2e"><ellipse cx="' + (x - 34 * s) + '" cy="' + (base - 56 * s) + '" rx="' + (30 * s) + '" ry="' + (16 * s) + '"/><ellipse cx="' + (x + 2 * s) + '" cy="' + (base - 70 * s) + '" rx="' + (38 * s) + '" ry="' + (20 * s) + '"/><ellipse cx="' + (x + 38 * s) + '" cy="' + (base - 54 * s) + '" rx="' + (30 * s) + '" ry="' + (15 * s) + '"/></g>' +
    '<g fill="#a7b29a" opacity=".9" class="lt-moss ' + (cls || "") + '">' + [-46, -30, -14, 6, 22, 40].map((d, i) => '<path d="M' + (x + d * s) + ' ' + (base - 52 * s) + 'l' + (3 * s) + ' ' + ((18 + (i % 3) * 6) * s) + 'l' + (3 * s) + ' ' + (-((18 + (i % 3) * 6) * s)) + 'z"/>').join("") + '</g></g>';
  /* the 22-story New Capitol tower (tan, columned top floors) */
  const tower = (x, top, w, c) => '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (210 - top) + '" fill="' + c + '"/>' +
    '<rect x="' + (x - 3) + '" y="' + (top - 4) + '" width="' + (w + 6) + '" height="6" fill="' + c + '"/>' +
    '<g fill="#000" opacity=".22">' + Array.from({ length: Math.floor(w / 6) }, (_, i) => '<rect x="' + (x + 2 + i * 6) + '" y="' + (top + 4) + '" width="2.4" height="14"/>').join("") + '</g>' +
    '<g fill="#000" opacity=".12">' + Array.from({ length: 12 }, (_, r) => '<rect x="' + (x + 3) + '" y="' + (top + 24 + r * 9) + '" width="' + (w - 6) + '" height="3"/>').join("") + '</g>';

  /* 1. StarMetro bus at C.K. Steele Plaza, W Tennessee St */
  function ltstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (50 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1e2c38"/>').join("");
    const bus = '<g class="anim-train"><rect x="32" y="116" width="322" height="78" rx="10" fill="#f6f7f5" stroke="#6d757c" stroke-width="2"/>' + win +
      '<path d="M32 166q160 -26 322 0v10q-160 -22 -322 0z" fill="#1d5fa8"/><path d="M32 178q160 -18 322 2v6q-160 -18 -322 -2z" fill="#3fae4f"/>' +
      '<rect x="318" y="124" width="32" height="42" rx="4" fill="#1e2c38"/><rect x="262" y="118" width="88" height="11" rx="2" fill="#111"/><text x="306" y="127" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">STEELE PLAZA</text>' +
      '<circle cx="88" cy="196" r="13" fill="#222"/><circle cx="88" cy="196" r="5.5" fill="#999"/><circle cx="300" cy="196" r="13" fill="#222"/><circle cx="300" cy="196" r="5.5" fill="#999"/><circle cx="350" cy="184" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lts1)"/><circle cx="68" cy="40" r="18" fill="#fff2b8" opacity=".9"/>' +
      '<g class="lt-cloud"><ellipse cx="60" cy="56" rx="30" ry="9" fill="#fff" opacity=".7"/></g>' +
      tower(262, 30, 40, "#d9c9a8") +
      oak(70, 116, 1.05, "") + oak(350, 116, .95, "lt-moss2") +
      /* plaza canopy */
      '<path d="M120 84h170l-10 14H130z" fill="#3a6b8c"/><rect x="128" y="98" width="4" height="22" fill="#5a6168"/><rect x="278" y="98" width="4" height="22" fill="#5a6168"/>' +
      /* black station sign */
      '<rect x="130" y="62" width="150" height="20" rx="2" fill="#111"/><text x="205" y="76" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">C.K. STEELE PLAZA</text>' +
      '<rect x="0" y="194" width="400" height="66" fill="#5d5f63"/><rect x="0" y="194" width="400" height="6" fill="#b9b4a8"/>' +
      '<path d="M0 226h40M70 226h40M140 226h40M210 226h40M280 226h40M350 226h40" stroke="#f2d64b" stroke-width="3"/>' +
      bus + label(70, 260, "STARMETRO · W TENNESSEE ST"),
      sky("lts1", "#7fc3ea", "#d9eef7"));
  }

  /* 2. Bragg Memorial Stadium, FAMU homecoming at sunset */
  function ltbragg() {
    const rows = Array.from({ length: 6 }, (_, r) => '<rect x="20" y="' + (76 + r * 12) + '" width="360" height="8" fill="' + (r % 2 ? ORANGE : GREEN) + '" opacity=".95"/>').join("");
    const crowd = Array.from({ length: 70 }, (_, i) => '<circle cx="' + (24 + (i * 5.1) % 352) + '" cy="' + (80 + Math.floor(i / 12) * 12) + '" r="2.2" fill="' + (i % 3 ? "#2a1e1a" : "#fff3d6") + '" opacity=".7"/>').join("");
    const player = (x, c) => '<g class="lt-step' + (x % 2 ? " lt-step2" : "") + '"><rect x="' + x + '" y="182" width="7" height="14" rx="2" fill="' + c + '"/><circle cx="' + (x + 3.5) + '" cy="178" r="3.4" fill="#f2f2f2"/><rect x="' + (x + 1) + '" y="173" width="5" height="4" fill="' + GOLD + '"/><path d="M' + (x + 1) + ' 196v6M' + (x + 6) + ' 196v6" stroke="#fff" stroke-width="2"/></g>';
    const band = '<g class="lt-march">' + Array.from({ length: 8 }, (_, i) => player(i * 14, i % 2 ? ORANGE : GREEN)).join("") + '</g>';
    const conf = Array.from({ length: 10 }, (_, i) => '<rect class="lt-conf' + (i % 3 ? " lt-conf" + (i % 3 + 1) : "") + '" x="' + (20 + i * 38) + '" y="40" width="4" height="6" fill="' + (i % 2 ? ORANGE : GREEN) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ltb1)"/><circle cx="320" cy="58" r="24" fill="#ffd27a" opacity=".95"/>' +
      /* light towers */
      '<rect x="30" y="18" width="4" height="58" fill="#444"/><rect x="18" y="12" width="28" height="10" fill="#fff4c9" class="lt-glow"/>' +
      '<rect x="366" y="18" width="4" height="58" fill="#444"/><rect x="354" y="12" width="28" height="10" fill="#fff4c9" class="lt-glow lt-glow2"/>' +
      /* stands */
      '<path d="M14 72h372v80H14z" fill="#2b2420"/>' + rows + crowd +
      '<rect x="14" y="146" width="372" height="10" fill="#e6e1d4"/>' +
      '<rect x="120" y="58" width="160" height="16" rx="2" fill="#111"/><text x="200" y="70" text-anchor="middle" ' + font + ' font-size="10" fill="' + ORANGE + '">HOMECOMING</text>' +
      /* field */
      '<rect x="0" y="156" width="400" height="104" fill="#2f8a3a"/>' +
      '<g stroke="#fff" stroke-width="2" opacity=".8">' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (20 + i * 52) + ' 158l' + (-10 + i * 3) + ' 72"/>').join("") + '</g>' +
      band + conf + label(40, 320, "BRAGG MEMORIAL STADIUM · FAMU HOMECOMING"),
      sky("ltb1", "#f2784b", "#ffcf7a"));
  }

  /* 3. Doak Campbell Stadium, FSU, Saturday night */
  function ltdoak() {
    const arch = (x, y, w, h) => '<path d="M' + x + ' ' + (y + h) + 'v-' + (h - w / 2) + 'q' + (w / 2) + ' -' + (w * .9) + ' ' + w + ' 0v' + (h - w / 2) + 'z" fill="#1b1010"/>';
    const bricks = '<g stroke="#5e2a20" stroke-width=".8" opacity=".5">' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (92 + i * 10) + 'h400"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ltd1)"/>' +
      '<g fill="' + GOLD + '" opacity=".35"><path class="lt-beam" d="M70 90l-30 -90h20z"/><path class="lt-beam lt-beam2" d="M330 90l30 -90h-20z"/><path class="lt-beam lt-beam2" d="M200 80l-8 -80h16z"/></g>' +
      /* brick facade with towers */
      '<rect x="0" y="86" width="400" height="124" fill="#9a4a36"/>' + bricks +
      '<rect x="40" y="60" width="50" height="150" fill="#8a3f2e"/><rect x="310" y="60" width="50" height="150" fill="#8a3f2e"/><rect x="175" y="50" width="50" height="160" fill="#8a3f2e"/>' +
      '<path d="M40 60l25 -16l25 16zM310 60l25 -16l25 16zM175 50l25 -16l25 16z" fill="#6a2c20"/>' +
      [52, 322, 187].map(x => arch(x, 74, 26, 46)).join("") +
      [100, 132, 236, 268].map(x => arch(x, 110, 26, 60)).join("") +
      /* garnet + gold banners */
      [104, 136, 240, 272].map((x, i) => '<rect x="' + (x + 6) + '" y="96" width="14" height="22" fill="' + (i % 2 ? GOLD : GARNET) + '"/>').join("") +
      '<g class="lt-glow">' + [65, 335, 200].map(x => '<circle cx="' + x + '" cy="140" r="5" fill="#fff0b0"/>').join("") + '</g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#3c3a3a"/>' +
      '<g class="lt-car"><rect x="0" y="222" width="54" height="16" rx="5" fill="' + GARNET + '"/><circle cx="12" cy="240" r="5" fill="#111"/><circle cx="42" cy="240" r="5" fill="#111"/><rect x="52" y="226" width="4" height="4" fill="#fff6c2"/></g>' +
      label(70, 260, "DOAK CAMPBELL STADIUM · FSU · GAME NIGHT"),
      sky("ltd1", "#0e0f22", "#3a1e2e"));
  }

  /* 4. The Old Capitol: striped awnings, glass dome, the New Capitol tower behind */
  function ltcapitol() {
    const awning = (x, y, w) => '<g>' + Array.from({ length: Math.floor(w / 6) }, (_, i) => '<rect x="' + (x + i * 6) + '" y="' + y + '" width="6" height="12" fill="' + (i % 2 ? "#fff" : "#c8202f") + '"/>').join("") + '<path d="M' + x + ' ' + (y + 12) + 'h' + (Math.floor(w / 6) * 6) + '" stroke="#7a1018" stroke-width="2"/></g>';
    const col = x => '<rect x="' + x + '" y="128" width="9" height="56" fill="#f4f1ea"/><rect x="' + (x - 2) + '" y="124" width="13" height="5" fill="#e4ded2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ltc1)"/>' +
      '<g class="lt-cloud"><ellipse cx="80" cy="40" rx="34" ry="10" fill="#fff" opacity=".8"/></g><g class="lt-cloud lt-cloud2"><ellipse cx="60" cy="70" rx="26" ry="8" fill="#fff" opacity=".7"/></g>' +
      tower(170, 14, 60, "#d8c8a4") +
      /* old capitol body */
      '<rect x="70" y="112" width="260" height="76" fill="#f7f4ee"/><rect x="62" y="106" width="276" height="8" fill="#e8e2d6"/>' +
      '<path d="M150 106l50 -22l50 22z" fill="#efe9de" stroke="#d6cfc0"/>' +
      /* dome */
      '<rect x="182" y="66" width="36" height="20" fill="#f3efe6"/><path d="M178 68q22 -36 44 0z" fill="#d9e6ee" stroke="#9fb3c2"/><path d="M190 52h20" stroke="#9fb3c2"/><rect x="198" y="28" width="4" height="12" fill="#c9b27a"/>' +
      [140, 160, 180, 211, 231, 251].map(col).join("") +
      awning(76, 118, 60) + awning(268, 118, 60) + awning(76, 150, 60) + awning(268, 150, 60) +
      [82, 100, 118, 274, 292, 310].map(x => '<rect x="' + x + '" y="132" width="10" height="14" fill="#2d3e4c"/><rect x="' + x + '" y="164" width="10" height="16" fill="#2d3e4c"/>').join("") +
      /* steps + lawn */
      '<rect x="130" y="188" width="140" height="8" fill="#e4ded2"/><rect x="120" y="196" width="160" height="8" fill="#d8d1c3"/>' +
      '<rect x="0" y="204" width="400" height="56" fill="#4f8a3c"/>' +
      /* flagpole: white field with a red saltire */
      '<rect x="40" y="66" width="3" height="140" fill="#9aa0a6"/><g class="lt-flag"><rect x="43" y="68" width="40" height="26" fill="#fff"/><path d="M43 68l40 26M83 68l-40 26" stroke="#c8202f" stroke-width="5"/></g>' +
      label(60, 280, "THE OLD CAPITOL · DOWNTOWN TALLAHASSEE"),
      sky("ltc1", "#6fb6e6", "#cfe9f6"));
  }

  /* 5. W Tennessee St and N Macomb St */
  function ltcorner() {
    const sign = (x, y, w, inner) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + inner;
    return svg(
      '<rect width="400" height="260" fill="url(#ltk1)"/>' +
      tower(240, 34, 44, "#c9b38a") +
      oak(60, 150, 1.1, "") + oak(170, 150, .8, "lt-moss2") +
      /* stucco wall */
      '<rect x="0" y="150" width="400" height="82" fill="#d8cdb8"/><rect x="0" y="150" width="400" height="6" fill="#b8ab92"/>' +
      tag("LUH TYLER", 30, 206, 44, ORANGE, -5) + tag("850", 270, 222, 24, GREEN, -8) + tag("SKEE", 300, 186, 18, GOLD, 6) +
      '<g fill="' + ORANGE + '" opacity=".75"><circle class="lt-sp" cx="252" cy="190" r="3"/><circle class="lt-sp lt-sp2" cx="260" cy="184" r="2.5"/><circle class="lt-sp" cx="256" cy="196" r="2"/></g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#606266"/>' +
      '<rect x="356" y="92" width="5" height="140" fill="#7a7f86"/>' +
      sign(270, 82, 128, '<text x="334" y="98" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">W TENNESSEE ST</text>') +
      sign(286, 108, 110, '<text x="341" y="124" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">N MACOMB ST</text>') +
      label(12, 250, "W TENNESSEE ST &amp; N MACOMB ST"),
      sky("ltk1", "#f39a5b", "#ffd99a"));
  }

  window.SCENES = { ltstop, ltbragg, ltdoak, ltcapitol, ltcorner };
})();
