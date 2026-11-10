/* kaceymusgraves scenes (Regions: Houston + Texas / Genres: country; Golden, Wood County TX). CSS classes prefixed kms- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kmsglow{0%,100%{opacity:.4}50%{opacity:1}}.kms-glow{animation:kmsglow 2.2s ease-in-out infinite}.kms-g2{animation-delay:-1.1s}' +
    '@keyframes kmschase{0%,100%{opacity:1}50%{opacity:.25}}.kms-ch{animation:kmschase .8s steps(1) infinite}.kms-ch2{animation-delay:-.4s}' +
    '@keyframes kmsfly{0%{transform:translate(0,0)}25%{transform:translate(20px,-14px)}50%{transform:translate(40px,0)}75%{transform:translate(20px,10px)}100%{transform:translate(0,0)}}.kms-fly{animation:kmsfly 6s ease-in-out infinite}.kms-fly2{animation-delay:-3s}' +
    '@keyframes kmsflap{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.3)}}.kms-wing{transform-box:fill-box;transform-origin:50% 50%;animation:kmsflap .5s ease-in-out infinite}' +
    '@keyframes kmssway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.kms-sw{transform-box:fill-box;transform-origin:50% 100%;animation:kmssway 3.2s ease-in-out infinite}' +
    '@keyframes kmscloud{0%{transform:translateX(0)}100%{transform:translateX(50px)}}.kms-cl{animation:kmscloud 14s ease-in-out infinite alternate}' +
    '@keyframes kmsflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.kms-flag{transform-box:fill-box;transform-origin:0% 50%;animation:kmsflag 1.8s ease-in-out infinite}' +
    '@keyframes kmsspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kms-sp{animation:kmsspray 1.4s ease-out infinite}.kms-sp2{animation-delay:.45s}' +
    '@keyframes kmstwk{0%,100%{opacity:.2}50%{opacity:1}}.kms-tw{animation:kmstwk 1.8s ease-in-out infinite}.kms-tw2{animation-delay:-.9s}' +
    '@keyframes kmssun{0%,100%{transform:translateY(0)}50%{transform:translateY(4px)}}.kms-sun{animation:kmssun 6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* a 9 drawn by hand: round bowl with a straight stem (never a hooked 9) */
  const nine = (x, y, h, c) => { const r = h * 0.26; return '<circle cx="' + (x + r) + '" cy="' + (y - h + r + 1) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + (h * 0.15) + '"/><path d="M' + (x + 2 * r) + ' ' + (y - h + r + 1) + 'V' + y + '" stroke="' + c + '" stroke-width="' + (h * 0.15) + '"/>'; };
  const sign9 = (x, y, w, pre) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + 8) + '" y="' + (y + 16) + '" ' + font + ' font-size="12" fill="#fff">' + pre + '</text>';
  const tree = (x, base, r, c) => '<g class="kms-sw"><rect x="' + (x - 3) + '" y="' + (base - r) + '" width="6" height="' + r + '" fill="#4a3322"/><circle cx="' + x + '" cy="' + (base - r - r * 0.4) + '" r="' + r * 0.8 + '" fill="' + (c || "#2f5a2a") + '"/><circle cx="' + (x - r * 0.6) + '" cy="' + (base - r) + '" r="' + r * 0.55 + '" fill="' + (c || "#2f5a2a") + '"/><circle cx="' + (x + r * 0.6) + '" cy="' + (base - r) + '" r="' + r * 0.55 + '" fill="' + (c || "#2f5a2a") + '"/></g>';
  const pine = (x, base, h, c) => '<g class="kms-sw"><rect x="' + (x - 2) + '" y="' + (base - 8) + '" width="4" height="8" fill="#4a3322"/><path d="M' + x + ' ' + (base - h) + 'l' + (h * 0.3) + ' ' + (h * 0.92) + 'h-' + (h * 0.6) + 'z" fill="' + (c || "#2c5230") + '"/></g>';
  const bricks = (x, y, w, h, base, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 6; yy < y + h; yy += 6) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".7" opacity=".6"/>'; return s; };
  const star = (x, y, r, c, cls) => { let p = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; p += (i ? "L" : "M") + (x + rr * Math.cos(a)).toFixed(1) + " " + (y + rr * Math.sin(a)).toFixed(1); } return '<path d="' + p + 'z" fill="' + c + '" class="' + (cls || "") + '"/>'; };
  const fly = (x, y, c, cls) => '<g class="kms-fly ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ')"><g class="kms-wing"><path d="M0 0q-12 -12 -14 -2q0 6 14 2zM0 0q12 -12 14 -2q0 6 -14 2zM0 1q-9 9 -10 3q0 -4 10 -3zM0 1q9 9 10 3q0 -4 -10 -3z" fill="' + c + '" stroke="#3a2a10" stroke-width=".8"/></g><rect x="-1" y="-5" width="2" height="10" rx="1" fill="#2a1a0a"/></g></g>';
  const GOLD = "#f5c04a", PINK = "#f08fb8", TEAL = "#7fd1c7", CREAM = "#f6ecd6", BRICK = "#a8553a";

  /* 1. The Mineola depot on Front St: Amtrak's Texas Eagle sliding in, the black station sign, the brick depot-museum with its hip roof */
  function kmsstation() {
    let trees = "";
    for (let i = 0; i < 9; i++) trees += pine(12 + i * 48, 128, 34 + (i * 7) % 12, i % 2 ? "#2c5230" : "#3a6438");
    const car = (x) => '<rect x="' + x + '" y="150" width="128" height="44" rx="6" fill="#c8ccd2" stroke="#6a6e74" stroke-width="1.5"/><rect x="' + x + '" y="164" width="128" height="5" fill="#1d4f9c"/><rect x="' + x + '" y="170" width="128" height="3" fill="#c8322a"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + 8 + i * 24) + '" y="154" width="18" height="9" rx="2" fill="#2a3a4a"/>').join("") + '<circle cx="' + (x + 20) + '" cy="196" r="6" fill="#222"/><circle cx="' + (x + 108) + '" cy="196" r="6" fill="#222"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kms1)"/>' +
      '<g class="kms-cl"><ellipse cx="80" cy="30" rx="36" ry="9" fill="#fff" opacity=".6"/><ellipse cx="300" cy="22" rx="40" ry="9" fill="#fff" opacity=".5"/></g>' +
      '<path d="M0 130q100 -18 200 -6t200 -4v20h-400z" fill="#6e8f4e"/>' + trees +
      /* depot */
      '<path d="M210 92l20 -22h140l20 22z" fill="#5a3a2c"/>' + bricks(218, 92, 164, 52, BRICK, "#6e2a1c") +
      '<rect x="234" y="104" width="16" height="24" fill="#2a3a4a"/><rect x="264" y="104" width="16" height="24" fill="#2a3a4a"/><rect x="320" y="104" width="16" height="24" fill="#2a3a4a"/><rect x="350" y="104" width="16" height="24" fill="#2a3a4a"/><rect x="290" y="100" width="22" height="44" fill="#3a2016"/>' +
      /* black station sign */
      '<rect x="40" y="62" width="4" height="56" fill="#333"/><rect x="132" y="62" width="4" height="56" fill="#333"/><rect x="24" y="44" width="128" height="30" rx="2" fill="#111"/><path d="M24 50h128" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="88" y="68" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">MINEOLA</text>' +
      '<rect x="0" y="144" width="400" height="6" fill="#d8d0c0"/><rect x="0" y="198" width="400" height="62" fill="#5a544c"/><path d="M0 202h400M0 212h400" stroke="#9a9a9a" stroke-width="2"/>' +
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20 + 4) + '" y="200" width="6" height="14" fill="#4a3322"/>').join("") +
      '<g class="anim-train"><g transform="translate(150 0)"><path d="M0 150h64v44h-80q-6 0 -4 -8l8 -28q4 -8 12 -8z" fill="#c8ccd2" stroke="#6a6e74" stroke-width="1.5"/><path d="M-8 164h72v5h-74z" fill="#1d4f9c"/><path d="M-9 170h73v3h-74z" fill="#c8322a"/><rect x="0" y="154" width="22" height="10" rx="2" fill="#2a3a4a"/><circle cx="-10" cy="182" r="3.5" fill="#fff6c0" class="kms-glow"/><circle cx="10" cy="196" r="6" fill="#222"/><circle cx="52" cy="196" r="6" fill="#222"/>' + car(68) + car(200) + '</g></g>' +
      '<rect x="0" y="236" width="400" height="24" fill="#c8c0aa"/><path d="M0 236h400" stroke="' + GOLD + '" stroke-width="3"/>',
      sky("kms1", "#5aa8e0", "#cfe9f7"));
  }

  /* 2. The Golden Sweet Potato Festival, every October: white tents, the big banner, crates piled with sweet potatoes, bunting swinging */
  function kmsfest() {
    const tent = (x, c) => '<path d="M' + x + ' 140l30 -30l30 30z" fill="#fff" stroke="#c8c0b0"/><rect x="' + x + '" y="140" width="60" height="34" fill="#fff"/><path d="M' + x + ' 140h60" stroke="' + c + '" stroke-width="6" stroke-dasharray="10 10"/><rect x="' + (x + 6) + '" y="152" width="48" height="22" fill="#e8dcc6"/>';
    const potato = (x, y, r) => '<ellipse cx="' + x + '" cy="' + y + '" rx="' + (r * 1.5) + '" ry="' + r + '" fill="#b5532e" stroke="#6a2a14" stroke-width="1" transform="rotate(' + ((x * 7) % 40 - 20) + ' ' + x + ' ' + y + ')"/>';
    let pile = "";
    for (let row = 0; row < 3; row++) for (let i = 0; i < 6 - row; i++) pile += potato(150 + i * 18 + row * 9, 196 - row * 10, 6);
    let bunting = "";
    for (let i = 0; i < 16; i++) bunting += '<path d="M' + (i * 26) + ' 38l13 18l13 -18z" fill="' + [PINK, GOLD, TEAL, "#e8743b"][i % 4] + '" class="kms-flag"/>';
    let trees = "";
    for (let i = 0; i < 7; i++) trees += tree(20 + i * 62, 112, 16 + (i * 5) % 6, i % 2 ? "#3c6a30" : "#4b7a38");
    return svg(
      '<rect width="400" height="260" fill="url(#kms2)"/>' + trees +
      '<path d="M0 36q100 12 200 0t200 0" stroke="#555" stroke-width="1.5" fill="none"/>' + bunting +
      '<rect x="0" y="112" width="400" height="148" fill="#a4b86a"/>' +
      '<rect x="80" y="64" width="4" height="56" fill="#6b4a2e"/><rect x="316" y="64" width="4" height="56" fill="#6b4a2e"/><rect x="70" y="60" width="260" height="34" rx="4" fill="#e8743b" stroke="#fff" stroke-width="2"/>' +
      '<text x="200" y="76" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="1">GOLDEN</text><text x="200" y="89" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="1">SWEET POTATO FESTIVAL</text>' +
      tent(10, PINK) + tent(330, TEAL) +
      '<path d="M130 206h130l-8 24h-114z" fill="#8a5a32" stroke="#4a2a14" stroke-width="2"/><path d="M134 214h122M136 222h118" stroke="#4a2a14" stroke-width="1"/>' + pile +
      '<rect x="270" y="170" width="48" height="36" fill="#d8b878" stroke="#6b4a2e" stroke-width="2"/><text x="294" y="186" text-anchor="middle" ' + font + ' font-size="8" fill="#6b2a14">PIES</text><text x="294" y="198" text-anchor="middle" ' + font + ' font-size="8" fill="#6b2a14">TODAY</text>' +
      fly(80, 196, GOLD, "") + fly(340, 120, PINK, "kms-fly2"),
      sky("kms2", "#6fb6e6", "#f4e8c8"));
  }

  /* 3. The Select Theater in downtown Mineola, the oldest running movie house in Texas: the vertical sign and the marquee bulbs chasing */
  function kmsselect() {
    let bulbs = "";
    for (let i = 0; i < 16; i++) bulbs += '<circle cx="' + (112 + i * 12) + '" cy="120" r="2.6" fill="#fff4c0" class="kms-ch' + (i % 2 ? " kms-ch2" : "") + '"/><circle cx="' + (112 + i * 12) + '" cy="156" r="2.6" fill="#fff4c0" class="kms-ch' + (i % 2 ? "" : " kms-ch2") + '"/>';
    let vbulbs = "";
    for (let i = 0; i < 9; i++) vbulbs += '<circle cx="186" cy="' + (22 + i * 10) + '" r="2" fill="#fff4c0" class="kms-ch' + (i % 2 ? " kms-ch2" : "") + '"/><circle cx="214" cy="' + (22 + i * 10) + '" r="2" fill="#fff4c0" class="kms-ch' + (i % 2 ? "" : " kms-ch2") + '"/>';
    const letters = "SELECT".split("").map((ch, i) => '<text x="200" y="' + (34 + i * 14) + '" text-anchor="middle" ' + font + ' font-size="13" fill="' + PINK + '" class="kms-glow">' + ch + '</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kms3)"/>' +
      star(40, 26, 2, "#fff", "kms-tw") + star(330, 20, 2.2, "#fff", "kms-tw kms-tw2") + star(370, 60, 2, "#fff", "kms-tw") +
      bricks(0, 70, 92, 140, "#8a4a34", "#5a2a1c") + bricks(308, 60, 92, 150, "#9a6a40", "#6a3a20") +
      '<rect x="12" y="90" width="22" height="30" fill="#2a3a4a"/><rect x="52" y="90" width="22" height="30" fill="#2a3a4a" class="kms-glow"/><rect x="320" y="84" width="24" height="30" fill="#2a3a4a" class="kms-glow kms-g2"/><rect x="360" y="84" width="24" height="30" fill="#2a3a4a"/>' +
      bricks(96, 60, 208, 150, "#c8a878", "#8a6a48") + '<rect x="92" y="54" width="216" height="8" fill="#e4dcc6"/>' +
      '<rect x="180" y="12" width="40" height="96" rx="4" fill="#1a1a2a" stroke="' + GOLD + '" stroke-width="2"/>' + vbulbs + letters +
      '<path d="M100 116h200l-10 44h-180z" fill="#1a1a2a" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="134" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">TONIGHT</text><text x="200" y="149" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">GOLDEN HOUR</text>' +
      '<rect x="150" y="166" width="100" height="44" fill="#3a2016"/><rect x="156" y="170" width="40" height="40" fill="#5a3a2a"/><rect x="204" y="170" width="40" height="40" fill="#5a3a2a"/><rect x="118" y="168" width="24" height="34" fill="#2a2030" stroke="' + GOLD + '"/><rect x="258" y="168" width="24" height="34" fill="#2a2030" stroke="' + GOLD + '"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#4a4844"/><rect x="0" y="208" width="400" height="4" fill="#d8d0c0"/>',
      sky("kms3", "#141a44", "#5a3a6a"));
  }

  /* 4. Golden hour on the pasture outside Golden, where the album shoot went down: the sun sinking low, the horse by the fence, a round hay bale, butterflies */
  function kmsgolden() {
    let fence = "";
    for (let i = 0; i < 12; i++) fence += '<rect x="' + (i * 36 + 4) + '" y="164" width="5" height="30" fill="#5a3a22"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kms4)"/>' +
      '<g class="kms-sun"><circle cx="270" cy="128" r="34" fill="#ffd36b"/><circle cx="270" cy="128" r="48" fill="#ffd36b" opacity=".25"/></g>' +
      '<path d="M0 140q80 -10 160 0t160 -6t80 4v122h-400z" fill="#c89a4a"/><path d="M0 160q100 -12 200 0t200 -4v104h-400z" fill="#b07c34"/>' +
      tree(40, 150, 18, "#5a5a2a") + tree(360, 146, 14, "#5a5a2a") +
      fence + '<path d="M0 172h400M0 184h400" stroke="#5a3a22" stroke-width="3"/>' +
      /* round hay bale */
      '<ellipse cx="110" cy="214" rx="34" ry="28" fill="#d8a84a" stroke="#8a6020" stroke-width="2"/><ellipse cx="96" cy="214" rx="18" ry="24" fill="#e8bc5a" stroke="#8a6020" stroke-width="1.5"/><path d="M90 200q6 14 0 28M98 196q6 18 0 36" stroke="#a87a2a" stroke-width="1" fill="none"/>' +
      /* horse silhouette */
      '<g class="kms-sw"><path d="M250 222l4 -30q-20 -2 -24 -14q-4 -12 10 -16l50 -2q14 -18 26 -14l8 6l-6 6l-10 -2q-6 10 -10 22l4 44h-6l-6 -34h-26l-4 34h-6l-2 -34z" fill="#3a2414"/></g>' +
      fly(180, 120, GOLD, "") + fly(330, 90, PINK, "kms-fly2") + fly(60, 100, TEAL, "kms-fly2"),
      sky("kms4", "#e8846a", "#ffd9a0"));
  }

  /* 5. Her corner: the crossroads in the middle of Golden (FM 779 and FM 1799), a wall tagged KACEY, the old Reneau Building's brick front behind */
  function kmscorner() {
    let pines = "";
    for (let i = 0; i < 10; i++) pines += pine(10 + i * 42, 112, 36 + (i * 5) % 10, "#1f3a26");
    return svg(
      '<rect width="400" height="260" fill="url(#kms5)"/>' +
      star(40, 26, 2.2, "#fff", "kms-tw") + star(160, 16, 2, "#fff", "kms-tw kms-tw2") + star(260, 30, 2.4, "#fff", "kms-tw") +
      pines +
      /* the Reneau Building: two-story brick store front with a stepped parapet */
      '<path d="M90 50h150v8h-150z" fill="#7a3a24"/><path d="M140 50l10 -10h30l10 10z" fill="#7a3a24"/>' + bricks(90, 58, 150, 110, BRICK, "#6e2a1c") +
      '<rect x="104" y="70" width="18" height="26" fill="#2a3a4a" class="kms-glow"/><rect x="140" y="70" width="18" height="26" fill="#2a3a4a"/><rect x="176" y="70" width="18" height="26" fill="#2a3a4a"/><rect x="212" y="70" width="18" height="26" fill="#2a3a4a" class="kms-glow kms-g2"/>' +
      '<rect x="90" y="104" width="150" height="6" fill="#e4dcc6"/><rect x="104" y="116" width="38" height="44" fill="#2a3a4a"/><rect x="188" y="116" width="38" height="44" fill="#2a3a4a"/><rect x="152" y="116" width="26" height="52" fill="#3a2016"/>' +
      '<text x="165" y="56" text-anchor="middle" ' + font + ' font-size="7" fill="' + CREAM + '" letter-spacing="1.5">RENEAU</text>' +
      /* wall with the tags */
      '<rect x="0" y="168" width="400" height="56" fill="#c8b89a"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (176 + i * 9) + 'h400" stroke="#a8987a" stroke-width="1"/>').join("") +
      '<rect x="0" y="164" width="400" height="5" fill="#efe6d2"/>' +
      tag("KACEY", 16, 212, 38, PINK, -5) + tag("GOLDEN", 162, 206, 22, GOLD, -4) + tag("SPACEY", 262, 214, 16, TEAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="354" y="66" width="6" height="158" fill="#2f2f2f"/>' +
      sign9(310, 66, 78, "FM 77") + nine(353.5, 82, 8.8, "#fff") +
      sign9(306, 92, 84, "FM 17") + nine(349, 108, 8.8, "#fff") + nine(355.8, 108, 8.8, "#fff") +
      fly(300, 140, GOLD, "") +
      '<g class="kms-sp"><circle cx="128" cy="190" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="kms-sp kms-sp2"><circle cx="134" cy="184" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("kms5", "#141a44", "#e0906a"));
  }

  window.SCENES = { kmsstation: kmsstation, kmsfest: kmsfest, kmsselect: kmsselect, kmsgolden: kmsgolden, kmscorner: kmscorner };
})();
