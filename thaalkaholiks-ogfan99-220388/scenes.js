/* Tha Alkaholiks scenes (Regions tab: Los Angeles + SoCal; the San Fernando Valley). CSS classes prefixed tlk- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tlkflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.tlk-flk{animation:tlkflick 2.6s infinite}.tlk-flk2{animation-delay:.9s}' +
    '@keyframes tlkglow{0%,100%{opacity:.45}50%{opacity:1}}.tlk-glow{animation:tlkglow 2s ease-in-out infinite}.tlk-g2{animation-delay:-.7s}.tlk-g3{animation-delay:-1.4s}' +
    '@keyframes tlkwave{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.tlk-wv{transform-box:fill-box;transform-origin:50% 100%;animation:tlkwave .6s ease-in-out infinite}' +
    '@keyframes tlkspin{to{transform:rotate(360deg)}}.tlk-spin{transform-box:fill-box;transform-origin:50% 50%;animation:tlkspin 1.8s linear infinite}' +
    '@keyframes tlkreel{to{transform:rotate(-360deg)}}.tlk-reel{transform-box:fill-box;transform-origin:50% 50%;animation:tlkreel 3s linear infinite}' +
    '@keyframes tlkbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.tlk-bob{animation:tlkbob .7s ease-in-out infinite}.tlk-bob2{animation-delay:-.35s}' +
    '@keyframes tlkpump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.tlk-pump{transform-box:fill-box;transform-origin:50% 50%;animation:tlkpump .5s ease-in-out infinite}' +
    '@keyframes tlkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tlk-sp{animation:tlkspray 1.4s ease-out infinite}.tlk-sp2{animation-delay:.45s}' +
    '@keyframes tlkcloud{0%{transform:translateX(-80px)}100%{transform:translateX(460px)}}.tlk-cl{animation:tlkcloud 40s linear infinite}.tlk-cl2{animation-delay:-20s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (cx, cy, txt, color) => '<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="' + color + '"/><text x="' + cx + '" y="' + (cy + 5) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const palm = (x, y, h, c) => '<path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' -2 -' + h + '" stroke="' + c + '" stroke-width="4" fill="none"/>' +
    [-50, -20, 10, 40, 70, 160, 200].map(a => '<path d="M' + (x - 2) + ' ' + (y - h) + 'q' + (Math.cos(a * Math.PI / 180) * 14).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * 14 - 6).toFixed(1) + ' ' + (Math.cos(a * Math.PI / 180) * 26).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * 20 + 6).toFixed(1) + '" stroke="' + c + '" stroke-width="3" fill="none"/>').join("");
  const GOLD = "#f2b134", RED = "#e8443a", BLUE = "#3fb7e0", BLINE = "#e3131b", GLINE = "#fc4c02";

  /* 1. North Hollywood station, end of the Metro B Line under Lankershim Blvd: the big underground hall, the black sign with the red B and orange G bullets, the red-banded subway car sliding in */
  function tlkstation() {
    const tr = '<g class="anim-train"><rect x="20" y="112" width="336" height="72" rx="8" fill="#d9dde2" stroke="#7a8088" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 44) + '" y="122" width="30" height="26" rx="2" fill="#1b2128"/>').join("") +
      '<rect x="20" y="156" width="336" height="7" fill="' + BLINE + '"/><rect x="336" y="116" width="20" height="66" rx="4" fill="#aab0b8"/><circle cx="348" cy="172" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#2a2e36"/>' +
      /* vaulted ceiling + light coves */
      '<path d="M0 0h400v30q-200 -26 -400 0z" fill="#3a404a"/>' + [40, 120, 200, 280, 360].map((x, i) => '<path d="M' + (x - 30) + ' 30q30 -14 60 0" stroke="#565e6a" stroke-width="3" fill="none"/><rect class="tlk-flk' + (i % 2 ? " tlk-flk2" : "") + '" x="' + (x - 22) + '" y="34" width="44" height="4" rx="2" fill="#fff4d0"/>').join("") +
      /* tiled back wall with a warm mural band */
      '<rect x="0" y="66" width="400" height="34" fill="#b88a5a"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40 + 6) + '" y="72" width="28" height="22" rx="3" fill="' + ["#d8a85c", "#8a5a3a", "#e0c08a", "#a06a40"][i % 4] + '"/>').join("") +
      '<rect x="0" y="100" width="400" height="90" fill="#1c1f25"/>' + tr +
      '<rect x="0" y="190" width="400" height="7" fill="#f2c200"/><rect x="0" y="197" width="400" height="63" fill="#8d8a84"/>' +
      Array.from({ length: 13 }, (_, i) => '<path d="M' + (i * 32) + ' 197l-12 63" stroke="#7a7770" stroke-width="1"/>').join("") +
      /* station sign */
      '<rect x="64" y="40" width="272" height="24" rx="3" fill="#111"/><text x="76" y="57" ' + font + ' font-size="14" fill="#fff">North Hollywood</text>' + bullet(290, 52, "B", BLINE) + bullet(316, 52, "G", GLINE) +
      [24, 376].map(x => '<rect x="' + (x - 8) + '" y="30" width="16" height="160" fill="#4a5160"/>').join("") +
      '<rect class="tlk-glow" x="150" y="214" width="100" height="5" rx="2.5" fill="#fff6c2" opacity=".4"/>',
      "");
  }

  /* 2. Yo Mama's House in L.A., where 21 & Over was cut (1992-93): the console with bouncing meters, the reel-to-reel turning, the vocal booth glass, a crate of records */
  function tlkstudio() {
    return svg(
      '<rect width="400" height="260" fill="#241a14"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 46) + '" y="0" width="40" height="120" fill="#2e221a"/><rect x="' + (i * 46 + 6) + '" y="8" width="28" height="104" fill="#3a2a20"/>').join("") +
      /* booth window with a mic inside */
      '<rect x="40" y="18" width="150" height="92" rx="4" fill="#0f1a22" stroke="#6a5444" stroke-width="5"/><path d="M60 30l40 70M120 30l40 70" stroke="#2a3a48" stroke-width="6" opacity=".6"/>' +
      '<path d="M115 110v-46" stroke="#7a7f88" stroke-width="4"/><rect x="106" y="40" width="18" height="30" rx="9" fill="#b9bec6"/><circle cx="140" cy="56" r="14" fill="none" stroke="#555" stroke-width="2"/>' +
      '<rect x="222" y="22" width="118" height="22" rx="3" fill="' + RED + '" class="tlk-glow"/><text x="281" y="38" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" letter-spacing="2">ON AIR</text>' +
      /* reel to reel */
      '<rect x="222" y="54" width="118" height="70" rx="4" fill="#1a1a1c" stroke="#555" stroke-width="2"/>' +
      [252, 310].map(x => '<g class="tlk-reel"><circle cx="' + x + '" cy="84" r="20" fill="#3a3a3e" stroke="#888" stroke-width="2"/><circle cx="' + x + '" cy="84" r="4" fill="#ccc"/><path d="M' + x + ' 66v10M' + (x - 15) + ' 93l8 -5M' + (x + 15) + ' 93l-8 -5" stroke="#999" stroke-width="3"/></g>').join("") +
      '<path d="M252 104h58" stroke="#5a3a20" stroke-width="2"/>' +
      /* console */
      '<path d="M0 260l30 -112h340l30 112z" fill="#3a3a40"/><path d="M30 148h340l4 10h-348z" fill="#55555c"/>' +
      Array.from({ length: 24 }, (_, i) => '<rect x="' + (48 + i * 13) + '" y="168" width="4" height="60" fill="#1c1c20"/><rect x="' + (45 + i * 13) + '" y="' + (184 + (i * 17) % 34) + '" width="10" height="6" rx="1" fill="' + (i % 6 === 0 ? GOLD : "#cfcfd4") + '"/>').join("") +
      Array.from({ length: 12 }, (_, i) => '<rect class="tlk-wv" style="animation-delay:-' + ((i * 0.11) % 0.6).toFixed(2) + 's" x="' + (120 + i * 14) + '" y="134" width="8" height="12" fill="' + (i > 8 ? RED : (i > 5 ? GOLD : "#4ad07a")) + '"/>').join("") +
      /* crate */
      '<rect x="352" y="104" width="44" height="40" fill="#8a6a3a" stroke="#5a4020" stroke-width="2"/>' + [0, 1, 2, 3].map(i => '<rect x="' + (356 + i * 9) + '" y="94" width="6" height="18" fill="' + [GOLD, BLUE, RED, "#eee"][i] + '"/>').join(""),
      "");
  }

  /* 3. "The Liks could rock a party from Halloween to Christmas": a backyard house party, jack-o'-lanterns on one side, Christmas lights on the other, the speakers thumping, the crowd bouncing */
  function tlkparty() {
    const lights = Array.from({ length: 16 }, (_, i) => '<circle class="tlk-glow' + ["", " tlk-g2", " tlk-g3"][i % 3] + '" cx="' + (206 + i * 12) + '" cy="' + (44 + Math.sin(i / 2.2) * 8).toFixed(1) + '" r="3.2" fill="' + [RED, "#4ad07a", GOLD, BLUE][i % 4] + '"/>').join("");
    const pump = (x) => '<g class="tlk-glow"><path d="M' + x + ' 196q-16 0 -16 -14t16 -14t16 14t-16 14z" fill="#f08a1c"/></g><path d="M' + (x - 6) + ' 178l3 4l3 -4M' + (x + 1) + ' 178l3 4l3 -4" stroke="#3a1a00" stroke-width="2" fill="none"/><path d="M' + (x - 7) + ' 188q7 5 14 0" stroke="#3a1a00" stroke-width="2" fill="none"/><rect x="' + (x - 2) + '" y="164" width="4" height="6" fill="#4a6a20"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tlk3)"/>' + Array.from({ length: 12 }, (_, i) => '<circle cx="' + ((i * 61) % 400) + '" cy="' + (10 + (i * 29) % 50) + '" r="1.2" fill="#fff" opacity=".7"/>').join("") +
      '<circle cx="64" cy="40" r="16" fill="#f4ecd0"/><circle cx="70" cy="36" r="14" fill="url(#tlk3)"/>' +
      /* house back */
      '<rect x="190" y="60" width="210" height="110" fill="#5a4a40"/><path d="M180 64l120 -36l110 36z" fill="#3a2e28"/><rect x="230" y="96" width="44" height="40" fill="#ffd98a"/><rect x="320" y="96" width="44" height="40" fill="#ffd98a"/>' +
      '<path d="M200 44q100 30 200 0" stroke="#333" stroke-width="1" fill="none"/>' + lights +
      /* fence + yard */
      '<rect x="0" y="120" width="190" height="56" fill="#7a5a3a"/>' + Array.from({ length: 19 }, (_, i) => '<rect x="' + (i * 10) + '" y="116" width="8" height="60" fill="#8a6a44"/>').join("") +
      '<rect x="0" y="176" width="400" height="84" fill="#2d3a24"/>' +
      pump(40) + pump(84) + pump(128) +
      /* speakers */
      [160, 380].map(x => '<rect x="' + (x - 18) + '" y="132" width="36" height="66" rx="3" fill="#111" stroke="#444" stroke-width="2"/><circle class="tlk-pump" cx="' + x + '" cy="176" r="12" fill="#2a2a2e" stroke="#666" stroke-width="2"/><circle cx="' + x + '" cy="148" r="6" fill="#2a2a2e" stroke="#666"/>').join("") +
      /* crowd silhouettes */
      Array.from({ length: 7 }, (_, i) => '<g class="tlk-bob' + (i % 2 ? " tlk-bob2" : "") + '"><circle cx="' + (196 + i * 26) + '" cy="' + (190 + (i % 3) * 4) + '" r="8" fill="#121216"/><path d="M' + (184 + i * 26) + ' 260v-48q12 -12 24 0v48z" fill="#121216"/></g>').join("") +
      /* party banner */
      '<rect x="12" y="90" width="166" height="22" fill="#111"/><text x="95" y="106" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">HALLOWEEN TO CHRISTMAS</text>',
      sky("tlk3", "#0c0f24", "#3a2a4a"));
  }

  /* 4. "Trademark sound comin' straight out the basement": E-Swift's lab, the drum machine pads lighting up, the turntable spinning, crates stacked, a bare bulb swinging */
  function tlklab() {
    return svg(
      '<rect width="400" height="260" fill="#1b1612"/>' + Array.from({ length: 8 }, (_, r) => Array.from({ length: 10 }, (_, c) => '<rect x="' + (c * 42 + (r % 2) * 21 - 10) + '" y="' + (r * 18) + '" width="40" height="16" fill="#2a211a"/>').join("")).join("") +
      /* stairs */
      '<path d="M0 40h50v20h20v20h20v20h20v20h20v20" stroke="#4a3a2c" stroke-width="8" fill="none"/>' +
      /* bulb */
      '<path d="M200 0v34" stroke="#222" stroke-width="2"/><circle class="tlk-glow" cx="200" cy="42" r="9" fill="#ffe6a0"/><circle cx="200" cy="42" r="30" fill="#ffe6a0" opacity=".08"/>' +
      /* table */
      '<rect x="80" y="162" width="250" height="10" fill="#5a4030"/><path d="M92 172v80M318 172v80" stroke="#4a3426" stroke-width="8"/>' +
      /* drum machine */
      '<rect x="98" y="120" width="104" height="42" rx="3" fill="#cfcac0" stroke="#7a756c" stroke-width="2"/><rect x="104" y="124" width="40" height="10" fill="#1d2a1d"/><text x="106" y="132" font-family="monospace" font-size="7" fill="#7aff8a">SWIFT</text>' +
      Array.from({ length: 8 }, (_, i) => '<rect class="' + (i % 3 === 0 ? "tlk-glow" : "") + '" style="animation-delay:-' + (i * 0.25).toFixed(2) + 's" x="' + (150 + (i % 4) * 12) + '" y="' + (126 + Math.floor(i / 4) * 16) + '" width="10" height="12" rx="2" fill="' + (i % 3 === 0 ? RED : "#5a5a5e") + '"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<circle cx="' + (110 + i * 6) + '" cy="148" r="2" fill="#333"/>').join("") +
      /* turntable */
      '<rect x="214" y="122" width="100" height="40" rx="3" fill="#2a2a2e" stroke="#555" stroke-width="2"/><g class="tlk-spin"><ellipse cx="252" cy="142" rx="30" ry="14" fill="#0b0b0b"/><ellipse cx="252" cy="142" rx="8" ry="4" fill="' + GOLD + '"/><path d="M234 138q18 -6 36 0" stroke="#333" stroke-width="1" fill="none"/></g><path d="M302 128l-18 18" stroke="#ccc" stroke-width="2.5"/>' +
      /* crates */
      [20, 340].map(x => '<rect x="' + x + '" y="196" width="48" height="40" fill="#7a5a30" stroke="#4a3418" stroke-width="2"/><rect x="' + x + '" y="156" width="48" height="40" fill="#7a5a30" stroke="#4a3418" stroke-width="2"/>' +
        [0, 1, 2, 3].map(i => '<rect x="' + (x + 4 + i * 10) + '" y="146" width="7" height="20" fill="' + [BLUE, GOLD, "#eee", RED][i] + '"/>').join("")).join("") +
      '<rect x="0" y="236" width="400" height="24" fill="#2a221c"/>' +
      tag("BASEMENT", 228, 92, 24, GOLD, -5),
      "");
  }

  /* 5. Lankershim Blvd and Magnolia Blvd in North Hollywood: green street signs, THA LIKS tagged big on the wall, the Verdugo Mountains and their towers behind, palms */
  function tlkcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#tlk5)"/>' +
      '<g class="tlk-cl"><ellipse cx="0" cy="34" rx="34" ry="8" fill="#fff" opacity=".5"/></g><g class="tlk-cl tlk-cl2"><ellipse cx="0" cy="22" rx="26" ry="6" fill="#fff" opacity=".45"/></g>' +
      /* Verdugo Mountains with antenna towers */
      '<path d="M0 112l40 -30l36 14l44 -40l40 22l34 -30l46 34l40 -18l50 30l40 -16l30 12v40h-400z" fill="#8a7a6a"/><path d="M0 120l60 -22l50 12l60 -26l70 22l60 -18l100 24v30h-400z" fill="#6e6252"/>' +
      [118, 125, 194].map((x, i) => '<path d="M' + x + ' ' + [58, 62, 50][i] + 'v-26" stroke="#555" stroke-width="2"/><circle class="tlk-glow" cx="' + x + '" cy="' + ([58, 62, 50][i] - 26) + '" r="2.2" fill="' + RED + '"/>').join("") +
      palm(40, 140, 70, "#2a3a2a") + palm(370, 140, 84, "#2a3a2a") +
      /* stucco wall */
      '<rect x="0" y="134" width="400" height="92" fill="#e2cfa8"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (i * 70 + 30) + ' 134v92" stroke="#d4bf96" stroke-width="2"/>').join("") +
      tag("THA LIKS", 18, 192, 46, GOLD, -6) + tag("LIKWIT CREW", 150, 212, 20, RED, -3) + tag("DAAAM!", 236, 178, 26, BLUE, -5) + tag("THE VALLEY", 22, 216, 15, "#222", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5a5852"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="352" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(262, 98, 128, "Lankershim Blvd") + sign(270, 124, 112, "Magnolia Blvd") +
      '<g class="tlk-sp"><circle cx="190" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="tlk-sp tlk-sp2"><circle cx="196" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("tlk5", "#f0a860", "#f6dcb0"));
  }

  window.SCENES = { tlkstation: tlkstation, tlkstudio: tlkstudio, tlkparty: tlkparty, tlklab: tlklab, tlkcorner: tlkcorner };
})();
