/* readsouthallband scenes (Regions: MORE OF THE SOUTH; Genres: country / red dirt. Read Southall is a native of Blair, Oklahoma (Wikipedia);
   the band came up in Stillwater. Blair = Jackson County, ~10 mi north of Altus at US 283 x SH 6 / SH 19; irrigated cotton country,
   cotton gins + grain elevator, the old Orient railway line (okhistory.org). Lake Altus-Lugert / Quartz Mountain to the north.
   CSS classes prefixed rsb- (the page's own anim-train is kept). No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const DIRT = "#c8562e", CREAM = "#f4ead8", ROSE = "#e0a088", GOLD = "#e8b04a", COTTON = "#f6f2ea";
  const css = '<style>' +
    '@keyframes rsbglow{0%,100%{opacity:.45}50%{opacity:1}}.rsb-glow{animation:rsbglow 2.2s ease-in-out infinite}.rsb-g2{animation-delay:-1.1s}' +
    '@keyframes rsbcloud{0%{transform:translateX(0)}100%{transform:translateX(40px)}}.rsb-cl{animation:rsbcloud 14s ease-in-out infinite alternate}' +
    '@keyframes rsbcar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.rsb-car{animation:rsbcar 7s linear infinite}' +
    '@keyframes rsbtrain{0%{transform:translateX(420px)}100%{transform:translateX(-520px)}}.rsb-train{animation:rsbtrain 11s linear infinite}' +
    '@keyframes rsbsway{0%,100%{transform:skewX(-4deg)}50%{transform:skewX(4deg)}}.rsb-sway{transform-box:fill-box;transform-origin:50% 100%;animation:rsbsway 2.6s ease-in-out infinite}' +
    '@keyframes rsbdust{0%{transform:translate(0,0);opacity:.7}100%{transform:translate(-40px,-14px);opacity:0}}.rsb-dust{animation:rsbdust 1.6s ease-out infinite}.rsb-d2{animation-delay:-.8s}' +
    '@keyframes rsbnote{0%{transform:translate(0,0);opacity:1}100%{transform:translate(14px,-40px);opacity:0}}.rsb-note{animation:rsbnote 2.4s ease-out infinite}.rsb-n2{animation-delay:-.8s}.rsb-n3{animation-delay:-1.6s}' +
    '@keyframes rsbripple{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.rsb-rip{animation:rsbripple 3s ease-in-out infinite}' +
    '@keyframes rsbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rsb-sp{animation:rsbspray 1.4s ease-out infinite}.rsb-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const cap = (txt, y) => '<text x="200" y="' + (y || 252) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  /* US route shield */
  const usShield = (x, y, n) => '<g transform="translate(' + x + ' ' + y + ')"><rect x="-18" y="-18" width="36" height="36" fill="#111"/><path d="M-14 -14h28q2 14 -4 22q-6 8 -10 10q-4 -2 -10 -10q-6 -8 -4 -22z" fill="#fff"/><text x="0" y="5" text-anchor="middle" ' + font + ' font-size="12" fill="#111">' + n + '</text></g>';
  /* Oklahoma state highway marker: white square, black state outline, number */
  const okShield = (x, y, n) => '<g transform="translate(' + x + ' ' + y + ')"><rect x="-18" y="-18" width="36" height="36" fill="#fff" stroke="#111" stroke-width="2"/><path d="M-15 -8h12v-4h18v18l-4 2l-8 -2l-6 2l-6 -2l-6 -2z" fill="none" stroke="#111" stroke-width="1.5"/><text x="2" y="6" text-anchor="middle" ' + font + ' font-size="12" fill="#111">' + n + '</text></g>';
  const pickup = (c, s) => '<g transform="scale(' + (s || 1) + ')"><rect x="0" y="6" width="74" height="20" rx="4" fill="' + c + '"/><path d="M42 6v-14h18l12 14z" fill="' + c + '"/><path d="M46 4v-9h12l8 9z" fill="#bfe0ee"/>' +
    '<circle cx="16" cy="28" r="7" fill="#222"/><circle cx="16" cy="28" r="3" fill="#aaa"/><circle cx="58" cy="28" r="7" fill="#222"/><circle cx="58" cy="28" r="3" fill="#aaa"/><rect x="70" y="12" width="5" height="4" fill="#ffe9a0" class="rsb-glow"/></g>';
  /* cotton rows: green plants dotted with white bolls */
  const cotton = (y0, rows) => Array.from({ length: rows }, (_, r) => Array.from({ length: 20 }, (_, i) => {
    const x = i * 21 + (r % 2) * 10, y = y0 + r * 14;
    return '<ellipse cx="' + x + '" cy="' + y + '" rx="9" ry="5" fill="#4a6a2a"/><circle cx="' + (x - 4) + '" cy="' + (y - 3) + '" r="2.6" fill="' + COTTON + '"/><circle cx="' + (x + 3) + '" cy="' + (y - 4) + '" r="2.4" fill="' + COTTON + '"/>';
  }).join("")).join("");
  /* grain elevator */
  const elevator = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' + [0, 22, 44].map(dx => '<rect x="' + dx + '" y="0" width="22" height="110" fill="#d8d2c4"/><path d="M' + dx + ' 0h22" stroke="#b8b0a0" stroke-width="2"/>').join("") +
    '<rect x="16" y="-26" width="34" height="28" fill="#c8c0b0"/><path d="M16 -26l17 -10l17 10z" fill="#a8a090"/><text x="33" y="60" text-anchor="middle" ' + font + ' font-size="12" fill="' + DIRT + '">BLAIR</text></g>';

  /* ROOM 0: US 283 north out of Altus: the guide sign for Blair at the SH 6 / SH 19 junction, cotton fields both sides, red dirt shoulders, a pickup rolling in */
  function rsbhwy() {
    return svg(
      '<rect width="400" height="260" fill="url(#rsb1)"/>' +
      '<g class="rsb-cl"><ellipse cx="80" cy="30" rx="50" ry="9" fill="#fff" opacity=".6"/><ellipse cx="300" cy="22" rx="44" ry="8" fill="#fff" opacity=".5"/></g>' +
      elevator(318, 64, .7) +
      '<rect x="0" y="140" width="400" height="40" fill="#5a7a30"/>' + cotton(150, 2) +
      '<rect x="0" y="176" width="400" height="6" fill="' + DIRT + '"/><rect x="0" y="180" width="400" height="80" fill="#4a4a50"/><path d="M0 218h400" stroke="#f0d040" stroke-width="2.5" stroke-dasharray="20 14"/><path d="M0 182h400" stroke="#fff" stroke-width="2"/><path d="M0 256h400" stroke="#fff" stroke-width="2.5"/>' +
      '<rect x="140" y="100" width="5" height="80" fill="#8a8e94"/><rect x="262" y="100" width="5" height="80" fill="#8a8e94"/>' +
      '<rect x="110" y="40" width="190" height="66" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' + usShield(140, 72, "283") +
      '<text x="166" y="62" ' + font + ' font-size="10" fill="#fff">NORTH</text><text x="166" y="86" ' + font + ' font-size="20" fill="#fff">Blair</text><text x="232" y="86" ' + font + ' font-size="10" fill="#fff">SH 6 / SH 19</text>' +
      '<rect x="40" y="128" width="4" height="52" fill="#8a8e94"/>' + okShield(42, 110, "19") +
      '<g class="anim-train"><g transform="translate(170 192)">' + pickup(DIRT) + '</g></g>' +
      '<g class="rsb-car"><rect x="0" y="230" width="40" height="14" rx="3" fill="#d8d8dc"/><circle cx="9" cy="244" r="4" fill="#222"/><circle cx="31" cy="244" r="4" fill="#222"/></g>' +
      cap("US 283 NORTH OUT OF ALTUS  ·  BLAIR, OKLAHOMA", 252),
      sky("rsb1", "#7fb6e0", "#f4e4c6"));
  }

  /* ROOM 1: cotton country: the town's cotton gin with its tin sheds and module trailers, the grain elevator, a freight rolling down the old Orient line */
  function rsbgin() {
    return svg(
      '<rect width="400" height="260" fill="url(#rsb2)"/>' +
      elevator(286, 40, .95) +
      /* gin: tin building, suction pipes, cotton module */
      '<rect x="40" y="86" width="190" height="78" fill="#a8acb0"/>' + Array.from({ length: 24 }, (_, i) => '<path d="M' + (44 + i * 8) + ' 86v78" stroke="#8e9296" stroke-width="2"/>').join("") +
      '<path d="M34 88l101 -30l101 30z" fill="#7e8286"/><text x="135" y="112" text-anchor="middle" ' + font + ' font-size="13" fill="' + DIRT + '">COTTON GIN</text>' +
      '<path d="M200 60v-30h40v50" stroke="#c8c8c8" stroke-width="8" fill="none"/><rect x="226" y="80" width="28" height="40" fill="#c8c8c8"/>' +
      '<rect x="10" y="132" width="70" height="32" rx="4" fill="' + COTTON + '"/><path d="M14 140q30 -8 62 0" stroke="#d8d0c0" stroke-width="2" fill="none"/>' +
      '<g class="rsb-dust"><circle cx="230" cy="26" r="6" fill="' + COTTON + '" opacity=".8"/></g><g class="rsb-dust rsb-d2"><circle cx="236" cy="22" r="4" fill="' + COTTON + '" opacity=".8"/></g>' +
      /* tracks + freight */
      '<rect x="0" y="176" width="400" height="10" fill="#6a5040"/>' + Array.from({ length: 30 }, (_, i) => '<rect x="' + (i * 14) + '" y="174" width="6" height="14" fill="#4a3424"/>').join("") + '<path d="M0 176h400M0 184h400" stroke="#9a9a9a" stroke-width="2"/>' +
      '<g class="rsb-train"><g transform="translate(0 140)">' + [0, 1, 2, 3].map(i => '<rect x="' + (i * 92) + '" y="' + (i ? 8 : 0) + '" width="86" height="' + (i ? 26 : 34) + '" rx="3" fill="' + (i ? "#7a3a28" : "#e8b04a") + '"/>' + (i ? '' : '<rect x="56" y="4" width="24" height="12" fill="#bfe0ee"/>') + '<circle cx="' + (i * 92 + 16) + '" cy="36" r="5" fill="#222"/><circle cx="' + (i * 92 + 70) + '" cy="36" r="5" fill="#222"/>').join("") + '</g></g>' +
      '<rect x="0" y="188" width="400" height="72" fill="#5a7a30"/>' + cotton(200, 4) +
      cap("JACKSON COUNTY COTTON  ·  THE GIN AND THE ELEVATOR"),
      sky("rsb2", "#8cc0e6", "#f4ecda"));
  }

  /* ROOM 2: Stillwater, where the band came up in red dirt: an old farmhouse out on a red dirt road, guitars on the porch, a jam going, notes drifting */
  function rsbstill() {
    return svg(
      '<rect width="400" height="260" fill="url(#rsb3)"/>' +
      '<circle cx="320" cy="130" r="40" fill="#ffcf7a" opacity=".85"/>' +
      '<path d="M0 150q100 -14 200 -4t200 -6v120H0z" fill="#7a8a40"/>' +
      '<path d="M170 260l30 -110h20l40 110z" fill="' + DIRT + '"/><path d="M196 200h30M190 230h40" stroke="#a8401e" stroke-width="2"/>' +
      /* farmhouse */
      '<g transform="translate(30 70)"><path d="M0 50l70 -40l70 40v66h-140z" fill="' + CREAM + '"/><path d="M-6 52l76 -44l76 44" stroke="#6a3a2a" stroke-width="5" fill="none"/>' +
      '<rect x="0" y="80" width="140" height="6" fill="#8a6a4a"/>' + [6, 46, 94, 134].map(x => '<rect x="' + (x - 2) + '" y="86" width="4" height="30" fill="#e8dcc4"/>').join("") +
      '<rect x="56" y="88" width="24" height="28" fill="#5a3a2a"/><rect x="14" y="56" width="22" height="18" fill="#ffd98a" class="rsb-glow"/><rect x="104" y="56" width="22" height="18" fill="#ffd98a" class="rsb-glow rsb-g2"/>' +
      /* guitars leaning on the porch */
      '<g transform="translate(24 92)"><ellipse cx="0" cy="18" rx="7" ry="9" fill="#b8742a"/><ellipse cx="0" cy="8" rx="5" ry="6" fill="#b8742a"/><rect x="-1" y="-14" width="2" height="18" fill="#2a1a10"/><circle cx="0" cy="16" r="2" fill="#2a1a10"/></g>' +
      '<g transform="translate(116 92)"><ellipse cx="0" cy="18" rx="7" ry="9" fill="#d8a050"/><ellipse cx="0" cy="8" rx="5" ry="6" fill="#d8a050"/><rect x="-1" y="-14" width="2" height="18" fill="#2a1a10"/><circle cx="0" cy="16" r="2" fill="#2a1a10"/></g></g>' +
      ['rsb-note', 'rsb-note rsb-n2', 'rsb-note rsb-n3'].map((c, i) => '<g class="' + c + '"><text x="' + (90 + i * 16) + '" y="150" font-size="16" fill="' + GOLD + '">&#9835;</text></g>').join("") +
      /* windmill */
      '<g transform="translate(300 60)"><path d="M-10 90l10 -80l10 80" stroke="#8a8e94" stroke-width="3" fill="none"/><g class="rsb-sway">' + [0, 60, 120, 180, 240, 300].map(a => '<rect x="-1.5" y="-22" width="3" height="22" fill="#c8ccd0" transform="rotate(' + a + ' 0 10) translate(0 10)"/>').join("") + '</g></g>' +
      cap("STILLWATER  ·  OUT ON THE RED DIRT ROAD"),
      sky("rsb3", "#f0a060", "#f8dca8"));
  }

  /* ROOM 3: Lake Altus-Lugert under Quartz Mountain at sunset (the lake that waters Blair's cotton): pink granite, the water rippling, a rose-gold sky */
  function rsblake() {
    return svg(
      '<rect width="400" height="260" fill="url(#rsb4)"/>' +
      '<circle cx="200" cy="120" r="34" fill="#ffd7a8" opacity=".9"/>' +
      '<path d="M0 140l40 -50l30 22l40 -60l40 44l30 -20l50 64z" fill="#b87a68"/><path d="M110 52l18 30l-10 10M150 96l-12 14" stroke="#8a5446" stroke-width="3" fill="none"/>' +
      '<path d="M210 140l50 -70l26 26l34 -46l40 50l40 -10v50z" fill="#a86a5a"/><path d="M320 50l14 30l-8 12" stroke="#7a4a3e" stroke-width="3" fill="none"/>' +
      '<rect x="0" y="140" width="400" height="80" fill="#5a7aa0"/>' +
      '<g class="rsb-rip">' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (20 + i * 48) + ' ' + (154 + (i % 3) * 18) + 'h26" stroke="' + ROSE + '" stroke-width="2" opacity=".8"/>').join("") + '</g>' +
      '<path d="M170 150h60M180 162h40M190 174h20" stroke="#ffe0b8" stroke-width="3" class="rsb-glow"/>' +
      '<path d="M0 220q120 -16 240 -4t160 -4v48H0z" fill="#8a5a3a"/>' +
      '<g transform="translate(64 196)"><path d="M0 0h50l-8 10h-34z" fill="#3a2a20"/><rect x="22" y="-26" width="2" height="26" fill="#3a2a20"/></g>' +
      cap("LAKE ALTUS-LUGERT  ·  QUARTZ MOUNTAIN  ·  ROSE GOLD SKY"),
      sky("rsb4", "#5a4a8a", "#f0a888"));
  }

  /* ROOM 4: his corner: US 283 and SH 19 in Blair, his name tagged on a red-brick wall, the grain elevator behind */
  function rsbcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#rsb5)"/>' +
      elevator(286, 30, 1.05) +
      '<path d="M0 164h400v96H0z" fill="#3a3a40"/><path d="M0 206h400" stroke="#f0d040" stroke-width="2" stroke-dasharray="16 12"/><rect x="0" y="160" width="400" height="6" fill="' + DIRT + '"/>' +
      '<rect x="0" y="84" width="196" height="80" fill="#8a3e28"/>' + Array.from({ length: 6 }, (_, r) => '<path d="M0 ' + (92 + r * 12) + 'h196" stroke="#5e2416" stroke-width="1.5"/>').join("") +
      tag("READ", 20, 120, 26, CREAM, -6) + tag("SOUTHALL", 12, 156, 30, ROSE, -6) +
      '<circle cx="180" cy="124" r="3" fill="' + ROSE + '" class="rsb-sp"/><circle cx="186" cy="120" r="2" fill="' + ROSE + '" class="rsb-sp rsb-sp2"/>' +
      '<rect x="244" y="54" width="5" height="150" fill="#8a8e94"/>' + sign(198, 60, 98, "US 283") + sign(198, 84, 98, "SH 19") +
      '<g class="rsb-car"><g transform="translate(0 214)">' + pickup("#d8d8dc", .8) + '</g></g>' +
      cap("US 283 & SH 19  ·  BLAIR, OKLAHOMA"),
      sky("rsb5", "#1c1a3a", "#d0785a"));
  }

  window.SCENES = { rsbhwy, rsbgin, rsbstill, rsblake, rsbcorner };
})();
