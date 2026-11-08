/* cunninlynguists scenes (Regions tab: More of the South; downtown Lexington, Kentucky). CSS classes and ids prefixed cl- (the page's own anim-train is kept).
   1 Lextran's Transit Center on East Vine St, downtown Lexington: a white Lextran bus (Route 8 Versailles Road, Deacon's Versailles line) pulling into the covered bays.
   2 Dirty Acres: a Bluegrass horse farm off Versailles Road in Woodford County (Deacon's home county), black plank fences, a black tobacco barn, a foal running the fence line.
   3 A Piece of Strange Studios, Lexington (where they recorded A Piece of Strange): Kno's sampler and mixing desk, VU meters bouncing, a record spinning.
   4 Rupp Arena downtown on a clear night under the stars (Stars Shine Brightest): the long tan arena, a shooting star crossing the sky.
   5 Main St and Limestone downtown: green signs, CUNNINLYNGUISTS tagged on the brick, the blue-glass Lexington Financial Center ("Big Blue") behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes clcloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.cl-cloud{animation:clcloud 32s linear infinite}.cl-cloud2{animation-delay:-16s}' +
    '@keyframes clrun{0%{transform:translateX(-80px)}100%{transform:translateX(470px)}}.cl-foal{animation:clrun 7s linear infinite}' +
    '@keyframes clleg{0%,100%{transform:rotate(20deg)}50%{transform:rotate(-20deg)}}.cl-leg{transform-box:fill-box;transform-origin:50% 0;animation:clleg .4s ease-in-out infinite}.cl-leg2{animation-delay:-.2s}' +
    '@keyframes clgraze{0%,100%{transform:rotate(0)}50%{transform:rotate(10deg)}}.cl-graze{transform-box:fill-box;transform-origin:100% 0%;animation:clgraze 3s ease-in-out infinite}' +
    '@keyframes clvu{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}80%{transform:scaleY(.85)}}.cl-vu{transform-box:fill-box;transform-origin:50% 100%;animation:clvu .9s ease-in-out infinite}.cl-vu2{animation-delay:-.3s}.cl-vu3{animation-delay:-.6s}.cl-vu4{animation-delay:-.45s}' +
    '@keyframes clspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.cl-spin{transform-box:fill-box;transform-origin:50% 50%;animation:clspin 1.8s linear infinite}' +
    '@keyframes clpad{0%,70%,100%{opacity:.25}75%,90%{opacity:1}}.cl-pad{animation:clpad 1.2s steps(1) infinite}.cl-pad2{animation-delay:-.3s}.cl-pad3{animation-delay:-.6s}.cl-pad4{animation-delay:-.9s}' +
    '@keyframes cltw{0%,100%{opacity:.25}50%{opacity:1}}.cl-star{animation:cltw 2.2s ease-in-out infinite}.cl-star2{animation-delay:-1.1s}.cl-star3{animation-delay:-.55s}' +
    '@keyframes clshoot{0%{transform:translate(0,0);opacity:0}8%{opacity:1}40%{transform:translate(240px,70px);opacity:0}100%{transform:translate(240px,70px);opacity:0}}.cl-shoot{animation:clshoot 4.5s ease-out infinite}' +
    '@keyframes clglow{0%,100%{opacity:.55}50%{opacity:1}}.cl-glow{animation:clglow 2.6s ease-in-out infinite}' +
    '@keyframes clspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cl-sp{animation:clspray 1.4s ease-out infinite}.cl-sp2{animation-delay:.45s}.cl-sp3{animation-delay:.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const bricks = (x, y, w, h, c, m) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let r = 0; r < h / 8; r++) { s += '<path d="M' + x + ' ' + (y + r * 8) + 'h' + w + '" stroke="' + m + '" stroke-width="1"/>'; for (let k = (r % 2) * 10; k < w; k += 20) s += '<path d="M' + (x + k) + ' ' + (y + r * 8) + 'v8" stroke="' + m + '" stroke-width="1"/>'; } return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 3 * s) + '" y="' + (y - 18 * s) + '" width="' + (6 * s) + '" height="' + (18 * s) + '" fill="#5a3a22"/><ellipse cx="' + x + '" cy="' + (y - 28 * s) + '" rx="' + (22 * s) + '" ry="' + (16 * s) + '" fill="' + (c || "#2f6a3a") + '"/><ellipse cx="' + (x - 10 * s) + '" cy="' + (y - 22 * s) + '" rx="' + (12 * s) + '" ry="' + (9 * s) + '" fill="#3c7c46"/>';
  const cloud = (cls, x, y, rx) => '<g class="cl-cloud ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + (rx / 4) + '" fill="#fff" opacity=".8"/></g>';
  const stars = (n, seed, ymax) => { let s = "", r = seed; for (let i = 0; i < n; i++) { r = (r * 9301 + 49297) % 233280; const x = (r / 233280) * 400; r = (r * 9301 + 49297) % 233280; const y = (r / 233280) * ymax; s += '<circle class="cl-star' + (i % 3 ? " cl-star" + (i % 3 + 1) : "") + '" cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + (i % 5 ? 1 : 1.8) + '" fill="#fff"/>'; } return s; };
  const LBLUE = "#0057a8", LGREEN = "#8dc63f", GOLD = "#e8b04a", BLUE = "#3f7fd0", GRASS = "#7fb069", R8 = "#275D38", R5 = "#b6bd00", R7 = "#e22882";
  const route = (x, y, n, c, dark) => '<rect x="' + x + '" y="' + y + '" width="22" height="18" rx="3" fill="' + c + '"/><text x="' + (x + 11) + '" y="' + (y + 13.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + n + '</text>';

  /* 1. Lextran Transit Center, E Vine St */
  function clstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (150 + i * 36) + '" y="136" width="28" height="24" rx="3" fill="#22303c"/>').join("");
    const bus = '<g class="anim-train"><rect x="124" y="126" width="266" height="72" rx="10" fill="#f4f6f8" stroke="#7d868f" stroke-width="2"/>' + win +
      '<path d="M124 168h266v8H124z" fill="' + LBLUE + '"/><path d="M124 176h266v4H124z" fill="' + LGREEN + '"/><path d="M300 126q40 0 80 20v8q-40 -18 -80 -18z" fill="' + LGREEN + '" opacity=".9"/>' +
      '<rect x="128" y="136" width="16" height="52" fill="#22303c"/>' +
      '<rect x="314" y="129" width="72" height="9" rx="2" fill="#111"/><text x="350" y="136.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb000">8 VERSAILLES RD</text>' +
      '<circle cx="384" cy="188" r="3" fill="#fff6c2"/>' +
      '<circle cx="176" cy="200" r="13" fill="#222"/><circle cx="176" cy="200" r="6" fill="#aab"/><circle cx="340" cy="200" r="13" fill="#222"/><circle cx="340" cy="200" r="6" fill="#aab"/></g>';
    const canopy = '<path d="M0 92h400v10H0z" fill="#d6d9dc"/><path d="M0 102h400v4H0z" fill="#9aa3ab"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (30 + i * 70) + '" y="106" width="6" height="108" fill="#8a949c"/>').join("");
    const building = '<rect x="0" y="34" width="400" height="58" fill="#b9a58a"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (14 + i * 40) + '" y="46" width="22" height="30" rx="2" fill="#6f8aa3" opacity=".85"/>').join("") + '<rect x="0" y="30" width="400" height="6" fill="#8d7a62"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cls1)"/>' + cloud("", 90, 16, 34) + building + canopy + bus +
      '<rect x="0" y="214" width="400" height="46" fill="#55565a"/><path d="M0 218h400" stroke="#e8d070" stroke-width="3"/>' +
      '<rect x="22" y="146" width="4" height="70" fill="#5b6168"/><rect x="2" y="118" width="108" height="56" rx="3" fill="' + LBLUE + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="56" y="131" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">LEXTRAN</text><text x="56" y="143" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">TRANSIT CENTER</text>' +
      route(8, 150, "8", R8) + route(34, 150, "5", R5, true) + route(60, 150, "7", R7) +
      '<text x="56" y="250" text-anchor="middle" ' + font + ' font-size="7" fill="#fff" opacity=".9">E VINE ST</text>' +
      '<text x="250" y="244" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".85">DOWNTOWN · LEXINGTON, KY</text>',
      sky("cls1", "#7fbfe8", "#d9eefa"));
  }

  /* 2. Dirty Acres: Woodford County horse farm off Versailles Rd */
  function clfarm() {
    const fence = (y) => '<g stroke="#15171a" stroke-width="3">' + '<path d="M0 ' + y + 'h400M0 ' + (y + 10) + 'h400M0 ' + (y + 20) + 'h400"/></g>' +
      Array.from({ length: 11 }, (_, i) => '<rect x="' + (i * 40 + 4) + '" y="' + (y - 6) + '" width="5" height="34" fill="#15171a"/>').join("");
    const barn = '<path d="M248 70l52 -34l52 34v56h-104z" fill="#1d1f22"/><path d="M248 70l52 -34l52 34" fill="none" stroke="#3a3d42" stroke-width="3"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (252 + i * 8.4) + '" y="74" width="3" height="50" fill="#2c2f33"/>').join("") +
      '<rect x="286" y="94" width="28" height="32" fill="#0e0f11"/><path d="M286 94l28 32M314 94l-28 32" stroke="#3a3d42" stroke-width="2"/><rect x="292" y="30" width="16" height="10" fill="#1d1f22"/>';
    const horse = (x, y, c, cls) => '<g class="' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="22" ry="10" fill="' + c + '"/>' +
      '<path d="M' + (x + 16) + ' ' + (y - 4) + 'l10 -16l8 2l-4 8l-8 12z" fill="' + c + '"/><path d="M' + (x + 26) + ' ' + (y - 20) + 'l9 3l-2 5l-9 -3z" fill="' + c + '"/>' +
      '<path d="M' + (x + 22) + ' ' + (y - 18) + 'q-6 6 -10 14" stroke="#1a1209" stroke-width="3" fill="none"/>' +
      '<path d="M' + (x - 22) + ' ' + (y - 2) + 'q-10 4 -8 14" stroke="#1a1209" stroke-width="3" fill="none"/>' +
      '<rect class="cl-leg" x="' + (x - 16) + '" y="' + (y + 6) + '" width="4" height="18" fill="' + c + '"/><rect class="cl-leg cl-leg2" x="' + (x - 8) + '" y="' + (y + 6) + '" width="4" height="18" fill="' + c + '"/>' +
      '<rect class="cl-leg cl-leg2" x="' + (x + 8) + '" y="' + (y + 6) + '" width="4" height="18" fill="' + c + '"/><rect class="cl-leg" x="' + (x + 15) + '" y="' + (y + 6) + '" width="4" height="18" fill="' + c + '"/></g>';
    const mare = '<g><ellipse cx="120" cy="150" rx="30" ry="13" fill="#6b3f22"/><g class="cl-graze"><path d="M96 144l-16 18l-6 10l8 2l8 -10l14 -14z" fill="#6b3f22"/></g>' +
      '<rect x="98" y="158" width="5" height="24" fill="#6b3f22"/><rect x="108" y="158" width="5" height="24" fill="#6b3f22"/><rect x="130" y="158" width="5" height="24" fill="#6b3f22"/><rect x="140" y="158" width="5" height="24" fill="#6b3f22"/>' +
      '<path d="M150 146q12 4 10 22" stroke="#2a1a0e" stroke-width="4" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cls2)"/>' + cloud("", 70, 22, 36) + cloud("cl-cloud2", 50, 40, 22) +
      '<path d="M0 118q80 -26 170 -8t230 -6v156H0z" fill="#6f9e52"/><path d="M0 140q120 -22 230 -4t170 -2v126H0z" fill="#86b35c"/>' +
      tree(40, 118, 0.8) + tree(200, 112, 0.7, "#2a5e33") + tree(380, 116, 0.9) + barn +
      mare + fence(186) + '<g class="cl-foal">' + horse(0, 214, "#3b2414") + '</g>' +
      '<path d="M0 232h400v28H0z" fill="#5c8a42"/>' +
      '<rect x="150" y="10" width="100" height="22" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="25" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">VERSAILLES RD</text>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">DIRTY ACRES · WOODFORD COUNTY, KY</text>',
      sky("cls2", "#8cc8f0", "#e4f3fb"));
  }

  /* 3. A Piece of Strange Studios, Lexington */
  function clstudio() {
    const vu = [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect class="cl-vu' + (i % 4 ? " cl-vu" + (i % 4 + 1) : "") + '" x="' + (232 + i * 18) + '" y="58" width="12" height="60" fill="' + (i % 2 ? GOLD : GRASS) + '"/>').join("");
    const pads = Array.from({ length: 16 }, (_, i) => '<rect class="cl-pad' + (i % 4 ? " cl-pad" + (i % 4 + 1) : "") + '" x="' + (40 + (i % 4) * 22) + '" y="' + (150 + Math.floor(i / 4) * 16) + '" width="18" height="12" rx="2" fill="' + (i % 3 ? "#ff8a3d" : "#ffd166") + '"/>').join("");
    const faders = Array.from({ length: 12 }, (_, i) => '<rect x="' + (214 + i * 14) + '" y="150" width="3" height="56" fill="#111"/><rect x="' + (209 + i * 14) + '" y="' + (160 + (i * 17) % 36) + '" width="13" height="8" rx="1" fill="#d8dde2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1a1420"/>' +
      '<rect x="0" y="0" width="400" height="128" fill="#2a2030"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40 + 2) + '" y="6" width="36" height="36" fill="#3a2c42"/><rect x="' + (i * 40 + 2) + '" y="46" width="36" height="36" fill="#33263b"/>').join("") +
      '<rect x="222" y="50" width="160" height="76" rx="4" fill="#0c0a10" stroke="#555" stroke-width="2"/>' + vu +
      '<text x="302" y="44" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">A PIECE OF STRANGE STUDIOS</text>' +
      '<rect x="0" y="132" width="400" height="128" fill="#3a2a1e"/><rect x="0" y="128" width="400" height="8" fill="#5a412c"/>' +
      '<rect x="28" y="140" width="112" height="84" rx="6" fill="#c9c4b8" stroke="#6e6a60" stroke-width="2"/>' + pads +
      '<rect x="40" y="214" width="88" height="6" rx="2" fill="#6e6a60"/>' +
      '<rect x="200" y="142" width="184" height="72" rx="5" fill="#2b2b30" stroke="#666" stroke-width="2"/>' + faders +
      '<g><circle cx="168" cy="96" r="30" fill="#111"/><g class="cl-spin"><circle cx="168" cy="96" r="30" fill="#111"/><circle cx="168" cy="96" r="22" fill="none" stroke="#2a2a2a" stroke-width="1"/><circle cx="168" cy="96" r="15" fill="none" stroke="#2a2a2a" stroke-width="1"/><circle cx="168" cy="96" r="9" fill="' + GOLD + '"/><path d="M168 87v6" stroke="#111" stroke-width="2"/></g><circle cx="168" cy="96" r="2" fill="#111"/></g>' +
      '<rect x="128" y="62" width="80" height="70" rx="4" fill="none" stroke="#555" stroke-width="2" opacity=".6"/>' +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".85">LEXINGTON, KY</text>');
  }

  /* 4. Rupp Arena under the stars */
  function clrupp() {
    const arena = '<rect x="50" y="128" width="300" height="74" fill="#b8a07c"/><rect x="44" y="120" width="312" height="10" rx="2" fill="#8f7a5c"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (58 + i * 21) + '" y="136" width="12" height="40" fill="#8d7656"/>').join("") +
      '<rect x="150" y="176" width="100" height="26" fill="#3c4a5a"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (154 + i * 19) + '" y="180" width="16" height="22" fill="#f2e3b0" opacity=".75"/>').join("") +
      '<rect x="120" y="104" width="160" height="18" rx="2" fill="#0c1a33"/><text class="cl-glow" x="200" y="117.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">RUPP ARENA</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#cls4)"/>' + stars(70, 7, 110) +
      '<g class="cl-shoot"><path d="M20 20l-30 -9" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".9"/><circle cx="20" cy="20" r="2.4" fill="#fff"/></g>' +
      '<circle cx="340" cy="40" r="14" fill="#f4f1de"/><circle cx="346" cy="36" r="12" fill="#0b1630"/>' +
      '<path d="M0 150h46v52H0zM354 140h46v62h-46z" fill="#152238"/>' + arena +
      '<rect x="0" y="202" width="400" height="58" fill="#2b2f36"/><path d="M0 222h400" stroke="#fff" stroke-width="2" stroke-dasharray="14 12" opacity=".4"/>' +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".85">STARS SHINE BRIGHTEST · LEXINGTON, KY</text>',
      sky("cls4", "#050a1c", "#24345e"));
  }

  /* 5. Main St & Limestone, Big Blue behind */
  function clcorner() {
    const bigblue = '<g><rect x="250" y="34" width="56" height="98" fill="#1f5f9e"/><rect x="258" y="20" width="40" height="16" fill="#2a6db0"/><path d="M262 20q16 -20 32 0z" fill="#3a82c6"/><rect x="276" y="2" width="4" height="10" fill="#3a82c6"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M250 ' + (42 + i * 9) + 'h56" stroke="#7fb6e8" stroke-width="1" opacity=".6"/>').join("") +
      '<path d="M278 34v98" stroke="#7fb6e8" stroke-width="1" opacity=".6"/></g>';
    const others = '<g fill="#6b7a90"><rect x="210" y="70" width="34" height="62"/><rect x="312" y="56" width="30" height="76"/><rect x="346" y="78" width="26" height="54"/><rect x="376" y="64" width="24" height="68"/><rect x="186" y="92" width="22" height="40"/></g>' +
      '<g fill="#f2e3b0" opacity=".6">' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (316 + (i % 3) * 8) + '" y="' + (64 + Math.floor(i / 3) * 16) + '" width="4" height="6"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cls5)"/>' + cloud("", 110, 24, 30) +
      others + bigblue + '<rect x="0" y="130" width="400" height="6" fill="#7a7f86"/>' +
      bricks(0, 136, 262, 92, "#8a4a36", "#6c3828") +
      tag("CUNNIN", 14, 184, 40, GOLD, -5) + tag("LYNGUISTS", 30, 210, 30, BLUE, -4) + tag("KYNFOLK", 160, 224, 13, GRASS, -3) +
      '<g class="cl-sp"><circle cx="238" cy="176" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="cl-sp cl-sp2"><circle cx="244" cy="170" r="2" fill="' + BLUE + '" opacity=".7"/></g><g class="cl-sp cl-sp3"><circle cx="234" cy="168" r="2" fill="' + GRASS + '" opacity=".7"/></g>' +
      '<rect x="276" y="104" width="5" height="124" fill="#5b6168"/>' + sign(286, 112, 108, "MAIN ST") + sign(286, 138, 108, "LIMESTONE") +
      '<rect x="0" y="228" width="400" height="32" fill="#55565a"/><path d="M0 244h400" stroke="#fff" stroke-width="2" stroke-dasharray="14 12" opacity=".5"/>' +
      '<text x="340" y="220" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">LEXINGTON, KY</text>',
      sky("cls5", "#f6a46a", "#ffe3b8"));
  }

  window.SCENES = { clstation, clfarm, clstudio, clrupp, clcorner };
})();
