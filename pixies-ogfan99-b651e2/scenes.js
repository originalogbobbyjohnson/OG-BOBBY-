/* pixies scenes (Regions tab: Boston + New England; Amherst, MA). CSS classes and ids prefixed px- (the page's own anim-train is kept).
   1 Haigis Mall on the PVTA 30 and 31 bus routes at UMass Amherst, where Charles Thompson (Black Francis) and Joey Santiago met as roommates: the bus shelter, the black stop sign with the blue 30 and 31 badges, a white PVTA bus with blue and teal stripes sliding in, fall leaves.
   2 T.T. the Bear's Place on Brookline St in Central Square, Cambridge, one of the little rock rooms the band played in 1986-87: narrow dark storefront, flickering neon sign, a line out front, notes drifting out.
   3 David Lovering's parents' garage in Burlington, MA, where the band rehearsed in mid-1986: the suburban house, the garage door up, a drum kit and amps inside, a bare bulb swinging, maple leaves blowing.
   4 Fort Apache Studios, 1987: the control room where they cut the 17-song demo fans call the Purple Tape: mixing desk, reels spinning, VU needles, a purple cassette.
   5 North Pleasant St and Main St in Amherst Center: green signs, PIXIES tagged on the brick, the brownstone tower of Amherst Town Hall behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes pxleaf{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(-40px,280px) rotate(320deg)}}.px-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:pxleaf 6s linear infinite}.px-l2{animation-delay:-2s;animation-duration:7s}.px-l3{animation-delay:-4s;animation-duration:5.5s}.px-l4{animation-delay:-1s;animation-duration:8s}' +
    '@keyframes pxflick{0%,100%{opacity:1}42%{opacity:.85}46%{opacity:.25}50%{opacity:.95}}.px-flk{animation:pxflick 2.4s infinite}' +
    '@keyframes pxnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(26px,-70px);opacity:0}}.px-note{animation:pxnote 3s ease-out infinite}.px-n2{animation-delay:-1s}.px-n3{animation-delay:-2s}' +
    '@keyframes pxswing{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(10deg)}}.px-bulb{transform-box:fill-box;transform-origin:50% 0;animation:pxswing 2.2s ease-in-out infinite}' +
    '@keyframes pxspin{to{transform:rotate(360deg)}}.px-reel{transform-box:fill-box;transform-origin:50% 50%;animation:pxspin 2.4s linear infinite}' +
    '@keyframes pxneedle{0%,100%{transform:rotate(-30deg)}30%{transform:rotate(18deg)}60%{transform:rotate(-6deg)}80%{transform:rotate(26deg)}}.px-ndl{transform-box:fill-box;transform-origin:50% 100%;animation:pxneedle 1.3s ease-in-out infinite}.px-ndl2{animation-delay:-.5s}' +
    '@keyframes pxhit{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.px-hit{animation:pxhit .4s ease-in-out infinite}' +
    '@keyframes pxbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.px-bob{animation:pxbob .9s ease-in-out infinite}.px-b2{animation-delay:-.3s}.px-b3{animation-delay:-.6s}' +
    '@keyframes pxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.px-sp{animation:pxspray 1.4s ease-out infinite}.px-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, tc) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (tc || "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const leaf = (cls, x, y, c) => '<path class="px-leaf ' + cls + '" d="M' + x + ' ' + y + 'q6 -6 12 0q-6 6 -12 0z" fill="' + c + '"/>';
  const note = (cls, x, y, c) => '<g class="px-note ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="4" fill="' + c + '"/><path d="M' + (x + 4) + ' ' + y + 'v-14l7 3" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
  const PVTA = "#1f4e79", GOLD = "#f2c14e", RED = "#c8102e", SEA = "#7fb7be", CREAM = "#f4ead8";

  /* 1. Haigis Mall, UMass Amherst, PVTA 30 / 31 */
  function pxstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (50 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#24323f"/>').join("");
    const bus = '<g class="anim-train"><rect x="30" y="118" width="300" height="76" rx="10" fill="#f4f6f8" stroke="#8d97a0" stroke-width="2"/>' + win +
      '<rect x="30" y="160" width="300" height="8" fill="' + PVTA + '"/><rect x="30" y="170" width="300" height="5" fill="#2bb3a3"/>' +
      '<rect x="306" y="124" width="20" height="62" rx="3" fill="#cfd6dc"/><rect x="240" y="122" width="60" height="12" rx="2" fill="#111"/><text x="270" y="131.5" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">30 UMASS</text>' +
      '<circle cx="80" cy="196" r="13" fill="#222"/><circle cx="80" cy="196" r="5" fill="#888"/><circle cx="268" cy="196" r="13" fill="#222"/><circle cx="268" cy="196" r="5" fill="#888"/>' +
      '<circle cx="324" cy="182" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pxs1)"/>' +
      /* low brick campus buildings */
      '<rect x="0" y="66" width="150" height="56" fill="#9a5a40"/><rect x="250" y="58" width="150" height="64" fill="#8d5039"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (12 + i * 28) + '" y="78" width="14" height="16" fill="#f3dfb0" opacity=".8"/><rect x="' + (262 + i * 28) + '" y="72" width="14" height="16" fill="#f3dfb0" opacity=".8"/>').join("") +
      /* fall trees */
      '<circle cx="170" cy="78" r="30" fill="#d9822b"/><circle cx="205" cy="70" r="28" fill="#c0392b"/><circle cx="236" cy="84" r="24" fill="#e0a526"/><rect x="198" y="92" width="8" height="30" fill="#5a3a22"/>' +
      '<rect x="0" y="118" width="400" height="80" fill="#6b6f74"/>' +
      bus +
      /* shelter and stop sign */
      '<rect x="0" y="198" width="400" height="62" fill="#b9b4aa"/><rect x="0" y="196" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="346" y="60" width="6" height="140" fill="#333"/><rect x="300" y="34" width="96" height="44" rx="3" fill="#111"/>' +
      '<text x="348" y="52" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Haigis Mall</text>' + badge(312, 66, "30", PVTA) + badge(350, 66, "31", PVTA) +
      leaf("", 120, 0, "#d9822b") + leaf("px-l2", 220, 0, "#c0392b") + leaf("px-l3", 300, 0, "#e0a526") + leaf("px-l4", 60, 0, "#c0392b") +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2a2a">PVTA 30 · 31 · UMASS AMHERST</text>',
      sky("pxs1", "#8fc1e3", "#f3e2c0"));
  }

  /* 2. T.T. the Bear's Place, Brookline St, Central Square */
  function pxtt() {
    return svg(
      '<rect width="400" height="260" fill="url(#pxs2)"/>' +
      /* neighbors */
      '<rect x="0" y="40" width="110" height="170" fill="#6e3b2a"/><rect x="290" y="30" width="110" height="180" fill="#5e3426"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (14 + i * 32) + '" y="56" width="20" height="26" fill="#f2c27a" opacity=".55"/><rect x="' + (304 + i * 32) + '" y="48" width="20" height="26" fill="#f2c27a" opacity=".45"/>').join("") +
      /* the club front */
      '<rect x="110" y="56" width="180" height="154" fill="#1d1a1c"/><rect x="110" y="56" width="180" height="10" fill="#2c272a"/>' +
      '<g class="px-flk"><rect x="114" y="76" width="172" height="34" rx="4" fill="none" stroke="' + RED + '" stroke-width="3"/><text x="200" y="98" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" fill="#ff5a6a">T.T. THE BEAR\'S PLACE</text></g>' +
      '<rect x="134" y="122" width="132" height="22" fill="#f4ead8"/><text x="200" y="138" text-anchor="middle" ' + font + ' font-size="12" fill="#111">TONIGHT · PIXIES</text>' +
      '<rect x="176" y="150" width="48" height="60" fill="#3a2a22"/><rect x="180" y="154" width="40" height="56" fill="#ffcf7a" opacity=".6"/>' +
      note("", 196, 150, GOLD) + note("px-n2", 210, 146, SEA) + note("px-n3", 186, 148, "#ff5a6a") +
      /* line out front (silhouettes, no faces) */
      '<g fill="#111">' + [40, 66, 92, 300, 326, 352].map((x, i) => '<g class="px-bob ' + ["", "px-b2", "px-b3"][i % 3] + '"><circle cx="' + x + '" cy="178" r="8"/><rect x="' + (x - 9) + '" y="186" width="18" height="30" rx="5"/></g>').join("") + '</g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#4b4a4f"/><rect x="0" y="208" width="400" height="4" fill="#cfcfcf"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '">BROOKLINE ST · CENTRAL SQUARE · CAMBRIDGE</text>',
      sky("pxs2", "#0e0c1c", "#3a2240"));
  }

  /* 3. The Lovering family garage, Burlington */
  function pxgarage() {
    return svg(
      '<rect width="400" height="260" fill="url(#pxs3)"/>' +
      '<circle cx="50" cy="96" r="34" fill="#c0392b"/><circle cx="356" cy="92" r="36" fill="#d9822b"/><rect x="46" y="110" width="8" height="70" fill="#5a3a22"/><rect x="352" y="108" width="8" height="72" fill="#5a3a22"/>' +
      /* house */
      '<path d="M90 90l110 -56 110 56z" fill="#4a4a52"/><rect x="100" y="90" width="200" height="110" fill="#e8dcc4"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M100 ' + (96 + i * 10) + 'h200" stroke="#d2c4a8" stroke-width="1.5"/>').join("") +
      '<rect x="250" y="104" width="34" height="28" fill="#f3d58a" stroke="#fff" stroke-width="3"/>' +
      /* open garage */
      '<rect x="112" y="108" width="128" height="92" fill="#2a2420"/><rect x="112" y="108" width="128" height="12" fill="#d8ccb2"/>' +
      '<g class="px-bulb"><path d="M176 120v14" stroke="#222" stroke-width="1.5"/><circle cx="176" cy="138" r="5" fill="#ffe9a8"/></g>' +
      '<path d="M150 200l26 -64 26 64z" fill="#ffe9a8" opacity=".12"/>' +
      /* drum kit */
      '<g class="px-hit"><ellipse cx="176" cy="178" rx="20" ry="18" fill="#c8102e" stroke="#eee" stroke-width="3"/><circle cx="176" cy="178" r="9" fill="#f4ead8"/></g>' +
      '<rect x="144" y="160" width="16" height="12" rx="2" fill="#c8102e"/><rect x="192" y="160" width="16" height="12" rx="2" fill="#c8102e"/>' +
      '<path d="M140 148h22M190 146h24" stroke="' + GOLD + '" stroke-width="3"/><path d="M151 148v46M202 146v48" stroke="#999" stroke-width="1.5"/>' +
      /* amps */
      '<rect x="118" y="164" width="22" height="34" fill="#151515" stroke="#555"/><rect x="214" y="164" width="22" height="34" fill="#151515" stroke="#555"/>' +
      note("", 230, 150, GOLD) + note("px-n2", 124, 150, SEA) +
      '<rect x="0" y="200" width="400" height="60" fill="#4f7a3a"/><path d="M112 200l-30 60h188l-30 -60z" fill="#8a8680"/>' +
      leaf("", 340, 0, "#d9822b") + leaf("px-l2", 60, 0, "#c0392b") + leaf("px-l3", 280, 0, "#e0a526") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '">THE GARAGE · BURLINGTON, MASS.</text>',
      sky("pxs3", "#7fa8cc", "#f2d6a6"));
  }

  /* 4. Fort Apache Studios, 1987: the Purple Tape */
  function pxtape() {
    const reel = (cx) => '<g class="px-reel"><circle cx="' + cx + '" cy="62" r="26" fill="#3a3a3a" stroke="#aaa" stroke-width="2"/><circle cx="' + cx + '" cy="62" r="6" fill="#ddd"/>' +
      [0, 120, 240].map(a => '<rect x="' + (cx - 3) + '" y="40" width="6" height="16" fill="#777" transform="rotate(' + a + ' ' + cx + ' 62)"/>').join("") + '</g>';
    const vu = (x, cls) => '<rect x="' + x + '" y="128" width="54" height="34" rx="3" fill="#f3e3b0" stroke="#222"/><path d="M' + (x + 8) + ' 154q19 -18 38 0" stroke="#999" fill="none"/><g class="px-ndl ' + cls + '"><path d="M' + (x + 27) + ' 158l0 -22" stroke="' + RED + '" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#1d1820"/>' +
      '<rect x="0" y="0" width="400" height="110" fill="#2a2330"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 52) + '" y="4" width="46" height="100" fill="#332a3a"/>').join("") +
      /* tape machine */
      '<rect x="120" y="22" width="160" height="84" rx="4" fill="#8f949a" stroke="#555" stroke-width="2"/>' + reel(160) + reel(240) + '<path d="M160 88h80" stroke="#4a3a2a" stroke-width="3"/>' +
      /* desk */
      '<path d="M20 120h360l20 80H0z" fill="#3b3540"/>' + vu(70, "") + vu(140, "px-ndl2") + vu(210, "") + vu(280, "px-ndl2") +
      Array.from({ length: 22 }, (_, i) => '<rect x="' + (30 + i * 16) + '" y="170" width="4" height="22" fill="#111"/><rect x="' + (27 + i * 16) + '" y="' + (174 + (i * 7) % 14) + '" width="10" height="5" fill="#ddd"/>').join("") +
      /* purple cassette */
      '<g transform="rotate(-8 200 226)"><rect x="150" y="204" width="100" height="44" rx="5" fill="#6a2c91" stroke="#2a0f3a" stroke-width="2"/><rect x="162" y="210" width="76" height="14" fill="#f4ead8"/><text x="200" y="221" text-anchor="middle" ' + font + ' font-size="9" fill="#6a2c91">PURPLE TAPE</text>' +
      '<rect x="172" y="228" width="56" height="14" rx="7" fill="#2a0f3a"/><circle class="px-reel" cx="184" cy="235" r="5" fill="#ddd"/><circle class="px-reel" cx="216" cy="235" r="5" fill="#ddd"/></g>' +
      '<text x="200" y="16" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">FORT APACHE STUDIOS · THE FIRST DEMO</text>');
  }

  /* 5. North Pleasant St and Main St, Amherst Center; Town Hall's brownstone tower behind */
  function pxcorner() {
    const tower = '<g transform="translate(0 24)"><rect x="150" y="50" width="70" height="76" fill="#8a4a36"/><rect x="164" y="10" width="42" height="44" fill="#8a4a36"/><path d="M160 12l25 -26 25 26z" fill="#4a5a5a"/>' +
      '<circle cx="185" cy="30" r="9" fill="#f4ead8" stroke="#3a2a22" stroke-width="2"/><path d="M185 30v-6M185 30l4 2" stroke="#3a2a22" stroke-width="1.5"/>' +
      '<rect x="172" y="64" width="10" height="24" rx="5" fill="#2b2f3a"/><rect x="188" y="64" width="10" height="24" rx="5" fill="#2b2f3a"/><path d="M150 96h70" stroke="#6e3a2a" stroke-width="3"/>' +
      '<rect x="220" y="76" width="70" height="50" fill="#7e4331"/><path d="M216 78l39 -22 39 22z" fill="#4a5a5a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pxs5)"/>' +
      '<circle cx="70" cy="96" r="30" fill="#c0392b"/><circle cx="330" cy="92" r="32" fill="#d9822b"/>' + tower +
      '<rect x="0" y="118" width="400" height="106" fill="#7a3f2c"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M0 ' + (126 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 13 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (118 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("PIXIES", 20, 186, 44, GOLD, -6) + tag("DIG FOR FIRE", 26, 214, 17, SEA, -3) + tag("VELOURIA", 196, 210, 18, "#ff5a6a", -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="340" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(260, 98, 136, "N Pleasant St") + sign(290, 124, 80, "Main St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="px-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      leaf("", 120, 0, "#d9822b") + leaf("px-l3", 250, 0, "#c0392b") +
      '<g class="px-sp"><circle cx="232" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="px-sp px-sp2"><circle cx="238" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("pxs5", "#2a2a5e", "#e8a070"));
  }

  window.SCENES = { pxstop: pxstop, pxtt: pxtt, pxgarage: pxgarage, pxtape: pxtape, pxcorner: pxcorner };
})();
