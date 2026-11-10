/* jvckjames scenes (Regions tab: UK + Europe; Newham, East London - James Anderson was born into a church-going Jamaican family in Newham, went to the BRIT School, then ELAM). CSS classes and ids prefixed jvk- (the page's own anim-train is kept).
   1 Stratford station: the Central line train (red doors) sliding into the platform under the glass roof, a name board with the five line colours (Central, Jubilee, Elizabeth, DLR, Overground). No roundel.
   2 The BRIT School stage (he graduated in 2015): a black-box theatre, spotlights sweeping, a mic stand and keys waiting.
   3 His family's Sunday church: a Pentecostal hall with a Hammond organ, tambourine and choir chairs, notes rising.
   4 Queen's Market, Upton Park: striped stall awnings, plantain, yams, scotch bonnets and mangoes, awnings flapping.
   5 Green Street and Romford Road, E7: white London street plates, JVCK tagged on the brick, the Orbit's red loops on the Stratford skyline behind.
   No logos, no faces, no digit 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jvkflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.jvk-flk{animation:jvkflick 2.2s infinite}.jvk-flk2{animation-delay:.7s}' +
    '@keyframes jvkbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.jvk-beam{transform-box:fill-box;transform-origin:50% 0%;animation:jvkbeam 4s ease-in-out infinite}.jvk-beam2{animation-delay:-2s}' +
    '@keyframes jvknote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(14px,-70px);opacity:0}}.jvk-note{animation:jvknote 3.6s ease-out infinite}.jvk-note2{animation-delay:-1.2s}.jvk-note3{animation-delay:-2.4s}' +
    '@keyframes jvkshake{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.jvk-shake{transform-box:fill-box;transform-origin:50% 50%;animation:jvkshake .5s ease-in-out infinite}' +
    '@keyframes jvkflap{0%,100%{transform:skewX(0)}50%{transform:skewX(5deg)}}.jvk-flap{transform-box:fill-box;transform-origin:50% 0%;animation:jvkflap 2.4s ease-in-out infinite}.jvk-flap2{animation-delay:-1.2s}' +
    '@keyframes jvkbus{from{transform:translateX(-160px)}to{transform:translateX(560px)}}.jvk-bus{animation:jvkbus 10s linear infinite}' +
    '@keyframes jvkcloud{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.jvk-cloud{animation:jvkcloud 30s linear infinite}.jvk-cloud2{animation-delay:-15s}' +
    '@keyframes jvkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jvk-sp{animation:jvkspray 1.4s ease-out infinite}.jvk-sp2{animation-delay:.45s}' +
    '@keyframes jvkblink{0%,100%{opacity:.25}50%{opacity:1}}.jvk-bl{animation:jvkblink 1.6s ease-in-out infinite}.jvk-bl2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* London street plate: white, black letters, red district */
  const plate = (x, y, w, txt, dist) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="26" rx="2" fill="#fbfbf7" stroke="#111" stroke-width="2"/>' +
    '<text x="' + (x + 8) + '" y="' + (y + 18) + '" ' + font + ' font-size="13" fill="#111">' + txt + '</text>' +
    '<text x="' + (x + w - 8) + '" y="' + (y + 18) + '" text-anchor="end" ' + font + ' font-size="12" fill="#d2232a">' + dist + '</text>';

  window.SCENES = {
    /* 1 - Stratford station */
    jvkstation: () => svg(
      '<rect width="400" height="260" fill="#cfd6dc"/>' +
      /* glass roof */
      '<path d="M0 0h400v70L200 40 0 70z" fill="#9fb3c4"/>' +
      Array.from({ length: 11 }, (_, i) => '<path d="M' + (i * 40) + ' 0V' + (70 - Math.abs(200 - i * 40) * 0.15) + '" stroke="#5d6b78" stroke-width="2"/>').join("") +
      '<path d="M0 70L200 40 400 70" stroke="#5d6b78" stroke-width="4" fill="none"/>' +
      '<rect x="0" y="70" width="400" height="80" fill="#e9ecef"/>' +
      /* name board */
      '<rect x="110" y="80" width="180" height="40" rx="3" fill="#0a2a5c"/>' +
      '<text x="200" y="107" text-anchor="middle" ' + font + ' font-size="20" fill="#fff" letter-spacing="2">STRATFORD</text>' +
      [["#e32017"], ["#a0a5a9"], ["#6950a1"], ["#00afad"], ["#ee7c0e"]].map((c, i) => '<rect x="' + (120 + i * 33) + '" y="124" width="28" height="7" rx="2" fill="' + c[0] + '"/>').join("") +
      /* platform edge + track */
      '<rect x="0" y="150" width="400" height="10" fill="#f2c94c"/><rect x="0" y="160" width="400" height="100" fill="#5d5a57"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#2f2c2a"/>' +
      /* Central line train: silver body, red doors */
      '<g class="anim-train"><rect x="20" y="164" width="360" height="66" rx="10" fill="#d8dcdf"/>' +
      '<rect x="20" y="218" width="360" height="12" fill="#2a3a5a"/>' +
      [50, 140, 230, 320].map(x => '<rect x="' + x + '" y="172" width="34" height="48" fill="#e32017"/><path d="M' + (x + 17) + ' 172v48" stroke="#8a0f0a" stroke-width="2"/><rect x="' + (x + 4) + '" y="178" width="11" height="16" fill="#bfe3ff"/><rect x="' + (x + 19) + '" y="178" width="11" height="16" fill="#bfe3ff"/>').join("") +
      [92, 182, 272].map(x => '<rect x="' + x + '" y="176" width="40" height="22" rx="2" fill="#bfe3ff"/>').join("") +
      '<rect x="360" y="176" width="16" height="30" rx="3" fill="#24384f"/><circle cx="368" cy="214" r="3" fill="#ffe28a" class="jvk-flk"/></g>' +
      '<g class="jvk-bl"><rect x="20" y="86" width="70" height="18" rx="2" fill="#111"/><text x="55" y="99" text-anchor="middle" ' + font + ' font-size="10" fill="#ffb347">WESTBOUND</text></g>'),

    /* 2 - BRIT School stage */
    jvkbrit: () => svg(
      '<rect width="400" height="260" fill="#0b0b10"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#16161f"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 64) + '" y="16" width="16" height="14" rx="3" fill="#333"/>').join("") +
      '<g class="jvk-beam"><path d="M108 28L60 210h96z" fill="#fff6d6" opacity=".18"/></g>' +
      '<g class="jvk-beam jvk-beam2"><path d="M300 28L250 210h100z" fill="#cfe8ff" opacity=".18"/></g>' +
      '<g class="jvk-beam" style="animation-duration:5s"><path d="M200 28L150 210h100z" fill="#ff9aa6" opacity=".16"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#1f1a18"/><path d="M0 200h400" stroke="#3a322e" stroke-width="3"/>' +
      '<ellipse cx="200" cy="214" rx="90" ry="12" fill="#fff6d6" opacity=".18"/>' +
      /* mic stand */
      '<path d="M200 214V120" stroke="#888" stroke-width="3"/><path d="M188 214h24" stroke="#888" stroke-width="4"/><rect x="195" y="106" width="10" height="18" rx="5" fill="#333"/>' +
      /* keyboard */
      '<rect x="270" y="168" width="96" height="14" rx="2" fill="#222"/><rect x="274" y="170" width="88" height="8" fill="#f4f4f2"/>' +
      Array.from({ length: 11 }, (_, i) => '<rect x="' + (277 + i * 8) + '" y="170" width="4" height="5" fill="#111"/>').join("") +
      '<path d="M280 182v32M356 182v32" stroke="#555" stroke-width="3"/>' +
      /* stool + monitor wedge */
      '<rect x="60" y="196" width="50" height="16" fill="#333"/><path d="M60 196l10-12h30l10 12z" fill="#444"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#c9c3b8" letter-spacing="3">CLASS OF 2015 - SHOWCASE</text>'),

    /* 3 - Sunday church */
    jvkchurch: () => svg(
      '<rect width="400" height="260" fill="#f2e6cf"/>' +
      '<rect x="0" y="0" width="400" height="24" fill="#d9c7a3"/>' +
      /* windows */
      [60, 340].map(x => '<g><rect x="' + (x - 22) + '" y="40" width="44" height="80" rx="22" fill="#9fd3ff"/><path d="M' + x + ' 40v80M' + (x - 22) + ' 80h44" stroke="#f2e6cf" stroke-width="4"/></g>').join("") +
      /* cross on the wall */
      '<path d="M200 34v64M180 54h40" stroke="#8a6a3a" stroke-width="8"/>' +
      /* banner in Jamaican colours */
      '<path d="M120 112h160v18H120z" fill="#009b3a"/><path d="M120 112l160 18M280 112l-160 18" stroke="#fed100" stroke-width="5"/>' +
      /* stage + organ */
      '<rect x="0" y="150" width="400" height="110" fill="#7a3b2a"/><rect x="0" y="146" width="400" height="6" fill="#5a2a1e"/>' +
      '<rect x="230" y="150" width="110" height="60" rx="4" fill="#5a3a22"/><rect x="236" y="156" width="98" height="10" fill="#f4f4f2"/><rect x="236" y="170" width="98" height="10" fill="#f4f4f2"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (239 + i * 8) + '" y="156" width="4" height="6" fill="#111"/><rect x="' + (239 + i * 8) + '" y="170" width="4" height="6" fill="#111"/>').join("") +
      '<rect x="260" y="210" width="50" height="10" fill="#3a2414"/>' +
      /* choir chairs */
      [40, 80, 120, 160].map(x => '<g><rect x="' + x + '" y="186" width="28" height="6" fill="#c9302c"/><rect x="' + x + '" y="162" width="28" height="24" rx="3" fill="#c9302c"/><path d="M' + (x + 3) + ' 192v24M' + (x + 25) + ' 192v24" stroke="#3a2414" stroke-width="3"/></g>').join("") +
      /* tambourine */
      '<g transform="translate(200 200)"><g class="jvk-shake"><circle r="16" fill="#d9a066" stroke="#7a4a1a" stroke-width="3"/><circle r="11" fill="#f2d3a6"/>' +
      '<g fill="#e0e0e0"><circle cx="0" cy="-14" r="3"/><circle cx="14" cy="0" r="3"/><circle cx="0" cy="14" r="3"/><circle cx="-14" cy="0" r="3"/></g></g></g>' +
      '<g fill="#5a3a22"><g class="jvk-note"><circle cx="280" cy="140" r="4"/><path d="M284 140v-16" stroke="#5a3a22" stroke-width="2"/></g>' +
      '<g class="jvk-note jvk-note2"><circle cx="300" cy="136" r="4"/><path d="M304 136v-16h8" stroke="#5a3a22" stroke-width="2" fill="none"/></g>' +
      '<g class="jvk-note jvk-note3"><circle cx="320" cy="142" r="4"/><path d="M324 142v-16" stroke="#5a3a22" stroke-width="2"/></g></g>'),

    /* 4 - Queen's Market, Upton Park */
    jvkmarket: () => svg(
      '<rect width="400" height="260" fill="url(#jvk-s4)"/>' +
      '<g class="jvk-cloud"><ellipse cx="60" cy="40" rx="34" ry="12" fill="#fff" opacity=".9"/></g><g class="jvk-cloud jvk-cloud2"><ellipse cx="60" cy="60" rx="26" ry="9" fill="#fff" opacity=".8"/></g>' +
      '<rect x="0" y="70" width="400" height="60" fill="#b8a99a"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (10 + i * 40) + '" y="82" width="20" height="16" fill="#6f8aa3"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#8f8a84"/>' +
      /* three stalls */
      [[10, "#e32017", "#fff"], [140, "#009b3a", "#fed100"], [270, "#2f6db5", "#fff"]].map((s, k) => {
        const x = s[0];
        const stripes = Array.from({ length: 6 }, (_, i) => '<rect x="' + (x + i * 20) + '" y="120" width="10" height="26" fill="' + s[2] + '"/>').join("");
        return '<g><g class="jvk-flap' + (k == 1 ? ' jvk-flap2' : '') + '"><rect x="' + x + '" y="120" width="120" height="26" fill="' + s[1] + '"/>' + stripes +
          '<path d="M' + x + ' 146' + Array.from({ length: 6 }, (_, i) => 'q10 8 20 0').join("") + '" fill="' + s[1] + '"/></g>' +
          '<path d="M' + (x + 4) + ' 146v54M' + (x + 116) + ' 146v54" stroke="#4a4a4a" stroke-width="3"/>' +
          '<rect x="' + x + '" y="174" width="120" height="26" fill="#7a5a3a"/><rect x="' + x + '" y="170" width="120" height="6" fill="#5a3a22"/></g>';
      }).join("") +
      /* produce: plantain bunches, scotch bonnets, yams, mangoes */
      '<g>' + [20, 44, 68, 92].map(x => '<path d="M' + x + ' 170q8-18 18-14q-6 4-8 14z" fill="#f2d024" stroke="#8a7a12" stroke-width="1.5"/>').join("") + '</g>' +
      '<g>' + Array.from({ length: 9 }, (_, i) => '<circle cx="' + (152 + (i % 5) * 20) + '" cy="' + (166 - Math.floor(i / 5) * 8) + '" r="6" fill="' + ["#e32017", "#ff8a1e", "#fed100"][i % 3] + '"/>').join("") + '</g>' +
      '<g>' + [282, 310, 338, 366].map((x, i) => i % 2 ? '<ellipse cx="' + x + '" cy="164" rx="12" ry="8" fill="#ffb347" stroke="#c75a1a" stroke-width="1.5"/>' : '<ellipse cx="' + x + '" cy="164" rx="14" ry="6" fill="#8a5a3a" stroke="#4a2a1a" stroke-width="1.5"/>').join("") + '</g>' +
      '<rect x="132" y="66" width="136" height="20" rx="2" fill="#fbfbf7" stroke="#111" stroke-width="1.5"/><text x="200" y="80" text-anchor="middle" ' + font + ' font-size="11" fill="#111">QUEEN\'S MARKET</text>',
      sky("jvk-s4", "#9fc9ec", "#e8eef5")),

    /* 5 - Green Street & Romford Road, E7 */
    jvkcorner: () => svg(
      '<rect width="400" height="260" fill="url(#jvk-s5)"/>' +
      /* Stratford skyline + the Orbit's red loops */
      '<g fill="#2a2f45"><rect x="20" y="70" width="40" height="80"/><rect x="66" y="56" width="30" height="94"/><rect x="290" y="64" width="36" height="86"/><rect x="334" y="80" width="40" height="70"/></g>' +
      '<g fill="none" stroke="#c8102e" stroke-width="5" stroke-linecap="round"><path d="M180 150c-6-40 8-70 22-90s30-10 22 14-34 26-30 4 30-28 34-6-10 40-8 78"/><path d="M196 150c4-30 20-50 30-58"/><path d="M214 150c-4-22 6-40 18-52s20 4 12 18-24 8-20-6"/></g>' +
      '<rect x="190" y="52" width="26" height="8" rx="3" fill="#8a8f96"/>' +
      '<g fill="#ffd28a" class="jvk-bl"><rect x="30" y="86" width="4" height="4"/><rect x="76" y="70" width="4" height="4"/><rect x="300" y="80" width="4" height="4"/></g>' +
      '<g fill="#ffd28a" class="jvk-bl jvk-bl2"><rect x="44" y="110" width="4" height="4"/><rect x="346" y="96" width="4" height="4"/></g>' +
      /* brick wall */
      '<rect x="0" y="140" width="400" height="90" fill="#9a4a32"/>' +
      Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (148 + r * 10) + 'h400" stroke="#7a3424" stroke-width="1"/>').join("") +
      tag("JVCK", 60, 220, 46, "#e8e2d4", -4) + tag("JAMES", 210, 216, 32, "#e32017", 3) +
      '<g fill="#e8e2d4"><circle class="jvk-sp" cx="186" cy="196" r="2"/><circle class="jvk-sp jvk-sp2" cx="192" cy="202" r="1.6"/></g>' +
      /* plates on the wall */
      plate(222, 146, 168, "GREEN STREET", "E7") + plate(16, 146, 170, "ROMFORD ROAD", "E7") +
      '<rect x="0" y="228" width="400" height="32" fill="#4a4646"/><rect x="0" y="226" width="400" height="4" fill="#9a958d"/>' +
      /* red double-decker going by */
      '<g class="jvk-bus"><rect x="0" y="198" width="120" height="50" rx="6" fill="#d2232a"/><rect x="8" y="204" width="104" height="14" fill="#24384f"/><rect x="8" y="224" width="104" height="12" fill="#24384f"/><circle cx="26" cy="250" r="7" fill="#111"/><circle cx="96" cy="250" r="7" fill="#111"/></g>',
      sky("jvk-s5", "#1c2440", "#e0805a"))
  };
})();
