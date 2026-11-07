/* tokiwright scenes (Regions tab: Minneapolis; North Minneapolis). CSS classes and ids prefixed tk- (the page's own anim-train is kept).
   1 Target Field station, the METRO Blue and Green Line terminal on the North Loop edge of downtown: at-grade platform, black sign with the BLUE and GREEN bullets, the ballpark's golden Kasota limestone wall and light towers behind, the silver train sliding in.
   2 Farview Park in North Minneapolis (his family settled by it in 1990): the high knoll, kids sledding down it in the snow, the Purple Raindrop sculpture, the rec center glowing at dusk.
   3 The Wright About Now studio (his weekly hip-hop show on the radio in St. Paul): the red ON AIR light, the mic on its arm, the board with faders and meters jumping.
   4 The Hamm Building in downtown St. Paul (home of McNally Smith, where he ran the hip-hop diploma program): the cream terracotta front, arched windows, caps tossed in the air.
   5 W Broadway Av and Oliver Av N on the North Side: green signs, TOKI tagged on the wall, the Capri Theater's marquee chasing its bulbs behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tkflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.tk-flk{animation:tkflick 2.4s infinite}.tk-flk2{animation-delay:.8s}' +
    '@keyframes tkglow{0%,100%{opacity:.4}50%{opacity:1}}.tk-glow{animation:tkglow 1.8s ease-in-out infinite}.tk-g2{animation-delay:-.9s}' +
    '@keyframes tksnow{from{transform:translateY(-30px)}to{transform:translateY(270px)}}.tk-sn{animation:tksnow 7s linear infinite}.tk-sn2{animation-delay:-2.3s}.tk-sn3{animation-delay:-4.6s}' +
    '@keyframes tksled{0%{transform:translate(0,0);opacity:0}8%{opacity:1}85%{opacity:1}100%{transform:translate(150px,62px);opacity:0}}.tk-sled{animation:tksled 4.5s ease-in infinite}.tk-sled2{animation-delay:-2.2s}' +
    '@keyframes tkmeter{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}80%{transform:scaleY(.85)}}.tk-mt{transform-box:fill-box;transform-origin:50% 100%;animation:tkmeter .9s ease-in-out infinite}.tk-mt2{animation-delay:-.3s}.tk-mt3{animation-delay:-.6s}.tk-mt4{animation-delay:-.45s}' +
    '@keyframes tkfade{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}.tk-fd{animation:tkfade 2.6s ease-in-out infinite}.tk-fd2{animation-delay:-1.3s}.tk-fd3{animation-delay:-.6s}' +
    '@keyframes tktoss{0%{transform:translateY(0) rotate(0)}50%{transform:translateY(-70px) rotate(200deg)}100%{transform:translateY(0) rotate(360deg)}}.tk-cap{transform-box:fill-box;transform-origin:50% 50%;animation:tktoss 2.4s ease-in-out infinite}.tk-cap2{animation-delay:-.8s}.tk-cap3{animation-delay:-1.6s}' +
    '@keyframes tkchase{0%,100%{opacity:.25}50%{opacity:1}}.tk-b{animation:tkchase .8s linear infinite}.tk-b2{animation-delay:-.4s}' +
    '@keyframes tkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tk-sp{animation:tkspray 1.4s ease-out infinite}.tk-sp2{animation-delay:.45s}' +
    '@keyframes tkcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.tk-car{animation:tkcar 6s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const snow = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="tk-sn ' + ["", "tk-sn2", "tk-sn3"][i % 3] + '" cx="' + ((i * 61) % 400) + '" cy="' + ((i * 37) % 120) + '" r="' + (i % 2 ? 1.4 : 2) + '" fill="#fff" opacity=".85"/>'; return s; };
  const ORANGE = "#ff9f1c", TEAL = "#3ec1d3", LIME = "#9be15d", BLUE = "#0053a0", GREEN = "#00a651";

  /* 1. Target Field station, METRO Blue + Green Line terminal: limestone ballpark wall and light towers behind, the canopy, the black sign, the train sliding in */
  function tkstation() {
    const tr = '<g class="anim-train"><rect x="20" y="132" width="320" height="64" rx="10" fill="#dfe3e8" stroke="#7a828c" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 46) + '" y="142" width="34" height="24" rx="3" fill="#1d2833"/>').join("") +
      '<rect x="20" y="172" width="320" height="8" fill="' + BLUE + '"/><rect x="20" y="180" width="320" height="3" fill="#f2c200"/>' +
      '<path d="M340 136q18 4 18 24v28h-18z" fill="#c9ced6" stroke="#7a828c" stroke-width="2"/><rect x="342" y="144" width="12" height="18" rx="2" fill="#1d2833"/><circle cx="352" cy="184" r="3.5" fill="#fff6c2"/>' +
      '<path d="M120 132l20 -18M126 116h28" stroke="#2a2f36" stroke-width="2.5"/></g>';
    /* the ballpark: golden Kasota limestone wall with tall openings, the cantilevered roof edge and two light towers */
    const stone = '<rect x="150" y="40" width="250" height="80" fill="#d9b679"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (162 + i * 29) + '" y="52" width="16" height="44" rx="1" fill="#2b3440"/>').join("") +
      Array.from({ length: 5 }, (_, i) => '<path d="M150 ' + (48 + i * 16) + 'h250" stroke="#c49f62" stroke-width="1"/>').join("") +
      '<path d="M140 40h270v-8h-270z" fill="#8f9aa6"/><path d="M140 32l20 -10h240v10z" fill="#b6c0ca"/>' +
      [190, 340].map(x => '<rect x="' + (x - 2) + '" y="2" width="4" height="32" fill="#7c8792"/><rect x="' + (x - 16) + '" y="0" width="32" height="12" rx="1" fill="#59636e"/>' +
        Array.from({ length: 4 }, (_, j) => '<circle class="tk-flk ' + (j % 2 ? "tk-flk2" : "") + '" cx="' + (x - 11 + j * 7.3) + '" cy="6" r="2.4" fill="#fffbe0"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#tk1)"/>' +
      '<rect x="0" y="70" width="150" height="50" fill="#6b7884"/><rect x="20" y="54" width="44" height="66" fill="#59636e"/><rect x="80" y="62" width="36" height="58" fill="#7d8994"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (26 + (i % 3) * 12) + '" y="' + (60 + Math.floor(i / 3) * 14) + '" width="6" height="6" fill="#ffe7a8" opacity=".8"/>').join("") +
      stone +
      '<rect x="0" y="118" width="400" height="80" fill="#5e6168"/><path d="M0 196h400" stroke="#8a8e95" stroke-width="2"/><path d="M0 128h400" stroke="#9aa0a8" stroke-width="2"/>' +
      tr +
      '<rect x="0" y="198" width="400" height="8" fill="#f2c200"/><rect x="0" y="206" width="400" height="54" fill="#a8a29a"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 22) + ' 206v54" stroke="#958f87" stroke-width="1"/>').join("") +
      '<path d="M24 84h352l-12 12h-328z" fill="#3d4a56"/><rect x="24" y="78" width="352" height="8" fill="#56636f"/>' + [44, 200, 356].map(x => '<rect x="' + (x - 3) + '" y="96" width="6" height="110" fill="#3d4a56"/>').join("") +
      '<rect class="tk-flk" x="80" y="96" width="60" height="3" fill="#fff8dc"/><rect class="tk-flk tk-flk2" x="250" y="96" width="60" height="3" fill="#fff8dc"/>' +
      '<rect x="62" y="38" width="276" height="34" rx="3" fill="#111"/><text x="76" y="61" ' + font + ' font-size="17" fill="#fff">Target Field</text>' + badge(196, 55, "BLUE", BLUE) + badge(256, 55, "GREEN", GREEN) +
      '<path d="M200 72v6" stroke="#3d4a56" stroke-width="4"/>',
      sky("tk1", "#26324a", "#c98a5a"));
  }

  /* 2. Farview Park: the high knoll in the snow, two kids sledding down, the Purple Raindrop sculpture, the rec center glowing */
  function tkfarview() {
    const sled = (cls, c) => '<g class="tk-sled ' + cls + '"><path d="M118 112h26q6 0 6 -5" stroke="#3a2a1a" stroke-width="3" fill="none"/><rect x="120" y="102" width="22" height="8" rx="3" fill="' + c + '"/><circle cx="130" cy="94" r="6" fill="#2a1d14"/><rect x="124" y="98" width="12" height="8" rx="3" fill="' + c + '" opacity=".8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tk2)"/>' +
      '<circle cx="330" cy="60" r="22" fill="#ffc27a" opacity=".85"/>' +
      /* the knoll */
      '<path d="M-10 260v-130q80 -70 170 -48q60 14 110 70q60 50 140 52v56z" fill="#eef3f8"/><path d="M-10 132q80 -70 170 -48q60 14 110 70" stroke="#c9d6e3" stroke-width="3" fill="none"/>' +
      /* oaks */
      [[40, 110], [70, 96], [250, 150], [372, 170]].map(([x, y]) => '<rect x="' + (x - 3) + '" y="' + (y - 4) + '" width="6" height="30" fill="#4a3424"/><path d="M' + (x - 16) + ' ' + (y - 2) + 'q16 -34 32 0z" fill="#3e4a3a"/><path d="M' + (x - 12) + ' ' + (y - 16) + 'q12 -24 24 0z" fill="#4d5c48"/>').join("") +
      /* the rec center: low brick building with lit windows */
      '<rect x="270" y="170" width="120" height="40" fill="#8a4b34"/><rect x="266" y="164" width="128" height="8" fill="#5a3022"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect class="' + (i % 2 ? "tk-glow" : "tk-glow tk-g2") + '" x="' + (278 + i * 22) + '" y="180" width="14" height="14" fill="#ffd98a"/>').join("") +
      '<rect x="322" y="196" width="16" height="14" fill="#3a1e14"/>' +
      /* the Purple Raindrop sculpture on its base */
      '<rect x="186" y="206" width="30" height="10" fill="#9aa3ad"/><path d="M201 150q-20 30 -20 44a20 20 0 0 0 40 0q0 -14 -20 -44z" fill="#7b3fc4" stroke="#3e1d6a" stroke-width="2"/><path d="M194 182q-4 8 -2 16" stroke="#c9a6ff" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<path d="M0 230h400v30h-400z" fill="#e2e9f0"/>' +
      sled("", ORANGE) + sled("tk-sled2", TEAL) +
      snow(26),
      sky("tk2", "#3a3f6e", "#e8a07a"));
  }

  /* 3. The Wright About Now studio: the ON AIR light, the mic on its arm, the board with meters jumping */
  function tkradio() {
    return svg(
      '<rect width="400" height="260" fill="#1b1d24"/>' +
      Array.from({ length: 9 }, (_, i) => Array.from({ length: 4 }, (_, j) => '<rect x="' + (8 + i * 44) + '" y="' + (8 + j * 30) + '" width="40" height="26" rx="3" fill="#262a33"/>').join("")).join("") +
      /* studio window to the night city */
      '<rect x="230" y="22" width="150" height="80" rx="4" fill="#0e1a2e" stroke="#3a404c" stroke-width="4"/>' +
      [[240, 60, 14], [258, 44, 12], [274, 66, 18], [296, 52, 10], [310, 38, 16], [330, 58, 14], [350, 48, 12]].map(([x, y, w]) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (100 - y) + '" fill="#22314a"/>').join("") +
      Array.from({ length: 14 }, (_, i) => '<rect class="' + (i % 3 ? "" : "tk-glow") + '" x="' + (243 + (i * 17) % 120) + '" y="' + (62 + (i * 7) % 30) + '" width="3" height="3" fill="#ffd98a"/>').join("") +
      /* ON AIR light */
      '<rect x="40" y="24" width="130" height="40" rx="6" fill="#3a0d0d" stroke="#111" stroke-width="3"/><rect class="tk-glow" x="44" y="28" width="122" height="32" rx="4" fill="#ff2d2d"/>' +
      '<text x="105" y="52" text-anchor="middle" ' + font + ' font-size="20" fill="#fff">ON AIR</text>' +
      /* the desk and board */
      '<path d="M0 170h400v90h-400z" fill="#2c2f38"/><path d="M20 176h360l10 30h-380z" fill="#3a3e48"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (40 + i * 32) + '" y="182" width="4" height="20" fill="#14161b"/><rect class="tk-fd ' + ["", "tk-fd2", "tk-fd3"][i % 3] + '" x="' + (34 + i * 32) + '" y="' + (186 + (i % 3) * 4) + '" width="16" height="6" rx="1" fill="' + (i % 4 ? "#c9ced6" : ORANGE) + '"/>').join("") +
      /* meters */
      '<rect x="160" y="120" width="80" height="44" rx="3" fill="#0d0f14" stroke="#4a505c" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect class="tk-mt ' + ["", "tk-mt2", "tk-mt3", "tk-mt4"][i % 4] + '" x="' + (168 + i * 12) + '" y="128" width="8" height="30" fill="' + (i < 4 ? LIME : ORANGE) + '"/>').join("") +
      /* mic on its arm */
      '<path d="M40 120l60 -24l40 30" stroke="#5a606c" stroke-width="5" fill="none" stroke-linejoin="round"/><circle cx="40" cy="120" r="6" fill="#5a606c"/>' +
      '<rect x="128" y="118" width="26" height="44" rx="12" fill="#2a2d33" stroke="#9aa0aa" stroke-width="2"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M132 ' + (126 + i * 6) + 'h18" stroke="#6a707c" stroke-width="1.5"/>').join("") +
      /* headphones */
      '<path d="M296 168q0 -30 30 -30t30 30" stroke="' + TEAL + '" stroke-width="5" fill="none"/><rect x="288" y="160" width="14" height="18" rx="4" fill="' + TEAL + '"/><rect x="350" y="160" width="14" height="18" rx="4" fill="' + TEAL + '"/>' +
      '<text x="200" y="238" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="' + ORANGE + '" letter-spacing="2">WRIGHT ABOUT NOW</text>');
  }

  /* 4. The Hamm Building, downtown St. Paul (McNally Smith): cream terracotta front, arched ground floor, caps in the air */
  function tkhamm() {
    const floors = Array.from({ length: 5 }, (_, f) => Array.from({ length: 8 }, (_, i) => '<rect x="' + (78 + i * 32) + '" y="' + (34 + f * 26) + '" width="16" height="18" fill="#3b4a5c"/><path d="M' + (76 + i * 32) + ' ' + (54 + f * 26) + 'h20" stroke="#cbbfa4" stroke-width="2"/>').join("")).join("");
    const cap = (x, cls, c) => '<g class="tk-cap ' + cls + '"><path d="M' + (x - 12) + ' 200l12 -6l12 6l-12 6z" fill="#14161b"/><rect x="' + (x - 6) + '" y="203" width="12" height="6" fill="#14161b"/><path d="M' + (x + 10) + ' 201v8" stroke="' + c + '" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tk4)"/>' +
      '<rect x="0" y="60" width="60" height="170" fill="#59636e"/><rect x="345" y="40" width="55" height="190" fill="#4c5560"/>' +
      '<rect x="66" y="22" width="268" height="208" fill="#efe6d2"/><rect x="60" y="12" width="280" height="12" fill="#d8ccb0"/><path d="M60 12h280l-6 -6h-268z" fill="#c4b796"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + (72 + i * 20) + '" cy="18" r="2.5" fill="#bfae86"/>').join("") +
      floors +
      '<rect x="66" y="160" width="268" height="6" fill="#d8ccb0"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (80 + i * 52) + ' 230v-44a20 20 0 0 1 40 0v44z" fill="#2c3a4a" stroke="#cbbfa4" stroke-width="3"/>').join("") +
      '<path d="M0 230h400v30h-400z" fill="#8d8a84"/><path d="M0 236h400" stroke="#a8a59e" stroke-width="2"/>' +
      cap(120, "", ORANGE) + cap(200, "tk-cap2", TEAL) + cap(280, "tk-cap3", LIME),
      sky("tk4", "#6fa6d6", "#e7eef4"));
  }

  /* 5. W Broadway Av and Oliver Av N: green signs, TOKI tagged, the Capri Theater marquee chasing behind */
  function tkcorner() {
    const bulbs = Array.from({ length: 22 }, (_, i) => '<circle class="tk-b ' + (i % 2 ? "tk-b2" : "") + '" cx="' + (176 + i * 9) + '" cy="76" r="2.4" fill="#fff2b0"/><circle class="tk-b ' + (i % 2 ? "" : "tk-b2") + '" cx="' + (176 + i * 9) + '" cy="110" r="2.4" fill="#fff2b0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#tk5)"/>' +
      /* the Capri: brick block with the big marquee */
      '<rect x="150" y="30" width="240" height="150" fill="#9a5a3c"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M150 ' + (40 + i * 16) + 'h240" stroke="#82492f" stroke-width="1"/>').join("") +
      '<rect x="380" y="40" width="20" height="140" fill="#2d3d50" opacity=".9"/>' +
      '<rect x="166" y="70" width="210" height="46" rx="3" fill="#f4efe4" stroke="#2a2a2a" stroke-width="3"/>' + bulbs +
      '<text x="271" y="105" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="28" fill="#c4262e" letter-spacing="6">CAPRI</text>' +
      '<rect x="182" y="126" width="34" height="54" fill="#2a2018"/><rect x="232" y="126" width="34" height="54" fill="#ffd98a" opacity=".75"/><rect x="282" y="126" width="34" height="54" fill="#2a2018"/>' +
      /* street with a car rolling */
      '<rect x="0" y="180" width="400" height="80" fill="#3a3d44"/><path d="M0 220h400" stroke="#d8c25a" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="tk-car"><rect x="0" y="196" width="70" height="18" rx="5" fill="' + TEAL + '"/><path d="M12 196l10 -12h26l10 12z" fill="#2a8f9c"/><circle cx="16" cy="216" r="6" fill="#111"/><circle cx="54" cy="216" r="6" fill="#111"/></g>' +
      /* the wall with the tag */
      '<rect x="0" y="40" width="150" height="150" fill="#5a5f6a"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M0 ' + (52 + i * 16) + 'h150" stroke="#4c515b" stroke-width="1"/>').join("") +
      tag("TOKI", 12, 150, 46, ORANGE, -8) + tag("Mr. Right", 30, 182, 18, TEAL, -6) +
      '<g><circle class="tk-sp" cx="124" cy="126" r="3" fill="' + ORANGE + '"/><circle class="tk-sp tk-sp2" cx="130" cy="120" r="2" fill="' + ORANGE + '"/></g>' +
      /* the pole and signs */
      '<rect x="146" y="12" width="6" height="182" fill="#3b4048"/>' + sign(84, 12, 120, "W Broadway Av") + sign(100, 38, 104, "Oliver Av N"),
      sky("tk5", "#1d2440", "#b86a5a"));
  }

  window.SCENES = { tkstation, tkfarview, tkradio, tkhamm, tkcorner };
})();
