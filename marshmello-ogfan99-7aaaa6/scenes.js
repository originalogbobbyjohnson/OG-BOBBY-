/* marshmello scenes (Regions tab: Philadelphia; born in Philadelphia, rooms set in Old City / Center City). CSS classes prefixed mm- (the page's own anim-train is kept). No logos, no faces (no helmet drawn). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mmflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.mm-flk{animation:mmflick 2.4s infinite}.mm-flk2{animation-delay:.8s}' +
    '@keyframes mmglow{0%,100%{opacity:.45}50%{opacity:1}}.mm-glow{animation:mmglow 2.2s ease-in-out infinite}.mm-g2{animation-delay:-1.1s}.mm-g3{animation-delay:-.6s}' +
    '@keyframes mmflag{0%,100%{transform:skewY(0)}50%{transform:skewY(5deg)}}.mm-flag{transform-box:fill-box;transform-origin:0 50%;animation:mmflag 1.6s ease-in-out infinite}' +
    '@keyframes mmsteam{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-34px);opacity:0}}.mm-st{animation:mmsteam 2.4s ease-out infinite}.mm-st2{animation-delay:-.8s}.mm-st3{animation-delay:-1.6s}' +
    '@keyframes mmtw{0%,100%{opacity:.2}50%{opacity:1}}.mm-tw{animation:mmtw 1.8s ease-in-out infinite}.mm-tw2{animation-delay:-.6s}.mm-tw3{animation-delay:-1.2s}' +
    '@keyframes mmbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.mm-bob{animation:mmbob 1s ease-in-out infinite}.mm-bob2{animation-delay:-.5s}' +
    '@keyframes mmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mm-sp{animation:mmspray 1.4s ease-out infinite}.mm-sp2{animation-delay:.45s}' +
    '@keyframes mmwalk{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.mm-walk{animation:mmwalk 14s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "mm-tw") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* a plain marshmallow (no face): soft white cylinder */
  const mallow = (x, y, s, cls) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="' + (cls || "") + '"><rect x="-12" y="-10" width="24" height="20" rx="8" fill="#fbfbf7" stroke="#c9c7bd" stroke-width="1.2"/><ellipse cx="0" cy="-8" rx="11" ry="3.4" fill="#ffffff" stroke="#d8d6cc" stroke-width="1"/></g></g>';
  const BLUE = "#4fc3f7", PINK = "#ff6fae", MFL = "#0072bc", BRICK = "#a2452e";

  /* 1. 2nd St station on SEPTA's Market-Frankford Line, under Market St in Old City: white tile, the blue MFL band, black sign with the blue L bullet, the blue-striped train sliding in */
  function mmstation() {
    const tr = '<g class="anim-train"><rect x="22" y="104" width="330" height="76" rx="8" fill="#d9dde2" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (36 + i * 44) + '" y="116" width="30" height="26" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="22" y="150" width="330" height="6" fill="' + MFL + '"/><rect x="22" y="160" width="330" height="2" fill="' + MFL + '"/>' +
      '<rect x="332" y="108" width="20" height="70" rx="4" fill="#a3a9b0"/><circle cx="344" cy="168" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#eef0ee"/>' + Array.from({ length: 34 }, (_, i) => '<path d="M' + (i * 12) + ' 16v68" stroke="#d8dcd8" stroke-width="1"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (26 + i * 11) + 'h400" stroke="#d8dcd8" stroke-width="1"/>').join("") +
      '<rect x="0" y="0" width="400" height="16" fill="#2e2e30"/>' + [50, 170, 290].map((x, i) => '<rect class="mm-flk' + (i === 1 ? " mm-flk2" : "") + '" x="' + x + '" y="6" width="60" height="5" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="84" width="400" height="10" fill="' + MFL + '"/><rect x="0" y="94" width="400" height="96" fill="#26262a"/>' + tr +
      '<rect x="0" y="190" width="400" height="7" fill="#f2c200"/><rect x="0" y="197" width="400" height="63" fill="#8a8680"/>' +
      [30, 370].map(x => '<rect x="' + (x - 7) + '" y="16" width="14" height="174" fill="#3d4a56"/>').join("") +
      '<rect x="80" y="24" width="240" height="36" rx="3" fill="#111"/><text x="96" y="48" ' + font + ' font-size="15" fill="#fff">2nd St</text><text x="150" y="48" ' + font + ' font-size="10" fill="#cfd6dc">Old City</text>' + badge(262, 42, "L", MFL) +
      mallow(70, 226, 0.8, "mm-bob") + mallow(330, 230, 0.7, "mm-bob mm-bob2") +
      '<rect x="140" y="212" width="120" height="6" rx="3" fill="#fff6c2" opacity=".45" class="mm-flk"/>',
      "");
  }

  /* 2. Elfreth's Alley, off N 2nd St: the narrow cobblestone lane of red-brick 1700s row houses, black shutters, white trim, flower boxes, a flag stirring */
  function mmalley() {
    let houses = "";
    const doors = ["#1e3a5f", "#6b1f2a", "#1f4a2e", "#2a2a2a", "#5a3a1e"];
    for (let i = 0; i < 5; i++) {
      const x = i * 40;
      houses += '<rect x="' + x + '" y="' + (40 + (i % 2) * 6) + '" width="40" height="' + (170 - (i % 2) * 6) + '" fill="' + (i % 2 ? "#9a3f2a" : BRICK) + '" stroke="#6e2a1c" stroke-width="1"/>' +
        '<rect x="' + (x + 8) + '" y="' + (60 + (i % 2) * 6) + '" width="24" height="26" fill="#2c3440" stroke="#f2efe6" stroke-width="2"/><rect x="' + (x + 4) + '" y="' + (60 + (i % 2) * 6) + '" width="4" height="26" fill="#1c1c1c"/><rect x="' + (x + 32) + '" y="' + (60 + (i % 2) * 6) + '" width="4" height="26" fill="#1c1c1c"/>' +
        '<rect x="' + (x + 8) + '" y="' + (104) + '" width="24" height="24" fill="#2c3440" stroke="#f2efe6" stroke-width="2"/><rect class="mm-glow' + (i % 2 ? " mm-g2" : "") + '" x="' + (x + 10) + '" y="106" width="20" height="20" fill="#ffd98a" opacity=".5"/>' +
        '<rect x="' + (x + 7) + '" y="128" width="26" height="5" fill="#3e7a3a"/><circle cx="' + (x + 12) + '" cy="127" r="2.5" fill="' + PINK + '"/><circle cx="' + (x + 20) + '" cy="126" r="2.5" fill="#ffd34d"/><circle cx="' + (x + 28) + '" cy="127" r="2.5" fill="' + PINK + '"/>' +
        '<rect x="' + (x + 12) + '" y="150" width="16" height="44" fill="' + doors[i] + '" stroke="#f2efe6" stroke-width="2"/><path d="M' + (x + 10) + ' 150q10 -10 20 0" fill="none" stroke="#f2efe6" stroke-width="2"/>' +
        '<rect x="' + (x + 8) + '" y="194" width="24" height="6" fill="#bdb6a8"/>';
    }
    let right = "";
    for (let i = 0; i < 5; i++) {
      const x = 240 + i * 32;
      right += '<rect x="' + x + '" y="' + (50 + (i % 2) * 8) + '" width="32" height="' + (160 - (i % 2) * 8) + '" fill="' + (i % 2 ? BRICK : "#8e3826") + '" stroke="#6e2a1c" stroke-width="1"/>' +
        '<rect x="' + (x + 8) + '" y="74" width="16" height="20" fill="#2c3440" stroke="#f2efe6" stroke-width="1.6"/><rect x="' + (x + 8) + '" y="112" width="16" height="20" fill="#2c3440" stroke="#f2efe6" stroke-width="1.6"/>' +
        '<rect x="' + (x + 9) + '" y="156" width="14" height="40" fill="' + doors[(i + 2) % 5] + '" stroke="#f2efe6" stroke-width="1.6"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#mm2)"/>' + houses + right +
      '<rect x="0" y="206" width="400" height="54" fill="#9a9488"/>' + '<path d="M200 210L240 210L400 260L0 260z" fill="#7d776c"/>' + '<path d="M0 200h200v10H0zM240 200h160v10H240z" fill="#c9c1b0"/>' +
      Array.from({ length: 40 }, (_, i) => '<ellipse cx="' + (10 + (i * 41) % 390) + '" cy="' + (216 + (i * 7) % 40) + '" rx="7" ry="3" fill="#8f897d" stroke="#6a655c" stroke-width=".8"/>').join("") +
      '<rect x="200" y="40" width="40" height="170" fill="#c9d6e0" opacity=".25"/>' +
      '<path d="M178 30v40" stroke="#333" stroke-width="2"/><g class="mm-flag"><rect x="179" y="30" width="26" height="16" fill="#b22234"/><rect x="179" y="33" width="26" height="2" fill="#fff"/><rect x="179" y="38" width="26" height="2" fill="#fff"/><rect x="179" y="43" width="26" height="2" fill="#fff"/><rect x="179" y="30" width="11" height="9" fill="#3c3b6e"/></g>' +
      '<rect x="208" y="160" width="8" height="46" fill="#1c1c1c"/><path d="M204 150h16l-3 12h-10z" fill="#1c1c1c"/><rect class="mm-glow" x="207" y="152" width="10" height="9" fill="#ffd98a"/>' +
      '<g class="mm-walk">' + mallow(0, 236, 0.9, "mm-bob") + '</g>',
      sky("mm2", "#7fb4e6", "#e6f0f6"));
  }

  /* 3. Philadelphia's Magic Gardens on South St: walls and arches covered in tile mosaic, mirror shards, bottles and bike wheels, sparkling */
  function mmgardens() {
    const cols = ["#e84a5f", "#2ec4b6", "#ffd23f", "#3a86ff", "#ff9f1c", "#8338ec", "#f7f7f2", "#06d6a0"];
    let tiles = "";
    for (let r = 0; r < 14; r++) for (let c = 0; c < 26; c++) {
      const x = c * 16 + (r % 2) * 8, y = 20 + r * 13;
      tiles += '<path d="M' + x + ' ' + y + 'l' + (6 + (c * 7 + r) % 8) + ' ' + ((r + c) % 3 - 1) + 'l' + (4 - (c % 3)) + ' 10l-' + (10 + (r % 3)) + ' 1z" fill="' + cols[(r * 5 + c * 3) % 8] + '" opacity=".9"/>';
    }
    const shards = Array.from({ length: 18 }, (_, i) => '<path class="mm-tw' + (i % 3 === 1 ? " mm-tw2" : i % 3 === 2 ? " mm-tw3" : "") + '" d="M' + (20 + (i * 67) % 360) + ' ' + (30 + (i * 37) % 150) + 'l6 -3l2 7l-7 2z" fill="#eaf6ff" stroke="#fff" stroke-width=".6"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#3a2a2a"/>' + tiles + shards +
      '<path d="M120 210V120q80 -70 160 0v90z" fill="#1b1430"/><path d="M120 210V120q80 -70 160 0v90" fill="none" stroke="#ffd23f" stroke-width="6"/><path d="M128 210V122q72 -60 144 0v88" fill="none" stroke="#e84a5f" stroke-width="3"/>' +
      [0, 1, 2].map(i => '<circle cx="' + (160 + i * 40) + '" cy="150" r="13" fill="none" stroke="#c0c6cc" stroke-width="2"/>' + Array.from({ length: 6 }, (_, k) => '<path d="M' + (160 + i * 40) + ' 150l' + (13 * Math.cos(k)).toFixed(1) + ' ' + (13 * Math.sin(k)).toFixed(1) + '" stroke="#c0c6cc" stroke-width="1"/>').join("")).join("") +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (136 + i * 14) + '" y="186" width="8" height="18" rx="3" fill="' + ["#2ec4b6", "#3a86ff", "#06d6a0"][i % 3] + '" opacity=".75"/>').join("") +
      '<rect x="0" y="210" width="400" height="50" fill="#5a4a44"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="214" width="14" height="8" fill="' + cols[i % 8] + '" opacity=".7"/>').join("") +
      mallow(200, 230, 0.9, "mm-bob") + '<text x="200" y="255" text-anchor="middle" ' + font + ' font-size="9" fill="#ffd23f">SOUTH ST</text>',
      "");
  }

  /* 4. Reading Terminal Market under the old train shed: steel arches and skylight, the hanging market clock, stalls with striped awnings, steam off the grills, a marshmallow stand */
  function mmmarket() {
    const aw = ["#e84a5f", "#3a86ff", "#06d6a0", "#ff9f1c"];
    return svg(
      '<rect width="400" height="260" fill="#2a2622"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (-40 + i * 80) + ' 120Q' + (i * 80) + ' 10 ' + (40 + i * 80) + ' 120" fill="none" stroke="#5a5048" stroke-width="5"/>').join("") +
      '<rect x="0" y="0" width="400" height="22" fill="#9fb4c4" opacity=".5"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 0v22" stroke="#5a5048" stroke-width="2"/>').join("") +
      '<path d="M200 22v28" stroke="#222" stroke-width="2"/><circle cx="200" cy="64" r="15" fill="#f4efe0" stroke="#7a5a2a" stroke-width="3"/><path d="M200 64V54M200 64l7 3" stroke="#222" stroke-width="2"/>' +
      [0, 1, 2, 3].map(i => {
        const x = 8 + i * 98;
        return '<rect x="' + x + '" y="120" width="88" height="80" fill="#3d342c"/>' +
          '<path d="M' + x + ' 104h88l-6 18H' + (x + 6) + 'z" fill="' + aw[i] + '"/>' + Array.from({ length: 5 }, (_, k) => '<path d="M' + (x + 10 + k * 17) + ' 104l-2 18" stroke="#fff" stroke-width="5" opacity=".85"/>').join("") +
          '<rect x="' + (x + 4) + '" y="160" width="80" height="40" fill="#6a5a48"/><rect x="' + (x + 4) + '" y="156" width="80" height="6" fill="#c9b48a"/>' +
          '<rect class="mm-glow' + (i % 2 ? " mm-g2" : "") + '" x="' + (x + 14) + '" y="130" width="60" height="18" rx="3" fill="#ffd98a" opacity=".4"/>';
      }).join("") +
      '<text x="52" y="143" text-anchor="middle" ' + font + ' font-size="8" fill="#2a1a0a">SOFT PRETZELS</text><text x="150" y="143" text-anchor="middle" ' + font + ' font-size="8" fill="#2a1a0a">CHEESESTEAKS</text>' +
      '<text x="248" y="143" text-anchor="middle" ' + font + ' font-size="8" fill="#2a1a0a">MARSHMALLOWS</text><text x="346" y="143" text-anchor="middle" ' + font + ' font-size="8" fill="#2a1a0a">ICE CREAM</text>' +
      mallow(226, 168, 0.55) + mallow(246, 168, 0.55) + mallow(266, 168, 0.55) + mallow(236, 156, 0.55) + mallow(256, 156, 0.55) +
      '<rect x="120" y="164" width="60" height="6" fill="#333"/>' + [130, 150, 170].map((x, i) => '<path class="mm-st' + (i === 1 ? " mm-st2" : i === 2 ? " mm-st3" : "") + '" d="M' + x + ' 160q-4 -8 0 -14q4 -6 0 -12" fill="none" stroke="#fff" stroke-width="3" opacity=".6"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#7a6e60"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 200l-20 60" stroke="#6a5e50" stroke-width="2"/>').join("") +
      Array.from({ length: 9 }, (_, i) => '<g class="mm-bob' + (i % 2 ? " mm-bob2" : "") + '"><circle cx="' + (24 + i * 44) + '" cy="226" r="8" fill="#14110e"/><rect x="' + (14 + i * 44) + '" y="234" width="20" height="26" rx="6" fill="#14110e"/></g>').join(""),
      "");
  }

  /* 5. N 2nd St and Arch St in Old City: green signs, MARSHMELLO tagged on the brick wall, the Betsy Ross House's little brick front and its flag behind */
  function mmcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mm5)"/>' + stars(16) +
      '<g fill="#1c2236"><rect x="0" y="60" width="50" height="80"/><rect x="56" y="30" width="34" height="110"/><rect x="300" y="44" width="40" height="96"/><rect x="346" y="70" width="54" height="70"/></g>' +
      /* Betsy Ross House: narrow 2.5-storey brick, gambrel roof with a dormer, white trim, flag */
      '<path d="M160 56l40 -18l40 18v4H160z" fill="#3b2a24"/><rect x="186" y="34" width="28" height="16" fill="#5a3a2e"/><rect x="192" y="38" width="16" height="10" fill="#ffd98a" class="mm-glow"/>' +
      '<rect x="160" y="60" width="80" height="80" fill="' + BRICK + '"/>' + [70, 100].map(y => [170, 192, 214].map(x => '<rect x="' + x + '" y="' + y + '" width="14" height="18" fill="#2c3440" stroke="#f2efe6" stroke-width="2"/>').join("")).join("") +
      '<rect class="mm-glow mm-g2" x="194" y="102" width="10" height="14" fill="#ffd98a" opacity=".6"/>' +
      '<path d="M240 40v40" stroke="#ddd" stroke-width="2"/><g class="mm-flag"><rect x="241" y="40" width="30" height="18" fill="#b22234"/><rect x="241" y="43" width="30" height="2" fill="#fff"/><rect x="241" y="48" width="30" height="2" fill="#fff"/><rect x="241" y="53" width="30" height="2" fill="#fff"/><rect x="241" y="40" width="13" height="10" fill="#3c3b6e"/>' +
      '<circle cx="247" cy="45" r="3" fill="none" stroke="#fff" stroke-width="1"/></g>' +
      '<rect x="0" y="134" width="400" height="90" fill="#7a3a2a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (142 + i * 8) + 'h400" stroke="#6a3022" stroke-width="1"/>').join("") +
      tag("MARSHMELLO", 18, 190, 40, "#ffffff", -6) + tag("MELLOGANG", 40, 216, 20, BLUE, -3) + tag("KEEP IT MELLO", 190, 214, 18, PINK, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="340" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(300, 98, 86, "N 2nd St") + sign(304, 124, 78, "Arch St") + mallow(220, 236, 0.9, "mm-bob") +
      '<g class="mm-sp"><circle cx="170" cy="164" r="3" fill="#fff" opacity=".7"/></g><g class="mm-sp mm-sp2"><circle cx="176" cy="158" r="2" fill="' + BLUE + '" opacity=".7"/></g>',
      sky("mm5", "#101a3a", "#6a4a8a"));
  }

  window.SCENES = { mmstation: mmstation, mmalley: mmalley, mmgardens: mmgardens, mmmarket: mmmarket, mmcorner: mmcorner };
})();
