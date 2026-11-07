/* chancetherapper scenes (Regions tab: Chicago; Chatham, South Side). CSS classes and ids prefixed ct- (the page's own anim-train is kept).
   1 79th St (Chatham) on the Metra Electric: island platform up on the embankment over 79th St, a silver bilevel electric train sliding in.
   2 The White Sox ballpark at 35th St on the South Side, where he threw Magnificent Coloring Day (2016): light towers, a packed night crowd, confetti.
   3 Jones College Prep in the South Loop (State St): the glass-and-steel school where his 10 Day suspension turned into a mixtape.
   4 Daley Plaza and the rust-red Chicago Picasso: the Parade to the Polls (Nov 2016) marching from Grant Park to early voting.
   5 E 79th St and S Cottage Grove Ave in Chatham: green signs, CHANCE tagged, the Metra Electric viaduct with a train rolling over behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ctflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.ct-flk{animation:ctflick 2.4s infinite}.ct-flk2{animation-delay:.8s}' +
    '@keyframes ctcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.ct-car{animation:ctcar 5s linear infinite}.ct-car2{animation-delay:-2.5s}' +
    '@keyframes ctfall{0%{transform:translateY(-30px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translateY(200px) rotate(320deg);opacity:.2}}.ct-conf{transform-box:fill-box;transform-origin:50% 50%;animation:ctfall 3.6s linear infinite}' +
    '@keyframes ctbeam{0%,100%{opacity:.25}50%{opacity:.6}}.ct-beam{animation:ctbeam 2.6s ease-in-out infinite}.ct-beam2{animation-delay:-1.3s}' +
    '@keyframes ctmarch{from{transform:translateX(-60px)}to{transform:translateX(60px)}}.ct-march{animation:ctmarch 6s linear infinite alternate}' +
    '@keyframes ctbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.ct-bob{animation:ctbob .9s ease-in-out infinite}.ct-bob2{animation-delay:-.45s}' +
    '@keyframes ctwin{0%,100%{opacity:.35}50%{opacity:1}}.ct-win{animation:ctwin 3s ease-in-out infinite}.ct-win2{animation-delay:-1.5s}' +
    '@keyframes ctcloud{from{transform:translateX(-80px)}to{transform:translateX(460px)}}.ct-cloud{animation:ctcloud 22s linear infinite}.ct-cloud2{animation-delay:-11s}' +
    '@keyframes ctover{from{transform:translateX(-420px)}to{transform:translateX(420px)}}.ct-over{animation:ctover 7s linear infinite;animation-delay:-3.2s}' +
    '@keyframes ctsp{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(18px,-26px);opacity:0}}.ct-sp{animation:ctsp 1.3s ease-out infinite}.ct-sp2{animation-delay:-.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const METRA = "#1f4e79", YEL = "#ffd23f", PINK = "#ff5fa2", BLUE = "#38c6f4", RUST = "#9c4a24";
  /* a bilevel Metra Electric car (silver, gallery windows, pantograph on top) */
  const mecar = (x, y, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="62" rx="6" fill="#d6dade" stroke="#7d858d" stroke-width="2"/>' +
    Array.from({ length: Math.floor((w - 20) / 26) }, (_, i) => '<rect x="' + (x + 12 + i * 26) + '" y="' + (y + 10) + '" width="18" height="12" rx="2" fill="#26323c"/><rect x="' + (x + 12 + i * 26) + '" y="' + (y + 30) + '" width="18" height="12" rx="2" fill="#26323c"/>').join("") +
    '<rect x="' + x + '" y="' + (y + 47) + '" width="' + w + '" height="4" fill="' + METRA + '"/><path d="M' + (x + w / 2 - 14) + ' ' + y + 'l8 -12h12l8 12" stroke="#4a4f55" stroke-width="2" fill="none"/>';

  /* 1. 79th St (Chatham), Metra Electric */
  function ctstation() {
    const train = '<g class="anim-train">' + mecar(20, 86, 180) + mecar(204, 86, 170) +
      '<rect x="350" y="92" width="22" height="50" rx="4" fill="#b6bcc2"/><circle cx="362" cy="138" r="3.5" fill="#fff6c2"/>' +
      '<rect x="286" y="74" width="70" height="10" rx="2" fill="#111"/><text x="321" y="82" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">UNIVERSITY PK</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cts1)"/>' +
      '<g class="ct-cloud"><ellipse cx="40" cy="30" rx="30" ry="9" fill="#fff" opacity=".5"/></g><g class="ct-cloud ct-cloud2"><ellipse cx="40" cy="48" rx="22" ry="7" fill="#fff" opacity=".4"/></g>' +
      '<path d="M0 46h400" stroke="#2c2c34" stroke-width="2"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="40" width="6" height="120" fill="#5b636b"/><path d="M' + (x - 18) + ' 46h36" stroke="#5b636b" stroke-width="4"/>').join("") +
      '<g class="ct-flk"><rect x="110" y="50" width="34" height="3" fill="#fff3c4"/></g><g class="ct-flk ct-flk2"><rect x="270" y="50" width="34" height="3" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="150" width="400" height="6" fill="#f2c200"/><rect x="0" y="156" width="400" height="26" fill="#8e8a82"/>' +
      '<path d="M0 182h400v14H0z" fill="#6f6a60"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 42) + '" y="186" width="28" height="74" fill="#7c766b"/><rect x="' + (i * 42 + 28) + '" y="186" width="14" height="74" fill="#3a3530"/>').join("") +
      '<rect x="0" y="232" width="400" height="28" fill="#4a4c55"/><path d="M0 246h400" stroke="#ddd" stroke-width="1.5" stroke-dasharray="14 10"/>' +
      car("ct-car", 0, 238, "#e6e6e6") + car("ct-car ct-car2", 0, 238, PINK) +
      '<rect x="96" y="158" width="208" height="28" rx="3" fill="#111"/><text x="108" y="178" ' + font + ' font-size="15" fill="#fff">79th St · Chatham</text>' + badge(254, 172, "ME", METRA) +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#1d2440">METRA ELECTRIC · OVER 79TH ST · CHATHAM</text>',
      sky("cts1", "#9fd0f0", "#fbe9c9"));
  }

  /* 2. the Sox ballpark at 35th St, Magnificent Coloring Day */
  function ctsoxpark() {
    const tower = (x) => '<rect x="' + (x - 2) + '" y="40" width="4" height="90" fill="#3a3f4a"/><rect x="' + (x - 18) + '" y="26" width="36" height="16" rx="2" fill="#2a2f3a"/>' +
      Array.from({ length: 6 }, (_, i) => '<circle cx="' + (x - 14 + i * 5.6) + '" cy="34" r="2.2" fill="#fffbe0"/>').join("");
    const conf = Array.from({ length: 22 }, (_, i) => '<rect class="ct-conf" style="animation-delay:-' + (i * 0.17).toFixed(2) + 's" x="' + ((i * 53) % 390 + 4) + '" y="' + ((i * 19) % 40 + 20) + '" width="5" height="3" fill="' + [YEL, PINK, BLUE, "#7ee081", "#ff8a3d"][i % 5] + '"/>').join("");
    const crowd = Array.from({ length: 40 }, (_, i) => '<circle cx="' + (i * 10 + 5) + '" cy="' + (150 + (i % 3) * 2) + '" r="3.4" fill="' + ["#2a2338", "#3a2f4f", "#1f1a2c"][i % 3] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cts2)"/>' +
      Array.from({ length: 18 }, (_, i) => '<circle cx="' + ((i * 71) % 400) + '" cy="' + ((i * 13) % 30 + 6) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      '<path class="ct-beam" d="M60 34L0 150h120z" fill="#fffbe0" opacity=".3"/><path class="ct-beam ct-beam2" d="M340 34L280 150h120z" fill="#fffbe0" opacity=".3"/>' +
      tower(60) + tower(340) +
      '<path d="M0 118q200 -40 400 0v40H0z" fill="#1d3a5c"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' ' + (110 - Math.abs(4 - i) * 0 ) + 'v46" stroke="#2f5a86" stroke-width="2"/>').join("") +
      '<path d="M0 132q200 -34 400 0" stroke="#e8edf3" stroke-width="3" fill="none"/>' + crowd +
      '<rect x="0" y="156" width="400" height="10" fill="#1a2433"/>' +
      '<path d="M0 166h400v94H0z" fill="#2f8a3e"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 56) + ' 166l-30 94" stroke="#3a9a4a" stroke-width="16" opacity=".5"/>').join("") +
      '<path d="M200 182l70 40l-70 40l-70 -40z" fill="#c8915a"/><path d="M200 196l46 26l-46 26l-46 -26z" fill="#3a9a4a"/>' +
      '<rect x="196" y="218" width="8" height="8" fill="#fff" transform="rotate(45 200 222)"/>' +
      '<rect x="120" y="172" width="160" height="22" rx="3" fill="#111" opacity=".8"/><text x="200" y="187" text-anchor="middle" ' + font + ' font-size="10" fill="' + YEL + '">MAGNIFICENT COLORING DAY</text>' +
      conf +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#e9f5e9">35TH ST · THE SOUTH SIDE BALLPARK · SEPT 2016</text>',
      sky("cts2", "#0e1230", "#3b2a5a"));
  }

  /* 3. Jones College Prep, South Loop */
  function ctjones() {
    const rows = Array.from({ length: 9 }, (_, r) => Array.from({ length: 8 }, (_, c) => '<rect class="' + ((r + c) % 5 ? "" : "ct-win") + '" x="' + (96 + c * 26) + '" y="' + (40 + r * 15) + '" width="22" height="11" fill="' + ((r * 3 + c) % 4 ? "#8fc9e8" : "#cfeaf7") + '"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cts3)"/>' +
      '<g class="ct-cloud"><ellipse cx="30" cy="28" rx="28" ry="8" fill="#fff" opacity=".7"/></g>' +
      '<g fill="#7f8b99" opacity=".7"><rect x="0" y="70" width="40" height="110"/><rect x="44" y="96" width="34" height="84"/><rect x="320" y="60" width="36" height="120"/><rect x="360" y="88" width="40" height="92"/></g>' +
      '<rect x="90" y="34" width="218" height="146" fill="#4a6276"/>' + rows +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (92 + i * 26) + ' 34v146" stroke="#c9d3db" stroke-width="2"/>').join("") +
      '<rect x="90" y="30" width="218" height="6" fill="#c9d3db"/>' +
      '<rect x="80" y="150" width="240" height="30" fill="#b9b3a6"/><rect x="170" y="156" width="60" height="24" fill="#26323c"/><rect x="174" y="160" width="52" height="20" fill="#ffd98a" opacity=".5" class="ct-win ct-win2"/>' +
      '<rect x="100" y="138" width="200" height="12" fill="#26323c"/><text x="200" y="147.5" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">JONES COLLEGE PREP</text>' +
      '<rect x="0" y="180" width="400" height="16" fill="#b0aca4"/><rect x="0" y="196" width="400" height="64" fill="#4a4c55"/><path d="M0 226h400" stroke="#ddd" stroke-width="1.5" stroke-dasharray="14 10"/>' +
      car("ct-car", 0, 206, "#2a6fc9") + car("ct-car ct-car2", 0, 230, "#f2f2f2") +
      '<g transform="translate(330 168)"><rect x="-1" y="0" width="3" height="28" fill="#333"/><rect x="-26" y="-4" width="52" height="18" fill="' + YEL + '" stroke="#000"/><text x="0" y="9" text-anchor="middle" ' + font + ' font-size="10" fill="#000">10 DAY</text></g>' +
      '<g class="ct-bob"><rect x="40" y="168" width="22" height="16" rx="2" fill="' + PINK + '"/><path d="M44 168v-4h14v4" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#1d2440">STATE ST · SOUTH LOOP · WHERE 10 DAY STARTED</text>',
      sky("cts3", "#7fc1ec", "#e8f3fb"));
  }

  /* 4. Daley Plaza, the Picasso, Parade to the Polls */
  function ctpicasso() {
    const pic = '<g fill="none" stroke="' + RUST + '" stroke-width="5" stroke-linejoin="round">' +
      '<path d="M170 176l10 -70q20 -40 40 0l10 70"/><path d="M180 106q-40 -30 -30 -66q30 4 46 40"/><path d="M220 106q40 -30 30 -66q-30 4 -46 40"/>' +
      '<ellipse cx="200" cy="96" rx="16" ry="24"/></g>' +
      '<g stroke="' + RUST + '" stroke-width="1.5" opacity=".9">' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (186 + i * 3.5) + ' 82v40"/>').join("") + '</g>' +
      '<rect x="166" y="176" width="68" height="8" fill="#9a8f80"/>';
    const walker = (x, c, cls, sgn) => '<g class="' + cls + '"><circle cx="' + x + '" cy="196" r="5" fill="#3a2a22"/><rect x="' + (x - 5) + '" y="201" width="10" height="16" rx="3" fill="' + c + '"/><path d="M' + (x - 3) + ' 217v10M' + (x + 3) + ' 217v10" stroke="#222" stroke-width="3"/>' +
      (sgn ? '<path d="M' + (x + 6) + ' 204v-24" stroke="#555" stroke-width="2"/><rect x="' + (x - 6) + '" y="168" width="28" height="14" fill="#fff" stroke="#000"/><text x="' + (x + 8) + '" y="178" text-anchor="middle" ' + font + ' font-size="7" fill="#c8102e">VOTE</text>' : '') + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cts4)"/>' +
      '<rect x="0" y="20" width="96" height="164" fill="#6d4a35"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (30 + i * 15) + 'h96" stroke="#3b2a20" stroke-width="5"/>').join("") +
      '<rect x="300" y="10" width="100" height="174" fill="#c9c2b6"/>' + Array.from({ length: 8 }, (_, r) => Array.from({ length: 4 }, (_, c) => '<rect x="' + (310 + c * 22) + '" y="' + (20 + r * 20) + '" width="14" height="12" fill="#5e6a78"/>').join("")).join("") +
      pic +
      '<rect x="0" y="184" width="400" height="76" fill="#b9b2a5"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 56) + ' 184l-20 76" stroke="#a49c8e" stroke-width="2"/>').join("") +
      '<g class="ct-march">' + walker(60, YEL, "ct-bob", true) + walker(96, PINK, "ct-bob ct-bob2", false) + walker(132, BLUE, "ct-bob", false) + walker(268, "#7ee081", "ct-bob ct-bob2", true) + walker(304, YEL, "ct-bob", false) + walker(340, PINK, "ct-bob ct-bob2", false) + '</g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2420">DALEY PLAZA · PARADE TO THE POLLS · NOV 2016</text>',
      sky("cts4", "#a9d3f2", "#f6efe2"));
  }

  /* 5. E 79th St and S Cottage Grove Ave, Chatham */
  function ctcorner() {
    const via = '<rect x="0" y="80" width="400" height="22" fill="#6c6a64"/><rect x="0" y="100" width="400" height="6" fill="#4a4842"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (20 + i * 72) + '" y="106" width="10" height="26" fill="#55534d"/>').join("") +
      '<g class="ct-over"><rect x="40" y="52" width="150" height="28" rx="4" fill="#d6dade" stroke="#7d858d" stroke-width="1.5"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (50 + i * 23) + '" y="58" width="14" height="8" fill="#26323c"/>').join("") + '<rect x="40" y="72" width="150" height="3" fill="' + METRA + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cts5)"/>' + via +
      '<rect x="0" y="130" width="400" height="94" fill="#8a5a3c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#6e4630" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#6e4630" stroke-width="1"/>').join("")).join("") +
      tag("CHANCE", 18, 194, 50, YEL, -6) + tag("SAVEMONEY", 118, 218, 17, BLUE, -4) + tag("ACKA", 26, 216, 16, PINK, -3) +
      '<g class="ct-sp"><circle cx="246" cy="168" r="3" fill="' + YEL + '" opacity=".7"/></g><g class="ct-sp ct-sp2"><circle cx="252" cy="160" r="2" fill="' + YEL + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(272, 112, 120, "E 79th St") + sign(240, 138, 152, "S Cottage Grove") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="ct-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>',
      sky("cts5", "#2a2350", "#f08a5d"));
  }

  window.SCENES = { ctstation: ctstation, ctsoxpark: ctsoxpark, ctjones: ctjones, ctpicasso: ctpicasso, ctcorner: ctcorner };
})();
