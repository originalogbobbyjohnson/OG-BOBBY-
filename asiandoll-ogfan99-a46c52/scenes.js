/* asiandoll scenes (Regions tab: Houston + Texas; Park Row, South Dallas). CSS classes and ids prefixed adl- (the page's own anim-train is kept).
   1 Fair Park station on the DART Green Line (at grade, South Dallas): a DART light-rail car with its green line stripe sliding in, black station sign with the GREEN bullet.
   2 The Forest Theater on MLK Blvd, South Dallas: the 1949 art-deco theater, its tall neon blade sign and the marquee lights chasing.
   3 Texas Motor Speedway up in Fort Worth ("NASCAR, hop in a fast car" / "Running red lights in a NASCAR"): banked grandstands, stock cars zooming past, the checkered flag waving.
   4 Downtown Dallas at night: the red neon Pegasus turning on its derrick atop the Magnolia, cars streaming below.
   5 Park Row Ave and S Central Expy, Park Row: green signs, ASIAN DOLL tagged on the brick, pink and ice-blue, Renaissance Tower's lit X's behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes adlflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.adl-flk{animation:adlflick 2.4s infinite}.adl-flk2{animation-delay:.8s}' +
    '@keyframes adlchase{0%,100%{opacity:1}50%{opacity:.2}}.adl-ch{animation:adlchase .8s steps(1) infinite}.adl-ch2{animation-delay:.4s}' +
    '@keyframes adlrace{from{transform:translateX(-200px)}to{transform:translateX(520px)}}.adl-race{animation:adlrace 2.6s linear infinite}.adl-race2{animation-delay:-1.3s}.adl-race3{animation-delay:-.6s}' +
    '@keyframes adlflag{0%,100%{transform:skewY(0deg) scaleX(1)}50%{transform:skewY(6deg) scaleX(.9)}}.adl-flag{transform-box:fill-box;transform-origin:0% 50%;animation:adlflag 1s ease-in-out infinite}' +
    '@keyframes adlspin{0%,100%{transform:scaleX(1)}50%{transform:scaleX(-1)}}.adl-spin{transform-box:fill-box;transform-origin:50% 50%;animation:adlspin 6s ease-in-out infinite}' +
    '@keyframes adlcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.adl-car{animation:adlcar 6s linear infinite}.adl-car2{animation-delay:-3s}' +
    '@keyframes adlcarL{from{transform:translateX(480px)}to{transform:translateX(-80px)}}.adl-carL{animation:adlcarL 7s linear infinite}' +
    '@keyframes adlspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.adl-sp{animation:adlspray 1.4s ease-out infinite}.adl-sp2{animation-delay:.45s}' +
    '@keyframes adlglow{0%,100%{opacity:.08}50%{opacity:.22}}.adl-glow{animation:adlglow 2.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GREEN = "#009b3a", PINK = "#ff7ac8", ICE = "#7fe3ff", GOLD = "#f2c94c", NEON = "#ff2a2a";
  const stars = n => Array.from({ length: n }, (_, i) => '<circle cx="' + ((i * 67) % 400) + '" cy="' + (8 + (i * 29) % 70) + '" r="1" fill="#fff" opacity=".7"/>').join("");
  const stock = (cls, y, c, n) => '<g class="' + cls + '"><path d="M0 ' + y + 'h70l-8 -10h-16l-6 -8h-22l-8 8H4z" fill="' + c + '"/><rect x="26" y="' + (y - 16) + '" width="12" height="6" fill="#1b2630"/>' +
    '<circle cx="18" cy="' + y + '" r="6" fill="#111"/><circle cx="56" cy="' + y + '" r="6" fill="#111"/><circle cx="38" cy="' + (y - 5) + '" r="5" fill="#fff"/><text x="38" y="' + (y - 2) + '" text-anchor="middle" ' + font + ' font-size="7" fill="#111">' + n + '</text></g>';

  /* 1. Fair Park station, DART Green Line */
  function adlstation() {
    const win = [44, 84, 124, 214, 254, 294].map(x => '<rect x="' + x + '" y="124" width="32" height="24" rx="3" fill="#1b2630"/>').join("");
    const train = '<g class="anim-train">' +
      '<path d="M150 104l14 -12h40l14 12" stroke="#333" stroke-width="2.5" fill="none"/><rect x="146" y="104" width="76" height="5" fill="#555"/>' +
      '<rect x="28" y="108" width="324" height="74" rx="9" fill="#f2f2ee" stroke="#9aa3ad" stroke-width="2"/>' + win +
      '<rect x="28" y="154" width="324" height="7" fill="' + GREEN + '"/><rect x="28" y="161" width="324" height="3" fill="' + GOLD + '"/><rect x="28" y="168" width="324" height="14" rx="4" fill="#4a4f55"/>' +
      '<rect x="166" y="118" width="16" height="48" fill="#2a2a2a"/><rect x="184" y="118" width="16" height="48" fill="#2a2a2a"/>' +
      '<rect x="330" y="114" width="20" height="62" rx="6" fill="#d9dbd6"/><rect x="333" y="120" width="14" height="18" rx="2" fill="#1b2630"/><circle cx="340" cy="170" r="3.5" fill="#fff6c2"/>' +
      '<rect x="262" y="112" width="60" height="10" rx="2" fill="#111"/><text x="292" y="120" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb03a">GREEN BUCKNER</text>' +
      '<circle cx="80" cy="184" r="7" fill="#222"/><circle cx="110" cy="184" r="7" fill="#222"/><circle cx="270" cy="184" r="7" fill="#222"/><circle cx="300" cy="184" r="7" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#adls1)"/><circle cx="64" cy="54" r="18" fill="#ffd27a" opacity=".85"/>' +
      '<g fill="#7d6a8a"><rect x="250" y="62" width="22" height="40"/><rect x="276" y="48" width="18" height="54"/><rect x="300" y="70" width="26" height="32"/><rect x="330" y="56" width="16" height="46"/></g>' +
      '<path d="M0 98h400" stroke="#3a3a3a" stroke-width="1.5"/>' + [70, 200, 330].map(x => '<rect x="' + (x - 2) + '" y="62" width="4" height="50" fill="#555"/><rect x="' + (x - 14) + '" y="62" width="28" height="3" fill="#555"/>').join("") +
      '<rect x="0" y="100" width="400" height="88" fill="#8a7c6a" opacity=".3"/>' +
      train +
      '<rect x="0" y="188" width="400" height="8" fill="#f2c200"/><rect x="0" y="196" width="400" height="64" fill="#b7ada0"/><path d="M0 222h400" stroke="#a49a8c" stroke-width="2"/>' +
      '<rect x="74" y="204" width="252" height="34" rx="3" fill="#111"/><text x="92" y="227" ' + font + ' font-size="17" fill="#fff">Fair Park</text>' + badge(234, 221, "GREEN", GREEN),
      sky("adls1", "#2c2a6b", "#f2905a"));
  }

  /* 2. The Forest Theater, MLK Blvd */
  function adlforest() {
    const bulbs = (x0, x1, y, cls) => Array.from({ length: Math.floor((x1 - x0) / 8) + 1 }, (_, i) => '<circle class="adl-ch' + (i % 2 ? " adl-ch2" : "") + '" cx="' + (x0 + i * 8) + '" cy="' + y + '" r="2" fill="#ffe08a"/>').join("");
    const letters = "FOREST".split("").map((c, i) => '<text class="adl-flk" x="200" y="' + (52 + i * 17) + '" text-anchor="middle" ' + font + ' font-size="15" fill="' + PINK + '">' + c + '</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#adls2)"/>' + stars(20) +
      '<rect x="70" y="96" width="260" height="110" fill="#e9dcc4" stroke="#b7a684" stroke-width="2"/>' +
      [86, 110, 278, 302].map(x => '<rect x="' + x + '" y="104" width="14" height="44" fill="#c9b892"/>').join("") +
      '<path d="M70 96h260" stroke="' + ICE + '" stroke-width="4"/><path d="M70 104h260" stroke="#b7a684" stroke-width="1.5"/>' +
      '<rect x="184" y="28" width="32" height="114" rx="4" fill="#2a1e3a" stroke="#c9b892" stroke-width="2"/>' + letters +
      '<path d="M120 150h160l12 18H108z" fill="#2a1e3a"/><rect x="108" y="168" width="184" height="18" fill="#3a2a4f"/>' + bulbs(112, 288, 152) +
      '<text x="200" y="181" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">SOUTH DALLAS TONIGHT</text>' +
      '<rect x="150" y="186" width="100" height="20" fill="#5a3b22"/><path d="M200 186v20" stroke="#3a2716" stroke-width="2"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#4f4c52"/><path d="M0 232h400" stroke="#f2c94c" stroke-width="2" stroke-dasharray="20 16"/>' +
      '<g class="adl-car"><rect x="0" y="214" width="44" height="12" rx="4" fill="' + PINK + '"/><rect x="10" y="207" width="24" height="9" rx="3" fill="' + PINK + '"/><circle cx="10" cy="227" r="4" fill="#111"/><circle cx="34" cy="227" r="4" fill="#111"/></g>' +
      '<rect x="20" y="238" width="96" height="18" rx="3" fill="#1a1a1a"/><text x="68" y="251" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6c8">MLK JR BLVD</text>',
      sky("adls2", "#120a28", "#3a2350"));
  }

  /* 3. Texas Motor Speedway */
  function adlspeedway() {
    const crowd = Array.from({ length: 90 }, (_, i) => '<rect x="' + ((i * 37) % 400) + '" y="' + (70 + (i * 13) % 56) + '" width="3" height="3" fill="' + ["#e8505b", "#4fb3ff", "#f2c94c", "#fff", PINK][i % 5] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#adls3)"/>' +
      '<path d="M0 60h400v80H0z" fill="#5a6270"/>' + crowd +
      '<path d="M0 58h400" stroke="#c9ccd2" stroke-width="6"/>' + [40, 120, 200, 280, 360].map(x => '<rect x="' + (x - 2) + '" y="28" width="4" height="32" fill="#9aa0a8"/><rect x="' + (x - 8) + '" y="24" width="16" height="6" fill="#f4f4f4"/>').join("") +
      '<rect x="0" y="140" width="400" height="10" fill="#e8ecf2"/><path d="M0 140h400" stroke="#c8102e" stroke-width="3"/>' +
      '<path d="M0 150h400v80H0z" fill="#3b3b3e"/><path d="M0 190h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="14 12"/>' +
      stock("adl-race", 182, PINK, "1") + stock("adl-race adl-race2", 218, ICE, "17") + stock("adl-race adl-race3", 200, GOLD, "24") +
      '<rect x="0" y="230" width="400" height="30" fill="#6fa04a"/>' +
      '<rect x="330" y="150" width="3" height="80" fill="#ddd"/><g class="adl-flag"><g transform="translate(333,152)">' +
      [0, 1, 2, 3].map(r => [0, 1, 2, 3, 4].map(c => '<rect x="' + (c * 7) + '" y="' + (r * 6) + '" width="7" height="6" fill="' + ((r + c) % 2 ? "#fff" : "#111") + '"/>').join("")).join("") + '</g></g>' +
      '<rect x="20" y="236" width="150" height="18" rx="3" fill="#1a1a1a"/><text x="95" y="249" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6c8">TEXAS MOTOR SPEEDWAY</text>',
      sky("adls3", "#4f9de6", "#cfe6f7"));
  }

  /* 4. The Pegasus over downtown Dallas */
  function adlpegasus() {
    const towers = [[10, 110, 36], [52, 80, 30], [250, 70, 34], [290, 100, 28], [324, 60, 40], [370, 96, 30]];
    const peg = '<g class="adl-spin"><g fill="none" stroke="' + NEON + '" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">' +
      '<path d="M170 64q10 -6 22 -4l14 2q6 -8 14 -10l-4 8q6 2 6 8l-8 2q-4 6 -12 6l-6 14l-4 0l2 -14l-12 0l-8 14l-4 0l4 -16q-6 -2 -8 -8z"/>' +
      '<path d="M190 60q-6 -22 -22 -30q16 2 26 14q2 -16 14 -24q-4 14 -2 30"/><path d="M170 64q-10 2 -14 10"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#adls4)"/>' + stars(26) +
      '<g fill="#22223a">' + towers.map(t => '<rect x="' + t[0] + '" y="' + t[1] + '" width="' + t[2] + '" height="' + (210 - t[1]) + '"/>').join("") + '</g>' +
      towers.map((t, i) => '<rect class="adl-flk' + (i % 2 ? " adl-flk2" : "") + '" x="' + (t[0] + 6) + '" y="' + (t[1] + 12) + '" width="3" height="3" fill="#ffe9a8"/>').join("") +
      '<rect x="140" y="112" width="120" height="98" fill="#3a3448"/>' + Array.from({ length: 24 }, (_, i) => '<rect x="' + (150 + (i % 6) * 18) + '" y="' + (122 + Math.floor(i / 6) * 20) + '" width="8" height="10" fill="#ffe9a8" opacity="' + (i % 3 ? .8 : .3) + '"/>').join("") +
      '<path d="M190 112l10 -14 10 14M196 104h8M193 108h14" stroke="#7a6f86" stroke-width="2" fill="none"/>' +
      '<circle class="adl-glow" cx="200" cy="66" r="44" fill="' + NEON + '" opacity=".15"/>' + peg +
      '<rect x="0" y="210" width="400" height="50" fill="#2b2a30"/>' +
      '<g class="adl-car"><rect x="0" y="222" width="40" height="10" rx="4" fill="' + ICE + '"/><circle cx="8" cy="233" r="3.5" fill="#111"/><circle cx="32" cy="233" r="3.5" fill="#111"/><rect x="38" y="224" width="3" height="3" fill="#fff6c2"/></g>' +
      '<g class="adl-carL"><rect x="0" y="240" width="40" height="10" rx="4" fill="' + PINK + '"/><circle cx="8" cy="251" r="3.5" fill="#111"/><circle cx="32" cy="251" r="3.5" fill="#111"/><rect x="0" y="242" width="3" height="3" fill="#ff5050"/></g>',
      sky("adls4", "#0b0820", "#2c1f4a"));
  }

  /* 5. Park Row Ave and S Central Expy */
  function adlcorner() {
    const towers = [[24, 76, 26], [54, 98, 22], [140, 84, 24], [170, 104, 20]];
    const ren = '<rect x="84" y="36" width="44" height="94" fill="#2c3550"/>' +
      [0, 1, 2].map(i => '<path class="adl-flk' + (i % 2 ? " adl-flk2" : "") + '" d="M84 ' + (40 + i * 30) + 'l44 26M128 ' + (40 + i * 30) + 'l-44 26" stroke="' + ICE + '" stroke-width="2"/>').join("") +
      '<path d="M90 36v-14M122 36v-14" stroke="#2c3550" stroke-width="3"/><circle class="adl-flk" cx="90" cy="20" r="2" fill="#ff4d4d"/><circle class="adl-flk adl-flk2" cx="122" cy="20" r="2" fill="#ff4d4d"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#adls5)"/>' +
      '<g fill="#2f3456">' + towers.map(t => '<rect x="' + t[0] + '" y="' + t[1] + '" width="' + t[2] + '" height="' + (130 - t[1]) + '"/>').join("") + '</g>' + ren +
      '<rect x="0" y="126" width="400" height="98" fill="#8a4a3a"/>' + Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (136 + r * 12) + 'h400" stroke="#6e3a2e" stroke-width="1.5"/>').join("") +
      Array.from({ length: 40 }, (_, i) => '<path d="M' + (((i * 37) + (Math.floor(i / 10) % 2) * 18) % 400) + ' ' + (126 + (i % 8) * 12) + 'v12" stroke="#6e3a2e" stroke-width="1.5"/>').join("") +
      '<rect x="0" y="126" width="400" height="5" fill="#5a2e24"/>' +
      tag("ASIAN", 18, 180, 52, PINK, -6) + tag("DOLL", 52, 214, 40, ICE, -5) + tag("SO ICY", 168, 212, 18, GOLD, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(254, 98, 136, "Park Row Ave") + sign(254, 124, 136, "S Central Expy") +
      '<rect x="230" y="110" width="4" height="114" fill="#222"/><circle class="adl-flk" cx="232" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="adl-sp"><circle cx="150" cy="168" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="adl-sp adl-sp2"><circle cx="156" cy="162" r="2" fill="' + ICE + '" opacity=".6"/></g>',
      sky("adls5", "#1a1640", "#e0607e"));
  }

  window.SCENES = { adlstation: adlstation, adlforest: adlforest, adlspeedway: adlspeedway, adlpegasus: adlpegasus, adlcorner: adlcorner };
})();
