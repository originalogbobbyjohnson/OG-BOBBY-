/* laybankz scenes (Regions tab: Philadelphia; Southwest Philly). CSS classes prefixed lb- (the page's own anim-train is kept).
   1 65th-Elmwood on SEPTA's T5 trolley (old Route 36): street-level stop on Elmwood Ave, wires overhead, Southwest rowhomes, a white trolley with red and blue stripes sliding in.
   2 Bartram's Garden in Southwest Philly: John Bartram's gray stone house with its carved stone columns, the meadow, the Schuylkill and the Center City skyline across the water.
   3 A Philly Club block party, where the "blick" dance took off: speaker stacks, string lights, dancers in silhouette, hearts floating off a phone.
   4 The John Heinz National Wildlife Refuge at Tinicum, at Southwest Philly's edge: marsh, boardwalk, a white egret, a plane coming down into PHL.
   5 Elmwood Ave and S 70th St: green signs, LAY BANKZ tagged on the wall, the Platt Bridge's steel truss behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lbglow{0%,100%{opacity:.4}50%{opacity:1}}.lb-glow{animation:lbglow 2.4s ease-in-out infinite}.lb-glow2{animation-delay:-1.2s}' +
    '@keyframes lbbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.lb-bob{animation:lbbob .9s ease-in-out infinite}.lb-bob2{animation-delay:-.45s}' +
    '@keyframes lbsway{0%,100%{transform:skewX(-4deg)}50%{transform:skewX(4deg)}}.lb-sway{transform-box:fill-box;transform-origin:50% 100%;animation:lbsway 3s ease-in-out infinite}.lb-sway2{animation-delay:-1.5s}' +
    '@keyframes lbheart{0%{transform:translateY(0);opacity:1}100%{transform:translateY(-70px);opacity:0}}.lb-heart{animation:lbheart 2.6s ease-out infinite}.lb-h2{animation-delay:-.9s}.lb-h3{animation-delay:-1.7s}' +
    '@keyframes lbrip{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.lb-rip{animation:lbrip 3s ease-in-out infinite}.lb-rip2{animation-delay:-1.5s}' +
    '@keyframes lbplane{from{transform:translate(-90px,-30px)}to{transform:translate(470px,60px)}}.lb-plane{animation:lbplane 11s linear infinite}' +
    '@keyframes lbfly{0%,100%{transform:translate(0,0)}25%{transform:translate(14px,-8px)}50%{transform:translate(26px,2px)}75%{transform:translate(10px,8px)}}.lb-fly{animation:lbfly 5s ease-in-out infinite}.lb-fly2{animation-delay:-2.5s}' +
    '@keyframes lbcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.lb-car{animation:lbcar 8s linear infinite}' +
    '@keyframes lbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lb-sp{animation:lbspray 1.4s ease-out infinite}.lb-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "lb-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#5a3e28"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const heart = (x, y, s, c) => '<path d="M' + x + ' ' + (y + 6 * s) + 'c' + (-8 * s) + ' ' + (-6 * s) + ' ' + (-10 * s) + ' ' + (-11 * s) + ' ' + (-5 * s) + ' ' + (-13 * s) + 'c' + (3 * s) + ' ' + (-1 * s) + ' ' + (5 * s) + ' ' + (1 * s) + ' ' + (5 * s) + ' ' + (3 * s) + 'c0 ' + (-2 * s) + ' ' + (2 * s) + ' ' + (-4 * s) + ' ' + (5 * s) + ' ' + (-3 * s) + 'c' + (5 * s) + ' ' + (2 * s) + ' ' + (3 * s) + ' ' + (7 * s) + ' ' + (-5 * s) + ' ' + (13 * s) + 'z" fill="' + c + '"/>';
  const PINK = "#ff8fc8", WHITE = "#fdf6ff", SKY = "#7ad7ff", TGREEN = "#5a960a";
  /* Southwest Philly rowhome strip: brick fronts, porch awnings, cornices */
  const rowhomes = (x0, y, n, w, h) => Array.from({ length: n }, (_, i) => {
    const x = x0 + i * w, c = ["#8a4a3a", "#9a5844", "#7c4436", "#a0624a"][i % 4], aw = ["#2f5d8a", "#7a2f3a", "#2f6a4a", "#5a4a7a"][i % 4];
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '" stroke="#4a2a20" stroke-width="1"/><rect x="' + x + '" y="' + (y - 5) + '" width="' + w + '" height="6" fill="#d8d0c0"/>' +
      '<rect x="' + (x + 6) + '" y="' + (y + 8) + '" width="' + (w / 2 - 9) + '" height="14" fill="#f3d58a" opacity=".85" class="lb-glow' + (i % 2 ? " lb-glow2" : "") + '"/><rect x="' + (x + w / 2 + 3) + '" y="' + (y + 8) + '" width="' + (w / 2 - 9) + '" height="14" fill="#2a3040"/>' +
      '<path d="M' + (x + 2) + ' ' + (y + 30) + 'h' + (w - 4) + 'l-4 8h' + (-(w - 12)) + 'z" fill="' + aw + '"/>';
  }).join("");

  /* 1. 65th-Elmwood, T5 trolley: street-level stop, overhead wire, rowhomes, white trolley with red/blue stripes */
  function lbstation() {
    const tr = '<g class="anim-train"><rect x="40" y="136" width="300" height="66" rx="10" fill="#eef0f2" stroke="#7a8088" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (58 + i * 44) + '" y="146" width="32" height="24" rx="3" fill="#1f2830"/>').join("") +
      '<rect x="40" y="176" width="300" height="5" fill="#c8102e"/><rect x="40" y="182" width="300" height="5" fill="#1f4e9a"/>' +
      '<rect x="306" y="142" width="28" height="20" rx="3" fill="#111"/><text x="320" y="156" text-anchor="middle" ' + font + ' font-size="10" fill="#ffb000">T5</text>' +
      '<circle cx="330" cy="194" r="3.5" fill="#fff6c2"/><path d="M190 136l-14 -34h40" fill="none" stroke="#333" stroke-width="2"/>' +
      '<circle cx="90" cy="203" r="7" fill="#2a2a2a"/><circle cx="290" cy="203" r="7" fill="#2a2a2a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lb-s1)"/>' +
      rowhomes(0, 62, 8, 50, 52) +
      '<rect x="0" y="114" width="400" height="10" fill="#b8b2a6"/>' +
      '<path d="M0 101h400" stroke="#2a2a2a" stroke-width="1.5"/>' + [70, 330].map(x => '<rect x="' + (x - 2) + '" y="56" width="4" height="150" fill="#4a4f56"/>').join("") +
      '<rect x="0" y="124" width="400" height="90" fill="#5a5856"/>' +
      '<rect x="0" y="206" width="400" height="4" fill="#8a8a86"/><rect x="0" y="212" width="400" height="3" fill="#8a8a86"/>' +
      tr +
      '<rect x="0" y="214" width="400" height="46" fill="#a8a29a"/><rect x="0" y="214" width="400" height="4" fill="#f2d040"/>' +
      '<rect x="356" y="160" width="5" height="70" fill="#2f2f2f"/>' +
      '<rect x="60" y="222" width="280" height="30" rx="3" fill="#111" stroke="#555" stroke-width="1.5"/>' +
      '<rect x="72" y="228" width="30" height="18" rx="9" fill="' + TGREEN + '"/><text x="87" y="241" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">T5</text>' +
      '<text x="210" y="243" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">65th–Elmwood</text>',
      sky("lb-s1", "#f6a96b", "#fbe3c2"));
  }

  /* 2. Bartram's Garden: gray stone house with carved columns, meadow, Schuylkill, Center City skyline across */
  function lbbartram() {
    const sky2 = '<rect width="400" height="260" fill="url(#lb-s2)"/>';
    const skyline = '<g fill="#8a9bb0" opacity=".85"><rect x="230" y="44" width="16" height="60"/><path d="M230 44l8 -16l8 16z"/><rect x="252" y="30" width="14" height="74"/><path d="M252 30l7 -14l7 14z"/><rect x="272" y="52" width="18" height="52"/><rect x="296" y="38" width="12" height="66"/><rect x="314" y="58" width="22" height="46"/><rect x="342" y="48" width="14" height="56"/><rect x="200" y="62" width="22" height="42"/><rect x="362" y="66" width="18" height="38"/></g>';
    const river = '<rect x="0" y="102" width="400" height="22" fill="#4f7fa0"/>' +
      '<g class="lb-rip"><path d="M20 110h40M140 116h50M260 110h40" stroke="#bfe0f2" stroke-width="1.5"/></g><g class="lb-rip lb-rip2"><path d="M80 118h30M200 108h40M330 118h40" stroke="#bfe0f2" stroke-width="1.5"/></g>';
    let stone = '<rect x="96" y="96" width="210" height="100" fill="#8e8a80"/>';
    for (let r = 0; r < 12; r++) for (let c = 0; c < 13 - (r % 2); c++) stone += '<rect x="' + (98 + c * 16 + (r % 2) * 8) + '" y="' + (98 + r * 8) + '" width="13" height="6" rx="2" fill="none" stroke="#6e6a62" stroke-width=".7"/>';
    const house = '<path d="M90 98h222l-18 -26h-186z" fill="#4a4440"/><rect x="128" y="62" width="10" height="14" fill="#6e6a62"/><rect x="262" y="62" width="10" height="14" fill="#6e6a62"/>' + stone +
      [120, 158, 238, 276].map(x => '<rect x="' + (x - 7) + '" y="102" width="14" height="90" fill="#b4ae9f"/><rect x="' + (x - 9) + '" y="100" width="18" height="6" fill="#c8c2b2"/><circle cx="' + (x - 6) + '" cy="104" r="2.5" fill="#c8c2b2"/><circle cx="' + (x + 6) + '" cy="104" r="2.5" fill="#c8c2b2"/>').join("") +
      [138, 258].map(x => '<rect x="' + (x - 8) + '" y="116" width="16" height="22" fill="#2a3040"/><path d="M' + x + ' 116v22M' + (x - 8) + ' 127h16" stroke="#d8d2c2" stroke-width="1.2"/>').join("") +
      '<rect x="186" y="150" width="30" height="46" fill="#3a2a20"/><rect x="180" y="146" width="42" height="6" fill="#c8c2b2"/>' +
      '<rect x="186" y="116" width="30" height="22" fill="#2a3040"/><path d="M201 116v22M186 127h30" stroke="#d8d2c2" stroke-width="1.2"/>';
    const meadow = '<rect x="0" y="190" width="400" height="70" fill="#5e8a3c"/>' +
      Array.from({ length: 26 }, (_, i) => '<circle cx="' + (8 + i * 15.5) + '" cy="' + (206 + (i * 13) % 40) + '" r="2.6" fill="' + ["#ffd34a", "#ff8fc8", "#fff", "#c86ad8"][i % 4] + '"/>').join("") +
      '<path d="M200 196v64" stroke="#c9b48a" stroke-width="16"/>';
    const flies = '<g class="lb-fly"><path d="M60 170l-6 -5v10zM60 170l6 -5v10z" fill="#ffb84a"/></g><g class="lb-fly lb-fly2"><path d="M330 160l-5 -4v8zM330 160l5 -4v8z" fill="#ff8fc8"/></g>';
    return svg(sky2 + skyline + river + tree(36, 150, 2.4, "#3f6e2e") + tree(364, 148, 2.6, "#477a32") + house + meadow + flies,
      sky("lb-s2", "#8cc8ee", "#e6f4fb"));
  }

  /* 3. Philly Club block party: rowhomes at night, string lights, speakers, dancer silhouettes, phone with hearts */
  function lbblick() {
    const lights = Array.from({ length: 22 }, (_, i) => '<circle class="lb-glow' + (i % 2 ? " lb-glow2" : "") + '" cx="' + (10 + i * 18) + '" cy="' + (70 + Math.sin(i / 3.5 * Math.PI) * 8) + '" r="3" fill="' + [PINK, "#ffd36e", SKY][i % 3] + '"/>').join("");
    const speaker = x => '<rect x="' + x + '" y="150" width="46" height="70" rx="3" fill="#1a1a1e" stroke="#444" stroke-width="2"/><circle cx="' + (x + 23) + '" cy="172" r="13" fill="#2a2a30" stroke="#666" stroke-width="2"/><circle cx="' + (x + 23) + '" cy="172" r="5" fill="#555"/><circle cx="' + (x + 23) + '" cy="203" r="8" fill="#2a2a30" stroke="#666" stroke-width="2"/>';
    const dancer = (x, c, cls) => '<g class="lb-bob' + cls + '"><circle cx="' + x + '" cy="146" r="9" fill="' + c + '"/><path d="M' + (x - 10) + ' 158q10 -6 20 0l4 34h-28z" fill="' + c + '"/><path d="M' + (x - 10) + ' 160l-14 -16M' + (x + 10) + ' 160l14 -18" stroke="' + c + '" stroke-width="5" stroke-linecap="round"/><path d="M' + (x - 8) + ' 192l-6 24M' + (x + 8) + ' 192l8 24" stroke="' + c + '" stroke-width="6" stroke-linecap="round"/></g>';
    const phone = '<rect x="300" y="96" width="62" height="112" rx="10" fill="#111" stroke="#ddd" stroke-width="2"/><rect x="306" y="106" width="50" height="90" rx="4" fill="#2a1430"/>' +
      '<text x="331" y="152" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="13" fill="' + PINK + '">BLICK</text>' +
      '<g class="lb-heart">' + heart(346, 176, 0.9, PINK) + '</g><g class="lb-heart lb-h2">' + heart(336, 180, 0.7, "#fff") + '</g><g class="lb-heart lb-h3">' + heart(350, 184, 0.6, SKY) + '</g>';
    return svg('<rect width="400" height="260" fill="url(#lb-s3)"/>' + stars(16) + rowhomes(0, 92, 8, 50, 60) + '<path d="M0 70q100 20 200 0t200 0" fill="none" stroke="#222" stroke-width="1"/>' + lights +
      '<rect x="0" y="210" width="400" height="50" fill="#3a3a40"/><rect x="0" y="208" width="400" height="3" fill="#ccc"/>' +
      speaker(16) + speaker(64) + dancer(140, "#1a1020", "") + dancer(190, "#1a1020", " lb-bob2") + dancer(240, "#1a1020", "") + phone,
      sky("lb-s3", "#0e0b2a", "#5a2a6a"));
  }

  /* 4. John Heinz Refuge at Tinicum: marsh, boardwalk, egret, plane descending to PHL */
  function lbheinz() {
    const grass = Array.from({ length: 40 }, (_, i) => '<path class="lb-sway' + (i % 2 ? " lb-sway2" : "") + '" d="M' + (i * 10 + 3) + ' 210q2 -30 ' + (i % 3 - 1) * 6 + ' -' + (34 + (i * 7) % 18) + '" stroke="' + ["#b9a45a", "#8f9a48", "#c8b06a"][i % 3] + '" stroke-width="3" fill="none"/>').join("");
    const water = '<rect x="0" y="150" width="400" height="60" fill="#c87a6a"/><rect x="0" y="150" width="400" height="60" fill="#3a6a8a" opacity=".55"/>' +
      '<g class="lb-rip"><path d="M30 166h40M170 176h60M300 164h50" stroke="#ffd0b8" stroke-width="1.5"/></g><g class="lb-rip lb-rip2"><path d="M100 186h30M250 194h40" stroke="#ffd0b8" stroke-width="1.5"/></g>';
    const board = '<path d="M0 214h400v12h-400z" fill="#8a6a44"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20 + 4) + '" y="226" width="4" height="34" fill="#6a4e30"/>').join("") +
      '<path d="M0 204h400" stroke="#6a4e30" stroke-width="3"/>' + Array.from({ length: 11 }, (_, i) => '<rect x="' + (i * 40) + '" y="204" width="3" height="10" fill="#6a4e30"/>').join("");
    const egret = '<g><path d="M300 148q-6 -24 6 -40q6 -8 10 -2" stroke="#fff" stroke-width="4" fill="none"/><ellipse cx="292" cy="152" rx="16" ry="9" fill="#fff"/><path d="M316 106l12 3" stroke="#f2c230" stroke-width="2.5"/><path d="M288 160l-2 18M296 160l2 18" stroke="#222" stroke-width="2"/></g>';
    const plane = '<g class="lb-plane"><path d="M40 40l60 -6l8 3l-60 8z" fill="#e8ecf2"/><path d="M70 37l-14 -14h8l18 13zM70 41l-10 14h8l14 -13z" fill="#c9ced4"/><path d="M42 41l-6 -12h5l9 11z" fill="#c9ced4"/><circle class="lb-glow" cx="104" cy="37" r="1.6" fill="#ff4a4a"/></g>';
    return svg('<rect width="400" height="260" fill="url(#lb-s4)"/><circle cx="90" cy="120" r="26" fill="#ffd38a" opacity=".9"/>' +
      '<path d="M0 150l40 -8h80l30 4h90l40 -6h120v10h-400z" fill="#3a4a3a"/>' + plane + water + grass + egret + board,
      sky("lb-s4", "#6a5aa8", "#ffb48a"));
  }

  /* 5. Elmwood Ave and S 70th St: green signs, LAY BANKZ tagged, Platt Bridge truss behind */
  function lbcorner() {
    let truss = '<path d="M0 70h400" stroke="#4e6a5e" stroke-width="5"/><path d="M0 104h400" stroke="#4e6a5e" stroke-width="6"/>';
    for (let i = 0; i < 20; i++) truss += '<path d="M' + (i * 20) + ' 104l10 -34l10 34" stroke="#4e6a5e" stroke-width="2.5" fill="none"/>';
    truss += '<path d="M60 70q140 -46 280 0" stroke="#4e6a5e" stroke-width="5" fill="none"/>';
    for (let i = 0; i < 14; i++) { const x = 70 + i * 20; const y = 70 - 46 * (1 - Math.pow((x - 200) / 140, 2)) * 0.5 * 2 / 2; truss += '<path d="M' + x + ' 70V' + y.toFixed(1) + '" stroke="#4e6a5e" stroke-width="2"/>'; }
    truss += [80, 320].map(x => '<rect x="' + (x - 5) + '" y="104" width="10" height="40" fill="#556a60"/>').join("");
    truss += Array.from({ length: 8 }, (_, i) => '<circle class="lb-glow' + (i % 2 ? " lb-glow2" : "") + '" cx="' + (30 + i * 50) + '" cy="100" r="2" fill="#ffd98a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lb-s5)"/>' + stars(14) + truss +
      '<rect x="0" y="140" width="400" height="84" fill="#7e4433"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (148 + i * 8) + 'h400" stroke="#6e3a2a" stroke-width="1"/>').join("") +
      tag("LAY BANKZ", 12, 196, 42, PINK, -6) + tag("BLICK", 262, 182, 26, SKY, -4) + tag("WE OUTSIDE", 24, 218, 17, WHITE, -3) + tag("SOUTHWEST", 196, 216, 18, "#ffd36e", -3) +
      '<g transform="translate(240 150)">' + heart(0, 0, 1.2, WHITE) + '</g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="lb-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + PINK + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + PINK + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="350" y="98" width="6" height="126" fill="#2f2f2f"/>' + sign(298, 100, 100, "Elmwood Ave") + sign(306, 126, 88, "S 70th St") +
      '<g class="lb-sp"><circle cx="196" cy="168" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="lb-sp lb-sp2"><circle cx="202" cy="162" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("lb-s5", "#141a3a", "#b0507a"));
  }

  window.SCENES = { lbstation: lbstation, lbbartram: lbbartram, lbblick: lbblick, lbheinz: lbheinz, lbcorner: lbcorner };
})();
