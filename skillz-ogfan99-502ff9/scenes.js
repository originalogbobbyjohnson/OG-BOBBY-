/* skillz scenes (Regions tab: Virginia; Richmond's East End, by Whitcomb Court). 400 x 260 SVGs. CSS classes prefixed sk- (the page's own anim-train is kept).
   0 the GRTC Pulse at Arts District station on Broad St, 1 Shockoe Slip at night: cobblestones, the old granite fountain, the club glowing,
   2 the VCU dorm battle at Rhoads Hall, 3 the University of Richmond's Boatwright Library tower over Westhampton Lake, 4 Whitcomb St & Sussex St with SKILLZ tagged and downtown behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes skglow{0%,100%{opacity:.5}50%{opacity:1}}.sk-glow{animation:skglow 2.4s ease-in-out infinite}.sk-g2{animation-delay:-1.2s}' +
    '@keyframes skbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.sk-bob{animation:skbob .7s ease-in-out infinite}.sk-bob2{animation-delay:-.35s}' +
    '@keyframes skdrip{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(16px);opacity:0}}.sk-dr{animation:skdrip 1.2s ease-in infinite}.sk-dr2{animation-delay:.4s}.sk-dr3{animation-delay:.8s}' +
    '@keyframes skswim{0%,100%{transform:translateX(0)}50%{transform:translateX(-70px)}}.sk-swim{animation:skswim 12s ease-in-out infinite}' +
    '@keyframes skrip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.sk-rp{animation:skrip 3s ease-in-out infinite}.sk-rp2{animation-delay:-1.5s}' +
    '@keyframes skcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.sk-car{animation:skcar 9s linear infinite}' +
    '@keyframes sknote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.sk-nt{animation:sknote 2.4s ease-out infinite}.sk-nt2{animation-delay:-1.2s}' +
    '@keyframes skspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sk-sp{animation:skspray 1.4s ease-out infinite}.sk-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="' + (txt.length * 9 + 16) + '" height="20" rx="10" fill="' + color + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + (txt.length * 9 + 16) / 2) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GRTC = "#1f4e79", GOLD = "#ffd23f", ORNG = "#e4572e", GRN = "#3bb273", STARS = n => Array.from({ length: n }, (_, i) => '<circle class="sk-glow' + (i % 2 ? " sk-g2" : "") + '" cx="' + ((i * 83) % 400) + '" cy="' + (8 + (i * 29) % 60) + '" r="1.3" fill="#fff"/>').join("");

  /* 0. Arts District station on Broad St: the glass canopy on the median, the tall station pylon with the PULSE badge, the long Pulse bus pulling into its own lane */
  function skstation() {
    const wins = Array.from({ length: 8 }, (_, i) => '<rect x="' + (28 + i * 36) + '" y="128" width="26" height="22" rx="2" fill="#bfe0f5" opacity=".9"/>').join("");
    const bus = '<g class="anim-train"><rect x="14" y="118" width="330" height="62" rx="9" fill="#f4f6f8" stroke="#5b6270" stroke-width="2"/>' + wins +
      '<rect x="14" y="156" width="330" height="8" fill="' + GRTC + '"/><rect x="14" y="164" width="330" height="3" fill="#7fc241"/>' +
      '<rect x="176" y="120" width="6" height="58" fill="#5b6270"/><rect x="322" y="124" width="20" height="30" rx="3" fill="#2b3340"/>' +
      '<circle cx="70" cy="182" r="11" fill="#22252b"/><circle cx="140" cy="182" r="11" fill="#22252b"/><circle cx="300" cy="182" r="11" fill="#22252b"/><circle cx="336" cy="170" r="4" fill="#fff6c2"/></g>';
    const shops = [[0, 40, "#a35a44"], [44, 60, "#c9a06a"], [108, 46, "#7d5a8a"], [300, 52, "#b8743c"], [356, 44, "#8a6a52"]].map(([x, w, c]) => '<rect x="' + x + '" y="44" width="' + w + '" height="68" fill="' + c + '"/>' +
      Array.from({ length: 3 }, (_, r) => '<rect x="' + (x + 6) + '" y="' + (52 + r * 18) + '" width="' + (w - 12) + '" height="10" fill="#2e3440" opacity=".55"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sk0)"/>' + shops +
      '<rect x="0" y="112" width="400" height="80" fill="#55585e"/><rect x="0" y="190" width="400" height="70" fill="#c9c4b8"/><rect x="0" y="186" width="400" height="6" fill="#e9e3d4"/>' +
      '<text x="20" y="252" ' + font + ' font-size="9" fill="#55585e" letter-spacing="3">BUS ONLY  ·  BROAD ST</text>' + bus +
      '<path d="M140 72h200l-10 16h-180z" fill="#bfe3f2" opacity=".75" stroke="#7a8794" stroke-width="2"/><rect x="166" y="88" width="4" height="98" fill="#7a8794"/><rect x="310" y="88" width="4" height="98" fill="#7a8794"/>' +
      '<rect x="328" y="56" width="64" height="132" rx="3" fill="#1d2b3a"/><rect x="328" y="56" width="64" height="5" fill="#7fc241"/>' + badge(330, 80, "PULSE", GRTC) +
      '<text x="360" y="112" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">ARTS</text><text x="360" y="124" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">DISTRICT</text>' +
      '<rect x="24" y="16" width="200" height="22" rx="3" fill="#111"/><text x="36" y="32" ' + font + ' font-size="13" fill="#fff">Arts District</text>' + badge(144, 27, "PULSE", GRTC),
      sky("sk0", "#7fb6e6", "#dcecf6"));
  }

  /* 1. Shockoe Slip at night: cobblestone Cary St, the tall brick warehouses, the old granite horse-trough fountain with its lamp, the club windows glowing and the music coming out */
  function skslip() {
    const stones = Array.from({ length: 70 }, (_, i) => { const r = Math.floor(i / 14), c = i % 14; return '<rect x="' + (c * 30 + (r % 2) * 15 - 8) + '" y="' + (196 + r * 13) + '" width="26" height="10" rx="4" fill="' + (i % 3 ? "#5d5650" : "#6a625a") + '"/>'; }).join("");
    const bldg = (x, w, h, c) => '<rect x="' + x + '" y="' + (190 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
      Array.from({ length: Math.floor(h / 30) * Math.floor(w / 26) }, (_, i) => { const cols = Math.floor(w / 26), r = Math.floor(i / cols), k = i % cols; return '<rect class="sk-glow' + (i % 3 ? "" : " sk-g2") + '" x="' + (x + 8 + k * 26) + '" y="' + (190 - h + 10 + r * 30) + '" width="12" height="18" fill="' + (i % 4 ? "#f7d48a" : "#3a3030") + '"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sk1)"/>' + STARS(16) +
      bldg(0, 110, 150, "#7a3a2a") + bldg(110, 90, 120, "#8c4a30") + bldg(290, 110, 160, "#6e3628") +
      '<rect x="200" y="70" width="90" height="120" fill="#5a2c22"/><rect x="214" y="120" width="62" height="70" fill="#1a1220"/><rect class="sk-glow" x="214" y="120" width="62" height="70" fill="' + ORNG + '" opacity=".35"/>' +
      '<rect x="206" y="92" width="78" height="20" rx="3" fill="#120c18" stroke="' + GOLD + '" stroke-width="2"/><text class="sk-glow" x="245" y="106" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '" letter-spacing="1">LIVE TONIGHT</text>' +
      '<text class="sk-nt" x="230" y="114" font-size="16" fill="' + GOLD + '">&#9834;</text><text class="sk-nt sk-nt2" x="258" y="112" font-size="14" fill="#fff">&#9835;</text>' +
      '<rect x="0" y="190" width="400" height="70" fill="#4a4440"/>' + stones +
      '<rect x="120" y="170" width="70" height="26" rx="4" fill="#9a958c" stroke="#6f6a62" stroke-width="2"/><rect x="126" y="174" width="58" height="8" fill="#4a7c9a"/><rect x="150" y="128" width="10" height="44" fill="#8a857c"/>' +
      '<rect x="146" y="112" width="18" height="18" rx="3" fill="#2a2a2a"/><circle class="sk-glow" cx="155" cy="121" r="6" fill="#ffe7a8"/>' +
      [0, 1, 2].map(k => '<circle class="sk-dr sk-dr' + (k + 1) + '" cx="' + (140 + k * 14) + '" cy="168" r="1.8" fill="#bfe3f2"/>').join("") +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="3">SHOCKOE SLIP  ·  E CARY ST</text>',
      sky("sk1", "#0e1030", "#3a2848"));
  }

  /* 2. The battle at VCU's Rhoads Hall: the tall dorm on Franklin St at night, the crowd circled up on the plaza, the mic in the middle */
  function skrhoads() {
    const wins = Array.from({ length: 13 * 6 }, (_, i) => { const r = Math.floor(i / 6), c = i % 6; return '<rect class="' + (i % 5 ? "" : "sk-glow") + '" x="' + (150 + c * 17) + '" y="' + (28 + r * 11) + '" width="10" height="6" fill="' + ((i * 7) % 4 ? "#f6dc8c" : "#2c2f3a") + '"/>'; }).join("");
    const crowd = Array.from({ length: 14 }, (_, i) => { const a = Math.PI * (0.05 + i / 13 * 0.9), x = 200 + Math.cos(a) * 140, y = 222 - Math.sin(a) * 34; return '<g class="sk-bob' + (i % 2 ? " sk-bob2" : "") + '"><rect x="' + (x - 7) + '" y="' + (y - 6) + '" width="14" height="26" rx="6" fill="' + ["#333a55", "#7a2a2a", "#2f5a3a", "#5a3a6a"][i % 4] + '"/><circle cx="' + x + '" cy="' + (y - 12) + '" r="7" fill="' + ["#4a3426", "#6b4a36", "#2e2018"][i % 3] + '"/></g>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sk2)"/>' + STARS(14) +
      '<rect x="140" y="18" width="120" height="160" fill="#8a4a36"/><rect x="140" y="18" width="120" height="6" fill="#6a3426"/>' + wins +
      '<rect x="30" y="110" width="90" height="70" fill="#6a3a2c"/><rect x="290" y="96" width="90" height="84" fill="#5c3226"/>' +
      '<rect x="0" y="178" width="400" height="82" fill="#7d7a74"/><ellipse cx="200" cy="214" rx="120" ry="26" fill="#6b6862"/>' +
      '<rect x="196" y="176" width="4" height="40" fill="#222"/><ellipse cx="198" cy="172" rx="7" ry="9" fill="#3a3e46" stroke="#cfd5dc" stroke-width="2"/>' +
      crowd +
      '<rect x="120" y="234" width="160" height="20" rx="4" fill="#111"/><text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" letter-spacing="2">RHOADS HALL  ·  VCU</text>',
      sky("sk2", "#141a3a", "#3c3a5e"));
  }

  /* 3. The University of Richmond: Boatwright Library's red brick gothic tower with limestone trim over Westhampton Lake, ripples and a duck gliding */
  function skur() {
    const trees = [[24, 150, 28], [70, 156, 22], [330, 152, 26], [378, 150, 30]].map(([x, y, r]) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="26" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 6) + '" r="' + r + '" fill="#3f7a3a"/><circle cx="' + (x + 9) + '" cy="' + (y - 14) + '" r="' + (r * 0.6) + '" fill="#4f8f45"/>').join("");
    const lancets = (x0, n, y) => Array.from({ length: n }, (_, i) => '<path d="M' + (x0 + i * 18) + ' ' + (y + 26) + 'v-18l5 -8l5 8v18z" fill="#3a4a5a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sk3)"/>' +
      '<rect x="100" y="96" width="200" height="66" fill="#9c4a36"/><rect x="100" y="92" width="200" height="6" fill="#d8d0bc"/>' + lancets(112, 4, 116) + lancets(228, 4, 116) +
      '<rect x="176" y="30" width="48" height="132" fill="#a4503a"/><rect x="172" y="26" width="56" height="8" fill="#d8d0bc"/>' +
      [176, 190, 204, 218].map(x => '<rect x="' + x + '" y="16" width="6" height="12" fill="#d8d0bc"/>').join("") +
      '<rect x="172" y="12" width="6" height="18" fill="#d8d0bc"/><rect x="222" y="12" width="6" height="18" fill="#d8d0bc"/>' +
      '<path d="M190 104v-40l10 -14l10 14v40z" fill="#3a4a5a" stroke="#d8d0bc" stroke-width="2"/><rect x="176" y="70" width="48" height="4" fill="#d8d0bc"/>' +
      '<rect x="190" y="134" width="20" height="28" fill="#4a2a20"/>' +
      '<rect x="0" y="160" width="400" height="20" fill="#5f9a4a"/>' + trees +
      '<rect x="0" y="178" width="400" height="82" fill="#3f6f8e"/>' +
      '<g opacity=".35"><rect x="176" y="182" width="48" height="60" fill="#a4503a"/><rect x="100" y="182" width="200" height="22" fill="#9c4a36"/></g>' +
      '<path class="sk-rp" d="M30 214q20 -5 40 0t40 0M250 226q20 -5 40 0t40 0" stroke="#a7d3f2" stroke-width="2" fill="none"/><path class="sk-rp sk-rp2" d="M120 244q20 -5 40 0t40 0" stroke="#a7d3f2" stroke-width="2" fill="none"/>' +
      '<g class="sk-swim"><ellipse cx="330" cy="206" rx="12" ry="6" fill="#6b4f2a"/><circle cx="341" cy="199" r="5" fill="#2f6a3a"/><path d="M345 199l5 1l-5 2z" fill="#e0a030"/></g>',
      sky("sk3", "#86bde8", "#e2f0f8"));
  }

  /* 4. Whitcomb St & Sussex St in the East End: green signs, SKILLZ tagged on the wall, downtown Richmond's towers behind at dusk, a car rolling by */
  function skcorner() {
    const tower = (x, w, h, c) => '<rect x="' + x + '" y="' + (150 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
      Array.from({ length: Math.floor(h / 10) }, (_, r) => '<rect class="' + (r % 4 ? "" : "sk-glow") + '" x="' + (x + 4) + '" y="' + (150 - h + 6 + r * 10) + '" width="' + (w - 8) + '" height="3" fill="#f6dc8c" opacity=".55"/>').join("");
    const bricks = Array.from({ length: 11 }, (_, r) => '<path d="M150 ' + (118 + r * 10) + 'h250" stroke="#4e5a3a" stroke-width="1.2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sk4)"/>' +
      tower(20, 34, 70, "#3c4660") + tower(62, 26, 96, "#46506a") + tower(96, 40, 124, "#e8e4da") + tower(144, 30, 84, "#3a4258") + tower(184, 36, 106, "#4a556e") + tower(228, 24, 74, "#3c4660") + tower(262, 44, 92, "#46506a") + tower(318, 30, 112, "#3a4258") + tower(356, 40, 66, "#4a556e") +
      '<rect x="150" y="112" width="250" height="124" fill="#6d7a52"/>' + bricks +
      tag("SKILLZ", 172, 184, 50, GOLD, -6) + tag("804", 300, 222, 24, ORNG, -4) + tag("SUPAFRIENDZ", 168, 222, 18, "#fff", -3) +
      '<rect class="sk-sp" x="358" y="150" width="4" height="4" fill="' + GOLD + '"/><rect class="sk-sp sk-sp2" x="366" y="160" width="3" height="3" fill="' + ORNG + '"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#3e4146"/><rect x="0" y="232" width="400" height="5" fill="#8e9196"/>' +
      '<g class="sk-car"><rect x="0" y="238" width="70" height="14" rx="5" fill="#2a5aa0"/><rect x="12" y="230" width="40" height="10" rx="4" fill="#2a5aa0"/><circle cx="16" cy="253" r="5" fill="#111"/><circle cx="54" cy="253" r="5" fill="#111"/></g>' +
      '<rect x="56" y="70" width="5" height="166" fill="#5a5f66"/>' + sign(4, 62, 112, "Whitcomb St") + sign(12, 86, 96, "Sussex St"),
      sky("sk4", "#232a4a", "#d9805a"));
  }

  window.SCENES = { skstation: skstation, skslip: skslip, skrhoads: skrhoads, skur: skur, skcorner: skcorner };
})();
