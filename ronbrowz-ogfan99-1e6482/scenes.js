/* Harlem opening scenes for the Ron Browz game (135 St / St. Nicholas Av side of Harlem). Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-120px)}to{transform:translateX(460px)}}' +
    '.cloud{animation:drift 26s linear infinite}.cloud2{animation-duration:34s;animation-delay:-12s}' +
    '@keyframes shine{0%{transform:translateX(-80px)}60%,100%{transform:translateX(420px)}}' +
    '.shine{animation:shine 4.5s ease-in-out infinite}' +
    '@keyframes pulse{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}' +
    '.eq{transform-box:fill-box;transform-origin:50% 100%;animation:pulse .9s ease-in-out infinite}' +
    '.eq2{animation-delay:-.3s}.eq3{animation-delay:-.6s}.eq4{animation-delay:-.15s}' +
    '@keyframes ring{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}' +
    '.ring{transform-box:fill-box;transform-origin:50% 50%;animation:ring 1.8s ease-out infinite}.ring2{animation-delay:.9s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}' +
    '.bob{animation:bob .9s ease-in-out infinite}.bob2{animation-delay:-.45s}' +
    '@keyframes fall{0%{transform:translateY(-20px);opacity:0}15%{opacity:1}100%{transform:translateY(240px);opacity:.2}}' +
    '.conf{animation:fall 4s linear infinite}' +
    '@keyframes sway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:sway 2.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const cloud = (x, y, s, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".35"><ellipse cx="0" cy="0" rx="30" ry="9"/><ellipse cx="14" cy="-7" rx="16" ry="9"/><ellipse cx="-12" cy="-4" rx="12" ry="7"/></g></g>';
  const GOLD = "#ffd34d", PURP = "#b47cff", PINK = "#ff6b9a", B = "#ff6319", C = "#0039a6";

  /* 1. B and C trains pulling into 135 St, underground on St. Nicholas Av (IND 8th Av line) */
  function train() {
    let tiles = "";
    for (let y = 30; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#d6d0c0" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 30v88" stroke="#d6d0c0" stroke-width=".6"/>';
    let cols = "";
    [24, 200, 376].forEach(x => cols += '<rect x="' + (x - 5) + '" y="0" width="10" height="186" fill="#1f2328"/><rect x="' + (x - 7) + '" y="0" width="14" height="6" fill="#33393f"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#fff1c9" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#121212"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#26282b"/>' +
      '<rect x="0" y="30" width="400" height="88" fill="#efe8d6"/>' + tiles +
      '<rect x="0" y="30" width="400" height="7" fill="#3f8f7a"/><rect x="0" y="111" width="400" height="7" fill="#3f8f7a"/>' +
      '<rect x="44" y="52" width="142" height="38" rx="4" fill="#111"/><rect x="44" y="52" width="142" height="4" fill="#fff"/>' +
      '<text x="56" y="79" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">135 St</text>' +
      bullet(140, 72, "B", B) + bullet(166, 72, "C", C) +
      '<rect x="214" y="52" width="142" height="38" rx="4" fill="#111"/><rect x="214" y="52" width="142" height="4" fill="#fff"/>' +
      '<text x="224" y="70" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">St Nicholas Av</text>' +
      '<text x="224" y="83" font-family="Helvetica, Arial, sans-serif" font-size="9" fill="#ddd">City College</text>' +
      bullet(336, 72, "B", B) +
      '<g class="flk"><rect x="80" y="10" width="90" height="5" rx="2" fill="#fff7d6"/></g><g class="flk flk2"><rect x="240" y="10" width="90" height="5" rx="2" fill="#fff7d6"/></g>' +
      '<rect x="0" y="118" width="400" height="68" fill="#09090a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="300" height="4" fill="#8b9098"/>' + windows +
        '<rect x="285" y="134" width="16" height="22" rx="3" fill="#fff1c9" opacity=".85"/>' +
        '<circle cx="300" cy="176" r="4" fill="#fff6c2"/>' + bullet(296, 142, "C", C) +
      '</g>' + cols +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#26282b"/>' +
      tag("ETHER BOY", 20, 242, 30, GOLD, -5) + tag("HARLEM", 262, 240, 28, PURP, -7));
  }

  /* 2. Shepard Hall, City College: dark grey schist Gothic with bright white terracotta trim, up on the hill over St. Nicholas Park */
  function college() {
    const SCH = "#3d4148", TC = "#f4f1e8";
    let wins = "";
    for (let i = 0; i < 6; i++) {
      const x = 46 + i * 24 + (i > 2 ? 116 : 0);
      wins += '<path d="M' + x + ' 196v-34a7 9 0 0 1 14 0v34z" fill="#ffe7a8" class="flk' + (i % 2 ? ' flk2' : '') + '" opacity=".85"/>' +
        '<path d="M' + x + ' 162a7 9 0 0 1 14 0" fill="none" stroke="' + TC + '" stroke-width="2"/>';
    }
    let pins = "";
    [30, 106, 294, 370].forEach(x => pins += '<path d="M' + (x - 5) + ' 120v-26l5-12 5 12v26z" fill="' + TC + '"/>');
    let tpins = "";
    [166, 184, 216, 234].forEach(x => tpins += '<path d="M' + (x - 4) + ' 62v-18l4-10 4 10v18z" fill="' + TC + '"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + cloud(60, 40, 1, "cloud") + cloud(250, 26, .8, "cloud cloud2") +
      /* the hill and park */
      '<path d="M0 214q200-26 400 0v46H0z" fill="#2f5a34"/>' +
      '<circle cx="34" cy="214" r="18" fill="#3f7a44"/><circle cx="370" cy="212" r="20" fill="#3f7a44"/>' +
      /* side wings */
      '<rect x="30" y="118" width="140" height="92" fill="' + SCH + '"/><rect x="230" y="118" width="140" height="92" fill="' + SCH + '"/>' +
      '<rect x="30" y="116" width="140" height="6" fill="' + TC + '"/><rect x="230" y="116" width="140" height="6" fill="' + TC + '"/>' +
      '<rect x="30" y="142" width="140" height="3" fill="' + TC + '" opacity=".8"/><rect x="230" y="142" width="140" height="3" fill="' + TC + '" opacity=".8"/>' +
      /* central tower */
      '<rect x="162" y="62" width="76" height="148" fill="#353940"/>' +
      '<rect x="160" y="60" width="80" height="6" fill="' + TC + '"/>' +
      '<path d="M176 210v-60a24 30 0 0 1 48 0v60z" fill="#22252a"/><path d="M176 150a24 30 0 0 1 48 0" fill="none" stroke="' + TC + '" stroke-width="3"/>' +
      '<path d="M186 120v-30a14 16 0 0 1 28 0v30z" fill="#ffe7a8" opacity=".85" class="flk"/><path d="M200 74v46M186 100h28" stroke="' + SCH + '" stroke-width="2"/>' +
      '<rect x="190" y="160" width="20" height="50" fill="#5a3b22"/>' +
      pins + tpins + wins +
      '<g class="flag"><rect x="199" y="14" width="2" height="22" fill="#ddd"/><path d="M201 15h20l-4 5 4 5h-20z" fill="' + PURP + '"/></g>' +
      '<text x="200" y="236" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" letter-spacing="3" fill="' + TC + '">SHEPARD HALL · CONVENT AV</text>',
      sky("g2", "#2b4a7a", "#e7b38a"));
  }

  /* 3. Harlem Hospital's mural pavilion on Lenox Av: a glass wall printed with the bright 1930s Harlem murals */
  function mural() {
    let panels = "";
    const cols = ["#e8573a", "#f2c14e", "#2f8f83", "#3a5fb0", "#c84f8f", "#f08a3c", "#5aa04a"];
    for (let r = 0; r < 4; r++) for (let c = 0; c < 8; c++) {
      const x = 44 + c * 39, y = 54 + r * 34, k = (r * 3 + c * 2) % cols.length;
      panels += '<rect x="' + x + '" y="' + y + '" width="37" height="32" fill="' + cols[k] + '" opacity=".9"/>';
    }
    /* big abstract mural shapes: sun, waves, leaves, a book (no faces) */
    const art = '<circle cx="110" cy="92" r="26" fill="#ffd34d" opacity=".9"/>' +
      '<path d="M44 150q40-24 78 0t78 0 78 0 78 0v24H44z" fill="#1f4f8f" opacity=".75"/>' +
      '<path d="M250 70q30 20 10 60q-30-20-10-60z" fill="#3f8f44" opacity=".85"/><path d="M300 64q30 26 6 66q-28-26-6-66z" fill="#2f7a3a" opacity=".85"/>' +
      '<path d="M170 110h30l4 4h30v28h-34l-4-4h-26z" fill="#f4f1e8" opacity=".9"/><path d="M204 114v28" stroke="#8a5a12" stroke-width="2"/>';
    let mull = "";
    for (let c = 0; c <= 8; c++) mull += '<rect x="' + (43 + c * 39) + '" y="52" width="2" height="140" fill="#cfd8de"/>';
    for (let r = 0; r <= 4; r++) mull += '<rect x="42" y="' + (52 + r * 34) + '" width="316" height="2" fill="#cfd8de"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + cloud(80, 30, .9, "cloud") +
      '<rect x="0" y="40" width="40" height="160" fill="#7a3b2a"/><rect x="360" y="40" width="40" height="160" fill="#7a3b2a"/>' +
      '<rect x="36" y="44" width="328" height="156" fill="#1c2630"/>' + panels + art +
      '<defs><clipPath id="glass"><rect x="44" y="54" width="312" height="136"/></clipPath></defs>' +
      '<g clip-path="url(#glass)"><rect class="shine" x="0" y="40" width="40" height="170" fill="#fff" opacity=".22" transform="skewX(-20)"/></g>' + mull +
      '<rect x="36" y="196" width="328" height="8" fill="#9aa4ab"/>' +
      '<rect x="0" y="204" width="400" height="56" fill="#2a2d33"/><path d="M0 232h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<rect x="0" y="204" width="400" height="6" fill="#8e949b"/>' +
      '<text x="200" y="224" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" letter-spacing="3" fill="#f4f1e8">LENOX AV · W 135 ST</text>',
      sky("g3", "#3a6fb0", "#bfe0f2"));
  }

  /* 4. Jackie Robinson Park bandshell: the Ether Boy on the beat pad, speakers pumping, crowd bouncing */
  function bandshell() {
    let eq = "";
    for (let i = 0; i < 9; i++) eq += '<rect class="eq eq' + (1 + i % 4) + '" x="' + (150 + i * 11) + '" y="118" width="7" height="34" rx="2" fill="' + [GOLD, PURP, PINK][i % 3] + '"/>';
    let pads = "";
    for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) pads += '<rect x="' + (178 + c * 12) + '" y="' + (170 + r * 9) + '" width="9" height="6" rx="1" fill="' + ((r + c) % 3 ? "#3a3f47" : PINK) + '"/>';
    let crowd = "";
    for (let i = 0; i < 12; i++) {
      const x = 18 + i * 33, h = 16 + (i * 7) % 10;
      crowd += '<g class="bob' + (i % 2 ? ' bob2' : '') + '"><circle cx="' + x + '" cy="' + (226 - h) + '" r="9" fill="#0d0a14"/><rect x="' + (x - 12) + '" y="' + (232 - h) + '" width="24" height="40" rx="9" fill="#0d0a14"/>' +
        (i % 3 === 1 ? '<path d="M' + (x + 8) + ' ' + (230 - h) + 'l10-22" stroke="#0d0a14" stroke-width="5" stroke-linecap="round"/>' : '') + '</g>';
    }
    let conf = "";
    for (let i = 0; i < 14; i++) conf += '<rect class="conf" style="animation-delay:-' + (i * 0.29).toFixed(2) + 's" x="' + (60 + (i * 37) % 290) + '" y="20" width="4" height="7" fill="' + [GOLD, PURP, PINK, "#fff"][i % 4] + '" transform="rotate(' + (i * 23) + ' ' + (60 + (i * 37) % 290) + ' 20)"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(24) +
      /* park trees behind */
      '<circle cx="30" cy="150" r="40" fill="#1d3a22"/><circle cx="372" cy="146" r="44" fill="#1d3a22"/><circle cx="80" cy="128" r="30" fill="#24472a"/><circle cx="326" cy="126" r="30" fill="#24472a"/>' +
      /* the bandshell: brick base, pale stone arch */
      '<path d="M86 200V110a114 90 0 0 1 228 0v90z" fill="#d9cbb0"/>' +
      '<path d="M104 200V114a96 74 0 0 1 192 0v86z" fill="#2a1d3a"/>' +
      '<path d="M104 114a96 74 0 0 1 192 0" fill="none" stroke="#f1e6cf" stroke-width="4"/>' +
      '<path d="M120 116a80 60 0 0 1 160 0M136 118a64 46 0 0 1 128 0" fill="none" stroke="' + PURP + '" stroke-width="2" opacity=".55"/>' +
      '<rect x="80" y="196" width="240" height="14" fill="#8a4a32"/>' +
      eq +
      /* producer table + beat pad */
      '<rect x="150" y="164" width="100" height="32" rx="3" fill="#15121c"/><rect x="172" y="166" width="56" height="24" rx="3" fill="#20242b"/>' + pads +
      /* speakers with sound rings */
      '<rect x="112" y="150" width="28" height="46" rx="3" fill="#15121c"/><circle cx="126" cy="174" r="9" fill="#3a3f47"/><circle class="ring" cx="126" cy="174" r="9" fill="none" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<rect x="260" y="150" width="28" height="46" rx="3" fill="#15121c"/><circle cx="274" cy="174" r="9" fill="#3a3f47"/><circle class="ring ring2" cx="274" cy="174" r="9" fill="none" stroke="' + GOLD + '" stroke-width="2"/>' +
      conf + crowd +
      '<rect x="0" y="246" width="400" height="14" fill="#0d0a14"/>',
      sky("g4", "#120a22", "#3a2458"));
  }

  /* 5. St. Nicholas Av and W 135 St: street signs, a streetlight, the tag wall */
  function corner() {
    let bricks = "";
    for (let y = 70; y < 220; y += 12) for (let x = ((y - 70) / 12) % 2 ? -18 : 0; x < 196; x += 36) bricks += '<rect x="' + (x + 20) + '" y="' + y + '" width="34" height="10" fill="#6a2e22"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(14) +
      /* brownstones behind */
      '<rect x="0" y="30" width="80" height="190" fill="#3b2a24"/><rect x="250" y="40" width="150" height="180" fill="#2f2420"/>' +
      '<rect x="270" y="56" width="16" height="22" fill="#ffe7a8" opacity=".6"/><rect x="304" y="56" width="16" height="22" fill="#ffe7a8" opacity=".3"/><rect x="360" y="56" width="16" height="22" fill="#ffe7a8" opacity=".6"/>' +
      /* wall with tags */
      '<rect x="20" y="70" width="230" height="150" fill="#4a1f17"/>' + bricks +
      tag("RON BROWZ", 30, 140, 32, GOLD, -7) + tag("ETHER BOY", 56, 190, 26, PURP, -3) + tag("OH!", 196, 212, 24, PINK, -10) +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="254" y="88" width="96" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">St Nicholas Av</text>' +
      '<rect x="262" y="110" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">W 135 St</text>' +
      /* subway entrance globe */
      '<rect x="356" y="168" width="4" height="52" fill="#1d2329"/><circle class="flk flk2" cx="358" cy="164" r="7" fill="#3fbf5a"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#140e22", "#3a2a52"));
  }

  window.SCENES = { train, college, mural, bandshell, corner };
})();
