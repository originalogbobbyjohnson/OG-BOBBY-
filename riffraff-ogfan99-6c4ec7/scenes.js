/* riffraff scenes (Regions tab: Houston + Texas; Copperfield, northwest Houston). CSS classes and ids prefixed rrf- (the page's own anim-train is kept).
   1 METRO's 217 Cypress commuter bus pulling into the Cypress Park & Ride on Hwy 290, the closest METRO stop to Copperfield.
   2 Langham Creek High School gym, where he played shooting guard: wood court, scoreboard blinking, the ball swishing.
   3 Katy Mills Mall ("Katy Mills Mall, watch that boy ball"): the long outlet-mall front, the entrance arch, cars rolling past.
   4 The neon pool ("fist full of jewels looks like a swimming pool / glow in the dark shark"): night pool, neon sign, the shark fin gliding.
   5 Hwy 6 and FM 52-nine in Copperfield: green signs, RIFF RAFF tagged on the wall, the Energy Corridor's glass towers far off.
   No logos, no faces, every 9 drawn by hand with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rrfblink{0%,100%{opacity:.25}50%{opacity:1}}.rrf-bl{animation:rrfblink 1.4s ease-in-out infinite}.rrf-bl2{animation-delay:-.7s}' +
    '@keyframes rrfneon{0%,100%{opacity:1}46%{opacity:1}50%{opacity:.3}54%{opacity:1}}.rrf-neon{animation:rrfneon 2.4s linear infinite}.rrf-neon2{animation-delay:-1.1s}' +
    '@keyframes rrfball{0%{transform:translate(0,0)}45%{transform:translate(50px,-84px)}70%{transform:translate(93px,-42px)}100%{transform:translate(93px,-6px)}}.rrf-ball{animation:rrfball 2.2s ease-in infinite}' +
    '@keyframes rrfnet{0%,62%,100%{transform:scaleY(1)}72%{transform:scaleY(1.25)}}.rrf-net{animation:rrfnet 2.2s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 0}' +
    '@keyframes rrfcar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.rrf-car{animation:rrfcar 7s linear infinite}.rrf-car2{animation-duration:9s;animation-delay:-4s}' +
    '@keyframes rrffin{0%{transform:translateX(0)}50%{transform:translateX(150px)}50.01%{transform:translateX(150px) scaleX(-1)}100%{transform:translateX(0) scaleX(-1)}}.rrf-fin{animation:rrffin 7s linear infinite;transform-box:fill-box;transform-origin:50% 50%}' +
    '@keyframes rrfripple{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.rrf-rip{animation:rrfripple 2.4s ease-out infinite;transform-box:fill-box;transform-origin:center}.rrf-rip2{animation-delay:-1.2s}' +
    '@keyframes rrfspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rrf-sp{animation:rrfspray 1.4s ease-out infinite}.rrf-sp2{animation-delay:.45s}' +
    '@keyframes rrfsweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.rrf-sweep{animation:rrfsweep 4s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "rrf-bl" + (i % 2 ? " rrf-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const nine = (x, y, sz, c) => { const r = sz * 0.2, w = sz * 0.13; return '<circle cx="' + (x + r + w / 2 + sz * 0.04) + '" cy="' + (y - sz * 0.72 + r) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + w + '"/><path d="M' + (x + 2 * r + w / 2 + sz * 0.04) + ' ' + (y - sz * 0.72 + r) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w + '"/>'; };
  const PINK = "#ff4fd8", AQUA = "#39e6ff", GOLD = "#ffd23f", METRO = "#1f5fa8", RED = "#e5484d";
  const car = (x, y, c, cls) => '<g class="rrf-car ' + (cls || "") + '"><path d="M' + x + ' ' + (y + 14) + 'q2 -12 18 -14l10 -8h30l14 8q16 2 16 14z" fill="' + c + '"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="7" fill="#9fd3f0"/><rect x="' + (x + 46) + '" y="' + (y - 6) + '" width="12" height="7" fill="#9fd3f0"/>' +
    '<circle cx="' + (x + 20) + '" cy="' + (y + 15) + '" r="6" fill="#111"/><circle cx="' + (x + 20) + '" cy="' + (y + 15) + '" r="2.5" fill="#ccc"/><circle cx="' + (x + 72) + '" cy="' + (y + 15) + '" r="6" fill="#111"/><circle cx="' + (x + 72) + '" cy="' + (y + 15) + '" r="2.5" fill="#ccc"/></g>';

  /* 1. METRO 217 Cypress at the Cypress Park & Ride */
  function rrfstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (66 + i * 40) + '" y="118" width="32" height="24" rx="3" fill="#1c2630"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="104" width="320" height="80" rx="10" fill="#f2f4f6" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="40" y="152" width="320" height="10" fill="' + METRO + '"/><rect x="40" y="164" width="320" height="4" fill="' + RED + '"/>' +
      '<rect x="44" y="114" width="18" height="50" rx="3" fill="#24303a"/>' +
      '<rect x="292" y="107" width="64" height="9" rx="2" fill="#111"/><text x="324" y="114.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">217 CYPRESS</text>' +
      '<circle cx="100" cy="186" r="13" fill="#222"/><circle cx="100" cy="186" r="5" fill="#999"/><circle cx="310" cy="186" r="13" fill="#222"/><circle cx="310" cy="186" r="5" fill="#999"/>' +
      '<circle cx="353" cy="172" r="3.5" fill="#fff6c2"/></g>';
    const canopy = '<rect x="0" y="40" width="400" height="12" fill="#c9ced6"/><rect x="0" y="52" width="400" height="4" fill="' + METRO + '"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="56" width="6" height="140" fill="#9aa3ad"/>').join("") +
      [60, 160, 260].map((x, i) => '<rect class="rrf-bl' + (i % 2 ? " rrf-bl2" : "") + '" x="' + x + '" y="56" width="30" height="4" fill="#fff6c2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rrfs1)"/>' + stars(10) +
      '<path d="M0 96h400v12H0z" fill="#5b6470"/><path d="M0 100h400" stroke="#9aa3ad" stroke-width="1" stroke-dasharray="20 14"/>' + canopy +
      '<rect x="0" y="130" width="400" height="66" fill="#2c2e34"/><path d="M0 178h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#a8a196"/><path d="M0 200h400" stroke="#d8d2c6" stroke-width="3"/>' +
      '<rect x="14" y="208" width="350" height="42" rx="3" fill="#111"/><circle cx="40" cy="229" r="15" fill="' + METRO + '"/><text x="40" y="234" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">217</text>' +
      '<text x="64" y="226" ' + font + ' font-size="15" fill="#fff">CYPRESS PARK &amp; RIDE</text><text x="64" y="242" ' + font + ' font-size="10" fill="' + AQUA + '">NORTHWEST FREEWAY · NEXT STOP COPPERFIELD</text>',
      sky("rrfs1", "#1a1040", "#e0789a"));
  }

  /* 2. Langham Creek High gym: he played shooting guard */
  function rrfgym() {
    const boards = Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (176 + i * 9) + 'h400" stroke="#b9853f" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#2a2433"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#3b3550"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (i * 80) + ' 0v150" stroke="#2f2a42" stroke-width="3"/>').join("") +
      Array.from({ length: 5 }, (_, i) => '<rect class="rrf-bl' + (i % 2 ? " rrf-bl2" : "") + '" x="' + (30 + i * 80) + '" y="6" width="40" height="6" rx="3" fill="#fff6c2"/>').join("") +
      '<rect x="120" y="26" width="160" height="54" rx="4" fill="#111" stroke="#555" stroke-width="2"/>' +
      '<text x="160" y="44" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">HOME</text><text x="240" y="44" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">GUEST</text>' +
      '<text class="rrf-neon" x="160" y="70" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="22" fill="' + RED + '">72</text><text x="240" y="70" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="22" fill="' + RED + '">68</text>' +
      '<text x="200" y="62" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="11" fill="' + GOLD + '">4TH</text>' +
      '<rect x="16" y="96" width="250" height="22" rx="2" fill="#7a1f2a"/><text x="141" y="112" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" letter-spacing="2">LANGHAM CREEK HIGH</text>' +
      '<rect x="0" y="150" width="400" height="110" fill="#d9a35a"/>' + boards +
      '<path d="M60 260q140 -70 280 0" fill="none" stroke="#fff" stroke-width="3"/><path d="M0 170h400" stroke="#fff" stroke-width="3"/>' +
      '<rect x="318" y="40" width="6" height="160" fill="#666"/><rect x="290" y="70" width="70" height="44" fill="#f3f6f8" stroke="#888" stroke-width="2"/><rect x="314" y="86" width="22" height="16" fill="none" stroke="' + RED + '" stroke-width="2"/>' +
      '<ellipse cx="325" cy="118" rx="14" ry="3" fill="none" stroke="' + RED + '" stroke-width="3"/>' +
      '<path class="rrf-net" d="M311 118l5 18h18l5 -18M318 118l3 18M332 118l-3 18" stroke="#fff" stroke-width="1.5" fill="none"/>' +
      '<g class="rrf-ball"><circle cx="232" cy="160" r="9" fill="#e8752a" stroke="#6a2e0a" stroke-width="1.5"/><path d="M223 160h18M232 151v18" stroke="#6a2e0a" stroke-width="1.2"/></g>' +
      '<rect x="20" y="214" width="150" height="30" rx="3" fill="#111"/><text x="95" y="234" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">SHOOTING GUARD</text>',
      "");
  }

  /* 3. Katy Mills Mall */
  function rrfmall() {
    const stores = Array.from({ length: 8 }, (_, i) => { const x = 10 + i * 48; const c = [AQUA, PINK, GOLD, "#8fe38a"][i % 4];
      return '<rect x="' + x + '" y="112" width="42" height="56" fill="#efe6d6" stroke="#c8bba2"/><rect x="' + (x + 4) + '" y="128" width="34" height="40" fill="#2a3a4a"/><rect x="' + (x + 4) + '" y="116" width="34" height="8" fill="' + c + '"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rrfs3)"/>' +
      '<circle cx="64" cy="44" r="20" fill="#fff3c4"/>' +
      '<rect x="0" y="100" width="400" height="70" fill="#e4d8c2"/><rect x="0" y="96" width="400" height="8" fill="#b23a3a"/>' + stores +
      '<path d="M140 168V82q60 -46 120 0v86z" fill="#e4d8c2" stroke="#b23a3a" stroke-width="4"/><path d="M160 168V96q40 -30 80 0v72z" fill="#2a3a4a"/>' +
      '<rect x="150" y="62" width="100" height="20" rx="3" fill="#b23a3a"/><text x="200" y="76" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" letter-spacing="2">KATY MILLS</text>' +
      '<path d="M168 168l10 -50M200 168v-56M232 168l-10 -50" stroke="#5a6a7a" stroke-width="1.5"/>' +
      '<rect x="0" y="168" width="400" height="92" fill="#3a3c42"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (20 + i * 50) + ' 236v24" stroke="#fff" stroke-width="2"/>').join("") +
      car(0, 196, PINK, "") + car(0, 216, AQUA, "rrf-car2") +
      '<rect x="236" y="20" width="156" height="30" rx="3" fill="#111"/><text x="314" y="40" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">WATCH THAT BOY BALL</text>',
      sky("rrfs3", "#7ec4f0", "#f8e1b0"));
  }

  /* 4. The neon pool: glow in the dark shark */
  function rrfpool() {
    return svg(
      '<rect width="400" height="260" fill="url(#rrfs4)"/>' + stars(18) +
      '<rect x="40" y="40" width="320" height="80" fill="#1a1230"/><rect x="40" y="40" width="320" height="6" fill="#2c2050"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (60 + i * 62) + '" y="60" width="40" height="44" fill="' + (i % 2 ? "#3a2a6a" : "#ffd98a") + '" opacity=".8"/>').join("") +
      '<rect x="120" y="10" width="160" height="40" rx="8" fill="#0d0a1a" stroke="' + PINK + '" stroke-width="2"/>' +
      '<text class="rrf-neon" x="200" y="38" text-anchor="middle" font-family="Brush Script MT, cursive" font-style="italic" font-weight="700" font-size="26" fill="' + PINK + '" stroke="#ffd0f4" stroke-width=".7">Neon Icon</text>' +
      '<rect x="0" y="120" width="400" height="22" fill="#d8d0c0"/>' +
      '<rect x="20" y="142" width="360" height="100" rx="14" fill="#0aa6c8" stroke="#e8e0d0" stroke-width="6"/>' +
      '<rect x="30" y="150" width="340" height="84" rx="10" fill="url(#rrfs4b)"/>' +
      '<circle class="rrf-rip" cx="120" cy="190" r="14" fill="none" stroke="#bff6ff" stroke-width="1.5"/><circle class="rrf-rip rrf-rip2" cx="270" cy="206" r="14" fill="none" stroke="#bff6ff" stroke-width="1.5"/>' +
      '<g class="rrf-fin"><path d="M100 196l14 -26l10 26z" fill="#7dffb2" stroke="#e6fff0" stroke-width="1"/><path d="M90 198h44" stroke="#7dffb2" stroke-width="2" opacity=".6"/></g>' +
      Array.from({ length: 6 }, (_, i) => '<path class="rrf-bl' + (i % 2 ? " rrf-bl2" : "") + '" d="M' + (300 + (i % 3) * 18) + ' ' + (170 + Math.floor(i / 3) * 20) + 'l4 -6l4 6l-4 6z" fill="#fff"/>').join("") +
      '<rect x="20" y="244" width="200" height="14" rx="2" fill="#111"/><text x="120" y="254.5" text-anchor="middle" ' + font + ' font-size="8.5" fill="' + AQUA + '">GLOW IN THE DARK SHARK</text>',
      sky("rrfs4", "#0b0620", "#3a1450") + '<linearGradient id="rrfs4b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3ff0ff"/><stop offset="1" stop-color="#0a5fa8"/></linearGradient>');
  }

  /* 5. Hwy 6 and FM 529 in Copperfield */
  function rrfcorner() {
    const tower = (x, w, h, c) => '<rect x="' + x + '" y="' + (128 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
      Array.from({ length: Math.floor(h / 10) }, (_, r) => '<path d="M' + x + ' ' + (128 - h + 6 + r * 10) + 'h' + w + '" stroke="#bfe8ff" stroke-width="1" opacity=".5"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rrfs5)"/>' + stars(14) +
      tower(250, 26, 70, "#2f6f8f") + tower(280, 20, 52, "#3a7ea0") + tower(304, 30, 84, "#2a6585") + tower(338, 22, 60, "#367a9a") + tower(364, 26, 44, "#2f6f8f") +
      '<rect class="rrf-bl" x="317" y="40" width="4" height="4" fill="#ff4d4d"/>' +
      '<rect x="0" y="128" width="400" height="132" fill="#2b2d33"/>' +
      '<rect x="20" y="104" width="240" height="116" fill="#cfc6b6"/><rect x="20" y="100" width="240" height="6" fill="#a89e8c"/>' +
      Array.from({ length: 11 }, (_, r) => '<path d="M20 ' + (116 + r * 10) + 'h240" stroke="#b8ae9c" stroke-width="1"/>').join("") +
      tag("RIFF RAFF", 34, 160, 38, PINK, -6) + tag("JODY HIGHROLLER", 40, 196, 20, AQUA, -4) + tag("NEON", 176, 212, 16, GOLD, -3) +
      '<circle class="rrf-sp" cx="236" cy="184" r="3" fill="' + PINK + '"/><circle class="rrf-sp rrf-sp2" cx="242" cy="190" r="2" fill="' + PINK + '"/>' +
      '<rect x="318" y="118" width="6" height="118" fill="#8a9096"/>' + sign(276, 114, 90, "HWY 6") + '<rect x="282" y="140" width="84" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="318" y="156" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">FM 52</text>' + nine(337, 156, 13, "#fff") +
      '<rect x="0" y="220" width="400" height="40" fill="#3a3c42"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>',
      sky("rrfs5", "#120a2a", "#7a2a6a"));
  }

  window.SCENES = { rrfstation, rrfgym, rrfmall, rrfpool, rrfcorner };
})();
