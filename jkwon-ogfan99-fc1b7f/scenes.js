/* jkwon scenes (Regions tab: St. Louis + Ohio; South City - the old Third District, "stayed in third district" on Hood Hop). CSS classes prefixed kw- (the page's own anim-train slides the bus in).
   1 MetroBus 70 Grand pulling up to the S Grand Blvd / Arsenal St stop on the South Side, the Tower Grove Park gate and red-brick flats behind.
   2 Tower Grove Park: one of its painted Victorian pavilions (red, gold and green, the onion-cap roof), the fountain, leaves falling.
   3 The dance floor from "Tipsy": the 1-2-3-4 countdown, a lit two-step floor, lights chasing.
   4 The Trackboyz basement studio in Hazelwood (they made Hood Hop there): a drum machine, speakers pumping, a gold plaque, the meters jumping.
   5 S Grand Blvd and Russell Blvd at Reservoir Park: green signs, J-KWON tagged on the brick, the Compton Hill Water Tower behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kwglow{0%,100%{opacity:.35}50%{opacity:1}}.kw-glow{animation:kwglow 1.6s ease-in-out infinite}.kw-g2{animation-delay:-.8s}.kw-g3{animation-delay:-.4s}.kw-g4{animation-delay:-1.2s}' +
    '@keyframes kwleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-30px,150px) rotate(300deg)}}.kw-leaf{transform-box:fill-box;animation:kwleaf 6s linear infinite}.kw-l2{animation-delay:-2s}.kw-l3{animation-delay:-4s}' +
    '@keyframes kwspray{0%,100%{transform:scaleY(.8)}50%{transform:scaleY(1.1)}}.kw-spray{transform-box:fill-box;transform-origin:50% 100%;animation:kwspray 1.2s ease-in-out infinite}' +
    '@keyframes kwstep{0%,100%{transform:translateX(0)}50%{transform:translateX(14px)}}.kw-step{animation:kwstep 1s ease-in-out infinite}.kw-s2{animation-delay:-.5s}' +
    '@keyframes kwcone{0%,100%{opacity:.15}50%{opacity:.45}}.kw-cone{animation:kwcone 2s ease-in-out infinite}.kw-c2{animation-delay:-1s}' +
    '@keyframes kwpump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.kw-pump{transform-box:fill-box;transform-origin:50% 50%;animation:kwpump .5s ease-in-out infinite}' +
    '@keyframes kwbar{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.kw-bar{transform-box:fill-box;transform-origin:50% 100%;animation:kwbar .7s ease-in-out infinite}.kw-b2{animation-delay:-.2s}.kw-b3{animation-delay:-.45s}.kw-b4{animation-delay:-.6s}' +
    '@keyframes kwsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kw-sp{animation:kwsp 1.4s ease-out infinite}.kw-sp2{animation-delay:.45s}' +
    '@keyframes kwbird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-30px)}}.kw-bird{animation:kwbird 12s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const ORANGE = "#ff8a00", RED = "#e63946", MINT = "#3ec9a7", BUS = "#00539f";

  /* red-brick South City flat with the stone trim and a flat parapet */
  const flat = (x, y, c) => '<rect x="' + x + '" y="' + y + '" width="86" height="' + (190 - y) + '" fill="' + c + '"/><rect x="' + (x - 3) + '" y="' + (y - 6) + '" width="92" height="8" fill="#5a2a1e"/>' +
    [0, 1].map(r => [0, 1, 2].map(k => '<rect x="' + (x + 10 + k * 25) + '" y="' + (y + 12 + r * 40) + '" width="16" height="24" fill="#2b2e3a"/><rect x="' + (x + 8 + k * 25) + '" y="' + (y + 10 + r * 40) + '" width="20" height="4" fill="#d9cdb8"/>').join("")).join("");

  /* 1. MetroBus 70 Grand at S Grand / Arsenal */
  function kwstation() {
    const bus = '<g class="anim-train"><rect x="40" y="128" width="300" height="78" rx="10" fill="#f4f4f2" stroke="#8a8f96" stroke-width="2"/>' +
      '<rect x="40" y="186" width="300" height="10" fill="' + BUS + '"/><rect x="40" y="196" width="300" height="4" fill="#d6293a"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (56 + i * 40) + '" y="140" width="32" height="30" rx="3" fill="#1d262e"/>').join("") +
      '<rect x="300" y="138" width="36" height="46" rx="4" fill="#1d262e"/><rect x="298" y="129" width="40" height="8" rx="2" fill="#111"/>' +
      '<text x="318" y="135.5" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="6.4" fill="#ffb02e" class="kw-glow">70 GRAND</text>' +
      '<rect x="248" y="140" width="40" height="56" rx="2" fill="#2b3640"/><path d="M268 140v56" stroke="#8a8f96" stroke-width="2"/>' +
      '<circle cx="90" cy="206" r="13" fill="#1a1a1a"/><circle cx="90" cy="206" r="5" fill="#888"/><circle cx="290" cy="206" r="13" fill="#1a1a1a"/><circle cx="290" cy="206" r="5" fill="#888"/>' +
      '<circle cx="334" cy="192" r="4" fill="#fff6c2"/></g>';
    /* Tower Grove Park's stone gate piers and iron fence on the left */
    const gate = '<rect x="6" y="86" width="22" height="104" fill="#c9bfa8"/><rect x="2" y="80" width="30" height="8" fill="#b0a68e"/><circle cx="17" cy="74" r="7" fill="#b0a68e"/>' +
      '<rect x="74" y="86" width="22" height="104" fill="#c9bfa8"/><rect x="70" y="80" width="30" height="8" fill="#b0a68e"/><circle cx="85" cy="74" r="7" fill="#b0a68e"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (32 + i * 5) + ' 190v-60l2 -5l2 5" stroke="#1b1b1b" stroke-width="1.6" fill="none"/>').join("") +
      '<path d="M28 136h46M28 170h46" stroke="#1b1b1b" stroke-width="2"/>' +
      '<g fill="#3d6b34"><circle cx="40" cy="60" r="26"/><circle cx="70" cy="54" r="22"/><circle cx="52" cy="40" r="18"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kw1)"/>' +
      '<g class="kw-bird"><path d="M0 30q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      gate + flat(112, 66, "#9a4632") + flat(206, 58, "#8a3e2c") + flat(300, 70, "#a54e36") +
      '<rect x="0" y="190" width="400" height="18" fill="#bdb7ac"/><rect x="0" y="206" width="400" height="54" fill="#3a3a40"/>' +
      '<path d="M0 238h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 10"/>' +
      bus +
      '<rect x="370" y="104" width="4" height="96" fill="#555"/><rect x="352" y="86" width="40" height="36" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="372" y="100" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS</text><text x="372" y="116" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">70</text>' +
      '<rect x="4" y="214" width="176" height="38" rx="3" fill="#111"/><text x="14" y="230" ' + font + ' font-size="12" fill="#fff">S Grand / Arsenal</text><text x="14" y="245" ' + font + ' font-size="9" fill="#c8c8c8">TOWER GROVE PARK · SOUTH CITY</text>',
      sky("kw1", "#8fc7ee", "#f5ead6"));
  }

  /* 2. Tower Grove Park: a painted Victorian pavilion and the fountain */
  function kwpark() {
    const leaves = [[60, 20, "#e07a2a", ""], [190, 10, "#d4a21a", "kw-l2"], [320, 30, "#c0392b", "kw-l3"], [250, 0, "#e07a2a", "kw-l2"]].map(l =>
      '<g class="kw-leaf ' + l[3] + '"><ellipse cx="' + l[0] + '" cy="' + l[1] + '" rx="5" ry="3" fill="' + l[2] + '"/></g>').join("");
    /* the pavilion: red posts, gold fretwork, green onion cap */
    const pav = '<rect x="120" y="206" width="160" height="10" fill="#b8ad96"/>' +
      [130, 165, 200, 235, 270].map(x => '<rect x="' + (x - 4) + '" y="118" width="8" height="88" fill="#b8202e"/>').join("") +
      '<path d="M112 118h176l-14 -20H126z" fill="#d9a63a" stroke="#7a5a1a" stroke-width="2"/>' +
      Array.from({ length: 10 }, (_, i) => '<circle cx="' + (132 + i * 15) + '" cy="124" r="5" fill="none" stroke="#d9a63a" stroke-width="2"/>').join("") +
      '<path d="M126 98q74 -66 148 0z" fill="#2e7d4f" stroke="#17482c" stroke-width="2"/><path d="M150 98q50 -40 100 0" fill="none" stroke="#d9a63a" stroke-width="2"/>' +
      '<path d="M196 50q4 -14 8 0z" fill="#d9a63a"/><rect x="198" y="38" width="4" height="12" fill="#d9a63a"/><circle cx="200" cy="36" r="4" fill="#b8202e"/>' +
      '<path d="M116 150h168" stroke="#d9a63a" stroke-width="3"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (122 + i * 12) + ' 150v56" stroke="#d9a63a" stroke-width="1.2" opacity=".7"/>').join("");
    const fountain = '<ellipse cx="350" cy="214" rx="40" ry="9" fill="#7aa9c8" stroke="#a59d88" stroke-width="3"/><rect x="346" y="188" width="8" height="24" fill="#a59d88"/>' +
      '<g class="kw-spray"><path d="M350 188q-12 -20 -22 6M350 188q12 -20 22 6M350 188v-20" stroke="#cde9ff" stroke-width="2.5" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kw2)"/>' +
      '<g fill="#2f5b2c"><circle cx="30" cy="120" r="44"/><circle cx="90" cy="96" r="36"/><circle cx="330" cy="104" r="40"/><circle cx="380" cy="130" r="30"/></g>' +
      '<g fill="#d9822b" opacity=".85"><circle cx="60" cy="86" r="18"/><circle cx="350" cy="80" r="16"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#5d8a3c"/><path d="M0 232q200 -14 400 0v28H0z" fill="#4c7a30"/>' +
      pav + fountain + leaves +
      '<rect x="8" y="222" width="150" height="28" rx="3" fill="#111" opacity=".85"/><text x="16" y="240" ' + font + ' font-size="11" fill="#fff">TOWER GROVE PARK</text>',
      sky("kw2", "#a8d4f0", "#f8e7c4"));
  }

  /* 3. The dance floor: 1-2-3-4, everybody two-stepping */
  function kwclub() {
    const cols = [ORANGE, RED, MINT, "#ffd23f"];
    const floor = Array.from({ length: 5 }, (_, r) => Array.from({ length: 10 }, (_, c) =>
      '<rect class="kw-glow kw-g' + (1 + (r + c) % 4) + '" x="' + (c * 40) + '" y="' + (170 + r * 18) + '" width="40" height="18" fill="' + cols[(r + c) % 4] + '" opacity=".6"/>').join("")).join("");
    const nums = ["1", "2", "3", "4"].map((n, i) => '<g class="kw-glow kw-g' + (i + 1) + '"><circle cx="' + (80 + i * 80) + '" cy="58" r="26" fill="#140b0e" stroke="' + cols[i] + '" stroke-width="4"/>' +
      '<text x="' + (80 + i * 80) + '" y="70" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="34" fill="' + cols[i] + '">' + n + '</text></g>').join("");
    const cones = '<path class="kw-cone" d="M60 0L10 170h120z" fill="#ffd23f"/><path class="kw-cone kw-c2" d="M340 0L270 170h120z" fill="' + MINT + '"/>';
    /* two shoe-steppers (simple sneakers) */
    const shoe = (x, y, c, cls) => '<g class="kw-step ' + cls + '"><path d="M' + x + ' ' + y + 'h30q8 0 8 8v4H' + x + 'z" fill="' + c + '" stroke="#000" stroke-width="2"/><path d="M' + x + ' ' + (y + 12) + 'h38" stroke="#fff" stroke-width="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#140b0e"/>' + cones + nums +
      '<text x="200" y="118" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" letter-spacing="4" fill="#fff">TWO STEP WITH ME</text>' +
      '<text x="200" y="140" text-anchor="middle" ' + font + ' font-size="10" letter-spacing="2" fill="' + ORANGE + '">HERE COMES THE 2 TO THE 3 TO THE 4</text>' +
      '<rect x="0" y="168" width="400" height="92" fill="#000"/>' + floor +
      shoe(120, 196, "#fff", "") + shoe(160, 214, "#fff", "kw-s2") + shoe(250, 200, ORANGE, "kw-s2") + shoe(290, 218, ORANGE, ""));
  }

  /* 4. The Trackboyz basement studio in Hazelwood */
  function kwstudio() {
    const pads = Array.from({ length: 16 }, (_, i) => '<rect class="' + (i % 5 === 0 ? "kw-glow" : "") + '" x="' + (150 + (i % 4) * 22) + '" y="' + (150 + Math.floor(i / 4) * 16) + '" width="18" height="12" rx="2" fill="' + (i % 5 === 0 ? ORANGE : "#3a3a44") + '"/>').join("");
    const spk = (x) => '<rect x="' + x + '" y="96" width="70" height="120" rx="6" fill="#1b1b20" stroke="#000" stroke-width="2"/><g class="kw-pump"><circle cx="' + (x + 35) + '" cy="176" r="24" fill="#2c2c34" stroke="#555" stroke-width="3"/><circle cx="' + (x + 35) + '" cy="176" r="8" fill="#111"/></g><circle cx="' + (x + 35) + '" cy="122" r="12" fill="#2c2c34" stroke="#555" stroke-width="2"/>';
    const meters = [0, 1, 2, 3, 4].map(i => '<rect class="kw-bar kw-b' + (1 + i % 4) + '" x="' + (166 + i * 14) + '" y="70" width="9" height="34" fill="' + (i > 2 ? RED : MINT) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#2a2320"/>' +
      /* basement block wall */
      Array.from({ length: 8 }, (_, r) => Array.from({ length: 9 }, (_, c) => '<rect x="' + (c * 48 - (r % 2) * 24) + '" y="' + (r * 22) + '" width="46" height="20" fill="#4a423c"/>').join("")).join("") +
      /* gold plaque on the wall */
      '<rect x="150" y="14" width="100" height="48" rx="3" fill="#3b2418" stroke="#c9a24a" stroke-width="3"/><circle cx="178" cy="38" r="17" fill="#e8c35a" stroke="#8a6a12" stroke-width="2"/><circle cx="178" cy="38" r="4" fill="#3b2418"/>' +
      '<text x="222" y="35" text-anchor="middle" ' + font + ' font-size="9" fill="#e8c35a">HOOD</text><text x="222" y="47" text-anchor="middle" ' + font + ' font-size="9" fill="#e8c35a">HOP</text>' +
      '<rect x="160" y="66" width="80" height="42" rx="3" fill="#111"/>' + meters +
      spk(30) + spk(300) +
      '<rect x="0" y="216" width="400" height="44" fill="#3a2c22"/><rect x="110" y="200" width="180" height="30" fill="#5a3e2a"/>' +
      '<rect x="138" y="140" width="124" height="70" rx="6" fill="#d8d4cc" stroke="#333" stroke-width="2"/>' + pads +
      '<rect x="150" y="128" width="100" height="10" rx="2" fill="#1d2a24"/><text x="200" y="136" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="7" fill="' + MINT + '" class="kw-glow">TRACKBOYZ</text>' +
      '<rect x="8" y="230" width="160" height="24" rx="3" fill="#111" opacity=".85"/><text x="16" y="246" ' + font + ' font-size="10" fill="#fff">THE BASEMENT · HAZELWOOD</text>');
  }

  /* 5. S Grand Blvd and Russell Blvd, the Compton Hill Water Tower behind */
  function kwcorner() {
    const tower = '<rect x="180" y="40" width="40" height="110" fill="#c9ad86"/><rect x="176" y="36" width="48" height="8" fill="#a98c64"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (186 + (i % 2) * 18) + '" y="' + (54 + i * 18) + '" width="8" height="12" rx="4" fill="#3b2a1e"/>').join("") +
      '<rect x="174" y="20" width="52" height="18" fill="#c9ad86"/>' + [0, 1, 2, 3].map(i => '<rect x="' + (180 + i * 12) + '" y="23" width="6" height="12" rx="3" fill="#3b2a1e"/>').join("") +
      '<path d="M172 22l28 -22l28 22z" fill="#8a4a2e" stroke="#5a2a18" stroke-width="2"/><rect x="198" y="-6" width="4" height="8" fill="#5a2a18"/>' +
      '<rect x="166" y="146" width="68" height="10" fill="#a98c64"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kw5)"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle class="' + (i % 4 ? "" : "kw-glow") + '" cx="' + ((i * 89) % 400) + '" cy="' + (8 + (i * 47) % 40) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      tower +
      '<g fill="#1d3426"><circle cx="40" cy="120" r="32"/><circle cx="94" cy="128" r="22"/><circle cx="130" cy="136" r="18"/><circle cx="276" cy="134" r="20"/><circle cx="318" cy="122" r="26"/><circle cx="370" cy="114" r="32"/></g>' +
      '<rect x="0" y="134" width="400" height="90" fill="#8a4430"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (142 + i * 8) + 'h400" stroke="#72351f" stroke-width="1"/>').join("") +
      tag("HHM", 20, 160, 18, ORANGE, -4) + tag("J-KWON", 24, 206, 48, RED, -6) + tag("2 STEP", 214, 176, 18, "#fff", -4) + tag("TRACKBOYZ", 130, 220, 14, MINT, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="86" width="6" height="138" fill="#2f2f2f"/>' + sign(236, 88, 150, "S Grand Blvd") + sign(250, 114, 136, "Russell Blvd") +
      '<g class="kw-sp"><circle cx="200" cy="170" r="3" fill="' + RED + '" opacity=".7"/></g><g class="kw-sp kw-sp2"><circle cx="206" cy="164" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("kw5", "#1b1638", "#d0703a"));
  }

  window.SCENES = { kwstation: kwstation, kwpark: kwpark, kwclub: kwclub, kwstudio: kwstudio, kwcorner: kwcorner };
})();
