/* spaceghostpurrp scenes (Regions tab: South Florida; Carol City, Miami Gardens - "Blackland"). CSS classes and ids prefixed sg- (the page's own anim-train is kept, used on the bus).
   1 Metrobus Route 27 (Coconut Grove - Calder via NW 27 Av) pulling into the end of the line at Calder, top of Carol City: palms, a purple Blackland dusk.
   2 Kennedy Space Center, Cape Canaveral (NASA Gang, the Space Ghost): a rocket lifting off the pad past the tall gray assembly building, smoke rolling.
   3 The Memphis Pyramid on the Mississippi, where the phonk he chopped came from: steel-and-glass pyramid, the bridge's M lights glowing, the river moving.
   4 Giza at night (Osiris of the East, The Black God): three pyramids under a purple sky, a shooting star, stars blinking.
   5 NW 188 St and NW 37 Av in Carol City: green signs, PURRP tagged on the stucco wall with RAIDER KLAN and BLACKLAND, the white grandstand of Calder behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sgsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.sg-palm{transform-box:fill-box;transform-origin:50% 100%;animation:sgsway 3.4s ease-in-out infinite}.sg-palm2{animation-delay:-1.7s}' +
    '@keyframes sgblink{0%,100%{opacity:.2}50%{opacity:1}}.sg-bl{animation:sgblink 1.8s ease-in-out infinite}.sg-bl2{animation-delay:-.9s}.sg-bl3{animation-delay:-.45s}' +
    '@keyframes sglift{0%{transform:translateY(40px)}100%{transform:translateY(-150px)}}.sg-rocket{animation:sglift 5s ease-in infinite}' +
    '@keyframes sgsmoke{0%{transform:scale(.6);opacity:.9}100%{transform:scale(1.5);opacity:0}}.sg-smoke{transform-box:fill-box;transform-origin:50% 50%;animation:sgsmoke 2.4s ease-out infinite}.sg-smoke2{animation-delay:-1.2s}' +
    '@keyframes sgriver{from{transform:translateX(0)}to{transform:translateX(-60px)}}.sg-river{animation:sgriver 4s linear infinite}' +
    '@keyframes sgstar{0%{transform:translate(0,0);opacity:0}10%{opacity:1}60%{opacity:1}100%{transform:translate(-220px,90px);opacity:0}}.sg-shoot{animation:sgstar 4.5s ease-in infinite}' +
    '@keyframes sgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sg-sp{animation:sgspray 1.4s ease-out infinite}.sg-sp2{animation-delay:.45s}' +
    '@keyframes sgcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.sg-car{animation:sgcar 7s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = (n, maxY, seed) => { let s = ""; for (let i = 0; i < n; i++) { const x = (i * 73 + seed * 31) % 400, y = (i * 37 + seed * 17) % maxY; s += '<circle class="sg-bl' + (i % 3 === 1 ? " sg-bl2" : i % 3 === 2 ? " sg-bl3" : "") + '" cx="' + x + '" cy="' + y + '" r="' + (i % 4 === 0 ? 1.6 : 1) + '" fill="#fff"/>'; } return s; };
  const palm = (x, base, h, cls) => {
    const trunk = '<path d="M' + x + ' ' + base + 'q' + (h * 0.12) + ' ' + (-h * 0.5) + ' ' + (h * 0.04) + ' ' + (-h) + '" stroke="#3a2a3a" stroke-width="' + (h * 0.07) + '" fill="none" stroke-linecap="round"/>';
    const tx = x + h * 0.04, ty = base - h;
    const fr = [[-1, -0.1], [-0.8, 0.35], [-0.3, -0.45], [0.3, -0.45], [0.8, 0.35], [1, -0.1]].map(f => '<path d="M' + tx + ' ' + ty + 'q' + (f[0] * h * 0.3) + ' ' + (-h * 0.22 + f[1] * h * 0.1) + ' ' + (f[0] * h * 0.55) + ' ' + (f[1] * h * 0.35 + h * 0.05) + '" stroke="#1f3a2a" stroke-width="' + (h * 0.06) + '" fill="none" stroke-linecap="round"/>').join("");
    return '<g>' + trunk + '<g class="sg-palm ' + (cls || "") + '">' + fr + '</g></g>';
  };
  const PURP = "#b57cff", GOLD = "#e8c547", RED = "#ff3b5c", BUS = "#1f4e79";

  /* 1. Metrobus 27 into Calder */
  function sgstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1e2233"/>').join("");
    const bus = '<g class="anim-train"><rect x="36" y="116" width="316" height="66" rx="10" fill="#f2f1ee" stroke="#7d868f" stroke-width="2"/>' + win +
      '<rect x="36" y="158" width="316" height="8" fill="' + BUS + '"/><rect x="36" y="168" width="316" height="3" fill="' + PURP + '"/>' +
      '<rect x="326" y="124" width="22" height="40" rx="3" fill="#2b3640"/><rect x="306" y="118" width="46" height="9" rx="2" fill="#111"/><text x="329" y="125.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">27 CALDER</text>' +
      '<circle cx="90" cy="184" r="11" fill="#222"/><circle cx="90" cy="184" r="4" fill="#888"/><circle cx="300" cy="184" r="11" fill="#222"/><circle cx="300" cy="184" r="4" fill="#888"/><circle cx="348" cy="170" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sgs1)"/>' + stars(18, 70, 1) +
      '<circle cx="310" cy="64" r="20" fill="#f4e9ff" opacity=".85"/><circle cx="318" cy="58" r="17" fill="#3a2366"/>' +
      '<g fill="#2a1c46" opacity=".8"><rect x="0" y="94" width="90" height="24"/><rect x="120" y="98" width="70" height="20"/><rect x="250" y="90" width="100" height="28"/></g>' +
      palm(22, 120, 82) + palm(372, 120, 74, "sg-palm2") + palm(206, 118, 58) +
      '<rect x="0" y="116" width="400" height="80" fill="#4d4b55"/><path d="M0 150h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".45"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#b9b2c2"/><path d="M0 196h400" stroke="#8f879a" stroke-width="3"/>' +
      '<rect x="374" y="150" width="5" height="70" fill="#4a4f55"/><rect x="361" y="134" width="32" height="20" rx="2" fill="' + BUS + '"/><text x="377" y="148" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS</text>' +
      '<rect x="70" y="206" width="260" height="40" rx="3" fill="#111"/><text x="84" y="223" ' + font + ' font-size="13" fill="#fff">Calder · End of the Line</text><text x="84" y="239" ' + font + ' font-size="11" fill="#d6cfe6">NW 27 Av · Carol City</text>' + badge(282, 226, "27", BUS),
      sky("sgs1", "#120a26", "#7a3fb8"));
  }

  /* 2. Kennedy Space Center launch */
  function sgnasa() {
    const vab = '<rect x="22" y="70" width="96" height="150" fill="#9aa0a8"/><rect x="22" y="70" width="96" height="8" fill="#7d838b"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (34 + i * 15) + ' 84v130" stroke="#878d95" stroke-width="2"/>').join("") +
      '<rect x="56" y="110" width="28" height="110" fill="#6c727a"/><rect x="30" y="92" width="34" height="20" fill="#1d4e9e"/><rect x="74" y="92" width="36" height="20" fill="#e9ecef"/>';
    const tower = '<rect x="250" y="80" width="10" height="140" fill="#c0392b"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M250 ' + (88 + i * 19) + 'h22" stroke="#c0392b" stroke-width="3"/>').join("") + '<rect x="244" y="74" width="22" height="6" fill="#7a1f16"/>';
    const rocket = '<g class="sg-rocket"><path d="M300 70l12 -28l12 28z" fill="#f2f2f2"/><rect x="300" y="70" width="24" height="96" fill="#f2f2f2"/><rect x="300" y="100" width="24" height="6" fill="' + PURP + '"/><rect x="290" y="128" width="10" height="38" rx="4" fill="#e4e4e4"/><rect x="324" y="128" width="10" height="38" rx="4" fill="#e4e4e4"/>' +
      '<path d="M300 166l-10 14h44l-10 -14z" fill="#777"/><path d="M296 180q16 40 32 0" fill="#ffb347"/><path d="M302 180q10 26 20 0" fill="#fff2a8"/></g>';
    const smoke = [0, 1, 2, 3, 4].map(i => '<circle class="sg-smoke' + (i % 2 ? " sg-smoke2" : "") + '" cx="' + (270 + i * 22) + '" cy="' + (208 - (i % 2) * 6) + '" r="18" fill="#e9e6ef"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sgs2)"/>' + stars(14, 60, 3) + vab + tower + smoke + rocket +
      '<rect x="0" y="216" width="400" height="44" fill="#2f4a3a"/><path d="M0 216h400" stroke="#3f6b4f" stroke-width="3"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#1b3e5c"/><path d="M0 244h400" stroke="#5b86ad" stroke-width="1.5" stroke-dasharray="10 14"/>' +
      '<text x="200" y="30" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" letter-spacing="2">NASA GANG · CAPE CANAVERAL</text>',
      sky("sgs2", "#0b1030", "#e98bd0"));
  }

  /* 3. Memphis Pyramid on the Mississippi */
  function sgmemphis() {
    const pyr = '<path d="M120 196L210 52L300 196z" fill="#a8b4c2"/><path d="M210 52L300 196H232z" fill="#7d8a99"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (138 + i * 15) + ' ' + (168 - i * 22) + 'L' + (282 - i * 15) + ' ' + (168 - i * 22) + '" stroke="#c9d3de" stroke-width="1.2" opacity=".7"/>').join("") +
      '<path d="M210 52L120 196" stroke="#e1e8ef" stroke-width="2"/>';
    const bridge = '<path d="M300 150q24 -34 48 0q24 -34 48 0" stroke="' + PURP + '" stroke-width="3" fill="none" class="sg-bl"/><path d="M300 150q24 -34 48 0q24 -34 48 0" stroke="#fff" stroke-width="1" fill="none" opacity=".6"/>' +
      '<rect x="296" y="150" width="104" height="6" fill="#3b3550"/>' + [312, 336, 360, 384].map(x => '<rect x="' + x + '" y="156" width="4" height="40" fill="#3b3550"/>').join("");
    const river = '<g class="sg-river">' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 60) + ' ' + (214 + (i % 3) * 10) + 'q15 -4 30 0" stroke="#8fb0d6" stroke-width="2" fill="none" opacity=".6"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sgs3)"/>' + stars(22, 90, 5) +
      '<g fill="#221a3a"><rect x="0" y="150" width="40" height="46"/><rect x="44" y="132" width="26" height="64"/><rect x="74" y="160" width="40" height="36"/></g>' +
      pyr + bridge +
      '<rect x="0" y="196" width="400" height="64" fill="#1d2f52"/>' + river +
      '<text x="210" y="246" text-anchor="middle" ' + font + ' font-size="11" fill="#e6dcff" letter-spacing="2">MEMPHIS · WHERE THE PHONK CAME FROM</text>',
      sky("sgs3", "#0c0820", "#4a2a7a"));
  }

  /* 4. Giza at night, Osiris of the East */
  function sggiza() {
    const p = (x, base, w, h, c1, c2) => '<path d="M' + (x - w / 2) + ' ' + base + 'L' + x + ' ' + (base - h) + 'L' + (x + w / 2) + ' ' + base + 'z" fill="' + c1 + '"/><path d="M' + x + ' ' + (base - h) + 'L' + (x + w / 2) + ' ' + base + 'H' + (x + w * 0.08) + 'z" fill="' + c2 + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sgs4)"/>' + stars(40, 150, 7) +
      '<circle cx="80" cy="56" r="16" fill="#f6eed6"/><circle cx="87" cy="51" r="14" fill="#1c1236"/>' +
      '<g class="sg-shoot"><path d="M350 30l30 -12" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="350" cy="30" r="2.5" fill="#fff"/></g>' +
      '<path d="M0 200q100 -16 200 -6t200 -4V260H0z" fill="#8a6a3a"/>' +
      p(130, 202, 170, 120, "#c99a55", "#9a733c") + p(262, 200, 150, 104, "#bf8f4c", "#8f6a36") + p(352, 204, 80, 54, "#b8874a", "#866235") +
      '<path d="M0 222q120 -10 240 0t160 -4V260H0z" fill="#6e5230"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '" letter-spacing="2">OSIRIS OF THE EAST</text>',
      sky("sgs4", "#07051a", "#5a2d8c"));
  }

  /* 5. NW 188 St and NW 37 Av, Carol City */
  function sgcorner() {
    const grand = '<rect x="40" y="70" width="230" height="44" fill="#eef0f2"/><path d="M40 70l20 -14h190l20 14z" fill="#d7dbe0"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (48 + i * 22) + '" y="76" width="14" height="30" fill="#c9d4e2"/>').join("") +
      '<rect x="40" y="110" width="230" height="6" fill="#b8bec6"/>' + [70, 150, 230].map(x => '<circle class="sg-bl" cx="' + x + '" cy="62" r="2.5" fill="#fff6c2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sgs5)"/>' + stars(16, 50, 9) + grand +
      '<g class="sg-car"><rect x="0" y="112" width="44" height="10" rx="3" fill="#7a4fd0"/></g>' +
      '<rect x="0" y="120" width="400" height="104" fill="#e7dccf"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (134 + i * 15) + 'h400" stroke="#d9ccbd" stroke-width="1"/>').join("") +
      '<rect x="0" y="120" width="400" height="6" fill="' + PURP + '"/>' +
      tag("RAIDER KLAN", 34, 148, 16, GOLD, -3) + tag("PURRP", 20, 202, 58, PURP, -6) + tag("BLACKLAND", 200, 206, 18, RED, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      palm(374, 224, 62, "sg-palm2") +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(262, 98, 132, "NW 188 St") + sign(272, 124, 112, "NW 37 Av") +
      '<g class="sg-sp"><circle cx="160" cy="160" r="3" fill="' + PURP + '" opacity=".7"/></g><g class="sg-sp sg-sp2"><circle cx="166" cy="154" r="2" fill="' + PURP + '" opacity=".6"/></g>',
      sky("sgs5", "#1a0f36", "#9b59d0"));
  }

  window.SCENES = { sgstop: sgstop, sgnasa: sgnasa, sgmemphis: sgmemphis, sggiza: sggiza, sgcorner: sgcorner };
})();
