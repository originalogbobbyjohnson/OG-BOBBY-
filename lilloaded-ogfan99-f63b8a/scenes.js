/* lilloaded scenes (Regions tab: Houston + Texas; The Woods, southwest Dallas). CSS classes and ids prefixed ll- (the page's own anim-train is kept).
   1 Westmoreland station, the southwest end of the DART Red Line (at grade, island platform, canopy), where the Mountain Creek GoLink zone picks up: the light-rail car gliding in.
   2 Joe Pool Lake at sundown, just south of The Woods: cedar hills on the far shore, a sailboat drifting, ripples moving.
   3 The block in The Woods at dusk ("Badass kid with a race with the streetlight"): ranch houses under big trees, a kid on a bike racing the streetlights as they come on, a camera on a tripod with its red light blinking (the block video shoot).
   4 The booth ("Can't tell you in person, so I'm in the booth"): mic and pop filter, headphones, blue light strips for A Demon in 6lue, levels pulsing.
   5 Mountain Creek Pkwy and W Camp Wisdom Rd: green signs, LIL LOADED tagged on the wall, the Cedar Ridge escarpment and its cedars behind, a hawk circling.
   No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes llblink{0%,100%{opacity:.25}50%{opacity:1}}.ll-bl{animation:llblink 1.6s ease-in-out infinite}.ll-bl2{animation-delay:-.8s}' +
    '@keyframes llglow{0%,100%{opacity:.55}50%{opacity:1}}.ll-glow{animation:llglow 2.4s ease-in-out infinite}' +
    '@keyframes llrec{0%,49%{opacity:1}50%,100%{opacity:.15}}.ll-rec{animation:llrec 1s steps(1) infinite}' +
    '@keyframes llbike{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.ll-bike{animation:llbike 6s linear infinite}' +
    '@keyframes lllamp{0%,20%{opacity:.08}30%,100%{opacity:.9}}.ll-l1{animation:lllamp 6s linear infinite}.ll-l2{animation:lllamp 6s linear infinite;animation-delay:1.3s}.ll-l3{animation:lllamp 6s linear infinite;animation-delay:2.6s}' +
    '@keyframes llboat{0%,100%{transform:translateX(0)}50%{transform:translateX(40px)}}.ll-boat{animation:llboat 9s ease-in-out infinite}' +
    '@keyframes llrip{0%,100%{transform:translateX(0);opacity:.35}50%{transform:translateX(-14px);opacity:.8}}.ll-rip{animation:llrip 3.2s ease-in-out infinite}.ll-rip2{animation-delay:-1.6s}' +
    '@keyframes lllvl{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.ll-lv{transform-box:fill-box;transform-origin:50% 100%;animation:lllvl .9s ease-in-out infinite}' +
    '@keyframes llhawk{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.ll-hawk{transform-origin:300px 70px;animation:llhawk 12s linear infinite}' +
    '@keyframes llspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ll-sp{animation:llspray 1.4s ease-out infinite}.ll-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 16) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 16) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "ll-bl" + (i % 2 ? " ll-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const RED = "#ce0e2d", BLUE = "#3d8bff", ICE = "#9fe0ff", GOLD = "#ffcc33";
  /* a rounded cedar / live-oak tree */
  const cedar = (x, base, s, c) => '<path d="M' + x + ' ' + (base - 34 * s) + 'q' + (9 * s) + ' ' + (10 * s) + ' ' + (12 * s) + ' ' + (22 * s) + 'q' + (2 * s) + ' ' + (8 * s) + ' ' + (-12 * s) + ' ' + (12 * s) + 'q' + (-14 * s) + ' ' + (-4 * s) + ' ' + (-12 * s) + ' ' + (-12 * s) + 'q' + (3 * s) + ' ' + (-12 * s) + ' ' + (12 * s) + ' ' + (-22 * s) + 'z" fill="' + (c || "#24402c") + '"/><rect x="' + (x - 1.2 * s) + '" y="' + (base - 3 * s) + '" width="' + (2.4 * s) + '" height="' + (4 * s) + '" fill="#3a2a1c"/>';
  const oak = (x, base, s, c) => '<rect x="' + (x - 2.5 * s) + '" y="' + (base - 20 * s) + '" width="' + (5 * s) + '" height="' + (20 * s) + '" fill="#3a2a1c"/><ellipse cx="' + x + '" cy="' + (base - 26 * s) + '" rx="' + (22 * s) + '" ry="' + (14 * s) + '" fill="' + (c || "#1f3a26") + '"/><ellipse cx="' + (x - 12 * s) + '" cy="' + (base - 32 * s) + '" rx="' + (12 * s) + '" ry="' + (9 * s) + '" fill="' + (c || "#1f3a26") + '"/><ellipse cx="' + (x + 12 * s) + '" cy="' + (base - 33 * s) + '" rx="' + (13 * s) + '" ry="' + (9 * s) + '" fill="' + (c || "#1f3a26") + '"/>';

  /* 1. Westmoreland station, end of the DART Red Line */
  function llstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="132" width="36" height="22" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><path d="M24 188V132q0 -14 14 -14h300q24 0 30 30v40z" fill="#eceef0" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="24" y="160" width="344" height="7" fill="' + RED + '"/><rect x="24" y="169" width="344" height="3" fill="#f2c200"/><rect x="24" y="174" width="344" height="4" fill="#0067b1"/>' +
      '<path d="M340 122q22 4 26 30h-26z" fill="#1c2630"/><circle cx="358" cy="181" r="3.5" fill="#fff6c2"/>' +
      '<rect x="200" y="108" width="70" height="10" fill="#8a939b"/><path d="M210 108l25 -22l25 22" stroke="#555" stroke-width="2" fill="none"/>' +
      '<rect x="40" y="121" width="104" height="10" rx="2" fill="#111"/><text x="92" y="129" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">RED · WESTMORELAND</text>' +
      '<circle cx="96" cy="190" r="7" fill="#222"/><circle cx="296" cy="190" r="7" fill="#222"/></g>';
    let hills = '<path d="M0 98q60 -26 120 -10t130 -8t150 6v20H0z" fill="#3b4a3a"/>';
    for (let i = 0; i < 14; i++) hills += oak(10 + i * 30, 104, 0.45 + (i % 3) * 0.08, "#2c4430");
    return svg(
      '<rect width="400" height="260" fill="url(#lls1)"/>' + stars(8) +
      '<circle cx="64" cy="40" r="15" fill="#ffd9a0" opacity=".9"/>' + hills +
      /* overhead catenary */
      '<path d="M0 84h400" stroke="#2b2f36" stroke-width="1.5"/>' + [40, 160, 280, 380].map(x => '<rect x="' + (x - 2) + '" y="80" width="4" height="30" fill="#5c636b"/>').join("") +
      /* island platform canopy */
      '<path d="M0 108h400l-12 -10H12z" fill="#7a2230"/><rect x="0" y="106" width="400" height="4" fill="#5a1520"/>' + [70, 200, 330].map(x => '<rect x="' + (x - 3) + '" y="110" width="6" height="82" fill="#7a8088"/>').join("") +
      train +
      '<rect x="0" y="192" width="400" height="8" fill="#f2c200"/><rect x="0" y="200" width="400" height="60" fill="#b0aaa0"/><path d="M0 230h400" stroke="#9c958a" stroke-width="2"/>' +
      '<rect x="40" y="206" width="320" height="44" rx="3" fill="#111"/><text x="58" y="228" ' + font + ' font-size="18" fill="#fff">Westmoreland</text>' +
      '<text x="58" y="242" ' + font + ' font-size="8" fill="#c9cdd2">END OF THE LINE · MOUNTAIN CREEK GOLINK</text>' + badge(282, 224, "RED", RED),
      sky("lls1", "#2a2f5c", "#f0a070"));
  }

  /* 2. Joe Pool Lake at sundown */
  function lllake() {
    let shore = '<path d="M0 132q50 -30 110 -22t120 -16t170 10v28H0z" fill="#3a4a34"/>';
    for (let i = 0; i < 20; i++) shore += cedar(8 + i * 21, 134 - (i % 4) * 2, 0.6 + (i % 3) * 0.12, "#24402c");
    let rip = "";
    for (let i = 0; i < 12; i++) rip += '<path class="ll-rip' + (i % 2 ? " ll-rip2" : "") + '" d="M' + (20 + (i * 67) % 370) + ' ' + (150 + i * 8) + 'h' + (24 + (i % 3) * 10) + '" stroke="#ffd9a0" stroke-width="1.6" stroke-linecap="round"/>';
    const boat = '<g class="ll-boat"><path d="M120 176h46l-8 8h-32z" fill="#f4f1e8"/><path d="M142 176V136l20 38z" fill="#fff"/><path d="M140 176V144l-14 30z" fill="' + BLUE + '"/><path d="M142 136v40" stroke="#555" stroke-width="1.2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lls2)"/>' +
      '<circle cx="290" cy="104" r="24" fill="#ffcf6a"/><circle cx="290" cy="104" r="34" fill="#ffcf6a" opacity=".25" class="ll-glow"/>' +
      '<path d="M40 50q14 -8 28 0M70 44q10 -6 20 0" stroke="#5a3b52" stroke-width="2" fill="none"/>' +
      shore +
      '<rect x="0" y="140" width="400" height="120" fill="url(#lls2w)"/>' +
      '<path d="M270 142h40l-6 80h-28z" fill="#ffcf6a" opacity=".22"/>' + rip + boat +
      /* the marina dock in front */
      '<rect x="0" y="222" width="190" height="10" fill="#7a5a3a"/><path d="M0 222h190" stroke="#a07a50" stroke-width="2"/>' + [20, 70, 120, 170].map(x => '<rect x="' + (x - 3) + '" y="222" width="6" height="30" fill="#5a3f28"/>').join("") +
      '<rect x="230" y="204" width="150" height="30" rx="3" fill="#111" opacity=".85"/><text x="305" y="224" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">JOE POOL LAKE</text>',
      sky("lls2", "#3b2f6a", "#ff9a5a") + sky("lls2w", "#5a4a7a", "#1c2244"));
  }

  /* 3. The block in The Woods: kid racing the streetlights, the video shoot */
  function llblock() {
    const house = (x, w, roof, wall) => '<g><path d="M' + (x - 6) + ' 150l' + (w / 2 + 6) + ' -26l' + (w / 2 + 6) + ' 26z" fill="' + roof + '"/><rect x="' + x + '" y="150" width="' + w + '" height="40" fill="' + wall + '"/>' +
      Array.from({ length: 4 }, (_, i) => '<path d="M' + x + ' ' + (158 + i * 8) + 'h' + w + '" stroke="#00000022" stroke-width="1"/>').join("") +
      '<rect x="' + (x + 10) + '" y="160" width="20" height="14" fill="#ffe2a0" class="ll-bl"/><rect x="' + (x + w - 30) + '" y="160" width="20" height="14" fill="#ffe2a0"/><rect x="' + (x + w / 2 - 7) + '" y="166" width="14" height="24" fill="#3a2a1c"/></g>';
    const lamp = (x, cls) => '<rect x="' + (x - 2) + '" y="128" width="4" height="78" fill="#4a4f58"/><path d="M' + x + ' 130h14" stroke="#4a4f58" stroke-width="3"/><ellipse cx="' + (x + 14) + '" cy="132" rx="6" ry="3" fill="#fff3c0" class="' + cls + '"/><path class="' + cls + '" d="M' + (x + 8) + ' 134l-14 72h40l-14 -72z" fill="#fff3c0" opacity=".18"/>';
    const bike = '<g class="ll-bike"><circle cx="20" cy="214" r="9" fill="none" stroke="#e8ecf2" stroke-width="2.5"/><circle cx="50" cy="214" r="9" fill="none" stroke="#e8ecf2" stroke-width="2.5"/><path d="M20 214l12 -14h14l4 14M32 200l-4 -6h6M46 200l2 -6" stroke="' + BLUE + '" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<path d="M34 196l4 -16" stroke="#fff" stroke-width="7" stroke-linecap="round"/><circle cx="39" cy="176" r="5" fill="#5a3b2a"/><path d="M36 186l10 8" stroke="#fff" stroke-width="3" stroke-linecap="round"/></g>';
    const cam = '<g><path d="M330 236l14 -40l14 40M344 196v40" stroke="#222" stroke-width="3" fill="none"/><rect x="326" y="180" width="38" height="20" rx="3" fill="#1b1d22"/><circle cx="326" cy="190" r="7" fill="#33363d" stroke="#555" stroke-width="2"/><circle cx="358" cy="185" r="3" fill="#ff2a2a" class="ll-rec"/><text x="350" y="176" ' + font + ' font-size="7" fill="#ff6a6a" class="ll-rec">REC</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lls3)"/>' + stars(10) +
      oak(40, 150, 1.3) + oak(200, 140, 1.5) + oak(360, 148, 1.2) +
      house(10, 120, "#4a3a36", "#8a4f36") + house(150, 110, "#3a3a44", "#b08a62") + house(280, 112, "#4a3a36", "#7a4a3a") +
      '<rect x="0" y="190" width="400" height="12" fill="#6f7a5a"/><rect x="0" y="202" width="400" height="58" fill="#3c3f46"/><path d="M0 232h400" stroke="#d8d2a0" stroke-width="2" stroke-dasharray="18 14"/>' +
      lamp(90, "ll-l1") + lamp(210, "ll-l2") + lamp(320, "ll-l3") + bike + cam,
      sky("lls3", "#1b2050", "#e88a6a"));
  }

  /* 4. The booth */
  function llbooth() {
    let foam = "";
    for (let r = 0; r < 6; r++) for (let c = 0; c < 10; c++) foam += '<path d="M' + (c * 40 + (r % 2) * 20) + ' ' + (r * 30) + 'l20 15l-20 15l-20 -15z" fill="' + ((r + c) % 2 ? "#151a28" : "#11151f") + '"/>';
    let lv = "";
    for (let i = 0; i < 12; i++) lv += '<rect class="ll-lv" style="animation-delay:-' + ((i * 0.37) % 0.9).toFixed(2) + 's" x="' + (248 + i * 10) + '" y="' + 168 + '" width="7" height="36" fill="' + (i < 8 ? BLUE : i < 11 ? ICE : GOLD) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#0d1120"/>' + foam +
      '<rect x="0" y="8" width="400" height="5" fill="' + BLUE + '" class="ll-glow"/><rect x="0" y="178" width="400" height="4" fill="' + BLUE + '" class="ll-glow"/>' +
      /* booth window */
      '<rect x="220" y="40" width="160" height="100" rx="6" fill="#0a1a33" stroke="#3a4250" stroke-width="5"/><rect x="232" y="52" width="136" height="76" fill="#16305a" opacity=".6"/><path d="M240 120l40 -60M268 124l40 -60" stroke="#ffffff22" stroke-width="6"/>' +
      /* mic stand, shock mount, pop filter */
      '<path d="M120 250V150" stroke="#2b2f36" stroke-width="5"/><path d="M96 250h48" stroke="#2b2f36" stroke-width="5"/><path d="M120 150l26 -30" stroke="#2b2f36" stroke-width="4"/>' +
      '<rect x="132" y="66" width="30" height="54" rx="15" fill="#c9cdd2" stroke="#7a8088" stroke-width="2"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M134 ' + (78 + i * 7) + 'h26" stroke="#7a8088" stroke-width="1.2"/>').join("") +
      '<circle cx="104" cy="92" r="24" fill="#22262e" opacity=".75" stroke="#555" stroke-width="2"/><path d="M128 92h4" stroke="#555" stroke-width="2"/>' +
      /* headphones hanging */
      '<path d="M40 120q0 -34 30 -34t30 34" stroke="#1a1d24" stroke-width="6" fill="none"/><rect x="32" y="114" width="16" height="24" rx="6" fill="' + BLUE + '"/><rect x="92" y="114" width="16" height="24" rx="6" fill="' + BLUE + '"/>' +
      /* lyric pad on the stand */
      '<rect x="160" y="150" width="56" height="40" rx="2" fill="#f2efe6" transform="rotate(-6 188 170)"/>' + Array.from({ length: 4 }, (_, i) => '<path d="M166 ' + (160 + i * 8) + 'h42" stroke="#8a8fa0" stroke-width="1.2" transform="rotate(-6 188 170)"/>').join("") +
      '<rect x="240" y="160" width="134" height="52" rx="4" fill="#0a0d16" stroke="#2a3040" stroke-width="2"/>' + lv +
      '<rect x="240" y="222" width="134" height="24" rx="3" fill="#111"/><text x="307" y="238" text-anchor="middle" ' + font + ' font-size="10" fill="' + ICE + '">IN THE BOOTH</text>');
  }

  /* 5. Mountain Creek Pkwy and W Camp Wisdom Rd */
  function llcorner() {
    let esc = '<path d="M0 118q40 -40 90 -34t80 -18t90 10t70 -14t70 20v40H0z" fill="#8a7a5a"/><path d="M0 128q60 -18 120 -12t140 -8t140 6v12H0z" fill="#b8a77e"/>';
    for (let i = 0; i < 26; i++) esc += cedar(6 + i * 16, 120 - ((i * 7) % 11), 0.5 + (i % 3) * 0.1, i % 2 ? "#2c4a30" : "#24402c");
    const hawk = '<g class="ll-hawk"><path d="M300 52q-10 -6 -18 0q8 -2 12 4q4 -6 12 -4q-8 -6 -6 0z" fill="#2a1d18"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lls5)"/>' +
      '<circle cx="80" cy="54" r="18" fill="#ffd28a"/>' + hawk + esc +
      /* wall */
      '<rect x="0" y="130" width="400" height="96" fill="#7a5a48"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (142 + i * 12) + 'h400" stroke="#6a4c3c" stroke-width="1.5"/>').join("") +
      tag("LIL LOADED", 70, 196, 40, BLUE, -5) + tag("6LOCC 6A6Y", 236, 216, 18, "#fff", -3) +
      '<g class="ll-sp"><circle cx="356" cy="168" r="3" fill="' + BLUE + '" opacity=".6"/><circle cx="364" cy="162" r="2" fill="' + BLUE + '" opacity=".5"/></g><g class="ll-sp ll-sp2"><circle cx="350" cy="174" r="2.5" fill="#fff" opacity=".5"/></g>' +
      '<rect x="352" y="174" width="12" height="26" rx="3" fill="#d22"/><rect x="354" y="168" width="8" height="7" fill="#999"/>' +
      /* sidewalk + sign pole */
      '<rect x="0" y="226" width="400" height="34" fill="#a9a59c"/><path d="M0 240h400" stroke="#8f8b82" stroke-width="2"/>' +
      '<rect x="20" y="40" width="5" height="190" fill="#4a5058"/>' + sign(25, 44, 156, "MOUNTAIN CREEK PKWY") + sign(25, 70, 156, "W CAMP WISDOM RD"),
      sky("lls5", "#4a5aa0", "#f2b07a"));
  }

  window.SCENES = { llstation, lllake, llblock, llbooth, llcorner };
})();
