/* Tierra Whack game (REGIONS tab: Philadelphia; North Philly).
   1 Girard on the Broad Street Line: the route 15 trolley up on Girard Ave, the BSL train sliding in underneath.
   2 The African American Museum in Philadelphia (7th and Arch), where she held the listening party for Whack's Museum.
   3 Fletcher Street Urban Riding Club, the North Philly stables in her "Siren" video.
   4 The Arts Academy at Benjamin Rush, where she was a vocal major.
   5 N 18th St and W Oxford St, the corner where 15-year-old Dizzle Dizz freestyled and went viral, the Center City
     skyline behind with the giant Whack balloon from the World Wide Whack video floating over it.
   400 x 260 SVGs, classes and ids prefixed tw-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes twtrolley{from{transform:translateX(420px)}to{transform:translateX(-200px)}}.tw-trol{animation:twtrolley 9s linear infinite}' +
    '@keyframes twblink{0%,100%{opacity:.3}50%{opacity:1}}.tw-bl{animation:twblink 1.5s ease-in-out infinite}.tw-bl2{animation-delay:.5s}.tw-bl3{animation-delay:1s}' +
    '@keyframes twnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(16px,-60px);opacity:0}}.tw-note{animation:twnote 3s ease-out infinite}.tw-n2{animation-delay:-1s}.tw-n3{animation-delay:-2s}' +
    '@keyframes twtrot{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.tw-trot{animation:twtrot 9s linear infinite}' +
    '@keyframes twleg{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.tw-leg{transform-box:fill-box;transform-origin:50% 0%;animation:twleg .45s ease-in-out infinite}.tw-leg2{animation-delay:-.22s}' +
    '@keyframes twfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}.tw-float{animation:twfloat 3.2s ease-in-out infinite}' +
    '@keyframes twspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.tw-sp{animation:twspray 1.4s ease-out infinite}.tw-sp2{animation-delay:.45s}' +
    '@keyframes twsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.tw-sway{transform-box:fill-box;transform-origin:50% 100%;animation:twsway 2.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="tw-note ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'v-14l9 -3v14" stroke="' + c + '" stroke-width="2.5" fill="none"/><circle cx="' + (x - 2) + '" cy="' + y + '" r="3" fill="' + c + '"/><circle cx="' + (x + 7) + '" cy="' + (y - 3) + '" r="3" fill="' + c + '"/></g>';
  const PINK = "#ff6fae", MINT = "#7bd88f", YEL = "#ffd34e", BSL = "#f58220";

  /* 1. Girard: Girard Ave up top with the green-and-cream trolley gliding, the stairs down, the BSL platform with the orange-striped train */
  function twstation() {
    const tr = '<g class="anim-train"><rect x="20" y="158" width="330" height="62" rx="8" fill="#c4c9cf" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 44) + '" y="168" width="32" height="20" rx="2" fill="#1f2830"/>').join("") +
      '<rect x="20" y="196" width="330" height="8" fill="' + BSL + '"/><rect x="330" y="162" width="20" height="56" rx="4" fill="#9aa0a7"/><circle cx="342" cy="210" r="3.5" fill="#fff6c2"/></g>';
    const trolley = '<g class="tw-trol"><rect x="0" y="40" width="120" height="34" rx="10" fill="#e9e2c4"/><rect x="0" y="58" width="120" height="16" rx="4" fill="#2e7a3a"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (8 + i * 18) + '" y="45" width="12" height="11" rx="2" fill="#2c3440"/>').join("") +
      '<path d="M60 40l-10 -14h22" fill="none" stroke="#333" stroke-width="2"/><circle cx="24" cy="76" r="5" fill="#222"/><circle cx="96" cy="76" r="5" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="130" fill="url(#tw-s1)"/>' +
      '<rect x="0" y="0" width="70" height="80" fill="#9a5a42"/><rect x="330" y="6" width="70" height="74" fill="#8a4e3a"/>' +
      [10, 40, 340, 370].map(x => '<rect x="' + x + '" y="20" width="18" height="22" fill="#2c3440"/>').join("") +
      '<path d="M0 24h400" stroke="#333" stroke-width="1.2"/>' + trolley +
      '<rect x="0" y="80" width="400" height="6" fill="#bbb"/><path d="M0 78h400" stroke="#777" stroke-width="2"/>' +
      '<rect x="0" y="86" width="400" height="174" fill="#e6dcc6"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 86v60" stroke="#d6ccb6" stroke-width="1"/>').join("") +
      '<rect x="0" y="118" width="400" height="10" fill="' + BSL + '"/>' +
      '<rect x="0" y="146" width="400" height="80" fill="#2a2a2e"/>' + tr +
      '<rect x="0" y="226" width="400" height="6" fill="#f2c200"/><rect x="0" y="232" width="400" height="28" fill="#8c8780"/>' +
      '<rect x="120" y="90" width="160" height="26" rx="3" fill="#111"/><text x="134" y="109" ' + font + ' font-size="16" fill="#fff">Girard</text>' + badge(214, 103, "BSL", BSL) +
      '<rect class="tw-bl" x="20" y="132" width="70" height="5" rx="2" fill="#fff6c2" opacity=".6"/><rect class="tw-bl tw-bl2" x="310" y="132" width="70" height="5" rx="2" fill="#fff6c2" opacity=".6"/>',
      sky("tw-s1", "#8fd0f0", "#f4ecd8"));
  }

  /* 2. The African American Museum in Philadelphia: the brutalist concrete block at 7th and Arch, the heavy upper story cantilevered out, a listening party line and music floating out */
  function twmuseum() {
    const ppl = Array.from({ length: 9 }, (_, i) => '<g class="tw-sway"><rect x="' + (110 + i * 22) + '" y="206" width="12" height="22" rx="5" fill="' + [PINK, MINT, YEL, "#7aa7ff"][i % 4] + '"/><circle cx="' + (116 + i * 22) + '" cy="200" r="6" fill="#4a2e22"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#tw-s2)"/>' +
      '<rect x="0" y="70" width="60" height="140" fill="#9aa3ad"/><rect x="340" y="56" width="60" height="154" fill="#8a94a0"/>' +
      '<rect x="80" y="120" width="250" height="90" fill="#b49a7e"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (80 + i * 25) + ' 120v90" stroke="#a48a6e" stroke-width="2"/>').join("") +
      '<path d="M60 60h290v60H60z" fill="#c4a98a"/><path d="M60 120h290l-20 10H80z" fill="#8a7058"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M60 ' + (68 + i * 9) + 'h290" stroke="#b4997c" stroke-width="1"/>').join("") +
      '<text x="205" y="98" text-anchor="middle" ' + font + ' font-size="9.5" fill="#4a3424">AFRICAN AMERICAN MUSEUM IN PHILADELPHIA</text>' +
      '<rect x="180" y="150" width="50" height="60" fill="#2c3440"/><rect x="100" y="140" width="50" height="40" fill="#3a4450"/><rect x="260" y="140" width="50" height="40" fill="#3a4450"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#b8b1a5"/><rect x="0" y="228" width="400" height="32" fill="#5d5a55"/>' + ppl +
      note(206, 176, YEL) + note(196, 170, PINK, "tw-n2") + note(214, 174, MINT, "tw-n3") +
      '<rect x="20" y="186" width="28" height="18" rx="3" fill="#111"/><text x="34" y="199" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">ARCH</text>',
      sky("tw-s2", "#a6c8ef", "#f6e7d6"));
  }

  /* 3. Fletcher Street stables: the rowhouse block in North Philly, the paddock fence, a horse trotting down the street */
  function twstables() {
    const horse = '<g class="tw-trot"><path d="M10 170q0 -14 16 -16h40q14 0 18 -12l8 -14q8 -2 12 6l-6 8q-4 12 -10 26q-4 10 -18 10H26q-16 0 -16 -8z" fill="#6a3e22"/>' +
      '<path d="M92 128l-4 -8l6 2z" fill="#4a2a16"/><path d="M84 132q-6 6 -10 18" stroke="#2a1608" stroke-width="5" fill="none"/>' +
      '<rect class="tw-leg" x="24" y="176" width="6" height="30" fill="#5a321a"/><rect class="tw-leg tw-leg2" x="36" y="176" width="6" height="30" fill="#5a321a"/>' +
      '<rect class="tw-leg tw-leg2" x="64" y="176" width="6" height="30" fill="#5a321a"/><rect class="tw-leg" x="76" y="176" width="6" height="30" fill="#5a321a"/>' +
      '<path d="M10 162q-10 6 -8 22" stroke="#2a1608" stroke-width="5" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tw-s3)"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (i * 80) + '" y="40" width="78" height="110" fill="' + ["#8a4e3a", "#9a6a4a", "#7a4636", "#a0724c", "#8e5440"][i] + '"/><rect x="' + (i * 80 + 12) + '" y="56" width="18" height="24" fill="#2c3440"/><rect x="' + (i * 80 + 46) + '" y="56" width="18" height="24" fill="#2c3440"/><rect x="' + (i * 80 + 12) + '" y="98" width="18" height="24" fill="#2c3440"/><rect x="' + (i * 80 + 46) + '" y="104" width="20" height="46" fill="#4a3424"/>').join("") +
      '<rect x="0" y="150" width="400" height="20" fill="#b8b1a5"/><rect x="0" y="170" width="400" height="90" fill="#6a6a6e"/>' +
      '<rect x="230" y="104" width="150" height="46" fill="#7a5a3a"/><path d="M230 104l75 -20 75 20z" fill="#5a3a22"/><rect x="290" y="114" width="30" height="36" fill="#2a1a10"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (226 + i * 22) + '" y="132" width="4" height="22" fill="#e8e0cc"/>').join("") + '<path d="M226 138h158M226 148h158" stroke="#e8e0cc" stroke-width="3"/>' +
      '<rect x="160" y="80" width="62" height="20" rx="2" fill="#111"/><text x="191" y="94" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">Fletcher St</text>' +
      '<g transform="translate(262 46) scale(.55)"><rect x="24" y="176" width="6" height="30" fill="#d8ccb8"/><rect x="76" y="176" width="6" height="30" fill="#d8ccb8"/><path d="M10 170q0 -14 16 -16h40q14 0 18 -12l8 -14q8 -2 12 6l-6 8q-4 12 -10 26q-4 10 -18 10H26q-16 0 -16 -8z" fill="#e8dcc8"/><path d="M84 132q-6 6 -10 18" stroke="#555" stroke-width="5" fill="none"/></g>' + horse + '<path d="M0 214h400" stroke="#ddd" stroke-width="2" stroke-dasharray="18 14"/>',
      sky("tw-s3", "#ffb38a", "#fde3c2"));
  }

  /* 4. The Arts Academy at Benjamin Rush: the long brick school, the vocal studio window glowing, notes floating out */
  function twschool() {
    return svg(
      '<rect width="400" height="260" fill="url(#tw-s4)"/>' +
      '<path d="M0 150q100 -30 200 -10q100 -20 200 6V260H0z" fill="#6aa04a"/>' +
      '<rect x="40" y="76" width="320" height="110" fill="#a65c40"/><rect x="40" y="70" width="320" height="8" fill="#e6dcc6"/>' +
      '<rect x="150" y="52" width="100" height="30" fill="#b86a4a"/><rect x="150" y="48" width="100" height="6" fill="#e6dcc6"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (54 + i * 30) + '" y="92" width="18" height="22" fill="' + (i === 6 ? YEL : "#2c3440") + '"/>' + (i === 4 || i === 5 ? '' : '<rect x="' + (54 + i * 30) + '" y="128" width="18" height="22" fill="#2c3440"/>')).join("") +
      '<rect x="180" y="150" width="40" height="36" fill="#2c3440"/><rect x="164" y="58" width="72" height="18" rx="2" fill="#e6dcc6"/><text x="200" y="71" text-anchor="middle" ' + font + ' font-size="9" fill="#5a3424">ARTS ACADEMY</text>' +
      note(244, 94, PINK) + note(254, 90, MINT, "tw-n2") + note(236, 96, YEL, "tw-n3") +
      '<rect x="0" y="186" width="400" height="12" fill="#c8c0b0"/><rect x="0" y="198" width="400" height="62" fill="#5d5a55"/>' +
      '<rect x="56" y="204" width="110" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="111" y="218" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Knights Rd</text>',
      sky("tw-s4", "#9ad6f2", "#fbeede"));
  }

  /* 5. N 18th St and W Oxford St: green signs, WHACK tagged big, the Center City skyline behind with the giant Whack balloon floating over it */
  function twcorner() {
    const skyl = '<g fill="#4a3a6a">' +
      '<rect x="120" y="70" width="26" height="70"/><rect x="152" y="46" width="22" height="94"/><path d="M152 46l11 -24 11 24z"/><rect x="180" y="20" width="26" height="120"/><rect x="186" y="12" width="14" height="10"/>' +
      '<rect x="212" y="58" width="20" height="82"/><path d="M212 58l10 -18 10 18z"/><rect x="238" y="80" width="26" height="60"/><rect x="90" y="96" width="24" height="44"/><rect x="270" y="92" width="24" height="48"/></g>';
    const balloon = '<g class="tw-float"><ellipse cx="320" cy="56" rx="34" ry="38" fill="' + PINK + '" stroke="#000" stroke-width="2"/><path d="M290 44q30 -24 60 0" stroke="' + YEL + '" stroke-width="6" fill="none"/>' +
      '<text x="320" y="64" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="#fff" stroke="#000" stroke-width="1" paint-order="stroke">WHACK</text><path d="M312 92h16l-4 10h-8z" fill="' + MINT + '"/><path d="M320 102v30" stroke="#333" stroke-width="1.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tw-s5)"/>' + skyl + balloon +
      '<rect x="0" y="136" width="400" height="90" fill="#7a4636"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#6a3a2c" stroke-width="1"/>').join("") +
      tag("WHACK", 24, 196, 54, PINK, -6) + tag("DIZZLE DIZZ", 30, 218, 18, YEL, -3) + tag("BIG WHACK", 170, 212, 18, MINT, -4) +
      '<rect x="0" y="226" width="400" height="34" fill="#5d5a55"/><rect x="0" y="224" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="341" y="112" width="6" height="114" fill="#2f2f2f"/>' + sign(302, 116, 84, "N 18th St") + sign(292, 142, 104, "W Oxford St") +
      '<g class="tw-sp"><circle cx="200" cy="178" r="3" fill="' + MINT + '" opacity=".8"/></g><g class="tw-sp tw-sp2"><circle cx="206" cy="172" r="2" fill="' + PINK + '" opacity=".7"/></g>',
      sky("tw-s5", "#5a3a8a", "#ffb3c8"));
  }

  window.SCENES = { twstation: twstation, twmuseum: twmuseum, twstables: twstables, twschool: twschool, twcorner: twcorner };
})();
