/* toosii scenes (Regions tab: The Carolinas; Raleigh, NC — born in Syracuse, moved down to Raleigh at 13, came up there). 400 x 260 SVGs. CSS classes and ids prefixed ts- (the page's own anim-train is kept).
   0 Raleigh Union Station on W Martin St (the old warehouse turned glass-and-brick station): a silver passenger train rolling in, the black sign with the Carolinian / Piedmont badges.
   1 Friday night lights ("Started wide receiver" on Since 9th Grade): a high school field under the lights, the ball spiraling to the receiver, the scoreboard glowing.
   2 "I'm on the stage right now, singing your favorite song": the stage, spotlight beams sweeping, the crowd's phone lights swaying, hearts floating.
   3 "She attended A&T, got Aggie Pride" (Since 9th Grade): NC A&T's Dudley Memorial Building in Greensboro, red brick, white columns and the white cupola, blue-and-gold banners waving.
   4 S Salisbury St & W Lenoir St downtown Raleigh: green signs, TOOSII tagged on the brick, the Convention Center's Shimmer Wall (the big silver oak) shimmering behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tsflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.ts-flk{animation:tsflick 2.6s infinite}.ts-flk2{animation-delay:.9s}' +
    '@keyframes tsglow{0%,100%{opacity:.4}50%{opacity:1}}.ts-glow{animation:tsglow 2.2s ease-in-out infinite}.ts-g2{animation-delay:-1.1s}.ts-g3{animation-delay:-.5s}' +
    '@keyframes tsball{0%{transform:translate(0,0) rotate(0deg)}100%{transform:translate(210px,-6px) rotate(720deg)}}.ts-ball{transform-box:fill-box;transform-origin:50% 50%;animation:tsball 2.4s ease-in-out infinite}' +
    '@keyframes tsarc{0%{transform:translateY(0)}50%{transform:translateY(-58px)}100%{transform:translateY(0)}}.ts-arc{animation:tsarc 2.4s ease-in-out infinite}' +
    '@keyframes tsrun{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.ts-run{animation:tsrun 2.4s ease-in-out infinite}' +
    '@keyframes tsbeamL{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(14deg)}}.ts-bl{transform-box:fill-box;transform-origin:50% 0%;animation:tsbeamL 4s ease-in-out infinite}' +
    '@keyframes tsbeamR{0%,100%{transform:rotate(16deg)}50%{transform:rotate(-14deg)}}.ts-br{transform-box:fill-box;transform-origin:50% 0%;animation:tsbeamR 4.4s ease-in-out infinite}' +
    '@keyframes tssway{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.ts-sw{transform-box:fill-box;transform-origin:50% 100%;animation:tssway 1.6s ease-in-out infinite}.ts-sw2{animation-delay:-.8s}' +
    '@keyframes tsheart{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.ts-ht{animation:tsheart 3.2s ease-out infinite}.ts-h2{animation-delay:-1.1s}.ts-h3{animation-delay:-2.2s}' +
    '@keyframes tsflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(6deg)}}.ts-flag{transform-box:fill-box;transform-origin:0% 50%;animation:tsflag 1.8s ease-in-out infinite}.ts-fl2{animation-delay:-.9s}' +
    '@keyframes tsshim{0%,100%{opacity:.35}50%{opacity:1}}.ts-sh{animation:tsshim 1.6s ease-in-out infinite}.ts-s2{animation-delay:-.4s}.ts-s3{animation-delay:-.8s}.ts-s4{animation-delay:-1.2s}' +
    '@keyframes tscar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.ts-car{animation:tscar 7s linear infinite}' +
    '@keyframes tsspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ts-sp{animation:tsspray 1.4s ease-out infinite}.ts-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, anchor) => '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || "middle") + '" ' + font + ' font-size="' + size + '" fill="' + fill + '">' + t + '</text>';
  const sign = (x, y, w, t) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt(t, x + w / 2, y + 16, 13, "#fff");
  const heart = (x, y, s, fill, cls) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path class="' + (cls || "") + '" d="M0 6C-6 -2 -14 2 -12 8C-10 13 -4 16 0 20C4 16 10 13 12 8C14 2 6 -2 0 6Z" fill="' + fill + '"/></g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "ts-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ICE = "#7fd4ff", PINK = "#ff5c8a", GOLD = "#ffd166", AGBLUE = "#004684", AGGOLD = "#fdb927", BRICK = "#9a4a34";

  /* 0. Raleigh Union Station, W Martin St */
  function tsstation() {
    const train = '<g class="anim-train"><rect x="20" y="150" width="300" height="56" rx="10" fill="#d9dde2" stroke="#7d858e" stroke-width="2"/>' +
      '<path d="M320 156q34 6 40 40v10H320z" fill="#c9ced4" stroke="#7d858e" stroke-width="2"/><path d="M326 162q22 4 28 26h-28z" fill="#1f2a36"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (32 + i * 40) + '" y="160" width="30" height="18" rx="3" fill="#1f2a36"/>').join("") +
      '<rect x="20" y="184" width="340" height="5" fill="' + "#1d4f91" + '"/><rect x="20" y="190" width="340" height="3" fill="#c8102e"/>' +
      '<circle cx="356" cy="198" r="3.5" fill="#fff6c2" class="ts-flk"/>' +
      [60, 110, 230, 280].map(x => '<circle cx="' + x + '" cy="208" r="8" fill="#222"/><circle cx="' + x + '" cy="208" r="3" fill="#9aa1a8"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ts0)"/>' +
      /* skyline behind */
      '<g fill="#5a6676" opacity=".7"><rect x="250" y="40" width="30" height="90"/><rect x="286" y="20" width="26" height="110"/><rect x="318" y="54" width="40" height="76"/><rect x="362" y="36" width="30" height="94"/></g>' +
      /* the station: brick base, tall glass hall, steel frame */
      '<rect x="20" y="70" width="230" height="66" fill="#8c4a35"/>' +
      Array.from({ length: 6 }, (_, r) => '<path d="M20 ' + (76 + r * 10) + 'h230" stroke="#7a3f2c" stroke-width="1"/>').join("") +
      '<rect x="40" y="30" width="190" height="86" fill="#9fc6dc" stroke="#3a4450" stroke-width="3"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (40 + i * 21) + ' 30v86" stroke="#3a4450" stroke-width="2"/>').join("") +
      '<path d="M40 58h190M40 88h190" stroke="#3a4450" stroke-width="2"/>' +
      '<path d="M30 30h210" stroke="#2c333b" stroke-width="6"/>' +
      '<rect class="ts-glow" x="60" y="62" width="40" height="22" fill="#ffe9a8" opacity=".6"/><rect class="ts-glow ts-g2" x="150" y="62" width="40" height="22" fill="#ffe9a8" opacity=".6"/>' +
      txt("RALEIGH UNION STATION", 135, 128, 11, "#f3eadc") +
      /* platform */
      '<rect x="0" y="136" width="400" height="10" fill="#b9b3a6"/><path d="M0 146h400" stroke="#f2c200" stroke-width="3"/>' +
      '<rect x="0" y="212" width="400" height="48" fill="#3c3a38"/><path d="M0 220h400M0 236h400" stroke="#8a8378" stroke-width="3"/>' +
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="222" width="10" height="12" fill="#5a4a3a"/>').join("") +
      train +
      /* station sign */
      '<rect x="262" y="96" width="5" height="50" fill="#2f2f2f"/><rect x="250" y="70" width="146" height="48" rx="3" fill="#111" stroke="#444" stroke-width="1"/>' +
      txt("Raleigh Union Station", 258, 88, 12, "#fff", "start") + '<text x="258" y="100" font-family="Helvetica, Arial, sans-serif" font-size="8.5" fill="#c9ced6">510 W Martin St</text>' +
      '<rect x="258" y="104" width="34" height="11" rx="5.5" fill="#1d4f91"/>' + txt("CAR", 275, 112.5, 8, "#fff") +
      '<rect x="296" y="104" width="34" height="11" rx="5.5" fill="#c8102e"/>' + txt("PDM", 313, 112.5, 8, "#fff"),
      sky("ts0", "#f4a259", "#5b6c8f"));
  }

  /* 1. Friday night lights: the spiral to the wide receiver */
  function tsfield() {
    const light = x => '<rect x="' + (x - 2) + '" y="20" width="4" height="96" fill="#5a5f66"/><rect x="' + (x - 22) + '" y="10" width="44" height="16" rx="2" fill="#2a2e34"/>' +
      Array.from({ length: 4 }, (_, i) => '<circle class="ts-flk' + (i % 2 ? " ts-flk2" : "") + '" cx="' + (x - 15 + i * 10) + '" cy="18" r="3.4" fill="#fffbe0"/>').join("") +
      '<path d="M' + (x - 20) + ' 26L' + (x - 70) + ' 150H' + (x + 70) + 'L' + (x + 20) + ' 26z" fill="#fffbe0" opacity=".08"/>';
    const yard = Array.from({ length: 9 }, (_, i) => '<path d="M' + (12 + i * 47) + ' 150L' + (i * 52 - 12) + ' 260" stroke="#e8f5e0" stroke-width="2" opacity=".75"/>').join("");
    const player = (x, y, jersey, cls) => '<g transform="translate(' + x + ' ' + y + ')"><g class="' + cls + '"><circle cx="0" cy="-30" r="7" fill="' + jersey + '" stroke="#fff" stroke-width="1.5"/>' +
      '<rect x="-8" y="-24" width="16" height="20" rx="4" fill="' + jersey + '"/><rect x="-7" y="-4" width="14" height="12" fill="#f2f2f2"/>' +
      '<path d="M-5 8l-4 14M5 8l5 14" stroke="#f2f2f2" stroke-width="4" stroke-linecap="round"/><path d="M8 -20l10 -12M-8 -20l-8 -10" stroke="' + jersey + '" stroke-width="4" stroke-linecap="round"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ts1)"/>' + stars(22) +
      '<path d="M0 118h400v32H0z" fill="#2c3440"/>' +
      Array.from({ length: 40 }, (_, i) => '<circle cx="' + (6 + i * 10) + '" cy="' + (128 + (i % 3) * 6) + '" r="3.2" fill="' + [ICE, "#c7ccd3", PINK][i % 3] + '" opacity=".75"/>').join("") +
      light(40) + light(360) +
      /* scoreboard */
      '<rect x="150" y="30" width="100" height="56" rx="3" fill="#121418" stroke="#444" stroke-width="2"/><rect x="196" y="86" width="8" height="32" fill="#4a4f56"/>' +
      txt("HOME", 175, 46, 9, "#fff") + txt("GUEST", 225, 46, 9, "#fff") + '<g class="ts-glow">' + txt("21", 175, 72, 20, "#ffb84a") + txt("14", 225, 72, 20, "#ffb84a") + '</g>' +
      '<path d="M0 150h400v110H0z" fill="#2f7a35"/>' + yard +
      '<path d="M0 150h400" stroke="#fff" stroke-width="3"/>' +
      player(110, 228, "#1d4f91", "") + player(330, 214, "#1d4f91", "ts-run") + player(300, 230, "#7a1f2a", "") +
      '<g class="ts-arc"><g class="ts-ball"><ellipse cx="122" cy="186" rx="10" ry="6" fill="#7a3f1d" stroke="#3a1d0c" stroke-width="1.2"/><path d="M116 186h12M119 184v4M122 184v4M125 184v4" stroke="#fff" stroke-width="1"/></g></g>',
      sky("ts1", "#070b18", "#1b2540"));
  }

  /* 2. On the stage: "singing your favorite song" */
  function tsstage() {
    const phones = Array.from({ length: 16 }, (_, i) => {
      const x = 14 + i * 25, y = 214 + (i % 3) * 8;
      return '<g class="ts-sw' + (i % 2 ? " ts-sw2" : "") + '"><path d="M' + x + ' ' + (y + 40) + 'L' + x + ' ' + (y + 10) + '" stroke="#1a1420" stroke-width="7" stroke-linecap="round"/><rect x="' + (x - 5) + '" y="' + (y - 4) + '" width="10" height="16" rx="2" fill="#2a2a30"/><rect class="ts-glow' + (i % 3 ? " ts-g2" : "") + '" x="' + (x - 3.5) + '" y="' + (y - 2.5) + '" width="7" height="12" rx="1" fill="#fff6d8"/></g>';
    }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ts2)"/>' +
      '<rect class="ts-bl" x="92" y="0" width="34" height="200" fill="url(#ts2b)"/><rect class="ts-br" x="274" y="0" width="34" height="200" fill="url(#ts2b)"/>' +
      '<rect x="60" y="0" width="280" height="10" fill="#1a1a22"/>' +
      Array.from({ length: 6 }, (_, i) => '<circle class="ts-flk' + (i % 2 ? " ts-flk2" : "") + '" cx="' + (90 + i * 44) + '" cy="10" r="5" fill="#fff3c4"/>').join("") +
      /* big screen behind */
      '<rect x="110" y="34" width="180" height="86" rx="4" fill="#120c24" stroke="#3a2a5a" stroke-width="3"/>' +
      heart(200, 60, 2.4, PINK, "ts-glow") + txt("FAVORITE SONG", 200, 112, 13, GOLD) +
      /* stage deck */
      '<path d="M40 170h320l24 18H16z" fill="#2a2030"/><rect x="16" y="188" width="368" height="10" fill="#151018"/>' +
      /* mic stand + figure silhouette (no face) */
      '<g transform="translate(110 0)"><path d="M200 170v-44" stroke="#bfc4cc" stroke-width="3"/><circle cx="200" cy="124" r="4" fill="#333"/>' +
      '<g fill="#0c0a10"><circle cx="222" cy="112" r="9"/><path d="M212 122h20l4 30h-28z"/><path d="M214 152l-4 18h8l4 -18zM230 152l4 18h-8l-4 -18z"/><path d="M212 126l-12 0" stroke="#0c0a10" stroke-width="5"/></g></g>' +
      heart(150, 150, .9, PINK, "ts-ht") + heart(255, 150, .8, ICE, "ts-ht ts-h2") + heart(380, 160, .7, PINK, "ts-ht ts-h3") + heart(80, 160, .7, ICE, "ts-ht ts-h2") +
      '<rect x="0" y="198" width="400" height="62" fill="#0e0a14"/>' + phones,
      sky("ts2", "#1a0f2e", "#3a1a40") + '<linearGradient id="ts2b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe8ff" stop-opacity=".55"/><stop offset="1" stop-color="#bfe8ff" stop-opacity="0"/></linearGradient>');
  }

  /* 3. NC A&T, Dudley Memorial Building: Aggie Pride */
  function tsaggie() {
    const bricks = (x, y, w, h) => Array.from({ length: Math.floor(h / 8) }, (_, r) => '<path d="M' + x + ' ' + (y + r * 8) + 'h' + w + '" stroke="#7d3a28" stroke-width="1"/>').join("");
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="16" height="24" fill="#f6efe0"/><rect x="' + (x + 2) + '" y="' + (y + 2) + '" width="12" height="20" fill="#2a3440"/><path d="M' + (x + 8) + ' ' + (y + 2) + 'v20M' + (x + 2) + ' ' + (y + 12) + 'h12" stroke="#f6efe0" stroke-width="1.5"/>';
    const banner = (x, color, cls) => '<rect x="' + x + '" y="150" width="3" height="80" fill="#3a3a3a"/><rect class="ts-flag ' + cls + '" x="' + (x + 3) + '" y="154" width="22" height="40" fill="' + color + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ts3)"/>' +
      '<g fill="#3d6b34"><circle cx="20" cy="150" r="34"/><circle cx="380" cy="150" r="34"/><circle cx="56" cy="160" r="24"/><circle cx="346" cy="160" r="24"/></g>' +
      /* cupola */
      '<rect x="186" y="34" width="28" height="30" fill="#f6f3ea" stroke="#c9c2b0" stroke-width="1.5"/><path d="M182 34h36l-18 -20z" fill="#e9e4d6"/><path d="M200 14v-8" stroke="#555" stroke-width="2"/>' +
      '<circle cx="200" cy="48" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/><path d="M200 48v-5M200 48l3.5 2" stroke="#333" stroke-width="1.4"/>' +
      '<rect x="176" y="64" width="48" height="12" fill="#f6f3ea" stroke="#c9c2b0" stroke-width="1.5"/>' +
      /* main block */
      '<rect x="70" y="76" width="260" height="140" fill="' + BRICK + '"/>' + bricks(70, 80, 260, 136) +
      '<rect x="66" y="72" width="268" height="8" fill="#f3efe4"/>' +
      [80, 104, 128, 256, 280, 304].map(x => win(x, 94) + win(x, 150)).join("") +
      /* white portico */
      '<path d="M146 84h108l-54 -22z" fill="#f6f3ea" stroke="#c9c2b0" stroke-width="1.5"/>' + '<rect x="146" y="84" width="108" height="10" fill="#f3efe4"/>' +
      [152, 174, 196, 218, 240].map(x => '<rect x="' + x + '" y="94" width="8" height="110" fill="#fbfaf5" stroke="#d8d2c2" stroke-width="1"/>').join("") +
      '<rect x="140" y="204" width="120" height="12" fill="#e2dccb"/><rect x="132" y="214" width="136" height="6" fill="#d2cbb8"/>' +
      '<rect x="186" y="160" width="28" height="44" fill="#3a2418"/>' +
      '<path d="M0 220h400v40H0z" fill="#4f8a3f"/><path d="M168 220h64l18 40h-100z" fill="#cfc8b4"/>' +
      banner(30, AGBLUE, "") + banner(350, AGGOLD, "ts-fl2") +
      '<rect x="120" y="230" width="160" height="22" rx="3" fill="' + AGBLUE + '" stroke="' + AGGOLD + '" stroke-width="2"/>' + txt("AGGIE PRIDE", 200, 246, 13, AGGOLD),
      sky("ts3", "#8cc4ec", "#e8f1f6"));
  }

  /* 4. S Salisbury St & W Lenoir St, the Shimmer Wall behind */
  function tscorner() {
    /* the Shimmer Wall: an oak tree drawn in small silver squares on the convention center's west wall */
    let shim = "";
    for (let r = 0; r < 10; r++) for (let c = 0; c < 22; c++) {
      const x = 104 + c * 9, y = 24 + r * 9, dx = c - 10.5, dy = r - 3.6;
      const crown = (dx * dx) / 110 + (dy * dy) / 16 < 1;
      const trunk = Math.abs(dx) < 1.6 && r > 5;
      if (crown || trunk) shim += '<rect class="ts-sh ts-s' + ((r * 3 + c) % 4 + 1) + '" x="' + x + '" y="' + y + '" width="7" height="7" fill="' + ((r + c) % 3 ? "#e8eef4" : "#b9c6d2") + '"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#ts4)"/>' + stars(16) +
      '<rect x="96" y="16" width="208" height="104" fill="#3d4756" stroke="#5a6676" stroke-width="2"/>' + shim +
      '<g fill="#2a3240"><rect x="0" y="60" width="90" height="60"/><rect x="310" y="44" width="90" height="76"/></g>' +
      [14, 34, 54, 324, 344, 364].map((x, i) => '<rect class="ts-glow' + (i % 2 ? " ts-g2" : "") + '" x="' + x + '" y="' + (70 + (i % 3) * 14) + '" width="10" height="8" fill="#ffd98a"/>').join("") +
      /* brick wall */
      '<rect x="0" y="120" width="400" height="110" fill="#7a3a2a"/>' +
      Array.from({ length: 13 }, (_, r) => '<path d="M0 ' + (126 + r * 8) + 'h400" stroke="#5f2c20" stroke-width="1"/>').join("") +
      tag("TOOSII", 150, 196, 46, PINK, -5) + tag("2X", 300, 214, 22, ICE, -10) + heart(110, 150, 1.3, ICE, "ts-glow") +
      '<g transform="translate(366 206)"><rect x="-6" y="-14" width="12" height="26" rx="3" fill="#ddd"/><rect x="-4" y="-20" width="8" height="7" fill="#e33"/><circle class="ts-sp" cx="0" cy="-26" r="3" fill="' + PINK + '" opacity=".8"/><circle class="ts-sp ts-sp2" cx="4" cy="-28" r="2.5" fill="' + PINK + '" opacity=".7"/></g>' +
      /* sidewalk + street */
      '<rect x="0" y="230" width="400" height="30" fill="#55565c"/><path d="M0 230h400" stroke="#a9a59a" stroke-width="4"/>' +
      '<g class="ts-car"><rect x="0" y="238" width="60" height="14" rx="5" fill="#1d4f91"/><rect x="10" y="232" width="34" height="10" rx="3" fill="#2a3a5a"/><circle cx="12" cy="252" r="5" fill="#111"/><circle cx="48" cy="252" r="5" fill="#111"/></g>' +
      /* green street signs */
      '<rect x="44" y="96" width="5" height="134" fill="#3a3a3a"/>' + sign(4, 92, 104, "S Salisbury St") + sign(10, 116, 86, "W Lenoir St"),
      sky("ts4", "#0b1024", "#26304a"));
  }

  window.SCENES = { tsstation, tsfield, tsstage, tsaggie, tscorner };
})();
