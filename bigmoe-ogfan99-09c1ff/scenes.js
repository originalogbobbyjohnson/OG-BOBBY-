/* bigmoe scenes (Regions tab: Houston + Texas; Third Ward). CSS classes and ids prefixed bm- (the page's own anim-train is kept).
   1 METRORail Purple Line pulling into Elgin/Third Ward on Scott St: the street-median platform, its canopy, the catenary, the black station sign with the Purple bullet.
   2 Jack Yates High School ("Tha Yard"), where he was a football star ("singing way back at the Jack"): the crimson-and-gold campus, LIONS banners, the field lights flickering.
   3 Emancipation Park on Emancipation Ave, the freedmen's park bought in 1872: the long pavilion roof, the pool rippling, live oaks.
   4 "Me, my mic and my stage": a stage at night, a mic stand in the spotlight, lights sweeping, the crowd's hands waving side to side, an S.U.C. banner.
   5 Holman St and Sampson St by Yates: green street signs, BIG MOE tagged on the wall, the downtown ballpark's arched roof and its little train behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bmleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.bm-leaf{transform-box:fill-box;transform-origin:50% 100%;animation:bmleaf 3s ease-in-out infinite}' +
    '@keyframes bmflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.bm-flk{animation:bmflick 2.2s infinite}.bm-flk2{animation-delay:.8s}' +
    '@keyframes bmwave{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}.bm-wave{animation:bmwave 2s ease-in-out infinite}' +
    '@keyframes bmhand{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.bm-hand{transform-box:fill-box;transform-origin:50% 100%;animation:bmhand 1.6s ease-in-out infinite}.bm-h2{animation-delay:-.8s}' +
    '@keyframes bmbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.bm-beam{transform-box:view-box;animation:bmbeam 4s ease-in-out infinite}' +
    '@keyframes bmflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.bm-flag{transform-box:fill-box;transform-origin:0% 50%;animation:bmflag 1.6s ease-in-out infinite}' +
    '@keyframes bmtrain{0%,100%{transform:translateX(0)}50%{transform:translateX(60px)}}.bm-toy{animation:bmtrain 6s ease-in-out infinite}' +
    '@keyframes bmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bm-sp{animation:bmspray 1.4s ease-out infinite}.bm-sp2{animation-delay:.45s}' +
    '@keyframes bmbird{0%{transform:translateX(-40px)}100%{transform:translateX(440px)}}.bm-bird{animation:bmbird 14s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 89) % 400) + '" cy="' + (6 + (i * 47) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const PUR = "#6f2c91", CRIMSON = "#a0142c", GOLD = "#ffc83d", LAV = "#c9a7ff", PINK = "#ff6fae";
  const oak = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-5" y="0" width="10" height="44" fill="#5b4632"/><path d="M-5 12l-18 -10M5 10l18 -12" stroke="#5b4632" stroke-width="5"/><g class="bm-leaf"><ellipse cx="0" cy="-8" rx="44" ry="22" fill="#3f6b35"/><ellipse cx="-22" cy="-16" rx="22" ry="14" fill="#4d7d40"/><ellipse cx="22" cy="-14" rx="20" ry="12" fill="#4d7d40"/></g></g>';

  /* 1. METRORail Purple Line, Elgin/Third Ward */
  function bmstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="122" width="36" height="26" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><path d="M24 182V120q0 -12 14 -12h300q24 0 30 30v44z" fill="#eef0f2" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="24" y="156" width="344" height="8" fill="' + PUR + '"/><rect x="24" y="166" width="344" height="3" fill="#9aa3ab"/>' +
      '<path d="M340 112q22 4 26 30h-26z" fill="#1c2630"/><circle cx="356" cy="174" r="3.5" fill="#fff6c2"/>' +
      '<rect x="200" y="98" width="70" height="10" fill="#8a939b"/><path d="M210 98l25 -26l25 26" stroke="#555" stroke-width="2" fill="none"/>' +
      '<rect x="40" y="110" width="92" height="10" rx="2" fill="#111"/><text x="86" y="118" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">PURPLE · PALM CENTER</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bms1)"/>' +
      '<path d="M0 72h400" stroke="#333" stroke-width="1.5"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="68" width="6" height="120" fill="#7a8088"/><path d="M' + (x - 22) + ' 72h44" stroke="#7a8088" stroke-width="3"/>').join("") +
      oak(14, 186, 0.9) + oak(390, 186, 0.9) +
      '<rect x="0" y="94" width="400" height="10" fill="#c9c3b7"/><rect x="0" y="82" width="400" height="6" fill="' + PUR + '"/>' + [100, 300].map(x => '<path d="M' + (x - 50) + ' 82l50 -16l50 16z" fill="#d9d4ca"/>').join("") +
      train +
      '<rect x="0" y="186" width="400" height="8" fill="#f2c200"/><rect x="0" y="194" width="400" height="66" fill="#a8a296"/><path d="M0 226h400" stroke="#968f83" stroke-width="2"/>' +
      '<rect x="40" y="206" width="320" height="34" rx="3" fill="#111"/><text x="54" y="229" ' + font + ' font-size="15" fill="#fff">Elgin/Third Ward</text>' +
      '<rect x="262" y="214" width="84" height="18" rx="9" fill="' + PUR + '"/><text x="304" y="227" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">PURPLE</text>',
      sky("bms1", "#6aa7dd", "#f7dcb4"));
  }

  /* 2. Jack Yates High School, Tha Yard */
  function bmyates() {
    const lightPole = x => '<rect x="' + (x - 2) + '" y="44" width="4" height="104" fill="#777"/><rect x="' + (x - 16) + '" y="34" width="32" height="14" rx="2" fill="#333"/>' +
      [0, 1, 2, 3].map(i => '<circle class="bm-flk' + (i % 2 ? " bm-flk2" : "") + '" cx="' + (x - 11 + i * 7.3) + '" cy="41" r="2.6" fill="#fff8cf"/>').join("");
    const bldg = '<rect x="120" y="84" width="230" height="104" fill="#c8b8a0"/><rect x="120" y="84" width="230" height="16" fill="' + CRIMSON + '"/>' +
      '<text x="235" y="96" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" fill="' + GOLD + '">JACK YATES HIGH SCHOOL</text>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (132 + i * 31) + '" y="108" width="24" height="30" fill="#5c7a92"/>').join("") +
      '<rect x="216" y="150" width="40" height="38" fill="#3a2a22"/><rect x="120" y="140" width="230" height="5" fill="' + GOLD + '"/>';
    const banner = (x, t, c1, c2) => '<rect x="' + x + '" y="150" width="52" height="30" fill="' + c1 + '" stroke="' + c2 + '" stroke-width="2"/><text x="' + (x + 26) + '" y="169" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + c2 + '">' + t + '</text>';
    const flag = '<rect x="96" y="40" width="4" height="148" fill="#ccc"/><g class="bm-flag"><rect x="100" y="42" width="40" height="24" fill="' + CRIMSON + '"/><rect x="100" y="51" width="40" height="6" fill="' + GOLD + '"/></g>';
    const field = '<rect x="0" y="188" width="400" height="72" fill="#3f8a3a"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<path d="M' + (i * 56) + ' 188l' + (-20 + i * 2) + ' 72" stroke="#fff" stroke-width="2" opacity=".7"/>').join("") +
      '<path d="M0 204h400" stroke="#fff" stroke-width="2" opacity=".5"/><path d="M60 236h20M60 236v-10M80 236v-10" stroke="' + GOLD + '" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bms2)"/>' + stars(16) + lightPole(40) + lightPole(380) + flag + bldg +
      banner(130, "LIONS", CRIMSON, GOLD) + banner(290, "THA YARD", GOLD, CRIMSON) + field,
      sky("bms2", "#14102a", "#4a2a4a"));
  }

  /* 3. Emancipation Park */
  function bmpark() {
    const pav = '<path d="M60 112l140 -26l140 26z" fill="#d7d2c6" stroke="#8b8478" stroke-width="2"/><rect x="60" y="112" width="280" height="8" fill="#b9b2a4"/>' +
      [76, 132, 188, 244, 300, 330].map(x => '<rect x="' + x + '" y="120" width="6" height="48" fill="#9a9284"/>').join("") +
      '<rect x="150" y="128" width="100" height="40" fill="#e4dccb" stroke="#9a9284" stroke-width="2"/><text x="200" y="146" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="' + CRIMSON + '">EMANCIPATION</text><text x="200" y="160" text-anchor="middle" ' + font + ' font-size="8" fill="#333">PARK · EST. 1872</text>';
    const pool = '<path d="M20 186h360l10 46h-380z" fill="#28a7d8"/><path d="M20 186h360" stroke="#efe8d6" stroke-width="6"/>' +
      '<g class="bm-wave">' + [200, 214, 226].map(y => '<path d="M36 ' + y + 'q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#c8f1ff" stroke-width="2" fill="none" opacity=".6"/>').join("") + '</g>' +
      [80, 200, 320].map(x => '<path d="M' + x + ' 186v46" stroke="#fff" stroke-width="2" stroke-dasharray="4 4" opacity=".7"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bms3)"/>' +
      '<g class="bm-bird"><path d="M0 40q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      oak(30, 140, .9) + oak(372, 140, .9) + '<rect x="0" y="168" width="400" height="92" fill="#cfc6b2"/>' + pav + pool,
      sky("bms3", "#6fb2e6", "#f6e6c4"));
  }

  /* 4. Me, my mic and my stage */
  function bmstage() {
    const beams = [70, 200, 330].map((x, i) => '<g class="bm-beam" style="transform-origin:' + x + 'px 0px;animation-delay:' + (-i * 1.3) + 's"><path d="M' + (x - 6) + ' 0l-46 190h104l-46 -190z" fill="' + [LAV, GOLD, PINK][i] + '" opacity=".16"/></g>').join("");
    const stage = '<rect x="30" y="150" width="340" height="18" fill="#2a2030"/><rect x="30" y="148" width="340" height="4" fill="' + GOLD + '"/>';
    const mic = '<path d="M200 148v-70" stroke="#bbb" stroke-width="3"/><path d="M186 148h28" stroke="#bbb" stroke-width="3"/><path d="M200 84l16 -10" stroke="#bbb" stroke-width="3"/><rect x="212" y="64" width="10" height="16" rx="5" fill="#444" transform="rotate(-32 217 72)"/>';
    const banner = '<rect x="110" y="20" width="180" height="30" rx="3" fill="' + PUR + '" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="41" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="' + GOLD + '">S.U.C. · WRECKSHOP</text>';
    let crowd = ""; for (let i = 0; i < 14; i++) { const x = 14 + i * 28, y = 218 + (i % 2) * 8; crowd += '<circle cx="' + x + '" cy="' + y + '" r="11" fill="#140c1c"/><rect x="' + (x - 13) + '" y="' + (y + 8) + '" width="26" height="40" rx="8" fill="#140c1c"/>' +
      (i % 2 ? '<g class="bm-hand' + (i % 4 === 1 ? " bm-h2" : "") + '"><path d="M' + (x + 6) + ' ' + (y + 2) + 'l6 -30" stroke="#140c1c" stroke-width="6" stroke-linecap="round"/></g>' : ""); }
    return svg(
      '<rect width="400" height="260" fill="url(#bms4)"/>' + beams + banner + stage + mic +
      '<circle cx="200" cy="148" r="70" fill="' + GOLD + '" opacity=".08"/>' + crowd,
      sky("bms4", "#0c0614", "#3a1a4a"));
  }

  /* 5. Holman St and Sampson St */
  function bmcorner() {
    const park = '<path d="M240 110q70 -46 150 0v14h-150z" fill="#8f9aa4"/><path d="M240 110q70 -46 150 0" stroke="#c9d1d8" stroke-width="3" fill="none"/>' +
      [262, 290, 318, 346, 372].map(x => '<path d="M' + x + ' ' + 96 + 'v28" stroke="#76808a" stroke-width="2"/>').join("") +
      '<rect x="240" y="124" width="150" height="26" fill="#a9845e"/><path d="M244 116h140" stroke="#555" stroke-width="2"/>' +
      '<g class="bm-toy"><rect x="250" y="106" width="24" height="10" rx="2" fill="#2b2b2b"/><rect x="268" y="100" width="6" height="6" fill="#2b2b2b"/><rect x="276" y="108" width="18" height="8" fill="#ff7a1a"/></g>' +
      '<g fill="#7d8fa3" opacity=".85"><rect x="150" y="70" width="18" height="60"/><rect x="172" y="86" width="14" height="44"/><rect x="196" y="78" width="16" height="52"/></g>';
    const wall = '<rect x="0" y="118" width="214" height="100" fill="#cbb79a"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (126 + r * 10) + 'h214" stroke="#ae9a7c" stroke-width="1"/>').join("") +
      tag("BIG MOE", 12, 178, 42, LAV, -6) + tag("MOE-YO", 40, 208, 20, GOLD, -4) +
      '<circle class="bm-sp" cx="204" cy="146" r="3" fill="' + LAV + '"/><circle class="bm-sp bm-sp2" cx="210" cy="156" r="2.5" fill="' + LAV + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bms5)"/>' + park +
      '<rect x="0" y="150" width="400" height="70" fill="#6a9a4a"/>' + oak(384, 168, .55) + wall +
      '<rect x="0" y="218" width="400" height="42" fill="#4e4f55"/><path d="M0 242h400" stroke="#f2c200" stroke-width="2.5" stroke-dasharray="20 14"/>' +
      '<rect x="262" y="116" width="6" height="106" fill="#6b7178"/>' + sign(210, 118, 116, "HOLMAN ST") + sign(214, 144, 120, "SAMPSON ST"),
      sky("bms5", "#e98a5a", "#ffd9a8"));
  }

  window.SCENES = { bmstation: bmstation, bmyates: bmyates, bmpark: bmpark, bmstage: bmstage, bmcorner: bmcorner };
})();
