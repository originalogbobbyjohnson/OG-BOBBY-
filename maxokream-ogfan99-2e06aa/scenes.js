/* maxokream scenes (Regions tab: Houston + Texas; Alief, southwest Houston). CSS classes and ids prefixed mk- (the page's own anim-train is kept).
   1 METRO 67 Dairy Ashford bus pulling into the Dairy Ashford Rd @ Bellaire Blvd stop in Alief: the wide boulevard, a low strip of shops, palms, the stop flag with the 67.
   2 Alief Hastings High School, 4410 Cook Rd (where he went; black and gold, the Bears): low 1970s brick, the marquee, the flag waving, a football spiraling over the lot.
   3 Bellaire Blvd in the International District (Alief's Asiatown, "Bellaire" on the 2 and the 67): a green-tile-roofed plaza at dusk, lanterns swaying, cars cruising.
   4 Lagos ("I took a trip to Naija, searchin' for my roots, I go to Lagos"): the cap-shaped National Theatre by the lagoon, yellow danfo buses on the long low bridge, green-white-green flag waving.
   5 Dairy Ashford Rd and Bissonnet St in Alief ("Dairy Ashford Bastard", "Bissonnet"): green signs, MAXO KREAM tagged on the wall, Heritage Plaza's stepped top lit far off behind.
   No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mkwave{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.mk-flag{transform-box:fill-box;transform-origin:0 50%;animation:mkwave 1.6s ease-in-out infinite}' +
    '@keyframes mkball{0%{transform:translate(0,0) rotate(0)}50%{transform:translate(150px,-60px) rotate(360deg)}100%{transform:translate(300px,0) rotate(720deg)}}.mk-ball{transform-box:fill-box;transform-origin:center;animation:mkball 3.4s ease-in-out infinite}' +
    '@keyframes mksway{0%,100%{transform:rotate(-7deg)}50%{transform:rotate(7deg)}}.mk-lan{transform-box:fill-box;transform-origin:50% 0;animation:mksway 2.6s ease-in-out infinite}.mk-lan2{animation-delay:-1.3s}' +
    '@keyframes mkblink{0%,100%{opacity:.3}50%{opacity:1}}.mk-bl{animation:mkblink 1.5s ease-in-out infinite}.mk-bl2{animation-delay:-.75s}' +
    '@keyframes mkcarR{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.mk-carR{animation:mkcarR 6s linear infinite}.mk-carR2{animation-delay:-3s}' +
    '@keyframes mkcarL{from{transform:translateX(520px)}to{transform:translateX(-140px)}}.mk-carL{animation:mkcarL 7.5s linear infinite}.mk-carL2{animation-delay:-3.7s}' +
    '@keyframes mkrip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.mk-rip{animation:mkrip 3s ease-in-out infinite}.mk-rip2{animation-delay:-1.5s}' +
    '@keyframes mkglow{0%,100%{opacity:.55}50%{opacity:1}}.mk-glow{animation:mkglow 2.2s ease-in-out infinite}' +
    '@keyframes mkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mk-sp{animation:mkspray 1.4s ease-out infinite}.mk-sp2{animation-delay:.45s}' +
    '@keyframes mkflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.mk-flk{animation:mkflick 2.4s infinite}' +
    '@keyframes mkpalm{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.mk-palm{transform-box:fill-box;transform-origin:50% 100%;animation:mkpalm 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "mk-bl" + (i % 2 ? " mk-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 80) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const GOLD = "#ffc83d", GREEN = "#1f9d55", ORANGE = "#ff7a3d", BLUE = "#1d5fae";
  const palm = (x, base, h) => '<g class="mk-palm"><path d="M' + x + ' ' + base + 'q-4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#7a5a3a" stroke-width="5" fill="none"/>' +
    [[-30, -8], [-22, 10], [26, -6], [24, 12], [0, -22]].map(d => '<path d="M' + (x + 2) + ' ' + (base - h) + 'q' + (d[0] / 2) + ' ' + (d[1] - 10) + ' ' + d[0] + ' ' + d[1] + '" stroke="#2f7a3a" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  /* Heritage Plaza: a tall granite-and-glass shaft with the stepped (Mayan-temple) top */
  const heritage = (x, base, s, lit) => {
    const w = 34 * s, h = 150 * s, top = base - h;
    let steps = "";
    for (let i = 0; i < 5; i++) { const sw = w * (0.86 - i * 0.15), sh = 6 * s; steps += '<rect x="' + (x - sw / 2).toFixed(1) + '" y="' + (top - (i + 1) * sh).toFixed(1) + '" width="' + sw.toFixed(1) + '" height="' + sh.toFixed(1) + '" fill="' + (lit ? "#3a4a5e" : "#8f9aa6") + '" stroke="' + (lit ? "#ffd98a" : "#6b7680") + '" stroke-width=".8"/>'; }
    let win = "";
    for (let r = 0; r < 12; r++) for (let c = 0; c < 4; c++) if ((r + c) % 3) win += '<rect class="' + (lit && (r * 4 + c) % 5 === 0 ? "mk-bl" : "") + '" x="' + (x - w / 2 + 4 * s + c * 7.4 * s).toFixed(1) + '" y="' + (top + 6 * s + r * 11.6 * s).toFixed(1) + '" width="' + (4 * s).toFixed(1) + '" height="' + (6 * s).toFixed(1) + '" fill="' + (lit ? "#ffe6a6" : "#c9d3dc") + '" opacity="' + (lit ? .7 : .6) + '"/>';
    return '<g><rect x="' + (x - w / 2) + '" y="' + top + '" width="' + w + '" height="' + h + '" fill="' + (lit ? "#2c3a4c" : "#7d8a96") + '"/>' + win + steps +
      '<rect x="' + (x - 1) + '" y="' + (top - 30 * s - 10 * s) + '" width="2" height="' + (10 * s) + '" fill="#c9ccd2"/></g>';
  };

  /* 1. Dairy Ashford Rd @ Bellaire Blvd, METRO 67 */
  function mkstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (60 + i * 42) + '" y="122" width="34" height="26" rx="3" fill="#1d2833"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="108" width="300" height="76" rx="10" fill="#f4f5f6" stroke="#8a939b" stroke-width="2"/>' + win +
      '<path d="M310 112h22q8 0 8 10v30h-30z" fill="#1d2833"/>' +
      '<rect x="40" y="156" width="300" height="8" fill="' + BLUE + '"/><rect x="40" y="164" width="300" height="4" fill="#d6312b"/>' +
      '<rect x="252" y="112" width="56" height="12" rx="2" fill="#111"/><text x="280" y="121" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb84a">67 DAIRY ASHFORD</text>' +
      '<circle cx="335" cy="174" r="3.5" fill="#fff6c2"/><circle cx="96" cy="186" r="11" fill="#222"/><circle cx="96" cy="186" r="4" fill="#888"/><circle cx="292" cy="186" r="11" fill="#222"/><circle cx="292" cy="186" r="4" fill="#888"/></g>';
    const shops = '<rect x="0" y="86" width="400" height="44" fill="#e2c9a0"/><rect x="0" y="82" width="400" height="6" fill="#b5895a"/>' +
      [["PHO", 20], ["TAQUERIA", 92], ["BRAIDS", 196], ["SUPERMARKET", 270]].map((s, i) => '<rect x="' + s[1] + '" y="90" width="' + (s[0].length * 8 + 14) + '" height="14" rx="2" fill="' + ["#c0392b", GREEN, "#7d3c98", BLUE][i] + '"/><text x="' + (s[1] + (s[0].length * 8 + 14) / 2) + '" y="101" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + s[0] + '</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mks1)"/><circle cx="330" cy="40" r="20" fill="#fff4c2" opacity=".9"/>' + shops +
      palm(12, 130, 70) + palm(370, 130, 80) +
      '<rect x="0" y="130" width="400" height="66" fill="#6b6e72"/><path d="M0 162h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#c9c3b6"/><path d="M0 200h400" stroke="#a49d8f" stroke-width="2"/>' +
      '<rect x="356" y="138" width="5" height="60" fill="#666"/><rect x="346" y="130" width="26" height="24" rx="2" fill="' + BLUE + '"/><text x="359" y="147" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">67</text>' +
      '<rect x="40" y="206" width="300" height="40" rx="3" fill="#111"/><text x="56" y="231" ' + font + ' font-size="16" fill="#fff">Dairy Ashford @ Bellaire</text><rect x="290" y="216" width="38" height="20" rx="10" fill="' + BLUE + '"/><text x="309" y="231" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">67</text>',
      sky("mks1", "#7fbde8", "#fbe7bd"));
  }

  /* 2. Alief Hastings High School: black and gold, the Bears */
  function mkhastings() {
    const bricks = Array.from({ length: 9 }, (_, i) => '<path d="M30 ' + (118 + i * 8) + 'h340" stroke="#7a4a32" stroke-width="1" opacity=".5"/>').join("");
    const wins = Array.from({ length: 8 }, (_, i) => '<rect x="' + (44 + i * 40) + '" y="124" width="24" height="18" fill="#1f2a33" stroke="' + GOLD + '" stroke-width="1.5"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mks2)"/>' +
      '<rect x="30" y="104" width="340" height="80" fill="#a8643f"/>' + bricks + '<rect x="24" y="96" width="352" height="10" fill="#1b1b1b"/><rect x="24" y="106" width="352" height="3" fill="' + GOLD + '"/>' + wins +
      '<rect x="168" y="146" width="64" height="38" fill="#1b1b1b"/><rect x="172" y="150" width="26" height="34" fill="#3a4651"/><rect x="202" y="150" width="26" height="34" fill="#3a4651"/>' +
      '<rect x="150" y="80" width="100" height="16" fill="#1b1b1b"/><text x="200" y="92" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">HASTINGS HIGH</text>' +
      '<rect x="318" y="40" width="3" height="144" fill="#ccc"/><g class="mk-flag"><path d="M321 42h40v24h-40z" fill="' + GOLD + '"/><path d="M321 54h40" stroke="#1b1b1b" stroke-width="6"/></g>' +
      '<rect x="0" y="184" width="400" height="76" fill="#7fae5a"/><rect x="0" y="184" width="400" height="5" fill="#5e8a40"/>' +
      '<rect x="40" y="198" width="120" height="44" rx="3" fill="#1b1b1b" stroke="' + GOLD + '" stroke-width="2"/><text x="100" y="216" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">ALIEF HASTINGS</text><text x="100" y="233" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">GO BEARS</text>' +
      '<rect x="98" y="242" width="4" height="12" fill="#555"/>' +
      '<g class="mk-ball"><ellipse cx="60" cy="60" rx="9" ry="5.5" fill="#7a3f1d"/><path d="M55 60h10M58 58v4M61 58v4" stroke="#fff" stroke-width="1"/></g>' +
      '<text x="270" y="232" text-anchor="middle" ' + font + ' font-size="11" fill="#1b1b1b">4410 COOK RD · ALIEF</text>',
      sky("mks2", "#5aa8e8", "#e9f1f6"));
  }

  /* 3. Bellaire Blvd, the International District at dusk */
  function mkbellaire() {
    const roof = '<path d="M20 98q180 -26 360 0l-16 14H36z" fill="#2f7d5a" stroke="#1d5a3f" stroke-width="2"/><path d="M20 98q-8 -2 -12 -10M380 98q8 -2 12 -10" stroke="#2f7d5a" stroke-width="5" stroke-linecap="round" fill="none"/>' +
      Array.from({ length: 18 }, (_, i) => '<path d="M' + (44 + i * 18) + ' 90v20" stroke="#24694a" stroke-width="1.4"/>').join("");
    const shops = [["PHO", "#c0392b"], ["BOBA", "#e67e22"], ["BAKERY", "#8e44ad"], ["KARAOKE", "#2980b9"], ["HOTPOT", "#c0392b"]].map((s, i) => {
      const x = 40 + i * 66;
      return '<rect x="' + x + '" y="118" width="58" height="66" fill="#3a2f3a"/><rect x="' + x + '" y="140" width="58" height="44" fill="#ffd98a" opacity=".55" class="mk-glow"/>' +
        '<rect x="' + (x + 2) + '" y="120" width="54" height="16" rx="2" fill="' + s[1] + '"/><text x="' + (x + 29) + '" y="132" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + s[0] + '</text>';
    }).join("");
    const lanterns = Array.from({ length: 8 }, (_, i) => { const x = 30 + i * 48, y = 40 + Math.sin(i / 7 * Math.PI) * 14; return '<g class="mk-lan' + (i % 2 ? " mk-lan2" : "") + '"><path d="M' + x + ' ' + y.toFixed(1) + 'v6" stroke="#222" stroke-width="1"/><ellipse cx="' + x + '" cy="' + (y + 15).toFixed(1) + '" rx="8" ry="10" fill="#e53935"/><rect x="' + (x - 4) + '" y="' + (y + 4).toFixed(1) + '" width="8" height="3" fill="' + GOLD + '"/><rect x="' + (x - 4) + '" y="' + (y + 24).toFixed(1) + '" width="8" height="3" fill="' + GOLD + '"/><path d="M' + x + ' ' + (y + 27).toFixed(1) + 'v6" stroke="' + GOLD + '" stroke-width="1.5"/></g>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mks3)"/>' + stars(12) +
      '<rect x="30" y="108" width="340" height="80" fill="#4a3d4a"/>' + roof + shops +
      '<path d="M0 30q200 34 400 0" stroke="#222" stroke-width="1.2" fill="none"/>' + lanterns +
      '<rect x="0" y="188" width="400" height="72" fill="#4a4852"/><rect x="0" y="186" width="400" height="4" fill="#c9c6bd"/><path d="M0 222h400" stroke="#f2c200" stroke-width="2.5" stroke-dasharray="18 14"/>' +
      '<g class="mk-carR"><rect x="0" y="228" width="40" height="13" rx="4" fill="' + ORANGE + '"/><circle cx="38" cy="234" r="2" fill="#fff6c2"/><circle cx="10" cy="242" r="4" fill="#111"/><circle cx="30" cy="242" r="4" fill="#111"/></g>' +
      '<g class="mk-carL"><rect x="0" y="200" width="38" height="12" rx="4" fill="#e9eef5"/><circle cx="1" cy="205" r="2" fill="#fff6c2"/><circle cx="9" cy="213" r="4" fill="#111"/><circle cx="29" cy="213" r="4" fill="#111"/></g>' +
      '<rect x="356" y="160" width="5" height="40" fill="#2f2f2f"/>' + sign(250, 158, 128, "Bellaire Blvd"),
      sky("mks3", "#1a1638", "#c8643f"));
  }

  /* 4. Lagos: the National Theatre by the lagoon, danfo buses on the bridge */
  function mklagos() {
    const danfo = (cls, color) => '<g class="' + cls + '"><rect x="0" y="146" width="38" height="16" rx="3" fill="' + color + '"/><path d="M0 154h38" stroke="#111" stroke-width="2.5"/><rect x="4" y="149" width="8" height="5" fill="#2a3440"/><rect x="15" y="149" width="8" height="5" fill="#2a3440"/><rect x="26" y="149" width="8" height="5" fill="#2a3440"/><circle cx="8" cy="163" r="3.5" fill="#111"/><circle cx="30" cy="163" r="3.5" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mks4)"/><circle cx="80" cy="54" r="22" fill="#fff1c6" opacity=".9"/>' +
      /* National Theatre: a wide cap-shaped dome with a dark band and a brim */
      '<path d="M150 128q90 -90 180 0z" fill="#efe6d4" stroke="#b9ab8e" stroke-width="2"/><path d="M164 110q76 -44 152 0" stroke="#3f4a3a" stroke-width="7" fill="none"/>' +
      '<path d="M140 128h200l-10 10H150z" fill="#d8ccb2"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (160 + i * 18) + '" y="132" width="6" height="22" fill="#cdbf9f"/>').join("") +
      '<rect x="150" y="152" width="180" height="6" fill="#b9ab8e"/>' +
      /* the long low bridge */
      '<rect x="0" y="162" width="400" height="8" fill="#c9c3b6"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (12 + i * 42) + '" y="170" width="6" height="22" fill="#a49d8f"/>').join("") +
      danfo("mk-carR", GOLD) + danfo("mk-carR mk-carR2", "#ffd400") + danfo("mk-carL", GOLD) +
      '<rect x="0" y="192" width="400" height="68" fill="#3f7e8f"/><g class="mk-rip"><path d="M20 210h40M150 220h50M290 206h40" stroke="#cfe6ee" stroke-width="2" stroke-linecap="round"/></g><g class="mk-rip mk-rip2"><path d="M80 236h40M220 240h60M340 230h30" stroke="#cfe6ee" stroke-width="2" stroke-linecap="round"/></g>' +
      '<rect x="40" y="70" width="3" height="94" fill="#ddd"/><g class="mk-flag"><rect x="43" y="72" width="14" height="26" fill="#008751"/><rect x="57" y="72" width="14" height="26" fill="#fff"/><rect x="71" y="72" width="14" height="26" fill="#008751"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#f4fbff">LAGOS · SEARCHIN&apos; FOR MY ROOTS</text>',
      sky("mks4", "#f59e52", "#fde8c0"));
  }

  /* 5. Dairy Ashford Rd and Bissonnet St, Alief */
  function mkcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mks5)"/>' + stars(18) +
      '<g fill="#22263a"><rect x="30" y="100" width="24" height="30"/><rect x="60" y="92" width="18" height="38"/><rect x="250" y="96" width="22" height="34"/><rect x="300" y="104" width="30" height="26"/><rect x="340" y="90" width="18" height="40"/></g>' +
      heritage(150, 130, 0.62, true) +
      '<rect x="0" y="126" width="400" height="98" fill="#cfc4ad"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#b8ab90" stroke-width="1"/>').join("") +
      '<rect x="0" y="126" width="400" height="6" fill="#8f8268"/>' +
      tag("MAXO", 22, 184, 50, GOLD, -6) + tag("KREAM", 48, 216, 36, GREEN, -5) + tag("ALIEF", 196, 176, 22, ORANGE, -4) + tag("KREAM CLICC", 190, 210, 16, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(244, 98, 154, "Dairy Ashford Rd") + sign(262, 124, 118, "Bissonnet St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="mk-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="mk-sp"><circle cx="176" cy="166" r="3" fill="' + GREEN + '" opacity=".7"/></g><g class="mk-sp mk-sp2"><circle cx="182" cy="160" r="2" fill="' + GREEN + '" opacity=".6"/></g>',
      sky("mks5", "#141634", "#c85f45"));
  }

  window.SCENES = { mkstation: mkstation, mkhastings: mkhastings, mkbellaire: mkbellaire, mklagos: mklagos, mkcorner: mkcorner };
})();
