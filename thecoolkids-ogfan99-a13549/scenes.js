/* The Cool Kids scenes (Regions tab: CHICAGO; Sir Michael Rocks raised in Matteson, IL (Rich South HS, then Walter Payton College Prep);
   Chuck Inglish from Detroit / Mount Clemens, moved to Chicago at 18; met on MySpace in 2005 over a beat, formed The Cool Kids in Chicago.
   Their world: BMX bikes on black Mags ("Black Mags"), the Dope Pedal Headquarters garage, basement parties ("Bassment Party"), '88 throwback ("88"), C.A.K.E. Recordings.
   1 Matteson, Metra Electric: elevated island platform on the embankment at 215th St and Main St, silver electric train pulling in.
   2 Dope Pedal Headquarters: the open garage ("open garage") with BMX bikes on black three-spoke Mags, Chuck's red wheels, the lime green frame, pager blinking.
   3 The Bassment Party: wood-paneled basement, speakers pumping, mirror ball spinning, sign on the stairs.
   4 '88 rooftop: boombox and cardboard on a rooftop, the Chicago skyline far up north at sunset.
   5 Lincoln Hwy and Cicero Ave, Matteson: green signs, COOL KIDS tagged with C.A.K.E. / DOPE PEDAL / BLACK MAGS, a Lincoln Highway marker post behind.
   CSS classes prefixed "tck" (the page's own anim-train is kept). No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tckSpin{to{transform:rotate(360deg)}}.tckSpin{transform-box:fill-box;transform-origin:50% 50%;animation:tckSpin 1.6s linear infinite}.tckSlow{animation-duration:6s}' +
    '@keyframes tckBlink{0%,100%{opacity:1}50%{opacity:.15}}.tckBl{animation:tckBlink 1s steps(1) infinite}.tckBl2{animation-delay:.5s}' +
    '@keyframes tckPump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.tckPump{transform-box:fill-box;transform-origin:50% 50%;animation:tckPump .45s ease-in-out infinite}' +
    '@keyframes tckNote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-60px);opacity:0}}.tckNote{animation:tckNote 2.4s ease-out infinite}.tckN2{animation-delay:-.8s}.tckN3{animation-delay:-1.6s}' +
    '@keyframes tckBeam{0%,100%{opacity:.15}50%{opacity:.55}}.tckBeam{animation:tckBeam 1.2s ease-in-out infinite}.tckBm2{animation-delay:-.6s}' +
    '@keyframes tckCloud{0%{transform:translateX(-120px)}100%{transform:translateX(480px)}}.tckCloud{animation:tckCloud 20s linear infinite}.tckC2{animation-delay:-10s}' +
    '@keyframes tckBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.tckBob{animation:tckBob .7s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const PINK = "#ff4fa3", TEAL = "#2ec4b6", GOLD = "#ffd23f", ME = "#eb3a1e", LIME = "#9be22d";
  const cloud = (x, y, cls) => '<g class="tckCloud ' + cls + '" fill="#fff" opacity=".85"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9"/><ellipse cx="' + (x + 14) + '" cy="' + (y - 6) + '" rx="16" ry="9"/></g>';
  /* a BMX wheel on three-spoke Mags */
  const mag = (cx, cy, r, rim, tire, cls) => '<g transform="translate(' + cx + ' ' + cy + ')"><circle r="' + r + '" fill="none" stroke="' + tire + '" stroke-width="' + (r * .22) + '"/>' +
    '<g class="tckSpin ' + (cls || "") + '"><circle r="' + (r * .78) + '" fill="none" stroke="' + rim + '" stroke-width="2"/>' +
    [0, 120, 240].map(a => '<path d="M0 0L0 ' + (-r * .76) + '" stroke="' + rim + '" stroke-width="' + (r * .26) + '" stroke-linecap="round" transform="rotate(' + a + ')"/>').join("") +
    '<circle r="' + (r * .16) + '" fill="#888"/></g></g>';
  const bike = (x, y, frame, rim, tire, cls) => mag(x, y, 16, rim, tire, cls) + mag(x + 54, y, 16, rim, tire, cls) +
    '<path d="M' + x + ' ' + y + 'L' + (x + 20) + ' ' + (y - 22) + 'L' + (x + 44) + ' ' + (y - 22) + 'L' + (x + 54) + ' ' + y + 'M' + (x + 20) + ' ' + (y - 22) + 'L' + (x + 26) + ' ' + y + 'L' + (x + 44) + ' ' + (y - 22) +
    'M' + x + ' ' + y + 'L' + (x + 26) + ' ' + y + '" stroke="' + frame + '" stroke-width="4" fill="none" stroke-linejoin="round"/>' +
    '<path d="M' + (x + 46) + ' ' + (y - 22) + 'L' + (x + 48) + ' ' + (y - 34) + 'M' + (x + 41) + ' ' + (y - 36) + 'h14" stroke="#222" stroke-width="3.5" stroke-linecap="round"/>' +
    '<path d="M' + (x + 14) + ' ' + (y - 28) + 'h14" stroke="#222" stroke-width="5" stroke-linecap="round"/><path d="M' + (x + 20) + ' ' + (y - 22) + 'l-1 -6" stroke="#222" stroke-width="3"/>' +
    '<rect x="' + (x - 6) + '" y="' + (y - 2) + '" width="10" height="4" rx="1" fill="#bbb"/><rect x="' + (x + 50) + '" y="' + (y - 2) + '" width="10" height="4" rx="1" fill="#bbb"/>';

  /* 1. Matteson, Metra Electric */
  function tckstation() {
    let wins = "", poles = "";
    for (let x = 44; x < 300; x += 30) wins += '<rect x="' + x + '" y="88" width="20" height="16" rx="2" fill="#26333f"/>';
    for (let x = 20; x < 400; x += 125) poles += '<rect x="' + x + '" y="22" width="5" height="82" fill="#5a5f66"/><path d="M' + (x - 10) + ' 32h26" stroke="#5a5f66" stroke-width="4"/>';
    const train = '<g class="anim-train">' +
      '<path d="M120 72l14 -8h40l14 8" stroke="#333" stroke-width="2" fill="none"/>' +
      '<path d="M20 76h280q22 0 26 24v28H20z" fill="#d7dbe0" stroke="#2a2a2a" stroke-width="2"/>' + wins +
      '<path d="M304 84q14 2 18 16h-18z" fill="#26333f"/>' +
      '<rect x="20" y="110" width="306" height="7" fill="' + ME + '"/><rect x="20" y="118" width="306" height="4" fill="#26408f"/>' +
      '<rect x="312" y="122" width="9" height="5" fill="#fff3b0"/>' +
      '<g fill="#1a1a1a"><circle cx="58" cy="131" r="6"/><circle cx="80" cy="131" r="6"/><circle cx="246" cy="131" r="6"/><circle cx="268" cy="131" r="6"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tcks1)"/>' + cloud(70, 16, "") + cloud(250, 12, "tckC2") +
      '<path d="M0 36h400" stroke="#333" stroke-width="1.2"/><path d="M0 41h400" stroke="#333" stroke-width="1"/>' + poles +
      /* embankment with the platform up top */
      '<rect x="0" y="134" width="400" height="6" fill="#4a4a4a"/>' + train +
      '<rect x="0" y="140" width="400" height="12" fill="#bdbdbd"/><rect x="0" y="140" width="400" height="3" fill="' + GOLD + '"/>' +
      '<path d="M0 152h400v40H0z" fill="#8a7b62"/>' +
      /* the bridge over Main St */
      '<rect x="128" y="152" width="144" height="16" fill="#7c7f84"/><rect x="128" y="166" width="144" height="4" fill="#5b5e63"/>' +
      '<path d="M132 170h136v40H132z" fill="#2a2c30"/><rect x="128" y="170" width="8" height="40" fill="#8f9297"/><rect x="264" y="170" width="8" height="40" fill="#8f9297"/>' +
      '<g class="tckCloud tckC2"><rect x="150" y="190" width="34" height="14" rx="4" fill="' + TEAL + '"/><circle cx="158" cy="205" r="4" fill="#111"/><circle cx="177" cy="205" r="4" fill="#111"/></g>' +
      '<path d="M0 210h400v50H0z" fill="#555a60"/><path d="M0 232h400" stroke="' + GOLD + '" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<path d="M0 192h128v18H0zM272 192h128v18H272z" fill="#6f9a4c"/>' +
      /* station sign */
      '<rect x="296" y="160" width="4" height="34" fill="#3a3a3a"/>' +
      '<rect x="20" y="156" width="96" height="30" rx="3" fill="#1d3f8f" stroke="#fff" stroke-width="2"/>' +
      '<text x="68" y="172" text-anchor="middle" ' + F + ' font-size="12" fill="#fff" letter-spacing="1">MATTESON</text>' +
      '<rect x="30" y="176" width="76" height="7" rx="2" fill="' + ME + '"/><text x="68" y="182" text-anchor="middle" ' + F + ' font-size="6" fill="#fff" letter-spacing="1">METRA ELECTRIC</text>' +
      '<rect x="306" y="180" width="70" height="14" rx="2" fill="#0f6b3a" stroke="#fff"/><text x="341" y="190" text-anchor="middle" ' + F + ' font-size="8" fill="#fff">MAIN ST</text>',
      sky("tcks1", "#7fb7e6", "#f1e6d6"));
  }

  /* 2. Dope Pedal Headquarters (the open garage) */
  function tckgarage() {
    return svg(
      '<rect width="400" height="260" fill="url(#tcks2)"/>' + cloud(60, 26, "") +
      /* house + garage */
      '<path d="M20 70l90 -40l90 40z" fill="#5a4636"/><rect x="30" y="70" width="160" height="110" fill="#e8dcc2"/>' +
      '<rect x="56" y="92" width="34" height="30" fill="#7ec8e3" stroke="#fff" stroke-width="3"/><rect x="120" y="92" width="34" height="30" fill="#7ec8e3" stroke="#fff" stroke-width="3"/>' +
      '<rect x="92" y="138" width="26" height="42" fill="#7a3b2a"/>' +
      '<path d="M190 60h200v120H190z" fill="#d9ccb0"/><path d="M184 62l106 -26l106 26z" fill="#5a4636"/>' +
      '<rect x="206" y="80" width="168" height="100" fill="#2b2a33"/>' +
      /* the raised garage door */
      '<rect x="206" y="80" width="168" height="16" fill="#f2efe6"/><path d="M206 88h168" stroke="#c9c2b2"/>' +
      '<text x="290" y="74" text-anchor="middle" ' + F + ' font-size="9" fill="#2b2a33" letter-spacing="1">DOPE PEDAL HQ</text>' +
      /* inside: pegboard, tools, pager */
      '<g fill="#555">' + [220, 236, 252, 268].map(x => '<circle cx="' + x + '" cy="106" r="1.5"/><circle cx="' + x + '" cy="116" r="1.5"/>').join("") + '</g>' +
      '<path d="M222 104v14M236 104l6 12M252 104q6 6 0 14" stroke="#aaa" stroke-width="2.5" fill="none"/>' +
      '<rect x="340" y="104" width="22" height="14" rx="2" fill="#111" stroke="#666"/><rect x="343" y="107" width="12" height="6" fill="' + LIME + '" class="tckBl"/><circle cx="358" cy="110" r="1.6" fill="' + PINK + '" class="tckBl tckBl2"/>' +
      /* bikes */
      bike(214, 164, LIME, "#1b1b1b", "#111", "") + bike(296, 164, "#f2f2f2", "#e23b3b", "#111", "tckSlow") +
      /* driveway */
      '<path d="M0 180h400v80H0z" fill="#6aa84f"/><path d="M206 180h168l26 80H186z" fill="#a9a59c"/>' +
      bike(240, 232, "#ffffff", "#111", "#111", "") +
      '<path d="M120 252q30 -4 54 0" stroke="#4f8a3a" stroke-width="5" fill="none"/>',
      sky("tcks2", "#8cc5ee", "#f4eedf"));
  }

  /* 3. The Bassment Party */
  function tckbassment() {
    let panels = "";
    for (let x = 0; x < 400; x += 22) panels += '<rect x="' + x + '" y="40" width="20" height="150" fill="' + (x % 44 ? "#6b4428" : "#5e3a22") + '"/>';
    const spk = (x) => '<rect x="' + x + '" y="112" width="52" height="84" rx="4" fill="#1a1a1f" stroke="#444" stroke-width="2"/>' +
      '<g class="tckPump"><circle cx="' + (x + 26) + '" cy="168" r="18" fill="#2c2c33" stroke="#777" stroke-width="2"/><circle cx="' + (x + 26) + '" cy="168" r="6" fill="#555"/></g>' +
      '<circle cx="' + (x + 26) + '" cy="130" r="8" fill="#2c2c33" stroke="#777" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a1a12"/>' + panels +
      '<rect x="0" y="30" width="400" height="12" fill="#3a2a20"/><path d="M0 36h400" stroke="#1b120c" stroke-width="3"/>' +
      /* light beams */
      '<path class="tckBeam" d="M200 52L80 190h40z" fill="' + PINK + '"/><path class="tckBeam tckBm2" d="M200 52L300 190h40z" fill="' + TEAL + '"/><path class="tckBeam" d="M200 52L196 190h30z" fill="' + GOLD + '"/>' +
      '<path d="M200 30v14" stroke="#888" stroke-width="2"/><g class="tckSpin tckSlow"><circle cx="200" cy="54" r="12" fill="#c9ced6"/><path d="M188 50h24M188 58h24M196 42v24M204 42v24" stroke="#8a919c" stroke-width="1.5"/></g>' +
      /* stairs coming down */
      '<g fill="#7d5636" stroke="#3a2618">' + [0, 1, 2, 3, 4].map(i => '<rect x="' + (300 + i * 16) + '" y="' + (110 + i * 16) + '" width="' + (100 - i * 16) + '" height="16"/>').join("") + '</g>' +
      '<path d="M296 106l90 90" stroke="#3a2618" stroke-width="4"/>' +
      /* party sign */
      '<rect x="24" y="56" width="128" height="40" rx="3" fill="#f6f0dd" transform="rotate(-4 88 76)"/>' +
      '<text x="88" y="74" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="15" fill="' + PINK + '" transform="rotate(-4 88 76)">BASSMENT</text>' +
      '<text x="88" y="90" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="12" fill="#222" transform="rotate(-4 88 76)">PARTY 2 DOLLARS</text>' +
      spk(18) + spk(226) +
      /* turntables */
      '<rect x="92" y="164" width="124" height="30" rx="3" fill="#202024" stroke="#555"/>' +
      '<g class="tckSpin"><circle cx="122" cy="176" r="11" fill="#111"/><circle cx="122" cy="176" r="3" fill="' + PINK + '"/></g>' +
      '<g class="tckSpin tckSlow"><circle cx="186" cy="176" r="11" fill="#111"/><circle cx="186" cy="176" r="3" fill="' + TEAL + '"/></g>' +
      /* floor */
      '<path d="M0 196h400v64H0z" fill="#3a3d44"/><g fill="#2f3238">' + [0, 60, 120, 180, 240, 300, 360].map(x => '<rect x="' + x + '" y="196" width="30" height="32"/><rect x="' + (x + 30) + '" y="228" width="30" height="32"/>').join("") + '</g>' +
      '<g fill="' + GOLD + '"><text class="tckNote" x="60" y="110" font-size="16">&#9835;</text><text class="tckNote tckN2" x="250" y="104" font-size="14">&#9834;</text><text class="tckNote tckN3" x="160" y="140" font-size="12">&#9835;</text></g>');
  }

  /* 4. '88 rooftop, the skyline far up north */
  function tckrooftop() {
    let city = "";
    const bl = [[20, 150, 22], [46, 130, 18], [68, 160, 20], [92, 96, 16], [110, 120, 22], [136, 70, 20], [158, 112, 18], [180, 140, 24], [210, 84, 16], [228, 126, 20], [252, 150, 26], [282, 104, 16], [300, 140, 22], [326, 120, 18], [348, 156, 26], [378, 138, 20]];
    bl.forEach(b => { city += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (200 - b[1]) + '" fill="#2a2244"/>'; });
    city += '<rect x="141" y="46" width="2" height="24" fill="#2a2244"/><rect x="149" y="46" width="2" height="24" fill="#2a2244"/>';
    let lights = "";
    bl.forEach((b, i) => { for (let y = b[1] + 8; y < 196; y += 12) if ((y + i) % 3) lights += '<rect x="' + (b[0] + 4) + '" y="' + y + '" width="3" height="3" fill="' + GOLD + '" opacity=".7"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#tcks4)"/><circle cx="320" cy="120" r="34" fill="#ffb347" opacity=".9"/>' + city + lights +
      /* rooftop */
      '<path d="M0 196h400v64H0z" fill="#6b5a58"/><path d="M0 196h400v8H0z" fill="#8d7b77"/>' +
      '<rect x="300" y="150" width="40" height="46" fill="#7a6a66"/><rect x="306" y="140" width="28" height="12" fill="#5c4e4b"/>' +
      '<path d="M24 196v-22h4v22M60 196v-22h4v22M24 180h40" stroke="#444" stroke-width="3"/>' +
      /* cardboard + boombox */
      '<path d="M90 236l140 -4l10 20l-150 4z" fill="#c9a26b" stroke="#8a6a3a"/>' +
      '<g class="tckBob"><rect x="150" y="196" width="76" height="34" rx="4" fill="#cfd3d8" stroke="#333" stroke-width="2"/><path d="M164 196q24 -16 48 0" stroke="#333" stroke-width="3" fill="none"/>' +
      '<g class="tckPump"><circle cx="166" cy="214" r="10" fill="#222"/></g><g class="tckPump"><circle cx="210" cy="214" r="10" fill="#222"/></g>' +
      '<rect x="180" y="204" width="16" height="10" fill="#333"/><rect x="182" y="206" width="12" height="6" fill="' + TEAL + '"/></g>' +
      '<g fill="#fff"><text class="tckNote" x="170" y="190" font-size="15">&#9835;</text><text class="tckNote tckN2" x="200" y="186" font-size="13">&#9834;</text><text class="tckNote tckN3" x="140" y="196" font-size="12">&#9835;</text></g>' +
      '<text x="64" y="232" ' + F + ' font-size="18" fill="' + PINK + '" stroke="#000" stroke-width="2" paint-order="stroke">&#8217;88</text>',
      sky("tcks4", "#3b2a6b", "#ff8a5c"));
  }

  /* 5. Lincoln Hwy and Cicero Ave, Matteson */
  function tckcorner() {
    let bricks = "";
    for (let y = 70; y < 200; y += 12) for (let x = (y / 12) % 2 ? 0 : 14; x < 400; x += 28) bricks += '<rect x="' + x + '" y="' + y + '" width="26" height="10" fill="#9c4a33"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tcks5)"/>' + cloud(90, 22, "") + cloud(280, 30, "tckC2") +
      /* Lincoln Highway marker post behind */
      '<rect x="318" y="20" width="22" height="56" fill="#e9e4d8" stroke="#888"/><rect x="318" y="28" width="22" height="10" fill="#c8102e"/><rect x="318" y="38" width="22" height="10" fill="#fff"/><rect x="318" y="48" width="22" height="10" fill="#1d3f8f"/>' +
      '<text x="329" y="47" text-anchor="middle" ' + F + ' font-size="10" fill="#1d3f8f">L</text>' +
      '<rect x="0" y="66" width="400" height="134" fill="#83402c"/>' + bricks +
      '<rect x="0" y="62" width="400" height="6" fill="#5b2c1f"/>' +
      tag("COOL KIDS", 40, 140, 44, PINK, -5) +
      tag("C.A.K.E.", 30, 184, 18, GOLD, -3) + tag("DOPE PEDAL", 150, 186, 18, TEAL, 2) + tag("BLACK MAGS", 36, 94, 15, "#ffffff", -4) +
      '<path d="M0 200h400v60H0z" fill="#5c6066"/><rect x="0" y="198" width="400" height="6" fill="#a9a59c"/>' +
      /* sign pole */
      '<rect x="348" y="100" width="5" height="100" fill="#3a5a40"/>' +
      '<rect x="296" y="102" width="104" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="348" y="115" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">LINCOLN HWY</text>' +
      '<rect x="318" y="122" width="64" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="350" y="135" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">CICERO AV</text>' +
      bike(60, 236, LIME, "#111", "#111", "") +
      '<g class="tckBob"><rect x="220" y="218" width="34" height="22" rx="3" fill="#e8e1d2" stroke="#333"/><text x="237" y="233" text-anchor="middle" ' + F + ' font-size="8" fill="#333">88</text></g>',
      sky("tcks5", "#8fc3ea", "#f3eadb"));
  }

  window.SCENES = { tckstation, tckgarage, tckbassment, tckrooftop, tckcorner };
})();
