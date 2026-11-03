/* Statik Selektah producer game: Boston. Boylston station, the Lawrence mill clock, the Showoff Radio booth, the Green Monster, the corner. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.spn{transform-box:fill-box;transform-origin:50% 50%;animation:spin 1.8s linear infinite}' +
    '@keyframes hand{from{transform:rotate(0)}to{transform:rotate(360deg)}}.hnd{animation:hand 8s linear infinite}.hnd2{animation:hand 60s linear infinite}' +
    '@keyframes wave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.wv{animation:wave 3s linear infinite}.wv2{animation-duration:4.5s}' +
    '@keyframes glow{0%,100%{opacity:.45}50%{opacity:1}}.gl{animation:glow 1.2s ease-in-out infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .7s ease-in-out infinite}.m2{animation-delay:.2s}.m3{animation-delay:.4s}.m4{animation-delay:.1s}' +
    '@keyframes fly{0%{transform:translate(0,0);opacity:0}10%{opacity:1}100%{transform:translate(260px,-150px);opacity:0}}.fly{animation:fly 2.6s ease-out infinite}' +
    '@keyframes wipe{0%,100%{opacity:.25}50%{opacity:.9}}.lt{animation:wipe 1.6s ease-in-out infinite}.lt2{animation-delay:.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">' + letter + '</text>';
  const GOLD = "#f2c14e", GREEN = "#2fa35a", RED = "#d94c3d", GL = "#00843d", BRICK = "#9c4a32";

  /* 1. Boylston station, the oldest subway stop in America: tiled walls, arches, a Green Line trolley gliding in */
  function boylston() {
    let tiles = "";
    for (let y = 40; y < 176; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d8d2bf" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 40v136" stroke="#d8d2bf" stroke-width="1"/>';
    let arches = "";
    for (let x = 0; x < 400; x += 100) arches += '<path d="M' + x + ' 40q50-40 100 0" fill="none" stroke="#7a6a52" stroke-width="6"/>';
    let win = "";
    for (let x = 40; x < 270; x += 40) win += '<rect x="' + x + '" y="122" width="26" height="22" rx="3" fill="#e8f4ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="176" fill="#ece5cf"/>' + tiles +
      '<rect width="400" height="40" fill="#3b342a"/>' + arches +
      '<rect class="flk" x="60" y="10" width="60" height="4" rx="2" fill="#fff6d8"/><rect class="flk flk2" x="280" y="10" width="60" height="4" rx="2" fill="#fff6d8"/>' +
      '<rect x="0" y="40" width="400" height="8" fill="' + GL + '"/>' +
      '<rect x="40" y="56" width="320" height="38" rx="4" fill="#111"/><rect x="40" y="56" width="320" height="4" fill="#fff"/>' +
      '<text x="56" y="83" ' + font + ' font-size="19" fill="#fff">Boylston</text>' +
      bullet(250, 76, "B", GL) + bullet(276, 76, "C", GL) + bullet(302, 76, "D", GL) + bullet(328, 76, "E", GL) +
      '<g class="anim-train">' +
        '<rect x="20" y="108" width="280" height="64" rx="10" fill="' + GL + '" stroke="#0b3d22" stroke-width="2"/>' +
        '<rect x="20" y="150" width="280" height="6" fill="#f2f2f2"/>' + win +
        '<path d="M150 108l-10-14M170 108l10-14M140 94h40" stroke="#333" stroke-width="2" fill="none"/>' +
        '<circle cx="292" cy="162" r="4" fill="#fff6c2"/><rect x="232" y="114" width="56" height="12" rx="2" fill="#111"/><text x="260" y="124" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb12a">PARK ST</text>' +
      '</g>' +
      '<rect x="0" y="176" width="400" height="8" fill="#e8c547"/>' +
      '<rect x="0" y="184" width="400" height="76" fill="#2a2620"/>' +
      tag("SHOWOFF", 40, 240, 32, GOLD, -5) + tag("STATIK", 250, 238, 30, GREEN, -7));
  }

  /* 2. Lawrence, Mass., where he was born: the brick mill clock tower over the Merrimack River, clock hands turning */
  function millclock() {
    let mill = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 9; c++) {
      const x = c < 4 ? 14 + c * 26 : 236 + (c - 4) * 30;
      mill += '<rect x="' + x + '" y="' + (120 + r * 18) + '" width="12" height="11" fill="#2b2a33"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#m1)"/>' +
      '<rect x="6" y="110" width="118" height="84" fill="' + BRICK + '"/><rect x="228" y="110" width="166" height="84" fill="' + BRICK + '"/>' +
      '<rect x="6" y="104" width="118" height="8" fill="#6e3020"/><rect x="228" y="104" width="166" height="8" fill="#6e3020"/>' + mill +
      '<rect x="146" y="40" width="60" height="154" fill="#a5523a"/><rect x="140" y="36" width="72" height="8" fill="#6e3020"/>' +
      '<path d="M146 36l30-24 30 24z" fill="#4a5a52"/><rect x="172" y="2" width="8" height="12" fill="#4a5a52"/>' +
      '<rect x="138" y="60" width="76" height="76" fill="#8c3f2b"/>' +
      '<circle cx="176" cy="98" r="30" fill="#f4efe2" stroke="#3b2414" stroke-width="3"/>' +
      (() => { let t = ""; for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; t += '<rect x="' + (176 + Math.sin(a) * 24 - 1.5) + '" y="' + (98 - Math.cos(a) * 24 - 3) + '" width="3" height="6" fill="#222" transform="rotate(' + (i * 30) + ' ' + (176 + Math.sin(a) * 24) + ' ' + (98 - Math.cos(a) * 24) + ')"/>'; } return t; })() +
      '<g class="hnd" style="transform-origin:176px 98px"><path d="M176 98V76" stroke="#111" stroke-width="2.5" stroke-linecap="round"/></g>' +
      '<g class="hnd2" style="transform-origin:176px 98px"><path d="M176 98h14" stroke="#111" stroke-width="3.5" stroke-linecap="round"/></g>' +
      '<circle cx="176" cy="98" r="3" fill="#111"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#2f5d73"/>' +
      '<g class="wv"><path d="M0 210q10-6 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" fill="none" stroke="#9fd0e6" stroke-width="2" opacity=".7"/></g>' +
      '<g class="wv wv2"><path d="M0 232q10-6 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" fill="none" stroke="#cfeaf5" stroke-width="2" opacity=".5"/></g>' +
      '<rect x="120" y="244" width="160" height="16" rx="2" fill="#0f6b3a"/><text x="200" y="256" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">LAWRENCE, MASS.</text>',
      sky("m1", "#f2a65a", "#f7d9a8"));
  }

  /* 3. The Showoff Radio booth: ON AIR light glowing, two turntables spinning, the mixer meters jumping */
  function onair() {
    const deck = (x) => '<rect x="' + x + '" y="160" width="120" height="70" rx="5" fill="#2b2b30" stroke="#555" stroke-width="2"/>' +
      '<g class="spn"><circle cx="' + (x + 52) + '" cy="195" r="28" fill="#0b0b0b"/><circle cx="' + (x + 52) + '" cy="195" r="20" fill="none" stroke="#2a2a2a"/><circle cx="' + (x + 52) + '" cy="195" r="9" fill="' + GOLD + '"/><rect x="' + (x + 50) + '" y="187" width="4" height="4" fill="#fff"/></g>' +
      '<path d="M' + (x + 108) + ' 168l-14 30" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>';
    let meters = "";
    ["", "m2", "m3", "m4", "m2", "m3"].forEach((c, i) => { meters += '<rect class="mt ' + c + '" x="' + (176 + i * 8) + '" y="172" width="5" height="34" fill="' + (i < 4 ? GREEN : RED) + '"/>'; });
    return svg(
      '<rect width="400" height="260" fill="#16141a"/>' +
      (() => { let f = ""; for (let x = 0; x < 400; x += 20) for (let y = 0; y < 150; y += 20) f += '<path d="M' + x + ' ' + y + 'l10 10-10 10-10-10z" fill="#221f27"/>'; return f; })() +
      '<rect x="128" y="18" width="144" height="40" rx="6" fill="#2a0c0c" stroke="#555" stroke-width="2"/>' +
      '<text class="gl" x="200" y="47" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="26" fill="#ff3b30" letter-spacing="4">ON AIR</text>' +
      '<rect x="30" y="74" width="340" height="44" rx="4" fill="#0e0d12" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="104" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="24" fill="' + GOLD + '" letter-spacing="3">SHOWOFF RADIO</text>' +
      '<path d="M200 118v26" stroke="#888" stroke-width="3"/><rect x="190" y="132" width="20" height="26" rx="10" fill="#3a3a40" stroke="#888"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#3a2a22"/><rect x="0" y="150" width="400" height="6" fill="#5a4032"/>' +
      deck(20) + deck(260) +
      '<rect x="160" y="162" width="80" height="60" rx="4" fill="#1d1d22" stroke="#555" stroke-width="2"/>' + meters +
      '<circle cx="186" cy="214" r="4" fill="#bbb"/><circle cx="214" cy="214" r="4" fill="#bbb"/>');
  }

  /* 4. The Green Monster at Fenway: the tall green wall, the hand-turned scoreboard, a ball flying over under the lights */
  function monster() {
    const sq = (x, y, n) => '<rect x="' + x + '" y="' + y + '" width="16" height="18" fill="#0c3a24" stroke="#e8e8e8" stroke-width="1"/><text x="' + (x + 8) + '" y="' + (y + 14) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + n + '</text>';
    let board = "";
    ["0", "2", "1", "0", "3", "0", "1", "4"].forEach((n, i) => { board += sq(120 + i * 20, 92, n); });
    ["1", "0", "0", "2", "0", "1", "0", "2"].forEach((n, i) => { board += sq(120 + i * 20, 114, n); });
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' +
      '<g class="lt"><rect x="20" y="10" width="44" height="22" fill="#fffbe0"/><path d="M42 32v40" stroke="#555" stroke-width="4"/></g>' +
      '<g class="lt lt2"><rect x="336" y="10" width="44" height="22" fill="#fffbe0"/><path d="M358 32v40" stroke="#555" stroke-width="4"/></g>' +
      '<rect x="0" y="60" width="400" height="140" fill="#0f4d2e"/><rect x="0" y="56" width="400" height="6" fill="#0a3520"/>' +
      '<path d="M0 60h400" stroke="#0a3520" stroke-width="2"/>' +
      (() => { let p = ""; for (let x = 0; x < 400; x += 40) p += '<path d="M' + x + ' 62v138" stroke="#0c4227" stroke-width="2"/>'; return p; })() +
      '<rect x="110" y="72" width="180" height="66" fill="#0c3a24" stroke="#e8e8e8" stroke-width="1.5"/>' +
      '<text x="200" y="86" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="2">VISITORS   HOME</text>' + board +
      '<rect x="30" y="150" width="54" height="22" fill="#e8e8e8"/><text x="57" y="166" text-anchor="middle" ' + font + ' font-size="14" fill="#0f4d2e">310</text>' +
      '<rect x="0" y="200" width="400" height="14" fill="#a8743f"/><rect x="0" y="214" width="400" height="46" fill="#3f8a3a"/>' +
      (() => { let m = ""; for (let x = 0; x < 400; x += 40) m += '<rect x="' + x + '" y="214" width="20" height="46" fill="#4a9a44"/>'; return m; })() +
      '<g class="fly"><circle cx="70" cy="196" r="5" fill="#fff" stroke="#c33" stroke-width="1"/></g>',
      sky("g1", "#0b1630", "#2b3d6a"));
  }

  /* 5. The corner: Boylston St and Massachusetts Ave, green signs, STATIK tagged on brick, the Back Bay towers behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#c1)"/>' +
      '<rect x="90" y="20" width="34" height="110" fill="#5b6470"/><rect x="104" y="4" width="4" height="18" fill="#5b6470"/>' +
      (() => { let w = ""; for (let y = 28; y < 126; y += 8) w += '<rect class="' + (y % 24 ? "" : "gl") + '" x="94" y="' + y + '" width="26" height="3" fill="#ffd77a" opacity=".6"/>'; return w; })() +
      '<path d="M150 130V30l22-10v110z" fill="#5d8fb8"/><path d="M150 30l22-10v110l-22 0z" fill="#7fb0d6" opacity=".6"/>' +
      '<rect x="190" y="70" width="40" height="60" fill="#4a5260"/><rect x="236" y="88" width="30" height="42" fill="#555d6a"/>' +
      '<rect x="0" y="120" width="400" height="104" fill="' + BRICK + '"/>' +
      (() => { let b = ""; for (let y = 128; y < 224; y += 10) b += '<path d="M0 ' + y + 'h400" stroke="#7e3a26" stroke-width="1"/>'; return b; })() +
      tag("STATIK", 24, 196, 48, GOLD, -5) + tag("SHOWOFF", 170, 216, 22, GREEN, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<rect x="332" y="40" width="5" height="186" fill="#3d4b3f"/>' +
      '<rect x="282" y="44" width="106" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="335" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Boylston St</text>' +
      '<rect x="270" y="70" width="128" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="334" y="86" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Massachusetts Ave</text>',
      sky("c1", "#14203a", "#e0876a"));
  }

  window.SCENES = { boylston: boylston, millclock: millclock, onair: onair, monster: monster, corner: corner };
})();
