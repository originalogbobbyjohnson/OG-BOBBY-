/* rileygreen scenes (Regions: More of the South / Genres: country; Jacksonville, Calhoun County, Alabama). CSS classes prefixed rlgn- (the page's own anim-train is kept).
   Sources: Wikipedia "Riley Green" (born 1988 in Jacksonville AL, still lives there; learned music from grandfather Buford Green, who ran The Golden Saw, a music hall in a
   converted sawmill, where Riley played weekly; quarterback for the Jacksonville State Gamecocks; nickname "Riley Duckman" for his duck hunting); Songfacts "Riley Green";
   Southern Outings "Jacksonville historic places" (Public Square roundabout on Pelham Rd / AL-21, old storefronts around it; Bibb Graves Hall c.1930 at JSU;
   1860 train depot = Chief Ladiga Trail trailhead). Amtrak's Crescent stops at Anniston, 12 miles south. JSU colors red and white.
   No logos, no faces. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const RED = "#c8102e", CREAM = "#f3ead8", GOLD = "#e0b24a", BRICK = "#9a4630", GREENHEAD = "#1f7a4a";
  const css = '<style>' +
    '@keyframes rlgnglow{0%,100%{opacity:.45}50%{opacity:1}}.rlgn-glow{animation:rlgnglow 2.4s ease-in-out infinite}.rlgn-g2{animation-delay:-1.2s}' +
    '@keyframes rlgnnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-58px);opacity:0}}.rlgn-nt{animation:rlgnnote 3.2s ease-out infinite}.rlgn-nt2{animation-delay:-1.1s}.rlgn-nt3{animation-delay:-2.2s}' +
    '@keyframes rlgncloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.rlgn-cl{animation:rlgncloud 14s ease-in-out infinite alternate}' +
    '@keyframes rlgnflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.rlgn-flag{transform-box:fill-box;transform-origin:0 50%;animation:rlgnflag 1.6s ease-in-out infinite}' +
    '@keyframes rlgnspin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.rlgn-spin{transform-box:fill-box;transform-origin:50% 50%;animation:rlgnspin 9s linear infinite}' +
    '@keyframes rlgnrip{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.rlgn-rip{transform-box:fill-box;transform-origin:50% 50%;animation:rlgnrip 2.4s ease-out infinite}.rlgn-r2{animation-delay:-1.2s}' +
    '@keyframes rlgnfly{0%{transform:translate(0,0)}100%{transform:translate(170px,-34px)}}.rlgn-fly{animation:rlgnfly 8s linear infinite}.rlgn-f2{animation-delay:-2.6s}.rlgn-f3{animation-delay:-5.2s}' +
    '@keyframes rlgnspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rlgn-sp{animation:rlgnspray 1.4s ease-out infinite}.rlgn-sp2{animation-delay:.45s}' +
    '@keyframes rlgnsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.rlgn-sway{transform-box:fill-box;transform-origin:50% 0;animation:rlgnsway 2.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="rlgn-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const bricks = (x, y, w, h, c) => { let s = ''; for (let j = 0; j * 7 < h; j++) s += '<path d="M' + x + ' ' + (y + j * 7) + 'h' + w + '" stroke="' + c + '" stroke-width=".7"/>'; return s; };
  const win = (x, y, w, h) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#2c3e50" stroke="#f4f1ea" stroke-width="2"/><path d="M' + (x + w / 2) + ' ' + y + 'v' + h + 'M' + x + ' ' + (y + h / 2) + 'h' + w + '" stroke="#f4f1ea" stroke-width="1.2"/>';
  const hills = (y, c1, c2) => '<path d="M0 ' + y + 'q50 -40 110 -14q50 -34 120 -6q60 -38 170 -2V' + (y + 40) + 'H0z" fill="' + c1 + '"/><path d="M0 ' + (y + 14) + 'q70 -24 150 -4q80 -26 160 -2q50 -10 90 0V' + (y + 40) + 'H0z" fill="' + c2 + '"/>';
  /* a flying mallard drake: green head, white ring, brown chest, grey body */
  const duck = (x, y, s, cls) => '<g class="rlgn-fly ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
    '<path d="M-14 0q-2 -16 10 -12l6 6z" fill="#8a8e94"/><path d="M14 0q2 -16 -10 -12l-6 6z" fill="#6a6e74"/>' +
    '<ellipse cx="0" cy="2" rx="14" ry="5" fill="#9aa0a6"/><ellipse cx="8" cy="2" rx="5" ry="4" fill="#6a3a22"/><circle cx="15" cy="-1" r="4" fill="' + GREENHEAD + '"/>' +
    '<path d="M11 1.5h3" stroke="#fff" stroke-width="1.2"/><path d="M18 -1l5 1 -5 1z" fill="#e8c23a"/></g></g>';

  /* ROOM 0: the Anniston stop on Amtrak's Crescent, a brick depot on West 4th St, 12 miles south of Jacksonville; the train pulling in */
  function rlgntrain() {
    return svg(
      '<rect width="400" height="260" fill="url(#rlgn1)"/>' +
      '<g class="rlgn-cl"><ellipse cx="70" cy="30" rx="40" ry="8" fill="#fff" opacity=".6"/><ellipse cx="300" cy="22" rx="46" ry="8" fill="#fff" opacity=".5"/></g>' +
      hills(70, "#6f8f6a", "#58784f") +
      /* depot: red brick, deep eaves on brackets, tile roof */
      '<g transform="translate(56 0)">' +      '<rect x="110" y="78" width="190" height="68" fill="' + BRICK + '"/>' + bricks(110, 78, 190, 68, "#77341f") +
      '<path d="M96 80l18 -22h182l18 22z" fill="#5a4038"/><rect x="96" y="78" width="218" height="5" fill="#3a2a24"/>' +
      [104, 140, 270, 306].map(x => '<path d="M' + x + ' 83l6 10" stroke="#3a2a24" stroke-width="3"/>').join("") +
      win(126, 96, 22, 30) + win(162, 96, 22, 30) + win(226, 96, 22, 30) + win(262, 96, 22, 30) +
      '<rect x="193" y="100" width="24" height="46" fill="#3a2a20" stroke="#f4f1ea" stroke-width="2"/>' +
      '</g>' +
      /* black station sign */
      '<rect x="30" y="120" width="4" height="40" fill="#555"/><rect x="134" y="120" width="4" height="40" fill="#555"/><rect x="18" y="98" width="132" height="28" rx="3" fill="#111"/>' +
      '<text x="84" y="117" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">ANNISTON</text>' +
      '<rect x="40" y="130" width="88" height="14" rx="7" fill="#1f4f8f"/><text x="84" y="140.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">CRESCENT</text>' +
      /* platform + track */
      '<rect x="0" y="146" width="400" height="14" fill="#b8b2a6"/><rect x="0" y="158" width="400" height="4" fill="#e8d24a"/>' +
      '<rect x="0" y="162" width="400" height="98" fill="#5a5048"/>' +
      '<path d="M0 214h400M0 232h400" stroke="#8a8e94" stroke-width="3"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="210" width="8" height="26" fill="#3a2e26"/>').join("") +
      /* the train sliding in: silver with a red and blue stripe */
      '<g class="anim-train"><path d="M20 168h250q34 0 40 22v18h-290z" fill="#c9ccd0"/><rect x="20" y="190" width="290" height="5" fill="#1f4f8f"/><rect x="20" y="195" width="290" height="4" fill="' + RED + '"/>' +
      '<path d="M278 172h18q10 2 12 14h-30z" fill="#a8cde0"/>' + [40, 80, 120, 160, 200, 240].map(x => '<rect x="' + x + '" y="174" width="26" height="12" rx="2" fill="#a8cde0"/>').join("") +
      '<circle cx="304" cy="200" r="3" fill="#ffe28a" class="rlgn-glow"/>' + [50, 90, 230, 270].map(x => '<circle cx="' + x + '" cy="210" r="7" fill="#1d1d1d"/>').join("") + '</g>',
      sky("rlgn1", "#5a9ad8", "#f4e2c0"));
  }

  /* ROOM 1: The Golden Saw, grandpa Buford's music hall in an old sawmill; the big saw blade turning over the door, the porch lights on */
  function rlgnsaw() {
    const teeth = Array.from({ length: 24 }, (_, i) => { const a = i * 15 * Math.PI / 180; const x = Math.cos(a) * 36, y = Math.sin(a) * 36, x2 = Math.cos(a + 0.18) * 44, y2 = Math.sin(a + 0.18) * 44, x3 = Math.cos(a + 0.26) * 36, y3 = Math.sin(a + 0.26) * 36;
      return '<path d="M' + x.toFixed(1) + ' ' + y.toFixed(1) + 'L' + x2.toFixed(1) + ' ' + y2.toFixed(1) + 'L' + x3.toFixed(1) + ' ' + y3.toFixed(1) + 'z" fill="' + GOLD + '"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rlgn2)"/>' +
      [[40, 30], [120, 18], [200, 40], [330, 24], [370, 50], [90, 60]].map(([x, y], i) => '<circle cx="' + x + '" cy="' + y + '" r="1.4" fill="#fff" class="rlgn-glow' + (i % 2 ? ' rlgn-g2' : '') + '"/>').join("") +
      '<path d="M0 170q100 -20 200 -6q100 -18 200 0V260H0z" fill="#2c3a24"/>' +
      /* long tin-roofed sawmill building, weathered board siding */
      '<rect x="40" y="96" width="320" height="104" fill="#7a5a3a"/>' + Array.from({ length: 32 }, (_, i) => '<path d="M' + (44 + i * 10) + ' 96v104" stroke="#5a3f28" stroke-width="1.4"/>').join("") +
      '<path d="M28 98l40 -36h264l40 36z" fill="#9aa2a8"/>' + Array.from({ length: 18 }, (_, i) => '<path d="M' + (40 + i * 18) + ' 98l' + (12) + ' -34" stroke="#7a8288" stroke-width="1"/>').join("") +
      /* the saw blade over the door */
      '<g transform="translate(200 72)"><g class="rlgn-spin">' + teeth + '<circle r="37" fill="' + GOLD + '"/><circle r="30" fill="#c8963a"/><circle r="8" fill="#5a3f28"/>' +
      '<path d="M-22 0h44M0 -22v44" stroke="#a8782a" stroke-width="2"/></g></g>' +
      /* sign board (no name, just a saw and MUSIC HALL) */
      '<rect x="138" y="122" width="124" height="22" rx="3" fill="#2a1d14" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="138" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" fill="' + GOLD + '">MUSIC HALL</text>' +
      /* open barn door with warm light + stage */
      '<rect x="170" y="150" width="60" height="50" fill="#ffcf7a"/><rect x="170" y="186" width="60" height="14" fill="#7a4a22"/>' +
      '<rect x="190" y="160" width="4" height="26" fill="#2a1d14"/><rect x="186" y="158" width="12" height="4" fill="#555"/>' +
      win(70, 130, 30, 26) + win(116, 130, 30, 26) + win(254, 130, 30, 26) + win(300, 130, 30, 26) +
      /* porch string lights */
      '<path d="M40 104q80 18 160 0q80 18 160 0" stroke="#3a2a1a" stroke-width="1.2" fill="none"/>' +
      [60, 90, 120, 150, 180, 220, 250, 280, 310, 340].map((x, i) => '<circle cx="' + x + '" cy="' + (104 + 8 * Math.sin((x - 40) / 160 * Math.PI)).toFixed(1) + '" r="3" fill="#ffd27a" class="rlgn-glow' + (i % 2 ? ' rlgn-g2' : '') + '"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#5a4630"/><path d="M0 200h400" stroke="#3a2a1a" stroke-width="2"/>' +
      note(214, 176, "#fff") + note(150, 186, GOLD, "rlgn-nt2") + note(260, 180, CREAM, "rlgn-nt3"),
      sky("rlgn2", "#141a3a", "#7a4a5a"));
  }

  /* ROOM 2: Bibb Graves Hall at Jacksonville State (c.1930), red brick, white columns and the white clock tower; Gamecock red and white */
  function rlgnjsu() {
    return svg(
      '<rect width="400" height="260" fill="url(#rlgn3)"/>' +
      '<g class="rlgn-cl"><ellipse cx="80" cy="34" rx="38" ry="8" fill="#fff" opacity=".6"/><ellipse cx="320" cy="26" rx="42" ry="8" fill="#fff" opacity=".5"/></g>' +
      '<rect x="0" y="172" width="400" height="88" fill="#5f9a46"/>' +
      /* tower */
      '<rect x="178" y="40" width="44" height="50" fill="#f4f1ea"/><path d="M174 40l26 -26 26 26z" fill="#5a6066"/><rect x="198" y="2" width="4" height="14" fill="#5a6066"/>' +
      '<circle cx="200" cy="60" r="12" fill="#fff" stroke="#333" stroke-width="2"/><path d="M200 60v-8M200 60l6 3" stroke="#333" stroke-width="2"/>' +
      [182, 210].map(x => '<rect x="' + x + '" y="76" width="8" height="12" fill="#2c3e50"/>').join("") +
      /* main block */
      '<rect x="40" y="90" width="320" height="84" fill="' + BRICK + '"/>' + bricks(40, 90, 320, 84, "#77341f") +
      '<rect x="34" y="84" width="332" height="8" fill="#f4f1ea"/>' + [56, 92, 128, 248, 284, 320].map(x => win(x, 100, 22, 26) + win(x, 136, 22, 26)).join("") +
      /* white portico */
      '<path d="M152 104h96l-48 -20z" fill="#f4f1ea"/>' + [158, 176, 194, 212, 230].map(x => '<rect x="' + x + '" y="104" width="9" height="70" fill="#f4f1ea"/>').join("") +
      '<rect x="190" y="140" width="20" height="34" fill="#3a2a20"/>' +
      /* walk + red banner */
      '<path d="M178 260l12 -86h20l12 86z" fill="#d8d0c2"/>' +
      '<rect x="20" y="190" width="150" height="38" rx="4" fill="' + RED + '" stroke="#fff" stroke-width="2.5"/><text x="95" y="216" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="#fff">GAMECOCKS</text>' +
      '<rect x="356" y="44" width="3" height="128" fill="#ccc"/><g class="rlgn-flag"><rect x="359" y="46" width="30" height="18" fill="' + RED + '"/><text x="374" y="59" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">JSU</text></g>' +
      /* a football spiraling over the lawn */
      '<g class="rlgn-fly rlgn-f2"><ellipse cx="236" cy="214" rx="10" ry="6" fill="#7a3a1a"/><path d="M230 214h12" stroke="#fff" stroke-width="1.2"/></g>',
      sky("rlgn3", "#4a90dc", "#dbeaf6"));
  }

  /* ROOM 3: "Riley Duckman" in the blind before sunup; greenheads coming in over the slough */
  function rlgnblind() {
    return svg(
      '<rect width="400" height="260" fill="url(#rlgn4)"/>' +
      '<circle cx="300" cy="150" r="30" fill="#ffcf7a" opacity=".8"/>' +
      hills(118, "#4a4a5a", "#3a3a48") +
      '<rect x="0" y="150" width="400" height="110" fill="#5a6a78"/>' +
      '<path d="M220 160h160M240 172h120M250 186h100" stroke="#ffcf7a" stroke-width="2" opacity=".5"/>' +
      /* cypress trees */
      [[30, 60], [80, 74], [356, 66]].map(([x, h]) => '<path d="M' + x + ' 156l-14 ' + (-h + 50) + 'q14 -50 28 0z" fill="#2a3a2a"/><rect x="' + (x - 3) + '" y="140" width="6" height="18" fill="#3a2a1a"/>').join("") +
      /* blind: brushed-up box on stilts */
      '<rect x="120" y="150" width="4" height="40" fill="#3a2a1a"/><rect x="236" y="150" width="4" height="40" fill="#3a2a1a"/>' +
      '<rect x="112" y="110" width="136" height="44" fill="#6a5a3a"/>' + Array.from({ length: 22 }, (_, i) => '<path d="M' + (112 + i * 6.2) + ' 154l' + ((i % 3) - 1) * 4 + ' -54" stroke="#8a7a4a" stroke-width="2.4"/>').join("") +
      '<rect x="112" y="120" width="136" height="10" fill="#2a2418"/>' +
      /* decoys bobbing */
      [[70, 196], [110, 214], [270, 204], [320, 220]].map(([x, y], i) => '<g class="rlgn-sway"><ellipse cx="' + x + '" cy="' + y + '" rx="12" ry="5" fill="#9aa0a6"/><circle cx="' + (x + 9) + '" cy="' + (y - 5) + '" r="4" fill="' + GREENHEAD + '"/><path d="M' + (x + 12) + ' ' + (y - 5) + 'l4 1 -4 1z" fill="#e8c23a"/></g>' +
        '<ellipse cx="' + x + '" cy="' + (y + 4) + '" rx="16" ry="3" fill="none" stroke="#c8d4dc" stroke-width="1" class="rlgn-rip' + (i % 2 ? ' rlgn-r2' : '') + '"/>').join("") +
      duck(20, 70, 1.2) + duck(60, 50, 1, "rlgn-f2") + duck(0, 92, .9, "rlgn-f3"),
      sky("rlgn4", "#2a2a4a", "#e8a07a"));
  }

  /* ROOM 4: the Public Square in Jacksonville, Pelham Rd (AL-21) going around it; old brick storefronts and the foothills behind */
  function rlgncorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#rlgn5)"/>' +
      hills(64, "#6a7a8a", "#5a6a6a") +
      /* storefronts around the square */
      '<rect x="150" y="70" width="70" height="56" fill="' + BRICK + '"/><rect x="220" y="80" width="64" height="46" fill="#b8a07a"/><rect x="284" y="66" width="80" height="60" fill="#8a3a2a"/><rect x="364" y="78" width="36" height="48" fill="#a86a4a"/>' +
      [160, 190, 230, 256, 296, 326].map(x => '<rect x="' + x + '" y="84" width="14" height="18" fill="#2c3e50"/>').join("") +
      '<rect x="146" y="66" width="78" height="5" fill="#f4f1ea"/><rect x="280" y="62" width="88" height="5" fill="#f4f1ea"/>' +
      /* the square's green and trees */
      '<ellipse cx="270" cy="134" rx="110" ry="12" fill="#5f9a46"/>' + [220, 260, 300, 330].map(x => '<circle cx="' + x + '" cy="118" r="13" fill="#3f7a3a"/><rect x="' + (x - 2) + '" y="124" width="4" height="12" fill="#5a3f28"/>').join("") +
      /* brick wall with the tags */
      '<rect x="0" y="138" width="400" height="84" fill="#8a4a36"/>' + bricks(0, 138, 400, 84, "#6a3424") +
      tag("RILEY GREEN", 120, 190, 34, RED, -5) + tag("DUCKMAN", 270, 212, 20, CREAM, -4) +
      '<g class="rlgn-sp"><circle cx="356" cy="196" r="2" fill="' + RED + '"/><circle cx="362" cy="190" r="1.5" fill="' + RED + '"/></g><g class="rlgn-sp rlgn-sp2"><circle cx="350" cy="206" r="1.5" fill="' + CREAM + '"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#8a8478"/><path d="M0 222h400" stroke="#b8b0a2" stroke-width="2"/>' +
      '<rect x="44" y="64" width="5" height="158" fill="#6a6e72"/>' + sign(4, 64, 96, "PELHAM RD") + sign(10, 90, 84, "PUBLIC SQ"),
      sky("rlgn5", "#3a5a9a", "#f0c08a"));
  }

  window.SCENES = { rlgntrain: rlgntrain, rlgnsaw: rlgnsaw, rlgnjsu: rlgnjsu, rlgnblind: rlgnblind, rlgncorner: rlgncorner };
})();
