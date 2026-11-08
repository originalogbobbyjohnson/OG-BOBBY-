/* Blackalicious scenes (Regions tab: The Bay Area; Sacramento + Davis). CSS classes prefixed blk- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const css = '<style>' +
    '@keyframes blkflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.blk-flk{animation:blkflick 2.4s infinite}.blk-flk2{animation-delay:.8s}' +
    '@keyframes blktw{0%,100%{opacity:.2}50%{opacity:1}}.blk-tw{animation:blktw 2.6s ease-in-out infinite}.blk-tw2{animation-delay:-1.3s}' +
    '@keyframes blkflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.blk-flag{transform-box:fill-box;transform-origin:0% 50%;animation:blkflag 1.6s ease-in-out infinite}' +
    '@keyframes blkbike{0%{transform:translateX(-80px)}100%{transform:translateX(480px)}}.blk-bike{animation:blkbike 9s linear infinite}.blk-bike2{animation-delay:-4.5s}' +
    '@keyframes blkwheel{to{transform:rotate(360deg)}}.blk-wh{transform-box:fill-box;transform-origin:50% 50%;animation:blkwheel .8s linear infinite}' +
    '@keyframes blkbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.blk-bob{animation:blkbob .8s ease-in-out infinite}.blk-bob2{animation-delay:-.4s}' +
    '@keyframes blkbeam{0%,100%{opacity:.2}50%{opacity:.7}}.blk-bm{animation:blkbeam 2.2s ease-in-out infinite}.blk-bm2{animation-delay:-1.1s}' +
    '@keyframes blkjet{0%,100%{transform:scaleY(.6)}50%{transform:scaleY(1)}}.blk-jet{transform-box:fill-box;transform-origin:50% 100%;animation:blkjet 1.2s ease-in-out infinite}' +
    '@keyframes blksp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.blk-sp{animation:blksp 1.4s ease-out infinite}.blk-sp2{animation-delay:.45s}' +
    '@keyframes blkleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-50px,180px) rotate(240deg)}}.blk-lf{transform-box:fill-box;animation:blkleaf 7s linear infinite}.blk-lf2{animation-delay:-2.3s}.blk-lf3{animation-delay:-4.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="blk-tw' + (i % 2 ? " blk-tw2" : "") + '" cx="' + ((i * 97) % 400) + '" cy="' + (6 + (i * 37 + (i * i) % 23) % 66) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff"/>'; return s; };
  const GOLD = "#f0a830", SKY = "#3ab0c8", RED = "#c8442f", GOLDLINE = "#f2a900";

  /* 1. Sacramento Valley Station: the Gold Line light rail stop beside the 1926 red-brick depot with its tall arched windows and red tile roof, the white train sliding in */
  function blkstation() {
    let arches = "";
    for (let i = 0; i < 5; i++) arches += '<path d="M' + (84 + i * 50) + ' 112v-30a14 14 0 0 1 28 0v30z" fill="#2c3440"/><path d="M' + (86 + i * 50) + ' 96v-12a12 12 0 0 1 24 0v12z" fill="#ffd98a" opacity=".35" class="blk-flk' + (i % 2 ? " blk-flk2" : "") + '"/>';
    const train = '<g class="anim-train"><rect x="16" y="128" width="320" height="58" rx="8" fill="#f2f2ee" stroke="#8a9198" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (30 + i * 42) + '" y="138" width="30" height="22" rx="3" fill="#24323e"/>').join("") +
      '<rect x="16" y="166" width="320" height="6" fill="' + GOLDLINE + '"/><rect x="16" y="174" width="320" height="3" fill="' + RED + '"/>' +
      '<path d="M322 128h6q14 4 18 24v34h-24z" fill="#e6e8ea" stroke="#8a9198" stroke-width="2"/><path d="M326 134q10 4 14 18h-14z" fill="#24323e"/><circle cx="338" cy="178" r="3.5" fill="#fff6c2"/>' +
      '<path d="M120 128l20-24M240 128l20-24" stroke="#3a3e46" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#blkg1)"/>' +
      '<path d="M40 70l160-26 160 26z" fill="#b5502e"/><rect x="40" y="70" width="320" height="56" fill="#a8432f"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M40 ' + (74 + i * 4.5) + 'h320" stroke="#923a28" stroke-width=".8"/>').join("") + arches +
      '<rect x="40" y="66" width="320" height="6" fill="#d9c7a0"/>' +
      '<path d="M0 104h400" stroke="#3a3e46" stroke-width="1.5"/>' +
      train +
      '<rect x="0" y="186" width="400" height="6" fill="#e8c547"/><rect x="0" y="192" width="400" height="68" fill="#9a968c"/>' +
      '<rect x="40" y="200" width="320" height="34" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="52" y="223" ' + F + ' font-weight="700" font-size="14" fill="#fff">Sacramento Valley Station</text>' +
      '<rect x="296" y="209" width="54" height="17" rx="8.5" fill="' + GOLDLINE + '"/><text x="323" y="221.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#111">GOLD</text>',
      sky("blkg1", "#5d8fc4", "#f2c98a"));
  }

  /* 2. John F. Kennedy High School in the Pocket, where Gift of Gab and Chief Xcel met as students and graduated in 1989: low 1960s campus, forest green and gold, the flag snapping, a boombox on the lawn */
  function blkschool() {
    const tree = x => '<rect x="' + (x - 3) + '" y="120" width="6" height="40" fill="#5a4632"/><circle cx="' + x + '" cy="112" r="20" fill="#2f6b3a"/><circle cx="' + (x - 12) + '" cy="122" r="12" fill="#3a7d45"/><circle cx="' + (x + 12) + '" cy="120" r="13" fill="#3a7d45"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#blkg2)"/>' +
      '<rect x="20" y="104" width="360" height="62" fill="#e4dccb"/><rect x="14" y="96" width="372" height="10" fill="#1f5a36"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (34 + i * 44) + '" y="116" width="30" height="34" fill="#3a4a5a"/><rect x="' + (36 + i * 44) + '" y="118" width="26" height="10" fill="#9ec3d8" opacity=".5"/>').join("") +
      '<rect x="150" y="70" width="100" height="26" fill="#1f5a36"/><text x="200" y="88" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="' + GOLD + '">KENNEDY HIGH</text>' +
      tree(26) + tree(374) +
      '<rect x="292" y="30" width="3" height="80" fill="#cfd3d8"/><g class="blk-flag"><rect x="295" y="32" width="34" height="20" fill="#f2f2ee"/><rect x="295" y="32" width="34" height="5" fill="' + RED + '"/><rect x="295" y="42" width="34" height="4" fill="' + RED + '"/><rect x="295" y="32" width="14" height="10" fill="#1d3a7a"/></g>' +
      '<rect x="0" y="166" width="400" height="94" fill="#5c9a3e"/>' +
      '<rect x="40" y="198" width="320" height="30" rx="3" fill="#1f5a36" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="218" text-anchor="middle" ' + F + ' font-weight="700" font-size="13" fill="' + GOLD + '">WELCOME BACK COUGARS · CLASS OF \'89</text>' +
      '<g class="blk-bob"><rect x="172" y="168" width="56" height="26" rx="4" fill="#2a2a30" stroke="#888" stroke-width="1.5"/><circle cx="186" cy="181" r="8" fill="#555"/><circle cx="214" cy="181" r="8" fill="#555"/><circle cx="186" cy="181" r="3" fill="#111"/><circle cx="214" cy="181" r="3" fill="#111"/><path d="M180 168q20-12 40 0" stroke="#888" stroke-width="2" fill="none"/></g>' +
      '<text class="blk-flk" x="236" y="168" ' + F + ' font-size="14" fill="#fff">&#9835;</text><text class="blk-flk blk-flk2" x="156" y="166" ' + F + ' font-size="12" fill="#fff">&#9834;</text>',
      sky("blkg2", "#7fb9e6", "#e8f2f6"));
  }

  /* 3. Davis, where the duo started out in 1992 while Chief Xcel was at UC Davis: the campus water tower over the arboretum trees, bikes rolling down the path */
  function blkdavis() {
    const bike = (cls) => '<g class="blk-bike ' + cls + '"><circle class="blk-wh" cx="0" cy="214" r="11" fill="none" stroke="#2a2a30" stroke-width="2.5" stroke-dasharray="6 3"/><circle class="blk-wh" cx="34" cy="214" r="11" fill="none" stroke="#2a2a30" stroke-width="2.5" stroke-dasharray="6 3"/>' +
      '<path d="M0 214l12-18h18l4 18M12 196l6 18h16M28 192l4-6h6" stroke="' + RED + '" stroke-width="2.5" fill="none"/><path d="M14 196h-4" stroke="#2a2a30" stroke-width="3"/></g>';
    let trees = "";
    for (let i = 0; i < 9; i++) trees += '<circle cx="' + (i * 50 - 6) + '" cy="' + (150 - (i % 3) * 8) + '" r="' + (26 + (i % 2) * 6) + '" fill="' + (i % 2 ? "#3a7d45" : "#2f6b3a") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#blkg3)"/>' +
      '<g transform="translate(250 0)"><path d="M6 150L22 66M74 150L58 66M16 110h48M10 130h60" stroke="#cfd3d8" stroke-width="4" fill="none"/>' +
      '<path d="M18 66h44v-10q-22-18-44 0z" fill="#e9ecef" stroke="#9aa2ab" stroke-width="2"/><rect x="16" y="40" width="48" height="28" rx="4" fill="#e9ecef" stroke="#9aa2ab" stroke-width="2"/>' +
      '<path d="M16 40q24-16 48 0z" fill="#d4d9de" stroke="#9aa2ab" stroke-width="2"/><text x="40" y="60" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#1d3a7a">DAVIS</text></g>' +
      trees +
      '<path class="blk-lf" d="M300 30q4-4 8 0q-4 4-8 0z" fill="' + GOLD + '"/><path class="blk-lf blk-lf2" d="M200 10q4-4 8 0q-4 4-8 0z" fill="' + GOLD + '"/><path class="blk-lf blk-lf3" d="M380 20q4-4 8 0q-4 4-8 0z" fill="#d9822b"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#7cae4a"/><path d="M0 222q200-20 400 0v18q-200-20-400 0z" fill="#c9bfa8"/>' +
      bike("") + bike("blk-bike2") +
      '<text x="200" y="252" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" fill="#fff">DAVIS, CA · WHERE IT STARTED IN 1992</text>',
      sky("blkg3", "#6faee0", "#f6e7c2"));
  }

  /* 4. Cesar Chavez Plaza downtown, Concerts in the Park: the stage under the trees, lights sweeping, hands up, the cream Beaux-Arts face of old City Hall behind and the plaza fountain going */
  function blkplaza() {
    let crowd = "";
    for (let i = 0; i < 16; i++) crowd += '<g class="blk-bob' + (i % 2 ? " blk-bob2" : "") + '"><circle cx="' + (14 + i * 25) + '" cy="' + (206 + (i % 3) * 4) + '" r="9" fill="#1a1a22"/><rect x="' + (6 + i * 25) + '" y="' + (214 + (i % 3) * 4) + '" width="16" height="40" rx="6" fill="#1a1a22"/>' + (i % 3 === 0 ? '<path d="M' + (20 + i * 25) + ' ' + (210 + (i % 3) * 4) + 'l8-22" stroke="#1a1a22" stroke-width="5" stroke-linecap="round"/>' : "") + '</g>';
    let cols = "";
    for (let i = 0; i < 6; i++) cols += '<rect x="' + (146 + i * 22) + '" y="54" width="8" height="54" fill="#efe4c8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#blkg4)"/>' + stars(16) +
      '<rect x="120" y="40" width="160" height="80" fill="#d9caa4"/><path d="M114 40l86-18 86 18z" fill="#c9b894"/>' + cols +
      '<rect x="120" y="108" width="160" height="12" fill="#c9b894"/>' +
      '<circle cx="40" cy="96" r="34" fill="#1f4a2c"/><circle cx="360" cy="96" r="34" fill="#1f4a2c"/>' +
      '<path class="blk-bm" d="M120 120L60 0h40z" fill="' + GOLD + '" opacity=".3"/><path class="blk-bm blk-bm2" d="M280 120L340 0h-40z" fill="' + SKY + '" opacity=".3"/>' +
      '<rect x="90" y="132" width="220" height="44" fill="#26262e"/><rect x="84" y="126" width="232" height="8" fill="#3a3a44"/>' +
      '<rect x="120" y="150" width="60" height="22" fill="#111"/><circle cx="135" cy="161" r="7" fill="#444"/><circle cx="165" cy="161" r="7" fill="#444"/>' +
      '<rect x="234" y="140" width="4" height="34" fill="#888"/><circle cx="236" cy="138" r="4" fill="#ccc"/>' +
      '<g transform="translate(330 150)"><rect x="-22" y="20" width="44" height="10" rx="3" fill="#9aa2ab"/><path class="blk-jet" d="M-2 20v-26h4v26z" fill="#bfe8ff"/><path class="blk-jet" d="M-12 20q-4-14 4-18M12 20q4-14-4-18" stroke="#bfe8ff" stroke-width="2" fill="none"/></g>' +
      crowd,
      sky("blkg4", "#16133a", "#c8603a"));
  }

  /* 5. The corner: Gloria Dr and Florin Rd in the Pocket, by Kennedy High, BLACKALICIOUS tagged on the wall, the gold stepped Ziggurat across the river behind */
  const ZIG = '<g>' +
    '<rect x="150" y="62" width="120" height="14" fill="#c9a24a"/><rect x="162" y="48" width="96" height="14" fill="#d4ad55"/><rect x="174" y="34" width="72" height="14" fill="#ddb862"/><rect x="186" y="22" width="48" height="12" fill="#e6c370"/>' +
    [62, 48, 34, 22].map((y, r) => Array.from({ length: 8 - r * 2 }, (_, i) => '<rect class="blk-flk' + (i % 2 ? " blk-flk2" : "") + '" x="' + (156 + r * 12 + i * 14) + '" y="' + (y + 4) + '" width="8" height="5" fill="#3a6ea8"/>').join("")).join("") +
    '<rect x="40" y="56" width="70" height="20" fill="#2a2440"/><rect x="300" y="50" width="60" height="26" fill="#2a2440"/></g>';
  function blkcorner() {
    let bricks = "";
    for (let y = 76; y < 210; y += 13) for (let x = (y / 13) % 2 ? -18 : 0; x < 400; x += 36) bricks += '<rect x="' + x + '" y="' + y + '" width="34" height="11" fill="#3a2c22"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a1410"/>' +
      '<rect x="0" y="0" width="400" height="76" fill="url(#blkg5)"/>' + stars(8) + ZIG +
      '<rect x="0" y="76" width="400" height="134" fill="#241a14"/>' + bricks +
      '<rect x="0" y="74" width="400" height="4" fill="#2a1a14"/>' +
      tag("BLACKALICIOUS", 14, 132, 32, GOLD, -6) + tag("NIA", 40, 184, 36, SKY, -4) + tag("SAC TOWN", 150, 192, 26, RED, -8) +
      '<circle class="blk-sp" cx="140" cy="186" r="3" fill="' + RED + '" opacity=".8"/><circle class="blk-sp blk-sp2" cx="146" cy="182" r="2" fill="' + RED + '" opacity=".8"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#8d8b85"/><rect x="0" y="208" width="400" height="4" fill="#b1aea6"/>' +
      '<rect x="356" y="82" width="5" height="128" fill="#4a5058"/>' +
      '<rect x="300" y="80" width="96" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
      '<text x="348" y="95" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Gloria Dr</text>' +
      '<rect x="300" y="104" width="96" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
      '<text x="348" y="119" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Florin Rd</text>',
      sky("blkg5", "#0d0b22", "#4a2f55"));
  }

  window.SCENES = { blkstation, blkschool, blkdavis, blkplaza, blkcorner };
})();
