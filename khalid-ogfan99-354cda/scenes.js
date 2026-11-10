/* khalid scenes (Regions tab: Houston + Texas; El Paso, Texas - Americas High School class of 2016). CSS classes and ids prefixed kh- (the page's own anim-train is kept).
   1 The El Paso Streetcar at the San Jacinto stop downtown: a restored PCC car sliding in, the black SAN JACINTO sign, the plaza's palms and alligator sculpture, the Franklin Mountains behind.
   2 Americas High School on the east side, where Khalid finished senior year (class of 2016, voted "Most Likely to Go Platinum"): tan stucco campus, red-white-blue Trailblazers banner, caps flying.
   3 Scenic Drive at night: the stone overlook wall, the lights of El Paso and Juarez twinkling below, a car's headlights sliding along the road.
   4 UTEP, where he sold out two homecoming shows at the Don Haskins Center in September 2018: the Bhutanese-style walls with the red band, the arena glowing, spotlights sweeping.
   5 Pellicano Dr and Joe Battle Blvd by his school: green signs, KHALID tagged on the block wall, the Franklin Mountains and the lit Star on the Mountain behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes khtw{0%,100%{opacity:1}50%{opacity:.25}}.kh-tw{animation:khtw 1.6s ease-in-out infinite}.kh-tw2{animation-delay:-.5s}.kh-tw3{animation-delay:-1.1s}' +
    '@keyframes khcap{0%{transform:translateY(40px) rotate(0);opacity:0}15%{opacity:1}100%{transform:translateY(-80px) rotate(320deg);opacity:0}}.kh-cap{transform-box:fill-box;transform-origin:50% 50%;animation:khcap 3.2s ease-out infinite}.kh-cap2{animation-delay:-1s}.kh-cap3{animation-delay:-2.1s}' +
    '@keyframes khcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.kh-car{animation:khcar 7s linear infinite}' +
    '@keyframes khbeam{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.kh-beam{transform-box:fill-box;transform-origin:50% 100%;animation:khbeam 4s ease-in-out infinite}.kh-beam2{animation-delay:-2s}' +
    '@keyframes khflag{0%,100%{transform:skewY(0)}50%{transform:skewY(5deg)}}.kh-flag{transform-box:fill-box;transform-origin:0 50%;animation:khflag 1.4s ease-in-out infinite}' +
    '@keyframes khglow{0%,100%{opacity:.55}50%{opacity:1}}.kh-glow{animation:khglow 2s ease-in-out infinite}' +
    '@keyframes khsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kh-sp{animation:khsp 1.4s ease-out infinite}.kh-sp2{animation-delay:.45s}' +
    '@keyframes khpalm{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.kh-palm{transform-box:fill-box;transform-origin:50% 100%;animation:khpalm 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const SUN = "#ffb347", PINK = "#ff5e7e", BLUE = "#5ec8f2", CREAM = "#f3e6c8", ADOBE = "#c99a6b";
  /* the Franklin Mountains: a long jagged ridge */
  const franklins = (y, c) => '<path d="M0 ' + y + 'l30 -10l26 -26l18 10l30 -38l22 16l20 -8l34 -30l24 20l18 -6l26 18l30 -14l28 16l24 -6l30 14l40 -4v' + (60) + 'H0z" fill="' + c + '"/>';
  const palm = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q-3 -30 2 -60" stroke="#6b4a2a" stroke-width="4" fill="none"/><g class="kh-palm"><path d="M2 -60q-20 -8 -30 4M2 -60q-16 -18 -32 -14M2 -60q4 -20 22 -20M2 -60q20 -6 30 8M2 -60q14 2 20 18M2 -60q-12 4 -18 20" stroke="#2f7a3a" stroke-width="4" fill="none" stroke-linecap="round"/></g></g>';

  /* 1. El Paso Streetcar, San Jacinto stop */
  function khstreetcar() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (52 + i * 34) + '" y="146" width="24" height="18" rx="3" fill="#2a2f3a"/>').join("");
    const car = '<g class="anim-train"><path d="M30 186v-38q0 -14 18 -16h244q18 2 18 16v38z" fill="' + CREAM + '" stroke="#6a5a40" stroke-width="2"/>' + win +
      '<rect x="30" y="170" width="280" height="7" fill="#c8102e"/><rect x="30" y="178" width="280" height="3" fill="#1d4e89"/>' +
      '<rect x="292" y="146" width="14" height="22" rx="3" fill="#2a2f3a"/><circle cx="302" cy="182" r="4" fill="#fff6c2"/><path d="M170 132l-14 -20h40" stroke="#333" stroke-width="2" fill="none"/>' +
      '<rect x="40" y="186" width="40" height="8" rx="3" fill="#333"/><rect x="260" y="186" width="40" height="8" rx="3" fill="#333"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kh1)"/>' +
      '<circle cx="62" cy="48" r="20" fill="#ffe2a0" opacity=".9"/>' + franklins(110, "#7a5a6a") +
      '<path d="M0 108h400" stroke="#333" stroke-width="1.5"/>' +
      '<rect x="0" y="118" width="400" height="80" fill="#d9c8a8"/>' +
      palm(30, 196, 1) + palm(372, 196, 1.1) +
      /* alligator sculpture in the plaza */
      '<g transform="translate(330 196)"><ellipse cx="0" cy="0" rx="30" ry="6" fill="#4f8a3a"/><path d="M-30 0l-14 -4l14 -2zM24 -4q8 -10 18 -6" stroke="#3a6a2a" stroke-width="4" fill="none"/></g>' +
      car +
      '<rect x="0" y="194" width="400" height="66" fill="#6e6a64"/><path d="M0 200h400M0 214h400" stroke="#b9b1a4" stroke-width="3"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#cfc4b2"/>' +
      '<rect x="112" y="18" width="176" height="32" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/><text x="200" y="40" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">SAN JACINTO</text>' +
      '<rect x="150" y="54" width="100" height="16" rx="8" fill="#c8102e"/><text x="200" y="66" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">STREETCAR</text>',
      sky("kh1", "#2b5ea8", "#f0b27a"));
  }

  /* 2. Americas High School */
  function khschool() {
    const wins = Array.from({ length: 8 }, (_, i) => '<rect x="' + (44 + i * 40) + '" y="128" width="22" height="20" fill="#3a4a5a"/>').join("");
    const caps = [[110, 90, ""], [200, 70, " kh-cap2"], [290, 96, " kh-cap3"]].map(c => '<g class="kh-cap' + c[2] + '"><path d="M' + (c[0] - 12) + ' ' + c[1] + 'l12 -6l12 6l-12 6z" fill="#1d3f8a"/><rect x="' + (c[0] - 6) + '" y="' + (c[1] + 2) + '" width="12" height="5" fill="#1d3f8a"/><path d="M' + (c[0] + 10) + ' ' + c[1] + 'v8" stroke="#ffd23f" stroke-width="1.5"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kh2)"/>' + franklins(84, "#9a7a7a") +
      '<rect x="20" y="104" width="360" height="80" fill="#d8b88e"/><rect x="20" y="104" width="360" height="8" fill="#b8946a"/>' + wins +
      '<rect x="160" y="90" width="80" height="94" fill="#c9a47a"/><rect x="176" y="150" width="48" height="34" fill="#3a4a5a"/>' +
      '<rect x="34" y="160" width="110" height="20" fill="#1d3f8a"/><text x="89" y="174" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">TRAILBLAZERS</text>' +
      '<rect x="256" y="160" width="110" height="20" fill="#c8102e"/><text x="311" y="174" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">CLASS OF 2016</text>' +
      '<rect x="110" y="94" width="180" height="20" rx="2" fill="#fff"/><text x="200" y="108" text-anchor="middle" ' + font + ' font-size="11" fill="#1d3f8a">AMERICAS HIGH SCHOOL</text>' +
      '<rect x="370" y="40" width="3" height="144" fill="#888"/><g class="kh-flag"><rect x="373" y="42" width="24" height="14" fill="#c8102e"/><rect x="373" y="47" width="24" height="4" fill="#fff"/></g>' +
      '<rect x="0" y="184" width="400" height="76" fill="#7fa65a"/><path d="M0 214h400" stroke="#fff" stroke-width="2" opacity=".7"/>' + caps +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">MOST LIKELY TO GO PLATINUM</text>',
      sky("kh2", "#4a86d0", "#ffd9a0"));
  }

  /* 3. Scenic Drive overlook at night */
  function khscenic() {
    let lights = "";
    for (let i = 0; i < 90; i++) {
      const r1 = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1, r2 = Math.abs(Math.sin(i * 78.233) * 12345.678) % 1;
      const x = Math.round(r1 * 400), y = Math.round(152 + r2 * 66);
      lights += '<circle class="kh-tw' + (i % 3 === 1 ? " kh-tw2" : i % 3 === 2 ? " kh-tw3" : "") + '" cx="' + x + '" cy="' + y + '" r="' + (1 + (i % 2)) + '" fill="' + (i % 4 ? "#ffd27a" : "#fff3d0") + '"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#kh3)"/>' +
      Array.from({ length: 20 }, (_, i) => '<circle class="kh-tw kh-tw' + (i % 3 + 1) + '" cx="' + ((i * 61) % 400) + '" cy="' + (10 + (i * 17) % 60) + '" r="1" fill="#fff"/>').join("") +
      '<path d="M0 140q100 -14 200 -4t200 0v120H0z" fill="#1a1a2e"/>' + lights +
      '<text x="330" y="140" text-anchor="middle" ' + font + ' font-size="9" fill="#9aa">JUAREZ</text><text x="80" y="140" text-anchor="middle" ' + font + ' font-size="9" fill="#9aa">EL PASO</text>' +
      '<path d="M0 90l60 -40l40 20l50 -50l60 60H0z" fill="#2a2030"/>' +
      '<path d="M0 104q120 -14 260 -2" stroke="#444" stroke-width="10" fill="none"/>' +
      '<g class="kh-car"><rect x="0" y="88" width="30" height="10" rx="4" fill="#222"/><path d="M30 92l40 -4v10z" fill="#fff6c2" opacity=".6"/><circle cx="29" cy="93" r="2" fill="#fff"/></g>' +
      '<rect x="0" y="222" width="400" height="38" fill="#8a7a66"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (i * 34) + '" y="226" width="30" height="12" rx="3" fill="#a8977f"/><rect x="' + (i * 34 + 16) + '" y="240" width="30" height="12" rx="3" fill="#9a8a72"/>').join("") +
      '<rect x="130" y="18" width="140" height="26" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/><text x="200" y="36" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">SCENIC DRIVE</text>',
      sky("kh3", "#0b0f2a", "#3a2a5a"));
  }

  /* 4. UTEP / Don Haskins Center */
  function khhaskins() {
    const bhutan = (x, w, h) => '<path d="M' + x + ' 190l6 -' + h + 'h' + (w - 12) + 'l6 ' + h + 'z" fill="#e9dcc4"/><rect x="' + (x + 6) + '" y="' + (190 - h) + '" width="' + (w - 12) + '" height="10" fill="#8c1d1d"/><path d="M' + (x - 4) + ' ' + (190 - h) + 'h' + (w + 8) + 'l-6 -8h-' + (w - 4) + 'z" fill="#3a3a3a"/>' +
      Array.from({ length: Math.floor((w - 20) / 18) }, (_, i) => '<rect x="' + (x + 14 + i * 18) + '" y="' + (196 - h + 14) + '" width="8" height="12" fill="#2a2f3a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kh4)"/>' + franklins(100, "#5a3a5a") +
      '<g class="kh-beam"><path d="M150 140l-30 -130h20z" fill="#fff" opacity=".18"/></g><g class="kh-beam kh-beam2"><path d="M250 140l30 -130h-20z" fill="#fff" opacity=".18"/></g>' +
      '<ellipse cx="200" cy="150" rx="110" ry="34" fill="#cfc2aa"/><path d="M90 150a110 34 0 0 1 220 0" fill="#e9dcc4"/><rect x="90" y="150" width="220" height="40" fill="#d8cab0"/>' +
      '<rect x="90" y="150" width="220" height="8" fill="#8c1d1d"/><path d="M90 150a110 34 0 0 1 220 0" fill="none" stroke="#ff8200" stroke-width="3" class="kh-glow"/>' +
      bhutan(0, 90, 70) + bhutan(310, 90, 76) +
      '<rect x="150" y="164" width="100" height="22" rx="2" fill="#111"/><text x="200" y="180" text-anchor="middle" ' + font + ' font-size="10" fill="' + SUN + '" class="kh-glow">HOMECOMING 2018</text>' +
      '<rect x="0" y="190" width="400" height="70" fill="#5a5048"/>' +
      Array.from({ length: 26 }, (_, i) => '<circle cx="' + (8 + i * 15.5) + '" cy="' + (208 + (i % 3) * 3) + '" r="6" fill="#1a1420"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<circle class="kh-tw kh-tw' + (i % 3 + 1) + '" cx="' + (20 + i * 50) + '" cy="196" r="2" fill="#fff6c2"/>').join("") +
      '<rect x="120" y="14" width="160" height="26" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/><text x="200" y="32" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">DON HASKINS CENTER</text>',
      sky("kh4", "#1a1040", "#e86a5a"));
  }

  /* 5. His corner: Pellicano Dr and Joe Battle Blvd, the Star on the Mountain behind */
  function khcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#kh5)"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle class="kh-tw kh-tw' + (i % 3 + 1) + '" cx="' + ((i * 71) % 400) + '" cy="' + (8 + (i * 13) % 40) + '" r="1" fill="#fff"/>').join("") +
      franklins(96, "#3a2a44") +
      /* the Star on the Mountain on Ranger Peak */
      '<g class="kh-glow" transform="translate(146 46)"><path d="M0 -14l4 10h11l-9 7l3 11l-9 -7l-9 7l3 -11l-9 -7h11z" fill="none" stroke="#fff6c2" stroke-width="2.5"/></g>' +
      '<rect x="0" y="140" width="400" height="84" fill="' + ADOBE + '"/>' + Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (150 + r * 10) + 'h400" stroke="#a87c52" stroke-width="1" opacity=".7"/>').join("") +
      Array.from({ length: 16 }, (_, c) => '<path d="M' + (c * 26 + (c % 2) * 13) + ' 140v84" stroke="#a87c52" stroke-width=".8" opacity=".5"/>').join("") +
      tag("KHALID", 16, 196, 40, SUN, -5) + tag("SUNCITY", 196, 176, 18, PINK, -4) + tag("AMERICAN TEEN", 190, 206, 15, BLUE, -3) +
      '<g class="kh-sp"><circle cx="178" cy="182" r="3" fill="' + SUN + '" opacity=".7"/></g><g class="kh-sp kh-sp2"><circle cx="184" cy="176" r="2" fill="' + SUN + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#4c4a46"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="326" y="70" width="6" height="154" fill="#2f2f2f"/>' + sign(270, 70, 122, "PELLICANO DR") + sign(266, 96, 126, "JOE BATTLE BLVD"),
      sky("kh5", "#1a1238", "#f08a5a"));
  }

  window.SCENES = { khstreetcar: khstreetcar, khschool: khschool, khscenic: khscenic, khhaskins: khhaskins, khcorner: khcorner };
})();
