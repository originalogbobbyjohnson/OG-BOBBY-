/* Paul McCartney game (GENRES: ROCK; INTERNATIONAL region: UK + EUROPE; Allerton, Liverpool - grew up in Speke, then from 1955
   at 20 Forthlin Road, Allerton L18, a council terrace where the first songs were written; Liverpool Institute on Mount Street;
   Penny Lane round the corner).
   Rooms: Liverpool South Parkway (Merseyrail Northern line, the station that replaced Allerton), 20 Forthlin Road (red-brick
   terrace, the front-room piano), the Liverpool Institute on Mount Street (pale stone Greek Revival portico, now LIPA, which he
   founded), the Penny Lane roundabout with its shelter, and Forthlin Road at Mather Avenue with Liverpool Cathedral's
   sandstone tower behind.
   CSS classes prefixed "pmc" (the page's anim-train is kept). No logos (no Merseyrail M, no Trust oak leaf), no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes pmcTw{0%,100%{opacity:1}50%{opacity:.25}}.pmcTw{animation:pmcTw 1.8s ease-in-out infinite}.pmcT2{animation-delay:.6s}.pmcT3{animation-delay:1.2s}' +
    '@keyframes pmcBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.pmcBob{animation:pmcBob .8s ease-in-out infinite}.pmcBb2{animation-delay:.4s}' +
    '@keyframes pmcNote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(34px,-74px);opacity:0}}.pmcNote{animation:pmcNote 3.2s linear infinite}.pmcN2{animation-delay:1.1s}.pmcN3{animation-delay:2.2s}' +
    '@keyframes pmcCloud{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.pmcCloud{animation:pmcCloud 28s linear infinite}.pmcC2{animation-delay:-14s}' +
    '@keyframes pmcBus{0%{transform:translateX(-220px)}100%{transform:translateX(470px)}}.pmcBus{animation:pmcBus 11s linear infinite}' +
    '@keyframes pmcPole{0%{transform:translateY(0)}100%{transform:translateY(-12px)}}.pmcPole{animation:pmcPole 1s linear infinite}' +
    '@keyframes pmcGull{0%{transform:translate(-40px,0)}50%{transform:translate(220px,-12px)}100%{transform:translate(460px,6px)}}.pmcGull{animation:pmcGull 14s linear infinite}.pmcG2{animation-delay:-6s}' +
    '@keyframes pmcSpark{0%,100%{transform:scale(.6);opacity:.3}50%{transform:scale(1.2);opacity:1}}.pmcSpark{transform-box:fill-box;transform-origin:50% 50%;animation:pmcSpark 1.4s ease-in-out infinite}.pmcS2{animation-delay:.5s}' +
    '@keyframes pmcHand{from{transform:rotate(0)}to{transform:rotate(360deg)}}.pmcHand{transform-box:view-box;transform-origin:200px 74px;animation:pmcHand 8s linear infinite}' +
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
  const GOLD = "#e8b33a", RED = "#d7263d", BLUE = "#1f6fd1", NL = "#0065bd", BRICK = "#9c4a34", BRICK2 = "#7e3a28", SAND = "#b5523a";
  const cloud = (x, y, cls) => '<g class="pmcCloud' + (cls || '') + '" fill="#fff" opacity=".85"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9"/><ellipse cx="' + (x + 16) + '" cy="' + (y - 7) + '" rx="16" ry="9"/><ellipse cx="' + (x - 12) + '" cy="' + (y - 4) + '" rx="12" ry="7"/></g>';
  const gull = (x, y, cls) => '<g class="pmcGull' + (cls || '') + '"><path d="M' + x + ' ' + y + 'q6 -6 12 0q6 -6 12 0" stroke="#f4f4f4" stroke-width="2.4" fill="none" stroke-linecap="round"/></g>';
  const bricks = (x, y, w, h, base, line) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>';
    for (let yy = y + 8; yy < y + h; yy += 8) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>';
    return s;
  };
  const note = (x, y, cls, col) => '<g class="pmcNote' + (cls || '') + '"><path d="M' + x + ' ' + y + 'v-14l10 -3v14" stroke="' + col + '" stroke-width="2" fill="none"/><ellipse cx="' + (x - 3) + '" cy="' + y + '" rx="4" ry="3" fill="' + col + '"/><ellipse cx="' + (x + 7) + '" cy="' + (y - 3) + '" rx="4" ry="3" fill="' + col + '"/></g>';
  const people = (y, n, x0, x1, cols, guitar) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = x0 + 8 + i * ((x1 - x0) / n), f = cols[i % cols.length];
      s += '<g class="pmcBob' + (i % 2 ? ' pmcBb2' : '') + '" fill="' + f + '"><circle cx="' + x + '" cy="' + (y - 14) + '" r="5"/><rect x="' + (x - 6) + '" y="' + (y - 8) + '" width="12" height="18" rx="5"/>' +
        (guitar && i % 2 === 0 ? '<path d="M' + (x + 6) + ' ' + (y - 6) + 'l9 4v14l-9 -2z" fill="#2a1a10"/>' : '') + '</g>';
    }
    return s;
  };

  /* 1. Liverpool South Parkway: the glass interchange up top, the island platform below, a yellow-fronted Northern line train pulling in */
  function pmcstation() {
    let wins = "";
    for (let x = 52; x < 286; x += 32) wins += '<rect x="' + x + '" y="142" width="22" height="20" rx="3" fill="#bcd8ea"/>';
    const train = '<g class="anim-train">' +
      '<rect x="24" y="130" width="282" height="64" rx="8" fill="#d9dcdf" stroke="#2a2a2a" stroke-width="2"/>' +
      '<path d="M306 130q24 4 26 30v34h-26z" fill="#ffd200" stroke="#2a2a2a" stroke-width="2"/>' +
      '<path d="M309 138q15 3 18 22h-18z" fill="#1b2630"/>' + wins +
      '<rect x="24" y="168" width="282" height="8" fill="#3d3f44"/>' +
      '<g fill="#ffd200"><rect x="40" y="136" width="8" height="52"/><rect x="164" y="136" width="8" height="52"/><rect x="288" y="136" width="8" height="52"/></g>' +
      '<rect x="318" y="182" width="9" height="5" fill="#fff6c8"/>' +
      '<g fill="#1b1b1b"><circle cx="66" cy="198" r="7"/><circle cx="90" cy="198" r="7"/><circle cx="240" cy="198" r="7"/><circle cx="264" cy="198" r="7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pmcs1)"/>' + cloud(70, 26, '') + cloud(300, 40, ' pmcC2') + gull(0, 52, '') +
      /* the glass box of the interchange on its steel frame */
      '<rect x="190" y="30" width="200" height="62" fill="#9fc6dc" stroke="#e9eef2" stroke-width="3"/>' +
      '<path d="M215 30v62M240 30v62M265 30v62M290 30v62M315 30v62M340 30v62M365 30v62M190 61h200" stroke="#e9eef2" stroke-width="2"/>' +
      '<path d="M184 30q106 -16 212 0z" fill="#c8ccd1" stroke="#8d939a" stroke-width="2"/>' +
      '<rect x="0" y="92" width="400" height="8" fill="#5b6066"/>' +
      '<g fill="#7d8389"><rect x="40" y="100" width="8" height="24"/><rect x="200" y="100" width="8" height="24"/><rect x="360" y="100" width="8" height="24"/></g>' +
      /* platform canopy */
      '<path d="M0 108h400v10H0z" fill="#4a4f55"/>' +
      '<rect x="0" y="118" width="400" height="80" fill="#6c7279"/>' +
      train +
      '<rect x="0" y="204" width="400" height="56" fill="#9a9a94"/><rect x="0" y="204" width="400" height="5" fill="#ffd200"/>' +
      /* station name board with the Northern line bullet */
      '<rect x="40" y="216" width="320" height="34" rx="3" fill="#1d1f24" stroke="#555" stroke-width="1.5"/>' +
      '<circle cx="62" cy="233" r="11" fill="' + NL + '"/><text x="62" y="237.5" text-anchor="middle" ' + F + ' font-size="13" fill="#fff">N</text>' +
      '<text x="210" y="239" text-anchor="middle" ' + F + ' font-size="16" fill="#fff">Liverpool South Parkway</text>',
      sky("pmcs1", "#8fbfe0", "#eaeef0"));
  }

  /* 2. 20 Forthlin Road: the red-brick council terrace, the front-room window with the family upright piano, notes drifting out */
  function pmcforthlin() {
    const win = (x, y, w, h) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#f4f1ea"/><rect x="' + (x + 4) + '" y="' + (y + 4) + '" width="' + (w - 8) + '" height="' + (h - 8) + '" fill="#2b3644"/>' +
      '<path d="M' + (x + w / 2) + ' ' + (y + 4) + 'v' + (h - 8) + 'M' + (x + 4) + ' ' + (y + h / 3) + 'h' + (w - 8) + '" stroke="#f4f1ea" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pmcs2)"/>' + cloud(60, 22, '') + cloud(280, 30, ' pmcC2') +
      /* the terrace: number 20 and its neighbours */
      bricks(0, 54, 400, 156, BRICK, BRICK2) +
      '<path d="M-10 58L60 22h280l70 36z" fill="#5a4a44"/><path d="M60 22h280" stroke="#3d322e" stroke-width="2"/>' +
      '<rect x="96" y="6" width="20" height="24" fill="' + BRICK2 + '"/><rect x="286" y="6" width="20" height="24" fill="' + BRICK2 + '"/>' +
      '<rect x="99" y="2" width="5" height="6" fill="#7a6a60"/><rect x="108" y="2" width="5" height="6" fill="#7a6a60"/><rect x="289" y="2" width="5" height="6" fill="#7a6a60"/><rect x="298" y="2" width="5" height="6" fill="#7a6a60"/>' +
      '<path d="M200 54v156" stroke="' + BRICK2 + '" stroke-width="3"/>' +
      win(28, 70, 64, 44) + win(124, 70, 50, 44) + win(228, 70, 50, 44) + win(310, 70, 64, 44) +
      /* front room of number 20, lights on, the piano inside */
      '<rect x="20" y="132" width="86" height="58" fill="#f4f1ea"/><rect x="25" y="137" width="76" height="48" fill="#ffd98a"/>' +
      '<rect x="36" y="150" width="54" height="30" fill="#3a2214"/><rect x="38" y="164" width="50" height="6" fill="#f7f3ea"/><g fill="#111"><rect x="42" y="164" width="2.5" height="4"/><rect x="48" y="164" width="2.5" height="4"/><rect x="58" y="164" width="2.5" height="4"/><rect x="64" y="164" width="2.5" height="4"/><rect x="70" y="164" width="2.5" height="4"/><rect x="80" y="164" width="2.5" height="4"/></g>' +
      '<path d="M63 137v48" stroke="#f4f1ea" stroke-width="3"/>' +
      note(70, 128, '', GOLD) + note(40, 124, ' pmcN2', "#fff") + note(90, 130, ' pmcN3', GOLD) +
      /* the door of 20 with its number, the next-door door */
      '<rect x="128" y="130" width="40" height="80" fill="#2d4f7c"/><rect x="128" y="124" width="40" height="8" fill="#f4f1ea"/><rect x="134" y="138" width="28" height="22" fill="#9fc6dc"/>' +
      '<text x="148" y="178" text-anchor="middle" ' + F + ' font-size="12" fill="' + GOLD + '">20</text><circle cx="160" cy="186" r="2.5" fill="' + GOLD + '"/>' +
      '<rect x="232" y="130" width="40" height="80" fill="#4f6b3a"/><rect x="232" y="124" width="40" height="8" fill="#f4f1ea"/><rect x="238" y="138" width="28" height="22" fill="#9fc6dc"/>' +
      win(294, 134, 80, 56) +
      /* privet hedge, the little front gardens, the pavement */
      '<rect x="0" y="194" width="122" height="18" rx="6" fill="#3f6b2e"/><rect x="176" y="194" width="50" height="18" rx="6" fill="#3f6b2e"/><rect x="280" y="194" width="120" height="18" rx="6" fill="#3f6b2e"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#a9a59c"/><path d="M0 236h400" stroke="#8d8a82" stroke-width="2"/>' +
      '<rect x="300" y="18" width="94" height="22" rx="3" fill="#fff" stroke="#111" stroke-width="2"/><text x="347" y="33" text-anchor="middle" ' + F + ' font-size="9.5" fill="#111">FORTHLIN ROAD</text>',
      sky("pmcs2", "#a7c8e2", "#efe6d6"));
  }

  /* 3. The Liverpool Institute, Mount Street: pale sandstone Greek Revival portico, students with guitar cases on the steps */
  function pmcinstitute() {
    let cols = "";
    for (let i = 0; i < 4; i++) {
      const x = 126 + i * 46;
      cols += '<rect x="' + x + '" y="80" width="16" height="100" fill="#e6dcc4"/><path d="M' + (x + 4) + ' 82v96M' + (x + 8) + ' 82v96M' + (x + 12) + ' 82v96" stroke="#cdbf9f" stroke-width="1"/>' +
        '<path d="M' + (x - 4) + ' 80q4 -8 12 -2q8 -6 12 2z" fill="#d8ccb0" stroke="#b9ab8c"/><rect x="' + (x - 3) + '" y="178" width="22" height="4" fill="#cdbf9f"/>';
    }
    let w = "";
    for (let r = 0; r < 2; r++) for (let i = 0; i < 2; i++) {
      w += '<rect x="' + (24 + i * 44) + '" y="' + (70 + r * 56) + '" width="26" height="40" fill="#2b3644" stroke="#e6dcc4" stroke-width="3"/>';
      w += '<rect x="' + (306 + i * 44) + '" y="' + (70 + r * 56) + '" width="26" height="40" fill="#2b3644" stroke="#e6dcc4" stroke-width="3"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#pmcs3)"/>' + cloud(90, 22, '') + gull(0, 40, ' pmcG2') +
      '<rect x="0" y="56" width="400" height="140" fill="#d9ccae"/>' + w +
      '<path d="M0 56h400" stroke="#bfae8a" stroke-width="3"/>' +
      /* pediment and entablature */
      '<path d="M108 66L200 30L292 66z" fill="#e6dcc4" stroke="#b9ab8c" stroke-width="2"/><path d="M124 62L200 38L276 62z" fill="#d8ccb0"/>' +
      '<rect x="104" y="64" width="192" height="16" fill="#e6dcc4" stroke="#b9ab8c" stroke-width="2"/>' +
      '<path d="M112 72h176" stroke="#cdbf9f" stroke-width="1.5"/>' +
      cols +
      '<rect x="191" y="124" width="24" height="56" fill="#3a2a1c"/><path d="M191 124q12 -12 24 0" fill="#3a2a1c"/>' +
      /* steps */
      '<rect x="96" y="182" width="208" height="6" fill="#cdbf9f"/><rect x="88" y="188" width="224" height="6" fill="#c2b493"/><rect x="80" y="194" width="240" height="6" fill="#b7a888"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#8b8a86"/>' +
      people(222, 7, 20, 380, ["#2b2b33", "#5a2a2a", "#2a3d5a", "#3b4a2a"], true) +
      '<rect x="8" y="16" width="96" height="22" rx="3" fill="#fff" stroke="#111" stroke-width="2"/><text x="56" y="31" text-anchor="middle" ' + F + ' font-size="10" fill="#111">MOUNT STREET</text>',
      sky("pmcs3", "#9cc2e0", "#f1e8d6"));
  }

  /* 4. Penny Lane: the roundabout shelter with its clock, a striped barber's pole turning, the buses going round */
  function pmcpennylane() {
    const bus = '<g class="pmcBus"><rect x="0" y="152" width="120" height="66" rx="8" fill="#c8102e" stroke="#2a2a2a" stroke-width="2"/>' +
      '<g fill="#bcd8ea"><rect x="8" y="160" width="22" height="16" rx="2"/><rect x="34" y="160" width="22" height="16" rx="2"/><rect x="60" y="160" width="22" height="16" rx="2"/><rect x="86" y="160" width="26" height="16" rx="2"/>' +
      '<rect x="8" y="186" width="22" height="16" rx="2"/><rect x="34" y="186" width="22" height="16" rx="2"/><rect x="60" y="186" width="22" height="16" rx="2"/></g>' +
      '<rect x="88" y="186" width="24" height="28" fill="#2b3644"/><rect x="84" y="154" width="32" height="4" fill="#111"/><text x="100" y="158" text-anchor="middle" ' + F + ' font-size="4" fill="#ffb000">PENNY LANE</text>' +
      '<circle cx="24" cy="220" r="9" fill="#1b1b1b"/><circle cx="96" cy="220" r="9" fill="#1b1b1b"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pmcs4)"/>' + cloud(70, 26, '') + cloud(310, 18, ' pmcC2') +
      /* shops round the roundabout */
      bricks(0, 70, 120, 110, "#a85a3e", "#874630") + bricks(280, 70, 120, 110, "#a85a3e", "#874630") +
      '<rect x="10" y="140" width="100" height="40" fill="#2b3644"/><rect x="290" y="140" width="100" height="40" fill="#2b3644"/>' +
      '<rect x="6" y="128" width="108" height="12" fill="#1e3a5f"/><rect x="286" y="128" width="108" height="12" fill="#5f1e2a"/>' +
      '<g fill="#bcd8ea"><rect x="18" y="86" width="22" height="28"/><rect x="50" y="86" width="22" height="28"/><rect x="82" y="86" width="22" height="28"/><rect x="296" y="86" width="22" height="28"/><rect x="328" y="86" width="22" height="28"/><rect x="360" y="86" width="22" height="28"/></g>' +
      /* barber's pole, stripes running up */
      '<rect x="116" y="132" width="10" height="44" rx="4" fill="#fff" stroke="#555"/>' +
      '<clipPath id="pmcpc"><rect x="116" y="132" width="10" height="44" rx="4"/></clipPath><g clip-path="url(#pmcpc)"><g class="pmcPole">' +
      [0, 1, 2, 3, 4, 5].map(i => '<path d="M116 ' + (140 + i * 12) + 'l10 -8v5l-10 8z" fill="' + (i % 2 ? BLUE : RED) + '"/>').join("") + '</g></g>' +
      /* the shelter in the middle of the roundabout */
      '<rect x="146" y="100" width="108" height="78" fill="#e8e2d2" stroke="#9a927e" stroke-width="2"/>' +
      '<path d="M138 102l62 -26l62 26z" fill="#5a4a44"/><rect x="186" y="56" width="28" height="30" fill="#e8e2d2" stroke="#9a927e" stroke-width="2"/>' +
      '<circle cx="200" cy="74" r="10" fill="#fff" stroke="#333" stroke-width="2"/><path d="M200 74v-7" stroke="#111" stroke-width="2"/><g class="pmcHand"><path d="M200 74h6" stroke="#111" stroke-width="1.5"/></g>' +
      '<g fill="#2b3644"><rect x="158" y="118" width="22" height="34" rx="2"/><rect x="189" y="118" width="22" height="58"/><rect x="220" y="118" width="22" height="34" rx="2"/></g>' +
      '<rect x="0" y="178" width="400" height="10" fill="#b9b3a6"/><rect x="0" y="188" width="400" height="72" fill="#4a4b50"/>' +
      '<path d="M0 238h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      bus +
      '<rect x="292" y="18" width="100" height="26" rx="2" fill="#fff" stroke="#111" stroke-width="2.5"/><text x="342" y="33" text-anchor="middle" ' + F + ' font-size="11" fill="#111">PENNY LANE</text><text x="342" y="41" text-anchor="middle" ' + F + ' font-size="6" fill="#d41a1f">L18</text>',
      sky("pmcs4", "#8fc0e6", "#f4ead8"));
  }

  /* 5. Forthlin Road at Mather Avenue, Allerton L18: a tagged brick wall, Liverpool Cathedral's sandstone tower behind */
  function pmccorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#pmcs5)"/>' + cloud(60, 24, '') + gull(0, 30, '') + gull(0, 46, ' pmcG2') +
      /* Liverpool Cathedral: the great central tower and the transepts in red sandstone */
      '<rect x="60" y="96" width="280" height="56" fill="' + SAND + '"/>' +
      '<path d="M60 96l20 -18h50l20 18zM250 96l20 -18h50l20 18z" fill="#9c4430"/>' +
      '<rect x="160" y="24" width="80" height="128" fill="' + SAND + '"/><rect x="152" y="70" width="96" height="10" fill="#9c4430"/>' +
      '<g fill="#9c4430"><rect x="160" y="14" width="10" height="14"/><rect x="230" y="14" width="10" height="14"/><rect x="176" y="18" width="8" height="10"/><rect x="216" y="18" width="8" height="10"/><rect x="196" y="12" width="8" height="16"/></g>' +
      '<g fill="#5a2a20"><path d="M174 40v24a6 6 0 0 1 12 0v-24a6 6 0 0 0 -12 0z"/><path d="M194 36v28a6 6 0 0 1 12 0v-28a6 6 0 0 0 -12 0z"/><path d="M214 40v24a6 6 0 0 1 12 0v-24a6 6 0 0 0 -12 0z"/>' +
      '<path d="M182 90v40h36v-40a18 18 0 0 0 -36 0z"/><path d="M84 112v30h16v-30a8 8 0 0 0 -16 0zM300 112v30h16v-30a8 8 0 0 0 -16 0z"/></g>' +
      /* the wall with the tags */
      bricks(0, 150, 400, 54, "#8a3e2c", "#6e3020") +
      tag("L18", 22, 182, 20, "#9fd0f2", -3) +
      tag("MACCA", 104, 194, 40, GOLD, -4) +
      tag("WINGS", 262, 176, 20, RED, -6) +
      '<g class="pmcSpark"><path d="M246 160l2 5 5 1 -4 3 1 5 -4 -3 -4 3 1 -5 -4 -3 5 -1z" fill="#fff"/></g>' +
      '<g class="pmcSpark pmcS2"><path d="M96 162l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1z" fill="#fff"/></g>' +
      '<rect x="0" y="204" width="400" height="8" fill="#b9b3a6"/><rect x="0" y="212" width="400" height="48" fill="#3d3f45"/>' +
      '<path d="M0 238h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      /* Liverpool street name plates: white with black letters, the district in red */
      '<rect x="360" y="40" width="5" height="172" fill="#2a2a2a"/>' +
      '<rect x="266" y="44" width="130" height="30" rx="2" fill="#fff" stroke="#111" stroke-width="2.5"/>' +
      '<text x="331" y="59" text-anchor="middle" ' + F + ' font-size="11" fill="#111">FORTHLIN ROAD</text>' +
      '<text x="331" y="70" text-anchor="middle" ' + F + ' font-size="8" fill="#d41a1f">ALLERTON L18</text>' +
      '<rect x="272" y="78" width="124" height="24" rx="2" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="334" y="94" text-anchor="middle" ' + F + ' font-size="11" fill="#111">MATHER AVENUE</text>',
      sky("pmcs5", "#86b6dc", "#f0dfc4"));
  }

  window.SCENES = { pmcstation, pmcforthlin, pmcinstitute, pmcpennylane, pmccorner };
})();
