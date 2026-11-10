/* 1kphew scenes (Regions tab: Atlanta; Isaac Gordon, born and raised in Atlanta - he reps the east side on his own records:
   "East side of the 'Cater" (Church House Trap House), "Lord free the whole eastside" (Dawghouse), "Eastside forever" (Heaven)).
   CSS classes prefixed pw- (the page's own anim-train is kept).
   1 MARTA's 114 Columbia Drive bus pulling up at Columbia Dr and Midway Rd on the DeKalb east side: pines, brick ranch houses, the black stop sign.
   2 "Church House Trap House": a little white storefront church sitting right next door to a boarded-up house, the cross glowing, doves on the roofline.
   3 Pray For Atlanta (2024, with Zaytoven, the church organist turned trap producer): a grand piano on a church stage, keys pressing by themselves, PRAY FOR ATLANTA banner.
   4 Dove Awards night in Nashville, 2022 (No Church in a While, Rap/Hip Hop Album of the Year): the arena stage, spotlights sweeping, a gold dove trophy on the podium, confetti.
   5 Columbia Dr and Midway Rd: green signs, 1K PHEW tagged with PHEWSKII and PRAY4ATL, the downtown Atlanta skyline far off to the west at dusk. Every 9 drawn with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes pwglow{0%,100%{opacity:.45}50%{opacity:1}}.pw-glow{animation:pwglow 2.6s ease-in-out infinite}.pw-g2{animation-delay:-1.3s}' +
    '@keyframes pwsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.pw-sw{transform-box:fill-box;transform-origin:50% 100%;animation:pwsway 3.8s ease-in-out infinite}.pw-sw2{animation-delay:-1.9s}' +
    '@keyframes pwdove{0%{transform:translate(-40px,10px)}100%{transform:translate(470px,-40px)}}.pw-dv{animation:pwdove 11s linear infinite}.pw-dv2{animation-delay:-5.5s}' +
    '@keyframes pwflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.pw-flap{transform-box:fill-box;transform-origin:50% 100%;animation:pwflap .5s ease-in-out infinite}' +
    '@keyframes pwkey{0%,70%,100%{transform:translateY(0)}80%{transform:translateY(3px)}}.pw-k{animation:pwkey 1.6s linear infinite}' +
    '@keyframes pwnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(26px,-70px);opacity:0}}.pw-nt{animation:pwnote 3s ease-out infinite}.pw-nt2{animation-delay:-1s}.pw-nt3{animation-delay:-2s}' +
    '@keyframes pwbeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.pw-beam{transform-box:fill-box;transform-origin:50% 0%;animation:pwbeam 4s ease-in-out infinite}.pw-b2{animation-delay:-2s}' +
    '@keyframes pwconf{0%{transform:translateY(-20px);opacity:1}100%{transform:translateY(200px) rotate(260deg);opacity:.2}}.pw-cf{transform-box:fill-box;animation:pwconf 3.4s linear infinite}' +
    '@keyframes pwsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.pw-sp{animation:pwsp 1.4s ease-out infinite}.pw-sp2{animation-delay:.5s}' +
    '@keyframes pwdrip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(24px);opacity:0}}.pw-dr{animation:pwdrip 1.9s ease-in infinite}' +
    '@keyframes pwcar{0%{transform:translateX(-120px)}100%{transform:translateX(480px)}}.pw-car{animation:pwcar 7s linear infinite;animation-delay:-2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const GOLD = "#ffcf3f", RED = "#c8102e", WATER = "#7fd4ff", MARTA = "#ff7f00";
  const pine = (x, y, s, d) => '<g class="pw-sw' + (d ? " pw-sw2" : "") + '"><rect x="' + (x - 2.5 * s) + '" y="' + (y - 16 * s) + '" width="' + (5 * s) + '" height="' + (16 * s) + '" fill="#4a3424"/>' +
    '<path d="M' + x + ' ' + (y - 74 * s) + 'l' + (-16 * s) + ' ' + (30 * s) + 'h' + (8 * s) + 'l' + (-14 * s) + ' ' + (26 * s) + 'h' + (44 * s) + 'l' + (-14 * s) + ' ' + (-26 * s) + 'h' + (8 * s) + 'z" fill="#1f4a2e"/></g>';
  const dove = (cls, x, y, s) => '<g class="pw-dv ' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><ellipse cx="0" cy="0" rx="9" ry="4" fill="#fff"/><circle cx="8" cy="-2" r="3" fill="#fff"/><path d="M11 -2l4 1l-4 1z" fill="#f2a33a"/>' +
    '<path class="pw-flap" d="M-2 -2q-6 -12 -14 -10q6 6 8 12z" fill="#eef"/><path d="M-9 0l-7 -3v6z" fill="#fff"/></g></g>';
  const cross = (x, y, s, c) => '<path d="M' + (x - s * .14) + ' ' + (y - s) + 'h' + (s * .28) + 'v' + (s * .3) + 'h' + (s * .3) + 'v' + (s * .26) + 'h' + (-s * .3) + 'v' + (s * .7) + 'h' + (-s * .28) + 'v' + (-s * .7) + 'h' + (-s * .3) + 'v' + (-s * .26) + 'h' + (s * .3) + 'z" fill="' + c + '"/>';
  const skyline = (y, c) => '<g fill="' + c + '"><rect x="120" y="' + (y - 34) + '" width="16" height="34"/><rect x="140" y="' + (y - 52) + '" width="14" height="52"/><path d="M160 ' + y + 'V' + (y - 70) + 'l6 -10l6 10V' + y + 'z"/>' +
    '<rect x="178" y="' + (y - 44) + '" width="18" height="44"/><path d="M200 ' + y + 'V' + (y - 92) + 'l5 -14l5 14V' + y + 'z"/><rect x="214" y="' + (y - 60) + '" width="16" height="60"/><path d="M234 ' + y + 'V' + (y - 78) + 'q8 -10 16 0V' + y + 'z"/>' +
    '<rect x="254" y="' + (y - 40) + '" width="14" height="40"/><rect x="272" y="' + (y - 28) + '" width="20" height="28"/></g>';

  /* 0. MARTA's 114 Columbia Drive bus at Columbia Dr and Midway Rd */
  function pwstop() {
    const bus = '<g class="anim-train"><rect x="40" y="130" width="250" height="76" rx="10" fill="#f4f4f2" stroke="#8a949c" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (78 + i * 40) + '" y="140" width="32" height="30" rx="3" fill="#23303c"/>').join("") +
      '<rect x="46" y="138" width="24" height="56" rx="3" fill="#23303c"/><rect x="48" y="140" width="20" height="10" fill="#ffb347" class="pw-glow"/>' +
      '<text x="58" y="148" text-anchor="middle" ' + font + ' font-size="8" fill="#1a1a1a">114</text>' +
      '<rect x="40" y="176" width="250" height="7" fill="' + MARTA + '"/><rect x="40" y="183" width="250" height="4" fill="#0067b1"/>' +
      '<circle cx="76" cy="210" r="13" fill="#222"/><circle cx="76" cy="210" r="6" fill="#aab"/><circle cx="252" cy="210" r="13" fill="#222"/><circle cx="252" cy="210" r="6" fill="#aab"/>' +
      '<circle cx="44" cy="196" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pw0)"/>' +
      '<circle cx="330" cy="54" r="20" fill="#ffe6a8" class="pw-glow"/>' +
      pine(20, 152, 1.2, 0) + pine(90, 150, 1, 1) + pine(370, 152, 1.3, 1) +
      '<g><rect x="110" y="118" width="80" height="34" fill="#9a5a3c"/><path d="M104 120l46 -22l46 22z" fill="#4a4a50"/><rect x="124" y="128" width="16" height="12" fill="#ffd98a" class="pw-glow"/><rect x="162" y="128" width="16" height="12" fill="#ffd98a" class="pw-glow pw-g2"/>' +
      '<rect x="214" y="122" width="74" height="30" fill="#b06a46"/><path d="M208 124l43 -20l43 20z" fill="#55555c"/><rect x="226" y="130" width="14" height="10" fill="#ffd98a" class="pw-glow pw-g2"/><rect x="262" y="130" width="14" height="10" fill="#ffd98a" class="pw-glow"/></g>' +
      '<rect x="0" y="152" width="400" height="14" fill="#b9b3a6"/><rect x="0" y="166" width="400" height="94" fill="#4c4c52"/><path d="M0 232h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="18 12"/>' +
      bus +
      '<rect x="334" y="62" width="5" height="104" fill="#2f2f2f"/>' +
      '<rect x="228" y="16" width="166" height="44" rx="3" fill="#111"/>' +
      '<rect x="236" y="24" width="40" height="28" rx="5" fill="' + MARTA + '"/><text x="256" y="44" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">114</text>' +
      '<text x="284" y="36" ' + font + ' font-size="11" fill="#fff">Columbia Dr &amp;</text><text x="284" y="51" ' + font + ' font-size="11" fill="#fff">Midway Rd</text>',
      sky("pw0", "#f39a5a", "#ffe0b0"));
  }

  /* 1. Church house sittin' right next to that trap house */
  function pwchurch() {
    return svg(
      '<rect width="400" height="260" fill="url(#pw1)"/>' +
      '<circle cx="66" cy="50" r="22" fill="#fff4c8" class="pw-glow"/>' +
      dove("", 0, 60, 1) + dove("pw-dv2", 0, 40, .8) +
      /* church: white clapboard storefront */
      '<rect x="40" y="96" width="170" height="114" fill="#f4f1ea" stroke="#b8b2a6" stroke-width="2"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M40 ' + (108 + i * 11) + 'h170" stroke="#dcd6ca" stroke-width="1"/>').join("") +
      '<path d="M30 98l95 -34l95 34z" fill="#7a2a2a"/>' +
      '<rect x="112" y="40" width="26" height="28" fill="#f4f1ea" stroke="#b8b2a6" stroke-width="2"/>' + cross(125, 38, 26, GOLD) +
      '<g class="pw-glow">' + cross(125, 38, 26, "#fff3b0") + '</g>' +
      '<rect x="104" y="150" width="42" height="60" fill="#6a3a24"/><path d="M125 150v60" stroke="#3a1e12" stroke-width="2"/>' +
      '<path d="M60 120h30v34h-30z" fill="#3a6aa8"/><path d="M60 120l15 -12l15 12z" fill="#c8102e"/><path d="M60 137h30M75 120v34" stroke="#ffcf3f" stroke-width="2"/>' +
      '<path d="M160 120h30v34h-30z" fill="#3a6aa8"/><path d="M160 120l15 -12l15 12z" fill="#c8102e"/><path d="M160 137h30M175 120v34" stroke="#ffcf3f" stroke-width="2"/>' +
      '<rect x="62" y="78" width="126" height="16" fill="#1a1a1a"/><text x="125" y="90" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">SUNDAY SERVICE 11AM</text>' +
      /* next door: the boarded house */
      '<rect x="236" y="120" width="130" height="90" fill="#6e6a66"/><path d="M228 122l73 -34l73 34z" fill="#3a3a3e"/>' +
      '<rect x="252" y="138" width="30" height="28" fill="#c9a77a"/><path d="M252 144l30 16M252 160l30 -16" stroke="#8a6a44" stroke-width="4"/>' +
      '<rect x="320" y="138" width="30" height="28" fill="#c9a77a"/><path d="M320 144l30 16M320 160l30 -16" stroke="#8a6a44" stroke-width="4"/>' +
      '<rect x="286" y="168" width="28" height="42" fill="#4a3a30"/>' +
      '<path d="M210 196h26" stroke="#888" stroke-width="2" stroke-dasharray="3 3"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#5a5a5e"/><rect x="0" y="210" width="400" height="8" fill="#a8a296"/>' +
      tag("PRAY", 262, 196, 20, GOLD, -8),
      sky("pw1", "#7fb6e8", "#f2e3c4"));
  }

  /* 2. Pray For Atlanta: Zaytoven-style church piano, keys playing themselves */
  function pwkeys() {
    const whites = Array.from({ length: 18 }, (_, i) => '<rect class="' + (i % 4 === 1 ? "pw-k" : "") + '" style="animation-delay:' + (-(i * .23)).toFixed(2) + 's" x="' + (92 + i * 12) + '" y="186" width="11" height="34" fill="#f8f6f0" stroke="#999" stroke-width=".6"/>').join("");
    const blacks = [0, 1, 3, 4, 5, 7, 8, 10, 11, 12, 14, 15].map(i => '<rect x="' + (100 + i * 12) + '" y="186" width="7" height="20" fill="#111"/>').join("");
    const note = (cls, x, y) => '<g class="pw-nt ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="5" fill="' + GOLD + '"/><path d="M' + (x + 4) + ' ' + y + 'V' + (y - 18) + 'l8 4" stroke="' + GOLD + '" stroke-width="2.4" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pw2)"/>' +
      /* stained glass arch */
      '<path d="M170 140V60q30 -34 60 0V140z" fill="#2a3a7a" stroke="#ffcf3f" stroke-width="3"/>' +
      '<path d="M200 44V140M170 92h60" stroke="#ffcf3f" stroke-width="2"/>' +
      '<path d="M172 90q14 -30 26 -42v42z" fill="#c8102e" class="pw-glow"/><path d="M202 48q14 12 26 42h-26z" fill="#3fa7d6" class="pw-glow pw-g2"/><path d="M172 94h26v44h-26z" fill="#5aa04a" class="pw-glow pw-g2"/><path d="M202 94h26v44h-26z" fill="#e8a33a" class="pw-glow"/>' +
      '<rect x="40" y="26" width="320" height="22" fill="#1a1a1a" stroke="' + RED + '" stroke-width="2"/><text x="200" y="42" text-anchor="middle" ' + font + ' font-size="14" fill="#fff" letter-spacing="3">PRAY FOR ATLANTA</text>' +
      /* stage */
      '<rect x="0" y="222" width="400" height="38" fill="#5a2e1e"/><path d="M0 222h400" stroke="#8a4a2e" stroke-width="4"/>' +
      /* grand piano */
      '<path d="M86 186h228q30 0 36 -30q-4 -26 -60 -28h-150q-58 0 -54 58z" fill="#0c0c0e" stroke="#333" stroke-width="2"/>' +
            '<rect x="88" y="184" width="224" height="38" fill="#0c0c0e"/>' + whites + blacks +
      '<rect x="110" y="222" width="8" height="30" fill="#0c0c0e"/><rect x="290" y="222" width="8" height="30" fill="#0c0c0e"/>' +
      note("", 140, 170) + note("pw-nt2", 210, 160) + note("pw-nt3", 280, 168) +
      '<ellipse cx="200" cy="232" rx="170" ry="10" fill="#ffcf3f" opacity=".12" class="pw-glow"/>',
      sky("pw2", "#1a1424", "#3a2430"));
  }

  /* 3. Dove Awards night in Nashville, 2022 */
  function pwdove() {
    const conf = Array.from({ length: 16 }, (_, i) => '<rect class="pw-cf" style="animation-delay:' + (-(i * .21)).toFixed(2) + 's" x="' + (14 + i * 24) + '" y="' + (10 + (i * 37) % 60) + '" width="5" height="9" fill="' + [GOLD, "#fff", WATER, RED][i % 4] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#pw3)"/>' +
      '<g class="pw-beam"><path d="M90 0l-40 220h80z" fill="#fff6c8" opacity=".14"/></g><g class="pw-beam pw-b2"><path d="M310 0l-40 220h80z" fill="#c8e8ff" opacity=".14"/></g>' +
      '<path d="M0 30q200 40 400 0v16q-200 40 -400 0z" fill="#5a0e1a"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#121218"/><path d="M0 200h400" stroke="' + GOLD + '" stroke-width="3"/>' +
      Array.from({ length: 20 }, (_, i) => '<circle cx="' + (10 + i * 20) + '" cy="' + (238 + (i % 2) * 6) + '" r="9" fill="#24242c"/>').join("") +
      /* podium */
      '<path d="M170 200l8 -60h44l8 60z" fill="#2a2a34" stroke="' + GOLD + '" stroke-width="2"/>' +
      /* dove trophy */
      '<rect x="190" y="128" width="20" height="12" fill="' + GOLD + '"/><path d="M196 128v-14h8v14z" fill="#d9a92a"/>' +
      '<g class="pw-glow"><path d="M194 106q-10 -30 -30 -34q12 18 22 36z" fill="#ffe9a0" stroke="#c9a24a" stroke-width="1.5"/><path d="M204 104q6 -32 26 -40q-6 22 -18 42z" fill="#ffe9a0" stroke="#c9a24a" stroke-width="1.5"/>' +
        '<ellipse cx="198" cy="110" rx="18" ry="8" fill="' + GOLD + '" stroke="#c9a24a" stroke-width="1.5" transform="rotate(-12 198 110)"/><circle cx="216" cy="103" r="6" fill="' + GOLD + '" stroke="#c9a24a" stroke-width="1.5"/><path d="M221 102l7 2l-7 2z" fill="#e08a20"/><path d="M182 112l-12 -2l4 8z" fill="' + GOLD + '"/><circle cx="217" cy="102" r="1.2" fill="#333"/></g>' +
      '<rect x="120" y="4" width="160" height="18" rx="3" fill="#111" opacity=".85"/><text x="200" y="17" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">RAP/HIP HOP ALBUM OF THE YEAR</text>' +
      conf,
      sky("pw3", "#0c0a1a", "#2a1a3a"));
  }

  /* 4. Columbia Dr and Midway Rd, the east side, skyline far off to the west */
  function pwcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#pw4)"/>' +
      skyline(132, "#2a2240") +
      [146, 206, 222, 240].map((x, i) => '<rect class="pw-glow' + (i % 2 ? " pw-g2" : "") + '" x="' + x + '" y="' + (70 + i * 8) + '" width="4" height="4" fill="#ffd98a"/>').join("") +
      pine(30, 136, .9, 0) + pine(100, 134, .7, 1) + pine(312, 136, .8, 0) +
      /* wall */
      '<rect x="0" y="132" width="290" height="88" fill="#8a4e3a"/>' +
      Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (142 + r * 11) + 'h290" stroke="#6e3a2a" stroke-width="1.5"/>').join("") +
      tag("1K PHEW", 20, 186, 40, GOLD, -7) + tag("PHEWSKII", 196, 180, 18, WATER, -4) + tag("PRAY4ATL", 120, 212, 18, "#ff5a5a", -3) +
      '<g class="pw-dr"><rect x="56" y="188" width="3" height="10" fill="' + GOLD + '"/></g><g class="pw-dr" style="animation-delay:-.9s"><rect x="118" y="186" width="3" height="10" fill="' + GOLD + '"/></g>' +
      '<g class="pw-sp"><circle cx="270" cy="150" r="3" fill="#fff" opacity=".7"/></g><g class="pw-sp pw-sp2"><circle cx="276" cy="144" r="2" fill="#fff" opacity=".6"/></g>' +
      /* sidewalk + road */
      '<rect x="0" y="220" width="400" height="40" fill="#4c4c52"/><rect x="0" y="216" width="400" height="6" fill="#b9b3a6"/>' +
      '<g class="pw-car"><rect x="0" y="226" width="56" height="16" rx="5" fill="#c8102e"/><rect x="10" y="220" width="32" height="10" rx="3" fill="#8a0a1e"/><circle cx="12" cy="244" r="5" fill="#111"/><circle cx="44" cy="244" r="5" fill="#111"/></g>' +
      /* sign pole */
      '<rect x="332" y="92" width="6" height="128" fill="#2f2f2f"/>' + sign(286, 94, 100, "Columbia Dr") + sign(296, 120, 84, "Midway Rd"),
      sky("pw4", "#1a1a3a", "#e0703a"));
  }

  window.SCENES = { pwstop: pwstop, pwchurch: pwchurch, pwkeys: pwkeys, pwdove: pwdove, pwcorner: pwcorner };
})();
