/* bigboi scenes (Regions tab: Atlanta; East Point - East Point St and W Cleveland Ave). CSS classes prefixed bb- (the page's own anim-train is kept).
   1 Buckhead station on MARTA's Red line, the open-air platform in the GA 400 median under Peachtree Rd. On Aug 11 2023 (hip-hop's 50th)
     Fulton County named Aug 11 "Big Boi Day" at a rooftop across Peachtree from this stop. Silver train sliding in, Buckhead towers behind.
   2 Forsyth Park, Savannah - where he was born ("son of Chico Dusty ... West Savannah"): the white tiered fountain, live oaks + Spanish moss.
   3 The Biltmore, Midtown Atlanta: Organized Noize rented its top floor to start the ATLiens sessions (Big Boi, SPIN 2016). Red-brick tower,
     the big red rooftop sign blinking at night.
   4 The dog ranch outside Atlanta - he is a registered pit bull + French bulldog breeder (40 acres): red barn, rail fence, pups running.
   5 East Point St and W Cleveland Ave in East Point (the town that gave him its key + "Big Boi Day" in 2021): green signs, BIG BOI tagged,
     the 1931 red-brick City Hall with its white columns and clock cupola behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bbblink{0%,100%{opacity:1}50%{opacity:.2}}.bb-blink{animation:bbblink 1.1s infinite}.bb-b2{animation-delay:-.37s}.bb-b3{animation-delay:-.74s}' +
    '@keyframes bbdrop{0%{transform:translateY(0);opacity:.95}100%{transform:translateY(14px);opacity:0}}.bb-drop{animation:bbdrop 1s linear infinite}.bb-d2{animation-delay:-.33s}.bb-d3{animation-delay:-.66s}' +
    '@keyframes bbsway{0%,100%{transform:skewX(0)}50%{transform:skewX(5deg)}}.bb-moss{transform-box:fill-box;transform-origin:50% 0%;animation:bbsway 3s ease-in-out infinite}.bb-m2{animation-delay:-1.5s}' +
    '@keyframes bbrun{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.bb-run{animation:bbrun 5s linear infinite}.bb-r2{animation-delay:-1.7s}.bb-r3{animation-delay:-3.4s}' +
    '@keyframes bbhop{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.bb-hop{animation:bbhop .35s ease-in-out infinite}' +
    '@keyframes bbcarR{from{transform:translateX(-50px)}to{transform:translateX(450px)}}@keyframes bbcarL{from{transform:translateX(450px)}to{transform:translateX(-50px)}}' +
    '.bb-cr{animation:bbcarR 2.6s linear infinite}.bb-cl{animation:bbcarL 3.1s linear infinite}.bb-c2{animation-delay:-1.3s}' +
    '@keyframes bbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.bb-sp{animation:bbspray 1.4s ease-out infinite}.bb-sp2{animation-delay:.5s}' +
    '@keyframes bbtw{0%,100%{opacity:.3}50%{opacity:1}}.bb-tw{animation:bbtw 1.8s ease-in-out infinite}' +
    '@keyframes bbflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.bb-flag{transform-box:fill-box;transform-origin:0% 50%;animation:bbflag 1.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const label = (x, w, txt) => '<rect x="' + x + '" y="234" width="' + w + '" height="18" rx="3" fill="#000" opacity=".55"/><text x="' + (x + w / 2) + '" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="' + (i % 5 ? "" : "bb-tw") + '" cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.8 : 1.3) + '" fill="#fff" opacity=".7"/>').join("");
  const RD = "#ce242b", PURP = "#a46cf0", GOLD = "#f4b41a", RED = "#e8433b";

  /* 1. Buckhead station: open-air platform in the GA 400 median, Peachtree Rd bridge overhead, towers behind */
  function bbstation() {
    const towers = '<g fill="#5b7186"><rect x="14" y="20" width="40" height="96"/><rect x="62" y="44" width="30" height="72"/><rect x="300" y="12" width="44" height="104"/><rect x="352" y="36" width="36" height="80"/></g>' +
      '<g fill="#7d93a8"><rect x="104" y="30" width="34" height="86"/><rect x="250" y="40" width="40" height="76"/></g>' +
      '<g fill="#bcd6ea" opacity=".55">' + Array.from({ length: 6 }, (_, i) => '<rect x="20" y="' + (28 + i * 14) + '" width="28" height="4"/><rect x="306" y="' + (20 + i * 15) + '" width="32" height="4"/>').join("") + '</g>';
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (44 + i * 48) + '" y="138" width="34" height="20" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="128" width="330" height="56" rx="8" fill="#d3d8dc" stroke="#6d757c" stroke-width="2"/>' + win +
      '<rect x="24" y="164" width="330" height="5" fill="#f08a24"/><rect x="24" y="171" width="330" height="4" fill="#1f5fa8"/>' +
      '<rect x="334" y="132" width="18" height="48" rx="4" fill="#aeb4ba"/><circle cx="344" cy="174" r="3.5" fill="#fff6c2"/>' +
      '<rect x="262" y="131" width="68" height="11" rx="2" fill="#111"/><text x="296" y="139.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">NORTH SPRINGS</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bbs1)"/>' + towers +
      /* Peachtree Rd bridge across the top of the station */
      '<rect x="0" y="62" width="400" height="18" fill="#a9a59d"/><rect x="0" y="58" width="400" height="5" fill="#77736c"/>' +
      '<g class="bb-cr"><rect x="0" y="50" width="26" height="9" rx="3" fill="' + RED + '"/></g><g class="bb-cl bb-c2"><rect x="0" y="50" width="24" height="9" rx="3" fill="#e6e6e6"/></g>' +
      /* canopy over the platform */
      '<path d="M30 96h340l-14 14H44z" fill="#e8e6e0"/><rect x="30" y="92" width="340" height="5" fill="#8c8a85"/>' +
      '<g fill="#8c8a85">' + [60, 140, 220, 300].map(x => '<rect x="' + x + '" y="110" width="5" height="76"/>').join("") + '</g>' +
      '<rect class="bb-blink" x="90" y="112" width="40" height="3" fill="#fff3c4"/><rect class="bb-blink bb-b2" x="270" y="112" width="40" height="3" fill="#fff3c4"/>' +
      '<rect x="0" y="118" width="400" height="10" fill="#5d6772"/>' +
      train +
      /* platform edge + freeway lanes on the GA 400 side */
      '<rect x="0" y="184" width="400" height="7" fill="#f2c200"/><rect x="0" y="191" width="400" height="23" fill="#8f8a80"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#2f3034"/><path d="M0 237h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="14 12"/>' +
      '<g class="bb-cl"><rect x="0" y="222" width="34" height="12" rx="4" fill="#4a6fa5"/></g><g class="bb-cr bb-c2"><rect x="0" y="242" width="34" height="12" rx="4" fill="' + GOLD + '"/></g>' +
      /* station sign */
      '<rect x="74" y="194" width="252" height="34" rx="3" fill="#111"/><text x="88" y="217" ' + font + ' font-size="17" fill="#fff">Buckhead</text>' + badge(240, 211, "RED", RD),
      sky("bbs1", "#6aa7dc", "#e9d7b6"));
  }

  /* 2. Forsyth Park, Savannah: white tiered fountain under live oaks + Spanish moss */
  function bbsavannah() {
    const oak = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M-6 0q2 -40 -4 -70h20q-6 30 -4 70z" fill="#5b4632"/>' +
      '<path d="M2 -60q-40 -6 -66 -2M2 -60q40 -10 64 0" stroke="#5b4632" stroke-width="6" fill="none"/>' +
      '<g fill="#3f6b3a"><ellipse cx="-50" cy="-74" rx="40" ry="20"/><ellipse cx="0" cy="-90" rx="46" ry="24"/><ellipse cx="50" cy="-74" rx="40" ry="20"/></g>' +
      '<g fill="#a8b29a"><path class="bb-moss" d="M-70 -62l4 30 4 -30z"/><path class="bb-moss bb-m2" d="M-36 -64l3 36 3 -36z"/><path class="bb-moss" d="M30 -66l3 34 3 -34z"/><path class="bb-moss bb-m2" d="M62 -60l4 28 4 -28z"/></g></g>';
    const drops = (x, y) => '<g fill="#cfe9ff"><circle class="bb-drop" cx="' + x + '" cy="' + y + '" r="1.6"/><circle class="bb-drop bb-d2" cx="' + (x + 6) + '" cy="' + y + '" r="1.6"/><circle class="bb-drop bb-d3" cx="' + (x - 6) + '" cy="' + y + '" r="1.6"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bbs2)"/>' +
      oak(60, 196, 1.1) + oak(345, 196, 1.05) +
      '<rect x="0" y="190" width="400" height="70" fill="#5f8f4a"/>' +
      /* basin */
      '<ellipse cx="200" cy="206" rx="120" ry="16" fill="#e9e6dc"/><ellipse cx="200" cy="203" rx="110" ry="11" fill="#7fb4cf"/>' +
      /* fountain tiers */
      '<path d="M190 200h20l-4 -40h-12z" fill="#f1efe8"/>' +
      '<ellipse cx="200" cy="160" rx="46" ry="8" fill="#f1efe8" stroke="#c9c5b8"/>' + drops(160, 164) + drops(240, 164) +
      '<path d="M194 158h12l-3 -34h-6z" fill="#f1efe8"/>' +
      '<ellipse cx="200" cy="124" rx="24" ry="5" fill="#f1efe8" stroke="#c9c5b8"/>' + drops(180, 127) + drops(220, 127) +
      '<path d="M196 122h8l-1 -20h-6z" fill="#f1efe8"/><circle cx="200" cy="98" r="6" fill="#f1efe8"/><path d="M200 92v-10" stroke="#f1efe8" stroke-width="3"/>' +
      '<g fill="#cfe9ff"><circle class="bb-drop" cx="200" cy="82" r="2"/><circle class="bb-drop bb-d2" cx="196" cy="84" r="1.6"/><circle class="bb-drop bb-d3" cx="204" cy="84" r="1.6"/></g>' +
      /* black iron fence */
      '<g stroke="#1f1f1f" stroke-width="2"><path d="M60 226h280"/>' + Array.from({ length: 29 }, (_, i) => '<path d="M' + (60 + i * 10) + ' 214v14"/>').join("") + '</g>' +
      label(130, 140, "FORSYTH PARK, SAVANNAH"),
      sky("bbs2", "#8fc3e6", "#f4e6c4"));
  }

  /* 3. The Biltmore, Midtown: red-brick tower, the red rooftop sign blinking */
  function bbbiltmore() {
    const winrows = Array.from({ length: 8 }, (_, r) => Array.from({ length: 7 }, (_, c) => '<rect x="' + (128 + c * 21) + '" y="' + (112 + r * 13) + '" width="10" height="8" fill="' + ((r * 7 + c) % 5 ? "#ffd98a" : "#3a2a24") + '" opacity=".9"/>').join("")).join("");
    const letters = '<text x="209" y="80" text-anchor="middle" ' + font + ' font-size="19" letter-spacing="3" fill="#ff3b30" stroke="#7a0f0a" stroke-width=".6">THE BILTMORE</text>' +
      Array.from({ length: 16 }, (_, i) => '<circle class="bb-blink' + (i % 3 === 1 ? " bb-b2" : i % 3 === 2 ? " bb-b3" : "") + '" cx="' + (130 + i * 10.5) + '" cy="58" r="1.8" fill="#ffd2c8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bbs3)"/>' + stars(26) +
      '<g fill="#232a40"><rect x="10" y="130" width="60" height="84"/><rect x="330" y="120" width="56" height="94"/><rect x="72" y="150" width="34" height="64"/><rect x="296" y="148" width="30" height="66"/></g>' +
      /* sign frame on the roof */
      '<g stroke="#4a4f5a" stroke-width="2"><path d="M124 86h170M124 60h170"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (126 + i * 21) + ' 60v40"/>').join("") + '</g>' +
      letters +
      /* tower */
      '<rect x="116" y="100" width="168" height="114" fill="#8a3f2f"/><rect x="112" y="96" width="176" height="6" fill="#e7ddc8"/>' + winrows +
      '<rect x="112" y="180" width="176" height="4" fill="#e7ddc8"/>' +
      /* white columned base */
      '<rect x="108" y="184" width="184" height="30" fill="#e7ddc8"/>' + [122, 152, 182, 212, 242, 272].map(x => '<rect x="' + x + '" y="188" width="6" height="26" fill="#cfc4ad"/>').join("") +
      '<rect x="186" y="194" width="28" height="20" fill="#3a2a24"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#26262b"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="bb-cr"><rect x="0" y="240" width="30" height="10" rx="3" fill="#cfd3d8"/><circle cx="28" cy="245" r="2" fill="#fff3c4"/></g>' +
      label(130, 140, "THE BILTMORE, MIDTOWN"),
      sky("bbs3", "#120f2c", "#4a2f63"));
  }

  /* 4. The dog ranch outside Atlanta: red barn, rail fence, pit bulls + a French bulldog running */
  function bbranch() {
    const dog = (cls, y, col, s) => '<g class="' + cls + '"><g transform="translate(0 ' + y + ') scale(' + s + ')"><g class="bb-hop">' +
      '<rect x="0" y="0" width="34" height="14" rx="7" fill="' + col + '"/><circle cx="36" cy="2" r="8" fill="' + col + '"/><path d="M32 -5l3 -6 4 5z" fill="' + col + '"/>' +
      '<rect x="40" y="2" width="7" height="5" rx="2" fill="' + col + '"/><circle cx="38" cy="0" r="1.2" fill="#111"/>' +
      '<path d="M2 12l-3 9M10 12l2 9M26 12l-2 9M32 12l3 9" stroke="' + col + '" stroke-width="4" stroke-linecap="round"/><path d="M0 4q-8 -6 -9 -2" stroke="' + col + '" stroke-width="3" fill="none"/></g></g></g>';
    const frenchie = '<g class="bb-run bb-r3"><g transform="translate(0 222)"><g class="bb-hop"><rect x="0" y="0" width="22" height="11" rx="5" fill="#e8dcc8"/><circle cx="24" cy="1" r="7" fill="#e8dcc8"/>' +
      '<path d="M20 -5l-1 -7 5 4zM27 -5l2 -7 3 5z" fill="#e8dcc8"/><circle cx="26" cy="0" r="1.1" fill="#111"/><path d="M3 10v7M18 10v7" stroke="#e8dcc8" stroke-width="4" stroke-linecap="round"/></g></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bbs4)"/>' +
      '<circle cx="330" cy="46" r="20" fill="#ffe08a"/>' +
      '<path d="M0 130q100 -30 200 -4t200 -10v144H0z" fill="#7aa95a"/><path d="M0 160q120 -24 230 0t170 -6v106H0z" fill="#5f9145"/>' +
      /* barn */
      '<path d="M40 150v-46l34 -26 34 26v46z" fill="#a83a2c"/><path d="M36 106l38 -30 38 30" stroke="#f1ece0" stroke-width="4" fill="none"/>' +
      '<rect x="58" y="118" width="32" height="32" fill="#7d2a20" stroke="#f1ece0" stroke-width="3"/><path d="M58 118l32 32M90 118l-32 32" stroke="#f1ece0" stroke-width="2"/>' +
      /* trees */
      '<g fill="#3f6b3a"><circle cx="160" cy="118" r="16"/><circle cx="182" cy="114" r="14"/><circle cx="380" cy="124" r="18"/></g>' +
      /* rail fence */
      '<g stroke="#8a6a46" stroke-width="4"><path d="M0 176h400M0 196h400" stroke-width="3"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (10 + i * 48) + ' 168v38"/>').join("") + '</g>' +
      dog("bb-run", 214, "#8a8580", 1) + dog("bb-run bb-r2", 222, "#6b4a32", 0.9) + frenchie +
      '<rect x="0" y="252" width="400" height="8" fill="#4f7d3a"/>' +
      label(120, 160, "THE DOG RANCH, OUTSIDE ATL"),
      sky("bbs4", "#7cc0ea", "#eaf4dc"));
  }

  /* 5. East Point St and W Cleveland Ave, the 1931 red-brick City Hall with white columns + clock cupola behind */
  function bbcorner() {
    const ticks = Array.from({ length: 12 }, (_, i) => { const a = i / 12 * Math.PI * 2; return '<path d="M' + (Math.cos(a) * 6).toFixed(1) + ' ' + (Math.sin(a) * 6).toFixed(1) + 'L' + (Math.cos(a) * 8).toFixed(1) + ' ' + (Math.sin(a) * 8).toFixed(1) + '" stroke="#333" stroke-width="1"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bbs5)"/>' +
      /* City Hall behind */
      '<g transform="translate(150 0)">' +
      '<rect x="20" y="96" width="220" height="80" fill="#9c4632"/><g stroke="#86392a" stroke-width="1">' + Array.from({ length: 7 }, (_, i) => '<path d="M20 ' + (106 + i * 10) + 'h220"/>').join("") + '</g>' +
      '<path d="M86 96l44 -22 44 22z" fill="#f1ece0"/><rect x="82" y="96" width="96" height="6" fill="#f1ece0"/>' +
      [90, 108, 126, 144, 162].map(x => '<rect x="' + x + '" y="102" width="7" height="60" fill="#f6f2e8"/>').join("") +
      '<rect x="82" y="160" width="96" height="6" fill="#f1ece0"/>' +
      /* cupola + clock */
      '<rect x="116" y="48" width="28" height="26" fill="#f1ece0"/><path d="M112 48l18 -18 18 18z" fill="#3f5f4a"/><path d="M130 30v-10" stroke="#333" stroke-width="2"/>' +
      '<g transform="translate(130 61)"><circle r="9" fill="#fffbe8" stroke="#333" stroke-width="1"/>' + ticks + '<path d="M0 0v-6M0 0l4 2" stroke="#222" stroke-width="1.4"/></g>' +
      '<g class="bb-flag"><rect x="144" y="20" width="22" height="13" fill="#3a5ba0"/><rect x="144" y="27" width="22" height="3" fill="#fff"/></g><path d="M144 18v40" stroke="#bbb" stroke-width="1.5"/>' +
      '<g fill="#3c6b3a"><circle cx="24" cy="160" r="18"/><circle cx="236" cy="158" r="18"/></g></g>' +
      /* wall */
      '<rect x="0" y="108" width="250" height="98" fill="#5c5f6a"/><g stroke="#50535d" stroke-width="1">' + Array.from({ length: 9 }, (_, i) => '<path d="M0 ' + (118 + i * 10) + 'h250"/>').join("") + '</g>' +
      tag("PURPLE RIBBON", 24, 130, 15, RED, -2) + tag("BIG BOI", 14, 176, 40, PURP, -6) + tag("FAT SAX", 128, 200, 24, GOLD, -4) +
      '<g fill="' + PURP + '"><circle class="bb-sp" cx="232" cy="178" r="3"/><circle class="bb-sp bb-sp2" cx="224" cy="186" r="2.5"/></g>' +
      /* sign pole */
      '<rect x="330" y="150" width="6" height="60" fill="#6b6b6b"/><rect x="330" y="140" width="6" height="12" fill="#6b6b6b"/>' + sign(278, 140, 106, "East Point St") + sign(276, 164, 112, "W Cleveland Ave") +
      '<rect x="0" y="206" width="400" height="54" fill="#3a3a3e"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>',
      sky("bbs5", "#7cc6e8", "#f6e3b4"));
  }

  window.SCENES = { bbstation, bbsavannah, bbbiltmore, bbranch, bbcorner };
})();
