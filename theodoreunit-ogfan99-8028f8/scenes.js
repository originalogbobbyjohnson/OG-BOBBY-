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
  const YEL = "#ffd34d", BLU = "#2fb7ff", ORG = "#ff6b3d";

  /* 1. Stapleton at night: the elevated SIR platform lit up over Bay St, the train pulling in, harbor lights beyond */
  function station1() {
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(30) +
      '<circle cx="340" cy="34" r="14" fill="#f7f3ea" opacity=".9"/>' +
      '<rect y="96" width="400" height="28" fill="#13223a"/>' +
      (function () { let l = ""; for (let x = 10; x < 400; x += 22) l += '<rect x="' + x + '" y="' + (84 + (x % 3) * 4) + '" width="10" height="' + (12 - (x % 3) * 4) + '" fill="#2a3a5a"/><circle cx="' + (x + 5) + '" cy="110" r="1.4" fill="#ffd98a" class="' + (x % 44 ? "blk" : "blk2") + '"/>'; return l; })() +
      '<rect x="0" y="48" width="400" height="10" fill="#22262e"/><rect x="0" y="58" width="400" height="4" fill="' + YEL + '"/>' +
      (function () { let p = ""; for (let x = 40; x < 400; x += 130) p += '<rect x="' + x + '" y="62" width="6" height="112" fill="#22262e"/><circle cx="' + (x + 3) + '" cy="66" r="3" fill="#fff6c2"/>'; return p; })() +
      station("Stapleton", 96, 72, 208) +
      '<g class="anim-train">' + sirCar(-24, 116, 344) + '</g>' +
      '<rect y="178" width="400" height="10" fill="#eab308"/><rect y="188" width="400" height="12" fill="#3a4048"/>' +
      (function () { let c = ""; for (let x = 30; x < 400; x += 80) c += '<rect x="' + x + '" y="200" width="8" height="34" fill="#30363e"/>'; return c; })() +
      '<rect y="234" width="400" height="26" fill="#1a1a1e"/>' +
      '<g class="cr1"><rect x="0" y="240" width="44" height="14" rx="4" fill="' + YEL + '"/><circle cx="10" cy="254" r="4" fill="#111"/><circle cx="34" cy="254" r="4" fill="#111"/><circle cx="44" cy="246" r="2" fill="#fff6c2"/></g>' +
      tag("THEODORE", 90, 228, 22, YEL, -4) + tag("718", 270, 228, 22, BLU, -5),
      sky("s1", "#070b1c", "#2a2048"));
  }

  /* 2. The Arthur Kill ship graveyard off Rossville: rusted hulls sitting in the marsh, a gull circling, the tide moving */
  function graveyard() {
    const hull = (x, y, w, c, tilt) => '<g transform="rotate(' + tilt + ' ' + (x + w / 2) + ' ' + y + ')"><path d="M' + x + ' ' + y + 'h' + w + 'l-12 26H' + (x + 10) + 'z" fill="' + c + '" stroke="#4a2414" stroke-width="2"/>' +
      '<rect x="' + (x + w * .55) + '" y="' + (y - 22) + '" width="' + (w * .25) + '" height="22" fill="' + c + '" stroke="#4a2414" stroke-width="2"/><rect x="' + (x + w * .58) + '" y="' + (y - 16) + '" width="8" height="6" fill="#2a1a10"/>' +
      '<path d="M' + (x + 14) + ' ' + (y + 6) + 'h' + (w - 30) + '" stroke="#c9772a" stroke-width="3" stroke-dasharray="6 8" opacity=".7"/></g>';
    return svg(
      '<style>@keyframes circ{from{transform:rotate(0)}to{transform:rotate(360deg)}}.gl{transform-origin:200px 70px;animation:circ 9s linear infinite}</style>' +
      '<rect width="400" height="260" fill="url(#g1)"/>' +
      '<rect y="120" width="400" height="140" fill="#5a6a6a"/>' +
      '<path d="M0 120q80-10 160 0t240-4v8H0z" fill="#6a7a4a"/>' +
      '<g fill="#8a8a7a"><rect x="300" y="96" width="6" height="24"/><rect x="320" y="90" width="4" height="30"/><path d="M296 96h40v4h-40z"/></g>' +
      hull(30, 150, 120, "#8a4a2a", -4) + hull(180, 140, 150, "#a85a2a", 3) + hull(110, 186, 110, "#6a3a24", -2) +
      '<g class="wv"><path d="M0 214q10-3 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#b8c8c0" stroke-width="1.5" fill="none" opacity=".6"/></g>' +
      (function () { let g = ""; for (let x = 0; x < 400; x += 9) g += '<path d="M' + x + ' 260l3-' + (22 + (x % 5) * 4) + ' 3 ' + (22 + (x % 5) * 4) + 'z" fill="#8a9a4a"/>'; return g; })() +
      '<g class="gl"><path d="M200 34q6-6 12 0q6-6 12 0" stroke="#f7f3ea" stroke-width="2.5" fill="none"/></g>' +
      '<text x="200" y="250" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#fff">SHIP GRAVEYARD · ARTHUR KILL</text>',
      sky("g1", "#8aa6b8", "#e8dcc4"));
  }

  /* 3. The Arthur Kill Lift Bridge: two tall steel towers, the rail span rising and dropping, a tug passing underneath */
  function liftbridge() {
    const tower = x => {
      let t = '<rect x="' + x + '" y="30" width="34" height="170" fill="none" stroke="#6a7a8a" stroke-width="5"/>';
      for (let y = 30; y < 190; y += 20) t += '<path d="M' + x + ' ' + y + 'l34 24M' + (x + 34) + ' ' + y + 'l-34 24" stroke="#6a7a8a" stroke-width="2"/>';
      return t + '<rect x="' + (x - 4) + '" y="22" width="42" height="12" fill="#5a6a7a"/><circle cx="' + (x + 17) + '" cy="20" r="3" fill="#ff4a3a" class="blk"/>';
    };
    return svg(
      '<style>@keyframes lift{0%,20%,100%{transform:translateY(0)}45%,75%{transform:translateY(-90px)}}.lft{animation:lift 9s ease-in-out infinite}</style>' +
      '<rect width="400" height="260" fill="url(#b1)"/>' + '<g class="dft">' + cloud(120, 30, .8) + '</g>' +
      '<rect y="190" width="400" height="70" fill="#3a5a6a"/>' +
      '<g class="wv"><path d="M0 220q10-3 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#bfe0ee" stroke-width="1.5" fill="none" opacity=".6"/></g>' +
      '<path d="M0 176h96v20H0z" fill="#6a7a5a"/><path d="M304 176h96v20h-96z" fill="#6a7a5a"/>' +
      '<rect x="0" y="168" width="96" height="8" fill="#4a525c"/><rect x="304" y="168" width="96" height="8" fill="#4a525c"/>' +
      tower(80) + tower(286) +
      '<g class="lft"><rect x="114" y="160" width="172" height="16" fill="#5a6a7a"/>' +
      (function () { let s = ""; for (let x = 114; x < 286; x += 21.5) s += '<path d="M' + x + ' 176l10.75-16 10.75 16" stroke="#7a8a9a" stroke-width="2" fill="none"/>'; return s; })() + '</g>' +
      '<g class="bt"><path d="M0 206h50l-6 12H6z" fill="' + ORG + '"/><rect x="14" y="192" width="20" height="14" fill="#f7f3ea"/><rect x="20" y="184" width="6" height="8" fill="#333"/></g>' +
      '<text x="200" y="250" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#fff">ARTHUR KILL LIFT BRIDGE</text>',
      sky("b1", "#6fb3e6", "#e6f2ff"));
  }

  /* 4. Great Kills Park: the beach and the harbor full of sailboats, dune grass, waves rolling in */
  function greatkills() {
    const sail = (x, y, c) => '<g transform="translate(' + x + ' ' + y + ')"><path d="M0 0h30l-4 8H4z" fill="#f7f3ea"/><path d="M14 0V-34L30 -2z" fill="' + c + '"/><path d="M12 0V-28L0 -2z" fill="#f7f3ea"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#k1)"/>' + '<g class="dft">' + cloud(80, 36, .9) + cloud(290, 26, .7) + '</g>' +
      '<rect y="110" width="400" height="80" fill="#3a8ac0"/>' +
      '<g class="bt">' + sail(0, 142, YEL) + '</g><g class="swm">' + sail(220, 128, BLU) + sail(300, 150, ORG) + '</g>' +
      (function () { let m = ""; for (let x = 20; x < 170; x += 16) m += '<rect x="' + x + '" y="112" width="2" height="18" fill="#ddd"/>'; return m; })() +
      '<rect x="14" y="128" width="160" height="4" fill="#9a8a6a"/>' +
      '<g class="wv"><path d="M0 190q10-6 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0v8H0z" fill="#f7f3ea" opacity=".8"/></g>' +
      '<rect y="196" width="400" height="64" fill="#e8d6a8"/>' +
      (function () { let g = ""; for (let x = 0; x < 400; x += 14) if (x < 120 || x > 300) g += '<path d="M' + x + ' 236q2-18 6-22M' + (x + 4) + ' 236q0-16-4-20" stroke="#8a9a4a" stroke-width="2" fill="none"/>'; return g; })() +
      '<text x="200" y="250" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#5a4a2a">GREAT KILLS PARK</text>',
      sky("k1", "#4f9ad8", "#d8ecff"));
  }

  /* 5. Beach St & Van Duzer St in Stapleton: green signs, the tag wall, the open door lit up */
  function corner() {
    let bricks = ""; for (let y = 70; y < 220; y += 12) for (let x = (y / 12) % 2 ? -12 : 0; x < 400; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="10" fill="#6a4a30"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#c1)"/>' +
      '<rect y="68" width="400" height="154" fill="#4a3422"/>' + bricks +
      /* the open door */
      '<rect x="240" y="126" width="50" height="96" fill="#2a1a10"/><rect x="244" y="130" width="42" height="92" fill="#fff2b0" class="blk"/><path d="M244 130l-24 8v84l24 0z" fill="#5a3a22" stroke="#2a1a10" stroke-width="2"/>' +
      tag("THEODORE UNIT", 14, 140, 34, YEL, -6) + tag("718", 30, 196, 40, BLU, -4) + tag("OPEN DOOR", 110, 206, 24, "#fff", -7) +
      '<g class="drp"><rect x="60" y="142" width="3" height="10" fill="' + YEL + '"/></g>' +
      '<rect x="352" y="22" width="6" height="208" fill="#4a4a4a"/>' +
      blade(292, 24, 106, "Beach St", 0) + blade(268, 50, 130, "Van Duzer St", 0) +
      '<rect y="222" width="400" height="38" fill="#2c2c30"/><rect y="222" width="400" height="6" fill="#9a9a9a"/>' +
      '<g class="cr2"><rect x="0" y="236" width="44" height="14" rx="4" fill="' + ORG + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="34" cy="250" r="4" fill="#111"/></g>',
      sky("c1", "#ffd34d", "#2a2012"));
  }

  window.SCENES = { station: station1, graveyard, liftbridge, greatkills, corner };
})();
