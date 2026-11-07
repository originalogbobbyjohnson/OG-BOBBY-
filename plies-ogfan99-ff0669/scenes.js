/* plies scenes (Regions tab: South Florida; Dunbar, Fort Myers). CSS classes prefixed pl- (the page's own anim-train is kept for the bus).
   1 LeeTran Route 20 pulling up at the MLK Blvd / Henderson Ave stop in Dunbar, royal palms, Florida sun.
   2 Fort Myers High School (he played receiver and DB there): football under the Friday-night lights, green + white, a pass in the air.
   3 McGregor Blvd, the City of Palms: the long double row of royal palms by the Edison and Ford winter estates, a banyan, palms swaying.
   4 The Caloosahatchee at downtown Fort Myers: sunset, the bridge, the downtown towers, a boat sliding by.
   5 Martin Luther King Jr Blvd and Veronica S Shoemaker Blvd in Dunbar: green signs, PLIES tagged, royal palms and downtown behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes plsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.pl-sway{transform-box:fill-box;transform-origin:50% 100%;animation:plsway 3s ease-in-out infinite}.pl-sway2{animation-delay:-1.5s}' +
    '@keyframes plball{0%{transform:translate(0,0)}50%{transform:translate(110px,-60px)}100%{transform:translate(220px,0)}}.pl-ball{animation:plball 2.6s linear infinite}' +
    '@keyframes plboat{from{transform:translateX(-90px)}to{transform:translateX(470px)}}.pl-boat{animation:plboat 12s linear infinite}' +
    '@keyframes plglow{0%,100%{opacity:.55}50%{opacity:1}}.pl-glow{animation:plglow 1.6s ease-in-out infinite}' +
    '@keyframes plspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.pl-sp{animation:plspray 1.4s ease-out infinite}.pl-sp2{animation-delay:.5s}' +
    '@keyframes plshim{0%,100%{opacity:.25}50%{opacity:.7}}.pl-shim{animation:plshim 2s ease-in-out infinite}.pl-shim2{animation-delay:-1s}' +
    '@keyframes plgull{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.pl-gull{animation:plgull 10s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const label = (x, w, txt) => '<rect x="' + x + '" y="230" width="' + w + '" height="22" rx="3" fill="#000" opacity=".55"/><text x="' + (x + w / 2) + '" y="245" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  /* royal palm: smooth grey trunk, green crownshaft, fronds */
  const palm = (x, base, h, s, cls) => {
    const top = base - h;
    return '<g><path d="M' + (x - 4 * s) + ' ' + base + 'Q' + x + ' ' + (base - h / 2) + ' ' + (x - 3 * s) + ' ' + (top + 14 * s) + 'h' + (6 * s) + 'Q' + (x + 2 * s) + ' ' + (base - h / 2) + ' ' + (x + 4 * s) + ' ' + base + 'z" fill="#cfcabf"/>' +
      '<rect x="' + (x - 3 * s) + '" y="' + top + '" width="' + (6 * s) + '" height="' + (16 * s) + '" fill="#6e9a3c"/>' +
      '<g class="pl-sway ' + (cls || "") + '" fill="#2f7a35">' + [-70, -40, -12, 12, 40, 70, 180].map(a => '<path transform="rotate(' + a + ' ' + x + ' ' + top + ')" d="M' + x + ' ' + top + 'q' + (14 * s) + ' ' + (-6 * s) + ' ' + (30 * s) + ' ' + (6 * s) + 'q' + (-16 * s) + ' ' + (-2 * s) + ' ' + (-30 * s) + ' ' + (-6 * s) + 'z"/>').join("") + '</g></g>';
  };
  const GOLD = "#f4c430", GRN = "#2e9a5a";

  /* 1. LeeTran Route 20 at MLK Blvd / Henderson Ave */
  function plstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="122" width="34" height="26" rx="3" fill="#24323b"/>').join("");
    const bus = '<g class="anim-train"><rect x="34" y="110" width="320" height="82" rx="10" fill="#f6f7f5" stroke="#6d757c" stroke-width="2"/>' + win +
      '<path d="M34 160q160 -22 320 6v10q-160 -26 -320 -4z" fill="#1f6fb2"/><path d="M34 172q160 -18 320 4v6q-160 -20 -320 -2z" fill="' + GRN + '"/>' +
      '<rect x="318" y="118" width="32" height="44" rx="4" fill="#24323b"/><rect x="282" y="112" width="68" height="12" rx="2" fill="#111"/><text x="316" y="121" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">20 DUNBAR</text>' +
      '<circle cx="90" cy="194" r="14" fill="#222"/><circle cx="90" cy="194" r="6" fill="#999"/><circle cx="300" cy="194" r="14" fill="#222"/><circle cx="300" cy="194" r="6" fill="#999"/><circle cx="350" cy="182" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pls1)"/><circle cx="330" cy="40" r="22" fill="#fff3b0" opacity=".9"/>' +
      palm(30, 150, 120, 1) + palm(110, 150, 100, .9, "pl-sway2") + palm(370, 150, 110, 1, "pl-sway2") +
      '<rect x="0" y="150" width="400" height="20" fill="#d9d2c0"/>' + bus +
      '<rect x="0" y="206" width="400" height="54" fill="#4a4a50"/><path d="M0 232h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="20 14"/>' +
      /* bus stop sign */
      '<rect x="14" y="92" width="4" height="114" fill="#888"/><rect x="0" y="70" width="58" height="34" rx="3" fill="#1f6fb2" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="29" y="84" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS STOP</text><text x="29" y="98" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">20</text>' +
      label(130, 260, "MLK BLVD / HENDERSON AVE, DUNBAR"),
      sky("pls1", "#4aa3df", "#fbe3a6"));
  }

  /* 2. Fort Myers High School football, Friday night */
  function plhigh() {
    const lights = x => '<rect x="' + (x - 2) + '" y="30" width="4" height="120" fill="#777"/><rect x="' + (x - 20) + '" y="18" width="40" height="16" rx="2" fill="#444"/>' +
      [0, 1, 2, 3].map(i => '<circle class="pl-glow" cx="' + (x - 14 + i * 9.5) + '" cy="26" r="3.5" fill="#fffbe0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#plh1)"/>' + lights(40) + lights(360) +
      /* bleachers with fans in green + white */
      '<path d="M70 150h260l-20 -50H90z" fill="#555"/>' + Array.from({ length: 4 }, (_, r) => Array.from({ length: 14 }, (_, i) => '<circle cx="' + (100 + i * 15 + (r % 2) * 7) + '" cy="' + (112 + r * 10) + '" r="4" fill="' + ((i + r) % 3 ? "#e9e2d0" : GRN) + '"/>').join("")).join("") +
      '<rect x="120" y="86" width="160" height="16" fill="' + GRN + '"/><text x="200" y="98" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">GO GREEN WAVE</text>' +
      /* field */
      '<rect x="0" y="150" width="400" height="110" fill="#2f7d3a"/>' + [40, 100, 160, 220, 280, 340].map(x => '<path d="M' + x + ' 150l' + ((x - 200) / 6) + ' 110" stroke="#fff" stroke-width="2" opacity=".7"/>').join("") +
      '<g class="pl-ball"><ellipse cx="80" cy="180" rx="8" ry="5" fill="#8a4a22" stroke="#fff" stroke-width="1"/></g>' +
      '<g fill="#fff"><circle cx="70" cy="196" r="6"/><rect x="64" y="202" width="12" height="20" rx="3"/></g><g fill="' + GRN + '"><circle cx="310" cy="190" r="6"/><rect x="304" y="196" width="12" height="20" rx="3"/></g>' +
      label(12, 226, "FORT MYERS HIGH, FRIDAY NIGHT"),
      sky("plh1", "#0b1630", "#27406b"));
  }

  /* 3. McGregor Blvd, the City of Palms */
  function plpalms() {
    const row = Array.from({ length: 7 }, (_, i) => palm(30 + i * 56, 170 - i * 6, 130 - i * 10, 1 - i * 0.07, i % 2 ? "pl-sway2" : "")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#plp1)"/>' +
      '<g class="pl-gull"><path d="M0 50q6 -6 12 0q6 -6 12 0" stroke="#555" stroke-width="2" fill="none"/></g>' +
      /* banyan on the right */
      '<g fill="#3a6b2f"><ellipse cx="330" cy="104" rx="80" ry="40"/><ellipse cx="280" cy="90" rx="40" ry="26"/></g>' +
      '<g stroke="#7a6a52" stroke-width="3">' + [270, 290, 312, 336, 358, 380].map(x => '<path d="M' + x + ' 116v' + (40 + (x % 3) * 6) + '"/>').join("") + '</g><rect x="318" y="110" width="22" height="64" fill="#7a6a52"/>' +
      row +
      '<rect x="0" y="170" width="400" height="90" fill="#8bb46a"/><path d="M0 200l400 -20v30L0 240z" fill="#5a5a5e"/><path d="M0 220l400 -25" stroke="#fff" stroke-width="2" stroke-dasharray="14 12"/>' +
      label(12, 230, "McGREGOR BLVD, CITY OF PALMS"),
      sky("plp1", "#5fb3e8", "#fff1c9"));
  }

  /* 4. The Caloosahatchee at downtown Fort Myers */
  function plriver() {
    return svg(
      '<rect width="400" height="260" fill="url(#plr1)"/><circle cx="300" cy="118" r="26" fill="#ffd27a"/>' +
      /* downtown towers */
      '<g fill="#3a3550"><rect x="40" y="70" width="26" height="70"/><rect x="72" y="50" width="30" height="90"/><rect x="108" y="76" width="22" height="64"/><rect x="136" y="60" width="28" height="80"/><rect x="170" y="84" width="20" height="56"/></g>' +
      '<g fill="#ffd98a">' + [46, 56, 78, 90, 112, 142, 152].map((x, i) => '<rect class="pl-shim" x="' + x + '" y="' + (80 + (i % 3) * 16) + '" width="4" height="5"/>').join("") + '</g>' +
      palm(20, 140, 70, .7) + palm(200, 140, 64, .65, "pl-sway2") +
      /* water, then the bridge on its piers */
      '<rect x="0" y="144" width="400" height="116" fill="#2b5f86"/>' +
      '<rect x="0" y="136" width="400" height="8" fill="#d8d2c4"/>' + [30, 90, 150, 210, 270, 330, 390].map(x => '<rect x="' + (x - 4) + '" y="144" width="8" height="26" fill="#bdb6a6"/>').join("") +
      [184, 200, 216, 232].map((y, i) => '<path class="pl-shim ' + (i % 2 ? "pl-shim2" : "") + '" d="M' + (250 + i * 6) + ' ' + y + 'h' + (90 - i * 14) + '" stroke="#ffd27a" stroke-width="3"/>').join("") +
      '<g class="pl-boat"><path d="M0 200h60l-8 12H8z" fill="#f4f4f4"/><rect x="18" y="188" width="24" height="12" fill="#e9e2d0"/><path d="M30 188v-24l16 22z" fill="#fff"/></g>' +
      label(12, 230, "THE CALOOSAHATCHEE, DOWNTOWN"),
      sky("plr1", "#33295a", "#f08a5b"));
  }

  /* 5. MLK Blvd and Veronica S Shoemaker Blvd, Dunbar */
  function plcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#plc1)"/>' +
      '<g fill="#4a3f5e"><rect x="240" y="60" width="22" height="50"/><rect x="266" y="44" width="26" height="66"/><rect x="296" y="66" width="18" height="44"/></g>' +
      palm(330, 120, 96, .9) + palm(372, 120, 84, .8, "pl-sway2") + palm(222, 120, 70, .7, "pl-sway2") +
      /* wall */
      '<rect x="14" y="80" width="250" height="126" fill="#e8d9b5" stroke="#9c8a62" stroke-width="2"/><rect x="14" y="80" width="250" height="10" fill="' + GRN + '"/>' +
      tag("PLIES", 34, 160, 56, GOLD, -6) + tag("BIG GATES", 110, 194, 20, GRN, -3) + tag("BIH!", 196, 116, 22, "#e23b2e", 8) +
      '<g><circle class="pl-sp" cx="220" cy="180" r="3" fill="' + GOLD + '"/><circle class="pl-sp pl-sp2" cx="226" cy="172" r="2" fill="' + GOLD + '"/></g>' +
      /* sign post */
      '<rect x="296" y="72" width="5" height="136" fill="#777"/>' + sign(242, 58, 104, "DR MLK JR BLVD") + sign(250, 84, 146, "VERONICA S SHOEMAKER") +
      '<rect x="0" y="206" width="400" height="54" fill="#3a3a40"/><rect x="0" y="206" width="400" height="6" fill="#bdb6a6"/><path d="M0 234h400" stroke="#fff" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("plc1", "#3d7fc4", "#f9c98a"));
  }

  window.SCENES = { plstop, plhigh, plpalms, plriver, plcorner };
})();
