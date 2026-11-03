/* Mannie Fresh producer scenes */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-2.4s}.car3{animation-delay:-4.8s}' +
    '@keyframes carsL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}.bl4{animation-delay:1.05s}' +
    '@keyframes pad{0%,70%,100%{opacity:.25}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}' +
    '.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}.mt5{animation-delay:.3s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .5s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const pads = (x, y, c1, c2) => { let s = ""; for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) s += '<rect class="pd p' + (r * 4 + c + 1) + '" x="' + (x + c * 22) + '" y="' + (y + r * 18) + '" width="17" height="13" rx="2" fill="' + (r ? c2 : c1) + '"/>'; return s; };
  const turntable = (x, y, label) => '<rect x="' + x + '" y="' + y + '" width="110" height="70" rx="4" fill="#2c2c30" stroke="#55565c" stroke-width="2"/>' +
    '<g class="vn"><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="28" fill="#0b0b0b"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="20" fill="none" stroke="#2a2a2a"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="9" fill="' + label + '"/><rect x="' + (x + 46) + '" y="' + (y + 27) + '" width="4" height="5" fill="#fff"/></g>' +
    '<path d="M' + (x + 96) + ' ' + (y + 10) + 'l-14 30" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>';
  const brick = (x, y, w, h, c, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let yy = y + 8; yy < y + h; yy += 8) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>'; return s; };
  const GLD = "#ffd34d", PUR = "#7b3fa0", GRN = "#2fa84f";
  const X = '<style>@keyframes bead{0%{transform:translate(0,0);opacity:1}100%{transform:translate(var(--dx),-70px);opacity:0}}.bd{animation:bead 1.8s ease-out infinite}.bd2{animation-delay:.6s}.bd3{animation-delay:1.2s}' +
    '@keyframes floatx{0%{transform:translateX(-260px)}100%{transform:translateX(420px)}}.fx{animation:floatx 14s linear infinite}' +
    '@keyframes hop{0%,100%{transform:translateY(0)}25%{transform:translateY(-9px)}50%{transform:translateY(0)}70%{transform:translateY(-5px)}}.hp{animation:hop 1.4s ease-in-out infinite}' +
    '@keyframes sway{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.sw{transform-box:fill-box;transform-origin:50% 100%;animation:sway 1.6s ease-in-out infinite}.sw2{animation-delay:-.8s}</style>';
  const oak = (x, y, r) => '<rect x="' + (x - 5) + '" y="' + y + '" width="10" height="' + (r * 1.2) + '" fill="#4a3a2a"/><g fill="#2f5a34"><circle cx="' + x + '" cy="' + y + '" r="' + r + '"/><circle cx="' + (x - r * 0.8) + '" cy="' + (y + 6) + '" r="' + (r * 0.7) + '"/><circle cx="' + (x + r * 0.8) + '" cy="' + (y + 6) + '" r="' + (r * 0.7) + '"/></g>';
  const shotgun = (x, c, trim) => '<rect x="' + x + '" y="118" width="58" height="62" fill="' + c + '"/><path d="M' + (x - 4) + ' 120l33-22 33 22z" fill="#5a4a4a"/><rect x="' + (x + 8) + '" y="130" width="12" height="28" fill="#2a3a4a" stroke="' + trim + '" stroke-width="2"/><rect x="' + (x + 38) + '" y="130" width="12" height="28" fill="#2a3a4a" stroke="' + trim + '" stroke-width="2"/><rect x="' + (x + 23) + '" y="138" width="12" height="42" fill="#6a4a3a"/><rect x="' + (x - 4) + '" y="112" width="66" height="4" fill="' + trim + '"/>';

  /* 1. The Rampart-St. Claude streetcar rolling into its Elysian Fields stop: red car, the overhead wire, shotgun houses in pastel colors */
  function station() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#f1)"/><circle cx="330" cy="54" r="22" fill="#fff0b8"/>' +
      shotgun(10, "#f2b8c6", "#fff") + shotgun(82, "#a8d8c8", "#fff") + shotgun(154, "#f6d97a", "#fff") + shotgun(226, "#b8c8f0", "#fff") + shotgun(298, "#f4a86a", "#fff") +
      '<rect x="0" y="180" width="400" height="80" fill="#5a5a5e"/><path d="M0 214h400M0 232h400" stroke="#9a9a9a" stroke-width="3"/>' +
      '<path d="M0 64h400" stroke="#222" stroke-width="1.5"/>' +
      '<g class="anim-train"><rect x="0" y="146" width="230" height="64" rx="8" fill="#c8202a" stroke="#6a1015" stroke-width="2"/><rect x="0" y="140" width="230" height="10" rx="4" fill="#f2efe6"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (12 + i * 42) + '" y="156" width="32" height="24" rx="3" fill="#f6e6b0"/>').join("") +
      '<rect x="0" y="190" width="230" height="6" fill="' + GLD + '"/><circle cx="224" cy="200" r="3" fill="#fff6c2"/><path d="M140 140l30-76" stroke="#222" stroke-width="2"/>' +
      '<circle cx="40" cy="212" r="7" fill="#222"/><circle cx="190" cy="212" r="7" fill="#222"/></g>' +
      '<rect x="356" y="110" width="5" height="96" fill="#2f2f2f"/><rect x="326" y="108" width="66" height="34" rx="2" fill="#1b4f8c" stroke="#fff" stroke-width="1.5"/><text x="359" y="122" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">STREETCAR STOP</text><text x="359" y="136" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Elysian Fields</text>',
      sky("f1", "#f0a868", "#fbe2b0"));
  }

  /* 2. The Magnolia Projects ("the Nolia"), Uptown, home turf of the crew: red-brick blocks with white iron galleries, a car with rims hopping in the courtyard */
  function nolia() {
    const bld = (x, w) => { let s = brick(x, 70, w, 120, "#a5432c", "#8a3420"); for (let f = 0; f < 3; f++) { s += '<rect x="' + x + '" y="' + (98 + f * 34) + '" width="' + w + '" height="4" fill="#f2efe6"/>'; for (let b = x + 4; b < x + w; b += 10) s += '<rect x="' + b + '" y="' + (86 + f * 34) + '" width="2" height="12" fill="#f2efe6"/>'; for (let c = x + 12; c < x + w - 14; c += 30) s += '<rect x="' + c + '" y="' + (76 + f * 34) + '" width="12" height="16" fill="#2a2024"/>'; } return s + '<path d="M' + (x - 4) + ' 70h' + (w + 8) + 'l-6-10h-' + (w - 4) + 'z" fill="#5a3a30"/>'; };
    return svg(X +
      '<rect width="400" height="260" fill="url(#f2)"/>' + bld(10, 170) + bld(220, 170) + oak(200, 120, 30) +
      '<rect x="0" y="190" width="400" height="70" fill="#7c8a5a"/><rect x="0" y="216" width="400" height="44" fill="#4a4a4e"/>' +
      '<g class="hp"><rect x="140" y="214" width="120" height="22" rx="6" fill="' + PUR + '"/><path d="M164 214l14-16h50l16 16z" fill="' + PUR + '"/><path d="M172 212l9-11h20v11zM206 212v-11h20l12 11z" fill="#bfe0f5"/><path d="M142 224h116" stroke="' + GLD + '" stroke-width="2"/></g>' +
      [162, 238].map(x => '<circle cx="' + x + '" cy="240" r="9" fill="#111"/><circle class="vn" cx="' + x + '" cy="240" r="6" fill="#d8d8d8" stroke="#888" stroke-dasharray="3 2"/>').join("") +
      tag("THE NOLIA", 26, 184, 22, GLD, -4),
      sky("f2", "#6fb6e8", "#f4e2c0"));
  }

  /* 3. Mardi Gras on St. Charles Av: a purple, green and gold float rolls under the live oaks, beads flying, beads hanging in the branches */
  function mardigras() {
    let hang = ""; [[60, 96], [120, 84], [300, 90], [350, 100]].forEach(([x, y], i) => hang += '<path d="M' + (x - 14) + ' ' + y + 'q14 22 28 0" stroke="' + [PUR, GLD, GRN, GLD][i] + '" stroke-width="3" fill="none" stroke-dasharray="2 3"/>');
    return svg(X +
      '<rect width="400" height="260" fill="url(#f3)"/>' + oak(60, 70, 46) + oak(200, 60, 50) + oak(340, 70, 46) + hang +
      '<rect x="0" y="170" width="400" height="90" fill="#5a5a5e"/><rect x="0" y="166" width="400" height="6" fill="#bdb6a8"/>' +
      '<g class="fx"><rect x="0" y="146" width="220" height="44" rx="4" fill="' + PUR + '"/><path d="M0 146q20-14 40 0t40 0t40 0t40 0t40 0t40 0" fill="' + GLD + '"/><rect x="0" y="182" width="220" height="10" fill="' + GRN + '"/>' +
      '<rect x="30" y="112" width="70" height="36" fill="' + GLD + '"/><path d="M30 112l35-26 35 26z" fill="' + GRN + '"/><rect x="130" y="118" width="60" height="30" fill="' + GRN + '"/><circle cx="160" cy="112" r="16" fill="' + GLD + '"/>' +
      '<circle class="bd" style="--dx:-20px" cx="64" cy="108" r="4" fill="' + GLD + '"/><circle class="bd bd2" style="--dx:30px" cx="160" cy="98" r="4" fill="' + PUR + '"/><circle class="bd bd3" style="--dx:-10px" cx="110" cy="110" r="4" fill="' + GRN + '"/>' +
      '<circle cx="30" cy="196" r="9" fill="#222"/><circle cx="190" cy="196" r="9" fill="#222"/></g>' +
      '<path d="M0 230h400" stroke="#f2efe6" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<rect x="358" y="112" width="5" height="112" fill="#2f2f2f"/>' + sign(312, 112, 96, "St Charles Av"),
      sky("f3", "#5aa8e0", "#f2dcb0"));
  }

  /* 4. Jackson Square in the French Quarter: the white St. Louis Cathedral with its three black spires, the iron fence, brass bells and umbrellas of a second line swaying */
  function cathedral() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#f4)"/>' +
      '<rect x="30" y="110" width="80" height="90" fill="#e6c9a0"/><rect x="290" y="110" width="80" height="90" fill="#e6c9a0"/>' + [40, 66, 92, 300, 326, 352].map(x => '<rect x="' + x + '" y="124" width="10" height="20" fill="#3a4a5a"/><rect x="' + (x - 3) + '" y="148" width="16" height="3" fill="#222"/>').join("") +
      '<rect x="120" y="100" width="160" height="100" fill="#f4f1ea"/><path d="M120 100l80-26 80 26z" fill="#f4f1ea" stroke="#d8d2c4"/>' +
      '<rect x="182" y="60" width="36" height="44" fill="#f4f1ea"/><path d="M182 60l18-46 18 46z" fill="#2a2a30"/><rect x="198" y="4" width="4" height="12" fill="#2a2a30"/>' +
      '<rect x="120" y="70" width="28" height="34" fill="#f4f1ea"/><path d="M120 70l14-34 14 34z" fill="#2a2a30"/><rect x="252" y="70" width="28" height="34" fill="#f4f1ea"/><path d="M252 70l14-34 14 34z" fill="#2a2a30"/>' +
      '<circle cx="200" cy="80" r="8" fill="#e8e2d6" stroke="#8a8478"/><rect x="186" y="150" width="28" height="50" rx="12" fill="#5a3a2a"/><rect x="140" y="150" width="20" height="40" rx="9" fill="#5a3a2a"/><rect x="240" y="150" width="20" height="40" rx="9" fill="#5a3a2a"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#c8bca6"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(i => '<rect x="' + (4 + i * 20) + '" y="196" width="2" height="26" fill="#222"/>').join("") + '<rect x="0" y="198" width="400" height="3" fill="#222"/>' +
      '<g class="sw"><path d="M50 228v-34" stroke="#555" stroke-width="2"/><path d="M28 196q22-22 44 0z" fill="' + GLD + '"/></g><g class="sw sw2"><path d="M340 228v-34" stroke="#555" stroke-width="2"/><path d="M318 196q22-22 44 0z" fill="' + PUR + '"/></g>' +
      '<g class="sw"><path d="M140 240l40-22" stroke="#d4a72c" stroke-width="5"/><path d="M176 212l14-6v22z" fill="#d4a72c"/></g><g class="sw sw2"><circle cx="250" cy="226" r="16" fill="none" stroke="#d4a72c" stroke-width="5"/><path d="M262 214l14-16" stroke="#d4a72c" stroke-width="10"/></g>',
      sky("f4", "#7cbfe8", "#f6e8c8"));
  }

  /* 5. St Bernard Av and N Claiborne Av in the 7th Ward: green street signs, MANNIE FRESH tagged on the wall, the Superdome on the skyline */
  function corner() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#f5)"/>' +
      '<g fill="#6a6a78" opacity=".8"><rect x="40" y="60" width="26" height="70"/><rect x="300" y="50" width="30" height="80"/><rect x="340" y="70" width="22" height="60"/></g>' +
      '<path d="M100 130q90-76 180 0z" fill="#e8e6e0"/><path d="M100 130h180v-14q-90-6-180 0z" fill="#b08a5a"/><path d="M118 118q72-50 144 0" stroke="#c8c4bc" stroke-width="2" fill="none"/>' +
      '<rect x="0" y="126" width="400" height="98" fill="#e8d6b8"/><rect x="0" y="126" width="400" height="8" fill="#c8b490"/>' +
      tag("MANNIE FRESH", 22, 196, 40, GLD, -6) + tag("7TH WARD", 40, 220, 18, PUR, -3) + tag("STILL FLY", 220, 222, 18, GRN, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#bdb6a8"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(284, 98, 110, "St Bernard Av") + sign(284, 124, 110, "N Claiborne Av") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>',
      sky("f5", "#f0a060", "#f8d8a8"));
  }

  window.SCENES = { station: station, nolia: nolia, mardigras: mardigras, cathedral: cathedral, corner: corner };
})();
