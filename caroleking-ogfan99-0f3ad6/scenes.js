/* caroleking scenes (NYC map, Brooklyn: born 1942; grew up at 2466 E 24th St in Sheepshead Bay until 1959; Shell Bank Junior High and
   James Madison High School; wrote hits with Gerry Goffin for Aldon Music at 1650 Broadway; met James Taylor at a Greenwich Village
   coffeehouse on W 3rd St in 1967). CSS classes prefixed ckg- (the page's own anim-train is kept).
   1 Sheepshead Bay on the B and Q: the Brighton line up on its embankment, the black sign with the orange B and yellow Q, the Q sliding in.
   2 Sheepshead Bay piers on Emmons Av: fishing boats bobbing at the piers, the white wooden footbridge to Manhattan Beach, gulls.
   3 1650 Broadway: a little songwriter's cubicle with an upright piano, a lyric pad, Broadway lights out the window, notes rising.
   4 W 3rd St, Greenwich Village, 1967: the folk coffeehouse storefront at night, a guitar in the window, lamps flickering.
   5 Bedford Av & Quentin Rd: green signs, CAROLE KING tagged on the wall, James Madison High School's red brick and white cupola behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ckgflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.95}}.ckg-flk{animation:ckgflick 2.6s infinite}' +
    '@keyframes ckgbob{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(3px) rotate(1.5deg)}}.ckg-bob{transform-box:fill-box;transform-origin:50% 100%;animation:ckgbob 2.4s ease-in-out infinite}.ckg-bob2{animation-delay:-1.2s}' +
    '@keyframes ckgwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.ckg-wave{animation:ckgwave 2.8s ease-in-out infinite}.ckg-wave2{animation-delay:-1.4s}' +
    '@keyframes ckggull{0%{transform:translate(-30px,0)}50%{transform:translate(210px,-10px)}100%{transform:translate(440px,0)}}.ckg-gull{animation:ckggull 11s linear infinite}.ckg-gull2{animation-delay:-5.5s}' +
    '@keyframes ckgnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(16px,-60px);opacity:0}}.ckg-note{animation:ckgnote 3s ease-out infinite}.ckg-note2{animation-delay:-1s}.ckg-note3{animation-delay:-2s}' +
    '@keyframes ckgcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.ckg-car{animation:ckgcar 7s linear infinite}' +
    '@keyframes ckgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ckg-sp{animation:ckgspray 1.4s ease-out infinite}.ckg-sp2{animation-delay:.45s}' +
    '@keyframes ckgsnow{from{transform:translateY(-20px)}to{transform:translateY(270px)}}.ckg-rain{animation:ckgsnow 2.2s linear infinite}.ckg-rain2{animation-delay:-1.1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + font + ' font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const sign = (x, y, w, t) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt(t, x + w / 2, y + 16, 13, "#fff");
  const person = (x, y, col) => '<g><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const ORANGE = "#ff6319", YELLOW = "#fccc0a", AMBER = "#f2b46a", SAGE = "#7a9a5a", CREAM = "#e8d8b8", RUST = "#b8582a";

  /* 1. Sheepshead Bay (B, Q) on the Brighton line embankment */
  function ckstation() {
    let win = "";
    for (let x = 34; x < 270; x += 36) win += '<rect x="' + x + '" y="98" width="24" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    let houses = "";
    [[0, 96, 70, "#c9a27e"], [74, 108, 60, "#e0c8a0"], [300, 92, 56, "#b98a6e"], [356, 104, 44, "#d6b48a"]].forEach(([x, y, w, c]) => {
      houses += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (150 - y) + '" fill="' + c + '"/><path d="M' + (x - 4) + ' ' + y + 'l' + (w / 2 + 4) + ' -16l' + (w / 2 + 4) + ' 16z" fill="#7a4a3a"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#cks1)"/>' +
      '<g class="ckg-gull"><path d="M0 34q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>' + houses +
      '<rect x="0" y="22" width="400" height="10" fill="#5a4a3a"/><path d="M0 32h400" stroke="#3a2e24" stroke-width="2"/>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="32" width="6" height="110" fill="#5a4a3a"/>').join("") +
      '<rect x="80" y="40" width="240" height="30" rx="3" fill="#111"/><rect x="80" y="40" width="240" height="3" fill="#fff"/>' +
      '<text x="92" y="61" ' + font + ' font-size="15" fill="#fff">Sheepshead Bay</text>' + bullet(274, 56, "B", ORANGE) + bullet(300, 56, "Q", YELLOW, true) +
      '<g class="anim-train">' +
        '<rect x="10" y="86" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="94" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 130, "Q", YELLOW, true) +
        '<rect x="10" y="124" width="276" height="4" fill="' + YELLOW + '"/><circle cx="22" cy="134" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="142" width="400" height="8" fill="#e8b40c"/><rect x="0" y="150" width="400" height="20" fill="#7a7670"/>' +
      '<path d="M0 170h400v34H0z" fill="#9a958a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 40) + ' 170v34" stroke="#857f74" stroke-width="2"/>').join("") +
      txt("BRIGHTON LINE · SHEEPSHEAD BAY RD", 200, 192, 10, "#2a2620", 'letter-spacing="2"') +
      person(340, 118, "#2a2a2a") + person(362, 120, "#6a4a3a") +
      '<rect x="0" y="204" width="400" height="56" fill="#4c4d52"/><path d="M0 232h400" stroke="#e8e2d0" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="ckg-car"><rect x="0" y="238" width="44" height="12" rx="3" fill="' + AMBER + '"/><circle cx="10" cy="251" r="3.5" fill="#111"/><circle cx="34" cy="251" r="3.5" fill="#111"/></g>',
      sky("cks1", "#8fc6ea", "#f6e3c4"));
  }

  /* 2. Sheepshead Bay piers on Emmons Av, the footbridge to Manhattan Beach */
  function ckpiers() {
    const boat = (x, y, hull, cls) => '<g class="ckg-bob ' + cls + '"><path d="M' + x + ' ' + y + 'h86l-10 18h-68z" fill="' + hull + '" stroke="#1a2a3a" stroke-width="1.5"/><rect x="' + (x + 24) + '" y="' + (y - 22) + '" width="34" height="22" fill="#f4f4f0" stroke="#1a2a3a" stroke-width="1.2"/>' +
      '<rect x="' + (x + 28) + '" y="' + (y - 18) + '" width="10" height="8" fill="#5a8ab0"/><rect x="' + (x + 44) + '" y="' + (y - 18) + '" width="10" height="8" fill="#5a8ab0"/><path d="M' + (x + 62) + ' ' + y + 'v-40" stroke="#333" stroke-width="2"/><path d="M' + (x + 62) + ' ' + (y - 40) + 'l-30 18" stroke="#333" stroke-width="1"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cks2)"/>' +
      '<rect x="0" y="70" width="400" height="20" fill="#d9c8a8"/>' + [10, 70, 140, 220, 300, 350].map((x, i) => '<rect x="' + x + '" y="' + (56 + (i % 3) * 4) + '" width="' + (40 + (i % 2) * 16) + '" height="' + (18 - (i % 3) * 4) + '" fill="#c9b08a"/>').join("") +
      /* the white footbridge */
      '<path d="M120 96q80 -40 160 0" stroke="#f8f8f4" stroke-width="5" fill="none"/>' + Array.from({ length: 9 }, (_, i) => { const x = 128 + i * 18; const yy = 96 - 40 * (1 - Math.pow((x - 200) / 80, 2)) * 0.5 - 2; return '<path d="M' + x + ' ' + yy.toFixed(1) + 'v' + (100 - yy).toFixed(1) + '" stroke="#f8f8f4" stroke-width="2"/>'; }).join("") +
      '<path d="M120 102q80 -40 160 0" stroke="#e8e8e0" stroke-width="2" fill="none"/>' +
      '<rect x="0" y="100" width="400" height="160" fill="#3a6a8a"/>' +
      '<g class="ckg-wave"><path d="M0 120q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#6aa0c0" stroke-width="2" fill="none"/></g>' +
      '<g class="ckg-wave ckg-wave2"><path d="M0 170q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#6aa0c0" stroke-width="2" fill="none"/></g>' +
      boat(30, 150, "#e8e4d8", "") + boat(250, 160, "#c0392b", "ckg-bob2") +
      '<rect x="0" y="206" width="400" height="12" fill="#8a6a4a"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (10 + i * 42) + '" y="206" width="8" height="54" fill="#6a4a2a"/>').join("") +
      '<rect x="0" y="218" width="400" height="42" fill="#2a4a62" opacity=".6"/>' +
      '<rect x="280" y="18" width="110" height="24" rx="3" fill="#111"/>' + txt("EMMONS AV", 335, 35, 12, AMBER, 'letter-spacing="2"') +
      '<g class="ckg-gull"><path d="M0 46q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g><g class="ckg-gull ckg-gull2"><path d="M0 30q5 -5 10 0q5 -5 10 0" stroke="#fff" stroke-width="2" fill="none"/></g>',
      sky("cks2", "#7ab8e0", "#f2e2c4"));
  }

  /* 3. 1650 Broadway: a songwriter's cubicle with an upright piano */
  function ck1650() {
    let lights = "";
    for (let i = 0; i < 14; i++) lights += '<rect class="ckg-flk" x="' + (226 + (i % 7) * 20) + '" y="' + (34 + Math.floor(i / 7) * 26) + '" width="12" height="16" fill="' + ["#f6d98a", "#e04a6a", "#7fc8ff"][i % 3] + '" style="animation-delay:-' + (i * 0.3) + 's"/>';
    let keys = "";
    for (let i = 0; i < 22; i++) keys += '<rect x="' + (60 + i * 8) + '" y="160" width="7.5" height="22" fill="#fafafa" stroke="#999" stroke-width=".5"/>';
    for (let i = 0; i < 22; i++) if ([0, 1, 3, 4, 5].includes(i % 7)) keys += '<rect x="' + (65 + i * 8) + '" y="160" width="5" height="13" fill="#111"/>';
    return svg(
      '<rect width="400" height="260" fill="#6a5a48"/><rect x="0" y="0" width="400" height="200" fill="#7a6a56"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 34) + ' 0v200" stroke="#6e5e4c" stroke-width="2"/>').join("") +
      '<rect x="216" y="22" width="160" height="70" fill="#141a3a" stroke="#3a2e22" stroke-width="5"/>' + lights + '<path d="M296 22v70M216 57h160" stroke="#3a2e22" stroke-width="3"/>' +
      '<rect x="40" y="96" width="200" height="66" rx="3" fill="#3a2214"/><rect x="48" y="104" width="184" height="30" fill="#4a2c1a"/>' +
      '<rect x="110" y="110" width="60" height="20" fill="#f4eedc" transform="rotate(-4 140 120)"/>' +
      '<path d="M116 116h40M116 121h46M116 126h30" stroke="#5a4a3a" stroke-width="1" transform="rotate(-4 140 120)"/>' +
      '<rect x="52" y="156" width="192" height="4" fill="#2a160c"/>' + keys +
      '<rect x="40" y="182" width="200" height="40" fill="#3a2214"/><rect x="50" y="222" width="10" height="20" fill="#2a160c"/><rect x="220" y="222" width="10" height="20" fill="#2a160c"/>' +
      '<rect x="96" y="228" width="88" height="10" rx="3" fill="#5a3a22"/><rect x="104" y="238" width="6" height="16" fill="#3a2214"/><rect x="170" y="238" width="6" height="16" fill="#3a2214"/>' +
      '<rect x="266" y="150" width="70" height="60" fill="#c9b08a"/><rect x="272" y="140" width="22" height="16" fill="#e04a2a" opacity=".8"/>' +
      '<path d="M310 150v-24h10v24" fill="#5a4a3a"/><circle cx="315" cy="122" r="7" fill="#fff6c2" class="ckg-flk"/>' +
      '<rect x="20" y="20" width="150" height="26" rx="3" fill="#111" stroke="' + AMBER + '" stroke-width="1.5"/>' + txt("1650 BROADWAY", 95, 38, 13, AMBER, 'letter-spacing="2"') +
      '<g class="ckg-note"><text x="120" y="96" font-size="18" fill="' + AMBER + '">&#9834;</text></g><g class="ckg-note ckg-note2"><text x="150" y="92" font-size="18" fill="' + CREAM + '">&#9835;</text></g><g class="ckg-note ckg-note3"><text x="186" y="96" font-size="16" fill="' + SAGE + '">&#9834;</text></g>',
      "");
  }

  /* 4. W 3rd St, Greenwich Village 1967: folk coffeehouse at night */
  function ckvillage() {
    let bricks = "";
    for (let r = 0; r < 12; r++) for (let i = 0; i < 14; i++) bricks += '<rect x="' + (i * 30 - (r % 2) * 15) + '" y="' + (20 + r * 11) + '" width="28" height="9" fill="' + ((r + i) % 3 ? "#7a3a2a" : "#6a3020") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cks4)"/>' + bricks +
      '<rect x="40" y="56" width="320" height="30" fill="#1a1a1a" stroke="' + AMBER + '" stroke-width="2"/>' + txt("COFFEE · FOLK MUSIC TONIGHT", 200, 77, 13, AMBER, 'letter-spacing="1"') +
      '<path d="M40 86h320l-14 18H54z" fill="' + SAGE + '"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (56 + i * 40) + ' 86v18" stroke="#5a7a3a" stroke-width="10"/>').join("") +
      '<rect x="60" y="110" width="130" height="80" fill="#f6d98a" opacity=".85" class="ckg-flk"/><rect x="60" y="110" width="130" height="80" fill="none" stroke="#2a1a10" stroke-width="4"/>' +
      '<g transform="rotate(-14 125 160)"><ellipse cx="125" cy="168" rx="14" ry="17" fill="#c88a3a" stroke="#6a3a10" stroke-width="2"/><circle cx="125" cy="164" r="4.5" fill="#3a1a08"/><rect x="121.5" y="112" width="7" height="44" fill="#6a3a10"/></g>' +
      '<rect x="214" y="110" width="44" height="90" fill="#3a1a10"/><circle cx="250" cy="156" r="2.5" fill="' + AMBER + '"/>' +
      '<rect x="270" y="110" width="80" height="80" fill="#f6d98a" opacity=".75"/><rect x="270" y="110" width="80" height="80" fill="none" stroke="#2a1a10" stroke-width="4"/>' +
      [290, 330].map(x => '<circle cx="' + x + '" cy="160" r="8" fill="#3a2a1a"/><rect x="' + (x - 9) + '" y="168" width="18" height="22" rx="6" fill="#3a2a1a"/>').join("") +
      '<rect x="0" y="200" width="400" height="16" fill="#8a8580"/><rect x="0" y="216" width="400" height="44" fill="#2e2e34"/>' +
      '<rect x="16" y="120" width="5" height="80" fill="#222"/><circle cx="18" cy="116" r="8" fill="#ffe9a8" class="ckg-flk"/>' +
      '<rect x="370" y="120" width="5" height="80" fill="#222"/>' + sign(296, 126, 96, "W 3 St") +
      '<g class="ckg-car"><rect x="0" y="232" width="58" height="14" rx="5" fill="#d8d0b0"/><rect x="12" y="224" width="32" height="10" rx="3" fill="#d8d0b0"/><circle cx="13" cy="246" r="5" fill="#111"/><circle cx="45" cy="246" r="5" fill="#111"/></g>' +
      '<g class="ckg-note"><text x="200" y="104" font-size="16" fill="' + CREAM + '">&#9834;</text></g>',
      sky("cks4", "#0e1430", "#2a2448"));
  }

  /* 5. Bedford Av & Quentin Rd: James Madison High School behind */
  function ckcorner() {
    let wins = "";
    for (let r = 0; r < 2; r++) for (let i = 0; i < 12; i++) if (i < 5 || i > 6) wins += '<rect x="' + (16 + i * 31) + '" y="' + (78 + r * 26) + '" width="14" height="18" fill="#3a4a5a" stroke="#f4f0e4" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cks5)"/>' +
      '<rect x="190" y="14" width="20" height="10" fill="#f4f0e4"/><path d="M200 2l8 12h-16z" fill="#7a9a8a"/>' +
      '<rect x="182" y="24" width="36" height="22" fill="#f4f0e4"/><circle cx="200" cy="35" r="7" fill="#fff" stroke="#3a3a3a" stroke-width="1.5"/><path d="M200 35v-5M200 35h4" stroke="#222" stroke-width="1.2"/>' +
      '<rect x="174" y="46" width="52" height="16" fill="#f4f0e4"/><path d="M168 62h64l-32 -10z" fill="#e8e2d2"/>' +
      '<rect x="6" y="62" width="388" height="78" fill="#a8452e"/><rect x="6" y="62" width="388" height="5" fill="#f4f0e4"/>' + wins +
      '<rect x="168" y="70" width="64" height="70" fill="#b04e36"/><path d="M174 140v-40h52v40" fill="#f4f0e4"/><path d="M182 140v-32h36v32" fill="#5a3a22"/>' +
      [176, 190, 210, 224].map(x => '<rect x="' + (x - 2) + '" y="74" width="4" height="26" fill="#f4f0e4"/>').join("") +
      '<rect x="0" y="136" width="400" height="88" fill="#6b6f78"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#5e626a" stroke-width="1"/>').join("") +
      tag("CAROLE KING", 16, 196, 32, AMBER, -6) + tag("SO FAR AWAY", 200, 214, 16, CREAM, -4) + tag("CAROLE K", 30, 216, 15, "#9ad07a", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="380" y="100" width="6" height="124" fill="#2f2f2f"/>' + sign(270, 102, 124, "Bedford Av") + sign(270, 128, 124, "Quentin Rd") +
      '<g class="ckg-sp"><circle cx="258" cy="172" r="3" fill="' + AMBER + '" opacity=".7"/></g><g class="ckg-sp ckg-sp2"><circle cx="264" cy="166" r="2" fill="' + AMBER + '" opacity=".6"/></g>' +
      '<g class="ckg-car"><rect x="0" y="238" width="44" height="12" rx="3" fill="' + SAGE + '"/><circle cx="10" cy="251" r="3.5" fill="#111"/><circle cx="34" cy="251" r="3.5" fill="#111"/></g>',
      sky("cks5", "#6a8ac0", "#f2c48a"));
  }

  window.SCENES = { ckstation: ckstation, ckpiers: ckpiers, ck1650: ck1650, ckvillage: ckvillage, ckcorner: ckcorner };
})();
