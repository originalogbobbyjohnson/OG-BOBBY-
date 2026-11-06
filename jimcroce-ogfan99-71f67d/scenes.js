/* jimcroce scenes (Regions tab: Philadelphia; Drexel Hill, Upper Darby). CSS classes prefixed jc- (the page's own anim-train is kept).
   1 Lansdowne Avenue station on SEPTA's Route 101/102 trolleys in Drexel Hill (Garrett Rd & Lansdowne Ave): two tracks on their own right-of-way, the old roofed stone shelter, catenary, a white trolley with red and blue stripes sliding in.
   2 Villanova, where he sang with the Villanova Singers and spun records on student radio: St. Thomas of Villanova Church's twin gray stone spires, autumn leaves falling, a guitar case on the lawn.
   3 The Riddle Paddock in Lima, PA, his first long-running gig: wood-paneled room, a little stage with a stool, mic and acoustic guitar, hanging lamps swaying, candles on the tables.
   4 The farm in Lyndell by the Brandywine where he lived and wrote (1970-72): the stone farmhouse and red barn, the creek running, the blue-and-gold Pennsylvania historical marker out front.
   5 Lansdowne Ave and Garrett Rd in Drexel Hill: green signs, JIM CROCE tagged on the wall, the trolley wire overhead, the Center City skyline glowing on the horizon seven miles east. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jcglow{0%,100%{opacity:.45}50%{opacity:1}}.jc-glow{animation:jcglow 2.6s ease-in-out infinite}.jc-glow2{animation-delay:-1.3s}' +
    '@keyframes jcleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-40px,190px) rotate(300deg)}}.jc-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:jcleaf 6s linear infinite}.jc-l2{animation-delay:-2s}.jc-l3{animation-delay:-4s}' +
    '@keyframes jcsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.jc-sway{transform-box:fill-box;transform-origin:50% 0%;animation:jcsway 3s ease-in-out infinite}.jc-sw2{animation-delay:-1.5s}' +
    '@keyframes jcflow{from{transform:translateX(0)}to{transform:translateX(-40px)}}.jc-flow{animation:jcflow 2.4s linear infinite}' +
    '@keyframes jcbird{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.jc-bird{animation:jcbird 12s linear infinite}.jc-bird2{animation-delay:-6s}' +
    '@keyframes jcnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.jc-note{animation:jcnote 3.2s linear infinite}.jc-n2{animation-delay:-1.6s}' +
    '@keyframes jccar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.jc-car{animation:jccar 8s linear infinite}' +
    '@keyframes jcspark{0%,100%{opacity:0}45%,55%{opacity:1}}.jc-spark{animation:jcspark 1.6s steps(2) infinite}' +
    '@keyframes jcspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jc-sp{animation:jcspray 1.4s ease-out infinite}.jc-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "jc-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#e9c46a", RUST = "#c8553d", SAGE = "#8ab17d", TROL = "#5a960a";
  const guitar = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-2" y="-46" width="4" height="34" fill="#3a2414"/><rect x="-4" y="-52" width="8" height="8" rx="2" fill="#2a1a0e"/>' +
    '<circle cx="0" cy="-6" r="10" fill="#c88a4a" stroke="#6a3a1a" stroke-width="1.5"/><circle cx="0" cy="8" r="13" fill="#c88a4a" stroke="#6a3a1a" stroke-width="1.5"/><circle cx="0" cy="0" r="4" fill="#2a1a0e"/><rect x="-5" y="12" width="10" height="3" fill="#2a1a0e"/></g>';

  /* 1. Lansdowne Avenue station, Routes 101 and 102 */
  function jcstation() {
    const trolley = '<g class="anim-train"><rect x="24" y="116" width="310" height="70" rx="9" fill="#eef0f2" stroke="#7b828a" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 44) + '" y="126" width="32" height="26" rx="3" fill="#1d2731"/>').join("") +
      '<rect x="24" y="158" width="310" height="5" fill="#c8102e"/><rect x="24" y="164" width="310" height="3" fill="#1f4e9a"/>' +
      '<rect x="310" y="122" width="24" height="62" rx="5" fill="#dfe3e7"/><rect x="313" y="126" width="18" height="11" rx="2" fill="#111"/><text x="322" y="134.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">101</text>' +
      '<circle cx="322" cy="178" r="3.5" fill="#fff6c2" class="jc-glow"/>' +
      '<path d="M170 116l40 -40" stroke="#333" stroke-width="2.5"/><circle cx="210" cy="76" r="3" fill="#333"/><circle class="jc-spark" cx="211" cy="74" r="4" fill="#bfe8ff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jc-s1)"/>' +
      /* trees and twin houses of Drexel Hill */
      Array.from({ length: 9 }, (_, i) => '<circle cx="' + (i * 50 + 10) + '" cy="' + (96 + (i % 3) * 6) + '" r="' + (26 + (i % 2) * 6) + '" fill="' + (i % 2 ? "#3a5a32" : "#466a3a") + '"/>').join("") +
      '<path d="M90 110l30 -20l30 20z" fill="#5a3a30"/><rect x="94" y="110" width="52" height="40" fill="#b8a48a"/><path d="M250 110l30 -20l30 20z" fill="#5a3a30"/><rect x="254" y="110" width="52" height="40" fill="#c8b49a"/>' +
      /* catenary */
      '<path d="M0 74h400" stroke="#222" stroke-width="1.5"/>' + [70, 350].map(x => '<rect x="' + (x - 3) + '" y="62" width="6" height="140" fill="#4a4f56"/><rect x="' + (x - 16) + '" y="68" width="32" height="4" fill="#4a4f56"/>').join("") +
      /* the roofed stone shelter on the inbound side, right */
      '<rect x="338" y="132" width="58" height="60" fill="#8a8274"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M338 ' + (140 + i * 9) + 'h58" stroke="#6a6458" stroke-width="1"/>').join("") +
      '<path d="M332 134l35 -22l35 22z" fill="#4a3a32"/><rect x="352" y="150" width="30" height="42" fill="#2a2420"/>' +
      trolley +
      /* ballast + rails */
      '<rect x="0" y="192" width="400" height="68" fill="#6a645a"/><path d="M0 198h400M0 210h400" stroke="#9a948a" stroke-width="2.5"/>' +
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 21) + '" y="196" width="10" height="16" fill="#4a3a2a" opacity=".6"/>').join("") +
      '<rect x="0" y="222" width="400" height="38" fill="#9a958c"/><rect x="0" y="220" width="400" height="4" fill="#f2c200"/>' +
      /* black station sign with the trolley badge */
      '<rect x="20" y="14" width="250" height="34" rx="3" fill="#111"/><text x="30" y="36" ' + font + ' font-size="15" fill="#fff">Lansdowne Avenue</text>' +
      '<circle cx="196" cy="31" r="11" fill="' + TROL + '"/><text x="196" y="36" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">T</text>' +
      '<rect x="212" y="22" width="24" height="18" rx="3" fill="' + TROL + '"/><text x="224" y="35" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">101</text>' +
      '<rect x="240" y="22" width="24" height="18" rx="3" fill="' + TROL + '"/><text x="252" y="35" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">102</text>',
      sky("jc-s1", "#6a8ec0", "#f2c890"));
  }

  /* 2. Villanova: St. Thomas of Villanova Church's twin spires */
  function jcvillanova() {
    const STONE = "#9a9a96", DARK = "#7a7a76";
    const spire = x => '<rect x="' + x + '" y="60" width="36" height="120" fill="' + STONE + '"/><path d="M' + (x - 2) + ' 60l20 -52l20 52z" fill="' + DARK + '"/>' +
      '<rect x="' + (x + 12) + '" y="74" width="12" height="24" rx="6" fill="#2a3040"/><rect x="' + (x + 12) + '" y="112" width="12" height="24" rx="6" fill="#2a3040"/>' +
      '<path d="M' + (x + 18) + ' 8v-6M' + (x + 15) + ' 4h6" stroke="' + DARK + '" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jc-s2)"/>' +
      '<g class="jc-bird"><path d="M0 40q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* nave between the spires, rose window */
      '<rect x="160" y="92" width="80" height="88" fill="' + STONE + '"/><path d="M156 94l44 -30l44 30z" fill="' + DARK + '"/>' +
      '<circle cx="200" cy="110" r="14" fill="#3a3050" stroke="#c8c4b8" stroke-width="3"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M200 110l' + (14 * Math.cos(i * Math.PI / 4)).toFixed(1) + ' ' + (14 * Math.sin(i * Math.PI / 4)).toFixed(1) + '" stroke="#c8c4b8" stroke-width="1.5"/>').join("") +
      '<circle class="jc-glow" cx="200" cy="110" r="6" fill="' + GOLD + '" opacity=".7"/>' +
      '<path d="M186 180v-34a14 14 0 0 1 28 0v34z" fill="#4a2a1a" stroke="#c8c4b8" stroke-width="2"/>' +
      spire(124) + spire(240) +
      /* autumn trees */
      [40, 360].map(x => '<rect x="' + (x - 4) + '" y="130" width="8" height="54" fill="#4a3424"/><circle cx="' + x + '" cy="122" r="30" fill="' + (x < 200 ? RUST : "#d88a3a") + '"/><circle cx="' + (x + 14) + '" cy="110" r="18" fill="' + GOLD + '"/>').join("") +
      /* lawn + path */
      '<rect x="0" y="180" width="400" height="80" fill="#4a7a3a"/><path d="M180 260l10 -80h20l10 80z" fill="#c8bea8"/>' +
      /* guitar case + guitar on the lawn */
      '<g transform="rotate(-8 105 225)"><rect x="70" y="214" width="70" height="22" rx="10" fill="#4a3020" stroke="#2a1a10" stroke-width="2"/><rect x="98" y="210" width="14" height="5" rx="2" fill="#2a1a10"/><rect x="84" y="223" width="4" height="4" fill="' + GOLD + '"/><rect x="122" y="223" width="4" height="4" fill="' + GOLD + '"/></g>' + guitar(300, 214, 0.8) +
      /* falling leaves */
      Array.from({ length: 9 }, (_, i) => '<ellipse class="jc-leaf' + (i % 3 === 1 ? " jc-l2" : i % 3 === 2 ? " jc-l3" : "") + '" cx="' + (20 + i * 46) + '" cy="' + (60 + (i * 13) % 40) + '" rx="4" ry="2.5" fill="' + [RUST, GOLD, "#d88a3a"][i % 3] + '"/>').join(""),
      sky("jc-s2", "#7aa6d6", "#e8eef2"));
  }

  /* 3. The Riddle Paddock in Lima, PA: his first steady gig */
  function jcpaddock() {
    const lamp = (x, cls) => '<g class="jc-sway ' + cls + '"><path d="M' + x + ' 0v34" stroke="#222" stroke-width="1.5"/><path d="M' + (x - 12) + ' 44l12 -12l12 12z" fill="#2a3a2a"/><ellipse class="jc-glow" cx="' + x + '" cy="46" rx="9" ry="3" fill="#ffe2a0"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#3a2418"/>' +
      /* wood paneling */
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="0" width="18" height="190" fill="' + (i % 2 ? "#4a2e1e" : "#55341f") + '"/>').join("") +
      '<rect x="0" y="120" width="400" height="6" fill="#2a180e"/>' +
      /* horseshoe + framed racing prints on the wall */
      '<path d="M44 70a14 14 0 1 1 28 0v16h-6v-16a8 8 0 1 0 -16 0v16h-6z" fill="' + GOLD + '" stroke="#8a6418"/>' +
      '<rect x="320" y="56" width="50" height="36" fill="#e8dcc0" stroke="' + GOLD + '" stroke-width="3"/><path d="M328 84q10 -16 18 -8q8 -10 16 4" stroke="#5a3a2a" stroke-width="2" fill="none"/>' +
      /* the name board */
      '<rect x="130" y="20" width="140" height="26" rx="3" fill="#1a2a1a" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="38" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '" letter-spacing="1">RIDDLE PADDOCK</text>' +
      lamp(110, "") + lamp(290, "jc-sw2") +
      /* the little stage: stool, mic, guitar */
      '<rect x="120" y="150" width="160" height="16" fill="#6a4a2a"/><rect x="120" y="148" width="160" height="4" fill="#8a6a3a"/>' +
      '<rect x="190" y="124" width="20" height="5" fill="#2a1a10"/><path d="M192 129l-4 19M208 129l4 19" stroke="#2a1a10" stroke-width="3"/>' +
      '<rect x="168" y="100" width="2.5" height="48" fill="#999"/><rect x="165" y="92" width="8" height="12" rx="4" fill="#c8ccd2"/>' +
      guitar(234, 134, 0.6) +
      '<g class="jc-note"><text x="176" y="96" font-size="16" fill="' + GOLD + '">&#9834;</text></g><g class="jc-note jc-n2"><text x="222" y="92" font-size="14" fill="' + SAGE + '">&#9835;</text></g>' +
      /* floor + tables with candles */
      '<rect x="0" y="166" width="400" height="94" fill="#2a1a12"/>' +
      [[50, 196], [150, 214], [250, 214], [350, 196], [100, 244], [300, 244]].map(([x, y], i) => '<ellipse cx="' + x + '" cy="' + y + '" rx="30" ry="8" fill="#7a3a2a"/><rect x="' + (x - 3) + '" y="' + y + '" width="6" height="16" fill="#3a2418"/>' +
        '<circle cx="' + x + '" cy="' + (y - 4) + '" r="9" fill="#ffcf70" opacity=".18"/><rect x="' + (x - 5) + '" y="' + (y - 7) + '" width="10" height="7" rx="2" fill="#c84a2a" opacity=".85"/><ellipse class="jc-glow' + (i % 2 ? " jc-glow2" : "") + '" cx="' + x + '" cy="' + (y - 9) + '" rx="2" ry="3" fill="#ffd060"/>').join(""));
  }

  /* 4. The farm in Lyndell by the Brandywine, the blue marker */
  function jcfarm() {
    return svg(
      '<rect width="400" height="260" fill="url(#jc-s4)"/>' +
      '<g class="jc-bird"><path d="M0 50q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="jc-bird jc-bird2"><path d="M0 34q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* hills */
      '<path d="M0 120q80 -30 180 -14t220 -10v50h-400z" fill="#5a8a4a"/>' +
      /* stone farmhouse */
      '<rect x="40" y="98" width="110" height="70" fill="#a8a092"/>' + Array.from({ length: 18 }, (_, i) => '<rect x="' + (44 + (i % 6) * 18) + '" y="' + (104 + Math.floor(i / 6) * 20) + '" width="14" height="7" rx="2" fill="#9a9284" opacity=".7"/>').join("") +
      '<path d="M34 100l61 -34l61 34z" fill="#4a4448"/><rect x="120" y="66" width="12" height="24" fill="#8a8274"/>' +
      [56, 104].map(x => '<rect class="jc-glow" x="' + x + '" y="112" width="16" height="20" fill="#ffe2a0" stroke="#f4efe6" stroke-width="2"/>').join("") +
      '<rect x="84" y="138" width="20" height="30" fill="#3a2a22"/>' +
      /* red barn */
      '<rect x="210" y="92" width="110" height="76" fill="#9a2a22"/><path d="M204 94l61 -36l61 36z" fill="#5a1a14"/>' +
      '<rect x="248" y="122" width="34" height="46" fill="#7a1a14" stroke="#f4efe6" stroke-width="2"/><path d="M248 122l34 46M282 122l-34 46" stroke="#f4efe6" stroke-width="2"/>' +
      '<rect x="256" y="98" width="18" height="14" fill="#f4efe6"/>' +
      /* fence */
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (i * 34) + '" y="168" width="4" height="18" fill="#e8e2d6"/>').join("") + '<path d="M0 172h400M0 180h400" stroke="#e8e2d6" stroke-width="2"/>' +
      /* the Brandywine running */
      '<rect x="0" y="196" width="400" height="22" fill="#4a7aa0"/><g class="jc-flow">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' 206q10 -4 20 0" stroke="#bfe0f2" stroke-width="1.5" fill="none"/>').join("") + '</g>' +
      '<rect x="0" y="186" width="400" height="10" fill="#4a7a3a"/><rect x="0" y="218" width="400" height="42" fill="#4a7a3a"/>' +
      /* the blue-and-gold historical marker */
      '<rect x="338" y="150" width="5" height="72" fill="#3a3a3a"/>' +
      '<rect x="306" y="96" width="70" height="56" rx="4" fill="#1f3f8a" stroke="' + GOLD + '" stroke-width="3"/><path d="M306 104q35 -18 70 0" fill="#1f3f8a" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<text x="341" y="118" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">JIM CROCE</text>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="314" y="' + (124 + i * 6) + '" width="54" height="2" fill="' + GOLD + '" opacity=".7"/>').join(""),
      sky("jc-s4", "#8ab8e0", "#f2ead6"));
  }

  /* 5. Lansdowne Ave and Garrett Rd, Drexel Hill */
  function jccorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#jc-s5)"/>' + stars(14) +
      /* the Center City skyline on the horizon */
      '<g opacity=".85"><rect x="164" y="88" width="14" height="44" fill="#2a2a44"/><rect x="182" y="74" width="12" height="58" fill="#30304c"/><path d="M182 74l6 -18l6 18z" fill="#30304c"/>' +
      '<rect x="198" y="92" width="12" height="40" fill="#2a2a44"/><path d="M198 92q6 -12 12 0z" fill="#2a2a44"/><rect x="202.5" y="72" width="3" height="11" fill="#3a3a56"/><circle cx="204" cy="71" r="2" fill="#3a3a56"/><circle class="jc-glow" cx="204" cy="98" r="2.5" fill="#fff1b0"/>' +
      '<rect x="214" y="80" width="14" height="52" fill="#30304c"/><path d="M214 80l7 -14l7 14z" fill="#30304c"/><rect x="232" y="96" width="18" height="36" fill="#2a2a44"/></g>' +
      Array.from({ length: 8 }, (_, i) => '<rect class="' + (i % 3 ? "" : "jc-glow jc-glow2") + '" x="' + (166 + (i * 11) % 80) + '" y="' + (100 + (i * 7) % 26) + '" width="3" height="4" fill="#ffd98a"/>').join("") +
      '<path d="M0 132h400" stroke="#1a1a2a" stroke-width="2"/>' +
      /* trolley wire */
      '<path d="M0 64h400" stroke="#111" stroke-width="1.5"/>' +
      /* storefront left */
      '<rect x="0" y="104" width="130" height="122" fill="#8a6a52"/><rect x="0" y="100" width="130" height="6" fill="#e8e2d6"/>' +
      '<rect class="jc-glow" x="10" y="170" width="50" height="40" fill="#ffd98a" opacity=".85"/><rect x="70" y="170" width="24" height="56" fill="#3a2a22"/>' +
      [16, 52, 88].map(x => '<rect x="' + x + '" y="120" width="22" height="28" fill="#2a2230" stroke="#e8e2d6" stroke-width="1.5"/>').join("") +
      '<rect x="6" y="156" width="118" height="10" fill="' + RUST + '"/>' +
      /* stucco wall with the tags */
      '<rect x="140" y="140" width="260" height="86" fill="#b8a488"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M140 ' + (154 + i * 12) + 'h260" stroke="#a8947a" stroke-width="1"/>').join("") +
      tag("JIM CROCE", 150, 192, 34, GOLD, -6) + tag("I GOT A NAME", 156, 218, 16, RUST, -3) + tag("DREXEL HILL", 270, 216, 15, SAGE, -4) +
      /* street */
      '<rect x="0" y="226" width="400" height="34" fill="#4a4844"/><rect x="0" y="224" width="400" height="4" fill="#d8dce2"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 44 + 8) + '" y="242" width="24" height="3" fill="#f2c200"/>').join("") +
      '<g class="jc-car"><rect x="0" y="234" width="64" height="14" rx="5" fill="' + RUST + '"/><rect x="14" y="225" width="34" height="11" rx="3" fill="' + RUST + '"/><circle cx="14" cy="249" r="4" fill="#111"/><circle cx="50" cy="249" r="4" fill="#111"/></g>' +
      /* signs */
      '<rect x="384" y="70" width="6" height="156" fill="#2f2f2f"/>' + sign(278, 72, 118, "Lansdowne Ave") + sign(278, 98, 118, "Garrett Rd") +
      '<g class="jc-sp"><circle cx="292" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="jc-sp jc-sp2"><circle cx="298" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("jc-s5", "#141228", "#7a5a5a"));
  }

  window.SCENES = { jcstation: jcstation, jcvillanova: jcvillanova, jcpaddock: jcpaddock, jcfarm: jcfarm, jccorner: jccorner };
})();
