/* blackstreet scenes (NYC map, Manhattan: Harlem - Teddy Riley grew up in the St. Nicholas Houses, W 127th-131st between Adam Clayton Powell Jr Blvd and Frederick Douglass Blvd; the group was founded in Harlem in 1991). 400 x 260 SVGs.
   CSS classes and ids prefixed bst- (the page's own anim-train is kept on the bus).
   0 Adam Clayton Powell Jr Blvd & W 129 St: the M2 bus pulling up to the stop, the St. Nicholas Houses' brick towers behind, the tree median down the boulevard.
   1 The studio: Teddy's board in Virginia Beach where the records were cut - faders, bouncing meters, keys, the vocal booth with four mics.
   2 Blackstreet Blvd, Paterson NJ: the city renamed Presidential Blvd for the group (West Broadway to Temple St) - the new green sign, ribbon, balloons, old brick mills.
   3 Radio City Music Hall, Feb 25 1998: the 40th Grammys, the night Blackstreet won a Grammy - the tall red vertical sign, the chase-light marquee, searchlights.
   4 W 129 St and Adam Clayton Powell Jr Blvd: green signs, BLACKSTREET tagged on the wall, the St. Nicholas Houses towers behind. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#f5c542", RED = "#e63946", ICE = "#7fd1ff", BRICK = "#8e4a36", BUS = "#0039a6";
  const css = '<style>' +
    '@keyframes bstnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(14px,-70px);opacity:0}}.bst-note{animation:bstnote 3.2s ease-out infinite}.bst-n2{animation-delay:-1.1s}.bst-n3{animation-delay:-2.2s}' +
    '@keyframes bstflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.bst-flk{animation:bstflick 2.4s infinite}.bst-flk2{animation-delay:-1.2s}' +
    '@keyframes bstmeter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(.9)}50%{transform:scaleY(.55)}75%{transform:scaleY(1)}}.bst-meter{transform-box:fill-box;transform-origin:50% 100%;animation:bstmeter .9s ease-in-out infinite}.bst-m2{animation-delay:-.3s}.bst-m3{animation-delay:-.6s}' +
    '@keyframes bstpulse{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.bst-pulse{transform-box:fill-box;transform-origin:50% 50%;animation:bstpulse .45s ease-in-out infinite}' +
    '@keyframes bstfloat{0%{transform:translateY(0)}100%{transform:translateY(-300px)}}.bst-float{animation:bstfloat 9s linear infinite}.bst-f2{animation-delay:-3s}.bst-f3{animation-delay:-6s}' +
    '@keyframes bstsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.bst-sweep{transform-box:fill-box;transform-origin:50% 100%;animation:bstsweep 5s ease-in-out infinite}.bst-sw2{animation-delay:-2.5s}' +
    '@keyframes bstchase{0%,100%{opacity:1}50%{opacity:.2}}.bst-chase{animation:bstchase .8s steps(1) infinite}.bst-c2{animation-delay:-.4s}' +
    '@keyframes bstcar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.bst-car{animation:bstcar 8s linear infinite}.bst-car2{animation-delay:-4s}' +
    '@keyframes bstspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.bst-spin{transform-box:fill-box;transform-origin:50% 50%;animation:bstspin 1.8s linear infinite}' +
    '@keyframes bstspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.bst-sp{animation:bstspray 1.4s ease-out infinite}.bst-spb{animation-delay:.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* text with every 9 drawn by hand (round head + straight stem, never a hooked 9). Widths estimated for bold Helvetica. */
  const CW = { " ": .278, "W": .944, "S": .667, "t": .333, "F": .611, "E": .667, "B": .722, "1": .556, "5": .556, "0": .556, "2": .556, "3": .556, "4": .556, "6": .556, "7": .556, "8": .556, "9": .556, ".": .278, "-": .333, "'": .238, "·": .278 };
  const tw = (s, sz) => [...s].reduce((a, ch) => a + (CW[ch] || .6) * sz, 0);
  const nine = (x, y, sz, c) => { const w = sz * 0.15, r = sz * 0.175, cx = x + sz * 0.08 + r + w / 2, cy = y - sz * 0.7 + r + w / 2; return '<circle cx="' + cx.toFixed(2) + '" cy="' + cy.toFixed(2) + '" r="' + r.toFixed(2) + '" fill="none" stroke="' + c + '" stroke-width="' + w.toFixed(2) + '"/><path d="M' + (cx + r).toFixed(2) + ' ' + (cy - r * .2).toFixed(2) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w.toFixed(2) + '"/>'; };
  const txt9 = (s, x, y, sz, c, anchor, extra) => { if (s.indexOf("9") < 0) return '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || "start") + '" ' + font + ' font-size="' + sz + '" fill="' + c + '"' + (extra || "") + '>' + s + '</text>'; const total = tw(s, sz); let cx = anchor === "middle" ? x - total / 2 : anchor === "end" ? x - total : x; let out = ""; s.split("9").forEach((part, i) => { if (i) { out += nine(cx, y, sz, c); cx += .556 * sz; } if (part) { const lead = part.length - part.replace(/^ +/, "").length; cx += lead * .278 * sz; part = part.slice(lead); } if (part) { out += '<text x="' + cx.toFixed(1) + '" y="' + y + '" ' + font + ' font-size="' + sz + '" fill="' + c + '"' + (extra || "") + '>' + part + '</text>'; cx += tw(part, sz); } }); return out; };
  const sign = (x, y, w, txt, sz) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt9(txt, x + w / 2, y + 16, sz || 13, "#fff", "middle");
  const note = (cls, x, y, c) => '<g class="bst-note ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="4" fill="' + c + '"/><rect x="' + (x + 4) + '" y="' + (y - 18) + '" width="2" height="18" fill="' + c + '"/><path d="M' + (x + 6) + ' ' + (y - 18) + 'q8 4 6 10" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
  /* a St. Nicholas Houses tower: 14-story red-brown brick slab */
  const tower = (x, y, w, h, lit) => {
    let win = "";
    for (let r = 0; r < Math.floor((h - 8) / 9); r++) for (let c = 0; c < Math.floor((w - 6) / 8); c++) {
      const on = ((r * 5 + c * 3 + x) % 6) === 0;
      win += '<rect class="' + (on && lit ? "bst-flk" + ((r + c) % 2 ? " bst-flk2" : "") : "") + '" x="' + (x + 4 + c * 8) + '" y="' + (y + 6 + r * 9) + '" width="4" height="5" fill="' + (on ? "#ffd98a" : "#2e1d1a") + '"/>';
    }
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + BRICK + '"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#5e2f22"/>' +
      '<rect x="' + (x + w / 2 - 6) + '" y="' + (y - 8) + '" width="12" height="8" fill="#6e3a2a"/>' + win;
  };
  const tree = (x, y) => '<rect x="' + (x - 2) + '" y="' + y + '" width="4" height="22" fill="#3a2a1e"/><circle cx="' + x + '" cy="' + (y - 4) + '" r="14" fill="#2f5a34"/><circle cx="' + (x + 8) + '" cy="' + (y + 2) + '" r="9" fill="#376a3c"/>';

  /* 0. The M2 at Adam Clayton Powell Jr Blvd & W 129 St */
  function bststop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (64 + i * 38) + '" y="132" width="30" height="24" rx="2" fill="#cfe6f5" opacity=".9"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="120" width="290" height="76" rx="10" fill="#eef0f2" stroke="#7a8088" stroke-width="2"/>' +
      '<rect x="40" y="172" width="290" height="8" fill="' + BUS + '"/><rect x="40" y="164" width="290" height="4" fill="#ffd200"/>' + win +
      '<rect x="296" y="128" width="30" height="44" rx="3" fill="#bfd9ea"/><rect x="46" y="126" width="12" height="44" rx="2" fill="#9fb8c8"/>' +
      '<rect x="296" y="122" width="30" height="8" fill="#111"/><text x="311" y="129" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">M2</text>' +
      '<circle cx="90" cy="198" r="13" fill="#1a1a1a"/><circle cx="90" cy="198" r="5" fill="#888"/><circle cx="280" cy="198" r="13" fill="#1a1a1a"/><circle cx="280" cy="198" r="5" fill="#888"/>' +
      '<circle cx="326" cy="184" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bsts0)"/>' +
      tower(10, 30, 70, 160, true) + tower(100, 14, 74, 176, true) + tower(200, 26, 70, 164, true) + tower(300, 36, 72, 154, true) +
      tree(30, 168) + tree(130, 172) + tree(230, 168) + tree(330, 172) +
      '<rect x="0" y="186" width="400" height="74" fill="#33343a"/><rect x="0" y="184" width="400" height="4" fill="#8a8a90"/><path d="M0 240h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="18 14"/>' +
      bus +
      '<rect x="356" y="96" width="5" height="114" fill="#555"/>' +
      '<rect x="338" y="80" width="40" height="22" rx="11" fill="' + BUS + '"/><text x="358" y="96" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">M2</text>' +
      '<rect x="190" y="4" width="206" height="40" rx="3" fill="#111"/><rect x="190" y="4" width="206" height="3" fill="#fff"/>' +
      '<text x="200" y="22" ' + font + ' font-size="11" fill="#fff">Adam Clayton Powell Jr Blvd</text>' + txt9("W 129 St", 200, 38, 12, "#fff", "start") +
      '<rect x="356" y="12" width="32" height="18" rx="9" fill="' + BUS + '"/><text x="372" y="25" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">M2</text>',
      sky("bsts0", "#141432", "#5a3a6a"));
  }

  /* 1. The studio */
  function bststudio() {
    const faders = Array.from({ length: 16 }, (_, i) => '<rect x="' + (66 + i * 17) + '" y="196" width="3" height="30" fill="#111"/><rect x="' + (61 + i * 17) + '" y="' + (204 + (i * 7) % 16) + '" width="13" height="7" rx="1" fill="' + (i % 4 === 0 ? RED : "#e8e8e8") + '"/>').join("");
    const knobs = Array.from({ length: 16 }, (_, i) => [0, 1, 2].map(r => '<circle cx="' + (67.5 + i * 17) + '" cy="' + (166 + r * 10) + '" r="3" fill="' + ["#c9c9cf", GOLD, ICE][r] + '"/>').join("")).join("");
    const meters = Array.from({ length: 8 }, (_, i) => '<rect class="bst-meter' + (i % 3 ? " bst-m" + (i % 3 + 1) : "") + '" x="' + (150 + i * 13) + '" y="122" width="8" height="30" fill="url(#bstmg)"/>').join("");
    const mic = (x) => '<rect x="' + (x - 1) + '" y="70" width="2" height="34" fill="#cfcfd6"/><ellipse cx="' + x + '" cy="66" rx="4" ry="6" fill="#2a2a34" stroke="#cfcfd6"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a1620"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="38" height="110" fill="#231d2a" stroke="#2c2434"/>').join("") +
      '<rect x="110" y="14" width="180" height="96" rx="4" fill="#0d1a24" stroke="#3a3440" stroke-width="5"/>' +
      '<rect x="114" y="18" width="172" height="88" fill="#123040" opacity=".9"/>' + mic(150) + mic(185) + mic(220) + mic(255) +
      '<rect x="114" y="18" width="172" height="88" fill="url(#bstgl)" opacity=".35"/>' +
      '<rect x="120" y="24" width="48" height="14" rx="2" fill="#111"/><text x="144" y="34" text-anchor="middle" ' + font + ' font-size="8" fill="' + RED + '" class="bst-flk">ON AIR</text>' +
      '<rect x="20" y="40" width="70" height="100" rx="6" fill="#222" stroke="#444" stroke-width="2"/><circle class="bst-pulse" cx="55" cy="108" r="22" fill="#333" stroke="#555" stroke-width="3"/><circle cx="55" cy="108" r="8" fill="#555"/><circle cx="55" cy="62" r="10" fill="#333" stroke="#555" stroke-width="2"/>' +
      '<rect x="310" y="40" width="70" height="100" rx="6" fill="#222" stroke="#444" stroke-width="2"/><circle class="bst-pulse" cx="345" cy="108" r="22" fill="#333" stroke="#555" stroke-width="3"/><circle cx="345" cy="108" r="8" fill="#555"/><circle cx="345" cy="62" r="10" fill="#333" stroke="#555" stroke-width="2"/>' +
      '<rect x="140" y="116" width="120" height="40" rx="3" fill="#0d0d10" stroke="#3a3a40"/>' + meters +
      '<path d="M40 160h320l20 70h-360z" fill="#2c2a30" stroke="#55505c" stroke-width="2"/>' + knobs + faders +
      '<rect x="0" y="230" width="400" height="30" fill="#14121a"/>' +
      '<rect x="56" y="236" width="288" height="18" rx="2" fill="#f4f1e8"/>' + Array.from({ length: 13 }, (_, i) => '<rect x="' + (64 + i * 22) + '" y="236" width="10" height="11" fill="#111"/>').join("") +
      '<rect x="292" y="6" width="96" height="22" rx="3" fill="#111" stroke="' + GOLD + '"/><text x="340" y="21" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '" letter-spacing="1">STUDIO A</text>' +
      note("", 20, 170, GOLD) + note("bst-n2", 368, 170, ICE) + note("bst-n3", 200, 112, "#fff"),
      '<linearGradient id="bstmg" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#3bd16f"/><stop offset=".65" stop-color="' + GOLD + '"/><stop offset="1" stop-color="' + RED + '"/></linearGradient>' +
      '<linearGradient id="bstgl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/></linearGradient>');
  }

  /* 2. Blackstreet Blvd, Paterson NJ */
  function bstblvd() {
    const mill = (x, w, h) => '<rect x="' + x + '" y="' + (190 - h) + '" width="' + w + '" height="' + h + '" fill="#8a4430"/>' +
      Array.from({ length: Math.floor((w - 10) / 22) }, (_, c) => Array.from({ length: Math.floor((h - 20) / 30) }, (_, r) => '<path d="M' + (x + 10 + c * 22) + ' ' + (190 - h + 34 + r * 30) + 'v-12q6 -8 12 0v12z" fill="' + ((r + c) % 3 ? "#2a1e1c" : "#ffd98a") + '" stroke="#d8c3a0" stroke-width="1.5"/>').join("")).join("") +
      '<rect x="' + x + '" y="' + (190 - h) + '" width="' + w + '" height="5" fill="#5e2a1e"/>';
    const balloon = (x, y, c, cls) => '<g class="bst-float ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="10" ry="13" fill="' + c + '"/><path d="M' + x + ' ' + (y + 13) + 'q-4 10 2 20" stroke="#ddd" stroke-width="1" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bsts2)"/>' +
      mill(0, 140, 120) + mill(150, 110, 96) + mill(270, 130, 130) +
      '<rect x="296" y="30" width="16" height="30" fill="#6e3424"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#3a3b42"/><rect x="0" y="188" width="400" height="5" fill="#9a9aa0"/>' +
      '<rect x="196" y="40" width="7" height="160" fill="#2f2f2f"/>' +
      '<rect x="120" y="44" width="160" height="30" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><text x="200" y="65" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">Blackstreet Blvd</text>' +
      '<rect x="140" y="80" width="120" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5" opacity=".75"/><text x="200" y="93" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".85">Presidential Blvd</text>' +
      '<path d="M40 150q80 14 160 0q80 14 160 0" stroke="' + RED + '" stroke-width="6" fill="none"/><path d="M190 146l10 8l10 -8l-10 22z" fill="' + RED + '"/>' +
      [20, 380].map(x => '<rect x="' + (x - 3) + '" y="140" width="6" height="56" fill="#444"/>').join("") +
      balloon(60, 270, GOLD, "") + balloon(110, 300, "#fff", "bst-f2") + balloon(300, 280, RED, "bst-f3") + balloon(350, 320, ICE, "") +
      '<rect x="10" y="10" width="140" height="22" rx="3" fill="#111" opacity=".85"/><text x="80" y="25" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="2">PATERSON, N.J.</text>' +
      '<g class="bst-car"><rect x="0" y="222" width="70" height="16" rx="6" fill="#111"/><rect x="14" y="212" width="40" height="12" rx="4" fill="#111"/><circle cx="16" cy="240" r="5" fill="#333"/><circle cx="54" cy="240" r="5" fill="#333"/></g>',
      sky("bsts2", "#4a7bb8", "#f2d6a8"));
  }

  /* 3. Radio City Music Hall, Feb 25 1998 */
  function bstradio() {
    const bulbs = (x, y, w, cls) => Array.from({ length: Math.floor(w / 8) }, (_, i) => '<circle class="bst-chase' + (i % 2 ? " bst-c2" : "") + '" cx="' + (x + 4 + i * 8) + '" cy="' + y + '" r="2" fill="#fff3b0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bsts3)"/>' +
      '<g opacity=".35"><path class="bst-sweep" d="M90 260l-14 -240h28z" fill="#fff8d8"/><path class="bst-sweep bst-sw2" d="M310 260l-14 -240h28z" fill="#fff8d8"/></g>' +
      '<rect x="40" y="60" width="320" height="140" fill="#c9b79a"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (52 + i * 31) + '" y="70" width="6" height="68" fill="#a8977c"/>').join("") +
      '<rect x="296" y="10" width="40" height="150" fill="#1a0c10" stroke="#3a1a20" stroke-width="2"/>' +
      [..."RADIO"].map((ch, i) => '<text x="316" y="' + (34 + i * 18) + '" text-anchor="middle" ' + font + ' font-size="17" fill="' + RED + '" class="bst-flk" stroke="#ff9aa2" stroke-width=".6">' + ch + '</text>').join("") +
      '<text x="316" y="134" text-anchor="middle" ' + font + ' font-size="12" fill="' + RED + '" class="bst-flk bst-flk2">CITY</text>' +
      '<path d="M20 140h300v40h-300z" fill="#1a1016"/>' + bulbs(20, 144, 300) + bulbs(20, 176, 300) +
      '<text x="170" y="167" text-anchor="middle" ' + font + ' font-size="16" fill="' + RED + '" letter-spacing="3">MUSIC HALL</text>' +
      '<rect x="60" y="182" width="220" height="22" fill="#f4f1e8"/>' + txt9("FEB 25 1998 · BLACKSTREET", 170, 198, 12, "#111", "middle") +
      '<rect x="40" y="204" width="320" height="10" fill="#8a7a64"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (62 + i * 46) + '" y="214" width="30" height="20" fill="#3a2a20" stroke="' + GOLD + '"/>').join("") +
      '<rect x="0" y="234" width="400" height="26" fill="#2c2c32"/>' +
      '<g class="bst-car"><rect x="0" y="236" width="120" height="16" rx="5" fill="#111"/><rect x="30" y="228" width="60" height="10" rx="3" fill="#111"/><circle cx="20" cy="254" r="5" fill="#444"/><circle cx="100" cy="254" r="5" fill="#444"/></g>',
      sky("bsts3", "#0a0c24", "#2a2050"));
  }

  /* 4. W 129 St and Adam Clayton Powell Jr Blvd */
  function bstcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bsts4)"/>' +
      tower(10, 24, 72, 110, true) + tower(110, 8, 76, 126, true) + tower(220, 18, 72, 116, true) + tower(318, 30, 70, 104, true) +
      '<rect x="0" y="126" width="400" height="98" fill="#b8a48a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#a8937a" stroke-width="1"/>').join("") +
      '<path d="M0 126h400" stroke="#6e5f4c" stroke-width="3"/>' +
      tag("BLACKSTREET", 12, 190, 36, GOLD, -6) + tag("CHECK ONE CHECK TWO", 20, 216, 15, "#fff", -4) + tag("NEW JACK SWING", 200, 212, 17, ICE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5a5a60"/><rect x="0" y="222" width="400" height="4" fill="#9a9aa0"/>' +
      '<rect x="356" y="90" width="6" height="134" fill="#2f2f2f"/>' + sign(316, 92, 82, "W 129 St") + sign(208, 118, 190, "Adam Clayton Powell Jr Blvd", 11) +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="bst-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="bst-sp"><circle cx="222" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="bst-sp bst-spb"><circle cx="228" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '',
      sky("bsts4", "#1a1636", "#c86a5a"));
  }

  window.SCENES = { bststop: bststop, bststudio: bststudio, bstblvd: bstblvd, bstradio: bstradio, bstcorner: bstcorner };
})();
