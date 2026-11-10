/* warrenzeiders scenes (Regions: Philadelphia / Genres: country; Hershey, Pennsylvania, the 717). CSS classes prefixed wzd- (the page's own anim-train is kept).
   Sources: Wikipedia "Warren Zeiders" (born Hershey PA 1999; Frostburg State, posted TikTok covers there; "Ride the Lightning"; 717 Tapes; Warner Records 2022);
   hookandbarrel.com (lacrosse player, Frostburg State roster spot, Hershey = "Chocolate Capital of the World"); audacy.com (Hershey native, covers during COVID);
   Shore Fire Media (sold-out hometown show at Giant Center, Hershey, end of 2025 tour, the Live From The 717 album);
   rabbittransit.org Route 322 (Harrisburg - Hummelstown - Hershey Medical Center - Downtown Hershey - Hersheypark; stop W Chocolate Ave & Linden Rd).
   Every 9 is drawn as a path (round head + straight stem), never as a font glyph. No logos, no faces, no brand lettering. */
(function () {
  const W = 400, H = 260;
  const BONE = "#efe6d8", GOLD = "#f2b632", COCOA = "#6b3f24", COPPER = "#d0703a", SILVER = "#c9ced4";
  const css = '<style>' +
    '@keyframes wzdglow{0%,100%{opacity:.45}50%{opacity:1}}.wzd-glow{animation:wzdglow 2.4s ease-in-out infinite}.wzd-g2{animation-delay:-1.2s}' +
    '@keyframes wzdcl{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.wzd-cl{animation:wzdcl 14s ease-in-out infinite alternate}' +
    '@keyframes wzdcar{0%{transform:translate(0,0)}100%{transform:translate(250px,0)}}.wzd-car{animation:wzdcar 3.2s ease-in-out infinite alternate}' +
    '@keyframes wzdtower{0%,100%{transform:translateY(0)}50%{transform:translateY(-70px)}}.wzd-tw{animation:wzdtower 6s ease-in-out infinite}' +
    '@keyframes wzdball{0%{transform:translate(0,0)}50%{transform:translate(110px,-50px)}100%{transform:translate(220px,6px)}}.wzd-ball{animation:wzdball 2.4s ease-in-out infinite alternate}' +
    '@keyframes wzdrec{0%,100%{opacity:1}50%{opacity:.15}}.wzd-rec{animation:wzdrec 1s step-end infinite}' +
    '@keyframes wzdbolt{0%,86%,100%{opacity:0}88%,92%{opacity:1}}.wzd-bolt{animation:wzdbolt 3.4s linear infinite}' +
    '@keyframes wzdbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.wzd-beam{transform-box:fill-box;transform-origin:50% 0;animation:wzdbeam 3s ease-in-out infinite}.wzd-b2{animation-delay:-1.5s}' +
    '@keyframes wzdsmoke{0%{transform:translate(0,0);opacity:.7}100%{transform:translate(16px,-40px);opacity:0}}.wzd-sm{animation:wzdsmoke 3.6s ease-out infinite}.wzd-sm2{animation-delay:-1.8s}' +
    '@keyframes wzdspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.wzd-sp{animation:wzdspray 1.4s ease-out infinite}.wzd-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const bricks = (x, y, w, h, c, m) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let j = 0; j < h; j += 8) s += '<path d="M' + x + ' ' + (y + j) + 'h' + w + '" stroke="' + m + '" stroke-width=".8"/>'; return s; };
  /* teardrop foil-wrapped street lamp, the kind that lines Chocolate Ave (no lettering) */
  const lamp = (x, y, cls) => '<rect x="' + (x - 1.5) + '" y="' + y + '" width="3" height="' + (150 - y + 70) + '" fill="#3a3a3a"/>' +
    '<path d="M' + x + ' ' + (y - 26) + 'q2 8 8 14q4 6 4 12h-24q0 -6 4 -12q6 -6 8 -14z" fill="' + SILVER + '" stroke="#7a8088" stroke-width="1"/>' +
    '<path d="M' + (x - 12) + ' ' + y + 'h24" stroke="#7a8088" stroke-width="1"/><path d="M' + (x + 2) + ' ' + (y - 24) + 'q2 -4 -1 -8" stroke="#e8ecf0" stroke-width="1.2" fill="none"/>' +
    '<ellipse cx="' + x + '" cy="' + (y + 4) + '" rx="12" ry="4" fill="#ffe8a8" class="wzd-glow ' + (cls || "") + '"/>';

  /* ROOM 0: rabbittransit Route 322 pulling up to the W Chocolate Ave & Linden Rd stop in downtown Hershey, foil-drop lamps along the curb */
  function wzdbus() {
    return svg(
      '<rect width="400" height="260" fill="url(#wzd1)"/>' +
      '<g class="wzd-cl"><ellipse cx="80" cy="30" rx="42" ry="8" fill="#fff" opacity=".55"/><ellipse cx="280" cy="20" rx="44" ry="8" fill="#fff" opacity=".45"/></g>' +
      /* rolling Lebanon Valley hills */
      '<path d="M0 120q80 -30 160 -6q80 -26 160 0q50 -14 80 -4v40h-400z" fill="#4e6e3c"/>' +
      /* brick storefront row */
      bricks(0, 98, 400, 52, "#8a4630", "#5e2c1c") +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (12 + i * 50) + '" y="108" width="30" height="20" fill="#2a3a4a" class="' + (i % 2 ? "wzd-glow" : "wzd-glow wzd-g2") + '"/>').join("") +
      lamp(30, 120) + lamp(370, 120, "wzd-g2") +
      /* stop sign post */
      '<rect x="310" y="78" width="4" height="72" fill="#555"/><rect x="270" y="46" width="118" height="40" rx="2" fill="#111"/><path d="M270 52h118" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="329" y="66" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">W CHOCOLATE AVE</text><text x="329" y="80" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">&amp; LINDEN RD</text>' +
      '<circle cx="258" cy="66" r="12" fill="' + COPPER + '" stroke="#fff" stroke-width="1.5"/><text x="258" y="70" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">322</text>' +
      /* street */
      '<rect x="0" y="150" width="400" height="110" fill="#3a3a3e"/><rect x="0" y="150" width="400" height="8" fill="#8a8478"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 54) + '" y="214" width="30" height="4" fill="#e8d27a"/>').join("") +
      /* the bus slides in */
      '<g class="anim-train"><rect x="40" y="148" width="220" height="58" rx="8" fill="#f4f2ee" stroke="#222" stroke-width="2"/>' +
      '<rect x="40" y="186" width="220" height="8" fill="' + COPPER + '"/><rect x="40" y="194" width="220" height="4" fill="#4e6e3c"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 30) + '" y="156" width="24" height="22" rx="2" fill="#2a3a4a"/>').join("") +
      '<rect x="236" y="156" width="20" height="40" rx="2" fill="#2a3a4a"/><rect x="228" y="150" width="30" height="5" rx="1" fill="#111"/><text x="243" y="154.4" text-anchor="middle" ' + font + ' font-size="4.5" fill="' + GOLD + '">322 HERSHEY</text>' +
      '<circle cx="80" cy="208" r="11" fill="#111"/><circle cx="80" cy="208" r="4.5" fill="#888"/><circle cx="220" cy="208" r="11" fill="#111"/><circle cx="220" cy="208" r="4.5" fill="#888"/>' +
      '<rect x="254" y="190" width="6" height="5" fill="#ffe28a" class="wzd-glow"/></g>',
      sky("wzd1", "#3a6a9a", "#f0c48a"));
  }

  /* ROOM 1: the park on the hill in his hometown, a wooden coaster and the drop tower, the chocolate-town smokestacks far behind */
  function wzdpark() {
    let track = '';
    for (let i = 0; i <= 20; i++) { const x = 20 + i * 18; const y = 150 - 60 * Math.abs(Math.sin(i / 3.2)); track += '<path d="M' + x + ' 210V' + y.toFixed(1) + '" stroke="#b07a48" stroke-width="2"/>'; }
    let path = 'M20 150'; for (let i = 1; i <= 20; i++) { const x = 20 + i * 18; const y = 150 - 60 * Math.abs(Math.sin(i / 3.2)); path += 'L' + x + ' ' + y.toFixed(1); }
    return svg(
      '<rect width="400" height="260" fill="url(#wzd2)"/>' +
      '<g class="wzd-cl"><ellipse cx="100" cy="34" rx="40" ry="8" fill="#fff" opacity=".6"/></g>' +
      /* smokestacks far behind */
      '<rect x="318" y="40" width="10" height="80" fill="#8a5a3a"/><rect x="336" y="46" width="10" height="74" fill="#8a5a3a"/>' +
      '<g class="wzd-sm"><circle cx="323" cy="36" r="6" fill="#ddd" opacity=".6"/></g><g class="wzd-sm wzd-sm2"><circle cx="341" cy="42" r="6" fill="#ddd" opacity=".6"/></g>' +
      '<path d="M0 150q100 -24 200 -4q100 -20 200 0v110h-400z" fill="#5a8a44"/>' +
      /* drop tower with the ring riding up and down */
      '<rect x="356" y="20" width="8" height="190" fill="#c9ced4"/><g class="wzd-tw"><rect x="346" y="150" width="28" height="12" rx="3" fill="' + GOLD + '" stroke="#7a5a1a" stroke-width="1"/></g>' +
      /* wooden coaster */
      track + '<path d="' + path + '" stroke="#7a4a28" stroke-width="5" fill="none"/>' +
      '<g class="wzd-car"><rect x="30" y="140" width="30" height="10" rx="3" fill="#c8102e" stroke="#222" stroke-width="1"/><circle cx="38" cy="138" r="3" fill="#333"/><circle cx="52" cy="138" r="3" fill="#333"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#7a6a5a"/><path d="M0 212h400" stroke="#a89a88" stroke-width="2"/>' +
      lamp(30, 200 - 0) ,
      sky("wzd2", "#5aa0d8", "#fde8c0"));
  }

  /* ROOM 2: Frostburg State, the lacrosse field up in the Maryland mountains, a phone on a tripod recording a cover after practice */
  function wzdfield() {
    return svg(
      '<rect width="400" height="260" fill="url(#wzd3)"/>' +
      '<path d="M0 110l60 -40l50 30l60 -46l70 50l60 -36l100 46v40h-400z" fill="#3e5a4a"/>' +
      /* stadium lights */
      '<rect x="40" y="30" width="4" height="110" fill="#777"/><rect x="26" y="22" width="32" height="12" fill="#ddd"/><path d="M30 34l-20 110h70l-20 -110z" fill="#fff8d0" opacity=".12" class="wzd-glow"/>' +
      '<rect x="356" y="30" width="4" height="110" fill="#777"/><rect x="342" y="22" width="32" height="12" fill="#ddd"/>' +
      /* turf */
      '<rect x="0" y="140" width="400" height="120" fill="#2f7a3a"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (i * 80) + ' 140l-30 120" stroke="#fff" stroke-width="1.5" opacity=".6"/>').join("") +
      /* lacrosse goal */
      '<path d="M250 190v-36h36v36" stroke="' + COPPER + '" stroke-width="3" fill="none"/><path d="M250 154l20 20l16 -20M250 190l20 -16l16 16" stroke="#ddd" stroke-width=".8" fill="none"/>' +
      /* ball arcing */
      '<g class="wzd-ball"><circle cx="40" cy="200" r="4" fill="#f4f0e4"/></g>' +
      /* a stick on the grass */
      '<path d="M90 236l60 -20" stroke="#ddd" stroke-width="3"/><path d="M150 216q14 -10 10 -22q-14 2 -16 16z" fill="none" stroke="#ddd" stroke-width="2"/>' +
      /* acoustic guitar against the bench + phone on tripod */
      '<rect x="300" y="214" width="90" height="8" fill="#6a4a2a"/><rect x="306" y="222" width="5" height="16" fill="#4a3220"/><rect x="380" y="222" width="5" height="16" fill="#4a3220"/>' +
      '<ellipse cx="330" cy="206" rx="13" ry="15" fill="#c8843a" stroke="#5a3a1a" stroke-width="1.5"/><circle cx="330" cy="202" r="4" fill="#2a1a0a"/><rect x="327" y="160" width="6" height="34" fill="#5a3a1a"/>' +
      '<path d="M200 240l14 -48l14 48M214 192v48" stroke="#333" stroke-width="2" fill="none"/><rect x="204" y="168" width="20" height="28" rx="3" fill="#111" stroke="#666"/><circle cx="214" cy="174" r="2.5" fill="#e33" class="wzd-rec"/>',
      sky("wzd3", "#1a2340", "#c87a4a"));
  }

  /* ROOM 3: the arena in Hershey where he sold out the hometown show, lightning over the curved glass front, spotlights sweeping */
  function wzdarena() {
    return svg(
      '<rect width="400" height="260" fill="url(#wzd4)"/>' +
      '<path class="wzd-bolt" d="M70 10l-16 40h12l-14 36l30 -48h-12l12 -28z" fill="' + GOLD + '"/>' +
      '<path class="wzd-bolt" style="animation-delay:-1.7s" d="M330 14l-14 34h10l-12 30l26 -42h-10l10 -22z" fill="' + GOLD + '"/>' +
      '<g class="wzd-beam"><path d="M150 150l-40 -150h30z" fill="#fff8d0" opacity=".18"/></g><g class="wzd-beam wzd-b2"><path d="M250 150l40 -150h-30z" fill="#fff8d0" opacity=".18"/></g>' +
      /* arena body + curved glass entry */
      '<path d="M30 200v-70q170 -44 340 0v70z" fill="#5a4a44" stroke="#2a201c" stroke-width="1.5"/>' +
      '<path d="M120 200v-72q80 -30 160 0v72z" fill="#2a4a6a" stroke="#9ab0c4" stroke-width="1.5"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (140 + i * 20) + ' 200v-' + (70 - Math.abs(3 - i) * 3) + '" stroke="#9ab0c4" stroke-width="1"/>').join("") +
      '<path d="M120 160q80 -26 160 0" stroke="#9ab0c4" stroke-width="1" fill="none"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (128 + i * 25) + '" y="170" width="16" height="24" fill="#ffd27a" opacity=".7" class="wzd-glow ' + (i % 2 ? "wzd-g2" : "") + '"/>').join("") +
      /* marquee board */
      '<rect x="300" y="120" width="72" height="40" rx="2" fill="#111" stroke="#777"/><text x="336" y="137" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">SOLD OUT</text><text x="336" y="152" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">LIVE · 717</text>' +
      '<rect x="334" y="160" width="4" height="40" fill="#555"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3a3a3e"/>' + Array.from({ length: 14 }, (_, i) => '<circle cx="' + (20 + i * 28) + '" cy="' + (214 + (i % 3) * 6) + '" r="5" fill="#1a1a1a"/>').join(""),
      sky("wzd4", "#0c0f1e", "#3a2a4a"));
  }

  /* ROOM 4: Chocolate Ave & Cocoa Ave, his name on the wall, the old factory's twin smokestacks behind */
  function wzdcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#wzd5)"/>' +
      /* factory with twin stacks (no lettering) */
      bricks(150, 90, 200, 60, "#8a5038", "#5e3222") +
      '<rect x="210" y="22" width="16" height="70" fill="#8a5038"/><rect x="250" y="22" width="16" height="70" fill="#8a5038"/><rect x="208" y="20" width="20" height="5" fill="#5e3222"/><rect x="248" y="20" width="20" height="5" fill="#5e3222"/>' +
      '<g class="wzd-sm"><circle cx="218" cy="16" r="7" fill="#eee" opacity=".55"/></g><g class="wzd-sm wzd-sm2"><circle cx="258" cy="16" r="7" fill="#eee" opacity=".55"/></g>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (160 + i * 32) + '" y="104" width="18" height="26" fill="#2a3a4a" class="wzd-glow ' + (i % 2 ? "wzd-g2" : "") + '"/>').join("") +
      lamp(130, 118) + lamp(372, 118, "wzd-g2") +
      /* wall with the tags */
      bricks(0, 150, 400, 70, "#6b3f24", "#4a2a16") +
      tag("WARREN ZEIDERS", 60, 206, 22, BONE, -4) + tag("717", 260, 176, 20, GOLD, -8) + tag("WILD SIDE", 300, 212, 13, COPPER, -3) +
      '<path d="M330 168l-6 12h5l-5 10l12 -14h-5l5 -8z" fill="' + GOLD + '"/>' +
      '<g class="wzd-sp"><circle cx="296" cy="200" r="2" fill="' + GOLD + '"/><circle cx="302" cy="194" r="1.5" fill="' + GOLD + '"/></g><g class="wzd-sp wzd-sp2"><circle cx="290" cy="206" r="1.5" fill="' + BONE + '"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#8a8478"/><path d="M0 222h400" stroke="#b8b0a2" stroke-width="2"/>' +
      '<rect x="44" y="70" width="5" height="152" fill="#6a6e72"/>' + sign(0, 70, 120, "CHOCOLATE AVE") + sign(12, 96, 96, "COCOA AVE"),
      sky("wzd5", "#1c2240", "#e8944a"));
  }

  window.SCENES = { wzdbus: wzdbus, wzdpark: wzdpark, wzdfield: wzdfield, wzdarena: wzdarena, wzdcorner: wzdcorner };
})();
