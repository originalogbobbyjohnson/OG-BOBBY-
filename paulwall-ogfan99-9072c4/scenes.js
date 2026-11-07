/* paulwall scenes (Regions tab: Houston + Texas; Jersey Village, northwest Houston, where he grew up). CSS classes and ids prefixed pw- (the page's own anim-train is kept).
   1 West Little York Park & Ride (US 290 at W Little York Rd, at the edge of Jersey Village): the long bus canopy, the METRO 216 commuter bus pulling in, cars streaming on the 290 behind.
   2 The grill counter ("got a mouth full of diamonds", "say cheese and show my fronts"): a jeweler's glass case with gold, diamond and rose-gold grills on velvet, sparkles popping.
   3 University of Houston, where he studied mass communications ("meet me at U of H"): the pale limestone Ezekiel Cullen Building, the big Cullen Family Plaza fountain jets, red banners on the lamp posts.
   4 The downtown ballpark at night (World Series Grillz): the red-brick Union Station front, the steel roof trusses, the old locomotive rolling on the track above left field, fireworks.
   5 Solomon St and W Gulf Bank Rd, Jersey Village: green signs, PAUL WALL tagged on the wall, a purple candy-paint slab rolling by, Jersey Village High's tan-brick front behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes pwflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.pw-flk{animation:pwflick 2.2s infinite}.pw-flk2{animation-delay:.7s}' +
    '@keyframes pwcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.pw-car{animation:pwcar 5s linear infinite}.pw-car2{animation-delay:-2.5s}.pw-car3{animation-delay:-1.2s}' +
    '@keyframes pwcarl{from{transform:translateX(520px)}to{transform:translateX(-120px)}}.pw-carl{animation:pwcarl 6s linear infinite}.pw-carl2{animation-delay:-3s}' +
    '@keyframes pwtw{0%,100%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1)}}.pw-tw{transform-box:fill-box;transform-origin:50% 50%;animation:pwtw 1.6s ease-in-out infinite}.pw-tw2{animation-delay:-.55s}.pw-tw3{animation-delay:-1.1s}' +
    '@keyframes pwjet{0%,100%{transform:scaleY(.82)}50%{transform:scaleY(1.06)}}.pw-jet{transform-box:fill-box;transform-origin:50% 100%;animation:pwjet 1.3s ease-in-out infinite}.pw-jet2{animation-delay:-.65s}' +
    '@keyframes pwflag{0%,100%{transform:skewY(0)}50%{transform:skewY(5deg)}}.pw-flag{transform-box:fill-box;transform-origin:0% 0%;animation:pwflag 1.8s ease-in-out infinite}.pw-flag2{animation-delay:-.9s}' +
    '@keyframes pwloco{0%,100%{transform:translateX(0)}50%{transform:translateX(150px)}}.pw-loco{animation:pwloco 9s ease-in-out infinite}' +
    '@keyframes pwboom{0%{transform:scale(.1);opacity:1}80%{opacity:.9}100%{transform:scale(1.4);opacity:0}}.pw-boom{transform-box:fill-box;transform-origin:50% 50%;animation:pwboom 2.4s ease-out infinite}.pw-boom2{animation-delay:-1.2s}' +
    '@keyframes pwslab{from{transform:translateX(-200px)}to{transform:translateX(560px)}}.pw-slab{animation:pwslab 7s linear infinite}' +
    '@keyframes pwspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.pw-rim{transform-box:fill-box;transform-origin:50% 50%;animation:pwspin .45s linear infinite}' +
    '@keyframes pwbird{0%{transform:translate(0,0)}100%{transform:translate(-460px,-30px)}}.pw-bird{animation:pwbird 10s linear infinite}' +
    '@keyframes pwwing{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.pw-wing{transform-box:fill-box;transform-origin:50% 100%;animation:pwwing .5s ease-in-out infinite}' +
    '@keyframes pwspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.pw-sp{animation:pwspray 1.4s ease-out infinite}.pw-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const spark = (x, y, r, cls) => '<path class="pw-tw ' + (cls || "") + '" d="M' + x + ' ' + (y - r) + 'L' + (x + r * .25) + ' ' + (y - r * .25) + 'L' + (x + r) + ' ' + y + 'L' + (x + r * .25) + ' ' + (y + r * .25) + 'L' + x + ' ' + (y + r) + 'L' + (x - r * .25) + ' ' + (y + r * .25) + 'L' + (x - r) + ' ' + y + 'L' + (x - r * .25) + ' ' + (y - r * .25) + 'z" fill="#fff"/>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 89) % 400) + '" cy="' + (6 + (i * 47) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const METRO = "#1f4e79", RED = "#e31837", ICE = "#8fe3ff", GOLD = "#f5c542", CANDY = "#8a3ffc", UHRED = "#c8102e";
  const car = (x, y, c) => '<g transform="translate(' + x + ' ' + y + ')"><rect x="0" y="6" width="44" height="12" rx="4" fill="' + c + '"/><path d="M8 6l6 -7h16l6 7z" fill="' + c + '"/><circle cx="10" cy="18" r="4" fill="#111"/><circle cx="34" cy="18" r="4" fill="#111"/></g>';

  /* 1. West Little York Park & Ride, METRO 216 */
  function pwstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (62 + i * 36) + '" y="146" width="30" height="22" rx="3" fill="#1d2833"/>').join("");
    const bus = '<g class="anim-train"><rect x="28" y="136" width="318" height="70" rx="10" fill="#f4f5f3" stroke="#8f979e" stroke-width="2"/>' + win +
      '<rect x="34" y="146" width="22" height="48" rx="2" fill="#1d2833"/><rect x="28" y="176" width="318" height="8" fill="' + METRO + '"/><rect x="28" y="186" width="318" height="3" fill="' + RED + '"/>' +
      '<rect x="32" y="138" width="130" height="10" rx="2" fill="#111"/><text x="97" y="146" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">216 WEST LITTLE YORK</text>' +
      '<circle cx="80" cy="208" r="12" fill="#222"/><circle cx="80" cy="208" r="5" fill="#9aa1a8"/><circle cx="294" cy="208" r="12" fill="#222"/><circle cx="294" cy="208" r="5" fill="#9aa1a8"/>' +
      '<circle cx="32" cy="196" r="3.5" fill="#fff6c2"/></g>';
    const fwy = '<rect x="0" y="62" width="400" height="10" fill="#b9b4aa"/><rect x="0" y="72" width="400" height="4" fill="#8a857c"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="76" width="10" height="34" fill="#a39e94"/>').join("") +
      '<g class="pw-car">' + car(0, 46, "#c0392b") + '</g><g class="pw-car pw-car2">' + car(0, 46, "#f2f2f2") + '</g><g class="pw-carl">' + car(0, 46, "#2e86c1") + '</g><g class="pw-carl pw-carl2">' + car(0, 46, "#555") + '</g>' +
      '<rect x="300" y="20" width="70" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/><text x="335" y="34" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">US 290 W</text><path d="M335 40v22" stroke="#6b7178" stroke-width="3"/>';
    const canopy = '<path d="M0 98h400l-10 -12h-380z" fill="#e9eef2" stroke="#a6b0b8" stroke-width="1.5"/>' +
      [20, 120, 220, 320].map((x, i) => '<rect x="' + (x + 30) + '" y="98" width="6" height="40" fill="#7d8a96"/><rect class="pw-flk' + (i % 2 ? " pw-flk2" : "") + '" x="' + (x + 10) + '" y="99" width="44" height="3" rx="1" fill="#fff6c2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#pws1)"/>' + fwy +
      '<rect x="0" y="110" width="400" height="30" fill="#cfc9bd"/>' + canopy +
      '<rect x="0" y="138" width="400" height="122" fill="#55565c"/><path d="M0 232h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="22 16"/>' +
      bus +
      '<rect x="374" y="104" width="5" height="112" fill="#6b7178"/><rect x="356" y="92" width="40" height="30" rx="3" fill="' + METRO + '" stroke="#fff" stroke-width="1.5"/><text x="376" y="104" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">METRO</text><text x="376" y="117" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">216</text>' +
      '<rect x="40" y="220" width="292" height="34" rx="3" fill="#111"/><text x="50" y="242" ' + font + ' font-size="13" fill="#fff">West Little York Park &amp; Ride</text>' + badge(282, 237, "216", METRO),
      sky("pws1", "#f4a05a", "#ffe3b0"));
  }

  /* 2. The grill counter */
  function pwgrill() {
    const grill = (x, y, metal, gem, n) => {
      let s = '<g transform="translate(' + x + ' ' + y + ')"><path d="M0 10q48 -22 96 0v18q-48 14 -96 0z" fill="#3a1630"/>';
      for (let i = 0; i < n; i++) {
        const tx = 6 + i * (84 / (n - 1)) - 6, top = 6 - Math.sin(i / (n - 1) * Math.PI) * 6;
        s += '<rect x="' + tx + '" y="' + (top + 4) + '" width="12" height="18" rx="4" fill="' + metal + '" stroke="#5a4520" stroke-width=".8"/>';
        if (gem) s += '<circle cx="' + (tx + 6) + '" cy="' + (top + 10) + '" r="2.4" fill="' + gem + '"/><circle cx="' + (tx + 6) + '" cy="' + (top + 17) + '" r="2.4" fill="' + gem + '"/>';
      }
      return s + '</g>';
    };
    return svg(
      '<rect width="400" height="260" fill="#120a1c"/>' +
      '<rect x="0" y="0" width="400" height="90" fill="#1c1030"/>' + Array.from({ length: 8 }, (_, i) => '<circle cx="' + (25 + i * 50) + '" cy="10" r="4" fill="#fff6c2" class="pw-flk' + (i % 2 ? " pw-flk2" : "") + '"/>').join("") +
      '<g class="pw-flk"><rect x="120" y="28" width="160" height="42" rx="8" fill="none" stroke="' + CANDY + '" stroke-width="4"/><text x="200" y="59" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="26" fill="#d8b8ff" stroke="' + CANDY + '" stroke-width="1">GRILLZ</text></g>' +
      /* glass case */
      '<rect x="20" y="100" width="360" height="120" rx="4" fill="#2a0f2a" stroke="#c9a24a" stroke-width="3"/><rect x="26" y="106" width="348" height="108" fill="#5a1640"/>' +
      '<path d="M26 106l60 0l-40 108h-20z" fill="#fff" opacity=".06"/><path d="M200 106l40 0l-60 108h-40z" fill="#fff" opacity=".05"/>' +
      grill(40, 140, GOLD, null, 6) + grill(152, 140, "#eef4f8", ICE, 6) + grill(264, 140, "#f2b8a2", "#fff", 6) +
      '<rect x="20" y="220" width="360" height="40" fill="#3b2418"/><rect x="20" y="220" width="360" height="5" fill="#c9a24a"/>' +
      spark(70, 136, 7) + spark(198, 132, 9, "pw-tw2") + spark(230, 160, 6, "pw-tw3") + spark(320, 134, 7, "pw-tw2") + spark(178, 168, 5) + spark(110, 166, 5, "pw-tw3"),
      "");
  }

  /* 3. University of Houston: Ezekiel Cullen Building and the Cullen Family Plaza fountain */
  function pwuh() {
    const LIME = "#e6d8b6", LIME2 = "#cbb98f";
    const bldg = '<rect x="20" y="70" width="360" height="90" fill="' + LIME + '"/><rect x="20" y="64" width="360" height="8" fill="' + LIME2 + '"/>' +
      '<rect x="140" y="38" width="120" height="122" fill="' + LIME + '"/><rect x="134" y="32" width="132" height="10" fill="' + LIME2 + '"/><rect x="170" y="24" width="60" height="10" fill="' + LIME2 + '"/>' +
      [152, 172, 192, 212, 232].map(x => '<rect x="' + x + '" y="52" width="12" height="100" fill="#d8c79e"/><rect x="' + (x + 2) + '" y="56" width="8" height="92" fill="#f2e8d0"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (30 + i * 18) + '" y="84" width="10" height="20" fill="#5d6b78"/><rect x="' + (30 + i * 18) + '" y="116" width="10" height="20" fill="#5d6b78"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (272 + i * 18) + '" y="84" width="10" height="20" fill="#5d6b78"/><rect x="' + (272 + i * 18) + '" y="116" width="10" height="20" fill="#5d6b78"/>').join("") +
      '<rect x="182" y="124" width="36" height="36" fill="#4a3a2a"/>';
    const oak = (x) => '<g><rect x="' + (x - 4) + '" y="128" width="8" height="40" fill="#5b4632"/><ellipse cx="' + x + '" cy="122" rx="34" ry="20" fill="#3f6b35"/><ellipse cx="' + (x - 14) + '" cy="114" rx="18" ry="12" fill="#4d7d40"/></g>';
    const lamp = (x, cls) => '<rect x="' + x + '" y="150" width="4" height="60" fill="#333"/><circle cx="' + (x + 2) + '" cy="148" r="5" fill="#fff6c2"/><rect class="pw-flag ' + cls + '" x="' + (x + 4) + '" y="158" width="14" height="26" fill="' + UHRED + '"/>';
    const jets = [-60, -36, -12, 12, 36, 60].map((d, i) => '<path class="pw-jet' + (i % 2 ? " pw-jet2" : "") + '" d="M' + (200 + d) + ' 206q' + (d / 6) + ' -' + (34 + (3 - Math.abs(i - 2.5)) * 10) + ' ' + (d / 3) + ' -' + (40 + (3 - Math.abs(i - 2.5)) * 12) + '" stroke="#dff4ff" stroke-width="4" fill="none" stroke-linecap="round" opacity=".9"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#pws3)"/>' + bldg + oak(40) + oak(360) +
      '<rect x="0" y="160" width="400" height="100" fill="#d9d2c2"/>' +
      '<ellipse cx="200" cy="214" rx="120" ry="22" fill="#b8ad98"/><ellipse cx="200" cy="210" rx="110" ry="17" fill="#5aa9d6"/><ellipse cx="200" cy="210" rx="110" ry="17" fill="none" stroke="#e8e0cc" stroke-width="5"/>' +
      jets + '<ellipse cx="200" cy="204" rx="24" ry="5" fill="#bfe6fb" opacity=".8"/>' +
      lamp(54, "") + lamp(336, "pw-flag2") +
      '<rect x="120" y="236" width="160" height="20" rx="3" fill="#111" opacity=".85"/><text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">UNIVERSITY OF HOUSTON</text>',
      sky("pws3", "#6fb2e6", "#e9f3fa"));
  }

  /* 4. The downtown ballpark at night */
  function pwpark() {
    const BRICK = "#9a4a32";
    const station = '<rect x="0" y="96" width="150" height="100" fill="' + BRICK + '"/><rect x="0" y="90" width="150" height="8" fill="#d8c8a8"/>' +
      [10, 58, 106].map(x => '<path d="M' + x + ' 190v-60a17 17 0 0 1 34 0v60z" fill="#ffd98a" opacity=".85"/><path d="M' + (x + 17) + ' 113v77" stroke="' + BRICK + '" stroke-width="2"/>').join("") +
      '<rect x="0" y="100" width="150" height="5" fill="#d8c8a8"/>';
    const roof = '<path d="M150 66h250v14h-250z" fill="#d6dbe0"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (152 + i * 21) + ' 80l10 -14l10 14" stroke="#9aa3ab" stroke-width="2" fill="none"/>').join("") +
      '<rect x="150" y="80" width="250" height="6" fill="#8a939b"/>';
    const stands = '<path d="M150 86h250v50h-250z" fill="#25324a"/>' + Array.from({ length: 60 }, (_, i) => '<circle cx="' + (156 + (i * 41) % 240) + '" cy="' + (94 + (i * 13) % 38) + '" r="1.6" fill="' + ["#eb6e1f", "#fff", "#f5c542", "#9fc4dc"][i % 4] + '"/>').join("");
    const track = '<rect x="0" y="86" width="150" height="4" fill="#444"/>' +
      '<g class="pw-loco"><g transform="translate(-6 0)"><rect x="10" y="64" width="40" height="20" rx="2" fill="#1d1d1f"/><rect x="40" y="56" width="14" height="28" fill="#2a2a2e"/><rect x="18" y="56" width="6" height="10" fill="#1d1d1f"/>' +
      '<path d="M10 84l-8 4h12z" fill="#c0392b"/><circle cx="20" cy="86" r="4" fill="#555"/><circle cx="34" cy="86" r="4" fill="#555"/><circle cx="48" cy="86" r="4" fill="#555"/>' +
      '<rect x="56" y="70" width="26" height="14" rx="2" fill="#eb6e1f"/><circle cx="62" cy="76" r="3" fill="#f5a623"/><circle cx="70" cy="76" r="3" fill="#f5a623"/><circle cx="78" cy="76" r="3" fill="#f5a623"/>' +
      '<circle cx="62" cy="86" r="3" fill="#555"/><circle cx="76" cy="86" r="3" fill="#555"/><circle cx="14" cy="70" r="2.5" fill="#fff6c2"/></g></g>';
    const field = '<rect x="0" y="196" width="400" height="64" fill="#2f8a3c"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 50) + '" y="196" width="25" height="64" fill="#2a7d36"/>').join("") +
      '<path d="M150 136h250v54h-250z" fill="#1f5f3a"/><path d="M150 136h250v4h-250z" fill="#f5c542"/><rect x="230" y="146" width="90" height="34" rx="2" fill="#111"/>' + Array.from({ length: 8 }, (_, i) => '<rect class="pw-flk' + (i % 2 ? " pw-flk2" : "") + '" x="' + (236 + i * 10) + '" y="152" width="7" height="22" fill="' + (i % 3 ? "#eb6e1f" : "#fff6c2") + '" opacity=".85"/>').join("") + '<path d="M0 190h400v8h-400z" fill="#12263a"/><path d="M60 260l140 -50l140 50z" fill="#b8865a" opacity=".85"/>';
    const lights = [176, 380].map(x => '<rect x="' + x + '" y="20" width="4" height="46" fill="#7d8a96"/><rect x="' + (x - 14) + '" y="12" width="32" height="12" rx="2" fill="#fff6c2" class="pw-flk"/>').join("");
    const boom = (x, y, c, cls) => '<g class="pw-boom ' + cls + '">' + Array.from({ length: 10 }, (_, i) => { const a = i * Math.PI / 5; return '<path d="M' + x + ' ' + y + 'l' + (Math.cos(a) * 18).toFixed(1) + ' ' + (Math.sin(a) * 18).toFixed(1) + '" stroke="' + c + '" stroke-width="2.5" stroke-linecap="round"/>'; }).join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pws4)"/>' + stars(30) + boom(260, 34, "#eb6e1f", "") + boom(330, 50, "#f5c542", "pw-boom2") + boom(80, 30, ICE, "pw-boom2") +
      lights + roof + stands + station + track + field,
      sky("pws4", "#0b1530", "#28406a"));
  }

  /* 5. Solomon St and W Gulf Bank Rd, Jersey Village */
  function pwcorner() {
    const school = '<rect x="150" y="62" width="250" height="80" fill="#c9a77a"/><rect x="150" y="56" width="250" height="8" fill="#a8865c"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (162 + i * 29) + '" y="74" width="18" height="16" fill="#3f4a56"/><rect x="' + (162 + i * 29) + '" y="102" width="18" height="16" fill="#3f4a56"/>').join("") +
      '<rect x="250" y="40" width="80" height="22" fill="#4b2a7b"/><text x="290" y="56" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">FALCONS</text>' +
      '<rect x="262" y="118" width="56" height="24" fill="#5a3a22"/><path d="M262 118h56" stroke="' + GOLD + '" stroke-width="3"/>';
    const bird = '<g class="pw-bird"><g transform="translate(420 30)"><path class="pw-wing" d="M0 6q8 -10 16 0q8 -10 16 0" stroke="#2a2438" stroke-width="3" fill="none"/></g></g>';
    const wall = '<rect x="0" y="120" width="210" height="100" fill="#8b5a44"/>' + Array.from({ length: 10 }, (_, r) => '<path d="M0 ' + (128 + r * 10) + 'h210" stroke="#6e4535" stroke-width="1"/>').join("") +
      tag("PAUL WALL", 20, 178, 34, ICE, -6) + tag("WHAT IT DO", 54, 206, 16, GOLD, -4) +
      '<circle class="pw-sp" cx="186" cy="150" r="3" fill="' + ICE + '"/><circle class="pw-sp pw-sp2" cx="194" cy="158" r="2.5" fill="' + ICE + '"/>';
    const slab = '<g class="pw-slab"><g transform="translate(0 202)"><rect x="0" y="10" width="120" height="22" rx="6" fill="' + CANDY + '"/><path d="M20 10l14 -14h48l16 14z" fill="' + CANDY + '"/><path d="M38 -2h40l10 10h-56z" fill="#cfe9ff" opacity=".7"/>' +
      '<path d="M4 18h112" stroke="#d8b8ff" stroke-width="2" opacity=".7"/><rect x="104" y="12" width="14" height="8" rx="2" fill="#ffe08a"/>' +
      [26, 96].map(x => '<g class="pw-rim"><circle cx="' + x + '" cy="34" r="11" fill="#cfd5db" stroke="#222" stroke-width="3"/>' + [0, 60, 120].map(a => '<path d="M' + x + ' 34l' + (Math.cos(a * Math.PI / 180) * 16).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * 16).toFixed(1) + '" stroke="#eef2f5" stroke-width="2.5"/>').join("") + '</g>').join("") + '</g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pws5)"/>' + school + bird +
      '<rect x="0" y="142" width="400" height="56" fill="#5f9a45"/><rect x="0" y="198" width="400" height="22" fill="#cfc9bd"/>' + wall +
      '<rect x="0" y="220" width="400" height="40" fill="#4e4f55"/><path d="M0 244h400" stroke="#f2c200" stroke-width="2.5" stroke-dasharray="20 14"/>' +
      '<rect x="300" y="84" width="6" height="140" fill="#6b7178"/>' + sign(232, 86, 140, "SOLOMON ST") + sign(244, 112, 128, "W GULF BANK RD") +
      slab,
      sky("pws5", "#79b8ea", "#f8e2c0"));
  }

  window.SCENES = { pwstation: pwstation, pwgrill: pwgrill, pwuh: pwuh, pwpark: pwpark, pwcorner: pwcorner };
})();
