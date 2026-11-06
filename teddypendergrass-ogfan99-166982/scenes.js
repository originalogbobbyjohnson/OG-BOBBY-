/* teddypendergrass scenes (Regions tab: Philadelphia; Avenue of the Arts, Teddy Pendergrass Way = the 400 block of S Broad St). CSS classes prefixed tp- (the page's own anim-train is kept).
   1 Walnut-Locust on SEPTA's Broad Street Line: underground platform, orange line stripe, a silver BSL train sliding in.
   2 Sciolla's Supper Club showroom (Northeast Philly), where his mother worked and he taught himself drums at 13: candlelit tables, a little stage, a drum kit, the spotlight swinging.
   3 Sigma Sound Studios, 212 N 12th St, where the Philly Sound records were cut: the control room, tape reels spinning, VU needles bouncing, the vocal booth through the glass.
   4 The Shubert Theatre on S Broad (now the Miller), where he cut his live record in '78: the marquee with chasing bulbs, cream terra-cotta front, roses on the sidewalk.
   5 S Broad St and Lombard St, the south end of Teddy Pendergrass Way: green signs + the brown honorary sign, TEDDY tagged on the brick, City Hall's tower up Broad behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tpglow{0%,100%{opacity:.45}50%{opacity:1}}.tp-glow{animation:tpglow 2.4s ease-in-out infinite}.tp-glow2{animation-delay:-1.2s}' +
    '@keyframes tpflick{0%,100%{transform:scaleY(1);opacity:.9}30%{transform:scaleY(1.25);opacity:1}60%{transform:scaleY(.85);opacity:.8}}.tp-flick{transform-box:fill-box;transform-origin:50% 100%;animation:tpflick .9s ease-in-out infinite}.tp-f2{animation-delay:-.3s}.tp-f3{animation-delay:-.6s}' +
    '@keyframes tpspot{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(10deg)}}.tp-spot{transform-box:view-box;transform-origin:200px 0px;animation:tpspot 4s ease-in-out infinite}' +
    '@keyframes tpcym{0%,100%{transform:rotate(0)}20%{transform:rotate(-8deg)}40%{transform:rotate(5deg)}}.tp-cym{transform-box:fill-box;transform-origin:50% 50%;animation:tpcym 1s ease-in-out infinite}' +
    '@keyframes tpspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.tp-spin{transform-box:fill-box;transform-origin:50% 50%;animation:tpspin 2.4s linear infinite}' +
    '@keyframes tpvu{0%,100%{transform:rotate(-30deg)}35%{transform:rotate(18deg)}60%{transform:rotate(-8deg)}80%{transform:rotate(26deg)}}.tp-vu{transform-box:fill-box;transform-origin:50% 100%;animation:tpvu 1.3s ease-in-out infinite}.tp-vu2{animation-delay:-.5s}' +
    '@keyframes tpbulb{0%,100%{opacity:1}50%{opacity:.25}}.tp-b{animation:tpbulb .8s steps(1) infinite}.tp-b2{animation-delay:-.4s}' +
    '@keyframes tpnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.tp-note{animation:tpnote 3.2s linear infinite}.tp-n2{animation-delay:-1.1s}.tp-n3{animation-delay:-2.2s}' +
    '@keyframes tpcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.tp-car{animation:tpcar 7s linear infinite}' +
    '@keyframes tpspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tp-sp{animation:tpspray 1.4s ease-out infinite}.tp-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt, col) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="' + (col || "#0f6b3a") + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (txt.length > 16 ? 9.5 : 12) + '" fill="#fff">' + txt + '</text>';
  const GOLD = "#f3c969", ROSE = "#c2304a", LAV = "#b79be0", BSL = "#f58220";
  const rose = (x, y) => '<path d="M' + x + ' ' + y + 'l10 -3" stroke="#3f7a3a" stroke-width="1.5"/><circle cx="' + (x + 11) + '" cy="' + (y - 3.5) + '" r="3" fill="' + ROSE + '"/><circle cx="' + (x + 11) + '" cy="' + (y - 3.5) + '" r="1.2" fill="#8a1a2e"/>';

  /* 1. Walnut-Locust, Broad Street Line (underground) */
  function tpstation() {
    const train = '<g class="anim-train"><rect x="20" y="104" width="330" height="86" rx="8" fill="#c9ced4" stroke="#7c838a" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 44) + '" y="116" width="32" height="30" rx="3" fill="#1d2630"/>').join("") +
      '<rect x="20" y="152" width="330" height="8" fill="' + BSL + '"/>' +
      '<rect x="120" y="114" width="34" height="74" fill="#b4bac0" stroke="#7c838a"/><path d="M137 114v74" stroke="#7c838a"/>' +
      '<rect x="252" y="114" width="34" height="74" fill="#b4bac0" stroke="#7c838a"/><path d="M269 114v74" stroke="#7c838a"/>' +
      '<rect x="30" y="106" width="60" height="8" rx="2" fill="#111"/><text x="60" y="112.5" text-anchor="middle" ' + font + ' font-size="6" fill="' + BSL + '">BROAD ST LOCAL</text>' +
      '<circle cx="340" cy="170" r="4" fill="#fff6c2" class="tp-glow"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#2a2a2e"/>' +
      '<rect x="0" y="0" width="400" height="96" fill="#d8d4c8"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (i * 8) + 'h400" stroke="#c4c0b4" stroke-width=".8"/>').join("") +
      Array.from({ length: 25 }, (_, i) => '<path d="M' + (i * 16) + ' 0v96" stroke="#c4c0b4" stroke-width=".8"/>').join("") +
      '<rect x="0" y="64" width="400" height="10" fill="' + BSL + '"/>' +
      '<rect x="0" y="0" width="400" height="12" fill="#3a3a40"/>' + [60, 200, 340].map(x => '<rect class="tp-glow" x="' + (x - 30) + '" y="10" width="60" height="4" fill="#fff8de"/>').join("") +
      '<rect x="80" y="22" width="240" height="34" rx="3" fill="#111" stroke="#555" stroke-width="1.5"/>' + badge(92, 39, "BSL", BSL) +
      '<text x="222" y="45" text-anchor="middle" ' + font + ' font-size="18" fill="#fff">Walnut-Locust</text>' +
      '<rect x="0" y="96" width="400" height="100" fill="#1a1a1e"/>' + train +
      '<rect x="0" y="196" width="400" height="64" fill="#8c8a84"/><rect x="0" y="196" width="400" height="8" fill="#e8d36a"/>' +
      Array.from({ length: 40 }, (_, i) => '<circle cx="' + (5 + i * 10) + '" cy="200" r="1.2" fill="#b8a64a"/>').join("") +
      '<rect x="20" y="216" width="150" height="28" rx="3" fill="#111"/><text x="95" y="234" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">To Teddy Pendergrass Way</text>' +
      '<path d="M176 230h14l-5 -5M190 230l-5 5" stroke="#fff" stroke-width="2" fill="none"/>');
  }

  /* 2. Sciolla's Supper Club showroom */
  function tpsupper() {
    const table = (x, y, cls) => '<ellipse cx="' + x + '" cy="' + y + '" rx="34" ry="9" fill="#f4efe6"/><rect x="' + (x - 34) + '" y="' + y + '" width="68" height="20" fill="#e8e2d6"/><ellipse cx="' + x + '" cy="' + (y + 20) + '" rx="34" ry="5" fill="#d0c8b8"/>' +
      '<rect x="' + (x - 3) + '" y="' + (y - 14) + '" width="6" height="12" rx="1" fill="#c8b48a"/><ellipse class="tp-flick ' + cls + '" cx="' + x + '" cy="' + (y - 17) + '" rx="2.6" ry="5" fill="#ffcf5a"/>' +
      '<circle cx="' + x + '" cy="' + (y - 16) + '" r="10" fill="#ffcf5a" opacity=".18"/>';
    const drum = '<g>' +
      '<rect x="176" y="112" width="48" height="36" rx="18" fill="#7a1a2e" stroke="#e8d8b0" stroke-width="2"/><ellipse cx="200" cy="130" rx="15" ry="15" fill="#f4efe6" stroke="#c8b48a"/><text x="200" y="134" text-anchor="middle" ' + font + ' font-size="9" fill="' + ROSE + '">TP</text>' +
      '<rect x="146" y="110" width="26" height="16" rx="3" fill="#7a1a2e" stroke="#e8d8b0" stroke-width="1.5"/><ellipse cx="159" cy="110" rx="13" ry="3.5" fill="#f4efe6"/>' +
      '<rect x="228" y="116" width="28" height="24" rx="3" fill="#7a1a2e" stroke="#e8d8b0" stroke-width="1.5"/><ellipse cx="242" cy="116" rx="14" ry="3.5" fill="#f4efe6"/>' +
      '<path d="M140 150v-56M262 150v-60" stroke="#bcbcbc" stroke-width="2"/>' +
      '<g class="tp-cym"><ellipse cx="140" cy="94" rx="18" ry="3.5" fill="' + GOLD + '" stroke="#a8862e"/></g><g class="tp-cym tp-f2"><ellipse cx="262" cy="90" rx="20" ry="4" fill="' + GOLD + '" stroke="#a8862e"/></g>' +
      '<path d="M190 100l18 -14M206 104l14 -16" stroke="#e8d0a0" stroke-width="2.5" stroke-linecap="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#1c0a10"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#3a0e1a"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 40 + 20) + ' 0v150" stroke="#2a0812" stroke-width="10"/>').join("") +
      '<rect x="100" y="60" width="200" height="94" fill="#2a1418"/>' +
      '<path d="M100 60h200v14q-25 10 -50 0q-25 10 -50 0q-25 10 -50 0q-25 10 -50 0z" fill="' + ROSE + '"/>' +
      '<path d="M100 60v94h18q-8 -50 4 -94zM300 60v94h-18q8 -50 -4 -94z" fill="#8a1a2e"/>' +
      '<g class="tp-spot"><path d="M200 0L160 154h80z" fill="#fff6c8" opacity=".14"/></g>' +
      drum +
      '<rect x="90" y="150" width="220" height="10" fill="#5a3a20"/><rect x="90" y="148" width="220" height="3" fill="' + GOLD + '"/>' +
      '<rect x="120" y="20" width="160" height="26" rx="4" fill="#120408" stroke="' + GOLD + '" stroke-width="1.5"/><text class="tp-glow" x="200" y="38" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="15" fill="' + GOLD + '">Supper Club</text>' +
      '<rect x="0" y="160" width="400" height="100" fill="#2a0e14"/>' +
      table(60, 190, "") + table(200, 206, "tp-f2") + table(340, 190, "tp-f3") +
      '<g class="tp-note"><text x="300" y="120" font-size="18" fill="' + GOLD + '">&#9834;</text></g><g class="tp-note tp-n2"><text x="84" y="124" font-size="16" fill="' + LAV + '">&#9835;</text></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#e8d0a0">NORTHEAST PHILLY</text>');
  }

  /* 3. Sigma Sound Studios control room, 212 N 12th St */
  function tpsigma() {
    const reel = (x, cls) => '<g class="tp-spin ' + cls + '"><circle cx="' + x + '" cy="70" r="20" fill="#2a2a2a" stroke="#888" stroke-width="2"/><circle cx="' + x + '" cy="70" r="13" fill="#5a3a20"/>' +
      [0, 120, 240].map(a => '<circle cx="' + (x + Math.cos(a * Math.PI / 180) * 8).toFixed(1) + '" cy="' + (70 + Math.sin(a * Math.PI / 180) * 8).toFixed(1) + '" r="3" fill="#2a2a2a"/>').join("") + '<circle cx="' + x + '" cy="70" r="3" fill="#ddd"/></g>';
    const vu = (x, cls) => '<rect x="' + x + '" y="134" width="40" height="26" rx="2" fill="#f2e6b8" stroke="#555"/><path d="M' + (x + 6) + ' 152q14 -14 28 0" fill="none" stroke="#333" stroke-width="1"/><path d="M' + (x + 28) + ' 146l6 6" stroke="' + ROSE + '" stroke-width="1.5"/>' +
      '<rect class="tp-vu ' + cls + '" x="' + (x + 19.3) + '" y="140" width="1.4" height="17" fill="#111"/>';
    let faders = "";
    for (let i = 0; i < 18; i++) { const x = 40 + i * 18, y = 186 + ((i * 37) % 22); faders += '<path d="M' + (x + 4) + ' 180v40" stroke="#1a1a1a" stroke-width="2"/><rect x="' + x + '" y="' + y + '" width="8" height="6" rx="1" fill="' + (i % 6 === 0 ? ROSE : "#ddd") + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="#2a2420"/>' +
      '<rect x="0" y="0" width="400" height="130" fill="#4a3a2e"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="0" width="18" height="130" fill="#523f31"/>').join("") +
      /* glass window into the live room */
      '<rect x="150" y="16" width="230" height="100" rx="4" fill="#3a4a5a" stroke="#1a1a1a" stroke-width="4"/>' +
      '<rect x="154" y="20" width="222" height="92" fill="#4a3426" opacity=".6"/>' +
      '<path d="M250 112v-48" stroke="#999" stroke-width="2"/><rect x="243" y="46" width="14" height="22" rx="7" fill="#c8c8c8" stroke="#666"/><path d="M234 112h32" stroke="#999" stroke-width="2"/>' +
      '<rect x="300" y="64" width="60" height="44" fill="#1a1a1a"/><path d="M304 70h52" stroke="#fff" stroke-width="1"/><path d="M306 76h4M314 76h4M322 76h4M330 76h4M338 76h4M346 76h4" stroke="#fff" stroke-width="5"/>' +
      '<path d="M156 22l60 88" stroke="#fff" stroke-width="3" opacity=".12"/>' +
      '<rect class="tp-glow" x="164" y="26" width="38" height="14" rx="2" fill="' + ROSE + '"/><text x="183" y="36" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">ON AIR</text>' +
      /* tape machine */
      '<rect x="14" y="40" width="120" height="90" rx="4" fill="#cfc8b8" stroke="#555" stroke-width="2"/>' + reel(46, "") + reel(102, "") +
      '<path d="M46 90h56" stroke="#5a3a20" stroke-width="2"/><rect x="60" y="100" width="28" height="10" fill="#444"/>' +
      '<text x="74" y="124" text-anchor="middle" ' + font + ' font-size="7" fill="#333">2-INCH TAPE</text>' +
      /* console */
      '<path d="M0 130h400v130h-400z" fill="#1f1c1a"/><path d="M20 166h360l20 94h-400z" fill="#6a6058"/>' +
      vu(60, "") + vu(110, "tp-vu2") + vu(250, "tp-vu2") + vu(300, "") +
      '<rect x="160" y="134" width="80" height="26" rx="2" fill="#111"/><text x="200" y="146" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">SIGMA SOUND</text><text x="200" y="156" text-anchor="middle" ' + font + ' font-size="7" fill="#ddd">212 N 12TH ST</text>' +
      faders +
      '<g class="tp-note"><text x="210" y="96" font-size="18" fill="' + GOLD + '">&#9834;</text></g><g class="tp-note tp-n3"><text x="330" y="60" font-size="14" fill="' + LAV + '">&#9835;</text></g>');
  }

  /* 4. The Shubert Theatre, S Broad St, live in '78 */
  function tpshubert() {
    let bulbs = "";
    for (let i = 0; i < 26; i++) bulbs += '<circle class="tp-b ' + (i % 2 ? "tp-b2" : "") + '" cx="' + (78 + i * 9.6) + '" cy="118" r="2.4" fill="#fff2b0"/><circle class="tp-b ' + (i % 2 ? "" : "tp-b2") + '" cx="' + (78 + i * 9.6) + '" cy="164" r="2.4" fill="#fff2b0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tp-s4)"/>' +
      /* cream terra-cotta front with tall arched windows */
      '<rect x="60" y="14" width="280" height="196" fill="#e6d8bc"/>' +
      '<rect x="56" y="10" width="288" height="10" fill="#d4c29e"/><rect x="60" y="20" width="280" height="4" fill="#c4b08a"/>' +
      [92, 152, 212, 272].map(x => '<path d="M' + x + ' 104v-56a18 18 0 0 1 36 0v56z" fill="#3a2a3e" stroke="#c4b08a" stroke-width="3"/><path d="M' + (x + 18) + ' 104v-74" stroke="#c4b08a" stroke-width="1.5"/><rect class="tp-glow ' + (x % 120 ? "tp-glow2" : "") + '" x="' + (x + 4) + '" y="60" width="28" height="40" fill="' + GOLD + '" opacity=".25"/>').join("") +
      [66, 130, 190, 250, 316].map(x => '<rect x="' + x + '" y="28" width="12" height="80" fill="#d4c29e"/>').join("") +
      /* marquee */
      '<path d="M66 112h268l14 58h-296z" fill="#2a1418"/>' + bulbs +
      '<rect x="84" y="124" width="232" height="34" fill="#f8f0d8"/>' +
      '<text x="200" y="138" text-anchor="middle" ' + font + ' font-size="11" fill="' + ROSE + '">TEDDY PENDERGRASS</text><text x="200" y="153" text-anchor="middle" ' + font + ' font-size="10" fill="#222">LIVE AT THE SHUBERT &#183; &apos;78</text>' +
      '<rect x="168" y="92" width="64" height="18" fill="#2a1418"/><text x="200" y="105" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="' + GOLD + '">SHUBERT</text>' +
      /* doors */
      '<rect x="100" y="172" width="200" height="38" fill="#4a2a22"/>' + [104, 154, 204, 254].map(x => '<rect x="' + x + '" y="176" width="42" height="34" fill="#8a5a30" stroke="' + GOLD + '"/>').join("") +
      '<rect x="0" y="210" width="400" height="50" fill="#9a948a"/><rect x="0" y="210" width="400" height="3" fill="#c8c2b6"/>' +
      rose(140, 230) + rose(180, 236) + rose(232, 228) + rose(270, 238) + rose(110, 244) +
      '<g class="tp-car"><rect x="0" y="244" width="58" height="12" rx="5" fill="' + LAV + '"/><circle cx="12" cy="256" r="4" fill="#111"/><circle cx="46" cy="256" r="4" fill="#111"/></g>' +
      '<rect x="300" y="226" width="94" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/><text x="347" y="239" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">S Broad St</text>',
      sky("tp-s4", "#1a1030", "#5a2a4a"));
  }

  /* 5. S Broad St & Lombard St, Teddy Pendergrass Way */
  function tpcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#tp-s5)"/>' +
      /* City Hall tower up Broad: cream stone base, clock, dark dome, statue silhouette */
      '<rect x="182" y="62" width="36" height="70" fill="#e4dac4"/><rect x="178" y="58" width="44" height="6" fill="#cfc2a6"/>' +
      '<circle cx="200" cy="82" r="9" fill="#f8f2e0" stroke="#8a7a5a" stroke-width="1.5"/><path d="M200 82v-6M200 82l4 2" stroke="#333" stroke-width="1.2"/>' +
      '<path d="M186 58q0 -18 14 -24q14 6 14 24z" fill="#6a6e6a"/><rect x="194" y="24" width="12" height="12" fill="#6a6e6a"/><path d="M200 24v-10" stroke="#3a3e3a" stroke-width="3"/><circle cx="200" cy="12" r="2.5" fill="#3a3e3a"/>' +
      '<rect x="120" y="100" width="40" height="40" fill="#7a6a80"/><rect x="240" y="92" width="44" height="48" fill="#6a5a72"/><rect x="88" y="112" width="28" height="28" fill="#5a4a62"/><rect x="290" y="108" width="30" height="32" fill="#5a4a62"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect class="tp-glow ' + (i % 2 ? "tp-glow2" : "") + '" x="' + (124 + (i % 4) * 9) + '" y="' + (106 + Math.floor(i / 4) * 12) + '" width="4" height="6" fill="' + GOLD + '"/>').join("") +
      /* brick wall */
      '<rect x="0" y="130" width="400" height="94" fill="#7e3a2c"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#6a2e22" stroke-width="1"/>').join("") +
      '<rect x="0" y="126" width="400" height="6" fill="#4a3a32"/>' +
      tag("TEDDY", 22, 190, 52, GOLD, -6) + tag("TEDDY BEAR", 150, 214, 20, LAV, -4) + tag("TP", 222, 168, 28, "#fff", -3) + tag("LOVE TKO", 20, 216, 18, ROSE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="tp-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + ROSE + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + ROSE + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="356" y="84" width="6" height="140" fill="#2f2f2f"/>' + sign(300, 86, 98, "S Broad St") + sign(312, 112, 86, "Lombard St") + sign(278, 140, 120, "Teddy Pendergrass Way", "#6a3e22") +
      '<g class="tp-sp"><circle cx="150" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="tp-sp tp-sp2"><circle cx="156" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("tp-s5", "#3a1e4a", "#d8846a"));
  }

  window.SCENES = { tpstation: tpstation, tpsupper: tpsupper, tpsigma: tpsigma, tpshubert: tpshubert, tpcorner: tpcorner };
})();
