/* lilkeke scenes (Regions tab: Houston + Texas; Herschelwood in South Park, the Southside). CSS classes and ids prefixed kk- (the page's own anim-train is kept).
   1 METRO 73 Bellfort bus pulling into the Bellfort @ Mykawa stop by Herschelwood: the wide boulevard, live oaks, a low strip of shops, the bus-stop sign with the 73.
   2 The tape shop on W Fuqua where the Screwed Up Click's tapes were sold: a low brick storefront, a big gray cassette in the window, tape reels turning, cars lined up out front.
   3 The slab line ("I fell in love with that parking lot ... red cars and them blue cars"): candy cars parked at night, trunks lifting open with neon lettering, the lot lights flickering.
   4 Legend Hotel ("resort style ... waterfalls and pretty lights ... catch a whole vibe in that fire pit"): a backyard pool at night with a waterfall, a fire pit, string lights.
   5 Herschelwood St and Westover St: green signs, LIL KEKE tagged on the wall, the 610 South Loop overpass behind with a candy slab gliding across. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kkflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.kk-flk{animation:kkflick 2.2s infinite}.kk-flk2{animation-delay:.8s}' +
    '@keyframes kkspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.kk-reel{transform-box:fill-box;transform-origin:50% 50%;animation:kkspin 1.6s linear infinite}' +
    '@keyframes kktrunk{0%,30%{transform:rotate(0)}55%,85%{transform:rotate(-38deg)}100%{transform:rotate(0)}}.kk-trunk{transform-box:fill-box;transform-origin:0% 100%;animation:kktrunk 4s ease-in-out infinite}.kk-trunk2{animation-delay:-1.3s}.kk-trunk3{animation-delay:-2.6s}' +
    '@keyframes kkfall{from{transform:translateY(-10px)}to{transform:translateY(10px)}}.kk-fall{animation:kkfall .5s linear infinite}' +
    '@keyframes kkfire{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.25)}}.kk-fire{transform-box:fill-box;transform-origin:50% 100%;animation:kkfire .7s ease-in-out infinite}.kk-fire2{animation-delay:-.35s}' +
    '@keyframes kkwave{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}.kk-wave{animation:kkwave 2s ease-in-out infinite}' +
    '@keyframes kkslab{from{transform:translateX(-160px)}to{transform:translateX(560px)}}.kk-slab{animation:kkslab 7s linear infinite}' +
    '@keyframes kkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kk-sp{animation:kkspray 1.4s ease-out infinite}.kk-sp2{animation-delay:.45s}' +
    '@keyframes kkleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.kk-leaf{transform-box:fill-box;transform-origin:50% 100%;animation:kkleaf 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 89) % 400) + '" cy="' + (6 + (i * 47) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const METRO = "#1f4e79", RED = "#ff3b3b", CYAN = "#3fd0ff", LIME = "#9bff5a", GOLD = "#ffd23f";
  const oak = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-5" y="0" width="10" height="44" fill="#5b4632"/><path d="M-5 12l-18 -10M5 10l18 -12" stroke="#5b4632" stroke-width="5"/><g class="kk-leaf"><ellipse cx="0" cy="-8" rx="44" ry="22" fill="#3f6b35"/><ellipse cx="-22" cy="-16" rx="22" ry="14" fill="#4d7d40"/><ellipse cx="22" cy="-14" rx="20" ry="12" fill="#4d7d40"/></g></g>';
  const slabCar = (c) => '<rect x="0" y="10" width="124" height="22" rx="6" fill="' + c + '"/><path d="M22 10l14 -14h48l16 14z" fill="' + c + '"/><path d="M40 -2h40l10 10h-56z" fill="#cfe9ff" opacity=".7"/>' +
    '<path d="M4 18h116" stroke="#fff" stroke-width="2" opacity=".35"/>' + [26, 98].map(x => '<g><circle cx="' + x + '" cy="34" r="10" fill="#cfd5db" stroke="#222" stroke-width="3"/><path d="M' + x + ' 34l-18 0" stroke="#eef2f5" stroke-width="3"/></g>').join("");

  /* 1. METRO 73 Bellfort, Bellfort @ Mykawa */
  function kkstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (62 + i * 36) + '" y="146" width="30" height="22" rx="3" fill="#1d2833"/>').join("");
    const bus = '<g class="anim-train"><rect x="28" y="136" width="318" height="70" rx="10" fill="#f4f5f3" stroke="#8f979e" stroke-width="2"/>' + win +
      '<rect x="34" y="146" width="22" height="48" rx="2" fill="#1d2833"/><rect x="28" y="176" width="318" height="8" fill="' + METRO + '"/><rect x="28" y="186" width="318" height="3" fill="#e31837"/>' +
      '<rect x="32" y="138" width="110" height="10" rx="2" fill="#111"/><text x="87" y="146" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">73 BELLFORT</text>' +
      '<circle cx="80" cy="208" r="12" fill="#222"/><circle cx="80" cy="208" r="5" fill="#9aa1a8"/><circle cx="294" cy="208" r="12" fill="#222"/><circle cx="294" cy="208" r="5" fill="#9aa1a8"/>' +
      '<circle cx="32" cy="196" r="3.5" fill="#fff6c2"/></g>';
    const strip = '<rect x="90" y="88" width="230" height="44" fill="#d9c7a6"/><rect x="90" y="82" width="230" height="8" fill="#a8865c"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (98 + i * 56) + '" y="96" width="46" height="30" fill="#3f4a56"/><rect x="' + (98 + i * 56) + '" y="88" width="46" height="6" fill="' + ["#c0392b", "#2e86c1", "#e6a817", "#27ae60"][i] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kks1)"/>' + strip + oak(44, 84, 1) + oak(356, 86, 1.05) +
      '<rect x="0" y="128" width="400" height="10" fill="#cfc9bd"/><rect x="0" y="138" width="400" height="122" fill="#55565c"/><path d="M0 232h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="22 16"/>' +
      bus +
      '<rect x="374" y="104" width="5" height="112" fill="#6b7178"/><rect x="356" y="92" width="40" height="30" rx="3" fill="' + METRO + '" stroke="#fff" stroke-width="1.5"/><text x="376" y="104" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">METRO</text><text x="376" y="117" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">73</text>' +
      '<rect x="30" y="220" width="300" height="34" rx="3" fill="#111"/><text x="40" y="242" ' + font + ' font-size="13" fill="#fff">Bellfort @ Mykawa</text><rect x="270" y="228" width="44" height="18" rx="9" fill="' + METRO + '"/><text x="292" y="241" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">73</text>',
      sky("kks1", "#f4a05a", "#ffe3b0"));
  }

  /* 2. The tape shop on W Fuqua */
  function kkshop() {
    const brick = '<rect x="30" y="56" width="340" height="140" fill="#8b4a36"/>' + Array.from({ length: 13 }, (_, r) => '<path d="M30 ' + (64 + r * 10) + 'h340" stroke="#6e3a2a" stroke-width="1"/>').join("") +
      '<rect x="60" y="64" width="280" height="30" rx="3" fill="#1a1a1a" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="86" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="' + GOLD + '" class="kk-flk">RECORDS &amp; TAPES</text>';
    const windowBox = '<rect x="60" y="104" width="190" height="84" fill="#20303c" stroke="#ddd" stroke-width="3"/><path d="M60 104l50 0l-40 84h-10z" fill="#fff" opacity=".07"/>' +
      '<rect x="86" y="116" width="138" height="62" rx="6" fill="#8e9399" stroke="#3a3d42" stroke-width="2"/><rect x="104" y="124" width="102" height="22" rx="2" fill="#f2f0e6"/><text x="155" y="139" text-anchor="middle" ' + font + ' font-size="9" fill="#333">CHAPTER 713</text>' +
      '<rect x="112" y="150" width="86" height="20" rx="10" fill="#2a2d33"/><g class="kk-reel"><circle cx="128" cy="160" r="8" fill="#ddd"/><path d="M128 152v16M120 160h16" stroke="#555" stroke-width="2"/></g><g class="kk-reel"><circle cx="182" cy="160" r="8" fill="#ddd"/><path d="M182 152v16M174 160h16" stroke="#555" stroke-width="2"/></g>';
    const door = '<rect x="272" y="104" width="64" height="92" fill="#2a1a12"/><rect x="280" y="112" width="48" height="50" fill="#3f4a56"/><circle cx="326" cy="160" r="3" fill="' + GOLD + '"/><text x="304" y="140" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" class="kk-flk kk-flk2">OPEN</text>';
    const lot = '<rect x="0" y="196" width="400" height="64" fill="#4e4f55"/>' + [40, 140, 240, 340].map(x => '<path d="M' + x + ' 200v56" stroke="#f2f2f2" stroke-width="2"/>').join("") +
      '<g transform="translate(-10 206) scale(.75)">' + slabCar("#8a3ffc") + '</g><g transform="translate(260 206) scale(.75)">' + slabCar(RED) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kks2)"/>' + brick + windowBox + door + lot +
      '<rect x="128" y="236" width="144" height="18" rx="3" fill="#111" opacity=".85"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">W FUQUA ST</text>',
      sky("kks2", "#6fb2e6", "#e9f3fa"));
  }

  /* 3. The slab line */
  function kkslab() {
    const lamp = (x) => '<rect x="' + x + '" y="40" width="5" height="120" fill="#6b7178"/><rect x="' + (x - 12) + '" y="34" width="30" height="8" rx="2" fill="#fff6c2" class="kk-flk"/><path d="M' + (x - 30) + ' 160l32 -118l32 118z" fill="#fff6c2" opacity=".07"/>';
    const parked = (x, c, word, cls) => '<g transform="translate(' + x + ' 150)"><rect x="0" y="10" width="110" height="24" rx="6" fill="' + c + '"/><path d="M16 10l14 -14h40l14 14z" fill="' + c + '"/><path d="M32 -2h34l10 10h-52z" fill="#cfe9ff" opacity=".6"/>' +
      '<g class="kk-trunk ' + cls + '"><rect x="84" y="2" width="26" height="10" rx="2" fill="' + c + '" stroke="#000" stroke-width=".8"/></g><rect x="86" y="12" width="22" height="10" fill="#111"/><text x="97" y="20" text-anchor="middle" ' + font + ' font-size="6" fill="' + word + '" class="kk-flk">SLAB</text>' +
      [22, 88].map(cx => '<circle cx="' + cx + '" cy="36" r="10" fill="#cfd5db" stroke="#222" stroke-width="3"/><path d="M' + cx + ' 36l16 0" stroke="#eef2f5" stroke-width="3"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kks3)"/>' + stars(30) + lamp(60) + lamp(330) +
      '<rect x="0" y="150" width="400" height="110" fill="#2f3036"/>' + [0, 1, 2, 3, 4].map(i => '<path d="M' + (8 + i * 98) + ' 150v60" stroke="#e6e6e6" stroke-width="2" opacity=".6"/>').join("") +
      parked(-6, RED, CYAN, "") + parked(140, "#1e64ff", GOLD, "kk-trunk2") + parked(286, "#1fbf5f", "#fff", "kk-trunk3") +
      '<rect x="110" y="226" width="180" height="22" rx="3" fill="#111" opacity=".9"/><text x="200" y="241" text-anchor="middle" ' + font + ' font-size="11" fill="' + RED + '">THE SLAB LINE</text>',
      sky("kks3", "#0b1530", "#3a2a5a"));
  }

  /* 4. Legend Hotel backyard */
  function kkhotel() {
    const lights = '<path d="M0 30q100 30 200 0q100 30 200 0" stroke="#444" stroke-width="1.5" fill="none"/>' +
      Array.from({ length: 16 }, (_, i) => { const x = 12 + i * 25, t = (x % 200) / 200, y = 30 + Math.sin(t * Math.PI) * 14; return '<circle class="kk-flk' + (i % 2 ? " kk-flk2" : "") + '" cx="' + x + '" cy="' + y.toFixed(1) + '" r="3" fill="#ffe08a"/>'; }).join("");
    const rock = '<path d="M250 150l20 -50l40 -10l40 20l10 40z" fill="#7a6e60"/><path d="M270 100l40 -10l-10 30z" fill="#8f8270"/>';
    const fall = '<g class="kk-fall"><path d="M286 110v44M296 108v46M306 112v42" stroke="#bfe6fb" stroke-width="5" opacity=".85"/></g>';
    const pool = '<path d="M30 150h340l10 60h-360z" fill="#1fa3d6"/><path d="M30 150h340" stroke="#e8e0cc" stroke-width="6"/>' +
      '<g class="kk-wave">' + [168, 184, 198].map(y => '<path d="M50 ' + y + 'q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfefff" stroke-width="2" fill="none" opacity=".6"/>').join("") + '</g>';
    const pit = '<ellipse cx="90" cy="226" rx="36" ry="10" fill="#555"/><rect x="54" y="216" width="72" height="10" fill="#6a6a6a"/>' +
      '<path class="kk-fire" d="M74 216q6 -24 16 -30q-4 14 6 20q8 -16 4 -28q14 16 10 38z" fill="#ff7a1a"/><path class="kk-fire kk-fire2" d="M84 216q4 -14 10 -18q0 10 6 12q2 -6 0 -12q8 10 4 18z" fill="' + GOLD + '"/>';
    const palm = (x) => '<path d="M' + x + ' 150q-6 -60 6 -100" stroke="#7a5a3a" stroke-width="7" fill="none"/><g class="kk-leaf">' + [-60, -20, 20, 60, 100].map(a => '<path d="M' + (x + 6) + ' 50q' + (Math.cos(a * Math.PI / 180) * 30).toFixed(1) + ' ' + (-10 + Math.sin(a * Math.PI / 180) * 6).toFixed(1) + ' ' + (Math.cos(a * Math.PI / 180) * 44).toFixed(1) + ' ' + (14 + Math.abs(a) / 6).toFixed(1) + '" stroke="#2f7a3a" stroke-width="6" fill="none" stroke-linecap="round"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kks4)"/>' + stars(22) + lights + palm(30) + rock + fall + pool +
      '<rect x="0" y="210" width="400" height="50" fill="#c9b79a"/>' + pit +
      '<rect x="220" y="230" width="160" height="22" rx="3" fill="#111" opacity=".9"/><text x="300" y="245" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" fill="' + GOLD + '">LEGEND HOTEL</text>',
      sky("kks4", "#0d1230", "#46306a"));
  }

  /* 5. Herschelwood St and Westover St */
  function kkcorner() {
    const loop = '<rect x="0" y="88" width="400" height="12" fill="#b9b4aa"/><rect x="0" y="100" width="400" height="5" fill="#8a857c"/>' +
      [40, 150, 260, 370].map(x => '<rect x="' + (x - 7) + '" y="105" width="14" height="45" fill="#a39e94"/>').join("") +
      '<rect x="320" y="56" width="60" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/><text x="350" y="71" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">I-610</text><path d="M350 78v10" stroke="#6b7178" stroke-width="3"/>' +
      '<g class="kk-slab"><g transform="translate(0 64) scale(.55)">' + slabCar(RED) + '</g></g>';
    const wall = '<rect x="0" y="122" width="230" height="98" fill="#c2b49a"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (130 + r * 10) + 'h230" stroke="#a89a80" stroke-width="1"/>').join("") +
      tag("LIL KEKE", 16, 180, 40, RED, -6) + tag("SOUTHSIDE", 60, 208, 17, CYAN, -4) +
      '<circle class="kk-sp" cx="212" cy="150" r="3" fill="' + RED + '"/><circle class="kk-sp kk-sp2" cx="220" cy="158" r="2.5" fill="' + RED + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kks5)"/>' + loop +
      '<rect x="0" y="150" width="400" height="70" fill="#6a9a4a"/>' + oak(384, 168, .55) + wall +
      '<rect x="0" y="220" width="400" height="40" fill="#4e4f55"/><path d="M0 244h400" stroke="#f2c200" stroke-width="2.5" stroke-dasharray="20 14"/>' +
      '<rect x="262" y="118" width="6" height="106" fill="#6b7178"/>' + sign(196, 120, 152, "HERSCHELWOOD ST") + sign(212, 146, 120, "WESTOVER ST"),
      sky("kks5", "#79b8ea", "#f8e2c0"));
  }

  window.SCENES = { kkstation: kkstation, kkshop: kkshop, kkslab: kkslab, kkhotel: kkhotel, kkcorner: kkcorner };
})();
