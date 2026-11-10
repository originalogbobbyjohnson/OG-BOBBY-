/* 49winchester scenes (Regions: Virginia / Genres: country; Castlewood, Russell County, Southwest Virginia). CSS classes prefixed fnw- (the page's own anim-train is kept).
   Sources: Cardinal News "Hometown heroes: 49 Winchester" (Sep 1 2022): name = Isaac Gibson's family address on Winchester Street in Castlewood; bassist Chase Chafin grew up across the street;
   first gig at Heritage Days in St. Paul, VA; early set at the Willow Tree Coffeehouse, Johnson City, TN; Gibson worked in the family masonry business; "Russell County Line" video shot in Castlewood.
   Every 9 is drawn as a path (round head + straight stem), never as a font glyph. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#f2c14e", GREEN = "#3f7d5a", RED = "#c8553d", CREAM = "#f4ead6";
  const css = '<style>' +
    '@keyframes fnwglow{0%,100%{opacity:.45}50%{opacity:1}}.fnw-glow{animation:fnwglow 2.4s ease-in-out infinite}.fnw-g2{animation-delay:-1.2s}' +
    '@keyframes fnwnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-58px);opacity:0}}.fnw-nt{animation:fnwnote 3.2s ease-out infinite}.fnw-nt2{animation-delay:-1.1s}.fnw-nt3{animation-delay:-2.2s}' +
    '@keyframes fnwcloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.fnw-cl{animation:fnwcloud 14s ease-in-out infinite alternate}' +
    '@keyframes fnwhop{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.fnw-hop{animation:fnwhop .55s ease-in-out infinite}.fnw-h2{animation-delay:-.27s}' +
    '@keyframes fnwflow{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.fnw-flow{animation:fnwflow 4s linear infinite}' +
    '@keyframes fnwsteam{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(-22px);opacity:0}}.fnw-st{animation:fnwsteam 2s ease-out infinite}.fnw-st2{animation-delay:-1s}' +
    '@keyframes fnwsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.fnw-sway{transform-box:fill-box;transform-origin:50% 0;animation:fnwsway 3s ease-in-out infinite}' +
    '@keyframes fnwdrive{0%{transform:translateX(-120px)}100%{transform:translateX(420px)}}.fnw-drive{animation:fnwdrive 9s linear infinite;animation-delay:-4s}' +
    '@keyframes fnwspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.fnw-sp{animation:fnwspray 1.4s ease-out infinite}.fnw-sp2{animation-delay:.45s}' +
    '@keyframes fnwtwk{0%,100%{opacity:.2}50%{opacity:1}}.fnw-tw{animation:fnwtwk 1.8s ease-in-out infinite}.fnw-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="fnw-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  /* hand-drawn "49": a 4 and a 9 with a round head and a STRAIGHT stem. x,y = top-left, h = height */
  const n49 = (x, y, h, c, sw, outline) => {
    const w = h * .55, r = h * .24, g = h * .14;
    const d4 = 'M' + (x + w * .72) + ' ' + (y + h) + 'V' + y + 'L' + x + ' ' + (y + h * .64) + 'H' + (x + w);
    const cx = x + w + g + r, cy = y + r + sw * .3;
    const d9 = 'M' + (cx + r) + ' ' + cy + 'A' + r + ' ' + r + ' 0 1 0 ' + (cx + r) + ' ' + (cy + .01) + 'M' + (cx + r) + ' ' + cy + 'V' + (y + h);
    const st = (col, wd) => '<path d="' + d4 + d9 + '" stroke="' + col + '" stroke-width="' + wd + '" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
    return (outline ? st(outline, sw + 3.5) : '') + st(c, sw);
  };
  const ridges = (y, c1, c2) => '<path d="M0 ' + y + 'q50 -34 110 -18t100 -22t110 14t80 -10v' + (H - y + 40) + 'h-400z" fill="' + c1 + '"/><path d="M0 ' + (y + 20) + 'q70 -24 140 -6t130 -14t130 8v' + (H - y) + 'h-400z" fill="' + c2 + '"/>';
  /* Clinch Mountain: the long, level-topped ridge south of the Clinch valley */
  const clinchMtn = (y, c) => '<path d="M0 ' + (y + 18) + 'Q40 ' + (y + 2) + ' 90 ' + y + 'L330 ' + (y - 4) + 'Q370 ' + (y - 2) + ' 400 ' + (y + 12) + 'V' + H + 'H0z" fill="' + c + '"/>';
  const pines = (x0, y, n, step, c) => Array.from({ length: n }, (_, i) => { const x = x0 + i * step, h = 14 + (i * 7) % 9; return '<path d="M' + x + ' ' + (y - h) + 'l-6 ' + h + 'h12z" fill="' + c + '"/>'; }).join("");
  const river = (y, h) => '<rect x="0" y="' + y + '" width="400" height="' + h + '" fill="#3f6f7f"/><g class="fnw-flow">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (y + 5 + (i % 3) * 5) + 'q10 -3 20 0" stroke="#bfe0e6" stroke-width="1.4" fill="none" opacity=".7"/>').join("") + '</g>';

  /* ROOM 0: US 58 Alt rolling into Castlewood, the band van pulling in */
  function fnwroad() {
    return svg(
      '<rect width="400" height="260" fill="url(#fnw1)"/>' +
      '<g class="fnw-cl"><ellipse cx="70" cy="34" rx="38" ry="9" fill="#fff" opacity=".6"/><ellipse cx="290" cy="24" rx="44" ry="9" fill="#fff" opacity=".5"/></g>' +
      ridges(100, "#6f8fa4", "#4f7a5c") + pines(10, 150, 26, 15.5, "#2f5a3e") +
      '<rect x="0" y="150" width="400" height="110" fill="#5a7a46"/>' +
      '<path d="M0 260L170 168h60L400 260z" fill="#3e3e40"/><path d="M200 168v92" stroke="#f2d04a" stroke-width="3" stroke-dasharray="12 10"/>' +
      '<path d="M0 260L170 168M400 260L230 168" stroke="#f4f4f2" stroke-width="2"/>' +
      /* green guide sign on two posts */
      '<rect x="252" y="96" width="5" height="80" fill="#6a6e72"/><rect x="368" y="96" width="5" height="80" fill="#6a6e72"/>' +
      '<rect x="238" y="58" width="150" height="58" rx="5" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="313" y="82" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">Castlewood</text>' +
      '<text x="313" y="104" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">RUSSELL COUNTY</text>' +
      /* US route shield, US 58 ALT */
      '<rect x="40" y="70" width="5" height="96" fill="#6a6e72"/>' +
      '<rect x="20" y="36" width="46" height="13" fill="#fff" stroke="#111" stroke-width="1.5"/><text x="43" y="46" text-anchor="middle" ' + font + ' font-size="9.5" fill="#111">ALT</text>' +
      '<path d="M20 52h46v20q0 20 -23 28q-23 -8 -23 -28z" fill="#fff" stroke="#111" stroke-width="2"/><path d="M24 56h38v15q0 16 -19 23q-19 -7 -19 -23z" fill="none" stroke="#111" stroke-width="1.5"/>' +
      '<text x="43" y="84" text-anchor="middle" ' + font + ' font-size="19" fill="#111">58</text>' +
      /* the band van pulling in */
      '<g class="anim-train"><rect x="60" y="182" width="150" height="50" rx="9" fill="#f4f4f2" stroke="#2a2a2a" stroke-width="2"/>' +
      '<path d="M178 186h26q6 0 6 8v14h-32z" fill="#a8cde0" stroke="#2a2a2a" stroke-width="1.5"/>' +
      '<rect x="72" y="190" width="28" height="18" rx="2" fill="#a8cde0"/><rect x="106" y="190" width="28" height="18" rx="2" fill="#a8cde0"/><rect x="140" y="190" width="28" height="18" rx="2" fill="#a8cde0"/>' +
      '<rect x="60" y="214" width="150" height="5" fill="' + GREEN + '"/><circle cx="90" cy="234" r="10" fill="#1d1d1d"/><circle cx="182" cy="234" r="10" fill="#1d1d1d"/><circle cx="90" cy="234" r="4" fill="#9aa"/><circle cx="182" cy="234" r="4" fill="#9aa"/>' +
      '<rect x="40" y="200" width="22" height="22" rx="2" fill="#5a4030"/><rect x="40" y="200" width="22" height="4" fill="' + GOLD + '"/>' +
      '<circle cx="206" cy="222" r="3" fill="#ffe28a" class="fnw-glow"/></g>',
      sky("fnw1", "#6ea6d8", "#f6d6a8"));
  }

  /* ROOM 1: Heritage Days in St. Paul, VA, the band's first gig, by the Clinch River */
  function fnwheritage() {
    const people = Array.from({ length: 14 }, (_, i) => { const x = 18 + i * 27, c = ["#2a2a34", "#3a2a2a", "#26303a"][i % 3]; return '<g class="fnw-hop' + (i % 2 ? ' fnw-h2' : '') + '"><circle cx="' + x + '" cy="' + (214 - (i % 3) * 2) + '" r="7" fill="' + c + '"/><path d="M' + (x - 10) + ' 240q10 -24 20 0z" fill="' + c + '"/></g>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fnw2)"/>' +
      ridges(70, "#7a6a8a", "#4f6a5a") + pines(0, 112, 27, 15, "#2f4a3a") +
      river(112, 16) + '<rect x="0" y="128" width="400" height="132" fill="#5f7a44"/>' +
      /* outdoor stage */
      '<rect x="110" y="104" width="180" height="64" fill="#2a1d14"/><path d="M100 104h200l-14 -24h-172z" fill="' + RED + '" stroke="#5a2018" stroke-width="2"/>' +
      '<rect x="132" y="84" width="136" height="16" rx="2" fill="' + CREAM + '"/><text x="200" y="96" text-anchor="middle" ' + font + ' font-size="11" fill="#5a2018">HERITAGE DAYS</text>' +
      '<rect x="104" y="168" width="192" height="14" fill="#6a4a30"/>' +
      /* the band: guitar, bass, pedal steel, drums (silhouettes) */
      '<g fill="#111"><circle cx="150" cy="130" r="6"/><rect x="145" y="136" width="10" height="30"/><path d="M146 146l22 8l-2 4l-22 -8z" fill="#7a4a24"/>' +
      '<circle cx="200" cy="128" r="6"/><rect x="195" y="134" width="10" height="32"/><rect x="198" y="120" width="2" height="30" fill="#888"/>' +
      '<circle cx="250" cy="132" r="6"/><rect x="245" y="138" width="10" height="28"/><rect x="232" y="150" width="34" height="5" fill="#9a9a9a"/>' +
      '<ellipse cx="275" cy="160" rx="10" ry="6" fill="#8a2a1e"/></g>' +
      /* string lights */
      '<path d="M0 60Q100 90 200 70T400 62" stroke="#333" stroke-width="1" fill="none"/>' + Array.from({ length: 14 }, (_, i) => '<circle cx="' + (14 + i * 28) + '" cy="' + (66 + Math.sin(i / 2) * 6 + (i < 7 ? 8 : 0)) + '" r="3" fill="' + [GOLD, "#ff8a6a", "#9fe0a8"][i % 3] + '" class="fnw-tw' + (i % 2 ? ' fnw-tw2' : '') + '"/>').join("") +
      note(120, 110, GOLD) + note(286, 108, CREAM, "fnw-nt2") + note(204, 90, GOLD, "fnw-nt3") +
      people,
      sky("fnw2", "#2b2f5a", "#e89a6a"));
  }

  /* ROOM 2: the Willow Tree Coffeehouse, Johnson City, TN, an early listening-room set */
  function fnwwillow() {
    const fronds = Array.from({ length: 16 }, (_, i) => { const x = 18 + i * 6; return '<path d="M' + x + ' ' + (40 + (i % 4) * 3) + 'q' + (i % 2 ? 6 : -6) + ' 40 ' + (i % 2 ? 2 : -2) + ' 86" stroke="#6aa04a" stroke-width="3" fill="none"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fnw3)"/>' +
      /* brick storefront */
      '<rect x="120" y="40" width="270" height="180" fill="#8a4434"/>' + Array.from({ length: 25 }, (_, i) => '<path d="M120 ' + (46 + i * 7) + 'h270" stroke="#5a2418" stroke-width=".8" opacity=".5"/>').join("") +
      '<rect x="120" y="40" width="270" height="10" fill="#4a2a1a"/>' +
      '<rect x="150" y="60" width="210" height="24" rx="3" fill="#1c2a1e" stroke="' + GOLD + '" stroke-width="1.5"/><text x="255" y="77" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">WILLOW TREE COFFEEHOUSE</text>' +
      /* big window: a small stage inside, warm lamp light */
      '<rect x="146" y="98" width="150" height="96" fill="#f3c47a"/><rect x="146" y="98" width="150" height="96" fill="none" stroke="#2a1a10" stroke-width="4"/><path d="M221 98v96" stroke="#2a1a10" stroke-width="3"/>' +
      '<rect x="156" y="172" width="130" height="10" fill="#6a3a20"/>' +
      '<g fill="#3a2414"><circle cx="186" cy="138" r="7"/><rect x="180" y="145" width="12" height="27"/><path d="M178 154l26 8l-2 5l-26 -8z" fill="#8a5a2a"/><circle cx="252" cy="140" r="7"/><rect x="246" y="147" width="12" height="25"/><rect x="249" y="128" width="2" height="30" fill="#555"/></g>' +
      '<rect x="306" y="110" width="40" height="84" fill="#3a2214"/><circle cx="338" cy="154" r="2.5" fill="' + GOLD + '"/>' +
      /* coffee cup on the sill, steam rising */
      '<rect x="160" y="196" width="14" height="12" rx="2" fill="' + CREAM + '"/><path d="M174 199q6 0 6 4t-6 4" stroke="' + CREAM + '" stroke-width="2" fill="none"/>' +
      '<path d="M164 192q-3 -6 0 -12t0 -12" stroke="#fff" stroke-width="1.6" fill="none" class="fnw-st"/><path d="M170 192q-3 -6 0 -12t0 -12" stroke="#fff" stroke-width="1.6" fill="none" class="fnw-st fnw-st2"/>' +
      /* the willow out front */
      '<rect x="56" y="110" width="12" height="110" fill="#5a3e28"/><ellipse cx="62" cy="64" rx="56" ry="34" fill="#4f8a3a"/>' +
      '<g class="fnw-sway">' + fronds + '</g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#8a8a86"/><rect x="0" y="218" width="400" height="4" fill="#d8d4cc"/>' +
      note(230, 120, "#5a2a14") + note(272, 116, "#5a2a14", "fnw-nt2"),
      sky("fnw3", "#7ab0d8", "#f6e2b8"));
  }

  /* ROOM 3: out on the road down the Clinch River valley, the tour van heading out at dusk */
  function fnwclinch() {
    return svg(
      '<rect width="400" height="260" fill="url(#fnw4)"/>' +
      '<circle cx="300" cy="52" r="24" fill="#ffd27a" opacity=".9" class="fnw-glow"/>' +
      ridges(86, "#6a5a7a", "#4a5a5a") + clinchMtn(118, "#34503e") + pines(0, 152, 27, 15, "#25402e") +
      '<rect x="0" y="152" width="400" height="18" fill="#4a6a3a"/>' +
      /* the road along the river */
      '<rect x="0" y="170" width="400" height="26" fill="#3a3a3c"/><path d="M0 183h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="fnw-drive"><rect x="0" y="160" width="74" height="24" rx="5" fill="#f4f4f2" stroke="#222" stroke-width="1.5"/><rect x="56" y="163" width="16" height="10" rx="2" fill="#a8cde0"/><rect x="6" y="164" width="14" height="9" fill="#a8cde0"/><rect x="24" y="164" width="14" height="9" fill="#a8cde0"/>' +
      '<rect x="-30" y="166" width="28" height="16" rx="2" fill="#5a4030"/><circle cx="16" cy="186" r="5" fill="#1d1d1d"/><circle cx="60" cy="186" r="5" fill="#1d1d1d"/><circle cx="72" cy="176" r="2" fill="#ffe28a"/></g>' +
      river(196, 64) +
      '<path d="M0 208q100 -6 200 0t200 0" stroke="#ffd27a" stroke-width="2" opacity=".5" fill="none" class="fnw-glow"/>' +
      '<path d="M120 236q80 -4 160 0" stroke="#ffd27a" stroke-width="2" opacity=".4" fill="none" class="fnw-glow fnw-g2"/>',
      sky("fnw4", "#3a3a6a", "#f0a86a"));
  }

  /* ROOM 4: Winchester St and Red Oak Ridge Rd in Castlewood, the family mailbox, a mason's stone wall tagged, Clinch Mountain behind */
  function fnwcorner() {
    let stones = "";
    for (let r = 0; r < 6; r++) for (let c = 0; c < 11; c++) { const x = (r % 2 ? -18 : 0) + c * 38, y = 136 + r * 14; stones += '<rect x="' + (x + 1) + '" y="' + (y + 1) + '" width="35" height="12" rx="4" fill="' + ["#9a9488", "#8a8478", "#a8a294", "#7f7a70"][(r * 3 + c) % 4] + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#fnw5)"/>' +
      '<g class="fnw-cl"><ellipse cx="90" cy="30" rx="40" ry="9" fill="#fff" opacity=".55"/><ellipse cx="300" cy="20" rx="44" ry="9" fill="#fff" opacity=".45"/></g>' +
      clinchMtn(70, "#5a7a8a") + pines(0, 112, 27, 15, "#3a5a40") +
      '<rect x="0" y="112" width="400" height="22" fill="#5f7a44"/>' +
      '<rect x="0" y="132" width="400" height="88" fill="#5a564e"/>' + stones +
      '<rect x="0" y="130" width="400" height="5" fill="#cfc8b8"/>' +
      tag("WINCHESTER", 18, 176, 30, GOLD, -5) + tag("RUSSELL CO", 30, 204, 14, CREAM, -3) + tag("HOLLER", 180, 206, 14, RED, -4) +
      '<g transform="rotate(-6 250 160)">' + n49(222, 148, 30, RED, 5, "#000") + '</g>' +
      '<g class="fnw-sp"><circle cx="260" cy="150" r="3" fill="' + RED + '" opacity=".7"/></g><g class="fnw-sp fnw-sp2"><circle cx="266" cy="144" r="2" fill="' + RED + '" opacity=".6"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#4c4a46"/><rect x="0" y="218" width="400" height="4" fill="#e8e4dc"/>' +
      /* the mailbox */
      '<rect x="306" y="150" width="5" height="70" fill="#5a3e28"/><path d="M292 132h34v20h-34z" fill="#2f2f33"/><path d="M292 132q17 -18 34 0z" fill="#2f2f33"/>' +
      '<rect x="324" y="124" width="3" height="16" fill="' + RED + '"/><rect x="324" y="124" width="10" height="6" fill="' + RED + '"/>' +
      '<g transform="translate(0 0)">' + n49(298, 136, 12, "#fff", 2) + '</g>' +
      /* green street signs */
      '<rect x="356" y="56" width="6" height="164" fill="#2f2f2f"/>' + sign(270, 56, 128, "WINCHESTER ST") + sign(262, 82, 136, "RED OAK RIDGE RD"),
      sky("fnw5", "#5a8ac4", "#f0c49a"));
  }

  window.SCENES = { fnwroad: fnwroad, fnwheritage: fnwheritage, fnwwillow: fnwwillow, fnwclinch: fnwclinch, fnwcorner: fnwcorner };
})();
