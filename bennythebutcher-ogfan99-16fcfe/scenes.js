/* bennythebutcher scenes (Regions tab: Upstate New York; East Side Buffalo, Montana Ave = "Tana"). CSS classes prefixed bn- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bnsnow{0%{transform:translateY(-20px)}100%{transform:translateY(280px)}}.bn-sn{animation:bnsnow 6s linear infinite}.bn-sn2{animation-delay:-2s}.bn-sn3{animation-delay:-4s}' +
    '@keyframes bnglow{0%,100%{opacity:.45}50%{opacity:1}}.bn-glow{animation:bnglow 2.2s ease-in-out infinite}.bn-g2{animation-delay:-1.1s}' +
    '@keyframes bnsteam{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-30px);opacity:0}}.bn-st{animation:bnsteam 2.2s ease-out infinite}.bn-st2{animation-delay:-.8s}.bn-st3{animation-delay:-1.5s}' +
    '@keyframes bnsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.bn-sw{transform-box:fill-box;transform-origin:50% 0%;animation:bnsweep 3.2s ease-in-out infinite}.bn-sw2{animation-delay:-1.6s}' +
    '@keyframes bnbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.bn-bob{animation:bnbob .7s ease-in-out infinite}.bn-bob2{animation-delay:-.35s}' +
    '@keyframes bncarL{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.bn-cl{animation:bncarL 5s linear infinite}.bn-cl2{animation-delay:-2.5s}' +
    '@keyframes bncarR{0%{transform:translateX(520px)}100%{transform:translateX(-120px)}}.bn-cr{animation:bncarR 6s linear infinite}.bn-cr2{animation-delay:-3s}' +
    '@keyframes bnspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bn-sp{animation:bnspray 1.4s ease-out infinite}.bn-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const snow = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="bn-sn' + (i % 3 === 1 ? " bn-sn2" : i % 3 === 2 ? " bn-sn3" : "") + '" cx="' + ((i * 71) % 400) + '" cy="' + ((i * 37) % 120 - 10) + '" r="' + (i % 2 ? 1.6 : 2.2) + '" fill="#fff" opacity=".85"/>'; return s; };
  const GOLD = "#e8b84a", RED = "#d1352b", CREAM = "#f2efe6", NFTA = "#1f4e79", NTEAL = "#2bb3c0";

  /* 1. Route 12 Utica bus at the Ferry St / Leslie St stop on the East Side, a block from Montana Ave: snowy night, the NFTA stop sign, the white-and-blue bus rolling in */
  function bnstation() {
    const bus = '<g class="anim-train"><rect x="30" y="112" width="300" height="80" rx="9" fill="#f4f6f8" stroke="#8b939c" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (48 + i * 42) + '" y="124" width="32" height="30" rx="3" fill="#1d2833"/>').join("") +
      '<rect x="30" y="160" width="300" height="9" fill="' + NFTA + '"/><rect x="30" y="171" width="300" height="4" fill="' + NTEAL + '"/>' +
      '<rect x="300" y="120" width="26" height="48" rx="3" fill="#1d2833"/><rect x="292" y="114" width="36" height="9" rx="2" fill="#111"/>' +
      '<text x="310" y="121.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb21c">12 UTICA</text>' +
      '<circle cx="80" cy="192" r="13" fill="#222"/><circle cx="80" cy="192" r="5" fill="#9aa1a8"/><circle cx="270" cy="192" r="13" fill="#222"/><circle cx="270" cy="192" r="5" fill="#9aa1a8"/>' +
      '<circle class="bn-glow" cx="324" cy="178" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bn1)"/>' +
      /* East Side houses: two-story wood-frame doubles */
      [[0, 64, "#5b4a3f"], [70, 58, "#3f4a57"], [134, 62, "#5a3f3a"], [204, 56, "#46503e"], [266, 64, "#4a4038"], [336, 64, "#3d4556"]].map(([x, w, c]) =>
        '<path d="M' + x + ' 110v-46l' + (w / 2) + ' -22l' + (w / 2) + ' 22v46z" fill="' + c + '"/><path d="M' + (x - 2) + ' 64l' + (w / 2 + 2) + ' -24l' + (w / 2 + 2) + ' 24" stroke="#e9eef2" stroke-width="3" fill="none"/>' +
        '<rect class="bn-glow' + (x % 3 ? " bn-g2" : "") + '" x="' + (x + 10) + '" y="72" width="12" height="14" fill="#ffd98a"/><rect x="' + (x + w - 22) + '" y="72" width="12" height="14" fill="#2a2f38"/>').join("") +
      '<rect x="0" y="108" width="400" height="6" fill="#e9eef2"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#3a3d42"/><rect x="0" y="198" width="400" height="10" fill="#e9eef2"/><path d="M0 226h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' + bus +
      /* the stop pole with the NFTA plate */
      '<rect x="352" y="96" width="5" height="102" fill="#6e737b"/><rect x="336" y="74" width="40" height="30" rx="3" fill="' + NFTA + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="356" y="86" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">NFTA</text><text x="356" y="99" text-anchor="middle" ' + font + ' font-size="10" fill="#ffb21c">12</text>' +
      sign(212, 52, 92, "E Ferry St") + sign(220, 76, 78, "Leslie St") + '<rect x="256" y="98" width="4" height="10" fill="#6e737b"/>' + snow(26),
      sky("bn1", "#0d1530", "#3b4a6e"));
  }

  /* 2. The Italian deli on Niagara St where he kicked off the Tana Talk 4 giveaway: brick storefront, red-white-green awning, salami in the window, the line out the door, steam off the trays */
  function bndeli() {
    const stripes = Array.from({ length: 12 }, (_, i) => '<path d="M' + (60 + i * 24) + ' 92h24l-4 26h-24z" fill="' + ["#c8262c", "#f4f1e8", "#1f8a4c"][i % 3] + '"/>').join("");
    const person = (x, c, k) => '<g class="bn-bob' + (k ? " bn-bob2" : "") + '"><circle cx="' + x + '" cy="176" r="8" fill="#2b2420"/><rect x="' + (x - 10) + '" y="185" width="20" height="34" rx="7" fill="' + c + '"/><rect x="' + (x - 8) + '" y="217" width="6" height="18" fill="#1d1d22"/><rect x="' + (x + 2) + '" y="217" width="6" height="18" fill="#1d1d22"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bn2)"/>' +
      '<rect x="40" y="30" width="320" height="200" fill="#8a4b36"/>' + Array.from({ length: 24 }, (_, i) => '<path d="M40 ' + (36 + i * 8) + 'h320" stroke="#7a3f2d" stroke-width="1"/>').join("") +
      '<rect x="88" y="46" width="224" height="30" rx="3" fill="#f4f1e8" stroke="#1f8a4c" stroke-width="3"/><text x="200" y="68" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="19" fill="#c8262c">ITALIAN DELI</text>' +
      stripes + '<path d="M56 92h292" stroke="#5a2a1e" stroke-width="3"/>' +
      '<rect x="66" y="122" width="120" height="74" fill="#2a2420" stroke="#d9c9a3" stroke-width="3"/><rect x="222" y="122" width="112" height="74" fill="#2a2420" stroke="#d9c9a3" stroke-width="3"/>' +
      '<rect class="bn-glow" x="70" y="126" width="112" height="66" fill="#ffd98a" opacity=".55"/><rect class="bn-glow bn-g2" x="226" y="126" width="104" height="66" fill="#ffd98a" opacity=".55"/>' +
      [84, 104, 124, 144, 164].map((x, i) => '<path d="M' + x + ' 126v' + (8 + i % 2 * 4) + '" stroke="#5a3a20" stroke-width="1"/><ellipse cx="' + x + '" cy="' + (148 + i % 2 * 4) + '" rx="6" ry="13" fill="' + (i % 2 ? "#8b2b22" : "#a5462f") + '"/>').join("") +
      '<rect x="236" y="168" width="84" height="20" rx="3" fill="#c0c4c8"/>' + [252, 276, 300].map((x, i) => '<ellipse cx="' + x + '" cy="168" rx="9" ry="5" fill="' + ["#e8c27a", "#c8262c", "#f2e6c8"][i] + '"/><path class="bn-st' + (i ? " bn-st" + (i + 1) : "") + '" d="M' + x + ' 160q-4 -8 0 -14q4 -6 0 -12" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>').join("") +
      '<rect x="190" y="130" width="28" height="100" fill="#3b2a20"/><rect x="194" y="134" width="20" height="40" fill="#ffd98a" opacity=".5"/>' +
      '<rect x="96" y="100" width="0" height="0"/><text x="125" y="214" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">TANA TALK 4</text>' +
      '<rect x="0" y="230" width="400" height="30" fill="#5a5650"/><rect x="0" y="228" width="400" height="4" fill="#d8d4cc"/>' +
      person(236, "#2b4a7a", 0) + person(262, RED, 1) + person(288, "#3a3a3a", 0) + person(314, GOLD, 1) + person(340, "#4a6a3a", 0) + person(366, "#5a3a6a", 1),
      sky("bn2", "#1a2340", "#6c7aa0"));
  }

  /* 3. Hometown show at the Showplace Theater: the stage under sweeping lights, the BSF banner, the crowd's hands up */
  function bnstage() {
    const hands = Array.from({ length: 18 }, (_, i) => '<g class="bn-bob' + (i % 2 ? " bn-bob2" : "") + '"><circle cx="' + (12 + i * 22) + '" cy="' + (214 - i % 3 * 4) + '" r="11" fill="#14121a"/><path d="M' + (8 + i * 22) + ' ' + (206 - i % 3 * 4) + 'l-6 -26" stroke="#14121a" stroke-width="6" stroke-linecap="round"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="#120c14"/>' +
      '<path d="M0 0h400v40q-200 24 -400 0z" fill="#5a0e16"/>' + [40, 120, 200, 280, 360].map(x => '<path d="M' + x + ' 0v34" stroke="#3a070d" stroke-width="10"/>').join("") +
      '<g class="bn-sw"><path d="M110 30l-50 170h100z" fill="' + GOLD + '" opacity=".22"/></g><g class="bn-sw bn-sw2"><path d="M290 30l-50 170h100z" fill="' + RED + '" opacity=".22"/></g><g class="bn-sw"><path d="M200 26l-40 170h80z" fill="#fff" opacity=".12"/></g>' +
      [110, 200, 290].map(x => '<circle class="bn-glow" cx="' + x + '" cy="30" r="6" fill="#fff6c2"/>').join("") +
      '<rect x="120" y="58" width="160" height="56" rx="4" fill="#0b0b0e" stroke="' + GOLD + '" stroke-width="3"/><text x="200" y="98" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="38" fill="' + GOLD + '">BSF</text>' +
      '<text x="200" y="134" text-anchor="middle" ' + font + ' font-size="12" letter-spacing="4" fill="' + CREAM + '">BUFFALO, NY</text>' +
      '<rect x="0" y="160" width="400" height="20" fill="#2a2228"/><rect x="0" y="158" width="400" height="4" fill="' + GOLD + '"/>' +
      '<rect x="184" y="138" width="4" height="22" fill="#888"/><circle cx="186" cy="136" r="4" fill="#bbb"/>' +
      '<rect x="40" y="140" width="34" height="20" fill="#1b1b1f"/><circle cx="57" cy="150" r="7" fill="#333"/><rect x="326" y="140" width="34" height="20" fill="#1b1b1f"/><circle cx="343" cy="150" r="7" fill="#333"/>' +
      hands + '<rect x="0" y="222" width="400" height="38" fill="#0a080c"/>',
      "");
  }

  /* 4. The East Side under the snow: the Kensington Expressway (Route 33) sunk in its trench beside Humboldt Parkway's old trees, traffic both ways */
  function bnexpress() {
    const car = (cls, y, c, flip) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="54" height="16" rx="5" fill="' + c + '"/><rect x="10" y="' + (y - 9) + '" width="30" height="11" rx="4" fill="' + c + '"/><rect x="14" y="' + (y - 7) + '" width="22" height="7" rx="2" fill="#1d2833"/>' +
      '<circle cx="12" cy="' + (y + 16) + '" r="5" fill="#111"/><circle cx="42" cy="' + (y + 16) + '" r="5" fill="#111"/><circle cx="' + (flip ? 2 : 52) + '" cy="' + (y + 8) + '" r="2.5" fill="' + (flip ? "#ff4d4d" : "#fff6c2") + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bn4)"/>' +
      '<g fill="#2a3448"><rect x="40" y="40" width="22" height="50"/><rect x="70" y="56" width="30" height="34"/><rect x="300" y="30" width="18" height="60"/><rect x="326" y="50" width="34" height="40"/></g>' +
      '<rect x="0" y="86" width="400" height="20" fill="#e9eef2"/>' +
      [20, 84, 148, 212, 276, 340].map((x, i) => '<rect x="' + (x + 10) + '" y="58" width="6" height="32" fill="#4a3a2e"/><circle cx="' + (x + 13) + '" cy="54" r="' + (18 + i % 2 * 4) + '" fill="#e8eef3"/><circle cx="' + (x + 3) + '" cy="62" r="11" fill="#d7e0e7"/><circle cx="' + (x + 24) + '" cy="62" r="11" fill="#d7e0e7"/>').join("") +
      '<path d="M0 106h400v14H0z" fill="#8a8f96"/><path d="M0 120l30 26h340l30 -26z" fill="#6e737b"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (20 + i * 40) + ' 120l' + (i < 5 ? 8 : -8) + ' 24" stroke="#5c6168" stroke-width="2"/>').join("") +
      '<rect x="0" y="146" width="400" height="114" fill="#3a3d42"/><rect x="0" y="198" width="400" height="6" fill="#c9cfd6"/>' +
      '<path d="M0 172h400M0 230h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="20 16"/>' +
      car("bn-cl", 160, RED, 0) + car("bn-cl bn-cl2", 160, "#3a5a8a", 0) + car("bn-cr", 214, "#d8d8d8", 1) + car("bn-cr bn-cr2", 214, GOLD, 1) +
      '<rect x="160" y="124" width="80" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="138" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">NY 33 WEST</text>' +
      snow(30),
      sky("bn4", "#273352", "#9fb1c8"));
  }

  /* 5. E Ferry St and Montana Ave on the East Side at dusk: green signs, BENNY tagged big on the brick, Seneca One Tower standing over downtown behind, snow */
  function bncorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bn5)"/>' +
      /* Seneca One Tower: the tall slab with dark bands, beacon on top */
      '<rect x="168" y="14" width="40" height="122" fill="#4a5262"/>' + Array.from({ length: 14 }, (_, i) => '<rect x="170" y="' + (20 + i * 8) + '" width="36" height="3" fill="#2a3040"/>').join("") +
      '<circle class="bn-glow" cx="188" cy="12" r="3" fill="#ff5252"/>' +
      '<g fill="#2a3040"><rect x="120" y="76" width="40" height="60"/><rect x="214" y="64" width="30" height="72"/><rect x="250" y="88" width="40" height="48"/><rect x="0" y="96" width="90" height="40"/></g>' +
      '<rect x="0" y="132" width="400" height="92" fill="#6a3a2c"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#5a2f23" stroke-width="1"/>').join("") +
      tag("BENNY", 22, 196, 60, GOLD, -6) + tag("BSF", 236, 170, 32, RED, -4) + tag("TANA", 28, 216, 18, CREAM, -3) + tag("BUTCHER COMIN'", 160, 214, 17, GOLD, -3) +
      '<g class="bn-sp"><circle cx="196" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="bn-sp bn-sp2"><circle cx="202" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#eef2f5"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(296, 98, 86, "E Ferry St") + sign(286, 124, 106, "Montana Ave") + snow(24),
      sky("bn5", "#141a36", "#b86a4a"));
  }

  window.SCENES = { bnstation: bnstation, bndeli: bndeli, bnstage: bnstage, bnexpress: bnexpress, bncorner: bncorner };
})();
