/* keyshiacole scenes (Regions tab: The Bay Area; East Oakland). CSS classes prefixed kc- (the page's own anim-train is kept).
   1 Foothill Blvd & 47th Ave: the AC Transit 40 pulling up in front of Fremont High, where she went to school.
   2 Fremont Pool, next to the high school on Foothill: lane ropes, a swimmer kicking down the lane, the water rippling.
   3 The East Oakland Youth Development Center on MacArthur, where she worked on music after Tupac's death: low center, colored panels, music notes floating out.
   4 Tracy High School, where she graduated with the class of 2000: the front steps, caps flying up.
   5 Foothill Blvd and 45th Ave by Fremont Pool: green signs, KEYSHIA tagged with HEARTS AND STARS and AUG 8 (Keyshia Cole Day), the downtown Oakland towers behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kcflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.kc-flk{animation:kcflick 2.4s infinite}.kc-flk2{animation-delay:.8s}' +
    '@keyframes kcblink{0%,100%{opacity:.25}50%{opacity:1}}.kc-bl{animation:kcblink 1.6s ease-in-out infinite}.kc-bl2{animation-delay:-.8s}' +
    '@keyframes kcswim{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.kc-swim{animation:kcswim 7s linear infinite}' +
    '@keyframes kckick{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.kc-kick{animation:kckick .3s ease-in-out infinite}' +
    '@keyframes kcrip{0%{transform:translateX(0)}100%{transform:translateX(-50px)}}.kc-rip{animation:kcrip 2.6s linear infinite}' +
    '@keyframes kcnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-90px);opacity:0}}.kc-note{animation:kcnote 3.2s ease-out infinite}.kc-n2{animation-delay:-1.1s}.kc-n3{animation-delay:-2.2s}' +
    '@keyframes kccap{0%{transform:translateY(0) rotate(0)}50%{transform:translateY(-70px) rotate(180deg)}100%{transform:translateY(0) rotate(360deg)}}.kc-cap{transform-box:fill-box;transform-origin:center;animation:kccap 2.4s ease-in-out infinite}.kc-c2{animation-delay:-.8s}.kc-c3{animation-delay:-1.6s}' +
    '@keyframes kcbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.kc-ball{animation:kcbounce .9s ease-in-out infinite}' +
    '@keyframes kcspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kc-sp{animation:kcspray 1.4s ease-out infinite}.kc-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "kc-bl" + (i % 2 ? " kc-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const note = (x, y, c, cls) => '<g class="kc-note ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="5" fill="' + c + '"/><path d="M' + (x + 4.5) + ' ' + y + 'v-18l8 4" stroke="' + c + '" stroke-width="2.5" fill="none"/></g>';
  const ROSE = "#ff6fae", VIO = "#9b7bff", GOLD = "#ffd166", ACG = "#00843d", ACB = "#0072bc";

  /* 1. Foothill Blvd & 47th Ave: the AC Transit 40 in front of Fremont High */
  function kcstop() {
    const school = '<g><rect x="20" y="60" width="360" height="56" fill="#d9c7a3"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (30 + i * 29) + '" y="70" width="18" height="16" fill="#5a7a96" class="' + (i % 4 ? "" : "kc-flk") + '"/><rect x="' + (30 + i * 29) + '" y="92" width="18" height="16" fill="#5a7a96"/>').join("") +
      '<rect x="20" y="54" width="360" height="8" fill="#a4553a"/><rect x="150" y="38" width="100" height="18" fill="#a4553a"/><text x="200" y="51" text-anchor="middle" ' + font + ' font-size="10" fill="#fff4dc" letter-spacing="2">FREMONT HIGH</text></g>';
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 42) + '" y="132" width="32" height="24" rx="2" fill="#20324a"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="122" width="320" height="72" rx="10" fill="#f4f6f4" stroke="#7d868e" stroke-width="2"/>' + wins +
      '<path d="M40 168h320v8h-320z" fill="' + ACG + '"/><path d="M40 176h320v5h-320z" fill="' + ACB + '"/>' +
      '<rect x="326" y="132" width="30" height="44" rx="3" fill="#20324a"/><rect x="304" y="124" width="52" height="8" rx="2" fill="#111"/><text x="330" y="131" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">40 FOOTHILL</text>' +
      '<circle cx="90" cy="194" r="13" fill="#222"/><circle cx="90" cy="194" r="5" fill="#888"/><circle cx="310" cy="194" r="13" fill="#222"/><circle cx="310" cy="194" r="5" fill="#888"/><circle cx="354" cy="184" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kcs1)"/>' + school + '<rect x="0" y="116" width="400" height="6" fill="#bdb6a8"/>' + bus +
      '<rect x="0" y="206" width="400" height="54" fill="#4a4a50"/><path d="M0 232h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<rect x="20" y="4" width="250" height="30" rx="3" fill="#111"/><text x="32" y="25" ' + font + ' font-size="15" fill="#fff">Foothill Blvd &amp; 47th Ave</text>' + badge(280, 19, "40", ACG) + badge(316, 19, "BUS", "#3a3e46"),
      sky("kcs1", "#8fc4ec", "#f8dcc0"));
  }

  /* 2. Fremont Pool: lane ropes, a swimmer, ripples */
  function kcpool() {
    const lanes = [0, 1, 2, 3, 4].map(i => '<path d="M0 ' + (128 + i * 26) + 'h400" stroke="' + (i % 2 ? "#ff5a5a" : "#f4f4f4") + '" stroke-width="3" stroke-dasharray="6 4"/>').join("");
    const rip = '<g class="kc-rip">' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 34) + ' ' + (140 + (i % 4) * 26) + 'q8 -4 16 0" stroke="#d8f6ff" stroke-width="2" fill="none" opacity=".7"/>').join("") + '</g>';
    const swimmer = '<g class="kc-swim"><ellipse cx="0" cy="166" rx="18" ry="5" fill="#8a5a3e"/><circle cx="20" cy="164" r="6" fill="' + ROSE + '"/><g class="kc-kick"><path d="M-18 166l-12 -4M-18 168l-12 4" stroke="#8a5a3e" stroke-width="4"/></g><path d="M6 162q8 -12 18 -4" stroke="#8a5a3e" stroke-width="4" fill="none"/><circle cx="-34" cy="164" r="3" fill="#fff" opacity=".8"/><circle cx="-40" cy="168" r="2" fill="#fff" opacity=".7"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#e9eef2"/>' +
      '<rect x="0" y="0" width="400" height="90" fill="#cfd9e2"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (14 + i * 50) + '" y="14" width="36" height="46" fill="#9fd0f0" class="' + (i % 3 ? "" : "kc-flk") + '"/>').join("") +
      '<rect x="0" y="90" width="400" height="22" fill="#f4f1ea"/><text x="200" y="106" text-anchor="middle" ' + font + ' font-size="11" fill="#1d5a8a" letter-spacing="4">FREMONT POOL</text>' +
      '<rect x="0" y="112" width="400" height="148" fill="#2aa6d6"/>' + rip + lanes + swimmer +
      '<path d="M372 112v40M384 112v40" stroke="#c8ccd2" stroke-width="3"/>' + [124, 136, 148].map(y => '<path d="M372 ' + y + 'h12" stroke="#c8ccd2" stroke-width="3"/>').join(""),
      "");
  }

  /* 3. East Oakland Youth Development Center: colored panels, a ball, music notes floating out */
  function kceoydc() {
    const panels = ["#e2574c", "#f2c14e", "#3fae6a", "#3a8fd8", ROSE, VIO].map((c, i) => '<rect x="' + (60 + i * 46) + '" y="78" width="40" height="58" fill="' + c + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kcs3)"/>' +
      '<path d="M0 90q80 -30 160 -14t140 -10t100 8v30h-400z" fill="#6f8f5a"/>' +
      '<rect x="40" y="70" width="320" height="110" fill="#efe6d6"/>' + panels + '<rect x="40" y="62" width="320" height="10" fill="#4a4a52"/>' +
      '<rect x="80" y="146" width="240" height="20" fill="#3a3a42"/><text x="200" y="161" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" letter-spacing="2">EOYDC</text>' +
      '<rect x="44" y="140" width="30" height="40" fill="#2c3a4a"/>' +
      note(150, 110, ROSE, "") + note(230, 104, GOLD, "kc-n2") + note(270, 118, "#fff", "kc-n3") +
      '<rect x="0" y="180" width="400" height="80" fill="#8e8a84"/><path d="M0 200h400" stroke="#fff" stroke-width="2" opacity=".6"/>' +
      '<rect x="360" y="120" width="4" height="70" fill="#666"/><rect x="346" y="110" width="30" height="20" fill="#fff" stroke="#888"/><path d="M354 132h14l-3 12h-8z" fill="none" stroke="#e2574c" stroke-width="2"/>' +
      '<g class="kc-ball"><circle cx="330" cy="200" r="8" fill="#e8742c"/><path d="M322 200h16M330 192v16" stroke="#7a3a10" stroke-width="1.2"/></g>',
      sky("kcs3", "#7cbcec", "#f6e2c4"));
  }

  /* 4. Tracy High School: front steps, caps flying */
  function kctracy() {
    const cap = (x, cls) => '<g class="kc-cap ' + cls + '"><path d="M' + (x - 12) + ' 150l12 -6l12 6l-12 6z" fill="#1c1c22"/><rect x="' + (x - 6) + '" y="152" width="12" height="6" fill="#2a2a32"/><path d="M' + (x + 8) + ' 150v8" stroke="' + GOLD + '" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kcs4)"/>' +
      '<rect x="40" y="60" width="320" height="120" fill="#b5503a"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M40 ' + (68 + i * 8) + 'h320" stroke="#00000022"/>').join("") +
      [70, 120, 250, 300].map(x => '<rect x="' + x + '" y="80" width="30" height="40" fill="#f2ead8"/><rect x="' + (x + 3) + '" y="83" width="24" height="34" fill="#5a7a96"/>').join("") +
      '<rect x="160" y="40" width="80" height="30" fill="#e8dcc0"/><path d="M150 40l50 -24l50 24z" fill="#e8dcc0"/><text x="200" y="60" text-anchor="middle" ' + font + ' font-size="10" fill="#6a2a1a" letter-spacing="1">TRACY HIGH</text>' +
      '<rect x="176" y="120" width="48" height="60" fill="#3a2a22"/>' + [0, 1, 2, 3].map(i => '<rect x="' + (150 - i * 12) + '" y="' + (180 + i * 8) + '" width="' + (100 + i * 24) + '" height="8" fill="#d8d2c4"/>').join("") +
      '<rect x="110" y="128" width="180" height="16" fill="' + ROSE + '"/><text x="200" y="140" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="2">CLASS OF 2000</text>' +
      '<rect x="0" y="212" width="400" height="48" fill="#5f9a4a"/>' + cap(80, "") + cap(200, "kc-c2") + cap(320, "kc-c3") + cap(140, "kc-c3") + cap(262, ""),
      sky("kcs4", "#62b0ea", "#e8f4fb"));
  }

  /* 5. Foothill Blvd and 45th Ave; the downtown Oakland towers behind */
  function kccorner() {
    const towers = [[150, 40, 30], [186, 20, 34], [226, 50, 28], [258, 34, 36], [300, 60, 26]].map((t, i) => '<rect x="' + t[0] + '" y="' + t[1] + '" width="' + t[2] + '" height="' + (128 - t[1]) + '" fill="' + (i === 1 ? "#1e2330" : "#2a3044") + '"/>' +
      Array.from({ length: 6 }, (_, r) => '<rect x="' + (t[0] + 4) + '" y="' + (t[1] + 6 + r * 12) + '" width="' + (t[2] - 8) + '" height="3" fill="#ffd98a" class="' + ((r + i) % 3 ? "" : "kc-flk") + '" opacity=".8"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kcs5)"/>' + stars(12) +
      '<path d="M0 104q60 -20 120 -6v30h-120z" fill="#2a2e44"/><path d="M330 100q40 -10 70 0v28h-70z" fill="#2a2e44"/>' + towers +
      '<rect x="0" y="126" width="400" height="98" fill="#e0d6ce"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52 + 20) + ' 126v98" stroke="#ccc2b8" stroke-width="2"/>').join("") +
      tag("KEYSHIA", 14, 192, 48, ROSE, -6) + tag("HEARTS AND STARS", 22, 218, 17, GOLD, -3) + tag("AUG 8", 196, 216, 18, VIO, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(270, 98, 120, "Foothill Blvd") + sign(300, 124, 80, "45th Ave") +
      '<g class="kc-sp"><circle cx="252" cy="160" r="3" fill="' + ROSE + '" opacity=".7"/></g><g class="kc-sp kc-sp2"><circle cx="258" cy="154" r="2" fill="' + ROSE + '" opacity=".6"/></g>',
      sky("kcs5", "#1c1630", "#e88a8a"));
  }

  window.SCENES = { kcstop: kcstop, kcpool: kcpool, kceoydc: kceoydc, kctracy: kctracy, kccorner: kccorner };
})();
