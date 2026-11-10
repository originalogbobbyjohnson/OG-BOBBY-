/* jakeworthington scenes (Regions: HOUSTON + TEXAS; Genres: country; born and raised in La Porte, Harris County, on Galveston Bay - La Porte High 2014,
   La Porte FFA chapter secretary, playing VFW halls in southeast Texas by 12 and central Texas honky-tonks by 14; The Voice season 6 runner-up (2014);
   Big Loud 2021, Big Loud Texas 2024). CSS classes prefixed jwl- (the page's own anim-train is kept).
   Places: TX 225 (La Porte Fwy) meets TX 146 in La Porte; Sylvan Beach Park and its fishing pier on Galveston Bay; downtown La Porte at W Main St and S Broadway;
   the Fred Hartman Bridge (twin diamond towers, cable-stayed, La Porte to Baytown). No logos (no FFA emblem), no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const BLUE = "#2a5aa8", GOLD = "#f2c14e", CREAM = "#f4ecdc", RUST = "#b5532a";
  const css = '<style>' +
    '@keyframes jwlglow{0%,100%{opacity:.45}50%{opacity:1}}.jwl-glow{animation:jwlglow 2.2s ease-in-out infinite}.jwl-g2{animation-delay:-1.1s}' +
    '@keyframes jwlcloud{0%{transform:translateX(0)}100%{transform:translateX(40px)}}.jwl-cl{animation:jwlcloud 14s ease-in-out infinite alternate}' +
    '@keyframes jwlcar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.jwl-car{animation:jwlcar 6s linear infinite}' +
    '@keyframes jwlflare{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.3)}}.jwl-flare{transform-box:fill-box;transform-origin:50% 100%;animation:jwlflare .8s ease-in-out infinite}' +
    '@keyframes jwlnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(14px,-50px);opacity:0}}.jwl-note{animation:jwlnote 2.4s ease-out infinite}.jwl-n2{animation-delay:-.8s}.jwl-n3{animation-delay:-1.6s}' +
    '@keyframes jwlboat{0%{transform:translateX(0)}100%{transform:translateX(-180px)}}.jwl-boat{animation:jwlboat 14s ease-in-out infinite alternate}' +
    '@keyframes jwlwave{0%{transform:translateX(0)}100%{transform:translateX(-34px)}}.jwl-wave{animation:jwlwave 3s linear infinite}' +
    '@keyframes jwlgull{0%,100%{transform:translate(0,0)}50%{transform:translate(40px,-8px)}}.jwl-gull{animation:jwlgull 5s ease-in-out infinite}' +
    '@keyframes jwltail{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(14deg)}}.jwl-tail{transform-box:fill-box;transform-origin:0 0;animation:jwltail 1.2s ease-in-out infinite}' +
    '@keyframes jwlspin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.jwl-spin{transform-box:fill-box;transform-origin:50% 50%;animation:jwlspin 1s linear infinite}' +
    '@keyframes jwlspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jwl-sp{animation:jwlspray 1.4s ease-out infinite}.jwl-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const cap = (txt, y) => '<text x="200" y="' + (y || 252) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  /* Texas state highway marker: white square, black outline, black number */
  const txShield = (x, y, n) => '<g transform="translate(' + x + ' ' + y + ')"><rect x="-18" y="-16" width="36" height="32" rx="3" fill="#fff" stroke="#111" stroke-width="2"/><text x="0" y="7" text-anchor="middle" ' + font + ' font-size="15" fill="#111">' + n + '</text></g>';
  const pickup = (c) => '<rect x="0" y="6" width="74" height="20" rx="4" fill="' + c + '"/><path d="M42 6v-14h18l12 14z" fill="' + c + '"/><path d="M46 4v-9h12l8 9z" fill="#bfe0ee"/>' +
    '<circle cx="16" cy="28" r="7" fill="#222"/><circle cx="16" cy="28" r="3" fill="#aaa"/><circle cx="58" cy="28" r="7" fill="#222"/><circle cx="58" cy="28" r="3" fill="#aaa"/><rect x="70" y="12" width="5" height="4" fill="#ffe9a0" class="jwl-glow"/>';
  /* Fred Hartman Bridge: two pairs of diamond towers with fanned cables */
  const hartman = (x, y, s, c) => {
    const tower = (tx) => '<path d="M' + (tx - 14) + ' 90L' + tx + ' 0L' + (tx + 14) + ' 90" stroke="' + c + '" stroke-width="4" fill="none"/><path d="M' + (tx - 9) + ' 60h18" stroke="' + c + '" stroke-width="3"/>' +
      [0, 1, 2, 3, 4].map(i => '<path d="M' + tx + ' ' + (6 + i * 6) + 'L' + (tx - 30 - i * 16) + ' 62M' + tx + ' ' + (6 + i * 6) + 'L' + (tx + 30 + i * 16) + ' 62" stroke="' + c + '" stroke-width=".8" opacity=".8"/>').join("");
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' + tower(0) + tower(26) + tower(190) + tower(216) + '<path d="M-110 62h436" stroke="' + c + '" stroke-width="5"/></g>';
  };

  /* ROOM 0: TX 225 east out of Houston, past the refinery flares, the green guide sign for TX 146 and La Porte, a pickup rolling in (no rail out here; this is the drive in) */
  function jwlhwy() {
    const stack = (x, h) => '<rect x="' + x + '" y="' + (150 - h) + '" width="6" height="' + h + '" fill="#6a6e74"/><path d="M' + (x - 1) + ' ' + (150 - h) + 'q4 -14 8 0z" fill="#ff8a2a" class="jwl-flare"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jwl1)"/>' +
      '<g class="jwl-cl"><ellipse cx="70" cy="28" rx="44" ry="9" fill="#fff" opacity=".55"/><ellipse cx="300" cy="36" rx="50" ry="9" fill="#fff" opacity=".45"/></g>' +
      /* refinery skyline */
      '<path d="M0 150h400v30H0z" fill="#5a6a4a"/>' + stack(20, 70) + stack(50, 50) + stack(360, 64) +
      '<rect x="60" y="112" width="40" height="38" fill="#8a8e94"/><rect x="66" y="98" width="10" height="52" fill="#9aa0a6"/><ellipse cx="320" cy="140" rx="22" ry="10" fill="#c9ced4"/><rect x="298" y="140" width="44" height="12" fill="#c9ced4"/>' +
      '<rect x="0" y="178" width="400" height="82" fill="#3a3a40"/><path d="M0 220h400" stroke="#f0d040" stroke-width="3" stroke-dasharray="20 14"/><path d="M0 180h400" stroke="#fff" stroke-width="2"/>' +
      /* gantry and sign */
      '<rect x="110" y="40" width="5" height="140" fill="#8a8e94"/><rect x="316" y="40" width="5" height="140" fill="#8a8e94"/><rect x="110" y="44" width="211" height="5" fill="#8a8e94"/>' +
      '<rect x="232" y="36" width="72" height="16" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><text x="268" y="48" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">EXIT ONLY</text>' +
      '<rect x="124" y="52" width="182" height="86" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' + txShield(158, 84, "146") +
      '<text x="186" y="76" ' + font + ' font-size="11" fill="#fff">SOUTH</text><text x="186" y="104" ' + font + ' font-size="22" fill="#fff">La Porte</text><text x="186" y="124" ' + font + ' font-size="10" fill="#fff">Sylvan Beach</text>' +
      '<g class="anim-train"><g transform="translate(150 192)">' + pickup("#f4ecdc") + '</g></g>' +
      '<g class="jwl-car"><rect x="0" y="230" width="40" height="14" rx="3" fill="#b5532a"/><circle cx="9" cy="244" r="4" fill="#222"/><circle cx="31" cy="244" r="4" fill="#222"/></g>' +
      cap("TX 225 EAST  ·  TX 146 EXIT  ·  LA PORTE, TEXAS", 256),
      sky("jwl1", "#8ab8dc", "#f0e6d0"));
  }

  /* ROOM 1: a southeast Texas VFW hall on a Saturday night: low tin building, flag on the pole, string lights, a little stage with an acoustic guitar where a 12-year-old Jake got his start */
  function jwlvfw() {
    return svg(
      '<rect width="400" height="260" fill="url(#jwl2)"/>' +
      [[40, 20], [120, 36], [210, 16], [350, 26], [300, 50]].map(s => '<circle cx="' + s[0] + '" cy="' + s[1] + '" r="1.3" fill="#fff"/>').join("") +
      /* flagpole */
      '<rect x="40" y="40" width="3" height="150" fill="#c9ced4"/><g class="jwl-tail"><g transform="translate(43 42)"><rect x="0" y="0" width="40" height="24" fill="#c8302a"/>' +
      [1, 3, 5].map(i => '<rect x="0" y="' + (i * 24 / 7) + '" width="40" height="' + (24 / 7) + '" fill="#fff"/>').join("") + '<rect x="0" y="0" width="16" height="13" fill="#2a3a7a"/></g></g>' +
      /* the hall */
      '<rect x="90" y="80" width="290" height="110" fill="#b8bcc0"/>' + Array.from({ length: 29 }, (_, i) => '<path d="M' + (92 + i * 10) + ' 80v110" stroke="#9aa0a6" stroke-width="1.5"/>').join("") +
      '<path d="M80 80l155 -30l155 30z" fill="#7a7e84"/>' +
      '<rect x="160" y="58" width="150" height="20" fill="#f4ecdc"/><text x="235" y="73" text-anchor="middle" ' + font + ' font-size="12" fill="#2a3a7a">POST HALL · DANCE SAT</text>' +
      /* open double door showing the little stage */
      '<rect x="190" y="110" width="90" height="80" fill="#2a1a10"/><ellipse cx="235" cy="150" rx="34" ry="24" fill="#fff6c8" opacity=".08" class="jwl-glow"/><rect x="200" y="160" width="70" height="10" fill="#6a4a2a"/><rect x="232" y="128" width="2" height="32" fill="#c9ced4"/><circle cx="233" cy="126" r="3" fill="#333"/>' +
      '<g transform="translate(244 136) rotate(-15)"><ellipse cx="0" cy="14" rx="9" ry="11" fill="#c08a4a"/><circle cx="0" cy="14" r="3" fill="#2a1a10"/><rect x="-1.5" y="-14" width="3" height="20" fill="#5a3a20"/></g>' +
      
      '<text x="210" y="124" font-size="12" fill="' + GOLD + '" class="jwl-note">&#9835;</text><text x="250" y="120" font-size="11" fill="' + GOLD + '" class="jwl-note jwl-n2">&#9834;</text><text x="226" y="118" font-size="10" fill="' + GOLD + '" class="jwl-note jwl-n3">&#9835;</text>' +
      [110, 140, 310, 340].map(x => '<rect x="' + x + '" y="120" width="18" height="16" fill="#ffd98a" class="jwl-glow jwl-g2"/>').join("") +
      /* string lights */
      '<path d="M90 92q72 18 145 0t145 0" stroke="#333" stroke-width="1" fill="none"/>' + Array.from({ length: 12 }, (_, i) => '<circle cx="' + (100 + i * 24) + '" cy="' + (97 + (i % 2) * 3) + '" r="2.4" fill="#ffe08a" class="jwl-glow' + (i % 2 ? " jwl-g2" : "") + '"/>').join("") +
      '<rect x="0" y="190" width="400" height="70" fill="#5a5048"/><g transform="translate(40 206)">' + pickup("#2a5aa8") + '</g><g transform="translate(300 210)">' + pickup("#7a1f1f") + '</g>' +
      cap("SOUTHEAST TEXAS VFW HALLS  ·  PLAYING THEM AT 12"),
      sky("jwl2", "#0c1430", "#3a3058"));
  }

  /* ROOM 2: the show barn: La Porte FFA (he was chapter secretary), blue-and-gold ribbons, a steer in the pen, hay bales, the fans turning */
  function jwlffa() {
    return svg(
      '<rect width="400" height="260" fill="#6a3a24"/>' +
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="0" width="10" height="180" fill="#7a4428"/>').join("") +
      /* rafters */
      '<path d="M0 30L200 0L400 30" stroke="#4a2a18" stroke-width="8" fill="none"/>' +
      /* banner */
      '<rect x="100" y="40" width="200" height="34" fill="' + BLUE + '" stroke="' + GOLD + '" stroke-width="3"/><text x="200" y="63" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '">LA PORTE FFA</text>' +
      /* ribbons */
      [[40, 50, BLUE], [70, 56, "#c8302a"], [330, 50, BLUE], [360, 56, GOLD]].map(r => '<g transform="translate(' + r[0] + ' ' + r[1] + ')"><circle cx="0" cy="0" r="10" fill="' + r[2] + '"/><circle cx="0" cy="0" r="5" fill="#fff" opacity=".6"/><path d="M-6 8l-4 20l6 -5l4 6l2 -21M6 8l4 20l-6 -5" fill="' + r[2] + '"/></g>').join("") +
      /* fans */
      [150, 250].map(x => '<g transform="translate(' + x + ' 104)"><circle cx="0" cy="0" r="17" fill="#2a2a2a" stroke="#888" stroke-width="2"/><g class="jwl-spin"><path d="M-3 -14h6l-3 14zM-3 14h6l-3 -14zM-14 -3v6l14 -3zM14 -3v6l-14 -3z" fill="#c9ced4"/></g><circle cx="0" cy="0" r="3" fill="#555"/></g>').join("") +
      /* pen */
      '<rect x="0" y="180" width="400" height="80" fill="#c8a868"/>' +
      '<g transform="translate(150 140)"><ellipse cx="50" cy="40" rx="48" ry="22" fill="#1a1a1a"/><rect x="14" y="50" width="8" height="30" fill="#1a1a1a"/><rect x="30" y="52" width="8" height="28" fill="#1a1a1a"/><rect x="62" y="52" width="8" height="28" fill="#1a1a1a"/><rect x="80" y="50" width="8" height="30" fill="#1a1a1a"/>' +
      '<path d="M92 28q22 -6 26 10q2 12 -10 14q-8 0 -14 -6z" fill="#1a1a1a"/><path d="M110 22l8 -6M104 22l-2 -8" stroke="#e8e0cc" stroke-width="3"/><circle cx="112" cy="34" r="1.6" fill="#fff"/>' +
      '<g class="jwl-tail"><path d="M2 32q-14 8 -10 28" stroke="#1a1a1a" stroke-width="4" fill="none"/></g></g>' +
      /* fence rails */
      '<path d="M0 170h400M0 196h400" stroke="#d8d0c0" stroke-width="5"/>' + [10, 90, 300, 390].map(x => '<rect x="' + x + '" y="164" width="6" height="56" fill="#d8d0c0"/>').join("") +
      /* hay bales */
      '<g transform="translate(20 212)"><rect width="60" height="30" fill="#e0c060"/><path d="M0 10h60M0 20h60" stroke="#c8a040" stroke-width="2"/></g><g transform="translate(320 212)"><rect width="60" height="30" fill="#e0c060"/><path d="M0 10h60M0 20h60" stroke="#c8a040" stroke-width="2"/></g>' +
      cap("THE SHOW BARN  ·  LA PORTE FFA CHAPTER SECRETARY"),
      "");
  }

  /* ROOM 3: Sylvan Beach Park on Galveston Bay: the long wooden fishing pier, gulls, a shrimp boat working the bay, a tanker headed up the Ship Channel */
  function jwlbay() {
    return svg(
      '<rect width="400" height="260" fill="url(#jwl4)"/>' +
      '<circle cx="80" cy="70" r="24" fill="#ffd98a" class="jwl-glow"/>' +
      /* far shore and tanker */
      '<path d="M0 122h400v8H0z" fill="#6a7a6a"/><g transform="translate(250 104)"><path d="M0 18h130l-8 10h-118z" fill="#7a2a24"/><rect x="100" y="4" width="22" height="14" fill="#f4ecdc"/><rect x="10" y="12" width="86" height="6" fill="#4a4a4a"/></g>' +
      /* the bay */
      '<rect x="0" y="128" width="400" height="132" fill="#4a7a8a"/><g class="jwl-wave">' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 34) + ' ' + (146 + (i % 4) * 24) + 'q10 -4 20 0" stroke="#bfe0e8" stroke-width="2" fill="none"/>').join("") + '</g>' +
      /* shrimp boat */
      '<g class="jwl-boat"><g transform="translate(250 150)"><path d="M0 0h70l-8 14h-56z" fill="#f4ecdc"/><rect x="40" y="-14" width="18" height="14" fill="#f4ecdc"/><rect x="44" y="-10" width="10" height="5" fill="#2a5aa8"/>' +
      '<path d="M20 0v-36M20 -36l-34 30M20 -36l34 30" stroke="#5a3a20" stroke-width="2" fill="none"/><path d="M-14 -6l-6 10M54 -6l6 10" stroke="#aaa" stroke-width="1"/></g></g>' +
      /* the pier */
      '<path d="M0 182L230 150h8L20 196z" fill="#a8865a"/><path d="M0 182L230 150" stroke="#7a5a3a" stroke-width="2"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (14 + i * 26) + '" y="' + (182 - i * 3.6) + '" width="3" height="' + (22 - i * 1.2) + '" fill="#6a4a2a"/>').join("") +
      '<path d="M0 174L230 144" stroke="#c9a874" stroke-width="2"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (10 + i * 24) + '" y="' + (174 - i * 3.3 - 8) + '" width="2" height="9" fill="#c9a874"/>').join("") +
      /* gulls */
      '<g class="jwl-gull"><path d="M150 60q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/><path d="M200 44q5 -5 10 0q5 -5 10 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      /* sand and grass */
      '<path d="M0 230q100 -14 200 -4t200 -4V260H0z" fill="#e0cc98"/>' + [30, 60, 330, 370].map(x => '<path d="M' + x + ' 232l-4 -14M' + (x + 4) + ' 232l2 -16M' + (x + 8) + ' 232l6 -12" stroke="#7a8a3a" stroke-width="2"/>').join("") +
      cap("SYLVAN BEACH  ·  GALVESTON BAY  ·  LA PORTE"),
      sky("jwl4", "#f2a86a", "#f8e0b0"));
  }

  /* ROOM 4: his corner: W Main St and S Broadway in downtown La Porte, brick wall with his name, the Fred Hartman Bridge's twin diamond towers behind */
  function jwlcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#jwl5)"/>' +
      hartman(150, 34, 1, "#d8dce0") +
      '<rect x="0" y="96" width="400" height="8" fill="#4a6a7a" opacity=".6"/>' +
      '<path d="M0 164h400v96H0z" fill="#3a3a40"/><path d="M0 200h400" stroke="#f0d040" stroke-width="2" stroke-dasharray="16 12"/>' +
      /* brick wall */
      '<rect x="0" y="96" width="180" height="104" fill="' + RUST + '"/>' + Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (104 + r * 12) + 'h180" stroke="#8a3a1a" stroke-width="1.5"/>').join("") +
      tag("JAKE", 18, 140, 32, GOLD, -6) + tag("WORTHINGTON", 10, 178, 22, CREAM, -6) +
      '<circle cx="164" cy="150" r="3" fill="' + GOLD + '" class="jwl-sp"/><circle cx="170" cy="146" r="2" fill="' + GOLD + '" class="jwl-sp jwl-sp2"/>' +
      /* sign post */
      '<rect x="226" y="62" width="5" height="142" fill="#8a8e94"/>' + sign(178, 70, 100, "W MAIN ST") + sign(176, 94, 106, "S BROADWAY") +
      '<g transform="translate(280 196)">' + pickup("#2a5aa8") + '</g>' +
      cap("W MAIN ST & S BROADWAY  ·  LA PORTE, TEXAS"),
      sky("jwl5", "#1a2a4a", "#e08a5a"));
  }

  window.SCENES = { jwlhwy, jwlvfw, jwlffa, jwlbay, jwlcorner };
})();
