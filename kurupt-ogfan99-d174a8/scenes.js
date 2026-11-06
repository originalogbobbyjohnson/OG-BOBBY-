/* kurupt scenes (Regions tab: Philadelphia; Darby Township, Delaware County). CSS classes prefixed ku- (the page's own anim-train is kept).
   1 Sharon Hill on SEPTA Regional Rail (Wilmington/Newark Line), the stop for the Darby Township block where his family's house is: low platform, catenary, a Silverliner sliding in.
   2 Market Square, Germantown (the Philly neighborhood he named as home): the granite Civil War Soldiers' Memorial on the square, Belgian-block Germantown Ave, the Route 23 bus rolling by.
   3 Crenshaw Blvd on a Sunday night, from Throw Back Muzic '86 ("Crenshaw, Sunday nights"): palms, streetlights, a lowrider hitting its switches.
   4 Hawthorne, CA, where his mom sent him at 15: Friday night lights at the high school field, the scoreboard he raps about (Hawthorne vs. Washington).
   5 Clifton Ave and Roosevelt Dr, Darby Township, signed Kurupt Way in 2022: green signs, KURUPT tagged on the wall, Fort Mifflin's stone walls and flag down by the river behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kuglow{0%,100%{opacity:.45}50%{opacity:1}}.ku-glow{animation:kuglow 2.6s ease-in-out infinite}.ku-glow2{animation-delay:-1.3s}' +
    '@keyframes kubus{from{transform:translateX(-160px)}to{transform:translateX(560px)}}.ku-bus{animation:kubus 11s linear infinite}' +
    '@keyframes kuhop{0%,60%,100%{transform:translateY(0)}70%{transform:translateY(-16px)}80%{transform:translateY(0)}88%{transform:translateY(-7px)}}.ku-hop{animation:kuhop 2.4s ease-in-out infinite}' +
    '@keyframes kufront{0%,60%,100%{transform:rotate(0)}70%{transform:rotate(-7deg)}80%{transform:rotate(0)}}.ku-front{transform-box:fill-box;transform-origin:100% 100%;animation:kufront 2.4s ease-in-out infinite}' +
    '@keyframes kuball{0%{transform:translate(0,0)}50%{transform:translate(70px,-46px)}100%{transform:translate(140px,0)}}.ku-ball{animation:kuball 2.8s ease-in-out infinite}' +
    '@keyframes kuflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.ku-flag{transform-box:fill-box;transform-origin:0 50%;animation:kuflag 1.8s ease-in-out infinite}' +
    '@keyframes kuspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ku-sp{animation:kuspray 1.4s ease-out infinite}.ku-sp2{animation-delay:.45s}' +
    '@keyframes kubird{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.ku-bird{animation:kubird 14s linear infinite}' +
    '@keyframes kuleaf{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.ku-palm{transform-box:fill-box;transform-origin:50% 100%;animation:kuleaf 3.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt, col) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="' + (col || "#0f6b3a") + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "ku-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#5a3e28"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const palm = (x, y, h, cls) => '<g class="ku-palm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q-4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#3a2a1e" stroke-width="5" fill="none"/>' +
    [[-26, -4], [-20, 10], [24, -2], [20, 12], [0, -16], [-12, -14], [12, -14]].map(([dx, dy]) => '<path d="M' + (x + 2) + ' ' + (y - h) + 'q' + (dx / 2) + ' ' + (dy - 8) + ' ' + dx + ' ' + (dy + 6) + '" stroke="#1d3a26" stroke-width="4" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const BLUE = "#7ec8ff", GOLD = "#ffd36e", SUN = "#ff8a4c", RR = "#91456c";

  /* 1. Sharon Hill, Wilmington/Newark Line: low side platform, small shelter, catenary poles, a silver Silverliner gliding in */
  function kustation() {
    const tr = '<g class="anim-train"><rect x="20" y="130" width="330" height="72" rx="6" fill="#c9ced4" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 44) + '" y="140" width="30" height="22" rx="2" fill="#1f2830"/>').join("") +
      '<rect x="20" y="168" width="330" height="4" fill="#c8102e"/><rect x="20" y="174" width="330" height="4" fill="#1f4e9a"/>' +
      Array.from({ length: 30 }, (_, i) => '<path d="M' + (24 + i * 11) + ' 180v20" stroke="#b4b9c0" stroke-width="1"/>').join("") +
      '<rect x="330" y="134" width="20" height="66" rx="4" fill="#a3a9b0"/><circle cx="342" cy="190" r="3.5" fill="#fff6c2"/><path d="M170 130l-10 -24h30" fill="none" stroke="#333" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ku-s1)"/>' +
      '<g class="ku-bird"><path d="M0 34q5 -5 10 0q5 -5 10 0" fill="none" stroke="#3a3a3a" stroke-width="1.5"/></g>' +
      tree(30, 110, 1.5, "#3f6b3a") + tree(84, 112, 1.2, "#4f7a3e") + tree(372, 108, 1.6, "#3f6b3a") +
      /* row homes of Sharon Hill behind the tracks */
      [[110, "#9a5a44"], [146, "#b07a5a"], [182, "#8a4e3c"], [218, "#a46a50"], [254, "#946048"]].map(([x, c]) => '<rect x="' + x + '" y="78" width="34" height="40" fill="' + c + '"/><path d="M' + (x - 2) + ' 78l19 -12l19 12z" fill="#4a3a36"/><rect x="' + (x + 6) + '" y="86" width="8" height="10" fill="#f3e2b4"/><rect x="' + (x + 20) + '" y="86" width="8" height="10" fill="#f3e2b4"/>').join("") +
      '<path d="M0 104h400" stroke="#333" stroke-width="1.5"/><path d="M0 110h400" stroke="#333" stroke-width="1"/>' + [50, 200, 350].map(x => '<rect x="' + (x - 2) + '" y="40" width="4" height="96" fill="#5a5f66"/><path d="M' + (x - 16) + ' 46h32" stroke="#5a5f66" stroke-width="3"/>').join("") +
      tr +
      '<rect x="0" y="204" width="400" height="6" fill="#f2c200"/><rect x="0" y="210" width="400" height="50" fill="#8e8a82"/>' +
      '<path d="M360 216v-30M396 216v-30" stroke="#2c2f36" stroke-width="3"/><path d="M354 188h48l-4 -8h-40z" fill="#2c4a6e"/><rect x="362" y="226" width="32" height="5" fill="#5a4a3a"/>' +
      '<rect x="206" y="56" width="186" height="30" rx="3" fill="#111"/><text x="218" y="77" ' + font + ' font-size="15" fill="#fff">Sharon Hill</text>' + badge(344, 71, "RR", RR),
      sky("ku-s1", "#9fd0f0", "#f6e7cf"));
  }

  /* 2. Market Square, Germantown: granite Civil War Soldiers' Memorial (tall pedestal, standing soldier), Belgian-block Germantown Ave, the 23 bus */
  function kugermantown() {
    let cobbles = "";
    for (let r = 0; r < 5; r++) for (let c = 0; c < 34; c++) cobbles += '<rect x="' + (c * 12 + (r % 2) * 6 - 6) + '" y="' + (214 + r * 9) + '" width="11" height="8" rx="2" fill="' + ((r + c) % 3 ? "#7d766c" : "#8a8378") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ku-s2)"/>' +
      /* old stone houses around the square */
      '<rect x="0" y="92" width="96" height="110" fill="#8d8a84"/><path d="M-4 92l52 -26l52 26z" fill="#4a4440"/>' + [12, 40, 68].map(x => '<rect x="' + x + '" y="108" width="14" height="20" fill="#2c3440"/><rect x="' + (x - 3) + '" y="108" width="3" height="20" fill="#2f5a3a"/><rect x="' + (x + 14) + '" y="108" width="3" height="20" fill="#2f5a3a"/>').join("") +
      '<rect x="304" y="96" width="96" height="106" fill="#a7a08f"/><path d="M300 96l52 -24l52 24z" fill="#4a4440"/>' + [318, 346, 374].map(x => '<rect x="' + x + '" y="110" width="14" height="20" fill="#2c3440"/>').join("") +
      tree(122, 170, 2.2, "#3d6b36") + tree(282, 170, 2.2, "#46743c") +
      /* the memorial: stepped granite base, tall shaft, soldier at parade rest on top */
      '<rect x="168" y="186" width="64" height="12" fill="#9a968e"/><rect x="176" y="174" width="48" height="12" fill="#a8a49b"/><rect x="186" y="96" width="28" height="78" fill="#b4b0a6"/>' +
      '<rect x="182" y="92" width="36" height="8" fill="#a8a49b"/><rect x="190" y="130" width="20" height="16" fill="#9a968e"/>' +
      '<g fill="#4e6458"><rect x="194" y="64" width="12" height="28" rx="3"/><circle cx="200" cy="58" r="6"/><rect x="193" y="50" width="14" height="4" rx="1"/><rect x="208" y="50" width="3" height="40"/></g>' +
      /* Germantown Ave: Belgian block and the 23 bus */
      '<rect x="0" y="202" width="400" height="10" fill="#c9c3b6"/>' + cobbles +
      '<g class="ku-bus"><rect x="0" y="176" width="130" height="40" rx="6" fill="#f2f2f2" stroke="#555" stroke-width="1.5"/><rect x="6" y="182" width="100" height="14" rx="2" fill="#2c3440"/>' +
      '<rect x="0" y="200" width="130" height="4" fill="#1f4e9a"/><rect x="0" y="204" width="130" height="3" fill="#c8102e"/><rect x="108" y="180" width="18" height="12" rx="2" fill="#111"/><text x="117" y="190" text-anchor="middle" ' + font + ' font-size="10" fill="#ffb000">23</text>' +
      '<circle cx="26" cy="216" r="7" fill="#111"/><circle cx="104" cy="216" r="7" fill="#111"/></g>' +
      sign(260, 52, 132, "Germantown Ave") + '<rect x="324" y="74" width="4" height="22" fill="#2f2f2f"/>',
      sky("ku-s2", "#b9dcf2", "#f5ecd8"));
  }

  /* 3. Crenshaw Blvd, Sunday night: palms, streetlights, a candy-paint lowrider hitting its switches */
  function kucrenshaw() {
    return svg(
      '<rect width="400" height="260" fill="url(#ku-s3)"/>' + stars(16) +
      '<path d="M0 150q60 -30 130 -16q70 -26 140 -6q70 -20 130 6v40h-400z" fill="#2a2440"/>' +
      [[40, 150, 92], [118, 150, 108], [300, 150, 100], [370, 150, 88]].map(([x, y, h], i) => palm(x, y, h, i % 2 ? "ku-glow2" : "")).join("") +
      [80, 210, 340].map(x => '<rect x="' + (x - 2) + '" y="96" width="4" height="72" fill="#3a3a44"/><path d="M' + x + ' 98h16" stroke="#3a3a44" stroke-width="3"/><circle class="ku-glow" cx="' + (x + 16) + '" cy="102" r="5" fill="#ffd98a"/>').join("") +
      '<rect x="0" y="168" width="400" height="92" fill="#2e2e36"/><path d="M0 212h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* the lowrider: long low body, candy paint, chrome, whitewalls */
      '<g class="ku-hop"><g class="ku-front"><path d="M110 196h176q14 0 18 -10l-2 -6h-40l-24 -18h-88l-22 18h-26q-10 0 -12 10z" fill="#3a8fe0" stroke="#0e2a4a" stroke-width="2"/>' +
      '<path d="M176 164h52l18 16h-88z" fill="#bfe6ff" opacity=".8"/><path d="M110 188h196" stroke="#e8ecf2" stroke-width="2"/><rect x="286" y="182" width="16" height="5" rx="2" fill="#fff6c2"/></g></g>' +
      '<circle cx="140" cy="200" r="11" fill="#111"/><circle cx="140" cy="200" r="7" fill="#f5f5f5"/><circle cx="140" cy="200" r="3.5" fill="#c9ced4"/>' +
      '<circle cx="270" cy="200" r="11" fill="#111"/><circle cx="270" cy="200" r="7" fill="#f5f5f5"/><circle cx="270" cy="200" r="3.5" fill="#c9ced4"/>' +
      sign(12, 30, 128, "Crenshaw Blvd") + '<rect x="74" y="52" width="4" height="44" fill="#2f2f2f"/>' +
      '<text x="388" y="40" text-anchor="end" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="20" fill="' + GOLD + '" stroke="#000" stroke-width="2" paint-order="stroke">Sunday Night</text>',
      sky("ku-s3", "#141235", "#7a3a6a"));
  }

  /* 4. Hawthorne, CA: Friday night lights, the field, the scoreboard (Hawthorne over Washington), a ball spiraling */
  function kuhawthorne() {
    const light = x => '<rect x="' + (x - 2) + '" y="40" width="4" height="120" fill="#6a6f78"/><rect x="' + (x - 18) + '" y="30" width="36" height="16" fill="#2c2f36"/>' +
      Array.from({ length: 6 }, (_, i) => '<circle class="ku-glow' + (i % 2 ? " ku-glow2" : "") + '" cx="' + (x - 14 + i * 5.6) + '" cy="38" r="2.4" fill="#fffbe0"/>').join("") +
      '<path d="M' + (x - 18) + ' 46l-40 120h116l-40 -120z" fill="#fffbe0" opacity=".07"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ku-s4)"/>' + stars(12) +
      '<rect x="0" y="120" width="400" height="46" fill="#3a3e4a"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M0 ' + (126 + i * 8) + 'h400" stroke="#4c5160" stroke-width="2"/>').join("") +
      light(36) + light(364) +
      /* scoreboard */
      '<rect x="128" y="20" width="144" height="74" rx="4" fill="#15171c" stroke="#6a6f78" stroke-width="3"/><rect x="198" y="94" width="4" height="26" fill="#6a6f78"/>' +
      '<text x="164" y="38" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">HAWTHORNE</text><text x="236" y="38" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">WASHINGTON</text>' +
      '<rect x="146" y="44" width="36" height="24" fill="#000"/><rect x="218" y="44" width="36" height="24" fill="#000"/>' +
      '<text x="164" y="64" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="22" fill="' + GOLD + '">21</text><text x="236" y="64" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="22" fill="' + GOLD + '">14</text>' +
      '<text x="200" y="86" text-anchor="middle" ' + font + ' font-size="9" fill="' + SUN + '">4TH QTR</text>' +
      /* field */
      '<path d="M0 166h400v94h-400z" fill="#2f7a3a"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (20 + i * 45) + ' 166l' + ((i - 4) * 14) + ' 94" stroke="#e8f2e6" stroke-width="2" opacity=".75"/>').join("") +
      '<path d="M0 166h400" stroke="#e8f2e6" stroke-width="3"/>' +
      '<g class="ku-ball"><ellipse cx="120" cy="210" rx="8" ry="5" fill="#7a3a1a" stroke="#3a1a0a" stroke-width="1"/><path d="M116 210h8" stroke="#fff" stroke-width="1"/></g>' +
      /* goalpost */
      '<path d="M352 238v-34M336 204h32M336 204v-30M368 204v-30" stroke="#f2c200" stroke-width="3" fill="none"/>',
      sky("ku-s4", "#0d1530", "#26386a"));
  }

  /* 5. Clifton Ave & Roosevelt Dr, Darby Township (Kurupt Way): green signs, KURUPT tagged on the wall, Fort Mifflin's stone walls and flag behind */
  function kucorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ku-s5)"/>' + stars(10) +
      /* Fort Mifflin: low gray stone walls, the white citadel with its roof, flag on the pole */
      '<path d="M60 128l30 -14h220l30 14z" fill="#6c6a66"/><rect x="60" y="128" width="280" height="14" fill="#7c7a74"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (66 + i * 20) + ' 130v10" stroke="#5c5a56" stroke-width="1"/>').join("") +
      '<rect x="150" y="100" width="90" height="24" fill="#e6e0d2"/><path d="M146 100l49 -14l49 14z" fill="#5a4a42"/>' + [160, 180, 200, 220].map(x => '<rect x="' + x + '" y="106" width="8" height="12" fill="#2c3440"/>').join("") +
      '<rect x="268" y="58" width="2.5" height="58" fill="#d8d8d8"/>' +
      '<g class="ku-flag"><rect x="270.5" y="58" width="34" height="20" fill="#fff"/>' + [0, 2, 4, 6].map(i => '<rect x="270.5" y="' + (58 + i * 2.86) + '" width="34" height="2.86" fill="#b22234"/>').join("") +
      '<rect x="270.5" y="78" width="34" height="0" fill="#b22234"/><rect x="270.5" y="58" width="14" height="11" fill="#3c3b6e"/></g>' +
      '<path d="M0 142h400v6h-400z" fill="#3d5a6e" opacity=".8"/>' +
      tree(26, 140, 1.6, "#24402a") + tree(376, 138, 1.7, "#24402a") +
      '<rect x="0" y="146" width="400" height="78" fill="#7a4232"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M0 ' + (154 + i * 8) + 'h400" stroke="#6a3828" stroke-width="1"/>').join("") +
      tag("KURUPT", 14, 200, 50, BLUE, -6) + tag("YESSIR", 238, 188, 26, GOLD, -4) + tag("DPG", 250, 216, 20, "#fff", -3) + tag("YOUNG GOTTI", 116, 218, 16, SUN, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55534e"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="356" y="74" width="6" height="150" fill="#2f2f2f"/>' + sign(290, 74, 110, "Clifton Ave") + sign(286, 100, 114, "Roosevelt Dr") + sign(300, 126, 100, "Kurupt Way", "#6b3f1f") +
      '<g class="ku-sp"><circle cx="196" cy="168" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="ku-sp ku-sp2"><circle cx="202" cy="162" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("ku-s5", "#141a3a", "#c46a4a"));
  }

  window.SCENES = { kustation: kustation, kugermantown: kugermantown, kucrenshaw: kucrenshaw, kuhawthorne: kuhawthorne, kucorner: kucorner };
})();
