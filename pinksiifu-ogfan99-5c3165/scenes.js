/* pinksiifu scenes (Regions tab: More of the South; Ensley, Birmingham AL). 400 x 260 SVGs. CSS classes and ids prefixed sii- (the page's own anim-train is kept).
   0 the MAX Route 5 (Central Station - Ensley/Wylam) bus pulling up to the Avenue F & 20th St Ensley stop.
   1 Sloss Furnaces: the rusted blast furnaces and the row of tall smokestacks that made Birmingham "the Magic City", steam rolling out.
   2 Tuxedo Junction in Ensley: the old streetcar crossing and the brick dance hall upstairs that Erskine Hawkins' song made famous, jazz notes floating out.
   3 Railroad Park downtown: the green lawn and pond with the downtown towers behind, a freight train rolling along the elevated tracks.
   4 19th St Ensley & Avenue E: green signs, PINK SIIFU tagged on the brick, the old Bank of Ensley's columns on the corner, Vulcan up on Red Mountain behind.
   No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes siiflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.sii-flk{animation:siiflick 2.6s infinite}' +
    '@keyframes siiglow{0%,100%{opacity:.45}50%{opacity:1}}.sii-glow{animation:siiglow 1.6s ease-in-out infinite}.sii-g2{animation-delay:-.8s}' +
    '@keyframes siibounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.sii-bn{animation:siibounce .6s ease-in-out infinite}.sii-b2{animation-delay:-.3s}.sii-b3{animation-delay:-.15s}' +
    '@keyframes siisteam{0%{transform:translate(0,0) scale(.6);opacity:.8}100%{transform:translate(14px,-70px) scale(1.6);opacity:0}}.sii-st{transform-box:fill-box;transform-origin:50% 50%;animation:siisteam 4s ease-out infinite}.sii-s2{animation-delay:-1.3s}.sii-s3{animation-delay:-2.6s}' +
    '@keyframes siinote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-60px);opacity:0}}.sii-nt{animation:siinote 3s ease-out infinite}.sii-n2{animation-delay:-1s}.sii-n3{animation-delay:-2s}' +
    '@keyframes siifreight{0%{transform:translateX(420px)}100%{transform:translateX(-620px)}}.sii-fr{animation:siifreight 11s linear infinite}' +
    '@keyframes siiduck{0%,100%{transform:translateX(0)}50%{transform:translateX(30px)}}.sii-dk{animation:siiduck 6s ease-in-out infinite}' +
    '@keyframes siicar{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.sii-car{animation:siicar 7s linear infinite}' +
    '@keyframes siibird{0%{transform:translate(0,0)}100%{transform:translate(-440px,-24px)}}.sii-bd{animation:siibird 12s linear infinite}' +
    '@keyframes siispray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sii-sp{animation:siispray 1.4s ease-out infinite}.sii-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const person = (x, y, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (y - 22) + '" r="6" fill="' + c + '"/><rect x="' + (x - 6) + '" y="' + (y - 16) + '" width="12" height="16" rx="4" fill="' + c + '"/></g>';
  const PINK = "#ff6fb5", GOLD = "#f2c14e", TEAL = "#5fd3c6", MAXB = "#1d4f91", MAXG = "#7ab648";

  /* 0. Avenue F & 20th St Ensley: the MAX bus stop sign with the 5, old two-story brick storefronts of the Ensley business district, the white MAX bus pulling in */
  function siistop() {
    const bus = '<g class="anim-train"><rect x="20" y="128" width="290" height="76" rx="10" fill="#f4f6f7" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (34 + i * 38) + '" y="140" width="30" height="28" rx="3" fill="#22313e"/>').join("") +
      '<rect x="270" y="138" width="36" height="34" rx="4" fill="#22313e"/>' +
      '<path d="M20 186h290v-8q-120 -14 -290 6z" fill="' + MAXB + '"/><path d="M20 190h290v-4q-140 -8 -290 2z" fill="' + MAXG + '"/>' +
      '<rect x="222" y="130" width="84" height="10" rx="2" fill="#111"/><text x="264" y="138" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">5  ENSLEY-WYLAM</text>' +
      '<circle cx="72" cy="206" r="12" fill="#222"/><circle cx="72" cy="206" r="5" fill="#9aa1a8"/><circle cx="254" cy="206" r="12" fill="#222"/><circle cx="254" cy="206" r="5" fill="#9aa1a8"/>' +
      '<circle cx="307" cy="190" r="4" fill="#fff6c2"/></g>';
    const store = (x, w, c, aw) => '<rect x="' + x + '" y="60" width="' + w + '" height="84" fill="' + c + '"/><rect x="' + x + '" y="56" width="' + w + '" height="6" fill="#d9cdb4"/>' +
      Array.from({ length: Math.floor(w / 30) }, (_, i) => '<rect x="' + (x + 8 + i * 30) + '" y="70" width="18" height="24" fill="#2b2a33"/>').join("") +
      '<path d="M' + x + ' 104h' + w + 'l-6 10h' + (12 - w) + 'z" fill="' + aw + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sii0)"/>' +
      '<circle cx="66" cy="32" r="14" fill="#fff4c9" opacity=".9"/>' +
      store(0, 120, "#9a5a3e", PINK) + store(120, 96, "#b07a4e", TEAL) + store(216, 120, "#8a4a36", GOLD) + store(336, 64, "#a46a4a", PINK) +
      '<rect x="0" y="144" width="400" height="10" fill="#cfcac0"/><rect x="0" y="154" width="400" height="106" fill="#3a3d42"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 44) + '" y="236" width="24" height="4" fill="#f7f3ea"/>').join("") +
      /* the stop sign post */
      '<rect x="350" y="54" width="5" height="96" fill="#5a646e"/><rect x="330" y="44" width="46" height="46" rx="4" fill="#fff" stroke="' + MAXB + '" stroke-width="3"/>' +
      '<text x="353" y="62" text-anchor="middle" ' + font + ' font-size="11" fill="' + MAXB + '">MAX</text><rect x="334" y="66" width="38" height="3" fill="' + MAXG + '"/>' +
      '<rect x="341" y="72" width="24" height="16" rx="3" fill="' + MAXB + '"/><text x="353" y="85" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">5</text>' +
      '<rect x="334" y="94" width="38" height="14" rx="2" fill="#111"/><text x="353" y="104" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a" class="sii-flk">4 MIN</text>' +
      bus +
      sign(98, 10, 128, "AVENUE F") + sign(232, 10, 92, "20TH ST"),
      sky("sii0", "#8cc0e0", "#f6dcc0"));
  }

  /* 1. Sloss Furnaces: the two big rust-red blast furnaces, the row of tall black smokestacks, pipes and catwalks, steam rolling up into a sunset */
  function siisloss() {
    const stack = (x, h) => '<rect x="' + x + '" y="' + (176 - h) + '" width="12" height="' + h + '" fill="#2a2224"/><rect x="' + (x - 1) + '" y="' + (176 - h) + '" width="14" height="4" fill="#3a3032"/>';
    const furnace = (x) => '<path d="M' + x + ' 176v-80q0 -10 10 -14v-22h24v22q10 4 10 14v80z" fill="#8a3e22"/><path d="M' + (x + 10) + ' 82v-22h24v22" fill="none" stroke="#5a2410" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + x + ' ' + (100 + i * 12) + 'h44" stroke="#6a2c16" stroke-width="1.5"/>').join("") +
      '<rect x="' + (x + 14) + '" y="40" width="16" height="22" fill="#5a2a1a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sii1)"/>' +
      '<circle cx="320" cy="120" r="30" fill="#ffb36a" opacity=".85"/>' +
      [30, 48, 66, 84, 102, 120, 138].map((x, i) => stack(x, 120 - (i % 3) * 10)).join("") +
      furnace(170) + furnace(250) +
      '<path d="M214 100h36M150 120h20M294 110h40" stroke="#5a3a2a" stroke-width="6"/>' +
      '<path d="M150 140h200" stroke="#3a3032" stroke-width="3"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M' + (150 + i * 20) + ' 140v-10" stroke="#3a3032" stroke-width="2"/>').join("") +
      '<rect x="0" y="176" width="400" height="84" fill="#3a2e2a"/><rect x="0" y="176" width="400" height="6" fill="#5a4038"/>' +
      '<path d="M0 214h400M0 226h400" stroke="#7a6a60" stroke-width="3"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20 + 4) + '" y="210" width="6" height="20" fill="#4a3a32"/>').join("") +
      /* steam */
      '<g fill="#f3ece6">' + [[36, 54], [72, 64], [192, 40], [272, 40]].map(([x, y], i) => '<circle cx="' + x + '" cy="' + y + '" r="10" class="sii-st' + ["", " sii-s2", " sii-s3", " sii-s2"][i] + '"/>').join("") + '</g>' +
      '<rect x="306" y="150" width="70" height="26" rx="2" fill="#2a2224"/><text x="341" y="167" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" class="sii-glow">SLOSS</text>' +
      person(330, 206, "#2a2a32", "sii-bn") + person(348, 206, "#3a2a40", "sii-bn sii-b2"),
      sky("sii1", "#3a2a52", "#f08a5a"));
  }

  /* 2. Tuxedo Junction: the two-story brick building on the corner with the dance hall upstairs glowing, the old streetcar rails crossing in the street, jazz notes floating out */
  function siituxedo() {
    return svg(
      '<rect width="400" height="260" fill="url(#sii2)"/>' +
      '<circle cx="60" cy="34" r="12" fill="#f2efe0" opacity=".85"/>' +
      '<rect x="0" y="100" width="80" height="94" fill="#4a3f46"/><rect x="320" y="92" width="80" height="102" fill="#3e3a4a"/>' +
      /* the hall */
      '<rect x="80" y="50" width="240" height="144" fill="#9a4a34"/><rect x="76" y="44" width="248" height="8" fill="#d8c8a8"/>' +
      [96, 150, 204, 258].map(x => '<rect x="' + x + '" y="62" width="40" height="44" fill="#1d1418"/><rect x="' + x + '" y="62" width="40" height="44" fill="' + GOLD + '" opacity=".45" class="sii-glow"/>').join("") +
      '<g fill="#1d1418">' + [104, 122, 160, 178, 212, 232, 266, 284].map((x, i) => '<g class="sii-bn' + [" sii-b2", "", " sii-b3", ""][i % 4] + '"><circle cx="' + x + '" cy="88" r="4"/><rect x="' + (x - 4) + '" y="92" width="8" height="14" rx="3"/></g>').join("") + '</g>' +
      '<rect x="86" y="112" width="228" height="20" fill="#1b1416"/><text x="200" y="127" text-anchor="middle" ' + font + ' font-size="12" fill="' + PINK + '" letter-spacing="3" class="sii-flk">TUXEDO JUNCTION</text>' +
      '<rect x="96" y="140" width="64" height="54" fill="#2b2226"/><rect x="240" y="140" width="64" height="54" fill="#2b2226"/><rect x="180" y="140" width="40" height="54" fill="#3b2a22"/>' +
      '<rect x="96" y="140" width="64" height="54" fill="' + TEAL + '" opacity=".25" class="sii-glow sii-g2"/><rect x="240" y="140" width="64" height="54" fill="' + PINK + '" opacity=".25" class="sii-glow"/>' +
      /* notes */
      '<g fill="' + GOLD + '"><text x="120" y="60" font-size="16" class="sii-nt">♪</text><text x="200" y="56" font-size="14" class="sii-nt sii-n2">♫</text><text x="280" y="60" font-size="16" class="sii-nt sii-n3">♪</text></g>' +
      /* street with the two streetcar lines crossing */
      '<rect x="0" y="194" width="400" height="12" fill="#7a746e"/><rect x="0" y="206" width="400" height="54" fill="#2c2d31"/>' +
      '<path d="M0 222h400M0 230h400" stroke="#8a8f96" stroke-width="2"/><path d="M150 206l-60 54M162 206l-60 54" stroke="#8a8f96" stroke-width="2"/>' +
      '<rect x="20" y="166" width="54" height="26" rx="2" fill="#2f4a3a" stroke="#d8c8a8" stroke-width="1.5"/><text x="47" y="177" text-anchor="middle" ' + font + ' font-size="6.5" fill="#f7f3ea">HISTORIC</text><text x="47" y="187" text-anchor="middle" ' + font + ' font-size="6.5" fill="#f7f3ea">ENSLEY</text>' +
      sign(270, 6, 124, "ENSLEY AVE"),
      sky("sii2", "#141a30", "#4a3050"));
  }

  /* 3. Railroad Park: the green lawn and the pond with ducks, the downtown Birmingham towers behind, a long freight train rolling over the elevated tracks */
  function siipark() {
    const tower = (x, w, h, c) => '<rect x="' + x + '" y="' + (120 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
      Array.from({ length: Math.floor(h / 12) }, (_, r) => '<path d="M' + (x + 3) + ' ' + (126 - h + r * 12) + 'h' + (w - 6) + '" stroke="#e8eef4" stroke-width="1" opacity=".35"/>').join("");
    const car = (x, c) => '<rect x="' + x + '" y="96" width="70" height="22" rx="2" fill="' + c + '"/><circle cx="' + (x + 12) + '" cy="120" r="4" fill="#222"/><circle cx="' + (x + 58) + '" cy="120" r="4" fill="#222"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sii3)"/>' +
      tower(30, 30, 80, "#6a7a8e") + tower(70, 24, 60, "#8a8f96") + tower(110, 36, 96, "#5a6a7e") + tower(160, 22, 70, "#7a8a9a") + tower(200, 34, 88, "#4a5a6e") + tower(250, 26, 64, "#8a9aaa") + tower(290, 40, 76, "#6a6f80") + tower(340, 30, 56, "#7a7f8a") +
      '<path d="M110 24l18 -10l18 10z" fill="#5a6a7e"/>' +
      /* the elevated tracks + freight */
      '<rect x="0" y="122" width="400" height="10" fill="#6a5a50"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 42 + 10) + '" y="132" width="8" height="26" fill="#5a4a42"/>').join("") +
      '<g class="sii-fr">' + car(0, "#8a3e22") + car(74, "#1d4f91") + car(148, "#5a6a3a") + car(222, "#8a3e22") + car(296, "#c9a24a") + car(370, "#5a5a5a") +
      '<rect x="444" y="88" width="64" height="30" rx="3" fill="#2a2a32"/><rect x="490" y="80" width="18" height="14" fill="#2a2a32"/><circle cx="500" cy="100" r="3" fill="#fff6c2"/></g>' +
      /* lawn + pond */
      '<path d="M0 158h400v102h-400z" fill="#5fa35a"/><path d="M0 158q200 -10 400 0" fill="#6fb36a"/>' +
      '<ellipse cx="250" cy="210" rx="110" ry="28" fill="#5a9ac8"/><ellipse cx="250" cy="206" rx="96" ry="20" fill="#7ab8e0" opacity=".6"/>' +
      '<g class="sii-dk"><ellipse cx="220" cy="210" rx="8" ry="4" fill="#f7f3ea"/><circle cx="227" cy="205" r="3" fill="#f7f3ea"/><path d="M230 205l4 1" stroke="' + GOLD + '" stroke-width="2"/></g>' +
      '<path d="M40 200q20 -30 40 0z" fill="#3f7f3a"/><rect x="58" y="200" width="4" height="14" fill="#5a3a24"/>' +
      person(100, 226, PINK, "sii-bn") + person(118, 226, "#2a3340", "sii-bn sii-b2") +
      sign(6, 6, 134, "RAILROAD PARK"),
      sky("sii3", "#7ab3d8", "#f3e4cc"));
  }

  /* 4. 19th St Ensley & Avenue E: green signs, PINK SIIFU tagged on the brick, the Bank of Ensley's pale columns on the corner, Vulcan's silhouette on his tall pedestal on Red Mountain behind */
  function siicorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sii4)"/>' +
      '<g class="sii-bd"><path d="M420 40q5 -5 10 0q5 -5 10 0" stroke="#2a2030" stroke-width="2" fill="none"/></g>' +
      /* Red Mountain + Vulcan (a dark silhouette, no face) */
      '<path d="M0 120q120 -40 220 -30t180 20v30h-400z" fill="#4a3a5a"/>' +
      '<rect x="214" y="44" width="12" height="48" fill="#3a2e44"/><rect x="210" y="88" width="20" height="6" fill="#3a2e44"/>' +
      '<g fill="#2a2234"><circle cx="220" cy="22" r="4"/><path d="M215 26h10l2 10h-14z"/><rect x="215" y="36" width="10" height="8"/><path d="M225 28l10 -12l2 2l-9 13z"/><rect x="233" y="10" width="2" height="10"/></g>' +
      /* the bank: pale classical front */
      '<rect x="128" y="96" width="150" height="120" fill="#e6dccb"/><path d="M122 96l81 -22l81 22z" fill="#d6cab4"/><rect x="122" y="94" width="162" height="6" fill="#c9bca4"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (140 + i * 28) + '" y="104" width="10" height="92" fill="#f4eee2"/>').join("") +
      '<rect x="128" y="196" width="150" height="20" fill="#cfc3ac"/><rect x="186" y="150" width="34" height="46" fill="#3a3030"/>' +
      /* the wall */
      '<rect x="0" y="120" width="124" height="96" fill="#8a3f30"/>' +
      Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (128 + r * 12) + 'h124" stroke="#6a2e22" stroke-width="1"/>').join("") +
      tag("PINK", 10, 160, 30, PINK, -8) + tag("SIIFU", 14, 200, 30, GOLD, -6) +
      '<g class="sii-sp"><circle cx="112" cy="182" r="2" fill="' + PINK + '"/></g><g class="sii-sp sii-sp2"><circle cx="116" cy="176" r="1.6" fill="' + GOLD + '"/></g>' +
      '<rect x="300" y="132" width="100" height="84" fill="#3a3540"/>' + tag("GKFAM", 310, 172, 20, TEAL, -8) + tag("ENSLEY", 306, 204, 20, PINK, -6) +
      /* sidewalk + street */
      '<rect x="0" y="216" width="400" height="10" fill="#8c8780"/><rect x="0" y="226" width="400" height="34" fill="#2e2f33"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 48) + '" y="242" width="26" height="3" fill="#f7f3ea"/>').join("") +
      '<rect x="292" y="104" width="5" height="114" fill="#4a4f55"/>' + sign(244, 84, 100, "19TH ST") + sign(240, 108, 108, "AVENUE E") +
      '<g class="sii-car"><rect x="0" y="228" width="66" height="16" rx="5" fill="' + PINK + '"/><rect x="12" y="220" width="36" height="11" rx="4" fill="#d0508e"/><circle cx="14" cy="246" r="5" fill="#111"/><circle cx="52" cy="246" r="5" fill="#111"/></g>',
      sky("sii4", "#3a2c52", "#f2a07a"));
  }

  window.SCENES = { siistop, siisloss, siituxedo, siipark, siicorner };
})();
