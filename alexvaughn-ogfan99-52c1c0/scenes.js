/* ALEX VAUGHN (Prince George's County, Md. — came up on the D.C. open-mic circuit, AV Sessions on H Street NE — THE DMV region) opening scenes. 400 x 260 animated SVGs. CSS classes prefixed av- */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes avblink{0%,49%{opacity:1}50%,100%{opacity:.15}}.av-blk{animation:avblink 1s steps(1) infinite}.av-blk2{animation-delay:.5s}' +
    '@keyframes avflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.35}55%{opacity:.9}}.av-flk{animation:avflick 2.4s infinite}.av-flk2{animation-delay:.9s}' +
    '@keyframes avdrift{from{transform:translateX(-80px)}to{transform:translateX(470px)}}.av-cloud{animation:avdrift 30s linear infinite}.av-cloud2{animation-delay:-15s}' +
    '@keyframes avbird{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,0)}}.av-bird{animation:avbird 10s linear infinite}.av-bird2{animation-delay:-5s}' +
    '@keyframes avroll{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.av-car{animation:avroll 7s linear infinite}.av-car2{animation-duration:9s;animation-delay:-4s}' +
    '@keyframes avnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-70px);opacity:0}}.av-note{animation:avnote 3s linear infinite}.av-note2{animation-delay:-1s}.av-note3{animation-delay:-2s}' +
    '@keyframes avglow{0%,100%{opacity:.35}50%{opacity:.9}}.av-glow{animation:avglow 3s ease-in-out infinite}' +
    '@keyframes avsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.av-sway{transform-box:fill-box;transform-origin:50% 100%;animation:avsway 1.6s ease-in-out infinite}.av-sway2{animation-delay:-.8s}' +
    '@keyframes avspray{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.av-spray{animation:avspray 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const bricks = (y0, y1, c) => { let b = ""; for (let y = y0; y < y1; y += 13) for (let x = ((y - y0) / 13) % 2 ? -18 : 0; x < 400; x += 36) b += '<rect x="' + x + '" y="' + y + '" width="34" height="11" fill="' + c + '"/>'; return b; };
  const cloud = (x, y, cls) => '<g class="av-cloud ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9" fill="#fff" opacity=".8"/><ellipse cx="' + (x + 16) + '" cy="' + (y - 6) + '" rx="16" ry="9" fill="#fff" opacity=".8"/></g>';
  const bird = (x, y, cls) => '<g class="av-bird ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q5-6 10 0q5-6 10 0" stroke="#2a2a33" stroke-width="1.6" fill="none"/></g>';
  const note = (x, y, c, cls) => '<g class="av-note ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'v-14l9-3v14" stroke="' + c + '" stroke-width="1.8" fill="none"/><circle cx="' + (x - 2.5) + '" cy="' + y + '" r="3" fill="' + c + '"/><circle cx="' + (x + 6.5) + '" cy="' + (y - 3) + '" r="3" fill="' + c + '"/></g>';
  /* WMATA line bullet */
  const bullet = (x, y, color, label) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="' + color + '"/><text x="' + x + '" y="' + (y + 3.6) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="9.5" fill="#fff">' + label + '</text>';
  const PINK = "#ff6f91", GOLD = "#ffd27a", RED = "#bf0d3e";

  /* 1. Union Station (Red Line), underground below the station at 1st St & Massachusetts Ave NE: the coffered vault, a Red Line train pulling in, platform lights blinking */
  function avstation() {
    let coffers = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 12; c++) {
      const y = 8 + r * 22, w = 30 - r * 2, x = c * 34 + 2;
      coffers += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#77706a" stroke="#524c46" stroke-width="2"/><rect x="' + (x + 6) + '" y="' + (y + 5) + '" width="' + (w - 12) + '" height="8" fill="#605a54"/>';
    }
    const car = (x) => '<rect x="' + x + '" y="128" width="168" height="62" rx="5" fill="#c9ced3" stroke="#6b7177" stroke-width="1.5"/>' +
      '<rect x="' + x + '" y="170" width="168" height="5" fill="' + RED + '"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 14 + i * 38) + '" y="138" width="26" height="22" rx="3" fill="#1d2630"/>').join("") +
      '<rect x="' + (x + 66) + '" y="136" width="16" height="44" fill="#a2a8ae"/><path d="M' + (x + 74) + ' 136v44" stroke="#6b7177"/>' +
      '<circle cx="' + (x + 26) + '" cy="192" r="5" fill="#222"/><circle cx="' + (x + 142) + '" cy="192" r="5" fill="#222"/>';
    const cab = '<path d="M348 190v-58q0-4 4-4h30q12 4 16 22v40z" fill="#c9ced3" stroke="#6b7177" stroke-width="1.5"/><path d="M372 134h12q8 4 11 18h-23z" fill="#11161c"/>' +
      '<rect x="348" y="170" width="50" height="5" fill="' + RED + '"/><rect x="372" y="140" width="22" height="7" rx="1" fill="#000"/><text x="383" y="145.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="4.6" fill="#ffb03c">GLENMONT</text>' +
      '<circle cx="392" cy="180" r="3" fill="#fff6c2" class="av-flk"/><circle cx="370" cy="192" r="5" fill="#222"/>';
    let edge = "";
    for (let x = 8; x < 400; x += 26) edge += '<rect x="' + x + '" y="199" width="10" height="3" rx="1.5" fill="#ffd27a" class="av-blk' + (x % 52 ? " av-blk2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#26221e"/>' +
      '<path d="M0 0h400v100q-200 40-400 0z" fill="#837a70"/>' + coffers +
      '<path d="M0 100q200 40 400 0v28H0z" fill="#3a342d"/>' +
      '<g class="av-flk"><rect x="0" y="112" width="400" height="3" fill="#ffe6b0" opacity=".5"/></g>' +
      '<rect x="0" y="122" width="400" height="6" fill="#1e1a16"/>' +
      '<g class="anim-train">' + car(4) + car(176) + cab + '</g>' +
      '<rect x="0" y="196" width="400" height="8" fill="#d8d2c4"/>' + edge +
      '<rect x="0" y="204" width="400" height="56" fill="#7c4436"/>' +
      '<rect x="18" y="140" width="14" height="64" fill="#4a3628"/><rect x="18" y="140" width="14" height="5" fill="' + RED + '"/>' +
      '<rect x="80" y="212" width="240" height="40" rx="3" fill="#2b2119" stroke="#fff" stroke-width="1.5"/>' +
      bullet(102, 232, RED, "RD") +
      '<text x="214" y="236" text-anchor="middle" ' + F + ' font-weight="700" font-size="17" fill="#fff">Union Station</text>' +
      '<text x="214" y="247" text-anchor="middle" ' + F + ' font-size="7" fill="#e8dccb">1ST ST &amp; MASSACHUSETTS AVE NE</text>');
  }

  /* 2. Suitland High School, Prince George's County: the red-brick school where she studied classical music in the Center for Visual and Performing Arts; music notes floating out of the open auditorium doors */
  function avsuitland() {
    let win = "";
    for (let f = 0; f < 2; f++) for (let i = 0; i < 9; i++) {
      win += '<rect x="' + (22 + i * 16) + '" y="' + (118 + f * 26) + '" width="11" height="16" fill="#cfe3ee" stroke="#e9e2d2" stroke-width="1.5"/>';
      win += '<rect x="' + (240 + i * 16) + '" y="' + (118 + f * 26) + '" width="11" height="16" fill="#cfe3ee" stroke="#e9e2d2" stroke-width="1.5"/>';
    }
    let trees = "";
    [[14, 200], [386, 200], [180, 214], [222, 214]].forEach(([x, y]) => trees += '<rect x="' + (x - 2) + '" y="' + y + '" width="4" height="16" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 6) + '" r="12" fill="#3d7a3a"/><circle cx="' + (x + 5) + '" cy="' + (y - 11) + '" r="8" fill="#4f9248"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#avs2)"/>' + cloud(70, 34) + cloud(260, 22, "av-cloud2") +
      '<path d="M0 196q100-14 200-10t200 10v64H0z" fill="#6aa04e"/>' +
      '<rect x="14" y="104" width="372" height="92" fill="#a24a36"/><rect x="14" y="100" width="372" height="6" fill="#e9e2d2"/>' +
      win +
      /* centre entrance block */
      '<rect x="160" y="86" width="80" height="110" fill="#b05640"/><rect x="156" y="82" width="88" height="6" fill="#e9e2d2"/>' +
      '<rect x="170" y="140" width="60" height="56" fill="#2a1e1a"/><rect x="172" y="142" width="27" height="54" fill="#3a2a24"/><rect x="201" y="142" width="27" height="54" fill="#3a2a24"/>' +
      '<g class="av-glow"><rect x="172" y="142" width="56" height="54" fill="' + GOLD + '" opacity=".25"/></g>' +
      '<rect x="158" y="94" width="84" height="38" rx="2" fill="#f4efe2" stroke="#6b2a1e" stroke-width="1.5"/>' +
      '<text x="200" y="110" text-anchor="middle" ' + A + ' font-size="10" fill="#6b2a1e">SUITLAND</text><text x="200" y="124" text-anchor="middle" ' + F + ' font-weight="700" font-size="6" fill="#6b2a1e">HIGH SCHOOL · CVPA</text>' +
      '<rect x="166" y="196" width="68" height="6" fill="#bdb6a6"/>' +
      note(184, 176, GOLD) + note(208, 182, PINK, "av-note2") + note(196, 170, "#fff", "av-note3") +
      trees + bird(90, 70) + bird(160, 58, "av-bird2") +
      '<rect x="96" y="230" width="208" height="20" rx="3" fill="#2a1420" stroke="' + PINK + '" stroke-width="1"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + A + ' font-size="11.5" fill="' + PINK + '" textLength="194" lengthAdjust="spacingAndGlyphs">SILVER HILL RD · PRINCE GEORGE\'S COUNTY</text>',
      sky("avs2", "#7fb6e0", "#f6dcc0"));
  }

  /* 3. AV Sessions: the monthly open mic she started on H Street NE in 2018, upstairs room, string lights, a keyboard and a mic stand, the crowd's heads swaying */
  function avsessions() {
    let lights = "";
    for (let i = 0; i < 16; i++) lights += '<circle cx="' + (12 + i * 25) + '" cy="' + (30 + Math.sin(i * 0.8) * 6) + '" r="3.2" fill="' + (i % 3 === 0 ? PINK : GOLD) + '" class="av-flk' + (i % 2 ? " av-flk2" : "") + '"/>';
    let crowd = "";
    for (let i = 0; i < 13; i++) crowd += '<g class="av-sway' + (i % 2 ? " av-sway2" : "") + '"><circle cx="' + (16 + i * 31) + '" cy="' + (214 + (i % 3) * 4) + '" r="12" fill="#140b12"/><rect x="' + (2 + i * 31) + '" y="' + (224 + (i % 3) * 4) + '" width="28" height="40" rx="10" fill="#140b12"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#2a1520"/>' + bricks(0, 200, "#3a1d26") +
      '<path d="M0 30q100 16 200 0t200 0" stroke="#111" stroke-width="1" fill="none"/>' + lights +
      '<rect x="110" y="150" width="180" height="40" fill="#1a0e14"/>' +
      '<ellipse cx="200" cy="150" rx="120" ry="70" fill="' + GOLD + '" opacity=".08" class="av-glow"/>' +
      /* keyboard */
      '<rect x="210" y="132" width="78" height="10" fill="#111"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (212 + i * 6.2) + '" y="133" width="5" height="7" fill="#f4efe2"/>').join("") +
      '<path d="M220 142l-6 30M278 142l6 30" stroke="#555" stroke-width="3"/>' +
      /* mic stand */
      '<path d="M170 178v-52" stroke="#888" stroke-width="3"/><path d="M160 180h20" stroke="#888" stroke-width="3"/><rect x="164" y="114" width="12" height="16" rx="6" fill="#333" stroke="#999"/>' +
      note(180, 100, PINK) + note(250, 112, GOLD, "av-note2") + note(130, 112, "#fff", "av-note3") +
      '<rect x="120" y="56" width="160" height="36" rx="4" fill="#140b12" stroke="' + PINK + '" stroke-width="2"/>' +
      '<g class="av-flk"><text x="200" y="82" text-anchor="middle" ' + A + ' font-size="22" fill="' + PINK + '">AV SESSIONS</text></g>' +
      '<text x="200" y="104" text-anchor="middle" ' + F + ' font-weight="700" font-size="7.5" fill="' + GOLD + '">OPEN MIC · H STREET NE · MONTHLY</text>' +
      crowd);
  }

  /* 4. Union Station's Beaux-Arts front on Columbus Circle: white granite, three great arches, the statues on the attic, flags flying and taxis rolling past */
  function avunion() {
    let statues = "";
    for (let i = 0; i < 6; i++) statues += '<rect x="' + (118 + i * 34) + '" y="66" width="6" height="16" rx="3" fill="#f1ede2"/><circle cx="' + (121 + i * 34) + '" cy="63" r="3.4" fill="#f1ede2"/>';
    let cols = "";
    for (let i = 0; i < 4; i++) cols += '<rect x="' + (112 + i * 58) + '" y="94" width="8" height="78" fill="#e4dfd2"/>';
    const flag = (x) => '<rect x="' + x + '" y="186" width="2" height="40" fill="#777"/><g class="av-sway"><rect x="' + (x + 2) + '" y="186" width="14" height="9" fill="#fff"/><rect x="' + (x + 2) + '" y="190" width="14" height="2" fill="' + RED + '"/><circle cx="' + (x + 6) + '" cy="188" r="1" fill="' + RED + '"/><circle cx="' + (x + 11) + '" cy="188" r="1" fill="' + RED + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#avs4)"/>' + cloud(60, 30) + cloud(280, 20, "av-cloud2") +
      '<rect x="0" y="100" width="100" height="80" fill="#e8e3d6"/><rect x="300" y="100" width="100" height="80" fill="#e8e3d6"/>' +
      [0, 1, 2].map(i => '<path d="M' + (12 + i * 30) + ' 176v-40a11 11 0 0 1 22 0v40z" fill="#4a4a50"/><path d="M' + (312 + i * 30) + ' 176v-40a11 11 0 0 1 22 0v40z" fill="#4a4a50"/>').join("") +
      '<rect x="100" y="82" width="200" height="98" fill="#f3efe4"/><rect x="96" y="78" width="208" height="8" fill="#ddd7c8"/>' + statues +
      [0, 1, 2].map(i => '<path d="M' + (124 + i * 58) + ' 180v-50a24 24 0 0 1 48 0v50z" fill="#3c3c44"/><path d="M' + (128 + i * 58) + ' 136a20 20 0 0 1 40 0" stroke="#cfe3ee" stroke-width="2" fill="none" opacity=".7"/>').join("") +
      cols +
      '<rect x="0" y="180" width="400" height="80" fill="#c9c3b4"/><rect x="0" y="178" width="400" height="4" fill="#e9e3d4"/>' +
      flag(40) + flag(120) + flag(262) + flag(344) +
      /* fountain */
      '<ellipse cx="200" cy="214" rx="46" ry="8" fill="#8fb8cf" stroke="#e9e3d4" stroke-width="3"/><rect x="194" y="184" width="12" height="28" fill="#e9e3d4"/><g class="av-glow"><path d="M200 186q-14 12 -24 26M200 186q14 12 24 26" stroke="#cfe8f4" stroke-width="2" fill="none"/></g>' +
      '<g class="av-car"><rect x="0" y="234" width="50" height="14" rx="5" fill="#d93a3a"/><rect x="10" y="228" width="28" height="9" rx="3" fill="#d93a3a"/><circle cx="10" cy="249" r="4" fill="#111"/><circle cx="40" cy="249" r="4" fill="#111"/></g>' +
      '<g class="av-car av-car2"><rect x="0" y="238" width="56" height="14" rx="5" fill="' + GOLD + '"/><circle cx="12" cy="253" r="4" fill="#111"/><circle cx="44" cy="253" r="4" fill="#111"/></g>' +
      bird(80, 54) + bird(170, 44, "av-bird2"),
      sky("avs4", "#86bde6", "#f6e2c8"));
  }

  /* 5. The corner: H St NE & 13th St NE, AV tagged on the brick, the cream Art Deco tower of the old Atlas theater lit up behind, the streetcar wire overhead */
  function avcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#avs5)"/>' + stars(30) +
      /* deco tower behind */
      '<rect x="150" y="30" width="44" height="80" fill="#efe6cf"/><rect x="160" y="20" width="24" height="14" fill="#efe6cf"/><rect x="166" y="12" width="12" height="10" fill="#efe6cf"/>' +
      '<rect x="158" y="40" width="4" height="64" fill="#c9a96a"/><rect x="170" y="40" width="4" height="64" fill="#c9a96a"/><rect x="182" y="40" width="4" height="64" fill="#c9a96a"/>' +
      '<g class="av-glow"><rect x="150" y="30" width="44" height="80" fill="' + GOLD + '" opacity=".25"/></g>' +
      '<rect x="0" y="96" width="140" height="14" fill="#3a2a4a"/><rect x="204" y="92" width="196" height="18" fill="#3a2a4a"/>' +
      '<path d="M0 60h400" stroke="#222" stroke-width="1"/>' +
      bricks(110, 214, "#6e3426") +
      '<rect x="0" y="106" width="400" height="6" fill="#4a2a20"/>' +
      '<g class="av-spray">' + tag("ALEX VAUGHN", 12, 170, 33, PINK, -5) + '</g>' + tag("AV", 30, 204, 30, GOLD, -3) + tag("SO BE IT", 110, 204, 20, "#fff", -4) +
      '<path d="M228 146q8 -14 16 0q-8 10 -16 0z" fill="' + RED + '" stroke="#000" stroke-width="1.5"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#8d8b85"/><rect x="0" y="212" width="400" height="4" fill="#b1aea6"/>' +
      '<g class="av-car av-car2"><rect x="0" y="236" width="56" height="16" rx="5" fill="' + PINK + '"/><circle cx="12" cy="253" r="4" fill="#111"/><circle cx="44" cy="253" r="4" fill="#111"/></g>' +
      '<rect x="336" y="58" width="5" height="156" fill="#4a5058"/>' +
      '<rect x="270" y="56" width="126" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="333" y="71" text-anchor="middle" ' + F + ' font-weight="700" font-size="11.5" fill="#fff">H St NE</text>' +
      '<rect x="270" y="80" width="126" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="333" y="95" text-anchor="middle" ' + F + ' font-weight="700" font-size="11.5" fill="#fff">13th St NE</text>' +
      '<rect x="290" y="108" width="92" height="16" rx="2" fill="#5a2a4a" stroke="#fff" stroke-width="1"/><text x="336" y="119.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="7.5" fill="#fff">H STREET NE</text>',
      sky("avs5", "#0b1030", "#5a2a4a"));
  }

  window.SCENES = { avstation, avsuitland, avsessions, avunion, avcorner };
})();
