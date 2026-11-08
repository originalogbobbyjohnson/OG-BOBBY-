/* ginuwine scenes (Regions tab: THE DMV; born in Washington, D.C., raised in Forestville, Prince George's County, MD). CSS classes prefixed gw- (the page's own anim-train is kept).
   1 Branch Avenue, the end of Metro's Green Line, up the road from Forestville: open-air island platform under the gull-wing canopy, a silver Metro train sliding in, the brown Metro pylon, black station sign with the green GR bullet.
   2 Forestville High School, class of '88: the auditorium stage, red curtains, a lone mic in the spotlight, sweeping lights.
   3 Glen Echo Park, Maryland: the old Dentzel carousel under its striped canopy, horses rising and falling, the park's neon sign.
   4 Prince George's Community College in Largo, where he earned his paralegal degree: brick campus hall, scales of justice banner, caps flying.
   5 Marlboro Pike and Forestville Rd: green signs, GINUWINE tagged on the wall, the Jefferson Memorial lit up behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes gwglow{0%,100%{opacity:.4}50%{opacity:1}}.gw-glow{animation:gwglow 2.2s ease-in-out infinite}.gw-glow2{animation-delay:-1.1s}' +
    '@keyframes gwsweep{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.gw-sweep{transform-box:fill-box;transform-origin:50% 0%;animation:gwsweep 3.4s ease-in-out infinite}.gw-sweep2{animation-delay:-1.7s}' +
    '@keyframes gwbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}.gw-bob{animation:gwbob 1.8s ease-in-out infinite}.gw-bob2{animation-delay:-.9s}' +
    '@keyframes gwspin{from{transform:translateX(0)}to{transform:translateX(-64px)}}.gw-spin{animation:gwspin 2.6s linear infinite}' +
    '@keyframes gwcap{0%{transform:translate(0,0) rotate(0)}50%{transform:translate(4px,-46px) rotate(160deg)}100%{transform:translate(8px,0) rotate(360deg)}}.gw-cap{transform-box:fill-box;transform-origin:50% 50%;animation:gwcap 2.4s ease-in-out infinite}.gw-cap2{animation-delay:-.8s}.gw-cap3{animation-delay:-1.6s}' +
    '@keyframes gwcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.gw-car{animation:gwcar 7s linear infinite}' +
    '@keyframes gwspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.gw-sp{animation:gwspray 1.4s ease-out infinite}.gw-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "gw-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#3a2a1c"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const ICE = "#7fd3ff", GOLD = "#f2c14e", PINK = "#ff5fa2", GRN = "#00b140";

  /* 1. Branch Avenue, Green Line terminal (open-air) */
  function gwstation() {
    const car = x => '<rect x="' + x + '" y="122" width="168" height="70" rx="6" fill="#c7ccd3" stroke="#6b737e" stroke-width="2"/>' +
      '<rect x="' + x + '" y="134" width="168" height="20" fill="#1c232c"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (x + 8 + i * 27) + '" y="137" width="20" height="14" rx="2" fill="#33414f"/>').join("") +
      '<rect x="' + (x + 30) + '" y="158" width="18" height="30" fill="#9aa1aa" stroke="#6b737e"/><rect x="' + (x + 120) + '" y="158" width="18" height="30" fill="#9aa1aa" stroke="#6b737e"/>' +
      '<rect x="' + x + '" y="182" width="168" height="4" fill="#5a616b"/><circle cx="' + (x + 26) + '" cy="196" r="7" fill="#222"/><circle cx="' + (x + 142) + '" cy="196" r="7" fill="#222"/>';
    const train = '<g class="anim-train">' + car(20) + car(192) +
      '<rect x="340" y="126" width="18" height="8" rx="2" fill="#111"/><text x="349" y="132.5" text-anchor="middle" ' + font + ' font-size="5.5" fill="' + GRN + '">GREEN</text>' +
      '<circle class="gw-glow" cx="352" cy="176" r="4" fill="#fff6c8"/></g>';
    /* gull-wing canopy, the Metro signature for outdoor stations */
    const canopy = '<path d="M0 70L200 92L400 70v10L200 102L0 80z" fill="#c9c2b4"/><path d="M0 80L200 102L400 80" stroke="#8a8378" stroke-width="2" fill="none"/>' +
      [40, 120, 280, 360].map(x => '<rect x="' + (x - 3) + '" y="' + (x < 200 ? 80 + x * 0.11 : 80 + (400 - x) * 0.11) + '" width="6" height="120" fill="#7a746a"/>').join("");
    /* brown Metro pylon with the M */
    const pylon = '<rect x="356" y="132" width="20" height="80" fill="#5a4030"/><rect x="352" y="112" width="28" height="24" fill="#5a4030"/>' +
      '<text x="366" y="130" text-anchor="middle" ' + font + ' font-size="18" fill="#fff">M</text><rect x="352" y="138" width="28" height="4" fill="' + GRN + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gw-s1)"/>' + stars(10) +
      /* the big parking garage behind the end of the line */
      '<rect x="230" y="40" width="170" height="60" fill="#3a3f4a"/>' + [0, 1, 2].map(i => '<rect x="230" y="' + (52 + i * 16) + '" width="170" height="5" fill="#262a33"/>').join("") +
      [0, 1, 2, 3, 4, 5, 6].map(i => '<circle class="gw-glow' + (i % 2 ? " gw-glow2" : "") + '" cx="' + (244 + i * 22) + '" cy="48" r="2" fill="#ffe6a0"/>').join("") +
      tree(30, 104, 1.4, "#22382a") + tree(84, 102, 1.2, "#2a4430") + tree(160, 104, 1.3, "#22382a") +
      canopy + train +
      '<rect x="0" y="204" width="400" height="8" fill="#3a2e26"/><path d="M0 206h400M0 210h400" stroke="#8a8f96" stroke-width="1.2"/>' +
      /* granite platform edge with the light strip */
      '<rect x="0" y="212" width="400" height="48" fill="#8e8a82"/><rect x="0" y="212" width="400" height="5" fill="#d8d2c4"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => '<rect class="gw-glow' + (i % 2 ? " gw-glow2" : "") + '" x="' + (8 + i * 40) + '" y="217" width="24" height="3" fill="#fff3c0"/>').join("") +
      pylon +
      /* black station sign */
      '<rect x="72" y="226" width="236" height="26" rx="3" fill="#111"/><text x="174" y="245" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">BRANCH AVENUE</text>' +
      '<circle cx="286" cy="239" r="10" fill="' + GRN + '"/><text x="286" y="243" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">GR</text>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="' + ICE + '" opacity=".9">GREEN LINE · END OF THE LINE · UP THE ROAD FROM FORESTVILLE</text>',
      sky("gw-s1", "#0e1430", "#5a4a6a"));
  }

  /* 2. Forestville High School auditorium, class of '88 */
  function gwstage() {
    const seat = (x, y) => '<path d="M' + x + ' ' + y + 'q9 -10 18 0v10h-18z" fill="#1a1020"/>';
    let seats = ""; for (let r = 0; r < 2; r++) for (let i = 0; i < 12; i++) seats += seat(4 + i * 33 + r * 14, 226 + r * 18);
    return svg(
      '<rect width="400" height="260" fill="#120c18"/>' +
      /* proscenium + curtains */
      '<rect x="40" y="26" width="320" height="170" fill="#1d1426"/>' +
      '<path d="M40 26h320v26q-40 12 -80 0t-80 0t-80 0t-80 0z" fill="#8a1424"/>' +
      '<path d="M40 52q30 70 6 144h-6z" fill="#a0182c"/><path d="M360 52q-30 70 -6 144h6z" fill="#a0182c"/>' +
      [56, 70, 330, 344].map(x => '<path d="M' + x + ' 60v136" stroke="#6e0f1c" stroke-width="2"/>').join("") +
      /* banner */
      '<rect x="95" y="60" width="210" height="24" rx="3" fill="' + GOLD + '"/><text x="200" y="76" text-anchor="middle" ' + font + ' font-size="11" fill="#1d1426">FORESTVILLE HIGH · CLASS OF \'88</text>' +
      /* sweeping lights */
      '<g class="gw-sweep"><path d="M120 0L90 196h80z" fill="' + ICE + '" opacity=".16"/></g>' +
      '<g class="gw-sweep gw-sweep2"><path d="M280 0L230 196h80z" fill="' + PINK + '" opacity=".16"/></g>' +
      '<ellipse cx="200" cy="192" rx="56" ry="9" fill="#fff3c0" opacity=".35" class="gw-glow"/>' +
      '<path d="M200 0L160 190h80z" fill="#fff3c0" opacity=".1"/>' +
      /* stage floor + mic stand */
      '<rect x="40" y="190" width="320" height="16" fill="#5a3a22"/><rect x="40" y="190" width="320" height="3" fill="#8a6a42"/>' +
      '<path d="M200 190v-62" stroke="#c0c4ca" stroke-width="3"/><path d="M190 190l10 -8l10 8" stroke="#c0c4ca" stroke-width="3" fill="none"/>' +
      '<rect x="195" y="114" width="10" height="16" rx="5" fill="#2a2a2a" stroke="#c0c4ca" stroke-width="1.5"/>' +
      seats,
      "");
  }

  /* 3. Glen Echo Park carousel, Maryland */
  function gwcarousel() {
    const horse = (x, c, cls) => '<g class="' + cls + '"><path d="M' + x + ' 96v74" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<ellipse cx="' + x + '" cy="142" rx="16" ry="8" fill="' + c + '" stroke="#5a3a22" stroke-width="1.5"/>' +
      '<path d="M' + (x + 10) + ' 138l8 -14l6 2l-2 6l-6 10z" fill="' + c + '" stroke="#5a3a22" stroke-width="1.5"/><path d="M' + (x + 18) + ' 124l10 4l-2 4l-9 -2z" fill="' + c + '" stroke="#5a3a22" stroke-width="1.5"/>' +
      '<path d="M' + (x + 12) + ' 124q-4 6 -2 14" stroke="#3a2414" stroke-width="3" fill="none"/>' +
      '<path d="M' + (x - 10) + ' 148l-6 12M' + (x - 4) + ' 149l-2 13M' + (x + 6) + ' 149l6 11M' + (x + 12) + ' 147l8 8" stroke="#5a3a22" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M' + (x - 16) + ' 140q-8 2 -8 12" stroke="#3a2414" stroke-width="3" fill="none"/><rect x="' + (x - 6) + '" y="134" width="12" height="5" rx="2" fill="#8a1424"/></g>';
    const bulbs = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="gw-glow' + (i % 2 ? " gw-glow2" : "") + '" cx="' + (64 + i * 21.6) + '" cy="88" r="2.4" fill="#fff3a0"/>'; return s; };
    return svg(
      '<rect width="400" height="260" fill="url(#gw-s3)"/>' +
      tree(20, 120, 1.8, "#2e4a2a") + tree(384, 116, 1.9, "#2e4a2a") +
      /* neon park sign */
      '<rect x="128" y="4" width="144" height="22" rx="4" fill="#120c18" stroke="' + PINK + '" stroke-width="2"/><text class="gw-glow" x="200" y="20" text-anchor="middle" ' + font + ' font-size="13" fill="' + PINK + '">GLEN ECHO PARK</text>' +
      /* striped canopy */
      '<path d="M60 86L200 42L340 86z" fill="#f4e3c1"/>' +
      [0, 1, 2, 3, 4, 5, 6].map(i => '<path d="M200 42L' + (60 + i * 40) + ' 86L' + (80 + i * 40) + ' 86z" fill="' + (i % 2 ? "#c0392b" : "#f4e3c1") + '"/>').join("") +
      '<rect x="56" y="84" width="288" height="10" fill="' + GOLD + '"/>' + bulbs(14) +
      '<rect x="196" y="34" width="8" height="10" fill="' + GOLD + '"/><circle cx="200" cy="33" r="4" fill="' + GOLD + '"/>' +
      /* center column with mirrors */
      '<rect x="176" y="94" width="48" height="90" fill="#8a1424"/>' + [0, 1, 2].map(i => '<rect x="' + (182 + i * 13) + '" y="104" width="10" height="30" rx="2" fill="' + ICE + '" opacity=".7"/>').join("") +
      /* the horses go round (clipped band) */
      '<clipPath id="gw-c3"><rect x="60" y="94" width="280" height="96"/></clipPath><g clip-path="url(#gw-c3)"><g class="gw-spin">' +
      [0, 1, 2, 3, 4, 5, 6].map(i => horse(70 + i * 64, ["#f4f1ea", "#d9b38c", "#6a4a2a", "#f4f1ea", "#d9b38c", "#6a4a2a", "#f4f1ea"][i], i % 2 ? "gw-bob gw-bob2" : "gw-bob")).join("") +
      '</g></g>' +
      /* platform */
      '<path d="M50 186h300l-14 14H64z" fill="#5a3a22"/><rect x="64" y="200" width="272" height="6" fill="#3a2414"/>' +
      '<path d="M0 206h400v54H0z" fill="#4f7a3a"/><path d="M0 214h400" stroke="#3c6a2e" stroke-width="2"/>' +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">THE DENTZEL CAROUSEL · GLEN ECHO, MARYLAND</text>',
      sky("gw-s3", "#6fa8dc", "#f6d8a8"));
  }

  /* 4. Prince George's Community College, Largo */
  function gwcollege() {
    const cap = (x, y, cls) => '<g class="gw-cap ' + cls + '"><path d="M' + (x - 10) + ' ' + y + 'l10 -5l10 5l-10 5z" fill="#111"/><rect x="' + (x - 5) + '" y="' + (y + 2) + '" width="10" height="5" fill="#111"/><path d="M' + (x + 9) + ' ' + (y + 1) + 'v8" stroke="' + GOLD + '" stroke-width="1.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gw-s4)"/>' +
      '<path d="M0 200q200 -16 400 0v60H0z" fill="#4a7a3a"/>' + tree(30, 186, 1.8, "#3c6a2e") + tree(374, 184, 1.9, "#3c6a2e") +
      /* brick hall */
      '<rect x="70" y="90" width="260" height="110" fill="#9a4a32"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => '<path d="M70 ' + (96 + i * 8) + 'h260" stroke="#7d3a26" stroke-width=".8"/>').join("") +
      '<rect x="64" y="84" width="272" height="10" fill="#e8e0d0"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (86 + i * 40) + '" y="104" width="22" height="30" fill="#2a3a4a" stroke="#e8e0d0" stroke-width="2"/><rect class="gw-glow' + (i % 2 ? " gw-glow2" : "") + '" x="' + (88 + i * 40) + '" y="106" width="18" height="12" fill="#ffe9b0" opacity=".5"/>').join("") +
      /* entrance with glass doors */
      '<rect x="170" y="148" width="60" height="52" fill="#2a3a4a" stroke="#e8e0d0" stroke-width="3"/><path d="M200 148v52" stroke="#e8e0d0" stroke-width="2"/>' +
      /* banner with scales of justice (the paralegal degree) */
      '<rect x="102" y="146" width="52" height="40" fill="#14335c"/><path d="M128 152v26M114 158h28" stroke="' + GOLD + '" stroke-width="2"/><path d="M114 158l-6 12h12zM142 158l-6 12h12z" fill="' + GOLD + '"/>' +
      '<rect x="246" y="146" width="52" height="40" fill="#14335c"/><text x="272" y="171" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">PGCC</text>' +
      /* nameplate */
      '<rect x="96" y="60" width="208" height="20" rx="2" fill="#14335c"/><text x="200" y="74" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">PRINCE GEORGE\'S COMMUNITY COLLEGE</text>' +
      cap(140, 40, "") + cap(200, 30, "gw-cap2") + cap(262, 42, "gw-cap3") +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">LARGO, MD · PARALEGAL DEGREE, DONE</text>',
      sky("gw-s4", "#86b8e8", "#f4e2c4"));
  }

  /* 5. Marlboro Pike and Forestville Rd */
  function gwcorner() {
    /* Jefferson Memorial: white marble rotunda, low dome, columned portico */
    const jefferson = (x, base) => '<g opacity=".95"><rect x="' + (x - 70) + '" y="' + (base - 6) + '" width="140" height="6" fill="#e8e4da"/>' +
      '<rect x="' + (x - 62) + '" y="' + (base - 40) + '" width="124" height="34" fill="#f2efe6"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (x - 58 + i * 12.4) + '" y="' + (base - 38) + '" width="4" height="30" fill="#d4cfc2"/>').join("") +
      '<path d="M' + (x - 66) + ' ' + (base - 40) + 'h132l-10 -8h-112z" fill="#e8e4da"/>' +
      '<path d="M' + (x - 46) + ' ' + (base - 48) + 'q46 -44 92 0z" fill="#f4f1ea"/><path d="M' + (x - 30) + ' ' + (base - 48) + 'L' + x + ' ' + (base - 62) + 'L' + (x + 30) + ' ' + (base - 48) + 'z" fill="#ece8de"/></g>' +
      '<ellipse cx="' + x + '" cy="' + (base - 40) + '" rx="84" ry="34" fill="#fff3c0" opacity=".1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gw-s5)"/>' + stars(14) +
      jefferson(170, 120) +
      '<rect x="0" y="118" width="400" height="10" fill="#1a2238"/>' +
      /* wall */
      '<rect x="0" y="128" width="400" height="80" fill="#3d3a44"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M0 ' + (136 + i * 8) + 'h400" stroke="#2c2a32" stroke-width="1"/>').join("") +
      tag("GINUWINE", 50, 186, 38, ICE, -5) + tag("SWING MOB", 262, 146, 17, GOLD, -3) + tag("ELGIN", 270, 200, 20, PINK, -6) +
      '<circle class="gw-sp" cx="246" cy="186" r="3" fill="' + PINK + '" opacity=".8"/><circle class="gw-sp gw-sp2" cx="252" cy="190" r="2" fill="' + ICE + '" opacity=".8"/>' +
      /* sidewalk + street */
      '<rect x="0" y="208" width="400" height="10" fill="#8e8a82"/><rect x="0" y="218" width="400" height="42" fill="#2a2a30"/>' +
      '<path d="M0 240h400" stroke="#f2c14e" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="gw-car"><rect x="0" y="222" width="64" height="16" rx="5" fill="#14335c"/><rect x="12" y="216" width="36" height="10" rx="4" fill="#14335c"/><circle cx="14" cy="240" r="5" fill="#111"/><circle cx="50" cy="240" r="5" fill="#111"/><circle cx="62" cy="228" r="2" fill="#fff6c8"/></g>' +
      /* street sign pole */
      '<rect x="336" y="62" width="5" height="148" fill="#5a5f66"/>' +
      sign(272, 62, 120, "MARLBORO PIKE") + sign(266, 88, 132, "FORESTVILLE RD") +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="' + ICE + '" opacity=".9">FORESTVILLE, PRINCE GEORGE\'S COUNTY</text>',
      sky("gw-s5", "#0b0f2a", "#3a3a6a"));
  }

  window.SCENES = { gwstation: gwstation, gwstage: gwstage, gwcarousel: gwcarousel, gwcollege: gwcollege, gwcorner: gwcorner };
})();
