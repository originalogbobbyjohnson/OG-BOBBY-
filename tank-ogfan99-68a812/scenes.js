/* tank scenes (Regions tab: THE DMV; born in Milwaukee, raised in Clinton, Prince George's County, MD). CSS classes prefixed tk- (the page's own anim-train is kept).
   1 Naylor Road on Metro's Green Line: the raised open-air platform over the trees, a silver Metro train sliding in, black station sign with the green GR bullet.
   2 Cosca Regional Park in Clinton: the lake at sunset, paddle boats bobbing by the wooden dock, geese gliding.
   3 A Prince George's church choir loft (his cousin, a choir director, taught him to sing): robed choir silhouettes swaying, organ pipes, stained glass glowing, notes rising.
   4 The R&B Money podcast studio: two mics on boom arms, headphones, ON AIR light blinking, a gold money bag on the shelf.
   5 Brandywine Rd and Woodyard Rd in Clinton: green signs, TANK tagged on the wall, the old white Surratt House farmhouse behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tkglow{0%,100%{opacity:.4}50%{opacity:1}}.tk-glow{animation:tkglow 2.2s ease-in-out infinite}.tk-glow2{animation-delay:-1.1s}' +
    '@keyframes tknote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(22px,-62px);opacity:0}}.tk-note{animation:tknote 3.4s ease-out infinite}.tk-n2{animation-delay:-1.1s}.tk-n3{animation-delay:-2.2s}' +
    '@keyframes tksway{0%,100%{transform:translateX(-3px)}50%{transform:translateX(3px)}}.tk-sway{animation:tksway 1.8s ease-in-out infinite}.tk-sway2{animation-delay:-.9s}' +
    '@keyframes tkbob{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}.tk-bob{animation:tkbob 2.4s ease-in-out infinite}.tk-bob2{animation-delay:-1.2s}' +
    '@keyframes tkglide{from{transform:translateX(0)}to{transform:translateX(-120px)}}.tk-glide{animation:tkglide 9s linear infinite alternate}' +
    '@keyframes tkblink{0%,49%{opacity:1}50%,100%{opacity:.25}}.tk-blink{animation:tkblink 1.2s steps(1) infinite}' +
    '@keyframes tkcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.tk-car{animation:tkcar 7s linear infinite}' +
    '@keyframes tkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tk-sp{animation:tkspray 1.4s ease-out infinite}.tk-sp2{animation-delay:.45s}' +
    '@keyframes tkwave{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}.tk-wave{animation:tkwave 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "tk-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#3a2a1c"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const note = (x, y, c, cls) => '<g class="tk-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="1.6" height="14" fill="' + c + '"/><path d="M' + (x + 4.6) + ' ' + (y - 14) + 'q6 3 5 9" stroke="' + c + '" stroke-width="1.6" fill="none"/></g>';
  const GOLD = "#f2c14e", RED = "#d62839", BLUE = "#5ec8f0", GRN = "#00b140";

  /* 1. Naylor Road, Green Line, raised open-air platform */
  function tkstation() {
    const car = x => '<rect x="' + x + '" y="104" width="168" height="66" rx="6" fill="#c7ccd3" stroke="#6b737e" stroke-width="2"/>' +
      '<rect x="' + x + '" y="116" width="168" height="20" fill="#1c232c"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (x + 8 + i * 27) + '" y="119" width="20" height="14" rx="2" fill="#33414f"/>').join("") +
      '<rect x="' + (x + 30) + '" y="140" width="18" height="28" fill="#9aa1aa" stroke="#6b737e"/><rect x="' + (x + 120) + '" y="140" width="18" height="28" fill="#9aa1aa" stroke="#6b737e"/>' +
      '<rect x="' + x + '" y="158" width="168" height="4" fill="#8a2a2a" opacity=".6"/>' +
      '<circle cx="' + (x + 26) + '" cy="174" r="6" fill="#222"/><circle cx="' + (x + 142) + '" cy="174" r="6" fill="#222"/>';
    const train = '<g class="anim-train">' + car(20) + car(192) + '<circle class="tk-glow" cx="352" cy="156" r="4" fill="#fff6c8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tk-s1)"/>' +
      /* treetops below the raised track */
      tree(24, 236, 2, "#3c6a2e") + tree(90, 240, 1.8, "#4a7a3a") + tree(160, 238, 2.1, "#3c6a2e") + tree(240, 240, 1.9, "#4a7a3a") + tree(312, 236, 2, "#3c6a2e") + tree(384, 240, 1.8, "#4a7a3a") +
      /* concrete deck + piers */
      [40, 160, 280].map(x => '<rect x="' + x + '" y="196" width="18" height="64" fill="#a8a296"/>').join("") +
      '<rect x="0" y="180" width="400" height="16" fill="#b8b2a6"/><rect x="0" y="194" width="400" height="4" fill="#8a8476"/>' +
      '<path d="M0 182h400M0 186h400" stroke="#6b6458" stroke-width="1.4"/>' +
      /* canopy */
      '<path d="M0 44L200 64L400 44v10L200 74L0 54z" fill="#d8d2c4"/>' +
      [70, 330].map(x => '<rect x="' + (x - 3) + '" y="56" width="6" height="124" fill="#7a746a"/>').join("") +
      train +
      /* platform edge lights */
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => '<rect class="tk-glow' + (i % 2 ? " tk-glow2" : "") + '" x="' + (8 + i * 40) + '" y="177" width="24" height="3" fill="#fff3c0"/>').join("") +
      '<rect x="96" y="204" width="208" height="28" rx="3" fill="#111" stroke="#444"/><text x="188" y="224" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">NAYLOR ROAD</text>' +
      '<circle cx="282" cy="218" r="10" fill="' + GRN + '"/><text x="282" y="222" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">GR</text>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".95">GREEN LINE · NAYLOR ROAD · DOWN TO CLINTON, MD</text>',
      sky("tk-s1", "#6fa6dc", "#f4d8b8"));
  }

  /* 2. Cosca Regional Park lake, Clinton */
  function tkcosca() {
    const boat = (x, y, c, cls) => '<g class="tk-bob ' + cls + '"><path d="M' + x + ' ' + y + 'h40l-6 10h-28z" fill="' + c + '" stroke="#222" stroke-width="1.2"/><rect x="' + (x + 12) + '" y="' + (y - 12) + '" width="16" height="12" rx="3" fill="#f4f1ea" stroke="#222" stroke-width="1"/><circle cx="' + (x + 8) + '" cy="' + (y + 6) + '" r="5" fill="none" stroke="#fff" stroke-width="1.5"/></g>';
    const goose = (x, y) => '<g><path d="M' + x + ' ' + y + 'q8 -6 16 0q-8 4 -16 0z" fill="#3a3530"/><path d="M' + (x + 14) + ' ' + (y - 1) + 'q2 -10 6 -10" stroke="#111" stroke-width="2" fill="none"/><circle cx="' + (x + 20) + '" cy="' + (y - 11) + '" r="2" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tk-s2)"/>' +
      '<circle class="tk-glow" cx="300" cy="96" r="22" fill="#ffd27a" opacity=".9"/>' +
      /* far tree line */
      Array.from({ length: 14 }, (_, i) => tree(10 + i * 30, 128 + (i % 3) * 3, 1.5 + (i % 2) * .3, i % 2 ? "#2e5226" : "#3c6a2e")).join("") +
      '<rect x="0" y="134" width="400" height="126" fill="#3a6a8a"/>' +
      '<path class="tk-glow" d="M286 140h28v4h-28zM280 154h40v3h-40zM290 168h20v3h-20z" fill="#ffd27a" opacity=".6"/>' +
      Array.from({ length: 6 }, (_, i) => '<path class="tk-wave" d="M' + (20 + i * 66) + ' ' + (180 + (i % 3) * 18) + 'q10 -4 20 0" stroke="#9ac8e0" stroke-width="2" fill="none"/>').join("") +
      boat(90, 168, RED, "") + boat(170, 186, GOLD, "tk-bob2") + boat(240, 160, BLUE, "") +
      '<g class="tk-glide">' + goose(330, 210) + goose(356, 222) + '</g>' +
      /* wooden dock */
      '<path d="M0 206h120v10H0z" fill="#8a5a32"/>' + [10, 40, 70, 100].map(x => '<rect x="' + x + '" y="216" width="6" height="30" fill="#6a4424"/>').join("") +
      Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 10) + ' 206v10" stroke="#6a4424" stroke-width="1"/>').join("") +
      '<rect x="80" y="40" width="240" height="22" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="55" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">COSCA REGIONAL PARK · CLINTON</text>',
      sky("tk-s2", "#e88a5a", "#f8d8a0"));
  }

  /* 3. Choir loft */
  function tkchoir() {
    const singer = (x, y, c, cls) => '<g class="tk-sway ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="8" fill="#1a1210"/><path d="M' + (x - 13) + ' ' + (y + 44) + 'v-28q0 -10 13 -10t13 10v28z" fill="' + c + '"/><path d="M' + (x - 6) + ' ' + (y + 10) + 'l6 8l6 -8" fill="' + GOLD + '"/></g>';
    let choir = ""; for (let i = 0; i < 7; i++) choir += singer(60 + i * 46, 118 + (i % 2) * 4, i % 2 ? "#7a1424" : "#5a0e1a", i % 2 ? "tk-sway2" : "");
    return svg(
      '<rect width="400" height="260" fill="url(#tk-s3)"/>' +
      /* stained glass window */
      '<path d="M170 96V40q30 -30 60 0v56z" fill="#1a1a2a" stroke="#c9a24a" stroke-width="3"/>' +
      '<path class="tk-glow" d="M174 92V42q26 -24 52 0v50z" fill="' + BLUE + '" opacity=".55"/>' +
      '<path d="M200 22v74M174 60h52M180 44l40 40M220 44l-40 40" stroke="#c9a24a" stroke-width="2"/>' +
      '<circle class="tk-glow tk-glow2" cx="200" cy="60" r="8" fill="' + RED + '" opacity=".8"/>' +
      /* organ pipes both sides */
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (14 + i * 14) + '" y="' + (40 + Math.abs(3.5 - i) * 8) + '" width="10" height="' + (70 - Math.abs(3.5 - i) * 8) + '" rx="4" fill="#d8b86a" stroke="#8a6a2a"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (276 + i * 14) + '" y="' + (40 + Math.abs(3.5 - i) * 8) + '" width="10" height="' + (70 - Math.abs(3.5 - i) * 8) + '" rx="4" fill="#d8b86a" stroke="#8a6a2a"/>').join("") +
      choir +
      /* loft rail */
      '<rect x="0" y="168" width="400" height="12" fill="#6a4424"/>' + Array.from({ length: 21 }, (_, i) => '<rect x="' + (i * 20 + 4) + '" y="180" width="6" height="26" fill="#5a3a1e"/>').join("") +
      '<rect x="0" y="206" width="400" height="54" fill="#4a2e18"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (20 + i * 78) + '" y="222" width="64" height="10" rx="2" fill="#6a4424"/>').join("") +
      note(130, 110, GOLD) + note(250, 104, "#fff", "tk-n2") + note(196, 116, BLUE, "tk-n3") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">THE CHOIR LOFT · WHERE HE LEARNED TO SING</text>',
      sky("tk-s3", "#2a1a1a", "#5a3a2a"));
  }

  /* 4. R&B Money podcast studio */
  function tkpodcast() {
    const mic = (x, flip) => '<path d="M' + x + ' 40l' + (flip ? -40 : 40) + ' 40" stroke="#2a2a2e" stroke-width="5"/><path d="M' + (x + (flip ? -40 : 40)) + ' 80v20" stroke="#2a2a2e" stroke-width="4"/>' +
      '<rect x="' + (x + (flip ? -50 : 30)) + '" y="96" width="20" height="40" rx="10" fill="#3a3a40" stroke="#8a8a92" stroke-width="2"/>' +
      '<path d="M' + (x + (flip ? -48 : 32)) + ' 106h16M' + (x + (flip ? -48 : 32)) + ' 114h16M' + (x + (flip ? -48 : 32)) + ' 122h16" stroke="#6a6a72" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tk-s4)"/>' +
      /* acoustic foam wall */
      Array.from({ length: 6 }, (_, r) => Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40 + 2) + '" y="' + (r * 30 + 2) + '" width="36" height="26" rx="3" fill="' + ((r + i) % 2 ? "#1e1612" : "#241a14") + '"/>').join("")).join("") +
      /* neon sign */
      '<text class="tk-glow" x="200" y="54" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="34" fill="none" stroke="' + GOLD + '" stroke-width="2">R&amp;B MONEY</text>' +
      /* on air light */
      '<rect x="168" y="66" width="64" height="20" rx="4" fill="#2a0a0e" stroke="#555"/><text class="tk-blink" x="200" y="81" text-anchor="middle" ' + font + ' font-size="12" fill="' + RED + '">ON AIR</text>' +
      mic(20, false) + mic(380, true) +
      /* shelf with money bag */
      '<rect x="292" y="150" width="96" height="6" fill="#6a4424"/>' +
      '<path d="M330 128q10 -6 20 0l-3 6h-14z" fill="#c9962a"/><path d="M333 134C316 140 318 150 340 150s24 -10 7 -16z" fill="' + GOLD + '" stroke="#6a4a12" stroke-width="1.5"/>' +
      /* desk, headphones, laptop glow */
      '<rect x="0" y="170" width="400" height="90" fill="#3a2418"/><rect x="0" y="170" width="400" height="8" fill="#5a3a24"/>' +
      '<path d="M120 196q20 -26 40 0" stroke="#111" stroke-width="5" fill="none"/><rect x="114" y="192" width="12" height="16" rx="4" fill="#111"/><rect x="154" y="192" width="12" height="16" rx="4" fill="#111"/>' +
      '<path d="M240 206h70l-8 -32h-54z" fill="#5a5f66"/><path class="tk-glow" d="M252 200h50l-6 -22h-38z" fill="' + BLUE + '" opacity=".6"/>' +
      '<rect x="40" y="200" width="56" height="20" rx="3" fill="#1a1a1e"/>' + [0, 1, 2, 3, 4].map(i => '<rect class="tk-glow' + (i % 2 ? " tk-glow2" : "") + '" x="' + (46 + i * 10) + '" y="' + (204 + (i % 3) * 3) + '" width="6" height="' + (12 - (i % 3) * 3) + '" fill="' + (i === 4 ? RED : GRN) + '"/>').join("") +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">THE R&amp;B MONEY PODCAST · MICS HOT</text>',
      sky("tk-s4", "#1a1210", "#2a1a12"));
  }

  /* 5. Brandywine Rd and Woodyard Rd, Clinton */
  function tkcorner() {
    const house = '<g transform="translate(-110 0)">' +
      '<rect x="210" y="70" width="120" height="58" fill="#f2efe6" stroke="#9a968a" stroke-width="1.5"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M210 ' + (76 + i * 8) + 'h120" stroke="#d6d2c6" stroke-width="1"/>').join("") +
      '<path d="M202 72l68 -30l68 30z" fill="#4a4a50"/>' +
      '<rect x="226" y="30" width="10" height="26" fill="#8a4a32"/><rect x="304" y="30" width="10" height="26" fill="#8a4a32"/>' +
      [222, 252, 286, 312].map(x => '<rect x="' + x + '" y="78" width="12" height="16" fill="#2a3440" stroke="#fff" stroke-width="1.5"/><rect x="' + (x - 4) + '" y="78" width="3" height="16" fill="#2a4a3a"/><rect x="' + (x + 13) + '" y="78" width="3" height="16" fill="#2a4a3a"/>').join("") +
      '<path d="M206 104h128v4H206z" fill="#e8e4d8"/>' + [212, 240, 270, 300, 328].map(x => '<rect x="' + x + '" y="106" width="3" height="22" fill="#e8e4d8"/>').join("") +
      '<rect x="262" y="108" width="16" height="20" fill="#3a2a20"/>' +
      '<rect class="tk-glow" x="252" y="80" width="12" height="14" fill="#ffe9b0" opacity=".5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tk-s5)"/>' + stars(14) +
      tree(250, 118, 1.6, "#1e3324") + tree(60, 118, 1.5, "#1e3324") + house +
      '<rect x="0" y="126" width="400" height="8" fill="#1a1a24"/>' +
      '<rect x="0" y="132" width="400" height="76" fill="#4a3a34"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#3a2c26" stroke-width="1"/>').join("") +
      tag("TANK", 30, 192, 52, GOLD, -5) + tag("R&amp;B MONEY", 186, 162, 18, RED, -3) + tag("TGT", 214, 200, 24, BLUE, -6) +
      '<circle class="tk-sp" cx="204" cy="192" r="3" fill="' + GOLD + '" opacity=".8"/><circle class="tk-sp tk-sp2" cx="210" cy="196" r="2" fill="' + RED + '" opacity=".8"/>' +
      '<rect x="0" y="208" width="400" height="10" fill="#8e8a82"/><rect x="0" y="218" width="400" height="42" fill="#2a2a30"/>' +
      '<path d="M0 240h400" stroke="#f2c14e" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="tk-car"><rect x="0" y="222" width="64" height="16" rx="5" fill="#2a3a5a"/><rect x="12" y="216" width="36" height="10" rx="4" fill="#2a3a5a"/><circle cx="14" cy="240" r="5" fill="#111"/><circle cx="50" cy="240" r="5" fill="#111"/><circle cx="62" cy="228" r="2" fill="#fff6c8"/></g>' +
      '<rect x="358" y="64" width="5" height="146" fill="#5a5f66"/>' +
      sign(258, 64, 140, "BRANDYWINE RD") + sign(268, 90, 130, "WOODYARD RD") +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" opacity=".9">CLINTON, PRINCE GEORGE\'S COUNTY</text>',
      sky("tk-s5", "#0b0a20", "#3a2a3a"));
  }

  window.SCENES = { tkstation: tkstation, tkcosca: tkcosca, tkchoir: tkchoir, tkpodcast: tkpodcast, tkcorner: tkcorner };
})();
