/* htown scenes (Regions tab: Houston + Texas; Third Ward, Houston). CSS classes prefixed htn- (the page's own anim-train is kept).
   1 Wheeler station on the METRORail Red Line (Main St at Wheeler Ave, the Wheeler Ave side of Third Ward): the white light-rail car gliding in.
   2 Third Ward shotgun houses on Truxillo St, where Dino, Shazam and G.I. grew up singing: porches, a live oak, three singers (backs turned).
   3 The studio: Dino on the keys ("play it for me, Dino"), the tape reels turning, the gold record for Fever for Da Flavor on the wall.
   4 The Eldorado Ballroom (Emancipation Ave & Elgin), Third Ward's music hall: cream art-deco front, lit ballroom windows, searchlights.
   5 Alabama St and Live Oak St: green signs, H-TOWN tagged on the wall, the Gulf Building's art-deco crown lit up downtown behind.
   No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes htnblink{0%,100%{opacity:.25}50%{opacity:1}}.htn-bl{animation:htnblink 1.5s ease-in-out infinite}.htn-bl2{animation-delay:-.75s}' +
    '@keyframes htnsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.htn-sway{animation:htnsway 1.8s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.htn-s2{animation-delay:-.6s}.htn-s3{animation-delay:-1.2s}' +
    '@keyframes htnnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(12px,-56px);opacity:0}}.htn-note{animation:htnnote 3.2s ease-out infinite}.htn-n2{animation-delay:-1.1s}.htn-n3{animation-delay:-2.2s}' +
    '@keyframes htnspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.htn-spin{animation:htnspin 3s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes htnkey{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}.htn-key{animation:htnkey .5s ease-in-out infinite}.htn-k2{animation-delay:-.17s}.htn-k3{animation-delay:-.34s}' +
    '@keyframes htnbeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.htn-beam{animation:htnbeam 4s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.htn-b2{animation-delay:-2s}' +
    '@keyframes htnspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.htn-sp{animation:htnspray 1.4s ease-out infinite}.htn-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "htn-bl" + (i % 2 ? " htn-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const oak = (x, base, s) => '<g><rect x="' + (x - 3 * s) + '" y="' + (base - 26 * s) + '" width="' + (6 * s) + '" height="' + (26 * s) + '" fill="#4a3526"/>' +
    '<ellipse cx="' + x + '" cy="' + (base - 34 * s) + '" rx="' + (30 * s) + '" ry="' + (16 * s) + '" fill="#2f5a34"/><ellipse cx="' + (x - 14 * s) + '" cy="' + (base - 40 * s) + '" rx="' + (16 * s) + '" ry="' + (11 * s) + '" fill="#3a6b3e"/><ellipse cx="' + (x + 14 * s) + '" cy="' + (base - 42 * s) + '" rx="' + (15 * s) + '" ry="' + (10 * s) + '" fill="#356340"/></g>';
  const palm = (x, base, s) => '<g><path d="M' + x + ' ' + base + 'q' + (4 * s) + ' ' + (-40 * s) + ' ' + (2 * s) + ' ' + (-80 * s) + '" stroke="#5a4030" stroke-width="' + (5 * s) + '" fill="none"/>' +
    [-60, -20, 20, 60, 160, 200].map(a => '<path d="M' + (x + 2 * s) + ' ' + (base - 80 * s) + 'q' + (Math.cos(a * Math.PI / 180) * 18 * s) + ' ' + (-14 * s) + ' ' + (Math.cos(a * Math.PI / 180) * 32 * s) + ' ' + (Math.abs(Math.sin(a * Math.PI / 180)) * 10 * s + 4 * s) + '" stroke="#2f6a3a" stroke-width="' + (4 * s) + '" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const PINK = "#ff5fa2", GOLD = "#ffd166", VIO = "#8a6cff", RED = "#d0202e", CREAM = "#efe3c4";
  /* a singer seen from behind: no face */
  const back = (x, base, top, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (base - 44) + '" r="7" fill="#24160f"/>' +
    '<path d="M' + (x - 10) + ' ' + (base - 16) + 'l2 -20q8 -6 16 0l2 20z" fill="' + top + '"/><rect x="' + (x - 8) + '" y="' + (base - 16) + '" width="6" height="16" fill="#1e2a44"/><rect x="' + (x + 2) + '" y="' + (base - 16) + '" width="6" height="16" fill="#1e2a44"/></g>';
  const note = (x, y, c, cls) => '<g class="htn-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="1.6" height="14" fill="' + c + '"/></g>';
  /* the Gulf Building: stepped art-deco crown */
  const gulf = (x, base, lit) => '<g><rect x="' + (x - 22) + '" y="' + (base - 120) + '" width="44" height="120" fill="#2a2436"/>' +
    '<rect x="' + (x - 16) + '" y="' + (base - 140) + '" width="32" height="20" fill="#2e2840"/><rect x="' + (x - 10) + '" y="' + (base - 156) + '" width="20" height="16" fill="#322b46"/><rect x="' + (x - 5) + '" y="' + (base - 168) + '" width="10" height="12" fill="#362e4c"/>' +
    [0, 1, 2, 3].map(i => '<rect x="' + (x - 14 + i * 9) + '" y="' + (base - 138) + '" width="3" height="16" fill="' + lit + '" opacity=".8"/>').join("") +
    [0, 1].map(i => '<rect x="' + (x - 6 + i * 9) + '" y="' + (base - 154) + '" width="3" height="12" fill="' + lit + '" opacity=".8"/>').join("") +
    '<circle class="htn-bl" cx="' + x + '" cy="' + (base - 172) + '" r="2.4" fill="#ff4d4d"/>' +
    Array.from({ length: 11 }, (_, r) => '<path d="M' + (x - 18) + ' ' + (base - 112 + r * 10) + 'h36" stroke="' + lit + '" stroke-width="2" stroke-dasharray="3 3" opacity=".55"/>').join("") + '</g>';

  /* 1. Wheeler, METRORail Red Line */
  function htnstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (56 + i * 46) + '" y="124" width="36" height="24" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><path d="M24 186V122q0 -12 14 -12h300q24 0 30 30v46z" fill="#f2f4f6" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="24" y="158" width="344" height="8" fill="' + RED + '"/><rect x="24" y="168" width="344" height="3" fill="#1f3c88"/>' +
      '<path d="M340 114q22 4 26 30h-26z" fill="#1c2630"/><circle cx="356" cy="178" r="3.5" fill="#fff6c2"/>' +
      '<rect x="200" y="100" width="70" height="10" fill="#8a939b"/><path d="M210 100l25 -26l25 26" stroke="#555" stroke-width="2" fill="none"/>' +
      '<rect x="40" y="112" width="96" height="10" rx="2" fill="#111"/><text x="88" y="120" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">RED · FANNIN SOUTH</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#htns1)"/>' + stars(10) +
      palm(30, 190, 1) + palm(372, 190, 1.1) +
      '<rect x="120" y="60" width="60" height="70" fill="#3a3550"/><rect x="190" y="74" width="80" height="56" fill="#33304a"/><rect x="280" y="66" width="44" height="64" fill="#3a3550"/>' +
      [130, 150, 200, 222, 244, 290, 306].map((x, i) => '<rect x="' + x + '" y="' + (80 + (i % 3) * 14) + '" width="8" height="6" fill="#ffd98a" opacity=".7"/>').join("") +
      '<path d="M0 66h400" stroke="#333" stroke-width="1.5"/>' + [60, 200, 340].map(x => '<rect x="' + (x - 3) + '" y="62" width="6" height="128" fill="#7a8088"/>').join("") +
      '<path d="M0 52h130v12h-130z" fill="#c9cdd2"/><rect x="0" y="62" width="130" height="3" fill="' + RED + '"/><path d="M270 52h130v12h-130z" fill="#c9cdd2"/><rect x="270" y="62" width="130" height="3" fill="' + RED + '"/>' +
      train +
      '<rect x="0" y="190" width="400" height="8" fill="#f2c200"/><rect x="0" y="198" width="400" height="62" fill="#b3ada2"/>' +
      '<rect x="18" y="206" width="364" height="44" rx="3" fill="#111"/><circle cx="44" cy="228" r="15" fill="' + RED + '"/><text x="44" y="232.5" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">RED</text>' +
      '<text x="70" y="226" ' + font + ' font-size="17" fill="#fff">WHEELER</text><text x="70" y="242" ' + font + ' font-size="10" fill="' + GOLD + '">MAIN ST AT WHEELER AVE · TO THIRD WARD</text>',
      sky("htns1", "#1b1035", "#c8607a"));
  }

  /* 2. Truxillo St shotgun houses */
  function htnporch() {
    const house = (x, wall, trim) => '<g><path d="M' + x + ' 120l40 -30l40 30z" fill="#5a3a3a"/><rect x="' + (x + 4) + '" y="120" width="72" height="70" fill="' + wall + '"/>' +
      '<rect x="' + (x + 30) + '" y="140" width="20" height="50" fill="#4a2e22"/><rect x="' + (x + 10) + '" y="136" width="14" height="18" fill="#ffe7a8" stroke="' + trim + '" stroke-width="2"/><rect x="' + (x + 56) + '" y="136" width="14" height="18" fill="#ffe7a8" stroke="' + trim + '" stroke-width="2"/>' +
      '<rect x="' + x + '" y="186" width="80" height="6" fill="' + trim + '"/><rect x="' + (x + 2) + '" y="128" width="4" height="58" fill="' + trim + '"/><rect x="' + (x + 74) + '" y="128" width="4" height="58" fill="' + trim + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#htns2)"/>' +
      '<circle cx="60" cy="44" r="20" fill="#ffe2a8"/>' +
      house(10, "#7fb3c8", "#f3ead6") + house(110, "#e8c86a", "#fff") + house(210, "#d97a8a", "#f3ead6") + oak(352, 196, 1.3) +
      '<rect x="0" y="192" width="400" height="68" fill="#6f9a52"/><rect x="0" y="222" width="400" height="38" fill="#3a3c42"/>' +
      back(130, 214, PINK, "htn-sway") + back(150, 214, VIO, "htn-sway htn-s2") + back(170, 214, GOLD, "htn-sway htn-s3") +
      note(120, 160, "#fff", "") + note(186, 156, GOLD, "htn-n2") + note(150, 150, PINK, "htn-n3") +
      '<rect x="300" y="122" width="5" height="100" fill="#8a9096"/>' + sign(262, 116, 100, "TRUXILLO ST") +
      '<rect x="230" y="232" width="160" height="22" rx="3" fill="#111"/><text x="310" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">THIRD WARD · THE TRE</text>',
      sky("htns2", "#f3a07a", "#ffd9a8"));
  }

  /* 3. The studio: Dino on the keys */
  function htnstudio() {
    const whites = Array.from({ length: 14 }, (_, i) => '<rect class="' + (i % 4 === 1 ? "htn-key" : i % 4 === 3 ? "htn-key htn-k2" : "") + '" x="' + (90 + i * 16) + '" y="190" width="15" height="40" fill="#f5f2ea" stroke="#999"/>').join("");
    const blacks = [0, 1, 3, 4, 5, 7, 8, 10, 11, 12].map(i => '<rect class="' + (i % 3 ? "" : "htn-key htn-k3") + '" x="' + (101 + i * 16) + '" y="190" width="9" height="24" fill="#151515"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#241a30"/>' +
      '<rect x="24" y="24" width="120" height="90" fill="url(#htns3)" stroke="#5a4a6a" stroke-width="6"/>' + palm(60, 114, 0.8) + palm(116, 114, 0.7) +
      '<rect x="250" y="20" width="110" height="110" rx="4" fill="#3a2a10" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<g class="htn-spin"><circle cx="305" cy="68" r="36" fill="' + GOLD + '"/><circle cx="305" cy="68" r="26" fill="none" stroke="#c9a03a" stroke-width="1.5"/><circle cx="305" cy="68" r="12" fill="#b8860b"/><circle cx="305" cy="68" r="3" fill="#3a2a10"/></g>' +
      '<rect x="258" y="108" width="94" height="16" rx="2" fill="#111"/><text x="305" y="120" text-anchor="middle" ' + font + ' font-size="7" fill="' + GOLD + '">FEVER FOR DA FLAVOR</text>' +
      '<rect x="160" y="40" width="74" height="22" rx="3" fill="#3a0a0a"/><text class="htn-bl" x="197" y="56" text-anchor="middle" ' + font + ' font-size="12" fill="#ff4d4d">REC</text>' +
      '<g class="htn-spin"><circle cx="180" cy="100" r="16" fill="#333"/><circle cx="180" cy="100" r="5" fill="#888"/></g><g class="htn-spin"><circle cx="220" cy="100" r="16" fill="#333"/><circle cx="220" cy="100" r="5" fill="#888"/></g><rect x="160" y="118" width="80" height="14" fill="#2c2c34"/>' +
      '<rect x="70" y="176" width="260" height="62" rx="6" fill="#1c1c22" stroke="#555" stroke-width="2"/>' + whites + blacks +
      '<rect x="90" y="180" width="224" height="6" fill="#333"/>' + [0, 1, 2, 3, 4].map(i => '<circle cx="' + (100 + i * 12) + '" cy="183" r="2" fill="' + (i % 2 ? PINK : VIO) + '"/>').join("") +
      '<rect x="40" y="238" width="320" height="22" fill="#3a2a40"/>' +
      '<rect x="14" y="140" width="130" height="22" rx="3" fill="#111"/><text x="79" y="155" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">PLAY IT FOR ME, DINO</text>' +
      note(340, 170, PINK, "") + note(60, 200, GOLD, "htn-n2") + note(250, 168, VIO, "htn-n3"),
      sky("htns3", "#4fb3e8", "#ffd9a8"));
  }

  /* 4. The Eldorado Ballroom */
  function htnballroom() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 46) + '" y="78" width="30" height="46" fill="#ffcf7a"/>').join("");
    const dancers = [0, 2, 4].map(i => back(81 + i * 46, 124, i === 2 ? PINK : VIO, "htn-sway" + (i === 2 ? " htn-s2" : ""))).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#htns4)"/>' + stars(14) +
      '<g class="htn-beam"><path d="M74 210l-26 -200h20z" fill="#fff6c8" opacity=".18"/></g><g class="htn-beam htn-b2"><path d="M330 210l-14 -200h20z" fill="#fff6c8" opacity=".18"/></g>' +
      '<rect x="44" y="50" width="312" height="160" fill="' + CREAM + '"/><rect x="44" y="50" width="312" height="10" fill="#d8c8a0"/>' +
      '<rect x="44" y="124" width="312" height="8" fill="#c9b58a"/>' + win + dancers +
      '<rect x="82" y="53" width="236" height="18" fill="#2a1a10"/><text x="200" y="66.5" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '" letter-spacing="3">ELDORADO BALLROOM</text>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (60 + i * 50) + '" y="146" width="36" height="46" fill="#5a3a2a"/><rect x="' + (64 + i * 50) + '" y="150" width="28" height="18" fill="#9ad0e0" opacity=".6"/>').join("") +
      '<path d="M176 140h48l-6 -8h-36z" fill="' + PINK + '"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#3a3c42"/><path d="M0 214h400" stroke="#8a8478" stroke-width="5"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>' +
      note(40, 120, GOLD, "") + note(370, 110, PINK, "htn-n2") + note(200, 46, "#fff", "htn-n3"),
      sky("htns4", "#120a2a", "#4a2050"));
  }

  /* 5. Alabama St and Live Oak St, the Gulf Building behind */
  function htncorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#htns5)"/>' + stars(16) +
      gulf(330, 160, GOLD) +
      '<rect x="230" y="110" width="50" height="50" fill="#1f1c2c"/><rect x="364" y="120" width="36" height="40" fill="#1f1c2c"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#2b2d33"/>' +
      '<rect x="20" y="104" width="250" height="116" fill="#5a4a7a"/>' + Array.from({ length: 10 }, (_, r) => '<path d="M20 ' + (114 + r * 11) + 'h250" stroke="#4a3c66" stroke-width="1"/>').join("") +
      tag("H-TOWN", 38, 166, 48, PINK, -6) + tag("THE TRE", 70, 206, 24, GOLD, -3) + tag("SHAZAM · G.I.", 176, 200, 13, "#fff", -3) +
      '<circle class="htn-sp" cx="246" cy="186" r="3" fill="' + PINK + '"/><circle class="htn-sp htn-sp2" cx="252" cy="192" r="2" fill="' + PINK + '"/>' +
      '<rect x="312" y="118" width="6" height="118" fill="#8a9096"/>' + sign(262, 112, 106, "ALABAMA ST") + sign(270, 138, 100, "LIVE OAK ST") +
      '<rect x="0" y="222" width="400" height="38" fill="#3a3c42"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>',
      sky("htns5", "#0f1430", "#5a2a5e"));
  }

  window.SCENES = { htnstation, htnporch, htnstudio, htnballroom, htncorner };
})();
