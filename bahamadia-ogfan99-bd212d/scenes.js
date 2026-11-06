/* bahamadia scenes (Regions tab: Philadelphia; West Philly). CSS classes prefixed bh- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bhflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.bh-flk{animation:bhflick 2.4s infinite}.bh-flk2{animation-delay:.8s}' +
    '@keyframes bhspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.bh-spin{transform-box:fill-box;transform-origin:50% 50%;animation:bhspin 1.8s linear infinite}' +
    '@keyframes bhglow{0%,100%{opacity:.45}50%{opacity:1}}.bh-glow{animation:bhglow 2.2s ease-in-out infinite}.bh-g2{animation-delay:-.7s}.bh-g3{animation-delay:-1.4s}' +
    '@keyframes bhnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(16px,-64px);opacity:0}}.bh-note{animation:bhnote 3.2s ease-out infinite}.bh-n2{animation-delay:-1.1s}.bh-n3{animation-delay:-2.2s}' +
    '@keyframes bhfade{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.bh-fd{animation:bhfade 1.6s ease-in-out infinite}.bh-fd2{animation-delay:-.4s}.bh-fd3{animation-delay:-.8s}.bh-fd4{animation-delay:-1.2s}' +
    '@keyframes bhsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.bh-sway{transform-box:fill-box;transform-origin:50% 100%;animation:bhsway 3.4s ease-in-out infinite}.bh-sway2{animation-delay:-1.7s}' +
    '@keyframes bhbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.bh-bob{animation:bhbob 1s ease-in-out infinite}.bh-bob2{animation-delay:-.5s}' +
    '@keyframes bhspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bh-sp{animation:bhspray 1.4s ease-out infinite}.bh-sp2{animation-delay:.45s}' +
    '@keyframes bhtrol{from{transform:translateX(-200px)}to{transform:translateX(520px)}}.bh-trol{animation:bhtrol 10s linear infinite;animation-delay:-4.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "bh-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, c, cls) => '<g class="bh-note ' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="0" rx="5" ry="3.6" fill="' + c + '"/><rect x="3.6" y="-18" width="2" height="18" fill="' + c + '"/><path d="M5.6 -18q8 4 6 12" stroke="' + c + '" stroke-width="2" fill="none"/></g></g>';
  const deck = (x, y) => '<rect x="' + (x - 34) + '" y="' + (y - 24) + '" width="68" height="48" rx="4" fill="#2a2a2e" stroke="#111" stroke-width="2"/><g class="bh-spin"><circle cx="' + (x - 6) + '" cy="' + y + '" r="18" fill="#111"/><circle cx="' + (x - 6) + '" cy="' + y + '" r="13" fill="none" stroke="#333" stroke-width="1"/><circle cx="' + (x - 6) + '" cy="' + y + '" r="6" fill="#d94f7a"/><rect x="' + (x - 7) + '" y="' + (y - 17) + '" width="2" height="6" fill="#fff" opacity=".6"/></g><path d="M' + (x + 24) + ' ' + (y - 18) + 'l-8 24" stroke="#bbb" stroke-width="2.5" stroke-linecap="round"/>';
  const PINK = "#d94f7a", GOLD = "#f0c14b", TEAL = "#2bb3a3", MFL = "#0f75bc";

  /* 1. 40th Street on the Market-Frankford Line, under Market St in West Philly: cream tile, the blue band, the black sign with the MFL bullet, the silver car with the blue stripe sliding in */
  function station() {
    const tr = '<g class="anim-train"><rect x="26" y="108" width="330" height="72" rx="8" fill="#d6d9dd" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 52) + '" y="120" width="34" height="24" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="26" y="150" width="330" height="5" fill="' + MFL + '"/><rect x="26" y="158" width="330" height="2" fill="' + MFL + '"/>' +
      '<rect x="336" y="112" width="20" height="66" rx="4" fill="#a3a9b0"/><circle cx="348" cy="170" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#efe6cf"/>' + Array.from({ length: 27 }, (_, i) => '<path d="M' + (i * 15) + ' 14v70" stroke="#ddd2b6" stroke-width="1"/>').join("") +
      Array.from({ length: 5 }, (_, i) => '<path d="M0 ' + (26 + i * 12) + 'h400" stroke="#ddd2b6" stroke-width="1"/>').join("") +
      '<rect x="0" y="0" width="400" height="14" fill="#2e2e30"/><rect x="0" y="80" width="400" height="12" fill="' + MFL + '"/><rect x="0" y="92" width="400" height="4" fill="#2a3a4a"/>' +
      '<rect x="0" y="96" width="400" height="94" fill="#24262b"/>' + tr +
      '<rect x="0" y="190" width="400" height="7" fill="#f2c200"/><rect x="0" y="197" width="400" height="63" fill="#8e8a84"/>' +
      [110, 290].map(x => '<rect x="' + (x - 7) + '" y="96" width="14" height="94" fill="#5a6470"/>').join("") +
      '<rect x="120" y="30" width="160" height="30" rx="3" fill="#111"/><text x="134" y="51" ' + font + ' font-size="15" fill="#fff">40th St</text>' + badge(220, 45, "MFL", MFL) +
      '<rect class="bh-flk" x="150" y="214" width="100" height="6" rx="3" fill="#fff6c2" opacity=".55"/>',
      "");
  }

  /* 2. The Philly radio booth where Lady B broke records, her mentor's show: the red ON AIR light pulsing, two turntables spinning, the mic on its boom arm, crates of vinyl, the skyline in the window */
  function radio() {
    return svg(
      '<rect width="400" height="260" fill="#2a2234"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="38" height="150" fill="#30283c"/>').join("") +
      '<rect x="40" y="24" width="160" height="96" rx="4" fill="#0e1430" stroke="#4a3e58" stroke-width="5"/>' +
      '<g fill="#273058"><rect x="52" y="70" width="20" height="50"/><rect x="76" y="56" width="16" height="64"/><rect x="96" y="80" width="24" height="40"/><rect x="128" y="50" width="18" height="70"/><path d="M128 50l9 -12 9 12z"/><rect x="150" y="74" width="22" height="46"/><rect x="176" y="64" width="16" height="56"/></g>' +
      [[56, 80], [80, 66], [80, 86], [100, 92], [132, 62], [132, 84], [154, 86], [180, 74]].map((p, i) => '<rect class="bh-glow bh-g' + (i % 3 + 1) + '" x="' + p[0] + '" y="' + p[1] + '" width="4" height="5" fill="#ffd98a"/>').join("") +
      '<rect x="244" y="22" width="110" height="34" rx="6" fill="#3a0f14" stroke="#111" stroke-width="3"/><rect class="bh-glow" x="250" y="28" width="98" height="22" rx="4" fill="#e8283c"/><text x="299" y="45" text-anchor="middle" ' + font + ' font-size="16" fill="#fff" letter-spacing="3">ON AIR</text>' +
      '<rect x="230" y="70" width="140" height="72" fill="#3a2e22"/>' + Array.from({ length: 18 }, (_, i) => '<rect x="' + (234 + i * 7.5) + '" y="' + (76 + (i % 3) * 2) + '" width="5.5" height="' + (28 - (i % 3) * 2) + '" fill="' + ["#d94f7a", "#f0c14b", "#2bb3a3", "#e8e2d4", "#5a7fd4"][i % 5] + '"/>').join("") +
      Array.from({ length: 18 }, (_, i) => '<rect x="' + (234 + i * 7.5) + '" y="' + (110 + (i % 2) * 2) + '" width="5.5" height="' + (28 - (i % 2) * 2) + '" fill="' + ["#2bb3a3", "#e8e2d4", "#d94f7a", "#5a7fd4", "#f0c14b"][i % 5] + '"/>').join("") +
      '<rect x="0" y="150" width="400" height="110" fill="#4a3628"/><rect x="0" y="150" width="400" height="10" fill="#5e4634"/>' +
      deck(110, 196) + deck(290, 196) +
      '<rect x="170" y="176" width="60" height="44" rx="4" fill="#1d1d22" stroke="#111" stroke-width="2"/>' + [182, 194, 206, 218].map((x, i) => '<rect x="' + (x - 2) + '" y="182" width="4" height="30" fill="#555"/><rect class="bh-fd bh-fd' + (i + 1) + '" x="' + (x - 5) + '" y="194" width="10" height="6" rx="1" fill="' + GOLD + '"/>').join("") +
      '<path d="M200 150l-20 -46 30 -14" stroke="#444" stroke-width="4" fill="none" stroke-linecap="round"/><rect x="204" y="78" width="16" height="26" rx="8" fill="#9aa3ad" stroke="#4a4e54" stroke-width="2" transform="rotate(-20 212 91)"/>' +
      note(240, 120, PINK, "") + note(160, 120, GOLD, "bh-n2") + note(250, 110, TEAL, "bh-n3"),
      "");
  }

  /* 3. Black Lily night at the Five Spot in Old City, the women's open mic where poetry and hip-hop met: the little stage, one mic stand in the spotlight, lilies glowing in vases, the crowd's heads nodding */
  function blacklily() {
    const lily = (x, y, cls) => '<g class="bh-sway ' + cls + '"><path d="M' + x + ' ' + (y + 40) + 'q-2 -20 0 -40" stroke="#2f6b3a" stroke-width="3" fill="none"/><g transform="translate(' + x + ' ' + y + ')">' +
      [0, 72, 144, 216, 288].map(a => '<path d="M0 0q-6 -14 0 -22q6 8 0 22z" fill="#f4f1ea" transform="rotate(' + a + ')"/>').join("") + '<circle r="3" fill="' + GOLD + '"/></g></g>';
    const crowd = Array.from({ length: 13 }, (_, i) => { const x = 14 + i * 31, y = 230 + (i % 2) * 6; return '<g class="bh-bob' + (i % 2 ? " bh-bob2" : "") + '"><circle cx="' + x + '" cy="' + (y - 12) + '" r="9" fill="#0d0a10"/><rect x="' + (x - 12) + '" y="' + (y - 4) + '" width="24" height="34" rx="8" fill="#0d0a10"/></g>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="#1a0f1e"/>' + Array.from({ length: 14 }, (_, i) => '<rect x="' + (i * 30) + '" y="0" width="28" height="170" fill="#22142a"/>').join("") +
      '<path d="M0 0h400v26q-50 14 -100 0t-100 0t-100 0t-100 0z" fill="#6a1e3a"/><path d="M0 26q50 14 100 0t100 0t100 0t100 0" stroke="' + GOLD + '" stroke-width="2" fill="none"/>' +
      '<path d="M200 30l-70 160h140z" fill="#fff3c4" opacity=".14" class="bh-glow"/>' +
      '<rect x="60" y="170" width="280" height="22" fill="#3a2418"/><rect x="60" y="168" width="280" height="4" fill="#5a3a24"/>' +
      '<path d="M200 168v-62" stroke="#c9ccd2" stroke-width="3"/><path d="M190 168h20" stroke="#c9ccd2" stroke-width="3"/><rect x="194" y="92" width="12" height="18" rx="6" fill="#9aa3ad" stroke="#4a4e54" stroke-width="2"/>' +
      '<text x="200" y="66" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="22" fill="#f4f1ea">Black Lily</text>' +
      '<rect x="76" y="140" width="14" height="28" rx="3" fill="#2a4a6a" opacity=".85"/>' + lily(83, 104, "") + '<rect x="310" y="140" width="14" height="28" rx="3" fill="#2a4a6a" opacity=".85"/>' + lily(317, 104, "bh-sway2") +
      note(236, 160, GOLD, "") + note(160, 162, PINK, "bh-n2") + crowd,
      "");
  }

  /* 4. After Midnight, the Philly club from her teenage years ("after midnight on the weekend" in Uknowhowwedu): the brick front on a dark block, the pink-and-gold neon script buzzing, the door light, a line of b-boys and b-girls waiting, a boombox at their feet */
  function midnight() {
    const line = Array.from({ length: 9 }, (_, i) => { const x = 178 + i * 24, y = 222 + (i % 2) * 4; return '<g class="bh-bob' + (i % 2 ? " bh-bob2" : "") + '"><circle cx="' + x + '" cy="' + (y - 10) + '" r="6" fill="#0d0a10"/><rect x="' + (x - 8) + '" y="' + (y - 4) + '" width="16" height="28" rx="5" fill="#0d0a10"/></g>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bh4)"/>' + stars(20) +
      '<rect x="0" y="70" width="80" height="140" fill="#2a2030"/><rect x="330" y="56" width="70" height="154" fill="#2a2030"/>' +
      '<rect x="80" y="40" width="250" height="170" fill="#6a2e2a"/>' + Array.from({ length: 16 }, (_, i) => '<path d="M80 ' + (48 + i * 10) + 'h250" stroke="#5a2622" stroke-width="1"/>').join("") +
      '<rect x="100" y="56" width="210" height="56" rx="6" fill="#140c16" stroke="#3a2a40" stroke-width="3"/>' +
      '<text class="bh-flk" x="205" y="82" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="24" fill="' + PINK + '" stroke="#ffd0e0" stroke-width=".6">After Midnight</text>' +
      '<path class="bh-glow" d="M130 96h150" stroke="' + GOLD + '" stroke-width="3" stroke-linecap="round"/><circle class="bh-glow bh-g2" cx="120" cy="96" r="3" fill="' + GOLD + '"/><circle class="bh-glow bh-g3" cx="290" cy="96" r="3" fill="' + GOLD + '"/>' +
      '<rect x="128" y="124" width="40" height="86" fill="#1a1216"/><rect x="128" y="124" width="40" height="86" fill="none" stroke="' + GOLD + '" stroke-width="2"/><circle class="bh-glow" cx="148" cy="118" r="5" fill="#fff3c4"/><path d="M148 118l-30 92h60z" fill="#fff3c4" opacity=".08"/>' +
      '<rect x="190" y="128" width="40" height="30" fill="#2bb3a3" opacity=".35"/><rect x="246" y="128" width="40" height="30" fill="#d94f7a" opacity=".35"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#4a4648"/><rect x="0" y="210" width="400" height="4" fill="#77726e"/>' + line +
      '<g transform="translate(110 236)"><rect x="-18" y="-10" width="36" height="20" rx="3" fill="#c9ccd2" stroke="#3a3a3a" stroke-width="1.5"/><circle cx="-9" cy="0" r="6" fill="#2a2a2e"/><circle cx="9" cy="0" r="6" fill="#2a2a2e"/><path d="M-12 -10q12 -10 24 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g>' +
      note(120, 220, GOLD, "") + note(100, 222, PINK, "bh-n3"),
      sky("bh4", "#0e0a1e", "#3a1e3a"));
  }

  /* 5. Baltimore Ave and S 43rd St
, West Philly: green signs, BAHAMADIA tagged on the wall, Clark Park's big shade trees swaying behind, the Route 34 trolley rolling down Baltimore Ave */
  function corner() {
    const tree = (x, r, cls) => '<g class="bh-sway ' + cls + '"><rect x="' + (x - 5) + '" y="100" width="10" height="40" fill="#4a3424"/><circle cx="' + x + '" cy="' + (96 - r / 2) + '" r="' + r + '" fill="#2f6b3a"/><circle cx="' + (x - r * .6) + '" cy="' + (100 - r / 3) + '" r="' + (r * .7) + '" fill="#3a7d44"/><circle cx="' + (x + r * .6) + '" cy="' + (98 - r / 3) + '" r="' + (r * .7) + '" fill="#2a5f34"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bh5)"/>' +
      tree(40, 34, "") + tree(120, 40, "bh-sway2") + tree(200, 30, "") + tree(280, 42, "bh-sway2") + tree(360, 34, "") +
      '<path d="M0 132h400" stroke="#2a2a2a" stroke-width="3"/>' + Array.from({ length: 21 }, (_, i) => '<path d="M' + (i * 20) + ' 124v12" stroke="#2a2a2a" stroke-width="2"/>').join("") +
      '<rect x="0" y="136" width="400" height="88" fill="#3e5a7a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#35506e" stroke-width="1"/>').join("") +
      tag("BAHAMADIA", 18, 196, 42, PINK, -6) + tag("ILL-A-DEL", 250, 188, 24, GOLD, -4) + tag("BB QUEEN", 24, 218, 17, "#fff", -3) + tag("BAHAMA-D", 236, 214, 18, TEAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/><path d="M0 244h400M0 250h400" stroke="#9a948a" stroke-width="2"/>' +
      '<path d="M0 206h400" stroke="#333" stroke-width="1.2"/>' +
      '<g class="bh-trol"><path d="M60 206l-12 22" stroke="#333" stroke-width="2"/><rect x="0" y="226" width="130" height="24" rx="5" fill="#eef0f2"/><rect x="0" y="240" width="130" height="4" fill="#c8232c"/><rect x="0" y="245" width="130" height="3" fill="' + MFL + '"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (6 + i * 17) + '" y="230" width="13" height="9" fill="#28323c"/>').join("") +
      '<rect x="104" y="221" width="18" height="6" rx="1" fill="#111"/><text x="113" y="226.5" text-anchor="middle" ' + font + ' font-size="5.5" fill="#ffb000">34</text></g>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(286, 98, 112, "Baltimore Ave") + sign(298, 124, 88, "S 43rd St") +
      '<g class="bh-sp"><circle cx="190" cy="166" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="bh-sp bh-sp2"><circle cx="196" cy="160" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("bh5", "#f6b26b", "#fde7c4"));
  }

  window.SCENES = { station: station, radio: radio, blacklily: blacklily, midnight: midnight, corner: corner };
})();
