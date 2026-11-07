/* ludacris scenes (Regions tab: Atlanta; College Park - Banneker High, Old National, the airport). CSS classes prefixed ld- (the page's own anim-train is kept).
   1 College Park station on MARTA's Red + Gold lines: open-air platform under the long canopy, a silver train sliding in.
   2 The radio booth: he was "Chris Lova Lova" on Atlanta's 107.9 before the rap deal - ON AIR light, mic, VU meters dancing.
   3 Banneker High School, College Park (his high school): red-brick front, red + silver Trojans banner, the flag waving.
   4 Georgia International Convention Center in College Park with the ATL SkyTrain gliding past on its guideway.
   5 Old National Hwy and Godby Rd: green signs, LUDACRIS tagged, a candy-paint Cadillac rolling two miles an hour, the airport control tower behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ldblink{0%,100%{opacity:1}50%{opacity:.25}}.ld-blink{animation:ldblink 1.2s infinite}' +
    '@keyframes ldvu{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}80%{transform:scaleY(.85)}}.ld-vu{transform-box:fill-box;transform-origin:50% 100%;animation:ldvu .9s ease-in-out infinite}' +
    '.ld-vu2{animation-delay:-.3s}.ld-vu3{animation-delay:-.6s}.ld-vu4{animation-delay:-.15s}' +
    '@keyframes ldwave{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.ld-flag{transform-box:fill-box;transform-origin:0% 50%;animation:ldwave 1.4s ease-in-out infinite}' +
    '@keyframes ldsky{from{transform:translateX(-160px)}to{transform:translateX(460px)}}.ld-sky{animation:ldsky 8s linear infinite;animation-delay:-3.5s}' +
    '@keyframes ldslow{from{transform:translateX(420px)}to{transform:translateX(-200px)}}.ld-slow{animation:ldslow 14s linear infinite;animation-delay:-1.6s}' +
    '@keyframes ldspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.ld-sp{animation:ldspray 1.4s ease-out infinite}.ld-sp2{animation-delay:.5s}' +
    '@keyframes ldtw{0%,100%{opacity:.3}50%{opacity:1}}.ld-tw{animation:ldtw 1.8s ease-in-out infinite}.ld-tw2{animation-delay:-.9s}' +
    '@keyframes ldbeacon{0%,100%{opacity:.2}50%{opacity:1}}.ld-bc{animation:ldbeacon 1s infinite}' +
    '@keyframes ldnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.ld-note{animation:ldnote 2.4s ease-out infinite}.ld-note2{animation-delay:-1.2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const label = (x, w, txt) => '<rect x="' + x + '" y="234" width="' + w + '" height="18" rx="3" fill="#000" opacity=".55"/><text x="' + (x + w / 2) + '" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="' + (i % 5 ? "" : "ld-tw") + '" cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.8 : 1.3) + '" fill="#fff" opacity=".7"/>').join("");
  const RD = "#ce242b", GD = "#d4a723", GOLD = "#f2b632", RED = "#d7263d", SILVER = "#c0c7cf";

  /* 1. College Park station */
  function ldstation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (44 + i * 48) + '" y="112" width="34" height="22" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="102" width="330" height="66" rx="8" fill="#d3d8dc" stroke="#6d757c" stroke-width="2"/>' + win +
      '<rect x="24" y="140" width="330" height="6" fill="#f08a24"/><rect x="24" y="148" width="330" height="4" fill="#1f5fa8"/>' +
      '<rect x="334" y="106" width="18" height="56" rx="4" fill="#aeb4ba"/><circle cx="344" cy="156" r="3.5" fill="#fff6c2"/>' +
      '<rect x="262" y="106" width="68" height="12" rx="2" fill="#111"/><text x="296" y="115" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">NORTH SPRINGS</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lds1)"/>' +
      /* pines beyond the tracks */
      '<g fill="#2c4630">' + [20, 58, 96, 300, 338, 376].map((x, i) => '<path d="M' + x + ' ' + (92 - (i % 2) * 8) + 'l14 -40l14 40z"/>').join("") + '</g>' +
      /* long flat canopy on round columns */
      '<path d="M30 36h340l-14 12H44z" fill="#9aa5b0"/><rect x="44" y="48" width="312" height="5" fill="#5d6772"/>' +
      [70, 150, 250, 330].map(x => '<rect x="' + (x - 3) + '" y="53" width="6" height="40" fill="#5d6772"/>').join("") +
      '<rect class="ld-blink" x="120" y="55" width="40" height="3" fill="#fff3c4"/><rect class="ld-blink" x="240" y="55" width="40" height="3" fill="#fff3c4" style="animation-delay:-.6s"/>' +
      '<rect x="0" y="92" width="400" height="8" fill="#7a7468"/>' +
      train +
      '<rect x="0" y="168" width="400" height="8" fill="#f2c200"/><rect x="0" y="176" width="400" height="84" fill="#8f8a80"/>' +
      '<path d="M0 200h400M0 226h400" stroke="#7d786f" stroke-width="1.5"/>' +
      '<rect x="70" y="188" width="260" height="40" rx="3" fill="#111"/><text x="84" y="214" ' + font + ' font-size="18" fill="#fff">College Park</text>' + badge(224, 208, "RED", RD) + badge(272, 208, "GOLD", GD, true),
      sky("lds1", "#4a86c8", "#f5d6a0"));
  }

  /* 2. The radio booth */
  function ldradio() {
    const vu = Array.from({ length: 8 }, (_, i) => '<rect class="ld-vu ld-vu' + (1 + i % 4) + '" x="' + (232 + i * 14) + '" y="96" width="9" height="40" fill="' + (i < 5 ? "#38d26b" : i < 7 ? GOLD : RED) + '"/>').join("");
    const knobs = Array.from({ length: 12 }, (_, i) => '<circle cx="' + (60 + (i % 6) * 22) + '" cy="' + (186 + Math.floor(i / 6) * 16) + '" r="5" fill="' + (i % 4 ? "#d9d9d9" : GOLD) + '"/>').join("");
    const faders = Array.from({ length: 6 }, (_, i) => '<rect x="' + (210 + i * 22) + '" y="180" width="4" height="34" fill="#111"/><rect class="ld-vu ld-vu' + (1 + i % 4) + '" x="' + (204 + i * 22) + '" y="190" width="16" height="7" rx="1" fill="#e9e9e9"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#241a1d"/>' +
      /* foam wall */
      '<g fill="#2f2327">' + Array.from({ length: 40 }, (_, i) => '<rect x="' + ((i % 10) * 40 + 4) + '" y="' + (Math.floor(i / 10) * 36 + 4) + '" width="32" height="28" rx="3"/>').join("") + '</g>' +
      /* ON AIR light */
      '<rect x="20" y="22" width="110" height="34" rx="6" fill="#111" stroke="#555" stroke-width="2"/><rect class="ld-blink" x="26" y="28" width="98" height="22" rx="4" fill="' + RED + '"/>' +
      '<text x="75" y="44" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">ON AIR</text>' +
      /* frequency + meters panel */
      '<rect x="220" y="22" width="160" height="124" rx="6" fill="#0d0d10" stroke="#444" stroke-width="2"/>' +
      '<text x="296" y="80" text-anchor="end" font-family="Courier New, monospace" font-weight="700" font-size="40" fill="' + GOLD + '">107</text><circle cx="303" cy="77" r="3" fill="' + GOLD + '"/>' +
      '<path d="M320 50a8 8 0 1 1 0 16a8 8 0 1 1 0-16zM328 58v22" stroke="' + GOLD + '" stroke-width="5" fill="none"/>' +
      '<text x="344" y="80" ' + font + ' font-size="12" fill="' + GOLD + '">FM</text>' + vu +
      /* mic on a boom */
      '<path d="M40 70l70 60" stroke="#777" stroke-width="5"/><path d="M110 130l40 20" stroke="#777" stroke-width="4"/>' +
      '<rect x="140" y="138" width="22" height="40" rx="10" fill="#2b2b2b" stroke="#888" stroke-width="2" transform="rotate(-30 151 158)"/>' +
      '<g fill="' + GOLD + '"><text class="ld-note" x="176" y="132" font-size="18">&#9835;</text><text class="ld-note ld-note2" x="194" y="122" font-size="14">&#9834;</text></g>' +
      /* console */
      '<path d="M30 170h340l20 70H10z" fill="#3a3a40"/><rect x="30" y="166" width="340" height="8" fill="#55555d"/>' + knobs + faders +
      label(130, 140, "LIVE FROM THE BOOTH"),
      "");
  }

  /* 3. Banneker High School */
  function ldbanneker() {
    const winrow = y => Array.from({ length: 9 }, (_, i) => '<rect x="' + (52 + i * 34) + '" y="' + y + '" width="18" height="22" fill="#cfe3ef" stroke="#e8e2d6" stroke-width="2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lds3)"/>' +
      '<g fill="#3d6a3a"><circle cx="20" cy="120" r="30"/><circle cx="384" cy="118" r="28"/></g>' +
      /* building */
      '<rect x="40" y="70" width="320" height="130" fill="#9c4a33"/>' + '<g stroke="#86402c" stroke-width="1">' + Array.from({ length: 12 }, (_, i) => '<path d="M40 ' + (80 + i * 10) + 'h320"/>').join("") + '</g>' +
      '<rect x="36" y="64" width="328" height="8" fill="#e8e2d6"/>' + winrow(84) + winrow(124) +
      /* entrance */
      '<rect x="160" y="140" width="80" height="60" fill="#e8e2d6"/><rect x="170" y="154" width="26" height="46" fill="#2b3a46"/><rect x="204" y="154" width="26" height="46" fill="#2b3a46"/>' +
      '<rect x="104" y="104" width="192" height="26" fill="#e8e2d6"/><text x="200" y="122" text-anchor="middle" ' + font + ' font-size="12.5" fill="' + RED + '">BANNEKER HIGH SCHOOL</text>' +
      /* banner red + silver */
      '<rect x="64" y="150" width="76" height="40" fill="' + RED + '" stroke="' + SILVER + '" stroke-width="3"/><text x="102" y="168" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">HOME OF THE</text><text x="102" y="183" text-anchor="middle" ' + font + ' font-size="13" fill="' + SILVER + '">TROJANS</text>' +
      /* flagpole */
      '<rect x="320" y="20" width="4" height="180" fill="#bbb"/><g class="ld-flag"><rect x="324" y="24" width="44" height="26" fill="' + RED + '"/><rect x="324" y="32" width="44" height="6" fill="' + SILVER + '"/></g>' +
      /* lawn + walk */
      '<rect x="0" y="200" width="400" height="60" fill="#4f7a3c"/><path d="M180 200h40l20 60h-80z" fill="#cfc8b8"/>' +
      label(130, 140, "BANNEKER HIGH, COLLEGE PARK"),
      sky("lds3", "#5ea0dc", "#d9ecf7"));
  }

  /* 4. Georgia International Convention Center + the SkyTrain */
  function ldgicc() {
    const train = '<g class="ld-sky"><rect x="0" y="56" width="120" height="26" rx="10" fill="#f4f6f8" stroke="#8a96a2" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (10 + i * 22) + '" y="62" width="16" height="11" rx="2" fill="#24435e"/>').join("") + '<rect x="0" y="76" width="120" height="3" fill="#1f5fa8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lds4)"/>' + stars(18) +
      /* guideway */
      '<rect x="0" y="82" width="400" height="8" fill="#b9c0c7"/>' + [40, 140, 240, 340].map(x => '<rect x="' + (x - 5) + '" y="90" width="10" height="70" fill="#9aa3ab"/>').join("") + train +
      /* convention center: long low glass hall with a curving roof and a tall glass tower */
      '<path d="M20 160q180 -40 360 0v60H20z" fill="#3b5068"/>' +
      '<g fill="#8ec5e8" opacity=".85">' + Array.from({ length: 16 }, (_, i) => '<rect x="' + (28 + i * 22) + '" y="' + (168 - Math.round(Math.sin((i + .5) / 16 * Math.PI) * 16)) + '" width="16" height="' + (44 + Math.round(Math.sin((i + .5) / 16 * Math.PI) * 16)) + '"/>').join("") + '</g>' +
      '<rect x="250" y="100" width="44" height="120" fill="#2c3e52"/><g fill="#a8d8f5">' + Array.from({ length: 10 }, (_, i) => '<rect x="256" y="' + (106 + i * 11) + '" width="32" height="6"/>').join("") + '</g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#2a2a2e"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>' +
      label(100, 200, "CONVENTION CENTER + SKYTRAIN"),
      sky("lds4", "#1b2a52", "#e08a4a"));
  }

  /* 5. Old National Hwy and Godby Rd */
  function ldcorner() {
    const caddy = '<g class="ld-slow"><path d="M0 214h150l-8 -18h-30l-16 -16h-60l-18 16h-14z" fill="' + GOLD + '" stroke="#7a5512" stroke-width="2"/>' +
      '<rect x="56" y="184" width="40" height="12" fill="#2b3a46"/><circle cx="34" cy="216" r="12" fill="#111"/><circle cx="34" cy="216" r="6" fill="' + SILVER + '"/><circle cx="118" cy="216" r="12" fill="#111"/><circle cx="118" cy="216" r="6" fill="' + SILVER + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lds5)"/>' +
      /* airport control tower far behind */
      '<g opacity=".9"><path d="M300 150V54h14v96z" fill="#cfd5db"/><path d="M292 54l6 -14h18l6 14z" fill="#9aa5b0"/><path d="M288 40h38l-4 -14h-30z" fill="#4c6d8a"/><rect x="292" y="20" width="30" height="6" fill="#cfd5db"/><circle class="ld-bc" cx="307" cy="16" r="3" fill="' + RED + '"/></g>' +
      /* wall */
      '<rect x="0" y="100" width="260" height="104" fill="#7d6a5a"/>' + '<g stroke="#6c5a4b" stroke-width="1">' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (110 + i * 10) + 'h260"/>').join("") + '</g>' +
      tag("LUDACRIS", 18, 160, 40, GOLD, -6) + tag("DTP", 206, 196, 22, RED, 4) +
      '<g fill="' + RED + '"><circle class="ld-sp" cx="246" cy="150" r="3"/><circle class="ld-sp ld-sp2" cx="238" cy="158" r="2.5"/></g>' +
      /* sign pole */
      '<rect x="318" y="60" width="6" height="150" fill="#6b6b6b"/>' + sign(268, 66, 110, "Old National Hwy") + sign(276, 92, 92, "Godby Rd") +
      '<rect x="0" y="204" width="400" height="56" fill="#3a3a3e"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      caddy,
      sky("lds5", "#ff9e5e", "#ffd9a8"));
  }

  window.SCENES = { ldstation, ldradio, ldbanneker, ldgicc, ldcorner };
})();
