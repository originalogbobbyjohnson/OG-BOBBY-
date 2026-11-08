/* dojacat scenes (Regions tab: Los Angeles + SoCal; Tarzana, born there; raised partly at the Sai Anantam Ashram in Agoura Hills, then Oak Park). CSS classes prefixed dja-.
   1 Metro G Line busway, Tampa station in Tarzana: side platforms under the curved canopies, a silver articulated busway coach sliding in, black sign with the orange G bullet, the Santa Monica Mountains behind.
   2 Agoura Hills, the ashram in the Santa Monica Mountains (Alice Coltrane's Sai Anantam Ashram, where she lived from 8 to 12): chaparral hills, oaks, a little white temple, incense smoke and organ notes drifting up.
   3 Grand Ave, Downtown LA: the performing-arts high school she went to (steel ring tower on a straight stem, the tilted silver cone), a poplocking crew silhouetted out front.
   4 Malibu (surf camps as a kid): the pier on its pilings, boards in a rack, waves rolling in at sunset.
   5 Reseda Blvd and Ventura Blvd in Tarzana: green signs, DOJA CAT tagged with PLANET HER, MOOO! and AMALA, the Santa Monica Mountains behind.
   400 x 260 SVGs. No logos, no faces. No 9s are drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes djatrain{0%{transform:translateX(430px)}45%,100%{transform:translateX(0)}}.dja-train{animation:djatrain 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes djasmoke{0%{transform:translate(0,0) scale(.6);opacity:0}20%{opacity:.8}100%{transform:translate(14px,-70px) scale(1.6);opacity:0}}.dja-smoke{transform-box:fill-box;transform-origin:50% 100%;animation:djasmoke 4.5s ease-out infinite}.dja-s2{animation-delay:-1.5s}.dja-s3{animation-delay:-3s}' +
    '@keyframes djanote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(-30px,-60px);opacity:0}}.dja-note{animation:djanote 5s ease-out infinite}.dja-n2{animation-delay:-1.7s}.dja-n3{animation-delay:-3.4s}' +
    '@keyframes djapop{0%,100%{transform:rotate(0)}25%{transform:rotate(-40deg)}50%{transform:rotate(0)}75%{transform:rotate(35deg)}}.dja-arm{transform-box:fill-box;transform-origin:0% 50%;animation:djapop 1.2s steps(4) infinite}.dja-a2{animation-delay:-.3s}.dja-a3{animation-delay:-.6s}' +
    '@keyframes djabob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.dja-bob{animation:djabob 1.2s steps(2) infinite}.dja-b2{animation-delay:-.6s}' +
    '@keyframes djawave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.dja-wave{animation:djawave 3s linear infinite}.dja-wv2{animation-duration:4.4s}' +
    '@keyframes djasurf{0%,100%{transform:translate(0,0) rotate(-4deg)}50%{transform:translate(30px,-6px) rotate(4deg)}}.dja-surf{transform-box:fill-box;transform-origin:50% 50%;animation:djasurf 5s ease-in-out infinite}' +
    '@keyframes djaspray{0%,100%{transform:rotate(-30deg)}50%{transform:rotate(30deg)}}.dja-spray{transform-box:fill-box;transform-origin:50% 100%;animation:djaspray 3s ease-in-out infinite}' +
    '@keyframes djasp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dja-sp{animation:djasp 1.4s ease-out infinite}.dja-sp2{animation-delay:.45s}' +
    '@keyframes djatw{0%,100%{opacity:.25}50%{opacity:1}}.dja-tw{animation:djatw 2.4s ease-in-out infinite}.dja-t2{animation-delay:-1.2s}' +
    '@keyframes djacar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.dja-car{animation:djacar 7s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const PINK = "#ff5fa2", RED = "#d7263d", GOLD = "#f2c14e", GORANGE = "#f68b1f";
  const mountains = (y, c1, c2) => '<path d="M0 ' + (y + 10) + 'l40 -26l30 14l46 -40l38 22l34 -18l50 30l40 -26l44 20l38 -14l40 22v80h-400z" fill="' + c1 + '"/>' +
    '<path d="M0 ' + (y + 26) + 'l60 -16l50 12l60 -20l70 18l60 -14l50 10l50 -8v60h-400z" fill="' + c2 + '"/>';
  const palm = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q-4 -40 4 -80" stroke="#5a3e28" stroke-width="5" fill="none"/>' +
    '<path d="M4 -80q-22 -6 -36 8q18 -4 36 -8zM4 -80q22 -8 38 6q-20 -2 -38 -6zM4 -80q-12 -18 -30 -18q16 8 30 18zM4 -80q12 -20 30 -16q-16 6 -30 16z" fill="#2c6b3e"/></g>';
  const oak = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M-3 0v-22h6v22z" fill="#4a3424"/><ellipse cx="0" cy="-30" rx="24" ry="14" fill="#3f5f34"/><ellipse cx="-12" cy="-36" rx="14" ry="10" fill="#4d7040"/><ellipse cx="12" cy="-38" rx="13" ry="9" fill="#4d7040"/></g>';

  /* 1. Metro G Line busway, Tampa station, Tarzana */
  function djastation() {
    const coach = (x, w) => '<rect x="' + x + '" y="112" width="' + w + '" height="52" rx="7" fill="#d9dde1" stroke="#8a9096" stroke-width="2"/>' +
      Array.from({ length: Math.floor((w - 16) / 30) }, (_, i) => '<rect x="' + (x + 10 + i * 30) + '" y="120" width="24" height="20" rx="2" fill="#26313b"/>').join("") +
      '<rect x="' + x + '" y="146" width="' + w + '" height="5" fill="' + GORANGE + '"/><rect x="' + x + '" y="151" width="' + w + '" height="3" fill="#7d838a"/>' +
      '<circle cx="' + (x + 24) + '" cy="166" r="8" fill="#222"/><circle cx="' + (x + 24) + '" cy="166" r="3" fill="#999"/><circle cx="' + (x + w - 24) + '" cy="166" r="8" fill="#222"/><circle cx="' + (x + w - 24) + '" cy="166" r="3" fill="#999"/>';
    const bus = '<g class="dja-train">' + coach(40, 150) + '<rect x="190" y="116" width="12" height="44" fill="#3a3f45"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="190" y="' + (118 + i * 8) + '" width="12" height="3" fill="#555"/>').join("") + coach(202, 150) +
      '<rect x="46" y="114" width="66" height="8" rx="1" fill="#111"/><text x="79" y="120.5" text-anchor="middle" ' + font + ' font-size="5.4" fill="' + GORANGE + '">NORTH HOLLYWOOD</text><circle cx="44" cy="156" r="3" fill="#fff6c2"/></g>';
    const canopy = (x) => '<rect x="' + (x - 2) + '" y="72" width="4" height="40" fill="#8b8f93"/><path d="M' + (x - 34) + ' 74q34 -20 68 0" fill="none" stroke="#c6cbd0" stroke-width="7"/><path d="M' + (x - 34) + ' 74q34 -20 68 0" fill="none" stroke="#a5abb1" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dja1)"/>' + mountains(80, "#8a7a6a", "#6f6a52") +
      palm(30, 100, 0.8) + palm(372, 104, 0.9) + oak(330, 104, 0.7) +
      canopy(90) + canopy(200) + canopy(310) +
      '<rect x="0" y="104" width="400" height="8" fill="#c9c2b4"/><rect x="0" y="103" width="400" height="2" fill="' + GORANGE + '"/>' +
      bus +
      '<rect x="0" y="174" width="400" height="86" fill="#55575a"/><path d="M0 196h400M0 232h400" stroke="#f1e6a0" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="0" y="170" width="400" height="6" fill="#c9c2b4"/>' +
      /* station sign */
      '<rect x="120" y="22" width="160" height="36" rx="3" fill="#111" stroke="#444" stroke-width="2"/><circle cx="144" cy="40" r="12" fill="' + GORANGE + '"/><text x="144" y="45.5" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">G</text>' +
      '<text x="164" y="46" ' + font + ' font-size="19" fill="#fff">Tampa</text><text x="268" y="52" text-anchor="end" font-family="Helvetica, Arial, sans-serif" font-size="7" fill="#bbb">TARZANA</text>' +
      '<rect x="198" y="58" width="4" height="14" fill="#555"/>',
      sky("dja1", "#f6b38a", "#fde3c4"));
  }

  /* 2. The ashram in Agoura Hills */
  function djaashram() {
    const note = (x, y, cls) => '<g class="dja-note ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + GOLD + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><path d="M' + (x + 4.5) + ' ' + y + 'v-18l8 4" stroke="' + GOLD + '" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dja2)"/><circle cx="320" cy="62" r="24" fill="#ffd9a0" opacity=".85"/>' +
      '<path d="M0 150l60 -60l40 26l60 -54l50 40l40 -24l70 46l40 -20l40 30v130h-400z" fill="#9c8b62"/>' +
      '<path d="M0 176q80 -40 170 -22t230 -10v120h-400z" fill="#7d7a48"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + (12 + i * 25) + '" cy="' + (170 + (i % 3) * 6) + '" r="' + (7 + (i % 2) * 3) + '" fill="#5f6a3a"/>').join("") +
      oak(60, 204, 1.1) + oak(352, 200, 1.2) +
      /* the temple */
      '<rect x="150" y="128" width="100" height="62" fill="#f4efe4" stroke="#c9bfa8" stroke-width="2"/><path d="M144 130h112l-12 -14h-88z" fill="#d48a54"/>' +
      '<path d="M178 116q22 -40 44 0z" fill="#f4efe4" stroke="#c9bfa8" stroke-width="2"/><rect x="198" y="72" width="4" height="22" fill="' + GOLD + '"/><circle cx="200" cy="72" r="4" fill="' + GOLD + '"/>' +
      '<path d="M188 190v-34q12 -16 24 0v34z" fill="#7a4a2a"/>' + [162, 228].map(x => '<path d="M' + x + ' 170v-22q5 -8 10 0v22z" fill="#5b7a8a"/>').join("") +
      '<path d="M120 190h160l10 10h-180z" fill="#d8cfb8"/>' +
      /* incense + notes */
      '<rect x="128" y="186" width="3" height="14" fill="#7a4a2a"/><circle cx="129.5" cy="186" r="2" fill="#ff7a3a"/>' +
      '<circle class="dja-smoke" cx="130" cy="180" r="5" fill="#eee"/><circle class="dja-smoke dja-s2" cx="130" cy="180" r="5" fill="#eee"/><circle class="dja-smoke dja-s3" cx="130" cy="180" r="5" fill="#eee"/>' +
      note(270, 150, "") + note(290, 160, "dja-n2") + note(260, 168, "dja-n3") +
      '<path d="M0 230q100 -14 200 0t200 0v30h-400z" fill="#b39a6a"/>',
      sky("dja2", "#e98a6a", "#fbd3a8"));
  }

  /* 3. The performing-arts high school on Grand Ave */
  function djaschool() {
    const dancer = (x, cls) => '<g class="dja-bob ' + cls + '" fill="#1c1018"><circle cx="' + x + '" cy="170" r="7"/><path d="M' + (x - 8) + ' 180h16l-2 30h-12z"/>' +
      '<rect class="dja-arm ' + cls.replace("b", "a") + '" x="' + (x + 6) + '" y="181" width="18" height="5" rx="2"/><rect x="' + (x - 22) + '" y="181" width="16" height="5" rx="2"/>' +
      '<path d="M' + (x - 6) + ' 210l-6 22h6l4 -18zM' + (x + 6) + ' 210l6 22h-6l-4 -18z"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dja3)"/>' +
      /* downtown towers behind */
      '<rect x="0" y="70" width="40" height="100" fill="#7e8aa0"/><rect x="44" y="40" width="34" height="130" fill="#6c7890"/><rect x="330" y="50" width="40" height="120" fill="#6c7890"/><rect x="372" y="84" width="28" height="86" fill="#7e8aa0"/>' +
      /* the steel ring tower on a straight stem */
      '<rect x="112" y="60" width="12" height="130" fill="#b9c0c8" stroke="#8a929b" stroke-width="1.5"/>' +
      '<circle cx="118" cy="46" r="30" fill="none" stroke="#c9d0d8" stroke-width="12"/><circle cx="118" cy="46" r="30" fill="none" stroke="#8a929b" stroke-width="1.5"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="112" y="' + (70 + i * 16) + '" width="12" height="2" fill="#8a929b"/>').join("") +
      /* the tilted cone */
      '<path d="M210 186l26 -116l40 116z" fill="#d6dbe0" stroke="#9aa2ab" stroke-width="2"/><path d="M236 70l-10 116M236 70l14 116" stroke="#b3bac2" stroke-width="1.5"/>' +
      /* main building, slatted */
      '<rect x="140" y="120" width="70" height="70" fill="#3f4d5f"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (144 + i * 8) + '" y="124" width="5" height="62" fill="#5f7086"/>').join("") +
      '<rect x="276" y="110" width="80" height="80" fill="#4a5a6e"/>' + Array.from({ length: 4 }, (_, r) => Array.from({ length: 5 }, (_, c) => '<rect x="' + (282 + c * 15) + '" y="' + (118 + r * 18) + '" width="10" height="11" fill="#a9c4dc" class="' + ((r + c) % 3 ? "" : "dja-tw") + '"/>').join("")).join("") +
      '<rect x="0" y="190" width="400" height="70" fill="#8d8a86"/><rect x="0" y="188" width="400" height="4" fill="#c4bdb2"/>' +
      sign(20, 214, 96, "GRAND AVE") +
      dancer(180, "") + dancer(240, "dja-b2") + dancer(300, "") +
      '<text x="370" y="250" text-anchor="end" ' + font + ' font-size="9" fill="#fff" opacity=".85">POPLOCK CREW</text>',
      sky("dja3", "#7fb0e0", "#e8d6c8"));
  }

  /* 4. Malibu, surf camp */
  function djamalibu() {
    const wave = (y, c, cls) => '<g class="dja-wave ' + cls + '"><path d="M-40 ' + y + Array.from({ length: 12 }, () => 'q10 -8 20 0t20 0').join("") + 'v60h-480z" fill="' + c + '"/></g>';
    const board = (x, c, s) => '<path d="M' + x + ' 236q-9 -34 0 -78q9 44 0 78z" fill="' + c + '" stroke="#333" stroke-width="1.2"/><path d="M' + x + ' 160v74" stroke="' + s + '" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dja4)"/><circle cx="96" cy="110" r="30" fill="#ffd27a"/>' +
      '<path d="M0 104l60 -24l60 12l60 -18l50 14v20h-230z" fill="#8a6f74" opacity=".8"/>' +
      '<rect x="0" y="112" width="400" height="80" fill="#2f7fa6"/>' +
      /* the pier */
      '<rect x="150" y="102" width="250" height="7" fill="#7a5a3a"/><rect x="150" y="98" width="250" height="3" fill="#5a4028"/>' +
      Array.from({ length: 13 }, (_, i) => '<rect x="' + (156 + i * 19) + '" y="109" width="4" height="40" fill="#5a4028"/>').join("") +
      '<rect x="330" y="80" width="54" height="18" fill="#e9e2d4"/><path d="M326 80h62l-6 -10h-50z" fill="#3f6e8e"/>' +
      wave(140, "#3a8fb8", "") + wave(156, "#4aa3c9", "dja-wv2") +
      '<g class="dja-surf"><path d="M70 136q30 -6 54 0q-26 6 -54 0z" fill="' + PINK + '" stroke="#222" stroke-width="1"/></g>' +
      wave(172, "#69b8d6", "") +
      '<path d="M0 188q120 -12 220 -2t180 -4v80h-400z" fill="#e9d4a8"/>' +
      /* board rack */
      '<rect x="230" y="196" width="150" height="6" fill="#6b4a2e"/><rect x="236" y="196" width="5" height="44" fill="#6b4a2e"/><rect x="370" y="196" width="5" height="44" fill="#6b4a2e"/>' +
      board(256, PINK, "#fff") + board(282, GOLD, "#a33") + board(308, "#7fd1c7", "#fff") + board(334, RED, "#fff") + board(358, "#f4f1ea", PINK) +
      palm(40, 236, 1.1),
      sky("dja4", "#f08aa0", "#ffd6a8"));
  }

  /* 5. Reseda Blvd and Ventura Blvd, Tarzana */
  function djacorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dja5)"/>' + mountains(70, "#7a6a7e", "#5e5868") +
      palm(352, 118, 0.9) + palm(24, 122, 0.8) +
      '<rect x="0" y="110" width="400" height="10" fill="#4a4048"/>' +
      '<g class="dja-car"><rect x="0" y="100" width="44" height="12" rx="4" fill="' + RED + '"/><rect x="8" y="94" width="26" height="8" rx="3" fill="#3a3a44"/></g>' +
      /* wall */
      '<rect x="40" y="120" width="320" height="104" fill="#e9dccb"/>' + Array.from({ length: 6 }, (_, r) => '<path d="M40 ' + (137 + r * 17) + 'h320" stroke="#d6c7b2" stroke-width="1"/>').join("") +
      tag("DOJA CAT", 62, 182, 42, PINK, -5) +
      tag("AMALA", 286, 152, 20, RED, -6) + tag("MOOO!", 60, 214, 18, GOLD, -3) + tag("PLANET HER", 196, 214, 17, "#7fd1c7", -4) +
      /* spray can */
      '<g class="dja-spray"><rect x="336" y="196" width="12" height="26" rx="3" fill="' + PINK + '"/><rect x="339" y="190" width="6" height="7" fill="#ddd"/></g>' +
      '<circle class="dja-sp" cx="342" cy="186" r="3" fill="' + PINK + '"/><circle class="dja-sp dja-sp2" cx="346" cy="184" r="2.4" fill="' + PINK + '"/>' +
      /* sidewalk + sign pole */
      '<rect x="0" y="224" width="400" height="36" fill="#a8a29a"/><rect x="0" y="222" width="400" height="3" fill="#cfc8bd"/>' +
      '<rect x="382" y="44" width="5" height="182" fill="#5d6166"/>' + sign(284, 44, 104, "RESEDA BLVD") + sign(298, 70, 90, "VENTURA BL"),
      sky("dja5", "#f7a6b8", "#fbe0c8"));
  }

  window.SCENES = { djastation, djaashram, djaschool, djamalibu, djacorner };
})();
