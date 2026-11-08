/* jenniferhudson scenes (Regions tab: CHICAGO; Englewood on the South Side, where she was born and raised and sang in the Pleasant Gift Missionary Baptist Church choir from age seven). CSS classes prefixed jh- (the page's own anim-train is kept).
   1 Halsted on the CTA Green Line's Englewood branch, up on the 'L' at 63rd and Halsted: steel structure, a silver 'L' train with green trim sliding in, black station sign with the green bullet.
   2 Pleasant Gift Missionary Baptist Church in Englewood: red-brick church, choir robes in the doorway, music notes floating out.
   3 Dunbar Vocational Career Academy on King Drive, her high school: long brick-and-limestone front, the flag waving, the school bell tower.
   4 The Hollywood theatre where she won the Oscar for Dreamgirls (2007): red carpet, columns, spotlights sweeping, a gold star statue (no real trophy design).
   5 W 63rd St and S Halsted St in Englewood: green signs, JHUD tagged on the wall, the downtown skyline far up Halsted behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jhglow{0%,100%{opacity:.45}50%{opacity:1}}.jh-glow{animation:jhglow 2.4s ease-in-out infinite}.jh-glow2{animation-delay:-1.2s}' +
    '@keyframes jhnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(-24px,-70px);opacity:0}}.jh-note{animation:jhnote 3.6s ease-out infinite}.jh-n2{animation-delay:-1.2s}.jh-n3{animation-delay:-2.4s}' +
    '@keyframes jhflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-5deg)}}.jh-flag{transform-box:fill-box;transform-origin:0% 50%;animation:jhflag 1.8s ease-in-out infinite}' +
    '@keyframes jhbeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.jh-beam{transform-box:fill-box;transform-origin:50% 100%;animation:jhbeam 3s ease-in-out infinite}.jh-beam2{animation-delay:-1.5s}' +
    '@keyframes jhflash{0%,88%,100%{opacity:0}92%{opacity:1}}.jh-flash{animation:jhflash 2.2s linear infinite}.jh-f2{animation-delay:-.7s}.jh-f3{animation-delay:-1.4s}' +
    '@keyframes jhbird{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.jh-bird{animation:jhbird 10s linear infinite}' +
    '@keyframes jhcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.jh-car{animation:jhcar 7s linear infinite}' +
    '@keyframes jhspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jh-sp{animation:jhspray 1.4s ease-out infinite}.jh-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "jh-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const note = (x, y, c, cls) => '<g class="jh-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="1.6" height="14" fill="' + c + '"/><path d="M' + (x + 4.6) + ' ' + (y - 14) + 'q6 3 5 9" stroke="' + c + '" stroke-width="1.6" fill="none"/></g>';
  const GOLD = "#e7c46b", PURP = "#7b3fbf", CTA = "#00a1de", GRN = "#009b3a", BRICK = "#8a3a2a";

  /* 1. Halsted, Green Line (Englewood branch), up on the 'L' */
  function jhstation() {
    const car = x => '<rect x="' + x + '" y="96" width="150" height="62" rx="5" fill="#d6dbe2" stroke="#6b737e" stroke-width="2"/>' +
      '<rect x="' + x + '" y="146" width="150" height="5" fill="' + GRN + '"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (x + 10 + i * 27) + '" y="108" width="20" height="22" rx="2" fill="#20303f"/>').join("") +
      '<rect x="' + (x + 66) + '" y="104" width="18" height="40" fill="#b7bec8" stroke="#6b737e"/>';
    const train = '<g class="anim-train">' + car(40, 0) + car(194, 1) + '<rect x="320" y="104" width="22" height="12" rx="2" fill="#111"/><text x="331" y="113" text-anchor="middle" ' + font + ' font-size="7" fill="' + GRN + '">GREEN</text><circle class="jh-glow" cx="338" cy="142" r="4" fill="#fff6c8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jh-s1)"/>' + stars(8) +
      /* South Side rooftops below */
      '<rect x="0" y="200" width="400" height="60" fill="#3a3040"/>' + [10, 70, 140, 250, 320].map((x, i) => '<rect x="' + x + '" y="' + (176 + (i % 2) * 10) + '" width="' + (50 + (i % 3) * 10) + '" height="80" fill="#4a3a3a"/>').join("") +
      /* 'L' platform canopy */
      '<rect x="0" y="66" width="400" height="10" fill="#2e3a2e"/>' + [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="76" width="6" height="88" fill="#3a4a3a"/>').join("") +
      train +
      /* steel deck and girders of the 'L' */
      '<rect x="0" y="162" width="400" height="12" fill="#4a5a4a"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 174l10 22l10 -22" stroke="#3a4a3a" stroke-width="3" fill="none"/>').join("") +
      '<rect x="0" y="196" width="400" height="6" fill="#3a4a3a"/>' + [60, 200, 340].map(x => '<rect x="' + x + '" y="202" width="10" height="58" fill="#3a4a3a"/>').join("") +
      /* black CTA-style sign */
      '<rect x="110" y="222" width="180" height="28" rx="3" fill="#111"/><text x="186" y="242" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">HALSTED</text>' +
      '<circle cx="270" cy="236" r="10" fill="' + GRN + '"/><text x="270" y="240" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">G</text>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">GREEN LINE · ENGLEWOOD BRANCH · 63RD &amp; HALSTED</text>',
      sky("jh-s1", "#101a3a", "#d0705a"));
  }

  /* 2. Pleasant Gift Missionary Baptist Church, Englewood */
  function jhchurch() {
    const robe = (x, c) => '<path d="M' + x + ' 206q0 -24 10 -28q10 4 10 28z" fill="' + c + '"/><circle cx="' + (x + 10) + '" cy="170" r="7" fill="#3a2418"/><rect x="' + (x + 3) + '" y="184" width="14" height="3" fill="' + GOLD + '"/>';
    let bricks = ""; for (let r = 0; r < 14; r++) bricks += '<path d="M90 ' + (80 + r * 9) + 'h220" stroke="#6e2c20" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jh-s2)"/>' +
      '<rect x="0" y="212" width="400" height="48" fill="#8a8a8a"/><rect x="0" y="210" width="400" height="4" fill="#cfcfcf"/>' +
      tree(36, 200, 1.7, "#3c6a2e") + tree(366, 198, 1.8, "#3c6a2e") +
      /* brick church with gable and a short square tower */
      '<rect x="90" y="80" width="220" height="132" fill="' + BRICK + '"/>' + bricks +
      '<path d="M84 82L200 34L316 82z" fill="#5a2018"/>' +
      '<rect x="182" y="0" width="36" height="40" fill="' + BRICK + '"/><path d="M178 2h44v6h-44z" fill="#5a2018"/><rect x="198" y="-10" width="4" height="22" fill="' + GOLD + '"/><rect x="192" y="-4" width="16" height="4" fill="' + GOLD + '"/>' +
      /* round stained-glass window */
      '<circle cx="200" cy="70" r="14" fill="#2e6bb0" stroke="#e8e0d0" stroke-width="3"/><path d="M200 56v28M186 70h28" stroke="#e8e0d0" stroke-width="2"/><circle class="jh-glow" cx="200" cy="70" r="14" fill="#fff3c0" opacity=".3"/>' +
      [108, 136, 248, 276].map((x, i) => '<path d="M' + x + ' 170v-38a8 8 0 0 1 16 0v38z" fill="' + ["#d4a017", PURP, "#c0392b", "#2e6bb0"][i] + '" stroke="#e8e0d0" stroke-width="2"/>').join("") +
      /* open doors, choir inside */
      '<path d="M170 212v-50a30 30 0 0 1 60 0v50z" fill="#3a2a1a"/><path d="M175 212v-48a25 25 0 0 1 50 0v48z" fill="#ffe9b0" class="jh-glow"/>' +
      robe(178, PURP) + robe(200, "#5a2a8a") +
      '<rect x="160" y="212" width="80" height="6" fill="#bfb7a6"/>' +
      note(186, 150, GOLD) + note(214, 140, "#fff", "jh-n2") + note(196, 128, GOLD, "jh-n3") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">ENGLEWOOD · SHE JOINED THE CHOIR AT SEVEN</text>',
      sky("jh-s2", "#6fa8dc", "#f2d6b0"));
  }

  /* 3. Dunbar Vocational Career Academy, King Drive */
  function jhdunbar() {
    let wins = ""; for (let r = 0; r < 3; r++) for (let c = 0; c < 12; c++) { const x = 30 + c * 30; if (x > 176 && x < 224) continue; wins += '<rect x="' + x + '" y="' + (100 + r * 28) + '" width="18" height="18" fill="#2a3a4a" stroke="#e8e0d0" stroke-width="1.5"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#jh-s3)"/>' +
      '<g class="jh-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>' +
      /* long school building */
      '<rect x="16" y="88" width="368" height="112" fill="#a8583a"/><rect x="16" y="84" width="368" height="8" fill="#e8e0d0"/><rect x="16" y="192" width="368" height="8" fill="#e8e0d0"/>' + wins +
      /* center limestone entrance tower */
      '<rect x="172" y="44" width="56" height="156" fill="#e8e0d0"/><rect x="180" y="58" width="40" height="40" fill="#d6ccb8"/><circle cx="200" cy="78" r="13" fill="#fff" stroke="#5a5048" stroke-width="2"/><path d="M200 78v-8M200 78l6 3" stroke="#3a3030" stroke-width="2"/>' +
      '<rect x="176" y="112" width="48" height="10" fill="#5a2a1a"/><text x="200" y="120" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">DUNBAR</text>' +
      '<rect x="184" y="150" width="32" height="42" fill="#3a2a1a"/><rect x="199" y="150" width="2" height="42" fill="' + GOLD + '"/>' +
      /* flagpole */
      '<rect x="300" y="18" width="3" height="66" fill="#cfcfcf"/><g class="jh-flag"><rect x="303" y="20" width="36" height="22" fill="#fff"/>' + [0, 1, 2].map(i => '<rect x="303" y="' + (20 + i * 7.3) + '" width="36" height="3.6" fill="#c8102e"/>').join("") + '<rect x="303" y="20" width="15" height="11" fill="#1d3f8a"/></g>' +
      /* King Drive and lawn */
      '<rect x="0" y="200" width="400" height="22" fill="#4f7a3a"/><rect x="0" y="222" width="400" height="38" fill="#55524c"/><path d="M0 240h400" stroke="#f2c14e" stroke-width="2" stroke-dasharray="16 10"/>' +
      tree(60, 214, 1.2, "#3c6a2e") + tree(340, 214, 1.2, "#3c6a2e") +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">KING DRIVE · HER HIGH SCHOOL</text>',
      sky("jh-s3", "#7fb8e8", "#e8f0f6"));
  }

  /* 4. Hollywood, the night she won the Oscar for Dreamgirls */
  function jhoscar() {
    const col = x => '<rect x="' + x + '" y="70" width="18" height="130" fill="#f0e6cc"/><rect x="' + (x - 3) + '" y="64" width="24" height="8" fill="#e0d4b4"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jh-s4)"/>' + stars(12) +
      '<g class="jh-beam"><path d="M60 260L40 0h40z" fill="#fff6c8" opacity=".14"/></g><g class="jh-beam jh-beam2"><path d="M340 260L320 0h40z" fill="#fff6c8" opacity=".14"/></g>' +
      /* theatre front */
      '<rect x="40" y="56" width="320" height="148" fill="#3a2a40"/><rect x="40" y="48" width="320" height="10" fill="' + GOLD + '"/>' +
      [70, 120, 170, 212, 262, 312].map(col).join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#2a2a30"/>' +
      /* red carpet */
      '<path d="M170 200h60l40 60h-140z" fill="#b0122b"/><path d="M170 200h60" stroke="' + GOLD + '" stroke-width="2"/>' +
      /* velvet ropes */
      '<path d="M110 228q20 10 40 0M250 228q20 10 40 0" stroke="#b0122b" stroke-width="3" fill="none"/>' + [110, 150, 250, 290].map(x => '<rect x="' + (x - 2) + '" y="222" width="4" height="26" fill="' + GOLD + '"/><circle cx="' + x + '" cy="222" r="4" fill="' + GOLD + '"/>').join("") +
      /* gold star statue on a stand */
      '<rect x="190" y="156" width="20" height="40" fill="#1a1a1a"/><path d="M200 112l7 15l16 2l-12 11l3 16l-14 -8l-14 8l3 -16l-12 -11l16 -2z" fill="' + GOLD + '" stroke="#8a6a20" stroke-width="2"/><circle class="jh-glow" cx="200" cy="134" r="26" fill="#ffe8a0" opacity=".2"/>' +
      /* camera flashes */
      '<circle class="jh-flash" cx="96" cy="250" r="7" fill="#fff"/><circle class="jh-flash jh-f2" cx="304" cy="246" r="7" fill="#fff"/><circle class="jh-flash jh-f3" cx="130" cy="254" r="6" fill="#fff"/>' +
      '<text x="200" y="40" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="' + GOLD + '">BEST SUPPORTING ACTRESS</text>' +
      '<text x="200" y="16" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">HOLLYWOOD · DREAMGIRLS</text>',
      sky("jh-s4", "#0a0820", "#2a1a40"));
  }

  /* 5. W 63rd St and S Halsted St, Englewood */
  function jhcorner() {
    const tower = (x, w, h, c) => '<rect x="' + x + '" y="' + (112 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jh-s5)"/>' + stars(10) +
      /* downtown skyline far up Halsted: tall black stepped tower with two antennas */
      tower(60, 18, 40, "#2a2440") + tower(84, 14, 54, "#2e2848") + tower(250, 16, 46, "#2a2440") + tower(276, 20, 36, "#2e2848") +
      '<rect x="160" y="34" width="34" height="78" fill="#1a1626"/><rect x="166" y="22" width="22" height="14" fill="#1a1626"/><rect x="170" y="8" width="2" height="16" fill="#1a1626"/><rect x="182" y="8" width="2" height="16" fill="#1a1626"/>' +
      '<circle class="jh-glow" cx="171" cy="8" r="1.6" fill="#ff4a4a"/><circle class="jh-glow jh-glow2" cx="183" cy="8" r="1.6" fill="#ff4a4a"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (164 + (i % 4) * 7) + '" y="' + (44 + Math.floor(i / 4) * 16) + '" width="3" height="6" fill="#ffd98a" opacity=".6"/>').join("") +
      '<rect x="200" y="56" width="26" height="56" fill="#231e36"/>' +
      /* wall */
      '<rect x="0" y="112" width="400" height="112" fill="#5a4a6a"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M0 ' + (120 + i * 8) + 'h400" stroke="#4a3e5a" stroke-width="1"/>').join("") +
      '<rect x="0" y="108" width="400" height="6" fill="#2a2234"/>' +
      tag("JHUD", 22, 186, 58, GOLD, -6) + tag("ENGLEWOOD", 30, 214, 22, "#fff", -3) + tag("EGOT", 218, 166, 30, CTA, -4) + tag("SPOTLIGHT", 196, 206, 20, "#d6a8ff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="jh-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + PURP + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + PURP + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="356" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(296, 94, 102, "W 63rd St") + sign(290, 120, 108, "S Halsted St") +
      '<g class="jh-sp"><circle cx="160" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="jh-sp jh-sp2"><circle cx="166" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("jh-s5", "#121a40", "#b0607a"));
  }

  window.SCENES = { jhstation: jhstation, jhchurch: jhchurch, jhdunbar: jhdunbar, jhoscar: jhoscar, jhcorner: jhcorner };
})();
