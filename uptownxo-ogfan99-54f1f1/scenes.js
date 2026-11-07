/* uptownxo scenes (Regions tab: The DMV; Uptown, Northwest Washington D.C.). CSS classes and ids prefixed xo- (the page's own anim-train is kept).
   1 Georgia Av-Petworth station (Green / Yellow), underground: the coffered concrete vault, platform-edge lights blinking, a silver Metro train pulling in.
   2 U Street (where he met Oddisee and yU at the open mics): the African American Civil War Memorial's bronze "Spirit of Freedom" and its curved wall of names, U St lit up at night.
   3 The Tivoli Theatre at 14th St and Park Rd NW ("sales made on 14th Street uptown"): cream terracotta front, arched windows, red tile roof, the tall blade sign chasing lights.
   4 A D.C. boundary stone (the Diamond District: the city's original diamond, marked out in 1791-92): the weathered sandstone marker inside its iron fence, the diamond glowing above, leaves falling.
   5 Georgia Av NW and Park Rd NW (Georgia Ave and the Madness-era fly guys he reps): green signs, XO tagged on the brick, the Washington National Cathedral's towers behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes xoblink{0%,100%{opacity:.25}50%{opacity:1}}.xo-bl{animation:xoblink 1.2s ease-in-out infinite}.xo-bl2{animation-delay:-.6s}' +
    '@keyframes xoflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.xo-flk{animation:xoflick 2.4s infinite}' +
    '@keyframes xocar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.xo-car{animation:xocar 7s linear infinite}.xo-car2{animation-delay:-3.5s}' +
    '@keyframes xocarL{from{transform:translateX(540px)}to{transform:translateX(-160px)}}.xo-carL{animation:xocarL 9s linear infinite}' +
    '@keyframes xochase{0%,100%{opacity:.25}33%{opacity:1}}.xo-ch{animation:xochase 1.2s linear infinite}.xo-ch1{animation-delay:-.4s}.xo-ch2{animation-delay:-.8s}' +
    '@keyframes xoleaf{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(-40px,260px) rotate(300deg)}}.xo-lf{transform-box:fill-box;animation:xoleaf 7s linear infinite}.xo-lf2{animation-delay:-2.3s}.xo-lf3{animation-delay:-4.6s}' +
    '@keyframes xoglow{0%,100%{opacity:.45}50%{opacity:1}}.xo-gl{animation:xoglow 2.6s ease-in-out infinite}' +
    '@keyframes xospray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.xo-sp{animation:xospray 1.4s ease-out infinite}.xo-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const dot = (cx, cy, txt, color, dark) => '<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="' + color + '"/><text x="' + cx + '" y="' + (cy + 4) + '" text-anchor="middle" ' + font + ' font-size="10" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const RED = "#e8343a", GOLD = "#e9c46a", GR = "#00b140", YL = "#ffd200";

  /* 1. Georgia Av-Petworth, underground */
  function xostation() {
    let vault = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 11; c++) vault += '<rect x="' + (c * 38 - 6 + (r % 2) * 0) + '" y="' + (8 + r * 22) + '" width="30" height="16" rx="2" fill="#6e6a62" stroke="#57544d" stroke-width="2"/>';
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 46) + '" y="130" width="32" height="20" rx="3" fill="#1d2633"/>').join("");
    const train = '<g class="anim-train"><rect x="20" y="120" width="340" height="62" rx="8" fill="#c9cdd1" stroke="#70767d" stroke-width="2"/>' + win +
      '<rect x="20" y="158" width="340" height="5" fill="#3a3f45"/><rect x="20" y="166" width="340" height="3" fill="#8a9097"/>' +
      '<rect x="338" y="124" width="20" height="54" rx="4" fill="#b2b7bc"/><circle cx="348" cy="172" r="3.5" fill="#fff6c2"/>' +
      '<rect x="262" y="125" width="70" height="11" rx="2" fill="#111"/><text x="297" y="133.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">GREENBELT</text></g>';
    return svg(
      '<rect width="400" height="260" fill="#4a4741"/>' + vault +
      '<rect x="0" y="96" width="400" height="22" fill="#2b2925"/><g class="xo-gl"><rect x="0" y="110" width="400" height="6" fill="#d9c79a" opacity=".5"/></g>' +
      train +
      '<rect x="0" y="184" width="400" height="6" fill="#c9b79a"/>' + Array.from({ length: 16 }, (_, i) => '<circle class="xo-bl' + (i % 2 ? " xo-bl2" : "") + '" cx="' + (12 + i * 25) + '" cy="187" r="2.4" fill="#fff3c4"/>').join("") +
      '<rect x="0" y="190" width="400" height="70" fill="#8a3b2e"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (198 + i * 9) + 'h400" stroke="#7a3226" stroke-width="1"/>').join("") +
      '<rect x="74" y="198" width="252" height="36" rx="3" fill="#2a2a2a"/><text x="88" y="222" ' + font + ' font-size="15" fill="#fff">Georgia Av-Petworth</text>' + dot(268, 216, "GR", GR) + dot(296, 216, "YL", YL, true),
      "");
  }

  /* 2. U Street: the Civil War memorial's bronze and its wall of names */
  function xoustreet() {
    const fronts = [0, 70, 140, 260, 330].map((x, i) => '<rect x="' + x + '" y="' + (40 + (i % 2) * 10) + '" width="70" height="' + (110 - (i % 2) * 10) + '" fill="' + ["#4a3b5a", "#5a4030", "#3c4a5c", "#5a3a3a", "#40523f"][i] + '"/>' +
      '<rect x="' + (x + 10) + '" y="' + (58 + (i % 2) * 10) + '" width="18" height="20" fill="#ffd98a" class="xo-gl"/><rect x="' + (x + 42) + '" y="' + (58 + (i % 2) * 10) + '" width="18" height="20" fill="#ffd98a"/>' +
      '<rect x="' + (x + 6) + '" y="120" width="58" height="8" fill="' + ["#e8343a", "#e9c46a", "#4fb3ff", "#ff7ab6", "#6ce0c8"][i] + '" class="xo-flk"/>').join("");
    const wall = '<path d="M60 196Q200 160 340 196V214Q200 180 60 214z" fill="#3c3f44"/>' + Array.from({ length: 18 }, (_, i) => '<path d="M' + (70 + i * 15) + ' ' + (190 - Math.sin((i + 0.5) / 18 * Math.PI) * 16) + 'v10" stroke="#9aa0a8" stroke-width="1"/>').join("");
    /* Spirit of Freedom: a curved bronze wall of uniformed figures with rifles, a robed figure rising out of the top, on a round granite base (no faces) */
    const statue = '<g><rect x="172" y="168" width="56" height="28" fill="#6f7277"/><ellipse cx="200" cy="168" rx="28" ry="5" fill="#8a8d93"/><ellipse cx="200" cy="196" rx="28" ry="5" fill="#5d6065"/>' +
      '<path d="M178 166q-4-34 4-56q18-8 36 0q8 22 4 56z" fill="#9c7a44" stroke="#6e5530" stroke-width="1.5"/>' +
      [186, 200, 214].map(x => '<circle cx="' + x + '" cy="' + 120 + '" r="5" fill="#b08a50"/><path d="M' + (x - 6) + ' 120q6-7 12 0" fill="#6e5530"/><path d="M' + (x - 5) + ' 127h10l1 34h-12z" fill="#8a6a3a"/>').join("") +
      '<path d="M182 160l10-36M196 160l10-36M210 160l10-36" stroke="#4e3c22" stroke-width="2"/>' +
      '<path d="M200 76q-9 4-9 16l-4 18h26l-4-18q0-12-9-16z" fill="#b08a50" stroke="#6e5530" stroke-width="1.5"/><circle cx="200" cy="74" r="5" fill="#b08a50"/>' +
      '<path d="M191 96q-10-6-14-14M209 96q10-6 14-14" stroke="#b08a50" stroke-width="3" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#xos2)"/>' + fronts +
      '<rect x="0" y="150" width="400" height="50" fill="#9a958c"/>' + wall + statue +
      '<rect x="0" y="214" width="400" height="46" fill="#3a3a40"/><path d="M0 238h400" stroke="#e0d9a0" stroke-width="2" stroke-dasharray="18 14"/>' +
      car("xo-car", 0, 228, RED) + car("xo-carL", 0, 244, "#e8e8e8") +
      '<rect x="150" y="14" width="100" height="22" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="30" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">U St NW</text>',
      sky("xos2", "#151a33", "#3d3560"));
  }

  /* 3. The Tivoli Theatre, 14th St and Park Rd */
  function xotivoli() {
    const arches = Array.from({ length: 5 }, (_, i) => { const x = 104 + i * 40; return '<path d="M' + x + ' 150v-40q14-18 28 0v40z" fill="#3a4a5c"/><path d="M' + x + ' 110q14-18 28 0" stroke="#c9a46a" stroke-width="2" fill="none"/>'; }).join("");
    const bulbs = Array.from({ length: 9 }, (_, i) => '<circle class="xo-ch xo-ch' + (i % 3) + '" cx="' + (i % 2 ? 320.5 : 333.5) + '" cy="' + (40 + i * 13) + '" r="1.8" fill="#fff3a0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#xos3)"/>' +
      '<path d="M80 72l20-22h200l20 22z" fill="#b5502e"/><rect x="80" y="70" width="240" height="116" fill="#ecdcb8"/><rect x="80" y="70" width="240" height="8" fill="#d8c393"/>' +
      arches + Array.from({ length: 6 }, (_, i) => '<rect x="' + (98 + i * 40) + '" y="104" width="6" height="46" fill="#d8c393"/>').join("") +
      '<rect x="80" y="150" width="240" height="8" fill="#d8c393"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (96 + i * 36) + '" y="162" width="24" height="24" fill="#5a3a26"/>').join("") +
      '<rect x="316" y="30" width="22" height="122" rx="3" fill="#b5502e" stroke="#ecdcb8" stroke-width="2"/>' +
      '<text x="327" y="0" ' + font + ' font-size="13" fill="#fff3d0" text-anchor="middle">' + "TIVOLI".split("").map((c, i) => '<tspan x="327" dy="' + (i ? 16 : 52) + '">' + c + '</tspan>').join("") + '</text>' + bulbs +
      '<rect x="0" y="186" width="400" height="12" fill="#c7c1b5"/><rect x="0" y="198" width="400" height="62" fill="#4a4a4f"/><path d="M0 230h400" stroke="#e0d9a0" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="xo-car"><rect x="0" y="206" width="96" height="30" rx="5" fill="#d7dade"/><rect x="0" y="222" width="96" height="5" fill="' + RED + '"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (6 + i * 17) + '" y="210" width="12" height="9" fill="#2a3a48"/>').join("") + '<circle cx="18" cy="238" r="6" fill="#111"/><circle cx="78" cy="238" r="6" fill="#111"/></g>' +
      car("xo-carL", 0, 244, GOLD) +
      '<text x="200" y="24" text-anchor="middle" ' + font + ' font-size="11" fill="#2b2b2b">14TH ST & PARK RD NW</text>',
      sky("xos3", "#86b8e6", "#f4ead8"));
  }

  /* 4. A D.C. boundary stone, the diamond above */
  function xostone() {
    const leaf = (x, cls, c) => '<path class="xo-lf ' + cls + '" d="M' + x + ' 0q8-8 14 0q-6 8-14 0z" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#xos4)"/>' +
      '<g fill="#3e5a34"><circle cx="30" cy="110" r="46"/><circle cx="90" cy="96" r="40"/><circle cx="330" cy="100" r="44"/><circle cx="380" cy="120" r="36"/></g>' +
      '<g fill="#4a3826"><rect x="26" y="130" width="10" height="70"/><rect x="86" y="120" width="10" height="80"/><rect x="326" y="126" width="10" height="74"/></g>' +
      /* the diamond: D.C.'s original ten-mile square, turned on its point */
      '<g class="xo-gl"><path d="M200 22l52 52-52 52-52-52z" fill="none" stroke="' + GOLD + '" stroke-width="3"/><path d="M200 22l52 52-52 52-52-52z" fill="' + GOLD + '" opacity=".12"/>' +
      '<path d="M162 74q20 6 30 30q4 10 8 22" stroke="#4fb3ff" stroke-width="2.5" fill="none" opacity=".8"/><circle cx="200" cy="74" r="3" fill="' + RED + '"/></g>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5d4a32"/><path d="M0 200q100-8 200 0t200 0" stroke="#6e5a3c" stroke-width="6" fill="none"/>' +
      /* the stone and its fence */
      '<path d="M186 196v-44l14-10 14 10v44z" fill="#b89a74" stroke="#7a6248" stroke-width="2"/><path d="M190 168h20M190 178h20" stroke="#8a7050" stroke-width="1.5"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (166 + i * 11) + ' 204v-38l2-4 2 4" stroke="#1d1d1d" stroke-width="2.5" fill="none"/>').join("") +
      '<path d="M164 176h72M164 196h72" stroke="#1d1d1d" stroke-width="2.5"/>' +
      leaf(60, "", "#e09a3a") + leaf(140, "xo-lf2", "#c9532e") + leaf(280, "xo-lf3", "#e9c46a") + leaf(360, "xo-lf2", "#d9822b") +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="10" fill="#f0e6d0">THE DIAMOND · 1791</text>',
      sky("xos4", "#7aa9d6", "#e9efe2"));
  }

  /* 5. Georgia Av NW and Park Rd NW, the Cathedral behind */
  function xocorner() {
    const tower = (x, w, h, base) => '<rect x="' + x + '" y="' + (base - h) + '" width="' + w + '" height="' + h + '" fill="#c9bfae"/>' +
      [0, 1, 2, 3].map(i => '<path d="M' + (x + i * w / 3 - 2) + ' ' + (base - h) + 'l2-10 2 10z" fill="#c9bfae"/>').join("") +
      '<rect x="' + (x + w / 2 - 3) + '" y="' + (base - h + 12) + '" width="6" height="18" rx="3" fill="#6b6455"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#xos5)"/>' +
      /* the Cathedral: long nave, two west towers, the tall central tower */
      '<rect x="120" y="100" width="170" height="30" fill="#bdb3a2"/><path d="M120 100l85-14 85 14z" fill="#a89e8c"/>' +
      tower(120, 22, 56, 130) + tower(146, 22, 56, 130) + tower(214, 34, 92, 130) +
      '<g class="xo-gl"><circle cx="231" cy="48" r="2" fill="#ff5a5a"/></g>' +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("UPTOWN XO", 18, 190, 42, RED, -6) + tag("XO BABY", 26, 214, 17, GOLD, -3) + tag("NORTHWEST", 150, 214, 18, "#f2f2f2", -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(244, 98, 150, "Georgia Av NW") + sign(262, 124, 124, "Park Rd NW") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="xo-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="xo-sp"><circle cx="230" cy="168" r="3" fill="' + RED + '" opacity=".7"/></g><g class="xo-sp xo-sp2"><circle cx="236" cy="162" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("xos5", "#232a52", "#e98a62"));
  }

  window.SCENES = { xostation: xostation, xoustreet: xoustreet, xotivoli: xotivoli, xostone: xostone, xocorner: xocorner };
})();
