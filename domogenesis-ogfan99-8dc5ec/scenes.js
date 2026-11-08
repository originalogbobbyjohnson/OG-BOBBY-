/* domogenesis scenes (Regions tab: Los Angeles + SoCal; Inglewood, born and raised; Odd Future). CSS classes prefixed dmg-.
   1 Metro K Line, Fairview Heights station in Inglewood: at-grade island platform by Florence Ave and West Blvd, a light-rail train sliding in, black sign with the pink K bullet.
   2 Camp Flog Gnaw Carnival (Odd Future's yearly carnival): the Ferris wheel turning, striped tents, string lights.
   3 Tempe, Arizona (he left Arizona State to rap full time): the gold A on the desert butte, saguaros, the stadium bowl below.
   4 The studio (Genesis, No Idols with The Alchemist): a mic with a pop filter, a drum machine's pads blinking, VU needles bouncing, a crate of records.
   5 Florence Ave and West Blvd in Inglewood: green signs, DOMO GENESIS tagged with WOLF GANG, DAPPER and DOMS, Inglewood's new silver arena dome behind.
   400 x 260 SVGs. No logos, no faces. No 9s are drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dmgtrain{0%{transform:translateX(430px)}45%,100%{transform:translateX(0)}}.dmg-train{animation:dmgtrain 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes dmgspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.dmg-wheel{transform-box:fill-box;transform-origin:50% 50%;animation:dmgspin 16s linear infinite}' +
    '@keyframes dmgcounter{from{transform:rotate(0)}to{transform:rotate(-360deg)}}' +
    '@keyframes dmgtw{0%,100%{opacity:.3}50%{opacity:1}}.dmg-tw{animation:dmgtw 1.6s ease-in-out infinite}.dmg-t2{animation-delay:-.8s}.dmg-t3{animation-delay:-.4s}' +
    '@keyframes dmgheat{0%,100%{transform:translateY(0);opacity:.35}50%{transform:translateY(-3px);opacity:.7}}.dmg-heat{animation:dmgheat 2.6s ease-in-out infinite}' +
    '@keyframes dmgvu{0%,100%{transform:rotate(-35deg)}30%{transform:rotate(20deg)}60%{transform:rotate(-5deg)}80%{transform:rotate(30deg)}}.dmg-vu{transform-box:fill-box;transform-origin:50% 100%;animation:dmgvu 1.4s ease-in-out infinite}.dmg-v2{animation-delay:-.5s}' +
    '@keyframes dmgpad{0%,100%{opacity:.35}10%{opacity:1}}.dmg-pad{animation:dmgpad 1.2s steps(1) infinite}.dmg-p2{animation-delay:-.3s}.dmg-p3{animation-delay:-.6s}.dmg-p4{animation-delay:-.9s}' +
    '@keyframes dmgspray{0%,100%{transform:rotate(-30deg)}50%{transform:rotate(30deg)}}.dmg-spray{transform-box:fill-box;transform-origin:50% 100%;animation:dmgspray 3s ease-in-out infinite}' +
    '@keyframes dmgsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dmg-sp{animation:dmgsp 1.4s ease-out infinite}.dmg-sp2{animation-delay:.45s}' +
    '@keyframes dmgcar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.dmg-car{animation:dmgcar 6.5s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const MINT = "#7fc8a9", ORANGE = "#e8a33d", LILAC = "#c2a2e0", KPINK = "#e56db1";
  const palm = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q-4 -40 4 -80" stroke="#4a3626" stroke-width="5" fill="none"/>' +
    '<path d="M4 -80q-22 -6 -36 8q18 -4 36 -8zM4 -80q22 -8 38 6q-20 -2 -38 -6zM4 -80q-12 -18 -30 -18q16 8 30 18zM4 -80q12 -20 30 -16q-16 6 -30 16z" fill="#2c5e3a"/></g>';

  /* 1. K Line, Fairview Heights (at-grade island platform) */
  function dmgstation() {
    const car = (x) => '<rect x="' + x + '" y="96" width="150" height="60" rx="8" fill="#dfe3e6" stroke="#8d949b" stroke-width="2"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (x + 12 + i * 34) + '" y="106" width="26" height="22" rx="3" fill="#25313c"/>').join("") +
      '<rect x="' + x + '" y="134" width="150" height="6" fill="' + KPINK + '"/><rect x="' + x + '" y="140" width="150" height="3" fill="#7a7f86"/>';
    const train = '<g class="dmg-train">' + car(30) + car(184) + '<path d="M110 96l10 -14l10 14M260 96l10 -14l10 14" stroke="#555" stroke-width="2" fill="none"/>' +
      '<rect x="34" y="98" width="60" height="7" rx="1" fill="#111"/><text x="64" y="103.6" text-anchor="middle" ' + font + ' font-size="5" fill="' + KPINK + '">EXPO/CRENSHAW</text><circle cx="34" cy="148" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dmg1)"/>' +
      /* low Inglewood skyline, power poles */
      '<rect x="0" y="92" width="60" height="40" fill="#b9a68f"/><rect x="64" y="100" width="44" height="32" fill="#c8b49a"/><rect x="300" y="86" width="70" height="46" fill="#b9a68f"/><rect x="372" y="98" width="28" height="34" fill="#c8b49a"/>' +
      palm(140, 96, 0.7) + palm(260, 92, 0.8) +
      '<path d="M0 72h400" stroke="#333" stroke-width="1.5"/><path d="M0 80h400" stroke="#333" stroke-width="1"/>' + [60, 200, 340].map(x => '<rect x="' + (x - 2) + '" y="66" width="4" height="30" fill="#6b5a48"/>').join("") +
      train +
      '<rect x="0" y="156" width="400" height="8" fill="#4d4f52"/><path d="M0 160h400" stroke="#9a9a9a" stroke-width="2"/>' +
      /* island platform */
      '<rect x="0" y="164" width="400" height="40" fill="#bdb7aa"/><rect x="0" y="164" width="400" height="4" fill="#f1d14a"/>' +
      '<rect x="0" y="204" width="400" height="56" fill="#5a5c5f"/><path d="M0 230h400" stroke="#f1e6a0" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* canopy + sign */
      '<rect x="138" y="174" width="4" height="30" fill="#777"/><rect x="258" y="174" width="4" height="30" fill="#777"/>' +
      '<rect x="110" y="18" width="180" height="36" rx="3" fill="#111" stroke="#444" stroke-width="2"/><circle cx="134" cy="36" r="12" fill="' + KPINK + '"/><text x="134" y="41.5" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">K</text>' +
      '<text x="152" y="42" ' + font + ' font-size="15.5" fill="#fff">Fairview Heights</text><rect x="198" y="54" width="4" height="10" fill="#555"/>',
      sky("dmg1", "#f4b07a", "#fde0bf"));
  }

  /* 2. Camp Flog Gnaw Carnival */
  function dmgflog() {
    const cx = 120, cy = 108, R = 74;
    const spokes = Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<path d="M' + cx + ' ' + cy + 'L' + (cx + R * Math.cos(a)).toFixed(1) + ' ' + (cy + R * Math.sin(a)).toFixed(1) + '" stroke="#f4f1ea" stroke-width="2"/>'; }).join("");
    const gondolas = Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6, x = cx + R * Math.cos(a), y = cy + R * Math.sin(a); const c = [MINT, ORANGE, LILAC, KPINK][i % 4]; return '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="7" fill="' + c + '" stroke="#222" stroke-width="1"/>'; }).join("");
    const tent = (x, w, c1, c2) => '<path d="M' + x + ' 210v-40l' + (w / 2) + ' -30l' + (w / 2) + ' 30v40z" fill="' + c1 + '"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (x + i * w / 4) + '" y="170" width="' + (w / 8) + '" height="40" fill="' + c2 + '"/>').join("") +
      '<path d="M' + x + ' 170l' + (w / 2) + ' -30l' + (w / 2) + ' 30" fill="none" stroke="#fff" stroke-width="2"/><rect x="' + (x + w / 2 - 1) + '" y="130" width="2" height="12" fill="#fff"/><path d="M' + (x + w / 2 + 1) + ' 130l10 4l-10 4z" fill="' + ORANGE + '"/>';
    const bulbs = Array.from({ length: 21 }, (_, i) => '<circle class="dmg-tw ' + ["", "dmg-t2", "dmg-t3"][i % 3] + '" cx="' + (8 + i * 19) + '" cy="' + (36 + Math.sin(i / 3.3) * 8).toFixed(1) + '" r="3" fill="#ffe79a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dmg2)"/>' +
      '<path d="M0 44q100 -16 200 0t200 0" stroke="#333" stroke-width="1" fill="none"/>' + bulbs +
      '<path d="M120 108l-40 102M120 108l40 102" stroke="#cfcac0" stroke-width="5"/>' +
      '<g class="dmg-wheel">' + '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="none" stroke="#f4f1ea" stroke-width="4"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (R - 12) + '" fill="none" stroke="#f4f1ea" stroke-width="1.5"/>' + spokes + gondolas + '</g>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="6" fill="' + ORANGE + '"/>' +
      tent(210, 80, "#f4f1ea", KPINK) + tent(300, 90, "#f4f1ea", MINT) +
      '<rect x="0" y="210" width="400" height="50" fill="#3a5a3a"/><rect x="0" y="210" width="400" height="4" fill="#2c4a2c"/>' +
      Array.from({ length: 8 }, (_, i) => '<circle cx="' + (30 + i * 48) + '" cy="236" r="' + (6 + i % 3) + '" fill="' + [MINT, ORANGE, LILAC, KPINK][i % 4] + '" opacity=".85"/><path d="M' + (30 + i * 48) + ' ' + (229 - i % 3) + 'v-30" stroke="#ddd" stroke-width="1"/>').join("") +
      '<text x="384" y="252" text-anchor="end" ' + font + ' font-size="9" fill="#fff" opacity=".9">CARNIVAL</text>',
      sky("dmg2", "#5b4a8a", "#f2a37a"));
  }

  /* 3. Tempe: the gold A on the butte */
  function dmgasu() {
    const saguaro = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#3f7a4a"><rect x="-6" y="-70" width="12" height="70" rx="6"/><path d="M-6 -36h-12v-18a5 5 0 0 1 10 0v10h2z"/><path d="M6 -46h12v-16a5 5 0 0 0 -10 0v8h-2z"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dmg3)"/><circle cx="330" cy="54" r="22" fill="#fff1c0"/>' +
      '<path d="M0 150l40 -20l40 10l40 -20v40h-120z" fill="#b28a68" opacity=".6"/>' +
      /* the butte */
      '<path d="M90 176q20 -70 70 -96q30 -16 60 -2q50 26 80 98z" fill="#8a5a3c"/><path d="M150 176q10 -60 40 -84q20 -10 36 4q30 30 40 80z" fill="#9c6a48"/>' +
      Array.from({ length: 10 }, (_, i) => '<circle cx="' + (110 + i * 18) + '" cy="' + (150 + (i % 3) * 6) + '" r="3" fill="#6b7a4a"/>').join("") +
      /* the gold A, flat on the slope */
      '<path d="M186 140l14 -40l14 40h-8l-3 -9h-6l-3 9z" fill="#f2c14e" stroke="#9a7a2a" stroke-width="1.5"/><path d="M196 124h8l-4 -12z" fill="#9c6a48"/>' +
      /* stadium bowl below */
      '<path d="M220 200q90 -40 180 -20v40h-180z" fill="#7a2a3a"/><path d="M230 196q80 -32 170 -16" stroke="#f2c14e" stroke-width="3" fill="none"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (240 + i * 28) + '" y="' + (150 - i * 2) + '" width="3" height="40" fill="#ddd"/><rect x="' + (234 + i * 28) + '" y="' + (146 - i * 2) + '" width="15" height="6" fill="#fff6c2" class="dmg-tw ' + (i % 2 ? "dmg-t2" : "") + '"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#d9b98a"/>' +
      '<path class="dmg-heat" d="M0 206q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#fff" stroke-width="1.5" fill="none"/>' +
      saguaro(40, 236, 1.1) + saguaro(360, 240, 0.9) + saguaro(110, 230, 0.7) +
      sign(20, 22, 110, "TEMPE, AZ"),
      sky("dmg3", "#5aa0d8", "#f7d9a4"));
  }

  /* 4. The studio */
  function dmgstudio() {
    const pad = (x, y, c, cls) => '<rect x="' + x + '" y="' + y + '" width="16" height="16" rx="2" fill="#333"/><rect class="dmg-pad ' + cls + '" x="' + (x + 1.5) + '" y="' + (y + 1.5) + '" width="13" height="13" rx="2" fill="' + c + '"/>';
    const vu = (x, cls) => '<rect x="' + x + '" y="40" width="64" height="40" rx="4" fill="#f1e6c8" stroke="#6b5a3a" stroke-width="2"/><path d="M' + (x + 10) + ' 72a22 22 0 0 1 44 0" fill="none" stroke="#c33" stroke-width="2"/>' +
      '<rect class="dmg-vu ' + cls + '" x="' + (x + 31) + '" y="50" width="2" height="24" fill="#222"/>';
    const rec = (x, c) => '<rect x="' + x + '" y="168" width="8" height="52" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#1c1a20"/>' +
      Array.from({ length: 8 }, (_, i) => Array.from({ length: 5 }, (_, j) => '<path d="M' + (i * 50) + ' ' + (j * 30) + 'l25 15l-25 15l-25 -15z" fill="#26232b"/>').join("")).join("") +
      vu(40, "") + vu(112, "dmg-v2") +
      /* desk + drum machine */
      '<rect x="20" y="150" width="240" height="12" fill="#5a3e2a"/><rect x="30" y="162" width="8" height="70" fill="#3a2a1c"/><rect x="242" y="162" width="8" height="70" fill="#3a2a1c"/>' +
      '<rect x="60" y="100" width="110" height="50" rx="4" fill="#cfcac0" stroke="#7a756c" stroke-width="2"/><rect x="66" y="106" width="40" height="14" fill="#3a5a4a"/>' +
      pad(112, 104, MINT, "") + pad(130, 104, ORANGE, "dmg-p2") + pad(148, 104, LILAC, "dmg-p3") + pad(112, 124, KPINK, "dmg-p4") + pad(130, 124, MINT, "dmg-p3") + pad(148, 124, ORANGE, "") +
      pad(70, 126, "#f4f1ea", "dmg-p2") + pad(88, 126, "#f4f1ea", "dmg-p4") +
      /* mic + pop filter */
      '<rect x="318" y="96" width="4" height="150" fill="#888"/><path d="M300 246h40" stroke="#888" stroke-width="5"/>' +
      '<rect x="308" y="58" width="24" height="44" rx="12" fill="#3a3a3a" stroke="#999" stroke-width="2"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M310 ' + (66 + i * 7) + 'h20" stroke="#666" stroke-width="1"/>').join("") +
      '<circle cx="282" cy="80" r="18" fill="#2a2a2a" fill-opacity=".5" stroke="#777" stroke-width="2"/><path d="M296 92l14 -2" stroke="#777" stroke-width="2"/>' +
      /* record crate */
      '<rect x="120" y="214" width="110" height="34" fill="#9a7a4a" stroke="#5a4028" stroke-width="2"/>' + rec(128, "#e8a33d") + rec(140, "#7fc8a9") + rec(152, "#222") + rec(164, "#c2a2e0") + rec(176, "#222") + rec(188, "#e56db1") + rec(200, "#f4f1ea") + rec(212, "#222") +
      '<rect x="120" y="226" width="110" height="22" fill="#9a7a4a" stroke="#5a4028" stroke-width="2"/>',
      "");
  }

  /* 5. Florence Ave and West Blvd, Inglewood */
  function dmgcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dmg5)"/>' +
      /* silver arena dome behind */
      '<path d="M130 120q0 -64 120 -66q120 2 120 66z" fill="#c9ced4" stroke="#8d949b" stroke-width="2"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (150 + i * 26) + ' 120q' + (i < 4 ? 14 : i > 4 ? -14 : 0) + ' -40 ' + (i < 4 ? 40 : i > 4 ? -40 : 0) + ' -62" stroke="#a3aab2" stroke-width="1.2" fill="none"/>').join("") +
      '<path d="M140 104q110 -20 220 0" stroke="#5a7a9a" stroke-width="4" fill="none"/>' +
      '<path d="M40 96h80l-6 8h-68z" fill="#2f4a6a"/><rect x="46" y="104" width="3" height="16" fill="#777"/><rect x="108" y="104" width="3" height="16" fill="#777"/>' +
      palm(24, 122, 0.8) + palm(370, 120, 0.9) +
      '<rect x="0" y="112" width="400" height="10" fill="#4a4448"/>' +
      '<g class="dmg-car"><rect x="0" y="102" width="44" height="12" rx="4" fill="' + ORANGE + '"/><rect x="8" y="96" width="26" height="8" rx="3" fill="#3a3a44"/></g>' +
      /* wall */
      '<rect x="30" y="122" width="330" height="102" fill="#e3dccf"/>' + Array.from({ length: 6 }, (_, r) => '<path d="M30 ' + (139 + r * 17) + 'h330" stroke="#cfc6b6" stroke-width="1"/>').join("") +
      tag("DOMO GENESIS", 44, 182, 34, MINT, -5) +
      tag("DOMS", 300, 150, 20, KPINK, -6) + tag("DAPPER", 48, 214, 18, LILAC, -3) + tag("WOLF GANG", 176, 214, 17, ORANGE, -4) +
      '<g class="dmg-spray"><rect x="320" y="196" width="12" height="26" rx="3" fill="' + MINT + '"/><rect x="323" y="190" width="6" height="7" fill="#ddd"/></g>' +
      '<circle class="dmg-sp" cx="326" cy="186" r="3" fill="' + MINT + '"/><circle class="dmg-sp dmg-sp2" cx="330" cy="184" r="2.4" fill="' + MINT + '"/>' +
      '<rect x="0" y="224" width="400" height="36" fill="#a8a29a"/><rect x="0" y="222" width="400" height="3" fill="#cfc8bd"/>' +
      '<rect x="382" y="40" width="5" height="186" fill="#5d6166"/>' + sign(276, 40, 112, "W FLORENCE AV") + sign(300, 66, 88, "WEST BLVD"),
      sky("dmg5", "#9ac2e6", "#f6dcc0"));
  }

  window.SCENES = { dmgstation, dmgflog, dmgasu, dmgstudio, dmgcorner };
})();
