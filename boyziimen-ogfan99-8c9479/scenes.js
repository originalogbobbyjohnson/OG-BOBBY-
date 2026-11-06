/* boyziimen scenes (Regions tab: Philadelphia; South Broad, South Philly). CSS classes prefixed bz- (the page's own anim-train is kept).
   1 Lombard-South on SEPTA's Broad Street Line, underground under South Broad: cream tile, the orange band, the black sign with the orange BSL bullet, the orange-striped train sliding in.
   2 The Philadelphia Civic Center (Convention Hall, 34th St), May 1989: the buff limestone hall with its tall arched windows, flags out front, the marquee lit for the big radio show where they sang for Michael Bivins backstage, searchlights sweeping.
   3 Penn's Landing on the Delaware, where the "Motownphilly" video was shot: the blue Ben Franklin Bridge with its two towers and swooping cables, a train's lights crossing, sunset on the river.
   4 Citizens Bank Park on All-Star night, July 2026 (they performed): the giant light-up Liberty Bell over right field swinging, red brick, light towers, sparkles over the green field.
   5 S Broad St and Carpenter St, the south end of Boyz II Men Boulevard: green signs plus the brown honorary sign, BOYZ II MEN tagged on the wall, the Bellevue's big mansard roof up Broad at Walnut behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bzglow{0%,100%{opacity:.45}50%{opacity:1}}.bz-glow{animation:bzglow 2.6s ease-in-out infinite}.bz-glow2{animation-delay:-1.3s}' +
    '@keyframes bzsweep{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.bz-sw{transform-box:fill-box;transform-origin:50% 100%;animation:bzsweep 4s ease-in-out infinite}.bz-sw2{animation-delay:-2s}' +
    '@keyframes bzswing{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.bz-bell{transform-box:fill-box;transform-origin:50% 0%;animation:bzswing 2.2s ease-in-out infinite}' +
    '@keyframes bzpatco{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.bz-patco{animation:bzpatco 9s linear infinite}' +
    '@keyframes bzrip{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.bz-rip{animation:bzrip 3s ease-in-out infinite}.bz-rip2{animation-delay:-1.5s}' +
    '@keyframes bzchase{0%,100%{opacity:1}50%{opacity:.25}}.bz-bulb{animation:bzchase .8s steps(1) infinite}.bz-bulb2{animation-delay:-.4s}' +
    '@keyframes bzcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.bz-car{animation:bzcar 8s linear infinite}' +
    '@keyframes bzspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bz-sp{animation:bzspray 1.4s ease-out infinite}.bz-sp2{animation-delay:.45s}' +
    '@keyframes bzstar{0%,100%{transform:scale(.4);opacity:.2}50%{transform:scale(1);opacity:1}}.bz-st{transform-box:fill-box;transform-origin:50% 50%;animation:bzstar 1.6s ease-in-out infinite}.bz-st2{animation-delay:-.5s}.bz-st3{animation-delay:-1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "bz-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#e8c070", BLUE = "#8fb8ff", ROSE = "#e86a8a", BSL = "#f58220";

  /* 1. Lombard-South, Broad Street Line */
  function bzstation() {
    let tile = "";
    for (let r = 0; r < 8; r++) for (let c = 0; c < 26; c++) tile += '<rect x="' + (c * 16 + (r % 2) * 8 - 8) + '" y="' + (14 + r * 10) + '" width="15" height="9" fill="#efe6cf" stroke="#d8ccb0" stroke-width=".6"/>';
    const tr = '<g class="anim-train"><rect x="20" y="124" width="330" height="76" rx="6" fill="#cfd4da" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 44) + '" y="134" width="30" height="24" rx="2" fill="#1f2830"/>').join("") +
      '<rect x="20" y="166" width="330" height="7" fill="' + BSL + '"/>' + Array.from({ length: 30 }, (_, i) => '<path d="M' + (24 + i * 11) + ' 176v22" stroke="#b4b9c0" stroke-width="1"/>').join("") +
      '<rect x="330" y="128" width="20" height="70" rx="4" fill="#a3a9b0"/><circle cx="342" cy="190" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#2a2620"/>' + tile + '<rect x="0" y="94" width="400" height="10" fill="' + BSL + '"/><rect x="0" y="104" width="400" height="16" fill="#efe6cf"/>' +
      [70, 200, 330].map(x => '<rect class="bz-glow" x="' + (x - 26) + '" y="4" width="52" height="5" rx="2" fill="#fff8de" opacity=".8"/>').join("") +
      '<rect x="100" y="26" width="200" height="32" rx="3" fill="#111"/><text x="112" y="48" ' + font + ' font-size="16" fill="#fff">Lombard-South</text>' + badge(242, 42, "BSL", BSL) +
      [70, 340].map(x => '<rect x="' + (x - 5) + '" y="0" width="10" height="200" fill="#5b5f66"/>').join("") +
      tr +
      '<rect x="0" y="200" width="400" height="8" fill="#f2c200"/><rect x="0" y="208" width="400" height="52" fill="#8f8a80"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 208v52" stroke="#7f7a70" stroke-width="1"/>').join(""),
      "");
  }

  /* 2. Philadelphia Civic Center / Convention Hall, 1989 */
  function bzcivic() {
    return svg(
      '<rect width="400" height="260" fill="url(#bz-s2)"/>' + stars(14) +
      '<g class="bz-sw"><path d="M80 170l-26 -170h14z" fill="#fff6c8" opacity=".18"/></g><g class="bz-sw bz-sw2"><path d="M320 170l-26 -170h14z" fill="#fff6c8" opacity=".18"/></g>' +
      /* the hall */
      '<rect x="40" y="76" width="320" height="110" fill="#d6c49c"/><rect x="40" y="70" width="320" height="10" fill="#c4b088"/><rect x="40" y="64" width="320" height="8" fill="#b29e78"/>' +
      '<rect x="130" y="50" width="140" height="20" fill="#d6c49c"/><rect x="130" y="46" width="140" height="6" fill="#b29e78"/>' +
      [0, 1, 2].map(i => { const x = 146 + i * 40; return '<path d="M' + x + ' 174v-80q14 -18 28 0v80z" fill="#3a4a5e"/><path class="bz-glow' + (i === 1 ? " bz-glow2" : "") + '" d="M' + (x + 3) + ' 172v-76q11 -14 22 0v76z" fill="#ffd98a" opacity=".35"/>' +
        Array.from({ length: 5 }, (_, j) => '<path d="M' + x + ' ' + (110 + j * 14) + 'h28" stroke="#2a3446" stroke-width="1.2"/>').join(""); }).join("") +
      [58, 86, 114, 274, 302, 330].map(x => '<rect x="' + x + '" y="92" width="14" height="40" fill="#3a4a5e"/><rect x="' + (x - 2) + '" y="88" width="18" height="4" fill="#b29e78"/>').join("") +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (50 + i * 36) + '" y="80" width="5" height="100" fill="#cbb98f"/>').join("") +
      /* marquee */
      '<rect x="120" y="150" width="160" height="26" fill="#1a1a22" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="168" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '" letter-spacing="2">TONIGHT  LIVE</text>' +
      Array.from({ length: 16 }, (_, i) => '<circle class="bz-bulb' + (i % 2 ? " bz-bulb2" : "") + '" cx="' + (124 + i * 10.3) + '" cy="147" r="1.8" fill="#fff2a8"/>').join("") +
      /* flags */
      [60, 340].map(x => '<rect x="' + x + '" y="100" width="2" height="90" fill="#ddd"/><path d="M' + (x + 2) + ' 102h22l-4 7l4 7h-22z" fill="' + (x < 200 ? ROSE : BLUE) + '"/>').join("") +
      '<rect x="0" y="186" width="400" height="74" fill="#5a5650"/><rect x="30" y="186" width="340" height="8" fill="#8a857c"/><rect x="50" y="194" width="300" height="6" fill="#7a756c"/>' +
      /* line out front: plain silhouettes */
      Array.from({ length: 14 }, (_, i) => { const x = 40 + i * 24; return '<g><circle cx="' + x + '" cy="214" r="5" fill="#1a1620"/><rect x="' + (x - 6) + '" y="219" width="12" height="20" rx="4" fill="' + ["#2a2238", "#3a2a2a", "#1a2a3a"][i % 3] + '"/></g>'; }).join(""),
      sky("bz-s2", "#0a0c24", "#3a2a5a"));
  }

  /* suspenders: sample the three cable curves and drop a hanger to the deck */
  const bez = (a, c, b, t) => (1 - t) * (1 - t) * a + 2 * (1 - t) * t * c + t * t * b;
  const hangers = () => { let o = ""; [[0, 108, 70, 104, 150, 46], [150, 46, 230, 118, 310, 46], [310, 46, 360, 90, 400, 100]].forEach(g => { for (let t = 0.08; t < 0.96; t += 0.09) { const x = bez(g[0], g[2], g[4], t), y = bez(g[1], g[3], g[5], t); if (y < 110) o += '<path d="M' + x.toFixed(1) + ' ' + y.toFixed(1) + 'V112" stroke="#5a9ad6" stroke-width=".8"/>'; } }); return o; };

  /* 3. Penn's Landing and the Ben Franklin Bridge */
  function bzlanding() {
    return svg(
      '<rect width="400" height="260" fill="url(#bz-s3)"/>' +
      '<circle cx="80" cy="120" r="24" fill="#ffcf7a" opacity=".9"/>' +
      /* Camden shore */
      '<rect x="0" y="134" width="400" height="10" fill="#4a3a4a"/>' +
      /* bridge: towers, cables, deck */
      '<rect x="138" y="44" width="10" height="100" fill="#2f6fb0"/><rect x="152" y="44" width="10" height="100" fill="#2f6fb0"/><rect x="136" y="60" width="28" height="5" fill="#2f6fb0"/><rect x="136" y="90" width="28" height="5" fill="#2f6fb0"/>' +
      '<rect x="298" y="44" width="10" height="100" fill="#2f6fb0"/><rect x="312" y="44" width="10" height="100" fill="#2f6fb0"/><rect x="296" y="60" width="28" height="5" fill="#2f6fb0"/><rect x="296" y="90" width="28" height="5" fill="#2f6fb0"/>' +
      '<path d="M0 108Q70 104 150 46Q230 118 310 46Q360 90 400 100" fill="none" stroke="#3a86cc" stroke-width="3"/>' +
      hangers() +
      '<rect x="0" y="112" width="400" height="9" fill="#2f6fb0"/><rect x="0" y="121" width="400" height="3" fill="#1d4f86"/>' +
      '<g class="bz-patco"><rect x="0" y="104" width="70" height="8" rx="2" fill="#cfd4da"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (4 + i * 11) + '" y="106" width="7" height="3" fill="#ffe9a0"/>').join("") + '</g>' +
      Array.from({ length: 12 }, (_, i) => '<circle class="bz-glow' + (i % 2 ? " bz-glow2" : "") + '" cx="' + (20 + i * 33) + '" cy="116" r="1.6" fill="#fff2b0"/>').join("") +
      /* river */
      '<rect x="0" y="144" width="400" height="66" fill="#26446a"/>' +
      '<path class="bz-rip" d="M0 160q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" fill="none" stroke="#ffcf7a" stroke-width="1.5" opacity=".6"/>' +
      '<path class="bz-rip bz-rip2" d="M-20 180q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" fill="none" stroke="#6a9ac8" stroke-width="1.5"/>' +
      '<path d="M50 150l14 -2l14 2" stroke="#ffcf7a" stroke-width="2" opacity=".6"/>' +
      /* the Great Plaza steps + railing */
      '<rect x="0" y="210" width="400" height="50" fill="#9a8f84"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="0" y="' + (212 + i * 9) + '" width="400" height="2" fill="#857b70"/>').join("") +
      '<rect x="0" y="204" width="400" height="3" fill="#333"/>' + Array.from({ length: 41 }, (_, i) => '<rect x="' + (i * 10) + '" y="196" width="2" height="10" fill="#333"/>').join("") +
      [60, 340].map(x => '<rect x="' + (x - 2) + '" y="168" width="4" height="40" fill="#2a2a2a"/><circle class="bz-glow" cx="' + x + '" cy="166" r="5" fill="#fff2b0"/>').join(""),
      sky("bz-s3", "#5a3a7a", "#ff9a6a"));
  }

  /* 4. Citizens Bank Park, All-Star night */
  function bzballpark() {
    let bell = "";
    /* the outlined bell: drawn in light bulbs */
    const pts = [];
    for (let i = 0; i <= 12; i++) { const t = i / 12; pts.push([200 - 30 - 6 * t + (t > .8 ? -6 * (t - .8) * 5 : 0), 34 + t * 60]); }
    pts.forEach((p, i) => bell += '<circle class="bz-bulb' + (i % 2 ? " bz-bulb2" : "") + '" cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="2" fill="#fff2a8"/><circle class="bz-bulb' + (i % 2 ? "" : " bz-bulb2") + '" cx="' + (400 - p[0]).toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="2" fill="#fff2a8"/>');
    for (let i = 0; i < 9; i++) bell += '<circle class="bz-bulb' + (i % 2 ? " bz-bulb2" : "") + '" cx="' + (164 + i * 9) + '" cy="96" r="2" fill="#fff2a8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bz-s4)"/>' + stars(18) +
      /* light towers */
      [30, 370].map(x => '<rect x="' + (x - 3) + '" y="30" width="6" height="110" fill="#3a3a44"/><rect x="' + (x - 22) + '" y="18" width="44" height="18" fill="#2a2a34"/>' +
        Array.from({ length: 8 }, (_, i) => '<circle class="bz-glow" cx="' + (x - 18 + (i % 4) * 12) + '" cy="' + (23 + Math.floor(i / 4) * 8) + '" r="3" fill="#fffbe0"/>').join("")).join("") +
      /* the bell on its brace */
      '<rect x="168" y="14" width="64" height="8" fill="#5a5a66"/><rect x="196" y="22" width="8" height="10" fill="#5a5a66"/>' +
      '<g class="bz-bell"><path d="M170 34q30 -14 60 0l8 58q4 6 -6 6h-64q-10 0 -6 -6z" fill="#3a2a1a" opacity=".55"/>' + bell +
      '<path d="M188 72l10 10l-6 6" stroke="#fff2a8" stroke-width="2" fill="none"/><circle cx="200" cy="104" r="5" fill="#fff2a8"/></g>' +
      /* red brick outfield wall + stands */
      '<rect x="0" y="122" width="400" height="36" fill="#9a3a2a"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (127 + i * 6) + 'h400" stroke="#7e2e22" stroke-width="1"/>').join("") +
      '<rect x="0" y="116" width="400" height="7" fill="#2a3a5a"/>' +
      Array.from({ length: 50 }, (_, i) => '<circle cx="' + (4 + i * 8) + '" cy="' + (112 + (i % 2) * 2) + '" r="2.4" fill="' + ["#e8e2d6", "#c8102e", "#1f3a6a", "#f2d0a0"][i % 4] + '"/>').join("") +
      /* field */
      '<rect x="0" y="158" width="400" height="102" fill="#2f8a3e"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (i * 70) + '" y="158" width="35" height="102" fill="#2a7d38"/>').join("") +
      '<rect x="0" y="158" width="400" height="5" fill="#0d3a6a"/><path d="M120 260L200 186L280 260" fill="#b98a5a" opacity=".8"/><path d="M200 186l40 40l-40 34l-40 -34z" fill="#2f8a3e"/>' +
      '<rect x="196" y="216" width="8" height="8" fill="#fff" transform="rotate(45 200 220)"/>' +
      '<rect x="128" y="168" width="144" height="14" rx="2" fill="#0d1a3a"/><text x="200" y="179" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" letter-spacing="2">ALL-STAR NIGHT</text>' +
      ['<path class="bz-st" d="M70 60l3 7l7 1l-5 5l1 7l-6 -4l-6 4l1 -7l-5 -5l7 -1z" fill="' + GOLD + '"/>', '<path class="bz-st bz-st2" d="M320 70l3 7l7 1l-5 5l1 7l-6 -4l-6 4l1 -7l-5 -5l7 -1z" fill="' + BLUE + '"/>', '<path class="bz-st bz-st3" d="M110 34l2 5l5 1l-4 4l1 5l-4 -3l-4 3l1 -5l-4 -4l5 -1z" fill="' + ROSE + '"/>'].join(""),
      sky("bz-s4", "#05081e", "#1a2a5a"));
  }

  /* 5. S Broad St and Carpenter St, Boyz II Men Boulevard */
  function bzcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bz-s5)"/>' + stars(14) +
      /* the Bellevue up Broad at Walnut: pale stone French Renaissance block, the big dark mansard roof with ornate dormers, a flag on top, windows glowing */
      '<rect x="128" y="62" width="144" height="80" fill="#d9cdb4"/>' +
      '<path d="M120 64h160l-12 -26h-136z" fill="#3e4a48"/><rect x="118" y="62" width="164" height="5" fill="#bfb194"/>' +
      [140, 172, 200, 228, 256].map(x => '<path d="M' + (x - 8) + ' 60v-14q8 -10 16 0v14z" fill="#d9cdb4"/><rect class="bz-glow" x="' + (x - 4) + '" y="48" width="8" height="10" fill="#ffd98a" opacity=".6"/>').join("") +
      '<path d="M186 38v-12l14 -10l14 10v12z" fill="#3e4a48"/><rect x="199" y="2" width="2" height="16" fill="#ccc"/><path d="M201 3h14l-3 4l3 4h-14z" fill="' + BLUE + '"/>' +
      Array.from({ length: 18 }, (_, i) => '<rect class="' + (i % 4 ? "" : "bz-glow bz-glow2") + '" x="' + (136 + (i % 9) * 15) + '" y="' + (74 + Math.floor(i / 9) * 22) + '" width="8" height="12" fill="' + (i % 3 ? "#3a3448" : "#ffd98a") + '"/>').join("") +
      '<rect x="128" y="118" width="144" height="4" fill="#bfb194"/>' +
      '<rect x="0" y="100" width="110" height="40" fill="#2a2440"/><rect x="290" y="92" width="110" height="48" fill="#2a2440"/>' +
      /* brick wall */
      '<rect x="0" y="140" width="400" height="86" fill="#7a3e30"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (148 + i * 8) + 'h400" stroke="#6a3226" stroke-width="1"/>').join("") +
      tag("BOYZ II MEN", 12, 194, 40, GOLD, -6) + tag("BACK AGAIN", 238, 186, 20, BLUE, -4) + tag("MOTOWNPHILLY", 20, 218, 18, "#fff", -3) + tag("SOUTH BROAD", 196, 214, 18, ROSE, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="bz-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + ROSE + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + ROSE + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="384" y="70" width="6" height="156" fill="#2f2f2f"/>' + sign(300, 72, 94, "S Broad St") + sign(300, 98, 94, "Carpenter St") +
      '<rect x="276" y="124" width="118" height="22" rx="2" fill="#5a3a22" stroke="#fff" stroke-width="1.5"/><text x="335" y="139" text-anchor="middle" ' + font + ' font-size="10.5" fill="' + GOLD + '">BOYZ II MEN BLVD</text>' +
      '<g class="bz-sp"><circle cx="196" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="bz-sp bz-sp2"><circle cx="202" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("bz-s5", "#100c2a", "#6a3a5a"));
  }

  window.SCENES = { bzstation: bzstation, bzcivic: bzcivic, bzlanding: bzlanding, bzballpark: bzballpark, bzcorner: bzcorner };
})();
