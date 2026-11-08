/* delinquenthabits scenes (Regions tab: Los Angeles + SoCal; Norwalk, "the lower East Side" - "between the five and the 91, north of Alondra"). CSS classes prefixed dqh- (the page's own anim-train is kept).
   1 Norwalk station, Metro C Line: the platform in the middle of the 105 where the freeway ends ("there's the end of the 105, isn't it?"), a C Line train sliding in, cars on both sides.
   2 The Hargitt House in Norwalk (the D.D. Johnston house, 1891): the two-story Victorian with its old water tower, a pepper tree swaying.
   3 O.G. Style's corner ("one turntable and a broken 808", "O.G. freaks the beat that mariachis play"): a turntable with a peso on the needle, a drum machine, two trumpets on the wall, notes rising.
   4 The California cruise ("ragtop down on a '63", "calles to the playa"): a ragtop rolling along the beach at sunset, waves rolling in.
   5 Firestone Blvd and Pioneer Blvd, Norwalk: green signs, DELINQUENT HABITS tagged, the Santa Ana Freeway (I-5) overpass and its signs behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dqhcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.dqh-car{animation:dqhcar 6s linear infinite}.dqh-car2{animation-direction:reverse;animation-duration:5s}' +
    '@keyframes dqhsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.dqh-sway{transform-box:fill-box;transform-origin:50% 100%;animation:dqhsway 3.4s ease-in-out infinite}' +
    '@keyframes dqhspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.dqh-spin{transform-box:fill-box;transform-origin:50% 50%;animation:dqhspin 1.8s linear infinite}' +
    '@keyframes dqhnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.dqh-note{animation:dqhnote 2.4s ease-out infinite}.dqh-n2{animation-delay:-1.2s}' +
    '@keyframes dqhwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-16px)}}.dqh-wave{animation:dqhwave 3s ease-in-out infinite}' +
    '@keyframes dqhblink{0%,49%{opacity:1}50%,100%{opacity:.2}}.dqh-blink{animation:dqhblink 1s steps(1) infinite}' +
    '@keyframes dqhspray{0%,100%{transform:scaleY(.8)}50%{transform:scaleY(1.1)}}.dqh-spray{transform-box:fill-box;transform-origin:50% 100%;animation:dqhspray 1s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color, tc) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + font + ' font-size="15" fill="' + (tc || "#fff") + '">' + letter + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const palm = (x, y, h, c) => '<g class="dqh-sway"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#3a2c20" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 66, -66].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + (c || "#2f5a35") + '" stroke-width="4" fill="none"/>').join("") + '</g>';
  const shield = (x, y, num) => '<path d="M' + (x - 13) + ' ' + (y - 12) + 'h26v14q0 10 -13 14q-13 -4 -13 -14z" fill="#1f4fa0" stroke="#fff" stroke-width="2"/><rect x="' + (x - 13) + '" y="' + (y - 12) + '" width="26" height="6" fill="#c0262d"/><text x="' + x + '" y="' + (y + 8) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + num + '</text>';
  const CLINE = "#58a738", SUN = "#f4d35e", RED = "#c1272d", GREEN = "#2e8b57";

  /* 1. Norwalk station, Metro C Line, in the middle of the 105 */
  function dqhstation() {
    let win = ""; for (let x = 44; x < 300; x += 32) win += '<rect x="' + x + '" y="124" width="24" height="22" rx="3" fill="#1f2a36"/>';
    const train = '<g class="anim-train"><path d="M18 116h300q20 0 24 18v40H18z" fill="#d6dadf" stroke="#7d848c" stroke-width="2"/>' + win +
      '<rect x="18" y="152" width="324" height="7" fill="' + CLINE + '"/><rect x="178" y="116" width="5" height="58" fill="#5a6068"/>' +
      '<path d="M318 122h12q6 2 8 14h-20z" fill="#1f2a36"/><circle cx="334" cy="166" r="4" fill="#fff6c2"/>' + bullet(290, 136, "C", CLINE) +
      '<rect x="40" y="174" width="60" height="8" fill="#333"/><rect x="250" y="174" width="60" height="8" fill="#333"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dqhs1)"/>' +
      /* far freeway lanes + the 605 overpass */
      '<rect x="0" y="74" width="400" height="14" fill="#8d8a84"/><rect x="0" y="70" width="400" height="5" fill="#bdb8ae"/>' +
      '<g class="dqh-car"><rect x="0" y="76" width="34" height="10" rx="3" fill="#2f6bb0"/></g><g class="dqh-car dqh-car2"><rect x="0" y="76" width="30" height="10" rx="3" fill="#e2e2e2"/></g>' +
      '<rect x="0" y="40" width="400" height="12" fill="#a39f96"/>' + [60, 180, 300].map(x => '<rect x="' + x + '" y="52" width="12" height="20" fill="#8e8a82"/>').join("") +
      shield(358, 30, "605") + shield(326, 30, "105") +
      /* canopy */
      '<rect x="0" y="98" width="400" height="8" fill="#5f6b70"/>' + [40, 140, 260, 360].map(x => '<rect x="' + (x - 3) + '" y="104" width="6" height="82" fill="#6d7a80"/>').join("") +
      train +
      '<rect x="0" y="186" width="400" height="74" fill="#a39b8c"/><rect x="0" y="186" width="400" height="6" fill="#e8d36b"/>' +
      '<rect x="130" y="202" width="200" height="38" rx="4" fill="#111"/><text x="240" y="227" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">NORWALK</text>' + bullet(150, 221, "C", CLINE) +
      '<rect x="18" y="206" width="96" height="30" rx="3" fill="#111"/><text x="66" y="218" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">END OF THE LINE</text><text x="66" y="230" text-anchor="middle" ' + font + ' font-size="8" fill="' + CLINE + '">C LINE</text>',
      sky("dqhs1", "#62aee0", "#f8dcae"));
  }

  /* 2. The Hargitt House, Norwalk */
  function dqhhouse() {
    return svg(
      '<rect width="400" height="260" fill="url(#dqhh1)"/>' +
      '<path d="M0 196q200 -10 400 0v64H0z" fill="#6aa84f"/>' +
      /* water tower */
      '<rect x="266" y="60" width="44" height="136" fill="#efe8d6" stroke="#4a5a3e" stroke-width="2"/><path d="M260 60l28 -24l28 24z" fill="#5d5a55"/>' +
      [80, 110, 140, 170].map(y => '<rect x="280" y="' + y + '" width="16" height="18" fill="#3e5a6e"/>').join("") +
      /* the house */
      '<rect x="80" y="100" width="186" height="96" fill="#f4eedf" stroke="#4a5a3e" stroke-width="2"/>' +
      '<path d="M72 102l60 -50l60 50z" fill="#5d5a55"/><path d="M90 98l42 -34l42 34z" fill="#f4eedf" stroke="#4a5a3e" stroke-width="2"/><circle cx="132" cy="84" r="8" fill="none" stroke="#4a5a3e" stroke-width="2"/>' +
      '<path d="M186 102l40 -30l48 30z" fill="#5d5a55"/>' +
      [96, 150, 204].map(x => '<rect x="' + x + '" y="110" width="22" height="30" fill="#3e5a6e" stroke="#4a5a3e" stroke-width="3"/>').join("") +
      /* porch */
      '<rect x="80" y="150" width="186" height="8" fill="#4a5a3e"/>' + [86, 126, 166, 206, 246].map(x => '<rect x="' + x + '" y="158" width="5" height="38" fill="#f4eedf" stroke="#4a5a3e"/>').join("") +
      '<rect x="160" y="160" width="26" height="36" fill="#7a4e2a"/><rect x="166" y="166" width="14" height="10" fill="#c99a3a"/>' +
      /* pepper tree */
      '<g class="dqh-sway"><path d="M40 200q4 -40 -2 -80" stroke="#5a4030" stroke-width="7" fill="none"/>' + [[24, 110], [44, 98], [58, 116], [30, 130], [52, 136]].map(p => '<ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="22" ry="14" fill="#4f7f3a"/>').join("") + '</g>' +
      '<rect x="300" y="216" width="90" height="24" rx="3" fill="#7a4e2a"/><text x="345" y="232" text-anchor="middle" ' + font + ' font-size="9" fill="#fff4d6">HARGITT HOUSE</text>',
      sky("dqhh1", "#8fd0f2", "#eef7fb"));
  }

  /* 3. O.G. Style's corner: one turntable, a drum machine, the horns */
  function dqhstudio() {
    const horn = (x, y, flip) => '<g transform="translate(' + x + ' ' + y + ')' + (flip ? ' scale(-1 1)' : '') + '"><path d="M0 0h50l26 -14v40l-26 -14H0z" fill="#e3b341" stroke="#7a5512" stroke-width="2"/><rect x="14" y="-8" width="4" height="10" fill="#7a5512"/><rect x="22" y="-8" width="4" height="10" fill="#7a5512"/><rect x="30" y="-8" width="4" height="10" fill="#7a5512"/></g>';
    let pads = ""; for (let i = 0; i < 8; i++) pads += '<rect x="' + (240 + i * 16) + '" y="200" width="12" height="12" rx="2" fill="' + (i % 4 === 0 ? RED : "#d8d2c3") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#241812"/>' +
      '<rect x="0" y="0" width="400" height="140" fill="#3a2418"/>' +
      '<rect x="30" y="20" width="340" height="100" fill="#4a2e1e" stroke="#6a4228" stroke-width="3"/>' +
      horn(70, 60, false) + horn(330, 76, true) +
      '<text x="200" y="74" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="22" fill="' + SUN + '">el ritmo</text>' +
      '<rect x="0" y="140" width="400" height="120" fill="#5c3a24"/><rect x="0" y="140" width="400" height="8" fill="#7a4e2a"/>' +
      /* one turntable, peso on the needle */
      '<rect x="24" y="158" width="160" height="84" rx="6" fill="#c9c2b4" stroke="#6b6458" stroke-width="2"/>' +
      '<g class="dqh-spin"><circle cx="94" cy="200" r="34" fill="#111"/><circle cx="94" cy="200" r="26" fill="none" stroke="#2a2a2a" stroke-width="2"/><circle cx="94" cy="200" r="11" fill="' + GREEN + '"/><rect x="93" y="192" width="2" height="6" fill="#fff"/></g>' +
      '<path d="M164 166l-18 32" stroke="#555" stroke-width="3"/><circle cx="164" cy="166" r="4" fill="#888"/><circle cx="150" cy="190" r="6" fill="#c9a24a" stroke="#7a5512" stroke-width="1.5"/>' +
      /* the drum machine */
      '<rect x="228" y="166" width="150" height="70" rx="5" fill="#d9d4c6" stroke="#6b6458" stroke-width="2"/><rect x="240" y="176" width="60" height="14" rx="2" fill="#2a3a2a"/><text x="270" y="187" text-anchor="middle" font-family="monospace" font-size="10" fill="#7fe07f" class="dqh-blink">808</text>' +
      [320, 340, 360].map(x => '<circle cx="' + x + '" cy="183" r="5" fill="#555"/>').join("") + pads +
      '<path d="M372 168l-8 20l6 6l-10 18" stroke="#3a2a20" stroke-width="2" fill="none"/>' +
      '<text x="140" y="150" ' + font + ' font-size="18" fill="' + SUN + '" class="dqh-note">&#9835;</text><text x="210" y="150" ' + font + ' font-size="16" fill="' + SUN + '" class="dqh-note dqh-n2">&#9834;</text>');
  }

  /* 4. The California cruise: a '63 ragtop along the beach at sunset */
  function dqhcoast() {
    const rag = '<g transform="translate(0 176)"><path d="M0 22q2 -10 16 -10l20 -6h56l22 6q20 0 22 10v8H0z" fill="#b8202a"/><path d="M40 6l10 -10h26l6 10z" fill="#bfe3f2" opacity=".8"/>' +
      '<path d="M0 22h136" stroke="#e6e6e6" stroke-width="2"/><circle cx="26" cy="32" r="9" fill="#111"/><circle cx="26" cy="32" r="5" fill="#e6e6e6"/><circle cx="110" cy="32" r="9" fill="#111"/><circle cx="110" cy="32" r="5" fill="#e6e6e6"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dqhc1)"/>' +
      '<circle cx="290" cy="112" r="34" fill="' + SUN + '"/>' +
      '<rect x="0" y="118" width="400" height="56" fill="#2f78a8"/>' +
      '<g class="dqh-wave"><path d="M0 134q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0v6H0z" fill="#9fd6ef" opacity=".7"/><path d="M0 154q25 -6 50 0t50 0t50 0t50 0t50 0t50 0t50 0t50 0t50 0v6H0z" fill="#e6f6ff" opacity=".7"/></g>' +
      '<rect x="0" y="170" width="400" height="20" fill="#e9d29a"/>' +
      palm(30, 200, 120) + palm(370, 200, 110) +
      '<rect x="0" y="200" width="400" height="60" fill="#4a4a50"/><rect x="0" y="198" width="400" height="4" fill="#cfcac0"/><path d="M0 232h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="dqh-car">' + rag + '</g>' +
      '<rect x="244" y="230" width="140" height="22" rx="3" fill="#111" opacity=".85"/><text x="314" y="245" text-anchor="middle" ' + font + ' font-size="9" fill="' + SUN + '">CALLES TO THE PLAYA</text>',
      sky("dqhc1", "#3a2a6e", "#f29a5a"));
  }

  /* 5. Firestone Blvd and Pioneer Blvd, Norwalk, the I-5 overpass behind */
  function dqhcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dqhk1)"/>' +
      /* the Santa Ana Freeway overpass + its big green signs */
      '<rect x="0" y="96" width="400" height="18" fill="#a8a39a"/><rect x="0" y="92" width="400" height="5" fill="#cfcac0"/>' + [40, 150, 260, 370].map(x => '<rect x="' + (x - 7) + '" y="114" width="14" height="50" fill="#9a958c"/>').join("") +
      '<g class="dqh-car"><rect x="0" y="80" width="44" height="14" rx="3" fill="#e8e8e8"/></g><g class="dqh-car dqh-car2"><rect x="0" y="82" width="36" height="12" rx="3" fill="#2f6bb0"/></g>' +
      '<rect x="70" y="34" width="120" height="44" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' + shield(92, 56, "5") + '<text x="140" y="52" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">SANTA ANA</text><text x="140" y="66" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">FWY</text>' +
      '<rect x="0" y="164" width="400" height="6" fill="#cfcac0"/>' +
      palm(300, 166, 74) +
      /* wall */
      '<rect x="12" y="170" width="270" height="62" fill="#e2c9a0"/><rect x="12" y="170" width="270" height="5" fill="#c2a980"/>' +
      tag("DELINQUENT", 22, 206, 30, SUN, -5) + tag("HABITS", 100, 228, 22, RED, -4) + tag("SOMOS TRES", 190, 222, 11, GREEN, -3) +
      '<g class="dqh-spray"><rect x="268" y="196" width="12" height="28" rx="3" fill="' + GREEN + '"/><rect x="270" y="190" width="8" height="6" fill="#ccc"/></g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#5a5a5f"/><rect x="0" y="230" width="400" height="4" fill="#cfcac0"/>' +
      '<rect x="376" y="120" width="6" height="112" fill="#7a7f86"/>' +
      sign(292, 122, 104, "FIRESTONE BLVD", 10) + sign(292, 148, 104, "PIONEER BLVD", 11),
      sky("dqhk1", "#28407a", "#f6a85a"));
  }

  window.SCENES = { dqhstation, dqhhouse, dqhstudio, dqhcoast, dqhcorner };
})();
