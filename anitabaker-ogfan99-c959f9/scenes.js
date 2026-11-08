/* anitabaker scenes (Regions tab: Detroit). CSS classes prefixed ab- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes abflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.ab-flk{animation:abflick 2.6s infinite}.ab-flk2{animation-delay:.9s}' +
    '@keyframes abglow{0%,100%{opacity:.45}50%{opacity:1}}.ab-glow{animation:abglow 2.4s ease-in-out infinite}.ab-g2{animation-delay:-1.2s}' +
    '@keyframes abnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(26px,-70px);opacity:0}}.ab-nt{animation:abnote 3.2s ease-out infinite}.ab-nt2{animation-delay:-1.1s}.ab-nt3{animation-delay:-2.2s}' +
    '@keyframes absway{0%,100%{transform:translateX(0)}50%{transform:translateX(4px)}}.ab-sw{animation:absway 1.8s ease-in-out infinite}.ab-sw2{animation-delay:-.9s}' +
    '@keyframes abbeam{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.ab-bm{transform-box:fill-box;transform-origin:50% 0%;animation:abbeam 4s ease-in-out infinite}.ab-bm2{animation-delay:-2s}' +
    '@keyframes abship{0%{transform:translateX(-260px)}100%{transform:translateX(420px)}}.ab-ship{animation:abship 26s linear infinite}' +
    '@keyframes abspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ab-sp{animation:abspray 1.4s ease-out infinite}.ab-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "ab-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, c, cls) => '<g class="ab-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const GOLD = "#e8b04a", ROSE = "#d9707a", IVORY = "#f6ead2", DPM = "#1f5fa8";

  /* 1. The People Mover pulling into the Renaissance Center station: the glass towers above, the elevated guideway, the black station sign */
  function abstation() {
    let win = "";
    for (let x = 36; x < 250; x += 36) win += '<rect x="' + x + '" y="112" width="24" height="20" rx="3" fill="#2c4256"/><rect x="' + (x + 3) + '" y="114" width="6" height="16" fill="#fff" opacity=".35"/>';
    const tower = (cx, w, top) => '<rect x="' + (cx - w / 2) + '" y="' + top + '" width="' + w + '" height="' + (150 - top) + '" rx="' + (w / 2.4) + '" fill="#6f8aa3"/>' +
      Array.from({ length: Math.floor((150 - top) / 9) }, (_, i) => '<rect x="' + (cx - w / 2 + 3) + '" y="' + (top + 6 + i * 9) + '" width="' + (w - 6) + '" height="2" fill="#a9c2d6" opacity=".55"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ab1)"/>' + stars(10) +
      tower(250, 46, 18) + tower(196, 30, 54) + tower(304, 30, 54) + tower(170, 24, 78) + tower(330, 24, 78) +
      '<rect x="0" y="118" width="120" height="32" fill="#4c5560"/><rect x="360" y="110" width="40" height="40" fill="#4c5560"/>' +
      '<rect x="0" y="150" width="400" height="16" fill="#bdb8ad"/><rect x="0" y="166" width="400" height="6" fill="#8f8a80"/>' +
      '<rect x="60" y="172" width="22" height="88" fill="#a8a397"/><rect x="300" y="172" width="22" height="88" fill="#a8a397"/>' +
      '<g class="anim-train"><rect x="20" y="100" width="250" height="50" rx="12" fill="#e9eef2" stroke="#556" stroke-width="2"/>' +
      '<rect x="20" y="136" width="250" height="6" fill="' + DPM + '"/>' + win + '<circle cx="262" cy="128" r="4" fill="#fff6c2"/></g>' +
      '<rect x="118" y="24" width="270" height="32" rx="3" fill="#111"/><text x="130" y="46" ' + font + ' font-size="15" fill="#fff">Renaissance Center</text>' + badge(318, 40, "DPM", DPM) +
      '<rect x="0" y="230" width="400" height="30" fill="#2f2f36"/><rect x="0" y="226" width="400" height="4" fill="' + GOLD + '" opacity=".6"/>' +
      '<rect class="ab-flk" x="150" y="238" width="100" height="5" rx="2" fill="#fff6c2" opacity=".4"/>',
      sky("ab1", "#1b2340", "#c78a5c"));
  }

  /* 2. The jazz lounge on Livernois at 8 Mile where the "Same Ole Love" video was shot: the long low front with its painted piano-key band, the marquee, notes floating out */
  function abkeys() {
    const keys = Array.from({ length: 30 }, (_, i) => '<rect x="' + (20 + i * 12) + '" y="96" width="12" height="40" fill="#f6f3ea" stroke="#111" stroke-width="1"/>').join("") +
      Array.from({ length: 30 }, (_, i) => [1, 2, 4, 5, 6].includes(i % 7) ? '<rect x="' + (28 + i * 12) + '" y="96" width="7" height="24" fill="#111"/>' : "").join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ab2)"/>' + stars(16) +
      '<rect x="10" y="80" width="380" height="120" fill="#2a2228"/><rect x="10" y="74" width="380" height="8" fill="#151015"/>' + keys +
      '<rect x="20" y="136" width="360" height="4" fill="' + GOLD + '"/>' +
      '<rect x="150" y="146" width="40" height="54" fill="#5a2a1a"/><rect x="154" y="150" width="32" height="46" fill="#7a3a24"/><circle cx="182" cy="174" r="2" fill="' + GOLD + '"/>' +
      [40, 90, 230, 290, 340].map(x => '<rect x="' + x + '" y="150" width="34" height="26" rx="2" fill="#3a2a1a"/><rect class="ab-glow' + (x % 20 ? " ab-g2" : "") + '" x="' + (x + 3) + '" y="153" width="28" height="20" fill="#ffcf7a" opacity=".75"/>').join("") +
      '<rect x="120" y="22" width="160" height="42" rx="4" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text class="ab-flk" x="200" y="42" text-anchor="middle" ' + font + ' font-size="16" fill="' + ROSE + '">LIVE JAZZ</text><text x="200" y="58" text-anchor="middle" ' + font + ' font-size="10" fill="' + IVORY + '">TONIGHT · LIVE MUSIC</text>' +
      '<rect x="196" y="64" width="8" height="12" fill="#333"/>' +
      note(240, 150, GOLD) + note(270, 140, ROSE, "ab-nt2") + note(220, 132, IVORY, "ab-nt3") +
      '<rect x="0" y="200" width="400" height="60" fill="#3d3d44"/><rect x="0" y="200" width="400" height="5" fill="#9a968e"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 54) + '" y="232" width="30" height="4" fill="#e8d36a" opacity=".7"/>').join("") +
      '<text x="380" y="252" text-anchor="end" ' + font + ' font-size="10" fill="' + IVORY + '" opacity=".8">LIVERNOIS · 8 MILE</text>',
      sky("ab2", "#120d24", "#5a2f4a"));
  }

  /* 3. The Baptist church choir loft where she first sang: stained-glass window, organ pipes, robed choir silhouettes swaying */
  function abchurch() {
    const pipes = Array.from({ length: 13 }, (_, i) => { const h = 70 - Math.abs(6 - i) * 7; return '<rect x="' + (136 + i * 10) + '" y="' + (110 - h) + '" width="8" height="' + h + '" rx="3" fill="#c9a24a" stroke="#7a5a1a" stroke-width="1"/>'; }).join("");
    const pane = (x, y, c) => '<rect x="' + x + '" y="' + y + '" width="14" height="14" fill="' + c + '" opacity=".9"/>';
    let glass = "";
    const cols = ["#c0392b", "#2e6db4", "#e8b04a", "#2f8f5a", "#8e44ad"];
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) glass += pane(30 + c * 16, 46 + r * 16, cols[(r + c * 2) % 5]);
    let glass2 = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) glass2 += pane(306 + c * 16, 46 + r * 16, cols[(r * 3 + c) % 5]);
    const singer = (x, cls) => '<g class="ab-sw ' + (cls || "") + '"><circle cx="' + x + '" cy="150" r="9" fill="#3a2418"/><path d="M' + (x - 14) + ' 196q0 -36 14 -36t14 36z" fill="#6a1f3a"/><path d="M' + (x - 6) + ' 162l6 10l6 -10" stroke="' + GOLD + '" stroke-width="2.4" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#f1e3c6"/><rect x="0" y="0" width="400" height="20" fill="#7a4a2a"/>' +
      '<path d="M26 112v-72q36 -40 72 0v72z" fill="#3a2418"/>' + glass + '<path d="M26 112v-72q36 -40 72 0v72z" fill="none" stroke="#3a2418" stroke-width="4"/>' +
      '<path d="M302 112v-72q36 -40 72 0v72z" fill="#3a2418"/>' + glass2 + '<path d="M302 112v-72q36 -40 72 0v72z" fill="none" stroke="#3a2418" stroke-width="4"/>' +
      '<path class="ab-glow" d="M26 112l-20 140h112l-20 -140z" fill="#ffe7a8" opacity=".22"/><path class="ab-glow ab-g2" d="M302 112l-20 140h112l-20 -140z" fill="#ffe7a8" opacity=".22"/>' +
      '<rect x="128" y="104" width="144" height="14" fill="#7a4a2a"/>' + pipes +
      '<path d="M196 30v20M186 40h20" stroke="' + GOLD + '" stroke-width="4"/>' +
      '<rect x="0" y="196" width="400" height="20" fill="#7a4a2a"/><rect x="0" y="216" width="400" height="44" fill="#5a3520"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (14 + i * 80) + '" y="224" width="70" height="8" rx="2" fill="#8a5a36"/>').join("") +
      singer(130) + singer(170, "ab-sw2") + singer(210) + singer(250, "ab-sw2") + singer(290) +
      note(110, 120, "#7a4a2a") + note(300, 110, "#6a1f3a", "ab-nt2"),
      "");
  }

  /* 4. Pine Knob Music Theatre in the Clarkston hills, the 2023 tour stop: the big pavilion roof, the lawn full of people, beams sweeping the night */
  function abpine() {
    const crowd = Array.from({ length: 22 }, (_, i) => '<g class="ab-sw' + (i % 2 ? " ab-sw2" : "") + '"><circle cx="' + (8 + i * 18.5) + '" cy="226" r="7" fill="#07070c"/><rect x="' + (i * 18.5 + 1) + '" y="232" width="15" height="30" rx="5" fill="#07070c"/></g>').join("");
    const lights = Array.from({ length: 14 }, (_, i) => '<circle class="ab-glow' + (i % 2 ? " ab-g2" : "") + '" cx="' + (20 + i * 26 + (i % 3) * 4) + '" cy="' + (200 - (i % 4) * 4) + '" r="1.6" fill="#fff6c2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ab4)"/>' + stars(20) +
      '<path d="M0 150q60 -40 130 -30t140 -20t130 30v80h-400z" fill="#16241c"/>' +
      Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 30) + ' ' + (140 - (i % 3) * 6) + 'l10 -24l10 24z" fill="#0e1a12"/>').join("") +
      '<path class="ab-bm" d="M150 70l-60 140h120z" fill="' + ROSE + '" opacity=".18"/><path class="ab-bm ab-bm2" d="M250 70l-60 140h120z" fill="' + GOLD + '" opacity=".18"/>' +
      '<path d="M40 104l60 -30h200l60 30v6h-320z" fill="#e8e4da"/><path d="M40 110h320l-10 6h-300z" fill="#a8a397"/>' +
      '<rect x="110" y="118" width="180" height="4" fill="#555"/>' + [130, 160, 190, 220, 250, 270].map((x, i) => '<rect class="ab-glow' + (i % 2 ? " ab-g2" : "") + '" x="' + x + '" y="122" width="8" height="6" fill="' + (i % 2 ? ROSE : GOLD) + '"/>').join("") +
      '<rect x="66" y="114" width="8" height="66" fill="#8f8a80"/><rect x="326" y="114" width="8" height="66" fill="#8f8a80"/>' +
      '<rect x="104" y="130" width="192" height="36" fill="#1a1220"/><rect x="104" y="166" width="192" height="14" fill="#3a2a30"/>' +
      '<rect class="ab-glow" x="186" y="140" width="28" height="26" fill="' + GOLD + '" opacity=".35"/><rect x="198" y="146" width="3" height="22" fill="#ccc"/><circle cx="199.5" cy="144" r="3" fill="#ccc"/>' +
      '' +
      '<path d="M0 196q200 -26 400 0v64h-400z" fill="#1e3a24"/>' + lights + crowd +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="' + IVORY + '" opacity=".85">PINE KNOB · CLARKSTON HILLS</text>',
      sky("ab4", "#0c0f26", "#3a2050"));
  }

  /* 5. E Jefferson Ave and Alter Rd on the east side, the Detroit River behind with a lake freighter sliding by, ANITA tagged on the wall */
  function abcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ab5)"/>' + stars(14) +
      '<rect x="0" y="96" width="400" height="40" fill="#1e3550"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' ' + (108 + (i % 3) * 8) + 'h22" stroke="#9fc2e0" stroke-width="1.2" opacity=".5"/>').join("") +
      '<g fill="#2a2a3c"><rect x="0" y="84" width="40" height="12"/><rect x="60" y="78" width="30" height="18"/><rect x="300" y="80" width="50" height="16"/><rect x="360" y="86" width="40" height="10"/></g>' +
      Array.from({ length: 12 }, (_, i) => '<circle class="ab-glow' + (i % 2 ? " ab-g2" : "") + '" cx="' + (10 + i * 34) + '" cy="' + (88 + (i % 3) * 2) + '" r="1.3" fill="#ffd98a"/>').join("") +
      '<g class="ab-ship"><rect x="0" y="110" width="170" height="12" fill="#7a2a22"/><rect x="0" y="104" width="170" height="6" fill="#2a2a2a"/><rect x="140" y="88" width="26" height="16" fill="#e8e4da"/><rect x="150" y="80" width="10" height="8" fill="#2a2a2a"/><rect x="4" y="96" width="16" height="8" fill="#e8e4da"/><circle class="ab-glow" cx="166" cy="92" r="2" fill="#fff6c2"/></g>' +
      '<rect x="0" y="132" width="400" height="92" fill="#6f3a2c"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#5e3024" stroke-width="1"/>').join("") +
      tag("ANITA", 22, 196, 60, GOLD, -6) + tag("SWEET LOVE", 190, 176, 21, ROSE, -4) + tag("THE SONGSTRESS", 24, 216, 16, IVORY, -3) + tag("CHAPTER 8", 196, 212, 18, "#8fd3c8", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="340" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(290, 98, 104, "E Jefferson Ave") + sign(300, 124, 84, "Alter Rd") +
      '<g class="ab-sp"><circle cx="170" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="ab-sp ab-sp2"><circle cx="176" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("ab5", "#141a38", "#c07a52"));
  }

  window.SCENES = { abstation: abstation, abkeys: abkeys, abchurch: abchurch, abpine: abpine, abcorner: abcorner };
})();
