/* wrekonize scenes (Regions tab: South Florida; Miami). CSS classes prefixed wr- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wrflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.wr-flk{animation:wrflick 2.4s infinite}.wr-flk2{animation-delay:.8s}' +
    '@keyframes wrglow{0%,100%{opacity:.45}50%{opacity:1}}.wr-glow{animation:wrglow 2.2s ease-in-out infinite}.wr-g2{animation-delay:-1.1s}' +
    '@keyframes wrsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.wr-sw{transform-box:fill-box;transform-origin:50% 0%;animation:wrsweep 3.4s ease-in-out infinite}.wr-sw2{animation-delay:-1.7s}' +
    '@keyframes wrbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.wr-bob{animation:wrbob .8s ease-in-out infinite}.wr-bob2{animation-delay:-.4s}' +
    '@keyframes wrspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.wr-sp{animation:wrspray 1.4s ease-out infinite}.wr-sp2{animation-delay:.45s}' +
    '@keyframes wrship{0%{transform:translateX(0)}100%{transform:translateX(-140px)}}.wr-ship{animation:wrship 14s ease-in-out infinite alternate}' +
    '@keyframes wrdash{0%{transform:translateY(0)}100%{transform:translateY(40px)}}.wr-dash{animation:wrdash .6s linear infinite}' +
    '@keyframes wrwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.wr-wave{animation:wrwave 3s ease-in-out infinite}' +
    '@keyframes wrpalm{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.wr-palm{transform-box:fill-box;transform-origin:50% 100%;animation:wrpalm 3.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "wr-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const PINK = "#ff4fa3", CYAN = "#2ad4ff", GREEN = "#00a651", ORANGE = "#f7941d";
  const palm = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="wr-palm"><path d="M0 0q4 -40 -2 -80" stroke="#5a4030" stroke-width="5" fill="none"/>' +
    ['M-2 -80q-24 -6 -34 10', 'M-2 -80q24 -8 34 8', 'M-2 -80q-14 -20 -32 -18', 'M-2 -80q14 -22 32 -16', 'M-2 -80q2 -20 -4 -28'].map(d => '<path d="' + d + '" stroke="#1f6a3a" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g></g>';

  /* 1. Government Center, downtown Miami: the elevated Metrorail platform, the silver train with its stripe sliding in, the black station sign with the Green and Orange line bullets, downtown towers behind */
  function wrstation() {
    const tr = '<g class="anim-train"><rect x="22" y="96" width="330" height="62" rx="8" fill="#d8dce0" stroke="#7a8088" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (36 + i * 44) + '" y="106" width="30" height="24" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="22" y="136" width="330" height="5" fill="' + GREEN + '"/><rect x="22" y="142" width="330" height="3" fill="' + ORANGE + '"/>' +
      '<rect x="332" y="100" width="20" height="56" rx="4" fill="#b0b6bd"/><circle cx="344" cy="148" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#wr1)"/>' +
      '<g fill="#5a6a86"><rect x="10" y="20" width="40" height="80"/><rect x="60" y="0" width="34" height="100"/><rect x="250" y="10" width="44" height="90"/><rect x="306" y="30" width="36" height="70"/><rect x="350" y="4" width="40" height="96"/></g>' +
      '<g fill="#8fa2c2" opacity=".6">' + Array.from({ length: 24 }, (_, i) => '<rect x="' + [16, 66, 256, 312, 356, 30][i % 6] + '" y="' + (10 + (i * 13) % 80) + '" width="6" height="4"/>').join("") + '</g>' +
      '<rect x="0" y="86" width="400" height="8" fill="#e0ddd5"/><rect x="0" y="158" width="400" height="10" fill="#d8d4ca"/><rect x="0" y="168" width="400" height="6" fill="#f2c200"/>' +
      tr +
      '<rect x="0" y="174" width="400" height="86" fill="#9a968c"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 6) + '" y="174" width="12" height="86" fill="#c8c4ba"/>').join("") +
      '<rect x="0" y="20" width="400" height="10" fill="#e8e4dc"/>' + [30, 370].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="56" fill="#cfcac0"/>').join("") +
      '<rect x="92" y="38" width="216" height="38" rx="3" fill="#111"/><text x="104" y="62" ' + font + ' font-size="14" fill="#fff">Government Center</text>' + badge(254, 50, "G", GREEN) + badge(278, 50, "O", ORANGE) +
      '<rect class="wr-flk" x="120" y="22" width="50" height="5" rx="2" fill="#fff8dc"/><rect class="wr-flk wr-flk2" x="230" y="22" width="50" height="5" rx="2" fill="#fff8dc"/>',
      sky("wr1", "#5fa8e0", "#f6d6b0"));
  }

  /* 2. The battle stage: two mics facing off, the "BATTLE" backdrop in neon, the judges' table, the lights sweeping, the crowd's hands up (he came up as a Miami battle rapper and won MTV's battle) */
  function wrbattle() {
    const mic = (x, flip) => '<g transform="translate(' + x + ' 150)' + (flip ? ' scale(-1 1)' : '') + '"><path d="M0 0v50M-14 50h28" stroke="#2a2a2e" stroke-width="4"/><path d="M0 0l16 -18" stroke="#2a2a2e" stroke-width="3"/><rect x="12" y="-32" width="10" height="18" rx="5" fill="#c9ced6" stroke="#555" stroke-width="1.4" transform="rotate(40 17 -23)"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#0b0a14"/>' +
      '<rect x="30" y="26" width="340" height="110" rx="6" fill="#141226" stroke="' + PINK + '" stroke-width="3" class="wr-glow"/>' +
      '<text x="200" y="88" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="52" fill="none" stroke="' + CYAN + '" stroke-width="2.5" letter-spacing="6" class="wr-flk">BATTLE</text>' +
      tag("WREK", 52, 124, 26, PINK, -4) + tag("MIAMI", 284, 126, 22, CYAN, -4) +
      '<path class="wr-sw" d="M70 0l-44 190h88z" fill="' + PINK + '" opacity=".14"/><path class="wr-sw wr-sw2" d="M330 0l-44 190h88z" fill="' + CYAN + '" opacity=".14"/>' +
      '<rect x="0" y="196" width="400" height="10" fill="#1d1a2a"/><rect x="0" y="194" width="400" height="3" fill="' + PINK + '" opacity=".6"/>' +
      mic(130, false) + mic(270, true) +
      '<rect x="160" y="166" width="80" height="30" rx="2" fill="#22203a"/><text x="200" y="185" text-anchor="middle" ' + font + ' font-size="9" fill="#cfd6e0" letter-spacing="2">JUDGES</text>' +
      Array.from({ length: 16 }, (_, i) => '<g class="wr-bob' + (i % 2 ? " wr-bob2" : "") + '"><circle cx="' + (12 + i * 25) + '" cy="230" r="9" fill="#040408"/><rect x="' + (i * 25) + '" y="236" width="24" height="26" rx="6" fill="#040408"/>' +
        (i % 3 === 1 ? '<path d="M' + (20 + i * 25) + ' 232l8 -26" stroke="#040408" stroke-width="5" stroke-linecap="round"/>' : "") + '</g>').join(""),
      "");
  }

  /* 3. "Flying through them neon skies": the MacArthur Causeway at night, downtown's towers lit pink and cyan over Biscayne Bay, a cruise ship gliding out of PortMiami, the reflections shimmering */
  function wrneon() {
    const towers = [[20, 70, 30], [56, 40, 26], [88, 56, 34], [128, 24, 28], [162, 50, 36], [204, 34, 24], [234, 60, 30], [270, 44, 28], [304, 66, 34], [344, 52, 40]];
    return svg(
      '<rect width="400" height="260" fill="url(#wr3)"/>' + stars(18) +
      towers.map(([x, y, w], i) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (150 - y) + '" fill="#141a34"/><rect class="wr-glow' + (i % 2 ? " wr-g2" : "") + '" x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="' + (i % 2 ? CYAN : PINK) + '"/>' +
        Array.from({ length: 4 }, (_, k) => '<rect x="' + (x + 4 + (k % 2) * (w / 2)) + '" y="' + (y + 14 + k * 18) + '" width="5" height="4" fill="#ffd98a" opacity=".6"/>').join("")).join("") +
      '<rect x="0" y="150" width="400" height="110" fill="#0a1430"/>' +
      towers.map(([x, y, w], i) => '<rect class="wr-wave" x="' + x + '" y="156" width="' + w + '" height="3" fill="' + (i % 2 ? CYAN : PINK) + '" opacity=".35"/><rect class="wr-wave" x="' + (x + 6) + '" y="170" width="' + (w - 10) + '" height="2" fill="' + (i % 2 ? CYAN : PINK) + '" opacity=".22"/>').join("") +
      /* cruise ship */
      '<g class="wr-ship"><g transform="translate(250 0)"><path d="M10 176h130l-12 18h-108z" fill="#f4f4f2"/><rect x="26" y="160" width="96" height="16" fill="#f4f4f2"/><rect x="40" y="148" width="64" height="12" fill="#e8e8e4"/><rect x="88" y="138" width="10" height="10" fill="' + PINK + '"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (30 + i * 9) + '" y="166" width="5" height="4" fill="#ffd98a"/>').join("") + '</g></g>' +
      /* causeway */
      '<path d="M0 214q200 -26 400 -10v14q-200 -14 -400 10z" fill="#3a3e52"/><path d="M0 214q200 -26 400 -10" stroke="#ffd98a" stroke-width="1.6" stroke-dasharray="3 9" fill="none" class="wr-glow"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (14 + i * 46) + '" y="' + (212 - (i < 5 ? i * 3 : (8 - i) * 3)) + '" width="5" height="40" fill="#2a2e40"/>').join(""),
      sky("wr3", "#1a0f3a", "#c0347a"));
  }

  /* 4. "The roads like my second home": the tour van heading up I-95 at dawn, the green highway signs, the lane dashes rushing by, palms on the shoulder */
  function wrroad() {
    return svg(
      '<rect width="400" height="260" fill="url(#wr4)"/><circle class="wr-glow" cx="320" cy="108" r="30" fill="#ffd27a"/>' +
      '<path d="M0 130h400v130h-400z" fill="#3a5a3a"/><path d="M150 130l-150 130h400l-150 -130z" fill="#3c3c42"/>' +
      '<g class="wr-dash">' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (199 - i * 0.5) + ' ' + (126 + i * 26) + 'v' + (8 + i * 3) + '" stroke="#f2c200" stroke-width="' + (2 + i) + '"/>').join("") + '</g>' +
      palm(36, 150, 0.8) + palm(370, 156, 0.9) +
      /* sign gantry */
      '<rect x="78" y="34" width="6" height="100" fill="#7a8088"/><rect x="316" y="34" width="6" height="100" fill="#7a8088"/><rect x="78" y="36" width="244" height="5" fill="#7a8088"/>' +
      '<rect x="96" y="42" width="100" height="46" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><rect x="104" y="48" width="30" height="18" rx="2" fill="#1d4f9a" stroke="#fff" stroke-width="1"/><text x="119" y="61" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">I-95</text><text x="168" y="61" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">NORTH</text><text x="146" y="80" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">Fort Lauderdale</text>' +
      '<rect x="204" y="42" width="100" height="46" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="254" y="60" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Next Show</text><text x="254" y="78" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Keep Moving</text>' +
      /* van from behind */
      '<g class="wr-bob"><rect x="150" y="164" width="100" height="62" rx="8" fill="#1d1a2a"/><rect x="160" y="172" width="80" height="24" rx="3" fill="#2a3a5a"/><path d="M200 172v24" stroke="#1d1a2a" stroke-width="3"/>' +
      '<rect x="154" y="204" width="16" height="8" rx="2" fill="#ff3b3b" class="wr-glow"/><rect x="230" y="204" width="16" height="8" rx="2" fill="#ff3b3b" class="wr-glow"/><rect x="186" y="208" width="28" height="10" rx="1" fill="#f4f4f2"/><text x="200" y="216" text-anchor="middle" ' + font + ' font-size="6.5" fill="#1d4f9a">FLORIDA</text>' +
      '<rect x="156" y="226" width="18" height="12" rx="3" fill="#111"/><rect x="226" y="226" width="18" height="12" rx="3" fill="#111"/>' + tag("WREK", 176, 192, 14, PINK, -3) + '</g>',
      sky("wr4", "#4a6aa8", "#f6b07a"));
  }

  /* 5. Collins Ave and 5th St on Miami Beach, "South of 5th": green signs, WREK tagged on the wall, the rainbow-striped lifeguard stand on the sand and the ocean behind, palms swaying */
  function wrcorner() {
    const stripes = [PINK, "#ffb347", "#ffe066", "#6be08a", CYAN, "#8a7bff"];
    return svg(
      '<rect width="400" height="260" fill="url(#wr5)"/>' +
      '<rect x="0" y="86" width="400" height="34" fill="#1aa5c8"/><path class="wr-wave" d="M0 96q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bdf3ff" stroke-width="2" fill="none" opacity=".7"/>' +
      '<rect x="0" y="118" width="400" height="22" fill="#f2deb0"/>' +
      /* lifeguard stand */
      '<g transform="translate(150 40)"><path d="M10 78l6 -30M70 78l-6 -30M20 68h40" stroke="#f4f4f2" stroke-width="4"/><path d="M40 56l-20 -6v-10h40v10z" fill="#f4f4f2"/>' +
      '<rect x="10" y="10" width="60" height="32" fill="#f4f4f2"/>' + stripes.map((c, i) => '<rect x="' + (10 + i * 10) + '" y="10" width="10" height="32" fill="' + c + '"/>').join("") +
      '<path d="M4 12l36 -16l36 16z" fill="' + PINK + '"/><rect x="26" y="20" width="28" height="14" fill="#1d2a3a"/></g>' +
      '<rect x="0" y="136" width="400" height="88" fill="#f4e6c8"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#e8d6b0" stroke-width="1"/>').join("") +
      palm(262, 138, 0.9) + palm(36, 138, 0.8) +
      tag("WREK", 22, 200, 60, PINK, -6) + tag("MAYDAY", 190, 186, 30, CYAN, -4) + tag("SKEPTICS", 30, 218, 18, "#fff", -3) + tag("SOUTH OF 5TH", 176, 214, 18, "#8a7bff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5a5a5e"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="340" y="98" width="6" height="126" fill="#2f2f2f"/>' + sign(296, 98, 94, "Collins Ave") + sign(304, 124, 78, "5th St") +
      '<g class="wr-sp"><circle cx="150" cy="160" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="wr-sp wr-sp2"><circle cx="156" cy="154" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("wr5", "#6ec4f0", "#ffe2c0"));
  }

  window.SCENES = { wrstation: wrstation, wrbattle: wrbattle, wrneon: wrneon, wrroad: wrroad, wrcorner: wrcorner };
})();
