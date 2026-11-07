/* P.O.S scenes (Regions tab: Minneapolis). CSS classes and ids prefixed ps- (the page's own anim-train is kept).
   1 Cedar-Riverside station on the METRO Blue Line: at-grade platform, black sign with the BLUE bullet, Riverside Plaza's colored-panel towers behind, the silver-and-blue train sliding in.
   2 The punk bar on Cedar Ave (the West Bank all-ages punk scene he came up in): brick front, flickering marquee bulbs, the line out front bobbing.
   3 Hopkins High School, where he found the punk scene and met the future Doomtree crew: low tan-brick school, flag snapping, snow falling.
   4 The tour van in the back lot ("writing in the van in the back lot", Optimist): white van, Minnesota plate, a notebook glowing on the dash, snow.
   5 Cedar Ave S and Riverside Ave on the West Bank: green signs, P.O.S tagged on the wall, the Riverside Plaza towers behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes psflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.ps-flk{animation:psflick 2.2s infinite}.ps-flk2{animation-delay:.7s}' +
    '@keyframes psglow{0%,100%{opacity:.4}50%{opacity:1}}.ps-glow{animation:psglow 2s ease-in-out infinite}.ps-g2{animation-delay:-1s}' +
    '@keyframes psbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.ps-bob{animation:psbob .55s ease-in-out infinite}.ps-bob2{animation-delay:-.27s}.ps-bob3{animation-delay:-.14s}' +
    '@keyframes pssnow{0%{transform:translate(0,-20px)}100%{transform:translate(-30px,280px)}}.ps-sn{animation:pssnow 6s linear infinite}.ps-sn2{animation-delay:-2s}.ps-sn3{animation-delay:-4s}' +
    '@keyframes psflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.ps-flag{transform-box:fill-box;transform-origin:0 50%;animation:psflag 1.2s ease-in-out infinite}' +
    '@keyframes psblink{0%,49%{opacity:1}50%,100%{opacity:.15}}.ps-blink{animation:psblink 1.4s steps(1) infinite}' +
    '@keyframes psspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ps-sp{animation:psspray 1.4s ease-out infinite}.ps-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const snow = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="ps-sn' + (i % 3 ? " ps-sn" + (1 + i % 3) : "") + '" cx="' + ((i * 61) % 420) + '" cy="' + ((i * 37) % 120) + '" r="' + (i % 2 ? 1.6 : 2.2) + '" fill="#fff" opacity=".85"/>'; return s; };
  const RED = "#ff3b3b", BONE = "#f5f1e6", TEAL = "#2ec4b6", BLUE = "#0053a0", GOLD = "#f5c542";
  /* Riverside Plaza: tall concrete slabs with bright red, blue, yellow and green panels */
  const towers = (sx, sy, sc, dim) => {
    const cols = ["#d8423a", "#2f6db5", "#e8b630", "#3f9a5a"];
    const t = [[0, 0, 34, 120], [40, 30, 30, 90], [76, 12, 34, 108], [116, 46, 28, 74]];
    let s = '<g transform="translate(' + sx + ' ' + sy + ') scale(' + sc + ')" opacity="' + (dim || 1) + '">';
    t.forEach((b, k) => {
      s += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + b[3] + '" fill="#cfcac0"/>';
      for (let r = 0; r * 10 + 6 < b[3]; r++) for (let c = 0; c < 3; c++) {
        const col = (r + c + k) % 4 === 0 ? cols[(r + k) % 4] : "#8f8a82";
        s += '<rect x="' + (b[0] + 3 + c * (b[2] - 6) / 3) + '" y="' + (b[1] + 4 + r * 10) + '" width="' + ((b[2] - 6) / 3 - 2) + '" height="6" fill="' + col + '"/>';
      }
    });
    return s + '</g>';
  };

  /* 1. Cedar-Riverside station, METRO Blue Line */
  function psstation() {
    const tr = '<g class="anim-train"><rect x="20" y="132" width="320" height="64" rx="10" fill="#dfe3e8" stroke="#7a828c" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 46) + '" y="142" width="34" height="24" rx="3" fill="#1d2833"/>').join("") +
      '<rect x="20" y="172" width="320" height="8" fill="' + BLUE + '"/><rect x="20" y="180" width="320" height="3" fill="#f2c200"/>' +
      '<path d="M340 136q18 4 18 24v28h-18z" fill="#c9ced6" stroke="#7a828c" stroke-width="2"/><rect x="342" y="144" width="12" height="18" rx="2" fill="#1d2833"/><circle cx="352" cy="184" r="3.5" fill="#fff6c2"/>' +
      '<path d="M120 132l20 -18M126 116h28" stroke="#2a2f36" stroke-width="2.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ps1)"/>' + towers(200, 0, 1.2, 1) +
      '<rect x="0" y="100" width="400" height="18" fill="#5c6a52"/>' +
      '<rect x="0" y="118" width="400" height="80" fill="#5e6168"/><path d="M0 196h400" stroke="#8a8e95" stroke-width="2"/><path d="M0 128h400" stroke="#9aa0a8" stroke-width="2"/>' +
      /* platform canopy, its post standing on the platform in front of the track */
      tr +
      '<rect x="0" y="198" width="400" height="8" fill="#f2c200"/><rect x="0" y="206" width="400" height="54" fill="#a8a29a"/>' +
      '<rect x="0" y="34" width="240" height="10" fill="#3a3f46"/><rect x="236" y="34" width="6" height="200" fill="#3a3f46"/><rect x="230" y="230" width="18" height="6" fill="#3a3f46"/>' +
      /* black station sign with the BLUE bullet */
      '<rect x="56" y="56" width="168" height="40" rx="3" fill="#111"/><text x="66" y="83" ' + font + ' font-size="17" fill="#fff">Cedar-Riverside</text>' +
      '<rect x="56" y="100" width="62" height="18" rx="9" fill="' + BLUE + '"/><text x="87" y="113" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">BLUE</text>' +
      '<rect class="ps-blink" x="250" y="12" width="10" height="10" rx="2" fill="' + RED + '"/><rect x="254" y="22" width="2" height="12" fill="#3a3f46"/>',
      sky("ps1", "#7fb2dd", "#e3edf4"));
  }

  /* 2. The punk bar on Cedar Ave: brick, marquee bulbs, the line out front */
  function pspunk() {
    let bulbs = "";
    for (let i = 0; i < 22; i++) bulbs += '<circle class="ps-flk' + (i % 2 ? " ps-flk2" : "") + '" cx="' + (92 + i * 10) + '" cy="72" r="2.6" fill="' + GOLD + '"/>';
    for (let i = 0; i < 22; i++) bulbs += '<circle class="ps-flk' + (i % 2 ? "" : " ps-flk2") + '" cx="' + (92 + i * 10) + '" cy="120" r="2.6" fill="' + GOLD + '"/>';
    let crowd = "";
    for (let i = 0; i < 9; i++) crowd += '<g class="ps-bob' + (i % 3 === 1 ? " ps-bob2" : i % 3 === 2 ? " ps-bob3" : "") + '"><circle cx="' + (40 + i * 40) + '" cy="196" r="9" fill="#1a1416"/><rect x="' + (30 + i * 40) + '" y="205" width="20" height="40" rx="7" fill="' + (i % 2 ? "#2a2024" : "#3a1d22") + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ps2)"/>' +
      '<rect x="20" y="20" width="360" height="210" fill="#6e2b24"/>' +
      Array.from({ length: 20 }, (_, i) => '<path d="M20 ' + (28 + i * 10) + 'h360" stroke="#5a221d" stroke-width="1.2"/>').join("") +
      '<rect x="84" y="64" width="232" height="64" fill="#141014" stroke="#3a3034" stroke-width="3"/>' + bulbs +
      '<text x="200" y="94" text-anchor="middle" ' + font + ' font-size="17" fill="' + BONE + '">PUNK ROCK SHOW</text>' +
      '<text x="200" y="114" text-anchor="middle" ' + font + ' font-size="13" fill="' + RED + '">ALL AGES TONIGHT</text>' +
      '<rect x="160" y="140" width="80" height="90" fill="#191314"/><rect x="40" y="140" width="80" height="44" fill="#2b1a1a" stroke="#141014" stroke-width="3"/><rect x="280" y="140" width="80" height="44" fill="#2b1a1a" stroke="#141014" stroke-width="3"/>' +
      '<rect class="ps-glow" x="44" y="144" width="72" height="36" fill="' + RED + '" opacity=".35"/><rect class="ps-glow ps-g2" x="284" y="144" width="72" height="36" fill="' + TEAL + '" opacity=".3"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#3d3a3a"/>' + crowd,
      sky("ps2", "#0d0b14", "#2a1c2a"));
  }

  /* 3. Hopkins High School, snow falling */
  function pshopkins() {
    let wins = "";
    for (let r = 0; r < 2; r++) for (let i = 0; i < 9; i++) if (i !== 4) wins += '<rect x="' + (32 + i * 38) + '" y="' + (120 + r * 34) + '" width="26" height="20" fill="#3a5a78" stroke="#e8e2d2" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ps3)"/>' +
      '<path d="M0 100q60 -20 120 -6t140 -4t140 0v20h-400z" fill="#2c4a3a"/>' +
      '<rect x="18" y="104" width="364" height="96" fill="#c7a77a"/><rect x="18" y="98" width="364" height="8" fill="#8a6a48"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M18 ' + (112 + i * 10) + 'h364" stroke="#b8976c" stroke-width="1"/>').join("") + wins +
      '<rect x="164" y="80" width="72" height="120" fill="#b89668"/><rect x="164" y="76" width="72" height="6" fill="#8a6a48"/>' +
      '<text x="200" y="100" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">HOPKINS</text><text x="200" y="113" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">HIGH SCHOOL</text>' +
      '<rect x="178" y="150" width="44" height="50" fill="#2a3a4a"/><path d="M200 150v50" stroke="#c7d2dc" stroke-width="2"/>' +
      '<rect x="330" y="40" width="3" height="64" fill="#d0d4d8"/><g class="ps-flag"><rect x="333" y="42" width="32" height="18" fill="#2f5aa8"/><rect x="333" y="51" width="32" height="3" fill="#fff"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#eef2f6"/><path d="M0 214h400" stroke="#d2dae2" stroke-width="2"/>' +
      '<rect x="60" y="196" width="40" height="6" rx="3" fill="#fff"/><rect x="290" y="196" width="50" height="6" rx="3" fill="#fff"/>' +
      snow(36),
      sky("ps3", "#7a8ea4", "#c9d4de"));
  }

  /* 4. The tour van in the back lot, notebook on the dash, Minnesota plate */
  function psvan() {
    return svg(
      '<rect width="400" height="260" fill="url(#ps4)"/>' +
      '<rect x="0" y="40" width="400" height="80" fill="#2a2a34"/><rect x="0" y="36" width="400" height="6" fill="#3a3a46"/>' +
      '<rect x="40" y="70" width="40" height="50" fill="#1e1e26"/><rect class="ps-glow" x="300" y="56" width="14" height="10" fill="' + GOLD + '"/><path d="M296 52h22" stroke="#555" stroke-width="2"/>' +
      '<rect x="0" y="120" width="400" height="140" fill="#3b3d42"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (20 + i * 90) + ' 232l20 -60" stroke="#e8e4d8" stroke-width="3" opacity=".7"/>').join("") +
      /* the van */
      '<path d="M90 110h190q30 0 44 30l18 30v40h-252z" fill="' + BONE + '" stroke="#8a867c" stroke-width="2"/>' +
      '<path d="M286 116h20q16 2 26 28l8 18h-54z" fill="#22303c"/>' +
      '<rect class="ps-glow ps-g2" x="292" y="138" width="22" height="8" rx="2" fill="' + GOLD + '"/><path d="M294 140h18M294 143h14" stroke="#8a6a20" stroke-width="1"/>' +
      '<rect x="104" y="124" width="54" height="30" rx="3" fill="#22303c"/><rect x="170" y="124" width="54" height="30" rx="3" fill="#22303c"/>' +
      '<path d="M234 116v94" stroke="#8a867c" stroke-width="2"/><rect x="90" y="170" width="252" height="8" fill="' + RED + '"/>' +
      '<circle cx="168" cy="212" r="20" fill="#1a1a1e"/><circle cx="168" cy="212" r="8" fill="#9aa0a8"/><circle cx="292" cy="212" r="20" fill="#1a1a1e"/><circle cx="292" cy="212" r="8" fill="#9aa0a8"/>' +
      '<rect class="ps-blink" x="86" y="150" width="8" height="16" fill="' + RED + '"/>' +
      /* Minnesota plate on the back */
      '<rect x="94" y="180" width="44" height="24" rx="3" fill="#fff" stroke="#2f5aa8" stroke-width="1.5"/><text x="116" y="189" text-anchor="middle" ' + font + ' font-size="5.5" fill="#2f5aa8">MINNESOTA</text>' +
      '<text x="116" y="200" text-anchor="middle" ' + font + ' font-size="9" fill="#2f5aa8">DMT 81</text>' +
      snow(30),
      sky("ps4", "#141a2a", "#3a4258"));
  }

  /* 5. Cedar Ave S and Riverside Ave, the West Bank: P.O.S tagged, Riverside Plaza behind */
  function pscorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ps5)"/>' + towers(30, 6, 1.15, 1) +
      '<rect x="0" y="140" width="400" height="84" fill="#5a5c62"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (148 + i * 8) + 'h400" stroke="#4c4e54" stroke-width="1"/>').join("") +
      tag("P.O.S", 24, 204, 64, RED, -6) + tag("NO KINGS", 196, 176, 26, TEAL, -4) + tag("EVERY NEVER IS NOW", 22, 220, 14, BONE, -3) + tag("STEF", 196, 214, 22, GOLD, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="344" y="104" width="6" height="120" fill="#2f2f2f"/>' + sign(290, 106, 106, "Cedar Ave S") + sign(290, 132, 106, "Riverside Ave") +
      '<g class="ps-sp"><circle cx="150" cy="166" r="3" fill="' + RED + '" opacity=".7"/></g><g class="ps-sp ps-sp2"><circle cx="156" cy="160" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("ps5", "#1a1030", "#d8704a"));
  }

  window.SCENES = { psstation: psstation, pspunk: pspunk, pshopkins: pshopkins, psvan: psvan, pscorner: pscorner };
})();
