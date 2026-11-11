/* baykerblankenship scenes (Regions: MEMPHIS + TENNESSEE; Genres: country; born and raised in Livingston, Overton County, Tennessee, about 15 miles north of Cookeville -
   four years on the high-school fishing team, FFA, pit master at a local barbecue spot, picked up guitar in 2020, local bar gigs, TikTok lives -> "Maxed Out" -> Lone Star/Santa Anna Records 2024).
   CSS classes prefixed bbk- (the page's own anim-train is kept).
   Places: TN 111 north off I-40 at Cookeville into Livingston; Dale Hollow Lake (clear water, limestone bluffs, smallmouth bass country) north of Livingston;
   a small-town barbecue pit; Standing Stone State Park (CCC-era stone and timber, Standing Stone Lake) west of Livingston; Court Square in Livingston with the
   1868 Overton County Courthouse (red brick, white cupola). No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const ORANGE = "#e8833a", CREAM = "#f4ecdc", GREEN = "#3f6b3a", BRICK = "#9a3b2a", GOLD = "#f2c14e";
  const css = '<style>' +
    '@keyframes bbkglow{0%,100%{opacity:.45}50%{opacity:1}}.bbk-glow{animation:bbkglow 2.2s ease-in-out infinite}.bbk-g2{animation-delay:-1.1s}' +
    '@keyframes bbkcloud{0%{transform:translateX(0)}100%{transform:translateX(40px)}}.bbk-cl{animation:bbkcloud 14s ease-in-out infinite alternate}' +
    '@keyframes bbkcar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.bbk-car{animation:bbkcar 7s linear infinite}' +
    '@keyframes bbkboat{0%{transform:translateX(0)}100%{transform:translateX(-170px)}}.bbk-boat{animation:bbkboat 12s ease-in-out infinite alternate}' +
    '@keyframes bbkwave{0%{transform:translateX(0)}100%{transform:translateX(-34px)}}.bbk-wave{animation:bbkwave 3s linear infinite}' +
    '@keyframes bbkjump{0%,55%,100%{transform:translate(0,0) rotate(0);opacity:0}60%{opacity:1}70%{transform:translate(14px,-34px) rotate(-30deg);opacity:1}82%{transform:translate(30px,0) rotate(30deg);opacity:1}86%{opacity:0}}.bbk-fish{transform-box:fill-box;transform-origin:50% 50%;animation:bbkjump 4s ease-in-out infinite}' +
    '@keyframes bbksmoke{0%{transform:translate(0,0) scale(.6);opacity:.8}100%{transform:translate(18px,-90px) scale(1.8);opacity:0}}.bbk-sm{transform-box:fill-box;transform-origin:50% 50%;animation:bbksmoke 3.6s ease-out infinite}.bbk-s2{animation-delay:-1.2s}.bbk-s3{animation-delay:-2.4s}' +
    '@keyframes bbkleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-40px,150px) rotate(300deg)}}.bbk-leaf{animation:bbkleaf 6s linear infinite}.bbk-l2{animation-delay:-2s}.bbk-l3{animation-delay:-4s}' +
    '@keyframes bbknote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(14px,-50px);opacity:0}}.bbk-note{animation:bbknote 2.4s ease-out infinite}.bbk-n2{animation-delay:-.8s}.bbk-n3{animation-delay:-1.6s}' +
    '@keyframes bbkflag{0%,100%{transform:skewY(0)}50%{transform:skewY(5deg)}}.bbk-flag{transform-box:fill-box;transform-origin:0 50%;animation:bbkflag 1.4s ease-in-out infinite}' +
    '@keyframes bbkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bbk-sp{animation:bbkspray 1.4s ease-out infinite}.bbk-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const cap = (txt, y) => '<text x="200" y="' + (y || 252) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  /* Tennessee primary state route marker: white square, black border, black number */
  const tnShield = (x, y, n) => '<g transform="translate(' + x + ' ' + y + ')"><rect x="-18" y="-16" width="36" height="32" rx="2" fill="#fff" stroke="#111" stroke-width="2"/><text x="0" y="7" text-anchor="middle" ' + font + ' font-size="15" fill="#111">' + n + '</text></g>';
  const pickup = (c) => '<rect x="0" y="6" width="74" height="20" rx="4" fill="' + c + '"/><path d="M42 6v-14h18l12 14z" fill="' + c + '"/><path d="M46 4v-9h12l8 9z" fill="#bfe0ee"/>' +
    '<circle cx="16" cy="28" r="7" fill="#222"/><circle cx="16" cy="28" r="3" fill="#aaa"/><circle cx="58" cy="28" r="7" fill="#222"/><circle cx="58" cy="28" r="3" fill="#aaa"/><rect x="70" y="12" width="5" height="4" fill="#ffe9a0" class="bbk-glow"/>';
  const hills = (y, c, amp) => '<path d="M0 ' + y + 'q50 -' + amp + ' 100 -4t100 2t100 -6t100 4V260H0z" fill="' + c + '"/>';
  const tree = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-2" y="0" width="4" height="14" fill="#4a3020"/><circle cx="0" cy="-6" r="10" fill="' + c + '"/><circle cx="-7" cy="0" r="7" fill="' + c + '"/><circle cx="7" cy="0" r="7" fill="' + c + '"/></g>';

  /* ROOM 0: TN 111 north off I-40 at Cookeville, the green guide sign for Livingston, rolling Upper Cumberland hills, a pickup heading home (no rail out here; this is the drive in) */
  function bbkhwy() {
    return svg(
      '<rect width="400" height="260" fill="url(#bbk1)"/>' +
      '<g class="bbk-cl"><ellipse cx="70" cy="30" rx="44" ry="9" fill="#fff" opacity=".55"/><ellipse cx="310" cy="40" rx="50" ry="9" fill="#fff" opacity=".45"/></g>' +
      hills(150, "#6f8f5a", 18) + hills(168, "#557a46", 12) +
      tree(30, 160, 1.1, "#3f6b3a") + tree(60, 166, .9, "#4f7a3f") + tree(360, 158, 1.2, "#3f6b3a") + tree(384, 166, .8, "#5a8a46") +
      '<rect x="0" y="178" width="400" height="82" fill="#3a3a40"/><path d="M0 220h400" stroke="#f0d040" stroke-width="3" stroke-dasharray="20 14"/><path d="M0 180h400" stroke="#fff" stroke-width="2"/>' +
      /* sign on two posts */
      '<rect x="146" y="120" width="5" height="60" fill="#8a8e94"/><rect x="282" y="120" width="5" height="60" fill="#8a8e94"/>' +
      '<rect x="120" y="40" width="190" height="88" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' + tnShield(156, 74, "111") +
      '<text x="184" y="66" ' + font + ' font-size="11" fill="#fff">NORTH</text><text x="184" y="94" ' + font + ' font-size="22" fill="#fff">Livingston</text><text x="184" y="116" ' + font + ' font-size="10" fill="#fff">Byrdstown  ·  Dale Hollow</text>' +
      '<g class="anim-train"><g transform="translate(150 192)">' + pickup(ORANGE) + '</g></g>' +
      '<g class="bbk-car"><rect x="0" y="230" width="40" height="14" rx="3" fill="#2a4a7a"/><circle cx="9" cy="244" r="4" fill="#222"/><circle cx="31" cy="244" r="4" fill="#222"/></g>' +
      cap("I-40 EXIT  ·  TN 111 NORTH  ·  LIVINGSTON, TENNESSEE", 256),
      sky("bbk1", "#8ab8dc", "#f0e6d0"));
  }

  /* ROOM 1: Dale Hollow Lake at first light: clear green water, pale limestone bluffs, a bass boat idling out, a smallmouth jumping (four years on the fishing team) */
  function bbklake() {
    return svg(
      '<rect width="400" height="260" fill="url(#bbk2)"/>' +
      '<circle cx="300" cy="70" r="22" fill="#ffe2a0" class="bbk-glow"/>' +
      /* wooded ridges and limestone bluffs */
      '<path d="M0 112q60 -40 130 -20t140 -10t130 6V140H0z" fill="#4f6f44"/>' +
      '<path d="M0 140V100l30 -6l26 10l14 -4l10 40z" fill="#d8d0bc"/><path d="M8 110h50M6 122h62M10 132h60" stroke="#b8ae96" stroke-width="2"/>' +
      '<path d="M400 140V96l-40 -4l-22 14l-12 34z" fill="#d8d0bc"/><path d="M336 112h58M330 126h66" stroke="#b8ae96" stroke-width="2"/>' +
      [100, 130, 160, 230, 260, 300].map((x, i) => tree(x, 112 - (i % 2) * 4, .8, i % 2 ? "#3f6b3a" : "#557a46")).join("") +
      /* the lake */
      '<rect x="0" y="138" width="400" height="122" fill="#2f8a80"/><rect x="0" y="138" width="400" height="10" fill="#5ab0a4" opacity=".6"/>' +
      '<g class="bbk-wave">' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 34) + ' ' + (160 + (i % 4) * 22) + 'q10 -4 20 0" stroke="#bfeee6" stroke-width="2" fill="none"/>').join("") + '</g>' +
      /* bass boat */
      '<g class="bbk-boat"><g transform="translate(250 168)"><path d="M0 0h96l-14 14h-74z" fill="' + ORANGE + '"/><path d="M0 0h96" stroke="#fff" stroke-width="2"/><rect x="8" y="-8" width="12" height="8" fill="#333"/><rect x="40" y="-10" width="14" height="10" rx="2" fill="#555"/>' +
      '<path d="M70 -2v-30" stroke="#ccc" stroke-width="1.5"/><path d="M70 -32q20 10 34 40" stroke="#ccc" stroke-width="1" fill="none"/></g></g>' +
      /* smallmouth jumping */
      '<g class="bbk-fish"><g transform="translate(110 198)"><path d="M0 0q16 -10 32 0q-16 10 -32 0z" fill="#8a7a3a"/><path d="M32 0l10 -7v14z" fill="#8a7a3a"/><path d="M6 -3l4 6M12 -4l4 8M18 -4l4 8" stroke="#4a3a1a" stroke-width="1.5"/><circle cx="5" cy="-1" r="1.5" fill="#d04a2a"/></g></g>' +
      '<ellipse cx="128" cy="204" rx="16" ry="3" fill="none" stroke="#fff" stroke-width="1.5" opacity=".7"/>' +
      cap("DALE HOLLOW LAKE  ·  FOUR YEARS ON THE FISHING TEAM"),
      sky("bbk2", "#f0b070", "#f8e4c0"));
  }

  /* ROOM 2: the barbecue pit out back: an offset smoker pouring smoke, a split-wood pile, string lights, his acoustic guitar leaning on the picnic table (pit master by day, bar gigs by night) */
  function bbkpit() {
    return svg(
      '<rect width="400" height="260" fill="url(#bbk3)"/>' +
      [[40, 20], [120, 36], [210, 16], [350, 26], [300, 50], [80, 60]].map(s => '<circle cx="' + s[0] + '" cy="' + s[1] + '" r="1.3" fill="#fff"/>').join("") +
      /* tin shed */
      '<rect x="210" y="70" width="190" height="110" fill="#7a5a3a"/><path d="M200 74l100 -26l110 26z" fill="#9aa0a6"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (210 + i * 19) + ' 74v106" stroke="#6a4a2a" stroke-width="1.5"/>').join("") +
      '<rect x="250" y="100" width="60" height="36" fill="#ffd98a" class="bbk-glow"/><path d="M280 100v36M250 118h60" stroke="#5a3a20" stroke-width="3"/>' +
      /* string lights */
      '<path d="M0 60q100 30 200 10t200 -6" stroke="#333" stroke-width="1.5" fill="none"/>' + Array.from({ length: 12 }, (_, i) => '<circle cx="' + (14 + i * 33) + '" cy="' + (66 + Math.sin(i / 1.8) * 6) + '" r="3.5" fill="' + GOLD + '" class="bbk-glow' + (i % 2 ? " bbk-g2" : "") + '"/>').join("") +
      '<rect x="0" y="180" width="400" height="80" fill="#4a3a2a"/>' +
      /* offset smoker */
      '<g transform="translate(40 128)"><rect x="0" y="10" width="110" height="42" rx="20" fill="#2a2a2e"/><rect x="104" y="20" width="44" height="34" rx="4" fill="#232327"/><rect x="10" y="-36" width="12" height="48" fill="#2a2a2e"/>' +
      '<path d="M20 30h80" stroke="#4a4a50" stroke-width="2"/><rect x="50" y="26" width="16" height="4" rx="2" fill="#aaa"/><rect x="112" y="34" width="28" height="12" fill="#ff7a2a" class="bbk-glow"/>' +
      '<path d="M14 52v20M96 52v20" stroke="#2a2a2e" stroke-width="5"/><circle cx="14" cy="74" r="6" fill="#111"/><circle cx="96" cy="74" r="6" fill="#111"/></g>' +
      '<g transform="translate(52 82)"><circle class="bbk-sm" cx="4" cy="0" r="9" fill="#d8d8d8"/><circle class="bbk-sm bbk-s2" cx="2" cy="0" r="9" fill="#cfcfcf"/><circle class="bbk-sm bbk-s3" cx="6" cy="0" r="9" fill="#e0e0e0"/></g>' +
      /* wood pile */
      Array.from({ length: 6 }, (_, i) => '<circle cx="' + (176 + (i % 3) * 14) + '" cy="' + (206 - Math.floor(i / 3) * 12) + '" r="7" fill="#b8864a" stroke="#6a4a2a" stroke-width="2"/>').join("") +
      /* picnic table and guitar */
      '<rect x="250" y="190" width="120" height="8" fill="#a8703a"/><path d="M262 198l-8 30M358 198l8 30" stroke="#8a5a2a" stroke-width="5"/>' +
      '<g transform="translate(330 150) rotate(18)"><ellipse cx="0" cy="40" rx="14" ry="16" fill="#c08a4a"/><ellipse cx="0" cy="22" rx="10" ry="11" fill="#c08a4a"/><circle cx="0" cy="32" r="4" fill="#2a1a10"/><rect x="-2" y="-30" width="4" height="50" fill="#5a3a20"/><rect x="-4" y="-36" width="8" height="8" fill="#3a2a1a"/></g>' +
      '<g fill="' + CREAM + '"><text class="bbk-note" x="300" y="150" font-size="16">&#9834;</text><text class="bbk-note bbk-n2" x="318" y="140" font-size="13">&#9835;</text><text class="bbk-note bbk-n3" x="290" y="132" font-size="12">&#9834;</text></g>' +
      cap("PIT MASTER BY DAY  ·  BAR GIGS BY NIGHT"),
      sky("bbk3", "#141a2e", "#3a2a3a"));
  }

  /* ROOM 3: Standing Stone State Park west of town: the lake under a Tennessee sunset, CCC-era stone-and-timber cabin, fall leaves drifting */
  function bbkpark() {
    return svg(
      '<rect width="400" height="260" fill="url(#bbk4)"/>' +
      '<circle cx="200" cy="120" r="34" fill="#ffcf6a" class="bbk-glow"/>' +
      '<path d="M0 120q70 -36 150 -10t140 -14t110 8V150H0z" fill="#5a3a3a" opacity=".85"/>' +
      [20, 60, 100, 300, 340, 380].map((x, i) => tree(x, 126 - (i % 2) * 6, 1, ["#c8502a", "#e0902a", "#b8342a"][i % 3])).join("") +
      /* lake with sun reflection */
      '<rect x="0" y="146" width="400" height="114" fill="#4a5a7a"/>' + [0, 1, 2, 3, 4].map(i => '<rect x="' + (180 - i * 4) + '" y="' + (152 + i * 10) + '" width="' + (40 + i * 8) + '" height="3" fill="#ffcf6a" opacity="' + (.8 - i * .12) + '"/>').join("") +
      '<g class="bbk-wave">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (200 + (i % 3) * 16) + 'q10 -4 20 0" stroke="#c8d0e0" stroke-width="1.5" fill="none" opacity=".7"/>').join("") + '</g>' +
      /* stone and timber cabin on the shore */
      '<g transform="translate(272 150)"><rect x="0" y="20" width="96" height="40" fill="#8a6a4a"/>' + Array.from({ length: 4 }, (_, r) => '<path d="M0 ' + (28 + r * 9) + 'h96" stroke="#6a4a2a" stroke-width="2"/>').join("") +
      '<path d="M-8 22l56 -26l56 26z" fill="#4a3a2a"/><rect x="70" y="-12" width="14" height="30" fill="#a8a094"/><path d="M70 -4h14M70 6h14" stroke="#7a7468" stroke-width="2"/>' +
      '<rect x="14" y="32" width="16" height="12" fill="#ffd98a" class="bbk-glow"/><rect x="58" y="34" width="16" height="26" fill="#3a2a1a"/></g>' +
      '<path d="M260 210h140v50H260z" fill="#5a4a3a"/>' +
      /* falling leaves */
      '<g class="bbk-leaf"><path d="M60 20q6 -6 10 0q-4 6 -10 0z" fill="#e0902a"/></g><g class="bbk-leaf bbk-l2"><path d="M180 10q6 -6 10 0q-4 6 -10 0z" fill="#c8502a"/></g><g class="bbk-leaf bbk-l3"><path d="M320 16q6 -6 10 0q-4 6 -10 0z" fill="#f2c14e"/></g>' +
      cap("STANDING STONE STATE PARK  ·  A TENNESSEE SUNSET"),
      sky("bbk4", "#5a3a7a", "#f0905a"));
  }

  /* ROOM 4: his corner: Court Square and W Main St in Livingston, brick wall with his name, the 1868 Overton County Courthouse (red brick, white cupola) behind */
  function bbkcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bbk5)"/>' +
      /* courthouse */
      '<g transform="translate(196 38)"><rect x="0" y="50" width="190" height="80" fill="' + BRICK + '"/><path d="M-6 52l101 -26l101 26z" fill="#f4ecdc"/><path d="M10 50l85 -20l85 20" fill="none" stroke="#d8d0c0" stroke-width="2"/>' +
      '<rect x="80" y="2" width="30" height="30" fill="#f4ecdc"/><circle cx="95" cy="17" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/><path d="M95 17v-5M95 17h4" stroke="#333" stroke-width="1.5"/><path d="M76 2l19 -18l19 18z" fill="#8a8e94"/>' +
      '<rect x="0" y="128" width="190" height="4" fill="#d8d0c0"/>' + [14, 44, 74, 104, 134, 164].map(x => '<rect x="' + x + '" y="64" width="14" height="22" fill="#f4ecdc"/><rect x="' + (x + 2) + '" y="66" width="10" height="18" fill="#3a4a5a"/><rect x="' + x + '" y="98" width="14" height="22" fill="#f4ecdc"/><rect x="' + (x + 2) + '" y="100" width="10" height="18" fill="#3a4a5a"/>').join("") +
      '<rect x="134" y="-30" width="2" height="30" fill="#ddd"/><g class="bbk-flag"><g transform="translate(136 -30)"><rect width="24" height="14" fill="#c8302a"/><rect y="4" width="24" height="2" fill="#fff"/><rect y="8" width="24" height="2" fill="#fff"/><rect width="10" height="7" fill="#2a3a7a"/></g></g></g>' +
      '<path d="M0 168h400v92H0z" fill="#3a3a40"/><path d="M0 204h400" stroke="#f0d040" stroke-width="2" stroke-dasharray="16 12"/>' +
      /* brick wall with his name */
      '<rect x="0" y="92" width="182" height="110" fill="#7a3324"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (100 + r * 12) + 'h182" stroke="#5a2018" stroke-width="1.5"/>').join("") +
      tag("BAYKER", 14, 140, 34, ORANGE, -6) + tag("BLANKENSHIP", 8, 180, 22, CREAM, -6) +
      '<circle cx="168" cy="150" r="3" fill="' + ORANGE + '" class="bbk-sp"/><circle cx="174" cy="146" r="2" fill="' + ORANGE + '" class="bbk-sp bbk-sp2"/>' +
      /* sign post */
      '<rect x="230" y="122" width="5" height="86" fill="#8a8e94"/>' + sign(184, 128, 98, "COURT SQ") + sign(182, 152, 102, "W MAIN ST") +
      '<g transform="translate(290 200)">' + pickup(ORANGE) + '</g>' +
      cap("COURT SQ & W MAIN ST  ·  LIVINGSTON, TENNESSEE"),
      sky("bbk5", "#1a2a4a", "#e08a5a"));
  }

  window.SCENES = { bbkhwy, bbklake, bbkpit, bbkpark, bbkcorner };
})();
