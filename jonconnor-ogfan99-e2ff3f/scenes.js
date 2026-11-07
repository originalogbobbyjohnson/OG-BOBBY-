/* jonconnor scenes (Regions tab: Detroit region / Michigan; Flint, North Side). CSS classes and ids prefixed jc- (the page's own anim-train is kept, used on the bus).
   1 MTA Flint Route 1 North Saginaw bus pulling into the Downtown Transportation Center (615 Harrison St).
   2 The Vehicle City arches over the red-brick Saginaw St downtown (he shot the "Vehicle City" video at the arch): steel arches, chasing bulbs.
   3 Atwood Stadium (Flint's old red-brick ballpark, home of the "Flintstones" athletes; his label partner Mateen Cleaves is one): brick gate, lights, crowd glow.
   4 The Flint River at Riverbank Park downtown ("Fresh Water for Flint", 2016): the river flowing, clean drops falling into a glass.
   5 N Saginaw St and E Pierson Rd on the North Side: green signs, JON CONNOR tagged on the brick, the Mott Foundation Building downtown behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jcflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.jc-flk{animation:jcflick 2.2s infinite}.jc-flk2{animation-delay:.7s}' +
    '@keyframes jcchase{0%,100%{opacity:.25}50%{opacity:1}}.jc-ch{animation:jcchase .8s steps(1) infinite}.jc-ch2{animation-delay:.4s}' +
    '@keyframes jcglow{0%,100%{opacity:.35}50%{opacity:1}}.jc-gl{animation:jcglow 2s ease-in-out infinite}.jc-gl2{animation-delay:.6s}.jc-gl3{animation-delay:1.2s}' +
    '@keyframes jccar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.jc-car{animation:jccar 7s linear infinite}' +
    '@keyframes jcrip{0%,100%{transform:translateX(0)}50%{transform:translateX(14px)}}.jc-rip{animation:jcrip 3s ease-in-out infinite}.jc-rip2{animation-delay:-1.5s}' +
    '@keyframes jcdrop{0%{transform:translateY(0);opacity:0}15%{opacity:1}100%{transform:translateY(26px);opacity:.2}}.jc-drop{animation:jcdrop 1.6s ease-in infinite}.jc-drop2{animation-delay:.55s}.jc-drop3{animation-delay:1.1s}' +
    '@keyframes jcball{0%{transform:translate(0,0)}50%{transform:translate(90px,-60px)}100%{transform:translate(180px,0)}}.jc-ball{animation:jcball 2.6s ease-in-out infinite alternate}' +
    '@keyframes jcspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jc-sp{animation:jcspray 1.4s ease-out infinite}.jc-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const BLUE = "#4da3ff", GOLD = "#f2c14e", RED = "#e85d3a", MTA = "#1f4e79", BRICK = "#8a3b2a";
  const stars = n => Array.from({ length: n }, (_, i) => '<circle cx="' + ((i * 47 + 9) % 400) + '" cy="' + ((i * 31) % 80 + 6) + '" r="1.1" fill="#fff" opacity=".7"/>').join("");
  const bricks = (y0, h, col) => Array.from({ length: Math.floor(h / 8) }, (_, i) => '<path d="M0 ' + (y0 + i * 8) + 'h400" stroke="' + col + '" stroke-width="1"/>').join("") +
    Array.from({ length: Math.floor(h / 8) }, (_, i) => Array.from({ length: 10 }, (_, j) => '<path d="M' + (j * 44 + (i % 2) * 22) + ' ' + (y0 + i * 8) + 'v8" stroke="' + col + '" stroke-width="1"/>').join("")).join("");

  /* 1. MTA Route 1 North Saginaw at the Downtown Transportation Center */
  function jcstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (80 + i * 40) + '" y="122" width="32" height="26" rx="3" fill="#16222e"/>').join("");
    const bus = '<g class="anim-train"><rect x="48" y="110" width="326" height="86" rx="10" fill="#f2f4f6" stroke="#98a0a6" stroke-width="2"/>' + win +
      '<rect x="48" y="156" width="326" height="13" fill="' + MTA + '"/><rect x="48" y="171" width="326" height="3" fill="' + RED + '"/>' +
      '<rect x="52" y="120" width="22" height="54" rx="2" fill="#16222e"/>' +
      '<rect x="78" y="113" width="200" height="7" rx="2" fill="#111"/><text x="178" y="118.6" text-anchor="middle" ' + font + ' font-size="5.4" fill="#ffb347">1 NORTH SAGINAW</text>' +
      '<text x="330" y="188" text-anchor="middle" ' + font + ' font-size="11" fill="' + MTA + '">MTA</text>' +
      '<circle cx="112" cy="198" r="15" fill="#1b1b1b"/><circle cx="112" cy="198" r="6" fill="#9aa1a6"/><circle cx="318" cy="198" r="15" fill="#1b1b1b"/><circle cx="318" cy="198" r="6" fill="#9aa1a6"/>' +
      '<circle class="jc-flk" cx="368" cy="184" r="4" fill="#fff6c2"/></g>';
    const canopy = '<rect x="0" y="64" width="400" height="10" fill="#2c3a48"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (10 + i * 76) + '" y="74" width="5" height="136" fill="#3a4a5a"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<circle class="jc-gl' + (i % 2 ? " jc-gl2" : "") + '" cx="' + (25 + i * 50) + '" cy="78" r="3" fill="#fff3c4"/>').join("");
    const pole = '<rect x="384" y="80" width="4" height="136" fill="#666"/><rect x="366" y="72" width="40" height="40" rx="3" fill="' + MTA + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="386" y="90" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUS</text><circle cx="386" cy="101" r="7" fill="#fff"/><text x="386" y="104.5" text-anchor="middle" ' + font + ' font-size="9" fill="' + MTA + '">1</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#jcs1)"/>' + stars(14) +
      '<g fill="#22283a"><rect x="0" y="40" width="80" height="30"/><rect x="300" y="34" width="100" height="36"/></g>' + canopy +
      '<rect x="0" y="210" width="400" height="50" fill="#3d4148"/><rect x="0" y="208" width="400" height="4" fill="#cfd3d8"/>' +
      bus + pole +
      '<rect x="62" y="14" width="276" height="40" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="30" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">DOWNTOWN TRANSPORTATION CENTER</text>' +
      '<rect x="108" y="37" width="30" height="12" rx="6" fill="' + MTA + '"/><text x="123" y="46" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MTA</text>' +
      '<rect x="142" y="37" width="14" height="12" rx="6" fill="' + MTA + '"/><text x="149" y="46" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">1</text>' +
      '<text x="164" y="46" ' + font + ' font-size="8" fill="#cfd3d8">HARRISON ST · FLINT, MICHIGAN</text>',
      sky("jcs1", "#0b1020", "#2a3550"));
  }

  /* 2. The Vehicle City arches over Saginaw St */
  function jcarch() {
    const arch = (cx, w, top, base, sw, op) => '<path d="M' + (cx - w / 2) + ' ' + base + 'V' + (top + 30) + 'Q' + cx + ' ' + (top - 14) + ' ' + (cx + w / 2) + ' ' + (top + 30) + 'V' + base + '" fill="none" stroke="#1c1f24" stroke-width="' + sw + '" opacity="' + op + '"/>';
    const bulbs = (cx, w, top, n, r) => Array.from({ length: n }, (_, i) => { const t = i / (n - 1), x = cx - w / 2 + w * t; const y = (top + 30) - 4 * (top + 30 - (top - 14)) * t * (1 - t) / 2 - 2; return '<circle class="jc-ch' + (i % 2 ? " jc-ch2" : "") + '" cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + r + '" fill="#fff6d0"/>'; }).join("");
    const letters = "VEHICLE CITY".split("").map((ch, i) => '<text x="' + (128 + i * 13.2) + '" y="103" text-anchor="middle" ' + font + ' font-size="15" fill="#fff6d0" stroke="#1c1f24" stroke-width="3" paint-order="stroke">' + ch + '</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jcs2)"/>' + stars(12) +
      '<g fill="#2a2430"><rect x="0" y="70" width="70" height="110"/><rect x="72" y="90" width="50" height="90"/><rect x="278" y="84" width="56" height="96"/><rect x="336" y="64" width="64" height="116"/></g>' +
      Array.from({ length: 14 }, (_, i) => '<rect class="jc-gl' + (i % 3 ? " jc-gl3" : "") + '" x="' + ((i < 7 ? 8 : 286) + (i % 7) * 15) + '" y="' + (100 + (i % 2) * 22) + '" width="8" height="9" fill="' + GOLD + '" opacity=".6"/>').join("") +
      arch(200, 120, 112, 186, 4, .55) + bulbs(200, 120, 112, 11, 1.8) +
      arch(200, 200, 74, 196, 7, 1) + bulbs(200, 200, 74, 17, 2.6) +
      '<path d="M160 86V82M240 86V82" stroke="#1c1f24" stroke-width="3"/><rect x="118" y="86" width="164" height="23" rx="2" fill="#1c1f24"/>' + letters +
      '<path d="M0 260L150 186H250L400 260Z" fill="' + BRICK + '"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (150 - i * 18) + ' ' + (186 + i * 9) + 'H' + (250 + i * 18) + '" stroke="#6e2c1f" stroke-width="1.2"/>').join("") +
      '<path d="M200 186V236" stroke="#e6d6a0" stroke-width="2" stroke-dasharray="8 8"/>' +
      '<g class="jc-car"><rect x="0" y="222" width="54" height="16" rx="5" fill="' + BLUE + '"/><rect x="10" y="214" width="30" height="10" rx="3" fill="#9cc8ff"/><circle cx="12" cy="240" r="5" fill="#111"/><circle cx="42" cy="240" r="5" fill="#111"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#f7e6c0" letter-spacing="2">SAGINAW ST · DOWNTOWN FLINT</text>',
      sky("jcs2", "#0a0d1e", "#3b2b4a"));
  }

  /* 3. Atwood Stadium */
  function jcatwood() {
    const light = x => '<rect x="' + (x - 2) + '" y="30" width="4" height="90" fill="#555"/><rect x="' + (x - 16) + '" y="18" width="32" height="14" rx="2" fill="#2a2a2a"/>' +
      Array.from({ length: 4 }, (_, i) => '<circle class="jc-gl' + (i % 2 ? " jc-gl2" : "") + '" cx="' + (x - 11 + i * 7.3) + '" cy="25" r="2.6" fill="#fffbe0"/>').join("");
    const gate = '<rect x="140" y="118" width="120" height="86" fill="#7c2f22"/>' +
      '<path d="M170 204V160Q200 130 230 160V204Z" fill="#1a1414"/><path d="M170 160Q200 130 230 160" fill="none" stroke="#d9c7a0" stroke-width="4"/>' +
      '<rect x="146" y="122" width="108" height="18" fill="#d9c7a0"/><text x="200" y="135.5" text-anchor="middle" ' + font + ' font-size="9.5" fill="#5a1f16" letter-spacing=".5">ATWOOD STADIUM</text>' +
      '<rect x="134" y="112" width="132" height="8" fill="#d9c7a0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jcs3)"/>' + stars(10) +
      '<ellipse cx="200" cy="120" rx="200" ry="30" fill="#fffbe0" opacity=".06"/>' + light(40) + light(360) +
      '<rect x="0" y="124" width="400" height="80" fill="' + BRICK + '"/>' + bricks(124, 80, "#6e2c1f") +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (12 + i * (i < 3 ? 40 : 40) + (i < 3 ? 0 : 150)) + ' 190V160Q' + (27 + i * 40 + (i < 3 ? 0 : 150)) + ' 146 ' + (42 + i * 40 + (i < 3 ? 0 : 150)) + ' 160V190Z" fill="#1a1414"/>').join("") +
      gate +
      '<g class="jc-ball"><ellipse cx="70" cy="110" rx="9" ry="5.5" fill="#8a4a22" transform="rotate(-25 70 110)"/><path d="M66 111l8 -3" stroke="#fff" stroke-width="1.2"/></g>' +
      '<rect x="0" y="204" width="400" height="56" fill="#3d4148"/><rect x="0" y="202" width="400" height="4" fill="#cfd3d8"/>' +
      '<text x="200" y="240" text-anchor="middle" ' + font + ' font-size="10" fill="#f7e6c0" letter-spacing="2">FLINTSTONES · UNIVERSITY AVE</text>',
      sky("jcs3", "#071022", "#22304a"));
  }

  /* 4. The Flint River at Riverbank Park */
  function jcriver() {
    const waves = (y, cls, col) => '<g class="' + cls + '">' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (-20 + i * 50) + ' ' + y + 'q12 -6 25 0t25 0" fill="none" stroke="' + col + '" stroke-width="2"/>').join("") + '</g>';
    const glass = '<path d="M300 214L304 252H330L334 214Z" fill="#cfe8ff" opacity=".35" stroke="#e8f4ff" stroke-width="2"/><path d="M302 230L305 250H329L332 230Z" fill="' + BLUE + '" opacity=".75"/>';
    const drops = [0, 1, 2].map(i => '<path class="jc-drop' + (i ? " jc-drop" + (i + 1) : "") + '" d="M' + (314 + i * 3) + ' 194q-4 6 0 9q4 -3 0 -9z" fill="#9fd4ff"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jcs4)"/>' +
      '<circle cx="70" cy="50" r="22" fill="#ffe6a8" opacity=".9"/>' +
      '<g fill="#253a2e"><ellipse cx="40" cy="128" rx="50" ry="26"/><ellipse cx="120" cy="122" rx="40" ry="22"/><ellipse cx="380" cy="126" rx="44" ry="24"/></g>' +
      '<g fill="#2d3340"><rect x="170" y="70" width="30" height="62"/><rect x="204" y="86" width="40" height="46"/><rect x="250" y="78" width="26" height="54"/></g>' +
      '<rect x="0" y="130" width="400" height="10" fill="#6b6f60"/>' +
      '<path d="M0 140H400V200H0Z" fill="#2f6f9a"/>' + waves(152, "jc-rip", "#9fd4ff") + waves(170, "jc-rip jc-rip2", "#7fc0f0") + waves(188, "jc-rip", "#9fd4ff") +
      '<path d="M120 140V128H280V140" fill="none" stroke="#c9c2b0" stroke-width="6"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M' + (130 + i * 35) + ' 140q17 -12 35 0" fill="none" stroke="#c9c2b0" stroke-width="3"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#3b4a38"/><path d="M0 214H400" stroke="#56684f" stroke-width="2"/>' +
      '<rect x="352" y="182" width="12" height="72" fill="#8a96a2"/><rect x="306" y="180" width="58" height="10" rx="3" fill="#b8c2cc"/><rect x="306" y="188" width="14" height="6" fill="#b8c2cc"/>' + drops + glass +
      '<rect x="20" y="222" width="250" height="24" rx="3" fill="' + MTA + '" stroke="#fff" stroke-width="1.5"/><text x="145" y="238.5" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="1.5">FRESH WATER FOR FLINT</text>',
      sky("jcs4", "#1a2a48", "#7aa0c8"));
  }

  /* 5. N Saginaw St and E Pierson Rd, Mott Foundation Building downtown */
  function jccorner() {
    const mott = '<g fill="#d8cdb4"><rect x="176" y="40" width="50" height="94"/><rect x="186" y="28" width="30" height="14"/><rect x="198" y="16" width="6" height="14"/></g>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (182 + i * 9.5) + ' 44v88" stroke="#b6aa8e" stroke-width="1.2"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<rect class="jc-gl' + (i % 3 ? " jc-gl2" : "") + '" x="' + (180 + (i % 4) * 11) + '" y="' + (52 + Math.floor(i / 4) * 30) + '" width="5" height="6" fill="' + GOLD + '"/>').join("") +
      '<circle class="jc-flk" cx="201" cy="14" r="4" fill="#ff3b3b"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jcs5)"/>' + stars(16) +
      '<g fill="#2a2d3a"><rect x="96" y="96" width="42" height="38"/><rect x="142" y="82" width="30" height="52"/><rect x="232" y="78" width="34" height="56"/><rect x="270" y="98" width="46" height="36"/></g>' + mott +
      '<rect x="0" y="126" width="400" height="98" fill="#7a4030"/>' + bricks(126, 98, "#653425") +
      tag("JON", 18, 176, 44, BLUE, -6) + tag("CONNOR", 70, 210, 34, GOLD, -4) + tag("ALL VARSITY", 200, 214, 14, RED, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5a5753"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(262, 98, 136, "N Saginaw St") + sign(262, 124, 136, "E Pierson Rd") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="jc-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="jc-sp"><circle cx="238" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="jc-sp jc-sp2"><circle cx="244" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("jcs5", "#0b1020", "#3a5a9a"));
  }

  window.SCENES = { jcstation: jcstation, jcarch: jcarch, jcatwood: jcatwood, jcriver: jcriver, jccorner: jccorner };
})();
