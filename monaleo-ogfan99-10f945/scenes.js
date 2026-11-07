/* monaleo scenes (Regions tab: Houston + Texas; Missouri City / Ridgemont, "Ridgemont baby, Mo City raised me"). CSS classes and ids prefixed mo- (the page's own anim-train is kept).
   1 Fannin South on the METRORail Red Line: the at-grade island platform at the south end of the line (the closest rail stop to Mo City), park-and-ride lot behind, the light-rail car gliding in.
   2 The church choir loft (she sang and played piano in the children's choir growing up): stained glass, a grand piano, purple robes, notes floating up.
   3 Ridgemont: one-story brick houses on Ridgemont, pines, a pink coupe rolling past, "me and my girls outside" on the porch.
   4 Prairie View A&M (where she studied): purple and gold band marching on the field under the lights.
   5 Texas Pkwy and Cartwright Rd in Missouri City: green signs, MONALEO tagged on the brick, the old sugar refinery's char house and silos down the road behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes moflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.mo-flk{animation:moflick 2.2s infinite}.mo-flk2{animation-delay:.7s}' +
    '@keyframes mocar{from{transform:translateX(-170px)}to{transform:translateX(560px)}}.mo-car{animation:mocar 10s linear infinite}' +
    '@keyframes monote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(26px,-74px);opacity:0}}.mo-note{animation:monote 2.6s ease-out infinite}.mo-n2{animation-delay:-.9s}.mo-n3{animation-delay:-1.7s}' +
    '@keyframes mosway{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.mo-sway{animation:mosway 1.2s ease-in-out infinite}.mo-sw2{animation-delay:-.4s}.mo-sw3{animation-delay:-.8s}' +
    '@keyframes momarch{0%{transform:translateX(-30px)}50%{transform:translateX(30px)}100%{transform:translateX(-30px)}}.mo-march{animation:momarch 6s ease-in-out infinite}' +
    '@keyframes mostep{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.mo-step{animation:mostep .5s ease-in-out infinite}.mo-st2{animation-delay:-.25s}' +
    '@keyframes moblink{0%,100%{opacity:.3}50%{opacity:1}}.mo-bl{animation:moblink 1.6s ease-in-out infinite}.mo-bl2{animation-delay:-.8s}' +
    '@keyframes mosmoke{0%{transform:translate(0,0);opacity:.7}100%{transform:translate(18px,-30px);opacity:0}}.mo-smk{animation:mosmoke 3s ease-out infinite}.mo-smk2{animation-delay:-1.5s}' +
    '@keyframes mospray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mo-sp{animation:mospray 1.4s ease-out infinite}.mo-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const pine = (x, base, s) => '<g><rect x="' + (x - 2 * s) + '" y="' + (base - 20 * s) + '" width="' + (4 * s) + '" height="' + (20 * s) + '" fill="#5b4330"/>' +
    [0, 1, 2].map(i => '<path d="M' + (x - (18 - i * 4) * s) + ' ' + (base - (14 + i * 18) * s) + 'L' + x + ' ' + (base - (40 + i * 18) * s) + 'L' + (x + (18 - i * 4) * s) + ' ' + (base - (14 + i * 18) * s) + 'z" fill="#2f5a3a"/>').join("") + '</g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "mo-bl" + (i % 2 ? " mo-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const PINK = "#ff6fb5", GOLD = "#ffc94a", LAV = "#a98bff", RED = "#c8102e", PURP = "#4b2a7b";
  /* a plain figure: round head (no face), body in a robe/outfit colour */
  const fig = (x, y, s, robe, hair, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (y - 22 * s) + '" r="' + (7 * s) + '" fill="#7a4b33"/><path d="M' + (x - 8 * s) + ' ' + (y - 26 * s) + 'q' + (8 * s) + ' ' + (-10 * s) + ' ' + (16 * s) + ' 0" fill="' + hair + '"/>' +
    '<path d="M' + (x - 10 * s) + ' ' + y + 'q0 ' + (-14 * s) + ' ' + (10 * s) + ' ' + (-14 * s) + 'q' + (10 * s) + ' 0 ' + (10 * s) + ' ' + (14 * s) + 'z" fill="' + robe + '"/></g>';

  /* 1. Fannin South, METRORail Red Line (south terminus) */
  function mostation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="122" width="36" height="24" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><path d="M24 182V120q0 -12 14 -12h300q24 0 30 30v44z" fill="#e9ecef" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="24" y="154" width="344" height="7" fill="' + RED + '"/><rect x="24" y="163" width="344" height="3" fill="#1f3c88"/>' +
      '<path d="M340 112q22 4 26 30h-26z" fill="#1c2630"/><circle cx="356" cy="174" r="3.5" fill="#fff6c2"/>' +
      '<rect x="200" y="98" width="70" height="10" fill="#8a939b"/><path d="M210 98l25 -26l25 26" stroke="#555" stroke-width="2" fill="none"/>' +
      '<rect x="40" y="110" width="88" height="10" rx="2" fill="#111"/><text x="84" y="118" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">RED · NORTHLINE</text></g>';
    const lot = Array.from({ length: 9 }, (_, i) => '<rect x="' + (12 + i * 44) + '" y="' + (86 + (i % 2) * 3) + '" width="30" height="10" rx="4" fill="' + ["#c0c6cc", "#8a2b3a", "#2c3e66", "#e9e9e9", "#3c3c3c"][i % 5] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mos1)"/>' +
      '<rect x="0" y="80" width="400" height="24" fill="#8d8a84"/>' + lot +
      '<path d="M0 72h400" stroke="#333" stroke-width="1.5"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="66" width="6" height="122" fill="#7a8088"/>').join("") +
      '<path d="M0 62h400v8h-400z" fill="#c9cdd2"/><path d="M0 62l200 -14l200 14z" fill="#e2e5e8"/>' +
      pine(16, 104, 0.9) + pine(388, 104, 0.9) +
      train +
      '<rect x="0" y="186" width="400" height="8" fill="#f2c200"/><rect x="0" y="194" width="400" height="66" fill="#b3ada2"/><path d="M0 226h400" stroke="#9a948a" stroke-width="2"/>' +
      '<rect x="60" y="204" width="280" height="36" rx="3" fill="#111"/><text x="78" y="228" ' + font + ' font-size="18" fill="#fff">Fannin South</text>' + badge(272, 222, "RED", RED),
      sky("mos1", "#5d8fd0", "#f6c8a0"));
  }

  /* 2. The church choir loft */
  function mochurch() {
    const glass = (x) => '<g><path d="M' + x + ' 120v-56q0 -26 24 -26t24 26v56z" fill="#20152c" stroke="#c9a24a" stroke-width="3"/>' +
      [["#ff6fb5", 0, 0], ["#4fb3ff", 1, 0], ["#ffc94a", 0, 1], ["#7fd37a", 1, 1], ["#a98bff", 0, 2], ["#ff8c42", 1, 2]].map(c => '<rect class="mo-flk' + (c[1] ? " mo-flk2" : "") + '" x="' + (x + 4 + c[1] * 21) + '" y="' + (52 + c[2] * 22) + '" width="19" height="20" fill="' + c[0] + '" opacity=".85"/>').join("") +
      '<path d="M' + (x + 24) + ' 40v80M' + x + ' 74h48M' + x + ' 96h48" stroke="#c9a24a" stroke-width="2"/></g>';
    const choir = [0, 1, 2, 3, 4, 5].map(i => fig(214 + i * 30, 150 - (i % 2) * 6, 1, PURP, "#1b120c", "mo-sway" + (i % 3 ? " mo-sw" + (i % 3 + 1) : ""))).join("") +
      [0, 1, 2, 3, 4, 5].map(i => '<path d="M' + (206 + i * 30) + ' ' + (140 - (i % 2) * 6) + 'l8 8l8 -8" stroke="' + GOLD + '" stroke-width="2.5" fill="none"/>').join("");
    const notes = [0, 1, 2].map(i => '<g class="mo-note' + (i ? " mo-n" + (i + 1) : "") + '"><text x="' + (110 + i * 22) + '" y="150" ' + font + ' font-size="20" fill="' + [PINK, GOLD, LAV][i] + '">' + ["♪", "♫", "♪"][i] + '</text></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mos2)"/>' +
      '<path d="M0 0h400v30l-200 -24l-200 24z" fill="#3a2418"/>' + glass(40) + glass(300) +
      '<rect x="190" y="150" width="210" height="16" fill="#6b3f22"/><rect x="190" y="166" width="210" height="40" fill="#7d4a28"/>' +
      choir +
      '<path d="M40 196q0 -26 40 -30h70q24 0 30 18l6 12z" fill="#111" stroke="#333" stroke-width="2"/><path d="M60 176l56 -40" stroke="#111" stroke-width="4"/><path d="M60 176l56 -40l10 6l-56 40z" fill="#1a1a1a"/>' +
      '<rect x="56" y="186" width="120" height="8" fill="#f4f1e8"/>' + Array.from({ length: 14 }, (_, i) => '<rect x="' + (60 + i * 8) + '" y="186" width="4" height="5" fill="#111"/>').join("") +
      '<path d="M66 196v30M170 196v30" stroke="#111" stroke-width="5"/>' + notes +
      '<rect x="0" y="226" width="400" height="34" fill="#5a1f2c"/><path d="M0 226h400" stroke="#c9a24a" stroke-width="3"/>' +
      '<rect x="12" y="200" width="6" height="26" fill="#f4f1e8"/><circle class="mo-flk" cx="15" cy="196" r="4" fill="#ffd36b"/><rect x="382" y="200" width="6" height="26" fill="#f4f1e8"/><circle class="mo-flk mo-flk2" cx="385" cy="196" r="4" fill="#ffd36b"/>',
      sky("mos2", "#2b1a2e", "#6b3a3a"));
  }

  /* 3. Ridgemont: brick one-story houses */
  function moridgemont() {
    const house = (x, brick, trim) => '<g><rect x="' + x + '" y="150" width="120" height="50" fill="' + brick + '"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M' + x + ' ' + (158 + i * 9) + 'h120" stroke="#00000022" stroke-width="1"/>').join("") +
      '<path d="M' + (x - 8) + ' 152l68 -30l68 30z" fill="#4a4a50"/><rect x="' + (x + 12) + '" y="162" width="24" height="18" fill="#ffe2a0" class="mo-flk"/><rect x="' + (x + 84) + '" y="162" width="24" height="18" fill="#ffe2a0"/>' +
      '<rect x="' + (x + 50) + '" y="166" width="18" height="34" fill="' + trim + '"/><rect x="' + (x + 44) + '" y="198" width="30" height="4" fill="#999"/></g>';
    const car = '<g class="mo-car"><path d="M0 222v-12q0 -6 8 -8l18 -3l14 -14h52l16 14l16 4q6 2 6 8v11z" fill="' + PINK + '" stroke="#5a1236" stroke-width="2"/><path d="M44 189h22v12h-34zM70 189h20l12 12h-32z" fill="#cfe9ff" opacity=".85"/>' +
      '<circle cx="28" cy="224" r="10" fill="#111"/><circle cx="28" cy="224" r="4.5" fill="#e0e4e8"/><circle cx="104" cy="224" r="10" fill="#111"/><circle cx="104" cy="224" r="4.5" fill="#e0e4e8"/></g>';
    const girls = [0, 1, 2].map(i => fig(176 + i * 16, 200, 0.8, [PINK, GOLD, LAV][i], "#1b120c", "mo-sway" + (i ? " mo-sw" + (i + 1) : ""))).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mos3)"/>' + stars(10) +
      pine(20, 152, 1.3) + pine(388, 152, 1.2) + pine(150, 150, 1) +
      house(20, "#a4553a", "#3a2a22") + house(262, "#b8834f", "#6b2a2a") + girls +
      '<rect x="0" y="200" width="400" height="12" fill="#6fae4f"/><rect x="0" y="212" width="400" height="48" fill="#4c4c52"/><path d="M0 238h40M70 238h40M140 238h40M210 238h40M280 238h40M350 238h40" stroke="#e8d36a" stroke-width="2"/>' +
      car +
      '<rect x="160" y="96" width="5" height="104" fill="#2f2f2f"/>' + sign(124, 98, 112, "Ridgemont") +
      '<rect x="384" y="120" width="4" height="80" fill="#222"/><circle class="mo-flk" cx="386" cy="118" r="7" fill="#ffe9a8"/>',
      sky("mos3", "#1c1840", "#c46a7a"));
  }

  /* 4. Prairie View A&M: purple and gold on the field */
  function mopv() {
    const player = (x, i) => '<g class="mo-step' + (i % 2 ? " mo-st2" : "") + '"><rect x="' + (x - 6) + '" y="168" width="12" height="20" fill="' + PURP + '"/><path d="M' + (x - 6) + ' 172h12" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<rect x="' + (x - 5) + '" y="188" width="4" height="12" fill="#fff"/><rect x="' + (x + 1) + '" y="188" width="4" height="12" fill="#fff"/><circle cx="' + x + '" cy="162" r="5" fill="#7a4b33"/>' +
      '<rect x="' + (x - 6) + '" y="148" width="12" height="12" rx="2" fill="#fff"/><path d="M' + x + ' 148q4 -10 0 -16" stroke="' + GOLD + '" stroke-width="3" fill="none"/>' +
      (i % 3 === 0 ? '<path d="M' + (x + 6) + ' 172l12 -6l2 6z" fill="' + GOLD + '"/>' : '<circle cx="' + (x + 9) + '" cy="178" r="6" fill="#eee" stroke="' + GOLD + '" stroke-width="2"/>') + '</g>';
    const crowd = Array.from({ length: 40 }, (_, i) => '<circle cx="' + (6 + i * 10) + '" cy="' + (96 + (i % 3) * 3) + '" r="3.5" fill="' + [PURP, GOLD, "#5b3a8f", "#e8b830"][i % 4] + '"/>').join("");
    const light = x => '<rect x="' + (x - 2) + '" y="20" width="4" height="70" fill="#666"/><rect x="' + (x - 16) + '" y="12" width="32" height="12" fill="#444"/>' + [0, 1, 2, 3].map(i => '<circle class="mo-bl' + (i % 2 ? " mo-bl2" : "") + '" cx="' + (x - 11 + i * 7.3) + '" cy="18" r="2.6" fill="#fffbe0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mos4)"/>' + stars(12) + light(40) + light(360) +
      '<rect x="0" y="88" width="400" height="26" fill="#2b2433"/>' + crowd +
      '<rect x="0" y="112" width="400" height="10" fill="' + PURP + '"/><text x="200" y="120.5" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '" letter-spacing="3">PRAIRIE VIEW</text>' +
      '<rect x="0" y="122" width="400" height="138" fill="#3f8f3c"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<path d="M' + (i * 56 - 10) + ' 122l-24 138" stroke="#ffffffaa" stroke-width="2"/>').join("") +
      '<g class="mo-march">' + [0, 1, 2, 3, 4, 5, 6].map(i => player(80 + i * 40, i)).join("") + '</g>' +
      '<g class="mo-march">' + [0, 1, 2, 3, 4, 5].map(i => '<g transform="translate(0 46)">' + player(100 + i * 40, i + 1) + '</g>').join("") + '</g>',
      sky("mos4", "#0c0a22", "#3a2a5c"));
  }

  /* 5. Texas Pkwy and Cartwright Rd, Missouri City */
  function mocorner() {
    const sugar = '<g opacity=".95" transform="translate(-96 0)"><rect x="236" y="40" width="70" height="88" fill="#8a3b2a"/>' +
      Array.from({ length: 6 }, (_, r) => Array.from({ length: 5 }, (_, c) => '<rect x="' + (242 + c * 13) + '" y="' + (48 + r * 13) + '" width="7" height="8" fill="' + ((r + c) % 4 ? "#2a1712" : "#ffd98a") + '"/>').join("")).join("") +
      '<rect x="312" y="16" width="10" height="112" fill="#6e2f22"/><g class="mo-smk"><circle cx="318" cy="12" r="6" fill="#d9d4cc" opacity=".6"/></g><g class="mo-smk mo-smk2"><circle cx="322" cy="8" r="5" fill="#d9d4cc" opacity=".5"/></g>' +
      '<rect x="330" y="70" width="22" height="58" fill="#e8e3d8"/><path d="M330 70q11 -10 22 0" fill="#e8e3d8"/><rect x="356" y="76" width="22" height="52" fill="#dcd6ca"/><path d="M356 76q11 -10 22 0" fill="#dcd6ca"/>' +
      '<rect x="160" y="96" width="76" height="32" fill="#7a3426"/><path d="M160 96h76" stroke="#5a2418" stroke-width="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mos5)"/>' + stars(14) + sugar +
      '<rect x="0" y="126" width="400" height="98" fill="#9b5a3c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#7f4630" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#7f4630" stroke-width="1"/>').join("")).join("") +
      tag("MONALEO", 18, 194, 54, PINK, -6) + tag("MO CITY", 26, 218, 20, GOLD, -4) + tag("BIG LEO", 170, 216, 18, LAV, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 146, "Texas Pkwy") + sign(262, 124, 130, "Cartwright Rd") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="mo-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="mo-sp"><circle cx="232" cy="160" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="mo-sp mo-sp2"><circle cx="238" cy="154" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("mos5", "#1b1640", "#e07a7a"));
  }

  window.SCENES = { mostation: mostation, mochurch: mochurch, moridgemont: moridgemont, mopv: mopv, mocorner: mocorner };
})();
