/* kingsyze scenes (Regions tab: Philadelphia; North Philly, Puerto Rican Fairhill / Kensington side). CSS classes prefixed kz- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kzflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.kz-flk{animation:kzflick 2.4s infinite}.kz-flk2{animation-delay:.8s}' +
    '@keyframes kzglow{0%,100%{opacity:.5}50%{opacity:1}}.kz-glow{animation:kzglow 2.2s ease-in-out infinite}.kz-g2{animation-delay:-1.1s}' +
    '@keyframes kzwave{0%,100%{transform:skewY(0deg) scaleY(1)}50%{transform:skewY(-5deg) scaleY(.92)}}.kz-flag{transform-box:fill-box;transform-origin:0% 50%;animation:kzwave 1.6s ease-in-out infinite}.kz-f2{animation-delay:-.8s}' +
    '@keyframes kzswing{0%,100%{transform:rotate(-9deg)}50%{transform:rotate(9deg)}}.kz-bag{transform-box:fill-box;transform-origin:50% 0%;animation:kzswing 1.8s ease-in-out infinite}' +
    '@keyframes kzspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kz-sp{animation:kzspray 1.4s ease-out infinite}.kz-sp2{animation-delay:.45s}' +
    '@keyframes kzbird{0%{transform:translate(-40px,0)}100%{transform:translate(440px,-30px)}}.kz-bird{animation:kzbird 9s linear infinite}.kz-b2{animation-delay:-4.5s}' +
    '@keyframes kzbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.kz-bob{animation:kzbob 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "kz-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* Puerto Rican flag (no logo, just the national flag), w x h at x,y */
  const prflag = (x, y, w, cls) => {
    const h = w * 0.62, sh = h / 5;
    let s = '<g class="kz-flag ' + (cls || "") + '">';
    for (let i = 0; i < 5; i++) s += '<rect x="' + x + '" y="' + (y + i * sh) + '" width="' + w + '" height="' + (sh + 0.3) + '" fill="' + (i % 2 ? "#fff" : "#ed0a3f") + '"/>';
    s += '<path d="M' + x + ' ' + y + 'L' + (x + w * 0.42) + ' ' + (y + h / 2) + 'L' + x + ' ' + (y + h) + 'z" fill="#0050f0"/>';
    s += '<circle cx="' + (x + w * 0.13) + '" cy="' + (y + h / 2) + '" r="' + (h * 0.09) + '" fill="#fff"/></g>';
    return s;
  };
  const GOLD = "#f2c14e", RED = "#e4572e", BLUE = "#3d8bfd", MFL = "#0f75bc";

  /* 1. Huntingdon on the Market-Frankford El, high over Kensington Ave: steel girders, the platform canopy, the black sign with the MFL bullet, the blue-striped train sliding in */
  function kzstation() {
    const tr = '<g class="anim-train"><rect x="20" y="104" width="334" height="74" rx="7" fill="#d4d8dd" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 44) + '" y="114" width="30" height="26" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="20" y="148" width="334" height="7" fill="' + MFL + '"/><rect x="20" y="158" width="334" height="2" fill="' + MFL + '"/>' +
      '<rect x="334" y="108" width="20" height="68" rx="4" fill="#a3a9b0"/><circle cx="346" cy="166" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kz1)"/>' +
      /* Kensington rowhouse roofline below the El */
      '<g fill="#3a2a2e"><rect x="0" y="70" width="400" height="30"/></g>' + Array.from({ length: 10 }, (_, i) => '<rect class="kz-flk' + (i % 3 ? "" : " kz-flk2") + '" x="' + (12 + i * 40) + '" y="78" width="10" height="9" fill="#ffd98a" opacity=".8"/>').join("") +
      /* canopy */
      '<rect x="0" y="0" width="400" height="14" fill="#40464f"/><path d="M0 14h400l-10 8H10z" fill="#565d68"/>' +
      [60, 200, 340].map(x => '<rect class="kz-flk" x="' + (x - 22) + '" y="22" width="44" height="4" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="96" width="400" height="86" fill="#2b2e35"/>' + tr +
      /* platform edge + girders */
      '<rect x="0" y="182" width="400" height="7" fill="#f2c200"/><rect x="0" y="189" width="400" height="20" fill="#8e8a84"/>' +
      '<rect x="0" y="209" width="400" height="14" fill="#55606c"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M' + (i * 40) + ' 209l20 14l20 -14" stroke="#3d4650" stroke-width="3" fill="none"/>').join("") +
      '<rect x="0" y="223" width="400" height="37" fill="#1e2228"/>' + [70, 330].map(x => '<rect x="' + (x - 7) + '" y="223" width="14" height="37" fill="#55606c"/>').join("") +
      [28, 372].map(x => '<rect x="' + (x - 6) + '" y="22" width="12" height="160" fill="#4a5562"/>').join("") +
      '<rect x="88" y="34" width="224" height="34" rx="3" fill="#111"/><text x="100" y="57" ' + font + ' font-size="17" fill="#fff">Huntingdon</text>' + badge(244, 51, "MFL", MFL),
      sky("kz1", "#1c2340", "#c0603e"));
  }

  /* 2. Taller Puertorriqueño on N 5th St, El Centro de Oro: the modern arts center with its bright mosaic front, gold-painted lamp posts of the Golden Block, Puerto Rican flags strung over the street */
  function kztaller() {
    const tiles = Array.from({ length: 48 }, (_, i) => { const c = ["#e4572e", "#f2c14e", "#3d8bfd", "#2bb673", "#c43c8f", "#fff"][(i * 7) % 6]; return '<rect x="' + (128 + (i % 12) * 12) + '" y="' + (70 + Math.floor(i / 12) * 12) + '" width="11" height="11" fill="' + c + '"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kz2)"/>' +
      '<g fill="#7b4a3a"><rect x="0" y="80" width="110" height="130"/><rect x="300" y="74" width="100" height="136"/></g>' +
      [0, 1, 2].map(r => [14, 46, 78].map(c => '<rect x="' + c + '" y="' + (94 + r * 34) + '" width="18" height="22" fill="#2a2228"/>').join("") + [314, 346, 378].map(c => '<rect x="' + c + '" y="' + (90 + r * 34) + '" width="16" height="22" fill="#2a2228"/>').join("")).join("") +
      /* the Taller: modern block, glass ground floor, mosaic band */
      '<rect x="118" y="58" width="164" height="152" fill="#efe7d6"/>' + tiles +
      '<rect x="118" y="120" width="164" height="10" fill="#33363d"/><text x="200" y="128.5" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">TALLER PUERTORRIQUEÑO</text>' +
      '<rect x="126" y="138" width="148" height="72" fill="#2c4a5e"/>' + [0, 1, 2, 3].map(i => '<rect x="' + (130 + i * 36) + '" y="142" width="32" height="64" fill="#5f8fa8" opacity=".75"/>').join("") +
      '<rect class="kz-glow" x="130" y="142" width="140" height="10" fill="#fff6c2" opacity=".35"/>' +
      /* flag string across 5th St */
      '<path d="M0 30q200 40 400 0" stroke="#222" stroke-width="1.5" fill="none"/>' +
      [30, 110, 190, 270, 350].map((x, i) => prflag(x - 12, 36 + Math.round(Math.sin(x / 127) * 8) , 24, i % 2 ? "kz-f2" : "")).join("") +
      /* gold lamp posts of the Golden Block */
      [96, 304].map(x => '<rect x="' + (x - 3) + '" y="120" width="6" height="92" fill="' + GOLD + '"/><rect x="' + (x - 12) + '" y="110" width="24" height="12" rx="4" fill="' + GOLD + '"/><circle class="kz-glow" cx="' + x + '" cy="116" r="7" fill="#fff6c2" opacity=".7"/>').join("") +
      '<rect x="0" y="210" width="400" height="10" fill="#b8b2a6"/><rect x="0" y="220" width="400" height="40" fill="#46484e"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      sign(18, 186, 74, "N 5th St"),
      sky("kz2", "#5aa6e0", "#f4d7a0"));
  }

  /* 3. Joe Frazier's old gym, 2917 N Broad St: three-story red-brick front, the arched window, a heavy bag swinging inside under the lights ("I be going out boxing") */
  function kzgym() {
    return svg(
      '<rect width="400" height="260" fill="url(#kz3)"/>' + stars(10) +
      '<rect x="70" y="40" width="260" height="172" fill="#8e3b2b"/>' + Array.from({ length: 21 }, (_, i) => '<path d="M70 ' + (48 + i * 8) + 'h260" stroke="#7a3022" stroke-width="1"/>').join("") +
      '<rect x="64" y="34" width="272" height="10" fill="#5d2a20"/>' +
      [0, 1].map(r => [96, 152, 208, 264].map(c => '<rect x="' + c + '" y="' + (56 + r * 40) + '" width="40" height="28" fill="#2a2228" stroke="#d8c8a8" stroke-width="2"/>').join("")).join("") +
      '<rect x="110" y="138" width="180" height="16" fill="#1d1d22"/><text x="200" y="150" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">2917 N BROAD · GYM</text>' +
      /* big lit window with the bag */
      '<rect x="120" y="158" width="160" height="54" fill="#ffd98a"/><rect class="kz-glow" x="120" y="158" width="160" height="54" fill="#fff6c2" opacity=".5"/>' +
      '<path d="M120 158h160" stroke="#d8c8a8" stroke-width="3"/><path d="M200 158v54" stroke="#d8c8a8" stroke-width="2"/>' +
      '<g class="kz-bag"><path d="M160 158v8" stroke="#333" stroke-width="2"/><rect x="152" y="166" width="16" height="36" rx="7" fill="#b2262b" stroke="#5a1214" stroke-width="2"/></g>' +
      '<rect x="222" y="190" width="40" height="6" fill="#5a1214"/><path d="M226 196v16M258 196v16" stroke="#333" stroke-width="2"/>' +
      '<rect x="300" y="160" width="22" height="52" fill="#3b2620"/><circle cx="317" cy="188" r="1.6" fill="' + GOLD + '"/>' +
      '<rect x="0" y="212" width="400" height="10" fill="#b8b2a6"/><rect x="0" y="222" width="400" height="38" fill="#3c3e44"/>' +
      sign(318, 70, 76, "N Broad St"),
      sky("kz3", "#0f1430", "#7a3a56"));
  }

  /* 4. Las Parcelas in Norris Square: the Puerto Rican casita garden, the little bright-painted wooden house on stilts, the mural wall, flowers and birds, a flag on the porch */
  function kzparcelas() {
    return svg(
      '<rect width="400" height="260" fill="url(#kz4)"/>' +
      '<g class="kz-bird"><path d="M0 40q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="kz-bird kz-b2"><path d="M0 70q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* mural wall */
      '<rect x="0" y="92" width="400" height="80" fill="#f2e4c8"/>' +
      '<path d="M0 172q60 -60 130 -20t140 -30t130 10v40H0z" fill="#2bb673"/><circle cx="330" cy="118" r="18" fill="' + GOLD + '"/>' +
      '<path d="M20 150q30 -40 60 0" stroke="#3d8bfd" stroke-width="6" fill="none"/><path d="M90 160q20 -50 50 -10" stroke="#e4572e" stroke-width="5" fill="none"/>' +
      /* casita */
      '<g transform="translate(150 96)"><path d="M0 40l50 -34l50 34z" fill="#c43c8f"/><rect x="6" y="40" width="88" height="56" fill="#f7d046"/>' +
      '<rect x="40" y="56" width="20" height="40" fill="#2bb673"/><rect x="14" y="52" width="18" height="16" fill="#3d8bfd"/><rect x="68" y="52" width="18" height="16" fill="#3d8bfd"/>' +
      '<rect x="0" y="96" width="100" height="6" fill="#7a4a2a"/>' + [6, 30, 70, 94].map(x => '<rect x="' + (x - 2) + '" y="102" width="4" height="12" fill="#7a4a2a"/>').join("") +
      '<path d="M0 82h100" stroke="#fff" stroke-width="2"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M' + (i * 10) + ' 82v14" stroke="#fff" stroke-width="2"/>').join("") + '</g>' +
      '<rect x="252" y="100" width="2" height="40" fill="#555"/>' + prflag(254, 100, 26, "") +
      /* garden beds + flowers */
      '<rect x="0" y="210" width="400" height="50" fill="#6b4a2e"/>' +
      Array.from({ length: 16 }, (_, i) => '<g class="kz-bob" style="animation-delay:' + (-i * 0.17).toFixed(2) + 's"><path d="M' + (12 + i * 25) + ' 214v-16" stroke="#2a7a3a" stroke-width="2"/><circle cx="' + (12 + i * 25) + '" cy="196" r="5" fill="' + ["#e4572e", "#f2c14e", "#c43c8f", "#fff"][i % 4] + '"/></g>').join("") +
      '<rect x="20" y="226" width="110" height="20" rx="3" fill="#7d5a3c"/><text x="75" y="240" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">LAS PARCELAS</text>',
      sky("kz4", "#7cc4f0", "#fbe3b2"));
  }

  /* 5. N 5th St and W Lehigh Ave: the brick wall with KING SYZE tagged, the green signs, Center City's towers glowing far down behind */
  function kzcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#kz5)"/>' + stars(14) +
      '<g fill="#2a2f4a"><rect x="150" y="38" width="22" height="96"/><rect x="176" y="20" width="26" height="114"/><path d="M176 20l13 -14l13 14z"/><rect x="206" y="50" width="20" height="84"/><rect x="230" y="64" width="18" height="70"/><rect x="128" y="70" width="18" height="64"/></g>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect class="kz-glow' + (i % 2 ? " kz-g2" : "") + '" x="' + (181 + (i % 3) * 6) + '" y="' + (34 + Math.floor(i / 3) * 18) + '" width="3" height="8" fill="#ffd98a"/>').join("") +
      '<g fill="#22263a"><rect x="0" y="92" width="110" height="44"/><rect x="270" y="86" width="64" height="50"/><rect x="336" y="100" width="64" height="36"/></g>' +
      '<rect x="0" y="132" width="400" height="92" fill="#8a4a36"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#743c2c" stroke-width="1"/>').join("") +
      tag("KING SYZE", 14, 186, 46, GOLD, -6) + tag("QD", 266, 178, 30, BLUE, -4) + tag("NORTH PHILLY", 24, 216, 18, "#fff", -3) + tag("LABOR UNION", 176, 214, 18, RED, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="340" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(304, 98, 78, "N 5th St") + sign(292, 124, 102, "W Lehigh Ave") +
      '<g class="kz-sp"><circle cx="212" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="kz-sp kz-sp2"><circle cx="218" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("kz5", "#121a36", "#c86a4a"));
  }

  window.SCENES = { kzstation: kzstation, kztaller: kztaller, kzgym: kzgym, kzparcelas: kzparcelas, kzcorner: kzcorner };
})();
