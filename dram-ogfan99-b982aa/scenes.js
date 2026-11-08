/* dram scenes (Regions tab: Virginia; Hampton). CSS classes prefixed dm- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dmflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.95}}.dm-flk{animation:dmflick 2.4s infinite}.dm-flk2{animation-delay:1s}' +
    '@keyframes dmbar{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}.dm-eq{transform-box:fill-box;transform-origin:50% 100%;animation:dmbar .8s ease-in-out infinite}' +
    '@keyframes dmbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.dm-bob{animation:dmbob .9s ease-in-out infinite}.dm-bob2{animation-delay:-.45s}' +
    '@keyframes dmsway{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}.dm-sw{transform-box:fill-box;transform-origin:50% 100%;animation:dmsway 1.1s ease-in-out infinite}.dm-sw2{animation-delay:-.55s}' +
    '@keyframes dmwave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.dm-wv{animation:dmwave 3s linear infinite}.dm-wv2{animation-duration:4.5s}' +
    '@keyframes dmgull{0%{transform:translate(-40px,10px)}100%{transform:translate(440px,-20px)}}.dm-gull{animation:dmgull 10s linear infinite}' +
    '@keyframes dmglow{0%,100%{opacity:.35}50%{opacity:1}}.dm-gl{animation:dmglow 1.6s ease-in-out infinite}.dm-gl2{animation-delay:-.8s}' +
    '@keyframes dmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dm-sp{animation:dmspray 1.4s ease-out infinite}.dm-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, tc) => '<rect x="' + x + '" y="' + (y - 10) + '" width="' + (txt.length * 9 + 16) + '" height="20" rx="10" fill="' + color + '"/><text x="' + (x + (txt.length * 9 + 16) / 2) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="' + (tc || "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const tree = (x, base, r, c) => '<rect x="' + (x - 3) + '" y="' + (base - r * 1.4) + '" width="6" height="' + (r * 1.4) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (base - r * 1.6) + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * 0.7) + '" cy="' + (base - r * 1.2) + '" r="' + (r * 0.7) + '" fill="' + c + '"/><circle cx="' + (x + r * 0.7) + '" cy="' + (base - r * 1.2) + '" r="' + (r * 0.7) + '" fill="' + c + '"/>';
  const GREEN = "#6cc04a", PINK = "#ff8fb1", YEL = "#ffd23f", HRT = "#0b4f9c";

  /* 1. Hampton Transit Center on W Pembroke Ave: the covered bus loop, a white HRT bus with the blue-and-green band rolling in on the 109 to Buckroe Beach */
  function dmstation() {
    const bus = '<g class="anim-train"><rect x="34" y="122" width="292" height="76" rx="10" fill="#f6f6f3" stroke="#8d949b" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (80 + i * 38) + '" y="134" width="32" height="30" rx="3" fill="#20303e"/>').join("") +
      '<rect x="42" y="134" width="30" height="56" rx="3" fill="#20303e"/><path d="M34 172h292v8h-292z" fill="' + HRT + '"/><path d="M34 182q150 -6 292 4v4h-292z" fill="#2fa84f"/>' +
      '<rect x="40" y="124" width="130" height="11" rx="2" fill="#111"/><text x="105" y="132.5" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb84a">109 BUCKROE BEACH</text>' +
      '<circle cx="86" cy="198" r="13" fill="#222"/><circle cx="86" cy="198" r="5" fill="#9aa1a8"/><circle cx="272" cy="198" r="13" fill="#222"/><circle cx="272" cy="198" r="5" fill="#9aa1a8"/>' +
      '<circle cx="38" cy="186" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dm1)"/>' + tree(30, 196, 26, "#3f7a3a") + tree(372, 196, 30, "#3f7a3a") +
      '<path d="M0 66l400 -14v16l-400 14z" fill="#d9dde2" stroke="#8d949b" stroke-width="1.5"/><path d="M0 82l400 -14v6l-400 14z" fill="' + HRT + '"/>' +
      [40, 140, 240, 340].map(x => '<rect x="' + x + '" y="' + (78 - x * 0.035) + '" width="8" height="' + (120 + x * 0.035) + '" fill="#b9c0c7"/>').join("") +
      '<rect x="0" y="190" width="400" height="28" fill="#5a5f64"/><path d="M0 204h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="20 14"/>' + bus +
      '<rect x="0" y="218" width="400" height="42" fill="#c9c3b6"/><rect x="0" y="218" width="400" height="4" fill="#e3ddd0"/>' +
      '<rect x="40" y="10" width="320" height="38" rx="4" fill="#111"/><text x="56" y="35" ' + font + ' font-size="15" fill="#fff">Hampton Transit Center</text>' + badge(300, 29, "109", HRT),
      sky("dm1", "#7fb6e6", "#eaf3fb"));
  }

  /* 2. The old Coliseum Mall, Hampton: skylit concourse, storefronts, and the little recording booth kiosk where he cut his first song, the meters jumping */
  function dmmall() {
    const store = (x, w, c, t) => '<rect x="' + x + '" y="70" width="' + w + '" height="96" fill="#efe9dc" stroke="#b9b0a0"/><rect x="' + (x + 6) + '" y="76" width="' + (w - 12) + '" height="18" fill="' + c + '"/><text x="' + (x + w / 2) + '" y="89" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + t + '</text><rect x="' + (x + 8) + '" y="100" width="' + (w - 16) + '" height="66" fill="#b7d3e0" opacity=".8"/>';
    const eq = Array.from({ length: 7 }, (_, i) => '<rect class="dm-eq" style="animation-delay:-' + (i * 0.13).toFixed(2) + 's" x="' + (235 + i * 5.6).toFixed(1) + '" y="140" width="4" height="22" fill="' + [GREEN, YEL, PINK][i % 3] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#e6dfd0"/>' +
      '<path d="M0 0h400v60h-400z" fill="#cfd8de"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 56) + ' 0l30 60" stroke="#9aa6ae" stroke-width="3"/>').join("") + '<rect x="0" y="56" width="400" height="10" fill="#8a8070"/>' +
      store(0, 110, "#a33a3a", "SHOES") + store(290, 110, "#3a6aa3", "PRETZELS") +
      '<rect x="0" y="166" width="400" height="94" fill="#d8cfbe"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44 - 60) + ' 260l' + (60 + i * 6) + ' -94" stroke="#c4baa6" stroke-width="1"/>').join("") +
      '<rect x="150" y="96" width="130" height="110" rx="6" fill="#2b2b33" stroke="#111" stroke-width="2"/><rect x="156" y="104" width="118" height="20" rx="3" fill="#111"/><text class="dm-flk" x="215" y="118.5" text-anchor="middle" ' + font + ' font-size="11" fill="' + YEL + '">RECORDING BOOTH</text>' +
      '<rect x="160" y="130" width="64" height="70" rx="3" fill="#3d3d48"/>' + Array.from({ length: 4 }, (_, r) => Array.from({ length: 4 }, (_, c) => '<path d="M' + (164 + c * 15) + ' ' + (134 + r * 16) + 'l6 6l6 -6l-6 -6z" fill="#4c4c58"/>').join("")).join("") +
      '<path d="M192 202v-46" stroke="#888" stroke-width="2.5"/><rect x="186" y="140" width="12" height="20" rx="6" fill="#bbb" stroke="#555"/><path d="M186 160q6 8 12 0" stroke="#555" fill="none"/>' +
      '<rect x="230" y="130" width="44" height="36" rx="3" fill="#111"/>' + eq + '<rect x="230" y="170" width="44" height="10" rx="2" fill="#3a3a44"/>' +
      '<rect x="120" y="14" width="160" height="28" rx="4" fill="#111"/><text x="200" y="33" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">COLISEUM MALL</text>',
      "");
  }

  /* 3. "This lil' Latin bar off J Clyde Morris Blvd": neon in the window, string lights, the dance floor glowing, couples doing the cha cha */
  function dmbar() {
    const lights = Array.from({ length: 13 }, (_, i) => '<circle class="dm-gl' + (i % 2 ? " dm-gl2" : "") + '" cx="' + (10 + i * 32) + '" cy="' + (30 + Math.sin(i * 0.9) * 6 + (i % 2) * 6) + '" r="4" fill="' + [YEL, PINK, GREEN][i % 3] + '"/>').join("");
    const dancer = (x, c, cls) => '<g class="' + cls + '"><circle cx="' + x + '" cy="150" r="9" fill="#2a1a1a"/><path d="M' + (x - 11) + ' 160h22l6 36h-34z" fill="' + c + '"/><path d="M' + (x - 9) + ' 196v24M' + (x + 9) + ' 196v24" stroke="#1a1a1a" stroke-width="5"/><path d="M' + (x - 11) + ' 166l-12 -16M' + (x + 11) + ' 166l12 10" stroke="' + c + '" stroke-width="5" stroke-linecap="round"/></g>';
    const floor = Array.from({ length: 16 }, (_, i) => '<rect class="dm-gl' + ((i + Math.floor(i / 8)) % 2 ? " dm-gl2" : "") + '" x="' + (40 + (i % 8) * 40) + '" y="' + (214 + Math.floor(i / 8) * 22) + '" width="40" height="22" fill="' + [PINK, GREEN, YEL][(i + Math.floor(i / 8)) % 3] + '" opacity=".55"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1c0f1e"/><path d="M0 26q100 24 200 4t200 6" stroke="#444" stroke-width="1" fill="none"/>' + lights +
      '<rect x="24" y="60" width="130" height="90" rx="4" fill="#0e1622" stroke="#4a3a2a" stroke-width="4"/><text class="dm-flk" x="89" y="98" text-anchor="middle" ' + font + ' font-size="20" fill="' + PINK + '">LATIN</text><text class="dm-flk dm-flk2" x="89" y="122" text-anchor="middle" ' + font + ' font-size="20" fill="' + GREEN + '">BAR</text>' +
      '<rect x="44" y="130" width="90" height="14" rx="2" fill="#0f6b3a"/><text x="89" y="140.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">J Clyde Morris Blvd</text>' +
      '<rect x="250" y="120" width="150" height="80" fill="#4a2a1a"/><rect x="250" y="116" width="150" height="8" fill="#7a4a2a"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (262 + i * 22) + '" y="84" width="8" height="30" rx="2" fill="' + ["#3a7a4a", "#a33a3a", "#c9a24a"][i % 3] + '" opacity=".85"/>').join("") +
      '<rect x="0" y="206" width="400" height="54" fill="#2a1a24"/>' + floor +
      dancer(176, "#e2574c", "dm-sw") + dancer(214, YEL, "dm-sw dm-sw2") + dancer(330, GREEN, "dm-bob"),
      "");
  }

  /* 4. Buckroe Beach on the Chesapeake Bay: morning sun, the long fishing pier, the bandstand pavilion, waves rolling, a gull crossing */
  function dmbeach() {
    const wave = (y, c, cls) => '<g class="' + cls + '"><path d="M0 ' + y + Array.from({ length: 12 }, () => 'q10 -6 20 0t20 0').join("") + 'v20h-480z" fill="' + c + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dm4)"/><circle cx="300" cy="96" r="30" fill="#ffe08a"/><circle cx="300" cy="96" r="44" fill="#ffe08a" opacity=".25"/>' +
      '<rect x="0" y="120" width="400" height="80" fill="#3f86b0"/>' + wave(130, "#5aa0c8", "dm-wv") + wave(150, "#4a92bc", "dm-wv dm-wv2") +
      '<rect x="150" y="118" width="250" height="6" fill="#8a6a4a"/>' + Array.from({ length: 13 }, (_, i) => '<rect x="' + (156 + i * 19) + '" y="124" width="3" height="22" fill="#6a4a2a"/>').join("") +
      '<path d="M0 196q120 -18 240 -6t160 2v68h-400z" fill="#ecd8a8"/>' +
      '<path d="M40 150l40 -22l40 22z" fill="#f4f1ea" stroke="#8a8070"/><rect x="48" y="150" width="64" height="5" fill="#f4f1ea" stroke="#8a8070"/>' + [50, 70, 90, 108].map(x => '<rect x="' + x + '" y="155" width="3" height="38" fill="#f4f1ea"/>').join("") + '<rect x="44" y="190" width="72" height="6" fill="#d9cfbf"/>' +
      '<g class="dm-bob"><path d="M300 214l26 -30" stroke="#555" stroke-width="2"/><path d="M296 190q30 -30 60 0z" fill="' + PINK + '" stroke="#8a3a50"/></g>' +
      '<g class="dm-gull"><path d="M0 50q7 -7 14 0q7 -7 14 0" stroke="#fff" stroke-width="2.5" fill="none"/></g>' +
      '<rect x="14" y="14" width="150" height="26" rx="4" fill="#111"/><text x="89" y="32" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">BUCKROE BEACH</text>',
      sky("dm4", "#f6b48a", "#fbe7c6"));
  }

  /* 5. Coliseum Dr and Pine Chapel Rd: DRAM and BIG BABY on the wall, green signs, the Hampton Coliseum's crown of folded concrete fins behind */
  function dmcorner() {
    let crown = "";
    for (let i = 0; i < 12; i++) { const x = 116 + i * 14; crown += '<path d="M' + x + ' 92l7 -26l7 26z" fill="' + (i % 2 ? "#cfc8ba" : "#e4ddcf") + '" stroke="#8a8070" stroke-width="1"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#dm5)"/>' +
      crown + '<rect x="110" y="90" width="180" height="32" fill="#d8d1c2"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (118 + i * 14) + '" y="98" width="6" height="18" fill="#9a9284"/>').join("") +
      '<g class="dm-flk"><rect x="176" y="70" width="48" height="12" rx="2" fill="#111"/><text x="200" y="79.5" text-anchor="middle" ' + font + ' font-size="8" fill="' + YEL + '">TONIGHT</text></g>' +
      tree(40, 130, 20, "#2f5a2f") + tree(360, 130, 22, "#2f5a2f") +
      '<rect x="0" y="122" width="400" height="102" fill="#e9e2d2"/><rect x="0" y="122" width="400" height="6" fill="#d4cab4"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M0 ' + (134 + i * 11) + 'h400" stroke="#ddd4c0" stroke-width="1"/>').join("") +
      tag("DRAM", 46, 196, 54, GREEN, -7) + tag("BIG BABY", 196, 192, 26, PINK, -5) + tag("GAHDAMN!", 206, 152, 14, YEL, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(290, 98, 98, "Coliseum Dr") + sign(282, 124, 114, "Pine Chapel Rd") +
      '<g class="dm-sp"><circle cx="108" cy="148" r="3" fill="' + GREEN + '" opacity=".7"/></g><g class="dm-sp dm-sp2"><circle cx="114" cy="142" r="2" fill="' + GREEN + '" opacity=".6"/></g>',
      sky("dm5", "#22305a", "#f0a070"));
  }

  window.SCENES = { dmstation: dmstation, dmmall: dmmall, dmbar: dmbar, dmbeach: dmbeach, dmcorner: dmcorner };
})();
