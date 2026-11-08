/* tlc scenes (Regions tab: Atlanta; TLC formed in Atlanta in 1990 - T-Boz raised in Atlanta from age nine, Chilli a Benjamin E. Mays High grad, Left Eye came down from Philly).
   CSS classes prefixed tl- (the page's own anim-train is kept on the bus).
   1 MARTA Route 832 Grant Park bus rolling down Georgia Ave SE into Summerhill, toward the TLC mural block.
   2 The "Crazy, Sexy, Cool" mural on the GABS House on Terry St SE, Summerhill (Dan Stone, Oct 2022): drawn as color fields + lettering, no faces, a paint lift moving.
   3 Benjamin E. Mays High School in Southwest Atlanta (Chilli, class of '89): long modern brick front, the flag waving, a school bus pulling off.
   4 The Atlanta hair salon where a teenage T-Boz apprenticed and won her first hair contest at 14 (drawn generic, no name): chairs, a hood dryer, a trophy, the dryer humming.
   5 Georgia Ave SE and Terry St SE in Summerhill: green signs, TLC tagged with NO SCRUBS and 2ND NATURE, downtown's skyline behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tlglow{0%,100%{opacity:.45}50%{opacity:1}}.tl-glow{animation:tlglow 2.2s ease-in-out infinite}.tl-g2{animation-delay:-1.1s}' +
    '@keyframes tllift{0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}.tl-lift{animation:tllift 6s ease-in-out infinite}' +
    '@keyframes tldrip{0%{transform:scaleY(.2)}60%,100%{transform:scaleY(1)}}.tl-drip{transform-box:fill-box;transform-origin:50% 0;animation:tldrip 3s ease-in infinite}.tl-d2{animation-delay:-1s}.tl-d3{animation-delay:-2s}' +
    '@keyframes tlflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.tl-flag{transform-box:fill-box;transform-origin:0 50%;animation:tlflag 1.6s ease-in-out infinite}' +
    '@keyframes tlbus2{0%{transform:translateX(0)}100%{transform:translateX(-520px)}}.tl-sbus{animation:tlbus2 9s linear infinite}' +
    '@keyframes tlhum{0%,100%{transform:translateY(0)}50%{transform:translateY(-1.5px)}}.tl-hum{animation:tlhum .18s linear infinite}' +
    '@keyframes tlair{0%{transform:translate(0,0);opacity:.8}100%{transform:translate(-22px,-18px);opacity:0}}.tl-air{animation:tlair 1.4s ease-out infinite}.tl-a2{animation-delay:-.5s}.tl-a3{animation-delay:-1s}' +
    '@keyframes tlspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tl-sp{animation:tlspray 1.4s ease-out infinite}.tl-sp2{animation-delay:.45s}' +
    '@keyframes tlspark{0%,100%{opacity:.15}50%{opacity:1}}.tl-spk{animation:tlspark 1.6s ease-in-out infinite}.tl-k2{animation-delay:-.5s}.tl-k3{animation-delay:-1.1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const CYAN = "#3ee0ff", PINK = "#ff4fa3", YEL = "#ffd23f", MBLUE = "#0a5fb4", MORANGE = "#f58025";
  const tree = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-3" y="-4" width="6" height="22" fill="#5a3e2a"/><circle cx="0" cy="-16" r="18" fill="' + (c || "#3f7a3a") + '"/><circle cx="-12" cy="-6" r="12" fill="' + (c || "#3f7a3a") + '"/><circle cx="12" cy="-6" r="12" fill="' + (c || "#3f7a3a") + '"/></g>';
  const bungalow = (x, y, c) => '<g transform="translate(' + x + ' ' + y + ')"><path d="M0 26L30 4L60 26z" fill="#5d4a3a"/><rect x="4" y="24" width="52" height="34" fill="' + c + '"/><rect x="0" y="30" width="60" height="4" fill="#efe9dc"/>' +
    '<rect x="10" y="38" width="12" height="12" fill="#2a3442"/><rect x="38" y="38" width="12" height="12" fill="#2a3442"/><rect x="25" y="40" width="10" height="18" fill="#7a4a2a"/></g>';
  const skyline = (y, c) => '<g fill="' + c + '"><rect x="40" y="' + (y - 40) + '" width="22" height="40"/><rect x="66" y="' + (y - 62) + '" width="18" height="62"/><path d="M66 ' + (y - 62) + 'l9 -12l9 12z"/>' +
    '<rect x="90" y="' + (y - 48) + '" width="26" height="48"/><rect x="122" y="' + (y - 84) + '" width="20" height="84"/><path d="M122 ' + (y - 84) + 'h20l-10 -18z"/><rect x="131" y="' + (y - 112) + '" width="2" height="12"/>' +
    '<rect x="148" y="' + (y - 56) + '" width="24" height="56"/><rect x="178" y="' + (y - 70) + '" width="16" height="70"/><rect x="200" y="' + (y - 44) + '" width="30" height="44"/></g>';

  /* 1. MARTA Route 832 Grant Park on Georgia Ave SE in Summerhill: white bus with the blue + orange bands, the stop flag, the little bungalows */
  function tlbus() {
    const bus = '<g class="anim-train"><rect x="40" y="102" width="300" height="86" rx="10" fill="#f4f5f7" stroke="#5b6470" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (56 + i * 42) + '" y="114" width="34" height="34" rx="3" fill="#1d2a38"/>').join("") +
      '<rect x="306" y="110" width="30" height="50" rx="3" fill="#24384c"/><rect x="40" y="156" width="300" height="8" fill="' + MBLUE + '"/><rect x="40" y="164" width="300" height="5" fill="' + MORANGE + '"/>' +
      '<rect x="58" y="104" width="140" height="9" rx="2" fill="#111"/><text x="128" y="111.6" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb020">832 GRANT PARK</text>' +
      '<circle cx="96" cy="190" r="15" fill="#1b1b1b"/><circle cx="96" cy="190" r="6" fill="#9aa2ad"/><circle cx="282" cy="190" r="15" fill="#1b1b1b"/><circle cx="282" cy="190" r="6" fill="#9aa2ad"/>' +
      '<circle cx="333" cy="176" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tl1)"/>' +
      '<circle cx="62" cy="42" r="18" fill="#fff0b8" opacity=".9"/>' + skyline(118, "#7d8fa8") +
      bungalow(6, 70, "#e9c46a") + bungalow(250, 72, "#8ecae6") + tree(120, 112, .9) + tree(214, 110, 1) + tree(392, 108, .9) + bungalow(318, 68, "#f4a6c8") +
      '<rect x="0" y="128" width="400" height="12" fill="#c9c3b6"/><rect x="0" y="140" width="400" height="70" fill="#3e4046"/><rect x="0" y="178" width="400" height="3" fill="#f2c200" opacity=".85"/>' +
      bus +
      '<rect x="0" y="208" width="400" height="52" fill="#a19c92"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 208v52" stroke="#8c877d"/>').join("") +
      '<rect x="360" y="80" width="5" height="150" fill="#4a4f57"/><rect x="344" y="76" width="40" height="44" rx="3" fill="' + MBLUE + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="364" y="91" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS STOP</text><rect x="349" y="96" width="30" height="17" rx="3" fill="' + MORANGE + '"/><text x="364" y="109" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">832</text>' +
      sign(220, 30, 118, "Georgia Ave SE") + sign(236, 54, 86, "Terry St SE") + '<rect x="276" y="52" width="4" height="2" fill="#fff"/>',
      sky("tl1", "#7cc6f0", "#ffe1b0"));
  }

  /* 2. The "Crazy, Sexy, Cool" mural on the GABS House, Terry St SE (Dan Stone, 2022): three big color fields, the lettering, a paint lift rising and falling */
  function tlmural() {
    return svg(
      '<rect width="400" height="260" fill="url(#tl2)"/>' +
      tree(20, 120, 1.1, "#2f6a34") + tree(384, 118, 1.1, "#2f6a34") +
      '<rect x="40" y="40" width="320" height="150" fill="#e8e1d2"/><rect x="40" y="34" width="320" height="8" fill="#6d6458"/>' +
      '<rect x="52" y="52" width="96" height="126" rx="4" fill="' + PINK + '"/><rect x="152" y="52" width="96" height="126" rx="4" fill="' + CYAN + '"/><rect x="252" y="52" width="96" height="126" rx="4" fill="' + YEL + '"/>' +
      /* swooshes + stars over the fields, no figures */
      '<path d="M58 160 Q100 90 142 150" stroke="#fff" stroke-width="6" fill="none" opacity=".75"/><path d="M158 80 Q200 150 242 90" stroke="#0b2a5a" stroke-width="6" fill="none" opacity=".55"/><path d="M258 150 Q300 70 342 130" stroke="#d12b6a" stroke-width="6" fill="none" opacity=".6"/>' +
      [[80, 74], [120, 120], [196, 66], [226, 140], [284, 98], [330, 70]].map((p, i) => '<path class="tl-spk' + (i % 3 === 1 ? " tl-k2" : i % 3 === 2 ? " tl-k3" : "") + '" d="M' + p[0] + ' ' + (p[1] - 8) + 'l2.5 5.5l5.5 2.5l-5.5 2.5l-2.5 5.5l-2.5 -5.5l-5.5 -2.5l5.5 -2.5z" fill="#fff"/>').join("") +
      '<text x="100" y="98" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="22" fill="#fff" stroke="#3a0a24" stroke-width="2" paint-order="stroke">CRAZY</text>' +
      '<text x="200" y="98" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="22" fill="#fff" stroke="#06324a" stroke-width="2" paint-order="stroke">SEXY</text>' +
      '<text x="300" y="98" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="22" fill="#fff" stroke="#5a4206" stroke-width="2" paint-order="stroke">COOL</text>' +
      '<path class="tl-drip" d="M96 178v14" stroke="' + PINK + '" stroke-width="3"/><path class="tl-drip tl-d2" d="M206 178v18" stroke="' + CYAN + '" stroke-width="3"/><path class="tl-drip tl-d3" d="M318 178v12" stroke="' + YEL + '" stroke-width="3"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#9b968c"/><rect x="0" y="190" width="400" height="4" fill="#d9d3c7"/>' +
      /* scissor lift */
      '<g class="tl-lift"><rect x="262" y="150" width="56" height="8" fill="#f2b632" stroke="#5a4206" stroke-width="1.5"/><path d="M262 150v-14h56v14" stroke="#5a4206" stroke-width="2" fill="none"/>' +
      '<rect x="286" y="128" width="8" height="10" rx="2" fill="#333"/><path d="M294 132l10 -6" stroke="#333" stroke-width="2"/><circle cx="306" cy="125" r="2.2" fill="' + PINK + '"/></g>' +
      '<path d="M266 160L314 196M314 160L266 196" stroke="#7a6a3a" stroke-width="3"/><rect x="256" y="196" width="68" height="12" rx="2" fill="#f2b632" stroke="#5a4206" stroke-width="1.5"/><circle cx="266" cy="212" r="5" fill="#222"/><circle cx="314" cy="212" r="5" fill="#222"/>' +
      '<rect x="60" y="214" width="120" height="22" rx="3" fill="#2a2a2a"/><text x="120" y="229" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">TERRY ST SE</text>',
      sky("tl2", "#69b8ec", "#cfeaf8"));
  }

  /* 3. Benjamin E. Mays High School, Southwest Atlanta (Chilli, class of '89): long brick front, white entry band, flagpole waving, a yellow bus pulling off */
  function tlmays() {
    return svg(
      '<rect width="400" height="260" fill="url(#tl3)"/>' +
      '<circle cx="330" cy="44" r="18" fill="#fff3c0" class="tl-glow"/>' + tree(16, 124, 1.2) + tree(60, 118, 1) + tree(360, 120, 1.1) +
      '<rect x="30" y="92" width="340" height="94" fill="#a8543a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M30 ' + (98 + i * 8) + 'h340" stroke="#8f4530" stroke-width="1"/>').join("") +
      '<rect x="30" y="84" width="340" height="10" fill="#efe9dc"/>' +
      [46, 96, 256, 306].map(x => '<rect x="' + x + '" y="108" width="44" height="30" fill="#2a4356" stroke="#efe9dc" stroke-width="2"/><path d="M' + (x + 22) + ' 108v30M' + x + ' 123h44" stroke="#efe9dc" stroke-width="1.5"/>').join("") +
      '<rect x="146" y="70" width="108" height="20" fill="#f4f1ea" stroke="#9b968a"/><text x="200" y="84" text-anchor="middle" ' + font + ' font-size="8.5" fill="#3a3a3a">BENJAMIN E. MAYS HIGH</text>' +
      '<rect x="160" y="112" width="80" height="74" fill="#2e3d4c"/><path d="M200 112v74" stroke="#9fb3c4" stroke-width="2"/><rect x="164" y="116" width="32" height="34" fill="#7fa3bf" opacity=".6"/><rect x="204" y="116" width="32" height="34" fill="#7fa3bf" opacity=".6"/>' +
      '<rect x="152" y="90" width="96" height="6" fill="#f4f1ea"/>' +
      '<rect x="20" y="30" width="3" height="156" fill="#cfd4da"/><g class="tl-flag"><rect x="23" y="32" width="30" height="18" fill="#c8102e"/><rect x="23" y="38" width="30" height="6" fill="#fff"/><rect x="23" y="32" width="12" height="10" fill="#1d3f8a"/></g>' +
      '<rect x="0" y="186" width="400" height="74" fill="#5f9a4a"/><rect x="0" y="206" width="400" height="34" fill="#45474d"/><path d="M0 223h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="tl-sbus"><g transform="translate(420 0)"><rect x="0" y="190" width="118" height="40" rx="6" fill="#f6b80f" stroke="#7a5a00" stroke-width="1.5"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (20 + i * 19) + '" y="196" width="14" height="13" rx="2" fill="#2a3442"/>').join("") + '<rect x="4" y="196" width="12" height="24" rx="2" fill="#2a3442"/>' +
      '<rect x="0" y="214" width="118" height="3" fill="#222"/><circle cx="24" cy="232" r="7" fill="#1b1b1b"/><circle cx="96" cy="232" r="7" fill="#1b1b1b"/><circle cx="2" cy="220" r="2.5" fill="#fff6c2"/></g></g>',
      sky("tl3", "#86c8f0", "#f4e6c0"));
  }

  /* 4. The hair salon where a young T-Boz apprenticed (generic): checker floor, two chairs, mirrors, a hood dryer humming, the little first-place trophy on the shelf */
  function tlsalon() {
    const chair = x => '<g transform="translate(' + x + ' 0)"><rect x="-4" y="214" width="48" height="6" rx="3" fill="#333"/><rect x="16" y="190" width="8" height="26" fill="#888"/>' +
      '<rect x="0" y="168" width="40" height="24" rx="6" fill="' + PINK + '" stroke="#7a1a4a" stroke-width="1.5"/><rect x="4" y="132" width="32" height="40" rx="6" fill="' + PINK + '" stroke="#7a1a4a" stroke-width="1.5"/>' +
      '<rect x="-4" y="164" width="8" height="6" rx="2" fill="#333"/><rect x="36" y="164" width="8" height="6" rx="2" fill="#333"/></g>';
    const floor = Array.from({ length: 40 }, (_, i) => { const c = i % 10, r = Math.floor(i / 10); return '<rect x="' + (c * 40) + '" y="' + (220 + r * 10) + '" width="40" height="10" fill="' + ((c + r) % 2 ? "#1d1d24" : "#f1ede6") + '"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="#f7d6e4"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 0v220" stroke="#efc3d6" stroke-width="6"/>').join("") +
      [40, 160].map(x => '<rect x="' + x + '" y="50" width="90" height="96" rx="6" fill="#cfe9f2" stroke="#b9a07a" stroke-width="5"/><path d="M' + (x + 14) + ' 70l20 -10M' + (x + 14) + ' 86l34 -18" stroke="#fff" stroke-width="3" opacity=".8"/>').join("") +
      '<rect x="40" y="150" width="210" height="8" fill="#b9a07a"/>' +
      '<g fill="#fff"><rect x="56" y="140" width="8" height="10" rx="2" fill="' + CYAN + '"/><rect x="72" y="136" width="6" height="14" rx="2" fill="' + YEL + '"/><rect x="186" y="138" width="10" height="12" rx="2" fill="' + PINK + '"/></g>' +
      chair(64) + chair(184) +
      /* hood dryer */
      '<g class="tl-hum"><path d="M300 108 Q300 76 336 76 Q372 76 372 108 Z" fill="#e8e8ee" stroke="#777" stroke-width="2"/><rect x="298" y="106" width="76" height="8" rx="3" fill="#bbb"/></g>' +
      '<path d="M336 114v40" stroke="#777" stroke-width="5"/><rect x="306" y="150" width="60" height="22" rx="6" fill="' + CYAN + '" stroke="#0b5a6a" stroke-width="1.5"/><rect x="312" y="172" width="8" height="42" fill="#888"/><rect x="352" y="172" width="8" height="42" fill="#888"/><rect x="300" y="210" width="72" height="6" rx="3" fill="#333"/>' +
      '<g class="tl-air"><path d="M292 112q-6 -4 0 -8" stroke="#9ab" stroke-width="2" fill="none"/></g><g class="tl-air tl-a2"><path d="M380 112q6 -4 0 -8" stroke="#9ab" stroke-width="2" fill="none"/></g><g class="tl-air tl-a3"><path d="M286 104q-6 -4 0 -8" stroke="#9ab" stroke-width="2" fill="none"/></g>' +
      /* shelf + trophy */
      '<rect x="276" y="40" width="110" height="6" fill="#b9a07a"/><path d="M318 16h22v8q0 10 -11 12q-11 -2 -11 -12z" fill="' + YEL + '" stroke="#8a6a1a" stroke-width="1.5"/><rect x="326" y="34" width="6" height="4" fill="' + YEL + '"/><rect x="320" y="36" width="18" height="4" fill="#8a6a1a"/>' +
      '<path d="M318 18q-7 0 -6 6q1 4 6 4M340 18q7 0 6 6q-1 4 -6 4" stroke="#8a6a1a" stroke-width="1.5" fill="none"/><text x="356" y="34" ' + font + ' font-size="8" fill="#7a1a4a">1ST</text>' +
      floor,
      "");
  }

  /* 5. Georgia Ave SE and Terry St SE, Summerhill: green signs, a brick wall tagged TLC, NO SCRUBS, 2ND NATURE, downtown's skyline lit behind */
  function tlcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#tl5)"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle class="' + (i % 4 ? "" : "tl-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>').join("") +
      '<g transform="translate(120 0)">' + skyline(112, "#283a5e") + '</g>' +
      [168, 196, 248, 262, 290].map((x, i) => '<rect class="tl-glow' + (i % 2 ? " tl-g2" : "") + '" x="' + x + '" y="' + (60 + (i * 9) % 30) + '" width="3" height="3" fill="#ffd98a"/>').join("") +
      '<rect x="0" y="112" width="400" height="112" fill="#8e4a36"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M0 ' + (120 + i * 8) + 'h400" stroke="#743b2b" stroke-width="1"/>').join("") +
      Array.from({ length: 28 }, (_, i) => '<path d="M' + ((i % 2 ? 10 : 0) + Math.floor(i / 2) * 30) + ' ' + (112 + (i % 14) * 8) + 'v8" stroke="#743b2b"/>').join("") +
      tag("TLC", 20, 196, 64, CYAN, -6) + tag("NO SCRUBS", 150, 170, 22, PINK, -4) + tag("2ND NATURE", 150, 206, 18, YEL, -3) +
      '<g class="tl-sp"><circle cx="268" cy="196" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="tl-sp tl-sp2"><circle cx="274" cy="190" r="2" fill="' + PINK + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55534e"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(290, 94, 110, "Georgia Ave SE") + sign(304, 120, 90, "Terry St SE"),
      sky("tl5", "#141a3c", "#c9744e"));
  }

  window.SCENES = { tlbus: tlbus, tlmural: tlmural, tlmays: tlmays, tlsalon: tlsalon, tlcorner: tlcorner };
})();
