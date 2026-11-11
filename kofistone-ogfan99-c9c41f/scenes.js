/* Kofi Stone scenes (Regions tab: UK + EUROPE; Birmingham - Mawuena Dzotsi, born in Walthamstow, raised in Birmingham;
   independent; "Mayor of Brum", "Kof for the mayor", "Brumtown"; albums "A Man After God's Own Heart", "All The Flowers Have Bloomed").
   1 Birmingham New Street: the mirrored steel ripple front with its big curved screens up top, a West Midlands train in below.
   2 The Bullring: the bronze Bull, the blue Selfridges building with its silver discs, St Martin's spire.
   3 Victoria Square: the Council House (Mayor of Brum) with its clock tower, the River fountain splashing.
   4 Centenary Square: the Library of Birmingham, gold, silver and glass boxes wrapped in metal rings.
   5 High Street Deritend at Floodgate Street, Digbeth B5: UK street plates, KOFI tagged, the blue-brick viaduct and the BT Tower behind.
   CSS classes prefixed "kof". No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kofCloud{0%{transform:translateX(-140px)}100%{transform:translateX(480px)}}.kofCloud{animation:kofCloud 34s linear infinite}.kofC2{animation-delay:-17s}' +
    '@keyframes kofCar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.kofCar{animation:kofCar 7s linear infinite}.kofK2{animation-delay:-3.5s}' +
    '@keyframes kofBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.kofBob{animation:kofBob .9s ease-in-out infinite}.kofB2{animation-delay:-.45s}' +
    '@keyframes kofTw{0%,100%{opacity:1}50%{opacity:.3}}.kofTw{animation:kofTw 1.6s ease-in-out infinite}.kofT2{animation-delay:.5s}.kofT3{animation-delay:1s}' +
    '@keyframes kofDrop{0%{transform:translateY(0);opacity:1}100%{transform:translateY(26px);opacity:0}}.kofDrop{animation:kofDrop 1s linear infinite}.kofD2{animation-delay:-.5s}' +
    '@keyframes kofShine{0%,100%{opacity:.15}50%{opacity:.6}}.kofShine{animation:kofShine 2.4s ease-in-out infinite}.kofS2{animation-delay:-1.2s}' +
    '@keyframes kofTrain{0%{transform:translateX(-420px)}45%,55%{transform:translateX(0)}100%{transform:translateX(420px)}}.kofTrain{animation:kofTrain 9s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const LBL = 'stroke="#000" stroke-width="3" stroke-linejoin="round" paint-order="stroke" letter-spacing="2"';
  const WMR = "#ff8200", XC = "#a50034", GOLD = "#f2b134", ROSE = "#d9455f", LEAF = "#5bb36a", BLUEBRICK = "#3c4656";
  const bullet = (x, y, col, txt, tc) => '<rect x="' + (x - 14) + '" y="' + (y - 9) + '" width="28" height="18" rx="9" fill="' + col + '"/><text x="' + x + '" y="' + (y + 4) + '" text-anchor="middle" font-size="9" ' + F + ' fill="' + (tc || "#fff") + '">' + txt + '</text>';
  const clouds = (op) => '<g fill="#fff" opacity="' + (op || .7) + '"><g class="kofCloud"><ellipse cx="40" cy="34" rx="34" ry="10"/><ellipse cx="62" cy="27" rx="20" ry="9"/></g>' +
    '<g class="kofCloud kofC2"><ellipse cx="40" cy="64" rx="28" ry="8"/><ellipse cx="56" cy="58" rx="16" ry="8"/></g></g>';
  const car = (x, y, col, cls) => '<g class="' + cls + '"><rect x="' + x + '" y="' + (y + 6) + '" width="44" height="12" rx="4" fill="' + col + '"/><path d="M' + (x + 8) + ' ' + (y + 6) + 'l6 -7h16l6 7z" fill="' + col + '"/>' +
    '<rect x="' + (x + 15) + '" y="' + y + '" width="7" height="5" fill="#bcd3e0"/><rect x="' + (x + 24) + '" y="' + y + '" width="7" height="5" fill="#bcd3e0"/><circle cx="' + (x + 10) + '" cy="' + (y + 18) + '" r="4" fill="#111"/><circle cx="' + (x + 34) + '" cy="' + (y + 18) + '" r="4" fill="#111"/></g>';
  const ppl = (n, y, step, x0) => { let s = ""; for (let i = 0; i < n; i++) { const x = x0 + i * step; const c = ["#2b3a66", "#6b2a3a", "#2a5a3a", "#5a4a2a"][i % 4];
    s += '<g class="kofBob' + (i % 2 ? " kofB2" : "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="#3a2418"/><rect x="' + (x - 7) + '" y="' + (y + 6) + '" width="14" height="26" rx="5" fill="' + c + '"/></g>'; } return s; };

  /* 1. Birmingham New Street - the mirrored steel ripple front with curved screens, the platforms below, a train gliding in */
  function kofstation() {
    let ripple = "";
    for (let i = 0; i < 10; i++) ripple += '<path d="M20 ' + (40 + i * 7) + 'q90 ' + (i % 2 ? 10 : -10) + ' 180 0t180 0" stroke="#e8eef3" stroke-width="2" fill="none" opacity=".6"/>';
    let wins = "";
    for (const x of [40, 74, 108, 196, 230, 264]) wins += '<rect x="' + x + '" y="186" width="26" height="16" rx="3" fill="#1c2a36"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kofs1)"/>' + clouds(.6) +
      /* the curved mirrored skin of the station front */
      '<path d="M10 120V48q0 -14 30 -18q160 -18 320 0q30 4 30 18v72z" fill="url(#kofs2)" stroke="#8a98a6" stroke-width="2"/>' + ripple +
      /* the big curved "eye" screens */
      '<path d="M60 86q50 -34 100 0q-50 22 -100 0z" fill="#16202a"/><path d="M240 86q50 -34 100 0q-50 22 -100 0z" fill="#16202a"/>' +
      '<path class="kofShine" d="M70 86q40 -24 80 0q-40 14 -80 0z" fill="' + GOLD + '"/><path class="kofShine kofS2" d="M250 86q40 -24 80 0q-40 14 -80 0z" fill="' + ROSE + '"/>' +
      /* underground platforms below the concourse */
      '<rect x="0" y="120" width="400" height="56" fill="#2b2f36"/><rect x="0" y="120" width="400" height="6" fill="#4a505a"/>' +
      '<g fill="#fff3c4" opacity=".85"><rect x="30" y="132" width="40" height="3"/><rect x="130" y="132" width="40" height="3"/><rect x="230" y="132" width="40" height="3"/><rect x="330" y="132" width="40" height="3"/></g>' +
      '<g class="anim-train"><path d="M20 176h270q26 0 30 22v12H20z" fill="#cdd2d6" stroke="#222" stroke-width="2"/>' + wins +
      '<rect x="20" y="200" width="300" height="8" fill="' + WMR + '"/><path d="M290 176q26 0 30 22h-30z" fill="' + WMR + '"/><path d="M294 182q14 2 18 14h-18z" fill="#1c2a36"/>' +
      '<rect x="150" y="180" width="24" height="30" fill="#9aa2a8"/><rect x="312" y="202" width="7" height="4" fill="#fff3b0"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#a9a9a4"/><rect x="0" y="210" width="400" height="5" fill="#f5d000"/>' +
      '<g transform="translate(78 222)"><rect width="244" height="32" rx="4" fill="#111"/>' +
      '<text x="10" y="21" font-size="13" ' + F + ' fill="#fff">BIRMINGHAM NEW ST</text>' +
      bullet(182, 16, WMR, "WMR") + bullet(216, 16, XC, "XC") + '</g>',
      sky("kofs1", "#88aed0", "#dbe7f0") + '<linearGradient id="kofs2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c9d4de"/><stop offset=".5" stop-color="#f4f7fa"/><stop offset="1" stop-color="#9fb0bf"/></linearGradient>');
  }

  /* 2. The Bullring - the bronze Bull, the blue Selfridges with silver discs, St Martin's spire */
  function kofbullring() {
    let discs = "";
    for (let r = 0; r < 9; r++) for (let c = 0; c < 9; c++) {
      const x = 222 + c * 16 + (r % 2 ? 8 : 0), y = 58 + r * 14;
      discs += '<circle cx="' + x + '" cy="' + y + '" r="5.5" fill="#e6ebef" stroke="#9aa8b4" stroke-width="1"' + ((r + c) % 7 === 0 ? ' class="kofTw"' : '') + '/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#kofb1)"/>' + clouds(.7) +
      /* St Martin's church: sandstone tower and spire */
      '<rect x="60" y="96" width="34" height="96" fill="#b5835e"/><path d="M58 96l19 -66l19 66z" fill="#a3734f"/><rect x="70" y="120" width="14" height="22" rx="7" fill="#4a3426"/>' +
      '<rect x="20" y="140" width="110" height="52" fill="#a8774f"/><g fill="#4a3426"><rect x="32" y="152" width="10" height="22" rx="5"/><rect x="104" y="152" width="10" height="22" rx="5"/></g>' +
      /* Selfridges: the curvy blue body with silver discs */
      '<path d="M206 192V80q0 -40 54 -44q70 -6 120 30q20 18 20 40v86z" fill="#2c6fb3"/>' +
      '<clipPath id="kofbc"><path d="M206 192V80q0 -40 54 -44q70 -6 120 30q20 18 20 40v86z"/></clipPath><g clip-path="url(#kofbc)">' + discs + '</g>' +
      '<rect x="0" y="192" width="400" height="68" fill="#b9b2a4"/><path d="M0 204h400" stroke="#9e978a"/>' +
      /* the bronze Bull, head down */
      '<g transform="translate(120 150)"><path d="M0 34q2 -26 34 -28q34 -2 48 10q10 8 6 22l-4 24h-8l-2 -16h-46l-4 16h-8l-2 -18q-14 -4 -14 -14z" fill="#7a5530" stroke="#3e2a16" stroke-width="2"/>' +
      '<path d="M78 14q16 2 22 18l-2 10q-10 2 -16 -6z" fill="#6a4826" stroke="#3e2a16" stroke-width="2"/><path d="M90 16q8 -10 2 -18M84 14q-2 -10 -10 -12" stroke="#d9c49a" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<path d="M4 26q-12 -2 -12 10" stroke="#3e2a16" stroke-width="3" fill="none"/></g>' +
      ppl(5, 206, 70, 30) +
      '<text x="200" y="252" text-anchor="middle" font-size="12" ' + F + ' fill="#fff" ' + LBL + '>THE BULLRING</text>',
      sky("kofb1", "#7fb0d8", "#d9e8f2"));
  }

  /* 3. Victoria Square - the Council House (Mayor of Brum) with its clock tower, the River fountain */
  function kofcouncil() {
    let cols = "";
    for (let x = 118; x <= 274; x += 26) cols += '<rect x="' + x + '" y="112" width="8" height="54" fill="#efe2c4"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kofv1)"/>' + clouds(.65) +
      /* clock tower (Big Brum) behind on the left */
      '<rect x="30" y="54" width="34" height="140" fill="#b45a3c"/><rect x="26" y="50" width="42" height="8" fill="#e3d2ae"/><circle cx="47" cy="80" r="11" fill="#fbf8ef" stroke="#2a2a2a" stroke-width="2"/>' +
      '<path d="M47 80v-7M47 80h5" stroke="#111" stroke-width="1.6"/><path d="M30 50l17 -26l17 26z" fill="#6b8a7a"/>' +
      /* the Council House: pale stone, columned portico, pediment, green dome */
      '<rect x="178" y="54" width="44" height="44" fill="#e7d8b8" stroke="#b9a986" stroke-width="2"/>' +
      '<rect x="96" y="96" width="208" height="96" fill="#e7d8b8" stroke="#b9a986" stroke-width="2"/>' +
      '<path d="M108 106h184l-92 -40z" fill="#efe2c4" stroke="#b9a986" stroke-width="2"/><circle cx="200" cy="90" r="6" fill="' + GOLD + '"/>' +
      '<path d="M174 56q26 -42 52 0z" fill="#6b9a86"/><rect x="196" y="22" width="8" height="12" fill="#6b9a86"/>' + cols +
      '<rect x="108" y="108" width="184" height="6" fill="#d6c6a2"/><rect x="108" y="166" width="184" height="6" fill="#d6c6a2"/>' +
      '<g fill="#5a4630"><rect x="140" y="172" width="16" height="20"/><rect x="192" y="172" width="16" height="20"/><rect x="244" y="172" width="16" height="20"/></g>' +
      /* the River fountain: stepped basins, water running down */
      '<rect x="0" y="192" width="400" height="68" fill="#c9bfae"/>' +
      '<path d="M120 236h160l-12 -16h-136z" fill="#b8ad98"/><path d="M150 220h100l-8 -12h-84z" fill="#a89d88"/>' +
      '<rect x="134" y="226" width="132" height="8" fill="#5aa7d6"/><rect x="160" y="212" width="80" height="6" fill="#6db7e2"/>' +
      '<g fill="#bfe3f6"><circle class="kofDrop" cx="168" cy="210" r="2"/><circle class="kofDrop kofD2" cx="200" cy="208" r="2"/><circle class="kofDrop" cx="232" cy="210" r="2"/></g>' +
      '<text x="200" y="254" text-anchor="middle" font-size="11" ' + F + ' fill="#fff" ' + LBL + '>KOF FOR THE MAYOR</text>',
      sky("kofv1", "#86afd2", "#dce8f0"));
  }

  /* 4. Centenary Square - the Library of Birmingham: stacked gold, silver and glass boxes wrapped in metal rings */
  function koflibrary() {
    const rings = (x, y, w, h, col) => {
      let s = '<clipPath id="kofl' + y + '"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '"/></clipPath><g clip-path="url(#kofl' + y + ')" stroke="' + col + '" stroke-width="2.4" fill="none">';
      for (let i = 0; i < Math.ceil(w / 20) + 1; i++) for (let j = 0; j < Math.ceil(h / 20) + 1; j++) s += '<circle cx="' + (x + i * 20) + '" cy="' + (y + j * 20) + '" r="9"/>';
      return s + '</g>';
    };
    return svg(
      '<rect width="400" height="260" fill="url(#kofl1)"/>' + clouds(.6) +
      /* the old Rep theatre beside it */
      '<rect x="10" y="132" width="90" height="60" fill="#8f8a80"/><rect x="10" y="126" width="90" height="8" fill="#6f6a62"/>' +
      /* glass base, gold box, silver box, glass box, gold rotunda on top */
      '<rect x="120" y="164" width="200" height="28" fill="#2f4a5e"/><g class="kofShine"><rect x="128" y="168" width="184" height="20" fill="#9fd0ea"/></g>' +
      '<rect x="112" y="116" width="216" height="48" fill="#d4a63c"/>' + rings(112, 116, 216, 48, "#8a6a1a") +
      '<rect x="126" y="74" width="188" height="42" fill="#b9c2c8"/>' + rings(126, 74, 188, 42, "#6f7a82") +
      '<rect x="140" y="44" width="160" height="30" fill="#5a7f96"/><g class="kofShine kofS2"><rect x="146" y="48" width="148" height="22" fill="#b4dcef"/></g>' +
      '<rect x="196" y="26" width="48" height="18" fill="' + GOLD + '"/><path d="M196 26q24 -14 48 0z" fill="#e6c25a"/>' +
      '<rect x="0" y="192" width="400" height="68" fill="#c8c2b6"/><path d="M0 206h400M0 224h400" stroke="#b1ab9f"/>' +
      '<g fill="#5aa7d6" opacity=".7"><rect x="40" y="226" width="80" height="10" rx="5"/><rect x="280" y="226" width="80" height="10" rx="5"/></g>' +
      ppl(6, 200, 60, 40) +
      '<text x="200" y="254" text-anchor="middle" font-size="11" ' + F + ' fill="#fff" ' + LBL + '>CENTENARY SQUARE</text>',
      sky("kofl1", "#7fb0d8", "#d9e8f2"));
  }

  /* 5. High Street Deritend at Floodgate Street, Digbeth B5 - street plates, KOFI tagged, the blue-brick viaduct and BT Tower behind */
  function kofcorner() {
    const plate = (x, y, w, name, sub) => '<g><rect x="' + x + '" y="' + y + '" width="' + w + '" height="30" rx="2" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + 17) + '" text-anchor="middle" font-size="10.5" ' + F + ' fill="#111">' + name + '</text>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + 27) + '" text-anchor="middle" font-size="7" ' + F + ' fill="' + ROSE + '">' + sub + '</text></g>';
    let arches = "";
    for (let x = 0; x < 400; x += 60) arches += '<path d="M' + (x + 8) + ' 150v-24q22 -26 44 0v24z" fill="#9fb7cc"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kofk1)"/>' + clouds(.55) +
      /* the BT Tower: slim concrete shaft with dish bands */
      '<rect x="56" y="14" width="18" height="86" fill="#cfd3d6"/><g fill="#a9aeb2"><rect x="50" y="24" width="30" height="8"/><rect x="50" y="40" width="30" height="8"/><rect x="50" y="56" width="30" height="8"/></g><rect x="62" y="4" width="6" height="12" fill="#a9aeb2"/>' +
      /* the blue-brick railway viaduct with a train crossing */
      '<rect x="0" y="100" width="400" height="50" fill="' + BLUEBRICK + '"/>' + arches + '<rect x="0" y="96" width="400" height="6" fill="#2c3440"/>' +
      '<g class="kofTrain"><rect x="40" y="80" width="200" height="16" rx="3" fill="#cdd2d6"/><rect x="40" y="90" width="200" height="4" fill="' + WMR + '"/><g fill="#1c2a36"><rect x="50" y="83" width="18" height="6"/><rect x="80" y="83" width="18" height="6"/><rect x="150" y="83" width="18" height="6"/><rect x="180" y="83" width="18" height="6"/></g></g>' +
      '<rect x="0" y="150" width="226" height="46" fill="#9a5a44"/><g fill="#e7dccb"><rect x="14" y="160" width="20" height="14"/><rect x="190" y="160" width="20" height="14"/></g>' +
      /* the painted wall */
      '<rect x="226" y="120" width="174" height="76" fill="#8f4f3c"/><path d="M226 136h174M226 152h174M226 168h174M226 184h174" stroke="#7a4030" stroke-width="1"/>' +
      '<path d="M226 196q30 -30 60 -10t60 -16t54 -6v32z" fill="' + LEAF + '" opacity=".75"/>' +
      tag("KOFI", 246, 170, 40, GOLD, -8) + tag("BRUMTOWN", 300, 190, 16, "#fff", -4) +
      '<rect x="0" y="196" width="400" height="12" fill="#9b9b97"/><rect x="0" y="208" width="400" height="52" fill="#3c3c40"/>' +
      '<path d="M0 236h40M70 236h40M140 236h40M210 236h40M280 236h40M350 236h40" stroke="#e8e2c8" stroke-width="3"/>' +
      car(0, 212, ROSE, "kofCar") + car(0, 212, "#2c6fb3", "kofCar kofK2") +
      '<rect x="160" y="120" width="5" height="78" fill="#333"/>' +
      plate(96, 108, 134, "HIGH ST DERITEND", "DIGBETH B5") + plate(102, 142, 122, "FLOODGATE ST", "B5"),
      sky("kofk1", "#8aa6bf", "#d9e2e8"));
  }

  window.SCENES = { kofstation, kofbullring, kofcouncil, koflibrary, kofcorner };
})();
