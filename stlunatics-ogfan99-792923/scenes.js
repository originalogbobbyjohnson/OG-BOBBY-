/* stlunatics scenes (Regions tab: St. Louis + Ohio; U-City / North St. Louis). CSS classes prefixed sl- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes slflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.sl-flk{animation:slflick 2.4s infinite}.sl-flk2{animation-delay:.8s}' +
    '@keyframes slglow{0%,100%{opacity:.45}50%{opacity:1}}.sl-glow{animation:slglow 2.2s ease-in-out infinite}.sl-g2{animation-delay:-1.1s}' +
    '@keyframes slswing{0%,100%{transform:rotate(-7deg)}50%{transform:rotate(7deg)}}.sl-sw{transform-box:fill-box;transform-origin:50% 0%;animation:slswing 2.6s ease-in-out infinite}' +
    '@keyframes slpeek{0%,60%,100%{transform:translateX(0)}70%,90%{transform:translateX(-9px)}}.sl-pk{animation:slpeek 4s ease-in-out infinite}' +
    '@keyframes slbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(46px)}}.sl-ball{animation:slbounce .9s cubic-bezier(.5,0,.5,1) infinite}' +
    '@keyframes slnet{0%,100%{transform:skewX(0)}50%{transform:skewX(6deg)}}.sl-net{transform-box:fill-box;transform-origin:50% 0%;animation:slnet 1.8s ease-in-out infinite}' +
    '@keyframes slchase{0%{stroke-dashoffset:0}100%{stroke-dashoffset:-12}}.sl-ch{animation:slchase .6s linear infinite}' +
    '@keyframes slbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.sl-bm{transform-box:fill-box;transform-origin:50% 100%;animation:slbeam 3.6s ease-in-out infinite}.sl-bm2{animation-delay:-1.8s}' +
    '@keyframes slspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sl-sp{animation:slspray 1.4s ease-out infinite}.sl-sp2{animation-delay:.45s}' +
    '@keyframes slfly{0%{transform:translate(0,0)}100%{transform:translate(-430px,-20px)}}.sl-fl{animation:slfly 11s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "sl-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const BLUE = "#5fb4ff", GOLD = "#f2c14e", RED = "#d9262e", NAVY = "#1f4e79";
  const tree = (x, y, s, c) => '<rect x="' + (x - 3 * s) + '" y="' + (y - 4 * s) + '" width="' + (6 * s) + '" height="' + (30 * s) + '" fill="#5a3e2a"/><circle cx="' + x + '" cy="' + (y - 14 * s) + '" r="' + (20 * s) + '" fill="' + c + '"/><circle cx="' + (x - 14 * s) + '" cy="' + (y - 4 * s) + '" r="' + (13 * s) + '" fill="' + c + '"/><circle cx="' + (x + 14 * s) + '" cy="' + (y - 4 * s) + '" r="' + (13 * s) + '" fill="' + c + '"/>';

  /* 1. Wellston on the MetroLink Red Line, one stop past the Delmar Loop: open-air at-grade side platform off Plymouth Ave, the canopy, the black station sign with the red Red Line bullet,
        the little bronze animal figures of the station art, the white light-rail car with its red and blue bands sliding in */
  function slstation() {
    const car = (x) => '<rect x="' + x + '" y="112" width="160" height="62" rx="8" fill="#eef0f2" stroke="#8a9098" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + 12 + i * 29) + '" y="122" width="22" height="22" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="' + x + '" y="150" width="160" height="6" fill="' + RED + '"/><rect x="' + x + '" y="158" width="160" height="4" fill="' + NAVY + '"/>';
    const tr = '<g class="anim-train">' + car(20) + car(184) + '<rect x="330" y="116" width="16" height="56" rx="5" fill="#cfd3d8"/><circle cx="340" cy="164" r="3.5" fill="#fff6c2"/>' +
      '<path d="M100 112v-14l26 -10M262 112v-14l26 -10" stroke="#3a3e46" stroke-width="2" fill="none"/></g>';
    const animal = (x, k) => k === 0
      ? '<g fill="#a0683a" stroke="#5e3a1c" stroke-width="1"><ellipse cx="' + x + '" cy="206" rx="10" ry="6"/><circle cx="' + (x + 10) + '" cy="200" r="4.5"/><path d="M' + (x - 6) + ' 211v8M' + (x + 6) + ' 211v8" stroke-width="2.5"/><path d="M' + (x + 12) + ' 196l3 -5" stroke-width="2"/></g>'
      : '<g fill="#a0683a" stroke="#5e3a1c" stroke-width="1"><ellipse cx="' + x + '" cy="208" rx="7" ry="9"/><circle cx="' + x + '" cy="195" r="5"/><path d="M' + (x - 3) + ' 191l-2 -6M' + (x + 3) + ' 191l2 -6" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sl1)"/>' +
      '<g fill="#9fb3c4" opacity=".7"><rect x="0" y="70" width="60" height="36"/><rect x="66" y="80" width="44" height="26"/><rect x="290" y="74" width="50" height="32"/><rect x="346" y="64" width="54" height="42"/></g>' +
      tree(150, 96, 0.7, "#5e8a3a") + tree(240, 92, 0.8, "#4f7a32") +
      '<path d="M0 98h400" stroke="#4a4e56" stroke-width="2"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 2) + '" y="74" width="4" height="40" fill="#4a4e56"/><path d="M' + (x - 14) + ' 76h28" stroke="#4a4e56" stroke-width="2"/>').join("") +
      '<rect x="0" y="174" width="400" height="6" fill="#55585e"/><rect x="0" y="178" width="400" height="3" fill="#8a8e94"/>' +
      tr +
      '<rect x="0" y="184" width="400" height="6" fill="#f2c200"/><rect x="0" y="190" width="400" height="70" fill="#b8b4aa"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 190l-10 70" stroke="#a8a49a" stroke-width="1"/>').join("") +
      /* canopy */
      '<rect x="40" y="16" width="320" height="10" rx="2" fill="#3d4a56"/><rect x="40" y="26" width="320" height="4" fill="' + RED + '"/>' + [60, 340].map(x => '<rect x="' + (x - 4) + '" y="30" width="8" height="160" fill="#3d4a56"/>').join("") +
      '<rect x="88" y="38" width="224" height="34" rx="3" fill="#111"/><text x="102" y="61" ' + font + ' font-size="17" fill="#fff">Wellston</text>' + badge(254, 55, "RED", RED) +
      animal(120, 0) + animal(150, 1) + animal(286, 0) +
      '<rect x="190" y="212" width="60" height="5" rx="2.5" fill="#fff6c2" opacity=".5" class="sl-flk"/>',
      sky("sl1", "#7fb6e6", "#f3e3c6"));
  }

  /* 2. "Back porches made for hide and go seek": a North Side block of red-brick two-family flats with white wooden porches on a summer evening,
        a porch swing going, a kid's silhouette peeking from behind a post, string lights */
  function slporch() {
    const flat = (x, c, lit) => '<rect x="' + x + '" y="40" width="124" height="150" fill="' + c + '"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + x + ' ' + (52 + i * 17) + 'h124" stroke="#00000022" stroke-width="1"/>').join("") +
      '<rect x="' + (x - 4) + '" y="34" width="132" height="8" fill="#e8e0cc"/>' +
      [x + 16, x + 72].map((wx, i) => '<rect x="' + wx + '" y="54" width="36" height="34" fill="' + (lit && i ? "#ffd98a" : "#2a3442") + '" stroke="#e8e0cc" stroke-width="3"/>').join("") +
      '<rect x="' + (x - 6) + '" y="112" width="136" height="8" fill="#f2efe6"/><rect x="' + (x - 6) + '" y="176" width="136" height="6" fill="#f2efe6"/>' +
      [x - 2, x + 40, x + 82, x + 122].map(px => '<rect x="' + px + '" y="120" width="5" height="58" fill="#f2efe6"/>').join("") +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (x + 2 + i * 9) + '" y="160" width="3" height="16" fill="#e8e4da"/>').join("") +
      '<rect x="' + (x - 6) + '" y="156" width="136" height="5" fill="#f2efe6"/>' +
      '<rect x="' + (x + 48) + '" y="128" width="28" height="48" fill="#6a3a24"/><rect x="' + (x + 54) + '" y="134" width="16" height="12" fill="' + (lit ? "#ffd98a" : "#2a3442") + '"/>';
    const bulbs = Array.from({ length: 13 }, (_, i) => { const x = 16 + i * 30; return '<circle class="sl-glow' + (i % 2 ? " sl-g2" : "") + '" cx="' + x + '" cy="' + (128 + Math.sin(i * 1.1) * 4) + '" r="3" fill="' + [GOLD, "#ff8a5c", BLUE][i % 3] + '"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sl2)"/>' + stars(10) +
      '<circle cx="330" cy="30" r="14" fill="#fff3c8" opacity=".9"/>' +
      flat(8, "#9a4632", true) + flat(140, "#8a3e2c", false) + flat(272, "#a5503a", true) +
      '<path d="M0 126q100 10 200 0t200 0" stroke="#2a2a2a" stroke-width="1" fill="none"/>' + bulbs +
      /* porch swing on the middle flat */
      '<g class="sl-sw"><path d="M150 120v22M178 120v22" stroke="#444" stroke-width="1.5"/><rect x="146" y="142" width="36" height="6" rx="2" fill="#5fb4ff"/><rect x="146" y="132" width="36" height="4" rx="2" fill="#5fb4ff"/></g>' +
      /* kid peeking (silhouette, no face) */
      '<g class="sl-pk"><circle cx="300" cy="140" r="7" fill="#1b1410"/><rect x="295" y="146" width="10" height="20" rx="4" fill="#1b1410"/></g><rect x="294" y="120" width="6" height="58" fill="#f2efe6"/>' +
      '<rect x="0" y="190" width="400" height="16" fill="#9a968c"/><rect x="0" y="206" width="400" height="54" fill="#3a3a40"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2.5" stroke-dasharray="18 14"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (20 + i * 66) + '" y="182" width="24" height="8" fill="#e8e0cc"/>').join(""),
      sky("sl2", "#1b2446", "#d9826a"));
  }

  /* 3. Heman Park in U-City (Olive Blvd and Pennsylvania Ave): the paved outdoor court, the hoop and chain net, a ball bouncing, a "2:40" on the shot clock
        ("2 minutes 40 seconds to go"), the park's trees and light poles */
  function slcourt() {
    return svg(
      '<rect width="400" height="260" fill="url(#sl3)"/>' +
      tree(30, 110, 1.1, "#3f6e2e") + tree(110, 104, 0.9, "#4f7f36") + tree(300, 106, 1, "#3f6e2e") + tree(375, 112, 1.1, "#4a7a34") +
      '<rect x="0" y="124" width="400" height="12" fill="#6aa04a"/>' +
      Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 21) + ' 96v40" stroke="#5c6670" stroke-width="1.5"/>').join("") + '<path d="M0 96h400M0 116h400" stroke="#5c6670" stroke-width="2"/>' +
      '<path d="M0 136h400v124h-400z" fill="#2f6f8f"/><path d="M30 136h340l30 124h-400z" fill="#c2533a"/>' +
      '<path d="M200 136v124M60 136l-40 124M340 136l40 124" stroke="#fff" stroke-width="2.5" fill="none" opacity=".9"/>' +
      '<path d="M140 136q60 70 120 0" stroke="#fff" stroke-width="2.5" fill="none"/><path d="M170 136v40h60v-40" stroke="#fff" stroke-width="2.5" fill="none"/>' +
      '<ellipse cx="200" cy="230" rx="40" ry="10" stroke="#fff" stroke-width="2.5" fill="none"/>' +
      /* hoop */
      '<rect x="196" y="40" width="8" height="96" fill="#3a3e46"/><rect x="160" y="22" width="80" height="50" rx="3" fill="#f2f2f0" stroke="#3a3e46" stroke-width="2"/><rect x="186" y="44" width="28" height="20" fill="none" stroke="' + RED + '" stroke-width="2.5"/>' +
      '<ellipse cx="200" cy="72" rx="16" ry="4" fill="none" stroke="#f26a1b" stroke-width="3"/><g class="sl-net"><path d="M185 73l5 16M192 74l3 15M200 75v15M208 74l-3 15M215 73l-5 16M188 82h24" stroke="#cfd3d8" stroke-width="1.3"/></g>' +
      /* shot clock */
      '<rect x="300" y="34" width="70" height="36" rx="4" fill="#111" stroke="#555" stroke-width="2"/><text x="335" y="61" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="22" fill="' + RED + '" class="sl-flk">2:40</text><rect x="332" y="70" width="6" height="66" fill="#3a3e46"/>' +
      '<g class="sl-ball"><circle cx="248" cy="162" r="11" fill="#e8742a" stroke="#6a2e0a" stroke-width="1.5"/><path d="M237 162h22M248 151v22M240 154q8 8 0 16M256 154q-8 8 0 16" stroke="#6a2e0a" stroke-width="1.2" fill="none"/></g>' +
      '<ellipse cx="248" cy="221" rx="10" ry="3" fill="#00000044"/>',
      sky("sl3", "#79b8ea", "#eaf2f6"));
  }

  /* 4. The Fabulous Fox on N Grand Blvd in Grand Center, where the 'Tics do a show: the ornate cream terracotta facade, the big arched window, the marquee with chasing bulbs,
        the tall vertical blade sign lit, spotlights sweeping the night */
  function slfox() {
    return svg(
      '<rect width="400" height="260" fill="url(#sl4)"/>' + stars(16) +
      '<g opacity=".22"><path class="sl-bm" d="M90 250l-12 -240h24z" fill="#fff6c2"/><path class="sl-bm sl-bm2" d="M310 250l-12 -240h24z" fill="#fff6c2"/></g>' +
      '<rect x="0" y="120" width="70" height="110" fill="#2a2440"/><rect x="330" y="110" width="70" height="120" fill="#2a2440"/>' +
      /* facade */
      '<rect x="80" y="40" width="240" height="180" fill="#e3cfa4"/><rect x="74" y="34" width="252" height="10" fill="#c9ae7c"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M' + (82 + i * 20) + ' 34l10 -10l10 10z" fill="#c9ae7c"/>').join("") +
      '<path d="M150 150v-60q50 -50 100 0v60z" fill="#7a2f2a"/><path d="M160 150v-56q40 -38 80 0v56z" fill="#1d1a2e"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (172 + i * 14) + ' 150v-' + (52 - Math.abs(i - 2) * 6) + '" stroke="#c9ae7c" stroke-width="2"/>').join("") +
      '<circle cx="200" cy="96" r="10" fill="#f2c14e" class="sl-glow"/>' +
      [96, 280].map(x => '<rect x="' + x + '" y="60" width="24" height="90" fill="#c9ae7c"/><path d="M' + x + ' 60q12 -14 24 0" fill="#b8996a"/>' +
        Array.from({ length: 4 }, (_, j) => '<circle cx="' + (x + 12) + '" cy="' + (76 + j * 20) + '" r="4" fill="#7a2f2a"/>').join("")).join("") +
      /* blade sign (lit, no lettering) */
      '<rect x="316" y="30" width="20" height="120" rx="3" fill="#7a2f2a" stroke="#f2c14e" stroke-width="2"/>' +
      '<path class="sl-ch" d="M321 36v108M331 36v108" stroke="#fff3a8" stroke-width="3" stroke-dasharray="3 3"/>' +
      /* marquee */
      '<path d="M70 156h260l-14 24h-232z" fill="#2a1c14"/><rect x="88" y="160" width="224" height="16" fill="#f8f0dc"/>' +
      '<text x="200" y="173" text-anchor="middle" ' + font + ' font-size="12" fill="#1a1a1a">ST. LUNATICS TONIGHT</text>' +
      '<path class="sl-ch" d="M72 157h256" stroke="#fff3a8" stroke-width="3" stroke-dasharray="3 3"/><path class="sl-ch" d="M86 179h228" stroke="#fff3a8" stroke-width="3" stroke-dasharray="3 3"/>' +
      [110, 170, 230, 290].map(x => '<rect x="' + (x - 16) + '" y="186" width="32" height="34" fill="#5a2620"/><rect x="' + (x - 12) + '" y="190" width="24" height="30" fill="#ffd98a" opacity=".85"/>').join("") +
      '<rect x="0" y="220" width="400" height="40" fill="#3a3a42"/><rect x="0" y="218" width="400" height="4" fill="#8a8680"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle cx="' + (20 + i * 34) + '" cy="' + (236 + (i % 2) * 6) + '" r="5" fill="#0d0b16"/>').join(""),
      sky("sl4", "#0b0f2a", "#5a3a6a"));
  }

  /* 5. Olive Blvd and Pennsylvania Ave in U-City by Heman Park: green signs, ST. LUNATICS tagged big on the brick wall,
        the Cathedral Basilica's green copper domes on the skyline behind, a jet crossing toward Lambert */
  function slcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sl5)"/>' + stars(14) +
      '<g class="sl-fl"><path d="M420 30l14 -3l2 2l-12 4z" fill="#cfd3d8"/><circle class="sl-flk" cx="421" cy="31" r="1.5" fill="' + RED + '"/></g>' +
      /* Cathedral Basilica: pale granite body, green copper central dome + two towers */
      '<rect x="120" y="86" width="150" height="50" fill="#b9b2a2"/><rect x="128" y="62" width="22" height="74" fill="#b0a998"/><rect x="240" y="62" width="22" height="74" fill="#b0a998"/>' +
      '<path d="M126 62q13 -22 26 0z" fill="#4f9a7e"/><path d="M238 62q13 -22 26 0z" fill="#4f9a7e"/><rect x="138" y="34" width="2" height="8" fill="#4f9a7e"/><rect x="250" y="34" width="2" height="8" fill="#4f9a7e"/>' +
      '<rect x="168" y="66" width="54" height="22" fill="#b0a998"/><path d="M164 68q31 -50 62 0z" fill="#5aa88a"/><rect x="193" y="16" width="4" height="10" fill="#5aa88a"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (172 + i * 9) + ' 80v-8q2.5 -4 5 0v8z" fill="#2a3442"/>').join("") +
      '<g fill="#22263a"><rect x="0" y="92" width="96" height="44"/><rect x="290" y="88" width="50" height="48"/><rect x="346" y="100" width="54" height="36"/></g>' +
      '<rect x="0" y="132" width="400" height="92" fill="#7a4232"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#6a3628" stroke-width="1"/>').join("") +
      tag("SHOW-ME STATE", 22, 154, 14, RED, -3) + tag("ST. LUNATICS", 16, 192, 38, BLUE, -5) + tag("THE 'TICS", 30, 216, 18, GOLD, -3) + tag("MIDWEST SWANG", 150, 216, 16, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(296, 98, 100, "Olive Blvd") + sign(282, 124, 114, "Pennsylvania Av") +
      '<g class="sl-sp"><circle cx="270" cy="176" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="sl-sp sl-sp2"><circle cx="276" cy="170" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("sl5", "#121a36", "#c86a4a"));
  }

  window.SCENES = { slstation: slstation, slporch: slporch, slcourt: slcourt, slfox: slfox, slcorner: slcorner };
})();
