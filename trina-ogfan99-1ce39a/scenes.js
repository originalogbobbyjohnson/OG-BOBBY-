/* trina scenes (Regions tab: South Florida; Liberty City, Miami). CSS classes and ids prefixed tr- (the page's own anim-train is kept).
   1 Metrorail Green Line at Northside, the elevated stop on the north edge of Liberty City: silver train pulling in, palms, pink dusk.
   2 Miami Northwestern Senior High (the Bulls, royal blue and old gold): Friday night under the lights, a majorette's baton spinning in the air (she was a majorette there).
   3 PortMiami: a white cruise ship sailing out toward Nassau (her mother is Bahamian), cranes on the dock, gulls.
   4 Liberty Square ("Pork 'n Beans"), Liberty City: pastel two-story blocks, palms, a crown mural, clouds rolling by.
   5 NW 71 St and NW 12 Av by Northwestern: green signs, TRINA tagged on the stucco wall, downtown's Miami Tower glowing behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes trsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.tr-palm{transform-box:fill-box;transform-origin:50% 100%;animation:trsway 3.2s ease-in-out infinite}.tr-palm2{animation-delay:-1.6s}' +
    '@keyframes trcloud{from{transform:translateX(-140px)}to{transform:translateX(460px)}}.tr-cloud{animation:trcloud 26s linear infinite}.tr-cloud2{animation-delay:-13s}' +
    '@keyframes trbaton{0%{transform:translateY(0) rotate(0)}50%{transform:translateY(-46px) rotate(540deg)}100%{transform:translateY(0) rotate(1080deg)}}.tr-baton{transform-box:fill-box;transform-origin:50% 50%;animation:trbaton 1.8s ease-in-out infinite}' +
    '@keyframes trship{from{transform:translateX(-40px)}to{transform:translateX(120px)}}.tr-ship{animation:trship 14s ease-in-out infinite alternate}' +
    '@keyframes trgull{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.tr-gull{animation:trgull 1.4s ease-in-out infinite}.tr-gull2{animation-delay:-.7s}' +
    '@keyframes trblink{0%,100%{opacity:.35}50%{opacity:1}}.tr-bl{animation:trblink 1.8s ease-in-out infinite}.tr-bl2{animation-delay:-.9s}' +
    '@keyframes trdrum{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.tr-dr{animation:trdrum .5s ease-in-out infinite}.tr-dr2{animation-delay:-.25s}' +
    '@keyframes trspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tr-sp{animation:trspray 1.4s ease-out infinite}.tr-sp2{animation-delay:.45s}' +
    '@keyframes trtower{0%{fill:#ff4fa3}33%{fill:#2fd5c9}66%{fill:#f6c343}100%{fill:#ff4fa3}}.tr-tw{animation:trtower 6s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const label = (txt, y) => '<rect x="' + (200 - txt.length * 3.6 - 12) + '" y="' + (y - 12) + '" width="' + (txt.length * 7.2 + 24) + '" height="18" rx="2" fill="#111" opacity=".78"/><text x="200" y="' + (y + 1) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const palm = (x, base, h, cls) => {
    const trunk = '<path d="M' + x + ' ' + base + 'q' + (h * 0.12) + ' ' + (-h * 0.5) + ' ' + (h * 0.04) + ' ' + (-h) + '" stroke="#8a6a48" stroke-width="' + (h * 0.07) + '" fill="none" stroke-linecap="round"/>';
    const tx = x + h * 0.04, ty = base - h;
    const fr = [[-1, -0.1], [-0.8, 0.35], [-0.3, -0.45], [0.3, -0.45], [0.8, 0.35], [1, -0.1]].map(f => '<path d="M' + tx + ' ' + ty + 'q' + (f[0] * h * 0.3) + ' ' + (-h * 0.22 + f[1] * h * 0.1) + ' ' + (f[0] * h * 0.55) + ' ' + (f[1] * h * 0.35 + h * 0.05) + '" stroke="#2f7a3a" stroke-width="' + (h * 0.06) + '" fill="none" stroke-linecap="round"/>').join("");
    return '<g>' + trunk + '<g class="tr-palm ' + (cls || "") + '">' + fr + '</g></g>';
  };
  const MR = "#1f4e79", MRG = "#00a651", PINK = "#ff4fa3", GOLD = "#f6c343", AQUA = "#2fd5c9", ROYAL = "#1f4fbf", OLDGOLD = "#c9a227";

  /* 1. Metrorail Green Line, Northside (elevated) */
  function trstop() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (40 + i * 44) + '" y="98" width="30" height="20" rx="3" fill="#24323e"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="88" width="340" height="50" rx="8" fill="#d9dee3" stroke="#8a939c" stroke-width="2"/>' + win +
      '<rect x="24" y="122" width="340" height="5" fill="' + MRG + '"/><rect x="24" y="128" width="340" height="3" fill="#f28c28"/>' +
      '<rect x="340" y="94" width="20" height="30" rx="3" fill="#2b3640"/><circle cx="360" cy="130" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#trs1)"/>' +
      '<circle cx="320" cy="50" r="22" fill="#ffd27a" opacity=".85"/>' +
      '<g class="tr-cloud"><ellipse cx="60" cy="32" rx="32" ry="8" fill="#fff" opacity=".5"/></g><g class="tr-cloud tr-cloud2"><ellipse cx="40" cy="60" rx="22" ry="6" fill="#fff" opacity=".4"/></g>' +
      '<g fill="#5a3f6e" opacity=".55"><rect x="120" y="52" width="46" height="48"/><rect x="172" y="64" width="34" height="36"/><rect x="236" y="58" width="40" height="42"/></g>' +
      palm(18, 150, 96) + palm(388, 150, 86, "tr-palm2") +
      '<path d="M40 70h320" stroke="#c9c2b4" stroke-width="6"/><path d="M60 70v18M200 70v18M340 70v18" stroke="#b9b3a8" stroke-width="4"/>' +
      '<rect x="0" y="138" width="400" height="14" fill="#b9b3a8"/><rect x="0" y="150" width="400" height="5" fill="#8f897e"/>' +
      [70, 200, 330].map(x => '<rect x="' + (x - 9) + '" y="155" width="18" height="70" fill="#c9c2b4"/><path d="M' + (x - 22) + ' 155h44l-13 12h-18z" fill="#b9b3a8"/>').join("") +
      train +
      '<rect x="0" y="225" width="400" height="35" fill="#6a6c70"/><path d="M0 242h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".6"/>' +
      '<rect x="104" y="166" width="192" height="46" rx="3" fill="#111"/><text x="116" y="185" ' + font + ' font-size="15" fill="#fff">Northside</text><text x="116" y="203" ' + font + ' font-size="10" fill="#cfd8e0">Metrorail · Green Line</text>' + badge(250, 186, "MR", MR),
      sky("trs1", "#3b2d63", "#ff9ab8"));
  }

  /* 2. Miami Northwestern Senior High, Friday night, majorette */
  function trmajor() {
    const lights = [40, 360].map(x => '<rect x="' + (x - 2) + '" y="30" width="4" height="110" fill="#7a808a"/><rect x="' + (x - 22) + '" y="18" width="44" height="18" rx="2" fill="#2a2e36"/>' +
      [0, 1, 2, 3].map(i => '<circle class="tr-bl' + (i % 2 ? " tr-bl2" : "") + '" cx="' + (x - 15 + i * 10) + '" cy="27" r="4" fill="#fffbe0"/>').join("") +
      '<path d="M' + (x - 20) + ' 36L' + (x - 70) + ' 200h120L' + (x + 20) + ' 36z" fill="#fffbe0" opacity=".08"/>').join("");
    let stands = "";
    for (let r = 0; r < 5; r++) for (let i = 0; i < 40; i++) stands += '<circle cx="' + (6 + i * 10 + (r % 2) * 5) + '" cy="' + (78 + r * 9) + '" r="3.2" fill="' + ((i + r) % 3 ? ROYAL : OLDGOLD) + '" opacity=".85"/>';
    let yard = "";
    for (let i = 0; i <= 8; i++) yard += '<path d="M' + (20 + i * 45) + ' 150l' + ((i - 4) * -6) + ' 90" stroke="#fff" stroke-width="2" opacity=".6"/>';
    const majorette = '<g transform="translate(200 160)"><path d="M-12 18l-4 42h32l-4 -42z" fill="' + ROYAL + '"/><rect x="-10" y="0" width="20" height="22" rx="4" fill="' + OLDGOLD + '"/>' +
      '<path d="M-14 22h28l6 14h-40z" fill="' + OLDGOLD + '"/><rect x="-9" y="60" width="6" height="16" fill="#fff"/><rect x="3" y="60" width="6" height="16" fill="#fff"/>' +
      '<circle cx="0" cy="-8" r="8" fill="#5a3a2a"/><rect x="-8" y="-22" width="16" height="10" rx="2" fill="#fff"/><path d="M0 -22v-8" stroke="' + OLDGOLD + '" stroke-width="3"/>' +
      '<path d="M10 4l16 -20" stroke="#5a3a2a" stroke-width="5" stroke-linecap="round"/><path d="M-10 4l-14 14" stroke="#5a3a2a" stroke-width="5" stroke-linecap="round"/></g>' +
      '<g class="tr-baton"><g transform="translate(226 132)"><path d="M-16 0h32" stroke="#e8eaee" stroke-width="3" stroke-linecap="round"/><circle cx="-16" cy="0" r="3.5" fill="#fff"/><circle cx="16" cy="0" r="3.5" fill="#fff"/></g></g>';
    const drums = [70, 104, 300, 334].map((x, i) => '<g class="tr-dr' + (i % 2 ? " tr-dr2" : "") + '"><rect x="' + (x - 8) + '" y="196" width="16" height="30" rx="3" fill="' + ROYAL + '"/><ellipse cx="' + x + '" cy="214" rx="12" ry="6" fill="#eee" stroke="' + OLDGOLD + '" stroke-width="2"/><circle cx="' + x + '" cy="188" r="6" fill="#3a2a22"/><rect x="' + (x - 6) + '" y="180" width="12" height="6" fill="' + OLDGOLD + '"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#trs2)"/>' + lights +
      '<rect x="0" y="70" width="400" height="56" fill="#1b2232"/>' + stands +
      '<rect x="0" y="126" width="400" height="10" fill="' + ROYAL + '"/><text x="200" y="134.5" text-anchor="middle" ' + font + ' font-size="8" fill="' + OLDGOLD + '" letter-spacing="3">HOME OF THE BULLS</text>' +
      '<rect x="0" y="136" width="400" height="124" fill="#2f7a3a"/>' + yard + drums + majorette +
      label("MIAMI NORTHWESTERN · LIBERTY CITY", 250),
      sky("trs2", "#04061a", "#1c2448"));
  }

  /* 3. PortMiami, a cruise ship heading out to Nassau */
  function trport() {
    const crane = x => '<g><rect x="' + x + '" y="80" width="6" height="90" fill="#2c7fb8"/><rect x="' + (x + 30) + '" y="80" width="6" height="90" fill="#2c7fb8"/><rect x="' + (x - 30) + '" y="74" width="100" height="8" fill="#2c7fb8"/><path d="M' + x + ' 120l36 -40M' + (x + 36) + ' 120l-36 -40" stroke="#2c7fb8" stroke-width="2"/><rect x="' + (x + 8) + '" y="82" width="20" height="12" fill="#e9ecef"/></g>';
    const ship = '<g class="tr-ship"><g transform="translate(110 150)"><path d="M0 30h190l-16 26H14z" fill="#f5f6f7" stroke="#8a939c" stroke-width="1.5"/><rect x="0" y="48" width="190" height="4" fill="' + AQUA + '"/>' +
      '<rect x="22" y="10" width="150" height="20" fill="#fbfbfb" stroke="#9aa3ab"/><rect x="40" y="-6" width="110" height="16" fill="#fbfbfb" stroke="#9aa3ab"/><rect x="62" y="-20" width="70" height="14" fill="#fbfbfb" stroke="#9aa3ab"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (28 + i * 10) + '" y="16" width="6" height="5" fill="#2b5a7a"/>').join("") +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (46 + i * 10) + '" y="0" width="6" height="5" fill="#2b5a7a"/>').join("") +
      '<rect x="120" y="-38" width="18" height="18" rx="2" fill="' + PINK + '"/><path d="M190 56q30 0 50 -4" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/></g></g>';
    const gulls = '<g class="tr-gull"><path d="M60 50q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="tr-gull tr-gull2"><path d="M280 36q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#trs3)"/>' +
      '<circle cx="330" cy="64" r="26" fill="#ffe08a"/>' +
      '<g class="tr-cloud"><ellipse cx="80" cy="40" rx="36" ry="9" fill="#fff" opacity=".8"/></g>' + gulls +
      crane(10) + crane(330) +
      '<rect x="0" y="168" width="400" height="92" fill="#1e7f9a"/><path d="M0 190h400M0 212h400M0 236h400" stroke="#7fd0de" stroke-width="1" opacity=".5"/>' +
      '<rect x="0" y="164" width="80" height="8" fill="#9a958c"/><rect x="320" y="164" width="80" height="8" fill="#9a958c"/>' +
      ship +
      '<rect x="286" y="118" width="100" height="22" rx="2" fill="#111" opacity=".85"/><text x="336" y="133" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">NASSAU ▸</text>' +
      label("PORTMIAMI · OUT TO THE BAHAMAS", 252),
      sky("trs3", "#ff8fb1", "#ffd9a0"));
  }

  /* 4. Liberty Square, Liberty City */
  function trsquare() {
    const block = (x, w, c, blank) => '<rect x="' + x + '" y="112" width="' + w + '" height="78" fill="' + c + '"/><path d="M' + (x - 6) + ' 114l' + (w / 2 + 6) + ' -22l' + (w / 2 + 6) + ' 22z" fill="#b35a3a"/>' +
      (blank ? '' : [0, 1].map(r => Array.from({ length: Math.floor(w / 26) }, (_, i) => '<rect x="' + (x + 8 + i * 26) + '" y="' + (124 + r * 30) + '" width="14" height="16" fill="#f8f4ea" stroke="#7a6a5a" stroke-width="1"/>').join("")).join("")) +
      '<rect x="' + (x + w / 2 - 7) + '" y="168" width="14" height="22" fill="#6b4a3a"/>';
    const mural = '<g transform="translate(254 118)"><rect x="0" y="0" width="72" height="44" fill="#fff4dc"/><path d="M14 30l6 -16 8 10 8 -14 8 14 8 -10 6 16z" fill="' + GOLD + '" stroke="#7a5a1a" stroke-width="1.5"/><rect x="14" y="30" width="44" height="5" fill="' + PINK + '"/><circle cx="36" cy="10" r="2" fill="' + AQUA + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#trs4)"/>' +
      '<g class="tr-cloud"><ellipse cx="90" cy="42" rx="40" ry="10" fill="#fff" opacity=".9"/></g><g class="tr-cloud tr-cloud2"><ellipse cx="60" cy="70" rx="26" ry="7" fill="#fff" opacity=".75"/></g>' +
      block(10, 110, "#f7c9a6") + block(140, 90, "#bfe3d6") + block(244, 92, "#f6e3a1", true) + mural + block(350, 70, "#f3b9c9") +
      palm(130, 196, 92) + palm(236, 196, 80, "tr-palm2") + palm(338, 196, 70) +
      '<rect x="0" y="190" width="400" height="22" fill="#7fbf5a"/><rect x="0" y="212" width="400" height="48" fill="#a49e93"/><path d="M0 236h400" stroke="#fff" stroke-width="2" stroke-dasharray="14 12" opacity=".4"/>' +
      label("LIBERTY SQUARE · LIBERTY CITY", 252),
      sky("trs4", "#58b4ec", "#d8f0fb"));
  }

  /* 5. NW 71 St and NW 12 Av, Liberty City; Miami Tower behind */
  function trcorner() {
    const tower = '<g transform="translate(196 12)"><rect x="0" y="40" width="40" height="80" fill="#1d2433"/><rect class="tr-tw" x="4" y="26" width="32" height="16" fill="' + PINK + '"/><rect class="tr-tw" x="8" y="14" width="24" height="12" fill="' + PINK + '" style="animation-delay:-2s"/><rect class="tr-tw" x="12" y="4" width="16" height="10" fill="' + PINK + '" style="animation-delay:-4s"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="6" y="' + (48 + i * 11) + '" width="28" height="3" fill="#ffd27a" opacity=".5"/>').join("") + '</g>';
    const skyline = '<g fill="#1d2433"><rect x="60" y="80" width="30" height="60"/><rect x="96" y="66" width="26" height="74"/><rect x="150" y="72" width="34" height="68"/><rect x="240" y="88" width="24" height="52"/><rect x="270" y="60" width="30" height="80"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#trs5)"/>' +
      '<circle cx="340" cy="44" r="18" fill="#ffe6a0" opacity=".9"/>' + skyline + tower +
      '<rect x="0" y="136" width="400" height="8" fill="#a8a296"/>' +
      palm(70, 140, 90) + palm(334, 140, 84, "tr-palm2") +
      '<rect x="0" y="140" width="250" height="88" fill="#f2dcc0"/><rect x="0" y="140" width="250" height="6" fill="#d9bfa0"/>' +
      tag("TRINA", 20, 200, 48, PINK, -5) + tag("DA BADDEST", 120, 222, 16, GOLD, -3) +
      '<g class="tr-sp"><circle cx="232" cy="176" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="tr-sp tr-sp2"><circle cx="238" cy="170" r="2" fill="' + PINK + '" opacity=".7"/></g>' +
      '<rect x="262" y="100" width="5" height="128" fill="#5b6168"/>' + sign(272, 106, 104, "NW 71 ST") + sign(272, 132, 104, "NW 12 AV") +
      '<rect x="0" y="228" width="400" height="32" fill="#6a6c70"/><path d="M0 244h400" stroke="#fff" stroke-width="2" stroke-dasharray="14 12" opacity=".5"/>' +
      '<text x="326" y="214" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">LIBERTY CITY</text>',
      sky("trs5", "#2a1a4a", "#ff8f7a"));
  }

  window.SCENES = { trstop, trmajor, trport, trsquare, trcorner };
})();
