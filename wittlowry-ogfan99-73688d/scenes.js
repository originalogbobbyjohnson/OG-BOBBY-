/* wittlowry scenes (Regions tab: Boston + New England; South Windsor, Connecticut). CSS classes and ids prefixed wl- (the page's own anim-train is kept).
   1 US 5 north into South Windsor: a green highway sign with the white US 5 shield, a car pulling in.
   2 Nevers Park: the ballfield and the picnic table where he wrote "Kindest Regards", notebook pages flipping.
   3 The Connecticut River valley's shade-tobacco barns and white cloth tents, the vent boards swinging.
   4 The closet studio ("record in my closet"): clothes on the rail, a mic with a pop filter, fan letters pinned up.
   5 Nevers Rd and Chief Ryan Way: green signs, WITT tagged on the wall, Hartford's Travelers Tower glowing on the skyline. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wlflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.35}55%{opacity:.9}}.wl-flk{animation:wlflick 2.4s infinite}.wl-flk2{animation-delay:.8s}' +
    '@keyframes wlpage{0%,100%{transform:scaleX(1)}50%{transform:scaleX(-1)}}.wl-page{transform-box:fill-box;transform-origin:0% 50%;animation:wlpage 2.4s ease-in-out infinite}' +
    '@keyframes wlbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-24px)}}.wl-bird{animation:wlbird 10s linear infinite}.wl-bird2{animation-delay:-5s}' +
    '@keyframes wlvent{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.35)}}.wl-vent{transform-box:fill-box;transform-origin:0% 50%;animation:wlvent 3s ease-in-out infinite}.wl-vent2{animation-delay:-1.5s}' +
    '@keyframes wlmeter{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}}.wl-m{transform-box:fill-box;transform-origin:50% 100%;animation:wlmeter .9s ease-in-out infinite}.wl-m2{animation-delay:-.3s}.wl-m3{animation-delay:-.6s}' +
    '@keyframes wlbeacon{0%,100%{opacity:.2}50%{opacity:1}}.wl-bc{animation:wlbeacon 1.8s ease-in-out infinite}' +
    '@keyframes wlspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.wl-sp{animation:wlspray 1.4s ease-out infinite}.wl-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GOLD = "#f2c94c", RED = "#e0453a", MINT = "#7fd1a8";
  const tree = (x, base, r, c) => '<rect x="' + (x - 3) + '" y="' + (base - r) + '" width="6" height="' + r + '" fill="#5a4030"/><circle cx="' + x + '" cy="' + (base - r * 1.4) + '" r="' + r + '" fill="' + c + '"/>';
  /* US route shield */
  const usshield = (cx, cy, s, num) => '<path d="M' + (cx - s) + ' ' + (cy - s) + 'h' + (2 * s) + 'v' + (s * 0.9) + 'q0 ' + (s * 0.9) + ' -' + s + ' ' + (s * 1.2) + 'q-' + s + ' -' + (s * 0.3) + ' -' + s + ' -' + (s * 1.2) + 'z" fill="#fff" stroke="#111" stroke-width="2.5"/>' +
    '<text x="' + cx + '" y="' + (cy + s * 0.45) + '" text-anchor="middle" ' + font + ' font-size="' + (s * 1.25) + '" fill="#111">' + num + '</text>';

  /* 1. US 5 into South Windsor */
  function wlhighway() {
    const trees = Array.from({ length: 14 }, (_, i) => tree(i * 30 + 10, 150, 14 + (i * 7) % 8, i % 2 ? "#3f7a3a" : "#356a31")).join("");
    const car = '<g class="anim-train"><rect x="120" y="186" width="120" height="30" rx="10" fill="' + RED + '"/><rect x="146" y="168" width="70" height="24" rx="8" fill="' + RED + '"/>' +
      '<rect x="152" y="172" width="26" height="16" rx="3" fill="#cfe3f2"/><rect x="184" y="172" width="26" height="16" rx="3" fill="#cfe3f2"/>' +
      '<circle cx="148" cy="216" r="11" fill="#151515"/><circle cx="214" cy="216" r="11" fill="#151515"/><circle cx="148" cy="216" r="4" fill="#9aa0a6"/><circle cx="214" cy="216" r="4" fill="#9aa0a6"/>' +
      '<rect x="232" y="192" width="8" height="6" rx="2" fill="#fff3b0"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#wls1)"/>' + trees +
      '<rect x="0" y="150" width="400" height="110" fill="#4b4f55"/><rect x="0" y="150" width="400" height="6" fill="#7d8f55"/>' +
      '<path d="M0 204h400" stroke="#f2d04b" stroke-width="3" stroke-dasharray="24 18"/><rect x="0" y="234" width="400" height="3" fill="#e8e8e8"/>' +
      '<rect x="270" y="58" width="6" height="96" fill="#7d8287"/><rect x="360" y="58" width="6" height="96" fill="#7d8287"/>' +
      '<rect x="226" y="18" width="170" height="80" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' +
      usshield(256, 44, 15, "5") + '<text x="330" y="48" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">NORTH</text>' +
      '<text x="311" y="86" text-anchor="middle" ' + font + ' font-size="18" fill="#fff">South Windsor</text>' +
      car,
      sky("wls1", "#8cc2ec", "#efe4cf"));
  }

  /* 2. Nevers Park */
  function wlnevers() {
    const bird = (cls) => '<g class="wl-bird ' + cls + '"><path d="M20 40q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#wls2)"/>' +
      tree(20, 120, 22, "#3f7a3a") + tree(70, 118, 18, "#4b8a42") + tree(340, 120, 24, "#3f7a3a") + tree(388, 118, 18, "#4b8a42") +
      '<rect x="0" y="110" width="400" height="150" fill="#5aa24a"/>' +
      '<path d="M200 118l90 40l-90 40l-90 -40z" fill="#c9965e"/><path d="M200 128l66 30l-66 30l-66 -30z" fill="#5aa24a"/>' +
      '<rect x="196" y="186" width="8" height="5" fill="#fff"/><rect x="286" y="155" width="7" height="6" fill="#fff"/><rect x="107" y="155" width="7" height="6" fill="#fff"/>' +
      '<path d="M150 112v-36M250 112v-36" stroke="#888" stroke-width="2"/><path d="M150 76h100" stroke="#888" stroke-width="2"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (150 + i * 10) + ' 76v36" stroke="#999" stroke-width="1"/>').join("") +
      '<rect x="30" y="196" width="120" height="10" rx="2" fill="#8a5a36"/><rect x="40" y="206" width="6" height="30" fill="#6b4428"/><rect x="134" y="206" width="6" height="30" fill="#6b4428"/>' +
      '<rect x="22" y="222" width="136" height="7" rx="2" fill="#8a5a36"/>' +
      '<rect x="66" y="186" width="24" height="12" fill="#fbf8ef" stroke="#999"/><rect class="wl-page" x="90" y="186" width="24" height="12" fill="#fff" stroke="#999"/><path d="M70 190h16M70 194h12" stroke="' + RED + '" stroke-width="1"/>' +
      '<rect x="300" y="60" width="90" height="26" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="345" y="78" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">NEVERS PARK</text>' +
      bird("") + bird("wl-bird2"),
      sky("wls2", "#7cbbe8", "#dff0fa"));
  }

  /* 3. Tobacco barns along the river */
  function wlbarns() {
    const barn = (x, w, c) => '<g><path d="M' + x + ' 150v-50l' + (w / 2) + ' -30l' + (w / 2) + ' 30v50z" fill="' + c + '"/>' +
      Array.from({ length: Math.floor(w / 10) }, (_, i) => '<rect class="wl-vent' + (i % 2 ? " wl-vent2" : "") + '" x="' + (x + 3 + i * 10) + '" y="104" width="6" height="44" fill="#2a1a12"/>').join("") +
      '<path d="M' + (x - 4) + ' 100l' + (w / 2 + 4) + ' -33l' + (w / 2 + 4) + ' 33" stroke="#3a3a3a" stroke-width="4" fill="none"/></g>';
    const tents = Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52) + ' 200q26 -16 52 0v26h-52z" fill="#f6f4ee" opacity=".92"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#wls3)"/>' +
      '<path d="M0 110q100 -30 200 -10t200 0v40h-400z" fill="#6d8f6a"/>' +
      '<rect x="0" y="146" width="400" height="114" fill="#6ea648"/>' +
      barn(30, 110, "#7a2f22") + barn(220, 140, "#6a2a1e") +
      '<path d="M0 186h400" stroke="#4d8a3a" stroke-width="2"/>' + tents +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + (i * 26 + 10) + '" cy="238" r="9" fill="#3f8a30"/>').join("") +
      '<text x="200" y="30" text-anchor="middle" ' + font + ' font-size="11" fill="#2b2b2b">CONNECTICUT RIVER VALLEY</text>',
      sky("wls3", "#9fcbe6", "#f3ead2"));
  }

  /* 4. The closet studio */
  function wlcloset() {
    const shirts = ["#2a2f3a", "#e0453a", "#f2c94c", "#3b6fb6", "#1c1c1c", "#7fd1a8"].map((c, i) => '<path d="M' + (40 + i * 30) + ' 44h22l6 10l-6 4v60h-22v-60l-6 -4z" fill="' + c + '"/>').join("");
    const letters = [0, 1, 2, 3].map(i => '<g transform="rotate(' + (i % 2 ? 6 : -5) + ' ' + (290 + (i % 2) * 44) + ' ' + (60 + Math.floor(i / 2) * 44) + ')"><rect x="' + (272 + (i % 2) * 44) + '" y="' + (44 + Math.floor(i / 2) * 44) + '" width="36" height="30" fill="#fbf8ef"/><path d="M' + (276 + (i % 2) * 44) + ' ' + (52 + Math.floor(i / 2) * 44) + 'h26M' + (276 + (i % 2) * 44) + ' ' + (58 + Math.floor(i / 2) * 44) + 'h22M' + (276 + (i % 2) * 44) + ' ' + (64 + Math.floor(i / 2) * 44) + 'h24" stroke="#3b6fb6" stroke-width="1.4"/><circle cx="' + (290 + (i % 2) * 44) + '" cy="' + (46 + Math.floor(i / 2) * 44) + '" r="2" fill="' + RED + '"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="#2b2420"/><rect x="20" y="20" width="230" height="200" fill="#3a302a"/>' +
      '<rect x="20" y="36" width="230" height="6" fill="#bfbfbf"/>' + shirts +
      '<rect x="260" y="30" width="120" height="110" fill="#3f352e"/>' + letters +
      '<rect x="0" y="210" width="400" height="50" fill="#5a4a3a"/>' +
      '<rect x="128" y="120" width="5" height="90" fill="#555"/><rect x="104" y="206" width="54" height="5" fill="#555"/>' +
      '<rect x="118" y="98" width="24" height="34" rx="11" fill="#9aa0a6"/><circle cx="160" cy="114" r="16" fill="#111" opacity=".75" stroke="#666"/>' +
      '<rect x="250" y="168" width="90" height="42" rx="3" fill="#1d1d1f"/><rect x="256" y="172" width="78" height="30" fill="#1e2a3a"/>' +
      '<rect class="wl-m" x="266" y="180" width="8" height="20" fill="' + MINT + '"/><rect class="wl-m wl-m2" x="280" y="180" width="8" height="20" fill="' + GOLD + '"/><rect class="wl-m wl-m3" x="294" y="180" width="8" height="20" fill="' + RED + '"/><rect class="wl-m wl-m2" x="308" y="180" width="8" height="20" fill="' + MINT + '"/>' +
      '<rect x="240" y="208" width="110" height="6" fill="#1d1d1f"/>' +
      '<text x="320" y="152" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">TEAM WITT</text>',
      "");
  }

  /* 5. Nevers Rd and Chief Ryan Way */
  function wlcorner() {
    const tower = '<g><rect x="168" y="44" width="40" height="92" fill="#cfc8bb"/><rect x="174" y="30" width="28" height="16" fill="#d8d2c6"/><path d="M174 30l14 -20l14 20z" fill="#bdb6a8"/>' +
      '<circle class="wl-bc" cx="188" cy="8" r="4" fill="#fff6c8"/>' + Array.from({ length: 7 }, (_, i) => '<rect x="174" y="' + (52 + i * 11) + '" width="28" height="5" fill="#9a9284"/>').join("") +
      '<rect x="120" y="96" width="44" height="40" fill="#3a4258"/><rect x="214" y="86" width="40" height="50" fill="#3a4258"/><rect x="258" y="104" width="34" height="32" fill="#2e3548"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#wls5)"/>' + tower +
      tree(30, 136, 20, "#2e5a2c") + tree(370, 136, 22, "#2e5a2c") +
      '<rect x="0" y="130" width="400" height="94" fill="#7a3f2c"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 11 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("WITT", 22, 200, 58, GOLD, -6) + tag("TEAM WITT", 168, 214, 18, MINT, -4) + tag("ALL BETS ON ME", 30, 150, 14, "#ff8a7a", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(262, 98, 124, "Nevers Rd") + sign(244, 124, 148, "Chief Ryan Way") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="wl-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="wl-sp"><circle cx="150" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="wl-sp wl-sp2"><circle cx="156" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("wls5", "#2c3560", "#f0a070"));
  }

  window.SCENES = { wlhighway: wlhighway, wlnevers: wlnevers, wlbarns: wlbarns, wlcloset: wlcloset, wlcorner: wlcorner };
})();
