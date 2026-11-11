/* milesminnick scenes (Regions tab: The Bay Area; born in Oakland, grew up in Pittsburg, Contra Costa County - "P World"). CSS classes prefixed mm- (the page's own anim-train is kept).
   1 Pittsburg/Bay Point: a BART train on the Yellow Line pulling into the station in the Highway 4 median, cars rolling by, golden hills behind.
   2 Church youth night: the night he got saved - folding chairs, a small stage, a cross on the wall, stage lights sweeping.
   3 GLO Fest: his own Christian hip-hop festival in Castro Valley - outdoor stage, crowd hands up, teal "GLO" lights pulsing.
   4 Oakland airport pickup ("Christlike"): an all-black SUV rolling up at the curb, a plane taking off overhead.
   5 Bailey Rd and W Leland Rd in Pittsburg: green signs, MILES MINNICK tagged, the golden Los Medanos Hills behind.
   No digit 9 is drawn anywhere. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mmcar{from{transform:translateX(-120px)}to{transform:translateX(540px)}}.mm-car{animation:mmcar 5s linear infinite}.mm-car2{animation-delay:-2.5s}' +
    '@keyframes mmbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.mm-beam{transform-box:fill-box;transform-origin:50% 0%;animation:mmbeam 3.6s ease-in-out infinite}.mm-beam2{animation-delay:-1.8s}' +
    '@keyframes mmglo{0%,100%{opacity:.45}50%{opacity:1}}.mm-glo{animation:mmglo 1.6s ease-in-out infinite}.mm-glo2{animation-delay:-.8s}' +
    '@keyframes mmhand{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}.mm-hand{animation:mmhand 1s ease-in-out infinite}.mm-h2{animation-delay:-.33s}.mm-h3{animation-delay:-.66s}' +
    '@keyframes mmplane{from{transform:translate(-60px,0)}to{transform:translate(480px,-50px)}}.mm-plane{animation:mmplane 9s linear infinite}' +
    '@keyframes mmsuv{0%{transform:translateX(-260px)}45%,100%{transform:translateX(0)}}.mm-suv{animation:mmsuv 6s ease-out infinite}' +
    '@keyframes mmsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.mm-sp{animation:mmsp 1.4s ease-out infinite}.mm-sp2{animation-delay:.5s}' +
    '@keyframes mmbird{0%{transform:translate(0,0)}100%{transform:translate(440px,-14px)}}.mm-bird{animation:mmbird 12s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="50" height="12" rx="5" fill="' + c + '"/><rect x="' + (x + 10) + '" y="' + (y - 7) + '" width="28" height="9" rx="3" fill="' + c + '"/><circle cx="' + (x + 11) + '" cy="' + (y + 12) + '" r="4.5" fill="#111"/><circle cx="' + (x + 39) + '" cy="' + (y + 12) + '" r="4.5" fill="#111"/></g>';
  const GLO = "#39e6c4", GOLD = "#f6c445", BLUE = "#2f6fe0", CREAM = "#f7f3ea", YL = "#ffe600";
  /* the rolling golden Los Medanos Hills south of Pittsburg / Bay Point */
  const hills = (y, c, c2) => '<path d="M0 ' + (y + 14) + 'Q50 ' + (y - 14) + ' 110 ' + (y + 4) + 'T220 ' + (y - 6) + 'T330 ' + (y + 2) + 'T400 ' + (y - 4) + 'V' + (y + 80) + 'H0z" fill="' + c + '"/>' +
    '<path d="M0 ' + (y + 30) + 'Q70 ' + (y + 6) + ' 150 ' + (y + 24) + 'T300 ' + (y + 18) + 'T400 ' + (y + 26) + 'V' + (y + 80) + 'H0z" fill="' + c2 + '"/>' +
    '<g fill="#3e5a2a"><circle cx="70" cy="' + (y + 12) + '" r="5"/><circle cx="78" cy="' + (y + 10) + '" r="4"/><circle cx="260" cy="' + (y + 8) + '" r="5"/><circle cx="330" cy="' + (y + 14) + '" r="4"/></g>';
  const birds = '<g class="mm-bird" fill="none" stroke="#2a2a2a" stroke-width="1.4"><path d="M-30 40q4 -4 8 0q4 -4 8 0"/><path d="M-60 52q3 -3 6 0q3 -3 6 0"/></g>';

  /* 1. Pittsburg/Bay Point BART, Yellow Line, in the Highway 4 median */
  function mmbart() {
    const wins = Array.from({ length: 7 }, (_, i) => '<rect x="' + (60 + i * 40) + '" y="132" width="28" height="20" rx="3" fill="#1d2a38"/>').join("");
    const train = '<g class="anim-train"><path d="M30 124h300q34 0 44 24v32H30z" fill="#e8ecef" stroke="#7d8790" stroke-width="2"/>' + wins +
      '<rect x="30" y="158" width="344" height="6" fill="#2b6cb0"/><rect x="30" y="164" width="344" height="3" fill="' + YL + '"/>' +
      '<path d="M336 130h18q12 4 16 18h-34z" fill="#1d2a38"/><circle cx="364" cy="172" r="3" fill="#fff6c2"/>' +
      '<circle cx="70" cy="182" r="7" fill="#222"/><circle cx="110" cy="182" r="7" fill="#222"/><circle cx="290" cy="182" r="7" fill="#222"/><circle cx="330" cy="182" r="7" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mms1)"/>' + birds + hills(58, "#d9b35a", "#c79c44") +
      /* Highway 4 lanes on the far side */
      '<rect x="0" y="100" width="400" height="16" fill="#8e9398"/><path d="M0 108h400" stroke="#fff" stroke-width="1.2" stroke-dasharray="12 10"/>' +
      car("mm-car", 0, 98, "#c43b3b") + car("mm-car mm-car2", 0, 98, "#e8e8e8") +
      '<rect x="0" y="116" width="400" height="8" fill="#6a6e72"/>' +
      /* platform canopy */
      '<rect x="0" y="40" width="400" height="10" fill="#5d6670"/><rect x="60" y="50" width="5" height="74" fill="#5d6670"/><rect x="200" y="50" width="5" height="74" fill="#5d6670"/><rect x="340" y="50" width="5" height="74" fill="#5d6670"/>' +
      '<rect x="0" y="184" width="400" height="8" fill="#4a4e52"/><rect x="0" y="192" width="400" height="68" fill="#c9c2b0"/><rect x="0" y="192" width="400" height="5" fill="' + YL + '"/>' +
      train +
      /* black station sign */
      '<rect x="92" y="56" width="216" height="34" rx="3" fill="#111"/><text x="200" y="79" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">Pittsburg/Bay Point</text>' +
      /* BART line badge */
      '<rect x="292" y="206" width="94" height="40" rx="3" fill="#0b4a8c"/><text x="339" y="224" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">BART</text>' +
      '<rect x="302" y="229" width="74" height="12" rx="6" fill="' + YL + '"/><text x="339" y="238.5" text-anchor="middle" ' + font + ' font-size="8" fill="#111">YELLOW LINE</text>' +
      '<g fill="#3a3a3a"><circle cx="40" cy="214" r="5"/><rect x="35" y="219" width="10" height="20" rx="3"/><circle cx="60" cy="216" r="5"/><rect x="55" y="221" width="10" height="18" rx="3"/></g>',
      sky("mms1", "#8fc4ea", "#f5e2b8"));
  }

  /* 2. Church youth night - the night he got saved */
  function mmyouth() {
    let chairs = "";
    for (let r = 0; r < 3; r++) for (let i = 0; i < 9; i++) {
      const x = 30 + i * 40 + (r % 2) * 10, y = 196 + r * 20;
      chairs += '<rect x="' + x + '" y="' + y + '" width="22" height="4" fill="#5a6470"/><rect x="' + (x + 2) + '" y="' + (y - 12) + '" width="18" height="12" rx="2" fill="#6c7682"/><rect x="' + (x + 2) + '" y="' + (y + 4) + '" width="2" height="10" fill="#4a525c"/><rect x="' + (x + 18) + '" y="' + (y + 4) + '" width="2" height="10" fill="#4a525c"/>';
    }
    let kids = "";
    [[70, "#e86a5a"], [150, BLUE], [230, GOLD], [310, GLO]].forEach((k, i) => {
      kids += '<g class="mm-hand mm-h' + (i % 3 + 1) + '"><circle cx="' + k[0] + '" cy="168" r="8" fill="#3a2a22"/><path d="M' + (k[0] - 10) + ' 196v-16q10 -6 20 0v16z" fill="' + k[1] + '"/><path d="M' + (k[0] + 8) + ' 182l8 -22" stroke="#3a2a22" stroke-width="4" stroke-linecap="round"/></g>';
    });
    return svg(
      '<rect width="400" height="260" fill="#1a1630"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#241e40"/>' +
      /* wooden cross on the back wall */
      '<g opacity=".14"><circle cx="200" cy="66" r="56" fill="' + GLO + '" class="mm-glo"/></g>' +
      '<rect x="193" y="22" width="14" height="70" fill="#c48a4a"/><rect x="172" y="40" width="56" height="13" fill="#c48a4a"/>' +
      /* banner */
      '<rect x="20" y="30" width="110" height="34" rx="3" fill="#2f2858"/><text x="75" y="52" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">YOUTH NIGHT</text>' +
      '<rect x="270" y="30" width="110" height="34" rx="3" fill="#2f2858"/><text x="325" y="52" text-anchor="middle" ' + font + ' font-size="10" fill="' + GLO + '">COME AS YOU ARE</text>' +
      /* stage */
      '<rect x="60" y="120" width="280" height="26" fill="#3a2e22"/><rect x="60" y="118" width="280" height="4" fill="#5a4630"/>' +
      '<rect x="196" y="90" width="8" height="30" fill="#222"/><rect x="188" y="86" width="24" height="6" rx="2" fill="#333"/>' +
      /* lights */
      '<path class="mm-beam" d="M110 0l-26 120h52z" fill="' + GOLD + '" opacity=".22"/><path class="mm-beam mm-beam2" d="M290 0l-26 120h52z" fill="' + GLO + '" opacity=".22"/>' +
      '<rect x="100" y="0" width="20" height="8" fill="#555"/><rect x="280" y="0" width="20" height="8" fill="#555"/>' +
      kids + chairs);
  }

  /* 3. GLO Fest - his own festival, Castro Valley */
  function mmglofest() {
    let crowd = "";
    for (let i = 0; i < 22; i++) {
      const x = 8 + i * 18, y = 214 + (i % 3) * 6, c = ["#1d2430", "#2a3242", "#232a38"][i % 3];
      crowd += '<circle cx="' + x + '" cy="' + y + '" r="8" fill="' + c + '"/><rect x="' + (x - 9) + '" y="' + (y + 6) + '" width="18" height="40" rx="6" fill="' + c + '"/>';
      if (i % 2 === 0) crowd += '<path class="mm-hand mm-h' + (i % 3 + 1) + '" d="M' + (x + 4) + ' ' + (y - 4) + 'l6 -22" stroke="' + c + '" stroke-width="5" stroke-linecap="round"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#mms3)"/>' +
      hills(118, "#6a7a46", "#56663a") +
      /* oak trees of Castro Valley */
      '<g fill="#2f4a2a"><circle cx="24" cy="126" r="18"/><circle cx="44" cy="120" r="14"/><circle cx="370" cy="124" r="18"/><circle cx="388" cy="132" r="12"/></g>' +
      /* stage truss */
      '<rect x="70" y="60" width="260" height="10" fill="#3a3a3a"/><rect x="70" y="60" width="10" height="130" fill="#3a3a3a"/><rect x="320" y="60" width="10" height="130" fill="#3a3a3a"/>' +
      '<rect x="80" y="70" width="240" height="110" fill="#111820"/>' +
      '<text class="mm-glo" x="200" y="136" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="58" fill="' + GLO + '">GLO</text>' +
      '<text class="mm-glo mm-glo2" x="200" y="164" text-anchor="middle" ' + font + ' font-size="14" fill="' + GOLD + '">FEST</text>' +
      '<rect x="80" y="180" width="240" height="12" fill="#2a2a2a"/>' +
      '<path class="mm-beam" d="M100 70l-30 140h60z" fill="' + GLO + '" opacity=".2"/><path class="mm-beam mm-beam2" d="M300 70l-30 140h60z" fill="' + GOLD + '" opacity=".2"/>' +
      /* speakers */
      '<rect x="40" y="130" width="26" height="60" fill="#1a1a1a"/><circle cx="53" cy="150" r="8" fill="#333"/><circle cx="53" cy="174" r="8" fill="#333"/>' +
      '<rect x="334" y="130" width="26" height="60" fill="#1a1a1a"/><circle cx="347" cy="150" r="8" fill="#333"/><circle cx="347" cy="174" r="8" fill="#333"/>' +
      crowd,
      sky("mms3", "#2a1a4a", "#e88a5a"));
  }

  /* 4. Oakland airport pickup - the all-black SUV at the curb ("Christlike") */
  function mmairport() {
    const suv = '<g class="mm-suv"><path d="M120 196v-30q0 -8 8 -10l24 -22h112q10 0 16 10l14 22q10 2 10 12v18z" fill="#0c0c0e"/>' +
      '<path d="M158 140h44v22h-62zM208 140h52l12 22h-64z" fill="#3a4654"/>' +
      '<rect x="296" y="174" width="8" height="6" fill="#fff2b0"/><rect x="120" y="176" width="6" height="6" fill="#c42a2a"/>' +
      '<circle cx="160" cy="198" r="13" fill="#1a1a1a"/><circle cx="160" cy="198" r="6" fill="#555"/><circle cx="270" cy="198" r="13" fill="#1a1a1a"/><circle cx="270" cy="198" r="6" fill="#555"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mms4)"/>' +
      '<g class="mm-plane"><path d="M40 60h70q10 0 14 4l-14 4h-70z" fill="#eef2f6"/><path d="M70 62l-14 -16h8l22 16zM70 66l-14 16h8l22 -16z" fill="#c8d0d8"/><path d="M40 60l-8 -10h6l10 10z" fill="#c8d0d8"/></g>' +
      /* terminal */
      '<rect x="0" y="92" width="400" height="88" fill="#cfd6dc"/><rect x="0" y="86" width="400" height="10" fill="#8e98a2"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (10 + i * 40) + '" y="104" width="30" height="50" fill="#7fa6c8"/>').join("") +
      '<rect x="0" y="154" width="400" height="8" fill="#8e98a2"/>' +
      '<rect x="20" y="112" width="120" height="26" rx="3" fill="#1a3a5c"/><text x="80" y="130" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">ARRIVALS</text>' +
      '<rect x="270" y="112" width="110" height="26" rx="3" fill="#1a3a5c"/><text x="325" y="130" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">OAKLAND</text>' +
      /* curb and road */
      '<rect x="0" y="180" width="400" height="16" fill="#b8b2a4"/><rect x="0" y="196" width="400" height="64" fill="#4a4e54"/><path d="M0 230h400" stroke="#f0d060" stroke-width="2" stroke-dasharray="18 12"/>' +
      suv +
      /* rolling suitcase */
      '<rect x="350" y="160" width="20" height="24" rx="3" fill="' + GLO + '"/><rect x="358" y="148" width="4" height="12" fill="#333"/><circle cx="354" cy="186" r="2" fill="#222"/><circle cx="366" cy="186" r="2" fill="#222"/>',
      sky("mms4", "#ffb070", "#ffe2b8"));
  }

  /* 5. Bailey Rd and W Leland Rd, Pittsburg - the golden Los Medanos Hills behind */
  function mmcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mms5)"/>' + birds + hills(66, "#d9b35a", "#c79c44") +
      /* wall */
      '<rect x="0" y="128" width="400" height="92" fill="#8a6e5a"/>' +
      Array.from({ length: 6 }, (_, r) => '<path d="M0 ' + (134 + r * 15) + 'h400" stroke="#76604e" stroke-width="1"/>').join("") +
      tag("GLO", 40, 156, 22, "#ffffff", -4) +
      tag("MILES MINNICK", 18, 194, 32, GLO, -5) +
      tag("P WORLD", 190, 214, 20, GOLD, -3) +
      '<g class="mm-sp"><circle cx="232" cy="168" r="2" fill="' + GLO + '"/><circle cx="238" cy="162" r="1.5" fill="' + GLO + '"/></g><g class="mm-sp mm-sp2"><circle cx="236" cy="174" r="1.6" fill="' + GLO + '"/></g>' +
      /* sidewalk */
      '<rect x="0" y="220" width="400" height="40" fill="#b9b4a6"/><rect x="0" y="220" width="400" height="4" fill="#d8d2c4"/>' +
      /* street sign pole */
      '<rect x="330" y="44" width="6" height="176" fill="#6a6e72"/>' +
      sign(274, 46, 118, "Bailey Rd") + sign(268, 72, 128, "W Leland Rd"),
      sky("mms5", "#7fc0ea", "#fbe7b8"));
  }

  window.SCENES = { mmbart, mmyouth, mmglofest, mmairport, mmcorner };
})();
