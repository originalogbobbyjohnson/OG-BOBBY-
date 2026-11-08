/* Shop Boyz scenes (Regions tab: Atlanta; Bankhead / Bowen Homes, Northwest Atlanta). CSS classes and ids prefixed sb- (the page's own anim-train is kept).
   1 MARTA's 2 bus (NextGen route 2, Donald Lee Hollowell Pkwy / Ponce de Leon) rolling out the old Bankhead Hwy toward where Bowen Homes stood:
     white MARTA bus with the blue + orange stripes sliding in to the stop, pines, the bus-stop sign with the 2 badge.
   2 Bowen Homes (1964-2009, 104 yellow-brick buildings off Bankhead Hwy just inside I-285): the yellow-brick two-story rows, and in front the
     makeshift garage where Meany, Fat and Sheed worked on cars before the music (the "shop"): a car up on a jack, sparks, a swinging wrench.
   3 "I'm flyin' down 20": the I-20 interstate shield on an overhead gantry, a black late-60s muscle car (like the GTO in the video) speeding under it, downtown far off.
   4 Hood Rock: the rock-show stage of "Party Like a Rockstar" - stacked amps (no logos), a guitar with a skull belt and wallet chain hung on the mic stand,
     lights sweeping, the crowd bobbing and one fan crowd-surfing.
   5 Donald Lee Hollowell Pkwy NW (old Bankhead Hwy) and James Jackson Pkwy NW, by the old Bowen Homes land: green signs, SHOP BOYZ tagged with
     TOTALLY DUDE and HOOD ROCK, downtown's skyline and the '96 Olympic cauldron tower far off behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sbblink{0%,100%{opacity:1}50%{opacity:.2}}.sb-blink{animation:sbblink 1.1s infinite}.sb-blink2{animation-delay:-.55s}' +
    '@keyframes sbbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}.sb-bob{animation:sbbob .5s ease-in-out infinite}.sb-bob2{animation-delay:-.25s}.sb-bob3{animation-delay:-.12s}' +
    '@keyframes sbspark{0%{transform:translate(0,0);opacity:1}100%{transform:translate(14px,-16px);opacity:0}}.sb-spark{animation:sbspark .7s linear infinite}.sb-spark2{animation-delay:-.35s}.sb-spark3{animation-delay:-.2s}' +
    '@keyframes sbwrench{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.sb-wrench{transform-box:fill-box;transform-origin:50% 0%;animation:sbwrench 1.2s ease-in-out infinite}' +
    '@keyframes sbzoom{from{transform:translateX(-170px)}to{transform:translateX(470px)}}.sb-zoom{animation:sbzoom 3.2s linear infinite}' +
    '@keyframes sbzooml{from{transform:translateX(460px)}to{transform:translateX(-160px)}}.sb-zooml{animation:sbzooml 5s linear infinite;animation-delay:-2s}' +
    '@keyframes sbbeam{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.sb-beam{transform-box:fill-box;transform-origin:50% 0%;animation:sbbeam 2.4s ease-in-out infinite}.sb-beam2{animation-delay:-1.2s}' +
    '@keyframes sbsurf{0%,100%{transform:translate(0,0) rotate(-4deg)}50%{transform:translate(30px,-4px) rotate(4deg)}}.sb-surf{transform-box:fill-box;transform-origin:50% 50%;animation:sbsurf 2.6s ease-in-out infinite}' +
    '@keyframes sbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.sb-sp{animation:sbspray 1.4s ease-out infinite}.sb-sp2{animation-delay:.5s}' +
    '@keyframes sbtw{0%,100%{opacity:.25}50%{opacity:1}}.sb-tw{animation:sbtw 1.8s ease-in-out infinite}.sb-tw2{animation-delay:-.9s}' +
    '@keyframes sbflame{0%,100%{transform:scaleY(1);opacity:.95}50%{transform:scaleY(1.35);opacity:.7}}.sb-flame{transform-box:fill-box;transform-origin:50% 100%;animation:sbflame .35s ease-in-out infinite}.sb-flame2{animation-delay:-.17s}' +
    '@keyframes sbnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.sb-note{animation:sbnote 2.2s linear infinite}.sb-note2{animation-delay:-1.1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 11) + '" fill="#fff">' + txt + '</text>';
  const label = (x, w, txt) => '<rect x="' + x + '" y="234" width="' + w + '" height="18" rx="3" fill="#000" opacity=".6"/><text x="' + (x + w / 2) + '" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="' + (i % 4 ? "" : "sb-tw" + (i % 8 ? "" : " sb-tw2")) + '" cx="' + ((i * 71) % 400) + '" cy="' + (6 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.8 : 1.3) + '" fill="#fff" opacity=".7"/>').join("");
  const pine = (x, y, s) => { s = s || 1; return '<rect x="' + (x - 2 * s) + '" y="' + (y + 40 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#4a3322"/>' +
    '<path d="M' + x + ' ' + y + 'l' + (14 * s) + ' ' + (22 * s) + 'h' + (-6 * s) + 'l' + (12 * s) + ' ' + (20 * s) + 'h' + (-40 * s) + 'l' + (12 * s) + ' ' + (-20 * s) + 'h' + (-6 * s) + 'z" fill="#1f4a2c"/>'; };
  const RED = "#e8262b", CHROME = "#c9ced4", GOLD = "#ffd23f", MBLUE = "#0a5aa8", MORANGE = "#f47b20";
  const skyline = (y, col) => '<g fill="' + col + '">' +
    '<rect x="0" y="' + (y + 20) + '" width="30" height="40"/><rect x="34" y="' + (y + 6) + '" width="20" height="54"/><rect x="58" y="' + (y + 26) + '" width="26" height="34"/>' +
    '<rect x="88" y="' + (y - 8) + '" width="18" height="68"/><path d="M88 ' + (y - 8) + 'l9 -12l9 12z"/><rect x="110" y="' + (y + 14) + '" width="24" height="46"/>' +
    '<rect x="138" y="' + (y + 2) + '" width="16" height="58"/><rect x="158" y="' + (y + 22) + '" width="30" height="38"/></g>';

  /* 1. MARTA's 2 bus on Donald Lee Hollowell Pkwy */
  function sbbus() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (92 + i * 36) + '" y="128" width="28" height="22" rx="2" fill="#1d2b38"/>').join("");
    const bus = '<g class="anim-train"><rect x="70" y="118" width="268" height="66" rx="8" fill="#f4f4f2" stroke="#7d848b" stroke-width="2"/>' + win +
      '<rect x="70" y="156" width="268" height="6" fill="' + MBLUE + '"/><rect x="70" y="163" width="268" height="4" fill="' + MORANGE + '"/>' +
      '<rect x="306" y="124" width="28" height="44" rx="3" fill="#2a3a48"/><rect x="72" y="122" width="16" height="30" rx="2" fill="#2a3a48"/>' +
      '<rect x="230" y="120" width="70" height="7" rx="1" fill="#111"/><text x="265" y="126" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb347">2 HOLLOWELL</text>' +
      '<circle cx="330" cy="176" r="3.5" fill="#fff6c2"/><circle cx="110" cy="186" r="11" fill="#1a1a1a"/><circle cx="110" cy="186" r="4" fill="#888"/>' +
      '<circle cx="290" cy="186" r="11" fill="#1a1a1a"/><circle cx="290" cy="186" r="4" fill="#888"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sbs1)"/>' +
      '<circle cx="330" cy="46" r="22" fill="#ffe7a8" opacity=".9"/>' +
      [8, 40, 78, 120, 170, 222, 262, 300, 352, 388].map((x, i) => pine(x, 54 + (i % 3) * 10, 1.1)).join("") +
      '<rect x="0" y="112" width="400" height="10" fill="#7c8a5a"/>' +
      '<rect x="0" y="188" width="400" height="72" fill="#3a3a3e"/><rect x="0" y="186" width="400" height="4" fill="#b9b4a8"/>' +
      '<path d="M0 226h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' + bus +
      /* bus stop sign */
      '<rect x="356" y="74" width="4" height="114" fill="#6b6b6b"/><rect x="340" y="72" width="36" height="48" rx="3" fill="' + MBLUE + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="358" y="86" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">BUS</text><circle cx="358" cy="102" r="11" fill="#fff"/><text x="358" y="107" text-anchor="middle" ' + font + ' font-size="14" fill="' + MBLUE + '">2</text>' +
      sign(10, 196, 170, "Donald Lee Hollowell Pkwy NW", 10) +
      label(70, 260, "MARTA 2 · OUT THE OLD BANKHEAD HWY"),
      sky("sbs1", "#f08a4b", "#ffd9a0"));
  }

  /* 2. Bowen Homes yellow-brick rows + the makeshift garage */
  function sbshop() {
    const block = (x, y, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="66" fill="#d8b15a"/>' +
      '<g stroke="#b88f3f" stroke-width="1">' + Array.from({ length: 6 }, (_, i) => '<path d="M' + x + ' ' + (y + 8 + i * 10) + 'h' + w + '"/>').join("") + '</g>' +
      Array.from({ length: Math.floor(w / 30) }, (_, i) => '<rect x="' + (x + 8 + i * 30) + '" y="' + (y + 10) + '" width="14" height="14" fill="#2c3440" stroke="#f2eee2" stroke-width="2"/>' +
        '<rect x="' + (x + 8 + i * 30) + '" y="' + (y + 40) + '" width="14" height="14" fill="#2c3440" stroke="#f2eee2" stroke-width="2"/>').join("") +
      '<rect x="' + (x - 3) + '" y="' + (y - 6) + '" width="' + (w + 6) + '" height="7" fill="#6b5a44"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sbs2)"/>' +
      block(6, 46, 150) + block(200, 54, 194) +
      '<rect x="0" y="118" width="400" height="142" fill="#6d8a45"/><rect x="0" y="200" width="400" height="60" fill="#8a8578"/>' +
      /* makeshift garage: tin roof on posts */
      '<path d="M96 104l208 0l18 18h-244z" fill="#9aa3aa" stroke="#6b737a" stroke-width="2"/>' +
      '<g stroke="#6b737a" stroke-width="2" fill="none">' + [110, 160, 210, 260, 300].map(x => '<path d="M' + x + ' 104l' + (x < 200 ? -8 : 8) + ' 18"/>').join("") + '</g>' +
      '<rect x="84" y="122" width="6" height="92" fill="#5c4632"/><rect x="310" y="122" width="6" height="92" fill="#5c4632"/>' +
      /* car up on a jack */
      '<g><path d="M120 176q6 -24 40 -26h70q28 2 44 26z" fill="' + RED + '" stroke="#7a1416" stroke-width="2"/><rect x="112" y="174" width="172" height="20" rx="6" fill="' + RED + '" stroke="#7a1416" stroke-width="2"/>' +
      '<path d="M168 154h30v20h-38z" fill="#9ec5df"/><path d="M204 154h26l14 20h-40z" fill="#9ec5df"/>' +
      '<circle cx="146" cy="196" r="13" fill="#1a1a1a"/><circle cx="146" cy="196" r="6" fill="' + CHROME + '"/>' +
      '<circle cx="250" cy="196" r="13" fill="#1a1a1a"/><circle cx="250" cy="196" r="6" fill="' + CHROME + '"/></g>' +
      '<rect x="190" y="194" width="16" height="16" fill="#c33"/><path d="M184 212h28" stroke="#444" stroke-width="4"/>' +
      /* sparks + swinging wrench */
      '<g fill="' + GOLD + '"><circle class="sb-spark" cx="286" cy="186" r="2"/><circle class="sb-spark sb-spark2" cx="288" cy="184" r="1.6"/><circle class="sb-spark sb-spark3" cx="284" cy="188" r="1.4"/></g>' +
      '<g class="sb-wrench"><rect x="296" y="128" width="5" height="34" rx="2" fill="' + CHROME + '"/><path d="M292 162h13v6h-4v-3h-5v3h-4z" fill="' + CHROME + '"/></g>' +
      '<rect x="322" y="176" width="40" height="32" rx="2" fill="' + RED + '" stroke="#7a1416" stroke-width="2"/><rect x="322" y="188" width="40" height="3" fill="#7a1416"/><rect x="336" y="170" width="12" height="6" fill="#333"/>' +
      '<g fill="#555"><rect x="40" y="196" width="22" height="22" rx="11" fill="#1f1f1f"/><circle cx="51" cy="207" r="5" fill="#777"/><rect x="38" y="214" width="26" height="8" rx="4" fill="#1f1f1f"/></g>' +
      label(60, 280, "BOWEN HOMES · WHERE THE SHOP BOYZ WORKED ON CARS"),
      sky("sbs2", "#7fb6e6", "#e8f0f4"));
  }

  /* 3. I-20, "flyin' down 20" */
  function sbtwenty() {
    const shield = (x, y) => '<path d="M' + x + ' ' + y + 'h44q4 26 -22 46q-26 -20 -22 -46z" fill="#fff"/>' +
      '<path d="M' + (x + 3) + ' ' + (y + 14) + 'h38q0 18 -19 30q-19 -12 -19 -30z" fill="' + MBLUE + '"/><path d="M' + (x + 3) + ' ' + (y + 3) + 'h38v10h-38z" fill="#c8102e"/>' +
      '<text x="' + (x + 22) + '" y="' + (y + 11) + '" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">INTERSTATE</text>' +
      '<text x="' + (x + 22) + '" y="' + (y + 34) + '" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">20</text>';
    const car = '<g class="sb-zoom"><g class="sb-flame"><path d="M2 196l-26 -4l26 -6z" fill="' + MORANGE + '"/></g><g class="sb-flame sb-flame2"><path d="M2 194l-16 -2l16 -3z" fill="' + GOLD + '"/></g>' +
      '<path d="M8 196q2 -14 26 -18l22 -12h46l20 12q22 2 26 18z" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<path d="M60 168h18v12h-30z" fill="#7aa9c7"/><path d="M82 168h18l14 12h-32z" fill="#7aa9c7"/><rect x="8" y="186" width="140" height="4" fill="' + CHROME + '"/>' +
      '<circle cx="38" cy="200" r="11" fill="#1a1a1a"/><circle cx="38" cy="200" r="5" fill="' + CHROME + '"/><circle cx="122" cy="200" r="11" fill="#1a1a1a"/><circle cx="122" cy="200" r="5" fill="' + CHROME + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sbs3)"/>' + stars(16) +
      '<g transform="translate(200 50)">' + skyline(40, "#2f2b52") + '</g>' +
      /* overhead gantry */
      '<rect x="20" y="40" width="8" height="150" fill="#7d8186"/><rect x="372" y="40" width="8" height="150" fill="#7d8186"/><rect x="20" y="40" width="360" height="8" fill="#8f9398"/>' +
      '<rect x="60" y="48" width="170" height="62" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' + shield(72, 54) +
      '<text x="124" y="74" ' + font + ' font-size="13" fill="#fff">EAST</text><text x="124" y="94" ' + font + ' font-size="12" fill="#fff">Downtown</text>' +
      '<rect x="244" y="48" width="110" height="62" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' + shield(254, 54) +
      '<text x="304" y="74" ' + font + ' font-size="13" fill="#fff">WEST</text><text x="304" y="94" ' + font + ' font-size="10" fill="#fff">Alabama</text>' +
      '<rect x="0" y="150" width="400" height="110" fill="#3a3a3e"/><path d="M0 214h400" stroke="#fff" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="0" y="146" width="400" height="6" fill="#9a9a96"/>' + car +
      label(110, 180, "I'M FLYIN' DOWN 20"),
      sky("sbs3", "#141a3c", "#d0603a"));
  }

  /* 4. Hood Rock: the rock show */
  function sbstage() {
    const amp = (x, y) => '<rect x="' + x + '" y="' + y + '" width="46" height="34" rx="2" fill="#1b1b1b" stroke="#555" stroke-width="2"/>' +
      '<rect x="' + (x + 4) + '" y="' + (y + 8) + '" width="38" height="22" fill="#2b2b2b"/><g fill="#d0b070">' + [0, 1, 2, 3].map(i => '<circle cx="' + (x + 8 + i * 10) + '" cy="' + (y + 4) + '" r="1.6"/>').join("") + '</g>';
    const head = (x, c) => '<g class="sb-bob' + c + '"><circle cx="' + x + '" cy="214" r="10" fill="#0c0c10"/><rect x="' + (x - 13) + '" y="222" width="26" height="40" rx="8" fill="#0c0c10"/>' +
      (x % 3 ? '<path d="M' + (x - 10) + ' 216l-8 -22" stroke="#0c0c10" stroke-width="5" stroke-linecap="round"/>' : '') + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sbs4)"/>' +
      '<g opacity=".5"><path class="sb-beam" d="M110 0l-40 170h80z" fill="' + RED + '" opacity=".45"/><path class="sb-beam sb-beam2" d="M290 0l-40 170h80z" fill="' + GOLD + '" opacity=".4"/>' +
      '<path class="sb-beam sb-beam2" d="M200 0l-30 170h60z" fill="#ffffff" opacity=".25"/></g>' +
      '<rect x="0" y="0" width="400" height="10" fill="#222"/>' + [60, 140, 220, 300].map(x => '<rect class="sb-blink' + (x % 120 ? ' sb-blink2' : '') + '" x="' + x + '" y="8" width="18" height="8" rx="2" fill="#fff6c2"/>').join("") +
      /* stage */
      '<rect x="0" y="168" width="400" height="16" fill="#2a2a2a"/><rect x="0" y="166" width="400" height="3" fill="' + RED + '"/>' +
      amp(20, 98) + amp(20, 132) + amp(68, 98) + amp(68, 132) + amp(286, 98) + amp(286, 132) + amp(334, 98) + amp(334, 132) +
      /* mic stand with guitar, skull belt and wallet chain */
      '<rect x="198" y="78" width="4" height="90" fill="#9a9a9a"/><rect x="186" y="164" width="28" height="4" fill="#9a9a9a"/><circle cx="200" cy="76" r="5" fill="#333"/>' +
      '<g transform="rotate(-28 200 120)"><path d="M178 124q-14 0 -14 14q0 16 18 16q10 0 14 -8q4 8 14 8q18 0 18 -16q0 -14 -14 -14q-6 0 -10 4h-12q-4 -4 -14 -4z" fill="' + RED + '" stroke="#000" stroke-width="2"/>' +
      '<rect x="206" y="80" width="8" height="58" fill="#3b2a1a"/><rect x="204" y="70" width="12" height="12" rx="2" fill="#111"/><circle cx="196" cy="140" r="5" fill="#111"/>' +
      '<path d="M182 132l-6 10l8 -2l-2 8l8 -12z" fill="' + GOLD + '"/></g>' +
      '<path d="M150 104q50 30 100 0" fill="none" stroke="#111" stroke-width="5"/><g fill="#f2f2f2"><circle cx="200" cy="118" r="6"/><rect x="197" y="122" width="6" height="4"/></g>' +
      '<circle cx="198" cy="117" r="1.4" fill="#111"/><circle cx="202" cy="117" r="1.4" fill="#111"/>' +
      '<path d="M156 108q-10 26 8 34q10 4 18 -2" fill="none" stroke="' + CHROME + '" stroke-width="2.5" stroke-dasharray="4 2"/>' +
      '<g fill="' + GOLD + '"><text class="sb-note" x="130" y="80" ' + font + ' font-size="18">&#9835;</text><text class="sb-note sb-note2" x="262" y="74" ' + font + ' font-size="16">&#9834;</text></g>' +
      /* crowd */
      '<rect x="0" y="184" width="400" height="76" fill="#15121e"/>' +
      [16, 50, 84, 118, 152, 186, 220, 254, 288, 322, 356, 390].map((x, i) => head(x, i % 3 ? (i % 3 === 1 ? " sb-bob2" : " sb-bob3") : "")).join("") +
      '<g class="sb-surf"><rect x="150" y="190" width="46" height="12" rx="6" fill="#0c0c10"/><circle cx="200" cy="194" r="8" fill="#0c0c10"/><path d="M160 192l-8 -12M186 192l6 -12" stroke="#0c0c10" stroke-width="4" stroke-linecap="round"/></g>' +
      label(100, 200, "HOOD ROCK · PARTY LIKE A ROCKSTAR"),
      sky("sbs4", "#1a0710", "#4a0f1c"));
  }

  /* 5. Donald Lee Hollowell Pkwy NW and James Jackson Pkwy NW */
  function sbcorner() {
    const cauldron = '<g><path d="M300 110l10 -64h8l10 64z" fill="#c9c6bf"/><g stroke="#8d8a84" stroke-width="1.5" fill="none"><path d="M304 100l20 -10M306 86l18 -10M308 72l14 -8M310 60l10 -6"/></g>' +
      '<path d="M296 46q18 -14 36 0z" fill="#bdb9b0"/><g class="sb-flame"><path d="M306 44q8 -22 16 0z" fill="' + MORANGE + '"/></g><g class="sb-flame sb-flame2"><path d="M310 44q4 -12 8 0z" fill="' + GOLD + '"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sbs5)"/>' + stars(22) +
      '<g transform="translate(160 40)">' + skyline(30, "#2e2a4a") + '</g>' + cauldron +
      /* wall */
      '<rect x="0" y="104" width="270" height="100" fill="#6a5240"/><g stroke="#57422f" stroke-width="1">' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (114 + i * 10) + 'h270"/>').join("") + '</g>' +
      tag("TOTALLY DUDE", 18, 132, 17, GOLD, -3) +
      tag("SHOP", 22, 174, 42, RED, -6) + tag("BOYZ", 146, 168, 42, CHROME, -5) + tag("HOOD ROCK", 150, 198, 15, "#fff", -2) +
      '<g fill="' + RED + '"><circle class="sb-sp" cx="246" cy="160" r="3"/><circle class="sb-sp sb-sp2" cx="238" cy="168" r="2.5"/></g>' +
      /* sign pole */
      '<rect x="330" y="112" width="6" height="94" fill="#6b6b6b"/>' + sign(276, 112, 120, "D L Hollowell Pkwy NW", 9.5) + sign(272, 138, 126, "James Jackson Pkwy NW", 9.5) +
      '<rect x="0" y="204" width="400" height="56" fill="#3a3a3e"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>',
      sky("sbs5", "#1b1f4a", "#c0603a"));
  }

  window.SCENES = { sbbus, sbshop, sbtwenty, sbstage, sbcorner };
})();
