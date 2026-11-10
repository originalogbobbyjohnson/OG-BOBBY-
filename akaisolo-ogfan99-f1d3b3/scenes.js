/* akaisolo scenes (NYC map, Brooklyn: Flatbush). CSS classes prefixed ak- (the page's own anim-train is kept).
   1 The B41 pulling up on Flatbush Av at Martense St, the Flatbush storefront row behind.
   2 Benjamin Banneker Academy on Clinton Av, Clinton Hill (his high school, where his first group B.D.B. formed): brick front, kids rapping on the steps.
   3 Spirit Roaming: Prospect Park's Long Meadow at dusk, a red kite (akai = red) drifting over the trees.
   4 Bushwick, where he lives now: a rooftop at night, the red moon over the Manhattan skyline, a Tase Grip-style red banner flapping.
   5 Bedford Av & Martense St: green street signs, AKAI SOLO tagged on the wall, the Brooklyn Tower lit up far off up Flatbush Av. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes akflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.ak-flk{animation:akflick 2.4s infinite}.ak-flk2{animation-delay:.8s}' +
    '@keyframes akglow{0%,100%{opacity:.45}50%{opacity:1}}.ak-glow{animation:akglow 2.2s ease-in-out infinite}.ak-g2{animation-delay:-1.1s}' +
    '@keyframes akkite{0%,100%{transform:translate(0,0) rotate(-6deg)}50%{transform:translate(18px,-10px) rotate(8deg)}}.ak-kite{transform-box:fill-box;transform-origin:50% 100%;animation:akkite 4s ease-in-out infinite}' +
    '@keyframes akbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.ak-bob{animation:akbob .8s ease-in-out infinite}.ak-bob2{animation-delay:-.4s}' +
    '@keyframes akflap{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.ak-flap{transform-box:fill-box;transform-origin:0 50%;animation:akflap 1.6s ease-in-out infinite}' +
    '@keyframes akspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ak-sp{animation:akspray 1.4s ease-out infinite}.ak-sp2{animation-delay:.45s}' +
    '@keyframes akcloud{0%{transform:translateX(-80px)}100%{transform:translateX(460px)}}.ak-cl{animation:akcloud 30s linear infinite}.ak-cl2{animation-delay:-15s}' +
    '@keyframes aknote{0%{transform:translateY(0);opacity:1}100%{transform:translateY(-30px);opacity:0}}.ak-nt{animation:aknote 1.8s ease-out infinite}.ak-nt2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "ak-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const RED = "#e23b3b", GOLD = "#f2c14e", BLUE = "#0039a6";

  /* 1. The B41 on Flatbush Av at Martense St */
  function akstation() {
    const bus = '<g class="anim-train"><rect x="30" y="118" width="250" height="82" rx="10" fill="#f2f2ef" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (72 + i * 40) + '" y="130" width="34" height="32" rx="3" fill="#22303c"/>').join("") +
      '<rect x="36" y="130" width="28" height="58" rx="2" fill="#22303c"/><rect x="30" y="166" width="250" height="7" fill="' + BLUE + '"/><rect x="30" y="175" width="250" height="3" fill="#f2c200"/>' +
      '<rect x="34" y="119" width="96" height="11" rx="2" fill="#111"/><text x="82" y="127.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">B41 FLATBUSH AV</text>' +
      '<circle cx="80" cy="200" r="12" fill="#222"/><circle cx="80" cy="200" r="5" fill="#9aa1a8"/><circle cx="232" cy="200" r="12" fill="#222"/><circle cx="232" cy="200" r="5" fill="#9aa1a8"/>' +
      '<circle cx="34" cy="186" r="3.5" fill="#fff6c2"/></g>';
    const shops = [["#c0502e", "#ffd98a"], ["#2f6b8a", "#fff1c2"], ["#8a4a7a", "#ffd98a"], ["#3a7a4a", "#fff1c2"], ["#b07a2a", "#ffd98a"]];
    return svg(
      '<rect width="400" height="260" fill="url(#ak1)"/>' +
      shops.map((c, i) => '<rect x="' + (i * 80) + '" y="30" width="80" height="110" fill="' + ["#7a4a3a", "#8a6a5a", "#6e4a3c", "#94705a", "#7c5444"][i] + '"/>' +
        '<rect x="' + (i * 80 + 10) + '" y="42" width="22" height="22" fill="#2a3442"/><rect x="' + (i * 80 + 46) + '" y="42" width="22" height="22" fill="' + (i % 2 ? "#ffd98a" : "#2a3442") + '"/>' +
        '<rect x="' + (i * 80 + 4) + '" y="84" width="72" height="16" fill="' + c[0] + '"/><rect x="' + (i * 80 + 8) + '" y="102" width="64" height="36" fill="' + c[1] + '" opacity=".85"/>' +
        '<path d="M' + (i * 80 + 4) + ' 100h72" stroke="#222" stroke-width="2"/>').join("") +
      '<rect x="0" y="140" width="400" height="18" fill="#bdb8ae"/><rect x="0" y="158" width="400" height="102" fill="#47474d"/><path d="M0 236h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="330" y="78" width="5" height="80" fill="#6b7178"/><rect x="312" y="56" width="42" height="36" rx="3" fill="' + BLUE + '" stroke="#fff" stroke-width="1.5"/><text x="333" y="72" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MTA BUS</text><text x="333" y="86" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">B41</text>' +
      '<rect x="102" y="6" width="196" height="22" rx="2" fill="#111"/><text x="200" y="21.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Flatbush Av / Martense St</text>',
      sky("ak1", "#f2a65a", "#f7dcb4"));
  }

  /* 2. Benjamin Banneker Academy, Clinton Av */
  function akschool() {
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="22" height="26" fill="#2a3442"/><path d="M' + (x + 11) + ' ' + y + 'v26M' + x + ' ' + (y + 13) + 'h22" stroke="#d9d2c2" stroke-width="1.5"/>';
    let wins = ""; for (let r = 0; r < 3; r++) for (let c = 0; c < 9; c++) wins += win(34 + c * 38, 46 + r * 38);
    return svg(
      '<rect width="400" height="260" fill="url(#ak2)"/>' +
      '<rect x="20" y="34" width="360" height="160" fill="#9a4a32"/>' + Array.from({ length: 16 }, (_, i) => '<path d="M20 ' + (40 + i * 10) + 'h360" stroke="#86402c" stroke-width="1"/>').join("") +
      '<rect x="20" y="28" width="360" height="8" fill="#d9d2c2"/>' + wins +
      '<rect x="150" y="150" width="100" height="44" fill="#3a2a22"/><rect x="160" y="156" width="36" height="38" fill="#22303c"/><rect x="204" y="156" width="36" height="38" fill="#22303c"/>' +
      '<rect x="118" y="132" width="164" height="16" fill="#e8e2d6"/><text x="200" y="144" text-anchor="middle" ' + font + ' font-size="9.5" fill="#3a2a22">BENJAMIN BANNEKER ACADEMY</text>' +
      '<rect x="130" y="194" width="140" height="8" fill="#b8b2a6"/><rect x="120" y="202" width="160" height="8" fill="#a8a296"/><rect x="0" y="210" width="400" height="50" fill="#8a8680"/>' +
      '<path d="M50 210v-60" stroke="#5a5a5a" stroke-width="3"/><path d="M50 152h26" stroke="#5a5a5a" stroke-width="2"/><rect class="ak-flap" x="50" y="152" width="26" height="16" fill="' + RED + '"/>' +
      /* three kids rapping on the steps, a speaker, notes floating */
      [150, 196, 242].map((x, i) => '<g class="ak-bob' + (i === 1 ? " ak-bob2" : "") + '"><circle cx="' + x + '" cy="176" r="7" fill="#5a3a2a"/><rect x="' + (x - 8) + '" y="183" width="16" height="22" rx="4" fill="' + [RED, "#2f6b8a", GOLD][i] + '"/></g>').join("") +
      '<rect x="296" y="186" width="26" height="24" rx="3" fill="#15171c"/><circle cx="309" cy="198" r="7" fill="#2a2f3a"/>' +
      '<text class="ak-nt" x="318" y="180" font-size="14" fill="#fff">&#9835;</text><text class="ak-nt ak-nt2" x="300" y="176" font-size="12" fill="#fff">&#9834;</text>' +
      '<rect x="128" y="226" width="144" height="20" rx="3" fill="#000" opacity=".55"/><text x="200" y="240" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">CLINTON AV, CLINTON HILL</text>',
      sky("ak2", "#8ec2ea", "#e6eef2"));
  }

  /* 3. Spirit Roaming: Long Meadow, Prospect Park, dusk, red kite */
  function akmeadow() {
    const trees = Array.from({ length: 12 }, (_, i) => '<ellipse cx="' + (i * 36 + 10) + '" cy="' + (128 - (i % 3) * 6) + '" rx="26" ry="' + (22 + (i % 2) * 6) + '" fill="' + ["#2f5a34", "#3a6a3c", "#274d2c"][i % 3] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ak3)"/>' +
      '<g class="ak-cl"><ellipse cx="40" cy="40" rx="40" ry="9" fill="#ffd0b8" opacity=".6"/></g><g class="ak-cl ak-cl2"><ellipse cx="60" cy="70" rx="50" ry="10" fill="#ffc2a8" opacity=".5"/></g>' +
      '<circle cx="320" cy="100" r="22" fill="#ffd27a" opacity=".85"/>' +
      trees + '<path d="M0 140q200 -24 400 0v120h-400z" fill="#5f9a4a"/><path d="M0 170q200 -16 400 6v84h-400z" fill="#6faa52"/>' +
      '<path d="M120 260q30 -60 120 -100" stroke="#d9c79a" stroke-width="6" fill="none" opacity=".7"/>' +
      /* the red kite and its string */
      '<path d="M210 232Q240 150 262 82" stroke="#fff" stroke-width="1" fill="none" opacity=".8"/>' +
      '<g class="ak-kite"><path d="M262 56l18 26l-18 26l-18 -26z" fill="' + RED + '" stroke="#7a1a1a" stroke-width="1.5"/><path d="M262 56v52M244 82h36" stroke="#7a1a1a" stroke-width="1"/>' +
      '<path d="M262 108q6 10 -2 18q-8 8 2 18" stroke="' + GOLD + '" stroke-width="2" fill="none"/></g>' +
      '<g class="ak-bob"><circle cx="206" cy="214" r="6" fill="#3a2a22"/><rect x="200" y="220" width="12" height="22" rx="4" fill="#1a1a1a"/></g>' +
      '<rect x="118" y="10" width="164" height="22" rx="3" fill="#000" opacity=".5"/><text x="200" y="25" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="2">SPIRIT ROAMING</text>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" opacity=".85">LONG MEADOW, PROSPECT PARK</text>',
      sky("ak3", "#6a4a8a", "#f2a07a"));
  }

  /* 4. Bushwick rooftop at night, red moon over the skyline */
  function akroof() {
    const sky2 = [[20, 70], [44, 96], [70, 60], [92, 84], [118, 44], [142, 74], [168, 90], [196, 52], [222, 80], [250, 66], [276, 92], [300, 58], [330, 86], [360, 72], [386, 90]];
    return svg(
      '<rect width="400" height="260" fill="url(#ak4)"/>' + stars(26) +
      '<circle class="ak-glow" cx="300" cy="62" r="30" fill="' + RED + '" opacity=".9"/><circle cx="300" cy="62" r="40" fill="' + RED + '" opacity=".15"/>' +
      sky2.map(([x, h], i) => '<rect x="' + (x - 10) + '" y="' + (150 - h) + '" width="20" height="' + h + '" fill="#1c2030"/>' +
        (i % 2 ? '<rect class="ak-flk' + (i % 4 ? "" : " ak-flk2") + '" x="' + (x - 4) + '" y="' + (158 - h) + '" width="3" height="3" fill="#ffd98a"/>' : "")).join("") +
      '<rect x="0" y="150" width="400" height="110" fill="#2a2a30"/><rect x="0" y="150" width="400" height="6" fill="#55555e"/>' +
      '<rect x="30" y="100" width="40" height="50" fill="#3a3a44"/><path d="M30 100l20 -16l20 16z" fill="#4a4a54"/>' + /* water tower */
      '<path d="M34 150v-14M66 150v-14" stroke="#3a3a44" stroke-width="3"/>' +
      '<rect x="270" y="168" width="110" height="60" fill="#8a2a2a"/>' + tag("BUSHWICK", 278, 206, 18, GOLD, -4) +
      '<path d="M110 150v-60" stroke="#888" stroke-width="3"/><g class="ak-flap"><rect x="110" y="90" width="64" height="30" fill="' + RED + '"/><text x="142" y="110" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">GRIP</text></g>' +
      '<g class="ak-bob"><circle cx="200" cy="186" r="8" fill="#3a2a22"/><rect x="190" y="194" width="20" height="30" rx="5" fill="' + RED + '"/></g>' +
      '<rect x="168" y="226" width="64" height="14" rx="3" fill="#15171c"/><circle cx="184" cy="233" r="4" fill="#444"/><circle cx="216" cy="233" r="4" fill="#444"/>' +
      '<text class="ak-nt" x="226" y="200" font-size="14" fill="#fff">&#9835;</text>',
      sky("ak4", "#0a0a1a", "#3a1a2a"));
  }

  /* 5. Bedford Av & Martense St, AKAI SOLO tagged, the Brooklyn Tower far off */
  function akcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ak5)"/>' +
      /* far off: the Brooklyn Tower, black-and-bronze faceted spire, lit */
      '<path d="M222 120V40l8 -26l8 26v80z" fill="#2a2420"/><path d="M230 14l8 26v80h-8z" fill="#5a4630"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M224 ' + (48 + i * 9) + 'h12" stroke="#c9a24a" stroke-width="1" opacity=".7"/>').join("") +
      '<circle class="ak-glow" cx="230" cy="16" r="2.5" fill="#ff4040"/>' +
      '<rect x="180" y="100" width="36" height="26" fill="#3a3440"/><rect x="330" y="92" width="50" height="34" fill="#3a3440"/>' +
      /* the wall */
      '<rect x="0" y="120" width="290" height="110" fill="#8a4a3a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (126 + i * 10) + 'h290" stroke="#7a3e30" stroke-width="1"/>').join("") +
      tag("AKAI", 22, 182, 46, RED, -6) + tag("SOLO", 142, 206, 40, GOLD, -4) + tag("GRIP", 200, 150, 20, "#5fb3d9", -8) +
      '<circle class="ak-sp" cx="252" cy="160" r="3" fill="' + RED + '"/><circle class="ak-sp ak-sp2" cx="258" cy="168" r="2.5" fill="' + RED + '"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#5a5a60"/><path d="M0 232h400" stroke="#bdb8ae" stroke-width="4"/>' +
      /* the pole and the green signs */
      '<rect x="326" y="60" width="6" height="172" fill="#3e4a3e"/>' + sign(272, 70, 112, "Bedford Av") + sign(282, 96, 104, "Martense St") +
      '<rect x="320" y="150" width="18" height="26" rx="3" fill="#222"/><circle class="ak-glow" cx="329" cy="157" r="4" fill="#ff6a3a"/><circle cx="329" cy="168" r="4" fill="#444"/>',
      sky("ak5", "#1a1030", "#c2603a"));
  }

  window.SCENES = { akstation, akschool, akmeadow, akroof, akcorner };
})();
