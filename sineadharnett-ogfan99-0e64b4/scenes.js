/* sineadharnett scenes (Regions tab: UK + EUROPE; Finchley, north London - raised by her Thai mum in Finchley, Holly Park Primary in Friern Barnet,
   weekend classes at the Royal Ballet School; her own label is Thairish).
   1 Finchley Central (Northern line), a surface station: a silver tube train with the black Northern line stripe pulling in under the platform canopy.
   2 A ballet studio (her weekend Royal Ballet School classes as a girl): long mirror, wooden barre, satin pointe shoes, a tutu spinning.
   3 Bangkok, her mum's side: Wat Arun's white-and-porcelain spires over the Chao Phraya at dusk, a longtail boat passing, lanterns swaying.
   4 Alexandra Palace up on the hill above Friern Barnet: the long palace front, the radio mast, kites over north London.
   5 Ballards Lane and Regents Park Road, Finchley N3: London street plates, SINEAD tagged with THAIRISH and LEO BEAR, the Victorian tower of Christ's College behind.
   CSS classes prefixed "sh-" (the page's own anim-train is kept). No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes shTw{0%,100%{opacity:.25}50%{opacity:1}}.sh-tw{animation:shTw 2.4s ease-in-out infinite}.sh-tw2{animation-delay:-1.2s}' +
    '@keyframes shSpin{0%,100%{transform:scaleX(1)}50%{transform:scaleX(-1)}}.sh-spin{transform-box:fill-box;transform-origin:50% 50%;animation:shSpin 1.6s ease-in-out infinite}' +
    '@keyframes shSway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.sh-sway{transform-box:fill-box;transform-origin:50% 0;animation:shSway 2.8s ease-in-out infinite}.sh-sway2{animation-delay:-1.4s}' +
    '@keyframes shBoat{from{transform:translateX(-120px)}to{transform:translateX(440px)}}.sh-boat{animation:shBoat 14s linear infinite}' +
    '@keyframes shKite{0%,100%{transform:translate(0,0) rotate(-6deg)}50%{transform:translate(8px,-8px) rotate(6deg)}}.sh-kite{transform-box:fill-box;transform-origin:50% 100%;animation:shKite 3.2s ease-in-out infinite}.sh-kite2{animation-delay:-1.6s}' +
    '@keyframes shCloud{from{transform:translateX(-140px)}to{transform:translateX(440px)}}.sh-cloud{animation:shCloud 30s linear infinite}.sh-cloud2{animation-delay:-15s}' +
    '@keyframes shBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.sh-bob{animation:shBob 2s ease-in-out infinite}' +
    '@keyframes shRip{0%,100%{opacity:.3}50%{opacity:.8}}.sh-rip{animation:shRip 1.8s ease-in-out infinite}.sh-rip2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const PINK = "#f4a7bb", GOLD = "#e0b84f", TEAL = "#6fd0c2";
  /* London street plate: white, black capitals, red borough/postcode line */
  const plate = (x, y, w, name, pc) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="30" rx="2" fill="#fbfbf7" stroke="#222" stroke-width="2"/>' +
    '<rect x="' + (x + 3) + '" y="' + (y + 3) + '" width="' + (w - 6) + '" height="24" fill="none" stroke="#222" stroke-width="1"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#111">' + name + '</text>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 25) + '" text-anchor="middle" ' + font + ' font-size="5.4" fill="#c8102e">' + pc + '</text>';

  /* 1. Finchley Central, Northern line, surface platform */
  function shstation() {
    let win = ""; for (let i = 0; i < 6; i++) win += '<rect x="' + (64 + i * 40) + '" y="128" width="28" height="22" rx="4" fill="#1d2630"/>';
    const train = '<g class="anim-train"><path d="M24 200v-66q0 -18 18 -18h258q30 0 40 30v54z" fill="#dfe3e6" stroke="#7d868d" stroke-width="2"/>' +
      '<path d="M300 116q30 0 40 30v14h-40z" fill="#1d2630"/>' + win +
      '<rect x="40" y="126" width="18" height="60" rx="2" fill="#2a333c"/><rect x="186" y="126" width="22" height="60" rx="2" fill="#2a333c"/><path d="M197 126v60" stroke="#7d868d" stroke-width="1.5"/>' +
      '<rect x="24" y="160" width="316" height="8" fill="#111"/><rect x="24" y="168" width="316" height="4" fill="#c8102e"/>' +
      '<rect x="316" y="122" width="20" height="10" rx="2" fill="#111"/><text x="326" y="130" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">N</text>' +
      '<rect x="328" y="178" width="10" height="6" rx="2" fill="#fff4c0"/>' +
      '<rect x="60" y="200" width="44" height="8" fill="#333"/><rect x="250" y="200" width="44" height="8" fill="#333"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#shs1)"/>' +
      '<g class="sh-cloud"><ellipse cx="60" cy="30" rx="34" ry="9" fill="#fff" opacity=".6"/></g><g class="sh-cloud sh-cloud2"><ellipse cx="60" cy="50" rx="26" ry="7" fill="#fff" opacity=".5"/></g>' +
      /* trees + houses behind */
      '<path d="M0 104q30 -26 60 -6q30 -22 70 -2q40 -20 80 0q40 -18 80 2q40 -20 110 -4v16h-400z" fill="#5c7f52"/>' +
      /* canopy */
      '<rect x="0" y="60" width="400" height="10" fill="#7a2230"/><path d="M0 70h400l-10 8h-380z" fill="#5a1a24"/>' +
      [20, 140, 260, 380].map(x => '<rect x="' + (x - 3) + '" y="70" width="6" height="140" fill="#3e4a52"/>').join("") +
      /* station name board */
      '<rect x="104" y="80" width="192" height="28" rx="3" fill="#0b0b0b" stroke="#c8102e" stroke-width="2"/>' +
      '<text x="200" y="99" text-anchor="middle" ' + font + ' font-size="15" fill="#fff" letter-spacing="1">FINCHLEY CENTRAL</text>' +
      '<rect x="300" y="84" width="54" height="20" rx="3" fill="#111" stroke="#fff" stroke-width="1"/><text x="327" y="97.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">NORTHERN</text>' +
      '<rect x="0" y="112" width="400" height="98" fill="#4a5258" opacity=".25"/>' +
      train +
      /* platform edge */
      '<rect x="0" y="208" width="400" height="8" fill="#e9c74a"/><rect x="0" y="216" width="400" height="44" fill="#8f8b84"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="3">MIND THE GAP</text>',
      sky("shs1", "#8fb3cf", "#e6d9c8"));
  }

  /* 2. Ballet studio, weekend classes */
  function shballet() {
    const tutu = '<g transform="translate(250 120)"><g class="sh-spin">' +
      '<circle cx="0" cy="-54" r="7" fill="#3a2a2a"/><path d="M-6 -46q6 -6 12 0l4 26h-20z" fill="' + PINK + '"/>' +
      '<ellipse cx="0" cy="-18" rx="34" ry="8" fill="#fff2f6" stroke="' + PINK + '" stroke-width="2"/><ellipse cx="0" cy="-20" rx="26" ry="5" fill="#ffd6e2"/>' +
      '<path d="M-4 -12l-4 48M4 -12l10 44" stroke="#f3d2c1" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M-10 36h6M12 32l6 2" stroke="' + PINK + '" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M-6 -42l-22 -12M6 -42l22 -12" stroke="#f3d2c1" stroke-width="4" stroke-linecap="round"/></g></g>';
    const shoes = '<g transform="translate(78 196)"><g class="sh-sway"><path d="M0 0q10 -6 26 -2q6 4 0 8q-16 4 -26 0z" fill="#f6b8c8" stroke="#c77a90"/><path d="M4 0l-6 -26M16 -2l6 -26" stroke="#f6b8c8" stroke-width="2"/></g></g>' +
      '<g transform="translate(110 200)"><g class="sh-sway sh-sway2"><path d="M0 0q10 -6 26 -2q6 4 0 8q-16 4 -26 0z" fill="#f6b8c8" stroke="#c77a90"/><path d="M4 0l-6 -26M16 -2l6 -26" stroke="#f6b8c8" stroke-width="2"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="#efe6dc"/>' +
      /* tall windows */
      [30, 130].map(x => '<rect x="' + x + '" y="20" width="70" height="110" rx="35" fill="#cfe3f0" stroke="#fff" stroke-width="5"/><path d="M' + (x + 35) + ' 20v110M' + x + ' 75h70" stroke="#fff" stroke-width="3"/>').join("") +
      /* mirror wall */
      '<rect x="210" y="24" width="180" height="150" fill="#d6e2e8" stroke="#b7a58a" stroke-width="4"/><path d="M230 30l-14 40M260 30l-30 80M350 40l-20 60" stroke="#fff" stroke-width="3" opacity=".6"/>' +
      '<g class="sh-tw"><circle cx="370" cy="40" r="3" fill="#fff"/></g><g class="sh-tw sh-tw2"><circle cx="226" cy="150" r="2.5" fill="#fff"/></g>' +
      /* barre */
      '<rect x="0" y="140" width="400" height="6" rx="3" fill="#a8743f"/>' + [40, 160, 290].map(x => '<rect x="' + x + '" y="146" width="4" height="40" fill="#8a8a8a"/>').join("") +
      /* floor */
      '<rect x="0" y="186" width="400" height="74" fill="#c8955c"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 186l-20 74" stroke="#a87840" stroke-width="1.5"/>').join("") +
      tutu + shoes +
      '<text x="70" y="240" ' + font + ' font-size="10" fill="#5a3a20" letter-spacing="2">SATURDAY CLASS</text>');
  }

  /* 3. Bangkok - Wat Arun over the Chao Phraya at dusk */
  function shbangkok() {
    const prang = (x, base, h, w) => '<path d="M' + (x - w) + ' ' + base + 'q' + (w * 0.3) + ' -' + (h * 0.55) + ' ' + (w * 0.75) + ' -' + (h * 0.85) + 'l' + (w * 0.25) + ' -' + (h * 0.15) + 'l' + (w * 0.25) + ' ' + (h * 0.15) + 'q' + (w * 0.45) + ' ' + (h * 0.3) + ' ' + (w * 0.75) + ' ' + (h * 0.85) + 'z" fill="#f2ece2" stroke="#b7a98f" stroke-width="1.5"/>' +
      Array.from({ length: 4 }, (_, i) => '<path d="M' + (x - w * (0.8 - i * 0.17)) + ' ' + (base - h * (0.18 + i * 0.17)) + 'h' + (w * 2 * (0.8 - i * 0.17)) + '" stroke="' + (i % 2 ? TEAL : GOLD) + '" stroke-width="2.5" stroke-dasharray="3 2"/>').join("");
    const lantern = (x, cls) => '<g class="sh-sway ' + (cls || "") + '"><path d="M' + x + ' 0v18" stroke="#333"/><ellipse cx="' + x + '" cy="26" rx="8" ry="10" fill="#e8463c"/><rect x="' + (x - 4) + '" y="15" width="8" height="3" fill="' + GOLD + '"/><path d="M' + x + ' 36v6" stroke="' + GOLD + '" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#shs3)"/>' +
      '<circle cx="320" cy="70" r="22" fill="#ffd08a" opacity=".85"/>' +
      prang(120, 170, 70, 26) + prang(280, 170, 70, 26) + prang(200, 170, 130, 44) +
      '<rect x="60" y="166" width="280" height="8" fill="#e3d6bf"/>' +
      '<rect x="0" y="174" width="400" height="86" fill="#5a4a6a"/>' +
      '<g class="sh-rip"><path d="M30 196h60M200 212h80M110 236h70" stroke="#c9a0c8" stroke-width="2"/></g><g class="sh-rip sh-rip2"><path d="M300 194h60M20 222h50M260 244h90" stroke="#e7b0a0" stroke-width="2"/></g>' +
      '<g class="sh-boat"><path d="M0 208h90q-6 12 -20 12h-60q-10 0 -10 -12z" fill="#7a3b1e"/><path d="M90 208q8 -14 14 -18" stroke="#7a3b1e" stroke-width="3" fill="none"/><path d="M10 208v-8h46v8" fill="' + TEAL + '"/><path d="M8 200h50" stroke="' + PINK + '" stroke-width="3"/></g>' +
      lantern(30) + lantern(70, "sh-sway2") + lantern(330, "sh-sway2") + lantern(370),
      sky("shs3", "#3a2a5a", "#f0a070"));
  }

  /* 4. Alexandra Palace on the hill */
  function shpalace() {
    const kite = (x, y, c, cls) => '<g class="sh-kite ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'l12 16l-12 18l-12 -18z" fill="' + c + '" stroke="#333"/><path d="M' + x + ' ' + (y + 34) + 'q6 14 -4 26q-8 10 2 24" stroke="#333" fill="none"/></g>';
    let arches = ""; for (let i = 0; i < 12; i++) arches += '<path d="M' + (66 + i * 22) + ' 150v-16q7 -8 14 0v16z" fill="#4a3a2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#shs4)"/>' +
      '<g class="sh-cloud"><ellipse cx="80" cy="34" rx="40" ry="10" fill="#fff" opacity=".7"/></g><g class="sh-cloud sh-cloud2"><ellipse cx="60" cy="60" rx="30" ry="8" fill="#fff" opacity=".6"/></g>' +
      /* mast */
      '<path d="M300 112l10 -84l10 84z" fill="none" stroke="#5a5f66" stroke-width="2.5"/><path d="M303 90h14M305 70h10M307 50h6" stroke="#5a5f66" stroke-width="2"/><circle cx="310" cy="26" r="2.5" fill="#e8463c" class="sh-tw"/>' +
      /* palace */
      '<rect x="50" y="118" width="300" height="40" fill="#c99a6e" stroke="#8a6040" stroke-width="2"/>' + arches +
      '<path d="M170 118l30 -26l30 26z" fill="#b5835a" stroke="#8a6040" stroke-width="2"/><circle cx="200" cy="108" r="9" fill="none" stroke="#f3e3c8" stroke-width="3"/>' +
      '<rect x="40" y="104" width="26" height="54" fill="#c99a6e" stroke="#8a6040" stroke-width="2"/><rect x="334" y="104" width="26" height="54" fill="#c99a6e" stroke="#8a6040" stroke-width="2"/>' +
      '<rect x="290" y="104" width="44" height="16" fill="#b5835a"/>' +
      /* hill + park */
      '<path d="M0 160q200 -16 400 0v100h-400z" fill="#6f9a52"/><path d="M0 200q140 -24 400 6v54h-400z" fill="#5c8744"/>' +
      '<path d="M120 260q40 -60 90 -100" stroke="#d9cfb4" stroke-width="6" fill="none"/>' +
      kite(70, 70, PINK) + kite(360, 60, GOLD, "sh-kite2") +
      '<g class="sh-bob"><circle cx="250" cy="214" r="9" fill="#2c4a2c"/><circle cx="268" cy="220" r="7" fill="#2c4a2c"/></g>',
      sky("shs4", "#7fb0d8", "#f7d8b0"));
  }

  /* 5. Ballards Lane and Regents Park Road, Finchley N3 */
  function shcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#shs5)"/>' +
      /* Christ's College tower behind */
      '<g><rect x="250" y="40" width="44" height="100" fill="#a8523a" stroke="#6a3022" stroke-width="2"/><path d="M246 40l26 -26l26 26z" fill="#5a5e66"/>' +
      '<path d="M264 60v-10q8 -10 16 0v10zM264 92v-12q8 -10 16 0v12z" fill="#2a2a3a"/><circle cx="272" cy="118" r="8" fill="#f3e3c8" stroke="#6a3022" stroke-width="1.5"/><path d="M272 118v-5M272 118h4" stroke="#333" stroke-width="1.5"/>' +
      '<rect x="170" y="90" width="80" height="50" fill="#b4604a" stroke="#6a3022" stroke-width="2"/><path d="M166 90l44 -22l44 22z" fill="#5a5e66"/>' +
      [182, 204, 226].map(x => '<path d="M' + x + ' 128v-18q6 -8 12 0v18z" fill="#2a2a3a"/>').join("") +
      '<rect x="294" y="96" width="70" height="44" fill="#b4604a" stroke="#6a3022" stroke-width="2"/><path d="M290 96l38 -18l40 18z" fill="#5a5e66"/></g>' +
      '<g class="sh-tw"><circle cx="40" cy="30" r="2" fill="#fff"/></g><g class="sh-tw sh-tw2"><circle cx="150" cy="22" r="2" fill="#fff"/></g>' +
      '<rect x="0" y="134" width="400" height="10" fill="#9c9488"/>' +
      /* wall + tags */
      '<rect x="14" y="132" width="250" height="74" fill="#e8dccb"/><rect x="14" y="132" width="250" height="5" fill="#c9b9a0"/>' +
      Array.from({ length: 4 }, (_, r) => '<path d="M14 ' + (150 + r * 16) + 'h250" stroke="#d3c4ad" stroke-width="1"/>').join("") +
      tag("THAIRISH", 28, 156, 15, TEAL, -3) + tag("SINEAD", 34, 192, 34, PINK, -4) + tag("LEO BEAR", 168, 164, 14, GOLD, -8) +
      /* pavement + road */
      '<rect x="0" y="206" width="400" height="10" fill="#cfc8bb"/><rect x="0" y="216" width="400" height="44" fill="#45474c"/><path d="M0 248h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* red double-decker passing */
      '<g class="sh-boat"><rect x="0" y="176" width="96" height="50" rx="6" fill="#d0202e"/><rect x="6" y="182" width="84" height="14" rx="2" fill="#24303a"/><rect x="6" y="204" width="84" height="12" rx="2" fill="#24303a"/><circle cx="22" cy="228" r="7" fill="#111"/><circle cx="76" cy="228" r="7" fill="#111"/></g>' +
      /* plates on posts */
      '<rect x="300" y="150" width="4" height="60" fill="#333"/><rect x="372" y="150" width="4" height="60" fill="#333"/>' +
      plate(282, 150, 112, "BALLARDS LANE", "N3  LONDON BOROUGH OF BARNET") +
      plate(282, 116, 112, "REGENTS PARK RD", "N3  LONDON BOROUGH OF BARNET"),
      sky("shs5", "#283a64", "#f0b48a"));
  }

  window.SCENES = { shstation, shballet, shbangkok, shpalace, shcorner };
})();
