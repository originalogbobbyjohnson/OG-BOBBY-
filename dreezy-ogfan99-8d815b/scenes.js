/* dreezy scenes (Regions tab: Chicago; Marquette Park / Chicago Lawn, South Side). CSS classes prefixed dz- (the page's own anim-train is kept).
   1 Wrightwood on Metra's SouthWest Service (79th St & Columbus Ave): ground-level side platform, small shelter, a diesel push-pull of silver bilevels sliding in, freight yard behind.
   2 Darius & Girenas Monument, Marquette Park (67th & California): pale limestone pylon with the wing relief, an orange monoplane circling (the Lituanica was orange).
   3 Martin Luther King Jr. Living Memorial, Marquette Park (2016): three brick-and-limestone steles, the HOME tile bench, leaves drifting.
   4 Marquette Park lagoon: willows, the golf flag across the water, ducks gliding, the downtown skyline far off.
   5 W 71st St and S Kedzie Ave, the park's south-east corner: green Chicago signs, DREEZY tagged, the park trees and the skyline behind.
   No digit 9 is drawn anywhere. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dzcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.dz-car{animation:dzcar 7s linear infinite}.dz-car2{animation-delay:-3.5s}' +
    '@keyframes dzcarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.dz-carL{animation:dzcarL 9s linear infinite}' +
    '@keyframes dzplane{0%{transform:translate(-80px,30px)}100%{transform:translate(480px,-20px)}}.dz-plane{animation:dzplane 9s linear infinite}' +
    '@keyframes dzleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-60px,120px) rotate(220deg);opacity:0}}.dz-leaf{animation:dzleaf 5s linear infinite}.dz-leaf2{animation-delay:-1.7s}.dz-leaf3{animation-delay:-3.4s}' +
    '@keyframes dzduck{0%,100%{transform:translateX(0)}50%{transform:translateX(60px)}}.dz-duck{animation:dzduck 8s ease-in-out infinite}.dz-duck2{animation-delay:-4s}' +
    '@keyframes dzrip{0%{transform:scaleX(.6);opacity:.8}100%{transform:scaleX(1.4);opacity:0}}.dz-rip{animation:dzrip 2.4s ease-out infinite;transform-box:fill-box;transform-origin:center}.dz-rip2{animation-delay:-1.2s}' +
    '@keyframes dzspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dz-sp{animation:dzspray 1.4s ease-out infinite}.dz-sp2{animation-delay:.45s}' +
    '@keyframes dzblink{0%,100%{opacity:.25}50%{opacity:1}}.dz-bl{animation:dzblink 1.6s ease-in-out infinite}.dz-bl2{animation-delay:-.8s}' +
    '@keyframes dzflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.dz-flag{animation:dzflag 1.2s ease-in-out infinite;transform-box:fill-box;transform-origin:left center}' +
    '@keyframes dzsmoke{0%{transform:translate(0,0);opacity:.7}100%{transform:translate(-30px,-40px);opacity:0}}.dz-smk{animation:dzsmoke 2.2s ease-out infinite}.dz-smk2{animation-delay:-1.1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const SWS = "#005eb8", PINK = "#ff6fb5", GOLD = "#f5c84c", ICE = "#7fd3ff";
  const tree = (x, y, r, c) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (r * 1.4) + '" fill="#4a3324"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * 0.6) + '" cy="' + (y + r * 0.3) + '" r="' + (r * 0.7) + '" fill="' + c + '"/><circle cx="' + (x + r * 0.6) + '" cy="' + (y + r * 0.3) + '" r="' + (r * 0.7) + '" fill="' + c + '"/>';
  /* far downtown skyline (Willis-style stepped tower + neighbors), drawn small */
  const skyline = (x0, base, s, c) => '<g fill="' + c + '">' +
    [[0, 22, 14], [16, 30, 10], [28, 48, 8], [38, 70, 14], [54, 40, 10], [66, 56, 9], [77, 26, 12], [91, 36, 8]].map(b => '<rect x="' + (x0 + b[0] * s) + '" y="' + (base - b[1] * s) + '" width="' + (b[2] * s) + '" height="' + (b[1] * s) + '"/>').join("") +
    '<rect x="' + (x0 + 41 * s) + '" y="' + (base - 80 * s) + '" width="' + (1.2 * s) + '" height="' + (10 * s) + '"/><rect x="' + (x0 + 49 * s) + '" y="' + (base - 80 * s) + '" width="' + (1.2 * s) + '" height="' + (10 * s) + '"/></g>';

  /* 1. Wrightwood, Metra SouthWest Service: ground-level side platform, shelter, diesel push-pull of bilevels */
  function dzstation() {
    const upper = Array.from({ length: 6 }, (_, i) => '<rect x="' + (112 + i * 40) + '" y="90" width="28" height="13" rx="2" fill="#1f2a33"/>').join("");
    const lower = Array.from({ length: 6 }, (_, i) => '<rect x="' + (112 + i * 40) + '" y="118" width="28" height="13" rx="2" fill="#1f2a33"/>').join("");
    const train = '<g class="anim-train">' +
      /* locomotive */
      '<path d="M20 150V88q0 -8 8 -8h70v70z" fill="#5e6a74" stroke="#38424a" stroke-width="2"/><rect x="26" y="88" width="22" height="16" rx="2" fill="#1f2a33"/>' +
      '<rect x="20" y="118" width="78" height="6" fill="' + SWS + '"/><rect x="58" y="76" width="10" height="6" fill="#38424a"/>' +
      '<circle cx="28" cy="140" r="3.5" fill="#fff6c2"/><circle cx="40" cy="140" r="3.5" fill="#fff6c2"/>' +
      '<g class="dz-smk"><circle cx="62" cy="70" r="5" fill="#9aa3ab"/></g><g class="dz-smk dz-smk2"><circle cx="64" cy="66" r="4" fill="#9aa3ab"/></g>' +
      /* bilevel car */
      '<rect x="102" y="74" width="270" height="78" rx="7" fill="#d7dbdf" stroke="#7a828a" stroke-width="2"/>' + upper + lower +
      Array.from({ length: 18 }, (_, i) => '<path d="M' + (108 + i * 15) + ' 134v16" stroke="#bcc2c8" stroke-width="1.5"/>').join("") +
      '<rect x="102" y="108" width="270" height="4" fill="' + SWS + '"/>' +
      '<rect x="310" y="78" width="56" height="9" rx="2" fill="#111"/><text x="338" y="85" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb347">MANHATTAN</text>' +
      '<g fill="#222"><circle cx="40" cy="154" r="6"/><circle cx="80" cy="154" r="6"/><circle cx="130" cy="154" r="6"/><circle cx="160" cy="154" r="6"/><circle cx="320" cy="154" r="6"/><circle cx="350" cy="154" r="6"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dzs1)"/>' +
      /* freight yard behind */
      '<g fill="#3b3346"><rect x="0" y="54" width="70" height="20"/><rect x="80" y="58" width="60" height="16"/><rect x="230" y="56" width="70" height="18"/><rect x="310" y="52" width="90" height="22"/></g>' +
      '<g fill="#5a4636"><rect x="0" y="64" width="64" height="10" rx="1"/><rect x="250" y="64" width="64" height="10" rx="1"/></g>' +
      '<rect x="0" y="74" width="400" height="4" fill="#2c2a2a"/>' +
      '<path d="M0 156h400M0 162h400" stroke="#5a5048" stroke-width="2"/>' + Array.from({ length: 27 }, (_, i) => '<rect x="' + (i * 15) + '" y="154" width="8" height="10" fill="#4a3e33"/>').join("") +
      train +
      /* platform */
      '<rect x="0" y="164" width="400" height="5" fill="#f2c200"/><rect x="0" y="169" width="400" height="30" fill="#a8a299"/>' +
      /* shelter */
      '<rect x="300" y="132" width="4" height="40" fill="#3a3e46" opacity="0"/>' +
      '<rect x="318" y="174" width="70" height="4" fill="#3a3e46"/><rect x="320" y="178" width="3" height="22" fill="#3a3e46"/><rect x="383" y="178" width="3" height="22" fill="#3a3e46"/><rect x="323" y="180" width="60" height="18" fill="#bfe3ff" opacity=".35"/>' +
      '<rect x="0" y="199" width="400" height="61" fill="#5c6b3a"/><path d="M0 199h400l-30 61H30z" fill="#6e7d45"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#3a3a3f"/><path d="M0 248h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="16 12"/>' +
      car("dz-car", 0, 240, PINK) +
      /* station sign */
      '<rect x="74" y="203" width="10" height="30" fill="#2f2f2f"/><rect x="236" y="203" width="10" height="30" fill="#2f2f2f"/>' +
      '<rect x="60" y="182" width="200" height="30" rx="3" fill="#111"/><text x="74" y="203" ' + font + ' font-size="17" fill="#fff">Wrightwood</text>' + badge(186, 197, "SWS", SWS) +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">METRA SOUTHWEST SERVICE · WRIGHTWOOD · 79TH &amp; COLUMBUS</text>',
      sky("dzs1", "#24183e", "#e88a7a"));
  }

  /* 2. Darius & Girenas Monument: pale limestone pylon with a wing relief, orange monoplane overhead */
  function dzdarius() {
    const plane = '<g class="dz-plane"><path d="M40 60l40 -2l6 4l-6 4l-40 -2z" fill="#f08a24" stroke="#7a3a10" stroke-width="1"/><path d="M58 52l8 0l4 18l-8 0z" fill="#f2a24a" stroke="#7a3a10" stroke-width="1"/><path d="M40 56l-6 -6h6l4 6z" fill="#f08a24"/><circle cx="87" cy="62" r="1.5" fill="#333"/><path d="M88 56v12" stroke="#555" stroke-width="1.2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dzs2)"/>' + plane +
      skyline(300, 176, 0.7, "#6d6a8a") +
      '<rect x="0" y="176" width="400" height="84" fill="#5f8a3e"/><path d="M0 176q200 -10 400 0v12H0z" fill="#6f9a48"/>' +
      tree(40, 150, 26, "#3f6b2e") + tree(84, 160, 18, "#4a7a34") + tree(352, 152, 24, "#3f6b2e") +
      /* plaza steps */
      '<rect x="120" y="206" width="160" height="10" fill="#cfc6b2"/><rect x="132" y="196" width="136" height="10" fill="#ddd5c2"/><rect x="144" y="188" width="112" height="8" fill="#e6dfcd"/>' +
      /* pylon */
      '<path d="M176 188L182 52h36l6 136z" fill="#e3dac4" stroke="#a89c80" stroke-width="2"/>' +
      '<path d="M182 52l18 -14l18 14z" fill="#d6ccb4" stroke="#a89c80" stroke-width="2"/>' +
      /* wing relief: a stylized wing swept up the face */
      '<path d="M190 150q10 -60 10 -86q0 26 10 86z" fill="#d2c7ac" stroke="#a89c80" stroke-width="1.5"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (193 + i * 0.4) + ' ' + (140 - i * 13) + 'h' + (14 - i * 1.2) + '" stroke="#b3a68a" stroke-width="1.2"/>').join("") +
      '<rect x="186" y="160" width="28" height="18" fill="#d8ceb6" stroke="#a89c80" stroke-width="1"/>' +
      '<path d="M190 166h20M190 171h20" stroke="#a89c80" stroke-width="1"/>' +
      '<g class="dz-leaf"><path d="M330 120q5 -4 9 0q-5 4 -9 0z" fill="#e0a84a"/></g><g class="dz-leaf dz-leaf2"><path d="M70 110q5 -4 9 0q-5 4 -9 0z" fill="#d9822b"/></g>' +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="11" fill="#fff8e6">DARIUS &amp; GIRENAS</text>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2440" opacity=".85">MARQUETTE PARK · 67TH &amp; CALIFORNIA · CHICAGO LAWN</text>',
      sky("dzs2", "#8fc4ec", "#f6e2c4"));
  }

  /* 3. MLK Living Memorial: three brick + limestone steles, HOME tile bench */
  function dzmlk() {
    const stele = (x, h) => {
      const rows = Math.floor(h / 8);
      return '<rect x="' + x + '" y="' + (200 - h) + '" width="46" height="' + h + '" fill="#a4553a" stroke="#6e3220" stroke-width="2"/>' +
        Array.from({ length: rows }, (_, i) => '<path d="M' + x + ' ' + (200 - h + i * 8) + 'h46" stroke="#7e3a26" stroke-width="1"/>').join("") +
        Array.from({ length: rows }, (_, i) => '<path d="M' + (x + (i % 2 ? 11 : 23)) + ' ' + (200 - h + i * 8) + 'v8M' + (x + (i % 2 ? 34 : 0)) + ' ' + (200 - h + i * 8) + 'v8" stroke="#7e3a26" stroke-width="1"/>').join("") +
        '<rect x="' + (x - 3) + '" y="' + (200 - h - 8) + '" width="52" height="8" fill="#e6dfcd" stroke="#a89c80" stroke-width="1"/>' +
        '<rect x="' + (x - 3) + '" y="' + (200 - h * 0.5) + '" width="52" height="5" fill="#e6dfcd"/>' +
        /* marchers as simple carved forms, no faces */
        Array.from({ length: 4 }, (_, i) => '<path d="M' + (x + 8 + i * 9) + ' ' + (200 - h * 0.5 - 4) + 'v-12" stroke="#5e2a1a" stroke-width="3" stroke-linecap="round"/><circle cx="' + (x + 8 + i * 9) + '" cy="' + (200 - h * 0.5 - 20) + '" r="3" fill="#5e2a1a"/>').join("");
    };
    const tiles = ["HOME", "CASA", "NAMAI", "DOM"].map((w, i) => '<rect x="' + (88 + i * 58) + '" y="212" width="52" height="16" rx="2" fill="' + ["#3e7cc0", "#e0a84a", "#4f9a5a", "#c45a7a"][i] + '"/><text x="' + (114 + i * 58) + '" y="224" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + w + '</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dzs3)"/>' +
      tree(30, 120, 30, "#3f6b2e") + tree(370, 116, 32, "#3f6b2e") + tree(80, 136, 20, "#4a7a34") + tree(326, 134, 20, "#4a7a34") +
      '<rect x="0" y="200" width="400" height="60" fill="#c9c1ae"/><path d="M0 200h400" stroke="#a89c80" stroke-width="2"/>' +
      stele(104, 110) + stele(177, 140) + stele(250, 110) +
      '<rect x="80" y="208" width="240" height="24" rx="3" fill="#8a7a66"/>' + tiles +
      '<rect x="0" y="236" width="400" height="24" fill="#6a8a44"/>' +
      '<g class="dz-leaf"><path d="M300 60q5 -4 9 0q-5 4 -9 0z" fill="#e0a84a"/></g><g class="dz-leaf dz-leaf2"><path d="M150 50q5 -4 9 0q-5 4 -9 0z" fill="#d9822b"/></g><g class="dz-leaf dz-leaf3"><path d="M230 40q5 -4 9 0q-5 4 -9 0z" fill="#c9502b"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2440" opacity=".85">MLK LIVING MEMORIAL · MARQUETTE PARK · 2016</text>',
      sky("dzs3", "#a9d4f2", "#fbe9cf"));
  }

  /* 4. Marquette Park lagoon: willows, golf flag across the water, ducks, skyline far off */
  function dzlagoon() {
    const willow = (x, y) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="44" fill="#4a3324"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + x + ' ' + (y + 2) + 'q' + ((i - 4) * 7) + ' -18 ' + ((i - 4) * 9) + ' 40" stroke="#6f9a3a" stroke-width="4" fill="none" stroke-linecap="round"/>').join("");
    const duck = (cls, x, y) => '<g class="' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="9" ry="4.5" fill="#6b5a3a"/><circle cx="' + (x + 7) + '" cy="' + (y - 5) + '" r="3.5" fill="#2f6b3a"/><path d="M' + (x + 10) + ' ' + (y - 5) + 'l4 1l-4 1z" fill="#e0a84a"/>' +
      '<ellipse class="dz-rip" cx="' + x + '" cy="' + (y + 5) + '" rx="12" ry="2" fill="none" stroke="#cfe8f6" stroke-width="1"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dzs4)"/>' +
      skyline(160, 128, 0.75, "#8d88ad") +
      '<rect x="0" y="128" width="400" height="22" fill="#5f8a3e"/>' +
      tree(20, 116, 20, "#3f6b2e") + tree(380, 112, 22, "#3f6b2e") +
      /* golf green + flag across the water */
      '<ellipse cx="300" cy="146" rx="40" ry="6" fill="#7fb24e"/><rect x="306" y="118" width="2" height="28" fill="#eee"/><path class="dz-flag" d="M308 118h16l-4 5l4 5h-16z" fill="#e23b3b"/>' +
      /* water */
      '<rect x="0" y="150" width="400" height="80" fill="#3f7fa8"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (20 + i * 48) + ' ' + (164 + (i % 3) * 18) + 'h24" stroke="#8cc4e6" stroke-width="1.5" opacity=".7"/>').join("") +
      '<g opacity=".25" fill="#8d88ad"><rect x="188" y="152" width="10" height="26"/></g>' +
      duck("dz-duck", 90, 196) + duck("dz-duck dz-duck2", 200, 214) +
      '<path d="M0 230q200 -14 400 0v30H0z" fill="#5f8a3e"/>' +
      willow(56, 196) + willow(340, 200) +
      '<rect x="160" y="236" width="80" height="6" fill="#7a5a3a"/><rect x="166" y="242" width="4" height="10" fill="#5a3a22"/><rect x="230" y="242" width="4" height="10" fill="#5a3a22"/>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2440" opacity=".85">MARQUETTE PARK LAGOON · CHICAGO LAWN</text>',
      sky("dzs4", "#f2a2b8", "#fde3c0"));
  }

  /* 5. W 71st St & S Kedzie Ave: green Chicago signs, DREEZY tagged, park trees + skyline behind */
  function dzcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dzs5)"/>' +
      skyline(40, 130, 1.1, "#3c3560") +
      tree(250, 110, 22, "#2f5428") + tree(300, 104, 26, "#2f5428") + tree(356, 112, 22, "#2f5428") +
      /* wall */
      '<rect x="0" y="130" width="400" height="94" fill="#6e3b2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#56301f" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#56301f" stroke-width="1"/>').join("")).join("") +
      tag("DREEZY", 26, 196, 58, PINK, -6) + tag("HITGIRL", 40, 216, 16, GOLD, -3) + tag("BIG DREEZ", 34, 152, 14, ICE, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(254, 98, 136, "W 71st St") + sign(250, 124, 144, "S Kedzie Ave") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="dz-bl" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("dz-car", 0, 240, ICE) + car("dz-car dz-car2", 0, 240, GOLD) +
      '<g class="dz-sp"><circle cx="190" cy="166" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="dz-sp dz-sp2"><circle cx="196" cy="160" r="2" fill="' + PINK + '" opacity=".6"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">71ST &amp; KEDZIE · MARQUETTE PARK · SOUTH SIDE</text>',
      sky("dzs5", "#2a1f4a", "#e97a8a"));
  }

  window.SCENES = { dzstation: dzstation, dzdarius: dzdarius, dzmlk: dzmlk, dzlagoon: dzlagoon, dzcorner: dzcorner };
})();
