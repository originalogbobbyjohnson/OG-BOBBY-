/* musiqsoulchild scenes (Regions tab: Philadelphia; North Philly). CSS classes prefixed mq- (the page's own anim-train is kept).
   1 Spring Garden on SEPTA's Broad Street Line (local stop, underground): tiled wall, orange BSL stripe, a silver car sliding in.
   2 A Touch of Jazz, Jazzy Jeff's basement studio at 444 N 3rd St, where most of Aijuswanaseing was made: brick walls, keys, a mic, meters moving.
   3 69th Street in Upper Darby: the record store where his manager first met him, the old movie house marquee next door, bulbs chasing.
   4 The Electric Factory at 7th and Willow: the big brick warehouse hall, the marquee lit for a hometown show, spotlights sweeping.
   5 N Broad St and Spring Garden St: green signs, MUSIQ tagged on the wall, the white Inquirer Building clock tower up Broad behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mqglow{0%,100%{opacity:.45}50%{opacity:1}}.mq-glow{animation:mqglow 2.4s ease-in-out infinite}.mq-glow2{animation-delay:-1.2s}' +
    '@keyframes mqbar{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.mq-bar{transform-box:fill-box;transform-origin:50% 100%;animation:mqbar .8s ease-in-out infinite}.mq-b2{animation-delay:-.25s}.mq-b3{animation-delay:-.5s}' +
    '@keyframes mqnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-50px);opacity:0}}.mq-note{animation:mqnote 3.2s ease-out infinite}.mq-n2{animation-delay:-1.1s}.mq-n3{animation-delay:-2.2s}' +
    '@keyframes mqbulb{0%,100%{opacity:1}50%{opacity:.2}}.mq-bulb{animation:mqbulb .9s steps(1) infinite}.mq-bulb2{animation-delay:-.45s}' +
    '@keyframes mqsweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.mq-sweep{transform-box:fill-box;transform-origin:50% 100%;animation:mqsweep 4s ease-in-out infinite}.mq-sw2{animation-delay:-2s}' +
    '@keyframes mqcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.mq-car{animation:mqcar 7s linear infinite}' +
    '@keyframes mqhand{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.mq-hand{transform-box:view-box;transform-origin:120px 62px;animation:mqhand 10s linear infinite}' +
    '@keyframes mqspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mq-sp{animation:mqspray 1.4s ease-out infinite}.mq-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "mq-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, c, cls) => '<g class="mq-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><path d="M' + (x + 4.5) + ' ' + y + 'v-18l8 4" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
  const AMB = "#f0b84a", RED = "#e35d4f", SKY = "#7cc7e8", BSL = "#f58220";
  const bricks = (x, y, w, h, base, line) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>';
    for (let r = 0; r * 7 < h; r++) { s += '<path d="M' + x + ' ' + (y + r * 7) + 'h' + w + '" stroke="' + line + '" stroke-width=".7"/>'; for (let c = 0; c * 18 < w; c++) s += '<path d="M' + (x + c * 18 + (r % 2) * 9) + ' ' + (y + r * 7) + 'v7" stroke="' + line + '" stroke-width=".6"/>'; }
    return s;
  };

  /* 1. Spring Garden (BSL local, underground): white tile with a maroon band, orange BSL stripe, black sign, silver car with an orange band */
  function mqstation() {
    const tr = '<g class="anim-train"><rect x="16" y="104" width="340" height="96" rx="8" fill="#c9ced4" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (32 + i * 52) + '" y="118" width="36" height="28" rx="3" fill="#1f2830"/>').join("") +
      '<rect x="16" y="154" width="340" height="9" fill="' + BSL + '"/>' +
      '<rect x="202" y="116" width="34" height="80" fill="#b4b9c0" stroke="#7a8088" stroke-width="1.5"/><path d="M219 116v80" stroke="#7a8088" stroke-width="1.5"/>' +
      '<rect x="336" y="108" width="20" height="88" rx="4" fill="#a3a9b0"/><circle cx="348" cy="186" r="4" fill="#fff6c2"/><circle cx="348" cy="114" r="3" fill="#fff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#221e1a"/>' +
      '<rect x="0" y="0" width="400" height="96" fill="#eeeae2"/>' +
      Array.from({ length: 34 }, (_, i) => '<path d="M' + (i * 12) + ' 0v96" stroke="#dad5ca" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (i * 8) + 'h400" stroke="#dad5ca" stroke-width="1"/>').join("") +
      '<rect x="0" y="54" width="400" height="8" fill="#7a2a2e"/><rect x="0" y="66" width="400" height="10" fill="' + BSL + '"/>' +
      '<rect class="mq-glow" x="30" y="6" width="90" height="6" rx="3" fill="#fffbe6"/><rect class="mq-glow mq-glow2" x="270" y="6" width="90" height="6" rx="3" fill="#fffbe6"/>' +
      '<rect x="0" y="96" width="400" height="108" fill="#16140f"/>' + tr +
      '<rect x="0" y="204" width="400" height="8" fill="#f2c200"/><rect x="0" y="212" width="400" height="48" fill="#8a857c"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 212l-14 48" stroke="#78736a" stroke-width="1"/>').join("") +
      '<rect x="14" y="16" width="216" height="32" rx="3" fill="#111"/><text x="26" y="38" ' + font + ' font-size="16" fill="#fff">Spring Garden</text>' + badge(170, 32, "BSL", BSL),
      "");
  }

  /* 2. A Touch of Jazz, the basement studio at 444 N 3rd St: exposed brick, a low window well, keyboard and drum machine, a vocal mic, meters moving, notes floating */
  function mqjazz() {
    return svg(
      bricks(0, 0, 400, 170, "#8a4a36", "#6e3828") +
      '<rect x="0" y="0" width="400" height="14" fill="#2a2420"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (i * 70 + 10) + '" y="14" width="10" height="8" fill="#3a322c"/>').join("") +
      /* basement window at street level */
      '<rect x="150" y="26" width="100" height="34" fill="#1d2a36" stroke="#d9cfbf" stroke-width="4"/><rect class="mq-glow" x="154" y="30" width="92" height="12" fill="#f6d98a" opacity=".35"/><path d="M200 26v34" stroke="#d9cfbf" stroke-width="3"/>' +
      /* rack with meters */
      '<rect x="20" y="40" width="100" height="70" rx="3" fill="#1c1a20" stroke="#4a4652" stroke-width="2"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect class="mq-bar' + (i % 3 === 1 ? " mq-b2" : i % 3 === 2 ? " mq-b3" : "") + '" x="' + (28 + i * 10) + '" y="50" width="6" height="40" fill="' + (i < 6 ? "#5fd08a" : i < 8 ? AMB : RED) + '"/>').join("") +
      '<rect x="28" y="96" width="84" height="6" rx="2" fill="#333"/>' +
      /* speakers */
      '<rect x="300" y="40" width="40" height="64" rx="3" fill="#2a2830"/><circle cx="320" cy="84" r="12" fill="#111" stroke="#666" stroke-width="2"/><circle cx="320" cy="56" r="6" fill="#111" stroke="#666" stroke-width="2"/>' +
      '<rect x="346" y="40" width="40" height="64" rx="3" fill="#2a2830"/><circle cx="366" cy="84" r="12" fill="#111" stroke="#666" stroke-width="2"/><circle cx="366" cy="56" r="6" fill="#111" stroke="#666" stroke-width="2"/>' +
      /* floor + desk + keyboard */
      '<rect x="0" y="170" width="400" height="90" fill="#3a2c22"/><rect x="0" y="170" width="400" height="4" fill="#2a1e16"/>' +
      '<rect x="40" y="140" width="250" height="14" rx="3" fill="#4a3a2e"/><rect x="50" y="154" width="8" height="60" fill="#2a1e16"/><rect x="272" y="154" width="8" height="60" fill="#2a1e16"/>' +
      '<rect x="56" y="122" width="170" height="20" rx="3" fill="#202024"/>' + Array.from({ length: 21 }, (_, i) => '<rect x="' + (62 + i * 7.6) + '" y="126" width="6.4" height="14" fill="#f4f1ea"/>').join("") +
      Array.from({ length: 20 }, (_, i) => ([1, 2, 4, 5, 6].includes(i % 7) ? '<rect x="' + (67 + i * 7.6) + '" y="126" width="3.6" height="8" fill="#111"/>' : "")).join("") +
      '<rect x="234" y="124" width="48" height="18" rx="2" fill="#2a2a30"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (238 + (i % 4) * 11) + '" y="' + (127 + Math.floor(i / 4) * 7) + '" width="8" height="5" rx="1" fill="' + (i === 2 ? RED : "#c8c8d0") + '"/>').join("") +
      /* vocal mic with pop filter */
      '<rect x="336" y="130" width="4" height="84" fill="#777"/><path d="M322 214h32" stroke="#777" stroke-width="4"/><rect x="328" y="104" width="20" height="30" rx="10" fill="#c9a24a" stroke="#7a5a1a" stroke-width="2"/><circle cx="312" cy="118" r="12" fill="none" stroke="#555" stroke-width="2"/>' +
      note(300, 104, AMB) + note(200, 110, SKY, "mq-n2") + note(110, 120, "#fff", "mq-n3") +
      '<text x="200" y="196" text-anchor="middle" ' + font + ' font-size="13" fill="' + AMB + '" letter-spacing="2">444 N 3RD ST</text>',
      "");
  }

  /* 3. 69th Street, Upper Darby: the record store with LPs in the window, the old movie house marquee next door with chasing bulbs */
  function mq69th() {
    return svg(
      '<rect width="400" height="260" fill="url(#mq-s3)"/>' +
      /* record store */
      bricks(10, 60, 190, 140, "#9a5a40", "#7a4430") + '<rect x="10" y="60" width="190" height="10" fill="#d9cfbf"/>' +
      '<rect x="20" y="84" width="170" height="26" fill="' + RED + '"/><text x="105" y="102" text-anchor="middle" ' + font + ' font-size="15" fill="#fff8e8" letter-spacing="2">RECORDS</text>' +
      '<rect x="24" y="118" width="110" height="70" fill="#2a3440" stroke="#d9cfbf" stroke-width="3"/>' +
      [[46, 140, AMB], [80, 150, SKY], [112, 140, "#e7e2d6"], [60, 172, RED], [100, 174, AMB]].map(([x, y, c]) => '<circle cx="' + x + '" cy="' + y + '" r="14" fill="#111"/><circle cx="' + x + '" cy="' + y + '" r="5" fill="' + c + '"/>').join("") +
      '<rect x="146" y="118" width="40" height="82" fill="#4a2a22" stroke="#d9cfbf" stroke-width="3"/><circle cx="178" cy="160" r="2" fill="' + AMB + '"/>' +
      /* movie house */
      '<rect x="210" y="30" width="180" height="170" fill="#d8c8a8"/><path d="M210 30h180" stroke="#b8a888" stroke-width="6"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (226 + i * 42) + '" y="44" width="22" height="40" rx="11" fill="#5a4a3a"/>').join("") +
      '<path d="M200 92h200v44h-200z" fill="#2a1e1a"/><path d="M200 92h200" stroke="' + AMB + '" stroke-width="3"/><path d="M200 136h200" stroke="' + AMB + '" stroke-width="3"/>' +
      Array.from({ length: 24 }, (_, i) => '<circle class="mq-bulb' + (i % 2 ? " mq-bulb2" : "") + '" cx="' + (204 + i * 8.2) + '" cy="96" r="2" fill="#ffe9a8"/>').join("") +
      Array.from({ length: 24 }, (_, i) => '<circle class="mq-bulb' + (i % 2 ? "" : " mq-bulb2") + '" cx="' + (204 + i * 8.2) + '" cy="132" r="2" fill="#ffe9a8"/>').join("") +
      '<text x="300" y="112" text-anchor="middle" ' + font + ' font-size="12" fill="#fff8e8" letter-spacing="1">NOW SHOWING</text><text x="300" y="127" text-anchor="middle" ' + font + ' font-size="11" fill="' + AMB + '">69TH STREET</text>' +
      '<rect x="240" y="146" width="120" height="54" fill="#3a2a22"/>' + Array.from({ length: 4 }, (_, i) => '<rect x="' + (246 + i * 29) + '" y="150" width="24" height="50" fill="#5a3a2a" stroke="' + AMB + '" stroke-width="1"/>').join("") +
      '<rect x="0" y="200" width="400" height="14" fill="#c8c0b0"/><rect x="0" y="214" width="400" height="46" fill="#4a4a4e"/><path d="M0 238h400" stroke="#d9d4c6" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="mq-car"><rect x="0" y="240" width="62" height="14" rx="5" fill="#2a4a7a"/><rect x="12" y="232" width="34" height="10" rx="3" fill="#2a4a7a"/><circle cx="14" cy="254" r="4.5" fill="#111"/><circle cx="48" cy="254" r="4.5" fill="#111"/></g>',
      sky("mq-s3", "#f2b678", "#f8e6c8"));
  }

  /* 4. The Electric Factory at 7th and Willow: long red-brick warehouse hall, big arched loading doors, the marquee lit for a hometown show, spotlights sweeping the night */
  function mqfactory() {
    return svg(
      '<rect width="400" height="260" fill="url(#mq-s4)"/>' + stars(16) +
      '<g class="mq-sweep"><path d="M110 200l-30 -190h40z" fill="' + SKY + '" opacity=".18"/></g><g class="mq-sweep mq-sw2"><path d="M290 200l-20 -190h40z" fill="' + AMB + '" opacity=".18"/></g>' +
      bricks(20, 70, 360, 140, "#8e3e2c", "#6c2e20") + '<path d="M20 70h360" stroke="#5a2618" stroke-width="6"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (36 + i * 44) + '" y="84" width="24" height="26" fill="#2a1e1a" stroke="#c9b89a" stroke-width="2"/><rect class="mq-glow' + (i % 2 ? " mq-glow2" : "") + '" x="38" y="86" width="20" height="10" fill="#ffcf6a" opacity=".4" transform="translate(' + (i * 44) + ' 0)"/>').join("") +
      '<rect x="120" y="120" width="160" height="34" fill="#1a1414"/><path d="M120 120h160" stroke="' + RED + '" stroke-width="3"/><path d="M120 154h160" stroke="' + RED + '" stroke-width="3"/>' +
      Array.from({ length: 20 }, (_, i) => '<circle class="mq-bulb' + (i % 2 ? " mq-bulb2" : "") + '" cx="' + (124 + i * 8) + '" cy="124" r="1.8" fill="#ffe9a8"/>').join("") +
      '<text x="200" y="148" text-anchor="middle" ' + font + ' font-size="15" fill="#fff8e8" letter-spacing="1">TONIGHT  MUSIQ</text>' +
      [60, 340].map(x => '<path d="M' + (x - 24) + ' 210v-36q24 -24 48 0v36z" fill="#3a2a22" stroke="#c9b89a" stroke-width="3"/>').join("") +
      '<rect x="180" y="166" width="40" height="44" fill="#3a2a22" stroke="#c9b89a" stroke-width="3"/>' +
      '<rect x="0" y="210" width="400" height="12" fill="#bdb6a8"/><rect x="0" y="222" width="400" height="38" fill="#3e3e44"/>' +
      Array.from({ length: 14 }, (_, i) => '<g transform="translate(' + (100 + i * 14) + ' 196)"><circle cx="0" cy="0" r="4" fill="#1a1414"/><rect x="-4" y="4" width="8" height="12" rx="3" fill="#1a1414"/></g>').join(""),
      sky("mq-s4", "#0e1430", "#3a2a5a"));
  }

  /* 5. N Broad St and Spring Garden St: green signs, MUSIQ tagged on the wall, the Inquirer Building's white terra cotta clock tower with its gold cupola up Broad behind */
  function mqcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mq-s5)"/>' + stars(12) +
      /* Inquirer (Elverson) Building */
      '<rect x="60" y="96" width="120" height="60" fill="#e8e2d4"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (66 + (i % 6) * 19) + '" y="' + (104 + Math.floor(i / 6) * 24) + '" width="10" height="16" fill="#3a4250" class="' + (i % 4 ? "" : "mq-glow") + '"/>').join("") +
      '<rect x="100" y="34" width="40" height="64" fill="#f2ede2"/><rect x="96" y="34" width="48" height="6" fill="#d8d0bc"/>' +
      '<circle cx="120" cy="62" r="11" fill="#fbf8ee" stroke="#b8a888" stroke-width="2"/><path d="M120 62v-7" stroke="#2a2a2a" stroke-width="1.5"/><path class="mq-hand" d="M120 62h6" stroke="#2a2a2a" stroke-width="1.2"/>' +
      '<path d="M104 34q16 -26 32 0z" fill="#d4a63a"/><rect x="118" y="2" width="4" height="10" fill="#d4a63a"/><circle cx="120" cy="12" r="3" fill="#d4a63a"/>' +
      '<rect x="230" y="110" width="150" height="46" fill="#2e3440"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (238 + (i % 5) * 28) + '" y="' + (116 + Math.floor(i / 5) * 18) + '" width="14" height="10" fill="#ffd98a" opacity=".5" class="' + (i % 3 ? "" : "mq-glow mq-glow2") + '"/>').join("") +
      bricks(0, 156, 400, 68, "#6e3a2e", "#5a2e24") +
      tag("MUSIQ", 20, 206, 50, AMB, -6) + tag("SOULCHILD", 190, 190, 24, SKY, -4) + tag("JUSLISEN", 30, 220, 15, "#fff", -3) + tag("NORTH PHILLY", 188, 216, 18, RED, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="mq-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + RED + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + RED + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="352" y="70" width="6" height="154" fill="#2f2f2f"/>' + sign(300, 72, 96, "N Broad St") + sign(282, 98, 116, "Spring Garden St") +
      '<g class="mq-sp"><circle cx="186" cy="176" r="3" fill="' + AMB + '" opacity=".7"/></g><g class="mq-sp mq-sp2"><circle cx="192" cy="170" r="2" fill="' + AMB + '" opacity=".6"/></g>',
      sky("mq-s5", "#141a3a", "#b0603a"));
  }

  window.SCENES = { mqstation: mqstation, mqjazz: mqjazz, mq69th: mq69th, mqfactory: mqfactory, mqcorner: mqcorner };
})();
