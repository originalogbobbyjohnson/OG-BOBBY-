/* pivotgang scenes (Regions tab: Chicago; Pivot Gang, the collective formed 2011 in Austin on Chicago's West Side by Saba, Joseph Chilliams, MFnMelo and John Walt (Wikipedia).
   "From the westside and my grandpapa went to Crane" (Aang). Albums: JIMMY (2013), You Can't Sit With Us (2019), Two Piece Tour Pack (2019). CSS classes prefixed pv- (the page's own anim-train is kept).
   1 The CTA Green Line pulling into Austin, up on the steel 'L' over Austin Blvd at Lake St, the black station sign with the Green bullet.
   2 Crane High School on W Jackson Blvd (now Crane Medical Prep), the big red-brick and limestone school - "my grandpapa went to Crane". Students walk by, the flag waves.
   3 The Laramie State Bank Building at Chicago Ave and Laramie in Austin, the 1928 Art Deco bank in cream terracotta with bronze-green panels; the 66 Chicago bus rolls past.
   4 Two Piece Tour Pack: a West Side chicken shack at night, two-piece and fries in the window, the neon blinking, steam off the fryer.
   5 W Chicago Ave and N Central Ave in Austin: green signs, PIVOT GANG tagged with PIVOT, YCSWU and WEST SIDE, the downtown skyline far off to the east at dusk. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes pvglow{0%,100%{opacity:.45}50%{opacity:1}}.pv-glow{animation:pvglow 2.6s ease-in-out infinite}.pv-g2{animation-delay:-1.3s}' +
    '@keyframes pvblink{0%,49%{opacity:1}50%,100%{opacity:.6}}.pv-blink{animation:pvblink 1.2s steps(1) infinite}' +
    '@keyframes pvsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.pv-sw{transform-box:fill-box;transform-origin:50% 100%;animation:pvsway 3.6s ease-in-out infinite}.pv-sw2{animation-delay:-1.8s}' +
    '@keyframes pvflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(6deg)}}.pv-flag{transform-box:fill-box;transform-origin:0% 50%;animation:pvflag 1.6s ease-in-out infinite}' +
    '@keyframes pvbus{0%{transform:translateX(-170px)}100%{transform:translateX(470px)}}.pv-bus{animation:pvbus 9s linear infinite;animation-delay:-3s}' +
    '@keyframes pvcar{0%{transform:translateX(-140px)}100%{transform:translateX(480px)}}.pv-car{animation:pvcar 7s linear infinite;animation-delay:-2s}' +
    '@keyframes pvwalk{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.pv-walk{animation:pvwalk 14s linear infinite}.pv-w2{animation-delay:-7s}.pv-w3{animation-delay:-3.5s}' +
    '@keyframes pvsteam{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(-30px);opacity:0}}.pv-st{animation:pvsteam 1.8s ease-out infinite}.pv-st2{animation-delay:-.6s}.pv-st3{animation-delay:-1.2s}' +
    '@keyframes pvdrip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(24px);opacity:0}}.pv-dr{animation:pvdrip 1.9s ease-in infinite}' +
    '@keyframes pvsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.pv-sp{animation:pvsp 1.4s ease-out infinite}.pv-sp2{animation-delay:.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const GREEN = "#009b3a", PINK = "#ff5fa2", GOLD = "#ffd23f", CHIBLUE = "#41b6e6", STAR = "#e4002b";
  const star = (cx, cy, r, c) => { let d = ""; for (let i = 0; i < 12; i++) { const a = Math.PI / 6 * i - Math.PI / 2, rr = i % 2 ? r * .45 : r; d += (i ? "L" : "M") + (cx + rr * Math.cos(a)).toFixed(1) + " " + (cy + rr * Math.sin(a)).toFixed(1); } return '<path d="' + d + 'z" fill="' + c + '"/>'; };
  const tree = (x, y, s, d) => '<g class="pv-sw' + (d ? " pv-sw2" : "") + '"><rect x="' + (x - 3 * s) + '" y="' + (y - 30 * s) + '" width="' + (6 * s) + '" height="' + (30 * s) + '" fill="#5a4030"/><circle cx="' + x + '" cy="' + (y - 40 * s) + '" r="' + (22 * s) + '" fill="#3a7a3a"/><circle cx="' + (x - 14 * s) + '" cy="' + (y - 32 * s) + '" r="' + (14 * s) + '" fill="#2f6a30"/><circle cx="' + (x + 14 * s) + '" cy="' + (y - 33 * s) + '" r="' + (14 * s) + '" fill="#347234"/></g>';
  const walker = (cls, y, c) => '<g class="pv-walk ' + cls + '"><circle cx="0" cy="' + (y - 21) + '" r="5" fill="#3a2a22"/><rect x="-5" y="' + (y - 16) + '" width="10" height="16" rx="3" fill="' + c + '"/><rect x="-6" y="' + (y - 13) + '" width="5" height="9" fill="#2a2a34"/></g>';

  /* 0. CTA Green Line at Austin, up on the 'L' over Austin Blvd at Lake St */
  function pvstop() {
    const car = (x) => '<rect x="' + x + '" y="92" width="150" height="46" rx="4" fill="#d9dde2" stroke="#7a8088" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + 10 + i * 27) + '" y="100" width="20" height="18" rx="2" fill="#2a3340"/>').join("") +
      '<rect x="' + x + '" y="124" width="150" height="5" fill="' + GREEN + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pv0)"/>' +
      /* two-flats and storefronts on Lake St below */
      '<g>' + [0, 66, 270, 336].map((x, i) => '<rect x="' + x + '" y="' + (150 + (i % 2) * 6) + '" width="62" height="90" fill="' + ["#9a5a40", "#c7a07a", "#8a4a36", "#b77a52"][i] + '"/>').join("") + '</g>' +
      '<g fill="#ffe08a" class="pv-glow">' + [12, 36, 78, 102, 282, 306, 348, 372].map(x => '<rect x="' + x + '" y="170" width="10" height="12"/>').join("") + '</g>' +
      /* steel structure */
      '<rect x="0" y="140" width="400" height="14" fill="#5a5f66"/><rect x="0" y="152" width="400" height="5" fill="#3d4147"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="156" width="10" height="84" fill="#4a4f56"/><path d="M' + (x - 14) + ' 156l14 22M' + (x + 24) + ' 156l-14 22" stroke="#4a4f56" stroke-width="5"/>').join("") +
      /* platform canopy */
      '<rect x="0" y="66" width="400" height="8" fill="#6a7078"/>' + [60, 200, 340].map(x => '<rect x="' + x + '" y="74" width="5" height="66" fill="#6a7078"/>').join("") +
      '<g class="anim-train">' + car(20) + car(176) + '<circle cx="24" cy="128" r="4" fill="#fff6c2"/></g>' +
      '<rect x="0" y="240" width="400" height="20" fill="#56565c"/><path d="M0 250h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 10"/>' +
      '<g class="pv-car"><rect x="0" y="228" width="64" height="16" rx="5" fill="' + PINK + '"/><rect x="12" y="221" width="34" height="10" rx="3" fill="#c84a82"/><circle cx="12" cy="246" r="5" fill="#111"/><circle cx="52" cy="246" r="5" fill="#111"/></g>' +
      '<rect x="226" y="12" width="166" height="44" rx="3" fill="#111"/>' +
      '<rect x="236" y="20" width="48" height="28" rx="4" fill="' + GREEN + '"/><text x="260" y="39" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">GREEN</text>' +
      '<text x="294" y="41" ' + font + ' font-size="19" fill="#fff">Austin</text>',
      sky("pv0", "#4f86c6", "#f3c79a"));
  }

  /* 1. Crane High School on W Jackson Blvd - "my grandpapa went to Crane" */
  function pvcrane() {
    const wins = (x, y, cols, rows) => Array.from({ length: rows }, (_, r) => Array.from({ length: cols }, (_, c) => '<rect x="' + (x + c * 15) + '" y="' + (y + r * 24) + '" width="9" height="15" fill="#2a3346"/><rect x="' + (x + c * 15 - 1) + '" y="' + (y + r * 24 + 15) + '" width="11" height="2" fill="#e2d6bc"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#pv1)"/>' +
      '<circle cx="60" cy="40" r="20" fill="#fff4b8" class="pv-glow"/>' +
      /* wings */
      '<rect x="14" y="80" width="134" height="122" fill="#a8452f"/>' + wins(22, 90, 8, 4) +
      '<rect x="252" y="80" width="134" height="122" fill="#a8452f"/>' + wins(260, 90, 8, 4) +
      '<rect x="10" y="74" width="142" height="8" fill="#e2d6bc"/><rect x="248" y="74" width="142" height="8" fill="#e2d6bc"/>' +
      /* center pavilion */
      '<rect x="140" y="58" width="120" height="144" fill="#b24c33"/><rect x="134" y="50" width="132" height="10" fill="#e2d6bc"/><path d="M150 50l50 -18l50 18z" fill="#e2d6bc"/>' +
      '<rect x="146" y="66" width="108" height="16" fill="#e2d6bc"/><text x="200" y="78" text-anchor="middle" ' + font + ' font-size="11" fill="#6a2a1a" letter-spacing="3">CRANE</text>' +
      wins(156, 90, 7, 2) +
      [160, 182, 210, 232].map(x => '<rect x="' + x + '" y="140" width="8" height="54" fill="#efe6d2"/>').join("") +
      '<rect x="152" y="134" width="96" height="7" fill="#e2d6bc"/><path d="M186 202v-34q14 -16 28 0v34z" fill="#2a2a30"/>' +
      '<rect x="10" y="190" width="380" height="12" fill="#d6cbb2"/>' +
      /* flagpole */
      '<rect x="98" y="104" width="3" height="98" fill="#c8c8c8"/><g class="pv-flag"><rect x="101" y="106" width="30" height="18" fill="#fff"/><rect x="101" y="110" width="30" height="3" fill="' + CHIBLUE + '"/><rect x="101" y="117" width="30" height="3" fill="' + CHIBLUE + '"/>' + [108, 114, 120, 126].map(x => star(x, 115, 2.4, STAR)).join("") + '</g>' +
      tree(330, 214, .9, 0) +
      '<rect x="0" y="202" width="400" height="14" fill="#c4bcac"/><rect x="0" y="216" width="400" height="44" fill="#4c4c52"/><path d="M0 238h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 10"/>' +
      walker("", 214, GOLD) + walker("pv-w2", 214, PINK) + walker("pv-w3", 214, GREEN),
      sky("pv1", "#7ab4e4", "#eef2f0"));
  }

  /* 2. The Laramie State Bank Building, Chicago Ave and Laramie, Art Deco terracotta */
  function pvbank() {
    const pier = (x, h) => '<rect x="' + x + '" y="' + (190 - h) + '" width="14" height="' + h + '" fill="#e8dcc0"/><path d="M' + (x + 3) + ' ' + (196 - h) + 'h8M' + (x + 3) + ' ' + (202 - h) + 'h8" stroke="#c8b88e" stroke-width="2"/>';
    const panel = (x, y) => '<rect x="' + x + '" y="' + y + '" width="26" height="62" fill="#5f8a6a"/><path d="M' + (x + 13) + ' ' + (y + 6) + 'l9 14l-9 14l-9 -14z" fill="#c9a24a"/><path d="M' + (x + 13) + ' ' + (y + 36) + 'v20M' + (x + 5) + ' ' + (y + 46) + 'h16" stroke="#c9a24a" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pv2)"/>' +
      '<g fill="#8a95a6" opacity=".55"><rect x="0" y="120" width="40" height="80"/><rect x="360" y="110" width="40" height="90"/></g>' +
      '<rect x="44" y="70" width="312" height="122" fill="#efe4c8"/>' +
      '<rect x="40" y="62" width="320" height="10" fill="#d8c79c"/>' +
      [56, 118, 180, 242, 304].map(x => '<path d="M' + x + ' 62l20 -16l20 16z" fill="#e8dcc0" stroke="#c8b88e"/>').join("") +
      pier(44, 120) + pier(342, 120) + [104, 166, 228, 290].map(x => pier(x, 120)).join("") +
      panel(68, 84) + panel(130, 84) + panel(244, 84) + panel(306, 84) +
      /* entrance in the middle */
      '<rect x="182" y="84" width="44" height="106" fill="#efe4c8"/><path d="M188 190v-62q16 -18 32 0v62z" fill="#3a3226"/><path d="M188 128q16 -18 32 0" stroke="#c9a24a" stroke-width="3" fill="none"/>' +
      '<rect x="186" y="96" width="36" height="12" fill="#5f8a6a"/>' +
      '<text x="204" y="105" text-anchor="middle" ' + font + ' font-size="7" fill="#f2e2a8">1928</text>' +
      '<rect x="60" y="150" width="120" height="12" fill="#c9a24a" opacity=".85"/><text x="120" y="159" text-anchor="middle" ' + font + ' font-size="8" fill="#3a2a10">LARAMIE STATE BANK</text>' +
      '<g class="pv-glow"><rect x="68" y="166" width="26" height="20" fill="#ffe08a" opacity=".5"/><rect x="306" y="166" width="26" height="20" fill="#ffe08a" opacity=".5"/></g>' +
      '<rect x="0" y="190" width="400" height="14" fill="#c4bcac"/><rect x="0" y="204" width="400" height="56" fill="#4c4c52"/><path d="M0 232h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 10"/>' +
      /* the 66 Chicago bus */
      '<g class="pv-bus"><rect x="0" y="206" width="150" height="40" rx="5" fill="#e9ecef" stroke="#7a8088" stroke-width="2"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (10 + i * 22) + '" y="212" width="16" height="14" rx="2" fill="#2a3340"/>').join("") +
      '<rect x="0" y="232" width="150" height="4" fill="' + CHIBLUE + '"/><rect x="96" y="207" width="50" height="10" fill="#111"/><text x="121" y="215" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb02e">66 CHICAGO</text>' +
      '<circle cx="28" cy="248" r="7" fill="#111"/><circle cx="122" cy="248" r="7" fill="#111"/></g>' +
      '<rect x="160" y="18" width="80" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="32" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">CHICAGO AV</text>',
      sky("pv2", "#86b8e6", "#f6efe0"));
  }

  /* 3. Two Piece Tour Pack: a West Side chicken shack at night */
  function pvshack() {
    return svg(
      '<rect width="400" height="260" fill="url(#pv3)"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + (20 + i * 29) + '" cy="' + (16 + (i * 37) % 50) + '" r="1.2" fill="#fff" opacity=".6"/>').join("") +
      '<rect x="0" y="70" width="70" height="130" fill="#3a2a2e"/><rect x="330" y="80" width="70" height="120" fill="#2e2a3a"/>' +
      '<g fill="#ffd98a" class="pv-glow pv-g2"><rect x="14" y="90" width="12" height="14"/><rect x="40" y="120" width="12" height="14"/><rect x="346" y="100" width="12" height="14"/></g>' +
      /* shack */
      '<rect x="70" y="60" width="260" height="140" fill="#f2e6cf"/>' +
      '<rect x="78" y="66" width="244" height="40" rx="4" fill="#c8202a"/>' +
      '<g class="pv-blink"><text x="200" y="94" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="26" fill="' + GOLD + '" letter-spacing="2">CHICKEN &amp; FISH</text></g>' +
      '<rect x="70" y="108" width="260" height="10" fill="#c8202a"/>' + Array.from({ length: 13 }, (_, i) => '<rect x="' + (70 + i * 20) + '" y="108" width="10" height="10" fill="#fff"/>').join("") +
      /* window with the menu board */
      '<rect x="88" y="126" width="140" height="62" fill="#1c2430"/><rect x="88" y="126" width="140" height="62" fill="#ffcf6a" opacity=".2" class="pv-glow"/>' +
      '<rect x="98" y="132" width="78" height="30" rx="3" fill="#fff4d6"/><text x="137" y="145" text-anchor="middle" ' + font + ' font-size="9" fill="#c8202a">TWO PIECE</text><text x="137" y="157" text-anchor="middle" ' + font + ' font-size="8" fill="#3a2a10">+ FRIES</text>' +
      /* box of chicken */
      '<path d="M184 186l6 -26h30l6 26z" fill="#fff" stroke="#c8202a" stroke-width="2"/><ellipse cx="198" cy="160" rx="9" ry="6" fill="#c07a2a"/><ellipse cx="212" cy="158" rx="8" ry="6" fill="#b06a22"/><rect x="190" y="152" width="3" height="8" fill="#f4d48a"/><rect x="214" y="150" width="3" height="8" fill="#f4d48a"/>' +
      '<g class="pv-st"><path d="M200 146q-4 -6 1 -12" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/></g><g class="pv-st pv-st2"><path d="M212 146q-4 -6 1 -12" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/></g>' +
      /* door */
      '<rect x="248" y="126" width="56" height="74" fill="#5a3a2a"/><rect x="256" y="134" width="40" height="34" fill="#2a3340"/><circle cx="296" cy="174" r="2.5" fill="' + GOLD + '"/>' +
      '<rect x="256" y="140" width="40" height="10" fill="' + PINK + '" class="pv-blink"/><text x="276" y="148" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">OPEN</text>' +
      /* fryer stack on the roof */
      '<rect x="290" y="38" width="14" height="24" fill="#7a7a80"/><g class="pv-st"><circle cx="297" cy="32" r="6" fill="#ddd" opacity=".6"/></g><g class="pv-st pv-st3"><circle cx="300" cy="26" r="5" fill="#ddd" opacity=".5"/></g>' +
      '<rect x="0" y="200" width="400" height="12" fill="#8a8478"/><rect x="0" y="212" width="400" height="48" fill="#2c2c32"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 10" opacity=".7"/>' +
      walker("", 210, PINK) + walker("pv-w2", 210, GREEN),
      sky("pv3", "#0e0a24", "#3a2050"));
  }

  /* 4. W Chicago Ave and N Central Ave in Austin, the skyline far off to the east */
  function pvcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#pv4)"/>' +
      '<g fill="#2a2440"><rect x="150" y="60" width="14" height="80"/><rect x="166" y="40" width="20" height="100"/><rect x="170" y="26" width="3" height="16"/><rect x="180" y="26" width="3" height="16"/><rect x="188" y="74" width="16" height="66"/><path d="M206 140V52l10 -14l10 14v88z"/><rect x="228" y="84" width="18" height="56"/><rect x="248" y="66" width="12" height="74"/></g>' +
      '<g fill="#ffd98a">' + [170, 196, 232, 252].map((x, i) => '<rect class="pv-glow' + (i % 2 ? " pv-g2" : "") + '" x="' + x + '" y="' + (70 + i * 10) + '" width="4" height="4"/>').join("") + '</g>' +
      '<rect x="0" y="124" width="300" height="96" fill="#7a3e2e"/>' +
      Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (134 + r * 11) + 'h300" stroke="#5e2e22" stroke-width="1.5"/>').join("") +
      '<rect x="0" y="124" width="300" height="10" fill="' + CHIBLUE + '" opacity=".85"/>' + [40, 110, 180, 250].map(x => star(x, 129, 4, STAR)).join("") +
      tag("PIVOT GANG", 12, 186, 40, PINK, -7) + tag("PIVOT", 22, 214, 16, GREEN, -4) + tag("YCSWU", 216, 200, 20, GOLD, -3) + tag("WEST SIDE", 100, 212, 15, "#fff", -3) +
      '<g class="pv-dr"><rect x="44" y="186" width="3" height="10" fill="' + PINK + '"/></g><g class="pv-dr" style="animation-delay:-.9s"><rect x="132" y="184" width="3" height="10" fill="' + PINK + '"/></g>' +
      '<g class="pv-sp"><circle cx="280" cy="148" r="3" fill="#fff" opacity=".7"/></g><g class="pv-sp pv-sp2"><circle cx="286" cy="142" r="2" fill="#fff" opacity=".6"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#4c4c52"/><rect x="0" y="216" width="400" height="6" fill="#b9b3a6"/>' +
      '<g class="pv-car"><rect x="0" y="226" width="60" height="16" rx="5" fill="' + GREEN + '"/><rect x="12" y="220" width="32" height="10" rx="3" fill="#0a6a2a"/><circle cx="12" cy="244" r="5" fill="#111"/><circle cx="48" cy="244" r="5" fill="#111"/></g>' +
      '<rect x="336" y="90" width="6" height="130" fill="#2f2f2f"/>' + sign(290, 92, 104, "W Chicago Ave") + sign(298, 118, 88, "N Central Ave"),
      sky("pv4", "#1c1c3e", "#e86a9a"));
  }

  window.SCENES = { pvstop: pvstop, pvcrane: pvcrane, pvbank: pvbank, pvshack: pvshack, pvcorner: pvcorner };
})();
