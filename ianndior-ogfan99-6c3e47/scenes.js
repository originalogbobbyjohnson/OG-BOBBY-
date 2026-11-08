/* ianndior scenes (Regions tab: Houston + Texas; Corpus Christi, TX, the 361). CSS classes and ids prefixed id- (the page's own anim-train is kept).
   1 Port Ayers Station, the CCRTA transfer station at 4311 Ayers St (rebuilt 2024): shade canopy, benches, the arrivals screen, routes 21, 23 and 32, the bus pulling in.
   2 Arecibo Observatory, Arecibo, Puerto Rico (his birthplace): the great dish in the sinkhole between green karst hills, the platform hung from three towers ("I'm a prospect, not from earth").
   3 USS Lexington, the "Blue Ghost," moored off North Beach in Corpus Christi Bay: the navy-blue carrier at sunset, gulls and waves.
   4 The hills at night over Los Angeles, where he moved to make it ("Chasing the feeling in the hills at night" / "City of Angels" from "thought it was"): city grid twinkling, headlights winding up the hill.
   5 Shoreline Blvd and Lawrence St on the Corpus Christi bayfront: green signs, IANN tagged on the seawall, the Harbor Bridge lit up behind.
   No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes idblink{0%,100%{opacity:.3}50%{opacity:1}}.id-bl{animation:idblink 1.6s ease-in-out infinite}.id-bl2{animation-delay:-.8s}' +
    '@keyframes idwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-16px)}}.id-wave{animation:idwave 3.2s ease-in-out infinite}.id-wave2{animation-delay:-1.6s}' +
    '@keyframes idbird{from{transform:translateX(-60px)}to{transform:translateX(470px)}}.id-bird{animation:idbird 12s linear infinite}.id-bird2{animation-delay:-6s}' +
    '@keyframes idflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.35)}}.id-flap{transform-box:fill-box;transform-origin:center;animation:idflap .8s ease-in-out infinite}' +
    '@keyframes idpulse{0%{transform:scale(.2);opacity:.9}100%{transform:scale(1.6);opacity:0}}.id-pulse{transform-box:fill-box;transform-origin:center;animation:idpulse 2.6s ease-out infinite}.id-pulse2{animation-delay:-1.3s}' +
    '@keyframes idhue{0%,100%{stroke:#f2a7c3}33%{stroke:#5ec8e5}66%{stroke:#f5d76e}}.id-led{animation:idhue 4s linear infinite}' +
    '@keyframes iddrive{from{offset-distance:0%}to{offset-distance:100%}}.id-car{animation:iddrive 7s linear infinite}.id-car2{animation-delay:-3.5s}' +
    '@keyframes idsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.id-sway{transform-box:fill-box;transform-origin:50% 100%;animation:idsway 3s ease-in-out infinite}' +
    '@keyframes idspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.id-spr{animation:idspray 1.4s ease-out infinite}.id-spr2{animation-delay:.45s}' +
    '@keyframes idscroll{0%,45%{opacity:1}50%,95%{opacity:0}100%{opacity:1}}.id-sc1{animation:idscroll 5s infinite}.id-sc2{animation:idscroll 5s infinite;animation-delay:-2.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "id-bl" + (i % 2 ? " id-bl2" : "")) + '" cx="' + ((i * 83 + 17) % 400) + '" cy="' + (6 + (i * 41) % 80) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const PINK = "#f2a7c3", TEAL = "#5ec8e5", GOLD = "#f5d76e";
  const R21 = "#0072bc", R23 = "#00a651", R32 = "#f7941d";
  const route = (x, y, n, c) => '<rect x="' + x + '" y="' + (y - 10) + '" width="26" height="20" rx="5" fill="' + c + '"/><text x="' + (x + 13) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + n + '</text>';
  const palm = (x, base, h, c) => '<g><path d="M' + x + ' ' + base + 'q' + (-4) + ' ' + (-h / 2) + ' ' + 4 + ' ' + (-h) + '" stroke="#5a4632" stroke-width="4" fill="none"/>' +
    '<g transform="translate(' + (x + 4) + ' ' + (base - h) + ')"><g class="id-sway">' +
    [[-26, -2], [-20, 10], [24, -4], [20, 10], [-4, -16], [8, -14]].map(p => '<path d="M0 0q' + (p[0] / 2) + ' ' + (p[1] - 10) + ' ' + p[0] + ' ' + p[1] + '" stroke="' + c + '" stroke-width="4" fill="none" stroke-linecap="round"/>').join("") + '</g></g></g>';

  /* 1. Port Ayers Station, CCRTA, 4311 Ayers St */
  function idstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 40) + '" y="140" width="32" height="24" rx="3" fill="#1b2a38"/>').join("");
    const bus = '<g class="anim-train"><path d="M40 210V138q0 -10 10 -10h292q16 0 20 14l6 68z" fill="#f4f6f8" stroke="#8a939b" stroke-width="2"/>' + win +
      '<path d="M340 132q20 4 24 36h-24z" fill="#1b2a38"/>' +
      '<path d="M40 176h328v8H40z" fill="' + R21 + '"/><path d="M40 186h328v4H40z" fill="' + R23 + '"/>' +
      '<rect x="52" y="170" width="20" height="36" rx="2" fill="#cfd5db" stroke="#9aa1a8"/>' +
      '<rect x="48" y="130" width="112" height="10" rx="2" fill="#111"/><text x="104" y="138" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">21 ARBOLEDA</text>' +
      '<circle cx="360" cy="196" r="3.5" fill="#fff6c2"/><circle cx="104" cy="212" r="11" fill="#222"/><circle cx="104" cy="212" r="4.5" fill="#888"/><circle cx="304" cy="212" r="11" fill="#222"/><circle cx="304" cy="212" r="4.5" fill="#888"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ids1)"/>' + stars(6) +
      '<circle cx="330" cy="40" r="16" fill="#ffd9a0" opacity=".85"/>' +
      palm(26, 120, 70, "#2f7a4a") + palm(372, 118, 64, "#2f7a4a") +
      '<rect x="0" y="112" width="400" height="10" fill="#3c3a44"/>' +
      /* canopy and columns */
      '<path d="M40 54h320l-12 10H52z" fill="#e9edf1" stroke="#9aa6b2" stroke-width="1.5"/><rect x="52" y="64" width="296" height="4" fill="' + TEAL + '"/>' +
      [70, 150, 250, 330].map(x => '<rect x="' + (x - 3) + '" y="68" width="6" height="48" fill="#7b8794"/>').join("") +
      /* benches */
      [96, 196, 276].map(x => '<rect x="' + x + '" y="102" width="34" height="5" rx="1" fill="#6c4a32"/><rect x="' + (x + 3) + '" y="107" width="3" height="8" fill="#555"/><rect x="' + (x + 28) + '" y="107" width="3" height="8" fill="#555"/>').join("") +
      /* arrivals screen */
      '<rect x="158" y="74" width="80" height="24" rx="2" fill="#0c0f14" stroke="#5c6670" stroke-width="1.5"/>' +
      '<g class="id-sc1"><text x="198" y="85" text-anchor="middle" ' + font + ' font-size="7" fill="#7cf29a">21 ARBOLEDA  2 MIN</text><text x="198" y="94" text-anchor="middle" ' + font + ' font-size="7" fill="#7cf29a">23 MOLINA  6 MIN</text></g>' +
      '<g class="id-sc2"><text x="198" y="89" text-anchor="middle" ' + font + ' font-size="7" fill="#7cf29a">32 SOUTHSIDE  4 MIN</text></g>' +
      /* station sign */
      '<rect x="98" y="20" width="204" height="30" rx="3" fill="#111"/><text x="146" y="40" text-anchor="middle" ' + font + ' font-size="12.5" fill="#fff">PORT AYERS</text>' +
      route(196, 35, "21", R21) + route(226, 35, "23", R23) + route(256, 35, "32", R32) +
      '<rect x="0" y="122" width="400" height="6" fill="#d8d2c4"/><rect x="0" y="128" width="400" height="132" fill="#4a4a50"/>' +
      '<path d="M0 236h400" stroke="#f5d76e" stroke-width="3" stroke-dasharray="22 16"/>' + bus,
      sky("ids1", "#2a2350", "#e8907a"));
  }

  /* 2. Arecibo Observatory, Puerto Rico */
  function idarecibo() {
    const hill = (x, w, h, c) => '<path d="M' + (x - w / 2) + ' 200Q' + (x - w / 2) + ' ' + (200 - h) + ' ' + x + ' ' + (200 - h) + 'Q' + (x + w / 2) + ' ' + (200 - h) + ' ' + (x + w / 2) + ' 200z" fill="' + c + '"/>';
    const towers = [[70, 92], [330, 92], [268, 108]].map(t => '<path d="M' + (t[0] - 6) + ' 200L' + (t[0] - 3) + ' ' + t[1] + 'h6L' + (t[0] + 6) + ' 200z" fill="#cfcac0" stroke="#8d877c"/>').join("");
    const cables = '<g stroke="#3a3f44" stroke-width="1"><path d="M70 94L186 120M70 98L186 124M330 94L214 120M330 98L214 124M268 110L212 120M268 114L212 124"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ids2)"/>' + stars(26) +
      '<g transform="translate(200 128)"><circle class="id-pulse" cx="0" cy="0" r="30" fill="none" stroke="' + TEAL + '" stroke-width="2"/><circle class="id-pulse id-pulse2" cx="0" cy="0" r="30" fill="none" stroke="' + PINK + '" stroke-width="2"/></g>' +
      hill(30, 120, 80, "#1f5a34") + hill(110, 110, 60, "#2a6b3d") + hill(300, 120, 66, "#2a6b3d") + hill(380, 120, 84, "#1f5a34") +
      towers + cables +
      /* platform */
      '<path d="M180 118h40l-6 12h-28z" fill="#9aa3a8" stroke="#5f686e" stroke-width="1.5"/><path d="M186 124l14 12l14 -12" stroke="#5f686e" stroke-width="1.5" fill="none"/>' +
      '<path d="M190 130h20v8q-10 8 -20 0z" fill="#e6e8ea" stroke="#9aa3a8"/>' +
      /* the dish in the sinkhole */
      '<path d="M0 200h400v60H0z" fill="#1c4a2c"/>' +
      '<ellipse cx="200" cy="210" rx="150" ry="28" fill="#aab4ba" stroke="#6d777d" stroke-width="2"/>' +
      '<ellipse cx="200" cy="212" rx="130" ry="21" fill="#c3ccd1"/>' +
      Array.from({ length: 11 }, (_, i) => '<path d="M' + (70 + i * 26) + ' ' + (196 + Math.abs(5 - i) * 1.2) + 'q0 14 0 26" stroke="#8e999f" stroke-width=".7"/>').join("") +
      '<path d="M60 212q140 22 280 0M64 204q136 18 272 0" stroke="#8e999f" stroke-width=".7" fill="none"/>' +
      '<path d="M0 238q100 -14 200 0t200 0v22H0z" fill="#174024"/>' +
      '<text x="388" y="252" text-anchor="end" ' + font + ' font-size="9" fill="#cfe9d6" opacity=".8">ARECIBO, PUERTO RICO</text>',
      sky("ids2", "#0b1030", "#3a3070"));
  }

  /* 3. USS Lexington off North Beach, Corpus Christi Bay */
  function idlexington() {
    const NAVY = "#2c3a52", DECK = "#3b4552";
    const gull = (y, cls) => '<g class="id-bird ' + cls + '"><g class="id-flap"><path d="M0 ' + y + 'q6 -6 12 0q6 -6 12 0" stroke="#f7f3ea" stroke-width="2" fill="none"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ids3)"/>' +
      '<circle cx="320" cy="132" r="26" fill="#ffcf7a" opacity=".9"/>' +
      gull(40, "") + gull(64, "id-bird2") +
      /* the carrier */
      '<path d="M18 150h330l30 -6l-12 40H40z" fill="' + NAVY + '" stroke="#1b2536" stroke-width="2"/>' +
      '<path d="M10 146h372l-6 6H16z" fill="' + DECK + '"/>' +
      '<path d="M40 149h300" stroke="#e8e2d0" stroke-width="1" stroke-dasharray="10 8"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (60 + i * 22) + '" y="160" width="8" height="5" fill="#1b2536"/>').join("") +
      /* island */
      '<path d="M236 146v-30h40v30z" fill="' + NAVY + '" stroke="#1b2536" stroke-width="1.5"/><rect x="242" y="104" width="28" height="12" fill="' + NAVY + '" stroke="#1b2536"/>' +
      '<rect x="252" y="80" width="4" height="24" fill="#1b2536"/><path d="M244 88h20M246 96h16" stroke="#1b2536" stroke-width="2"/>' +
      '<rect x="244" y="122" width="24" height="4" fill="#9fb3c8"/>' +
      '<text x="256" y="141" text-anchor="middle" ' + font + ' font-size="13" fill="#f7f3ea">16</text>' +
      '<circle class="id-bl" cx="254" cy="78" r="2" fill="#ff4b4b"/>' +
      /* small planes on deck */
      [70, 120, 170].map(x => '<path d="M' + x + ' 146l14 -4l14 4z" fill="#5b6a80"/>').join("") +
      /* water */
      '<rect x="0" y="176" width="400" height="84" fill="#1f4f6e"/>' +
      '<g class="id-wave"><path d="M0 186q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#7fc6e0" stroke-width="2" fill="none" opacity=".6"/></g>' +
      '<g class="id-wave id-wave2"><path d="M-20 210q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#a9dcec" stroke-width="2" fill="none" opacity=".5"/></g>' +
      '<path d="M0 240q200 -8 400 0v20H0z" fill="#e7d4a8"/>' +
      '<path d="M300 196q20 3 40 0" stroke="#ffcf7a" stroke-width="3" opacity=".6"/>' +
      '<text x="12" y="252" ' + font + ' font-size="9" fill="#5a4630">NORTH BEACH</text>',
      sky("ids3", "#3a3c78", "#f2a07a"));
  }

  /* 4. The hills at night over Los Angeles */
  function idhills() {
    const lights = Array.from({ length: 90 }, (_, i) => '<circle class="' + (i % 5 ? "" : "id-bl" + (i % 2 ? " id-bl2" : "")) + '" cx="' + ((i * 47) % 400) + '" cy="' + (176 + (i * 13) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="' + (i % 4 ? "#ffd98a" : "#f7f3ea") + '"/>').join("");
    const road = "M60 176C110 150 150 168 190 140S260 110 300 92";
    return svg(
      '<rect width="400" height="260" fill="url(#ids4)"/>' + stars(30) +
      '<circle cx="70" cy="44" r="14" fill="#f7f3ea"/><circle cx="76" cy="40" r="13" fill="#141032"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#0f0d22"/>' + lights +
      Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (184 + i * 7) + 'h400" stroke="#ffd98a" stroke-width=".4" opacity=".25"/>').join("") +
      '<path d="M0 182C80 150 120 160 170 130S260 70 320 76S380 120 400 130V260H0z" fill="#1a1530" opacity=".0"/>' +
      '<path d="M0 186C60 170 100 176 150 150S240 84 300 80S370 110 400 124V186z" fill="#221a3c"/>' +
      '<path d="M200 186C240 160 280 140 330 128S380 140 400 150V186z" fill="#2a2048"/>' +
      '<path d="' + road + '" stroke="#3a3058" stroke-width="3" fill="none"/>' +
      '<circle class="id-car" r="2.2" fill="#fff6c2" style="offset-path:path(\'' + road + '\')"/><circle class="id-car id-car2" r="2.2" fill="#ff5a5a" style="offset-path:path(\'' + road + '\')"/>' +
      [[250, 100], [290, 88], [320, 96]].map(h => '<rect x="' + h[0] + '" y="' + h[1] + '" width="16" height="8" fill="#14102a"/><rect x="' + (h[0] + 3) + '" y="' + (h[1] + 2) + '" width="10" height="3" fill="' + GOLD + '" class="id-bl"/>').join("") +
      '<text x="388" y="252" text-anchor="end" ' + font + ' font-size="9" fill="' + PINK + '" opacity=".85">CITY OF ANGELS</text>',
      sky("ids4", "#141032", "#4a2a5a"));
  }

  /* 5. Shoreline Blvd and Lawrence St, Corpus Christi bayfront, the Harbor Bridge behind */
  function idcorner() {
    const truss = Array.from({ length: 14 }, (_, i) => { const x = 130 + i * 10, t = (x - 200) / 70, y = 92 + 46 * t * t; return '<path d="M' + x + ' ' + y.toFixed(1) + 'L' + x + ' 136" stroke="#c9ced4" stroke-width="1"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ids5)"/>' + stars(14) +
      /* Harbor Bridge: concrete piers, deck, steel through-arch with LED glow */
      '<path d="M0 140h400" stroke="#9aa1aa" stroke-width="5"/><path d="M0 136h400" stroke="#c9ced4" stroke-width="2"/>' +
      [20, 70, 330, 380].map(x => '<rect x="' + (x - 3) + '" y="140" width="6" height="40" fill="#8a9099"/>').join("") +
      '<rect x="124" y="136" width="10" height="44" fill="#8a9099"/><rect x="266" y="136" width="10" height="44" fill="#8a9099"/>' +
      '<path class="id-led" d="M130 138Q200 46 270 138" stroke="#f2a7c3" stroke-width="5" fill="none"/>' +
      '<path d="M138 138Q200 66 262 138" stroke="#c9ced4" stroke-width="2" fill="none"/>' + truss +
      '<path class="id-led" d="M0 141h400" stroke="#5ec8e5" stroke-width="1.5" opacity=".7"/>' +
      '<rect x="0" y="160" width="400" height="30" fill="#163a55"/><g class="id-wave"><path d="M0 170q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#6fb6d4" stroke-width="1.5" fill="none" opacity=".5"/></g>' +
      /* seawall steps + wall with tags */
      '<rect x="0" y="176" width="400" height="48" fill="#cfc4ae"/>' + Array.from({ length: 4 }, (_, i) => '<path d="M0 ' + (184 + i * 10) + 'h400" stroke="#b5a98f" stroke-width="1.5"/>').join("") +
      '<rect x="0" y="176" width="400" height="5" fill="#a89a7e"/>' +
      tag("IANN", 26, 206, 58, PINK, -6) + tag("361", 172, 192, 34, TEAL, -5) + tag("STILL HERE", 120, 218, 20, "#fff", -3) + tag("DIOR", 262, 206, 18, GOLD, -4) +
      palm(356, 150, 78, "#2f7a4a") +
      '<rect x="0" y="224" width="400" height="36" fill="#55535a"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/><path d="M0 244h400" stroke="#f5d76e" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<rect x="312" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(244, 98, 142, "Shoreline Blvd") + sign(244, 124, 142, "Lawrence St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="id-bl" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="id-spr"><circle cx="236" cy="196" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="id-spr id-spr2"><circle cx="242" cy="190" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("ids5", "#121436", "#7a3a6a"));
  }

  window.SCENES = { idstation: idstation, idarecibo: idarecibo, idlexington: idlexington, idhills: idhills, idcorner: idcorner };
})();
