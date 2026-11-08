/* destinyschild scenes (Regions tab: Houston + Texas; Third Ward, Houston). CSS classes prefixed dsc- (the page's own anim-train is kept).
   1 Leeland/Third Ward on the METRORail Purple Line: side platforms on Scott St at Leeland, the downtown towers right behind, the light-rail car gliding in.
   2 St. John's Downtown (St. John's United Methodist, Crawford St): the church where Beyoncé first sang solo and the group sang in the choir; red brick, stained glass, choir robes swaying.
   3 The studio on Brock St (open since 1941, where the group recorded): tape reels turning, the board's meters bouncing, the red ON AIR light.
   4 Parkwood Park (Parkwood Dr & Rio St), where the girls ran laps while singing: the track loop, live oaks, three runners with mics, a stopwatch.
   5 Parkwood Dr and Rio St: green signs, DESTINY'S CHILD tagged on the wall, the downtown skyline lit up behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dscblink{0%,100%{opacity:.3}50%{opacity:1}}.dsc-bl{animation:dscblink 1.6s ease-in-out infinite}.dsc-bl2{animation-delay:-.8s}' +
    '@keyframes dscsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.dsc-sway{animation:dscsway 1.8s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.dsc-s2{animation-delay:-.6s}.dsc-s3{animation-delay:-1.2s}' +
    '@keyframes dscnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(14px,-60px);opacity:0}}.dsc-note{animation:dscnote 3s ease-out infinite}.dsc-n2{animation-delay:-1s}.dsc-n3{animation-delay:-2s}' +
    '@keyframes dscspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.dsc-spin{animation:dscspin 3s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes dscmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.dsc-m{animation:dscmeter .7s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.dsc-m2{animation-delay:-.2s}.dsc-m3{animation-delay:-.45s}' +
    '@keyframes dscrun{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.dsc-run{animation:dscrun 7s linear infinite}' +
    '@keyframes dschop{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.dsc-hop{animation:dschop .38s ease-in-out infinite}' +
    '@keyframes dsctick{from{transform:rotate(0)}to{transform:rotate(360deg)}}.dsc-tick{animation:dsctick 4s steps(12) infinite;transform-box:view-box;transform-origin:352px 52px}' +
    '@keyframes dscspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dsc-sp{animation:dscspray 1.4s ease-out infinite}.dsc-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const oak = (x, base, s) => '<g><rect x="' + (x - 3 * s) + '" y="' + (base - 26 * s) + '" width="' + (6 * s) + '" height="' + (26 * s) + '" fill="#4a3526"/>' +
    '<ellipse cx="' + x + '" cy="' + (base - 34 * s) + '" rx="' + (30 * s) + '" ry="' + (16 * s) + '" fill="#2f5a34"/><ellipse cx="' + (x - 14 * s) + '" cy="' + (base - 40 * s) + '" rx="' + (16 * s) + '" ry="' + (11 * s) + '" fill="#3a6b3e"/><ellipse cx="' + (x + 14 * s) + '" cy="' + (base - 42 * s) + '" rx="' + (15 * s) + '" ry="' + (10 * s) + '" fill="#356340"/></g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "dsc-bl" + (i % 2 ? " dsc-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const GOLD = "#f5c542", ROSE = "#e0457b", SKY = "#5ec8e5", PURP = "#7a2c8e";
  /* a singer seen from behind or in silhouette: no faces */
  const singer = (x, base, dress, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (base - 46) + '" r="7" fill="#5a3a28"/><path d="M' + (x - 9) + ' ' + (base - 50) + 'q9 -10 18 0q2 10 -2 16h-14q-4 -6 -2 -16z" fill="#2a1a12"/>' +
    '<path d="M' + (x - 10) + ' ' + base + 'l4 -34q6 -6 12 0l4 34z" fill="' + dress + '"/><rect x="' + (x - 3) + '" y="' + (base - 40) + '" width="6" height="4" fill="#5a3a28"/></g>';

  /* downtown Houston skyline, used behind the station and the corner */
  const skyline = (base, lit) => {
    const w = (x, y, ww, hh) => { let s = ""; for (let r = y + 6; r < base - 4; r += 9) for (let c = x + 3; c < x + ww - 3; c += 6) s += '<rect x="' + c + '" y="' + r + '" width="3" height="4" fill="' + (((r * 7 + c * 3) % 5) ? "#2c3550" : lit) + '"/>'; return s; };
    return '<g>' +
      '<rect x="20" y="' + (base - 70) + '" width="34" height="70" fill="#1d2338"/>' + w(20, base - 70, 34, 70) +
      '<path d="M66 ' + base + 'v-112l14 -14l14 14v112z" fill="#22293f"/>' + w(66, base - 112, 28, 112) +
      '<path d="M104 ' + base + 'v-150h30v150z" fill="#1b2a3a"/><path d="M104 ' + (base - 150) + 'h30l-6 -10h-18z" fill="#1b2a3a"/>' + w(104, base - 150, 30, 150) +
      '<path d="M146 ' + base + 'v-126q20 -14 40 0v126z" fill="#20364a"/>' + '<path d="M150 ' + (base - 120) + 'q16 -10 32 0" stroke="' + SKY + '" stroke-width="2" fill="none" opacity=".7"/>' + w(146, base - 120, 40, 120) +
      '<rect x="198" y="' + (base - 96) + '" width="26" height="96" fill="#262b40"/>' + w(198, base - 96, 26, 96) +
      '<path d="M236 ' + base + 'v-82l10 -10l10 10v82z" fill="#1f2539"/>' + w(236, base - 82, 20, 82) +
      '<rect x="268" y="' + (base - 60) + '" width="40" height="60" fill="#232a3e"/>' + w(268, base - 60, 40, 60) +
      '<rect x="320" y="' + (base - 88) + '" width="24" height="88" fill="#1d2338"/>' + w(320, base - 88, 24, 88) +
      '<rect x="354" y="' + (base - 50) + '" width="36" height="50" fill="#20283c"/>' + w(354, base - 50, 36, 50) +
      '<circle class="dsc-bl" cx="119" cy="' + (base - 162) + '" r="2" fill="#ff4d4d"/></g>';
  };

  /* 1. Leeland/Third Ward, METRORail Purple Line (side platforms on Scott St) */
  function dscstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="126" width="36" height="24" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><path d="M24 186V124q0 -12 14 -12h300q24 0 30 30v44z" fill="#e9ecef" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="24" y="158" width="344" height="7" fill="' + PURP + '"/><rect x="24" y="167" width="344" height="3" fill="#1f3c88"/>' +
      '<path d="M340 116q22 4 26 30h-26z" fill="#1c2630"/><circle cx="356" cy="178" r="3.5" fill="#fff6c2"/>' +
      '<rect x="200" y="102" width="70" height="10" fill="#8a939b"/><path d="M210 102l25 -26l25 26" stroke="#555" stroke-width="2" fill="none"/>' +
      '<rect x="40" y="114" width="96" height="10" rx="2" fill="#111"/><text x="88" y="122" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">PURPLE · PALM CENTER</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dscs1)"/>' + stars(10) + skyline(186, "#ffd98a") +
      '<path d="M0 70h400" stroke="#333" stroke-width="1.5"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="66" width="6" height="124" fill="#7a8088"/>').join("") +
      '<path d="M0 56h120v12h-120z" fill="#c9cdd2"/><rect x="0" y="66" width="120" height="3" fill="' + PURP + '"/><path d="M280 56h120v12h-120z" fill="#c9cdd2"/><rect x="280" y="66" width="120" height="3" fill="' + PURP + '"/>' +
      train +
      '<rect x="0" y="190" width="400" height="8" fill="#f2c200"/><rect x="0" y="198" width="400" height="62" fill="#b3ada2"/><path d="M0 228h400" stroke="#9a948a" stroke-width="2"/>' +
      '<rect x="18" y="204" width="364" height="40" rx="3" fill="#111"/><text x="30" y="229" ' + font + ' font-size="16" fill="#fff">Leeland/Third Ward</text>' + badge(296, 224, "PURPLE", PURP),
      sky("dscs1", "#141a3a", "#6a3a6e"));
  }

  /* 2. St. John's Downtown: red brick church, stained glass, the choir in gold robes */
  function dscchurch() {
    const bricks = Array.from({ length: 9 }, (_, r) => '<path d="M70 ' + (60 + r * 12) + 'h260" stroke="#7a3424" stroke-width="1"/>').join("");
    const glass = (x) => '<path d="M' + x + ' 128v-34q12 -16 24 0v34z" fill="#1e2a4a" stroke="#e9dcc0" stroke-width="2"/>' +
      '<path d="M' + (x + 2) + ' 126v-30q10 -12 20 0v30z" fill="' + ROSE + '" opacity=".75"/><path d="M' + (x + 12) + ' 84v42M' + (x + 2) + ' 106h20" stroke="#e9dcc0" stroke-width="1.5"/>' +
      '<circle cx="' + (x + 7) + '" cy="116" r="3" fill="' + GOLD + '"/><circle cx="' + (x + 17) + '" cy="96" r="3" fill="' + SKY + '"/>';
    const robes = [0, 1, 2, 3, 4, 5, 6].map(i => '<g class="dsc-sway' + (i % 3 ? " dsc-s" + (i % 3 + 1) : "") + '"><circle cx="' + (92 + i * 36) + '" cy="196" r="8" fill="#4a2e20"/><path d="M' + (78 + i * 36) + ' 246q0 -40 14 -42q14 2 14 42z" fill="' + (i % 2 ? "#7a2c8e" : GOLD) + '"/><path d="M' + (84 + i * 36) + ' 212h16" stroke="#fff" stroke-width="3"/></g>').join("");
    const notes = [0, 1, 2].map(i => '<text class="dsc-note' + (i ? " dsc-n" + (i + 1) : "") + '" x="' + (120 + i * 80) + '" y="186" font-size="18" fill="' + [GOLD, ROSE, SKY][i] + '">' + ["&#9834;", "&#9835;", "&#9834;"][i] + '</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dscs2)"/>' + stars(8) +
      '<path d="M190 52v-30h20v30z" fill="#9c4a36"/><path d="M186 24l14 -18l14 18z" fill="#e9dcc0"/><path d="M200 2v10M196 6h8" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<path d="M60 56l140 -24l140 24z" fill="#5a2a1e"/><rect x="70" y="56" width="260" height="120" fill="#a5452f"/>' + bricks +
      glass(92) + glass(140) + glass(236) + glass(284) +
      '<path d="M180 176v-52q20 -26 40 0v52z" fill="#3a1e14" stroke="#e9dcc0" stroke-width="3"/><circle cx="200" cy="80" r="16" fill="' + SKY + '" stroke="#e9dcc0" stroke-width="3"/><path d="M200 64v32M184 80h32" stroke="#e9dcc0" stroke-width="2"/>' +
      '<rect x="110" y="34" width="180" height="0" fill="none"/>' +
      '<rect x="0" y="176" width="400" height="84" fill="#3a2418"/><rect x="0" y="176" width="400" height="6" fill="#5a3a28"/>' + robes + notes +
      '<rect x="8" y="8" width="172" height="22" rx="3" fill="#111" opacity=".85"/><text x="94" y="23" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">ST. JOHN\'S DOWNTOWN · CHOIR</text>',
      sky("dscs2", "#1a2450", "#d98a5a"));
  }

  /* 3. The studio on Brock St: reels, the mixing board, ON AIR light */
  function dscstudio() {
    const faders = Array.from({ length: 16 }, (_, i) => '<rect x="' + (60 + i * 18) + '" y="196" width="4" height="40" fill="#222"/><rect x="' + (56 + i * 18) + '" y="' + (204 + (i * 7) % 24) + '" width="12" height="6" rx="1" fill="' + (i % 4 ? "#ddd" : ROSE) + '"/>').join("");
    const meters = Array.from({ length: 8 }, (_, i) => '<rect class="dsc-m' + (i % 3 ? " dsc-m" + (i % 3 + 1) : "") + '" x="' + (150 + i * 14) + '" y="150" width="8" height="30" fill="' + (i % 3 === 2 ? ROSE : "#5fd36a") + '"/>').join("");
    const reel = (cx) => '<g><circle cx="' + cx + '" cy="96" r="30" fill="#2a2a30" stroke="#888" stroke-width="2"/><g class="dsc-spin"><circle cx="' + cx + '" cy="96" r="26" fill="#3b3226"/><circle cx="' + cx + '" cy="96" r="6" fill="#bbb"/>' +
      [0, 120, 240].map(a => '<circle cx="' + (cx + 15 * Math.cos(a * Math.PI / 180)) + '" cy="' + (96 + 15 * Math.sin(a * Math.PI / 180)) + '" r="6" fill="#1a1a1a"/>').join("") + '</g></g>';
    return svg(
      '<rect width="400" height="260" fill="#2a1c24"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="38" height="140" fill="' + (i % 2 ? "#3a2630" : "#33212a") + '"/>').join("") +
      '<rect x="40" y="52" width="160" height="88" rx="6" fill="#1a1a1e" stroke="#555" stroke-width="2"/>' + reel(84) + reel(156) + '<path d="M84 126h72" stroke="#5a4a30" stroke-width="3"/>' +
      '<rect x="230" y="40" width="130" height="96" rx="4" fill="#0e1a22" stroke="#8a7a5a" stroke-width="4"/><path d="M236 46h118v84h-118z" fill="#18303e" opacity=".8"/>' +
      singer(296, 130, ROSE) + '<rect x="274" y="80" width="2" height="30" fill="#aaa"/><circle cx="275" cy="80" r="5" fill="#333"/>' +
      '<rect x="262" y="14" width="70" height="20" rx="4" fill="#3a0a0a"/><text class="dsc-bl" x="297" y="29" text-anchor="middle" ' + font + ' font-size="13" fill="#ff4d4d">ON AIR</text>' +
      '<path d="M30 260l20 -110h300l20 110z" fill="#3a3a40"/><rect x="140" y="146" width="124" height="38" rx="3" fill="#111"/>' + meters + faders +
      '<rect x="56" y="144" width="74" height="18" rx="3" fill="#111"/><text x="93" y="157" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">BROCK ST · 1941</text>',
      "");
  }

  /* 4. Parkwood Park: the track loop, three runners singing laps, a stopwatch */
  function dscpark() {
    const runner = (dx, dress) => '<g class="dsc-hop" style="animation-delay:' + (dx / 100) + 's">' + singer(dx, 214, dress) +
      '<path d="M' + (dx - 4) + ' 214l-6 12M' + (dx + 4) + ' 214l6 12" stroke="#5a3a28" stroke-width="3"/><rect x="' + (dx + 8) + '" y="176" width="3" height="10" fill="#333"/><circle cx="' + (dx + 9.5) + '" cy="175" r="3.5" fill="#555"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dscs4)"/>' +
      '<rect x="0" y="120" width="400" height="140" fill="#5f9a4a"/>' +
      oak(30, 130, 1.1) + oak(110, 126, 0.9) + oak(250, 128, 1) + oak(370, 130, 1.1) +
      '<ellipse cx="200" cy="200" rx="200" ry="46" fill="#b5523a"/><ellipse cx="200" cy="200" rx="170" ry="30" fill="#6aa653"/>' +
      '<ellipse cx="200" cy="200" rx="186" ry="38" fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="6 4" opacity=".8"/>' +
      '<rect x="150" y="136" width="100" height="22" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="151" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">PARKWOOD PARK</text>' +
      '<rect x="198" y="158" width="4" height="12" fill="#5a3e28"/>' +
      '<g class="dsc-run">' + runner(0, GOLD) + runner(34, ROSE) + runner(68, SKY) + '</g>' +
      '<circle cx="352" cy="52" r="26" fill="#eee" stroke="#555" stroke-width="4"/><rect x="346" y="20" width="12" height="8" fill="#555"/><path class="dsc-tick" d="M352 52v-18" stroke="' + ROSE + '" stroke-width="3" stroke-linecap="round"/><circle cx="352" cy="52" r="3" fill="#333"/>',
      sky("dscs4", "#6fb2e8", "#f3d9a4"));
  }

  /* 5. Parkwood Dr and Rio St: green signs, the wall tag, downtown behind */
  function dsccorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dscs5)"/>' + stars(14) + skyline(150, GOLD) +
      '<rect x="0" y="150" width="400" height="110" fill="#2b2d33"/>' +
      '<rect x="30" y="112" width="250" height="110" fill="#7a3a30"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M30 ' + (124 + r * 11) + 'h250" stroke="#5e2a22" stroke-width="1"/>').join("") +
      tag("DESTINY'S", 52, 160, 34, GOLD, -6) + tag("CHILD", 120, 200, 36, ROSE, -4) + tag("DC3", 226, 150, 18, SKY, 8) +
      '<circle class="dsc-sp" cx="262" cy="190" r="3" fill="' + ROSE + '"/><circle class="dsc-sp dsc-sp2" cx="268" cy="196" r="2" fill="' + ROSE + '"/>' +
      '<rect x="318" y="96" width="6" height="140" fill="#8a9096"/>' + sign(268, 92, 108, "PARKWOOD DR") + sign(300, 118, 74, "RIO ST") +
      '<rect x="0" y="222" width="400" height="38" fill="#3a3c42"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>',
      sky("dscs5", "#0f1430", "#5a2a5e"));
  }

  window.SCENES = { dscstation, dscchurch, dscstudio, dscpark, dsccorner };
})();
