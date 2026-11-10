/* caskey scenes (Regions tab: South Florida region; Winter Springs, Seminole County, just north of Orlando - the 407).
   CSS classes prefixed ck- (the page's own anim-train slides the train in).
   1 SunRail pulling into Longwood station (at-grade, brown gabled canopies with cupolas), the stop next to Winter Springs.
   2 Winter Springs High School on Tuskawilla Rd (purple + Vegas gold, the Bears) - where he started writing raps, sophomore year.
   3 The Cross Seminole Trail bridge arching over SR 434, bikes rolling across.
   4 The Black Sheep booth: one black sheep in a field of white, mic and meters - his Black Sheep tapes and label.
   5 Tuskawilla Rd and SR 434: green signs, CASKEY tagged on the wall, Lake Jesup's cypress and a gator behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ckbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.ck-bob{animation:ckbob 1.4s ease-in-out infinite}.ck-bob2{animation-delay:-.7s}' +
    '@keyframes ckride{from{transform:translateX(-60px)}to{transform:translateX(440px)}}.ck-ride{animation:ckride 7s linear infinite}.ck-ride2{animation-duration:9s;animation-delay:-4s}' +
    '@keyframes ckcar{from{transform:translateX(-90px)}to{transform:translateX(470px)}}.ck-car{animation:ckcar 5s linear infinite}.ck-car2{animation-duration:7s;animation-delay:-3s}' +
    '@keyframes ckglow{0%,100%{opacity:.35}50%{opacity:1}}.ck-glow{animation:ckglow 1.3s ease-in-out infinite}.ck-glow2{animation-delay:-.65s}' +
    '@keyframes ckpage{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(60px,-70px) rotate(40deg);opacity:0}}.ck-page{transform-box:fill-box;animation:ckpage 3.2s ease-out infinite}.ck-page2{animation-delay:-1.6s}' +
    '@keyframes ckmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.ck-m{transform-box:fill-box;transform-origin:50% 100%;animation:ckmeter .8s ease-in-out infinite}.ck-m2{animation-delay:-.3s}.ck-m3{animation-delay:-.55s}' +
    '@keyframes ckgator{0%,100%{transform:translateX(0)}50%{transform:translateX(-30px)}}.ck-gator{animation:ckgator 9s ease-in-out infinite}' +
    '@keyframes cksway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.ck-sway{transform-box:fill-box;transform-origin:50% 100%;animation:cksway 3.4s ease-in-out infinite}' +
    '@keyframes ckspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ck-sp{animation:ckspray 1.4s ease-out infinite}.ck-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const label = (x, w, txt) => '<rect x="' + x + '" y="232" width="' + w + '" height="20" rx="3" fill="#000" opacity=".6"/><text x="' + (x + w / 2) + '" y="246" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const PUR = "#5b2a86", GOLD = "#c5b358", SUN = "#ffc72c", GRN = "#2f8a4c", LAV = "#a98bff";
  const palm = (x, base, h, s) => {
    const top = base - h;
    return '<g><path d="M' + (x - 3 * s) + ' ' + base + 'Q' + (x + 3 * s) + ' ' + (base - h / 2) + ' ' + (x - 1 * s) + ' ' + top + 'h' + (4 * s) + 'Q' + (x + 6 * s) + ' ' + (base - h / 2) + ' ' + (x + 3 * s) + ' ' + base + 'z" fill="#6f5f48"/>' +
      '<g class="ck-sway" fill="#2f6b3a">' + [-80, -50, -20, 10, 40, 70, 200, 160].map(a => '<path transform="rotate(' + a + ' ' + (x + s) + ' ' + top + ')" d="M' + (x + s) + ' ' + top + 'l' + (30 * s) + ' ' + (-7 * s) + 'l' + (-4 * s) + ' ' + (11 * s) + 'z"/>').join("") + '</g></g>';
  };
  const oak = (x, base, r) => '<g><rect x="' + (x - 4) + '" y="' + (base - r) + '" width="8" height="' + r + '" fill="#5a4632"/><g fill="#3d6b3a"><circle cx="' + x + '" cy="' + (base - r) + '" r="' + r * .7 + '"/><circle cx="' + (x - r * .6) + '" cy="' + (base - r * .8) + '" r="' + r * .5 + '"/><circle cx="' + (x + r * .6) + '" cy="' + (base - r * .8) + '" r="' + r * .5 + '"/></g>' +
    '<path d="M' + (x - r * .9) + ' ' + (base - r * .7) + 'v' + r * .35 + 'M' + (x - r * .5) + ' ' + (base - r * .6) + 'v' + r * .4 + 'M' + (x + r * .7) + ' ' + (base - r * .7) + 'v' + r * .38 + '" stroke="#b9b9a6" stroke-width="2" opacity=".7"/></g>';
  const car = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="46" height="13" rx="4" fill="' + c + '"/><rect x="10" y="' + (y - 7) + '" width="24" height="8" rx="3" fill="' + c + '"/><circle cx="10" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="36" cy="' + (y + 14) + '" r="4" fill="#111"/><rect x="44" y="' + (y + 3) + '" width="3" height="3" fill="#fff6c2"/></g>';
  const bike = (cls, y) => '<g class="' + cls + '"><circle cx="8" cy="' + y + '" r="6" fill="none" stroke="#222" stroke-width="2"/><circle cx="28" cy="' + y + '" r="6" fill="none" stroke="#222" stroke-width="2"/><path d="M8 ' + y + 'l8 -10h10l2 10M16 ' + (y - 10) + 'l4 10" stroke="#222" stroke-width="2" fill="none"/>' +
    '<rect x="14" y="' + (y - 26) + '" width="8" height="14" rx="3" fill="' + LAV + '"/><circle cx="18" cy="' + (y - 30) + '" r="4" fill="#3a2a22"/></g>';

  /* 1. SunRail into Longwood station */
  function ckstop() {
    const win = (x0) => Array.from({ length: 5 }, (_, i) => '<rect x="' + (x0 + 10 + i * 30) + '" y="120" width="22" height="12" rx="2" fill="#1b2630"/><rect x="' + (x0 + 10 + i * 30) + '" y="140" width="22" height="12" rx="2" fill="#1b2630"/>').join("");
    const coach = (x0) => '<rect x="' + x0 + '" y="110" width="166" height="66" rx="6" fill="#f4f5f2" stroke="#7d8388" stroke-width="2"/>' + win(x0) +
      '<rect x="' + x0 + '" y="158" width="166" height="7" fill="' + SUN + '"/><rect x="' + x0 + '" y="165" width="166" height="4" fill="' + GRN + '"/>';
    const train = '<g class="anim-train">' + coach(20) + coach(190) + '<path d="M356 110h20q10 0 12 14v52h-32z" fill="#f4f5f2" stroke="#7d8388" stroke-width="2"/><rect x="362" y="118" width="20" height="16" rx="3" fill="#1b2630"/>' +
      '<rect x="356" y="158" width="32" height="7" fill="' + SUN + '"/><rect x="356" y="165" width="32" height="4" fill="' + GRN + '"/><circle cx="380" cy="150" r="3" fill="#fff6c2" class="ck-glow"/>' +
      [40, 150, 210, 320].map(x => '<circle cx="' + x + '" cy="180" r="7" fill="#222"/>').join("") + '</g>';
    const canopy = (x) => '<g><path d="M' + x + ' 76l46 -22l46 22z" fill="#6b4a2e" stroke="#4a311d" stroke-width="2"/><rect x="' + (x + 38) + '" y="40" width="16" height="16" fill="#e9dcc4" stroke="#4a311d" stroke-width="1.5"/><path d="M' + (x + 36) + ' 42l10 -8l10 8z" fill="#6b4a2e"/>' +
      '<rect x="' + (x + 12) + '" y="62" width="10" height="8" fill="#e9dcc4"/><rect x="' + (x + 70) + '" y="62" width="10" height="8" fill="#e9dcc4"/>' +
      '<rect x="' + (x + 6) + '" y="76" width="5" height="30" fill="#e9dcc4"/><rect x="' + (x + 81) + '" y="76" width="5" height="30" fill="#e9dcc4"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cks1)"/>' +
      '<circle cx="330" cy="40" r="18" fill="' + SUN + '" opacity=".85"/>' +
      oak(30, 106, 40) + oak(380, 106, 36) + palm(300, 106, 70, .8) +
      canopy(60) + canopy(220) +
      '<rect x="0" y="104" width="400" height="6" fill="#bdb6a8"/>' +
      train +
      '<rect x="0" y="186" width="400" height="10" fill="#8b8579"/><rect x="0" y="196" width="400" height="36" fill="#cfc8b8"/><rect x="0" y="196" width="400" height="5" fill="' + SUN + '"/>' +
      /* station sign */
      '<rect x="112" y="204" width="176" height="24" rx="3" fill="#111"/><text x="150" y="221" ' + font + ' font-size="13" fill="#fff">LONGWOOD</text>' +
      '<circle cx="128" cy="216" r="9" fill="' + SUN + '"/><text x="128" y="220" text-anchor="middle" ' + font + ' font-size="8" fill="#111">SR</text>' +
      '<text x="234" y="221" ' + font + ' font-size="8" fill="' + SUN + '">SUNRAIL</text>' +
      '<rect x="0" y="232" width="400" height="28" fill="#5e6066"/>' +
      label(68, 264, "SUNRAIL · LONGWOOD STATION · NEXT TO WINTER SPRINGS"),
      sky("cks1", "#7fb7e8", "#f4d9a8"));
  }

  /* 2. Winter Springs High School, Tuskawilla Rd */
  function ckschool() {
    return svg(
      '<rect width="400" height="260" fill="url(#cks2)"/>' +
      oak(26, 176, 44) + oak(374, 176, 40) +
      '<rect x="60" y="86" width="280" height="96" fill="#e8dcc2" stroke="#a89878" stroke-width="2"/>' +
      '<rect x="150" y="60" width="100" height="122" fill="#efe4cc" stroke="#a89878" stroke-width="2"/><path d="M144 62h112l-8 -14h-96z" fill="' + PUR + '"/>' +
      '<rect x="60" y="80" width="280" height="8" fill="' + PUR + '"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (72 + i * 18) + '" y="100" width="12" height="20" fill="#5d7f95"/><rect x="' + (72 + i * 18) + '" y="132" width="12" height="20" fill="#5d7f95"/>').join("") +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (262 + i * 18) + '" y="100" width="12" height="20" fill="#5d7f95"/><rect x="' + (262 + i * 18) + '" y="132" width="12" height="20" fill="#5d7f95"/>').join("") +
      '<rect x="168" y="76" width="64" height="20" fill="' + PUR + '"/><text x="200" y="90" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">BEARS</text>' +
      /* paw print */
      '<g fill="' + GOLD + '"><ellipse cx="200" cy="124" rx="12" ry="10"/><circle cx="186" cy="108" r="4.5"/><circle cx="196" cy="103" r="4.5"/><circle cx="206" cy="103" r="4.5"/><circle cx="215" cy="108" r="4.5"/></g>' +
      '<rect x="182" y="146" width="36" height="36" fill="#3a2f4a"/><path d="M200 146v36" stroke="#a89878"/>' +
      '<rect x="40" y="182" width="320" height="10" fill="#bcb3a0"/>' +
      '<rect x="0" y="192" width="400" height="40" fill="#5f9b4a"/>' +
      /* flying notebook pages - where the raps started */
      '<g class="ck-page"><rect x="250" y="190" width="18" height="22" fill="#fff" stroke="#999"/><path d="M253 196h12M253 201h12M253 206h9" stroke="#7aa0c8"/></g>' +
      '<g class="ck-page ck-page2"><rect x="120" y="196" width="18" height="22" fill="#fff" stroke="#999"/><path d="M123 202h12M123 207h12M123 212h9" stroke="#7aa0c8"/></g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#5e6066"/>' +
      label(70, 260, "WINTER SPRINGS HIGH · TUSKAWILLA RD · THE BEARS"),
      sky("cks2", "#6fb0e6", "#d8ecf6"));
  }

  /* 3. Cross Seminole Trail bridge over SR 434 */
  function cktrail() {
    return svg(
      '<rect width="400" height="260" fill="url(#cks3)"/>' +
      oak(30, 170, 46) + oak(90, 172, 34) + palm(330, 172, 90, 1) + oak(380, 170, 40) +
      '<rect x="0" y="170" width="400" height="62" fill="#4b4d52"/><path d="M0 200h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="18 12"/>' +
      car("ck-car", 184, "#c43b3b") + car("ck-car ck-car2", 210, "#e7e7e7") +
      /* the arch bridge */
      '<path d="M40 130q160 -110 320 0" fill="none" stroke="#e9e6dc" stroke-width="8"/>' +
      Array.from({ length: 13 }, (_, i) => { const x = 60 + i * 23.3; const t = (x - 40) / 320; const y = 130 - 4 * 55 * t * (1 - t) * 2; return '<path d="M' + x + ' ' + y.toFixed(1) + 'V128" stroke="#e9e6dc" stroke-width="2"/>'; }).join("") +
      '<rect x="20" y="126" width="360" height="10" fill="#d8d3c4"/><rect x="20" y="122" width="360" height="4" fill="' + PUR + '"/>' +
      '<rect x="16" y="136" width="20" height="40" fill="#cfc9b8"/><rect x="364" y="136" width="20" height="40" fill="#cfc9b8"/>' +
      bike("ck-ride", 118) + bike("ck-ride ck-ride2", 118) +
      '<rect x="146" y="148" width="108" height="16" rx="2" fill="#0f6b3a" stroke="#fff"/><text x="200" y="160" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">SR 434</text>' +
      '<rect x="0" y="232" width="400" height="28" fill="#5e6066"/>' +
      label(80, 240, "CROSS SEMINOLE TRAIL · OVER SR 434"),
      sky("cks3", "#5aa6e0", "#f6e3b4"));
  }

  /* 4. The Black Sheep booth */
  function ckbooth() {
    const sheep = (x, y, c, cls) => '<g class="' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="20" ry="13" fill="' + c + '"/><circle cx="' + (x - 12) + '" cy="' + (y - 8) + '" r="8" fill="' + c + '"/><circle cx="' + (x + 2) + '" cy="' + (y - 11) + '" r="8" fill="' + c + '"/><circle cx="' + (x + 13) + '" cy="' + (y - 6) + '" r="7" fill="' + c + '"/>' +
      '<ellipse cx="' + (x + 22) + '" cy="' + (y - 4) + '" rx="7" ry="6" fill="#2a2a2a"/><path d="M' + (x - 10) + ' ' + (y + 10) + 'v12M' + (x + 10) + ' ' + (y + 10) + 'v12" stroke="#2a2a2a" stroke-width="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cks4)"/>' +
      /* booth wall + window */
      '<rect x="0" y="0" width="400" height="130" fill="#17131f"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="36" height="130" fill="#221b2e"/>').join("") +
      '<rect x="40" y="20" width="200" height="96" rx="4" fill="#0b0a10" stroke="#3a3346" stroke-width="3"/>' +
      '<text x="140" y="56" text-anchor="middle" ' + font + ' font-size="20" fill="' + LAV + '" class="ck-glow">ON AIR</text>' +
      '<g fill="' + GOLD + '"><rect class="ck-m" x="70" y="72" width="10" height="34"/><rect class="ck-m ck-m2" x="86" y="72" width="10" height="34"/><rect class="ck-m ck-m3" x="102" y="72" width="10" height="34"/><rect class="ck-m" x="168" y="72" width="10" height="34"/><rect class="ck-m ck-m3" x="184" y="72" width="10" height="34"/><rect class="ck-m ck-m2" x="200" y="72" width="10" height="34"/></g>' +
      /* mic */
      '<path d="M310 130V60" stroke="#888" stroke-width="3"/><rect x="298" y="30" width="24" height="34" rx="12" fill="#2a2a2a" stroke="#999" stroke-width="2"/><circle cx="310" cy="47" r="20" fill="none" stroke="#555" stroke-width="2" stroke-dasharray="3 3"/>' +
      /* the field */
      '<rect x="0" y="130" width="400" height="102" fill="#4f8a3c"/>' +
      sheep(60, 176, "#f2f2ee", "ck-bob") + sheep(130, 196, "#f2f2ee", "ck-bob ck-bob2") + sheep(280, 200, "#f2f2ee", "ck-bob") + sheep(345, 172, "#f2f2ee", "ck-bob ck-bob2") +
      sheep(205, 172, "#1a1a1a", "ck-bob ck-bob2") +
      tag("BLACK SHEEP", 150, 150, 18, LAV, -4) +
      '<rect x="0" y="232" width="400" height="28" fill="#2a2433"/>' +
      label(110, 180, "THE BLACK SHEEP · CAS SEASON"),
      sky("cks4", "#2a2140", "#5b2a86"));
  }

  /* 5. Tuskawilla Rd and SR 434 */
  function ckcorner() {
    const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
    const cypress = (x, base, h) => '<g><path d="M' + (x - 7) + ' ' + base + 'l4 -' + (h * .45) + 'h6l4 ' + (h * .45) + 'z" fill="#4a3a2a"/><path d="M' + x + ' ' + (base - h) + 'l-13 ' + (h * .62) + 'h26z" fill="#3c5a34"/><path d="M' + (x - 9) + ' ' + (base - h * .42) + 'v12M' + (x + 7) + ' ' + (base - h * .45) + 'v14" stroke="#b9b9a6" stroke-width="1.5" opacity=".7"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ckc1)"/>' +
      /* Lake Jesup behind */
      '<rect x="0" y="118" width="400" height="36" fill="#5e8fa3"/><path d="M0 130h400M0 142h400" stroke="#86b3c4" stroke-width="1" opacity=".6"/>' +
      cypress(60, 124, 60) + cypress(110, 122, 46) + cypress(300, 124, 54) + cypress(352, 122, 40) +
      '<g class="ck-gator"><path d="M200 140q20 -6 50 0q-8 4 -50 0z" fill="#3b4a2a"/><circle cx="244" cy="137" r="1.5" fill="#d8e070"/></g>' +
      palm(30, 154, 100, 1) +
      '<rect x="0" y="154" width="400" height="78" fill="#d9cbb4"/>' +
      '<g stroke="#bfae94" stroke-width="1">' + Array.from({ length: 4 }, (_, r) => '<path d="M0 ' + (170 + r * 16) + 'h400"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M' + (i * 40 + (r % 2) * 20) + ' ' + (154 + r * 16) + 'v16"/>').join("")).join("") + '</g>' +
      tag("CASKEY", 30, 214, 50, LAV, -5) +
      tag("BLACK SHEEP", 230, 182, 16, "#1a1a1a", 4) + tag("407", 268, 222, 22, GOLD, -3) +
      '<g fill="' + LAV + '" opacity=".75"><circle class="ck-sp" cx="216" cy="200" r="3"/><circle class="ck-sp ck-sp2" cx="224" cy="194" r="2.5"/><circle class="ck-sp" cx="220" cy="206" r="2"/></g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#5e6066"/>' +
      '<rect x="364" y="80" width="5" height="152" fill="#7a7f86"/>' +
      sign(270, 70, 126, "TUSKAWILLA RD") + sign(296, 96, 100, "SR 434") +
      label(12, 300, "TUSKAWILLA RD &amp; SR 434 · WINTER SPRINGS · LAKE JESUP"),
      sky("ckc1", "#1d1236", "#d27a4a"));
  }

  window.SCENES = { ckstop, ckschool, cktrail, ckbooth, ckcorner };
})();
