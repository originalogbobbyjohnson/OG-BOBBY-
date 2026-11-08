/* msjade scenes (Regions tab: Philadelphia; Nicetown, North Philly). CSS classes prefixed jd- (the page's own anim-train is kept).
   1 Allegheny on SEPTA's Broad Street Line: underground platform, cream tile wall with the orange BSL stripe, a silver car with an orange band sliding in.
   2 Her Nicetown block: two-story brick porch-front rowhouses with striped awnings, a notebook of rhymes open on the stoop (she was spotted on her stoop).
   3 Gordon Phillips Beauty School, downtown: she trained and worked as a hairstylist by day, freestyled at night. Styling chairs, mirrors, hood dryers, braids on a wig stand.
   4 The Philly studio where she cut her demo with producer Staxx: mixing board, speakers pulsing, a speakerphone on the desk (the call where Timbaland first heard her).
   5 N 17th St and W Pike St in Nicetown: green signs, MS JADE tagged on the wall, Simon Gratz High's Late Gothic brick-and-limestone front behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jdglow{0%,100%{opacity:.45}50%{opacity:1}}.jd-glow{animation:jdglow 2.4s ease-in-out infinite}.jd-glow2{animation-delay:-1.2s}' +
    '@keyframes jdcloud{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.jd-cloud{animation:jdcloud 26s linear infinite}.jd-cloud2{animation-delay:-13s}' +
    '@keyframes jdpage{0%,100%{transform:rotate(0)}50%{transform:rotate(-14deg)}}.jd-page{transform-box:fill-box;transform-origin:0% 100%;animation:jdpage 3s ease-in-out infinite}' +
    '@keyframes jdline{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.jd-line{animation:jdline 3.6s ease-out infinite}.jd-line2{animation-delay:-1.2s}.jd-line3{animation-delay:-2.4s}' +
    '@keyframes jdair{0%{transform:translateX(0);opacity:.8}100%{transform:translateX(30px);opacity:0}}.jd-air{animation:jdair 1.1s linear infinite}.jd-air2{animation-delay:-.55s}' +
    '@keyframes jdsnip{0%,100%{transform:rotate(0)}50%{transform:rotate(18deg)}}.jd-snip{transform-box:fill-box;transform-origin:0% 50%;animation:jdsnip .8s ease-in-out infinite}' +
    '@keyframes jdbar{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.jd-bar{transform-box:fill-box;transform-origin:50% 100%;animation:jdbar .7s ease-in-out infinite}.jd-b2{animation-delay:-.2s}.jd-b3{animation-delay:-.45s}.jd-b4{animation-delay:-.1s}' +
    '@keyframes jdpulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}.jd-pulse{transform-box:fill-box;transform-origin:50% 50%;animation:jdpulse .5s ease-in-out infinite}' +
    '@keyframes jdwave{0%{transform:scale(.6);opacity:1}100%{transform:scale(1.6);opacity:0}}.jd-wave{transform-box:fill-box;transform-origin:0% 50%;animation:jdwave 1.6s ease-out infinite}.jd-wave2{animation-delay:-.8s}' +
    '@keyframes jdcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.jd-car{animation:jdcar 7s linear infinite}' +
    '@keyframes jdspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jd-sp{animation:jdspray 1.4s ease-out infinite}.jd-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "jd-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const cloud = (x, y, cls) => '<g class="jd-cloud ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9" fill="#fff" opacity=".85"/><ellipse cx="' + (x + 14) + '" cy="' + (y - 6) + '" rx="16" ry="9" fill="#fff" opacity=".85"/></g>';
  const JADE = "#2fd38a", GOLD = "#f5c542", PINK = "#ff6fb5", BSL = "#f58220";
  const bricks = (x, y, w, h, base, line) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>';
    for (let r = 0; r * 6 < h; r++) s += '<path d="M' + x + ' ' + (y + r * 6) + 'h' + w + '" stroke="' + line + '" stroke-width=".6"/>';
    return s;
  };

  /* 1. Allegheny (BSL, underground): cream tile wall, orange stripe, black station sign, a silver car with an orange band */
  function jdstation() {
    const tr = '<g class="anim-train"><rect x="16" y="104" width="340" height="96" rx="8" fill="#c9ced4" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (32 + i * 52) + '" y="118" width="36" height="28" rx="3" fill="#1f2830"/>').join("") +
      '<rect x="16" y="154" width="340" height="9" fill="' + BSL + '"/>' +
      '<rect x="150" y="116" width="34" height="80" fill="#b4b9c0" stroke="#7a8088" stroke-width="1.5"/><path d="M167 116v80" stroke="#7a8088" stroke-width="1.5"/>' +
      '<rect x="336" y="108" width="20" height="88" rx="4" fill="#a3a9b0"/><circle cx="348" cy="186" r="4" fill="#fff6c2"/><circle cx="348" cy="114" r="3" fill="#fff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#2a2620"/>' +
      '<rect x="0" y="0" width="400" height="96" fill="#e9e0c8"/>' +
      Array.from({ length: 26 }, (_, i) => '<path d="M' + (i * 16) + ' 0v96" stroke="#d5cbb0" stroke-width="1"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (i * 12) + 'h400" stroke="#d5cbb0" stroke-width="1"/>').join("") +
      '<rect x="0" y="62" width="400" height="10" fill="' + BSL + '"/>' +
      '<rect class="jd-glow" x="40" y="6" width="80" height="6" rx="3" fill="#fffbe6"/><rect class="jd-glow jd-glow2" x="280" y="6" width="80" height="6" rx="3" fill="#fffbe6"/>' +
      '<rect x="0" y="96" width="400" height="108" fill="#1c1a16"/>' +
      tr +
      '<rect x="0" y="204" width="400" height="8" fill="#f2c200"/><rect x="0" y="212" width="400" height="48" fill="#8f8a80"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 212l-14 48" stroke="#7c776e" stroke-width="1"/>').join("") +
      '<rect x="206" y="20" width="176" height="32" rx="3" fill="#111"/><text x="218" y="42" ' + font + ' font-size="16" fill="#fff">Allegheny</text>' + badge(326, 36, "BSL", BSL),
      "");
  }

  /* 2. Her Nicetown block: brick porch-front rowhouses with striped awnings, low porch walls and stoops, a rhyme notebook on the steps */
  function jdblock() {
    const house = (x, brick, awn) =>
      bricks(x, 70, 80, 120, brick, "rgba(0,0,0,.18)") +
      '<rect x="' + x + '" y="64" width="80" height="8" fill="#5a4a3e"/>' +
      '<rect x="' + (x + 10) + '" y="82" width="24" height="30" fill="#2c3a4a" stroke="#efe6d2" stroke-width="3"/><rect x="' + (x + 46) + '" y="82" width="24" height="30" fill="#2c3a4a" stroke="#efe6d2" stroke-width="3"/>' +
      '<path d="M' + (x - 2) + ' 128h84l-6 -12h-72z" fill="' + awn + '"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (x + 4 + i * 14) + ' 116v12" stroke="#fff" stroke-width="5" opacity=".85"/>').join("") +
      '<rect x="' + x + '" y="128" width="80" height="4" fill="#ddd2bc"/>' +
      '<rect x="' + (x + 12) + '" y="134" width="22" height="34" fill="#4a2c22"/><circle cx="' + (x + 30) + '" cy="152" r="1.6" fill="' + GOLD + '"/>' +
      '<rect x="' + (x + 44) + '" y="138" width="26" height="22" fill="#2c3a4a" stroke="#efe6d2" stroke-width="2"/>' +
      '<rect x="' + x + '" y="168" width="80" height="22" fill="#b9ad98"/>' + '<rect x="' + (x + 8) + '" y="176" width="30" height="6" fill="#a39783"/><rect x="' + (x + 4) + '" y="182" width="38" height="8" fill="#988c78"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jd-s2)"/>' + cloud(60, 30) + cloud(260, 44, "jd-cloud2") +
      house(-10, "#9a4a36", "#2f8a5a") + house(70, "#8a3e2e", "#c84a3a") + house(150, "#a3533c", JADE) + house(230, "#8f4434", "#3a5aa0") + house(310, "#9a4a36", "#d89a2a") +
      '<rect x="0" y="190" width="400" height="14" fill="#cfc7b8"/><rect x="0" y="204" width="400" height="56" fill="#4a4a4e"/><path d="M0 230h400" stroke="#d9d4c6" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="jd-car"><rect x="0" y="236" width="62" height="14" rx="5" fill="#1c1c22"/><rect x="12" y="228" width="34" height="10" rx="3" fill="#1c1c22"/><rect x="16" y="230" width="12" height="6" fill="#6a8aa0"/><rect x="30" y="230" width="12" height="6" fill="#6a8aa0"/><circle cx="14" cy="250" r="4.5" fill="#111"/><circle cx="48" cy="250" r="4.5" fill="#111"/></g>' +
      /* notebook on the stoop of the jade-awning house */
      '<rect x="160" y="170" width="16" height="12" fill="#fff" stroke="#333" stroke-width="1"/><g class="jd-page"><rect x="176" y="170" width="16" height="12" fill="#fffbe8" stroke="#333" stroke-width="1"/></g>' +
      '<path d="M162 174h12M162 177h10M162 180h12" stroke="#5a7ac8" stroke-width=".8"/>' +
      '<g class="jd-line"><path d="M170 160h26" stroke="' + JADE + '" stroke-width="2.5" stroke-linecap="round"/></g>' +
      '<g class="jd-line jd-line2"><path d="M176 156h20" stroke="' + PINK + '" stroke-width="2.5" stroke-linecap="round"/></g>' +
      '<g class="jd-line jd-line3"><path d="M166 152h24" stroke="' + GOLD + '" stroke-width="2.5" stroke-linecap="round"/></g>',
      sky("jd-s2", "#8fc8ee", "#f4ead8"));
  }

  /* 3. Gordon Phillips Beauty School, downtown: pink-walled salon floor, styling chairs at mirrors, hood dryers, braids on a wig stand, scissors snipping */
  function jdsalon() {
    const chair = x => '<rect x="' + (x - 30) + '" y="40" width="60" height="78" rx="30" fill="#dfe8ec" stroke="#b8a46a" stroke-width="4"/><rect x="' + (x - 26) + '" y="44" width="52" height="70" rx="26" fill="#bcd3dc" opacity=".6"/>' +
      '<rect x="' + (x - 22) + '" y="134" width="44" height="40" rx="8" fill="#1f1f24"/><rect x="' + (x - 26) + '" y="166" width="52" height="10" rx="4" fill="#2a2a30"/><rect x="' + (x - 3) + '" y="176" width="6" height="24" fill="#9a9aa2"/><ellipse cx="' + x + '" cy="204" rx="22" ry="5" fill="#9a9aa2"/>' +
      '<rect x="' + (x - 34) + '" y="120" width="68" height="8" rx="2" fill="#f6efe2"/>';
    const dryer = x => '<rect x="' + (x - 2) + '" y="120" width="4" height="80" fill="#9a9aa2"/><path d="M' + (x - 22) + ' 120q0 -36 22 -36q22 0 22 36z" fill="' + PINK + '" stroke="#b84a86" stroke-width="2"/><ellipse cx="' + x + '" cy="200" rx="18" ry="4" fill="#9a9aa2"/>';
    return svg(
      '<rect width="400" height="260" fill="#f7d6e2"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 36) + ' 0v210" stroke="#f0c4d4" stroke-width="10"/>').join("") +
      '<rect x="0" y="0" width="400" height="22" fill="#2a2228"/><text x="200" y="16" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '" letter-spacing="2">BEAUTY SCHOOL  •  CENTER CITY</text>' +
      chair(70) + chair(170) + dryer(260) + dryer(320) +
      /* wig stand with braids (seen from the back) */
      '<rect x="368" y="130" width="6" height="70" fill="#7a6a5a"/><ellipse cx="371" cy="120" rx="15" ry="17" fill="#2a1c16"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (360 + i * 5) + ' 128q-3 14 1 30" fill="none" stroke="#2a1c16" stroke-width="3" stroke-dasharray="3 1.5"/>').join("") +
      '<circle cx="364" cy="160" r="2.4" fill="' + GOLD + '"/><circle cx="374" cy="161" r="2.4" fill="' + JADE + '"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#e8e2d8"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40 + (i % 2) * 0) + '" y="' + (200 + (i % 2) * 20) + '" width="40" height="20" fill="#2a2a30" opacity=".85"/>').join("") +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="' + (220 - (i % 2) * 20) + '" width="40" height="20" fill="#f4f0e8"/>').join("") +
      '<rect x="0" y="240" width="400" height="20" fill="#2a2a30"/>' +
      /* blow-dryer air on the first chair, scissors on the counter */
      '<g transform="translate(108 70)"><rect x="0" y="0" width="22" height="12" rx="5" fill="#2a2a30"/><rect x="6" y="10" width="7" height="16" rx="2" fill="#2a2a30"/></g>' +
      '<g class="jd-air"><path d="M134 72q8 -3 14 0M134 78q8 3 14 0" stroke="#fff" stroke-width="2" fill="none"/></g><g class="jd-air jd-air2"><path d="M134 75h16" stroke="#fff" stroke-width="2"/></g>' +
      '<g transform="translate(150 118)"><circle cx="0" cy="0" r="3" fill="none" stroke="#555" stroke-width="1.5"/><circle cx="0" cy="7" r="3" fill="none" stroke="#555" stroke-width="1.5"/><g class="jd-snip"><path d="M2 1l14 2" stroke="#9aa2aa" stroke-width="2"/></g><path d="M2 6l14 -2" stroke="#9aa2aa" stroke-width="2"/></g>',
      "");
  }

  /* 4. The demo studio with producer Staxx: dark room, foam panels, mixing board with moving meters, pulsing speakers, a speakerphone sending waves */
  function jdstudio() {
    return svg(
      '<rect width="400" height="260" fill="#14121a"/>' +
      Array.from({ length: 40 }, (_, i) => '<rect x="' + ((i % 10) * 40 + 2) + '" y="' + (Math.floor(i / 10) * 34 + 6) + '" width="36" height="30" fill="' + (i % 2 ? "#221e2c" : "#1c1924") + '"/>').join("") +
      '<rect x="120" y="20" width="160" height="70" rx="4" fill="#0e1a16" stroke="#3a3a46" stroke-width="3"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect class="jd-bar' + (i % 4 === 1 ? " jd-b2" : i % 4 === 2 ? " jd-b3" : i % 4 === 3 ? " jd-b4" : "") + '" x="' + (130 + i * 10.5) + '" y="34" width="7" height="48" fill="' + (i < 9 ? JADE : i < 12 ? GOLD : PINK) + '"/>').join("") +
      /* speakers */
      ['30', '322'].map(x => '<rect x="' + x + '" y="40" width="48" height="96" rx="4" fill="#2a2830" stroke="#444" stroke-width="2"/><g class="jd-pulse"><circle cx="' + (+x + 24) + '" cy="104" r="16" fill="#111" stroke="#666" stroke-width="3"/></g><circle cx="' + (+x + 24) + '" cy="62" r="8" fill="#111" stroke="#666" stroke-width="2"/>').join("") +
      /* desk + board */
      '<rect x="0" y="150" width="400" height="110" fill="#3a2a22"/><path d="M40 150l30 -26h260l30 26z" fill="#26242c" stroke="#55535e" stroke-width="2"/>' +
      Array.from({ length: 22 }, (_, i) => '<rect x="' + (78 + i * 11) + '" y="130" width="3" height="16" fill="#555"/><rect x="' + (75 + i * 11) + '" y="' + (132 + (i * 7) % 10) + '" width="9" height="4" rx="1" fill="' + (i % 5 === 0 ? PINK : "#d8d8e0") + '"/>').join("") +
      /* speakerphone */
      '<path d="M300 186l14 -10h34l14 10v10h-62z" fill="#2a2a30" stroke="#666" stroke-width="2"/><circle cx="331" cy="184" r="5" fill="#111"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (308 + i * 8) + '" y="190" width="5" height="3" fill="#999"/>').join("") +
      '<g class="jd-wave"><path d="M366 176q8 8 0 16" stroke="' + JADE + '" stroke-width="2.5" fill="none"/></g><g class="jd-wave jd-wave2"><path d="M374 170q12 14 0 28" stroke="' + JADE + '" stroke-width="2.5" fill="none"/></g>' +
      /* mic */
      '<rect x="96" y="160" width="4" height="60" fill="#777"/><rect x="88" y="150" width="20" height="30" rx="10" fill="#3a3a42" stroke="#888" stroke-width="2"/>' +
      '<rect x="140" y="196" width="40" height="28" fill="#fffbe8" transform="rotate(-6 160 210)"/><path d="M146 204h28M146 210h24M146 216h26" stroke="#5a7ac8" stroke-width="1" transform="rotate(-6 160 210)"/>' +
      '<rect class="jd-glow" x="180" y="96" width="40" height="12" rx="2" fill="#c8102e"/><text x="200" y="105.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">ON AIR</text>',
      "");
  }

  /* 5. N 17th St and W Pike St: green signs, MS JADE tagged on the brick wall, Simon Gratz High's Late Gothic front (brick with limestone trim, battlemented entrance tower) behind at dusk */
  function jdcorner() {
    const gothic = (x, w, h) => '<rect x="' + x + '" y="' + (150 - h) + '" width="' + w + '" height="' + h + '" fill="#8a4a38"/><rect x="' + x + '" y="' + (150 - h) + '" width="' + w + '" height="5" fill="#d9d0bc"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jd-s5)"/>' + stars(14) +
      gothic(40, 120, 52) + gothic(240, 120, 52) +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (50 + i * 10 + (i > 4 ? 0 : 0)) + '" y="108" width="6" height="16" fill="#e9d48a" opacity=".55" class="' + (i % 3 ? "" : "jd-glow") + '"/>').join("") +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (250 + i * 10) + '" y="108" width="6" height="16" fill="#e9d48a" opacity=".55" class="' + (i % 3 ? "" : "jd-glow jd-glow2") + '"/>').join("") +
      /* central limestone-trimmed entrance tower with battlements and a pointed arch */
      '<rect x="160" y="40" width="80" height="110" fill="#93503c"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (160 + i * 17) + '" y="32" width="12" height="10" fill="#d9d0bc"/>').join("") +
      '<rect x="160" y="40" width="80" height="5" fill="#d9d0bc"/><rect x="156" y="40" width="6" height="110" fill="#d9d0bc"/><rect x="238" y="40" width="6" height="110" fill="#d9d0bc"/>' +
      '<path d="M184 150v-36q16 -26 32 0v36z" fill="#d9d0bc"/><path d="M188 150v-34q12 -20 24 0v34z" fill="#3a2a22"/>' +
      '<path d="M178 92v-22q22 -22 44 0v22z" fill="#e9d48a" opacity=".6" class="jd-glow"/><path d="M200 70v22M178 81h44" stroke="#d9d0bc" stroke-width="2"/>' +
      '<rect x="0" y="150" width="400" height="74" fill="#7a3a2c"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M0 ' + (156 + i * 8) + 'h400" stroke="#6a3024" stroke-width="1"/>').join("") +
      tag("MS JADE", 18, 200, 44, JADE, -6) + tag("CHING CHING", 206, 184, 19, GOLD, -4) + tag("THE CHAMP", 34, 218, 16, "#fff", -3) + tag("NICETOWN", 214, 214, 18, PINK, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="jd-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + JADE + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + JADE + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="352" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(300, 98, 96, "N 17th St") + sign(306, 124, 88, "W Pike St") +
      '<g class="jd-sp"><circle cx="196" cy="168" r="3" fill="' + JADE + '" opacity=".7"/></g><g class="jd-sp jd-sp2"><circle cx="202" cy="162" r="2" fill="' + JADE + '" opacity=".6"/></g>',
      sky("jd-s5", "#12183a", "#a0587a"));
  }

  window.SCENES = { jdstation: jdstation, jdblock: jdblock, jdsalon: jdsalon, jdstudio: jdstudio, jdcorner: jdcorner };
})();
