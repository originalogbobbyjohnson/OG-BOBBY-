/* umi scenes (Regions tab: The Northwest; Seattle area, high school in Maple Valley, WA). CSS classes and ids prefixed um- (the page's own anim-train is kept).
   1 Kent Station on Sound Transit's Sounder S Line (the closest rail to Maple Valley): open-air platform, a double-deck commuter train sliding in, Mount Rainier faint behind.
   2 Lake Wilderness in Maple Valley: dark evergreens ringing the lake, a little dock, a canoe drifting, ripples.
   3 "Forest in the City" (her debut album) and her meditation sessions: a circle in the woods, sound bowls, light coming through the trees, a butterfly ("Butterfly") fluttering.
   4 Pike Place Market, Seattle: the red neon PUBLIC MARKET sign and the clock blinking over the street, rain coming down.
   5 Maple Valley Hwy (SR 169) and SE Kent-Kangley Rd at Maple Valley's Four Corners: green signs, UMI tagged on the wall, Mount Rainier white behind the evergreens. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes umsway{0%,100%{transform:rotate(-1.5deg)}50%{transform:rotate(1.5deg)}}.um-sway{transform-box:fill-box;transform-origin:50% 100%;animation:umsway 4.2s ease-in-out infinite}.um-sway2{animation-delay:-2.1s}' +
    '@keyframes umrip{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.7);opacity:0}}.um-rip{transform-box:fill-box;transform-origin:50% 50%;animation:umrip 3.2s ease-out infinite}.um-rip2{animation-delay:-1.6s}' +
    '@keyframes umboat{0%,100%{transform:translateX(0)}50%{transform:translateX(70px)}}.um-boat{animation:umboat 14s ease-in-out infinite}' +
    '@keyframes umfly{0%{transform:translate(0,0)}25%{transform:translate(40px,-20px)}50%{transform:translate(80px,0)}75%{transform:translate(40px,16px)}100%{transform:translate(0,0)}}.um-fly{animation:umfly 9s ease-in-out infinite}' +
    '@keyframes umflap{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.25)}}.um-flap{transform-box:fill-box;transform-origin:50% 50%;animation:umflap .35s ease-in-out infinite}' +
    '@keyframes umray{0%,100%{opacity:.18}50%{opacity:.42}}.um-ray{animation:umray 4s ease-in-out infinite}.um-ray2{animation-delay:-2s}' +
    '@keyframes umring{0%{transform:scale(.6);opacity:.8}100%{transform:scale(1.8);opacity:0}}.um-ring{transform-box:fill-box;transform-origin:50% 50%;animation:umring 2.6s ease-out infinite}.um-ring2{animation-delay:-1.3s}' +
    '@keyframes umrain{from{transform:translateY(-40px)}to{transform:translateY(270px)}}.um-rain{animation:umrain 1.1s linear infinite}.um-rain2{animation-delay:-.55s}' +
    '@keyframes umblink{0%,100%{opacity:1}50%{opacity:.4}}.um-blink{animation:umblink 1.6s steps(2) infinite}' +
    '@keyframes umcloud{from{transform:translateX(-120px)}to{transform:translateX(440px)}}.um-cloud{animation:umcloud 34s linear infinite}.um-cloud2{animation-delay:-17s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const fir = (x, base, h, c, cls) => '<g class="um-sway ' + (cls || "") + '"><rect x="' + (x - 2) + '" y="' + (base - 8) + '" width="4" height="8" fill="#4a3424"/>' +
    '<path d="M' + x + ' ' + (base - h) + 'l' + (h * .22) + ' ' + (h * .36) + 'h-' + (h * .1) + 'l' + (h * .16) + ' ' + (h * .3) + 'h-' + (h * .1) + 'l' + (h * .2) + ' ' + (h * .26) + 'h-' + (h * .96) + 'l' + (h * .2) + ' -' + (h * .26) + 'h-' + (h * .1) + 'l' + (h * .16) + ' -' + (h * .3) + 'h-' + (h * .1) + 'z" fill="' + (c || "#1f4d34") + '"/></g>';
  const rainier = (x, y, s, o) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" opacity="' + (o || 1) + '"><path d="M-120 0l70 -50q20 -20 40 -26q10 -4 20 0q24 8 40 26l70 50z" fill="#8e9fb5"/><path d="M-52 -48q20 -20 40 -28q10 -4 20 0q24 8 40 26q-14 6 -26 -2q-10 10 -22 2q-12 10 -24 0q-14 8 -28 2z" fill="#f6f8fb"/></g>';
  const cloud = (x, y, s, cls) => '<g class="um-cloud ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".8"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="9"/><ellipse cx="-12" cy="-4" rx="11" ry="7"/></g></g>';
  const SLINE = "#9ab6d3", LAV = "#c9a7ff", SKY = "#7fd3ff", GRN = "#6fd08c";

  /* 1. Sounder S Line at Kent Station */
  function umstation() {
    let win = ""; for (let i = 0; i < 8; i++) { win += '<rect x="' + (52 + i * 32) + '" y="112" width="22" height="16" rx="3" fill="#25313d"/><rect x="' + (52 + i * 32) + '" y="138" width="22" height="16" rx="3" fill="#25313d"/>'; }
    const train = '<g class="anim-train"><path d="M34 196v-92q0 -10 10 -10h268q20 0 26 22v80z" fill="#f2f4f6" stroke="#7c848c" stroke-width="2"/>' + win +
      '<rect x="34" y="162" width="304" height="10" fill="' + SLINE + '"/><rect x="34" y="172" width="304" height="5" fill="#1f5f8b"/>' +
      '<rect x="306" y="102" width="26" height="12" rx="2" fill="#111"/><text x="319" y="111" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb84d">S LINE</text>' +
      '<rect x="326" y="180" width="10" height="6" rx="2" fill="#fff6c2"/><rect x="60" y="196" width="44" height="8" fill="#333"/><rect x="250" y="196" width="44" height="8" fill="#333"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ums1)"/>' + cloud(80, 40, 1) + cloud(300, 30, .8, "um-cloud2") +
      rainier(250, 128, 1.3, .7) +
      fir(14, 200, 90) + fir(386, 200, 110, "#1a4430", "um-sway2") + fir(360, 200, 80) +
      '<rect x="0" y="200" width="400" height="12" fill="#8b8b85"/><path d="M0 220h400M0 232h400" stroke="#9aa" stroke-width="3"/>' + train +
      '<rect x="0" y="236" width="400" height="24" fill="#cfd3d6"/><path d="M0 238h400" stroke="#f2d24b" stroke-width="4" stroke-dasharray="14 6"/>' +
      '<path d="M40 58v40M360 58v40" stroke="#555" stroke-width="4"/><path d="M30 58h340l-10 -10h-320z" fill="#3c4a56"/>' +
      '<rect x="110" y="10" width="190" height="42" rx="4" fill="#111"/><rect x="120" y="19" width="26" height="24" rx="12" fill="' + SLINE + '"/><text x="133" y="36" text-anchor="middle" ' + font + ' font-size="15" fill="#111">S</text>' +
      '<text x="222" y="35" text-anchor="middle" ' + font + ' font-size="18" fill="#fff">KENT STATION</text>',
      sky("ums1", "#8fbfe0", "#e6eef4"));
  }

  /* 2. Lake Wilderness, Maple Valley */
  function umlake() {
    let trees = ""; for (let i = 0; i < 14; i++) trees += fir(10 + i * 30, 132, 40 + (i * 37) % 26, i % 2 ? "#1d4a33" : "#25573c", i % 2 ? "um-sway2" : "");
    return svg(
      '<rect width="400" height="260" fill="url(#uml1)"/>' + rainier(300, 108, .9, .55) + cloud(100, 36, .9) +
      trees + '<rect x="0" y="130" width="400" height="130" fill="#3b6f86"/><path d="M0 136h400" stroke="#9fd0e0" stroke-width="2" opacity=".6"/>' +
      '<g transform="translate(0 264) scale(1 -1)" opacity=".5">' + trees.replace(/um-sway2?/g, "") + '</g>' +
      '<rect x="0" y="130" width="400" height="130" fill="#3b6f86" opacity=".72"/>' +
      '<path d="M40 170q60 -6 120 0M220 196q60 -6 120 0M80 222q60 -6 120 0" stroke="#bfe6ef" stroke-width="1.5" fill="none" opacity=".7"/>' +
      '<ellipse class="um-rip" cx="270" cy="210" rx="16" ry="5" fill="none" stroke="#d6f0f6" stroke-width="1.5"/><ellipse class="um-rip um-rip2" cx="120" cy="190" rx="14" ry="4" fill="none" stroke="#d6f0f6" stroke-width="1.5"/>' +
      '<g class="um-boat"><path d="M150 168q30 10 60 0l-6 6q-24 6 -48 0z" fill="#c8562e"/><path d="M168 168l8 -12M188 168l-4 -14" stroke="#4a3424" stroke-width="2"/><circle cx="178" cy="158" r="4" fill="#2a2a30"/></g>' +
      '<rect x="300" y="226" width="100" height="10" fill="#8a6440"/><path d="M310 236v20M340 236v20M370 236v20" stroke="#6b4a2a" stroke-width="4"/>' +
      '<rect x="120" y="238" width="160" height="16" rx="3" fill="#122" opacity=".7"/><text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">LAKE WILDERNESS · MAPLE VALLEY</text>',
      sky("uml1", "#9cc7e2", "#f1f4ee"));
  }

  /* 3. Forest in the City: a meditation circle in the woods */
  function umforest() {
    let trees = ""; for (let i = 0; i < 9; i++) trees += '<rect x="' + (8 + i * 46) + '" y="0" width="' + (12 + (i % 3) * 4) + '" height="200" fill="' + (i % 2 ? "#3a2c22" : "#4a3828") + '"/>';
    const bowl = (x, c) => '<ellipse class="um-ring" cx="' + x + '" cy="186" rx="18" ry="6" fill="none" stroke="' + c + '" stroke-width="2"/><ellipse class="um-ring um-ring2" cx="' + x + '" cy="186" rx="18" ry="6" fill="none" stroke="' + c + '" stroke-width="2"/>' +
      '<path d="M' + (x - 16) + ' 186q16 22 32 0z" fill="#c9a24a" stroke="#7a5a1a" stroke-width="1.5"/><ellipse cx="' + x + '" cy="186" rx="16" ry="4" fill="#e6c76a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#umf1)"/>' + trees +
      '<path class="um-ray" d="M120 0l40 0l-30 220h-60z" fill="#fff7c8"/><path class="um-ray um-ray2" d="M240 0l36 0l20 220h-50z" fill="#fff7c8"/>' +
      '<path d="M0 60q60 -30 120 -6t140 -10t140 6v-50h-400z" fill="#1f5a3a"/><path d="M0 40q80 -20 160 0t240 -6v-34h-400z" fill="#2a6e46"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3d5a2c"/><ellipse cx="200" cy="214" rx="150" ry="26" fill="#56743a"/>' +
      '<g fill="' + GRN + '"><path d="M20 200q6 -16 12 0M40 202q4 -12 8 0M360 200q6 -16 12 0M380 202q4 -12 8 0"/></g>' +
      bowl(120, LAV) + bowl(200, SKY) + bowl(280, GRN) +
      '<ellipse cx="200" cy="226" rx="34" ry="7" fill="#7a5aa8"/><text x="200" y="230" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">BREATHE IN</text>' +
      '<g class="um-fly"><g transform="translate(150 110)"><g class="um-flap"><path d="M0 0q-16 -18 -20 -4q0 10 20 4zM0 0q16 -18 20 -4q0 10 -20 4zM0 2q-12 14 -14 4q2 -4 14 -4zM0 2q12 14 14 4q-2 -4 -14 -4z" fill="' + LAV + '" stroke="#5a3a8a" stroke-width="1"/></g><path d="M0 -6v12" stroke="#2a1a3a" stroke-width="2"/></g></g>' +
      '<text x="200" y="252" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" fill="#f4efe0" letter-spacing="2">FOREST IN THE CITY</text>',
      sky("umf1", "#cfe8d6", "#9cc6a6"));
  }

  /* 4. Pike Place Market in the rain */
  function umpike() {
    let rain = ""; for (let i = 0; i < 26; i++) rain += '<path class="um-rain' + (i % 2 ? " um-rain2" : "") + '" d="M' + (i * 16 + 4) + ' ' + ((i * 37) % 120) + 'l-3 10" stroke="#cfe0ef" stroke-width="1.2" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ump1)"/>' +
      '<rect x="0" y="120" width="400" height="90" fill="#3a2e2a"/><rect x="0" y="114" width="400" height="8" fill="#5a4a40"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (12 + i * 50) + '" y="136" width="36" height="52" fill="#ffd27a" opacity=".85"/><path d="M' + (12 + i * 50) + ' 136h36l-4 -8h-28z" fill="' + (i % 2 ? "#c8402e" : "#2e7a4a") + '"/>').join("") +
      '<path d="M120 114v-34M280 114v-34" stroke="#2a2a2a" stroke-width="4"/>' +
      '<rect x="96" y="34" width="208" height="46" rx="3" fill="#1a1a1a" stroke="#333" stroke-width="2"/>' +
      '<text class="um-blink" x="200" y="56" text-anchor="middle" ' + font + ' font-size="17" fill="#ff3b2f" stroke="#ff9a8a" stroke-width=".4">PUBLIC MARKET</text>' +
      '<text x="200" y="73" text-anchor="middle" ' + font + ' font-size="10" fill="#ff3b2f" opacity=".9">CENTER</text>' +
      '<circle cx="330" cy="40" r="20" fill="#f4f0e4" stroke="#1a1a1a" stroke-width="4"/><path d="M330 40v-12M330 40l8 4" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>' +
      '<text class="um-blink" x="330" y="74" text-anchor="middle" ' + font + ' font-size="7" fill="#ff3b2f">MARKET</text>' +
      '<rect x="0" y="210" width="400" height="50" fill="#5b5550"/><path d="M0 222h400M0 240h400" stroke="#6e6862" stroke-width="2"/>' +
      '<g fill="' + LAV + '"><path d="M60 214q16 -14 32 0z"/><path d="M76 214v20" stroke="#333" stroke-width="2"/></g><g fill="' + SKY + '"><path d="M300 216q16 -14 32 0z"/><path d="M316 216v20" stroke="#333" stroke-width="2"/></g>' +
      rain,
      sky("ump1", "#5d6b7c", "#a7b3c0"));
  }

  /* 5. Maple Valley Hwy and SE Kent-Kangley Rd, Mount Rainier behind */
  function umcorner() {
    let trees = ""; for (let i = 0; i < 8; i++) trees += fir(220 + i * 26, 168, 50 + (i * 23) % 30, i % 2 ? "#1d4a33" : "#25573c", i % 2 ? "um-sway2" : "");
    return svg(
      '<rect width="400" height="260" fill="url(#umc1)"/>' + rainier(300, 160, 1.5) + cloud(90, 40, .9) + trees +
      '<rect x="0" y="92" width="210" height="110" fill="#6a6f78"/><path d="M0 92h210" stroke="#4a4e56" stroke-width="4"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (110 + i * 16) + 'h210" stroke="#5a5e66" stroke-width="1"/>').join("") +
      tag("UMI", 24, 170, 62, LAV, -6) + tag("LOVE LANGUAGE", 22, 196, 15, SKY, -4) + tag("FOREST", 132, 150, 14, GRN, -5) +
      '<rect x="0" y="202" width="400" height="14" fill="#cfc8ba"/><rect x="0" y="216" width="400" height="44" fill="#45474c"/><path d="M0 238h400" stroke="#f2d24b" stroke-width="3" stroke-dasharray="18 10"/>' +
      '<path d="M200 216v-150" stroke="#6b6f74" stroke-width="5"/>' + sign(120, 56, 176, "MAPLE VALLEY HWY", 12) + sign(116, 82, 184, "SE KENT-KANGLEY RD", 12),
      sky("umc1", "#7fb6e0", "#e8f0f6"));
  }

  window.SCENES = { umstation, umlake, umforest, umpike, umcorner };
})();
