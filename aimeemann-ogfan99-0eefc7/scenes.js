/* aimeemann scenes (Regions tab: Boston + New England; Back Bay by Berklee, where Aimee Mann came to study bass in 1978 and started 'Til Tuesday). CSS classes prefixed am- (the page's own anim-train is kept on the trolley).
   1 Hynes Convention Center on the Green Line (B, C, D), under Massachusetts Ave at Newbury St: underground platform, black sign with the green GL badge and B/C/D circles, a two-car Green Line trolley sliding in.
   2 Berklee College of Music, 1140 Boylston St at Mass Ave: the tall modern front with its long window bands, a student with a bass case crossing, notes drifting out.
   3 Newbury St, Back Bay: brownstone row with stoops and bay windows, the below-street record and comics shop where she worked in the early 80s, snow falling.
   4 The 1983 Rock 'n' Roll Rumble, the Boston band contest 'Til Tuesday won six months after forming: small club stage, a bass player and band in dark silhouette, the winner's cup glinting, lights sweeping.
   5 Massachusetts Ave and Boylston St by Berklee: green signs, AIMEE MANN tagged on the brick, the great Christian Science dome on the skyline behind. */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes amflick{0%,100%{opacity:1}44%{opacity:.8}50%{opacity:.3}56%{opacity:.95}}.am-flk{animation:amflick 2.4s infinite}.am-flk2{animation-delay:-1.1s}' +
    '@keyframes ambob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.am-bob{animation:ambob .9s ease-in-out infinite}.am-bob2{animation-delay:-.45s}' +
    '@keyframes amwalk{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.am-walk{animation:amwalk 12s linear infinite}.am-walk2{animation-delay:-6s}' +
    '@keyframes amsnow{0%{transform:translate(0,-20px);opacity:0}10%{opacity:1}100%{transform:translate(-14px,250px);opacity:.2}}.am-snow{animation:amsnow 6s linear infinite}.am-snow2{animation-delay:-2s}.am-snow3{animation-delay:-4s}' +
    '@keyframes amnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(40px,-80px);opacity:0}}.am-note{animation:amnote 3.4s ease-out infinite}.am-note2{animation-delay:-1.2s}.am-note3{animation-delay:-2.3s}' +
    '@keyframes ambeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.am-beam{transform-box:fill-box;transform-origin:50% 0%;animation:ambeam 3.2s ease-in-out infinite}.am-beam2{animation-delay:-1.6s}' +
    '@keyframes amglint{0%,100%{opacity:.2}50%{opacity:1}}.am-glint{animation:amglint 1.4s ease-in-out infinite}' +
    '@keyframes amcar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.am-car{animation:amcar 8s linear infinite}.am-car2{animation-delay:-4s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const brick = (x, y, w, h, c, m) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let r = y + 8; r < y + h; r += 8) { s += '<path d="M' + x + ' ' + r + 'h' + w + '" stroke="' + m + '" stroke-width=".8" opacity=".6"/>'; for (let q = x + ((r / 8) % 2 ? 9 : 0); q < x + w; q += 18) s += '<path d="M' + q + ' ' + (r - 8) + 'v8" stroke="' + m + '" stroke-width=".7" opacity=".5"/>'; } return s; };
  const pill = (x, y, color, label) => '<rect x="' + x + '" y="' + y + '" width="' + (label.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (label.length * 8 + 14) / 2) + '" y="' + (y + 13) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">' + label + '</text>';
  const circ = (x, y, color, l) => '<circle cx="' + x + '" cy="' + y + '" r="9" fill="' + color + '"/><text x="' + x + '" y="' + (y + 4) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">' + l + '</text>';
  const walker = (x, y, c, bass) => '<g><circle cx="' + x + '" cy="' + (y - 30) + '" r="5.5" fill="' + c + '"/><path d="M' + (x - 6) + ' ' + (y - 24) + 'h12l2 16h-16z" fill="' + c + '"/><path d="M' + (x - 5) + ' ' + (y - 8) + 'l-3 8h4l4-7 4 7h4l-3-8z" fill="' + c + '"/>' +
    (bass ? '<path d="M' + (x + 4) + ' ' + (y - 40) + 'l10 2-4 40-8-2z" fill="' + bass + '" stroke="#111" stroke-width=".8"/>' : '') + '</g>';
  const GL = "#00843d", ICE = "#7fd1e8", PINK = "#e94f6f", GOLD = "#f2d16b";

  /* 1. Hynes Convention Center, Green Line B/C/D */
  function amhynes() {
    const car = (x) =>
      '<rect x="' + x + '" y="114" width="166" height="68" rx="6" fill="#dcded8" stroke="#5c615a" stroke-width="1.5"/>' +
      '<rect x="' + x + '" y="158" width="166" height="11" fill="' + GL + '"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + 9 + i * 31) + '" y="124" width="25" height="24" rx="3" fill="#1d2a2f"/>').join("") +
      '<rect x="' + (x + 70) + '" y="124" width="24" height="46" fill="#2a3a3f" stroke="#5c615a"/>' +
      '<path d="M' + (x + 62) + ' 114l10-14h20l10 14" fill="none" stroke="#333" stroke-width="2"/>' +
      '<circle cx="' + (x + 24) + '" cy="184" r="7" fill="#222"/><circle cx="' + (x + 142) + '" cy="184" r="7" fill="#222"/>';
    const train = '<g class="anim-train">' + car(30) + car(200) +
      '<rect x="352" y="128" width="10" height="16" rx="2" fill="#1d2a2f"/><rect x="350" y="150" width="10" height="6" rx="2" fill="#fff6b0"/>' +
      '<rect x="294" y="150" width="56" height="7" rx="1" fill="#111"/><text x="322" y="155.6" text-anchor="middle" ' + F + ' font-weight="700" font-size="5" fill="#ffb000">B BOSTON COLLEGE</text>' +
      '</g>';
    let panels = "";
    for (let x = 0; x < 400; x += 50) panels += '<rect x="' + (x + 2) + '" y="24" width="46" height="120" fill="#b9b3a6"/><path d="M' + (x + 2) + ' 84h46" stroke="#a39d90" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a2a28"/>' +
      '<rect x="0" y="0" width="400" height="24" fill="#1a1a19"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (24 + i * 80) + '" y="9" width="46" height="5" rx="2" fill="#fff8d8" class="am-flk' + (i % 2 ? ' am-flk2' : '') + '"/>').join("") +
      '<rect x="0" y="24" width="400" height="126" fill="#a39d90"/>' + panels +
      '<rect x="0" y="100" width="400" height="5" fill="' + GL + '"/>' +
      '<rect x="40" y="36" width="320" height="44" rx="3" fill="#111"/>' +
      pill(50, 49, GL, "GL") +
      '<text x="182" y="56" text-anchor="middle" ' + F + ' font-weight="700" font-size="15" fill="#fff" letter-spacing="1">HYNES</text>' +
      '<text x="182" y="71" text-anchor="middle" ' + F + ' font-size="9" fill="#d6dbe0" letter-spacing="1">CONVENTION CENTER</text>' +
      circ(278, 58, GL, "B") + circ(300, 58, GL, "C") + circ(322, 58, GL, "D") +
      '<rect x="0" y="150" width="400" height="40" fill="#151513"/><path d="M0 186h400M0 192h400" stroke="#7a7a72" stroke-width="2"/>' +
      train +
      '<rect x="0" y="196" width="400" height="64" fill="#8d8a80"/><rect x="0" y="196" width="400" height="8" fill="#e6c832"/>' +
      '<rect x="44" y="214" width="112" height="26" rx="2" fill="#111"/><text x="100" y="231" text-anchor="middle" ' + F + ' font-weight="700" font-size="8.5" fill="#fff">MASS AVE · NEWBURY ↑</text>' +
      '<g class="am-walk">' + walker(0, 256, "#20242a", PINK) + '</g>'
    );
  }

  /* 2. Berklee College of Music, 1140 Boylston St */
  function amberklee() {
    let bands = "";
    for (let y = 40; y < 180; y += 22) bands += '<rect x="96" y="' + y + '" width="208" height="12" fill="#2d4a5e"/><rect x="96" y="' + (y + 12) + '" width="208" height="10" fill="#d9d4c8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#amsk2)"/>' +
      '<rect x="0" y="80" width="96" height="120" fill="#8a5a44"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (10 + (i % 3) * 28) + '" y="' + (96 + Math.floor(i / 3) * 40) + '" width="16" height="24" fill="#f2e6c8" opacity=".55"/>').join("") +
      '<rect x="304" y="60" width="96" height="140" fill="#b9a68e"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (314 + (i % 3) * 28) + '" y="' + (76 + Math.floor(i / 3) * 44) + '" width="16" height="26" fill="#1d2a33"/>').join("") +
      '<rect x="96" y="30" width="208" height="170" fill="#d9d4c8"/>' + bands +
      '<rect x="96" y="26" width="208" height="6" fill="#bfb8aa"/>' +
      '<rect x="150" y="164" width="100" height="36" fill="#1d2a33"/><path d="M200 164v36" stroke="#8a8a8a"/>' +
      '<rect x="120" y="150" width="160" height="12" fill="#222"/><text x="200" y="159" text-anchor="middle" ' + F + ' font-weight="700" font-size="7.5" fill="#fff" letter-spacing="1.5">BERKLEE COLLEGE OF MUSIC</text>' +
      '<g fill="' + GOLD + '"><text x="230" y="60" ' + F + ' font-size="16" class="am-note">♪</text><text x="160" y="80" ' + F + ' font-size="14" class="am-note am-note2">♫</text><text x="260" y="110" ' + F + ' font-size="13" class="am-note am-note3">♪</text></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#55575c"/><rect x="0" y="200" width="400" height="6" fill="#a5a5a0"/>' +
      '<rect x="20" y="186" width="70" height="14" rx="2" fill="#0f6b3b"/><text x="55" y="196" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#fff">1140 BOYLSTON</text>' +
      '<g class="am-walk">' + walker(0, 236, "#1b1e24", PINK) + '</g><g class="am-walk am-walk2">' + walker(0, 240, "#3a2a2a", "") + '</g>',
      sky("amsk2", "#9cc4e0", "#e6eef2")
    );
  }

  /* 3. Newbury St, Back Bay: brownstones and the record shop below the sidewalk */
  function amnewbury() {
    const house = (x, c) =>
      '<rect x="' + x + '" y="40" width="96" height="140" fill="' + c + '"/>' +
      '<path d="M' + (x + 8) + ' 60h40v50h-40z" fill="' + c + '" stroke="#3a2418" stroke-width="2"/>' +
      [0, 1].map(r => '<rect x="' + (x + 14) + '" y="' + (66 + r * 24) + '" width="10" height="16" fill="#26323a"/><rect x="' + (x + 30) + '" y="' + (66 + r * 24) + '" width="10" height="16" fill="#26323a"/>').join("") +
      '<rect x="' + (x + 60) + '" y="64" width="18" height="24" fill="#26323a"/><rect x="' + (x + 60) + '" y="98" width="18" height="24" fill="#26323a"/>' +
      '<path d="M' + x + ' 40h96" stroke="#3a2418" stroke-width="4"/>' +
      '<rect x="' + (x + 58) + '" y="128" width="22" height="34" fill="#2a1a12"/>' +
      '<path d="M' + (x + 54) + ' 180l6-18h18l6 18z" fill="#7b5a48"/>';
    let snow = "";
    for (let i = 0; i < 26; i++) snow += '<circle cx="' + ((i * 61) % 400 + 6) + '" cy="' + ((i * 37) % 120) + '" r="' + (i % 3 ? 1.6 : 2.4) + '" fill="#fff" class="am-snow' + (i % 3 ? (i % 3 === 1 ? ' am-snow2' : ' am-snow3') : '') + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#amsk3)"/>' +
      house(4, "#7a4a36") + house(102, "#6c3f2e") + house(200, "#83523c") + house(298, "#744532") +
      /* the shop below the sidewalk */
      '<rect x="110" y="180" width="180" height="34" fill="#141418"/><rect x="114" y="186" width="172" height="24" fill="#2b3a52"/>' +
      '<rect x="120" y="190" width="18" height="18" fill="' + PINK + '"/><rect x="142" y="190" width="18" height="18" fill="' + ICE + '"/><rect x="164" y="190" width="18" height="18" fill="' + GOLD + '"/><circle cx="216" cy="199" r="9" fill="#111"/><circle cx="216" cy="199" r="2" fill="' + PINK + '"/><rect x="232" y="190" width="18" height="18" fill="#8a6ad8"/><rect x="254" y="190" width="18" height="18" fill="' + ICE + '"/>' +
      '<rect x="138" y="168" width="124" height="14" rx="2" fill="#111"/><text x="200" y="178.5" text-anchor="middle" ' + A + ' font-size="9.5" fill="' + ICE + '" letter-spacing="2" class="am-flk">RECORDS · COMICS</text>' +
      '<rect x="0" y="214" width="400" height="46" fill="#55575c"/><rect x="0" y="212" width="400" height="5" fill="#d9dadc"/>' +
      '<rect x="300" y="222" width="80" height="16" rx="2" fill="#0f6b3b"/><text x="340" y="234" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#fff">NEWBURY ST</text>' +
      '<g class="am-walk">' + walker(0, 252, "#1b1e24", "") + '</g>' + snow,
      sky("amsk3", "#5a6f8a", "#b9c6d4")
    );
  }

  /* 4. The Rock 'n' Roll Rumble, '83: the stage the night 'Til Tuesday won */
  function amrumble() {
    const player = (x, y, guitar, cls) => '<g class="' + cls + '"><circle cx="' + x + '" cy="' + (y - 34) + '" r="6" fill="#0b0b0f"/><path d="M' + (x - 7) + ' ' + (y - 27) + 'h14l3 20h-20z" fill="#0b0b0f"/><path d="M' + (x - 6) + ' ' + (y - 7) + 'l-2 14h5l3-12 3 12h5l-2-14z" fill="#0b0b0f"/>' +
      (guitar ? '<path d="M' + (x - 14) + ' ' + (y - 8) + 'l30-16" stroke="#0b0b0f" stroke-width="3"/><ellipse cx="' + (x - 10) + '" cy="' + (y - 10) + '" rx="7" ry="5" fill="' + guitar + '"/>' : '') + '</g>';
    return svg(
      '<rect width="400" height="260" fill="#110c18"/>' +
      '<rect x="0" y="0" width="400" height="18" fill="#08060c"/><path d="M0 18h400" stroke="#3a3a3a" stroke-width="4"/>' +
      '<g class="am-beam"><path d="M110 18l-56 156h88z" fill="' + PINK + '" opacity=".2"/></g>' +
      '<g class="am-beam am-beam2"><path d="M290 18l-44 156h88z" fill="' + ICE + '" opacity=".18"/></g>' +
      '<rect x="80" y="28" width="240" height="32" rx="3" fill="#1c1426" stroke="' + PINK + '" stroke-width="2"/>' +
      '<text x="200" y="51" text-anchor="middle" ' + A + ' font-size="17" fill="' + ICE + '" letter-spacing="2" class="am-flk">ROCK \'N\' ROLL RUMBLE \'83</text>' +
      '<rect x="30" y="150" width="340" height="50" fill="#2b1f2e"/><rect x="30" y="150" width="340" height="5" fill="#4a3a4e"/>' +
      '<rect x="44" y="112" width="30" height="38" fill="#141414" stroke="#3a3a3a"/><circle cx="59" cy="124" r="7" fill="#262626"/><circle cx="59" cy="140" r="7" fill="#262626"/>' +
      '<rect x="326" y="112" width="30" height="38" fill="#141414" stroke="#3a3a3a"/><circle cx="341" cy="124" r="7" fill="#262626"/><circle cx="341" cy="140" r="7" fill="#262626"/>' +
      '<ellipse cx="270" cy="140" rx="16" ry="7" fill="#ddd" opacity=".9"/><rect x="258" y="128" width="24" height="12" fill="#222"/><ellipse cx="248" cy="126" rx="8" ry="3" fill="' + GOLD + '"/><path d="M248 126v22" stroke="#999"/>' +
      player(140, 150, PINK, "am-bob") + '<path d="M140 116v-14" stroke="#555" stroke-width="2"/><circle cx="140" cy="100" r="3" fill="#555"/>' +
      player(196, 150, ICE, "am-bob am-bob2") + player(304, 150, "", "am-bob") + '<rect x="290" y="126" width="30" height="5" fill="#222"/>' +
      /* the winner's cup on the stage edge */
      '<g><path d="M188 176h24l-3 8h-18z" fill="' + GOLD + '"/><path d="M186 160h28q0 16-14 16t-14-16z" fill="' + GOLD + '"/><path d="M186 162q-8 0-6 6t8 4M214 162q8 0 6 6t-8 4" fill="none" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<path d="M196 164l3 3" stroke="#fff" stroke-width="2" class="am-glint"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#0c0a10"/>' +
      Array.from({ length: 8 }, (_, i) => '<g class="am-bob' + (i % 2 ? ' am-bob2' : '') + '"><circle cx="' + (24 + i * 50) + '" cy="226" r="9" fill="#000"/><rect x="' + (14 + i * 50) + '" y="234" width="20" height="30" rx="6" fill="#000"/></g>').join("")
    );
  }

  /* 5. Mass Ave and Boylston St, the Christian Science dome behind */
  function amcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#amsk5)"/>' +
      /* the dome: drum, ribbed dome, lantern */
      '<rect x="168" y="70" width="104" height="40" fill="#d9cdb4"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (176 + i * 16) + '" y="78" width="7" height="24" rx="3" fill="#7a6e5c"/>').join("") +
      '<path d="M164 72q56-70 112 0z" fill="#c8bba2"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M' + (180 + i * 20) + ' 72Q' + (200 + i * 10) + ' 46 220 38" fill="none" stroke="#a89c84" stroke-width="1.5"/>').join("") +
      '<rect x="213" y="20" width="14" height="18" fill="#d9cdb4"/><rect x="216" y="24" width="3" height="8" fill="#7a6e5c"/><rect x="221" y="24" width="3" height="8" fill="#7a6e5c"/><path d="M211 21l9-8 9 8z" fill="#a89c84"/>' +
      '<rect x="120" y="108" width="200" height="12" fill="#cbbfa6"/>' +
      brick(0, 96, 250, 110, "#8a4b35", "#4f281b") +
      tag("'TIL TUESDAY", 22, 124, 14, ICE, -3) +
      tag("AIMEE", 34, 162, 38, PINK, -6) + tag("MANN", 92, 198, 38, "#f4f1e8", -4) +
      '<rect x="250" y="130" width="150" height="76" fill="#3c4148"/>' + Array.from({ length: 3 }, (_, i) => '<rect x="' + (262 + i * 46) + '" y="142" width="32" height="26" fill="#e9c46a" opacity=".6"/>').join("") +
      '<rect x="0" y="206" width="400" height="54" fill="#45474b"/><rect x="0" y="204" width="400" height="5" fill="#9a9a96"/>' +
      '<path d="M0 236h400" stroke="#e6c832" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="am-car"><rect x="0" y="222" width="70" height="20" rx="6" fill="#2f6b4a"/><rect x="12" y="214" width="40" height="12" rx="4" fill="#1b3d2a"/><circle cx="16" cy="244" r="6" fill="#111"/><circle cx="56" cy="244" r="6" fill="#111"/></g>' +
      '<g class="am-car am-car2"><rect x="0" y="222" width="64" height="18" rx="6" fill="#c7c9cc"/><rect x="10" y="214" width="36" height="12" rx="4" fill="#4a4e54"/><circle cx="14" cy="242" r="6" fill="#111"/><circle cx="52" cy="242" r="6" fill="#111"/></g>' +
      '<rect x="318" y="96" width="5" height="112" fill="#5a5f63"/>' +
      '<rect x="262" y="96" width="120" height="26" rx="2" fill="#0f6b3b" stroke="#fff" stroke-width="1.2"/><text x="322" y="107" text-anchor="middle" ' + F + ' font-weight="700" font-size="8.5" fill="#fff">MASSACHUSETTS</text><text x="322" y="118" text-anchor="middle" ' + F + ' font-weight="700" font-size="8.5" fill="#fff">AVE</text>' +
      '<rect x="270" y="126" width="104" height="18" rx="2" fill="#0f6b3b" stroke="#fff" stroke-width="1.2"/><text x="322" y="139" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#fff">BOYLSTON ST</text>',
      sky("amsk5", "#3d4f7a", "#e7a3a8")
    );
  }

  window.SCENES = { amhynes, amberklee, amnewbury, amrumble, amcorner };
})();
