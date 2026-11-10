/* lecrae scenes (Regions tab: Houston + Texas; born in Houston and raised on the Southside by his mom and grandma - "Southside on the Yellowstone" (Facts) - with stretches in Denver, San Diego and Dallas; studied at UNT in Denton; co-founded Reach Records in Dallas in 2004). CSS classes prefixed lcr- (the page's own anim-train is kept).
   1 METRO's 29 Cullen/Hirsch bus pulling up to the Cullen & Yellowstone stop on the Southside: low storefronts, live oaks, the black stop sign with the 29 bullet.
   2 Sunday morning at a Southside red-brick church, like the ones his grandmother took him to: white steeple, bell swinging, stained glass glowing, the marquee reads ROMANS 1:16.
   3 Denton, where he went to college at UNT: the Courthouse-on-the-Square, pale limestone with pink granite columns, red roof caps and the clock tower, green banners on the square.
   4 Gravity (his 2012 album, the first hip-hop album to win the Grammy for Best Gospel Album): the Foucault pendulum at the Houston Museum of Natural Science swinging over its compass floor, knocking down the pegs.
   5 Cullen Blvd and Yellowstone Blvd on the Southside: green signs, LECRAE tagged with 116 and UNASHAMED, the University of Houston's pale limestone Cullen Building far up Cullen behind. Every 9 drawn with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lcrglow{0%,100%{opacity:.45}50%{opacity:1}}.lcr-glow{animation:lcrglow 2.6s ease-in-out infinite}.lcr-g2{animation-delay:-1.3s}' +
    '@keyframes lcrsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.lcr-sw{transform-box:fill-box;transform-origin:50% 100%;animation:lcrsway 3.6s ease-in-out infinite}.lcr-sw2{animation-delay:-1.8s}' +
    '@keyframes lcrbell{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.lcr-bell{transform-box:fill-box;transform-origin:50% 0%;animation:lcrbell 1.6s ease-in-out infinite}' +
    '@keyframes lcrbird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-30px)}}.lcr-bird{animation:lcrbird 12s linear infinite}.lcr-b2{animation-delay:-6s}' +
    '@keyframes lcrhand{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.lcr-min{transform-box:view-box;transform-origin:200px 58px;animation:lcrhand 8s linear infinite}.lcr-hr{transform-box:view-box;transform-origin:200px 58px;animation:lcrhand 96s linear infinite}' +
    '@keyframes lcrpend{0%,100%{transform:rotate(-15deg)}50%{transform:rotate(15deg)}}.lcr-pend{transform-box:view-box;transform-origin:200px 0px;animation:lcrpend 3.2s ease-in-out infinite}' +
    '@keyframes lcrpeg{0%,40%{transform:rotate(0deg)}55%,100%{transform:rotate(80deg)}}.lcr-peg{transform-box:fill-box;transform-origin:50% 100%;animation:lcrpeg 6.4s ease-in infinite}' +
    '@keyframes lcrcar{0%{transform:translateX(-120px)}100%{transform:translateX(480px)}}.lcr-car{animation:lcrcar 8s linear infinite;animation-delay:-3s}' +
    '@keyframes lcrsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.lcr-sp{animation:lcrsp 1.4s ease-out infinite}.lcr-sp2{animation-delay:.5s}' +
    '@keyframes lcrdrip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(26px);opacity:0}}.lcr-dr{animation:lcrdrip 1.9s ease-in infinite}' +
    '@keyframes lcrflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(6deg)}}.lcr-flag{transform-box:fill-box;transform-origin:0% 50%;animation:lcrflag 2.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  /* a 9 drawn by hand: round bowl + straight stem */
  const nine = (x, y, s, c) => '<circle cx="' + x + '" cy="' + (y - s * .66) + '" r="' + (s * .26) + '" fill="none" stroke="' + c + '" stroke-width="' + (s * .14) + '"/><path d="M' + (x + s * .26) + ' ' + (y - s * .7) + 'V' + y + '" stroke="' + c + '" stroke-width="' + (s * .14) + '" stroke-linecap="round"/>';
  const GOLD = "#ffd23f", RED = "#d7263d", BLUE = "#3fa7d6", MBLUE = "#1f5fa8";
  const oak = (x, y, s, d) => '<g class="lcr-sw' + (d ? " lcr-sw2" : "") + '"><rect x="' + (x - 4 * s) + '" y="' + (y - 40 * s) + '" width="' + (8 * s) + '" height="' + (40 * s) + '" fill="#5a4030"/>' +
    '<ellipse cx="' + x + '" cy="' + (y - 50 * s) + '" rx="' + (38 * s) + '" ry="' + (22 * s) + '" fill="#2f5a2e"/><ellipse cx="' + (x - 18 * s) + '" cy="' + (y - 42 * s) + '" rx="' + (22 * s) + '" ry="' + (14 * s) + '" fill="#3a6a36"/><ellipse cx="' + (x + 20 * s) + '" cy="' + (y - 44 * s) + '" rx="' + (22 * s) + '" ry="' + (14 * s) + '" fill="#356432"/></g>';

  /* 0. METRO's 29 Cullen/Hirsch bus at Cullen & Yellowstone */
  function lcrstop() {
    const bus = '<g class="anim-train"><rect x="40" y="128" width="250" height="78" rx="10" fill="#f2f4f6" stroke="#8a949c" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (78 + i * 40) + '" y="138" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="136" width="24" height="56" rx="3" fill="#24323e"/><rect x="48" y="138" width="20" height="10" fill="#ff9a3c" class="lcr-glow"/>' +
      '<rect x="40" y="174" width="250" height="8" fill="' + MBLUE + '"/><rect x="40" y="182" width="250" height="4" fill="' + RED + '"/>' +
      '<circle cx="76" cy="210" r="13" fill="#222"/><circle cx="76" cy="210" r="6" fill="#aab"/><circle cx="252" cy="210" r="13" fill="#222"/><circle cx="252" cy="210" r="6" fill="#aab"/>' +
      '<circle cx="44" cy="196" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lcr0)"/>' +
      '<g fill="#3a4258"><rect x="10" y="110" width="70" height="40"/><rect x="90" y="100" width="90" height="50"/><rect x="190" y="112" width="60" height="38"/><rect x="262" y="96" width="80" height="54"/><rect x="350" y="108" width="50" height="42"/></g>' +
      [26, 110, 140, 206, 282, 310, 364].map((x, i) => '<rect class="lcr-glow' + (i % 2 ? " lcr-g2" : "") + '" x="' + x + '" y="' + (118 + (i % 3) * 6) + '" width="14" height="10" fill="#ffd98a" opacity=".85"/>').join("") +
      oak(60, 150, 1, 0) + oak(330, 150, 1.1, 1) +
      '<rect x="0" y="150" width="400" height="16" fill="#b8b2a6"/><rect x="0" y="166" width="400" height="94" fill="#4e4e54"/><path d="M0 232h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="18 12"/>' +
      bus +
      '<rect x="330" y="60" width="5" height="106" fill="#2f2f2f"/>' +
      '<rect x="244" y="18" width="150" height="40" rx="3" fill="#111"/>' +
      '<rect x="252" y="25" width="30" height="26" rx="5" fill="' + MBLUE + '"/><text x="262" y="44" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">2</text>' + nine(274, 44, 16, "#fff") +
      '<text x="290" y="36" ' + font + ' font-size="11" fill="#fff">Cullen &amp;</text><text x="290" y="51" ' + font + ' font-size="11" fill="#fff">Yellowstone</text>',
      sky("lcr0", "#f2a65a", "#ffe2b0"));
  }

  /* 1. Sunday at a Southside red-brick church */
  function lcrchurch() {
    return svg(
      '<rect width="400" height="260" fill="url(#lcr1)"/>' +
      '<circle cx="70" cy="60" r="26" fill="#fff4c8" class="lcr-glow"/>' +
      '<g class="lcr-bird"><path d="M0 50q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="lcr-bird lcr-b2"><path d="M0 70q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<rect x="120" y="100" width="190" height="100" fill="#a8483a" stroke="#6a2a22" stroke-width="2"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M120 ' + (108 + i * 8) + 'h190" stroke="#943e32" stroke-width="1"/>').join("") +
      '<path d="M112 100l103 -40l103 40z" fill="#5a2a22"/>' +
      '<rect x="196" y="34" width="38" height="66" fill="#f4f1ea" stroke="#9a968e" stroke-width="1.5"/><path d="M190 36l25 -26l25 26z" fill="#f4f1ea" stroke="#9a968e" stroke-width="1.5"/>' +
      '<path d="M215 2v16M209 8h12" stroke="#f4f1ea" stroke-width="3"/>' +
      '<rect x="204" y="44" width="22" height="22" fill="#2a2a34"/><g class="lcr-bell"><path d="M209 48h12l2 12h-16z" fill="#c9a24a"/><circle cx="215" cy="62" r="2" fill="#8a6a2a"/></g>' +
      '<path d="M200 200v-46a15 15 0 0 1 30 0v46z" fill="#5a3a26" stroke="#3a2416" stroke-width="2"/>' +
      [140, 260].map((x, i) => '<path class="lcr-glow' + (i ? " lcr-g2" : "") + '" d="M' + x + ' 160v-30a14 14 0 0 1 28 0v30z" fill="url(#lcrsg)" stroke="#3a2416" stroke-width="2"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#5e9a48"/><rect x="190" y="200" width="50" height="60" fill="#d8d0bc"/>' +
      '<rect x="300" y="192" width="4" height="30" fill="#555"/><rect x="342" y="192" width="4" height="30" fill="#555"/>' +
      '<rect x="290" y="168" width="66" height="30" rx="2" fill="#f4f1ea" stroke="#333" stroke-width="2"/><text x="323" y="181" text-anchor="middle" ' + font + ' font-size="8" fill="#222">SUNDAY</text><text x="323" y="193" text-anchor="middle" ' + font + ' font-size="9" fill="' + RED + '">ROMANS 1:16</text>',
      sky("lcr1", "#7ab8e8", "#f6ecd2") + '<linearGradient id="lcrsg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3fa7d6"/><stop offset=".5" stop-color="#ffd23f"/><stop offset="1" stop-color="#d7263d"/></linearGradient>');
  }

  /* 2. Denton County Courthouse-on-the-Square */
  function lcrdenton() {
    const turret = (x) => '<rect x="' + (x - 14) + '" y="96" width="28" height="84" fill="#e6d8bc" stroke="#9a8a6a" stroke-width="1.5"/><path d="M' + (x - 17) + ' 98l17 -22l17 22z" fill="#b8483a"/>' +
      '<rect x="' + (x - 6) + '" y="112" width="12" height="20" rx="6" fill="#3a4250"/><rect x="' + (x - 6) + '" y="146" width="12" height="20" rx="6" fill="#3a4250"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lcr2)"/>' +
      '<rect x="80" y="110" width="240" height="70" fill="#e6d8bc" stroke="#9a8a6a" stroke-width="2"/>' +
      [100, 130, 160, 230, 260, 290].map(x => '<rect x="' + x + '" y="122" width="14" height="22" rx="7" fill="#3a4250"/><rect x="' + x + '" y="152" width="14" height="20" fill="#3a4250"/>').join("") +
      '<rect x="168" y="78" width="64" height="102" fill="#e6d8bc" stroke="#9a8a6a" stroke-width="2"/>' +
      [176, 192, 208, 224].map(x => '<rect x="' + (x - 3) + '" y="140" width="6" height="40" fill="#c98a7a"/>').join("") +
      '<rect x="170" y="134" width="60" height="6" fill="#d8c8a8"/>' +
      '<rect x="178" y="36" width="44" height="44" fill="#e6d8bc" stroke="#9a8a6a" stroke-width="2"/><path d="M174 38l26 -30l26 30z" fill="#b8483a"/><path d="M200 8v-6" stroke="#555" stroke-width="2"/>' +
      '<circle cx="200" cy="58" r="15" fill="#fbf6ea" stroke="#5a4a3a" stroke-width="2"/>' +
      '<path class="lcr-hr" d="M200 58v-8" stroke="#222" stroke-width="2.5" stroke-linecap="round"/><path class="lcr-min" d="M200 58v-12" stroke="#222" stroke-width="1.6" stroke-linecap="round"/>' +
      turret(80) + turret(320) +
      '<path d="M80 110h240" stroke="#b8483a" stroke-width="4"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#6a9a4a"/><rect x="0" y="214" width="400" height="46" fill="#7a7468"/>' +
      [40, 360].map((x, i) => '<rect x="' + x + '" y="150" width="4" height="64" fill="#2f2f2f"/><g class="lcr-flag"><rect x="' + (x + 4) + '" y="152" width="18" height="28" fill="#0a7a3a"/><rect x="' + (x + 4) + '" y="174" width="18" height="4" fill="#fff"/></g>').join("") +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="11" fill="#f4efe2">DENTON · ON THE SQUARE</text>',
      sky("lcr2", "#5aa0e0", "#e8f0f6"));
  }

  /* 3. The Foucault pendulum at the Houston Museum of Natural Science (Gravity) */
  function lcrgravity() {
    const pegs = Array.from({ length: 14 }, (_, i) => {
      const a = Math.PI * (0.08 + i * 0.065), x = 200 + Math.cos(a) * 140, y = 214 - Math.sin(a) * 30 + 10;
      return '<g class="' + (i === 3 || i === 10 ? "lcr-peg" : "") + '"><rect x="' + (x - 2.5) + '" y="' + (y - 14) + '" width="5" height="14" rx="1" fill="#c9a24a" stroke="#6a4a1a" stroke-width="1"/></g>';
    }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lcr3)"/>' +
      '<rect x="0" y="0" width="400" height="20" fill="#2a2632"/>' + [40, 120, 200, 280, 360].map(x => '<rect x="' + (x - 18) + '" y="20" width="36" height="160" fill="#2e2a38"/>').join("") +
      '<text x="200" y="64" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="30" fill="' + GOLD + '" opacity=".9" letter-spacing="6">GRAVITY</text>' +
      '<ellipse cx="200" cy="214" rx="170" ry="38" fill="#7a5a3a"/><ellipse cx="200" cy="214" rx="150" ry="30" fill="#d8c8a0" stroke="#8a6a3a" stroke-width="2"/>' +
      '<path d="M50 214h300M200 184v60M94 193l212 42M94 235l212 -42" stroke="#8a6a3a" stroke-width="1.2" opacity=".7"/>' +
      '<path d="M200 186l6 28l-6 28l-6 -28z" fill="' + RED + '" opacity=".8"/><path d="M60 214l140 -6l140 6l-140 6z" fill="#3a3a4a" opacity=".5"/>' +
      pegs +
      '<g class="lcr-pend"><path d="M200 0V200" stroke="#cfcfd8" stroke-width="1.5"/><circle cx="200" cy="204" r="13" fill="url(#lcrbob)" stroke="#6a4a1a" stroke-width="1.5"/><path d="M200 217v6" stroke="#6a4a1a" stroke-width="2"/></g>',
      sky("lcr3", "#161420", "#3a3446") + '<radialGradient id="lcrbob" cx=".35" cy=".35" r=".7"><stop offset="0" stop-color="#fff0b0"/><stop offset=".6" stop-color="#c9a24a"/><stop offset="1" stop-color="#6a4a1a"/></radialGradient>');
  }

  /* 4. Cullen Blvd and Yellowstone Blvd, the UH Cullen Building far up Cullen behind */
  function lcrcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#lcr4)"/>' +
      '<rect x="110" y="70" width="180" height="70" fill="#d8d0bc"/><rect x="170" y="44" width="60" height="96" fill="#e2dac6"/><path d="M164 46h72l-6 -10h-60z" fill="#cfc6b0"/>' +
      [178, 192, 206, 220].map(x => '<rect x="' + (x - 2) + '" y="74" width="5" height="66" fill="#c4bba4"/>').join("") +
      [124, 144, 248, 268].map(x => '<rect x="' + x + '" y="84" width="10" height="16" fill="#3a4250" class="lcr-glow"/><rect x="' + x + '" y="110" width="10" height="16" fill="#3a4250"/>').join("") +
      '<g class="lcr-flag"><rect x="231" y="50" width="12" height="20" fill="#c8102e"/></g><rect x="229" y="40" width="2" height="34" fill="#555"/>' +
      '<rect x="0" y="136" width="400" height="90" fill="#5a5a6e"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#4a4a5e" stroke-width="1"/>').join("") +
      tag("LECRAE", 22, 196, 46, GOLD, -5) + tag("UNASHAMED", 30, 220, 18, BLUE, -3) + tag("116", 236, 190, 34, RED, -6) + tag("CRAE", 214, 218, 20, "#fff", -4) +
      '<g class="lcr-dr"><path d="M70 202q-4 6 0 10q4 -4 0 -10z" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="lcr-car"><rect x="0" y="234" width="70" height="16" rx="6" fill="#7a2be2"/><rect x="14" y="228" width="36" height="10" rx="4" fill="#24323e"/><circle cx="14" cy="252" r="5" fill="#222"/><circle cx="56" cy="252" r="5" fill="#222"/></g>' +
      '<rect x="370" y="96" width="6" height="130" fill="#2f2f2f"/>' + sign(290, 98, 106, "Cullen Blvd") + sign(282, 124, 114, "Yellowstone Blvd") +
      '<g class="lcr-sp"><circle cx="168" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="lcr-sp lcr-sp2"><circle cx="174" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("lcr4", "#14182e", "#a2563a"));
  }

  window.SCENES = { lcrstop: lcrstop, lcrchurch: lcrchurch, lcrdenton: lcrdenton, lcrgravity: lcrgravity, lcrcorner: lcrcorner };
})();
