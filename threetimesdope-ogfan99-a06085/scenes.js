/* threetimesdope scenes (Regions tab: Philadelphia; Hunting Park, North Philly). CSS classes prefixed td- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tdspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.td-spin{transform-box:fill-box;transform-origin:50% 50%;animation:tdspin 1.8s linear infinite}' +
    '@keyframes tdnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(16px,-64px);opacity:0}}.td-note{animation:tdnote 3s ease-out infinite}.td-n2{animation-delay:-1s}.td-n3{animation-delay:-2s}' +
    '@keyframes tdsway{0%,100%{transform:rotate(-1.6deg)}50%{transform:rotate(1.6deg)}}.td-sway{transform-box:fill-box;transform-origin:50% 100%;animation:tdsway 4s ease-in-out infinite}.td-sway2{animation-delay:-2s}' +
    '@keyframes tdbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.td-bob{animation:tdbob .8s ease-in-out infinite}.td-bob2{animation-delay:-.4s}' +
    '@keyframes tdright{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.td-right{animation:tdright 6.5s linear infinite}' +
    '@keyframes tdleft{from{transform:translateX(160px)}to{transform:translateX(-520px)}}.td-left{animation:tdleft 5.2s linear infinite}.td-left2{animation-delay:-2.6s}' +
    '@keyframes tdwalk{from{transform:translateX(0)}to{transform:translateX(130px)}}.td-walk{animation:tdwalk 7s linear infinite alternate}' +
    '@keyframes tdglow{0%,100%{opacity:.5}50%{opacity:1}}.td-glow{animation:tdglow 2.4s ease-in-out infinite}.td-glow2{animation-delay:-1.2s}' +
    '@keyframes tdspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.td-sp{animation:tdspray 1.4s ease-out infinite}.td-sp2{animation-delay:.5s}' +
    '@keyframes tdflk{0%,100%{opacity:1}48%{opacity:.8}50%{opacity:.35}53%{opacity:.9}}.td-flk{animation:tdflk 2.6s infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="td-note ' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="0" rx="5" ry="3.6" fill="' + c + '"/><rect x="3.6" y="-18" width="2" height="18" fill="' + c + '"/><path d="M5.6 -18q8 4 6 12" stroke="' + c + '" stroke-width="2" fill="none"/></g></g>';
  const tree = (x, y, r, c, cls) => '<g class="td-sway ' + (cls || "") + '"><rect x="' + (x - 4) + '" y="' + (y - 4) + '" width="8" height="' + (r * 1.3) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - r * .5) + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * .7) + '" cy="' + (y - r * .1) + '" r="' + (r * .72) + '" fill="' + c + '"/><circle cx="' + (x + r * .7) + '" cy="' + (y - r * .1) + '" r="' + (r * .72) + '" fill="' + c + '"/></g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "td-glow") + '" cx="' + ((i * 89) % 400) + '" cy="' + (6 + (i * 41) % 64) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffcc00", PINK = "#e2336b", TEAL = "#2bb3c0", BSL = "#f58220";

  /* 1. Hunting Park on the Broad Street Line, under North Broad: buff tile walls, the orange band, the black sign with the BSL bullet, the orange-striped train sliding in */
  function station() {
    const tr = '<g class="anim-train"><rect x="24" y="104" width="326" height="76" rx="8" fill="#cfd3d8" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (38 + i * 43) + '" y="116" width="30" height="26" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="24" y="150" width="326" height="5" fill="' + BSL + '"/><rect x="24" y="158" width="326" height="3" fill="' + BSL + '"/>' +
      '<rect x="330" y="108" width="20" height="70" rx="4" fill="#a3a9b0"/><circle cx="342" cy="168" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#e0cfa6"/>' +
      Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 16v68" stroke="#cdb98e" stroke-width="1"/>').join("") +
      Array.from({ length: 5 }, (_, i) => '<path d="M0 ' + (28 + i * 12) + 'h400" stroke="#cdb98e" stroke-width="1"/>').join("") +
      '<rect x="0" y="0" width="400" height="16" fill="#2b2a28"/><rect x="0" y="76" width="400" height="5" fill="' + BSL + '"/><rect x="0" y="84" width="400" height="10" fill="#7a4a1f"/>' +
      '<rect x="0" y="94" width="400" height="96" fill="#232327"/>' + tr +
      '<rect x="0" y="190" width="400" height="7" fill="#f2c200"/><rect x="0" y="197" width="400" height="63" fill="#8b877f"/>' +
      [30, 370].map(x => '<rect x="' + (x - 7) + '" y="16" width="14" height="174" fill="#2f5d7e"/><rect x="' + (x - 9) + '" y="16" width="18" height="6" fill="#22465f"/>').join("") +
      '<rect x="92" y="30" width="216" height="32" rx="3" fill="#111"/><text x="106" y="52" ' + font + ' font-size="16" fill="#fff">Hunting Park</text>' + badge(246, 46, "BSL", BSL) +
      '<rect class="td-flk" x="150" y="214" width="100" height="6" rx="3" fill="#fff6c2" opacity=".5"/>' +
      '<rect x="300" y="206" width="70" height="30" rx="3" fill="#3a3a3e"/><path d="M308 214h54M308 222h40M308 230h48" stroke="#cfcfcf" stroke-width="2" opacity=".6"/>',
      "");
  }

  /* 2. Hunting Park, the park EST grew up in: the old music pavilion that still stands under the big shade trees, a DJ on the wheels cutting it up for the block, records spinning, notes floating out */
  function pavilion() {
    const crowd = Array.from({ length: 14 }, (_, i) => { const x = 14 + i * 28 + (i > 6 ? 10 : 0), y = 230 + (i % 2) * 8; if (x > 150 && x < 250) return ""; return '<g class="td-bob' + (i % 2 ? " td-bob2" : "") + '"><circle cx="' + x + '" cy="' + (y - 12) + '" r="5" fill="#2a1d1a"/><rect x="' + (x - 6) + '" y="' + (y - 7) + '" width="12" height="20" rx="4" fill="' + [PINK, TEAL, GOLD, "#3b3b8a"][i % 4] + '"/></g>'; }).join("");
    const cols = Array.from({ length: 6 }, (_, i) => '<rect x="' + (128 + i * 28) + '" y="110" width="6" height="64" fill="#f4efe2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#td2)"/>' +
      tree(30, 120, 44, "#2f6b2c") + tree(370, 116, 46, "#2c6328", "td-sway2") + tree(92, 104, 30, "#3b7d34", "td-sway2") + tree(312, 100, 32, "#3b7d34") +
      '<rect x="0" y="170" width="400" height="90" fill="#5d9a42"/><path d="M0 170h400" stroke="#4c8436" stroke-width="3"/>' +
      '<path d="M108 112l92 -46 92 46z" fill="#2f6b4e" stroke="#1f4a35" stroke-width="3"/><rect x="190" y="52" width="20" height="16" fill="#2f6b4e"/><path d="M186 54l14 -12 14 12z" fill="#1f4a35"/>' +
      '<rect x="112" y="108" width="176" height="6" fill="#e8e1d0"/>' + cols +
      '<rect x="104" y="172" width="192" height="12" fill="#cfc6b2"/><rect x="96" y="184" width="208" height="8" fill="#bdb39d"/>' +
      '<rect x="150" y="150" width="100" height="24" rx="2" fill="#1e1b22"/>' +
      '<g transform="translate(176 154)"><circle class="td-spin" cx="0" cy="0" r="11" fill="#111" stroke="#333" stroke-width="1"/><circle cx="0" cy="0" r="3.5" fill="' + PINK + '"/></g>' +
      '<g transform="translate(224 154)"><circle class="td-spin" cx="0" cy="0" r="11" fill="#111" stroke="#333" stroke-width="1"/><circle cx="0" cy="0" r="3.5" fill="' + GOLD + '"/></g>' +
      '<path d="M182 154l6 -2M230 154l6 -2" stroke="#ccc" stroke-width="2"/>' +
      '<g class="td-bob"><circle cx="200" cy="126" r="7" fill="#2a1d1a"/><rect x="192" y="132" width="16" height="20" rx="5" fill="' + TEAL + '"/><path d="M193 138l-14 12M207 138l16 12" stroke="#2a1d1a" stroke-width="4" stroke-linecap="round"/></g>' +
      '<rect x="116" y="138" width="26" height="36" rx="2" fill="#151418"/><circle cx="129" cy="148" r="6" fill="#333"/><circle cx="129" cy="164" r="8" fill="#333"/>' +
      '<rect x="258" y="138" width="26" height="36" rx="2" fill="#151418"/><circle cx="271" cy="148" r="6" fill="#333"/><circle cx="271" cy="164" r="8" fill="#333"/>' +
      note(134, 132, GOLD, "") + note(266, 130, PINK, "td-n2") + note(206, 112, "#fff", "td-n3") + crowd,
      sky("td2", "#7ec4ec", "#e9f5fb"));
  }

  /* 3. Roosevelt Boulevard along the edge of Hunting Park: the wide lanes and tree median, the green overhead sign with the US 1 shield, a convertible cruising down the Ave with the top down, cars rolling the other way */
  function boulevard() {
    const shield = (x, y) => '<path d="M' + x + ' ' + y + 'h18v12q0 8 -9 12q-9 -4 -9 -12z" fill="#fff" stroke="#111" stroke-width="1.5"/><text x="' + (x + 9) + '" y="' + (y + 15) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#111">1</text>';
    const rows = Array.from({ length: 8 }, (_, i) => { const x = i * 52; return '<rect x="' + x + '" y="94" width="50" height="42" fill="' + (i % 2 ? "#8a4b36" : "#9a5a3f") + '"/><rect x="' + x + '" y="90" width="50" height="5" fill="#5b3326"/>' + '<rect x="' + (x + 8) + '" y="102" width="10" height="12" fill="#ffe2a0" opacity=".8"/><rect x="' + (x + 30) + '" y="102" width="10" height="12" fill="#ffe2a0" opacity=".8"/><rect x="' + (x + 6) + '" y="120" width="38" height="5" fill="#d8d0c0"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#td3)"/>' + rows +
      '<rect x="0" y="136" width="400" height="124" fill="#4d4d52"/>' +
      '<rect x="0" y="176" width="400" height="12" fill="#6f8f4a"/>' + [20, 90, 160, 230, 300, 370].map((x, i) => tree(x, 178, 10, "#3f7a35", i % 2 ? "td-sway2" : "")).join("") +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 44) + '" y="155" width="22" height="3" fill="#f2f2f2"/><rect x="' + (i * 44 + 14) + '" y="220" width="22" height="3" fill="#f2f2f2"/>').join("") +
      '<rect x="40" y="18" width="5" height="120" fill="#7c8288"/><rect x="355" y="18" width="5" height="120" fill="#7c8288"/><rect x="40" y="22" width="320" height="5" fill="#7c8288"/>' +
      '<rect x="120" y="28" width="160" height="48" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' + shield(132, 38) +
      '<text x="214" y="50" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">Roosevelt Blvd</text><text x="214" y="68" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">NORTH  &#8594;</text>' +
      '<g class="td-left"><rect x="300" y="142" width="54" height="13" rx="4" fill="#2e5fa8"/><rect x="310" y="135" width="30" height="9" rx="3" fill="#2e5fa8"/><rect x="314" y="137" width="22" height="6" fill="#bfe0f5"/><circle cx="312" cy="156" r="4" fill="#111"/><circle cx="344" cy="156" r="4" fill="#111"/></g>' +
      '<g class="td-left td-left2"><rect x="300" y="146" width="48" height="11" rx="4" fill="#d9d4c7"/><rect x="310" y="140" width="26" height="8" rx="3" fill="#d9d4c7"/><circle cx="310" cy="157" r="4" fill="#111"/><circle cx="338" cy="157" r="4" fill="#111"/></g>' +
      '<g class="td-right"><rect x="0" y="206" width="112" height="22" rx="7" fill="' + PINK + '"/><path d="M0 210l-6 -6v14z" fill="' + PINK + '"/>' +
      '<path d="M30 206l10 -12h26l8 12z" fill="#2a1d1a" opacity=".25"/><path d="M70 206l6 -12" stroke="#cfe8f5" stroke-width="3"/>' +
      '<circle cx="42" cy="198" r="5" fill="#2a1d1a"/><rect x="37" y="202" width="10" height="6" fill="' + GOLD + '"/><circle cx="60" cy="198" r="5" fill="#2a1d1a"/><rect x="55" y="202" width="10" height="6" fill="' + TEAL + '"/>' +
      '<rect x="0" y="216" width="112" height="3" fill="#f2f2f2" opacity=".8"/><circle cx="24" cy="230" r="8" fill="#111"/><circle cx="24" cy="230" r="3.5" fill="#ddd"/><circle cx="90" cy="230" r="8" fill="#111"/><circle cx="90" cy="230" r="3.5" fill="#ddd"/>' +
      '<circle cx="110" cy="212" r="3" fill="#fff6c2"/>' + note(52, 190, GOLD, "td-n2") + '</g>',
      sky("td3", "#f6a14a", "#ffe0a8"));
  }

  /* 4. Broad and Erie, the North Philly shopping crossroads down the street from the park: storefronts under awnings, a new dress in the window, shopping bags walking by, the 56 bus rolling down Erie */
  function broaderie() {
    const shop = (x, w, aw, txt) => '<rect x="' + x + '" y="70" width="' + w + '" height="110" fill="#b26e4c"/><rect x="' + x + '" y="70" width="' + w + '" height="6" fill="#7d4a33"/>' +
      '<rect x="' + (x + 10) + '" y="84" width="' + (w / 2 - 14) + '" height="22" fill="#f1e2b8" opacity=".8"/><rect x="' + (x + w / 2 + 4) + '" y="84" width="' + (w / 2 - 14) + '" height="22" fill="#f1e2b8" opacity=".8"/>' +
      '<rect x="' + (x + 6) + '" y="118" width="' + (w - 12) + '" height="16" fill="#1c1a1e"/><text x="' + (x + w / 2) + '" y="130" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="1">' + txt + '</text>' +
      Array.from({ length: Math.floor(w / 12) }, (_, i) => '<path d="M' + (x + i * 12) + ' 136h12l-2 12h-8z" fill="' + (i % 2 ? "#fff" : aw) + '"/>').join("") +
      '<rect x="' + (x + 8) + '" y="148" width="' + (w - 16) + '" height="32" fill="#a9d4e8" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#td4)"/>' +
      shop(0, 130, PINK, "DRESSES") + shop(134, 130, TEAL, "SNEAKERS") + shop(268, 132, GOLD, "GOLD") +
      '<g transform="translate(64 152)"><circle cx="0" cy="4" r="4" fill="#d9c2a0"/><path d="M-10 26l10 -18 10 18z" fill="' + PINK + '"/><path d="M0 10v-2" stroke="#999" stroke-width="2"/></g>' +
      '<g transform="translate(200 160)"><path d="M-14 16h28l-4 -8h-20z" fill="#fff"/><path d="M-14 16h28v4h-28z" fill="' + TEAL + '"/></g>' +
      '<g transform="translate(334 158)"><circle cx="0" cy="8" r="9" fill="none" stroke="' + GOLD + '" stroke-width="3"/><circle cx="0" cy="18" r="4" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="180" width="400" height="18" fill="#b9b3a7"/><rect x="0" y="198" width="400" height="62" fill="#4a4a4f"/><path d="M0 228h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<g class="td-walk"><g transform="translate(40 158)"><circle cx="0" cy="0" r="5" fill="#3a2418"/><path d="M-6 6h12l3 18h-18z" fill="' + GOLD + '"/><path d="M-4 24v10M4 24v10" stroke="#3a2418" stroke-width="3"/>' +
      '<rect x="8" y="12" width="10" height="12" fill="' + PINK + '"/><rect x="-18" y="12" width="10" height="12" fill="' + TEAL + '"/><path d="M10 12q3 -6 6 0M-16 12q3 -6 6 0" stroke="#333" fill="none"/></g></g>' +
      '<g class="td-left"><rect x="300" y="204" width="120" height="40" rx="6" fill="#e9eaec" stroke="#8d9297" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (322 + i * 18) + '" y="210" width="14" height="14" rx="2" fill="#26323c"/>').join("") +
      '<rect x="302" y="210" width="16" height="10" rx="2" fill="#111"/><text x="310" y="218.5" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb000">56</text>' +
      '<rect x="300" y="230" width="120" height="4" fill="#1f4e79"/><circle cx="320" cy="246" r="6" fill="#111"/><circle cx="398" cy="246" r="6" fill="#111"/></g>',
      sky("td4", "#9fd0f0", "#f5ecd7"));
  }

  /* 5. N Broad St and W Hunting Park Ave: green signs, 3XD tagged big on the brick wall, the dark tree line of Hunting Park behind with the ballfield light towers glowing */
  function corner() {
    const light = (x, cls) => '<rect x="' + (x - 2) + '" y="40" width="4" height="70" fill="#3a3a44"/><rect x="' + (x - 14) + '" y="30" width="28" height="12" fill="#3a3a44"/>' +
      '<g class="td-glow ' + cls + '">' + [0, 1, 2, 3].map(i => '<circle cx="' + (x - 10 + i * 6.6) + '" cy="36" r="2.4" fill="#fff8d0"/>').join("") + '<path d="M' + (x - 14) + ' 42l-24 70h76l-24 -70z" fill="#fff8d0" opacity=".12"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#td5)"/>' + stars(16) +
      light(70, "") + light(330, "td-glow2") +
      '<path d="M0 116q20 -36 46 -20q18 -30 46 -10q26 -26 52 -4q24 -22 50 0q26 -30 54 -6q24 -24 50 0q28 -20 52 4q20 -12 50 4v40H0z" fill="#16301f"/>' +
      '<rect x="0" y="134" width="400" height="90" fill="#7a3b2d"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (142 + i * 8) + 'h400" stroke="#6a3226" stroke-width="1"/>').join("") +
      Array.from({ length: 22 }, (_, i) => '<path d="M' + (i * 20 + (i % 2) * 10) + ' 134v90" stroke="#6a3226" stroke-width=".6" opacity=".5"/>').join("") +
      tag("3XD", 26, 200, 62, GOLD, -6) + tag("ACKNICKULOUS", 150, 176, 22, PINK, -4) + tag("E.S.T.", 160, 210, 26, TEAL, -3) + tag("WOODY WOOD", 252, 212, 15, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55534e"/><rect x="0" y="222" width="400" height="4" fill="#e6e9ee"/>' +
      '<g class="td-right"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + TEAL + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + TEAL + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(300, 98, 98, "N Broad St") + sign(262, 124, 136, "W Hunting Park Av") +
      '<g class="td-sp"><circle cx="120" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="td-sp td-sp2"><circle cx="126" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("td5", "#140f2e", "#c45a5e"));
  }

  window.SCENES = { station: station, pavilion: pavilion, boulevard: boulevard, broaderie: broaderie, corner: corner };
})();
