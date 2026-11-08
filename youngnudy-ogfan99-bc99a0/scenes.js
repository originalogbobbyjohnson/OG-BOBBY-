/* youngnudy scenes (Regions tab: Atlanta; East Atlanta / Zone 6, Bouldercrest Rd SE, DeKalb side). CSS classes and ids prefixed yn- (the page's own anim-train is kept).
   1 MARTA Route 32 (Bouldercrest Road) pulling up on Bouldercrest Rd SE by Paradise East: white MARTA bus with blue + orange bands, the 32 stop flag, pines.
   2 Paradise East Apartments, Bouldercrest Rd SE (where he grew up; "top of the 'partments", "1504"; his label is PDE = Paradise East): two-storey brick garden blocks, the monument sign.
   3 The corner gas station on Bouldercrest ("stop at the Texaco, get some petrol" - drawn unbranded): red canopy at night, pumps, price sign, a car rolling in.
   4 The fish-and-wings spot on Flat Shoals Rd ("get fat fish right on Flat Shoals", "ten-piece hot wing"): strip-plaza storefront, fryer steam, the menu board.
   5 Bouldercrest Rd SE and Cecilia Dr SE: green signs, YOUNG NUDY tagged with PDE, YA DIG and BIG SLIME, downtown's skyline with the Georgia State Capitol's gold dome behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ynbus{0%{transform:translateX(430px)}45%,100%{transform:translateX(0)}}.yn-bus{animation:ynbus 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes yncloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.yn-cloud{animation:yncloud 26s linear infinite}.yn-c2{animation-delay:-13s}' +
    '@keyframes ynglow{0%,100%{opacity:.35}50%{opacity:1}}.yn-glow{animation:ynglow 2.2s ease-in-out infinite}.yn-g2{animation-delay:-1.1s}' +
    '@keyframes ynflag{0%,100%{transform:skewX(0)}50%{transform:skewX(-12deg)}}.yn-flag{transform-box:fill-box;transform-origin:50% 0%;animation:ynflag 1.4s ease-in-out infinite}' +
    '@keyframes yncar{from{transform:translateX(-110px)}to{transform:translateX(480px)}}.yn-car{animation:yncar 6s linear infinite}' +
    '@keyframes ynsteam{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(-10px);opacity:0}}.yn-steam{animation:ynsteam 1.8s ease-out infinite}.yn-s2{animation-delay:.6s}.yn-s3{animation-delay:1.2s}' +
    '@keyframes ynbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.yn-bob{animation:ynbob 2.4s ease-in-out infinite}' +
    '@keyframes ynspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.yn-spin{transform-box:fill-box;transform-origin:50% 50%;animation:ynspin 3s linear infinite}' +
    '@keyframes yndrip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(14px);opacity:0}}.yn-drip{animation:yndrip 1.6s ease-in infinite}.yn-d2{animation-delay:.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const SLIME = "#8fd14f", PURP = "#7b3fbf", GOLD = "#f2c230", BUS = "#1f4e79", ORANGE = "#f7941d";
  const pine = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-2" y="0" width="4" height="14" fill="#4a3424"/><path d="M0 -44l14 26h-7l11 18h-36l11 -18h-7z" fill="#24502e"/></g>';

  /* 1. MARTA Route 32 Bouldercrest Road at the Paradise East stop */
  function ynbus() {
    const bus = '<g class="yn-bus"><rect x="40" y="122" width="236" height="82" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (80 + i * 38) + '" y="136" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="136" width="28" height="58" rx="2" fill="#24323e"/><rect x="40" y="172" width="236" height="7" fill="' + BUS + '"/><rect x="40" y="181" width="236" height="4" fill="' + ORANGE + '"/>' +
      '<rect x="44" y="124" width="104" height="11" rx="2" fill="#111"/><text x="96" y="132.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">32 BOULDERCREST</text>' +
      '<circle cx="88" cy="204" r="12" fill="#222"/><circle cx="88" cy="204" r="5" fill="#9aa1a8"/><circle cx="234" cy="204" r="12" fill="#222"/><circle cx="234" cy="204" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="190" r="3.5" fill="#fff6c2"/></g>';
    const block = (x, w) => '<rect x="' + x + '" y="88" width="' + w + '" height="54" fill="#8a4a36"/><path d="M' + (x - 4) + ' 88l' + (w / 2 + 4) + ' -14l' + (w / 2 + 4) + ' 14z" fill="#4a3a38"/>' +
      Array.from({ length: Math.floor(w / 22) }, (_, i) => '<rect x="' + (x + 6 + i * 22) + '" y="96" width="12" height="12" fill="#e9d79a" opacity=".8"/><rect x="' + (x + 6 + i * 22) + '" y="118" width="12" height="12" fill="#2a3442"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#yn1)"/>' +
      '<g class="yn-cloud"><ellipse cx="60" cy="40" rx="30" ry="9" fill="#fff" opacity=".8"/></g><g class="yn-cloud yn-c2"><ellipse cx="60" cy="58" rx="22" ry="7" fill="#fff" opacity=".7"/></g>' +
      pine(14, 128, 1.1) + pine(372, 126, 1.2) + pine(392, 132, .9) +
      block(30, 120) + block(170, 110) +
      '<rect x="0" y="142" width="400" height="20" fill="#c9c3b6"/><rect x="0" y="162" width="400" height="98" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="336" y="84" width="5" height="80" fill="#6b7178"/><g class="yn-flag"><rect x="316" y="62" width="46" height="40" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="339" y="76" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MARTA</text><text x="339" y="96" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">32</text></g>' +
      '<rect x="282" y="106" width="114" height="14" rx="2" fill="#111"/><text x="339" y="116" text-anchor="middle" ' + font + ' font-size="6.6" fill="#fff">BOULDERCREST RD SE</text>',
      sky("yn1", "#8ec8ef", "#f3e2bf"));
  }

  /* 2. Paradise East Apartments: brick garden blocks, the monument sign, top-floor light on */
  function ynparadise() {
    const bldg = (x, y, w, lit) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (170 - y) + '" fill="#9a5640"/>' +
      Array.from({ length: Math.floor((170 - y) / 6) }, (_, r) => '<path d="M' + x + ' ' + (y + 6 + r * 6) + 'h' + w + '" stroke="#86472f" stroke-width=".8"/>').join("") +
      '<rect x="' + (x - 3) + '" y="' + (y - 6) + '" width="' + (w + 6) + '" height="7" fill="#3e3432"/>' +
      '<rect x="' + x + '" y="' + (y + (170 - y) / 2 - 2) + '" width="' + w + '" height="4" fill="#d8d2c4"/>' +
      Array.from({ length: Math.floor(w / 30) }, (_, i) => {
        const wx = x + 8 + i * 30;
        const top = '<rect class="' + (lit === i ? "yn-glow" : "") + '" x="' + wx + '" y="' + (y + 10) + '" width="16" height="16" fill="' + (lit === i ? "#ffd86b" : "#2a3442") + '" stroke="#e9e2d2" stroke-width="2"/>';
        const bot = '<rect x="' + wx + '" y="' + (y + (170 - y) / 2 + 10) + '" width="16" height="16" fill="#2a3442" stroke="#e9e2d2" stroke-width="2"/>';
        return top + bot;
      }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#yn2)"/>' +
      '<circle cx="330" cy="40" r="14" fill="#fff4cc"/>' +
      '<g class="yn-cloud"><ellipse cx="80" cy="34" rx="34" ry="9" fill="#fff" opacity=".35"/></g>' +
      pine(20, 150, 1.4) + pine(386, 150, 1.5) +
      bldg(40, 92, 150, 3) + bldg(210, 84, 160, -1) +
      '<text x="124" y="88" text-anchor="middle" ' + font + ' font-size="9" fill="#f2efe6">1504</text>' +
      '<rect x="0" y="170" width="400" height="90" fill="#4c7a3c"/><path d="M0 200q200 -14 400 0v60h-400z" fill="#5e8c48"/>' +
      '<path d="M170 260l20 -90h20l20 90z" fill="#bdb6a6"/>' +
      '<rect x="86" y="196" width="128" height="40" rx="4" fill="#d9cfb8" stroke="#6b5a40" stroke-width="2"/><rect x="80" y="232" width="140" height="8" fill="#8a7a5c"/>' +
      '<text x="150" y="214" text-anchor="middle" ' + font + ' font-size="13" fill="#3a2a1a">PARADISE EAST</text><text x="150" y="228" text-anchor="middle" ' + font + ' font-size="8" fill="#3a2a1a">APARTMENTS</text>' +
      '<g class="yn-bob"><circle cx="300" cy="214" r="9" fill="' + SLIME + '" stroke="#2e5a18" stroke-width="2"/><path d="M293 210q7 -6 14 0" stroke="#2e5a18" stroke-width="1.5" fill="none"/></g>',
      sky("yn2", "#2c3a6a", "#e8a86a"));
  }

  /* 3. The corner gas station on Bouldercrest at night (unbranded) */
  function yngas() {
    const pump = (x) => '<rect x="' + x + '" y="150" width="24" height="44" rx="3" fill="#e8e6e0" stroke="#7a7a80" stroke-width="1.5"/><rect x="' + (x + 4) + '" y="156" width="16" height="10" fill="#1d2a36"/>' +
      '<text x="' + (x + 12) + '" y="164" text-anchor="middle" ' + font + ' font-size="6" fill="#7cf0a0">3.15</text><rect x="' + (x + 2) + '" y="190" width="20" height="6" fill="#555"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#yn3)"/>' +
      Array.from({ length: 22 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + (10 + (i * 29) % 70) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      pine(20, 150, 1.3) + pine(44, 154, 1) +
      '<rect x="250" y="104" width="130" height="90" fill="#cfc6b4"/><rect x="250" y="104" width="130" height="10" fill="' + PURP + '"/>' +
      '<rect x="262" y="124" width="70" height="44" fill="#ffe8a6" class="yn-glow"/><rect x="340" y="124" width="28" height="70" fill="#2a3442"/>' +
      '<text x="315" y="112" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">FOOD MART</text>' +
      '<rect x="60" y="92" width="190" height="16" fill="#d8262a"/><rect x="60" y="108" width="190" height="4" fill="#fff"/>' +
      '<rect x="92" y="112" width="6" height="84" fill="#d8d2c8"/><rect x="212" y="112" width="6" height="84" fill="#d8d2c8"/>' +
      '<rect x="60" y="112" width="190" height="6" fill="#fff6c8" opacity=".5" class="yn-glow yn-g2"/>' +
      pump(118) + pump(168) +
      '<rect x="20" y="70" width="6" height="126" fill="#6b7178"/><rect x="2" y="54" width="44" height="46" rx="3" fill="#111" stroke="#d8262a" stroke-width="2"/>' +
      '<text x="24" y="66" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">GAS</text><text x="24" y="82" text-anchor="middle" ' + font + ' font-size="11" fill="#7cf0a0">3.15</text><text x="24" y="95" text-anchor="middle" ' + font + ' font-size="11" fill="#7cf0a0">3.45</text>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3c3c42"/><path d="M0 232h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      '<g class="yn-car"><rect x="0" y="206" width="96" height="22" rx="7" fill="' + SLIME + '"/><path d="M16 206l14 -14h34l14 14z" fill="#5d9a2e"/><rect x="32" y="195" width="14" height="10" fill="#24323e"/><rect x="50" y="195" width="14" height="10" fill="#24323e"/>' +
      '<circle cx="22" cy="228" r="8" fill="#111"/><circle cx="76" cy="228" r="8" fill="#111"/><circle cx="95" cy="214" r="3" fill="#fff6c2"/></g>' +
      '<rect x="270" y="210" width="120" height="16" rx="2" fill="#111"/><text x="330" y="221.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#fff">BOULDERCREST RD SE</text>',
      sky("yn3", "#0c1030", "#3a2a5a"));
  }

  /* 4. The fish-and-wings spot on Flat Shoals Rd: fryer steam, ten-piece hot wings */
  function ynfish() {
    return svg(
      '<rect width="400" height="260" fill="url(#yn4)"/>' +
      '<rect x="0" y="70" width="400" height="120" fill="#c4b89e"/><rect x="0" y="62" width="400" height="10" fill="#5a4a3a"/>' +
      '<rect x="20" y="78" width="100" height="22" fill="#2a4a7a"/><text x="70" y="93" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BEAUTY SUPPLY</text>' +
      '<rect x="20" y="104" width="100" height="70" fill="#33404c"/>' +
      '<rect x="138" y="74" width="170" height="30" fill="#c8302a" stroke="' + GOLD + '" stroke-width="2"/><text x="223" y="95" text-anchor="middle" ' + font + ' font-size="16" fill="' + GOLD + '">FISH &amp; WINGS</text>' +
      '<rect x="138" y="108" width="170" height="70" fill="#ffe2a0"/><rect x="150" y="116" width="60" height="40" fill="#2a2a2a"/>' +
      '<text x="180" y="128" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">10 PC HOT WINGS</text><text x="180" y="138" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">WHITING + FRIES</text><text x="180" y="148" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">LEMON PEPPER</text>' +
      '<rect x="222" y="126" width="74" height="22" fill="#8a8a90"/><rect x="226" y="122" width="30" height="6" fill="#555"/><rect x="262" y="122" width="30" height="6" fill="#555"/>' +
      '<path class="yn-steam" d="M236 122q-4 -4 0 -7q4 -3 0 -7" stroke="#fff" stroke-width="3" fill="none" opacity=".8"/>' +
      '<path class="yn-steam yn-s2" d="M250 122q-4 -4 0 -7q4 -3 0 -7" stroke="#fff" stroke-width="3" fill="none" opacity=".8"/>' +
      '<path class="yn-steam yn-s3" d="M276 122q-4 -4 0 -7q4 -3 0 -7" stroke="#fff" stroke-width="3" fill="none" opacity=".8"/>' +
      '<rect x="320" y="78" width="70" height="22" fill="' + PURP + '"/><text x="355" y="93" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BARBER</text>' +
      '<rect x="320" y="104" width="70" height="70" fill="#33404c"/><rect x="378" y="108" width="8" height="34" rx="4" fill="#fff"/><g class="yn-glow"><path d="M378 112l8 -4M378 120l8 -4M378 128l8 -4M378 136l8 -4" stroke="#d8262a" stroke-width="2.5"/></g><path d="M378 116l8 -4M378 124l8 -4M378 132l8 -4" stroke="#1f4e79" stroke-width="2.5"/>' +
      '<rect x="0" y="178" width="400" height="22" fill="#c9c3b6"/><rect x="0" y="200" width="400" height="60" fill="#4e4e54"/><path d="M0 238h400" stroke="#fff" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<rect x="150" y="180" width="80" height="6" fill="#7a5a3a"/><rect x="186" y="186" width="8" height="14" fill="#5a4028"/>' +
      '<g transform="translate(0 -36)"><g class="yn-bob"><path d="M160 214h60l-8 20h-44z" fill="#d8262a"/><path d="M160 214h60" stroke="#fff" stroke-width="2"/>' +
      '<ellipse cx="174" cy="210" rx="7" ry="5" fill="#c46a1e"/><ellipse cx="188" cy="208" rx="7" ry="5" fill="#d4782a"/><ellipse cx="202" cy="210" rx="7" ry="5" fill="#c46a1e"/></g></g>' +
      '<rect x="10" y="214" width="120" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="70" y="227" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">FLAT SHOALS RD</text>',
      sky("yn4", "#7fb8e6", "#f0dcb0"));
  }

  /* 5. Bouldercrest Rd SE and Cecilia Dr SE: the tagged wall, downtown and the Capitol's gold dome behind */
  function yncorner() {
    const tower = (x, w, h, c) => '<rect x="' + x + '" y="' + (150 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#yn5)"/>' +
      '<circle cx="60" cy="40" r="12" fill="#ffe9b0" opacity=".9"/>' +
      tower(180, 22, 80, "#3a3550") + tower(206, 16, 104, "#45405e") + tower(226, 26, 66, "#3a3550") + tower(256, 14, 92, "#2f2b44") + tower(274, 24, 58, "#3a3550") +
      '<path d="M206 46l8 -10l8 10z" fill="#45405e"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect class="yn-glow' + (i % 2 ? " yn-g2" : "") + '" x="' + (184 + i * 7) + '" y="' + (96 + (i * 13) % 40) + '" width="2.5" height="3" fill="#ffd86b"/>').join("") +
      /* Georgia State Capitol: pale portico + drum + gold dome */
      '<rect x="110" y="122" width="70" height="28" fill="#d9d2c0"/><path d="M106 122h78l-39 -10z" fill="#cfc7b2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (118 + i * 11) + '" y="124" width="4" height="24" fill="#eee8da"/>').join("") +
      '<rect x="131" y="94" width="28" height="18" fill="#d9d2c0"/><path d="M129 95q16 -30 32 0z" fill="#e2b13c"/><rect x="143" y="58" width="4" height="10" fill="#e2b13c"/><circle cx="145" cy="56" r="2.5" fill="#e2b13c"/>' +
      '<rect x="0" y="150" width="400" height="10" fill="#55505e"/>' +
      '<rect x="0" y="120" width="400" height="140" fill="none"/>' +
      '<rect x="0" y="158" width="300" height="80" fill="#8a4a36"/>' + Array.from({ length: 13 }, (_, r) => '<path d="M0 ' + (164 + r * 6) + 'h300" stroke="#76402f" stroke-width=".8"/>').join("") +
      tag("YOUNG NUDY", 22, 204, 30, SLIME, -5) + tag("PDE", 236, 186, 20, PURP, 6) + tag("YA DIG", 196, 228, 15, GOLD, -3) + tag("BIG SLIME", 30, 230, 14, "#f2efe6", 3) +
      '<path class="yn-drip" d="M60 206v6" stroke="' + SLIME + '" stroke-width="3" stroke-linecap="round"/><path class="yn-drip yn-d2" d="M128 208v6" stroke="' + SLIME + '" stroke-width="3" stroke-linecap="round"/>' +
      '<rect x="0" y="238" width="400" height="22" fill="#5a5a60"/>' +
      '<rect x="334" y="80" width="5" height="160" fill="#7a8088"/>' + '<rect x="284" y="82" width="112" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="340" y="97" text-anchor="middle" ' + font + ' font-size="8.6" fill="#fff">BOULDERCREST RD SE</text>' +
      '<rect x="292" y="106" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="340" y="121" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">CECILIA DR SE</text>' +
      '<rect x="340" y="132" width="40" height="40" fill="#f2efe6" stroke="#111" stroke-width="1.5"/><text x="360" y="145" text-anchor="middle" ' + font + ' font-size="7" fill="#111">ZONE</text><text x="360" y="166" text-anchor="middle" ' + font + ' font-size="20" fill="#111">6</text>',
      sky("yn5", "#1c1638", "#d8785a"));
  }

  window.SCENES = { ynbus, ynparadise, yngas, ynfish, yncorner };
})();
