/* ianmunsick scenes (Regions: The Northwest [Mountain West: born in Sheridan, Wyoming, raised on ranches under the Bighorn Mountains; came up playing with his dad and brothers as The Munsick Boys]; Genres: country). CSS classes prefixed imk- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const GOLD = "#e8c070", RUST = "#b8452e", SKY = "#6ea8c8", CREAM = "#f3ead8";
  const css = '<style>' +
    '@keyframes imkcloud{0%{transform:translateX(0)}100%{transform:translateX(44px)}}.imk-cl{animation:imkcloud 14s ease-in-out infinite alternate}' +
    '@keyframes imkglow{0%,100%{opacity:.45}50%{opacity:1}}.imk-glow{animation:imkglow 2.4s ease-in-out infinite}.imk-g2{animation-delay:-1.2s}' +
    '@keyframes imkbuck{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(10deg) translateY(-6px)}}.imk-buck{animation:imkbuck 1.1s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}' +
    '@keyframes imkflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.imk-flag{animation:imkflag 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:0 50%}' +
    '@keyframes imkgrass{0%,100%{transform:skewX(0)}50%{transform:skewX(-10deg)}}.imk-gr{animation:imkgrass 2.6s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.imk-gr2{animation-delay:-1.3s}' +
    '@keyframes imksoar{0%{transform:translate(0,0)}50%{transform:translate(60px,-10px)}100%{transform:translate(0,0)}}.imk-soar{animation:imksoar 10s ease-in-out infinite}' +
    '@keyframes imkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.imk-sp{animation:imkspray 1.4s ease-out infinite}.imk-sp2{animation-delay:.45s}' +
    '@keyframes imktwk{0%,100%{opacity:.2}50%{opacity:1}}.imk-tw{animation:imktwk 1.8s ease-in-out infinite}.imk-tw2{animation-delay:-.9s}' +
    '@keyframes imkrock{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.imk-rock{animation:imkrock 2s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 0}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const bricks = (x, y, w, h, base, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 7; yy < y + h; yy += 7) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".8" opacity=".55"/>'; return s; };
  /* the Bighorn Mountains: jagged blue-gray range with snow on the high peaks (Cloud Peak the tallest), west of Sheridan */
  const bighorns = (y, c, snow) => '<path d="M0 ' + (y + 30) + 'L30 ' + (y + 14) + 'L52 ' + (y + 22) + 'L84 ' + (y - 4) + 'L104 ' + (y + 10) + 'L132 ' + (y - 18) + 'L150 ' + (y - 6) + 'L176 ' + (y - 30) + 'L198 ' + (y - 10) + 'L222 ' + (y - 22) + 'L246 ' + (y + 2) + 'L270 ' + (y - 12) + 'L300 ' + (y + 12) + 'L330 ' + (y + 4) + 'L362 ' + (y + 20) + 'L400 ' + (y + 14) + 'V' + H + 'H0z" fill="' + c + '"/>' +
    (snow ? '<path d="M120 ' + (y - 2) + 'L132 ' + (y - 18) + 'L144 ' + (y - 2) + 'L138 ' + (y - 6) + 'L132 ' + (y + 0) + 'L126 ' + (y - 5) + 'z M164 ' + (y - 14) + 'L176 ' + (y - 30) + 'L190 ' + (y - 14) + 'L183 ' + (y - 18) + 'L177 ' + (y - 11) + 'L170 ' + (y - 17) + 'z M212 ' + (y - 8) + 'L222 ' + (y - 22) + 'L234 ' + (y - 8) + 'L228 ' + (y - 11) + 'L222 ' + (y - 6) + 'L217 ' + (y - 11) + 'z" fill="' + snow + '"/>' : '');
  const foothills = (y, c) => '<path d="M0 ' + y + 'q60 -18 130 -6t140 -10t130 8v' + (H - y + 20) + 'h-400z" fill="' + c + '"/>';
  const grass = (y, c, n) => Array.from({ length: n }, (_, i) => '<path class="imk-gr' + (i % 2 ? " imk-gr2" : "") + '" d="M' + (6 + i * (400 / n)) + ' ' + y + 'l3 -10l2 10l3 -8l2 8z" fill="' + c + '"/>').join("");

  function imkstation() {
    return svg(
      '<rect width="400" height="260" fill="url(#imk1)"/>' +
      '<g class="imk-cl"><ellipse cx="70" cy="28" rx="40" ry="9" fill="#fff" opacity=".6"/><ellipse cx="300" cy="20" rx="44" ry="9" fill="#fff" opacity=".5"/></g>' +
      bighorns(96, "#5d7488", "#f4f6f8") + foothills(118, "#8a8a5a") +
      /* The Hub on Smith: low brick community building with a covered stop */
      bricks(186, 98, 200, 66, "#a0583e", "#5a2a1a") +
      '<path d="M180 98h212l-10 -12h-192z" fill="#4a4e54"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (200 + i * 38) + '" y="110" width="24" height="26" fill="#cfe2ea" stroke="#3a3a3a" stroke-width="1.5"/>').join("") +
      '<rect x="20" y="118" width="150" height="6" fill="#4a4e54"/><rect x="26" y="124" width="4" height="40" fill="#4a4e54"/><rect x="160" y="124" width="4" height="40" fill="#4a4e54"/>' +
      /* black stop sign */
      '<rect x="30" y="16" width="290" height="54" rx="4" fill="#111" stroke="#fff" stroke-width="2"/>' +
      '<text x="190" y="41" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">The Hub on Smith</text>' +
      '<text x="190" y="60" text-anchor="middle" ' + font + ' font-size="9.5" fill="#cfd6dc" letter-spacing="1">211 SMITH ST · SHERIDAN, WYOMING</text>' +
      '<rect x="40" y="26" width="32" height="16" rx="8" fill="' + RUST + '" stroke="#fff" stroke-width="1.2"/><text x="56" y="38" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">GCT</text>' +
      '<rect x="0" y="164" width="400" height="14" fill="#b8b2a6"/><rect x="0" y="176" width="400" height="4" fill="' + GOLD + '"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#3e4146"/><path d="M0 232h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="20 16"/>' +
      /* the Goose Creek Transit shuttle pulls in */
      '<g class="anim-train"><rect x="50" y="160" width="220" height="62" rx="10" fill="#f4f4f2" stroke="#2a2a2a" stroke-width="2"/>' +
      '<rect x="50" y="196" width="220" height="8" fill="' + SKY + '"/><rect x="50" y="204" width="220" height="4" fill="' + RUST + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (62 + i * 30) + '" y="168" width="24" height="22" rx="2" fill="#2a3a4a"/>').join("") +
      '<rect x="244" y="168" width="22" height="36" rx="3" fill="#2a3a4a"/><rect x="226" y="162" width="42" height="5" fill="#111"/><text x="247" y="166.5" text-anchor="middle" ' + font + ' font-size="4.2" fill="' + GOLD + '">SHERIDAN SHUTTLE</text>' +
      '<rect x="262" y="214" width="8" height="5" fill="#ff8a2a"/>' +
      '<circle cx="88" cy="222" r="11" fill="#111"/><circle cx="88" cy="222" r="4" fill="#888"/><circle cx="232" cy="222" r="11" fill="#111"/><circle cx="232" cy="222" r="4" fill="#888"/>' +
      '<rect x="264" y="206" width="6" height="5" fill="#ffe8a0" class="imk-glow"/></g>',
      sky("imk1", "#7fb4dc", "#f2e4c4"));
  }

  function imkrodeo() {
    /* Sheridan WYO Rodeo at the county fairgrounds: bronc out of the chute under the Bighorns */
    const flag = (x, c) => '<rect x="' + x + '" y="40" width="2" height="44" fill="#ddd"/><rect class="imk-flag" x="' + (x + 2) + '" y="40" width="22" height="13" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#imk2)"/>' +
      '<g class="imk-cl"><ellipse cx="110" cy="24" rx="40" ry="8" fill="#fff" opacity=".55"/></g>' +
      bighorns(70, "#6d7f92", "#f4f6f8") +
      /* grandstand */
      '<path d="M0 84h400v58h-400z" fill="#5a4a3a"/>' +
      Array.from({ length: 6 }, (_, r) => '<path d="M0 ' + (90 + r * 9) + 'h400" stroke="#3a2e24" stroke-width="2"/>' + Array.from({ length: 34 }, (_, i) => '<circle cx="' + (6 + i * 12 + (r % 2) * 6) + '" cy="' + (87 + r * 9) + '" r="2.6" fill="' + ["#c84a3a", "#e8c070", "#6ea8c8", "#f3ead8", "#3a6a4a"][(i + r) % 5] + '"/>').join("")).join("") +
      '<rect x="0" y="82" width="400" height="4" fill="#2a2420"/>' +
      flag(40, RUST) + flag(186, SKY) + flag(330, GOLD) +
      /* arena dirt + fence */
      '<rect x="0" y="142" width="400" height="118" fill="#b88a5a"/>' +
      '<path d="M0 150h400M0 162h400" stroke="#f3ead8" stroke-width="3"/>' + Array.from({ length: 21 }, (_, i) => '<rect x="' + (i * 20) + '" y="146" width="3" height="20" fill="#f3ead8"/>').join("") +
      /* chute gate */
      '<rect x="20" y="120" width="60" height="70" fill="none" stroke="#6a5a48" stroke-width="5"/><path d="M20 140h60M20 160h60" stroke="#6a5a48" stroke-width="4"/>' +
      /* bucking horse + rider (silhouette): front legs down, back legs kicking high */
      '<g class="imk-buck"><g fill="#4a2c1a">' +
      '<ellipse cx="226" cy="188" rx="40" ry="18" transform="rotate(-18 226 188)"/>' +
      '<path d="M190 196l-22 18l-4 -6l18 -20z"/><path d="M196 186l-26 -6q-10 -2 -12 6l-2 10l8 2l4 -8l24 6z"/>' +
      '<path d="M192 200l-6 34h7l6 -30zM206 204l2 30h7l-2 -30z"/>' +
      '<path d="M254 172l30 -22l5 5l-28 25zM258 182l34 -8l2 7l-34 8z"/>' +
      '<path d="M262 170q16 -6 22 6q-8 -2 -14 4z"/></g>' +
      '<g fill="#1e1a18"><path d="M218 172l4 -26h10l2 26z"/><circle cx="227" cy="138" r="6"/><path d="M214 132h26v-3h-6l-2 -6h-10l-2 6h-6z"/>' +
      '<path d="M232 152l22 -22" stroke="#1e1a18" stroke-width="3.5" stroke-linecap="round"/><path d="M220 160l-12 16" stroke="#1e1a18" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M222 172l-6 16h5l6 -14z"/></g></g>' +
      '<g fill="#a07a4a" opacity=".7"><circle cx="190" cy="232" r="6" class="imk-glow"/><circle cx="268" cy="236" r="5" class="imk-glow imk-g2"/></g>' +
      '<rect x="300" y="100" width="90" height="26" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="345" y="118" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">WYO RODEO</text>',
      sky("imk2", "#6aa6d8", "#f6dcae"));
  }

  function imkinn() {
    /* the Sheridan Inn: long porch, row after row of gabled dormers, where Buffalo Bill held tryouts for his Wild West show */
    const dormer = (x, y) => '<path d="M' + x + ' ' + (y + 16) + 'l10 -14l10 14z" fill="#3e5248" stroke="#24302a" stroke-width="1"/><rect x="' + (x + 6) + '" y="' + (y + 8) + '" width="8" height="8" fill="#f8e2a0" class="imk-glow' + (x % 3 ? " imk-g2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#imk3)"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + (14 + i * 29) + '" cy="' + (10 + (i * 17) % 40) + '" r="1.2" fill="#fff" class="imk-tw' + (i % 2 ? " imk-tw2" : "") + '"/>').join("") +
      bighorns(78, "#3a4a5e", "#c8d0da") +
      /* roof with three rows of dormers */
      '<path d="M18 150L44 70h312l26 80z" fill="#4a5e54" stroke="#24302a" stroke-width="2"/>' +
      Array.from({ length: 14 }, (_, i) => dormer(30 + i * 24, 128)).join("") +
      Array.from({ length: 12 }, (_, i) => dormer(52 + i * 24, 104)).join("") +
      Array.from({ length: 10 }, (_, i) => dormer(76 + i * 24, 80)).join("") +
      /* walls + porch */
      '<rect x="20" y="150" width="360" height="56" fill="' + CREAM + '" stroke="#8a7a60" stroke-width="2"/>' +
      Array.from({ length: 11 }, (_, i) => '<rect x="' + (34 + i * 32) + '" y="160" width="16" height="22" fill="#f8e2a0" stroke="#5a4a3a" stroke-width="1.5"/>').join("") +
      '<rect x="12" y="186" width="376" height="6" fill="#6a5a48"/>' + Array.from({ length: 13 }, (_, i) => '<rect x="' + (16 + i * 30) + '" y="192" width="4" height="22" fill="#e8dcc4"/>').join("") +
      '<rect x="12" y="212" width="376" height="6" fill="#6a5a48"/>' +
      '<rect x="0" y="218" width="400" height="42" fill="#5a6a3a"/>' +
      /* rocking chair on the porch */
      '<g class="imk-rock"><path d="M196 194v16M212 194v16M194 210h20M196 202h16" stroke="#3a2418" stroke-width="2.5"/><path d="M190 212q14 6 28 0" stroke="#3a2418" stroke-width="2" fill="none"/></g>' +
      '<rect x="140" y="226" width="120" height="22" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="241" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">THE SHERIDAN INN</text>',
      sky("imk3", "#1c2440", "#5a5a7a"));
  }

  function imkbuffalo() {
    /* White Buffalo on the open range below Cloud Peak, an eagle riding the wind */
    return svg(
      '<rect width="400" height="260" fill="url(#imk4)"/>' +
      '<circle cx="300" cy="110" r="34" fill="#f6c46a" opacity=".9" class="imk-glow"/>' +
      bighorns(120, "#5a4a6a", "#f2e6f0") + foothills(160, "#7a6a3a") +
      '<rect x="0" y="190" width="400" height="70" fill="#a08a4a"/>' + grass(200, "#c8b060", 26) + grass(236, "#8a7a3a", 30) +
      /* white buffalo: big shoulder hump, head low with a shaggy beard */
      '<g stroke="#8a8478" stroke-width="2" fill="#f4f0e6">' +
      '<path d="M268 212q8 -30 -10 -40q-20 -8 -50 -4q-18 -26 -50 -22q-30 4 -36 34q-4 14 0 30h10l2 -14q8 8 22 10l-2 10h10l2 -10q30 4 60 -2l4 10h10l0 -10q14 -6 18 -2z"/>' +
      '<path d="M132 188q-20 -4 -26 12q-4 14 6 22q10 4 18 -2q8 -8 10 -18z"/>' +
      '<path d="M108 214q2 14 10 16q4 -8 2 -14z"/></g>' +
      '<path d="M114 196q-8 -6 -4 -14M128 190q4 -8 -2 -12" stroke="#6a6458" stroke-width="2.4" fill="none" stroke-linecap="round"/>' +
      '<circle cx="118" cy="204" r="1.8" fill="#222"/><path d="M268 182q12 4 10 18" stroke="#8a8478" stroke-width="2" fill="none"/>' +
      /* eagle */
      '<g class="imk-soar"><path d="M60 60q14 -12 28 -2q14 -10 28 2q-14 -2 -28 6q-14 -8 -28 -6z" fill="#3a2a1a"/><circle cx="88" cy="58" r="3" fill="#f4f0e6"/></g>' +
      '<rect x="230" y="222" width="150" height="24" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="305" y="238" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">CLOUD PEAK · BIGHORNS</text>',
      sky("imk4", "#3a3a6a", "#f0a868"));
  }

  function imkcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#imk5)"/>' +
      '<g class="imk-cl"><ellipse cx="90" cy="26" rx="40" ry="8" fill="#fff" opacity=".55"/></g>' +
      bighorns(74, "#5d7488", "#f4f6f8") +
      /* old brick storefronts on Main Street */
      bricks(0, 86, 400, 130, "#9a5a3e", "#5a2a1a") +
      '<rect x="0" y="86" width="400" height="10" fill="#6a3a24"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (14 + i * 66) + '" y="104" width="22" height="30" fill="#2a2a34" stroke="#e8dcc4" stroke-width="2"/>').join("") +
      /* graffiti tag */
      '<rect x="40" y="146" width="320" height="64" fill="#7a4430" opacity=".5"/>' +
      tag("IAN MUNSICK", 50, 194, 34, GOLD, -5) + tag("WYO", 66, 146, 18, SKY, -8) +
      '<g fill="' + RUST + '"><circle cx="352" cy="200" r="3" class="imk-sp"/><circle cx="358" cy="196" r="2" class="imk-sp imk-sp2"/></g>' +
      '<rect x="0" y="216" width="400" height="44" fill="#4a4a4e"/><rect x="0" y="214" width="400" height="4" fill="#b8b2a6"/>' +
      /* street sign pole */
      '<rect x="376" y="40" width="5" height="176" fill="#5a5e62"/>' +
      sign(250, 40, 140, "N MAIN ST") + sign(266, 64, 124, "GRINNELL PLZ") +
      '<rect x="20" y="226" width="140" height="22" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="90" y="241" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">SHERIDAN, WYOMING</text>',
      sky("imk5", "#78acd8", "#f0e2c8"));
  }

  window.SCENES = { imkstation, imkrodeo, imkinn, imkbuffalo, imkcorner };
})();
