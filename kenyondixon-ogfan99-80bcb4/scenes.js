/* kenyondixon scenes (REGIONS: Los Angeles + SoCal; Watts, raised in Jordan Downs). CSS classes prefixed kd- (the page's own anim-train is kept on the train).
   1 The A Line pulling into 103rd St/Watts Towers, the at-grade platform, dusk (the towers themselves are not drawn).
   2 Jordan Downs: the two-story stucco courts he grew up in and the new colorful buildings going up, a ball bouncing on the court.
   3 Church: where he started singing, stained glass glowing over the choir loft and organ pipes.
   4 The R&B You Love: a '70s soul stage, a mic stand, a disco ball turning, a record spinning.
   5 103rd St and Grape St by Jordan Downs: green signs, KENYON DIXON tagged, palm trees and the downtown skyline far behind.
   No digit 9 is drawn anywhere. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kdglow{0%,100%{opacity:.5}50%{opacity:1}}.kd-glow{animation:kdglow 2.4s ease-in-out infinite}.kd-g2{animation-delay:-1.2s}' +
    '@keyframes kdball{0%,100%{transform:translateY(0)}50%{transform:translateY(-40px)}}.kd-ball{animation:kdball 1s ease-in-out infinite}' +
    '@keyframes kdspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.kd-spin{transform-box:fill-box;transform-origin:50% 50%;animation:kdspin 2s linear infinite}' +
    '@keyframes kdsweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.kd-sweep{transform-box:fill-box;transform-origin:50% 0;animation:kdsweep 4s ease-in-out infinite}.kd-s2{animation-delay:-2s}' +
    '@keyframes kdsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.kd-palm{transform-box:fill-box;transform-origin:50% 100%;animation:kdsway 4s ease-in-out infinite}' +
    '@keyframes kdspray{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(-14px,-22px);opacity:0}}.kd-sp{animation:kdspray 1.4s ease-out infinite}.kd-sp2{animation-delay:-.5s}.kd-sp3{animation-delay:-.9s}' +
    '@keyframes kdnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(10px,-60px);opacity:0}}.kd-note{animation:kdnote 3s ease-out infinite}.kd-n2{animation-delay:-1s}.kd-n3{animation-delay:-2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const PLUM = "#b07cc6", GOLD = "#f2c14e", CORAL = "#ff8a6b", ABLUE = "#0072bc";
  const palm = (x, y, h, cls) => '<g class="kd-palm" style="animation-delay:' + (cls || 0) + 's"><path d="M' + x + ' ' + y + 'q4-' + (h / 2) + ' -2-' + h + '" stroke="#3a2a22" stroke-width="5" fill="none"/>' +
    '<g transform="translate(' + (x - 2) + ' ' + (y - h) + ')"><path d="M0 0q-22-4-34 10M0 0q-18-14-34-12M0 0q22-4 34 10M0 0q18-14 34-12M0 0q-4-18 6-24" stroke="#1f3a28" stroke-width="5" fill="none" stroke-linecap="round"/></g></g>';

  /* 1. A Line at 103rd St/Watts Towers */
  function kdstop() {
    const car = (x) => '<rect x="' + x + '" y="120" width="170" height="64" rx="10" fill="#d9dde2" stroke="#556" stroke-width="2"/>' +
      '<rect x="' + x + '" y="160" width="170" height="8" fill="' + ABLUE + '"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 14 + i * 40) + '" y="130" width="30" height="24" rx="3" fill="#24323e"/>').join("") +
      '<circle cx="' + (x + 30) + '" cy="188" r="8" fill="#222"/><circle cx="' + (x + 140) + '" cy="188" r="8" fill="#222"/>';
    const train = '<g class="anim-train">' + car(20) + car(194) + '<path d="M28 120l14-22M180 120l-14-22M42 98h124" stroke="#333" stroke-width="2" fill="none"/>' +
      '<rect x="346" y="140" width="8" height="8" fill="#fff6c2" class="kd-glow"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kds1)"/>' +
      '<path d="M0 66h400" stroke="#444" stroke-width="2"/><path d="M0 70h400" stroke="#444" stroke-width="1"/>' +
      '<rect x="0" y="150" width="400" height="10" fill="#8a8f96"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="194" width="10" height="6" fill="#6b4a3a"/>').join("") +
      '<rect x="0" y="192" width="400" height="4" fill="#9aa0a6"/><rect x="0" y="200" width="400" height="4" fill="#9aa0a6"/>' +
      train +
      '<rect x="0" y="204" width="400" height="56" fill="#c9c2b6"/><rect x="0" y="204" width="400" height="6" fill="#f2d24a"/>' +
      '<rect x="40" y="214" width="6" height="46" fill="#5b6066"/><rect x="250" y="214" width="6" height="46" fill="#5b6066"/><path d="M20 214h260" stroke="#5b6066" stroke-width="5"/>' +
      '<rect x="14" y="16" width="300" height="40" rx="3" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<circle cx="38" cy="36" r="13" fill="' + ABLUE + '"/><text x="38" y="42" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">A</text>' +
      '<text x="60" y="42" ' + font + ' font-size="16" fill="#fff">103rd St / Watts Towers</text>',
      sky("kds1", "#2c2350", "#f08a6a"));
  }

  /* 2. Jordan Downs */
  function kddowns() {
    const court = (x, y, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="70" fill="#e6d6b8"/><rect x="' + x + '" y="' + (y - 6) + '" width="' + w + '" height="8" fill="#7a4a32"/>' +
      Array.from({ length: Math.floor(w / 30) }, (_, i) => '<rect x="' + (x + 8 + i * 30) + '" y="' + (y + 10) + '" width="16" height="16" fill="#3b4a56"/><rect x="' + (x + 8 + i * 30) + '" y="' + (y + 40) + '" width="16" height="22" fill="' + (i % 2 ? "#7a4a32" : "#3b4a56") + '"/>').join("");
    const newb = '<rect x="250" y="40" width="140" height="122" fill="#f3efe6"/>' +
      [[250, 40, 46, CORAL], [296, 40, 48, GOLD], [344, 40, 46, "#6fb7a8"], [250, 100, 46, "#6fb7a8"], [296, 100, 48, CORAL], [344, 100, 46, GOLD]].map(a => '<rect x="' + a[0] + '" y="' + a[1] + '" width="' + a[2] + '" height="18" fill="' + a[3] + '"/>').join("") +
      Array.from({ length: 4 }, (_, r) => Array.from({ length: 5 }, (_, c) => '<rect x="' + (258 + c * 26) + '" y="' + (64 + r * 24) + '" width="14" height="12" fill="#ffe7b0" class="kd-glow' + ((r + c) % 2 ? ' kd-g2' : '') + '"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kds2)"/>' + newb + court(10, 92, 120) + court(132, 100, 110) +
      '<rect x="0" y="162" width="400" height="98" fill="#7a7f86"/><path d="M60 162v98M0 210h400" stroke="#e8e8e8" stroke-width="2" opacity=".6"/><circle cx="200" cy="230" r="22" fill="none" stroke="#e8e8e8" stroke-width="2" opacity=".6"/>' +
      '<rect x="330" y="140" width="6" height="90" fill="#555"/><rect x="304" y="132" width="40" height="28" fill="#fff" stroke="#333" stroke-width="2"/><path d="M314 162h20" stroke="' + CORAL + '" stroke-width="3"/>' +
      '<g class="kd-ball"><circle cx="300" cy="218" r="9" fill="#e07a2a" stroke="#5a2a10" stroke-width="1.5"/><path d="M291 218h18M300 209v18" stroke="#5a2a10" stroke-width="1"/></g>' +
      '<rect x="20" y="190" width="150" height="26" rx="3" fill="#2b2f3a" stroke="' + GOLD + '" stroke-width="1.5"/><text x="95" y="208" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">JORDAN DOWNS</text>',
      sky("kds2", "#7fb2d8", "#f6d8b0"));
  }

  /* 3. Church: stained glass, choir loft, organ pipes */
  function kdchurch() {
    const glass = (x) => '<g class="kd-glow"><path d="M' + x + ' 140v-70q30-40 60 0v70z" fill="#2a1c3a" stroke="#c9a24a" stroke-width="3"/>' +
      '<path d="M' + (x + 4) + ' 136v-62q26-32 52 0v62z" fill="' + PLUM + '"/><circle cx="' + (x + 30) + '" cy="82" r="12" fill="' + GOLD + '"/>' +
      '<rect x="' + (x + 8) + '" y="100" width="20" height="34" fill="#4a8ad0"/><rect x="' + (x + 32) + '" y="100" width="20" height="34" fill="' + CORAL + '"/><path d="M' + (x + 30) + ' 60v80M' + (x + 4) + ' 100h52" stroke="#2a1c3a" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#3a2418"/><rect x="0" y="0" width="400" height="30" fill="#2a1810"/>' +
      glass(30) + '<g style="animation-delay:-1.2s">' + glass(310) + '</g>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (128 + i * 16) + '" y="' + (40 + Math.abs(4 - i) * 8) + '" width="10" height="' + (110 - Math.abs(4 - i) * 8) + '" rx="5" fill="#d8b45a" stroke="#7a5512" stroke-width="1.5"/>').join("") +
      '<rect x="110" y="150" width="180" height="20" fill="#5a3418"/><rect x="110" y="170" width="180" height="10" fill="#7a4a28"/>' +
      [0, 1, 2, 3, 4, 5, 6].map(i => '<path d="M' + (124 + i * 24) + ' 150q12-22 24 0z" fill="#7a2a3a"/>').join("") +
      '<rect x="0" y="196" width="400" height="64" fill="#5a3a26"/>' + [200, 228].map(y => '<rect x="20" y="' + y + '" width="160" height="12" rx="3" fill="#7a4a2e"/><rect x="220" y="' + y + '" width="160" height="12" rx="3" fill="#7a4a2e"/>').join("") +
      '<g class="kd-note"><text x="150" y="140" font-size="22" fill="' + GOLD + '">&#9834;</text></g><g class="kd-note kd-n2"><text x="200" y="130" font-size="18" fill="#fff">&#9835;</text></g><g class="kd-note kd-n3"><text x="250" y="140" font-size="22" fill="' + GOLD + '">&#9834;</text></g>',
      "");
  }

  /* 4. The R&B You Love: '70s soul stage */
  function kdsoul() {
    const ball = '<g class="kd-spin"><circle cx="200" cy="56" r="26" fill="#c9ccd2"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (176 + i * 9) + ' 36v40" stroke="#888" stroke-width="1"/>').join("") +
      Array.from({ length: 5 }, (_, i) => '<path d="M176 ' + (40 + i * 8) + 'h48" stroke="#888" stroke-width="1"/>').join("") + '<circle cx="190" cy="48" r="4" fill="#fff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kds4)"/><path d="M200 0v30" stroke="#888" stroke-width="2"/>' +
      '<g class="kd-sweep"><path d="M80 0l-50 200h100z" fill="' + PLUM + '" opacity=".35"/></g><g class="kd-sweep kd-s2"><path d="M320 0l-50 200h100z" fill="' + CORAL + '" opacity=".35"/></g>' + ball +
      '<rect x="0" y="176" width="400" height="84" fill="#2a1a12"/><rect x="40" y="168" width="320" height="14" fill="#5a3418"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (44 + i * 40) + '" y="171" width="20" height="8" fill="' + [GOLD, CORAL, PLUM, "#6fb7a8"][i % 4] + '" class="kd-glow' + (i % 2 ? ' kd-g2' : '') + '"/>').join("") +
      '<rect x="198" y="100" width="4" height="68" fill="#bbb"/><ellipse cx="200" cy="96" rx="7" ry="10" fill="#333"/><path d="M186 168h28" stroke="#bbb" stroke-width="4"/>' +
      '<rect x="290" y="196" width="80" height="44" rx="4" fill="#3a2418"/><g class="kd-spin"><circle cx="330" cy="212" r="20" fill="#111"/><circle cx="330" cy="212" r="7" fill="' + GOLD + '"/></g>' +
      tag("THE R&amp;B YOU LOVE", 24, 228, 22, GOLD, -4),
      sky("kds4", "#1a0f2a", "#4a2050"));
  }

  /* 5. 103rd St and Grape St corner */
  function kdcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#kds5)"/>' +
      '<g fill="#5a4a6a" opacity=".85"><rect x="120" y="70" width="18" height="80"/><rect x="142" y="50" width="22" height="100"/><rect x="168" y="80" width="16" height="70"/><rect x="188" y="40" width="24" height="110"/><path d="M188 40l12-14 12 14z"/><rect x="216" y="64" width="20" height="86"/><rect x="240" y="86" width="16" height="64"/></g>' +
      palm(40, 150, 100, 0) + palm(90, 150, 80, -1.5) + palm(300, 150, 90, -2.5) +
      '<rect x="0" y="146" width="400" height="80" fill="#e8d6b0"/>' + '<rect x="0" y="146" width="400" height="8" fill="#b8a07a"/>' +
      tag("KENYON DIXON", 30, 200, 38, PLUM, -5) + tag("R&amp;B KENNY", 220, 222, 18, GOLD, -3) +
      '<g class="kd-sp"><circle cx="270" cy="182" r="2" fill="' + PLUM + '"/></g><g class="kd-sp kd-sp2"><circle cx="274" cy="186" r="2" fill="' + GOLD + '"/></g><g class="kd-sp kd-sp3"><circle cx="268" cy="188" r="2" fill="' + CORAL + '"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#3f4247"/>' +
      '<rect x="338" y="60" width="6" height="166" fill="#5b6066"/>' + sign(290, 52, 102, "103RD ST", 12) + sign(296, 76, 90, "GRAPE ST", 12),
      sky("kds5", "#f6a46a", "#ffe0b0"));
  }

  window.SCENES = { kdstop, kddowns, kdchurch, kdsoul, kdcorner };
})();
