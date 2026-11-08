/* bigscarr scenes (Regions tab: Memphis + Tennessee; South Memphis). CSS classes and ids prefixed bz- (the page's own anim-train is kept).
   1 Central Station, 545 S Main St: the end of MATA's Main Street trolley line, a vintage trolley rolling in under the station's arched windows.
   2 A South Memphis block on Mississippi Blvd: shotgun houses, a rooftop TV antenna ("Straight from South Memphis, we never had cable"), a Scat Pack rolling by.
   3 LeMoyne-Owen College, Steele Hall on Walker Ave: two-story brick, flat parapet, triple windows, concrete trim and diamonds; purple and gold banners.
   4 Clayborn Temple on Hernando St: rusticated gray granite, the square buttressed bell tower, the big stained-glass drop arch.
   5 Mississippi Blvd and Walker Ave: green signs, BIG SCARR tagged on the wall, ice snowing down, the downtown skyline behind.
   400 x 260 SVGs. No logos, no faces. No 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bzflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.bz-flk{animation:bzflick 2.6s infinite}.bz-flk2{animation-delay:-1.1s}' +
    '@keyframes bzcar{from{transform:translateX(-190px)}to{transform:translateX(430px)}}.bz-car{animation:bzcar 6s linear infinite;animation-delay:-2s}' +
    '@keyframes bzglow{0%,100%{opacity:.35}50%{opacity:1}}.bz-gl{animation:bzglow 2.2s ease-in-out infinite}.bz-gl2{animation-delay:-1.1s}' +
    '@keyframes bzwave{0%,100%{transform:skewX(0)}50%{transform:skewX(-8deg)}}.bz-flag{transform-box:fill-box;transform-origin:0 0;animation:bzwave 1.6s ease-in-out infinite}.bz-flag2{animation-delay:-.8s}' +
    '@keyframes bzbird{0%{transform:translate(0,0)}100%{transform:translate(-440px,-30px)}}.bz-bird{animation:bzbird 9s linear infinite}.bz-bird2{animation-delay:-4.5s}' +
    '@keyframes bzsnow{0%{transform:translateY(-20px);opacity:0}15%{opacity:1}100%{transform:translateY(250px);opacity:.2}}.bz-sn{animation:bzsnow 5s linear infinite}.bz-sn2{animation-delay:-1.7s}.bz-sn3{animation-delay:-3.4s}' +
    '@keyframes bzspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bz-sp{animation:bzspray 1.4s ease-out infinite}.bz-sp2{animation-delay:.45s}' +
    '@keyframes bztw{0%,100%{opacity:.3}50%{opacity:1}}.bz-tw{animation:bztw 1.8s ease-in-out infinite}.bz-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="bz-tw' + (i % 2 ? ' bz-tw2' : '') + '" cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.8 : 1.4) + '" fill="#fff"/>').join("");
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const flake = (x, y, r, cls) => '<g class="' + cls + '"><path d="M' + x + ' ' + (y - r) + 'V' + (y + r) + 'M' + (x - r) + ' ' + y + 'H' + (x + r) + 'M' + (x - r * .7) + ' ' + (y - r * .7) + 'L' + (x + r * .7) + ' ' + (y + r * .7) + 'M' + (x - r * .7) + ' ' + (y + r * .7) + 'L' + (x + r * .7) + ' ' + (y - r * .7) + '" stroke="#dff6ff" stroke-width="1.4" stroke-linecap="round"/></g>';
  const ICE = "#8fe3ff", SILVER = "#c9d6df", PURP = "#5b2a86", GOLD = "#f2b632", TROL = "#2e7d4f", BRICK = "#9a4a32";

  /* 1. Central Station on S Main St, the end of the Main Street trolley line */
  function bzstation() {
    const arches = Array.from({ length: 5 }, (_, i) => '<path d="M' + (66 + i * 58) + ' 96v-30a18 18 0 0 1 36 0v30z" fill="#2b2622"/><path d="M' + (70 + i * 58) + ' 94v-28a14 14 0 0 1 28 0v28z" fill="' + (i % 2 ? '#ffd98a' : '#3a4656') + '" class="' + (i % 2 ? 'bz-gl' : '') + '"/>').join("");
    const trolley = '<g class="anim-train"><rect x="40" y="128" width="300" height="64" rx="8" fill="' + TROL + '" stroke="#1d4a30" stroke-width="2"/>' +
      '<rect x="40" y="128" width="300" height="12" rx="6" fill="#e8dcb8"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (56 + i * 34) + '" y="144" width="24" height="22" rx="3" fill="#1b2633"/>').join("") +
      '<rect x="40" y="172" width="300" height="5" fill="' + GOLD + '"/><rect x="296" y="116" width="40" height="12" rx="2" fill="#111"/><text x="316" y="125" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">MAIN ST</text>' +
      '<path d="M180 128l-26 -32" stroke="#333" stroke-width="2.5"/><circle cx="154" cy="96" r="2.5" fill="#333"/>' +
      '<circle cx="90" cy="194" r="9" fill="#222"/><circle cx="290" cy="194" r="9" fill="#222"/><circle cx="336" cy="178" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bzs1)"/>' + stars(16) +
      '<rect x="40" y="30" width="320" height="80" fill="#c9a77c"/><rect x="40" y="30" width="320" height="8" fill="#e6d3b3"/><rect x="40" y="100" width="320" height="10" fill="#e6d3b3"/>' + arches +
      '<path d="M0 88h400" stroke="#2a2a2a" stroke-width="1.5"/><path d="M0 92h400" stroke="#2a2a2a" stroke-width="1"/>' +
      '<rect x="0" y="110" width="400" height="10" fill="#6d6f73"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#4a4b50"/><path d="M0 206h400M0 214h400" stroke="#9aa0a6" stroke-width="2"/>' + trolley +
      '<rect x="8" y="200" width="6" height="56" fill="#333"/><rect x="0" y="222" width="400" height="38" fill="#7b7d82"/><rect x="0" y="222" width="400" height="5" fill="#f2c200"/>' +
      '<rect x="84" y="6" width="232" height="22" rx="3" fill="#111"/><text x="100" y="22" ' + font + ' font-size="13" fill="#fff">Central Station</text>' + badge(214, 17, "MAIN", TROL) + badge(268, 17, "12", "#0057a8") +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#26262a">545 S MAIN ST  ·  SOUTH MAIN</text>',
      sky("bzs1", "#0d1a2e", "#3f4f6e"));
  }

  /* 2. South Memphis block on Mississippi Blvd: shotgun houses, an antenna on the roof, a Scat Pack rolling by */
  function bzblock() {
    const house = (x, c, lit) => '<path d="M' + x + ' 150v-58l36 -26l36 26v58z" fill="' + c + '"/><path d="M' + (x - 4) + ' 94l40 -30l40 30" stroke="#3a2a22" stroke-width="5" fill="none"/>' +
      '<rect x="' + (x + 8) + '" y="104" width="20" height="24" fill="' + (lit ? '#ffd98a' : '#26323e') + '" class="' + (lit ? 'bz-gl' : '') + '"/><rect x="' + (x + 44) + '" y="104" width="18" height="46" fill="#4a3324"/>' +
      '<rect x="' + (x - 6) + '" y="140" width="84" height="6" fill="#d8d2c4"/><path d="M' + (x - 2) + ' 146v12M' + (x + 70) + ' 146v12" stroke="#d8d2c4" stroke-width="3"/>';
    const car = '<g class="bz-car"><path d="M10 206l14 -18h70l22 18h40v20H6v-20z" fill="#1c1c22"/><path d="M30 190h28v14H22zM62 190h28l16 14H62z" fill="#3a4a5c"/>' +
      '<rect x="6" y="210" width="150" height="4" fill="' + ICE + '"/><path d="M114 206h40" stroke="#555" stroke-width="2"/>' +
      '<circle cx="38" cy="228" r="11" fill="#111"/><circle cx="38" cy="228" r="5" fill="#888"/><circle cx="126" cy="228" r="11" fill="#111"/><circle cx="126" cy="228" r="5" fill="#888"/><circle cx="154" cy="212" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bzs2)"/>' +
      '<circle cx="330" cy="40" r="20" fill="#ffcf8a" opacity=".85"/>' +
      house(14, "#b8c4cc", false) + house(116, "#d9c9a8", true) + house(218, "#a8b89a", false) + house(320, "#c7a6a0", true) +
      '<path d="M152 66v-26M140 46h24M144 52h16M146 40h12" stroke="#2a2a2a" stroke-width="2"/>' +
      '<path d="M0 30q100 10 200 4t200 6" stroke="#333" stroke-width="1.2" fill="none"/>' +
      '<rect x="0" y="158" width="400" height="20" fill="#bdb8ae"/><rect x="0" y="178" width="400" height="82" fill="#3e3f45"/><path d="M0 244h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      car + sign(270, 10, 120, "MISSISSIPPI BLVD"),
      sky("bzs2", "#ef8a5a", "#f7d6a6"));
  }

  /* 3. LeMoyne-Owen College, Steele Hall on Walker Ave */
  function bzlemoyne() {
    const bay = (x) => '<rect x="' + x + '" y="92" width="54" height="26" fill="#2c3846"/><rect x="' + x + '" y="136" width="54" height="26" fill="#2c3846"/>' +
      '<path d="M' + (x + 18) + ' 92v26M' + (x + 36) + ' 92v26M' + (x + 18) + ' 136v26M' + (x + 36) + ' 136v26" stroke="#e8e2d4" stroke-width="2"/>' +
      '<rect x="' + (x - 2) + '" y="118" width="58" height="4" fill="#e8e2d4"/><rect x="' + (x - 2) + '" y="162" width="58" height="4" fill="#e8e2d4"/><rect x="' + (x - 2) + '" y="88" width="58" height="4" fill="#e8e2d4"/>';
    const piers = [34, 100, 166, 232, 298, 364].map(x => '<rect x="' + x + '" y="70" width="6" height="106" fill="#8a3e2a"/>').join("");
    const dia = [46, 112, 178, 244, 310].map(x => '<path d="M' + (x + 22) + ' 76l5 -5l5 5l-5 5z" fill="#e8e2d4"/>').join("");
    const flag = (x, c, c2, cls) => '<rect x="' + x + '" y="150" width="2" height="60" fill="#555"/><g class="' + cls + '"><rect x="' + (x + 2) + '" y="152" width="18" height="34" fill="' + c + '"/><rect x="' + (x + 2) + '" y="180" width="18" height="6" fill="' + c2 + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bzs3)"/>' +
      '<rect x="30" y="62" width="340" height="114" fill="' + BRICK + '"/><rect x="26" y="58" width="348" height="8" fill="#e8e2d4"/>' + piers + dia +
      [44, 110, 176, 242, 308].map(x => bay(x)).join("") +
      '<rect x="0" y="176" width="400" height="12" fill="#cfc8b8"/><rect x="0" y="188" width="400" height="72" fill="#6aa04a"/><rect x="0" y="216" width="400" height="44" fill="#55565c"/>' +
      flag(60, PURP, GOLD, "bz-flag") + flag(330, GOLD, PURP, "bz-flag bz-flag2") +
      '<rect x="130" y="196" width="140" height="18" rx="2" fill="' + PURP + '"/><text x="200" y="209" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">LEMOYNE-OWEN COLLEGE</text>' +
      '<g class="bz-bird"><path d="M360 30q4 -4 8 0q4 -4 8 0" stroke="#333" stroke-width="1.5" fill="none"/></g><g class="bz-bird bz-bird2"><path d="M380 44q3 -3 6 0q3 -3 6 0" stroke="#333" stroke-width="1.5" fill="none"/></g>' +
      sign(270, 230, 120, "WALKER AVE"),
      sky("bzs3", "#6fb2e6", "#d6ecf8"));
  }

  /* 4. Clayborn Temple on Hernando St: gray granite, the square bell tower, the stained-glass drop arch */
  function bzclayborn() {
    const stone = (x, y, w, h) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#8d8a86"/>' +
      Array.from({ length: Math.floor(h / 10) }, (_, i) => '<path d="M' + x + ' ' + (y + 10 + i * 10) + 'h' + w + '" stroke="#6f6c68" stroke-width="1"/>').join("");
    const glass = '<path d="M168 196v-60a42 50 0 0 1 84 0v60z" fill="#2a2140"/>' +
      ['#c0392b', '#2e86c1', '#f1c40f', '#27ae60', '#8e44ad', '#e67e22'].map((c, i) => '<rect class="bz-gl' + (i % 2 ? ' bz-gl2' : '') + '" x="' + (176 + i * 12) + '" y="128" width="9" height="62" fill="' + c + '" opacity=".85"/>').join("") +
      '<circle cx="210" cy="112" r="14" fill="#f1c40f" class="bz-gl" opacity=".8"/><path d="M210 98v28M196 112h28" stroke="#2a2140" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bzs4)"/>' +
      stone(130, 100, 160, 106) + '<path d="M120 104l90 -54l90 54z" fill="#7c7974"/><path d="M120 104l90 -54l90 54" stroke="#5e5b57" stroke-width="3" fill="none"/>' + glass +
      stone(36, 40, 70, 166) + '<rect x="30" y="34" width="82" height="10" fill="#76736e"/>' +
      [52, 70, 88].map(x => '<path d="M' + (x - 6) + ' 74v-14a6 6 0 0 1 12 0v14z" fill="#2a2a2e"/><path d="M' + (x - 6) + ' 106v-14a6 6 0 0 1 12 0v14z" fill="#2a2a2e"/>').join("") +
      '<path d="M56 206v-40a15 18 0 0 1 30 0v40z" fill="#3a2a22"/>' +
      '<path d="M30 206l6 -40v40zM112 206l-6 -40v40z" fill="#76736e"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#55565c"/><rect x="0" y="206" width="400" height="8" fill="#b9b4aa"/>' +
      '<g class="bz-bird"><path d="M380 60q4 -4 8 0q4 -4 8 0" stroke="#222" stroke-width="1.5" fill="none"/></g><g class="bz-bird bz-bird2"><path d="M400 76q3 -3 6 0q3 -3 6 0" stroke="#222" stroke-width="1.5" fill="none"/></g>' +
      '<rect x="300" y="160" width="86" height="30" rx="2" fill="#1d1d22"/><text x="343" y="173" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">CLAYBORN</text><text x="343" y="184" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">TEMPLE</text>' +
      sign(276, 226, 110, "HERNANDO ST"),
      sky("bzs4", "#1e2a44", "#c9785a"));
  }

  /* 5. Mississippi Blvd and Walker Ave: BIG SCARR on the wall, ice snowing, downtown behind */
  function bzcorner() {
    const towers = [[20, 70, 30], [56, 50, 26], [88, 84, 22], [118, 40, 34], [160, 62, 20], [186, 30, 28], [222, 56, 24], [250, 76, 30], [290, 46, 26], [322, 66, 22], [350, 54, 30]]
      .map(([x, h, w], i) => '<rect x="' + x + '" y="' + (120 - h) + '" width="' + w + '" height="' + h + '" fill="' + (i % 2 ? '#1c2636' : '#232f42') + '"/>' +
        Array.from({ length: Math.floor(h / 12) }, (_, j) => '<rect class="' + ((i + j) % 3 ? '' : 'bz-tw') + '" x="' + (x + 5) + '" y="' + (124 - h + j * 12) + '" width="' + (w - 10) + '" height="3" fill="#ffd98a" opacity=".55"/>').join("")).join("");
    const snow = Array.from({ length: 14 }, (_, i) => flake((i * 29 + 12) % 400, 10 + (i * 17) % 40, 3 + (i % 3), 'bz-sn' + (i % 3 === 1 ? ' bz-sn2' : i % 3 === 2 ? ' bz-sn3' : ''))).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bzs5)"/>' + stars(18) + towers +
      '<rect x="0" y="120" width="400" height="140" fill="#3b3f4a"/>' +
      '<rect x="0" y="126" width="290" height="96" fill="#5d4a42"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M0 ' + (134 + i * 10) + 'h290" stroke="#4d3c35" stroke-width="1"/>').join("") +
      tag("BIG SCARR", 26, 176, 42, ICE, -6) + tag("GRIM REAPER GANG", 40, 208, 18, SILVER, -3) +
      '<g class="bz-sp"><circle cx="246" cy="150" r="3" fill="' + ICE + '"/></g><g class="bz-sp bz-sp2"><circle cx="252" cy="156" r="2" fill="' + ICE + '"/></g>' +
      '<rect x="318" y="96" width="6" height="140" fill="#5f6b5a"/>' + sign(270, 92, 128, "MISSISSIPPI BLVD") + sign(290, 118, 92, "WALKER AVE") +
      '<rect x="0" y="222" width="400" height="38" fill="#2f3036"/><rect x="0" y="222" width="400" height="6" fill="#9a968e"/>' + snow,
      sky("bzs5", "#081220", "#28405e"));
  }

  window.SCENES = { bzstation: bzstation, bzblock: bzblock, bzlemoyne: bzlemoyne, bzclayborn: bzclayborn, bzcorner: bzcorner };
})();
