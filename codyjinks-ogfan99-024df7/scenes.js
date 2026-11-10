/* codyjinks scenes (Regions: Houston + Texas / Genres: country; Haltom City, North Fort Worth). CSS classes prefixed cjk- (the page's own anim-train is kept).
   Sources: Wikipedia "Cody Jinks" (born Haltom City Aug 18 1980, Haltom High School, lead singer/guitarist of Fort Worth thrash band Unchecked Aggression 1998-2003,
   Adobe Sessions recorded at Sonic Ranch, Tornillo TX); Wikipedia "Haltom High School" (Buffaloes; orange, black and white; 5501 Haltom Rd; Cody Jinks listed among alumni);
   Fort Worth Magazine "The Outlaw Cody Jinks" (calls himself a North Fort Worth kid, FWTX on his knuckles, worked freight docks and a steel shearing plant);
   Wikipedia "North Richland Hills/Iron Horse station" (TEXRail, at-grade, 6301 NE Loop 820, next stop toward Haltom City/Fort Worth is Mercantile Center).
   Every 9 is drawn as a path (round head + straight stem), never as a font glyph. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const BONE = "#efe6d2", RED = "#c8102e", ORANGE = "#e8731c", GOLD = "#d9a441", BLOOD = "#8b1e1e";
  const css = '<style>' +
    '@keyframes cjkglow{0%,100%{opacity:.45}50%{opacity:1}}.cjk-glow{animation:cjkglow 2.4s ease-in-out infinite}.cjk-g2{animation-delay:-1.2s}' +
    '@keyframes cjknote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-58px);opacity:0}}.cjk-nt{animation:cjknote 3.2s ease-out infinite}.cjk-nt2{animation-delay:-1.1s}.cjk-nt3{animation-delay:-2.2s}' +
    '@keyframes cjkcloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.cjk-cl{animation:cjkcloud 14s ease-in-out infinite alternate}' +
    '@keyframes cjkbang{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(20deg)}}.cjk-bang{transform-box:fill-box;transform-origin:50% 100%;animation:cjkbang .45s ease-in-out infinite}.cjk-b2{animation-delay:-.22s}' +
    '@keyframes cjkflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.cjk-flag{transform-box:fill-box;transform-origin:0 50%;animation:cjkflag 1.6s ease-in-out infinite}' +
    '@keyframes cjkbeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.cjk-beam{transform-box:fill-box;transform-origin:50% 0;animation:cjkbeam 3s ease-in-out infinite}.cjk-bm2{animation-delay:-1.5s}' +
    '@keyframes cjkdrive{0%{transform:translateX(-140px)}100%{transform:translateX(440px)}}.cjk-drive{animation:cjkdrive 10s linear infinite;animation-delay:-3s}' +
    '@keyframes cjkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cjk-sp{animation:cjkspray 1.4s ease-out infinite}.cjk-sp2{animation-delay:.45s}' +
    '@keyframes cjkleaf{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.cjk-leaf{animation:cjkleaf 2.2s ease-in-out infinite}.cjk-lf2{animation-delay:-1.1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="cjk-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const oak = (x, y, r, c) => '<rect x="' + (x - 2) + '" y="' + y + '" width="4" height="' + (r * .9) + '" fill="#4a3424"/><g class="cjk-leaf"><ellipse cx="' + x + '" cy="' + y + '" rx="' + (r * 1.3) + '" ry="' + r + '" fill="' + c + '"/><ellipse cx="' + (x - r * .7) + '" cy="' + (y + 3) + '" rx="' + (r * .7) + '" ry="' + (r * .6) + '" fill="' + c + '"/></g>';
  const bricks = (x, y, w, h, c, m) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let j = 0; j < h; j += 8) s += '<path d="M' + x + ' ' + (y + j) + 'h' + w + '" stroke="' + m + '" stroke-width=".8"/>'; return s; };

  /* ROOM 0: TEXRail at North Richland Hills/Iron Horse, the at-grade stop next door to Haltom City, the red-and-white train sliding in, Loop 820 behind */
  function cjkstation() {
    let oaks = ""; for (let i = 0; i < 7; i++) oaks += oak(16 + i * 62, 120, 15 + (i * 5) % 7, i % 2 ? "#4a6a34" : "#577a3c");
    return svg(
      '<rect width="400" height="260" fill="url(#cjk1)"/>' +
      '<g class="cjk-cl"><ellipse cx="80" cy="30" rx="40" ry="8" fill="#fff" opacity=".6"/><ellipse cx="270" cy="22" rx="44" ry="8" fill="#fff" opacity=".5"/></g>' +
      /* Loop 820 overpass far behind */
      '<rect x="0" y="100" width="400" height="10" fill="#b8b2a6"/><rect x="0" y="110" width="400" height="3" fill="#8a857c"/>' + [40, 140, 240, 340].map(x => '<rect x="' + x + '" y="113" width="8" height="22" fill="#a8a296"/>').join("") +
      '<g class="cjk-drive"><rect x="0" y="92" width="34" height="9" rx="2" fill="#3a4a6a"/><rect x="40" y="92" width="22" height="9" rx="2" fill="#d8d8d2"/></g>' +
      '<rect x="0" y="134" width="400" height="16" fill="#8aa05a"/>' + oaks +
      /* canopy shelter */
      '<rect x="230" y="112" width="4" height="36" fill="#555"/><rect x="360" y="112" width="4" height="36" fill="#555"/><path d="M222 112h150l-8 -10h-134z" fill="#c9cdd2" stroke="#7a7e84" stroke-width="1.2"/>' +
      /* black station sign */
      '<rect x="44" y="70" width="4" height="74" fill="#333"/><rect x="176" y="70" width="4" height="74" fill="#333"/><rect x="20" y="40" width="184" height="40" rx="2" fill="#111"/><path d="M20 46h184" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="112" y="60" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">NORTH RICHLAND HILLS</text>' +
      '<text x="94" y="75" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">IRON HORSE</text>' +
      '<rect x="138" y="67" width="40" height="10" rx="2" fill="' + RED + '"/><text x="158" y="74.5" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">TEXRAIL</text>' +
      /* platform + track */
      '<rect x="0" y="148" width="400" height="6" fill="#d8d0c0"/><rect x="0" y="154" width="400" height="4" fill="#f2d04a"/><rect x="0" y="200" width="400" height="60" fill="#6a6258"/><path d="M0 204h400M0 214h400" stroke="#9a9a9a" stroke-width="2"/>' +
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20 + 4) + '" y="202" width="6" height="14" fill="#4a3322"/>').join("") +
      /* the train */
      '<g class="anim-train"><g transform="translate(120 0)"><path d="M0 156h70v46h-84q-6 0 -4 -8l6 -26q4 -12 16 -12z" fill="#eef0f2" stroke="#8a8e94" stroke-width="1.5"/><path d="M-14 186h84v8h-86z" fill="' + RED + '"/>' +
      '<path d="M-4 160h30v16h-36z" fill="#2a3a4a"/><rect x="34" y="162" width="14" height="14" rx="2" fill="#2a3a4a"/><rect x="52" y="162" width="14" height="14" rx="2" fill="#2a3a4a"/><circle cx="-10" cy="190" r="3.5" fill="#ffe28a" class="cjk-glow"/>' +
      '<rect x="74" y="156" width="130" height="46" rx="4" fill="#eef0f2" stroke="#8a8e94" stroke-width="1.5"/><rect x="74" y="186" width="130" height="8" fill="' + RED + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (82 + i * 20) + '" y="162" width="14" height="16" rx="2" fill="#2a3a4a"/>').join("") +
      '<circle cx="4" cy="204" r="6" fill="#222"/><circle cx="54" cy="204" r="6" fill="#222"/><circle cx="96" cy="204" r="6" fill="#222"/><circle cx="184" cy="204" r="6" fill="#222"/></g></g>' +
      '<rect x="0" y="236" width="400" height="24" fill="#c8c0aa"/><path d="M0 236h400" stroke="' + ORANGE + '" stroke-width="3"/>',
      sky("cjk1", "#5a9ad6", "#f2dcb8"));
  }

  /* ROOM 1: Haltom High School on Haltom Rd, home of the Buffaloes (orange, black and white), Friday night lights */
  function cjkhaltom() {
    const lights = (x) => '<rect x="' + x + '" y="40" width="4" height="100" fill="#6a6e72"/><rect x="' + (x - 14) + '" y="30" width="32" height="14" fill="#333"/>' + [0, 1, 2, 3].map(i => '<circle cx="' + (x - 9 + i * 7.5) + '" cy="37" r="2.6" fill="#fff6c8" class="cjk-glow' + (i % 2 ? ' cjk-g2' : '') + '"/>').join("");
    const fans = Array.from({ length: 16 }, (_, i) => { const x = 12 + i * 25; return '<circle cx="' + x + '" cy="' + (168 - (i % 2) * 3) + '" r="5" fill="' + (i % 3 ? "#1d1d1d" : ORANGE) + '"/><rect x="' + (x - 6) + '" y="' + (172 - (i % 2) * 3) + '" width="12" height="10" fill="' + (i % 3 ? "#1d1d1d" : ORANGE) + '"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cjk2)"/>' +
      lights(40) + lights(360) +
      /* school building */
      bricks(110, 70, 180, 70, "#b8643a", "#8a4424") + '<rect x="104" y="64" width="192" height="8" fill="#e8e2d4"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (120 + i * 24) + '" y="82" width="14" height="16" fill="#2a3a4a"/><rect x="' + (120 + i * 24) + '" y="108" width="14" height="16" fill="#2a3a4a" class="' + (i % 3 ? "" : "cjk-glow") + '"/>').join("") +
      '<rect x="160" y="40" width="80" height="22" rx="2" fill="#111" stroke="' + ORANGE + '" stroke-width="2"/><text x="200" y="55" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">HALTOM HIGH</text>' +
      /* flagpole with an orange and black pennant */
      '<rect x="310" y="40" width="3" height="100" fill="#ccc"/><g class="cjk-flag"><path d="M313 42h34l-6 9l6 9h-34z" fill="' + ORANGE + '"/><path d="M313 51h28" stroke="#111" stroke-width="3"/></g>' +
      /* stands + field */
      '<rect x="0" y="150" width="400" height="36" fill="#555a60"/>' + fans +
      '<rect x="0" y="186" width="400" height="74" fill="#3f7a3a"/>' + [40, 100, 160, 220, 280, 340].map(x => '<path d="M' + x + ' 186v74" stroke="#fff" stroke-width="1.5" opacity=".8"/>').join("") +
      '<path d="M200 200v-30M186 200h28M186 200v-14M214 200v-14" stroke="#f2d04a" stroke-width="3" fill="none"/>' +
      /* buffalo silhouette painted on the field: big shoulder hump, low head, horns, short legs */
      '<g transform="translate(140 200)" fill="' + ORANGE + '" stroke="#111" stroke-width="1.5" stroke-linejoin="round">' +
      '<path d="M14 30q-4 -18 10 -26q14 -8 30 -2q16 0 30 6q10 6 8 22h-6v14h-6v-12h-34v12h-6v-12q-8 0 -12 -2v14h-6v-14z"/>' +
      '<path d="M24 6q-14 2 -16 16q-2 8 6 10q8 0 12 -6z"/><path d="M14 10q-6 -6 -2 -12M22 6q2 -8 8 -8" fill="none" stroke="#efe6d2" stroke-width="2"/>' +
      '<path d="M92 26q8 2 6 12" fill="none"/><circle cx="14" cy="18" r="1.6" fill="#111"/></g>' +
      tag("BUFFALOES", 250, 246, 18, BONE, -4),
      sky("cjk2", "#141a34", "#5a3a5a"));
  }

  /* ROOM 2: the Fort Worth thrash years, Unchecked Aggression on a club stage, amps stacked, heads banging */
  function cjkmetal() {
    const heads = Array.from({ length: 12 }, (_, i) => { const x = 20 + i * 33; return '<g class="cjk-bang' + (i % 2 ? ' cjk-b2' : '') + '"><circle cx="' + x + '" cy="' + (214 - (i % 3) * 3) + '" r="8" fill="#1a1414"/><path d="M' + (x - 9) + ' ' + (212 - (i % 3) * 3) + 'q-4 14 2 22M' + (x + 9) + ' ' + (212 - (i % 3) * 3) + 'q4 14 -2 22" stroke="#1a1414" stroke-width="4" fill="none"/></g><path d="M' + (x - 13) + ' 260q13 -34 26 0z" fill="#1a1414"/>'; }).join("");
    const amp = (x, y) => '<rect x="' + x + '" y="' + y + '" width="46" height="34" rx="2" fill="#151515" stroke="#444" stroke-width="1.5"/><circle cx="' + (x + 13) + '" cy="' + (y + 17) + '" r="9" fill="#2a2a2a"/><circle cx="' + (x + 33) + '" cy="' + (y + 17) + '" r="9" fill="#2a2a2a"/>';
    return svg(
      '<rect width="400" height="260" fill="#0d0a0a"/>' +
      /* lighting truss + beams */
      '<rect x="0" y="16" width="400" height="6" fill="#3a3a3a"/>' +
      '<path class="cjk-beam" d="M90 22l-40 150h80z" fill="' + BLOOD + '" opacity=".35"/><path class="cjk-beam cjk-bm2" d="M310 22l-40 150h80z" fill="' + ORANGE + '" opacity=".3"/><path class="cjk-beam" d="M200 22l-30 150h60z" fill="#f4e4b0" opacity=".22"/>' +
      [90, 200, 310].map(x => '<rect x="' + (x - 7) + '" y="20" width="14" height="10" fill="#222"/><circle cx="' + x + '" cy="30" r="4" fill="#fff4d0" class="cjk-glow"/>').join("") +
      /* backdrop banner */
      '<rect x="70" y="40" width="260" height="34" fill="#1c1c1c" stroke="' + BLOOD + '" stroke-width="2"/><text x="200" y="63" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" fill="' + BONE + '" letter-spacing="1">UNCHECKED AGGRESSION</text>' +
      /* stage + amps */
      amp(20, 118) + amp(20, 84) + amp(334, 118) + amp(334, 84) +
      '<rect x="0" y="152" width="400" height="24" fill="#2a1d14"/><path d="M0 152h400" stroke="#5a4030" stroke-width="2"/>' +
      /* singer-guitarist silhouette at the mic */
      '<g fill="#000"><circle cx="200" cy="100" r="9"/><path d="M190 110h20l4 42h-28z"/><rect x="186" y="150" width="8" height="4"/><rect x="206" y="150" width="8" height="4"/></g>' +
      '<path d="M178 132l50 -10l2 6l-50 10z" fill="#3a3a3a"/><rect x="226" y="98" width="2" height="54" fill="#888"/><circle cx="227" cy="98" r="3" fill="#aaa"/>' +
      note(130, 140, BONE) + note(276, 140, ORANGE, "cjk-nt2") + heads,
      "");
  }

  /* ROOM 3: Sonic Ranch in Tornillo, the adobe studio in the pecan orchards by the border where Adobe Sessions was cut */
  function cjkadobe() {
    const pecans = Array.from({ length: 9 }, (_, i) => oak(14 + i * 47, 150 - (i % 2) * 4, 14, i % 2 ? "#5a7a3a" : "#4c6a30")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cjk4)"/>' +
      '<circle cx="320" cy="60" r="22" fill="#ffd27a" opacity=".9"/>' +
      /* desert mountains to the south */
      '<path d="M0 132l40 -30l30 18l44 -44l36 34l34 -20l50 40l40 -26l48 30l34 -18l44 26v20h-400z" fill="#8a6a7a"/><path d="M0 140l60 -16l50 10l70 -18l80 16l60 -10l80 14v14h-400z" fill="#a87a6a"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#c9a878"/>' + pecans +
      /* adobe studio building, earth colored with vigas */
      '<rect x="110" y="132" width="180" height="70" fill="#c98a5a"/><rect x="106" y="126" width="188" height="10" fill="#b47a4c"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (114 + i * 18) + '" y="136" width="8" height="5" fill="#6a4428"/>').join("") +
      '<path d="M190 202v-40q10 -12 20 0v40z" fill="#5a3a22"/>' +
      '<rect x="128" y="150" width="24" height="22" fill="#2a2420"/><rect x="128" y="150" width="24" height="22" fill="#ffcf6a" class="cjk-glow" opacity=".7"/><rect x="248" y="150" width="24" height="22" fill="#2a2420"/><rect x="248" y="150" width="24" height="22" fill="#ffcf6a" class="cjk-glow cjk-g2" opacity=".7"/>' +
      /* sign in the yard */
      '<rect x="306" y="186" width="4" height="30" fill="#5a3a22"/><rect x="292" y="166" width="88" height="22" rx="2" fill="#5a3a22"/><text x="336" y="181" text-anchor="middle" ' + font + ' font-size="9" fill="' + BONE + '">SONIC RANCH</text>' +
      /* dirt road */
      '<path d="M170 260l20 -58h20l30 58z" fill="#b8946a"/>' +
      note(160, 120, BLOOD) + note(232, 116, "#5a3a22", "cjk-nt2") + note(200, 104, BLOOD, "cjk-nt3"),
      sky("cjk4", "#4a7ac8", "#f6c88a"));
  }

  /* ROOM 4: his corner in Haltom City, Denton Hwy and Belknap St, the water tower behind */
  function cjkcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#cjk5)"/>' +
      /* water tower */
      '<g><rect x="300" y="70" width="3" height="80" fill="#8a9aa8"/><rect x="340" y="70" width="3" height="80" fill="#8a9aa8"/><path d="M301 110l40 30M341 110l-40 30" stroke="#8a9aa8" stroke-width="2"/>' +
      '<ellipse cx="321" cy="52" rx="34" ry="24" fill="#cfd8de" stroke="#8a9aa8" stroke-width="2"/><rect x="316" y="18" width="10" height="10" fill="#cfd8de"/><circle cx="321" cy="30" r="2" fill="#ff5a4a" class="cjk-glow"/>' +
      '<text x="321" y="56" text-anchor="middle" ' + font + ' font-size="9" fill="#2a3a4a">HALTOM CITY</text></g>' +
      /* low strip buildings */
      '<rect x="0" y="120" width="120" height="34" fill="#6a5a4a"/><rect x="230" y="128" width="170" height="26" fill="#5a4a40"/>' +
      /* brick wall with the tags */
      bricks(0, 150, 400, 70, "#9a4a32", "#6a2e1e") +
      tag("CODY JINKS", 92, 198, 34, BONE, -5) + tag("FWTX", 318, 184, 22, ORANGE, -8) + tag("FLOCKERS", 296, 214, 16, GOLD, -3) +
      '<g class="cjk-sp"><circle cx="300" cy="200" r="2" fill="' + ORANGE + '"/><circle cx="306" cy="194" r="1.5" fill="' + ORANGE + '"/></g><g class="cjk-sp cjk-sp2"><circle cx="294" cy="206" r="1.5" fill="' + BONE + '"/></g>' +
      /* sidewalk */
      '<rect x="0" y="220" width="400" height="40" fill="#8a8478"/><path d="M0 222h400" stroke="#b8b0a2" stroke-width="2"/>' +
      /* street sign pole */
      '<rect x="44" y="70" width="5" height="152" fill="#6a6e72"/>' + sign(8, 70, 120, "DENTON HWY") + sign(18, 96, 90, "BELKNAP ST"),
      sky("cjk5", "#1c2240", "#e88a4a"));
  }

  window.SCENES = { cjkstation: cjkstation, cjkhaltom: cjkhaltom, cjkmetal: cjkmetal, cjkadobe: cjkadobe, cjkcorner: cjkcorner };
})();
