/* liluzivert scenes (Regions tab: Philadelphia; North Philly / Francisville). CSS classes prefixed uz- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes uzbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.uz-ball{animation:uzbounce .8s ease-in infinite alternate}' +
    '@keyframes uzwave{0%,100%{transform:skewY(0)}50%{transform:skewY(-10deg)}}.uz-flag{transform-box:fill-box;transform-origin:0 50%;animation:uzwave 1.3s ease-in-out infinite}.uz-flag2{animation-delay:-.65s}' +
    '@keyframes uzsw{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.uz-sw{transform-box:fill-box;transform-origin:50% 0%;animation:uzsw 3.2s ease-in-out infinite}.uz-sw2{animation-delay:-1.6s}' +
    '@keyframes uzbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.uz-bob{animation:uzbob .7s ease-in-out infinite}.uz-bob2{animation-delay:-.35s}' +
    '@keyframes uzspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.uz-spin{transform-box:fill-box;transform-origin:50% 50%;animation:uzspin 18s linear infinite}' +
    '@keyframes uzorb{from{transform:rotate(0)}to{transform:rotate(360deg)}}.uz-orb{transform-origin:200px 112px;animation:uzorb 9s linear infinite}' +
    '@keyframes uzglow{0%,100%{opacity:.5}50%{opacity:1}}.uz-glow{animation:uzglow 2.2s ease-in-out infinite}.uz-glow2{animation-delay:-1.1s}' +
    '@keyframes uzcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.uz-car{animation:uzcar 7s linear infinite}' +
    '@keyframes uzsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.uz-sp{animation:uzsp 1.4s ease-out infinite}.uz-sp2{animation-delay:.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = (n, seed) => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "uz-glow") + '" cx="' + ((i * 83 + (seed || 0)) % 400) + '" cy="' + (6 + (i * 41) % 90) + '" r="' + (i % 3 ? 0.9 : 1.5) + '" fill="#fff" opacity=".75"/>'; return s; };
  const gem = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M-8 -4l4 -6h8l4 6 -8 12z" fill="' + c + '" stroke="#fff" stroke-width="1"/><path d="M-8 -4h16M-4 -10l4 18 4 -18" stroke="#fff" stroke-width=".6" fill="none" opacity=".8"/></g>';
  const PINK = "#ff4fb6", PURP = "#8a4dff", LIME = "#b6ff3b", BSL = "#f58220";

  /* 1. Fairmount on the Broad Street Line, under North Broad at Fairmount Ave: green-and-cream wall tile, the orange band, the black sign with the BSL tile, the orange-striped train sliding in */
  function uzstation() {
    const tr = '<g class="anim-train"><rect x="24" y="106" width="326" height="76" rx="8" fill="#cfd3d8" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (38 + i * 43) + '" y="118" width="30" height="26" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="24" y="152" width="326" height="5" fill="' + BSL + '"/><rect x="24" y="160" width="326" height="3" fill="' + BSL + '"/>' +
      '<rect x="330" y="110" width="20" height="70" rx="4" fill="#a3a9b0"/><circle cx="342" cy="170" r="3.5" fill="#fff6c2"/></g>';
    const tiles = Array.from({ length: 6 }, (_, r) => Array.from({ length: 34 }, (_, c) => '<rect x="' + (c * 12) + '" y="' + (16 + r * 12) + '" width="11" height="11" fill="' + ((r + c) % 7 === 0 ? "#5f9a72" : "#e9e3cf") + '"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="#d9d2bb"/>' + tiles +
      '<rect x="0" y="0" width="400" height="16" fill="#2e2e30"/><rect x="0" y="86" width="400" height="10" fill="' + BSL + '"/>' +
      '<rect x="0" y="96" width="400" height="94" fill="#24262a"/>' + tr +
      '<rect x="0" y="190" width="400" height="7" fill="#f2c200"/><rect x="0" y="197" width="400" height="63" fill="#8b8780"/>' +
      [60, 340].map(x => '<rect x="' + (x - 7) + '" y="16" width="14" height="174" fill="#3f6e57"/><rect x="' + (x - 9) + '" y="16" width="18" height="6" fill="#2d5040"/>').join("") +
      '<rect x="110" y="32" width="180" height="32" rx="3" fill="#111"/><text x="124" y="54" ' + font + ' font-size="16" fill="#fff">Fairmount</text>' + badge(230, 48, "BSL", BSL) +
      '<rect class="uz-glow" x="150" y="214" width="100" height="6" rx="3" fill="' + PINK + '" opacity=".5"/>',
      "");
  }

  /* 2. Francisville Playground, by 17th and Ridge: the blacktop court with the hoop, a ball bouncing, rowhouses with stoops behind, a bright mural wall with stars and planets */
  function uzrec() {
    const rows = Array.from({ length: 6 }, (_, i) => { const x = 150 + i * 42, c = ["#8a4a36", "#9b5a3c", "#7a3d2e"][i % 3]; return '<rect x="' + x + '" y="70" width="40" height="76" fill="' + c + '"/><rect x="' + x + '" y="66" width="40" height="5" fill="#3a2a22"/><rect x="' + (x + 6) + '" y="80" width="11" height="15" fill="#2c3a44"/><rect x="' + (x + 23) + '" y="80" width="11" height="15" fill="#2c3a44"/><rect x="' + (x + 6) + '" y="104" width="11" height="15" fill="#2c3a44"/><rect x="' + (x + 22) + '" y="122" width="12" height="24" fill="#4a2a1e"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#uz2)"/>' + rows +
      '<rect x="0" y="54" width="144" height="92" fill="#2a1f4a"/>' + stars(10, 7).replace(/cx="(\d+)"/g, (m, v) => 'cx="' + (6 + (+v % 134)) + '"').replace(/cy="(\d+)"/g, (m, v) => 'cy="' + (60 + (+v % 80)) + '"') +
      '<circle cx="44" cy="96" r="20" fill="' + PINK + '"/><ellipse cx="44" cy="96" rx="32" ry="7" fill="none" stroke="' + LIME + '" stroke-width="3"/><circle cx="108" cy="76" r="9" fill="' + PURP + '"/><circle cx="114" cy="122" r="6" fill="' + LIME + '"/>' +
      '<rect x="0" y="146" width="400" height="10" fill="#9e9a92"/><rect x="0" y="156" width="400" height="104" fill="#3d4a5a"/>' +
      '<path d="M40 256q160 -90 320 0" stroke="#e8ecf2" stroke-width="2" fill="none"/><path d="M0 200h400" stroke="#e8ecf2" stroke-width="2" opacity=".5"/>' +
      Array.from({ length: 16 }, (_, i) => '<path d="M' + (i * 26) + ' 146v-38" stroke="#7d848c" stroke-width="1.5"/>').join("") + '<path d="M0 110h400" stroke="#7d848c" stroke-width="2"/>' +
      '<rect x="296" y="92" width="6" height="120" fill="#555"/><rect x="270" y="84" width="54" height="34" fill="#f2f2f2" stroke="#444" stroke-width="2"/><rect x="286" y="100" width="22" height="14" fill="none" stroke="#c43" stroke-width="2"/>' +
      '<path d="M280 120h28l-3 16h-22z" fill="none" stroke="#ddd" stroke-width="1.5"/>' +
      '<g class="uz-ball"><circle cx="250" cy="190" r="9" fill="#e8762a"/><path d="M241 190h18M250 181v18" stroke="#6b2f0a" stroke-width="1.2"/></g>',
      sky("uz2", "#7fbcea", "#f6ead0"));
  }

  /* 3. Made in America 2022 on the Benjamin Franklin Parkway, his headline set: the flags of the world lining the Parkway, the big stage, pink and purple beams sweeping, the crowd jumping */
  function uzmia() {
    const flagC = ["#c8102e", "#1c3f94", "#f2c200", "#0a8a4a", "#ffffff", "#e8762a", "#6b3fa0", "#0aa0d8"];
    const flags = Array.from({ length: 10 }, (_, i) => { const x = i < 5 ? 6 + i * 20 : 298 + (i - 5) * 20, y = 72 + (i < 5 ? i * 6 : (9 - i) * 6); return '<rect x="' + x + '" y="' + y + '" width="2" height="' + (100 - (y - 72)) + '" fill="#cfd2d6"/><g class="uz-flag' + (i % 2 ? " uz-flag2" : "") + '"><rect x="' + (x + 2) + '" y="' + y + '" width="16" height="10" fill="' + flagC[i % 8] + '"/><rect x="' + (x + 2) + '" y="' + (y + 4) + '" width="16" height="3" fill="' + flagC[(i + 3) % 8] + '"/></g>'; }).join("");
    const crowd = Array.from({ length: 22 }, (_, i) => { const x = 8 + i * 18, y = 220 + (i % 3) * 6; return '<g class="uz-bob' + (i % 2 ? " uz-bob2" : "") + '"><circle cx="' + x + '" cy="' + (y - 10) + '" r="5" fill="#120a1c"/><rect x="' + (x - 6) + '" y="' + (y - 5) + '" width="12" height="22" rx="4" fill="#120a1c"/>' + (i % 3 === 1 ? '<path d="M' + (x - 4) + ' ' + (y - 4) + 'l-5 -16M' + (x + 4) + ' ' + (y - 4) + 'l5 -16" stroke="#120a1c" stroke-width="3" stroke-linecap="round"/>' : "") + '</g>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#uz3)"/>' + stars(18, 30) +
      '<g fill="#1f1a36"><rect x="150" y="40" width="20" height="60"/><rect x="176" y="22" width="18" height="78"/><rect x="200" y="32" width="24" height="68"/><rect x="230" y="50" width="20" height="50"/></g>' +
      flags +
      '<rect x="110" y="70" width="180" height="10" fill="#2a2a2e"/><rect x="110" y="70" width="6" height="110" fill="#2a2a2e"/><rect x="284" y="70" width="6" height="110" fill="#2a2a2e"/>' +
      '<rect x="116" y="80" width="168" height="80" fill="#1a0f2a"/><rect class="uz-glow" x="130" y="88" width="140" height="56" fill="' + PURP + '" opacity=".55"/><circle class="uz-glow uz-glow2" cx="200" cy="116" r="18" fill="' + PINK + '"/>' +
      '<rect x="104" y="160" width="192" height="20" fill="#2e2a36"/><rect x="104" y="158" width="192" height="4" fill="' + PINK + '"/>' +
      '<g class="uz-sw"><path d="M140 80l-40 140h40z" fill="' + PINK + '" opacity=".25"/></g><g class="uz-sw uz-sw2"><path d="M260 80l0 140h40z" fill="' + PURP + '" opacity=".3"/></g><g class="uz-sw uz-sw2"><path d="M200 80l-26 140h52z" fill="' + LIME + '" opacity=".16"/></g>' +
      '<rect x="0" y="180" width="400" height="80" fill="#3a3640"/>' + crowd,
      sky("uz3", "#0c0820", "#5a2a6a"));
  }

  /* 4. The Fels Planetarium at the Franklin Institute (Baby Pluto, Eternal Atake): the dome full of stars, a pink ringed planet, little Pluto orbiting, the rows of seats */
  function uzspace() {
    return svg(
      '<rect width="400" height="260" fill="#070512"/>' +
      '<path d="M0 200Q0 10 200 10T400 200z" fill="url(#uz4)"/>' + stars(46, 11).replace(/cy="(\d+)"/g, (m, v) => 'cy="' + (24 + (+v % 150)) + '"') +
      '<path d="M0 200Q0 10 200 10T400 200" fill="none" stroke="#3a2a6a" stroke-width="3"/>' +
      '<g class="uz-spin"><path d="M60 70l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3z" fill="#fff" opacity=".8"/></g>' +
      '<circle cx="200" cy="112" r="34" fill="' + PINK + '"/><circle cx="190" cy="100" r="10" fill="#ff8fd2" opacity=".6"/><ellipse cx="200" cy="114" rx="62" ry="12" fill="none" stroke="' + LIME + '" stroke-width="4" transform="rotate(-14 200 114)"/>' +
      '<g class="uz-orb"><circle cx="292" cy="112" r="8" fill="#c9b8a6"/><circle cx="289" cy="109" r="3" fill="#f2e6d8"/></g>' +
      '<circle cx="80" cy="150" r="14" fill="' + PURP + '"/><circle cx="330" cy="60" r="6" fill="#7fd4ff"/>' + gem(120, 60, 1.2, PINK) +
      '<rect x="0" y="200" width="400" height="60" fill="#140f24"/>' +
      Array.from({ length: 3 }, (_, r) => Array.from({ length: 16 }, (_, c) => '<rect x="' + (6 + c * 25 + (r % 2) * 12) + '" y="' + (206 + r * 18) + '" width="20" height="12" rx="4" fill="' + (r === 1 ? "#3a2050" : "#2a1840") + '"/>').join("")).join("") +
      '<rect x="190" y="196" width="20" height="12" rx="3" fill="#555"/><circle class="uz-glow" cx="200" cy="196" r="4" fill="#fff"/>',
      '<radialGradient id="uz4" cx="50%" cy="80%" r="80%"><stop offset="0" stop-color="#2a1a5a"/><stop offset="1" stop-color="#0a0820"/></radialGradient>');
  }

  /* 5. N 17th St and Ridge Ave, Francisville: green signs, UZI tagged big with pink diamonds, Girard College's white marble Founder's Hall glowing on its hill behind */
  function uzcorner() {
    const cols = Array.from({ length: 8 }, (_, i) => '<rect x="' + (136 + i * 18) + '" y="62" width="8" height="58" fill="#f1efe8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#uz5)"/>' + stars(16, 3) +
      '<path d="M0 132q100 -18 200 -16t200 16v20H0z" fill="#1e2a22"/>' +
      '<rect x="120" y="120" width="160" height="12" fill="#d8d4c8"/><rect x="126" y="114" width="148" height="8" fill="#e6e2d6"/>' + cols +
      '<rect x="124" y="50" width="152" height="12" fill="#e6e2d6"/><path d="M124 50l76 -22 76 22z" fill="#ecebe4" stroke="#cbc7ba" stroke-width="2"/>' +
      '<path class="uz-glow" d="M124 50l76 -22 76 22z" fill="#fff6d0" opacity=".25"/>' +
      '<rect x="0" y="136" width="400" height="90" fill="#6a3a2c"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#58301f" stroke-width="1"/>').join("") +
      '<rect x="0" y="132" width="400" height="6" fill="#4a2a1e"/>' +
      tag("UZI", 30, 204, 66, PINK, -6) + tag("BABY PLUTO", 168, 180, 24, LIME, -4) + tag("FRANCISVILLE", 160, 212, 18, "#fff", -3) +
      gem(150, 160, 1.3, PINK) + gem(134, 214, 1, PURP) + gem(330, 196, 1.1, PINK) +
      '<rect x="0" y="224" width="400" height="36" fill="#54514b"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="uz-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + PURP + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + PURP + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(300, 98, 96, "N 17th St") + sign(306, 124, 84, "Ridge Av") +
      '<g class="uz-sp"><circle cx="118" cy="168" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="uz-sp uz-sp2"><circle cx="124" cy="160" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("uz5", "#120a2a", "#c2508a"));
  }

  window.SCENES = { uzstation: uzstation, uzrec: uzrec, uzmia: uzmia, uzspace: uzspace, uzcorner: uzcorner };
})();
