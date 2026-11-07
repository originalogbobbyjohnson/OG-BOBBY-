/* vincestaples scenes (Regions tab: Los Angeles + SoCal; Ramona Park, North Long Beach). CSS classes prefixed vs- (the page's own anim-train is kept).
   1 Long Beach Transit Route 22 stop at Downey Av and Artesia Blvd, by Ramona Park ("Reminiscin'... of the 22 bus stop way back when", Big Fish): the 22 pulling in.
   2 Ramona Park ("Ramona Park Legend", "Ramona Park Broke My Heart"): the low community center, the park sign, a ball bouncing on the court, field lights.
   3 Coachella in Indio ("The white fans at the Coachella", Feels Like Summer; he has played it): desert mountains, palms, the Ferris wheel turning.
   4 The Long Beach shoreline ("I'm a real beach boy"): the palm-covered THUMS oil islands with their pastel screened towers, waves rolling, gulls.
   5 Downey Ave and E 65th St by Ramona Park: green signs, VINCE STAPLES tagged, the Long Beach Airport control tower and a jet climbing behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes vsflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.vs-flk{animation:vsflick 2.2s infinite}.vs-flk2{animation-delay:.7s}' +
    '@keyframes vscar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.vs-car{animation:vscar 7s linear infinite}.vs-car2{animation-delay:-3.5s}' +
    '@keyframes vssway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.vs-palm{transform-box:fill-box;transform-origin:50% 100%;animation:vssway 3.5s ease-in-out infinite}.vs-palm2{animation-delay:-1.6s}' +
    '@keyframes vsspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vs-spin{transform-box:fill-box;transform-origin:50% 50%;animation:vsspin 14s linear infinite}' +
    '@keyframes vsball{0%{transform:translateY(0)}100%{transform:translateY(-38px)}}.vs-ball{animation:vsball .55s ease-out infinite alternate}' +
    '@keyframes vsgull{from{transform:translate(-40px,0)}to{transform:translate(440px,-30px)}}.vs-gull{animation:vsgull 11s linear infinite}.vs-gull2{animation-delay:-5s}' +
    '@keyframes vswave{0%,100%{transform:translateX(0)}50%{transform:translateX(14px)}}.vs-wave{animation:vswave 3s ease-in-out infinite}.vs-wave2{animation-delay:-1.5s}' +
    '@keyframes vsjet{from{transform:translate(-60px,40px)}to{transform:translate(460px,-90px)}}.vs-jet{animation:vsjet 9s linear infinite}' +
    '@keyframes vsspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.vs-sp{animation:vsspray 1.4s ease-out infinite}.vs-sp2{animation-delay:.45s}' +
    '@keyframes vsbeam{0%,100%{opacity:.15}50%{opacity:.5}}.vs-beam{animation:vsbeam 2.4s ease-in-out infinite}.vs-beam2{animation-delay:-1.2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const palm = (x, y, h, cls) => '<g class="vs-palm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q-4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#5a3e24" stroke-width="4" fill="none"/>' +
    '<g fill="#2a5a32"><path d="M' + (x + 2) + ' ' + (y - h) + 'q-20 -6 -30 8q16 -10 30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q20 -6 30 8q-16 -10 -30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q-8 -18 -26 -16q16 2 26 16z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q8 -18 26 -16q-16 2 -26 16z"/></g></g>';
  const gull = (cls, x, y) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'q6 -6 12 0q6 -6 12 0" stroke="#f4f4f4" stroke-width="2" fill="none"/></g>';
  const LBT = "#0a5ea8", BLUE = "#3fa9f5", LEMON = "#ffd23f", SUN = "#ff6b4a";

  /* 1. Long Beach Transit Route 22 at Downey Av / Artesia Blvd */
  function vsstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (70 + i * 40) + '" y="110" width="30" height="22" rx="2" fill="#20303c"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="100" width="300" height="56" rx="8" fill="#f3f4f6" stroke="#7a8590" stroke-width="2"/>' + wins +
      '<rect x="40" y="138" width="300" height="8" fill="' + LBT + '"/><rect x="40" y="146" width="300" height="3" fill="#6cc04a"/>' +
      '<rect x="306" y="108" width="30" height="24" rx="3" fill="#20303c"/><rect x="302" y="101" width="38" height="6" rx="1" fill="#111"/><text x="321" y="106" text-anchor="middle" ' + font + ' font-size="5" fill="#ffb000">22 CHERRY</text>' +
      '<circle cx="90" cy="158" r="11" fill="#1a1a1a"/><circle cx="90" cy="158" r="5" fill="#aaa"/><circle cx="290" cy="158" r="11" fill="#1a1a1a"/><circle cx="290" cy="158" r="5" fill="#aaa"/>' +
      '<circle cx="336" cy="146" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#vss1)"/>' +
      '<circle cx="86" cy="70" r="24" fill="#ffe08a" opacity=".85"/>' +
      '<path d="M0 168v-34h46v-10h40v44zM300 168v-28h60v-12h40v40z" fill="#c9b8a4" opacity=".75"/>' +
      palm(24, 168, 112) + palm(378, 168, 104, "vs-palm2") +
      '<rect x="0" y="168" width="400" height="16" fill="#c7c1b4"/>' +
      bus +
      '<rect x="0" y="184" width="400" height="76" fill="#3e3d44"/><path d="M0 232h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<rect x="360" y="96" width="4" height="72" fill="#555"/><rect x="346" y="78" width="32" height="20" rx="2" fill="' + LBT + '"/><text x="362" y="93" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">22</text>' +
      car("vs-car", 0, 244, BLUE) +
      '<rect x="58" y="190" width="284" height="32" rx="3" fill="#111"/><text x="72" y="211" ' + font + ' font-size="14" fill="#fff">Downey Av / Artesia Blvd</text>' +
      '<rect x="300" y="196" width="34" height="20" rx="3" fill="' + LBT + '"/><text x="317" y="211" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">22</text>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">LONG BEACH TRANSIT · NORTH LONG BEACH</text>',
      sky("vss1", "#5aa8e0", "#ffd9a0"));
  }

  /* 2. Ramona Park: the community center, the sign, the court */
  function vspark() {
    const light = x => '<rect x="' + x + '" y="40" width="4" height="96" fill="#6b6f74"/><rect x="' + (x - 10) + '" y="34" width="24" height="8" rx="1" fill="#e9eef2"/><rect class="vs-flk" x="' + (x - 8) + '" y="36" width="20" height="4" fill="#fffbd0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#vss2)"/>' +
      light(30) + light(370) +
      palm(70, 120, 74) + palm(330, 120, 80, "vs-palm2") +
      '<rect x="0" y="118" width="400" height="30" fill="#5c9a46"/>' +
      '<rect x="110" y="70" width="180" height="56" fill="#e8d8bc"/><rect x="104" y="64" width="192" height="10" fill="' + LBT + '"/>' +
      '<rect x="128" y="86" width="26" height="40" fill="#5b4632"/><rect x="132" y="90" width="18" height="14" fill="#a8d4f0"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (168 + i * 28) + '" y="86" width="20" height="16" fill="#a8d4f0" stroke="#fff" stroke-width="1.5"/>').join("") +
      '<text x="200" y="118" text-anchor="middle" ' + font + ' font-size="8" fill="#5b4632">COMMUNITY CENTER</text>' +
      '<rect x="0" y="148" width="400" height="112" fill="#3b6e8f"/><rect x="20" y="158" width="360" height="94" fill="#2f7d5a" stroke="#fff" stroke-width="2"/>' +
      '<path d="M200 158v94" stroke="#fff" stroke-width="2"/><circle cx="200" cy="205" r="16" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<rect x="20" y="186" width="44" height="40" fill="#c8553d" stroke="#fff" stroke-width="2"/><path d="M64 186a20 20 0 0 1 0 40" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<rect x="356" y="150" width="4" height="56" fill="#888"/><rect x="336" y="140" width="34" height="22" fill="#f4f4f4" stroke="#333" stroke-width="1.5"/><rect x="343" y="150" width="14" height="10" fill="none" stroke="#c8553d" stroke-width="1.5"/>' +
      '<ellipse cx="344" cy="165" rx="9" ry="2.5" fill="none" stroke="#ff7a2a" stroke-width="2"/><path d="M336 166l3 10M344 167v10M352 166l-3 10" stroke="#fff" stroke-width="1"/>' +
      '<g class="vs-ball"><circle cx="300" cy="226" r="8" fill="#e8742a" stroke="#6a2e0e" stroke-width="1.5"/><path d="M292 226h16M300 218v16" stroke="#6a2e0e" stroke-width="1"/></g>' +
      '<rect x="40" y="126" width="104" height="26" rx="3" fill="#6b4a2e" stroke="#e8d8bc" stroke-width="2"/><text x="92" y="144" text-anchor="middle" ' + font + ' font-size="12" fill="#ffe9b8">RAMONA PARK</text>' +
      '<rect x="56" y="152" width="4" height="8" fill="#6b4a2e"/><rect x="124" y="152" width="4" height="8" fill="#6b4a2e"/>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">RAMONA PARK · E 65TH ST · NORTH LONG BEACH</text>',
      sky("vss2", "#3a7bd5", "#bfe3ff"));
  }

  /* 3. Coachella: mountains, palms, the Ferris wheel turning */
  function vscoachella() {
    const cols = ["#ff6b4a", "#ffd23f", "#3fa9f5", "#6cc04a", "#c06bff", "#ff8ac0", "#ffffff", "#ffb347"];
    const spokes = Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4, x = 260 + 60 * Math.cos(a), y = 110 + 60 * Math.sin(a);
      return '<path d="M260 110L' + x.toFixed(1) + ' ' + y.toFixed(1) + '" stroke="#e8e8f0" stroke-width="2"/><circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="8" fill="' + cols[i] + '" stroke="#222" stroke-width="1.5"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#vss3)"/>' +
      '<circle cx="90" cy="64" r="22" fill="#ffd27a" opacity=".9"/>' +
      '<path d="M0 150l60 -56l40 30l56 -60l70 70l60 -40l60 30l54 -20v46z" fill="#6a4a7a"/><path d="M0 160l80 -30l60 20l80 -26l90 30l90 -20v26z" fill="#8a5a6a"/>' +
      '<path d="M222 192l38 -82l38 82z" fill="none" stroke="#9aa0a8" stroke-width="5"/>' +
      '<g class="vs-spin"><circle cx="260" cy="110" r="60" fill="none" stroke="#e8e8f0" stroke-width="3"/><circle cx="260" cy="110" r="44" fill="none" stroke="#e8e8f0" stroke-width="1" opacity=".7"/>' + spokes + '</g>' +
      '<circle cx="260" cy="110" r="6" fill="#666"/>' +
      palm(40, 196, 96) + palm(120, 196, 120, "vs-palm2") + palm(368, 196, 104) +
      '<rect x="0" y="190" width="400" height="70" fill="#d8b98a"/><path d="M0 196h400" stroke="#c4a172" stroke-width="2"/>' +
      '<path d="M140 200h110v-26q-55 -22 -110 0z" fill="#2a2a34"/><rect x="146" y="180" width="98" height="20" fill="#121218"/>' +
      '<path class="vs-beam" d="M160 180l-30 -70h14z" fill="' + LEMON + '"/><path class="vs-beam vs-beam2" d="M230 180l30 -70h-14z" fill="' + BLUE + '"/>' +
      Array.from({ length: 18 }, (_, i) => '<circle cx="' + (20 + i * 21) + '" cy="' + (230 + (i % 3) * 7) + '" r="5" fill="#2a2030"/>').join("") +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">INDIO · THE COACHELLA VALLEY</text>',
      sky("vss3", "#f07a5a", "#ffd9a0"));
  }

  /* 4. The Long Beach shoreline and the THUMS oil islands */
  function vsbeach() {
    const tower = (x, h, c) => '<rect x="' + x + '" y="' + (150 - h) + '" width="16" height="' + h + '" rx="3" fill="#f2efe6"/><path d="M' + (x - 4) + ' ' + (150 - h) + 'q12 -14 24 0z" fill="' + c + '"/><rect x="' + (x + 3) + '" y="' + (156 - h) + '" width="10" height="' + (h - 16) + '" fill="' + c + '" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#vss4)"/>' +
      '<circle cx="330" cy="58" r="22" fill="#fff3c8" opacity=".9"/>' +
      gull("vs-gull", 40, 52) + gull("vs-gull vs-gull2", 10, 70) +
      '<rect x="0" y="140" width="400" height="70" fill="#2f86b8"/>' +
      '<path d="M90 152q70 -14 150 0z" fill="#b8a27a"/>' +
      tower(110, 44, "#ff8a5a") + tower(140, 58, "#ffd23f") + tower(172, 50, "#3fa9f5") + tower(204, 40, "#6cc04a") +
      palm(98, 150, 30) + palm(236, 150, 34, "vs-palm2") + palm(160, 150, 26) +
      '<path d="M300 150q30 -8 70 0z" fill="#b8a27a"/>' + tower(326, 30, "#c06bff") + palm(360, 150, 22) +
      '<g class="vs-wave"><path d="M-20 172q20 -8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe6ff" stroke-width="3" fill="none"/></g>' +
      '<g class="vs-wave vs-wave2"><path d="M-20 192q20 -8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#e8f6ff" stroke-width="3" fill="none"/></g>' +
      '<rect x="0" y="204" width="400" height="56" fill="#ead6a8"/>' +
      '<rect x="40" y="150" width="56" height="34" fill="' + BLUE + '" stroke="#fff" stroke-width="2"/><path d="M36 150l32 -14l32 14z" fill="#e8f2fa" stroke="#fff" stroke-width="2"/>' +
      '<path d="M46 184l-8 34M90 184l8 34M58 184v34M78 184v34" stroke="#d8d0c0" stroke-width="4"/><path d="M96 170h20l-14 44" stroke="#d8d0c0" stroke-width="3" fill="none"/>' +
      '<rect x="270" y="214" width="70" height="8" rx="4" fill="' + SUN + '" transform="rotate(-12 305 218)"/>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">LONG BEACH · THE OIL ISLANDS OFF THE SHORE</text>',
      sky("vss4", "#3f8fd8", "#cfeaff"));
  }

  /* 5. Downey Ave and E 65th St: green signs, the tag, Long Beach Airport tower behind */
  function vscorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#vss5)"/>' +
      '<g class="vs-jet"><path d="M60 70l40 -6l8 -6h6l-4 8l14 -2l4 -4h4l-2 6l-28 8z" fill="#f2f4f6"/><path d="M82 66l-8 10h6l12 -8z" fill="#cfd6dc"/></g>' +
      '<rect x="176" y="40" width="20" height="78" fill="#efe8d6"/><path d="M168 40h36l-4 -16h-28z" fill="#3a5a6a"/><rect x="172" y="24" width="28" height="4" fill="#efe8d6"/><path d="M180 18h12l-2 6h-8z" fill="#efe8d6"/>' +
      '<rect x="110" y="88" width="160" height="32" fill="#f4eedf"/><rect x="110" y="84" width="160" height="6" fill="#2a8a8a"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (118 + i * 21) + '" y="96" width="12" height="18" fill="#7ab8c8"/>').join("") +
      palm(70, 128, 62) + palm(320, 128, 70, "vs-palm2") +
      '<rect x="0" y="126" width="400" height="98" fill="#c8bba4"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#ad9f86" stroke-width="1"/>').join("") +
      tag("VINCE STAPLES", 18, 196, 38, BLUE, -6) + tag("NORF NORF", 26, 150, 18, LEMON, -4) + tag("RAMONA PARK", 24, 218, 15, SUN, -3) + tag("BEACH BOY", 186, 216, 14, LEMON, -2) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(286, 98, 108, "Downey Ave") + sign(286, 124, 108, "E 65th St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="vs-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("vs-car", 0, 240, BLUE) +
      '<g class="vs-sp"><circle cx="262" cy="176" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="vs-sp vs-sp2"><circle cx="268" cy="170" r="2" fill="' + BLUE + '" opacity=".6"/></g>' +
      '<text x="200" y="12" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e6d0" opacity=".9">DOWNEY AVE · E 65TH ST · NORTH LONG BEACH</text>',
      sky("vss5", "#22305a", "#f0905a"));
  }

  window.SCENES = { vsstation: vsstation, vspark: vspark, vscoachella: vscoachella, vsbeach: vsbeach, vscorner: vscorner };
})();
