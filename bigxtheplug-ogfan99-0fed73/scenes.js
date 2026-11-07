/* bigxtheplug scenes (Regions tab: Houston + Texas; South Dallas). CSS classes and ids prefixed bx- (the page's own anim-train is kept).
   1 MLK Jr. station on the DART Green Line (J.B. Jackson Jr. Transit Center, Trunk Ave at MLK Blvd): side platforms, columns in Kuba-textile pattern, the two tall talking drums at the rail entrance, the light-rail car gliding in.
   2 Ferris High School's stadium (he graduated from Ferris in 2016, where football drew college scouts): Friday-night lights, the yellow end zone, a pass spiraling downfield.
   3 I-45 South out of Dallas toward Ferris ("you better remember what that sign say ... Don't mess with Texas"): the roadside sign, a green guide sign, trucks rolling, prairie at sunset.
   4 The big stadium in Arlington ("big shoutout to dem boys"): the huge silver arches and glass wall lit up at night, fireworks over the roof.
   5 MLK Jr Blvd and Malcolm X Blvd in South Dallas (the historic intersection): green signs, BIGX tagged on the wall, Fountain Place's green glass prism lit downtown behind.
   No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bxpass{0%{transform:translate(0,0) rotate(-20deg)}50%{transform:translate(140px,-70px) rotate(-10deg)}100%{transform:translate(280px,0) rotate(10deg)}}.bx-ball{transform-box:fill-box;transform-origin:center;animation:bxpass 3s ease-in-out infinite}' +
    '@keyframes bxblink{0%,100%{opacity:.3}50%{opacity:1}}.bx-bl{animation:bxblink 1.5s ease-in-out infinite}.bx-bl2{animation-delay:-.75s}' +
    '@keyframes bxcarR{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.bx-carR{animation:bxcarR 6.5s linear infinite}.bx-carR2{animation-delay:-3.2s}' +
    '@keyframes bxcarL{from{transform:translateX(540px)}to{transform:translateX(-160px)}}.bx-carL{animation:bxcarL 8s linear infinite}' +
    '@keyframes bxglow{0%,100%{opacity:.55}50%{opacity:1}}.bx-glow{animation:bxglow 2.2s ease-in-out infinite}' +
    '@keyframes bxfw{0%{transform:scale(.1);opacity:0}20%{opacity:1}100%{transform:scale(1.2);opacity:0}}.bx-fw{transform-box:fill-box;transform-origin:center;animation:bxfw 2.2s ease-out infinite}.bx-fw2{animation-delay:-.8s}.bx-fw3{animation-delay:-1.5s}' +
    '@keyframes bxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bx-sp{animation:bxspray 1.4s ease-out infinite}.bx-sp2{animation-delay:.45s}' +
    '@keyframes bxflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.bx-flk{animation:bxflick 2.4s infinite}' +
    '@keyframes bxbeat{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.96)}}.bx-drum{transform-box:fill-box;transform-origin:50% 100%;animation:bxbeat .8s ease-in-out infinite}.bx-drum2{animation-delay:-.4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 16) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 16) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "bx-bl" + (i % 2 ? " bx-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 80) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const GREEN = "#009b3a", GOLD = "#ffb81c", RED = "#d7263d", BLUE = "#4aa3ff";
  /* Fountain Place: a tall green-glass prism with faceted, sliced-off top */
  const fountain = (x, base, s, lit) => {
    const h = 150 * s, w = 40 * s, top = base - h;
    let lines = "";
    for (let i = 1; i < 14; i++) lines += '<path d="M' + (x - w / 2) + ' ' + (top + 20 * s + i * 9.4 * s).toFixed(1) + 'h' + w + '" stroke="' + (lit ? "#8af0c0" : "#bfe8d4") + '" stroke-width=".7" opacity=".55"/>';
    return '<g><path d="M' + (x - w / 2) + ' ' + base + 'V' + (top + 30 * s).toFixed(1) + 'L' + (x + w * 0.1).toFixed(1) + ' ' + top.toFixed(1) + 'L' + (x + w / 2) + ' ' + (top + 54 * s).toFixed(1) + 'V' + base + 'z" fill="' + (lit ? "#1f6b52" : "#5aa98a") + '"/>' +
      '<path d="M' + (x + w * 0.1).toFixed(1) + ' ' + top.toFixed(1) + 'L' + (x + w * 0.05).toFixed(1) + ' ' + base + '" stroke="' + (lit ? "#7dffc4" : "#e0fff0") + '" stroke-width="1.4" class="' + (lit ? "bx-glow" : "") + '"/>' +
      '<path d="M' + (x - w / 2) + ' ' + (top + 30 * s).toFixed(1) + 'L' + (x + w * 0.1).toFixed(1) + ' ' + top.toFixed(1) + 'L' + (x + w / 2) + ' ' + (top + 54 * s).toFixed(1) + '" stroke="' + (lit ? "#7dffc4" : "#e0fff0") + '" stroke-width="1.6" fill="none" class="' + (lit ? "bx-glow" : "") + '"/>' + lines + '</g>';
  };

  /* 1. MLK Jr. station, DART Green Line, South Dallas */
  function bxstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="124" width="36" height="24" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><path d="M24 182V124q0 -14 14 -14h300q24 0 30 30v42z" fill="#eceef0" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="24" y="154" width="344" height="7" fill="' + GREEN + '"/><rect x="24" y="163" width="344" height="3" fill="#c9cdd2"/><rect x="24" y="168" width="344" height="4" fill="#5d646b"/>' +
      '<path d="M340 114q22 4 26 30h-26z" fill="#1c2630"/><circle cx="358" cy="175" r="3.5" fill="#fff6c2"/>' +
      '<rect x="200" y="100" width="70" height="10" fill="#8a939b"/><path d="M210 100l25 -24l25 24" stroke="#555" stroke-width="2" fill="none"/>' +
      '<rect x="40" y="113" width="86" height="10" rx="2" fill="#111"/><text x="83" y="121" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">GREEN · BUCKNER</text>' +
      '<circle cx="96" cy="184" r="7" fill="#222"/><circle cx="296" cy="184" r="7" fill="#222"/></g>';
    /* Kuba-textile pattern on the columns */
    const kuba = x => '<rect x="' + (x - 7) + '" y="78" width="14" height="110" fill="#c98a4a"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (x - 7) + ' ' + (82 + i * 12) + 'l7 6l7 -6M' + (x - 7) + ' ' + (88 + i * 12) + 'l7 6l7 -6" stroke="#3a2214" stroke-width="1.6" fill="none"/>').join("");
    /* talking drum: hourglass body laced with cords */
    const drum = (x, cls) => '<g class="bx-drum ' + cls + '"><path d="M' + (x - 14) + ' 112q14 34 0 72h28q-14 -38 0 -72z" fill="#8a5a30" stroke="#4a2c14" stroke-width="2"/><ellipse cx="' + x + '" cy="112" rx="14" ry="4" fill="#e9d6b0" stroke="#4a2c14" stroke-width="1.5"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (x - 13 + i * 5.2) + ' 113L' + (x - 4 + i * 1.6) + ' 148L' + (x - 13 + i * 5.2) + ' 183" stroke="#f0e4c8" stroke-width=".9" fill="none"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bxs1)"/>' +
      '<path d="M0 72h400" stroke="#333" stroke-width="1.5"/>' + [130, 270].map(x => '<rect x="' + (x - 3) + '" y="68" width="6" height="40" fill="#7a8088"/><path d="M' + (x - 22) + ' 72h44" stroke="#7a8088" stroke-width="3"/>').join("") +
      '<path d="M0 78h400l-10 -12H10z" fill="#5b4a3a"/>' + kuba(70) + kuba(200) + kuba(330) +
      train +
      '<rect x="0" y="186" width="400" height="8" fill="#f2c200"/><rect x="0" y="194" width="400" height="66" fill="#b0aaa0"/><path d="M0 226h400" stroke="#9c958a" stroke-width="2"/>' +
      drum(22, "") + drum(378, "bx-drum2") +
      '<rect x="60" y="204" width="280" height="38" rx="3" fill="#111"/><text x="78" y="229" ' + font + ' font-size="18" fill="#fff">MLK Jr.</text>' + badge(250, 223, "GREEN", GREEN),
      sky("bxs1", "#6fb3e6", "#f8e2b8"));
  }

  /* 2. Ferris High stadium on a Friday night */
  function bxferris() {
    const light = x => '<rect x="' + (x - 2) + '" y="30" width="4" height="120" fill="#9aa"/><rect x="' + (x - 18) + '" y="18" width="36" height="16" fill="#333"/>' + [0, 1, 2, 3].map(i => '<circle class="bx-bl' + (i % 2 ? " bx-bl2" : "") + '" cx="' + (x - 12 + i * 8) + '" cy="26" r="3" fill="#fffbe0"/>').join("");
    const yard = Array.from({ length: 9 }, (_, i) => '<path d="M' + (70 + i * 32) + ' 160L' + (40 + i * 40) + ' 250" stroke="#fff" stroke-width="2" opacity=".8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bxs2)"/>' + stars(10) +
      light(40) + light(360) +
      '<rect x="60" y="96" width="280" height="60" fill="#2b2b33"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M60 ' + (104 + i * 11) + 'h280" stroke="#444" stroke-width="3"/>').join("") +
      Array.from({ length: 40 }, (_, i) => '<circle cx="' + (66 + (i * 7) % 270) + '" cy="' + (102 + Math.floor(i / 10) * 12) + '" r="3" fill="' + [GOLD, "#111", "#fff"][i % 3] + '"/>').join("") +
      '<rect x="150" y="66" width="100" height="30" rx="2" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="80" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">HOME 21 · GUEST 14</text><text x="200" y="91" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">4TH QTR</text>' +
      '<path d="M0 156h400v104H0z" fill="#3f8f3a"/>' + yard +
      '<path d="M0 230h400v30H0z" fill="' + GOLD + '"/><text x="200" y="252" text-anchor="middle" ' + font + ' font-size="18" fill="#111" letter-spacing="6">FERRIS</text>' +
      '<g class="bx-ball"><ellipse cx="60" cy="190" rx="9" ry="5.5" fill="#7a3f1d"/><path d="M55 190h10M58 188v4M61 188v4" stroke="#fff" stroke-width="1"/></g>',
      sky("bxs2", "#0e1530", "#2f3d6a"));
  }

  /* 3. I-45 South out of Dallas, the roadside sign */
  function bxsign() {
    return svg(
      '<rect width="400" height="260" fill="url(#bxs3)"/><circle cx="320" cy="120" r="30" fill="#ffd27a" opacity=".85"/>' +
      '<path d="M0 150q100 -10 200 -2t200 -4v110H0z" fill="#b9a46a"/>' +
      '<path d="M120 260L190 150h20l70 110z" fill="#55565c"/><path d="M200 156v10M200 176v14M200 202v18M200 234v22" stroke="#f2c200" stroke-width="3"/>' +
      /* green guide sign on a gantry */
      '<rect x="216" y="70" width="5" height="84" fill="#777"/><rect x="380" y="70" width="5" height="84" fill="#777"/><rect x="216" y="70" width="169" height="5" fill="#888"/>' +
      '<rect x="234" y="78" width="134" height="46" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><rect x="246" y="84" width="30" height="20" rx="2" fill="#1d4f9a" stroke="#fff" stroke-width="1.5"/><text x="261" y="99" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">45</text>' +
      '<text x="326" y="98" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">SOUTH</text><text x="300" y="117" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Ferris · Houston</text>' +
      /* the roadside sign */
      '<rect x="44" y="146" width="5" height="46" fill="#777"/><rect x="120" y="146" width="5" height="46" fill="#777"/>' +
      '<rect x="26" y="96" width="118" height="54" rx="3" fill="#fff" stroke="#1d3f7a" stroke-width="3"/><text x="85" y="117" text-anchor="middle" ' + font + ' font-size="13" fill="' + RED + '">DON&apos;T MESS</text><text x="85" y="138" text-anchor="middle" ' + font + ' font-size="13" fill="#1d3f7a">WITH TEXAS</text>' +
            '<g class="bx-carL"><rect x="0" y="200" width="58" height="22" rx="3" fill="#e9eef5"/><rect x="58" y="206" width="16" height="16" rx="3" fill="' + RED + '"/><circle cx="12" cy="224" r="5" fill="#111"/><circle cx="48" cy="224" r="5" fill="#111"/><circle cx="68" cy="224" r="5" fill="#111"/></g>' +
      '<g class="bx-carR bx-carR2"><rect x="0" y="236" width="40" height="13" rx="4" fill="' + GOLD + '"/><circle cx="38" cy="241" r="2" fill="#fff6c2"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="30" cy="250" r="4" fill="#111"/></g>',
      sky("bxs3", "#3e5aa8", "#ff9a5a"));
  }

  /* 4. The big stadium in Arlington: silver arches, glass wall, fireworks */
  function bxstadium() {
    const fw = (x, y, c, cls) => '<g class="bx-fw ' + cls + '">' + Array.from({ length: 12 }, (_, i) => { const a = i / 12 * Math.PI * 2; return '<path d="M' + x + ' ' + y + 'l' + (Math.cos(a) * 22).toFixed(1) + ' ' + (Math.sin(a) * 22).toFixed(1) + '" stroke="' + c + '" stroke-width="2" stroke-linecap="round"/>'; }).join("") + '</g>';
    const glass = Array.from({ length: 14 }, (_, i) => '<path d="M' + (40 + i * 23) + ' 142v62" stroke="#9fd0ff" stroke-width="1" opacity=".6"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bxs4)"/>' + stars(16) +
      fw(80, 50, GOLD, "") + fw(320, 40, BLUE, "bx-fw2") + fw(200, 30, "#fff", "bx-fw3") +
      '<path d="M20 204V150q180 -46 360 0v54z" fill="#c7ccd4"/><path d="M28 150q172 -40 344 0" stroke="#eef1f5" stroke-width="3" fill="none"/>' +
      '<path d="M70 204V120q130 -90 260 0v84" stroke="#dfe3ea" stroke-width="9" fill="none"/><path d="M90 204V126q110 -76 220 0v78" stroke="#aeb5bf" stroke-width="3" fill="none"/>' +
      '<rect x="30" y="142" width="340" height="62" fill="#20456e" opacity=".85"/>' + glass + '<rect x="30" y="142" width="340" height="62" fill="#9fd0ff" opacity=".18" class="bx-glow"/>' +
      '<rect x="0" y="204" width="400" height="56" fill="#3a3d45"/><rect x="0" y="204" width="400" height="4" fill="#c9c6bd"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (12 + i * 33) + '" y="216" width="22" height="9" rx="3" fill="' + ["#e9eef5", RED, BLUE, GOLD][i % 4] + '" opacity=".85"/>').join("") +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#eef3f7">ARLINGTON · BIG SHOUTOUT TO DEM BOYS</text>',
      sky("bxs4", "#0b1028", "#33295a"));
  }

  /* 5. MLK Jr Blvd and Malcolm X Blvd, South Dallas */
  function bxcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bxs5)"/>' + stars(18) +
      '<g fill="#232a40"><rect x="20" y="98" width="24" height="32"/><rect x="48" y="86" width="18" height="44"/><rect x="120" y="94" width="22" height="36"/><rect x="270" y="90" width="26" height="40"/><rect x="304" y="102" width="20" height="28"/></g>' +
      fountain(205, 130, 0.62, true) +
      '<rect x="0" y="126" width="400" height="98" fill="#d4c6ad"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#bdae92" stroke-width="1"/>').join("") +
      '<rect x="0" y="126" width="400" height="6" fill="#998a6e"/>' +
      tag("BIGX", 24, 186, 54, GOLD, -6) + tag("THA PLUG", 34, 216, 28, RED, -5) + tag("600", 200, 170, 26, BLUE, -4) + tag("LET THE BAND PLAY", 196, 198, 13, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(246, 98, 152, "MLK Jr Blvd") + sign(250, 124, 148, "Malcolm X Blvd") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="bx-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="bx-sp"><circle cx="174" cy="168" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="bx-sp bx-sp2"><circle cx="180" cy="162" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("bxs5", "#131637", "#cf6a48"));
  }

  window.SCENES = { bxstation: bxstation, bxferris: bxferris, bxsign: bxsign, bxstadium: bxstadium, bxcorner: bxcorner };
})();
