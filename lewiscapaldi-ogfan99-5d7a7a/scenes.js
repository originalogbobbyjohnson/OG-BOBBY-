/* Lewis Capaldi game (GENRES: POP; INTERNATIONAL region: UK + EUROPE; Bathgate, West Lothian EH48 - born in Glasgow, raised in Bathgate,
   sang in Bathgate pubs from the age of nine, went to St Kentigern's Academy in Blackburn, his dad a fishmonger).
   Rooms: Bathgate station (ScotRail, Airdrie-Bathgate line), St Kentigern's Academy in Blackburn (his school), a Bathgate pub back room
   with the little stage where he sang as a kid (no real pub named), the festival stage on Glasgow Green with the People's Palace
   glasshouse behind (hometown headline shows), and George Street at Hopetoun Street in Bathgate, the old Bathgate Academy clock
   tower behind. CSS classes prefixed "lcp" (the page's anim-train is kept). No logos (no ScotRail mark, no festival name), no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lcpTw{0%,100%{opacity:1}50%{opacity:.25}}.lcpTw{animation:lcpTw 1.8s ease-in-out infinite}.lcpT2{animation-delay:.6s}.lcpT3{animation-delay:1.2s}' +
    '@keyframes lcpBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.lcpBob{animation:lcpBob .8s ease-in-out infinite}.lcpBb2{animation-delay:.4s}' +
    '@keyframes lcpNote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-70px);opacity:0}}.lcpNote{animation:lcpNote 3.2s linear infinite}.lcpN2{animation-delay:1.1s}.lcpN3{animation-delay:2.2s}' +
    '@keyframes lcpCloud{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.lcpCloud{animation:lcpCloud 30s linear infinite}.lcpC2{animation-delay:-15s}' +
    '@keyframes lcpBird{0%{transform:translate(-40px,0)}50%{transform:translate(220px,-12px)}100%{transform:translate(460px,6px)}}.lcpBird{animation:lcpBird 15s linear infinite}.lcpB2{animation-delay:-7s}' +
    '@keyframes lcpBeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.lcpBeam{transform-box:fill-box;transform-origin:50% 100%;animation:lcpBeam 3s ease-in-out infinite}.lcpBm2{animation-delay:-1.5s}' +
    '@keyframes lcpFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.lcpFlag{transform-box:fill-box;transform-origin:0 50%;animation:lcpFlag 1.6s ease-in-out infinite}' +
    '@keyframes lcpSpark{0%,100%{transform:scale(.6);opacity:.3}50%{transform:scale(1.2);opacity:1}}.lcpSpark{transform-box:fill-box;transform-origin:50% 50%;animation:lcpSpark 1.4s ease-in-out infinite}.lcpS2{animation-delay:.5s}' +
    '@keyframes lcpRain{0%{transform:translateY(-20px);opacity:0}20%{opacity:.7}100%{transform:translateY(60px);opacity:0}}.lcpRain{animation:lcpRain 1.2s linear infinite}.lcpR2{animation-delay:.4s}.lcpR3{animation-delay:.8s}' +
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
  const BLUE = "#7ec8e3", GOLD = "#f2c14e", PINK = "#e85d75", NAVY = "#1e3a6e", STONE = "#c9b48a", STONE2 = "#a8946a";
  const cloud = (x, y, cls) => '<g class="lcpCloud' + (cls || '') + '" fill="#fff" opacity=".8"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9"/><ellipse cx="' + (x + 16) + '" cy="' + (y - 7) + '" rx="16" ry="9"/><ellipse cx="' + (x - 12) + '" cy="' + (y - 4) + '" rx="12" ry="7"/></g>';
  const bird = (x, y, cls) => '<g class="lcpBird' + (cls || '') + '"><path d="M' + x + ' ' + y + 'q6 -6 12 0q6 -6 12 0" stroke="#2a2a2a" stroke-width="2.2" fill="none" stroke-linecap="round"/></g>';
  const note = (x, y, cls, col) => '<g class="lcpNote' + (cls || '') + '"><path d="M' + x + ' ' + y + 'v-14l10 -3v14" stroke="' + col + '" stroke-width="2" fill="none"/><ellipse cx="' + (x - 3) + '" cy="' + y + '" rx="4" ry="3" fill="' + col + '"/><ellipse cx="' + (x + 7) + '" cy="' + (y - 3) + '" rx="4" ry="3" fill="' + col + '"/></g>';
  const people = (y, n, x0, x1, cols) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = x0 + 8 + i * ((x1 - x0) / n), f = cols[i % cols.length];
      s += '<g class="lcpBob' + (i % 2 ? ' lcpBb2' : '') + '" fill="' + f + '"><circle cx="' + x + '" cy="' + (y - 14) + '" r="5"/><rect x="' + (x - 6) + '" y="' + (y - 8) + '" width="12" height="18" rx="5"/></g>';
    }
    return s;
  };
  const hills = (y, col, col2) => '<path d="M0 ' + y + 'q60 -30 130 -12q70 -26 150 -4q60 -20 120 4v' + (260 - y) + 'h-400z" fill="' + col + '"/>' +
    '<path d="M0 ' + (y + 14) + 'q80 -18 170 -4q90 -16 230 6v' + (246 - y) + 'h-400z" fill="' + col2 + '"/>';
  const rain = () => '<g stroke="#cfe0ea" stroke-width="1.2" opacity=".7">' +
    [20, 90, 160, 230, 300, 370].map((x, i) => '<path class="lcpRain' + (i % 3 === 1 ? ' lcpR2' : i % 3 === 2 ? ' lcpR3' : '') + '" d="M' + x + ' 10l-4 12"/>').join("") + '</g>';

  /* 1. Bathgate station: the open-air platforms at the end of the line, a navy-blue Scottish commuter train pulling in, the Bathgate Hills behind */
  function lcpstation() {
    let wins = "";
    for (let x = 50; x < 290; x += 30) wins += '<rect x="' + x + '" y="138" width="20" height="18" rx="3" fill="#cfe2ea"/>';
    const train = '<g class="anim-train">' +
      '<rect x="24" y="128" width="284" height="62" rx="8" fill="' + NAVY + '" stroke="#0e1f40" stroke-width="2"/>' +
      '<path d="M120 190l60 -62h24l-60 62z" fill="#f4f4f4" opacity=".9"/><path d="M180 190l60 -62h-24l-60 62z" fill="#f4f4f4" opacity=".9"/>' +
      '<path d="M308 128q24 4 26 30v32h-26z" fill="#ffd200" stroke="#2a2a2a" stroke-width="2"/>' +
      '<path d="M311 136q15 3 18 22h-18z" fill="#14182a"/>' + wins +
      '<g fill="#cfd6e3"><rect x="36" y="136" width="11" height="40" rx="1"/><rect x="290" y="136" width="11" height="40" rx="1"/></g>' +
      '<rect x="320" y="178" width="9" height="5" fill="#fff6c8"/>' +
      '<g fill="#1b1b1b"><circle cx="64" cy="194" r="7"/><circle cx="88" cy="194" r="7"/><circle cx="242" cy="194" r="7"/><circle cx="266" cy="194" r="7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lcps1)"/>' + cloud(70, 26, '') + cloud(300, 40, ' lcpC2') + bird(0, 50, '') +
      hills(84, "#6f8a4e", "#55703c") +
      '<g fill="#5a6066"><rect x="60" y="70" width="4" height="50"/><rect x="200" y="70" width="4" height="50"/><rect x="340" y="70" width="4" height="50"/></g>' +
      '<path d="M0 74h400" stroke="#5a6066" stroke-width="2"/>' +
      '<rect x="0" y="108" width="400" height="12" fill="#b8b2a4"/><rect x="0" y="106" width="400" height="3" fill="#f2d24a"/>' +
      '<rect x="40" y="84" width="70" height="22" fill="#c9d6de" stroke="#5c6670" stroke-width="2"/><rect x="36" y="80" width="78" height="6" fill="#5c6670"/>' +
      '<rect x="0" y="120" width="400" height="86" fill="#4a463f"/>' +
      '<path d="M0 198h400M0 204h400" stroke="#9aa0a6" stroke-width="2"/>' +
      train +
      '<rect x="0" y="206" width="400" height="54" fill="#bdb6a8"/><rect x="0" y="206" width="400" height="4" fill="#f2d24a"/>' +
      '<rect x="146" y="242" width="4" height="18" fill="#3c4148"/><rect x="250" y="242" width="4" height="18" fill="#3c4148"/>' +
      /* station sign */
      '<rect x="116" y="212" width="168" height="32" rx="3" fill="' + NAVY + '" stroke="#f4f4f4" stroke-width="2"/>' +
      '<text x="200" y="234" text-anchor="middle" ' + F + ' font-size="16" fill="#ffffff">Bathgate</text>',
      sky("lcps1", "#8fb3d6", "#e6eef2"));
  }

  /* 2. St Kentigern's Academy, Blackburn: the modern school blocks, the music room lit, a guitar case by the door */
  function lcpschool() {
    let wins = "";
    for (let x = 40; x < 360; x += 36) wins += '<rect x="' + x + '" y="100" width="28" height="24" fill="#2c3440" stroke="#e8e4da" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lcps2)"/>' + cloud(80, 26, '') + cloud(300, 38, ' lcpC2') + bird(0, 44, '') +
      '<g fill="#3f6a34"><circle cx="16" cy="104" r="22"/><circle cx="386" cy="100" r="22"/></g>' +
      '<rect x="24" y="88" width="352" height="96" fill="#d9d2c4"/><rect x="20" y="82" width="360" height="8" fill="#4a5a6a"/>' +
      '<rect x="24" y="136" width="352" height="48" fill="#8a6a54"/>' + wins +
      /* music room window lit, notes rising */
      '<rect x="292" y="146" width="56" height="26" fill="#f6c45a" stroke="#e8e4da" stroke-width="2"/>' +
      note(306, 140, '', '#fff') + note(326, 132, ' lcpN2', BLUE) + note(316, 144, ' lcpN3', PINK) +
      '<rect x="60" y="146" width="56" height="26" fill="#2c3440" stroke="#e8e4da" stroke-width="2"/>' +
      /* entrance with a blue canopy */
      '<rect x="176" y="140" width="48" height="44" fill="#2e4a6a"/><rect x="166" y="132" width="68" height="10" fill="' + NAVY + '"/>' +
      /* guitar case by the door */
      '<path d="M236 184l6 -30q4 -8 10 0l6 30z" fill="#2a2a2a" stroke="#555"/>' +
      '<rect x="0" y="184" width="400" height="10" fill="#9a958a"/><rect x="0" y="194" width="400" height="66" fill="#6f9a4a"/>' +
      people(212, 5, 30, 150, ["#1e3a6e", "#2a2a2a"]) + people(212, 4, 270, 380, ["#2a2a2a", "#1e3a6e"]) +
      '<rect x="110" y="222" width="180" height="26" rx="3" fill="' + NAVY + '" stroke="#f4f4f4" stroke-width="1.5"/>' +
      '<text x="200" y="239" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">ST KENTIGERN\'S ACADEMY</text>' +
      '<rect x="14" y="18" width="110" height="24" rx="2" fill="#fff" stroke="#111" stroke-width="2.5"/><text x="69" y="34" text-anchor="middle" ' + F + ' font-size="10" fill="#111">BLACKBURN</text>',
      sky("lcps2", "#a9c8e2", "#f1ece0"));
  }

  /* 3. A Bathgate pub back room: the little corner stage, one mic, a stool and an acoustic guitar, the locals singing along */
  function lcppub() {
    return svg(
      '<rect width="400" height="260" fill="#3a2418"/>' +
      /* wood panelling */
      (function () { let s = ""; for (let x = 0; x < 400; x += 40) s += '<rect x="' + x + '" y="60" width="38" height="130" fill="#4a2e1e" stroke="#2a170f"/>'; return s; })() +
      '<rect x="0" y="0" width="400" height="60" fill="#5a3a26"/><rect x="0" y="56" width="400" height="6" fill="#2a170f"/>' +
      /* warm lamps */
      '<g class="lcpTw" fill="#ffd27a"><circle cx="60" cy="40" r="8"/><circle cx="340" cy="40" r="8"/></g><g class="lcpTw lcpT2" fill="#ffd27a"><circle cx="200" cy="34" r="8"/></g>' +
      '<g fill="#2a170f"><rect x="58" y="0" width="4" height="32"/><rect x="198" y="0" width="4" height="26"/><rect x="338" y="0" width="4" height="32"/></g>' +
      /* framed pictures: a saltire and a guitar */
      '<rect x="40" y="76" width="54" height="36" fill="#005eb8" stroke="#c9a24a" stroke-width="3"/><path d="M43 78l48 32M91 78l-48 32" stroke="#fff" stroke-width="5"/>' +
      '<rect x="306" y="76" width="54" height="36" fill="#f4f1ea" stroke="#c9a24a" stroke-width="3"/><rect x="331" y="80" width="2" height="16" fill="#4a2e1e"/><circle cx="332" cy="96" r="5" fill="#b8742a"/><circle cx="332" cy="104" r="6" fill="#b8742a"/>' +
      /* stage spotlight */
      '<g class="lcpBeam"><path d="M200 40l-40 140h80z" fill="#fff4c0" opacity=".18"/></g>' +
      /* the corner stage */
      '<rect x="120" y="170" width="160" height="20" fill="#2a170f"/><rect x="120" y="166" width="160" height="6" fill="#6a4a30"/>' +
      '<rect x="199" y="110" width="2" height="56" fill="#aaa"/><rect x="194" y="106" width="12" height="8" rx="3" fill="#222"/>' +
      '<rect x="170" y="140" width="22" height="4" fill="#6a4a30"/><rect x="179" y="144" width="4" height="22" fill="#6a4a30"/>' +
      '<rect x="235" y="100" width="4" height="40" fill="#4a2e1e"/><circle cx="237" cy="138" r="9" fill="#c98a3a" stroke="#6a3a10"/><circle cx="237" cy="154" r="12" fill="#c98a3a" stroke="#6a3a10"/><circle cx="237" cy="148" r="4" fill="#2a170f"/>' +
      note(210, 100, '', '#fff') + note(230, 92, ' lcpN2', BLUE) + note(190, 104, ' lcpN3', GOLD) +
      /* the locals at the tables */
      '<rect x="0" y="190" width="400" height="70" fill="#2a170f"/>' +
      '<g fill="#6a4a30"><rect x="20" y="206" width="70" height="8"/><rect x="310" y="206" width="70" height="8"/></g>' +
      people(206, 3, 10, 100, ["#1a1a22", "#3a2a2a"]) + people(206, 3, 300, 390, ["#3a2a2a", "#1a1a22"]) +
      '<rect x="120" y="222" width="160" height="26" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      '<text x="200" y="239" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">SINGING SINCE AGE NINE</text>',
      '');
  }

  /* 4. Glasgow Green: the big festival stage, the crowd, the People's Palace glasshouse and the terracotta Doulton Fountain behind */
  function lcpgreen() {
    let panes = "";
    for (let x = 262; x < 380; x += 12) panes += '<path d="M' + x + ' 150v-40" stroke="#cfe6f0" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lcps4)"/>' +
      '<g class="lcpTw" fill="#fff"><circle cx="40" cy="20" r="1.5"/><circle cx="330" cy="26" r="1.5"/></g><g class="lcpTw lcpT3" fill="#fff"><circle cx="150" cy="14" r="1.2"/><circle cx="380" cy="12" r="1.4"/></g>' +
      /* People's Palace: red sandstone front, the glass winter garden behind it */
      '<rect x="230" y="96" width="44" height="56" fill="#a5523a"/><path d="M226 96h52l-26 -14z" fill="#7a3a28"/>' +
      '<path d="M262 150v-36q60 -34 120 0v36z" fill="#9fc9dc" opacity=".8" stroke="#e8f2f6" stroke-width="2"/>' + panes +
      /* the Doulton Fountain: terracotta tiers */
      '<rect x="40" y="138" width="80" height="12" fill="#c8643a"/><rect x="56" y="118" width="48" height="20" fill="#d47a4a"/><rect x="70" y="96" width="20" height="22" fill="#c8643a"/><path d="M80 96l-8 -12h16z" fill="#d47a4a"/>' +
      /* the stage with light beams */
      '<g class="lcpBeam"><path d="M150 110l-40 -100h24z" fill="' + BLUE + '" opacity=".35"/></g>' +
      '<g class="lcpBeam lcpBm2"><path d="M210 110l30 -100h22z" fill="' + PINK + '" opacity=".35"/></g>' +
      '<rect x="120" y="108" width="120" height="64" fill="#1a1a22"/><path d="M112 108h136l-12 -18h-112z" fill="#2a2a36"/>' +
      '<g fill="#3a3a48"><rect x="112" y="108" width="10" height="70"/><rect x="238" y="108" width="10" height="70"/></g>' +
      '<rect x="128" y="116" width="104" height="44" fill="' + NAVY + '"/>' +
      '<g class="lcpTw" fill="' + GOLD + '"><circle cx="140" cy="100" r="3"/><circle cx="220" cy="100" r="3"/></g><g class="lcpTw lcpT2" fill="' + GOLD + '"><circle cx="180" cy="98" r="3"/></g>' +
      note(160, 150, '', '#fff') + note(190, 142, ' lcpN2', BLUE) + note(206, 154, ' lcpN3', PINK) +
      /* the crowd on the grass */
      '<rect x="0" y="172" width="400" height="88" fill="#2f4a26"/>' +
      people(196, 14, 0, 400, ["#1a1a22", "#2a2236", "#1e3a6e"]) + people(222, 12, 10, 390, ["#2a2236", "#1a1a22"]) +
      '<rect x="14" y="230" width="124" height="24" rx="2" fill="#fff" stroke="#111" stroke-width="2.5"/><text x="76" y="246" text-anchor="middle" ' + F + ' font-size="10" fill="#111">GLASGOW GREEN</text>',
      sky("lcps4", "#141a3a", "#4a3a5a"));
  }

  /* 5. George Street at Hopetoun Street, Bathgate EH48: a tagged sandstone wall, the old Bathgate Academy clock tower behind, light rain */
  function lcpcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#lcps5)"/>' + cloud(70, 22, '') + cloud(260, 34, ' lcpC2') + rain() + bird(0, 52, ' lcpB2') +
      /* old Bathgate Academy: pale ashlar front, two columns, clock tower with open belfry */
      '<rect x="60" y="92" width="200" height="48" fill="' + STONE + '"/><rect x="56" y="86" width="208" height="8" fill="' + STONE2 + '"/>' +
      '<rect x="134" y="62" width="52" height="30" fill="' + STONE + '"/><path d="M130 62h60l-30 -12z" fill="' + STONE2 + '"/>' +
      '<g fill="' + STONE2 + '"><rect x="146" y="98" width="8" height="40"/><rect x="166" y="98" width="8" height="40"/></g>' +
      '<rect x="146" y="18" width="28" height="34" fill="' + STONE + '"/><rect x="142" y="14" width="36" height="6" fill="' + STONE2 + '"/>' +
      '<rect x="152" y="22" width="16" height="12" fill="#3a3a44"/><path d="M146 14l14 -12l14 12z" fill="#6a6a72"/>' +
      '<circle cx="160" cy="44" r="6" fill="#f4f1ea" stroke="#333"/><path d="M160 44v-4M160 44h3" stroke="#111" stroke-width="1"/>' +
      '<rect x="0" y="138" width="400" height="10" fill="#7a8a6a"/>' +
      /* the sandstone wall with the tags */
      '<rect x="0" y="146" width="400" height="58" fill="#b08e64"/>' +
      (function () { let s = ""; for (let y = 146; y < 204; y += 12) for (let x = ((y / 12) % 2) * 16; x < 400; x += 32) s += '<rect x="' + x + '" y="' + y + '" width="30" height="10" rx="2" fill="#c4a478" opacity=".55"/>'; return s; })() +
      tag("EH48", 18, 180, 22, BLUE, -3) +
      tag("CAPALDI", 86, 194, 36, GOLD, -4) +
      tag("BATHGATE", 18, 200, 12, PINK, -2) +
      '<g class="lcpSpark"><path d="M262 160l2 5 5 1 -4 3 1 5 -4 -3 -4 3 1 -5 -4 -3 5 -1z" fill="#fff"/></g>' +
      '<g class="lcpSpark lcpS2"><path d="M80 162l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1z" fill="#fff"/></g>' +
      '<rect x="0" y="204" width="400" height="8" fill="#b9b3a6"/><rect x="0" y="212" width="400" height="48" fill="#3d3f45"/>' +
      '<path d="M0 238h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      /* Scottish street name plates: white, black letters */
      '<rect x="360" y="40" width="5" height="172" fill="#2a2a2a"/>' +
      '<rect x="270" y="44" width="126" height="30" rx="2" fill="#fff" stroke="#111" stroke-width="2.5"/>' +
      '<text x="333" y="59" text-anchor="middle" ' + F + ' font-size="11" fill="#111">GEORGE STREET</text>' +
      '<text x="333" y="70" text-anchor="middle" ' + F + ' font-size="8" fill="#1e3a6e">BATHGATE EH48</text>' +
      '<rect x="270" y="78" width="126" height="24" rx="2" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="333" y="94" text-anchor="middle" ' + F + ' font-size="11" fill="#111">HOPETOUN STREET</text>',
      sky("lcps5", "#9aaabb", "#e0dcd2"));
  }

  window.SCENES = { lcpstation, lcpschool, lcppub, lcpgreen, lcpcorner };
})();
