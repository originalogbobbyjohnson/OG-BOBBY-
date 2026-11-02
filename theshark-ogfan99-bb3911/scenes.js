/* Belmont / Arthur Avenue opening scenes for The Shark game. Each one is a small animated SVG, 400 x 260.
   Fordham Rd under the Grand Concourse, the Arthur Avenue Retail Market, Our Lady of Mount Carmel's bell tower,
   the limestone face of Yankee Stadium with the 4 on the el, and the corner of E 187th St and Arthur Ave. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes steam{0%{transform:translateY(0);opacity:0}30%{opacity:.8}100%{transform:translateY(-34px);opacity:0}}' +
    '.stm{animation:steam 2.6s ease-out infinite}.stm2{animation-delay:.9s}.stm3{animation-delay:1.7s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes sway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:50% 0;animation:sway 2.6s ease-in-out infinite}.flag2{animation-delay:-1.3s}' +
    '@keyframes ring{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}' +
    '.bell{transform-box:fill-box;transform-origin:50% 0;animation:ring 1.6s ease-in-out infinite}' +
    '@keyframes beam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}' +
    '.beam{transform-box:fill-box;transform-origin:50% 100%;animation:beam 5s ease-in-out infinite}.beam2{animation-delay:-2.5s}' +
    '@keyframes elrun{from{transform:translateX(-260px)}to{transform:translateX(420px)}}' +
    '.el4{animation:elrun 6s linear infinite}' +
    '@keyframes circle{0%,100%{transform:translateX(0)}50%{transform:translateX(70px)}}' +
    '.fin{animation:circle 4s ease-in-out infinite}' +
    '@keyframes glint{0%,100%{opacity:.2}50%{opacity:1}}' +
    '.gl{animation:glint 1.8s infinite}.gl2{animation-delay:.9s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* the shark fin, drawn with its base at (x, y) */
  const finPath = (x, y, s) => 'M' + x + ' ' + y + 'q' + (6 * s) + ' -' + (30 * s) + ' ' + (30 * s) + ' -' + (38 * s) + 'q-' + (8 * s) + ' ' + (16 * s) + ' -' + (2 * s) + ' ' + (38 * s) + 'z';
  const WHITE = "#f4f1ea", RED = "#d62828", GREEN = "#2e9e4f", STEEL = "#9fb3c8";

  /* 1. Fordham Rd from the street: the stair down to the B and D in the Grand Concourse median, the Art Deco apartment houses, the Bx12 heading east to Belmont, a fin circling in the puddle */
  function train() {
    const deco = (x, w, top, c) => { let b = '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (176 - top) + '" fill="' + c + '"/><path d="M' + x + ' ' + (top + 6) + 'h' + w + '" stroke="#7a5a3a" stroke-width="4"/>';
      for (let y = top + 16; y < 166; y += 18) for (let i = 8; i < w - 10; i += 18) b += '<rect class="' + ((i + y) % 4 ? "" : "flk") + '" x="' + (x + i) + '" y="' + y + '" width="9" height="11" fill="' + ((i * 3 + y) % 5 ? "#3a3f4a" : "#ffe0a0") + '"/>';
      return b; };
    let globes = [96, 304].map((x, i) => '<rect x="' + (x - 3) + '" y="150" width="6" height="40" fill="#1d2329"/><circle class="flk' + (i ? " flk2" : "") + '" cx="' + x + '" cy="146" r="8" fill="#3fbf6a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' +
      deco(0, 130, 60, "#d9a36a") + deco(270, 130, 50, "#c98a5a") + deco(130, 140, 84, "#e2c69a") +
      '<rect x="0" y="176" width="400" height="84" fill="#3a3d43"/><rect x="0" y="176" width="400" height="10" fill="#9a968c"/>' +
      /* the median entrance */
      '<rect x="90" y="186" width="220" height="34" fill="#6a9a4a"/><path d="M120 220l20-34h120l20 34z" fill="#2c4236"/>' + [0, 1, 2].map(i => '<rect x="' + (146 + i * 6) + '" y="' + (194 + i * 8) + '" width="' + (108 - i * 12) + '" height="3" fill="#8a857a"/>').join("") + globes +
      '<rect x="110" y="110" width="180" height="32" rx="4" fill="#111"/><rect x="110" y="110" width="180" height="4" fill="#fff"/>' +
      '<text x="122" y="134" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Fordham Rd</text>' + bullet(244, 127, "B", "#ff6319") + bullet(270, 127, "D", "#ff6319") +
      '<rect x="8" y="12" width="120" height="20" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="68" y="26" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">Grand Concourse</text>' +
      /* the bus east toward Arthur Av */
      '<g class="el4"><rect x="0" y="222" width="120" height="30" rx="5" fill="#e9ecef" stroke="#6b7280" stroke-width="1.5"/><rect x="0" y="240" width="120" height="4" fill="#0039a6"/><rect x="6" y="226" width="96" height="10" fill="#2a3440"/>' +
      '<text x="60" y="234" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7" fill="#ffd27a">Bx12 · ARTHUR AV</text><circle cx="22" cy="252" r="5" fill="#111"/><circle cx="98" cy="252" r="5" fill="#111"/></g>' +
      '<ellipse cx="340" cy="232" rx="40" ry="8" fill="#5a6a7a" opacity=".6"/><g class="fin"><path fill="' + STEEL + '" stroke="#000" stroke-width="2" d="' + finPath(330, 232, 0.5) + '"/></g>' +
      tag("SHARK BX", 268, 100, 24, WHITE, -6) + tag("BELMONT", 14, 172, 20, RED, -4),
      sky("g1", "#8fc3ea", "#f6d9a6"));
  }

  /* 2. Arthur Avenue: the Retail Market's brick front, red-white-green banners over the street, espresso steaming */
  function market() {
    let brick = "";
    for (let y = 40; y < 196; y += 12) for (let x = (y / 12) % 2 ? -18 : 0; x < 400; x += 36) brick += '<rect x="' + x + '" y="' + y + '" width="34" height="10" fill="#8a3b26"/>';
    let flags = "", lights = "";
    const fc = [GREEN, WHITE, RED];
    for (let i = 0; i < 13; i++) {
      const x = 8 + i * 30;
      flags += '<path class="flag' + (i % 2 ? " flag2" : "") + '" d="M' + x + ' ' + (14 + Math.abs(6 - i) * 0) + 'h16l-8 16z" fill="' + fc[i % 3] + '" stroke="#000" stroke-width=".6"/>';
      lights += '<circle class="flk' + (i % 2 ? " flk2" : "") + '" cx="' + (x + 23) + '" cy="11" r="2.2" fill="#ffe7a8"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<rect x="0" y="40" width="400" height="160" fill="#6d2c1c"/>' + brick +
      '<path d="M0 12q200 14 400 0" stroke="#222" stroke-width="1.5" fill="none"/>' + flags + lights +
      /* the market sign */
      '<rect x="40" y="52" width="320" height="36" rx="3" fill="#123d2a" stroke="#d8b860" stroke-width="2"/>' +
      '<text x="200" y="70" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="2" textLength="290" lengthAdjust="spacingAndGlyphs" fill="' + WHITE + '">ARTHUR AVENUE RETAIL MARKET</text>' +
      '<text x="200" y="83" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="3" fill="#d8b860">BELMONT · THE BRONX · SINCE 1940</text>' +
      /* doors + windows lit warm, green awnings */
      '<rect x="40" y="108" width="90" height="70" fill="#f2c879" opacity=".85"/><rect x="155" y="104" width="90" height="94" fill="#f7d896" opacity=".9"/><rect x="270" y="108" width="90" height="70" fill="#f2c879" opacity=".85"/>' +
      '<rect x="198" y="104" width="4" height="94" fill="#3b2418"/>' +
      [40, 155, 270].map(x => '<path d="M' + (x - 6) + ' 96h102l-8 14h-86z" fill="' + GREEN + '"/><path d="M' + (x - 6) + ' 96h102" stroke="' + WHITE + '" stroke-width="2"/>').join("") +
      /* hanging salami + cheese in the windows */
      '<path d="M60 112v10M74 112v14M88 112v10" stroke="#3b2418" stroke-width="1"/><rect x="56" y="122" width="8" height="22" rx="4" fill="#8a2a1f"/><rect x="70" y="126" width="8" height="24" rx="4" fill="#9c3a22"/><rect x="84" y="122" width="8" height="20" rx="4" fill="#8a2a1f"/>' +
      '<circle cx="300" cy="150" r="14" fill="#f2d16b" stroke="#b08a2a" stroke-width="2"/><circle cx="330" cy="156" r="10" fill="#f2d16b" stroke="#b08a2a" stroke-width="2"/>' +
      /* sidewalk, café table, espresso */
      '<rect x="0" y="198" width="400" height="62" fill="#3a3a3f"/><rect x="0" y="198" width="400" height="4" fill="#5a5a60"/>' +
      '<ellipse cx="200" cy="226" rx="46" ry="8" fill="#1a1a1e"/><rect x="196" y="226" width="8" height="30" fill="#1a1a1e"/>' +
      '<path d="M188 208h24v8q0 10-12 10t-12-10z" fill="' + WHITE + '"/><path d="M212 211q7 0 7 4t-7 4" fill="none" stroke="' + WHITE + '" stroke-width="3"/><ellipse cx="200" cy="225" rx="18" ry="3" fill="#cfd4dc"/>' +
      '<path class="stm" d="M194 204q-5-7 0-13t0-13" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>' +
      '<path class="stm stm2" d="M201 204q-5-7 0-13t0-13" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>' +
      '<path class="stm stm3" d="M208 204q-5-7 0-13t0-13" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>',
      sky("g2", "#0b1a2e", "#24405e"));
  }

  /* 3. Our Lady of Mount Carmel on E 187th St: buff-brick church and campanile, the bell ringing under the moon */
  function church() {
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(26) +
      '<circle cx="62" cy="48" r="22" fill="#f4f1ea"/><circle cx="72" cy="42" r="22" fill="#0b1a2e" opacity=".22"/>' +
      /* the bell tower */
      '<path d="M266 222V58h56v164z" fill="#d6bf8f"/>' +
      '<path d="M260 58l34-30 34 30z" fill="#8e5a3a"/><rect x="292" y="12" width="4" height="18" fill="#e8d6a8"/><rect x="286" y="17" width="16" height="4" fill="#e8d6a8"/>' +
      '<path d="M276 110v-28a18 18 0 0 1 36 0v28z" fill="#1a1410"/>' +
      '<g class="bell"><rect x="292" y="74" width="4" height="6" fill="#7a5512"/><path d="M282 100q0-20 12-20t12 20l4 4h-32z" fill="#d8a43a" stroke="#7a5512" stroke-width="1.5"/><circle cx="294" cy="106" r="3" fill="#7a5512"/></g>' +
      '<path d="M270 130h48M270 170h48" stroke="#b89f73" stroke-width="3"/>' +
      '<rect x="282" y="140" width="10" height="22" rx="5" fill="#2a3a5a"/><rect x="296" y="140" width="10" height="22" rx="5" fill="#2a3a5a"/>' +
      /* the church front */
      '<path d="M40 222V110l110-50 110 50v112z" fill="#e2cc9c"/>' +
      '<path d="M40 110l110-50 110 50" fill="none" stroke="#b89f73" stroke-width="4"/>' +
      '<rect x="142" y="54" width="16" height="4" fill="#e8d6a8"/><rect x="148" y="40" width="4" height="22" fill="#e8d6a8"/>' +
      /* rose window */
      '<circle cx="150" cy="118" r="20" fill="#1f3c78" stroke="#b89f73" stroke-width="4"/>' +
      [0, 45, 90, 135].map(a => '<path d="M130 118h40" stroke="#d8a43a" stroke-width="2" transform="rotate(' + a + ' 150 118)"/>').join("") +
      '<circle class="gl" cx="150" cy="118" r="6" fill="' + RED + '"/>' +
      /* arched doors and side windows */
      '<path d="M128 222v-46a22 22 0 0 1 44 0v46z" fill="#5a3420" stroke="#b89f73" stroke-width="3"/><path d="M150 166v56" stroke="#3a2010" stroke-width="2"/>' +
      '<path d="M66 196v-36a10 10 0 0 1 20 0v36z" fill="#f2c879" class="gl gl2"/><path d="M214 196v-36a10 10 0 0 1 20 0v36z" fill="#f2c879" class="gl gl2"/>' +
      '<rect x="0" y="222" width="400" height="38" fill="#26262b"/><rect x="0" y="222" width="400" height="4" fill="#4a4a50"/>' +
      '<rect x="76" y="14" width="168" height="26" rx="4" fill="#0e1a2b" stroke="#d8a43a" stroke-width="1.5"/>' +
      '<text x="160" y="32" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="1" textLength="150" lengthAdjust="spacingAndGlyphs" fill="' + WHITE + '">OUR LADY OF MOUNT CARMEL</text>',
      sky("g3", "#050c18", "#1e3554"));
  }

  /* 4. Ciccarone Park at Arthur Av and E 188th: Belmont's little park, the bocce courts, the old-timers rolling, the Italian flag on the pole, the shade trees */
  function stadium() {
    const man = (x, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="150" r="6" fill="#d8c8b0"/><rect x="' + (x - 7) + '" y="144" width="14" height="3" fill="#5a4a3a"/><path d="M' + (x - 8) + ' 182v-24q0-6 8-6t8 6v24z" fill="' + c + '"/><path d="M' + (x - 4) + ' 182v14M' + (x + 4) + ' 182v14" stroke="#3a3a44" stroke-width="3"/></g>';
    const tree = x => '<rect x="' + (x - 3) + '" y="80" width="6" height="60" fill="#4a3426"/><g class="flag"><circle cx="' + x + '" cy="70" r="26" fill="#3f7a3a"/><circle cx="' + (x - 18) + '" cy="82" r="16" fill="#2f6a34"/><circle cx="' + (x + 18) + '" cy="80" r="16" fill="#2f6a34"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<rect x="0" y="80" width="400" height="70" fill="#8a4a34"/>' + (function () { let w = ""; for (let x = 10; x < 400; x += 26) w += '<rect x="' + x + '" y="92" width="10" height="14" fill="#3a2a22"/><rect x="' + x + '" y="118" width="10" height="14" fill="#3a2a22"/>'; return w; })() +
      tree(40) + tree(360) +
      /* flag pole with the Italian flag */
      '<rect x="300" y="24" width="3" height="170" fill="#ccc"/><g class="flag" style="transform-origin:0 50%"><rect x="303" y="26" width="14" height="28" fill="' + GREEN + '"/><rect x="317" y="26" width="14" height="28" fill="#fff"/><rect x="331" y="26" width="14" height="28" fill="' + RED + '"/></g>' +
      /* the bocce court */
      '<rect x="0" y="150" width="400" height="110" fill="#6a9a4a"/><rect x="40" y="190" width="320" height="50" fill="#c9a874" stroke="#6b4a2a" stroke-width="5"/>' +
      '<circle cx="290" cy="216" r="3" fill="#fff"/><circle cx="270" cy="210" r="6" fill="' + RED + '"/><circle cx="300" cy="226" r="6" fill="' + GREEN + '"/>' +
      '<g class="el4" style="animation-duration:4s"><circle cx="0" cy="216" r="6" fill="' + RED + '"/></g>' +
      man(70, "#4a5a6a") + man(110, WHITE, "gl") + man(352, "#6a3a3a") +
      '<rect x="120" y="14" width="160" height="36" rx="3" fill="#1f7a3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="200" y="30" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">CICCARONE PARK</text>' +
      '<text x="200" y="43" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff">ARTHUR AV · E 188 ST</text>' +
      tag("THE SHARK", 150, 182, 22, WHITE, -5),
      sky("g4", "#7ab8e8", "#f6e2b8"));
  }

  /* 5. E 187th St and Arthur Ave: street signs, streetlight, the tag wall, a fin circling in the puddle */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(14) +
      /* tenements behind */
      '<rect x="0" y="40" width="120" height="180" fill="#2a1e1a"/><rect x="260" y="56" width="140" height="164" fill="#251b18"/>' +
      [[14, 56], [48, 56], [82, 56], [14, 92], [82, 92], [274, 72], [310, 72], [346, 72], [310, 108]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="18" height="22" fill="#f2c879" opacity=".75"/>').join("") +
      /* wall with the tags */
      '<rect x="20" y="96" width="236" height="124" fill="#3a3f47"/>' +
      '<path fill="' + STEEL + '" stroke="#000" stroke-width="2.5" d="' + finPath(196, 212, 1.0) + '"/>' +
      tag("THE SHARK", 30, 170, 34, WHITE, -7) + tag("BELMONT", 44, 210, 26, RED, -3) +
      '<rect x="20" y="96" width="236" height="6" fill="' + GREEN + '"/><rect x="20" y="102" width="236" height="6" fill="' + WHITE + '"/><rect x="20" y="108" width="236" height="6" fill="' + RED + '"/>' +
      /* streetlight + signs */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="262" y="88" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">E 187 St</text>' +
      '<rect x="262" y="110" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Arthur Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/>' +
      /* the puddle and the fin */
      '<ellipse cx="190" cy="242" rx="70" ry="9" fill="#24405e" opacity=".9"/>' +
      '<clipPath id="pd"><rect x="110" y="200" width="160" height="42"/></clipPath>' +
      '<g clip-path="url(#pd)"><g class="fin"><path fill="' + STEEL + '" stroke="#0e1a2b" stroke-width="1.5" d="' + finPath(130, 242, 0.55) + '"/>' +
        '<path d="M124 242q14-4 28 0" stroke="#dff6ff" stroke-width="1.5" fill="none"/></g></g>',
      sky("g5", "#0b1426", "#22344f"));
  }

  window.SCENES = { train, market, church, stadium, corner };
})();
