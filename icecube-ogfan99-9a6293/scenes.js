/* icecube scenes (REGIONS tab: Los Angeles + SoCal; Westmont / South Central LA). CSS classes and ids prefixed ic- (the page's own anim-train is kept).
   1 Metro C Line pulling into Vermont/Athens, down in the median of the 105 freeway, C bullet.
   2 The blimp over South Central at night, its message board scrolling "TODAY WAS A GOOD DAY" (It Was a Good Day).
   3 The "ghetto bird": a police helicopter sweeping its searchlight over a palm-lined block (Ghetto Bird).
   4 The park court: "which park are y'all playin' basketball?" - a ball dropping through, a drop top hopping at the curb.
   5 Van Ness Ave and Imperial Hwy ("I never forgot Van Ness and Imperial"): green signs, ICE CUBE tagged on stucco, a jet dropping into LAX behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes icflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.ic-flk{animation:icflick 2.2s infinite}.ic-flk2{animation-delay:.7s}' +
    '@keyframes iccarL{from{transform:translateX(420px)}to{transform:translateX(-120px)}}.ic-carL{animation:iccarL 4.5s linear infinite}.ic-carL2{animation-delay:-2.2s}' +
    '@keyframes iccarR{from{transform:translateX(-120px)}to{transform:translateX(420px)}}.ic-carR{animation:iccarR 5s linear infinite}.ic-carR2{animation-delay:-2.6s}' +
    '@keyframes icscroll{from{transform:translateX(0)}to{transform:translateX(-300px)}}.ic-msg{animation:icscroll 6s linear infinite}' +
    '@keyframes icdrift{0%,100%{transform:translate(0,0)}50%{transform:translate(10px,-3px)}}.ic-drift{animation:icdrift 7s ease-in-out infinite}' +
    '@keyframes icsweep{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.ic-beam{transform-box:view-box;transform-origin:250px 70px;animation:icsweep 4s ease-in-out infinite}' +
    '@keyframes icrotor{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.15)}}.ic-rotor{transform-box:fill-box;transform-origin:50% 50%;animation:icrotor .18s linear infinite}' +
    '@keyframes ichover{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.ic-hover{animation:ichover 1.6s ease-in-out infinite}' +
    '@keyframes icshot{0%{transform:translate(-80px,50px)}50%{transform:translate(-30px,-40px)}80%{transform:translate(0,4px)}100%{transform:translate(0,46px)}}.ic-ball{animation:icshot 2.4s ease-in infinite}' +
    '@keyframes ichop{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}.ic-hop{animation:ichop .9s ease-in-out infinite}' +
    '@keyframes icland{from{transform:translate(-80px,-30px)}to{transform:translate(460px,70px)}}.ic-jet{animation:icland 9s linear infinite}' +
    '@keyframes icspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ic-sp{animation:icspray 1.4s ease-out infinite}.ic-sp2{animation-delay:.45s}' +
    '@keyframes icsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.ic-palm{transform-box:fill-box;transform-origin:50% 100%;animation:icsway 3.5s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const ICE = "#9fd8ff", SILVER = "#c0c5ce", SUN = "#ff8c2a", CLINE = "#58a738";
  const palm = (x, base, h, cls) => '<g class="ic-palm' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q' + 4 + ' ' + (-h / 2) + ' ' + 2 + ' ' + (-h) + '" stroke="#2a1d14" stroke-width="4" fill="none"/>' +
    [[-22, -6], [-16, 8], [20, -6], [16, 9], [0, -14]].map(([dx, dy]) => '<path d="M' + (x + 2) + ' ' + (base - h) + 'q' + dx / 2 + ' ' + (dy - 8) + ' ' + dx + ' ' + dy + '" stroke="#1f2a1c" stroke-width="4" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const car = (x, y, body, cls) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="44" height="11" rx="4" fill="' + body + '"/><rect x="' + (x + 9) + '" y="' + (y - 7) + '" width="24" height="8" rx="3" fill="' + body + '" opacity=".85"/>' +
    '<circle cx="' + (x + 10) + '" cy="' + (y + 12) + '" r="4" fill="#111"/><circle cx="' + (x + 34) + '" cy="' + (y + 12) + '" r="4" fill="#111"/></g>';

  /* 1. Vermont/Athens, Metro C Line, in the 105 median */
  function icstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (64 + i * 46) + '" y="104" width="34" height="22" rx="3" fill="#1f2a36"/>').join("");
    const train = '<g class="anim-train"><rect x="40" y="92" width="340" height="66" rx="8" fill="#e4e6e8" stroke="#8b9399" stroke-width="2"/>' + win +
      '<rect x="40" y="132" width="340" height="7" fill="' + CLINE + '"/><rect x="40" y="141" width="340" height="3" fill="#1f2a36"/>' +
      '<rect x="330" y="96" width="44" height="10" rx="2" fill="#111"/><text x="352" y="104" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">NORWALK</text>' +
      '<circle class="ic-flk" cx="372" cy="150" r="3.5" fill="#fff6c2"/><circle cx="100" cy="160" r="7" fill="#222"/><circle cx="160" cy="160" r="7" fill="#222"/><circle cx="270" cy="160" r="7" fill="#222"/><circle cx="330" cy="160" r="7" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ics1)"/>' +
      /* Vermont Ave overpass across the top */
      '<rect x="0" y="44" width="400" height="16" fill="#9a958c"/><rect x="0" y="40" width="400" height="5" fill="#bdb8ae"/>' +
      '<rect x="60" y="60" width="16" height="106" fill="#8a857c"/><rect x="324" y="60" width="16" height="106" fill="#8a857c"/>' +
      car(0, 26, "#2e6fbf", "ic-carR") + car(0, 26, "#d24a3a", "ic-carR ic-carR2") +
      '<text x="200" y="56" text-anchor="middle" ' + font + ' font-size="8" fill="#3a3630" letter-spacing="2">VERMONT AVE</text>' +
      /* freeway lanes both sides of the tracks */
      '<rect x="0" y="166" width="400" height="10" fill="#4a4a4a"/>' +
      '<path d="M0 168h400" stroke="#2c2c2c" stroke-width="3"/>' +
      train +
      '<rect x="0" y="176" width="400" height="12" fill="#c9c4b8"/><rect x="0" y="176" width="400" height="3" fill="#f2c200"/>' +
      '<rect x="0" y="188" width="400" height="10" fill="#7b7f84"/>' +
      '<rect x="0" y="198" width="400" height="62" fill="#3d3f43"/><path d="M0 228h400" stroke="#e8e2c8" stroke-width="2" stroke-dasharray="18 14"/>' +
      car(0, 214, "#c9ced6", "ic-carL") + car(0, 206, "#1c1c1c", "ic-carL ic-carL2") +
      /* station sign */
      '<rect x="78" y="194" width="244" height="40" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<text x="186" y="220" text-anchor="middle" ' + font + ' font-size="17" fill="#fff" letter-spacing="1">VERMONT / ATHENS</text>' +
      '<circle cx="300" cy="214" r="12" fill="' + CLINE + '"/><text x="300" y="219" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">C</text>' +
      '<rect x="92" y="240" width="216" height="15" rx="2" fill="#000" opacity=".55"/><text x="200" y="251" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e3c3" letter-spacing="2">I-105 · VERMONT AVE · METRO C</text>',
      sky("ics1", "#f6a65a", "#f9d9a0"));
  }

  /* 2. The blimp over South Central, message board: TODAY WAS A GOOD DAY */
  function icblimp() {
    const stars = Array.from({ length: 22 }, (_, i) => '<circle class="ic-flk' + (i % 2 ? " ic-flk2" : "") + '" cx="' + ((i * 53) % 400) + '" cy="' + ((i * 31) % 90) + '" r="1.1" fill="#fff" opacity=".7"/>').join("");
    const houses = Array.from({ length: 7 }, (_, i) => { const x = i * 60 - 6, h = 26 + (i % 3) * 6;
      return '<rect x="' + x + '" y="' + (210 - h) + '" width="50" height="' + h + '" fill="#2a2433"/><path d="M' + (x - 4) + ' ' + (210 - h) + 'l29 -14l29 14z" fill="#3b2f3e"/>' +
        '<rect class="ic-flk' + (i % 2 ? " ic-flk2" : "") + '" x="' + (x + 8) + '" y="' + (218 - h) + '" width="10" height="9" fill="#ffd27a" opacity=".8"/><rect x="' + (x + 30) + '" y="' + (218 - h) + '" width="10" height="9" fill="#ffd27a" opacity=".5"/>'; }).join("");
    const msg = 'TODAY WAS A GOOD DAY  ·  TODAY WAS A GOOD DAY  ·  ';
    const blimp = '<g class="ic-drift"><ellipse cx="200" cy="78" rx="128" ry="38" fill="#c9ccd2"/><ellipse cx="200" cy="66" rx="118" ry="20" fill="#e3e6ea" opacity=".6"/>' +
      '<path d="M320 78l30 -26v52z" fill="#a9adb5"/><path d="M322 78l26 0" stroke="#8a8e96" stroke-width="2"/>' +
      '<rect x="182" y="112" width="36" height="12" rx="4" fill="#5d6068"/>' +
      '<rect x="102" y="64" width="196" height="28" rx="4" fill="#0d0d12"/>' +
      '<clipPath id="icclip"><rect x="104" y="66" width="192" height="24"/></clipPath>' +
      '<g clip-path="url(#icclip)"><g class="ic-msg"><text x="108" y="84" ' + font + ' font-size="15" fill="#ffd23a" letter-spacing="1">' + msg + msg + '</text></g></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ics2)"/>' + stars +
      '<circle cx="54" cy="40" r="14" fill="#f6efd2" opacity=".85"/>' + blimp +
      palm(28, 210, 74) + palm(368, 210, 84, " ic-flk2") + palm(300, 210, 60) +
      houses + '<rect x="0" y="210" width="400" height="50" fill="#1d1b22"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="20 14" opacity=".7"/>' +
      '<rect x="110" y="240" width="180" height="15" rx="2" fill="#000" opacity=".55"/><text x="200" y="251" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e3c3" letter-spacing="2">SOUTH CENTRAL · 2 A.M.</text>',
      sky("ics2", "#0b0f2a", "#3a2a5a"));
  }

  /* 3. The ghetto bird: helicopter searchlight over the block */
  function icbird() {
    const houses = Array.from({ length: 6 }, (_, i) => { const x = i * 70 + 4;
      return '<rect x="' + x + '" y="166" width="56" height="40" fill="' + (i % 2 ? "#e9d8b8" : "#d9c6a2") + '" opacity=".35"/><path d="M' + (x - 4) + ' 166l32 -16l32 16z" fill="#5a3e34" opacity=".5"/>' +
        '<rect x="' + (x + 22) + '" y="184" width="12" height="22" fill="#2a2030" opacity=".6"/>'; }).join("");
    const heli = '<g class="ic-hover"><ellipse cx="250" cy="66" rx="30" ry="14" fill="#14161c"/><path d="M276 62h60v6h-60z" fill="#14161c"/><path d="M334 54l8 0l-4 18z" fill="#14161c"/>' +
      '<ellipse cx="238" cy="64" rx="12" ry="8" fill="#3a5a7a" opacity=".8"/>' +
      '<rect x="236" y="80" width="30" height="3" fill="#14161c"/><path d="M240 76v4M262 76v4" stroke="#14161c" stroke-width="2"/>' +
      '<rect class="ic-rotor" x="200" y="47" width="100" height="3" fill="#2b2e36"/><rect x="248" y="48" width="4" height="6" fill="#14161c"/>' +
      '<circle class="ic-flk" cx="336" cy="54" r="2.5" fill="#ff3a3a"/><circle class="ic-flk ic-flk2" cx="226" cy="76" r="2" fill="#4ad1ff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ics3)"/>' +
      '<g fill="#fff" opacity=".6"><circle cx="40" cy="30" r="1"/><circle cx="120" cy="18" r="1"/><circle cx="380" cy="24" r="1"/><circle cx="170" cy="40" r="1"/></g>' +
      '<g class="ic-beam"><path d="M250 70L170 230h160z" fill="#fff8d0" opacity=".22"/><ellipse cx="250" cy="226" rx="80" ry="10" fill="#fff8d0" opacity=".3"/></g>' +
      houses + palm(60, 206, 96) + palm(196, 206, 110, " ic-flk2") + palm(342, 206, 90) +
      '<rect x="0" y="206" width="400" height="54" fill="#22222a"/><path d="M0 232h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="20 14" opacity=".7"/>' +
      heli +
      '<rect x="110" y="240" width="180" height="15" rx="2" fill="#000" opacity=".55"/><text x="200" y="251" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e3c3" letter-spacing="2">RUN FROM THE GHETTO BIRD</text>',
      sky("ics3", "#05070f", "#1e2a44"));
  }

  /* 4. The park court: ball through the rim, drop top hopping at the curb */
  function iccourt() {
    const hoop = '<rect x="318" y="60" width="6" height="140" fill="#5b5f66"/><rect x="290" y="56" width="58" height="38" fill="#f4f4f4" stroke="#333" stroke-width="2"/>' +
      '<rect x="308" y="72" width="22" height="16" fill="none" stroke="#c8102e" stroke-width="2"/><path d="M296 96h30" stroke="' + SUN + '" stroke-width="3"/>' +
      '<path d="M298 97l4 14h18l4 -14" stroke="#eee" stroke-width="1.2" fill="none"/><path d="M302 97l6 14M310 97v14M318 97l-4 14" stroke="#eee" stroke-width="1"/>';
    const ball = '<g class="ic-ball"><circle cx="311" cy="86" r="8" fill="' + SUN + '" stroke="#5a2a0a" stroke-width="1.5"/><path d="M303 86h16M311 78v16" stroke="#5a2a0a" stroke-width="1"/></g>';
    const lowrider = '<g class="ic-hop"><path d="M30 214h120l-6 -12h-30l-10 -10h-34l-12 10h-24z" fill="#6a1fb0"/><path d="M66 192h30l8 10H60z" fill="#9fd8ff" opacity=".5"/>' +
      '<rect x="30" y="210" width="120" height="4" fill="' + SILVER + '"/><circle cx="56" cy="218" r="9" fill="#111"/><circle cx="56" cy="218" r="5" fill="' + SILVER + '"/>' +
      '<circle cx="126" cy="218" r="9" fill="#111"/><circle cx="126" cy="218" r="5" fill="' + SILVER + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ics4)"/>' +
      '<circle cx="80" cy="54" r="22" fill="#fff1b8" opacity=".9"/>' +
      palm(30, 150, 90) + palm(220, 150, 104, " ic-flk2") + palm(380, 150, 80) +
      /* chain-link fence */
      '<rect x="0" y="110" width="400" height="60" fill="none"/>' +
      Array.from({ length: 21 }, (_, i) => '<path d="M' + (i * 20) + ' 110l20 40M' + (i * 20 + 20) + ' 110l-20 40" stroke="#9aa0a6" stroke-width=".8" opacity=".6"/>').join("") +
      '<path d="M0 110h400" stroke="#8a9096" stroke-width="2"/>' +
      '<rect x="0" y="150" width="400" height="56" fill="#2f6b4a"/><path d="M0 150h400" stroke="#fff" stroke-width="2"/><path d="M240 150a60 30 0 0 0 0 56" stroke="#fff" stroke-width="2" fill="none"/>' +
      '<path d="M200 150v56" stroke="#fff" stroke-width="2"/>' + hoop + ball +
      '<rect x="0" y="206" width="400" height="54" fill="#3a3a40"/><rect x="0" y="204" width="400" height="4" fill="#cfcac0"/>' + lowrider +
      '<rect x="190" y="214" width="110" height="20" rx="3" fill="#111"/><text x="245" y="228" text-anchor="middle" ' + font + ' font-size="11" fill="#ffd23a" letter-spacing="1">TRIPLE-DOUBLE</text>' +
      '<rect x="110" y="240" width="180" height="15" rx="2" fill="#000" opacity=".55"/><text x="200" y="251" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e3c3" letter-spacing="2">WHICH PARK Y\'ALL PLAYIN\'?</text>',
      sky("ics4", "#4a8fd0", "#ffd9a0"));
  }

  /* 5. Van Ness Ave and Imperial Hwy, a jet dropping into LAX behind */
  function iccorner() {
    const jet = '<g class="ic-jet"><path d="M0 40l46 -4l10 -4l4 4l-8 4l20 -2v4l-22 2l-10 6z" fill="#e8eaee"/><path d="M14 38l-8 -10h6l12 9z" fill="#e8eaee"/><path d="M24 42l14 12h-6l-16 -10z" fill="#d0d4da"/>' +
      '<circle class="ic-flk" cx="60" cy="36" r="2" fill="#fff8c2"/><circle class="ic-flk ic-flk2" cx="8" cy="30" r="1.8" fill="#ff4a4a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ics5)"/>' +
      '<g fill="#3a2a3e" opacity=".7"><rect x="20" y="96" width="60" height="30"/><rect x="290" y="92" width="80" height="34"/></g>' +
      jet + palm(110, 128, 70) + palm(250, 128, 84, " ic-flk2") +
      /* stucco wall */
      '<rect x="0" y="126" width="400" height="98" fill="#e2c9a0"/>' + Array.from({ length: 30 }, (_, i) => '<circle cx="' + ((i * 61) % 400) + '" cy="' + (132 + (i * 23) % 88) + '" r="1.2" fill="#c9ad80"/>').join("") +
      '<rect x="0" y="126" width="400" height="6" fill="#c7a878"/>' +
      tag("ICE CUBE", 14, 190, 44, ICE, -6) + tag("LENCH MOB", 24, 214, 18, SUN, -3) + tag("WESTSIDE", 140, 216, 18, "#ffffff", -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5a5753"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(246, 98, 150, "Imperial Hwy") + sign(272, 124, 110, "Van Ness Av") +
      '<g class="ic-sp"><circle cx="232" cy="166" r="3" fill="' + ICE + '" opacity=".7"/></g><g class="ic-sp ic-sp2"><circle cx="238" cy="160" r="2" fill="' + ICE + '" opacity=".6"/></g>',
      sky("ics5", "#2a1c4a", "#ff9a5a"));
  }

  window.SCENES = { icstation: icstation, icblimp: icblimp, icbird: icbird, iccourt: iccourt, iccorner: iccorner };
})();
