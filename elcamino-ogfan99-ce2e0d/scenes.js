/* elcamino scenes (Regions tab: Upstate New York; Buffalo's East Side: "East side Buffalo" on Two-Tone Joint). 400 x 260 SVGs.
   CSS classes prefixed ec- (the page's own anim-train is kept on the train).
   0 Summer-Best, the underground Metro Rail stop under Main St at the edge of the East Side: the silver car pulling in.
   1 Walking on Water: the 1833 Buffalo Main Lighthouse (pale limestone, black iron lantern) at the Erie Basin on Lake Erie, its beam sweeping, waves rolling.
   2 Sunday church (he learned from reverends, "always with my momma in church"): St. Louis Church on Main St, red Medina sandstone Gothic with its open stone spire, bells swinging.
   3 Baton Rouge, where he lived from age nine ("Down South"): the Louisiana State Capitol's pale Art Deco limestone tower over its long front steps, flags moving.
   4 Fillmore Ave & Best St: green signs, ELCAMINO tagged on brick, the gold dome downtown glowing on the skyline behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ecflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.ec-flk{animation:ecflick 2.4s infinite}.ec-flk2{animation-delay:.8s}' +
    '@keyframes ecwave{0%,100%{transform:translateX(0)}50%{transform:translateX(14px)}}.ec-wv{animation:ecwave 3.2s ease-in-out infinite}.ec-wv2{animation-delay:-1.6s}' +
    '@keyframes ecbeam{0%,100%{opacity:.15}50%{opacity:.75}}.ec-beam{animation:ecbeam 3s ease-in-out infinite}.ec-beam2{animation-delay:-1.5s}' +
    '@keyframes ecgull{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.ec-gull{animation:ecgull 13s linear infinite}.ec-gull2{animation-delay:-6s;animation-duration:16s}' +
    '@keyframes ecbell{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.ec-bell{transform-box:fill-box;transform-origin:50% 0;animation:ecbell 1.6s ease-in-out infinite}.ec-bell2{animation-delay:-.8s}' +
    '@keyframes ecglow{0%,100%{opacity:.5}50%{opacity:1}}.ec-glow{animation:ecglow 2.6s ease-in-out infinite}.ec-g2{animation-delay:-1.3s}' +
    '@keyframes ecflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-9deg)}}.ec-flag{transform-box:fill-box;transform-origin:0 50%;animation:ecflag 1.5s ease-in-out infinite}' +
    '@keyframes ecspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ec-sp{animation:ecspray 1.4s ease-out infinite}.ec-sp2{animation-delay:.45s}' +
    '@keyframes ecwalk{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.ec-walk{animation:ecwalk 15s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="' + (txt.length * 9 + 16) + '" height="20" rx="10" fill="' + color + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + (txt.length * 9 + 16) / 2) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const NFTA = "#1f4e79", GOLD = "#e9c46a", PURP = "#8e5bd6", RED = "#e2574c", LIME = "#e8dcc4";

  /* 0. Summer-Best Metro Rail, underground under Main St: tiled vault, black sign, the silver car sliding in */
  function ecstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 42) + '" y="124" width="28" height="22" rx="3" fill="#cfe6f7" opacity=".9"/>').join("");
    const tr = '<g class="anim-train"><rect x="16" y="112" width="324" height="72" rx="10" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
      '<rect x="16" y="154" width="324" height="7" fill="' + NFTA + '"/><rect x="16" y="163" width="324" height="3" fill="' + GOLD + '"/>' +
      '<rect x="318" y="120" width="18" height="32" rx="3" fill="#2b3340"/><circle cx="332" cy="174" r="4" fill="#fff6c2"/>' +
      '<rect x="150" y="116" width="24" height="62" rx="2" fill="none" stroke="#6b7280" stroke-width="2"/></g>';
    const arch = Array.from({ length: 6 }, (_, i) => '<path d="M' + (i * 80 - 20) + ' 100Q' + (i * 80 + 20) + ' 10 ' + (i * 80 + 60) + ' 100" fill="none" stroke="#a9a196" stroke-width="3"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#cfc6b8"/>' + arch +
      '<rect x="0" y="0" width="400" height="14" fill="#2a2620"/>' + [50, 180, 310].map((x, i) => '<rect class="ec-flk' + (i === 1 ? " ec-flk2" : "") + '" x="' + x + '" y="4" width="50" height="5" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="98" width="400" height="10" fill="' + NFTA + '"/><rect x="0" y="108" width="400" height="80" fill="#2a2e36"/>' + tr +
      '<rect x="0" y="186" width="400" height="8" fill="#f2c200"/><rect x="0" y="194" width="400" height="66" fill="#8a8680"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="194" width="40" height="66" fill="none" stroke="#7a766f" stroke-width="1"/>').join("") +
      '<rect x="62" y="28" width="276" height="56" rx="4" fill="#111"/><rect x="62" y="28" width="276" height="4" fill="#fff"/>' +
      '<text x="82" y="64" ' + font + ' font-size="26" fill="#fff">Summer-Best</text>' + badge(282, 58, "MR", NFTA) +
      '<text x="84" y="78" ' + font + ' font-size="8" fill="#9cc3e6" letter-spacing="2">METRO RAIL  ·  MAIN ST</text>' +
      [10, 390].map(x => '<rect x="' + (x - 8) + '" y="14" width="16" height="174" fill="#6a6258"/>').join("") +
      '<g class="ec-walk"><circle cx="0" cy="214" r="5" fill="#3a3630"/><rect x="-5" y="219" width="10" height="20" rx="3" fill="' + PURP + '"/></g>',
      "");
  }

  /* 1. Walking on Water: Buffalo Main Lighthouse at the Erie Basin, Lake Erie */
  function eclighthouse() {
    const waves = n => Array.from({ length: n }, (_, i) => '<path class="ec-wv' + (i % 2 ? " ec-wv2" : "") + '" d="M' + (-30 + (i % 4) * 110) + ' ' + (176 + Math.floor(i / 4) * 18) + 'q14 -8 28 0t28 0t28 0" fill="none" stroke="#bfe3f2" stroke-width="2.5" opacity=".7"/>').join("");
    const gull = (cls, y) => '<path class="' + cls + '" d="M0 ' + y + 'q6 -6 12 0q6 -6 12 0" fill="none" stroke="#fff" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ec1)"/>' +
      '<circle cx="320" cy="60" r="22" fill="#ffe3a0" opacity=".9"/>' +
      '<rect x="0" y="160" width="400" height="100" fill="#2d6f92"/>' + waves(12) +
      '<path d="M0 162h400" stroke="#9fd0e6" stroke-width="2"/>' +
      /* breakwater + pier */
      '<rect x="90" y="150" width="200" height="14" fill="#8d8778"/><rect x="90" y="146" width="200" height="5" fill="#a9a393"/>' +
      /* lighthouse: octagonal limestone tower, black lantern */
      '<path d="M170 150L176 66h28l6 84z" fill="' + LIME + '" stroke="#8f846f" stroke-width="1.5"/>' +
      '<path d="M182 150L184 66M196 150L194 66" stroke="#c8bba1" stroke-width="1"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (172 + i * 0.3) + ' ' + (140 - i * 16) + 'h' + (36 - i * 1.4) + '" stroke="#cdbf9f" stroke-width="1"/>').join("") +
      '<rect x="186" y="122" width="8" height="14" rx="3" fill="#3a3a3a"/><rect x="187" y="96" width="6" height="9" rx="2" fill="#3a3a3a"/>' +
      '<rect x="170" y="60" width="40" height="7" fill="#1d1d1d"/><path d="M170 60h40" stroke="#1d1d1d" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (171 + i * 7.6) + ' 60v-6" stroke="#1d1d1d" stroke-width="1.5"/>').join("") +
      '<rect x="178" y="38" width="24" height="18" fill="#ffe7a0" class="ec-glow"/><path d="M178 38h24v18h-24zM186 38v18M194 38v18" fill="none" stroke="#1d1d1d" stroke-width="2"/>' +
      '<path d="M176 38L190 24L204 38z" fill="#1d1d1d"/><path d="M190 24v-6" stroke="#1d1d1d" stroke-width="2"/><circle cx="190" cy="16" r="2.5" fill="#1d1d1d"/>' +
      '<path class="ec-beam" d="M202 46L400 20L400 70z" fill="#fff3c4"/><path class="ec-beam ec-beam2" d="M178 46L0 22L0 72z" fill="#fff3c4"/>' +
      /* ripples like footsteps across the water */
      [0, 1, 2, 3].map(i => '<ellipse class="ec-glow' + (i % 2 ? " ec-g2" : "") + '" cx="' + (70 + i * 34) + '" cy="' + (238 - i * 14) + '" rx="10" ry="3" fill="none" stroke="#fff" stroke-width="2"/>').join("") +
      gull("ec-gull", 90) + gull("ec-gull ec-gull2", 110),
      sky("ec1", "#f0a868", "#f7d9a8"));
  }

  /* 2. St. Louis Church on Main St: red Medina sandstone Gothic front, the open stone spire, rose window glowing, bells swinging */
  function ecchurch() {
    const SAND = "#9e4a35", SAND2 = "#b8604a", DARK = "#6e3022";
    const spire = Array.from({ length: 7 }, (_, i) => '<path d="M' + (186 + i * 2) + ' ' + (110 - i * 12) + 'h' + (28 - i * 4) + '" stroke="#f0d9c0" stroke-width="1.2" opacity=".55"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ec2)"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5a5a60"/><rect x="0" y="192" width="400" height="6" fill="#8b8b92"/>' +
      /* side wings */
      '<rect x="70" y="120" width="96" height="76" fill="' + SAND + '"/><rect x="234" y="120" width="96" height="76" fill="' + SAND + '"/>' +
      '<path d="M70 120L118 92L166 120z" fill="' + DARK + '"/><path d="M234 120L282 92L330 120z" fill="' + DARK + '"/>' +
      [86, 130, 250, 294].map((x, i) => '<path d="M' + x + ' 180v-34q10 -16 20 0v34z" fill="#3d1f4f"/><path class="ec-glow' + (i % 2 ? " ec-g2" : "") + '" d="M' + (x + 3) + ' 178v-30q7 -11 14 0v30z" fill="' + PURP + '" opacity=".8"/>').join("") +
      /* central tower */
      '<rect x="166" y="104" width="68" height="92" fill="' + SAND2 + '"/><rect x="166" y="104" width="68" height="6" fill="' + DARK + '"/>' +
      '<circle cx="200" cy="138" r="18" fill="#3d1f4f"/><circle class="ec-glow" cx="200" cy="138" r="14" fill="' + GOLD + '" opacity=".85"/>' +
      Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return '<path d="M200 138L' + (200 + 14 * Math.cos(a)).toFixed(1) + ' ' + (138 + 14 * Math.sin(a)).toFixed(1) + '" stroke="' + RED + '" stroke-width="1.6"/>'; }).join("") +
      '<path d="M186 196v-28q14 -20 28 0v28z" fill="' + DARK + '"/><path d="M200 196v-30" stroke="#3a160c" stroke-width="1.5"/>' +
      /* belfry with bells */
      '<rect x="174" y="80" width="52" height="24" fill="' + SAND + '"/><path d="M180 104v-16q6 -8 12 0v16zM208 104v-16q6 -8 12 0v16z" fill="#2a120a"/>' +
      '<path class="ec-bell" d="M181 90q5 -4 10 0v8h-10z" fill="' + GOLD + '"/><path class="ec-bell ec-bell2" d="M209 90q5 -4 10 0v8h-10z" fill="' + GOLD + '"/>' +
      /* open Gothic spire */
      '<path d="M174 80L200 6L226 80z" fill="' + SAND2 + '" stroke="' + DARK + '" stroke-width="2"/>' + spire +
      '<path d="M200 6v-8M196 -1h8" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<path d="M166 104l-6 -14l6 -4zM234 104l6 -14l-6 -4z" fill="' + DARK + '"/>' +
      /* steps */
      '<rect x="150" y="196" width="100" height="6" fill="#a59e95"/><rect x="140" y="202" width="120" height="6" fill="#958e85"/>',
      sky("ec2", "#2b2350", "#d79a74"));
  }

  /* 3. Baton Rouge: the Louisiana State Capitol's Art Deco limestone tower over its long front steps */
  function eccapitol() {
    const STONE = "#e6dccb", ST2 = "#cfc2aa", SH = "#b3a58a";
    const winCols = Array.from({ length: 5 }, (_, i) => '<rect x="' + (176 + i * 10) + '" y="70" width="4" height="96" fill="' + SH + '"/>').join("");
    const oak = x => '<rect x="' + (x - 3) + '" y="176" width="6" height="26" fill="#5a4030"/><ellipse cx="' + x + '" cy="172" rx="28" ry="16" fill="#3f6b3a"/><path d="M' + (x - 18) + ' 180v12M' + (x + 14) + ' 182v14" stroke="#9aa58a" stroke-width="2" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ec3)"/>' +
      '<circle cx="70" cy="56" r="20" fill="#fff1c2" opacity=".9"/>' +
      /* wings */
      '<rect x="96" y="150" width="208" height="44" fill="' + ST2 + '"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (104 + i * 17) + '" y="158" width="8" height="28" fill="' + SH + '"/>').join("") +
      /* tower */
      '<rect x="166" y="64" width="68" height="104" fill="' + STONE + '"/>' + winCols +
      '<rect x="172" y="48" width="56" height="18" fill="' + STONE + '"/><rect x="180" y="34" width="40" height="16" fill="' + STONE + '"/>' +
      '<rect x="188" y="22" width="24" height="14" fill="' + ST2 + '"/><path d="M188 22h24v14h-24z" fill="none" stroke="' + SH + '" stroke-width="1"/>' +
      '<rect class="ec-glow" x="194" y="25" width="12" height="9" fill="#ffe7a0"/><path d="M194 22L200 10L206 22z" fill="' + ST2 + '"/>' +
      [172, 228].map(x => '<path d="M' + x + ' 66v-4" stroke="' + SH + '" stroke-width="3"/>').join("") +
      /* flags */
      '<path d="M120 150v-36M280 150v-36" stroke="#555" stroke-width="2"/>' +
      '<g class="ec-flag"><rect x="121" y="114" width="22" height="13" fill="#2b4fa0"/><rect x="121" y="114" width="22" height="13" fill="none" stroke="#fff" stroke-width=".6"/></g>' +
      '<g class="ec-flag"><rect x="281" y="114" width="22" height="7" fill="#b8322c"/><rect x="281" y="121" width="22" height="6" fill="#fff"/><rect x="281" y="114" width="9" height="7" fill="#2b3a7a"/></g>' +
      /* the long front steps */
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (160 - i * 6) + '" y="' + (194 + i * 6) + '" width="' + (80 + i * 12) + '" height="6" fill="' + (i % 2 ? "#d9cfbd" : "#cfc4b0") + '"/>').join("") +
      '<rect x="0" y="194" width="114" height="66" fill="#5f8a4a"/><rect x="286" y="194" width="114" height="66" fill="#5f8a4a"/>' +
      oak(46) + oak(354) +
      '<g class="ec-gull"><path d="M0 70q6 -6 12 0q6 -6 12 0" fill="none" stroke="#3a3a3a" stroke-width="2"/></g>',
      sky("ec3", "#7cc0e8", "#f4e2b8"));
  }

  /* 4. Fillmore Ave & Best St: green signs, ELCAMINO tagged, the gold dome on the skyline behind */
  function eccorner() {
    const bricks = Array.from({ length: 12 }, (_, r) => Array.from({ length: 9 }, (_, c) => '<rect x="' + (150 + c * 28 + (r % 2 ? 14 : 0)) + '" y="' + (104 + r * 11) + '" width="26" height="9" fill="none" stroke="#4f2a1f" stroke-width="1"/>').join("")).join("");
    const bldg = (x, y, w, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (160 - y) + '" fill="' + c + '"/>' + Array.from({ length: Math.floor((150 - y) / 12) }, (_, i) => '<rect class="ec-glow' + (i % 2 ? " ec-g2" : "") + '" x="' + (x + 4) + '" y="' + (y + 6 + i * 12) + '" width="' + (w - 8) + '" height="3" fill="#ffe7a8" opacity=".6"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ec4)"/>' +
      bldg(14, 92, 30, "#2c3346") + bldg(48, 70, 22, "#343c52") + bldg(116, 84, 26, "#2c3346") +
      /* the gold-domed bank downtown */
      '<rect x="70" y="96" width="44" height="64" fill="#4a4a58"/>' + [76, 86, 96, 106].map(x => '<rect x="' + x + '" y="104" width="4" height="50" fill="#d8d2c4" opacity=".7"/>').join("") +
      '<rect x="74" y="88" width="36" height="8" fill="#5a5a68"/><path class="ec-glow" d="M76 88q16 -34 32 0z" fill="' + GOLD + '"/><path d="M92 54v-6" stroke="' + GOLD + '" stroke-width="2"/><circle cx="92" cy="46" r="2.5" fill="' + GOLD + '"/>' +
      '<rect x="150" y="104" width="250" height="132" fill="#7a3a2a"/>' + bricks +
      tag("ELCAMINO", 160, 182, 42, GOLD, -6) + tag("FIVE-EVER", 196, 216, 20, PURP, -4) + tag("MINO", 166, 132, 20, RED, -3) +
      '<rect class="ec-sp" x="360" y="150" width="4" height="4" fill="' + GOLD + '"/><rect class="ec-sp ec-sp2" x="368" y="160" width="3" height="3" fill="' + PURP + '"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#4c4f55"/><rect x="0" y="232" width="400" height="5" fill="#8e9196"/>' +
      '<rect x="56" y="140" width="5" height="96" fill="#5a5f66"/>' + sign(6, 134, 106, "Fillmore Ave") + sign(14, 158, 90, "Best St"),
      sky("ec4", "#1c1733", "#b46a52"));
  }

  window.SCENES = { ecstation: ecstation, eclighthouse: eclighthouse, ecchurch: ecchurch, eccapitol: eccapitol, eccorner: eccorner };
})();
