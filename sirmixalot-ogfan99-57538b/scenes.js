/* sirmixalot scenes (Regions tab: The Northwest; Central District, Seattle). CSS classes and ids prefixed mx- (the page's own anim-train is kept).
   1 Judkins Park Station on the 2 Line (opened March 2026): the at-grade island platform in the I-90 median by 23rd Ave S, a Link train sliding in, cars streaming past both sides, black station sign with the blue 2 bullet.
   2 "Posse on Broadway": the black limo cruising Broadway on Capitol Hill at night, wheels spinning slow, the late-night burger stand glowing orange (unbranded), people lined up two by two.
   3 "My Hooptie": a beat-up '69 Buick deuce in the rain, one hubcap, mismatched tires, bubble in the back window, dice swinging, tailpipe dragging sparks.
   4 The home studio where he made his own beats: the 808-style drum machine with its step lights running, a reel-to-reel turning, and a beeper buzzing on the desk ("Beepers").
   5 23rd Ave S and S Jackson St ("Picked up the posse on 23rd and Jackson"): green signs, MIX-A-LOT tagged on the brick, the Space Needle and downtown at dusk behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mxflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.mx-flk{animation:mxflick 2.2s infinite}.mx-flk2{animation-delay:.7s}' +
    '@keyframes mxcarR{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.mx-carR{animation:mxcarR 5s linear infinite}.mx-carR2{animation-delay:-2.5s}' +
    '@keyframes mxcarL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.mx-carL{animation:mxcarL 6s linear infinite}.mx-carL2{animation-delay:-3s}' +
    '@keyframes mxlimo{0%{transform:translateX(-300px)}60%,100%{transform:translateX(0)}}.mx-limo{animation:mxlimo 7s ease-out infinite}' +
    '@keyframes mxspin{to{transform:rotate(360deg)}}.mx-spin{transform-box:fill-box;transform-origin:50% 50%;animation:mxspin 1.6s linear infinite}.mx-slow{animation-duration:4s}' +
    '@keyframes mxbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.mx-bob{animation:mxbob .45s ease-in-out infinite}' +
    '@keyframes mxspark{0%{opacity:1;transform:translate(0,0)}100%{opacity:0;transform:translate(-24px,-8px)}}.mx-spk{animation:mxspark .5s linear infinite}.mx-spk2{animation-delay:-.25s}' +
    '@keyframes mxrain{0%{transform:translate(0,-40px)}100%{transform:translate(-14px,280px)}}.mx-rn{animation:mxrain 1s linear infinite}.mx-rn2{animation-delay:-.33s}.mx-rn3{animation-delay:-.66s}' +
    '@keyframes mxswing{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.mx-dice{transform-box:fill-box;transform-origin:50% 0%;animation:mxswing 1s ease-in-out infinite}' +
    '@keyframes mxstep{0%,100%{opacity:.25}10%,30%{opacity:1}}.mx-st{animation:mxstep 1.6s linear infinite}' +
    '@keyframes mxbuzz{0%,100%{transform:translateX(0)}25%{transform:translateX(-2px)}75%{transform:translateX(2px)}}.mx-buzz{animation:mxbuzz .12s linear infinite}' +
    '@keyframes mxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mx-sp{animation:mxspray 1.4s ease-out infinite}.mx-sp2{animation-delay:.45s}' +
    '@keyframes mxtw{0%,100%{opacity:.3}50%{opacity:1}}.mx-tw{animation:mxtw 1.8s ease-in-out infinite}.mx-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (cx, cy, txt, color) => '<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="' + color + '" stroke="#fff" stroke-width="1.2"/><text x="' + cx + '" y="' + (cy + 4.6) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GOLD = "#ffd23f", TEAL = "#00b2a9", ORANGE = "#e4572e", LINK2 = "#007cad";
  const rain = Array.from({ length: 26 }, (_, i) => '<path class="mx-rn' + (i % 3 === 1 ? " mx-rn2" : i % 3 === 2 ? " mx-rn3" : "") + '" d="M' + ((i * 37) % 420) + ' ' + ((i * 23) % 60) + 'l-3 10" stroke="#a9c4dd" stroke-width="1.2" opacity=".6"/>').join("");
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="54" height="14" rx="4" fill="' + c + '"/><rect x="' + (x + 10) + '" y="' + (y - 8) + '" width="30" height="10" rx="3" fill="' + c + '"/><circle cx="' + (x + 12) + '" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="' + (x + 42) + '" cy="' + (y + 14) + '" r="4" fill="#111"/></g>';

  /* 1. Judkins Park Station, 2 Line */
  function mxstation() {
    const win = Array.from({ length: 8 }, (_, i) => '<rect x="' + (46 + i * 40) + '" y="122" width="28" height="22" rx="3" fill="#1d2833"/>').join("");
    const train = '<g class="anim-train"><rect x="30" y="112" width="350" height="62" rx="12" fill="#f3f5f7" stroke="#9aa3ab" stroke-width="2"/>' + win +
      '<rect x="30" y="152" width="350" height="8" fill="' + LINK2 + '"/><rect x="30" y="160" width="350" height="4" fill="#7ac143"/>' +
      '<rect x="352" y="120" width="24" height="30" rx="4" fill="#26323c"/><circle cx="374" cy="168" r="3" fill="#fff6c2"/>' + bullet(330, 102, "2", LINK2) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mxs1)"/>' +
      '<g fill="#5f7a6a"><circle cx="40" cy="70" r="28"/><circle cx="96" cy="60" r="24"/><circle cx="300" cy="64" r="26"/><circle cx="364" cy="58" r="30"/></g>' +
      '<rect x="0" y="70" width="400" height="10" fill="#8b8f94"/><rect x="0" y="80" width="400" height="6" fill="#6f7378"/><text x="200" y="78.5" text-anchor="middle" ' + font + ' font-size="7" fill="#f3f3f3">23RD AVE S</text>' +
      '<rect x="0" y="86" width="400" height="18" fill="#4a4d52"/>' + car("mx-carR", 0, 88, "#c9473a") + car("mx-carR mx-carR2", 0, 88, "#d8d8d8") +
      '<rect x="0" y="104" width="400" height="6" fill="#c7c1b5"/>' +
      '<rect x="60" y="64" width="4" height="46" fill="#5b636b"/><rect x="336" y="64" width="4" height="46" fill="#5b636b"/><path d="M40 62h320l-10 6H50z" fill="#3c6e8f"/>' +
      train +
      '<rect x="0" y="174" width="400" height="10" fill="#6d6257"/><path d="M0 178h400" stroke="#9a9a9a" stroke-width="2"/>' +
      '<rect x="0" y="184" width="400" height="20" fill="#4a4d52"/>' + car("mx-carL", 0, 186, "#2f6db5") + car("mx-carL mx-carL2", 0, 186, "#e0b23a") +
      '<rect x="0" y="204" width="400" height="56" fill="#c9c4b8"/><rect x="0" y="204" width="400" height="5" fill="#f1d24a"/>' +
      '<rect x="88" y="214" width="224" height="34" rx="3" fill="#111"/><text x="102" y="237" ' + font + ' font-size="16" fill="#fff">Judkins Park</text>' + bullet(290, 231, "2", LINK2),
      sky("mxs1", "#8fa9c2", "#dfe6ec"));
  }

  /* 2. Broadway at night */
  function mxbroadway() {
    const shops = [["#3b2f4f", 0], ["#2d3f4f", 70], ["#4f2f36", 260], ["#2f4f3d", 330]].map(s => '<rect x="' + s[1] + '" y="60" width="70" height="104" fill="' + s[0] + '"/><rect x="' + (s[1] + 10) + '" y="74" width="20" height="18" fill="#f6d27a" opacity=".7"/><rect x="' + (s[1] + 40) + '" y="74" width="20" height="18" fill="#f6d27a" opacity=".5"/><rect x="' + (s[1] + 8) + '" y="122" width="54" height="30" fill="#1b1f2a"/>').join("");
    const line = Array.from({ length: 6 }, (_, i) => '<g class="mx-bob" style="animation-delay:-' + (i * .2) + 's"><rect x="' + (156 + i * 14) + '" y="146" width="7" height="18" rx="3" fill="#15151c"/><circle cx="' + (159.5 + i * 14) + '" cy="142" r="4" fill="#15151c"/></g>').join("");
    const wheel = (x) => '<g class="mx-spin mx-slow"><circle cx="' + x + '" cy="214" r="13" fill="#111"/><circle cx="' + x + '" cy="214" r="7" fill="#c9ced6"/><path d="M' + (x - 7) + ' 214h14M' + x + ' 207v14" stroke="#555" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mxs2)"/>' +
      '<circle class="mx-tw" cx="40" cy="20" r="1.4" fill="#fff"/><circle class="mx-tw mx-tw2" cx="190" cy="30" r="1.4" fill="#fff"/><circle class="mx-tw" cx="320" cy="16" r="1.4" fill="#fff"/>' +
      shops +
      '<rect x="140" y="90" width="120" height="74" fill="#f2e3c4"/><path d="M130 92l70 -26 70 26z" fill="' + ORANGE + '"/>' +
      '<rect x="160" y="40" width="80" height="22" rx="4" fill="' + ORANGE + '" class="mx-flk"/><text x="200" y="56" text-anchor="middle" ' + font + ' font-size="13" fill="#fff6c2">BURGERS</text><rect x="196" y="62" width="8" height="6" fill="#555"/>' +
      '<rect x="148" y="100" width="104" height="36" fill="#fff4d6" opacity=".9"/>' + line +
      '<rect x="0" y="164" width="400" height="96" fill="#2b2d33"/><path d="M0 232h400" stroke="#e9d65a" stroke-width="3" stroke-dasharray="20 14"/>' +
      '<g class="mx-limo"><rect x="60" y="182" width="270" height="30" rx="8" fill="#0d0d10" stroke="#3a3a44" stroke-width="2"/><path d="M110 182l16 -16h150l14 16z" fill="#0d0d10" stroke="#3a3a44" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (132 + i * 30) + '" y="170" width="24" height="12" rx="2" fill="#2a3346"/>').join("") +
      '<rect x="318" y="190" width="12" height="6" fill="#fff6c2"/><rect x="60" y="190" width="8" height="6" fill="#d22630"/>' + wheel(104) + wheel(292) + '</g>' +
      '<rect x="356" y="96" width="5" height="68" fill="#2f2f2f"/>' + sign(310, 98, 88, "Broadway"),
      sky("mxs2", "#0c1028", "#3a2c5a"));
  }

  /* 3. My Hooptie */
  function mxhooptie() {
    return svg(
      '<rect width="400" height="260" fill="url(#mxs3)"/>' +
      '<g fill="#3d4a55"><rect x="0" y="80" width="80" height="80"/><rect x="90" y="96" width="70" height="64"/><rect x="250" y="88" width="60" height="72"/><rect x="320" y="70" width="80" height="90"/></g>' +
      '<rect x="0" y="160" width="400" height="100" fill="#33363c"/><path d="M0 230h400" stroke="#e9d65a" stroke-width="3" stroke-dasharray="20 14"/>' +
      '<g class="mx-bob"><path d="M60 196v-22l40 -6 30 -26h120l34 26 42 6v22z" fill="#6f7d4a" stroke="#3d4628" stroke-width="2"/>' +
      '<path d="M140 168l16 -20h40v20zM206 148h40l24 20h-64z" fill="#2a3346"/><circle cx="230" cy="158" r="7" fill="#9fb3c8" opacity=".9"/>' +
      '<g class="mx-dice"><path d="M200 150v10" stroke="#ddd" stroke-width="1"/><rect x="195" y="160" width="9" height="9" fill="#fff"/><circle cx="198" cy="163" r="1" fill="#111"/><circle cx="201.5" cy="166.5" r="1" fill="#111"/></g>' +
      '<path d="M90 186l20 -8 6 10z" fill="#5a6740"/><path d="M60 186h30" stroke="#8a8a8a" stroke-width="4"/><rect x="314" y="182" width="16" height="6" fill="#fff6c2"/>' +
      '<path d="M260 176l18 6" stroke="#4a5233" stroke-width="2"/></g>' +
      '<circle cx="120" cy="204" r="15" fill="#111"/><circle cx="120" cy="204" r="6" fill="#444"/>' +
      '<circle cx="284" cy="204" r="16" fill="#111"/><circle cx="284" cy="204" r="11" fill="#e8e8e8"/><circle cx="284" cy="204" r="9" fill="#c9ced6"/><circle cx="284" cy="204" r="3" fill="#777"/>' +
      '<path d="M66 196l-30 20" stroke="#555" stroke-width="3"/>' +
      '<circle class="mx-spk" cx="36" cy="216" r="2.5" fill="#ffb347"/><circle class="mx-spk mx-spk2" cx="40" cy="214" r="2" fill="#ffd23f"/><circle class="mx-spk" cx="34" cy="218" r="1.6" fill="#fff"/>' +
      rain +
      '<rect x="30" y="24" width="120" height="26" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="90" y="42" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Rainier Ave S</text>',
      sky("mxs3", "#5c6b7a", "#9aa8b4"));
  }

  /* 4. The home studio */
  function mx808() {
    const steps = Array.from({ length: 16 }, (_, i) => { const c = i < 4 ? "#e4572e" : i < 8 ? "#f39c12" : i < 12 ? "#ffd23f" : "#f4f1e8"; return '<rect x="' + (66 + i * 17) + '" y="190" width="12" height="16" rx="2" fill="' + c + '"/><circle class="mx-st" style="animation-delay:' + (i * .1) + 's" cx="' + (72 + i * 17) + '" cy="184" r="2.4" fill="#ff3b30"/>'; }).join("");
    const knobs = Array.from({ length: 12 }, (_, i) => '<circle cx="' + (76 + i * 22) + '" cy="164" r="5" fill="#d9d4c7" stroke="#555"/><path d="M' + (76 + i * 22) + ' 164l0 -4" stroke="#222" stroke-width="1.5"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1b1d27"/>' +
      '<rect x="30" y="20" width="120" height="84" rx="3" fill="#24364a" stroke="#555" stroke-width="3"/>' + rain.replace(/d="M(\d+) (\d+)/g, (m, x, y) => 'd="M' + (34 + (+x % 112)) + ' ' + (24 + (+y % 40))) +
      '<rect x="190" y="18" width="170" height="96" rx="4" fill="#2a2c34" stroke="#444"/>' +
      '<g class="mx-spin mx-slow"><circle cx="234" cy="60" r="26" fill="#1a1a1a" stroke="#888" stroke-width="2"/><circle cx="234" cy="60" r="5" fill="#ccc"/><path d="M234 36v48M210 60h48" stroke="#555" stroke-width="3"/></g>' +
      '<g class="mx-spin mx-slow"><circle cx="316" cy="60" r="26" fill="#1a1a1a" stroke="#888" stroke-width="2"/><circle cx="316" cy="60" r="5" fill="#ccc"/><path d="M316 36v48M292 60h48" stroke="#555" stroke-width="3"/></g>' +
      '<path d="M234 86h82" stroke="#6b4a2a" stroke-width="3"/>' +
      '<rect x="0" y="140" width="400" height="120" fill="#4a3426"/>' +
      '<rect x="50" y="146" width="300" height="72" rx="4" fill="#3a3a3e" stroke="#222" stroke-width="2"/><rect x="50" y="146" width="300" height="8" fill="#2a2a2e"/>' + knobs + steps +
      '<text x="340" y="153" text-anchor="end" ' + font + ' font-size="7" fill="#f39c12">BASS</text>' +
      '<g class="mx-buzz"><rect x="296" y="226" width="62" height="26" rx="5" fill="#111" stroke="#444"/><rect x="301" y="231" width="42" height="12" fill="#9bd36a"/><text x="322" y="240.5" text-anchor="middle" font-family="monospace" font-size="7" fill="#123">777-9311</text><circle cx="350" cy="237" r="2" fill="#ff3b30" class="mx-flk"/></g>' +
      '<rect x="60" y="226" width="60" height="26" rx="3" fill="#ddd"/><rect x="68" y="232" width="44" height="14" fill="#333"/><g class="mx-spin"><circle cx="80" cy="239" r="4" fill="#ccc"/></g><g class="mx-spin"><circle cx="100" cy="239" r="4" fill="#ccc"/></g>');
  }

  /* 5. 23rd Ave S and S Jackson St */
  function mxcorner() {
    const needle = '<g fill="#eef1f4"><path d="M196 36h8l6 90h-20z"/><path d="M182 126l14 -90M218 126l-14 -90" stroke="#eef1f4" stroke-width="3"/><ellipse cx="200" cy="36" rx="28" ry="7"/><rect x="186" y="30" width="28" height="6"/><path d="M198 30l2 -20 2 20z"/></g>' +
      '<ellipse class="mx-flk" cx="200" cy="38" rx="26" ry="3" fill="' + ORANGE + '" opacity=".8"/><circle class="mx-flk mx-flk2" cx="200" cy="10" r="2" fill="#ff3b30"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mxs5)"/>' +
      '<g fill="#2b3550"><rect x="40" y="76" width="28" height="54"/><rect x="74" y="60" width="24" height="70"/><rect x="104" y="84" width="30" height="46"/><rect x="250" y="70" width="26" height="60"/><rect x="282" y="52" width="30" height="78"/><rect x="318" y="80" width="34" height="50"/></g>' +
      needle +
      Array.from({ length: 24 }, (_, i) => '<rect x="' + [46, 80, 110, 256, 288, 324, 92, 296][i % 8] + '" y="' + (66 + (i * 11) % 56) + '" width="4" height="3" fill="#ffe7a0" opacity=".7"/>').join("") +
      '<rect x="0" y="126" width="400" height="98" fill="#6e3a2e"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#55291f" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#55291f" stroke-width="1"/>').join("")).join("") +
      tag("MIX-A-LOT", 18, 190, 50, GOLD, -6) + tag("POSSE UP", 150, 216, 20, "#7fe3dc", -4) + tag("SEA TOWN", 20, 216, 16, "#ff9a7a", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(268, 98, 122, "23rd Ave S") + sign(278, 124, 112, "S Jackson St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="mx-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="mx-sp"><circle cx="246" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="mx-sp mx-sp2"><circle cx="252" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("mxs5", "#27305a", "#e9876a"));
  }

  window.SCENES = { mxstation: mxstation, mxbroadway: mxbroadway, mxhooptie: mxhooptie, mx808: mx808, mxcorner: mxcorner };
})();
