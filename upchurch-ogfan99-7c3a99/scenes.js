/* upchurch scenes (Regions tab: Memphis + Tennessee; Pegram, Cheatham County, "19 miles from the Music City lights"). CSS classes prefixed uc- (the page's own anim-train is kept).
   1 US 70 west into Pegram: a pickup rolling past the green highway sign with the US 70 shield, rolling hills.
   2 Pond Creek Road: cracked asphalt with no yellow lines, the little bridge painted John Deere green, the creek running under it.
   3 The Harpeth River: a canoe drifting under the limestone bluff, ripples moving, a heron.
   4 The holler: the family chicken farm, the red barn and long chicken house, chickens pecking, a muddy truck.
   5 Pond Creek Rd and Little Pond Creek Rd: green signs, UPCHURCH tagged on an old barn wall, the big white country church and tall pines behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ucflow{from{transform:translateX(0)}to{transform:translateX(-40px)}}.uc-flow{animation:ucflow 2.4s linear infinite}' +
    '@keyframes ucbob{0%,100%{transform:translateY(0) rotate(-1deg)}50%{transform:translateY(3px) rotate(1deg)}}.uc-bob{transform-box:fill-box;transform-origin:50% 50%;animation:ucbob 2.6s ease-in-out infinite}' +
    '@keyframes ucdrift{0%{transform:translateX(-30px)}100%{transform:translateX(60px)}}.uc-drift{animation:ucdrift 9s ease-in-out infinite alternate}' +
    '@keyframes ucpeck{0%,60%,100%{transform:rotate(0)}70%,90%{transform:rotate(28deg)}}.uc-peck{transform-box:fill-box;transform-origin:30% 90%;animation:ucpeck 1.6s ease-in-out infinite}.uc-peck2{animation-delay:-.6s}.uc-peck3{animation-delay:-1.1s}' +
    '@keyframes ucsway{0%,100%{transform:rotate(-1.5deg)}50%{transform:rotate(1.5deg)}}.uc-sway{transform-box:fill-box;transform-origin:50% 100%;animation:ucsway 3.4s ease-in-out infinite}' +
    '@keyframes ucfly{0%{transform:translate(0,0)}100%{transform:translate(420px,-30px)}}.uc-fly{animation:ucfly 12s linear infinite}' +
    '@keyframes ucspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.uc-sp{animation:ucspray 1.4s ease-out infinite}.uc-sp2{animation-delay:.45s}' +
    '@keyframes ucglow{0%,100%{opacity:.35}50%{opacity:1}}.uc-gl{animation:ucglow 1.8s ease-in-out infinite}.uc-gl2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const DEERE = "#367c2b", YEL = "#f2c230", RED = "#c0392b";
  const pine = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="uc-sway"><rect x="-3" y="-6" width="6" height="16" fill="#4e3d2c"/><path d="M0 -70l-16 26h8l-14 20h9l-14 20h54l-14 -20h9l-14 -20h8z" fill="#22472a"/></g></g>';
  const hills = (y, c1, c2) => '<path d="M0 ' + y + 'q60 -40 130 -8t140 -12t130 4v' + (260 - y) + 'h-400z" fill="' + c1 + '"/><path d="M0 ' + (y + 18) + 'q80 -26 160 -2t150 -10t90 6v' + (242 - y) + 'h-400z" fill="' + c2 + '"/>';
  const truck = (body) => '<g><path d="M0 24v-14q0 -4 4 -4h40l14 -14h30q6 0 8 6l8 14q4 0 4 6v10z" fill="' + body + '" stroke="#222" stroke-width="1.5"/><path d="M62 4h22l6 12h-28z" fill="#9fc6e0"/>' +
    '<path d="M4 6v-4h38v4M42 2v8" stroke="#222" stroke-width="2" fill="none"/><circle cx="22" cy="26" r="9" fill="#222"/><circle cx="22" cy="26" r="4" fill="#9a8a70"/><circle cx="84" cy="26" r="9" fill="#222"/><circle cx="84" cy="26" r="4" fill="#9a8a70"/>' +
    '<path d="M8 20q6 -4 12 0M70 20q6 -4 12 0" stroke="#6b4a2a" stroke-width="3" fill="none" opacity=".8"/></g>';

  /* 1. US 70 into Pegram */
  function ucsign() {
    const shield = '<g transform="translate(66 52)"><path d="M0 0h40v26q0 14 -20 22q-20 -8 -20 -22z" fill="#fff" stroke="#111" stroke-width="2"/><text x="20" y="13" text-anchor="middle" ' + font + ' font-size="7" fill="#111">US</text><text x="20" y="31" text-anchor="middle" ' + font + ' font-size="15" fill="#111">70</text></g>';
    const big = '<rect x="120" y="40" width="186" height="74" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/><text x="213" y="72" text-anchor="middle" ' + font + ' font-size="24" fill="#fff">PEGRAM</text>' +
      '<text x="213" y="98" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">KINGSTON SPRINGS  WEST</text><rect x="170" y="114" width="6" height="40" fill="#8a9098"/><rect x="250" y="114" width="6" height="40" fill="#8a9098"/>';
    return svg('<rect width="400" height="260" fill="url(#ucs1)"/><circle cx="340" cy="40" r="18" fill="#fff4c8" opacity=".9"/>' + hills(120, "#5c8a4a", "#4a7a3c") +
      pine(30, 160, 0.9) + pine(370, 158, 1) + '<rect x="84" y="78" width="4" height="76" fill="#8a9098"/>' + shield + big +
      '<rect x="0" y="160" width="400" height="100" fill="#55565c"/><path d="M0 162h400M0 252h400" stroke="#f2f2f2" stroke-width="3"/><path d="M0 207h400" stroke="' + YEL + '" stroke-width="3" stroke-dasharray="26 18"/>' +
      '<g class="anim-train"><g transform="translate(150 186) scale(1.5)">' + truck("#a33a2a") + '</g></g>', sky("ucs1", "#7fb6e0", "#e8f2f8"));
  }

  /* 2. Pond Creek Road bridge, John Deere green */
  function ucbridge() {
    const cracks = '<path d="M60 200l14 10l-6 12M150 228l18 -8l10 10M240 196l-10 14l14 8M320 232l12 -14l14 4" stroke="#2f3034" stroke-width="2" fill="none"/>';
    const rail = Array.from({ length: 12 }, (_, i) => '<rect x="' + (96 + i * 18) + '" y="146" width="5" height="24" fill="' + DEERE + '"/>').join("");
    return svg('<rect width="400" height="260" fill="url(#ucs2)"/>' + hills(96, "#4f7a40", "#3f6a34") + pine(40, 128, 1.1) + pine(80, 132, 0.9) + pine(330, 126, 1.1) + pine(372, 132, 0.95) +
      '<rect x="0" y="170" width="400" height="22" fill="#3a6a8a"/><g class="uc-flow">' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 40) + ' 180q10 -4 20 0" stroke="#bfe0f0" stroke-width="2" fill="none"/>').join("") + '</g>' +
      '<rect x="92" y="142" width="224" height="6" fill="' + DEERE + '"/>' + rail + '<rect x="92" y="166" width="224" height="6" fill="' + YEL + '"/>' +
      '<path d="M0 192h400v68h-400z" fill="#5a5b60"/>' + cracks +
      '<rect x="12" y="198" width="22" height="14" rx="2" fill="#4a4b50"/><rect x="368" y="224" width="20" height="12" rx="2" fill="#4a4b50"/>' +
      '<rect x="340" y="132" width="4" height="60" fill="#6b7178"/><rect x="326" y="114" width="32" height="20" fill="#f2d21a" transform="rotate(8 342 124)" stroke="#111" stroke-width="1.5"/><text x="342" y="128" text-anchor="middle" ' + font + ' font-size="8" fill="#111" transform="rotate(8 342 124)">CREEK</text>',
      sky("ucs2", "#f0a860", "#f8e0b0"));
  }

  /* 3. Harpeth River canoe under the bluff */
  function ucriver() {
    const bluff = '<path d="M0 40h150l20 30l-10 40l14 40h-174z" fill="#b8b0a0"/><path d="M0 70h140M0 100h156M0 128h160" stroke="#9a9282" stroke-width="3"/><path d="M0 40q40 -20 90 -10t70 10z" fill="#3f6a34"/>';
    const canoe = '<g class="uc-drift"><g transform="translate(170 176)"><g class="uc-bob"><path d="M0 0q50 18 100 0q-6 12 -50 14q-44 -2 -50 -14z" fill="#c0392b" stroke="#6a1a10" stroke-width="2"/>' +
      '<rect x="42" y="-18" width="12" height="16" rx="4" fill="#2a4a6a"/><circle cx="48" cy="-24" r="6" fill="#d9a77a"/><path d="M40 -26h16" stroke="#6b4a2a" stroke-width="3"/><path d="M30 -16l40 22" stroke="#6b4a2a" stroke-width="3"/></g></g></g>';
    const heron = '<g transform="translate(330 150)"><path d="M0 0q10 -20 6 -34q-2 -6 4 -8l12 -2l-12 6q2 18 -6 38z" fill="#9aa8b8"/><ellipse cx="-4" cy="4" rx="14" ry="7" fill="#8a98a8"/><path d="M-2 10v18M4 10v18" stroke="#555" stroke-width="2"/></g>';
    return svg('<rect width="400" height="260" fill="url(#ucs3)"/>' + hills(110, "#5a8a4a", "#4a7a3c") + bluff + pine(230, 130, 0.9) + pine(270, 132, 1) +
      '<rect x="0" y="150" width="400" height="110" fill="#4a7a8a"/><g class="uc-flow">' + Array.from({ length: 30 }, (_, i) => '<path d="M' + ((i * 53) % 440) + ' ' + (166 + (i * 17) % 80) + 'q10 -4 20 0" stroke="#cfe8ef" stroke-width="2" fill="none" opacity=".8"/>').join("") + '</g>' +
      canoe + heron + '<path class="uc-fly" d="M-20 50l6 -4l6 4l6 -4l6 4" stroke="#333" stroke-width="2" fill="none"/>', sky("ucs3", "#8fc4e8", "#e6f4fa"));
  }

  /* 4. The holler chicken farm */
  function ucfarm() {
    const chick = (x, y, c, cls) => '<g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="0" rx="10" ry="7" fill="' + c + '"/><g class="uc-peck ' + cls + '"><circle cx="9" cy="-6" r="5" fill="' + c + '"/><path d="M13 -6l5 1l-5 2z" fill="' + YEL + '"/><path d="M8 -11l2 -3l2 3z" fill="' + RED + '"/></g><path d="M-2 6v6M2 6v6" stroke="' + YEL + '" stroke-width="1.5"/></g>';
    const barn = '<g transform="translate(36 70)"><path d="M0 50l50 -40l50 40z" fill="#7a2a20"/><rect x="0" y="50" width="100" height="70" fill="' + RED + '"/><rect x="34" y="70" width="32" height="50" fill="#f4efe4"/><path d="M34 70l32 50M66 70l-32 50" stroke="' + RED + '" stroke-width="4"/>' +
      '<rect x="40" y="36" width="20" height="14" fill="#f4efe4"/></g>';
    const house = '<g transform="translate(160 112)"><rect x="0" y="12" width="220" height="40" fill="#e9e6de"/><path d="M-6 12l14 -14h204l14 14z" fill="#8a9098"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (10 + i * 21) + '" y="22" width="12" height="8" fill="#5a6070"/>').join("") + '</g>';
    return svg('<rect width="400" height="260" fill="url(#ucs4)"/>' + hills(100, "#5a8a4a", "#4a7a3c") + pine(150, 112, 0.8) + pine(392, 110, 0.9) + barn + house +
      '<rect x="0" y="164" width="400" height="96" fill="#7a9a4a"/><path d="M0 214q120 -18 240 0t160 -4v50h-400z" fill="#6a4a2a"/>' +
      chick(150, 196, "#f4efe4", "") + chick(190, 206, "#c87a3a", "uc-peck2") + chick(236, 194, "#f4efe4", "uc-peck3") + chick(110, 212, "#c87a3a", "uc-peck3") +
      '<g transform="translate(274 196)">' + truck("#2a5a8a") + '</g>', sky("ucs4", "#9cc8ea", "#eef6fb"));
  }

  /* 5. Pond Creek Rd and Little Pond Creek Rd, the white church behind */
  function uccorner() {
    const church = '<g transform="translate(250 20)"><rect x="0" y="50" width="80" height="54" fill="#f6f4ee"/><path d="M-6 52l46 -30l46 30z" fill="#e2ded4"/><rect x="30" y="0" width="20" height="40" fill="#f6f4ee"/><path d="M28 2l12 -22l12 22z" fill="#e2ded4"/>' +
      '<path d="M40 -32v12M34 -26h12" stroke="#c9a24a" stroke-width="3"/><rect x="34" y="12" width="12" height="16" rx="6" fill="#4a5a7a"/>' +
      '<rect x="10" y="62" width="12" height="22" rx="6" fill="#ffd27a" class="uc-gl"/><rect x="58" y="62" width="12" height="22" rx="6" fill="#ffd27a" class="uc-gl uc-gl2"/><rect x="32" y="72" width="16" height="32" fill="#6a4a2a"/></g>';
    const boards = Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="124" width="19" height="86" fill="' + (i % 3 ? "#6e5236" : "#7a5c3e") + '"/>').join("");
    return svg('<rect width="400" height="260" fill="url(#ucs5)"/>' + hills(96, "#3f5a3a", "#34502f") + pine(206, 112, 1.1) + pine(366, 112, 1.2) + pine(390, 116, 0.9) + church +
      boards + '<path d="M0 124h400" stroke="#4a3622" stroke-width="3"/>' +
      tag("UPCHURCH", 102, 182, 42, "#7ec850", -6) + tag("CREEKER", 104, 204, 18, YEL, -4) + tag("RHEC", 300, 198, 20, "#ff6b4a", -3) +
      '<g fill="#7ec850"><circle class="uc-sp" cx="334" cy="168" r="2.5"/><circle class="uc-sp uc-sp2" cx="342" cy="164" r="2"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#5a5b60"/><path d="M40 226l14 8M200 240l18 -6M300 222l-10 10" stroke="#2f3034" stroke-width="2"/>' +
      '<rect x="56" y="40" width="5" height="172" fill="#6b7178"/>' + sign(4, 44, 136, "POND CREEK RD") + sign(8, 70, 170, "LITTLE POND CREEK RD"),
      sky("ucs5", "#1e2a48", "#d88a5a"));
  }

  window.SCENES = { ucsign: ucsign, ucbridge: ucbridge, ucriver: ucriver, ucfarm: ucfarm, uccorner: uccorner };
})();
