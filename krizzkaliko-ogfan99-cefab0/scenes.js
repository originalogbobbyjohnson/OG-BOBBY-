/* krizzkaliko scenes (Regions tab: Kansas City; South KC). CSS classes and ids prefixed kk- (the page's own anim-train is kept).
   1 RideKC Troost MAX pulling into the 3-Trails Transit Center on Blue Ridge Blvd, South KC.
   2 St. Stephen Baptist Church on Truman Rd, where his mother led the choir: brick church, stained glass, the choir's notes floating up.
   3 The J.C. Nichols Memorial Fountain on the Country Club Plaza: bronze horses rearing in the round pool, water arcing, the Plaza tower behind.
   4 Liberty Memorial at night: the tall limestone tower with the orange steam "flame" on top, the two guardian figures at its base.
   5 Blue Ridge Blvd and Bannister Rd by the transit center: green signs, KRIZZ tagged on the wall, the Bartle Hall sky-station pylons on the skyline behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kkflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.kk-flk{animation:kkflick 2.2s infinite}' +
    '@keyframes kknote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(-20px,-80px);opacity:0}}.kk-note{animation:kknote 3.2s ease-out infinite}.kk-note2{animation-delay:-1.1s}.kk-note3{animation-delay:-2.2s}' +
    '@keyframes kkjet{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.86)}}.kk-jet{transform-box:fill-box;transform-origin:50% 100%;animation:kkjet 1.4s ease-in-out infinite}.kk-jet2{animation-delay:-.7s}' +
    '@keyframes kkrip{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}.kk-rip{animation:kkrip 2.6s ease-in-out infinite}' +
    '@keyframes kksteam{0%{transform:translate(0,0) scale(.7);opacity:.95}100%{transform:translate(6px,-34px) scale(1.5);opacity:0}}.kk-st{transform-box:fill-box;transform-origin:50% 50%;animation:kksteam 2s ease-out infinite}.kk-st2{animation-delay:-.7s}.kk-st3{animation-delay:-1.4s}' +
    '@keyframes kkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kk-sp{animation:kkspray 1.4s ease-out infinite}.kk-sp2{animation-delay:.45s}' +
    '@keyframes kkcar{from{transform:translateX(-120px)}to{transform:translateX(440px)}}.kk-car{animation:kkcar 7s linear infinite}' +
    '@keyframes kkblink{0%,100%{opacity:.2}50%{opacity:1}}.kk-bl{animation:kkblink 1.8s ease-in-out infinite}.kk-bl2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle cx="' + ((i * 71) % 400) + '" cy="' + (8 + (i * 41) % 70) + '" r="' + (i % 3 ? 0.8 : 1.3) + '" fill="#fff" opacity=".7"/>').join("");
  const MAX = "#1b75bb", TEAL = "#21b2a6", ORANGE = "#ff6b35", SKY = "#7fd1ff", GOLD = "#ffd166";

  /* 1. Troost MAX at the 3-Trails Transit Center */
  function kkstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1b2633"/>').join("");
    const bus = '<g class="anim-train"><rect x="36" y="116" width="316" height="66" rx="12" fill="#f4f6f8" stroke="#7d868f" stroke-width="2"/>' + win +
      '<path d="M36 158h316v12H36z" fill="' + MAX + '"/><path d="M36 170h316v4H36z" fill="' + TEAL + '"/>' +
      '<rect x="326" y="124" width="22" height="40" rx="3" fill="#2b3640"/><rect x="292" y="118" width="60" height="9" rx="2" fill="#111"/><text x="322" y="125.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">TROOST MAX</text>' +
      '<circle cx="90" cy="184" r="11" fill="#222"/><circle cx="90" cy="184" r="4" fill="#888"/><circle cx="300" cy="184" r="11" fill="#222"/><circle cx="300" cy="184" r="4" fill="#888"/><circle cx="348" cy="172" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kks1)"/>' +
      '<path d="M10 58Q200 30 390 58v8H10z" fill="' + MAX + '"/><path d="M10 66h380" stroke="#0e4f82" stroke-width="2"/>' +
      [30, 130, 270, 370].map(x => '<rect x="' + (x - 3) + '" y="66" width="6" height="52" fill="#8a96a3"/>').join("") +
      '<rect x="150" y="76" width="100" height="34" fill="#2b3a4a" stroke="#8a96a3" stroke-width="2"/><rect x="156" y="82" width="88" height="22" fill="#9fd7ff" opacity=".35"/>' +
      '<rect x="0" y="116" width="400" height="80" fill="#55565a"/><path d="M0 150h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#b9b3a6"/><path d="M0 196h400" stroke="#8f897c" stroke-width="3"/>' +
      '<rect x="374" y="150" width="5" height="70" fill="#4a4f55"/><rect x="359" y="134" width="36" height="20" rx="2" fill="' + MAX + '"/><text x="377" y="148" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MAX</text>' +
      '<rect x="40" y="204" width="300" height="44" rx="3" fill="#111"/><text x="52" y="222" ' + font + ' font-size="13" fill="#fff">3-Trails Transit Center</text><text x="52" y="239" ' + font + ' font-size="10.5" fill="#cfd8e0">Blue Ridge Blvd · South KC</text>' +
      badge(254, 234, "MAX", MAX),
      sky("kks1", "#3a4f8a", "#f6b98a"));
  }

  /* 2. St. Stephen Baptist Church on Truman Rd */
  function kkchurch() {
    const note = (x, y, cls, c) => '<g class="kk-note ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="4" fill="' + c + '"/><path d="M' + (x + 3.5) + ' ' + y + 'v-16l8 4" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kks2)"/>' +
      '<rect x="80" y="90" width="240" height="110" fill="#9a4a36"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M80 ' + (98 + i * 8) + 'h240" stroke="#843d2c" stroke-width="1"/>').join("") +
      '<path d="M70 92L200 40L330 92z" fill="#5a2e24"/><path d="M76 92h248" stroke="#e8dcc8" stroke-width="4"/>' +
      '<rect x="182" y="40" width="36" height="44" fill="#f2ece0"/><path d="M178 42L200 18L222 42z" fill="#f2ece0"/><rect x="198" y="4" width="4" height="16" fill="' + GOLD + '"/><rect x="193" y="9" width="14" height="4" fill="' + GOLD + '"/>' +
      '<rect x="192" y="50" width="16" height="20" rx="8" fill="#3a2a22"/>' +
      '<circle cx="200" cy="112" r="20" fill="#2a2440" stroke="#e8dcc8" stroke-width="3"/>' +
      '<path d="M200 92v40M180 112h40M186 98l28 28M214 98l-28 28" stroke="#e8dcc8" stroke-width="1.5"/>' +
      '<g class="kk-bl"><circle cx="200" cy="112" r="16" fill="#ff6b9a" opacity=".35"/></g>' +
      [110, 150, 250, 290].map((x, i) => '<path d="M' + x + ' 170v-30a10 10 0 0 1 20 0v30z" fill="' + ["#4fb3e8", "#ffd166", "#ff6b9a", "#7fe0a0"][i] + '" stroke="#e8dcc8" stroke-width="2"/>').join("") +
      '<path d="M180 200v-34a20 20 0 0 1 40 0v34z" fill="#5a3f2a" stroke="#e8dcc8" stroke-width="3"/><path d="M200 166v34" stroke="#3a2a1a" stroke-width="2"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#6e6a64"/><path d="M160 200h80v8h-80zM150 208h100v8H150z" fill="#cfc8bb"/>' +
      note(120, 150, "", GOLD) + note(200, 140, "kk-note2", SKY) + note(290, 150, "kk-note3", "#ff8fb1") +
      '<rect x="8" y="232" width="196" height="18" rx="3" fill="#000" opacity=".55"/><text x="106" y="245" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">ST. STEPHEN BAPTIST · TRUMAN RD</text>',
      sky("kks2", "#6aa8d8", "#f6e2bc"));
  }

  /* 3. J.C. Nichols Memorial Fountain, Country Club Plaza */
  function kkfountain() {
    const horse = (x, flip) => '<g transform="translate(' + x + ' 150) scale(' + (flip ? -1 : 1) + ' 1)"><path d="M-18 0q-2-14 8-20l6-14q4-8 10-6l6 4-4 4 4 6-8 2-2 10q10 2 12 14l-6 4-4-8-8 2-4 10h-6l2-12z" fill="#4a6b5a" stroke="#2e4a3c" stroke-width="1.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kks3)"/>' +
      '<rect x="300" y="30" width="40" height="110" fill="#e0c79a"/><path d="M296 30h48l-8-18h-32z" fill="#b8613a"/><rect x="314" y="40" width="12" height="20" rx="6" fill="#5a3f2a"/><rect x="312" y="70" width="16" height="10" fill="#c8a878"/>' +
      '<rect x="0" y="100" width="300" height="40" fill="#e8d2a6"/><path d="M0 100h300" stroke="#b8613a" stroke-width="6"/>' + [20, 70, 120, 170, 220, 270].map(x => '<rect x="' + x + '" y="112" width="18" height="22" rx="9" fill="#5a3f2a"/>').join("") +
      '<rect x="0" y="140" width="400" height="120" fill="#8a8578"/>' +
      '<ellipse cx="200" cy="196" rx="170" ry="34" fill="#c9c2b2"/><ellipse cx="200" cy="194" rx="156" ry="28" fill="#3f8fb0"/>' +
      '<g class="kk-rip"><path d="M80 194h50M160 204h70M260 190h60M120 212h50" stroke="#bfe6f4" stroke-width="2" stroke-linecap="round" opacity=".6"/></g>' +
      '<rect x="186" y="120" width="28" height="60" fill="#c9c2b2"/><ellipse cx="200" cy="120" rx="22" ry="6" fill="#d8d2c4"/>' +
      '<g class="kk-jet"><path d="M200 116q0-40 0-60" stroke="#dff4ff" stroke-width="5" stroke-linecap="round"/></g>' +
      '<g class="kk-jet kk-jet2"><path d="M110 176q30-60 80-56M290 176q-30-60-80-56" stroke="#dff4ff" stroke-width="3" fill="none" opacity=".85"/></g>' +
      horse(112, false) + horse(288, true) +
      '<rect x="8" y="232" width="226" height="18" rx="3" fill="#000" opacity=".55"/><text x="121" y="245" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">J.C. NICHOLS FOUNTAIN · THE PLAZA</text>',
      sky("kks3", "#78b6e6", "#f2e6c8"));
  }

  /* 4. Liberty Memorial at night */
  function kkliberty() {
    return svg(
      '<rect width="400" height="260" fill="url(#kks4)"/>' + stars(36) +
      '<g fill="#2a2a44"><rect x="0" y="150" width="60" height="40"/><rect x="20" y="120" width="20" height="30"/><rect x="340" y="140" width="60" height="50"/><rect x="356" y="110" width="18" height="30"/></g>' +
      '<rect x="60" y="170" width="280" height="24" fill="#cdbf9e"/><path d="M60 170h280" stroke="#a89878" stroke-width="3"/>' +
      '<path d="M180 170L186 50h28l6 120z" fill="#d8caa8"/><path d="M200 50h14l6 120h-20z" fill="#bfae8a"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (184 - i * 0.2) + ' ' + (62 + i * 22) + 'h' + (32 + i * 1.2) + '" stroke="#a89878" stroke-width="1"/>').join("") +
      '<rect x="184" y="40" width="32" height="12" fill="#cdbf9e"/><path d="M186 40h28l-4-8h-20z" fill="#bfae8a"/>' +
      '<g class="kk-flk"><ellipse cx="200" cy="28" rx="12" ry="8" fill="#ff8a2a" opacity=".85"/></g>' +
      '<circle class="kk-st" cx="200" cy="26" r="5" fill="#ffe2b8" opacity=".6"/><circle class="kk-st kk-st2" cx="200" cy="26" r="5" fill="#ffd0a0" opacity=".5"/><circle class="kk-st kk-st3" cx="200" cy="26" r="5" fill="#fff0d8" opacity=".5"/>' +
      [128, 272].map(x => '<rect x="' + (x - 22) + '" y="150" width="44" height="20" fill="#cdbf9e"/><path d="M' + (x - 18) + ' 150v-12h10l4-10h8l4 10h10v12z" fill="#bfae8a"/>').join("") +
      '<path d="M0 194h400v66H0z" fill="#23402e"/><path d="M0 194h400" stroke="#2f5a3e" stroke-width="3"/>' +
            '<rect x="112" y="236" width="176" height="18" rx="3" fill="#000" opacity=".55"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">LIBERTY MEMORIAL · KANSAS CITY</text>',
      sky("kks4", "#0d1030", "#4a2a5a"));
  }

  /* 5. Blue Ridge Blvd and Bannister Rd, Bartle Hall pylons behind */
  function kkcorner() {
    const pylon = x => '<path d="M' + (x - 4) + ' 128L' + x + ' 30L' + (x + 4) + ' 128z" fill="#8b93a6"/><g transform="translate(' + x + ' 26)"><path d="M-8 4h16l-4 -14h-8z" fill="#cfd5e0"/><path d="M-1 -10v-10" stroke="#cfd5e0" stroke-width="2"/><circle class="kk-bl" cx="0" cy="-20" r="2.5" fill="#ff5a5a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kks5)"/>' +
      '<g fill="#3a3550"><rect x="90" y="84" width="40" height="44"/><rect x="134" y="70" width="26" height="58"/><rect x="250" y="80" width="34" height="48"/><rect x="290" y="96" width="50" height="32"/></g>' +
      '<rect x="160" y="104" width="90" height="24" fill="#4a4560"/>' + pylon(170) + pylon(196) + pylon(222) + pylon(240) +
      '<rect x="0" y="126" width="400" height="98" fill="#6b5a78"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#5a4a66" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#5a4a66" stroke-width="1"/>').join("")).join("") +
      tag("KRIZZ", 20, 196, 58, ORANGE, -6) + tag("KALI BABY", 40, 140, 18, SKY, -4) + tag("EAR HOUSE", 196, 214, 20, GOLD, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="kk-car"><rect x="0" y="234" width="64" height="16" rx="5" fill="' + TEAL + '"/><rect x="14" y="226" width="34" height="11" rx="4" fill="#157a72"/><circle cx="14" cy="251" r="5" fill="#111"/><circle cx="50" cy="251" r="5" fill="#111"/></g>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(262, 98, 134, "Blue Ridge Blvd") + sign(270, 124, 118, "Bannister Rd") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="kk-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="kk-sp"><circle cx="196" cy="168" r="3" fill="' + ORANGE + '" opacity=".7"/></g><g class="kk-sp kk-sp2"><circle cx="202" cy="162" r="2" fill="' + ORANGE + '" opacity=".6"/></g>',
      sky("kks5", "#2a3466", "#f0a070"));
  }

  window.SCENES = { kkstop: kkstop, kkchurch: kkchurch, kkfountain: kkfountain, kkliberty: kkliberty, kkcorner: kkcorner };
})();
