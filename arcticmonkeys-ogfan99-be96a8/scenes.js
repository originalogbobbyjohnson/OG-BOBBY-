/* Arctic Monkeys game (GENRES: ROCK; INTERNATIONAL region: UK + EUROPE; High Green, Sheffield S35 - Alex Turner, Matt Helders,
   Jamie Cook and Andy Nicholson grew up in High Green, the northernmost suburb of Sheffield, a mile up from Chapeltown).
   Rooms: Chapeltown station (Northern trains, the stop a mile down from High Green), Yellow Arch Studios on Burton Road in
   Neepsend (red-brick works where the band rehearsed), The Grapes on Trippet Lane (first ever gig, 13 June 2003, in the room
   upstairs), The Leadmill on Leadmill Road (the Sheffield club where they played their famous hometown gigs), and Wortley Road
   at Thompson Hill in High Green with Wharncliffe Crags behind.
   CSS classes prefixed "amk" (the page's anim-train is kept). No logos (no Northern, no band waveform), no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes amkTw{0%,100%{opacity:1}50%{opacity:.25}}.amkTw{animation:amkTw 1.8s ease-in-out infinite}.amkT2{animation-delay:.6s}.amkT3{animation-delay:1.2s}' +
    '@keyframes amkBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.amkBob{animation:amkBob .8s ease-in-out infinite}.amkBb2{animation-delay:.4s}' +
    '@keyframes amkNote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-70px);opacity:0}}.amkNote{animation:amkNote 3.2s linear infinite}.amkN2{animation-delay:1.1s}.amkN3{animation-delay:2.2s}' +
    '@keyframes amkCloud{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.amkCloud{animation:amkCloud 30s linear infinite}.amkC2{animation-delay:-15s}' +
    '@keyframes amkCar{0%{transform:translateX(-160px)}100%{transform:translateX(480px)}}.amkCar{animation:amkCar 9s linear infinite}' +
    '@keyframes amkBeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.amkBeam{transform-box:fill-box;transform-origin:50% 100%;animation:amkBeam 3s ease-in-out infinite}.amkBm2{animation-delay:-1.5s}' +
    '@keyframes amkSway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.amkSway{transform-box:fill-box;transform-origin:50% 0;animation:amkSway 2.4s ease-in-out infinite}' +
    '@keyframes amkSpark{0%,100%{transform:scale(.6);opacity:.3}50%{transform:scale(1.2);opacity:1}}.amkSpark{transform-box:fill-box;transform-origin:50% 50%;animation:amkSpark 1.4s ease-in-out infinite}.amkS2{animation-delay:.5s}' +
    '@keyframes amkBird{0%{transform:translate(-40px,0)}50%{transform:translate(220px,-12px)}100%{transform:translate(460px,6px)}}.amkBird{animation:amkBird 15s linear infinite}.amkB2{animation-delay:-7s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#f2c14e", RED = "#d62828", BLUE = "#4fb3d9", NAVY = "#1f2a5c", BRICK = "#9a4632", BRICK2 = "#7a3424";
  const cloud = (x, y, cls) => '<g class="amkCloud' + (cls || '') + '" fill="#fff" opacity=".8"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9"/><ellipse cx="' + (x + 16) + '" cy="' + (y - 7) + '" rx="16" ry="9"/><ellipse cx="' + (x - 12) + '" cy="' + (y - 4) + '" rx="12" ry="7"/></g>';
  const bird = (x, y, cls) => '<g class="amkBird' + (cls || '') + '"><path d="M' + x + ' ' + y + 'q6 -6 12 0q6 -6 12 0" stroke="#2a2a2a" stroke-width="2.2" fill="none" stroke-linecap="round"/></g>';
  const bricks = (x, y, w, h, base, line) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>';
    for (let yy = y + 8; yy < y + h; yy += 8) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>';
    return s;
  };
  const note = (x, y, cls, col) => '<g class="amkNote' + (cls || '') + '"><path d="M' + x + ' ' + y + 'v-14l10 -3v14" stroke="' + col + '" stroke-width="2" fill="none"/><ellipse cx="' + (x - 3) + '" cy="' + y + '" rx="4" ry="3" fill="' + col + '"/><ellipse cx="' + (x + 7) + '" cy="' + (y - 3) + '" rx="4" ry="3" fill="' + col + '"/></g>';
  const people = (y, n, x0, x1, cols) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = x0 + 8 + i * ((x1 - x0) / n), f = cols[i % cols.length];
      s += '<g class="amkBob' + (i % 2 ? ' amkBb2' : '') + '" fill="' + f + '"><circle cx="' + x + '" cy="' + (y - 14) + '" r="5"/><rect x="' + (x - 6) + '" y="' + (y - 8) + '" width="12" height="18" rx="5"/></g>';
    }
    return s;
  };
  const hills = (y, col, col2) => '<path d="M0 ' + y + 'q60 -34 130 -14q70 -30 150 -6q60 -22 120 4v' + (260 - y) + 'h-400z" fill="' + col + '"/>' +
    '<path d="M0 ' + (y + 14) + 'q80 -20 170 -4q90 -18 230 6v' + (246 - y) + 'h-400z" fill="' + col2 + '"/>';

  /* 1. Chapeltown station: two platforms in the cutting, the navy station sign, a navy-and-white Northern train with its yellow nose pulling in */
  function amkstation() {
    let wins = "";
    for (let x = 52; x < 286; x += 32) wins += '<rect x="' + x + '" y="140" width="22" height="18" rx="3" fill="#bcd3e6"/>';
    const train = '<g class="anim-train">' +
      '<rect x="24" y="128" width="282" height="64" rx="8" fill="' + NAVY + '" stroke="#11173a" stroke-width="2"/>' +
      '<rect x="24" y="164" width="282" height="12" fill="#f4f4f4"/><rect x="24" y="176" width="282" height="4" fill="#7a5cc8"/>' +
      '<path d="M306 128q24 4 26 30v34h-26z" fill="#ffd200" stroke="#2a2a2a" stroke-width="2"/>' +
      '<path d="M309 136q15 3 18 22h-18z" fill="#14182a"/>' + wins +
      '<g fill="#cfd6e3"><rect x="40" y="136" width="10" height="40" rx="1"/><rect x="164" y="136" width="10" height="40" rx="1"/><rect x="284" y="136" width="10" height="40" rx="1"/></g>' +
      '<rect x="318" y="180" width="9" height="5" fill="#fff6c8"/>' +
      '<g fill="#1b1b1b"><circle cx="66" cy="196" r="7"/><circle cx="90" cy="196" r="7"/><circle cx="240" cy="196" r="7"/><circle cx="264" cy="196" r="7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#amks1)"/>' + cloud(70, 26, '') + cloud(300, 40, ' amkC2') + bird(0, 54, '') +
      hills(86, "#6f8a4e", "#55703c") +
      /* far platform with its shelter and lamps */
      '<rect x="0" y="112" width="400" height="10" fill="#b8b2a4"/><rect x="0" y="110" width="400" height="3" fill="#f2d24a"/>' +
      '<rect x="40" y="86" width="80" height="24" fill="#c9d6de" stroke="#5c6670" stroke-width="2"/><rect x="36" y="82" width="88" height="6" fill="#5c6670"/>' +
      '<g fill="#3c4148"><rect x="170" y="70" width="3" height="40"/><rect x="260" y="70" width="3" height="40"/><rect x="350" y="70" width="3" height="40"/></g>' +
      '<g class="amkTw" fill="#fff6c8"><circle cx="171" cy="70" r="4"/><circle cx="351" cy="70" r="4"/></g><g class="amkTw amkT2" fill="#fff6c8"><circle cx="261" cy="70" r="4"/></g>' +
      /* the tracks */
      '<rect x="0" y="122" width="400" height="84" fill="#4a463f"/>' +
      '<path d="M0 198h400M0 204h400" stroke="#9aa0a6" stroke-width="2"/>' +
      train +
      /* near platform and the station sign */
      '<rect x="0" y="206" width="400" height="54" fill="#bdb6a8"/><rect x="0" y="206" width="400" height="4" fill="#f2d24a"/>' +
      '<rect x="146" y="226" width="4" height="34" fill="#3c4148"/><rect x="250" y="226" width="4" height="34" fill="#3c4148"/>' +
      '<rect x="120" y="214" width="160" height="30" rx="3" fill="' + NAVY + '" stroke="#f4f4f4" stroke-width="2"/>' +
      '<text x="200" y="235" text-anchor="middle" ' + F + ' font-size="17" fill="#ffffff">Chapeltown</text>',
      sky("amks1", "#8fb3d6", "#efe4cf"));
  }

  /* 2. Yellow Arch Studios, Burton Road, Neepsend: the red-brick works with its yellow arch, a drum kit inside, notes coming out */
  function amkarch() {
    let wins = "";
    for (let x = 30; x < 380; x += 46) if (x < 150 || x > 250) wins += '<path d="M' + x + ' 96v-14a9 9 0 0 1 18 0v14z" fill="#2c3440" stroke="#e8dcc2" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#amks2)"/>' + cloud(60, 24, '') + cloud(280, 36, ' amkC2') +
      /* the works chimney */
      '<rect x="330" y="10" width="22" height="60" fill="' + BRICK2 + '"/><rect x="326" y="8" width="30" height="6" fill="#5a2a1c"/>' +
      bricks(0, 60, 400, 140, BRICK, BRICK2) +
      '<rect x="0" y="56" width="400" height="8" fill="#5a2a1c"/>' + wins +
      '<g fill="#2c3440" stroke="#e8dcc2" stroke-width="2"><rect x="30" y="120" width="40" height="30"/><rect x="90" y="120" width="40" height="30"/><rect x="270" y="120" width="40" height="30"/><rect x="330" y="120" width="40" height="30"/></g>' +
      /* the yellow arch with the band's gear inside */
      '<path d="M146 200v-86a54 54 0 0 1 108 0v86z" fill="#f2c230" stroke="#b88a10" stroke-width="3"/>' +
      '<path d="M162 200v-80a38 38 0 0 1 76 0v80z" fill="#1a1612"/>' +
      '<ellipse cx="200" cy="176" rx="20" ry="20" fill="#f4f1ea" stroke="#333" stroke-width="2"/>' +
      '<text x="200" y="181" text-anchor="middle" ' + F + ' font-size="11" fill="#111">0114</text>' +
      '<ellipse cx="174" cy="160" rx="10" ry="3" fill="' + GOLD + '"/><rect x="173" y="160" width="2" height="36" fill="#888"/>' +
      '<ellipse cx="228" cy="150" rx="11" ry="3" fill="' + GOLD + '"/><rect x="227" y="150" width="2" height="46" fill="#888"/>' +
      '<rect x="210" y="128" width="20" height="16" rx="2" fill="#2a2a2a" stroke="#555"/>' +
      note(186, 118, '', '#fff') + note(206, 110, ' amkN2', GOLD) + note(196, 122, ' amkN3', BLUE) +
      '<rect x="0" y="200" width="400" height="10" fill="#9a958a"/><rect x="0" y="210" width="400" height="50" fill="#3e3f44"/>' +
      '<path d="M0 238h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      '<rect x="20" y="18" width="112" height="24" rx="2" fill="#fff" stroke="#111" stroke-width="2.5"/><text x="76" y="34" text-anchor="middle" ' + F + ' font-size="11" fill="#111">BURTON ROAD</text>',
      sky("amks2", "#9cc1de", "#f1e6d0"));
  }

  /* 3. The Grapes, Trippet Lane: the little Victorian pub, the hanging sign with a bunch of grapes, the band playing in the lit room upstairs */
  function amkgrapes() {
    return svg(
      '<rect width="400" height="260" fill="url(#amks3)"/>' +
      '<g class="amkTw" fill="#fff"><circle cx="40" cy="20" r="1.5"/><circle cx="330" cy="30" r="1.5"/></g><g class="amkTw amkT3" fill="#fff"><circle cx="120" cy="36" r="1.2"/><circle cx="370" cy="14" r="1.4"/></g>' +
      /* neighbouring buildings */
      bricks(0, 70, 90, 130, "#6c4a3a", "#57392c") + bricks(310, 60, 90, 140, "#6a4636", "#55372a") +
      /* the pub */
      bricks(90, 50, 220, 150, BRICK, BRICK2) +
      '<path d="M84 50h232l-10 -14h-212z" fill="#3a2a22"/>' +
      /* upstairs: the lit gig room */
      '<rect x="110" y="68" width="180" height="56" fill="#f6c45a" stroke="#e8dcc2" stroke-width="3"/>' +
      '<path d="M170 68v56M230 68v56" stroke="#e8dcc2" stroke-width="3"/>' +
      people(120, 4, 120, 280, ["#2a1d14", "#3a2618"]) +
      '<g fill="#2a1d14"><path d="M141 104l10 4v10l-10 -2z"/><path d="M221 104l10 4v10l-10 -2z"/></g>' +
      note(150, 92, '', '#fff') + note(230, 86, ' amkN2', '#fff') +
      /* ground floor: dark green tiled pub front */
      '<rect x="90" y="132" width="220" height="68" fill="#1f4a36"/><rect x="90" y="132" width="220" height="10" fill="#163626"/>' +
      '<text x="200" y="140" text-anchor="middle" ' + F + ' font-size="8" fill="' + GOLD + '">THE GRAPES</text>' +
      '<rect x="104" y="148" width="60" height="40" fill="#f2c46a" opacity=".85"/><rect x="236" y="148" width="60" height="40" fill="#f2c46a" opacity=".85"/>' +
      '<rect x="182" y="148" width="36" height="52" fill="#3a2418"/><circle cx="210" cy="176" r="2" fill="' + GOLD + '"/>' +
      /* the hanging sign: a bunch of grapes */
      '<rect x="306" y="96" width="34" height="3" fill="#222"/>' +
      '<g class="amkSway"><rect x="318" y="99" width="1.5" height="6" fill="#222"/><rect x="306" y="105" width="28" height="32" rx="2" fill="#1f4a36" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<g fill="#7a3aa0"><circle cx="315" cy="115" r="3.4"/><circle cx="322" cy="115" r="3.4"/><circle cx="329" cy="115" r="3"/><circle cx="318" cy="121" r="3.4"/><circle cx="325" cy="121" r="3.4"/><circle cx="321" cy="127" r="3.2"/></g>' +
      '<path d="M321 111q2 -4 6 -3" stroke="#3c8a3a" stroke-width="2" fill="none"/></g>' +
      '<rect x="0" y="200" width="400" height="10" fill="#8f897d"/><rect x="0" y="210" width="400" height="50" fill="#36363b"/>' +
      '<rect x="14" y="84" width="66" height="22" rx="2" fill="#fff" stroke="#111" stroke-width="2"/><text x="47" y="99" text-anchor="middle" ' + F + ' font-size="8" fill="#111">TRIPPET LANE</text>' +
      '<rect x="128" y="218" width="144" height="24" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/><text x="200" y="234" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">FIRST GIG  13 JUNE 2003</text>',
      sky("amks3", "#141a3a", "#4a3a5a"));
  }

  /* 4. The Leadmill, Leadmill Road: the long red-brick old mill, white lettering, the queue outside and the lights over the roof */
  function amkleadmill() {
    let wins = "";
    for (let x = 52; x < 360; x += 38) if (x < 160 || x > 220) wins += '<path d="M' + x + ' 160v-20a10 10 0 0 1 20 0v20z" fill="#2a2440" stroke="#d8c8a8" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#amks4)"/>' +
      '<g class="amkBeam"><path d="M110 92l-30 -90h22z" fill="#f2c14e" opacity=".35"/></g>' +
      '<g class="amkBeam amkBm2"><path d="M290 92l18 -90h22z" fill="#4fb3d9" opacity=".35"/></g>' +
      '<g class="amkBeam"><path d="M200 92l-6 -92h14z" fill="#d62828" opacity=".3"/></g>' +
      bricks(30, 90, 340, 110, BRICK, BRICK2) +
      '<path d="M22 92h356l-14 -16h-328z" fill="#3a2a26"/>' +
      '<rect x="70" y="100" width="260" height="22" fill="#2a1a16"/>' +
      '<text x="200" y="117" text-anchor="middle" ' + F + ' font-size="16" fill="#f4f1ea" letter-spacing="4">THE LEADMILL</text>' +
      wins +
      '<rect x="176" y="158" width="48" height="42" fill="#1a1414"/><rect x="176" y="158" width="48" height="6" fill="' + GOLD + '"/>' +
      '<rect x="0" y="200" width="400" height="10" fill="#8f897d"/><rect x="0" y="210" width="400" height="50" fill="#33343a"/>' +
      people(214, 8, 20, 170, ["#1a1a22", "#2a2236", "#3a2a2a"]) + people(214, 6, 232, 380, ["#2a2236", "#1a1a22"]) +
      '<g class="amkCar"><rect x="0" y="230" width="70" height="18" rx="5" fill="#d62828"/><rect x="12" y="222" width="40" height="12" rx="4" fill="#d62828"/><rect x="16" y="224" width="14" height="8" fill="#bcd3e6"/><rect x="34" y="224" width="14" height="8" fill="#bcd3e6"/><circle cx="16" cy="248" r="6" fill="#111"/><circle cx="54" cy="248" r="6" fill="#111"/></g>' +
      '<rect x="290" y="20" width="104" height="24" rx="2" fill="#fff" stroke="#111" stroke-width="2.5"/><text x="342" y="36" text-anchor="middle" ' + F + ' font-size="10" fill="#111">LEADMILL ROAD</text>',
      sky("amks4", "#0e1030", "#3a2450"));
  }

  /* 5. Wortley Road at Thompson Hill, High Green S35: a tagged gritstone wall, Wharncliffe Crags and the woods behind */
  function amkcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#amks5)"/>' + cloud(70, 22, '') + cloud(260, 34, ' amkC2') + bird(0, 40, '') + bird(0, 58, ' amkB2') +
      /* Wharncliffe Crags: the long gritstone edge over the trees */
      '<path d="M0 110l40 -30l50 -6l40 -18l60 -4l50 -14l60 8l50 -6l50 14v60h-400z" fill="#6b6456"/>' +
      '<path d="M40 80l50 -6l40 -18l60 -4l50 -14l60 8l50 -6l50 14v10l-50 -8l-50 6l-60 -8l-50 14l-60 4l-40 18l-50 6l-40 30z" fill="#8a8170" opacity=".9"/>' +
      '<g fill="#4c4639"><rect x="96" y="72" width="10" height="16"/><rect x="186" y="54" width="12" height="20"/><rect x="296" y="46" width="10" height="18"/></g>' +
      '<g fill="#3f6a34"><circle cx="20" cy="112" r="16"/><circle cx="52" cy="104" r="18"/><circle cx="90" cy="110" r="16"/><circle cx="130" cy="102" r="18"/><circle cx="170" cy="108" r="16"/><circle cx="210" cy="100" r="18"/><circle cx="250" cy="108" r="16"/><circle cx="290" cy="100" r="18"/><circle cx="330" cy="108" r="16"/><circle cx="370" cy="102" r="18"/></g>' +
      '<rect x="0" y="112" width="400" height="40" fill="#5a7a3c"/>' +
      /* the gritstone wall with the tags */
      '<rect x="0" y="146" width="400" height="58" fill="#8c8272"/>' +
      (function () { let s = ""; for (let y = 146; y < 204; y += 12) for (let x = ((y / 12) % 2) * 16; x < 400; x += 32) s += '<rect x="' + x + '" y="' + y + '" width="30" height="10" rx="2" fill="#a0968a" opacity=".55"/>'; return s; })() +
      tag("S35", 22, 182, 22, BLUE, -3) +
      tag("MONKEYS", 92, 192, 38, GOLD, -4) +
      tag("0114", 286, 176, 22, RED, -6) +
      '<g class="amkSpark"><path d="M272 160l2 5 5 1 -4 3 1 5 -4 -3 -4 3 1 -5 -4 -3 5 -1z" fill="#fff"/></g>' +
      '<g class="amkSpark amkS2"><path d="M84 162l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1z" fill="#fff"/></g>' +
      '<rect x="0" y="204" width="400" height="8" fill="#b9b3a6"/><rect x="0" y="212" width="400" height="48" fill="#3d3f45"/>' +
      '<path d="M0 238h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      /* Sheffield street name plates: white with black letters, the district below */
      '<rect x="360" y="40" width="5" height="172" fill="#2a2a2a"/>' +
      '<rect x="262" y="44" width="134" height="30" rx="2" fill="#fff" stroke="#111" stroke-width="2.5"/>' +
      '<text x="329" y="59" text-anchor="middle" ' + F + ' font-size="11" fill="#111">WORTLEY ROAD</text>' +
      '<text x="329" y="70" text-anchor="middle" ' + F + ' font-size="8" fill="#d41a1f">HIGH GREEN S35</text>' +
      '<rect x="268" y="78" width="128" height="24" rx="2" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="332" y="94" text-anchor="middle" ' + F + ' font-size="11" fill="#111">THOMPSON HILL</text>',
      sky("amks5", "#86b0d6", "#eadfc8"));
  }

  window.SCENES = { amkstation, amkarch, amkgrapes, amkleadmill, amkcorner };
})();
