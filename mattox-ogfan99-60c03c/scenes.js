/* mattox scenes (Regions tab: Philadelphia; Lawncrest, Northeast Philly). CSS classes prefixed mox- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes moxflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.mox-flk{animation:moxflick 2.6s infinite}.mox-flk2{animation-delay:.9s}' +
    '@keyframes moxglow{0%,100%{opacity:.45}50%{opacity:1}}.mox-glow{animation:moxglow 2.2s ease-in-out infinite}.mox-g2{animation-delay:-1.1s}' +
    '@keyframes moxwave{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}.mox-wv{transform-box:fill-box;transform-origin:50% 50%;animation:moxwave .7s ease-in-out infinite}' +
    '@keyframes moxfader{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.mox-fd{animation:moxfader 1.6s ease-in-out infinite}.mox-fd2{animation-delay:-.5s}.mox-fd3{animation-delay:-1s}' +
    '@keyframes moxbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-46px)}}.mox-ball{animation:moxbounce 1.1s cubic-bezier(.45,0,.55,1) infinite}' +
    '@keyframes moxspin{to{transform:rotate(360deg)}}.mox-spin{transform-box:fill-box;transform-origin:50% 50%;animation:moxspin .9s linear infinite}' +
    '@keyframes moxup{0%{transform:translateY(0);opacity:0}15%{opacity:1}100%{transform:translateY(-120px);opacity:0}}.mox-up{animation:moxup 3s ease-out infinite}.mox-up2{animation-delay:-1s}.mox-up3{animation-delay:-2s}' +
    '@keyframes moxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mox-sp{animation:moxspray 1.4s ease-out infinite}.mox-sp2{animation-delay:.45s}' +
    '@keyframes moxripple{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}.mox-rip{animation:moxripple 3s ease-in-out infinite}.mox-rip2{animation-delay:-1.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 7.4 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 7.4 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "mox-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* Northeast Philly rowhouses: brick fronts, porch awnings, flat roofs */
  const rows = (x0, y, n, w, h) => Array.from({ length: n }, (_, i) => {
    const x = x0 + i * w, br = ["#8a4a36", "#7c4231", "#94553d"][i % 3], aw = ["#2f6b4f", "#b8432f", "#e3d9c4"][i % 3];
    return '<rect x="' + x + '" y="' + y + '" width="' + (w - 1) + '" height="' + h + '" fill="' + br + '"/><rect x="' + x + '" y="' + (y - 4) + '" width="' + (w - 1) + '" height="4" fill="#3a2a24"/>' +
      '<rect x="' + (x + 5) + '" y="' + (y + 8) + '" width="' + (w / 2 - 8) + '" height="12" fill="#2a3442"/><rect x="' + (x + w / 2 + 2) + '" y="' + (y + 8) + '" width="' + (w / 2 - 8) + '" height="12" fill="' + (i % 2 ? "#ffd98a" : "#2a3442") + '" class="' + (i % 2 ? "mox-glow" : "") + '"/>' +
      '<path d="M' + (x + 2) + ' ' + (y + h - 18) + 'h' + (w - 5) + 'l-4 8h' + (-(w - 13)) + 'z" fill="' + aw + '"/>';
  }).join("");
  const BLUE = "#5ab4ff", GOLD = "#f5c542", PINK = "#ff5a8a", RR = "#91456c";

  /* 1. Lawndale Station on SEPTA Regional Rail's Fox Chase Line, at the edge of Lawncrest: open-air low platform, black station sign with the Regional Rail badge, the stainless Silverliner with its red and blue stripes rolling in under the wires, rowhouse roofs behind */
  function moxstation() {
    const tr = '<g class="anim-train"><rect x="20" y="112" width="336" height="74" rx="7" fill="#c9ced4" stroke="#7a8088" stroke-width="2"/>' +
      Array.from({ length: 30 }, (_, i) => '<path d="M' + (26 + i * 11) + ' 114v70" stroke="#b6bcc3" stroke-width="1"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 50) + '" y="124" width="34" height="24" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="20" y="154" width="336" height="5" fill="#c8102e"/><rect x="20" y="160" width="336" height="5" fill="#1d4f9c"/>' +
      '<rect x="334" y="116" width="22" height="66" rx="4" fill="#aab0b8"/><rect x="338" y="122" width="14" height="20" rx="2" fill="#1d262e"/><circle cx="345" cy="172" r="3.5" fill="#fff6c2"/>' +
      '<path d="M170 112l20 -20h20l20 20" stroke="#2b2b2b" stroke-width="2.5" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mox1)"/>' + stars(10) +
      '<g opacity=".85">' + rows(0, 84, 12, 34, 32) + '</g>' +
      '<path d="M0 90h400" stroke="#2b2b2b" stroke-width="1.5"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="62" width="6" height="128" fill="#4a4e54"/><rect x="' + (x - 18) + '" y="66" width="36" height="4" fill="#4a4e54"/>').join("") +
      '<path d="M0 92h400" stroke="#2b2b2b" stroke-width="2.5"/>' +
      '<rect x="0" y="186" width="400" height="10" fill="#5a524a"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 21) + '" y="188" width="12" height="6" fill="#3a332c"/>').join("") +
      tr +
      '<rect x="0" y="196" width="400" height="10" fill="#f2c200"/><rect x="0" y="206" width="400" height="54" fill="#8c8a86"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 206v54" stroke="#7c7a76" stroke-width="1"/>').join("") +
      '<rect x="70" y="200" width="6" height="60" fill="#2f2f2f"/><rect x="214" y="200" width="6" height="60" fill="#2f2f2f"/>' +
      '<rect x="44" y="18" width="210" height="40" rx="3" fill="#111" stroke="#333"/><text x="58" y="45" ' + font + ' font-size="20" fill="#fff">Lawndale</text>' + badge(160, 38, "RR", RR) +
      '<text x="58" y="55" font-family="Helvetica, Arial, sans-serif" font-size="7.5" fill="#cfd3d8">FOX CHASE LINE</text>' +
      '<rect x="72" y="58" width="4" height="30" fill="#2f2f2f"/><rect x="222" y="58" width="4" height="30" fill="#2f2f2f"/>' +
      '<circle class="mox-flk" cx="318" cy="70" r="5" fill="#fff6c2"/><rect x="315" y="74" width="6" height="40" fill="#3a3e46"/>',
      sky("mox1", "#0e1a3a", "#d0784e"));
  }

  /* 2. Lawncrest Recreation Center on Rising Sun Ave: the outdoor court, a ball bouncing under the rim, the chain-link fence, the brick rec building, the pool glinting behind */
  function moxrec() {
    const fence = Array.from({ length: 40 }, (_, i) => '<path d="M' + (i * 10) + ' 108l10 34M' + (i * 10 + 10) + ' 108l-10 34" stroke="#9aa4ad" stroke-width=".8" opacity=".55"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mox2)"/>' +
      '<circle cx="330" cy="40" r="20" fill="#ffe7a8" opacity=".9"/>' +
      '<g fill="#2f5a3a"><ellipse cx="40" cy="100" rx="46" ry="30"/><ellipse cx="110" cy="96" rx="40" ry="28"/><ellipse cx="370" cy="98" rx="44" ry="30"/></g>' +
      '<rect x="150" y="62" width="200" height="48" fill="#8a4a36"/><rect x="146" y="58" width="208" height="6" fill="#5a3226"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (162 + i * 31) + '" y="74" width="20" height="14" fill="#2a3442"/>').join("") +
      '<rect x="168" y="92" width="166" height="14" rx="2" fill="#0f2e52"/><text x="251" y="102.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">LAWNCREST RECREATION CENTER</text>' +
      '<rect x="0" y="108" width="140" height="14" fill="#58b6e0"/><path class="mox-rip" d="M6 114h20M40 117h22M80 113h18" stroke="#e6f6ff" stroke-width="2"/><path class="mox-rip mox-rip2" d="M100 118h22M20 119h12" stroke="#e6f6ff" stroke-width="1.5"/>' +
      fence + '<path d="M0 108h400M0 142h400" stroke="#7b858e" stroke-width="2"/>' +
      '<rect x="0" y="142" width="400" height="118" fill="#2f6e8f"/><rect x="40" y="152" width="320" height="100" fill="#3a83a6" stroke="#f2f2f2" stroke-width="2"/>' +
      '<path d="M200 152v100" stroke="#f2f2f2" stroke-width="2"/><circle cx="200" cy="202" r="20" fill="none" stroke="#f2f2f2" stroke-width="2"/>' +
      '<path d="M300 152v100" stroke="none"/><rect x="290" y="174" width="70" height="56" fill="#b8432f" opacity=".85" stroke="#f2f2f2" stroke-width="2"/>' +
      '<rect x="372" y="96" width="6" height="110" fill="#3a3e46"/><rect x="346" y="88" width="42" height="28" fill="#f4f4f4" stroke="#888" stroke-width="1.5"/><rect x="358" y="98" width="16" height="12" fill="none" stroke="#c8102e" stroke-width="1.5"/>' +
      '<ellipse cx="352" cy="118" rx="12" ry="3" fill="none" stroke="#ff7a1a" stroke-width="2.5"/><path d="M341 118l4 14M347 119l2 14M357 119l-2 14M363 118l-4 14" stroke="#f4f4f4" stroke-width="1"/>' +
      '<g class="mox-ball"><circle cx="320" cy="196" r="9" fill="#e8762a" stroke="#6a2e0a" stroke-width="1.5"/><path d="M311 196h18M320 187v18" stroke="#6a2e0a" stroke-width="1.2"/></g>' +
      '<ellipse cx="320" cy="208" rx="9" ry="2.5" fill="#000" opacity=".25"/>' +
      tag("OX GANG", 60, 236, 22, GOLD, -3),
      sky("mox2", "#7cc3ef", "#f4dcae"));
  }

  /* 3. The studio: "Wake up, F1lthy" on the screen, Oogie Mane on the beat, faders riding, the waveform jumping, mic with pop filter */
  function moxstudio() {
    const bars = Array.from({ length: 28 }, (_, i) => '<rect class="mox-wv" style="animation-delay:' + (-(i * 0.09)).toFixed(2) + 's" x="' + (112 + i * 6.4) + '" y="' + (56 - (6 + (i * 37) % 18)) + '" width="4" height="' + (2 * (6 + (i * 37) % 18)) + '" rx="1.5" fill="' + (i % 5 ? BLUE : PINK) + '"/>').join("");
    const faders = Array.from({ length: 10 }, (_, i) => '<rect x="' + (78 + i * 26) + '" y="186" width="3" height="40" fill="#111"/><rect class="mox-fd' + ["", " mox-fd2", " mox-fd3"][i % 3] + '" x="' + (72 + i * 26) + '" y="' + (200 - (i * 7) % 14) + '" width="15" height="8" rx="1" fill="' + (i % 4 ? "#d6d9de" : GOLD) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#0a0e18"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 52) + '" y="0" width="48" height="150" fill="#141a28"/><path d="M' + (i * 52 + 6) + ' 10l18 18l18 -18M' + (i * 52 + 6) + ' 52l18 18l18 -18M' + (i * 52 + 6) + ' 94l18 18l18 -18" stroke="#1d2536" stroke-width="3" fill="none"/>').join("") +
      '<rect x="96" y="20" width="208" height="112" rx="5" fill="#1b1f27" stroke="#3a3f4a" stroke-width="3"/><rect x="102" y="26" width="196" height="100" fill="#05070c"/>' +
      bars + '<path d="M106 56h188" stroke="#2a3a52" stroke-width="1"/>' +
      '<text x="200" y="92" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '">WAKE UP, F1LTHY</text>' +
      '<text x="200" y="112" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#9fb6d6">PROD. OOGIE MANE</text>' +
      '<rect x="186" y="132" width="28" height="18" fill="#2a2f3a"/>' +
      '<rect x="20" y="150" width="360" height="12" fill="#2a2f3a"/><path d="M40 176L60 162h280l20 14z" fill="#262b35"/>' +
      '<rect x="40" y="176" width="320" height="66" rx="4" fill="#20242d" stroke="#3a3f4a" stroke-width="2"/>' + faders +
      Array.from({ length: 10 }, (_, i) => '<circle cx="' + (79.5 + i * 26) + '" cy="182" r="3" fill="' + (i % 3 ? "#6c7380" : "#c94a4a") + '"/>').join("") +
      '<rect x="0" y="242" width="400" height="18" fill="#11141b"/>' +
      '<path d="M352 60v100" stroke="#3a3e46" stroke-width="4"/><rect x="342" y="40" width="20" height="34" rx="10" fill="#b9bfc8" stroke="#555" stroke-width="1.5"/>' +
      '<circle cx="326" cy="58" r="16" fill="#111" opacity=".55" stroke="#444" stroke-width="2"/>' +
      '<rect x="24" y="40" width="44" height="80" rx="4" fill="#1b1f27" stroke="#3a3f4a" stroke-width="2"/><circle cx="46" cy="64" r="12" fill="#0b0d12" stroke="#555" stroke-width="2"/><circle class="mox-wv" cx="46" cy="98" r="9" fill="#0b0d12" stroke="#555" stroke-width="2"/>' +
      '<circle class="mox-glow" cx="34" cy="48" r="2.5" fill="' + PINK + '"/>',
      "");
  }

  /* 4. 2017: "Overwhelming" goes viral off a phone in a Lawncrest bedroom: the play screen, the view count climbing, a fidget spinner spinning on the desk, hearts floating up */
  function moxviral() {
    const spinner = (cx, cy) => '<g class="mox-spin">' + [0, 120, 240].map(a => { const r = a * Math.PI / 180, x = cx + 22 * Math.cos(r), y = cy + 22 * Math.sin(r); return '<path d="M' + cx + ' ' + cy + 'L' + x.toFixed(1) + ' ' + y.toFixed(1) + '" stroke="' + BLUE + '" stroke-width="16" stroke-linecap="round"/><circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="5" fill="#1b2a3a"/>'; }).join("") +
      '<circle cx="' + cx + '" cy="' + cy + '" r="8" fill="' + GOLD + '"/><circle cx="' + cx + '" cy="' + cy + '" r="3" fill="#1b2a3a"/></g>';
    const heart = (x, y, c, cls) => '<path class="' + cls + '" d="M' + x + ' ' + y + 'c-6 -6 -14 0 -8 7l8 8l8 -8c6 -7 -2 -13 -8 -7z" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mox4)"/>' +
      '<rect x="24" y="22" width="110" height="90" fill="#0d1830" stroke="#e3d9c4" stroke-width="5"/><path d="M79 22v90M24 67h110" stroke="#e3d9c4" stroke-width="4"/>' + stars(6).replace(/cx="(\d+)"/g, (m, v) => 'cx="' + (30 + (+v % 100)) + '"').replace(/cy="(\d+)"/g, (m, v) => 'cy="' + (28 + (+v % 78)) + '"') +
      '<rect x="0" y="196" width="400" height="64" fill="#5a3a26"/><rect x="0" y="192" width="400" height="6" fill="#7a5236"/>' +
      '<rect x="146" y="26" width="108" height="196" rx="16" fill="#111" stroke="#3a3f4a" stroke-width="3"/><rect x="153" y="40" width="94" height="168" rx="4" fill="#0b1220"/>' +
      '<rect x="153" y="40" width="94" height="70" fill="#1d3d66"/><path d="M190 62v26l22 -13z" fill="#fff"/>' +
      '<rect x="160" y="114" width="80" height="4" rx="2" fill="#2a3442"/><rect x="160" y="114" width="56" height="4" rx="2" fill="' + PINK + '"/>' +
      '<text x="200" y="134" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">OVERWHELMING</text>' +
      '<text x="200" y="148" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="8" fill="#9fb6d6">MATT OX</text>' +
      '<rect class="mox-flk" x="166" y="158" width="68" height="18" rx="9" fill="' + GOLD + '"/><text class="mox-flk" x="200" y="171" text-anchor="middle" ' + font + ' font-size="10" fill="#111">1M VIEWS</text>' +
      '<rect x="166" y="184" width="68" height="6" rx="3" fill="#2a3442"/><rect x="166" y="194" width="44" height="6" rx="3" fill="#2a3442"/>' +
      '<rect x="186" y="212" width="28" height="4" rx="2" fill="#555"/>' +
      heart(268, 150, PINK, "mox-up") + heart(290, 170, "#ff8fb0", "mox-up mox-up2") + heart(116, 160, PINK, "mox-up mox-up3") + heart(96, 176, "#ff8fb0", "mox-up") +
      spinner(320, 214) + '<ellipse cx="320" cy="236" rx="30" ry="4" fill="#000" opacity=".25"/>' +
      '<rect x="40" y="206" width="70" height="10" rx="2" fill="#2a2f3a"/><rect x="46" y="200" width="58" height="8" rx="2" fill="#3a83a6"/>',
      sky("mox4", "#2a1a4a", "#6a3a6a"));
  }

  /* 5. Rising Sun Ave and Robbins St in Lawncrest: green signs, MATT OX tagged big on the brick wall, St. William's granite-and-sandstone front with its cross behind, porch awnings down the block */
  function moxcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mox5)"/>' + stars(14) +
      /* St. William Church: pale granite front, sandstone trim, columns under a pediment, a cross on top */
      '<rect x="128" y="52" width="150" height="88" fill="#b9b3a6"/><path d="M120 54L203 16L286 54z" fill="#cbbf9e" stroke="#9a8f74" stroke-width="2"/><path d="M146 50L203 25L260 50z" fill="#b9ad8c"/>' +
      '<rect x="199" y="0" width="8" height="22" fill="#e8e1cc"/><rect x="192" y="6" width="22" height="6" fill="#e8e1cc"/>' +
      '<rect x="124" y="54" width="158" height="6" fill="#d9cfb2"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (138 + i * 26) + '" y="60" width="9" height="76" fill="#d9d3c4"/>').join("") +
      '<path class="mox-glow" d="M190 136v-34q13 -14 26 0v34z" fill="#ffd98a"/><circle cx="203" cy="80" r="9" fill="#5a6a8a" stroke="#d9cfb2" stroke-width="2"/>' +
      '<g fill="#22263a"><rect x="0" y="92" width="110" height="48"/><rect x="296" y="86" width="104" height="54"/></g>' +
      '<g opacity=".9">' + rows(296, 104, 3, 35, 36) + '</g>' +
      '<rect x="0" y="132" width="400" height="92" fill="#7a4232"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#6a3628" stroke-width="1"/>').join("") +
      tag("MATT OX", 20, 190, 46, BLUE, -6) + tag("OX GANG", 168, 216, 22, GOLD, -3) + tag("WOD", 30, 216, 18, "#fff", -3) + tag("OXI", 274, 192, 24, PINK, -5) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="340" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(286, 98, 112, "Rising Sun Av") + sign(300, 124, 92, "Robbins St") +
      '<g class="mox-sp"><circle cx="150" cy="150" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="mox-sp mox-sp2"><circle cx="156" cy="144" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("mox5", "#0e1838", "#b8604a"));
  }

  window.SCENES = { moxstation: moxstation, moxrec: moxrec, moxstudio: moxstudio, moxviral: moxviral, moxcorner: moxcorner };
})();
