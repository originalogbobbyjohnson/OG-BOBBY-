/* anthonyhamilton scenes (Regions tab: The Carolinas; West Boulevard, Charlotte NC). CSS classes prefixed ah- (the page's own anim-train is kept on the bus).
   1 CATS route 10 West Blvd: the bus pulling up to the West Blvd / Hemphill St stop, a bus shelter, small brick houses and oaks, dusk.
   2 New Shiloh Baptist Church, his boyhood church where he first sang in the choir: red brick, white steeple and portico, stained glass glowing, notes rising.
   3 The little barbershop on West Boulevard where he had a chair and sang while cutting hair: spinning pole, two chairs and mirrors in the window.
   4 Ovens Auditorium, the hometown stage: the long glass front lit up at night, marquee bulbs chasing, spotlights sweeping.
   5 West Blvd and Hemphill St (he grew up on Hemphill near West Boulevard): green signs, HAMILTON tagged on the brick, the Charlotte airport control tower at the end of West Blvd behind, a jet climbing out. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ahglow{0%,100%{opacity:.55}50%{opacity:1}}.ah-glow{animation:ahglow 2.4s ease-in-out infinite}.ah-g2{animation-delay:-1.2s}' +
    '@keyframes ahnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(20px,-70px);opacity:0}}.ah-nt{animation:ahnote 3.4s ease-out infinite}.ah-nt2{animation-delay:-1.1s}.ah-nt3{animation-delay:-2.3s}' +
    '@keyframes ahpole{from{transform:translateY(0)}to{transform:translateY(-16px)}}.ah-pole{animation:ahpole .9s linear infinite}' +
    '@keyframes ahbulb{0%,100%{opacity:1}50%{opacity:.25}}.ah-bulb{animation:ahbulb .8s steps(1) infinite}.ah-b2{animation-delay:-.4s}' +
    '@keyframes ahbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.ah-beam{transform-box:fill-box;transform-origin:50% 100%;animation:ahbeam 4s ease-in-out infinite}.ah-beam2{animation-delay:-2s}' +
    '@keyframes ahjet{0%{transform:translate(-80px,40px)}100%{transform:translate(480px,-60px)}}.ah-jet{animation:ahjet 9s linear infinite}' +
    '@keyframes ahbeacon{0%,100%{opacity:1}50%{opacity:.2}}.ah-bcn{animation:ahbeacon 1.2s ease-in-out infinite}' +
    '@keyframes ahleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.ah-tree{transform-box:fill-box;transform-origin:50% 100%;animation:ahleaf 3.6s ease-in-out infinite}' +
    '@keyframes ahspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ah-sp{animation:ahspray 1.4s ease-out infinite}.ah-sp2{animation-delay:.45s}' +
    '@keyframes ahtw{0%,100%{opacity:.3}50%{opacity:1}}.ah-tw{animation:ahtw 2s ease-in-out infinite}.ah-tw2{animation-delay:-1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="ah-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const oak = (x, base, r, cls) => '<g class="ah-tree ' + (cls || "") + '"><rect x="' + (x - 4) + '" y="' + (base - r * 1.2) + '" width="8" height="' + (r * 1.2) + '" fill="#4a3426"/><circle cx="' + x + '" cy="' + (base - r * 1.5) + '" r="' + r + '" fill="#2f5a34"/><circle cx="' + (x - r * .6) + '" cy="' + (base - r * 1.2) + '" r="' + (r * .7) + '" fill="#356b3b"/><circle cx="' + (x + r * .6) + '" cy="' + (base - r * 1.25) + '" r="' + (r * .7) + '" fill="#2a5230"/></g>';
  const GOLD = "#e8b04a", TEAL = "#4fb3a9", RUST = "#c8553d", CREAM = "#f6ecd6";

  /* 1. CATS route 10, West Blvd at Hemphill St */
  function ahstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 40) + '" y="112" width="32" height="26" rx="2" fill="#1e2a33"/><rect x="' + (69 + i * 40) + '" y="114" width="6" height="22" fill="#fff" opacity=".25"/>').join("");
    const bus = '<g class="anim-train"><rect x="44" y="98" width="300" height="86" rx="10" fill="#eef1f4" stroke="#8a929a" stroke-width="2"/>' + win +
      '<rect x="44" y="148" width="300" height="9" fill="#0b5aa8"/><rect x="44" y="157" width="300" height="4" fill="#8cc63f"/>' +
      '<rect x="48" y="112" width="14" height="52" fill="#26323c"/><rect x="314" y="102" width="26" height="40" rx="3" fill="#26323c"/>' +
      '<rect x="252" y="101" width="58" height="11" rx="2" fill="#111"/><text x="281" y="109.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">10 WEST BLVD</text>' +
      '<circle cx="104" cy="184" r="13" fill="#222"/><circle cx="104" cy="184" r="5" fill="#888"/><circle cx="294" cy="184" r="13" fill="#222"/><circle cx="294" cy="184" r="5" fill="#888"/><circle cx="339" cy="168" r="3.5" fill="#fff6c2"/></g>';
    const house = (x, c) => '<rect x="' + x + '" y="66" width="46" height="30" fill="' + c + '"/><path d="M' + (x - 4) + ' 68l27 -18 27 18z" fill="#4a3a36"/><rect x="' + (x + 8) + '" y="74" width="10" height="9" fill="#f6dfa3" class="ah-glow"/><rect x="' + (x + 28) + '" y="78" width="9" height="18" fill="#3a2a22"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ahs1)"/>' +
      '<circle cx="320" cy="40" r="16" fill="#ffd58a" opacity=".85"/>' +
      oak(26, 96, 22) + house(52, "#c9b79a") + house(118, "#9fb4c7") + oak(196, 96, 20, "ah-g2") + house(224, "#d8c2a4") + oak(300, 96, 24) + house(330, "#b7a58f") +
      '<rect x="0" y="94" width="400" height="6" fill="#c7c1b5"/>' +
      '<g><rect x="356" y="74" width="40" height="4" fill="#5b6670"/><rect x="358" y="78" width="3" height="40" fill="#5b6670"/><rect x="392" y="78" width="3" height="40" fill="#5b6670"/><rect x="362" y="80" width="28" height="34" fill="#9ec7e0" opacity=".35"/></g>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#55565b"/><path d="M0 230h400" stroke="#e9d65a" stroke-width="3" stroke-dasharray="20 14"/>' +
      '<rect x="0" y="188" width="400" height="8" fill="#c7c1b5"/>' +
      '<rect x="70" y="204" width="260" height="36" rx="3" fill="#111"/><text x="86" y="228" ' + font + ' font-size="15" fill="#fff">West Blvd / Hemphill St</text>' +
      '<rect x="292" y="212" width="28" height="20" rx="4" fill="#0b5aa8" stroke="#fff" stroke-width="1"/><text x="306" y="227" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">10</text>',
      sky("ahs1", "#3d4f86", "#f2b179"));
  }

  /* 2. New Shiloh Baptist Church */
  function ahchurch() {
    const brick = "#9c4a34", white = "#f4f0e6";
    const arch = (x, y, cls) => '<path d="M' + x + ' ' + (y + 36) + 'v-24q11 -16 22 0v24z" fill="url(#ahsg)" class="ah-glow ' + (cls || "") + '" stroke="' + white + '" stroke-width="2"/><path d="M' + (x + 11) + ' ' + (y - 2) + 'v38M' + x + ' ' + (y + 18) + 'h22" stroke="' + white + '" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ahs2)"/>' +
      '<rect x="60" y="110" width="280" height="100" fill="' + brick + '"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M60 ' + (116 + i * 8) + 'h280" stroke="#86402c" stroke-width=".8"/>').join("") +
      '<path d="M50 112l150 -40 150 40z" fill="#4a3530"/>' +
      arch(76, 130) + arch(110, 130, "ah-g2") + arch(268, 130, "ah-g2") + arch(302, 130) +
      '<rect x="168" y="70" width="64" height="140" fill="' + brick + '"/><rect x="164" y="66" width="72" height="8" fill="' + white + '"/>' +
      '<rect x="178" y="38" width="44" height="30" fill="' + white + '"/><path d="M188 66v-16q12 -12 24 0v16z" fill="#2c3440"/>' +
      '<path d="M174 40L200 14 226 40z" fill="' + white + '" stroke="#cfc8b8" stroke-width="1"/><path d="M198.5 2h3v13h-3zM194 6h12v3h-12z" fill="' + GOLD + '"/>' +
      '<circle cx="200" cy="96" r="14" fill="url(#ahsg)" class="ah-glow" stroke="' + white + '" stroke-width="3"/>' +
      '<rect x="150" y="150" width="100" height="6" fill="' + white + '"/>' + [156, 178, 200, 222, 244].map(x => '<rect x="' + (x - 4) + '" y="156" width="8" height="54" fill="' + white + '"/>').join("") +
      '<path d="M180 210v-34q20 -18 40 0v34z" fill="#5a3a26"/><path d="M200 176v34" stroke="#3a2416" stroke-width="2"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#5c8a3e"/><path d="M180 210l-20 50h80l-20 -50z" fill="#cfc6b4"/>' +
      '<rect x="296" y="214" width="92" height="34" rx="2" fill="' + white + '" stroke="#333" stroke-width="1.5"/><text x="342" y="228" text-anchor="middle" ' + font + ' font-size="8.5" fill="#2a2a2a">NEW SHILOH</text><text x="342" y="240" text-anchor="middle" ' + font + ' font-size="7.5" fill="#2a2a2a">BAPTIST CHURCH</text>' +
      '<rect x="306" y="248" width="4" height="12" fill="#333"/><rect x="374" y="248" width="4" height="12" fill="#333"/>' +
      note(40, 120, GOLD) + note(356, 110, CREAM, "ah-nt2") + note(130, 100, TEAL, "ah-nt3") + note(270, 96, GOLD, "ah-nt2"),
      sky("ahs2", "#7fb3e0", "#fbe7c6") + '<linearGradient id="ahsg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e94b3c"/><stop offset=".35" stop-color="#f2c14e"/><stop offset=".7" stop-color="#3a7bd5"/><stop offset="1" stop-color="#6ab04c"/></linearGradient>');
  }

  /* 3. The barbershop on West Boulevard */
  function ahbarber() {
    const stripes = Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (i * 16) + 'l14 -8v6l-14 8z" fill="' + (i % 2 ? "#1f4fa3" : "#d8312a") + '"/>').join("");
    const chair = (x) => '<g><rect x="' + (x - 14) + '" y="146" width="28" height="18" rx="4" fill="#7a1f24"/><rect x="' + (x - 14) + '" y="124" width="28" height="24" rx="5" fill="#8b2329"/><rect x="' + (x - 3) + '" y="164" width="6" height="14" fill="#c9ced3"/><ellipse cx="' + x + '" cy="180" rx="14" ry="3" fill="#c9ced3"/><rect x="' + (x - 18) + '" y="142" width="36" height="5" rx="2" fill="#c9ced3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ahs3)"/>' +
      '<rect x="20" y="40" width="360" height="160" fill="#d9cdb4"/><rect x="20" y="40" width="360" height="30" fill="#2f4858"/>' +
      '<text x="200" y="62" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="20" fill="' + GOLD + '">BARBERSHOP</text>' +
      '<rect x="44" y="84" width="230" height="110" fill="#29363e" stroke="#6b4a2e" stroke-width="5"/>' +
      '<rect x="56" y="92" width="206" height="34" fill="#a9c6d6" opacity=".4"/><path d="M60 96l30 26M150 96l30 26" stroke="#fff" stroke-width="2" opacity=".35"/>' +
      chair(96) + chair(160) + chair(224) +
      '<rect x="44" y="180" width="230" height="14" fill="#e6e1d6"/>' + Array.from({ length: 11 }, (_, i) => '<rect x="' + (44 + i * 20) + '" y="180" width="10" height="7" fill="#222"/><rect x="' + (54 + i * 20) + '" y="187" width="10" height="7" fill="#222"/>').join("") +
      '<text x="159" y="114" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="12" fill="#fff" opacity=".85">walk-ins welcome</text>' +
      '<rect x="292" y="84" width="60" height="110" fill="#5a3a26" stroke="#6b4a2e" stroke-width="4"/><circle cx="342" cy="142" r="3" fill="' + GOLD + '"/><rect x="300" y="92" width="44" height="40" fill="#a9c6d6" opacity=".45"/>' +
      '<rect x="356" y="84" width="20" height="8" rx="2" fill="#c9ced3"/><rect x="356" y="168" width="20" height="8" rx="2" fill="#c9ced3"/>' +
      '<clipPath id="ahpc"><rect x="358" y="92" width="16" height="76" rx="6"/></clipPath><rect x="358" y="92" width="16" height="76" rx="6" fill="#fff"/>' +
      '<g clip-path="url(#ahpc)"><g transform="translate(359 92)"><g class="ah-pole">' + stripes + '</g></g></g>' +
      '<rect x="358" y="92" width="16" height="76" rx="6" fill="none" stroke="#9aa3ab" stroke-width="1.5"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#6b6b6e"/><rect x="0" y="200" width="400" height="6" fill="#bdb7aa"/>' +
      '<text x="200" y="240" text-anchor="middle" ' + font + ' font-size="11" fill="#e8e3d6" letter-spacing="3">WEST BOULEVARD</text>' +
      note(120, 150, GOLD) + note(200, 140, CREAM, "ah-nt2") + note(250, 150, TEAL, "ah-nt3"),
      sky("ahs3", "#8fc1e3", "#f7e8c8"));
  }

  /* 4. Ovens Auditorium at night */
  function ahovens() {
    const bulbs = Array.from({ length: 22 }, (_, i) => '<circle class="ah-bulb' + (i % 2 ? " ah-b2" : "") + '" cx="' + (96 + i * 10) + '" cy="152" r="2.4" fill="#ffe7a0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ahs4)"/>' +
      Array.from({ length: 22 }, (_, i) => '<circle class="ah-tw' + (i % 2 ? " ah-tw2" : "") + '" cx="' + ((i * 61) % 400) + '" cy="' + (8 + (i * 23) % 50) + '" r="1.3" fill="#fff"/>').join("") +
      '<path class="ah-beam" d="M86 70l-26 -70h52z" fill="#fff4c8" opacity=".14"/><path class="ah-beam ah-beam2" d="M314 70l-26 -70h52z" fill="#fff4c8" opacity=".14"/>' +
      '<rect x="20" y="70" width="360" height="140" fill="#cdbfa6"/><rect x="20" y="70" width="360" height="12" fill="#a8977d"/>' +
      '<rect x="70" y="88" width="260" height="122" fill="#1b2433"/>' +
      Array.from({ length: 13 }, (_, i) => '<rect x="' + (70 + i * 20) + '" y="88" width="2" height="122" fill="#a8977d"/>').join("") +
      '<g class="ah-glow"><rect x="72" y="96" width="256" height="50" fill="#f7c873" opacity=".55"/></g><rect x="72" y="160" width="256" height="50" fill="#f7c873" opacity=".35"/>' +
      '<rect x="56" y="140" width="288" height="26" fill="#2a1e14" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<rect x="120" y="120" width="160" height="22" fill="#fbf3e4" stroke="#2a1e14" stroke-width="2"/><text x="200" y="136" text-anchor="middle" ' + font + ' font-size="12" fill="#2a1e14">OVENS AUDITORIUM</text>' +
      '<text x="200" y="182" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">TONIGHT  HOMETOWN SHOW</text>' +
      '<rect x="0" y="210" width="400" height="50" fill="#3a3a40"/><path d="M0 236h400" stroke="#e9d65a" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<rect x="30" y="186" width="6" height="24" fill="#555"/><circle class="ah-glow" cx="33" cy="184" r="6" fill="#ffe9a8"/><rect x="364" y="186" width="6" height="24" fill="#555"/><circle class="ah-glow ah-g2" cx="367" cy="184" r="6" fill="#ffe9a8"/>',
      sky("ahs4", "#0b1030", "#3a2f5a"));
  }

  /* 5. West Blvd and Hemphill St */
  function ahcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ahs5)"/>' +
      '<g class="ah-jet"><path d="M0 0l40 -6 10 -2 6 4 -8 4 -44 6z" fill="#e8ecf2"/><path d="M18 -4l10 -12 6 0 -6 14z" fill="#cfd6de"/><path d="M42 -6l6 -10 4 0 -2 10z" fill="#cfd6de"/></g>' +
      '<rect x="296" y="40" width="14" height="90" fill="#cfd3d8"/><path d="M286 40h34l-6 -18h-22z" fill="#2c3a4a"/><rect x="288" y="22" width="30" height="4" fill="#9aa3ab"/><rect x="290" y="28" width="26" height="10" fill="#7fb6d9" opacity=".7"/>' +
      '<rect x="302" y="10" width="2" height="12" fill="#666"/><circle class="ah-bcn" cx="303" cy="9" r="3.5" fill="#ff4a3a"/>' +
      '<g fill="#5a6372"><rect x="200" y="96" width="90" height="34"/><rect x="316" y="102" width="80" height="28"/></g><path d="M200 96h196" stroke="#8a93a2" stroke-width="2"/>' +
      '<rect x="0" y="126" width="400" height="98" fill="#8a4a33"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#743e2a" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#743e2a" stroke-width="1"/>').join("")).join("") +
      tag("ANTHONY", 22, 160, 26, TEAL, -5) + tag("HAMILTON", 16, 200, 46, GOLD, -5) + tag("SOUL LIFE", 150, 218, 16, CREAM, -3) + tag("PO' FOLKS", 22, 218, 15, "#ff8a73", -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="340" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(254, 98, 130, "West Blvd") + sign(262, 124, 112, "Hemphill St") +
      '<g class="ah-sp"><circle cx="232" cy="176" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="ah-sp ah-sp2"><circle cx="238" cy="170" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("ahs5", "#4a6fa5", "#f5c08a"));
  }

  window.SCENES = { ahstation: ahstation, ahchurch: ahchurch, ahbarber: ahbarber, ahovens: ahovens, ahcorner: ahcorner };
})();
