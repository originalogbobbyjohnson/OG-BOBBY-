/* zapp scenes (Regions tab: St. Louis + Ohio; Hamilton, Ohio, where Roger Troutman and the Troutman brothers came from). CSS classes and ids prefixed zp- (the page's own anim-train is kept on the bus).
   1 BCRTA Route R1 (Hamilton / Middletown) pulling up at High St and East Ave in downtown Hamilton.
   2 The Soldiers, Sailors and Pioneers Monument at High St and Monument Ave: limestone hall, tall column with the soldier on top, the Great Miami River rolling by.
   3 Central State University in Wilberforce, Roger's school: red-brick hall, white columns, maroon and gold banners, the drumline marching.
   4 RiversEdge amphitheater at Marcum Park on the Great Miami: the white shell, a keyboard with a talk box tube, sound waves bouncing.
   5 High St and N 3rd St in Hamilton: green signs, ZAPP tagged on the brick, the Butler County Courthouse clock tower behind.
   No Dayton studio, no Salem Ave (that is where Roger died). 400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes zpflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.zp-flk{animation:zpflick 2.2s infinite}.zp-flk2{animation-delay:.8s}' +
    '@keyframes zpriver{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.zp-riv{animation:zpriver 3s linear infinite}' +
    '@keyframes zpflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.zp-flag{transform-box:fill-box;transform-origin:0 50%;animation:zpflag 1.6s ease-in-out infinite}.zp-fl2{animation-delay:-.8s}' +
    '@keyframes zpbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}.zp-bnc{animation:zpbounce .9s ease-in-out infinite}.zp-b2{animation-delay:-.3s}.zp-b3{animation-delay:-.6s}' +
    '@keyframes zpwave{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.zp-wave{transform-box:fill-box;transform-origin:50% 50%;animation:zpwave 1.8s ease-out infinite}.zp-w2{animation-delay:.6s}.zp-w3{animation-delay:1.2s}' +
    '@keyframes zpglow{0%,100%{opacity:.5}50%{opacity:1}}.zp-glow{animation:zpglow 2.2s ease-in-out infinite}' +
    '@keyframes zpspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.zp-sp{animation:zpspray 1.4s ease-out infinite}.zp-sp2{animation-delay:.45s}' +
    '@keyframes zpcloud{0%,100%{transform:translateX(0)}50%{transform:translateX(16px)}}.zp-cl{animation:zpcloud 8s ease-in-out infinite}' +
    '@keyframes zphand{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.zp-hand{transform-box:fill-box;transform-origin:50% 100%;animation:zphand 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const PINK = "#ff3fa4", CYAN = "#35e0ff", GOLD = "#ffd23f", BUS = "#1f5fa8", SIGN = "#0f6b3a", MAROON = "#7a1f2b", CGOLD = "#e8b82a", STONE = "#d8cfb8";
  const store = (x, y, w, h, body, awn) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + body + '"/><rect x="' + (x + 6) + '" y="' + (y + 10) + '" width="' + (w - 12) + '" height="14" fill="#ffd98a" class="zp-flk"/>' +
    '<path d="M' + x + ' ' + (y + h - 30) + 'h' + w + 'l-6 10h-' + (w - 12) + 'z" fill="' + awn + '"/><rect x="' + (x + 8) + '" y="' + (y + h - 18) + '" width="' + (w - 16) + '" height="18" fill="#2a3a4a"/>';

  /* 1. BCRTA Route R1 at High St and East Ave, downtown Hamilton */
  function zpstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 44) + '" y="100" width="36" height="28" rx="3" fill="#1d2733"/>').join("");
    const bus = '<g class="anim-train"><rect x="60" y="86" width="320" height="86" rx="10" fill="#f4f5f7" stroke="#9aa3ab" stroke-width="2"/>' + win +
      '<rect x="60" y="136" width="320" height="12" fill="' + BUS + '"/><rect x="60" y="150" width="320" height="3" fill="' + GOLD + '"/>' +
      '<rect x="64" y="98" width="10" height="56" rx="2" fill="#1d2733"/><rect x="66" y="89" width="110" height="10" rx="2" fill="#111"/><text x="121" y="97" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">R1 HAMILTON</text>' +
      '<circle class="zp-flk" cx="66" cy="162" r="3.5" fill="#fff6c2"/><circle cx="120" cy="174" r="12" fill="#222"/><circle cx="120" cy="174" r="5" fill="#777"/><circle cx="320" cy="174" r="12" fill="#222"/><circle cx="320" cy="174" r="5" fill="#777"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#zps1)"/>' +
      '<g class="zp-cl"><ellipse cx="90" cy="30" rx="36" ry="8" fill="#fff" opacity=".35"/><ellipse cx="310" cy="22" rx="40" ry="8" fill="#fff" opacity=".3"/></g>' +
      store(0, 60, 74, 120, "#8f4a34", "#2a6b4a") + store(78, 74, 80, 106, "#c9b48a", "#7a1f2b") + store(162, 56, 84, 124, "#6b5a7a", "#1f5fa8") + store(250, 70, 72, 110, "#a8664a", "#d8a020") + store(326, 62, 74, 118, "#7a8a6a", "#5a2a4a") +
      '<rect x="0" y="180" width="400" height="80" fill="#3b3e44"/><path d="M0 220h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="0" y="176" width="400" height="8" fill="#a9a59c"/>' +
      bus +
      '<rect x="388" y="102" width="4" height="78" fill="#555"/><rect x="368" y="80" width="30" height="22" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/><text x="383" y="95" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">BUS</text>' +
      '<rect x="64" y="196" width="272" height="52" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<text x="80" y="218" ' + font + ' font-size="15" fill="#fff" letter-spacing="1">HIGH ST &amp;</text>' +
      '<text x="80" y="238" ' + font + ' font-size="15" fill="#f3e3c3" letter-spacing="1">EAST AV</text>' +
      '<circle cx="306" cy="222" r="17" fill="' + BUS + '"/><text x="306" y="228" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">R1</text>',
      sky("zps1", "#3a2a6a", "#ff9a6a"));
  }

  /* 2. Soldiers, Sailors and Pioneers Monument on the Great Miami */
  function zpmonument() {
    const waves = Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' 0q10 -5 20 0t20 0" fill="none" stroke="#b9e3f2" stroke-width="2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#zps2)"/>' +
      '<g class="zp-cl"><ellipse cx="80" cy="40" rx="40" ry="9" fill="#fff" opacity=".45"/><ellipse cx="320" cy="56" rx="36" ry="8" fill="#fff" opacity=".4"/></g>' +
      /* far bank trees */
      '<g fill="#3f6b3a"><circle cx="20" cy="166" r="22"/><circle cx="60" cy="160" r="26"/><circle cx="340" cy="162" r="24"/><circle cx="384" cy="166" r="22"/></g>' +
      /* octagonal limestone hall */
      '<rect x="138" y="128" width="124" height="54" fill="' + STONE + '" stroke="#8a826e" stroke-width="2"/>' +
      '<path d="M130 128h140l-10 -12h-120z" fill="#c4bba2" stroke="#8a826e" stroke-width="2"/>' +
      '<path d="M178 182v-30q22 -22 44 0v30z" fill="#4a4436" stroke="#8a826e" stroke-width="2"/>' +
      '<rect x="146" y="140" width="14" height="30" fill="#6a7a8a"/><rect x="240" y="140" width="14" height="30" fill="#6a7a8a"/>' +
      /* the column + soldier */
      '<rect x="190" y="40" width="20" height="76" fill="#e2dac4" stroke="#8a826e" stroke-width="2"/><rect x="184" y="34" width="32" height="8" fill="#c4bba2" stroke="#8a826e" stroke-width="1.5"/>' +
      '<g fill="#5e6b4a"><circle cx="200" cy="10" r="5"/><path d="M193 34v-12q0 -8 7 -8q7 0 7 8v12z"/><rect x="207" y="2" width="2.5" height="30"/></g>' +
      /* riverbank + river */
      '<rect x="0" y="182" width="400" height="12" fill="#7a8a5a"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#3f7fa0"/><g class="zp-riv"><g transform="translate(0 210)">' + waves + '</g><g transform="translate(20 232)">' + waves + '</g><g transform="translate(-10 250)">' + waves + '</g></g>' +
      /* flags on the hall */
      '<rect x="140" y="96" width="2" height="22" fill="#555"/><rect class="zp-flag" x="142" y="96" width="18" height="10" fill="' + PINK + '"/>' +
      '<rect x="258" y="96" width="2" height="22" fill="#555"/><rect class="zp-flag zp-fl2" x="260" y="96" width="18" height="10" fill="' + CYAN + '"/>',
      sky("zps2", "#5aa0d8", "#f6dcb0"));
  }

  /* 3. Central State University, Wilberforce: maroon and gold, the drumline */
  function zpcentral() {
    const cols = [150, 176, 202, 228].map(x => '<rect x="' + x + '" y="92" width="10" height="72" fill="#f4f1ea" stroke="#bdb6a6"/>').join("");
    const drum = (x, cls) => '<g class="zp-bnc ' + cls + '"><rect x="' + (x - 7) + '" y="200" width="14" height="22" rx="4" fill="' + MAROON + '"/><circle cx="' + x + '" cy="192" r="7" fill="' + MAROON + '"/>' +
      '<ellipse cx="' + x + '" cy="226" rx="12" ry="5" fill="#f4f1ea" stroke="' + CGOLD + '" stroke-width="2"/><rect x="' + (x - 12) + '" y="226" width="24" height="10" fill="' + CGOLD + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#zps3)"/>' +
      /* brick hall */
      '<rect x="60" y="76" width="280" height="110" fill="#9a3d2a" stroke="#5a2216" stroke-width="2"/>' +
      Array.from({ length: 12 }, (_, r) => '<path d="M60 ' + (84 + r * 9) + 'h280" stroke="#6e2a1c" stroke-width="1" opacity=".5"/>').join("") +
      '<path d="M138 92l62 -40l62 40z" fill="#f4f1ea" stroke="#bdb6a6" stroke-width="2"/><rect x="138" y="88" width="124" height="6" fill="#f4f1ea"/>' + cols +
      '<rect x="186" y="134" width="28" height="52" fill="#3a1e14"/>' +
      [78, 104, 276, 302].map(x => '<rect x="' + x + '" y="100" width="18" height="26" fill="#ffd98a" class="zp-flk"/><rect x="' + x + '" y="140" width="18" height="26" fill="#2a3a4a"/>').join("") +
      /* banners */
      '<g class="zp-flag"><rect x="30" y="60" width="22" height="58" fill="' + MAROON + '" stroke="' + CGOLD + '" stroke-width="2"/><text x="41" y="94" text-anchor="middle" ' + font + ' font-size="9" fill="' + CGOLD + '" transform="rotate(-90 41 90)">CSU</text></g>' +
      '<rect x="28" y="56" width="3" height="130" fill="#555"/>' +
      '<g class="zp-flag zp-fl2"><rect x="350" y="60" width="22" height="58" fill="' + CGOLD + '" stroke="' + MAROON + '" stroke-width="2"/><text x="361" y="94" text-anchor="middle" ' + font + ' font-size="9" fill="' + MAROON + '" transform="rotate(-90 361 90)">CSU</text></g>' +
      '<rect x="348" y="56" width="3" height="130" fill="#555"/>' +
      '<rect x="120" y="60" width="160" height="16" rx="2" fill="' + MAROON + '"/><text x="200" y="72" text-anchor="middle" ' + font + ' font-size="10" fill="' + CGOLD + '" letter-spacing="2">CENTRAL STATE</text>' +
      /* lawn + drumline */
      '<rect x="0" y="186" width="400" height="74" fill="#4f7a3a"/>' +
      drum(70, "") + drum(130, "zp-b2") + drum(190, "zp-b3") + drum(250, "") + drum(310, "zp-b2"),
      sky("zps3", "#4a8ac8", "#f8d8a8"));
  }

  /* 4. RiversEdge amphitheater, Marcum Park: the shell, a keyboard with a talk box tube */
  function zpriversedge() {
    return svg(
      '<rect width="400" height="260" fill="url(#zps4)"/>' +
      '<g fill="#fff"><circle cx="40" cy="30" r="1.5"/><circle cx="120" cy="18" r="1.2"/><circle cx="300" cy="26" r="1.5"/><circle cx="360" cy="50" r="1.2"/></g>' +
      /* white shell */
      '<path d="M70 196q20 -140 170 -150q90 -4 100 20q-60 6 -80 130z" fill="#f4f1ea" stroke="#bdb6a6" stroke-width="2"/>' +
      '<path d="M96 196q24 -110 140 -120q50 -2 60 10q-46 10 -60 110z" fill="#2a1840"/>' +
      '<rect x="80" y="192" width="200" height="12" fill="#1a1020"/>' +
      /* keyboard + talk box tube + mic stand */
      '<rect x="120" y="164" width="82" height="12" rx="2" fill="#222"/><rect x="124" y="166" width="74" height="6" fill="#f4f1ea"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (128 + i * 8) + '" y="166" width="3" height="4" fill="#111"/>').join("") +
      '<rect x="130" y="176" width="3" height="16" fill="#555"/><rect x="190" y="176" width="3" height="16" fill="#555"/>' +
      '<path d="M200 168q30 -6 30 -40q0 -20 12 -24" fill="none" stroke="' + CYAN + '" stroke-width="3"/>' +
      '<rect x="240" y="96" width="3" height="96" fill="#888"/><rect x="236" y="96" width="12" height="6" rx="2" fill="#333"/>' +
      '<g transform="translate(244 100)"><circle class="zp-wave" r="18" fill="none" stroke="' + PINK + '" stroke-width="3"/><circle class="zp-wave zp-w2" r="18" fill="none" stroke="' + CYAN + '" stroke-width="3"/><circle class="zp-wave zp-w3" r="18" fill="none" stroke="' + GOLD + '" stroke-width="3"/></g>' +
      /* river + lawn + crowd hands */
      '<rect x="0" y="204" width="400" height="20" fill="#24361f"/><rect x="0" y="224" width="400" height="36" fill="#2a5a7a"/>' +
      '<path d="M0 236q20 -5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" fill="none" stroke="#9fd2ea" stroke-width="2" opacity=".7" class="zp-riv"/>' +
      [30, 70, 320, 360].map((x, i) => '<g class="zp-hand" style="animation-delay:-' + (i * 0.3) + 's"><rect x="' + x + '" y="186" width="6" height="22" rx="3" fill="#1b1210"/><circle cx="' + (x + 3) + '" cy="184" r="5" fill="#1b1210"/></g>').join(""),
      sky("zps4", "#120a30", "#6a2a6a"));
  }

  /* 5. High St and N 3rd St, Hamilton: signs, the tag, Butler County Courthouse behind */
  function zpcorner() {
    const bricks = Array.from({ length: 13 }, (_, r) => '<path d="M0 ' + (132 + r * 9) + 'h246" stroke="#5e2f22" stroke-width="1" opacity=".6"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#zps5)"/>' +
      /* courthouse: buff sandstone, central clock tower with dome */
      '<rect x="150" y="96" width="250" height="70" fill="#cdb98e" stroke="#8a7a52" stroke-width="2"/>' +
      [170, 200, 230, 330, 360].map(x => '<path d="M' + x + ' 140v-24q8 -10 16 0v24z" fill="#3a3428"/>').join("") +
      '<rect x="258" y="44" width="48" height="122" fill="#d6c49a" stroke="#8a7a52" stroke-width="2"/>' +
      '<path d="M252 46q30 -40 60 0z" fill="#5a6a5a" stroke="#3a443a" stroke-width="2"/><rect x="280" y="0" width="4" height="12" fill="#5a6a5a"/><circle cx="282" cy="10" r="4" fill="' + GOLD + '"/>' +
      '<circle cx="282" cy="70" r="13" fill="#f6efd8" stroke="#3a3428" stroke-width="2" class="zp-glow"/><path d="M282 70v-9M282 70l6 4" stroke="#222" stroke-width="2" stroke-linecap="round"/>' +
      '<rect x="270" y="96" width="24" height="40" fill="#3a3428"/>' +
      /* brick wall + tags */
      '<rect x="0" y="126" width="246" height="134" fill="#8f3f2c"/>' + bricks +
      tag("ZAPP", 20, 194, 62, PINK, -7) + tag("ROGER", 118, 236, 30, CYAN, -4) + tag("BOUNCE", 18, 236, 18, GOLD, -3) +
      '<g class="zp-sp"><circle cx="214" cy="190" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="zp-sp zp-sp2"><circle cx="222" cy="194" r="2.5" fill="' + PINK + '" opacity=".6"/></g>' +
      /* street */
      '<rect x="246" y="166" width="154" height="74" fill="#3b3e44"/><path d="M246 204h154" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/><rect x="0" y="240" width="400" height="20" fill="#9c978d"/>' +
      /* sign pole */
      '<rect x="318" y="128" width="5" height="112" fill="#5a5a5a"/>' +
      '<rect x="276" y="118" width="88" height="18" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="320" y="131" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">HIGH ST</text>' +
      '<rect x="280" y="140" width="80" height="18" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="320" y="153" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">N 3RD ST</text>',
      sky("zps5", "#1a0f3a", "#e06a8a"));
  }

  window.SCENES = { zpstation: zpstation, zpmonument: zpmonument, zpcentral: zpcentral, zpriversedge: zpriversedge, zpcorner: zpcorner };
})();
