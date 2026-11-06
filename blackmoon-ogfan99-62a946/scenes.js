/* Black Moon game (Brooklyn: Flatbush, with Buckshot's Crown Heights next door). Buckshot, 5ft and DJ Evil Dee (Da Beatminerz).
   0 the Q pulling into Beverley Rd in the open cut on the Brighton line, 1 Bushwick High School on Irving Av (where 5ft and Evil Dee met),
   2 the vermilion torii in the pond of the Brooklyn Botanic Garden's Japanese Hill-and-Pond Garden (Crown Heights side),
   3 the Oriental Pavilion in Prospect Park's Concert Grove (Flatbush side), 4 Ocean Av & Beverley Rd with the Ocean Av Art Deco apartment houses behind and a black moon up top.
   400 x 260 SVGs. Classes prefixed bkm-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bkmcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.bkm-car{animation:bkmcar 7s linear infinite}.bkm-car2{animation-delay:-3.5s}' +
    '@keyframes bkmblink{0%,100%{opacity:.25}50%{opacity:1}}.bkm-bl{animation:bkmblink 1.6s ease-in-out infinite}.bkm-bl2{animation-delay:.5s}.bkm-bl3{animation-delay:1s}' +
    '@keyframes bkmfall{from{transform:translate(0,-20px) rotate(0)}to{transform:translate(-50px,270px) rotate(320deg)}}.bkm-pet{animation:bkmfall 8s linear infinite}' +
    '@keyframes bkmrip{0%,100%{opacity:.2;transform:scaleX(.8)}50%{opacity:.7;transform:scaleX(1.15)}}.bkm-rip{transform-box:fill-box;transform-origin:50% 50%;animation:bkmrip 2.8s ease-in-out infinite}.bkm-rip2{animation-delay:-1.4s}' +
    '@keyframes bkmkoi{0%,100%{transform:translateX(0)}50%{transform:translateX(-60px)}}.bkm-koi{animation:bkmkoi 7s ease-in-out infinite}' +
    '@keyframes bkmbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.bkm-bob{animation:bkmbob 1.6s ease-in-out infinite}.bkm-bob2{animation-delay:-.8s}' +
    '@keyframes bkmglow{0%,100%{opacity:.35}50%{opacity:.8}}.bkm-glow{animation:bkmglow 3s ease-in-out infinite}' +
    '@keyframes bkmball{0%,100%{transform:translateY(0)}50%{transform:translateY(-26px)}}.bkm-ball{animation:bkmball .9s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + font + ' font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const tree = (x, y, r, col) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (r + 10) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + col + '"/><circle cx="' + (x - r * .6) + '" cy="' + (y + r * .3) + '" r="' + r * .7 + '" fill="' + col + '"/><circle cx="' + (x + r * .6) + '" cy="' + (y + r * .3) + '" r="' + r * .7 + '" fill="' + col + '"/>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const LAV = "#d6c8ff", AMBER = "#ffb347", SKY = "#7ad7ff", CREAM = "#f4ead8", QYEL = "#fccc0a";

  /* 0. Beverley Rd on the Brighton line: the open cut with its concrete walls, the little station house up on the bridge, the black sign with the Q, the Q sliding in */
  function station() {
    let win = "";
    for (let x = 34; x < 290; x += 34) win += '<rect x="' + x + '" y="156" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bkms0)"/>' +
      /* houses up top */
      '<path d="M0 60l30 -24l30 24z" fill="#7a4a3a"/><rect x="4" y="60" width="52" height="40" fill="#d9c7a0"/>' +
      '<path d="M330 58l34 -26l34 26z" fill="#4a5a6a"/><rect x="334" y="58" width="60" height="42" fill="#e6dccb"/>' +
      tree(90, 70, 20, "#3a6b3a") + tree(300, 66, 22, "#3a6b3a") +
      /* street bridge + station house */
      '<rect x="0" y="96" width="400" height="14" fill="#7c7a76"/><rect x="0" y="108" width="400" height="4" fill="#5a5854"/>' +
      '<rect x="136" y="62" width="128" height="36" fill="#8a4a36"/><path d="M128 64l72 -24l72 24z" fill="#3e4652"/>' +
      '<rect x="150" y="72" width="16" height="20" fill="#f3d79a" opacity=".85"/><rect x="234" y="72" width="16" height="20" fill="#f3d79a" opacity=".85"/><rect x="188" y="72" width="24" height="26" fill="#2a2a2e"/>' +
      /* the cut */
      '<rect x="0" y="112" width="400" height="100" fill="#8d8a84"/>' +
      (() => { let p = ""; for (let x = 0; x < 400; x += 40) p += '<path d="M' + x + ' 112v100" stroke="#7a7771" stroke-width="2"/>'; return p; })() +
      /* sign */
      '<rect x="40" y="116" width="210" height="26" rx="3" fill="#111"/><rect x="40" y="116" width="210" height="3" fill="#fff"/>' +
      '<text x="52" y="135" ' + font + ' font-size="14" fill="#fff">Beverley Rd</text>' + bullet(226, 130, "Q", QYEL, true) +
      /* the Q train */
      '<g class="anim-train">' +
        '<rect x="10" y="146" width="290" height="48" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="280" y="152" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(288, 183, "Q", QYEL, true) +
        '<rect x="10" y="176" width="262" height="4" fill="' + QYEL + '"/><circle cx="22" cy="186" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform */
      '<rect x="0" y="194" width="400" height="8" fill="#eab308"/><rect x="0" y="202" width="400" height="58" fill="#6a6762"/>' +
      person(330, 214, "#1b1b1b") + person(354, 218, "#2a2a2a", "bkm-bob") +
      txt("FLATBUSH · BRIGHTON LINE", 140, 246, 11, CREAM, 'letter-spacing="3"'),
      sky("bkms0", "#9fc2e0", "#e8d6c0"));
  }

  /* 1. Bushwick High School on Irving Av: the big red-brick school with limestone trim, the raised center bay, kids out front, a ball bouncing in the yard */
  function school() {
    let wins = "";
    for (let y = 70; y < 160; y += 26) for (let x = 30; x < 380; x += 24) if (x < 160 || x > 236) wins += '<rect x="' + x + '" y="' + y + '" width="14" height="18" fill="#2e3c4c"/><rect x="' + x + '" y="' + (y + 8) + '" width="14" height="2" fill="#e9e1cf"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bkms1)"/>' +
      '<rect x="18" y="58" width="364" height="126" fill="#9a3f2c"/>' +
      '<rect x="18" y="52" width="364" height="8" fill="#e9e1cf"/><rect x="18" y="108" width="364" height="4" fill="#e9e1cf"/><rect x="18" y="160" width="364" height="4" fill="#e9e1cf"/>' + wins +
      /* center bay */
      '<rect x="152" y="34" width="96" height="150" fill="#a8472f"/><rect x="148" y="28" width="104" height="8" fill="#e9e1cf"/>' +
      [150, 172, 194, 216, 238].map(x => '<rect x="' + x + '" y="20" width="12" height="10" fill="#e9e1cf"/>').join("") +
      '<path d="M170 100v-36q30-24 60 0v36z" fill="#2e3c4c"/><path d="M200 50v50M170 82h60" stroke="#e9e1cf" stroke-width="2"/>' +
      '<rect x="154" y="110" width="92" height="12" fill="#e9e1cf"/>' + txt("BUSHWICK HIGH SCHOOL", 200, 119, 6.6, "#5a2a1e") +
      '<path d="M178 184v-44q22-18 44 0v44z" fill="#4a2a1c"/><path d="M200 144v40" stroke="#2a160e" stroke-width="2"/>' +
      '<rect x="168" y="184" width="64" height="8" fill="#cfc6b2"/><rect x="160" y="192" width="80" height="8" fill="#bfb6a2"/>' +
      /* yard + fence */
      '<rect x="0" y="200" width="400" height="60" fill="#5d5a55"/>' +
      (() => { let f = ""; for (let x = 0; x < 400; x += 10) f += '<path d="M' + x + ' 200l10 14M' + (x + 10) + ' 200l-10 14" stroke="#8a8d92" stroke-width="1"/>'; return f; })() +
      '<rect x="0" y="198" width="400" height="3" fill="#8a8d92"/>' +
      person(70, 222, "#1b1b1b", "bkm-bob") + person(92, 226, "#2a2a2a") + person(320, 222, "#222", "bkm-bob bkm-bob2") +
      '<g class="bkm-ball"><circle cx="110" cy="236" r="6" fill="#e07b2a"/><path d="M104 236h12M110 230v12" stroke="#5a2a10" stroke-width="1"/></g>' +
      txt("IRVING AV · BUSHWICK", 300, 250, 11, CREAM, 'letter-spacing="2"'),
      sky("bkms1", "#7fb0dc", "#d8e8f4"));
  }

  /* 2. The Japanese Hill-and-Pond Garden in the Brooklyn Botanic Garden: the vermilion torii standing in the pond, the wooden viewing pavilion, cherry blossoms, koi under the water, petals drifting */
  function torii() {
    let pet = "";
    for (let i = 0; i < 8; i++) pet += '<ellipse class="bkm-pet" style="animation-delay:-' + i + 's" cx="' + (40 + i * 48) + '" cy="0" rx="3" ry="2" fill="#ffc6d9"/>';
    let rip = "";
    for (let y = 178; y < 254; y += 9) rip += '<rect class="bkm-rip' + (y % 18 ? "" : " bkm-rip2") + '" x="' + (30 + (y * 11) % 200) + '" y="' + y + '" width="' + (60 + (y * 5) % 80) + '" height="2" fill="#fff" opacity=".35"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bkms2)"/>' +
      /* hill with pines */
      '<path d="M0 150q60 -50 140 -30q60 -40 140 -10q60 -20 120 10v40h-400z" fill="#3f6b44"/>' +
      '<path d="M60 128l14 -30l14 30z M300 116l16 -34l16 34z" fill="#244a2c"/>' +
      /* cherry trees */
      '<rect x="34" y="96" width="6" height="60" fill="#5a3a2a"/><circle cx="37" cy="90" r="30" fill="#f7b8cc"/><circle cx="16" cy="104" r="18" fill="#f9c9d8"/><circle cx="60" cy="104" r="20" fill="#f4a9c0"/>' +
      /* pavilion on the right */
      '<rect x="300" y="130" width="90" height="30" fill="#6b4a2c"/><path d="M290 132l55 -24l55 24z" fill="#3a2a22"/>' +
      [306, 330, 354, 378].map(x => '<rect x="' + x + '" y="134" width="5" height="26" fill="#3a2a1a"/>').join("") +
      /* pond */
      '<rect x="0" y="160" width="400" height="100" fill="#3d6d74"/>' + rip +
      '<g class="bkm-koi"><ellipse cx="300" cy="222" rx="12" ry="5" fill="#ff7a2a" opacity=".85"/><path d="M312 222l8 -5v10z" fill="#ff7a2a" opacity=".85"/></g>' +
      /* torii in the water */
      '<rect x="168" y="96" width="9" height="92" fill="#d43b1f"/><rect x="223" y="96" width="9" height="92" fill="#d43b1f"/>' +
      '<rect x="162" y="112" width="76" height="7" fill="#d43b1f"/><path d="M150 92q50 -10 100 0l-4 8q-46 -8 -92 0z" fill="#1e1a18"/><rect x="156" y="96" width="88" height="6" fill="#d43b1f"/>' +
      '<rect x="196" y="102" width="8" height="10" fill="#d43b1f"/>' +
      '<rect x="168" y="190" width="9" height="40" fill="#d43b1f" opacity=".3"/><rect x="223" y="190" width="9" height="40" fill="#d43b1f" opacity=".3"/>' +
      pet + txt("BROOKLYN BOTANIC GARDEN", 110, 250, 10, CREAM, 'letter-spacing="2"'),
      sky("bkms2", "#a9d4ec", "#f2e6ef"));
  }

  /* 3. The Oriental Pavilion in Prospect Park's Concert Grove: thin cast-iron columns, the painted polychrome roof and lantern, the Concert Grove's busts lawn, leaves drifting */
  function pavilion() {
    let leaves = "";
    for (let i = 0; i < 7; i++) leaves += '<rect class="bkm-pet" style="animation-delay:-' + i * 1.1 + 's" x="' + (30 + i * 55) + '" y="0" width="6" height="4" rx="2" fill="' + (i % 2 ? AMBER : "#c9572e") + '"/>';
    let cols = "";
    for (let x = 100; x <= 300; x += 40) cols += '<rect x="' + (x - 3) + '" y="112" width="6" height="74" fill="#3a3f46"/><path d="M' + (x - 10) + ' 116q10 -10 20 0" stroke="#3a3f46" stroke-width="3" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bkms3)"/>' +
      tree(30, 110, 34, "#3f7a3a") + tree(372, 104, 36, "#3a6f36") + tree(80, 130, 22, "#4a8a44") + tree(330, 128, 24, "#4a8a44") +
      /* lower roof: wide, painted bands */
      '<path d="M70 114l130 -30l130 30z" fill="#2f6b5a"/>' +
      '<path d="M70 114h260v-6l-130 -24l-130 24z" fill="none" stroke="#c8a24a" stroke-width="3"/>' +
      '<rect x="80" y="108" width="240" height="6" fill="#b5422e"/>' +
      (() => { let d = ""; for (let x = 84; x < 318; x += 12) d += '<path d="M' + x + ' 114l6 6l6 -6z" fill="#c8a24a"/>'; return d; })() +
      /* lantern + upper roof */
      '<rect x="176" y="64" width="48" height="22" fill="#e4d2a8"/>' + [182, 196, 210].map(x => '<rect x="' + x + '" y="68" width="8" height="14" fill="#7a3a2a"/>').join("") +
      '<path d="M166 66l34 -22l34 22z" fill="#b5422e"/><path d="M196 44v-10h8v10z" fill="#c8a24a"/>' +
      cols +
      '<rect x="80" y="186" width="240" height="10" fill="#bdb3a0"/><rect x="70" y="196" width="260" height="8" fill="#a59b88"/>' +
      '<rect x="0" y="204" width="400" height="56" fill="#4f8a44"/>' +
      '<path d="M120 260q60 -40 160 -56" stroke="#c9b893" stroke-width="12" fill="none"/>' +
      person(150, 166, "#1e1e22", "bkm-bob") + person(250, 166, "#26262a") +
      leaves + txt("CONCERT GROVE · PROSPECT PARK", 200, 24, 11, "#fff", 'letter-spacing="2" opacity=".9"'),
      sky("bkms3", "#f2b07a", "#f7e2c4"));
  }

  /* 4. Ocean Av & Beverley Rd: green street signs, the wall tagged BLACK MOON, the cream Art Deco apartment houses of Ocean Av behind, and a black moon with a glowing rim */
  function corner() {
    const deco = (x, w, h, col) => { let g = '<rect x="' + x + '" y="' + (150 - h) + '" width="' + w + '" height="' + h + '" fill="' + col + '"/>' +
      '<rect x="' + (x + w / 2 - 8) + '" y="' + (150 - h - 14) + '" width="16" height="16" fill="' + col + '"/><rect x="' + (x + w / 2 - 4) + '" y="' + (150 - h - 22) + '" width="8" height="10" fill="' + col + '"/>';
      for (let y = 150 - h + 8; y < 136; y += 12) { for (let xx = x + 6; xx < x + w - 10; xx += 12) g += '<rect class="bkm-bl bkm-bl' + ((xx + y) % 3 + 1) + '" x="' + xx + '" y="' + y + '" width="7" height="7" fill="#ffd98a" opacity=".75"/>';
        g += '<rect x="' + (x + w - 10) + '" y="' + y + '" width="10" height="7" fill="#ffd98a" opacity=".55"/>'; }
      g += '<path d="M' + (x + 3) + ' ' + (150 - h) + 'v' + h + 'M' + (x + w - 3) + ' ' + (150 - h) + 'v' + h + '" stroke="#b9a274" stroke-width="2"/>'; return g; };
    return svg(
      '<rect width="400" height="260" fill="url(#bkms4)"/>' + stars(18) +
      /* black moon */
      '<circle class="bkm-glow" cx="318" cy="42" r="30" fill="' + LAV + '" opacity=".5"/><circle cx="318" cy="42" r="26" fill="#08070f"/><circle cx="318" cy="42" r="26" fill="none" stroke="' + LAV + '" stroke-width="2"/>' +
      deco(10, 90, 96, "#e6d8b0") + deco(110, 80, 80, "#d9c79a") + deco(204, 96, 104, "#eadcb6") +
      /* wall */
      '<rect x="0" y="134" width="400" height="92" fill="#2f3038"/>' +
      (() => { let b = ""; for (let y = 144; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#26272e" stroke-width="1"/>'; return b; })() +
      tag("BLACK MOON", 16, 198, 46, LAV, -5) + tag("BEATMINERZ", 214, 222, 18, AMBER, -4) + tag("EVIL DEE · 5FT", 20, 222, 14, SKY, -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#4a4c52"/><rect x="0" y="226" width="400" height="5" fill="#80838a"/>' +
      '<g class="bkm-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + AMBER + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<g class="bkm-car bkm-car2"><rect x="0" y="240" width="40" height="12" rx="4" fill="' + SKY + '"/><circle cx="9" cy="252" r="4" fill="#111"/><circle cx="31" cy="252" r="4" fill="#111"/></g>' +
      /* pole + green signs */
      '<rect x="360" y="84" width="5" height="144" fill="#3d4b3f"/>' +
      '<rect x="300" y="88" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Ocean Av", 348, 104, 12, "#fff") +
      '<rect x="300" y="114" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Beverley Rd", 348, 130, 12, "#fff"),
      sky("bkms4", "#05050c", "#2a2244"));
  }

  window.SCENES = { station: station, school: school, torii: torii, pavilion: pavilion, corner: corner };
})();
