/* Tiësto game (GENRES: EDM + DANCE; INTERNATIONAL region: UK + EUROPE; Breda, Netherlands).
   Rooms: Breda station (NS Intercity + Sprinter under the big wave roof), the club booth in Breda where a teenage Tijs Verwest
   played weekend sets ten till four, Breda Castle and the Spanjaardsgat water gate on the harbour, the 2004 Athens opening
   ceremony (first DJ to play live at an Olympic Games; drawn with no rings or logos), and Grote Markt at Ridderstraat with the
   Grote Kerk tower behind. CSS classes prefixed "tsx" (the page's anim-train is kept). No logos, no faces, no 9s. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tsxTw{0%,100%{opacity:1}50%{opacity:.2}}.tsxTw{animation:tsxTw 1.4s ease-in-out infinite}.tsxT2{animation-delay:.45s}.tsxT3{animation-delay:.9s}' +
    '@keyframes tsxBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.tsxBob{animation:tsxBob .6s ease-in-out infinite}.tsxBb2{animation-delay:.3s}' +
    '@keyframes tsxSpin{to{transform:rotate(360deg)}}.tsxSpin{transform-box:fill-box;transform-origin:50% 50%;animation:tsxSpin 1.8s linear infinite}' +
    '@keyframes tsxBeam{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.tsxBeam{transform-box:fill-box;transform-origin:50% 100%;animation:tsxBeam 3.2s ease-in-out infinite}.tsxBm2{animation-delay:-1.6s}' +
    '@keyframes tsxBoat{0%,100%{transform:translate(0,0)}50%{transform:translate(14px,-2px)}}.tsxBoat{animation:tsxBoat 5s ease-in-out infinite}' +
    '@keyframes tsxFlame{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.2)}}.tsxFlame{transform-box:fill-box;transform-origin:50% 100%;animation:tsxFlame .5s ease-in-out infinite}' +
    '@keyframes tsxBird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-30px)}}.tsxBird{animation:tsxBird 12s linear infinite}' +
    '@keyframes tsxBike{0%{transform:translateX(-80px)}100%{transform:translateX(480px)}}.tsxBike{animation:tsxBike 10s linear infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const RED = "#ff3b4e", GLD = "#ffc94a", SKY = "#3ec7ff", NSY = "#ffc917", NSB = "#003082";
  const stars = (n, y0, y1) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = (i * 73 + 17) % 400, y = y0 + ((i * 37) % (y1 - y0));
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (i % 3 ? 0.9 : 1.5) + '" fill="#fff" class="tsxTw' + (i % 3 === 1 ? ' tsxT2' : i % 3 === 2 ? ' tsxT3' : '') + '"/>';
    }
    return s;
  };
  const crowd = (y, n, fill) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = 6 + i * (400 / n), up = i % 3 === 0;
      s += '<g class="tsxBob' + (i % 2 ? ' tsxBb2' : '') + '" fill="' + fill + '"><circle cx="' + x + '" cy="' + (y - 14) + '" r="5.5"/><rect x="' + (x - 6) + '" y="' + (y - 9) + '" width="12" height="22" rx="5"/>' +
        (up ? '<path d="M' + (x + 4) + ' ' + (y - 6) + 'l7 -15M' + (x - 4) + ' ' + (y - 6) + 'l-7 -15" stroke="' + fill + '" stroke-width="3" stroke-linecap="round"/>' : '') + '</g>';
    }
    return s;
  };
  const tree = (x, y, r, c) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (r + 10) + '" fill="#5a3e2a"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * .5) + '" cy="' + (y + r * .3) + '" r="' + (r * .7) + '" fill="' + c + '"/><circle cx="' + (x + r * .5) + '" cy="' + (y + r * .3) + '" r="' + (r * .7) + '" fill="' + c + '"/>';
  const bird = (x, y, cls) => '<path class="tsxBird ' + (cls || "") + '" d="M' + x + ' ' + y + 'q5 -5 10 0q5 -5 10 0" stroke="#2a2a2a" stroke-width="2" fill="none"/>';

  /* 1. Breda station: the big white wave roof over the platforms, blue NS sign with IC and SPR, a yellow double-deck train pulling in */
  function tsxstation() {
    let wins = "", wins2 = "";
    for (let x = 40; x < 290; x += 26) { wins += '<rect x="' + x + '" y="134" width="18" height="12" rx="2" fill="#1d2433"/>'; wins2 += '<rect x="' + x + '" y="156" width="18" height="12" rx="2" fill="#1d2433"/>'; }
    const train = '<g class="anim-train">' +
      '<rect x="20" y="124" width="282" height="64" rx="8" fill="' + NSY + '" stroke="#1a1a1a" stroke-width="2"/>' +
      '<path d="M302 124q26 4 30 34v30h-30z" fill="' + NSY + '" stroke="#1a1a1a" stroke-width="2"/>' +
      '<path d="M306 132q16 4 20 24h-20z" fill="#1d2433"/>' + wins + wins2 +
      '<rect x="20" y="174" width="312" height="8" fill="' + NSB + '"/>' +
      '<g fill="#1a1a1a"><rect x="100" y="132" width="10" height="44"/><rect x="214" y="132" width="10" height="44"/></g>' +
      '<rect x="318" y="164" width="8" height="5" fill="#fff6c4"/>' +
      '<g fill="#111"><circle cx="60" cy="192" r="7"/><circle cx="84" cy="192" r="7"/><circle cx="240" cy="192" r="7"/><circle cx="264" cy="192" r="7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tsxs1)"/>' + bird(10, 40, "") +
      /* wave roof */
      '<path d="M0 70Q100 30 200 62T400 54V84Q300 92 200 88T0 98z" fill="#f4f4f2" stroke="#b8bcc4" stroke-width="2"/>' +
      '<path d="M0 98Q100 92 200 88T400 84" stroke="#8a919c" stroke-width="2" fill="none"/>' +
      '<g fill="#9aa0aa"><rect x="40" y="94" width="6" height="104"/><rect x="200" y="88" width="6" height="110"/><rect x="360" y="84" width="6" height="114"/></g>' +
      /* station sign: NS blue with white letters */
      '<rect x="24" y="92" width="150" height="26" rx="3" fill="' + NSB + '" stroke="#fff" stroke-width="2"/>' +
      '<text x="70" y="110" text-anchor="middle" ' + F + ' font-size="15" fill="#fff">Breda</text>' +
      '<rect x="112" y="97" width="24" height="16" rx="3" fill="' + NSY + '"/><text x="124" y="109" text-anchor="middle" ' + F + ' font-size="10" fill="' + NSB + '">IC</text>' +
      '<rect x="140" y="97" width="30" height="16" rx="3" fill="#fff"/><text x="155" y="109" text-anchor="middle" ' + F + ' font-size="10" fill="' + NSB + '">SPR</text>' +
      train +
      '<rect x="0" y="198" width="400" height="62" fill="#8d8c88"/><rect x="0" y="198" width="400" height="6" fill="#f2f2f2"/>' +
      '<path d="M0 226h400" stroke="#7a7975" stroke-width="1"/>' +
      /* a traveller with a record bag */
      '<g fill="#2b3644"><circle cx="356" cy="214" r="5"/><rect x="350" y="219" width="12" height="22" rx="4"/></g>' +
      '<rect x="364" y="226" width="16" height="14" rx="2" fill="' + RED + '"/>' +
      '<g fill="' + GLD + '"><circle cx="380" cy="212" r="5"/><rect x="374" y="217" width="12" height="22" rx="4"/></g>',
      sky("tsxs1", "#8ec5ee", "#e8f2fa"));
  }

  /* 2. The club booth: two turntables spinning, a mixer, the crowd below, a neon "10 PM - 4 AM" sign */
  function tsxclub() {
    const deck = (x) => '<rect x="' + x + '" y="150" width="84" height="40" rx="4" fill="#2a2d36" stroke="#5a5e6a" stroke-width="2"/>' +
      '<g class="tsxSpin"><circle cx="' + (x + 36) + '" cy="168" r="16" fill="#111"/><circle cx="' + (x + 36) + '" cy="168" r="12" fill="none" stroke="#333" stroke-width="1"/><circle cx="' + (x + 36) + '" cy="168" r="5" fill="' + RED + '"/><rect x="' + (x + 35) + '" y="153" width="2" height="6" fill="#fff"/></g>' +
      '<path d="M' + (x + 70) + ' 156l-8 18" stroke="#c4cad4" stroke-width="3" stroke-linecap="round"/>';
    return svg(
      '<rect width="400" height="260" fill="#120d20"/>' + stars(18, 8, 60) +
      '<path class="tsxBeam" d="M70 150L40 0h60z" fill="' + RED + '" opacity=".22"/><path class="tsxBeam tsxBm2" d="M330 150L300 0h60z" fill="' + SKY + '" opacity=".22"/>' +
      '<path class="tsxBeam tsxBm2" d="M200 150L176 0h48z" fill="' + GLD + '" opacity=".18"/>' +
      /* neon hours sign */
      '<rect x="128" y="24" width="144" height="34" rx="6" fill="#1d1430" stroke="' + RED + '" stroke-width="3" class="tsxTw"/>' +
      '<text x="200" y="47" text-anchor="middle" ' + F + ' font-size="16" fill="' + RED + '">10 PM - 4 AM</text>' +
      /* booth */
      '<rect x="40" y="186" width="320" height="74" fill="#2a1f3a"/><rect x="40" y="182" width="320" height="8" fill="' + GLD + '"/>' +
      deck(60) + deck(256) +
      '<rect x="160" y="146" width="80" height="44" rx="4" fill="#1d2030" stroke="#5a5e6a" stroke-width="2"/>' +
      '<g fill="' + SKY + '"><rect x="172" y="154" width="6" height="18" class="tsxTw"/><rect x="186" y="158" width="6" height="14" class="tsxTw tsxT2"/><rect x="208" y="152" width="6" height="20" class="tsxTw tsxT3"/><rect x="222" y="156" width="6" height="16" class="tsxTw"/></g>' +
      '<rect x="176" y="178" width="48" height="5" rx="2" fill="#5a5e6a"/><rect x="194" y="175" width="10" height="11" rx="2" fill="#e8e8e8"/>' +
      /* headphones resting on the mixer */
      '<path d="M182 146q18 -20 36 0" stroke="#c4cad4" stroke-width="3" fill="none"/><rect x="176" y="142" width="10" height="12" rx="3" fill="' + RED + '"/><rect x="214" y="142" width="10" height="12" rx="3" fill="' + RED + '"/>' +
      /* crate of records */
      '<rect x="290" y="118" width="60" height="28" fill="#6a4a2e"/><g fill="#111"><rect x="294" y="104" width="4" height="16"/><rect x="300" y="102" width="4" height="18"/><rect x="306" y="105" width="4" height="15"/><rect x="312" y="103" width="4" height="17"/><rect x="318" y="106" width="4" height="14"/></g>' +
      crowd(258, 20, "#07050c"),
      '');
  }

  /* 3. Breda Castle and the Spanjaardsgat: the red-brick water gate with two round towers, the castle behind, boats on the harbour */
  function tsxcastle() {
    let cwin = "";
    for (let x = 210; x < 390; x += 22) cwin += '<rect x="' + x + '" y="96" width="10" height="16" fill="#e8e4da" stroke="#7a3a24" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tsxs3)"/>' +
      '<g fill="#fff" opacity=".9"><path d="M40 40q10 -12 22 -4q10 -10 20 2q12 0 10 10h-56q-4 -6 4 -8z"/><path d="M300 30q10 -12 22 -4q10 -10 20 2q12 0 10 10h-56q-4 -6 4 -8z"/></g>' +
      bird(0, 60, "") +
      /* the castle (pale with brick trim) behind */
      '<rect x="200" y="84" width="200" height="64" fill="#e3d6be"/><path d="M196 84h208l-12 -16H208z" fill="#4a5466"/>' + cwin +
      '<rect x="270" y="52" width="24" height="32" fill="#e3d6be"/><path d="M266 52l16 -18l16 18z" fill="#4a5466"/>' +
      tree(160, 110, 24, "#3f8a3a") + tree(394, 112, 22, "#3f8a3a") +
      /* Spanjaardsgat: two round brick towers with dark pointed caps and the gate between */
      '<rect x="40" y="96" width="44" height="74" fill="#a8432c"/><path d="M36 96l26 -30l26 30z" fill="#2f3440"/>' +
      '<rect x="128" y="96" width="44" height="74" fill="#a8432c"/><path d="M124 96l26 -30l26 30z" fill="#2f3440"/>' +
      '<rect x="80" y="112" width="52" height="58" fill="#b5503a"/><path d="M80 112l6 -8h40l6 8z" fill="#7a3324"/>' +
      '<path d="M90 170v-26a16 16 0 0 1 32 0v26z" fill="#2a3644"/>' +
      '<g fill="#7a3324"><rect x="54" y="116" width="8" height="12"/><rect x="142" y="116" width="8" height="12"/></g>' +
      '<path d="M40 130h44M128 130h44M40 150h44M128 150h44" stroke="#8c3624" stroke-width="1.5"/>' +
      /* harbour water */
      '<rect x="0" y="168" width="400" height="92" fill="#3d7aa8"/>' +
      '<path d="M0 186q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0M0 214q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#6aa6d0" stroke-width="2" fill="none"/>' +
      /* a little boat with a DJ speaker */
      '<g class="tsxBoat"><path d="M210 222h90l-12 16h-66z" fill="#f4f4f2" stroke="#2a2a2a" stroke-width="2"/><rect x="236" y="206" width="22" height="16" rx="2" fill="#1d2433"/><circle cx="247" cy="214" r="4" fill="' + RED + '" class="tsxTw"/>' +
      '<g fill="' + GLD + '"><circle cx="276" cy="206" r="5"/><rect x="270" y="210" width="12" height="13" rx="4"/></g></g>' +
      '<rect x="0" y="244" width="400" height="16" fill="#8d8c88"/>',
      sky("tsxs3", "#7ec0ee", "#eef6fc"));
  }

  /* 4. Athens 2004: the white arched roof over the stadium at night, the flame, a DJ riser in the middle of the field, beams and a crowd */
  function tsxathens() {
    let ribs = "";
    for (let x = 30; x <= 370; x += 20) ribs += '<path d="M' + x + ' 96L200 34" stroke="#d8dce4" stroke-width="1" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tsxs4)"/>' + stars(26, 6, 40) +
      /* the two great white arches with the glass roof hung beneath */
      '<path d="M10 120Q200 -40 390 120" stroke="#f4f6f8" stroke-width="8" fill="none"/>' +
      '<path d="M30 112Q200 -10 370 112" stroke="#e8ecf2" stroke-width="3" fill="none"/>' + ribs +
      '<path d="M20 100Q200 60 380 100v10Q200 72 20 110z" fill="#cfd8e4" opacity=".55"/>' +
      /* stands */
      '<path d="M0 128q200 -24 400 0v40H0z" fill="#2a2f40"/>' +
      '<g fill="#ffffff" opacity=".55">' + Array.from({ length: 40 }, (_, i) => '<circle cx="' + (6 + i * 10) + '" cy="' + (128 + (i % 4) * 8) + '" r="1.4" class="tsxTw' + (i % 3 === 1 ? ' tsxT2' : i % 3 === 2 ? ' tsxT3' : '') + '"/>').join("") + '</g>' +
      /* the cauldron and flame */
      '<path d="M344 112h20l-4 20h-12z" fill="#c9a24a"/><path class="tsxFlame" d="M354 112q-12 -14 0 -32q12 18 0 32z" fill="#ff8a1a"/><path class="tsxFlame" d="M354 112q-6 -8 0 -18q6 10 0 18z" fill="#ffe14a"/>' +
      /* beams */
      '<path class="tsxBeam" d="M120 200L96 40h48z" fill="' + SKY + '" opacity=".22"/><path class="tsxBeam tsxBm2" d="M280 200L256 40h48z" fill="' + RED + '" opacity=".22"/>' +
      '<path class="tsxBeam tsxBm2" d="M200 196L182 30h36z" fill="' + GLD + '" opacity=".2"/>' +
      /* the field and the DJ riser */
      '<rect x="0" y="168" width="400" height="92" fill="#1f5a34"/>' +
      '<rect x="146" y="166" width="108" height="30" fill="#e8ecf2"/><rect x="146" y="162" width="108" height="6" fill="' + GLD + '"/>' +
      '<rect x="166" y="150" width="68" height="14" rx="2" fill="#1d2030"/><circle cx="182" cy="157" r="5" fill="#111" class="tsxSpin"/><circle cx="218" cy="157" r="5" fill="#111" class="tsxSpin"/>' +
      '<g fill="#14161e"><circle cx="200" cy="132" r="6"/><rect x="193" y="137" width="14" height="16" rx="4"/><path d="M196 140l-10 -14M204 140l10 -14" stroke="#14161e" stroke-width="3" stroke-linecap="round" class="tsxBob"/></g>' +
      crowd(258, 24, "#0b0e18"),
      sky("tsxs4", "#081028", "#2a2050"));
  }

  /* 5. Grote Markt at Ridderstraat: blue Breda street signs, the TIËSTO wall, café terrace, the Grote Kerk tower behind */
  function tsxcorner() {
    const bike = '<g class="tsxBike"><circle cx="0" cy="226" r="8" fill="none" stroke="#111" stroke-width="2.5"/><circle cx="34" cy="226" r="8" fill="none" stroke="#111" stroke-width="2.5"/><path d="M0 226l12 -16h16l6 16M12 210l-4 -6M28 210l2 -6" stroke="' + RED + '" stroke-width="3" fill="none"/><g fill="#2b3644"><circle cx="18" cy="186" r="5"/><rect x="13" y="190" width="10" height="18" rx="4"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tsxs5)"/>' + bird(0, 30, "") +
      /* Grote Kerk tower: pale stone, stacked stages, the onion lantern and spire */
      '<rect x="168" y="70" width="64" height="90" fill="#dccfb2"/>' +
      '<rect x="176" y="40" width="48" height="32" fill="#e3d7bc"/>' +
      '<path d="M182 40q18 -26 36 0z" fill="#3e4a44"/>' +
      '<rect x="190" y="12" width="20" height="18" fill="#e3d7bc"/><path d="M188 12q12 -14 24 0z" fill="#3e4a44"/><rect x="199" y="0" width="2" height="6" fill="#3e4a44"/>' +
      '<g fill="#8a7a5c"><rect x="186" y="84" width="8" height="26" rx="4"/><rect x="206" y="84" width="8" height="26" rx="4"/><rect x="190" y="48" width="6" height="16" rx="3"/><rect x="204" y="48" width="6" height="16" rx="3"/></g>' +
      '<circle cx="200" cy="126" r="10" fill="#f4f0e4" stroke="#8a7a5c" stroke-width="2"/><path d="M200 126v-6M200 126h5" stroke="#2a2a2a" stroke-width="1.5"/>' +
      /* gabled market houses */
      '<path d="M0 160v-50l20 -20l20 20v50zM40 160v-60l18 -16l18 16v60zM76 160v-44l22 -18l22 18v44z" fill="#c9a07a"/>' +
      '<path d="M260 160v-56l20 -18l20 18v56zM300 160v-46l22 -18l22 18v46zM344 160v-60l28 -22l28 22v60z" fill="#b98c66"/>' +
      '<g fill="#5a6474"><rect x="12" y="116" width="8" height="12"/><rect x="52" y="112" width="8" height="12"/><rect x="92" y="122" width="8" height="12"/><rect x="274" y="114" width="8" height="12"/><rect x="316" y="122" width="8" height="12"/><rect x="364" y="112" width="8" height="12"/></g>' +
      /* the tagged wall */
      '<rect x="0" y="160" width="400" height="50" fill="#4a3f5c"/>' +
      '<path d="M0 174h400M0 188h400" stroke="#3c3350" stroke-width="1"/>' +
      tag("CLUB LIFE", 10, 182, 15, GLD, -4) +
      tag("TIËSTO", 120, 204, 40, RED, -4) +
      tag("BREDA", 300, 186, 18, SKY, -6) +
      '<rect x="0" y="210" width="400" height="50" fill="#6a6660"/><rect x="0" y="208" width="400" height="4" fill="#a6a9b0"/>' +
      '<path d="M0 236h400" stroke="#8a857e" stroke-width="1" stroke-dasharray="6 6"/>' + bike +
      /* café terrace umbrella */
      '<path d="M18 236v-32" stroke="#2a2a2a" stroke-width="2"/><path d="M-6 206q24 -16 48 0z" fill="' + RED + '"/><rect x="8" y="226" width="20" height="4" fill="#2a2a2a"/>' +
      /* street name signs: dark blue enamel, white letters */
      '<rect x="372" y="24" width="5" height="184" fill="#2a2a2a"/>' +
      '<rect x="270" y="24" width="126" height="26" rx="2" fill="#1d3a6e" stroke="#fff" stroke-width="2"/>' +
      '<text x="333" y="42" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">Grote Markt</text>' +
      '<rect x="270" y="54" width="126" height="26" rx="2" fill="#1d3a6e" stroke="#fff" stroke-width="2"/>' +
      '<text x="333" y="72" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">Ridderstraat</text>',
      sky("tsxs5", "#8fc2ea", "#eae6dc"));
  }

  window.SCENES = { tsxstation, tsxclub, tsxcastle, tsxathens, tsxcorner };
})();
