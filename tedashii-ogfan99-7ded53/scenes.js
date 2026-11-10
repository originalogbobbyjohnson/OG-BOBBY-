/* tedashii scenes (Regions tab: Houston + Texas; born in Lufkin in East Texas, claims H-Town (Baylor's profile: born and raised in Houston), found his faith at Baylor in Waco, 116 Clique / Reach Records). CSS classes prefixed td- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tdglow{0%,100%{opacity:.45}50%{opacity:1}}.td-glow{animation:tdglow 2.4s ease-in-out infinite}.td-g2{animation-delay:-1.2s}' +
    '@keyframes tdslab{0%{transform:translateX(-200px)}100%{transform:translateX(460px)}}.td-slab{animation:tdslab 9s linear infinite;animation-delay:-4.5s}' +
    '@keyframes tdtruck{0%{transform:translateX(460px)}100%{transform:translateX(-200px)}}.td-truck{animation:tdtruck 11s linear infinite;animation-delay:-5s}' +
    '@keyframes tdsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.td-sw{transform-box:fill-box;transform-origin:50% 100%;animation:tdsway 3.4s ease-in-out infinite}.td-sw2{animation-delay:-1.7s}' +
    '@keyframes tdsparkle{0%,100%{opacity:0;transform:scale(.4)}50%{opacity:1;transform:scale(1)}}.td-spk{transform-box:fill-box;transform-origin:50% 50%;animation:tdsparkle 1.8s ease-in-out infinite}.td-s2{animation-delay:-.6s}.td-s3{animation-delay:-1.2s}' +
    '@keyframes tdball{0%{transform:translate(0,0)}50%{transform:translate(70px,-40px)}100%{transform:translate(140px,0)}}.td-ball{animation:tdball 3s ease-in-out infinite}' +
    '@keyframes tdripple{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.td-rip{animation:tdripple 3s linear infinite}' +
    '@keyframes tdspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.td-sp{animation:tdspray 1.4s ease-out infinite}.td-sp2{animation-delay:.45s}' +
    '@keyframes tddrip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(30px);opacity:0}}.td-dr{animation:tddrip 1.8s ease-in infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const spark = (x, y, c) => '<path class="td-spk' + (c || "") + '" d="M' + x + ' ' + (y - 6) + 'l2 4l4 2l-4 2l-2 4l-2 -4l-4 -2l4 -2z" fill="#fff"/>';
  const ICE = "#7fdcff", GOLD = "#c9a24a", ROSE = "#e84a5f", MRED = "#d6202e";
  const towers = (fill) => '<g fill="' + fill + '"><rect x="30" y="70" width="34" height="80"/><rect x="70" y="40" width="30" height="110"/><path d="M110 150V50l16 -20l16 20v100z"/><rect x="150" y="60" width="40" height="90"/><rect x="200" y="30" width="36" height="120"/><rect x="246" y="66" width="30" height="84"/><path d="M286 150V58h34v92z"/><rect x="330" y="44" width="40" height="106"/></g>';

  /* 0. The METRORail Red Line pulling into Main Street Square downtown: a street-level stop right in the middle of Main St, the fountain jets along the platform, the black sign with the red line bullet, the downtown towers above */
  function tdtrain() {
    const train = '<g class="anim-train"><rect x="20" y="120" width="290" height="70" rx="12" fill="#e8ecef" stroke="#8a949c" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (44 + i * 42) + '" y="130" width="32" height="28" rx="3" fill="#24323e"/>').join("") +
      '<rect x="20" y="164" width="290" height="8" fill="' + MRED + '"/><rect x="20" y="172" width="290" height="4" fill="#2a4a8a"/>' +
      '<rect x="24" y="124" width="14" height="40" rx="3" fill="#24323e"/><circle cx="28" cy="180" r="3.5" fill="#fff6c2"/>' +
      '<rect x="160" y="108" width="40" height="12" fill="#5a646c"/><path d="M180 108l-20 -24h40z" stroke="#333" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#td0)"/>' + towers("#3e4a64") +
      Array.from({ length: 26 }, (_, i) => '<rect class="' + (i % 4 ? "" : "td-glow") + '" x="' + [36, 50, 76, 88, 116, 130, 158, 176, 206, 222, 252, 292, 306, 338, 354][i % 15] + '" y="' + (74 + (i % 5) * 14) + '" width="6" height="7" fill="#ffe6a8" opacity=".8"/>').join("") +
      '<path d="M0 80h400" stroke="#333" stroke-width="1.5"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#8a8478"/><rect x="0" y="190" width="400" height="10" fill="#b8b2a6"/><path d="M0 200h400M0 214h400" stroke="#555" stroke-width="3"/>' +
      [40, 120, 280, 360].map(x => '<path class="td-glow td-g2" d="M' + (x - 3) + ' 236q3 -26 6 0z" fill="#dff4ff"/>').join("") +
      '<rect x="0" y="232" width="400" height="28" fill="#5a8ab0" opacity=".7"/>' +
      train +
      '<rect x="20" y="16" width="270" height="34" rx="3" fill="#111"/><text x="64" y="38" ' + font + ' font-size="13" fill="#fff">Main Street Square</text>' +
      '<rect x="30" y="22" width="26" height="22" rx="4" fill="' + MRED + '"/><text x="43" y="37" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">RED</text>',
      sky("td0", "#5a8ad0", "#f2d6a8"));
  }

  /* 1. Allen Parkway along Buffalo Bayou: a candy-paint slab on swangas gliding by, the trunk popped and glowing, the bayou rippling, downtown's towers behind */
  function tdslab() {
    const slab = '<g class="td-slab"><path d="M0 196q4 -22 30 -24l20 -18h70l22 18h34q14 2 14 24z" fill="#8a2be2" stroke="#3a0a6a" stroke-width="2"/>' +
      '<path d="M56 172l14 -14h44l16 14z" fill="#24323e"/><path d="M0 182h190" stroke="#d8b8ff" stroke-width="2" opacity=".8"/>' +
      [34, 150].map(x => '<circle cx="' + x + '" cy="198" r="13" fill="#222"/><circle cx="' + x + '" cy="198" r="9" fill="#d8dce0"/><path d="M' + x + ' 198l14 -2M' + x + ' 198l12 6M' + x + ' 198l4 12" stroke="#aab" stroke-width="2"/>').join("") +
      '<rect x="2" y="178" width="18" height="6" rx="2" fill="#ff4a4a" class="td-glow"/><rect x="176" y="180" width="12" height="5" rx="2" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#td1)"/>' + towers("#2e3a56") +
      Array.from({ length: 22 }, (_, i) => '<rect class="' + (i % 3 ? "" : "td-glow") + '" x="' + [36, 76, 88, 118, 156, 172, 206, 220, 252, 294, 336, 352][i % 12] + '" y="' + (76 + (i % 4) * 16) + '" width="5" height="6" fill="#ffd98a" opacity=".85"/>').join("") +
      '<rect x="0" y="150" width="400" height="16" fill="#4e7a3a"/>' +
      '<rect x="0" y="166" width="400" height="44" fill="#4e4e54"/><path d="M0 188h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      slab +
      '<rect x="0" y="210" width="400" height="12" fill="#5e8a46"/><rect x="0" y="222" width="400" height="38" fill="#3a5a6a"/>' +
      '<g class="td-rip">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (234 + (i % 3) * 8) + 'q10 -4 20 0" stroke="#9ac8d8" stroke-width="2" fill="none" opacity=".6"/>').join("") + '</g>',
      sky("td1", "#1a2448", "#c86a5a"));
  }

  /* 2. The piney woods outside Lufkin, where he was born: tall loblolly pines swaying, the red-dirt road, a log truck rolling by, the late East Texas sun */
  function tdpines() {
    const pine = (x, h, d) => '<g class="td-sw' + (d ? " td-sw2" : "") + '"><rect x="' + (x - 3) + '" y="' + (170 - h) + '" width="6" height="' + h + '" fill="#6a4a32"/>' +
      [0, 1, 2].map(i => '<ellipse cx="' + x + '" cy="' + (178 - h + i * 16) + '" rx="' + (16 + i * 4) + '" ry="10" fill="' + ["#2e5a32", "#356a3a", "#2a5030"][i] + '"/>').join("") + '</g>';
    const truck = '<g class="td-truck"><rect x="0" y="176" width="40" height="26" rx="3" fill="#c83a2a"/><rect x="6" y="180" width="18" height="10" fill="#24323e"/>' +
      '<rect x="44" y="190" width="120" height="6" fill="#444"/>' + [0, 1, 2].map(i => '<rect x="48" y="' + (172 + i * 6) + '" width="112" height="6" rx="3" fill="#a87a4a" stroke="#6a4a2a" stroke-width="1"/>').join("") +
      [14, 70, 140].map(x => '<circle cx="' + x + '" cy="204" r="8" fill="#222"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#td2)"/>' +
      '<circle cx="320" cy="90" r="30" fill="#ffc46a" class="td-glow"/>' +
      [20, 70, 120, 230, 290, 350, 390].map((x, i) => pine(x, 120 + (i % 3) * 18, i % 2)).join("") +
      '<rect x="0" y="168" width="400" height="92" fill="#4a6a32"/>' +
      '<path d="M0 196h400v18h-400z" fill="#b0583a"/>' +
      truck +
      [60, 180, 300].map(x => '<path d="M' + x + ' 236l4 -12l4 12" stroke="#6a8a3a" stroke-width="2" fill="none"/>').join(""),
      sky("td2", "#e8a060", "#f6dcae"));
  }

  /* 3. Waco Hall at Baylor, where he found his faith (and later opened for Lecrae): the long red-brick hall, the white-columned portico, green and gold banners, a football spiraling across the lawn */
  function tdbaylor() {
    return svg(
      '<rect width="400" height="260" fill="url(#td3)"/>' +
      '<rect x="30" y="80" width="340" height="100" fill="#a8483a" stroke="#6a2a22" stroke-width="2"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M30 ' + (88 + i * 8) + 'h340" stroke="#943e32" stroke-width="1"/>').join("") +
      '<path d="M120 80l80 -36l80 36z" fill="#f2efe6" stroke="#9a968e" stroke-width="2"/><rect x="116" y="80" width="168" height="10" fill="#f2efe6" stroke="#9a968e" stroke-width="1.5"/>' +
      [130, 160, 190, 220, 250].map(x => '<rect x="' + (x + 6) + '" y="90" width="10" height="86" fill="#f8f6f0" stroke="#bbb" stroke-width="1"/>').join("") +
      [50, 80, 300, 330].map(x => '<rect x="' + x + '" y="100" width="20" height="30" fill="#f2efe6"/><rect x="' + (x + 3) + '" y="103" width="14" height="24" fill="#2e3c4c"/>').join("") +
      [60, 320].map((x, i) => '<rect x="' + x + '" y="136" width="4" height="40" fill="#555"/><rect x="' + (x + 4) + '" y="138" width="16" height="30" fill="' + (i ? "#f2c400" : "#1f5a3a") + '"/>').join("") +
      '<rect x="0" y="178" width="400" height="82" fill="#5e9a48"/><rect x="170" y="178" width="60" height="82" fill="#d8d0bc"/>' +
      '<g class="td-ball"><ellipse cx="80" cy="210" rx="10" ry="6" fill="#7a4a2a" transform="rotate(-20 80 210)"/><path d="M76 210h8" stroke="#fff" stroke-width="1.5"/></g>',
      sky("td3", "#6aaee6", "#f2ead2"));
  }

  /* 4. The corner: Main St and Lamar St downtown, TEDASHII tagged big on the wall, diamonds sparkling, the downtown towers lit up behind */
  function tdcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#td4)"/>' + towers("#232a40") +
      Array.from({ length: 24 }, (_, i) => '<rect class="' + (i % 3 ? "" : "td-glow") + '" x="' + [36, 50, 76, 88, 116, 156, 172, 206, 220, 252, 292, 336][i % 12] + '" y="' + (78 + (i % 4) * 14) + '" width="5" height="6" fill="#ffd98a" opacity=".8"/>').join("") +
      '<rect x="0" y="136" width="400" height="90" fill="#5a5a6e"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#4a4a5e" stroke-width="1"/>').join("") +
      tag("TEDASHII", 18, 198, 44, ICE, -5) + tag("NEVER FOLD", 28, 222, 20, GOLD, -3) + tag("T-DOT", 230, 194, 26, ROSE, -6) + tag("H-TOWN", 196, 220, 20, "#fff", -4) +
      '<path d="M244 150l8 -8h14l8 8l-15 17z" fill="' + ICE + '" stroke="#fff" stroke-width="1.5"/>' + spark(238, 142, "") + spark(282, 146, " td-s2") + spark(276, 168, " td-s3") +
      '<g class="td-dr"><path d="M64 204q-4 6 0 10q4 -4 0 -10z" fill="' + ICE + '"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="370" y="96" width="6" height="130" fill="#2f2f2f"/>' + sign(296, 98, 100, "Main St") + sign(296, 124, 100, "Lamar St") +
      '<g class="td-sp"><circle cx="160" cy="166" r="3" fill="' + ICE + '" opacity=".7"/></g><g class="td-sp td-sp2"><circle cx="166" cy="160" r="2" fill="' + ICE + '" opacity=".6"/></g>',
      sky("td4", "#121a36", "#7a4a8a"));
  }

  window.SCENES = { tdtrain: tdtrain, tdslab: tdslab, tdpines: tdpines, tdbaylor: tdbaylor, tdcorner: tdcorner };
})();
