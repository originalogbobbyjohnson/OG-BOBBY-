/* kalanfrfr scenes (Regions tab: Los Angeles + SoCal; Compton / Carson, his dad's home in Compton and his mom's in Carson). CSS classes and ids prefixed kf- (the page's own anim-train is kept).
   1 Carson station, Metro J Line (743 W Carson St): the below-grade busway platform on the shoulder of the 110, the Carson St bridge above, a silver J Line bus sliding in.
   2 Compton College, home of his TwoFr Day giveaway (2024): the campus front, a TWOFR DAY banner waving, backpacks stacked on the tables, balloons bobbing.
   3 Hepner Hall at San Diego State, where he played defensive back on a football scholarship: the white Mission-style twin towers with red tile roofs, a football spiraling past.
   4 The Hollywood Palladium on Sunset Blvd, where he headlined in 2024: the long white Streamline Moderne front, the marquee, searchlights sweeping.
   5 W Carson St and S Main St, Carson: green signs, KALAN tagged on the wall, a blimp drifting over Carson behind (the airship base sat off Main St for decades).
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kfflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.kf-flk{animation:kfflick 2.2s infinite}' +
    '@keyframes kfcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.kf-car{animation:kfcar 6s linear infinite}.kf-car2{animation-delay:-3s}' +
    '@keyframes kfban{0%,100%{transform:skewX(0)}50%{transform:skewX(5deg)}}.kf-ban{transform-box:fill-box;transform-origin:50% 0%;animation:kfban 2.6s ease-in-out infinite}' +
    '@keyframes kfbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}.kf-bob{animation:kfbob 2s ease-in-out infinite}.kf-bob2{animation-delay:-1s}' +
    '@keyframes kfball{from{transform:translate(-80px,30px) rotate(0)}to{transform:translate(480px,-20px) rotate(720deg)}}.kf-ball{transform-box:fill-box;transform-origin:50% 50%;animation:kfball 4s linear infinite}' +
    '@keyframes kfsearch{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.kf-beam{transform-box:fill-box;transform-origin:50% 100%;animation:kfsearch 4s ease-in-out infinite}.kf-beam2{animation-delay:-2s}' +
    '@keyframes kfblimp{from{transform:translateX(-160px)}to{transform:translateX(460px)}}.kf-blimp{animation:kfblimp 26s linear infinite;animation-delay:-10s}' +
    '@keyframes kfpalm{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.kf-palm{transform-box:fill-box;transform-origin:50% 100%;animation:kfpalm 3s ease-in-out infinite}.kf-palm2{animation-delay:-1.5s}' +
    '@keyframes kfspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kf-sp{animation:kfspray 1.4s ease-out infinite}.kf-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const palm = (x, base, h, cls) => '<g class="kf-palm ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#5b4636" stroke-width="5" fill="none"/>' +
    [[-26, 8], [-18, -6], [0, -12], [18, -6], [26, 8]].map(p => '<path d="M' + (x + 2) + ' ' + (base - h) + 'q' + (p[0] / 2) + ' ' + (p[1] - 10) + ' ' + p[0] + ' ' + (p[1] + 4) + '" stroke="#2f7d46" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const SILVER = "#adb8bf", ORANGE = "#f4a261", BLUE = "#2a9df4";

  /* 1. Carson station, Metro J Line */
  function kfstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (38 + i * 42) + '" y="144" width="32" height="22" rx="3" fill="#1d2a36"/>').join("");
    const bus = '<g class="anim-train"><rect x="24" y="132" width="320" height="64" rx="10" fill="#cfd6db" stroke="#6d777e" stroke-width="2"/>' + win +
      '<rect x="24" y="172" width="320" height="8" fill="' + SILVER + '"/><rect x="24" y="180" width="320" height="3" fill="#56616a"/><rect x="172" y="136" width="10" height="56" fill="#9aa4ab"/>' +
      '<rect x="322" y="138" width="20" height="50" rx="5" fill="#b9c2c8"/><circle cx="334" cy="188" r="3.5" fill="#fff6c2"/>' +
      '<rect x="262" y="135" width="56" height="7" rx="2" fill="#111"/><text x="290" y="141" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb347">SAN PEDRO</text>' +
      '<circle cx="76" cy="198" r="11" fill="#151515"/><circle cx="228" cy="198" r="11" fill="#151515"/><circle cx="300" cy="198" r="11" fill="#151515"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kfs1)"/>' +
      '<rect x="0" y="54" width="400" height="22" fill="#b9b3a6"/><rect x="0" y="76" width="400" height="8" fill="#8d877a"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (8 + i * 46) + '" y="44" width="4" height="10" fill="#6e6a62"/>').join("") + '<path d="M0 46h400" stroke="#6e6a62" stroke-width="2"/>' +
      car("kf-car", 0, 38, "#e9e9e9") + car("kf-car kf-car2", 0, 38, "#c0392b") +
      '<text x="200" y="70" text-anchor="middle" ' + font + ' font-size="10" fill="#3b372f">CARSON ST</text>' +
      '<rect x="0" y="84" width="400" height="20" fill="#9a9488"/><path d="M0 104h400" stroke="#6e6a62" stroke-width="2"/>' +
      '<rect x="0" y="104" width="400" height="34" fill="#7c776e"/>' + palm(360, 132, 48, "") + palm(30, 132, 40, "kf-palm2") +
      '<rect x="0" y="198" width="400" height="16" fill="#d6d1c4"/><path d="M0 202h400" stroke="#f2c94c" stroke-width="3"/><rect x="0" y="214" width="400" height="46" fill="#3f3f44"/><path d="M0 238h400" stroke="#e7e2a8" stroke-width="2" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="40" y="88" width="210" height="34" rx="3" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<circle cx="60" cy="105" r="11" fill="' + SILVER + '"/><text x="60" y="110" text-anchor="middle" ' + font + ' font-size="14" fill="#111">J</text>' +
      '<text x="78" y="102" ' + font + ' font-size="14" fill="#fff">Carson</text><text x="78" y="116" ' + font + ' font-size="8" fill="#b9c2c8">HARBOR FWY BUSWAY · TO SAN PEDRO</text>',
      sky("kfs1", "#9fd0f0", "#f6e9cf"));
  }

  /* 2. Compton College, TwoFr Day */
  function kfcollege() {
    const balloon = (x, y, c, cls) => '<g class="kf-bob ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="9" ry="11" fill="' + c + '"/><path d="M' + x + ' ' + (y + 11) + 'q3 14 -2 30" stroke="#555" stroke-width="1" fill="none"/></g>';
    const pack = (x, c) => '<rect x="' + x + '" y="176" width="16" height="18" rx="4" fill="' + c + '"/><path d="M' + (x + 4) + ' 176q4 -6 8 0" stroke="' + c + '" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kfs2)"/>' +
      '<rect x="40" y="70" width="320" height="100" fill="#efe6d2"/><rect x="40" y="62" width="320" height="10" fill="#b5462f"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (56 + i * 38) + '" y="84" width="22" height="30" fill="#5b7fa3"/>').join("") +
      '<rect x="168" y="124" width="64" height="46" fill="#7a3f2c"/><rect x="176" y="130" width="22" height="40" fill="#5b7fa3"/><rect x="202" y="130" width="22" height="40" fill="#5b7fa3"/>' +
      '<text x="200" y="80" text-anchor="middle" ' + font + ' font-size="9" fill="#5a3a2a">COMPTON COLLEGE</text>' +
      palm(22, 172, 90, "") + palm(380, 172, 80, "kf-palm2") +
      '<g class="kf-ban"><rect x="96" y="20" width="208" height="30" rx="3" fill="' + ORANGE + '" stroke="#7a3f12" stroke-width="2"/><text x="200" y="41" text-anchor="middle" ' + font + ' font-size="17" fill="#1d1208">TWOFR DAY</text></g>' +
      '<path d="M96 20L60 0M304 20L340 0" stroke="#555" stroke-width="1.5"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#8a8a86"/><path d="M0 214h400" stroke="#a3a39e" stroke-width="2"/>' +
      '<rect x="60" y="192" width="120" height="8" fill="#f4f1e8"/><rect x="66" y="200" width="4" height="22" fill="#666"/><rect x="170" y="200" width="4" height="22" fill="#666"/>' +
      '<rect x="220" y="192" width="120" height="8" fill="#f4f1e8"/><rect x="226" y="200" width="4" height="22" fill="#666"/><rect x="330" y="200" width="4" height="22" fill="#666"/>' +
      pack(70, BLUE).replace(/y="176"/g, 'y="174"').replace(/ 176q/g, " 174q") + pack(92, "#c0392b").replace(/y="176"/g, 'y="174"').replace(/ 176q/g, " 174q") + pack(114, "#2b8a3e").replace(/y="176"/g, 'y="174"').replace(/ 176q/g, " 174q") + pack(136, ORANGE).replace(/y="176"/g, 'y="174"').replace(/ 176q/g, " 174q") +
      pack(232, "#7a3fa0").replace(/y="176"/g, 'y="174"').replace(/ 176q/g, " 174q") + pack(254, BLUE).replace(/y="176"/g, 'y="174"').replace(/ 176q/g, " 174q") + pack(276, "#c0392b").replace(/y="176"/g, 'y="174"').replace(/ 176q/g, " 174q") + pack(298, "#f2c94c").replace(/y="176"/g, 'y="174"').replace(/ 176q/g, " 174q") +
      balloon(50, 196, "#c0392b", "") + balloon(64, 186, BLUE, "kf-bob2") + balloon(350, 196, ORANGE, "kf-bob2") + balloon(364, 186, "#f2c94c", ""),
      sky("kfs2", "#7cc3ef", "#eaf5fb"));
  }

  /* 3. Hepner Hall, San Diego State */
  function kfsdsu() {
    const tower = (x) => '<rect x="' + x + '" y="60" width="40" height="110" fill="#f3efe6"/><path d="M' + (x - 4) + ' 62l24 -26 24 26z" fill="#b5462f"/>' +
      '<rect x="' + (x + 12) + '" y="74" width="16" height="22" rx="8" fill="#3a3a3a"/><rect x="' + (x + 12) + '" y="110" width="16" height="22" rx="8" fill="#4a6a8a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kfs3)"/>' +
      '<rect x="60" y="110" width="280" height="70" fill="#efe9dc"/><path d="M56 112l144 -18 144 18z" fill="#b5462f"/>' +
      tower(120) + tower(240) +
      '<path d="M180 180v-40q20 -26 40 0v40z" fill="#5a3a2a"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (72 + i * 44 + (i > 2 ? 40 : 0)) + '" y="132" width="16" height="24" rx="8" fill="#4a6a8a"/>').join("").replace(/x="(\d+)"/g, (m, v) => 'x="' + Math.min(+v, 318) + '"') +
      palm(30, 184, 96, "") + palm(372, 184, 84, "kf-palm2") +
      '<rect x="0" y="180" width="400" height="80" fill="#3f8f45"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 56) + ' 180l-20 80" stroke="#f4f4f4" stroke-width="2" opacity=".7"/>').join("") +
      '<g class="kf-ball"><ellipse cx="0" cy="150" rx="14" ry="8" fill="#8a4a24" stroke="#4a2410" stroke-width="2"/><path d="M-6 150h12M-3 147v6M0 147v6M3 147v6" stroke="#fff" stroke-width="1.2"/></g>' +
      '<rect x="120" y="214" width="160" height="26" rx="3" fill="#a6192e"/><text x="200" y="232" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">HEPNER HALL · SDSU</text>',
      sky("kfs3", "#5fb6ee", "#e3f3fb"));
  }

  /* 4. Hollywood Palladium */
  function kfpalladium() {
    return svg(
      '<rect width="400" height="260" fill="url(#kfs4)"/>' +
      '<g class="kf-beam"><path d="M100 150L80 0h40z" fill="#fff6c2" opacity=".18"/></g><g class="kf-beam kf-beam2"><path d="M300 150L280 0h40z" fill="#fff6c2" opacity=".18"/></g>' +
      '<rect x="20" y="96" width="360" height="96" fill="#f1ede4"/><rect x="20" y="88" width="360" height="10" fill="#d9d3c6"/>' +
      Array.from({ length: 4 }, (_, i) => '<path d="M20 ' + (106 + i * 8) + 'h360" stroke="#d9d3c6" stroke-width="2"/>').join("") +
      '<rect x="150" y="60" width="100" height="38" rx="4" fill="#f1ede4"/><path d="M150 70h100M150 78h100M150 86h100" stroke="#d9d3c6" stroke-width="2"/>' +
      '<rect x="70" y="140" width="260" height="30" fill="#111" stroke="#c9a24a" stroke-width="2"/>' +
      '<text x="200" y="161" text-anchor="middle" ' + font + ' font-size="16" fill="#ffd34d" class="kf-flk">KALAN.FRFR TONIGHT</text>' +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + (76 + i * 18.5) + '" cy="137" r="2" fill="#ffd34d" class="kf-flk"/>').join("") +
      '<text x="200" y="126" text-anchor="middle" ' + font + ' font-size="18" fill="#1d1d1d" letter-spacing="4">PALLADIUM</text>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 60) + '" y="174" width="30" height="18" fill="#2d3a4a"/>').join("") +
      palm(10, 192, 110, "") + palm(392, 192, 100, "kf-palm2") +
      '<rect x="0" y="192" width="400" height="14" fill="#c7c1b5"/><rect x="0" y="206" width="400" height="54" fill="#2f2f34"/><path d="M0 234h400" stroke="#e7e2a8" stroke-width="2" stroke-dasharray="20 14"/>' +
      car("kf-car", 0, 222, "#1d1d1d") + car("kf-car kf-car2", 0, 240, ORANGE) +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">SUNSET BLVD · HOLLYWOOD</text>',
      sky("kfs4", "#10142e", "#4b2d5e"));
  }

  /* 5. W Carson St and S Main St */
  function kfcorner() {
    const blimp = '<g class="kf-blimp"><ellipse cx="80" cy="56" rx="62" ry="20" fill="#c9d3dc" stroke="#7d8a96" stroke-width="2"/><path d="M26 56l-18 -16v32z" fill="#7d8a96"/><rect x="66" y="74" width="26" height="9" rx="3" fill="#56616a"/><path d="M30 56h100" stroke="#1d4f8a" stroke-width="5"/><path d="M30 63h100" stroke="#f2c94c" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kfs5)"/>' + blimp +
      '<g fill="#3a3348"><rect x="0" y="102" width="60" height="26"/><rect x="80" y="96" width="50" height="32"/><rect x="290" y="100" width="110" height="28"/></g>' +
      palm(150, 128, 50, "") + palm(270, 128, 44, "kf-palm2") +
      '<rect x="0" y="126" width="400" height="98" fill="#e2d6c0"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (140 + i * 14) + 'h400" stroke="#cfc0a3" stroke-width="1"/>').join("") +
      tag("KALAN", 22, 194, 58, ORANGE, -6) + tag("FR FR", 200, 210, 22, BLUE, -4) + tag("TWOFR", 26, 216, 18, "#f1faee", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(260, 98, 130, "W Carson St") + sign(270, 124, 110, "S Main St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="kf-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="kf-sp"><circle cx="196" cy="168" r="3" fill="' + ORANGE + '" opacity=".7"/></g><g class="kf-sp kf-sp2"><circle cx="202" cy="162" r="2" fill="' + ORANGE + '" opacity=".6"/></g>',
      sky("kfs5", "#3b5b8f", "#f4b37a"));
  }

  window.SCENES = { kfstation: kfstation, kfcollege: kfcollege, kfsdsu: kfsdsu, kfpalladium: kfpalladium, kfcorner: kfcorner };
})();
