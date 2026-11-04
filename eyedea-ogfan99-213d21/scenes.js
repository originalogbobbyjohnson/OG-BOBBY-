/* eyedea scenes (Regions tab: Minneapolis) */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes carsL{from{transform:translateX(490px)}to{transform:translateX(-120px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}.bl4{animation-delay:1.05s}' +
    '@keyframes snow{from{transform:translateY(-30px)}to{transform:translateY(270px)}}.sn{animation:snow 6s linear infinite}.sn2{animation-delay:-2s}.sn3{animation-delay:-4s}' +
    '@keyframes flow{from{transform:translateX(0)}to{transform:translateX(-40px)}}.fl{animation:flow 2.4s linear infinite}' +
    '@keyframes fall{from{transform:translateY(0);opacity:.9}to{transform:translateY(40px);opacity:0}}.fa{animation:fall 1.2s linear infinite}.fa2{animation-delay:.4s}.fa3{animation-delay:.8s}' +
    '@keyframes flag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.fg{transform-box:fill-box;transform-origin:0 50%;animation:flag 1.6s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.2s ease-in-out infinite}' +
    '@keyframes glow{0%,100%{opacity:.35}50%{opacity:.9}}.gl{animation:glow 3s ease-in-out infinite}' +
    '@keyframes spray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sp{animation:spray 1.4s ease-out infinite}.sp2{animation-delay:.45s}.sp3{animation-delay:.9s}' +
    '@keyframes sweep{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.sw{transform-box:fill-box;transform-origin:50% 0;animation:sweep 3s ease-in-out infinite}' +
    '@keyframes rise{from{transform:translateY(6px)}to{transform:translateY(-6px)}}.ri{animation:rise 3s ease-in-out infinite alternate}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* METRO light rail line badge: colored rounded tag with the line name */
  const line = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "bl") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const snowfall = () => { let s = ""; for (let i = 0; i < 36; i++) s += '<circle class="sn' + (i % 3 ? " sn" + (1 + i % 3) : "") + '" cx="' + ((i * 61) % 400) + '" cy="' + ((i * 37) % 240) + '" r="' + (i % 2 ? 1.6 : 2.4) + '" fill="#fff" opacity=".85"/>'; return s; };
  const pole = (x, y1, y2) => '<rect x="' + (x - 3) + '" y="' + y1 + '" width="6" height="' + (y2 - y1) + '" fill="#2f2f2f"/>';
  /* METRO light rail car (white body, line-color band, dark windows, pantograph) */
  const lrv = (x, y, w, band) => '<g class="anim-train"><path d="M' + (x + w / 2 - 14) + ' ' + (y - 2) + 'l14 -14l14 14" stroke="#333" stroke-width="2" fill="none"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="54" rx="10" fill="#eceef0" stroke="#7a7e84" stroke-width="2"/>' +
    Array.from({ length: Math.floor((w - 20) / 44) }, (_, i) => '<rect x="' + (x + 12 + i * 44) + '" y="' + (y + 8) + '" width="34" height="20" rx="3" fill="#24313d"/>').join("") +
    '<rect x="' + x + '" y="' + (y + 34) + '" width="' + w + '" height="7" fill="' + band + '"/><rect x="' + x + '" y="' + (y + 42) + '" width="' + w + '" height="3" fill="#f2c200"/><circle cx="' + (x + w - 8) + '" cy="' + (y + 48) + '" r="3" fill="#fff6c2"/></g>';
  /* Minneapolis skyline silhouette: IDS Center (zigzag setbacks), Wells Fargo Center crown, Foshay obelisk, Capella */
  const mplsSky = (fill, base) => '<g fill="' + fill + '">' +
    '<rect x="40" y="' + (base - 70) + '" width="34" height="70"/><rect x="80" y="' + (base - 96) + '" width="22" height="96"/><path d="M84 ' + (base - 96) + 'l7 -12l7 12z"/>' +
    '<path d="M150 ' + base + 'v-160h6v-6h6v-6h18v6h6v6h6v160z"/>' +
    '<path d="M210 ' + base + 'v-130l14 -16l14 16v130z"/><rect x="221" y="' + (base - 160) + '" width="6" height="14"/>' +
    '<rect x="252" y="' + (base - 100) + '" width="30" height="100"/><path d="M290 ' + base + 'v-120q14 -18 28 0v120z"/><rect x="330" y="' + (base - 60) + '" width="40" height="60"/><rect x="118" y="' + (base - 54) + '" width="26" height="54"/></g>';
  /* St. Paul skyline: Wells Fargo Place, First National Bank tower with its red "1" sign, Cathedral dome */
  const stpSky = (fill, base) => '<g fill="' + fill + '">' +
    '<rect x="30" y="' + (base - 60) + '" width="40" height="60"/><rect x="78" y="' + (base - 120) + '" width="34" height="120"/><path d="M78 ' + (base - 120) + 'l17 -14l17 14z"/>' +
    '<rect x="124" y="' + (base - 100) + '" width="30" height="100"/><rect x="128" y="' + (base - 116) + '" width="22" height="16"/>' +
    '<rect x="166" y="' + (base - 74) + '" width="40" height="74"/><rect x="214" y="' + (base - 90) + '" width="28" height="90"/><rect x="250" y="' + (base - 50) + '" width="50" height="50"/>' +
    '<path d="M310 ' + base + 'v-40h10q14 -40 28 0h10v40z"/><rect x="336" y="' + (base - 88) + '" width="4" height="12"/></g>';
  const SKY = "#7fd1ff", PNK = "#ff5c8a", YEL = "#ffd166", GRN = "#00a651";

  /* 1. Snelling Av station on the METRO Green Line: the platform in the middle of University Avenue, the train sliding in, snow coming down */
  function greenstation() {
    return svg(
      '<rect width="400" height="260" fill="url(#e1)"/>' + stpSky("#4a5872", 150) +
      '<rect x="0" y="150" width="400" height="110" fill="#8b8f96"/>' +
      '<rect x="40" y="70" width="320" height="8" fill="#d6dbe1"/>' + [60, 200, 340].map(x => '<rect x="' + (x - 3) + '" y="78" width="6" height="96" fill="#7d838b"/>').join("") +
      lrv(30, 120, 300, GRN) +
      '<rect x="0" y="174" width="400" height="6" fill="#f2c200"/><rect x="0" y="180" width="400" height="30" fill="#c2bcb0"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#55585e"/><path d="M0 234h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="carL"><rect x="0" y="236" width="60" height="16" rx="5" fill="' + PNK + '"/><rect x="18" y="230" width="30" height="9" rx="3" fill="' + PNK + '"/><circle cx="4" cy="242" r="2.4" fill="#ff3b3b"/></g>' +
      '<rect x="110" y="86" width="180" height="28" rx="3" fill="#111"/><text x="122" y="105" ' + font + ' font-size="14" fill="#fff">Snelling Av</text>' + line(220, 100, "Green", GRN) +
      snowfall(),
      sky("e1", "#8ea2c2", "#e2e8f0"));
  }

  /* 2. The Cathedral of Saint Paul on the hill: pale granite front, the big green copper dome and lantern, birds circling */
  function cathedral() {
    return svg(
      '<rect width="400" height="260" fill="url(#e2)"/>' +
      '<rect x="100" y="130" width="200" height="90" fill="#d9d2c2"/><path d="M100 130h200l-100 -20z" fill="#c9c0ac"/>' +
      '<rect x="150" y="96" width="100" height="40" fill="#d2cab8"/><path d="M140 100q60 -80 120 0z" fill="#5aa58a" stroke="#3d7a63" stroke-width="2"/>' +
      [0, 1, 2, 3, 4].map(i => '<path d="M' + (164 + i * 18) + ' 98q0 -26 ' + (36 - i * 18) * 0.3 + ' -36" stroke="#3d7a63" stroke-width="1.5" fill="none"/>').join("") +
      '<rect x="192" y="28" width="16" height="22" fill="#5aa58a"/><path d="M190 28h20l-10 -12z" fill="#3d7a63"/><rect x="199" y="6" width="2" height="12" fill="#c9a24a"/><rect x="195" y="10" width="10" height="2" fill="#c9a24a"/>' +
      '<rect x="88" y="120" width="24" height="100" fill="#cfc8b6"/><rect x="288" y="120" width="24" height="100" fill="#cfc8b6"/><path d="M86 120h28l-14 -16zM286 120h28l-14 -16z" fill="#5aa58a"/>' +
      '<circle cx="200" cy="164" r="18" fill="#6a5a8a" stroke="#b8ae98" stroke-width="3"/>' +
      [0, 1, 2].map(i => '<path d="M' + (140 + i * 50) + ' 220v-30q10 -14 20 0v30z" fill="#4a4036"/>').join("") +
      '<rect x="0" y="220" width="400" height="40" fill="#8a9a6a"/><path d="M60 236h280" stroke="#bdb6a8" stroke-width="10"/>' +
      '<g class="bob"><path d="M60 50q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="bob" style="animation-delay:.5s"><path d="M320 70q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>',
      sky("e2", "#9fd0f2", "#f2f8fc"));
  }

  /* 3. The battle stage: two mics facing off, the turntables (Abilities on the cuts), spotlights sweeping, crowd hands up */
  function battle() {
    let crowd = ""; for (let i = 0; i < 14; i++) crowd += '<g class="' + (i % 2 ? "bob" : "") + '"><circle cx="' + (14 + i * 29) + '" cy="236" r="12" fill="#14121c"/><path d="M' + (8 + i * 29) + ' 226l-6 -16M' + (20 + i * 29) + ' 226l6 -16" stroke="#14121c" stroke-width="4" stroke-linecap="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#0c0a16"/>' +
      '<g class="sw"><path d="M110 0l-40 200h80z" fill="' + SKY + '" opacity=".18"/></g><g class="sw" style="animation-delay:-1.5s"><path d="M290 0l-40 200h80z" fill="' + PNK + '" opacity=".18"/></g>' +
      '<rect x="120" y="26" width="160" height="30" rx="3" fill="#111" stroke="' + YEL + '" stroke-width="2"/><text class="flk" x="200" y="47" text-anchor="middle" ' + font + ' font-size="16" fill="' + YEL + '" letter-spacing="5">BATTLE</text>' +
      '<rect x="0" y="180" width="400" height="16" fill="#2a2433"/>' +
      '<path d="M110 180V110" stroke="#999" stroke-width="3"/><rect x="104" y="100" width="12" height="16" rx="6" fill="#ccc"/><path d="M290 180V110" stroke="#999" stroke-width="3"/><rect x="284" y="100" width="12" height="16" rx="6" fill="#ccc"/>' +
      '<rect x="160" y="146" width="80" height="34" rx="3" fill="#2c2c30" stroke="#555"/><g style="transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.6s linear infinite"><circle cx="182" cy="163" r="12" fill="#0b0b0b"/><circle cx="182" cy="163" r="4" fill="' + PNK + '"/></g><g style="transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.6s linear infinite"><circle cx="218" cy="163" r="12" fill="#0b0b0b"/><circle cx="218" cy="163" r="4" fill="' + SKY + '"/></g>' +
      '<style>@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}</style>' + crowd,
      "");
  }

  /* 4. The Minnesota State Capitol: white marble dome, the golden horses on the roof, the flag moving in the wind */
  function capitol() {
    return svg(
      '<rect width="400" height="260" fill="url(#e4)"/>' +
      '<rect x="60" y="140" width="280" height="80" fill="#f1eee6"/><path d="M60 140h280l-10 -10H70z" fill="#e2ddd0"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (72 + i * 22) + '" y="150" width="8" height="64" fill="#ddd8ca"/>').join("") +
      '<path d="M160 130l40 -16 40 16z" fill="#e6e1d4"/><rect x="164" y="128" width="72" height="14" fill="#c9a24a"/><g fill="#d9a92e"><path d="M172 128v-10h6l4 4h6v6z"/><path d="M190 128v-12h6l4 4h6v8z"/><path d="M208 128v-10h6l4 4h6v6z"/></g>' +
      '<rect x="160" y="80" width="80" height="34" fill="#f1eee6"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (164 + i * 10) + '" y="84" width="4" height="28" fill="#d8d3c6"/>').join("") +
      '<path d="M156 82q44 -76 88 0z" fill="#f6f4ee" stroke="#cfc9b9" stroke-width="2"/><rect x="194" y="22" width="12" height="16" fill="#f6f4ee"/><circle cx="200" cy="20" r="5" fill="#d9a92e"/>' +
      '<rect x="40" y="60" width="3" height="160" fill="#888"/><g class="fg"><rect x="43" y="62" width="40" height="24" fill="#2a4a9a"/><circle cx="56" cy="74" r="5" fill="#f4f4f4"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#7fa65a"/><path d="M150 260l20 -40h60l20 40z" fill="#d6cfbf"/>',
      sky("e4", "#6fb2e6", "#eaf4fb"));
  }

  /* 5. University Av and Snelling Av, St. Paul: green street signs, EYEDEA tagged on the wall, downtown St. Paul and the Cathedral dome behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#e5)"/>' + stpSky("#2a2f45", 130) +
      '<rect x="0" y="126" width="400" height="98" fill="#5a5f6a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#4e535d" stroke-width="1"/>').join("") +
      tag("EYEDEA", 20, 184, 48, SKY, -6) + tag("E&amp;A", 196, 216, 26, PNK, -5) + tag("ABILITIES", 30, 216, 20, YEL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      pole(339, 96, 224) + sign(276, 98, 120, "University Av") + sign(276, 124, 120, "Snelling Av") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="sp"><circle cx="196" cy="160" r="3" fill="' + SKY + '" opacity=".7"/></g><g class="sp sp2"><circle cx="202" cy="156" r="2" fill="' + SKY + '" opacity=".6"/></g>',
      sky("e5", "#5a3a7a", "#f29a6a"));
  }

  window.SCENES = { greenstation: greenstation, cathedral: cathedral, battle: battle, capitol: capitol, corner: corner };
})();
