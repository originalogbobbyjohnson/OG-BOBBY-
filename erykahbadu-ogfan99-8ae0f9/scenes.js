/* erykahbadu scenes (Regions tab: HOUSTON + TEXAS; GENRES: R&B / neo-soul. Born Erica Wright in Dallas and raised in South Dallas; Booker T. Washington HSPVA; sang and danced at the Dallas Theater Center at four; taught drama and dance to kids at the South Dallas Cultural Center). CSS classes and ids prefixed eyb- (the page's own anim-train is kept).
   1 Pearl/Arts District on DART (at grade, Bryan St downtown; Red, Blue, Green and Orange lines), steps from her high school: a DART light-rail car sliding in, black station sign with the four line badges.
   2 Booker T. Washington High School for the Performing and Visual Arts on Flora St: the old red-brick school with white trim beside the glass-and-steel addition, music notes floating out.
   3 The Kalita Humphreys Theater on Turtle Creek (Frank Lloyd Wright, 1959), the Dallas Theater Center's home when she first performed there at four: the cream concrete drum over the low wings, trees, stage light glowing.
   4 The South Dallas Cultural Center on S Fitzhugh Ave across from Fair Park, where she taught drama and dance to kids: the low building, a mural band, djembes on the patio bouncing to the beat.
   5 S Fitzhugh Ave and Robert B. Cullum Blvd: green signs, BADU tagged with ANALOG and ON & ON, an orange moon up top and Chase Tower's keyhole lit downtown behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes eybglow{0%,100%{opacity:.4}50%{opacity:1}}.eyb-glow{animation:eybglow 2.4s ease-in-out infinite}.eyb-glow2{animation-delay:-1.2s}' +
    '@keyframes eybnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(26px,-70px);opacity:0}}.eyb-note{animation:eybnote 3.6s ease-out infinite}.eyb-n2{animation-delay:-1.2s}.eyb-n3{animation-delay:-2.4s}' +
    '@keyframes eybdrum{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.eyb-drum{animation:eybdrum .6s ease-in-out infinite}.eyb-drum2{animation-delay:-.3s}' +
    '@keyframes eybsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.eyb-sway{transform-box:fill-box;transform-origin:50% 100%;animation:eybsway 3s ease-in-out infinite}.eyb-sway2{animation-delay:-1.5s}' +
    '@keyframes eybcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.eyb-car{animation:eybcar 7s linear infinite;animation-delay:-2s}' +
    '@keyframes eybspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.eyb-sp{animation:eybspray 1.4s ease-out infinite}.eyb-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 8) + '" width="' + (txt.length * 6.4 + 10) + '" height="16" rx="8" fill="' + color + '"/><text x="' + (x + (txt.length * 6.4 + 10) / 2) + '" y="' + (y + 4) + '" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="' + (i % 4 ? "" : "eyb-glow") + '" cx="' + ((i * 89) % 400) + '" cy="' + (8 + (i * 41) % 62) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>').join("");
  const tree = (x, y, s, c, cls) => '<g class="eyb-sway ' + (cls || "") + '"><rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/></g>';
  const note = (x, y, c, cls) => '<g class="eyb-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="1.6" height="14" fill="' + c + '"/><path d="M' + (x + 4.6) + ' ' + (y - 14) + 'q6 3 5 9" stroke="' + c + '" stroke-width="1.6" fill="none"/></g>';
  const AMBER = "#e8a33d", GREEN = "#2fa37a", CREAM = "#f2e3c6";
  const DRED = "#ce0e2d", DBLUE = "#0067b1", DGREEN = "#009b3a", DORANGE = "#f68b1f";

  /* 1. Pearl/Arts District, DART, at grade on Bryan St */
  function eybstation() {
    const win = [44, 84, 124, 214, 254, 294].map(x => '<rect x="' + x + '" y="124" width="32" height="24" rx="3" fill="#1b2630"/>').join("");
    const train = '<g class="anim-train">' +
      '<path d="M150 104l14 -12h40l14 12" stroke="#333" stroke-width="2.5" fill="none"/><rect x="146" y="104" width="76" height="5" fill="#555"/>' +
      '<rect x="28" y="108" width="324" height="74" rx="9" fill="#efeee8" stroke="#9aa3ad" stroke-width="2"/>' + win +
      '<rect x="28" y="154" width="324" height="5" fill="' + DRED + '"/><rect x="28" y="159" width="324" height="4" fill="' + DBLUE + '"/><rect x="28" y="163" width="324" height="3" fill="#f2c200"/><rect x="28" y="168" width="324" height="14" rx="4" fill="#4a4f55"/>' +
      '<rect x="166" y="118" width="16" height="48" fill="#2a2a2a"/><rect x="184" y="118" width="16" height="48" fill="#2a2a2a"/>' +
      '<rect x="330" y="114" width="20" height="62" rx="6" fill="#d9dbd6"/><rect x="333" y="120" width="14" height="18" rx="2" fill="#1b2630"/><circle class="eyb-glow" cx="340" cy="170" r="3.5" fill="#fff6c2"/>' +
      '<rect x="262" y="112" width="60" height="10" rx="2" fill="#111"/><text x="292" y="120" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb03a">ORANGE DFW</text>' +
      '<circle cx="80" cy="184" r="7" fill="#222"/><circle cx="110" cy="184" r="7" fill="#222"/><circle cx="270" cy="184" r="7" fill="#222"/><circle cx="300" cy="184" r="7" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#eyb-s1)"/>' + stars(8) +
      /* downtown towers behind, lit windows */
      '<g fill="#3a3550"><rect x="20" y="30" width="40" height="72"/><rect x="66" y="50" width="30" height="52"/><rect x="240" y="20" width="36" height="82"/><rect x="282" y="44" width="44" height="58"/><rect x="334" y="28" width="30" height="74"/></g>' +
      [30, 44, 250, 264, 292, 310, 342].map((x, i) => '<rect class="eyb-glow' + (i % 2 ? " eyb-glow2" : "") + '" x="' + x + '" y="' + (40 + (i * 13) % 40) + '" width="5" height="5" fill="#ffd98a" opacity=".8"/>').join("") +
      '<path d="M0 98h400" stroke="#3a3a3a" stroke-width="1.5"/>' + [70, 200, 330].map(x => '<rect x="' + (x - 2) + '" y="62" width="4" height="50" fill="#555"/><rect x="' + (x - 14) + '" y="62" width="28" height="3" fill="#555"/>').join("") +
      train +
      '<rect x="0" y="188" width="400" height="8" fill="#f2c200"/><rect x="0" y="196" width="400" height="64" fill="#b7ada0"/><path d="M0 222h400" stroke="#a49a8c" stroke-width="2"/>' +
      '<rect x="40" y="202" width="320" height="50" rx="3" fill="#111"/><text x="200" y="222" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">Pearl/Arts District</text>' +
      badge(78, 239, "RED", DRED) + badge(130, 239, "BLUE", DBLUE) + badge(188, 239, "GREEN", DGREEN) + badge(252, 239, "ORANGE", DORANGE),
      sky("eyb-s1", "#221a40", "#d9844a"));
  }

  /* 2. Booker T. Washington HSPVA, Flora St */
  function eybschool() {
    return svg(
      '<rect width="400" height="260" fill="url(#eyb-s2)"/>' +
      /* old red-brick school, white trim, arched entry */
      '<rect x="20" y="78" width="210" height="120" fill="#9a4632"/><rect x="20" y="72" width="210" height="8" fill="#efe6d4"/><rect x="20" y="128" width="210" height="4" fill="#efe6d4"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (32 + i * 34) + '" y="88" width="18" height="30" fill="#2a3040" stroke="#efe6d4" stroke-width="2"/><rect x="' + (32 + i * 34) + '" y="142" width="18" height="30" fill="#2a3040" stroke="#efe6d4" stroke-width="2"/>').join("") +
      '<rect x="100" y="150" width="50" height="48" fill="#efe6d4"/><path d="M106 198v-30a19 19 0 0 1 38 0v30z" fill="#3a2a22"/>' +
      /* the glass and steel addition with its thin flat canopy */
      '<rect x="236" y="96" width="150" height="102" fill="#7fb4c8" opacity=".75"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (236 + i * 25) + ' 96v102" stroke="#e8eef2" stroke-width="2"/>').join("") + '<path d="M236 130h150M236 164h150" stroke="#e8eef2" stroke-width="2"/>' +
      '<rect x="226" y="86" width="170" height="6" fill="#d9dde2"/>' + [240, 300, 380].map(x => '<rect x="' + x + '" y="92" width="3" height="106" fill="#c9cdd2"/>').join("") +
      '<rect x="0" y="198" width="400" height="62" fill="#9a9590"/><rect x="0" y="198" width="400" height="5" fill="#c9c3b6"/>' +
      tree(12, 196, 1.2, "#3c6a2e") + tree(392, 196, 1.1, "#3c6a2e", "eyb-sway2") +
      note(150, 120, AMBER, "") + note(270, 130, CREAM, "eyb-n2") + note(330, 116, GREEN, "eyb-n3") +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">BOOKER T. WASHINGTON HSPVA</text><text x="200" y="248" text-anchor="middle" ' + font + ' font-size="9" fill="' + CREAM + '">FLORA ST · ARTS DISTRICT</text>',
      sky("eyb-s2", "#6aa8d8", "#f6dcb0"));
  }

  /* 3. Kalita Humphreys Theater, Turtle Creek */
  function eybtheater() {
    return svg(
      '<rect width="400" height="260" fill="url(#eyb-s3)"/>' + stars(12) +
      tree(30, 150, 2, "#24402a") + tree(90, 140, 1.6, "#2c4a30", "eyb-sway2") + tree(330, 146, 1.8, "#24402a", "eyb-sway2") + tree(384, 150, 2, "#2c4a30") +
      /* low cantilevered wings */
      '<rect x="70" y="140" width="260" height="50" fill="#d8ccb2"/><rect x="60" y="134" width="280" height="8" fill="#c4b698"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (84 + i * 30) + '" y="150" width="16" height="30" fill="#ffd98a" class="eyb-glow' + (i % 2 ? " eyb-glow2" : "") + '" opacity=".75"/>').join("") +
      /* the round concrete drum (stage house) */
      '<rect x="150" y="62" width="100" height="80" fill="#e4d8bc"/><ellipse cx="200" cy="62" rx="50" ry="10" fill="#cfc2a4"/><ellipse cx="200" cy="142" rx="50" ry="10" fill="#e4d8bc"/>' +
      '<path d="M150 80h100M150 96h100" stroke="#c4b698" stroke-width="2"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#3a4a34"/><path d="M0 214q200 -10 400 0" stroke="#6a8a5a" stroke-width="2" fill="none"/>' +
      '<rect x="80" y="214" width="240" height="36" rx="3" fill="#111" stroke="' + AMBER + '" stroke-width="1.5"/><text x="200" y="229" text-anchor="middle" ' + font + ' font-size="10" fill="' + AMBER + '">KALITA HUMPHREYS THEATER</text><text x="200" y="243" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">DALLAS THEATER CENTER · ON STAGE AT FOUR</text>',
      sky("eyb-s3", "#14183a", "#5a4a7a"));
  }

  /* 4. South Dallas Cultural Center, S Fitzhugh Ave */
  function eybcultural() {
    const djembe = (x, c, cls) => '<g class="eyb-drum ' + cls + '"><ellipse cx="' + x + '" cy="176" rx="14" ry="4" fill="#e8dcc0"/><path d="M' + (x - 14) + ' 176l6 22h-4l-2 14h28l-2 -14h-4l6 -22z" fill="' + c + '" stroke="#3a2010" stroke-width="1.5"/><path d="M' + (x - 10) + ' 182l20 12M' + (x + 10) + ' 182l-20 12" stroke="#f2e3c6" stroke-width="1"/></g>';
    const kente = Array.from({ length: 20 }, (_, i) => '<rect x="' + (40 + i * 16) + '" y="96" width="16" height="12" fill="' + [AMBER, GREEN, "#b02a1a", "#111"][i % 4] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#eyb-s4)"/><circle cx="60" cy="46" r="18" fill="#fff2c8" opacity=".9"/>' +
      '<rect x="40" y="70" width="320" height="110" fill="#c9b08a"/><rect x="34" y="64" width="332" height="8" fill="#8a6a44"/>' + kente +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (56 + i * 60) + '" y="118" width="36" height="46" fill="#2a3040"/>').join("") +
      '<rect x="0" y="180" width="400" height="80" fill="#b8ab94"/><rect x="0" y="180" width="400" height="4" fill="#8a7a64"/>' +
      djembe(120, "#8a4a22", "") + djembe(170, "#6a3a1a", "eyb-drum2") + djembe(230, "#8a4a22", "") + djembe(280, "#6a3a1a", "eyb-drum2") +
      note(200, 150, AMBER, "") + note(250, 140, GREEN, "eyb-n2") +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="10" fill="#2a1a0a">SOUTH DALLAS CULTURAL CENTER</text><text x="200" y="248" text-anchor="middle" ' + font + ' font-size="9" fill="#2a1a0a">DRAMA + DANCE FOR THE KIDS · FITZHUGH AVE</text>',
      sky("eyb-s4", "#6aa8d8", "#f6e2b8"));
  }

  /* 5. S Fitzhugh Ave and Robert B. Cullum Blvd, Chase Tower's keyhole behind */
  function eybcorner() {
    const chase = '<g><rect x="250" y="20" width="44" height="100" fill="#2e3442"/><path d="M250 20l22 -12l22 12z" fill="#2e3442"/>' +
      '<rect class="eyb-glow" x="262" y="26" width="20" height="26" rx="10" fill="#ffd98a" opacity=".85"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (256 + (i % 3) * 12) + '" y="' + (64 + Math.floor(i / 3) * 18) + '" width="6" height="6" fill="#ffd98a" opacity=".6"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#eyb-s5)"/>' + stars(12) +
      '<circle cx="80" cy="50" r="22" fill="' + AMBER + '"/><circle cx="74" cy="44" r="4" fill="#d08a2a" opacity=".6"/><circle cx="88" cy="56" r="3" fill="#d08a2a" opacity=".6"/>' +
      '<g fill="#262a36"><rect x="200" y="70" width="30" height="50"/><rect x="310" y="56" width="36" height="64"/><rect x="352" y="80" width="28" height="40"/></g>' + chase +
      '<rect x="0" y="120" width="400" height="104" fill="#5e4a3a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (128 + i * 8) + 'h400" stroke="#4e3c2e" stroke-width="1"/>').join("") +
      '<rect x="0" y="116" width="400" height="6" fill="#2e2218"/>' +
      tag("BADU", 20, 192, 62, AMBER, -6) + tag("ANALOG", 28, 216, 22, CREAM, -3) + tag("ON &amp; ON", 206, 178, 24, GREEN, -4) + tag("SOUTH DALLAS", 176, 206, 18, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="eyb-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + GREEN + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + GREEN + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="370" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(270, 98, 124, "S Fitzhugh Ave") + sign(232, 124, 162, "Robert B Cullum Blvd") +
      '<g class="eyb-sp"><circle cx="150" cy="160" r="3" fill="' + AMBER + '" opacity=".7"/></g><g class="eyb-sp eyb-sp2"><circle cx="156" cy="154" r="2" fill="' + AMBER + '" opacity=".6"/></g>',
      sky("eyb-s5", "#14102a", "#7a4a3a"));
  }

  window.SCENES = { eybstation: eybstation, eybschool: eybschool, eybtheater: eybtheater, eybcultural: eybcultural, eybcorner: eybcorner };
})();
