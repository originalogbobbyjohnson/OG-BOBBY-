/* Styles P game (NYC map, Westchester: Yonkers, where he moved as a kid; born in Corona, Queens).
   1. Metro-North Hudson Line pulling into Glenwood, right on the river, the Palisades across.
   2. His juice bar on Nepperhan Av in Yonkers (opened 2014 with Jadakiss): fruit in the window, the blender spinning, green juice.
   3. Hammerstein Ballroom, W 34th St, August 2021: The LOX on the big night, the marquee, the crowd, the lights.
   4. Corona, Queens, where he was born: Arthur Ashe Stadium in Flushing Meadows-Corona Park, the 7 train going by.
   5. Warburton Av & Glenwood Av: green signs, the wall tagged STYLES P, the old Glenwood Power Station and its smokestacks behind on the Hudson.
   400 x 260 SVGs. All animation classes prefixed sp- . No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes spflk{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.sp-flk{animation:spflk 2.6s infinite}.sp-flk2{animation-delay:-1.2s}' +
    '@keyframes spspin{to{transform:rotate(360deg)}}.sp-spin{transform-box:fill-box;transform-origin:50% 50%;animation:spspin .6s linear infinite}' +
    '@keyframes spcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.sp-car{animation:spcar 7s linear infinite}.sp-car2{animation-delay:-3.5s}' +
    '@keyframes sp7{from{transform:translateX(440px)}to{transform:translateX(-380px)}}.sp-seven{animation:sp7 7s linear infinite}' +
    '@keyframes spbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.sp-bob{animation:spbob .55s ease-in-out infinite}.sp-bob2{animation-delay:-.27s}' +
    '@keyframes spsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.sp-beam{transform-box:fill-box;transform-origin:50% 0%;animation:spsweep 3.2s ease-in-out infinite}.sp-beam2{animation-delay:-1.6s}' +
    '@keyframes spghost{0%,100%{opacity:.15;transform:translateY(0)}50%{opacity:.55;transform:translateY(-8px)}}.sp-gh{animation:spghost 4s ease-in-out infinite}' +
    '@keyframes spdrip{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(22px);opacity:0}}.sp-drip{animation:spdrip 1.4s ease-in infinite}.sp-drip2{animation-delay:-.7s}' +
    '@keyframes spsmoke{0%{opacity:0;transform:translate(0,0)}30%{opacity:.6}100%{opacity:0;transform:translate(16px,-26px)}}.sp-smk{animation:spsmoke 4s ease-out infinite}.sp-smk2{animation-delay:-2s}' +
    '@keyframes spwave{from{transform:translateX(0)}to{transform:translateX(-30px)}}.sp-wv{animation:spwave 3s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const bullet = (x, y, letter, color) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 83 + 29) % 400) + '" cy="' + (6 + (i * 41) % 62) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const CYAN = "#38e8ff", GREEN = "#7ed957", ORANGE = "#ff8a3d", CREAM = "#f3efe4", MN = "#0039a6";
  /* a little ghost (the Ghost): sheet shape, two dark eye holes only */
  const ghost = (x, y, s, cls) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="' + (cls || "") + '"><path d="M-10 10V-2a10 10 0 0 1 20 0V10l-4-3-3 3-3-3-3 3-3-3z" fill="#eafcff"/><circle cx="-3.5" cy="-1" r="1.6" fill="#0a1a24"/><circle cx="3.5" cy="-1" r="1.6" fill="#0a1a24"/></g></g>';

  /* 1. Glenwood on the Hudson Line: low platform by the water, the Palisades cliffs across the river, the train sliding in */
  function glenwood() {
    let windows = "";
    for (let x = 24; x < 296; x += 40) windows += '<rect x="' + x + '" y="132" width="26" height="16" rx="3" fill="#d9ecff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#spg1)"/>' + stars(10) +
      /* Palisades: dark cliff wall across the river */
      '<path d="M0 64l30-6 40 4 50-8 60 6 50-5 60 7 50-6 60 4v52H0z" fill="#3b3a46"/>' +
      (() => { let c = ""; for (let x = 8; x < 400; x += 14) c += '<path d="M' + x + ' 66v46" stroke="#2c2b36" stroke-width="2"/>'; return c; })() +
      '<rect x="0" y="112" width="400" height="16" fill="#2a4f6e"/>' +
      '<g class="sp-wv"><path d="M0 118q8-3 15 0t15 0t15 0t15 0t15 0t15 0t15 0t15 0t15 0t15 0t15 0t15 0t15 0t15 0t15 0t15 0t15 0t15 0t15 0t15 0t15 0t15 0t15 0t15 0t15 0t15 0t15 0t15 0" stroke="#7fb8d8" stroke-width="1.5" fill="none" opacity=".6"/></g>' +
      /* the sign on two posts */
      '<rect x="128" y="34" width="4" height="40" fill="#30343c"/><rect x="268" y="34" width="4" height="40" fill="#30343c"/>' +
      '<rect x="112" y="14" width="176" height="36" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="38" text-anchor="middle" ' + font + ' font-size="19" fill="#fff">Glenwood</text>' +
      '<rect x="120" y="40" width="44" height="8" rx="2" fill="' + MN + '"/>' + txt("HUDSON", 142, 46.5, 6, "#fff") +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="10" y="124" width="300" height="48" rx="7" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="10" y="154" width="300" height="5" fill="' + MN + '"/>' + windows +
        '<path d="M298 128h8q4 0 4 6v16h-12z" fill="#d9ecff"/><circle cx="303" cy="164" r="4" fill="#fff6c2"/>' +
      '</g>' +
      /* platform */
      '<rect x="0" y="172" width="400" height="4" fill="#f2c94c"/><rect x="0" y="176" width="400" height="84" fill="#5b5b60"/>' +
      '<rect x="0" y="176" width="400" height="3" fill="#3d3d42"/>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 2) + '" y="182" width="4" height="40" fill="#30343c"/><circle class="sp-flk" cx="' + x + '" cy="182" r="5" fill="#fff6c2"/>').join("") +
      person(250, 196, "#1d2128") + person(272, 200, "#2a2f38") +
      txt("YONKERS", 120, 240, 11, CREAM, 'letter-spacing="4"') + ghost(372, 228, 1.1, "sp-gh"),
      sky("spg1", "#0b1428", "#3e5a7a"));
  }

  /* 2. The juice bar on Nepperhan Av: a storefront, fruit stacked in the window, the blender whirling, a cup of green juice */
  function juice() {
    let brick = "";
    for (let y = 40; y < 100; y += 8) for (let x = (y / 8) % 2 ? 0 : 10; x < 400; x += 20) brick += '<rect x="' + x + '" y="' + y + '" width="19" height="7" fill="#6d3b2c"/>';
    let fruit = "";
    const F = [[ORANGE, 8], ["#e63946", 7], [GREEN, 7], ["#ffd23f", 7], ["#8e44ad", 6]];
    for (let i = 0; i < 16; i++) { const f = F[i % 5]; fruit += '<circle cx="' + (52 + (i % 8) * 18) + '" cy="' + (176 - Math.floor(i / 8) * 13) + '" r="' + f[1] + '" fill="' + f[0] + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="#5a2f22"/>' + brick +
      /* awning */
      '<path d="M20 100h360l-14 26H34z" fill="' + GREEN + '"/>' +
      (() => { let a = ""; for (let x = 34; x < 366; x += 30) a += '<path d="M' + x + ' 100l-2 26h15l2-26z" fill="#4caf3a"/>'; return a; })() +
      txt("FRESH JUICE", 200, 118, 13, "#fff", 'letter-spacing="3"') +
      /* window */
      '<rect x="34" y="128" width="200" height="72" fill="#fff4dc" stroke="#2b2b2b" stroke-width="3"/>' + fruit +
      '<rect x="34" y="186" width="200" height="14" fill="#c9ced6"/>' +
      /* blender on the counter */
      '<rect x="252" y="128" width="114" height="72" fill="#fff4dc" stroke="#2b2b2b" stroke-width="3"/>' +
      '<path d="M286 140h30l-4 38h-22z" fill="' + GREEN + '" opacity=".85" stroke="#9aa3ad" stroke-width="2"/>' +
      '<g class="sp-spin"><path d="M291 166h20M301 156v20" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/></g>' +
      '<rect x="284" y="178" width="34" height="14" rx="2" fill="#30343c"/><circle class="sp-flk" cx="292" cy="185" r="2" fill="' + GREEN + '"/>' +
      '<path d="M334 166h18l-3 26h-12z" fill="' + GREEN + '" stroke="#9aa3ad" stroke-width="1.5"/><path d="M346 160l-4 12" stroke="' + ORANGE + '" stroke-width="2"/>' +
      '<circle class="sp-drip" cx="301" cy="192" r="2" fill="' + GREEN + '"/><circle class="sp-drip sp-drip2" cx="306" cy="192" r="2" fill="' + GREEN + '"/>' +
      /* sidewalk + street sign */
      '<rect x="0" y="200" width="400" height="60" fill="#55575c"/><rect x="0" y="200" width="400" height="4" fill="#8a8c90"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#2b2d31"/>' +
      '<g class="sp-car"><rect x="0" y="240" width="44" height="12" rx="4" fill="' + CYAN + '"/></g>' +
      '<rect x="372" y="120" width="4" height="100" fill="#3d4b3f"/><rect x="300" y="210" width="0" height="0"/>' +
      '<rect x="318" y="206" width="78" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/>' + txt("Nepperhan Av", 357, 219, 9.5, "#fff"),
      "");
  }

  /* 3. Hammerstein Ballroom, W 34th St: the marquee out front, then the room inside: stage lights sweeping, the crowd jumping */
  function verzuz() {
    let crowd = "";
    for (let row = 0; row < 3; row++) for (let x = 6 + row * 9; x < 400; x += 17) crowd += person(x, 196 + row * 16, ["#141821", "#1c2230", "#252b3a"][row], "sp-bob " + ((x + row) % 2 ? "sp-bob2" : ""));
    return svg(
      '<rect width="400" height="260" fill="#0a0814"/>' +
      /* balconies */
      '<path d="M0 60q200-40 400 0v20q-200-36-400 0z" fill="#3a1f2e"/><path d="M0 94q200-34 400 0v14q-200-30-400 0z" fill="#2d1824"/>' +
      [30, 90, 150, 250, 310, 370].map((x, i) => '<circle class="sp-flk ' + (i % 2 ? "sp-flk2" : "") + '" cx="' + x + '" cy="' + (i < 3 ? 58 - i * 6 : 46 + (i - 3) * 6) + '" r="2.5" fill="#ffd9a0"/>').join("") +
      /* beams */
      '<path class="sp-beam" d="M110 0l-34 180h68z" fill="' + CYAN + '" opacity=".22"/>' +
      '<path class="sp-beam sp-beam2" d="M290 0l-34 180h68z" fill="' + GREEN + '" opacity=".2"/>' +
      /* stage + marquee board */
      '<rect x="60" y="112" width="280" height="60" fill="#1a1426" stroke="#e9c46a" stroke-width="2"/>' +
      txt("HAMMERSTEIN BALLROOM", 200, 132, 12, "#e9c46a", 'letter-spacing="2"') +
      txt("THE LOX", 200, 156, 20, "#fff") + txt("YONKERS IN THE BUILDING", 200, 168, 7, CYAN, 'letter-spacing="2"') +
      '<rect x="40" y="172" width="320" height="10" fill="#2a2236"/>' + crowd,
      "");
  }

  /* 4. Corona, Queens: Arthur Ashe Stadium in Flushing Meadows-Corona Park, the 7 train passing on the el in front */
  function ashe() {
    return svg(
      '<rect width="400" height="260" fill="url(#spa1)"/>' +
      '<circle cx="330" cy="42" r="16" fill="#fff3c4"/>' +
      /* the stadium: a big low cylinder with a ring of vertical fins and the open roof frame */
      '<ellipse cx="200" cy="96" rx="170" ry="22" fill="#d7dde4"/>' +
      '<path d="M30 96v70q170 34 340 0V96q-170 34-340 0z" fill="#2c4f86"/>' +
      (() => { let f = ""; for (let i = 0; i <= 28; i++) { const x = 34 + i * 12; const dy = Math.sin(Math.PI * (x - 30) / 340) * 17; f += '<path d="M' + x + ' ' + (98 + dy) + 'v' + (66) + '" stroke="#9fb7d8" stroke-width="2" opacity=".8"/>'; } return f; })() +
      '<path d="M30 96q170 34 340 0" stroke="#e9eef4" stroke-width="5" fill="none"/>' +
      '<path d="M60 92q140-30 280 0" stroke="#7c8796" stroke-width="3" fill="none"/>' +
      txt("ARTHUR ASHE STADIUM", 200, 150, 11, "#fff", 'letter-spacing="2"') +
      /* park lawn + trees */
      '<rect x="0" y="166" width="400" height="20" fill="#4f8a3a"/>' +
      [16, 52, 350, 386].map(x => '<circle cx="' + x + '" cy="160" r="16" fill="#3e7a32"/>').join("") +
      /* the el + the 7 train */
      '<rect x="0" y="186" width="400" height="10" fill="#7a6a5c"/>' + [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="196" width="10" height="40" fill="#6a5a4c"/>').join("") +
      '<g class="sp-seven"><rect x="0" y="160" width="300" height="26" rx="5" fill="#c9ced6" stroke="#6b7280" stroke-width="1.5"/>' +
      (() => { let w = ""; for (let x = 12; x < 290; x += 30) w += '<rect x="' + x + '" y="165" width="18" height="10" rx="2" fill="#d9ecff"/>'; return w; })() +
      bullet(16, 173, "7", "#b933ad") + '</g>' +
      '<rect x="0" y="236" width="400" height="24" fill="#2b2d31"/>' +
      txt("CORONA, QUEENS", 200, 252, 10, CREAM, 'letter-spacing="4"') + ghost(372, 212, 1, "sp-gh"),
      sky("spa1", "#7fb7e8", "#f6d6a8"));
  }

  /* 5. Warburton Av & Glenwood Av: the old Glenwood Power Station behind (brick, tall arched windows, smokestacks), the tag wall, green signs */
  function corner() {
    let arches = "";
    for (let x = 64; x < 300; x += 30) arches += '<path d="M' + x + ' 112v-34a8 8 0 0 1 16 0v34z" fill="#2a3442"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#spc1)"/>' + stars(14) +
      '<rect x="0" y="112" width="400" height="16" fill="#1f3a52"/>' +
      /* power station */
      '<rect x="50" y="62" width="264" height="58" fill="#8a4a32"/><path d="M50 62l132-20 132 20z" fill="#6d3a28"/>' + arches +
      '<rect x="100" y="8" width="12" height="56" fill="#7a412c"/><rect x="250" y="14" width="12" height="50" fill="#7a412c"/>' +
      '<circle class="sp-smk" cx="106" cy="6" r="7" fill="#c9d3dd"/><circle class="sp-smk sp-smk2" cx="256" cy="12" r="7" fill="#c9d3dd"/>' +
      ghost(150, 92, 0.9, "sp-gh") + ghost(220, 88, 0.8, "sp-gh") +
      /* tag wall */
      '<rect x="0" y="128" width="400" height="98" fill="#3e4048"/>' +
      (() => { let b = ""; for (let y = 138; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#34363d" stroke-width="1"/>'; return b; })() +
      tag("STYLES P", 18, 196, 48, CYAN, -5) + tag("THE GHOST", 214, 220, 20, GREEN, -4) + tag("HOLIDAY", 24, 222, 15, ORANGE, -3) +
      /* street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="sp-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + GREEN + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="58" width="5" height="170" fill="#3d4b3f"/>' +
      '<rect x="292" y="62" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Warburton Av", 344, 78, 11.5, "#fff") +
      '<rect x="292" y="88" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Glenwood Av", 344, 104, 11.5, "#fff") +
      '<circle class="sp-flk" cx="358" cy="56" r="4" fill="#fff6c2"/>',
      sky("spc1", "#080d1a", "#24334a"));
  }

  window.SCENES = { glenwood: glenwood, juice: juice, verzuz: verzuz, ashe: ashe, corner: corner };
})();
