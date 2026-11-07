/* akuanaru scenes (Regions tab: Boston + New England; New Haven, CT, where Akua Naru grew up - "a very Black city"). CSS classes prefixed akn- (the page's own anim-train is kept on the bus).
   1 CTtransit Route 238 Dixwell Avenue at Dixwell Ave & Charles St, by the Q-House: a white-and-blue CTtransit bus pulling in, black stop sign.
   2 The Dixwell Q-House gym (Dixwell Community House, 197 Dixwell Ave): hardwood court, glass and brick walls, a ball dropping through the net.
   3 Harkness Tower at Yale: the pale limestone Gothic tower with its pinnacles and carillon, bells swinging.
   4 Wooster Street apizza: a coal-fired brick oven glowing, a pie on the peel, smoke curling out of the chimney.
   5 Dixwell Ave and Goffe St: green signs, AKUA NARU tagged on the brick, the Knights of Columbus towers on the downtown skyline behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes aknflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.akn-flk{animation:aknflick 2.2s infinite}.akn-flk2{animation-delay:.7s}' +
    '@keyframes aknball{0%{transform:translate(-70px,-40px)}45%{transform:translate(0,-6px)}60%{transform:translate(0,22px)}100%{transform:translate(0,70px);opacity:0}}.akn-ball{animation:aknball 2.6s ease-in infinite}' +
    '@keyframes akngnet{0%,50%,100%{transform:scaleY(1)}62%{transform:scaleY(1.25)}}.akn-net{transform-box:fill-box;transform-origin:50% 0%;animation:akngnet 2.6s ease-in infinite}' +
    '@keyframes aknbell{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.akn-bell{transform-box:fill-box;transform-origin:50% 0%;animation:aknbell 1.4s ease-in-out infinite}.akn-bell2{animation-delay:-.7s}' +
    '@keyframes aknbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-30px)}}.akn-bird{animation:aknbird 12s linear infinite}.akn-bird2{animation-delay:-6s}' +
    '@keyframes aknglow{0%,100%{opacity:.75}50%{opacity:1}}.akn-glow{animation:aknglow 1.2s ease-in-out infinite}' +
    '@keyframes aknsmoke{0%{transform:translate(0,0) scale(.6);opacity:.7}100%{transform:translate(18px,-70px) scale(1.6);opacity:0}}.akn-smoke{transform-box:fill-box;transform-origin:50% 50%;animation:aknsmoke 3s ease-out infinite}.akn-smoke2{animation-delay:-1s}.akn-smoke3{animation-delay:-2s}' +
    '@keyframes aknspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.akn-sp{animation:aknspray 1.4s ease-out infinite}.akn-sp2{animation-delay:.45s}' +
    '@keyframes aknblink{0%,100%{opacity:.25}50%{opacity:1}}.akn-bl{animation:aknblink 1.6s ease-in-out infinite}.akn-bl2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const CTT = "#005daa", GOLD = "#f2b33d", FLAME = "#e4572e", TEAL = "#7fd6c2";
  /* Knights of Columbus building: four round brown-brick corner towers around a dark glass slab */
  const kofc = (x, base, s) => {
    const tw = (cx) => '<rect x="' + (cx - 7 * s) + '" y="' + (base - 92 * s) + '" width="' + (14 * s) + '" height="' + (92 * s) + '" rx="' + (7 * s) + '" fill="#8a5a3c"/><rect x="' + (cx - 7 * s) + '" y="' + (base - 92 * s) + '" width="' + (4 * s) + '" height="' + (92 * s) + '" fill="#7a4e33"/>';
    return '<g><rect x="' + (x - 22 * s) + '" y="' + (base - 84 * s) + '" width="' + (44 * s) + '" height="' + (84 * s) + '" fill="#2c3440"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (x - 22 * s) + ' ' + (base - (80 - i * 9) * s) + 'h' + (44 * s) + '" stroke="#4a5666" stroke-width="' + s + '"/>').join("") +
      tw(x - 24 * s) + tw(x + 24 * s) + tw(x - 12 * s) + tw(x + 12 * s) + '</g>';
  };

  /* 1. CTtransit 238 at Dixwell Ave & Charles St */
  function aknstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 40) + '" y="128" width="30" height="24" rx="3" fill="#1d2a36"/>').join("");
    const bus = '<g class="anim-train"><rect x="34" y="114" width="310" height="76" rx="10" fill="#f4f6f8" stroke="#8a949c" stroke-width="2"/>' + win +
      '<rect x="34" y="158" width="310" height="12" fill="' + CTT + '"/><path d="M34 172h310" stroke="#e31837" stroke-width="2"/>' +
      '<rect x="316" y="122" width="24" height="44" rx="4" fill="#1d2a36"/><rect x="284" y="118" width="56" height="10" rx="2" fill="#111"/><text x="312" y="126.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">238 DIXWELL</text>' +
      '<circle cx="90" cy="192" r="12" fill="#222"/><circle cx="90" cy="192" r="5" fill="#888"/><circle cx="292" cy="192" r="12" fill="#222"/><circle cx="292" cy="192" r="5" fill="#888"/>' +
      '<circle cx="338" cy="180" r="3.5" fill="#fff6c2"/><text x="180" y="168" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">CTTRANSIT</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#akns1)"/>' +
      '<rect x="0" y="40" width="140" height="70" fill="#8a4b36"/>' + Array.from({ length: 2 }, (_, r) => Array.from({ length: 5 }, (_, i) => '<rect x="' + (12 + i * 26) + '" y="' + (52 + r * 26) + '" width="16" height="18" fill="#f6dfa3" opacity=".8"/>').join("")).join("") +
      '<rect x="150" y="54" width="120" height="56" fill="#c9b79a"/><rect x="150" y="54" width="120" height="14" fill="#26323e"/><text x="210" y="65" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">Q HOUSE</text>' +
      '<rect x="160" y="74" width="100" height="30" fill="#6fa3c4" opacity=".8"/>' +
      '<rect x="280" y="46" width="120" height="64" fill="#6b5a7a"/>' + Array.from({ length: 4 }, (_, i) => '<rect x="' + (292 + i * 26) + '" y="60" width="16" height="30" fill="#f6dfa3" opacity=".75"/>').join("") +
      '<rect x="0" y="110" width="400" height="96" fill="#55585c"/>' + bus +
      '<rect x="0" y="204" width="400" height="6" fill="#d8d4c8"/><rect x="0" y="210" width="400" height="50" fill="#a19d93"/>' +
      '<rect x="40" y="214" width="320" height="34" rx="3" fill="#111"/><text x="54" y="237" ' + font + ' font-size="15" fill="#fff">Dixwell Ave &amp; Charles St</text>' + badge(282, 231, "238", CTT),
      sky("akns1", "#2a3b66", "#f0a76a"));
  }

  /* 2. Q-House gym */
  function aknqhouse() {
    let floor = "";
    for (let i = 0; i < 20; i++) floor += '<rect x="' + (i * 20) + '" y="150" width="20" height="110" fill="' + (i % 2 ? "#d9a35f" : "#cf9852") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#akns2)"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 50 + 4) + '" y="14" width="42" height="70" fill="#9cc6e0" opacity=".55"/>').join("") +
      '<rect x="0" y="84" width="400" height="66" fill="#a8533a"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (90 + i * 8) + 'h400" stroke="#934632" stroke-width="1"/>').join("") +
      '<text x="70" y="124" ' + font + ' font-size="14" fill="' + GOLD + '">DIXWELL</text><text x="270" y="124" ' + font + ' font-size="14" fill="' + GOLD + '">Q HOUSE</text>' +
      floor + '<path d="M140 150h120l20 110H120z" fill="' + FLAME + '" opacity=".85"/><path d="M140 150h120l20 110H120z" fill="none" stroke="#fff" stroke-width="3"/>' +
      '<ellipse cx="200" cy="258" rx="58" ry="22" fill="none" stroke="#fff" stroke-width="3"/>' +
      '<rect x="196" y="88" width="8" height="64" fill="#555"/><rect x="164" y="64" width="72" height="44" rx="2" fill="#f4f6f8" stroke="#bbb" stroke-width="2"/><rect x="188" y="82" width="24" height="18" fill="none" stroke="' + FLAME + '" stroke-width="2.5"/>' +
      '<ellipse cx="200" cy="104" rx="15" ry="4" fill="none" stroke="#ff6a1a" stroke-width="3"/>' +
      '<g class="akn-net"><path d="M186 105l4 18h20l4 -18M192 105l3 18M200 105v18M208 105l-3 18" stroke="#fff" stroke-width="1.4" fill="none"/></g>' +
      '<g class="akn-ball"><circle cx="200" cy="92" r="8" fill="#e9772b" stroke="#6b3311" stroke-width="1.5"/><path d="M192 92h16M200 84v16" stroke="#6b3311" stroke-width="1.2"/></g>',
      sky("akns2", "#1a1410", "#3a2a1e"));
  }

  /* 3. Harkness Tower */
  function aknharkness() {
    const pin = (x, y, h) => '<path d="M' + (x - 4) + ' ' + y + 'L' + x + ' ' + (y - h) + 'L' + (x + 4) + ' ' + y + 'z" fill="#d9cfb8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#akns3)"/>' +
      '<g class="akn-bird"><path d="M20 50q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="akn-bird akn-bird2"><path d="M60 70q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<rect x="166" y="120" width="68" height="110" fill="#d4c9b0"/><rect x="166" y="120" width="16" height="110" fill="#c2b699"/>' +
      '<rect x="174" y="70" width="52" height="54" fill="#dacfb6"/><rect x="174" y="70" width="12" height="54" fill="#c8bc9f"/>' +
      '<rect x="182" y="34" width="36" height="40" fill="#e0d6be"/>' +
      '<path d="M188 40v26M200 40v26M212 40v26" stroke="#3a352c" stroke-width="5"/>' +
      '<g class="akn-bell"><path d="M194 52q6 -10 12 0v6h-12z" fill="#b8892f"/></g><g class="akn-bell akn-bell2"><path d="M182 100q5 -8 10 0v5h-10z" fill="#b8892f"/></g><g class="akn-bell"><path d="M208 100q5 -8 10 0v5h-10z" fill="#b8892f"/></g>' +
      '<path d="M190 34L200 6L210 34z" fill="#d9cfb8"/>' + pin(182, 34, 14) + pin(218, 34, 14) + pin(174, 70, 12) + pin(226, 70, 12) + pin(166, 120, 12) + pin(234, 120, 12) +
      '<path d="M190 150q10 -16 20 0v36h-20z" fill="#3a352c"/><path d="M180 92q6 -10 12 0v16h-12zM208 92q6 -10 12 0v16h-12z" fill="#3a352c"/>' +
      '<rect x="40" y="170" width="126" height="60" fill="#c8bc9f"/><rect x="234" y="170" width="126" height="60" fill="#c8bc9f"/>' +
      Array.from({ length: 4 }, (_, i) => '<path d="M' + (54 + i * 28) + ' 186q6 -10 12 0v26h-12zM' + (248 + i * 28) + ' 186q6 -10 12 0v26h-12z" fill="#4a5a6a"/>').join("") +
      '<rect x="0" y="228" width="400" height="32" fill="#5f8a4a"/><text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f4f1e6">HARKNESS TOWER · HIGH ST</text>',
      sky("akns3", "#7fb4e0", "#eaf4fb"));
  }

  /* 4. Wooster Street apizza oven */
  function aknapizza() {
    const bricks = Array.from({ length: 7 }, (_, r) => Array.from({ length: 12 }, (_, c) => '<rect x="' + (60 + c * 24 + (r % 2) * 12) + '" y="' + (70 + r * 14) + '" width="22" height="12" fill="' + ((r + c) % 3 ? "#8f3f2a" : "#7d3523") + '"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#akns4)"/>' +
      '<rect x="60" y="70" width="290" height="140" fill="#6b2e1f"/>' + bricks +
      '<rect x="180" y="20" width="40" height="50" fill="#7d3523"/>' +
      '<g class="akn-smoke"><circle cx="200" cy="16" r="10" fill="#bbb"/></g><g class="akn-smoke akn-smoke2"><circle cx="196" cy="16" r="8" fill="#ccc"/></g><g class="akn-smoke akn-smoke3"><circle cx="204" cy="16" r="9" fill="#aaa"/></g>' +
      '<path d="M140 190v-50q65 -60 130 0v50z" fill="#1a0f0a"/>' +
      '<g class="akn-glow"><ellipse cx="205" cy="184" rx="58" ry="14" fill="#ff7b1c" opacity=".85"/><ellipse cx="205" cy="180" rx="34" ry="8" fill="#ffd34d"/></g>' +
      '<rect x="0" y="206" width="400" height="54" fill="#d9d2c4"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="206" width="20" height="54" fill="#cfc7b6"/>').join("") +
      '<path d="M40 226h190" stroke="#8a6a3c" stroke-width="6" stroke-linecap="round"/><ellipse cx="270" cy="226" rx="42" ry="12" fill="#c9a06a"/>' +
      '<ellipse cx="270" cy="224" rx="36" ry="9" fill="#f4e3b0"/><ellipse cx="270" cy="224" rx="30" ry="7" fill="#d9472b"/>' +
      [[258, 222], [276, 226], [284, 220], [264, 227]].map(p => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="2.5" fill="#f7f1d9"/>').join("") +
      '<rect x="120" y="36" width="160" height="26" rx="4" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="55" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '" class="akn-flk">APIZZA</text>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#5a4a3a">WOOSTER ST · NEW HAVEN</text>',
      sky("akns4", "#20140e", "#4a2c1c"));
  }

  /* 5. Dixwell Ave and Goffe St */
  function akncorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#akns5)"/>' +
      '<g fill="#2b2f45"><rect x="0" y="92" width="70" height="40"/><rect x="250" y="80" width="40" height="52"/><rect x="300" y="96" width="100" height="36"/><rect x="90" y="100" width="40" height="32"/></g>' +
      kofc(190, 132, 1) +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("AKUA NARU", 16, 190, 38, GOLD, -6) + tag("AFLAME", 150, 216, 18, FLAME, -4) + tag("DIGFLO", 30, 216, 16, TEAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(256, 98, 134, "Dixwell Ave") + sign(272, 124, 110, "Goffe St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="akn-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="akn-sp"><circle cx="232" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="akn-sp akn-sp2"><circle cx="238" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("akns5", "#2e3566", "#f0a070"));
  }

  window.SCENES = { aknstation: aknstation, aknqhouse: aknqhouse, aknharkness: aknharkness, aknapizza: aknapizza, akncorner: akncorner };
})();
