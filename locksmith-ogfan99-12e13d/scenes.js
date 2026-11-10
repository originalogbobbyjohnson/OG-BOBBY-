/* locksmith scenes (Regions tab: The Bay Area; Crescent Park, South Richmond). CSS classes prefixed lk- (the page's own anim-train is kept).
   Davood Asgari was born in Richmond and grew up in Crescent Park (Wikipedia; Richmond Confidential 2009: "South Richmond", De Anza High);
   The Frontline with his childhood friend Left; mixtapes The Green Box and The Lock Sessions.
   0 El Cerrito del Norte BART (Red + Orange lines), the closest BART stop to Crescent Park: elevated platform, a BART car sliding in.
   1 The Craneway at Ford Point: the old Ford Assembly Building's sawtooth roof and tall factory windows on the Richmond waterfront, sailboats drifting.
   2 The Lock Sessions booth: foam, a mic, a ring of keys, a green box, level meters.
   3 Point Isabel shoreline: the bay, Brooks Island, the San Francisco skyline far across, gulls.
   4 Hartnett Ave and Carlson Blvd in Crescent Park: green signs, LOCKSMITH tagged on a wall, I-580 traffic and the East Bay hills behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lkboat{0%,100%{transform:translateX(0)}50%{transform:translateX(26px)}}.lk-boat{animation:lkboat 7s ease-in-out infinite}.lk-b2{animation-delay:-3.5s}' +
    '@keyframes lkwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.lk-wave{animation:lkwave 3s ease-in-out infinite}.lk-w2{animation-delay:-1.5s}' +
    '@keyframes lkswing{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(10deg)}}.lk-swing{transform-box:fill-box;transform-origin:50% 0%;animation:lkswing 2.2s ease-in-out infinite}' +
    '@keyframes lkbar{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}.lk-bar{transform-box:fill-box;transform-origin:50% 100%;animation:lkbar .6s ease-in-out infinite}.lk-r2{animation-delay:-.15s}.lk-r3{animation-delay:-.3s}.lk-r4{animation-delay:-.45s}' +
    '@keyframes lkgull{0%{transform:translate(0,0)}50%{transform:translate(70px,-10px)}100%{transform:translate(0,0)}}.lk-gull{animation:lkgull 10s ease-in-out infinite}' +
    '@keyframes lkcar{0%{transform:translateX(-60px)}100%{transform:translateX(420px)}}.lk-car{animation:lkcar 6s linear infinite}.lk-c2{animation-delay:-3s}' +
    '@keyframes lkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lk-sp{animation:lkspray 1.4s ease-out infinite}.lk-sp2{animation-delay:.45s}' +
    '@keyframes lkglow{0%,100%{opacity:.5}50%{opacity:1}}.lk-glow{animation:lkglow 2.6s ease-in-out infinite}' +
    '@keyframes lkblink{0%,55%{opacity:1}56%,100%{opacity:.15}}.lk-blink{animation:lkblink 1.2s steps(1) infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const GREEN = "#2fb46e", GOLD = "#f2c14e", BRED = "#ed1c24", BORANGE = "#faa61a";
  const key = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="' + c + '"><circle cx="0" cy="0" r="7"/><circle cx="0" cy="0" r="3" fill="#1b1b1b"/><rect x="-2" y="6" width="4" height="22"/><rect x="2" y="18" width="5" height="3"/><rect x="2" y="24" width="7" height="3"/></g>';
  const gull = '<g class="lk-gull"><path d="M60 52q6 -6 12 0q6 -6 12 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>';

  /* 0. El Cerrito del Norte BART */
  function lkstation() {
    const train = '<g class="anim-train"><path d="M24 118h250l26 18v38h-276z" fill="#d8dde2" stroke="#7a828c" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (40 + i * 44) + '" y="128" width="34" height="20" rx="3" fill="#24303d"/>').join("") +
      '<path d="M24 158h276" stroke="#2a6db0" stroke-width="5"/><path d="M276 128l16 10v10h-16z" fill="#24303d"/><circle cx="294" cy="164" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lk0)"/>' +
      '<circle class="lk-glow" cx="70" cy="50" r="18" fill="#fff1c9" opacity=".8"/>' +
      /* East Bay hills */
      '<path d="M0 104l60 -26l50 10l60 -30l70 22l60 -16l100 24v40h-400z" fill="#6f8a5a" opacity=".8"/>' +
      /* elevated guideway + platform canopy */
      '<rect x="0" y="174" width="400" height="10" fill="#a9a59c"/>' +
      [40, 150, 260, 370].map(x => '<rect x="' + (x - 7) + '" y="184" width="14" height="76" fill="#9b968c"/>').join("") +
      '<path d="M0 96h400v8h-400z" fill="#7d8790"/>' + [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="104" width="5" height="70" fill="#6a737c"/>').join("") +
      train +
      '<rect x="0" y="176" width="400" height="4" fill="#e8d84a"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#4d4a44"/>' +
      /* black sign */
      '<rect x="224" y="30" width="168" height="44" rx="3" fill="#111"/>' +
      '<text x="234" y="48" ' + font + ' font-size="10" fill="#fff">El Cerrito del Norte</text>' +
      '<rect x="234" y="54" width="34" height="13" rx="6.5" fill="' + BRED + '"/><text x="251" y="64" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">RED</text>' +
      '<rect x="272" y="54" width="52" height="13" rx="6.5" fill="' + BORANGE + '"/><text x="298" y="64" text-anchor="middle" ' + font + ' font-size="8.5" fill="#111">ORANGE</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f3efe6">BART · RICHMOND / EL CERRITO LINE</text>',
      sky("lk0", "#4c78b0", "#f3c48e"));
  }

  /* 1. The Craneway (old Ford Assembly Building) at Ford Point */
  function lkcraneway() {
    const wins = Array.from({ length: 9 }, (_, i) => '<rect x="' + (52 + i * 32) + '" y="122" width="26" height="46" fill="#9fc3d8" stroke="#3d4b55" stroke-width="2"/><path d="M' + (65 + i * 32) + ' 122v46M' + (52 + i * 32) + ' 145h26" stroke="#3d4b55" stroke-width="1.5"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lk1)"/>' + gull +
      /* sawtooth roof + long concrete hall */
      '<rect x="40" y="110" width="320" height="70" fill="#d9cdb6"/>' +
      '<path d="M40 110' + Array.from({ length: 10 }, () => 'l16 -14v14l16 0').join("") + '" fill="#bfb29a" stroke="#8c8270" stroke-width="2"/>' +
      wins +
      '<rect x="40" y="168" width="320" height="12" fill="#b9ad96"/>' +
      '<rect x="170" y="88" width="60" height="16" fill="#3d4b55"/><text x="200" y="100" text-anchor="middle" ' + font + ' font-size="9" fill="#f3efe6">CRANEWAY</text>' +
      /* the bay in front */
      '<rect x="0" y="180" width="400" height="80" fill="#3d7fa8"/>' +
      '<g class="lk-wave"><path d="M0 200q20 -5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#a9dcef" stroke-width="2" fill="none"/></g>' +
      '<g class="lk-boat"><path d="M60 222h40l-6 8h-28z" fill="#f3efe6"/><path d="M80 222v-30l16 28z" fill="#fff"/></g>' +
      '<g class="lk-boat lk-b2"><path d="M290 214h30l-5 6h-20z" fill="#f3efe6"/><path d="M305 214v-22l12 20z" fill="#fff"/></g>' +
      '<rect x="0" y="176" width="400" height="6" fill="#8a8378"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f3efe6">FORD POINT · RICHMOND WATERFRONT</text>',
      sky("lk1", "#6fa9d8", "#f6d9a8"));
  }

  /* 2. The Lock Sessions booth */
  function lkbooth() {
    const foam = Array.from({ length: 5 }, (_, r) => Array.from({ length: 16 }, (_, c) => '<path d="M' + (8 + c * 24) + ' ' + (14 + r * 24) + 'l10 10l-10 10l-10 -10z" fill="#23302a"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="#1a221e"/>' + foam +
      /* window to the control room */
      '<rect x="230" y="40" width="150" height="80" rx="4" fill="#0f1714" stroke="#3c4a43" stroke-width="4"/>' +
      '<g fill="' + GREEN + '"><rect class="lk-bar" x="250" y="70" width="8" height="40"/><rect class="lk-bar lk-r2" x="264" y="70" width="8" height="40"/><rect class="lk-bar lk-r3" x="278" y="70" width="8" height="40"/><rect class="lk-bar lk-r4" x="292" y="70" width="8" height="40"/><rect class="lk-bar lk-r2" x="306" y="70" width="8" height="40"/></g>' +
      '<text x="350" y="62" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">LOCK</text><text x="350" y="74" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">SESSIONS</text>' +
      '<circle class="lk-blink" cx="350" cy="96" r="4" fill="#e23b3b"/><text x="350" y="112" text-anchor="middle" ' + font + ' font-size="7" fill="#e23b3b">REC</text>' +
      /* mic */
      '<rect x="118" y="120" width="4" height="100" fill="#777"/><path d="M96 220h48" stroke="#777" stroke-width="5"/>' +
      '<rect x="110" y="88" width="20" height="36" rx="10" fill="#b5bbc2" stroke="#555" stroke-width="2"/><path d="M114 98h12M114 104h12M114 110h12" stroke="#777"/>' +
      '<circle cx="150" cy="104" r="15" fill="#111" opacity=".55" stroke="#777" stroke-width="2.5"/>' +
      /* headphones */
      '<path d="M40 150q0 -22 22 -22q22 0 22 22" stroke="#333" stroke-width="5" fill="none"/><rect x="34" y="148" width="12" height="18" rx="4" fill="#2a2a2a"/><rect x="78" y="148" width="12" height="18" rx="4" fill="#2a2a2a"/>' +
      /* key ring swinging */
      '<path d="M200 130v10" stroke="#888" stroke-width="2"/><g class="lk-swing"><circle cx="200" cy="148" r="9" fill="none" stroke="' + GOLD + '" stroke-width="3"/>' + key(192, 166, .9, GOLD) + key(208, 166, .9, "#c0c6cc") + '</g>' +
      /* green box */
      '<rect x="250" y="176" width="70" height="46" fill="' + GREEN + '" stroke="#1d6b43" stroke-width="3"/><path d="M250 190h70" stroke="#1d6b43" stroke-width="2"/>' +
      '<rect x="279" y="196" width="12" height="14" rx="2" fill="#1d6b43"/>' +
      '<rect x="0" y="222" width="400" height="38" fill="#2c2420"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">THE LOCK SESSIONS</text>',
      "");
  }

  /* 3. Point Isabel shoreline */
  function lkisabel() {
    return svg(
      '<rect width="400" height="260" fill="url(#lk3)"/>' +
      '<circle class="lk-glow" cx="330" cy="54" r="22" fill="#ffd27a" opacity=".85"/>' + gull +
      /* far: Brooks Island + SF skyline */
      '<path d="M0 132l40 -20l40 8l30 -10l30 22z" fill="#6e7f74" opacity=".8"/>' +
      '<path d="M120 134q30 -16 70 -2z" fill="#5f7a5a"/>' +
      '<g fill="#7d87a0"><rect x="200" y="110" width="8" height="24"/><rect x="210" y="98" width="10" height="36"/><path d="M226 134v-44l6 -12l6 12v44z"/><rect x="242" y="104" width="10" height="30"/><rect x="254" y="112" width="8" height="22"/><rect x="264" y="100" width="10" height="34"/></g>' +
      '<rect x="0" y="132" width="400" height="80" fill="#3a7aa3"/>' +
      '<g class="lk-wave"><path d="M0 160q20 -5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#a9dcef" stroke-width="2" fill="none"/></g>' +
      '<g class="lk-wave lk-w2"><path d="M0 184q20 -5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#a9dcef" stroke-width="2" fill="none" opacity=".7"/></g>' +
      /* rocky shoreline + grass + bench */
      '<path d="M0 206q60 -14 120 -6q80 10 160 -4q60 -8 120 4v64h-400z" fill="#8b9b6a"/>' +
      '<g fill="#7a756c"><ellipse cx="40" cy="206" rx="18" ry="8"/><ellipse cx="200" cy="204" rx="22" ry="8"/><ellipse cx="350" cy="206" rx="16" ry="7"/></g>' +
      '<rect x="140" y="222" width="50" height="5" fill="#6b4a2a"/><rect x="144" y="227" width="4" height="10" fill="#6b4a2a"/><rect x="182" y="227" width="4" height="10" fill="#6b4a2a"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#1f3a1a">POINT ISABEL · SF ACROSS THE BAY</text>',
      sky("lk3", "#4f86c0", "#f2c79a"));
  }

  /* 4. Hartnett Ave and Carlson Blvd */
  function lkcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#lk4)"/>' +
      /* the East Bay hills behind */
      '<path d="M0 132l50 -40l40 14l60 -46l50 26l40 -18l60 30l50 -14l50 24v24h-400z" fill="#5d6e4a"/>' +
      '<path d="M0 132l60 -24l60 10l70 -20l80 18l70 -10l60 14v12h-400z" fill="#4c5b3c"/>' +
      '<g class="lk-car"><rect x="0" y="122" width="10" height="5" rx="1" fill="#e8ecf2"/></g><g class="lk-car lk-c2"><rect x="0" y="122" width="10" height="5" rx="1" fill="#e23b3b"/></g>' +
      '<path d="M0 128h400" stroke="#6d757c" stroke-width="3"/>' +
      /* wall */
      '<rect x="0" y="130" width="400" height="96" fill="#b9a68c"/><rect x="0" y="130" width="400" height="6" fill="#9c8a70"/>' +
      tag("LOCKSMITH", 18, 196, 44, GREEN, -6) + tag("FRONTLINE", 30, 220, 17, GOLD, -3) + tag("LOCK LYFT", 168, 220, 17, "#e8eef6", -4) +
      '<rect x="0" y="226" width="400" height="34" fill="#5d5a55"/><rect x="0" y="224" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="322" y="86" width="6" height="140" fill="#2f2f2f"/>' + sign(262, 88, 126, "Hartnett Ave") + sign(266, 114, 118, "Carlson Blvd") +
      '<g class="lk-sp"><circle cx="232" cy="168" r="3" fill="' + GREEN + '" opacity=".7"/></g><g class="lk-sp lk-sp2"><circle cx="238" cy="162" r="2" fill="' + GREEN + '" opacity=".6"/></g>',
      sky("lk4", "#2c3f66", "#f0a070"));
  }

  window.SCENES = { lkstation: lkstation, lkcraneway: lkcraneway, lkbooth: lkbooth, lkisabel: lkisabel, lkcorner: lkcorner };
})();
