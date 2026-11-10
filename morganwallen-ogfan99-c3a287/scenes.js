/* morganwallen scenes (Regions: Memphis + Tennessee / Genres: country; Sneedville + Knox County, East Tennessee). CSS classes prefixed mwn- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mwnglow{0%,100%{opacity:.35}50%{opacity:1}}.mwn-glow{animation:mwnglow 2.2s ease-in-out infinite}.mwn-g2{animation-delay:-1.1s}' +
    '@keyframes mwncloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.mwn-cl{animation:mwncloud 14s ease-in-out infinite alternate}' +
    '@keyframes mwnspin{0%,100%{opacity:.75}50%{opacity:1}}.mwn-shine{animation:mwnspin 1.6s ease-in-out infinite}' +
    '@keyframes mwnwave{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.mwn-wave{animation:mwnwave .9s ease-in-out infinite}.mwn-w2{animation-delay:-.45s}' +
    '@keyframes mwnflow{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.mwn-flow{animation:mwnflow 4s linear infinite}' +
    '@keyframes mwnsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.mwn-sw{transform-box:fill-box;transform-origin:0% 0%;animation:mwnsway 2.4s ease-in-out infinite}' +
    '@keyframes mwnspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mwn-sp{animation:mwnspray 1.4s ease-out infinite}.mwn-sp2{animation-delay:.45s}' +
    '@keyframes mwntwk{0%,100%{opacity:.2}50%{opacity:1}}.mwn-tw{animation:mwntwk 1.8s ease-in-out infinite}.mwn-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const bricks = (x, y, w, h, base, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 6; yy < y + h; yy += 6) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".7" opacity=".55"/>'; return s; };
  const pine = (x, base, h, c) => '<rect x="' + (x - 2) + '" y="' + (base - 8) + '" width="4" height="8" fill="#4a3322"/><path d="M' + x + ' ' + (base - h) + 'l' + (h * 0.3) + ' ' + (h * 0.92) + 'h-' + (h * 0.6) + 'z" fill="' + (c || "#2c5230") + '"/>';
  const star = (x, y, r, c, cls) => { let p = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; p += (i ? "L" : "M") + (x + rr * Math.cos(a)).toFixed(1) + " " + (y + rr * Math.sin(a)).toFixed(1); } return '<path d="' + p + 'z" fill="' + c + '" class="' + (cls || "") + '"/>'; };
  const ridge = (y, c, amp) => '<path d="M0 ' + y + 'q50 -' + amp + ' 100 -' + (amp / 2) + 't100 -' + (amp / 3) + 't100 ' + (amp / 4) + 't100 -' + (amp / 3) + 'v' + (260 - y + amp) + 'h-400z" fill="' + c + '"/>';
  const ORANGE = "#ff8200", GOLD = "#e8b84a", DENIM = "#5a7fa8", CREAM = "#f3e9d2";

  /* 1. Knoxville Station on Church Ave: the white canopy roof, a city bus pulling into its bay, the black station sign, the hills beyond */
  function mwnstation() {
    const bus = '<rect x="0" y="146" width="170" height="56" rx="8" fill="#f4f4f2" stroke="#7a7e84" stroke-width="1.5"/><rect x="0" y="182" width="170" height="7" fill="' + DENIM + '"/><rect x="0" y="189" width="170" height="4" fill="' + ORANGE + '"/>' +
      '<rect x="6" y="150" width="30" height="26" rx="3" fill="#2a3a4a"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (44 + i * 24) + '" y="152" width="18" height="20" rx="2" fill="#2a3a4a"/>').join("") +
      '<rect x="8" y="140" width="30" height="8" rx="2" fill="#111"/><text x="23" y="146.5" text-anchor="middle" ' + font + ' font-size="6" fill="' + ORANGE + '">KAT</text>' +
      '<circle cx="2" cy="194" r="3" fill="#fff6c0" class="mwn-glow"/><circle cx="34" cy="204" r="8" fill="#222"/><circle cx="140" cy="204" r="8" fill="#222"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mwn1)"/>' +
      '<g class="mwn-cl"><ellipse cx="80" cy="30" rx="36" ry="8" fill="#fff" opacity=".6"/><ellipse cx="290" cy="20" rx="40" ry="8" fill="#fff" opacity=".5"/></g>' +
      ridge(118, "#5a7a9a", 30) + ridge(132, "#3f6a4a", 22) +
      /* the white wave canopy on its columns */
      '<path d="M150 90q60 -22 120 0t120 0v12q-60 -18 -120 0t-120 0z" fill="#f2f4f6" stroke="#9aa0a8" stroke-width="1.5"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (166 + i * 52) + '" y="100" width="6" height="56" fill="#9aa0a8"/>').join("") +
      bricks(176, 118, 200, 38, "#b0644a", "#7a3a2a") + '<rect x="196" y="126" width="160" height="22" fill="#2a3a4a" class="mwn-glow mwn-g2"/>' +
      /* black station sign */
      '<rect x="40" y="64" width="4" height="66" fill="#333"/><rect x="134" y="64" width="4" height="66" fill="#333"/><rect x="18" y="40" width="142" height="36" rx="2" fill="#111"/><path d="M18 46h142" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="89" y="62" text-anchor="middle" ' + font + ' font-size="11.5" fill="#fff">KNOXVILLE STATION</text>' +
      '<rect x="72" y="65" width="34" height="9" rx="2" fill="' + DENIM + '"/><text x="89" y="72" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">KAT</text>' +
      '<rect x="0" y="156" width="400" height="6" fill="#d8d0c0"/><rect x="0" y="210" width="400" height="50" fill="#55524c"/><path d="M0 232h400" stroke="#e8d070" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="anim-train"><g transform="translate(110 4)">' + bus + '</g></g>' +
      '<rect x="0" y="206" width="400" height="5" fill="#cfc8b8"/>',
      sky("mwn1", "#6aaee0", "#e0f0f8"));
  }

  /* 2. The Sunsphere in World's Fair Park, Knoxville: the gold glass ball on its steel truss tower, the lawn and the fountain */
  function mwnsunsphere() {
    let truss = "";
    for (let i = 0; i < 10; i++) truss += '<path d="M188 ' + (110 + i * 10) + 'l24 10M212 ' + (110 + i * 10) + 'l-24 10" stroke="#5a6a7a" stroke-width="1.4"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mwn2)"/>' +
      '<g class="mwn-cl"><ellipse cx="70" cy="40" rx="34" ry="8" fill="#fff" opacity=".55"/><ellipse cx="330" cy="30" rx="40" ry="8" fill="#fff" opacity=".5"/></g>' +
      bricks(0, 150, 110, 60, "#9a5a42", "#6a3a2a") + bricks(300, 140, 100, 70, "#b8b0a0", "#8a8478") +
      '<path d="M186 110h28v100h-28z" fill="none" stroke="#4a5a6a" stroke-width="3"/>' + truss +
      '<path d="M200 60v52" stroke="#4a5a6a" stroke-width="5"/>' +
      '<circle cx="200" cy="56" r="34" fill="url(#mwn2g)" stroke="#8a6a1a" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (168 + i * 0) + ' ' + (38 + i * 9) + 'h64" stroke="#a8842a" stroke-width="1" opacity=".7" transform="translate(0 0)"/>').join("") +
      '<path d="M200 22v68M184 26q-12 30 0 60M216 26q12 30 0 60" stroke="#a8842a" stroke-width="1" fill="none" opacity=".7"/>' +
      '<ellipse cx="188" cy="42" rx="9" ry="6" fill="#fff6c8" class="mwn-shine"/>' +
      '<rect x="0" y="208" width="400" height="52" fill="#5a9a4a"/><ellipse cx="300" cy="230" rx="60" ry="10" fill="#7ab8d8"/>' +
      '<g class="mwn-wave"><path d="M290 228q10 -24 20 0" stroke="#e0f4ff" stroke-width="3" fill="none"/></g><g class="mwn-wave mwn-w2"><path d="M270 230q6 -14 12 0M318 230q6 -14 12 0" stroke="#e0f4ff" stroke-width="2" fill="none"/></g>' +
      '<path d="M0 246h400" stroke="#d8d0c0" stroke-width="6"/>',
      sky("mwn2", "#4a9ad8", "#cfe8f4") + '<radialGradient id="mwn2g" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#ffe9a0"/><stop offset=".6" stop-color="#e8b84a"/><stop offset="1" stop-color="#a8781a"/></radialGradient>');
  }

  /* 3. Neyland Stadium on a fall Saturday: orange-and-white checkerboard end zone, the bowl full, light towers, waving fans */
  function mwnneyland() {
    let checks = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 20; c++) checks += '<rect x="' + (c * 20) + '" y="' + (204 + r * 12) + '" width="20" height="12" fill="' + ((r + c) % 2 ? "#fff" : ORANGE) + '"/>';
    let crowd = "";
    for (let row = 0; row < 5; row++) for (let i = 0; i < 34; i++) crowd += '<circle cx="' + (6 + i * 12 + (row % 2) * 6) + '" cy="' + (112 + row * 14) + '" r="4.5" fill="' + ((i + row) % 3 ? ORANGE : "#fff") + '" class="' + (i % 5 === 0 ? "mwn-wave" + (row % 2 ? " mwn-w2" : "") : "") + '"/>';
    const light = (x) => '<rect x="' + (x - 2) + '" y="40" width="4" height="64" fill="#7a7e84"/><rect x="' + (x - 18) + '" y="28" width="36" height="16" fill="#3a3e44"/>' + Array.from({ length: 4 }, (_, i) => '<circle cx="' + (x - 12 + i * 8) + '" cy="36" r="3" fill="#fffbe0" class="mwn-glow"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mwn3)"/>' +
      light(40) + light(360) +
      '<path d="M0 104h400v96h-400z" fill="#4a4e54"/>' + crowd +
      '<rect x="0" y="182" width="400" height="22" fill="#6a6e74"/><text x="200" y="198" text-anchor="middle" ' + font + ' font-size="13" fill="#fff" letter-spacing="3">NEYLAND STADIUM</text>' +
      checks + '<rect x="0" y="240" width="400" height="20" fill="#3a8a3a"/><path d="M0 240h400" stroke="#fff" stroke-width="2"/>',
      sky("mwn3", "#2a3a6a", "#f0a060"));
  }

  /* 4. Sneedville, Hancock County: the red-brick courthouse on Main St, Clinch Mountain behind, the Clinch River rolling by, an old pickup with a FOR SALE sign */
  function mwnsneed() {
    let pines = "";
    for (let i = 0; i < 9; i++) pines += pine(14 + i * 46, 150, 30 + (i * 7) % 12, i % 2 ? "#2c5230" : "#3a6438");
    return svg(
      '<rect width="400" height="260" fill="url(#mwn4)"/>' +
      ridge(92, "#6a7aa0", 34) + ridge(116, "#3f6a4a", 26) + pines +
      /* courthouse */
      bricks(140, 92, 120, 66, "#a8452a", "#6e2a1c") + '<path d="M134 92l66 -26l66 26z" fill="#e8e0d0" stroke="#a89878"/><rect x="186" y="44" width="28" height="22" fill="' + CREAM + '"/><path d="M182 44l18 -14l18 14z" fill="#5a6a7a"/>' +
      '<circle cx="200" cy="55" r="7" fill="#fff" stroke="#333"/><path d="M200 55v-5M200 55h4" stroke="#222" stroke-width="1.2"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (156 + i * 26) + '" y="104" width="12" height="40" fill="#e8e0d0"/>').join("") +
      '<rect x="190" y="130" width="20" height="28" fill="#3a2016"/>' +
      /* river */
      '<rect x="0" y="158" width="400" height="34" fill="#4a7a9a"/><g class="mwn-flow">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (166 + (i % 3) * 8) + 'h18" stroke="#cfe6f4" stroke-width="2" opacity=".7"/>').join("") + '</g>' +
      '<rect x="0" y="192" width="400" height="68" fill="#7a8a4a"/><path d="M0 222h400" stroke="#9a8a6a" stroke-width="18"/>' +
      /* pickup with a for sale sign */
      '<path d="M60 214v-22h70l18 -18h44l14 18h16v22z" fill="#9a2a2a" stroke="#4a1010" stroke-width="2"/><path d="M152 176h36l10 14h-46z" fill="#2a3a4a"/><circle cx="96" cy="216" r="11" fill="#222"/><circle cx="196" cy="216" r="11" fill="#222"/><circle cx="96" cy="216" r="4" fill="#aaa"/><circle cx="196" cy="216" r="4" fill="#aaa"/>' +
      '<rect x="156" y="178" width="30" height="10" fill="#fff"/><text x="171" y="186" text-anchor="middle" ' + font + ' font-size="6" fill="#c8102e">FOR SALE</text>',
      sky("mwn4", "#7ab8e0", "#f4e8c8"));
  }

  /* 5. His corner: Tazewell Pike and Emory Rd out in Corryton by his old high school, a barn wall tagged WALLEN, House Mountain behind */
  function mwncorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mwn5)"/>' +
      star(40, 24, 2.2, "#fff", "mwn-tw") + star(170, 14, 2, "#fff", "mwn-tw mwn-tw2") + star(300, 28, 2.4, "#fff", "mwn-tw") +
      '<path d="M0 150l70 -50l60 -14l50 -30l40 4l60 30l50 20l70 40z" fill="#3a4a6a"/><path d="M180 56l40 4l30 16l-50 -6z" fill="#4a5a7a"/>' +
      '<path d="M0 160q100 -16 200 -6t200 -4v20h-400z" fill="#2c4a30"/>' +
      /* barn wall */
      '<rect x="0" y="164" width="400" height="60" fill="#8a2a22"/>' + Array.from({ length: 21 }, (_, i) => '<path d="M' + (i * 20) + ' 164v60" stroke="#5a1a14" stroke-width="1.5"/>').join("") +
      '<rect x="0" y="160" width="400" height="5" fill="#efe6d2"/>' +
      tag("WALLEN", 14, 212, 38, ORANGE, -5) + tag("EAST TN", 196, 206, 20, "#fff", -3) + tag("MULLET", 290, 214, 16, GOLD, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="380" y="60" width="6" height="164" fill="#2f2f2f"/>' +
      sign(266, 60, 128, "TAZEWELL PIKE") + sign(286, 86, 108, "EMORY RD") +
      '<g class="mwn-sp"><circle cx="160" cy="190" r="3" fill="' + ORANGE + '" opacity=".7"/></g><g class="mwn-sp mwn-sp2"><circle cx="166" cy="184" r="2" fill="' + ORANGE + '" opacity=".6"/></g>',
      sky("mwn5", "#141a44", "#e0906a"));
  }

  window.SCENES = { mwnstation: mwnstation, mwnsunsphere: mwnsunsphere, mwnneyland: mwnneyland, mwnsneed: mwnsneed, mwncorner: mwncorner };
})();
