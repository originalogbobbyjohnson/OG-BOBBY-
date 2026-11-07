/* vicmensa scenes (Regions tab: Chicago; Hyde Park, South Side). CSS classes and ids prefixed vm- (the page's own anim-train is kept).
   1 55th-56th-57th St on the Metra Electric (Hyde Park): the high platform up on the embankment, a silver bilevel electric sliding in under the wires.
   2 The Robie House (Woodlawn Ave at 58th St, Hyde Park): Frank Lloyd Wright's long, low Prairie house, thin red-orange Roman brick, limestone ledges, the big cantilevered eaves, leaded art-glass windows.
   3 Promontory Point (Hyde Park): the stepped limestone revetment on Lake Michigan, the stone field house with its little tower, waves rolling in, a gull gliding.
   4 Black Star Square, Accra (his father is from Ghana; the Black Star Line Festival he co-founded in 2023): the white Black Star Gate with the black star on top, red-gold-green flags waving.
   5 S Woodlawn Ave and E 47th St ("Woodlawn and 47th", Memories On 47th St.): green signs, VIC MENSA tagged, the grey limestone Rockefeller Chapel tower rising over Hyde Park behind.
   No logos, no faces; no 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes vmflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.vm-flk{animation:vmflick 2.4s infinite}.vm-flk2{animation-delay:.8s}' +
    '@keyframes vmcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.vm-car{animation:vmcar 5.5s linear infinite}.vm-car2{animation-delay:-2.7s}' +
    '@keyframes vmcloud{from{transform:translateX(-80px)}to{transform:translateX(460px)}}.vm-cloud{animation:vmcloud 24s linear infinite}.vm-cloud2{animation-delay:-12s}' +
    '@keyframes vmwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.vm-wave{animation:vmwave 3s ease-in-out infinite}.vm-wave2{animation-delay:-1.5s}' +
    '@keyframes vmgull{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,0)}}.vm-gull{animation:vmgull 9s linear infinite}' +
    '@keyframes vmflag{0%,100%{transform:skewY(0)}50%{transform:skewY(7deg)}}.vm-flag{transform-box:fill-box;transform-origin:0 50%;animation:vmflag 1.4s ease-in-out infinite}.vm-flag2{animation-delay:-.7s}' +
    '@keyframes vmleaf{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-160px,140px) rotate(300deg);opacity:0}}.vm-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:vmleaf 5s linear infinite}' +
    '@keyframes vmglow{0%,100%{opacity:.35}50%{opacity:1}}.vm-glow{animation:vmglow 2.6s ease-in-out infinite}.vm-glow2{animation-delay:-1.3s}' +
    '@keyframes vmsp{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(18px,-26px);opacity:0}}.vm-sp{animation:vmsp 1.3s ease-out infinite}.vm-sp2{animation-delay:-.6s}' +
    '@keyframes vmbeam{0%,100%{opacity:.15}50%{opacity:.5}}.vm-beam{animation:vmbeam 2.2s ease-in-out infinite}.vm-beam2{animation-delay:-1.1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const METRA = "#1f4e79", ORG = "#ff8a1f", BLU = "#4aa3ff", GOLD = "#fcd116", GRN = "#006b3f", RED = "#ce1126";
  /* a bilevel Metra Electric car (silver, gallery windows, pantograph on top) */
  const mecar = (x, y, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="62" rx="6" fill="#d6dade" stroke="#7d858d" stroke-width="2"/>' +
    Array.from({ length: Math.floor((w - 20) / 26) }, (_, i) => '<rect x="' + (x + 12 + i * 26) + '" y="' + (y + 10) + '" width="18" height="12" rx="2" fill="#26323c"/><rect x="' + (x + 12 + i * 26) + '" y="' + (y + 30) + '" width="18" height="12" rx="2" fill="#26323c"/>').join("") +
    '<rect x="' + x + '" y="' + (y + 47) + '" width="' + w + '" height="4" fill="' + METRA + '"/><path d="M' + (x + w / 2 - 14) + ' ' + y + 'l8 -12h12l8 12" stroke="#4a4f55" stroke-width="2" fill="none"/>';

  /* 1. 55th-56th-57th St, Metra Electric, Hyde Park */
  function vmstation() {
    const train = '<g class="anim-train">' + mecar(20, 86, 180) + mecar(204, 86, 170) +
      '<rect x="350" y="92" width="22" height="50" rx="4" fill="#b6bcc2"/><circle cx="362" cy="138" r="3.5" fill="#fff6c2"/>' +
      '<rect x="286" y="74" width="70" height="10" rx="2" fill="#111"/><text x="321" y="82" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">RANDOLPH ST</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#vms1)"/>' +
      '<g class="vm-cloud"><ellipse cx="40" cy="30" rx="30" ry="9" fill="#fff" opacity=".5"/></g><g class="vm-cloud vm-cloud2"><ellipse cx="40" cy="50" rx="22" ry="7" fill="#fff" opacity=".4"/></g>' +
      '<path d="M0 46h400" stroke="#2c2c34" stroke-width="2"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="40" width="6" height="120" fill="#5b636b"/><path d="M' + (x - 18) + ' 46h36" stroke="#5b636b" stroke-width="4"/>').join("") +
      '<path d="M60 58h280l-10 12H70z" fill="#3d4650"/>' +
      '<g class="vm-flk"><rect x="110" y="70" width="34" height="3" fill="#fff3c4"/></g><g class="vm-flk vm-flk2"><rect x="256" y="70" width="34" height="3" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="150" width="400" height="6" fill="#f2c200"/><rect x="0" y="156" width="400" height="26" fill="#8e8a82"/>' +
      '<path d="M0 182h400v14H0z" fill="#6f6a60"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 42) + '" y="186" width="28" height="74" fill="#857e70"/><rect x="' + (i * 42 + 28) + '" y="186" width="14" height="74" fill="#3a3530"/>').join("") +
      '<rect x="0" y="232" width="400" height="28" fill="#4a4c55"/><path d="M0 246h400" stroke="#ddd" stroke-width="1.5" stroke-dasharray="14 10"/>' +
      car("vm-car", 0, 238, "#e6e6e6") + car("vm-car vm-car2", 0, 238, ORG) +
      '<rect x="62" y="158" width="276" height="28" rx="3" fill="#111"/><text x="74" y="178" ' + font + ' font-size="14" fill="#fff">55th-56th-57th St</text>' + badge(292, 172, "ME", METRA) +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#1d2440">METRA ELECTRIC · HYDE PARK · UP ON THE EMBANKMENT</text>',
      sky("vms1", "#9fd0f0", "#fbe2c2"));
  }

  /* 2. The Robie House, Woodlawn Ave at 58th St */
  function vmrobie() {
    const brick = (x, y, w, h) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#b4552f"/>' +
      Array.from({ length: Math.floor(h / 4) }, (_, i) => '<path d="M' + x + ' ' + (y + 4 + i * 4) + 'h' + w + '" stroke="#8c3c1f" stroke-width=".8"/>').join("");
    const glass = (x, y, n) => Array.from({ length: n }, (_, i) => '<g><rect x="' + (x + i * 16) + '" y="' + y + '" width="12" height="18" fill="#2c3a3e" stroke="#c9a24a" stroke-width="1"/><path d="M' + (x + i * 16) + ' ' + (y + 6) + 'h12M' + (x + i * 16 + 6) + ' ' + y + 'v18M' + (x + i * 16) + ' ' + (y + 6) + 'l6 6l6 -6" stroke="#c9a24a" stroke-width=".7" fill="none"/><rect class="vm-glow' + (i % 2 ? " vm-glow2" : "") + '" x="' + (x + i * 16 + 2) + '" y="' + (y + 13) + '" width="8" height="4" fill="#ffd98a" opacity=".6"/></g>').join("");
    const leaves = Array.from({ length: 8 }, (_, i) => '<ellipse class="vm-leaf" style="animation-delay:-' + (i * 0.6).toFixed(1) + 's" cx="' + (300 + (i * 37) % 100) + '" cy="' + (20 + (i * 17) % 40) + '" rx="4" ry="2.4" fill="' + ["#d9822b", "#e0b03a", "#b5452a"][i % 3] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#vms2)"/>' +
      '<g class="vm-cloud"><ellipse cx="60" cy="34" rx="34" ry="9" fill="#fff" opacity=".6"/></g>' +
      '<g fill="#3f6b3a"><circle cx="20" cy="120" r="34"/><circle cx="380" cy="116" r="38"/><circle cx="350" cy="140" r="26"/></g>' +
      /* upper storey + its long low roof */
      brick(150, 74, 120, 34) + glass(156, 82, 7) +
      '<path d="M110 74h210l-14 -10H124z" fill="#6b4a33"/><rect x="104" y="72" width="222" height="5" fill="#d9cdb4"/>' +
      /* main floor with the long cantilevered roof */
      brick(60, 118, 290, 46) + glass(76, 128, 16) +
      '<path d="M8 118h394l-18 -12H26z" fill="#6b4a33"/><rect x="2" y="116" width="400" height="5" fill="#d9cdb4"/>' +
      '<rect x="0" y="113" width="10" height="5" fill="#d9cdb4"/>' +
      /* chimney */
      brick(214, 40, 26, 30) + '<rect x="210" y="38" width="34" height="5" fill="#d9cdb4"/>' +
      /* ground floor, low wall with limestone coping */
      brick(30, 164, 340, 40) + '<rect x="26" y="162" width="348" height="5" fill="#d9cdb4"/>' + glass(120, 174, 10) +
      '<rect x="0" y="204" width="400" height="56" fill="#7aa35a"/><rect x="0" y="228" width="400" height="32" fill="#4a4c55"/><path d="M0 244h400" stroke="#ddd" stroke-width="1.5" stroke-dasharray="14 10"/>' +
      '<rect x="0" y="222" width="400" height="6" fill="#c9c4b8"/>' +
      car("vm-car", 0, 234, BLU) + leaves +
      '<rect x="110" y="6" width="180" height="20" rx="3" fill="#111" opacity=".75"/><text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">ROBIE HOUSE · WOODLAWN AVE · HYDE PARK</text>',
      sky("vms2", "#8fc3ea", "#f4e3c6"));
  }

  /* 3. Promontory Point, Hyde Park */
  function vmpoint() {
    const steps = Array.from({ length: 5 }, (_, i) => '<rect x="0" y="' + (176 + i * 10) + '" width="400" height="10" fill="' + ["#d8cfb8", "#cfc5ad", "#c6bba2", "#bdb197", "#b3a78c"][i] + '"/>' +
      Array.from({ length: 10 }, (_, j) => '<path d="M' + (j * 44 + (i % 2) * 22) + ' ' + (176 + i * 10) + 'v10" stroke="#a49880" stroke-width="1"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#vms3)"/>' +
      '<g class="vm-cloud"><ellipse cx="40" cy="30" rx="30" ry="8" fill="#fff" opacity=".7"/></g><g class="vm-cloud vm-cloud2"><ellipse cx="40" cy="52" rx="22" ry="6" fill="#fff" opacity=".5"/></g>' +
      /* far skyline up the shore */
      '<g fill="#8094aa" opacity=".8"><rect x="300" y="96" width="8" height="34"/><rect x="310" y="88" width="10" height="42"/><rect x="322" y="100" width="7" height="30"/><rect x="331" y="80" width="9" height="50"/><rect x="342" y="94" width="10" height="36"/><rect x="354" y="104" width="8" height="26"/></g>' +
      '<rect x="0" y="128" width="400" height="50" fill="#2f7fa8"/>' +
      '<g class="vm-wave"><path d="M-20 140q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe6f5" stroke-width="2" fill="none"/></g>' +
      '<g class="vm-wave vm-wave2"><path d="M-20 156q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#d8f1fa" stroke-width="2" fill="none"/></g>' +
      '<path d="M0 172q60 -6 120 0t120 0t160 0v6H0z" fill="#fff" opacity=".7" class="vm-wave"/>' +
      /* the field house: limestone, hip roof, a little round tower */
      '<rect x="40" y="96" width="120" height="44" fill="#cdbf9f"/><path d="M34 98l14 -16h104l14 16z" fill="#6a5e4c"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (52 + i * 22) + '" y="108" width="12" height="20" rx="6" fill="#4b5056"/>').join("") +
      '<rect x="146" y="64" width="22" height="76" fill="#c4b591"/><path d="M142 66l15 -16l15 16z" fill="#6a5e4c"/><rect x="152" y="80" width="10" height="14" rx="5" fill="#4b5056"/>' +
      '<rect x="0" y="140" width="190" height="36" fill="#6e9a4f"/><circle cx="20" cy="132" r="18" fill="#3f6b3a"/><circle cx="186" cy="130" r="16" fill="#3f6b3a"/>' +
      steps +
      '<rect x="0" y="226" width="400" height="34" fill="#2f7fa8"/><g class="vm-wave vm-wave2"><path d="M-20 238q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#d8f1fa" stroke-width="2" fill="none"/></g>' +
      '<path d="M0 226q50 6 100 0t100 0t100 0t100 0v5H0z" fill="#fff" opacity=".75" class="vm-wave"/>' +
      '<g class="vm-gull"><path d="M0 60q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#1d2440">PROMONTORY POINT · THE LAKE AT 55TH ST</text>',
      sky("vms3", "#7ab8e2", "#e6f2f8"));
  }

  /* 4. Black Star Square, Accra */
  function vmaccra() {
    const star = (cx, cy, r, f) => { let p = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.42 : r; p += (i ? "L" : "M") + (cx + rr * Math.cos(a)).toFixed(1) + " " + (cy + rr * Math.sin(a)).toFixed(1); } return '<path d="' + p + 'z" fill="' + f + '"/>'; };
    const flag = (x, y, cls) => '<rect x="' + x + '" y="' + y + '" width="2.5" height="70" fill="#ddd"/><g class="vm-flag ' + cls + '"><rect x="' + (x + 2.5) + '" y="' + y + '" width="34" height="8" fill="' + RED + '"/><rect x="' + (x + 2.5) + '" y="' + (y + 8) + '" width="34" height="8" fill="' + GOLD + '"/><rect x="' + (x + 2.5) + '" y="' + (y + 16) + '" width="34" height="8" fill="' + GRN + '"/>' + star(x + 19.5, y + 12, 4, "#111") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#vms4)"/>' +
      '<path class="vm-beam" d="M60 200L20 0h40z" fill="' + GOLD + '" opacity=".25"/><path class="vm-beam vm-beam2" d="M340 200L340 0h40z" fill="' + GOLD + '" opacity=".25"/>' +
      /* the gate */
      '<rect x="110" y="70" width="180" height="20" fill="#f3efe6"/><rect x="104" y="64" width="192" height="8" fill="#e4ded0"/>' +
      '<rect x="110" y="90" width="34" height="110" fill="#f3efe6"/><rect x="256" y="90" width="34" height="110" fill="#f3efe6"/>' +
      '<path d="M144 200v-80q56 -30 112 0v80z" fill="#21304a"/><rect x="144" y="90" width="112" height="10" fill="#e4ded0"/>' +
      '<path d="M156 100v20M176 100v14M200 100v12M224 100v14M244 100v20" stroke="#cfc8b8" stroke-width="3"/>' +
      '<rect x="176" y="38" width="48" height="28" fill="#f3efe6"/>' + star(200, 26, 20, "#111") +
      '<text x="200" y="84.5" text-anchor="middle" ' + font + ' font-size="10" fill="#3a3a3a" letter-spacing="1">FREEDOM AND JUSTICE</text>' +
      '<rect x="0" y="200" width="400" height="60" fill="#c9b79a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 200l-30 60" stroke="#b6a386" stroke-width="2"/>').join("") +
      flag(20, 130, "") + flag(66, 140, "vm-flag2") + flag(318, 130, "vm-flag2") + flag(362, 140, "") +
      Array.from({ length: 14 }, (_, i) => '<circle class="vm-glow' + (i % 2 ? " vm-glow2" : "") + '" cx="' + (14 + i * 28) + '" cy="' + (124 - (i % 3) * 4) + '" r="2.4" fill="' + [RED, GOLD, GRN][i % 3] + '"/>').join("") +
      '<rect x="110" y="214" width="180" height="20" rx="3" fill="#111" opacity=".8"/><text x="200" y="228" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">BLACK STAR SQUARE · ACCRA</text>',
      sky("vms4", "#1b1640", "#e8854a"));
  }

  /* 5. S Woodlawn Ave and E 47th St */
  function vmcorner() {
    const chapel = '<g fill="#a7a49c"><rect x="250" y="20" width="64" height="120"/><rect x="244" y="10" width="10" height="30"/><rect x="310" y="10" width="10" height="30"/><path d="M244 10l5 -10l5 10zM310 10l5 -10l5 10z"/>' +
      '<rect x="270" y="14" width="24" height="10"/><path d="M270 14l12 -10l12 10z"/></g>' +
      '<g fill="#5d5b56"><path d="M268 40h28v40h-28z" opacity=".55"/><path d="M276 44v32M288 44v32" stroke="#a7a49c" stroke-width="2"/><path d="M258 92h48v24h-48z" opacity=".4"/></g>' +
      '<path d="M200 140q40 -16 80 -16t120 16" fill="#8f8b82"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#vms5)"/>' + chapel +
      '<g fill="#3b3550"><rect x="0" y="96" width="70" height="44"/><rect x="74" y="108" width="60" height="32"/><rect x="340" y="104" width="60" height="36"/></g>' +
      '<rect x="0" y="130" width="400" height="94" fill="#b9a687"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#9c8a6c" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#9c8a6c" stroke-width="1"/>').join("")).join("") +
      tag("VIC MENSA", 14, 192, 44, ORG, -6) + tag("VICTOR", 150, 218, 18, BLU, -4) + tag("KTD", 30, 216, 18, GOLD, -3) + tag("INNANET", 220, 212, 15, "#fff", -5) +
      '<g class="vm-sp"><circle cx="256" cy="164" r="3" fill="' + ORG + '" opacity=".7"/></g><g class="vm-sp vm-sp2"><circle cx="262" cy="156" r="2" fill="' + ORG + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      car("vm-car", 0, 240, "#e6e6e6") +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(282, 112, 110, "E 47th St") + sign(240, 138, 152, "S Woodlawn Ave") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="vm-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>',
      sky("vms5", "#241f45", "#f2955a"));
  }

  window.SCENES = { vmstation: vmstation, vmrobie: vmrobie, vmpoint: vmpoint, vmaccra: vmaccra, vmcorner: vmcorner };
})();
