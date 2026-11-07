/* sammus scenes (Regions tab: Upstate New York; Ithaca, NY, where Enongo "Sammus" Lumumba-Kasongo grew up, IHS class of 2004, Cornell BA/PhD). CSS classes prefixed sam- (the page's own anim-train is kept on the bus).
   1 Green Street Station, downtown Ithaca: TCAT's covered downtown hub on E Green St, a white TCAT bus with its blue band pulling in, black stop sign, East Hill behind.
   2 Ithaca Falls on Fall Creek: the wide stepped shale falls in the gorge ("Ithaca is gorges"), white water pouring, autumn maples.
   3 Ithaca High School on N Cayuga St (she graduated in 2004): low brick-and-glass school, flag waving, the bell over the door.
   4 The Haunt, where Ithaca Underground booked her early shows: small club stage, her sampler and mic, lights sweeping, the crowd bobbing.
   5 E State St and N Aurora St on the Ithaca Commons: green signs, SAMMUS tagged on the brick, McGraw Tower up on East Hill behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes samflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.sam-flk{animation:samflick 2.2s infinite}.sam-flk2{animation-delay:.7s}' +
    '@keyframes samfall{from{transform:translateY(-14px)}to{transform:translateY(14px)}}.sam-fall{animation:samfall .9s linear infinite}.sam-fall2{animation-delay:-.45s}' +
    '@keyframes sammist{0%,100%{opacity:.35;transform:translateX(0)}50%{opacity:.7;transform:translateX(8px)}}.sam-mist{animation:sammist 3s ease-in-out infinite}.sam-mist2{animation-delay:-1.5s}' +
    '@keyframes samleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(60px,150px) rotate(360deg);opacity:0}}.sam-leaf{transform-box:fill-box;animation:samleaf 6s linear infinite}.sam-leaf2{animation-delay:-2s}.sam-leaf3{animation-delay:-4s}' +
    '@keyframes samflag{0%,100%{transform:skewY(0) scaleX(1)}50%{transform:skewY(5deg) scaleX(.92)}}.sam-flag{transform-box:fill-box;transform-origin:0% 50%;animation:samflag 1.6s ease-in-out infinite}' +
    '@keyframes sambob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.sam-bob{animation:sambob .7s ease-in-out infinite}.sam-bob2{animation-delay:-.35s}' +
    '@keyframes samsweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.sam-beam{transform-box:fill-box;transform-origin:50% 0%;animation:samsweep 3s ease-in-out infinite}.sam-beam2{animation-delay:-1.5s}' +
    '@keyframes samspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sam-sp{animation:samspray 1.4s ease-out infinite}.sam-sp2{animation-delay:.45s}' +
    '@keyframes samblink{0%,100%{opacity:.25}50%{opacity:1}}.sam-bl{animation:samblink 1.6s ease-in-out infinite}.sam-bl2{animation-delay:-.8s}' +
    '@keyframes samstar{0%,100%{opacity:.2}50%{opacity:1}}.sam-st{animation:samstar 2.4s ease-in-out infinite}.sam-st2{animation-delay:-1.2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const TCAT = "#1f4e79", ORANGE = "#ff8a2a", CYAN = "#38d4ff";
  const maple = (x, y, r, c) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * .6) + '" cy="' + (y + r * .3) + '" r="' + (r * .7) + '" fill="' + c + '"/><circle cx="' + (x + r * .6) + '" cy="' + (y + r * .3) + '" r="' + (r * .7) + '" fill="' + c + '"/>';
  /* McGraw Tower: tall slender gray-stone campanile, clock band, belfry arches, pointed slate roof */
  const mcgraw = (x, base, s) => '<g>' +
    '<rect x="' + (x - 7 * s) + '" y="' + (base - 70 * s) + '" width="' + (14 * s) + '" height="' + (70 * s) + '" fill="#b9b2a2"/>' +
    '<rect x="' + (x - 7 * s) + '" y="' + (base - 70 * s) + '" width="' + (4 * s) + '" height="' + (70 * s) + '" fill="#a39c8c"/>' +
    '<circle cx="' + x + '" cy="' + (base - 52 * s) + '" r="' + (4 * s) + '" fill="#f3efe2" stroke="#5a5446" stroke-width="' + (0.8 * s) + '"/>' +
    '<rect x="' + (x - 8.5 * s) + '" y="' + (base - 82 * s) + '" width="' + (17 * s) + '" height="' + (12 * s) + '" fill="#c4bdad"/>' +
    '<rect x="' + (x - 5 * s) + '" y="' + (base - 80 * s) + '" width="' + (3 * s) + '" height="' + (8 * s) + '" fill="#3b3a36"/><rect x="' + (x + 2 * s) + '" y="' + (base - 80 * s) + '" width="' + (3 * s) + '" height="' + (8 * s) + '" fill="#3b3a36"/>' +
    '<path d="M' + (x - 9 * s) + ' ' + (base - 82 * s) + 'L' + x + ' ' + (base - 104 * s) + 'L' + (x + 9 * s) + ' ' + (base - 82 * s) + 'z" fill="#4c5560"/></g>';

  /* 1. Green Street Station, TCAT */
  function samstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 40) + '" y="128" width="30" height="24" rx="3" fill="#1d2a36"/>').join("");
    const bus = '<g class="anim-train"><rect x="34" y="114" width="310" height="76" rx="10" fill="#f4f6f8" stroke="#8a949c" stroke-width="2"/>' + win +
      '<rect x="34" y="158" width="310" height="10" fill="' + TCAT + '"/><path d="M34 170h310" stroke="#3aa655" stroke-width="3"/>' +
      '<rect x="316" y="122" width="24" height="44" rx="4" fill="#1d2a36"/><rect x="290" y="118" width="50" height="10" rx="2" fill="#111"/><text x="315" y="126.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">10 COMMONS</text>' +
      '<circle cx="90" cy="192" r="12" fill="#222"/><circle cx="90" cy="192" r="5" fill="#888"/><circle cx="292" cy="192" r="12" fill="#222"/><circle cx="292" cy="192" r="5" fill="#888"/>' +
      '<circle cx="338" cy="180" r="3.5" fill="#fff6c2"/><text x="180" y="183" text-anchor="middle" ' + font + ' font-size="9" fill="' + TCAT + '">TCAT</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sams1)"/>' +
      '<path d="M0 92q80 -40 160 -18t150 -16t90 10v40H0z" fill="#5d6e4e"/>' +
      maple(40, 84, 12, "#d9622b") + maple(120, 74, 10, "#e3a02c") + maple(260, 70, 11, "#c94a2a") + maple(360, 78, 12, "#e08a2c") +
      '<g fill="#6f5f58"><rect x="0" y="80" width="60" height="30"/><rect x="300" y="76" width="70" height="34"/><rect x="190" y="84" width="60" height="26"/></g>' +
      '<rect x="0" y="62" width="400" height="10" fill="#4b5a66"/><rect x="0" y="58" width="400" height="5" fill="#8fa0ad"/>' +
      [30, 140, 260, 370].map(x => '<rect x="' + (x - 3) + '" y="72" width="6" height="40" fill="#44505b"/>').join("") +
      '<g class="sam-flk"><rect x="80" y="74" width="40" height="4" fill="#fff3c4"/></g><g class="sam-flk sam-flk2"><rect x="280" y="74" width="40" height="4" fill="#fff3c4"/></g>' +
      '<rect x="0" y="110" width="400" height="96" fill="#55585c"/>' + bus +
      '<rect x="0" y="204" width="400" height="6" fill="#d8d4c8"/><rect x="0" y="210" width="400" height="50" fill="#a19d93"/>' +
      '<rect x="56" y="214" width="288" height="34" rx="3" fill="#111"/><text x="70" y="237" ' + font + ' font-size="16" fill="#fff">Green Street Station</text>' + badge(262, 231, "TCAT", TCAT),
      sky("sams1", "#2a3b66", "#f0a76a"));
  }

  /* 2. Ithaca Falls */
  function samfalls() {
    const steps = [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (110 - i * 4) + '" y="' + (60 + i * 26) + '" width="' + (180 + i * 8) + '" height="8" fill="#5b5e63"/>').join("");
    const water = [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (114 - i * 4) + '" y="' + (66 + i * 26) + '" width="' + (172 + i * 8) + '" height="20" fill="#e9f4fb" opacity=".88"/>').join("");
    const streaks = Array.from({ length: 16 }, (_, i) => '<path d="M' + (120 + i * 11) + ' 60v160" stroke="#bfd9ea" stroke-width="2" stroke-dasharray="6 10"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sams2)"/>' +
      '<path d="M0 30h110v200H0z" fill="#6b6259"/><path d="M290 30h110v200H290z" fill="#6b6259"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (40 + i * 16) + 'h110M290 ' + (44 + i * 16) + 'h110" stroke="#5a5249" stroke-width="2"/>').join("") +
      maple(30, 30, 20, "#d9622b") + maple(80, 22, 16, "#e3a02c") + maple(330, 26, 20, "#c94a2a") + maple(380, 34, 16, "#e8b23a") +
      '<rect x="110" y="40" width="180" height="20" fill="#4f6a3a"/>' + steps + water +
      '<g class="sam-fall">' + streaks + '</g><g class="sam-fall sam-fall2" opacity=".6">' + streaks + '</g>' +
      '<rect x="0" y="214" width="400" height="46" fill="#4f7d9a"/>' +
      '<g class="sam-mist"><ellipse cx="200" cy="214" rx="130" ry="14" fill="#fff" opacity=".6"/></g><g class="sam-mist sam-mist2"><ellipse cx="180" cy="226" rx="90" ry="9" fill="#fff" opacity=".5"/></g>' +
      '<g class="sam-leaf"><path d="M60 60l5 -6 5 6 -5 6z" fill="#e3a02c"/></g><g class="sam-leaf sam-leaf2"><path d="M330 50l5 -6 5 6 -5 6z" fill="#d9622b"/></g><g class="sam-leaf sam-leaf3"><path d="M260 30l4 -5 4 5 -4 5z" fill="#c94a2a"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#eaf4fb">ITHACA FALLS · FALL CREEK GORGE</text>',
      sky("sams2", "#86b7d8", "#e6f0f4"));
  }

  /* 3. Ithaca High School */
  function samschool() {
    const wins = Array.from({ length: 9 }, (_, i) => '<rect x="' + (30 + i * 38) + '" y="104" width="26" height="30" fill="#9fc6dc" stroke="#e8e4d8" stroke-width="2"/><rect x="' + (30 + i * 38) + '" y="146" width="26" height="30" fill="#9fc6dc" stroke="#e8e4d8" stroke-width="2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sams3)"/>' +
      maple(30, 82, 18, "#3f7a3a") + maple(372, 80, 18, "#3f7a3a") +
      '<rect x="14" y="90" width="372" height="100" fill="#a8533a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M14 ' + (96 + i * 8) + 'h372" stroke="#934632" stroke-width="1"/>').join("") +
      '<rect x="14" y="84" width="372" height="10" fill="#e8e4d8"/>' + wins +
      '<rect x="160" y="140" width="80" height="50" fill="#2b3640"/><rect x="164" y="144" width="34" height="46" fill="#7fb0cc" opacity=".7"/><rect x="202" y="144" width="34" height="46" fill="#7fb0cc" opacity=".7"/>' +
      '<rect x="120" y="96" width="160" height="24" fill="#e8e4d8"/><text x="200" y="113" text-anchor="middle" ' + font + ' font-size="13" fill="#2b3640">ITHACA HIGH SCHOOL</text>' +
      '<circle cx="200" cy="132" r="7" fill="#c9a227" stroke="#7a5f12" stroke-width="2"/><path d="M200 132v4" stroke="#7a5f12" stroke-width="2"/>' +
      '<rect x="330" y="40" width="4" height="150" fill="#ccc"/><g class="sam-flag"><rect x="334" y="42" width="40" height="24" fill="#b22234"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="334" y="' + (46 + i * 7) + '" width="40" height="3" fill="#fff"/>').join("") + '<rect x="334" y="42" width="16" height="12" fill="#3c3b6e"/></g>' +
      '<rect x="0" y="190" width="400" height="70" fill="#7a9a5a"/><path d="M170 190h60l30 70H140z" fill="#c9c4b6"/>' +
      '<text x="70" y="230" ' + font + ' font-size="11" fill="#fff">N CAYUGA ST · ITHACA</text>',
      sky("sams3", "#7fb4e0", "#eaf4fb"));
  }

  /* 4. The Haunt (Ithaca Underground show) */
  function samhaunt() {
    const crowd = Array.from({ length: 14 }, (_, i) => '<g class="sam-bob' + (i % 2 ? " sam-bob2" : "") + '"><circle cx="' + (14 + i * 28) + '" cy="' + (216 + (i % 3) * 4) + '" r="11" fill="#141020"/><rect x="' + (2 + i * 28) + '" y="' + (226 + (i % 3) * 4) + '" width="24" height="40" rx="10" fill="#141020"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sams4)"/>' +
      Array.from({ length: 30 }, (_, i) => '<circle class="sam-st' + (i % 2 ? " sam-st2" : "") + '" cx="' + ((i * 53) % 400) + '" cy="' + (10 + (i * 29) % 70) + '" r="1.6" fill="#fff"/>').join("") +
      '<g class="sam-beam"><path d="M110 0l-40 170h80z" fill="' + CYAN + '" opacity=".18"/></g><g class="sam-beam sam-beam2"><path d="M290 0l-40 170h80z" fill="' + ORANGE + '" opacity=".2"/></g>' +
      '<rect x="120" y="22" width="160" height="30" rx="4" fill="#111" stroke="' + ORANGE + '" stroke-width="2"/><text x="200" y="44" text-anchor="middle" ' + font + ' font-size="18" fill="' + ORANGE + '" class="sam-flk">THE HAUNT</text>' +
      '<rect x="40" y="150" width="320" height="24" fill="#3a2c22"/><rect x="40" y="148" width="320" height="4" fill="#5a4636"/>' +
      '<rect x="150" y="120" width="70" height="30" rx="3" fill="#2a2a33"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (156 + (i % 4) * 15) + '" y="' + (125 + Math.floor(i / 4) * 12) + '" width="11" height="9" rx="2" fill="' + (i % 3 ? CYAN : ORANGE) + '" class="sam-bl' + (i % 2 ? " sam-bl2" : "") + '"/>').join("") +
      '<rect x="182" y="150" width="6" height="0"/><rect x="250" y="92" width="3" height="58" fill="#999"/><ellipse cx="251.5" cy="90" rx="5" ry="7" fill="#333"/>' +
      '<rect x="60" y="104" width="44" height="46" fill="#1b1b1b" stroke="#444"/><circle cx="82" cy="120" r="10" fill="#333"/><circle cx="82" cy="140" r="6" fill="#333"/>' +
      '<rect x="296" y="104" width="44" height="46" fill="#1b1b1b" stroke="#444"/><circle cx="318" cy="120" r="10" fill="#333"/><circle cx="318" cy="140" r="6" fill="#333"/>' +
      '<text x="200" y="190" text-anchor="middle" ' + font + ' font-size="10" fill="#d9d2ff">ITHACA UNDERGROUND</text>' + crowd,
      sky("sams4", "#0c0a1a", "#2a1f44"));
  }

  /* 5. E State St and N Aurora St, the Commons */
  function samcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sams5)"/>' +
      '<path d="M0 120q90 -46 200 -34t200 -6v40H0z" fill="#566b48"/>' +
      maple(60, 104, 12, "#d9622b") + maple(330, 100, 12, "#e3a02c") + maple(240, 98, 10, "#c94a2a") +
      mcgraw(160, 112, 0.9) +
      '<rect x="0" y="118" width="400" height="106" fill="#8a4a36"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M0 ' + (126 + i * 8) + 'h400" stroke="#743c2b" stroke-width="1"/>').join("") +
      Array.from({ length: 13 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (118 + i * 8) + 'v8" stroke="#743c2b" stroke-width="1"/>').join("")).join("") +
      tag("SAMMUS", 18, 186, 52, ORANGE, -6) + tag("NU BLACK", 120, 214, 18, CYAN, -4) + tag("ENO", 36, 214, 17, "#c77dff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#6a6660"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(254, 98, 136, "E State St") + sign(262, 124, 120, "N Aurora St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="sam-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="sam-sp"><circle cx="210" cy="164" r="3" fill="' + ORANGE + '" opacity=".7"/></g><g class="sam-sp sam-sp2"><circle cx="216" cy="158" r="2" fill="' + ORANGE + '" opacity=".6"/></g>',
      sky("sams5", "#2e3566", "#f0a070"));
  }

  window.SCENES = { samstation: samstation, samfalls: samfalls, samschool: samschool, samhaunt: samhaunt, samcorner: samcorner };
})();
