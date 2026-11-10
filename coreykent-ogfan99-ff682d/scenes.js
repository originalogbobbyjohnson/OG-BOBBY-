/* coreykent scenes (Regions: MORE OF THE SOUTH / Genres: country; Bixby, Tulsa County, Oklahoma). CSS classes prefixed ckbx- (the page's own anim-train is kept).
   Sources: K95 Tulsa "10 things you didn't know about Corey Kent" (born 1994, raised in Bixby just south of Tulsa; Western swing band at 11; family from Broken Bow, cattle, a cabin there);
   Rolling Stone "Corey Kent Was Paving Roads..." (worked paving roads before music took off; album Blacktop); KRMG "Bixby native rising country music star";
   Bixby: "The Garden Spot of Oklahoma", Green Corn Festival every June, original town center south of the Arkansas River; US-64 (Memorial Dr) crosses the Arkansas into Bixby;
   downtown streets Armstrong St / Needles Ave; Bixby Spartans high school football.
   No logos, no faces. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#e8b04a", RUST = "#b8502a", PINE = "#2f5a34", CREAM = "#f3ead8", DENIM = "#3a5a8a", BRICK = "#9a4430";
  const css = '<style>' +
    '@keyframes ckbxglow{0%,100%{opacity:.4}50%{opacity:1}}.ckbx-glow{animation:ckbxglow 2.2s ease-in-out infinite}.ckbx-g2{animation-delay:-1.1s}' +
    '@keyframes ckbxcloud{0%{transform:translateX(0)}100%{transform:translateX(40px)}}.ckbx-cl{animation:ckbxcloud 14s ease-in-out infinite alternate}' +
    '@keyframes ckbxcar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.ckbx-car{animation:ckbxcar 5s linear infinite}' +
    '@keyframes ckbxsway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.ckbx-sway{transform-box:fill-box;transform-origin:50% 100%;animation:ckbxsway 2.4s ease-in-out infinite}.ckbx-s2{animation-delay:-1.2s}' +
    '@keyframes ckbxsteam{0%{transform:translate(0,0) scale(.6);opacity:.7}100%{transform:translate(8px,-46px) scale(1.7);opacity:0}}.ckbx-st{transform-box:fill-box;transform-origin:50% 50%;animation:ckbxsteam 2.6s ease-out infinite}.ckbx-st2{animation-delay:-1.3s}' +
    '@keyframes ckbxroll{0%{transform:translateX(0)}50%{transform:translateX(-90px)}100%{transform:translateX(0)}}.ckbx-roll{animation:ckbxroll 7s ease-in-out infinite}' +
    '@keyframes ckbxspin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.ckbx-spin{transform-box:fill-box;transform-origin:50% 50%;animation:ckbxspin 1.6s linear infinite}' +
    '@keyframes ckbxriver{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.ckbx-rv{animation:ckbxriver 3s linear infinite}' +
    '@keyframes ckbxtail{0%,100%{transform:rotate(-15deg)}50%{transform:rotate(20deg)}}.ckbx-tail{transform-box:fill-box;transform-origin:0 0;animation:ckbxtail .6s ease-in-out infinite}' +
    '@keyframes ckbxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ckbx-sp{animation:ckbxspray 1.4s ease-out infinite}.ckbx-sp2{animation-delay:.45s}' +
    '@keyframes ckbxbeam{0%,100%{opacity:.06}50%{opacity:.16}}.ckbx-beam{animation:ckbxbeam 2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const pine = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-2" y="-8" width="4" height="10" fill="#4a3424"/><path d="M0 -60L-12 -36h6L-16 -18h8L-20 -6h40L8 -18h8L6 -36h6z" fill="' + c + '"/></g>';
  const pickup = (c) => '<rect x="0" y="6" width="70" height="20" rx="4" fill="' + c + '"/><path d="M40 6v-14h18l12 14z" fill="' + c + '"/><path d="M44 4v-9h12l8 9z" fill="#bfe0ee"/><rect x="2" y="2" width="36" height="5" fill="#222" opacity=".4"/>' +
    '<circle cx="16" cy="28" r="7" fill="#222"/><circle cx="16" cy="28" r="3" fill="#aaa"/><circle cx="56" cy="28" r="7" fill="#222"/><circle cx="56" cy="28" r="3" fill="#aaa"/><rect x="66" y="12" width="5" height="4" fill="#ffe9a0" class="ckbx-glow"/>';
  /* US route shield: white shield, black outline, black numbers */
  const usShield = (x, y, n) => '<g transform="translate(' + x + ' ' + y + ')"><path d="M-17 -18h34q3 6 0 12q4 14 -17 26q-21 -12 -17 -26q-3 -6 0 -12z" fill="#fff" stroke="#111" stroke-width="2"/><text x="0" y="6" text-anchor="middle" ' + font + ' font-size="15" fill="#111">' + n + '</text></g>';

  /* ROOM 0: US-64 on Memorial Drive, crossing the Arkansas River south out of Tulsa, the green guide sign for Bixby, a pickup rolling in (Bixby has no train; this is the drive in) */
  function ckbxhwy() {
    return svg(
      '<rect width="400" height="260" fill="url(#ckbx1)"/>' +
      '<g class="ckbx-cl"><ellipse cx="70" cy="28" rx="40" ry="8" fill="#fff" opacity=".55"/><ellipse cx="300" cy="20" rx="46" ry="8" fill="#fff" opacity=".45"/></g>' +
      /* far bank, cottonwoods */
      '<path d="M0 150q60 -10 120 -2t140 -4t140 4v20H0z" fill="#5a8a42"/>' +
      [16, 48, 80, 330, 362, 394].map((x, i) => '<ellipse cx="' + x + '" cy="' + (146 - (i % 2) * 4) + '" rx="16" ry="12" fill="' + (i % 2 ? "#3f6a38" : "#4a7a3e") + '"/>').join("") +
      /* the Arkansas River, wide and sandy-red */
      '<rect x="0" y="166" width="400" height="94" fill="#8a6a4a"/><g class="ckbx-rv">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (190 + (i % 3) * 18) + 'q10 -4 20 0" stroke="#c8a47a" stroke-width="2" fill="none"/>').join("") + '</g>' +
      '<ellipse cx="80" cy="236" rx="50" ry="6" fill="#d8bc8a"/><ellipse cx="320" cy="248" rx="60" ry="6" fill="#d8bc8a"/>' +
      /* the bridge deck and piers */
      '<rect x="0" y="176" width="400" height="12" fill="#a8a8a8"/><rect x="0" y="172" width="400" height="5" fill="#d8d8d8"/>' +
      [30, 110, 190, 270, 350].map(x => '<rect x="' + x + '" y="188" width="10" height="40" fill="#9a9a9a"/>').join("") +
      /* sign gantry */
      '<rect x="96" y="40" width="5" height="134" fill="#8a8e94"/><rect x="300" y="40" width="5" height="134" fill="#8a8e94"/><rect x="96" y="44" width="209" height="5" fill="#8a8e94"/>' +
      '<rect x="112" y="52" width="178" height="86" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' +
      usShield(148, 92, "64") +
      '<text x="176" y="78" ' + font + ' font-size="12" fill="#fff">SOUTH</text><text x="176" y="104" ' + font + ' font-size="20" fill="#fff">Bixby</text><text x="176" y="124" ' + font + ' font-size="10" fill="#fff">Memorial Dr</text>' +
      '<text x="20" y="34" ' + font + ' font-size="9" fill="#fff" opacity=".85">ARKANSAS RIVER  ·  SOUTH OF TULSA</text>' +
      /* the pickup rolling in */
      '<g class="anim-train"><g transform="translate(150 146)">' + pickup(DENIM) + '</g></g>' +
      '<g class="ckbx-car"><rect x="0" y="160" width="34" height="12" rx="3" fill="#e0e0e4"/><circle cx="8" cy="172" r="4" fill="#222"/><circle cx="26" cy="172" r="4" fill="#222"/></g>',
      sky("ckbx1", "#7fb8e0", "#f3d9a8"));
  }

  /* ROOM 1: the Garden Spot of Oklahoma: rows of sweet corn on the river bottom, a roadside stand for the Green Corn Festival, a red barn */
  function ckbxfarm() {
    const stalk = (x, y, s, cls) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="ckbx-sway ' + (cls || "") + '"><path d="M0 0v-46" stroke="#5a8a2a" stroke-width="3"/><path d="M0 -14q-14 -6 -20 -2M0 -24q14 -6 20 -2M0 -34q-12 -6 -16 -2" stroke="#6aa03a" stroke-width="3" fill="none"/><ellipse cx="4" cy="-30" rx="3" ry="7" fill="#f3d34a"/><path d="M0 -46l-4 -8M0 -46l4 -8M0 -46v-9" stroke="#d8b84a" stroke-width="1.5"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ckbx2)"/>' +
      '<circle cx="70" cy="58" r="24" fill="#ffd98a" class="ckbx-glow"/>' +
      '<path d="M0 132q100 -14 200 -4t200 0v132H0z" fill="#7aa04a"/>' +
      /* red barn and silo */
      '<rect x="290" y="94" width="60" height="44" fill="#a8302a"/><path d="M284 96l36 -26 36 26z" fill="#7a2420"/><rect x="310" y="110" width="20" height="28" fill="' + CREAM + '"/><path d="M310 110l20 28M330 110l-20 28" stroke="#a8302a" stroke-width="2"/>' +
      '<rect x="354" y="70" width="20" height="68" fill="#bbb"/><path d="M354 70q10 -14 20 0z" fill="#999"/>' +
      /* furrows */
      Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (150 + i * 18) + 'q200 -10 400 0" stroke="#5a7a32" stroke-width="2" fill="none"/>').join("") +
      Array.from({ length: 11 }, (_, i) => stalk(14 + i * 22, 150, .7, i % 2 ? "ckbx-s2" : "")).join("") +
      Array.from({ length: 9 }, (_, i) => stalk(24 + i * 26, 186, .9, i % 2 ? "" : "ckbx-s2")).join("") +
      /* the roadside stand */
      '<rect x="150" y="196" width="110" height="34" fill="#8a5a2a"/><path d="M144 196l12 -22h98l12 22z" fill="#c0522e"/><path d="M156 174h98" stroke="#fff" stroke-width="2" stroke-dasharray="8 8"/>' +
      '<rect x="160" y="182" width="90" height="12" fill="' + CREAM + '"/><text x="205" y="192" text-anchor="middle" ' + font + ' font-size="9" fill="#2a3a1a">GREEN CORN</text>' +
      [166, 186, 206, 226].map(x => '<g transform="translate(' + x + ' 200)"><rect width="16" height="10" fill="#6a4a2a"/>' + [3, 8, 13].map(c => '<ellipse cx="' + c + '" cy="0" rx="2.2" ry="5" fill="#6aa03a"/>').join("") + '</g>').join("") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">THE GARDEN SPOT OF OKLAHOMA</text>',
      sky("ckbx2", "#8fc8ea", "#f7e8c4"));
  }

  /* ROOM 2: the road crew: fresh blacktop going down on a two-lane, the steel-drum roller rolling back and forth, steam off the hot mix, orange cones */
  function ckbxpave() {
    return svg(
      '<rect width="400" height="260" fill="url(#ckbx3)"/>' +
      '<circle cx="320" cy="56" r="22" fill="#fff2b0" class="ckbx-glow"/>' +
      '<path d="M0 120q100 -12 200 -2t200 -4v146H0z" fill="#8aa84a"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (10 + i * 46) + '" y="112" width="3" height="20" fill="#7a5a3a"/>').join("") + '<path d="M0 118h400M0 126h400" stroke="#8a8e94" stroke-width="1" stroke-dasharray="3 2"/>' +
      /* old gravel road on the left, fresh blacktop on the right */
      '<path d="M0 150h400v80H0z" fill="#b8a88a"/><path d="M140 150h260v80H140z" fill="#26262a"/><path d="M140 150l-14 40 14 40" fill="#26262a"/>' +
      '<path d="M150 190h250" stroke="#3a3a40" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="ckbx-st"><ellipse cx="220" cy="148" rx="8" ry="5" fill="#ddd" opacity=".7"/></g><g class="ckbx-st ckbx-st2"><ellipse cx="300" cy="150" rx="8" ry="5" fill="#ddd" opacity=".7"/></g><g class="ckbx-st"><ellipse cx="370" cy="146" rx="7" ry="4" fill="#ddd" opacity=".6"/></g>' +
      /* the roller */
      '<g class="ckbx-roll"><g transform="translate(250 150)">' +
      '<rect x="0" y="10" width="70" height="26" rx="4" fill="#f0b02a"/><rect x="22" y="-18" width="30" height="28" fill="none" stroke="#333" stroke-width="3"/><rect x="18" y="-22" width="38" height="5" fill="#f0b02a"/><rect x="28" y="0" width="16" height="10" fill="#333"/>' +
      '<rect x="-30" y="22" width="34" height="34" rx="17" fill="#8a8e94" stroke="#555" stroke-width="2"/><rect x="62" y="22" width="34" height="34" rx="17" fill="#8a8e94" stroke="#555" stroke-width="2"/>' +
      '<g transform="translate(-13 39)"><g class="ckbx-spin"><path d="M-14 0h28M0 -14v28" stroke="#555" stroke-width="2"/></g></g><g transform="translate(79 39)"><g class="ckbx-spin"><path d="M-14 0h28M0 -14v28" stroke="#555" stroke-width="2"/></g></g>' +
      '<rect x="-14" y="14" width="20" height="6" fill="#f0b02a"/><circle cx="37" cy="-24" r="3" fill="#ff7a2a" class="ckbx-glow"/></g></g>' +
      /* cones and the shovel */
      [30, 70, 110].map(x => '<g transform="translate(' + x + ' 236)"><path d="M-8 0l8 -22 8 22z" fill="#ff6a1a"/><path d="M-5 -8h10" stroke="#fff" stroke-width="3"/><rect x="-11" y="0" width="22" height="4" fill="#ff6a1a"/></g>').join("") +
      '<path d="M60 150l-12 -46" stroke="#7a5a3a" stroke-width="3"/><path d="M60 150l-6 10 14 -2z" fill="#8a8e94"/>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">FRESH BLACKTOP  ·  TULSA COUNTY</text>',
      sky("ckbx3", "#9fd0ee", "#f3e2b8"));
  }

  /* ROOM 3: Broken Bow country: the cabin under the Southeast Oklahoma pines, folding chairs by the fire ring, the Mountain Fork running clear, the family's cattle */
  function ckbxpines() {
    return svg(
      '<rect width="400" height="260" fill="url(#ckbx4)"/>' +
      '<path d="M0 110q60 -40 130 -20t140 -16t130 10v60H0z" fill="#3a5a4a" opacity=".7"/>' +
      [0, 30, 60, 92, 300, 330, 362, 396].map((x, i) => pine(x, 160 - (i % 3) * 6, 1.3 + (i % 2) * .3, i % 2 ? PINE : "#24482a")).join("") +
      '<path d="M0 156h400v104H0z" fill="#4a6a32"/>' +
      /* cabin */
      '<rect x="140" y="96" width="120" height="64" fill="#7a4a2a"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M140 ' + (102 + i * 9) + 'h120" stroke="#5a3418" stroke-width="2"/>').join("") +
      '<path d="M130 100l70 -40 70 40z" fill="#4a3a2a"/><rect x="226" y="58" width="14" height="30" fill="#7a6a5a"/>' +
      '<g class="ckbx-st"><circle cx="233" cy="52" r="6" fill="#ccc" opacity=".7"/></g><g class="ckbx-st ckbx-st2"><circle cx="235" cy="48" r="5" fill="#ddd" opacity=".6"/></g>' +
      '<rect x="186" y="124" width="26" height="36" fill="#3a2418"/><rect x="152" y="112" width="24" height="20" fill="#ffd98a" class="ckbx-glow"/><rect x="224" y="112" width="24" height="20" fill="#ffd98a" class="ckbx-glow ckbx-g2"/>' +
      '<rect x="136" y="160" width="128" height="6" fill="#5a3418"/>' +
      /* the river */
      '<path d="M0 214q100 -16 200 0t200 -6v20q-100 10 -200 -2t-200 4z" fill="#4a9ac0"/><g class="ckbx-rv">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' 218q10 -3 20 0" stroke="#cfe8f4" stroke-width="1.5" fill="none"/>').join("") + '</g>' +
      /* fire ring and folding chairs */
      '<ellipse cx="110" cy="190" rx="16" ry="5" fill="#666"/><path d="M102 188q8 -20 16 0z" fill="#f0a83a" class="ckbx-glow"/><path d="M106 188q4 -10 8 0z" fill="#ffe08a"/>' +
      [[66, DENIM], [146, RUST]].map(c => '<g transform="translate(' + c[0] + ' 178)"><rect x="0" y="0" width="16" height="14" fill="' + c[1] + '"/><rect x="0" y="12" width="16" height="4" fill="' + c[1] + '"/><path d="M0 16l14 12M16 16l-14 12" stroke="#ccc" stroke-width="1.5"/></g>').join("") +
      /* cattle */
      [[300, 186, "#5a3a24"], [344, 192, "#222"]].map(c => '<g transform="translate(' + c[0] + ' ' + c[1] + ')"><ellipse cx="0" cy="0" rx="18" ry="9" fill="' + c[2] + '"/><rect x="14" y="-12" width="10" height="10" rx="3" fill="' + c[2] + '"/><rect x="-12" y="6" width="4" height="10" fill="' + c[2] + '"/><rect x="8" y="6" width="4" height="10" fill="' + c[2] + '"/><path class="ckbx-tail" d="M-18 -2l-6 10" stroke="' + c[2] + '" stroke-width="2"/></g>').join("") +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">SOUTHEAST OKLAHOMA PINES</text>',
      sky("ckbx4", "#f0a86a", "#ffe0b0"));
  }

  /* ROOM 4: his corner in old downtown Bixby, Armstrong St and Needles Ave, brick wall with his name, Friday night lights of the Spartans' stadium behind */
  function ckbxcorner() {
    const tower = (x) => '<g transform="translate(' + x + ' 0)"><rect x="-2" y="40" width="4" height="100" fill="#8a8e94"/><rect x="-16" y="30" width="32" height="14" fill="#555"/>' +
      [-12, -4, 4, 12].map(b => '<circle cx="' + b + '" cy="37" r="3" fill="#fff8d0" class="ckbx-glow"/>').join("") + '<path d="M-14 44l-30 96h88l-30 -96z" fill="#fff8d0" class="ckbx-beam"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ckbx5)"/>' +
      [[60, 30], [140, 20], [330, 26], [370, 14]].map(s => '<circle cx="' + s[0] + '" cy="' + s[1] + '" r="1.4" fill="#fff"/>').join("") +
      /* stadium bowl behind */
      tower(230) + tower(370) +
      '<path d="M190 120h210v40H190z" fill="#2a2e3a"/>' + Array.from({ length: 4 }, (_, i) => '<path d="M190 ' + (126 + i * 8) + 'h210" stroke="#4a4e5a" stroke-width="2"/>').join("") +
      '<rect x="276" y="70" width="64" height="34" fill="#111" stroke="#555" stroke-width="2"/><text x="292" y="84" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">HOME</text><text x="324" y="84" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">GUEST</text>' +
      '<rect x="282" y="88" width="20" height="12" fill="#300"/><rect x="314" y="88" width="20" height="12" fill="#300"/><text x="292" y="98" text-anchor="middle" ' + font + ' font-size="10" fill="#ff5a3a" class="ckbx-glow">28</text><text x="324" y="98" text-anchor="middle" ' + font + ' font-size="10" fill="#ff5a3a">21</text>' +
      '<rect x="306" y="104" width="4" height="16" fill="#555"/>' +
      /* storefront row */
      '<rect x="180" y="150" width="220" height="40" fill="#7a4a3a"/>' + [196, 246, 296, 346].map(x => '<rect x="' + x + '" y="160" width="34" height="22" fill="#ffd98a" opacity=".75" class="ckbx-glow ' + (x % 100 ? "ckbx-g2" : "") + '"/>').join("") +
      '<path d="M0 190h400v70H0z" fill="#5a5e66"/><path d="M0 222h400" stroke="#f3d34a" stroke-width="2" stroke-dasharray="16 12"/>' +
      /* brick wall with the tag */
      '<clipPath id="ckbxwall"><rect x="0" y="96" width="156" height="124"/></clipPath><rect x="0" y="96" width="156" height="124" fill="' + BRICK + '"/><g clip-path="url(#ckbxwall)">' +
      Array.from({ length: 11 }, (_, r) => Array.from({ length: 9 }, (_, c) => '<rect x="' + (c * 20 + (r % 2 ? 0 : -10)) + '" y="' + (96 + r * 12) + '" width="19" height="11" fill="none" stroke="#7a3020" stroke-width="1"/>').join("")).join("") + '</g>' +
      tag("COREY", 12, 146, 32, GOLD, -8) + tag("KENT", 26, 190, 34, "#fff", -6) +
      '<g class="ckbx-sp"><circle cx="134" cy="150" r="3" fill="' + GOLD + '"/></g><g class="ckbx-sp ckbx-sp2"><circle cx="140" cy="160" r="2.5" fill="#fff"/></g>' +
      /* sign pole */
      '<rect x="174" y="60" width="5" height="160" fill="#556"/>' + sign(130, 66, 96, "Armstrong St") + sign(150, 92, 96, "Needles Ave") +
      /* the pickup parked at the curb */
      '<g transform="translate(250 196)">' + pickup(RUST) + '</g>' +
      '<text x="290" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">BIXBY, OKLAHOMA</text>',
      sky("ckbx5", "#141a32", "#3a3a5a"));
  }

  window.SCENES = { ckbxhwy, ckbxfarm, ckbxpave, ckbxpines, ckbxcorner };
})();
