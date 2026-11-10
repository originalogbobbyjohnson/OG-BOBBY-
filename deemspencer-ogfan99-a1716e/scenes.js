/* deemspencer scenes (NYC map: Queens; South Jamaica, Guy R Brewer Blvd). CSS classes prefixed ds- (the page's own anim-train is kept, used on the bus).
   1 The Q111 pulling up on Guy R Brewer Blvd at 116 Av, South Jamaica: two-family houses, early evening.
   2 The bike ride down Guy R Brewer "all the way to the Ave" at sunrise (his "sun singing" notes, adultSW!M era): a bike rolling past the Jamaica Ave storefronts, the sun coming up.
   3 adultSW!M: a public pool at golden hour, a swimmer gliding down the lane, ripples, the high dive.
   4 The last gig on the road ("counting by the head, it was seven hundred people / hollering out lines I wrote", how far we've come): a small stage, one mic, crowd hands swaying, warm lights.
   5 Guy R Brewer Blvd and 116 Av: green signs, DEEM SPENCER tagged, a jet dropping toward JFK overhead.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dsglow{0%,100%{opacity:.45}50%{opacity:1}}.ds-glow{animation:dsglow 2.2s ease-in-out infinite}.ds-g2{animation-delay:-1.1s}' +
    '@keyframes dsbike{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.ds-bike{animation:dsbike 9s linear infinite}' +
    '@keyframes dsspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.ds-spin{transform-box:fill-box;transform-origin:50% 50%;animation:dsspin 1s linear infinite}' +
    '@keyframes dssun{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.ds-sun{animation:dssun 5s ease-in-out infinite}' +
    '@keyframes dsswim{0%,100%{transform:translateX(0)}50%{transform:translateX(220px)}}.ds-swim{animation:dsswim 9s ease-in-out infinite}' +
    '@keyframes dsrip{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.ds-rip{transform-box:fill-box;transform-origin:50% 50%;animation:dsrip 2.4s ease-out infinite}.ds-r2{animation-delay:-.8s}.ds-r3{animation-delay:-1.6s}' +
    '@keyframes dswave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.ds-wave{animation:dswave 2.4s linear infinite}' +
    '@keyframes dssway{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}.ds-sway{transform-box:fill-box;transform-origin:50% 100%;animation:dssway 1.6s ease-in-out infinite}.ds-s2{animation-delay:-.8s}' +
    '@keyframes dsplane{from{transform:translate(-80px,-20px)}to{transform:translate(480px,40px)}}.ds-plane{animation:dsplane 10s linear infinite}' +
    '@keyframes dsspray{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(-14px,-22px);opacity:0}}.ds-sp{animation:dsspray 1.4s ease-out infinite}.ds-sp2{animation-delay:-.5s}.ds-sp3{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const BLUE = "#7fd3f0", SUN = "#f6c445", PINK = "#f08aa8";
  const house = (x, y, body, trim) => '<g transform="translate(' + x + ' ' + y + ')"><rect x="0" y="16" width="70" height="70" fill="' + body + '"/><path d="M-6 18l41 -24l41 24z" fill="' + trim + '"/>' +
    '<rect x="10" y="28" width="16" height="16" fill="#fbe2a0" class="ds-glow"/><rect x="44" y="28" width="16" height="16" fill="#fbe2a0" class="ds-glow ds-g2"/><rect x="10" y="56" width="16" height="16" fill="#fbe2a0"/><rect x="44" y="56" width="16" height="30" fill="#5a3a2a"/>' +
    '<rect x="-4" y="44" width="78" height="4" fill="' + trim + '"/></g>';

  /* 1. Q111 at Guy R Brewer Blvd & 116 Av */
  function dsstop() {
    const bus = '<g class="anim-train"><rect x="40" y="126" width="300" height="66" rx="8" fill="#f4f4f2" stroke="#556" stroke-width="2"/>' +
      '<rect x="40" y="168" width="300" height="8" fill="#0039a6"/><rect x="40" y="176" width="300" height="3" fill="#ffcc33"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (78 + i * 42) + '" y="136" width="34" height="26" rx="2" fill="#22303a"/>').join("") +
      '<rect x="44" y="134" width="28" height="46" rx="2" fill="#2c3e48"/>' +
      '<rect x="80" y="128" width="200" height="6" fill="#111"/><text x="180" y="133.5" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb21e">Q111 GUY R BREWER BLVD</text>' +
      '<circle cx="90" cy="194" r="11" fill="#1a1a1a"/><circle cx="90" cy="194" r="5" fill="#888"/><circle cx="296" cy="194" r="11" fill="#1a1a1a"/><circle cx="296" cy="194" r="5" fill="#888"/>' +
      '<rect x="336" y="148" width="6" height="8" fill="#fff6c2" class="ds-glow"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dss1)"/>' +
      house(10, 70, "#c9b8a4", "#6b4a3a") + house(110, 66, "#b9c6cc", "#3f4f5a") + house(214, 72, "#d8c49a", "#7a5a3a") + house(316, 68, "#c4a8a8", "#5a3a3a") +
      '<rect x="0" y="156" width="400" height="40" fill="#5f8a4a"/>' +
      '<rect x="0" y="196" width="400" height="12" fill="#b7b0a4"/><rect x="0" y="208" width="400" height="52" fill="#3f4247"/><path d="M0 236h400" stroke="#f2c230" stroke-width="2" stroke-dasharray="20 14"/>' +
      bus +
      /* bus stop pole */
      '<rect x="362" y="104" width="4" height="94" fill="#6b6f76"/><rect x="346" y="88" width="36" height="34" rx="3" fill="#0039a6" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="364" y="100" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">BUS STOP</text><text x="364" y="115" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Q111</text>' +
      /* black station-style sign */
      '<rect x="18" y="18" width="280" height="40" rx="3" fill="#111" stroke="#444" stroke-width="2"/><text x="30" y="44" ' + font + ' font-size="15" fill="#fff">Guy R Brewer Blvd / 116 Av</text>',
      sky("dss1", "#28324f", "#e3a07a"));
  }

  /* 2. Down Guy R Brewer to the Ave at sunrise */
  function dsave() {
    const bike = '<g class="ds-bike"><g transform="translate(0 206)"><circle class="ds-spin" cx="14" cy="18" r="13" fill="none" stroke="#222" stroke-width="3" stroke-dasharray="6 3"/><circle class="ds-spin" cx="62" cy="18" r="13" fill="none" stroke="#222" stroke-width="3" stroke-dasharray="6 3"/>' +
      '<path d="M14 18l18 -18h22l8 18M32 0l8 18h22M30 -6h8M52 0l-2 -10h8" stroke="' + PINK + '" stroke-width="3.5" fill="none" stroke-linejoin="round"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dss2)"/>' +
      '<g class="ds-sun"><circle cx="300" cy="96" r="36" fill="' + SUN + '"/><circle cx="300" cy="96" r="50" fill="' + SUN + '" opacity=".25"/></g>' +
      /* storefront row of the Ave */
      '<rect x="0" y="110" width="120" height="92" fill="#8f5a48"/><rect x="124" y="98" width="96" height="104" fill="#a8745a"/><rect x="224" y="118" width="80" height="84" fill="#7d5e72"/><rect x="308" y="104" width="92" height="98" fill="#996a4a"/>' +
      [[8, 150, 104, "#f3d36a"], [132, 150, 80, "#7fd3f0"], [232, 156, 64, "#f08aa8"], [316, 150, 76, "#f3d36a"]].map(a => '<rect x="' + a[0] + '" y="' + a[1] + '" width="' + a[2] + '" height="40" fill="#2b2f3a"/><rect x="' + a[0] + '" y="' + (a[1] - 14) + '" width="' + a[2] + '" height="12" fill="' + a[3] + '"/>').join("") +
      [10, 140, 240, 324].map(x => '<rect x="' + x + '" y="118" width="14" height="12" fill="#ffe7b0" class="ds-glow"/><rect x="' + (x + 24) + '" y="118" width="14" height="12" fill="#ffe7b0" class="ds-glow ds-g2"/>').join("") +
      '<rect x="0" y="202" width="400" height="10" fill="#c9c2b6"/><rect x="0" y="212" width="400" height="48" fill="#4a4d55"/><path d="M0 240h400" stroke="#fff" stroke-width="2" stroke-dasharray="16 16"/>' +
      bike + tag("ALL THE WAY TO THE AVE", 18, 44, 20, SUN, -3),
      sky("dss2", "#ffb07a", "#ffe3b0"));
  }

  /* 3. adultSW!M: the pool */
  function dspool() {
    return svg(
      '<rect width="400" height="260" fill="url(#dss3)"/>' +
      /* fence + trees */
      '<rect x="0" y="80" width="400" height="34" fill="#4f7a4a"/>' + Array.from({ length: 21 }, (_, i) => '<path d="M' + (i * 20) + ' 80v34" stroke="#9aa0a6" stroke-width="2"/>').join("") + '<path d="M0 86h400M0 108h400" stroke="#9aa0a6" stroke-width="2"/>' +
      /* deck + pool */
      '<rect x="0" y="114" width="400" height="146" fill="#e8dcc6"/><rect x="20" y="130" width="360" height="116" fill="#3fa8d8" stroke="#fff" stroke-width="4"/>' +
      [158, 186, 214].map(y => '<path d="M20 ' + y + 'h360" stroke="#fff" stroke-width="2" stroke-dasharray="8 6"/>').join("") +
      '<g class="ds-wave"><path d="M20 146q10 -4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#bfe6f3" stroke-width="2" fill="none" opacity=".7"/></g>' +
      /* swimmer */
      '<g class="ds-swim"><g transform="translate(60 172)"><ellipse cx="0" cy="0" rx="22" ry="5" fill="#2b6a8a"/><circle cx="24" cy="-1" r="6" fill="' + PINK + '"/><path d="M4 -4q10 -14 22 -6" stroke="#2b6a8a" stroke-width="4" fill="none" stroke-linecap="round"/></g></g>' +
      ['ds-rip', 'ds-rip ds-r2', 'ds-rip ds-r3'].map(c => '<ellipse class="' + c + '" cx="300" cy="222" rx="18" ry="6" fill="none" stroke="#fff" stroke-width="2"/>').join("") +
      /* high dive */
      '<path d="M352 130v-80M372 130v-80" stroke="#c8ccd2" stroke-width="5"/><rect x="300" y="46" width="78" height="7" rx="3" fill="' + SUN + '"/>' +
      tag("ADULTSW!M", 30, 60, 30, BLUE, -4),
      sky("dss3", "#f7b27a", "#ffe6c0"));
  }

  /* 4. The last gig on the road */
  function dsstage() {
    return svg(
      '<rect width="400" height="260" fill="url(#dss4)"/>' +
      /* lights */
      [60, 140, 260, 340].map((x, i) => '<path class="ds-glow' + (i % 2 ? " ds-g2" : "") + '" d="M' + x + ' 0l-34 150h68z" fill="' + [SUN, PINK, BLUE, SUN][i] + '" opacity=".25"/><rect x="' + (x - 8) + '" y="0" width="16" height="10" fill="#333"/>').join("") +
      /* stage */
      '<rect x="40" y="136" width="320" height="22" fill="#3a2a22"/><rect x="40" y="132" width="320" height="6" fill="#5a4030"/>' +
      '<path d="M200 132v-58" stroke="#aaa" stroke-width="3"/><path d="M186 132h28" stroke="#aaa" stroke-width="3"/><rect x="194" y="62" width="12" height="16" rx="6" fill="#333"/>' +
      '<rect x="60" y="106" width="34" height="28" fill="#1a1a1a"/><circle cx="77" cy="120" r="9" fill="#333" stroke="#666" stroke-width="2"/><rect x="306" y="106" width="34" height="28" fill="#1a1a1a"/><circle cx="323" cy="120" r="9" fill="#333" stroke="#666" stroke-width="2"/>' +
      /* crowd hands */
      '<rect x="0" y="170" width="400" height="90" fill="#16131f"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + (12 + i * 25) + '" cy="' + (196 + (i % 3) * 8) + '" r="11" fill="#2a2536"/>').join("") +
      Array.from({ length: 10 }, (_, i) => '<g class="ds-sway' + (i % 2 ? " ds-s2" : "") + '"><path d="M' + (24 + i * 38) + ' 196v-26" stroke="#3a3348" stroke-width="5" stroke-linecap="round"/><circle cx="' + (24 + i * 38) + '" cy="168" r="4" fill="#3a3348"/></g>').join("") +
      tag("700 DEEP", 20, 50, 28, SUN, -4),
      sky("dss4", "#1b1430", "#3a2650"));
  }

  /* 5. Guy R Brewer Blvd and 116 Av */
  function dscorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dss5)"/>' +
      /* jet dropping into JFK */
      '<g class="ds-plane"><g transform="translate(40 40) rotate(8)"><path d="M0 10h70l12 -4l6 4l-6 4l-12 0h-70z" fill="#eef0f3"/><path d="M30 10l-14 18h8l20 -18z" fill="#cfd4da"/><path d="M30 10l-10 -14h6l18 14z" fill="#cfd4da"/><path d="M0 10l-6 -12h6l8 12z" fill="#cfd4da"/>' +
      '<circle cx="80" cy="10" r="1.5" fill="#f33" class="ds-glow"/></g></g>' +
      /* the wall */
      '<rect x="0" y="126" width="400" height="88" fill="#c9b49a"/>' +
      Array.from({ length: 4 }, (_, r) => '<path d="M0 ' + (146 + r * 20) + 'h400" stroke="#b39c80" stroke-width="1.5"/>').join("") +
      tag("DEEM SPENCER", 18, 182, 38, BLUE, -5) + tag("SOAP", 40, 206, 18, PINK, -3) + tag("ADULTSW!M", 190, 206, 18, SUN, -4) +
      ['ds-sp', 'ds-sp ds-sp2', 'ds-sp ds-sp3'].map(c => '<circle class="' + c + '" cx="300" cy="184" r="3" fill="' + PINK + '"/>').join("") +
      '<rect x="300" y="182" width="8" height="18" rx="2" fill="#333" transform="rotate(30 304 191)"/>' +
      '<rect x="0" y="214" width="400" height="10" fill="#cfc8ba"/><rect x="0" y="224" width="400" height="36" fill="#45484e"/>' +
      '<rect x="340" y="104" width="5" height="120" fill="#6b6f76"/>' + sign(272, 88, 126, "Guy R Brewer Blvd", 11) + sign(286, 112, 112, "116 Av", 12),
      sky("dss5", "#7fb6e0", "#f1dcc0"));
  }

  window.SCENES = { dsstop, dsave, dspool, dsstage, dscorner };
})();
