/* joeypurp scenes (Regions tab: Chicago; Wrigleyville, North Side). CSS classes and ids prefixed jp- (the page's own anim-train is kept).
   1 Addison on the CTA Red Line: the North Side L on its embankment over Wrigleyville, a silver Red Line train sliding in, the ballpark light towers behind.
   2 Wicker Park, Six Corners (Milwaukee, North and Damen), where he worked at a streetwear shop as a teen: the cream art deco Northwest Tower, the Blue Line rumbling past on the L, hoodies in the shop window.
   3 Humboldt Park, where he also grew up: the two steel Puerto Rican flags arching over Division St on Paseo Boricua, cars rolling under them.
   4 The photo booth ("Girls @", "Photobooth"): curtain, flash popping, a photo strip sliding out.
   5 N Clark St and W Addison St in Wrigleyville: green signs, JOEY PURP tagged, the red ballpark marquee and ivy behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jpflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.jp-flk{animation:jpflick 2.2s infinite}.jp-flk2{animation-delay:.7s}' +
    '@keyframes jpcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.jp-car{animation:jpcar 7s linear infinite}.jp-car2{animation-delay:-3.5s}' +
    '@keyframes jpcarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.jp-carL{animation:jpcarL 8s linear infinite}.jp-carL2{animation-delay:-4s}' +
    '@keyframes jpel{from{transform:translateX(-420px)}to{transform:translateX(460px)}}.jp-el{animation:jpel 6s linear infinite}' +
    '@keyframes jpwave{0%,100%{transform:skewY(0)}50%{transform:skewY(-2deg)}}.jp-wave{transform-box:fill-box;transform-origin:0 50%;animation:jpwave 3s ease-in-out infinite}' +
    '@keyframes jpflash{0%,80%,100%{opacity:0}85%{opacity:.95}}.jp-flash{animation:jpflash 2.6s linear infinite}' +
    '@keyframes jpstrip{0%{transform:translateY(-60px)}60%,100%{transform:translateY(0)}}.jp-strip{animation:jpstrip 2.6s ease-out infinite}' +
    '@keyframes jpspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jp-sp{animation:jpspray 1.4s ease-out infinite}.jp-sp2{animation-delay:.45s}' +
    '@keyframes jpblink{0%,100%{opacity:.25}50%{opacity:1}}.jp-bl{animation:jpblink 1.6s ease-in-out infinite}.jp-bl2{animation-delay:-.8s}' +
    '@keyframes jpsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.jp-sway{transform-box:fill-box;transform-origin:50% 0;animation:jpsway 2.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const RED = "#c60c30", BLUE = "#00a1de", PURP = "#a35cf0", GOLD = "#f2c94c", IVY = "#2f6b2a";
  const lightTower = (x, y) => '<path d="M' + x + ' ' + (y + 70) + 'l6 -60h4l6 60z" fill="#2a2d36"/><rect x="' + (x - 6) + '" y="' + (y - 4) + '" width="28" height="16" fill="#2a2d36"/>' +
    Array.from({ length: 6 }, (_, i) => '<circle class="jp-bl' + (i % 2 ? " jp-bl2" : "") + '" cx="' + (x - 2 + i * 4.6) + '" cy="' + (y + 4) + '" r="1.8" fill="#fff6c2"/>').join("");

  /* 1. Addison (Red Line), on the embankment over Wrigleyville */
  function jpstation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (46 + i * 48) + '" y="104" width="32" height="22" rx="3" fill="#1f2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="26" y="94" width="328" height="64" rx="7" fill="#d4d8dc" stroke="#7a828a" stroke-width="2"/>' + win +
      Array.from({ length: 16 }, (_, i) => '<path d="M' + (34 + i * 20) + ' 132v22" stroke="#b9bfc5" stroke-width="1.5"/>').join("") +
      '<rect x="26" y="128" width="328" height="3" fill="' + RED + '"/><rect x="26" y="131" width="328" height="3" fill="#fff"/><rect x="26" y="134" width="328" height="3" fill="' + BLUE + '"/>' +
      '<rect x="334" y="98" width="18" height="56" rx="4" fill="#b3b9bf"/><circle cx="344" cy="150" r="3.5" fill="#fff6c2"/>' +
      '<rect x="270" y="98" width="60" height="12" rx="2" fill="#111"/><text x="300" y="107" text-anchor="middle" ' + font + ' font-size="8" fill="#ff5a6e">HOWARD</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jps1)"/>' +
      lightTower(36, 18) + lightTower(330, 22) +
      '<g fill="#3a2f46"><rect x="0" y="62" width="60" height="30"/><rect x="66" y="54" width="44" height="38"/><rect x="292" y="58" width="50" height="34"/><rect x="346" y="50" width="54" height="42"/></g>' +
      '<g fill="#ffd98a" opacity=".7"><rect x="12" y="70" width="6" height="8"/><rect x="80" y="64" width="6" height="8"/><rect x="306" y="66" width="6" height="8"/><rect x="364" y="60" width="6" height="8"/></g>' +
      '<path d="M0 78h400" stroke="#4d5560" stroke-width="4"/>' + [70, 200, 330].map(x => '<rect x="' + (x - 2) + '" y="78" width="4" height="18" fill="#4d5560"/><path d="M' + (x - 26) + ' 80h52" stroke="#4d5560" stroke-width="6"/>').join("") +
      '<g class="jp-flk"><rect x="100" y="84" width="36" height="4" fill="#fff3c4"/></g><g class="jp-flk jp-flk2"><rect x="262" y="84" width="36" height="4" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="160" width="400" height="7" fill="#f2c200"/><rect x="0" y="167" width="400" height="20" fill="#8e8a82"/>' +
      '<rect x="0" y="187" width="400" height="73" fill="#6e5a48"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M0 ' + (194 + i * 8) + 'h400" stroke="#5c4a3a" stroke-width="1.2"/>').join("") +
      Array.from({ length: 9 }, (_, i) => Array.from({ length: 10 }, (_, j) => '<path d="M' + (j * 44 + (i % 2) * 22) + ' ' + (187 + i * 8) + 'v7" stroke="#5c4a3a" stroke-width="1"/>').join("")).join("") +
      '<rect x="40" y="206" width="64" height="54" fill="#2a2d36"/><path d="M40 206q32 -26 64 0" fill="#2a2d36"/><rect x="296" y="206" width="64" height="54" fill="#2a2d36"/><path d="M296 206q32 -26 64 0" fill="#2a2d36"/>' +
      car("jp-car", 0, 240, "#5fb3ff") +
      '<rect x="104" y="172" width="196" height="32" rx="3" fill="#111"/><text x="120" y="194" ' + font + ' font-size="17" fill="#fff">Addison</text>' + badge(236, 188, "RED", RED) +
      '<text x="200" y="14" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".85">ADDISON ST · WRIGLEYVILLE · NORTH SIDE</text>',
      sky("jps1", "#1c1838", "#d9705a"));
  }

  /* 2. Wicker Park, Six Corners: the Northwest Tower and the Blue Line */
  function jpwicker() {
    const tw = '<g><rect x="150" y="56" width="100" height="120" fill="#e9dcc0"/><rect x="166" y="34" width="68" height="24" fill="#e9dcc0"/><rect x="182" y="16" width="36" height="20" fill="#e9dcc0"/><rect x="196" y="4" width="8" height="14" fill="#e9dcc0"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (158 + i * 15) + '" y="64" width="6" height="104" fill="#9a8a6c"/>').join("") +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (172 + i * 15) + '" y="40" width="5" height="16" fill="#9a8a6c"/>').join("") +
      '<rect x="188" y="22" width="4" height="12" fill="#9a8a6c"/><rect x="208" y="22" width="4" height="12" fill="#9a8a6c"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect class="' + (i % 3 ? "" : "jp-bl") + '" x="' + (166 + (i % 5) * 15) + '" y="' + (74 + Math.floor(i / 5) * 30) + '" width="4" height="6" fill="#ffd98a" opacity=".8"/>').join("") + '</g>';
    const el = '<rect x="0" y="150" width="400" height="10" fill="#3d4450"/>' + [30, 130, 270, 370].map(x => '<rect x="' + (x - 3) + '" y="160" width="6" height="70" fill="#3d4450"/>').join("") +
      '<g class="jp-el"><rect x="0" y="126" width="380" height="24" rx="4" fill="#cfd4da" stroke="#7a828a" stroke-width="1.5"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (12 + i * 40) + '" y="131" width="24" height="10" rx="2" fill="#1f2a33"/>').join("") +
      '<rect x="0" y="144" width="380" height="3" fill="' + BLUE + '"/></g>';
    const shop = '<rect x="20" y="172" width="150" height="58" fill="#1d1a24" stroke="#5a4a70" stroke-width="3"/><rect x="28" y="180" width="134" height="44" fill="#2e3550"/>' +
      [40, 74, 108, 142].map((x, i) => '<g class="jp-sway"><path d="M' + x + ' 184v4" stroke="#999" stroke-width="1.5"/><path d="M' + (x - 11) + ' 196l6 -8h10l6 8v20h-22z" fill="' + [PURP, GOLD, "#e8384f", "#f4f1e8"][i] + '"/></g>').join("") +
      '<text x="95" y="168" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">STREETWEAR</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#jps2)"/>' +
      '<g fill="#5a3d4a"><rect x="0" y="96" width="70" height="80"/><rect x="72" y="110" width="60" height="66"/><rect x="268" y="100" width="56" height="76"/><rect x="326" y="88" width="74" height="88"/></g>' +
      '<g fill="#f2c27a" opacity=".55"><rect x="12" y="106" width="8" height="10"/><rect x="40" y="122" width="8" height="10"/><rect x="88" y="120" width="8" height="10"/><rect x="282" y="112" width="8" height="10"/><rect x="342" y="100" width="8" height="10"/><rect x="372" y="124" width="8" height="10"/></g>' +
      tw + el +
      '<rect x="0" y="230" width="400" height="30" fill="#3a3a3f"/><path d="M0 245h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="16 12"/>' + shop +
      '<rect x="230" y="186" width="150" height="44" fill="#4a3428"/><rect x="238" y="194" width="40" height="30" fill="#f2c27a" opacity=".7"/><rect x="290" y="194" width="40" height="30" fill="#f2c27a" opacity=".5"/><rect x="342" y="194" width="30" height="36" fill="#2a1a12"/>' +
      car("jp-carL", 0, 240, "#e8384f") +
      '<text x="10" y="20" text-anchor="start" ' + font + ' font-size="10" fill="#f3e6d0">SIX CORNERS · WICKER PARK</text>',
      sky("jps2", "#2b2350", "#f0a070"));
  }

  /* 3. Humboldt Park: the steel Puerto Rican flags over Division St */
  function jphumboldt() {
    const flag = (x, flip) => {
      const g = flip ? 'transform="translate(' + (2 * x + 0) + ' 0) scale(-1 1)"' : '';
      return '<g ' + g + '><path d="M' + (x - 4) + ' 230V70" stroke="#6b6f78" stroke-width="7"/>' +
        '<g class="jp-wave"><rect x="' + x + '" y="56" width="120" height="78" fill="#d42a3a"/>' +
        '<rect x="' + x + '" y="71.6" width="120" height="15.6" fill="#fff"/><rect x="' + x + '" y="102.8" width="120" height="15.6" fill="#fff"/>' +
        '<path d="M' + x + ' 56l52 39l-52 39z" fill="#2f5fb8"/>' +
        '<path d="M' + (x + 16) + ' 86l3.5 8h8.5l-7 5l3 8l-8 -5l-8 5l3 -8l-7 -5h8.5z" fill="#fff"/>' +
        Array.from({ length: 8 }, (_, i) => '<path d="M' + (x + i * 15) + ' 56v78" stroke="#8a2030" stroke-width=".6" opacity=".4"/>').join("") + '</g></g>';
    };
    return svg(
      '<rect width="400" height="260" fill="url(#jps3)"/>' +
      '<g fill="#3f7a3a"><ellipse cx="20" cy="150" rx="50" ry="30"/><ellipse cx="380" cy="146" rx="50" ry="34"/></g>' +
      '<g fill="#6a4a3c"><rect x="0" y="140" width="80" height="60"/><rect x="320" y="136" width="80" height="64"/></g>' +
      '<g fill="#f2d79a" opacity=".7"><rect x="12" y="150" width="10" height="12"/><rect x="40" y="150" width="10" height="12"/><rect x="336" y="148" width="10" height="12"/><rect x="366" y="148" width="10" height="12"/><rect x="12" y="174" width="10" height="12"/><rect x="366" y="172" width="10" height="12"/></g>' +
      '<rect x="0" y="198" width="400" height="62" fill="#3a3a3f"/><rect x="0" y="196" width="400" height="4" fill="#cfd4da"/><path d="M0 230h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 12"/>' +
      flag(70, false) + flag(330, true) +
      car("jp-car", 0, 222, "#f2c94c") + car("jp-carL", 0, 244, "#5fb3ff") +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#22313a">PASEO BORICUA · DIVISION ST · HUMBOLDT PARK</text>',
      sky("jps3", "#8ec5ec", "#f6e6c8"));
  }

  /* 4. The photo booth */
  function jpbooth() {
    const strip = '<g class="jp-strip"><rect x="300" y="166" width="34" height="86" fill="#f7f3ea" stroke="#c9c2b0" stroke-width="1.5"/>' +
      [0, 1, 2, 3].map(i => '<rect x="304" y="' + (170 + i * 20) + '" width="26" height="17" fill="' + ["#5a3d7a", "#3a4a7a", "#7a3d5a", "#3d6a7a"][i] + '"/><path d="M306 ' + (185 + i * 20) + 'l7 -7l5 4l4 -3l6 6z" fill="#f2c94c" opacity=".7"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="#1a1222"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle class="jp-bl' + (i % 2 ? " jp-bl2" : "") + '" cx="' + (14 + i * 25) + '" cy="' + (14 + (i % 3) * 6) + '" r="3" fill="' + [PURP, GOLD, "#e8384f", BLUE][i % 4] + '"/>').join("") +
      '<rect x="0" y="218" width="400" height="42" fill="#2a1f30"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="218" width="20" height="42" fill="#33263b"/>').join("") +
      '<rect x="110" y="40" width="180" height="180" rx="6" fill="#3a2a4a" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<rect x="120" y="50" width="160" height="30" rx="3" fill="#120a1c"/><text x="200" y="71" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" fill="' + GOLD + '" letter-spacing="2">PHOTOBOOTH</text>' +
      '<rect x="126" y="88" width="92" height="124" fill="#120a1c"/>' +
      '<path d="M126 88h92v6h-92z" fill="#6a4a8a"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (130 + i * 16) + ' 94q4 60 0 118" stroke="#7d58a8" stroke-width="10" fill="none"/>').join("") +
      '<g class="jp-flash"><rect x="126" y="94" width="92" height="118" fill="#fff8e0"/></g>' +
      '<rect x="228" y="88" width="56" height="70" rx="3" fill="#2a1f36"/><circle cx="256" cy="110" r="12" fill="#111" stroke="#888" stroke-width="2"/><circle cx="256" cy="110" r="5" fill="#3a5a8a"/>' +
      '<rect x="236" y="134" width="40" height="8" rx="2" fill="#555"/><text x="256" y="153" text-anchor="middle" ' + font + ' font-size="7" fill="#f3e6d0">4 POSES</text>' +
      '<rect x="296" y="160" width="42" height="6" rx="2" fill="#111"/>' + strip +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0">SMILE FOR THE CAMERA · CHICAGO</text>');
  }

  /* 5. N Clark St and W Addison St, the ballpark marquee and ivy behind */
  function jpcorner() {
    const park = '<rect x="0" y="70" width="400" height="66" fill="#6e3a2c"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (76 + i * 8) + 'h400" stroke="#5a2e22" stroke-width="1"/>').join("") +
      Array.from({ length: 22 }, (_, i) => '<ellipse cx="' + (i * 19 + 8) + '" cy="' + (78 + (i % 3) * 5) + '" rx="12" ry="9" fill="' + (i % 2 ? IVY : "#3c8a34") + '"/>').join("") +
      lightTower(20, 6) + lightTower(356, 8) +
      '<rect x="124" y="20" width="150" height="56" rx="3" fill="#c8102e" stroke="#7a0a1c" stroke-width="2"/><rect x="132" y="26" width="134" height="18" fill="#c8102e"/>' +
      '<text x="199" y="40" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" fill="#fff" letter-spacing="2">WRIGLEY FIELD</text>' +
      '<rect x="134" y="48" width="130" height="22" fill="#0b1a0f"/><text class="jp-flk" x="199" y="63" text-anchor="middle" ' + font + ' font-size="10" fill="#ffd34a">WRIGLEYVILLE</text>' +
      '<rect x="196" y="76" width="6" height="60" fill="#2a2a2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jps5)"/>' + park +
      '<rect x="0" y="136" width="400" height="88" fill="#7a5a8a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#644a72" stroke-width="1"/>').join("") +
      Array.from({ length: 11 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (136 + i * 8) + 'v8" stroke="#644a72" stroke-width="1"/>').join("")).join("") +
      tag("JOEY PURP", 18, 196, 46, PURP, -6) + tag("SAVEMONEY", 30, 218, 17, GOLD, -3) + tag("YOUNG PURPLE", 150, 216, 15, "#ff8aa0", -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="340" y="100" width="6" height="124" fill="#2f2f2f"/>' + sign(262, 102, 128, "N Clark St") + sign(254, 128, 136, "W Addison St") +
      '<rect x="386" y="160" width="4" height="64" fill="#222"/><circle class="jp-flk" cx="388" cy="158" r="7" fill="#ffe9a8"/>' +
      car("jp-carL", 0, 240, "#c8102e") +
      '<g class="jp-sp"><circle cx="232" cy="176" r="3" fill="' + PURP + '" opacity=".7"/></g><g class="jp-sp jp-sp2"><circle cx="238" cy="170" r="2" fill="' + PURP + '" opacity=".6"/></g>',
      sky("jps5", "#2a2660", "#f0a070"));
  }

  window.SCENES = { jpstation: jpstation, jpwicker: jpwicker, jphumboldt: jphumboldt, jpbooth: jpbooth, jpcorner: jpcorner };
})();
