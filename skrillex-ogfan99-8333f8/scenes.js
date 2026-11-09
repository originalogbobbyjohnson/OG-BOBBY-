/* Skrillex game (GENRES / Regions: Los Angeles + SoCal; Northeast LA - Highland Park / Eagle Rock).
   Highland Park's A Line stop, the Southwest Museum, Heritage Square and York Blvd are already Reverie's, so room 1 is the
   Metro Local 81 bus stop on N Figueroa St at Avenue 56, by the Highland Theatre. CSS classes prefixed "skx" (the page's anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes skxFlk{0%,100%{opacity:1}46%{opacity:.8}50%{opacity:.3}54%{opacity:.95}}.skxFlk{animation:skxFlk 2.6s infinite}.skxF2{animation-delay:1.1s}' +
    '@keyframes skxPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}.skxPulse{transform-box:fill-box;transform-origin:50% 50%;animation:skxPulse .45s ease-in-out infinite}.skxP2{animation-delay:.22s}' +
    '@keyframes skxBeam{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.skxBeam{transform-box:fill-box;transform-origin:50% 100%;animation:skxBeam 3s ease-in-out infinite}.skxB2{animation-delay:-1.5s}.skxB3{animation-delay:-.7s}' +
    '@keyframes skxBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.skxBob{animation:skxBob .5s ease-in-out infinite}.skxBb2{animation-delay:.25s}' +
    '@keyframes skxHover{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.skxHover{animation:skxHover 2.4s ease-in-out infinite}' +
    '@keyframes skxBlink{0%,100%{opacity:1}50%{opacity:.15}}.skxBlink{animation:skxBlink .9s steps(1) infinite}.skxK2{animation-delay:.45s}' +
    '@keyframes skxCar{0%{transform:translateX(-90px)}100%{transform:translateX(490px)}}.skxCar{animation:skxCar 8s linear infinite}' +
    '@keyframes skxHawk{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-30px)}}.skxHawk{animation:skxHawk 14s linear infinite}' +
    '@keyframes skxEq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.skxEq{transform-box:fill-box;transform-origin:50% 100%;animation:skxEq .6s ease-in-out infinite}.skxE2{animation-delay:.15s}.skxE3{animation-delay:.3s}.skxE4{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const METRO = "#e56b1f", PINK = "#ff2e88", LIME = "#39ff14", CYAN = "#00e5ff";
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 89) % 400) + '" cy="' + (6 + (i * 47) % 64) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const palm = (x, base, h) =>
    '<path d="M' + x + ' ' + base + 'q4 -' + (h / 2) + ' 2 -' + h + '" stroke="#3b2a1e" stroke-width="4" fill="none"/>' +
    '<g transform="translate(' + (x + 2) + ' ' + (base - h) + ')" fill="#1f4a2c"><path d="M0 0q-22 -2 -30 12q14 -8 30 -12z"/><path d="M0 0q22 -2 30 12q-14 -8 -30 -12z"/><path d="M0 0q-14 -14 -30 -10q16 2 30 10z"/><path d="M0 0q14 -14 30 -10q-16 2 -30 10z"/><path d="M0 0q-2 -18 8 -24q-6 10 -8 24z"/></g>';
  /* crowd of simple silhouettes, arms up, no faces */
  const crowd = (y, n, fill) => {
    let s = ""; for (let i = 0; i < n; i++) {
      const x = 8 + i * (400 / n), up = i % 3 === 0;
      s += '<g class="skxBob' + (i % 2 ? ' skxBb2' : '') + '" fill="' + fill + '"><circle cx="' + x + '" cy="' + (y - 18) + '" r="7"/><rect x="' + (x - 8) + '" y="' + (y - 11) + '" width="16" height="24" rx="6"/>' +
        (up ? '<path d="M' + (x - 6) + ' ' + (y - 8) + 'l-8 -18M' + (x + 6) + ' ' + (y - 8) + 'l8 -18" stroke="' + fill + '" stroke-width="4" stroke-linecap="round"/>' : '') + '</g>';
    }
    return s;
  };

  /* 1. Metro Local 81 pulling up on N Figueroa St at Avenue 56, Highland Park, at dusk */
  function skxbus() {
    let wins = "";
    for (let x = 52; x < 250; x += 32) wins += '<rect x="' + x + '" y="134" width="24" height="26" rx="2" fill="#bfe3ff" opacity=".85"/>';
    const bus = '<g class="anim-train">' +
      '<rect x="30" y="122" width="250" height="78" rx="10" fill="' + METRO + '" stroke="#7a3410" stroke-width="2"/>' +
      '<rect x="30" y="122" width="250" height="8" rx="4" fill="#f3f3f3"/>' + wins +
      '<rect x="252" y="134" width="22" height="40" rx="3" fill="#bfe3ff" opacity=".9"/>' +
      '<rect x="190" y="166" width="40" height="30" fill="#5a2a10" opacity=".5"/>' +
      '<rect x="244" y="126" width="32" height="10" rx="2" fill="#111"/><text x="260" y="134" text-anchor="middle" ' + F + ' font-size="8" fill="#ffcf40">81</text>' +
      '<circle cx="80" cy="200" r="13" fill="#1b1b1b"/><circle cx="80" cy="200" r="5" fill="#888"/><circle cx="236" cy="200" r="13" fill="#1b1b1b"/><circle cx="236" cy="200" r="5" fill="#888"/>' +
      '<rect x="274" y="180" width="8" height="6" fill="#ffe7a0"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#skxs1)"/>' + stars(10) +
      /* Mount Washington hills with lit houses */
      '<path d="M0 104q60 -40 130 -20t140 -14t130 6v40H0z" fill="#3b2f4a"/>' +
      '<g fill="#ffd98a"><rect x="60" y="92" width="4" height="3"/><rect x="150" y="86" width="4" height="3" class="skxFlk"/><rect x="230" y="80" width="4" height="3"/><rect x="330" y="84" width="4" height="3" class="skxFlk skxF2"/></g>' +
      /* Figueroa storefronts */
      '<rect x="0" y="100" width="400" height="100" fill="#2a2233"/>' +
      '<rect x="6" y="108" width="86" height="92" fill="#c9a27a"/><rect x="14" y="150" width="70" height="40" fill="#3a2a22"/><rect x="14" y="140" width="70" height="8" fill="#8b2e2e"/>' +
      '<rect x="98" y="100" width="98" height="100" fill="#e6d3b3"/><path d="M98 100h98l-8 -10h-82z" fill="#b5502f"/><rect x="108" y="150" width="78" height="40" fill="#2e2a3a"/>' +
      '<rect x="202" y="112" width="90" height="88" fill="#7f9c8e"/><rect x="212" y="150" width="70" height="40" fill="#24323a"/>' +
      '<rect x="298" y="104" width="102" height="96" fill="#d8b78f"/><rect x="306" y="150" width="86" height="40" fill="#3a2a22"/>' +
      palm(196, 104, 62) + palm(296, 104, 74) +
      '<rect x="0" y="200" width="400" height="60" fill="#2b2b33"/><rect x="0" y="198" width="400" height="5" fill="#9a9aa3"/>' +
      '<path d="M0 238h400" stroke="#f2c14e" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* bus stop pole + black name sign */
      '<rect x="330" y="96" width="4" height="104" fill="#9aa3ab"/>' +
      '<rect x="296" y="60" width="98" height="40" rx="3" fill="#111" stroke="#444"/>' +
      '<text x="345" y="76" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">N FIGUEROA ST</text>' +
      '<text x="345" y="92" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">AVENUE 56</text>' +
      '<rect x="316" y="104" width="32" height="20" rx="10" fill="' + METRO + '"/><text x="332" y="118" text-anchor="middle" ' + F + ' font-size="13" fill="#fff">81</text>' +
      bus,
      sky("skxs1", "#1a1033", "#e0735a"));
  }

  /* 2. The Highland Theatre on Figueroa: 1925 Spanish stucco, the red neon rooftop sign and the marquee */
  function skxtheatre() {
    const letters = "HIGHLAND".split("");
    let neon = "";
    letters.forEach((c, i) => {
      neon += '<text x="' + (94 + i * 27) + '" y="62" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="30" fill="#ff3b3b" stroke="#ffb3b3" stroke-width=".8" class="skxFlk' + (i % 3 === 1 ? ' skxF2' : '') + '">' + c + '</text>';
    });
    let bulbs = "";
    for (let x = 106; x <= 294; x += 12) bulbs += '<circle cx="' + x + '" cy="128" r="2.4" fill="#ffe27a" class="skxBlink' + (x % 24 ? ' skxK2' : '') + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#skxs2)"/>' + stars(14) +
      /* rooftop steel frame */
      '<path d="M82 74V30h236v44" stroke="#4b4b55" stroke-width="3" fill="none"/>' +
      '<path d="M82 30l30 44M112 30l30 44M142 30l30 44M172 30l30 44M202 30l30 44M232 30l30 44M262 30l30 44M292 30l26 38" stroke="#3a3a44" stroke-width="1.5"/>' +
      neon +
      /* facade */
      '<rect x="60" y="74" width="280" height="140" fill="#efe2c6" stroke="#b9a27a" stroke-width="2"/>' +
      '<path d="M60 74h280v8H60z" fill="#c96a3a"/>' +
      '<g fill="#3a2a3a"><path d="M84 160v-30q14 -16 28 0v30z"/><path d="M288 160v-30q14 -16 28 0v30z"/></g>' +
      '<g fill="#7a5a3a"><rect x="74" y="96" width="20" height="22" rx="10"/><rect x="306" y="96" width="20" height="22" rx="10"/></g>' +
      /* marquee */
      '<path d="M96 120h208l12 28H84z" fill="#22222c" stroke="#ffe27a" stroke-width="2"/>' + bulbs +
      '<text x="200" y="143" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">TONIGHT  SONNY  ON THE DECKS</text>' +
      '<rect x="150" y="160" width="100" height="54" fill="#2a1f2a"/><path d="M200 160v54" stroke="#7a5a3a" stroke-width="2"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#2b2b33"/><rect x="0" y="212" width="400" height="4" fill="#9a9aa3"/>' +
      '<g class="skxCar"><rect x="0" y="222" width="70" height="20" rx="6" fill="#5b8cff"/><rect x="12" y="214" width="44" height="12" rx="4" fill="#5b8cff"/><circle cx="14" cy="244" r="6" fill="#111"/><circle cx="56" cy="244" r="6" fill="#111"/><rect x="66" y="228" width="5" height="4" fill="#ffe7a0"/></g>' +
      palm(30, 214, 120) + palm(370, 214, 104),
      sky("skxs2", "#0b0820", "#3b1d4a"));
  }

  /* 3. The garage studio: "I write songs in my garage with my friends" - laptop, synth, amp, string lights */
  function skxgarage() {
    let lights = "";
    for (let x = 40; x <= 360; x += 20) lights += '<circle cx="' + x + '" cy="' + (52 + Math.round(8 * Math.sin(x / 26))) + '" r="3" fill="' + [PINK, LIME, CYAN, "#ffd23f"][(x / 20) % 4] + '" class="skxBlink' + ((x / 20) % 2 ? ' skxK2' : '') + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#14101c"/>' +
      /* garage opening */
      '<rect x="20" y="26" width="360" height="200" fill="#241b30" stroke="#5a4a66" stroke-width="6"/>' +
      '<rect x="20" y="26" width="360" height="22" fill="#6b5a78"/><path d="M20 34h360M20 41h360" stroke="#4e4058" stroke-width="2"/>' +
      '<path d="M30 54q170 22 340 0" stroke="#2a2a2a" stroke-width="1" fill="none"/>' + lights +
      /* posters (no logos) */
      '<rect x="40" y="70" width="44" height="58" fill="' + PINK + '" transform="rotate(-4 62 99)"/><path d="M48 84h28M48 94h20" stroke="#14101c" stroke-width="4" transform="rotate(-4 62 99)"/>' +
      '<rect x="316" y="72" width="44" height="58" fill="' + LIME + '" transform="rotate(5 338 101)"/><circle cx="338" cy="96" r="12" fill="#14101c" transform="rotate(5 338 101)"/>' +
      /* amp stack with pulsing cones */
      '<rect x="40" y="140" width="70" height="84" rx="3" fill="#1a1a1a" stroke="#444"/>' +
      '<circle cx="75" cy="166" r="16" fill="#333" class="skxPulse"/><circle cx="75" cy="166" r="6" fill="#111"/>' +
      '<circle cx="75" cy="204" r="14" fill="#333" class="skxPulse skxP2"/><circle cx="75" cy="204" r="5" fill="#111"/>' +
      /* table with laptop + synth */
      '<rect x="130" y="170" width="170" height="8" fill="#7a5434"/><rect x="138" y="178" width="6" height="46" fill="#5a3a24"/><rect x="286" y="178" width="6" height="46" fill="#5a3a24"/>' +
      '<path d="M150 170l8 -34h64l8 34z" fill="#c8ccd4"/><rect x="160" y="140" width="60" height="26" fill="#0d1a24"/>' +
      '<g fill="' + CYAN + '"><rect x="166" y="150" width="5" height="12" class="skxEq"/><rect x="174" y="150" width="5" height="12" class="skxEq skxE2"/><rect x="182" y="150" width="5" height="12" class="skxEq skxE3"/><rect x="190" y="150" width="5" height="12" class="skxEq skxE4"/><rect x="198" y="150" width="5" height="12" class="skxEq skxE2"/><rect x="206" y="150" width="5" height="12" class="skxEq"/></g>' +
      '<rect x="236" y="158" width="60" height="12" rx="2" fill="#2a2a32"/><g fill="#eee"><rect x="240" y="161" width="5" height="7"/><rect x="247" y="161" width="5" height="7"/><rect x="254" y="161" width="5" height="7"/><rect x="261" y="161" width="5" height="7"/><rect x="268" y="161" width="5" height="7"/><rect x="275" y="161" width="5" height="7"/><rect x="282" y="161" width="5" height="7"/></g>' +
      /* guitar leaning */
      '<g transform="rotate(14 334 190)"><rect x="331" y="120" width="6" height="56" fill="#3a2a1a"/><ellipse cx="334" cy="196" rx="18" ry="22" fill="#d8402f"/><circle cx="334" cy="192" r="5" fill="#1a1a1a"/></g>' +
      '<rect x="20" y="224" width="360" height="36" fill="#3a3a40"/>' +
      tag("GARAGE SESSIONS", 120, 116, 20, "#fff", -4),
      "");
  }

  /* 4. The Mothership: the spaceship DJ booth from his 2011-12 tour, lasers sweeping a festival crowd */
  function skxmothership() {
    return svg(
      '<rect width="400" height="260" fill="url(#skxs4)"/>' + stars(22) +
      '<g opacity=".7"><path d="M120 150L40 0h30z" fill="' + LIME + '" class="skxBeam"/><path d="M280 150L360 0h-30z" fill="' + PINK + '" class="skxBeam skxB2"/><path d="M200 150L200 0h12z" fill="' + CYAN + '" class="skxBeam skxB3"/></g>' +
      '<rect x="20" y="40" width="70" height="110" fill="#0c0c18" stroke="#333"/><rect x="310" y="40" width="70" height="110" fill="#0c0c18" stroke="#333"/>' +
      '<g class="skxFlk"><rect x="28" y="48" width="54" height="94" fill="' + PINK + '" opacity=".35"/><rect x="318" y="48" width="54" height="94" fill="' + CYAN + '" opacity=".35"/></g>' +
      /* the ship */
      '<g class="skxHover">' +
      '<path d="M90 150q110 -86 220 0z" fill="#3a3f52" stroke="#8a93b0" stroke-width="2"/>' +
      '<path d="M150 112q50 -36 100 0z" fill="#9adfff" opacity=".55"/>' +
      '<rect x="80" y="148" width="240" height="18" rx="9" fill="#5a6280" stroke="#aab2cc" stroke-width="2"/>' +
      '<g fill="' + LIME + '"><circle cx="104" cy="157" r="3" class="skxBlink"/><circle cx="136" cy="157" r="3" class="skxBlink skxK2"/><circle cx="168" cy="157" r="3" class="skxBlink"/><circle cx="232" cy="157" r="3" class="skxBlink skxK2"/><circle cx="264" cy="157" r="3" class="skxBlink"/><circle cx="296" cy="157" r="3" class="skxBlink skxK2"/></g>' +
      /* DJ silhouette in the cockpit, no face */
      '<circle cx="200" cy="118" r="8" fill="#0c0c18"/><rect x="190" y="124" width="20" height="22" rx="6" fill="#0c0c18"/>' +
      '</g>' +
      '<rect x="0" y="176" width="400" height="84" fill="#07060c"/>' +
      crowd(236, 14, "#1d1a2a"),
      sky("skxs4", "#05040c", "#2a0f3a"));
  }

  /* 5. Colorado Blvd and Eagle Rock Blvd in Eagle Rock, Northeast LA: the giant Eagle Rock up on the hill behind */
  function skxcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#skxs5)"/>' +
      '<g class="skxHawk"><path d="M0 40q8 -8 16 0q8 -8 16 0" stroke="#2a1f1a" stroke-width="2.5" fill="none"/></g>' +
      /* hillside, oaks and the rock with its eagle-shaped shadow */
      '<path d="M0 150q80 -60 200 -70t200 40v40H0z" fill="#8a9a5a"/>' +
      '<path d="M150 118q-6 -46 50 -58q60 -6 70 44q2 18 -10 24h-104q-10 0 -6 -10z" fill="#c9a575" stroke="#8a6a44" stroke-width="2"/>' +
      '<path d="M176 92q12 -4 24 6q12 -10 24 -6q-6 8 -16 8l-8 14l-8 -14q-10 0 -16 -8z" fill="#5a4030" opacity=".85"/>' +
      '<g fill="#3e5a2e"><circle cx="110" cy="128" r="14"/><circle cx="126" cy="122" r="12"/><circle cx="290" cy="124" r="14"/><circle cx="306" cy="130" r="12"/></g>' +
      /* wall with the tag */
      '<rect x="0" y="150" width="400" height="70" fill="#5c5f6a"/>' +
      '<path d="M0 162h400M0 176h400M0 190h400M0 204h400" stroke="#4a4d57" stroke-width="1"/>' +
      tag("SKRILLEX", 40, 202, 44, PINK, -5) +
      tag("LOST BOYS", 250, 178, 18, LIME, 4) +
      '<rect x="0" y="220" width="400" height="40" fill="#2b2b33"/><rect x="0" y="218" width="400" height="4" fill="#9a9aa3"/>' +
      /* green street signs */
      '<rect x="356" y="94" width="5" height="126" fill="#9aa3ab"/>' +
      '<rect x="290" y="96" width="106" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="343" y="109" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">COLORADO BLVD</text>' +
      '<rect x="300" y="118" width="96" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="348" y="131" text-anchor="middle" ' + F + ' font-size="9" fill="#fff">EAGLE ROCK BLVD</text>' +
      '<g class="skxCar"><rect x="0" y="230" width="64" height="18" rx="6" fill="' + METRO + '"/><circle cx="12" cy="250" r="5" fill="#111"/><circle cx="52" cy="250" r="5" fill="#111"/></g>',
      sky("skxs5", "#7ec8f0", "#f7d9a8"));
  }

  window.SCENES = { skxbus, skxtheatre, skxgarage, skxmothership, skxcorner };
})();
