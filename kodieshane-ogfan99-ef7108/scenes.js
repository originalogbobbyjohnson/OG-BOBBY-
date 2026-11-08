/* kodieshane scenes (Regions tab: Atlanta; North Ave / Old Fourth Ward). CSS classes and ids prefixed ks- (the page's own anim-train is kept).
   1 North Avenue station on MARTA's Red + Gold lines: the underground platform under North Ave and West Peachtree St, a silver MARTA train sliding in.
   2 The old Masquerade at 695 North Ave NE (the DuPre Excelsior Mill, the venue's home until 2016), where she met Lil Yachty at his first Atlanta show:
     tall black steel-sided mill on a stone foundation, the huge castle-like wooden double doors, outside stairs, the crowd bouncing, light beams.
   3 Her mom's studio in Atlanta, where she wrote "Sad" at 14: the booth, a mic with a pop filter, the console meters jumping, a heart on the screen.
   4 The Sounds Like ATL taping (WABE TV, Feb 2024, drawn generic): the TV stage, two cameras, ON AIR light, a lone mic in a pink spotlight.
   5 North Ave NE and Glen Iris Dr NE: green signs, KODIE SHANE tagged with SAILING TEAM, DON BABY and HEARTTHROB, Ponce City Market's red-brick tower behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ksflk{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.ks-flk{animation:ksflk 2.6s infinite}.ks-flk2{animation-delay:.9s}' +
    '@keyframes ksglow{0%,100%{opacity:.4}50%{opacity:1}}.ks-glow{animation:ksglow 2.2s ease-in-out infinite}.ks-g2{animation-delay:-1.1s}' +
    '@keyframes ksbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.ks-beam{transform-box:fill-box;transform-origin:50% 0%;animation:ksbeam 3.6s ease-in-out infinite}.ks-beam2{animation-delay:-1.8s}' +
    '@keyframes ksbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.ks-bob{animation:ksbob .8s ease-in-out infinite}.ks-b2{animation-delay:-.27s}.ks-b3{animation-delay:-.54s}' +
    '@keyframes ksmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.ks-m{transform-box:fill-box;transform-origin:50% 100%;animation:ksmeter .9s ease-in-out infinite}.ks-m2{animation-delay:-.3s}.ks-m3{animation-delay:-.6s}' +
    '@keyframes ksbeat{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}.ks-heart{transform-box:fill-box;transform-origin:50% 50%;animation:ksbeat 1s ease-in-out infinite}' +
    '@keyframes ksfloat{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.ks-fl{animation:ksfloat 2.4s linear infinite}.ks-fl2{animation-delay:-.8s}.ks-fl3{animation-delay:-1.6s}' +
    '@keyframes kscam{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.ks-cam{transform-box:fill-box;transform-origin:50% 100%;animation:kscam 4s ease-in-out infinite}' +
    '@keyframes kscar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.ks-car{animation:kscar 7s linear infinite}' +
    '@keyframes kssp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.ks-sp{animation:kssp 1.4s ease-out infinite}.ks-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="30" height="20" rx="4" fill="' + color + '"/><text x="' + (x + 15) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const heart = (cx, cy, s, fill, cls) => '<path' + (cls ? ' class="' + cls + '"' : '') + ' d="M' + cx + ' ' + (cy + s) + 'C' + (cx - s * 1.6) + ' ' + (cy - s * 0.2) + ' ' + (cx - s * 0.9) + ' ' + (cy - s * 1.3) + ' ' + cx + ' ' + (cy - s * 0.45) +
    'C' + (cx + s * 0.9) + ' ' + (cy - s * 1.3) + ' ' + (cx + s * 1.6) + ' ' + (cy - s * 0.2) + ' ' + cx + ' ' + (cy + s) + 'z" fill="' + fill + '"/>';
  const PINK = "#ff5fa8", SKY = "#5ec8ff", GOLD = "#ffd23f", RED = "#e8202e", MGOLD = "#d4a017", BLUE = "#0072bc", ORANGE = "#e86a33";

  /* 1. North Avenue station: underground island platform, beige tile walls, coffered concrete ceiling, black station sign with RD + GD, silver MARTA train */
  function ksstation() {
    const tr = '<g class="anim-train"><rect x="20" y="112" width="340" height="74" rx="8" fill="#c9ced4" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 46) + '" y="124" width="32" height="26" rx="3" fill="#1d262e"/>').join("") +
      '<rect x="20" y="156" width="340" height="9" fill="' + BLUE + '"/><rect x="20" y="167" width="340" height="3" fill="' + ORANGE + '"/>' +
      '<path d="M120 124v58M246 124v58" stroke="#9aa1a8" stroke-width="2"/>' +
      '<rect x="340" y="116" width="20" height="68" rx="4" fill="#a3a9b0"/><circle cx="352" cy="176" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ks1)"/>' +
      /* coffered ceiling */
      '<rect x="0" y="0" width="400" height="46" fill="#77716a"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (6 + i * 44) + '" y="6" width="36" height="30" fill="#5f5a54"/>').join("") +
      [30, 160, 290].map((x, i) => '<rect class="ks-flk' + (i === 1 ? " ks-flk2" : "") + '" x="' + x + '" y="40" width="80" height="4" rx="2" fill="#fff8dc"/>').join("") +
      /* tile wall across the tracks */
      '<rect x="0" y="46" width="400" height="66" fill="#d9cdb4"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (56 + i * 10) + 'h400" stroke="#c4b89e" stroke-width="1"/>').join("") +
      '<rect x="0" y="100" width="400" height="12" fill="#2a2a2c"/>' +
      '<rect x="0" y="108" width="400" height="80" fill="#1b1b1d"/>' + tr +
      '<rect x="0" y="188" width="400" height="7" fill="#f2c200"/><rect x="0" y="195" width="400" height="65" fill="#8f8a82"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 195v65" stroke="#7f7a72" stroke-width="1"/>').join("") +
      [26, 374].map(x => '<rect x="' + (x - 9) + '" y="46" width="18" height="142" fill="#8a847a"/>').join("") +
      '<rect x="70" y="56" width="260" height="38" rx="3" fill="#111"/><text x="84" y="81" ' + font + ' font-size="19" fill="#fff">North Ave</text>' +
      bullet(246, 75, "RD", RED) + bullet(284, 75, "GD", MGOLD) +
      '<rect x="150" y="214" width="100" height="6" rx="3" fill="#fff6c2" opacity=".35" class="ks-flk"/>',
      sky("ks1", "#cfc4ad", "#a59c8c"));
  }

  /* 2. The old Masquerade, 695 North Ave NE: tall black steel-sided mill, stone foundation, huge castle-like wooden double doors, outside stairs, a show night */
  function ksmasq() {
    const crowd = Array.from({ length: 16 }, (_, i) => '<g class="ks-bob ks-b' + (1 + i % 3) + '"><circle cx="' + (14 + i * 25) + '" cy="226" r="8" fill="#140c18"/><rect x="' + (6 + i * 25) + '" y="232" width="16" height="30" rx="6" fill="#140c18"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ks2)"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle class="' + (i % 3 ? "" : "ks-glow") + '" cx="' + ((i * 71) % 400) + '" cy="' + (8 + (i * 37) % 44) + '" r="1.2" fill="#fff" opacity=".7"/>').join("") +
      /* light beams from behind the roof */
      '<path class="ks-beam" d="M120 70L80 0H112z" fill="' + PINK + '" opacity=".35"/><path class="ks-beam ks-beam2" d="M280 70L292 0H324z" fill="' + SKY + '" opacity=".35"/>' +
      /* the mill: black steel siding, stepped roofline */
      '<path d="M60 74h120v-14h40v14h120v130H60z" fill="#1e1e22"/>' +
      Array.from({ length: 34 }, (_, i) => '<path d="M' + (64 + i * 8.4) + ' 76v128" stroke="#2c2c32" stroke-width="2"/>').join("") +
      '<path d="M56 74h288" stroke="#3a3a40" stroke-width="4"/><path d="M178 60h44" stroke="#3a3a40" stroke-width="3"/>' +
      /* upstairs windows glowing (the big room up top) */
      [80, 120, 250, 290].map((x, i) => '<rect class="ks-glow' + (i % 2 ? " ks-g2" : "") + '" x="' + x + '" y="88" width="26" height="30" fill="#ffb3d6"/><path d="M' + (x + 13) + ' 88v30M' + x + ' 103h26" stroke="#1e1e22" stroke-width="2"/>').join("") +
      /* stone foundation */
      '<rect x="60" y="186" width="280" height="18" fill="#7d7468"/>' + Array.from({ length: 14 }, (_, i) => '<rect x="' + (62 + i * 20) + '" y="' + (188 + (i % 2) * 7) + '" width="17" height="7" rx="1" fill="#958b7d"/>').join("") +
      /* the huge castle-like wooden double doors, pointed arch, iron straps */
      '<path d="M168 204v-62q32 -30 64 0v62z" fill="#6b4226" stroke="#3f2614" stroke-width="3"/><path d="M200 116v88" stroke="#3f2614" stroke-width="3"/>' +
      [152, 170, 188].map(y => '<path d="M170 ' + y + 'h60" stroke="#2a2a2a" stroke-width="3"/>').join("") +
      '<circle cx="194" cy="176" r="2.5" fill="#c9a24a"/><circle cx="206" cy="176" r="2.5" fill="#c9a24a"/>' +
      /* outside stairs up the right side */
      '<path d="M300 204l40 -60" stroke="#55555c" stroke-width="4"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M' + (304 + i * 5.6) + ' ' + (198 - i * 8.6) + 'h14" stroke="#77777e" stroke-width="2.5"/>').join("") +
      '<path d="M300 186l40 -60" stroke="#77777e" stroke-width="1.5"/>' +
      
      
      '<rect x="0" y="204" width="400" height="56" fill="#2a2430"/>' + crowd +
      [40, 120, 300, 370].map((x, i) => '<rect class="ks-bob ks-b' + (1 + i % 3) + '" x="' + x + '" y="212" width="4" height="14" rx="2" fill="#140c18"/>').join("") +
      heart(354, 46, 9, PINK, "ks-heart"),
      sky("ks2", "#15102a", "#5a2a5e"));
  }

  /* 3. Her mom's studio: the booth window, mic + pop filter, console meters jumping, a beating heart on the screen, notes floating */
  function ksstudio() {
    const meters = Array.from({ length: 12 }, (_, i) => '<rect class="ks-m ks-m' + (1 + i % 3) + '" x="' + (40 + i * 12) + '" y="196" width="8" height="26" fill="' + (i % 4 === 3 ? PINK : SKY) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#241a2c"/>' +
      /* acoustic foam wall */
      Array.from({ length: 40 }, (_, i) => '<rect x="' + ((i % 10) * 40 + 2) + '" y="' + (Math.floor(i / 10) * 36 + 2) + '" width="36" height="32" rx="3" fill="' + (i % 2 ? "#33263e" : "#2d2137") + '"/>').join("") +
      /* booth window with the mic behind it */
      '<rect x="216" y="30" width="160" height="110" rx="6" fill="#120d18" stroke="#5a4a66" stroke-width="5"/>' +
      '<rect x="222" y="36" width="148" height="98" fill="' + PINK + '" opacity=".14"/>' +
      '<path d="M296 64v52" stroke="#9a9aa2" stroke-width="3"/><rect x="288" y="46" width="16" height="26" rx="8" fill="#c9ccd2"/><circle cx="272" cy="62" r="13" fill="none" stroke="#444" stroke-width="2"/>' +
      '<circle cx="272" cy="62" r="12" fill="#222" opacity=".5"/><path d="M296 116h-18M296 116h18" stroke="#9a9aa2" stroke-width="3"/>' +
      /* computer screen with a waveform and a beating heart */
      '<rect x="30" y="40" width="160" height="100" rx="5" fill="#0d0a12" stroke="#4a3a56" stroke-width="4"/>' +
      '<path d="M40 100' + Array.from({ length: 28 }, (_, i) => 'L' + (44 + i * 5) + ' ' + (100 + (i % 2 ? -1 : 1) * (4 + (i * 7) % 14))).join("") + '" fill="none" stroke="' + SKY + '" stroke-width="2"/>' +
      heart(110, 64, 10, PINK, "ks-heart") + '<path d="M110 140v12M90 152h40" stroke="#4a3a56" stroke-width="5"/>' +
      /* console */
      '<path d="M0 182h400v78H0z" fill="#3b3040"/><path d="M0 182h400" stroke="#5a4a66" stroke-width="4"/>' +
      '<rect x="32" y="190" width="160" height="38" rx="3" fill="#120d18"/>' + meters +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (206 + i * 13) + '" y="' + (196 + (i * 5) % 18) + '" width="8" height="12" rx="2" fill="#d8d4dc"/><path d="M' + (210 + i * 13) + ' 192v40" stroke="#1a141e" stroke-width="2"/>').join("") +
      '<rect x="206" y="236" width="180" height="4" fill="#1a141e"/>' +
      /* floating notes */
      ['ks-fl', 'ks-fl ks-fl2', 'ks-fl ks-fl3'].map((c, i) => '<g class="' + c + '"><circle cx="' + (330 + i * 14) + '" cy="' + (166 - i * 4) + '" r="4" fill="' + GOLD + '"/><path d="M' + (334 + i * 14) + ' ' + (166 - i * 4) + 'v-16" stroke="' + GOLD + '" stroke-width="2"/></g>').join(""),
      "");
  }

  /* 4. The Sounds Like ATL taping (WABE TV, drawn generic): stage, two cameras swinging, ON AIR light, one mic in a pink spotlight */
  function kstv() {
    const cam = (x, flip) => '<g class="ks-cam"><rect x="' + x + '" y="150" width="46" height="26" rx="4" fill="#2a2a30"/><rect x="' + (flip ? x - 14 : x + 46) + '" y="156" width="14" height="14" rx="2" fill="#444"/>' +
      '<circle cx="' + (flip ? x - 8 : x + 54) + '" cy="163" r="5" fill="' + SKY + '" opacity=".7"/><path d="M' + (x + 23) + ' 176v34M' + (x + 23) + ' 210l-16 22M' + (x + 23) + ' 210l16 22M' + (x + 23) + ' 210v24" stroke="#55555c" stroke-width="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#120e1c"/>' +
      /* lighting grid */
      '<path d="M0 22h400" stroke="#3a3446" stroke-width="5"/>' + [60, 130, 200, 270, 340].map((x, i) => '<rect x="' + (x - 8) + '" y="24" width="16" height="14" rx="3" fill="#2a2632"/><circle class="ks-glow' + (i % 2 ? " ks-g2" : "") + '" cx="' + x + '" cy="40" r="4" fill="' + (i % 2 ? SKY : GOLD) + '"/>').join("") +
      /* backdrop: Atlanta skyline in lights */
      '<rect x="40" y="60" width="320" height="110" fill="#1d1630"/>' +
      '<g fill="#2e2448"><rect x="70" y="110" width="26" height="60"/><rect x="104" y="92" width="22" height="78"/><rect x="134" y="120" width="30" height="50"/><rect x="236" y="100" width="28" height="70"/><rect x="272" y="116" width="24" height="54"/><rect x="304" y="96" width="20" height="74"/></g>' +
      '<rect x="182" y="78" width="36" height="92" fill="#3a2e3a"/><path d="M182 78l18 -20l18 20z" fill="none" stroke="' + GOLD + '" stroke-width="2"/><path class="ks-glow" d="M200 58v-12" stroke="' + GOLD + '" stroke-width="2"/>' +
      Array.from({ length: 30 }, (_, i) => '<circle class="' + (i % 5 ? "" : "ks-glow") + '" cx="' + (60 + (i * 47) % 290) + '" cy="' + (100 + (i * 23) % 66) + '" r="1.3" fill="#ffe9a8"/>').join("") +
      /* ON AIR */
      '<rect x="330" y="50" width="56" height="20" rx="3" fill="#3a0a10"/><rect class="ks-flk" x="332" y="52" width="52" height="16" rx="2" fill="#e8202e"/><text x="358" y="64" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">ON AIR</text>' +
      /* stage + spotlight + mic */
      '<path class="ks-glow" d="M200 40L150 210H250z" fill="' + PINK + '" opacity=".22"/>' +
      '<path d="M40 170h320l30 40H10z" fill="#2e2836"/><path d="M10 210h380v8H10z" fill="#1a1620"/>' +
      '<ellipse cx="200" cy="196" rx="50" ry="10" fill="' + PINK + '" opacity=".35"/>' +
      '<path d="M200 140v54M188 196h24" stroke="#c9ccd2" stroke-width="3"/><rect x="194" y="128" width="12" height="18" rx="6" fill="#c9ccd2"/>' +
      cam(34, false) + cam(318, true) +
      '<rect x="0" y="236" width="400" height="24" fill="#0c0a12"/>',
      "");
  }

  /* 5. North Ave NE and Glen Iris Dr NE: green signs, KODIE SHANE tagged, Ponce City Market's red-brick tower behind */
  function kscorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ks5)"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle class="' + (i % 4 ? "" : "ks-glow") + '" cx="' + ((i * 89) % 400) + '" cy="' + (8 + (i * 41) % 40) + '" r="1.1" fill="#fff" opacity=".7"/>').join("") +
      /* Ponce City Market: long red-brick block with the taller central tower and the water tank on top */
      '<rect x="40" y="72" width="300" height="70" fill="#8e3b2a"/>' +
      '<rect x="150" y="34" width="70" height="108" fill="#9a412e"/><rect x="164" y="10" width="42" height="24" fill="#6a2c20"/><rect x="170" y="2" width="30" height="10" rx="2" fill="#5a5a5e"/>' +
      Array.from({ length: 13 }, (_, c) => Array.from({ length: 4 }, (_, r) => '<rect x="' + (46 + c * 23) + '" y="' + (78 + r * 15) + '" width="14" height="9" fill="' + ((c + r) % 3 ? "#f6d58a" : "#5a2418") + '" opacity=".85"/>').join("")).join("") +
      Array.from({ length: 3 }, (_, c) => Array.from({ length: 2 }, (_, r) => '<rect x="' + (158 + c * 20) + '" y="' + (42 + r * 14) + '" width="13" height="8" fill="#f6d58a" opacity=".85"/>').join("")).join("") +
      /* brick wall with the tags */
      '<rect x="0" y="132" width="400" height="92" fill="#6e3a5a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#5c2f4b" stroke-width="1"/>').join("") +
      tag("SAILING TEAM", 18, 156, 17, SKY, -3) + tag("KODIE SHANE", 14, 198, 40, PINK, -6) + tag("DON BABY", 28, 218, 15, "#fff", -3) + tag("HEARTTHROB", 140, 218, 16, GOLD, -4) +
      heart(266, 212, 8, PINK, "ks-heart") +
      '<rect x="0" y="224" width="400" height="36" fill="#4f4c48"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="ks-car"><rect x="0" y="232" width="70" height="18" rx="5" fill="' + SKY + '"/><rect x="12" y="226" width="42" height="10" rx="3" fill="#2a3442"/><circle cx="14" cy="250" r="6" fill="#111"/><circle cx="56" cy="250" r="6" fill="#111"/></g>' +
      '<rect x="356" y="94" width="6" height="130" fill="#2f2f2f"/>' + sign(284, 96, 112, "North Ave NE") + sign(290, 122, 106, "Glen Iris Dr NE") +
      '<g class="ks-sp"><circle cx="254" cy="190" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="ks-sp ks-sp2"><circle cx="260" cy="184" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("ks5", "#1a1238", "#e0709a"));
  }

  window.SCENES = { ksstation: ksstation, ksmasq: ksmasq, ksstudio: ksstudio, kstv: kstv, kscorner: kscorner };
})();
