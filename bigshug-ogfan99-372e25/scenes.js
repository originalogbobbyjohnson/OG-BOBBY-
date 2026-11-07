/* bigshug scenes (Regions tab: Boston + New England; Mattapan, Boston). CSS classes prefixed bs- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bsflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.bs-flk{animation:bsflick 2.6s infinite}.bs-flk2{animation-delay:.9s}' +
    '@keyframes bsglow{0%,100%{opacity:.4}50%{opacity:1}}.bs-glow{animation:bsglow 2.2s ease-in-out infinite}.bs-g2{animation-delay:-1.1s}' +
    '@keyframes bsbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.bs-ball{animation:bsbounce 1.1s ease-in-out infinite}' +
    '@keyframes bsfly{0%{transform:translate(-60px,0)}100%{transform:translate(470px,-30px)}}.bs-bird{animation:bsfly 9s linear infinite}.bs-b2{animation-delay:-4.5s}' +
    '@keyframes bsflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.bs-wing{transform-box:fill-box;transform-origin:50% 100%;animation:bsflap .5s infinite}' +
    '@keyframes bsripple{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.bs-rip{animation:bsripple 3.4s linear infinite}' +
    '@keyframes bsspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bs-sp{animation:bsspray 1.4s ease-out infinite}.bs-sp2{animation-delay:.45s}' +
    '@keyframes bscar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.bs-car{animation:bscar 7s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const label = (x, y, w0, txt, fill) => { const w = Math.max(w0, Math.round(txt.length * 6.9 + 18)); x = Math.min(x, 400 - w - 6); return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="3" fill="' + (fill || "#1b1b22") + '" stroke="#fff" stroke-width="1"/><text x="' + (x + w / 2) + '" y="' + (y + 15) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>'; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "bs-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#f2b632", PURP = "#80276c", RED = "#c8312b", ICE = "#e8eef4";

  /* 1. Morton Street, Fairmount Line commuter rail in Mattapan: the silver coach with the purple stripe pulling in at the high-level platform, the Morton St bridge behind, the black sign with the purple CR bullet */
  function bsstation() {
    const coach = x => '<rect x="' + x + '" y="112" width="150" height="74" rx="8" fill="#c9ced4" stroke="#6e747b" stroke-width="2"/>' +
      '<rect x="' + x + '" y="160" width="150" height="7" fill="' + PURP + '"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + 10 + i * 28) + '" y="124" width="20" height="24" rx="3" fill="#2a3440"/>').join("") +
      '<rect x="' + (x + 64) + '" y="122" width="22" height="58" rx="2" fill="#a9afb6" stroke="#6e747b" stroke-width="1.5"/>';
    const tr = '<g class="anim-train">' + coach(20) + coach(176) +
      '<path d="M326 112h40q16 0 20 14v60h-60z" fill="#c9ced4" stroke="#6e747b" stroke-width="2"/><rect x="326" y="160" width="60" height="7" fill="' + PURP + '"/>' +
      '<rect x="340" y="122" width="34" height="22" rx="3" fill="#2a3440"/><circle class="bs-flk" cx="378" cy="172" r="4" fill="#fff6c2"/>' +
      [50, 140, 206, 296, 340].map(x => '<rect x="' + x + '" y="184" width="26" height="8" rx="3" fill="#333"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bs1)"/>' +
      '<g fill="#3c4a3a"><circle cx="30" cy="96" r="30"/><circle cx="90" cy="88" r="26"/><circle cx="330" cy="92" r="30"/><circle cx="388" cy="84" r="26"/></g>' +
      /* Morton St road bridge over the tracks */
      '<rect x="0" y="54" width="400" height="20" fill="#8d8a84"/><rect x="0" y="50" width="400" height="5" fill="#6b6862"/>' +
      Array.from({ length: 21 }, (_, i) => '<rect x="' + (i * 20) + '" y="42" width="3" height="10" fill="#4e4c48"/>').join("") + '<rect x="0" y="42" width="400" height="2" fill="#4e4c48"/>' +
      '<g class="bs-car"><rect x="0" y="32" width="40" height="12" rx="4" fill="' + RED + '"/><circle cx="9" cy="45" r="3" fill="#222"/><circle cx="31" cy="45" r="3" fill="#222"/></g>' +
      '<rect x="0" y="74" width="400" height="30" fill="#5d6b58"/>' + tr +
      '<rect x="0" y="192" width="400" height="8" fill="#5a4a3a"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="198" width="8" height="4" fill="#3e3228"/>').join("") +
      /* high-level platform */
      '<rect x="0" y="202" width="400" height="58" fill="#b1aca2"/><rect x="0" y="202" width="400" height="5" fill="#f2c200"/>' +
      '<path d="M0 0h400v16l-14 6H14L0 16z" fill="#3a4250"/>' + [80, 200, 320].map((x, i) => '<rect class="bs-flk' + (i === 1 ? " bs-flk2" : "") + '" x="' + (x - 22) + '" y="20" width="44" height="4" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="96" y="216" width="208" height="32" rx="3" fill="#111"/><text x="108" y="238" ' + font + ' font-size="16" fill="#fff">Morton Street</text>' + badge(250, 232, "CR", PURP),
      sky("bs1", "#f3a65c", "#9fcbe8"));
  }

  /* 2. Harambee Park (Franklin Field) on Blue Hill Ave at Talbot Ave ("From Blue Hill Ave, to Talbot Ave"): the court under the lights, a ball bouncing, the triple-deckers across the street */
  function bsharambee() {
    const td = (x, c) => '<rect x="' + x + '" y="58" width="54" height="78" fill="' + c + '"/><path d="M' + (x - 4) + ' 60h62l-6 -10H' + x + 'z" fill="#4a3a30"/>' +
      [0, 1, 2].map(r => '<rect x="' + (x + 4) + '" y="' + (64 + r * 24) + '" width="46" height="4" fill="#f2efe6"/>' + [0, 1, 2].map(c2 => '<rect class="' + ((r + c2) % 3 ? "" : "bs-glow") + '" x="' + (x + 7 + c2 * 15) + '" y="' + (70 + r * 24) + '" width="9" height="12" fill="#ffd98a"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bs2)"/>' + stars(16) +
      td(10, "#6f8aa6") + td(78, "#b36a4e") + td(146, "#e2c26a") + td(268, "#7aa07a") + td(336, "#8b6fa6") +
      '<rect x="0" y="136" width="400" height="10" fill="#4a4a4a"/>' +
      /* light poles */
      [60, 340].map(x => '<rect x="' + (x - 2) + '" y="40" width="4" height="120" fill="#555"/><rect class="bs-flk" x="' + (x - 14) + '" y="34" width="28" height="8" rx="2" fill="#fffbe0"/>').join("") +
      '<rect x="0" y="146" width="400" height="12" fill="#2f5a2c"/>' +
      /* court */
      '<path d="M20 260L70 158h260l50 102z" fill="#2c6e9e"/><path d="M60 250L96 170h208l36 80z" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<ellipse cx="200" cy="210" rx="30" ry="12" fill="none" stroke="#fff" stroke-width="2"/><path d="M84 210h232" stroke="#fff" stroke-width="2"/>' +
      '<rect x="196" y="122" width="8" height="48" fill="#ddd"/><rect x="180" y="110" width="40" height="26" fill="#fff" stroke="#bbb" stroke-width="1.5"/><rect x="192" y="120" width="16" height="10" fill="none" stroke="' + RED + '" stroke-width="2"/>' +
      '<path d="M190 136h20l-3 12h-14z" fill="none" stroke="#fff" stroke-width="1.5"/>' +
      '<g class="bs-ball"><circle cx="232" cy="196" r="9" fill="#e07a2c" stroke="#7a3a12" stroke-width="1.5"/><path d="M223 196h18M232 187v18" stroke="#7a3a12" stroke-width="1"/></g>' +
      label(12, 230, 176, "HARAMBEE PARK · BLUE HILL AVE", "#0f6b3a"),
      sky("bs2", "#141a3a", "#3f4f86"));
  }

  /* 3. The Old North Church in the North End ("I love my town, not for Paul Revere"): red brick, the white steeple, two lanterns glowing in the tower */
  function bsoldnorth() {
    return svg(
      '<rect width="400" height="260" fill="url(#bs3)"/>' + stars(18) +
      '<g fill="#2a2638"><rect x="0" y="150" width="120" height="80"/><rect x="290" y="140" width="110" height="90"/></g>' +
      [20, 50, 80, 310, 340, 370].map((x, i) => '<rect class="' + (i % 2 ? "bs-glow" : "bs-glow bs-g2") + '" x="' + x + '" y="' + (164 + (i % 3) * 14) + '" width="10" height="12" fill="#ffd98a"/>').join("") +
      /* brick tower and steeple */
      '<rect x="168" y="96" width="64" height="134" fill="#9c4a34"/>' + Array.from({ length: 16 }, (_, i) => '<path d="M168 ' + (102 + i * 8) + 'h64" stroke="#843c28" stroke-width="1"/>').join("") +
      '<rect x="164" y="92" width="72" height="6" fill="#f2efe6"/>' +
      '<rect x="176" y="62" width="48" height="30" fill="#f2efe6"/><path d="M188 90v-20q12 -10 24 0v20z" fill="#2a2a34"/>' +
      '<rect x="182" y="58" width="36" height="5" fill="#dcd8ce"/><rect x="186" y="40" width="28" height="18" fill="#f2efe6"/><path d="M193 56v-10q7 -6 14 0v10z" fill="#2a2a34"/>' +
      '<rect class="bs-flk" x="195" y="47" width="4" height="7" fill="#ffcf5a"/><rect class="bs-flk bs-flk2" x="201" y="47" width="4" height="7" fill="#ffcf5a"/>' +
      '<path d="M190 40l10 -34l10 34z" fill="#f2efe6"/><path d="M200 6v-6" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<path d="M188 230v-40q12 -14 24 0v40z" fill="#3a2220"/><rect x="176" y="112" width="12" height="18" fill="#2a2a34"/><rect x="212" y="112" width="12" height="18" fill="#2a2a34"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#4c4a46"/><path d="M0 238h400" stroke="#6b6862" stroke-width="2" stroke-dasharray="14 10"/>' +
      label(234, 236, 156, "OLD NORTH CHURCH · NORTH END"),
      sky("bs3", "#0e1430", "#38406a"));
  }

  /* 4. Boston Nature Center in Mattapan: the boardwalk over the wetland meadow, cattails, birds flying over */
  function bsnature() {
    const bird = (x, y, cls) => '<g class="bs-bird ' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><path class="bs-wing" d="M0 0q6 -6 12 0q6 -6 12 0" stroke="#222" stroke-width="2" fill="none"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bs4)"/>' +
      '<circle cx="320" cy="50" r="22" fill="#fff3c0"/>' + bird(0, 60, "") + bird(10, 86, "bs-b2") +
      '<g fill="#3c6a3a"><circle cx="20" cy="122" r="34"/><circle cx="80" cy="114" r="30"/><circle cx="140" cy="124" r="26"/><circle cx="270" cy="118" r="32"/><circle cx="340" cy="112" r="36"/><circle cx="396" cy="122" r="28"/></g>' +
      '<rect x="0" y="130" width="400" height="130" fill="#8fae5a"/>' +
      '<rect x="0" y="176" width="400" height="40" fill="#4f7f9a"/><g class="bs-rip">' + Array.from({ length: 13 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (186 + (i % 2) * 16) + 'q10 -5 20 0t20 0" stroke="#a9d0e2" stroke-width="2" fill="none"/>').join("") + '</g>' +
      /* boardwalk */
      '<path d="M120 260L180 140h40l60 120z" fill="#a37a4e"/>' + Array.from({ length: 12 }, (_, i) => { const y = 146 + i * 10, k = (y - 140) / 120; return '<path d="M' + (180 - 60 * k) + ' ' + y + 'H' + (220 + 60 * k) + '" stroke="#7a5634" stroke-width="1.5"/>'; }).join("") +
      '<path d="M118 252L178 136M282 252L222 136" stroke="#6b4a2a" stroke-width="3"/>' +
      [30, 60, 90, 320, 350, 380].map((x, i) => '<path d="M' + x + ' 240v-40" stroke="#5a6a2a" stroke-width="2"/><rect x="' + (x - 2) + '" y="' + (196 - (i % 2) * 6) + '" width="4" height="12" rx="2" fill="#6b3e1e"/>').join("") +
      label(10, 230, 162, "BOSTON NATURE CENTER · MATTAPAN", "#2f5a2c"),
      sky("bs4", "#8cc6ee", "#f3e3b0"));
  }

  /* 5. Blue Hill Ave and Morton St in Mattapan: his name tagged on the wall, the green signs, a purple-striped Fairmount train crossing the bridge behind */
  function bscorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bs5)"/>' + stars(14) +
      '<rect x="0" y="98" width="400" height="10" fill="#6b6862"/>' + Array.from({ length: 11 }, (_, i) => '<rect x="' + (10 + i * 38) + '" y="108" width="6" height="24" fill="#55524c"/>').join("") +
      '<g class="bs-car"><rect x="0" y="76" width="96" height="22" rx="4" fill="#c9ced4"/><rect x="0" y="90" width="96" height="4" fill="' + PURP + '"/>' + [8, 30, 52, 74].map(x => '<rect class="bs-glow" x="' + x + '" y="80" width="14" height="8" fill="#ffe7a8"/>').join("") + '</g>' +
      '<rect x="0" y="132" width="400" height="92" fill="#5d4a3e"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#4e3e34" stroke-width="1"/>').join("") +
      tag("BIG SHUG", 14, 184, 40, GOLD, -6) + tag("SHUGGY", 220, 178, 28, ICE, -4) + tag("THE FOUNDATION", 18, 216, 17, "#fff", -3) + tag("LET IT PLAY", 196, 214, 18, "#e2554a", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="344" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(286, 100, 112, "Blue Hill Ave") + sign(300, 126, 84, "Morton St") +
      '<g class="bs-sp"><circle cx="300" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="bs-sp bs-sp2"><circle cx="306" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("bs5", "#1a1430", "#c0603a"));
  }

  window.SCENES = { bsstation: bsstation, bsharambee: bsharambee, bsoldnorth: bsoldnorth, bsnature: bsnature, bscorner: bscorner };
})();
