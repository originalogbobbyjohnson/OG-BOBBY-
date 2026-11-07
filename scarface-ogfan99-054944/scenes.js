/* scarface scenes (Regions tab: Houston + Texas; South Acres, south Houston). CSS classes and ids prefixed sf- (the page's own anim-train is kept).
   1 Palm Center Transit Center, the south end of the METRORail Purple Line (Griggs Rd and Royal Palms St), the closest rail stop to South Acres: at-grade island platform under canopies, the white light-rail car gliding in.
   2 "On My Block": one-story houses on a south side block, the dominoes table out front, a chromed-out Impala rolling past, porch light flickering.
   3 Houston City Hall (he ran for City Council District D): the pale limestone building with its center tower, the reflecting pool and fountain jets in Hermann Square.
   4 "Heaven" / "Someday": a little white church at sunrise, the rays turning, a dove gliding over ("the grass greener, and the sun brighter").
   5 Bellfort Ave and Scott St ("from Holloway, Belford to Scott"): green signs, SCARFACE tagged on the brick, the stepped gothic tower downtown behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sfflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.sf-flk{animation:sfflick 2.2s infinite}.sf-flk2{animation-delay:.8s}' +
    '@keyframes sfcar{from{transform:translateX(-200px)}to{transform:translateX(560px)}}.sf-car{animation:sfcar 8s linear infinite}' +
    '@keyframes sfjet{0%,100%{transform:scaleY(.55)}50%{transform:scaleY(1)}}.sf-jet{transform-box:fill-box;transform-origin:50% 100%;animation:sfjet 1.6s ease-in-out infinite}.sf-jet2{animation-delay:-.8s}' +
    '@keyframes sfrip{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}.sf-rip{animation:sfrip 3s ease-in-out infinite}.sf-rip2{animation-delay:-1.5s}' +
    '@keyframes sfspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.sf-rays{transform-box:fill-box;transform-origin:50% 50%;animation:sfspin 30s linear infinite}' +
    '@keyframes sfdove{0%{transform:translate(-60px,20px)}100%{transform:translate(460px,-30px)}}.sf-dove{animation:sfdove 11s linear infinite}' +
    '@keyframes sfflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.sf-wing{transform-box:fill-box;transform-origin:50% 100%;animation:sfflap .5s ease-in-out infinite}' +
    '@keyframes sfslap{0%,70%,100%{transform:translateY(0)}80%{transform:translateY(-10px)}}.sf-slap{animation:sfslap 2.4s ease-in-out infinite}' +
    '@keyframes sfblink{0%,100%{opacity:.3}50%{opacity:1}}.sf-bl{animation:sfblink 1.4s ease-in-out infinite}.sf-bl2{animation-delay:-.7s}' +
    '@keyframes sfspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sf-sp{animation:sfspray 1.4s ease-out infinite}.sf-sp2{animation-delay:.45s}' +
    '@keyframes sfflag{0%,100%{transform:skewY(0)}50%{transform:skewY(5deg)}}.sf-flag{transform-box:fill-box;transform-origin:0 50%;animation:sfflag 1.8s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "sf-bl" + (i % 2 ? " sf-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 80) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const palm = (x, base, s) => '<path d="M' + x + ' ' + base + 'q' + (4 * s) + ' ' + (-40 * s) + ' ' + (2 * s) + ' ' + (-78 * s) + '" stroke="#6b4f36" stroke-width="' + (5 * s) + '" fill="none"/>' +
    [[-30, 6], [-22, -10], [0, -16], [22, -10], [30, 6]].map(d => '<path d="M' + (x + 2 * s) + ' ' + (base - 78 * s) + 'q' + (d[0] * 0.5 * s) + ' ' + ((d[1] - 12) * s) + ' ' + (d[0] * s) + ' ' + (d[1] * s + 8 * s) + '" stroke="#3f7a3a" stroke-width="' + (4 * s) + '" fill="none" stroke-linecap="round"/>').join("");
  const PUR = "#7a2c8e", GOLD = "#d9a441", RED = "#c0392b", SKY = "#5fa8d3";

  /* 1. Palm Center Transit Center, Purple Line */
  function sfstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="124" width="36" height="24" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><path d="M24 182V122q0 -12 14 -12h300q24 0 30 30v42z" fill="#eef0f2" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="24" y="156" width="344" height="8" fill="' + PUR + '"/><rect x="24" y="166" width="344" height="3" fill="#9aa3ab"/>' +
      '<path d="M340 114q22 4 26 30h-26z" fill="#1c2630"/><circle cx="356" cy="174" r="3.5" fill="#fff6c2"/>' +
      '<rect x="200" y="100" width="70" height="10" fill="#8a939b"/><path d="M210 100l25 -24l25 24" stroke="#555" stroke-width="2" fill="none"/>' +
      '<rect x="40" y="112" width="96" height="10" rx="2" fill="#111"/><text x="88" y="120" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">PURPLE · PALM CENTER</text></g>';
    const canopy = x => '<rect x="' + (x - 3) + '" y="66" width="6" height="120" fill="#7a8088"/><path d="M' + (x - 56) + ' 70q56 -18 112 0v6h-112z" fill="' + PUR + '"/><path d="M' + (x - 56) + ' 76h112" stroke="#4a1a58" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sfs1)"/>' +
      palm(14, 186, 1) + palm(388, 186, 0.9) +
      '<path d="M0 60h400" stroke="#333" stroke-width="1.5"/>' +
      canopy(90) + canopy(310) +
      train +
      '<rect x="0" y="186" width="400" height="8" fill="#f2c200"/><rect x="0" y="194" width="400" height="66" fill="#b5ad9f"/><path d="M0 226h400" stroke="#9e9688" stroke-width="2"/>' +
      '<rect x="44" y="204" width="312" height="38" rx="3" fill="#111"/><text x="58" y="221" ' + font + ' font-size="14" fill="#fff">Palm Center</text><text x="58" y="236" ' + font + ' font-size="12" fill="#cfd3d8">Transit Center</text>' + badge(260, 223, "PURPLE", PUR),
      sky("sfs1", "#7fb6e4", "#f6dcb0"));
  }

  /* 2. On My Block: dominoes out front */
  function sfblock() {
    const house = (x, c, roof) => '<path d="M' + x + ' 120l40 -26l40 26z" fill="' + roof + '"/><rect x="' + x + '" y="120" width="80" height="58" fill="' + c + '"/>' +
      '<rect x="' + (x + 10) + '" y="132" width="20" height="18" fill="#2c3a46"/><rect x="' + (x + 48) + '" y="134" width="20" height="44" fill="#5a3a2a"/><path d="M' + (x - 4) + ' 178h88" stroke="#8a8478" stroke-width="3"/>';
    const domino = (x, y, a, b) => '<g><rect x="' + x + '" y="' + y + '" width="16" height="9" rx="1.5" fill="#f7f3ea" stroke="#333" stroke-width="1"/><path d="M' + (x + 8) + ' ' + y + 'v9" stroke="#333" stroke-width="1"/>' +
      Array.from({ length: a }, (_, i) => '<circle cx="' + (x + 2.5 + (i % 2) * 3) + '" cy="' + (y + 2.5 + Math.floor(i / 2) * 2.5) + '" r=".9" fill="#111"/>').join("") +
      Array.from({ length: b }, (_, i) => '<circle cx="' + (x + 10.5 + (i % 2) * 3) + '" cy="' + (y + 2.5 + Math.floor(i / 2) * 2.5) + '" r=".9" fill="#111"/>').join("") + '</g>';
    const table = '<rect x="150" y="186" width="110" height="8" rx="2" fill="#7a5130"/><path d="M160 194l-6 30M250 194l6 30" stroke="#5a3a20" stroke-width="5"/>' +
      domino(160, 177, 3, 2) + domino(178, 177, 2, 6) + domino(196, 177, 6, 4) + '<g class="sf-slap">' + domino(220, 177, 4, 5) + '</g>' +
      '<rect x="128" y="196" width="18" height="20" rx="3" fill="' + RED + '"/><rect x="264" y="196" width="18" height="20" rx="3" fill="' + SKY + '"/>';
    const car = '<g class="sf-car"><path d="M20 236v-12q0 -6 8 -8l30 -4l18 -14h64l18 14l36 4q8 2 8 8v12z" fill="#5b1f6e" stroke="#2a0c33" stroke-width="2"/><path d="M82 202h28v12h-44zM116 202h24l14 12h-38z" fill="#bfe3ff" opacity=".85"/>' +
      '<path d="M20 228h176" stroke="#e6e9ee" stroke-width="2"/>' +
      '<circle cx="54" cy="238" r="10" fill="#111"/><circle cx="54" cy="238" r="6" fill="#e6e9ee"/><path d="M54 232v12M48 238h12" stroke="#9aa1a8" stroke-width="1.5"/>' +
      '<circle cx="164" cy="238" r="10" fill="#111"/><circle cx="164" cy="238" r="6" fill="#e6e9ee"/><path d="M164 232v12M158 238h12" stroke="#9aa1a8" stroke-width="1.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sfs2)"/>' +
      '<rect x="0" y="150" width="400" height="80" fill="#6f9a4a"/>' +
      house(6, "#e8d6b0", "#6a4a3a") + house(112, "#c9dbe0", "#4a4a52") + house(218, "#efe4c8", "#7a3f2c") + house(324, "#d8c0a8", "#4a4a52") +
      '<circle class="sf-flk" cx="172" cy="128" r="3" fill="#ffe9a8"/><circle class="sf-flk sf-flk2" cx="278" cy="128" r="3" fill="#ffe9a8"/>' +
      table +
      '<rect x="0" y="226" width="400" height="34" fill="#4e4e54"/>' + car +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="11" fill="#f2efe8">ON MY BLOCK · FA SHEEZY</text>',
      sky("sfs2", "#f2a65a", "#ffe2b0"));
  }

  /* 3. Houston City Hall, reflecting pool */
  function sfcityhall() {
    const LIME = "#e4dcc8", SH = "#c9bfa6";
    const wins = (x0, n, y, w, h) => Array.from({ length: n }, (_, i) => '<rect x="' + (x0 + i * (w + 8)) + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#6d7f8f"/>').join("");
    const hall = '<rect x="70" y="96" width="260" height="84" fill="' + LIME + '"/><rect x="160" y="44" width="80" height="136" fill="' + LIME + '"/><rect x="176" y="30" width="48" height="16" fill="' + SH + '"/>' +
      '<rect x="190" y="18" width="20" height="12" fill="' + SH + '"/><path d="M200 18v-10" stroke="#555" stroke-width="2"/><g class="sf-flag"><path d="M200 8h16l-3 4l3 4h-16z" fill="' + RED + '"/></g>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (168 + i * 12) + '" y="54" width="4" height="100" fill="' + SH + '"/>').join("") +
      wins(80, 4, 108, 12, 18) + wins(80, 4, 140, 12, 18) + wins(254, 4, 108, 12, 18) + wins(254, 4, 140, 12, 18) +
      '<rect x="184" y="150" width="32" height="30" fill="#7a6a4a"/><rect x="60" y="178" width="280" height="6" fill="' + SH + '"/>' +
      '<rect x="168" y="86" width="64" height="10" fill="#4a5a6a"/><text x="200" y="94" text-anchor="middle" ' + font + ' font-size="7" fill="#f2efe8">CITY HALL</text>';
    const jets = [120, 160, 200, 240, 280].map((x, i) => '<rect class="sf-jet' + (i % 2 ? " sf-jet2" : "") + '" x="' + (x - 2) + '" y="196" width="4" height="22" rx="2" fill="#e8f6ff" opacity=".9"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sfs3)"/>' +
      '<g fill="#8aa0b4" opacity=".7"><rect x="0" y="90" width="40" height="90"/><rect x="342" y="70" width="44" height="110"/><path d="M20 90l10 -20l10 20z"/></g>' +
      hall +
      '<rect x="0" y="184" width="400" height="76" fill="#cfc8b4"/><rect x="40" y="200" width="320" height="34" rx="4" fill="#4f86b0"/>' +
      '<g class="sf-rip"><path d="M60 212h40M180 222h50M290 210h40" stroke="#cfe6f5" stroke-width="2" stroke-linecap="round"/></g>' +
      '<g opacity=".35"><rect x="160" y="214" width="80" height="20" fill="' + LIME + '"/></g>' + jets +
      '<rect x="20" y="168" width="8" height="40" fill="#555"/><g class="sf-flag"><rect x="28" y="168" width="64" height="22" fill="' + GOLD + '"/><text x="60" y="183" text-anchor="middle" ' + font + ' font-size="9" fill="#2a1a08">DISTRICT D</text></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#2b2a26">CITY HALL · NEIGHBOR BACK IN THE HOOD</text>',
      sky("sfs3", "#5d9fd6", "#e8f1f7"));
  }

  /* 4. Heaven / Someday: the little church at sunrise */
  function sfchurch() {
    const rays = '<g class="sf-rays">' + Array.from({ length: 12 }, (_, i) => '<path d="M300 110L' + (300 + 220 * Math.cos(i * Math.PI / 6)).toFixed(1) + ' ' + (110 + 220 * Math.sin(i * Math.PI / 6)).toFixed(1) + 'L' + (300 + 220 * Math.cos(i * Math.PI / 6 + 0.12)).toFixed(1) + ' ' + (110 + 220 * Math.sin(i * Math.PI / 6 + 0.12)).toFixed(1) + 'z" fill="#fff6c8" opacity=".25"/>').join("") + '</g>';
    const church = '<path d="M60 130l70 -40l70 40z" fill="#8a2f2a"/><rect x="66" y="130" width="128" height="70" fill="#f7f4ec" stroke="#b9b2a2" stroke-width="2"/>' +
      '<rect x="112" y="60" width="36" height="40" fill="#f7f4ec" stroke="#b9b2a2" stroke-width="2"/><path d="M106 60l24 -28l24 28z" fill="#8a2f2a"/><path d="M130 32v-16M123 22h14" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<path d="M122 92v-14q8 -10 16 0v14z" fill="#3a4a5a"/>' +
      '<path d="M118 200v-30q12 -16 24 0v30z" fill="#6a3a22"/>' +
      [80, 160].map(x => '<path d="M' + x + ' 172v-22q8 -10 16 0v22z" fill="' + SKY + '" stroke="' + GOLD + '" stroke-width="2"/><path d="M' + (x + 8) + ' 150v22M' + x + ' 160h16" stroke="' + GOLD + '" stroke-width="1"/>').join("");
    const dove = '<g class="sf-dove"><g transform="translate(40 60)"><ellipse cx="0" cy="0" rx="10" ry="4.5" fill="#fff"/><circle cx="9" cy="-2" r="3.2" fill="#fff"/><path d="M12 -2l4 1l-4 1z" fill="' + GOLD + '"/><path d="M-10 0l-7 -4v8z" fill="#fff"/><path class="sf-wing" d="M-4 -2q4 -14 12 -4z" fill="#eef3f8"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sfs4)"/>' + rays +
      '<circle cx="300" cy="110" r="34" fill="#ffe9a0"/><circle cx="300" cy="110" r="46" fill="#ffe9a0" opacity=".25"/>' +
      '<path d="M0 170q100 -24 200 -6t200 -8v104h-400z" fill="#6fb35a"/><path d="M0 200q120 -16 240 0t160 -4v64h-400z" fill="#5c9e4a"/>' +
      church + dove +
      '<path d="M130 200q-10 30 -40 60h80q-30 -30 -40 -60z" fill="#d9c8a0"/>' +
      '<text x="290" y="236" text-anchor="middle" ' + font + ' font-size="12" fill="#1f3a18">THE GRASS GREENER</text><text x="290" y="252" text-anchor="middle" ' + font + ' font-size="12" fill="#1f3a18">THE SUN BRIGHTER</text>',
      sky("sfs4", "#f4a35c", "#ffe6b8"));
  }

  /* 5. Bellfort Ave and Scott St */
  function sfcorner() {
    const gothic = (x, w, h, c) => {
      let s = '<rect x="' + x + '" y="' + (130 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>';
      for (let k = 0; k < 3; k++) { const yy = 130 - h - k * 12, ww = w - k * 12; s += '<path d="M' + (x + k * 6) + ' ' + yy + 'l' + (ww / 2) + ' -12l' + (ww / 2) + ' 12z" fill="' + c + '"/>'; }
      return s + '<path d="M' + (x + w / 2) + ' ' + (130 - h - 46) + 'v-14" stroke="' + c + '" stroke-width="3"/>';
    };
    const towers = '<g>' + gothic(204, 44, 70, "#5a2a2a") + '<rect x="160" y="54" width="34" height="76" fill="#2a2438"/><path d="M252 130V44l12 -8l12 8v86z" fill="#2a2438"/><rect x="284" y="70" width="28" height="60" fill="#2a2438"/><rect x="128" y="80" width="26" height="50" fill="#2a2438"/></g>' +
      '<g fill="#ffd98a" opacity=".55">' + Array.from({ length: 16 }, (_, i) => '<rect class="' + (i % 3 ? "" : "sf-bl") + '" x="' + (208 + (i % 4) * 9) + '" y="' + (70 + Math.floor(i / 4) * 12) + '" width="3" height="5"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sfs5)"/>' + stars(16) + towers +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("SCARFACE", 18, 186, 46, GOLD, -6) + tag("SOUTH ACRES", 150, 214, 20, SKY, -4) + tag("FACE MOB", 22, 214, 18, RED, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 148, "Bellfort Ave") + sign(286, 124, 100, "Scott St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="sf-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="sf-sp"><circle cx="246" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="sf-sp sf-sp2"><circle cx="252" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("sfs5", "#141030", "#c0583a"));
  }

  window.SCENES = { sfstation: sfstation, sfblock: sfblock, sfcityhall: sfcityhall, sfchurch: sfchurch, sfcorner: sfcorner };
})();
