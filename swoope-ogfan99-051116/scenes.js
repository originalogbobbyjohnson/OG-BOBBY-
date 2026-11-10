/* swoope scenes (Regions tab: St. Louis + Ohio; Lawrence Allen Swoope II, born and raised in Akron, Ohio - "Ak-Town", the 330; his mother pastored Arlington Church of God; Collision Records 2009-16, then independent).
   CSS classes prefixed sw- (the page's own anim-train is kept).
   1 METRO RTA Route 2 Arlington pulling into the Robert K. Pfaff Transit Center on S Broadway, downtown Akron.
   2 A brick church on S Arlington St on a Sunday morning, piano keys going ("ebony and ivories", "whole choir boy from the hood").
   3 The Akron Civic Theatre on S Main St: the marquee bulbs chasing at night.
   4 The old round grain silos downtown with the airship drifting over (no lettering on it).
   5 S Arlington St and E Exchange St: green signs, SWOOPE, AK-TOWN and 330 tagged, the airship over downtown behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes swtw{0%,100%{opacity:.25}50%{opacity:1}}.sw-tw{animation:swtw 1.8s ease-in-out infinite}.sw-tw2{animation-delay:-.9s}' +
    '@keyframes swcloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.sw-cl{animation:swcloud 26s linear infinite}.sw-cl2{animation-delay:-13s}' +
    '@keyframes swship{0%,100%{transform:translateX(-30px)}50%{transform:translateX(30px)}}.sw-ship{animation:swship 14s ease-in-out infinite}' +
    '@keyframes swbulb{0%,100%{opacity:1}50%{opacity:.25}}.sw-b{animation:swbulb .8s steps(1) infinite}.sw-b2{animation-delay:-.4s}' +
    '@keyframes swnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(24px,-70px);opacity:0}}.sw-note{animation:swnote 3s linear infinite}.sw-note2{animation-delay:-1.5s}' +
    '@keyframes swkey{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}.sw-k{animation:swkey .6s ease-in-out infinite}.sw-k2{animation-delay:-.3s}' +
    '@keyframes swspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sw-sp{animation:swspray 1.4s ease-out infinite}.sw-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const SUN = "#ffc93c", ORANGE = "#ff7a2f", SKY = "#5ec8f2", MBLUE = "#00539b", MGREEN = "#8dc63f";
  const stars = (n, h) => Array.from({ length: n }, (_, i) => '<circle class="sw-tw' + (i % 2 ? ' sw-tw2' : '') + '" cx="' + ((i * 53) % 400) + '" cy="' + ((i * 31) % h) + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff"/>').join("");
  const cloud = (x, y, s, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="9"/><ellipse cx="-12" cy="-4" rx="12" ry="7"/></g></g>';
  /* plain gray airship, no lettering */
  const ship = (x, y, s) => '<g class="sw-ship"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><ellipse cx="0" cy="0" rx="46" ry="15" fill="#c9ced6" stroke="#8a919c" stroke-width="1.5"/>' +
    '<path d="M-40 -4l-14 -10v28l14 -10z" fill="#aab1bb"/><path d="M-40 0h-14" stroke="#8a919c"/><rect x="-8" y="13" width="18" height="7" rx="3" fill="#33404f"/><path d="M-30 0h60" stroke="#0e2d5c" stroke-width="3" opacity=".7"/></g></g>';
  /* downtown Akron towers (generic) */
  const towers = (base, fill) => '<g fill="' + fill + '"><rect x="20" y="' + (base - 50) + '" width="36" height="50"/><rect x="62" y="' + (base - 76) + '" width="26" height="76"/><path d="M62 ' + (base - 76) + 'l13 -10l13 10z"/>' +
    '<rect x="96" y="' + (base - 40) + '" width="44" height="40"/><rect x="250" y="' + (base - 66) + '" width="30" height="66"/><rect x="288" y="' + (base - 92) + '" width="34" height="92"/><rect x="330" y="' + (base - 48) + '" width="50" height="48"/></g>';

  /* 1. METRO Route 2 Arlington at the transit center */
  function swbus() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (64 + i * 44) + '" y="132" width="34" height="22" rx="3" fill="#1d2a36"/>').join("");
    const bus = '<g class="anim-train"><rect x="50" y="120" width="270" height="68" rx="10" fill="#f4f6f8" stroke="#7d8790" stroke-width="2"/>' + win +
      '<path d="M50 160h270v10h-270z" fill="' + MBLUE + '"/><path d="M50 170h270v4h-270z" fill="' + MGREEN + '"/>' +
      '<rect x="292" y="128" width="26" height="40" rx="3" fill="#2a3b4c"/><rect x="60" y="123" width="100" height="7" rx="2" fill="#111"/><text x="110" y="129" text-anchor="middle" ' + font + ' font-size="5.5" fill="#ffb347">2 ARLINGTON</text>' +
      '<circle cx="96" cy="190" r="11" fill="#1a1a1a"/><circle cx="96" cy="190" r="4" fill="#888"/><circle cx="270" cy="190" r="11" fill="#1a1a1a"/><circle cx="270" cy="190" r="4" fill="#888"/>' +
      '<circle cx="316" cy="178" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sws1)"/>' + cloud(70, 34, 1, "sw-cl") + cloud(270, 50, .8, "sw-cl sw-cl2") + towers(118, "#8fa3b8") +
      /* the transit center: low brick building with a long flat canopy */
      '<rect x="0" y="86" width="400" height="30" fill="#9a5b44"/><rect x="0" y="80" width="400" height="8" fill="#e9e4da"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (10 + i * 40) + '" y="92" width="24" height="16" fill="#2b3a4a"/>').join("") +
      '<rect x="0" y="112" width="400" height="6" fill="#d8d3c8"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (24 + i * 72) + '" y="116" width="4" height="80" fill="#9aa4ad"/>').join("") +
      '<rect x="0" y="196" width="400" height="64" fill="#4a4c52"/><path d="M0 230h400" stroke="#e8d36a" stroke-width="2" stroke-dasharray="16 12"/>' + bus +
      '<rect x="0" y="194" width="400" height="5" fill="#b8b2a6"/>' +
      '<rect x="22" y="208" width="356" height="36" rx="3" fill="#111"/><text x="34" y="231" ' + font + ' font-size="14" fill="#fff">Robert K. Pfaff Transit Center</text>' + badge(300, 225, "2", MBLUE) + badge(330, 225, "1", MGREEN, true),
      sky("sws1", "#7fc4ee", "#e2f2fb"));
  }

  /* 2. Church on S Arlington St, Sunday morning */
  function swchurch() {
    const keys = Array.from({ length: 14 }, (_, i) => '<rect class="' + (i % 4 === 1 ? "sw-k" : i % 4 === 3 ? "sw-k sw-k2" : "") + '" x="' + (212 + i * 12) + '" y="206" width="11" height="34" fill="#f8f6ef" stroke="#555" stroke-width=".8"/>').join("") +
      [0, 1, 3, 4, 5, 7, 8, 10, 11, 12].map(i => '<rect x="' + (220 + i * 12) + '" y="206" width="7" height="20" fill="#111"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sws2)"/>' + cloud(60, 30, 1, "sw-cl") + cloud(300, 44, .9, "sw-cl sw-cl2") +
      '<rect x="0" y="176" width="400" height="20" fill="#6aa54a"/>' +
      /* brick church with steeple */
      '<rect x="40" y="96" width="170" height="100" fill="#a4523a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M40 ' + (104 + i * 8) + 'h170" stroke="#8a4230" stroke-width="1"/>').join("") +
      '<path d="M34 98 L125 50 L216 98z" fill="#5a3a30"/><rect x="108" y="30" width="34" height="44" fill="#e9e1d2"/><path d="M104 32 L125 2 L146 32z" fill="#5a3a30"/>' +
      '<path d="M125 6v20M118 14h14" stroke="' + SUN + '" stroke-width="3"/>' +
      '<path d="M108 196v-48q17 -22 34 0v48z" fill="#3a2418"/><path d="M60 170v-34q12 -16 24 0v34z" fill="#3c6bb0"/><path d="M166 170v-34q12 -16 24 0v34z" fill="#3c6bb0"/>' +
      '<path d="M72 120v50M60 150h24M178 120v50M166 150h24" stroke="' + SUN + '" stroke-width="1.5" opacity=".7"/>' +
      '<circle cx="125" cy="118" r="12" fill="#e94f6a" stroke="' + SUN + '" stroke-width="2"/>' +
      /* piano on the lawn side */
      '<rect x="200" y="186" width="190" height="60" rx="4" fill="#1a1a1a"/>' + keys +
      '<g class="sw-note"><text x="260" y="180" font-size="18" fill="' + SUN + '">&#9834;</text></g><g class="sw-note sw-note2"><text x="330" y="176" font-size="16" fill="' + ORANGE + '">&#9835;</text></g>' +
      '<rect x="0" y="196" width="200" height="64" fill="#8a8580"/>',
      sky("sws2", "#8fd0f4", "#fff2cf"));
  }

  /* 3. Akron Civic Theatre marquee */
  function swcivic() {
    const bulbs = Array.from({ length: 26 }, (_, i) => '<circle class="sw-b' + (i % 2 ? ' sw-b2' : '') + '" cx="' + (92 + i * 8.6) + '" cy="96" r="2.6" fill="#fff4b0"/><circle class="sw-b' + (i % 2 ? '' : ' sw-b2') + '" cx="' + (92 + i * 8.6) + '" cy="146" r="2.6" fill="#fff4b0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sws3)"/>' + stars(16, 60) +
      /* facade */
      '<rect x="60" y="20" width="280" height="200" fill="#cbb48a"/><path d="M60 20h280v10h-280z" fill="#a8905f"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (80 + i * 54) + ' 60v-14q14 -18 28 0v14z" fill="#3b2a50"/>').join("") +
      '<path d="M200 34l8 8l-8 8l-8 -8z" fill="#c04a3a"/>' +
      /* marquee */
      '<rect x="84" y="90" width="232" height="62" rx="3" fill="#1b1b24" stroke="#c9a24a" stroke-width="3"/>' + bulbs +
      '<text x="200" y="130" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="30" fill="' + SUN + '" letter-spacing="4">CIVIC</text>' +
      '<rect x="120" y="160" width="160" height="60" fill="#2a1e1a"/><rect x="128" y="168" width="68" height="52" fill="#7a4a2a"/><rect x="204" y="168" width="68" height="52" fill="#7a4a2a"/>' +
      '<rect x="128" y="168" width="68" height="20" fill="#ffd27a" opacity=".5"/><rect x="204" y="168" width="68" height="20" fill="#ffd27a" opacity=".5"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#4a4c52"/><rect x="0" y="218" width="400" height="4" fill="#bdb8ae"/>' +
      '<rect x="30" y="150" width="4" height="70" fill="#222"/><circle class="sw-tw" cx="32" cy="148" r="7" fill="#ffe9a8"/><rect x="366" y="150" width="4" height="70" fill="#222"/><circle class="sw-tw sw-tw2" cx="368" cy="148" r="7" fill="#ffe9a8"/>',
      sky("sws3", "#141633", "#4a2f5a"));
  }

  /* 4. The round grain silos with the airship over them */
  function swsilos() {
    const silo = (x) => '<g><rect x="' + x + '" y="70" width="30" height="130" fill="url(#swsg)"/><ellipse cx="' + (x + 15) + '" cy="70" rx="15" ry="5" fill="#cfc4ad"/>' +
      [0, 1, 2, 3].map(k => '<rect x="' + (x + 11) + '" y="' + (86 + k * 28) + '" width="8" height="12" rx="2" fill="#3b4a5e"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sws4)"/>' + cloud(90, 36, 1, "sw-cl") + cloud(320, 28, .8, "sw-cl sw-cl2") + ship(120, 40, 1.1) +
      Array.from({ length: 8 }, (_, i) => silo(62 + i * 34)).join("") +
      '<rect x="40" y="150" width="20" height="50" fill="#9a5b44"/><rect x="336" y="140" width="34" height="60" fill="#9a5b44"/>' +
      '<rect x="0" y="198" width="400" height="62" fill="#5b5c60"/><path d="M0 230h400" stroke="#e8d36a" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<rect x="0" y="196" width="400" height="4" fill="#bdb8ae"/>',
      sky("sws4", "#5ec8f2", "#ffe7b8") + '<linearGradient id="swsg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#b8ac94"/><stop offset=".4" stop-color="#f0e8d8"/><stop offset="1" stop-color="#a99d86"/></linearGradient>');
  }

  /* 5. S Arlington St and E Exchange St */
  function swcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sws5)"/>' + towers(132, "#2a3155") + ship(200, 44, .9) +
      '<rect x="0" y="122" width="400" height="100" fill="#6e4636"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (130 + i * 8) + 'h400" stroke="#5b3a2c" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (122 + i * 8) + 'v8" stroke="#5b3a2c" stroke-width="1"/>').join("")).join("") +
      tag("SWOOPE", 20, 190, 50, SUN, -6) + tag("AK-TOWN", 30, 214, 22, SKY, -3) + tag("330", 206, 206, 30, ORANGE, -4) +
      '<rect x="0" y="222" width="400" height="38" fill="#5d5a55"/><rect x="0" y="220" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="94" width="6" height="128" fill="#2f2f2f"/>' + sign(262, 96, 136, "S Arlington St") + sign(268, 122, 126, "E Exchange St") +
      '<rect x="8" y="108" width="4" height="114" fill="#222"/><circle class="sw-tw" cx="10" cy="106" r="7" fill="#ffe9a8"/>' +
      '<g class="sw-sp"><circle cx="250" cy="170" r="3" fill="' + SUN + '" opacity=".7"/></g><g class="sw-sp sw-sp2"><circle cx="256" cy="164" r="2" fill="' + SUN + '" opacity=".6"/></g>',
      sky("sws5", "#ffb25a", "#ffe0a8"));
  }

  window.SCENES = { swbus: swbus, swchurch: swchurch, swcivic: swcivic, swsilos: swsilos, swcorner: swcorner };
})();
