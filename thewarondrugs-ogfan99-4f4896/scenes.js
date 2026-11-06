/* thewarondrugs scenes (Regions tab: Philadelphia; Fishtown, where Adam Granduciel lived and the band was founded). CSS classes prefixed wd- (the page's own anim-train is kept).
   1 Berks on SEPTA's Market-Frankford Line, up on the El over Front St at the Fishtown/Kensington line: steel girders, the platform canopy, a silver car with the blue MFL band sliding in.
   2 The Trocadero in Chinatown (10th & Arch), the old Victorian theater where Adam saw Bob Dylan ("Like when we went to see Bob Dylan", I Don't Live Here Anymore): brick front, arched windows, the vertical blade sign, marquee bulbs chasing; the Chinatown Friendship Gate down the block.
   3 Dickinson College in Carlisle, PA, where Adam went to school: Old West, the gray limestone hall with its white cupola and gold mermaid weathervane, autumn leaves falling.
   4 The rehearsal room: the unfinished, unheated basement in an old warehouse building a couple of minutes from his Fishtown house: concrete walls, amps, drum kit, keys, a bare bulb swinging, sound rolling out in waves.
   5 E Columbia Ave and N Delaware Ave at Penn Treaty Park: green signs, THE WAR ON DRUGS tagged on the wall, the park's white marble treaty obelisk and the Delaware River behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wdbulb{0%,100%{opacity:1}50%{opacity:.25}}.wd-bulb{animation:wdbulb 1s steps(1) infinite}.wd-b2{animation-delay:-.5s}' +
    '@keyframes wdswing{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}.wd-swing{transform-origin:200px 0;animation:wdswing 3s ease-in-out infinite}' +
    '@keyframes wdwave{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.wd-wv{transform-box:fill-box;transform-origin:50% 50%;animation:wdwave 2.4s ease-out infinite}.wd-wv2{animation-delay:-.8s}.wd-wv3{animation-delay:-1.6s}' +
    '@keyframes wdleaf{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(30px,130px) rotate(220deg);opacity:0}}.wd-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:wdleaf 4.6s linear infinite}.wd-l2{animation-delay:-1.5s}.wd-l3{animation-delay:-3s}' +
    '@keyframes wdvane{0%,100%{transform:scaleX(1)}50%{transform:scaleX(-1)}}.wd-vane{transform-box:fill-box;transform-origin:50% 50%;animation:wdvane 6s ease-in-out infinite}' +
    '@keyframes wdriver{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.wd-riv{animation:wdriver 3s ease-in-out infinite}.wd-riv2{animation-delay:-1.5s}' +
    '@keyframes wdboat{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.wd-boat{animation:wdboat 16s linear infinite}' +
    '@keyframes wdsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.wd-sp{animation:wdsp 1.4s ease-out infinite}.wd-sp2{animation-delay:.45s}' +
    '@keyframes wdstick{0%,100%{transform:rotate(0)}50%{transform:rotate(-24deg)}}.wd-stick{transform-box:fill-box;transform-origin:0% 100%;animation:wdstick .5s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#5a3e28"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const bricks = (x0, y0, w, h, c) => Array.from({ length: Math.floor(h / 7) }, (_, i) => '<path d="M' + x0 + ' ' + (y0 + 7 + i * 7) + 'h' + w + '" stroke="' + c + '" stroke-width="1"/>').join("");
  const AMBER = "#e8b04a", BLUE = "#6fa8dc", RED = "#d65a4a", MFL = "#0f75bc";

  /* 1. Berks, Market-Frankford El */
  function wdstation() {
    const car = (x) => '<rect x="' + x + '" y="112" width="196" height="62" rx="5" fill="#d3d7dc" stroke="#8a9198" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + 14 + i * 36) + '" y="120" width="26" height="22" rx="2" fill="#1c252e"/>').join("") +
      '<rect x="' + x + '" y="148" width="196" height="7" fill="' + MFL + '"/>' +
      '<rect x="' + (x + 84) + '" y="120" width="26" height="50" fill="#b9bfc6" stroke="#8a9198"/><path d="M' + (x + 97) + ' 120v50" stroke="#8a9198"/>';
    const train = '<g class="anim-train">' + car(4) + car(204) +
      '<rect x="210" y="103" width="80" height="9" rx="2" fill="#111"/><text x="250" y="110.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb000">FRANKFORD</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#wd-s1)"/>' +
      /* Fishtown rowhouse tops and a church spire behind */
      '<rect x="0" y="40" width="70" height="60" fill="#7a4434"/><rect x="70" y="50" width="60" height="50" fill="#6a3a2e"/><rect x="300" y="44" width="100" height="56" fill="#7a4434"/>' +
      '<path d="M160 100v-50l10 -30l10 30v50z" fill="#5a5560"/><rect x="236" y="56" width="50" height="44" fill="#6a3a2e"/>' +
      /* canopy */
      '<rect x="0" y="80" width="400" height="10" fill="#3a4048"/>' + [20, 120, 220, 320].map(x => '<rect x="' + (x + 30) + '" y="90" width="6" height="94" fill="#4a525c"/>').join("") +
      train +
      /* platform edge + steel girders under it */
      '<rect x="0" y="178" width="400" height="10" fill="#b4b0a8"/><rect x="0" y="178" width="400" height="3" fill="#f0d24a"/>' +
      '<rect x="0" y="188" width="400" height="22" fill="#4a5662"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 188l10 22l10 -22" stroke="#33404a" stroke-width="2" fill="none"/>').join("") +
      [40, 200, 360].map(x => '<rect x="' + (x - 6) + '" y="210" width="12" height="50" fill="#4a5662"/>').join("") +
      '<rect x="0" y="246" width="400" height="14" fill="#3a3a40"/>' +
      '<rect x="66" y="214" width="268" height="30" rx="3" fill="#111" stroke="#555" stroke-width="1.5"/>' + badge(78, 229, "MFL", MFL) +
      '<text x="222" y="236" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">Berks</text>',
      sky("wd-s1", "#7fb2d8", "#e9d7c0"));
  }

  /* 2. The Trocadero, Chinatown */
  function wdtroc() {
    const bulbs = (x, y, w) => Array.from({ length: Math.floor(w / 10) }, (_, i) => '<circle cx="' + (x + 5 + i * 10) + '" cy="' + y + '" r="2.3" fill="' + AMBER + '" class="wd-bulb' + (i % 2 ? ' wd-b2' : '') + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#wd-s2)"/>' +
      /* Friendship Gate down the block */
      '<g transform="translate(14 70)"><rect x="6" y="40" width="8" height="70" fill="#b8322a"/><rect x="66" y="40" width="8" height="70" fill="#b8322a"/><rect x="0" y="30" width="80" height="12" fill="#2f7a4a"/><path d="M-6 30q46 -22 92 0z" fill="#d4a020"/><rect x="2" y="44" width="76" height="6" fill="#d4a020"/><path d="M-6 30l-4 -6M86 30l4 -6" stroke="#d4a020" stroke-width="3"/></g>' +
      /* the theater */
      '<rect x="120" y="30" width="200" height="170" fill="#8a4a38"/>' + bricks(120, 30, 200, 170, "#763e30") +
      '<path d="M114 34l106 -24l106 24z" fill="#c9b79a" stroke="#7a6a52" stroke-width="2"/>' +
      [140, 186, 232, 278].map(x => '<path d="M' + x + ' 96v-40q11 -14 22 0v40z" fill="#ffd98a" stroke="#efe0c0" stroke-width="2.5"/>').join("") +
      '<rect x="114" y="100" width="212" height="6" fill="#c9b79a"/>' +
      /* blade sign */
      '<rect x="206" y="40" width="28" height="104" rx="3" fill="#1a1a22" stroke="' + AMBER + '" stroke-width="2"/>' +
      ['T', 'R', 'O', 'C'].map((c, i) => '<text x="220" y="' + (62 + i * 22) + '" text-anchor="middle" ' + font + ' font-size="16" fill="' + AMBER + '" class="wd-bulb' + (i % 2 ? ' wd-b2' : '') + '">' + c + '</text>').join("") +
      /* marquee */
      '<rect x="138" y="144" width="164" height="26" fill="#1b1b22" stroke="#efe0c0" stroke-width="2"/>' + bulbs(140, 147, 160) + bulbs(140, 167, 160) +
      '<text x="220" y="160.5" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">TONIGHT  SOLD OUT</text>' +
      '<rect x="176" y="172" width="88" height="28" fill="#2a1a14"/><path d="M220 172v28" stroke="#5a3a2a" stroke-width="2"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#4e4e56"/><rect x="0" y="200" width="400" height="5" fill="#9a9aa2"/>' +
      sign(300, 214, 70, "Arch St") + '<path d="M335 236v24" stroke="#3a3a3a" stroke-width="3"/>' +
      '<circle cx="360" cy="60" r="2" fill="#fff"/><circle cx="380" cy="30" r="1.5" fill="#fff"/><circle cx="60" cy="24" r="1.5" fill="#fff"/>',
      sky("wd-s2", "#121a36", "#3a2e52"));
  }

  /* 3. Dickinson College, Old West */
  function wddick() {
    const stone = (x0, y0, w, h) => Array.from({ length: Math.floor(h / 10) }, (_, i) => '<path d="M' + x0 + ' ' + (y0 + 10 + i * 10) + 'h' + w + '" stroke="#8a8780" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#wd-s3)"/>' +
      tree(26, 160, 2, "#c4702a") + tree(376, 160, 2, "#d9902a") +
      '<rect x="60" y="86" width="280" height="110" fill="#a8a59c"/>' + stone(60, 86, 280, 110) +
      '<path d="M52 88h296l-20 -18h-256z" fill="#55585e"/>' +
      [80, 120, 160, 224, 264, 304].map(x => '<rect x="' + x + '" y="98" width="18" height="26" fill="#2c3440" stroke="#f4f1e8" stroke-width="2.5"/><rect x="' + x + '" y="140" width="18" height="26" fill="#2c3440" stroke="#f4f1e8" stroke-width="2.5"/>').join("") +
      /* center pavilion + door */
      '<rect x="182" y="80" width="36" height="116" fill="#b5b2a8"/>' + stone(182, 80, 36, 116) + '<path d="M176 82l24 -14l24 14z" fill="#b5b2a8" stroke="#8a8780"/>' +
      '<path d="M190 196v-30q10 -12 20 0v30z" fill="#3a2a20" stroke="#f4f1e8" stroke-width="2"/>' +
      /* white cupola + gold mermaid weathervane */
      '<rect x="186" y="44" width="28" height="24" fill="#f4f1e8" stroke="#bbb"/><rect x="192" y="48" width="6" height="14" rx="3" fill="#3a4450"/><rect x="202" y="48" width="6" height="14" rx="3" fill="#3a4450"/>' +
      '<path d="M182 46h36l-18 -16z" fill="#55585e"/><path d="M200 30v-12" stroke="#c9a24a" stroke-width="2"/>' +
      '<g class="wd-vane"><path d="M192 16q4 -4 8 -2q6 2 10 0q-2 6 -8 4l-3 4q-2 -4 -7 -6z" fill="#e2b84a" stroke="#8a6a1a" stroke-width=".8"/></g>' +
      '<rect x="0" y="196" width="400" height="64" fill="#6a8a44"/><path d="M190 196l-28 64h76l-28 -64z" fill="#c9bfa8"/>' +
      '<rect x="262" y="208" width="112" height="22" rx="3" fill="#1d2a40" stroke="#f4f1e8" stroke-width="1.5"/><text x="318" y="223" text-anchor="middle" ' + font + ' font-size="10" fill="#f4f1e8">OLD WEST</text>' +
      '<g class="wd-leaf"><path d="M70 40q6 -6 10 0q-4 6 -10 0z" fill="#d9902a"/></g><g class="wd-leaf wd-l2"><path d="M300 30q6 -6 10 0q-4 6 -10 0z" fill="#c0502a"/></g><g class="wd-leaf wd-l3"><path d="M150 20q6 -6 10 0q-4 6 -10 0z" fill="' + AMBER + '"/></g>',
      sky("wd-s3", "#8fc0e4", "#f3e6cc"));
  }

  /* 4. The basement rehearsal room */
  function wdbasement() {
    return svg(
      '<rect width="400" height="260" fill="#2a2a2e"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (20 + i * 34) + 'h400" stroke="#333338" stroke-width="2"/>').join("") +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 0v200" stroke="#323236" stroke-width="2"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#4a4440"/><ellipse cx="200" cy="228" rx="160" ry="22" fill="#6a3a34"/>' +
      /* bare bulb */
      '<g class="wd-swing"><path d="M200 0v54" stroke="#111" stroke-width="2"/><circle cx="200" cy="60" r="8" fill="#ffe7a0"/><circle cx="200" cy="60" r="22" fill="#ffe7a0" opacity=".18"/></g>' +
      /* amp stack left */
      '<rect x="24" y="110" width="74" height="92" rx="3" fill="#1a1a1a" stroke="#555" stroke-width="2"/><rect x="30" y="116" width="62" height="14" fill="#3a3a3a"/>' +
      [0, 1, 2, 3].map(i => '<circle cx="' + (30 + 8 + i * 15) + '" cy="123" r="3" fill="#ddd"/>').join("") +
      '<rect x="30" y="136" width="62" height="60" fill="#2a2620"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M30 ' + (140 + i * 7) + 'h62" stroke="#3a342c" stroke-width="2"/>').join("") +
      '<g class="wd-wv"><circle cx="61" cy="166" r="22" fill="none" stroke="' + AMBER + '" stroke-width="2"/></g><g class="wd-wv wd-wv2"><circle cx="61" cy="166" r="22" fill="none" stroke="' + AMBER + '" stroke-width="2"/></g>' +
      /* guitar on a stand */
      '<path d="M120 196l10 -20l10 20" stroke="#222" stroke-width="3" fill="none"/><path d="M130 176l2 -96" stroke="#5a3a20" stroke-width="5"/><rect x="127" y="72" width="10" height="14" rx="2" fill="#2a2a2a"/>' +
      '<path d="M130 140q-22 4 -20 22q2 20 20 20q18 0 20 -20q2 -18 -20 -22z" fill="' + RED + '" stroke="#000" stroke-width="2"/><circle cx="130" cy="160" r="4" fill="#111"/>' +
      /* drum kit */
      '<ellipse cx="236" cy="176" rx="34" ry="26" fill="#f4f1e8" stroke="#222" stroke-width="3"/><ellipse cx="236" cy="176" rx="24" ry="18" fill="#fff" stroke="#bbb"/>' +
      '<rect x="190" y="146" width="26" height="16" rx="3" fill="' + BLUE + '" stroke="#222" stroke-width="2"/><rect x="256" y="146" width="26" height="16" rx="3" fill="' + BLUE + '" stroke="#222" stroke-width="2"/>' +
      '<path d="M186 120h30M262 116h34" stroke="#d4b04a" stroke-width="4"/><path d="M201 120v26M279 116v30" stroke="#888" stroke-width="2"/>' +
      '<g class="wd-stick"><path d="M216 140l22 -24" stroke="#d9b98a" stroke-width="3" stroke-linecap="round"/></g>' +
      /* keyboard */
      '<rect x="300" y="150" width="86" height="14" rx="2" fill="#1a1a1a"/><rect x="304" y="156" width="78" height="7" fill="#f4f1e8"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (307 + i * 8.5) + '" y="156" width="4" height="4" fill="#111"/>').join("") +
      '<path d="M310 164v36M376 164v36M310 182h66" stroke="#555" stroke-width="3"/>' +
      /* string lights */
      '<path d="M0 30q100 26 200 6t200 10" stroke="#333" stroke-width="1.5" fill="none"/>' +
      [20, 60, 100, 140, 180, 220, 260, 300, 340, 380].map((x, i) => '<circle cx="' + x + '" cy="' + (36 + (i % 3) * 3) + '" r="3" fill="' + [AMBER, BLUE, RED][i % 3] + '" class="wd-bulb' + (i % 2 ? ' wd-b2' : '') + '"/>').join(""),
      "");
  }

  /* 5. E Columbia Ave & N Delaware Ave, Penn Treaty Park */
  function wdcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#wd-s5)"/>' +
      /* far off: the old brick Delaware power station by the park, the bridge down river */
      '<path d="M250 112l20 -26h120l10 26z" fill="#4f7aa8" opacity=".55"/><path d="M262 112v-40M378 112v-40" stroke="#4f7aa8" stroke-width="5" opacity=".7"/><path d="M262 74q58 40 116 0" stroke="#4f7aa8" stroke-width="2" fill="none" opacity=".7"/>' +
      '<rect x="20" y="52" width="196" height="70" fill="#9a5a40"/>' + bricks(20, 52, 196, 70, "#86503a") + '<rect x="16" y="46" width="204" height="8" fill="#6a3a2a"/>' +
      [34, 74, 114, 154, 194].map(x => '<path d="M' + (x - 8) + ' 112v-36q8 -12 16 0v36z" fill="#2c3440" stroke="#d9c7a8" stroke-width="2"/>').join("") +
      '<rect x="60" y="20" width="12" height="32" fill="#7a4434"/><rect x="160" y="26" width="12" height="26" fill="#7a4434"/>' +
      /* river + far Jersey shore */
      '<rect x="0" y="120" width="400" height="40" fill="#3f6f8f"/><rect x="0" y="112" width="400" height="10" fill="#5a6a5a"/>' +
      '<g class="wd-riv"><path d="M20 132h40M120 140h50M240 130h40M330 144h40" stroke="#8fc0d8" stroke-width="2"/></g><g class="wd-riv wd-riv2"><path d="M70 150h30M190 152h40M290 138h30" stroke="#8fc0d8" stroke-width="2"/></g>' +
      '<g class="wd-boat"><path d="M0 128h40l-6 8h-28z" fill="#e4e4e4"/><rect x="12" y="120" width="14" height="8" fill="#c8102e"/></g>' +
      /* park lawn, elm, obelisk */
      '<rect x="200" y="150" width="200" height="70" fill="#5f8a44"/><path d="M250 214h150" stroke="#c9bfa8" stroke-width="8"/>' +
      tree(370, 160, 2.6, "#3f6e34") +
      '<rect x="282" y="160" width="26" height="10" fill="#e8e4da"/><path d="M286 160l4 -64h10l4 64z" fill="#f4f1e8" stroke="#bdb8ac" stroke-width="1.5"/><path d="M290 96l5 -10l5 10z" fill="#f4f1e8" stroke="#bdb8ac" stroke-width="1.5"/>' +
      /* wall with the tag */
      '<rect x="0" y="140" width="250" height="80" fill="#8a4a38"/>' + bricks(0, 140, 250, 80, "#763e30") +
      tag("THE WAR", 14, 176, 28, AMBER, -5) + tag("ON DRUGS", 54, 208, 28, BLUE, -5) +
      '<g class="wd-sp"><circle cx="226" cy="168" r="3" fill="' + AMBER + '"/></g><g class="wd-sp wd-sp2"><circle cx="234" cy="178" r="2.5" fill="' + BLUE + '"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#4a4a50"/><rect x="0" y="220" width="400" height="5" fill="#9a9aa2"/>' +
      '<path d="M0 244h40M70 244h40M140 244h40M210 244h40M280 244h40M350 244h40" stroke="#f0d24a" stroke-width="2"/>' +
      '<rect x="326" y="170" width="5" height="50" fill="#3a3a3a"/>' + sign(270, 172, 118, "E Columbia Ave") + sign(270, 198, 118, "N Delaware Ave"),
      sky("wd-s5", "#f2b06a", "#6a4a7a"));
  }

  window.SCENES = { wdstation, wdtroc, wddick, wdbasement, wdcorner };
})();
