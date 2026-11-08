/* jpegmafia scenes (Regions tab: THE DMV; Station North, Baltimore - where he came up after the Air Force, 2015-2018). CSS classes prefixed jm- (the page's own anim-train is kept).
   1 Penn Station (N Charles St): the Light RailLink Penn-Camden shuttle pulling up at the single-track spur platform, MARC Penn Line coaches behind.
   2 The Bell Foundry (N Calvert St): the old brick foundry turned DIY art space he hung out in - the song "1539 N. Calvert" is his ode to it. A bell swings on the mural, show lights in the basement windows.
   3 Male/Female: the 51-ft aluminum Borofsky statue on the Penn Station plaza, the gateway to Station North, its light core pulsing.
   4 The flight line: the Air Force years before Baltimore (the "Veteran" album) - a cargo plane rolling out at dusk, a footlocker stenciled VETERAN.
   5 N Calvert St and E Lanvale St: green signs, JPEGMAFIA tagged on the brick, Mount Vernon's Washington Monument column behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jmflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.jm-flk{animation:jmflick 2.4s infinite}.jm-flk2{animation-delay:.8s}' +
    '@keyframes jmblink{0%,100%{opacity:.25}50%{opacity:1}}.jm-bl{animation:jmblink 1.4s ease-in-out infinite}.jm-bl2{animation-delay:-.7s}' +
    '@keyframes jmswing{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.jm-swing{transform-box:fill-box;transform-origin:50% 0;animation:jmswing 2.2s ease-in-out infinite}' +
    '@keyframes jmpulse{0%,100%{opacity:.35}50%{opacity:1}}.jm-pulse{animation:jmpulse 2.6s ease-in-out infinite}' +
    '@keyframes jmcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.jm-car{animation:jmcar 7s linear infinite}.jm-car2{animation-delay:-3.5s}' +
    '@keyframes jmplane{0%{transform:translateX(0)}100%{transform:translateX(-90px)}}.jm-plane{animation:jmplane 6s ease-in-out infinite alternate}' +
    '@keyframes jmbeam{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.jm-beam{transform-box:fill-box;transform-origin:50% 0;animation:jmbeam 3s ease-in-out infinite}.jm-beam2{animation-delay:-1.5s}' +
    '@keyframes jmbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-20px)}}.jm-bird{animation:jmbird 14s linear infinite}.jm-bird2{animation-delay:-7s}' +
    '@keyframes jmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jm-sp{animation:jmspray 1.4s ease-out infinite}.jm-sp2{animation-delay:.45s}' +
    '@keyframes jmglitch{0%,92%,100%{transform:translateX(0)}94%{transform:translateX(-3px)}96%{transform:translateX(3px)}}.jm-gl{animation:jmglitch 3s steps(1) infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const R = "#ff3d5a", C = "#39e6ff", Y = "#f7d046";
  const LR = "#3d7cc9", MARC = "#e86f2c";
  const pill = (x, y, w, txt, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="9" fill="' + c + '"/><text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const bricks = (x, y, w, h, c) => Array.from({ length: Math.floor(h / 8) }, (_, i) => '<path d="M' + x + ' ' + (y + i * 8) + 'h' + w + '" stroke="' + c + '" stroke-width="1"/>').join("");

  /* 1. Penn Station: Light RailLink shuttle at the spur platform */
  function jmstation() {
    const facade = '<rect x="40" y="38" width="320" height="86" fill="#d8b8a0"/><rect x="34" y="32" width="332" height="10" fill="#ecd8c4"/>' +
      '<rect x="120" y="22" width="160" height="14" fill="#ecd8c4"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (66 + i * 42) + '" y="50" width="22" height="54" rx="11" fill="#3a2f3a"/><rect x="' + (68 + i * 42) + '" y="54" width="18" height="24" rx="9" fill="#ffd98a" opacity=".55"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (58 + i * 42) + '" y="44" width="5" height="70" fill="#c9a58a"/>').join("") +
      '<circle cx="200" cy="29" r="0" fill="none"/>';
    const marc = '<g><rect x="0" y="122" width="400" height="30" fill="#b7bcc2"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (8 + i * 40) + '" y="127" width="28" height="10" rx="2" fill="#2a3340"/>').join("") +
      '<rect x="0" y="141" width="400" height="4" fill="' + MARC + '"/><rect x="0" y="146" width="400" height="2" fill="#2a3340"/></g>';
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (92 + i * 44) + '" y="168" width="34" height="22" rx="3" fill="#1d2833"/>').join("");
    const train = '<g class="anim-train"><rect x="60" y="160" width="290" height="58" rx="12" fill="#f4f4f2" stroke="#7d858d" stroke-width="2"/>' + win +
      '<rect x="60" y="196" width="290" height="8" fill="' + LR + '"/><rect x="60" y="204" width="290" height="3" fill="#1a1a1a"/>' +
      '<rect x="64" y="166" width="22" height="30" rx="6" fill="#1d2833"/><rect x="322" y="166" width="24" height="30" rx="6" fill="#1d2833"/>' +
      '<path d="M200 160l-14 -16M200 160l14 -16M180 144h40" stroke="#555" stroke-width="2" fill="none"/>' +
      '<circle cx="340" cy="210" r="3.5" fill="#fff6c2"/><circle cx="70" cy="210" r="3.5" fill="#ff5a4a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jms1)"/>' +
      '<g class="jm-bird"><path d="M20 20q6 -6 12 0q6 -6 12 0" stroke="#3a2a4a" stroke-width="2" fill="none"/></g>' +
      facade + marc +
      '<path d="M0 156h400" stroke="#4a3f3a" stroke-width="2"/><path d="M0 154l40 -10h320l40 10" fill="#5a5560"/>' +
      train +
      '<rect x="0" y="218" width="400" height="8" fill="#3a3a40"/><path d="M0 222h400" stroke="#9aa0a8" stroke-width="2"/>' +
      '<rect x="0" y="226" width="400" height="34" fill="#8a8a90"/><rect x="0" y="226" width="400" height="5" fill="' + Y + '"/>' +
      '<rect x="96" y="232" width="208" height="24" rx="3" fill="#111"/><text x="164" y="249" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">PENN STATION</text>' +
      pill(236, 235, 28, "LR", LR) + pill(266, 235, 36, "MARC", MARC),
      sky("jms1", "#202848", "#d08a7a"));
  }

  /* 2. The Bell Foundry on N Calvert St */
  function jmfoundry() {
    const bell = '<g class="jm-swing"><path d="M200 70v8" stroke="#2a1a10" stroke-width="3"/><path d="M186 104q0 -26 14 -26t14 26l6 8h-40z" fill="' + Y + '" stroke="#7a5a10" stroke-width="2"/><circle cx="200" cy="114" r="4" fill="#7a5a10"/></g>';
    const basement = Array.from({ length: 5 }, (_, i) => '<rect class="jm-flk' + (i % 2 ? ' jm-flk2' : '') + '" x="' + (48 + i * 66) + '" y="190" width="40" height="16" fill="' + (i % 2 ? C : R) + '" opacity=".85"/>').join("");
    const win2 = Array.from({ length: 5 }, (_, i) => '<rect x="' + (46 + i * 66) + '" y="128" width="44" height="40" fill="#2a2433"/><path d="M' + (68 + i * 66) + ' 128v40M' + (46 + i * 66) + ' 148h44" stroke="#8a4a32" stroke-width="3"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jms2)"/>' +
      '<rect x="20" y="56" width="360" height="160" fill="#9c4a36"/>' + bricks(20, 60, 360, 156, "#7e3826") +
      '<rect x="14" y="50" width="372" height="10" fill="#6a2e20"/>' +
      '<rect x="130" y="62" width="140" height="58" rx="6" fill="#26303a" stroke="' + C + '" stroke-width="2"/>' + bell +
      '<text x="200" y="76" text-anchor="middle" ' + font + ' font-size="0" fill="#fff"></text>' +
      win2 + '<rect x="20" y="180" width="360" height="36" fill="#5a2a1e"/>' + basement +
      '<rect x="176" y="168" width="48" height="48" fill="#2a1a14"/><rect x="180" y="172" width="40" height="44" fill="#3a2a22"/>' +
      '<rect x="146" y="20" width="108" height="24" rx="3" fill="#111"/><text x="200" y="37" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">THE BELL FOUNDRY</text>' +
      tag("PEGGY", 36, 176, 22, C, -8) + tag("DIY", 300, 176, 20, Y, -5) +
      '<rect x="0" y="216" width="400" height="44" fill="#4a4650"/><rect x="0" y="214" width="400" height="4" fill="#d8dce2"/>' +
      '<g class="jm-beam"><path d="M90 216l-24 -40h48z" fill="' + R + '" opacity=".18"/></g><g class="jm-beam jm-beam2"><path d="M310 216l-24 -40h48z" fill="' + C + '" opacity=".18"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f6f2ff">N. CALVERT ST · STATION NORTH</text>',
      sky("jms2", "#140f24", "#4a2a5a"));
  }

  /* 3. Male/Female on the Penn Station plaza */
  function jmstatue() {
    const fig = (x, flip) => '<g transform="translate(' + x + ' 0)' + (flip ? ' scale(-1 1)' : '') + '"><circle cx="0" cy="44" r="13" fill="#cfd6de" stroke="#8a96a4" stroke-width="2"/>' +
      '<path d="M-14 60h28l6 70h-12l-4 80h-8l-4 -80h-12z" fill="#cfd6de" stroke="#8a96a4" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jms3)"/>' +
      '<rect x="0" y="120" width="400" height="90" fill="#c9a58a" opacity=".55"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (10 + i * 44) + '" y="136" width="22" height="50" rx="11" fill="#3a2f3a" opacity=".6"/>').join("") +
      '<g opacity=".95">' + fig(186, false) + fig(214, true) + '</g>' +
      '<g class="jm-pulse"><ellipse cx="200" cy="110" rx="12" ry="30" fill="' + C + '" opacity=".75"/><ellipse cx="200" cy="110" rx="5" ry="18" fill="#fff"/></g>' +
      '<rect x="168" y="208" width="64" height="10" fill="#7a7f88"/>' +
      '<rect x="0" y="218" width="400" height="42" fill="#5a5a62"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52) + ' 218l-20 42" stroke="#4a4a52" stroke-width="2"/>').join("") +
      '<g class="jm-car"><rect x="0" y="238" width="60" height="16" rx="5" fill="' + Y + '"/><rect x="10" y="232" width="34" height="10" rx="3" fill="#c8a020"/><circle cx="12" cy="255" r="5" fill="#111"/><circle cx="48" cy="255" r="5" fill="#111"/></g>' +
      '<g class="jm-bird jm-bird2"><path d="M20 40q6 -6 12 0q6 -6 12 0" stroke="#e8e0f0" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="11" fill="#f6f2ff">MALE/FEMALE · THE GATEWAY TO STATION NORTH</text>',
      sky("jms3", "#0e1430", "#3a4a8a"));
  }

  /* 4. The flight line: the Air Force years (the Veteran album) */
  function jmflight() {
    const plane = '<g class="jm-plane"><g transform="translate(150 0)"><rect x="40" y="118" width="190" height="34" rx="17" fill="#6f7a6a"/><path d="M226 120l40 -26h14l-20 34z" fill="#5f6a5a"/>' +
      '<path d="M90 128l70 -6l40 6z" fill="#5a6556"/><rect x="80" y="122" width="140" height="6" fill="#4f5a4c"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (94 + i * 30) + '" y="114" width="16" height="10" rx="3" fill="#3f4a3c"/>').join("") +
      '<path d="M44 130q-10 6 -2 12h18z" fill="#2a3340"/><circle cx="90" cy="156" r="6" fill="#222"/><circle cx="180" cy="156" r="6" fill="#222"/>' +
      '<circle class="jm-bl" cx="270" cy="96" r="3" fill="' + R + '"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jms4)"/>' +
      '<circle cx="80" cy="70" r="26" fill="#ffb86a" opacity=".85"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#3a3a42"/><path d="M0 170h400" stroke="#f7d046" stroke-width="3" stroke-dasharray="20 14"/>' +
      Array.from({ length: 8 }, (_, i) => '<circle class="jm-bl' + (i % 2 ? ' jm-bl2' : '') + '" cx="' + (20 + i * 52) + '" cy="152" r="3" fill="#7ad0ff"/>').join("") +
      plane +
      '<rect x="20" y="200" width="150" height="46" rx="4" fill="#4a5a3a" stroke="#2a3320" stroke-width="2"/><rect x="20" y="210" width="150" height="4" fill="#2a3320"/>' +
      '<text x="95" y="238" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="#e8e0c8" letter-spacing="2">VETERAN</text>' +
      '<g transform="translate(300 196)"><path d="M0 0v10" stroke="#bbb" stroke-width="1.5"/><rect x="-14" y="10" width="28" height="18" rx="5" fill="#c8ccd2" stroke="#7a8088" stroke-width="1.5"/><rect x="-4" y="16" width="34" height="18" rx="5" fill="#dfe3e8" stroke="#7a8088" stroke-width="1.5"/></g>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="11" fill="#f6f2ff">BEFORE BALTIMORE · THE AIR FORCE YEARS</text>',
      sky("jms4", "#2a2050", "#e88a5a"));
  }

  /* 5. N Calvert St & E Lanvale St, Washington Monument behind */
  function jmcorner() {
    const mon = '<rect x="262" y="34" width="20" height="100" fill="#ecebe6"/><rect x="256" y="128" width="32" height="10" fill="#d8d6d0"/><rect x="250" y="136" width="44" height="6" fill="#cfcdc6"/>' +
      '<rect x="258" y="30" width="28" height="6" fill="#d8d6d0"/><rect x="266" y="18" width="12" height="12" rx="3" fill="#d8d6d0"/><circle cx="272" cy="14" r="4" fill="#cfcdc6"/>';
    const rows = [0, 70, 140, 300, 350].map((x, i) => '<rect x="' + x + '" y="' + (96 + (i % 2) * 6) + '" width="' + (i > 2 ? 50 : 66) + '" height="44" fill="#3a2a40"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jms5)"/>' + rows + mon +
      '<rect x="0" y="132" width="400" height="92" fill="#8a3e2e"/>' + bricks(0, 136, 400, 88, "#6e3022") +
      '<g class="jm-gl">' + tag("JPEGMAFIA", 14, 190, 40, R, -6) + '</g>' + tag("PEGGY", 196, 214, 24, C, -4) + tag("DAMN PEGGY", 18, 216, 14, Y, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55505a"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="jm-car jm-car2"><rect x="0" y="236" width="60" height="16" rx="5" fill="' + C + '"/><rect x="10" y="230" width="34" height="10" rx="3" fill="#1aa0c0"/><circle cx="12" cy="253" r="5" fill="#111"/><circle cx="48" cy="253" r="5" fill="#111"/></g>' +
      '<rect x="346" y="100" width="6" height="124" fill="#2f2f2f"/>' + sign(296, 102, 100, "N Calvert St") + sign(276, 128, 120, "E Lanvale St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="jm-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="jm-sp"><circle cx="186" cy="160" r="3" fill="' + R + '" opacity=".7"/></g><g class="jm-sp jm-sp2"><circle cx="192" cy="154" r="2" fill="' + R + '" opacity=".6"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f6f2ff">STATION NORTH, BALTIMORE · MOUNT VERNON BEHIND</text>',
      sky("jms5", "#120f2a", "#6a4aa0"));
  }

  window.SCENES = { jmstation: jmstation, jmfoundry: jmfoundry, jmstatue: jmstatue, jmflight: jmflight, jmcorner: jmcorner };
})();
