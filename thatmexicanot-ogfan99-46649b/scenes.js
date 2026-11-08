/* thatmexicanot scenes (Regions tab: Houston + Texas; Bay City, TX, "Dirty Bay"). CSS classes and ids prefixed ot- (the page's own anim-train is kept).
   1 The Bay City intercity bus stop on 7th St (Greyhound/FlixBus stop, 1417 7th St; Bay City has no rail): the coach pulling in, the stop sign, small-town storefronts at dusk.
   2 "Johnny Dang" / "teeth goin' bling-bling": a jeweler's glass counter with a gold grill, iced chains and a star pendant, sparkles (no store name, no logo).
   3 "Matagorda": Matagorda Beach on the Gulf, the jetty rocks, pelicans gliding, waves rolling in at sunset.
   4 "Lonestar Luchador" (his debut album): a wrestling ring under a giant Lone Star banner, a cowboy hat and a luchador mask on the turnbuckle, spotlights sweeping.
   5 7th St and Avenue F in Bay City, by the courthouse square: green signs, OT tagged on the wall, the water tower lit up behind ("underneath the water tower, late night").
   No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes otblink{0%,100%{opacity:.3}50%{opacity:1}}.ot-bl{animation:otblink 1.6s ease-in-out infinite}.ot-bl2{animation-delay:-.8s}' +
    '@keyframes otspark{0%,100%{transform:scale(.2);opacity:0}50%{transform:scale(1);opacity:1}}.ot-sp{transform-box:fill-box;transform-origin:center;animation:otspark 1.8s ease-in-out infinite}.ot-sp2{animation-delay:-.6s}.ot-sp3{animation-delay:-1.2s}' +
    '@keyframes otwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-18px)}}.ot-wave{animation:otwave 3.2s ease-in-out infinite}.ot-wave2{animation-delay:-1.6s}' +
    '@keyframes otbird{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.ot-bird{animation:otbird 11s linear infinite}.ot-bird2{animation-delay:-5s}' +
    '@keyframes otflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.4)}}.ot-flap{transform-box:fill-box;transform-origin:center;animation:otflap .9s ease-in-out infinite}' +
    '@keyframes otbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.ot-beam{transform-box:view-box;animation:otbeam 4s ease-in-out infinite}.ot-beam2{animation-delay:-2s}' +
    '@keyframes otflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.ot-flag{transform-box:fill-box;transform-origin:0 50%;animation:otflag 1.6s ease-in-out infinite}' +
    '@keyframes otflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.ot-flk{animation:otflick 2.4s infinite}' +
    '@keyframes otspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ot-spr{animation:otspray 1.4s ease-out infinite}.ot-spr2{animation-delay:.45s}' +
    '@keyframes otswing{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.ot-swing{transform-box:fill-box;transform-origin:50% 0;animation:otswing 2.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 16) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 16) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "ot-bl" + (i % 2 ? " ot-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 80) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const star = (cx, cy, r, fill, extra) => { let p = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.42 : r; p += (i ? "L" : "M") + (cx + rr * Math.cos(a)).toFixed(1) + " " + (cy + rr * Math.sin(a)).toFixed(1); } return '<path d="' + p + 'z" fill="' + fill + '" ' + (extra || "") + '/>'; };
  const GOLD = "#e8b931", RED = "#c8102e", BLUE = "#1f4e9c", SKYB = "#3a7bd5";
  /* water tower: round tank on four legs with a catwalk, BAY CITY painted on it */
  const tower = (x, base, s, lit) => {
    const tw = 70 * s, th = 40 * s, legH = 90 * s, ty = base - legH - th;
    const legs = [-0.42, -0.16, 0.16, 0.42].map(f => '<path d="M' + (x + f * tw * 0.8).toFixed(1) + ' ' + (ty + th).toFixed(1) + 'L' + (x + f * tw * 1.25).toFixed(1) + ' ' + base + '" stroke="' + (lit ? "#8fa3b8" : "#c9d3dc") + '" stroke-width="' + (3 * s).toFixed(1) + '"/>').join("");
    const brace = [0.33, 0.66].map(f => '<path d="M' + (x - tw * 0.36 - f * tw * 0.1).toFixed(1) + ' ' + (ty + th + legH * f).toFixed(1) + 'H' + (x + tw * 0.36 + f * tw * 0.1).toFixed(1) + '" stroke="' + (lit ? "#8fa3b8" : "#c9d3dc") + '" stroke-width="' + (1.4 * s).toFixed(1) + '"/>').join("");
    return '<g>' + legs + brace +
      '<rect x="' + (x - 4 * s).toFixed(1) + '" y="' + (ty + th).toFixed(1) + '" width="' + (8 * s).toFixed(1) + '" height="' + legH.toFixed(1) + '" fill="' + (lit ? "#7c90a6" : "#b8c4cf") + '"/>' +
      '<ellipse cx="' + x + '" cy="' + (ty + th / 2).toFixed(1) + '" rx="' + (tw / 2).toFixed(1) + '" ry="' + (th / 2).toFixed(1) + '" fill="' + (lit ? "#9fc8e8" : "#cfe3f2") + '" stroke="#6f8aa3" stroke-width="' + (1.5 * s).toFixed(1) + '"/>' +
      '<path d="M' + (x - tw / 2 - 3 * s).toFixed(1) + ' ' + (ty + th * 0.78).toFixed(1) + 'h' + (tw + 6 * s).toFixed(1) + '" stroke="#5d7690" stroke-width="' + (2 * s).toFixed(1) + '"/>' +
      '<path d="M' + (x - 6 * s).toFixed(1) + ' ' + ty.toFixed(1) + 'q' + (6 * s).toFixed(1) + ' ' + (-12 * s).toFixed(1) + ' ' + (12 * s).toFixed(1) + ' 0" fill="#8fb4d4"/>' +
      '<text x="' + x + '" y="' + (ty + th * 0.6).toFixed(1) + '" text-anchor="middle" ' + font + ' font-size="' + (10 * s).toFixed(1) + '" fill="#1d3b5c">BAY CITY</text>' +
      '<circle class="ot-bl" cx="' + x + '" cy="' + (ty - 9 * s).toFixed(1) + '" r="' + (2.4 * s).toFixed(1) + '" fill="#ff3b3b"/></g>';
  };

  /* 1. The intercity bus stop on 7th St, Bay City */
  function otstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (62 + i * 38) + '" y="122" width="30" height="22" rx="3" fill="#1a2733"/>').join("");
    const bus = '<g class="anim-train"><path d="M30 188V118q0 -10 10 -10h300q20 0 26 22l6 58z" fill="#e9ecef" stroke="#7b848c" stroke-width="2"/>' + win +
      '<path d="M336 112q24 4 30 34h-30z" fill="#1a2733"/>' +
      '<rect x="30" y="150" width="342" height="8" fill="' + BLUE + '"/><rect x="30" y="160" width="342" height="3" fill="' + RED + '"/>' +
      '<rect x="44" y="164" width="40" height="18" rx="2" fill="#cfd4d9" stroke="#9aa1a8"/><rect x="250" y="164" width="40" height="18" rx="2" fill="#cfd4d9" stroke="#9aa1a8"/>' +
      '<rect x="40" y="111" width="96" height="10" rx="2" fill="#111"/><text x="88" y="119" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">HOUSTON · BAY CITY</text>' +
      '<circle cx="362" cy="178" r="3.5" fill="#fff6c2"/><circle cx="96" cy="190" r="10" fill="#222"/><circle cx="96" cy="190" r="4" fill="#777"/><circle cx="306" cy="190" r="10" fill="#222"/><circle cx="306" cy="190" r="4" fill="#777"/></g>';
    const shop = (x, w, h, c, awn) => '<rect x="' + x + '" y="' + (106 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><rect x="' + x + '" y="' + (106 - h) + '" width="' + w + '" height="5" fill="#00000033"/>' +
      '<path d="M' + x + ' ' + (86) + 'h' + w + 'l-4 8H' + (x + 4) + 'z" fill="' + awn + '"/>' +
      [0, 1, 2].map(i => '<rect x="' + (x + 6 + i * (w - 12) / 3) + '" y="' + (106 - h + 12) + '" width="' + ((w - 12) / 3 - 4) + '" height="12" fill="#ffd98a" opacity=".85" class="' + (i === 1 ? "ot-flk" : "") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ots1)"/>' + stars(8) +
      '<path d="M0 106h400" stroke="#3b2a20" stroke-width="2"/>' +
      shop(0, 90, 50, "#9a5b3c", RED) + shop(96, 70, 40, "#c7a46a", "#2f6b4f") + shop(172, 110, 58, "#7d4a3a", BLUE) + shop(288, 112, 46, "#b98a5a", RED) +
      '<g><rect x="376" y="20" width="3" height="66" fill="#444"/><g class="ot-flag"><rect x="379" y="22" width="20" height="14" fill="#fff"/><rect x="379" y="29" width="20" height="7" fill="' + RED + '"/><rect x="379" y="22" width="7" height="14" fill="' + BLUE + '"/>' + star(382.5, 29, 2.6, "#fff") + '</g></g>' +
      '<rect x="0" y="106" width="400" height="88" fill="#3d4148"/>' +
      bus +
      '<rect x="0" y="194" width="400" height="8" fill="#c9c2b4"/><rect x="0" y="202" width="400" height="58" fill="#aaa294"/><path d="M0 230h400" stroke="#958d7f" stroke-width="2"/>' +
      '<rect x="20" y="130" width="4" height="80" fill="#2b2b2b"/><circle class="ot-flk" cx="22" cy="128" r="6" fill="#ffe9a8"/>' +
      '<rect x="60" y="206" width="280" height="40" rx="3" fill="#111"/><text x="76" y="225" ' + font + ' font-size="17" fill="#fff">BAY CITY, TX</text><text x="76" y="239" ' + font + ' font-size="9" fill="#bfc6cc">7TH ST · INTERCITY BUS STOP</text>' + badge(262, 225, "BUS", BLUE),
      sky("ots1", "#2a2b5a", "#f39a5b"));
  }

  /* 2. Gold grill and iced chains in the jeweler's counter */
  function otgrill() {
    const teeth = Array.from({ length: 8 }, (_, i) => { const x = 132 + i * 17, dy = Math.abs(i - 3.5) * 2.2; return '<rect x="' + x + '" y="' + (112 + dy).toFixed(1) + '" width="15" height="' + (24 - dy).toFixed(1) + '" rx="3" fill="url(#otg)" stroke="#8a6410" stroke-width="1"/>'; }).join("") +
      [2, 5].map(i => '<circle cx="' + (139.5 + i * 17) + '" cy="' + (124 + Math.abs(i - 3.5) * 1.1).toFixed(1) + '" r="3.2" fill="#eaf6ff" stroke="#9fc8e8"/>').join("");
    const chain = (y0, sag, n, r) => Array.from({ length: n }, (_, i) => { const t = i / (n - 1), x = 50 + t * 300, y = y0 + Math.sin(t * Math.PI) * sag; return '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + r + '" fill="#f4f8ff" stroke="#9fb6cc" stroke-width="1"/>'; }).join("");
    const spark = (x, y, cls) => '<path class="ot-sp ' + cls + '" d="M' + x + ' ' + (y - 7) + 'L' + (x + 1.6) + ' ' + (y - 1.6) + 'L' + (x + 7) + ' ' + y + 'L' + (x + 1.6) + ' ' + (y + 1.6) + 'L' + x + ' ' + (y + 7) + 'L' + (x - 1.6) + ' ' + (y + 1.6) + 'L' + (x - 7) + ' ' + y + 'L' + (x - 1.6) + ' ' + (y - 1.6) + 'z" fill="#fff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ots2)"/>' +
      '<rect x="110" y="18" width="180" height="30" rx="6" fill="#140c12" stroke="#ff4fa3" stroke-width="2"/><text class="ot-flk" x="200" y="39" text-anchor="middle" ' + font + ' font-size="15" fill="#ff7cc0">GRILLS · CHAINS · ICE</text>' +
      '<path d="M20 70h360l20 120H0z" fill="#1a1a22"/><path d="M28 76h344l16 106H12z" fill="#2a2633" stroke="#c9a24a" stroke-width="2"/>' +
      '<path d="M28 76h344l16 106H12z" fill="url(#otglass)" opacity=".35"/>' +
      '<path d="M120 104q80 -16 160 0v40q-80 14 -160 0z" fill="#3a1020" stroke="#5a1e30"/>' + teeth +
      chain(84, 14, 34, 3.2) + chain(150, 18, 40, 2.6) +
      '<g transform="translate(200 172)">' + star(0, 0, 13, "#f4f8ff", 'stroke="#9fb6cc" stroke-width="1.2"') + '</g>' +
      '<rect x="0" y="190" width="400" height="70" fill="#3b2418"/><rect x="0" y="190" width="400" height="6" fill="#c9a24a"/>' +
      spark(150, 112, "") + spark(260, 118, "ot-sp2") + spark(90, 90, "ot-sp3") + spark(320, 156, "") + spark(210, 166, "ot-sp2") + spark(60, 150, "ot-sp3"),
      sky("ots2", "#2b0f24", "#0d0a12") + '<linearGradient id="otg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff0a8"/><stop offset=".5" stop-color="' + GOLD + '"/><stop offset="1" stop-color="#a87a14"/></linearGradient>' +
      '<linearGradient id="otglass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".6"/><stop offset=".4" stop-color="#fff" stop-opacity="0"/></linearGradient>');
  }

  /* 3. Matagorda Beach, the jetty and pelicans at sunset */
  function otbeach() {
    const rocks = Array.from({ length: 12 }, (_, i) => '<ellipse cx="' + (240 + i * 14) + '" cy="' + (150 - i * 1.5) + '" rx="11" ry="7" fill="' + (i % 2 ? "#5c5650" : "#6e6760") + '"/>').join("");
    const pelican = (y, cls) => '<g class="ot-bird ' + cls + '"><g class="ot-flap"><path d="M0 ' + y + 'q12 -8 24 0q12 -8 24 0" stroke="#2a2a2a" stroke-width="3" fill="none"/></g><path d="M22 ' + (y + 1) + 'l14 3" stroke="#d99a2b" stroke-width="2.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ots3)"/>' +
      '<circle cx="120" cy="120" r="34" fill="#ffd25a" opacity=".95"/>' +
      '<rect x="0" y="132" width="400" height="60" fill="#2f7f93"/><path d="M60 140h120" stroke="#ffd25a" stroke-width="3" opacity=".6"/><path d="M80 150h80" stroke="#ffd25a" stroke-width="2" opacity=".5"/>' +
      rocks +
      '<g class="ot-wave"><path d="M-20 168q25 -10 50 0t50 0t50 0t50 0t50 0t50 0t50 0t50 0t50 0" stroke="#e9f6f8" stroke-width="3" fill="none"/></g>' +
      '<g class="ot-wave ot-wave2"><path d="M-20 182q25 -8 50 0t50 0t50 0t50 0t50 0t50 0t50 0t50 0t50 0" stroke="#d6eef2" stroke-width="2.5" fill="none"/></g>' +
      '<path d="M0 190q100 -8 200 0t200 0V260H0z" fill="#e6cf9e"/><path d="M0 214q120 -6 240 2t160 -2" stroke="#d2b882" stroke-width="2" fill="none"/>' +
      '<rect x="40" y="196" width="4" height="40" fill="#6b4a2a"/><rect x="6" y="186" width="124" height="22" rx="2" fill="#7a5532" stroke="#4a301a"/><text x="68" y="201" text-anchor="middle" ' + font + ' font-size="10" fill="#f6e7c8">MATAGORDA BEACH</text>' +
      pelican(60, "") + pelican(84, "ot-bird2"),
      sky("ots3", "#6a3f8f", "#ff9b5a"));
  }

  /* 4. Lonestar Luchador: the ring under the Lone Star */
  function otring() {
    const rope = (y, c) => '<path d="M70 ' + y + 'H330" stroke="' + c + '" stroke-width="4"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ots4)"/>' +
      '<g class="ot-beam"><path d="M90 0L40 200h100z" fill="#fff" opacity=".08"/></g><g class="ot-beam ot-beam2"><path d="M310 0L260 200h100z" fill="#fff" opacity=".08"/></g>' +
      '<rect x="110" y="14" width="180" height="66" fill="' + BLUE + '"/><rect x="170" y="14" width="120" height="33" fill="#fff"/><rect x="170" y="47" width="120" height="33" fill="' + RED + '"/>' +
      '<rect x="110" y="14" width="60" height="66" fill="' + BLUE + '"/>' + star(140, 47, 20, "#fff") +
      '<text x="200" y="98" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '" letter-spacing="2">LONESTAR LUCHADOR</text>' +
      '<path d="M40 200L70 120h260l30 80z" fill="#e8e2d4"/><path d="M40 200h320v26H40z" fill="#1b1b22"/><text x="200" y="218" text-anchor="middle" ' + font + ' font-size="11" fill="#e8b931">DIRTY BAY · TEXAS</text>' +
      '<rect x="66" y="104" width="8" height="98" fill="#bbb"/><rect x="326" y="104" width="8" height="98" fill="#bbb"/>' +
      rope(118, RED) + rope(136, "#fff") + rope(154, SKYB) +
      '<g class="ot-swing"><path d="M330 104h-0" /><ellipse cx="330" cy="98" rx="20" ry="5" fill="#8a5a2a"/><path d="M318 98q0 -18 12 -18t12 18z" fill="#a8703a"/></g>' +
      '<g transform="translate(72 106)"><path d="M-12 0q0 -14 12 -14t12 14v8q-12 6 -24 0z" fill="' + RED + '" stroke="' + GOLD + '" stroke-width="1.5"/><path d="M-8 -4l5 2M8 -4l-5 2" stroke="#fff" stroke-width="2"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#0d0d12"/>' + Array.from({ length: 22 }, (_, i) => '<circle class="' + (i % 4 ? "" : "ot-bl") + '" cx="' + (10 + i * 18) + '" cy="' + (238 + (i % 2) * 8) + '" r="6" fill="#1f1f2a"/>').join("") +
      '<circle class="ot-bl" cx="30" cy="236" r="1.6" fill="#fff"/><circle class="ot-bl ot-bl2" cx="300" cy="242" r="1.6" fill="#fff"/>',
      sky("ots4", "#0c0f24", "#2a1030"));
  }

  /* 5. 7th St and Avenue F, Bay City, the water tower behind */
  function otcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ots5)"/>' + stars(14) +
      '<g fill="#232842"><rect x="10" y="104" width="40" height="26"/><rect x="56" y="96" width="30" height="34"/><rect x="300" y="100" width="44" height="30"/><rect x="350" y="108" width="40" height="22"/></g>' +
      tower(200, 130, 0.95, true) +
      '<rect x="0" y="126" width="400" height="98" fill="#b86a4a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#9e573b" stroke-width="1"/>').join("") +
      '<rect x="0" y="126" width="400" height="6" fill="#7a3f2a"/>' +
      tag("OT", 30, 196, 66, GOLD, -6) + tag("DIRTY BAY", 120, 182, 30, RED, -5) + tag("RIGHT ON", 128, 212, 22, "#fff", -3) + tag("VIRGIL", 20, 218, 16, SKYB, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(264, 98, 134, "7th St") + sign(264, 124, 134, "Avenue F") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="ot-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="ot-spr"><circle cx="232" cy="178" r="3" fill="' + RED + '" opacity=".7"/></g><g class="ot-spr ot-spr2"><circle cx="238" cy="172" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("ots5", "#0f1230", "#6a3a5a"));
  }

  window.SCENES = { otstation: otstation, otgrill: otgrill, otbeach: otbeach, otring: otring, otcorner: otcorner };
})();
