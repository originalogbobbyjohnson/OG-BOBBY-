/* timbalandmagoo scenes (Regions tab: Virginia; Norfolk, VA). CSS classes prefixed tm- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tmflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.tm-flk{animation:tmflick 2.4s infinite}.tm-flk2{animation-delay:.8s}' +
    '@keyframes tmglow{0%,100%{opacity:.4}50%{opacity:1}}.tm-glow{animation:tmglow 1.8s ease-in-out infinite}.tm-g2{animation-delay:-.9s}' +
    '@keyframes tmchase{0%,100%{opacity:1}50%{opacity:.2}}.tm-ch{animation:tmchase .6s steps(1) infinite}.tm-ch2{animation-delay:-.3s}' +
    '@keyframes tmwave{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.tm-wv{transform-box:fill-box;transform-origin:50% 100%;animation:tmwave .6s ease-in-out infinite}' +
    '@keyframes tmspin{to{transform:rotate(360deg)}}.tm-spin{transform-box:fill-box;transform-origin:50% 50%;animation:tmspin 1.6s linear infinite}' +
    '@keyframes tmrip{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.tm-rip{animation:tmrip 3s linear infinite}' +
    '@keyframes tmboat{0%{transform:translateX(420px)}100%{transform:translateX(-120px)}}.tm-boat{animation:tmboat 14s linear infinite}' +
    '@keyframes tmgull{0%{transform:translate(0,0)}50%{transform:translate(60px,-8px)}100%{transform:translate(120px,0)}}.tm-gull{animation:tmgull 6s ease-in-out infinite alternate}' +
    '@keyframes tmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tm-sp{animation:tmspray 1.4s ease-out infinite}.tm-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "tm-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ORANGE = "#ff7a1a", SKY = "#38c6f4", YEL = "#f7d02c", TIDE = "#0b5fa5";

  /* 1. The Tide light rail pulling into Norfolk State University station on Brambleton Ave: street-level platform under a curved canopy, the black station sign, the white-and-blue car sliding in */
  function tmstation() {
    const car = '<g class="anim-train"><path d="M24 118h300q22 0 26 18v54h-326z" fill="#f2f4f6" stroke="#8e959c" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (36 + i * 46) + '" y="128" width="36" height="30" rx="3" fill="#1f2a36"/>').join("") +
      '<path d="M330 128q14 2 16 16v14h-16z" fill="#1f2a36"/>' +
      '<rect x="24" y="166" width="326" height="8" fill="' + TIDE + '"/><rect x="24" y="176" width="326" height="3" fill="' + SKY + '"/>' +
      '<rect x="24" y="190" width="326" height="8" fill="#555c63"/><circle cx="342" cy="182" r="3.5" fill="#fff6c2"/>' +
      '<path d="M120 118l20 -26M200 118l-20 -26" stroke="#3a3e46" stroke-width="2"/><path d="M130 92h60" stroke="#3a3e46" stroke-width="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tm1)"/>' +
      '<path d="M0 90h400" stroke="#3a3e46" stroke-width="2"/>' +
      '<g fill="#5a4a5e"><rect x="0" y="96" width="70" height="50"/><rect x="300" y="88" width="100" height="58"/></g>' +
      car +
      '<rect x="0" y="198" width="400" height="10" fill="#d9d4c6"/><rect x="0" y="206" width="400" height="5" fill="' + YEL + '"/><rect x="0" y="211" width="400" height="49" fill="#8f8a80"/>' +
      /* canopy */
      '<path d="M40 40q160 -30 320 0v8q-160 -28 -320 0z" fill="#e7e9ec"/>' + [70, 200, 330].map(x => '<rect x="' + (x - 3) + '" y="' + (x === 200 ? 26 : 38) + '" width="6" height="' + (x === 200 ? 172 : 160) + '" fill="#9aa1a8"/>').join("") +
      '<rect x="82" y="52" width="236" height="30" rx="3" fill="#111"/><text x="94" y="72" ' + font + ' font-size="12.5" fill="#fff">Norfolk State University</text>' + badge(262, 67, "TIDE", TIDE) +
      '<rect x="150" y="226" width="100" height="5" rx="2" fill="#fff6c2" opacity=".5" class="tm-flk"/>',
      sky("tm1", "#f2a65a", "#7fb8e0"));
  }

  /* 2. The Attucks Theatre on Church St, the "Apollo of the South" (1919): buff brick front, tall arched windows, the marquee bulbs chasing, a crowd line out front */
  function tmattucks() {
    const bulbs = Array.from({ length: 22 }, (_, i) => '<circle class="tm-ch' + (i % 2 ? " tm-ch2" : "") + '" cx="' + (106 + i * 9) + '" cy="150" r="2.3" fill="#ffe7a0"/>').join("") +
      Array.from({ length: 22 }, (_, i) => '<circle class="tm-ch' + (i % 2 ? "" : " tm-ch2") + '" cx="' + (106 + i * 9) + '" cy="178" r="2.3" fill="#ffe7a0"/>').join("");
    const person = (x, c, h) => '<circle cx="' + x + '" cy="' + (206 - h) + '" r="5" fill="#2a2a2a"/><rect x="' + (x - 5) + '" y="' + (212 - h) + '" width="10" height="' + (18 + h) + '" rx="3" fill="' + c + '"/><rect x="' + (x - 4) + '" y="230" width="3" height="12" fill="#2a2a2a"/><rect x="' + (x + 1) + '" y="230" width="3" height="12" fill="#2a2a2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tm2)"/>' + stars(10) +
      '<rect x="80" y="40" width="240" height="200" fill="#d6b98a"/>' + Array.from({ length: 24 }, (_, i) => '<path d="M80 ' + (46 + i * 8) + 'h240" stroke="#c4a576" stroke-width="1"/>').join("") +
      '<rect x="76" y="34" width="248" height="10" fill="#b89668"/><rect x="190" y="22" width="20" height="14" fill="#b89668"/>' +
      [104, 160, 216, 272].map(x => '<path d="M' + x + ' 128v-48q12 -16 24 0v48z" fill="#2a3442"/><path class="tm-glow" d="M' + (x + 4) + ' 124v-40q8 -10 16 0v40z" fill="#ffd98a" opacity=".55"/>').join("") +
      '<rect x="98" y="142" width="204" height="44" fill="#1b1b22" stroke="#b89668" stroke-width="2"/>' + bulbs +
      '<text x="200" y="171" text-anchor="middle" ' + font + ' font-size="15" fill="' + YEL + '">ATTUCKS</text>' +
      '<rect x="160" y="190" width="80" height="50" fill="#5a2f22"/><path d="M200 190v50" stroke="#3a1e14" stroke-width="2"/>' +
      '<rect x="0" y="240" width="400" height="20" fill="#5a5a60"/>' +
      person(30, ORANGE, 2) + person(48, SKY, 0) + person(66, YEL, 3) + person(330, "#c14a6a", 1) + person(350, ORANGE, 0) + person(372, SKY, 3),
      sky("tm2", "#141a3a", "#3a3060"));
  }

  /* 3. Da Bassment: the low-ceiling basement where the S.B.I. crew made beats, wood paneling, a drum machine with pads lighting up, a tape deck reels turning, the boombox, the meters jumping */
  function tmbasement() {
    return svg(
      '<rect width="400" height="260" fill="#3a2618"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 0v200" stroke="#2c1c12" stroke-width="2"/>').join("") +
      '<rect x="0" y="0" width="400" height="16" fill="#1e1510"/>' + [80, 320].map(x => '<rect x="' + (x - 16) + '" y="16" width="32" height="6" fill="#fff8dc" class="tm-flk"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#4a4a50"/><rect x="0" y="196" width="400" height="6" fill="#2a2a2e"/>' +
      '<rect x="120" y="34" width="160" height="40" rx="4" fill="#111"/><text x="200" y="60" text-anchor="middle" ' + font + ' font-size="18" fill="' + ORANGE + '" class="tm-glow">DA BASSMENT</text>' +
      /* table */
      '<rect x="40" y="150" width="320" height="10" fill="#6b4a32"/><rect x="52" y="160" width="8" height="40" fill="#4a3628"/><rect x="340" y="160" width="8" height="40" fill="#4a3628"/>' +
      /* drum machine */
      '<rect x="60" y="112" width="110" height="38" rx="3" fill="#2b2e35" stroke="#555a63" stroke-width="1.5"/><rect x="66" y="117" width="40" height="10" fill="#1b3a2a"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect class="' + (i % 3 === 0 ? "tm-glow" : (i % 3 === 1 ? "tm-glow tm-g2" : "")) + '" x="' + (112 + (i % 4) * 13) + '" y="' + (118 + Math.floor(i / 4) * 14) + '" width="10" height="10" rx="1.5" fill="' + [ORANGE, YEL, SKY, "#e04b6a"][i % 4] + '"/>').join("") +
      /* tape deck */
      '<rect x="186" y="104" width="96" height="46" rx="3" fill="#202228" stroke="#555a63" stroke-width="1.5"/><rect x="196" y="112" width="76" height="26" rx="2" fill="#d9d4c6"/>' +
      '<g class="tm-spin"><circle cx="214" cy="125" r="8" fill="#2b2b2b"/><path d="M214 118v14M207 125h14" stroke="#d9d4c6" stroke-width="2"/></g><g class="tm-spin"><circle cx="254" cy="125" r="8" fill="#2b2b2b"/><path d="M254 118v14M247 125h14" stroke="#d9d4c6" stroke-width="2"/></g>' +
      '<text x="234" y="146" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">S.B.I. DEMO</text>' +
      /* boombox */
      '<rect x="292" y="112" width="62" height="38" rx="4" fill="#9aa1a8"/><circle cx="308" cy="132" r="10" fill="#2a2d34"/><circle cx="338" cy="132" r="10" fill="#2a2d34"/><path d="M300 112q23 -16 46 0" stroke="#555" stroke-width="3" fill="none"/>' +
      '<g transform="translate(70 178)">' + Array.from({ length: 14 }, (_, i) => '<rect class="tm-wv" style="animation-delay:-' + (i * 0.09).toFixed(2) + 's" x="' + (i * 6) + '" y="0" width="4" height="18" fill="' + (i % 2 ? SKY : ORANGE) + '"/>').join("") + '</g>' +
      '<rect x="260" y="164" width="80" height="30" rx="2" fill="#1b1d22"/><text x="300" y="183" text-anchor="middle" ' + font + ' font-size="10" fill="' + YEL + '">757 BEATS</text>',
      "");
  }

  /* 4. Town Point Park on the Elizabeth River: one of Norfolk's painted mermaid statues on her pedestal, the harbor water rippling, a tug crossing, gulls */
  function tmmermaid() {
    return svg(
      '<rect width="400" height="260" fill="url(#tm4)"/>' +
      '<g class="tm-gull"><path d="M40 40q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/><path d="M90 26q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<g fill="#7d8aa0"><rect x="250" y="70" width="30" height="70"/><rect x="286" y="52" width="26" height="88"/><rect x="318" y="84" width="40" height="56"/><rect x="362" y="96" width="38" height="44"/></g>' +
      '<rect x="0" y="140" width="400" height="60" fill="#2f6f8f"/>' +
      '<g class="tm-rip">' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 36) + ' ' + (150 + (i % 3) * 14) + 'h18" stroke="#bfe6f5" stroke-width="2" opacity=".6"/>').join("") + '</g>' +
      '<g class="tm-boat"><path d="M0 150h46l-6 10h-36z" fill="#c43a2a"/><rect x="10" y="138" width="22" height="12" fill="#f2f2f2"/><rect x="18" y="130" width="6" height="8" fill="#333"/></g>' +
      '<rect x="0" y="196" width="400" height="64" fill="#7aa35a"/><path d="M0 196h400" stroke="#cfc8b6" stroke-width="6"/>' +
      /* pedestal */
      '<rect x="160" y="194" width="80" height="34" rx="3" fill="#cfc8b6"/><rect x="152" y="226" width="96" height="10" rx="2" fill="#b8b09c"/>' +
      /* mermaid: painted body, sweeping tail, flowing hair, arms up (no face) */
      '<path d="M200 192q-30 -10 -24 -40q4 -18 18 -30" fill="none" stroke="' + SKY + '" stroke-width="18" stroke-linecap="round"/>' +
      '<path d="M176 150l-26 -6l10 14l-10 12z" fill="' + SKY + '" stroke="#1a6f95" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (182 + i * 2) + ' ' + (178 - i * 10) + 'q6 -3 12 0" stroke="' + YEL + '" stroke-width="2" fill="none"/>').join("") +
      '<rect x="190" y="94" width="20" height="32" rx="8" fill="#e6a476"/>' +
      '<circle cx="200" cy="84" r="11" fill="#e6a476"/><path d="M189 82q-4 26 -14 34M211 82q6 22 2 34" stroke="' + ORANGE + '" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M189 80q11 -16 22 0" stroke="' + ORANGE + '" stroke-width="7" fill="none"/>' +
      '<path d="M192 100l-16 -22M208 100l16 -22" stroke="#e6a476" stroke-width="6" stroke-linecap="round"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">TOWN POINT PARK  ·  ELIZABETH RIVER</text>',
      sky("tm4", "#7cc6ef", "#e8f4fa"));
  }

  /* 5. Tidewater Dr and Princess Anne Rd: green signs, TIMBALAND and MAGOO tagged on the wall, downtown Norfolk's towers lit up behind */
  function tmcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#tm5)"/>' + stars(14) +
      '<g fill="#2a2f4a"><rect x="60" y="60" width="40" height="76"/><rect x="108" y="30" width="36" height="106"/><rect x="152" y="16" width="44" height="120"/><rect x="204" y="44" width="34" height="92"/><rect x="246" y="70" width="40" height="66"/></g>' +
      '<path d="M152 16l22 -12l22 12z" fill="#2a2f4a"/>' +
      Array.from({ length: 20 }, (_, i) => '<rect class="' + (i % 3 ? "" : "tm-glow") + '" x="' + [66, 80, 114, 126, 158, 172, 186, 158, 172, 186, 210, 222, 252, 266, 114, 126, 66, 80, 210, 252][i] + '" y="' + [70, 84, 40, 56, 26, 40, 54, 70, 84, 26, 56, 72, 80, 94, 80, 100, 104, 116, 100, 112][i] + '" width="7" height="7" fill="#ffd98a" opacity=".85"/>').join("") +
      '<rect x="0" y="132" width="400" height="92" fill="#3d4a5c"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#33404f" stroke-width="1"/>').join("") +
      tag("TIMBALAND", 14, 182, 38, ORANGE, -6) + tag("&amp;", 226, 176, 26, "#fff", -6) + tag("MAGOO", 30, 216, 34, SKY, -4) + tag("SBI", 172, 214, 22, YEL, -3) + tag("MAGANOO", 222, 208, 16, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(302, 96, 96, "Tidewater Dr") + sign(282, 122, 116, "Princess Anne Rd") +
      '<g class="tm-sp"><circle cx="160" cy="166" r="3" fill="' + ORANGE + '" opacity=".7"/></g><g class="tm-sp tm-sp2"><circle cx="166" cy="160" r="2" fill="' + SKY + '" opacity=".6"/></g>',
      sky("tm5", "#0f1430", "#6a3a6a"));
  }

  window.SCENES = { tmstation: tmstation, tmattucks: tmattucks, tmbasement: tmbasement, tmmermaid: tmmermaid, tmcorner: tmcorner };
})();
