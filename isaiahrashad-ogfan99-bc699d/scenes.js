/* isaiahrashad scenes (Regions tab: Memphis + Tennessee; Chattanooga's Eastside). CSS classes and ids prefixed ir- (the page's own anim-train is kept).
   1 CARTA Route 10A (Avondale) pulling up at Dodson Av & Stuart St on the Eastside, Missionary Ridge behind at dusk.
   2 The Walnut Street Bridge: the long blue pedestrian truss over the Tennessee River, walkers crossing, a riverboat paddling under.
   3 The Lookout Mountain Incline Railway: the orange car with its red band climbing the steep green mountain, the counterweight car coming down.
   4 Terminal Station (the Choo Choo): red brick and the big arched entry, a black steam engine out front puffing smoke.
   5 Glass St and Dodson Av on the Eastside: green signs, ZAY tagged on the brick, the glass peaks of the Tennessee Aquarium behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes irflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.ir-flk{animation:irflick 2.2s infinite}.ir-flk2{animation-delay:.7s}' +
    '@keyframes irwalk{from{transform:translateX(-30px)}to{transform:translateX(430px)}}.ir-walk{animation:irwalk 14s linear infinite}.ir-walk2{animation-delay:-5s}.ir-walk3{animation-delay:-9.5s}' +
    '@keyframes irboat{from{transform:translateX(440px)}to{transform:translateX(-160px)}}.ir-boat{animation:irboat 20s linear infinite}' +
    '@keyframes irup{0%,100%{transform:translate(0,0)}50%{transform:translate(-150px,-100px)}}.ir-up{animation:irup 9s ease-in-out infinite}' +
    '@keyframes irdown{0%,100%{transform:translate(0,0)}50%{transform:translate(150px,100px)}}.ir-down{animation:irdown 9s ease-in-out infinite}' +
    '@keyframes irpuff{0%{transform:translate(0,0) scale(.6);opacity:.9}100%{transform:translate(30px,-60px) scale(1.6);opacity:0}}.ir-puff{transform-box:fill-box;transform-origin:50% 50%;animation:irpuff 2.4s ease-out infinite}.ir-puff2{animation-delay:-.8s}.ir-puff3{animation-delay:-1.6s}' +
    '@keyframes irrip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.ir-rip{animation:irrip 3s ease-in-out infinite}.ir-rip2{animation-delay:-1.5s}' +
    '@keyframes irwheel{from{transform:rotate(0)}to{transform:rotate(360deg)}}.ir-wheel{transform-box:fill-box;transform-origin:50% 50%;animation:irwheel 2s linear infinite}' +
    '@keyframes irspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ir-sp{animation:irspray 1.4s ease-out infinite}.ir-sp2{animation-delay:.45s}' +
    '@keyframes irblink{0%,100%{opacity:.25}50%{opacity:1}}.ir-bl{animation:irblink 1.6s ease-in-out infinite}.ir-bl2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const walker = (cls, y, c) => '<g class="ir-walk ' + cls + '"><circle cx="0" cy="' + (y - 14) + '" r="3" fill="#3a2a22"/><rect x="-3" y="' + (y - 11) + '" width="6" height="9" rx="2" fill="' + c + '"/><path d="M-2 ' + (y - 2) + 'l-2 6M2 ' + (y - 2) + 'l2 6" stroke="#222" stroke-width="2"/></g>';
  const BUS = "#1f4e79", GOLD = "#f6c453", ROSE = "#e8a0a0", SKYBLUE = "#5aa7d8";

  /* 1. CARTA 10A at Dodson Av & Stuart St */
  function irstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1e2a33"/>').join("");
    const bus = '<g class="anim-train"><rect x="36" y="116" width="316" height="66" rx="10" fill="#eef1f4" stroke="#7d868f" stroke-width="2"/>' + win +
      '<rect x="36" y="158" width="316" height="8" fill="' + BUS + '"/><rect x="36" y="168" width="316" height="3" fill="#6cbe45"/>' +
      '<rect x="326" y="124" width="22" height="40" rx="3" fill="#2b3640"/><rect x="314" y="118" width="38" height="9" rx="2" fill="#111"/><text x="333" y="125.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">10A</text>' +
      '<circle cx="90" cy="184" r="11" fill="#222"/><circle cx="90" cy="184" r="4" fill="#888"/><circle cx="300" cy="184" r="11" fill="#222"/><circle cx="300" cy="184" r="4" fill="#888"/><circle cx="348" cy="170" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#irs1)"/>' +
      '<path d="M0 104Q60 70 130 86T260 74T400 90V120H0z" fill="#3c4a3a"/><path d="M0 112Q80 92 170 100T400 104V122H0z" fill="#2e3a2e"/>' +
      [40, 120, 210, 300].map((x, i) => '<rect x="' + x + '" y="' + (88 + i % 2 * 6) + '" width="44" height="28" fill="#5a4a44"/><path d="M' + (x - 4) + ' ' + (88 + i % 2 * 6) + 'l26 -14 26 14z" fill="#3a2e2a"/><rect class="ir-bl' + (i % 2 ? " ir-bl2" : "") + '" x="' + (x + 8) + '" y="' + (96 + i % 2 * 6) + '" width="8" height="8" fill="#ffd98a"/>').join("") +
      '<rect x="0" y="116" width="400" height="80" fill="#55565a"/><path d="M0 150h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#b9b3a6"/><path d="M0 196h400" stroke="#8f897c" stroke-width="3"/>' +
      '<rect x="374" y="150" width="5" height="70" fill="#4a4f55"/><rect x="361" y="134" width="32" height="20" rx="2" fill="' + BUS + '"/><text x="377" y="148" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS</text>' +
      '<rect x="78" y="206" width="244" height="40" rx="3" fill="#111"/><text x="90" y="223" ' + font + ' font-size="13" fill="#fff">Dodson Av &amp; Stuart St</text><text x="90" y="239" ' + font + ' font-size="11" fill="#cfd8e0">Eastside · Chattanooga</text>' + badge(262, 230, "10A", BUS),
      sky("irs1", "#2b2f5a", "#f0a86a"));
  }

  /* 2. Walnut Street Bridge */
  function irbridge() {
    let truss = "";
    const spans = [[0, 110], [110, 220], [220, 330], [330, 440]];
    spans.forEach(sp => {
      const a = sp[0], b = sp[1], m = (a + b) / 2;
      truss += '<path d="M' + a + ' 140Q' + m + ' 92 ' + b + ' 140" stroke="' + SKYBLUE + '" stroke-width="5" fill="none"/>';
      for (let i = 1; i < 6; i++) { const x = a + (b - a) * i / 6; const t = i / 6; const yy = 140 - 4 * 48 * t * (1 - t) * 0.5 * 2 / 2 * 1; truss += '<path d="M' + x + ' 140V' + (140 - 48 * 4 * t * (1 - t) / 2) + '" stroke="' + SKYBLUE + '" stroke-width="2.5"/>'; }
      for (let i = 0; i < 6; i++) { const x1 = a + (b - a) * i / 6, x2 = a + (b - a) * (i + 1) / 6; const t2 = (i + 1) / 6; truss += '<path d="M' + x1 + ' 140L' + x2 + ' ' + (140 - 48 * 4 * t2 * (1 - t2) / 2) + '" stroke="' + SKYBLUE + '" stroke-width="1.8" opacity=".9"/>'; }
    });
    return svg(
      '<rect width="400" height="260" fill="url(#irs2)"/>' +
      '<path d="M0 120Q70 96 150 108T300 100T400 112V160H0z" fill="#5e8a5a" opacity=".7"/>' +
      '<g fill="#7f8ea0" opacity=".7"><rect x="250" y="84" width="22" height="40"/><rect x="276" y="70" width="18" height="54"/><rect x="298" y="90" width="26" height="34"/><rect x="330" y="78" width="16" height="46"/></g>' +
      '<rect x="0" y="150" width="400" height="110" fill="#3f6a7a"/>' +
      '<g class="ir-rip"><path d="M10 176h60M120 196h80M260 174h70M40 222h90M230 236h120" stroke="#a9cfe0" stroke-width="2" stroke-linecap="round" opacity=".6"/></g>' +
      '<g class="ir-rip ir-rip2"><path d="M80 206h50M300 206h60M150 246h70" stroke="#d2e8f2" stroke-width="2" stroke-linecap="round" opacity=".5"/></g>' +
      [110, 220, 330].map(x => '<rect x="' + (x - 8) + '" y="140" width="16" height="40" fill="#8c7f72"/><rect x="' + (x - 10) + '" y="176" width="20" height="8" fill="#6f655b"/>').join("") +
      '<g class="ir-boat"><path d="M0 214h90l-10 14H10z" fill="#f4f1e6"/><rect x="14" y="196" width="60" height="18" fill="#ffffff"/><rect x="18" y="186" width="44" height="10" fill="#c0392b"/><rect x="26" y="174" width="5" height="14" fill="#222"/><rect x="40" y="174" width="5" height="14" fill="#222"/><circle class="ir-wheel" cx="84" cy="214" r="10" fill="none" stroke="#c0392b" stroke-width="3" stroke-dasharray="4 3"/></g>' +
      '<rect x="0" y="138" width="400" height="5" fill="#3d6f96"/>' + truss +
      walker("", 138, "#e85d5d") + walker("ir-walk2", 138, GOLD) + walker("ir-walk3", 138, "#6cbe45") +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#e8f2fb">WALNUT STREET BRIDGE · TENNESSEE RIVER</text>',
      sky("irs2", "#86bde6", "#f3e3c8"));
  }

  /* 3. Incline Railway */
  function irincline() {
    const carShape = (fill) => '<g transform="rotate(-33)"><rect x="-22" y="-12" width="44" height="22" rx="3" fill="' + fill + '" stroke="#5a2a10" stroke-width="1.5"/><rect x="-22" y="2" width="44" height="5" fill="#b0302a"/>' +
      [0, 1, 2].map(i => '<rect x="' + (-18 + i * 13) + '" y="-9" width="9" height="9" fill="#2a3540"/>').join("") + '</g>';
    let ties = "";
    for (let i = 0; i < 22; i++) { const x = 70 + i * 13, y = 238 - i * 8.6; ties += '<path d="M' + (x - 3) + ' ' + (y - 6) + 'l10 6" stroke="#5a4636" stroke-width="2"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#irs3)"/>' +
      '<path d="M0 260L0 200Q120 150 210 90Q280 40 400 30V260z" fill="#3f7a3a"/><path d="M0 260L0 230Q140 190 240 120Q310 70 400 64V260z" fill="#2f6430"/>' +
      Array.from({ length: 26 }, (_, i) => '<circle cx="' + ((i * 47) % 400) + '" cy="' + (150 + (i * 23) % 100) + '" r="' + (8 + i % 4 * 2) + '" fill="#285a2a" opacity=".8"/>').join("") +
      '<path d="M360 36h40v-6h-40z" fill="#b8a07a"/><rect x="352" y="14" width="40" height="22" fill="#d9c9a8"/><path d="M348 16l24 -12 24 12z" fill="#7a4a2a"/>' +
      '<path d="M60 246L360 40" stroke="#6d6d6d" stroke-width="10"/><path d="M60 246L360 40" stroke="#8a8a8a" stroke-width="2" stroke-dasharray="1 0"/>' + ties +
      '<path d="M58 240L358 34M62 252L362 46" stroke="#3a3a3a" stroke-width="1.5"/>' +
      '<g transform="translate(290 88)"><g class="ir-up">' + carShape("#f08a24") + '</g></g>' +
      '<g transform="translate(130 198)"><g class="ir-down">' + carShape("#e67a1a") + '</g></g>' +
      '<rect x="12" y="232" width="150" height="20" rx="2" fill="#111" opacity=".75"/><text x="87" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">LOOKOUT MOUNTAIN INCLINE</text>',
      sky("irs3", "#7ab8e8", "#f2efd8"));
  }

  /* 4. Terminal Station */
  function irterminal() {
    const brick = "#a8452f";
    return svg(
      '<rect width="400" height="260" fill="url(#irs4)"/>' +
      '<rect x="60" y="56" width="280" height="130" fill="' + brick + '"/>' + Array.from({ length: 16 }, (_, i) => '<path d="M60 ' + (62 + i * 8) + 'h280" stroke="#934030" stroke-width="1"/>').join("") +
      '<rect x="56" y="50" width="288" height="10" fill="#e9dfcb"/><rect x="60" y="176" width="280" height="10" fill="#e9dfcb"/>' +
      '<path d="M140 186V110a60 60 0 0 1 120 0v76z" fill="#e9dfcb"/><path d="M152 186V114a48 48 0 0 1 96 0v72z" fill="#2c3440"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (160 + i * 13.5) + ' 186V' + (126 - (i === 3 ? 30 : Math.abs(3 - i) < 2 ? 26 : 16)) + '" stroke="#5a6676" stroke-width="1.5"/>').join("") +
      '<path d="M156 130h88M156 154h88" stroke="#5a6676" stroke-width="1.5"/>' +
      [80, 108, 284, 312].map(x => '<rect x="' + x + '" y="76" width="16" height="30" fill="#2c3440"/><rect x="' + x + '" y="124" width="16" height="30" fill="#2c3440"/>').join("") +
      '<rect x="150" y="34" width="100" height="18" fill="#e9dfcb"/><text x="200" y="47" text-anchor="middle" ' + font + ' font-size="10" fill="' + brick + '">TERMINAL STATION</text>' +
      '<rect x="0" y="186" width="400" height="74" fill="#8e8a82"/><path d="M0 222h400M0 236h400" stroke="#5a5a5a" stroke-width="3"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 22) + ' 218v22" stroke="#6b5a48" stroke-width="4"/>').join("") +
      '<g><rect x="230" y="176" width="110" height="40" rx="4" fill="#1d1d1f"/><rect x="214" y="180" width="30" height="34" fill="#2a2a2e"/><rect x="300" y="150" width="40" height="34" fill="#1d1d1f"/><rect x="306" y="156" width="12" height="12" fill="#ffd98a"/>' +
      '<rect x="244" y="160" width="12" height="18" fill="#2a2a2e"/><rect x="241" y="156" width="18" height="6" fill="#2a2a2e"/><path d="M214 214l-14 10h24z" fill="#b0302a"/>' +
      [252, 282, 316].map(x => '<g class="ir-wheel"><circle cx="' + x + '" cy="220" r="12" fill="#b0302a" stroke="#1d1d1f" stroke-width="3"/><path d="M' + (x - 12) + ' 220h24M' + x + ' 208v24" stroke="#1d1d1f" stroke-width="2"/></g>').join("") + '</g>' +
      '<circle class="ir-puff" cx="250" cy="150" r="9" fill="#e6e6e6"/><circle class="ir-puff ir-puff2" cx="250" cy="150" r="9" fill="#d6d6d6"/><circle class="ir-puff ir-puff3" cx="250" cy="150" r="9" fill="#f2f2f2"/>',
      sky("irs4", "#2a4a7a", "#f2b880"));
  }

  /* 5. Glass St and Dodson Av */
  function ircorner() {
    const peak = (x, base, w, h) => '<path d="M' + (x - w) + ' ' + base + 'L' + x + ' ' + (base - h) + 'L' + (x + w) + ' ' + base + 'z" fill="#9ccbe0" stroke="#e8f4fa" stroke-width="1.5"/><path d="M' + x + ' ' + (base - h) + 'V' + base + 'M' + (x - w / 2) + ' ' + (base - h / 2) + 'H' + (x + w / 2) + '" stroke="#e8f4fa" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#irs5)"/>' +
      '<rect x="120" y="96" width="150" height="34" fill="#8a6a55"/>' + peak(150, 96, 26, 40) + peak(196, 96, 30, 56) + peak(240, 96, 26, 40) +
      '<g fill="#3a3550"><rect x="0" y="92" width="80" height="40"/><rect x="290" y="88" width="50" height="44"/><rect x="340" y="100" width="60" height="32"/></g>' +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("ZAY", 24, 196, 62, GOLD, -6) + tag("THE HOUSE", 140, 182, 22, ROSE, -4) + tag("SUNNY", 150, 214, 22, "#8fd0ff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(262, 98, 130, "Glass St") + sign(266, 124, 122, "Dodson Av") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="ir-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="ir-sp"><circle cx="110" cy="164" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="ir-sp ir-sp2"><circle cx="116" cy="158" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("irs5", "#2e3566", "#f0a070"));
  }

  window.SCENES = { irstop: irstop, irbridge: irbridge, irincline: irincline, irterminal: irterminal, ircorner: ircorner };
})();
