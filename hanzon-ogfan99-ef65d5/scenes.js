(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.wv{animation:wave 3s linear infinite}' +
    '@keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}.blk{animation:blink 1.6s infinite}.blk2{animation:blink 1.6s infinite;animation-delay:.8s}' +
    '@keyframes flick{0%,100%{opacity:1;transform:scaleY(1)}30%{opacity:.75;transform:scaleY(.85)}60%{opacity:.95;transform:scaleY(1.1)}}.flk{transform-box:fill-box;transform-origin:50% 100%;animation:flick .9s ease-in-out infinite}.flk2{animation-delay:.35s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.spn{transform-box:view-box;animation:spin 12s linear infinite}' +
    '@keyframes sweep{0%,100%{transform:rotate(-28deg)}50%{transform:rotate(28deg)}}.swp{animation:sweep 5s ease-in-out infinite}' +
    '@keyframes flutter{0%,100%{transform:skewY(0)}50%{transform:skewY(-7deg)}}.flg{transform-box:fill-box;transform-origin:0 50%;animation:flutter 1.4s ease-in-out infinite}' +
    '@keyframes fall{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-30px,120px) rotate(200deg);opacity:0}}.lf{animation:fall 5s linear infinite}.lf2{animation-delay:1.7s}.lf3{animation-delay:3.3s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(460px)}}.dft{animation:drift 26s linear infinite}' +
    '@keyframes boat{from{transform:translateX(-120px)}to{transform:translateX(440px)}}.bt{animation:boat 18s linear infinite}' +
    '@keyframes swim{0%,100%{transform:translateX(0)}50%{transform:translateX(40px)}}.swm{animation:swim 7s ease-in-out infinite}' +
    '@keyframes peek{0%,30%,100%{transform:translateY(14px)}45%,85%{transform:translateY(0)}}.pk{animation:peek 4s ease-in-out infinite}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}.drp{animation:drip 2.2s ease-in infinite}' +
    '@keyframes carR{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.cr1{animation:carR 6s linear infinite}.cr2{animation:carR 6s linear infinite;animation-delay:-3s}' +
    '@keyframes steam{0%{transform:translateY(0);opacity:0}30%{opacity:.6}100%{transform:translateY(-26px);opacity:0}}.stm{animation:steam 3s ease-out infinite}.stm2{animation-delay:1.5s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  /* Staten Island Railway "SIR" bullet */
  const sir = (x, y) =>
    '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">SIR</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const cloud = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="10"/><ellipse cx="-12" cy="-4" rx="11" ry="8"/></g>';
  /* SIR car (stainless, blue band), w long, at x,y top-left */
  const sirCar = (x, y, w) => {
    let win = ""; for (let i = x + 14; i < x + w - 40; i += 42) win += '<rect x="' + i + '" y="' + (y + 12) + '" width="28" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
      '<rect x="' + x + '" y="' + (y + 40) + '" width="' + w + '" height="6" fill="#0039a6"/>' + win +
      '<rect x="' + (x + w - 18) + '" y="' + (y + 12) + '" width="12" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>' +
      '<circle cx="' + (x + w - 8) + '" cy="' + (y + 54) + '" r="4" fill="#fff6c2"/>' + sir(x + w - 40, y + 54);
  };
  /* green NYC street sign blade */
  const blade = (x, y, w, txt, rot) =>
    '<g transform="rotate(' + (rot || 0) + ' ' + (x + w / 2) + ' ' + (y + 11) + ')"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="3" fill="#0f7a3d" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">' + txt + '</text></g>';
  const station = (name, x, y, w) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="34" rx="4" fill="#111"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#fff"/>' +
    '<text x="' + (x + 14) + '" y="' + (y + 25) + '" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">' + name + '</text>' + sir(x + w - 28, y + 18);
  const ORG = "#ff8a1e", GOLD = "#ffd34d", RED = "#e23b3b";

  /* 1. Clifton: the SIR on its embankment, side platform under the beige canopy, Bay St below */
  function station1() {
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + '<g class="dft">' + cloud(70, 30, .9) + '</g>' +
      /* houses in the distance */
      '<rect x="0" y="70" width="60" height="50" fill="#7a5a4a"/><rect x="70" y="80" width="50" height="40" fill="#9a8a6a"/><rect x="330" y="74" width="70" height="46" fill="#6a7a8a"/>' +
      /* canopy */
      '<rect x="0" y="52" width="400" height="12" fill="#d8c8a4"/><rect x="0" y="64" width="400" height="4" fill="#a8977a"/>' +
      (function () { let p = ""; for (let x = 30; x < 400; x += 110) p += '<rect x="' + x + '" y="68" width="6" height="104" fill="#7a6a54"/>'; return p; })() +
      station("Clifton", 104, 80, 192) +
      '<g class="anim-train">' + sirCar(-10, 118, 330) + '</g>' +
      '<rect y="180" width="400" height="10" fill="#eab308"/>' +
      /* embankment wall down to Bay St */
      '<rect y="190" width="400" height="40" fill="#8a7a66"/>' +
      (function () { let b = ""; for (let y = 194; y < 230; y += 9) for (let x = (y % 18 ? 0 : 10); x < 400; x += 20) b += '<rect x="' + x + '" y="' + y + '" width="18" height="7" fill="#9a8a74"/>'; return b; })() +
      '<rect y="230" width="400" height="30" fill="#2c2c30"/>' +
      '<g class="cr1"><rect x="0" y="238" width="44" height="14" rx="4" fill="#f2c200"/><circle cx="10" cy="252" r="4" fill="#111"/><circle cx="34" cy="252" r="4" fill="#111"/></g>' +
      tag("HANZ ON", 18, 222, 26, ORG, -3) + tag("BAY ST", 300, 222, 20, "#fff", -5),
      sky("s1", "#6fb3e6", "#e0f0ff"));
  }

  /* 2. Park Hill: the brick towers up on the hill at night, windows clicking on */
  function parkhill() {
    const tower = (x, y, w, h) => {
      let win = "";
      for (let yy = y + 10; yy < y + h - 8; yy += 14) for (let xx = x + 8; xx < x + w - 8; xx += 14) {
        const k = (xx * 7 + yy * 3) % 11;
        win += '<rect x="' + xx + '" y="' + yy + '" width="7" height="8" fill="' + (k < 4 ? "#ffd98a" : "#2a2230") + '"' + (k === 1 ? ' class="blk"' : k === 2 ? ' class="blk2"' : "") + '/>';
      }
      return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#7a3e2c"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="5" fill="#5a2a1e"/>' + win;
    };
    return svg(
      '<rect width="400" height="260" fill="url(#p1)"/>' + stars(26) +
      '<circle cx="330" cy="40" r="16" fill="#f7f3ea" opacity=".9"/>' +
      '<path d="M0 200q200-70 400 0v60H0z" fill="#1e2a1e"/>' +
      tower(30, 100, 70, 120) + tower(120, 70, 76, 150) + tower(216, 84, 72, 136) + tower(306, 110, 64, 110) +
      '<rect y="220" width="400" height="40" fill="#17201a"/>' +
      '<path d="M0 220h400" stroke="#4a5a4a" stroke-width="2"/>' +
      (function () { let t = ""; for (let x = 6; x < 400; x += 26) t += '<circle cx="' + x + '" cy="222" r="10" fill="#22351f"/>'; return t; })() +
      '<text x="200" y="250" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#fff">PARK HILL · UP ON THE HILL</text>',
      sky("p1", "#0b1026", "#3a2a4a"));
  }

  /* 3. Clove Lakes Park: the old stone arch bridge over the lake, fall leaves coming down, ducks */
  function clove() {
    let stones = ""; for (let i = 0; i < 40; i++) { const x = 60 + (i * 31) % 280, y = 104 + (i * 13) % 40; if (x > 90 && x < 296 && y > 104) continue; stones += '<rect x="' + x + '" y="' + y + '" width="14" height="8" rx="2" fill="' + (i % 2 ? "#8c8274" : "#a0968a") + '"/>'; }
    let ripples = ""; for (let x = 0; x < 460; x += 40) ripples += '<path d="M' + x + ' 0q10-3 20 0t20 0" stroke="#bfe3f7" stroke-width="1.2" fill="none" opacity=".45"/>';
    const tree = (x, c) => '<rect x="' + (x - 3) + '" y="90" width="6" height="60" fill="#4a3424"/><circle cx="' + x + '" cy="80" r="30" fill="' + c + '"/><circle cx="' + (x + 18) + '" cy="96" r="18" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#k1)"/>' +
      tree(30, "#d9662b") + tree(370, "#e8a02b") + tree(330, "#b8442a") +
      /* bridge */
      '<path d="M40 150V100h320v50h-60a100 44 0 0 0-200 0z" fill="#978c7e"/>' + stones +
      '<path d="M100 150a100 44 0 0 1 200 0z" fill="#2a4a5a"/>' +
      '<rect x="36" y="92" width="328" height="8" fill="#7d7366"/>' +
      /* lake */
      '<rect y="150" width="400" height="110" fill="#3a7a9a"/>' +
      '<path d="M100 150a100 40 0 0 0 200 0z" fill="#5a5048" opacity=".35"/>' +
      '<g class="wv"><g transform="translate(0 176)">' + ripples + '</g><g transform="translate(-20 210)">' + ripples + '</g></g>' +
      '<g class="swm"><g transform="translate(150 194)"><ellipse cx="0" cy="0" rx="10" ry="5" fill="#7a5a3a"/><circle cx="9" cy="-5" r="4" fill="#2f6b3a"/><path d="M12 -5l5 1-5 1z" fill="#ff9a1a"/></g><g transform="translate(180 202)"><ellipse cx="0" cy="0" rx="8" ry="4" fill="#8a6a4a"/><circle cx="7" cy="-4" r="3.4" fill="#8a6a4a"/></g></g>' +
      '<g class="lf"><path d="M120 60q5-5 10 0q-5 5-10 0z" fill="#e8a02b"/></g><g class="lf lf2"><path d="M260 50q5-5 10 0q-5 5-10 0z" fill="#d9662b"/></g><g class="lf lf3"><path d="M200 40q5-5 10 0q-5 5-10 0z" fill="#b8442a"/></g>' +
      '<rect y="238" width="400" height="22" fill="#1f3f50" opacity=".8"/>' +
      '<text x="200" y="253" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#fff">CLOVE LAKES PARK</text>',
      sky("k1", "#f2b46a", "#fbe6c4"));
  }

  /* 4. The Staten Island Zoo in Barrett Park: the brick gate, and the zoo's weather groundhog popping up */
  function zoo() {
    return svg(
      '<rect width="400" height="260" fill="url(#z1)"/>' + '<g class="dft">' + cloud(100, 40, 1) + cloud(280, 30, .7) + '</g>' +
      '<rect y="150" width="400" height="110" fill="#4f8f34"/>' +
      (function () { let t = ""; for (let x = 0; x < 400; x += 40) t += '<circle cx="' + x + '" cy="146" r="22" fill="#3f7a2a"/>'; return t; })() +
      /* brick gate pillars + arch sign */
      '<rect x="80" y="80" width="34" height="120" fill="#a8432f"/><rect x="286" y="80" width="34" height="120" fill="#a8432f"/>' +
      '<rect x="76" y="74" width="42" height="10" fill="#efe6d2"/><rect x="282" y="74" width="42" height="10" fill="#efe6d2"/>' +
      '<path d="M114 96q86-34 172 0v18q-86-34-172 0z" fill="#1b4a2a" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="104" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" textLength="140" lengthAdjust="spacingAndGlyphs" fill="' + GOLD + '">STATEN ISLAND ZOO</text>' +
      /* iron gate */
      (function () { let g = ""; for (let x = 120; x < 284; x += 10) g += '<rect x="' + x + '" y="124" width="3" height="76" fill="#222"/>'; return g; })() +
      '<rect x="114" y="140" width="172" height="3" fill="#222"/>' +
      /* path */
      '<path d="M150 260l30-60h40l30 60z" fill="#c9b28a"/>' +
      /* groundhog burrow */
      '<ellipse cx="340" cy="232" rx="30" ry="9" fill="#5a3a22"/>' +
      '<g class="pk"><path d="M326 232v-16a14 14 0 0 1 28 0v16z" fill="#8a5a32"/><circle cx="335" cy="214" r="2" fill="#111"/><circle cx="345" cy="214" r="2" fill="#111"/><ellipse cx="340" cy="220" rx="4" ry="3" fill="#5a3a22"/><circle cx="330" cy="204" r="3" fill="#8a5a32"/><circle cx="350" cy="204" r="3" fill="#8a5a32"/></g>' +
      '<ellipse cx="340" cy="234" rx="30" ry="5" fill="#3a2414"/>' +
      '<text x="20" y="250" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="2" fill="#fff">BARRETT PARK</text>',
      sky("z1", "#5aa6e0", "#d6ecff"));
  }

  /* 5. Targee St & Vanderbilt Ave: the Wu-Tang Clan District street sign over the corner, the wall tagged up */
  function corner() {
    let bricks = ""; for (let y = 70; y < 220; y += 12) for (let x = (y / 12) % 2 ? -12 : 0; x < 400; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="10" fill="#7a4a30"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#c1)"/>' +
      '<rect y="68" width="400" height="154" fill="#5a3422"/>' + bricks +
      tag("HANZ ON", 24, 150, 50, ORG, -6) + tag("HANNIBAL", 40, 196, 30, GOLD, -4) + tag("BARCA", 196, 202, 28, "#fff", -7) +
      '<g class="drp"><rect x="90" y="156" width="3" height="10" fill="' + ORG + '"/></g>' +
      '<rect x="352" y="16" width="6" height="214" fill="#4a4a4a"/>' +
      blade(236, 14, 164, "Wu-Tang Clan District", 0) +
      blade(282, 40, 116, "Targee St", 0) + blade(270, 64, 128, "Vanderbilt Av", 0) +
      '<rect y="222" width="400" height="38" fill="#2c2c30"/><rect y="222" width="400" height="6" fill="#9a9a9a"/>' +
      '<g class="cr2"><rect x="0" y="236" width="44" height="14" rx="4" fill="#e23b3b"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="34" cy="250" r="4" fill="#111"/></g>',
      sky("c1", "#f5a04b", "#3a1d2d"));
  }

  window.SCENES = { station: station1, parkhill, clove, zoo, corner };
})();
