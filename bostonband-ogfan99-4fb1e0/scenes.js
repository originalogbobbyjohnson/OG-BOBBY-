/* bostonband scenes (Regions tab: Boston + New England; Watertown, MA). CSS classes prefixed bn- (the page's own anim-train is kept on the bus).
   1 Watertown Square bus stop (MBTA 57, 70, 71): brick storefronts, shelter, black sign with the three yellow route badges, a silver MBTA bus with its yellow stripe pulling in.
   2 Tom Scholz's basement studio in Watertown, where the demos for the first album were made: concrete walls, a multitrack tape machine with spinning reels, the mixing desk with VU needles, a guitar on its stand, a bare bulb swaying.
   3 MIT, Cambridge, where Scholz earned his engineering degrees and met Barry Goudreau and Jim Masdea: the limestone columns and gray Great Dome of Building 10, the Charles in front, sailboats gliding.
   4 The engineering bench at the Cambridge camera company where Scholz worked by day: oscilloscope tracing a wave, soldering iron smoke, blueprints, instant photos drying on a line, a guitar case under the bench for the night shift.
   5 Main St and Mt Auburn St in Watertown Square: green signs, BOSTON tagged on the brick, the tall Gothic tower of the Perkins School in Watertown behind, against a starry sky. */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes bnflick{0%,100%{opacity:1}44%{opacity:.8}50%{opacity:.35}56%{opacity:.95}}.bn-flk{animation:bnflick 2.6s infinite}.bn-flk2{animation-delay:-1.2s}' +
    '@keyframes bnspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.bn-spin{transform-box:fill-box;transform-origin:50% 50%;animation:bnspin 2.2s linear infinite}' +
    '@keyframes bnswing{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}.bn-swing{transform-box:view-box;transform-origin:200px 0px;animation:bnswing 3s ease-in-out infinite}' +
    '@keyframes bnvu{0%,100%{transform:rotate(-30deg)}30%{transform:rotate(18deg)}60%{transform:rotate(-6deg)}80%{transform:rotate(26deg)}}.bn-vu{transform-box:fill-box;transform-origin:50% 100%;animation:bnvu 1.3s ease-in-out infinite}.bn-vu2{animation-delay:-.5s}' +
    '@keyframes bnsail{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.bn-sail{animation:bnsail 16s linear infinite}.bn-sail2{animation-delay:-8s}' +
    '@keyframes bnrip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.bn-rip{animation:bnrip 3s ease-in-out infinite}' +
    '@keyframes bnscope{from{transform:translateX(0)}to{transform:translateX(-40px)}}.bn-scope{animation:bnscope 1.2s linear infinite}' +
    '@keyframes bnsmoke{0%{transform:translate(0,0);opacity:.7}100%{transform:translate(6px,-30px);opacity:0}}.bn-smoke{animation:bnsmoke 2.4s ease-out infinite}.bn-smoke2{animation-delay:-1.2s}' +
    '@keyframes bntw{0%,100%{opacity:.3}50%{opacity:1}}.bn-tw{animation:bntw 2.2s ease-in-out infinite}.bn-tw2{animation-delay:-1.1s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" class="bn-tw' + (i % 2 ? ' bn-tw2' : '') + '"/>'; return s; };
  const brick = (x, y, w, h, c, m) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let r = y + 8; r < y + h; r += 8) { s += '<path d="M' + x + ' ' + r + 'h' + w + '" stroke="' + m + '" stroke-width=".8" opacity=".6"/>'; for (let q = x + ((r / 8) % 2 ? 9 : 0); q < x + w; q += 18) s += '<path d="M' + q + ' ' + (r - 8) + 'v8" stroke="' + m + '" stroke-width=".7" opacity=".5"/>'; } return s; };
  const route = (x, y, n) => '<rect x="' + x + '" y="' + y + '" width="28" height="18" rx="9" fill="#ffc72c"/><text x="' + (x + 14) + '" y="' + (y + 13) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#111">' + n + '</text>';
  const sailboat = (cls, x, y, c) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'h30l-5 7h-20z" fill="#f4f1e8"/><path d="M' + (x + 14) + ' ' + y + 'v-30l14 27z" fill="' + c + '"/><path d="M' + (x + 12) + ' ' + y + 'v-24l-10 22z" fill="#fff"/></g>';
  const ORANGE = "#f4a640", SKY = "#5fb3ff", CORAL = "#ff6b4a";

  /* 1. Watertown Square bus stop */
  function bnstop() {
    const bus = '<g class="anim-train">' +
      '<rect x="30" y="118" width="270" height="76" rx="8" fill="#d6d9dc" stroke="#6a6f75" stroke-width="1.5"/>' +
      '<rect x="30" y="170" width="270" height="8" fill="#ffc72c"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (44 + i * 32) + '" y="128" width="24" height="30" rx="2" fill="#1d2a33"/>').join("") +
      '<rect x="270" y="126" width="26" height="40" rx="3" fill="#1d2a33"/>' +
      '<rect x="252" y="122" width="44" height="0"/><rect x="232" y="121" width="64" height="0"/>' +
      '<rect x="236" y="104" width="62" height="14" rx="2" fill="#111"/><text x="267" y="115" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#ffb000">71 HARVARD</text>' +
      '<rect x="292" y="176" width="10" height="7" rx="2" fill="#fff6b0"/>' +
      '<circle cx="80" cy="196" r="12" fill="#222"/><circle cx="80" cy="196" r="5" fill="#888"/><circle cx="252" cy="196" r="12" fill="#222"/><circle cx="252" cy="196" r="5" fill="#888"/>' +
      '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bns1)"/>' +
      brick(0, 40, 400, 120, "#8a4a36", "#4a2418") +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (14 + i * 66) + '" y="54" width="34" height="26" fill="#ffd98a" opacity=".55" class="bn-flk' + (i % 2 ? ' bn-flk2' : '') + '"/>').join("") +
      '<rect x="0" y="36" width="400" height="6" fill="#5c3020"/>' +
      '<rect x="300" y="64" width="6" height="140" fill="#2b2f33"/>' +
      '<rect x="236" y="22" width="152" height="46" rx="3" fill="#111"/>' +
      '<text x="312" y="40" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">WATERTOWN SQUARE</text>' +
      route(262, 46, "57") + route(298, 46, "70") + route(334, 46, "71") +
      '<rect x="0" y="194" width="400" height="66" fill="#4a4a4d"/><rect x="0" y="194" width="400" height="10" fill="#a8a59c"/>' +
      bus +
      '<rect x="318" y="96" width="78" height="100" fill="#9fb8c8" opacity=".35" stroke="#2b2f33" stroke-width="3"/><rect x="314" y="92" width="86" height="8" fill="#2b2f33"/>' +
      '<rect x="326" y="168" width="62" height="5" fill="#2b2f33"/>' +
      '<path d="M0 232h400" stroke="#e6e2d8" stroke-width="2" stroke-dasharray="16 12"/>',
      sky("bns1", "#2a3a5c", "#c58a6a")
    );
  }

  /* 2. The basement studio in Watertown */
  function bnbasement() {
    let blocks = "";
    for (let y = 0; y < 200; y += 16) for (let x = ((y / 16) % 2 ? -20 : 0); x < 400; x += 40) blocks += '<rect x="' + x + '" y="' + y + '" width="39" height="15" fill="#6d6a63"/>';
    return svg(
      '<rect width="400" height="260" fill="#55524b"/>' + blocks +
      '<path d="M0 10h400" stroke="#3a3833" stroke-width="10"/><path d="M60 0v20M180 0v20M300 0v20" stroke="#3a3833" stroke-width="6"/>' +
      '<g class="bn-swing"><path d="M200 0v40" stroke="#222" stroke-width="2"/><circle cx="200" cy="46" r="8" fill="#fff3c0"/><circle cx="200" cy="46" r="30" fill="#fff3c0" opacity=".12"/></g>' +
      /* tape machine */
      '<rect x="30" y="64" width="120" height="150" rx="4" fill="#c9c4b8" stroke="#5a564e" stroke-width="2"/>' +
      '<g class="bn-spin"><circle cx="62" cy="96" r="22" fill="#222"/><circle cx="62" cy="96" r="5" fill="#ccc"/><path d="M62 76v12M44 106l10-6M80 106l-10-6" stroke="#ccc" stroke-width="4"/></g>' +
      '<g class="bn-spin"><circle cx="118" cy="96" r="22" fill="#222"/><circle cx="118" cy="96" r="5" fill="#ccc"/><path d="M118 76v12M100 106l10-6M136 106l-10-6" stroke="#ccc" stroke-width="4"/></g>' +
      '<path d="M62 118l28 14 28-14" fill="none" stroke="#5b3a1e" stroke-width="2"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (40 + (i % 6) * 17) + '" y="' + (146 + Math.floor(i / 6) * 22) + '" width="10" height="14" rx="2" fill="#333"/><circle cx="' + (45 + (i % 6) * 17) + '" cy="' + (143 + Math.floor(i / 6) * 22) + '" r="2" fill="' + (i % 3 ? "#e43" : "#4c4") + '" class="bn-flk' + (i % 2 ? ' bn-flk2' : '') + '"/>').join("") +
      /* mixing desk */
      '<path d="M170 150h200l14 46H156z" fill="#2c2c30" stroke="#111" stroke-width="2"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (174 + i * 14) + '" y="' + (160 + (i % 4) * 5) + '" width="5" height="10" rx="1" fill="#ddd"/>').join("") +
      '<rect x="188" y="112" width="44" height="34" rx="3" fill="#f2e6c2" stroke="#222" stroke-width="2"/><rect x="246" y="112" width="44" height="34" rx="3" fill="#f2e6c2" stroke="#222" stroke-width="2"/>' +
      '<rect x="208.8" y="118" width="2.4" height="24" fill="#c22" class="bn-vu"/><rect x="266.8" y="118" width="2.4" height="24" fill="#c22" class="bn-vu bn-vu2"/>' +
      '<text x="210" y="142" text-anchor="middle" ' + F + ' font-size="6" fill="#222">VU</text><text x="268" y="142" text-anchor="middle" ' + F + ' font-size="6" fill="#222">VU</text>' +
      /* guitar on stand */
      '<path d="M336 100v-60" stroke="#3a2a1a" stroke-width="5"/><rect x="330" y="30" width="12" height="14" rx="2" fill="#3a2a1a"/>' +
      '<path d="M336 100q-24 4-20 30q-10 22 20 30q30-8 20-30q4-26-20-30z" fill="' + ORANGE + '" stroke="#5a3a10" stroke-width="2"/><circle cx="336" cy="124" r="6" fill="#2a1a0e"/><rect x="326" y="140" width="20" height="4" fill="#2a1a0e"/>' +
      '<path d="M320 186l16-26 16 26" fill="none" stroke="#222" stroke-width="3"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#3f3d38"/><rect x="0" y="210" width="400" height="4" fill="#2a2925"/>' +
      '<path d="M150 222q60 14 120 2t110 10" fill="none" stroke="#111" stroke-width="3"/>' +
      '<rect x="244" y="30" width="70" height="26" rx="2" fill="#f4efe2" transform="rotate(-4 279 43)"/><text x="279" y="47" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#222" transform="rotate(-4 279 43)">DEMO REEL #4</text>'
    );
  }

  /* 3. MIT, Building 10 and the Great Dome over the Charles */
  function bndome() {
    let cols = "";
    for (let i = 0; i < 10; i++) cols += '<rect x="' + (128 + i * 15) + '" y="104" width="8" height="58" fill="#e8e1d0"/><rect x="' + (126 + i * 15) + '" y="100" width="12" height="5" fill="#d8d0bc"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bns3)"/>' +
      '<circle cx="330" cy="40" r="18" fill="#ffe3a0" opacity=".85"/>' +
      '<rect x="20" y="96" width="100" height="72" fill="#d9d1bd"/><rect x="280" y="96" width="100" height="72" fill="#d9d1bd"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (30 + i * 22) + '" y="106" width="12" height="18" fill="#6c7a86"/><rect x="' + (30 + i * 22) + '" y="134" width="12" height="18" fill="#6c7a86"/><rect x="' + (290 + i * 22) + '" y="106" width="12" height="18" fill="#6c7a86"/><rect x="' + (290 + i * 22) + '" y="134" width="12" height="18" fill="#6c7a86"/>').join("") +
      '<rect x="118" y="92" width="164" height="76" fill="#e4dcc8"/>' +
      '<path d="M112 92h176l-8-12H120z" fill="#d8d0bc"/>' +
      '<rect x="140" y="62" width="120" height="20" fill="#e4dcc8"/>' +
      '<path d="M144 64a56 50 0 0 1 112 0z" fill="#8f9aa3" stroke="#6f7a83" stroke-width="2"/>' +
      '<path d="M170 64a30 44 0 0 1 60 0" fill="none" stroke="#7c8790" stroke-width="1.5"/><path d="M200 16v48" stroke="#7c8790" stroke-width="1.5"/>' +
      '<rect x="194" y="10" width="12" height="8" fill="#d8d0bc"/>' + cols +
      '<rect x="0" y="168" width="400" height="12" fill="#5c7a4a"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#2f5d84"/>' +
      '<g class="bn-rip"><path d="M10 200h60M120 214h80M250 204h70M40 232h90M220 240h120" stroke="#9cc4e4" stroke-width="2" opacity=".6"/></g>' +
      sailboat("bn-sail", 0, 206, CORAL) + sailboat("bn-sail bn-sail2", 0, 228, SKY),
      sky("bns3", "#6aa2d6", "#f2d7a8")
    );
  }

  /* 4. The engineer's bench in Cambridge */
  function bnlab() {
    let grid = "";
    for (let x = 0; x < 400; x += 20) grid += '<path d="M' + x + ' 0v170" stroke="#2c4a6a" stroke-width=".6"/>';
    for (let y = 0; y < 170; y += 20) grid += '<path d="M0 ' + y + 'h400" stroke="#2c4a6a" stroke-width=".6"/>';
    let wave = "M0 0";
    for (let i = 0; i < 12; i++) wave += "q5-14 10 0t10 0";
    return svg(
      '<rect width="400" height="260" fill="#1d3550"/>' + grid +
      '<path d="M30 30h120v80H30z" fill="none" stroke="#cfe3ff" stroke-width="1.5" opacity=".7"/><circle cx="90" cy="70" r="26" fill="none" stroke="#cfe3ff" stroke-width="1.5" opacity=".7"/><path d="M64 70h52M90 44v52" stroke="#cfe3ff" stroke-width="1" opacity=".7"/>' +
      '<text x="90" y="124" text-anchor="middle" ' + F + ' font-size="8" fill="#cfe3ff">AMP DESIGN  REV. B</text>' +
      '<path d="M200 26h190" stroke="#ddd" stroke-width="1"/>' +
      Array.from({ length: 5 }, (_, i) => '<g transform="rotate(' + (i % 2 ? 4 : -4) + ' ' + (220 + i * 34) + ' 30)"><rect x="' + (208 + i * 34) + '" y="28" width="26" height="30" fill="#f4f1e8"/><rect x="' + (211 + i * 34) + '" y="31" width="20" height="18" fill="' + ["#6aa2d6", "#f4a640", "#3d6b45", "#ff6b4a", "#8a6bd1"][i] + '"/><rect x="' + (218 + i * 34) + '" y="25" width="6" height="6" fill="#c9a24a"/></g>').join("") +
      /* bench */
      '<rect x="0" y="170" width="400" height="16" fill="#8a6a44"/><rect x="0" y="186" width="400" height="74" fill="#3e3326"/>' +
      /* scope */
      '<rect x="40" y="104" width="110" height="66" rx="4" fill="#cfcac0" stroke="#555" stroke-width="2"/><rect x="50" y="112" width="70" height="50" rx="3" fill="#0d2a14"/>' +
      '<clipPath id="bnclip"><rect x="50" y="112" width="70" height="50"/></clipPath><g clip-path="url(#bnclip)"><g transform="translate(50 137)"><path class="bn-scope" d="' + wave + '" fill="none" stroke="#5dff8a" stroke-width="2"/></g></g>' +
      '<circle cx="134" cy="124" r="6" fill="#333"/><circle cx="134" cy="148" r="6" fill="#333"/>' +
      /* circuit board + iron */
      '<rect x="180" y="150" width="90" height="20" fill="#2f7a3f"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (186 + i * 10) + '" y="154" width="5" height="8" fill="' + (i % 2 ? "#d9b04a" : "#222") + '"/>').join("") +
      '<path d="M300 168l-30-26" stroke="#c22" stroke-width="5" stroke-linecap="round"/><path d="M270 142l-8-8" stroke="#aaa" stroke-width="2"/>' +
      '<circle class="bn-smoke" cx="262" cy="130" r="4" fill="#ddd"/><circle class="bn-smoke bn-smoke2" cx="262" cy="130" r="3" fill="#ddd"/>' +
      '<rect x="310" y="120" width="70" height="50" rx="3" fill="#222"/><rect x="316" y="126" width="58" height="20" fill="#3b2" opacity=".85" class="bn-flk"/><text x="345" y="140" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#111">12.0 V</text>' +
      /* guitar case under bench */
      '<path d="M60 206h200q30 0 40 14q-10 14-40 14H60q-14 0-14-14t14-14z" fill="#2a1a10" stroke="#111" stroke-width="2"/><rect x="140" y="214" width="20" height="6" rx="2" fill="#c9a24a"/>'
    );
  }

  /* 5. Main St and Mt Auburn St, Watertown Square, the Perkins tower behind */
  function bncorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bns5)"/>' + stars(18) +
      '<circle cx="60" cy="40" r="12" fill="#f4efd8"/>' +
      '<path d="M0 132q80-10 160-4t120 2t120 2v20H0z" fill="#1a2a24"/>' +
      /* Perkins Howe Building tower */
      '<rect x="244" y="60" width="44" height="80" fill="#9a5b40"/>' +
      '<rect x="240" y="56" width="52" height="8" fill="#b7a58a"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (240 + i * 9.6) + '" y="48" width="5" height="8" fill="#b7a58a"/>').join("") +
      '<path d="M240 56l-4-14h6zM292 56l4-14h-6z" fill="#b7a58a"/>' +
      '<path d="M256 82h8v14h-8zM268 82h8v14h-8z" fill="#ffd98a" class="bn-flk"/>' +
      '<path d="M256 110a10 10 0 0 1 20 0v14h-20z" fill="#2a1a12"/>' +
      '<circle cx="266" cy="70" r="5" fill="#f4efd8" stroke="#6a4a30"/>' +
      '<rect x="200" y="110" width="44" height="30" fill="#8a5038"/><rect x="288" y="110" width="44" height="30" fill="#8a5038"/>' +
      brick(0, 140, 400, 76, "#7b3a2c", "#3e1a12") +
      '<rect x="0" y="138" width="400" height="4" fill="#d8cfc0"/>' +
      tag("BOSTON", 30, 196, 50, ORANGE, -6) + tag("MORE THAN A FEELING", 218, 170, 15, SKY, -4) + tag("THIRD STAGE", 230, 204, 18, CORAL, -3) +
      '<rect x="0" y="214" width="400" height="46" fill="#3f3f42"/><rect x="0" y="214" width="400" height="5" fill="#9a958c"/>' +
      '<path d="M0 240h400" stroke="#d9d5cb" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<rect x="10" y="70" width="5" height="146" fill="#4a5058"/>' +
      '<rect x="8" y="64" width="120" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="68" y="79" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Main St</text>' +
      '<rect x="8" y="88" width="120" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="68" y="103" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Mt Auburn St</text>',
      sky("bns5", "#0a1022", "#2c3a64")
    );
  }

  window.SCENES = { bnstop, bnbasement, bndome, bnlab, bncorner };
})();
