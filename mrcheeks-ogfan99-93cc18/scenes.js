/* South Jamaica opening scenes for the Mr. Cheeks game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-140px)}to{transform:translateX(460px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes jet{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.7)}}' +
    '.jet{transform-box:fill-box;transform-origin:50% 100%;animation:jet 1.4s ease-in-out infinite}.jet2{animation-delay:.45s}' +
    '@keyframes paddle{0%{transform:translateX(0)}50%{transform:translateX(-60px)}100%{transform:translateX(0)}}' +
    '.duck{animation:paddle 12s ease-in-out infinite}.duck2{animation-delay:-4s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}' +
    '.bob{animation:bob 1.6s ease-in-out infinite}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-46px)}}' +
    '.ball{animation:bounce .9s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes wave{0%,100%{transform:skewY(0) scaleX(1)}50%{transform:skewY(5deg) scaleX(.92)}}' +
    '.wave{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.4s ease-in-out infinite}' +
    '@keyframes walk{from{transform:translateX(-30px)}to{transform:translateX(430px)}}' +
    '.walk{animation:walk 16s linear infinite}.walk2{animation-delay:-7s}' +
    '@keyframes drive{from{transform:translateX(-120px)}to{transform:translateX(460px)}}' +
    '.car{animation:drive 5.5s linear infinite}.car2{animation-delay:-2.6s}' +
    '@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}' +
    '.pulse{transform-box:fill-box;transform-origin:50% 50%;animation:pulse .5s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  /* graffiti tag: outlined, slightly tilted */
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const ORANGE = "#ff8a5b", GOLD = "#ffd34d", TEAL = "#7fd1c7", EBLUE = "#0039a6";

  /* 1. The E pulling into Jamaica–Van Wyck: a deep underground station under the Van Wyck, cream tile and a blue band */
  function train() {
    let tiles = "";
    for (let y = 24; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#d9cfb8" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 18v100" stroke="#d9cfb8" stroke-width=".6"/>';
    let cols = "";
    [22, 56, 344, 378].forEach(x => cols += '<rect x="' + (x - 6) + '" y="14" width="12" height="166" fill="#1f2c45"/><rect x="' + (x - 9) + '" y="14" width="18" height="8" fill="#1f2c45"/>');
    let windows = "";
    for (let x = 22; x < 260; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#dff1ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#0f131c"/>' +
      '<rect x="0" y="0" width="400" height="14" fill="#090c12"/>' +
      '<rect class="flk" x="60" y="6" width="90" height="4" rx="2" fill="#f2fbff"/><rect class="flk flk2" x="250" y="6" width="90" height="4" rx="2" fill="#f2fbff"/>' +
      '<rect x="0" y="14" width="400" height="106" fill="#efe6cf"/>' + tiles +
      '<rect x="0" y="18" width="400" height="7" fill="' + EBLUE + '"/><rect x="0" y="106" width="400" height="7" fill="' + EBLUE + '"/>' +
      /* black station sign with the E bullet */
      '<rect x="74" y="42" width="252" height="40" rx="4" fill="#111"/>' +
      '<rect x="74" y="42" width="252" height="4" fill="#fff"/>' +
      '<text x="88" y="71" ' + F + ' font-weight="700" font-size="18" fill="#fff">Jamaica–Van Wyck</text>' +
      bullet(302, 64, "E", EBLUE) +
      '<rect x="140" y="88" width="120" height="12" rx="2" fill="#111"/><text x="200" y="97" text-anchor="middle" ' + F + ' font-size="7.5" fill="#fff">EXIT · 89 AV · VAN WYCK</text>' +
      cols +
      /* the E slides in */
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c3c8cf" stroke="#6b7280" stroke-width="2"/>' +
        '<path d="M8 160h300" stroke="#9aa1aa" stroke-width="2"/><rect x="8" y="164" width="300" height="5" fill="' + EBLUE + '"/>' + windows +
        '<circle cx="300" cy="172" r="4" fill="#fff6c2"/>' +
        bullet(286, 139, "E", EBLUE) +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1a1f28"/>' +
      '<path d="M0 206h400M0 226h400M0 246h400" stroke="#232a36"/>' +
      tag("LOST BOYZ", 22, 238, 32, ORANGE, -5) + tag("LB IV LIFE", 236, 240, 26, GOLD, -7));
  }

  /* 2. Baisley Pond Park: the big pond with its aerating fountain, ducks, cattails and the fishing pier */
  function baisley() {
    const duck = (x, y, cls) => '<g class="duck ' + cls + '"><g class="bob"><ellipse cx="' + x + '" cy="' + y + '" rx="10" ry="4.5" fill="#8a6a46"/><circle cx="' + (x - 8) + '" cy="' + (y - 6) + '" r="4" fill="#2f6b3a"/><path d="M' + (x - 12) + ' ' + (y - 6) + 'l-4 1 4 1" fill="#e8a52c"/></g></g>';
    let cat = "";
    for (let x = 250; x < 400; x += 8) cat += '<path d="M' + x + ' 200v-' + (14 + (x * 7) % 12) + '" stroke="#5a7a34" stroke-width="2"/>' + (x % 24 ? "" : '<rect x="' + (x - 1.5) + '" y="' + (180 - (x * 7) % 12) + '" width="3" height="8" rx="1.5" fill="#6b4a2a"/>');
    const tree = (x, y, r, c) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (150 - y) + '" fill="#4a3322"/><circle cx="' + x + '" cy="' + (y - 4) + '" r="' + r + '" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<g class="cld"><ellipse cx="80" cy="40" rx="46" ry="9" fill="#fff" opacity=".6"/></g><g class="cld cld2"><ellipse cx="80" cy="30" rx="30" ry="7" fill="#fff" opacity=".5"/></g>' +
      /* far shore: trees and the ballfield light towers */
      '<rect x="40" y="70" width="3" height="76" fill="#7b8590"/><rect x="32" y="66" width="20" height="8" fill="#c9d1d8"/><rect x="340" y="74" width="3" height="72" fill="#7b8590"/><rect x="332" y="70" width="20" height="8" fill="#c9d1d8"/>' +
      tree(80, 118, 22, "#3f7a3a") + tree(120, 124, 18, "#4c8a42") + tree(170, 116, 24, "#3a6f35") + tree(230, 122, 20, "#4c8a42") + tree(290, 118, 22, "#3f7a3a") + tree(372, 124, 18, "#3a6f35") +
      '<rect x="0" y="146" width="400" height="8" fill="#5f8a42"/>' +
      /* the pond */
      '<rect x="0" y="154" width="400" height="106" fill="#3d6c7c"/>' +
      '<path d="M20 186h60M140 214h70M60 238h60M250 230h70" stroke="#a9d4e6" stroke-width="2" opacity=".5"/>' +
      /* aerating fountain */
      '<ellipse cx="170" cy="190" rx="26" ry="5" fill="#cfe9f4" opacity=".55"/>' +
      '<path class="jet" d="M164 190q6-48 12 0z" fill="#e6f6fb" opacity=".85"/><path class="jet jet2" d="M152 190q8-26 14 0z" fill="#e6f6fb" opacity=".7"/><path class="jet jet2" d="M176 190q8-26 14 0z" fill="#e6f6fb" opacity=".7"/>' +
      duck(110, 212, "") + duck(230, 202, "duck2") +
      /* fishing pier with a line and bobber */
      '<rect x="270" y="196" width="130" height="8" fill="#8a6a46"/><path d="M280 204v30M320 204v30M360 204v30" stroke="#5b4a36" stroke-width="5"/>' +
      '<path d="M330 196l-34-50" stroke="#2b2b2b" stroke-width="2"/><path d="M296 146q-10 30-8 74" stroke="#ddd" stroke-width=".8" fill="none"/>' +
      '<g class="bob"><circle cx="288" cy="221" r="3" fill="#e8452c"/></g>' + cat +
      '<rect x="20" y="96" width="112" height="18" rx="3" fill="#1f5f3a" stroke="#fff" stroke-width="1.2"/><text x="76" y="109" text-anchor="middle" ' + F + ' font-weight="700" font-size="9.5" fill="#fff">BAISLEY POND PARK</text>',
      sky("g2", "#7fb6e0", "#eaf4ea"));
  }

  /* 3. Roy Wilkins Park on Merrick Blvd: the outdoor courts, a ball on the bounce, the chain-link and the trees */
  function wilkins() {
    let fence = "";
    for (let x = 0; x < 400; x += 10) fence += '<path d="M' + x + ' 70l10 70M' + (x + 10) + ' 70l-10 70" stroke="#9aa3ad" stroke-width=".6" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="330" cy="40" r="18" fill="#fff1c9"/>' +
      /* trees beyond the fence */
      (function () { let t = ""; [30, 90, 150, 240, 310, 370].forEach((x, i) => t += '<circle cx="' + x + '" cy="' + (70 + i % 2 * 6) + '" r="' + (26 + i % 3 * 4) + '" fill="' + (i % 2 ? "#3f7a3a" : "#4c8a42") + '"/>'); return t; })() +
      fence + '<path d="M0 70h400" stroke="#9aa3ad" stroke-width="2"/><path d="M0 70v70M100 70v70M200 70v70M300 70v70M399 70v70" stroke="#7b8590" stroke-width="3"/>' +
      /* the court */
      '<path d="M0 140h400v120H0z" fill="#2f6f8f"/><path d="M60 140h280l40 120H20z" fill="#c8553d"/>' +
      '<path d="M60 140h280l40 120H20z" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<path d="M200 140v120" stroke="#fff" stroke-width="2"/><ellipse cx="200" cy="200" rx="34" ry="12" fill="none" stroke="#fff" stroke-width="2"/>' +
      /* hoops on each end */
      '<rect x="34" y="96" width="4" height="70" fill="#4a4f56"/><rect x="38" y="96" width="30" height="20" fill="#fff" stroke="#333"/><rect x="48" y="104" width="10" height="8" fill="none" stroke="#e8452c" stroke-width="1.5"/>' +
      '<ellipse cx="62" cy="118" rx="7" ry="2" fill="none" stroke="#e8452c" stroke-width="2"/><path d="M56 118l2 10M62 120v10M68 118l-2 10" stroke="#fff" stroke-width=".8"/>' +
      '<rect x="362" y="96" width="4" height="70" fill="#4a4f56"/><rect x="332" y="96" width="30" height="20" fill="#fff" stroke="#333"/><rect x="342" y="104" width="10" height="8" fill="none" stroke="#e8452c" stroke-width="1.5"/>' +
      '<ellipse cx="338" cy="118" rx="7" ry="2" fill="none" stroke="#e8452c" stroke-width="2"/><path d="M332 118l2 10M338 120v10M344 118l-2 10" stroke="#fff" stroke-width=".8"/>' +
      /* the ball on the bounce */
      '<g class="ball"><circle cx="230" cy="226" r="9" fill="#e07a24" stroke="#5a2a0a" stroke-width="1.2"/><path d="M221 226h18M230 217v18" stroke="#5a2a0a" stroke-width="1"/></g>' +
      '<ellipse cx="230" cy="236" rx="9" ry="2" fill="#000" opacity=".25"/>' +
      '<rect x="128" y="40" width="144" height="20" rx="3" fill="#1f5f3a" stroke="#fff" stroke-width="1.2"/><text x="200" y="54" text-anchor="middle" ' + F + ' font-weight="700" font-size="10.5" fill="#fff">ROY WILKINS PARK</text>',
      sky("g3", "#8cc0e8", "#f4ead2"));
  }

  /* 4. York College on Guy R. Brewer Blvd: the long red-brown brick academic core with its glass atrium and banners */
  function york() {
    let bands = "";
    for (let x = 30; x < 370; x += 34) if (x < 160 || x > 236) { bands += '<rect x="' + x + '" y="96" width="22" height="16" fill="#2b3a4c"/><rect x="' + x + '" y="126" width="22" height="16" fill="#2b3a4c"/><rect x="' + x + '" y="156" width="22" height="16" fill="#2b3a4c"/>'; }
    let atrium = "";
    for (let x = 164; x < 236; x += 12) atrium += '<path d="M' + x + ' 70v124" stroke="#d6e6ef" stroke-width="1"/>';
    for (let y = 80; y < 194; y += 14) atrium += '<path d="M160 ' + y + 'h80" stroke="#d6e6ef" stroke-width="1"/>';
    const person = (x, c, cls) => '<g class="walk ' + cls + '"><circle cx="' + x + '" cy="206" r="4" fill="#3a2a22"/><rect x="' + (x - 4) + '" y="210" width="8" height="14" rx="3" fill="' + c + '"/><path d="M' + (x - 2) + ' 224v8M' + (x + 2) + ' 224v8" stroke="#222" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<g class="cld"><ellipse cx="60" cy="34" rx="44" ry="9" fill="#fff" opacity=".65"/></g>' +
      /* brick wings */
      '<rect x="20" y="80" width="360" height="114" fill="#8c4a34"/>' +
      (function () { let b = ""; for (let y = 86; y < 194; y += 6) b += '<path d="M20 ' + y + 'h360" stroke="#7a3e2b" stroke-width=".6"/>'; return b; })() +
      '<rect x="20" y="76" width="360" height="6" fill="#6d3a2a"/>' + bands +
      /* glass atrium in the middle */
      '<path d="M156 194V70l44-14 44 14v124z" fill="#9fc6dc"/>' + atrium +
      '<path d="M156 70l44-14 44 14" stroke="#e9f3f8" stroke-width="2" fill="none"/>' +
      '<rect x="186" y="170" width="28" height="24" fill="#5d7f94"/>' +
      /* banners on poles */
      '<rect x="40" y="40" width="2" height="40" fill="#555"/><g class="wave"><rect x="42" y="42" width="18" height="26" fill="#1f4fa0"/><rect x="42" y="64" width="18" height="4" fill="' + GOLD + '"/></g>' +
      '<rect x="356" y="40" width="2" height="40" fill="#555"/><g class="wave"><rect x="358" y="42" width="18" height="26" fill="#1f4fa0"/><rect x="358" y="64" width="18" height="4" fill="' + GOLD + '"/></g>' +
      '<rect x="62" y="56" width="90" height="16" rx="2" fill="#f4efe6"/><text x="107" y="68" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#1f4fa0">YORK COLLEGE</text>' +
      /* plaza, trees, students walking */
      '<rect x="0" y="194" width="400" height="66" fill="#bdb6a6"/><path d="M0 232h400" stroke="#a49d8e"/>' +
      '<rect x="0" y="240" width="400" height="20" fill="#1c2026"/>' +
      '<circle cx="12" cy="182" r="20" fill="#3f7a3a"/><rect x="10" y="190" width="4" height="20" fill="#4a3322"/>' +
      '<circle cx="390" cy="182" r="20" fill="#3f7a3a"/><rect x="388" y="190" width="4" height="20" fill="#4a3322"/>' +
      person(0, ORANGE, "") + person(0, TEAL, "walk2") +
      '<g class="car"><rect x="0" y="244" width="48" height="12" rx="4" fill="#2f6fb5"/><circle cx="43" cy="250" r="2" fill="#fff6c2"/></g>',
      sky("g4", "#79b2e2", "#e9f1f6"));
  }

  /* 5. Linden Blvd and Guy R. Brewer Blvd: the wall with the tags and a boombox thumping */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="360" cy="34" r="14" fill="#fff1d6"/>' +
      (function () { let b = '<rect x="16" y="56" width="240" height="164" fill="#3a2c28"/>'; for (let y = 58; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#4a3732"/>'; return '<clipPath id="wl"><rect x="16" y="56" width="240" height="164"/></clipPath><g clip-path="url(#wl)">' + b + '</g>'; })() +
      tag("MR CHEEKS", 26, 120, 40, ORANGE, -7) + tag("LOST BOYZ", 34, 164, 30, GOLD, -3) + tag("LB IV LIFE", 66, 204, 24, TEAL, -4) +
      /* boombox on the sidewalk */
      '<g transform="translate(184 196)"><rect x="0" y="0" width="70" height="26" rx="4" fill="#222" stroke="#666"/><path d="M14 0q21-14 42 0" stroke="#666" stroke-width="3" fill="none"/>' +
      '<circle class="pulse" cx="16" cy="13" r="9" fill="#444" stroke="#999"/><circle class="pulse" cx="54" cy="13" r="9" fill="#444" stroke="#999"/><rect x="29" y="7" width="12" height="8" fill="' + ORANGE + '"/></g>' +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="262" y="88" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">Linden Blvd</text>' +
      '<rect x="246" y="110" width="112" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" ' + F + ' font-weight="700" font-size="10.5" fill="#fff">Guy R Brewer Blvd</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car car2"><rect x="0" y="226" width="50" height="13" rx="4" fill="#c0392b"/><circle cx="44" cy="232" r="2" fill="#fff6c2"/></g>',
      sky("g5", "#0e1122", "#3a2018"));
  }

  window.SCENES = { train, baisley, wilkins, york, corner };
})();
