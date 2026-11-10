/* Alex Isley scenes (Regions tab: Los Angeles + SoCal). Born in Westwood, NJ but raised in Los Angeles from childhood (Wikipedia; LA Weekly: "grew up in Los Angeles in the '90s"),
   went to LA County High School for the Arts (on the Cal State LA campus) and the UCLA jazz department; played the Hollywood Bowl; her song "PCH" is about the Pacific Coast Highway.
   No LA neighborhood on record, so the hood is Los Angeles. CSS classes prefixed ai- (the page's own anim-train is kept).
   0 Cal State LA station: Metro J Line busway stop out in the middle of the 10 Freeway, Metrolink tracks beside it; a train sliding in, black sign with the silver J bullet.
   1 LA County High School for the Arts: a practice room, grand piano, music stand, notes floating up.
   2 UCLA Schoenberg Hall (music + jazz): red brick and tan stone trim, jacaranda trees dropping purple blossoms.
   3 The Hollywood Bowl at night: the white concentric arches of the shell, the hills behind, searchlights sweeping.
   4 Pacific Coast Hwy and Sunset Blvd: green signs, ALEX ISLEY tagged on the sea wall, the Pacific at sunset, waves rolling, the Malibu cliffs behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes aiwave{0%{transform:translateX(0)}100%{transform:translateX(-60px)}}.ai-wave{animation:aiwave 4s linear infinite}.ai-w2{animation-duration:6s}' +
    '@keyframes aiglow{0%,100%{opacity:.5}50%{opacity:1}}.ai-glow{animation:aiglow 2.8s ease-in-out infinite}.ai-g2{animation-delay:-1.4s}' +
    '@keyframes ainote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-70px);opacity:0}}.ai-note{animation:ainote 3.6s ease-out infinite}.ai-n2{animation-delay:-1.2s}.ai-n3{animation-delay:-2.4s}' +
    '@keyframes aifall{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(-24px,120px) rotate(200deg);opacity:0}}.ai-fall{animation:aifall 4.5s linear infinite}.ai-f2{animation-delay:-1.5s}.ai-f3{animation-delay:-3s}' +
    '@keyframes aisweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.ai-sweep{transform-box:fill-box;transform-origin:50% 100%;animation:aisweep 5s ease-in-out infinite}.ai-s2{animation-delay:-2.5s}' +
    '@keyframes aicar{0%{transform:translateX(-90px)}100%{transform:translateX(490px)}}.ai-car{animation:aicar 6s linear infinite}.ai-car2{animation-delay:-3s}' +
    '@keyframes aitwk{0%,100%{opacity:.2}50%{opacity:1}}.ai-tw{animation:aitwk 1.8s ease-in-out infinite}.ai-t2{animation-delay:-.6s}.ai-t3{animation-delay:-1.2s}' +
    '@keyframes aispray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ai-sp{animation:aispray 1.4s ease-out infinite}.ai-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const GOLD = "#f6b35b", SEA = "#5fb6d9", PINK = "#e58fb0", JSIL = "#adb8bf";
  const note = (x, y, c, k) => '<g class="ai-note ' + k + '"><path d="M' + x + ' ' + y + 'v-16l10 -3v16" stroke="' + c + '" stroke-width="2.2" fill="none"/><circle cx="' + (x - 2.5) + '" cy="' + y + '" r="3.5" fill="' + c + '"/><circle cx="' + (x + 7.5) + '" cy="' + (y - 3) + '" r="3.5" fill="' + c + '"/></g>';

  /* 0. Cal State LA station */
  function aistop() {
    const train = '<g class="anim-train"><rect x="16" y="128" width="276" height="70" rx="12" fill="#eef1f4" stroke="#6d7782" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (34 + i * 42) + '" y="140" width="32" height="24" rx="3" fill="#263241"/>').join("") +
      '<path d="M16 176h276" stroke="#2c4f8c" stroke-width="7"/><path d="M16 186h276" stroke="' + JSIL + '" stroke-width="4"/>' +
      '<rect x="270" y="138" width="18" height="30" rx="3" fill="#263241"/><circle cx="284" cy="190" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ai0)"/>' +
      '<path d="M0 96l60 -26l50 14l70 -30l60 22l70 -18l90 28v20h-400z" fill="#a8946f" opacity=".55"/>' +
      '<rect x="0" y="100" width="400" height="18" fill="#cfc8b8"/><path d="M0 110h400" stroke="#fff" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="ai-car"><rect x="0" y="100" width="34" height="11" rx="4" fill="' + PINK + '"/></g><g class="ai-car ai-car2"><rect x="0" y="104" width="30" height="10" rx="4" fill="#f4f4f4"/></g>' +
      '<rect x="0" y="118" width="400" height="8" fill="#9a9484"/>' +
      '<rect x="296" y="88" width="98" height="10" fill="' + JSIL + '"/><rect x="304" y="98" width="4" height="100" fill="#555"/><rect x="384" y="98" width="4" height="100" fill="#555"/>' +
      '<rect x="0" y="198" width="400" height="62" fill="#8a867e"/><rect x="0" y="198" width="400" height="6" fill="#e8d84a"/><path d="M0 222h400M0 240h400" stroke="#56524a" stroke-width="3"/>' +
      train +
      '<rect x="18" y="14" width="240" height="36" rx="3" fill="#111"/>' +
      '<circle cx="40" cy="32" r="12" fill="' + JSIL + '"/><text x="40" y="37" text-anchor="middle" ' + font + ' font-size="14" fill="#111">J</text>' +
      '<text x="60" y="38" ' + font + ' font-size="17" fill="#fff">Cal State LA</text>' +
      '<rect x="188" y="22" width="62" height="20" rx="3" fill="#2c4f8c"/><text x="219" y="36" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">METROLINK</text>' +
      '<text x="300" y="82" ' + font + ' font-size="9" fill="#333">I-10 BUSWAY</text>',
      sky("ai0", "#7cb8e6", "#f6dcb0"));
  }

  /* 1. LA County High School for the Arts: the practice room */
  function aischool() {
    return svg(
      '<rect width="400" height="260" fill="#2a2238"/>' +
      '<rect x="0" y="0" width="400" height="170" fill="#3a2f4e"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40 + 4) + '" y="10" width="32" height="32" rx="2" fill="#4a3d62" stroke="#2a2238"/>').join("") +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40 + 4) + '" y="48" width="32" height="32" rx="2" fill="#4a3d62" stroke="#2a2238"/>').join("") +
      '<rect x="250" y="20" width="120" height="80" fill="#cfe6f4" stroke="#1d1828" stroke-width="5"/><path d="M310 20v80M250 60h120" stroke="#1d1828" stroke-width="3"/>' +
      '<path d="M256 96l20 -26l18 18l14 -12l30 20l26 -14v18z" fill="#a8946f" opacity=".7"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#7a5232"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (178 + i * 11) + 'h400" stroke="#6a4428" stroke-width="2"/>').join("") +
      '<path d="M40 150q0 -50 70 -50h80q30 0 30 24v26z" fill="#111" stroke="#333" stroke-width="2"/><path d="M60 102l120 -36" stroke="#111" stroke-width="5"/><rect x="40" y="150" width="190" height="16" fill="#1a1a1a"/>' +
      Array.from({ length: 22 }, (_, i) => '<rect x="' + (52 + i * 7.5) + '" y="150" width="6.5" height="12" fill="#f5f2e8"/>').join("") +
      Array.from({ length: 22 }, (_, i) => (i % 7 === 2 || i % 7 === 6) ? '' : '<rect x="' + (57 + i * 7.5) + '" y="150" width="4" height="7" fill="#111"/>').join("") +
      '<rect x="60" y="166" width="8" height="40" fill="#111"/><rect x="200" y="166" width="8" height="40" fill="#111"/>' +
      '<rect x="296" y="120" width="44" height="30" fill="#e8e0cc" transform="rotate(-8 318 135)"/><path d="M300 128h36M300 134h36M300 140h36" stroke="#555" stroke-width="1" transform="rotate(-8 318 135)"/>' +
      '<rect x="316" y="150" width="4" height="58" fill="#333"/><path d="M304 210l14 -6l14 6" stroke="#333" stroke-width="3" fill="none"/>' +
      note(120, 96, GOLD, "") + note(160, 90, PINK, "ai-n2") + note(90, 100, SEA, "ai-n3") +
      '<rect x="20" y="218" width="230" height="24" rx="3" fill="#1d1828" stroke="' + GOLD + '" stroke-width="1.5"/><text x="135" y="235" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">LA COUNTY HIGH SCHOOL FOR THE ARTS</text>');
  }

  /* 2. UCLA Schoenberg Hall under the jacarandas */
  function aiucla() {
    const blossom = (x, y, k) => '<g class="ai-fall ' + k + '"><circle cx="' + x + '" cy="' + y + '" r="3" fill="#a77bd6"/></g>';
    const tree = (x) => '<rect x="' + (x - 4) + '" y="150" width="8" height="60" fill="#5a4030"/><circle cx="' + x + '" cy="136" r="34" fill="#9b6fd0"/><circle cx="' + (x - 22) + '" cy="150" r="20" fill="#8a5fc0"/><circle cx="' + (x + 22) + '" cy="148" r="22" fill="#b089e0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ai2)"/>' +
      '<rect x="70" y="60" width="260" height="150" fill="#b5553a"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M70 ' + (66 + i * 10) + 'h260" stroke="#9a4630" stroke-width="1"/>').join("") +
      '<rect x="64" y="52" width="272" height="12" fill="#e3cfa4"/><rect x="70" y="120" width="260" height="6" fill="#e3cfa4"/>' +
      [96, 146, 196, 246, 296].map(x => '<rect x="' + (x - 14) + '" y="74" width="28" height="38" fill="#2b2f3e" stroke="#e3cfa4" stroke-width="3"/><path class="ai-glow" d="M' + (x - 11) + ' 77h22v32h-22z" fill="#f6d68a" opacity=".5"/>').join("") +
      [120, 200, 280].map(x => '<path d="M' + (x - 18) + ' 210v-50a18 18 0 0 1 36 0v50z" fill="#2b2f3e" stroke="#e3cfa4" stroke-width="3"/>').join("") +
      '<rect x="120" y="132" width="160" height="16" fill="#e3cfa4"/><text x="200" y="144" text-anchor="middle" ' + font + ' font-size="10" fill="#6a2e1e">SCHOENBERG HALL</text>' +
      '<rect x="0" y="210" width="400" height="50" fill="#8fbf6a"/><path d="M150 210l-30 50h160l-30 -50z" fill="#d8ccb0"/>' +
      tree(28) + tree(372) +
      blossom(40, 120, "") + blossom(360, 118, "ai-f2") + blossom(20, 130, "ai-f3") + blossom(380, 128, "") + blossom(60, 116, "ai-f2"),
      sky("ai2", "#86c3ea", "#e6f2f6"));
  }

  /* 3. The Hollywood Bowl at night */
  function aibowl() {
    const arch = (r, c) => '<path d="M' + (200 - r) + ' 182a' + r + ' ' + r + ' 0 0 1 ' + (2 * r) + ' 0" fill="none" stroke="' + c + '" stroke-width="7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ai3)"/>' +
      '<g class="ai-sweep"><path d="M86 180l-26 -170h22z" fill="#fff6d0" opacity=".22"/></g><g class="ai-sweep ai-s2"><path d="M314 180l-10 -170h22z" fill="#fff6d0" opacity=".22"/></g>' +
      [[40, 30, ""], [120, 18, "ai-t2"], [260, 26, "ai-t3"], [350, 40, ""], [190, 12, "ai-t2"]].map(s => '<circle class="ai-tw ' + s[2] + '" cx="' + s[0] + '" cy="' + s[1] + '" r="1.6" fill="#fff"/>').join("") +
      '<path d="M0 150q60 -60 120 -40t110 -30t90 20t80 -10v80h-400z" fill="#2c2a3e"/>' +
      '<path d="M84 182a116 116 0 0 1 232 0z" fill="#f3f1ea"/>' +
      arch(108, "#dcd8cc") + arch(92, "#e9e6dc") + arch(76, "#dcd8cc") + arch(60, "#e9e6dc") + arch(44, "#dcd8cc") +
      '<path class="ai-glow" d="M164 182a36 36 0 0 1 72 0z" fill="' + GOLD + '" opacity=".75"/>' +
      '<rect x="84" y="182" width="232" height="10" fill="#4a4558"/>' +
      '<rect x="0" y="192" width="400" height="68" fill="#1c1a2a"/>' +
      Array.from({ length: 5 }, (_, r) => Array.from({ length: 22 }, (_, i) => '<circle cx="' + (12 + i * 18 + (r % 2) * 9) + '" cy="' + (204 + r * 12) + '" r="5" fill="#0e0d18"/>').join("")).join("") +
      note(196, 164, "#1c1a2a", "") + note(214, 160, "#1c1a2a", "ai-n2"),
      sky("ai3", "#0f1638", "#4a3a6a"));
  }

  /* 4. Pacific Coast Hwy and Sunset Blvd */
  function aicorner() {
    const palm = (x, h) => '<path d="M' + x + ' 196q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#3a2a1e" stroke-width="5" fill="none"/>' +
      [-50, -20, 10, 40, 160, 200].map(a => '<path d="M' + x + ' ' + (196 - h) + 'q' + (Math.cos(a * Math.PI / 180) * 18) + ' ' + (Math.sin(a * Math.PI / 180) * 10 - 10) + ' ' + (Math.cos(a * Math.PI / 180) * 30) + ' ' + (Math.sin(a * Math.PI / 180) * 18 + 6) + '" stroke="#1f3a2a" stroke-width="5" fill="none" stroke-linecap="round"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ai4)"/>' +
      '<circle cx="250" cy="104" r="30" fill="#ffd27a" opacity=".95"/>' +
      '<path d="M0 92l50 -28l40 10l50 -24l40 26l20 -6v40h-200z" fill="#6a4a5a"/>' +
      '<rect x="0" y="104" width="400" height="56" fill="' + SEA + '"/><rect x="0" y="104" width="400" height="8" fill="#f6c27a" opacity=".6"/>' +
      '<path d="M236 112h28M228 122h44M240 132h20" stroke="#ffe3a8" stroke-width="2" opacity=".8"/>' +
      '<g class="ai-wave"><path d="M0 140q15 -8 30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0" stroke="#e8f6fb" stroke-width="3" fill="none"/></g>' +
      '<g class="ai-wave ai-w2"><path d="M0 152q15 -6 30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0" stroke="#fff" stroke-width="2.5" fill="none" opacity=".8"/></g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#e8d4a8"/>' +
      '<rect x="290" y="168" width="110" height="60" fill="#e8d4a8"/><rect x="290" y="210" width="110" height="18" fill="#bdb6a6"/>' +
      palm(330, 86) + palm(362, 70) +
      '<rect x="0" y="170" width="300" height="58" fill="#cfc6b4"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (i * 50 + 50) + ' 170v58" stroke="#b8ae9a" stroke-width="2"/>').join("") +
      tag("ALEX ISLEY", 16, 208, 30, GOLD, -4) + tag("PCH", 200, 202, 22, SEA, -6) + tag("ISLEY &amp; DINE", 26, 224, 13, PINK, -2) +
      '<g class="ai-sp"><circle cx="190" cy="196" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="ai-sp ai-sp2"><circle cx="196" cy="190" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="228" width="400" height="32" fill="#4e4c48"/><path d="M0 244h400" stroke="#f2d24a" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<rect x="384" y="118" width="6" height="110" fill="#2f2f2f"/>' + sign(268, 122, 122, "Pacific Coast Hwy") + sign(296, 148, 94, "Sunset Blvd"),
      sky("ai4", "#3a3a78", "#f2a46a"));
  }

  window.SCENES = { aistop: aistop, aischool: aischool, aiucla: aiucla, aibowl: aibowl, aicorner: aicorner };
})();
