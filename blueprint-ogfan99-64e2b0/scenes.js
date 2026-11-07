/* blueprint scenes (Regions tab: St. Louis + Ohio; South Side, Columbus, Ohio). CSS classes and ids prefixed bp- (the page's own anim-train is kept, used on the bus).
   1 COTA Line 4 (Indianola / Lockbourne) pulling up to the E Livingston Ave & Parsons Ave stop on the South Side (real stop #2013, shelter + bench).
   2 The Short North arches over N High St at night: the lit steel arches, gallery windows, cars rolling under (Columbus' arts strip, the art-head side of Print).
   3 Scribble Jam in Cincinnati (named in "Radio-Inactive"): the battle stage, turntables, a crowd with hands up, the banner, lights chasing.
   4 I-71 at sunrise ("Persevere": get in the car, open roads; "Trouble on My Mind": load up a van, drive to another city): the tour van, the green signs.
   5 Parsons Ave and Thurman Ave on the South Side: green signs, BLUEPRINT tagged on the brick, the LeVeque Tower (cream art deco, lit top) downtown behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bpflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.bp-flk{animation:bpflick 2.2s infinite}.bp-flk2{animation-delay:.7s}' +
    '@keyframes bpglow{0%,100%{opacity:.35}50%{opacity:1}}.bp-gl{animation:bpglow 1.8s ease-in-out infinite}.bp-gl2{animation-delay:.45s}.bp-gl3{animation-delay:.9s}.bp-gl4{animation-delay:1.35s}' +
    '@keyframes bpcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.bp-car{animation:bpcar 7s linear infinite}.bp-car2{animation-delay:-3.5s}' +
    '@keyframes bpcarL{from{transform:translateX(520px)}to{transform:translateX(-120px)}}.bp-carL{animation:bpcarL 6s linear infinite}' +
    '@keyframes bpwave{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.bp-cr{animation:bpwave .6s ease-in-out infinite}.bp-cr2{animation-delay:-.3s}' +
    '@keyframes bpspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.bp-spin{transform-box:fill-box;transform-origin:50% 50%;animation:bpspin 1.8s linear infinite}' +
    '@keyframes bpvan{0%,100%{transform:translate(0,0)}50%{transform:translate(0,-2px)}}.bp-van{animation:bpvan .5s ease-in-out infinite}' +
    '@keyframes bpdash{from{transform:translateX(0)}to{transform:translateX(-42px)}}.bp-dash{animation:bpdash .5s linear infinite}' +
    '@keyframes bprise{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.bp-sun{animation:bprise 4s ease-in-out infinite}' +
    '@keyframes bpspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bp-sp{animation:bpspray 1.4s ease-out infinite}.bp-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const BLUE = "#5fb4ff", GOLD = "#ffc845", RED = "#e2523b", COTA = "#1f4e79";
  const stars = n => Array.from({ length: n }, (_, i) => '<circle cx="' + ((i * 53 + 11) % 400) + '" cy="' + ((i * 29) % 90 + 6) + '" r="1.1" fill="#fff" opacity=".7"/>').join("");

  /* 1. COTA Line 4 at E Livingston Ave & Parsons Ave */
  function bpstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 40) + '" y="122" width="32" height="26" rx="3" fill="#22303c"/>').join("");
    const bus = '<g class="anim-train"><rect x="48" y="110" width="326" height="86" rx="10" fill="#f4f5f3" stroke="#98a0a6" stroke-width="2"/>' + win +
      '<rect x="48" y="156" width="326" height="11" fill="' + COTA + '"/><rect x="48" y="169" width="326" height="4" fill="' + GOLD + '"/>' +
      '<rect x="52" y="120" width="20" height="54" rx="2" fill="#22303c"/>' +
      '<rect x="72" y="113" width="214" height="7" rx="2" fill="#111"/><text x="179" y="118.6" text-anchor="middle" ' + font + ' font-size="5.4" fill="#ffb347">4 INDIANOLA / LOCKBOURNE</text>' +
      '<text x="330" y="186" text-anchor="middle" ' + font + ' font-size="11" fill="' + COTA + '">COTA</text>' +
      '<circle cx="110" cy="198" r="15" fill="#1b1b1b"/><circle cx="110" cy="198" r="6" fill="#9aa1a6"/><circle cx="318" cy="198" r="15" fill="#1b1b1b"/><circle cx="318" cy="198" r="6" fill="#9aa1a6"/>' +
      '<circle class="bp-flk" cx="368" cy="184" r="4" fill="#fff6c2"/></g>';
    const shelter = '<g><rect x="6" y="100" width="40" height="4" fill="#4a5560"/><rect x="8" y="104" width="2.5" height="110" fill="#4a5560"/><rect x="42" y="104" width="2.5" height="110" fill="#4a5560"/>' +
      '<rect x="11" y="106" width="30" height="80" fill="#a9d2f2" opacity=".25"/><rect x="12" y="196" width="28" height="4" fill="#6b4a2f"/></g>';
    const pole = '<rect x="384" y="70" width="4" height="146" fill="#666"/><rect x="356" y="62" width="40" height="40" rx="3" fill="' + COTA + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="376" y="80" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUS</text><circle cx="376" cy="91" r="7" fill="#fff"/><text x="376" y="94.5" text-anchor="middle" ' + font + ' font-size="9" fill="' + COTA + '">4</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#bps1)"/>' +
      '<g fill="#2a3442"><rect x="0" y="70" width="70" height="60"/><rect x="74" y="58" width="56" height="72"/><rect x="136" y="76" width="80" height="54"/><rect x="222" y="64" width="64" height="66"/><rect x="292" y="80" width="108" height="50"/></g>' +
      Array.from({ length: 14 }, (_, i) => '<rect class="bp-gl' + (i % 2 ? " bp-gl2" : "") + '" x="' + (12 + i * 28) + '" y="' + (86 + (i % 3) * 12) + '" width="6" height="6" fill="' + GOLD + '" opacity=".6"/>').join("") +
      '<rect x="0" y="210" width="400" height="50" fill="#3d4148"/><rect x="0" y="208" width="400" height="4" fill="#cfd3d8"/>' +
      shelter + bus + pole +
      '<rect x="64" y="20" width="272" height="34" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="35" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">E LIVINGSTON AVE &amp; PARSONS AVE</text>' +
      '<rect x="160" y="40" width="22" height="11" rx="5.5" fill="' + COTA + '"/><text x="171" y="48.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">4</text>' +
      '<text x="190" y="48.5" ' + font + ' font-size="8" fill="#cfd3d8">SOUTH SIDE · COLUMBUS</text>',
      sky("bps1", "#0d1b33", "#3c5d86"));
  }

  /* 2. The Short North arches over N High St */
  function bparches() {
    const arch = (cx, s, cls) => {
      const w = 150 * s, h = 70 * s, y = 150 - 60 * s;
      const bulbs = Array.from({ length: 11 }, (_, i) => { const t = i / 10, x = cx - w / 2 + w * t, yy = y + h - Math.sin(Math.PI * t) * h; return '<circle class="bp-gl bp-gl' + (1 + i % 4) + '" cx="' + x.toFixed(1) + '" cy="' + yy.toFixed(1) + '" r="' + (2.4 * s).toFixed(1) + '" fill="#fff3c4"/>'; }).join("");
      return '<g class="' + (cls || "") + '"><path d="M' + (cx - w / 2) + ' ' + (y + h) + 'Q' + cx + ' ' + (y - h) + ' ' + (cx + w / 2) + ' ' + (y + h) + '" fill="none" stroke="#3b4a5c" stroke-width="' + (5 * s) + '"/>' +
        '<rect x="' + (cx - w / 2 - 2 * s) + '" y="' + (y + h) + '" width="' + (4 * s) + '" height="' + (150 - y - h + 40) + '" fill="#3b4a5c"/><rect x="' + (cx + w / 2 - 2 * s) + '" y="' + (y + h) + '" width="' + (4 * s) + '" height="' + (150 - y - h + 40) + '" fill="#3b4a5c"/>' + bulbs + '</g>';
    };
    const shops = (x, w, h, c) => '<rect x="' + x + '" y="' + (190 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' + '<rect x="' + (x + 6) + '" y="' + (196 - 34) + '" width="' + (w - 12) + '" height="28" fill="#ffd77a" opacity=".85"/>' +
      '<rect x="' + (x + 6) + '" y="' + (196 - h + 18) + '" width="' + (w / 2 - 9) + '" height="16" fill="#ffd77a" opacity=".5"/><rect x="' + (x + w / 2 + 3) + '" y="' + (196 - h + 18) + '" width="' + (w / 2 - 9) + '" height="16" fill="#ffd77a" opacity=".5"/>';
    const car = (cls, col, y) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="54" height="16" rx="5" fill="' + col + '"/><rect x="10" y="' + (y - 9) + '" width="30" height="11" rx="4" fill="' + col + '"/><circle cx="12" cy="' + (y + 16) + '" r="5" fill="#111"/><circle cx="42" cy="' + (y + 16) + '" r="5" fill="#111"/><circle cx="52" cy="' + (y + 6) + '" r="2.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bps2)"/>' + stars(22) +
      shops(0, 70, 96, "#5a3a3a") + shops(70, 60, 80, "#3d4a5c") + shops(270, 64, 88, "#4a3d5c") + shops(334, 66, 100, "#5c4a3a") +
      '<rect x="0" y="190" width="400" height="70" fill="#2b2d33"/><path d="M0 226h400" stroke="' + GOLD + '" stroke-width="2.5" stroke-dasharray="22 14"/>' +
      arch(200, 0.55) + arch(200, 0.8) + arch(200, 1.15) +
      car("bp-car", RED, 206) + car("bp-carL", BLUE, 232) +
      '<rect x="104" y="236" width="192" height="20" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/><text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">N HIGH ST · SHORT NORTH</text>' +
      '<text x="35" y="104" text-anchor="middle" ' + font + ' font-size="8" fill="#ffd77a">GALLERY</text><text x="367" y="100" text-anchor="middle" ' + font + ' font-size="8" fill="#ffd77a">ART HOP</text>',
      sky("bps2", "#0a1024", "#2c2350"));
  }

  /* 3. Scribble Jam battle stage, Cincinnati */
  function bpscribble() {
    const crowd = Array.from({ length: 16 }, (_, i) => { const x = 10 + i * 25, c = i % 2 ? "bp-cr bp-cr2" : "bp-cr"; return '<g class="' + c + '"><circle cx="' + x + '" cy="214" r="9" fill="#1a1a22"/><rect x="' + (x - 11) + '" y="222" width="22" height="40" rx="6" fill="#1a1a22"/>' +
      (i % 3 === 0 ? '<path d="M' + (x + 6) + ' 222l8 -24" stroke="#1a1a22" stroke-width="5" stroke-linecap="round"/>' : "") + '</g>'; }).join("");
    const lights = [60, 140, 260, 340].map((x, i) => '<path class="bp-gl bp-gl' + (i + 1) + '" d="M' + x + ' 30L' + (x - 40) + ' 160L' + (x + 40) + ' 160z" fill="' + (i % 2 ? BLUE : GOLD) + '" opacity=".25"/><circle cx="' + x + '" cy="30" r="6" fill="#fff"/>').join("");
    const deck = (x) => '<rect x="' + x + '" y="150" width="46" height="10" rx="2" fill="#2a2a2a"/><g class="bp-spin"><circle cx="' + (x + 18) + '" cy="152" r="12" fill="#111" stroke="#444"/><circle cx="' + (x + 18) + '" cy="152" r="4" fill="' + RED + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bps3)"/>' +
      '<rect x="0" y="24" width="400" height="8" fill="#333"/>' + lights +
      '<rect x="70" y="40" width="260" height="34" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="64" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="22" fill="' + GOLD + '">SCRIBBLE JAM</text>' +
      '<rect x="20" y="160" width="360" height="40" fill="#3a2e28"/><rect x="20" y="158" width="360" height="4" fill="#5a4a40"/>' +
      '<rect x="150" y="140" width="100" height="20" fill="#222"/>' + deck(152) + deck(202) +
      '<rect x="78" y="96" width="3" height="64" fill="#999"/><circle cx="79.5" cy="94" r="5" fill="#666"/>' +
      '<rect x="318" y="96" width="3" height="64" fill="#999"/><circle cx="319.5" cy="94" r="5" fill="#666"/>' +
      '<text x="200" y="186" text-anchor="middle" ' + font + ' font-size="11" fill="#f0e6da" letter-spacing="3">CINCINNATI · MC BATTLE</text>' +
      crowd,
      sky("bps3", "#120a1e", "#3a1d3a"));
  }

  /* 4. I-71 at sunrise, the tour van */
  function bproad() {
    const van = '<g class="bp-van"><rect x="150" y="168" width="110" height="46" rx="6" fill="#f3f3f0" stroke="#888" stroke-width="1.5"/><path d="M260 180h18q8 0 10 10v24h-28z" fill="#f3f3f0" stroke="#888" stroke-width="1.5"/>' +
      '<rect x="264" y="183" width="18" height="12" rx="2" fill="#2a3a4c"/><rect x="160" y="176" width="30" height="14" rx="2" fill="#2a3a4c"/><rect x="196" y="176" width="30" height="14" rx="2" fill="#2a3a4c"/>' +
      '<rect x="150" y="198" width="138" height="5" fill="' + BLUE + '"/><circle cx="178" cy="216" r="10" fill="#151515"/><circle cx="178" cy="216" r="4" fill="#aaa"/><circle cx="266" cy="216" r="10" fill="#151515"/><circle cx="266" cy="216" r="4" fill="#aaa"/>' +
      '<circle class="bp-flk" cx="288" cy="204" r="3" fill="#fff6c2"/></g>';
    const shield = (x, y) => '<path d="M' + x + ' ' + y + 'h28v6q0 16-14 22q-14-6-14-22z" fill="#1f4e9a" stroke="#fff" stroke-width="1.5"/><path d="M' + x + ' ' + y + 'h28v6h-28z" fill="' + RED + '"/>' +
      '<text x="' + (x + 14) + '" y="' + (y + 21) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">71</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#bps4)"/>' +
      '<g class="bp-sun"><circle cx="300" cy="130" r="34" fill="#ffd27a"/><circle cx="300" cy="130" r="48" fill="#ffd27a" opacity=".2"/></g>' +
      '<path d="M0 150q60-18 120-6t120 2t160-10v24H0z" fill="#3d5a3a"/><path d="M0 158h400v10H0z" fill="#4a6a45"/>' +
      '<path d="M0 168h400v92H0z" fill="#3a3c42"/>' +
      '<g class="bp-dash">' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (i * 42) + '" y="236" width="24" height="4" fill="#f4f1e8"/>').join("") + '</g>' +
      '<rect x="0" y="222" width="400" height="2" fill="#f2c200"/>' +
      '<rect x="40" y="30" width="4" height="138" fill="#6b6f73"/><rect x="356" y="30" width="4" height="138" fill="#6b6f73"/><rect x="40" y="34" width="320" height="4" fill="#6b6f73"/>' +
      '<rect x="56" y="40" width="136" height="58" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + shield(62, 46) + '<text x="138" y="62" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">SOUTH</text><text x="124" y="84" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Cincinnati</text>' +
      '<rect x="206" y="40" width="136" height="58" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + shield(212, 46) + '<text x="288" y="62" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">NORTH</text><text x="274" y="84" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Columbus</text>' +
      van,
      sky("bps4", "#2b3f6b", "#f2a65a"));
  }

  /* 5. Parsons Ave and Thurman Ave, LeVeque Tower behind */
  function bpcorner() {
    const leveque = '<g><rect x="186" y="52" width="40" height="82" fill="#e9e1cf"/><rect x="176" y="80" width="60" height="54" fill="#e2d9c4"/><rect x="194" y="36" width="24" height="18" fill="#efe8d8"/><rect x="200" y="22" width="12" height="16" fill="#f3eee2"/>' +
      '<path d="M203 22l3-12l3 12z" fill="#f3eee2"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (190 + i * 6) + ' 56v76" stroke="#c9bfa8" stroke-width="1.2"/>').join("") +
      '<rect class="bp-gl" x="200" y="24" width="12" height="12" fill="' + BLUE + '" opacity=".55"/><circle class="bp-flk" cx="206" cy="10" r="2.5" fill="#ff5a5a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bps5)"/>' + stars(16) +
      '<g fill="#2c3550"><rect x="96" y="92" width="40" height="42"/><rect x="140" y="74" width="30" height="60"/><rect x="244" y="70" width="34" height="64"/><rect x="282" y="96" width="44" height="38"/></g>' + leveque +
      '<rect x="0" y="126" width="400" height="98" fill="#7e3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#6a3323" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#6a3323" stroke-width="1"/>').join("")).join("") +
      tag("BLUEPRINT", 14, 190, 44, BLUE, -6) + tag("WEIGHTLESS", 120, 216, 16, GOLD, -4) + tag("PRINT", 20, 214, 17, "#f4f1e8", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5a5753"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(256, 98, 140, "Parsons Ave") + sign(266, 124, 120, "Thurman Ave") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="bp-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="bp-sp"><circle cx="236" cy="168" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="bp-sp bp-sp2"><circle cx="242" cy="162" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("bps5", "#0c1a36", "#d87a4a"));
  }

  window.SCENES = { bpstation: bpstation, bparches: bparches, bpscribble: bpscribble, bproad: bproad, bpcorner: bpcorner };
})();
