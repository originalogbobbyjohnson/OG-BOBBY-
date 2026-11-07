/* Oddisee (born in Washington D.C., raised in Prince George's County MD; mother from Southeast D.C. — THE DMV region) opening scenes. 400 x 260 animated SVGs. CSS classes prefixed od- */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes odblink{0%,49%{opacity:1}50%,100%{opacity:.15}}.od-blk{animation:odblink 1s steps(1) infinite}.od-blk2{animation-delay:.5s}' +
    '@keyframes odflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.35}55%{opacity:.9}}.od-flk{animation:odflick 2.4s infinite}.od-flk2{animation-delay:.9s}' +
    '@keyframes odspin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.od-spin{transform-box:view-box;transform-origin:300px 112px;animation:odspin 24s linear infinite}' +
    '@keyframes odspinr{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}' +
    '@keyframes odbike{0%{transform:translateX(84px);opacity:0}8%{opacity:1}92%{opacity:1}100%{transform:translateX(262px);opacity:0}}.od-bike{animation:odbike 5s linear infinite}' +
    '@keyframes odflow{from{transform:translateX(0)}to{transform:translateX(-40px)}}.od-flow{animation:odflow 2.2s linear infinite}' +
    '@keyframes odroll{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.od-car{animation:odroll 6s linear infinite}.od-car2{animation-duration:8s;animation-delay:-4s}' +
    '@keyframes odrollb{from{transform:translateX(520px)}to{transform:translateX(-120px)}}.od-carb{animation:odrollb 7s linear infinite}' +
    '@keyframes oddrift{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.od-cloud{animation:oddrift 28s linear infinite}.od-cloud2{animation-delay:-14s}' +
    '@keyframes odleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-40px,150px) rotate(300deg)}}.od-leaf{animation:odleaf 5s linear infinite}.od-leaf2{animation-delay:-2s}.od-leaf3{animation-delay:-3.6s}' +
    '@keyframes odshim{0%,100%{opacity:.25}50%{opacity:.8}}.od-shim{animation:odshim 2s ease-in-out infinite}.od-shim2{animation-delay:-1s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const bricks = (y0, y1, c) => { let b = ""; for (let y = y0; y < y1; y += 13) for (let x = ((y - y0) / 13) % 2 ? -18 : 0; x < 400; x += 36) b += '<rect x="' + x + '" y="' + y + '" width="34" height="11" fill="' + c + '"/>'; return b; };
  const tree = (x, y, r, c) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (r + 14) + '" fill="#3a2a1e"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (c || "#2f5a32") + '"/><circle cx="' + (x - r * .5) + '" cy="' + (y + r * .3) + '" r="' + (r * .7) + '" fill="' + (c || "#2f5a32") + '" opacity=".85"/>';
  /* WMATA line bullet: colored circle with the 2-letter line code */
  const bullet = (x, y, color, label, dark) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="' + color + '"/><text x="' + x + '" y="' + (y + 3.6) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="9.5" fill="' + (dark ? "#111" : "#fff") + '">' + label + '</text>';
  const GOLD = "#f2b134", TEAL = "#3fb6a8", RED = "#e2574c", GREEN = "#00b140";

  /* 1. Southern Avenue station (Green Line), right on the D.C. / Prince George's County line: open-air platform under the curved concrete canopy */
  function odstation() {
    const car = (x) => '<rect x="' + x + '" y="128" width="168" height="62" rx="5" fill="#c4c9ce" stroke="#6b7177" stroke-width="1.5"/>' +
      '<rect x="' + x + '" y="170" width="168" height="4" fill="' + GREEN + '"/><rect x="' + x + '" y="175" width="168" height="2" fill="#1f4e9a"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 14 + i * 38) + '" y="138" width="26" height="22" rx="3" fill="#1d2630"/>').join("") +
      '<rect x="' + (x + 66) + '" y="136" width="16" height="44" fill="#9ea4aa"/><path d="M' + (x + 74) + ' 136v44" stroke="#6b7177"/>' +
      '<circle cx="' + (x + 26) + '" cy="192" r="5" fill="#222"/><circle cx="' + (x + 142) + '" cy="192" r="5" fill="#222"/>';
    const cab = '<path d="M348 190v-58q0-4 4-4h30q12 4 16 22v40z" fill="#c4c9ce" stroke="#6b7177" stroke-width="1.5"/><path d="M372 134h12q8 4 11 18h-23z" fill="#11161c"/>' +
      '<rect x="348" y="170" width="50" height="4" fill="' + GREEN + '"/><rect x="374" y="140" width="20" height="7" rx="1" fill="#000"/><text x="384" y="145.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="5" fill="#ffb03c">GREEN</text>' +
      '<circle cx="392" cy="180" r="3" fill="#fff6c2" class="od-flk"/><circle cx="370" cy="192" r="5" fill="#222"/>';
    let edge = "";
    for (let x = 8; x < 400; x += 26) edge += '<rect x="' + x + '" y="199" width="10" height="3" rx="1.5" fill="#ffd27a" class="od-blk' + (x % 52 ? " od-blk2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#os1)"/>' + stars(10) +
      '<g class="od-cloud"><ellipse cx="40" cy="30" rx="30" ry="7" fill="#f5c9a0" opacity=".35"/></g>' +
      tree(24, 98, 24, "#2a4a2e") + tree(376, 94, 26, "#2a4a2e") + tree(250, 104, 18, "#335a36") +
      /* curved concrete canopy */
      '<path d="M0 54q100 26 200 4q100 22 200 -4v16q-100 28 -200 6q-100 22 -200 -6z" fill="#bdb6a8"/><path d="M0 70q100 28 200 6q100 22 200 -6v4q-100 26 -200 6q-100 22 -200 -6z" fill="#8a857a"/>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 5) + '" y="72" width="10" height="56" fill="#9e988b"/>').join("") +
      '<rect x="0" y="122" width="400" height="6" fill="#54504a"/>' +
      '<g class="anim-train">' + car(4) + car(176) + cab + '</g>' +
      /* granite platform edge + red hex tile */
      '<rect x="0" y="196" width="400" height="8" fill="#d8d2c4"/>' + edge +
      '<rect x="0" y="204" width="400" height="56" fill="#8c4a3a"/>' +
      /* brown pylon with the line color band */
      '<rect x="18" y="140" width="14" height="64" fill="#4a3628"/><rect x="18" y="140" width="14" height="10" fill="' + GREEN + '"/>' +
      /* station sign */
      '<rect x="80" y="212" width="240" height="40" rx="3" fill="#2b2119" stroke="#fff" stroke-width="1.5"/>' +
      bullet(102, 232, GREEN, "GR") +
      '<text x="210" y="237" text-anchor="middle" ' + F + ' font-weight="700" font-size="17" fill="#fff">Southern Avenue</text>' +
      '<text x="210" y="248" text-anchor="middle" ' + F + ' font-size="7" fill="#e8dccb">D.C. LINE · PRINCE GEORGE\'S COUNTY</text>',
      sky("os1", "#1d2a4a", "#c9775a"));
  }

  /* 2. Rock Creek Park: the rough stone Boulder Bridge arch over the creek, autumn trees, a bike rolling over (the park he rode his bike in, and his album) */
  function odrockcreek() {
    let rocks = "";
    for (let i = 0; i < 16; i++) rocks += '<ellipse cx="' + (112 + (i % 8) * 24 + (i > 7 ? 12 : 0)) + '" cy="' + (100 + (i > 7 ? 14 : 0)) + '" rx="12" ry="7" fill="' + ["#8f8577", "#a39886", "#7b7264"][i % 3] + '" stroke="#5a5247" stroke-width="1"/>';
    let water = "";
    for (let i = 0; i < 14; i++) water += '<path d="M' + (i * 40) + ' ' + (206 + (i % 3) * 12) + 'q10-4 20 0t20 0" stroke="#cfe6ee" stroke-width="2" fill="none" opacity=".7"/>';
    const leafy = (x, y, r, c) => '<rect x="' + (x - 4) + '" y="' + y + '" width="8" height="120" fill="#4a3424"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * .6) + '" cy="' + (y + r * .4) + '" r="' + r * .7 + '" fill="' + c + '" opacity=".9"/><circle cx="' + (x + r * .6) + '" cy="' + (y + r * .3) + '" r="' + r * .6 + '" fill="' + c + '" opacity=".85"/>';
    const bike = '<g transform="translate(0,-9)"><g class="od-bike"><circle cx="12" cy="88" r="8" fill="none" stroke="#111" stroke-width="2"/><circle cx="40" cy="88" r="8" fill="none" stroke="#111" stroke-width="2"/>' +
      '<path d="M12 88l10-14h14l4 14M22 74l6 14h12M34 70h6" stroke="' + TEAL + '" stroke-width="2.5" fill="none"/>' +
      '<path d="M26 72l4-18" stroke="#1d1d1d" stroke-width="6" stroke-linecap="round"/><circle cx="31" cy="48" r="5" fill="#1d1d1d"/><rect x="26" y="40" width="11" height="4" rx="2" fill="' + GOLD + '"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#os2)"/>' +
      leafy(30, 40, 34, "#d9822b") + leafy(370, 36, 36, "#c4462e") + leafy(90, 30, 26, "#e3b23c") + leafy(318, 28, 26, "#8e9b3a") +
      '<g class="od-leaf"><ellipse cx="300" cy="40" rx="4" ry="2" fill="#e3b23c"/></g><g class="od-leaf od-leaf2"><ellipse cx="120" cy="30" rx="4" ry="2" fill="#d9822b"/></g><g class="od-leaf od-leaf3"><ellipse cx="220" cy="20" rx="4" ry="2" fill="#c4462e"/></g>' +
      /* banks */
      '<path d="M0 150q60-20 110-6v116H0z" fill="#4f6b34"/><path d="M400 150q-60-20-110-6v116h110z" fill="#4f6b34"/>' +
      /* Boulder Bridge: rough gray-brown boulder masonry, one arch */
      '<path d="M96 96h208v100h-26q-4-62-78-62t-78 62H96z" fill="#9a8f7e" stroke="#5a5247" stroke-width="2"/>' + rocks +
      '<path d="M122 196q4-62 78-62t78 62" fill="none" stroke="#5a5247" stroke-width="3"/>' +
      '<rect x="92" y="88" width="216" height="10" fill="#857a6a"/>' +
      /* creek */
      '<rect x="0" y="196" width="400" height="64" fill="#3b6f86"/><g class="od-flow">' + water + '</g>' +
      '<ellipse cx="60" cy="226" rx="18" ry="6" fill="#7b7264"/><ellipse cx="330" cy="240" rx="22" ry="7" fill="#8f8577"/>' +
      bike +
      '<rect x="128" y="8" width="144" height="22" rx="3" fill="#5b3a1e" stroke="#e8d3a8" stroke-width="1.5"/><text x="200" y="23" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#f3e3c0">ROCK CREEK PARK</text>',
      sky("os2", "#9ec7df", "#f2dcb0"));
  }

  /* 3. The Big Chair, Anacostia (Southeast D.C., his mother's side of town): the giant brown wooden chair up on its pedestal, cars rolling on Martin Luther King Jr Ave SE */
  function odchair() {
    const car = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="50" height="16" rx="5" fill="' + c + '"/><circle cx="11" cy="' + (y + 17) + '" r="4" fill="#111"/><circle cx="39" cy="' + (y + 17) + '" r="4" fill="#111"/><circle cx="48" cy="' + (y + 6) + '" r="2.5" fill="#fff8c0"/></g>';
    const carb = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="50" height="16" rx="5" fill="' + c + '"/><circle cx="11" cy="' + (y + 17) + '" r="4" fill="#111"/><circle cx="39" cy="' + (y + 17) + '" r="4" fill="#111"/><circle cx="2" cy="' + (y + 6) + '" r="2.5" fill="#ff4a3a"/></g>';
    const shop = (x, w, h, c) => '<rect x="' + x + '" y="' + (190 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
      '<rect x="' + (x + 6) + '" y="' + (196 - h) + '" width="' + (w - 12) + '" height="10" fill="#2a2a30" opacity=".6"/>' +
      '<rect x="' + (x + 8) + '" y="' + (176 - 30) + '" width="' + (w - 16) + '" height="22" fill="#ffd98a" opacity=".55"/>';
    const C = "#6b3a1f", C2 = "#8a4d28";
    return svg(
      '<rect width="400" height="260" fill="url(#os3)"/>' +
      '<g class="od-cloud"><ellipse cx="60" cy="40" rx="34" ry="8" fill="#fff" opacity=".6"/></g><g class="od-cloud od-cloud2"><ellipse cx="60" cy="24" rx="24" ry="6" fill="#fff" opacity=".5"/></g>' +
      shop(0, 70, 64, "#b5654a") + shop(72, 60, 54, "#d8c7a4") + shop(296, 54, 58, "#a9744f") + shop(352, 48, 70, "#8c5a46") +
      /* pedestal */
      '<rect x="160" y="150" width="80" height="40" fill="#c9c3b6" stroke="#8a8478" stroke-width="2"/><rect x="152" y="144" width="96" height="8" fill="#b3ad9f"/>' +
      /* giant chair: tall back with curved top rail and a slatted splat, seat, curved front legs */
      '<path d="M176 144l-4-34h56l-4 34" fill="none" stroke="' + C + '" stroke-width="6"/>' +
      '<rect x="168" y="102" width="64" height="10" rx="3" fill="' + C2 + '" stroke="' + C + '" stroke-width="2"/>' +
      '<path d="M178 104l-6-74M222 104l6-74" stroke="' + C + '" stroke-width="7" stroke-linecap="round"/>' +
      '<path d="M168 30q32-14 64 0v10q-32-12-64 0z" fill="' + C2 + '" stroke="' + C + '" stroke-width="2"/>' +
      '<path d="M186 44h28l-4 56h-20z" fill="' + C2 + '" stroke="' + C + '" stroke-width="2"/><path d="M200 46v52M193 46l2 52M207 46l-2 52" stroke="' + C + '" stroke-width="1.5"/>' +
      '<path d="M176 112q-6 14 0 32M224 112q6 14 0 32" stroke="' + C + '" stroke-width="5" fill="none"/>' +
      /* street */
      '<rect x="0" y="190" width="400" height="70" fill="#3a3b40"/><rect x="0" y="188" width="400" height="5" fill="#9b978d"/><path d="M0 226h400" stroke="#e8c547" stroke-width="3" stroke-dasharray="26 14"/>' +
      car("od-car", 200, RED) + carb("od-carb", 234, TEAL) + car("od-car od-car2", 200, "#e8e2d2") +
      '<rect x="6" y="98" width="140" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="76" y="110.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="8.5" fill="#fff">Martin Luther King Jr Ave SE</text>',
      sky("os3", "#5aa0d8", "#f2d9a8"));
  }

  /* 4. The Capital Wheel at National Harbor, Prince George's County: the white wheel turning over the Potomac at night, lights shimmering on the water */
  function odwheel() {
    const cx = 300, cy = 112, R = 78;
    let spokes = "", cars = "";
    for (let i = 0; i < 21; i++) {
      const a = i / 21 * Math.PI * 2, x = cx + R * Math.cos(a), y = cy + R * Math.sin(a);
      spokes += '<path d="M' + cx + ' ' + cy + 'L' + x.toFixed(1) + ' ' + y.toFixed(1) + '" stroke="#e9eef2" stroke-width="1"/>';
      cars += '<rect x="' + (x - 5).toFixed(1) + '" y="' + (y - 4).toFixed(1) + '" width="10" height="8" rx="2.5" fill="' + (i % 3 ? "#f4f6f8" : TEAL) + '" stroke="#9aa6ae" stroke-width=".8"/>';
    }
    let refl = "";
    for (let i = 0; i < 12; i++) refl += '<rect x="' + (240 + (i % 6) * 22) + '" y="' + (214 + Math.floor(i / 6) * 14) + '" width="14" height="2" fill="' + (i % 2 ? GOLD : "#cfe0ff") + '" class="od-shim' + (i % 2 ? " od-shim2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#os4)"/>' + stars(22) +
      /* far shore skyline */
      '<path d="M0 176h30v-14h18v8h22v-20h14v26h30v-10h20v10h40v-6h30v6h196v24H0z" fill="#141a2e"/>' +
      '<g class="od-spin"><circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="none" stroke="#f4f6f8" stroke-width="3"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (R - 6) + '" fill="none" stroke="#c9d3da" stroke-width="1.2"/>' + spokes + cars + '</g>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="7" fill="#c9d3da" stroke="#7d8890" stroke-width="2"/>' +
      '<path d="M' + cx + ' ' + cy + 'L266 200M' + cx + ' ' + cy + 'L334 200" stroke="#dfe5ea" stroke-width="5"/>' +
      /* pier */
      '<rect x="210" y="196" width="190" height="10" fill="#5b4a3a"/><rect x="210" y="194" width="190" height="3" fill="#8a7458"/>' +
      [220, 260, 300, 340, 380].map(x => '<rect x="' + x + '" y="206" width="5" height="16" fill="#3a2e24"/>').join("") +
      /* water */
      '<rect x="0" y="200" width="210" height="60" fill="#13213d"/><rect x="210" y="206" width="190" height="54" fill="#13213d"/>' + refl +
      '<rect x="18" y="214" width="150" height="34" rx="3" fill="#1b2442" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      '<text x="93" y="230" text-anchor="middle" ' + A + ' font-size="13" fill="' + GOLD + '" letter-spacing="1">NATIONAL HARBOR</text>' +
      '<text x="93" y="243" text-anchor="middle" ' + F + ' font-weight="700" font-size="7.5" fill="#cfe0ff">PRINCE GEORGE\'S COUNTY · POTOMAC</text>',
      sky("os4", "#070b1f", "#2c2a52"));
  }

  /* 5. The corner: Southern Ave SE & Wheeler Rd SE, right on the D.C. / Maryland line, with the white arches of the Frederick Douglass Memorial Bridge behind */
  function odcorner() {
    const arch = (x, w) => '<path d="M' + x + ' 92q' + (w / 2) + ' -46 ' + w + ' 0" fill="none" stroke="#f1f3f4" stroke-width="4"/>' +
      [0.2, 0.35, 0.5, 0.65, 0.8].map(t => '<path d="M' + (x + w * t).toFixed(1) + ' ' + (92 - 92 * t * (1 - t)).toFixed(1) + 'V92" stroke="#d7dcdf" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#14100e"/>' +
      '<rect x="0" y="0" width="400" height="100" fill="url(#os5)"/>' + stars(8) +
      /* bridge deck + three white arches */
      arch(10, 120) + arch(130, 120) + arch(250, 120) +
      '<rect x="0" y="90" width="400" height="5" fill="#cfd4d8"/><rect x="0" y="95" width="400" height="5" fill="#2a3346"/>' +
      bricks(100, 212, "#6b3428") +
      tag("ODDISEE", 18, 170, 50, GOLD, -5) + tag("GOOD COMPNY", 32, 204, 18, TEAL, -3) + tag("NNGE", 210, 196, 22, RED, -4) +
      '<rect x="0" y="212" width="400" height="48" fill="#8d8b85"/><rect x="0" y="210" width="400" height="4" fill="#b1aea6"/>' +
      '<g class="od-car od-car2"><rect x="0" y="236" width="56" height="16" rx="5" fill="' + TEAL + '"/><circle cx="12" cy="253" r="4" fill="#111"/><circle cx="44" cy="253" r="4" fill="#111"/></g>' +
      /* sign pole */
      '<rect x="336" y="58" width="5" height="156" fill="#4a5058"/>' +
      '<rect x="268" y="56" width="126" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="331" y="71" text-anchor="middle" ' + F + ' font-weight="700" font-size="11.5" fill="#fff">Southern Ave SE</text>' +
      '<rect x="268" y="80" width="126" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="331" y="95" text-anchor="middle" ' + F + ' font-weight="700" font-size="11.5" fill="#fff">Wheeler Rd SE</text>' +
      /* jurisdiction line sign */
      '<rect x="300" y="112" width="84" height="34" rx="3" fill="#f4f1e6" stroke="#222" stroke-width="1.5"/>' +
      '<text x="342" y="126" text-anchor="middle" ' + F + ' font-weight="700" font-size="7.5" fill="#222">ENTERING</text>' +
      '<text x="342" y="138" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#222">MARYLAND</text>',
      sky("os5", "#0b1430", "#4a3a5a"));
  }

  window.SCENES = { odstation, odrockcreek, odchair, odwheel, odcorner };
})();
