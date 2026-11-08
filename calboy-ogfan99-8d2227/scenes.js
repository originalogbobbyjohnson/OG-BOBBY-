/* calboy scenes (Regions tab: Chicago; Calumet City, south suburbs, born on the South Side). CSS classes prefixed cb- (the page's own anim-train is kept).
   1 147th St (Sibley Blvd) on the Metra Electric main line in Harvey: island platform up on the bridge over Sibley Blvd, silver bilevel electric under the wires.
   2 River Oaks Center, Calumet City: the long low mall, parking lot lights, shoppers' cars rolling in ("might spend a ten when I'm in the mall").
   3 The Big Jam: the WGCI radio concert stage his cousin got him booked on, crowd lights waving, spotlights sweeping.
   4 State Line Ave, Calumet City: the Illinois / Indiana line, a border sign, cars crossing both ways.
   5 Sibley Blvd and Torrence Ave in Calumet City: green signs, CALBOY tagged, the Chicago skyline far off up the lake.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cbflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.cb-flk{animation:cbflick 2.2s infinite}.cb-flk2{animation-delay:.7s}' +
    '@keyframes cbcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.cb-car{animation:cbcar 7s linear infinite}.cb-car2{animation-delay:-3.5s}' +
    '@keyframes cbcarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.cb-carL{animation:cbcarL 8s linear infinite}.cb-carL2{animation-delay:-4s}' +
    '@keyframes cbsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.cb-sw{animation:cbsweep 3.4s ease-in-out infinite}.cb-sw2{animation-delay:-1.7s}' +
    '@keyframes cbwave{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.cb-wv{animation:cbwave 1.1s ease-in-out infinite}.cb-wv2{animation-delay:-.55s}' +
    '@keyframes cbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cb-sp{animation:cbspray 1.4s ease-out infinite}.cb-sp2{animation-delay:.45s}' +
    '@keyframes cbblink{0%,100%{opacity:.25}50%{opacity:1}}.cb-bl{animation:cbblink 1.6s ease-in-out infinite}.cb-bl2{animation-delay:-.8s}' +
    '@keyframes cbspark{0%,100%{opacity:0}50%{opacity:1}}.cb-spk{animation:cbspark .9s steps(2) infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const METRA = "#1f4e79", RED = "#e2403a", GOLD = "#f5c542", BLUE = "#5fb3ff";

  /* 1. 147th St (Sibley Blvd), Metra Electric: island platform on the bridge over Sibley, bilevel electric under the wires */
  function cbstation() {
    const upper = Array.from({ length: 7 }, (_, i) => '<rect x="' + (40 + i * 42) + '" y="56" width="30" height="13" rx="2" fill="#1f2a33"/>').join("");
    const lower = Array.from({ length: 7 }, (_, i) => '<rect x="' + (40 + i * 42) + '" y="86" width="30" height="13" rx="2" fill="#1f2a33"/>').join("");
    const train = '<g class="anim-train">' +
      '<path d="M200 38l-14 -12h28z" fill="none" stroke="#555" stroke-width="2"/><path d="M186 26h28" stroke="#555" stroke-width="2"/>' +
      '<rect x="24" y="40" width="330" height="86" rx="9" fill="#d7dbdf" stroke="#7a828a" stroke-width="2"/>' + upper + lower +
      Array.from({ length: 22 }, (_, i) => '<path d="M' + (30 + i * 15) + ' 104v18" stroke="#bcc2c8" stroke-width="1.5"/>').join("") +
      '<rect x="24" y="74" width="330" height="5" fill="' + METRA + '"/><rect x="24" y="79" width="330" height="2" fill="#c8102e"/>' +
      '<rect x="330" y="46" width="20" height="76" rx="5" fill="#b9bfc5"/><rect x="334" y="52" width="12" height="18" rx="2" fill="#1f2a33"/><circle cx="340" cy="116" r="3.5" fill="#fff6c2"/>' +
      '<rect x="244" y="43" width="80" height="10" rx="2" fill="#111"/><text x="284" y="51" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">UNIVERSITY PARK</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cbs1)"/>' +
      '<g fill="#3b3346"><rect x="0" y="70" width="24" height="60"/><rect x="368" y="62" width="32" height="68"/></g>' +
      '<path d="M0 22h400" stroke="#2c2c34" stroke-width="2"/>' + [30, 180, 330].map(x => '<rect x="' + (x - 3) + '" y="14" width="6" height="118" fill="#5b636b"/><path d="M' + (x - 16) + ' 20h32" stroke="#5b636b" stroke-width="4"/>').join("") +
      '<rect x="40" y="20" width="320" height="6" fill="#4a5560" opacity=".8"/>' +
      train +
      '<rect x="0" y="128" width="400" height="5" fill="#f2c200"/><rect x="0" y="133" width="400" height="12" fill="#9a958c"/>' +
      /* the bridge deck over Sibley Blvd */
      '<rect x="0" y="145" width="400" height="16" fill="#4a4f57"/><path d="M0 153h400" stroke="#3a3e46" stroke-width="2"/>' +
      Array.from({ length: 21 }, (_, i) => '<path d="M' + (i * 20) + ' 145v16" stroke="#5c626b" stroke-width="2"/>').join("") +
      '<rect x="20" y="161" width="16" height="60" fill="#8f8a80"/><rect x="364" y="161" width="16" height="60" fill="#8f8a80"/>' +
      '<rect x="36" y="161" width="328" height="60" fill="#262a33"/>' +
      '<rect x="54" y="166" width="120" height="26" rx="3" fill="#111"/><text x="64" y="184" ' + font + ' font-size="14" fill="#fff">147th St</text>' + badge(132, 179, "ME", METRA) +
      '<rect x="226" y="166" width="124" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="288" y="180" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">Sibley Blvd</text>' +
      '<g class="cb-flk"><rect x="190" y="164" width="20" height="4" fill="#ffe9a8"/></g>' +
      '<rect x="0" y="221" width="400" height="39" fill="#3a3a3f"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      car("cb-car", 0, 226, RED) + car("cb-carL", 0, 242, BLUE) +
      '<g class="cb-spk"><circle cx="200" cy="24" r="3" fill="#bfe3ff"/></g>' +
      '<text x="200" y="12" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e6d0" opacity=".9">METRA ELECTRIC · 147TH ST · OVER SIBLEY BLVD</text>',
      sky("cbs1", "#1d1a3a", "#d9705a"));
  }

  /* 2. River Oaks Center, Calumet City: long low mall, lot lights, cars rolling in */
  function cbmall() {
    const lamps = [40, 130, 270, 360].map((x, i) => '<rect x="' + (x - 2) + '" y="150" width="4" height="64" fill="#3a3e46"/><rect x="' + (x - 12) + '" y="146" width="24" height="5" rx="2" fill="#3a3e46"/><circle class="cb-bl' + (i % 2 ? " cb-bl2" : "") + '" cx="' + x + '" cy="153" r="6" fill="#fff2b0" opacity=".8"/>').join("");
    const stalls = Array.from({ length: 16 }, (_, i) => '<path d="M' + (i * 26) + ' 222l14 -14" stroke="#e8e8e0" stroke-width="2" opacity=".7"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cbs2)"/>' +
      '<g fill="#2b3a2b" opacity=".8"><ellipse cx="30" cy="112" rx="40" ry="22"/><ellipse cx="380" cy="108" rx="44" ry="24"/></g>' +
      '<rect x="20" y="96" width="360" height="62" fill="#c9b79a"/><rect x="20" y="90" width="360" height="8" fill="#8a7458"/>' +
      Array.from({ length: 18 }, (_, i) => '<rect x="' + (28 + i * 20) + '" y="104" width="12" height="40" fill="#b3a084"/>').join("") +
      '<rect x="150" y="70" width="100" height="88" fill="#d8c8aa"/><rect x="146" y="64" width="108" height="8" fill="#7a6448"/>' +
      '<rect x="170" y="112" width="60" height="46" fill="#2f4a5e"/><path d="M200 112v46" stroke="#d8c8aa" stroke-width="2"/>' +
      '<rect x="158" y="80" width="84" height="22" rx="3" fill="#7a1f1b"/><text x="200" y="95" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">RIVER OAKS</text>' +
      '<rect x="0" y="158" width="400" height="102" fill="#4a4c52"/>' + stalls + lamps +
      car("cb-car", 0, 196, RED) + car("cb-carL cb-carL2", 0, 236, GOLD) + car("cb-car cb-car2", 0, 226, "#d7dbdf") +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0">RIVER OAKS CENTER · CALUMET CITY</text>',
      sky("cbs2", "#262a52", "#e0937a"));
  }

  /* 3. The Big Jam: radio concert stage, crowd hands waving, spotlights sweeping */
  function cbjam() {
    const heads = (y, n, off, cls) => '<g class="' + cls + '">' + Array.from({ length: n }, (_, i) => '<circle cx="' + (off + i * (400 / n)) + '" cy="' + y + '" r="11" fill="#14101c"/><rect x="' + (off + i * (400 / n) - 2) + '" y="' + (y - 34) + '" width="4" height="22" rx="2" fill="#14101c"/>').join("") + '</g>';
    const phones = Array.from({ length: 9 }, (_, i) => '<rect class="cb-bl' + (i % 2 ? " cb-bl2" : "") + '" x="' + (18 + i * 44) + '" y="' + (196 - (i % 3) * 6) + '" width="5" height="8" rx="1" fill="#fff6c2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cbs3)"/>' +
      '<g class="cb-sw" style="transform-origin:90px 0px"><path d="M90 0L50 160h80z" fill="' + BLUE + '" opacity=".22"/></g>' +
      '<g class="cb-sw cb-sw2" style="transform-origin:310px 0px"><path d="M310 0L270 160h80z" fill="' + RED + '" opacity=".22"/></g>' +
      '<rect x="40" y="40" width="320" height="16" fill="#2a2a32"/>' + Array.from({ length: 8 }, (_, i) => '<circle cx="' + (60 + i * 40) + '" cy="58" r="5" fill="' + (i % 2 ? GOLD : "#fff") + '" class="cb-flk' + (i % 2 ? " cb-flk2" : "") + '"/>').join("") +
      '<rect x="40" y="56" width="12" height="100" fill="#2a2a32"/><rect x="348" y="56" width="12" height="100" fill="#2a2a32"/>' +
      '<rect x="110" y="70" width="180" height="60" rx="4" fill="#120d1c" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="98" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="26" fill="' + GOLD + '">THE BIG JAM</text>' +
      '<text x="200" y="118" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">CHICAGO RADIO · LIVE ON STAGE</text>' +
      '<rect x="30" y="150" width="340" height="14" fill="#3a2e44"/><rect x="30" y="148" width="340" height="3" fill="' + RED + '"/>' +
      '<rect x="314" y="128" width="3" height="22" fill="#bbb"/><circle cx="315.5" cy="126" r="4" fill="#333"/>' +
      heads(200, 12, 14, "cb-wv") + heads(228, 11, 32, "cb-wv cb-wv2") + phones +
      '<rect x="0" y="238" width="400" height="22" fill="#0c0a12"/>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0">THE BIG JAM · WHERE THE CITY HEARD HIM</text>',
      sky("cbs3", "#0b0a1a", "#3a1f4a"));
  }

  /* 4. State Line Ave, Calumet City: the Illinois / Indiana line, cars crossing both ways */
  function cbstate() {
    return svg(
      '<rect width="400" height="260" fill="url(#cbs4)"/>' +
      '<g fill="#5b6a7a" opacity=".7"><rect x="20" y="104" width="30" height="40"/><rect x="58" y="96" width="22" height="48"/><rect x="300" y="100" width="40" height="44"/><rect x="346" y="110" width="30" height="34"/></g>' +
      '<g fill="#7a5a42"><rect x="90" y="112" width="70" height="32"/><path d="M86 112l39 -16l39 16z" fill="#4a3a30"/><rect x="236" y="114" width="60" height="30"/><path d="M232 114l34 -14l34 14z" fill="#4a3a30"/></g>' +
      '<rect x="0" y="144" width="400" height="116" fill="#4c4e55"/>' +
      '<path d="M200 144v116" stroke="#fff" stroke-width="3" stroke-dasharray="10 8"/>' +
      '<path d="M0 196h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<rect x="0" y="144" width="400" height="6" fill="#8a8c90"/>' +
      '<rect x="96" y="58" width="5" height="88" fill="#3a3e46"/><rect x="299" y="58" width="5" height="88" fill="#3a3e46"/>' +
      '<rect x="30" y="54" width="140" height="40" rx="3" fill="#0f3a7a" stroke="#fff" stroke-width="2"/><text x="100" y="72" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">ILLINOIS</text><text x="100" y="87" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">CALUMET CITY</text>' +
      '<rect x="230" y="54" width="140" height="40" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><text x="300" y="72" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">INDIANA</text><text x="300" y="87" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">STATE LINE</text>' +
      '<rect x="160" y="210" width="80" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/><text x="200" y="224" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">State Line Ave</text>' +
      car("cb-car", 0, 168, RED) + car("cb-carL", 0, 236, BLUE) + car("cb-car cb-car2", 0, 180, GOLD) +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2030">STATE LINE AVE · ILLINOIS MEETS INDIANA</text>',
      sky("cbs4", "#9cc6e6", "#f6dcc0"));
  }

  /* 5. Sibley Blvd and Torrence Ave, Calumet City: green signs, CALBOY tagged, the Chicago skyline far up the lake */
  function cbcorner() {
    const skyline = '<g fill="#3c4a66" opacity=".9">' +
      '<rect x="150" y="70" width="10" height="60"/><rect x="162" y="56" width="14" height="74"/><rect x="164" y="44" width="3" height="12"/><rect x="171" y="46" width="3" height="10"/>' +
      '<rect x="178" y="80" width="9" height="50"/><rect x="190" y="62" width="11" height="68"/><rect x="194" y="54" width="3" height="8"/>' +
      '<rect x="204" y="74" width="12" height="56"/><rect x="218" y="86" width="10" height="44"/><rect x="230" y="68" width="8" height="62"/><rect x="240" y="90" width="14" height="40"/>' +
      '<rect x="120" y="96" width="14" height="34"/><rect x="136" y="90" width="12" height="40"/><rect x="256" y="96" width="16" height="34"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cbs5)"/>' + skyline +
      '<rect x="0" y="130" width="400" height="94" fill="#3b3b44"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#2c2c34" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#2c2c34" stroke-width="1"/>').join("")).join("") +
      tag("CALBOY", 22, 200, 54, RED, -6) + tag("147", 196, 214, 26, GOLD, -4) + tag("WILDBOY", 26, 154, 16, BLUE, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(254, 98, 136, "Sibley Blvd") + sign(244, 124, 152, "Torrence Ave") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="cb-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("cb-car", 0, 240, GOLD) +
      '<g class="cb-sp"><circle cx="246" cy="196" r="3" fill="' + RED + '" opacity=".7"/></g><g class="cb-sp cb-sp2"><circle cx="252" cy="190" r="2" fill="' + RED + '" opacity=".6"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">SIBLEY &amp; TORRENCE · CALUMET CITY · THE CITY UP THE LAKE</text>',
      sky("cbs5", "#241a3e", "#e2735a"));
  }

  window.SCENES = { cbstation: cbstation, cbmall: cbmall, cbjam: cbjam, cbstate: cbstate, cbcorner: cbcorner };
})();
