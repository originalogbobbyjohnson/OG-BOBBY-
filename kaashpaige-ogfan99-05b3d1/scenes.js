/* kaashpaige scenes (REGIONS: HOUSTON + TEXAS; Grand Prairie, Dallas-Fort Worth). CSS classes prefixed kp- (the page's own anim-train is kept).
   1 The TRE pulling into CentrePort/DFW Airport, the rail stop closest to Grand Prairie, a jet climbing out of DFW overhead.
   2 Mansfield Timberview High School in Arlington, where she started writing songs and putting them on SoundCloud.
   3 Parked Car Convos: her car parked outside the Grand Prairie house at night, phone recording on the dash.
   4 AT&T Stadium in Arlington lit up at night, the giant arches and the glass wall glowing.
   5 Main St & Center St, Grand Prairie: green street signs, KAASH tagged on the wall, the Dallas skyline far off to the east. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kpglow{0%,100%{opacity:.45}50%{opacity:1}}.kp-glow{animation:kpglow 2.2s ease-in-out infinite}.kp-g2{animation-delay:-1.1s}' +
    '@keyframes kpjet{0%{transform:translate(-60px,40px)}100%{transform:translate(460px,-30px)}}.kp-jet{animation:kpjet 12s linear infinite}' +
    '@keyframes kpbar{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.kp-bar{transform-box:fill-box;transform-origin:50% 100%;animation:kpbar .9s ease-in-out infinite}.kp-b2{animation-delay:-.3s}.kp-b3{animation-delay:-.6s}' +
    '@keyframes kpnote{0%{transform:translateY(0);opacity:1}100%{transform:translateY(-30px);opacity:0}}.kp-nt{animation:kpnote 2s ease-out infinite}.kp-nt2{animation-delay:-1s}' +
    '@keyframes kpflag{0%,100%{transform:skewY(0)}50%{transform:skewY(5deg)}}.kp-flag{transform-box:fill-box;transform-origin:0 50%;animation:kpflag 1.6s ease-in-out infinite}' +
    '@keyframes kpbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.kp-beam{transform-origin:200px 120px;animation:kpbeam 5s ease-in-out infinite}.kp-beam2{animation-delay:-2.5s}' +
    '@keyframes kpspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.kp-spr{animation:kpspray 1.4s ease-out infinite}.kp-spr2{animation-delay:.5s}' +
    '@keyframes kpcloud{0%{transform:translateX(-90px)}100%{transform:translateX(470px)}}.kp-cl{animation:kpcloud 34s linear infinite}.kp-cl2{animation-delay:-17s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "kp-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ORG = "#ff8c3a", PINK = "#f7a8c8", PURP = "#9b7bff", TRE = "#1d4f91", RED = "#c8323a";
  const jet = '<g class="kp-jet"><path d="M0 0l40 -6l8 2l-10 6l-26 4l-8 8h-6l4 -10z" fill="#e8ecf2" stroke="#7a8696" stroke-width="1"/><circle cx="44" cy="-2" r="1.5" fill="#ff4d4d" class="kp-glow"/></g>';

  /* 1. TRE at CentrePort/DFW Airport */
  function kpstation() {
    const car = (x) => '<rect x="' + x + '" y="110" width="150" height="88" rx="8" fill="#d8dde3" stroke="#7a8696" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + 10 + i * 27) + '" y="120" width="22" height="16" rx="2" fill="#22303c"/><rect x="' + (x + 10 + i * 27) + '" y="146" width="22" height="16" rx="2" fill="#22303c"/>').join("") +
      '<rect x="' + x + '" y="168" width="150" height="10" fill="' + TRE + '"/><rect x="' + x + '" y="179" width="150" height="4" fill="' + RED + '"/>' +
      '<circle cx="' + (x + 30) + '" cy="200" r="8" fill="#222"/><circle cx="' + (x + 120) + '" cy="200" r="8" fill="#222"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kp1)"/>' +
      '<g class="kp-cl"><ellipse cx="60" cy="40" rx="44" ry="9" fill="#fff" opacity=".6"/></g><g class="kp-cl kp-cl2"><ellipse cx="80" cy="64" rx="30" ry="6" fill="#fff" opacity=".5"/></g>' +
      jet +
      /* canopy */
      '<rect x="0" y="70" width="400" height="10" fill="#5a6470"/>' + [20, 140, 260, 380].map(x => '<rect x="' + (x - 3) + '" y="80" width="6" height="128" fill="#6a7480"/>').join("") +
      '<g class="anim-train">' + car(14) + car(168) + '<path d="M318 110h40q20 0 26 30v58h-66z" fill="#d8dde3" stroke="#7a8696" stroke-width="2"/><path d="M330 120h28q12 0 16 20h-44z" fill="#22303c"/><rect x="318" y="168" width="66" height="10" fill="' + TRE + '"/><rect x="318" y="179" width="66" height="4" fill="' + RED + '"/><circle cx="370" cy="188" r="4" fill="#fff6c2"/><circle cx="346" cy="200" r="8" fill="#222"/></g>' +
      '<rect x="0" y="206" width="400" height="54" fill="#8a8f96"/><rect x="0" y="206" width="400" height="6" fill="#f2c200"/>' +
      '<rect x="96" y="222" width="208" height="28" rx="3" fill="#111"/>' +
      '<rect x="104" y="228" width="34" height="16" rx="3" fill="' + TRE + '"/><text x="121" y="240" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">TRE</text>' +
      '<text x="222" y="240" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">CENTREPORT/DFW AIRPORT</text>',
      sky("kp1", "#7db6e6", "#f6d7b0"));
  }

  /* 2. Mansfield Timberview High School */
  function kpschool() {
    return svg(
      '<rect width="400" height="260" fill="url(#kp2)"/>' +
      '<g class="kp-cl"><ellipse cx="60" cy="34" rx="44" ry="9" fill="#fff" opacity=".7"/></g>' +
      '<rect x="40" y="80" width="320" height="120" fill="#b98a6a" stroke="#7a5640" stroke-width="2"/>' +
      '<rect x="150" y="56" width="100" height="144" fill="#c99a78" stroke="#7a5640" stroke-width="2"/>' +
      '<rect x="160" y="64" width="80" height="26" rx="2" fill="#2a2a2a"/><text x="200" y="76" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">MANSFIELD</text><text x="200" y="86" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">TIMBERVIEW HIGH</text>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (52 + i * 24) + '" y="100" width="16" height="22" fill="#8fc6e8" stroke="#555"/><rect x="' + (52 + i * 24) + '" y="140" width="16" height="22" fill="#8fc6e8" stroke="#555"/>').join("") +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (262 + i * 24) + '" y="100" width="16" height="22" fill="#8fc6e8" stroke="#555"/><rect x="' + (262 + i * 24) + '" y="140" width="16" height="22" fill="#8fc6e8" stroke="#555"/>').join("") +
      '<rect x="176" y="150" width="48" height="50" fill="#5a3a2a"/><path d="M200 150v50" stroke="#2a1a10" stroke-width="2"/>' +
      '<rect x="104" y="18" width="3" height="62" fill="#888"/><g class="kp-flag"><rect x="107" y="18" width="34" height="20" fill="#bf0d3e"/><rect x="107" y="18" width="12" height="20" fill="#002868"/><rect x="119" y="18" width="22" height="10" fill="#fff"/><path d="M113 23l1.2 3h3l-2.4 1.8l1 3l-2.8 -2l-2.8 2l1 -3l-2.4 -1.8h3z" fill="#fff"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#6fae4e"/><rect x="0" y="214" width="400" height="20" fill="#9a9aa2"/>' +
      /* phone with a waveform on the bench: where the SoundCloud songs started */
      '<rect x="300" y="208" width="70" height="8" fill="#7a5640"/><rect x="318" y="180" width="30" height="28" rx="4" fill="#222" stroke="#555"/>' +
      ['', 'kp-b2', 'kp-b3', '', 'kp-b2'].map((c, i) => '<rect class="kp-bar ' + c + '" x="' + (322 + i * 5) + '" y="186" width="3" height="16" fill="' + ORG + '"/>').join("") +
      '<text class="kp-nt" x="352" y="182" font-size="12" fill="' + PINK + '">♪</text><text class="kp-nt kp-nt2" x="306" y="182" font-size="12" fill="' + PINK + '">♫</text>',
      sky("kp2", "#6fb2e8", "#cfe6f5"));
  }

  /* 3. Parked Car Convos outside the Grand Prairie house */
  function kpcar() {
    return svg(
      '<rect width="400" height="260" fill="url(#kp3)"/>' + stars(26) + '<circle cx="330" cy="46" r="18" fill="#fff3c4"/><circle cx="338" cy="40" r="16" fill="#1a1230"/>' +
      /* the house */
      '<path d="M30 120l70 -46l70 46v80h-140z" fill="#3a3350"/><rect x="50" y="134" width="30" height="26" fill="#ffd98a" class="kp-glow"/><rect x="120" y="134" width="30" height="26" fill="#ffd98a" opacity=".5"/><rect x="88" y="150" width="22" height="50" fill="#2a2238"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#2a2a32"/><rect x="0" y="196" width="400" height="6" fill="#4a4a55"/>' +
      /* the car */
      '<path d="M180 210v-30l24 -30h110l34 30h20q10 0 10 10v20z" fill="' + PURP + '" stroke="#3a2a7a" stroke-width="2"/>' +
      '<path d="M210 176l18 -22h40v22z" fill="#1d2433"/><path d="M274 154h36l26 22h-62z" fill="#1d2433"/>' +
      '<rect x="240" y="166" width="16" height="10" rx="2" fill="#222"/><rect class="kp-glow" x="242" y="168" width="12" height="6" fill="' + ORG + '"/>' +
      '<circle cx="222" cy="212" r="16" fill="#111"/><circle cx="222" cy="212" r="6" fill="#888"/><circle cx="332" cy="212" r="16" fill="#111"/><circle cx="332" cy="212" r="6" fill="#888"/>' +
      '<rect x="372" y="186" width="10" height="8" rx="2" fill="#fff6c2" class="kp-glow"/>' +
      /* convo bubbles */
      '<rect x="196" y="106" width="70" height="26" rx="10" fill="#fff"/><path d="M220 132l6 10l4 -10z" fill="#fff"/><text x="231" y="123" text-anchor="middle" ' + font + ' font-size="10" fill="#333">real talk</text>' +
      '<rect x="282" y="96" width="80" height="26" rx="10" fill="' + PINK + '"/><path d="M300 122l-4 10l10 -10z" fill="' + PINK + '"/><text x="322" y="113" text-anchor="middle" ' + font + ' font-size="10" fill="#333">love songs</text>' +
      '<text class="kp-nt" x="256" y="150" font-size="14" fill="' + ORG + '">♪</text><text class="kp-nt kp-nt2" x="300" y="150" font-size="14" fill="' + PINK + '">♫</text>' +
      '<text x="200" y="246" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="16" fill="' + ORG + '" letter-spacing="3">PARKED CAR CONVOS</text>',
      sky("kp3", "#120c26", "#3a2a5a"));
  }

  /* 4. AT&T Stadium in Arlington at night */
  function kpstadium() {
    return svg(
      '<rect width="400" height="260" fill="url(#kp4)"/>' + stars(20) +
      '<g class="kp-beam"><path d="M200 120l-120 -130h40z" fill="#fff6c2" opacity=".12"/></g><g class="kp-beam kp-beam2"><path d="M200 120l120 -130h-40z" fill="#fff6c2" opacity=".12"/></g>' +
      /* the dome body */
      '<path d="M20 200q180 -150 360 0z" fill="#4a5a70"/>' +
      '<path d="M50 200q150 -118 300 0z" fill="#8fa8c4" opacity=".35"/>' +
      /* the two giant arches */
      '<path d="M40 200q160 -190 320 0" fill="none" stroke="#c8d0da" stroke-width="7"/><path d="M60 200q140 -170 280 0" fill="none" stroke="#c8d0da" stroke-width="5"/>' +
      Array.from({ length: 9 }, (_, i) => { const x = 80 + i * 30; return '<path d="M' + x + ' 200V' + (200 - Math.sin(Math.PI * (x - 40) / 320) * 82).toFixed(0) + '" stroke="#c8d0da" stroke-width="1.2" opacity=".6"/>'; }).join("") +
      /* glowing glass wall */
      '<rect x="70" y="160" width="260" height="40" fill="#ffd98a" opacity=".55" class="kp-glow"/>' +
      Array.from({ length: 13 }, (_, i) => '<path d="M' + (70 + i * 20) + ' 160v40" stroke="#8a7a4a" stroke-width="1"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#1f2a1f"/><rect x="0" y="218" width="400" height="42" fill="#2a2a32"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (14 + i * 40) + '" y="226" width="24" height="10" rx="3" fill="' + ['#9b7bff', '#ff8c3a', '#c8d0da', '#f7a8c8'][i % 4] + '"/>').join("") +
      '<text x="200" y="254" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="13" fill="' + PINK + '" letter-spacing="3">ARLINGTON, TEXAS</text>',
      sky("kp4", "#0c1430", "#2a2c5a"));
  }

  /* 5. Main St & Center St, Grand Prairie */
  function kpcorner() {
    const skyline = '<g fill="#5a6a86">' + [[250, 150, 14], [268, 120, 16], [288, 136, 12], [304, 104, 18], [326, 128, 14], [344, 142, 16], [364, 124, 12]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (180 - b[1]) + '"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kp5)"/>' +
      '<g class="kp-cl"><ellipse cx="80" cy="30" rx="44" ry="9" fill="#fff" opacity=".5"/></g>' + skyline +
      '<path d="M0 180h400v20H0z" fill="#8a7a6a"/>' +
      /* the wall with the tag */
      '<rect x="0" y="86" width="230" height="114" fill="#d8c0a0"/>' +
      Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (98 + r * 12) + 'h230" stroke="#c0a888" stroke-width="1"/>').join("") +
      '<rect x="0" y="80" width="236" height="8" fill="#b8a080"/>' +
      tag("KAASH", 20, 150, 48, ORG, -7) + tag("PAIGE", 70, 186, 28, PINK, -4) +
      '<g class="kp-spr"><circle cx="210" cy="150" r="2" fill="' + ORG + '"/></g><g class="kp-spr kp-spr2"><circle cx="216" cy="140" r="1.6" fill="' + PINK + '"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#5a5a60"/><rect x="0" y="200" width="400" height="6" fill="#a0a0a8"/>' +
      '<rect x="262" y="70" width="5" height="132" fill="#2f3a2f"/>' +
      sign(232, 64, 70, "MAIN ST") + sign(254, 90, 100, "CENTER ST") +
      '<text x="300" y="240" text-anchor="middle" ' + font + ' font-size="10" fill="#e8e8e8" letter-spacing="2">GRAND PRAIRIE · TEXAS</text>',
      sky("kp5", "#f2a66a", "#f7d9b8"));
  }

  window.SCENES = { kpstation, kpschool, kpcar, kpstadium, kpcorner };
})();
