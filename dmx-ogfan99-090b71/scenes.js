/* DMX game (NYC map, Westchester: Yonkers — School Street Projects). Room 0 = the Bee-Line 7 bus pulling into Getty Square / Nepperhan Plaza,
   the Ruff Ryders dirt-bike run up the hill, St. John's Church on Getty Square ("Lord Give Me a Sign"), the School Street projects at night with a barking dog,
   and School St & Brook St (Earl "DMX" Simmons Way) with the Hudson and the Palisades down the hill. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes bikes{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.bk{animation:bikes 4.2s linear infinite}.bk2{animation-delay:-1.4s}.bk3{animation-delay:-2.8s}' +
    '@keyframes wheelie{0%,100%{transform:rotate(0deg)}40%,70%{transform:rotate(-16deg)}}.wh{transform-box:fill-box;transform-origin:100% 100%;animation:wheelie 1.4s ease-in-out infinite}' +
    '@keyframes puff{0%{opacity:.7;transform:translate(0,0) scale(.6)}100%{opacity:0;transform:translate(-26px,-10px) scale(1.6)}}.pf{transform-box:fill-box;transform-origin:50% 50%;animation:puff 1s ease-out infinite}.pf2{animation-delay:.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.5s}.bl3{animation-delay:1s}' +
    '@keyframes beam{0%,100%{opacity:.25}50%{opacity:.65}}.bm{animation:beam 3s ease-in-out infinite}' +
    '@keyframes fly{0%{transform:translate(0,0)}50%{transform:translate(40px,-14px)}100%{transform:translate(80px,0)}}.dv{animation:fly 5s ease-in-out infinite alternate}.dv2{animation-delay:-2.5s}' +
    '@keyframes flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.fl{transform-box:fill-box;transform-origin:50% 100%;animation:flap .5s ease-in-out infinite}' +
    '@keyframes bark{0%,55%{opacity:0;transform:translate(0,0)}65%{opacity:1}100%{opacity:0;transform:translate(14px,-12px)}}.bkk{animation:bark 1.6s ease-out infinite}.bkk2{animation-delay:.25s}' +
    '@keyframes jaw{0%,50%,100%{transform:rotate(0)}60%,80%{transform:rotate(14deg)}}.jw{transform-box:fill-box;transform-origin:0% 0%;animation:jaw 1.6s ease-in-out infinite}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.25}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes ripple{0%,100%{transform:translateX(0)}50%{transform:translateX(-10px)}}.rp{animation:ripple 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const RED = "#e0262f", CREAM = "#f2ead8", SILVER = "#d9dde3", GOLD = "#c9a24a", BRICK = "#9a4632", BRICK2 = "#7d3727";
  const pill = (x, y, txt) => '<rect x="' + (x - 13) + '" y="' + (y - 11) + '" width="26" height="22" rx="11" fill="#ffd200"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + font + ' font-size="15" fill="#10224a">' + txt + '</text>';
  const brickRows = (x, y, w, h, col) => { let b = ""; for (let yy = y + 7; yy < y + h; yy += 7) b += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + col + '" stroke-width="1"/>'; return b; };
  const windows = (x, y, w, h, gx, gy, lit) => { let s = ""; for (let yy = y + 8; yy < y + h - 10; yy += gy) for (let xx = x + 6; xx < x + w - 10; xx += gx) s += '<rect class="bl bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="8" height="10" fill="' + (lit && (xx * 7 + yy) % 3 ? "#ffd98a" : "#2a2f45") + '"/>'; return s; };

  /* 0. Getty Square, Yonkers: the Bee-Line 7 pulls into the Nepperhan Plaza stop (white bus, yellow + navy stripes, amber sign), downtown brick behind */
  function bus() {
    let win = "";
    for (let x = 40; x < 200; x += 34) win += '<rect x="' + x + '" y="112" width="26" height="26" rx="2" fill="#1f2b40"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#b0)"/>' + stars(8) +
      /* downtown brick + stone behind */
      '<rect x="0" y="60" width="110" height="120" fill="' + BRICK + '"/>' + brickRows(0, 60, 110, 120, BRICK2) + windows(0, 60, 110, 120, 22, 22, true) +
      '<rect x="110" y="40" width="90" height="140" fill="#b9a98c"/>' + windows(110, 40, 90, 140, 20, 24, true) + '<rect x="110" y="36" width="90" height="6" fill="#d8ccb2"/>' +
      '<rect x="200" y="74" width="110" height="106" fill="#6f4a3a"/>' + windows(200, 74, 110, 106, 22, 22, true) +
      '<rect x="310" y="52" width="90" height="128" fill="' + BRICK + '"/>' + brickRows(310, 52, 90, 128, BRICK2) + windows(310, 52, 90, 128, 20, 22, true) +
      /* sidewalk + shelter */
      '<rect x="0" y="176" width="400" height="12" fill="#a9a59c"/><rect x="0" y="188" width="400" height="72" fill="#3c3d42"/>' +
      '<path d="M0 226h400" stroke="#e9d27a" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* stop sign post */
      '<rect x="356" y="96" width="4" height="82" fill="#5b616b"/>' +
      '<rect x="286" y="62" width="110" height="44" rx="3" fill="#111"/><rect x="286" y="62" width="110" height="3" fill="#fff"/>' +
      '<text x="294" y="80" ' + font + ' font-size="12" fill="#fff">Getty Square</text><text x="294" y="97" ' + font + ' font-size="8.5" fill="#cfd3da">Nepperhan Plaza</text>' + pill(379, 92, "7") +
      /* the bus */
      '<g class="anim-train">' +
        '<rect x="20" y="98" width="290" height="86" rx="10" fill="#f6f6f2" stroke="#9aa0a8" stroke-width="2"/>' +
        '<rect x="20" y="150" width="290" height="10" fill="#ffd200"/><rect x="20" y="160" width="290" height="8" fill="#10224a"/>' + win +
        '<rect x="276" y="106" width="30" height="50" rx="4" fill="#1f2b40"/>' +
        '<rect x="206" y="101" width="66" height="9" rx="2" fill="#111"/><text x="239" y="108.5" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="8" fill="#ffb21f">7 GETTY SQ</text>' +
        '<rect x="214" y="114" width="34" height="60" rx="2" fill="#2a3a52" stroke="#9aa0a8"/><path d="M231 114v60" stroke="#9aa0a8"/>' +
        '<circle cx="70" cy="184" r="15" fill="#1a1a1a"/><circle cx="70" cy="184" r="6" fill="#9aa0a8"/><circle cx="250" cy="184" r="15" fill="#1a1a1a"/><circle cx="250" cy="184" r="6" fill="#9aa0a8"/>' +
        '<circle cx="304" cy="166" r="4" fill="#fff6c2"/><rect x="22" y="160" width="6" height="8" fill="' + RED + '"/>' +
      '</g>' +
      '<g class="car car2"><rect x="0" y="232" width="46" height="14" rx="4" fill="' + RED + '"/><circle cx="10" cy="247" r="4" fill="#111"/><circle cx="36" cy="247" r="4" fill="#111"/></g>' +
      '<text x="200" y="256" text-anchor="middle" ' + font + ' font-size="8" fill="#e8e3d8" letter-spacing="3">YONKERS, WESTCHESTER</text>',
      sky("b0", "#151a33", "#c46a4a"));
  }

  /* 1. The Ruff Ryders run: dirt bikes and a four-wheeler popping wheelies up a Yonkers hill, three-family houses on the slope */
  function bikes() {
    const bike = (cls, col) => '<g class="bk ' + cls + '"><g class="wh">' +
      '<circle cx="14" cy="200" r="11" fill="none" stroke="#111" stroke-width="5"/><circle cx="62" cy="200" r="11" fill="none" stroke="#111" stroke-width="5"/>' +
      '<path d="M14 200l18-18h18l12 18M32 182l6 18h10" stroke="#555b63" stroke-width="3" fill="none"/>' +
      '<path d="M30 180h24l6-10h-8z" fill="' + col + '"/><path d="M54 172l8-8" stroke="#222" stroke-width="3"/>' +
      '<path d="M36 178l4-22 8 2-2 20z" fill="#1b1b1f"/><circle cx="44" cy="150" r="8" fill="#222"/><rect x="38" y="146" width="14" height="5" rx="2" fill="#7f8fa6"/>' +
      '</g><circle class="pf" cx="2" cy="196" r="5" fill="#bfc3c8"/><circle class="pf pf2" cx="-4" cy="192" r="4" fill="#bfc3c8"/></g>';
    let houses = "";
    [[0, 92, "#c9b48f"], [70, 82, "#8aa1b5"], [140, 74, "#d6c6a4"], [210, 66, "#a35b45"], [280, 58, "#b7a07c"], [350, 50, "#7f9a86"]].forEach(([x, y, c]) => {
      houses += '<rect x="' + x + '" y="' + y + '" width="64" height="' + (176 - y) + '" fill="' + c + '"/><path d="M' + (x - 4) + ' ' + y + 'l36-18 36 18z" fill="#4a3a33"/>';
      for (let yy = y + 14; yy < 160; yy += 26) houses += '<rect x="' + (x + 10) + '" y="' + yy + '" width="12" height="16" fill="#ffe4a0" class="bl"/><rect x="' + (x + 40) + '" y="' + yy + '" width="12" height="16" fill="#2a2f45"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#b1)"/>' +
      '<circle cx="330" cy="40" r="20" fill="#ffd6a0" opacity=".85"/>' + houses +
      '<path d="M0 176h400v84H0z" fill="#3a3b40"/><path d="M0 174h400" stroke="#b5b0a6" stroke-width="5"/>' +
      '<path d="M0 232h400" stroke="#e9d27a" stroke-width="2" stroke-dasharray="20 14"/>' +
      bike("", RED) + bike("bk2", SILVER) +
      /* four-wheeler */
      '<g class="bk bk3"><rect x="10" y="196" width="60" height="14" rx="4" fill="#1d1d22"/><rect x="18" y="186" width="40" height="12" rx="3" fill="' + RED + '"/>' +
      '<circle cx="18" cy="214" r="10" fill="#111"/><circle cx="62" cy="214" r="10" fill="#111"/><path d="M40 186l2-20 8 1-2 19z" fill="#1b1b1f"/><circle cx="46" cy="160" r="7" fill="#222"/><path d="M56 180l10-8" stroke="#222" stroke-width="3"/></g>' +
      tag("RUFF RYDERS", 20, 128, 24, RED, -6),
      sky("b1", "#2a2a55", "#f08a4b"));
  }

  /* 2. St. John's Episcopal Church on Getty Square: gray stone, Gothic windows, the square tower, a beam of light breaking through the clouds, doves */
  function church() {
    const dove = (cls, x, y) => '<g class="dv ' + cls + '"><g transform="translate(' + x + ',' + y + ')"><path d="M0 0q8-4 16 0q-8 3-16 0z" fill="#fff"/><path class="fl" d="M5 -1q3-9 9-10q-2 7-6 11z" fill="#f2f2f2"/></g></g>';
    let stone = "";
    for (let y = 98; y < 210; y += 9) for (let x = (y % 18 ? 140 : 131); x < 344; x += 18) stone += '<rect x="' + x + '" y="' + y + '" width="16" height="7" fill="#8f939a" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#b2)"/>' +
      '<path class="bm" d="M236 0h34l70 210H190z" fill="#fff4c2" opacity=".5"/>' +
      '<g fill="#555c6e" opacity=".9"><ellipse cx="90" cy="34" rx="70" ry="18"/><ellipse cx="300" cy="28" rx="90" ry="20"/><ellipse cx="200" cy="18" rx="50" ry="12"/></g>' +
      dove("", 60, 70) + dove("dv2", 250, 56) +
      /* tower */
      '<rect x="40" y="58" width="80" height="152" fill="#7b8088"/><path d="M40 58v-10h10v10h10v-10h10v10h10v-10h10v10h10v-10h10v10" fill="#7b8088"/>' +
      '<path d="M66 84q14-22 28 0v40H66z" fill="#2c3346"/><path d="M80 66v58" stroke="#7b8088" stroke-width="2"/>' +
      '<circle cx="80" cy="150" r="12" fill="#e8dcc0" stroke="#4d5260" stroke-width="2"/><path d="M80 150V142M80 150l6 3" stroke="#222" stroke-width="2"/>' +
      /* nave */
      '<rect x="120" y="98" width="240" height="112" fill="#868b93"/>' + stone +
      '<path d="M116 100l122-50 126 50z" fill="#4c5160"/>' +
      [150, 200, 250, 300].map(x => '<path d="M' + x + ' 186v-46q12-22 24 0v46z" fill="#3a3f8f"/><path d="M' + (x + 12) + ' 120v66M' + x + ' 158h24" stroke="#c9a24a" stroke-width="1.5"/>').join("") +
      '<circle cx="238" cy="80" r="11" fill="#3a3f8f" stroke="#c9a24a" stroke-width="2"/><path d="M238 69v22M227 80h22" stroke="#c9a24a" stroke-width="1.5"/>' +
      '<path d="M40 210h360" stroke="#5d6270" stroke-width="3"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#45464c"/><rect x="0" y="210" width="400" height="6" fill="#9e9a92"/>' +
      '<g class="car"><rect x="0" y="232" width="44" height="14" rx="4" fill="#2a5aa8"/><circle cx="10" cy="247" r="4" fill="#111"/><circle cx="34" cy="247" r="4" fill="#111"/></g>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="8" fill="#e8e3d8" letter-spacing="3">ST. JOHN\'S CHURCH, GETTY SQUARE</text>',
      sky("b2", "#3a3f5c", "#c9b08a"));
  }

  /* 3. The School Street projects at night: brick towers, lit windows, a chain-link fence, his dog in the yard barking at the moon */
  function projects() {
    let fence = "";
    for (let x = 0; x < 400; x += 10) fence += '<path d="M' + x + ' 170l10 10M' + (x + 10) + ' 170l-10 10M' + x + ' 180l10 10M' + (x + 10) + ' 180l-10 10M' + x + ' 190l10 10M' + (x + 10) + ' 190l-10 10" stroke="#8f959c" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#b3)"/>' + stars(18) +
      '<circle cx="330" cy="46" r="24" fill="#f4efd8"/><circle cx="338" cy="40" r="5" fill="#ddd6bc"/><circle cx="322" cy="54" r="3" fill="#ddd6bc"/>' +
      [[10, 40, 100], [130, 60, 92], [236, 34, 90]].map(([x, y, w]) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (170 - y) + '" fill="' + BRICK2 + '"/>' + brickRows(x, y, w, 170 - y, "#5e281c") + windows(x, y, w, 170 - y, 16, 18, true) +
        '<rect x="' + x + '" y="' + (y - 4) + '" width="' + w + '" height="5" fill="#4a1f16"/>').join("") +
      '<rect x="0" y="168" width="400" height="92" fill="#2c3a2a"/>' +
      '<rect x="0" y="168" width="400" height="34" fill="none"/>' + fence + '<path d="M0 170h400M0 200h400" stroke="#a7adb3" stroke-width="2"/>' +
      [40, 140, 240, 340].map(x => '<rect x="' + (x - 2) + '" y="166" width="4" height="36" fill="#a7adb3"/>').join("") +
      '<path d="M120 172q10 6 22 0l-4 12q-8 3-14 0z" fill="' + RED + '"/>' +
      /* the dog: stocky, cropped ears, chain-collar, barking */
      '<g transform="translate(176 196)">' +
        '<path d="M0 26q-4-26 22-28h40q18 0 22 14l-2 14z" fill="#3b3a3f"/>' +
        '<rect x="6" y="22" width="9" height="22" rx="3" fill="#3b3a3f"/><rect x="24" y="22" width="9" height="22" rx="3" fill="#3b3a3f"/><rect x="62" y="22" width="9" height="22" rx="3" fill="#3b3a3f"/><rect x="74" y="20" width="9" height="24" rx="3" fill="#3b3a3f"/>' +
        '<path d="M0 6q-12-4-14-14" stroke="#3b3a3f" stroke-width="5" fill="none" stroke-linecap="round"/>' +
        '<path d="M70 -2q2-22 22-22q20 2 22 18q-2 8-16 10h-20z" fill="#46454b"/>' +
        '<path d="M76 -22l-2-12 10 8z" fill="#46454b"/><path d="M90 -24l2-12 6 10z" fill="#46454b"/>' +
        '<circle cx="98" cy="-12" r="2.4" fill="#ffd200"/><circle cx="112" cy="-8" r="2.6" fill="#111"/>' +
        '<path class="jw" d="M96 4h16l-2 6h-14z" fill="#2f2e33"/>' +
        '<path d="M70 0q10 6 24 4" stroke="' + SILVER + '" stroke-width="3" fill="none" stroke-dasharray="3 2"/>' +
      '</g>' +
      '<g class="bkk"><text x="300" y="168" ' + font + ' font-size="16" fill="#fff">ARF!</text></g><g class="bkk bkk2"><text x="322" y="148" ' + font + ' font-size="12" fill="#ffd200">ARF!</text></g>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="8" fill="#e8e3d8" letter-spacing="3">SCHOOL STREET, YONKERS</text>',
      sky("b3", "#070914", "#252d4d"));
  }

  /* 4. School St & Brook St (Earl "DMX" Simmons Way): green signs, the brick wall tagged DMX, the Hudson and the Palisades down the hill at dusk */
  function corner() {
    let water = "";
    for (let x = -20; x < 420; x += 26) water += '<path d="M' + x + ' 110q6-3 12 0" stroke="#e8c79a" stroke-width="1.4" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#b4)"/>' +
      '<circle cx="80" cy="70" r="22" fill="#ffcf7a" opacity=".9"/>' +
      /* palisades + river */
      '<path d="M0 92q40-14 90-10t110-6 120 4 80-2v20H0z" fill="#3f3b45"/><path d="M0 100h400v6H0z" fill="#5a5260"/>' +
      '<rect x="0" y="104" width="400" height="20" fill="#5b6f8f"/><g class="rp">' + water + '</g>' +
      /* wall */
      '<rect x="0" y="120" width="400" height="106" fill="' + BRICK + '"/>' + brickRows(0, 120, 400, 106, BRICK2) +
      '<rect x="0" y="118" width="400" height="5" fill="#5e281c"/>' +
      tag("DMX", 18, 200, 66, RED, -6) + tag("BLOODLINE", 150, 214, 22, CREAM, -4) + tag("WHAT!", 170, 162, 26, "#ffd200", -8) + tag("DARK MAN X", 18, 146, 16, SILVER, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="238" width="44" height="13" rx="4" fill="#1d1d22"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* sign post */
      '<rect x="352" y="40" width="5" height="188" fill="#3d4b3f"/>' +
      '<rect x="292" y="44" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="344" y="60" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">School St</text>' +
      '<rect x="292" y="70" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="344" y="86" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Brook St</text>' +
      '<rect x="270" y="96" width="126" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="333" y="110" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">Earl "DMX" Simmons Way</text>' +
      '<circle class="flk" cx="354" cy="40" r="4" fill="#fff6c2"/>',
      sky("b4", "#2a1f3d", "#e0844f"));
  }

  window.SCENES = { bus: bus, bikes: bikes, church: church, projects: projects, corner: corner };
})();
