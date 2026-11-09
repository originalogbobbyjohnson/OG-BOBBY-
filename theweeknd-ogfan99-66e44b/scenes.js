/* theweeknd scenes (Regions tab: CANADA; Scarborough, Toronto). CSS classes prefixed wk- (the page's own anim-train is kept).
   1 Warden station on TTC Line 2 Bloor-Danforth (the closest subway to Birchmount Park CI, his Scarborough high school): tiled platform, black name band, the green Line 2 circle, a silver subway car sliding in.
   2 House of Balloons: the Parkdale Victorian on Spencer Ave his first mixtape was named after, red brick and white porch at night, balloons drifting up.
   3 Queen Street West at night (the strip where he spent his early nights out): low brick storefronts, overhead wire, the red-and-white streetcar rolling past.
   4 Rogers Centre and the CN Tower: the white dome with its roof panels sliding open, the tower's lights blinking, stadium lights sweeping (he sold out the stadium at home).
   5 Danforth Ave and Birchmount Rd in Birch Cliff, Scarborough: green signs, ABEL tagged on the brick, the white Scarborough Bluffs over Lake Ontario behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wkflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.wk-flk{animation:wkflick 2.3s infinite}.wk-flk2{animation-delay:.8s}' +
    '@keyframes wkfloat{0%{transform:translateY(0)}100%{transform:translateY(-190px)}}.wk-bal{animation:wkfloat 7s linear infinite}.wk-b2{animation-delay:-2.3s}.wk-b3{animation-delay:-4.6s}' +
    '@keyframes wksway{0%,100%{transform:translateX(-4px)}50%{transform:translateX(4px)}}.wk-sway{animation:wksway 2s ease-in-out infinite}' +
    '@keyframes wkcar{from{transform:translateX(430px)}to{transform:translateX(-360px)}}.wk-tram{animation:wkcar 9s linear infinite;animation-delay:-4.4s}' +
    '@keyframes wkroof{0%,15%{transform:translateX(0)}50%,65%{transform:translateX(-46px)}100%{transform:translateX(0)}}.wk-roof{animation:wkroof 8s ease-in-out infinite}' +
    '@keyframes wkblink{0%,100%{opacity:.2}50%{opacity:1}}.wk-bl{animation:wkblink 1.4s ease-in-out infinite}.wk-bl2{animation-delay:-.7s}' +
    '@keyframes wksweep{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.wk-sw{transform-box:fill-box;transform-origin:50% 100%;animation:wksweep 3.6s ease-in-out infinite}.wk-sw2{animation-delay:-1.8s}' +
    '@keyframes wkwave{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.wk-wv{animation:wkwave 3.2s ease-in-out infinite}.wk-wv2{animation-delay:-1.6s}' +
    '@keyframes wkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.wk-sp{animation:wkspray 1.4s ease-out infinite}.wk-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "wk-bl") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const L2 = "#00923f", RED = "#e3242b", GOLD = "#f2c94c";

  /* 1. Warden station, Line 2 */
  function wkstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 48) + '" y="120" width="34" height="26" rx="3" fill="#1b232b"/>').join("");
    const train = '<g class="anim-train"><rect x="22" y="108" width="332" height="76" rx="8" fill="#d3d7db" stroke="#6b7278" stroke-width="2"/>' + win +
      '<rect x="22" y="154" width="332" height="5" fill="' + RED + '"/>' + [70, 166, 262].map(x => '<rect x="' + x + '" y="148" width="22" height="34" fill="#b9bfc4" stroke="#7d848a" stroke-width="1"/>').join("") +
      '<rect x="334" y="112" width="18" height="68" rx="4" fill="#aeb4ba"/><circle cx="344" cy="172" r="3.5" fill="#fff6c2"/>' +
      '<rect x="266" y="112" width="62" height="11" rx="2" fill="#111"/><text x="297" y="120.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffd56a">KENNEDY</text></g>';
    return svg(
      '<rect width="400" height="260" fill="#cfc8b8"/>' +
      Array.from({ length: 21 }, (_, i) => '<path d="M' + (i * 20) + ' 18v74" stroke="#bdb5a3" stroke-width="1"/>').join("") +
      Array.from({ length: 4 }, (_, i) => '<path d="M0 ' + (36 + i * 18) + 'h400" stroke="#bdb5a3" stroke-width="1"/>').join("") +
      '<rect x="0" y="0" width="400" height="18" fill="#2c2f33"/>' + [40, 170, 300].map((x, i) => '<rect class="wk-flk' + (i === 1 ? " wk-flk2" : "") + '" x="' + x + '" y="6" width="62" height="5" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="92" width="400" height="98" fill="#222428"/>' + train +
      '<rect x="0" y="190" width="400" height="7" fill="#f2c200"/><rect x="0" y="197" width="400" height="63" fill="#8d8a84"/><path d="M0 230h400" stroke="#7d7a74" stroke-width="2"/>' +
      '<rect x="70" y="30" width="260" height="40" rx="3" fill="#111"/><text x="88" y="58" ' + font + ' font-size="22" fill="#fff">Warden</text>' +
      '<circle cx="300" cy="50" r="13" fill="' + L2 + '"/><text x="300" y="56.5" text-anchor="middle" ' + font + ' font-size="18" fill="#fff">2</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f4f1ea">LINE 2 BLOOR-DANFORTH · SCARBOROUGH</text>');
  }

  /* 2. House of Balloons, Parkdale */
  function wkballoons() {
    const bal = (x, y, c, cls) => '<g class="wk-bal ' + cls + '"><g class="wk-sway"><ellipse cx="' + x + '" cy="' + y + '" rx="10" ry="12.5" fill="' + c + '"/><ellipse cx="' + (x - 3) + '" cy="' + (y - 4) + '" rx="2.5" ry="3.5" fill="#fff" opacity=".45"/><path d="M' + x + ' ' + (y + 12.5) + 'q-4 10 2 20q4 8 -1 16" stroke="#ddd" stroke-width="1" fill="none"/></g></g>';
    const balloons = [[110, 230, "#e3242b", ""], [150, 250, "#f2c94c", "wk-b2"], [250, 240, "#ff6fa8", "wk-b3"], [290, 236, "#e3242b", "wk-b2"], [200, 252, "#ffffff", ""], [330, 260, "#b38cff", "wk-b3"], [70, 256, "#ff6fa8", "wk-b2"]].map(b => bal(b[0], b[1], b[2], b[3])).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#wk2)"/>' + stars(26) +
      '<circle cx="342" cy="40" r="14" fill="#f6efd8"/><circle cx="348" cy="36" r="13" fill="#1c1430"/>' +
      '<path d="M120 200V96l80 -54l80 54v104z" fill="#9a3f2c"/><path d="M110 100l90 -64l90 64" fill="none" stroke="#3b2a26" stroke-width="10" stroke-linejoin="round"/>' +
      Array.from({ length: 14 }, (_, i) => '<path d="M120 ' + (110 + i * 7) + 'h160" stroke="#86351f" stroke-width="1"/>').join("") +
      '<path d="M182 96h36v-18q-18 -14 -36 0z" fill="#ffd98a"/><path d="M200 78v18M182 87h36" stroke="#f7f3ea" stroke-width="2"/>' +
      '<rect x="140" y="108" width="34" height="40" fill="#ffd98a"/><rect x="226" y="108" width="34" height="40" fill="#2a2440"/><path d="M157 108v40M140 128h34M243 108v40M226 128h34" stroke="#f7f3ea" stroke-width="2.5"/>' +
      '<rect x="110" y="156" width="180" height="8" fill="#f7f3ea"/>' + [116, 160, 240, 284].map(x => '<rect x="' + (x - 3) + '" y="164" width="6" height="36" fill="#f7f3ea"/>').join("") +
      Array.from({ length: 17 }, (_, i) => '<rect x="' + (118 + i * 10) + '" y="182" width="3" height="18" fill="#e8e3d6"/>').join("") + '<rect x="114" y="180" width="172" height="4" fill="#f7f3ea"/>' +
      '<rect x="186" y="166" width="28" height="34" fill="#3b1f1a"/><circle cx="208" cy="184" r="1.6" fill="' + GOLD + '"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#2a2a30"/><rect x="176" y="200" width="48" height="60" fill="#55545c"/>' +
      [30, 370].map(x => '<path d="M' + x + ' 200v-70" stroke="#2a3a2a" stroke-width="5"/><circle cx="' + x + '" cy="122" r="26" fill="#1f3326"/>').join("") +
      balloons +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f7f3ea">SPENCER AVE · PARKDALE</text>',
      sky("wk2", "#1c1430", "#4b2340"));
  }

  /* 3. Queen Street West, streetcar */
  function wkqueen() {
    const shops = [["#7a3b2e", "#ff5d73"], ["#4a4f5c", "#ffd56a"], ["#8a5a3a", "#7ee0ff"], ["#5c3a4a", "#ff9b4a"], ["#6b4234", "#b38cff"]].map((s, i) => {
      const x = i * 80;
      return '<rect x="' + x + '" y="' + (50 + (i % 2) * 12) + '" width="80" height="' + (124 - (i % 2) * 12) + '" fill="' + s[0] + '" stroke="#2a1a16" stroke-width="2"/>' +
        '<rect x="' + (x + 12) + '" y="' + (66 + (i % 2) * 12) + '" width="22" height="26" fill="#ffd98a" opacity=".85"/><rect x="' + (x + 46) + '" y="' + (66 + (i % 2) * 12) + '" width="22" height="26" fill="#2a2440"/>' +
        '<rect x="' + (x + 8) + '" y="126" width="64" height="40" fill="#1a1d24"/><rect class="wk-flk' + (i % 2 ? " wk-flk2" : "") + '" x="' + (x + 12) + '" y="112" width="56" height="9" rx="2" fill="' + s[1] + '"/>';
    }).join("");
    const tram = '<g class="wk-tram"><path d="M60 116l-10 -24" stroke="#333" stroke-width="2"/>' +
      '<rect x="20" y="118" width="300" height="70" rx="10" fill="' + RED + '" stroke="#7a1015" stroke-width="2"/>' +
      '<rect x="20" y="118" width="300" height="10" rx="5" fill="#f4f4f2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (38 + i * 40) + '" y="134" width="30" height="26" rx="3" fill="#15191f"/>').join("") +
      '<rect x="20" y="164" width="300" height="10" fill="#1b1b1b"/><rect x="20" y="174" width="300" height="5" fill="#f4f4f2"/>' +
      '<rect x="26" y="122" width="72" height="10" rx="2" fill="#111"/><text x="62" y="130" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffd56a">501 QUEEN</text>' +
      '<circle cx="24" cy="168" r="3.5" fill="#fff6c2"/>' + [70, 270].map(x => '<rect x="' + (x - 20) + '" y="186" width="40" height="8" rx="3" fill="#222"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#wk3)"/>' + stars(18) + shops +
      '<path d="M0 92h400" stroke="#222" stroke-width="1.5"/>' +
      '<rect x="0" y="174" width="400" height="14" fill="#8d8a84"/><rect x="0" y="188" width="400" height="72" fill="#3a3a40"/>' +
      '<path d="M0 206h400M0 214h400" stroke="#9a9aa0" stroke-width="2"/>' + tram +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f4f1ea">QUEEN ST W · TORONTO</text>',
      sky("wk3", "#0f1026", "#3d2350"));
  }

  /* 4. Rogers Centre and the CN Tower */
  function wkdome() {
    const tower = '<path d="M296 196L302 70h8l6 126z" fill="#c9c6bf"/><path d="M300 196l4 -126" stroke="#a9a59d" stroke-width="2"/>' +
      '<ellipse cx="306" cy="88" rx="15" ry="7" fill="#d7d3cb"/><rect x="292" y="86" width="28" height="6" fill="#5a6470"/><ellipse cx="306" cy="80" rx="11" ry="4" fill="#bfbab1"/>' +
      '<rect x="304.5" y="22" width="3" height="56" fill="#c9c6bf"/><ellipse cx="306" cy="50" rx="5" ry="2.4" fill="#bfbab1"/>' +
      '<circle class="wk-bl" cx="306" cy="20" r="2.6" fill="#ff3b3b"/><rect class="wk-bl wk-bl2" x="292" y="88" width="28" height="2" fill="#b38cff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#wk4)"/>' + stars(20) +
      '<g fill="#2a2f45"><rect x="0" y="140" width="40" height="60"/><rect x="44" y="118" width="26" height="82"/><rect x="74" y="132" width="30" height="68"/><rect x="340" y="124" width="30" height="76"/><rect x="372" y="144" width="28" height="56"/></g>' +
      tower +
      '<g class="wk-sw"><path d="M120 150l-30 -120h18z" fill="#fff6c2" opacity=".18"/></g><g class="wk-sw wk-sw2"><path d="M250 150l20 -120h18z" fill="#fff6c2" opacity=".18"/></g>' +
      '<path d="M80 200q0 -70 110 -76q110 6 110 76z" fill="#ecebe6"/>' +
      '<g class="wk-roof"><path d="M128 140q60 -26 122 0l-10 6q-52 -20 -102 0z" fill="#d8d6cf" stroke="#b5b2aa" stroke-width="1.5"/></g>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (96 + i * 23) + ' 200q' + (i < 4 ? 4 : i > 4 ? -4 : 0) + ' -40 ' + (i < 4 ? 14 : i > 4 ? -14 : 0) + ' -66" stroke="#cfcdc6" stroke-width="1.4" fill="none"/>').join("") +
      '<rect x="80" y="182" width="220" height="18" fill="#3b4250"/>' + Array.from({ length: 11 }, (_, i) => '<rect class="wk-bl' + (i % 2 ? " wk-bl2" : "") + '" x="' + (88 + i * 19) + '" y="187" width="10" height="7" fill="' + (i % 3 ? "#ffd56a" : RED) + '"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#22252e"/><path d="M0 218h400" stroke="#3a3f4c" stroke-width="2"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#f4f1ea">DOWNTOWN TORONTO · STADIUM NIGHT</text>',
      sky("wk4", "#0b0d22", "#5a1e2c"));
  }

  /* 5. Danforth Ave and Birchmount Rd, the Scarborough Bluffs behind */
  function wkcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#wk5)"/>' +
      '<rect x="0" y="96" width="400" height="40" fill="#3f6f9a"/>' +
      '<g class="wk-wv"><path d="M10 112h50M150 120h60M300 108h60" stroke="#9cc6e8" stroke-width="2" stroke-linecap="round" opacity=".7"/></g>' +
      '<g class="wk-wv wk-wv2"><path d="M80 128h40M230 124h50" stroke="#c9e2f5" stroke-width="2" stroke-linecap="round" opacity=".6"/></g>' +
      '<path d="M170 136l20 -58l26 -10l30 6l22 -14l30 8l28 -6l30 12l44 -4v66z" fill="#efe8d8"/>' +
      '<path d="M190 78l6 58M216 68l-4 68M246 74l8 62M268 60l-6 76M298 68l6 68M326 62l-2 74M356 74l4 62" stroke="#d6ccb4" stroke-width="2.5"/>' +
      '<path d="M190 78l26 -10l30 6l22 -14l30 8l28 -6l30 12l44 -4v-8l-44 4l-30 -12l-28 6l-30 -8l-22 14l-30 -6l-26 10z" fill="#3d6b3a"/>' +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("ABEL", 26, 192, 60, RED, -6) + tag("XO", 170, 206, 34, GOLD, -4) + tag("SCARBOROUGH", 34, 216, 16, "#ffffff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(250, 96, 140, "Danforth Av") + sign(264, 122, 112, "Birchmount Rd") +
      '<rect x="230" y="110" width="4" height="114" fill="#222"/><circle class="wk-flk" cx="232" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="wk-sp"><circle cx="150" cy="170" r="3" fill="' + RED + '" opacity=".7"/></g><g class="wk-sp wk-sp2"><circle cx="156" cy="164" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("wk5", "#2a2350", "#f0907a"));
  }

  window.SCENES = { wkstation: wkstation, wkballoons: wkballoons, wkqueen: wkqueen, wkdome: wkdome, wkcorner: wkcorner };
})();
