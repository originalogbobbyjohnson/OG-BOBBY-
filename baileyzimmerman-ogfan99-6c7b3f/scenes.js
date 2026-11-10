/* baileyzimmerman scenes (Regions: St. Louis + Ohio / Genres: country; Louisville, Illinois, Clay County, about two hours east of St. Louis). CSS classes prefixed bzm- (the page's own anim-train is kept).
   Sources: Biography.com "Bailey Zimmerman" (Louisville IL; North Clay High School 2018; meat processing plant at 16; union gas pipelines in West Virginia; motocross and dirt bikes;
   customizing his pickup and posting it to TikTok; "Never Comin' Home" went viral January 2021; Warner Music Nashville); Rolling Stone (gas pipeline + truck TikToks);
   IHSA (North Clay Cardinals, scarlet/black, on US 45 South); Wikipedia "Clay County Courthouse (Illinois)" (1913 Classical Revival, 300 Broadway St, on a mound in the village square);
   Amtrak Effingham station (Illini, Saluki, City of New Orleans), the closest train stop, about 25 miles north up US 45.
   Every 9 is drawn as a path (round head + straight stem), never as a font glyph. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const BONE = "#efe8dc", SCARLET = "#c8102e", STEEL = "#9aa6b2", AMBER = "#e8a33a", BLUE = "#1d4f91";
  const css = '<style>' +
    '@keyframes bzmglow{0%,100%{opacity:.45}50%{opacity:1}}.bzm-glow{animation:bzmglow 2.4s ease-in-out infinite}.bzm-g2{animation-delay:-1.2s}' +
    '@keyframes bzmnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-58px);opacity:0}}.bzm-nt{animation:bzmnote 3.2s ease-out infinite}.bzm-nt2{animation-delay:-1.1s}.bzm-nt3{animation-delay:-2.2s}' +
    '@keyframes bzmcloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.bzm-cl{animation:bzmcloud 14s ease-in-out infinite alternate}' +
    '@keyframes bzmball{0%{transform:translate(0,0)}50%{transform:translate(90px,-60px)}100%{transform:translate(180px,0)}}.bzm-ball{animation:bzmball 2.6s ease-in-out infinite}' +
    '@keyframes bzmdig{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(10deg)}}.bzm-dig{transform-box:fill-box;transform-origin:0 100%;animation:bzmdig 2.4s ease-in-out infinite}' +
    '@keyframes bzmrec{0%,100%{opacity:1}50%{opacity:.2}}.bzm-rec{animation:bzmrec 1s step-end infinite}' +
    '@keyframes bzmdrive{0%{transform:translateX(-140px)}100%{transform:translateX(440px)}}.bzm-drive{animation:bzmdrive 9s linear infinite;animation-delay:-2s}' +
    '@keyframes bzmspark{0%{transform:translate(0,0);opacity:1}100%{transform:translate(14px,-18px);opacity:0}}.bzm-spk{animation:bzmspark .7s ease-out infinite}.bzm-spk2{animation-delay:-.35s}' +
    '@keyframes bzmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bzm-sp{animation:bzmspray 1.4s ease-out infinite}.bzm-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="bzm-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const bricks = (x, y, w, h, c, m) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let j = 0; j < h; j += 8) s += '<path d="M' + x + ' ' + (y + j) + 'h' + w + '" stroke="' + m + '" stroke-width=".8"/>'; return s; };
  const pickup = (x, y, c) => '<g transform="translate(' + x + ' ' + y + ')"><path d="M0 30v-14h52l12 -16h40l10 16h14q6 0 6 6v8z" fill="' + c + '" stroke="#111" stroke-width="1.5"/><path d="M68 2h34l8 14h-50z" fill="#2a3a4a"/><path d="M58 16v14" stroke="#111" stroke-width="2"/><path d="M4 16h48" stroke="#555" stroke-width="2"/>' +
    '<rect x="0" y="30" width="140" height="10" fill="#222"/><circle cx="26" cy="42" r="12" fill="#111"/><circle cx="26" cy="42" r="5" fill="#888"/><circle cx="112" cy="42" r="12" fill="#111"/><circle cx="112" cy="42" r="5" fill="#888"/><rect x="132" y="20" width="6" height="5" fill="#ffe28a" class="bzm-glow"/></g>';

  /* ROOM 0: Amtrak at Effingham, the closest train stop to Louisville, IL, the silver train sliding in by the old brick depot, the big white cross at the crossroads behind */
  function bzmstation() {
    return svg(
      '<rect width="400" height="260" fill="url(#bzm1)"/>' +
      '<g class="bzm-cl"><ellipse cx="80" cy="30" rx="40" ry="8" fill="#fff" opacity=".6"/><ellipse cx="270" cy="22" rx="44" ry="8" fill="#fff" opacity=".5"/></g>' +
      /* the giant white cross far behind */
      '<rect x="336" y="22" width="12" height="110" fill="#f4f4f0"/><rect x="314" y="44" width="56" height="11" fill="#f4f4f0"/>' +
      '<rect x="0" y="120" width="400" height="30" fill="#c8b878"/>' +
      /* brick depot */
      bricks(140, 92, 150, 50, "#9a4a32", "#6a2e1e") + '<path d="M130 92h170l-14 -16h-142z" fill="#5a4a40"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (152 + i * 28) + '" y="104" width="16" height="22" fill="#2a3a4a" class="' + (i % 2 ? "bzm-glow" : "") + '"/>').join("") +
      /* black station sign */
      '<rect x="36" y="80" width="4" height="66" fill="#333"/><rect x="112" y="80" width="4" height="66" fill="#333"/><rect x="14" y="48" width="126" height="40" rx="2" fill="#111"/><path d="M14 54h126" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="77" y="69" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">EFFINGHAM</text>' +
      '<rect x="20" y="74" width="34" height="10" rx="2" fill="' + BLUE + '"/><text x="37" y="81.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">ILLINI</text>' +
      '<rect x="58" y="74" width="38" height="10" rx="2" fill="' + BLUE + '"/><text x="77" y="81.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">SALUKI</text>' +
      '<rect x="100" y="74" width="36" height="10" rx="2" fill="' + BLUE + '"/><text x="118" y="81.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">CONO</text>' +
      /* platform + track */
      '<rect x="0" y="146" width="400" height="6" fill="#d8d0c0"/><rect x="0" y="152" width="400" height="4" fill="#f2d04a"/><rect x="0" y="200" width="400" height="60" fill="#6a6258"/><path d="M0 204h400M0 214h400" stroke="#9a9a9a" stroke-width="2"/>' +
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20 + 4) + '" y="202" width="6" height="14" fill="#4a3322"/>').join("") +
      /* the train */
      '<g class="anim-train"><g transform="translate(110 0)"><path d="M0 154h80v48h-92q-6 0 -4 -8l8 -26q4 -14 18 -14z" fill="#c8ccd2" stroke="#6a6e74" stroke-width="1.5"/>' +
      '<path d="M-10 182h90v5h-92z" fill="' + BLUE + '"/><path d="M-12 188h92v3h-93z" fill="' + SCARLET + '"/><path d="M-2 158h28v16h-34z" fill="#2a3a4a"/><circle cx="-8" cy="194" r="3.5" fill="#ffe28a" class="bzm-glow"/>' +
      '<rect x="84" y="154" width="150" height="48" rx="4" fill="#d6dadf" stroke="#6a6e74" stroke-width="1.5"/><rect x="84" y="182" width="150" height="5" fill="' + BLUE + '"/><rect x="84" y="188" width="150" height="3" fill="' + SCARLET + '"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (92 + i * 20) + '" y="162" width="14" height="14" rx="2" fill="#2a3a4a"/>').join("") +
      '<circle cx="6" cy="204" r="6" fill="#222"/><circle cx="60" cy="204" r="6" fill="#222"/><circle cx="104" cy="204" r="6" fill="#222"/><circle cx="214" cy="204" r="6" fill="#222"/></g></g>' +
      '<rect x="0" y="236" width="400" height="24" fill="#c8c0aa"/><path d="M0 236h400" stroke="' + SCARLET + '" stroke-width="3"/>',
      sky("bzm1", "#5a9ad6", "#f2dcb8"));
  }

  /* ROOM 1: the North Clay Cardinals ball diamond off US 45, scarlet and black, where he played ball till sophomore year */
  function bzmfield() {
    const lights = (x) => '<rect x="' + x + '" y="40" width="4" height="96" fill="#6a6e72"/><rect x="' + (x - 14) + '" y="30" width="32" height="14" fill="#333"/>' + [0, 1, 2, 3].map(i => '<circle cx="' + (x - 9 + i * 7.5) + '" cy="37" r="2.6" fill="#fff6c8" class="bzm-glow' + (i % 2 ? ' bzm-g2' : '') + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bzm2)"/>' +
      lights(30) + lights(370) +
      /* corn rows on the horizon */
      '<rect x="0" y="118" width="400" height="18" fill="#7a8a3a"/>' + Array.from({ length: 40 }, (_, i) => '<path d="M' + (i * 10 + 3) + ' 136v-14" stroke="#5a6a2a" stroke-width="2"/>').join("") +
      /* outfield fence with the scoreboard */
      '<rect x="0" y="132" width="400" height="16" fill="' + SCARLET + '"/><path d="M0 132h400" stroke="#111" stroke-width="3"/>' +
      '<rect x="150" y="66" width="100" height="50" fill="#111" stroke="' + SCARLET + '" stroke-width="2"/><rect x="196" y="116" width="8" height="16" fill="#555"/>' +
      '<text x="200" y="84" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">CARDINALS</text><text x="174" y="104" text-anchor="middle" ' + font + ' font-size="9" fill="' + AMBER + '">HOME</text><text x="226" y="104" text-anchor="middle" ' + font + ' font-size="9" fill="' + AMBER + '">GUEST</text>' +
      /* grass + infield */
      '<rect x="0" y="148" width="400" height="112" fill="#3f7a3a"/><path d="M200 250l-100 -60l100 -50l100 50z" fill="#b8865a"/><path d="M200 236l-70 -44l70 -34l70 34z" fill="#3f7a3a"/>' +
      '<rect x="196" y="244" width="8" height="8" fill="#fff"/><rect x="126" y="186" width="7" height="7" fill="#fff"/><rect x="267" y="186" width="7" height="7" fill="#fff"/><rect x="196" y="137" width="7" height="7" fill="#fff"/>' +
      '<circle cx="200" cy="194" r="7" fill="#c8966a"/>' +
      '<g class="bzm-ball"><circle cx="110" cy="220" r="3" fill="#fff"/></g>' +
      tag("CARDS", 300, 246, 20, BONE, -4),
      sky("bzm2", "#141a34", "#5a3a5a"));
  }

  /* ROOM 2: the union gas pipeline in the West Virginia hills, the pipe on the right-of-way, the excavator digging, a welder's sparks */
  function bzmpipe() {
    return svg(
      '<rect width="400" height="260" fill="url(#bzm3)"/>' +
      '<path d="M0 120l50 -40l40 24l60 -50l50 40l40 -26l60 44l50 -30l50 30v40h-400z" fill="#3a5a34"/><path d="M0 140l70 -24l60 14l80 -26l70 20l70 -16l50 12v30h-400z" fill="#4a6a3a"/>' +
      /* right-of-way dirt strip */
      '<path d="M120 140h160l120 120h-400z" fill="#8a6a4a"/><path d="M150 150h100l80 110h-260z" fill="#7a5a3a"/>' +
      /* the long pipe */
      '<path d="M0 214l170 -60h60l170 60v12l-170 -56h-60l-170 56z" fill="' + STEEL + '" stroke="#4a5560" stroke-width="1.5"/>' +
      '<ellipse cx="0" cy="220" rx="4" ry="8" fill="#4a5560"/>' +
      /* welder crouched at the joint */
      '<g fill="#1a1a1a"><circle cx="198" cy="150" r="6"/><path d="M190 156h16l2 14h-20z"/></g><rect x="192" y="146" width="12" height="7" fill="#333"/>' +
      '<g class="bzm-spk"><circle cx="210" cy="164" r="1.6" fill="' + AMBER + '"/></g><g class="bzm-spk bzm-spk2"><circle cx="212" cy="166" r="1.4" fill="#fff6c8"/></g>' +
      /* excavator */
      '<g transform="translate(276 112)"><rect x="0" y="40" width="70" height="12" rx="6" fill="#222"/><rect x="6" y="18" width="50" height="24" fill="' + AMBER + '" stroke="#111" stroke-width="1.5"/><rect x="34" y="6" width="22" height="16" fill="' + AMBER + '" stroke="#111" stroke-width="1.5"/><rect x="38" y="9" width="14" height="10" fill="#2a3a4a"/>' +
      '<g class="bzm-dig"><path d="M6 24l-40 -26l-6 6l40 26z" fill="' + AMBER + '" stroke="#111" stroke-width="1.2"/><path d="M-34 -2l-6 30l-8 -2z" fill="' + AMBER + '" stroke="#111" stroke-width="1.2"/><path d="M-48 26h14l-4 8h-10z" fill="#555"/></g></g>' +
      /* hard hat on a pipe rack sign */
      '<rect x="30" y="120" width="4" height="40" fill="#5a3a22"/><rect x="10" y="106" width="88" height="20" rx="2" fill="#f4f0e4" stroke="#333" stroke-width="1"/><text x="54" y="120" text-anchor="middle" ' + font + ' font-size="8" fill="' + SCARLET + '">PIPELINE ROW</text>',
      sky("bzm3", "#7aa8d6", "#f6e0b8"));
  }

  /* ROOM 3: the shop where he worked on his pickup and filmed it for TikTok, the phone on a tripod recording, the song that went viral */
  function bzmshop() {
    return svg(
      '<rect width="400" height="260" fill="#1a1612"/>' +
      /* back wall, pegboard with tools */
      '<rect x="0" y="0" width="400" height="170" fill="#3a3028"/>' + Array.from({ length: 12 }, (_, r) => Array.from({ length: 20 }, (_, c) => '<circle cx="' + (10 + c * 20) + '" cy="' + (10 + r * 12) + '" r="1" fill="#2a221c"/>').join("")).join("") +
      '<path d="M40 30l20 40M70 30l-6 40" stroke="' + STEEL + '" stroke-width="4"/><rect x="96" y="28" width="30" height="8" fill="' + SCARLET + '"/><path d="M110 36v30" stroke="' + STEEL + '" stroke-width="4"/>' +
      '<circle cx="330" cy="50" r="14" fill="none" stroke="#111" stroke-width="5"/><circle cx="360" cy="54" r="10" fill="none" stroke="#111" stroke-width="4"/>' +
      /* shop light */
      '<rect x="150" y="10" width="100" height="6" fill="#ddd"/><path d="M150 16l-30 150h160l-30 -150z" fill="#fff4d0" opacity=".12"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#5a5450"/><path d="M0 170h400" stroke="#777" stroke-width="2"/>' +
      pickup(130, 132, "#2a2a2e") +
      /* phone on a tripod recording */
      '<path d="M70 236l-14 24M70 236l14 24M70 236v24" stroke="#888" stroke-width="2"/><rect x="66" y="180" width="8" height="56" fill="#555"/><rect x="58" y="160" width="24" height="40" rx="3" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<circle cx="76" cy="166" r="2.5" fill="#ff3a3a" class="bzm-rec"/><text x="70" y="186" text-anchor="middle" ' + font + ' font-size="5" fill="#fff">REC</text>' +
      note(240, 120, AMBER) + note(280, 110, BONE, "bzm-nt2") + note(210, 100, SCARLET, "bzm-nt3"),
      "");
  }

  /* ROOM 4: his corner in Louisville, IL: Broadway St and Main St, the 1913 Clay County Courthouse on its mound in the square behind */
  function bzmcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bzm5)"/>' +
      /* courthouse: Classical Revival, pale stone, columns, balustrade */
      '<path d="M150 150q90 -26 180 0z" fill="#4a6a3a"/>' +
      '<rect x="170" y="78" width="140" height="66" fill="#e2dccc" stroke="#8a8478" stroke-width="1.2"/><rect x="164" y="70" width="152" height="10" fill="#d2ccbc"/>' +
      Array.from({ length: 15 }, (_, i) => '<rect x="' + (166 + i * 10) + '" y="62" width="4" height="8" fill="#d2ccbc"/>').join("") + '<rect x="164" y="60" width="152" height="3" fill="#d2ccbc"/>' +
      '<path d="M206 82h68l-34 -0z" fill="#d2ccbc"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (208 + i * 12) + '" y="86" width="6" height="52" fill="#f2eee2"/>').join("") +
      '<rect x="176" y="92" width="18" height="22" fill="#2a3a4a" class="bzm-glow"/><rect x="286" y="92" width="18" height="22" fill="#2a3a4a" class="bzm-glow bzm-g2"/>' +
      /* flag */
      '<rect x="240" y="20" width="2" height="42" fill="#ccc"/><rect x="242" y="22" width="22" height="13" fill="' + SCARLET + '"/><rect x="242" y="22" width="9" height="7" fill="' + BLUE + '"/><path d="M242 26h22M242 31h22" stroke="#fff" stroke-width="1.2"/>' +
      '<g class="bzm-drive"><rect x="0" y="140" width="40" height="10" rx="3" fill="#6a2a2a"/></g>' +
      /* wall with the tags */
      bricks(0, 150, 400, 70, "#9a4a32", "#6a2e1e") +
      tag("BAILEY ZIMMERMAN", 66, 208, 21, BONE, -4) + tag("LOUISVILLE IL", 226, 174, 14, AMBER, -6) + tag("RELIGIOUSLY", 300, 214, 13, SCARLET, -3) +
      '<g class="bzm-sp"><circle cx="296" cy="200" r="2" fill="' + AMBER + '"/><circle cx="302" cy="194" r="1.5" fill="' + AMBER + '"/></g><g class="bzm-sp bzm-sp2"><circle cx="290" cy="206" r="1.5" fill="' + BONE + '"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#8a8478"/><path d="M0 222h400" stroke="#b8b0a2" stroke-width="2"/>' +
      '<rect x="44" y="70" width="5" height="152" fill="#6a6e72"/>' + sign(4, 70, 110, "BROADWAY ST") + sign(16, 96, 86, "MAIN ST"),
      sky("bzm5", "#1c2240", "#e88a4a"));
  }

  window.SCENES = { bzmstation: bzmstation, bzmfield: bzmfield, bzmpipe: bzmpipe, bzmshop: bzmshop, bzmcorner: bzmcorner };
})();
