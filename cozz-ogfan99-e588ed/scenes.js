/* cozz scenes (Regions tab: Los Angeles + SoCal; South Central, 65th and Western). CSS classes prefixed cz- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes czflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.cz-flk{animation:czflick 2.6s infinite}.cz-flk2{animation-delay:.9s}' +
    '@keyframes czsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.cz-sway{transform-box:fill-box;transform-origin:50% 100%;animation:czsway 4s ease-in-out infinite}.cz-sw2{animation-delay:-2s}' +
    '@keyframes czball{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.cz-ball{animation:czball 1s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes czswing{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.cz-swing{transform-box:view-box;transform-origin:262px 142px;animation:czswing 2.4s ease-in-out infinite}' +
    '@keyframes czwave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.cz-wave{animation:czwave 3s linear infinite}.cz-wave2{animation-duration:4.4s}' +
    '@keyframes czgull{0%{transform:translate(-40px,0)}100%{transform:translate(440px,-20px)}}.cz-gull{animation:czgull 11s linear infinite}.cz-gull2{animation-delay:-5s}' +
    '@keyframes czglow{0%,100%{opacity:.45}50%{opacity:1}}.cz-glow{animation:czglow 2.2s ease-in-out infinite}.cz-g2{animation-delay:-1.1s}' +
    '@keyframes czspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cz-sp{animation:czspray 1.4s ease-out infinite}.cz-sp2{animation-delay:.45s}' +
    '@keyframes czcar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.cz-car{animation:czcar 6s linear infinite}.cz-car2{animation-delay:-3s;animation-duration:7.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  /* a fan palm: thin trunk + frond burst */
  const palm = (x, base, h, cls) => {
    const top = base - h;
    let fr = "";
    for (let i = 0; i < 9; i++) { const a = (-160 + i * 17.5) * Math.PI / 180, l = 22 + (i % 2) * 6; fr += '<path d="M' + x + ' ' + top + 'q' + (Math.cos(a) * l * .5) + ' ' + (Math.sin(a) * l * .5 - 6) + ' ' + (Math.cos(a) * l) + ' ' + (Math.sin(a) * l + 4) + '" stroke="#1d2a22" stroke-width="3.2" fill="none" stroke-linecap="round"/>'; }
    return '<g class="cz-sway ' + (cls || "") + '"><path d="M' + (x - 2) + ' ' + base + 'q4 -' + (h / 2) + ' 2 -' + h + 'h2q0 ' + (h / 2) + ' 1 ' + h + 'z" fill="#2a2a26"/>' + fr + '</g>';
  };
  const GOLD = "#f2b63c", SKY = "#5fb4e8", RED = "#e4572e", METRO = "#e56b1f";

  /* 1. Metro Local 207 pulling up to the Western Ave / Slauson Ave stop: wide LA avenue, power lines, palms, the white-and-orange bus slides in */
  function czstation() {
    const bus = '<g class="anim-train"><rect x="40" y="128" width="300" height="74" rx="9" fill="#f2f2ef" stroke="#8d949b" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (64 + i * 40) + '" y="140" width="32" height="28" rx="3" fill="#22303b"/>').join("") +
      '<rect x="308" y="138" width="26" height="40" rx="3" fill="#22303b"/><rect x="40" y="176" width="300" height="9" fill="' + METRO + '"/>' +
      '<rect x="262" y="131" width="66" height="10" rx="2" fill="#111"/><text x="295" y="139" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">207 WESTERN</text>' +
      '<circle cx="92" cy="204" r="14" fill="#1b1b1b"/><circle cx="92" cy="204" r="6" fill="#9a9a9a"/><circle cx="288" cy="204" r="14" fill="#1b1b1b"/><circle cx="288" cy="204" r="6" fill="#9a9a9a"/>' +
      '<circle cx="336" cy="190" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cz1)"/>' +
      '<circle cx="320" cy="58" r="22" fill="#ffd38a" opacity=".85"/>' +
      '<g fill="#3a3550"><rect x="0" y="100" width="70" height="34"/><rect x="74" y="92" width="58" height="42"/><rect x="250" y="96" width="70" height="38"/><rect x="324" y="104" width="76" height="30"/></g>' +
      palm(150, 134, 92) + palm(214, 134, 78, "cz-sw2") + palm(372, 134, 104) +
      '<path d="M0 46q100 14 200 4t200 6M0 54q100 14 200 4t200 6" stroke="#222" stroke-width="1.2" fill="none"/><rect x="236" y="30" width="5" height="104" fill="#5a4a3a"/><rect x="226" y="40" width="26" height="4" fill="#5a4a3a"/>' +
      '<rect x="0" y="134" width="400" height="10" fill="#bdb6a8"/><rect x="0" y="144" width="400" height="116" fill="#4b4b4f"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (i * 90 + 10) + '" y="236" width="50" height="5" fill="#f1d36b"/>').join("") +
      bus +
      '<rect x="18" y="86" width="5" height="112" fill="#555"/><rect x="2" y="66" width="38" height="26" rx="3" fill="#111"/><rect x="6" y="70" width="30" height="18" rx="2" fill="' + METRO + '"/><text x="21" y="84" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">207</text>' +
      '<rect x="104" y="12" width="192" height="34" rx="4" fill="#111" stroke="#333"/><text x="200" y="35" text-anchor="middle" ' + font + ' font-size="17" fill="#fff" letter-spacing="1">WESTERN / SLAUSON</text>',
      sky("cz1", "#2c3a78", "#f39a6b"));
  }

  /* 2. Van Ness Rec Center ("at VanNess, at the park"): the low tan rec building, the outdoor court with a ball bouncing, swings, palms */
  function czpark() {
    return svg(
      '<rect width="400" height="260" fill="url(#cz2)"/>' +
      palm(30, 150, 110) + palm(370, 150, 96, "cz-sw2") +
      '<rect x="60" y="94" width="210" height="56" fill="#d8c39a" stroke="#a48c62" stroke-width="2"/><rect x="56" y="88" width="218" height="8" fill="#8a6d45"/>' +
      [80, 120, 200, 240].map(x => '<rect x="' + x + '" y="108" width="24" height="18" fill="#3c5566"/>').join("") +
      '<rect x="150" y="112" width="30" height="38" fill="#6b4f33"/>' +
      '<rect x="86" y="70" width="160" height="16" rx="2" fill="#f4f1e6" stroke="#5b6b3a" stroke-width="1.5"/><text x="166" y="82" text-anchor="middle" ' + font + ' font-size="9.5" fill="#2f4a1e">VAN NESS RECREATION CENTER</text>' +
      '<rect x="0" y="150" width="400" height="110" fill="#5c9a3e"/>' +
      '<rect x="20" y="176" width="190" height="78" fill="#3e6d8f" stroke="#fff" stroke-width="2"/><path d="M115 176v78" stroke="#fff" stroke-width="2"/><circle cx="115" cy="215" r="14" stroke="#fff" stroke-width="2" fill="none"/>' +
      '<rect x="22" y="128" width="5" height="62" fill="#666"/><rect x="8" y="122" width="32" height="20" fill="#fff" stroke="#444"/><path d="M15 144h18" stroke="' + RED + '" stroke-width="3"/>' +
      '<g class="cz-ball"><circle cx="164" cy="200" r="7" fill="#e07a2c" stroke="#5a2d0c" stroke-width="1.2"/><path d="M157 200h14M164 193v14" stroke="#5a2d0c" stroke-width="1"/></g>' +
      '<path d="M236 136l26 -2 26 2v60" stroke="#c03a2b" stroke-width="4" fill="none"/><path d="M236 136v60" stroke="#c03a2b" stroke-width="4"/><path d="M232 136h60" stroke="#c03a2b" stroke-width="4"/>' +
      '<g class="cz-swing"><path d="M256 142v38M268 142v38" stroke="#333" stroke-width="1.5"/><rect x="252" y="178" width="20" height="5" fill="' + GOLD + '"/></g>' +
      '<g fill="#4f8a34"><circle cx="330" cy="168" r="16"/><circle cx="350" cy="174" r="12"/><circle cx="312" cy="176" r="10"/></g>',
      sky("cz2", "#4f9be0", "#d9ecf7"));
  }

  /* 3. Mira Costa High in Manhattan Beach, where he finished high school: cream stucco wings on the hill, the Pacific behind, gulls overhead */
  function czschool() {
    return svg(
      '<rect width="400" height="260" fill="url(#cz3)"/>' +
      '<rect x="0" y="92" width="400" height="44" fill="#2f7fb5"/><g class="cz-wave"><path d="M0 104q10 -5 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#bfe3f5" stroke-width="2" fill="none"/></g>' +
      '<g class="cz-wave cz-wave2"><path d="M0 120q10 -5 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#d8f0fb" stroke-width="2" fill="none" opacity=".8"/></g>' +
      '<g class="cz-gull"><path d="M20 40q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="cz-gull cz-gull2"><path d="M20 62q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="1.6" fill="none"/></g>' +
      '<path d="M0 136q120 -18 240 -6t160 4v126H0z" fill="#c9b48a"/>' +
      '<rect x="40" y="128" width="320" height="70" fill="#efe4cc" stroke="#b9a57f" stroke-width="2"/><rect x="34" y="122" width="332" height="8" fill="#8f7b5a"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (54 + i * 34) + '" y="140" width="22" height="22" fill="#4a6f8a"/>').join("") +
      '<rect x="182" y="166" width="36" height="32" fill="#5b4632"/>' +
      '<rect x="120" y="204" width="160" height="26" rx="3" fill="#f8f6ef" stroke="#2a3f73" stroke-width="2.5"/><text x="200" y="222" text-anchor="middle" ' + font + ' font-size="13" fill="#2a3f73" letter-spacing="1">MIRA COSTA HIGH</text>' +
      '<rect x="138" y="230" width="6" height="16" fill="#777"/><rect x="256" y="230" width="6" height="16" fill="#777"/>' +
      palm(18, 200, 100) + palm(386, 204, 90, "cz-sw2"),
      sky("cz3", "#7cc3ec", "#e8f5fb"));
  }

  /* 4. Manhattan Beach Pier at sunset: the long pier, blue rails, the white octagonal Roundhouse with its red Spanish-tile roof at the end, waves rolling */
  function czpier() {
    return svg(
      '<rect width="400" height="260" fill="url(#cz4)"/>' +
      '<circle cx="90" cy="120" r="26" fill="#ffcf6b" class="cz-glow"/>' +
      '<rect x="0" y="130" width="400" height="130" fill="#235a86"/><ellipse cx="90" cy="150" rx="26" ry="16" fill="#f6b25a" opacity=".22"/>' +
      '<g class="cz-wave"><path d="M0 214q10 -6 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#e8f6ff" stroke-width="3" fill="none"/></g>' +
      '<g class="cz-wave cz-wave2"><path d="M0 236q10 -6 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#cfe9f7" stroke-width="3" fill="none"/></g>' +
      '<path d="M400 196L124 148H112v6l288 54z" fill="#bfae94"/>' +
      Array.from({ length: 12 }, (_, i) => { const x = 150 + i * 22; const y = 152 + i * 4.2; return '<rect x="' + x + '" y="' + y + '" width="3" height="' + (40 + i * 2) + '" fill="#5a4b3a"/>'; }).join("") +
      '<path d="M400 186L118 136" stroke="#2f6fb3" stroke-width="3"/><path d="M400 192L118 141" stroke="#2f6fb3" stroke-width="1.5"/>' +
      [190, 260, 330].map(x => { const y = 142 + (x - 150) * .176; return '<rect x="' + x + '" y="' + (y - 26) + '" width="2.5" height="26" fill="#2f6fb3"/><circle cx="' + (x + 1) + '" cy="' + (y - 28) + '" r="3" fill="#fff4c2" class="cz-glow cz-g2"/>'; }).join("") +
      '<g transform="translate(100 118)"><path d="M6 34V12h36v22z" fill="#f6f3ea" stroke="#9c9486" stroke-width="1.5"/><path d="M14 34V12M24 34V12M34 34V12" stroke="#d8d2c4" stroke-width="1"/>' +
      '<path d="M0 13l10 -11h28l10 11z" fill="#c0502f" stroke="#7d2f18" stroke-width="1.5"/><path d="M4 9h40M8 5h32" stroke="#8f3a20" stroke-width="1"/>' +
      '<rect x="20" y="22" width="8" height="12" fill="#3d5a7a"/><rect x="10" y="18" width="6" height="6" fill="#3d5a7a"/><rect x="32" y="18" width="6" height="6" fill="#3d5a7a"/></g>',
      sky("cz4", "#2f2a5c", "#f19a62"));
  }

  /* 5. W 65th St and S Western Ave: green street signs, a stucco wall with COZZ tagged, the downtown LA skyline far behind */
  function czcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#cz5)"/>' +
      '<g fill="#2b2f4a"><rect x="150" y="56" width="16" height="64"/><rect x="170" y="40" width="20" height="80"/><path d="M196 120V30l10 -10 10 10v90z"/><rect x="222" y="50" width="18" height="70"/><rect x="244" y="64" width="14" height="56"/><rect x="262" y="72" width="22" height="48"/></g>' +
      '<g fill="#ffe7a8"><rect class="cz-glow" x="174" y="50" width="3" height="3"/><rect class="cz-glow cz-g2" x="202" y="44" width="3" height="3"/><rect class="cz-glow" x="226" y="62" width="3" height="3"/><rect class="cz-glow cz-g2" x="182" y="70" width="3" height="3"/></g>' +
      palm(120, 124, 80) + palm(300, 124, 92, "cz-sw2") +
      '<rect x="0" y="120" width="400" height="104" fill="#d9c6a5"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (132 + i * 16) + 'h400" stroke="#c9b48f" stroke-width="1"/>').join("") +
      tag("COZZ", 22, 196, 66, SKY, -6) + tag("CODY MACC", 180, 168, 21, GOLD, -4) + tag("65TH", 196, 210, 30, RED, -3) + tag("COZZ &amp; EFFECT", 26, 216, 15, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#4d4d50"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="cz-car"><rect x="0" y="236" width="70" height="16" rx="5" fill="#7a2230"/><rect x="12" y="230" width="40" height="10" rx="4" fill="#5a1822"/><circle cx="14" cy="253" r="5" fill="#111"/><circle cx="56" cy="253" r="5" fill="#111"/></g>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(296, 98, 104, "S Western Ave") + sign(304, 124, 88, "W 65th St") +
      '<g class="cz-sp"><circle cx="150" cy="160" r="3" fill="' + SKY + '" opacity=".7"/></g><g class="cz-sp cz-sp2"><circle cx="156" cy="154" r="2" fill="' + SKY + '" opacity=".6"/></g>',
      sky("cz5", "#1b1f45", "#e0805a"));
  }

  window.SCENES = { czstation: czstation, czpark: czpark, czschool: czschool, czpier: czpier, czcorner: czcorner };
})();
