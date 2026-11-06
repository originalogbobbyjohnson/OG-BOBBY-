/* donnasummer scenes (Regions tab: Boston + New England; Mission Hill). CSS classes and ids prefixed ds- (the page's own anim-train is kept).
   1 Brigham Circle on the Green Line E branch: street-running stop in the middle of Huntington Ave, the silver trolley with its green band sliding in under the wire, Mission Hill triple-deckers up the slope behind.
   2 Grant A.M.E. Church on Washington St, where ten-year-old LaDonna Gaines first sang in public: red-brick gabled front, the arched stained-glass window glowing, notes floating out the open doors.
   3 Jeremiah E. Burke High School on Washington St in Dorchester, where she sang in the glee club: red brick with limestone columns, the school flag waving, a mirror-ball mural on the side wall, notes rising.
   4 The Colonial Theatre on Boylston St, home of the 2022 Boston run of her musical: the tall cream office block, the vertical COLONIAL sign, the marquee bulbs chasing, the crowd lined up.
   5 Huntington Ave and Parker Hill Ave (the street Boston renamed Donna Summer Ave; she grew up at 16 Parker Hill): green signs, DONNA tagged on the brick, triple-deckers climbing Parker Hill with the brick hospital on top behind. */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes dsflk{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.ds-flk{animation:dsflk 2.2s infinite}.ds-flk2{animation-delay:-.9s}' +
    '@keyframes dschase{0%,100%{opacity:1}50%{opacity:.2}}.ds-bulb{animation:dschase .8s steps(1) infinite}.ds-bulb2{animation-delay:-.4s}' +
    '@keyframes dshop{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.ds-hop{animation:dshop .9s ease-in-out infinite}.ds-hop2{animation-delay:-.3s}.ds-hop3{animation-delay:-.6s}' +
    '@keyframes dscar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.ds-car{animation:dscar 8s linear infinite}.ds-car2{animation-duration:11s;animation-delay:-5s}' +
    '@keyframes dsnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.ds-note{animation:dsnote 3s linear infinite}.ds-note2{animation-delay:-1s}.ds-note3{animation-delay:-2s}' +
    '@keyframes dswave{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.ds-wave{transform-box:fill-box;transform-origin:0 50%;animation:dswave 1.4s ease-in-out infinite}' +
    '@keyframes dsglint{0%,100%{opacity:.15}50%{opacity:1}}.ds-gl{animation:dsglint 1.3s ease-in-out infinite}.ds-gl2{animation-delay:-.45s}.ds-gl3{animation-delay:-.9s}' +
    '@keyframes dssweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.ds-beam{transform-box:fill-box;transform-origin:50% 100%;animation:dssweep 4s ease-in-out infinite}.ds-beam2{animation-delay:-2s}' +
    '@keyframes dssp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-20px);opacity:0}}.ds-sp{animation:dssp 1.6s ease-out infinite}.ds-sp2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97 + 13) % 400) + '" cy="' + (8 + (i * 53) % 56) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const bricks = (y0, y1, c, x0, x1) => { x0 = x0 || 0; x1 = x1 || 400; let b = ""; for (let y = y0; y < y1; y += 13) for (let x = x0 + (((y - y0) / 13) % 2 ? -18 : 0); x < x1; x += 36) b += '<rect x="' + Math.max(x, x0) + '" y="' + y + '" width="' + Math.min(34, x1 - Math.max(x, x0)) + '" height="11" fill="' + c + '"/>'; return b; };
  const signs = (x, a, b) =>
    '<rect x="' + (x + 54) + '" y="62" width="5" height="148" fill="#4a5058"/>' +
    '<rect x="' + x + '" y="58" width="114" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
    '<text x="' + (x + 57) + '" y="73" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">' + a + '</text>' +
    '<rect x="' + x + '" y="82" width="114" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
    '<text x="' + (x + 57) + '" y="97" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">' + b + '</text>';
  const GOLD = "#ffd166", PINK = "#ff4fa3", SKY = "#7fd8ff";
  /* a Boston triple-decker: clapboard box, bay windows, flat roof with a cornice */
  const triple = (x, base, w, c, trim) => {
    const h = 66;
    let r = '<rect x="' + x + '" y="' + (base - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
      '<rect x="' + (x - 2) + '" y="' + (base - h - 4) + '" width="' + (w + 4) + '" height="5" fill="' + trim + '"/>';
    for (let f = 0; f < 3; f++) {
      r += '<rect x="' + (x + 4) + '" y="' + (base - h + 4 + f * 21) + '" width="' + (w * 0.42) + '" height="17" fill="' + trim + '" opacity=".35"/>';
      for (let i = 0; i < 2; i++) r += '<rect x="' + (x + 7 + i * (w * 0.2)) + '" y="' + (base - h + 7 + f * 21) + '" width="' + (w * 0.14) + '" height="11" fill="' + ((x + f + i) % 3 ? "#ffd98a" : "#2a3140") + '" class="' + ((x + f * 2 + i) % 4 ? "" : "ds-flk") + '"/>';
      r += '<rect x="' + (x + w * 0.66) + '" y="' + (base - h + 7 + f * 21) + '" width="' + (w * 0.2) + '" height="11" fill="' + ((x + f) % 2 ? "#2a3140" : "#ffd98a") + '"/>';
    }
    return r;
  };

  /* 1. Brigham Circle, Green Line E, in the median of Huntington Ave */
  function dsstop() {
    let hill = "";
    [[-10, 120, 54, "#c9b48f", "#efe6d2"], [48, 110, 50, "#8fa3b8", "#e9eef3"], [102, 100, 52, "#b97a6a", "#f1e2d6"], [160, 92, 50, "#9fb08a", "#eef1e4"],
     [216, 88, 54, "#d6c27a", "#f6efd2"], [276, 96, 50, "#7f8fa8", "#e4e9f0"], [332, 104, 58, "#c48d73", "#f2e3d8"]].forEach(t => { hill += triple(t[0], t[1], t[2], t[3], t[4]); });
    let win = "";
    for (let x = 36; x < 300; x += 26) if (x < 156 || x > 176) win += '<rect x="' + x + '" y="150" width="18" height="18" rx="2" fill="#bfe0f5" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ds1)"/>' + stars(10) +
      '<path d="M0 132L0 96Q120 64 220 70T400 84V132z" fill="#2e2a3e"/>' + hill +
      '<rect x="0" y="120" width="400" height="22" fill="#2b2a33"/>' +
      /* overhead wire and poles */
      '<path d="M0 104H400" stroke="#1a1a1a" stroke-width="1.6"/><rect x="40" y="98" width="4" height="100" fill="#55595f"/><rect x="356" y="98" width="4" height="100" fill="#55595f"/>' +
      /* the station sign */
      '<rect x="252" y="28" width="140" height="44" rx="4" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<circle cx="270" cy="50" r="11" fill="#00843d"/><text x="270" y="55" text-anchor="middle" ' + F + ' font-weight="700" font-size="13" fill="#fff">E</text>' +
      '<text x="330" y="47" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">BRIGHAM</text>' +
      '<text x="330" y="61" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">CIRCLE</text>' +
      /* the trolley slides in: silver body, green band, pantograph on the wire */
      '<g class="anim-train">' +
        '<path d="M150 140l14-34M178 106h-30" stroke="#333" stroke-width="2" fill="none"/>' +
        '<rect x="14" y="140" width="146" height="62" rx="6" fill="#d9dde1" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="164" y="140" width="146" height="62" rx="8" fill="#d9dde1" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="158" y="146" width="8" height="52" fill="#3a3f46"/>' + win +
        '<rect x="14" y="176" width="296" height="9" fill="#00843d"/>' +
        '<rect x="232" y="144" width="70" height="10" rx="2" fill="#1d1d1d"/><text x="267" y="152" text-anchor="middle" ' + F + ' font-size="7" font-weight="700" fill="#ffcf4a">E  HEATH ST</text>' +
        '<circle cx="50" cy="204" r="9" fill="#1a1a1a"/><circle cx="124" cy="204" r="9" fill="#1a1a1a"/><circle cx="200" cy="204" r="9" fill="#1a1a1a"/><circle cx="276" cy="204" r="9" fill="#1a1a1a"/>' +
        '<circle cx="306" cy="190" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* the low median platform and the road */
      '<rect x="0" y="208" width="400" height="10" fill="#9a978f"/>' +
      '<rect x="0" y="218" width="400" height="42" fill="#2b2b30"/><path d="M0 240h400" stroke="#d8c25a" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="ds-car2"><rect x="0" y="242" width="46" height="13" rx="4" fill="#3d6fb6"/></g>' +
      tag("MISSION HILL", 12, 252, 17, GOLD, -3) + tag("DONNA", 318, 252, 22, PINK, -8),
      sky("ds1", "#171433", "#6a3d6e"));
  }

  /* 2. Grant A.M.E. Church, Washington St: where she first sang at ten */
  function dschurch() {
    let glass = "";
    const cols = ["#ff4fa3", "#ffd166", "#7fd8ff", "#7ee08a", "#c38bff"];
    for (let i = 0; i < 5; i++) for (let j = 0; j < 4; j++) glass += '<rect x="' + (176 + i * 10) + '" y="' + (86 + j * 12) + '" width="9" height="11" fill="' + cols[(i + j) % 5] + '" class="' + ((i + j) % 2 ? "ds-flk" : "ds-flk ds-flk2") + '" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ds2)"/>' + stars(14) +
      '<circle cx="342" cy="34" r="12" fill="#fff4dc" opacity=".85"/>' +
      /* neighbors: South End brick bow-front rows */
      '<rect x="0" y="96" width="96" height="124" fill="#6e3428"/><rect x="304" y="96" width="96" height="124" fill="#6e3428"/>' +
      '<rect x="10" y="110" width="16" height="20" fill="#ffd98a" class="ds-flk"/><rect x="40" y="110" width="16" height="20" fill="#2a3140"/><rect x="70" y="110" width="16" height="20" fill="#ffd98a"/>' +
      '<rect x="318" y="110" width="16" height="20" fill="#2a3140"/><rect x="348" y="110" width="16" height="20" fill="#ffd98a" class="ds-flk ds-flk2"/><rect x="376" y="110" width="16" height="20" fill="#ffd98a"/>' +
      /* the church: red brick gable, arched window, doors */
      '<path d="M110 220V84L200 30l90 54v136z" fill="#8c3b2c"/>' + bricks(86, 220, "#7a3123", 112, 288) +
      '<path d="M110 84L200 30l90 54" stroke="#e8dcc4" stroke-width="5" fill="none"/>' +
      '<rect x="196" y="12" width="8" height="22" fill="#e8dcc4"/><rect x="190" y="18" width="20" height="5" fill="#e8dcc4"/>' +
      '<path d="M172 134V96q0-24 28-24t28 24v38z" fill="#1d1730"/>' + '<g clip-path="url(#dsarch)">' + glass + '</g>' +
      '<path d="M172 134V96q0-24 28-24t28 24v38z" fill="none" stroke="#e8dcc4" stroke-width="4"/>' +
      '<rect x="122" y="140" width="156" height="16" fill="#e8dcc4"/><text x="200" y="152" text-anchor="middle" ' + F + ' font-weight="700" font-size="9.5" fill="#5a2318">GRANT A.M.E. CHURCH</text>' +
      '<path d="M178 220v-44q0-14 22-14t22 14v44z" fill="#ffd98a"/><path d="M200 166v54" stroke="#8c3b2c" stroke-width="2"/>' +
      '<rect x="168" y="216" width="64" height="6" fill="#bdb6a8"/><rect x="160" y="222" width="80" height="6" fill="#aaa397"/>' +
      '<text class="ds-note" x="190" y="172" ' + F + ' font-size="16" fill="' + GOLD + '">♪</text><text class="ds-note ds-note2" x="206" y="176" ' + F + ' font-size="14" fill="' + PINK + '">♫</text><text class="ds-note ds-note3" x="198" y="168" ' + F + ' font-size="13" fill="' + SKY + '">♪</text>' +
      '<rect x="0" y="228" width="400" height="32" fill="#2b2b30"/><rect x="0" y="224" width="400" height="5" fill="#9a978f"/>' +
      '<rect x="62" y="150" width="4" height="76" fill="#33363b"/><circle class="ds-flk" cx="64" cy="148" r="7" fill="#ffe7a8"/>' +
      '<text x="392" y="250" text-anchor="end" ' + F + ' font-weight="700" font-size="10" fill="#d8d2c4">WASHINGTON ST</text>',
      sky("ds2", "#0f1430", "#3b3264") + '<clipPath id="dsarch"><path d="M172 134V96q0-24 28-24t28 24v38z"/></clipPath>');
  }

  /* 3. Jeremiah E. Burke High School, Dorchester: the glee club years */
  function dsschool() {
    let wins = "";
    for (let x = 22; x < 296; x += 30) { if (x > 130 && x < 220) continue; for (let f = 0; f < 3; f++) wins += '<rect x="' + x + '" y="' + (100 + f * 34) + '" width="16" height="22" fill="#a9c8de" stroke="#efe6d2" stroke-width="2"/>'; }
    let cols = "";
    for (let i = 0; i < 4; i++) cols += '<rect x="' + (140 + i * 24) + '" y="112" width="10" height="84" fill="#efe6d2"/>';
    let ball = "";
    for (let i = -3; i <= 3; i++) for (let j = -3; j <= 3; j++) if (i * i + j * j <= 10) ball += '<rect x="' + (346 + i * 5.4) + '" y="' + (154 + j * 5.4) + '" width="4.8" height="4.8" fill="' + ((i + j) % 2 ? "#d9e3ee" : "#8fa3b8") + '" class="' + ((i * 3 + j) % 3 === 0 ? "ds-gl" : (i + j) % 2 ? "ds-gl ds-gl2" : "ds-gl ds-gl3") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ds3)"/>' +
      '<circle cx="356" cy="40" r="16" fill="#fff3c4"/>' +
      /* main block with the carved name on the parapet */
      '<rect x="6" y="80" width="296" height="134" fill="#9a4632"/>' + bricks(80, 214, "#8a3d2b", 6, 302) +
      '<rect x="14" y="56" width="280" height="24" fill="#9a4632"/><rect x="24" y="60" width="260" height="16" fill="#efe6d2"/>' +
      '<text x="154" y="72" text-anchor="middle" ' + F + ' font-weight="700" font-size="9.5" fill="#5a2318">JEREMIAH E. BURKE HIGH SCHOOL</text>' +
      '<rect x="2" y="80" width="304" height="6" fill="#efe6d2"/>' + wins +
      '<path d="M128 112L181 90l53 22z" fill="#efe6d2"/><rect x="126" y="110" width="110" height="6" fill="#efe6d2"/>' + cols +
      '<rect x="128" y="194" width="106" height="8" fill="#efe6d2"/>' +
      '<rect x="166" y="152" width="28" height="42" fill="#3a2a22"/>' +
      /* lower side wing with the mirror-ball mural */
      '<rect x="302" y="112" width="92" height="102" fill="#94432f"/>' + bricks(112, 214, "#843a29", 302, 394) + '<rect x="300" y="108" width="96" height="6" fill="#efe6d2"/>' +
      '<rect x="312" y="122" width="72" height="80" rx="3" fill="#2a1840" stroke="#efe6d2" stroke-width="2"/>' + ball +
      '<path d="M346 124v10" stroke="#d9e3ee" stroke-width="1.5"/>' +
      '<circle class="ds-sp" cx="322" cy="190" r="2.4" fill="' + PINK + '"/><circle class="ds-sp ds-sp2" cx="372" cy="188" r="2.4" fill="' + SKY + '"/>' +
      /* flag on the roof */
      '<rect x="40" y="18" width="3" height="40" fill="#cfcfcf"/><rect class="ds-wave" x="43" y="20" width="30" height="16" fill="' + GOLD + '"/>' +
      '<text class="ds-note" x="100" y="150" ' + F + ' font-size="16" fill="' + GOLD + '">\u266A</text><text class="ds-note ds-note2" x="250" y="146" ' + F + ' font-size="16" fill="' + PINK + '">\u266B</text><text class="ds-note ds-note3" x="176" y="140" ' + F + ' font-size="14" fill="#fff">\u266A</text>' +
      '<rect x="0" y="214" width="400" height="10" fill="#9a978f"/><rect x="0" y="224" width="400" height="36" fill="#2b2b30"/>' +
      '<g class="ds-car"><rect x="0" y="234" width="50" height="16" rx="5" fill="#e3b33a"/><circle cx="12" cy="251" r="4" fill="#111"/><circle cx="38" cy="251" r="4" fill="#111"/></g>' +
      tag("GLEE CLUB", 18, 252, 18, PINK, -3),
      sky("ds3", "#6fb2e6", "#cfe6f5"));
  }

  /* 4. The Colonial Theatre, Boylston St: her musical comes home */
  function dstheatre() {
    let wins = "";
    for (let f = 0; f < 7; f++) for (let x = 120; x < 300; x += 22) wins += '<rect x="' + x + '" y="' + (20 + f * 15) + '" width="12" height="9" fill="' + ((x + f * 3) % 4 ? "#2a3140" : "#ffd98a") + '"/>';
    let bulbs = "";
    for (let x = 108; x <= 292; x += 12) bulbs += '<circle class="ds-bulb ' + (x % 24 ? "ds-bulb2" : "") + '" cx="' + x + '" cy="132" r="2.3" fill="#ffe7a8"/><circle class="ds-bulb ' + (x % 24 ? "" : "ds-bulb2") + '" cx="' + x + '" cy="170" r="2.3" fill="#ffe7a8"/>';
    let blade = "";
    "COLONIAL".split("").forEach((c, i) => { blade += '<text x="336" y="' + (44 + i * 13) + '" text-anchor="middle" ' + A + ' font-size="12" fill="#ffe7a8" class="ds-flk ' + (i % 2 ? "ds-flk2" : "") + '">' + c + '</text>'; });
    let crowd = "";
    for (let i = 0; i < 12; i++) crowd += '<g class="ds-hop ' + ["", "ds-hop2", "ds-hop3"][i % 3] + '"><rect x="' + (18 + i * 32) + '" y="214" width="16" height="30" rx="7" fill="' + ["#2a2f3a", "#3b2a3a", "#22303a"][i % 3] + '"/><circle cx="' + (26 + i * 32) + '" cy="208" r="7" fill="#1c1c22"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ds4)"/>' + stars(12) +
      '<path class="ds-beam" d="M60 200L40 20h40z" fill="' + SKY + '" opacity=".12"/><path class="ds-beam ds-beam2" d="M368 200L348 20h40z" fill="' + PINK + '" opacity=".12"/>' +
      '<rect x="100" y="8" width="210" height="200" fill="#d8c9a8"/><rect x="96" y="4" width="218" height="8" fill="#efe3c4"/>' + wins +
      '<rect x="324" y="30" width="24" height="112" rx="3" fill="#3a1630" stroke="#ffd166" stroke-width="2"/>' + blade +
      '<rect x="100" y="126" width="200" height="50" fill="#1a0f1e" stroke="#ffd166" stroke-width="2"/>' + bulbs +
      '<text x="200" y="150" text-anchor="middle" ' + A + ' font-size="17" fill="' + PINK + '">SUMMER</text>' +
      '<text x="200" y="164" text-anchor="middle" ' + F + ' font-weight="700" font-size="8.5" fill="#fff">THE DONNA SUMMER MUSICAL</text>' +
      '<rect x="130" y="176" width="140" height="32" fill="#ffd98a" opacity=".85"/><path d="M165 176v32M200 176v32M235 176v32" stroke="#8a6a3a" stroke-width="2"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#2b2b30"/><rect x="0" y="204" width="400" height="5" fill="#9a978f"/>' + crowd +
      '<text x="22" y="40" ' + F + ' font-weight="700" font-size="10" fill="#d8d2c4">BOYLSTON ST</text>',
      sky("ds4", "#0b0f24", "#3a2350"));
  }

  /* 5. Huntington Ave and Parker Hill Ave: Donna Summer Ave */
  function dscorner() {
    let hill = "";
    [[-6, 92, 46, "#c9b48f", "#efe6d2"], [40, 84, 46, "#8fa3b8", "#e9eef3"], [86, 76, 46, "#b97a6a", "#f1e2d6"], [252, 74, 46, "#d6c27a", "#f6efd2"], [298, 82, 46, "#7f8fa8", "#e4e9f0"], [344, 90, 60, "#c48d73", "#f2e3d8"]].forEach(t => { hill += triple(t[0], t[1], t[2], t[3], t[4]); });
    let hosp = "";
    for (let f = 0; f < 4; f++) for (let x = 144; x < 250; x += 12) hosp += '<rect x="' + x + '" y="' + (16 + f * 11) + '" width="7" height="6" fill="' + ((x + f) % 3 ? "#ffd98a" : "#2a3140") + '" class="' + ((x + f) % 5 ? "" : "ds-flk") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a1210"/>' +
      '<rect x="0" y="0" width="400" height="104" fill="url(#ds5)"/>' + stars(8) +
      '<path d="M0 104V70Q120 10 200 8T400 66V104z" fill="#2c2840"/>' +
      '<rect x="136" y="8" width="122" height="54" fill="#7a3a2a"/><rect x="132" y="4" width="130" height="6" fill="#5a2a1e"/>' + hosp + hill +
      '<rect x="0" y="100" width="400" height="4" fill="#2a1a14"/>' +
      bricks(104, 210, "#5a2e22") +
      tag("DONNA", 22, 168, 52, PINK, -6) + tag("LAST DANCE", 40, 202, 22, GOLD, -3) + tag("PARKER HILL", 214, 172, 14, SKY, -7) +
      '<circle class="ds-sp" cx="230" cy="150" r="3" fill="' + PINK + '"/><circle class="ds-sp ds-sp2" cx="238" cy="158" r="2" fill="' + PINK + '"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#8d8b85"/><rect x="0" y="208" width="400" height="4" fill="#b1aea6"/>' +
      '<g class="ds-car"><rect x="0" y="232" width="50" height="16" rx="5" fill="#c64a3a"/><circle cx="12" cy="249" r="4" fill="#111"/><circle cx="38" cy="249" r="4" fill="#111"/></g>' +
      signs(276, "Huntington Ave", "Parker Hill Ave") +
      '<rect x="288" y="106" width="90" height="16" rx="2" fill="#7a4b22" stroke="#fff" stroke-width="1"/>' +
      '<text x="333" y="118" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#fff">Donna Summer Ave</text>',
      sky("ds5", "#0b1622", "#3a2a50"));
  }

  window.SCENES = { dsstop: dsstop, dschurch: dschurch, dsschool: dsschool, dstheatre: dstheatre, dscorner: dscorner };
})();
