/* dramatics scenes (Regions tab: Detroit; the group started at Pershing High on the northeast side in 1964, cut "Whatcha See Is Whatcha Get" at United Sound on Second Ave). CSS classes prefixed dr- (the page's own anim-train is kept, used on the streetcar). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes drglow{0%,100%{opacity:.45}50%{opacity:1}}.dr-glow{animation:drglow 2.4s ease-in-out infinite}.dr-g2{animation-delay:-1.2s}' +
    '@keyframes drrain{0%{transform:translate(0,-40px);opacity:0}10%{opacity:.8}100%{transform:translate(-14px,240px);opacity:.8}}.dr-rn{animation:drrain 1.1s linear infinite}.dr-r2{animation-delay:-.37s}.dr-r3{animation-delay:-.74s}' +
    '@keyframes drnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(22px,-70px);opacity:0}}.dr-nt{animation:drnote 3.4s ease-out infinite}.dr-nt2{animation-delay:-1.1s}.dr-nt3{animation-delay:-2.3s}' +
    '@keyframes drsway{0%,100%{transform:translateX(0)}50%{transform:translateX(4px)}}.dr-sw{animation:drsway 1.6s ease-in-out infinite}.dr-sw2{animation-delay:-.8s}' +
    '@keyframes drneon{0%,100%{opacity:1}46%{opacity:1}48%{opacity:.25}50%{opacity:1}}.dr-neon{animation:drneon 3s steps(1) infinite}' +
    '@keyframes drvu{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.dr-vu{transform-box:fill-box;transform-origin:50% 100%;animation:drvu .8s ease-in-out infinite}.dr-vu2{animation-delay:-.3s}.dr-vu3{animation-delay:-.55s}' +
    '@keyframes drspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.dr-spin{transform-box:fill-box;transform-origin:50% 50%;animation:drspin 1.8s linear infinite}' +
    '@keyframes drbeam{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.dr-bm{transform-box:fill-box;transform-origin:50% 0%;animation:drbeam 4s ease-in-out infinite}.dr-bm2{animation-delay:-2s}' +
    '@keyframes drspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dr-sp{animation:drspray 1.4s ease-out infinite}.dr-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "dr-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const rain = (n, col) => Array.from({ length: n }, (_, i) => '<path class="dr-rn' + (i % 3 === 1 ? " dr-r2" : i % 3 === 2 ? " dr-r3" : "") + '" d="M' + ((i * 37) % 420) + ' ' + ((i * 23) % 60) + 'l-3 12" stroke="' + col + '" stroke-width="1.4" opacity=".7"/>').join("");
  const note = (x, y, c, cls) => '<g class="dr-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const singer = (x, y, c, cls, arm) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (y - 34) + '" r="7" fill="#0a0a12"/><path d="M' + (x - 9) + ' ' + (y - 26) + 'h18l3 28h-24z" fill="' + c + '"/><rect x="' + (x - 8) + '" y="' + (y + 2) + '" width="6" height="18" fill="#0a0a12"/><rect x="' + (x + 2) + '" y="' + (y + 2) + '" width="6" height="18" fill="#0a0a12"/>' +
    (arm ? '<path d="M' + (x + 8) + ' ' + (y - 22) + 'l14 -8" stroke="' + c + '" stroke-width="5" stroke-linecap="round"/>' : '') + '</g>';
  const RAIN = "#7fd3ff", GOLD = "#ffcc4d", ROSE = "#ff6f91", CREAM = "#f4efe2", QRED = "#e2231a";

  /* 1. The QLine streetcar sliding up Woodward into the Amsterdam stop by TechTown, a few blocks from United Sound on Second Ave; a soft rain coming down */
  function drstation() {
    let wins = "";
    for (let x = 34; x < 290; x += 34) wins += '<rect x="' + x + '" y="136" width="24" height="24" rx="3" fill="#cfe6f5" opacity=".9"/>';
    let bldg = "";
    [[0, 64, 70, "#6e5a4a"], [72, 84, 60, "#8a6a52"], [136, 50, 74, "#5a4a5a"], [214, 78, 56, "#7a5a44"], [274, 60, 54, "#5e5248"], [332, 74, 68, "#7a6250"]].forEach(([x, y, w, c]) => {
      bldg += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (184 - y) + '" fill="' + c + '"/>';
      for (let yy = y + 10; yy < 120; yy += 16) for (let xx = x + 6; xx < x + w - 8; xx += 14) bldg += '<rect class="' + ((xx + yy) % 3 ? "" : "dr-glow") + '" x="' + xx + '" y="' + yy + '" width="7" height="9" fill="#f3d38a" opacity=".6"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#dr1)"/>' + bldg +
      '<rect x="40" y="56" width="218" height="38" rx="3" fill="#111"/><rect x="40" y="56" width="218" height="4" fill="' + QRED + '"/>' +
      '<circle cx="64" cy="77" r="11" fill="' + QRED + '"/><text x="64" y="82" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">Q</text>' +
      '<text x="164" y="84" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">Amsterdam</text>' +
      '<rect x="60" y="94" width="5" height="34" fill="#666"/><rect x="233" y="94" width="5" height="34" fill="#666"/>' +
      '<g class="anim-train"><rect x="16" y="124" width="292" height="60" rx="16" fill="' + CREAM + '" stroke="#8a95a3" stroke-width="2"/>' +
      '<rect x="16" y="164" width="292" height="12" fill="#3a3f48"/><rect x="16" y="161" width="292" height="3" fill="' + QRED + '"/>' + wins +
      '<rect x="286" y="136" width="16" height="26" rx="4" fill="#9fc6e8"/><circle cx="298" cy="174" r="4" fill="#fff6c2"/><path d="M150 124l-14 -18M150 124l14 -18" stroke="#555" stroke-width="2"/></g>' +
      '<path d="M0 104h400" stroke="#333" stroke-width="1.5"/>' +
      '<rect x="0" y="184" width="400" height="76" fill="#34343c"/><path d="M0 196h400M0 206h400" stroke="#777" stroke-width="2"/>' +
      '<ellipse cx="90" cy="230" rx="40" ry="5" fill="' + RAIN + '" opacity=".18"/><ellipse cx="300" cy="238" rx="56" ry="6" fill="' + RAIN + '" opacity=".18"/>' + rain(34, RAIN) +
      '<text x="390" y="252" text-anchor="end" ' + font + ' font-size="10" fill="' + CREAM + '" opacity=".9">WOODWARD AVE · MIDTOWN</text>',
      sky("dr1", "#0f1a33", "#4a5a7a"));
  }

  /* 2. United Sound Systems on Second Ave, the 1916 brick house turned studio where they cut "Whatcha See Is Whatcha Get": hip roof, arched double dormer, blue wood trim, gray bay windows, the windowless block addition, VU meters dancing in the control room */
  function drstudio() {
    const bricks = Array.from({ length: 12 }, (_, i) => '<path d="M110 ' + (110 + i * 8) + 'h170" stroke="#6e2f20" stroke-width=".8"/>').join("");
    const vu = (x, cls) => '<rect class="dr-vu ' + cls + '" x="' + x + '" y="148" width="5" height="14" fill="' + GOLD + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dr2)"/>' + stars(10) +
      '<rect x="280" y="120" width="104" height="92" fill="#b9bcb8"/><path d="M280 120h104" stroke="#9a9d98" stroke-width="3"/>' +
      '<path d="M98 104l97 -46l97 46z" fill="#3a3a40"/>' +
      '<rect x="110" y="104" width="170" height="108" fill="#8e4a32"/>' + bricks +
      '<rect x="110" y="138" width="170" height="3" fill="#d8d0bc"/>' +
      '<rect x="160" y="64" width="70" height="34" fill="#2f5d8a"/><path d="M160 72q17 -22 35 0q17 -22 35 0" fill="#2f5d8a"/>' +
      '<path d="M166 96v-18q12 -14 24 0v18zM200 96v-18q12 -14 24 0v18z" fill="#ffd98a" class="dr-glow"/>' +
      '<rect x="124" y="112" width="34" height="22" fill="#6a6e72" stroke="#2f5d8a" stroke-width="3"/><rect class="dr-glow dr-g2" x="127" y="115" width="28" height="16" fill="#ffd98a" opacity=".5"/>' +
      '<rect x="232" y="112" width="34" height="22" fill="#6a6e72" stroke="#2f5d8a" stroke-width="3"/>' +
      '<rect x="124" y="144" width="56" height="26" fill="#1c2430" stroke="#2f5d8a" stroke-width="3"/>' + vu(130, "") + vu(138, "dr-vu2") + vu(146, "dr-vu3") + vu(154, "") + vu(162, "dr-vu2") + vu(170, "dr-vu3") +
      '<rect x="206" y="146" width="28" height="66" fill="#2f5d8a"/><rect x="210" y="150" width="20" height="58" fill="#3a2a20"/><circle cx="226" cy="180" r="1.8" fill="' + GOLD + '"/>' +
      '<rect x="190" y="212" width="60" height="6" fill="#bdb6a6"/><rect x="184" y="218" width="72" height="6" fill="#aaa294"/>' +
      '<rect x="290" y="136" width="86" height="22" rx="2" fill="#1a1a22"/><text x="333" y="151" text-anchor="middle" ' + font + ' font-size="8.5" fill="' + GOLD + '">UNITED SOUND</text>' +
      '<rect x="0" y="224" width="400" height="36" fill="#3e4a34"/><rect x="0" y="242" width="400" height="18" fill="#4a4a50"/>' +
      note(150, 100, GOLD) + note(250, 96, RAIN, "dr-nt2") + note(320, 112, ROSE, "dr-nt3") +
      '<text x="12" y="20" ' + font + ' font-size="10" fill="' + CREAM + '" opacity=".9">SECOND AVE · WHATCHA SEE IS WHATCHA GET</text>',
      sky("dr2", "#141a3a", "#7a5a7a"));
  }

  /* 3. Mr. Kelly's on the near east side, the club where the young group got its first break in 1964: brick front, flickering neon, a rainy night, the line out the door under umbrellas */
  function drkelly() {
    const umb = (x, c, cls) => '<g class="' + cls + '"><path d="M' + (x - 16) + ' 182q16 -18 32 0z" fill="' + c + '"/><rect x="' + (x - 1) + '" y="182" width="2" height="12" fill="#222"/><rect x="' + (x - 8) + '" y="194" width="16" height="30" rx="5" fill="#0a0a12"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dr3)"/>' +
      '<rect x="0" y="70" width="80" height="150" fill="#3a2a2a"/><rect x="320" y="60" width="80" height="160" fill="#2a2a3a"/>' +
      '<rect x="80" y="50" width="240" height="170" fill="#7a3a2c"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M80 ' + (56 + i * 8) + 'h240" stroke="#5e2a1e" stroke-width=".8"/>').join("") +
      '<g class="dr-neon"><rect x="110" y="66" width="180" height="40" rx="8" fill="none" stroke="' + ROSE + '" stroke-width="4"/>' +
      '<text x="200" y="94" text-anchor="middle" font-family="Brush Script MT, cursive" font-style="italic" font-size="26" fill="' + ROSE + '">Mr. Kelly' + "'" + 's</text></g>' +
      '<rect x="110" y="66" width="180" height="40" rx="8" fill="' + ROSE + '" opacity=".08"/>' +
      '<rect x="100" y="118" width="60" height="44" fill="#1a1a24" stroke="#c9b48a" stroke-width="3"/><rect class="dr-glow" x="104" y="122" width="52" height="36" fill="#ffd98a" opacity=".4"/>' +
      '<rect x="240" y="118" width="60" height="44" fill="#1a1a24" stroke="#c9b48a" stroke-width="3"/><rect class="dr-glow dr-g2" x="244" y="122" width="52" height="36" fill="#ffd98a" opacity=".4"/>' +
      '<rect x="176" y="128" width="48" height="92" fill="#2a1a14"/><rect class="dr-glow" x="180" y="132" width="40" height="84" fill="' + GOLD + '" opacity=".25"/>' +
      '<path d="M166 120h68l-6 -10h-56z" fill="#1a3a5a"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#2a2a32"/><path d="M0 222h400" stroke="#888" stroke-width="2"/>' +
      '<ellipse cx="200" cy="240" rx="90" ry="6" fill="' + GOLD + '" opacity=".14"/><ellipse cx="60" cy="246" rx="40" ry="4" fill="' + ROSE + '" opacity=".14"/>' +
      umb(60, "#2f5d8a", "dr-sw") + umb(100, ROSE, "dr-sw dr-sw2") + umb(140, GOLD, "dr-sw") + umb(270, RAIN, "dr-sw dr-sw2") + umb(312, "#7a4ab0", "dr-sw") +
      rain(44, RAIN) +
      '<text x="200" y="36" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '" opacity=".9">NEAR EAST SIDE · THE FIRST BREAK</text>',
      sky("dr3", "#0a0f22", "#2a3550"));
  }

  /* 4. The 20 Grand at 14th St and W Warren, Detroit's big showplace, where the group played the record hops: the Driftwood Lounge stage, five in matching suits, sweeping lights, a 45 spinning in the DJ booth */
  function drgrand() {
    const crowd = Array.from({ length: 22 }, (_, i) => '<g class="dr-sw' + (i % 2 ? " dr-sw2" : "") + '"><circle cx="' + (8 + i * 18.5) + '" cy="234" r="7" fill="#07070c"/><rect x="' + (i * 18.5 + 1) + '" y="240" width="15" height="24" rx="5" fill="#07070c"/></g>').join("");
    const wood = Array.from({ length: 10 }, (_, i) => '<rect x="' + (30 + i * 34) + '" y="40" width="30" height="132" fill="' + (i % 2 ? "#5a3a24" : "#6a4628") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dr4)"/>' + wood +
      '<rect x="30" y="22" width="340" height="22" fill="#1a1012"/><text x="200" y="38" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '" class="dr-glow">THE 20 GRAND · DRIFTWOOD LOUNGE</text>' +
      '<path class="dr-bm" d="M110 44l-50 128h100z" fill="' + GOLD + '" opacity=".16"/><path class="dr-bm dr-bm2" d="M290 44l-50 128h100z" fill="' + RAIN + '" opacity=".16"/>' +
      '<rect x="20" y="172" width="360" height="18" fill="#2a1a10"/><rect x="20" y="170" width="360" height="4" fill="' + GOLD + '"/>' +
      singer(120, 160, "#2a6a8a", "dr-sw") + singer(160, 160, "#2a6a8a", "dr-sw dr-sw2", 1) + singer(200, 160, "#2a6a8a", "dr-sw", 1) + singer(240, 160, "#2a6a8a", "dr-sw dr-sw2", 1) + singer(280, 160, "#2a6a8a", "dr-sw") +
      [100, 300].map(x => '<rect x="' + (x - 1) + '" y="132" width="2" height="38" fill="#bbb"/><circle cx="' + x + '" cy="130" r="3" fill="#bbb"/>').join("") +
      '<rect x="326" y="120" width="40" height="50" fill="#1a1012" stroke="' + GOLD + '" stroke-width="2"/><g class="dr-spin"><circle cx="346" cy="138" r="11" fill="#111"/><circle cx="346" cy="138" r="4" fill="' + ROSE + '"/></g><rect x="332" y="154" width="28" height="10" fill="#2a2a34"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#120c14"/>' + crowd,
      sky("dr4", "#0a0612", "#2a1420"));
  }

  /* 5. Ryan Rd and E Nevada St on the northeast side, up the road from Pershing High where the group started in 1964, storm clouds rolling in over the downtown skyline far off, DRAMATICS tagged on the wall */
  function drcorner() {
    const sky2 = Array.from({ length: 9 }, (_, i) => '<rect x="' + (120 + i * 18) + '" y="' + (96 - (i % 4) * 12 - (i === 4 ? 18 : 0)) + '" width="14" height="' + (40 + (i % 4) * 12 + (i === 4 ? 18 : 0)) + '" fill="#2a3048"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dr5)"/>' +
      '<g opacity=".9"><ellipse cx="90" cy="40" rx="70" ry="22" fill="#3a4258"/><ellipse cx="150" cy="30" rx="60" ry="22" fill="#444c62"/><ellipse cx="290" cy="38" rx="80" ry="24" fill="#3a4258"/></g>' + sky2 +
      Array.from({ length: 12 }, (_, i) => '<circle class="' + (i % 3 ? "" : "dr-glow") + '" cx="' + (124 + (i * 13) % 160) + '" cy="' + (104 + (i * 7) % 24) + '" r="1.2" fill="#ffd98a"/>').join("") +
      '<rect x="0" y="128" width="400" height="96" fill="#3a3a5a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (136 + i * 8) + 'h400" stroke="#2e2e4a" stroke-width="1"/>').join("") +
      tag("DRAMATICS", 12, 190, 50, RAIN, -6) + tag("WHATCHA SEE", 20, 216, 16, GOLD, -3) + tag("IN THE RAIN", 150, 216, 16, ROSE, -3) + tag("REAL THING", 250, 194, 15, CREAM, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#4a4852"/><rect x="0" y="222" width="400" height="4" fill="#cfcbd6"/>' +
      '<ellipse cx="120" cy="244" rx="60" ry="5" fill="' + RAIN + '" opacity=".2"/>' + rain(40, RAIN) +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(286, 98, 112, "Ryan Rd") + sign(286, 124, 112, "E Nevada St") +
      '<g class="dr-sp"><circle cx="196" cy="156" r="3" fill="' + RAIN + '" opacity=".7"/></g><g class="dr-sp dr-sp2"><circle cx="202" cy="150" r="2" fill="' + RAIN + '" opacity=".6"/></g>',
      sky("dr5", "#151a30", "#5a5a78"));
  }

  window.SCENES = { drstation: drstation, drstudio: drstudio, drkelly: drkelly, drgrand: drgrand, drcorner: drcorner };
})();
