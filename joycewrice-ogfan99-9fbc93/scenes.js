/* joycewrice scenes (Regions tab: Los Angeles + SoCal; Chula Vista, San Diego County). CSS classes and ids prefixed jw- (the page's own anim-train is kept).
   1 H Street station on the San Diego Trolley Blue Line in Chula Vista: an at-grade platform, the red trolley sliding in under the overhead wire, palms and a blue sky.
   2 The Japanese Friendship Garden in Balboa Park, San Diego (Japanese mother, Japanese school every Saturday as a kid): koi pond, wooden zig-zag bridge, a pavilion, cherry petals drifting.
   3 Soka University of America in Aliso Viejo, where she went to college: terracotta-roofed halls on the hill, the round lake and its fountain.
   4 "Overgrown" (her debut album) meets "Iced Tea": a sunny LA studio window, vines and flowers growing over the mic stand, a tall glass of iced tea with a lemon slice.
   5 Third Ave and F St in Chula Vista's Third Avenue Village: green signs, JOYCE WRICE tagged on the stucco, the old Vogue Theatre marquee and blade sign up the block behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jwsway{0%,100%{transform:rotate(-2.5deg)}50%{transform:rotate(2.5deg)}}.jw-sway{transform-box:fill-box;transform-origin:50% 100%;animation:jwsway 3.8s ease-in-out infinite}.jw-sway2{animation-delay:-1.9s}' +
    '@keyframes jwpetal{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-60px,220px) rotate(300deg);opacity:0}}.jw-petal{animation:jwpetal 7s linear infinite}.jw-p2{animation-delay:-1.4s}.jw-p3{animation-delay:-2.8s}.jw-p4{animation-delay:-4.2s}.jw-p5{animation-delay:-5.6s}' +
    '@keyframes jwkoi{0%{transform:translate(0,0) scaleX(1)}49%{transform:translate(120px,6px) scaleX(1)}50%{transform:translate(120px,6px) scaleX(-1)}99%{transform:translate(0,0) scaleX(-1)}100%{transform:translate(0,0) scaleX(1)}}.jw-koi{transform-box:fill-box;transform-origin:50% 50%;animation:jwkoi 12s linear infinite}.jw-koi2{animation-delay:-6s}' +
    '@keyframes jwrip{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.jw-rip{transform-box:fill-box;transform-origin:50% 50%;animation:jwrip 3s ease-out infinite}.jw-rip2{animation-delay:-1.5s}' +
    '@keyframes jwspray{0%,100%{transform:scaleY(.85)}50%{transform:scaleY(1.1)}}.jw-spray{transform-box:fill-box;transform-origin:50% 100%;animation:jwspray 1.4s ease-in-out infinite}' +
    '@keyframes jwdrop{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(26px);opacity:0}}.jw-drop{animation:jwdrop 2.2s ease-in infinite}.jw-d2{animation-delay:-1.1s}' +
    '@keyframes jwbub{0%{transform:translateY(0);opacity:0}20%{opacity:.9}100%{transform:translateY(-40px);opacity:0}}.jw-bub{animation:jwbub 3s ease-in infinite}.jw-b2{animation-delay:-1s}.jw-b3{animation-delay:-2s}' +
    '@keyframes jwblink{0%,100%{opacity:1}50%{opacity:.35}}.jw-blink{animation:jwblink 1s steps(2) infinite}.jw-blink2{animation-delay:-.5s}' +
    '@keyframes jwcloud{from{transform:translateX(-120px)}to{transform:translateX(440px)}}.jw-cloud{animation:jwcloud 30s linear infinite}.jw-cloud2{animation-delay:-15s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const palm = (x, base, h, c, cls) => '<g class="jw-sway ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q5 -' + (h / 2) + ' 2 -' + h + '" stroke="#5a4632" stroke-width="4" fill="none"/>' +
    [-44, -22, 0, 22, 44, -64, 64].map(a => '<path d="M' + (x + 2) + ' ' + (base - h) + 'q' + (a / 2) + ' -12 ' + a + ' ' + (Math.abs(a) / 3 + 4) + '" stroke="' + (c || "#2f6a3a") + '" stroke-width="4" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const cloud = (x, y, s, cls) => '<g class="jw-cloud ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="9"/><ellipse cx="-12" cy="-4" rx="11" ry="7"/></g></g>';
  const BLUE = "#0067b1", RED = "#c8102e", GOLD = "#ffcf6e", PINK = "#ff9ec7", SAGE = "#8fd18a";

  /* 1. San Diego Trolley Blue Line at H Street, Chula Vista (at grade) */
  function jwstation() {
    let win = ""; for (let i = 0; i < 6; i++) win += '<rect x="' + (72 + i * 38) + '" y="124" width="28" height="24" rx="3" fill="#20303c"/>';
    const train = '<g class="anim-train"><path d="M30 194v-66q0 -14 14 -14h258q24 0 32 24v56z" fill="' + RED + '" stroke="#7a0a1c" stroke-width="2"/>' +
      '<path d="M302 114q24 0 32 24v16h-38v-40z" fill="#1b1f24"/>' + win +
      '<rect x="42" y="124" width="20" height="58" rx="2" fill="#20303c"/><rect x="168" y="124" width="22" height="58" rx="2" fill="#20303c"/><path d="M179 124v58" stroke="#7a0a1c" stroke-width="1.5"/>' +
      '<rect x="30" y="160" width="304" height="6" fill="#f4f4f2"/><rect x="30" y="166" width="304" height="3" fill="#7a0a1c"/>' +
      '<rect x="304" y="118" width="26" height="10" rx="2" fill="#111"/><text x="317" y="126" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84d">BLUE</text>' +
      '<rect x="324" y="176" width="10" height="6" rx="2" fill="#fff6c2"/>' +
      '<rect x="60" y="194" width="40" height="8" fill="#333"/><rect x="250" y="194" width="40" height="8" fill="#333"/>' +
      '<path d="M150 114l14 -20h44l14 20" stroke="#333" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jws1)"/>' + cloud(60, 40, 1) + cloud(260, 28, .8, "jw-cloud2") +
      '<path d="M0 150l40 -16l50 10l60 -22l70 18l60 -14l60 12l60 -8v20h-400z" fill="#c9b79a" opacity=".7"/>' +
      palm(18, 200, 96) + palm(382, 200, 110, "#2f6a3a", "jw-sway2") + palm(352, 200, 80) +
      '<path d="M0 92h400" stroke="#333" stroke-width="1.5"/><path d="M60 92v108M340 92v108" stroke="#555" stroke-width="4"/>' +
      '<rect x="0" y="200" width="400" height="10" fill="#8b8b85"/><rect x="0" y="210" width="400" height="6" fill="#5b4a3a"/><path d="M0 222h400" stroke="#9aa" stroke-width="3"/><path d="M0 234h400" stroke="#9aa" stroke-width="3"/>' +
      train +
      '<rect x="0" y="236" width="400" height="24" fill="#d9d4c6"/><path d="M0 238h400" stroke="#f2d24b" stroke-width="4" stroke-dasharray="14 6"/>' +
      '<rect x="112" y="10" width="176" height="46" rx="4" fill="#111"/><text x="214" y="34" text-anchor="middle" ' + font + ' font-size="20" fill="#fff">H STREET</text>' +
      '<text x="214" y="49" text-anchor="middle" ' + font + ' font-size="8.5" fill="#ccc">CHULA VISTA</text>' +
      '<rect x="120" y="14" width="32" height="18" rx="9" fill="' + BLUE + '"/><text x="136" y="26.5" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BLUE</text>',
      sky("jws1", "#6cb8ec", "#fbe7c6"));
  }

  /* 2. Japanese Friendship Garden, Balboa Park */
  function jwgarden() {
    const petals = [[60, -10, ""], [150, -30, "jw-p2"], [240, -10, "jw-p3"], [320, -20, "jw-p4"], [200, -40, "jw-p5"], [110, -50, "jw-p3"]].map(p => '<ellipse class="jw-petal ' + p[2] + '" cx="' + p[0] + '" cy="' + p[1] + '" rx="3.5" ry="2.2" fill="' + PINK + '"/>').join("");
    const blossom = (x, y, r) => '<g fill="' + PINK + '"><circle cx="' + x + '" cy="' + y + '" r="' + r + '"/><circle cx="' + (x + r * .9) + '" cy="' + (y + r * .3) + '" r="' + (r * .8) + '"/><circle cx="' + (x - r * .9) + '" cy="' + (y + r * .4) + '" r="' + (r * .75) + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jwg1)"/>' +
      '<path d="M0 120q60 -30 120 -10t140 -6t140 10v30h-400z" fill="#3e7d4a"/>' +
      /* pavilion */
      '<rect x="236" y="96" width="110" height="34" fill="#efe4cf" stroke="#5a3a22" stroke-width="2"/><path d="M226 98l64 -26l64 26z" fill="#4a3a30"/><path d="M230 98h120" stroke="#2a1f18" stroke-width="3"/>' +
      '<path d="M254 100v30M272 100v30M290 100v30M308 100v30M326 100v30" stroke="#5a3a22" stroke-width="2"/>' +
      /* cherry tree */
      '<path d="M70 150q6 -40 -6 -70M66 100q18 -10 30 -26M64 112q-18 -10 -26 -24" stroke="#4a2e22" stroke-width="6" fill="none" stroke-linecap="round"/>' +
      blossom(64, 70, 22) + blossom(100, 70, 16) + blossom(36, 84, 16) + blossom(84, 52, 14) +
      /* pond */
      '<path d="M0 160q100 -18 200 -6t200 0v106h-400z" fill="#3a7f95"/><path d="M0 172q100 -14 200 -4t200 -2" stroke="#8ed0e0" stroke-width="2" fill="none" opacity=".6"/>' +
      '<g class="jw-koi"><path d="M60 214q10 -8 22 0q-10 8 -22 0zM82 214l8 -5v10z" fill="#ff8a2a"/><circle cx="66" cy="213" r="2" fill="#fff"/></g>' +
      '<g class="jw-koi jw-koi2"><path d="M90 236q10 -8 22 0q-10 8 -22 0zM112 236l8 -5v10z" fill="#f4f4f2"/><circle cx="98" cy="234" r="3" fill="#e0342b"/></g>' +
      '<ellipse class="jw-rip" cx="300" cy="220" rx="16" ry="5" fill="none" stroke="#bfe6ef" stroke-width="1.5"/><ellipse class="jw-rip jw-rip2" cx="210" cy="200" rx="14" ry="4" fill="none" stroke="#bfe6ef" stroke-width="1.5"/>' +
      /* zig-zag bridge */
      '<path d="M120 196l60 -10l40 14l70 -12" stroke="#6b4a2a" stroke-width="7" fill="none" stroke-linejoin="round"/><path d="M120 188l60 -10l40 14l70 -12" stroke="#8a6a44" stroke-width="2" fill="none"/>' +
      '<path d="M130 194v-8M160 190v-8M196 190v-8M240 196v-8M270 192v-8" stroke="#8a6a44" stroke-width="2"/>' +
      /* lantern */
      '<rect x="356" y="150" width="8" height="18" fill="#8a8a84"/><rect x="348" y="140" width="24" height="12" fill="#a3a39c"/><path d="M344 142l16 -10l16 10z" fill="#77776f"/><rect x="354" y="143" width="12" height="7" fill="#ffd27a" class="jw-blink"/>' +
      petals,
      sky("jwg1", "#a8d8f0", "#f8eadf"));
  }

  /* 3. Soka University of America, Aliso Viejo */
  function jwsoka() {
    const hall = (x, y, w, h) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#f1dcb4" stroke="#b08a5a" stroke-width="1.5"/><path d="M' + (x - 6) + ' ' + y + 'l' + (w / 2 + 6) + ' -16l' + (w / 2 + 6) + ' 16z" fill="#b9562e"/>' +
      Array.from({ length: Math.floor(w / 18) }, (_, i) => '<path d="M' + (x + 8 + i * 18) + ' ' + (y + h) + 'v-14q5 -8 10 0v14" fill="#7a5a3a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jwk1)"/>' + cloud(90, 36, .9) + cloud(300, 50, .7, "jw-cloud2") +
      '<path d="M0 140q100 -50 200 -30t200 -10v60h-400z" fill="#9cae6a"/>' +
      hall(40, 104, 110, 40) + hall(170, 84, 70, 54) + '<rect x="196" y="56" width="18" height="30" fill="#f1dcb4" stroke="#b08a5a" stroke-width="1.5"/><path d="M192 56l13 -12l13 12z" fill="#b9562e"/>' + hall(260, 100, 110, 42) +
      palm(30, 170, 70) + palm(372, 170, 76, "#2f6a3a", "jw-sway2") +
      '<path d="M0 150h400v110h-400z" fill="#7d9a52"/>' +
      '<ellipse cx="200" cy="200" rx="150" ry="34" fill="#4e9cc4" stroke="#d8c8a6" stroke-width="5"/><ellipse cx="200" cy="200" rx="120" ry="22" fill="none" stroke="#9fd6ee" stroke-width="1.5" opacity=".6"/>' +
      '<g class="jw-spray"><path d="M200 200q-4 -30 0 -44q4 14 0 44z" fill="#e8f7ff"/><path d="M200 196q-18 -18 -24 -6M200 196q18 -18 24 -6" stroke="#e8f7ff" stroke-width="3" fill="none"/></g>' +
      '<circle class="jw-drop" cx="186" cy="176" r="2" fill="#e8f7ff"/><circle class="jw-drop jw-d2" cx="214" cy="176" r="2" fill="#e8f7ff"/>' +
      '<rect x="120" y="238" width="160" height="16" rx="3" fill="#2b2b2b" opacity=".75"/><text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">SOKA · ALISO VIEJO</text>',
      sky("jwk1", "#79bfe8", "#fdf0d6"));
  }

  /* 4. Overgrown + Iced Tea: a sunny LA studio window */
  function jwstudio() {
    const vine = (d, cls) => '<path class="jw-sway ' + (cls || "") + '" d="' + d + '" stroke="#3f8a45" stroke-width="3" fill="none" stroke-linecap="round"/>';
    const leaf = (x, y, r) => '<ellipse cx="' + x + '" cy="' + y + '" rx="7" ry="3.5" transform="rotate(' + r + ' ' + x + ' ' + y + ')" fill="' + SAGE + '"/>';
    const flower = (x, y, c) => '<g class="jw-sway jw-sway2"><circle cx="' + x + '" cy="' + (y - 5) + '" r="4" fill="' + c + '"/><circle cx="' + (x + 5) + '" cy="' + y + '" r="4" fill="' + c + '"/><circle cx="' + x + '" cy="' + (y + 5) + '" r="4" fill="' + c + '"/><circle cx="' + (x - 5) + '" cy="' + y + '" r="4" fill="' + c + '"/><circle cx="' + x + '" cy="' + y + '" r="3" fill="' + GOLD + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#f6e6cf"/>' +
      '<rect x="40" y="24" width="210" height="150" fill="url(#jwt1)" stroke="#fff" stroke-width="8"/><path d="M145 24v150M40 99h210" stroke="#fff" stroke-width="5"/>' +
      '<g opacity=".55"><rect x="60" y="120" width="22" height="54" fill="#8aa0b8"/><rect x="88" y="104" width="18" height="70" fill="#7d93ab"/><rect x="112" y="130" width="26" height="44" fill="#8aa0b8"/><rect x="160" y="112" width="20" height="62" fill="#7d93ab"/><rect x="186" y="96" width="16" height="78" fill="#6f859d"/><rect x="208" y="124" width="30" height="50" fill="#8aa0b8"/></g>' +
      palm(222, 174, 56) +
      '<rect x="0" y="196" width="400" height="64" fill="#b98a5a"/><rect x="0" y="190" width="400" height="8" fill="#8a6440"/>' +
      vine("M0 20q40 30 30 70t40 60", "") + vine("M250 10q-30 40 10 80t-10 90", "jw-sway2") + vine("M400 30q-50 20 -40 70t-30 90", "") +
      leaf(14, 34, 30) + leaf(30, 70, -20) + leaf(46, 120, 40) + leaf(246, 40, -30) + leaf(262, 96, 20) + leaf(250, 150, -40) + leaf(378, 48, 20) + leaf(362, 100, -30) + leaf(346, 160, 30) +
      flower(30, 92, PINK) + flower(260, 120, "#ffffff") + flower(360, 70, PINK) + flower(52, 150, "#ffffff") + flower(340, 180, GOLD) +
      /* mic stand with vines */
      '<path d="M310 190v-110" stroke="#333" stroke-width="4"/><path d="M296 190h28" stroke="#333" stroke-width="5"/><rect x="302" y="58" width="16" height="26" rx="8" fill="#555" stroke="#222" stroke-width="2"/><path d="M304 66h12M304 72h12" stroke="#888" stroke-width="1"/>' +
      vine("M310 190q-14 -30 6 -50t-8 -50", "jw-sway2") + leaf(304, 160, -40) + leaf(318, 132, 30) + leaf(306, 108, -30) + flower(316, 96, PINK) +
      /* iced tea glass with a lemon slice */
      '<rect x="120" y="138" width="44" height="54" rx="4" fill="#e3b06a" opacity=".85" stroke="#fff" stroke-width="2"/><rect x="120" y="134" width="44" height="10" fill="#fff" opacity=".5"/>' +
      '<rect x="128" y="150" width="11" height="11" rx="2" fill="#fff" opacity=".6" transform="rotate(14 133 155)"/><rect x="144" y="162" width="11" height="11" rx="2" fill="#fff" opacity=".6" transform="rotate(-10 149 167)"/>' +
      '<circle cx="164" cy="138" r="12" fill="#ffe36a" stroke="#f2c230" stroke-width="2"/><path d="M164 128v20M154 138h20M157 131l14 14M171 131l-14 14" stroke="#f2c230" stroke-width="1"/>' +
      '<path d="M134 138l-6 -26" stroke="' + PINK + '" stroke-width="3"/>' +
      '<circle class="jw-bub" cx="134" cy="182" r="2" fill="#fff"/><circle class="jw-bub jw-b2" cx="150" cy="186" r="1.6" fill="#fff"/><circle class="jw-bub jw-b3" cx="142" cy="184" r="1.8" fill="#fff"/>' +
      '<text x="200" y="236" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="#5a3a22" letter-spacing="3">OVERGROWN</text>',
      sky("jwt1", "#7cc6f2", "#ffe2b8"));
  }

  /* 5. Third Ave and F St, Chula Vista: the Vogue Theatre up the block */
  function jwcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#jwc1)"/>' + cloud(320, 34, .8) +
      palm(222, 196, 96) + palm(392, 196, 120, "#2f6a3a", "jw-sway2") +
      /* Vogue Theatre behind */
      '<rect x="236" y="70" width="130" height="120" fill="#e8d2b0" stroke="#9a7a52" stroke-width="2"/>' +
      '<rect x="290" y="20" width="22" height="94" rx="3" fill="#1d3a6a" stroke="#ffcf6e" stroke-width="2"/>' +
      ["V", "O", "G", "U", "E"].map((c, i) => '<text class="jw-blink' + (i % 2 ? " jw-blink2" : "") + '" x="301" y="' + (38 + i * 17) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" fill="#ff5f7a">' + c + '</text>').join("") +
      '<path d="M226 120h150l-10 18h-130z" fill="#1d3a6a" stroke="#ffcf6e" stroke-width="2"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle class="jw-blink' + (i % 2 ? " jw-blink2" : "") + '" cx="' + (240 + i * 11) + '" cy="124" r="2" fill="#ffe7a0"/>').join("") +
      '<rect x="248" y="140" width="106" height="16" fill="#fff"/><text x="301" y="152" text-anchor="middle" ' + font + ' font-size="9" fill="#1d3a6a">THIRD AVENUE</text>' +
      /* stucco wall with the tag */
      '<rect x="0" y="96" width="210" height="104" fill="#f0c9a8"/><path d="M0 96h210" stroke="#c98f68" stroke-width="3"/>' +
      tag("JOYCE", 22, 146, 40, PINK, -5) + tag("WRICE", 60, 186, 34, GOLD, -5) + tag("MACHIKO", 120, 196, 15, SAGE, -4) +
      /* sidewalk and street */
      '<rect x="0" y="200" width="400" height="16" fill="#cfc8ba"/><rect x="0" y="216" width="400" height="44" fill="#4a4a4e"/><path d="M0 238h400" stroke="#f2d24b" stroke-width="3" stroke-dasharray="18 10"/>' +
      /* sign pole */
      '<path d="M196 216v-150" stroke="#6b6f74" stroke-width="5"/>' + sign(130, 56, 132, "THIRD AV", 13) + sign(150, 82, 92, "F ST", 13),
      sky("jwc1", "#86c6ee", "#ffd9b0"));
  }

  window.SCENES = { jwstation, jwgarden, jwsoka, jwstudio, jwcorner };
})();
