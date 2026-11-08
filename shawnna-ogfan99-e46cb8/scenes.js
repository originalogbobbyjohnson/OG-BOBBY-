/* shawnna scenes (Regions tab: Chicago; the South Side). CSS classes and ids prefixed sw- (the page's own anim-train is kept).
   1 Garfield on the Red Line, in the median of the Dan Ryan: island platform under a canopy, expressway traffic on both sides.
   2 Her father's blues club in the South Loop: brick front, neon BLUES sign, a polka-dot guitar in the window, notes drifting out.
   3 "90 miles outside Chicago... on my way home": the expressway at dusk, green sign pointing to CHICAGO, the skyline rising ahead.
   4 "Weight a Minute": the V.I.P. rope at the club door, the DJ booth, lights sweeping.
   5 W Garfield Blvd and S State St on the South Side: green signs, SHAWNNA tagged on the wall, the downtown towers far up State St. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes swcarR{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.sw-carR{animation:swcarR 5s linear infinite}.sw-carR2{animation-delay:-2.5s}' +
    '@keyframes swcarL{from{transform:translateX(480px)}to{transform:translateX(-80px)}}.sw-carL{animation:swcarL 6s linear infinite}.sw-carL2{animation-delay:-3s}' +
    '@keyframes swnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(30px,-70px);opacity:0}}.sw-note{animation:swnote 2.8s ease-out infinite}.sw-n2{animation-delay:-1s}.sw-n3{animation-delay:-1.9s}' +
    '@keyframes swflick{0%,100%{opacity:1}44%{opacity:.8}48%{opacity:.3}52%{opacity:.95}}.sw-flk{animation:swflick 2.4s infinite}' +
    '@keyframes swblink{0%,100%{opacity:.25}50%{opacity:1}}.sw-bl{animation:swblink 1.5s ease-in-out infinite}.sw-bl2{animation-delay:-.75s}' +
    '@keyframes swsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.sw-sw1{transform-box:view-box;transform-origin:120px 20px;animation:swsweep 3s ease-in-out infinite}.sw-sw2{transform-box:view-box;transform-origin:280px 20px;animation:swsweep 3s ease-in-out infinite;animation-delay:-1.5s}' +
    '@keyframes swrec{from{transform:rotate(0)}to{transform:rotate(360deg)}}.sw-rec{transform-box:fill-box;transform-origin:center;animation:swrec 2s linear infinite}' +
    '@keyframes swroad{from{stroke-dashoffset:0}to{stroke-dashoffset:-60}}.sw-road{animation:swroad .8s linear infinite}' +
    '@keyframes swspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sw-sp{animation:swspray 1.4s ease-out infinite}.sw-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "sw-bl" + (i % 2 ? " sw-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const RED = "#c60c30", PINK = "#ff6fb5", BLUE = "#41b6e6", STAR = "#e4002b";
  /* six-point Chicago flag star */
  const star6 = (cx, cy, r, fill) => { let d = ""; for (let i = 0; i < 12; i++) { const a = -Math.PI / 2 + i * Math.PI / 6, rr = i % 2 ? r * 0.5 : r; d += (i ? "L" : "M") + (cx + Math.cos(a) * rr).toFixed(1) + " " + (cy + Math.sin(a) * rr).toFixed(1); } return '<path d="' + d + 'z" fill="' + fill + '"/>'; };
  /* downtown skyline silhouette: the tall black tower with twin antennas, the white tower, the slanted top, generic blocks */
  const skyline = (x0, base, s, col, lit) => {
    const b = [[0, 40, 22], [24, 62, 18], [44, 30, 26], [72, 118, 26], [100, 78, 20], [122, 96, 22], [146, 52, 24], [172, 86, 18], [192, 44, 30]];
    let g = '<g fill="' + col + '">';
    b.forEach(([x, h, w]) => { g += '<rect x="' + (x0 + x * s).toFixed(1) + '" y="' + (base - h * s).toFixed(1) + '" width="' + (w * s).toFixed(1) + '" height="' + (h * s).toFixed(1) + '"/>'; });
    g += '<rect x="' + (x0 + 76 * s).toFixed(1) + '" y="' + (base - 140 * s).toFixed(1) + '" width="' + (2 * s).toFixed(1) + '" height="' + (22 * s).toFixed(1) + '"/><rect x="' + (x0 + 92 * s).toFixed(1) + '" y="' + (base - 140 * s).toFixed(1) + '" width="' + (2 * s).toFixed(1) + '" height="' + (22 * s).toFixed(1) + '"/>';
    g += '<path d="M' + (x0 + 122 * s).toFixed(1) + ' ' + (base - 96 * s).toFixed(1) + 'l' + (22 * s).toFixed(1) + ' ' + (-12 * s).toFixed(1) + 'v' + (12 * s).toFixed(1) + 'z"/></g>';
    if (lit) for (let i = 0; i < 26; i++) g += '<rect class="' + (i % 5 ? "" : "sw-bl") + '" x="' + (x0 + ((i * 37) % 200) * s + 3).toFixed(1) + '" y="' + (base - ((i * 23) % 36) * s - 6).toFixed(1) + '" width="1.6" height="1.6" fill="#ffe7a0" opacity=".8"/>';
    return g;
  };

  /* 1. Garfield on the Red Line, in the Dan Ryan median */
  function swstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (54 + i * 46) + '" y="106" width="34" height="22" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><path d="M28 160V104q0 -10 10 -10h300q20 0 26 24v42z" fill="#d9dde2" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="28" y="134" width="336" height="4" fill="' + BLUE + '"/><rect x="28" y="139" width="336" height="4" fill="' + RED + '"/>' + [110, 200, 290].map(x => '<rect x="' + x + '" y="104" width="2" height="54" fill="#9aa2aa"/>').join("") +
      '<path d="M336 98q20 4 24 26h-24z" fill="#1c2630"/><circle cx="356" cy="152" r="3.5" fill="#fff6c2"/>' +
      '<rect x="40" y="96" width="70" height="8" rx="2" fill="#111"/><text x="75" y="102.5" text-anchor="middle" ' + font + ' font-size="6" fill="#ff4a4a">RED · HOWARD</text>' +
      '<circle cx="90" cy="162" r="6" fill="#222"/><circle cx="300" cy="162" r="6" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sws1)"/>' + skyline(250, 70, 0.6, "#4d5a74", false) +
      '<rect x="0" y="70" width="400" height="10" fill="#8f8a80"/>' + [30, 150, 270, 390].map(x => '<rect x="' + (x - 3) + '" y="56" width="6" height="16" fill="#6c6f75"/><circle cx="' + x + '" cy="54" r="4" fill="#ffe9a8"/>').join("") +
      '<rect x="0" y="80" width="400" height="20" fill="#5f6166"/><path class="sw-road" d="M0 90h400" stroke="#e8e2c8" stroke-width="1.5" stroke-dasharray="14 16"/>' +
      '<g class="sw-carL"><rect x="0" y="82" width="26" height="8" rx="3" fill="#e9eef5"/></g><g class="sw-carL sw-carL2"><rect x="0" y="91" width="30" height="8" rx="3" fill="' + PINK + '"/></g>' +
      '<path d="M8 66l192 -12l192 12v8H8z" fill="#b9bec4" stroke="#7f858c" stroke-width="1.5"/>' + [40, 120, 200, 280, 360].map(x => '<rect x="' + (x - 2.5) + '" y="70" width="5" height="96" fill="#8b9097"/>').join("") +
      train +
      '<rect x="0" y="166" width="400" height="6" fill="#f2c200"/><rect x="0" y="172" width="400" height="34" fill="#a8a39a"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#5f6166"/><path class="sw-road" d="M0 233h400" stroke="#e8e2c8" stroke-width="1.5" stroke-dasharray="14 16"/>' +
      '<g class="sw-carR"><rect x="0" y="212" width="34" height="11" rx="4" fill="' + BLUE + '"/><circle cx="33" cy="217" r="1.8" fill="#fff6c2"/></g><g class="sw-carR sw-carR2"><rect x="0" y="240" width="40" height="12" rx="4" fill="#f3f3f3"/><circle cx="39" cy="245" r="1.8" fill="#fff6c2"/></g>' +
      '<rect x="0" y="204" width="400" height="4" fill="#c9c4b8"/>' +
      '<rect x="82" y="176" width="236" height="26" rx="3" fill="#111"/><text x="100" y="195" ' + font + ' font-size="16" fill="#fff">Garfield</text>' +
      '<circle cx="292" cy="189" r="9" fill="' + RED + '"/><text x="292" y="192.5" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">R</text><text x="252" y="193" text-anchor="middle" ' + font + ' font-size="9" fill="#ff8a8a">RED LINE</text>',
      sky("sws1", "#7aa6d6", "#f3d9b6"));
  }

  /* 2. The blues club, South Loop */
  function swblues() {
    const bricks = Array.from({ length: 14 }, (_, r) => '<path d="M40 ' + (40 + r * 9) + 'h320" stroke="#5e2a1c" stroke-width="1"/>').join("");
    const dots = Array.from({ length: 12 }, (_, i) => '<circle cx="' + (98 + (i * 11) % 28) + '" cy="' + (142 + (i * 7) % 24) + '" r="1.8" fill="#fff"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sws2)"/>' + stars(16) +
      '<rect x="40" y="36" width="320" height="170" fill="#8a3b26"/>' + bricks +
      '<rect x="40" y="30" width="320" height="10" fill="#3a1a12"/>' +
      '<g class="sw-flk"><rect x="120" y="50" width="160" height="40" rx="8" fill="#14070a" stroke="' + PINK + '" stroke-width="3"/><text x="200" y="81" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="30" fill="' + BLUE + '" stroke="#bfefff" stroke-width=".6">BLUES</text></g>' +
      '<rect x="64" y="104" width="96" height="84" fill="#2a1622" stroke="#c9a24a" stroke-width="3"/><rect x="240" y="104" width="96" height="84" fill="#2a1622" stroke="#c9a24a" stroke-width="3"/>' +
      '<rect x="174" y="118" width="52" height="88" fill="#1a0c08" stroke="#c9a24a" stroke-width="3"/><rect x="178" y="122" width="44" height="80" fill="#ffcf7a" opacity=".25"/>' +
      '<rect x="68" y="108" width="88" height="76" fill="#ffcf7a" opacity=".22"/><rect x="244" y="108" width="88" height="76" fill="#ffcf7a" opacity=".22"/>' +
      '<g transform="rotate(-24 112 150)"><rect x="108" y="104" width="8" height="46" fill="#d8b47a"/><rect x="106" y="98" width="12" height="10" rx="2" fill="#222"/><path d="M98 152q-8 -12 4 -18q8 -2 10 4q2 -6 10 -4q12 6 4 18q8 12 -4 20q-10 4 -14 -2q-4 6 -14 2q-12 -8 4 -20z" fill="#111" stroke="#666" stroke-width="1"/>' + dots + '<rect x="104" y="156" width="16" height="3" fill="#ccc"/></g>' +
      '<rect x="262" y="160" width="52" height="10" rx="2" fill="#5a2a1a"/><rect x="270" y="130" width="34" height="30" rx="3" fill="#3a1a12" stroke="#c9a24a" stroke-width="1.5"/><circle cx="287" cy="145" r="9" fill="#222" stroke="#888"/>' +
      '<g class="sw-note"><text x="96" y="150" font-size="18" fill="#ffe28a">&#9834;</text></g><g class="sw-note sw-n2"><text x="290" y="146" font-size="16" fill="' + PINK + '">&#9835;</text></g><g class="sw-note sw-n3"><text x="200" y="112" font-size="16" fill="' + BLUE + '">&#9834;</text></g>' +
      '<rect x="0" y="206" width="400" height="54" fill="#55545a"/><rect x="0" y="204" width="400" height="4" fill="#c9c4b8"/>' +
      '<rect x="20" y="120" width="4" height="86" fill="#222"/><circle class="sw-flk" cx="22" cy="118" r="7" fill="#ffe9a8"/>' +
      '<text x="200" y="240" text-anchor="middle" ' + font + ' font-size="11" fill="#f4eee6">DADDY\'S BLUES CLUB · SOUTH LOOP</text>',
      sky("sws2", "#120a1c", "#3a2140"));
  }

  /* 3. On my way home, back to Chicago: the expressway at dusk */
  function swhighway() {
    return svg(
      '<rect width="400" height="260" fill="url(#sws3)"/>' + stars(12) +
      '<circle cx="320" cy="96" r="26" fill="#ffb36b" opacity=".5"/>' +
      skyline(110, 118, 0.9, "#2b2346", true) +
      '<path d="M0 118h400v142H0z" fill="#3a3550"/>' +
      '<path d="M170 118L20 260h360L230 118z" fill="#4d4b55"/>' +
      '<path class="sw-road" d="M200 120V260" stroke="#f2e6b8" stroke-width="3" stroke-dasharray="16 14"/>' +
      '<path d="M182 118L100 260M218 118L300 260" stroke="#d8d2c0" stroke-width="2"/>' +
      '<rect x="120" y="128" width="4" height="40" fill="#666"/><rect x="276" y="128" width="4" height="40" fill="#666"/><rect x="110" y="112" width="180" height="4" fill="#666"/>' +
      '<rect x="146" y="72" width="108" height="42" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="200" y="92" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">CHICAGO</text><path d="M200 99v10M194 103l6 -6l6 6" stroke="#fff" stroke-width="2.5" fill="none"/>' +
      star6(58, 50, 9, STAR) + star6(342, 44, 7, STAR) +
      '<g class="sw-carR"><rect x="0" y="214" width="1" height="1" fill="none"/></g>' +
      '<g transform="translate(176 206)"><rect x="0" y="0" width="48" height="22" rx="5" fill="' + PINK + '"/><rect x="6" y="-10" width="36" height="12" rx="4" fill="#d8579a"/><circle cx="8" cy="12" r="3.5" fill="#ff4a4a" class="sw-bl"/><circle cx="40" cy="12" r="3.5" fill="#ff4a4a" class="sw-bl"/><rect x="2" y="22" width="10" height="5" fill="#111"/><rect x="36" y="22" width="10" height="5" fill="#111"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#f4eee6">ON MY WAY HOME · BACK TO CHICAGO</text>',
      sky("sws3", "#241a4a", "#f08a5a"));
  }

  /* 4. Weight a Minute: the V.I.P. rope */
  function swvip() {
    return svg(
      '<rect width="400" height="260" fill="#120816"/>' +
      '<g class="sw-sw1"><path d="M120 20L90 260H150z" fill="' + PINK + '" opacity=".18"/></g><g class="sw-sw2"><path d="M280 20L250 260H310z" fill="' + BLUE + '" opacity=".18"/></g>' +
      '<rect x="150" y="40" width="100" height="56" rx="6" fill="#1d1024" stroke="' + PINK + '" stroke-width="2"/>' +
      '<rect x="160" y="70" width="80" height="22" fill="#2a1a33"/><circle class="sw-rec" cx="182" cy="70" r="10" fill="#111" stroke="#555"/><circle class="sw-rec" cx="218" cy="70" r="10" fill="#111" stroke="#555"/><circle cx="182" cy="70" r="3" fill="' + PINK + '"/><circle cx="218" cy="70" r="3" fill="' + BLUE + '"/>' +
      '<text x="200" y="56" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">DJ</text>' +
      '<rect x="40" y="108" width="320" height="26" rx="4" fill="#0c0610" stroke="#c9a24a" stroke-width="2"/><text x="200" y="127" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="#ffd36a" letter-spacing="2" class="sw-flk">WEIGHT A MINUTE</text>' +
      '<rect x="0" y="196" width="400" height="64" fill="#24122a"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 50) + '" y="196" width="50" height="64" fill="' + (i % 2 ? "#2e1836" : "#1c0e22") + '"/>').join("") +
      '<rect x="60" y="160" width="10" height="40" fill="#c9a24a"/><circle cx="65" cy="158" r="7" fill="#e8c46a"/><rect x="330" y="160" width="10" height="40" fill="#c9a24a"/><circle cx="335" cy="158" r="7" fill="#e8c46a"/>' +
      '<path d="M70 166q132 40 260 0" stroke="#b0122e" stroke-width="7" fill="none"/>' +
      '<rect x="160" y="150" width="80" height="24" rx="4" fill="#111" stroke="#fff" stroke-width="1.5"/><text x="200" y="167" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">V.I.P.</text>' +
      '<g class="sw-bl"><circle cx="30" cy="30" r="2" fill="' + PINK + '"/><circle cx="370" cy="40" r="2" fill="' + BLUE + '"/><circle cx="60" cy="80" r="1.6" fill="#ffd36a"/></g><g class="sw-bl sw-bl2"><circle cx="340" cy="90" r="2" fill="' + PINK + '"/><circle cx="20" cy="140" r="1.6" fill="#fff"/></g>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#f4eee6">WHERE THE PARTY AT? · STRAIGHT TO THE V.I.P.</text>');
  }

  /* 5. W Garfield Blvd and S State St */
  function swcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sws5)"/>' + stars(18) +
      skyline(110, 128, 0.85, "#2a2440", true) +
      '<rect x="0" y="126" width="400" height="98" fill="#cfc4ae"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#b9ad94" stroke-width="1"/>').join("") +
      '<rect x="0" y="126" width="400" height="6" fill="#8f836a"/>' +
      tag("SHAWNNA", 18, 188, 50, PINK, -6) + tag("DTP", 40, 216, 26, BLUE, -5) + tag("CHI-TOWN", 112, 216, 22, "#fff", -4) + star6(250, 196, 14, STAR) + star6(282, 204, 9, STAR) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(232, 98, 166, "W Garfield Blvd") + sign(270, 124, 108, "S State St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="sw-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="sw-sp"><circle cx="196" cy="168" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="sw-sp sw-sp2"><circle cx="202" cy="162" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("sws5", "#14102e", "#c8607a"));
  }

  window.SCENES = { swstation: swstation, swblues: swblues, swhighway: swhighway, swvip: swvip, swcorner: swcorner };
})();
