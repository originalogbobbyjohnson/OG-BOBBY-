/* denirofarrar scenes (Regions tab: The Carolinas; Charlotte, NC). CSS classes and ids prefixed df- (the page's own anim-train is kept).
   1 CTC/Arena on the LYNX Blue Line, uptown Charlotte: open-air platform beside the arena's glass front, a white LYNX light-rail car with its blue band sliding in.
   2 Garinger High School, east Charlotte (one of the three high schools he bounced between): red-brick school front, the flag waving, a yellow bus pulling off.
   3 NoDa mill houses on N Davidson St ("Gentrification"): painted mill-village houses and a mural, a new coffee shop going in, a crane swinging overhead.
   4 The old Coliseum dome on Independence Blvd, east Charlotte: the silver ribbed steel dome, boulevard traffic streaming past at dusk.
   5 W Trade St and Grandin Rd in Wesley Heights (where he lived when he broke out): green signs, DENIRO tagged on the brick, the uptown skyline with the tallest tower's spiked crown behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dfflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.df-flk{animation:dfflick 2.4s infinite}.df-flk2{animation-delay:.8s}' +
    '@keyframes dfcar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.df-car{animation:dfcar 7s linear infinite}.df-car2{animation-delay:-3.5s}' +
    '@keyframes dfcarL{from{transform:translateX(540px)}to{transform:translateX(-160px)}}.df-carL{animation:dfcarL 8s linear infinite}.df-carL2{animation-delay:-4s}' +
    '@keyframes dfbus{0%{transform:translateX(0)}60%,100%{transform:translateX(330px)}}.df-bus{animation:dfbus 6s ease-in infinite}' +
    '@keyframes dfflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.df-flag{transform-box:fill-box;transform-origin:0% 50%;animation:dfflag 1.4s ease-in-out infinite}' +
    '@keyframes dfcrane{0%,100%{transform:rotate(-7deg)}50%{transform:rotate(7deg)}}.df-crane{transform-box:view-box;transform-origin:300px 40px;animation:dfcrane 6s ease-in-out infinite}' +
    '@keyframes dfsteam{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(-18px);opacity:0}}.df-st{animation:dfsteam 2s ease-out infinite}.df-st2{animation-delay:1s}' +
    '@keyframes dfglow{0%,100%{opacity:.35}50%{opacity:1}}.df-gl{animation:dfglow 2s ease-in-out infinite}.df-gl2{animation-delay:-1s}' +
    '@keyframes dfspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.df-sp{animation:dfspray 1.4s ease-out infinite}.df-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const BLUE = "#0067b1", GOLD = "#e8b84a", PURP = "#8a6cff";

  /* the uptown skyline with the tallest tower's spiked crown */
  const skyline = (base, op) => '<g opacity="' + (op || 1) + '">' +
    '<rect x="40" y="' + (base - 50) + '" width="30" height="50" fill="#2a2f45"/><rect x="74" y="' + (base - 68) + '" width="26" height="68" fill="#323852"/>' +
    '<rect x="250" y="' + (base - 74) + '" width="34" height="74" fill="#2d334c"/><path d="M250 ' + (base - 74) + 'q17-16 34 0z" fill="#3a4160"/>' +
    '<rect x="292" y="' + (base - 58) + '" width="28" height="58" fill="#262b40"/><rect x="326" y="' + (base - 44) + '" width="36" height="44" fill="#30364e"/>' +
    /* the tall crowned tower: tapering stone shaft with a ring of tall rods on top */
    '<path d="M168 ' + base + 'V' + (base - 92) + 'l8-8h48l8 8V' + base + 'z" fill="#4a4f66"/><path d="M178 ' + (base - 100) + 'h44l-6-10h-32z" fill="#5a6078"/>' +
    Array.from({ length: 9 }, (_, i) => '<path d="M' + (186 + i * 3.5) + ' ' + (base - 110) + 'V' + (base - 128 + Math.abs(i - 4) * 2.5) + '" stroke="#d8d2b8" stroke-width="1.6"/>').join("") +
    '<circle class="df-gl" cx="200" cy="' + (base - 128) + '" r="2.2" fill="#ff5a5a"/>' +
    Array.from({ length: 10 }, (_, i) => '<rect x="' + (176 + (i % 3) * 16) + '" y="' + (base - 84 + Math.floor(i / 3) * 18) + '" width="8" height="5" fill="#ffd97a" opacity=".7"/>').join("") + '</g>';

  /* 1. CTC/Arena, LYNX Blue Line */
  function dfstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 46) + '" y="126" width="34" height="22" rx="3" fill="#1d2633"/>').join("");
    const train = '<g class="anim-train"><rect x="20" y="116" width="340" height="66" rx="10" fill="#eef1f4" stroke="#8a929b" stroke-width="2"/>' + win +
      '<path d="M20 156h340v10H20z" fill="' + BLUE + '"/><path d="M20 168h340v3H20z" fill="#5fb4e8"/>' +
      '<path d="M336 120q22 4 22 30v26h-22z" fill="#d7dce1"/><rect x="340" y="128" width="14" height="20" rx="3" fill="#1d2633"/><circle cx="350" cy="172" r="3.5" fill="#fff6c2"/>' +
      '<rect x="270" y="122" width="56" height="11" rx="2" fill="#111"/><text x="298" y="130.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">I-485/S BLVD</text>' +
      '<path d="M90 116v-14M290 116v-14" stroke="#333" stroke-width="2"/><path d="M60 102h280" stroke="#333" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dfs1)"/>' +
      /* the arena: glass curtain wall over a brick base */
      '<rect x="0" y="22" width="250" height="80" fill="#2e4a63"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 21) + ' 22v80" stroke="#5f86a8" stroke-width="1.5"/>').join("") +
      '<path d="M0 50h250M0 76h250" stroke="#5f86a8" stroke-width="1.2"/><rect x="0" y="94" width="250" height="14" fill="#8a4a32"/>' +
      '<g class="df-gl"><rect x="30" y="58" width="60" height="12" fill="#9fd3ff" opacity=".6"/></g><g class="df-gl df-gl2"><rect x="150" y="32" width="70" height="10" fill="#9fd3ff" opacity=".5"/></g>' +
      '<rect x="260" y="40" width="140" height="68" fill="#3b3f4f"/><path d="M260 40l70-16 70 16z" fill="#4b5063"/>' +
      '<rect x="0" y="108" width="400" height="8" fill="#7d7a73"/>' +
      '<g class="df-flk"><rect x="70" y="100" width="34" height="3" fill="#fff3c4"/></g><g class="df-flk df-flk2"><rect x="290" y="100" width="34" height="3" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="184" width="400" height="8" fill="#f2c200"/><rect x="0" y="192" width="400" height="68" fill="#a39f96"/><path d="M0 222h400" stroke="#928e85" stroke-width="2"/>' +
      '<rect x="100" y="200" width="200" height="34" rx="3" fill="#111"/><text x="114" y="223" ' + font + ' font-size="17" fill="#fff">CTC/Arena</text>' + badge(214, 217, "BLUE", BLUE),
      sky("dfs1", "#1d2340", "#d78a5a"));
  }

  /* 2. Garinger High School */
  function dfschool() {
    const wins = Array.from({ length: 2 }, (_, r) => Array.from({ length: 9 }, (_, c) => '<rect x="' + (52 + c * 34) + '" y="' + (78 + r * 34) + '" width="22" height="22" fill="#cfe4f2" stroke="#efe6d6" stroke-width="2"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dfs2)"/>' +
      '<g fill="#3f7a3a"><circle cx="20" cy="120" r="30"/><circle cx="380" cy="116" r="32"/><circle cx="350" cy="130" r="24"/></g>' +
      '<rect x="40" y="62" width="320" height="110" fill="#a5432f"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M40 ' + (68 + i * 8) + 'h320" stroke="#8e3726" stroke-width="1"/>').join("") +
      '<rect x="36" y="56" width="328" height="8" fill="#e9e1cf"/>' + wins +
      '<rect x="170" y="124" width="60" height="48" fill="#e9e1cf"/><rect x="178" y="132" width="20" height="40" fill="#5a3a26"/><rect x="202" y="132" width="20" height="40" fill="#5a3a26"/>' +
      '<rect x="128" y="146" width="144" height="0" fill="none"/>' +
      '<rect x="120" y="40" width="160" height="20" rx="2" fill="#e9e1cf"/><text x="200" y="55" text-anchor="middle" ' + font + ' font-size="12" fill="#6b2416" letter-spacing="2">GARINGER HIGH</text>' +
      '<rect x="12" y="40" width="3" height="132" fill="#ccc"/><g class="df-flag"><rect x="15" y="42" width="34" height="20" fill="#b22234"/><path d="M15 46h34M15 50h34M15 54h34M15 58h34" stroke="#fff" stroke-width="1.6"/><rect x="15" y="42" width="14" height="10" fill="#3c3b6e"/></g>' +
      '<rect x="0" y="172" width="400" height="16" fill="#c9c3b5"/><rect x="0" y="188" width="400" height="72" fill="#4a4a50"/><path d="M0 226h400" stroke="#e8e0a0" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="df-bus"><rect x="20" y="190" width="110" height="34" rx="5" fill="#f4b400"/><rect x="20" y="214" width="110" height="4" fill="#222"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (28 + i * 18) + '" y="195" width="13" height="11" fill="#2a3a48"/>').join("") +
      '<rect x="118" y="195" width="10" height="16" fill="#2a3a48"/><circle cx="42" cy="226" r="7" fill="#111"/><circle cx="108" cy="226" r="7" fill="#111"/><circle cx="128" cy="214" r="2.5" fill="#fff6c2"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#e9eef5">EASTWAY DR · EAST CHARLOTTE</text>',
      sky("dfs2", "#7fb6e6", "#eaf3fb"));
  }

  /* 3. NoDa mill houses, a crane over the block */
  function dfnoda() {
    const house = (x, c, roof) => '<rect x="' + x + '" y="128" width="60" height="58" fill="' + c + '"/><path d="M' + (x - 6) + ' 130l36-28 36 28z" fill="' + roof + '"/>' +
      '<rect x="' + (x + 8) + '" y="142" width="14" height="16" fill="#fff4cf"/><rect x="' + (x + 38) + '" y="142" width="14" height="16" fill="#fff4cf"/><rect x="' + (x + 24) + '" y="160" width="12" height="26" fill="#5a3a26"/>' +
      '<rect x="' + (x - 2) + '" y="158" width="64" height="4" fill="#efe6d6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dfs3)"/>' +
      /* the crane */
      '<rect x="296" y="40" width="8" height="146" fill="#e0a21a"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M296 ' + (46 + i * 10) + 'l8 8M304 ' + (46 + i * 10) + 'l-8 8" stroke="#a87410" stroke-width="1"/>').join("") +
      '<g class="df-crane"><rect x="150" y="36" width="200" height="6" fill="#e0a21a"/><rect x="330" y="30" width="22" height="16" fill="#555"/><path d="M190 42v40" stroke="#333" stroke-width="1.5"/><rect x="180" y="82" width="22" height="10" fill="#8a8f96"/></g>' +
      house(10, "#e46b5c", "#5a2f2a") + house(84, "#6cc0b0", "#2f4f4a") + house(158, "#f2c94c", "#6b4a1a") +
      /* the new coffee shop going in */
      '<rect x="232" y="118" width="90" height="68" fill="#2b2d33"/><rect x="240" y="130" width="74" height="34" fill="#c9e3ef" opacity=".85"/><rect x="232" y="114" width="90" height="8" fill="#e8e3d8"/>' +
      '<text x="277" y="178" text-anchor="middle" ' + font + ' font-size="9" fill="#e8e3d8">COFFEE SOON</text>' +
      '<g class="df-st"><path d="M262 150q4-6 0-12" stroke="#fff" stroke-width="2" fill="none"/></g><g class="df-st df-st2"><path d="M270 152q4-6 0-12" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      /* mural wall */
      '<rect x="328" y="120" width="72" height="66" fill="#3a3f78"/><circle cx="350" cy="146" r="14" fill="#ff7a59"/><path d="M332 180q20-30 40-6t26-14" stroke="#6ce0c8" stroke-width="5" fill="none"/><path d="M372 128l12 22" stroke="#f2c94c" stroke-width="5"/>' +
      '<rect x="0" y="186" width="400" height="12" fill="#c7c1b5"/><rect x="0" y="198" width="400" height="62" fill="#4a4a4f"/><path d="M0 230h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="18 14"/>' +
      car("df-car", 0, 214, "#7a5cff") + car("df-carL df-carL2", 0, 236, "#e8e8e8") +
      '<text x="80" y="24" text-anchor="middle" ' + font + ' font-size="10" fill="#2b2b2b">N DAVIDSON ST · NODA</text>',
      sky("dfs3", "#9ccbec", "#f6ead8"));
  }

  /* 4. The old Coliseum dome, Independence Blvd */
  function dfdome() {
    const ribs = Array.from({ length: 11 }, (_, i) => { const x = 90 + i * 22; return '<path d="M200 70Q' + (200 + (x - 200) * 0.75) + ' 78 ' + x + ' 160" stroke="#8d97a3" stroke-width="1.6" fill="none"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dfs4)"/>' +
      '<g fill="#2b2f45" opacity=".8"><rect x="0" y="120" width="60" height="40"/><rect x="340" y="116" width="60" height="44"/></g>' +
      '<path d="M80 160Q80 70 200 66Q320 70 320 160z" fill="#c9d0d8"/><path d="M80 160Q80 70 200 66V160z" fill="#dde3e9"/>' + ribs +
      '<path d="M80 160Q200 140 320 160" stroke="#8d97a3" stroke-width="2" fill="none"/>' +
      '<rect x="70" y="158" width="260" height="16" fill="#8b847a"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (78 + i * 21) + '" y="161" width="12" height="10" fill="#ffd27a" class="df-gl' + (i % 2 ? " df-gl2" : "") + '"/>').join("") +
      '<rect x="0" y="174" width="400" height="10" fill="#6f8c5a"/><rect x="0" y="184" width="400" height="76" fill="#3f3f45"/><path d="M0 206h400M0 238h400" stroke="#e8e0a0" stroke-width="2" stroke-dasharray="16 12"/><path d="M0 222h400" stroke="#d9d9d9" stroke-width="3"/>' +
      car("df-car", 0, 194, GOLD) + car("df-car df-car2", 0, 194, "#d9534f") + car("df-carL", 0, 246, "#e8e8e8") + car("df-carL df-carL2", 0, 246, PURP) +
      '<rect x="300" y="20" width="92" height="30" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="346" y="33" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">INDEPENDENCE</text><text x="346" y="45" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BLVD</text>',
      sky("dfs4", "#2b2350", "#e9905e"));
  }

  /* 5. W Trade St and Grandin Rd, Wesley Heights */
  function dfcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dfs5)"/>' + skyline(132, 1) +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("DENIRO", 18, 192, 50, GOLD, -6) + tag("CULT RAP", 150, 214, 20, "#b9a6ff", -4) + tag("FREE TUNE", 22, 214, 15, "#6ce0c8", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 140, "W Trade St") + sign(262, 124, 116, "Grandin Rd") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="df-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="df-sp"><circle cx="196" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="df-sp df-sp2"><circle cx="202" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("dfs5", "#241f45", "#e88a5e"));
  }

  window.SCENES = { dfstation: dfstation, dfschool: dfschool, dfnoda: dfnoda, dfdome: dfdome, dfcorner: dfcorner };
})();
