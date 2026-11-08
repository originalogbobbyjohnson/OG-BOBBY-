/* tonibraxton scenes (Regions tab: THE DMV; Severn, Anne Arundel County, Maryland, where she was born and raised, a preacher's daughter who first sang in the church choir). CSS classes prefixed tb- (the page's own anim-train is kept).
   1 Odenton station on MARC's Penn Line, the stop next to Severn: two high side platforms, a silver MARC push-pull train sliding in, black station sign.
   2 A white clapboard country church in Severn with a steeple: choir robes in the windows, the bell swinging, music notes floating out the door (her first stage).
   3 Broadway, 1998: she played Belle on Broadway. A gold theatre marquee with chasing bulbs, a red rose under a glass dome in the lobby window.
   4 Annapolis harbor, the Anne Arundel County seat: the Naval Academy Chapel's green copper dome and lantern over the water, sailboats bobbing at dusk.
   5 Telegraph Rd and Reece Rd in Severn: green signs, TONI tagged on the wall, a jet climbing out of BWI behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tbglow{0%,100%{opacity:.45}50%{opacity:1}}.tb-glow{animation:tbglow 2.4s ease-in-out infinite}.tb-glow2{animation-delay:-1.2s}' +
    '@keyframes tbnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(26px,-70px);opacity:0}}.tb-note{animation:tbnote 3.6s ease-out infinite}.tb-n2{animation-delay:-1.2s}.tb-n3{animation-delay:-2.4s}' +
    '@keyframes tbbell{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.tb-bell{transform-box:fill-box;transform-origin:50% 0%;animation:tbbell 1.6s ease-in-out infinite}' +
    '@keyframes tbbulb{0%,100%{opacity:.25}50%{opacity:1}}.tb-b{animation:tbbulb .8s linear infinite}.tb-b2{animation-delay:-.4s}' +
    '@keyframes tbpetal{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(8px,26px) rotate(120deg);opacity:0}}.tb-petal{transform-box:fill-box;transform-origin:50% 50%;animation:tbpetal 3.2s ease-in infinite}' +
    '@keyframes tbbob{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-3px) rotate(2deg)}}.tb-bob{transform-box:fill-box;transform-origin:50% 100%;animation:tbbob 2.2s ease-in-out infinite}.tb-bob2{animation-delay:-1.1s}' +
    '@keyframes tbwave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.tb-wave{animation:tbwave 3s linear infinite}' +
    '@keyframes tbjet{from{transform:translate(-80px,40px)}to{transform:translate(480px,-60px)}}.tb-jet{animation:tbjet 9s linear infinite}' +
    '@keyframes tbcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.tb-car{animation:tbcar 7s linear infinite}' +
    '@keyframes tbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tb-sp{animation:tbspray 1.4s ease-out infinite}.tb-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "tb-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const note = (x, y, c, cls) => '<g class="tb-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="1.6" height="14" fill="' + c + '"/><path d="M' + (x + 4.6) + ' ' + (y - 14) + 'q6 3 5 9" stroke="' + c + '" stroke-width="1.6" fill="none"/></g>';
  const CHAMP = "#d9b38c", RED = "#b0122b", CREAM = "#f4e3c1", PENN = "#c8102e";

  /* 1. Odenton MARC station, Penn Line */
  function tbstation() {
    const coach = (x, cab) => '<rect x="' + x + '" y="118" width="150" height="76" rx="' + (cab ? 10 : 4) + '" fill="#c9ced6" stroke="#6b737e" stroke-width="2"/>' +
      '<rect x="' + x + '" y="128" width="150" height="4" fill="#1d3f8a"/><rect x="' + x + '" y="176" width="150" height="5" fill="' + PENN + '"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (x + 10 + i * 27) + '" y="138" width="20" height="14" rx="2" fill="#20303f"/><rect x="' + (x + 10 + i * 27) + '" y="158" width="20" height="12" rx="2" fill="#20303f"/>').join("") +
      '<circle cx="' + (x + 24) + '" cy="198" r="7" fill="#222"/><circle cx="' + (x + 126) + '" cy="198" r="7" fill="#222"/>';
    const train = '<g class="anim-train">' + coach(40, 0) + coach(194, 1) +
      '<rect x="330" y="128" width="12" height="22" rx="3" fill="#20303f"/><circle class="tb-glow" cx="338" cy="186" r="4" fill="#fff6c8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tb-s1)"/>' + stars(8) +
      tree(30, 96, 1.4, "#2c4a2a") + tree(80, 92, 1.2, "#335a30") + tree(330, 94, 1.3, "#2c4a2a") + tree(376, 98, 1.5, "#335a30") +
      /* overhead catenary of the Northeast Corridor */
      '<rect x="20" y="56" width="5" height="148" fill="#5a5f66"/><rect x="375" y="56" width="5" height="148" fill="#5a5f66"/><rect x="20" y="56" width="360" height="5" fill="#5a5f66"/>' +
      '<path d="M20 74h360" stroke="#30343a" stroke-width="1.4"/><path d="M20 84q180 10 360 0" stroke="#30343a" stroke-width="1" fill="none"/>' +
      /* far platform canopy */
      '<rect x="0" y="104" width="400" height="10" fill="#7d6a58"/><rect x="0" y="100" width="400" height="5" fill="#3a3f46"/>' +
      train +
      '<rect x="0" y="204" width="400" height="8" fill="#3a2e26"/><path d="M0 206h400M0 210h400" stroke="#8a8f96" stroke-width="1.2"/>' +
      /* near high platform with yellow edge */
      '<rect x="0" y="212" width="400" height="48" fill="#8e9298"/><rect x="0" y="212" width="400" height="5" fill="#f2c14e"/>' +
      /* black station sign */
      '<rect x="112" y="226" width="176" height="26" rx="3" fill="#111"/><text x="182" y="245" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">ODENTON</text>' +
      '<rect x="238" y="231" width="42" height="16" rx="8" fill="' + PENN + '"/><text x="259" y="243" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">PENN</text>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '" opacity=".9">MARC PENN LINE · ODENTON, RIGHT BY SEVERN</text>',
      sky("tb-s1", "#141a3a", "#7a5a6a"));
  }

  /* 2. The church in Severn where she first sang */
  function tbchurch() {
    const robe = (x, c) => '<path d="M' + x + ' 196q0 -22 9 -26q9 4 9 26z" fill="' + c + '"/><circle cx="' + (x + 9) + '" cy="164" r="6" fill="#3a2418"/><rect x="' + (x + 3) + '" y="176" width="12" height="3" fill="' + CHAMP + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tb-s2)"/>' +
      '<path d="M0 206q200 -24 400 0v54H0z" fill="#4f7a3a"/>' + tree(40, 190, 1.8, "#3c6a2e") + tree(364, 188, 1.9, "#3c6a2e") +
      /* clapboard church */
      '<rect x="110" y="110" width="180" height="100" fill="#f4f1ea"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M110 ' + (116 + i * 8) + 'h180" stroke="#d8d2c4" stroke-width="1"/>').join("") +
      '<path d="M100 112L200 62L300 112z" fill="#6a2a2a"/>' +
      /* steeple with bell */
      '<rect x="182" y="30" width="36" height="40" fill="#f4f1ea" stroke="#d8d2c4"/><path d="M178 32L200 -4L222 32z" fill="#6a2a2a"/><rect x="198" y="-6" width="4" height="14" fill="' + CHAMP + '"/><rect x="194" y="-2" width="12" height="3" fill="' + CHAMP + '"/>' +
      '<rect x="190" y="38" width="20" height="24" fill="#2a2030"/><g class="tb-bell"><path d="M193 42h14l3 14h-20z" fill="' + CHAMP + '"/><circle cx="200" cy="58" r="2" fill="' + CHAMP + '"/></g>' +
      /* arched stained windows */
      [124, 156, 228, 260].map((x, i) => '<path d="M' + x + ' 170v-30a8 8 0 0 1 16 0v30z" fill="' + ["#c0392b", "#2e6bb0", "#d4a017", "#6a3a9a"][i] + '" stroke="#5a4a3a" stroke-width="2"/><path class="tb-glow' + (i % 2 ? " tb-glow2" : "") + '" d="M' + x + ' 170v-30a8 8 0 0 1 16 0v30z" fill="#fff3c0" opacity=".35"/>').join("") +
      /* open double doors with the choir inside */
      '<path d="M178 210v-44a22 22 0 0 1 44 0v44z" fill="#3a2a1a"/><path d="M182 210v-42a18 18 0 0 1 36 0v42z" fill="#ffe9b0" class="tb-glow"/>' +
      robe(183, RED) + robe(200, "#7a1020") +
      '<rect x="170" y="210" width="60" height="6" fill="#bfb7a6"/><rect x="164" y="216" width="72" height="6" fill="#a8a090"/>' +
      note(214, 150, CHAMP) + note(234, 136, "#fff", "tb-n2") + note(196, 140, CHAMP, "tb-n3") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" opacity=".9">SEVERN · WHERE SHE FIRST SANG IN THE CHOIR</text>',
      sky("tb-s2", "#7fb0e0", "#f6dcb8"));
  }

  /* 3. Broadway marquee, she played Belle */
  function tbbroadway() {
    let bulbs = ""; for (let i = 0; i < 22; i++) bulbs += '<circle class="tb-b' + (i % 2 ? " tb-b2" : "") + '" cx="' + (62 + i * 13) + '" cy="72" r="3" fill="#fff2b0"/><circle class="tb-b' + (i % 2 ? "" : " tb-b2") + '" cx="' + (62 + i * 13) + '" cy="132" r="3" fill="#fff2b0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tb-s3)"/>' + stars(10) +
      '<rect x="20" y="20" width="360" height="240" fill="#3a1e24"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (34 + i * 36) + '" y="30" width="20" height="26" fill="#5a2e36"/>').join("") +
      /* marquee */
      '<path d="M48 64h304l-12 76H60z" fill="#c9a227" stroke="#6b4f10" stroke-width="3"/>' + bulbs +
      '<rect x="74" y="80" width="252" height="44" fill="#fff8e6"/>' +
      '<text x="200" y="100" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="' + RED + '">TONI BRAXTON IS BELLE</text>' +
      '<text x="200" y="118" text-anchor="middle" ' + font + ' font-size="11" fill="#3a1e24">NOW PLAYING ON BROADWAY</text>' +
      /* lobby window with the rose under glass */
      '<rect x="146" y="150" width="108" height="86" fill="#1a0e12" stroke="#c9a227" stroke-width="3"/>' +
      '<rect x="176" y="214" width="48" height="8" rx="2" fill="#6b4f10"/>' +
      '<path d="M182 214v-40a18 18 0 0 1 36 0v40z" fill="#bfe3f2" opacity=".25" stroke="#e8f6ff" stroke-width="1.5"/>' +
      '<path d="M200 212v-30" stroke="#2f6a2a" stroke-width="2"/><path d="M200 196q-8 -2 -10 -8q8 0 10 6" fill="#2f6a2a"/>' +
      '<circle cx="200" cy="178" r="8" fill="' + RED + '"/><path d="M194 176q6 -8 12 0q-6 4 -12 0z" fill="#e03a52"/><circle class="tb-glow" cx="200" cy="178" r="13" fill="#ff8aa0" opacity=".25"/>' +
      '<g class="tb-petal"><ellipse cx="206" cy="188" rx="2.5" ry="1.6" fill="' + RED + '"/></g>' +
      /* doors */
      '<rect x="60" y="150" width="70" height="86" fill="#2a161a" stroke="#c9a227" stroke-width="2"/><rect x="270" y="150" width="70" height="86" fill="#2a161a" stroke="#c9a227" stroke-width="2"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#2a2a30"/><rect x="0" y="236" width="400" height="3" fill="#6a6a72"/>' +
      '<text x="200" y="14" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '">BROADWAY · NEW YORK</text>',
      sky("tb-s3", "#0e1030", "#2a1a3a"));
  }

  /* 4. Annapolis harbor, Naval Academy Chapel dome */
  function tbannapolis() {
    const boat = (x, cls, c) => '<g class="tb-bob ' + cls + '"><path d="M' + x + ' 206h44l-8 10h-28z" fill="#f4f1ea" stroke="#5a5048" stroke-width="1.5"/><rect x="' + (x + 21) + '" y="150" width="2" height="56" fill="#5a5048"/><path d="M' + (x + 23) + ' 152l18 48h-18z" fill="' + c + '"/><path d="M' + (x + 21) + ' 158l-14 42h14z" fill="#fff"/></g>';
    let waves = ""; for (let i = 0; i < 14; i++) waves += '<path d="M' + (i * 40) + ' 228q10 -5 20 0t20 0" stroke="#9ec7e0" stroke-width="1.5" fill="none" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tb-s4)"/>' +
      /* far shore and Academy buildings */
      '<rect x="0" y="150" width="400" height="40" fill="#5a5466"/>' +
      '<rect x="40" y="150" width="90" height="34" fill="#cfc6b4"/><rect x="270" y="152" width="110" height="32" fill="#cfc6b4"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (46 + i * 10) + '" y="160" width="5" height="9" fill="#ffd98a" class="tb-glow' + (i % 2 ? " tb-glow2" : "") + '" opacity=".7"/>').join("") +
      /* Chapel: pale stone drum, green copper dome, lantern */
      '<rect x="168" y="118" width="64" height="66" fill="#e6dccb"/><rect x="160" y="140" width="80" height="44" fill="#ddd2bf"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (174 + i * 12) + '" y="122" width="6" height="16" rx="3" fill="#8a7f70"/>').join("") +
      '<path d="M164 118a36 40 0 0 1 72 0z" fill="#5fa58a" stroke="#3f7a64" stroke-width="2"/><path d="M182 118a18 36 0 0 1 36 0" stroke="#3f7a64" stroke-width="1.4" fill="none"/><path d="M200 78v40" stroke="#3f7a64" stroke-width="1.4"/>' +
      '<rect x="193" y="66" width="14" height="14" fill="#e6dccb"/><path d="M191 66a9 10 0 0 1 18 0z" fill="#5fa58a"/><rect x="199" y="48" width="2" height="10" fill="#c9a227"/><circle class="tb-glow" cx="200" cy="72" r="3" fill="#fff3c0"/>' +
      /* water */
      '<rect x="0" y="190" width="400" height="70" fill="#2a5a7a"/><g class="tb-wave">' + waves + '</g>' +
      '<path d="M120 190h160l-10 50h-140z" fill="#ffd98a" opacity=".12"/>' +
      boat(40, "", RED) + boat(300, "tb-bob2", CHAMP) +
      '<rect x="0" y="244" width="400" height="16" fill="#4a3a2a"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 42) + '" y="238" width="6" height="22" fill="#2e241a"/>').join("") +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">ANNAPOLIS HARBOR · ANNE ARUNDEL COUNTY</text>',
      sky("tb-s4", "#2a2a5a", "#f0a070"));
  }

  /* 5. Telegraph Rd and Reece Rd, Severn */
  function tbcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#tb-s5)"/>' + stars(10) +
      /* BWI tower far behind and a jet climbing out */
      '<rect x="300" y="60" width="8" height="56" fill="#3a3f4a"/><path d="M290 52h28l-4 10h-20z" fill="#4a5060"/><rect x="292" y="44" width="24" height="9" fill="#9ec7e0" opacity=".8"/>' +
      '<g class="tb-jet"><path d="M0 60l40 -6l8 -6h4l-4 7l14 -2l4 -5h3l-2 6l-2 5h-3l-4 -4l-14 1l4 7h-4l-8 -6l-40 -2z" fill="#e8ecf2"/><circle class="tb-glow" cx="2" cy="61" r="1.6" fill="#ff4a4a"/></g>' +
      tree(40, 112, 1.4, "#2c4a2a") + tree(90, 116, 1.1, "#335a30") +
      /* wall */
      '<rect x="0" y="120" width="400" height="104" fill="#6a4a52"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (128 + i * 8) + 'h400" stroke="#5a3e46" stroke-width="1"/>').join("") +
      '<rect x="0" y="116" width="400" height="6" fill="#3a2a30"/>' +
      tag("TONI", 22, 188, 56, CHAMP, -6) + tag("BRAXTON", 30, 216, 24, "#fff", -3) + tag("SEVERN", 196, 170, 24, RED, -4) + tag("UNBREAK", 190, 210, 20, CREAM, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="tb-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + RED + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + RED + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(288, 98, 110, "Telegraph Rd") + sign(302, 124, 96, "Reece Rd") +
      '<g class="tb-sp"><circle cx="150" cy="160" r="3" fill="' + CHAMP + '" opacity=".7"/></g><g class="tb-sp tb-sp2"><circle cx="156" cy="154" r="2" fill="' + CHAMP + '" opacity=".6"/></g>',
      sky("tb-s5", "#1a1a40", "#c0707a"));
  }

  window.SCENES = { tbstation: tbstation, tbchurch: tbchurch, tbbroadway: tbbroadway, tbannapolis: tbannapolis, tbcorner: tbcorner };
})();
