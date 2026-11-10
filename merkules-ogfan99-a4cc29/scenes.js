/* Merkules scenes (Regions tab: Canada; Surrey, BC. Cole Stevenson was raised in Green Timbers, Surrey; came up at hip-hop nights at the Olympia on
   King George Blvd, "almost like the 8 Mile of Surrey"; went to the Cloverdale Rodeo as a kid). CSS classes prefixed mk- (the page's own anim-train is kept).
   0 Surrey Central on the SkyTrain Expo Line: elevated guideway platform, a white train with its blue band sliding in, black sign with the blue Expo Line bullet.
   1 Green Timbers Urban Forest: tall Douglas firs around the lake, rain falling, a heron lifting off.
   2 The Olympia on King George Blvd: hip-hop night, marquee bulbs chasing, a line out the door under the rain.
   3 The Cloverdale Rodeo: the arena fence, a bronc bucking, the ferris wheel turning behind.
   4 100 Ave and 140 St in Green Timbers: green signs, MERKULES tagged on the wall, the Central City tower behind with the North Shore mountains. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mkrain{from{transform:translateY(-30px)}to{transform:translateY(270px)}}.mk-rain{animation:mkrain 1.4s linear infinite}.mk-r2{animation-delay:-.5s}.mk-r3{animation-delay:-1s}' +
    '@keyframes mkbulb{0%,49%{opacity:1}50%,100%{opacity:.25}}.mk-b{animation:mkbulb .8s steps(1) infinite}.mk-b2{animation-delay:-.4s}' +
    '@keyframes mkheron{0%{transform:translate(0,0)}100%{transform:translate(420px,-70px)}}.mk-heron{animation:mkheron 10s linear infinite}' +
    '@keyframes mkspin{to{transform:rotate(360deg)}}.mk-spin{transform-box:fill-box;transform-origin:50% 50%;animation:mkspin 14s linear infinite}' +
    '@keyframes mkbuck{0%,100%{transform:rotate(0)}30%{transform:rotate(-12deg) translateY(-6px)}60%{transform:rotate(8deg)}}.mk-buck{transform-box:fill-box;transform-origin:50% 100%;animation:mkbuck 1.1s ease-in-out infinite}' +
    '@keyframes mkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mk-sp{animation:mkspray 1.4s ease-out infinite}.mk-sp2{animation-delay:.45s}' +
    '@keyframes mkblink{0%,60%{opacity:1}61%,100%{opacity:.2}}.mk-blink{animation:mkblink 1.6s steps(1) infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const EXPO = "#1e5aa8", RED = "#d52b1e", GOLD = "#e8b84a", GREEN = "#2f5d3a";
  const rain = (n, c) => ['mk-rain', 'mk-rain mk-r2', 'mk-rain mk-r3'].map((k, j) => '<g class="' + k + '">' +
    Array.from({ length: n }, (_, i) => '<path d="M' + ((i * 53 + j * 19) % 400) + ' ' + ((i * 37 + j * 41) % 220) + 'l-4 12" stroke="' + (c || "#cfe0ee") + '" stroke-width="1.2" opacity=".6"/>').join("") + '</g>').join("");
  const fir = (x, y, h, c) => '<path d="M' + x + ' ' + (y - h) + 'l' + (h * .22) + ' ' + (h * .35) + 'h-' + (h * .1) + 'l' + (h * .2) + ' ' + (h * .3) + 'h-' + (h * .1) + 'l' + (h * .2) + ' ' + (h * .35) + 'h-' + (h * .84) + 'l' + (h * .2) + ' -' + (h * .35) + 'h-' + (h * .1) + 'l' + (h * .2) + ' -' + (h * .3) + 'h-' + (h * .1) + 'z" fill="' + (c || GREEN) + '"/><rect x="' + (x - 2) + '" y="' + y + '" width="4" height="8" fill="#4a3424"/>';

  /* 0. Surrey Central, SkyTrain Expo Line */
  function mkstation() {
    const train = '<g class="anim-train"><rect x="20" y="104" width="290" height="62" rx="10" fill="#f2f4f6" stroke="#8a96a2" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (36 + i * 44) + '" y="114" width="34" height="24" rx="3" fill="#1d2833"/>').join("") +
      '<rect x="20" y="144" width="290" height="8" fill="' + EXPO + '"/><rect x="20" y="155" width="290" height="3" fill="#7a8690"/>' +
      '<path d="M296 106q14 4 14 24v34h-14z" fill="#e3e7ea"/><circle cx="302" cy="158" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mk0)"/>' +
      '<path d="M0 100l50 -30l40 14l50 -34l60 26l50 -18l60 22l40 -12l50 16v20h-400z" fill="#8a9bb0" opacity=".7"/>' +
      '<path d="M120 52l20 -12l14 8" stroke="#eef3f8" stroke-width="4" fill="none"/>' +
      fir(20, 108, 50, "#3c5d48") + fir(374, 110, 56, "#3c5d48") +
      '<rect x="0" y="166" width="400" height="10" fill="#9aa3ac"/><rect x="0" y="176" width="400" height="16" fill="#c6ccd2"/>' +
      '<rect x="60" y="192" width="18" height="68" fill="#b2b9c0"/><rect x="300" y="192" width="18" height="68" fill="#b2b9c0"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#5a6a52"/>' +
      '<path d="M0 166h400" stroke="#f2d33b" stroke-width="4"/>' +
      train + rain(14) +
      '<rect x="40" y="14" width="300" height="40" rx="3" fill="#111"/>' +
      '<circle cx="64" cy="34" r="13" fill="' + EXPO + '"/><text x="64" y="38.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#fff">EXPO</text>' +
      '<text x="86" y="31" ' + font + ' font-size="15" fill="#fff">Surrey Central</text><text x="86" y="46" font-family="Helvetica, Arial, sans-serif" font-size="9" fill="#cfd6de">SkyTrain Expo Line · Surrey, BC</text>',
      sky("mk0", "#6f8092", "#c3ccd6"));
  }

  /* 1. Green Timbers Urban Forest */
  function mkforest() {
    const heron = '<g class="mk-heron"><path d="M-40 150q10 -10 22 -4q10 -12 22 0" stroke="#d9dee4" stroke-width="3" fill="none"/><path d="M-18 146l-10 4" stroke="#d9dee4" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mk1)"/>' +
      Array.from({ length: 9 }, (_, i) => fir(10 + i * 48, 150, 110 + (i % 3) * 14, i % 2 ? "#28503a" : "#2f5d42")).join("") +
      '<rect x="0" y="150" width="400" height="40" fill="#3f6a50"/>' +
      '<ellipse cx="200" cy="200" rx="190" ry="34" fill="#5d8aa6"/><ellipse cx="200" cy="196" rx="150" ry="20" fill="#7aa6c0" opacity=".6"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (90 + i * 40) + ' ' + (196 + (i % 2) * 8) + 'h18" stroke="#cfe3ee" stroke-width="1.5" opacity=".7"/>').join("") +
      '<rect x="0" y="226" width="400" height="34" fill="#4a3a2a"/><path d="M0 232q100 -8 200 0t200 0" stroke="#8a7458" stroke-width="6" fill="none"/>' +
      heron + rain(18) +
      '<rect x="14" y="14" width="168" height="24" rx="3" fill="#5a3e24" stroke="#d9c39a" stroke-width="1.5"/><text x="98" y="30" text-anchor="middle" ' + font + ' font-size="10" fill="#f2e6c8">GREEN TIMBERS FOREST</text>',
      sky("mk1", "#7e8c98", "#b9c4cc"));
  }

  /* 2. The Olympia, King George Blvd: hip-hop night */
  function mkolympia() {
    const bulbs = Array.from({ length: 16 }, (_, i) => '<circle class="mk-b' + (i % 2 ? " mk-b2" : "") + '" cx="' + (92 + i * 14) + '" cy="72" r="3.2" fill="#ffe08a"/>').join("") +
      Array.from({ length: 16 }, (_, i) => '<circle class="mk-b' + (i % 2 ? "" : " mk-b2") + '" cx="' + (92 + i * 14) + '" cy="124" r="3.2" fill="#ffe08a"/>').join("");
    const ppl = Array.from({ length: 7 }, (_, i) => '<g fill="' + ["#2a2a33", "#3a2f2a", "#252a36"][i % 3] + '"><circle cx="' + (40 + i * 22) + '" cy="186" r="7"/><rect x="' + (32 + i * 22) + '" y="194" width="16" height="34" rx="5"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mk2)"/>' +
      '<rect x="0" y="40" width="400" height="190" fill="#3b3440"/>' +
      '<rect x="84" y="64" width="232" height="68" rx="4" fill="#1a1620" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="98" text-anchor="middle" ' + font + ' font-size="24" fill="#fff">THE OLYMPIA</text>' +
      '<text x="200" y="116" text-anchor="middle" ' + font + ' font-size="11" fill="' + RED + '" class="mk-blink">HIP-HOP NIGHT</text>' +
      '<rect x="210" y="150" width="70" height="80" fill="#151219"/><rect x="216" y="156" width="58" height="74" fill="#c08a3a" opacity=".55"/>' +
      '<rect x="296" y="150" width="80" height="50" fill="#2a2430"/><rect x="302" y="156" width="68" height="38" fill="#e3a54a" opacity=".5"/>' +
      ppl +
      '<rect x="0" y="230" width="400" height="30" fill="#2e2e33"/><path d="M0 244h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<text x="384" y="24" text-anchor="end" ' + font + ' font-size="10" fill="#cfd6de">KING GEORGE BLVD</text>' +
      rain(16),
      sky("mk2", "#1b1f33", "#3a3550"));
  }

  /* 3. The Cloverdale Rodeo */
  function mkrodeo() {
    const wheel = '<g class="mk-spin"><circle cx="320" cy="86" r="56" fill="none" stroke="#e8ecf2" stroke-width="3"/>' +
      Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return '<path d="M320 86L' + (320 + 56 * Math.cos(a)).toFixed(1) + ' ' + (86 + 56 * Math.sin(a)).toFixed(1) + '" stroke="#e8ecf2" stroke-width="1.6"/>' +
        '<rect x="' + (314 + 56 * Math.cos(a)).toFixed(1) + '" y="' + (80 + 56 * Math.sin(a)).toFixed(1) + '" width="12" height="10" rx="2" fill="' + [RED, GOLD, EXPO, "#3aa655"][i % 4] + '"/>'; }).join("") + '</g>';
    const bronc = '<g class="mk-buck"><path d="M120 196q-4 -24 20 -30l50 -4q22 0 26 -18l12 -4l6 10l-8 6q-2 24 -24 30l-6 30h-10l-2 -22h-34l-10 22h-10z" fill="#6b3f22"/>' +
      '<path d="M226 142l10 -6" stroke="#3a2214" stroke-width="3"/><path d="M120 176q-14 -4 -20 6" stroke="#3a2214" stroke-width="4" fill="none"/>' +
      '<g fill="#2a3a5a"><rect x="158" y="128" width="14" height="30" rx="4"/></g><path d="M150 126h28l-4 -8h-20z" fill="#c9a24a"/><path d="M172 136l16 -10" stroke="#2a3a5a" stroke-width="4"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mk3)"/>' +
      '<rect x="318" y="86" width="4" height="120" fill="#c9ced6"/><path d="M290 206l30 -120l30 120" stroke="#c9ced6" stroke-width="3" fill="none"/>' + wheel +
      '<rect x="0" y="150" width="400" height="12" fill="#e8e0cc"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (i * 36) + '" y="134" width="6" height="50" fill="#8a6a44"/>').join("") +
      '<rect x="0" y="146" width="400" height="5" fill="#a8845a"/><rect x="0" y="166" width="400" height="5" fill="#a8845a"/>' +
      '<rect x="0" y="184" width="400" height="76" fill="#b08c62"/>' +
      bronc +
      '<g fill="#d9c49a" opacity=".6"><ellipse cx="140" cy="236" rx="18" ry="4"/><ellipse cx="200" cy="240" rx="12" ry="3"/></g>' +
      '<rect x="14" y="14" width="160" height="26" rx="3" fill="' + RED + '" stroke="#fff" stroke-width="1.5"/><text x="94" y="32" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">CLOVERDALE RODEO</text>',
      sky("mk3", "#5b9bd5", "#e9d9b0"));
  }

  /* 4. 100 Ave and 140 St, Green Timbers */
  function mkcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mk4)"/>' +
      '<path d="M0 104l40 -26l40 12l50 -36l50 24l40 -16l60 26l50 -20l70 30v20h-400z" fill="#5e6e8a"/>' +
      /* Central City tower */
      '<rect x="170" y="30" width="44" height="96" fill="#3a4a5e"/><rect x="214" y="44" width="16" height="82" fill="#2e3a4a"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="176" y="' + (36 + i * 9) + '" width="32" height="4" fill="#9fd3ff" opacity="' + (i % 3 ? ".55" : ".9") + '"/>').join("") +
      '<rect x="186" y="22" width="12" height="8" fill="#3a4a5e"/>' +
      fir(30, 128, 70, "#264a34") + fir(66, 128, 54, "#2f5d42") + fir(372, 128, 76, "#264a34") +
      '<rect x="0" y="126" width="400" height="98" fill="#8a8580"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (142 + i * 16) + 'h400" stroke="#76716b" stroke-width="1.4"/>').join("") +
      Array.from({ length: 6 }, (_, i) => Array.from({ length: 11 }, (_, j) => '<path d="M' + (j * 40 + (i % 2) * 20) + ' ' + (126 + i * 16) + 'v16" stroke="#76716b" stroke-width="1.4"/>').join("")).join("") +
      tag("MERKULES", 22, 194, 50, RED, -6) + tag("STOMPDOWN", 140, 216, 18, GOLD, -4) + tag("MERK", 30, 218, 16, "#9fd3ff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#4d4b48"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="330" y="86" width="6" height="138" fill="#2f2f2f"/>' + sign(272, 88, 120, "100 Ave") + sign(278, 114, 108, "140 St") +
      '<g class="mk-sp"><circle cx="150" cy="168" r="3" fill="' + RED + '" opacity=".7"/></g><g class="mk-sp mk-sp2"><circle cx="156" cy="162" r="2" fill="' + RED + '" opacity=".6"/></g>' +
      rain(10),
      sky("mk4", "#3c4660", "#a6b0c0"));
  }

  window.SCENES = { mkstation: mkstation, mkforest: mkforest, mkolympia: mkolympia, mkrodeo: mkrodeo, mkcorner: mkcorner };
})();
