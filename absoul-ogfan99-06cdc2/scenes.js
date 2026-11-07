/* absoul scenes (Regions tab: Los Angeles + SoCal; Carson). CSS classes prefixed ab- (the page's own anim-train is kept).
   1 Metro Local 246 stop at Avalon Blvd and Carson St, by Carson City Hall: the orange 246 pulling in, the civic center behind.
   2 Magic Disc, his family's record store in Carson ("Might've sold you a white tee down at Magic Disk / That's where I was raised", HOLLANDAISE): crates, a spinning record, white tees on the wall.
   3 Point Fermin Lighthouse in San Pedro, the far end of the 246 line ("They wanna share my light", Illuminate): the beam sweeping over the Pacific.
   4 Dignity Health Sports Park in Carson at night ("Shoot for the moon", Moonshooter): the stadium lights, a full moon, a shooting star.
   5 Avalon Blvd and Del Amo Blvd ("Youngin from Del Amo", Huey Knew THEN): green signs, AB-SOUL tagged, the green Vincent Thomas Bridge far behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes abflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.ab-flk{animation:abflick 2.2s infinite}.ab-flk2{animation-delay:.8s}' +
    '@keyframes abcar{from{transform:translateX(-170px)}to{transform:translateX(560px)}}.ab-car{animation:abcar 7s linear infinite}.ab-car2{animation-delay:-3.5s}' +
    '@keyframes absway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.ab-palm{transform-box:fill-box;transform-origin:50% 100%;animation:absway 3.6s ease-in-out infinite}.ab-palm2{animation-delay:-1.7s}' +
    '@keyframes abspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.ab-spin{transform-box:fill-box;transform-origin:50% 50%;animation:abspin 1.8s linear infinite}' +
    '@keyframes abbeam{0%,100%{transform:rotate(-38deg)}50%{transform:rotate(38deg)}}.ab-beam{transform-box:fill-box;transform-origin:0% 50%;animation:abbeam 5s ease-in-out infinite}' +
    '@keyframes abwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.ab-wv{animation:abwave 3s ease-in-out infinite}.ab-wv2{animation-delay:-1.5s}' +
    '@keyframes abstar{0%{transform:translate(0,0);opacity:0}10%{opacity:1}60%{transform:translate(-160px,70px);opacity:0}100%{opacity:0}}.ab-star{animation:abstar 3.4s ease-in infinite}' +
    '@keyframes abglow{0%,100%{opacity:.35}50%{opacity:.8}}.ab-glow{animation:abglow 2s ease-in-out infinite}' +
    '@keyframes abspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ab-sp{animation:abspray 1.4s ease-out infinite}.ab-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const palm = (x, y, h, cls) => '<g class="ab-palm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q-4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#6b4a2a" stroke-width="4" fill="none"/>' +
    '<g fill="#2f6a3a"><path d="M' + (x + 2) + ' ' + (y - h) + 'q-20 -6 -30 8q16 -10 30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q20 -6 30 8q-16 -10 -30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q-8 -18 -26 -16q16 2 26 16z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q8 -18 26 -16q-16 2 -26 16z"/></g></g>';
  const METRO = "#e56b1f", LAV = "#b48cff", TEAL = "#43d9c3", GOLD = "#ffcf5a";

  /* 1. Metro Local 246 at Avalon Blvd / Carson St, Carson City Hall behind */
  function abstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (70 + i * 40) + '" y="112" width="30" height="22" rx="2" fill="#20303c"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="102" width="300" height="56" rx="8" fill="' + METRO + '" stroke="#8a3c10" stroke-width="2"/>' + wins +
      '<rect x="40" y="140" width="300" height="6" fill="#f3f4f6"/>' +
      '<rect x="306" y="110" width="30" height="24" rx="3" fill="#20303c"/><rect x="302" y="104" width="36" height="6" rx="1" fill="#111"/><text x="320" y="109" text-anchor="middle" ' + font + ' font-size="5" fill="#ffb000">246 AVALON</text>' +
      '<circle cx="90" cy="160" r="11" fill="#1a1a1a"/><circle cx="90" cy="160" r="5" fill="#aaa"/><circle cx="290" cy="160" r="11" fill="#1a1a1a"/><circle cx="290" cy="160" r="5" fill="#aaa"/>' +
      '<circle cx="337" cy="148" r="3" fill="#fff6c2"/></g>';
    /* the civic center: a long white block with dark window bands and a taller tower */
    const city = '<rect x="60" y="56" width="280" height="114" fill="#eeeae2"/><rect x="230" y="30" width="80" height="140" fill="#f5f2ea"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="60" y="' + (66 + i * 24) + '" width="170" height="8" fill="#5a6a7a"/><rect x="236" y="' + (40 + i * 30) + '" width="68" height="10" fill="#5a6a7a"/>').join("") +
      '<rect x="56" y="52" width="288" height="5" fill="#c9c2b4"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#abs1)"/>' +
      '<circle cx="46" cy="40" r="18" fill="#fff0b8" opacity=".9"/>' +
      city +
      palm(26, 170, 118) + palm(372, 170, 108, "ab-palm2") +
      '<rect x="0" y="170" width="400" height="14" fill="#c7c1b4"/>' +
      bus +
      '<rect x="0" y="184" width="400" height="76" fill="#3e3d44"/><path d="M0 232h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="18 12"/>' +
      car("ab-car", 0, 246, LAV) +
      '<rect x="54" y="190" width="292" height="32" rx="3" fill="#111"/><text x="68" y="211" ' + font + ' font-size="14" fill="#fff">Avalon Blvd / Carson St</text>' +
      '<rect x="296" y="196" width="40" height="20" rx="3" fill="' + METRO + '"/><text x="316" y="211" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">246</text>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#333" opacity=".9">METRO LOCAL · CARSON CITY HALL · CARSON</text>',
      sky("abs1", "#8fd0f5", "#e8f6ff"));
  }

  /* 2. Magic Disc, the family record store: crates, white tees, a record spinning */
  function abrecords() {
    const crate = (x, c) => '<rect x="' + x + '" y="168" width="70" height="40" fill="#8a5a32" stroke="#5b3a22" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (x + 6 + i * 10) + '" y="' + (150 + (i % 3) * 3) + '" width="8" height="22" fill="' + [c, "#222", "#e8483a", "#f2f2f2", TEAL, "#3a6fd8"][i] + '"/>').join("");
    const tee = (x) => '<path d="M' + x + ' 62l12 -6h12l12 6l-6 10h-4v26h-28v-26h-4z" fill="#fafafa" stroke="#bbb" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="#3a2a44"/>' +
      '<rect x="0" y="0" width="400" height="40" fill="#241a2c"/>' +
      '<rect x="110" y="8" width="180" height="26" rx="4" fill="#111" stroke="' + LAV + '" stroke-width="2"/><text x="200" y="27" text-anchor="middle" ' + font + ' font-size="15" fill="' + LAV + '" class="ab-flk">MAGIC DISC</text>' +
      tee(30) + tee(80) + tee(300) + tee(350) +
      /* turntable */
      '<rect x="150" y="60" width="100" height="72" rx="6" fill="#1c1c22" stroke="#555" stroke-width="2"/>' +
      '<g class="ab-spin"><circle cx="192" cy="96" r="30" fill="#111"/><circle cx="192" cy="96" r="22" fill="none" stroke="#333" stroke-width="1.5"/><circle cx="192" cy="96" r="14" fill="none" stroke="#333" stroke-width="1.5"/><path d="M172 84q8 -10 18 -12" stroke="#666" stroke-width="2" fill="none"/><circle cx="192" cy="96" r="8" fill="' + LAV + '"/><circle cx="192" cy="96" r="2" fill="#fff"/></g>' +
      '<path d="M238 68v30l-16 12" stroke="#bbb" stroke-width="3" fill="none"/><circle cx="238" cy="68" r="4" fill="#bbb"/>' +
      '<rect x="0" y="208" width="400" height="52" fill="#5a4636"/><path d="M0 208h400" stroke="#2a1e16" stroke-width="2"/>' +
      crate(20, LAV) + crate(110, GOLD) + crate(220, TEAL) + crate(310, "#e86a9a") +
      '<text x="200" y="146" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".85">RECORDS · TAPES · CDS · CARSON</text>' +
      tag("SOULO", 18, 40, 16, TEAL, -8),
      "");
  }

  /* 3. Point Fermin Lighthouse, San Pedro: the beam sweeping the Pacific */
  function ablighthouse() {
    return svg(
      '<rect width="400" height="260" fill="url(#abs3)"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + ((i * 67) % 400) + '" cy="' + ((i * 23) % 80 + 8) + '" r="1.2" fill="#fff" opacity=".8"/>').join("") +
      '<g class="ab-beam"><path d="M210 78L400 40v76z" fill="#fff6c8" opacity=".28"/></g>' +
      '<rect x="0" y="150" width="400" height="110" fill="#14304a"/>' +
      '<g class="ab-wv"><path d="M0 170q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0v6h-440z" fill="#2a5a80"/></g>' +
      '<g class="ab-wv ab-wv2"><path d="M0 200q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0v6h-440z" fill="#2a5a80"/></g>' +
      /* cliff */
      '<path d="M0 150h290l30 30l20 80H0z" fill="#6b5a44"/><path d="M0 150h290" stroke="#7aa05a" stroke-width="6"/>' +
      palm(60, 150, 70) + palm(270, 150, 64, "ab-palm2") +
      /* lighthouse: cream stick-style house, red-brown roof, square tower, black lantern */
      '<rect x="140" y="110" width="140" height="40" fill="#f2ead6" stroke="#8a3a2a" stroke-width="2"/><path d="M134 112l76 -22l76 22z" fill="#8a3a2a"/>' +
      '<rect x="190" y="76" width="40" height="40" fill="#f2ead6" stroke="#8a3a2a" stroke-width="2"/>' +
      '<rect x="186" y="72" width="48" height="5" fill="#8a3a2a"/><rect x="196" y="56" width="28" height="16" fill="#1c1c1c"/><rect x="200" y="58" width="20" height="12" fill="#fff3b0" class="ab-glow"/><path d="M194 56l16 -12l16 12z" fill="#1c1c1c"/>' +
      '<rect x="156" y="122" width="12" height="16" fill="#3a4a5a"/><rect x="186" y="122" width="12" height="16" fill="#3a4a5a"/><rect x="222" y="122" width="12" height="16" fill="#3a4a5a"/><rect x="252" y="122" width="12" height="16" fill="#3a4a5a"/>' +
      '<path d="M140 150v-6h140v6" stroke="#8a3a2a" stroke-width="2" fill="none"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">POINT FERMIN · SAN PEDRO · END OF THE 246</text>',
      sky("abs3", "#0c1030", "#3a3a7a"));
  }

  /* 4. Dignity Health Sports Park, Carson: stadium lights, the moon, a shooting star */
  function abstadium() {
    const mast = (x) => '<rect x="' + (x - 2) + '" y="40" width="4" height="110" fill="#8a8a96"/><rect x="' + (x - 14) + '" y="30" width="28" height="14" fill="#444"/>' +
      Array.from({ length: 6 }, (_, i) => '<circle cx="' + (x - 10 + (i % 3) * 10) + '" cy="' + (34 + Math.floor(i / 3) * 6) + '" r="2.5" fill="#fffbe0" class="ab-flk' + (i % 2 ? " ab-flk2" : "") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#abs4)"/>' +
      '<circle cx="300" cy="60" r="30" fill="#f4f1de"/><circle cx="290" cy="52" r="5" fill="#dcd8c0"/><circle cx="310" cy="70" r="4" fill="#dcd8c0"/>' +
      '<g class="ab-star"><path d="M370 20l-40 18" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="370" cy="20" r="2.5" fill="#fff"/></g>' +
      mast(40) + mast(360) +
      '<path d="M20 170q180 -60 360 0v40H20z" fill="#d8d2c4"/><path d="M40 168q160 -50 320 0" stroke="#b03a2e" stroke-width="5" fill="none"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (52 + i * 22) + '" y="' + (150 - Math.round(Math.sin((i + .5) / 14 * Math.PI) * 18)) + '" width="12" height="10" fill="#4a5a6a"/>').join("") +
      '<path d="M20 210h360" stroke="#a8a090" stroke-width="3"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#2e6b3a"/><path d="M0 230h400" stroke="#fff" stroke-width="2" opacity=".5"/>' +
      tag("SHOOT FOR THE MOON", 70, 108, 20, GOLD, -5) +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">THE STADIUM AT DOMINGUEZ HILLS · CARSON</text>',
      sky("abs4", "#05061a", "#2a1a4a"));
  }

  /* 5. Avalon Blvd and Del Amo Blvd: green signs, AB-SOUL tagged, the Vincent Thomas Bridge far behind */
  function abcorner() {
    const bridge = '<g stroke="#2f8a5a" fill="none" transform="translate(-40 -38)"><path d="M60 128h280" stroke-width="4"/><path d="M130 128V70M270 128V70" stroke-width="6"/><path d="M60 120q70 -2 70 -50q70 60 140 0q0 48 70 50" stroke-width="2"/>' +
      '<path d="M128 74h4M268 74h4" stroke-width="10"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#abs5)"/>' +
      '<circle cx="340" cy="44" r="18" fill="#ffd27a" opacity=".9"/>' +
      bridge +
      '<rect x="0" y="90" width="400" height="50" fill="#5f7f95"/>' +
      '<rect x="0" y="140" width="400" height="120" fill="#3e3d44"/>' +
      '<rect x="20" y="104" width="250" height="96" fill="#cdd3d8"/><rect x="20" y="98" width="250" height="8" fill="#6a5a7a"/>' +
      tag("AB-SOUL", 36, 156, 42, LAV, -6) + tag("DEL AMO", 44, 190, 20, TEAL, -3) + tag("SOULO", 180, 190, 20, GOLD, -5) +
      '<g class="ab-sp"><circle cx="262" cy="150" r="3" fill="' + LAV + '"/></g><g class="ab-sp ab-sp2"><circle cx="266" cy="144" r="2" fill="' + LAV + '"/></g>' +
      '<rect x="314" y="80" width="5" height="130" fill="#6d737a"/>' + sign(270, 72, 94, "Avalon Blvd") + sign(266, 98, 102, "Del Amo Blvd") +
      palm(384, 200, 120, "ab-palm2") +
      '<rect x="0" y="200" width="400" height="8" fill="#c7c1b4"/>' +
      car("ab-car", 0, 236, "#2b2b30") + car("ab-car ab-car2", 0, 238, TEAL),
      sky("abs5", "#7a6ac8", "#ffc6a0"));
  }

  window.SCENES = { abstation: abstation, abrecords: abrecords, ablighthouse: ablighthouse, abstadium: abstadium, abcorner: abcorner };
})();
