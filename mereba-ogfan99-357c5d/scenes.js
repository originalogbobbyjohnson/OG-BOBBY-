/* mereba scenes (Regions tab: Atlanta; Atlanta University Center / Spelman). CSS classes prefixed mb- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mbflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.35}55%{opacity:.95}}.mb-flk{animation:mbflick 2.6s infinite}.mb-flk2{animation-delay:1.1s}' +
    '@keyframes mbsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.mb-sw{transform-box:fill-box;transform-origin:50% 100%;animation:mbsway 3s ease-in-out infinite}.mb-sw2{animation-delay:-1.5s}' +
    '@keyframes mbdrive{0%{transform:translateX(-160px)}100%{transform:translateX(460px)}}.mb-dr{animation:mbdrive 6s linear infinite}' +
    '@keyframes mbbolt{0%,86%,100%{opacity:0}88%,92%{opacity:1}90%{opacity:.2}}.mb-bolt{animation:mbbolt 4s infinite}' +
    '@keyframes mbglow{0%,100%{opacity:.35}50%{opacity:1}}.mb-gl{animation:mbglow 1.8s ease-in-out infinite}.mb-gl2{animation-delay:-.9s}' +
    '@keyframes mbnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(-14px,-60px);opacity:0}}.mb-nt{animation:mbnote 3s ease-out infinite}.mb-nt2{animation-delay:1.5s}' +
    '@keyframes mbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mb-sp{animation:mbspray 1.4s ease-out infinite}.mb-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const oak = (x, base, r, cls) => '<g class="' + (cls || "") + '"><rect x="' + (x - 4) + '" y="' + (base - r * 1.5) + '" width="8" height="' + (r * 1.5) + '" fill="#4a3424"/><ellipse cx="' + x + '" cy="' + (base - r * 1.7) + '" rx="' + (r * 1.4) + '" ry="' + r + '" fill="#2f5d34"/><ellipse cx="' + (x - r * 0.8) + '" cy="' + (base - r * 1.3) + '" rx="' + r + '" ry="' + (r * 0.7) + '" fill="#386b3c"/><ellipse cx="' + (x + r * 0.8) + '" cy="' + (base - r * 1.3) + '" rx="' + r + '" ry="' + (r * 0.7) + '" fill="#386b3c"/></g>';
  /* the matte all-black pickup truck from "Black Truck" */
  const truck = (x, y) => '<g transform="translate(' + x + ' ' + y + ')"><path d="M0 30v-16h62v-28h34q6 0 9 6l9 22h32q8 0 8 8v8z" fill="#151515" stroke="#3a3a3a" stroke-width="1.5"/><path d="M68 -8h26q4 0 6 4l7 16h-39z" fill="#3b4a5a"/><path d="M0 14h62" stroke="#3a3a3a" stroke-width="2"/><rect x="146" y="18" width="8" height="5" fill="#ffe9a8"/><rect x="0" y="16" width="5" height="6" fill="#c0392b"/>' +
    '<circle cx="34" cy="32" r="11" fill="#0b0b0b" stroke="#333" stroke-width="2"/><circle cx="34" cy="32" r="4" fill="#444"/><circle cx="124" cy="32" r="11" fill="#0b0b0b" stroke="#333" stroke-width="2"/><circle cx="124" cy="32" r="4" fill="#444"/></g>';
  const GOLD = "#e3b04b", RUST = "#c4572e", SAGE = "#8fb59a", MARTA = "#1f5aa6";

  /* 1. MARTA's Route 3 bus pulling up at Joseph E. Lowery Blvd and Westview Dr, the Atlanta University Center stop: white bus with the blue/orange band, MARTA stop sign, big oaks */
  function mbbus() {
    const bus = '<g class="anim-train"><rect x="36" y="118" width="294" height="80" rx="10" fill="#f4f4f2" stroke="#8d949b" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (80 + i * 38) + '" y="130" width="32" height="30" rx="3" fill="#1f2b38"/>').join("") +
      '<rect x="44" y="130" width="30" height="60" rx="3" fill="#1f2b38"/><path d="M36 168h294v9h-294z" fill="' + MARTA + '"/><path d="M36 177h294v5h-294z" fill="#f4a127"/>' +
      '<rect x="42" y="120" width="80" height="11" rx="2" fill="#111"/><text x="82" y="128.5" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb84a">ROUTE 3</text>' +
      '<circle cx="88" cy="198" r="13" fill="#222"/><circle cx="88" cy="198" r="5" fill="#9aa1a8"/><circle cx="276" cy="198" r="13" fill="#222"/><circle cx="276" cy="198" r="5" fill="#9aa1a8"/>' +
      '<circle cx="40" cy="186" r="3.5" fill="#fff6c2"/></g>';
    const stop = '<rect x="356" y="90" width="5" height="120" fill="#6f757b"/><rect x="338" y="62" width="42" height="44" rx="4" fill="#fff" stroke="' + MARTA + '" stroke-width="3"/>' +
      '<circle cx="359" cy="78" r="9" fill="' + MARTA + '"/><path d="M352 80q7 -10 14 0" stroke="#f4a127" stroke-width="3" fill="none"/><text x="359" y="100" text-anchor="middle" ' + font + ' font-size="9" fill="' + MARTA + '">BUS 3</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#mb1)"/>' + oak(26, 206, 26, "mb-sw") + oak(384, 206, 24, "mb-sw mb-sw2") +
      sign(98, 30, 200, "JOSEPH E LOWERY BLVD") + sign(128, 56, 140, "WESTVIEW DR") +
      '<rect x="0" y="206" width="400" height="54" fill="#55585c"/><path d="M0 230h400" stroke="#f2d04a" stroke-width="3" stroke-dasharray="22 16"/><rect x="0" y="204" width="400" height="4" fill="#c9b9a4"/>' +
      stop + bus,
      sky("mb1", "#f2b880", "#f9e3c6"));
  }

  /* 2. Spelman College: Sisters Chapel, red brick with the white columned portico and the pediment, the oak-lined oval, bells-and-notes rising */
  function mbchapel() {
    return svg(
      '<rect width="400" height="260" fill="url(#mb2)"/>' + oak(34, 196, 28, "mb-sw") + oak(366, 196, 28, "mb-sw mb-sw2") +
      '<rect x="96" y="96" width="208" height="104" fill="#a8452f"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M96 ' + (104 + i * 11) + 'h208" stroke="#94392a" stroke-width="1"/>').join("") +
      '<path d="M120 96l80 -40 80 40z" fill="#f2efe8" stroke="#d8d2c4" stroke-width="2"/><rect x="118" y="92" width="164" height="8" fill="#f2efe8"/><circle cx="200" cy="80" r="7" fill="none" stroke="#d8d2c4" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (128 + i * 28) + '" y="100" width="10" height="92" fill="#f7f4ee" stroke="#d8d2c4"/>').join("") +
      '<rect x="114" y="190" width="172" height="10" fill="#e2ddd2"/><rect x="104" y="200" width="192" height="8" fill="#d2ccbe"/>' +
      '<path d="M184 190v-40q16 -12 32 0v40z" fill="#5a3322"/><rect x="146" y="120" width="14" height="28" fill="#2e3a48"/><rect x="240" y="120" width="14" height="28" fill="#2e3a48"/>' +
      '<g class="mb-gl"><rect x="146" y="120" width="14" height="28" fill="#f6d27a" opacity=".5"/></g><g class="mb-gl mb-gl2"><rect x="240" y="120" width="14" height="28" fill="#f6d27a" opacity=".5"/></g>' +
      '<rect x="0" y="208" width="400" height="52" fill="#5f8a4c"/><ellipse cx="200" cy="236" rx="150" ry="14" fill="#6f9a58"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f7f4ee">SPELMAN COLLEGE</text>',
      sky("mb2", "#8cc2e6", "#f4e6cf"));
  }

  /* 3. Born in Montgomery: the white-domed Alabama State Capitol on its hill, the matte all-black truck rolling down Dexter Ave, thunder over the dome */
  function mbcapitol() {
    return svg(
      '<rect width="400" height="260" fill="url(#mb3)"/>' +
      '<path class="mb-bolt" d="M300 10l-14 34h12l-10 30 26 -40h-12l10 -24z" fill="#fff6c8"/>' +
      '<rect x="190" y="38" width="20" height="10" fill="#f2efe8"/><path d="M196 38q4 -14 8 0z" fill="#f2efe8"/><rect x="198" y="18" width="3" height="14" fill="#c9c3b6"/>' +
      '<path d="M166 84q34 -58 68 0z" fill="#f2efe8" stroke="#d6d0c2" stroke-width="2"/><rect x="164" y="84" width="72" height="22" fill="#f2efe8"/>' + Array.from({ length: 7 }, (_, i) => '<rect x="' + (168 + i * 10) + '" y="88" width="4" height="16" fill="#d6d0c2"/>').join("") +
      '<rect x="100" y="106" width="200" height="60" fill="#f2efe8"/><path d="M160 106l40 -18 40 18z" fill="#ebe6dc"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (164 + i * 14) + '" y="108" width="6" height="56" fill="#fbf9f4" stroke="#d6d0c2"/>').join("") +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (108 + i * 12) + '" y="118" width="8" height="14" fill="#9aa6b0"/><rect x="' + (256 + i * 12) + '" y="118" width="8" height="14" fill="#9aa6b0"/>').join("") +
      '<path d="M0 196q200 -40 400 0v64h-400z" fill="#5a7a46"/><path d="M150 196l50 -30 50 30z" fill="#e4dfd4"/>' +
      '<rect x="0" y="206" width="400" height="34" fill="#45484d"/><path d="M0 223h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="mb-dr">' + truck(0, 186) + '</g>' +
      '<rect x="0" y="240" width="400" height="20" fill="#5a7a46"/><text x="200" y="254" text-anchor="middle" ' + font + ' font-size="10" fill="#f7f4ee">MONTGOMERY, ALABAMA</text>',
      sky("mb3", "#2b2f45", "#7c6f8f"));
  }

  /* 4. A front porch session in Atlanta, the way Spillage Village cut records at the house: wood porch, string lights flickering, her guitar, a mic, candles, notes drifting */
  function mbporch() {
    const bulbs = Array.from({ length: 12 }, (_, i) => '<circle cx="' + (40 + i * 30) + '" cy="' + (58 + Math.sin(i / 1.9) * 8) + '" r="4" fill="#ffd98a" class="mb-flk' + (i % 2 ? " mb-flk2" : "") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mb4)"/>' +
      '<path d="M20 40l180 -30 180 30z" fill="#5a3b2a"/><rect x="20" y="40" width="360" height="10" fill="#6f4a33"/>' +
      '<path d="M30 56q185 26 340 0" stroke="#333" stroke-width="1.5" fill="none"/>' + bulbs +
      '<rect x="30" y="50" width="10" height="150" fill="#ece3d3"/><rect x="360" y="50" width="10" height="150" fill="#ece3d3"/>' +
      '<rect x="60" y="74" width="280" height="126" fill="#2f3a46"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M60 ' + (86 + i * 12) + 'h280" stroke="#273039" stroke-width="2"/>').join("") +
      '<rect x="168" y="96" width="64" height="104" fill="#1a1f25" stroke="#ece3d3" stroke-width="4"/><rect x="88" y="100" width="54" height="50" fill="#f6d27a" opacity=".85" class="mb-flk"/><rect x="258" y="100" width="54" height="50" fill="#f6d27a" opacity=".85" class="mb-flk mb-flk2"/>' +
      '<path d="M88 125h54M115 100v50M258 125h54M285 100v50" stroke="#2f3a46" stroke-width="3"/>' +
      '<rect x="88" y="66" width="104" height="18" rx="3" fill="' + RUST + '" transform="rotate(-3 140 75)"/><text x="140" y="79" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" transform="rotate(-3 140 75)">SPILLAGE VILLAGE</text>' +
      '<rect x="0" y="200" width="400" height="60" fill="#8a5a3a"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (208 + i * 9) + 'h400" stroke="#6f4730" stroke-width="2"/>').join("") +
      '<g transform="rotate(-18 110 200)"><ellipse cx="100" cy="206" rx="22" ry="17" fill="#c98a4a" stroke="#5a3a20" stroke-width="2"/><ellipse cx="118" cy="196" rx="14" ry="12" fill="#c98a4a" stroke="#5a3a20" stroke-width="2"/><circle cx="108" cy="200" r="5" fill="#2a1a10"/><rect x="128" y="196" width="60" height="6" fill="#4a2e1c"/><rect x="186" y="193" width="12" height="12" rx="2" fill="#2a1a10"/></g>' +
      '<rect x="284" y="150" width="3" height="56" fill="#333"/><path d="M272 206l13 -8 13 8" stroke="#333" stroke-width="2" fill="none"/><rect x="279" y="136" width="13" height="20" rx="6" fill="#9aa1a8" stroke="#555"/>' +
      '<rect x="318" y="190" width="10" height="16" fill="#f4ecd8"/><path d="M323 182q4 4 0 8q-4 -4 0 -8z" fill="#ffb84a" class="mb-flk"/><rect x="334" y="194" width="8" height="12" fill="#f4ecd8"/><path d="M338 187q3 3 0 7q-3 -3 0 -7z" fill="#ffb84a" class="mb-flk mb-flk2"/>' +
      '<g class="mb-nt"><ellipse cx="160" cy="176" rx="5" ry="3.6" fill="' + GOLD + '"/><rect x="163.6" y="158" width="2" height="18" fill="' + GOLD + '"/></g><g class="mb-nt mb-nt2"><ellipse cx="300" cy="130" rx="5" ry="3.6" fill="' + SAGE + '"/><rect x="303.6" y="112" width="2" height="18" fill="' + SAGE + '"/></g>',
      sky("mb4", "#1c1a33", "#4a3550"));
  }

  /* 5. Westview Dr and Joseph E. Lowery Blvd by the AUC: green signs, MEREBA tagged on the wall, the downtown Atlanta skyline with the round Westin tower behind */
  function mbcorner() {
    const sky1 = '<rect x="40" y="70" width="34" height="80" fill="#3a4a63"/><rect x="80" y="40" width="26" height="110" fill="#33415a"/><rect x="112" y="58" width="40" height="92" fill="#3d4e69"/>' +
      '<rect x="160" y="30" width="30" height="120" rx="15" fill="#4a5c78"/><rect x="160" y="30" width="30" height="8" rx="4" fill="#5d7090"/><rect x="198" y="52" width="34" height="98" fill="#33415a"/><path d="M198 52l17 -22 17 22z" fill="#33415a"/>' +
      '<rect x="240" y="66" width="44" height="84" fill="#3a4a63"/><rect x="292" y="80" width="30" height="70" fill="#33415a"/>' +
      Array.from({ length: 24 }, (_, i) => '<rect x="' + (46 + (i * 37) % 270) + '" y="' + (78 + (i * 23) % 60) + '" width="4" height="4" fill="#f6d27a" class="mb-gl' + (i % 2 ? " mb-gl2" : "") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mb5)"/>' + sky1 + oak(14, 150, 18, "mb-sw") + oak(386, 150, 18, "mb-sw mb-sw2") +
      '<rect x="0" y="138" width="400" height="86" fill="#e8dcc6"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M0 ' + (150 + i * 11) + 'h400" stroke="#d9cbb1" stroke-width="1"/>').join("") +
      tag("SPILLAGE", 28, 164, 17, SAGE, -4) + tag("MEREBA", 26, 210, 50, RUST, -6) + tag("STAY TRU", 236, 166, 14, GOLD, -5) + truck(200, 178).replace('translate(200 178)', 'translate(236 190) scale(.4)') +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="346" y="88" width="6" height="136" fill="#2f2f2f"/>' + sign(292, 92, 106, "Westview Dr") + sign(282, 118, 116, "J E Lowery Blvd") +
      '<g class="mb-sp"><circle cx="120" cy="150" r="3" fill="' + RUST + '" opacity=".7"/></g><g class="mb-sp mb-sp2"><circle cx="126" cy="144" r="2" fill="' + RUST + '" opacity=".6"/></g>',
      sky("mb5", "#24244a", "#e59a6a"));
  }

  window.SCENES = { mbbus: mbbus, mbchapel: mbchapel, mbcapitol: mbcapitol, mbporch: mbporch, mbcorner: mbcorner };
})();
