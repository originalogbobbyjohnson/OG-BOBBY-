/* denzelcurry scenes (Regions tab: South Florida; Carol City, Miami Gardens). CSS classes and ids prefixed dz- (the page's own anim-train is kept).
   1 Metrobus Route 183 pulling up on Miami Gardens Dr (NW 183 St) at NW 33 Av, right by his old high school: palms, a pink-orange Dade sunset.
   2 Miami Carol City Senior High (class of 2013, the Chiefs): Friday night under the lights, orange, black and white end zone, a ball sailing through the uprights.
   3 The Design District, where he went to DASH: the white Fly's Eye Dome geodesic sphere in the plaza, palms, a plane crossing the sky.
   4 Opa-locka City Hall next door to Carol City: the pink Moorish palace with white onion domes and a minaret, palm fronds swaying.
   5 NW 183 St (Miami Gardens Dr) and NW 37 Av in Carol City: green signs, ZEL tagged on the stucco wall, the Golden Glades interchange ramps and a green highway sign behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dzflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.dz-flk{animation:dzflick 2.2s infinite}.dz-flk2{animation-delay:.7s}' +
    '@keyframes dzcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.dz-car{animation:dzcar 6s linear infinite}.dz-car2{animation-delay:-3s}' +
    '@keyframes dzcarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.dz-carL{animation:dzcarL 7s linear infinite}.dz-carL2{animation-delay:-3.5s}' +
    '@keyframes dzsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.dz-palm{transform-box:fill-box;transform-origin:50% 100%;animation:dzsway 3.2s ease-in-out infinite}.dz-palm2{animation-delay:-1.6s}' +
    '@keyframes dzkick{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(0,-120px) rotate(720deg);opacity:0}}.dz-ball{transform-box:fill-box;transform-origin:50% 50%;animation:dzkick 2.4s ease-out infinite}' +
    '@keyframes dzplane{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.dz-plane{animation:dzplane 12s linear infinite}' +
    '@keyframes dzcloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.dz-cloud{animation:dzcloud 22s linear infinite}.dz-cloud2{animation-delay:-11s}' +
    '@keyframes dzflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.dz-flag{transform-box:fill-box;transform-origin:0% 50%;animation:dzflag 1.4s ease-in-out infinite}' +
    '@keyframes dzspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dz-sp{animation:dzspray 1.4s ease-out infinite}.dz-sp2{animation-delay:.45s}' +
    '@keyframes dzblink{0%,100%{opacity:.25}50%{opacity:1}}.dz-bl{animation:dzblink 1.6s ease-in-out infinite}.dz-bl2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  /* palm tree: trunk + fronds, fronds sway */
  const palm = (x, base, h, cls) => {
    let trunk = '<path d="M' + x + ' ' + base + 'q' + (h * 0.12) + ' ' + (-h * 0.5) + ' ' + (h * 0.04) + ' ' + (-h) + '" stroke="#7a5a3a" stroke-width="' + (h * 0.07) + '" fill="none" stroke-linecap="round"/>';
    const tx = x + h * 0.04, ty = base - h;
    const fr = [[-1, -0.1], [-0.8, 0.35], [-0.3, -0.45], [0.3, -0.45], [0.8, 0.35], [1, -0.1]].map(f => '<path d="M' + tx + ' ' + ty + 'q' + (f[0] * h * 0.3) + ' ' + (-h * 0.22 + f[1] * h * 0.1) + ' ' + (f[0] * h * 0.55) + ' ' + (f[1] * h * 0.35 + h * 0.05) + '" stroke="#2f7a3a" stroke-width="' + (h * 0.06) + '" fill="none" stroke-linecap="round"/>').join("");
    return '<g>' + trunk + '<g class="dz-palm ' + (cls || "") + '">' + fr + '</g></g>';
  };
  const ORANGE = "#f26a21", TEAL = "#2ec4b6", RED = "#ff5a36", GOLD = "#ffd23f", BUS = "#1f4e79";

  /* 1. Metrobus 183 on Miami Gardens Dr */
  function dzstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1e2a33"/>').join("");
    const bus = '<g class="anim-train"><rect x="36" y="116" width="316" height="66" rx="10" fill="#f4f4f0" stroke="#7d868f" stroke-width="2"/>' + win +
      '<rect x="36" y="158" width="316" height="8" fill="' + BUS + '"/><rect x="36" y="168" width="316" height="3" fill="' + TEAL + '"/>' +
      '<rect x="326" y="124" width="22" height="40" rx="3" fill="#2b3640"/><rect x="314" y="118" width="38" height="9" rx="2" fill="#111"/><text x="333" y="125.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">183</text>' +
      '<circle cx="90" cy="184" r="11" fill="#222"/><circle cx="90" cy="184" r="4" fill="#888"/><circle cx="300" cy="184" r="11" fill="#222"/><circle cx="300" cy="184" r="4" fill="#888"/><circle cx="348" cy="170" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dzs1)"/>' +
      '<circle cx="300" cy="78" r="26" fill="#ffcf6b" opacity=".85"/>' +
      '<g fill="#5b3a5e" opacity=".55"><rect x="0" y="92" width="80" height="26"/><rect x="120" y="96" width="60" height="22"/><rect x="250" y="88" width="90" height="30"/></g>' +
      palm(20, 120, 80) + palm(372, 120, 74, "dz-palm2") + palm(210, 118, 60) +
      '<rect x="0" y="116" width="400" height="80" fill="#55565a"/><path d="M0 150h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#c9c2b4"/><path d="M0 196h400" stroke="#9c9586" stroke-width="3"/>' +
      '<rect x="374" y="150" width="5" height="70" fill="#4a4f55"/><rect x="361" y="134" width="32" height="20" rx="2" fill="' + BUS + '"/><text x="377" y="148" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS</text>' +
      '<rect x="78" y="206" width="244" height="40" rx="3" fill="#111"/><text x="90" y="223" ' + font + ' font-size="13" fill="#fff">Miami Gardens Dr</text><text x="90" y="239" ' + font + ' font-size="11" fill="#cfd8e0">&amp; NW 33 Av · Carol City</text>' + badge(258, 226, "183", BUS),
      sky("dzs1", "#2a2350", "#ff9a6b"));
  }

  /* 2. Carol City High, Friday night */
  function dzchiefs() {
    const light = (x) => '<rect x="' + (x - 2) + '" y="20" width="4" height="70" fill="#555"/><rect x="' + (x - 18) + '" y="10" width="36" height="14" rx="2" fill="#333"/>' +
      [0, 1, 2, 3].map(i => '<circle class="dz-flk' + (i % 2 ? " dz-flk2" : "") + '" cx="' + (x - 13 + i * 8.7) + '" cy="17" r="3.2" fill="#fffbe0"/>').join("");
    let crowd = "";
    for (let i = 0; i < 70; i++) crowd += '<circle cx="' + ((i * 41) % 400) + '" cy="' + (92 + (i * 11) % 30) + '" r="3" fill="' + ["#f26a21", "#111", "#ffffff", "#c45412"][i % 4] + '" opacity=".75"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dzs2)"/>' + light(40) + light(360) +
      '<rect x="0" y="86" width="400" height="44" fill="#2c2c30"/>' + crowd +
      '<rect x="0" y="130" width="400" height="130" fill="#2f8a3e"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 56 - 20) + ' 260L' + (i * 52 + 10) + ' 130" stroke="#fff" stroke-width="2" opacity=".55"/>').join("") +
      '<path d="M0 200h400" stroke="#fff" stroke-width="2" opacity=".5"/>' +
      '<rect x="0" y="130" width="400" height="34" fill="' + ORANGE + '"/><text x="200" y="157" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="26" letter-spacing="10" fill="#111">CHIEFS</text>' +
      '<rect x="0" y="162" width="400" height="3" fill="#fff"/>' +
      '<rect x="197" y="96" width="6" height="34" fill="#f2d24a"/><rect x="160" y="96" width="80" height="5" fill="#f2d24a"/><rect x="160" y="40" width="5" height="60" fill="#f2d24a"/><rect x="235" y="40" width="5" height="60" fill="#f2d24a"/>' +
      '<g class="dz-ball"><ellipse cx="200" cy="232" rx="11" ry="7" fill="#7a3b16" stroke="#3a1a08" stroke-width="1.5"/><path d="M194 232h12M197 230v4M200 230v4M203 230v4" stroke="#fff" stroke-width="1"/></g>' +
      '<rect x="128" y="236" width="144" height="18" rx="2" fill="#111" opacity=".75"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">CAROL CITY · FRIDAY NIGHT</text>',
      sky("dzs2", "#07070d", "#1c1a2a"));
  }

  /* 3. Design District, Fly's Eye Dome */
  function dzdome() {
    const cx = 200, cy = 132, r = 66;
    let tri = "";
    for (let i = 0; i < 7; i++) { const yy = cy - r + i * (2 * r / 6); const half = Math.sqrt(Math.max(0, r * r - (yy - cy) * (yy - cy)));
      tri += '<path d="M' + (cx - half) + ' ' + yy + 'H' + (cx + half) + '" stroke="#c9ced3" stroke-width="1.5"/>'; }
    for (let i = -3; i <= 3; i++) tri += '<path d="M' + (cx + i * 20 - 30) + ' ' + (cy - r) + 'L' + (cx + i * 20 + 30) + ' ' + (cy + r) + 'M' + (cx + i * 20 + 30) + ' ' + (cy - r) + 'L' + (cx + i * 20 - 30) + ' ' + (cy + r) + '" stroke="#c9ced3" stroke-width="1.2"/>';
    const eyes = [[200, 92, 12], [166, 112, 11], [234, 112, 11], [182, 146, 13], [220, 146, 13], [148, 146, 9], [252, 146, 9], [200, 176, 10], [166, 172, 8], [234, 172, 8]].map(e =>
      '<circle cx="' + e[0] + '" cy="' + e[1] + '" r="' + e[2] + '" fill="#2a3a4a" stroke="#ffffff" stroke-width="2.5"/><circle cx="' + (e[0] - e[2] * 0.3) + '" cy="' + (e[1] - e[2] * 0.3) + '" r="' + (e[2] * 0.3) + '" fill="#9cc6e8" opacity=".6"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dzs3)"/>' +
      '<g class="dz-cloud"><ellipse cx="60" cy="40" rx="34" ry="10" fill="#fff" opacity=".85"/></g><g class="dz-cloud dz-cloud2"><ellipse cx="80" cy="64" rx="26" ry="8" fill="#fff" opacity=".7"/></g>' +
      '<g class="dz-plane"><path d="M20 30h26l6 -4h4l-4 6h-30z" fill="#eef2f6"/><path d="M30 30l6 6h4l-2 -6z" fill="#cfd6dd"/></g>' +
      '<rect x="0" y="70" width="110" height="130" fill="#e9e4da"/>' + [0, 1, 2].map(r2 => [0, 1, 2].map(c2 => '<rect x="' + (12 + c2 * 32) + '" y="' + (84 + r2 * 34) + '" width="22" height="24" fill="#3c5a6e"/>').join("")).join("") +
      '<rect x="290" y="80" width="110" height="120" fill="#2a2a2e"/>' + [0, 1, 2, 3].map(r2 => '<rect x="296" y="' + (88 + r2 * 26) + '" width="98" height="14" fill="' + TEAL + '" opacity=".75"/>').join("") +
      palm(122, 200, 90) + palm(278, 200, 84, "dz-palm2") +
      '<rect x="0" y="196" width="400" height="64" fill="#d8d1c3"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 196l-20 64" stroke="#c4bcab" stroke-width="2"/>').join("") +
      '<ellipse cx="200" cy="202" rx="80" ry="8" fill="#000" opacity=".2"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#f4f6f8"/><g clip-path="url(#dzclip)">' + tri + '</g>' + eyes +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="#aab1b8" stroke-width="2"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#3a3530">DESIGN DISTRICT · DASH</text>',
      sky("dzs3", "#5fb6ee", "#dff1fb") + '<clipPath id="dzclip"><circle cx="' + cx + '" cy="' + cy + '" r="' + r + '"/></clipPath>');
  }

  /* 4. Opa-locka City Hall */
  function dzopa() {
    const dome = (x, y, w, c) => '<path d="M' + (x - w) + ' ' + y + 'q0 ' + (-w * 1.2) + ' ' + w + ' ' + (-w * 1.7) + 'q' + w + ' ' + (w * 0.5) + ' ' + w + ' ' + (w * 1.7) + 'z" fill="' + c + '"/><rect x="' + (x - 1) + '" y="' + (y - w * 2.2) + '" width="2" height="' + (w * 0.6) + '" fill="#c9a24a"/><circle cx="' + x + '" cy="' + (y - w * 2.25) + '" r="2" fill="#c9a24a"/>';
    const arch = (x, y, w, h) => '<path d="M' + x + ' ' + (y + h) + 'v' + (-h * 0.6) + 'a' + (w / 2) + ' ' + (w / 2) + ' 0 1 1 ' + w + ' 0v' + (h * 0.6) + 'z" fill="#2b3a55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dzs4)"/>' +
      '<circle cx="70" cy="56" r="22" fill="#fff3b0"/>' +
      palm(26, 206, 96) + palm(378, 206, 90, "dz-palm2") +
      '<rect x="80" y="110" width="240" height="96" fill="#f3b8b4"/><rect x="80" y="104" width="240" height="8" fill="#fbe3df"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (82 + i * 20) + '" y="98" width="10" height="8" fill="#fbe3df"/>').join("") +
      '<rect x="168" y="74" width="64" height="132" fill="#f6c5c0"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (170 + i * 11) + '" y="68" width="6" height="8" fill="#fbe3df"/>').join("") +
      dome(200, 74, 30, "#ffffff") + dome(110, 104, 16, "#ffffff") + dome(290, 104, 16, "#ffffff") +
      '<rect x="326" y="60" width="22" height="146" fill="#f3b8b4"/><rect x="322" y="56" width="30" height="8" fill="#fbe3df"/>' + dome(337, 58, 11, "#ffffff") +
      '<g class="dz-flag"><rect x="336" y="22" width="16" height="10" fill="' + TEAL + '"/></g>' +
      arch(184, 150, 32, 56) + arch(96, 150, 22, 40) + arch(126, 150, 22, 40) + arch(252, 150, 22, 40) + arch(282, 150, 22, 40) +
      arch(190, 96, 20, 30) +
      '<path d="M80 206h240" stroke="#c98d88" stroke-width="3"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#cfc6b2"/><rect x="0" y="230" width="400" height="30" fill="#4a4a4f"/>' +
      car("dz-car", 0, 240, "#2ec4b6") + car("dz-carL dz-carL2", 0, 248, "#f26a21") +
      '<text x="200" y="224" text-anchor="middle" ' + font + ' font-size="10" fill="#5a3a36">OPA-LOCKA CITY HALL</text>',
      sky("dzs4", "#5aa9e6", "#ffe0c8"));
  }

  /* 5. NW 183 St and NW 37 Av */
  function dzcorner() {
    const ramp = (y, h, c) => '<path d="M-20 ' + y + 'Q200 ' + (y - h) + ' 420 ' + y + '" stroke="' + c + '" stroke-width="10" fill="none"/><path d="M-20 ' + (y + 6) + 'Q200 ' + (y + 6 - h) + ' 420 ' + (y + 6) + '" stroke="#8d8a84" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dzs5)"/>' +
      ramp(118, 60, "#b9b4aa") + ramp(100, 30, "#a8a39a") +
      [70, 170, 280, 360].map(x => '<rect x="' + (x - 4) + '" y="70" width="8" height="58" fill="#9d988e"/>').join("") +
      '<rect x="150" y="34" width="110" height="34" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="205" y="50" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">GOLDEN GLADES</text><text x="205" y="62" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">INTERCHANGE · NORTH</text><rect x="168" y="68" width="4" height="22" fill="#666"/><rect x="238" y="68" width="4" height="22" fill="#666"/>' +
      '<g class="dz-car" style="animation-duration:4s"><rect x="0" y="84" width="40" height="10" rx="3" fill="#f2f2f2"/></g>' +
      '<rect x="0" y="126" width="400" height="98" fill="#e9d8b6"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (140 + i * 15) + 'h400" stroke="#dcc9a4" stroke-width="1"/>').join("") +
      '<rect x="0" y="126" width="400" height="6" fill="' + TEAL + '"/>' +
      tag("ZEL", 26, 196, 66, RED, -6) + tag("ULT", 168, 178, 30, GOLD, -4) + tag("ZUU", 150, 214, 26, TEAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      palm(232, 224, 80, "dz-palm2") +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(262, 98, 132, "NW 183 St") + sign(272, 124, 112, "NW 37 Av") +
      '<g class="dz-sp"><circle cx="118" cy="160" r="3" fill="' + RED + '" opacity=".7"/></g><g class="dz-sp dz-sp2"><circle cx="124" cy="154" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("dzs5", "#3a2a6a", "#ff9f6e"));
  }

  window.SCENES = { dzstop: dzstop, dzchiefs: dzchiefs, dzdome: dzdome, dzopa: dzopa, dzcorner: dzcorner };
})();
