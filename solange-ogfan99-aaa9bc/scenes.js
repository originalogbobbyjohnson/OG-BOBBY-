/* solange scenes (Regions tab: Houston + Texas; Third Ward, Houston). CSS classes prefixed skn- (the page's own anim-train is kept).
   1 Museum District on the METRORail Red Line (split platforms on Fannin St and San Jacinto St by Binz St): the white light-rail car gliding in, live oaks and the museum lawns behind.
   2 SHAPE Community Center on Almeda Rd in Third Ward, where she premiered When I Get Home in March 2019: low building at dusk, the film projected big outside, the crowd watching from behind, the projector beam flickering.
   3 The trail riders of When I Get Home (the Black cowboys of the film): riders on horseback at golden hour crossing an open Texas field, white hats, dust kicking up.
   4 "Way to the Show": a candy-paint slab on the freeway at night, swangas poking out, the trunk popped with neon, the lights streaking.
   5 Almeda Rd and Binz St (both are song titles on When I Get Home): green signs, SOLANGE tagged on the wall, the downtown towers lit up behind. No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sknblink{0%,100%{opacity:.3}50%{opacity:1}}.skn-bl{animation:sknblink 1.6s ease-in-out infinite}.skn-bl2{animation-delay:-.8s}' +
    '@keyframes sknflick{0%,100%{opacity:.55}30%{opacity:.35}60%{opacity:.7}}.skn-fl{animation:sknflick .9s steps(3) infinite}' +
    '@keyframes sknscreen{0%,100%{fill:#f2a65a}33%{fill:#9ed8c8}66%{fill:#e07a5f}}.skn-scr{animation:sknscreen 6s ease-in-out infinite}' +
    '@keyframes sknride{from{transform:translateX(-160px)}to{transform:translateX(560px)}}.skn-ride{animation:sknride 9s linear infinite}' +
    '@keyframes sknbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.skn-bob{animation:sknbob .45s ease-in-out infinite}.skn-bob2{animation-delay:-.22s}' +
    '@keyframes skndust{0%{transform:translate(0,0);opacity:.7}100%{transform:translate(-20px,-8px);opacity:0}}.skn-dust{animation:skndust 1s ease-out infinite}.skn-d2{animation-delay:-.5s}' +
    '@keyframes sknstreak{from{transform:translateX(420px)}to{transform:translateX(-220px)}}.skn-streak{animation:sknstreak 1.6s linear infinite}.skn-k2{animation-delay:-.8s}' +
    '@keyframes sknspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.skn-spin{animation:sknspin .5s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes sknspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.skn-sp{animation:sknspray 1.4s ease-out infinite}.skn-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const label = (x, y, w, txt, color) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="3" fill="#111" opacity=".85"/><text x="' + (x + w / 2) + '" y="' + (y + 15) + '" text-anchor="middle" ' + font + ' font-size="10" fill="' + color + '">' + txt + '</text>';
  const oak = (x, base, s) => '<g><rect x="' + (x - 3 * s) + '" y="' + (base - 26 * s) + '" width="' + (6 * s) + '" height="' + (26 * s) + '" fill="#4a3526"/>' +
    '<ellipse cx="' + x + '" cy="' + (base - 34 * s) + '" rx="' + (30 * s) + '" ry="' + (16 * s) + '" fill="#2f5a34"/><ellipse cx="' + (x - 14 * s) + '" cy="' + (base - 40 * s) + '" rx="' + (16 * s) + '" ry="' + (11 * s) + '" fill="#3a6b3e"/><ellipse cx="' + (x + 14 * s) + '" cy="' + (base - 42 * s) + '" rx="' + (15 * s) + '" ry="' + (10 * s) + '" fill="#356340"/></g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "skn-bl" + (i % 2 ? " skn-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const GOLD = "#f5b942", CORAL = "#e07a5f", MINT = "#9ed8c8", RED = "#d3242c";
  const viewer = (x, base, col) => '<g><circle cx="' + x + '" cy="' + (base - 30) + '" r="7" fill="#1e1416"/><path d="M' + (x - 11) + ' ' + base + 'q0 -24 11 -24q11 0 11 24z" fill="' + col + '"/></g>';

  /* downtown Houston skyline (generic towers) */
  const skyline = (base, lit) => {
    const w = (x, y, ww) => { let s = ""; for (let r = y + 6; r < base - 4; r += 9) for (let c = x + 3; c < x + ww - 3; c += 6) s += '<rect x="' + c + '" y="' + r + '" width="3" height="4" fill="' + (((r * 7 + c * 3) % 5) ? "#2c3550" : lit) + '"/>'; return s; };
    return '<g>' +
      '<rect x="18" y="' + (base - 58) + '" width="30" height="58" fill="#1d2338"/>' + w(18, base - 58, 30) +
      '<rect x="58" y="' + (base - 120) + '" width="28" height="120" fill="#1b2a3a"/>' + w(58, base - 120, 28) +
      '<path d="M96 ' + base + 'v-96l14 -14l14 14v96z" fill="#22293f"/>' + w(96, base - 96, 28) +
      '<path d="M134 ' + base + 'v-136q16 -10 32 0v136z" fill="#20364a"/>' + w(134, base - 130, 32) +
      '<rect x="178" y="' + (base - 80) + '" width="30" height="80" fill="#262b40"/>' + w(178, base - 80, 30) +
      '<path d="M218 ' + base + 'v-106h26v106z" fill="#1d2338"/>' + w(218, base - 106, 26) +
      '<rect x="256" y="' + (base - 62) + '" width="40" height="62" fill="#232a3e"/>' + w(256, base - 62, 40) +
      '<path d="M306 ' + base + 'v-74l12 -12l12 12v74z" fill="#1f2539"/>' + w(306, base - 74, 24) +
      '<rect x="342" y="' + (base - 44) + '" width="44" height="44" fill="#20283c"/>' + w(342, base - 44, 44) +
      '<circle class="skn-bl" cx="150" cy="' + (base - 142) + '" r="2" fill="#ff4d4d"/></g>';
  };

  /* 1. Museum District, METRORail Red Line */
  function sknstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="126" width="36" height="24" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><path d="M24 186V124q0 -12 14 -12h300q24 0 30 30v44z" fill="#e9ecef" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="24" y="158" width="344" height="7" fill="' + RED + '"/><rect x="24" y="167" width="344" height="3" fill="#1f3c88"/>' +
      '<path d="M340 116q22 4 26 30h-26z" fill="#1c2630"/><circle cx="356" cy="178" r="3.5" fill="#fff6c2"/>' +
      '<rect x="200" y="102" width="70" height="10" fill="#8a939b"/><path d="M210 102l25 -26l25 26" stroke="#555" stroke-width="2" fill="none"/>' +
      '<rect x="40" y="114" width="96" height="10" rx="2" fill="#111"/><text x="88" y="122" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">RED · NORTHLINE</text></g>';
    const museum = '<rect x="0" y="112" width="400" height="78" fill="#7fae62"/>' +
      '<rect x="230" y="78" width="150" height="70" fill="#e8e0cc"/><path d="M222 78h166l-83 -26z" fill="#d6ccb4"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (240 + i * 24) + '" y="84" width="8" height="60" fill="#f6f1e4"/>').join("") +
      oak(30, 118, 1) + oak(110, 116, 0.9) + oak(190, 120, 1);
    return svg(
      '<rect width="400" height="260" fill="url(#skns1)"/>' + museum +
      '<path d="M0 70h400" stroke="#333" stroke-width="1.5"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="66" width="6" height="124" fill="#7a8088"/>').join("") +
      '<path d="M0 56h130v12h-130z" fill="#c9cdd2"/><rect x="0" y="66" width="130" height="3" fill="' + RED + '"/><path d="M270 56h130v12h-130z" fill="#c9cdd2"/><rect x="270" y="66" width="130" height="3" fill="' + RED + '"/>' +
      train +
      '<rect x="0" y="190" width="400" height="8" fill="#f2c200"/><rect x="0" y="198" width="400" height="62" fill="#b3ada2"/><path d="M0 228h400" stroke="#9a948a" stroke-width="2"/>' +
      '<rect x="18" y="204" width="364" height="40" rx="3" fill="#111"/><text x="30" y="229" ' + font + ' font-size="16" fill="#fff">Museum District</text>' + badge(326, 224, "RED", RED),
      sky("skns1", "#8fc3ea", "#f4dcb0"));
  }

  /* 2. SHAPE Community Center on Almeda: the film on the big screen outside, the crowd from behind */
  function sknshape() {
    const crowd = Array.from({ length: 10 }, (_, i) => viewer(24 + i * 40, 262 - (i % 2) * 6, i % 3 ? "#3a2a30" : "#4a2e38")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#skns2)"/>' + stars(10) + oak(16, 170, 1.2) + oak(388, 170, 1.2) +
      '<rect x="40" y="120" width="320" height="70" fill="#6a3e2e"/><rect x="40" y="120" width="320" height="8" fill="#3a2418"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (56 + i * 50) + '" y="140" width="30" height="20" fill="#ffd98a" opacity=".85"/>').join("") +
      '<path d="M40 176h320" stroke="' + GOLD + '" stroke-width="4"/><path d="M40 182h320" stroke="' + CORAL + '" stroke-width="3"/><path d="M40 187h320" stroke="' + MINT + '" stroke-width="3"/>' +
      '<rect x="190" y="30" width="180" height="88" fill="#111" stroke="#ddd" stroke-width="3"/><rect class="skn-scr" x="196" y="36" width="168" height="76" fill="#f2a65a"/>' +
      '<path d="M220 104q10 -30 24 -30q8 -16 16 0l6 30z" fill="#3a2a30" opacity=".75"/><ellipse cx="316" cy="96" rx="34" ry="10" fill="#7a5a3a" opacity=".6"/><path d="M306 88q4 -18 12 -18" stroke="#3a2a30" stroke-width="4" fill="none" opacity=".7"/>' +
      '<path class="skn-fl" d="M240 252l-40 -138h160z" fill="#fff6c2" opacity=".55"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#2c2226"/>' + crowd +
      label(8, 4, 172, "SHAPE CENTER · ALMEDA RD", GOLD),
      sky("skns2", "#141a3a", "#7a3a4e"));
  }

  /* 3. The trail riders: Black cowboys on horseback at golden hour */
  function sknriders() {
    const horse = (x, coat, shirt, cls) => '<g class="' + cls + '">' +
      '<path d="M' + x + ' 196q0 -18 18 -20h40q12 -16 22 -12l6 6l-6 6q-6 -2 -10 6q0 12 -8 14h-44q-14 0 -18 0z" fill="' + coat + '"/>' +
      '<path d="M' + (x + 4) + ' 196l-4 26M' + (x + 16) + ' 198l2 24M' + (x + 52) + ' 198l-2 24M' + (x + 62) + ' 196l6 26" stroke="' + coat + '" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M' + x + ' 182q-12 2 -14 16" stroke="#2a1a10" stroke-width="4" fill="none"/>' +
      '<path d="M' + (x + 24) + ' 180l2 -26h16l4 26z" fill="' + shirt + '"/><circle cx="' + (x + 34) + '" cy="' + 146 + '" r="6" fill="#3a2418"/>' +
      '<ellipse cx="' + (x + 34) + '" cy="142" rx="12" ry="3" fill="#f7f3ea"/><path d="M' + (x + 27) + ' 142q0 -10 7 -10t7 10z" fill="#f7f3ea"/>' +
      '<circle class="skn-dust" cx="' + (x - 6) + '" cy="220" r="6" fill="#d9b88a"/><circle class="skn-dust skn-d2" cx="' + (x - 2) + '" cy="222" r="5" fill="#d9b88a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#skns3)"/><circle cx="300" cy="120" r="34" fill="#ffd98a" opacity=".9"/>' +
      '<path d="M0 150q100 -16 200 -4t200 -6v120h-400z" fill="#c9a25a"/><path d="M0 178q120 -10 220 0t180 -4v86h-400z" fill="#b08a48"/>' +
      '<path d="M30 160v-10M60 158v-12M90 160v-8" stroke="#6a5030" stroke-width="2"/><path d="M20 152h80" stroke="#6a5030" stroke-width="2"/>' +
      '<g class="skn-ride">' + horse(0, "#5a3a24", CORAL, "skn-bob") + horse(110, "#2a1e18", MINT, "skn-bob skn-bob2") + horse(220, "#8a5a34", GOLD, "skn-bob") + '</g>' +
      label(8, 8, 170, "WHEN I GET HOME · RIDERS", GOLD),
      sky("skns3", "#e9894e", "#f7d79a"));
  }

  /* 4. Way to the Show: a candy-paint slab on the freeway at night */
  function sknslab() {
    const wheel = (cx) => '<g><circle cx="' + cx + '" cy="206" r="15" fill="#111"/><g class="skn-spin"><circle cx="' + cx + '" cy="206" r="9" fill="#d8dde2"/><path d="M' + (cx - 9) + ' 206h18M' + cx + ' 197v18" stroke="#8a9096" stroke-width="2"/></g></g>';
    const swanga = (cx) => '<path d="M' + cx + ' 206l18 6l0 -12z" fill="#e6eaee" stroke="#8a9096" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#skns4)"/>' + stars(16) + skyline(150, GOLD) +
      '<rect x="0" y="150" width="400" height="110" fill="#26282e"/><rect x="0" y="150" width="400" height="6" fill="#8a9096"/>' +
      '<g class="skn-streak"><rect x="0" y="236" width="80" height="3" fill="#ffd98a" opacity=".7"/></g><g class="skn-streak skn-k2"><rect x="60" y="244" width="120" height="3" fill="' + CORAL + '" opacity=".7"/></g>' +
      '<path d="M60 206v-22q0 -10 12 -12l40 -6l24 -22h96l30 22l50 6q16 2 16 14v20z" fill="#7a2c8e"/><path d="M146 166l20 -18h56l22 18z" fill="#2a3a5a"/>' +
      '<path d="M66 184h256" stroke="#c78be0" stroke-width="3" opacity=".8"/><path d="M296 168l34 -26h8l-8 26z" fill="#5a1e6e"/>' +
      '<text class="skn-bl" x="318" y="160" text-anchor="middle" ' + font + ' font-size="7" fill="' + MINT + '">H-TOWN</text>' +
      wheel(110) + wheel(280) + swanga(104) + swanga(274) +
      label(8, 8, 128, "WAY TO THE SHOW", GOLD),
      sky("skns4", "#0f1430", "#3a2050"));
  }

  /* 5. Almeda Rd and Binz St: green signs, the wall tag, downtown behind */
  function skncorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#skns5)"/>' + stars(14) + skyline(150, GOLD) +
      '<rect x="0" y="150" width="400" height="110" fill="#2b2d33"/>' +
      '<rect x="24" y="108" width="262" height="114" fill="#6a3446"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M24 ' + (120 + r * 11) + 'h262" stroke="#4e2434" stroke-width="1"/>').join("") +
      tag("SOLANGE", 44, 172, 46, GOLD, -6) + tag("SAINT HERON", 50, 210, 22, MINT, -3) + tag("SOLO", 214, 212, 18, CORAL, -4) +
      '<circle class="skn-sp" cx="262" cy="196" r="3" fill="' + CORAL + '"/><circle class="skn-sp skn-sp2" cx="268" cy="202" r="2" fill="' + CORAL + '"/>' +
      '<rect x="330" y="96" width="6" height="140" fill="#8a9096"/>' + sign(290, 92, 102, "ALMEDA RD") + sign(304, 118, 76, "BINZ ST") +
      '<rect x="0" y="222" width="400" height="38" fill="#3a3c42"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>',
      sky("skns5", "#0f1430", "#5a2a3e"));
  }

  window.SCENES = { sknstation, sknshape, sknriders, sknslab, skncorner };
})();
