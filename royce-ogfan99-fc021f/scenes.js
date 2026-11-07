/* royce scenes (Regions tab: Detroit; born in Detroit, raised in Oak Park on the 8 Mile line). CSS classes and ids prefixed ry- (the page's own anim-train is kept, used on the bus).
   1 DDOT Route 17 (Eight Mile) pulling up to the 8 Mile & Coolidge stop, the Detroit / Oak Park line.
   2 The Boblo boat ("Boblo Boat"): the white three-deck steamer with its tall stack, cruising down the Detroit River in the summer.
   3 Boblo Island amusement park: the wooden roller coaster with a car climbing, the tall sky tower, the carousel lights.
   4 Oak Park High School, where he got the name Royce: the brick front, the sign, the outdoor court with a ball bouncing ("never better than me in basketball").
   5 Coolidge Hwy and Oak Park Blvd: green signs, ROYCE tagged on the brick, the gold glass towers of Southfield Town Center behind.
   No logos, no faces, no numeral 9 anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ryflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.ry-flk{animation:ryflick 2.2s infinite}.ry-flk2{animation-delay:.7s}' +
    '@keyframes rychase{0%,100%{opacity:.25}50%{opacity:1}}.ry-ch{animation:rychase .8s steps(1) infinite}.ry-ch2{animation-delay:.4s}' +
    '@keyframes ryglow{0%,100%{opacity:.35}50%{opacity:1}}.ry-gl{animation:ryglow 2s ease-in-out infinite}.ry-gl2{animation-delay:.6s}.ry-gl3{animation-delay:1.2s}' +
    '@keyframes ryboat{0%{transform:translateX(-30px)}100%{transform:translateX(30px)}}.ry-boat{animation:ryboat 6s ease-in-out infinite alternate}' +
    '@keyframes rybob{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}.ry-bob{animation:rybob 1.6s ease-in-out infinite}' +
    '@keyframes ryrip{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.ry-rip{animation:ryrip 3s ease-in-out infinite}.ry-rip2{animation-delay:-1.5s}' +
    '@keyframes rysmoke{0%{transform:translate(0,0);opacity:.7}100%{transform:translate(-30px,-30px);opacity:0}}.ry-sm{animation:rysmoke 3s ease-out infinite}.ry-sm2{animation-delay:-1s}.ry-sm3{animation-delay:-2s}' +
    '@keyframes rygull{0%{transform:translate(-30px,0)}100%{transform:translate(440px,-30px)}}.ry-gull{animation:rygull 10s linear infinite}.ry-gull2{animation-delay:-5s}' +
    '@keyframes rycoaster{0%{transform:translate(0,0)}50%{transform:translate(84px,-60px)}100%{transform:translate(0,0)}}.ry-cst{animation:rycoaster 4s ease-in-out infinite}' +
    '@keyframes ryspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.ry-spin{transform-box:view-box;transform-origin:318px 92px;animation:ryspin 5s linear infinite}' +
    '@keyframes ryball{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.ry-ball{animation:ryball 1s ease-in infinite}' +
    '@keyframes ryspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ry-sp{animation:ryspray 1.4s ease-out infinite}.ry-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GOLD = "#d4af37", RED = "#c8102e", RIVER = "#2f6f9a", DDOT = "#0b6e4f";
  const stars = n => Array.from({ length: n }, (_, i) => '<circle cx="' + ((i * 47 + 9) % 400) + '" cy="' + ((i * 31) % 80 + 6) + '" r="1.1" fill="#fff" opacity=".7"/>').join("");
  const gulls = '<g class="ry-gull"><path d="M0 40q5 -5 10 0q5 -5 10 0" stroke="#fff" stroke-width="1.6" fill="none"/></g><g class="ry-gull ry-gull2"><path d="M0 58q4 -4 8 0q4 -4 8 0" stroke="#fff" stroke-width="1.4" fill="none"/></g>';

  /* 1. DDOT Route 17 at 8 Mile & Coolidge */
  function rystation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (80 + i * 40) + '" y="122" width="32" height="26" rx="3" fill="#1e2a26"/>').join("");
    const bus = '<g class="anim-train"><rect x="48" y="110" width="326" height="86" rx="10" fill="#f2f4f1" stroke="#98a0a6" stroke-width="2"/>' + win +
      '<rect x="48" y="156" width="326" height="13" fill="' + DDOT + '"/><rect x="48" y="171" width="326" height="3" fill="' + GOLD + '"/>' +
      '<rect x="52" y="120" width="22" height="54" rx="2" fill="#1e2a26"/>' +
      '<rect x="78" y="113" width="200" height="7" rx="2" fill="#111"/><text x="178" y="118.6" text-anchor="middle" ' + font + ' font-size="5.4" fill="#ffb347">17 EIGHT MILE · WEST</text>' +
      '<text x="330" y="188" text-anchor="middle" ' + font + ' font-size="11" fill="' + DDOT + '">DDOT</text>' +
      '<circle cx="112" cy="198" r="15" fill="#1b1b1b"/><circle cx="112" cy="198" r="6" fill="#9aa1a6"/><circle cx="318" cy="198" r="15" fill="#1b1b1b"/><circle cx="318" cy="198" r="6" fill="#9aa1a6"/>' +
      '<circle class="ry-flk" cx="368" cy="184" r="4" fill="#fff6c2"/></g>';
    const pole = '<rect x="22" y="70" width="4" height="146" fill="#666"/><rect x="4" y="62" width="40" height="40" rx="3" fill="' + DDOT + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="24" y="80" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUS</text><circle cx="24" cy="91" r="8" fill="#fff"/><text x="24" y="94.5" text-anchor="middle" ' + font + ' font-size="9" fill="' + DDOT + '">17</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#rys1)"/>' + stars(12) +
      '<g fill="#3b3140"><rect x="0" y="90" width="70" height="40"/><rect x="76" y="80" width="88" height="50"/><rect x="170" y="96" width="60" height="34"/><rect x="236" y="84" width="80" height="46"/><rect x="322" y="94" width="78" height="36"/></g>' +
      Array.from({ length: 9 }, (_, i) => '<rect class="ry-gl' + (i % 3 ? " ry-gl2" : "") + '" x="' + (12 + i * 44) + '" y="' + (100 + (i % 2) * 10) + '" width="10" height="7" fill="' + GOLD + '" opacity=".6"/>').join("") +
      '<rect x="0" y="210" width="400" height="50" fill="#3d4148"/><rect x="0" y="208" width="400" height="4" fill="#cfd3d8"/>' +
      '<path d="M0 236h400" stroke="#f2d23c" stroke-width="2" stroke-dasharray="18 14"/>' +
      bus + pole +
      '<rect x="88" y="20" width="224" height="34" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="35" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">8 MILE &amp; COOLIDGE</text>' +
      '<rect x="120" y="40" width="22" height="11" rx="5.5" fill="' + DDOT + '"/><text x="131" y="48.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">17</text>' +
      '<text x="150" y="48.5" ' + font + ' font-size="8" fill="#cfd3d8">DETROIT · OAK PARK LINE</text>',
      sky("rys1", "#1c1430", "#b0563a"));
  }

  /* 2. The Boblo boat on the Detroit River */
  function ryboblo() {
    const rails = (y, x1, x2) => '<path d="M' + x1 + ' ' + y + 'h' + (x2 - x1) + '" stroke="#2b2b33" stroke-width="1"/>' + Array.from({ length: Math.floor((x2 - x1) / 8) }, (_, i) => '<path d="M' + (x1 + i * 8) + ' ' + y + 'v6" stroke="#2b2b33" stroke-width=".8"/>').join("");
    const wins = (y, x1, n, gap) => Array.from({ length: n }, (_, i) => '<rect x="' + (x1 + i * gap) + '" y="' + y + '" width="6" height="7" rx="1" fill="#24313f"/>').join("");
    const boat = '<g class="ry-boat"><g class="ry-bob">' +
      '<path d="M70 176h270l-16 26h-236z" fill="#f4f2ec" stroke="#8a8f96" stroke-width="1.5"/><rect x="74" y="196" width="262" height="5" fill="' + RED + '"/>' +
      '<rect x="88" y="150" width="236" height="26" fill="#f7f5ef" stroke="#8a8f96" stroke-width="1.2"/>' + wins(158, 96, 22, 10) + rails(150, 88, 324) +
      '<rect x="104" y="128" width="200" height="22" fill="#f7f5ef" stroke="#8a8f96" stroke-width="1.2"/>' + wins(135, 112, 18, 10.5) + rails(128, 104, 304) +
      '<rect x="136" y="110" width="132" height="18" fill="#f7f5ef" stroke="#8a8f96" stroke-width="1.2"/>' + rails(110, 136, 268) +
      '<rect x="248" y="98" width="34" height="14" fill="#f7f5ef" stroke="#8a8f96" stroke-width="1.2"/><rect x="252" y="101" width="26" height="6" fill="#24313f"/>' +
      '<rect x="190" y="58" width="16" height="52" fill="#f4f2ec" stroke="#8a8f96" stroke-width="1.2"/><rect x="190" y="58" width="16" height="10" fill="#1b1b1b"/>' +
      '<rect x="120" y="96" width="3" height="32" fill="#555"/><path d="M121 96l18 8l-18 6z" fill="' + RED + '"/>' +
      '<circle class="ry-sm" cx="198" cy="54" r="7" fill="#c9c9cf"/><circle class="ry-sm ry-sm2" cx="198" cy="54" r="6" fill="#c9c9cf"/><circle class="ry-sm ry-sm3" cx="198" cy="54" r="5" fill="#c9c9cf"/>' +
      '<text x="210" y="190" text-anchor="middle" ' + font + ' font-size="10" fill="#2b2b33">BOBLO</text></g></g>';
    const waves = Array.from({ length: 10 }, (_, i) => '<path class="ry-rip' + (i % 2 ? " ry-rip2" : "") + '" d="M' + (i * 44 - 20) + ' ' + (212 + (i % 3) * 14) + 'q10 -5 20 0t20 0" stroke="#bfe0f5" stroke-width="2" fill="none" opacity=".7"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rys2)"/>' +
      '<circle cx="330" cy="54" r="22" fill="#ffe7a3" opacity=".9"/>' + gulls +
      '<path d="M0 150q60 -14 120 -6t140 -4t140 6v14h-400z" fill="#3f6b45"/>' +
      '<g fill="#5c4630"><path d="M300 150l20 -26l20 26M318 150l14 -18l14 18" stroke="#5c4630" stroke-width="1.5" fill="none"/></g>' +
      '<rect x="0" y="160" width="400" height="100" fill="' + RIVER + '"/>' + waves + boat,
      sky("rys2", "#7ab8e0", "#f4c98a"));
  }

  /* 3. Boblo Island amusement park */
  function ryisland() {
    const trestle = Array.from({ length: 12 }, (_, i) => { const x = 40 + i * 16; const top = 200 - Math.min(i, 6) * 12 + Math.max(0, i - 6) * 14; return '<path d="M' + x + ' 210V' + top + '" stroke="#b98a52" stroke-width="2"/>'; }).join("") +
      Array.from({ length: 6 }, (_, i) => '<path d="M40 ' + (206 - i * 14) + 'L216 ' + (206 - i * 14) + '" stroke="#a0733f" stroke-width="1" opacity=".7"/>').join("");
    const track = '<path d="M40 200L136 128Q148 120 160 132L216 186L230 200" stroke="#7a4e22" stroke-width="4" fill="none"/>';
    const car = '<g class="ry-cst"><rect x="44" y="186" width="20" height="9" rx="2" fill="' + RED + '"/><circle cx="49" cy="196" r="2" fill="#111"/><circle cx="59" cy="196" r="2" fill="#111"/></g>';
    const tower = '<rect x="314" y="40" width="8" height="170" fill="#d8dde3"/><g class="ry-spin"><circle cx="318" cy="92" r="20" fill="none" stroke="' + GOLD + '" stroke-width="3"/><rect x="298" y="89" width="40" height="6" fill="' + GOLD + '"/><rect x="315" y="72" width="6" height="40" fill="' + GOLD + '"/></g><circle cx="318" cy="40" r="5" fill="' + RED + '" class="ry-flk"/>';
    const carousel = '<path d="M244 170l36 -18l36 18z" fill="' + RED + '"/><rect x="246" y="170" width="68" height="34" fill="#f4e6c4"/>' +
      Array.from({ length: 8 }, (_, i) => '<circle class="ry-ch' + (i % 2 ? " ry-ch2" : "") + '" cx="' + (250 + i * 8.5) + '" cy="173" r="2" fill="#fff3c4"/>').join("") +
      Array.from({ length: 4 }, (_, i) => '<path d="M' + (256 + i * 16) + ' 176v28" stroke="' + GOLD + '" stroke-width="2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rys3)"/>' + gulls +
      '<rect x="0" y="210" width="400" height="50" fill="#4f7a3e"/><rect x="0" y="236" width="400" height="24" fill="' + RIVER + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<path class="ry-rip' + (i % 2 ? " ry-rip2" : "") + '" d="M' + (i * 70) + ' 246q10 -5 20 0t20 0" stroke="#bfe0f5" stroke-width="2" fill="none"/>').join("") +
      trestle + track + car + tower + carousel +
      '<rect x="120" y="24" width="160" height="28" rx="3" fill="#f4e6c4" stroke="' + RED + '" stroke-width="2"/><text x="200" y="43" text-anchor="middle" ' + font + ' font-size="13" fill="' + RED + '">BOBLO ISLAND</text>',
      sky("rys3", "#5fa8d8", "#cfe6f2"));
  }

  /* 4. Oak Park High School */
  function ryschool() {
    const brick = Array.from({ length: 10 }, (_, i) => '<path d="M40 ' + (90 + i * 8) + 'h320" stroke="#7a3a2a" stroke-width="1" opacity=".6"/>').join("");
    const wins = Array.from({ length: 8 }, (_, i) => '<rect x="' + (52 + i * 38) + '" y="98" width="24" height="18" fill="#cfe2ee" stroke="#efe9dc" stroke-width="2"/>').join("") +
      Array.from({ length: 8 }, (_, i) => i === 3 || i === 4 ? "" : '<rect x="' + (52 + i * 38) + '" y="128" width="24" height="18" fill="#cfe2ee" stroke="#efe9dc" stroke-width="2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rys4)"/>' +
      '<g fill="#3f6b45"><circle cx="20" cy="150" r="26"/><circle cx="384" cy="148" r="28"/></g>' +
      '<rect x="40" y="86" width="320" height="76" fill="#9b4a35"/>' + brick + '<rect x="36" y="80" width="328" height="8" fill="#e8e2d0"/>' + wins +
      '<rect x="170" y="122" width="60" height="40" fill="#e8e2d0"/><rect x="176" y="128" width="22" height="34" fill="#3a4a5a"/><rect x="202" y="128" width="22" height="34" fill="#3a4a5a"/>' +
      '<rect x="120" y="56" width="160" height="22" rx="2" fill="#1b2a48" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="71" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">OAK PARK HIGH SCHOOL</text>' +
      '<rect x="0" y="162" width="400" height="98" fill="#6b6f76"/><path d="M0 162h400" stroke="#e8ecf2" stroke-width="3"/>' +
      '<path d="M120 252l40 -70h80l40 70" stroke="#f2f2ee" stroke-width="2" fill="none"/><circle cx="200" cy="224" r="16" stroke="#f2f2ee" stroke-width="2" fill="none"/>' +
      '<rect x="296" y="168" width="5" height="60" fill="#444"/><rect x="282" y="160" width="34" height="22" fill="#f4f4f0" stroke="#444" stroke-width="1.5"/><rect x="292" y="168" width="14" height="10" fill="none" stroke="' + RED + '" stroke-width="1.5"/>' +
      '<ellipse cx="299" cy="185" rx="8" ry="2.5" fill="none" stroke="#e8622c" stroke-width="2"/><path d="M291 185l3 10h10l3 -10" stroke="#ddd" stroke-width="1" fill="none"/>' +
      '<g class="ry-ball"><circle cx="262" cy="230" r="7" fill="#e8622c"/><path d="M255 230h14M262 223v14" stroke="#7a2e10" stroke-width="1"/></g>',
      sky("rys4", "#6fb0de", "#d9ecf5"));
  }

  /* 5. Coolidge Hwy and Oak Park Blvd, Southfield's gold towers behind */
  function rycorner() {
    const tw = (x, w, h) => '<rect x="' + x + '" y="' + (134 - h) + '" width="' + w + '" height="' + h + '" fill="#b8902e"/>' +
      Array.from({ length: Math.floor(h / 6) }, (_, i) => '<path d="M' + x + ' ' + (134 - h + 4 + i * 6) + 'h' + w + '" stroke="#e6c35a" stroke-width="1" opacity=".55"/>').join("") +
      '<rect class="ry-gl" x="' + (x + 2) + '" y="' + (134 - h + 2) + '" width="' + (w - 4) + '" height="3" fill="#ffe7a3" opacity=".6"/>';
    const brick = Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653425" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653425" stroke-width="1"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rys5)"/>' + stars(16) +
      '<g>' + tw(120, 22, 70) + tw(146, 24, 86) + tw(174, 24, 96) + tw(202, 24, 86) + tw(230, 22, 72) + '</g>' +
      '<rect x="0" y="126" width="400" height="98" fill="#7a4030"/>' + brick +
      tag("ROYCE", 18, 182, 52, GOLD, -6) + tag("NICKEL NINE", 40, 214, 24, RED, -4) + tag("BAD", 222, 208, 20, "#f4f2ec", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5a5753"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(254, 98, 140, "Coolidge Hwy") + sign(254, 124, 140, "Oak Park Blvd") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="ry-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="ry-sp"><circle cx="236" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="ry-sp ry-sp2"><circle cx="242" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("rys5", "#0e0f1c", "#6a3a5a"));
  }

  window.SCENES = { rystation: rystation, ryboblo: ryboblo, ryisland: ryisland, ryschool: ryschool, rycorner: rycorner };
})();
