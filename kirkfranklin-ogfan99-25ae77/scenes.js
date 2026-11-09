/* kirkfranklin scenes (Regions tab: Houston + Texas; Southside Fort Worth). CSS classes prefixed kf- (the page's own anim-train is kept).
   1 The TRE (Trinity Railway Express) pulling into Fort Worth T&P Station: the 1931 art-deco Texas & Pacific building, buff brick piers, black-and-gold trim.
   2 New Mount Rose Missionary Baptist Church on Mississippi Ave, where Kirk led the adult choir at 11: robed choir swaying (backs turned), a kid directing.
   3 O.D. Wyatt High School, home of the Singing Chaparrals: Columbia blue and navy, the choir on the risers, the flag waving.
   4 Lakewood Church, Houston, June 16, 2000, the live "Brighter Day" night: hands up, stage lights sweeping, the sun rising on the screen.
   5 Mississippi Ave and E Berry St on the Southside: green signs, KIRK tagged on the brick, the downtown Fort Worth skyline lit up behind.
   No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kfblink{0%,100%{opacity:.25}50%{opacity:1}}.kf-bl{animation:kfblink 1.4s ease-in-out infinite}.kf-bl2{animation-delay:-.7s}' +
    '@keyframes kfsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.kf-sway{animation:kfsway 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.kf-s2{animation-delay:-.4s}.kf-s3{animation-delay:-.8s}.kf-s4{animation-delay:-1.2s}' +
    '@keyframes kfnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(12px,-56px);opacity:0}}.kf-note{animation:kfnote 3s ease-out infinite}.kf-n2{animation-delay:-1s}.kf-n3{animation-delay:-2s}' +
    '@keyframes kfwave{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.kf-flag{animation:kfwave 1.2s ease-in-out infinite;transform-box:fill-box;transform-origin:0 50%}' +
    '@keyframes kfconduct{0%,100%{transform:rotate(-30deg)}50%{transform:rotate(25deg)}}.kf-arm{animation:kfconduct .9s ease-in-out infinite;transform-box:fill-box;transform-origin:0% 100%}' +
    '@keyframes kfhands{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.kf-hand{animation:kfhands 1.1s ease-in-out infinite}.kf-h2{animation-delay:-.55s}' +
    '@keyframes kfbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.kf-beam{animation:kfbeam 4s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 0%}.kf-b2{animation-delay:-2s}' +
    '@keyframes kfrise{0%,100%{transform:translateY(4px)}50%{transform:translateY(-4px)}}.kf-sun{animation:kfrise 3s ease-in-out infinite}' +
    '@keyframes kfspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kf-sp{animation:kfspray 1.4s ease-out infinite}.kf-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "kf-bl" + (i % 2 ? " kf-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const brick = (x, y, w, h, base, line) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>' + Array.from({ length: Math.floor(h / 10) }, (_, r) => '<path d="M' + x + ' ' + (y + 10 + r * 10) + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>').join("");
  const GOLD = "#f2c14e", PURP = "#7b4fc4", CBLUE = "#7fb4e6", NAVY = "#1b2a5a", TRE = "#1d4f91", RED = "#c8323a";
  /* a robed singer seen from behind: no face */
  const robe = (x, base, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (base - 38) + '" r="6.5" fill="#2a1a12"/>' +
    '<path d="M' + (x - 11) + ' ' + base + 'l3 -28q8 -6 16 0l3 28z" fill="' + c + '"/><path d="M' + (x - 6) + ' ' + (base - 30) + 'q6 5 12 0" stroke="' + GOLD + '" stroke-width="2" fill="none"/></g>';
  const note = (x, y, c, cls) => '<g class="kf-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="1.6" height="14" fill="' + c + '"/></g>';

  /* 1. TRE into Fort Worth T&P Station */
  function kfstation() {
    const piers = Array.from({ length: 7 }, (_, i) => '<rect x="' + (112 + i * 26) + '" y="30" width="10" height="110" fill="#d9c49a"/><rect x="' + (112 + i * 26) + '" y="30" width="10" height="6" fill="' + GOLD + '"/>').join("");
    const wins = Array.from({ length: 6 }, (_, i) => Array.from({ length: 4 }, (_, r) => '<rect x="' + (124 + i * 26) + '" y="' + (44 + r * 22) + '" width="12" height="14" fill="' + (r % 2 ? "#ffd98a" : "#f6e2a8") + '" opacity="' + (0.55 + 0.1 * ((i + r) % 3)) + '"/>').join("")).join("");
    const chev = Array.from({ length: 9 }, (_, i) => '<path d="M' + (114 + i * 20) + ' 26l10 -8 10 8" stroke="' + GOLD + '" stroke-width="2" fill="none"/>').join("");
    const cars = Array.from({ length: 2 }, (_, c) => { const x0 = 30 + c * 170; return '<rect x="' + x0 + '" y="150" width="164" height="50" rx="6" fill="#d7dbe0" stroke="#6b7480" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (x0 + 10 + i * 30) + '" y="158" width="22" height="16" rx="2" fill="#1c2630"/>').join("") +
      '<rect x="' + x0 + '" y="180" width="164" height="7" fill="' + TRE + '"/><rect x="' + x0 + '" y="188" width="164" height="3" fill="' + RED + '"/>' +
      '<circle cx="' + (x0 + 30) + '" cy="203" r="7" fill="#222"/><circle cx="' + (x0 + 134) + '" cy="203" r="7" fill="#222"/>'; }).join("");
    const train = '<g class="anim-train">' + cars + '<rect x="344" y="152" width="20" height="46" rx="6" fill="#c3c8ce"/><circle cx="356" cy="190" r="3.5" fill="#fff6c2"/>' +
      '<rect x="40" y="152" width="40" height="8" rx="2" fill="#111"/><text x="60" y="158.8" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb84a">TRE</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kfs1)"/>' + stars(14) +
      '<rect x="100" y="24" width="200" height="120" fill="#c9b07c"/>' + piers + wins + chev +
      '<rect x="176" y="8" width="48" height="18" fill="#c9b07c"/><path d="M180 8l20 -6 20 6" fill="' + GOLD + '"/>' +
      '<rect x="100" y="122" width="200" height="6" fill="#151515"/><rect x="100" y="128" width="200" height="3" fill="' + GOLD + '"/>' +
      '<rect x="0" y="100" width="100" height="44" fill="#2a2f3a"/><rect x="300" y="96" width="100" height="48" fill="#262b36"/>' +
      '<rect x="0" y="144" width="400" height="66" fill="#3a3d44"/>' + train +
      '<rect x="0" y="208" width="400" height="6" fill="#6a6a6a"/><rect x="0" y="214" width="400" height="46" fill="#9a958c"/><path d="M0 214h400" stroke="#f2c200" stroke-width="3"/>' +
      '<rect x="20" y="220" width="300" height="34" rx="3" fill="#111"/><rect x="28" y="227" width="34" height="20" rx="4" fill="' + TRE + '"/><text x="45" y="241" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">TRE</text>' +
      '<text x="70" y="236" ' + font + ' font-size="13" fill="#fff">FORT WORTH T&amp;P STATION</text><text x="70" y="249" ' + font + ' font-size="8.5" fill="' + GOLD + '">LANCASTER AVE · TRINITY RAILWAY EXPRESS</text>',
      sky("kfs1", "#141a3a", "#e08a5a"));
  }

  /* 2. New Mount Rose Missionary Baptist Church, the choir loft */
  function kfchurch() {
    const pipes = Array.from({ length: 13 }, (_, i) => '<rect x="' + (122 + i * 12) + '" y="' + (40 + Math.abs(6 - i) * 4) + '" width="8" height="' + (60 - Math.abs(6 - i) * 4) + '" rx="3" fill="#c9a24a"/>').join("");
    const row1 = [0, 1, 2, 3, 4, 5, 6].map(i => robe(110 + i * 30, 150, PURP, "kf-sway kf-s" + (1 + i % 4))).join("");
    const row2 = [0, 1, 2, 3, 4, 5].map(i => robe(125 + i * 30, 176, "#5a36a0", "kf-sway kf-s" + (1 + (i + 2) % 4))).join("");
    const kid = '<g><circle cx="200" cy="206" r="6" fill="#2a1a12"/><path d="M191 236l2 -24q7 -5 14 0l2 24z" fill="#1d1d24"/>' +
      '<g class="kf-arm"><rect x="207" y="210" width="16" height="3" rx="1.5" fill="#1d1d24" transform="rotate(-35 207 212)"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="#3a1f2e"/>' +
      '<path d="M80 20h240v100H80z" fill="#4a2a3a"/><path d="M180 20q20 -16 40 0v40h-40z" fill="#6a3a4a"/>' +
      '<path d="M190 22q10 -10 20 0v28h-20z" fill="url(#kfg2)"/><path d="M200 24v24M191 34h18" stroke="#f6e2a8" stroke-width="2"/>' +
      pipes +
      '<rect x="40" y="30" width="34" height="80" rx="16" fill="url(#kfg2)" opacity=".8"/><rect x="326" y="30" width="34" height="80" rx="16" fill="url(#kfg2)" opacity=".8"/>' +
      '<rect x="80" y="120" width="240" height="34" fill="#6b3f2a"/><rect x="80" y="150" width="240" height="30" fill="#5a3322"/>' +
      row1 + row2 +
      '<rect x="0" y="180" width="400" height="80" fill="#7a2030"/><path d="M0 180h400" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<rect x="160" y="236" width="80" height="24" fill="#6b3f2a"/>' + kid +
      note(90, 120, GOLD) + note(320, 110, "#fff", "kf-n2") + note(260, 100, GOLD, "kf-n3") +
      '<rect x="10" y="226" width="140" height="26" rx="3" fill="#111" opacity=".85"/><text x="80" y="238" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">NEW MOUNT ROSE</text><text x="80" y="248" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + GOLD + '">MISSISSIPPI AVE · CHOIR AT 11</text>',
      '<linearGradient id="kfg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd27a"/><stop offset=".5" stop-color="#c85a8a"/><stop offset="1" stop-color="#4a7ad0"/></linearGradient>');
  }

  /* 3. O.D. Wyatt High School, the Singing Chaparrals */
  function kfwyatt() {
    const wins = Array.from({ length: 10 }, (_, i) => '<rect x="' + (36 + i * 34) + '" y="70" width="22" height="18" fill="#f6e2a8" opacity=".85"/><rect x="' + (36 + i * 34) + '" y="100" width="22" height="18" fill="#f6e2a8" opacity=".7"/>').join("");
    const riser = [2, 1, 0].map(r => '<rect x="' + (90 - r * 14) + '" y="' + (214 - r * 18) + '" width="' + (220 + r * 28) + '" height="18" fill="' + ["#5d6a80", "#4d586c", "#3d4658"][r] + '"/>').join("");
    const singers = [2, 1, 0].map(r => Array.from({ length: 6 + r }, (_, i) => robe(108 - r * 14 + i * 34, 214 - r * 18, r === 1 ? CBLUE : NAVY, "kf-sway kf-s" + (1 + (i + r) % 4))).join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kfs3)"/>' +
      '<rect x="20" y="56" width="360" height="90" fill="#b98a5a"/>' + brick(20, 56, 360, 90, "#b98a5a", "#9a6e44") + wins +
      '<rect x="160" y="40" width="80" height="20" fill="' + NAVY + '"/><text x="200" y="54" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">O.D. WYATT</text>' +
      '<rect x="180" y="112" width="40" height="34" fill="' + NAVY + '"/><path d="M200 112v34" stroke="' + CBLUE + '" stroke-width="2"/>' +
      '<rect x="356" y="10" width="3" height="50" fill="#ccc"/><g class="kf-flag"><rect x="359" y="12" width="30" height="18" fill="' + CBLUE + '"/><rect x="359" y="24" width="30" height="6" fill="' + NAVY + '"/></g>' +
      '<rect x="0" y="146" width="400" height="114" fill="#3a6a3a"/>' + riser + singers +
      note(60, 150, CBLUE) + note(340, 140, "#fff", "kf-n2") + note(200, 128, CBLUE, "kf-n3") +
      '<rect x="10" y="226" width="150" height="26" rx="3" fill="#111" opacity=".85"/><text x="85" y="238" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">THE SINGING CHAPARRALS</text><text x="85" y="248" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + CBLUE + '">COLUMBIA BLUE &amp; NAVY</text>',
      sky("kfs3", "#5a8ad0", "#f3d6a0"));
  }

  /* 4. Lakewood Church, Houston, the live "Brighter Day" night */
  function kflakewood() {
    const crowd = Array.from({ length: 22 }, (_, i) => { const x = 8 + i * 18, b = 250 - (i % 2) * 6; return '<circle cx="' + x + '" cy="' + (b - 22) + '" r="7" fill="#2c2546"/><path d="M' + (x - 9) + ' ' + (b + 10) + 'q9 -26 18 0z" fill="#2c2546"/>' +
      (i % 3 === 0 ? '<g class="kf-hand' + (i % 2 ? " kf-h2" : "") + '"><rect x="' + (x + 5) + '" y="' + (b - 46) + '" width="3.5" height="22" rx="1.5" fill="#2c2546" transform="rotate(12 ' + (x + 6) + ' ' + (b - 24) + ')"/></g>' : ""); }).join("");
    const choir = Array.from({ length: 12 }, (_, i) => robe(88 + i * 20, 166, i % 2 ? GOLD : "#e8e2d0", "kf-sway kf-s" + (1 + i % 4))).join("");
    return svg(
      '<rect width="400" height="260" fill="#0c0a1a"/>' +
      '<g class="kf-beam"><path d="M90 0l-40 200h50z" fill="#ffe7a8" opacity=".18"/></g><g class="kf-beam kf-b2"><path d="M310 0l-10 200h50z" fill="#a8d8ff" opacity=".18"/></g>' +
      '<rect x="120" y="22" width="160" height="84" rx="4" fill="#1d2a50" stroke="#556" stroke-width="2"/>' +
      '<rect x="124" y="26" width="152" height="76" fill="url(#kfg4)"/>' +
      '<g clip-path="url(#kfclip4)"><g class="kf-sun"><circle cx="200" cy="80" r="18" fill="' + GOLD + '"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="198" y="50" width="4" height="9" fill="' + GOLD + '" transform="rotate(' + (i * 45 - 90) + ' 200 80)"/>').join("") + '</g></g>' +
      '<rect x="124" y="88" width="152" height="14" fill="#2a3a70"/>' +
      '<text x="200" y="40" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">BRIGHTER DAY</text>' +
      '<rect x="40" y="120" width="320" height="56" fill="#2a2040"/>' + choir +
      '<rect x="0" y="176" width="400" height="20" fill="#3a2c58"/><path d="M0 176h400" stroke="' + GOLD + '" stroke-width="2"/>' +
      crowd +
      '<rect x="250" y="4" width="146" height="26" rx="3" fill="#111" opacity=".85"/><text x="323" y="16" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">LAKEWOOD CHURCH · HOUSTON</text><text x="323" y="26" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + GOLD + '">LIVE · JUNE 16, 2000</text>',
      '<linearGradient id="kfg4" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#f08a4a"/><stop offset="1" stop-color="#5aa0e8"/></linearGradient><clipPath id="kfclip4"><rect x="124" y="26" width="152" height="62"/></clipPath>');
  }

  /* 5. Mississippi Ave and E Berry St, downtown Fort Worth behind */
  function kfcorner() {
    const towers = '<g fill="#1a2236">' +
      '<rect x="40" y="60" width="34" height="90"/><rect x="80" y="40" width="40" height="110"/><path d="M80 40l20 -14 20 14z"/>' +
      '<rect x="128" y="70" width="30" height="80"/><rect x="164" y="30" width="44" height="120"/><rect x="214" y="54" width="36" height="96"/><path d="M214 54l18 -18 18 18z"/>' +
      '<rect x="256" y="76" width="30" height="74"/><rect x="292" y="48" width="38" height="102"/></g>' +
      Array.from({ length: 40 }, (_, i) => '<rect class="' + (i % 5 ? "" : "kf-bl") + '" x="' + [46, 86, 104, 134, 170, 188, 220, 236, 262, 298, 314][i % 11] + '" y="' + (60 + (i * 13) % 80) + '" width="5" height="4" fill="#ffd98a" opacity=".8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kfs5)"/>' + stars(16) + towers +
      '<rect x="0" y="150" width="400" height="110" fill="#2b2b30"/>' +
      brick(130, 120, 270, 100, "#8a4a36", "#6a3626") +
      tag("KIRK", 168, 186, 46, GOLD, -8) + tag("THE FAMILY", 270, 206, 20, CBLUE, -4) + tag("WHOOP", 312, 150, 17, PURP, 6) +
      '<g class="kf-sp"><circle cx="356" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="kf-sp kf-sp2"><circle cx="362" cy="174" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#9a958c"/><path d="M0 222h400" stroke="#d8d2c6" stroke-width="3"/>' +
      '<rect x="62" y="92" width="5" height="140" fill="#5a6066"/>' + sign(10, 86, 108, "MISSISSIPPI AVE") + sign(14, 112, 100, "E BERRY ST") +
      '<text x="64" y="80" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">SOUTHSIDE · FORT WORTH</text>',
      sky("kfs5", "#0f1430", "#6a3a5a"));
  }

  window.SCENES = { kfstation, kfchurch, kfwyatt, kflakewood, kfcorner };
})();
