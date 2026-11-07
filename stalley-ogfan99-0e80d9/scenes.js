/* stalley scenes (Regions tab: St. Louis + Ohio; Massillon, Ohio). CSS classes and ids prefixed sy- (the page's own anim-train is kept, used on the bus).
   1 SARTA Route 102 pulling up to the stop at Lincoln Way E and 5th St in Massillon (the Canton to Massillon line).
   2 Paul Brown Tiger Stadium: brick stands, orange and black, the light towers, a football spiraling, Tiger Town.
   3 The Ohio & Erie Canal towpath at Massillon: the old canal, a wooden lock gate, a bike rolling down the towpath.
   4 The Lincoln Highway (Lincoln Way runs on it) at night: a candy-painted Chevy, trunk open, bass rings ("She Hates the Bass", "Intelligent Trunk Music"), the red-white-blue L marker.
   5 Lincoln Way E and Erie St S downtown: green signs, STALLEY tagged on the brick, the Lincoln Theatre's lit sign behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes syflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.sy-flk{animation:syflick 2.2s infinite}.sy-flk2{animation-delay:.7s}' +
    '@keyframes syball{0%{transform:translate(-120px,40px) rotate(0)}50%{transform:translate(0,-30px) rotate(180deg)}100%{transform:translate(120px,40px) rotate(360deg)}}.sy-ball{transform-box:fill-box;transform-origin:50% 50%;animation:syball 3s ease-in-out infinite}' +
    '@keyframes sywave{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.sy-cr{animation:sywave .7s ease-in-out infinite}.sy-cr2{animation-delay:-.35s}' +
    '@keyframes sybike{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.sy-bike{animation:sybike 10s linear infinite}' +
    '@keyframes syrip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.sy-rip{animation:syrip 3s ease-in-out infinite}.sy-rip2{animation-delay:-1.5s}' +
    '@keyframes syring{0%{transform:scale(.3);opacity:.9}100%{transform:scale(1.6);opacity:0}}.sy-ring{transform-box:fill-box;transform-origin:50% 50%;animation:syring 1.2s ease-out infinite}.sy-ring2{animation-delay:.4s}.sy-ring3{animation-delay:.8s}' +
    '@keyframes sybounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.sy-car{animation:sybounce .6s ease-in-out infinite}' +
    '@keyframes syspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sy-sp{animation:syspray 1.4s ease-out infinite}.sy-sp2{animation-delay:.45s}' +
    '@keyframes sychase{0%,100%{opacity:.25}50%{opacity:1}}.sy-ch{animation:sychase .8s steps(1) infinite}.sy-ch2{animation-delay:.4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const ORANGE = "#ff7a1a", WOOD = "#d9a441", CHROME = "#5cc8ff", BUS = "#1f4e79";

  /* 1. SARTA 102 at Lincoln Way E and 5th St */
  function systation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (70 + i * 42) + '" y="120" width="34" height="26" rx="3" fill="#24323e"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="108" width="330" height="88" rx="10" fill="#f3f4f2" stroke="#9aa1a6" stroke-width="2"/>' + win +
      '<rect x="40" y="156" width="330" height="10" fill="' + BUS + '"/><rect x="40" y="168" width="330" height="4" fill="#3aa655"/>' +
      '<rect x="44" y="118" width="20" height="54" rx="2" fill="#24323e"/><rect x="330" y="114" width="36" height="12" rx="2" fill="#111"/><text x="348" y="123.5" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">102</text>' +
      '<rect x="64" y="112" width="200" height="6" rx="2" fill="#111"/><text x="164" y="117.4" text-anchor="middle" ' + font + ' font-size="5" fill="#ffb347">102 MASSILLON VIA LINCOLN WAY</text>' +
      '<circle cx="104" cy="198" r="15" fill="#1b1b1b"/><circle cx="104" cy="198" r="6" fill="#9aa1a6"/><circle cx="314" cy="198" r="15" fill="#1b1b1b"/><circle cx="314" cy="198" r="6" fill="#9aa1a6"/>' +
      '<circle class="sy-flk" cx="364" cy="184" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sys1)"/>' +
      '<g fill="#8d4a36"><rect x="0" y="40" width="90" height="80"/><rect x="96" y="54" width="70" height="66"/><rect x="250" y="46" width="80" height="74"/><rect x="334" y="36" width="66" height="84"/></g>' +
      '<g fill="#f6d89a" opacity=".85"><rect x="14" y="54" width="14" height="16"/><rect x="50" y="54" width="14" height="16"/><rect x="266" y="60" width="14" height="16"/><rect x="300" y="60" width="14" height="16"/><rect x="350" y="52" width="14" height="16"/></g>' +
      '<rect x="0" y="196" width="400" height="10" fill="#cfcac0"/><rect x="0" y="206" width="400" height="54" fill="#55565b"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="22 14"/>' +
      '<rect x="18" y="40" width="5" height="160" fill="#444"/><rect x="2" y="36" width="124" height="56" rx="3" fill="#fff" stroke="' + BUS + '" stroke-width="3"/>' +
      '<rect x="10" y="43" width="40" height="22" rx="4" fill="' + BUS + '"/><text x="30" y="59" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">102</text>' +
      '<text x="58" y="57" ' + font + ' font-size="9" fill="#1b1b1b">BUS STOP</text>' +
      '<text x="10" y="77" ' + font + ' font-size="9.5" fill="#1b1b1b">Lincoln Way E</text><text x="10" y="88" ' + font + ' font-size="9.5" fill="#1b1b1b">&amp; 5th St</text>' +
      bus,
      sky("sys1", "#ffb36b", "#ffe2b8"));
  }

  /* 2. Paul Brown Tiger Stadium */
  function systadium() {
    const crowd = Array.from({ length: 40 }, (_, i) => '<circle class="sy-cr' + (i % 2 ? " sy-cr2" : "") + '" cx="' + (6 + i * 10) + '" cy="' + (98 + (i % 3) * 9) + '" r="4" fill="' + (i % 2 ? ORANGE : "#111") + '"/>').join("");
    const light = x => '<rect x="' + (x - 2) + '" y="10" width="4" height="70" fill="#4a4a4a"/><rect x="' + (x - 16) + '" y="4" width="32" height="14" fill="#2b2b2b"/>' +
      Array.from({ length: 4 }, (_, i) => '<circle class="sy-flk" cx="' + (x - 11 + i * 7.3) + '" cy="11" r="2.6" fill="#fff8d0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sys2)"/>' + light(36) + light(364) +
      '<rect x="140" y="20" width="120" height="44" rx="3" fill="#111" stroke="' + ORANGE + '" stroke-width="3"/><text x="200" y="40" text-anchor="middle" ' + font + ' font-size="14" fill="' + ORANGE + '" letter-spacing="3">TIGERS</text><text x="200" y="57" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">TIGER TOWN</text>' +
      '<rect x="196" y="64" width="8" height="16" fill="#333"/>' +
      '<rect x="0" y="80" width="400" height="56" fill="#8a4a32"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (86 + i * 9) + 'h400" stroke="#6e3a27" stroke-width="2"/>').join("") + crowd +
      '<rect x="0" y="136" width="400" height="8" fill="#111"/><rect x="0" y="140" width="400" height="3" fill="' + ORANGE + '"/>' +
      '<rect x="0" y="144" width="400" height="116" fill="#3d8b3d"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 144l' + ((i - 4) * 18) + ' 116" stroke="#fff" stroke-width="2" opacity=".85"/>').join("") +
      '<g class="sy-ball"><ellipse cx="200" cy="200" rx="12" ry="7" fill="#7a3e1d" stroke="#3b1c0b" stroke-width="1.5"/><path d="M194 200h12M197 198v4M200 198v4M203 198v4" stroke="#fff" stroke-width="1"/></g>',
      sky("sys2", "#0f1325", "#2c2a4a"));
  }

  /* 3. Ohio & Erie Canal towpath */
  function sycanal() {
    const bike = '<g class="sy-bike"><circle cx="20" cy="150" r="10" fill="none" stroke="#222" stroke-width="2.5"/><circle cx="52" cy="150" r="10" fill="none" stroke="#222" stroke-width="2.5"/><path d="M20 150l14 -16h12l6 16M34 134l-4 -6h-6M46 134l2 -6h6M32 150l14 -16" stroke="' + ORANGE + '" stroke-width="3" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sys3)"/>' +
      '<g fill="#3f7a35"><circle cx="30" cy="90" r="34"/><circle cx="90" cy="80" r="40"/><circle cx="170" cy="92" r="32"/><circle cx="300" cy="84" r="38"/><circle cx="370" cy="94" r="32"/></g>' +
      '<g fill="#5c3a22"><rect x="86" y="112" width="8" height="30"/><rect x="296" y="114" width="8" height="28"/></g>' +
      '<rect x="0" y="136" width="400" height="26" fill="#c8b48a"/>' + bike +
      '<rect x="0" y="162" width="400" height="10" fill="#8a7a62"/>' +
      '<rect x="0" y="172" width="400" height="88" fill="#4f7a86"/>' +
      '<g class="sy-rip"><path d="M14 190h50M140 206h70M280 190h60M40 236h80M230 244h100" stroke="#a9d1da" stroke-width="2" stroke-linecap="round" opacity=".7"/></g>' +
      '<g class="sy-rip sy-rip2"><path d="M90 220h40M300 222h50M170 250h50" stroke="#cde7ec" stroke-width="2" stroke-linecap="round" opacity=".6"/></g>' +
      '<g><rect x="250" y="160" width="60" height="100" fill="#6b4a2c"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M250 ' + (170 + i * 15) + 'h60" stroke="#4e3420" stroke-width="2"/>').join("") +
      '<path d="M250 160l60 100M310 160l-60 100" stroke="#4e3420" stroke-width="3"/><rect x="306" y="150" width="70" height="8" fill="#5a3d24" transform="rotate(-8 306 150)"/></g>' +
      '<rect x="20" y="178" width="132" height="22" rx="3" fill="#5a3d24"/><text x="86" y="193" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e3c3">OHIO &amp; ERIE CANAL</text>',
      sky("sys3", "#9ccbf0", "#f1f6ea"));
  }

  /* 4. Lincoln Highway night cruise */
  function sylincoln() {
    const marker = '<g><rect x="306" y="96" width="8" height="110" fill="#d8d8d8"/><rect x="292" y="70" width="36" height="52" fill="#fff" stroke="#999" stroke-width="1.5"/>' +
      '<rect x="292" y="70" width="36" height="12" fill="#c8102e"/><rect x="292" y="110" width="36" height="12" fill="' + BUS + '"/>' +
      '<text x="310" y="106" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="22" fill="' + BUS + '">L</text></g>';
    const car = '<g class="sy-car"><path d="M60 196q4 -22 30 -24l20 -18h90l26 18h50q20 2 22 24v6H60z" fill="' + ORANGE + '" stroke="#7a3510" stroke-width="2"/>' +
      '<path d="M116 158h40v16h-58z M162 158h36l20 16h-56z" fill="#26323c"/>' +
      '<path d="M226 172l50 -26" stroke="#7a3510" stroke-width="3"/><rect x="232" y="174" width="50" height="22" fill="#1d1d1d"/>' +
      '<circle cx="246" cy="185" r="8" fill="#333" stroke="' + CHROME + '" stroke-width="2"/><circle cx="268" cy="185" r="8" fill="#333" stroke="' + CHROME + '" stroke-width="2"/>' +
      '<path d="M64 186h200" stroke="#ffd2a8" stroke-width="2" opacity=".6"/>' +
      '<circle cx="100" cy="204" r="16" fill="#151515"/><circle cx="100" cy="204" r="9" fill="' + WOOD + '"/><circle cx="100" cy="204" r="3" fill="#eee"/>' +
      '<circle cx="262" cy="204" r="16" fill="#151515"/><circle cx="262" cy="204" r="9" fill="' + WOOD + '"/><circle cx="262" cy="204" r="3" fill="#eee"/>' +
      '<circle class="sy-flk" cx="304" cy="190" r="4" fill="#ff3b3b"/></g>';
    const rings = [1, 2, 3].map(i => '<circle class="sy-ring sy-ring' + i + '" cx="257" cy="185" r="22" fill="none" stroke="' + CHROME + '" stroke-width="2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sys4)"/>' +
      Array.from({ length: 30 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + ((i * 17) % 80) + '" r="1.1" fill="#fff" opacity=".7"/>').join("") +
      '<g fill="#1e1a2c"><rect x="0" y="120" width="60" height="44"/><rect x="66" y="132" width="40" height="32"/><rect x="340" y="124" width="60" height="40"/></g>' +
      '<rect x="0" y="164" width="400" height="96" fill="#2c2c33"/><path d="M0 238h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="26 16"/>' +
      marker + rings + car +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e3c3" letter-spacing="2">LINCOLN HIGHWAY · LINCOLN WAY</text>',
      sky("sys4", "#120d24", "#4a2d4f"));
  }

  /* 5. Lincoln Way E and Erie St S */
  function sycorner() {
    const blade = '<g><rect x="168" y="12" width="34" height="114" rx="3" fill="#1b1424" stroke="' + WOOD + '" stroke-width="3"/>' +
      "LINCOLN".split("").map((ch, i) => '<text class="sy-ch' + (i % 2 ? " sy-ch2" : "") + '" x="185" y="' + (28 + i * 13.5) + '" text-anchor="middle" ' + font + ' font-size="12.5" fill="' + ORANGE + '">' + ch + '</text>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sys5)"/>' +
      '<g fill="#3a2a30"><rect x="0" y="94" width="120" height="40"/><rect x="230" y="84" width="90" height="50"/><rect x="326" y="98" width="74" height="36"/></g>' +
      '<rect x="120" y="70" width="110" height="64" fill="#4a3530"/>' + blade +
      '<rect x="0" y="126" width="400" height="98" fill="#8a4630"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#743a27" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#743a27" stroke-width="1"/>').join("")).join("") +
      tag("STALLEY", 18, 192, 50, ORANGE, -6) + tag("BLUE COLLAR GANG", 112, 216, 16, CHROME, -4) + tag("BCG", 28, 216, 18, WOOD, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5a5753"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(244, 98, 152, "Lincoln Way E") + sign(276, 124, 96, "Erie St S") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="sy-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="sy-sp"><circle cx="232" cy="168" r="3" fill="' + ORANGE + '" opacity=".7"/></g><g class="sy-sp sy-sp2"><circle cx="238" cy="162" r="2" fill="' + ORANGE + '" opacity=".6"/></g>',
      sky("sys5", "#1c2244", "#e88a5a"));
  }

  window.SCENES = { systation: systation, systadium: systadium, sycanal: sycanal, sylincoln: sylincoln, sycorner: sycorner };
})();
