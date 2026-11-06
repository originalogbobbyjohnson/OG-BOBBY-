/* meghantrainor scenes (Regions tab: Boston + New England; Nantucket, MA). CSS classes and ids prefixed mt- (the page's own anim-train is kept on the ferry).
   1 Steamboat Wharf, Nantucket: the island ferry from Hyannis sliding up to the gray-shingled wharf, pilings, gulls, the FERRY sign.
   2 Brant Point Light: the short white wooden tower on its little footbridge at the harbor mouth, the red light blinking, sailboats going by.
   3 The Methodist church on Centre St, where she started singing at six with her dad on the organ: white columns and pediment, notes floating out.
   4 Jetties Beach: the jetty rocks, the lifeguard stand, a little beach stage with a steel pan for an island-band (soca) set, waves rolling in.
   5 Main St and Centre St: green signs, MEG tagged on the brick, cobblestones, the gold-domed clock tower of the Unitarian church on Orange St behind. */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes mtflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.mt-flk{animation:mtflick 2.2s infinite}.mt-flk2{animation-delay:.7s}' +
    '@keyframes mtblink{0%,100%{opacity:.15}50%{opacity:1}}.mt-blink{animation:mtblink 2s ease-in-out infinite}' +
    '@keyframes mtrip{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.mt-rip{animation:mtrip 3s ease-in-out infinite}.mt-rip2{animation-delay:-1.5s}' +
    '@keyframes mtgull{from{transform:translate(-50px,0)}to{transform:translate(450px,-24px)}}.mt-gull{animation:mtgull 12s linear infinite}.mt-gull2{animation-delay:-6s}' +
    '@keyframes mtsail{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.mt-sail{animation:mtsail 16s linear infinite}.mt-sail2{animation-delay:-8s;animation-duration:20s}' +
    '@keyframes mtnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-60px);opacity:0}}.mt-note{animation:mtnote 3s ease-out infinite}.mt-note2{animation-delay:-1s}.mt-note3{animation-delay:-2s}' +
    '@keyframes mtwave{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.mt-wave{animation:mtwave 2.4s ease-in-out infinite}.mt-wave2{animation-delay:-1.2s}' +
    '@keyframes mtbike{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.mt-bike{animation:mtbike 10s linear infinite}' +
    '@keyframes mtbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.mt-hop{animation:mtbounce .5s ease-in-out infinite}.mt-hop2{animation-delay:-.25s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const bricks = (y0, y1, c) => { let b = ""; for (let y = y0; y < y1; y += 13) for (let x = ((y - y0) / 13) % 2 ? -18 : 0; x < 400; x += 36) b += '<rect x="' + x + '" y="' + y + '" width="34" height="11" fill="' + c + '"/>'; return b; };
  const shingles = (x, y, w, h, c) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let r = y + 6; r < y + h; r += 6) s += '<path d="M' + x + ' ' + r + 'h' + w + '" stroke="#6f6b64" stroke-width=".7" opacity=".6"/>'; return s; };
  const pill = (x, y, color, label) => '<rect x="' + x + '" y="' + y + '" width="' + (label.length * 6.4 + 14) + '" height="15" rx="7.5" fill="' + color + '"/><text x="' + (x + (label.length * 6.4 + 14) / 2) + '" y="' + (y + 11) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#fff">' + label + '</text>';
  const sailboat = (cls, x, y, c) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'h34l-6 8h-22z" fill="#f4f1e8"/><path d="M' + (x + 16) + ' ' + y + 'v-34l16 30z" fill="' + c + '"/><path d="M' + (x + 14) + ' ' + y + 'v-28l-12 26z" fill="#fff"/></g>';
  const PINK = "#ff6fae", GOLD = "#ffd166", SEA = "#4cc9f0", FERRY = "#1f4e79", GRAY = "#9a958c";

  /* 1. Steamboat Wharf */
  function mtferry() {
    let piles = "";
    for (let x = 6; x < 400; x += 26) piles += '<rect x="' + x + '" y="186" width="8" height="30" fill="#5a4636"/>';
    let ports = "";
    for (let i = 0; i < 10; i++) ports += '<rect x="' + (70 + i * 26) + '" y="128" width="16" height="10" rx="2" fill="#26313d"/>';
    const boat = '<g class="anim-train"><path d="M20 158h340l-18 30H44z" fill="' + FERRY + '"/><rect x="20" y="152" width="340" height="8" fill="#e9e6df"/>' +
      '<rect x="50" y="118" width="290" height="36" rx="3" fill="#f4f2ec" stroke="#8b8f96" stroke-width="1.5"/>' + ports +
      '<rect x="120" y="98" width="170" height="22" rx="3" fill="#f4f2ec" stroke="#8b8f96" stroke-width="1.5"/><rect x="130" y="104" width="150" height="8" fill="#26313d"/>' +
      '<rect x="230" y="78" width="16" height="22" fill="#1b2b3c"/><rect x="230" y="78" width="16" height="5" fill="' + GOLD + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mts1)"/>' +
      '<path class="mt-gull" d="M0 40q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/><path class="mt-gull mt-gull2" d="M0 64q5-5 10 0q5-5 10 0" stroke="#333" stroke-width="2" fill="none"/>' +
      /* town skyline far off: gray shingle houses */
      shingles(0, 82, 70, 28, "#8d8a82") + '<path d="M0 82l35-14 35 14z" fill="#5d5a55"/>' + shingles(330, 78, 70, 32, "#8d8a82") + '<path d="M330 78l35-16 35 16z" fill="#5d5a55"/>' +
      '<rect x="0" y="108" width="400" height="82" fill="#3c7aa1"/>' + boat +
      '<path class="mt-rip" d="M20 196q16-5 32 0t32 0M200 200q16-5 32 0t32 0" stroke="#a9dcf3" stroke-width="2" fill="none"/>' +
      piles + '<rect x="0" y="198" width="400" height="10" fill="#7c6a58"/>' +
      '<rect x="0" y="208" width="400" height="52" fill="#a59a8b"/>' +
      '<rect x="96" y="214" width="208" height="34" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="237" text-anchor="middle" ' + F + ' font-weight="700" font-size="17" fill="#fff">Steamboat Wharf</text>' +
      pill(14, 224, FERRY, "FERRY") +
      '<text x="352" y="230" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#fff">TO HYANNIS</text><text x="352" y="242" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#fff">NANTUCKET</text>',
      sky("mts1", "#8ec5ea", "#f6e7c8"));
  }

  /* 2. Brant Point Light */
  function mtbrant() {
    let legs = "";
    for (let x = 150; x <= 330; x += 30) legs += '<rect x="' + x + '" y="166" width="5" height="34" fill="#5a4636"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mts2)"/>' + stars(6) +
      '<rect x="0" y="150" width="400" height="110" fill="#2f6f97"/>' +
      sailboat("mt-sail", 0, 186, PINK) + sailboat("mt-sail mt-sail2", 0, 214, SEA) +
      /* footbridge on pilings out to the light */
      '<rect x="140" y="160" width="200" height="8" fill="#8b7a66"/>' + legs +
      '<path d="M140 160v-10M340 160v-10M140 152h200" stroke="#e9e3d6" stroke-width="2"/>' +
      /* the white wooden tower */
      '<path d="M210 160l4-80h24l4 80z" fill="#f6f4ee" stroke="#c9c3b6" stroke-width="1"/>' +
      '<rect x="218" y="120" width="8" height="12" fill="#3b3b3b"/>' +
      '<rect x="208" y="76" width="36" height="6" fill="#1d1d1d"/><rect x="214" y="58" width="24" height="18" fill="#2a2a2a"/>' +
      '<rect x="217" y="61" width="18" height="12" fill="#ff3b3b" class="mt-blink"/>' +
      '<path d="M212 58l14-12 14 12z" fill="#1d1d1d"/><path d="M226 46v-6" stroke="#1d1d1d" stroke-width="2"/>' +
      '<path class="mt-blink" d="M236 66l140-30v60zM216 66l-150-26v54z" fill="#ff6b6b" opacity=".25"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#e3d3a7"/>' +
      '<path class="mt-rip mt-rip2" d="M10 176q16-5 32 0t32 0M300 210q16-5 32 0t32 0" stroke="#a9dcf3" stroke-width="2" fill="none"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + A + ' font-size="15" fill="#3a2a1a">BRANT POINT LIGHT · NANTUCKET HARBOR</text>',
      sky("mts2", "#20304f", "#e9a87c"));
  }

  /* 3. The Methodist church on Centre St */
  function mtchurch() {
    let cols = "";
    for (let i = 0; i < 6; i++) cols += '<rect x="' + (126 + i * 30) + '" y="104" width="12" height="96" fill="#fbfaf6" stroke="#d8d3c6"/>';
    const note = (cls, x, y) => '<g class="mt-note ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="5" fill="' + PINK + '"/><path d="M' + (x + 5) + ' ' + y + 'v-18l8 4" stroke="' + PINK + '" stroke-width="2.4" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mts3)"/>' +
      '<circle cx="340" cy="40" r="16" fill="#fff3c4"/>' +
      shingles(0, 120, 100, 80, "#8f8a80") + '<path d="M0 120l50-22 50 22z" fill="#5d5a55"/><rect x="20" y="140" width="16" height="18" fill="#fff"/><rect x="60" y="140" width="16" height="18" fill="#fff"/>' +
      shingles(310, 124, 90, 76, "#8f8a80") + '<path d="M310 124l45-20 45 20z" fill="#5d5a55"/><rect x="330" y="144" width="16" height="18" fill="#fff"/><rect x="364" y="144" width="16" height="18" fill="#fff"/>' +
      /* church body, pediment, square cupola */
      '<rect x="114" y="90" width="182" height="110" fill="#efece4"/>' +
      '<path d="M108 92l97-40 97 40z" fill="#f7f5ef" stroke="#d8d3c6" stroke-width="1.5"/><circle cx="205" cy="76" r="8" fill="#d8d3c6"/>' +
      '<rect x="186" y="18" width="38" height="34" fill="#f7f5ef" stroke="#d8d3c6"/><rect x="196" y="26" width="18" height="18" rx="9" fill="#3a3a3a"/><path d="M182 18l23-12 23 12z" fill="#d8d3c6"/>' +
      '<rect x="114" y="98" width="182" height="8" fill="#e3dfd3"/>' + cols +
      '<rect x="193" y="150" width="24" height="50" fill="#5b3a28"/>' +
      '<rect x="100" y="200" width="210" height="8" fill="#cfc9bb"/><rect x="92" y="208" width="226" height="8" fill="#bdb6a6"/>' +
      note("", 205, 150) + note("mt-note2", 180, 160) + note("mt-note3", 228, 158) +
      '<rect x="0" y="216" width="400" height="44" fill="#8a7f72"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + A + ' font-size="15" fill="#fff">CENTRE ST · WHERE SHE FIRST SANG</text>',
      sky("mts3", "#93c8ec", "#f6e9cc"));
  }

  /* 4. Jetties Beach: the island-band stage */
  function mtjetties() {
    let rocks = "";
    for (let i = 0; i < 12; i++) rocks += '<ellipse cx="' + (250 + i * 14) + '" cy="' + (150 - i * 1.5) + '" rx="10" ry="7" fill="' + ["#6d6a66", "#827e78", "#5c5955"][i % 3] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mts4)"/>' +
      '<circle cx="70" cy="44" r="20" fill="#ffe7a0"/>' +
      '<rect x="0" y="120" width="400" height="44" fill="#3f8fbf"/>' + rocks +
      '<path class="mt-wave" d="M0 164q25-10 50 0t50 0t50 0t50 0t50 0t50 0t50 0t50 0v8H0z" fill="#e9f6fb"/>' +
      '<path class="mt-wave mt-wave2" d="M0 150q25-8 50 0t50 0t50 0t50 0t50 0t50 0t50 0t50 0" stroke="#bfe6f5" stroke-width="2" fill="none"/>' +
      '<rect x="0" y="168" width="400" height="92" fill="#ecd9a8"/>' +
      /* lifeguard stand */
      '<path d="M330 214l10-46M370 214l-10-46" stroke="#fbfaf6" stroke-width="4"/><rect x="334" y="160" width="32" height="10" fill="#fbfaf6"/><rect x="336" y="148" width="28" height="12" fill="#d64545"/>' +
      /* little stage with a steel pan and a mic stand */
      '<rect x="60" y="176" width="180" height="36" fill="#6b4a2c"/><rect x="60" y="172" width="180" height="6" fill="#8a6440"/>' +
      '<rect x="56" y="110" width="6" height="66" fill="#3d3d3d"/><rect x="238" y="110" width="6" height="66" fill="#3d3d3d"/><rect x="56" y="106" width="188" height="10" fill="' + PINK + '"/>' +
      '<g class="mt-hop"><ellipse cx="110" cy="158" rx="22" ry="7" fill="#c9ccd1" stroke="#7d8188"/><ellipse cx="110" cy="157" rx="17" ry="4" fill="#9ea3aa"/><path d="M96 162v12M124 162v12" stroke="#555" stroke-width="2"/></g>' +
      '<path d="M190 172v-40" stroke="#222" stroke-width="2"/><circle cx="190" cy="130" r="4" fill="#222"/>' +
      '<g class="mt-hop mt-hop2"><rect x="140" y="150" width="30" height="22" rx="3" fill="#2a2a2a"/><circle cx="155" cy="161" r="7" fill="#555"/><circle cx="155" cy="161" r="3" fill="' + GOLD + '"/></g>' +
      '<rect x="164" y="186" width="72" height="16" rx="2" fill="#111"/><text x="200" y="198" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="' + GOLD + '">ISLAND BAND</text>' +
      '<text x="200" y="246" text-anchor="middle" ' + A + ' font-size="15" fill="#5a3b1c">JETTIES BEACH · SUMMER SET</text>',
      sky("mts4", "#86c3ea", "#fbe9c6"));
  }

  /* Unitarian church tower on Orange St: white tower, clock, gilded dome */
  const goldDome = (x, base, s) =>
    '<g transform="translate(' + x + ' ' + base + ') scale(' + s + ')">' +
    '<rect x="-40" y="-60" width="80" height="60" fill="#d9d5cb"/><path d="M-40 -60l40-22 40 22z" fill="#c8c3b8"/>' +
    '<rect x="-16" y="-150" width="32" height="90" fill="#ece9e1"/><circle cx="0" cy="-118" r="11" fill="#fbfaf6" stroke="#333" stroke-width="2"/><path d="M0 -118v-7M0 -118h5" stroke="#333" stroke-width="2"/>' +
    '<rect x="-12" y="-176" width="24" height="26" fill="#ece9e1"/><path d="M-14 -176q14-30 28 0z" fill="' + GOLD + '"/><path d="M0 -196v-8" stroke="' + GOLD + '" stroke-width="3"/></g>';

  /* 5. Main St and Centre St */
  function mtcorner() {
    let cob = "";
    for (let y = 218; y < 260; y += 8) for (let x = ((y - 218) / 8) % 2 ? -6 : 0; x < 400; x += 14) cob += '<ellipse cx="' + x + '" cy="' + y + '" rx="6" ry="3.4" fill="' + ["#7d776e", "#8d877d", "#6f6a62"][(x + y) % 3] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a1412"/>' +
      '<rect x="0" y="0" width="400" height="92" fill="url(#mts5)"/>' + stars(9) + goldDome(196, 94, .42) +
      '<rect x="10" y="60" width="70" height="32" fill="#151a24"/><path d="M10 60l35-16 35 16z" fill="#151a24"/><rect x="262" y="56" width="50" height="36" fill="#151a24"/>' +
      bricks(92, 212, "#7a3a2c") +
      tag("MEG", 30, 172, 64, PINK, -5) + tag("MY NAME IS NO", 34, 124, 20, GOLD, -6) + tag("TREAT MYSELF", 30, 204, 18, SEA, -3) +
      '<rect x="0" y="212" width="400" height="48" fill="#5f5a52"/>' + cob +
      '<g class="mt-bike"><circle cx="10" cy="250" r="7" fill="none" stroke="#222" stroke-width="2"/><circle cx="34" cy="250" r="7" fill="none" stroke="#222" stroke-width="2"/><path d="M10 250l10-12h12l2 12M20 238l-2-6" stroke="' + PINK + '" stroke-width="2.4" fill="none"/></g>' +
      '<rect x="332" y="66" width="5" height="148" fill="#4a5058"/>' +
      '<rect x="282" y="60" width="106" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="335" y="75" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Main St</text>' +
      '<rect x="282" y="84" width="106" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="335" y="99" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Centre St</text>' +
      '<circle class="mt-flk" cx="382" cy="24" r="4" fill="#ffe7a8"/>',
      sky("mts5", "#0b1622", "#2c3a5a"));
  }

  window.SCENES = { mtferry, mtbrant, mtchurch, mtjetties, mtcorner };
})();
