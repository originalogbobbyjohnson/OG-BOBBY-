/* steviestone scenes (Regions tab: Kansas City; Columbia, Missouri). CSS classes prefixed ss- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ssflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.ss-flk{animation:ssflick 2.4s infinite}.ss-flk2{animation-delay:.8s}' +
    '@keyframes ssglow{0%,100%{opacity:.45}50%{opacity:1}}.ss-glow{animation:ssglow 2.2s ease-in-out infinite}.ss-g2{animation-delay:-1.1s}' +
    '@keyframes sssweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.ss-sw{transform-box:fill-box;transform-origin:50% 0%;animation:sssweep 3.4s ease-in-out infinite}.ss-sw2{animation-delay:-1.7s}' +
    '@keyframes ssbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.ss-bob{animation:ssbob .8s ease-in-out infinite}.ss-bob2{animation-delay:-.4s}' +
    '@keyframes ssspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ss-sp{animation:ssspray 1.4s ease-out infinite}.ss-sp2{animation-delay:.45s}' +
    '@keyframes ssbird{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.ss-bird{animation:ssbird 11s linear infinite}.ss-bird2{animation-delay:-5s}' +
    '@keyframes sswheat{0%,100%{transform:skewX(-6deg)}50%{transform:skewX(6deg)}}.ss-wh{transform-box:fill-box;transform-origin:50% 100%;animation:sswheat 2.6s ease-in-out infinite}.ss-wh2{animation-delay:-1.3s}' +
    '@keyframes sscar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.ss-car{animation:sscar 9s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, tc) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '" stroke="#fff" stroke-width="1"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="' + (tc || "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "ss-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#f2c94c", ORANGE = "#e07a2e", BLK = "#1a1a1a", LIME = "#f1b82d";

  /* 1. Wabash Station, 126 N 10th St, downtown Columbia: the old 1909 stone-and-brick railroad depot with its red tile roof, now the Go COMO bus hub; a white city bus rolls into the bay; Black + Gold connector route signs */
  function ssstation() {
    const bus = '<g class="anim-train"><rect x="30" y="148" width="250" height="70" rx="10" fill="#f4f4f2" stroke="#8a9098" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 34) + '" y="160" width="28" height="26" rx="3" fill="#22303c"/>').join("") +
      '<rect x="36" y="160" width="24" height="50" rx="2" fill="#22303c"/><rect x="30" y="192" width="250" height="6" fill="' + BLK + '"/><rect x="30" y="199" width="250" height="4" fill="' + LIME + '"/>' +
      '<rect x="34" y="150" width="90" height="10" rx="2" fill="#111"/><text x="79" y="158" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">GOLD  WABASH STA</text>' +
      '<circle cx="78" cy="218" r="12" fill="#222"/><circle cx="78" cy="218" r="5" fill="#9aa1a8"/><circle cx="236" cy="218" r="12" fill="#222"/><circle cx="236" cy="218" r="5" fill="#9aa1a8"/><circle cx="34" cy="206" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ss1)"/>' +
      /* depot */
      '<rect x="16" y="58" width="270" height="90" fill="#a5543a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M16 ' + (64 + i * 9) + 'h270" stroke="#8e4630" stroke-width="1"/>').join("") +
      '<rect x="16" y="132" width="270" height="16" fill="#c9bfa8"/><rect x="16" y="58" width="270" height="8" fill="#c9bfa8"/>' +
      '<path d="M2 60l40 -30h220l40 30z" fill="#b8452e"/><path d="M2 60h300" stroke="#7a2e1e" stroke-width="3"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (46 + i * 19) + ' 32l-6 27" stroke="#9a3a26" stroke-width="1.2"/>').join("") +
      [36, 86, 196, 246].map(x => '<path d="M' + x + ' 124v-36q14 -16 28 0v36z" fill="#2a3442"/><path class="ss-glow" d="M' + (x + 4) + ' 122v-30q10 -11 20 0v30z" fill="#ffd98a" opacity=".55"/>').join("") +
      '<rect x="130" y="80" width="44" height="52" fill="#3a2a22"/><rect x="122" y="70" width="60" height="12" fill="#c9bfa8"/><text x="152" y="79.5" text-anchor="middle" ' + font + ' font-size="8" fill="#5a2a1a" letter-spacing="1">WABASH</text>' +
      /* canopy, bay, curb */
      '<rect x="0" y="140" width="400" height="8" fill="#4a4e54"/><rect x="0" y="218" width="400" height="42" fill="#58565a"/><rect x="0" y="216" width="400" height="4" fill="#d8d4cc"/>' +
      bus +
      /* stop sign post */
      '<rect x="330" y="96" width="5" height="122" fill="#6b7178"/><rect x="292" y="84" width="104" height="58" rx="4" fill="#111"/><text x="344" y="102" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">Wabash Station</text>' +
      badge(298, 122, "BLACK", BLK) + badge(350, 122, "GOLD", LIME, "#111") +
      '<circle class="ss-flk" cx="200" cy="146" r="3" fill="#fff6c2"/><circle class="ss-flk ss-flk2" cx="100" cy="146" r="3" fill="#fff6c2"/>',
      sky("ss1", "#7fb4dc", "#f2dcb8"));
  }

  /* 2. The Columns on Francis Quadrangle at Mizzou: six white limestone Ionic columns on the green, red-brick Jesse Hall with its white dome behind, birds crossing */
  function sscolumns() {
    const col = x => '<rect x="' + (x - 7) + '" y="104" width="14" height="96" fill="#ece6d6"/>' + [0, 4, 8].map(d => '<path d="M' + (x - 4 + d) + ' 108v88" stroke="#d2cab4" stroke-width="1"/>').join("") +
      '<path d="M' + (x - 12) + ' 104h24l-3 -6h-18z" fill="#ddd5c0"/><circle cx="' + (x - 9) + '" cy="100" r="3" fill="none" stroke="#c2b9a0" stroke-width="1.4"/><circle cx="' + (x + 9) + '" cy="100" r="3" fill="none" stroke="#c2b9a0" stroke-width="1.4"/>' +
      '<rect x="' + (x - 11) + '" y="198" width="22" height="8" fill="#d2cab4"/>';
    const bird = (cls, y) => '<g class="ss-bird ' + cls + '"><path d="M0 ' + y + 'q5 -5 10 0q5 -5 10 0" stroke="#2a2a2a" stroke-width="1.8" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ss2)"/>' + bird("", 34) + bird("ss-bird2", 52) +
      /* Jesse Hall (set back across the quad) */
      '<g transform="translate(60 58) scale(.7)">' + '<rect x="70" y="92" width="260" height="70" fill="#9a4a32"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (84 + i * 28) + '" y="104" width="12" height="20" fill="#e8e2d2"/><rect x="' + (86 + i * 28) + '" y="106" width="8" height="16" fill="#2a3442"/>').join("") +
      '<rect x="170" y="70" width="60" height="30" fill="#e8e2d2"/><rect x="176" y="58" width="48" height="14" fill="#e8e2d2"/><path d="M174 58q26 -44 52 0z" fill="#f4f1ea"/><rect x="197" y="10" width="6" height="8" fill="#f4f1ea"/><path d="M196 16q4 -8 8 0v6h-8z" fill="#f4f1ea"/>' +
      '<path d="M178 58h44" stroke="#c8c0aa" stroke-width="1.5"/>' + Array.from({ length: 4 }, (_, i) => '<rect x="' + (180 + i * 11) + '" y="76" width="5" height="20" fill="#2a3442"/>').join("") +
      '<rect x="60" y="88" width="280" height="6" fill="#e8e2d2"/></g>' +
      /* quad lawn + walk */
      '<rect x="0" y="160" width="400" height="100" fill="#4f8a3a"/><path d="M180 260l14 -100h12l14 100z" fill="#cfc6b0"/>' +
      Array.from({ length: 6 }, (_, i) => col(64 + i * 54)).join("") +
      '<g opacity=".9">' + [30, 370].map(x => '<circle cx="' + x + '" cy="150" r="30" fill="#2f6a2a"/><rect x="' + (x - 3) + '" y="160" width="6" height="40" fill="#4a3424"/>').join("") + '</g>' +
      '<path d="M0 230q100 -10 200 0t200 0v30h-400z" fill="#447a32"/>',
      sky("ss2", "#7ab8e8", "#e6f0f6"));
  }

  /* 3. Malta Bend, Missouri, the itty-bitty town his mother grew up in: the white grain elevator, the town's water tower, the two-lane highway, wheat waving in the sunset */
  function ssmalta() {
    const car = '<g class="ss-car"><rect x="0" y="198" width="44" height="12" rx="4" fill="' + ORANGE + '"/><path d="M8 198l6 -8h16l6 8z" fill="#c8662a"/><rect x="15" y="191" width="7" height="6" fill="#2a3442"/><rect x="24" y="191" width="7" height="6" fill="#2a3442"/><circle cx="10" cy="210" r="4" fill="#222"/><circle cx="34" cy="210" r="4" fill="#222"/><circle cx="43" cy="203" r="2" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ss3)"/><circle class="ss-glow" cx="300" cy="120" r="34" fill="#ffcf6a" opacity=".85"/>' +
      '<path d="M0 150q80 -14 160 -4t240 -6v30h-400z" fill="#6a5a3a"/>' +
      /* elevator */
      '<rect x="60" y="54" width="34" height="110" fill="#e6e1d4"/><rect x="94" y="54" width="34" height="110" fill="#d4cfc0"/><rect x="128" y="54" width="34" height="110" fill="#e6e1d4"/>' +
      '<rect x="84" y="28" width="54" height="30" fill="#d4cfc0"/><path d="M80 30l31 -14l31 14z" fill="#8a8f96"/><text x="111" y="48" text-anchor="middle" ' + font + ' font-size="8" fill="#6a5a3a">MALTA BEND</text>' +
      '<rect x="162" y="110" width="40" height="54" fill="#a5543a"/><path d="M158 112l24 -14l24 14z" fill="#7a3a26"/>' +
      /* water tower */
      '<path d="M262 160l8 -60M298 160l-8 -60M266 130h28" stroke="#9aa1a8" stroke-width="3"/><ellipse cx="280" cy="94" rx="26" ry="16" fill="#cfd6dc"/><path d="M254 94q26 -26 52 0" fill="#b9c2ca"/>' +
      /* wheat field */
      '<rect x="0" y="164" width="400" height="30" fill="#c9a24a"/>' + Array.from({ length: 34 }, (_, i) => '<path class="ss-wh' + (i % 2 ? " ss-wh2" : "") + '" d="M' + (6 + i * 12) + ' 186v-16" stroke="#e8c26a" stroke-width="2.4"/>').join("") +
      /* highway */
      '<rect x="0" y="194" width="400" height="26" fill="#3e3e44"/><path d="M0 207h400" stroke="' + GOLD + '" stroke-width="2" stroke-dasharray="16 12"/>' + car +
      '<rect x="0" y="220" width="400" height="40" fill="#8a7a4a"/>' +
      /* city limit sign */
      '<rect x="326" y="200" width="4" height="40" fill="#6b7178"/><rect x="300" y="176" width="58" height="30" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="329" y="189" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MALTA BEND</text><text x="329" y="200" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">CITY LIMIT</text>',
      sky("ss3", "#3a4a8a", "#f2a65a"));
  }

  /* 4. "When I hit the stage, music become my remedy": the club stage the night he opened for the Strange crew, the mic stand, the speaker stacks, lights sweeping, the crowd's hands bouncing */
  function ssstage() {
    return svg(
      '<rect width="400" height="260" fill="#0c0b10"/>' +
      '<rect x="0" y="0" width="400" height="22" fill="#1c1a22"/>' + [60, 150, 250, 340].map(x => '<rect x="' + (x - 8) + '" y="12" width="16" height="12" fill="#333"/>').join("") +
      '<path class="ss-sw" d="M60 22l-46 170h92z" fill="#ffe7a8" opacity=".16"/><path class="ss-sw ss-sw2" d="M150 22l-46 170h92z" fill="' + ORANGE + '" opacity=".18"/>' +
      '<path class="ss-sw ss-sw2" d="M250 22l-46 170h92z" fill="#ffe7a8" opacity=".16"/><path class="ss-sw" d="M340 22l-46 170h92z" fill="' + GOLD + '" opacity=".16"/>' +
      '<rect x="40" y="40" width="320" height="110" fill="#17151d"/>' + tag("STEVIE STONE", 86, 104, 34, GOLD, -3) + tag("HIMMI!", 70, 140, 22, "#fff", -3) +
      /* speakers */
      [20, 344].map(x => '<rect x="' + x + '" y="96" width="36" height="96" rx="3" fill="#111" stroke="#333" stroke-width="2"/><circle cx="' + (x + 18) + '" cy="120" r="10" fill="#222"/><circle class="ss-glow" cx="' + (x + 18) + '" cy="120" r="4" fill="#444"/><circle cx="' + (x + 18) + '" cy="160" r="13" fill="#222"/><circle cx="' + (x + 18) + '" cy="160" r="5" fill="#444"/>').join("") +
      /* stage deck + mic */
      '<rect x="0" y="186" width="400" height="16" fill="#2a2018"/><rect x="0" y="184" width="400" height="3" fill="' + GOLD + '" opacity=".6"/>' +
      '<path d="M200 186v-62M186 186h28" stroke="#9aa1a8" stroke-width="3.5"/><rect x="195" y="112" width="10" height="16" rx="5" fill="#c9ced6" stroke="#555" stroke-width="1.4"/>' +
      /* crowd */
      Array.from({ length: 16 }, (_, i) => '<g class="ss-bob' + (i % 2 ? " ss-bob2" : "") + '"><circle cx="' + (12 + i * 25) + '" cy="226" r="9" fill="#050508"/><rect x="' + (i * 25) + '" y="232" width="24" height="30" rx="6" fill="#050508"/>' +
        (i % 3 === 0 ? '<path d="M' + (20 + i * 25) + ' 230l8 -26" stroke="#050508" stroke-width="5" stroke-linecap="round"/>' : "") + '</g>').join(""),
      "");
  }

  /* 5. E Broadway and Providence Rd, Columbia: green signs, STONE tagged big on the brick wall, the gray stone Gothic clock tower of Mizzou's Memorial Union behind */
  function sscorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ss5)"/>' + stars(16) +
      '<rect x="168" y="30" width="54" height="110" fill="#8e8b84"/><rect x="164" y="24" width="62" height="8" fill="#7e7b74"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (166 + i * 14) + ' 24v-12l4 -6l4 6v12z" fill="#7e7b74"/>').join("") +
      '<circle cx="195" cy="52" r="11" fill="#f4ecd2" stroke="#5a564e" stroke-width="2"/><path d="M195 52v-7M195 52l5 3" stroke="#222" stroke-width="1.6"/>' +
      '<path d="M182 120v-34q13 -16 26 0v34z" fill="#2a3442"/><path class="ss-glow" d="M186 118v-28q9 -11 18 0v28z" fill="#ffd98a" opacity=".6"/>' +
      '<rect x="110" y="96" width="58" height="44" fill="#7e7b74"/><rect x="222" y="96" width="58" height="44" fill="#7e7b74"/>' +
      '<g fill="#22263a"><rect x="0" y="92" width="100" height="48"/><rect x="290" y="86" width="50" height="54"/><rect x="340" y="100" width="60" height="40"/></g>' +
      '<rect x="0" y="134" width="400" height="90" fill="#7a4232"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (142 + i * 8) + 'h400" stroke="#6a3628" stroke-width="1"/>').join("") +
      tag("STONE", 22, 196, 60, GOLD, -6) + tag("COMO", 236, 182, 30, ORANGE, -4) + tag("HIMMI", 28, 218, 18, "#fff", -3) + tag("ROLLIN", 182, 214, 18, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(290, 98, 98, "E Broadway") + sign(282, 124, 114, "Providence Rd") +
      '<g class="ss-sp"><circle cx="152" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="ss-sp ss-sp2"><circle cx="158" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("ss5", "#141a34", "#c8784a"));
  }

  window.SCENES = { ssstation: ssstation, sscolumns: sscolumns, ssmalta: ssmalta, ssstage: ssstage, sscorner: sscorner };
})();
