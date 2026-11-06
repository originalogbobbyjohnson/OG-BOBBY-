/* reefthelostcauze scenes (Regions tab: Philadelphia; West Philly / Overbrook). CSS classes prefixed rf- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rfglow{0%,100%{opacity:.45}50%{opacity:1}}.rf-glow{animation:rfglow 2.4s ease-in-out infinite}.rf-glow2{animation-delay:-1.2s}' +
    '@keyframes rfspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.rf-spin{transform-box:fill-box;transform-origin:50% 50%;animation:rfspin 3s linear infinite}' +
    '@keyframes rfbeam{0%,100%{opacity:.18}50%{opacity:.38}}.rf-beam{animation:rfbeam 1.6s ease-in-out infinite}' +
    '@keyframes rfsweep{0%,100%{transform:rotate(-26deg)}50%{transform:rotate(26deg)}}.rf-sw{transform-box:fill-box;transform-origin:50% 0%;animation:rfsweep 3.4s ease-in-out infinite}.rf-sw2{animation-delay:-1.7s}' +
    '@keyframes rfbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.rf-bob{animation:rfbob .8s ease-in-out infinite}.rf-bob2{animation-delay:-.4s}' +
    '@keyframes rfjet{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(46px,10px);opacity:0}}.rf-jet{animation:rfjet 1s linear infinite}.rf-jet2{animation-delay:-.33s}.rf-jet3{animation-delay:-.66s}' +
    '@keyframes rfcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.rf-car{animation:rfcar 7.5s linear infinite}' +
    '@keyframes rfsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.rf-sp{animation:rfsp 1.4s ease-out infinite}.rf-sp2{animation-delay:.5s}' +
    '@keyframes rfleaf{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.rf-leaf{transform-box:fill-box;transform-origin:50% 100%;animation:rfleaf 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "rf-glow") + '" cx="' + ((i * 79) % 400) + '" cy="' + (8 + (i * 43) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s) => '<g class="rf-leaf"><rect x="' + (x - 3 * s) + '" y="' + (y - 4) + '" width="' + (6 * s) + '" height="' + (34 * s) + '" fill="#5a3e2a"/><circle cx="' + x + '" cy="' + (y - 14 * s) + '" r="' + (22 * s) + '" fill="#3f7a3a"/><circle cx="' + (x - 14 * s) + '" cy="' + (y - 4 * s) + '" r="' + (14 * s) + '" fill="#4a8a42"/><circle cx="' + (x + 14 * s) + '" cy="' + (y - 4 * s) + '" r="' + (14 * s) + '" fill="#4a8a42"/></g>';
  const RED = "#e23b2e", GOLD = "#f2b134", BLUE = "#7fb3d5", TROLLEY = "#5a960a";

  /* 1. 63rd-Malvern, the end of the Route 10 trolley line in Overbrook: the turnaround loop at street level, the little shelter, the overhead wire, the black sign with the green trolley bullet, the cream car with the red and blue stripes rolling in */
  function rfstation() {
    const tr = '<g class="anim-train"><rect x="40" y="128" width="290" height="62" rx="8" fill="#ece6d6" stroke="#6b6658" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (54 + i * 44) + '" y="138" width="32" height="24" rx="2" fill="#1d2833"/>').join("") +
      '<rect x="40" y="168" width="290" height="5" fill="#c8302a"/><rect x="40" y="174" width="290" height="4" fill="#2a4a9a"/>' +
      '<rect x="312" y="134" width="18" height="54" rx="4" fill="#d6d0c0"/><rect x="314" y="138" width="14" height="14" rx="2" fill="#f6e48a"/><circle cx="322" cy="182" r="3.5" fill="#fff6c2"/>' +
      '<path d="M180 128l-10 -22h40l-10 22" stroke="#3a3a3a" stroke-width="2.5" fill="none"/></g>';
    const rows = Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 46) + '" y="' + (78 + (i % 2) * 6) + '" width="44" height="' + (52 - (i % 2) * 6) + '" fill="' + (i % 2 ? "#8a4a36" : "#7a3d2e") + '"/><rect x="' + (i * 46 + 8) + '" y="' + (90 + (i % 2) * 6) + '" width="10" height="12" fill="#f6dfa0" opacity=".6"/><rect x="' + (i * 46 + 26) + '" y="' + (90 + (i % 2) * 6) + '" width="10" height="12" fill="#f6dfa0" opacity=".6"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rf1)"/>' + rows + tree(30, 118, 1) + tree(380, 112, 1.1) +
      '<path d="M0 104h400" stroke="#222" stroke-width="1.5"/>' + [70, 200, 330].map(x => '<rect x="' + (x - 2) + '" y="96" width="4" height="96" fill="#4a4a4a"/>').join("") +
      '<rect x="0" y="190" width="400" height="70" fill="#7e7a74"/><path d="M0 198q200 -6 400 0M0 206q200 -6 400 0" stroke="#3a3a3a" stroke-width="2.5" fill="none"/>' +
      '<path d="M300 236q90 -10 96 -34" stroke="#3a3a3a" stroke-width="2.5" fill="none"/><path d="M300 244q100 -12 100 -40" stroke="#3a3a3a" stroke-width="2.5" fill="none"/>' +
      tr +
      '<g transform="translate(330 196)"><rect x="0" y="0" width="60" height="4" fill="#3a5a4a"/><rect x="2" y="4" width="3" height="40" fill="#3a5a4a"/><rect x="55" y="4" width="3" height="40" fill="#3a5a4a"/><rect x="6" y="6" width="48" height="26" fill="#bcd6e6" opacity=".5"/></g>' +
      '<rect x="70" y="10" width="216" height="30" rx="3" fill="#111"/><text x="84" y="31" ' + font + ' font-size="15" fill="#fff">63rd-Malvern</text>' +
      '<circle cx="250" cy="25" r="11" fill="' + TROLLEY + '"/><text x="250" y="30" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">T</text>' +
      '<text x="270" y="30" ' + font + ' font-size="9" fill="#cfd8cf">10</text>',
      sky("rf1", "#9ccbe8", "#f4e7c8"));
  }

  /* 2. The University of the Arts on South Broad (Hamilton Hall, Broad and Pine), where he came on a film scholarship: the pale Greek Revival portico at night, red banners, a film projector throwing its beam, the reel spinning */
  function rfarts() {
    const cols = Array.from({ length: 4 }, (_, i) => '<rect x="' + (142 + i * 36) + '" y="84" width="18" height="96" fill="#e4dfd2"/><rect x="' + (139 + i * 36) + '" y="80" width="24" height="6" fill="#cfc9b9"/><path d="M' + (147 + i * 36) + ' 88v90M' + (155 + i * 36) + ' 88v90" stroke="#c9c3b2" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rf2)"/>' + stars(20) +
      '<rect x="20" y="70" width="104" height="110" fill="#cfc9b9"/><rect x="276" y="70" width="104" height="110" fill="#cfc9b9"/>' +
      [[34, 86], [66, 86], [98, 86], [34, 130], [66, 130], [98, 130], [290, 86], [322, 86], [354, 86], [290, 130], [322, 130], [354, 130]].map(p => '<rect x="' + (p[0] - 8) + '" y="' + p[1] + '" width="16" height="30" fill="#ffd98a" opacity=".65"/>').join("") +
      '<rect x="120" y="68" width="160" height="12" fill="#d8d2c2"/><path d="M120 68l80 -30 80 30z" fill="#e4dfd2" stroke="#bdb6a4" stroke-width="2"/>' +
      cols + '<rect x="120" y="178" width="160" height="6" fill="#bdb6a4"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (110 - i * 8) + '" y="' + (184 + i * 7) + '" width="' + (180 + i * 16) + '" height="7" fill="' + (i % 2 ? "#a9a395" : "#b8b2a3") + '"/>').join("") +
      [44, 330].map(x => '<rect x="' + x + '" y="94" width="26" height="62" fill="' + RED + '"/><text x="' + (x + 13) + '" y="112" text-anchor="middle" ' + font + ' font-size="8" fill="#fff" transform="rotate(90 ' + (x + 13) + ' 112)">FILM</text>').join("") +
      '<rect x="0" y="219" width="400" height="41" fill="#55524c"/>' +
      '<g transform="translate(66 196)"><rect x="-16" y="0" width="40" height="22" rx="3" fill="#2a2a2a"/><rect x="24" y="6" width="10" height="10" fill="#3a3a3a"/>' +
      '<g class="rf-spin"><circle cx="-6" cy="-14" r="12" fill="#3a3a3a" stroke="#888" stroke-width="2"/><circle cx="-6" cy="-14" r="3" fill="#888"/><path d="M-6 -24v6M-6 -10v6M-16 -14h6M2 -14h6" stroke="#888" stroke-width="2"/></g>' +
      '<g class="rf-spin"><circle cx="16" cy="-12" r="9" fill="#3a3a3a" stroke="#888" stroke-width="2"/><circle cx="16" cy="-12" r="2.5" fill="#888"/></g></g>' +
      '<path class="rf-beam" d="M100 206L300 120L300 196z" fill="#fff6c2"/>' +
      '<rect x="216" y="118" width="88" height="66" fill="#fff6c2" opacity=".18"/>',
      sky("rf2", "#0e1530", "#3a3a6a"));
  }

  /* 3. South Philly, where he lives now: a rowhouse block on a summer night, marble stoops, awnings, porch lights, the fire hydrant opened up and spraying the street */
  function rfstoops() {
    const house = (x, c) => '<rect x="' + x + '" y="70" width="80" height="140" fill="' + c + '"/><rect x="' + x + '" y="66" width="80" height="6" fill="#3a2a22"/>' +
      '<rect x="' + (x + 10) + '" y="84" width="22" height="28" fill="#ffd98a" opacity=".65"/><rect x="' + (x + 46) + '" y="84" width="22" height="28" fill="#ffd98a" opacity=".65"/>' +
      '<rect x="' + (x + 10) + '" y="130" width="22" height="30" fill="#ffd98a" opacity=".5"/><rect x="' + (x + 44) + '" y="132" width="24" height="56" fill="#3a2418"/><circle cx="' + (x + 64) + '" cy="162" r="1.6" fill="' + GOLD + '"/>' +
      '<path d="M' + (x + 38) + ' 126h36l4 10h-44z" fill="' + (x % 160 ? RED : BLUE) + '"/>' +
      '<rect x="' + (x + 40) + '" y="188" width="32" height="7" fill="#eeeae2"/><rect x="' + (x + 36) + '" y="195" width="40" height="7" fill="#e2ded6"/><rect x="' + (x + 32) + '" y="202" width="48" height="8" fill="#d6d2ca"/>' +
      '<circle class="rf-glow' + (x % 160 ? " rf-glow2" : "") + '" cx="' + (x + 40) + '" cy="128" r="3" fill="#fff2b0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rf3)"/>' + stars(16) +
      house(0, "#8a4a36") + house(80, "#a35a3e") + house(160, "#7a3d2e") + house(240, "#9a5236") + house(320, "#86462f") +
      '<rect x="0" y="210" width="400" height="10" fill="#bfbab0"/><rect x="0" y="220" width="400" height="40" fill="#4f4c47"/>' +
      '<g transform="translate(150 206)"><rect x="-7" y="-14" width="14" height="18" rx="3" fill="#d8b23a"/><rect x="-9" y="-18" width="18" height="6" rx="2" fill="#c9a22a"/><rect x="5" y="-10" width="8" height="7" fill="#c9a22a"/></g>' +
      [0, 1, 2].map(i => '<g class="rf-jet rf-jet' + (i + 1) + '"><circle cx="164" cy="200" r="' + (3 - i * .5) + '" fill="#cfe8ff"/><circle cx="170" cy="204" r="2" fill="#e6f4ff"/></g>').join("") +
      '<path d="M163 200q30 -14 60 14" stroke="#cfe8ff" stroke-width="5" fill="none" opacity=".6"/>' +
      '<g class="rf-bob"><circle cx="246" cy="222" r="5" fill="#2a1a12"/><rect x="241" y="227" width="10" height="16" rx="4" fill="' + GOLD + '"/></g>' +
      '<g class="rf-bob rf-bob2"><circle cx="270" cy="224" r="5" fill="#3a2414"/><rect x="265" y="229" width="10" height="14" rx="4" fill="' + BLUE + '"/></g>',
      sky("rf3", "#1a1438", "#7a4a6a"));
  }

  /* 4. The battle stage: Philly's open mics and battles where he made his name (he won the Mic Check battle in Philly in 2003): the packed room, two mics on stands, the BATTLE banner, stage lights sweeping, the crowd's hands up */
  function rfbattle() {
    const crowd = Array.from({ length: 22 }, (_, i) => { const x = 8 + i * 18, y = 220 + (i % 3) * 6; return '<g class="rf-bob' + (i % 2 ? " rf-bob2" : "") + '"><circle cx="' + x + '" cy="' + (y - 10) + '" r="5.5" fill="#4a3442"/><rect x="' + (x - 6) + '" y="' + (y - 5) + '" width="12" height="22" rx="4" fill="#4a3442"/>' + (i % 3 === 1 ? '<path d="M' + (x + 4) + ' ' + (y - 4) + 'l6 -16" stroke="#4a3442" stroke-width="3" stroke-linecap="round"/>' : "") + '</g>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="#120a10"/>' +
      '<rect x="0" y="0" width="400" height="20" fill="#2a1a22"/>' + [60, 140, 260, 340].map(x => '<rect x="' + (x - 8) + '" y="18" width="16" height="10" fill="#3a3a3a"/>').join("") +
      '<g class="rf-sw"><path d="M60 26l-40 150h50z" fill="' + RED + '" opacity=".25"/></g><g class="rf-sw rf-sw2"><path d="M340 26l-10 150h50z" fill="' + GOLD + '" opacity=".25"/></g>' +
      '<g class="rf-sw rf-sw2"><path d="M140 26l-20 150h46z" fill="' + BLUE + '" opacity=".2"/></g><g class="rf-sw"><path d="M260 26l-14 150h46z" fill="#fff" opacity=".15"/></g>' +
      '<rect x="110" y="40" width="180" height="34" rx="3" fill="' + RED + '" stroke="' + GOLD + '" stroke-width="3"/><text x="200" y="65" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="24" fill="#fff" letter-spacing="4">BATTLE</text>' +
      '<rect x="40" y="168" width="320" height="30" fill="#2a2024"/><rect x="40" y="166" width="320" height="4" fill="' + GOLD + '"/>' +
      [150, 250].map(x => '<rect x="' + (x - 1.5) + '" y="112" width="3" height="56" fill="#9a9a9a"/><rect x="' + (x - 10) + '" y="164" width="20" height="4" fill="#9a9a9a"/><rect x="' + (x - 5) + '" y="98" width="10" height="16" rx="5" fill="#3a3a3a"/><circle class="rf-glow" cx="' + x + '" cy="102" r="2" fill="' + GOLD + '"/>').join("") +
      '<g transform="translate(200 132)"><rect x="-34" y="0" width="68" height="28" rx="2" fill="#fdf6e0" stroke="#7a6a4a" stroke-width="2"/><text x="0" y="19" text-anchor="middle" ' + font + ' font-size="13" fill="#2a6a3a">$10,000</text></g>' +
      crowd,
      "");
  }

  /* 5. N 64th St and Malvern Ave in Overbrook, by the trolley loop where he grew up: green signs, REEF tagged on the wall, the cream tower and red tile roofs of the Overbrook School for the Blind behind */
  function rfcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#rf5)"/>' + stars(12) +
      '<g transform="translate(200 0)"><rect x="-150" y="96" width="300" height="44" fill="#e6d9b8"/><path d="M-156 96l12 -12h288l12 12z" fill="#b8503a"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (-138 + i * 30) + ' 134v-20a8 8 0 0 1 16 0v20z" fill="#ffd98a" opacity=".55"/>').join("") +
      '<rect x="-22" y="30" width="44" height="66" fill="#efe3c4"/><path d="M-28 30l28 -24 28 24z" fill="#c25a40"/><path d="M-28 30l28 -24 28 24" fill="none" stroke="#8a3a2a" stroke-width="1.5"/>' +
      '<path d="M-12 62v-14a6 6 0 0 1 12 0v14zM2 62v-14a6 6 0 0 1 12 0v14z" fill="#3a2a22"/><rect x="-26" y="66" width="52" height="4" fill="#cfc2a2"/>' +
      '<path class="rf-glow" d="M-10 60v-10a4 4 0 0 1 8 0v10zM4 60v-10a4 4 0 0 1 8 0v10z" fill="#ffd98a" opacity=".5"/></g>' +
      tree(26, 120, .9) + tree(372, 118, .9) +
      '<rect x="0" y="136" width="400" height="88" fill="#5a5f6a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#4c515b" stroke-width="1"/>').join("") +
      tag("REEF", 22, 196, 54, RED, -6) + tag("LOST CAUZE", 160, 188, 30, GOLD, -4) + tag("JUJU MOB", 30, 218, 18, "#fff", -3) + tag("FEAST OR FAMINE", 150, 216, 16, BLUE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="rf-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + RED + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + RED + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="356" y="98" width="6" height="126" fill="#2f2f2f"/>' + sign(306, 100, 102, "N 64th St") + sign(296, 126, 112, "Malvern Ave") +
      '<g class="rf-sp"><circle cx="150" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="rf-sp rf-sp2"><circle cx="156" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("rf5", "#16203a", "#c8705a"));
  }

  window.SCENES = { rfstation: rfstation, rfarts: rfarts, rfstoops: rfstoops, rfbattle: rfbattle, rfcorner: rfcorner };
})();
