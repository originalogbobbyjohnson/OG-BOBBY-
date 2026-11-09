/* fredhammond scenes (Regions tab: DETROIT; Northwest Detroit / the 8 Mile line). CSS classes prefixed fh- (the page's own anim-train is kept).
   1 DDOT's 10 Greenfield bus pulling up to the 8 Mile & Greenfield stop, Southfield right across the line.
   2 His mother's church choir loft, where he was singing by 12: robes swaying, organ pipes, a bass guitar leaning by the risers.
   3 Out on the road as the bass player for The Winans: the bass on its stand, amp stack, spotlights sweeping.
   4 Face to Face, the studio he opened in Southfield: mixing desk with bouncing meters, Radical for Christ singing behind the glass.
   5 Greenfield Rd and W 8 Mile Rd: green signs, FRED tagged on the wall, Southfield Town Center's gold glass towers behind.
   No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fhblink{0%,100%{opacity:.25}50%{opacity:1}}.fh-bl{animation:fhblink 1.4s ease-in-out infinite}.fh-bl2{animation-delay:-.7s}' +
    '@keyframes fhsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.fh-sway{animation:fhsway 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.fh-s2{animation-delay:-.4s}.fh-s3{animation-delay:-.8s}.fh-s4{animation-delay:-1.2s}' +
    '@keyframes fhnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(12px,-56px);opacity:0}}.fh-note{animation:fhnote 3s ease-out infinite}.fh-n2{animation-delay:-1s}.fh-n3{animation-delay:-2s}' +
    '@keyframes fhmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.fh-m{animation:fhmeter .8s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.fh-m2{animation-delay:-.3s}.fh-m3{animation-delay:-.55s}' +
    '@keyframes fhsweep{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.fh-sweep{animation:fhsweep 3s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 0}.fh-sw2{animation-delay:-1.5s}' +
    '@keyframes fhglint{0%,100%{opacity:.2}50%{opacity:.8}}.fh-glint{animation:fhglint 2.2s ease-in-out infinite}' +
    '@keyframes fhspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.fh-sp{animation:fhspray 1.4s ease-out infinite}.fh-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "fh-bl" + (i % 2 ? " fh-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const brick = (x, y, w, h, base, line) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>' + Array.from({ length: Math.floor(h / 10) }, (_, r) => '<path d="M' + x + ' ' + (y + 10 + r * 10) + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>').join("");
  const BLUE = "#5ab4ff", GOLD = "#f5b82e", RED = "#e8574a", DGRN = "#0f7a4a";
  const robe = (x, base, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (base - 38) + '" r="6.5" fill="#2a1a12"/>' +
    '<path d="M' + (x - 11) + ' ' + base + 'l3 -28q8 -6 16 0l3 28z" fill="' + c + '"/><path d="M' + (x - 6) + ' ' + (base - 30) + 'q6 5 12 0" stroke="' + GOLD + '" stroke-width="2" fill="none"/></g>';
  const note = (x, y, c, cls) => '<g class="fh-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 17) + '" width="1.8" height="17" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 17) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  /* electric bass, headstock up; x,y = bottom of body */
  const bass = (x, y, s, col) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-3" y="-118" width="6" height="74" fill="#6a4a2a"/>' +
    '<rect x="-5" y="-132" width="10" height="16" rx="2" fill="#3a2a1a"/><circle cx="-7" cy="-128" r="2" fill="#ccc"/><circle cx="7" cy="-128" r="2" fill="#ccc"/><circle cx="-7" cy="-120" r="2" fill="#ccc"/><circle cx="7" cy="-120" r="2" fill="#ccc"/>' +
    '<path d="M-16 -50q-10 -6 -4 -14q10 0 14 6h12q4 -10 12 -10q6 8 -2 16q8 10 4 28q-8 24 -28 24t-24 -24q-2 -14 16 -26z" fill="' + col + '" stroke="#111" stroke-width="2"/>' +
    '<rect x="-10" y="-34" width="20" height="5" fill="#222"/><rect x="-10" y="-22" width="20" height="5" fill="#222"/>' +
    '<path d="M-1.5 -116v100M1.5 -116v100" stroke="#ddd" stroke-width=".6"/></g>';
  const gold = (x, w, h, base) => '<g><path d="M' + x + ' ' + base + 'v-' + h + 'l' + (w / 2) + ' -10l' + (w / 2) + ' 10v' + h + 'z" fill="#c9962e"/>' +
    '<path d="M' + (x + w / 2) + ' ' + (base - h - 10) + 'l' + (w / 2) + ' 10v' + h + 'h-' + (w / 2) + 'z" fill="#a8761c"/>' +
    Array.from({ length: Math.floor(h / 12) }, (_, i) => '<path d="M' + x + ' ' + (base - 8 - i * 12) + 'h' + w + '" stroke="#7a5414" stroke-width="1" opacity=".6"/>').join("") +
    '<rect class="fh-glint" x="' + (x + 3) + '" y="' + (base - h + 4) + '" width="' + (w / 2 - 6) + '" height="' + (h - 10) + '" fill="#ffe6a0" opacity=".3"/></g>';

  /* 1. DDOT 10 Greenfield bus at 8 Mile & Greenfield */
  function fhstation() {
    let win = ""; for (let i = 0; i < 6; i++) win += '<rect x="' + (78 + i * 44) + '" y="118" width="36" height="28" rx="3" fill="#2d3e4e"/><rect x="' + (80 + i * 44) + '" y="120" width="10" height="24" fill="#5a7590" opacity=".5"/>';
    const bus = '<g class="anim-train"><rect x="40" y="104" width="320" height="80" rx="10" fill="#f3f5f2" stroke="#7b848c" stroke-width="2"/>' +
      '<rect x="40" y="150" width="320" height="10" fill="' + DGRN + '"/><rect x="40" y="162" width="320" height="4" fill="' + GOLD + '"/>' + win +
      '<rect x="44" y="114" width="28" height="44" rx="3" fill="#2d3e4e"/><rect x="40" y="104" width="320" height="10" rx="5" fill="#d9ded9"/>' +
      '<rect x="270" y="107" width="86" height="9" rx="2" fill="#111"/><text x="313" y="114.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb020">10 GREENFIELD</text>' +
      '<circle cx="96" cy="186" r="15" fill="#1b1b1b"/><circle cx="96" cy="186" r="6" fill="#888"/><circle cx="304" cy="186" r="15" fill="#1b1b1b"/><circle cx="304" cy="186" r="6" fill="#888"/>' +
      '<circle class="fh-bl" cx="355" cy="172" r="3" fill="#ffdc7a"/></g>';
    const stop = '<rect x="22" y="70" width="4" height="130" fill="#6a6a70"/><rect x="2" y="54" width="70" height="44" rx="4" fill="#111" stroke="#ddd" stroke-width="1.5"/>' +
      '<text x="37" y="68" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">DDOT</text><rect x="10" y="72" width="54" height="13" rx="6.5" fill="' + DGRN + '"/>' +
      '<text x="37" y="82" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">10</text><text x="37" y="94" text-anchor="middle" ' + font + ' font-size="5.8" fill="#ddd">8 MILE &amp; GREENFIELD</text>';
    const line = '<rect x="268" y="40" width="126" height="24" rx="3" fill="#1d5fa8" stroke="#fff" stroke-width="1.5"/><text x="331" y="56" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">SOUTHFIELD CITY LIMIT</text>';
    return svg('<rect width="400" height="260" fill="url(#fhs1)"/>' + stars(24) + gold(160, 26, 70, 150) + gold(196, 30, 84, 150) + gold(236, 26, 64, 150) +
      '<rect y="146" width="400" height="8" fill="#20283a"/>' + line +
      '<rect y="196" width="400" height="64" fill="#2a2a2e"/><path d="M0 226h400" stroke="' + GOLD + '" stroke-width="2" stroke-dasharray="20 14"/><rect y="192" width="400" height="6" fill="#55555c"/>' +
      bus + stop + '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="11" fill="' + BLUE + '" letter-spacing="2">8 MILE · THE DETROIT LINE</text>',
      sky("fhs1", "#08122a", "#28406a"));
  }

  /* 2. Mom's church choir loft */
  function fhchoir() {
    let pipes = ""; for (let i = 0; i < 15; i++) { const h = 50 + Math.abs(7 - i) * -4 + 28; pipes += '<rect x="' + (110 + i * 12) + '" y="' + (90 - h) + '" width="9" height="' + h + '" rx="3" fill="#d8b45a" stroke="#8a6a2a" stroke-width="1"/>'; }
    const loft = '<rect x="60" y="94" width="280" height="12" fill="#5a3420"/>' + '<rect x="40" y="170" width="320" height="40" fill="#6a3e24"/><rect x="40" y="166" width="320" height="6" fill="#8a5a34"/>';
    let row1 = "", row2 = ""; for (let i = 0; i < 7; i++) row1 += robe(110 + i * 30, 138, "#1f4f9a", "fh-sway " + ["", "fh-s2", "fh-s3", "fh-s4"][i % 4]);
    for (let i = 0; i < 6; i++) row2 += robe(125 + i * 30, 168, "#1f4f9a", "fh-sway " + ["fh-s3", "fh-s4", "", "fh-s2"][i % 4]);
    const window1 = '<path d="M20 160v-90q20 -26 40 0v90z" fill="#6aa0e0" opacity=".55"/><path d="M340 160v-90q20 -26 40 0v90z" fill="#e0a06a" opacity=".55"/>';
    return svg('<rect width="400" height="260" fill="url(#fhs2)"/>' + window1 + pipes + loft + row1 + row2 + bass(340, 206, .6, RED) +
      note(150, 90, GOLD) + note(250, 86, BLUE, "fh-n2") + note(200, 70, "#fff", "fh-n3") +
      '<rect y="210" width="400" height="50" fill="#2a160c"/><text x="200" y="242" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '" letter-spacing="2">MOM\'S CHOIR · SINGING AT TWELVE</text>',
      sky("fhs2", "#3a2418", "#6a4430"));
  }

  /* 3. On the road as The Winans' bass player */
  function fhwinans() {
    const beams = '<path class="fh-sweep" d="M110 0l-40 210h80z" fill="#cfe6ff" opacity=".22"/><path class="fh-sweep fh-sw2" d="M290 0l-40 210h80z" fill="#ffe6b0" opacity=".22"/>';
    const amp = (x) => '<rect x="' + x + '" y="110" width="70" height="44" rx="3" fill="#1a1a1e" stroke="#444" stroke-width="2"/><rect x="' + x + '" y="156" width="70" height="44" rx="3" fill="#1a1a1e" stroke="#444" stroke-width="2"/>' +
      [0, 1].map(k => '<circle cx="' + (x + 20 + k * 30) + '" cy="178" r="11" fill="#333"/><circle cx="' + (x + 20 + k * 30) + '" cy="178" r="4" fill="#555"/>').join("") +
      '<rect x="' + (x + 6) + '" y="116" width="58" height="8" fill="#2a2a30"/>' + [0, 1, 2, 3, 4].map(k => '<circle cx="' + (x + 12 + k * 11) + '" cy="132" r="2.5" fill="#bbb"/>').join("");
    const stand = '<path d="M196 206l8 -30 8 30" stroke="#666" stroke-width="3" fill="none"/>';
    const banner = '<rect x="120" y="22" width="160" height="30" rx="4" fill="#120c22" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="42" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '" letter-spacing="2">THE WINANS</text>';
    return svg('<rect width="400" height="260" fill="url(#fhs3)"/>' + stars(18) + banner + beams + amp(40) + amp(290) + stand + bass(204, 196, .85, BLUE) +
      note(130, 120, GOLD) + note(270, 116, BLUE, "fh-n2") +
      '<rect y="206" width="400" height="54" fill="#121018"/><rect y="204" width="400" height="4" fill="' + GOLD + '"/>' +
      '<text x="200" y="240" text-anchor="middle" ' + font + ' font-size="11" fill="' + BLUE + '" letter-spacing="2">ON THE ROAD · ON BASS</text>',
      sky("fhs3", "#05040c", "#22183a"));
  }

  /* 4. Face to Face studio, Southfield */
  function fhstudio() {
    const glass = '<rect x="40" y="26" width="320" height="96" rx="4" fill="#1a2a40" stroke="#6a7a8a" stroke-width="4"/><path d="M60 30l40 88M180 30l40 88" stroke="#fff" stroke-width="3" opacity=".08"/>';
    let ch = ""; for (let i = 0; i < 8; i++) ch += robe(78 + i * 35, 118, i % 2 ? "#1f4f9a" : "#2a6abf", "fh-sway " + ["", "fh-s2", "fh-s3", "fh-s4"][i % 4]);
    const desk = '<path d="M20 160l20 -26h320l20 26z" fill="#2a2a32"/><rect x="20" y="160" width="360" height="40" fill="#1c1c22"/>';
    let faders = ""; for (let i = 0; i < 16; i++) faders += '<rect x="' + (48 + i * 19) + '" y="140" width="3" height="16" fill="#555"/><rect x="' + (45 + i * 19) + '" y="' + (144 + (i * 5) % 9) + '" width="9" height="4" fill="#ddd"/>';
    let meters = ""; for (let i = 0; i < 10; i++) meters += '<rect class="fh-m ' + ["", "fh-m2", "fh-m3"][i % 3] + '" x="' + (110 + i * 18) + '" y="166" width="10" height="26" fill="' + (i % 3 ? "#5ad17a" : GOLD) + '"/>';
    const sign = '<rect x="150" y="6" width="100" height="16" rx="3" fill="#2a0a0a"/><rect class="fh-bl" x="152" y="8" width="96" height="12" rx="2" fill="' + RED + '"/><text x="200" y="18" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">RECORDING</text>';
    return svg('<rect width="400" height="260" fill="#14121a"/>' + glass + ch + note(120, 70, GOLD) + note(280, 66, BLUE, "fh-n2") + sign + desk + faders + meters + bass(376, 206, .42, RED) +
      '<rect y="214" width="400" height="46" fill="#0c0b10"/><text x="200" y="242" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '" letter-spacing="2">FACE TO FACE · SOUTHFIELD</text>');
  }

  /* 5. Greenfield Rd and W 8 Mile Rd */
  function fhcorner() {
    const towers = gold(170, 34, 96, 122) + gold(214, 40, 112, 122) + gold(262, 34, 88, 122) + gold(130, 26, 64, 122);
    const wall = brick(0, 120, 400, 90, "#4a3a3e", "#382a2e") +
      tag("FRED", 30, 184, 48, BLUE, -8) + tag("PRAISE", 156, 198, 30, GOLD, -4) + tag("RFC", 196, 152, 24, RED, -10) +
      '<circle class="fh-sp" cx="140" cy="150" r="3" fill="' + BLUE + '"/><circle class="fh-sp fh-sp2" cx="146" cy="158" r="2" fill="' + GOLD + '"/>';
    const pole = '<rect x="334" y="40" width="6" height="170" fill="#6a6a70"/>' + sign(270, 42, 126, "GREENFIELD RD") + sign(290, 68, 96, "W 8 MILE RD");
    return svg('<rect width="400" height="260" fill="url(#fhs5)"/>' + stars(30) + towers + wall + pole +
      '<rect y="210" width="400" height="50" fill="#2a2a2e"/><rect y="206" width="400" height="6" fill="#77777e"/>' +
      '<text x="200" y="242" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '" letter-spacing="2">NORTHWEST DETROIT</text>',
      sky("fhs5", "#060c20", "#2a3a6a"));
  }

  window.SCENES = { fhstation, fhchoir, fhwinans, fhstudio, fhcorner };
})();
