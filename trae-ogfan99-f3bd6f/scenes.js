/* trae scenes (Regions tab: Houston + Texas; Southwest Houston, around Fondren Rd and W Airport Blvd, where ABC13 says he grew up). CSS classes and ids prefixed tr- (the page's own anim-train is kept).
   1 METRO 63 Fondren bus pulling into the Fondren Rd @ W Airport Blvd stop: two-story brick apartments, crepe myrtles, the METRO stop flag with the 63.
   2 Relief Gang: his Hurricane Harvey rescue crew, a flat-bottom boat with RELIEF GANG on the side pushing through a flooded street in the rain.
   3 Trae Day: the city's day for him (2008 on), the back-to-school giveaway in the park: banner, tables of backpacks, balloons, confetti.
   4 Pop Trunk Wave: a candy-blue slab at night, swangas poking, the trunk lid rising and falling with a neon ABN sign inside, bubble light on the dash.
   5 Fondren Rd and W Airport Blvd: green signs, TRAE tagged on the wall, the Waterwall's horseshoe and arches far off behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes trrain{from{transform:translateY(-40px)}to{transform:translateY(40px)}}.tr-rain{animation:trrain .6s linear infinite}.tr-rain2{animation-delay:-.3s}' +
    '@keyframes trbob{0%,100%{transform:translate(0,0) rotate(-1.5deg)}50%{transform:translate(6px,3px) rotate(1.5deg)}}.tr-bob{transform-box:fill-box;transform-origin:50% 100%;animation:trbob 2.6s ease-in-out infinite}' +
    '@keyframes trrip{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.tr-rip{animation:trrip 2.2s ease-in-out infinite}.tr-rip2{animation-delay:-1.1s}' +
    '@keyframes trballoon{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-8px) rotate(3deg)}}.tr-bal{transform-box:fill-box;transform-origin:50% 100%;animation:trballoon 3s ease-in-out infinite}.tr-bal2{animation-delay:-1s}.tr-bal3{animation-delay:-2s}' +
    '@keyframes trconf{from{transform:translateY(-30px)}to{transform:translateY(240px)}}.tr-conf{animation:trconf 4s linear infinite}.tr-conf2{animation-delay:-1.3s}.tr-conf3{animation-delay:-2.6s}' +
    '@keyframes trflag{0%,100%{transform:skewY(0)}50%{transform:skewY(2deg)}}.tr-flag{transform-box:fill-box;transform-origin:0 50%;animation:trflag 2s ease-in-out infinite}' +
    '@keyframes trlid{0%,100%{transform:rotate(0)}50%{transform:rotate(-26deg)}}.tr-lid{transform-box:fill-box;transform-origin:0% 100%;animation:trlid 2.4s ease-in-out infinite}' +
    '@keyframes trchase{0%,100%{fill:#7fd4ff}50%{fill:#ffd23f}}.tr-chase{animation:trchase .8s steps(1) infinite}.tr-chase2{animation-delay:-.4s}' +
    '@keyframes trbub{0%,100%{opacity:.35}50%{opacity:1}}.tr-bub{animation:trbub 1s ease-in-out infinite}' +
    '@keyframes trbass{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}.tr-bass{transform-box:fill-box;transform-origin:50% 50%;animation:trbass .5s ease-in-out infinite}' +
    '@keyframes trfall{from{transform:translateY(0)}to{transform:translateY(14px)}}.tr-fall{animation:trfall .9s linear infinite}.tr-fall2{animation-delay:-.45s}' +
    '@keyframes trspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tr-spr{animation:trspray 1.4s ease-out infinite}.tr-spr2{animation-delay:.45s}' +
    '@keyframes trleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.tr-leaf{transform-box:fill-box;transform-origin:50% 100%;animation:trleaf 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11.5" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const METRO = "#1f4e79", BLUE = "#3d8bff", GOLD = "#ffc83d", GREEN = "#9be15d";
  /* crepe myrtle: thin multi-trunk, pink crown */
  const myrtle = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0v-30M0 -10l-10 -22M0 -12l10 -20" stroke="#8a7a6a" stroke-width="4" fill="none"/>' +
    '<g class="tr-leaf"><ellipse cx="0" cy="-40" rx="30" ry="18" fill="#e070a8"/><ellipse cx="-16" cy="-34" rx="16" ry="11" fill="#c95a92"/><ellipse cx="16" cy="-36" rx="16" ry="11" fill="#f08cbc"/></g></g>';
  /* a person seen from behind/side: cap, round head (no face), body */
  const person = (x, y, shirt, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')"><rect x="-7" y="-2" width="14" height="22" rx="4" fill="' + shirt + '"/><circle cx="0" cy="-9" r="7" fill="#6b4a33"/><path d="M-8 -12q8 -10 16 0z" fill="#1d2833"/><rect x="-6" y="20" width="5" height="12" fill="#2a3240"/><rect x="1" y="20" width="5" height="12" fill="#2a3240"/></g>';
  /* low slab: long body, swangas poking out of the wheels */
  const swanga = (cx, cy) => '<g><circle cx="' + cx + '" cy="' + cy + '" r="13" fill="#1a1a1a"/><circle cx="' + cx + '" cy="' + cy + '" r="8" fill="#d8dde2" stroke="#8a9096" stroke-width="1.5"/>' +
    '<path d="M' + cx + ' ' + cy + 'h-22" stroke="#eef2f5" stroke-width="4" stroke-linecap="round"/><circle cx="' + (cx - 22) + '" cy="' + cy + '" r="3" fill="#fff"/></g>';

  /* 1. METRO 63 Fondren at Fondren Rd @ W Airport Blvd */
  function trstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (62 + i * 36) + '" y="148" width="30" height="22" rx="3" fill="#1d2833"/>').join("");
    const bus = '<g class="anim-train"><rect x="28" y="138" width="318" height="70" rx="10" fill="#f4f5f3" stroke="#8f979e" stroke-width="2"/>' + win +
      '<rect x="34" y="148" width="22" height="48" rx="2" fill="#1d2833"/><rect x="28" y="178" width="318" height="8" fill="' + METRO + '"/><rect x="28" y="188" width="318" height="3" fill="#e31837"/>' +
      '<rect x="32" y="140" width="120" height="10" rx="2" fill="#111"/><text x="92" y="148" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">63 FONDREN</text>' +
      '<circle cx="80" cy="210" r="12" fill="#222"/><circle cx="80" cy="210" r="5" fill="#9aa1a8"/><circle cx="294" cy="210" r="12" fill="#222"/><circle cx="294" cy="210" r="5" fill="#9aa1a8"/>' +
      '<circle cx="32" cy="198" r="3.5" fill="#fff6c2"/></g>';
    const apt = (x, body) => '<g transform="translate(' + x + ' 0)"><rect x="0" y="70" width="120" height="62" fill="' + body + '"/><rect x="0" y="66" width="120" height="6" fill="#5a4a40"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (10 + i * 28) + '" y="80" width="16" height="14" fill="#f3d79a" opacity=".85"/><rect x="' + (10 + i * 28) + '" y="106" width="16" height="14" fill="#2c3a48"/>').join("") +
      '<path d="M0 100h120" stroke="#e8e0d4" stroke-width="3"/><path d="M0 98h120" stroke="#6a5a50" stroke-width="1"/></g>';
    return svg('<rect width="400" height="260" fill="url(#trs1)"/>' + stars(10) +
      '<circle cx="330" cy="40" r="16" fill="#ffe1a8" opacity=".9"/>' +
      apt(-10, "#b0644a") + apt(130, "#c9845e") + apt(270, "#a85a44") +
      myrtle(120, 132, 0.9) + myrtle(262, 132, 0.8) +
      '<rect x="0" y="128" width="400" height="10" fill="#cfc9bd"/><rect x="0" y="138" width="400" height="122" fill="#55565c"/><path d="M0 236h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="22 16"/>' +
      bus +
      '<rect x="374" y="98" width="5" height="118" fill="#6b7178"/><rect x="350" y="72" width="48" height="50" rx="3" fill="' + METRO + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="374" y="86" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">METRO</text><rect x="360" y="92" width="28" height="22" rx="3" fill="#fff"/><text x="374" y="108" text-anchor="middle" ' + font + ' font-size="13" fill="' + METRO + '">63</text>' +
      sign(6, 8, 104, "FONDREN RD") + sign(6, 34, 128, "W AIRPORT BLVD") + '<rect x="56" y="56" width="4" height="10" fill="#6b7178"/>',
      sky("trs1", "#1c2a4a", "#e8a77a"));
  }

  /* 2. Relief Gang: the boat in the flooded street */
  function trrelief() {
    const rain = cls => '<g class="' + cls + '">' + Array.from({ length: 34 }, (_, i) => '<path d="M' + ((i * 53) % 410) + ' ' + ((i * 37) % 200) + 'l-6 16" stroke="#cfe0ee" stroke-width="1.5" opacity=".55"/>').join("") + '</g>';
    const house = (x, y, body, roof) => '<g><path d="M' + (x - 6) + ' ' + y + 'l' + 46 + ' -26l46 26z" fill="' + roof + '"/><rect x="' + x + '" y="' + y + '" width="80" height="40" fill="' + body + '"/><rect x="' + (x + 12) + '" y="' + (y + 8) + '" width="16" height="14" fill="#2c3a48"/><rect x="' + (x + 52) + '" y="' + (y + 8) + '" width="16" height="14" fill="#2c3a48"/></g>';
    const boat = '<g class="tr-bob"><path d="M110 196h190l-20 26h-150z" fill="#4a5a68" stroke="#26313a" stroke-width="2"/><path d="M110 196h190" stroke="#8fa3b3" stroke-width="3"/>' +
      '<text x="205" y="214" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">RELIEF GANG</text>' +
      person(150, 166, "#ff7a1a") + person(196, 168, "#ff7a1a", 0.9) + person(250, 166, BLUE) +
      '<rect x="268" y="150" width="4" height="46" fill="#26313a"/><path d="M272 150h30l-6 8l6 8h-30z" class="tr-flag" fill="' + GOLD + '"/>' +
      '<rect x="292" y="190" width="14" height="10" rx="2" fill="#2a2a2a"/></g>';
    const water = '<rect x="0" y="176" width="400" height="84" fill="#6d6248"/>' +
      '<g class="tr-rip"><path d="M0 190q20 -5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#a89b78" stroke-width="2" fill="none"/></g>' +
      '<g class="tr-rip tr-rip2"><path d="M-20 232q20 -5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#a89b78" stroke-width="2" fill="none"/></g>';
    return svg('<rect width="400" height="260" fill="url(#trs2)"/>' +
      '<ellipse cx="90" cy="40" rx="90" ry="26" fill="#5a6470"/><ellipse cx="290" cy="34" rx="120" ry="30" fill="#4c5560"/><ellipse cx="200" cy="58" rx="140" ry="22" fill="#66707c"/>' +
      house(10, 150, "#c9b79a", "#5a4a40") + house(150, 152, "#a9b8c4", "#3e4a56") + house(290, 148, "#d8c8a8", "#6a4a3a") +
      '<rect x="64" y="120" width="4" height="60" fill="#5a5a5a"/><circle cx="66" cy="120" r="4" fill="#ffe9a8"/>' +
      water + boat + rain("tr-rain") + rain("tr-rain tr-rain2"),
      sky("trs2", "#3a424c", "#8c96a0"));
  }

  /* 3. Trae Day: the giveaway in the park */
  function traeday() {
    const bag = (x, y, c) => '<g><rect x="' + x + '" y="' + y + '" width="16" height="20" rx="4" fill="' + c + '"/><rect x="' + (x + 3) + '" y="' + (y + 10) + '" width="10" height="7" rx="2" fill="#000" opacity=".25"/><path d="M' + (x + 4) + ' ' + y + 'q4 -6 8 0" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
    const table = x => '<g><rect x="' + x + '" y="186" width="110" height="8" fill="#f2f2f2"/><rect x="' + (x + 6) + '" y="194" width="4" height="26" fill="#888"/><rect x="' + (x + 100) + '" y="194" width="4" height="26" fill="#888"/>' +
      [0, 1, 2, 3, 4, 5].map(i => bag(x + 2 + i * 18, 166, ["#e63946", BLUE, GOLD, "#2a9d8f", "#9b5de5", "#ff7a1a"][i])).join("") + '</g>';
    const balloon = (x, y, c, cls) => '<g class="tr-bal ' + cls + '"><path d="M' + x + ' ' + (y + 22) + 'q-4 20 2 40" stroke="#ddd" stroke-width="1" fill="none"/><ellipse cx="' + x + '" cy="' + y + '" rx="12" ry="15" fill="' + c + '"/><ellipse cx="' + (x - 4) + '" cy="' + (y - 5) + '" rx="3" ry="5" fill="#fff" opacity=".45"/></g>';
    const conf = cls => '<g class="tr-conf ' + cls + '">' + Array.from({ length: 16 }, (_, i) => '<rect x="' + ((i * 61) % 400) + '" y="' + ((i * 29) % 60) + '" width="5" height="3" fill="' + ["#e63946", GOLD, BLUE, GREEN][i % 4] + '" transform="rotate(' + (i * 37) + ' ' + ((i * 61) % 400) + ' ' + ((i * 29) % 60) + ')"/>').join("") + '</g>';
    return svg('<rect width="400" height="260" fill="url(#trs3)"/>' +
      '<circle cx="60" cy="40" r="20" fill="#fff3b0"/>' +
      '<path d="M0 150q100 -24 200 -6t200 -4v120h-400z" fill="#6aa84f"/><rect x="0" y="204" width="400" height="56" fill="#5b9a43"/>' +
      '<g transform="translate(330 150)"><rect x="-4" y="-30" width="8" height="34" fill="#6b4a33"/><g class="tr-leaf"><circle cx="0" cy="-44" r="26" fill="#3f6b35"/><circle cx="-16" cy="-34" r="16" fill="#4c7d40"/></g></g>' +
      '<rect x="40" y="62" width="5" height="100" fill="#ddd"/><rect x="355" y="62" width="5" height="100" fill="#ddd"/>' +
      '<g class="tr-flag"><rect x="45" y="66" width="310" height="40" rx="3" fill="' + BLUE + '" stroke="#fff" stroke-width="2"/><text x="200" y="96" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="28" fill="#fff" letter-spacing="3">TRAE DAY</text></g>' +
      table(30) + table(150) +
      person(90, 210, "#2a9d8f") + person(214, 212, "#e63946", 0.9) + person(340, 206, GOLD) +
      '<rect x="270" y="150" width="40" height="44" fill="#222"/><circle cx="290" cy="166" r="9" class="tr-bass" fill="#555"/><circle cx="290" cy="184" r="5" fill="#555"/>' +
      balloon(24, 120, "#e63946", "") + balloon(372, 116, GOLD, "tr-bal2") + balloon(386, 128, BLUE, "tr-bal3") + balloon(12, 132, GREEN, "tr-bal2") +
      conf("") + conf("tr-conf2") + conf("tr-conf3"),
      sky("trs3", "#5fb4f0", "#d8f0ff"));
  }

  /* 4. Pop Trunk Wave: trunk sign glowing at night */
  function trtrunk() {
    const body = '<rect x="40" y="150" width="300" height="40" rx="10" fill="' + BLUE + '"/><path d="M110 150l26 -30h110l30 30z" fill="' + BLUE + '"/><path d="M140 122h44v26h-62z" fill="#cfe9ff" opacity=".7"/><path d="M192 122h50l22 26h-72z" fill="#cfe9ff" opacity=".7"/>' +
      '<path d="M46 166h290" stroke="#fff" stroke-width="2" opacity=".5"/><path d="M50 158h120" stroke="#bfe0ff" stroke-width="5" opacity=".35"/>' +
      '<rect x="330" y="160" width="14" height="10" rx="2" fill="#fff6c2"/><rect x="36" y="160" width="10" height="10" rx="2" fill="#e63946"/>' +
      '<circle cx="200" cy="140" r="5" class="tr-bub" fill="#ff5a5a"/>';
    /* trunk at the back (left side): the lid lifts, the lit sign inside reads ABN */
    const trunk = '<rect x="40" y="150" width="70" height="22" fill="#14181f"/>' +
      '<rect x="46" y="153" width="58" height="16" rx="2" fill="#0b0d12"/><text x="75" y="166" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" class="tr-chase" fill="#7fd4ff">ABN</text>' +
      '<circle cx="54" cy="161" r="2" class="tr-chase tr-chase2" fill="#ffd23f"/><circle cx="96" cy="161" r="2" class="tr-chase" fill="#ffd23f"/>' +
      '<g class="tr-lid"><rect x="40" y="140" width="72" height="12" rx="4" fill="#2f6fd8" stroke="#1a3f80" stroke-width="1.5"/></g>';
    const lot = '<rect x="0" y="196" width="400" height="64" fill="#2b2d33"/>' + [40, 140, 240, 340].map(x => '<path d="M' + x + ' 200l-10 60" stroke="#e8e8e8" stroke-width="3" opacity=".6"/>').join("");
    const pole = x => '<g><rect x="' + x + '" y="40" width="5" height="156" fill="#444"/><rect x="' + (x - 14) + '" y="36" width="34" height="6" fill="#555"/><path d="M' + (x - 14) + ' 42l-30 154h96l-30 -154z" fill="#ffe9a8" opacity=".08"/></g>';
    return svg('<rect width="400" height="260" fill="url(#trs4)"/>' + stars(26) +
      '<path d="M0 120h30v-30h24v-20h20v50h40v-36h30v36h260v20h-404z" fill="#141826"/>' +
      pole(330) + lot +
      '<ellipse cx="190" cy="206" rx="170" ry="8" fill="#000" opacity=".4"/>' +
      body + trunk + swanga(100, 192) + swanga(286, 192),
      sky("trs4", "#070b18", "#24304a"));
  }

  /* 5. Fondren Rd and W Airport Blvd, the Waterwall far behind */
  function trcorner() {
    const brick = Array.from({ length: 10 }, (_, r) => Array.from({ length: 12 }, (_, c) => '<rect x="' + (c * 34 + (r % 2 ? -17 : 0)) + '" y="' + (120 + r * 14) + '" width="32" height="12" fill="' + ((r * 7 + c * 3) % 5 ? "#8a4a38" : "#7a3e30") + '"/>').join("")).join("");
    /* the Waterwall: a horseshoe wall, water sheeting down, a row of arches in front */
    const falls = cls => '<g class="tr-fall ' + cls + '">' + Array.from({ length: 16 }, (_, i) => '<path d="M' + (226 + i * 7) + ' 30v8" stroke="#e8f6ff" stroke-width="1.5" opacity=".7"/>').join("") + '</g>';
    const wall = '<path d="M220 100v-76q60 -18 120 0v76z" fill="#8fa9b8"/><path d="M226 100v-72q54 -14 108 0v72z" fill="#b8d4e2" opacity=".8"/>' + falls("") + falls("tr-fall2") +
      '<g transform="translate(0 52)">' + falls("") + '</g>' +
      '<path d="M200 104h160v-26h-6v26h-14v-26q-6 -10 -12 0v26h-14v-26q-6 -10 -12 0v26h-14v-26q-6 -10 -12 0v26h-14v-26q-6 -10 -12 0v26h-14v-26q-6 -10 -12 0v26h-14v-26q-6 -10 -12 0v26h-14z" fill="#e6ddcc"/>';
    return svg('<rect width="400" height="260" fill="url(#trs5)"/>' + stars(8) + wall +
      '<rect x="0" y="104" width="400" height="16" fill="#4a5058"/>' + brick +
      tag("TRAE", 120, 196, 54, BLUE, -6) + tag("THA TRUTH", 236, 224, 24, GOLD, -4) + tag("ABN", 40, 236, 18, GREEN, 4) +
      '<g transform="translate(378 250)"><rect x="-6" y="-24" width="12" height="24" rx="3" fill="#e63946"/><rect x="-3" y="-30" width="6" height="6" fill="#aaa"/>' +
      '<circle class="tr-spr" cx="0" cy="-36" r="4" fill="' + BLUE + '" opacity=".7"/><circle class="tr-spr tr-spr2" cx="4" cy="-38" r="3" fill="' + BLUE + '" opacity=".6"/></g>' +
      '<rect x="60" y="34" width="5" height="200" fill="#6b7178"/>' + sign(4, 22, 118, "FONDREN RD") + sign(12, 48, 130, "W AIRPORT BLVD"),
      sky("trs5", "#22305a", "#f0a070"));
  }

  window.SCENES = { trstation: trstation, trrelief: trrelief, traeday: traeday, trtrunk: trtrunk, trcorner: trcorner };
})();
