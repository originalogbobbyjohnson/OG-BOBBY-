/* ashleymcbryde scenes (Regions: More of the South / Genres: country; raised in Saddle, Fulton County, Arkansas, in the Ozarks by Mammoth Spring on the Missouri line). CSS classes prefixed amb- (the page's own anim-train is kept).
   Sources: Wikipedia "Ashley McBryde" (born Waldron AR 1983, raised in Saddle AR; high school marching band; French horn at Arkansas State; played Memphis clubs in college;
   moved to Nashville 2007, biker bars and open mics, band Deadhorse; Jalopies & Expensive Guitars 2016; Girl Going Nowhere 2018; Never Will 2020; Lindeville 2022);
   soundslikenashville.com (Saddle in the Ozarks, no cable till her teens so it was the radio; preacher dad; first song at 12; Deadhorse still backs her);
   railfanguides.us + Wikipedia "Mammoth Spring, Arkansas" (1886 Frisco depot, now a state-park museum, BNSF Thayer Sub trains roll right past; the spring, one of the largest in the world; the old dam).
   Every 9 is drawn as a path (round head + straight stem), never as a font glyph. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const BONE = "#f1ebe0", SCARLET = "#cc092f", TEAL = "#3fb7c4", AMBER = "#e8a33a", GREEN = "#0f6b3a";
  const css = '<style>' +
    '@keyframes ambglow{0%,100%{opacity:.45}50%{opacity:1}}.amb-glow{animation:ambglow 2.4s ease-in-out infinite}.amb-g2{animation-delay:-1.2s}' +
    '@keyframes ambcl{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.amb-cl{animation:ambcl 14s ease-in-out infinite alternate}' +
    '@keyframes ambrip{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.amb-rip{transform-box:fill-box;transform-origin:50% 50%;animation:ambrip 3s ease-out infinite}.amb-r2{animation-delay:-1s}.amb-r3{animation-delay:-2s}' +
    '@keyframes ambfall{0%{transform:translateY(0)}100%{transform:translateY(14px)}}.amb-fall{animation:ambfall .6s linear infinite}' +
    '@keyframes ambnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-58px);opacity:0}}.amb-nt{animation:ambnote 3.2s ease-out infinite}.amb-nt2{animation-delay:-1.1s}.amb-nt3{animation-delay:-2.2s}' +
    '@keyframes ambneon{0%,100%{opacity:1}48%{opacity:1}50%{opacity:.25}52%{opacity:1}}.amb-neon{animation:ambneon 2.6s linear infinite}' +
    '@keyframes ambbike{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.amb-bike{animation:ambbike 6s linear infinite}' +
    '@keyframes ambspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.amb-sp{animation:ambspray 1.4s ease-out infinite}.amb-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="' + GREEN + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="amb-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const bricks = (x, y, w, h, c, m) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let j = 0; j < h; j += 8) s += '<path d="M' + x + ' ' + (y + j) + 'h' + w + '" stroke="' + m + '" stroke-width=".8"/>'; return s; };
  const ozarks = (y, c) => '<path d="M0 ' + y + 'q40 -26 90 -8q40 -30 100 -4q50 -24 110 0q50 -20 100 2v60h-400z" fill="' + c + '"/>';
  /* US route shield with the number drawn as text (6 and 3, no 9) */
  const usShield = (x, y, n) => '<path d="M' + x + ' ' + y + 'h30q2 10 -2 18q-6 12 -13 16q-7 -4 -13 -16q-4 -8 -2 -18z" fill="#fff" stroke="#111" stroke-width="2"/><text x="' + (x + 15) + '" y="' + (y + 20) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#111">' + n + '</text>';

  /* ROOM 0: US 63 at the Missouri line, the green MAMMOTH SPRING sign, a freight rolling past the old 1886 Frisco depot */
  function ambstation() {
    return svg(
      '<rect width="400" height="260" fill="url(#amb1)"/>' +
      '<g class="amb-cl"><ellipse cx="90" cy="30" rx="42" ry="8" fill="#fff" opacity=".55"/><ellipse cx="290" cy="22" rx="40" ry="7" fill="#fff" opacity=".45"/></g>' +
      ozarks(96, "#3e6a3a") +
      /* depot: red board-and-batten, deep eaves, green trim */
      '<path d="M150 104h150l12 -18h-174z" fill="#5a3a2a"/><rect x="156" y="104" width="138" height="38" fill="#a8432e"/>' +
      Array.from({ length: 17 }, (_, i) => '<path d="M' + (160 + i * 8) + ' 104v38" stroke="#7a2e20" stroke-width="1"/>').join("") +
      '<rect x="176" y="112" width="14" height="20" fill="#2a3a4a" class="amb-glow"/><rect x="214" y="112" width="20" height="30" fill="#2a4a2a"/><rect x="258" y="112" width="14" height="20" fill="#2a3a4a" class="amb-glow amb-g2"/>' +
      /* rails */
      '<rect x="0" y="142" width="400" height="10" fill="#6a5a4a"/><path d="M0 146h400M0 150h400" stroke="#9aa0a6" stroke-width="1.5"/>' +
      /* freight train sliding in */
      '<g class="anim-train"><rect x="10" y="118" width="96" height="26" rx="3" fill="#e86a1a" stroke="#222" stroke-width="1.5"/><rect x="80" y="110" width="26" height="14" fill="#e86a1a" stroke="#222" stroke-width="1.5"/><rect x="84" y="113" width="18" height="8" fill="#2a3a4a"/><rect x="10" y="134" width="96" height="4" fill="#222"/>' +
      '<rect x="-80" y="120" width="86" height="24" fill="#5a6a7a" stroke="#222" stroke-width="1.5"/><rect x="-170" y="120" width="86" height="24" fill="#7a3a2a" stroke="#222" stroke-width="1.5"/>' +
      '<rect x="104" y="124" width="4" height="4" fill="#ffe28a" class="amb-glow"/></g>' +
      /* road + green sign + US 63 shield */
      '<rect x="0" y="152" width="400" height="108" fill="#3a3a3e"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 54) + '" y="208" width="30" height="4" fill="#e8d27a"/>').join("") +
      '<rect x="324" y="96" width="4" height="120" fill="#777"/><rect x="368" y="96" width="4" height="120" fill="#777"/>' +
      '<rect x="296" y="52" width="100" height="48" rx="4" fill="' + GREEN + '" stroke="#fff" stroke-width="1.5"/><text x="346" y="72" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">MAMMOTH</text><text x="346" y="88" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">SPRING</text>' +
      usShield(250, 60, "63") + '<rect x="263" y="94" width="4" height="122" fill="#777"/>',
      sky("amb1", "#4a8ac8", "#f6d8a8"));
  }

  /* ROOM 1: the spring itself, deep blue-green pool boiling up, the old stone dam spilling, the depot roof across the water */
  function ambspring() {
    return svg(
      '<rect width="400" height="260" fill="url(#amb2)"/>' +
      ozarks(70, "#2e5a32") + '<path d="M0 100q120 -10 200 0q100 10 200 -4v20h-400z" fill="#3e7a3a"/>' +
      '<path d="M300 92h80l8 -10h-96z" fill="#5a3a2a"/><rect x="304" y="92" width="72" height="16" fill="#a8432e"/>' +
      '<rect x="0" y="110" width="400" height="100" fill="#3e7a3a"/>' +
      /* pool */
      '<ellipse cx="190" cy="160" rx="200" ry="56" fill="#1e7f8e"/><ellipse cx="170" cy="162" rx="110" ry="30" fill="#2aa3b0"/>' +
      '<ellipse class="amb-rip" cx="160" cy="160" rx="30" ry="9" fill="none" stroke="#bff0f4" stroke-width="2"/><ellipse class="amb-rip amb-r2" cx="160" cy="160" rx="30" ry="9" fill="none" stroke="#bff0f4" stroke-width="2"/><ellipse class="amb-rip amb-r3" cx="160" cy="160" rx="30" ry="9" fill="none" stroke="#bff0f4" stroke-width="2"/>' +
      /* dam with water spilling */
      '<rect x="0" y="206" width="400" height="14" fill="#9a9284" stroke="#6a6458" stroke-width="1"/>' +
      '<g class="amb-fall">' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (8 + i * 20) + ' 220v14" stroke="#d8f4f8" stroke-width="3" opacity=".8"/>').join("") + '</g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#2a8a96"/>' +
      /* trout + bobber */
      '<path d="M260 150q14 -8 28 0q-14 8 -28 0z" fill="#8aa07a"/><path d="M288 150l8 -5v10z" fill="#8aa07a"/>' +
      '<circle cx="90" cy="170" r="5" fill="' + SCARLET + '"/><path d="M85 170h10" stroke="#fff" stroke-width="2"/>',
      sky("amb2", "#6aaee0", "#f4eed8"));
  }

  /* ROOM 2: Arkansas State, scarlet and black, a gleaming French horn on a stand under the stadium lights, notes rising */
  function ambband() {
    return svg(
      '<rect width="400" height="260" fill="url(#amb3)"/>' +
      '<rect x="40" y="20" width="4" height="120" fill="#777"/><rect x="26" y="12" width="32" height="12" fill="#ddd"/><path d="M30 24l-24 116h76l-24 -116z" fill="#fff8d0" opacity=".12" class="amb-glow"/>' +
      '<rect x="356" y="20" width="4" height="120" fill="#777"/><rect x="342" y="12" width="32" height="12" fill="#ddd"/>' +
      /* stands in scarlet */
      Array.from({ length: 6 }, (_, i) => '<rect x="0" y="' + (60 + i * 12) + '" width="400" height="10" fill="' + (i % 2 ? "#2a2a2a" : SCARLET) + '" opacity=".85"/>').join("") +
      '<rect x="0" y="134" width="400" height="126" fill="#2f7a3a"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 134v126" stroke="#fff" stroke-width="1.5" opacity=".5"/>').join("") +
      /* stand */
      '<path d="M200 240l-24 0l24 -54l24 54z" fill="none" stroke="#333" stroke-width="3"/>' +
      /* French horn: coiled brass + bell */
      '<circle cx="200" cy="160" r="34" fill="none" stroke="#e8b851" stroke-width="7"/><circle cx="200" cy="160" r="20" fill="none" stroke="#d9a441" stroke-width="5"/>' +
      '<path d="M226 138q26 -20 46 -6l18 -14v54l-18 -14q-20 12 -40 -4" fill="#e8b851" stroke="#9a6a1a" stroke-width="1.5"/><ellipse cx="290" cy="145" rx="6" ry="27" fill="#c88a2a"/>' +
      '<path d="M178 186l-16 12" stroke="#e8b851" stroke-width="4"/>' +
      note(120, 120, "#fff") + note(300, 110, AMBER, "amb-nt2") + note(80, 150, "#fff", "amb-nt3"),
      sky("amb3", "#0c1022", "#2a1a2a"));
  }

  /* ROOM 3: a Nashville biker bar, neon LIVE MUSIC, bikes rolling by, the house band on a little stage inside */
  function ambbar() {
    return svg(
      '<rect width="400" height="260" fill="url(#amb4)"/>' +
      '<rect x="40" y="60" width="320" height="150" fill="#4a3a2e" stroke="#2a1e16" stroke-width="2"/><path d="M30 60h340l-10 -16h-320z" fill="#2a1e16"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M40 ' + (70 + i * 12) + 'h320" stroke="#3a2c22" stroke-width="1"/>').join("") +
      '<rect x="120" y="22" width="160" height="28" rx="4" fill="#111" stroke="#555"/><text class="amb-neon" x="200" y="42" text-anchor="middle" ' + font + ' font-size="16" fill="#ff4a6a">LIVE MUSIC</text>' +
      /* window into the stage */
      '<rect x="80" y="90" width="150" height="80" fill="#1a1022"/><rect x="80" y="150" width="150" height="20" fill="#5a3a2a"/>' +
      '<ellipse cx="155" cy="100" rx="60" ry="10" fill="#ffd27a" opacity=".25" class="amb-glow"/>' +
      '<path d="M120 150v-30M150 150v-34M190 150v-30" stroke="#888" stroke-width="2"/><rect x="186" y="128" width="20" height="20" rx="6" fill="#7a3a2a"/>' +
      '<ellipse cx="146" cy="138" rx="9" ry="11" fill="#c8843a" stroke="#5a3a1a"/><rect x="144" y="108" width="4" height="24" fill="#5a3a1a"/>' +
      note(110, 110, "#ffd27a") + note(210, 104, "#fff", "amb-nt2") +
      '<rect x="262" y="110" width="50" height="100" fill="#2a1e16"/><circle cx="302" cy="160" r="3" fill="' + AMBER + '"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#3a3a3e"/>' +
      /* bike rolling by */
      '<g class="amb-bike"><circle cx="20" cy="236" r="12" fill="none" stroke="#111" stroke-width="5"/><circle cx="72" cy="236" r="12" fill="none" stroke="#111" stroke-width="5"/><path d="M20 236l18 -18h22l12 18M38 218l-6 -8h10" stroke="#9aa0a6" stroke-width="4" fill="none"/><rect x="40" y="212" width="20" height="8" rx="3" fill="' + SCARLET + '"/></g>',
      sky("amb4", "#0e0c1c", "#3a2440"));
  }

  /* ROOM 4: Main St and Hwy 63 in Mammoth Spring, her name on the wall, the spring and the old dam behind */
  function ambcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#amb5)"/>' +
      ozarks(84, "#2e5a32") +
      '<ellipse cx="250" cy="130" rx="170" ry="24" fill="#1e7f8e"/><ellipse class="amb-rip" cx="250" cy="128" rx="30" ry="6" fill="none" stroke="#bff0f4" stroke-width="2"/><ellipse class="amb-rip amb-r2" cx="250" cy="128" rx="30" ry="6" fill="none" stroke="#bff0f4" stroke-width="2"/>' +
      '<rect x="90" y="140" width="320" height="10" fill="#9a9284"/><g class="amb-fall">' + Array.from({ length: 15 }, (_, i) => '<path d="M' + (96 + i * 20) + ' 150v8" stroke="#d8f4f8" stroke-width="2.5"/>').join("") + '</g>' +
      /* wall with the tags */
      bricks(0, 150, 400, 70, "#9a4a32", "#6a2e1e") +
      tag("ASHLEY McBRYDE", 64, 206, 22, BONE, -4) + tag("DEADHORSE", 248, 176, 14, AMBER, -6) + tag("NEVER WILL", 290, 212, 14, TEAL, -3) +
      '<g class="amb-sp"><circle cx="286" cy="200" r="2" fill="' + AMBER + '"/><circle cx="292" cy="194" r="1.5" fill="' + AMBER + '"/></g><g class="amb-sp amb-sp2"><circle cx="280" cy="206" r="1.5" fill="' + BONE + '"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#8a8478"/><path d="M0 222h400" stroke="#b8b0a2" stroke-width="2"/>' +
      '<rect x="44" y="70" width="5" height="152" fill="#6a6e72"/>' + sign(4, 70, 90, "MAIN ST") + sign(16, 96, 76, "HWY 63"),
      sky("amb5", "#1c2240", "#e88a4a"));
  }

  window.SCENES = { ambstation: ambstation, ambspring: ambspring, ambband: ambband, ambbar: ambbar, ambcorner: ambcorner };
})();
