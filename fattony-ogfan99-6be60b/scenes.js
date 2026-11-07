/* fattony scenes (Regions tab: Houston + Texas; Third Ward, Houston). CSS classes and ids prefixed ft- (the page's own anim-train is kept).
   1 MacGregor Park/Martin Luther King Jr. on the METRORail Purple Line: at-grade side platforms in the median of MLK Blvd, the white light-rail car gliding in.
   2 MacGregor Park ("MacGregor Park, groovin' on a Sunday"): live oaks, Brays Bayou, a picnic plate of fried chicken, music notes bouncing off a parked car.
   3 Project Row Houses, Third Ward: the row of white shotgun houses with porches and painted art, porch lights flickering.
   4 The late-night drive-thru (Drive-Thru): menu board with the #2, no mayo, taquito and beef potato, headlights pulling up to the speaker.
   5 Emancipation Ave and Elgin St in Third Ward: green signs, TONY tagged on the brick, the downtown skyline (twin wedge towers) behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ftflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.ft-flk{animation:ftflick 2.2s infinite}.ft-flk2{animation-delay:.7s}.ft-flk3{animation-delay:1.3s}' +
    '@keyframes ftcar{from{transform:translateX(-160px)}to{transform:translateX(560px)}}.ft-car{animation:ftcar 9s linear infinite}' +
    '@keyframes ftnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(30px,-70px);opacity:0}}.ft-note{animation:ftnote 2.4s ease-out infinite}.ft-n2{animation-delay:-.8s}.ft-n3{animation-delay:-1.6s}' +
    '@keyframes ftrip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.ft-rip{animation:ftrip 3s ease-in-out infinite}.ft-rip2{animation-delay:-1.5s}' +
    '@keyframes ftbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-20px)}}.ft-bird{animation:ftbird 12s linear infinite}.ft-bird2{animation-delay:-6s}' +
    '@keyframes ftpull{0%{transform:translateX(-150px)}55%,100%{transform:translateX(0)}}.ft-pull{animation:ftpull 6s ease-out infinite;animation-delay:-2.5s}' +
    '@keyframes ftsteam{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(-22px);opacity:0}}.ft-stm{animation:ftsteam 1.8s ease-out infinite}.ft-stm2{animation-delay:-.9s}' +
    '@keyframes ftblink{0%,100%{opacity:.3}50%{opacity:1}}.ft-bl{animation:ftblink 1.4s ease-in-out infinite}.ft-bl2{animation-delay:-.7s}' +
    '@keyframes ftspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ft-sp{animation:ftspray 1.4s ease-out infinite}.ft-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const oak = (x, base, s) => '<g><path d="M' + x + ' ' + base + 'v' + (-30 * s) + 'l' + (-14 * s) + ' ' + (-12 * s) + 'M' + x + ' ' + (base - 30 * s) + 'l' + (16 * s) + ' ' + (-14 * s) + '" stroke="#5b4330" stroke-width="' + (6 * s) + '" fill="none" stroke-linecap="round"/>' +
    [[-26, -46, 26], [8, -54, 30], [30, -40, 22], [-6, -34, 24]].map(c => '<ellipse cx="' + (x + c[0] * s) + '" cy="' + (base + c[1] * s) + '" rx="' + (c[2] * s) + '" ry="' + (c[2] * 0.7 * s) + '" fill="#3f6b34"/>').join("") + '</g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "ft-bl" + (i % 2 ? " ft-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 80) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const PUR = "#6f2c91", ORANGE = "#ffb347", LAV = "#c9a7ff", TEAL = "#4fd1c5";

  /* 1. MacGregor Park/MLK Jr., Purple Line */
  function ftstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="122" width="36" height="26" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><path d="M24 182V120q0 -12 14 -12h300q24 0 30 30v44z" fill="#eef0f2" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="24" y="156" width="344" height="8" fill="' + PUR + '"/><rect x="24" y="166" width="344" height="3" fill="#9aa3ab"/>' +
      '<path d="M340 112q22 4 26 30h-26z" fill="#1c2630"/><circle cx="356" cy="174" r="3.5" fill="#fff6c2"/>' +
      '<rect x="200" y="98" width="70" height="10" fill="#8a939b"/><path d="M210 98l25 -26l25 26" stroke="#555" stroke-width="2" fill="none"/>' +
      '<rect x="40" y="110" width="80" height="10" rx="2" fill="#111"/><text x="80" y="118" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">PURPLE · PALM CTR</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fts1)"/>' +
      '<path d="M0 72h400" stroke="#333" stroke-width="1.5"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="68" width="6" height="120" fill="#7a8088"/><path d="M' + (x - 22) + ' 72h44" stroke="#7a8088" stroke-width="3"/>').join("") +
      oak(14, 186, 0.9) + oak(390, 186, 0.9) +
      '<rect x="0" y="94" width="400" height="10" fill="#c9c3b7"/>' +
      '<g fill="' + PUR + '"><rect x="0" y="80" width="400" height="6"/></g>' + [100, 300].map(x => '<path d="M' + (x - 50) + ' 80l50 -16l50 16z" fill="#d9d4ca"/>').join("") +
      train +
      '<rect x="0" y="186" width="400" height="8" fill="#f2c200"/><rect x="0" y="194" width="400" height="66" fill="#a8a296"/><path d="M0 226h400" stroke="#968f83" stroke-width="2"/>' +
      '<rect x="40" y="204" width="320" height="38" rx="3" fill="#111"/><text x="54" y="221" ' + font + ' font-size="13" fill="#fff">MacGregor Park/</text><text x="54" y="236" ' + font + ' font-size="13" fill="#fff">Martin Luther King Jr.</text>' + badge(300, 223, "PUR", PUR),
      sky("fts1", "#6aa7dd", "#f7dcb4"));
  }

  /* 2. MacGregor Park on a Sunday */
  function ftpark() {
    const car = '<g><path d="M232 196v-16q0 -6 8 -8l20 -2l16 -16h60l18 16l16 4q6 2 6 8v14z" fill="#6f2c91" stroke="#2c0f3c" stroke-width="2"/><path d="M280 158h26v14h-40zM312 158h22l14 14h-36z" fill="#bfe3ff" opacity=".85"/>' +
      '<circle cx="262" cy="198" r="11" fill="#111"/><circle cx="262" cy="198" r="5" fill="#d8dde2"/><circle cx="350" cy="198" r="11" fill="#111"/><circle cx="350" cy="198" r="5" fill="#d8dde2"/></g>';
    const notes = [0, 1, 2].map(i => '<g class="ft-note' + (i ? " ft-n" + (i + 1) : "") + '"><text x="' + (300 + i * 18) + '" y="150" ' + font + ' font-size="18" fill="' + [ORANGE, LAV, TEAL][i] + '">' + ["♪", "♫", "♪"][i] + '</text></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fts2)"/>' +
      '<g class="ft-bird"><path d="M20 50q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="ft-bird ft-bird2"><path d="M60 70q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<rect x="0" y="120" width="400" height="140" fill="#6fae4f"/>' +
      '<path d="M0 140q100 -10 200 0t200 0v18q-100 -10 -200 0t-200 0z" fill="#5b8fb5"/><g class="ft-rip"><path d="M30 148h40M160 150h50M300 146h40" stroke="#cfe6f5" stroke-width="2" stroke-linecap="round"/></g>' +
      oak(60, 140, 1.1) + oak(200, 132, 0.8) +
      '<rect x="40" y="200" width="120" height="8" fill="#8a5a36"/><rect x="40" y="186" width="120" height="14" fill="#a8703f"/><path d="M50 208v26M150 208v26" stroke="#6b4428" stroke-width="5"/>' +
      '<rect x="40" y="186" width="120" height="14" fill="url(#ftcheck)"/>' +
      '<ellipse cx="100" cy="186" rx="22" ry="6" fill="#fff" stroke="#ccc" stroke-width="1.5"/><path d="M86 184q4 -10 10 -2q4 -8 10 0q6 -8 8 2z" fill="#c8823a" stroke="#7a4518" stroke-width="1"/>' +
      '<g class="ft-stm"><path d="M94 170q-3 -6 0 -12" stroke="#fff" stroke-width="2" fill="none" opacity=".8"/></g><g class="ft-stm ft-stm2"><path d="M104 170q3 -6 0 -12" stroke="#fff" stroke-width="2" fill="none" opacity=".8"/></g>' +
      car + notes +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#173a1c">MACGREGOR PARK · GROOVIN\' ON A SUNDAY</text>',
      sky("fts2", "#8cc8f0", "#f4f0d8") + '<pattern id="ftcheck" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="5" height="5" fill="#e04a3c"/><rect x="5" y="5" width="5" height="5" fill="#e04a3c"/><rect x="5" width="5" height="5" fill="#fff"/><rect y="5" width="5" height="5" fill="#fff"/></pattern>');
  }

  /* 3. Project Row Houses */
  function ftrowhouses() {
    const art = ["#e8505b", "#f2c94c", TEAL, LAV, ORANGE];
    const houses = [0, 1, 2, 3, 4].map(i => {
      const x = 10 + i * 78;
      return '<path d="M' + x + ' 92l30 -30l30 30z" fill="#e9e6df" stroke="#9a948a" stroke-width="2"/><rect x="' + x + '" y="92" width="60" height="78" fill="#f7f5ef" stroke="#9a948a" stroke-width="2"/>' +
        Array.from({ length: 8 }, (_, k) => '<path d="M' + x + ' ' + (100 + k * 9) + 'h60" stroke="#e1ddd3" stroke-width="1"/>').join("") +
        '<rect x="' + (x + 8) + '" y="104" width="16" height="22" fill="#3a4652"/><rect x="' + (x + 34) + '" y="102" width="18" height="40" fill="#5a3a2a"/>' +
        '<circle cx="' + (x + 16) + '" cy="140" r="8" fill="' + art[i] + '"/><path d="M' + (x + 8) + ' 156h20" stroke="' + art[(i + 2) % 5] + '" stroke-width="4"/>' +
        '<rect x="' + (x - 4) + '" y="146" width="68" height="4" fill="#9a948a"/><path d="M' + (x - 2) + ' 150v20M' + (x + 62) + ' 150v20" stroke="#9a948a" stroke-width="3"/>' +
        '<rect x="' + (x + 6) + '" y="170" width="48" height="6" fill="#bdb6a8"/><circle class="ft-flk' + (i % 3 ? " ft-flk" + (i % 3 + 1) : "") + '" cx="' + (x + 30) + '" cy="96" r="3" fill="#ffe9a8"/>';
    }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fts3)"/>' +
      '<g class="ft-bird"><path d="M20 40q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<rect x="0" y="160" width="400" height="100" fill="#7fae5a"/>' + houses +
      '<rect x="0" y="196" width="400" height="10" fill="#cfc8b8"/><rect x="0" y="206" width="400" height="54" fill="#4e4e54"/><path d="M0 236h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#f2efe8">PROJECT ROW HOUSES · THIRD WARD</text>',
      sky("fts3", "#89c2ec", "#f9e7c6"));
  }

  /* 4. The late-night drive-thru */
  function ftdrive() {
    const items = [["#2  BURGER, NO MAYO", ORANGE], ["TAQUITO", "#fff"], ["BEEF POTATO", "#fff"], ["FRIES", "#fff"]];
    const board = '<rect x="236" y="70" width="140" height="110" rx="6" fill="#1b1b22" stroke="#555" stroke-width="3"/><rect x="242" y="76" width="128" height="16" fill="' + PUR + '"/><text x="306" y="88" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">LATE NIGHT MENU</text>' +
      items.map((t, i) => '<text x="250" y="' + (110 + i * 18) + '" ' + font + ' font-size="10" fill="' + t[1] + '">' + t[0] + '</text>').join("") +
      '<rect x="300" y="180" width="12" height="40" fill="#444"/><rect x="214" y="150" width="20" height="30" rx="4" fill="#333"/><circle cx="224" cy="162" r="5" fill="#111"/><circle class="ft-bl" cx="224" cy="174" r="2" fill="#4fd1c5"/>';
    const car = '<g class="ft-pull"><path d="M20 210v-18q0 -8 10 -10l26 -4l20 -18h80l22 18l30 4q10 2 10 12v16z" fill="#e8e8ea" stroke="#555" stroke-width="2"/><path d="M84 162h34v18h-50zM124 162h30l18 18h-48z" fill="#2a3a4a"/>' +
      '<path d="M218 196l120 -24v50z" fill="#fff6c2" opacity=".18"/><rect x="208" y="192" width="10" height="7" fill="#fff6c2"/>' +
      '<circle cx="64" cy="212" r="12" fill="#111"/><circle cx="64" cy="212" r="5" fill="#9aa1a8"/><circle cx="182" cy="212" r="12" fill="#111"/><circle cx="182" cy="212" r="5" fill="#9aa1a8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fts4)"/>' + stars(30) +
      '<rect x="0" y="40" width="120" height="120" fill="#2b2433"/><rect x="0" y="54" width="120" height="8" fill="' + ORANGE + '"/><rect x="18" y="80" width="80" height="44" fill="#ffd98a" opacity=".85"/><rect x="18" y="80" width="80" height="44" fill="none" stroke="#111" stroke-width="3"/>' +
      '<g class="ft-stm"><path d="M58 76q-4 -8 0 -16" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/></g>' +
      '<rect x="0" y="160" width="400" height="100" fill="#35343c"/><path d="M0 232h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      board + car +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="11" fill="#eae6f2">STORES CLOSED · HIT THE DRIVE-THRU</text>',
      sky("fts4", "#0c0a1c", "#3b2a5a"));
  }

  /* 5. Emancipation Ave and Elgin St */
  function ftcorner() {
    const sky1 = '<g fill="#2a2440"><rect x="196" y="40" width="26" height="90"/><path d="M228 130V36l16 -10v104z"/><path d="M250 130V30l18 14v86z"/><rect x="276" y="60" width="24" height="70"/><path d="M306 130V52l12 -10l12 10v78z"/><rect x="336" y="76" width="30" height="54"/><rect x="160" y="70" width="30" height="60"/></g>' +
      '<g fill="#ffd98a" opacity=".55">' + Array.from({ length: 14 }, (_, i) => '<rect class="' + (i % 3 ? "" : "ft-bl") + '" x="' + (200 + (i % 4) * 5) + '" y="' + (50 + Math.floor(i / 4) * 14) + '" width="2" height="4"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fts5)"/>' + stars(16) + sky1 +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("TONY", 24, 192, 62, LAV, -6) + tag("THIRD WARD", 150, 214, 20, ORANGE, -4) + tag("RABDARGAB", 26, 216, 16, TEAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(232, 98, 166, "Emancipation Ave") + sign(270, 124, 100, "Elgin St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="ft-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="ft-sp"><circle cx="174" cy="166" r="3" fill="' + LAV + '" opacity=".7"/></g><g class="ft-sp ft-sp2"><circle cx="180" cy="160" r="2" fill="' + LAV + '" opacity=".6"/></g>',
      sky("fts5", "#1b1640", "#d9765a"));
  }

  window.SCENES = { ftstation: ftstation, ftpark: ftpark, ftrowhouses: ftrowhouses, ftdrive: ftdrive, ftcorner: ftcorner };
})();
