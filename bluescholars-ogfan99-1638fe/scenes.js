/* bluescholars scenes (Regions tab: The Northwest; Beacon Hill, Seattle). CSS classes prefixed bs- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bsflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.bs-flk{animation:bsflick 2.4s infinite}.bs-flk2{animation-delay:.8s}' +
    '@keyframes bsrain{0%{transform:translate(0,-40px)}100%{transform:translate(-14px,280px)}}.bs-rn{animation:bsrain 1.1s linear infinite}.bs-rn2{animation-delay:-.37s}.bs-rn3{animation-delay:-.74s}' +
    '@keyframes bsbus{0%{transform:translateX(-420px)}45%,100%{transform:translateX(0)}}.bs-bus{animation:bsbus 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes bsglow{0%,100%{opacity:.45}50%{opacity:1}}.bs-glow{animation:bsglow 2.2s ease-in-out infinite}.bs-g2{animation-delay:-1.1s}' +
    '@keyframes bsdrip{0%{transform:translateY(0);opacity:0}15%{opacity:1}80%{transform:translateY(46px);opacity:1}100%{transform:translateY(52px);opacity:0}}.bs-drip{animation:bsdrip 2.6s ease-in infinite}' +
    '@keyframes bsspark{0%,100%{opacity:0}50%{opacity:1}}.bs-spk{animation:bsspark 1.3s steps(2) infinite}' +
    '@keyframes bswheel{to{transform:rotate(360deg)}}.bs-wh{transform-box:fill-box;transform-origin:50% 50%;animation:bswheel 1.4s linear infinite}' +
    '@keyframes bsspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bs-sp{animation:bsspray 1.4s ease-out infinite}.bs-sp2{animation-delay:.45s}' +
    '@keyframes bscloud{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.bs-cl{animation:bscloud 26s linear infinite}.bs-cl2{animation-delay:-13s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (cx, cy, txt, color) => '<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="' + color + '"/><text x="' + cx + '" y="' + (cy + 5) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const rain = (n, col) => { let s = ""; for (let i = 0; i < n; i++) s += '<path class="bs-rn' + ["", " bs-rn2", " bs-rn3"][i % 3] + '" d="M' + ((i * 37) % 420) + ' ' + ((i * 29) % 60) + 'l-3 12" stroke="' + (col || "#cfe3f2") + '" stroke-width="1.2" opacity=".55"/>'; return s; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "bs-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const BLUE = "#4aa3df", GOLD = "#f2c14e", RED = "#e4572e", LINK1 = "#28813f", METRO = "#1f4e79";

  /* 1. Beacon Hill Station, 1 Line: one of the deepest stations on Link, a long tunnel platform, the black sign with the green 1 bullet, the white Link train with its blue band sliding in */
  function bsstation() {
    const tr = '<g class="anim-train"><rect x="22" y="100" width="330" height="80" rx="12" fill="#f2f4f6" stroke="#8a929a" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 50) + '" y="112" width="36" height="28" rx="3" fill="#1d262e"/>').join("") +
      '<rect x="22" y="148" width="330" height="12" fill="#1f5fa8"/><rect x="22" y="160" width="330" height="4" fill="' + LINK1 + '"/>' +
      '<rect x="160" y="108" width="34" height="68" rx="2" fill="#d7dce1" stroke="#8a929a"/><path d="M177 108v68" stroke="#8a929a"/>' +
      '<path d="M352 104q14 4 14 40v30q0 6 -14 6z" fill="#dfe3e7" stroke="#8a929a" stroke-width="2"/><circle cx="356" cy="170" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#3a4148"/>' +
      '<path d="M0 0h400v70q-200 -40 -400 0z" fill="#2a3036"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 0q25 40 0 70" stroke="#4a525a" stroke-width="2" fill="none"/>').join("") +
      [60, 180, 300].map((x, i) => '<rect class="bs-flk' + (i === 1 ? " bs-flk2" : "") + '" x="' + x + '" y="62" width="50" height="4" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="86" width="400" height="104" fill="#20262c"/>' + tr +
      '<rect x="0" y="190" width="400" height="8" fill="#f2c200"/><rect x="0" y="198" width="400" height="62" fill="#9a9690"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 198l-20 62" stroke="#8a867f" stroke-width="1"/>').join("") +
      [24, 376].map(x => '<rect x="' + (x - 8) + '" y="70" width="16" height="120" fill="#55606a"/>').join("") +
      '<rect x="64" y="18" width="272" height="36" rx="3" fill="#111"/><text x="78" y="42" ' + font + ' font-size="16" fill="#fff">Beacon Hill</text>' + bullet(312, 36, "1", LINK1) +
      '<text x="200" y="236" text-anchor="middle" ' + font + ' font-size="9" fill="#5a5650" letter-spacing="3">STAND BEHIND THE YELLOW LINE</text>',
      "");
  }

  /* 2. The Ave (University Way NE) in the rain, where the two of them met as UW students: old brick storefronts, a record shop sign, the green street sign, a bike locked up */
  function bsave() {
    const shops = [["#8a4a34", "RECORDS"], ["#5a6a7a", "PHO"], ["#93503a", "BOOKS"], ["#6e5e50", "TERIYAKI"]];
    return svg(
      '<rect width="400" height="260" fill="url(#bs2)"/>' +
      shops.map((s, i) => { const x = i * 100; return '<rect x="' + x + '" y="34" width="100" height="126" fill="' + s[0] + '"/><rect x="' + x + '" y="34" width="100" height="6" fill="#3a2a22"/>' +
        '<rect x="' + (x + 12) + '" y="50" width="30" height="28" fill="#2a3442"/><rect x="' + (x + 58) + '" y="50" width="30" height="28" fill="' + (i % 2 ? "#ffd98a" : "#2a3442") + '"/>' +
        '<rect x="' + (x + 6) + '" y="88" width="88" height="16" rx="2" fill="#15171c"/><text class="' + (i === 0 ? "bs-glow" : "") + '" x="' + (x + 50) + '" y="100" text-anchor="middle" ' + font + ' font-size="10" fill="' + [GOLD, BLUE, "#f7f3ea", RED][i] + '" letter-spacing="1">' + s[1] + '</text>' +
        '<rect x="' + (x + 10) + '" y="110" width="52" height="50" fill="#ffe2a8" opacity=".85"/><rect x="' + (x + 68) + '" y="114" width="22" height="46" fill="#2a2420"/>'; }).join("") +
      '<rect x="0" y="160" width="400" height="22" fill="#9a958c"/><rect x="0" y="182" width="400" height="78" fill="#3e4247"/><path d="M0 236h400" stroke="#e8e4dc" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g transform="translate(120 140)"><circle class="bs-wh" cx="0" cy="26" r="13" fill="none" stroke="#222" stroke-width="3"/><circle class="bs-wh" cx="42" cy="26" r="13" fill="none" stroke="#222" stroke-width="3"/><path d="M0 26l14 -20h22l6 20M14 6l-4 -6M36 6l2 -6h6" stroke="' + BLUE + '" stroke-width="3" fill="none"/></g>' +
      '<rect x="318" y="20" width="5" height="162" fill="#2f2f2f"/>' + sign(262, 6, 118, "University Way NE") +
      '<ellipse cx="200" cy="200" rx="160" ry="5" fill="#ffe2a8" opacity=".12"/>' + rain(38),
      sky("bs2", "#6f7c88", "#aab4bc"));
  }

  /* 3. "Joe Metro": a King County Metro electric trolleybus on Rainier Ave S, poles up on the overhead wires, sparks at the hanger, rain over the Rainier Valley */
  function bsbus() {
    const bus = '<g class="bs-bus"><rect x="60" y="110" width="250" height="84" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (110 + i * 38) + '" y="122" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="270" y="122" width="34" height="58" rx="2" fill="#24323e"/><rect x="60" y="160" width="250" height="7" fill="' + METRO + '"/><rect x="60" y="168" width="250" height="4" fill="' + GOLD + '"/>' +
      '<rect x="222" y="111" width="84" height="11" rx="2" fill="#111"/><text x="264" y="119.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">7 RAINIER BEACH</text>' +
      '<path d="M120 110l120 -78M140 110l118 -82" stroke="#3a3e46" stroke-width="3"/>' +
      '<circle cx="106" cy="194" r="12" fill="#222"/><circle cx="106" cy="194" r="5" fill="#9aa1a8"/><circle cx="262" cy="194" r="12" fill="#222"/><circle cx="262" cy="194" r="5" fill="#9aa1a8"/>' +
      '<circle cx="306" cy="182" r="3.5" fill="#fff6c2"/><circle class="bs-spk" cx="246" cy="30" r="5" fill="#bfe8ff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bs3)"/>' +
      '<g fill="#5a6672"><path d="M0 110l40 -30l50 18l60 -34l70 26l60 -20l60 16l60 -10v40h-400z"/></g>' +
      '<g fill="#3c4650"><rect x="0" y="80" width="60" height="70"/><rect x="330" y="70" width="70" height="80"/><rect x="290" y="92" width="44" height="58"/></g>' +
      '<path d="M0 30h400M0 26h400" stroke="#22272c" stroke-width="1.5"/>' +
      '<rect x="0" y="150" width="400" height="24" fill="#9a958c"/><rect x="0" y="174" width="400" height="86" fill="#44484d"/><path d="M0 232h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="356" y="84" width="5" height="90" fill="#6b7178"/><rect x="340" y="66" width="38" height="32" rx="3" fill="' + METRO + '" stroke="#fff" stroke-width="1.5"/><text x="359" y="79" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">METRO</text><text x="359" y="93" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">7</text>' +
      '<text x="20" y="250" ' + font + ' font-size="10" fill="#c9ced6" letter-spacing="3">RAINIER AVE S</text>' + rain(44),
      sky("bs3", "#5c6874", "#9aa6b0"));
  }

  /* 4. The art deco tower on top of Beacon Hill (Pacific Tower, the old Marine Hospital): buff brick setbacks lit at night, and "an infinite inkwell high above the city" with ink dripping from a pen */
  function bstower() {
    const tw = '<g fill="#d8c39a"><rect x="150" y="70" width="100" height="160"/><rect x="164" y="48" width="72" height="30"/><rect x="178" y="30" width="44" height="22"/><rect x="192" y="16" width="16" height="16"/>' +
      '<rect x="110" y="120" width="44" height="110"/><rect x="246" y="120" width="44" height="110"/><rect x="80" y="160" width="34" height="70"/><rect x="286" y="160" width="34" height="70"/></g>' +
      '<g fill="#a88e62">' + Array.from({ length: 7 }, (_, i) => '<rect x="' + (160 + i * 13) + '" y="76" width="4" height="150"/>').join("") + '</g>' +
      Array.from({ length: 6 }, (_, r) => Array.from({ length: 3 }, (_, c) => '<rect class="' + ((r + c) % 3 ? "" : "bs-glow" + (r % 2 ? " bs-g2" : "")) + '" x="' + (116 + c * 12) + '" y="' + (130 + r * 16) + '" width="6" height="9" fill="#ffd98a" opacity=".85"/>').join("") +
        Array.from({ length: 3 }, (_, c) => '<rect class="' + ((r + c) % 2 ? "" : "bs-glow") + '" x="' + (252 + c * 12) + '" y="' + (130 + r * 16) + '" width="6" height="9" fill="#ffd98a" opacity=".85"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bs4)"/>' + stars(26) +
      '<g transform="translate(300 18)"><path d="M0 0h50v14q0 20 -25 20t-25 -20z" fill="#0b1830" stroke="' + BLUE + '" stroke-width="2"/><rect x="8" y="-6" width="34" height="8" rx="2" fill="#0b1830" stroke="' + BLUE + '" stroke-width="2"/>' +
      '<path d="M-30 -12l46 24" stroke="' + GOLD + '" stroke-width="4"/><circle class="bs-drip" cx="25" cy="36" r="3" fill="' + BLUE + '"/></g>' +
      '<path d="M0 230q100 -24 200 -20t200 10v40h-400z" fill="#1c2a1e"/>' + tw +
      '<path d="M0 232h400v28h-400z" fill="#142016"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 30 + 6) + ' 236l8 -26l8 26z" fill="#203a24"/>').join("") +
      '<text x="20" y="252" ' + font + ' font-size="10" fill="#9fc3df" letter-spacing="3">BEACON HILL</text>',
      sky("bs4", "#050b1a", "#1d3557"));
  }

  /* 5. 12th Ave S and S Judkins St by Dr. Jose Rizal Park on the north end of Beacon Hill: green signs, BLUE SCHOLARS tagged on the wall, Mount Rainier's white snowcap rising in the distance */
  function bscorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bs5)"/>' +
      '<g class="bs-cl"><ellipse cx="0" cy="40" rx="40" ry="9" fill="#fff" opacity=".35"/></g><g class="bs-cl bs-cl2"><ellipse cx="0" cy="22" rx="30" ry="7" fill="#fff" opacity=".3"/></g>' +
      '<path d="M60 136l90 -84q10 -8 20 0l26 20l14 -6l120 70z" fill="#7d8ea6"/>' +
      '<path d="M120 80l30 -28q10 -8 20 0l26 20l14 -6l40 26l-24 -6l-16 10l-20 -14l-18 8l-22 -12l-14 8z" fill="#f4f7fb"/>' +
      '<rect x="0" y="122" width="400" height="16" fill="#3e5a3a"/>' + Array.from({ length: 16 }, (_, i) => '<circle cx="' + (i * 27) + '" cy="124" r="11" fill="#2f4a2c"/>').join("") +
      '<rect x="0" y="134" width="400" height="90" fill="#6a6e74"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (i * 70) + ' 134v90" stroke="#5a5e64" stroke-width="2"/>').join("") +
      tag("BLUE SCHOLARS", 18, 188, 34, BLUE, -5) + tag("UPPER LEFT", 28, 216, 18, GOLD, -3) + tag("GEO + SABZI", 150, 216, 17, RED, -3) + tag("MASSLINE", 262, 210, 14, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#4e5156"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(298, 98, 100, "12th Ave S") + sign(294, 124, 106, "S Judkins St") +
      '<g class="bs-sp"><circle cx="186" cy="170" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="bs-sp bs-sp2"><circle cx="192" cy="164" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("bs5", "#8fb3d1", "#e8d2b0"));
  }

  window.SCENES = { bsstation: bsstation, bsave: bsave, bsbus: bsbus, bstower: bstower, bscorner: bscorner };
})();
