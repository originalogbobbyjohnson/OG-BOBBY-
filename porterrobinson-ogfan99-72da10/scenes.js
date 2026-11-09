/* porterrobinson scenes (Regions tab: The Carolinas; raised in Chapel Hill, NC). CSS classes prefixed pr- (the page's own anim-train slides the bus in). No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes prtw{0%,100%{opacity:.2}50%{opacity:1}}.pr-tw{animation:prtw 1.8s ease-in-out infinite}.pr-tw2{animation-delay:-.6s}.pr-tw3{animation-delay:-1.2s}' +
    '@keyframes prglow{0%,100%{opacity:.45}50%{opacity:1}}.pr-glow{animation:prglow 2.2s ease-in-out infinite}.pr-g2{animation-delay:-1.1s}' +
    '@keyframes prsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.pr-sway{transform-box:fill-box;transform-origin:50% 100%;animation:prsway 3s ease-in-out infinite}.pr-sw2{animation-delay:-1.5s}' +
    '@keyframes prspin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.pr-spin{transform-box:fill-box;transform-origin:50% 50%;animation:prspin 40s linear infinite}' +
    '@keyframes prbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.pr-bob{animation:prbob 1s ease-in-out infinite}.pr-bob2{animation-delay:-.5s}' +
    '@keyframes prshoot{0%{transform:translate(0,0);opacity:0}10%{opacity:1}40%{transform:translate(-140px,60px);opacity:0}100%{opacity:0}}.pr-shoot{animation:prshoot 5s ease-out infinite}' +
    '@keyframes prspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.pr-sp{animation:prspray 1.4s ease-out infinite}.pr-sp2{animation-delay:.45s}' +
    '@keyframes prleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-50px,190px) rotate(240deg)}}.pr-lf{transform-box:fill-box;animation:prleaf 7s linear infinite}.pr-lf2{animation-delay:-2.3s}.pr-lf3{animation-delay:-4.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 === 0 ? "pr-tw" : i % 3 === 1 ? "pr-tw pr-tw2" : "pr-tw pr-tw3") + '" cx="' + ((i * 137 + i * i * 7) % 400) + '" cy="' + (6 + (i * 71 + i * i * 3) % 110) + '" r="' + (i % 4 ? 0.9 : 1.5) + '" fill="#fff"/>'; return s; };
  const tree = (x, y, s, c, cls) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="' + (cls || "pr-sway") + '"><rect x="-3" y="-6" width="6" height="26" fill="#5a3e2a"/><circle cx="0" cy="-18" r="18" fill="' + c + '"/><circle cx="-12" cy="-8" r="12" fill="' + c + '"/><circle cx="12" cy="-8" r="12" fill="' + c + '"/></g></g>';
  const pine = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="pr-sway pr-sw2"><rect x="-2" y="-4" width="4" height="14" fill="#5a3e2a"/><path d="M0 -60l14 26h-8l12 20h-36l12 -20h-8z" fill="#2f5a34"/></g></g>';
  const CBLUE = "#4b9cd3", NAVY = "#13294b", PINK = "#ff8fc8", GREEN = "#9be37c";

  /* 1. Chapel Hill Transit's fare-free bus pulling up to the Morehead Planetarium stop on East Franklin St: brick sidewalk, big oaks, the stop sign with the D route bullet */
  function prstation() {
    const bus = '<g class="anim-train"><rect x="30" y="112" width="300" height="84" rx="10" fill="#f6f7f9" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (70 + i * 42) + '" y="124" width="34" height="32" rx="3" fill="#24323e"/>').join("") +
      '<rect x="36" y="124" width="26" height="62" rx="2" fill="#2a3a48"/><rect x="30" y="164" width="300" height="8" fill="' + CBLUE + '"/><rect x="30" y="174" width="300" height="3" fill="' + NAVY + '"/>' +
      '<rect x="40" y="114" width="80" height="9" rx="2" fill="#111"/><text x="80" y="122" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb300">D FRANKLIN</text>' +
      '<circle cx="80" cy="198" r="13" fill="#222"/><circle cx="80" cy="198" r="5" fill="#888"/><circle cx="280" cy="198" r="13" fill="#222"/><circle cx="280" cy="198" r="5" fill="#888"/><circle cx="36" cy="184" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pr1)"/>' +
      tree(40, 104, 1.6, "#4f8a3c") + tree(150, 98, 1.3, "#5a9a44", "pr-sway pr-sw2") + tree(330, 104, 1.7, "#4a8238") +
      '<rect x="190" y="60" width="90" height="56" fill="#a5523a"/><rect x="182" y="56" width="106" height="6" fill="#f2efe6"/>' + [200, 222, 244, 266].map(x => '<rect x="' + x + '" y="70" width="10" height="16" fill="#2c3440" stroke="#f2efe6" stroke-width="1.5"/>').join("") +
      '<path d="M210 56q25 -30 50 0z" fill="#6aa39a"/>' +
      '<rect x="0" y="196" width="400" height="20" fill="#a14a36"/>' + Array.from({ length: 40 }, (_, i) => '<path d="M' + (i * 10) + ' 196v20" stroke="#8a3e2c" stroke-width="1"/>').join("") +
      '<rect x="0" y="216" width="400" height="44" fill="#55585e"/><path d="M0 238h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="18 14"/>' +
      bus +
      '<rect x="356" y="96" width="5" height="120" fill="#3a3e46"/><rect x="336" y="80" width="46" height="40" rx="3" fill="#fff" stroke="' + NAVY + '" stroke-width="2"/><rect x="336" y="80" width="46" height="12" rx="2" fill="' + NAVY + '"/>' +
      '<text x="359" y="89" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">BUS STOP</text>' + badge(344, 106, "D", CBLUE) +
      '<rect x="40" y="18" width="260" height="30" rx="3" fill="#111"/><text x="54" y="38" ' + font + ' font-size="13" fill="#fff">Morehead Planetarium</text>' + badge(236, 33, "CHT", CBLUE),
      sky("pr1", "#7fbde8", "#dff0fb"));
  }

  /* 2. Woods Charter School out in the pines just south of Chapel Hill, where he was making tracks before he graduated: low brick-and-glass school, a sign out front, a laptop glowing in a window */
  function prschool() {
    return svg(
      '<rect width="400" height="260" fill="url(#pr2)"/>' +
      pine(20, 150, 1.4) + pine(64, 146, 1.1) + pine(340, 150, 1.5) + pine(384, 148, 1.2) + pine(300, 140, 0.9) +
      '<rect x="0" y="150" width="400" height="110" fill="#6f9a4a"/>' +
      '<rect x="80" y="86" width="240" height="74" fill="#9b4a34"/><rect x="72" y="80" width="256" height="8" fill="#4a4a4a"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (94 + i * 37) + '" y="98" width="26" height="26" fill="#9fc3dc" stroke="#e8e6e0" stroke-width="2"/>').join("") +
      '<rect class="pr-glow" x="207" y="104" width="12" height="8" fill="' + PINK + '" opacity=".8"/><rect x="205" y="112" width="16" height="2" fill="#555"/>' +
      '<rect x="180" y="130" width="40" height="30" fill="#9fc3dc" stroke="#e8e6e0" stroke-width="2"/><path d="M200 130v30" stroke="#e8e6e0" stroke-width="2"/><rect x="170" y="126" width="60" height="6" fill="#e8e6e0"/>' +
      '<path d="M184 160l-30 100h92l-30 -100z" fill="#c9c3b6"/>' +
      '<rect x="60" y="176" width="110" height="34" rx="3" fill="' + NAVY + '" stroke="#e8e6e0" stroke-width="2"/><text x="115" y="191" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">WOODS CHARTER</text><text x="115" y="204" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">SCHOOL</text>' +
      '<rect x="72" y="210" width="6" height="18" fill="#555"/><rect x="152" y="210" width="6" height="18" fill="#555"/>' +
      '<g class="pr-bob"><path d="M300 70q8 -6 16 0q8 -6 16 0" fill="none" stroke="#333" stroke-width="2"/></g>' +
      [280, 300, 320].map((x, i) => '<path class="pr-lf' + (i ? " pr-lf" + (i + 1) : "") + '" d="M' + x + ' 20q4 -4 8 0q-4 4 -8 0z" fill="#d9822b"/>').join(""),
      sky("pr2", "#9ccbe8", "#eaf5fb"));
  }

  /* 3. Morehead Planetarium on UNC's campus at dusk: red-brick Georgian front, white columns, the green copper dome, a sky full of stars wheeling overhead (Look at the Sky) */
  function prdome() {
    return svg(
      '<rect width="400" height="260" fill="url(#pr3)"/>' + '<g class="pr-spin">' + stars(60) + '</g>' +
      '<g class="pr-shoot"><path d="M340 20l-18 8" stroke="#fff" stroke-width="2" stroke-linecap="round"/></g>' +
      '<rect x="40" y="130" width="320" height="80" fill="#9b4a34"/><rect x="34" y="124" width="332" height="8" fill="#f2efe6"/>' +
      '<path d="M140 124h120v-26h-120z" fill="#f2efe6"/><path d="M134 100l66 -18l66 18z" fill="#f2efe6" stroke="#cfc8b8"/>' +
      [150, 172, 194, 216, 238].map(x => '<rect x="' + x + '" y="132" width="10" height="70" fill="#f7f4ec" stroke="#cfc8b8"/>').join("") +
      '<rect x="182" y="164" width="36" height="46" fill="#2c3440"/><rect class="pr-glow" x="186" y="168" width="28" height="18" fill="#ffd98a" opacity=".6"/>' +
      [60, 92, 280, 312].map(x => '<rect x="' + x + '" y="146" width="18" height="26" fill="#2c3440" stroke="#f2efe6" stroke-width="2"/><rect class="pr-glow pr-g2" x="' + (x + 2) + '" y="148" width="14" height="22" fill="#ffd98a" opacity=".45"/>').join("") +
      '<rect x="166" y="70" width="68" height="14" fill="#f2efe6"/><path d="M162 72q38 -64 76 0z" fill="#6aa39a" stroke="#4a7f76" stroke-width="2"/><path d="M182 56q18 -20 36 0" fill="none" stroke="#86bdb3" stroke-width="2"/>' +
      '<rect x="196" y="24" width="8" height="10" fill="#f2efe6"/><circle cx="200" cy="22" r="3" fill="#f2efe6"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#3a5a34"/><path d="M160 210l-40 50h160l-40 -50z" fill="#b9b2a2"/>' +
      tree(20, 200, 1.3, "#2f4f2a") + tree(380, 200, 1.4, "#2f4f2a", "pr-sway pr-sw2"),
      sky("pr3", "#0d1433", "#6a5a9a"));
  }

  /* 4. Cat's Cradle in Carrboro, the club where a teenage Porter caught a show: low dark-brick front, red door, the marquee lit up, the line out front */
  function prcradle() {
    return svg(
      '<rect width="400" height="260" fill="url(#pr4)"/>' + stars(18) +
      '<rect x="0" y="80" width="400" height="140" fill="#2b2626"/>' + Array.from({ length: 16 }, (_, i) => '<path d="M0 ' + (86 + i * 8) + 'h400" stroke="#1f1b1b" stroke-width="1"/>').join("") +
      '<rect x="0" y="74" width="400" height="8" fill="#141212"/>' +
      '<rect x="110" y="94" width="180" height="40" rx="3" fill="#111" stroke="' + PINK + '" stroke-width="2"/>' +
      Array.from({ length: 22 }, (_, i) => '<circle class="pr-tw' + (i % 2 ? " pr-tw2" : "") + '" cx="' + (116 + i * 8) + '" cy="98" r="1.6" fill="#ffe08a"/>').join("") +
      Array.from({ length: 22 }, (_, i) => '<circle class="pr-tw' + (i % 2 ? "" : " pr-tw3") + '" cx="' + (116 + i * 8) + '" cy="130" r="1.6" fill="#ffe08a"/>').join("") +
      '<text x="200" y="114" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">TONIGHT</text><text x="200" y="127" text-anchor="middle" ' + font + ' font-size="10" fill="' + GREEN + '">SOLD OUT</text>' +
      '<rect x="180" y="150" width="40" height="70" fill="#a8282e" stroke="#111" stroke-width="2"/><circle cx="212" cy="186" r="2" fill="#ddd"/>' +
      '<rect class="pr-glow" x="40" y="150" width="60" height="30" fill="' + CBLUE + '" opacity=".35"/><rect class="pr-glow pr-g2" x="300" y="150" width="60" height="30" fill="' + PINK + '" opacity=".35"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#4a4a4e"/>' +
      Array.from({ length: 8 }, (_, i) => '<g class="pr-bob' + (i % 2 ? " pr-bob2" : "") + '"><circle cx="' + (236 + i * 20) + '" cy="200" r="7" fill="#0c0b10"/><rect x="' + (228 + i * 20) + '" y="207" width="16" height="22" rx="5" fill="#0c0b10"/></g>').join("") +
      '<rect x="20" y="196" width="70" height="20" rx="3" fill="#111"/><text x="55" y="210" text-anchor="middle" ' + font + ' font-size="9" fill="#ffe08a">CARRBORO</text>',
      sky("pr4", "#0b0f24", "#2a1f44"));
  }

  /* 5. E Franklin St and S Columbia St: green signs, PORTER tagged big on the brick wall, the Old Well's white columns and dome behind under a Carolina-blue evening */
  function prcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#pr5)"/>' + stars(10) +
      tree(60, 120, 1.6, "#2f5a2a") + tree(330, 118, 1.5, "#2f5a2a", "pr-sway pr-sw2") +
      /* Old Well: round stepped base, eight white Doric columns, a ring entablature, a small dome */
      '<ellipse cx="200" cy="132" rx="58" ry="8" fill="#d9d4c8"/>' +
      [150, 165, 182, 200, 218, 235, 250].map(x => '<rect x="' + (x - 4) + '" y="70" width="8" height="60" fill="#fbfaf6" stroke="#cfc8b8"/>').join("") +
      '<rect x="138" y="62" width="124" height="10" fill="#fbfaf6" stroke="#cfc8b8"/><path d="M146 62q54 -44 108 0z" fill="#fbfaf6" stroke="#cfc8b8"/><path d="M196 42h8v-8h-8z" fill="#fbfaf6"/><circle cx="200" cy="33" r="2.5" fill="#fbfaf6"/>' +
      '<rect x="0" y="134" width="400" height="90" fill="#8a3e2c"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (142 + i * 8) + 'h400" stroke="#76321f" stroke-width="1"/>').join("") +
      tag("PORTER", 22, 196, 52, CBLUE, -6) + tag("SECRET SKY", 196, 194, 22, PINK, -4) + tag("NURTURE", 40, 216, 20, GREEN, -3) + tag("WORLDS", 210, 214, 18, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(296, 98, 104, "E Franklin St") + sign(298, 124, 100, "S Columbia St") +
      '<g class="pr-sp"><circle cx="160" cy="166" r="3" fill="' + CBLUE + '" opacity=".7"/></g><g class="pr-sp pr-sp2"><circle cx="166" cy="160" r="2" fill="' + CBLUE + '" opacity=".6"/></g>',
      sky("pr5", "#16234a", "#7fb6e0"));
  }

  window.SCENES = { prstation: prstation, prschool: prschool, prdome: prdome, prcradle: prcradle, prcorner: prcorner };
})();
