/* snottynoserezkids scenes (Regions tab: Canada; Kitamaat Village, Haisla Nation, on Douglas Channel by Kitimat, BC; the duo now works out of East Vancouver). CSS classes and ids prefixed sn- (the page's own anim-train is kept).
   1 Skeena Regional Transit Route 12 Kitamaat Village: the BC Transit bus rolling into the village stop, Douglas Channel and the snowy Coast Mountains behind.
   2 A Haisla cedar pole in Kitamaat Village (formline red, black and turquoise; "I don't want a statue, I prefer my carvings"), an eagle circling in the rain.
   3 Douglas Channel at dusk: a gillnet boat, salmon jumping ("I'm thankful for the salmon"), oolichan flashing in the water ("blood thicker than oolichan grease").
   4 East Vancouver, where their studio and shop were: the glowing EAST VAN cross sculpture over Clark Dr, a SkyTrain gliding past.
   5 Haisla Blvd and Lahakas Blvd in Kitimat: green signs, SNRK and MINAY tagged on the wall, the mountains over Douglas Channel behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes snflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.sn-flk{animation:snflick 2.4s infinite}.sn-flk2{animation-delay:.8s}' +
    '@keyframes snrain{from{transform:translateY(-30px)}to{transform:translateY(60px)}}.sn-rain{animation:snrain .9s linear infinite}.sn-rain2{animation-delay:-.45s}' +
    '@keyframes sneagle{0%{transform:translate(0,0)}50%{transform:translate(120px,14px)}100%{transform:translate(0,0)}}.sn-eagle{animation:sneagle 9s ease-in-out infinite}' +
    '@keyframes snwing{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.4)}}.sn-wing{transform-box:fill-box;transform-origin:50% 100%;animation:snwing .9s ease-in-out infinite}' +
    '@keyframes snjump{0%,55%,100%{transform:translate(0,0) rotate(0);opacity:0}60%{opacity:1;transform:translate(0,0) rotate(-30deg)}75%{transform:translate(18px,-34px) rotate(0)}90%{transform:translate(36px,0) rotate(30deg);opacity:1}}.sn-fish{animation:snjump 3.2s ease-out infinite}.sn-fish2{animation-delay:-1.6s}' +
    '@keyframes snbob{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}.sn-bob{animation:snbob 2.2s ease-in-out infinite}' +
    '@keyframes snrip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.sn-rip{animation:snrip 3s ease-in-out infinite}.sn-rip2{animation-delay:-1.5s}' +
    '@keyframes snsky{from{transform:translateX(-200px)}to{transform:translateX(520px)}}.sn-sky{animation:snsky 7s linear infinite}' +
    '@keyframes snglow{0%,100%{opacity:1}50%{opacity:.7}}.sn-glow{animation:snglow 2.6s ease-in-out infinite}' +
    '@keyframes snspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sn-sp{animation:snspray 1.4s ease-out infinite}.sn-sp2{animation-delay:.45s}' +
    '@keyframes snsmoke{0%{transform:translate(0,0);opacity:.6}100%{transform:translate(14px,-40px);opacity:0}}.sn-smk{animation:snsmoke 3s ease-out infinite}.sn-smk2{animation-delay:-1.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const RED = "#d7262e", TURQ = "#2ec4b6", COPPER = "#d98a3d", BLK = "#141414";
  /* Coast Mountains with snow caps */
  const mtns = (base, col, snow) => '<path d="M0 ' + base + 'L40 ' + (base - 50) + 'L78 ' + (base - 22) + 'L124 ' + (base - 78) + 'L170 ' + (base - 30) + 'L214 ' + (base - 64) + 'L262 ' + (base - 18) + 'L310 ' + (base - 82) + 'L356 ' + (base - 34) + 'L400 ' + (base - 60) + 'V' + base + 'z" fill="' + col + '"/>' +
    '<path d="M112 ' + (base - 62) + 'L124 ' + (base - 78) + 'L136 ' + (base - 62) + 'L128 ' + (base - 66) + 'L122 ' + (base - 60) + 'z M298 ' + (base - 66) + 'L310 ' + (base - 82) + 'L322 ' + (base - 66) + 'L314 ' + (base - 70) + 'L306 ' + (base - 63) + 'z M30 ' + (base - 38) + 'L40 ' + (base - 50) + 'L50 ' + (base - 38) + 'L42 ' + (base - 41) + 'z M204 ' + (base - 52) + 'L214 ' + (base - 64) + 'L224 ' + (base - 52) + 'L216 ' + (base - 55) + 'z" fill="' + snow + '"/>';
  const trees = (y, n, col) => Array.from({ length: n }, (_, i) => { const x = i * (400 / n) + 6; return '<path d="M' + x + ' ' + y + 'l9 -26l9 26z" fill="' + col + '"/>'; }).join("");

  /* 1. Route 12 Kitamaat Village */
  function snbus() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (64 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1d2a36"/>').join("");
    const bus = '<g class="anim-train"><rect x="50" y="116" width="270" height="70" rx="10" fill="#f4f6f8" stroke="#7d8790" stroke-width="2"/>' + win +
      '<rect x="50" y="158" width="270" height="9" fill="#1f5fae"/><rect x="50" y="167" width="270" height="4" fill="#5fb246"/>' +
      '<rect x="292" y="124" width="26" height="40" rx="3" fill="#2a3b4c"/><rect x="290" y="120" width="30" height="10" rx="2" fill="#111"/><text x="305" y="128" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">12</text>' +
      '<rect x="60" y="120" width="120" height="6" rx="2" fill="#111"/><text x="120" y="125.5" text-anchor="middle" ' + font + ' font-size="5.5" fill="#ffb347">12 KITAMAAT VILLAGE</text>' +
      '<circle cx="96" cy="188" r="11" fill="#1a1a1a"/><circle cx="96" cy="188" r="4" fill="#888"/><circle cx="270" cy="188" r="11" fill="#1a1a1a"/><circle cx="270" cy="188" r="4" fill="#888"/>' +
      '<circle cx="316" cy="176" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sns1)"/>' + mtns(110, "#5b6b80", "#f2f6fa") +
      '<rect x="0" y="104" width="400" height="18" fill="#3f6d8a"/><g class="sn-rip"><path d="M20 110h40M150 114h50M290 109h60" stroke="#a9cde3" stroke-width="2" stroke-linecap="round"/></g>' +
      trees(122, 22, "#24412f") +
      '<rect x="0" y="196" width="400" height="64" fill="#4b4d52"/><path d="M0 228h400" stroke="#e8d36a" stroke-width="2" stroke-dasharray="16 12"/>' + bus +
      '<rect x="0" y="192" width="400" height="6" fill="#9a958c"/>' +
      '<rect x="346" y="120" width="5" height="76" fill="#333"/><rect x="330" y="100" width="38" height="26" rx="3" fill="#1f5fae" stroke="#fff" stroke-width="1.5"/><text x="349" y="117" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">12</text>' +
      '<rect x="62" y="210" width="230" height="34" rx="3" fill="#111"/><text x="74" y="233" ' + font + ' font-size="16" fill="#fff">Kitamaat Village</text>' + badge(222, 227, "12", "#1f5fae") +
      '<g class="sn-rain" opacity=".45">' + Array.from({ length: 18 }, (_, i) => '<path d="M' + (i * 23 + 5) + ' ' + ((i * 37) % 90) + 'l-3 10" stroke="#cfe3f2" stroke-width="1.2"/>').join("") + '</g>',
      sky("sns1", "#566a82", "#b9c8d6"));
  }

  /* 2. Cedar pole in the village */
  function snpole() {
    const face = (y, c) => '<rect x="176" y="' + y + '" width="48" height="40" rx="6" fill="#b8784a"/>' +
      '<path d="M182 ' + (y + 12) + 'q8 -9 16 0q-8 6 -16 0zM202 ' + (y + 12) + 'q8 -9 16 0q-8 6 -16 0z" fill="' + BLK + '"/><circle cx="190" cy="' + (y + 12) + '" r="2.4" fill="#fff"/><circle cx="210" cy="' + (y + 12) + '" r="2.4" fill="#fff"/>' +
      '<path d="M186 ' + (y + 6) + 'q4 -4 8 0M206 ' + (y + 6) + 'q4 -4 8 0" stroke="' + c + '" stroke-width="2.5" fill="none"/>' +
      '<path d="M190 ' + (y + 28) + 'h20q-2 8 -10 8q-8 0 -10 -8z" fill="' + RED + '" stroke="' + BLK + '" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sns2)"/>' + mtns(150, "#56677a", "#eef3f7") +
      '<rect x="0" y="146" width="400" height="20" fill="#41708c"/>' + trees(170, 20, "#29483a") +
      '<rect x="0" y="168" width="400" height="92" fill="#556b4a"/>' +
      '<g><rect x="30" y="150" width="110" height="60" fill="#7a5235"/><path d="M24 152l61 -30l61 30z" fill="#5d3d27"/>' +
      '<path d="M55 166h60v26H55z" fill="#1d1d1d"/><path d="M62 170q23 -12 46 0q-4 14 -23 18q-19 -4 -23 -18z" fill="' + RED + '"/><circle cx="76" cy="176" r="3" fill="#fff"/><circle cx="94" cy="176" r="3" fill="#fff"/><rect x="74" y="192" width="22" height="18" fill="#2a1b10"/></g>' +
      '<rect x="190" y="40" width="20" height="200" fill="#9c6640"/>' +
      '<path d="M170 46l30 -18l30 18l-6 6h-48z" fill="' + BLK + '"/><path d="M188 40l12 -8l12 8z" fill="' + TURQ + '"/><path d="M226 44l18 4l-18 6z" fill="#e8c35a"/>' +
      face(60, TURQ) + face(108, RED) + face(156, TURQ) +
      '<path d="M160 104l16 6v14l-16 6zM240 104l-16 6v14l16 6z" fill="' + BLK + '"/><path d="M164 110l10 3v8l-10 3zM236 110l-10 3v8l10 3z" fill="' + TURQ + '"/>' +
      '<rect x="168" y="236" width="64" height="8" fill="#5b4330"/>' +
      '<g class="sn-eagle"><g transform="translate(60 40)"><path class="sn-wing" d="M0 10q14 -14 26 0q12 -14 26 0" stroke="#222" stroke-width="3.5" fill="none" stroke-linecap="round"/><circle cx="26" cy="10" r="3" fill="#fff"/></g></g>' +
      '<g class="sn-rain" opacity=".45">' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 21 + 4) + ' ' + ((i * 41) % 110) + 'l-3 10" stroke="#d8e6f0" stroke-width="1.2"/>').join("") + '</g>' +
      '<g class="sn-rain sn-rain2" opacity=".35">' + Array.from({ length: 16 }, (_, i) => '<path d="M' + (i * 26 + 14) + ' ' + ((i * 29) % 120) + 'l-3 10" stroke="#d8e6f0" stroke-width="1.2"/>').join("") + '</g>',
      sky("sns2", "#6c7d8f", "#c3d0db"));
  }

  /* 3. Douglas Channel at dusk */
  function snchannel() {
    const salmon = (x, y, cls) => '<g class="sn-fish ' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><path d="M0 0q12 -8 24 0q-12 8 -24 0z" fill="#c9503a"/><path d="M24 0l8 -6v12z" fill="#a83d2c"/><circle cx="5" cy="-1" r="1.4" fill="#111"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sns3)"/>' +
      '<circle cx="300" cy="74" r="22" fill="#ffd27a" opacity=".85"/>' + mtns(140, "#3c3f5c", "#e9d9e4") +
      '<path d="M0 140L60 118L120 136L200 112L260 130L330 116L400 132V140z" fill="#2b2d45"/>' +
      '<rect x="0" y="138" width="400" height="122" fill="#24476a"/>' +
      '<g opacity=".55">' + [148, 158, 170, 184, 200, 218].map((y, i) => '<path d="M' + (300 - 12 - i * 4) + ' ' + y + 'h' + (24 + i * 8) + '" stroke="#ffcf7a" stroke-width="2.5" stroke-linecap="round"/>').join("") + '</g>' +
      '<g class="sn-rip"><path d="M10 162h60M130 176h80M250 160h70M40 206h90M230 222h120" stroke="#7fb0d6" stroke-width="2" stroke-linecap="round" opacity=".7"/></g>' +
      '<g class="sn-rip sn-rip2"><path d="M80 190h50M300 192h60M150 238h70" stroke="#a9d0ec" stroke-width="2" stroke-linecap="round" opacity=".6"/></g>' +
      '<g class="sn-bob"><path d="M110 170h120l-14 20H124z" fill="#e8e2d2"/><path d="M110 170h120" stroke="' + RED + '" stroke-width="4"/><rect x="150" y="146" width="40" height="24" fill="#f4f1e6"/><rect x="156" y="152" width="12" height="9" fill="#5b7a99"/><rect x="172" y="152" width="12" height="9" fill="#5b7a99"/>' +
      '<rect x="196" y="126" width="3" height="44" fill="#444"/><path d="M199 130l30 26" stroke="#555" stroke-width="1.5"/><rect x="118" y="160" width="26" height="10" rx="3" fill="#3a6a4a"/>' +
      '<g class="sn-smk"><circle cx="186" cy="140" r="4" fill="#ddd"/></g><g class="sn-smk sn-smk2"><circle cx="186" cy="140" r="3" fill="#ddd"/></g></g>' +
      
      salmon(48, 210, "") + salmon(286, 200, "sn-fish2") +
      Array.from({ length: 7 }, (_, i) => '<path class="sn-flk' + (i % 2 ? ' sn-flk2' : '') + '" d="M' + (40 + i * 46) + ' ' + (246 - (i % 3) * 8) + 'l8 -2l-8 -2z" fill="#dfe8ef" opacity=".8"/>').join(""),
      sky("sns3", "#3a2f5c", "#f0a87a"));
  }

  /* 4. East Van */
  function sneastvan() {
    const bld = [[0, 120, 50], [52, 100, 40], [94, 132, 46], [300, 110, 44], [346, 94, 54]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (200 - b[1]) + '" fill="#1d2236"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect class="sn-flk' + (i % 2 ? ' sn-flk2' : '') + '" x="' + (b[0] + 8 + (i % 2) * 18) + '" y="' + (b[1] + 12 + Math.floor(i / 2) * 22) + '" width="8" height="10" fill="#f6d77a" opacity=".8"/>').join("")).join("");
    const L = (x, y, ch) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="15" fill="#fffbe6">' + ch + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#sns4)"/>' + mtns(150, "#20253f", "#5a6380") + bld +
      '<rect x="196" y="120" width="8" height="90" fill="#555c6b"/>' +
      '<g class="sn-glow"><rect x="188" y="30" width="24" height="96" rx="2" fill="#2c2f3a" stroke="#fff3c4" stroke-width="2"/><rect x="146" y="58" width="108" height="22" rx="2" fill="#2c2f3a" stroke="#fff3c4" stroke-width="2"/>' +
      L(200, 47, "E") + L(200, 75, "A") + L(200, 100, "S") + L(200, 121, "T") + L(172, 75, "V") + L(228, 75, "N") + '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#7d8594"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 50 + 20) + '" y="186" width="8" height="24" fill="#6d7584"/>').join("") +
      '<g class="sn-sky"><rect x="0" y="152" width="190" height="24" rx="6" fill="#e9ecef" stroke="#8b939c" stroke-width="1.5"/>' + Array.from({ length: 7 }, (_, i) => '<rect x="' + (10 + i * 26) + '" y="157" width="18" height="10" rx="2" fill="#2b3f5a"/>').join("") + '<rect x="0" y="169" width="190" height="4" fill="#1f5fae"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#2e3038"/><path d="M0 236h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#e8ecf5">CLARK DR · EAST VANCOUVER</text>',
      sky("sns4", "#0d1026", "#3a2f5c"));
  }

  /* 5. Haisla Blvd and Lahakas Blvd, Kitimat */
  function sncorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sns5)"/>' + mtns(128, "#4d5f78", "#f4f7fb") +
      '<rect x="0" y="122" width="400" height="10" fill="#3f6d8a"/>' + trees(134, 24, "#28473a") +
      '<rect x="0" y="134" width="400" height="90" fill="#6f4a32"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (142 + i * 8) + 'h400" stroke="#5c3c28" stroke-width="1"/>').join("") +
      Array.from({ length: 11 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (134 + i * 8) + 'v8" stroke="#5c3c28" stroke-width="1"/>').join("")).join("") +
      tag("SNRK", 24, 196, 58, RED, -6) + tag("MINAY", 150, 214, 22, TURQ, -4) + tag("SKODEN", 30, 216, 16, COPPER, -3) +
      
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(260, 98, 130, "Haisla Blvd") + sign(250, 124, 140, "Lahakas Blvd") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="sn-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="sn-sp"><circle cx="200" cy="176" r="3" fill="' + RED + '" opacity=".7"/></g><g class="sn-sp sn-sp2"><circle cx="206" cy="170" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("sns5", "#3c4a6a", "#e8a07a"));
  }

  window.SCENES = { snbus: snbus, snpole: snpole, snchannel: snchannel, sneastvan: sneastvan, sncorner: sncorner };
})();
