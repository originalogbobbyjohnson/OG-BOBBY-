/* amine scenes (Regions tab: The Northwest; Woodlawn, Northeast Portland). CSS classes prefixed am- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes amflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.am-flk{animation:amflick 2.6s infinite}.am-flk2{animation-delay:.9s}' +
    '@keyframes amrain{0%{transform:translate(0,-40px)}100%{transform:translate(-14px,280px)}}.am-rn{animation:amrain 1.1s linear infinite}.am-rn2{animation-delay:-.37s}.am-rn3{animation-delay:-.74s}' +
    '@keyframes ambounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-46px)}}.am-ball{animation:ambounce .9s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes amcar{0%{transform:translateX(-200px)}100%{transform:translateX(440px)}}.am-car{animation:amcar 9s linear infinite;animation-delay:-4.5s}' +
    '@keyframes amglow{0%,100%{opacity:.45}50%{opacity:1}}.am-glow{animation:amglow 2.2s ease-in-out infinite}.am-g2{animation-delay:-1.1s}' +
    '@keyframes amsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.am-sw{transform-box:fill-box;transform-origin:50% 0%;animation:amsweep 3.6s ease-in-out infinite}.am-sw2{animation-delay:-1.8s}' +
    '@keyframes amspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.am-sp{animation:amspray 1.4s ease-out infinite}.am-sp2{animation-delay:.45s}' +
    '@keyframes amcloud{0%{transform:translateX(0)}100%{transform:translateX(60px)}}.am-cl{animation:amcloud 14s ease-in-out infinite alternate}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const dot = (x, y, l, c) => '<circle cx="' + x + '" cy="' + y + '" r="9" fill="' + c + '"/><text x="' + x + '" y="' + (y + 4) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + l + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const rain = n => Array.from({ length: n }, (_, i) => '<path class="am-rn' + ["", " am-rn2", " am-rn3"][i % 3] + '" d="M' + ((i * 37) % 420) + ' ' + ((i * 29) % 120) + 'l-3 12" stroke="#cfe3f2" stroke-width="1.2" opacity=".5"/>').join("");
  const YEL = "#ffd23f", RED = "#e63946", BLUE = "#0b4f9c", GRN = "#008852", MRED = "#d81526";

  /* 1. Lloyd Center/NE 11th Ave MAX Station on NE Holladay St: open-air platform with the glass canopy, the black station sign with the Blue, Green and Red line dots, a white MAX train with the blue band sliding in, Portland drizzle */
  function amstation() {
    const tr = '<g class="anim-train"><rect x="20" y="112" width="330" height="70" rx="10" fill="#f2f3f1" stroke="#8d949b" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 50) + '" y="124" width="36" height="26" rx="3" fill="#1b2630"/>').join("") +
      '<rect x="20" y="156" width="330" height="10" fill="' + BLUE + '"/><rect x="20" y="166" width="330" height="3" fill="' + YEL + '"/>' +
      '<path d="M330 114q24 4 22 34v28h-22z" fill="#e3e6e4" stroke="#8d949b" stroke-width="2"/><rect x="334" y="124" width="14" height="22" rx="3" fill="#1b2630"/><circle cx="344" cy="170" r="3.5" fill="#fff6c2"/>' +
      '<path d="M70 112v-14M180 112v-14M290 112v-14" stroke="#555" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#am1)"/>' +
      '<path d="M0 96h400" stroke="#4a4f55" stroke-width="2"/><path d="M0 98h400" stroke="#4a4f55" stroke-width="1"/>' +
      '<g fill="#3f4a55"><rect x="10" y="44" width="60" height="52"/><rect x="80" y="30" width="44" height="66"/><rect x="300" y="38" width="90" height="58"/></g>' +
      '<g fill="#e8d27a" opacity=".55">' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (16 + (i % 4) * 13) + '" y="' + (52 + Math.floor(i / 4) * 14) + '" width="6" height="7"/>').join("") + Array.from({ length: 12 }, (_, i) => '<rect x="' + (308 + (i % 6) * 13) + '" y="' + (46 + Math.floor(i / 6) * 16) + '" width="6" height="8"/>').join("") + '</g>' +
      tr +
      '<rect x="0" y="182" width="400" height="8" fill="#6e6a62"/><rect x="0" y="190" width="400" height="6" fill="#f2c200"/><rect x="0" y="196" width="400" height="64" fill="#9b968c"/>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 3) + '" y="60" width="6" height="136" fill="#33404c"/>').join("") +
      '<path d="M20 60h360l-14 -14h-332z" fill="#b8d4e6" opacity=".55" stroke="#33404c" stroke-width="2"/>' +
      '<rect x="78" y="10" width="244" height="34" rx="3" fill="#111"/><text x="90" y="25" ' + font + ' font-size="11" fill="#fff">Lloyd Center/NE 11th Ave</text><text x="90" y="38" ' + font + ' font-size="8" fill="#bbb">MAX STATION</text>' +
      dot(256, 27, "B", BLUE) + dot(278, 27, "G", GRN) + dot(300, 27, "R", MRED) +
      '<rect x="150" y="214" width="100" height="5" rx="2" fill="#fff6c2" opacity=".4" class="am-flk"/>' + rain(26),
      sky("am1", "#5d6b78", "#a9b4bd"));
  }

  /* 2. Woodlawn Park's basketball court on NE 13th & Dekum ("came a long way from that Woodlawn Park"): green court, hoop, a ball bouncing, tall firs behind */
  function amcourt() {
    const firs = [20, 60, 330, 372].map((x, i) => '<path d="M' + x + ' 150l22 -' + (90 + i * 8) + 'l22 ' + (90 + i * 8) + 'z" fill="#1f4d33"/><rect x="' + (x + 19) + '" y="150" width="6" height="12" fill="#4a3324"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#am2)"/>' +
      '<g class="am-cl"><ellipse cx="80" cy="40" rx="50" ry="12" fill="#fff" opacity=".7"/><ellipse cx="250" cy="28" rx="60" ry="11" fill="#fff" opacity=".6"/></g>' +
      firs + '<rect x="0" y="150" width="400" height="20" fill="#4f8a3c"/>' +
      '<path d="M40 170h320l30 80h-380z" fill="#2f7a52"/><path d="M70 176h260l22 64h-304z" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<path d="M150 176v26a50 18 0 0 0 100 0v-26" fill="#c9533a" stroke="#fff" stroke-width="2"/><ellipse cx="200" cy="230" rx="44" ry="10" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<rect x="196" y="96" width="8" height="80" fill="#3a3e46"/><rect x="170" y="78" width="60" height="38" rx="2" fill="#f4f4f2" stroke="#3a3e46" stroke-width="2"/><rect x="190" y="96" width="20" height="14" fill="none" stroke="' + RED + '" stroke-width="2"/>' +
      '<ellipse cx="200" cy="118" rx="12" ry="3" fill="none" stroke="#e86a1a" stroke-width="2.5"/><path d="M189 119l4 14M200 121v13M211 119l-4 14" stroke="#eee" stroke-width="1"/>' +
      '<g class="am-ball"><circle cx="232" cy="200" r="9" fill="#e86a1a"/><path d="M223 200h18M232 191v18" stroke="#5a2a08" stroke-width="1.2"/></g>' +
      sign(18, 232, 120, "WOODLAWN PARK"),
      sky("am2", "#7fb4d8", "#d8e8f0"));
  }

  /* 3. The Broadway Bridge over the Willamette, where he raps in the Woodlawn video: the red-orange steel bascule spans, the streetcar crossing, the river below */
  function ambridge() {
    const truss = x => '<path d="M' + x + ' 120h120M' + x + ' 150h120' + Array.from({ length: 6 }, (_, i) => 'M' + (x + i * 20) + ' 150l20 -30M' + (x + i * 20) + ' 120l20 30').join("") + '" stroke="#c4412b" stroke-width="4" fill="none"/>';
    const car = '<g class="am-car"><rect x="0" y="128" width="96" height="20" rx="5" fill="#f3f1ea" stroke="#555" stroke-width="1.5"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (8 + i * 17) + '" y="132" width="12" height="8" rx="1" fill="#1b2630"/>').join("") + '<rect x="0" y="142" width="96" height="3" fill="' + MRED + '"/><path d="M40 128l8 -10l8 10" stroke="#444" stroke-width="1.5" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#am3)"/>' +
      '<g fill="#5a6470" opacity=".8"><rect x="300" y="60" width="26" height="60"/><rect x="330" y="40" width="20" height="80"/><rect x="354" y="70" width="40" height="50"/><rect x="20" y="80" width="40" height="40"/></g>' +
      '<rect x="0" y="160" width="400" height="100" fill="#3d5f6e"/>' + Array.from({ length: 8 }, (_, i) => '<path class="am-glow' + (i % 2 ? " am-g2" : "") + '" d="M' + (20 + i * 50) + ' ' + (180 + (i % 3) * 22) + 'h30" stroke="#a8c8d4" stroke-width="2" opacity=".6"/>').join("") +
      truss(20) + truss(260) +
      '<path d="M140 120q60 -40 120 0M140 150h120" stroke="#c4412b" stroke-width="5" fill="none"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M' + (150 + i * 25) + ' ' + (150) + 'v-' + (22 + (i === 2 ? 14 : i % 2 ? 10 : 2)) + '" stroke="#c4412b" stroke-width="3"/>').join("") +
      '<rect x="0" y="148" width="400" height="8" fill="#8c3122"/>' + car +
      [40, 150, 250, 360].map(x => '<rect x="' + (x - 7) + '" y="156" width="14" height="60" fill="#8a8a84"/>').join("") +
      rain(18),
      sky("am3", "#6b7f90", "#c7d2d9"));
  }

  /* 4. The arena on the Rose Quarter where the Trail Blazers play ("Rip City" is tattooed on him): the curved glass-and-steel bowl at night, searchlights, lamps on the plaza */
  function amarena() {
    return svg(
      '<rect width="400" height="260" fill="url(#am4)"/>' +
      '<g class="am-sw"><path d="M90 200l-40 -200h30z" fill="#fff" opacity=".12"/></g><g class="am-sw am-sw2"><path d="M310 200l40 -200h-30z" fill="#fff" opacity=".12"/></g>' +
      '<path d="M40 190q160 -130 320 0z" fill="#2c3640" stroke="#9aa6b0" stroke-width="2"/>' +
      '<path d="M60 190q140 -100 280 0" fill="none" stroke="#c9d3db" stroke-width="2" opacity=".6"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (70 + i * 32) + ' 190v-' + [20, 44, 62, 72, 76, 72, 62, 44, 20][i] + '" stroke="#9aa6b0" stroke-width="1.5"/>').join("") +
      '<rect x="40" y="186" width="320" height="14" fill="#c8102e"/><rect x="40" y="200" width="320" height="6" fill="#111"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect class="am-glow' + (i % 2 ? " am-g2" : "") + '" x="' + (52 + i * 22) + '" y="170" width="12" height="14" fill="#ffe9a8" opacity=".7"/>').join("") +
      '<rect x="0" y="206" width="400" height="54" fill="#3b3f45"/>' +
      Array.from({ length: 7 }, (_, i) => '<g class="am-glow' + (i % 2 ? " am-g2" : "") + '"><circle cx="' + (60 + i * 46) + '" cy="232" r="3" fill="#ffe9a8"/><path d="M' + (60 + i * 46) + ' 235v20" stroke="#222" stroke-width="2"/></g>').join("") +
      tag("RIP CITY", 128, 120, 30, YEL, -4),
      sky("am4", "#0b0f1c", "#2a2f45"));
  }

  /* 5. NE Dekum St and NE 13th Ave by Woodlawn Park: green street signs, a wall with AMINE tagged in banana yellow, Mt. Hood's white peak behind */
  function amcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#am5)"/>' +
      '<g transform="translate(-100 0)"><path d="M220 150l60 -86l14 10l12 -6l64 82z" fill="#7d8fa3"/><path d="M268 82l12 -18l14 10l12 -6l10 12l-16 4l-10 -6l-12 10z" fill="#fff"/></g>' +
      '<g fill="#244a33"><path d="M0 150l20 -50l20 50zM340 150l18 -46l18 46zM370 150l16 -40l16 40z"/></g>' +
      '<rect x="0" y="146" width="400" height="10" fill="#5f8a4a"/>' +
      '<rect x="30" y="120" width="250" height="100" fill="#d9cdb4"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M30 ' + (128 + i * 10) + 'h250" stroke="#c4b89e" stroke-width="1"/>').join("") +
      tag("AMINE", 60, 186, 46, YEL, -7) + tag("CLUB BANANA", 70, 210, 17, RED, -4) +
      '<g transform="translate(210 160) rotate(-20)"><path d="M0 0q20 30 52 20q-30 -2 -46 -28z" fill="' + YEL + '" stroke="#5a4a10" stroke-width="2"/><path d="M4 -8l-3 -6" stroke="#5a4a10" stroke-width="3"/></g>' +
      '<circle class="am-sp" cx="250" cy="150" r="3" fill="' + YEL + '"/><circle class="am-sp am-sp2" cx="258" cy="146" r="2" fill="' + YEL + '"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#55595e"/><path d="M0 238h400" stroke="#e6e2d8" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="322" y="96" width="6" height="128" fill="#6e737b"/>' + sign(270, 92, 112, "NE DEKUM ST") + sign(292, 118, 104, "NE 13TH AVE"),
      sky("am5", "#9cc6e4", "#e8eef2"));
  }

  window.SCENES = { amstation, amcourt, ambridge, amarena, amcorner };
})();
