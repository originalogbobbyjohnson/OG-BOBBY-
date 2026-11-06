/* santigold scenes (Regions tab: Philadelphia; Mount Airy, Northwest Philly, where Santi White grew up). CSS classes prefixed sg- (the page's own anim-train is kept).
   1 Mount Airy station on SEPTA Regional Rail's Chestnut Hill East Line (119 E Gowen Ave): the 1875 Stick-style station house with its flared jerkinhead roof, a silver Silverliner rolling in.
   2 Germantown Friends School on Germantown Ave (she graduated in 1993): the gray fieldstone Friends meetinghouse with white trim and pent eave, the school's brick hall beside it, leaves falling.
   3 Third Street Jazz in Old City, the record shop her father took her to every Saturday: a storefront with crates of LPs and a record spinning in the window, notes floating up.
   4 Wissahickon Valley Park, Mount Airy's backyard: the dark red Thomas Mill covered bridge over the Wissahickon Creek, stone and trees, ducks gliding.
   5 Germantown Ave and E Mt Airy Ave: green signs, the Belgian-block avenue with old trolley rails, SANTIGOLD tagged on a fieldstone wall, the seminary's gray Gothic stone tower behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sgglow{0%,100%{opacity:.45}50%{opacity:1}}.sg-glow{animation:sgglow 2.6s ease-in-out infinite}.sg-glow2{animation-delay:-1.3s}' +
    '@keyframes sgspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.sg-spin{transform-box:fill-box;transform-origin:50% 50%;animation:sgspin 2.4s linear infinite}' +
    '@keyframes sgnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.sg-note{animation:sgnote 3.4s linear infinite}.sg-n2{animation-delay:-1.1s}.sg-n3{animation-delay:-2.2s}' +
    '@keyframes sgcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.sg-car{animation:sgcar 8s linear infinite}' +
    '@keyframes sgbird{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.sg-bird{animation:sgbird 15s linear infinite}' +
    '@keyframes sgduck{0%,100%{transform:translateX(0)}50%{transform:translateX(60px)}}.sg-duck{animation:sgduck 9s ease-in-out infinite}' +
    '@keyframes sgwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.sg-wave{animation:sgwave 2.8s ease-in-out infinite}.sg-wave2{animation-delay:-1.4s}' +
    '@keyframes sgleaf{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(30px,120px) rotate(220deg);opacity:0}}.sg-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:sgleaf 4.4s linear infinite}.sg-l2{animation-delay:-1.5s}.sg-l3{animation-delay:-2.9s}' +
    '@keyframes sgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sg-sp{animation:sgspray 1.4s ease-out infinite}.sg-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#5a3e28"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  /* fieldstone texture: irregular gray stones */
  const stones = (x0, y0, w, h, seed) => {
    let s = '', k = seed || 1;
    const cols = ["#8d8a82", "#a19d93", "#7b786f", "#b0aba0", "#938e84"];
    for (let y = y0; y < y0 + h - 4; y += 9) {
      for (let x = x0 + ((y / 9) % 2) * 6; x < x0 + w - 6; x += 15) {
        k = (k * 37 + 11) % 97;
        const ww = Math.min(11 + (k % 5), x0 + w - x - 1);
        s += '<rect x="' + x + '" y="' + (y + 1) + '" width="' + ww + '" height="7" rx="2.5" fill="' + cols[k % 5] + '"/>';
      }
    }
    return s;
  };
  const GOLD = "#f2b705", PINK = "#e5397a", TEAL = "#2ec4b6", RR = "#91456c";

  /* 1. Mount Airy station, Chestnut Hill East Line */
  function sgstation() {
    const car = (x) => '<rect x="' + x + '" y="132" width="196" height="62" rx="6" fill="#c9ced4" stroke="#7a828a" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (x + 12 + i * 30) + '" y="140" width="22" height="20" rx="2" fill="#1f2830"/>').join("") +
      '<rect x="' + x + '" y="166" width="196" height="4" fill="#c8102e"/><rect x="' + x + '" y="171" width="196" height="4" fill="#1f4e9a"/>' +
      '<rect x="' + (x + 88) + '" y="140" width="20" height="50" fill="#a9b0b8" stroke="#7a828a"/>';
    const train = '<g class="anim-train">' + car(4) + car(204) +
      '<rect x="394" y="138" width="6" height="30" fill="#1f2830"/>' +
      '<rect x="206" y="124" width="70" height="9" rx="2" fill="#111"/><text x="241" y="131.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb000">CHESTNUT HILL EAST</text>' +
      '<circle cx="40" cy="198" r="7" fill="#2a2a2a"/><circle cx="160" cy="198" r="7" fill="#2a2a2a"/><circle cx="240" cy="198" r="7" fill="#2a2a2a"/><circle cx="360" cy="198" r="7" fill="#2a2a2a"/></g>';
    /* 1875 Stick-style station house: cream board walls, dark red stick trim, flared hipped/jerkinhead roof */
    const house = '<rect x="120" y="66" width="160" height="60" fill="#e9dcc0"/>' +
      '<path d="M120 66v60M160 66v60M200 66v60M240 66v60M280 66v60M120 96h160" stroke="#7a2e2a" stroke-width="3"/>' +
      '<path d="M128 72l24 18M152 72l-24 18M248 72l24 18M272 72l-24 18" stroke="#7a2e2a" stroke-width="2"/>' +
      [170, 210].map(x => '<rect x="' + x + '" y="72" width="20" height="20" fill="#2c3440" stroke="#f4ecd8" stroke-width="2"/>').join("") +
      '<rect x="168" y="102" width="24" height="24" fill="#5a2a22"/><rect x="208" y="102" width="24" height="24" fill="#2c3440" stroke="#f4ecd8" stroke-width="2"/>' +
      '<path d="M98 70q14 -6 26 -30l20 -14h112l20 14q12 24 26 30z" fill="#5a3a3a" stroke="#3a2424" stroke-width="2"/>' +
      '<path d="M144 26h112l-10 -10h-92z" fill="#4a2e2e"/>' +
      '<path d="M200 6v12" stroke="#3a2424" stroke-width="3"/><rect x="190" y="2" width="20" height="6" fill="#3a2424"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sg-s1)"/>' +
      '<g class="sg-bird"><path d="M0 30q5 -5 10 0q5 -5 10 0" fill="none" stroke="#3a3a4a" stroke-width="1.5"/></g>' +
      tree(30, 100, 2.2, "#4f7d3a") + tree(370, 98, 2.2, "#5b8a40") + tree(84, 108, 1.4, "#3f6e34") + tree(322, 110, 1.4, "#3f6e34") +
      house +
      '<rect x="0" y="126" width="400" height="8" fill="#b8b2a6"/>' +
      '<rect x="0" y="194" width="400" height="8" fill="#6a5a4a"/><path d="M0 200h400M0 206h400" stroke="#8a8f96" stroke-width="2"/>' +
      train +
      '<rect x="0" y="208" width="400" height="52" fill="#a8a29a"/><rect x="0" y="208" width="400" height="4" fill="#f0d24a"/>' +
      '<rect x="60" y="220" width="280" height="32" rx="3" fill="#111" stroke="#555" stroke-width="1.5"/>' + badge(72, 236, "RR", RR) +
      '<text x="214" y="243" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">Mount Airy</text>',
      sky("sg-s1", "#8ec5e8", "#f3e7c8"));
  }

  /* 2. Germantown Friends School */
  function sggfs() {
    return svg(
      '<rect width="400" height="260" fill="url(#sg-s2)"/>' +
      tree(22, 150, 1.8, "#c0702a") + tree(384, 150, 1.8, "#d9902a") +
      /* school brick hall */
      '<rect x="236" y="62" width="140" height="122" fill="#9a4a36"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M236 ' + (68 + i * 8.5) + 'h140" stroke="#843e2e" stroke-width="1"/>').join("") +
      [76, 112, 148].map(y => [250, 282, 314, 346].map(x => '<rect x="' + x + '" y="' + y + '" width="16" height="24" fill="#2c3440" stroke="#f4ecd8" stroke-width="2"/>').join("")).join("") +
      '<path d="M228 64l78 -30l78 30z" fill="#4a4a50"/><rect x="298" y="20" width="16" height="18" fill="#f4ecd8"/><path d="M296 20l10 -10l10 10z" fill="#4a4a50"/>' +
      /* fieldstone meetinghouse */
      '<rect x="20" y="96" width="210" height="88" fill="#8d8a82"/>' + stones(20, 96, 210, 88, 3) +
      '<path d="M12 98l44 -40h138l44 40z" fill="#3e3e44" stroke="#2a2a2e" stroke-width="2"/>' +
      '<rect x="14" y="134" width="222" height="7" fill="#f4f1e8"/><path d="M14 134l-4 7h230l-4 -7z" fill="#5a5a60"/>' +
      [40, 84, 156, 196].map(x => '<rect x="' + x + '" y="106" width="18" height="24" fill="#2c3440" stroke="#f4f1e8" stroke-width="2.5"/><path d="M' + (x + 9) + ' 106v24M' + x + ' 118h18" stroke="#f4f1e8" stroke-width="1.5"/>').join("") +
      '<rect x="112" y="148" width="26" height="36" fill="#f4f1e8"/><rect x="116" y="152" width="18" height="32" fill="#4a5a4a"/>' +
      '<rect x="40" y="150" width="18" height="22" fill="#2c3440" stroke="#f4f1e8" stroke-width="2.5"/><rect x="196" y="150" width="18" height="22" fill="#2c3440" stroke="#f4f1e8" stroke-width="2.5"/>' +
      '<path d="M124 50v8" stroke="#2a2a2e" stroke-width="5"/>' +
      '<rect x="0" y="184" width="400" height="76" fill="#6f8f4a"/><path d="M118 184l-30 76h76l-24 -76z" fill="#c9bfa8"/>' +
      '<rect x="250" y="196" width="120" height="22" rx="3" fill="#1d3b2a" stroke="#f4f1e8" stroke-width="1.5"/><text x="310" y="211" text-anchor="middle" ' + font + ' font-size="9" fill="#f4f1e8">GERMANTOWN FRIENDS</text>' +
      '<path d="M266 218v20M354 218v20" stroke="#3a3a3a" stroke-width="3"/>' +
      '<g class="sg-leaf"><path d="M60 40q6 -6 10 0q-4 6 -10 0z" fill="#d9902a"/></g><g class="sg-leaf sg-l2"><path d="M200 30q6 -6 10 0q-4 6 -10 0z" fill="#c0502a"/></g><g class="sg-leaf sg-l3"><path d="M340 50q6 -6 10 0q-4 6 -10 0z" fill="' + GOLD + '"/></g>',
      sky("sg-s2", "#9cc6e4", "#f6ecd2"));
  }

  /* 3. Third Street Jazz, Old City */
  function sgjazz() {
    const crate = (x, y, c) => '<rect x="' + x + '" y="' + y + '" width="50" height="28" fill="#8a5a32" stroke="#5a3a1e" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (x + 4 + i * 7.5) + '" y="' + (y - 10) + '" width="6" height="14" fill="' + [c, "#222", "#e5e0d0", c, "#3a6ea5", "#222"][i] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sg-s3)"/>' +
      /* Old City brick front */
      '<rect x="0" y="20" width="400" height="200" fill="#8e4636"/>' + Array.from({ length: 24 }, (_, i) => '<path d="M0 ' + (24 + i * 8) + 'h400" stroke="#7a3a2c" stroke-width="1"/>').join("") +
      [40, 120, 280, 340].map(x => '<rect x="' + x + '" y="30" width="34" height="40" fill="#2c3440" stroke="#f4ecd8" stroke-width="2.5"/><rect x="' + (x - 3) + '" y="70" width="40" height="5" fill="#d8cfbe"/>').join("") +
      /* awning */
      '<path d="M40 86h320l14 24h-348z" fill="#1d2a3a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (44 + i * 28) + ' 110q14 8 28 0" fill="#1d2a3a"/>').join("") +
      '<text x="200" y="104" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '" letter-spacing="3">JAZZ &amp; RECORDS</text>' +
      /* storefront */
      '<rect x="50" y="118" width="300" height="102" fill="#2a1e18"/><rect x="58" y="124" width="180" height="88" fill="#f4d48a" opacity=".9"/>' +
      '<rect x="252" y="124" width="90" height="96" fill="#3a2a22"/><rect x="262" y="132" width="70" height="60" fill="#f4d48a" opacity=".85"/><circle cx="324" cy="172" r="3" fill="' + GOLD + '"/>' +
      /* turntable in window */
      '<rect x="76" y="150" width="84" height="56" rx="4" fill="#2a2a2a"/><g class="sg-spin"><circle cx="112" cy="178" r="22" fill="#111"/><circle cx="112" cy="178" r="15" fill="none" stroke="#333" stroke-width="1"/><circle cx="112" cy="178" r="7" fill="' + PINK + '"/><circle cx="112" cy="178" r="1.5" fill="#eee"/><path d="M112 162v4" stroke="#555"/></g>' +
      '<path d="M148 156l-10 26" stroke="#bbb" stroke-width="2.5"/><circle cx="148" cy="156" r="3" fill="#888"/>' +
      crate(170, 182, TEAL) + crate(176, 152, PINK) +
      '<g class="sg-note"><text x="96" y="140" font-size="16" fill="' + PINK + '">&#9834;</text></g><g class="sg-note sg-n2"><text x="130" y="144" font-size="14" fill="' + TEAL + '">&#9835;</text></g><g class="sg-note sg-n3"><text x="200" y="138" font-size="15" fill="' + GOLD + '">&#9834;</text></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#9e968a"/><rect x="0" y="220" width="400" height="4" fill="#cfc7b8"/>' +
      '<rect x="372" y="120" width="5" height="104" fill="#2f2f2f"/>' + sign(316, 124, 76, "N 3rd St"),
      sky("sg-s3", "#f2a65a", "#fbe0a8"));
  }

  /* 4. Wissahickon Valley: Thomas Mill covered bridge */
  function sgvalley() {
    return svg(
      '<rect width="400" height="260" fill="url(#sg-s4)"/>' +
      '<path d="M0 120q60 -40 120 -20q60 -30 140 0q70 -30 140 -10v80h-400z" fill="#3f6e34"/>' +
      tree(30, 120, 2.4, "#2f5a2a") + tree(110, 108, 2, "#4f7d3a") + tree(300, 104, 2.2, "#3f6e34") + tree(372, 116, 2.4, "#2f5a2a") +
      /* schist banks */
      '<path d="M0 150h120l20 30h-140z" fill="#6e6a62"/><path d="M400 150h-120l-20 30h140z" fill="#6e6a62"/>' +
      /* creek */
      '<rect x="0" y="178" width="400" height="82" fill="#4a7a8a"/>' +
      '<g class="sg-wave"><path d="M20 196q10 -4 20 0M120 214q10 -4 20 0M240 200q10 -4 20 0M330 226q10 -4 20 0M60 240q10 -4 20 0" stroke="#bfe0e8" stroke-width="2" fill="none"/></g>' +
      '<g class="sg-wave sg-wave2"><path d="M80 206q10 -4 20 0M190 236q10 -4 20 0M290 210q10 -4 20 0M360 244q10 -4 20 0" stroke="#9fd0dc" stroke-width="2" fill="none"/></g>' +
      /* covered bridge: dark red board-and-batten, gray shingle roof, stone abutments */
      '<rect x="96" y="150" width="34" height="34" fill="#7b786f"/>' + stones(96, 150, 34, 34, 5) +
      '<rect x="270" y="150" width="34" height="34" fill="#7b786f"/>' + stones(270, 150, 34, 34, 7) +
      '<rect x="110" y="112" width="180" height="42" fill="#7e2a22"/>' + Array.from({ length: 22 }, (_, i) => '<path d="M' + (114 + i * 8) + ' 112v42" stroke="#5e1e18" stroke-width="1.5"/>').join("") +
      '<path d="M100 114l20 -24h160l20 24z" fill="#5a5a5e" stroke="#3a3a3e" stroke-width="2"/>' +
      '<rect x="112" y="122" width="176" height="6" fill="#2a1410" opacity=".7"/>' +
      '<rect x="104" y="152" width="192" height="6" fill="#4a2a1e"/>' +
      '<g class="sg-duck"><path d="M150 220q8 -8 18 0q-2 6 -18 0z" fill="#6a4a2a"/><circle cx="168" cy="214" r="4" fill="#2f6a3a"/><path d="M171 214l5 1" stroke="#e8a030" stroke-width="2"/></g>' +
      '<g class="sg-duck" style="animation-delay:-4s"><path d="M230 236q8 -8 18 0q-2 6 -18 0z" fill="#6a4a2a"/><circle cx="248" cy="230" r="4" fill="#6a4a2a"/><path d="M251 230l5 1" stroke="#e8a030" stroke-width="2"/></g>' +
      '<g class="sg-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" fill="none" stroke="#2a3a2a" stroke-width="1.5"/></g>',
      sky("sg-s4", "#a8d4e8", "#e8f2e0"));
  }

  /* 5. Germantown Ave & E Mt Airy Ave */
  function sgcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sg-s5)"/>' +
      /* seminary's gray Gothic stone tower behind */
      '<rect x="170" y="30" width="56" height="110" fill="#8a8780"/>' + stones(170, 30, 56, 110, 9) +
      '<path d="M166 30h64v-8h-8v-6h-8v6h-8v-6h-8v6h-8v-6h-8v6h-8v-6h-8v6h-8z" fill="#7b786f"/>' +
      '<path d="M186 60v-12q12 -14 24 0v12z" fill="#2c3440"/><path d="M186 96v-14q12 -14 24 0v14z" fill="#2c3440"/>' +
      '<path d="M166 22v-10M230 22v-10" stroke="#7b786f" stroke-width="5"/>' +
      tree(90, 120, 2.6, "#4f7d3a") + tree(310, 118, 2.6, "#3f6e34") +
      /* fieldstone wall with her tag */
      '<rect x="0" y="122" width="400" height="88" fill="#8d8a82"/>' + stones(0, 122, 400, 88, 11) +
      '<rect x="0" y="118" width="400" height="6" fill="#6a665e"/>' +
      tag("SANTIGOLD", 16, 180, 42, GOLD, -6) + tag("CREATOR", 22, 206, 18, PINK, -3) + tag("STIFFED", 132, 207, 20, TEAL, -3) + tag("SANTI", 252, 200, 22, "#fff", -4) +
      /* Belgian block avenue with trolley rails */
      '<rect x="0" y="210" width="400" height="50" fill="#6a645a"/>' +
      Array.from({ length: 6 }, (_, r) => Array.from({ length: 34 }, (_, i) => '<rect x="' + (i * 12 + (r % 2) * 6 - 4) + '" y="' + (212 + r * 8) + '" width="10" height="6" rx="1.5" fill="' + ["#7a746a", "#857e72", "#6f695f"][(i + r) % 3] + '"/>').join("")).join("") +
      '<path d="M0 228h400M0 248h400" stroke="#b8b8b8" stroke-width="2.5"/>' +
      '<g class="sg-car"><rect x="0" y="230" width="58" height="14" rx="5" fill="' + TEAL + '"/><rect x="12" y="222" width="32" height="10" rx="3" fill="' + TEAL + '"/><circle cx="12" cy="244" r="4" fill="#111"/><circle cx="46" cy="244" r="4" fill="#111"/></g>' +
      '<rect x="356" y="98" width="6" height="120" fill="#2f2f2f"/>' + sign(278, 100, 122, "Germantown Ave") + sign(298, 126, 102, "E Mt Airy Ave") +
      '<g class="sg-sp"><circle cx="210" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="sg-sp sg-sp2"><circle cx="216" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("sg-s5", "#e98a5a", "#fbd9a0"));
  }

  window.SCENES = { sgstation: sgstation, sggfs: sggfs, sgjazz: sgjazz, sgvalley: sgvalley, sgcorner: sgcorner };
})();
