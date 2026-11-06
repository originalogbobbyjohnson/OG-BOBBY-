/* reks scenes (Regions tab: Boston + New England; Lawrence, Mass.). CSS classes and ids prefixed rk- (the page's own anim-train is kept).
   1 MeVa Transit route 1 at Jackson St / Park St, Lawrence: triple-deckers, the bus stop flag, the 1 bus rolling in.
   2 UMass Amherst, where he went to school before he left to record: the tall red-brick W.E.B. Du Bois Library tower, fall leaves.
   3 The Massachusetts State House on Beacon Hill (his song "Massachusetts"): red brick, white columns, the gold dome, the flag.
   4 Den Rock Park, Lawrence: the gray granite ledges over the trees, a hawk circling.
   5 Union St and Canal St, Lawrence: green signs, REKS tagged on mill brick, the Duck Bridge truss over the Merrimack behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rkflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.rk-flk{animation:rkflick 2.2s infinite}.rk-flk2{animation-delay:.7s}' +
    '@keyframes rkcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.rk-car{animation:rkcar 8s linear infinite}.rk-car2{animation-delay:-4s}' +
    '@keyframes rkleaf{0%{transform:translate(0,-30px) rotate(0)}100%{transform:translate(40px,290px) rotate(360deg)}}.rk-leaf{transform-box:fill-box;animation:rkleaf 7s linear infinite}.rk-leaf2{animation-delay:-2.3s}.rk-leaf3{animation-delay:-4.6s}' +
    '@keyframes rkwave{0%,100%{transform:skewY(0)}50%{transform:skewY(7deg)}}.rk-flag{transform-box:fill-box;transform-origin:0 50%;animation:rkwave 1.6s ease-in-out infinite}' +
    '@keyframes rkglint{0%,100%{opacity:.1}50%{opacity:.8}}.rk-gl{animation:rkglint 2.6s ease-in-out infinite}' +
    '@keyframes rkhawk{0%{transform:translate(0,0)}25%{transform:translate(60px,-14px)}50%{transform:translate(120px,0)}75%{transform:translate(60px,14px)}100%{transform:translate(0,0)}}.rk-hawk{animation:rkhawk 9s linear infinite}' +
    '@keyframes rkrip{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.rk-rip{animation:rkrip 3s ease-in-out infinite}.rk-rip2{animation-delay:-1.5s}' +
    '@keyframes rkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rk-sp{animation:rkspray 1.4s ease-out infinite}.rk-sp2{animation-delay:.45s}' +
    '@keyframes rkwalk{from{transform:translateX(0)}to{transform:translateX(150px)}}.rk-walk{animation:rkwalk 12s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const MEVA = "#1f4e79", GOLD = "#f0c24b", SILVER = "#c9d0d8", RED = "#d6402f";

  /* a Lawrence triple-decker: three stacked porches on the front, clapboard */
  const triple = (x, base, w, body, trim) => {
    let s = '<rect x="' + x + '" y="' + (base - 120) + '" width="' + w + '" height="120" fill="' + body + '"/><path d="M' + (x - 4) + ' ' + (base - 120) + 'h' + (w + 8) + 'l-6 -12H' + (x + 2) + 'z" fill="#3b3a40"/>';
    for (let f = 0; f < 3; f++) {
      const y = base - 120 + f * 40;
      s += '<rect x="' + (x + 6) + '" y="' + (y + 8) + '" width="12" height="16" fill="#ffe0a3" class="' + (f === 1 ? "rk-flk" : "") + '"/><rect x="' + (x + w - 18) + '" y="' + (y + 8) + '" width="12" height="16" fill="#ffe0a3" opacity=".8"/>' +
        '<path d="M' + (x + 4) + ' ' + (y + 34) + 'h' + (w - 8) + '" stroke="' + trim + '" stroke-width="3"/>' +
        '<path d="M' + (x + 8) + ' ' + (y + 28) + 'v6M' + (x + w / 2) + ' ' + (y + 28) + 'v6M' + (x + w - 8) + ' ' + (y + 28) + 'v6" stroke="' + trim + '" stroke-width="2"/>';
    }
    return s;
  };

  /* 1. MeVa route 1 at Jackson St / Park St */
  function rkstop() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (64 + i * 46) + '" y="138" width="36" height="24" rx="2" fill="#203040"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="128" width="300" height="64" rx="7" fill="#f2f3f1" stroke="#8a9096" stroke-width="2"/>' + win +
      '<rect x="40" y="168" width="300" height="8" fill="' + MEVA + '"/><rect x="40" y="178" width="300" height="3" fill="#4fa3d9"/>' +
      '<rect x="318" y="134" width="20" height="40" rx="3" fill="#bcd6ea" opacity=".9"/><rect x="290" y="132" width="26" height="40" fill="#203040"/>' +
      '<rect x="230" y="122" width="76" height="11" rx="2" fill="#111"/><text x="268" y="130.5" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">1 HAVERHILL</text>' +
      '<circle cx="90" cy="194" r="11" fill="#1b1b1b"/><circle cx="90" cy="194" r="4" fill="#8a8a8a"/><circle cx="292" cy="194" r="11" fill="#1b1b1b"/><circle cx="292" cy="194" r="4" fill="#8a8a8a"/>' +
      '<circle cx="336" cy="182" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rks1)"/>' +
      triple(6, 196, 70, "#9fb7c9", "#f4f1e8") + triple(86, 196, 70, "#d8c7a1", "#ffffff") + triple(166, 196, 70, "#b9877a", "#f4f1e8") + triple(246, 196, 70, "#a3b39a", "#ffffff") + triple(326, 196, 70, "#c9b6c9", "#f4f1e8") +
      '<rect x="0" y="196" width="400" height="10" fill="#b5b0a6"/><rect x="0" y="206" width="400" height="54" fill="#4a4a50"/><path d="M0 236h400" stroke="#e6d36a" stroke-width="2" stroke-dasharray="20 14"/>' +
      bus +
      /* stop pole and flag */
      '<rect x="356" y="96" width="5" height="110" fill="#5a5f66"/><rect x="340" y="96" width="38" height="44" rx="3" fill="' + MEVA + '" stroke="#fff" stroke-width="1.5"/><text x="359" y="112" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS</text><text x="359" y="122" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">STOP</text>' +
      '<circle cx="359" cy="132" r="6" fill="#fff"/><text x="359" y="135.5" text-anchor="middle" ' + font + ' font-size="9" fill="' + MEVA + '">1</text>' +
      '<rect x="62" y="212" width="276" height="34" rx="3" fill="#111"/><text x="76" y="235" ' + font + ' font-size="16" fill="#fff">Jackson St / Park St</text>' + badge(296, 229, "1", MEVA),
      sky("rks1", "#283a5c", "#e39a6a"));
  }

  /* 2. W.E.B. Du Bois Library, UMass Amherst */
  function rklibrary() {
    let tower = '<rect x="150" y="34" width="100" height="166" fill="#8e3f2c"/><rect x="146" y="28" width="108" height="10" fill="#7a3424"/>';
    for (let c = 0; c < 6; c++) {
      const x = 156 + c * 16;
      tower += '<rect x="' + x + '" y="40" width="9" height="152" fill="#5a2a20"/>';
      for (let r = 0; r < 19; r++) tower += '<rect x="' + (x + 2) + '" y="' + (42 + r * 8) + '" width="5" height="5" fill="' + ((r * 7 + c * 3) % 5 === 0 ? "#ffd98a" : "#2a3442") + '"' + ((r + c) % 6 === 0 ? ' class="rk-flk"' : "") + '/>';
    }
    tower += '<rect x="150" y="34" width="6" height="166" fill="#a24c36"/><rect x="244" y="34" width="6" height="166" fill="#6e2f22"/>';
    const tree = (x, y, r, c) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="22" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 6) + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * 0.6) + '" cy="' + (y + 2) + '" r="' + (r * 0.7) + '" fill="' + c + '"/><circle cx="' + (x + r * 0.6) + '" cy="' + (y + 2) + '" r="' + (r * 0.7) + '" fill="' + c + '"/>';
    const leaf = (x, cls, c) => '<g class="rk-leaf ' + cls + '"><path d="M' + x + ' 0q5 -5 10 0q-5 5 -10 0z" fill="' + c + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rks2)"/>' +
      '<path d="M0 150q60 -40 120 -16t120 -10t160 4v60H0z" fill="#6f8aa0" opacity=".55"/>' +
      tower +
      '<rect x="120" y="186" width="160" height="18" fill="#c9c3b6"/><rect x="120" y="186" width="160" height="4" fill="#e2ddd2"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#5e8f45"/><path d="M150 260l40 -56h20l40 56z" fill="#cfc8b8"/>' +
      tree(50, 182, 22, "#d9832b") + tree(98, 188, 18, "#c4472d") + tree(310, 184, 22, "#e0a62e") + tree(360, 190, 18, "#b8432a") +
      leaf(70, "", "#e0892e") + leaf(130, "rk-leaf2", "#c4472d") + leaf(280, "rk-leaf3", "#e9b23a") + leaf(340, "rk-leaf2", "#d36b2b") +
      '<g class="rk-walk"><circle cx="40" cy="222" r="4" fill="#2b2b2b"/><rect x="37" y="226" width="6" height="12" rx="2" fill="#7a2230"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">W.E.B. DU BOIS LIBRARY · AMHERST</text>',
      sky("rks2", "#7fb2db", "#f1e2c4"));
  }

  /* 3. The Massachusetts State House, Beacon Hill */
  function rkstatehouse() {
    const cols = Array.from({ length: 6 }, (_, i) => '<rect x="' + (156 + i * 18) + '" y="112" width="7" height="46" fill="#f4f1e8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rks3)"/>' +
      /* the gold dome, drum and lantern */
      '<rect x="166" y="76" width="68" height="22" fill="#f4f1e8"/>' + Array.from({ length: 7 }, (_, i) => '<rect x="' + (170 + i * 9) + '" y="80" width="4" height="14" fill="#c9c4b6"/>').join("") +
      '<path d="M162 78q38 -66 76 0z" fill="#d9a521"/><path d="M178 74q5 -16 12 -22" stroke="#f6d36a" stroke-width="4" stroke-linecap="round" fill="none" class="rk-gl"/><path d="M162 78q38 -66 76 0" fill="none" stroke="#a87a12" stroke-width="2"/>' +
      '<rect x="194" y="20" width="12" height="12" fill="#d9a521"/><path d="M194 20l6 -10 6 10z" fill="#e8b93a"/><rect x="199" y="4" width="2" height="8" fill="#a87a12"/>' +
      /* brick main block, white trim, porch */
      '<rect x="80" y="96" width="240" height="96" fill="#a8452f"/><rect x="76" y="92" width="248" height="6" fill="#f4f1e8"/>' +
      '<path d="M148 104h104l-52 -18z" fill="#f4f1e8"/><rect x="148" y="104" width="104" height="8" fill="#f4f1e8"/>' + cols +
      '<rect x="146" y="158" width="108" height="34" fill="#a8452f"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M' + (156 + i * 22) + ' 192v-24q8 -10 16 0v24" fill="#3a2a24"/>').join("") +
      [92, 112, 270, 290].map(x => '<rect x="' + x + '" y="110" width="14" height="22" fill="#2a3442"/><rect x="' + x + '" y="148" width="14" height="22" fill="#2a3442"/><rect x="' + (x - 2) + '" y="108" width="18" height="3" fill="#f4f1e8"/><rect x="' + (x - 2) + '" y="146" width="18" height="3" fill="#f4f1e8"/>').join("") +
      /* flag */
      '<rect x="330" y="40" width="3" height="150" fill="#ddd"/><g class="rk-flag"><rect x="333" y="42" width="40" height="24" fill="#f4f4f4"/><rect x="333" y="42" width="40" height="24" fill="none" stroke="#bbb" stroke-width="1"/><circle cx="353" cy="54" r="7" fill="#1d4f91"/></g>' +
      /* steps, the Common, iron fence */
      '<rect x="140" y="192" width="120" height="10" fill="#d8d2c4"/><rect x="0" y="200" width="400" height="60" fill="#4f7d3a"/>' +
      '<path d="M0 214h400" stroke="#1b1b1b" stroke-width="2"/>' + Array.from({ length: 41 }, (_, i) => '<path d="M' + (i * 10) + ' 214v18" stroke="#1b1b1b" stroke-width="1.6"/>').join("") + '<path d="M0 230h400" stroke="#1b1b1b" stroke-width="2"/>' +
      '<rect x="8" y="150" width="4" height="64" fill="#1b1b1b"/><circle class="rk-flk" cx="10" cy="148" r="6" fill="#ffe9a8"/><rect x="388" y="150" width="4" height="64" fill="#1b1b1b"/><circle class="rk-flk rk-flk2" cx="390" cy="148" r="6" fill="#ffe9a8"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">BEACON HILL · BOSTON</text>',
      sky("rks3", "#5d8fc4", "#f6d9a8"));
  }

  /* 4. Den Rock Park, Lawrence */
  function rkdenrock() {
    const tree = (x, y, r, c) => '<rect x="' + (x - 2) + '" y="' + y + '" width="4" height="16" fill="#3f2d20"/><circle cx="' + x + '" cy="' + (y - 4) + '" r="' + r + '" fill="' + c + '"/>';
    let trees = "";
    const tc = ["#c4472d", "#e0a62e", "#4e7a3a", "#d9832b", "#3e6a32", "#b8432a"];
    for (let i = 0; i < 22; i++) trees += tree(8 + i * 18.5, 200 + (i * 7) % 14, 12 + (i % 3) * 3, tc[i % 6]);
    return svg(
      '<rect width="400" height="260" fill="url(#rks4)"/>' +
      '<path d="M0 120q80 -30 160 -10t240 -6v80H0z" fill="#7c8f7a" opacity=".5"/>' +
      /* the granite ledges */
      '<path d="M90 214L120 96l40 -26 38 10 30 -14 40 30 22 118z" fill="#8d8f92"/>' +
      '<path d="M120 96l40 -26 38 10 30 -14 40 30" fill="none" stroke="#b9bcbf" stroke-width="3"/>' +
      '<path d="M140 110l20 40-12 30M196 90l-6 48 18 40M246 92l-10 40 16 34M170 150l40 6M220 132l30 4" stroke="#6b6e72" stroke-width="2.5" fill="none"/>' +
      '<path d="M120 96l20 18-10 60-24 40z" fill="#77797c"/><path d="M268 86l22 128h-30l-10 -70z" fill="#a3a6a9"/>' +
      '<path d="M226 68l14 -4 4 8z" fill="#5f6266"/>' +
      trees +
      '<rect x="0" y="222" width="400" height="38" fill="#4e6b39"/><path d="M0 236q100 -8 200 0t200 0" stroke="#bfa77a" stroke-width="6" fill="none"/>' +
      '<g class="rk-hawk"><path d="M120 50q8 -8 16 0q8 -8 16 0" stroke="#3a2a20" stroke-width="2.5" fill="none"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">DEN ROCK PARK · LAWRENCE</text>',
      sky("rks4", "#8cc0e6", "#f6e6c8"));
  }

  /* 5. Union St and Canal St, Lawrence, the Duck Bridge behind */
  function rkcorner() {
    /* double-intersection Warren truss: top and bottom chords, two sets of crossing diagonals */
    let truss = "";
    const spans = [[-20, 120], [120, 240], [240, 360], [360, 480]];
    spans.forEach(s => {
      const [a, b] = s, top = 64, bot = 100, n = 6, d = (b - a) / n;
      truss += '<path d="M' + a + ' ' + top + 'H' + b + 'M' + a + ' ' + bot + 'H' + b + 'M' + a + ' ' + bot + 'L' + (a + 10) + ' ' + top + 'M' + b + ' ' + bot + 'L' + (b - 10) + ' ' + top + '" stroke="#5d7f72" stroke-width="3.5" fill="none"/>';
      for (let i = 0; i < n; i++) {
        const x = a + i * d;
        truss += '<path d="M' + x + ' ' + bot + 'L' + (x + 2 * d) + ' ' + top + 'M' + x + ' ' + top + 'L' + (x + 2 * d) + ' ' + bot + '" stroke="#5d7f72" stroke-width="1.6" opacity=".9"/>';
      }
    });
    const piers = [120, 240, 360].map(x => '<path d="M' + (x - 9) + ' 100h18v26h-18z" fill="#9a958a"/><path d="M' + (x - 9) + ' 126l9 -8 9 8z" fill="#8a857a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rks5)"/>' +
      '<g fill="#3a2f2c"><rect x="0" y="40" width="50" height="24"/><rect x="300" y="34" width="60" height="30"/><rect x="330" y="20" width="12" height="20"/></g>' +
      '<rect x="0" y="100" width="400" height="34" fill="#3c5f7e"/>' +
      '<g class="rk-rip"><path d="M20 112h40M150 118h60M290 110h50" stroke="#a9cbe6" stroke-width="1.6" opacity=".7"/></g><g class="rk-rip rk-rip2"><path d="M90 124h40M230 126h50M350 120h30" stroke="#d2e6f5" stroke-width="1.6" opacity=".6"/></g>' +
      piers + truss + '<rect x="0" y="98" width="400" height="4" fill="#4a4a4a"/>' +
      '<g class="rk-car"><rect x="0" y="88" width="30" height="9" rx="3" fill="#e8e8e8"/><rect x="6" y="83" width="16" height="6" rx="2" fill="#e8e8e8"/></g>' +
      /* mill brick wall */
      '<rect x="0" y="130" width="400" height="94" fill="#8a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#6f3122" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#6f3122" stroke-width="1"/>').join("")).join("") +
      tag("REKS", 26, 196, 60, GOLD, -6) + tag("LAWTOWN", 196, 176, 22, SILVER, -4) + tag("SAY GOODNIGHT", 34, 216, 15, "#ff7a6b", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="100" width="6" height="124" fill="#2f2f2f"/>' + sign(268, 102, 120, "Union St") + sign(274, 128, 108, "Canal St") +
      '<rect x="8" y="114" width="4" height="110" fill="#222"/><circle class="rk-flk" cx="10" cy="112" r="7" fill="#ffe9a8"/>' +
      '<g class="rk-sp"><circle cx="190" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="rk-sp rk-sp2"><circle cx="196" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("rks5", "#2b3360", "#eea06c"));
  }

  window.SCENES = { rkstop: rkstop, rklibrary: rklibrary, rkstatehouse: rkstatehouse, rkdenrock: rkdenrock, rkcorner: rkcorner };
})();
