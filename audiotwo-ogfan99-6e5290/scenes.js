/* Audio Two game (NYC map, Brooklyn: Bed-Stuy, where Milk Dee and DJ Gizmo came up).
   The J up on the Broadway el at Kosciuszko St, the milk truck rolling down a brownstone block (Milk Dee's whole thing),
   Birdel's Records on Nostrand Av (the old Bed-Stuy record shop), the beat room where a drum machine and Giz's two decks made the
   Top Billin' break, and Hancock St & Nostrand Av with the turreted Renaissance Apartments behind. 400 x 260 SVGs. All classes prefixed a2-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes a2drive{from{transform:translateX(-170px)}to{transform:translateX(430px)}}.a2-truck{animation:a2drive 9s linear infinite;animation-delay:-4.2s}' +
    '@keyframes a2car{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.a2-car{animation:a2car 6s linear infinite}.a2-car2{animation-delay:-3s}' +
    '@keyframes a2blink{0%,100%{opacity:.25}50%{opacity:1}}.a2-bl{animation:a2blink 1.6s ease-in-out infinite}.a2-bl2{animation-delay:.5s}.a2-bl3{animation-delay:1s}' +
    '@keyframes a2flick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.a2-flk{animation:a2flick 2.6s infinite}' +
    '@keyframes a2spin{to{transform:rotate(360deg)}}.a2-spin{transform-box:fill-box;transform-origin:50% 50%;animation:a2spin 1.8s linear infinite}.a2-spin2{animation-duration:1.2s}' +
    '@keyframes a2pad{0%,100%{opacity:.3}10%{opacity:1}40%{opacity:.3}}.a2-pad{animation:a2pad 1s steps(1) infinite}' +
    '@keyframes a2meter{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}.a2-mt{transform-box:fill-box;transform-origin:50% 100%;animation:a2meter .5s ease-in-out infinite}.a2-mt2{animation-delay:.15s}.a2-mt3{animation-delay:.3s}.a2-mt4{animation-delay:.45s}' +
    '@keyframes a2scr{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.a2-scr{transform-box:fill-box;transform-origin:20% 90%;animation:a2scr .45s ease-in-out infinite}' +
    '@keyframes a2note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.a2-note{animation:a2note 2.4s linear infinite}.a2-note2{animation-delay:-.8s}.a2-note3{animation-delay:-1.6s}' +
    '@keyframes a2bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.a2-bob{animation:a2bob .5s ease-in-out infinite}.a2-bob2{animation-delay:.25s}' +
    '@keyframes a2pour{0%,100%{transform:scaleY(.2)}50%{transform:scaleY(1)}}.a2-pour{transform-box:fill-box;transform-origin:50% 0%;animation:a2pour 1.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const MILK = "#f6f1e1", BLUE = "#2f80ed", RED = "#e63946", JBROWN = "#996633";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  /* a Bed-Stuy brownstone: stoop, cornice, tall windows */
  const brownstone = (x, w, top, col) => {
    let g = '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (200 - top) + '" fill="' + col + '"/>' +
      '<rect x="' + (x - 2) + '" y="' + (top - 6) + '" width="' + (w + 4) + '" height="8" fill="#3b2a20"/>';
    for (let yy = top + 12; yy < 160; yy += 30) for (let i = 0; i < 3; i++) g += '<rect x="' + (x + 8 + i * (w - 16) / 3) + '" y="' + yy + '" width="' + ((w - 16) / 3 - 8) + '" height="20" fill="#2a1d16"/><rect x="' + (x + 8 + i * (w - 16) / 3) + '" y="' + (yy - 3) + '" width="' + ((w - 16) / 3 - 8) + '" height="3" fill="#c9a37a"/>';
    g += '<path d="M' + (x + w - 34) + ' 200l14 -30h14v30z" fill="#6b4a36"/><rect x="' + (x + w - 24) + '" y="150" width="14" height="20" fill="#2a1d16"/>';
    return g;
  };

  /* 1. Kosciuszko St on the Broadway el (J): the platform up top, the black sign with the brown J, the J sliding in, Broadway's steel below */
  function kos() {
    let girders = "";
    for (let x = 0; x < 400; x += 24) girders += '<path d="M' + x + ' 176l12 14l12 -14" stroke="#3f4a43" stroke-width="2" fill="none"/>';
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="98" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ak)"/>' + stars(14) +
      /* far rooftops */
      '<path d="M0 90h40v-14h30v14h40v-22h36v22h50v-10h44v10h60v-18h40v18h60v80H0z" fill="#2a2234" opacity=".9"/>' +
      /* canopy */
      '<rect x="0" y="26" width="400" height="12" fill="#2e3a33"/><path d="M0 38h400" stroke="#55665a" stroke-width="2"/>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 4) + '" y="38" width="8" height="128" fill="#2e3a33"/>').join("") +
      [90, 250].map((x, i) => '<rect class="a2-flk" style="animation-delay:-' + i + 's" x="' + (x - 24) + '" y="38" width="48" height="5" rx="2" fill="#fff8d6"/>').join("") +
      /* sign */
      '<rect x="56" y="50" width="288" height="30" rx="3" fill="#111"/><rect x="56" y="50" width="288" height="3" fill="#fff"/>' +
      '<text x="70" y="71" ' + font + ' font-size="14" fill="#fff">Kosciuszko St</text>' + bullet(318, 66, "J", JBROWN) +
      /* the J train */
      '<g class="anim-train">' +
        '<rect x="10" y="88" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="94" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 130, "J", JBROWN) +
        '<rect x="10" y="124" width="280" height="4" fill="' + JBROWN + '"/>' +
        '<circle cx="22" cy="136" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge + el structure */
      '<rect x="0" y="144" width="400" height="8" fill="#eab308"/><rect x="0" y="152" width="400" height="24" fill="#4c4a46"/>' +
      person(340, 112, "#1b1b1b") + person(366, 116, "#26262b") +
      '<rect x="0" y="176" width="400" height="6" fill="#3f4a43"/>' + girders + '<rect x="0" y="190" width="400" height="5" fill="#3f4a43"/>' +
      [30, 140, 260, 370].map(x => '<rect x="' + (x - 5) + '" y="195" width="10" height="45" fill="#3f4a43"/>').join("") +
      /* Broadway under the el */
      '<rect x="0" y="240" width="400" height="20" fill="#2b2b30"/>' +
      '<g class="a2-car"><rect x="0" y="242" width="40" height="12" rx="4" fill="' + RED + '"/><circle cx="10" cy="255" r="3.5" fill="#111"/><circle cx="30" cy="255" r="3.5" fill="#111"/></g>' +
      '<g class="a2-car a2-car2"><rect x="0" y="243" width="44" height="11" rx="4" fill="' + BLUE + '"/><circle cx="10" cy="255" r="3.5" fill="#111"/><circle cx="34" cy="255" r="3.5" fill="#111"/></g>' +
      txt("BROADWAY · BED-STUY", 200, 222, 11, MILK, 'letter-spacing="3"'),
      sky("ak", "#0d0f22", "#3a2f4f"));
  }

  /* 2. The milk truck rolling down a brownstone block: white box truck with MILK on the side, crates of bottles on the back, the block watching */
  function milk() {
    const truck = '<g class="a2-truck">' +
      '<rect x="0" y="160" width="110" height="52" rx="4" fill="' + MILK + '" stroke="#9aa3ad" stroke-width="2"/>' +
      '<rect x="0" y="176" width="110" height="8" fill="' + BLUE + '"/>' +
      txt("MILK", 52, 204, 18, BLUE, 'letter-spacing="4"') +
      '<path d="M110 172h26l16 20v20h-42z" fill="' + MILK + '" stroke="#9aa3ad" stroke-width="2"/><path d="M116 176h18l12 14h-30z" fill="#bcd8f0"/>' +
      '<rect x="146" y="204" width="8" height="5" fill="#ffd36b"/>' +
      '<circle cx="28" cy="214" r="10" fill="#111"/><circle cx="28" cy="214" r="4" fill="#9aa3ad"/><circle cx="128" cy="214" r="10" fill="#111"/><circle cx="128" cy="214" r="4" fill="#9aa3ad"/>' +
      /* crates on the roof rack */
      [6, 38, 70].map(x => '<g class="a2-bob"><rect x="' + x + '" y="146" width="30" height="14" fill="' + RED + '" stroke="#7a1018"/>' +
        [0, 1, 2, 3].map(i => '<rect x="' + (x + 3 + i * 7) + '" y="138" width="5" height="10" rx="2" fill="#fff"/>').join("") + '</g>').join("") +
      '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#am)"/>' +
      '<circle cx="330" cy="40" r="18" fill="#fff4c8" opacity=".9"/>' +
      brownstone(0, 100, 52, "#7a4e36") + brownstone(100, 100, 60, "#6f4631") + brownstone(200, 100, 48, "#82543a") + brownstone(300, 100, 58, "#74492f") +
      /* trees */
      [60, 250].map(x => '<rect x="' + (x - 3) + '" y="150" width="6" height="56" fill="#3a2a1e"/><circle cx="' + x + '" cy="140" r="22" fill="#3f7a3a"/><circle cx="' + (x + 14) + '" cy="150" r="14" fill="#356c31"/>').join("") +
      /* sidewalk + street */
      '<rect x="0" y="200" width="400" height="10" fill="#9a9a96"/><rect x="0" y="210" width="400" height="50" fill="#3b3b40"/>' +
      '<path d="M0 238h400" stroke="#e9c46a" stroke-width="2" stroke-dasharray="18 14"/>' +
      person(352, 172, "#1c1c22", "a2-bob") + person(374, 176, "#2b2228", "a2-bob a2-bob2") +
      truck +
      txt("THE MILK RUN", 200, 30, 13, MILK, 'letter-spacing="4"'),
      sky("am", "#7fb3e6", "#f2d9b0"));
  }

  /* 3. Birdel's Records on Nostrand Av: the old Bed-Stuy record shop, red awning, a wall of records in the window, one spinning, notes floating out the door */
  function birdel() {
    let racks = "";
    for (let i = 0; i < 6; i++) racks += '<rect x="' + (64 + i * 30) + '" y="132" width="26" height="26" fill="' + ["#e63946", "#2f80ed", "#e9c46a", "#f6f1e1", "#6cbe45", "#b06ab3"][i] + '" stroke="#111"/><circle cx="' + (77 + i * 30) + '" cy="145" r="7" fill="#111"/>';
    let brick = "";
    for (let y = 60; y < 206; y += 8) for (let x = (y / 8) % 2 ? 16 : 8; x < 392; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#8a3b2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ab)"/>' +
      '<rect x="8" y="56" width="384" height="150" fill="#99432f"/>' + brick +
      /* upper windows */
      [40, 130, 220, 310].map(x => '<rect x="' + x + '" y="66" width="50" height="30" fill="#1d1a22"/><rect class="a2-bl a2-bl' + (x % 3 + 1) + '" x="' + (x + 4) + '" y="70" width="42" height="22" fill="#ffd98a" opacity=".5"/>').join("") +
      /* awning */
      '<path d="M30 104h340l-14 24H44z" fill="' + RED + '"/>' +
      (() => { let s = ""; for (let x = 44; x < 356; x += 24) s += '<path d="M' + x + ' 128h12l-2 6h-8z" fill="#b5212d"/>'; return s; })() +
      txt("BIRDEL'S RECORDS", 200, 122, 14, MILK, 'letter-spacing="2"') +
      /* store front */
      '<rect x="40" y="128" width="320" height="78" fill="#151219"/>' +
      '<rect x="48" y="128" width="216" height="72" fill="#22303f" stroke="#c9a24a" stroke-width="2"/>' + racks +
      '<g class="a2-spin" ><circle cx="120" cy="182" r="14" fill="#111" stroke="#555"/><circle cx="120" cy="182" r="5" fill="' + RED + '"/><path d="M120 170v6" stroke="#888"/></g>' +
      '<rect x="146" y="166" width="108" height="30" fill="' + MILK + '"/>' + txt("TOP BILLIN'", 200, 186, 13, "#111") +
      /* door with notes */
      '<rect x="280" y="134" width="64" height="72" fill="#0d0b10" stroke="#c9a24a" stroke-width="2"/><rect x="286" y="140" width="52" height="34" fill="#ffd98a" opacity=".35"/>' +
      ['a2-note', 'a2-note a2-note2', 'a2-note a2-note3'].map((c, i) => '<g class="' + c + '"><circle cx="' + (300 + i * 14) + '" cy="136" r="4" fill="#e9c46a"/><path d="M' + (304 + i * 14) + ' 136v-14h6" stroke="#e9c46a" stroke-width="2" fill="none"/></g>').join("") +
      /* sidewalk */
      '<rect x="0" y="206" width="400" height="54" fill="#6a6a6e"/><rect x="0" y="206" width="400" height="5" fill="#8f8f93"/>' +
      person(70, 214, "#1d1d22", "a2-bob") + person(94, 216, "#2a2530", "a2-bob a2-bob2") +
      txt("NOSTRAND AV", 200, 246, 11, MILK, 'letter-spacing="4"'),
      sky("ab", "#ff9a62", "#4a2a52"));
  }

  /* 4. The beat room: a drum machine with its pads flashing the boom-boom-kick, Giz's two decks, a hand cutting the record, meters jumping */
  function beat() {
    let pads = "";
    for (let r = 0; r < 2; r++) for (let c = 0; c < 8; c++) pads += '<rect class="a2-pad" style="animation-delay:' + ((c * 0.125 + r * 0.0625)) + 's" x="' + (40 + c * 22) + '" y="' + (176 + r * 18) + '" width="16" height="12" rx="2" fill="' + (r ? "#ff8a3d" : "#ffd36b") + '"/>';
    const deck = (cx, cls) => '<rect x="' + (cx - 46) + '" y="96" width="92" height="64" rx="5" fill="#2a2a30" stroke="#777"/>' +
      '<g class="a2-spin ' + cls + '"><circle cx="' + cx + '" cy="128" r="26" fill="#111" stroke="#444"/><circle cx="' + cx + '" cy="128" r="9" fill="' + (cls ? BLUE : RED) + '"/><path d="M' + cx + ' 104v8" stroke="#666" stroke-width="2"/></g>' +
      '<path d="M' + (cx + 34) + ' 104l-6 24" stroke="#ddd" stroke-width="3" stroke-linecap="round"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ar)"/>' +
      /* foam on the wall */
      (() => { let s = ""; for (let y = 10; y < 90; y += 16) for (let x = 0; x < 400; x += 16) s += '<path d="M' + x + ' ' + y + 'l8 8l8 -8" stroke="#2c2440" stroke-width="2" fill="none"/>'; return s; })() +
      /* meters */
      '<rect x="270" y="16" width="110" height="64" rx="4" fill="#120f1c" stroke="#555"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect class="a2-mt a2-mt' + (i % 4 + 1) + '" x="' + (282 + i * 16) + '" y="26" width="10" height="46" fill="' + (i > 3 ? RED : "#6cbe45") + '"/>').join("") +
      txt("MILK + GIZ", 120, 52, 22, MILK, 'letter-spacing="4"') +
      /* table */
      '<rect x="0" y="160" width="400" height="100" fill="#3a2a22"/><rect x="0" y="160" width="400" height="6" fill="#5a4032"/>' +
      deck(110, "") + deck(290, "a2-spin2") +
      /* mixer */
      '<rect x="168" y="100" width="64" height="56" rx="4" fill="#1d1d22" stroke="#777"/><rect x="180" y="132" width="40" height="5" fill="#555"/><rect class="a2-scr" x="192" y="126" width="10" height="16" rx="2" fill="#ddd"/>' +
      /* hand on the record (no face) */
      '<g class="a2-scr"><path d="M68 112q10-10 26-4l8 6q-8 6-20 6z" fill="#8a5a3c"/><rect x="40" y="110" width="34" height="14" rx="6" fill="#26262e"/></g>' +
      /* drum machine */
      '<rect x="28" y="168" width="196" height="54" rx="5" fill="#d8d2c4" stroke="#8b8577" stroke-width="2"/>' + pads +
      '<rect x="236" y="170" width="140" height="50" rx="4" fill="#1d1d22"/>' + txt("BOOM BOOM KICK", 306, 200, 12, "#ffd36b", 'letter-spacing="1"') +
      /* a full glass on the table */
      '<rect x="356" y="128" width="20" height="32" rx="2" fill="#dfe8f0" opacity=".7"/><rect class="a2-pour" x="358" y="134" width="16" height="24" fill="' + MILK + '"/>' +
      txt("THE BEAT ROOM", 200, 246, 12, MILK, 'letter-spacing="4"'),
      sky("ar", "#1b1530", "#3a2448"));
  }

  /* 5. Hancock St & Nostrand Av: green signs, AUDIO TWO tagged on the wall, the turreted Renaissance Apartments behind */
  function corner() {
    const turret = (x) => '<rect x="' + (x - 22) + '" y="58" width="44" height="100" fill="#c9a77a"/><path d="M' + (x - 26) + ' 60l26 -40l26 40z" fill="#5d3a2a"/>' +
      [70, 98, 126].map(y => '<rect class="a2-bl a2-bl' + (y % 3 + 1) + '" x="' + (x - 10) + '" y="' + y + '" width="20" height="16" rx="8" fill="#ffd98a" opacity=".7"/>').join("");
    let mid = '<rect x="96" y="66" width="208" height="92" fill="#b8865c"/><rect x="92" y="62" width="216" height="6" fill="#6b4632"/>';
    for (let y = 76; y < 150; y += 22) for (let x = 108; x < 296; x += 24) mid += '<rect class="a2-bl a2-bl' + ((x + y) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="12" height="14" rx="6" fill="#ffd98a" opacity=".65"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ac)"/>' + stars(18) +
      mid + turret(86) + turret(314) +
      '<rect x="112" y="44" width="176" height="14" rx="3" fill="#0a0c1a" opacity=".85"/>' + txt("RENAISSANCE APARTMENTS", 200, 54, 9, MILK, 'letter-spacing="3" opacity=".85"') +
      /* the wall */
      '<rect x="0" y="134" width="400" height="92" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 144; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("AUDIO TWO", 14, 198, 46, MILK, -5) + tag("MILK DEE", 196, 220, 22, BLUE, -4) + tag("GIZMO", 30, 222, 18, RED, -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="a2-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + MILK + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="70" width="5" height="158" fill="#3d4b3f"/>' +
      '<rect x="296" y="74" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Hancock St", 346, 90, 12, "#fff") +
      '<rect x="296" y="100" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Nostrand Av", 346, 116, 12, "#fff") +
      '<circle class="a2-flk" cx="358" cy="66" r="4" fill="#fff6c2"/>',
      sky("ac", "#0a0c1a", "#2c2a44"));
  }

  window.SCENES = { kos: kos, milk: milk, birdel: birdel, beat: beat, corner: corner };
})();
