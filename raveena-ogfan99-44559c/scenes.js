/* raveena scenes (NYC map: Queens; Astoria, Ditmars Blvd & 31 St). CSS classes prefixed rv- (the page's own anim-train is kept on the train).
   1 Astoria-Ditmars Blvd, the elevated last stop of the N and W: yellow bullets on the black sign, the train rolling in at dusk.
   2 Socrates Sculpture Park on the Astoria waterfront: sunset over the East River, sculptures on the lawn, butterflies drifting.
   3 Her attic home studio in Astoria (burnt-orange walls, slanted ceiling) where every song on Lucid was written: keys, plants, a record spinning.
   4 Washington Square Arch: she studied at NYU Tisch; pale marble arch, the fountain spraying.
   5 Ditmars Blvd and 31 St: green signs, RAVEENA tagged, the red Hell Gate Bridge arch behind.
   No digit 9 is drawn anywhere. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rvglow{0%,100%{opacity:.45}50%{opacity:1}}.rv-glow{animation:rvglow 2.4s ease-in-out infinite}.rv-g2{animation-delay:-1.2s}' +
    '@keyframes rvfly{0%{transform:translate(0,0)}25%{transform:translate(30px,-16px)}50%{transform:translate(60px,4px)}75%{transform:translate(90px,-12px)}100%{transform:translate(120px,0)}}.rv-fly{animation:rvfly 9s ease-in-out infinite alternate}.rv-f2{animation-delay:-3s}.rv-f3{animation-delay:-6s}' +
    '@keyframes rvflap{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.25)}}.rv-flap{transform-box:fill-box;transform-origin:50% 50%;animation:rvflap .5s ease-in-out infinite}' +
    '@keyframes rvspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.rv-spin{transform-box:fill-box;transform-origin:50% 50%;animation:rvspin 2s linear infinite}' +
    '@keyframes rvboat{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.rv-boat{animation:rvboat 16s linear infinite}' +
    '@keyframes rvdrop{0%{transform:translateY(0);opacity:1}100%{transform:translateY(26px);opacity:0}}.rv-drop{animation:rvdrop 1.1s ease-in infinite}.rv-d2{animation-delay:-.35s}.rv-d3{animation-delay:-.7s}' +
    '@keyframes rvnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-50px);opacity:0}}.rv-note{animation:rvnote 3s ease-out infinite}.rv-n2{animation-delay:-1s}.rv-n3{animation-delay:-2s}' +
    '@keyframes rvspray{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(-14px,-22px);opacity:0}}.rv-sp{animation:rvspray 1.4s ease-out infinite}.rv-sp2{animation-delay:-.5s}.rv-sp3{animation-delay:-.9s}' +
    '@keyframes rvtw{0%,100%{opacity:.2}50%{opacity:1}}.rv-tw{animation:rvtw 2s ease-in-out infinite}.rv-t2{animation-delay:-.7s}.rv-t3{animation-delay:-1.4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const bullet = (x, y, l, bg, fg) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="' + bg + '"/><text x="' + x + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="' + (fg || "#fff") + '">' + l + '</text>';
  const ROSE = "#f6b7c8", GOLD = "#ffd27a", LAV = "#c9a7ff", ORANGE = "#c8642c";
  const fly = (x, y, c, cls) => '<g transform="translate(' + x + ' ' + y + ')"><g class="rv-fly ' + (cls || "") + '"><g class="rv-flap"><path d="M0 0q-9 -10 -12 -2q2 6 12 2zM0 0q9 -10 12 -2q-2 6 -12 2zM0 0q-7 8 -9 4q1 -4 9 -4zM0 0q7 8 9 4q-1 -4 -9 -4z" fill="' + c + '"/></g></g></g>';

  /* 1. Astoria-Ditmars Blvd, elevated last stop */
  function rvstop() {
    const car = (x) => '<rect x="' + x + '" y="112" width="150" height="54" rx="5" fill="#c9ced6" stroke="#5a606a" stroke-width="2"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 10 + i * 34) + '" y="122" width="24" height="20" rx="2" fill="#2a3442"/>').join("") +
      '<rect x="' + x + '" y="148" width="150" height="4" fill="#fccc0a"/>';
    const train = '<g class="anim-train">' + car(30) + car(186) +
      '<circle cx="' + 54 + '" cy="128" r="7" fill="#fccc0a"/><text x="54" y="132" text-anchor="middle" ' + font + ' font-size="10" fill="#111">N</text>' +
      '<rect x="332" y="128" width="6" height="8" fill="#fff6c2" class="rv-glow"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rvs1)"/>' +
      /* Astoria rooftops below */
      '<path d="M0 200h40v-30h30v18h36v-26h40v30h34v-22h44v26h40v-34h36v28h40v-20h60v30z" fill="#3a2f4a"/>' +
      [20, 90, 170, 250, 330].map((x, i) => '<rect x="' + x + '" y="186" width="8" height="8" fill="#ffd27a" class="rv-glow ' + (i % 2 ? "rv-g2" : "") + '"/>').join("") +
      /* el structure */
      '<rect x="0" y="166" width="400" height="12" fill="#4a5a52"/>' + [10, 110, 210, 310].map(x => '<rect x="' + x + '" y="178" width="10" height="82" fill="#3e4c46"/><path d="M' + (x - 10) + ' 178l15 20l15 -20" stroke="#3e4c46" stroke-width="3" fill="none"/>').join("") +
      '<rect x="0" y="104" width="400" height="6" fill="#4a5a52"/>' +
      /* platform canopy */
      '<path d="M0 60h400v10h-400z" fill="#5c6b63"/>' + [40, 140, 240, 340].map(x => '<rect x="' + x + '" y="70" width="6" height="40" fill="#5c6b63"/>').join("") +
      train +
      '<rect x="0" y="166" width="400" height="6" fill="#d8d2c4"/>' +
      /* station sign */
      '<rect x="70" y="20" width="270" height="34" rx="3" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<text x="84" y="43" ' + font + ' font-size="15" fill="#fff">Astoria–Ditmars Blvd</text>' + bullet(286, 37, "N", "#fccc0a", "#111") + bullet(312, 37, "W", "#fccc0a", "#111") +
      '<circle cx="360" cy="30" r="1.5" fill="#fff" class="rv-tw"/><circle cx="20" cy="18" r="1.5" fill="#fff" class="rv-tw rv-t2"/><circle cx="380" cy="10" r="1.2" fill="#fff" class="rv-tw rv-t3"/>',
      sky("rvs1", "#2a1f4a", "#f2a38a"));
  }

  /* 2. Socrates Sculpture Park, East River sunset */
  function rvpark() {
    return svg(
      '<rect width="400" height="260" fill="url(#rvs2)"/>' +
      '<circle cx="250" cy="118" r="30" fill="#ffd27a" opacity=".9"/>' +
      /* Manhattan across the river */
      '<path d="M0 132h30v-26h16v26h20v-40h22v40h14v-18h26v18h18v-50h12v-10h6v10h12v50h20v-30h26v30h22v-22h20v22h24v-36h18v36h20v-14h40v14h18z" fill="#4a3a5e" opacity=".85"/>' +
      '<rect x="0" y="132" width="400" height="34" fill="#6a5a8a"/>' +
      '<path d="M0 140h400M0 150h400M0 160h400" stroke="#f6b7c8" stroke-width="1" opacity=".35" stroke-dasharray="14 18"/>' +
      '<path d="M236 136h28M240 146h20M244 156h12" stroke="#ffd27a" stroke-width="2" opacity=".7"/>' +
      '<g class="rv-boat"><path d="M0 146h50l-8 8h-36z" fill="#e8e2d8"/><rect x="14" y="138" width="18" height="8" fill="#e8e2d8"/></g>' +
      /* lawn + path */
      '<rect x="0" y="166" width="400" height="94" fill="#4f7a3e"/><path d="M120 260q60 -60 260 -94" stroke="#cdbf9a" stroke-width="14" fill="none"/>' +
      /* sculptures */
      '<g><rect x="40" y="150" width="40" height="40" fill="#c8642c"/><rect x="48" y="122" width="28" height="28" fill="#e0a040" transform="rotate(14 62 136)"/><rect x="54" y="102" width="18" height="18" fill="' + ROSE + '" transform="rotate(-10 63 111)"/></g>' +
      '<g><path d="M300 196l18 -70l18 70z" fill="#d8d0c0" stroke="#8a8270" stroke-width="2"/><rect x="306" y="150" width="24" height="6" fill="' + LAV + '"/></g>' +
      '<path d="M170 200q16 -46 34 0z" fill="#2f5a7a"/><circle cx="187" cy="168" r="6" fill="' + GOLD + '"/>' +
      fly(80, 70, ROSE) + fly(150, 92, GOLD, "rv-f2") + fly(30, 110, LAV, "rv-f3") +
      '<rect x="112" y="226" width="182" height="22" rx="3" fill="#2a3a30" stroke="#d8cba8" stroke-width="1.5"/><text x="203" y="241" text-anchor="middle" ' + font + ' font-size="10" fill="#f1e6c8">SOCRATES SCULPTURE PARK</text>',
      sky("rvs2", "#7a5aa0", "#f6b08a"));
  }

  /* 3. Attic studio, burnt-orange walls */
  function rvattic() {
    const plant = (x, y) => '<rect x="' + (x - 10) + '" y="' + y + '" width="20" height="18" rx="3" fill="#8a4a2a"/>' +
      '<path d="M' + x + ' ' + y + 'q-16 -20 -4 -34M' + x + ' ' + y + 'q14 -18 6 -36M' + x + ' ' + y + 'q-2 -22 0 -40" stroke="#3f7a3a" stroke-width="5" fill="none" stroke-linecap="round"/>';
    return svg(
      '<rect width="400" height="260" fill="#c8642c"/>' +
      /* slanted attic ceiling */
      '<path d="M0 0h400v40l-120 -40z" fill="#8a3e1c"/><path d="M0 0l140 0l-140 70z" fill="#9a4820"/>' +
      '<path d="M0 70l140 -70M0 40l80 -40" stroke="#6e2f14" stroke-width="3"/>' +
      /* round attic window with moon */
      '<circle cx="270" cy="78" r="34" fill="#2a1f4a" stroke="#f1e2c4" stroke-width="5"/><path d="M236 78h68M270 44v68" stroke="#f1e2c4" stroke-width="3"/>' +
      '<circle cx="282" cy="66" r="9" fill="#fff4d0"/><circle cx="286" cy="63" r="8" fill="#2a1f4a"/>' +
      '<circle cx="254" cy="94" r="1.5" fill="#fff" class="rv-tw"/><circle cx="290" cy="96" r="1.5" fill="#fff" class="rv-tw rv-t2"/>' +
      /* string lights */
      '<path d="M150 30q60 22 120 6t120 10" stroke="#3a1a0a" stroke-width="1.5" fill="none"/>' + [160, 190, 220, 250, 300, 330, 360].map((x, i) => '<circle cx="' + x + '" cy="' + (36 + (i % 3) * 3) + '" r="3.5" fill="' + GOLD + '" class="rv-glow ' + (i % 2 ? "rv-g2" : "") + '"/>').join("") +
      /* floor + rug */
      '<rect x="0" y="196" width="400" height="64" fill="#6a3a22"/><ellipse cx="200" cy="230" rx="150" ry="20" fill="' + LAV + '" opacity=".6"/>' +
      /* keyboard on stand */
      '<rect x="40" y="150" width="150" height="16" rx="3" fill="#222"/><rect x="46" y="154" width="138" height="9" fill="#f4f0e6"/>' +
      Array.from({ length: 11 }, (_, i) => '<rect x="' + (52 + i * 12) + '" y="154" width="5" height="5" fill="#222"/>').join("") +
      '<path d="M60 166l-14 34M170 166l14 34M60 166l124 34M170 166l-124 34" stroke="#333" stroke-width="3"/>' +
      /* turntable */
      '<rect x="250" y="170" width="100" height="30" rx="3" fill="#3a2a22"/><rect x="254" y="160" width="92" height="12" rx="2" fill="#2a1d18"/>' +
      '<ellipse cx="290" cy="164" rx="30" ry="7" fill="#111"/><ellipse cx="290" cy="164" rx="9" ry="2.2" fill="' + ROSE + '"/><ellipse cx="290" cy="164" rx="20" ry="4.6" fill="none" stroke="#3a3a3a" stroke-width="1"/><circle cx="276" cy="162" r="1.6" fill="#fff" class="rv-glow"/><path d="M334 158l-18 8" stroke="#ccc" stroke-width="2.5"/>' +
      plant(370, 178) + plant(22, 178) +
      '<g transform="translate(110 130)"><text class="rv-note" ' + font + ' font-size="16" fill="' + GOLD + '">♪</text><text class="rv-note rv-n2" x="14" ' + font + ' font-size="14" fill="' + ROSE + '">♫</text><text class="rv-note rv-n3" x="-12" ' + font + ' font-size="14" fill="#fff">♪</text></g>' +
      tag("LUCID", 150, 118, 30, ROSE, -4),
      "");
  }

  /* 4. Washington Square Arch */
  function rvarch() {
    const drops = [0, 1, 2, 3, 4, 5, 6].map(i => '<circle cx="' + (176 + i * 8) + '" cy="196" r="2" fill="#cfe8ff" class="rv-drop ' + ["", "rv-d2", "rv-d3"][i % 3] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rvs4)"/>' +
      '<rect x="0" y="80" width="80" height="120" fill="#7a6a80"/><rect x="320" y="60" width="80" height="140" fill="#6a5a74"/>' +
      [0, 1, 2, 3].map(r => [0, 1].map(c => '<rect x="' + (12 + c * 34) + '" y="' + (94 + r * 26) + '" width="18" height="14" fill="#ffd27a" class="rv-glow ' + ((r + c) % 2 ? "rv-g2" : "") + '"/>').join("")).join("") +
      [0, 1, 2, 3, 4].map(r => '<rect x="334" y="' + (74 + r * 24) + '" width="50" height="12" fill="#ffd27a" opacity=".7"/>').join("") +
      /* arch */
      '<path d="M120 200v-120h160v120h-36v-64q0 -40 -44 -40t-44 40v64z" fill="#ece6da" stroke="#b8ae9c" stroke-width="2"/>' +
      '<rect x="112" y="44" width="176" height="40" fill="#e4dccc" stroke="#b8ae9c" stroke-width="2"/><rect x="108" y="36" width="184" height="10" fill="#d8cfbd"/>' +
      '<path d="M132 60h136M132 72h136" stroke="#c8bea8" stroke-width="2"/>' +
      '<rect x="130" y="120" width="18" height="70" fill="#ddd4c2"/><rect x="252" y="120" width="18" height="70" fill="#ddd4c2"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#8a8478"/>' +
      /* fountain */
      '<ellipse cx="200" cy="222" rx="80" ry="12" fill="#5a7a8a" stroke="#c8c0b0" stroke-width="3"/><rect x="196" y="196" width="8" height="26" fill="#c8c0b0"/>' + drops +
      fly(60, 60, ROSE) + fly(250, 40, LAV, "rv-f2") +
      '<rect x="146" y="234" width="108" height="20" rx="3" fill="#3a2a5a" stroke="#d8cba8" stroke-width="1.5"/><text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="#f1e6c8">WASHINGTON SQ</text>',
      sky("rvs4", "#8fb4d8", "#f6c8b0"));
  }

  /* 5. Ditmars Blvd & 31 St, Hell Gate Bridge behind */
  function rvcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#rvs5)"/>' +
      '<circle cx="60" cy="40" r="1.5" fill="#fff" class="rv-tw"/><circle cx="140" cy="24" r="1.5" fill="#fff" class="rv-tw rv-t2"/><circle cx="240" cy="30" r="1.2" fill="#fff" class="rv-tw rv-t3"/>' +
      /* Hell Gate Bridge: red steel arch with stone towers */
      '<rect x="20" y="70" width="34" height="80" fill="#b8a890"/><rect x="250" y="70" width="34" height="80" fill="#b8a890"/>' +
      '<path d="M54 120q98 -100 196 0" stroke="#a8322a" stroke-width="10" fill="none"/><path d="M54 132q98 -82 196 0" stroke="#a8322a" stroke-width="5" fill="none"/>' +
      Array.from({ length: 13 }, (_, i) => { const x = 62 + i * 15; return '<path d="M' + x + ' 136v-' + (14 + Math.sin(i / 12 * Math.PI) * 50).toFixed(0) + '" stroke="#a8322a" stroke-width="2"/>'; }).join("") +
      '<rect x="0" y="134" width="400" height="6" fill="#a8322a"/>' +
      fly(110, 40, GOLD) +
      /* brick wall */
      '<rect x="0" y="146" width="400" height="80" fill="#9c4a3a"/>' + Array.from({ length: 8 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<rect x="' + (c * 30 + (r % 2) * 15 - 15) + '" y="' + (146 + r * 10) + '" width="28" height="8" fill="#a85a46"/>').join("")).join("") +
      tag("RAVEENA", 40, 204, 48, ROSE, -5) + tag("MOONSTONE", 190, 222, 18, LAV, -3) +
      '<g class="rv-sp"><circle cx="270" cy="182" r="2" fill="' + GOLD + '"/></g><g class="rv-sp rv-sp2"><circle cx="274" cy="186" r="2" fill="' + ROSE + '"/></g><g class="rv-sp rv-sp3"><circle cx="268" cy="188" r="2" fill="' + LAV + '"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#3f4247"/>' +
      '<rect x="338" y="60" width="6" height="166" fill="#5b6066"/>' + sign(286, 52, 110, "DITMARS BLVD", 11) + sign(300, 76, 82, "31 ST", 12),
      sky("rvs5", "#2a1f4a", "#f0a07a"));
  }

  window.SCENES = { rvstop, rvpark, rvattic, rvarch, rvcorner };
})();
