/* ekoh scenes (Regions tab: Los Angeles + SoCal, the closest region; he is from Las Vegas, NV - AllHipHop 2021: "Hailing from Las Vegas", grew up into rap, comic books and skating).
   CSS classes prefixed ek- (the page's own anim-train is kept on the bus).
   0 Bonneville Transit Center downtown, RTC's hub: the SX (Strip & Downtown Express) pulling in under the shade canopy, black sign with the SX bullet.
   1 Red Rock Canyon west of town: red and cream sandstone bands, Joshua trees, a hawk circling.
   2 His room: a stack of comics, pages flipping, idols' pictures taped to the ceiling ("Take Me Home"), a skateboard on the wall, a mic.
   3 Nights at the skate park ("40 ounces and nights spent at the skate park"): a board rolling the bowl under the lights, the city glow far off.
   4 E Charleston Blvd and S Main St in the downtown Arts District: green signs, EKOH tagged on a mural wall, the Spring Mountains and the city glow behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ekhawk{0%{transform:translate(0,0)}25%{transform:translate(60px,-10px)}50%{transform:translate(120px,0)}75%{transform:translate(60px,10px)}100%{transform:translate(0,0)}}.ek-hawk{animation:ekhawk 9s ease-in-out infinite}' +
    '@keyframes ekflip{0%,100%{transform:scaleX(1)}50%{transform:scaleX(-1)}}.ek-flip{transform-box:fill-box;transform-origin:0% 50%;animation:ekflip 2.4s ease-in-out infinite}' +
    '@keyframes ekroll{0%{transform:translate(-120px,-40px) rotate(-30deg)}50%{transform:translate(0,0) rotate(0deg)}100%{transform:translate(120px,-40px) rotate(30deg)}}.ek-roll{transform-box:fill-box;transform-origin:50% 50%;animation:ekroll 2.6s ease-in-out infinite alternate}' +
    '@keyframes ekglow{0%,100%{opacity:.5}50%{opacity:1}}.ek-glow{animation:ekglow 2.4s ease-in-out infinite}.ek-g2{animation-delay:-1.2s}' +
    '@keyframes ekheat{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.ek-heat{animation:ekheat 3s ease-in-out infinite}' +
    '@keyframes ekspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ek-sp{animation:ekspray 1.4s ease-out infinite}.ek-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const HEART = "#e23d4b", SKY = "#5fc6e6", SAND = "#f2a541", SX = "#c8102e";
  const josh = (x, y, s) => '<g fill="#4b5a34" transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-3" y="-40" width="6" height="40" fill="#6b5a40"/>' +
    '<path d="M0 -30l-14 -12M0 -24l14 -14M-14 -42l-4 -10M14 -38l4 -10" stroke="#6b5a40" stroke-width="4" fill="none"/>' +
    '<circle cx="-18" cy="-54" r="6"/><circle cx="18" cy="-50" r="6"/><circle cx="0" cy="-44" r="6"/></g>';
  const mtns = (y, c) => '<path d="M0 ' + y + 'l40 -30l30 14l50 -44l40 30l40 -20l50 36l40 -24l50 30l60 -26v' + (260 - y + 40) + 'h-400z" fill="' + c + '"/>';

  /* 0. Bonneville Transit Center */
  function ekstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (62 + i * 40) + '" y="122" width="32" height="24" rx="3" fill="#20303f"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="112" width="300" height="62" rx="9" fill="#f3f4f6" stroke="#7a8590" stroke-width="2"/>' + wins +
      '<path d="M40 154h300" stroke="' + SX + '" stroke-width="8"/><path d="M40 163h300" stroke="#1d3f8a" stroke-width="4"/>' +
      '<rect x="306" y="120" width="28" height="36" rx="3" fill="#20303f"/>' +
      '<rect x="236" y="114" width="66" height="8" rx="2" fill="#111"/><text x="269" y="120.6" text-anchor="middle" ' + font + ' font-size="6.2" fill="#ffb21a">SX DOWNTOWN</text>' +
      '<circle cx="90" cy="176" r="13" fill="#222"/><circle cx="90" cy="176" r="5" fill="#888"/><circle cx="292" cy="176" r="13" fill="#222"/><circle cx="292" cy="176" r="5" fill="#888"/>' +
      '<circle cx="336" cy="162" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ek0)"/>' +
      '<circle class="ek-glow" cx="70" cy="40" r="22" fill="#ffd27a" opacity=".85"/>' +
      mtns(110, "#b9876a") +
      /* the shade canopy on steel posts */
      '<path d="M0 74h400v10h-400z" fill="#e6e1d6"/><path d="M0 84h400" stroke="#9a958c" stroke-width="3"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="84" width="8" height="106" fill="#8c8f94"/>').join("") +
      '<rect x="0" y="180" width="400" height="12" fill="#c9c3b6"/><rect x="0" y="192" width="400" height="68" fill="#55524d"/>' +
      '<path d="M0 232h60M100 232h60M200 232h60M300 232h60" stroke="#e8d84a" stroke-width="3"/>' +
      bus +
      '<rect x="356" y="100" width="4" height="90" fill="#444"/>' +
      '<rect x="252" y="22" width="142" height="44" rx="3" fill="#111"/>' +
      '<circle cx="272" cy="44" r="13" fill="' + SX + '"/><text x="272" y="48.5" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">SX</text>' +
      '<text x="290" y="40" ' + font + ' font-size="9.5" fill="#fff">BONNEVILLE</text><text x="290" y="55" ' + font + ' font-size="9.5" fill="#fff">TRANSIT CTR</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f3efe6">DOWNTOWN · LAS VEGAS, NV</text>',
      sky("ek0", "#3d78c2", "#f6c58a"));
  }

  /* 1. Red Rock Canyon */
  function ekredrock() {
    return svg(
      '<rect width="400" height="260" fill="url(#ek1)"/>' +
      '<circle class="ek-glow" cx="330" cy="46" r="20" fill="#fff1b8"/>' +
      mtns(96, "#9a8a7a") +
      /* banded sandstone: red base, cream tops */
      '<path d="M0 170l30 -60l40 -20l50 10l40 -40l60 6l40 30l50 -20l50 40l40 -10v134h-400z" fill="#c8553d"/>' +
      '<path d="M0 130l30 -20l40 -20l50 10l40 -40l60 6l40 30l50 -20l50 40l40 -10v14l-40 10l-50 -36l-50 20l-40 -30l-60 -6l-40 40l-50 -10l-40 20l-30 20z" fill="#efd9b4"/>' +
      '<g stroke="#a8432f" stroke-width="2" opacity=".6"><path d="M20 160q60 -10 120 0t120 -6t120 4"/><path d="M10 182q80 -8 160 0t200 -4"/></g>' +
      '<path d="M0 206q100 -14 200 -6t200 -4v64h-400z" fill="#d9b48a"/>' +
      josh(60, 214, 1.1) + josh(330, 220, 1.3) + josh(250, 206, .7) +
      '<g fill="#7a8c4a"><circle cx="150" cy="214" r="7"/><circle cx="160" cy="216" r="5"/><circle cx="290" cy="230" r="6"/></g>' +
      '<g class="ek-hawk"><path d="M90 60q10 -8 20 0q10 -8 20 0q-10 -2 -20 4q-10 -6 -20 -4z" fill="#3a2a22"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#5a2a1a">RED ROCK CANYON · WEST OF TOWN</text>',
      sky("ek1", "#5aa8dc", "#fbe2b6"));
  }

  /* 2. His room: comics, pictures on the ceiling, a board, a mic */
  function ekcomics() {
    const pic = (x, y, r, c) => '<g transform="rotate(' + r + ' ' + x + ' ' + y + ')"><rect x="' + (x - 18) + '" y="' + (y - 13) + '" width="36" height="26" fill="#f7f3ea"/><rect x="' + (x - 15) + '" y="' + (y - 10) + '" width="30" height="16" fill="' + c + '"/><path d="M' + (x - 4) + ' ' + (y - 13) + 'h8" stroke="#e9e3c2" stroke-width="4"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#2a2333"/>' +
      /* ceiling with taped pictures */
      '<path d="M0 0h400v54l-400 0z" fill="#3a3145"/>' + pic(70, 28, -8, SKY) + pic(150, 22, 6, HEART) + pic(240, 30, -4, SAND) + pic(330, 24, 9, "#8a6bd1") +
      /* wall: the skateboard deck hung up, a poster heart */
      '<rect x="0" y="54" width="400" height="140" fill="#463b55"/>' +
      '<g transform="rotate(-70 320 120)"><rect x="276" y="110" width="90" height="22" rx="11" fill="' + HEART + '"/><circle cx="292" cy="136" r="5" fill="#f3efe6"/><circle cx="350" cy="136" r="5" fill="#f3efe6"/></g>' +
      '<path d="M90 90c0 -12 18 -12 18 0c0 -12 18 -12 18 0c0 14 -18 22 -18 28c0 -6 -18 -14 -18 -28z" fill="' + HEART + '" class="ek-glow"/>' +
      '<text x="108" y="140" text-anchor="middle" ' + font + ' font-size="9" fill="#f3efe6">HEART HOP</text>' +
      /* desk + comics stack + open comic flipping */
      '<rect x="0" y="194" width="400" height="66" fill="#5b4632"/><rect x="0" y="194" width="400" height="6" fill="#6e563d"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (40 + i * 2) + '" y="' + (182 - i * 6) + '" width="56" height="6" fill="' + [SKY, HEART, SAND, "#8a6bd1", "#f3efe6"][i] + '" stroke="#222" stroke-width=".8"/>').join("") +
      '<rect x="160" y="168" width="44" height="30" fill="#f7f3ea" stroke="#222"/><path d="M166 174h32M166 180h24M166 186h28" stroke="#5fc6e6" stroke-width="3"/>' +
      '<g class="ek-flip"><rect x="204" y="168" width="44" height="30" fill="#fff8e0" stroke="#222"/><circle cx="226" cy="180" r="7" fill="' + SAND + '"/><path d="M212 192h28" stroke="' + HEART + '" stroke-width="3"/></g>' +
      /* mic on a stand */
      '<rect x="318" y="150" width="4" height="44" fill="#333"/><rect x="310" y="128" width="20" height="26" rx="8" fill="#666"/><path d="M312 136h16M312 142h16" stroke="#444" stroke-width="1.5"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="10" fill="#f3efe6">COMICS, A BOARD AND A MIC</text>');
  }

  /* 3. Nights at the skate park */
  function ekskate() {
    return svg(
      '<rect width="400" height="260" fill="url(#ek3)"/>' +
      '<g fill="#fff" opacity=".8"><circle cx="40" cy="30" r="1.2"/><circle cx="120" cy="18" r="1"/><circle cx="210" cy="34" r="1.3"/><circle cx="300" cy="14" r="1"/><circle cx="370" cy="40" r="1.2"/></g>' +
      mtns(118, "#2e2742") +
      /* far city glow */
      '<g class="ek-glow ek-g2" fill="#f0b45a" opacity=".7"><rect x="150" y="104" width="10" height="46"/><rect x="164" y="90" width="12" height="60"/><rect x="180" y="110" width="9" height="40"/><rect x="232" y="98" width="12" height="52"/><rect x="250" y="114" width="10" height="36"/></g>' +
      /* light poles */
      [40, 360].map(x => '<rect x="' + x + '" y="60" width="5" height="110" fill="#555"/><rect x="' + (x - 10) + '" y="56" width="25" height="8" fill="#777"/><path class="ek-glow" d="M' + (x - 8) + ' 64l-30 110h76l-30 -110z" fill="#fff3c4" opacity=".18"/>').join("") +
      /* the bowl */
      '<rect x="0" y="150" width="400" height="110" fill="#b8b3aa"/>' +
      '<path d="M60 150q20 0 30 30q20 50 110 50q90 0 110 -50q10 -30 30 -30z" fill="#9c978e"/>' +
      '<path d="M0 150h60q20 0 30 30q20 50 110 50q90 0 110 -50q10 -30 30 -30h60" stroke="#8a8a8a" stroke-width="4" fill="none"/>' +
      '<path d="M0 150h60M340 150h60" stroke="#d9dde2" stroke-width="4"/>' +
      tag("EKOH", 150, 214, 22, HEART, -4) +
      /* the board rolling the bowl */
      '<g class="ek-roll"><rect x="182" y="210" width="40" height="7" rx="3.5" fill="' + SKY + '"/><circle cx="190" cy="220" r="3.5" fill="#f3efe6"/><circle cx="214" cy="220" r="3.5" fill="#f3efe6"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2333">NIGHTS AT THE SKATE PARK</text>',
      sky("ek3", "#141030", "#4a2f5e"));
  }

  /* 4. E Charleston Blvd and S Main St, Arts District */
  function ekcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ek4)"/>' +
      mtns(112, "#5b3f5e") +
      '<g class="ek-glow" fill="#f6c066" opacity=".7"><rect x="200" y="70" width="10" height="46"/><rect x="214" y="58" width="14" height="58"/><rect x="232" y="76" width="10" height="40"/><rect x="250" y="64" width="12" height="52"/></g>' +
      /* mural wall */
      '<rect x="0" y="116" width="400" height="110" fill="#e9d9c0"/>' +
      '<path d="M0 116h140v110h-140z" fill="' + SKY + '" opacity=".55"/><path d="M140 116h120v110h-120z" fill="' + SAND + '" opacity=".5"/><path d="M260 116h140v110h-140z" fill="#8a6bd1" opacity=".45"/>' +
      '<circle cx="330" cy="150" r="24" fill="' + HEART + '" opacity=".6"/>' +
      tag("EKOH", 20, 196, 54, HEART, -6) + tag("HEART HOP", 30, 220, 17, "#f7f3ea", -3) + tag("NO LABEL", 168, 218, 16, SAND, -4) +
      '<rect x="0" y="226" width="400" height="34" fill="#5d5a55"/><rect x="0" y="224" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="86" width="6" height="140" fill="#2f2f2f"/>' + sign(268, 88, 128, "E Charleston Blvd") + sign(292, 114, 90, "S Main St") +
      '<g class="ek-sp"><circle cx="216" cy="166" r="3" fill="' + HEART + '" opacity=".7"/></g><g class="ek-sp ek-sp2"><circle cx="222" cy="160" r="2" fill="' + HEART + '" opacity=".6"/></g>',
      sky("ek4", "#262050", "#f2915e"));
  }

  window.SCENES = { ekstation: ekstation, ekredrock: ekredrock, ekcomics: ekcomics, ekskate: ekskate, ekcorner: ekcorner };
})();
