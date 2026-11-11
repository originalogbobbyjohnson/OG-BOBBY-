/* aaroncole scenes (Regions tab: Virginia; Bristol, Virginia - the twin city on the VA/TN state line). CSS classes prefixed ac- (the page's own anim-train is kept).
   1 Bristol Virginia Transit: a city bus pulling into the Downtown Transfer Center on State Street, the Farmers Market shed beside it.
   2 Dad's home studio: the recording setup his father ran in their apartment - mic, keyboard, foam panels, a kid-sized stool, meters bouncing.
   3 Bristol Motor Speedway: the steep-banked half-mile bowl in the hills outside town, cars circling.
   4 The front row: an arena show from the floor, red seats up front, lights sweeping ("FRONT ROW").
   5 State St and Moore St: green signs, AARON COLE tagged, the lit "BRISTOL VA TENN - A GOOD PLACE TO LIVE" sign over State Street behind.
   No digit 9 is drawn anywhere. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes acmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.ac-mt{transform-box:fill-box;transform-origin:50% 100%;animation:acmeter .7s ease-in-out infinite}.ac-mt2{animation-delay:-.35s}.ac-mt3{animation-delay:-.2s}' +
    '@keyframes acbulb{0%,100%{opacity:1}50%{opacity:.55}}.ac-bulb{animation:acbulb 1.2s ease-in-out infinite}.ac-bulb2{animation-delay:-.6s}' +
    '@keyframes acbeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.ac-beam{transform-box:fill-box;transform-origin:50% 0%;animation:acbeam 3.4s ease-in-out infinite}.ac-beam2{animation-delay:-1.7s}' +
    '@keyframes achand{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.ac-hand{animation:achand 1s ease-in-out infinite}.ac-h2{animation-delay:-.5s}' +
    '@keyframes acrace{from{offset-distance:0%}to{offset-distance:100%}}' +
    '@keyframes acbus{0%{transform:translateX(-300px)}50%,100%{transform:translateX(0)}}.ac-bus{animation:acbus 6s ease-out infinite}' +
    '@keyframes acsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.ac-sp{animation:acsp 1.4s ease-out infinite}.ac-sp2{animation-delay:.5s}' +
    '@keyframes acnote{0%{transform:translate(0,0);opacity:1}100%{transform:translate(12px,-36px);opacity:0}}.ac-note{animation:acnote 2s ease-out infinite}.ac-note2{animation-delay:-1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const RED = "#e63946", GOLD = "#ffc94a", NAVY = "#1d3557", CREAM = "#f7f3ea", SKY = "#4cc9f0";
  /* Appalachian ridges around Bristol */
  const ridges = y => '<path d="M0 ' + (y + 10) + 'Q60 ' + (y - 20) + ' 130 ' + (y + 2) + 'T260 ' + (y - 8) + 'T400 ' + y + 'V' + (y + 70) + 'H0z" fill="#6f86a0"/>' +
    '<path d="M0 ' + (y + 26) + 'Q80 ' + (y + 2) + ' 170 ' + (y + 20) + 'T340 ' + (y + 12) + 'T400 ' + (y + 20) + 'V' + (y + 70) + 'H0z" fill="#4f7a5a"/>';
  /* old downtown brick storefronts */
  const block = (x, w, h, base, c) => {
    let s = '<rect x="' + x + '" y="' + (base - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><rect x="' + x + '" y="' + (base - h) + '" width="' + w + '" height="5" fill="#5a2e24"/>';
    for (let wx = x + 6; wx < x + w - 10; wx += 16) s += '<rect x="' + wx + '" y="' + (base - h + 12) + '" width="9" height="13" fill="#f3dca0" opacity=".85"/>';
    return s + '<rect x="' + (x + 4) + '" y="' + (base - 22) + '" width="' + (w - 8) + '" height="18" fill="#2a3442"/>';
  };

  /* 1. Bristol Virginia Transit - Downtown Transfer Center on State Street */
  function acbus() {
    const bus = '<g class="ac-bus"><rect x="70" y="128" width="240" height="66" rx="8" fill="#f2f2f2" stroke="#7a8590" stroke-width="2"/>' +
      '<rect x="70" y="170" width="240" height="8" fill="' + NAVY + '"/><rect x="70" y="178" width="240" height="4" fill="' + RED + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (82 + i * 34) + '" y="138" width="26" height="24" rx="2" fill="#2a3a4a"/>').join("") +
      '<rect x="288" y="136" width="20" height="40" rx="2" fill="#2a3a4a"/><rect x="256" y="132" width="50" height="8" rx="2" fill="#111"/><text x="281" y="138.6" text-anchor="middle" ' + font + ' font-size="6.5" fill="' + GOLD + '">DOWNTOWN</text>' +
      '<circle cx="110" cy="196" r="12" fill="#1a1a1a"/><circle cx="110" cy="196" r="5" fill="#666"/><circle cx="270" cy="196" r="12" fill="#1a1a1a"/><circle cx="270" cy="196" r="5" fill="#666"/>' +
      '<circle cx="306" cy="184" r="3" fill="#fff4b0"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#acs1)"/>' + ridges(70) +
      block(0, 70, 70, 140, "#a0503a") + block(330, 70, 80, 140, "#8a4432") +
      /* Farmers Market shed */
      '<path d="M70 92l70 -20l70 20z" fill="#7a2a2a"/><rect x="76" y="92" width="128" height="6" fill="#5a1e1e"/>' +
      '<rect x="80" y="98" width="4" height="42" fill="#555"/><rect x="138" y="98" width="4" height="42" fill="#555"/><rect x="196" y="98" width="4" height="42" fill="#555"/>' +
      '<text x="140" y="88" text-anchor="middle" ' + font + ' font-size="8" fill="' + CREAM + '">FARMERS MARKET</text>' +
      /* transfer shelter */
      '<rect x="220" y="96" width="104" height="6" fill="' + NAVY + '"/><rect x="224" y="102" width="3" height="38" fill="#555"/><rect x="318" y="102" width="3" height="38" fill="#555"/>' +
      '<rect x="228" y="80" width="92" height="16" rx="2" fill="' + NAVY + '"/><text x="274" y="91.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#fff">TRANSFER CENTER</text>' +
      '<rect x="0" y="140" width="400" height="60" fill="#55595e"/><rect x="0" y="200" width="400" height="60" fill="#b8b2a4"/><rect x="0" y="200" width="400" height="4" fill="#d6d0c2"/>' +
      bus +
      /* stop sign post */
      '<rect x="356" y="150" width="4" height="56" fill="#555"/><rect x="340" y="142" width="36" height="20" rx="2" fill="' + NAVY + '"/><text x="358" y="150" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">BVT</text><text x="358" y="158" text-anchor="middle" ' + font + ' font-size="6" fill="' + GOLD + '">STATE ST</text>' +
      '<rect x="20" y="214" width="120" height="30" rx="3" fill="#111"/><text x="80" y="234" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">State Street</text>',
      sky("acs1", "#8fc7ee", "#f2e6c8"));
  }

  /* 2. Dad's home studio in the apartment */
  function acstudio() {
    let foam = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) foam += '<rect x="' + (226 + c * 24) + '" y="' + (24 + r * 24) + '" width="22" height="22" fill="' + ((r + c) % 2 ? "#2e2e3a" : "#38384a") + '"/>';
    let meters = "";
    for (let i = 0; i < 8; i++) meters += '<rect class="ac-mt ac-mt' + (i % 3 + 1) + '" x="' + (40 + i * 10) + '" y="150" width="6" height="22" fill="' + (i < 5 ? "#4ade80" : i < 7 ? GOLD : RED) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#3a2f2a"/>' +
      /* apartment wall + window */
      '<rect x="0" y="0" width="210" height="200" fill="#c9b79a"/><rect x="30" y="20" width="90" height="70" fill="#9ccbe6" stroke="#f5f0e6" stroke-width="6"/><path d="M75 20v70M30 55h90" stroke="#f5f0e6" stroke-width="4"/>' +
      '<rect x="210" y="0" width="190" height="200" fill="#2a2a34"/>' + foam +
      /* desk + board */
      '<rect x="20" y="172" width="200" height="10" fill="#6a4a30"/><rect x="30" y="140" width="110" height="34" rx="3" fill="#222"/>' + meters +
      '<rect x="146" y="148" width="64" height="24" rx="2" fill="#1a1a1a"/>' + Array.from({ length: 7 }, (_, i) => '<rect x="' + (150 + i * 8) + '" y="152" width="6" height="16" fill="' + (i % 2 ? "#eee" : "#fff") + '"/>').join("") +
      '<rect x="20" y="182" width="8" height="40" fill="#4a3220"/><rect x="212" y="182" width="8" height="40" fill="#4a3220"/>' +
      /* speaker monitors */
      '<rect x="30" y="104" width="30" height="36" rx="3" fill="#1a1a1a"/><circle cx="45" cy="126" r="9" fill="#333"/><circle cx="45" cy="112" r="4" fill="#333"/>' +
      '<rect x="176" y="104" width="30" height="36" rx="3" fill="#1a1a1a"/><circle cx="191" cy="126" r="9" fill="#333"/><circle cx="191" cy="112" r="4" fill="#333"/>' +
      /* mic stand + pop filter in the booth */
      '<rect x="296" y="122" width="4" height="100" fill="#555"/><rect x="280" y="220" width="36" height="4" fill="#555"/>' +
      '<rect x="290" y="100" width="16" height="26" rx="8" fill="#9aa4ae"/><circle cx="276" cy="112" r="11" fill="none" stroke="#222" stroke-width="2"/><circle cx="276" cy="112" r="9" fill="#444" opacity=".5"/>' +
      /* headphones */
      '<path d="M318 160q14 -18 28 0" stroke="#111" stroke-width="4" fill="none"/><rect x="314" y="158" width="8" height="12" rx="3" fill="' + RED + '"/><rect x="342" y="158" width="8" height="12" rx="3" fill="' + RED + '"/>' +
      /* small stool for a little kid */
      '<rect x="260" y="200" width="44" height="6" rx="2" fill="' + GOLD + '"/><rect x="264" y="206" width="4" height="18" fill="#b8892a"/><rect x="296" y="206" width="4" height="18" fill="#b8892a"/>' +
      '<rect x="0" y="222" width="400" height="38" fill="#5a3e2a"/>' +
      '<g class="ac-note"><text x="300" y="80" font-size="20" fill="' + GOLD + '">&#9834;</text></g><g class="ac-note ac-note2"><text x="330" y="70" font-size="16" fill="' + SKY + '">&#9835;</text></g>');
  }

  /* 3. Bristol Motor Speedway - the steep half-mile bowl */
  function acspeedway() {
    const cars = ["#e63946", "#ffc94a", "#4cc9f0", "#ffffff"].map((c, i) =>
      '<g style="offset-path:path(\'M80 172 Q80 132 200 132 Q320 132 320 172 Q320 210 200 210 Q80 210 80 172 Z\');offset-rotate:auto;animation:acrace 3s linear infinite;animation-delay:-' + (i * 0.7) + 's"><rect x="-8" y="-4" width="16" height="8" rx="3" fill="' + c + '"/></g>').join("");
    let stands = "";
    for (let i = 0; i < 14; i++) stands += '<path d="M' + (12 + i * 27) + ' 104h22" stroke="' + ["#d8d8d8", "#a8b8c8", "#c8a8a8"][i % 3] + '" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#acs3)"/>' + ridges(60) +
      /* grandstands ring */
      '<ellipse cx="200" cy="172" rx="196" ry="80" fill="#6a737c"/><ellipse cx="200" cy="172" rx="186" ry="72" fill="#8a949e"/>' +
      Array.from({ length: 6 }, (_, i) => '<ellipse cx="200" cy="172" rx="' + (182 - i * 10) + '" ry="' + (70 - i * 4) + '" fill="none" stroke="' + ["#c8d0d8", "#a8b4c0"][i % 2] + '" stroke-width="3"/>').join("") +
      /* banked track */
      '<ellipse cx="200" cy="172" rx="130" ry="46" fill="#3a3d42"/><ellipse cx="200" cy="172" rx="104" ry="30" fill="#4f7a3a"/>' +
      '<ellipse cx="200" cy="172" rx="118" ry="38" fill="none" stroke="#fff" stroke-width="1" stroke-dasharray="6 6" opacity=".6"/>' +
      cars +
      /* light towers */
      '<rect x="20" y="70" width="4" height="60" fill="#555"/><rect x="12" y="64" width="20" height="8" fill="#ddd" class="ac-bulb"/><rect x="376" y="70" width="4" height="60" fill="#555"/><rect x="368" y="64" width="20" height="8" fill="#ddd" class="ac-bulb ac-bulb2"/>' +
      '<rect x="134" y="22" width="132" height="24" rx="3" fill="#111"/><text x="200" y="39" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">HALF-MILE BOWL</text>',
      sky("acs3", "#7fb8e6", "#e8eef4"));
  }

  /* 4. The front row at an arena show */
  function acfrontrow() {
    let seats = "";
    for (let i = 0; i < 8; i++) seats += '<rect x="' + (14 + i * 48) + '" y="206" width="38" height="30" rx="6" fill="' + RED + '"/><rect x="' + (12 + i * 48) + '" y="230" width="42" height="12" rx="3" fill="#a3242e"/>';
    let crowd = "";
    for (let i = 0; i < 10; i++) {
      const x = 22 + i * 40;
      crowd += '<circle cx="' + x + '" cy="186" r="9" fill="#1a1a24"/><rect x="' + (x - 10) + '" y="194" width="20" height="20" rx="6" fill="#1a1a24"/>';
      if (i % 3 === 0) crowd += '<path class="ac-hand ' + (i % 2 ? "ac-h2" : "") + '" d="M' + (x + 6) + ' 182l6 -20" stroke="#1a1a24" stroke-width="5" stroke-linecap="round"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="#0c0c18"/>' +
      '<path class="ac-beam" d="M90 0l-50 170h100z" fill="' + GOLD + '" opacity=".18"/><path class="ac-beam ac-beam2" d="M310 0l-50 170h100z" fill="' + SKY + '" opacity=".18"/>' +
      '<path class="ac-beam ac-beam2" d="M200 0l-40 160h80z" fill="' + RED + '" opacity=".14"/>' +
      /* stage */
      '<rect x="40" y="120" width="320" height="40" fill="#1e1e2c"/><rect x="40" y="118" width="320" height="4" fill="' + GOLD + '"/>' +
      '<rect x="80" y="40" width="240" height="70" rx="4" fill="#141428"/><text class="ac-bulb" x="200" y="88" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="34" fill="' + GOLD + '">FRONT ROW</text>' +
      /* mic stand on stage */
      '<rect x="198" y="96" width="4" height="24" fill="#888"/><rect x="194" y="92" width="12" height="6" rx="3" fill="#aaa"/>' +
      crowd + seats);
  }

  /* 5. State St and Moore St - the Bristol VA-TENN slogan sign lit up over State Street */
  function accorner() {
    const bulbs = (x0, x1, y) => { let s = ""; for (let x = x0; x <= x1; x += 8) s += '<circle class="ac-bulb' + ((x / 8) % 2 ? " ac-bulb2" : "") + '" cx="' + x + '" cy="' + y + '" r="1.6" fill="#fff6c8"/>'; return s; };
    return svg(
      '<rect width="400" height="260" fill="url(#acs5)"/>' +
      block(0, 80, 90, 130, "#8a4432") + block(320, 80, 96, 130, "#a0503a") +
      /* the slogan sign spanning State Street */
      '<rect x="96" y="20" width="6" height="110" fill="#3a3f46"/><rect x="298" y="20" width="6" height="110" fill="#3a3f46"/>' +
      '<rect x="90" y="18" width="220" height="40" rx="2" fill="#1c2128" stroke="#3a3f46" stroke-width="2"/>' +
      '<text x="200" y="47" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="20" fill="#fff6c8">BRISTOL VA | TENN</text>' +
      '<rect x="120" y="60" width="160" height="22" rx="2" fill="#1c2128" stroke="#3a3f46" stroke-width="2"/>' +
      '<text x="200" y="76" text-anchor="middle" ' + font + ' font-size="11" fill="#fff6c8">A GOOD PLACE TO LIVE</text>' +
      bulbs(96, 304, 16) + bulbs(124, 276, 86) +
      '<rect x="80" y="110" width="240" height="20" fill="#4a4e54"/><path d="M200 112v16" stroke="' + GOLD + '" stroke-width="2" stroke-dasharray="4 3"/>' +
      /* wall */
      '<rect x="0" y="130" width="400" height="90" fill="#7d4a3a"/>' +
      Array.from({ length: 6 }, (_, r) => '<path d="M0 ' + (136 + r * 15) + 'h400" stroke="#6a3c2e" stroke-width="1"/>').join("") +
      tag("AARON COLE", 22, 190, 38, GOLD, -5) +
      tag("BRISTOL'S FINEST", 150, 214, 18, SKY, -3) +
      tag("VA", 40, 156, 22, "#ffffff", -4) +
      '<g class="ac-sp"><circle cx="246" cy="164" r="2" fill="' + GOLD + '"/><circle cx="252" cy="158" r="1.5" fill="' + GOLD + '"/></g><g class="ac-sp ac-sp2"><circle cx="250" cy="170" r="1.6" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#b9b4a6"/><rect x="0" y="220" width="400" height="4" fill="#d8d2c4"/>' +
      '<rect x="352" y="96" width="6" height="124" fill="#6a6e72"/>' +
      sign(300, 98, 96, "State St") + sign(296, 124, 100, "Moore St"),
      sky("acs5", "#1a2340", "#4a3a5a"));
  }

  window.SCENES = { acbus, acstudio, acspeedway, acfrontrow, accorner };
})();
