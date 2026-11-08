/* shordieshordie scenes (Regions tab: THE DMV; Northeast Baltimore, York Road corridor by the city line). CSS classes prefixed ss- (the page's own anim-train is kept).
   1 York Rd & Northern Pkwy in Govans: an MTA BaltimoreLink CityLink RED bus pulling up to the stop (the RED runs York Rd / Greenmount Ave, Towson to downtown).
   2 Baltimore Soundstage (Market Place, downtown): the stage where he opened for Tate Kobang in 2016, lights sweeping, crowd jumping.
   3 The Inner Harbor's USS Constellation: the black-and-white tall ship with three masts, for the Captain Hook (his nickname and debut tape).
   4 The Senator Theatre on York Rd: the 1939 Art Deco drum tower and marquee, a block from the stop.
   5 York Rd and E Belvedere Ave: green signs, SHORDIE SHORDIE tagged, the Bromo Seltzer clock tower on the skyline behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ssflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.ss-flk{animation:ssflick 2.4s infinite}.ss-flk2{animation-delay:.8s}' +
    '@keyframes ssblink{0%,100%{opacity:.25}50%{opacity:1}}.ss-bl{animation:ssblink 1.4s ease-in-out infinite}.ss-bl2{animation-delay:-.7s}' +
    '@keyframes sscar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.ss-car{animation:sscar 7s linear infinite}.ss-car2{animation-delay:-3.5s}' +
    '@keyframes ssjump{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.ss-jmp{animation:ssjump .7s ease-in-out infinite}.ss-jmp2{animation-delay:-.35s}' +
    '@keyframes ssbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.ss-beam{transform-box:fill-box;transform-origin:50% 0;animation:ssbeam 3s ease-in-out infinite}.ss-beam2{animation-delay:-1.5s}' +
    '@keyframes sswave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.ss-wave{animation:sswave 3s ease-in-out infinite}.ss-wave2{animation-delay:-1.5s}' +
    '@keyframes ssbob{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(3px) rotate(.6deg)}}.ss-bob{transform-box:fill-box;transform-origin:50% 100%;animation:ssbob 4s ease-in-out infinite}' +
    '@keyframes ssflag{0%,100%{transform:skewY(0)}50%{transform:skewY(8deg)}}.ss-flag{transform-box:fill-box;transform-origin:0 50%;animation:ssflag 1.4s ease-in-out infinite}' +
    '@keyframes ssbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-20px)}}.ss-bird{animation:ssbird 14s linear infinite}.ss-bird2{animation-delay:-7s}' +
    '@keyframes ssspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ss-sp{animation:ssspray 1.4s ease-out infinite}.ss-sp2{animation-delay:.45s}' +
    '@keyframes sschase{0%,100%{opacity:1}50%{opacity:.25}}.ss-ch{animation:sschase .8s steps(1) infinite}.ss-ch2{animation-delay:-.4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const person = (cls, x, y, c, c2) => '<g class="' + cls + '"><circle cx="' + x + '" cy="' + (y - 22) + '" r="4.5" fill="#2a1a1a"/><rect x="' + (x - 5) + '" y="' + (y - 17) + '" width="10" height="14" rx="3" fill="' + c + '"/><rect x="' + (x - 4) + '" y="' + (y - 3) + '" width="3.5" height="11" fill="' + c2 + '"/><rect x="' + (x + 0.5) + '" y="' + (y - 3) + '" width="3.5" height="11" fill="' + c2 + '"/></g>';
  const RED = "#e2231a", P = "#8f7bff", G = "#ffc642", T = "#4fd1e0";
  const row = (x, y, w, h, c, trim) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><rect x="' + (x - 2) + '" y="' + (y - 5) + '" width="' + (w + 4) + '" height="6" fill="' + trim + '"/>' +
    '<rect x="' + (x + 5) + '" y="' + (y + 8) + '" width="' + (w / 2 - 8) + '" height="14" fill="#ffe2a0" opacity=".75"/><rect x="' + (x + w / 2 + 3) + '" y="' + (y + 8) + '" width="' + (w / 2 - 8) + '" height="14" fill="#2a2440"/>' +
    '<rect x="' + (x + 5) + '" y="' + (y + 30) + '" width="' + (w / 2 - 8) + '" height="14" fill="#2a2440"/><rect x="' + (x + w / 2 + 3) + '" y="' + (y + 30) + '" width="' + (w / 2 - 8) + '" height="14" fill="#ffe2a0" opacity=".75"/>';

  /* 1. York Rd & Northern Pkwy, Govans: CityLink RED bus pulling in */
  function ssstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 38) + '" y="118" width="30" height="24" rx="3" fill="#1d2833"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="108" width="300" height="76" rx="10" fill="#f2f2f0" stroke="#7d858d" stroke-width="2"/>' +
      '<rect x="40" y="150" width="300" height="10" fill="' + RED + '"/><rect x="40" y="160" width="300" height="4" fill="#1a1a1a"/>' + win +
      '<rect x="44" y="116" width="28" height="44" rx="3" fill="#1d2833" stroke="#cfd3d8" stroke-width="2"/><path d="M58 116v44" stroke="#cfd3d8" stroke-width="2"/>' +
      '<rect x="306" y="114" width="30" height="34" rx="5" fill="#1d2833"/><circle cx="330" cy="172" r="4" fill="#fff6c2"/>' +
      '<rect x="240" y="110" width="94" height="12" rx="2" fill="#111"/><text x="287" y="119.5" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb03c">RD  TOWSON</text>' +
      '<circle cx="96" cy="186" r="14" fill="#222"/><circle cx="96" cy="186" r="6" fill="#888"/><circle cx="290" cy="186" r="14" fill="#222"/><circle cx="290" cy="186" r="6" fill="#888"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sss1)"/>' +
      '<g class="ss-bird"><path d="M20 40q6 -6 12 0q6 -6 12 0" stroke="#3a2a4a" stroke-width="2" fill="none"/></g><g class="ss-bird ss-bird2"><path d="M60 26q5 -5 10 0q5 -5 10 0" stroke="#3a2a4a" stroke-width="2" fill="none"/></g>' +
      /* York Road storefront rowhouses */
      row(0, 60, 64, 120, "#9c4a36", "#e8e0d0") + row(66, 66, 62, 114, "#c8b89a", "#f7f3ea") + row(130, 58, 60, 122, "#7a3a2a", "#e8e0d0") +
      row(192, 64, 64, 116, "#a86848", "#f7f3ea") + row(258, 60, 62, 120, "#8a5a8a", "#e8e0d0") + row(322, 66, 78, 114, "#9c4a36", "#f7f3ea") +
      '<rect x="0" y="180" width="400" height="12" fill="#b9b2a5"/><rect x="0" y="192" width="400" height="68" fill="#3a3a42"/>' +
      '<path d="M0 226h400" stroke="#f2d04a" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      /* the bus stop pole and sign */
      '<rect x="356" y="96" width="5" height="96" fill="#555"/><rect x="342" y="72" width="34" height="30" rx="3" fill="#fff" stroke="#1a3a6a" stroke-width="2"/>' +
      '<rect x="345" y="75" width="28" height="9" fill="#1a3a6a"/><text x="359" y="82.2" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">MTA</text><rect x="349" y="87" width="20" height="11" rx="2" fill="' + RED + '"/><text x="359" y="95.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">RD</text>' +
      '<rect x="70" y="204" width="260" height="30" rx="3" fill="#111"/><text x="84" y="224" ' + font + ' font-size="14" fill="#fff">York Rd &amp; Northern Pkwy</text><rect x="290" y="210" width="32" height="18" rx="3" fill="' + RED + '"/><text x="306" y="223" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">RD</text>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#f6f2ff">CITYLINK RED · YORK ROAD · GOVANS, NORTHEAST BALTIMORE</text>',
      sky("sss1", "#2a1d5f", "#ff9e7a"));
  }

  /* 2. Baltimore Soundstage: the stage, beams sweeping, crowd jumping */
  function sssound() {
    const crowd = Array.from({ length: 16 }, (_, i) => '<g class="ss-jmp' + (i % 2 ? " ss-jmp2" : "") + '"><circle cx="' + (12 + i * 25) + '" cy="' + (214 + (i % 3) * 4) + '" r="9" fill="#120c22"/><rect x="' + (2 + i * 25) + '" y="' + (222 + (i % 3) * 4) + '" width="20" height="40" rx="8" fill="#120c22"/>' +
      (i % 4 === 1 ? '<path d="M' + (20 + i * 25) + ' ' + (220 + (i % 3) * 4) + 'l8 -22" stroke="#120c22" stroke-width="5" stroke-linecap="round"/>' : "") + '</g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sss2)"/>' +
      /* old brick walls of the venue */
      '<rect x="0" y="0" width="60" height="200" fill="#4a2620"/><rect x="340" y="0" width="60" height="200" fill="#4a2620"/>' +
      Array.from({ length: 24 }, (_, i) => '<path d="M0 ' + (8 + i * 8) + 'h60M340 ' + (8 + i * 8) + 'h60" stroke="#351a16" stroke-width="1"/>').join("") +
      /* truss and lights */
      '<rect x="40" y="20" width="320" height="10" fill="#555" /><path d="M40 20l10 10l10 -10l10 10l10 -10l10 10l10 -10l10 10l10 -10l10 10l10 -10l10 10l10 -10l10 10l10 -10l10 10l10 -10l10 10l10 -10l10 10l10 -10l10 10l10 -10l10 10l10 -10l10 10l10 -10l10 10l10 -10l10 10l10 -10l10 10l10 -10" stroke="#888" stroke-width="1.5" fill="none"/>' +
      '<g class="ss-beam"><path d="M110 30l-30 150h60z" fill="' + P + '" opacity=".35"/></g><g class="ss-beam ss-beam2"><path d="M200 30l-30 150h60z" fill="' + T + '" opacity=".3"/></g><g class="ss-beam"><path d="M290 30l-30 150h60z" fill="' + G + '" opacity=".3"/></g>' +
      [110, 200, 290].map(x => '<rect x="' + (x - 8) + '" y="28" width="16" height="10" rx="2" fill="#222"/>').join("") +
      /* stage, speakers, mic stand, DJ table */
      '<rect x="60" y="150" width="280" height="34" fill="#1a1428"/><rect x="60" y="148" width="280" height="4" fill="#3a3050"/>' +
      '<rect x="66" y="96" width="34" height="54" fill="#141018" stroke="#3a3050"/><circle cx="83" cy="112" r="9" fill="#2a2438"/><circle cx="83" cy="136" r="7" fill="#2a2438"/>' +
      '<rect x="300" y="96" width="34" height="54" fill="#141018" stroke="#3a3050"/><circle cx="317" cy="112" r="9" fill="#2a2438"/><circle cx="317" cy="136" r="7" fill="#2a2438"/>' +
      '<rect x="230" y="124" width="56" height="24" fill="#2a2438"/><circle cx="246" cy="130" r="5" fill="#555"/><circle cx="270" cy="130" r="5" fill="#555"/>' +
      '<path d="M190 148v-40" stroke="#bbb" stroke-width="2"/><circle cx="190" cy="106" r="3.5" fill="#333"/>' +
      crowd +
      '<text x="200" y="64" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="26" fill="#fff" opacity=".92">WOW</text>' +
      '<text x="200" y="84" text-anchor="middle" ' + font + ' font-size="10" fill="' + G + '">OPENING FOR TATE KOBANG · 2016</text>' +
      '<text x="200" y="14" text-anchor="middle" ' + font + ' font-size="9" fill="#f6f2ff">BALTIMORE SOUNDSTAGE · MARKET PLACE</text>',
      sky("sss2", "#0d0a1f", "#3a1f5c"));
  }

  /* 3. USS Constellation at the Inner Harbor: three masts, black hull with a white stripe and gunports */
  function ssship() {
    const mast = (x, top) => '<rect x="' + (x - 2) + '" y="' + top + '" width="4" height="' + (150 - top) + '" fill="#5a3a22"/>' +
      [0, 1, 2].map(k => '<rect x="' + (x - 24 + k * 4) + '" y="' + (top + 12 + k * 30) + '" width="' + (48 - k * 8) + '" height="3" fill="#5a3a22"/><path d="M' + (x - 22 + k * 4) + ' ' + (top + 15 + k * 30) + 'h' + (44 - k * 8) + 'l-3 24h-' + (38 - k * 8) + 'z" fill="#f2ece0" stroke="#c8bfae" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sss3)"/>' +
      '<circle cx="330" cy="50" r="22" fill="#fff2c8" opacity=".85"/>' +
      /* far harbor skyline */
      '<g fill="#6a5a8a" opacity=".7"><rect x="0" y="120" width="40" height="44"/><rect x="44" y="100" width="30" height="64"/><rect x="300" y="104" width="34" height="60"/><rect x="338" y="122" width="62" height="42"/><path d="M80 164v-36l14 -12l14 12v36z"/></g>' +
      /* the ship, bobbing */
      '<g class="ss-bob">' + mast(150, 36) + mast(210, 28) + mast(268, 44) +
      '<path d="M110 52L300 60" stroke="#3a2a1a" stroke-width="1"/><path d="M150 40L96 146M268 48L330 146" stroke="#3a2a1a" stroke-width="1"/>' +
      '<g class="ss-flag"><path d="M212 28h24l-4 6l4 6h-24z" fill="' + RED + '"/></g>' +
      '<path d="M84 150h246l-14 34h-214z" fill="#141414"/><rect x="92" y="156" width="230" height="7" fill="#f2ece0"/>' +
      Array.from({ length: 11 }, (_, i) => '<rect x="' + (100 + i * 20) + '" y="157.5" width="8" height="4" fill="#141414"/>').join("") +
      '<path d="M330 150l40 -14" stroke="#5a3a22" stroke-width="3"/><path d="M84 150l-10 -8h14z" fill="#5a3a22"/></g>' +
      /* water */
      '<rect x="0" y="180" width="400" height="80" fill="#1f4d6a"/>' +
      '<g class="ss-wave"><path d="M0 194q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#7fc4e0" stroke-width="2" fill="none" opacity=".6"/></g>' +
      '<g class="ss-wave ss-wave2"><path d="M-10 214q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#7fc4e0" stroke-width="2" fill="none" opacity=".45"/></g>' +
      '<rect x="0" y="236" width="400" height="24" fill="#8a7a6a"/><path d="M0 236h400" stroke="#b8a890" stroke-width="3"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (10 + i * 42) + '" y="226" width="5" height="12" fill="#3a3a3a"/>').join("") +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#fff8e8">INNER HARBOR · THE CAPTAIN HOOK SETS SAIL</text>',
      sky("sss3", "#3a6aa8", "#ffc9a0"));
  }

  /* 4. The Senator Theatre, York Rd: Art Deco drum tower, marquee chasing lights */
  function sssenator() {
    const bulbs = Array.from({ length: 22 }, (_, i) => '<circle cx="' + (112 + i * 8) + '" cy="150" r="2" fill="#fff4b8" class="ss-ch' + (i % 2 ? " ss-ch2" : "") + '"/><circle cx="' + (112 + i * 8) + '" cy="178" r="2" fill="#fff4b8" class="ss-ch' + (i % 2 ? "" : " ss-ch2") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sss4)"/>' +
      /* side wings */
      '<rect x="40" y="110" width="80" height="94" fill="#e6dcc4"/><rect x="280" y="110" width="80" height="94" fill="#e6dcc4"/>' +
      '<path d="M40 110h80M280 110h80" stroke="#c8b890" stroke-width="4"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (50 + i * 24) + '" y="124" width="14" height="20" fill="#7a5a3a"/><rect x="' + (290 + i * 24) + '" y="124" width="14" height="20" fill="#7a5a3a"/>').join("") +
      /* the round drum tower with vertical glass-block bands */
      '<rect x="140" y="40" width="120" height="164" fill="#efe6cf"/><path d="M140 40q60 -22 120 0" fill="#efe6cf" stroke="#c8b890" stroke-width="2"/>' +
      [158, 178, 200, 222, 242].map((x, i) => '<rect x="' + (x - 4) + '" y="50" width="8" height="90" fill="#9fd0ea" opacity="' + (i === 2 ? 1 : .75) + '" class="ss-flk' + (i % 2 ? " ss-flk2" : "") + '"/>').join("") +
      '<path d="M140 46h120M140 140h120" stroke="#c8b890" stroke-width="3"/>' +
      '<rect x="194" y="16" width="12" height="28" fill="#c8b890"/><path d="M190 16h20l-10 -12z" fill="#c8102e"/>' +
      /* the marquee */
      '<path d="M100 144h200l-10 40h-180z" fill="#1a1a1a" stroke="' + RED + '" stroke-width="3"/>' + bulbs +
      '<text x="200" y="162" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">TONIGHT ON YORK RD</text>' +
      '<text x="200" y="175" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="12" fill="' + G + '">MORE THAN MUSIC</text>' +
      '<rect x="160" y="186" width="80" height="18" fill="#3a2a1a"/><path d="M180 186v18M200 186v18M220 186v18" stroke="#c8a24a" stroke-width="1.5"/>' +
      '<rect x="0" y="204" width="400" height="22" fill="#b9b2a5"/><rect x="0" y="226" width="400" height="34" fill="#3a3a42"/>' +
      '<g class="ss-car"><rect x="0" y="226" width="56" height="16" rx="5" fill="' + P + '"/><rect x="10" y="220" width="32" height="10" rx="3" fill="#6a5ad0"/><circle cx="12" cy="243" r="5" fill="#111"/><circle cx="44" cy="243" r="5" fill="#111"/></g>' +
      person("ss-jmp", 70, 214, T, "#222") + person("ss-jmp ss-jmp2", 330, 214, G, "#222") +
      '<text x="200" y="256" text-anchor="middle" ' + font + ' font-size="10" fill="#fff8e8">THE SENATOR THEATRE · YORK ROAD · SINCE 1939</text>',
      sky("sss4", "#1c1440", "#d86a8a"));
  }

  /* 5. York Rd and E Belvedere Ave; the Bromo Seltzer Tower on the skyline behind */
  function sscorner() {
    const tower = '<rect x="252" y="40" width="44" height="100" fill="#c9a58a"/><rect x="248" y="36" width="52" height="8" fill="#e6d2bc"/>' +
      '<circle cx="274" cy="58" r="13" fill="#f7f3ea" stroke="#5a3a22" stroke-width="2"/>' + Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<rect x="' + (273.2 + Math.sin(a) * 10) + '" y="' + (57.2 - Math.cos(a) * 10) + '" width="1.6" height="1.6" fill="#5a3a22"/>'; }).join("") +
      '<path d="M274 58v-8M274 58l6 3" stroke="#5a3a22" stroke-width="1.8"/>' +
      '<path d="M256 36l18 -22l18 22z" fill="#6a7a6a"/><rect x="272" y="2" width="4" height="12" fill="#6a7a6a"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (260 + (i % 2) * 18) + '" y="' + (86 + Math.floor(i / 2) * 22) + '" width="10" height="14" fill="#ffe2a0" opacity=".7"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sss5)"/>' +
      '<g fill="#3a2a55"><rect x="0" y="92" width="70" height="40"/><rect x="74" y="84" width="40" height="48"/><rect x="200" y="96" width="44" height="36"/><rect x="306" y="80" width="40" height="52"/><rect x="350" y="98" width="50" height="34"/></g>' +
      tower +
      '<rect x="0" y="130" width="400" height="94" fill="#3a2f4a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#2c2238" stroke-width="1"/>').join("") +
      tag("SHORDIE", 16, 188, 46, P, -7) + tag("SHORDIE", 176, 216, 26, G, -4) + tag("WOW", 232, 178, 22, T, -9) + tag("PESO DA MAFIA", 16, 216, 14, "#f7f3ea", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55505a"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="ss-car ss-car2"><rect x="0" y="236" width="60" height="16" rx="5" fill="' + RED + '"/><rect x="10" y="230" width="34" height="10" rx="3" fill="#b01810"/><circle cx="12" cy="253" r="5" fill="#111"/><circle cx="48" cy="253" r="5" fill="#111"/></g>' +
      '<rect x="346" y="100" width="6" height="124" fill="#2f2f2f"/>' + sign(300, 102, 92, "York Rd") + sign(260, 128, 132, "E Belvedere Av") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="ss-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="ss-sp"><circle cx="142" cy="166" r="3" fill="' + P + '" opacity=".7"/></g><g class="ss-sp ss-sp2"><circle cx="148" cy="160" r="2" fill="' + P + '" opacity=".6"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f6f2ff">NORTHEAST BALTIMORE · YORK ROAD BY THE CITY LINE</text>',
      sky("sss5", "#1a1238", "#7a5ad0"));
  }

  window.SCENES = { ssstop: ssstop, sssound: sssound, ssship: ssship, sssenator: sssenator, sscorner: sscorner };
})();
