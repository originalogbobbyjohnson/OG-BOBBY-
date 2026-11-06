/* freeway scenes (Regions tab: Philadelphia; North Philly). CSS classes prefixed fw- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fwflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.fw-flk{animation:fwflick 2.4s infinite}.fw-flk2{animation-delay:.8s}' +
    '@keyframes fwlane1{from{transform:translateX(-160px)}to{transform:translateX(560px)}}.fw-l1{animation:fwlane1 4.2s linear infinite}.fw-l1b{animation-delay:-2.1s}' +
    '@keyframes fwlane2{from{transform:translateX(560px)}to{transform:translateX(-160px)}}.fw-l2{animation:fwlane2 3.4s linear infinite}.fw-l2b{animation-delay:-1.7s}' +
    '@keyframes fwglint{0%,100%{opacity:.15}50%{opacity:1}}.fw-gl{animation:fwglint 1.8s ease-in-out infinite}.fw-g2{animation-delay:-.6s}.fw-g3{animation-delay:-1.2s}' +
    '@keyframes fwsweep{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.fw-sw{transform-box:fill-box;transform-origin:50% 100%;animation:fwsweep 4s ease-in-out infinite}.fw-sw2{animation-delay:-2s}' +
    '@keyframes fwchase{0%,100%{opacity:.3}33%{opacity:1}}.fw-ch{animation:fwchase 1.2s infinite}.fw-ch2{animation-delay:.4s}.fw-ch3{animation-delay:.8s}' +
    '@keyframes fwbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.fw-bob{animation:fwbob .9s ease-in-out infinite}.fw-bob2{animation-delay:-.45s}' +
    '@keyframes fwspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.fw-sp{animation:fwspray 1.4s ease-out infinite}.fw-sp2{animation-delay:.45s}' +
    '@keyframes fwfall{0%{transform:translateY(-20px);opacity:0}15%{opacity:1}100%{transform:translateY(240px);opacity:.2}}.fw-snow{animation:fwfall 6s linear infinite}.fw-s2{animation-delay:-2s}.fw-s3{animation-delay:-4s}' +
    '@keyframes fwbus{from{transform:translateX(440px)}to{transform:translateX(-200px)}}@keyframes fwspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.fw-spin{transform-box:fill-box;transform-origin:50% 50%;animation:fwspin 1.8s linear infinite}' +
    '.fw-bus{animation:fwbus 9s linear infinite;animation-delay:-4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "fw-gl") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ICE = "#7fd3f7", GOLD = "#e8b23a", BSL = "#f58220";

  /* 1. North Philadelphia on the Broad Street Line, under North Broad at Glenwood Ave: pale green tile, the orange band, steel columns, the black sign with the BSL bullet, the orange-striped train sliding in */
  function station() {
    const tr = '<g class="anim-train"><rect x="20" y="106" width="334" height="74" rx="8" fill="#d0d4d9" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (34 + i * 62) + '" y="118" width="40" height="26" rx="3" fill="#1d262e"/><rect x="' + (78 + i * 62) + '" y="118" width="12" height="54" rx="1" fill="#9aa1a8"/>').join("") +
      '<rect x="20" y="152" width="334" height="7" fill="' + BSL + '"/><rect x="334" y="110" width="20" height="68" rx="4" fill="#a3a9b0"/><circle cx="346" cy="170" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#cfe0d2"/>' + Array.from({ length: 40 }, (_, i) => '<path d="M' + (i * 10) + ' 14v76" stroke="#b9cfbe" stroke-width="1"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (20 + i * 9) + 'h400" stroke="#b9cfbe" stroke-width="1"/>').join("") +
      '<rect x="0" y="0" width="400" height="14" fill="#2a2c2e"/><rect x="0" y="80" width="400" height="12" fill="' + BSL + '"/><rect x="0" y="92" width="400" height="4" fill="#3a3a3a"/>' +
      '<rect x="0" y="96" width="400" height="94" fill="#232327"/>' + tr +
      '<rect x="0" y="190" width="400" height="7" fill="#f2c200"/><rect x="0" y="197" width="400" height="63" fill="#8a8680"/>' +
      [70, 330].map(x => '<rect x="' + (x - 6) + '" y="14" width="12" height="176" fill="#3b3f44"/><rect x="' + (x - 9) + '" y="14" width="18" height="5" fill="#2a2d31"/>').join("") +
      '<rect x="96" y="28" width="230" height="30" rx="3" fill="#111"/><text x="106" y="48" ' + font + ' font-size="14" fill="#fff">North Philadelphia</text>' + badge(262, 43, "BSL", BSL) +
      '<rect class="fw-flk" x="150" y="214" width="100" height="6" rx="3" fill="#fff6c2" opacity=".55"/>',
      "");
  }

  /* 2. "Philadelphia Freeway": the Schuylkill Expressway at night, the big green overhead signs (I-76 shield, Center City), headlights and taillights streaming, the skyline lit behind */
  function highway() {
    const car = (cls, y, body, light, lx) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="54" height="14" rx="5" fill="' + body + '"/><rect x="10" y="' + (y - 8) + '" width="30" height="10" rx="3" fill="' + body + '"/><rect x="14" y="' + (y - 6) + '" width="22" height="6" rx="2" fill="#9ec3dc" opacity=".6"/>' +
      '<circle cx="' + lx + '" cy="' + (y + 6) + '" r="3" fill="' + light + '"/><path d="M' + (lx === 52 ? 55 : -1) + ' ' + (y + 6) + 'l' + (lx === 52 ? 46 : -46) + ' -6v12z" fill="' + light + '" opacity=".22"/><circle cx="12" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="42" cy="' + (y + 14) + '" r="4" fill="#111"/></g>';
    const shield = (x, y) => '<path d="M' + x + ' ' + y + 'h26v14q0 12 -13 18q-13 -6 -13 -18z" fill="#1d4f9c" stroke="#fff" stroke-width="2"/><path d="M' + x + ' ' + y + 'h26v7h-26z" fill="#c8232c"/><text x="' + (x + 13) + '" y="' + (y + 22) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">76</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#fw2)"/>' + stars(22) +
      '<g fill="#1a2440"><rect x="20" y="70" width="34" height="80"/><rect x="60" y="50" width="26" height="100"/><path d="M60 50l13 -16 13 16z"/><rect x="96" y="80" width="40" height="70"/><rect x="250" y="40" width="30" height="110"/><rect x="286" y="60" width="44" height="90"/><rect x="336" y="76" width="44" height="74"/></g>' +
      [[26, 84], [40, 84], [26, 104], [66, 64], [66, 90], [104, 94], [120, 112], [258, 56], [258, 86], [294, 74], [312, 98], [344, 92], [360, 112]].map((p, i) => '<rect class="' + (i % 3 ? "" : "fw-gl fw-g" + (i % 2 + 2)) + '" x="' + p[0] + '" y="' + p[1] + '" width="6" height="8" fill="#ffd98a" opacity=".7"/>').join("") +
      '<rect x="0" y="150" width="400" height="110" fill="#2b2d33"/><rect x="0" y="150" width="400" height="6" fill="#8a8d93"/>' +
      '<path d="M0 204h400" stroke="#f2c200" stroke-width="3"/><path d="M0 178h400M0 232h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="40" y="24" width="8" height="128" fill="#6e737b"/><rect x="352" y="24" width="8" height="128" fill="#6e737b"/><rect x="40" y="22" width="320" height="8" fill="#808690"/>' +
      '<rect x="62" y="30" width="134" height="64" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' + shield(74, 38) + '<text x="108" y="52" ' + font + ' font-size="12" fill="#fff">EAST</text><text x="76" y="84" ' + font + ' font-size="15" fill="#fff">Center City</text>' +
      '<rect x="206" y="30" width="134" height="64" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><text x="273" y="56" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">Philadelphia</text><text x="273" y="80" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">FREEWAY</text>' +
      car("fw-l1", 186, ICE, "#fff6c2", 52) + car("fw-l1 fw-l1b", 186, "#c9ccd2", "#fff6c2", 52) +
      car("fw-l2", 214, "#7a1f24", "#ff4a3a", 2) + car("fw-l2 fw-l2b", 214, GOLD, "#ff4a3a", 2),
      sky("fw2", "#0b1430", "#3a2a52"));
  }

  /* 3. Fifth Element in Minneapolis, the Rhymesayers record shop (his label for The Stimulus Package): the shopfront in the snow, record bins and CDs on the racks, the turntable spinning in the window, a cold blue night */
  function fifth() {
    const flakes = Array.from({ length: 22 }, (_, i) => '<circle class="fw-snow' + (i % 3 ? " fw-s" + (i % 3 + 1) : "") + '" cx="' + (8 + (i * 37) % 390) + '" cy="' + ((i * 17) % 40) + '" r="' + (i % 2 ? 1.6 : 2.3) + '" fill="#f2f8ff" opacity=".9"/>').join("");
    const sleeves = Array.from({ length: 9 }, (_, i) => '<rect x="' + (112 + i * 20) + '" y="' + (150 + (i % 2) * 3) + '" width="17" height="22" fill="' + ["#e4572e", "#7fd3f7", "#e8b23a", "#5cb85c", "#f2efe6", "#9b59b6"][i % 6] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fw3)"/>' +
      '<rect x="0" y="60" width="70" height="150" fill="#3a3e4a"/><rect x="330" y="50" width="70" height="160" fill="#3a3e4a"/>' +
      '<rect x="70" y="40" width="260" height="170" fill="#2b2f38"/><rect x="70" y="40" width="260" height="8" fill="#e6eef6"/>' +
      '<rect x="86" y="56" width="228" height="30" rx="3" fill="#121418" stroke="' + ICE + '" stroke-width="2"/><text class="fw-flk" x="200" y="77" text-anchor="middle" ' + font + ' font-size="16" fill="' + ICE + '" letter-spacing="3">FIFTH ELEMENT</text>' +
      '<rect x="96" y="96" width="208" height="84" fill="#ffe7b0" opacity=".92"/><rect x="96" y="96" width="208" height="84" fill="none" stroke="#141414" stroke-width="4"/><path d="M200 96v84" stroke="#141414" stroke-width="3"/>' +
      '<rect x="104" y="174" width="192" height="6" fill="#6a4a2a"/>' + sleeves +
      '<g transform="translate(150 124)"><rect x="-26" y="-14" width="52" height="28" rx="3" fill="#2a2a2e"/><g class="fw-spin"><circle r="11" fill="#111"/><circle r="4" fill="' + GOLD + '"/></g></g>' +
      '<rect x="216" y="106" width="34" height="34" fill="' + GOLD + '"/><circle cx="233" cy="123" r="11" fill="#111"/><rect x="258" y="106" width="34" height="34" fill="' + ICE + '"/><path d="M262 114h26M262 122h18" stroke="#0b1118" stroke-width="3"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#d9e4ee"/><rect x="0" y="206" width="400" height="5" fill="#f4f8fb"/>' +
      [[40, 0], [356, 1]].map(p => '<g class="fw-bob' + (p[1] ? " fw-bob2" : "") + '"><circle cx="' + p[0] + '" cy="214" r="6" fill="#141414"/><rect x="' + (p[0] - 8) + '" y="220" width="16" height="26" rx="5" fill="#2c4a66"/></g>').join("") + flakes,
      sky("fw3", "#0f1e3a", "#3c5a80"));
  }

  /* 4. Fluid, the Philly club where he ran "What We Do" live from the balcony: the dark room, the balcony rail up top, the DJ booth glowing, colored beams sweeping, the crowd below with hands up */
  function fluid() {
    const crowd = Array.from({ length: 16 }, (_, i) => { const x = 14 + i * 25, y = 226 + (i % 2) * 5; return '<g class="fw-bob' + (i % 2 ? " fw-bob2" : "") + '"><circle cx="' + x + '" cy="' + (y - 10) + '" r="6" fill="#0a0c10"/><rect x="' + (x - 8) + '" y="' + (y - 4) + '" width="16" height="30" rx="5" fill="#0a0c10"/>' + (i % 3 === 0 ? '<path d="M' + (x + 5) + ' ' + (y - 2) + 'l7 -18M' + (x - 5) + ' ' + (y - 2) + 'l-7 -18" stroke="#0a0c10" stroke-width="3.5" stroke-linecap="round"/>' : "") + '</g>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="#120d1c"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="38" height="200" fill="#170f24"/>').join("") +
      '<g class="fw-sw"><path d="M80 100l-50 150h40z" fill="' + ICE + '" opacity=".2"/></g><g class="fw-sw fw-sw2"><path d="M320 100l10 150h40z" fill="#e4572e" opacity=".2"/></g><g class="fw-sw"><path d="M200 100l-20 150h40z" fill="' + GOLD + '" opacity=".18"/></g>' +
      '<rect x="0" y="70" width="400" height="16" fill="#2a2234"/><rect x="0" y="62" width="400" height="5" fill="#8a8d93"/>' + Array.from({ length: 41 }, (_, i) => '<path d="M' + (i * 10) + ' 66v20" stroke="#8a8d93" stroke-width="2"/>').join("") +
      '<g transform="translate(200 40)"><circle cx="0" cy="-8" r="8" fill="#0a0c10"/><rect x="-9" y="0" width="18" height="24" rx="5" fill="#0a0c10"/><path d="M6 4l10 -12" stroke="#0a0c10" stroke-width="4" stroke-linecap="round"/><rect x="13" y="-17" width="5" height="10" rx="2" fill="#9aa3ad"/></g>' +
      '<rect x="150" y="130" width="100" height="40" rx="4" fill="#1d1d22" stroke="' + ICE + '" stroke-width="2"/><g class="fw-spin"><circle cx="176" cy="150" r="12" fill="#111"/><circle cx="176" cy="150" r="4" fill="#e4572e"/></g><g class="fw-spin"><circle cx="224" cy="150" r="12" fill="#111"/><circle cx="224" cy="150" r="4" fill="' + ICE + '"/></g>' +
      [24, 60, 96, 304, 340, 376].map((x, i) => '<circle class="fw-gl fw-g' + (i % 3 + 1) + '" cx="' + x + '" cy="24" r="4" fill="' + [ICE, GOLD, "#e4572e"][i % 3] + '"/>').join("") +
      crowd,
      "");
  }

  /* 5. N Broad St and W Glenwood Ave, North Philly: green signs, FREEWAY and ICE CITY tagged on the wall, snow drifting, the old brick North Philadelphia rail station with its arched windows behind, a Route 16 bus rolling up Broad */
  function corner() {
    const snow = Array.from({ length: 18 }, (_, i) => '<circle class="fw-snow' + (i % 3 ? " fw-s" + (i % 3 + 1) : "") + '" cx="' + (10 + (i * 47) % 390) + '" cy="' + ((i * 13) % 30) + '" r="' + (i % 2 ? 1.6 : 2.2) + '" fill="#eaf6ff" opacity=".85"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fw5)"/>' + stars(12) +
      '<g fill="#1b2034"><rect x="0" y="78" width="60" height="70"/><rect x="340" y="62" width="60" height="86"/></g>' +
      '<rect x="92" y="58" width="216" height="84" fill="#8a4a34"/><path d="M84 60l116 -28 116 28z" fill="#4a3a36"/><rect x="176" y="18" width="48" height="44" fill="#7a4030"/><path d="M170 20l30 -14 30 14z" fill="#4a3a36"/>' +
      '<circle cx="200" cy="38" r="11" fill="#f4ecd6" stroke="#3a2a20" stroke-width="2"/><path d="M200 38v-7M200 38l5 3" stroke="#3a2a20" stroke-width="1.8" stroke-linecap="round"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (106 + i * 40) + ' 132v-40a12 12 0 0 1 24 0v40z" fill="#f6c46a" class="fw-gl fw-g' + (i % 3 + 1) + '" opacity=".9"/>').join("") +
      '<rect x="92" y="74" width="216" height="4" fill="#d8caa8"/>' +
      '<rect x="0" y="136" width="400" height="90" fill="#5b4a6a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#4e3f5c" stroke-width="1"/>').join("") +
      tag("FREEWAY", 22, 196, 46, ICE, -6) + tag("ICE CITY", 214, 190, 26, GOLD, -4) + tag("PHILLY FREEZER", 26, 218, 16, "#fff", -3) + tag("STATE PROP", 226, 214, 16, "#e4572e", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="fw-bus"><rect x="0" y="228" width="110" height="26" rx="4" fill="#e9ecef"/><rect x="0" y="246" width="110" height="5" fill="#1f4e79"/><rect x="4" y="232" width="16" height="10" fill="#28323c"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (24 + i * 17) + '" y="232" width="13" height="10" fill="#28323c"/>').join("") +
      '<rect x="6" y="224" width="20" height="6" rx="1" fill="#111"/><text x="16" y="229.5" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb000">16</text><circle cx="20" cy="255" r="4.5" fill="#111"/><circle cx="90" cy="255" r="4.5" fill="#111"/></g>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(296, 98, 100, "N Broad St") + sign(286, 124, 112, "W Glenwood Av") +
      '<g class="fw-sp"><circle cx="196" cy="166" r="3" fill="' + ICE + '" opacity=".7"/></g><g class="fw-sp fw-sp2"><circle cx="202" cy="160" r="2" fill="' + ICE + '" opacity=".6"/></g>' + snow,
      sky("fw5", "#0e1530", "#5a4a7a"));
  }

  window.SCENES = { station: station, highway: highway, fifth: fifth, fluid: fluid, corner: corner };
})();
