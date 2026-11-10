/* Zacari scenes (Regions tab: Los Angeles + SoCal; Bakersfield). CSS classes prefixed zc- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes zcglow{0%,100%{opacity:.4}50%{opacity:1}}.zc-glow{animation:zcglow 2.2s ease-in-out infinite}.zc-g2{animation-delay:-1.1s}' +
    '@keyframes zcaur{0%,100%{transform:translateX(0) skewX(0)}50%{transform:translateX(-14px) skewX(-6deg)}}.zc-aur{transform-box:fill-box;transform-origin:50% 100%;animation:zcaur 5s ease-in-out infinite}.zc-aur2{animation-delay:-2.5s}' +
    '@keyframes zchowl{0%,100%{transform:rotate(0)}50%{transform:rotate(-6deg)}}.zc-howl{transform-box:fill-box;transform-origin:20% 90%;animation:zchowl 2.4s ease-in-out infinite}' +
    '@keyframes zcbeat{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}.zc-beat{transform-box:fill-box;transform-origin:50% 50%;animation:zcbeat .6s ease-in-out infinite}' +
    '@keyframes zcnote{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-40px);opacity:0}}.zc-note{animation:zcnote 2.2s ease-out infinite}.zc-n2{animation-delay:.7s}.zc-n3{animation-delay:1.4s}' +
    '@keyframes zcripple{0%,100%{transform:scaleX(1);opacity:.8}50%{transform:scaleX(.8);opacity:.4}}.zc-rip{transform-box:fill-box;transform-origin:50% 50%;animation:zcripple 2.6s ease-in-out infinite}.zc-r2{animation-delay:-1.3s}' +
    '@keyframes zcsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.zc-sp{animation:zcsp 1.4s ease-out infinite}.zc-sp2{animation-delay:.5s}' +
    '@keyframes zcflk{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.35}55%{opacity:.9}}.zc-flk{animation:zcflk 2.8s infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "zc-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const palm = (x, y, h, c) => '<path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#2a201a" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 66, -66].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + (c || "#1f3a2a") + '" stroke-width="4" fill="none"/>').join("");
  const SJ = "#1f5aa6", GOLD = "#f2c14e", VIO = "#9b7bff", MINT = "#7fe0c4";
  const wolf = (x, y, s, fill) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q-2 -22 6 -36q4 -10 4 -22l-4 -16l8 6l6 -14l4 10l14 -10l-4 10l-8 8q2 12 6 22q10 20 10 42z" fill="' + fill + '"/><path d="M44 -2q20 2 26 -14q-10 8 -24 6z" fill="' + fill + '"/></g>';

  /* 1. Bakersfield Amtrak station on Truxtun Ave: the blue-and-silver San Joaquins train pulls in (anim-train), black station sign, palms and the Sierra foothills */
  function zcstation() {
    let win = ""; for (let x = 60; x < 320; x += 28) win += '<rect x="' + x + '" y="110" width="20" height="14" rx="2" fill="#cfe7f7" opacity=".9"/><rect x="' + x + '" y="132" width="20" height="14" rx="2" fill="#cfe7f7" opacity=".9"/>';
    const train = '<g class="anim-train"><rect x="40" y="98" width="300" height="68" rx="8" fill="#d6dadd" stroke="#6f777e" stroke-width="2"/>' + win +
      '<rect x="40" y="150" width="300" height="7" fill="' + SJ + '"/><rect x="40" y="157" width="300" height="3" fill="' + GOLD + '"/>' +
      '<circle cx="80" cy="170" r="8" fill="#111"/><circle cx="110" cy="170" r="8" fill="#111"/><circle cx="270" cy="170" r="8" fill="#111"/><circle cx="300" cy="170" r="8" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#zc1)"/>' +
      '<path d="M0 110l70 -30l60 18l80 -34l70 26l60 -20l60 24v40h-400z" fill="#b48a6a" opacity=".7"/>' +
      '<g>' + palm(30, 110, 60) + palm(372, 110, 66) + '</g>' +
      '<rect x="20" y="36" width="360" height="10" fill="#e6e2da"/><path d="M20 36l180 -16l180 16z" fill="#c9c2b4"/>' + [40, 200, 360].map(x => '<rect x="' + x + '" y="46" width="6" height="52" fill="#8d959c"/>').join("") +
      '<rect x="120" y="54" width="160" height="28" rx="3" fill="#111"/><text x="200" y="73" text-anchor="middle" ' + font + ' font-size="14" fill="#fff" letter-spacing="2">BAKERSFIELD</text>' +
      train +
      '<rect x="0" y="178" width="400" height="10" fill="#eab308"/><rect x="0" y="188" width="400" height="72" fill="#a3a5a9"/>' +
      '<rect x="0" y="176" width="400" height="3" fill="#5a6168"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 42 + 6) + '" y="214" width="30" height="4" fill="#8a8c90"/>').join(""),
      sky("zc1", "#f0a868", "#ffe0b0"));
  }

  /* 2. Alaska: the national park where he worked three summers after high school; mountains, green and violet aurora, a lone wolf howling */
  function zcalaska() {
    return svg(
      '<rect width="400" height="260" fill="url(#zc2)"/>' + stars(30) +
      '<g class="zc-aur"><path d="M-10 90q60 -70 120 -20t130 -30t170 10v30q-80 -30 -170 0t-130 30t-120 10z" fill="' + MINT + '" opacity=".35"/></g>' +
      '<g class="zc-aur zc-aur2"><path d="M40 70q70 -50 140 -10t140 -20v24q-70 10 -140 20t-140 -4z" fill="' + VIO + '" opacity=".3"/></g>' +
      '<path d="M0 190l90 -100l40 40l70 -90l80 90l40 -30l80 90z" fill="#3b4a66"/>' +
      '<path d="M200 40l-24 34l12 -4l12 10l12 -12l12 6z" fill="#f3f6fa"/><path d="M90 90l-14 18l8 -2l6 6l8 -8z" fill="#f3f6fa"/>' +
      '<path d="M0 200q100 -30 200 -10t200 -10v80h-400z" fill="#1c2a3a"/>' +
      '<g fill="#14202c">' + [20, 50, 330, 360, 384].map((x, i) => '<path d="M' + x + ' 214l12 -' + (34 + i * 4) + 'l12 ' + (34 + i * 4) + 'z"/>').join("") + '</g>' +
            '<g class="zc-howl">' + wolf(172, 200, 1.1, "#0d141c") + '</g>',
      sky("zc2", "#050a1a", "#1a2a4a"));
  }

  /* 3. The rehearsal room: his mom was a rock drummer and taught him guitar; a drum kit and an acoustic guitar under warm light, notes floating up */
  function zcstudio() {
    return svg(
      '<rect width="400" height="260" fill="url(#zc3)"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#4a2e1e"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 50) + '" y="190" width="2" height="70" fill="#3a2214"/>').join("") +
      '<path d="M120 0l-60 190h280l-60 -190z" fill="#ffd27a" opacity=".12"/>' +
      [30, 80, 330].map(x => '<rect x="' + x + '" y="40" width="34" height="34" fill="#5a3a5a" stroke="#3a2a3a" stroke-width="2"/>').join("") +
      /* drum kit */
      '<g class="zc-beat"><ellipse cx="200" cy="168" rx="40" ry="34" fill="#c84a3a" stroke="#7a2a1a" stroke-width="3"/><ellipse cx="200" cy="168" rx="28" ry="24" fill="#f3e6d0"/><text x="200" y="174" text-anchor="middle" ' + font + ' font-size="14" fill="#7a2a1a">ZACARI</text></g>' +
      '<ellipse cx="148" cy="130" rx="20" ry="7" fill="#c84a3a"/><rect x="128" y="130" width="40" height="18" fill="#c84a3a"/><ellipse cx="148" cy="130" rx="18" ry="5" fill="#f3e6d0"/>' +
      '<ellipse cx="252" cy="130" rx="20" ry="7" fill="#c84a3a"/><rect x="232" y="130" width="40" height="18" fill="#c84a3a"/><ellipse cx="252" cy="130" rx="18" ry="5" fill="#f3e6d0"/>' +
      '<path d="M116 200v-110M284 200v-118" stroke="#9a9ca0" stroke-width="3"/><ellipse cx="116" cy="90" rx="26" ry="5" fill="' + GOLD + '"/><ellipse cx="284" cy="82" rx="26" ry="5" fill="' + GOLD + '"/>' +
      /* guitar on a stand */
      '<g transform="translate(330 120) rotate(-14)"><path d="M0 0q-22 0 -22 22q0 14 10 18q-12 6 -12 22q0 24 26 24t26 -24q0 -16 -12 -22q10 -4 10 -18q0 -22 -22 -22h-4z" fill="#d9952f" stroke="#7a4a1a" stroke-width="2" transform="translate(2 0)"/><circle cx="2" cy="50" r="8" fill="#3a2214"/><rect x="-2" y="-70" width="8" height="74" fill="#5a3a1a"/><rect x="-5" y="-84" width="14" height="16" rx="2" fill="#3a2214"/></g>' +
      '<g class="zc-note"><text x="170" y="96" font-size="22" fill="' + GOLD + '">&#9834;</text></g><g class="zc-note zc-n2"><text x="226" y="90" font-size="18" fill="' + MINT + '">&#9835;</text></g><g class="zc-note zc-n3"><text x="300" y="70" font-size="20" fill="' + VIO + '">&#9834;</text></g>',
      sky("zc3", "#2a1a2a", "#4a2a2a"));
  }

  /* 4. Nocturnal: three stars and a golden sun going down, the mother moon reflecting off the water, a dragon cloud following */
  function zcnight() {
    return svg(
      '<rect width="400" height="260" fill="url(#zc4)"/>' + stars(26) +
      '<g fill="' + GOLD + '">' + [[96, 40], [120, 30], [144, 40]].map(p => '<path d="M' + p[0] + ' ' + (p[1] - 8) + 'l2.4 5.6l6 .6l-4.6 4l1.4 6l-5.2 -3.2l-5.2 3.2l1.4 -6l-4.6 -4l6 -.6z" class="zc-glow"/>').join("") + '</g>' +
      '<circle cx="290" cy="70" r="26" fill="#f3eee0"/><circle cx="282" cy="64" r="5" fill="#ddd6c4"/><circle cx="298" cy="78" r="4" fill="#ddd6c4"/>' +
      '<path d="M40 110q30 -26 60 -8q20 -16 40 -2q20 -4 30 10q-10 8 -26 4q-14 10 -34 2q-24 10 -44 0q-18 4 -26 -6z" fill="#3a3a6a" opacity=".8"/><circle cx="160" cy="108" r="3" fill="' + GOLD + '"/>' +
      '<path d="M0 150h400v110h-400z" fill="#0d1a3a"/>' +
      '<rect x="0" y="150" width="400" height="20" fill="#e88a4a" opacity=".12"/><path d="M70 150a40 40 0 0 1 80 0z" fill="#f2a24e"/>' +
      '<g class="zc-rip"><rect x="270" y="168" width="40" height="3" rx="1.5" fill="#f3eee0" opacity=".8"/></g><g class="zc-rip zc-r2"><rect x="262" y="182" width="56" height="3" rx="1.5" fill="#f3eee0" opacity=".6"/></g><g class="zc-rip"><rect x="276" y="198" width="28" height="3" rx="1.5" fill="#f3eee0" opacity=".5"/></g>' +
      '<g class="zc-rip zc-r2"><rect x="92" y="164" width="36" height="3" rx="1.5" fill="#f2a24e" opacity=".7"/></g>' +
      '<text x="200" y="244" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="#f7f3ea" letter-spacing="6" opacity=".85">NOCTURNAL</text>',
      sky("zc4", "#0a0f2a", "#3a2a5a"));
  }

  /* 5. Buck Owens Blvd and Sillect Ave: green street signs, a wall with ZACARI tagged, the blue Bakersfield Sign arch behind */
  function zccorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#zc5)"/>' + stars(10) +
      /* the Bakersfield Sign arch over the road */
      '<rect x="168" y="60" width="10" height="110" fill="#c9c2b4"/><rect x="372" y="60" width="10" height="110" fill="#c9c2b4"/>' +
      '<path d="M162 72q113 -56 226 0v20q-113 -50 -226 0z" fill="' + SJ + '" stroke="#f7f3ea" stroke-width="2"/>' +
      '<text x="275" y="64" text-anchor="middle" ' + font + ' font-size="13" fill="#fff6c2" letter-spacing="2">BAKERSFIELD</text><g class="zc-flk"><path d="M170 78q105 -48 210 0" stroke="#fff6c2" stroke-width="1.5" fill="none" opacity=".8"/></g>' +
      palm(150, 170, 64) +
      /* wall */
      '<rect x="0" y="118" width="220" height="112" fill="#d8c4a0"/><rect x="0" y="118" width="220" height="8" fill="#b8a07a"/>' +
      tag("ZACARI", 18, 190, 40, VIO, -6) + tag("LONE WOLF", 54, 218, 16, GOLD, -4) +
      '<g class="zc-sp"><circle cx="186" cy="176" r="3" fill="' + VIO + '" opacity=".7"/></g><g class="zc-sp zc-sp2"><circle cx="192" cy="170" r="2" fill="' + VIO + '" opacity=".6"/></g>' +
      '<rect x="0" y="230" width="400" height="30" fill="#5a5c60"/><rect x="0" y="226" width="400" height="6" fill="#bdbab2"/>' +
      '<rect x="282" y="110" width="6" height="118" fill="#2f2f2f"/>' + sign(232, 112, 106, "Buck Owens Blvd", 11) + sign(244, 138, 82, "Sillect Ave", 12),
      sky("zc5", "#1a1440", "#e0905a"));
  }

  window.SCENES = { zcstation: zcstation, zcalaska: zcalaska, zcstudio: zcstudio, zcnight: zcnight, zccorner: zccorner };
})();
