/* demfranchize scenes (Regions tab: Atlanta; the Westside / Bankhead). CSS classes and ids prefixed df- (the page's own anim-train is kept).
   1 MARTA Ashby station on the Westside, where the Green line splits off toward Bankhead: train pulling in, black sign with BLUE + GREEN badges.
   2 The Westside T-shirt spot: white tees stacked by the dozen, one swaying on a hanger, "Hanes or Fruit of the Loom" (no logos).
   3 "Lean Wit It, Rock Wit It": the club floor leaning and rocking, the lights spinning.
   4 "Ridin' Rims": a candy-red box car on chrome rims rolling down the block, the rims spinning.
   5 Joseph E. Lowery Blvd NW and Joseph E. Boone Blvd NW: green signs, DEM FRANCHIZE BOYZ tagged, the old Georgia Dome's white roof behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dfsway{0%,100%{transform:rotate(-7deg)}50%{transform:rotate(7deg)}}.df-sway{transform-box:fill-box;transform-origin:50% 0%;animation:dfsway 2.4s ease-in-out infinite}' +
    '@keyframes dflean{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.df-lean{transform-box:fill-box;transform-origin:50% 100%;animation:dflean 1s ease-in-out infinite}.df-l2{animation-delay:-.5s}.df-l3{animation-delay:-.25s}' +
    '@keyframes dfspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.df-spin{transform-box:fill-box;transform-origin:50% 50%;animation:dfspin .8s linear infinite}.df-slow{animation-duration:6s}' +
    '@keyframes dfroll{0%{transform:translateX(-260px)}100%{transform:translateX(420px)}}.df-roll{animation:dfroll 7s linear infinite}' +
    '@keyframes dfblink{0%,100%{opacity:1}50%{opacity:.3}}.df-bl{animation:dfblink 1.2s ease-in-out infinite}.df-bl2{animation-delay:-.6s}' +
    '@keyframes dfcar{from{transform:translateX(-120px)}to{transform:translateX(480px)}}.df-car{animation:dfcar 6s linear infinite}' +
    '@keyframes dftw{0%,100%{opacity:.2;transform:scale(.6)}50%{opacity:1;transform:scale(1.1)}}.df-tw{transform-box:fill-box;transform-origin:50% 50%;animation:dftw 1.8s ease-in-out infinite}.df-tw2{animation-delay:-.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const RED = "#e63946", BLUE = "#0072bc", GREEN = "#009d4b", ICE = "#3fa7d6", WHITE = "#f4f4f4";
  const badge = (x, y, t, c) => '<rect x="' + x + '" y="' + (y - 11) + '" width="' + (t.length * 7 + 10) + '" height="15" rx="7" fill="' + c + '"/><text x="' + (x + (t.length * 7 + 10) / 2) + '" y="' + (y + 0.5) + '" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">' + t + '</text>';
  /* a plain white tee */
  const tee = (x, y, s, c) => '<path transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')" d="M-10 -14l-14 8l6 10l8 -4v28h20v-28l8 4l6 -10l-14 -8q-6 6 -10 0q-4 6 -10 0z" fill="' + (c || WHITE) + '" stroke="#b9b9c2" stroke-width="1.5"/>';
  /* the old Georgia Dome: white fabric roof over a dark bowl */
  const dome = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q110 -46 220 0z" fill="#eef0f2"/><path d="M0 0h220v20h-220z" fill="#5a6470"/>' +
    Array.from({ length: 7 }, (_, i) => '<path d="M' + (20 + i * 30) + ' ' + (i === 3 ? -23 : i % 6 ? -18 : -8) + 'v20" stroke="#c9ced4" stroke-width="2"/>').join("") +
    '<path d="M0 0h220" stroke="#c9ced4" stroke-width="2"/></g>';

  /* 1. MARTA Ashby station, the Westside */
  function dfstation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (66 + i * 50) + '" y="86" width="34" height="20" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="50" y="78" width="300" height="56" rx="8" fill="#d3d8dc" stroke="#6d757c" stroke-width="2"/>' + win +
      '<rect x="50" y="112" width="300" height="6" fill="#f08a24"/><rect x="50" y="120" width="300" height="4" fill="#1f5fa8"/>' +
      '<path d="M198 80v52" stroke="#6d757c" stroke-width="2"/><rect x="330" y="82" width="18" height="46" rx="4" fill="#aeb4ba"/><circle cx="340" cy="126" r="3.5" fill="#fff6c2"/>' +
      '<rect x="258" y="80" width="68" height="11" rx="2" fill="#111"/><text x="292" y="88.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">BANKHEAD</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#df1)"/>' +
      '<g fill="#3f6b45">' + [10, 70, 330, 372].map(x => '<ellipse cx="' + x + '" cy="76" rx="30" ry="24"/>').join("") + '</g>' +
      /* platform canopy */
      '<path d="M14 40h372l-12 12H26z" fill="#a3adb7"/><rect x="26" y="52" width="348" height="4" fill="#5d6772"/>' +
      [50, 200, 350].map(x => '<rect x="' + (x - 3) + '" y="56" width="6" height="22" fill="#5d6772"/>').join("") +
      '<rect class="df-bl" x="100" y="57" width="44" height="3" fill="#fff3c4"/><rect class="df-bl df-bl2" x="256" y="57" width="44" height="3" fill="#fff3c4"/>' +
      train +
      '<rect x="0" y="134" width="400" height="14" fill="#bdb9b0"/><rect x="0" y="132" width="400" height="3" fill="#f2c200"/>' +
      '<rect x="0" y="148" width="400" height="112" fill="#8d8a82"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 56) + ' 148v112" stroke="#7d7a72" stroke-width="2"/>').join("") +
      /* black station sign */
      '<rect x="80" y="164" width="240" height="40" rx="3" fill="#111"/><text x="96" y="191" ' + font + ' font-size="20" fill="#fff">Ashby</text>' +
      badge(178, 188, "BLUE", BLUE) + badge(226, 188, "GREEN", GREEN) +
      '<text x="200" y="222" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">WESTSIDE · GREEN LINE SPLITS OFF TO BANKHEAD</text>',
      sky("df1", "#6fa6d8", "#f3d9a6"));
  }

  /* 2. The Westside T-shirt spot: white tees by the dozen */
  function dfteestore() {
    const stack = (x, y) => Array.from({ length: 5 }, (_, i) => '<rect x="' + x + '" y="' + (y - i * 9) + '" width="60" height="9" rx="2" fill="' + WHITE + '" stroke="#c9c9d2" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#df2)"/>' +
      /* storefront awning + window */
      '<rect x="0" y="0" width="400" height="26" fill="' + RED + '"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 40) + ' 26q20 14 40 0" fill="' + (i % 2 ? WHITE : RED) + '"/>').join("") +
      '<rect x="120" y="44" width="160" height="26" rx="3" fill="#111" stroke="' + WHITE + '" stroke-width="2"/><text x="200" y="62" text-anchor="middle" ' + font + ' font-size="12" fill="' + WHITE + '">WHITE TEES · ALL SIZES</text>' +
      /* the rail with tees */
      '<path d="M30 92h340" stroke="#888" stroke-width="4"/>' +
      [104, 152, 248, 296].map(x => '<path d="M' + x + ' 92v8" stroke="#888" stroke-width="2"/>' + tee(x, 120, 1)).join("") +
      '<g class="df-sway"><path d="M200 92v8" stroke="#888" stroke-width="2"/>' + tee(200, 120, 1.2) + '</g>' +
      /* counter + stacks */
      '<rect x="0" y="170" width="400" height="90" fill="#5a3a2a"/><rect x="0" y="166" width="400" height="8" fill="#7a5238"/>' +
      stack(18, 158) + stack(322, 158) +
      '<rect x="100" y="200" width="200" height="40" rx="3" fill="#111" stroke="' + RED + '" stroke-width="2"/>' +
      '<text x="200" y="216" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">HANES OR FRUIT OF THE LOOM</text><text x="200" y="231" text-anchor="middle" ' + font + ' font-size="8" fill="' + ICE + '">CIRCLE OR V-NECK</text>',
      sky("df2", "#f2ede2", "#e1d6c2"));
  }

  /* 3. Lean wit it, rock wit it: the club floor */
  function dfclub() {
    const dancer = (x, cls, c) => '<g class="df-lean ' + cls + '"><circle cx="' + x + '" cy="140" r="10" fill="#14121c"/><path d="M' + (x - 14) + ' 154h28l-4 40h-20z" fill="' + c + '"/>' +
      '<path d="M' + (x - 14) + ' 158l-16 18M' + (x + 14) + ' 158l16 -14" stroke="#14121c" stroke-width="6" stroke-linecap="round"/><path d="M' + (x - 8) + ' 194l-4 30M' + (x + 8) + ' 194l4 30" stroke="#1e3a6e" stroke-width="8" stroke-linecap="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#df3)"/>' +
      '<g class="df-spin df-slow"><path d="M200 60l-180 -80h40zM200 60l180 -60v40zM200 60l-40 -100h30z" fill="' + ICE + '" opacity=".14"/></g>' +
      '<circle cx="200" cy="60" r="16" fill="#cfd3da"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (188 + (i % 4) * 7) + '" y="' + (48 + Math.floor(i / 4) * 8) + '" width="5" height="5" fill="#fff" opacity=".7"/>').join("") +
      '<rect x="40" y="88" width="320" height="22" rx="3" fill="#111" stroke="' + RED + '" stroke-width="2"/><text x="200" y="104" text-anchor="middle" ' + font + ' font-size="12" fill="' + WHITE + '">LEAN WIT IT · ROCK WIT IT</text>' +
      dancer(80, "", WHITE) + dancer(150, "df-l2", WHITE) + dancer(220, "df-l3", WHITE) + dancer(290, "df-l2", WHITE) + dancer(350, "", WHITE) +
      '<rect x="0" y="226" width="400" height="34" fill="#1a1622"/>' + Array.from({ length: 10 }, (_, i) => '<rect class="df-bl' + (i % 2 ? " df-bl2" : "") + '" x="' + (i * 40) + '" y="226" width="40" height="34" fill="' + [RED, ICE, "#f5c542"][i % 3] + '" opacity=".35"/>').join(""),
      sky("df3", "#0d0b18", "#2a1838"));
  }

  /* 4. Ridin' rims: candy paint on chrome, rolling the block */
  function dfrims() {
    const rim = (cx) => '<circle cx="' + cx + '" cy="208" r="24" fill="#111"/><g class="df-spin"><circle cx="' + cx + '" cy="208" r="17" fill="#d7dbe0"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + cx + ' 208l' + (16 * Math.cos(i * Math.PI / 3)).toFixed(1) + ' ' + (16 * Math.sin(i * Math.PI / 3)).toFixed(1) + '" stroke="#8a9098" stroke-width="3"/>').join("") +
      '<circle cx="' + cx + '" cy="208" r="5" fill="#8a9098"/></g>';
    const car = '<g class="df-roll"><path d="M10 196v-30q0 -8 8 -8h40l26 -26h96l30 26h46q10 0 10 10v28z" fill="' + RED + '" stroke="#7a1a22" stroke-width="2"/>' +
      '<path d="M92 156l20 -20h60l22 20z" fill="#2a3442"/><path d="M142 136v20" stroke="' + RED + '" stroke-width="4"/>' +
      '<rect x="10" y="180" width="246" height="4" fill="#ff8a94" opacity=".7"/><circle cx="252" cy="172" r="4" fill="#fff6c2"/>' + rim(62) + rim(206) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#df4)"/>' +
      /* Westside houses */
      [[10, "#c9b48e"], [100, "#9fb3c8"], [200, "#d8c7a6"], [300, "#b9a2c9"]].map(([x, c]) => '<path d="M' + x + ' 150v-50l45 -30l45 30v50z" fill="' + c + '"/><rect x="' + (x + 36) + '" y="118" width="18" height="32" fill="#4a3a2e"/><rect x="' + (x + 10) + '" y="108" width="16" height="14" fill="#2a3442"/><rect x="' + (x + 64) + '" y="108" width="16" height="14" fill="#2a3442"/>').join("") +
      '<rect x="0" y="150" width="400" height="16" fill="#c9c3b6"/><rect x="0" y="166" width="400" height="94" fill="#3e3e44"/><path d="M0 246h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      car +
      '<rect x="130" y="20" width="140" height="26" rx="3" fill="#111" stroke="' + RED + '" stroke-width="2"/><text x="200" y="38" text-anchor="middle" ' + font + ' font-size="13" fill="' + WHITE + '">RIDIN’ RIMS</text>',
      sky("df4", "#8ec8ef", "#f6dcc0"));
  }

  /* 5. Joseph E. Lowery Blvd NW and Joseph E. Boone Blvd NW */
  function dfcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#df5)"/>' +
      Array.from({ length: 10 }, (_, i) => '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 37) % 36) + '" r="1.1" fill="#fff" opacity=".7"/>').join("") +
      dome(40, 134, 1) +
      '<g fill="#2e3048"><rect x="290" y="70" width="22" height="64"/><rect x="316" y="90" width="18" height="44"/><rect x="264" y="98" width="20" height="36"/></g>' +
      '<rect x="0" y="134" width="400" height="90" fill="#4a4f5c"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (134 + r * 10) + 'h400" stroke="#3f4450" stroke-width="1"/>').join("") +
      tag("DEM FRANCHIZE", 12, 180, 30, WHITE, -5) + tag("BOYZ", 40, 214, 30, RED, -5) + tag("DFB", 150, 214, 22, ICE, -4) + tag("WHITE TEE", 196, 214, 16, "#f5c542", -4) +
      '<g class="df-tw"><path d="M240 150l3 7l7 3l-7 3l-3 7l-3 -7l-7 -3l7 -3z" fill="' + WHITE + '"/></g><g class="df-tw df-tw2"><path d="M128 196l2 5l5 2l-5 2l-2 5l-2 -5l-5 -2l5 -2z" fill="' + RED + '"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="df-car"><rect x="0" y="232" width="70" height="16" rx="6" fill="' + RED + '"/><rect x="12" y="226" width="40" height="10" rx="4" fill="#b02a36"/><circle cx="14" cy="249" r="6" fill="#d7dbe0"/><circle cx="56" cy="249" r="6" fill="#d7dbe0"/><circle cx="68" cy="238" r="2.5" fill="#fff6c2"/></g>' +
      '<rect x="356" y="90" width="6" height="134" fill="#2f2f2f"/>' + sign(250, 92, 146, "Joseph E Lowery Blvd NW") + sign(250, 118, 146, "Joseph E Boone Blvd NW"),
      sky("df5", "#1a2050", "#e08a4a"));
  }

  window.SCENES = { dfstation: dfstation, dfteestore: dfteestore, dfclub: dfclub, dfrims: dfrims, dfcorner: dfcorner };
})();
