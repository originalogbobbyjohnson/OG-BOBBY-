/* cyndilauper scenes (NYC map, Queens: born in Astoria, raised in Ozone Park at 95-11 104 St; Richmond Hill High School). CSS classes prefixed cyl- (the page's own anim-train is kept).
   1 104 St on the A: the elevated station over Liberty Av, green steel el, a silver A train sliding in.
   2 Richmond Hill High School, 114 St: the long red-brick school with limestone trim and the center tower, flag waving.
   3 The Bowery at Coney Island: the street where the She's So Unusual cover was shot, string bulbs, game booths, a pair of red heels left on the sidewalk, petals flying.
   4 Al Hirschfeld Theatre, W 45 St: Kinky Boots (her Tony-winning score) on the marquee, a giant red boot, chasing bulbs.
   5 104 St and 95 Av, Ozone Park: green signs, CYNDI tagged on the wall, the green A train el on Liberty Av behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cylflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.25}55%{opacity:.95}}.cyl-flk{animation:cylflick 2.4s infinite}.cyl-flk2{animation-delay:.9s}' +
    '@keyframes cylchase{0%,100%{opacity:1}50%{opacity:.2}}.cyl-ch{animation:cylchase .8s infinite}.cyl-ch2{animation-delay:.4s}' +
    '@keyframes cylflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.cyl-flag{transform-box:fill-box;transform-origin:0 50%;animation:cylflag 1.6s ease-in-out infinite}' +
    '@keyframes cylpet{0%{transform:translate(0,0) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(90px,-110px) rotate(300deg);opacity:0}}.cyl-pet{animation:cylpet 4s linear infinite}.cyl-pet2{animation-delay:-1.3s}.cyl-pet3{animation-delay:-2.6s}' +
    '@keyframes cylboot{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-6px) rotate(4deg)}}.cyl-boot{transform-box:fill-box;transform-origin:50% 100%;animation:cylboot 1.8s ease-in-out infinite}' +
    '@keyframes cylcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.cyl-car{animation:cylcar 7s linear infinite}' +
    '@keyframes cylcarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.cyl-carL{animation:cylcarL 8.5s linear infinite}' +
    '@keyframes cylel{from{transform:translateX(-420px)}to{transform:translateX(420px)}}.cyl-el{animation:cylel 9s linear infinite}' +
    '@keyframes cylspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cyl-sp{animation:cylspray 1.4s ease-out infinite}.cyl-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (cx, cy, r, txt, color, dark) => '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + color + '"/><text x="' + cx + '" y="' + (cy + r * 0.38) + '" text-anchor="middle" ' + font + ' font-size="' + (r * 1.15) + '" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const ORANGE = "#ff7a2f", PINK = "#ff4fa0", TEAL = "#2fd6c3", YEL = "#ffd23f", ABLUE = "#0039a6", ELG = "#4f7a5a";

  /* 1. 104 St (A), elevated over Liberty Av */
  function clstation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (46 + i * 50) + '" y="120" width="36" height="22" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="110" width="336" height="64" rx="6" fill="#c9ced3" stroke="#6d757c" stroke-width="2"/>' + win +
      Array.from({ length: 16 }, (_, i) => '<path d="M' + (30 + i * 20) + ' 148v22" stroke="#aeb4ba" stroke-width="1.5"/>').join("") +
      '<rect x="336" y="114" width="20" height="56" rx="4" fill="#aeb4ba"/><circle cx="346" cy="164" r="3.5" fill="#fff6c2"/>' +
      bullet(310, 130, 9, "A", ABLUE) + '</g>';
    const roofs = Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 52) + '" y="' + (70 + (i % 3) * 8) + '" width="46" height="40" fill="' + ["#9a5a44", "#b9a58a", "#8a6a5a"][i % 3] + '"/>').join("");
    const posts = Array.from({ length: 6 }, (_, i) => '<rect x="' + (14 + i * 76) + '" y="186" width="10" height="74" fill="' + ELG + '"/><path d="M' + (8 + i * 76) + ' 188h22" stroke="#3a5a42" stroke-width="4"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cyls1)"/>' + roofs +
      '<path d="M0 60h400" stroke="#3a5a42" stroke-width="4"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (10 + i * 48) + '" y="56" width="5" height="54" fill="' + ELG + '"/>').join("") +
      '<rect x="0" y="50" width="400" height="10" fill="' + ELG + '"/>' +
      '<rect x="60" y="14" width="230" height="34" rx="3" fill="#111"/><rect x="60" y="16" width="230" height="2" fill="#fff"/>' +
      '<text x="72" y="39" ' + font + ' font-size="20" fill="#fff">104 St</text>' + bullet(270, 31, 11, "A", ABLUE) +
      '<text x="140" y="39" ' + font + ' font-size="10" fill="#ccc">Liberty Av</text>' +
      '<g class="cyl-flk"><rect x="310" y="22" width="44" height="6" rx="2" fill="#fffbe6"/></g>' +
      train +
      '<rect x="0" y="174" width="400" height="14" fill="#8d8a84"/><rect x="0" y="174" width="400" height="5" fill="' + YEL + '"/>' +
      Array.from({ length: 40 }, (_, i) => '<circle cx="' + (6 + i * 10) + '" cy="176.5" r="1.2" fill="#a88d1a"/>').join("") +
      posts + '<rect x="0" y="236" width="400" height="24" fill="#4a4a4f"/>' + car("cyl-car", 0, 240, "#ff7a2f"),
      sky("cyls1", "#ffb36b", "#ffe3b8"));
  }

  /* 2. Richmond Hill High School */
  function clschool() {
    const wins = (x0, n) => Array.from({ length: n }, (_, i) => Array.from({ length: 3 }, (_, j) => '<rect x="' + (x0 + i * 22) + '" y="' + (98 + j * 30) + '" width="12" height="18" fill="#cfe4f2" stroke="#e8dcc2" stroke-width="2"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cyls2)"/>' +
      '<rect x="20" y="86" width="360" height="110" fill="#a4442f"/>' +
      '<rect x="20" y="86" width="360" height="6" fill="#e8dcc2"/><rect x="20" y="124" width="360" height="3" fill="#e8dcc2"/><rect x="20" y="154" width="360" height="3" fill="#e8dcc2"/>' +
      wins(30, 6) + wins(250, 6) +
      '<rect x="164" y="40" width="72" height="156" fill="#ab4a33"/><rect x="164" y="40" width="72" height="8" fill="#e8dcc2"/>' +
      '<path d="M164 40l36 -22 36 22z" fill="#5b6a74"/>' +
      '<rect x="176" y="58" width="48" height="40" fill="#e8dcc2"/><rect x="182" y="64" width="16" height="28" fill="#cfe4f2"/><rect x="202" y="64" width="16" height="28" fill="#cfe4f2"/>' +
      '<path d="M178 196v-50q22 -20 44 0v50z" fill="#e8dcc2"/><path d="M186 196v-44q14 -12 28 0v44z" fill="#4a2a1c"/>' +
      '<rect x="44" y="64" width="2" height="22" fill="#ccc"/><g class="cyl-flag"><rect x="46" y="64" width="20" height="12" fill="#c8102e"/><rect x="46" y="64" width="9" height="6" fill="#0a3161"/></g>' +
      '<rect x="40" y="200" width="320" height="22" rx="3" fill="#111"/><text x="200" y="215" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">RICHMOND HILL HIGH SCHOOL · 114 ST</text>' +
      '<rect x="0" y="222" width="400" height="38" fill="#5c8a4a"/>' +
      '<path d="M0 226h400" stroke="#4a7a3a" stroke-width="3"/>',
      sky("cyls2", "#7cc4f0", "#e6f4ff"));
  }

  /* 3. The Bowery at Coney Island (She's So Unusual cover street) */
  function clconey() {
    const booth = (x, c1, c2, lbl) => '<rect x="' + x + '" y="96" width="84" height="104" fill="#fff6e6"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (x + i * 14) + ' 96h14l-7 18z" fill="' + (i % 2 ? c1 : c2) + '"/>').join("") +
      '<rect x="' + (x + 6) + '" y="120" width="72" height="56" fill="#2a1a3a"/><text x="' + (x + 42) + '" y="152" text-anchor="middle" ' + font + ' font-size="11" fill="' + YEL + '">' + lbl + '</text>' +
      '<rect x="' + x + '" y="176" width="84" height="24" fill="' + c1 + '"/>';
    const bulbs = Array.from({ length: 20 }, (_, i) => '<circle class="cyl-ch' + (i % 2 ? " cyl-ch2" : "") + '" cx="' + (8 + i * 20) + '" cy="' + (52 + Math.sin(i / 3) * 6) + '" r="3.5" fill="' + [YEL, PINK, TEAL][i % 3] + '"/>').join("");
    const shoe = (x, y, c) => '<path d="M' + x + ' ' + y + 'h7l9 11l15 2q5 1 5 6h-36z" fill="' + c + '" stroke="#7a0010" stroke-width="1.5"/><path d="M' + (x + 1) + ' ' + (y + 19) + 'l2 11h2l1 -11z" fill="#7a0010"/>';
    const pet = (cls, x, c) => '<g class="cyl-pet ' + cls + '"><ellipse cx="' + x + '" cy="214" rx="5" ry="3" fill="' + c + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cyls3)"/>' +
      '<path d="M0 50q100 18 200 0t200 0" stroke="#333" stroke-width="1.5" fill="none"/>' + bulbs +
      booth(8, "#e8412c", "#fff", "GAMES") + booth(108, "#2a8fd6", "#fff", "PRIZES") + booth(208, "#ff4fa0", "#fff", "TOSS") + booth(308, "#f2a900", "#fff", "FRANKS") +
      '<rect x="0" y="200" width="400" height="60" fill="#c9b79a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 40) + ' 200l-20 60" stroke="#b09c7c" stroke-width="2"/>').join("") +
      '<rect x="120" y="70" width="160" height="20" rx="3" fill="#111"/><text x="200" y="84" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">THE BOWERY · CONEY ISLAND</text>' +
      shoe(170, 214, "#d1132a") + shoe(206, 220, "#d1132a") +
      pet("", 150, PINK) + pet("cyl-pet2", 230, YEL) + pet("cyl-pet3", 260, ORANGE),
      sky("cyls3", "#4fc3f7", "#fff3c4"));
  }

  /* 4. Al Hirschfeld Theatre, W 45 St: Kinky Boots */
  function clbroadway() {
    const bulbRow = (y, x0, x1) => Array.from({ length: Math.floor((x1 - x0) / 12) + 1 }, (_, i) => '<circle class="cyl-ch' + (i % 2 ? " cyl-ch2" : "") + '" cx="' + (x0 + i * 12) + '" cy="' + y + '" r="2.5" fill="#fff4b0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cyls4)"/>' +
      '<rect x="40" y="10" width="320" height="170" fill="#c9b08a"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (64 + i * 60) + '" y="24" width="30" height="40" fill="#3a2a2a" stroke="#e6d6b4" stroke-width="3"/>').join("") +
      '<rect x="40" y="70" width="320" height="6" fill="#e6d6b4"/>' +
      '<rect x="50" y="86" width="300" height="70" fill="#111" stroke="#d4af37" stroke-width="3"/>' + bulbRow(90, 56, 344) + bulbRow(152, 56, 344) +
      '<text x="200" y="118" text-anchor="middle" ' + font + ' font-size="24" fill="#e8102e" stroke="#fff" stroke-width=".8">KINKY BOOTS</text>' +
      '<text x="200" y="140" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">MUSIC &amp; LYRICS BY CYNDI LAUPER</text>' +
            '<rect x="40" y="156" width="320" height="24" fill="#2a1a10"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (70 + i * 70) + '" y="182" width="44" height="40" fill="#5a1a1a" stroke="#d4af37" stroke-width="2"/>').join("") +
      '<rect x="40" y="178" width="320" height="4" fill="#d4af37"/>' +
      '<g transform="translate(-26 0)"><g class="cyl-boot"><path d="M364 120h18v70q0 4 4 6l8 3q4 2 4 6v3h-34z" fill="#e8102e" stroke="#7a0010" stroke-width="2"/><path d="M364 208l2 14h4l2 -14z" fill="#7a0010"/><path d="M366 126v60" stroke="#ff8a9a" stroke-width="2"/></g></g>' +
      '<rect x="0" y="222" width="400" height="38" fill="#4a4a4f"/><rect x="0" y="220" width="400" height="4" fill="#b9b3a8"/>' +
      car("cyl-car", 0, 242, "#f7d417") +
      '<rect x="6" y="12" width="2" height="0" fill="none"/>',
      sky("cyls4", "#1a1030", "#5a2a6a"));
  }

  /* 5. 104 St and 95 Av, Ozone Park, the A train el on Liberty Av behind */
  function clcorner() {
    const houses = Array.from({ length: 5 }, (_, i) => '<rect x="' + (i * 82) + '" y="' + (96 + (i % 2) * 6) + '" width="76" height="40" fill="' + ["#d8c7a8", "#b85c4a", "#e6e0d2", "#9a6a52", "#c9b79a"][i] + '"/><path d="M' + (i * 82) + ' ' + (96 + (i % 2) * 6) + 'l38 -16 38 16z" fill="#5a4a44"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cyls5)"/>' +
      '<rect x="0" y="40" width="400" height="10" fill="' + ELG + '"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (10 + i * 48) + '" y="50" width="5" height="46" fill="' + ELG + '"/>').join("") +
      '<g class="cyl-el"><rect x="0" y="22" width="190" height="18" rx="3" fill="#c9ced3" stroke="#6d757c" stroke-width="1.5"/>' + Array.from({ length: 7 }, (_, i) => '<rect x="' + (10 + i * 26) + '" y="26" width="16" height="8" fill="#1e2a33"/>').join("") + bullet(180, 31, 6, "A", ABLUE) + '</g>' +
      houses +
      '<rect x="0" y="120" width="400" height="104" fill="#7a7f88"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (128 + i * 8) + 'h400" stroke="#696e76" stroke-width="1"/>').join("") +
      tag("CYNDI", 24, 194, 62, ORANGE, -6) + tag("HEY NOW", 196, 210, 22, TEAL, -4) + tag("BLUE ANGEL", 34, 216, 16, PINK, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(254, 98, 136, "104 St") + '<rect x="254" y="124" width="136" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><circle cx="305.4" cy="134.6" r="3.4" fill="none" stroke="#fff" stroke-width="1.9"/><path d="M308.8 131.6v9" stroke="#fff" stroke-width="1.9"/><text x="313" y="140" ' + font + ' font-size="13" fill="#fff">5 Av</text>' +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="cyl-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("cyl-carL", 0, 244, "#2fd6c3") +
      '<g class="cyl-sp"><circle cx="190" cy="168" r="3" fill="' + ORANGE + '" opacity=".7"/></g><g class="cyl-sp cyl-sp2"><circle cx="196" cy="162" r="2" fill="' + ORANGE + '" opacity=".6"/></g>',
      sky("cyls5", "#ff9a5a", "#ffe08a"));
  }

  window.SCENES = { clstation: clstation, clschool: clschool, clconey: clconey, clbroadway: clbroadway, clcorner: clcorner };
})();
