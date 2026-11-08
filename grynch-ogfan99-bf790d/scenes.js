/* grynch scenes (Regions tab: The Northwest; Ballard, Seattle). CSS classes and ids prefixed gr- (the page's own anim-train is kept).
   1 15th Ave NW & NW Market St on the RapidRide D Line: the curbside station with its canopy and tall red-and-yellow sign pole, a red-and-yellow RapidRide bus sliding in, Ballard brick behind, drizzle.
   2 The Ballard Locks (Hiram M. Chittenden Locks) on Salmon Bay: the concrete lock chamber and steel gates, a fishing boat rising and falling with the water, a salmon jumping at the fish ladder.
   3 "My Volvo": his silver 1986 Volvo 240 DL (no badge drawn) idling on a rainy Ballard side street, the gas gauge needle wobbling on E ("tank on empty"), exhaust puffing.
   4 "Street Lights": Ballard Ave NW at night, the 1890s brick blocks, old lamps glowing, the Ballard Centennial Bell Tower with its bell swinging.
   5 24th Ave NW and NW 85th St ("at the top of 24th or right on 85th", "Mr. Rogers"): green signs, GRYNCH tagged on the wall, the snowy Olympic Mountains over the Sound at sunset behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes grflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.gr-flk{animation:grflick 2.4s infinite}.gr-flk2{animation-delay:.8s}' +
    '@keyframes grrain{0%{transform:translate(0,-40px)}100%{transform:translate(-14px,280px)}}.gr-rn{animation:grrain 1.1s linear infinite}.gr-rn2{animation-delay:-.37s}.gr-rn3{animation-delay:-.74s}' +
    '@keyframes grboat{0%,100%{transform:translateY(22px)}50%{transform:translateY(0)}}.gr-boat{animation:grboat 9s ease-in-out infinite}' +
    '@keyframes grwater{0%,100%{transform:translateY(22px)}50%{transform:translateY(0)}}.gr-water{animation:grwater 9s ease-in-out infinite}' +
    '@keyframes grfish{0%,55%,100%{transform:translate(0,0) rotate(0);opacity:0}60%{opacity:1}75%{transform:translate(18px,-30px) rotate(-30deg);opacity:1}90%{transform:translate(36px,0) rotate(-70deg);opacity:0}}.gr-fish{transform-box:fill-box;animation:grfish 3.4s ease-in-out infinite}' +
    '@keyframes grgull{from{transform:translate(-40px,0)}to{transform:translate(440px,-24px)}}.gr-gull{animation:grgull 12s linear infinite}.gr-gull2{animation-delay:-6s}' +
    '@keyframes grneedle{0%,100%{transform:rotate(-80deg)}50%{transform:rotate(-70deg)}}.gr-ndl{transform-box:fill-box;transform-origin:50% 100%;animation:grneedle 1.3s ease-in-out infinite}' +
    '@keyframes gridle{0%,100%{transform:translateY(0)}50%{transform:translateY(1.2px)}}.gr-idle{animation:gridle .35s linear infinite}' +
    '@keyframes grpuff{0%{transform:translate(0,0) scale(.6);opacity:.7}100%{transform:translate(-40px,-14px) scale(1.6);opacity:0}}.gr-puff{transform-box:fill-box;transform-origin:50% 50%;animation:grpuff 1.6s ease-out infinite}.gr-puff2{animation-delay:-.8s}' +
    '@keyframes grbell{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.gr-bell{transform-box:fill-box;transform-origin:50% 0%;animation:grbell 1.8s ease-in-out infinite}' +
    '@keyframes grglow{0%,100%{opacity:.35}50%{opacity:.8}}.gr-glow{animation:grglow 2.6s ease-in-out infinite}.gr-g2{animation-delay:-1.3s}' +
    '@keyframes grspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.gr-sp{animation:grspray 1.4s ease-out infinite}.gr-sp2{animation-delay:.45s}' +
    '@keyframes grsail{from{transform:translateX(-80px)}to{transform:translateX(470px)}}.gr-sail{animation:grsail 22s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const rain = n => ['gr-rn', 'gr-rn gr-rn2', 'gr-rn gr-rn3'].map(c => '<g class="' + c + '" stroke="#cfe0ee" stroke-width="1.2" opacity=".45">' +
    Array.from({ length: n }, (_, i) => '<path d="M' + ((i * 53) % 410) + ' ' + ((i * 37) % 200) + 'l-4 12"/>').join("") + '</g>').join("");
  const RR = "#c8102e", RRY = "#f6b221", GOLD = "#ffd23f", SOUND = "#5fb3e6", SILVER = "#c0c6cc";

  /* 1. 15th Ave NW & NW Market St, RapidRide D Line */
  function grstation() {
    const bus = '<g class="anim-train"><rect x="20" y="120" width="300" height="72" rx="10" fill="' + RR + '" stroke="#5a0a10" stroke-width="2"/>' +
      '<path d="M20 170h300v10H20z" fill="' + RRY + '"/><path d="M20 150h300" stroke="#e8434f" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (34 + i * 50) + '" y="130" width="40" height="28" rx="3" fill="#1b2630"/>').join("") +
      '<rect x="292" y="128" width="24" height="56" rx="2" fill="#1b2630"/><rect x="236" y="122" width="80" height="7" rx="2" fill="#111"/><text x="276" y="128" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb84a">D  CROWN HILL</text>' +
      '<circle cx="74" cy="194" r="12" fill="#222"/><circle cx="74" cy="194" r="5" fill="#9aa1a8"/><circle cx="264" cy="194" r="12" fill="#222"/><circle cx="264" cy="194" r="5" fill="#9aa1a8"/><circle cx="316" cy="182" r="3.5" fill="#fff6c2"/></g>';
    const bldg = '<g><rect x="0" y="34" width="120" height="96" fill="#8a3f2c"/>' + [0, 1, 2].map(r => [0, 1, 2, 3].map(c => '<rect x="' + (10 + c * 28) + '" y="' + (44 + r * 26) + '" width="16" height="16" fill="#f3d58a" opacity=".55"/>').join("")).join("") +
      '<rect x="120" y="50" width="140" height="80" fill="#6f7b84"/>' + [0, 1].map(r => Array.from({ length: 6 }, (_, c) => '<rect x="' + (128 + c * 22) + '" y="' + (58 + r * 28) + '" width="14" height="18" fill="#cfe4f2" opacity=".5"/>').join("")).join("") +
      '<rect x="260" y="40" width="140" height="90" fill="#a2774f"/>' + [0, 1, 2].map(r => [0, 1, 2, 3].map(c => '<rect x="' + (272 + c * 32) + '" y="' + (50 + r * 26) + '" width="18" height="16" fill="#f3d58a" opacity=".5"/>').join("")).join("") + '</g>';
    const pole = '<rect x="350" y="62" width="10" height="148" fill="#2a2f35"/><rect x="340" y="40" width="30" height="40" rx="3" fill="' + RR + '"/><rect x="340" y="68" width="30" height="12" fill="' + RRY + '"/>' +
      '<text x="355" y="62" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">D</text><rect x="343" y="84" width="24" height="10" fill="#111"/><text x="355" y="92" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb84a" class="gr-flk">2 MIN</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#gr1)"/>' + bldg +
      '<rect x="0" y="120" width="400" height="90" fill="#5d636a"/>' + bus +
      '<path d="M330 104h60v6h-60z" fill="#3a434c"/><rect x="334" y="110" width="3" height="100" fill="#3a434c"/><rect x="384" y="110" width="3" height="100" fill="#3a434c"/><rect x="337" y="114" width="47" height="60" fill="#bcd8ea" opacity=".25"/>' + pole +
      '<rect x="0" y="206" width="400" height="8" fill="#c9c4b8"/><rect x="0" y="214" width="400" height="46" fill="#8f8a80"/>' +
      '<rect x="20" y="220" width="300" height="34" rx="3" fill="#111"/><text x="32" y="236" ' + font + ' font-size="12.5" fill="#fff">15th Ave NW &amp; NW Market St</text><text x="32" y="249" ' + font + ' font-size="8" fill="#bbb">RAPIDRIDE · BALLARD</text>' +
      badge(282, 241, "D", RR) + rain(26),
      sky("gr1", "#56636f", "#a5b0b9"));
  }

  /* 2. The Ballard Locks */
  function grlocks() {
    const gate = x => '<g><rect x="' + x + '" y="92" width="12" height="96" fill="#3d4a55"/><path d="M' + (x + 12) + ' 96l46 22v66l-46 4z" fill="#56656f" stroke="#2a333a" stroke-width="2"/>' +
      [0, 1, 2].map(i => '<path d="M' + (x + 14) + ' ' + (112 + i * 22) + 'l42 ' + (8 - i * 2) + '" stroke="#2a333a" stroke-width="1.5"/>').join("") + '</g>';
    const boat = '<g class="gr-boat"><path d="M120 150h140l-14 22H136z" fill="#f4f1e6" stroke="#333" stroke-width="2"/><rect x="134" y="134" width="56" height="18" fill="#1f5f8a"/><rect x="140" y="138" width="12" height="8" fill="#cfe9ff"/><rect x="158" y="138" width="12" height="8" fill="#cfe9ff"/>' +
      '<rect x="196" y="110" width="4" height="40" fill="#333"/><path d="M198 112l40 26" stroke="#333" stroke-width="1.5"/><path d="M120 162h140" stroke="' + RR + '" stroke-width="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gr2)"/>' +
      '<g class="gr-gull"><path d="M20 40q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="gr-gull gr-gull2"><path d="M60 60q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<g fill="#3f6b3a"><circle cx="30" cy="80" r="26"/><circle cx="70" cy="72" r="22"/><circle cx="340" cy="78" r="26"/><circle cx="380" cy="70" r="24"/></g>' +
      '<rect x="0" y="86" width="400" height="10" fill="#d8d3c7"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20 + 4) + '" y="78" width="3" height="10" fill="#555"/>').join("") + '<rect x="0" y="78" width="400" height="2.5" fill="#555"/>' +
      '<rect x="0" y="96" width="70" height="164" fill="#bfb9ad"/><rect x="330" y="96" width="70" height="164" fill="#bfb9ad"/>' +
      '<rect x="70" y="96" width="260" height="164" fill="#8e8a80"/>' +
      '<g class="gr-water"><rect x="70" y="160" width="260" height="120" fill="#2f6f8f"/><path d="M80 166h60M170 172h80M270 166h50" stroke="#9cc6e8" stroke-width="2" stroke-linecap="round" opacity=".7"/></g>' +
      boat + gate(282) +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (8 + i * 8) + ' ' + (120 + i * 16) + 'h20" stroke="#9e988c" stroke-width="2"/>').join("") +
      '<rect x="0" y="232" width="70" height="28" fill="#2f6f8f"/><g class="gr-fish"><path d="M20 238q10 -8 20 0q-10 8 -20 0z" fill="#d6735a"/><path d="M40 238l6 -5v10z" fill="#d6735a"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#eef4f8">BALLARD LOCKS · SALMON BAY</text>',
      sky("gr2", "#8cb8d8", "#e6eef3"));
  }

  /* 3. My Volvo */
  function grvolvo() {
    const house = (x, c) => '<g><rect x="' + x + '" y="70" width="110" height="80" fill="' + c + '"/><path d="M' + (x - 8) + ' 72l63 -40l63 40z" fill="#4a3a32"/><rect x="' + (x + 14) + '" y="86" width="26" height="24" fill="#f3d58a" opacity=".6"/><rect x="' + (x + 70) + '" y="86" width="26" height="24" fill="#f3d58a" opacity=".6"/><rect x="' + (x + 44) + '" y="112" width="20" height="38" fill="#5a3a24"/><rect x="' + (x - 6) + '" y="108" width="122" height="6" fill="#efe9dc"/></g>';
    const car = '<g class="gr-idle">' +
      '<path d="M74 178V156l26 -4 22 -30h108l22 30 70 6v20z" fill="' + SILVER + '" stroke="#5c6268" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M128 126h46v28h-62z" fill="#26323c"/><path d="M180 126h46l18 28h-64z" fill="#26323c"/><rect x="176" y="126" width="4" height="28" fill="' + SILVER + '"/>' +
      '<path d="M74 160h248" stroke="#8e959b" stroke-width="2"/><rect x="72" y="164" width="252" height="8" fill="#2e3236"/>' +
      '<rect x="306" y="158" width="18" height="8" fill="#fff4c2"/><rect x="74" y="158" width="14" height="8" fill="#d23b3b"/>' +
      '<rect x="200" y="140" width="10" height="3" fill="#5c6268"/>' +
      '<circle cx="120" cy="182" r="17" fill="#1b1b1b"/><circle cx="120" cy="182" r="8" fill="#9aa1a8"/><circle cx="278" cy="182" r="17" fill="#1b1b1b"/><circle cx="278" cy="182" r="8" fill="#9aa1a8"/></g>' +
      '<g class="gr-puff"><circle cx="66" cy="172" r="6" fill="#d9dde0" opacity=".7"/></g><g class="gr-puff gr-puff2"><circle cx="66" cy="172" r="5" fill="#d9dde0" opacity=".6"/></g>';
    const gauge = '<g><circle cx="344" cy="56" r="34" fill="#141414" stroke="#888" stroke-width="3"/><path d="M318 64a28 28 0 0 1 52 0" stroke="#e8e8e8" stroke-width="2" fill="none"/>' +
      '<text x="318" y="78" ' + font + ' font-size="11" fill="#ff5a4a">E</text><text x="364" y="78" ' + font + ' font-size="11" fill="#e8e8e8">F</text><rect x="338" y="72" width="12" height="9" rx="1" fill="#ff5a4a" class="gr-flk"/>' +
      '<g class="gr-ndl"><rect x="342.5" y="32" width="3" height="26" fill="#ff8a1a"/></g><circle cx="344" cy="58" r="4" fill="#555"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gr3)"/>' + house(10, "#7f9a8a") + house(150, "#c8b48a") +
      '<g fill="#3f5a3a"><circle cx="292" cy="96" r="30"/><rect x="288" y="110" width="8" height="44" fill="#4a3426"/></g>' +
      '<rect x="0" y="150" width="400" height="10" fill="#c9c4b8"/><rect x="0" y="160" width="400" height="100" fill="#4a4a4f"/><path d="M0 230h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<path d="M60 202h280" stroke="#6a6a70" stroke-width="10" opacity=".35"/>' + car + gauge + rain(24) +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#e8ecef">SILVER 240 DL · BORN IN \'86</text>',
      sky("gr3", "#5f6c78", "#aab4bc"));
  }

  /* 4. Ballard Ave NW, street lights and the bell tower */
  function grballardave() {
    const block = (x, w, c, arch) => '<g><rect x="' + x + '" y="70" width="' + w + '" height="120" fill="' + c + '"/><rect x="' + x + '" y="64" width="' + w + '" height="10" fill="#5a2a1e"/>' +
      Array.from({ length: Math.floor(w / 30) }, (_, i) => '<path d="M' + (x + 10 + i * 30) + ' 112v-18a8 8 0 0 1 16 0v18z" fill="#f3c86a" opacity=".75"/>').join("") +
      '<rect x="' + (x + 6) + '" y="140" width="' + (w - 12) + '" height="50" fill="#2a2228"/><rect x="' + (x + 10) + '" y="146" width="' + (w / 2 - 14) + '" height="34" fill="#f1b85a" opacity=".55"/>' +
      (arch ? '<path d="M' + (x + w / 2 - 14) + ' 70a14 14 0 0 1 28 0z" fill="#5a2a1e"/>' : '') + '</g>';
    const lamp = (x, cls) => '<g><rect x="' + (x - 2) + '" y="128" width="4" height="70" fill="#1d2a24"/><rect x="' + (x - 6) + '" y="194" width="12" height="6" fill="#1d2a24"/><path d="M' + (x - 8) + ' 128h16l-3 -14h-10z" fill="#1d2a24"/>' +
      '<circle class="' + cls + '" cx="' + x + '" cy="120" r="16" fill="#ffe7a0" opacity=".5"/><rect x="' + (x - 5) + '" y="115" width="10" height="11" fill="#fff1c2"/></g>';
    const tower = '<g><path d="M300 190l12 -112h20l12 112" fill="none" stroke="#24342c" stroke-width="5"/>' +
      [100, 124, 148, 172].map(y => '<path d="M' + (302 + (190 - y) * 0.1) + ' ' + y + 'H' + (342 - (190 - y) * 0.1) + '" stroke="#24342c" stroke-width="3"/>').join("") +
      '<path d="M304 176l36 -24M340 176l-36 -24M306 144l32 -20M338 144l-32 -20" stroke="#24342c" stroke-width="2"/>' +
      '<rect x="306" y="72" width="32" height="8" fill="#24342c"/><path d="M304 72l18 -24 18 24z" fill="#24342c"/>' +
      '<g class="gr-bell"><rect x="320" y="80" width="4" height="4" fill="#24342c"/><path d="M314 98q0 -14 8 -14t8 14l3 4h-22z" fill="#c9a24a" stroke="#7a5f22" stroke-width="1.5"/><circle cx="322" cy="104" r="2.5" fill="#7a5f22"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gr4)"/>' +
      Array.from({ length: 24 }, (_, i) => '<circle cx="' + ((i * 71) % 400) + '" cy="' + (8 + (i * 29) % 50) + '" r="1.2" fill="#fff" opacity=".6"/>').join("") +
      block(0, 120, "#8a3f2c", true) + block(124, 150, "#a85a3a", false) + tower +
      '<rect x="0" y="190" width="400" height="12" fill="#6e6a64"/><rect x="0" y="202" width="400" height="58" fill="#3a3a40"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (i * 30) + '" y="212" width="26" height="8" rx="2" fill="#46464c"/>').join("") +
      lamp(70, "gr-glow") + lamp(210, "gr-glow gr-g2") + lamp(370, "gr-glow") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6c8">BALLARD AVE NW · STREET LIGHTS</text>',
      sky("gr4", "#0f1630", "#3a2f4f"));
  }

  /* 5. 24th Ave NW and NW 85th St */
  function grcorner() {
    const range = '<path d="M0 120l30 -30 20 14 34 -44 26 26 30 -36 34 40 22 -18 36 30 30 -40 34 34 26 -20 30 24 48 -6v26H0z" fill="#5a6a8a"/>' +
      '<path d="M84 60l-12 15 10 -4 6 6 6 -8zM140 50l-14 16 10 -2 8 6 8 -10zM296 66l-12 14 10 -3 6 6 6 -8z" fill="#f4f6fb"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gr5)"/>' +
      '<circle cx="250" cy="90" r="22" fill="#ffd27a" opacity=".9"/>' + range +
      '<rect x="0" y="112" width="400" height="12" fill="#4f7fa6"/>' +
      '<g class="gr-sail"><path d="M20 118h26l-4 6H24z" fill="#fff"/><path d="M33 116V96l-10 20z" fill="#f4f1e6"/></g>' +
      '<rect x="0" y="124" width="400" height="100" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (132 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (124 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("GRYNCH", 18, 190, 54, GOLD, -6) + tag("BALLARD", 40, 216, 20, SOUND, -4) + tag("V-O-L-V-O", 250, 168, 16, SILVER, -3) + tag("GRYNCH206", 196, 216, 14, "#ff7a6b", -5) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(254, 98, 140, "24th Ave NW") + sign(270, 124, 110, "NW 85th St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="gr-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="gr-sp"><circle cx="196" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="gr-sp gr-sp2"><circle cx="202" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("gr5", "#3b4a7a", "#f2a65e"));
  }

  window.SCENES = { grstation: grstation, grlocks: grlocks, grvolvo: grvolvo, grballardave: grballardave, grcorner: grcorner };
})();
