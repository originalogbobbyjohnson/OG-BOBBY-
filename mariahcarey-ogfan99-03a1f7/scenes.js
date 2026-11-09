/* mariahcarey scenes (NYC map, Long Island: born in Huntington, graduated Harborfields High School in Greenlawn). 400 x 260 SVGs.
   CSS classes prefixed mc- (the page's own anim-train is kept on the train).
   0 Greenlawn LIRR station (Port Jefferson Branch, diesel territory): low platform in the trees, black sign with the LIRR bullet, a diesel push-pull with silver bi-level coaches rolling in.
   1 Harborfields High School, Greenlawn: brick school, green-and-white, a songbook on the lawn, butterflies drifting (she wrote songs there as a teen).
   2 Huntington Harbor Lighthouse at Lloyd Harbor: the 1912 concrete castle-style light on its square base, black lantern, beam sweeping, sailboat.
   3 Queen of Christmas: a snowy night, a tree with lights, sleigh bells, a glitter microphone on a stand, snow falling.
   4 Main St and New York Ave in Huntington village: green signs, MARIAH tagged with a butterfly, the old brick Huntington Town Hall with its white cupola behind. */
(function () {
  const W = 400, H = 260;
  const PINK = "#ff9ccf", GOLD = "#f5d27a", LILAC = "#b98cff", CREAM = "#f6ecdc", BRICK = "#9a4a34", GREEN = "#1f7a3e";
  const css = '<style>' +
    '@keyframes mcflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.95}}.mc-flk{animation:mcflick 2.8s infinite}' +
    '@keyframes mcfly{0%{transform:translate(0,0)}25%{transform:translate(30px,-14px)}50%{transform:translate(60px,4px)}75%{transform:translate(90px,-10px)}100%{transform:translate(120px,0)}}.mc-fly{animation:mcfly 9s ease-in-out infinite alternate}.mc-fly2{animation-delay:-4s}.mc-fly3{animation-delay:-2s}' +
    '@keyframes mcflap{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.35)}}.mc-flap{transform-box:fill-box;transform-origin:50% 50%;animation:mcflap .5s ease-in-out infinite}' +
    '@keyframes mcbeam{0%,100%{opacity:.05}50%{opacity:.55}}.mc-beam{animation:mcbeam 3s ease-in-out infinite}' +
    '@keyframes mcsail{0%,100%{transform:translateX(0)}50%{transform:translateX(70px)}}.mc-sail{animation:mcsail 14s ease-in-out infinite}' +
    '@keyframes mcsnow{from{transform:translateY(-20px)}to{transform:translateY(270px)}}.mc-snow{animation:mcsnow 7s linear infinite}.mc-sn2{animation-delay:-2.3s}.mc-sn3{animation-delay:-4.6s}' +
    '@keyframes mctw{0%,100%{opacity:.2}50%{opacity:1}}.mc-tw{animation:mctw 1.4s ease-in-out infinite}.mc-tw2{animation-delay:-.5s}.mc-tw3{animation-delay:-.9s}' +
    '@keyframes mcspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.mc-sp{animation:mcspray 1.4s ease-out infinite}.mc-spb{animation-delay:.5s}' +
    '@keyframes mcwalk{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.mc-walk{animation:mcwalk 15s linear infinite}.mc-wk2{animation-delay:-7s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 6 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#4a3322"/><circle cx="' + x + '" cy="' + (y - 14 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 8 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 8 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  /* a butterfly at x,y, size s */
  const fly = (x, y, s, c1, c2, cls) => '<g class="mc-fly ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="mc-flap">' +
    '<path d="M0 0C-6 -12 -18 -10 -16 -2C-15 4 -6 4 0 0z" fill="' + c1 + '" stroke="#3a2040" stroke-width="1"/><path d="M0 0C6 -12 18 -10 16 -2C15 4 6 4 0 0z" fill="' + c1 + '" stroke="#3a2040" stroke-width="1"/>' +
    '<path d="M0 0C-4 6 -12 12 -10 4z" fill="' + c2 + '" stroke="#3a2040" stroke-width="1"/><path d="M0 0C4 6 12 12 10 4z" fill="' + c2 + '" stroke="#3a2040" stroke-width="1"/></g>' +
    '<rect x="-1" y="-6" width="2" height="12" rx="1" fill="#3a2040"/></g></g>';

  /* 0. Greenlawn LIRR station */
  function mcstation() {
    const win = (x0, n) => Array.from({ length: n }, (_, i) => '<rect x="' + (x0 + i * 22) + '" y="124" width="14" height="10" rx="2" fill="#cfe6f5"/><rect x="' + (x0 + i * 22) + '" y="144" width="14" height="10" rx="2" fill="#cfe6f5"/>').join("");
    const tr = '<g class="anim-train">' +
      /* diesel locomotive */
      '<rect x="14" y="112" width="86" height="64" rx="5" fill="#3d4652" stroke="#1c222a" stroke-width="2"/><rect x="20" y="118" width="28" height="18" rx="2" fill="#cfe6f5"/>' +
      '<rect x="14" y="146" width="86" height="6" fill="#0039a6"/><rect x="14" y="152" width="86" height="3" fill="#f2c200"/><circle cx="92" cy="166" r="4" fill="#fff6c2"/>' +
      '<rect x="56" y="104" width="30" height="8" fill="#2a3038"/>' +
      /* silver bi-level coaches */
      '<rect x="102" y="110" width="150" height="66" rx="5" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win(110, 6) +
      '<rect x="254" y="110" width="150" height="66" rx="5" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win(262, 6) +
      '<rect x="102" y="162" width="302" height="4" fill="#0039a6"/></g>';
    const trees = [tree(20, 102, 1.6, "#2f6b3a"), tree(76, 96, 1.3, "#3a7a44"), tree(140, 102, 1.5, "#2f6b3a"), tree(206, 96, 1.4, "#3f8a4a"), tree(276, 102, 1.6, "#2f6b3a"), tree(340, 96, 1.4, "#3a7a44"), tree(392, 102, 1.3, "#2f6b3a")].join("");
    return svg('<rect width="400" height="260" fill="url(#mcs0)"/>' + trees +
      '<rect x="0" y="98" width="400" height="10" fill="#6a7a5a"/>' + tr +
      '<rect x="0" y="176" width="400" height="10" fill="#5a4a3a"/><path d="M0 182h400" stroke="#9aa0a8" stroke-width="2"/>' +
      /* low platform + small shelter */
      '<rect x="0" y="186" width="400" height="74" fill="#8f8b82"/><rect x="0" y="186" width="400" height="5" fill="#f2c200"/>' +
      '<g transform="translate(300 0)"><rect x="0" y="196" width="80" height="40" fill="' + BRICK + '"/><path d="M-6 198l46 -16 46 16z" fill="#4a3a32"/><rect x="30" y="210" width="18" height="26" fill="#3a2418"/><rect x="8" y="206" width="14" height="12" fill="#cfe2ee"/><rect x="58" y="206" width="14" height="12" fill="#cfe2ee"/></g>' +
      /* black station sign */
      '<rect x="110" y="22" width="210" height="44" rx="3" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<text x="190" y="52" text-anchor="middle" ' + font + ' font-size="22" fill="#fff">Greenlawn</text>' +
      '<rect x="262" y="32" width="48" height="24" rx="12" fill="#0039a6"/><text x="286" y="49" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">LIRR</text>' +
      '<rect x="180" y="66" width="4" height="32" fill="#222"/><rect x="246" y="66" width="4" height="32" fill="#222"/>' +
      '<rect x="40" y="222" width="140" height="18" rx="2" fill="#111"/><text x="110" y="235" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Port Jefferson Branch</text>' +
      '<circle class="mc-flk" cx="22" cy="200" r="5" fill="#fff3c2"/>' + fly(200, 210, .8, PINK, GOLD, ""),
      sky("mcs0", "#9fd0ee", "#f3ecf4"));
  }

  /* 1. Harborfields High School, Greenlawn */
  function mcschool() {
    const wins = Array.from({ length: 10 }, (_, i) => '<rect x="' + (64 + i * 28) + '" y="60" width="16" height="18" fill="#cfe2ee" stroke="#f3eee4" stroke-width="2"/><rect x="' + (64 + i * 28) + '" y="90" width="16" height="18" fill="#cfe2ee" stroke="#f3eee4" stroke-width="2"/>').join("");
    const book = '<g transform="translate(150 186)"><path d="M0 0l50 8 50 -8v40l-50 8 -50 -8z" fill="#fff8ee" stroke="#8a7a6a" stroke-width="2"/><path d="M50 8v40" stroke="#8a7a6a" stroke-width="2"/>' +
      [10, 18, 26, 34].map(y => '<path d="M8 ' + y + 'l36 6M56 ' + (y + 6) + 'l36 -6" stroke="#c9b8e8" stroke-width="1.5"/>').join("") +
      '<circle cx="24" cy="22" r="3" fill="#3a2040"/><path d="M27 22v-12l8 2" stroke="#3a2040" stroke-width="2" fill="none"/><circle cx="72" cy="26" r="3" fill="#3a2040"/><path d="M75 26v-12" stroke="#3a2040" stroke-width="2"/></g>';
    return svg('<rect width="400" height="260" fill="url(#mcs1)"/>' +
      '<rect x="50" y="44" width="300" height="88" fill="' + BRICK + '"/><rect x="50" y="40" width="300" height="6" fill="#f3eee4"/>' + wins +
      '<rect x="184" y="104" width="32" height="28" fill="#3a2418"/><rect x="176" y="100" width="48" height="5" fill="#f3eee4"/>' +
      '<rect x="110" y="45" width="180" height="14" rx="2" fill="#f3eee4"/><text x="200" y="56" text-anchor="middle" ' + font + ' font-size="9" fill="' + GREEN + '">HARBORFIELDS HIGH SCHOOL</text>' +
      '<rect x="356" y="30" width="2" height="102" fill="#ddd"/><rect x="358" y="32" width="22" height="13" fill="' + GREEN + '"/><rect x="358" y="45" width="22" height="5" fill="#fff"/>' +
      '<rect x="0" y="132" width="400" height="128" fill="#5a9a46"/><path d="M0 150q200 -14 400 0" stroke="#6aaa54" stroke-width="10" fill="none"/>' +
      tree(26, 160, 1.5, "#2f6b3a") + tree(380, 166, 1.4, "#3a7a44") + book +
      fly(60, 120, 1, PINK, GOLD, "") + fly(200, 90, .8, LILAC, PINK, "mc-fly2") + fly(250, 170, .9, GOLD, LILAC, "mc-fly3") +
      '<rect x="120" y="238" width="160" height="16" rx="2" fill="#111"/><text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Greenlawn, Long Island</text>',
      sky("mcs1", "#8ec2ea", "#eef3f8"));
  }

  /* 2. Huntington Harbor Lighthouse, Lloyd Harbor */
  function mclighthouse() {
    const waves = Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52) + ' ' + (176 + (i % 3) * 14) + 'q13 -6 26 0t26 0" stroke="#bfe0f0" stroke-width="2" fill="none" opacity=".7"/>').join("");
    const lh = '<g transform="translate(176 0)">' +
      '<rect x="-20" y="156" width="110" height="20" fill="#8f8b82"/><rect x="-14" y="150" width="98" height="8" fill="#a7a39a"/>' +
      '<rect x="0" y="98" width="70" height="54" fill="#d9c8a6" stroke="#9a8a6a" stroke-width="2"/>' +
      '<path d="M0 98h70" stroke="#9a8a6a" stroke-width="3"/>' + [6, 20, 34, 48, 60].map(x => '<rect x="' + x + '" y="92" width="8" height="8" fill="#d9c8a6" stroke="#9a8a6a" stroke-width="1"/>').join("") +
      '<rect x="12" y="112" width="10" height="16" fill="#3a4a5a"/><rect x="48" y="112" width="10" height="16" fill="#3a4a5a"/><rect x="28" y="124" width="14" height="26" fill="#5a4a3a"/>' +
      '<rect x="40" y="50" width="26" height="44" fill="#d9c8a6" stroke="#9a8a6a" stroke-width="2"/>' + [40, 48, 56, 62].map(x => '<rect x="' + x + '" y="46" width="5" height="6" fill="#d9c8a6" stroke="#9a8a6a" stroke-width="1"/>').join("") +
      '<rect x="44" y="30" width="18" height="16" fill="#1c1c1c"/><rect x="47" y="33" width="12" height="10" fill="#fff3a8" class="mc-flk"/><path d="M42 30l11 -10 11 10z" fill="#1c1c1c"/>' +
      '</g>';
    const beam = '<path class="mc-beam" d="M229 38L0 10V70z" fill="#fff6c8"/><path class="mc-beam" d="M235 38L400 0V80z" fill="#fff6c8" style="animation-delay:-1.5s"/>';
    const boat = '<g class="mc-sail"><path d="M40 196h56l-8 10h-40z" fill="#fff"/><path d="M66 194v-44l24 40z" fill="#fff" stroke="#ccc" stroke-width="1"/><path d="M64 194v-36l-18 32z" fill="' + PINK + '"/></g>';
    return svg('<rect width="400" height="260" fill="url(#mcs2)"/>' + beam +
      '<path d="M0 150q80 -24 160 -6q20 4 40 6h200v20h-400z" fill="#3f6a4a"/>' +
      '<rect x="0" y="164" width="400" height="96" fill="#3f78a8"/>' + waves + lh + boat +
      '<rect x="110" y="236" width="180" height="18" rx="2" fill="#111"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Huntington Harbor Light</text>',
      sky("mcs2", "#1c2550", "#e8a6c8"));
  }

  /* 3. Queen of Christmas: snowy night, tree, sleigh bells, glitter mic */
  function mcxmas() {
    const flakes = (cls, off) => '<g class="mc-snow ' + cls + '">' + Array.from({ length: 16 }, (_, i) => '<circle cx="' + ((i * 53 + off) % 400) + '" cy="' + ((i * 37) % 120) + '" r="' + (1.5 + (i % 3)) + '" fill="#fff" opacity=".85"/>').join("") + '</g>';
    const lights = [[200, 70], [186, 96], [214, 104], [176, 128], [226, 132], [190, 150], [214, 158], [168, 170], [234, 174]].map((p, i) =>
      '<circle class="mc-tw ' + ["", "mc-tw2", "mc-tw3"][i % 3] + '" cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="' + [PINK, GOLD, "#ff5a5a", LILAC][i % 4] + '"/>').join("");
    const tree = '<path d="M200 50l-40 60h20l-34 50h22l-30 46h124l-30 -46h22l-34 -50h20z" fill="#1f6a3a" stroke="#134a28" stroke-width="2"/><rect x="190" y="206" width="20" height="18" fill="#5a3a22"/>' +
      '<path d="M200 36l4 9 10 1 -8 6 3 10 -9 -6 -9 6 3 -10 -8 -6 10 -1z" fill="' + GOLD + '" class="mc-flk"/>' + lights;
    const bells = '<g transform="translate(70 70)"><path d="M0 0q20 10 40 0" stroke="#c62e2e" stroke-width="4" fill="none"/>' + [0, 20, 40].map(x => '<circle cx="' + x + '" cy="12" r="9" fill="' + GOLD + '" stroke="#8a6a1e" stroke-width="2"/><path d="M' + (x - 4) + ' 14h8" stroke="#8a6a1e" stroke-width="2"/>').join("") + '</g>';
    const mic = '<g transform="translate(320 0)"><rect x="-2" y="120" width="4" height="96" fill="#c9ced6"/><path d="M-18 216h36" stroke="#c9ced6" stroke-width="4"/>' +
      '<rect x="-9" y="92" width="18" height="30" rx="9" fill="' + PINK + '" stroke="#8a2a5a" stroke-width="2"/>' + [100, 108, 116].map(y => '<path d="M-7 ' + y + 'h14" stroke="#fff" stroke-width="1" opacity=".7"/>').join("") +
      '<circle class="mc-tw" cx="-14" cy="94" r="2" fill="#fff"/><circle class="mc-tw mc-tw2" cx="14" cy="104" r="2" fill="#fff"/><circle class="mc-tw mc-tw3" cx="-12" cy="118" r="2" fill="#fff"/></g>';
    const gifts = '<rect x="236" y="206" width="30" height="20" fill="' + LILAC + '"/><rect x="249" y="206" width="4" height="20" fill="' + GOLD + '"/><rect x="132" y="210" width="26" height="16" fill="' + PINK + '"/><rect x="143" y="210" width="4" height="16" fill="#fff"/>';
    return svg('<rect width="400" height="260" fill="url(#mcs3)"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#eef2f8"/><path d="M0 218q100 -10 200 0t200 0" stroke="#fff" stroke-width="6" fill="none"/>' +
      tree + bells + mic + gifts + flakes("", 10) + flakes("mc-sn2", 30) + flakes("mc-sn3", 70) +
      '<rect x="120" y="236" width="160" height="18" rx="2" fill="#111"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">QUEEN OF CHRISTMAS</text>',
      sky("mcs3", "#0d1230", "#3a3a6a"));
  }

  /* 4. Main St and New York Ave, Huntington village */
  function mccorner() {
    const hall = '<g><rect x="206" y="70" width="180" height="110" fill="' + BRICK + '"/><rect x="200" y="64" width="192" height="8" fill="' + CREAM + '"/><path d="M226 64l70 -22 70 22z" fill="' + CREAM + '"/>' +
      '<rect x="282" y="22" width="28" height="22" fill="' + CREAM + '"/><path d="M280 24l16 -14 16 14z" fill="#3f6a5a"/><rect x="292" y="28" width="8" height="10" fill="#3a4a5a"/>' +
      [240, 262, 324, 346].map(x => '<rect x="' + x + '" y="76" width="8" height="104" fill="' + CREAM + '"/>').join("") +
      [214, 362].map(x => '<rect x="' + x + '" y="90" width="16" height="30" fill="#cfe2ee" stroke="' + CREAM + '" stroke-width="2"/><rect x="' + x + '" y="134" width="16" height="30" fill="#cfe2ee" stroke="' + CREAM + '" stroke-width="2"/>').join("") +
      '<path d="M282 180v-44a14 14 0 0 1 28 0v44z" fill="#3a2418" stroke="' + CREAM + '" stroke-width="2"/></g>';
    const walker = (cls, y, c) => '<g class="mc-walk ' + cls + '"><circle cx="0" cy="' + (y - 22) + '" r="4" fill="#3a2a24"/><rect x="-4" y="' + (y - 18) + '" width="8" height="12" rx="2" fill="' + c + '"/><rect x="-3" y="' + (y - 6) + '" width="2.5" height="8" fill="#222"/><rect x="0.5" y="' + (y - 6) + '" width="2.5" height="8" fill="#222"/></g>';
    return svg('<rect width="400" height="260" fill="url(#mcs4)"/>' + hall +
      '<rect x="0" y="96" width="196" height="128" fill="#d8cdb8"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (112 + i * 14) + 'h196" stroke="#c4b8a0" stroke-width="1"/>').join("") +
      tag("MARIAH", 12, 170, 34, PINK, -6) + tag("MIMI", 40, 206, 18, GOLD, -3) +
      '<g transform="translate(160 186)"><path d="M0 0C-7 -14 -20 -12 -18 -2C-16 5 -7 5 0 0zM0 0C7 -14 20 -12 18 -2C16 5 7 5 0 0z" fill="' + LILAC + '" stroke="#000" stroke-width="2"/><path d="M0 0C-5 7 -13 13 -11 4zM0 0C5 7 13 13 11 4z" fill="' + GOLD + '" stroke="#000" stroke-width="2"/><rect x="-1.5" y="-7" width="3" height="14" fill="#000"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55555b"/><rect x="0" y="222" width="400" height="4" fill="#9a9aa0"/>' +
      '<path d="M0 244h40M70 244h40M140 244h40M210 244h40M280 244h40M350 244h40" stroke="#e8e0c0" stroke-width="2"/>' +
      walker("", 222, "#3a3a8a") + walker("mc-wk2", 222, PINK) +
      '<rect x="196" y="84" width="6" height="140" fill="#2f2f2f"/>' + sign(150, 86, 100, "Main St") + sign(138, 112, 124, "New York Ave") +
      '<g class="mc-sp"><circle cx="140" cy="166" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="mc-sp mc-spb"><circle cx="146" cy="160" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("mcs4", "#1e1a42", "#e89ab8"));
  }

  window.SCENES = { mcstation: mcstation, mcschool: mcschool, mclighthouse: mclighthouse, mcxmas: mcxmas, mccorner: mccorner };
})();
