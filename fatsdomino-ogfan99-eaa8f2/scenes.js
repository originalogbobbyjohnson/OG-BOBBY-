/* fatsdomino scenes (Regions tab: New Orleans; the Lower Ninth Ward - Antoine "Fats" Domino, born in New Orleans in 1928, lifelong Lower 9th Ward man; his black-and-gold house and studio on Caffin Av at Marais St, built in 1960; Caffin Av was renamed Fats Domino Av in 2022). CSS classes and ids prefixed fd- (the page's own anim-train is kept).
   1 The RTA 8 St. Claude-Arabi bus pulling up at St. Claude Av / Fats Domino Av, the St. Claude Av drawbridge over the Industrial Canal behind.
   2 His black-and-gold house on Fats Domino Av (Caffin Av) at Marais St: gold trim, black shutters, iron fence, piano keys bouncing.
   3 J&M Recording Studio on N Rampart St at Dumaine, where he cut The Fat Man in 1949 with Dave Bartholomew's band: cream corner building, RECORDING sign, a record spinning.
   4 The Hideaway Club in the Ninth Ward, where he played piano for three dollars a week before Dave Bartholomew found him: upright piano, sax, dancers.
   5 Fats Domino Av and Marais St: green signs, FATS tagged in gold on the wall, the Claiborne Av lift bridge's two steel towers over the Industrial Canal behind.
   No digit 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fdflick{0%,100%{opacity:1}44%{opacity:.75}50%{opacity:.25}56%{opacity:.95}}.fd-flk{animation:fdflick 2.4s infinite}.fd-flk2{animation-delay:.9s}' +
    '@keyframes fdkey{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}.fd-key{animation:fdkey .5s ease-in-out infinite}.fd-key2{animation-delay:-.25s}' +
    '@keyframes fdbnc{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}.fd-bnc{animation:fdbnc .55s ease-in-out infinite}.fd-bnc2{animation-delay:-.27s}' +
    '@keyframes fdspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.fd-spin{transform-box:fill-box;transform-origin:50% 50%;animation:fdspin 1.8s linear infinite}' +
    '@keyframes fdnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-66px);opacity:0}}.fd-note{animation:fdnote 3.2s ease-out infinite}.fd-note2{animation-delay:-1.1s}.fd-note3{animation-delay:-2.2s}' +
    '@keyframes fdglow{0%,100%{opacity:.5}50%{opacity:1}}.fd-glow{animation:fdglow 3s ease-in-out infinite}.fd-glow2{animation-delay:-1.5s}' +
    '@keyframes fdgull{from{transform:translate(-40px,0)}to{transform:translate(460px,-20px)}}.fd-gull{animation:fdgull 13s linear infinite;animation-delay:-5s}' +
    '@keyframes fdlift{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}.fd-lift{animation:fdlift 6s ease-in-out infinite}' +
    '@keyframes fdsway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.fd-sway{transform-box:fill-box;transform-origin:50% 100%;animation:fdsway 1.4s ease-in-out infinite}.fd-sway2{animation-delay:-.7s}' +
    '@keyframes fdspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.fd-sp{animation:fdspray 1.4s ease-out infinite}.fd-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GOLD = "#ffd23f", ORANGE = "#ff6b35", TEAL = "#4fd1c5", RTA = "#d6312b";
  const note = (x, y, c, cls) => '<g class="fd-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><path d="M' + (x + 4.4) + ' ' + (y - 1) + 'v-18l9 4" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
  const shotgun = (x, y, w, h, c, trim) => '<g><rect x="' + x + '" y="' + (y - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><path d="M' + (x - 3) + ' ' + (y - h) + 'l' + (w / 2 + 3) + ' -16l' + (w / 2 + 3) + ' 16z" fill="' + trim + '"/>' +
    '<rect x="' + (x + 8) + '" y="' + (y - h + 12) + '" width="' + (w / 2 - 12) + '" height="' + (h - 24) + '" fill="#2a2f3a"/><rect x="' + (x + w / 2 + 4) + '" y="' + (y - h + 18) + '" width="' + (w / 2 - 12) + '" height="' + (h - 18) + '" fill="#5a3a24"/></g>';
  const keys = (x, y, n, w, cls) => '<g>' + Array.from({ length: n }, (_, i) => '<rect class="' + (i % 3 === 0 ? cls + " fd-key2" : (i % 2 ? cls : "")) + '" x="' + (x + i * w) + '" y="' + y + '" width="' + (w - 1) + '" height="' + (w * 3.2) + '" fill="#fbf7ea" stroke="#333" stroke-width=".6"/>').join("") +
    Array.from({ length: n - 1 }, (_, i) => [0, 1, 3, 4, 5].includes(i % 7) ? '<rect x="' + (x + (i + 1) * w - w * 0.3) + '" y="' + y + '" width="' + (w * 0.6) + '" height="' + (w * 2) + '" fill="#111"/>' : "").join("") + '</g>';
  const dancer = (x, y, c, cls) => '<g class="' + cls + '"><circle cx="' + x + '" cy="' + (y - 34) + '" r="7" fill="' + c + '"/><path d="M' + (x - 8) + ' ' + (y - 26) + 'h16l4 20h-24z" fill="' + c + '"/><path d="M' + (x - 6) + ' ' + (y - 6) + 'l-4 12M' + (x + 6) + ' ' + (y - 6) + 'l5 12M' + (x - 8) + ' ' + (y - 24) + 'l-10 -10M' + (x + 8) + ' ' + (y - 24) + 'l10 -12" stroke="' + c + '" stroke-width="4" stroke-linecap="round"/></g>';

  /* 1. RTA 8 at St. Claude Av / Fats Domino Av */
  function fdstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (62 + i * 42) + '" y="124" width="34" height="26" rx="3" fill="#1d2a36"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="112" width="300" height="78" rx="10" fill="#f4f6f8" stroke="#8a96a2" stroke-width="2"/>' + win +
      '<rect x="40" y="156" width="300" height="8" fill="' + RTA + '"/><path d="M40 168h300" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<rect x="322" y="118" width="16" height="44" rx="3" fill="#2a3a48"/><rect x="44" y="124" width="12" height="54" rx="2" fill="#2a3a48"/>' +
      '<rect x="222" y="114" width="96" height="9" rx="2" fill="#111"/><text x="270" y="121.5" text-anchor="middle" ' + font + ' font-size="6.6" fill="#ffb347">8 ST. CLAUDE-ARABI</text>' +
      '<circle cx="334" cy="178" r="4" fill="#fff6c2"/><circle cx="96" cy="190" r="12" fill="#1c1c1c"/><circle cx="96" cy="190" r="5" fill="#9aa3ab"/><circle cx="286" cy="190" r="12" fill="#1c1c1c"/><circle cx="286" cy="190" r="5" fill="#9aa3ab"/></g>';
    const bridge = '<g><rect x="230" y="70" width="12" height="52" fill="#5d6b74"/><rect x="330" y="70" width="12" height="52" fill="#5d6b74"/>' +
      '<g class="fd-lift"><path d="M242 96l44 -40l44 40" stroke="#6f7f88" stroke-width="5" fill="none"/><path d="M242 96h88" stroke="#6f7f88" stroke-width="4"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (252 + i * 16) + ' 96l8 -' + (10 + (i < 2 ? i * 10 : (4 - i) * 10)) + '" stroke="#6f7f88" stroke-width="2"/>').join("") + '</g>' +
      '<rect x="160" y="104" width="240" height="8" fill="#7d8a92"/><rect x="236" y="62" width="100" height="8" fill="#55626a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fds1)"/>' +
      '<g class="fd-gull"><path d="M20 40q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      bridge +
      shotgun(4, 118, 56, 58, "#ffe08a", "#fff") + shotgun(70, 118, 56, 54, "#9fd3c7", "#fff") + shotgun(136, 118, 56, 60, "#f2b6c6", "#fff") +
      '<rect x="0" y="118" width="400" height="76" fill="#55565c"/><path d="M0 150h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="0" y="194" width="400" height="66" fill="#a7a299"/><path d="M0 200h400" stroke="#8d887f" stroke-width="2"/>' +
      '<rect x="366" y="122" width="5" height="78" fill="#3a3a3a"/><rect x="354" y="110" width="30" height="22" rx="3" fill="' + RTA + '"/><text x="369" y="126" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">8</text>' +
      '<rect x="40" y="208" width="320" height="42" rx="3" fill="#111"/><text x="54" y="226" ' + font + ' font-size="15" fill="#fff">St. Claude Av /</text><text x="54" y="243" ' + font + ' font-size="15" fill="#fff">Fats Domino Av</text>' +
      '<rect x="262" y="218" width="26" height="20" rx="4" fill="' + RTA + '"/><text x="275" y="233" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">8</text><text x="294" y="232" ' + font + ' font-size="9" fill="#cfd8e0">RTA BUS</text>',
      sky("fds1", "#7cc4ec", "#f6d9a8"));
  }

  /* 2. The black-and-gold house on Fats Domino Av at Marais St */
  function fdhouse() {
    const fence = Array.from({ length: 34 }, (_, i) => '<rect x="' + (6 + i * 12) + '" y="188" width="3" height="30" fill="#111"/><circle cx="' + (7.5 + i * 12) + '" cy="187" r="2.5" fill="' + GOLD + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fds2)"/>' +
      '<circle cx="60" cy="50" r="22" fill="#fff4c2" opacity=".9"/>' +
      '<rect x="70" y="70" width="260" height="132" fill="#f3ead2"/><path d="M58 72l142 -46l142 46z" fill="#1a1a1a" stroke="' + GOLD + '" stroke-width="4"/>' +
      '<rect x="70" y="70" width="260" height="8" fill="' + GOLD + '"/><rect x="70" y="132" width="260" height="8" fill="' + GOLD + '"/>' +
      [86, 150, 214, 278].map(x => '<rect x="' + x + '" y="86" width="36" height="38" fill="#2c3a4a"/><rect x="' + (x - 8) + '" y="86" width="7" height="38" fill="#111"/><rect x="' + (x + 37) + '" y="86" width="7" height="38" fill="#111"/>').join("") +
      '<rect x="70" y="140" width="260" height="6" fill="#111"/>' + Array.from({ length: 14 }, (_, i) => '<rect x="' + (74 + i * 18.6) + '" y="146" width="4" height="56" fill="#111"/>').join("") +
      '<rect x="176" y="150" width="48" height="52" fill="#111" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<g class="fd-glow"><rect x="96" y="152" width="64" height="30" fill="#ffd77a" opacity=".55"/></g>' + keys(98, 162, 10, 6, "fd-key") +
      '<g class="fd-glow fd-glow2"><rect x="240" y="152" width="64" height="30" fill="#ffd77a" opacity=".55"/></g>' + keys(242, 162, 10, 6, "fd-key") +
      note(130, 140, GOLD) + note(270, 136, "#fff", "fd-note2") + note(200, 128, ORANGE, "fd-note3") +
      '<rect x="0" y="202" width="400" height="58" fill="#55565c"/>' + fence +
      '<rect x="0" y="218" width="400" height="6" fill="#8a8a8a"/>',
      sky("fds2", "#1d2448", "#e0866a"));
  }

  /* 3. J&M Recording Studio, N Rampart St at Dumaine */
  function fdjm() {
    return svg(
      '<rect width="400" height="260" fill="url(#fds3)"/>' +
      '<rect x="40" y="60" width="300" height="140" fill="#efe2c4"/><rect x="34" y="52" width="312" height="12" fill="#c9b48a"/>' +
      [60, 130, 200, 270].map(x => '<rect x="' + x + '" y="78" width="40" height="44" fill="#3a4a5a"/><path d="M' + (x - 4) + ' 124h48" stroke="#2a2a2a" stroke-width="3"/>').join("") +
      '<rect x="40" y="128" width="300" height="6" fill="#2a2a2a"/>' + Array.from({ length: 16 }, (_, i) => '<rect x="' + (44 + i * 18.6) + '" y="134" width="2.5" height="18" fill="#2a2a2a"/>').join("") +
      '<rect x="40" y="150" width="300" height="4" fill="#2a2a2a"/>' +
      '<rect x="160" y="156" width="60" height="44" fill="#5a3a24"/><rect x="70" y="160" width="70" height="36" fill="#ffd77a" class="fd-glow" opacity=".7"/><rect x="240" y="160" width="70" height="36" fill="#ffd77a" class="fd-glow fd-glow2" opacity=".7"/>' +
      '<g class="fd-flk"><rect x="120" y="22" width="160" height="26" rx="4" fill="#111" stroke="' + ORANGE + '" stroke-width="2"/><text x="200" y="41" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" fill="' + ORANGE + '">J&amp;M RECORDING</text></g>' +
      '<g transform="translate(105 178)"><circle class="fd-spin" cx="0" cy="0" r="15" fill="#151515" stroke="#333" stroke-width="2"/><circle cx="0" cy="0" r="5" fill="' + GOLD + '"/><path class="fd-spin" d="M0 -13a13 13 0 0 1 11 6" stroke="#555" stroke-width="1.5" fill="none"/></g>' +
      '<g transform="translate(275 196)"><rect x="-2" y="-34" width="4" height="34" fill="#333"/><rect x="-7" y="-50" width="14" height="18" rx="7" fill="#9aa3ab" stroke="#333" stroke-width="2"/><path d="M-6 -44h12M-6 -40h12" stroke="#555"/></g>' +
      note(160, 150, GOLD) + note(230, 146, "#fff", "fd-note2") +
      '<rect x="0" y="200" width="400" height="60" fill="#4a4b50"/><rect x="0" y="200" width="400" height="5" fill="#9a9a9a"/>' +
      '<rect x="20" y="214" width="136" height="34" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="88" y="229" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">N RAMPART ST</text><text x="88" y="242" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">THE FAT MAN, CUT HERE</text>',
      sky("fds3", "#2a3a6a", "#f0a86a"));
  }

  /* 4. The Hideaway Club */
  function fdhideaway() {
    const crowd = Array.from({ length: 7 }, (_, i) => dancer(30 + i * 56, 250, i % 2 ? "#1a1420" : "#241a2c", "fd-bnc" + (i % 2 ? " fd-bnc2" : ""))).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fds4)"/>' +
      '<path d="M120 0l-60 180M280 0l60 180" stroke="' + GOLD + '" stroke-width="30" opacity=".12" class="fd-glow"/>' +
      '<g class="fd-flk"><rect x="110" y="16" width="180" height="30" rx="6" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="38" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="19" fill="' + GOLD + '">THE HIDEAWAY</text></g>' +
      '<rect x="0" y="160" width="400" height="20" fill="#5a3a22"/>' +
      '<rect x="80" y="86" width="130" height="78" rx="4" fill="#2a1a12" stroke="#6b4a2e" stroke-width="3"/><rect x="86" y="92" width="118" height="22" fill="#3a2418"/>' +
      keys(84, 118, 20, 6.1, "fd-key") +
      '<rect x="92" y="138" width="8" height="24" fill="#2a1a12"/><rect x="190" y="138" width="8" height="24" fill="#2a1a12"/>' +
      '<g transform="translate(150 86)"><circle cx="0" cy="-20" r="13" fill="#1a1a1a"/><path d="M-20 26q0 -34 20 -34q20 0 20 34z" fill="#1a1a1a"/></g>' +
      '<g transform="translate(290 156)"><circle cx="0" cy="-64" r="10" fill="#1a1a1a"/><path d="M-14 0v-44q14 -12 28 0v44z" fill="#1a1a1a"/>' +
      '<g class="fd-sway"><path d="M6 -50q16 4 14 30q-2 14 -12 12q-8 -2 -4 -10" stroke="' + GOLD + '" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M4 -54l-10 -4" stroke="' + GOLD + '" stroke-width="3"/></g></g>' +
      note(210, 80, GOLD) + note(250, 70, "#fff", "fd-note2") + note(130, 74, ORANGE, "fd-note3") +
      '<rect x="318" y="62" width="70" height="40" rx="3" fill="#1d2a1d" stroke="#6b4a2e" stroke-width="3"/><text x="353" y="78" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="10" fill="#fff">PIANO MAN</text><text x="353" y="94" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="11" fill="' + GOLD + '">$3 A WEEK</text>' +
      '<rect x="0" y="180" width="400" height="80" fill="#2c1e18"/>' + crowd,
      sky("fds4", "#140c18", "#3a1e2a"));
  }

  /* 5. Fats Domino Av and Marais St, the Claiborne Av lift bridge behind */
  function fdcorner() {
    const blocks = Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (126 + r * 12) + 'h300" stroke="#c9b48a" stroke-width="1"/>').join("");
    const tower = x => '<rect x="' + x + '" y="20" width="18" height="104" fill="#4f6b5e"/><path d="M' + x + ' 20l18 104M' + (x + 18) + ' 20l-18 104" stroke="#3a5246" stroke-width="2"/><rect x="' + (x - 3) + '" y="14" width="24" height="8" fill="#3a5246"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fds5)"/>' +
      '<g class="fd-gull"><path d="M20 50q6 -6 12 0q6 -6 12 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>' +
      tower(120) + tower(250) + '<g class="fd-lift"><rect x="138" y="70" width="112" height="12" fill="#5f7d6e"/><path d="M138 70l20 12l20 -12l20 12l20 -12l20 12l20 -12" stroke="#3a5246" stroke-width="2" fill="none"/></g>' +
      '<rect x="40" y="108" width="80" height="8" fill="#7d8a92"/><rect x="268" y="108" width="132" height="8" fill="#7d8a92"/>' +
      '<rect x="0" y="120" width="300" height="104" fill="#ece0c2"/>' + blocks +
      '<rect x="0" y="118" width="300" height="6" fill="#1a1a1a"/>' +
      tag("FATS", 28, 196, 58, GOLD, -7) + tag("THE FAT MAN", 150, 212, 19, ORANGE, -4) +
      '<g transform="translate(206 150)"><rect x="-18" y="-10" width="36" height="20" rx="3" fill="#fff" stroke="#000" stroke-width="2"/><path d="M0 -10v20" stroke="#000" stroke-width="2"/><circle cx="-9" cy="-3" r="2" fill="#000"/><circle cx="-9" cy="4" r="2" fill="#000"/><circle cx="9" cy="0" r="2" fill="#000"/></g>' +
      '<g transform="translate(262 174)"><rect x="-3" y="0" width="6" height="16" fill="#555"/><circle class="fd-sp" cx="0" cy="-4" r="4" fill="' + GOLD + '" opacity=".7"/><circle class="fd-sp fd-sp2" cx="5" cy="-6" r="3" fill="' + ORANGE + '" opacity=".7"/></g>' +
      '<rect x="326" y="104" width="6" height="120" fill="#3c4a3c"/>' + sign(290, 108, 110, "Fats Domino Av") + sign(290, 132, 110, "Marais St") +
      '<rect x="0" y="224" width="400" height="36" fill="#4a4b50"/><rect x="0" y="224" width="400" height="4" fill="#9a9a9a"/>',
      sky("fds5", "#f2a85c", "#ffe7b0"));
  }

  window.SCENES = { fdstation, fdhouse, fdjm, fdhideaway, fdcorner };
})();
