/* levert scenes (Regions tab: St. Louis + Ohio; Shaker Heights, Cleveland's east side suburb where the Levert family moved from Canton). CSS classes and ids prefixed lv- (the page's own anim-train is kept).
   1 RTA Green Line pulling into Warrensville-Shaker, at grade in the Shaker Blvd median, the Warrensville Center Rd overpass behind. GREEN bullet.
   2 The trio on stage: three mic stands in three spotlights, a red rose on the stage lip (Casanova), the crowd's lighters swaying.
   3 The West Side Market on W 25th St: yellow brick hall and the tall clock tower, the clock hands turning.
   4 The Guardians of Traffic on the Hope Memorial Bridge: art deco stone pylons over the Cuyahoga, cars crossing (stylized, no faces).
   5 Shaker Blvd and N Moreland Blvd at Shaker Square: green signs, LEVERT tagged on the brick, the square's red brick and white cupola behind.
   400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lvflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.lv-flk{animation:lvflick 2.2s infinite}.lv-flk2{animation-delay:.8s}' +
    '@keyframes lvspot{0%,100%{opacity:.35}50%{opacity:.75}}.lv-spot{animation:lvspot 2s ease-in-out infinite}.lv-s2{animation-delay:-.7s}.lv-s3{animation-delay:-1.4s}' +
    '@keyframes lvsway{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}.lv-sway{transform-box:fill-box;transform-origin:50% 100%;animation:lvsway 1.8s ease-in-out infinite}.lv-w2{animation-delay:-.6s}.lv-w3{animation-delay:-1.2s}' +
    '@keyframes lvmin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.lv-min{transform-box:view-box;transform-origin:200px 74px;animation:lvmin 8s linear infinite}.lv-hr{transform-box:view-box;transform-origin:200px 74px;animation:lvmin 96s linear infinite}' +
    '@keyframes lvcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.lv-car{animation:lvcar 6s linear infinite}.lv-c2{animation-delay:-3s}' +
    '@keyframes lvcarb{from{transform:translateX(480px)}to{transform:translateX(-80px)}}.lv-carb{animation:lvcarb 7s linear infinite;animation-delay:-2s}' +
    '@keyframes lvwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.lv-wave{animation:lvwave 3s ease-in-out infinite}' +
    '@keyframes lvspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lv-sp{animation:lvspray 1.4s ease-out infinite}.lv-sp2{animation-delay:.45s}' +
    '@keyframes lvsnow{from{transform:translateY(-20px)}to{transform:translateY(40px)}}.lv-snow{animation:lvsnow 3s linear infinite}.lv-sn2{animation-delay:-1.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#e8c15a", ROSE = "#c8102e", GRN = "#2e9e4f", SIGN = "#0f6b3a", BRICK = "#9a3f2c";
  const rose = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0v30" stroke="#2e7d32" stroke-width="3"/><path d="M0 16q10 -6 12 2q-8 4 -12 -2z" fill="#2e7d32"/>' +
    '<circle cx="0" cy="-4" r="9" fill="' + ROSE + '"/><path d="M-6 -6q6 -8 12 0M-4 -1q4 -5 8 0" fill="none" stroke="#7a0a1a" stroke-width="1.6"/></g>';

  /* 1. Warrensville-Shaker, RTA Green Line, at grade in the Shaker Blvd median */
  function lvstation() {
    const car = (x) => '<rect x="' + x + '" y="104" width="150" height="64" rx="6" fill="#d9dde2" stroke="#7d858c" stroke-width="2"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 12 + i * 34) + '" y="114" width="26" height="22" rx="2" fill="#1d2733"/>').join("") +
      '<rect x="' + x + '" y="142" width="150" height="7" fill="' + GRN + '"/><circle cx="' + (x + 30) + '" cy="170" r="7" fill="#333"/><circle cx="' + (x + 120) + '" cy="170" r="7" fill="#333"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lvs1)"/>' +
      '<g class="lv-snow"><circle cx="40" cy="30" r="2" fill="#fff"/><circle cx="140" cy="60" r="1.6" fill="#fff"/><circle cx="260" cy="20" r="2" fill="#fff"/><circle cx="350" cy="50" r="1.6" fill="#fff"/></g>' +
      '<g class="lv-snow lv-sn2"><circle cx="90" cy="10" r="1.6" fill="#fff"/><circle cx="210" cy="40" r="2" fill="#fff"/><circle cx="310" cy="8" r="1.6" fill="#fff"/></g>' +
      /* overpass */
      '<rect x="0" y="58" width="400" height="16" fill="#8d8a84"/><rect x="0" y="54" width="400" height="5" fill="#b8b4ac"/><rect x="30" y="74" width="14" height="110" fill="#7a7770"/><rect x="356" y="74" width="14" height="110" fill="#7a7770"/>' +
      '<text x="200" y="70" text-anchor="middle" ' + font + ' font-size="9" fill="#2a2a2a">WARRENSVILLE CENTER RD</text>' +
      /* overhead wire */
      '<path d="M0 92h400" stroke="#333" stroke-width="1.5"/><rect x="96" y="84" width="4" height="100" fill="#555"/><rect x="300" y="84" width="4" height="100" fill="#555"/>' +
      /* grass median + track */
      '<rect x="0" y="178" width="400" height="82" fill="#6d8f4a"/><rect x="0" y="176" width="400" height="10" fill="#7b6a58"/><path d="M0 180h400M0 184h400" stroke="#c9c9c9" stroke-width="1.5"/>' +
      '<g class="anim-train"><path d="M162 112v-20M152 92h20" stroke="#333" stroke-width="2"/>' + car(10) + car(164) + '</g>' +
      /* platform + sign */
      '<rect x="0" y="190" width="400" height="12" fill="#bcb6aa"/><rect x="0" y="200" width="400" height="4" fill="#f2c200"/>' +
      '<rect x="88" y="208" width="224" height="40" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<text x="104" y="226" ' + font + ' font-size="12" fill="#fff" letter-spacing="1">WARRENSVILLE–</text><text x="104" y="241" ' + font + ' font-size="12" fill="#fff" letter-spacing="1">SHAKER</text>' +
      '<circle cx="288" cy="228" r="14" fill="' + GRN + '"/><text x="288" y="232" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">GRN</text>',
      sky("lvs1", "#0d1530", "#43507a"));
  }

  /* 2. The trio on stage: three mics in three spotlights, a rose on the stage, lighters in the crowd */
  function lvstage() {
    const mic = (x) => '<path d="M' + x + ' 196v-70" stroke="#c9c9c9" stroke-width="3"/><path d="M' + (x - 12) + ' 198h24" stroke="#c9c9c9" stroke-width="4"/><rect x="' + (x - 4) + '" y="112" width="8" height="16" rx="4" fill="#333" stroke="#888"/>';
    const spot = (x, cls) => '<path class="lv-spot ' + cls + '" d="M' + x + ' 0l-46 200h92z" fill="url(#lvsp2)"/>';
    const lighter = (x, cls) => '<g class="lv-sway ' + cls + '"><rect x="' + (x - 3) + '" y="232" width="6" height="14" fill="#555"/><path d="M' + x + ' 220q5 6 0 12q-5 -6 0 -12z" fill="#ffb347"/></g>';
    const heads = Array.from({ length: 14 }, (_, i) => '<circle cx="' + (14 + i * 29) + '" cy="250" r="14" fill="#0a0812"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#120d1e"/>' +
      '<rect x="0" y="0" width="400" height="18" fill="#26202f"/>' + [40, 120, 200, 280, 360].map(x => '<rect x="' + (x - 8) + '" y="12" width="16" height="10" rx="2" fill="#444"/>').join("") +
      '<path d="M0 22q40 30 80 0t80 0t80 0t80 0t80 0v-4h-400z" fill="' + ROSE + '" opacity=".8"/>' +
      spot(110, "") + spot(200, "lv-s2") + spot(290, "lv-s3") +
      '<rect x="0" y="198" width="400" height="22" fill="#2a1e14"/><rect x="0" y="196" width="400" height="4" fill="' + GOLD + '"/>' +
      mic(110) + mic(200) + mic(290) +
      rose(330, 186, 0.8) +
      lighter(60, "") + lighter(150, "lv-w2") + lighter(250, "lv-w3") + lighter(345, "") + heads,
      '<linearGradient id="lvsp2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff6d8" stop-opacity=".9"/><stop offset="1" stop-color="' + GOLD + '" stop-opacity=".25"/></linearGradient>');
  }

  /* 3. West Side Market: yellow brick hall + clock tower */
  function lvmarket() {
    const arches = [70, 110, 150, 250, 290, 330].map(x => '<path d="M' + (x - 14) + ' 200v-30q14 -18 28 0v30z" fill="#3a2a1a" stroke="#f3e2b0" stroke-width="2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lvs3)"/>' +
      /* hall */
      '<path d="M40 200v-62l20 -14h280l20 14v62z" fill="#d9b25f" stroke="#8a6a2a" stroke-width="2"/>' +
      '<path d="M50 132q150 -40 300 0" fill="none" stroke="#a5824a" stroke-width="3"/>' + arches +
      '<path d="M40 150h320" stroke="#b8924a" stroke-width="3"/>' +
      /* tower */
      '<rect x="178" y="34" width="44" height="166" fill="#d9b25f" stroke="#8a6a2a" stroke-width="2"/><path d="M174 36l26 -28l26 28z" fill="#5d6b5a" stroke="#3a4438" stroke-width="2"/>' +
      [120, 146, 172].map(y => '<rect x="192" y="' + y + '" width="16" height="18" rx="2" fill="#3a2a1a"/>').join("") +
      '<circle cx="200" cy="74" r="17" fill="#fff8e6" stroke="#3a2a1a" stroke-width="3"/>' +
      [0, 90, 180, 270].map(a => '<path d="M' + (200 + 13 * Math.cos(a * Math.PI / 180)).toFixed(1) + ' ' + (74 + 13 * Math.sin(a * Math.PI / 180)).toFixed(1) + 'l' + (3 * Math.cos(a * Math.PI / 180)).toFixed(1) + ' ' + (3 * Math.sin(a * Math.PI / 180)).toFixed(1) + '" stroke="#3a2a1a" stroke-width="2"/>').join("") +
      '<path class="lv-min" d="M200 74v-13" stroke="#3a2a1a" stroke-width="2" stroke-linecap="round"/><path class="lv-hr" d="M200 74h8" stroke="#3a2a1a" stroke-width="3" stroke-linecap="round"/><circle cx="200" cy="74" r="2" fill="' + ROSE + '"/>' +
      /* street */
      '<rect x="0" y="200" width="400" height="60" fill="#4a4d52"/><rect x="0" y="198" width="400" height="6" fill="#a9a59c"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="lv-car"><rect x="0" y="214" width="46" height="14" rx="4" fill="' + ROSE + '"/><rect x="8" y="206" width="26" height="10" rx="3" fill="' + ROSE + '"/><circle cx="10" cy="230" r="4" fill="#111"/><circle cx="36" cy="230" r="4" fill="#111"/></g>' +
      '<rect x="356" y="160" width="4" height="44" fill="#555"/><rect x="328" y="150" width="62" height="14" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.2"/><text x="359" y="161" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">W 25 ST</text>',
      sky("lvs3", "#7fb8e0", "#f6dca6"));
  }

  /* 4. Guardians of Traffic, Hope Memorial Bridge over the Cuyahoga */
  function lvbridge() {
    const pylon = (x) => '<rect x="' + (x - 14) + '" y="60" width="28" height="90" fill="#cfc6b0" stroke="#8a826e" stroke-width="2"/>' +
      '<path d="M' + (x - 14) + ' 60h28l-4 -6h-20z" fill="#b8ae96"/>' +
      '<path d="M' + (x - 9) + ' 54v-30q9 -10 18 0v30z" fill="#d8cfb8" stroke="#8a826e" stroke-width="1.5"/>' +
      '<path d="M' + (x - 7) + ' 30h14M' + (x - 7) + ' 38h14M' + (x - 7) + ' 46h14" stroke="#a89f88" stroke-width="1.2"/>' +
      '<rect x="' + (x - 12) + '" y="16" width="24" height="10" rx="2" fill="#b8ae96" stroke="#8a826e"/><circle cx="' + (x - 6) + '" cy="27" r="2.5" fill="#8a826e"/><circle cx="' + (x + 6) + '" cy="27" r="2.5" fill="#8a826e"/>' +
      '<path d="M' + (x - 10) + ' 80h20M' + (x - 10) + ' 100h20M' + (x - 10) + ' 120h20" stroke="#a89f88" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lvs4)"/>' +
      '<g fill="#3b4058"><rect x="20" y="96" width="30" height="54"/><rect x="56" y="80" width="22" height="70"/><rect x="300" y="88" width="26" height="62"/><rect x="334" y="104" width="40" height="46"/></g>' +
      /* river */
      '<rect x="0" y="196" width="400" height="64" fill="#2f5d73"/><g class="lv-wave"><path d="M0 214q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" fill="none" stroke="#7fb3c8" stroke-width="2" opacity=".6"/><path d="M10 236q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" fill="none" stroke="#7fb3c8" stroke-width="2" opacity=".4"/></g>' +
      /* arches */
      [40, 140, 240, 340].map(x => '<path d="M' + (x - 50) + ' 196q50 -44 100 0" fill="none" stroke="#b8ae96" stroke-width="8"/>').join("") +
      /* deck */
      '<rect x="0" y="150" width="400" height="14" fill="#a39a84"/><rect x="0" y="146" width="400" height="5" fill="#cfc6b0"/>' +
      '<g class="lv-car"><rect x="0" y="134" width="40" height="12" rx="4" fill="' + GOLD + '"/><rect x="8" y="128" width="22" height="8" rx="3" fill="' + GOLD + '"/></g>' +
      '<g class="lv-carb"><rect x="0" y="134" width="40" height="12" rx="4" fill="' + GRN + '"/><rect x="10" y="128" width="22" height="8" rx="3" fill="' + GRN + '"/></g>' +
      pylon(110) + pylon(290) +
      '<rect x="0" y="164" width="400" height="32" fill="#8d8470" opacity=".5"/>',
      sky("lvs4", "#f4a259", "#5b6fa8"));
  }

  /* 5. Shaker Blvd and N Moreland Blvd, Shaker Square behind */
  function lvcorner() {
    const bricks = Array.from({ length: 14 }, (_, r) => '<path d="M0 ' + (128 + r * 9) + 'h240" stroke="#5e2f22" stroke-width="1" opacity=".6"/>').join("");
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="10" height="14" fill="#ffd98a" class="lv-flk"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lvs5)"/>' +
      /* Shaker Square: red brick georgian, white cupola */
      '<rect x="220" y="96" width="180" height="60" fill="' + BRICK + '" stroke="#5e2414" stroke-width="2"/><path d="M216 98l94 -18l94 18z" fill="#3c3c44"/>' +
      '<rect x="292" y="52" width="36" height="30" fill="#f4f1ea" stroke="#9a968c" stroke-width="2"/><path d="M288 54l22 -22l22 22z" fill="#2f5d4a"/><path d="M310 32v-12" stroke="#f4f1ea" stroke-width="2"/>' +
      '<circle cx="310" cy="66" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/><path d="M310 66v-5M310 66h4" stroke="#333" stroke-width="1.5"/>' +
      win(232, 110) + win(256, 110) + win(340, 110) + win(364, 110) + win(388, 110) +
      '<path d="M294 156v-30q16 -16 32 0v30z" fill="#f4f1ea"/>' +
      /* brick wall + tag */
      '<rect x="0" y="122" width="240" height="138" fill="#8f3f2c"/>' + bricks +
      tag("LEVERT", 16, 196, 46, GOLD, -7) + rose(196, 210, 0.9) +
      '<g class="lv-sp"><circle cx="186" cy="176" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="lv-sp lv-sp2"><circle cx="194" cy="180" r="2.5" fill="' + GOLD + '" opacity=".6"/></g>' +
      /* sidewalk + street */
      '<rect x="240" y="156" width="160" height="80" fill="#3b3e44"/><path d="M240 196h160" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#9c978d"/>' +
      '<rect x="254" y="124" width="5" height="112" fill="#5a5a5a"/>' +
      '<rect x="244" y="108" width="114" height="18" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="301" y="121" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">SHAKER BLVD</text>' +
      '<rect x="244" y="130" width="140" height="18" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="314" y="143" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">N MORELAND BLVD</text>',
      sky("lvs5", "#141a3a", "#c97a5e"));
  }

  window.SCENES = { lvstation: lvstation, lvstage: lvstage, lvmarket: lvmarket, lvbridge: lvbridge, lvcorner: lvcorner };
})();
