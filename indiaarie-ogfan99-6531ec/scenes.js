/* indiaarie scenes (Regions tab: Atlanta; GENRES: R&B / neo-soul. India.Arie, born in Denver 1975; her mother moved the family to Atlanta when she was 13;
   back in Atlanta after SCAD in Savannah she helped found Groovement, the soul collective that played the Yin Yang Cafe at Spring and 3rd in Midtown;
   later Georgia State's first artist in residence at the Creative Media Industries Institute).
   CSS classes prefixed ia-. 400 x 260 SVGs. No logos, no faces, no 9s drawn.
   1 Midtown MARTA station (Red + Gold lines), underground under Peachtree St: tiled wall, train pulling in.
   2 The Yin Yang Cafe at Spring and 3rd: small club, candle-lit tables, a stool and an acoustic guitar in the spotlight, chalkboard GROOVEMENT TONIGHT.
   3 Poetter Hall in Savannah, SCAD's first building, where she studied jewelry design: red-brick armory with turrets, live oaks with Spanish moss swaying.
   4 Georgia State's Creative Media Industries Institute studio, where she's artist in residence: mixing desk, blue walls, meters jumping, a guitar on a stand.
   5 Spring St NW and 3rd St NW: green signs, INDIA.ARIE tagged with GROOVEMENT and ACOUSTIC SOUL, the Connector's headlights and Midtown's towers behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes iaglow{0%,100%{opacity:.45}50%{opacity:1}}.ia-glow{animation:iaglow 2.2s ease-in-out infinite}.ia-g2{animation-delay:-1.1s}' +
    '@keyframes ianote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(26px,-64px);opacity:0}}.ia-n{animation:ianote 3s ease-out infinite}.ia-n2{animation-delay:-1s}.ia-n3{animation-delay:-2s}' +
    '@keyframes iasway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.ia-sway{transform-box:fill-box;transform-origin:50% 0;animation:iasway 3s ease-in-out infinite}.ia-s2{animation-delay:-1.5s}' +
    '@keyframes iameter{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}}.ia-m{transform-box:fill-box;transform-origin:50% 100%;animation:iameter .9s ease-in-out infinite}.ia-m2{animation-delay:-.3s}.ia-m3{animation-delay:-.6s}' +
    '@keyframes iaflick{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.8)}}.ia-fl{transform-box:fill-box;transform-origin:50% 100%;animation:iaflick .6s ease-in-out infinite}' +
    '@keyframes iacars{from{transform:translateX(0)}to{transform:translateX(-60px)}}.ia-cars{animation:iacars 1.2s linear infinite}' +
    '@keyframes iaspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ia-sp{animation:iaspray 1.4s ease-out infinite}.ia-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const AMBER = "#e0a24a", SAGE = "#8fbf7a", PLUM = "#b0567e", MRED = "#e2231a", MGOLD = "#d4a017", GSU = "#0039a6";
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="' + (i % 4 ? "" : "ia-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>').join("");
  const note = (x, y, c, cls) => '<g class="ia-n ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'v-16l10 -3v16" stroke="' + c + '" stroke-width="2" fill="none"/><ellipse cx="' + (x - 3) + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '"/><ellipse cx="' + (x + 7) + '" cy="' + (y - 3) + '" rx="4" ry="3" fill="' + c + '"/></g>';
  const bullet = (x, y, c, t) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="' + c + '"/><text x="' + x + '" y="' + (y + 3.5) + '" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">' + t + '</text>';
  const guitar = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')"><rect x="-3" y="-70" width="6" height="52" fill="#3a2414"/><rect x="-5" y="-82" width="10" height="14" rx="2" fill="#2a170c"/>' +
    '<path d="M0 -22c-14 0 -20 8 -18 18c-6 4 -6 16 2 22c8 6 24 6 32 0c8 -6 8 -18 2 -22c2 -10 -4 -18 -18 -18z" fill="#c8843e" stroke="#7a4a1e" stroke-width="2"/><circle cx="0" cy="0" r="6" fill="#2a170c"/><rect x="-7" y="10" width="14" height="3" fill="#2a170c"/>' +
    '<path d="M-1 -70v80M1 -70v80" stroke="#e8e0d0" stroke-width=".6"/></g>';

  /* 1. Midtown station: underground platform, tiled wall, the Red/Gold train pulling in */
  function iastation() {
    const train = '<g class="anim-train"><rect x="20" y="104" width="360" height="78" rx="8" fill="#d9dde2" stroke="#6b737d" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 48) + '" y="114" width="36" height="30" rx="3" fill="#1d2a38"/>').join("") +
      '<rect x="20" y="152" width="360" height="7" fill="#0a5fb4"/><rect x="20" y="159" width="360" height="4" fill="#f58025"/>' +
      '<rect x="44" y="106" width="104" height="7" rx="1" fill="#111"/><text x="96" y="111.8" text-anchor="middle" ' + font + ' font-size="5.5" fill="#ffb020">RED  NORTH SPRINGS</text><circle cx="372" cy="166" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#2b2a2e"/>' +
      '<rect x="0" y="0" width="400" height="100" fill="#d8cfbd"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (i * 9) + 'h400" stroke="#c4baa6"/>').join("") + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 0v100" stroke="#c4baa6"/>').join("") +
      '<rect x="0" y="60" width="400" height="10" fill="' + MRED + '"/><rect x="0" y="70" width="400" height="5" fill="' + MGOLD + '"/>' +
      [70, 200, 330].map(x => '<rect class="ia-glow" x="' + (x - 30) + '" y="6" width="60" height="5" fill="#fff8e0" opacity=".8"/>').join("") +
      '<rect x="120" y="22" width="160" height="32" rx="3" fill="#111"/><text x="182" y="44" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">Midtown</text>' + bullet(252, 31, MRED, "RD") + bullet(268, 45, MGOLD, "GD") +
      '<rect x="0" y="182" width="400" height="6" fill="#3a3a3a"/>' + train +
      '<rect x="0" y="188" width="400" height="72" fill="#9c968a"/><rect x="0" y="188" width="400" height="5" fill="#f2c200"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 193v67" stroke="#88827a"/>').join("") +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="10" letter-spacing="2" fill="#fff" opacity=".85">PEACHTREE ST · 10TH ST</text>');
  }

  /* 2. Yin Yang Cafe, Spring and 3rd: candle-lit tables, a stool + acoustic guitar in the spotlight, chalkboard */
  function iayinyang() {
    const table = x => '<ellipse cx="' + x + '" cy="214" rx="26" ry="7" fill="#4a2a1a"/><rect x="' + (x - 3) + '" y="214" width="6" height="30" fill="#2a170c"/><rect x="' + (x - 3) + '" y="200" width="6" height="12" fill="#f4efe4"/><path class="ia-fl" d="M' + x + ' 192q-4 5 0 8q4 -3 0 -8z" fill="#ffcf5a"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a1020"/>' +
      '<rect x="0" y="0" width="400" height="190" fill="#2a1830"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 0v190" stroke="#24142a" stroke-width="6"/>').join("") +
      /* yin-yang neon */
      '<g class="ia-glow"><circle cx="70" cy="56" r="26" fill="none" stroke="' + AMBER + '" stroke-width="3"/><path d="M70 30a13 13 0 0 1 0 26a13 13 0 0 0 0 26a26 26 0 0 1 0 -52z" fill="' + AMBER + '" opacity=".85"/><circle cx="70" cy="43" r="4" fill="' + AMBER + '"/><circle cx="70" cy="69" r="4" fill="#2a1830" stroke="' + AMBER + '" stroke-width="2"/></g>' +
      '<text x="70" y="102" text-anchor="middle" ' + font + ' font-size="10" letter-spacing="2" fill="' + AMBER + '">YIN YANG CAFE</text>' +
      /* chalkboard */
      '<rect x="292" y="28" width="90" height="72" rx="3" fill="#1f2a22" stroke="#7a5a3a" stroke-width="4"/><text x="337" y="50" text-anchor="middle" font-family="Sedgwick Ave Display, cursive" font-size="10" fill="#f4efe4">TONIGHT</text>' +
      '<text x="337" y="68" text-anchor="middle" font-family="Sedgwick Ave Display, cursive" font-size="11" fill="' + SAGE + '">GROOVEMENT</text><text x="337" y="86" text-anchor="middle" font-family="Sedgwick Ave Display, cursive" font-size="7" fill="#f4efe4">OPEN MIC · SPRING + 3RD</text>' +
      /* stage + spotlight */
      '<path d="M190 0L130 186H270L210 0z" fill="#fff6d0" opacity=".14"/><rect x="100" y="180" width="200" height="14" fill="#3a2414"/><ellipse cx="200" cy="182" rx="70" ry="8" fill="#fff6d0" opacity=".3"/>' +
      '<rect x="190" y="132" width="20" height="5" rx="2" fill="#5a3a22"/><path d="M192 137l-8 44M208 137l8 44M188 160h24" stroke="#5a3a22" stroke-width="3"/>' + guitar(226, 172, 0.9) +
      '<rect x="168" y="116" width="3" height="66" fill="#333"/><rect x="164" y="110" width="10" height="12" rx="4" fill="#444"/>' +
      note(240, 100, AMBER) + note(160, 96, "#fff", "ia-n2") + note(260, 110, SAGE, "ia-n3") +
      '<rect x="0" y="194" width="400" height="66" fill="#3a2418"/>' + table(50) + table(130) + table(270) + table(350));
  }

  /* 3. Poetter Hall, Savannah: red-brick armory with turrets, live oaks with swaying Spanish moss */
  function iascad() {
    const moss = (x, y, cls) => '<g class="ia-sway ' + (cls || "") + '">' + Array.from({ length: 5 }, (_, i) => '<path d="M' + (x + i * 6) + ' ' + y + 'q-2 14 1 26" stroke="#9fae8a" stroke-width="2.5" fill="none"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ia3)"/>' +
      /* armory */
      '<rect x="110" y="70" width="180" height="140" fill="#a8452e"/>' + Array.from({ length: 17 }, (_, i) => '<path d="M110 ' + (78 + i * 8) + 'h180" stroke="#8e3a26"/>').join("") +
      '<rect x="92" y="50" width="40" height="160" fill="#b24c33"/><rect x="268" y="50" width="40" height="160" fill="#b24c33"/>' +
      [92, 268].map(x => Array.from({ length: 4 }, (_, i) => '<rect x="' + (x + i * 11) + '" y="42" width="7" height="10" fill="#b24c33"/>').join("")).join("") +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (110 + i * 23) + '" y="62" width="12" height="10" fill="#a8452e"/>').join("") +
      '<path d="M176 210v-46a24 24 0 0 1 48 0v46z" fill="#3a2414"/>' +
      [140, 236].map(x => '<path d="M' + x + ' 130v-16a8 8 0 0 1 16 0v16z" fill="#ffd27a" class="ia-glow"/>').join("") +
      [104, 280].map(x => '<rect x="' + x + '" y="90" width="16" height="22" fill="#ffd27a" class="ia-glow ia-g2"/>').join("") +
      '<rect x="146" y="88" width="108" height="16" rx="2" fill="#f4efe4"/><text x="200" y="99.5" text-anchor="middle" ' + font + ' font-size="9" fill="#5a2418">POETTER HALL</text>' +
      '<rect x="0" y="210" width="400" height="50" fill="#5f7a4a"/><rect x="0" y="222" width="400" height="10" fill="#cfc6b4"/>' +
      /* live oaks */
      '<rect x="20" y="120" width="14" height="96" fill="#4a3a2a"/><ellipse cx="30" cy="104" rx="60" ry="34" fill="#3c5a32"/>' + moss(4, 112) + moss(36, 118, "ia-s2") +
      '<rect x="368" y="120" width="14" height="96" fill="#4a3a2a"/><ellipse cx="372" cy="104" rx="60" ry="34" fill="#3c5a32"/>' + moss(340, 116, "ia-s2") + moss(372, 112) +
      '<rect x="120" y="236" width="160" height="16" rx="2" fill="#1e1a2a" opacity=".85"/><text x="200" y="247.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">SAVANNAH · ART SCHOOL DAYS</text>',
      sky("ia3", "#9ccbe8", "#f6e2b8"));
  }

  /* 4. Georgia State's Creative Media Industries Institute: studio, mixing desk, meters jumping, guitar on a stand */
  function iagsu() {
    return svg(
      '<rect width="400" height="260" fill="#14203a"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="' + GSU + '"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (12 + i * 50) + '" y="18" width="38" height="60" rx="3" fill="#002a7a" stroke="#1a4fc0"/>').join("") +
      '<rect x="80" y="92" width="240" height="22" rx="2" fill="#fff"/><text x="200" y="107" text-anchor="middle" ' + font + ' font-size="9.5" fill="' + GSU + '">GEORGIA STATE · CREATIVE MEDIA</text>' +
      '<text x="200" y="134" text-anchor="middle" ' + font + ' font-size="9" letter-spacing="3" fill="#fff">ARTIST IN RESIDENCE</text>' +
      '<path d="M0 186L40 150H360L400 186V260H0z" fill="#2a2a30"/><rect x="40" y="150" width="320" height="10" fill="#3a3a44"/>' +
      Array.from({ length: 24 }, (_, i) => '<rect x="' + (52 + i * 12.5) + '" y="170" width="6" height="36" rx="2" fill="#15151a"/><rect x="' + (50 + i * 12.5) + '" y="' + (176 + (i * 7) % 20) + '" width="10" height="6" rx="1" fill="#ddd"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<rect class="ia-m' + (i % 3 === 1 ? " ia-m2" : i % 3 === 2 ? " ia-m3" : "") + '" x="' + (120 + i * 20) + '" y="218" width="12" height="28" fill="' + (i < 5 ? "#5fd36a" : i < 7 ? AMBER : PLUM) + '"/>').join("") +
      guitar(356, 200, 0.8) + '<path d="M344 214l12 -8l12 8" stroke="#333" stroke-width="3" fill="none"/>' +
      note(40, 120, AMBER) + note(340, 116, "#fff", "ia-n2"));
  }

  /* 5. Spring St NW and 3rd St NW: green signs, brick wall tagged INDIA.ARIE, the Connector's headlights and Midtown towers behind */
  function iacorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ia5)"/>' + stars(12) +
      '<rect x="20" y="40" width="40" height="76" fill="#3a4466"/><rect x="70" y="22" width="30" height="94" fill="#343e5e"/><path d="M70 22l15 -16l15 16z" fill="#343e5e"/><rect x="112" y="52" width="36" height="64" fill="#404a6c"/>' +
      '<rect x="250" y="30" width="34" height="86" fill="#3a4466"/><path d="M250 30l17 -20l17 20z" fill="#3a4466"/><rect x="296" y="48" width="40" height="68" fill="#343e5e"/><rect x="346" y="36" width="30" height="80" fill="#404a6c"/>' +
      Array.from({ length: 18 }, (_, i) => '<rect class="ia-glow' + (i % 2 ? " ia-g2" : "") + '" x="' + [28, 78, 120, 258, 304, 354][i % 6] + '" y="' + (50 + Math.floor(i / 6) * 18) + '" width="6" height="6" fill="#ffd27a"/>').join("") +
      /* the Connector */
      '<rect x="0" y="100" width="400" height="16" fill="#2a2a32"/><g class="ia-cars">' + Array.from({ length: 16 }, (_, i) => '<circle cx="' + (i * 30) + '" cy="106" r="2" fill="#fff6c2"/><circle cx="' + (i * 30 + 14) + '" cy="111" r="2" fill="#ff4a4a"/>').join("") + '</g>' +
      '<rect x="0" y="116" width="400" height="108" fill="#7e4634"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M0 ' + (124 + i * 8) + 'h400" stroke="#6a3a2a"/>').join("") +
      Array.from({ length: 26 }, (_, i) => '<path d="M' + ((i % 2 ? 10 : 0) + Math.floor(i / 2) * 32) + ' ' + (116 + (i % 13) * 8) + 'v8" stroke="#6a3a2a"/>').join("") +
      tag("INDIA.ARIE", 14, 194, 40, AMBER, -5) + tag("GROOVEMENT", 170, 148, 18, SAGE, -4) + tag("ACOUSTIC SOUL", 24, 218, 16, PLUM, -3) +
      '<g class="ia-sp"><circle cx="246" cy="186" r="3" fill="' + AMBER + '" opacity=".7"/></g><g class="ia-sp ia-sp2"><circle cx="252" cy="180" r="2" fill="' + AMBER + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55534e"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(298, 98, 102, "Spring St NW") + sign(316, 124, 84, "3rd St NW"),
      sky("ia5", "#121838", "#b8704e"));
  }

  window.SCENES = { iastation: iastation, iayinyang: iayinyang, iascad: iascad, iagsu: iagsu, iacorner: iacorner };
})();
