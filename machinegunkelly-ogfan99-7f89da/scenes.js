/* machinegunkelly scenes (Regions tab: St. Louis + Ohio; Cleveland's East Side). CSS classes and ids prefixed mg- (the page's own anim-train is kept).
   1 RTA Blue/Green Line pulling into E 116th-St. Luke's, at grade in the grass median of Shaker Blvd. BLUE + GRN bullets.
   2 The Rock Hall on the lakefront: Pei's glass pyramid and white tower (the Aug 13 "Machine Gun Kelly Day" ceremony was held there).
   3 The Flats at night: the Cuyahoga, a lift bridge, a pink-lit coffee window (his Flats coffee spot).
   4 A small club stage on Coventry Rd in Cleveland Heights (the Grog Shop days): lights, a jumping crowd, LACE UP on the kick drum.
   5 E 120th St and Union Ave (the house studio days): green signs, KELLS tagged on the brick, the Cleveland script sign glowing behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mgflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.mg-flk{animation:mgflick 2.2s infinite}.mg-flk2{animation-delay:.7s}' +
    '@keyframes mgwave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.mg-wave{animation:mgwave 3s linear infinite}' +
    '@keyframes mgbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.mg-beam{transform-box:fill-box;transform-origin:50% 100%;animation:mgbeam 3.6s ease-in-out infinite}.mg-beam2{animation-delay:-1.8s}' +
    '@keyframes mgboat{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.mg-boat{animation:mgboat 14s linear infinite}' +
    '@keyframes mgglow{0%,100%{opacity:.35}50%{opacity:.95}}.mg-glow{animation:mgglow 1.8s ease-in-out infinite}.mg-glow2{animation-delay:-.9s}' +
    '@keyframes mgjump{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}.mg-jmp{animation:mgjump .5s ease-in-out infinite}.mg-jmp2{animation-delay:-.25s}' +
    '@keyframes mgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mg-sp{animation:mgspray 1.4s ease-out infinite}.mg-sp2{animation-delay:.45s}' +
    '@keyframes mgleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.mg-tree{transform-box:fill-box;transform-origin:50% 100%;animation:mgleaf 2.8s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const PINK = "#ff4f9a", BLUE = "#3272b3", GRN = "#2e9e4f", BONE = "#e8e8e8", YEL = "#f2c200";

  /* 1. E 116th-St. Luke's, RTA Blue/Green Line, in the Shaker Blvd median */
  function mgstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 44) + '" y="100" width="34" height="24" rx="3" fill="#1f2a36"/>').join("");
    const train = '<g class="anim-train"><rect x="40" y="88" width="340" height="70" rx="8" fill="#d9dde1" stroke="#8b9399" stroke-width="2"/>' + win +
      '<rect x="40" y="130" width="340" height="6" fill="' + BLUE + '"/><rect x="40" y="137" width="340" height="4" fill="' + GRN + '"/>' +
      '<rect x="44" y="96" width="18" height="50" rx="2" fill="#1f2a36"/><rect x="322" y="92" width="52" height="10" rx="2" fill="#111"/><text x="348" y="100" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">TOWER CITY</text>' +
      '<path d="M180 88l20 -22l20 22" fill="none" stroke="#333" stroke-width="2"/><path d="M150 66h100" stroke="#333" stroke-width="2"/>' +
      '<circle class="mg-flk" cx="372" cy="146" r="3.5" fill="#fff6c2"/><circle cx="100" cy="160" r="7" fill="#222"/><circle cx="160" cy="160" r="7" fill="#222"/><circle cx="270" cy="160" r="7" fill="#222"/><circle cx="330" cy="160" r="7" fill="#222"/></g>';
    const tree = (x, s) => '<g class="mg-tree"><rect x="' + (x - 3) + '" y="' + (120 - 30 * s) + '" width="6" height="' + (30 * s + 46) + '" fill="#4a3426"/><circle cx="' + x + '" cy="' + (110 - 34 * s) + '" r="' + (26 * s) + '" fill="#3f7a3a"/><circle cx="' + (x - 14 * s) + '" cy="' + (118 - 24 * s) + '" r="' + (18 * s) + '" fill="#4f8f44"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mgs1)"/>' +
      tree(16, 1) + tree(384, 1.1) + tree(70, .8) + tree(330, .75) +
      /* overhead wire */
      '<path d="M0 60h400" stroke="#333" stroke-width="1.5"/><rect x="24" y="56" width="4" height="110" fill="#55595d"/><rect x="372" y="56" width="4" height="110" fill="#55595d"/>' +
      /* grass median + track */
      '<path d="M0 162h400v98H0z" fill="#5f8a46"/><path d="M0 164h400" stroke="#2c2c2c" stroke-width="5"/><path d="M0 170h400" stroke="#777" stroke-width="2"/>' +
      Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 22) + ' 166v6" stroke="#3d2f24" stroke-width="5"/>').join("") +
      train +
      /* low side platform + shelter */
      '<rect x="0" y="176" width="400" height="12" fill="#b9b5ab"/><rect x="0" y="176" width="400" height="3" fill="' + YEL + '"/>' +
      '<rect x="18" y="188" width="80" height="6" fill="#8d8a82"/><rect x="302" y="188" width="80" height="6" fill="#8d8a82"/>' +
      /* station sign */
      '<rect x="72" y="198" width="256" height="40" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<text x="170" y="224" text-anchor="middle" ' + font + ' font-size="16" fill="#fff" letter-spacing=".5">E 116TH–ST. LUKE\'S</text>' +
      '<circle cx="280" cy="218" r="13" fill="' + BLUE + '"/><text x="280" y="221.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BLUE</text>' +
      '<circle cx="309" cy="218" r="13" fill="' + GRN + '"/><text x="309" y="221.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">GRN</text>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e3c3" letter-spacing="2">SHAKER BLVD · EAST SIDE</text>',
      sky("mgs1", "#232048", "#c77a6a"));
  }

  /* 2. The Rock Hall on the lake: glass pyramid + white tower */
  function mgrock() {
    const glass = Array.from({ length: 7 }, (_, i) => '<path d="M' + (120 + i * 22) + ' 186L' + (200 + (i - 3) * 6) + ' ' + (86 + Math.abs(i - 3) * 4) + '" stroke="#9fc3d6" stroke-width="1" opacity=".8"/>').join("") +
      Array.from({ length: 4 }, (_, i) => '<path d="M' + (138 + i * 14) + ' ' + (160 - i * 22) + 'H' + (262 - i * 14) + '" stroke="#9fc3d6" stroke-width="1" opacity=".8"/>').join("");
    const beams = '<path class="mg-beam" d="M150 190L130 20L160 20z" fill="' + PINK + '" opacity=".18"/><path class="mg-beam mg-beam2" d="M250 190L240 20L270 20z" fill="#7fd3ff" opacity=".18"/>';
    const waves = '<g class="mg-wave">' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 40) + ' 222q10 -5 20 0t20 0" stroke="#8fc0e0" stroke-width="2" fill="none" opacity=".6"/><path d="M' + (i * 40 + 20) + ' 238q10 -5 20 0t20 0" stroke="#8fc0e0" stroke-width="2" fill="none" opacity=".4"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mgs2)"/>' +
      Array.from({ length: 22 }, (_, i) => '<circle cx="' + ((i * 67) % 400) + '" cy="' + ((i * 23) % 80) + '" r="1.1" fill="#fff" opacity=".7"/>').join("") +
      beams +
      /* white tower behind */
      '<rect x="214" y="60" width="34" height="126" fill="#f2f2ee"/><rect x="214" y="60" width="34" height="6" fill="#cfcfca"/>' +
      /* cantilevered drum + wing */
      '<rect x="248" y="124" width="70" height="30" fill="#ecebe6"/><ellipse cx="300" cy="118" rx="34" ry="10" fill="#f2f2ee"/><rect x="266" y="108" width="68" height="10" fill="#f2f2ee"/><ellipse cx="300" cy="108" rx="34" ry="10" fill="#dcdcd6"/>' +
      '<rect x="96" y="150" width="40" height="36" fill="#ecebe6"/>' +
      /* glass pyramid */
      '<path d="M110 186L200 82L290 186z" fill="#3a5f7a" opacity=".85"/><path d="M110 186L200 82L290 186z" fill="url(#mgg2)"/>' + glass +
      '<path d="M110 186L200 82L290 186" fill="none" stroke="#dfe9ef" stroke-width="2"/>' +
      '<rect class="mg-glow" x="170" y="150" width="60" height="30" fill="' + PINK + '" opacity=".35"/>' +
      /* plaza + lake */
      '<rect x="0" y="186" width="400" height="20" fill="#9b968c"/><rect x="0" y="206" width="400" height="54" fill="#1f4a6a"/>' + waves +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e3c3" letter-spacing="2">ROCK HALL · MGK DAY AUG 13</text>',
      sky("mgs2", "#0d0b26", "#3a2a5e") + '<linearGradient id="mgg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#bfe3f5" stop-opacity=".5"/><stop offset="1" stop-color="#0e2233" stop-opacity=".2"/></linearGradient>');
  }

  /* 3. The Flats: Cuyahoga, lift bridge, a pink coffee window */
  function mgflats() {
    const truss = Array.from({ length: 8 }, (_, i) => '<path d="M' + (150 + i * 14) + ' 92l14 22M' + (164 + i * 14) + ' 92l-14 22" stroke="#6a6f74" stroke-width="2"/>').join("");
    const boat = '<g class="mg-boat"><path d="M0 196h70l-10 12H8z" fill="#e8e8e8"/><rect x="18" y="184" width="30" height="12" fill="#f4f1ea"/><rect x="22" y="187" width="8" height="5" fill="#ffd98a"/><rect x="34" y="187" width="8" height="5" fill="#ffd98a"/><circle class="mg-flk" cx="66" cy="194" r="2.5" fill="#ff4a4a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mgs3)"/>' +
      Array.from({ length: 22 }, (_, i) => '<circle cx="' + ((i * 59) % 400) + '" cy="' + ((i * 17) % 60) + '" r="1.1" fill="#fff" opacity=".7"/>').join("") +
      /* lift bridge towers + span */
      '<rect x="134" y="40" width="16" height="140" fill="#4e5459"/><rect x="262" y="40" width="16" height="140" fill="#4e5459"/>' +
      '<rect x="130" y="36" width="24" height="8" fill="#3a3f44"/><rect x="258" y="36" width="24" height="8" fill="#3a3f44"/>' +
      '<rect x="150" y="88" width="112" height="6" fill="#6a6f74"/><rect x="150" y="112" width="112" height="6" fill="#6a6f74"/>' + truss +
      '<circle class="mg-flk" cx="142" cy="34" r="3" fill="#ff4a4a"/><circle class="mg-flk mg-flk2" cx="270" cy="34" r="3" fill="#ff4a4a"/>' +
      /* left: brick warehouse with the pink coffee window */
      '<rect x="0" y="96" width="122" height="96" fill="#6b3a2c"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (104 + i * 9) + 'h122" stroke="#55291e" stroke-width="1"/>').join("") +
      '<rect x="14" y="134" width="70" height="44" fill="#1a0f18"/><rect class="mg-glow" x="14" y="134" width="70" height="44" fill="' + PINK + '" opacity=".55"/>' +
      '<text x="49" y="126" text-anchor="middle" ' + font + ' font-size="11" fill="' + PINK + '" letter-spacing="1" class="mg-flk">COFFEE</text>' +
      '<rect x="92" y="140" width="20" height="38" fill="#2a1a14"/>' +
      /* right: old warehouses */
      '<rect x="292" y="104" width="108" height="88" fill="#4a3a36"/><g fill="#ffcf7a" opacity=".6"><rect x="304" y="116" width="12" height="14"/><rect x="330" y="116" width="12" height="14"/><rect x="356" y="116" width="12" height="14"/><rect x="304" y="146" width="12" height="14"/><rect x="356" y="146" width="12" height="14"/></g>' +
      /* river */
      '<rect x="0" y="180" width="400" height="80" fill="#24384a"/><path d="M0 180h400" stroke="#8b8f94" stroke-width="3"/>' +
      '<rect x="14" y="196" width="70" height="8" fill="' + PINK + '" opacity=".25" class="mg-glow"/>' + boat +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e3c3" letter-spacing="2">THE FLATS · CUYAHOGA RIVER</text>',
      sky("mgs3", "#120e2a", "#5a3050"));
  }

  /* 4. A small club stage on Coventry: lights, jumping crowd */
  function mggrog() {
    const crowd = Array.from({ length: 16 }, (_, i) => {
      const x = 14 + i * 24, y = 214 + (i % 2) * 8, c = i % 3 === 0 ? "#2b2233" : i % 3 === 1 ? "#352a3f" : "#241c2c";
      return '<g class="mg-jmp' + (i % 2 ? " mg-jmp2" : "") + '"><circle cx="' + x + '" cy="' + y + '" r="9" fill="' + c + '"/><rect x="' + (x - 11) + '" y="' + (y + 8) + '" width="22" height="30" rx="6" fill="' + c + '"/>' +
        (i % 3 === 0 ? '<path d="M' + (x - 6) + ' ' + (y - 4) + 'l-6 -22" stroke="' + c + '" stroke-width="5" stroke-linecap="round"/>' : '') + '</g>';
    }).join("");
    const light = (x, col, cls) => '<path class="mg-beam ' + cls + '" d="M' + x + ' 20L' + (x - 34) + ' 190L' + (x + 34) + ' 190z" fill="' + col + '" opacity=".16"/><rect x="' + (x - 6) + '" y="14" width="12" height="10" rx="2" fill="#333"/>';
    return svg(
      '<rect width="400" height="260" fill="#0e0a12"/>' +
      '<rect x="0" y="0" width="400" height="16" fill="#1a1a1a"/><path d="M0 16h400" stroke="#444" stroke-width="3"/>' +
      light(90, PINK, "") + light(200, BONE, "mg-beam2") + light(310, "#7fd3ff", "") +
      /* back wall + banner */
      '<rect x="40" y="40" width="320" height="40" fill="#1c1622" stroke="#3a2f44" stroke-width="2"/>' +
      '<text x="200" y="69" text-anchor="middle" ' + font + ' font-size="20" fill="' + BONE + '" letter-spacing="6">E S T</text>' +
      /* amps */
      '<rect x="40" y="110" width="56" height="70" fill="#1a1a1a" stroke="#555" stroke-width="2"/><rect x="46" y="118" width="44" height="54" fill="#2b2b2b"/>' +
      '<rect x="304" y="110" width="56" height="70" fill="#1a1a1a" stroke="#555" stroke-width="2"/><rect x="310" y="118" width="44" height="54" fill="#2b2b2b"/>' +
      /* drum kit with LACE UP on the kick */
      '<circle cx="200" cy="160" r="26" fill="#f4f1ea" stroke="#222" stroke-width="3"/><text x="200" y="157" text-anchor="middle" ' + font + ' font-size="9" fill="#111">LACE</text><text x="200" y="168" text-anchor="middle" ' + font + ' font-size="9" fill="#111">UP</text>' +
      '<ellipse cx="160" cy="130" rx="16" ry="5" fill="#c9a24a"/><ellipse cx="242" cy="124" rx="18" ry="5" fill="#c9a24a"/><path d="M160 130v52M242 124v58" stroke="#888" stroke-width="2"/>' +
      /* mic stand */
      '<path d="M128 184v-70" stroke="#999" stroke-width="3"/><circle cx="128" cy="110" r="5" fill="#222" stroke="#999" stroke-width="2"/>' +
      /* stage */
      '<rect x="0" y="182" width="400" height="14" fill="#3a2a22"/><rect x="0" y="182" width="400" height="3" fill="' + PINK + '"/>' + crowd +
      '<rect x="0" y="240" width="400" height="20" fill="#0e0a12"/>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e3c3" letter-spacing="2">COVENTRY RD · CLEVELAND HTS</text>',
      '');
  }

  /* 5. E 120th St and Union Ave: KELLS on the brick, the Cleveland script sign behind */
  function mgcorner() {
    const script = '<g><rect x="96" y="70" width="206" height="10" fill="#3a3a44"/>' +
      '<text class="mg-glow" x="199" y="66" text-anchor="middle" font-family="Brush Script MT, Sedgwick Ave Display, cursive" font-style="italic" font-size="40" fill="#fff4c8" stroke="#b07a2a" stroke-width="1.2" paint-order="stroke">Cleveland</text></g>';
    const skyline = '<g fill="#2e2a3e"><rect x="20" y="92" width="40" height="40"/><rect x="66" y="84" width="26" height="48"/><rect x="310" y="88" width="34" height="44"/><rect x="350" y="98" width="40" height="34"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mgs5)"/>' +
      Array.from({ length: 18 }, (_, i) => '<circle cx="' + ((i * 71) % 400) + '" cy="' + ((i * 13) % 40) + '" r="1.1" fill="#fff" opacity=".6"/>').join("") +
      skyline + script +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3a2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#64301f" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#64301f" stroke-width="1"/>').join("")).join("") +
      tag("KELLS", 22, 192, 50, PINK, -6) + tag("EST", 30, 218, 20, BONE, -3) + tag("LACE UP", 92, 218, 18, YEL, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5a5753"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(252, 98, 140, "Union Ave") + sign(270, 124, 104, "E 120 St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="mg-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="mg-sp"><circle cx="236" cy="166" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="mg-sp mg-sp2"><circle cx="242" cy="160" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("mgs5", "#141a3a", "#a05a7a"));
  }

  window.SCENES = { mgstation: mgstation, mgrock: mgrock, mgflats: mgflats, mggrog: mggrog, mgcorner: mgcorner };
})();
