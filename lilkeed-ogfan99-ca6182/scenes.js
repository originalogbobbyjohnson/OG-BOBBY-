/* lilkeed scenes (Regions tab: Atlanta; Conley Rd SE, then Cleveland Ave / Zone 3, southside). CSS classes and ids prefixed lk-.
   1 MARTA Route 194 (Conley Road / Mount Zion) pulling up on Conley Rd SE at Moreland Ave, the road he came up on (raised on Conley Rd before Cleveland Ave).
   2 Conley Rd SE: low brick ranch houses under the Georgia pines, a kid's bike rolling down the street, a wave of blue on the mailbox.
   3 The studio booth (drawn generic, no label logo): "KEED TALK TO 'EM" on the screen, mic with pop filter, meters jumping.
   4 The L.A. hills at night ("L.A., I'm ducked off, in the hills, the highest" - Long Way to Go): house lights on the hillside, the city grid glowing below, a plane blinking.
   5 Conley Rd SE and Moreland Ave SE: green signs, LIL KEED tagged with PRINCE SLIME and TALK TO EM, the I-285 overpass and downtown's skyline far off.
   400 x 260 SVGs. No logos, no faces, any 9 drawn with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lkbus{0%{transform:translateX(440px)}45%,100%{transform:translateX(0)}}.lk-bus{animation:lkbus 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes lkbike{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.lk-bike{animation:lkbike 8s linear infinite}' +
    '@keyframes lkwheel{to{transform:rotate(360deg)}}.lk-wheel{transform-box:fill-box;transform-origin:50% 50%;animation:lkwheel .7s linear infinite}' +
    '@keyframes lkmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.lk-m{transform-box:fill-box;transform-origin:50% 100%;animation:lkmeter .8s ease-in-out infinite}.lk-m2{animation-delay:-.3s}.lk-m3{animation-delay:-.55s}.lk-m4{animation-delay:-.15s}' +
    '@keyframes lkblink{0%,100%{opacity:.15}50%{opacity:1}}.lk-tw{animation:lkblink 1.8s ease-in-out infinite}.lk-tw2{animation-delay:-.6s}.lk-tw3{animation-delay:-1.2s}' +
    '@keyframes lkplane{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.lk-plane{animation:lkplane 14s linear infinite}' +
    '@keyframes lkcar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.lk-car{animation:lkcar 6s linear infinite}.lk-car2{animation-duration:8s;animation-delay:-4s}' +
    '@keyframes lkwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-10px)}}.lk-wave{animation:lkwave 2.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const nine = (x, y, sz, c) => { const r = sz * 0.2, w = sz * 0.13; return '<circle cx="' + (x + r + w / 2 + sz * 0.04) + '" cy="' + (y - sz * 0.72 + r) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + w + '"/><path d="M' + (x + 2 * r + w / 2 + sz * 0.04) + ' ' + (y - sz * 0.72 + r) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w + '"/>'; };
  /* "194" with a straight-stem 9, centred on cx */
  const r194 = (cx, y, sz, c) => { const d = sz * 0.56, x0 = cx - 1.5 * d; return '<text x="' + (x0 + d / 2) + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + sz + '" fill="' + c + '">1</text>' + nine(x0 + d, y, sz, c) + '<text x="' + (x0 + 2.5 * d) + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + sz + '" fill="' + c + '">4</text>'; };
  const WAVE = "#4fc3ff", GOLD = "#ffd23f", PINK = "#ff5fa2", BUS = "#1f4e79", ORANGE = "#f7941d";
  const pine = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-3" y="-10" width="6" height="14" fill="#5a3a22"/><path d="M0 -70l16 30h-8l14 22h-44l14 -22h-8z" fill="#2f5a34"/></g>';
  const ranch = (x, y, wall, roof) => '<g transform="translate(' + x + ' ' + y + ')"><path d="M-6 -34l56 -16l56 16z" fill="' + roof + '"/><rect x="0" y="-34" width="100" height="34" fill="' + wall + '"/>' +
    '<rect x="10" y="-26" width="20" height="14" fill="#2a3442" stroke="#efe8d8" stroke-width="1.5"/><rect x="70" y="-26" width="20" height="14" fill="#2a3442" stroke="#efe8d8" stroke-width="1.5"/><rect x="42" y="-24" width="14" height="24" fill="#6b4630"/>' +
    Array.from({ length: 4 }, (_, i) => '<path d="M0 ' + (-28 + i * 8) + 'h100" stroke="rgba(0,0,0,.12)" stroke-width="1"/>').join("") + '</g>';

  /* 1. MARTA Route 194 on Conley Rd SE at Moreland Ave */
  function lkbus() {
    const bus = '<g class="lk-bus"><rect x="40" y="122" width="236" height="82" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (80 + i * 38) + '" y="136" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="136" width="28" height="58" rx="2" fill="#24323e"/><rect x="40" y="172" width="236" height="7" fill="' + BUS + '"/><rect x="40" y="181" width="236" height="4" fill="' + ORANGE + '"/>' +
      '<rect x="44" y="124" width="104" height="11" rx="2" fill="#111"/>' + r194(62, 133, 8, "#ffb84a") + '<text x="104" y="132.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">CONLEY RD</text>' +
      '<circle cx="88" cy="204" r="12" fill="#222"/><circle cx="88" cy="204" r="5" fill="#9aa1a8"/><circle cx="234" cy="204" r="12" fill="#222"/><circle cx="234" cy="204" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="190" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lk1)"/>' +
      '<circle cx="236" cy="36" r="16" fill="#fff3c4" opacity=".9"/>' +
      pine(20, 118, 1) + pine(60, 120, .8) + pine(150, 116, 1.1) + pine(250, 118, .9) + pine(300, 120, 1) + pine(380, 118, 1.05) +
      '<rect x="0" y="118" width="400" height="26" fill="#b98a5a"/>' +
      '<rect x="0" y="142" width="400" height="20" fill="#c9c3b6"/><rect x="0" y="162" width="400" height="98" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="336" y="84" width="5" height="80" fill="#6b7178"/><rect x="316" y="62" width="46" height="40" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="339" y="76" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MARTA</text>' + r194(339, 97, 15, "#fff") +
      '<rect x="272" y="106" width="124" height="14" rx="2" fill="#111"/><text x="334" y="116" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">CONLEY RD @ MORELAND AVE</text>',
      sky("lk1", "#7fbfe8", "#f3dcb0"));
  }

  /* 2. Conley Rd SE: ranch houses under the pines, a bike rolling by */
  function lkconley() {
    const bike = '<g class="lk-bike"><g class="lk-wheel"><circle cx="0" cy="214" r="10" fill="none" stroke="#111" stroke-width="2.5"/><path d="M-10 214h20M0 204v20" stroke="#555" stroke-width="1"/></g>' +
      '<g class="lk-wheel"><circle cx="34" cy="214" r="10" fill="none" stroke="#111" stroke-width="2.5"/><path d="M24 214h20M34 204v20" stroke="#555" stroke-width="1"/></g>' +
      '<path d="M0 214l12 -18h18l4 18M12 196l-4 -6M30 196l2 -8h6" stroke="' + WAVE + '" stroke-width="3" fill="none" stroke-linejoin="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lk2)"/>' +
      pine(14, 150, 1.3) + pine(130, 146, 1.1) + pine(260, 148, 1.25) + pine(392, 150, 1.2) +
      ranch(24, 160, "#b5674a", "#4a3a34") + ranch(150, 160, "#d8cdb8", "#5a4a42") + ranch(276, 160, "#9a5a42", "#3e3430") +
      '<rect x="0" y="160" width="400" height="18" fill="#6e9a4a"/>' +
      /* mailbox with a blue wave */
      '<rect x="128" y="150" width="4" height="30" fill="#5a5a5a"/><rect x="118" y="138" width="24" height="14" rx="6" fill="#ececec" stroke="#555"/><path class="lk-wave" d="M120 146q5 -6 10 0t10 0" stroke="' + WAVE + '" stroke-width="2" fill="none"/>' +
      '<rect x="0" y="178" width="400" height="82" fill="#55555b"/><path d="M0 230h400" stroke="#e8e0c8" stroke-width="2" stroke-dasharray="16 12"/>' +
      bike +
      '<rect x="8" y="12" width="150" height="24" rx="3" fill="#111" opacity=".75"/><text x="83" y="29" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">CONLEY RD SE</text>',
      sky("lk2", "#9fd0f0", "#f6e4c0"));
  }

  /* 3. The studio booth: KEED TALK TO 'EM on the screen */
  function lkstudio() {
    const meters = [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect class="lk-m lk-m' + (1 + i % 4) + '" x="' + (232 + i * 16) + '" y="150" width="10" height="44" fill="' + (i > 5 ? PINK : i > 3 ? GOLD : WAVE) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#0d1420"/>' +
      Array.from({ length: 6 }, (_, r) => Array.from({ length: 10 }, (_, c) => '<rect x="' + (c * 40 + (r % 2) * 20) + '" y="' + (r * 20) + '" width="18" height="18" fill="#17202e"/>').join("")).join("") +
      /* booth glass */
      '<rect x="20" y="30" width="170" height="150" rx="6" fill="#1b2a3c" stroke="#4a5a70" stroke-width="4"/>' +
      '<path d="M100 40v60" stroke="#8a929c" stroke-width="3"/><rect x="88" y="98" width="24" height="40" rx="12" fill="#2a2e36" stroke="#9aa1a8" stroke-width="2"/>' +
      '<circle cx="100" cy="74" r="20" fill="none" stroke="#9aa1a8" stroke-width="2" stroke-dasharray="3 3"/><path d="M100 138v34M84 172h32" stroke="#8a929c" stroke-width="3"/>' +
      /* screen */
      '<rect x="210" y="34" width="176" height="96" rx="4" fill="#060a10" stroke="#3a4a60" stroke-width="3"/>' +
      '<text x="298" y="74" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="' + WAVE + '">KEED TALK</text><text x="298" y="104" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="' + GOLD + '">TO ’EM</text>' +
      '<rect x="220" y="140" width="148" height="60" rx="4" fill="#111821" stroke="#2c3a4c"/>' + meters +
      '<rect x="0" y="210" width="400" height="50" fill="#2a2018"/><rect x="200" y="200" width="200" height="16" fill="#3a3a42"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (206 + i * 16) + '" y="204" width="8" height="8" rx="2" fill="' + (i % 3 ? "#8a929c" : PINK) + '"/>').join(""));
  }

  /* 4. The L.A. hills at night */
  function lkhills() {
    const lights = [[60, 120], [84, 112], [110, 104], [140, 96], [168, 100], [200, 92], [232, 98], [262, 106], [300, 112], [330, 122], [120, 128], [180, 120], [250, 126], [214, 114]];
    return svg(
      '<rect width="400" height="260" fill="url(#lk4)"/>' +
      '<path d="M336 30a15 15 0 1 0 0 28a11 11 0 1 1 0 -28z" fill="#f4f0e0"/>' +
      [[30, 30], [90, 50], [160, 26], [220, 60], [280, 22], [370, 70]].map((p, i) => '<circle class="lk-tw lk-tw' + (1 + i % 3) + '" cx="' + p[0] + '" cy="' + p[1] + '" r="1.6" fill="#fff"/>').join("") +
      '<g class="lk-plane"><rect x="0" y="66" width="18" height="4" rx="2" fill="#c8ccd4"/><circle class="lk-tw" cx="20" cy="68" r="2" fill="#ff4040"/></g>' +
      '<path d="M0 150Q60 110 120 100T240 88T400 120V260H0z" fill="#1c2a24"/>' +
      lights.map((p, i) => '<rect x="' + p[0] + '" y="' + p[1] + '" width="12" height="7" fill="#2a2a30"/><rect class="lk-tw lk-tw' + (1 + i % 3) + '" x="' + (p[0] + 2) + '" y="' + (p[1] + 1.5) + '" width="8" height="4" fill="#ffd98a"/>').join("") +
      '<path d="M0 190Q100 160 200 170T400 180V260H0z" fill="#11181a"/>' +
      Array.from({ length: 7 }, (_, r) => '<path d="M0 ' + (206 + r * 8) + 'h400" stroke="#ffb84a" stroke-width="1" stroke-dasharray="2 6" opacity="' + (0.35 + r * 0.08) + '"/>').join("") +
      Array.from({ length: 12 }, (_, c) => '<path d="M' + (20 + c * 34) + ' 200l' + (c * 6 - 36) + ' 60" stroke="' + WAVE + '" stroke-width="1" opacity=".4"/>').join(""),
      sky("lk4", "#1a1f44", "#5a3a6a"));
  }

  /* 5. Conley Rd SE and Moreland Ave SE: green signs, LIL KEED tagged */
  function lkcorner() {
    const sky5 = '<rect width="400" height="260" fill="url(#lk5)"/>';
    const skyline = '<g fill="#5a6478" opacity=".8"><rect x="150" y="54" width="14" height="60"/><rect x="168" y="40" width="16" height="74"/><path d="M168 40l8 -14l8 14z"/><rect x="190" y="30" width="18" height="84"/><path d="M190 30l9 -18l9 18z"/>' +
      '<rect x="212" y="48" width="14" height="66"/><rect x="230" y="62" width="20" height="52"/><rect x="254" y="70" width="14" height="44"/></g>';
    const overpass = '<rect x="0" y="108" width="400" height="12" fill="#a9a59a"/><rect x="0" y="120" width="400" height="4" fill="#6e6a62"/>' +
      [40, 150, 260, 370].map(x => '<rect x="' + (x - 6) + '" y="124" width="12" height="30" fill="#9a968c"/>').join("") +
      '<g class="lk-car"><rect x="0" y="100" width="34" height="10" rx="3" fill="' + PINK + '"/></g><g class="lk-car lk-car2"><rect x="0" y="100" width="40" height="10" rx="3" fill="' + WAVE + '"/></g>';
    const wall = '<rect x="0" y="140" width="400" height="80" fill="#7a4a3a"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (146 + i * 8) + 'h400" stroke="#6a3e30" stroke-width="1"/>').join("") +
      tag("LIL KEED", 30, 196, 40, WAVE, -5) + tag("PRINCE SLIME", 210, 176, 20, GOLD, -3) + tag("TALK TO EM", 226, 208, 18, PINK, 4);
    const pole = '<rect x="356" y="40" width="6" height="190" fill="#4a4f55"/>' + sign(272, 46, 118, "CONLEY RD SE") + sign(272, 72, 118, "MORELAND AV SE");
    return svg(sky5 + skyline + overpass + wall + pole +
      '<rect x="0" y="220" width="400" height="40" fill="#4e4e54"/><path d="M0 244h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>',
      sky("lk5", "#f6a35a", "#ffe0a8"));
  }

  window.SCENES = { lkbus: lkbus, lkconley: lkconley, lkstudio: lkstudio, lkhills: lkhills, lkcorner: lkcorner };
})();
