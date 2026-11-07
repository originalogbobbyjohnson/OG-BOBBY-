/* pastortroy scenes (Regions tab: Atlanta; College Park). CSS classes prefixed pt- (the page's own anim-train is kept).
   1 SEC District station (MARTA Blue + Green, the State Farm Arena stop downtown): silver train sliding in under the canopy.
   2 Historic College Park: Victorian houses on Main St with a freight train rolling down the line beside them, crossing lights blinking.
   3 Paine College, Augusta (his college; D.S.G.B. is an Augusta crew): red-brick hall with white columns and cupola, purple + white banner waving.
   4 State Farm Arena game night downtown (he rocked the Hawks' 2025 draft party there): glass front, red light glow, confetti.
   5 Main St and Virginia Ave, College Park: green signs, PASTOR TROY tagged, a Victorian house, the freight line and downtown's skyline far off.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ptblink{0%,100%{opacity:1}50%{opacity:.2}}.pt-blink{animation:ptblink 1s infinite}.pt-blink2{animation-delay:-.5s}' +
    '@keyframes ptfreight{from{transform:translateX(420px)}to{transform:translateX(-560px)}}.pt-freight{animation:ptfreight 11s linear infinite}' +
    '@keyframes ptwave{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.pt-flag{transform-box:fill-box;transform-origin:0% 50%;animation:ptwave 1.4s ease-in-out infinite}' +
    '@keyframes ptconf{0%{transform:translateY(-20px);opacity:0}15%{opacity:1}100%{transform:translateY(150px);opacity:0}}.pt-cf{animation:ptconf 2.6s linear infinite}' +
    '@keyframes ptbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.pt-beam{transform-box:fill-box;transform-origin:50% 100%;animation:ptbeam 3s ease-in-out infinite}.pt-beam2{animation-delay:-1.5s}' +
    '@keyframes ptspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.pt-sp{animation:ptspray 1.4s ease-out infinite}.pt-sp2{animation-delay:.5s}' +
    '@keyframes pttw{0%,100%{opacity:.3}50%{opacity:1}}.pt-tw{animation:pttw 1.8s ease-in-out infinite}' +
    '@keyframes ptbird{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.pt-bird{animation:ptbird 9s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="' + (i % 4 ? "" : "pt-tw") + '" cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 60) + '" r="' + (i % 3 ? 0.8 : 1.3) + '" fill="#fff" opacity=".7"/>').join("");
  const BLUE = "#0075b2", GREEN = "#009d4f", RED = "#e23b2e", GOLD = "#f2c230";

  /* a Victorian house with a turret and wraparound porch */
  const victorian = (x, y, s, body, trim) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
    '<path d="M0 30L30 4L60 30z" fill="#5b4a3f"/><rect x="4" y="30" width="52" height="56" fill="' + body + '"/>' +
    '<rect x="48" y="14" width="22" height="72" fill="' + body + '"/><path d="M46 14L59 -8L72 14z" fill="#5b4a3f"/>' +
    '<rect x="12" y="38" width="12" height="16" fill="#2b2a30"/><rect x="34" y="38" width="10" height="16" fill="#2b2a30"/><rect x="54" y="24" width="10" height="14" fill="#ffd98a"/><rect x="54" y="46" width="10" height="14" fill="#2b2a30"/>' +
    '<rect x="-4" y="62" width="64" height="4" fill="' + trim + '"/>' + [0, 14, 28, 42, 56].map(c => '<rect x="' + (c - 3) + '" y="66" width="3" height="20" fill="' + trim + '"/>').join("") +
    '<rect x="-4" y="84" width="64" height="4" fill="' + trim + '"/><rect x="24" y="68" width="10" height="18" fill="#6b3b22"/></g>';

  /* 1. SEC District station */
  function ptstation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (44 + i * 48) + '" y="112" width="34" height="22" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="102" width="330" height="66" rx="8" fill="#d3d8dc" stroke="#6d757c" stroke-width="2"/>' + win +
      '<rect x="24" y="140" width="330" height="6" fill="#f08a24"/><rect x="24" y="148" width="330" height="4" fill="#1f5fa8"/>' +
      '<rect x="334" y="106" width="18" height="56" rx="4" fill="#aeb4ba"/><circle cx="344" cy="156" r="3.5" fill="#fff6c2"/>' +
      '<rect x="256" y="106" width="74" height="12" rx="2" fill="#111"/><text x="293" y="115" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">INDIAN CREEK</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pts1)"/>' +
      /* downtown towers and the arena's roofline beyond the tracks */
      '<g fill="#3d4a5c"><rect x="14" y="20" width="26" height="80"/><rect x="46" y="38" width="20" height="62"/><rect x="300" y="14" width="30" height="86"/><rect x="336" y="34" width="22" height="66"/><rect x="364" y="24" width="30" height="76"/></g>' +
      '<g fill="#ffd98a" opacity=".7">' + [20, 30, 50, 306, 316, 342, 370, 380].map((x, i) => '<rect class="' + (i % 3 ? "" : "pt-tw") + '" x="' + x + '" y="' + (34 + (i % 3) * 14) + '" width="4" height="5"/>').join("") + '</g>' +
      '<path d="M80 100V66l40 -16h160l40 16v34z" fill="#5a6676"/><path d="M80 66h240" stroke="#c0c7cf" stroke-width="2"/><rect x="96" y="72" width="208" height="20" fill="#2d3540"/><rect x="96" y="80" width="208" height="3" fill="' + RED + '" opacity=".8"/>' +
      /* platform canopy */
      '<path d="M0 30h400v10H0z" fill="#8f99a3"/><rect x="0" y="40" width="400" height="4" fill="#5d6772"/>' +
      [40, 140, 260, 360].map(x => '<rect x="' + (x - 3) + '" y="44" width="6" height="56" fill="#5d6772"/>').join("") +
      '<rect class="pt-blink" x="80" y="45" width="40" height="3" fill="#fff3c4"/><rect class="pt-blink pt-blink2" x="280" y="45" width="40" height="3" fill="#fff3c4"/>' +
      '<rect x="0" y="96" width="400" height="6" fill="#6f6a60"/>' +
      train +
      '<rect x="0" y="168" width="400" height="8" fill="#f2c200"/><rect x="0" y="176" width="400" height="84" fill="#8f8a80"/>' +
      '<path d="M0 200h400M0 226h400" stroke="#7d786f" stroke-width="1.5"/>' +
      '<rect x="58" y="186" width="284" height="42" rx="3" fill="#111"/><text x="72" y="213" ' + font + ' font-size="18" fill="#fff">SEC District</text>' + badge(206, 207, "BLUE", BLUE) + badge(262, 207, "GREEN", GREEN),
      sky("pts1", "#1b2440", "#c9734a"));
  }

  /* 2. Historic College Park, Main St and the freight line */
  function ptmain() {
    const cars = ['#7a3b2a', '#2f4f6a', '#6b6b6b', '#8a5a2a', '#3e5a3a', '#7a3b2a'].map((c, i) => '<rect x="' + (i * 92) + '" y="168" width="86" height="34" rx="2" fill="' + c + '" stroke="#222" stroke-width="1.5"/>' +
      '<path d="M' + (i * 92 + 6) + ' 176h74M' + (i * 92 + 6) + ' 186h74" stroke="#000" stroke-opacity=".25"/><circle cx="' + (i * 92 + 16) + '" cy="204" r="5" fill="#222"/><circle cx="' + (i * 92 + 70) + '" cy="204" r="5" fill="#222"/>').join("");
    const loco = '<rect x="-96" y="160" width="90" height="42" rx="3" fill="#2a2a2a"/><rect x="-96" y="150" width="34" height="18" fill="#2a2a2a"/><rect x="-90" y="154" width="22" height="8" fill="#ffe7a0"/><rect x="-96" y="180" width="90" height="5" fill="#f2f2f2"/><circle cx="-80" cy="204" r="5" fill="#222"/><circle cx="-22" cy="204" r="5" fill="#222"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ptm1)"/>' +
      '<g class="pt-bird"><path d="M0 40q6 -6 12 0q6 -6 12 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g>' +
      /* oaks */
      '<g fill="#3f6b3a"><circle cx="20" cy="92" r="30"/><circle cx="196" cy="86" r="34"/><circle cx="388" cy="96" r="28"/></g><rect x="192" y="110" width="8" height="40" fill="#5a3a22"/>' +
      victorian(36, 64, 1, "#e9d9b8", "#fff") + victorian(230, 70, .95, "#b7cbd9", "#fff") +
      '<rect x="0" y="150" width="400" height="10" fill="#9a9384"/><rect x="0" y="160" width="400" height="46" fill="#7c9a5a"/>' +
      /* tracks */
      '<rect x="0" y="206" width="400" height="6" fill="#4a3b2f"/><path d="M0 209h400" stroke="#9aa0a6" stroke-width="2"/>' +
      '<g class="pt-freight">' + loco + cars + '</g>' +
      /* crossing signal */
      '<rect x="356" y="132" width="5" height="80" fill="#ddd"/><path d="M340 140l38 14M378 140l-38 14" stroke="#fff" stroke-width="5"/><path d="M340 140l38 14M378 140l-38 14" stroke="#111" stroke-width="1" fill="none"/>' +
      '<rect x="344" y="160" width="30" height="12" rx="6" fill="#222"/><circle class="pt-blink" cx="350" cy="166" r="4.5" fill="#ff3b30"/><circle class="pt-blink pt-blink2" cx="368" cy="166" r="4.5" fill="#ff3b30"/>' +
      '<rect x="0" y="212" width="400" height="48" fill="#8a8172"/>' +
      '<rect x="12" y="226" width="196" height="24" rx="3" fill="#000" opacity=".55"/><text x="110" y="243" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">HISTORIC COLLEGE PARK</text>',
      sky("ptm1", "#7fb1dc", "#f6e2b8"));
  }

  /* 3. Paine College, Augusta */
  function ptpaine() {
    const PURP = "#4b2a7b";
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="14" height="22" fill="#2d2a33"/><path d="M' + x + ' ' + (y + 11) + 'h14M' + (x + 7) + ' ' + y + 'v22" stroke="#e8e2d6" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ptp1)"/>' +
      '<g fill="#3e6b34"><circle cx="30" cy="140" r="34"/><circle cx="372" cy="136" r="36"/><path d="M0 170h400v10H0z"/></g>' +
      /* the hall */
      '<rect x="70" y="80" width="260" height="100" fill="#a2452f" stroke="#5e2618" stroke-width="2"/>' +
      '<path d="M60 80h280l-20 -20H80z" fill="#6b3a2b"/>' +
      '<rect x="184" y="30" width="32" height="30" fill="#f1ece0" stroke="#7a7266"/><path d="M180 30h40l-20 -18z" fill="#4e5a63"/><rect x="196" y="38" width="8" height="14" fill="#2d2a33"/>' +
      [84, 112, 140, 246, 274, 302].map(x => win(x, 92) + win(x, 136)).join("") +
      /* portico with white columns */
      '<path d="M160 80h80l-40 -22z" fill="#f1ece0" stroke="#7a7266" stroke-width="1.5"/><rect x="160" y="80" width="80" height="8" fill="#f1ece0"/>' +
      [166, 186, 206, 226].map(x => '<rect x="' + x + '" y="88" width="8" height="84" fill="#f6f2e8" stroke="#bdb5a6"/>').join("") +
      '<rect x="190" y="132" width="20" height="40" fill="#3a2418"/><rect x="150" y="172" width="100" height="8" fill="#d6d0c4"/>' +
      /* banner on a pole */
      '<rect x="44" y="60" width="4" height="120" fill="#ccc"/><g class="pt-flag"><rect x="48" y="62" width="40" height="26" fill="' + PURP + '"/><rect x="48" y="72" width="40" height="6" fill="#fff"/></g>' +
      '<rect x="0" y="180" width="400" height="80" fill="#6f9a52"/><path d="M190 180l-30 80h80l-30 -80z" fill="#d8cfbd"/>' +
      '<rect x="12" y="226" width="220" height="24" rx="3" fill="#000" opacity=".55"/><text x="122" y="243" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">PAINE COLLEGE, AUGUSTA</text>',
      sky("ptp1", "#5f9fd6", "#f5e6c4"));
  }

  /* 4. State Farm Arena, game night */
  function ptarena() {
    const cf = Array.from({ length: 22 }, (_, i) => '<rect class="pt-cf" x="' + ((i * 53) % 390 + 4) + '" y="' + (10 + (i * 29) % 50) + '" width="5" height="3" fill="' + [RED, GOLD, "#fff"][i % 3] + '" style="animation-delay:-' + ((i * 0.37) % 2.6).toFixed(2) + 's"/>').join("");
    const panes = Array.from({ length: 12 }, (_, i) => '<rect x="' + (64 + i * 23) + '" y="104" width="19" height="86" fill="#2a1420" stroke="#6d4b55"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#pta1)"/>' + stars(24) +
      '<g opacity=".35"><path class="pt-beam" d="M110 100l-30 -96h20z" fill="#fff"/><path class="pt-beam pt-beam2" d="M290 100l30 -96h-20z" fill="#fff"/></g>' +
      /* the arena: long low silver box with a glass front glowing red */
      '<path d="M40 100h320l10 10v96H30v-96z" fill="#6e7680" stroke="#2c3138" stroke-width="2"/>' +
      '<rect x="40" y="78" width="320" height="22" fill="#8a929c"/><path d="M40 78h320" stroke="#c0c7cf" stroke-width="2"/>' +
      panes + '<rect x="64" y="104" width="276" height="86" fill="' + RED + '" opacity=".35"/>' +
      '<rect class="pt-blink" x="64" y="140" width="276" height="4" fill="#ff8a7a" opacity=".6"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#2b2b30"/><path d="M0 226h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 10"/>' +
      /* fans */
      '<g fill="#111">' + Array.from({ length: 16 }, (_, i) => '<circle cx="' + (12 + i * 25) + '" cy="' + (214 + (i % 2) * 4) + '" r="6"/><rect x="' + (6 + i * 25) + '" y="' + (220 + (i % 2) * 4) + '" width="12" height="20" rx="4"/>').join("") + '</g>' +
      cf +
      '<rect x="12" y="234" width="200" height="18" rx="3" fill="#000" opacity=".6"/><text x="112" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">STATE FARM ARENA, DOWNTOWN</text>',
      sky("pta1", "#0c0a18", "#3a1630"));
  }

  /* 5. Main St and Virginia Ave, College Park */
  function ptcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ptc1)"/>' + stars(18) +
      /* downtown skyline far off */
      '<g fill="#3c3554"><rect x="250" y="44" width="16" height="56"/><rect x="270" y="26" width="18" height="74"/><path d="M270 26l9 -14l9 14z"/><rect x="292" y="50" width="14" height="50"/><rect x="310" y="36" width="20" height="64"/><rect x="334" y="58" width="16" height="42"/></g>' +
      victorian(300, 92, .8, "#cdb59a", "#efe6d6") +
      /* freight line along the back */
      '<rect x="0" y="160" width="400" height="5" fill="#4a3b2f"/><g class="pt-freight"><rect x="0" y="140" width="70" height="20" fill="#5b3b2a"/><rect x="76" y="140" width="70" height="20" fill="#3e4f62"/><rect x="152" y="140" width="70" height="20" fill="#5b3b2a"/></g>' +
      /* wall */
      '<rect x="20" y="96" width="250" height="110" fill="#7a5a48" stroke="#4a3426" stroke-width="2"/>' +
      Array.from({ length: 9 }, (_, r) => '<path d="M20 ' + (106 + r * 11) + 'h250" stroke="#5e4436" stroke-width="1"/>').join("") +
      tag("PASTOR", 40, 140, 30, RED, -5) + tag("TROY", 120, 186, 38, GOLD, -4) + tag("DSGB", 206, 128, 18, "#8a9a5b", 8) +
      '<g><circle class="pt-sp" cx="246" cy="176" r="3" fill="' + GOLD + '"/><circle class="pt-sp pt-sp2" cx="252" cy="170" r="2" fill="' + GOLD + '"/></g>' +
      /* sign post */
      '<rect x="292" y="70" width="5" height="140" fill="#777"/>' + sign(256, 60, 76, "MAIN ST") + sign(296, 86, 100, "VIRGINIA AVE") +
      '<rect x="0" y="206" width="400" height="54" fill="#3a3a40"/><path d="M0 232h400" stroke="#fff" stroke-width="2" stroke-dasharray="20 14"/><rect x="0" y="206" width="400" height="6" fill="#9a9488"/>',
      sky("ptc1", "#1a1630", "#e07a4a"));
  }

  window.SCENES = { ptstation, ptmain, ptpaine, ptarena, ptcorner };
})();
