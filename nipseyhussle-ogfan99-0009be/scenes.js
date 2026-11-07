/* nipseyhussle scenes (Regions tab: Los Angeles + SoCal; Crenshaw / Slauson, South LA). CSS classes prefixed nh- (the page's own anim-train is kept).
   1 Hyde Park station on the Metro K Line: at-grade island platform in the median of Crenshaw Blvd at Slauson, a pink-striped train sliding in.
   2 The Marathon Clothing store in the strip mall at Slauson Ave and Crenshaw Blvd: blue-trim storefront, racks in the window, Slauson traffic.
   3 The STEM center / co-working space he opened on Crenshaw in 2018: kids at laptops, code scrolling on the big screen.
   4 Proud 2 Pay: the $100-a-copy "Crenshaw" mixtape pop-up, a stack of discs, the price card and the register blinking.
   5 Crenshaw Blvd and W Slauson Ave (the square named for him): green signs, NIPSEY tagged, the downtown LA skyline behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes nhflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.nh-flk{animation:nhflick 2.2s infinite}.nh-flk2{animation-delay:.7s}' +
    '@keyframes nhcar{from{transform:translateX(-160px)}to{transform:translateX(540px)}}.nh-car{animation:nhcar 7s linear infinite}.nh-car2{animation-delay:-3.5s}' +
    '@keyframes nhcarL{from{transform:translateX(540px)}to{transform:translateX(-160px)}}.nh-carL{animation:nhcarL 6s linear infinite}' +
    '@keyframes nhsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.nh-palm{transform-box:fill-box;transform-origin:50% 100%;animation:nhsway 3.5s ease-in-out infinite}.nh-palm2{animation-delay:-1.6s}' +
    '@keyframes nhspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.nh-sp{animation:nhspray 1.4s ease-out infinite}.nh-sp2{animation-delay:.45s}' +
    '@keyframes nhcode{from{transform:translateY(0)}to{transform:translateY(-48px)}}.nh-code{animation:nhcode 4s linear infinite}' +
    '@keyframes nhblink{0%,49%{opacity:1}50%,100%{opacity:.2}}.nh-bl{animation:nhblink 1s steps(1) infinite}.nh-bl2{animation-delay:.5s}' +
    '@keyframes nhspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.nh-spin{transform-box:fill-box;transform-origin:50% 50%;animation:nhspin 2.4s linear infinite}' +
    '@keyframes nhbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.nh-bob{animation:nhbob 1.6s ease-in-out infinite}.nh-bob2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const palm = (x, y, h, cls) => '<g class="nh-palm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q-4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#6b4a2a" stroke-width="4" fill="none"/>' +
    '<g fill="#2f6a3a"><path d="M' + (x + 2) + ' ' + (y - h) + 'q-20 -6 -30 8q16 -10 30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q20 -6 30 8q-16 -10 -30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q-8 -18 -26 -16q16 2 26 16z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q8 -18 26 -16q-16 2 -26 16z"/></g></g>';
  /* a person seen from behind / silhouette, no face */
  const person = (x, y, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (y - 30) + '" r="7" fill="#5a3a28"/><path d="M' + (x - 10) + ' ' + y + 'v-16q0 -8 10 -8q10 0 10 8v16z" fill="' + c + '"/></g>';
  const KLINE = "#e56db1", BLUE = "#2f6fe0", GOLD = "#e3b64a", NAVY = "#14244a";

  /* 1. Hyde Park station, K Line, at-grade in the Crenshaw Blvd median */
  function nhstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (58 + i * 44) + '" y="128" width="32" height="18" rx="3" fill="#22303a"/>').join("");
    const train = '<g class="anim-train"><path d="M22 120h308q26 0 32 30v22H22z" fill="#dfe3e8" stroke="#6f7881" stroke-width="2"/>' + wins +
      '<rect x="22" y="150" width="340" height="5" fill="#3d4650"/><rect x="22" y="155" width="340" height="3" fill="' + KLINE + '"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (102 + i * 88) + '" y="128" width="4" height="42" fill="#aab2ba"/>').join("") +
      '<path d="M330 124q24 4 30 26h-30z" fill="#22303a"/><circle cx="356" cy="164" r="3.5" fill="#fff6c2"/>' +
      '<path d="M120 120l20 -14M230 120l20 -14" stroke="#555" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nhs1)"/>' +
      '<circle cx="60" cy="34" r="16" fill="#fff2b0" opacity=".9"/>' +
      /* catenary wire */
      '<path d="M0 98h400" stroke="#555" stroke-width="1.5"/>' + [70, 200, 330].map(x => '<rect x="' + (x - 2) + '" y="86" width="4" height="86" fill="#7d868f"/><path d="M' + x + ' 90h16" stroke="#7d868f" stroke-width="2"/>').join("") +
      /* storefronts across Crenshaw */
      '<rect x="0" y="70" width="400" height="34" fill="#d8c7a6"/>' +
      [10, 92, 176, 262, 330].map((x, i) => '<rect x="' + x + '" y="78" width="' + (i === 4 ? 60 : 70) + '" height="22" fill="' + ["#c79a6a", "#9fb7c8", "#e3d2a8", "#b98a7a", "#a8bf9a"][i] + '"/><rect x="' + (x + 4) + '" y="84" width="' + (i === 4 ? 52 : 62) + '" height="10" fill="#2a3640" opacity=".6"/>').join("") +
      palm(30, 104, 74) + palm(374, 104, 80, "nh-palm2") +
      car("nh-carL", 0, 108, "#f2f2f2") +
      /* island platform canopy */
      '<rect x="60" y="100" width="280" height="6" fill="' + KLINE + '"/><path d="M56 100h288l-10 -8H66z" fill="#c9ced3"/>' +
      train +
      '<rect x="0" y="172" width="400" height="6" fill="#f2c200"/><rect x="0" y="178" width="400" height="16" fill="#c7c1b4"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#4a4a50"/>' +
      '<rect x="56" y="202" width="288" height="34" rx="3" fill="#111"/><text x="72" y="225" ' + font + ' font-size="16" fill="#fff">Hyde Park</text>' +
      '<circle cx="316" cy="219" r="12" fill="' + KLINE + '"/><text x="316" y="224.5" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">K</text>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".85">CRENSHAW BLVD · SLAUSON AVE · METRO K LINE</text>',
      sky("nhs1", "#5bb6ef", "#d8f0ff"));
  }

  /* 2. The Marathon store, strip mall at Slauson and Crenshaw */
  function nhmarathon() {
    const shirt = (x, c) => '<path d="M' + x + ' 128l8 -6h12l8 6l-5 6l-3 -2v22h-12v-22l-3 2z" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#nhs2)"/>' +
      palm(24, 186, 130) + palm(380, 186, 120, "nh-palm2") +
      /* strip mall */
      '<rect x="40" y="86" width="320" height="100" fill="#efe6d2" stroke="#c9b892" stroke-width="2"/><rect x="34" y="78" width="332" height="12" fill="' + NAVY + '"/>' +
      /* neighbour units */
      '<rect x="48" y="104" width="70" height="82" fill="#d9cdb2"/><rect x="54" y="112" width="58" height="40" fill="#5d6f7c" opacity=".7"/>' +
      '<rect x="282" y="104" width="70" height="82" fill="#d9cdb2"/><rect x="288" y="112" width="58" height="40" fill="#5d6f7c" opacity=".7"/>' +
      /* the store */
      '<rect x="126" y="92" width="148" height="94" fill="#f8f5ee" stroke="' + NAVY + '" stroke-width="3"/>' +
      '<rect x="130" y="96" width="140" height="18" fill="' + NAVY + '"/><text x="200" y="109.5" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="2">THE MARATHON</text>' +
      '<rect x="134" y="118" width="78" height="56" fill="#26394f"/><rect x="134" y="118" width="78" height="56" fill="#9fc4e8" opacity=".25"/>' +
      '<path d="M138 124h70" stroke="#aaa" stroke-width="1.5"/>' + shirt(140, BLUE) + shirt(164, "#f2f2f2") + shirt(186, GOLD) +
      '<rect x="220" y="118" width="46" height="68" fill="#3a2a22"/><rect x="224" y="122" width="38" height="40" fill="#9fc4e8" opacity=".35"/><circle cx="258" cy="156" r="2" fill="' + GOLD + '"/>' +
      '<text x="173" y="182" text-anchor="middle" ' + font + ' font-size="6.5" fill="' + NAVY + '" opacity=".8">CLOTHING · SLAUSON AVE</text>' +
      /* lot + Slauson */
      '<rect x="0" y="186" width="400" height="20" fill="#9a958a"/>' + [80, 160, 240, 320].map(x => '<path d="M' + x + ' 188v16" stroke="#f2f2f2" stroke-width="2"/>').join("") +
      '<rect x="0" y="206" width="400" height="54" fill="#3a3a40"/><path d="M0 233h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="18 12"/>' +
      car("nh-car", 0, 214, BLUE) + car("nh-carL", 0, 240, "#e8e2d4") +
      '<rect x="306" y="40" width="88" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="350" y="56" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Slauson Av</text>' +
      '<rect x="348" y="62" width="4" height="24" fill="#555"/>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#14244a" opacity=".8">THE MARATHON CLOTHING STORE · SLAUSON &amp; CRENSHAW</text>',
      sky("nhs2", "#7cc4f2", "#e6f5ff"));
  }

  /* 3. The STEM center / co-working space on Crenshaw */
  function nhstem() {
    const line = (y, w, c) => '<rect x="214" y="' + y + '" width="' + w + '" height="4" rx="1" fill="' + c + '"/>';
    const code = Array.from({ length: 16 }, (_, i) => line(40 + i * 6, 30 + (i * 37) % 90, ["#7ee0a8", "#e3b64a", "#8fc1ff", "#f2f2f2"][i % 4])).join("");
    const laptop = (x) => '<g><path d="M' + x + ' 168h52l-6 -30h-40z" fill="#3a3f48"/><path d="M' + (x + 9) + ' 141h34l4 22h-42z" fill="#8fc1ff" opacity=".7"/><rect x="' + (x - 6) + '" y="168" width="64" height="5" rx="1" fill="#9aa2ad"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#efeae0"/>' +
      '<rect x="0" y="0" width="400" height="20" fill="#d9d2c2"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (30 + i * 80) + '" y="6" width="40" height="6" rx="2" fill="#fffbe6" class="nh-flk' + (i % 2 ? " nh-flk2" : "") + '"/>').join("") +
      /* exposed-brick wall left with a mission board */
      '<rect x="0" y="20" width="190" height="150" fill="#b0603e"/>' + Array.from({ length: 12 }, (_, r) => '<path d="M0 ' + (30 + r * 12) + 'h190" stroke="#8e4a2e" stroke-width="1.5"/>').join("") +
      '<rect x="22" y="40" width="146" height="70" rx="3" fill="' + NAVY + '"/><text x="95" y="62" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">BRIDGE THE GAP</text>' +
      '<text x="95" y="80" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">CRENSHAW TO SILICON VALLEY</text>' +
      '<path d="M40 94h110" stroke="' + GOLD + '" stroke-width="2"/><text x="95" y="104" text-anchor="middle" ' + font + ' font-size="7" fill="#cfd8e8">STEM · CODING · CO-WORKING</text>' +
      /* big screen with scrolling code */
      '<rect x="204" y="30" width="176" height="108" rx="4" fill="#111620" stroke="#555" stroke-width="3"/>' +
      '<svg x="208" y="34" width="168" height="100" viewBox="208 34 168 100"><g class="nh-code">' + code + code.replace(/y="(\d+)"/g, (m, y) => 'y="' + (+y + 96) + '"') + '</g></svg>' +
      '<rect x="284" y="138" width="16" height="12" fill="#555"/>' +
      /* desks with students (seen from behind) */
      '<rect x="0" y="170" width="400" height="90" fill="#c9b08a"/><rect x="20" y="168" width="360" height="8" fill="#7a5a3a"/>' +
      laptop(40) + laptop(150) + laptop(260) +
      person(70, 206, BLUE, "nh-bob") + person(180, 206, GOLD, "nh-bob nh-bob2") + person(290, 206, "#e8e2d4", "nh-bob") +
      '<rect x="0" y="214" width="400" height="46" fill="#a88d68"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#2a1d16" opacity=".85">THE STEM CENTER HE OPENED IN THE HOOD · 2018</text>');
  }

  /* 4. Proud 2 Pay: the $100 Crenshaw mixtape pop-up */
  function nhproud() {
    const disc = (x, y) => '<rect x="' + x + '" y="' + y + '" width="40" height="6" rx="1" fill="#1b1b20" stroke="#555" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#nhs4)"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 50) + '" y="0" width="48" height="150" fill="#18213d"/>').join("") +
      /* banner */
      '<rect x="70" y="20" width="260" height="34" rx="3" fill="' + GOLD + '"/><text x="200" y="44" text-anchor="middle" ' + font + ' font-size="20" fill="' + NAVY + '" letter-spacing="3">PROUD 2 PAY</text>' +
      /* the spinning record of the tape */
      '<g transform="translate(64 104)"><circle r="30" fill="#0b0b0d"/><g class="nh-spin"><circle r="30" fill="#0b0b0d"/><circle r="22" fill="none" stroke="#333" stroke-width="1"/><circle r="15" fill="none" stroke="#333" stroke-width="1"/><circle r="10" fill="' + BLUE + '"/><rect x="-1.5" y="-10" width="3" height="6" fill="#fff"/></g><circle r="2" fill="#000"/></g>' +
      /* display case + stacks */
      '<rect x="120" y="70" width="160" height="80" rx="3" fill="#0e1424" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="88" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" letter-spacing="4">CRENSHAW</text>' +
      Array.from({ length: 6 }, (_, i) => disc(140, 96 + i * 7)).join("") + Array.from({ length: 6 }, (_, i) => disc(220, 96 + i * 7)).join("") +
      '<rect x="182" y="104" width="36" height="26" rx="2" fill="#fff"/><text x="200" y="122" text-anchor="middle" ' + font + ' font-size="13" fill="#c0392b">$100</text>' +
      /* register */
      '<rect x="300" y="100" width="70" height="50" rx="3" fill="#3a3f48"/><rect x="306" y="106" width="58" height="16" fill="#0b0b0d"/><text x="335" y="118" text-anchor="middle" font-family="monospace" font-size="11" fill="#7ee0a8" class="nh-bl">SOLD</text>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (308 + (i % 4) * 14) + '" y="' + (128 + Math.floor(i / 4) * 9) + '" width="10" height="6" rx="1" fill="#cfd4da"/>').join("") +
      /* counter */
      '<rect x="0" y="150" width="400" height="12" fill="#7a5a3a"/><rect x="0" y="162" width="400" height="98" fill="#2a1f1a"/>' +
      /* the line of fans, from behind */
      person(60, 236, BLUE, "nh-bob") + person(120, 238, "#e8e2d4", "nh-bob nh-bob2") + person(180, 236, GOLD, "nh-bob") + person(240, 238, "#c0392b", "nh-bob nh-bob2") + person(300, 236, BLUE, "nh-bob") +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="10" fill="#e9e1cf" opacity=".85">ONE THOUSAND COPIES · ONE HUNDRED DOLLARS EACH</text>',
      sky("nhs4", "#0f1730", "#24325a"));
  }

  /* 5. Crenshaw Blvd and W Slauson Ave: NIPSEY tagged, the downtown LA skyline behind */
  function nhcorner() {
    const towers = '<g fill="#7a7f95">' +
      '<rect x="120" y="60" width="22" height="76"/><rect x="146" y="38" width="20" height="98"/>' +
      /* round tower with the stepped crown */
      '<rect x="172" y="30" width="30" height="106" rx="6"/><rect x="176" y="22" width="22" height="10" rx="3"/><rect x="180" y="16" width="14" height="8" rx="3"/>' +
      /* tall tower with the spire */
      '<path d="M214 136V30l18 -10v116z"/><path d="M223 22v-14" stroke="#7a7f95" stroke-width="2"/>' +
      '<rect x="238" y="54" width="22" height="82"/><rect x="264" y="70" width="18" height="66"/><rect x="96" y="84" width="20" height="52"/><rect x="286" y="86" width="16" height="50"/></g>' +
      Array.from({ length: 30 }, (_, i) => '<rect class="nh-flk' + (i % 3 ? "" : " nh-flk2") + '" x="' + (124 + (i * 23) % 170) + '" y="' + (44 + (i * 13) % 80) + '" width="3" height="3" fill="#ffe6a0" opacity=".8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#nhs5)"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + ((i * 59) % 400) + '" cy="' + ((i * 11) % 22 + 6) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      towers +
      '<text x="200" y="12" text-anchor="middle" ' + font + ' font-size="8" fill="#f3e6d0" opacity=".8">DOWNTOWN LA, UP CRENSHAW</text>' +
      palm(60, 134, 74) + palm(340, 134, 80, "nh-palm2") +
      '<rect x="0" y="130" width="400" height="94" fill="#d9c9a8"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#c4b391" stroke-width="1"/>').join("") +
      tag("NIPSEY", 18, 196, 44, BLUE, -6) + tag("ALL MONEY IN", 30, 152, 15, GOLD, -4) + tag("SLAUSON", 140, 218, 15, "#f2f2f2", -2) + tag("PROUD2PAY", 168, 150, 14, "#e56db1", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="346" y="72" width="6" height="152" fill="#2f2f2f"/>' +
      '<rect x="278" y="74" width="114" height="20" rx="2" fill="' + NAVY + '" stroke="#fff" stroke-width="1.5"/><text x="335" y="88" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Nipsey Hussle Sq</text>' +
      sign(278, 98, 114, "Crenshaw Blvd") + sign(278, 124, 114, "W Slauson Av") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="nh-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("nh-car", 0, 240, BLUE) +
      '<g class="nh-sp"><circle cx="232" cy="176" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="nh-sp nh-sp2"><circle cx="238" cy="170" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("nhs5", "#1a1838", "#c86a4a"));
  }

  window.SCENES = { nhstation, nhmarathon, nhstem, nhproud, nhcorner };
})();
