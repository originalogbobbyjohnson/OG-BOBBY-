/* masterp scenes (Regions tab: New Orleans; the Calliope projects (B.W. Cooper), 3rd Ward, Uptown - where Master P grew up). CSS classes and ids prefixed mp- (the page's own anim-train is kept).
   1 S Claiborne Av / Earhart Blvd on RTA bus route 16 (S. Claiborne): the bus pulls in under the Pontchartrain Expressway, the Calliope's new brick townhouses behind.
   2 The Richmond, CA record store where No Limit started ("Records & Tapes"): cassettes in the window, the OPEN sign flickering, a reel turning.
   3 The Ice Cream Man: an ice cream truck rolling down a 3rd Ward block of shotgun houses, music notes floating.
   4 The pro court (he played NBA preseason ball): the ball arcing in under the arena lights.
   5 Earhart Blvd and S Dorgenois St (the old Calliope edge): green signs, MASTER P tagged on the brick, the Art Deco Charity Hospital tower behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mpflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.mp-flk{animation:mpflick 2.2s infinite}.mp-flk2{animation-delay:.8s}' +
    '@keyframes mpcars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.mp-car{animation:mpcars 6s linear infinite}.mp-car2{animation-delay:-3s}' +
    '@keyframes mpspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.mp-spin{transform-box:fill-box;transform-origin:50% 50%;animation:mpspin 2s linear infinite}' +
    '@keyframes mptruck{0%{transform:translateX(-170px)}100%{transform:translateX(420px)}}.mp-truck{animation:mptruck 12s linear infinite;animation-delay:-5s}' +
    '@keyframes mpnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-40px);opacity:0}}.mp-note{animation:mpnote 2s ease-out infinite}.mp-note2{animation-delay:-1s}' +
    '@keyframes mpball{0%{transform:translate(0,0)}50%{transform:translate(110px,-70px)}100%{transform:translate(220px,-20px)}}.mp-ball{animation:mpball 2.4s ease-in-out infinite;animation-delay:-.9s}' +
    '@keyframes mpblink{0%,100%{opacity:.3}50%{opacity:1}}.mp-bl{animation:mpblink 1.2s ease-in-out infinite}.mp-bl2{animation-delay:-.6s}' +
    '@keyframes mpspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mp-sp{animation:mpspray 1.4s ease-out infinite}.mp-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GOLD = "#f5c518", ARMY = "#7a9a3a", SILV = "#d0d0d0";
  const shotgun = (x, y, c, t) => '<g><rect x="' + x + '" y="' + y + '" width="44" height="50" fill="' + c + '"/><path d="M' + (x - 3) + ' ' + y + 'l25 -18l25 18z" fill="#5a4038"/>' +
    '<rect x="' + (x + 6) + '" y="' + (y + 12) + '" width="10" height="20" fill="' + t + '"/><rect x="' + (x + 28) + '" y="' + (y + 12) + '" width="10" height="20" fill="' + t + '"/><rect x="' + (x + 18) + '" y="' + (y + 22) + '" width="8" height="28" fill="#3a2a22"/>' +
    '<rect x="' + (x - 2) + '" y="' + (y + 48) + '" width="48" height="4" fill="#ddd"/></g>';

  /* 1. S Claiborne Av / Earhart Blvd, RTA bus 16 under the expressway */
  function mpstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 36) + '" y="146" width="28" height="22" rx="2" fill="#1d2a36"/>').join("");
    const bus = '<g class="anim-train"><rect x="60" y="136" width="268" height="72" rx="10" fill="#f2f4f6" stroke="#2a3440" stroke-width="2"/>' + win +
      '<rect x="296" y="142" width="30" height="40" rx="4" fill="#1d2a36"/><rect x="60" y="174" width="268" height="8" fill="#1e5aa8"/><rect x="60" y="182" width="268" height="5" fill="#c62828"/>' +
      '<rect x="262" y="126" width="64" height="10" rx="2" fill="#111"/><text x="294" y="134" text-anchor="middle" ' + font + ' font-size="7" fill="#ffd36a">16 S. CLAIBORNE</text>' +
      '<circle cx="104" cy="210" r="11" fill="#1c1c1c"/><circle cx="104" cy="210" r="4" fill="#888"/><circle cx="280" cy="210" r="11" fill="#1c1c1c"/><circle cx="280" cy="210" r="4" fill="#888"/><rect x="322" y="188" width="6" height="8" rx="1" fill="#ffe08a"/></g>';
    const brick = (x, y) => '<g><rect x="' + x + '" y="' + y + '" width="70" height="56" fill="#9a4e3a"/><path d="M' + (x - 4) + ' ' + y + 'h78v-6h-78z" fill="#5a3a30"/>' +
      [8, 30, 52].map(k => '<rect x="' + (x + k) + '" y="' + (y + 10) + '" width="10" height="14" fill="#ffe9a8" class="mp-flk"/>').join("") + '<rect x="' + (x + 6) + '" y="' + (y + 32) + '" width="58" height="3" fill="#eee"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mps1)"/>' +
      brick(0, 96) + brick(80, 96) + brick(160, 96) + brick(240, 96) + brick(320, 96) +
      '<rect x="0" y="62" width="400" height="20" fill="#9a9a96"/><rect x="0" y="80" width="400" height="6" fill="#6e6e6a"/>' +
      '<g class="mp-car"><rect x="0" y="52" width="40" height="12" rx="3" fill="#c0392b"/></g><g class="mp-car mp-car2"><rect x="0" y="52" width="34" height="12" rx="3" fill="#2e86c1"/></g>' +
      [30, 150, 270, 380].map(x => '<rect x="' + (x - 9) + '" y="86" width="18" height="122" fill="#b4b2aa"/><rect x="' + (x - 13) + '" y="84" width="26" height="6" fill="#8e8c86"/>').join("") +
      '<rect x="0" y="206" width="400" height="10" fill="#bdb6aa"/><rect x="0" y="216" width="400" height="44" fill="#3a3a3e"/><path d="M0 242h400" stroke="#d9c45a" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="358" y="120" width="5" height="96" fill="#2f2f2f"/><rect x="340" y="118" width="44" height="44" rx="3" fill="#111" stroke="#fff" stroke-width="1"/>' +
      '<circle cx="362" cy="134" r="11" fill="#c62828"/><text x="362" y="138.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">16</text><text x="362" y="156" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">RTA BUS</text>' +
      '<rect x="8" y="10" width="236" height="40" rx="3" fill="#111" stroke="#e8e8e8" stroke-width="1.5"/>' +
      '<text x="20" y="28" ' + font + ' font-size="14" fill="#fff">S CLAIBORNE AV</text><text x="20" y="44" ' + font + ' font-size="11" fill="#cfd8dc">at Earhart Blvd  •  3rd Ward</text>' +
      '<circle cx="222" cy="30" r="12" fill="#c62828"/><text x="222" y="34.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">16</text>',
      sky("mps1", "#1c2238", "#c9785a"));
  }

  /* 2. Richmond, CA record store */
  function mpstore() {
    const tapes = Array.from({ length: 12 }, (_, i) => { const x = 74 + (i % 6) * 26, y = 128 + Math.floor(i / 6) * 24; return '<rect x="' + x + '" y="' + y + '" width="22" height="15" rx="2" fill="' + ["#f5c518", "#e74c3c", "#3498db", "#ecf0f1", "#9b59b6", "#2ecc71"][i % 6] + '"/><rect x="' + (x + 4) + '" y="' + (y + 5) + '" width="14" height="5" fill="#222"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mps2)"/>' +
      '<path d="M0 120q60 -40 120 -20t120 -10t160 -10v40h-400z" fill="#8a9a7a" opacity=".7"/>' +
      '<rect x="40" y="70" width="320" height="140" fill="#d8c9a8"/><rect x="40" y="62" width="320" height="10" fill="#7a5a3a"/>' +
      '<rect x="56" y="76" width="288" height="28" fill="#1a1a1a"/><text x="200" y="96" text-anchor="middle" ' + font + ' font-size="17" fill="' + GOLD + '">RECORDS &amp; TAPES</text>' +
      '<rect x="64" y="116" width="170" height="64" fill="#2a3a46" stroke="#7a5a3a" stroke-width="3"/>' + tapes +
      '<rect x="248" y="116" width="54" height="94" fill="#3a2a22" stroke="#7a5a3a" stroke-width="3"/><circle cx="292" cy="166" r="3" fill="' + GOLD + '"/>' +
      '<rect x="310" y="122" width="40" height="18" rx="3" fill="#111"/><text class="mp-flk" x="330" y="135" text-anchor="middle" ' + font + ' font-size="10" fill="#ff4d6d">OPEN</text>' +
      '<g transform="translate(320 160)"><circle class="mp-spin" cx="10" cy="10" r="10" fill="#222" stroke="' + SILV + '" stroke-width="2"/><path class="mp-spin" d="M10 2v16M2 10h16" stroke="' + SILV + '" stroke-width="2"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#a9a59c"/><rect x="0" y="208" width="400" height="4" fill="#e6e1d6"/>' +
      '<rect x="10" y="150" width="20" height="60" fill="#0f6b3a"/><text x="20" y="180" text-anchor="middle" ' + font + ' font-size="7" fill="#fff" transform="rotate(-90 20 180)">RICHMOND, CA</text>',
      sky("mps2", "#7ec4ef", "#f6e6b8"));
  }

  /* 3. the Ice Cream Man truck in the 3rd Ward */
  function mptruck() {
    const truck = '<g class="mp-truck"><rect x="0" y="140" width="120" height="58" rx="6" fill="#fdfdfb" stroke="#555" stroke-width="2"/><path d="M120 158h26l18 20v20h-44z" fill="#fdfdfb" stroke="#555" stroke-width="2"/>' +
      '<path d="M126 162h18l12 14h-30z" fill="#1d2a36"/><rect x="10" y="150" width="60" height="26" fill="#1d2a36"/><rect x="10" y="176" width="60" height="4" fill="' + GOLD + '"/>' +
      '<text x="84" y="192" text-anchor="middle" ' + font + ' font-size="10" fill="#d23c5a">ICE CREAM</text>' +
      '<g transform="translate(84 148)"><path d="M6 24l6 -16h-12z" fill="#d9a35a"/><circle cx="6" cy="8" r="7" fill="#ff9ec4"/></g>' +
      '<circle cx="30" cy="200" r="11" fill="#1c1c1c"/><circle cx="30" cy="200" r="4" fill="#888"/><circle cx="138" cy="200" r="11" fill="#1c1c1c"/><circle cx="138" cy="200" r="4" fill="#888"/>' +
      '<text class="mp-note" x="40" y="136" ' + font + ' font-size="16" fill="' + GOLD + '">&#9834;</text><text class="mp-note mp-note2" x="76" y="132" ' + font + ' font-size="14" fill="' + GOLD + '">&#9835;</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mps3)"/>' +
      shotgun(8, 108, "#e8b04a", "#2a3a46") + shotgun(64, 108, "#7fb3d5", "#2a3a46") + shotgun(120, 108, "#c0392b", "#2a3a46") + shotgun(176, 108, "#f4efe6", "#2a3a46") +
      shotgun(232, 108, "#8bc34a", "#2a3a46") + shotgun(288, 108, "#b39ddb", "#2a3a46") + shotgun(344, 108, "#e8b04a", "#2a3a46") +
      '<rect x="0" y="160" width="400" height="10" fill="#bdb6aa"/><rect x="0" y="170" width="400" height="90" fill="#3d3d40"/><path d="M0 230h400" stroke="#d9c45a" stroke-width="3" stroke-dasharray="20 14"/>' +
      truck,
      sky("mps3", "#ffb26b", "#ffe6a8"));
  }

  /* 4. the pro court */
  function mpcourt() {
    const lights = Array.from({ length: 8 }, (_, i) => '<circle class="mp-bl' + (i % 2 ? " mp-bl2" : "") + '" cx="' + (30 + i * 48) + '" cy="18" r="6" fill="#fff6c8"/>').join("");
    const crowd = Array.from({ length: 60 }, (_, i) => '<circle cx="' + (6 + (i % 30) * 13.4) + '" cy="' + (60 + Math.floor(i / 30) * 16) + '" r="5" fill="' + ["#4a3a5a", "#5a4a3a", "#3a4a5a"][i % 3] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#14121c"/>' + lights +
      '<rect x="0" y="40" width="400" height="60" fill="#221e2c"/>' + crowd +
      '<rect x="0" y="100" width="400" height="160" fill="#c8924e"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M0 ' + (106 + i * 11) + 'h400" stroke="#b07c3e" stroke-width="1"/>').join("") +
      '<path d="M220 260q0 -110 180 -110" stroke="#fff" stroke-width="3" fill="none"/><rect x="300" y="160" width="100" height="100" fill="#8a3a2a" opacity=".55"/>' +
      '<rect x="356" y="40" width="8" height="140" fill="#888"/><rect x="316" y="44" width="56" height="40" fill="#f4f4f4" stroke="#333" stroke-width="2"/><rect x="332" y="60" width="24" height="18" fill="none" stroke="#e74c3c" stroke-width="2"/>' +
      '<ellipse cx="330" cy="88" rx="16" ry="4" fill="none" stroke="#ff6a1a" stroke-width="3"/><path d="M316 90l6 18M344 90l-6 18M322 90l8 18M338 90l-8 18" stroke="#fff" stroke-width="1.2"/>' +
      '<g class="mp-ball"><circle cx="100" cy="150" r="10" fill="#e8742a" stroke="#5a2a10" stroke-width="1.5"/><path d="M90 150h20M100 140v20" stroke="#5a2a10" stroke-width="1.2"/></g>' +
      '<rect x="20" y="210" width="120" height="30" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/><text x="80" y="230" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">HOME  88 : 86</text>');
  }

  /* 5. Earhart Blvd and S Dorgenois St */
  function mpcorner() {
    const charity = '<g><rect x="150" y="34" width="100" height="100" fill="#d9cfb8"/><rect x="170" y="16" width="60" height="22" fill="#e2d9c4"/><rect x="186" y="4" width="28" height="14" fill="#e8e0cc"/>' +
      '<rect x="120" y="66" width="32" height="68" fill="#cfc4ac"/><rect x="248" y="66" width="32" height="68" fill="#cfc4ac"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (160 + i * 15) + '" y="40" width="5" height="92" fill="#b8ad94"/>').join("") +
      Array.from({ length: 15 }, (_, i) => '<rect class="mp-flk' + (i % 3 ? "" : " mp-flk2") + '" x="' + (166 + (i % 5) * 15) + '" y="' + (48 + Math.floor(i / 5) * 26) + '" width="6" height="10" fill="#ffe9a8" opacity=".8"/>').join("") + '</g>' +
      '<g fill="#3a4258"><rect x="60" y="80" width="44" height="54"/><rect x="296" y="76" width="40" height="58"/><rect x="340" y="94" width="30" height="40"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mps5)"/>' + charity +
      '<rect x="0" y="126" width="400" height="98" fill="#8a4a36"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#73392a" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#73392a" stroke-width="1"/>').join("")).join("") +
      tag("MASTER P", 14, 194, 46, GOLD, -6) + tag("NO LIMIT", 30, 220, 20, ARMY, -4) + tag("UHH!", 290, 182, 26, SILV, -8) + tag("3RD WARD", 206, 214, 16, "#ff7a5a", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="370" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(246, 98, 142, "Earhart Blvd") + sign(246, 124, 142, "S Dorgenois St") +
      '<rect x="8" y="116" width="4" height="108" fill="#222"/><circle class="mp-flk" cx="10" cy="114" r="7" fill="#ffe9a8"/>' +
      '<g class="mp-sp"><circle cx="196" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="mp-sp mp-sp2"><circle cx="202" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("mps5", "#1a1e34", "#d88a5a"));
  }

  window.SCENES = { mpstation: mpstation, mpstore: mpstore, mptruck: mptruck, mpcourt: mpcourt, mpcorner: mpcorner };
})();
