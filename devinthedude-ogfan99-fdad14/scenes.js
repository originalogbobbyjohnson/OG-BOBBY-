/* devinthedude scenes (Regions tab: Houston + Texas; the South Side). CSS classes prefixed dvd- (the page's own anim-train is kept).
   1 Stadium Park/Astrodome on the METRORail Red Line: at-grade platform with canopy, the white light-rail car gliding in.
   2 Eagle St, Third Ward: the little house where Odd Squad cut Fadanuf Fa Erybody in Rob Quest's bedroom, window glowing, tape reels turning.
   3 The studio in a small Bellaire industrial park: roll-up doors, one open on the mixing board, meters bouncing (What a Job).
   4 Hobby Airport on the South Side: a jet coming in with its landing gear down over the runway lights (Landing Gear).
   5 Kirby Dr and the 610 Loop: green signs, DEVIN tagged, a gold '70s Cadillac rolling by, the Astrodome behind. No 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dvdreel{from{transform:rotate(0)}to{transform:rotate(360deg)}}.dvd-reel{animation:dvdreel 2.4s linear infinite}' +
    '@keyframes dvdmeter{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.6)}}.dvd-m{animation:dvdmeter .9s ease-in-out infinite;transform-box:fill-box;transform-origin:bottom}.dvd-m2{animation-delay:-.3s}.dvd-m3{animation-delay:-.6s}' +
    '@keyframes dvdplane{0%{transform:translate(-120px,-50px)}100%{transform:translate(460px,40px)}}.dvd-plane{animation:dvdplane 9s linear infinite}' +
    '@keyframes dvdcar{from{transform:translateX(-170px)}to{transform:translateX(560px)}}.dvd-car{animation:dvdcar 10s linear infinite}' +
    '@keyframes dvdblink{0%,100%{opacity:.25}50%{opacity:1}}.dvd-bl{animation:dvdblink 1.2s ease-in-out infinite}.dvd-bl2{animation-delay:-.4s}.dvd-bl3{animation-delay:-.8s}' +
    '@keyframes dvdflk{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.dvd-flk{animation:dvdflk 2.4s infinite}' +
    '@keyframes dvdnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(24px,-60px);opacity:0}}.dvd-note{animation:dvdnote 2.6s ease-out infinite}.dvd-n2{animation-delay:-.9s}.dvd-n3{animation-delay:-1.7s}' +
    '@keyframes dvdspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dvd-sp{animation:dvdspray 1.4s ease-out infinite}.dvd-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const palm = (x, base, s) => '<g><path d="M' + x + ' ' + base + 'q' + (4 * s) + ' ' + (-40 * s) + ' ' + (-2 * s) + ' ' + (-80 * s) + '" stroke="#7a5a3a" stroke-width="' + (5 * s) + '" fill="none"/>' +
    [[-30, 6], [30, 8], [-24, -10], [26, -8], [0, -18]].map(f => '<path d="M' + (x - 2 * s) + ' ' + (base - 80 * s) + 'q' + (f[0] * 0.5 * s) + ' ' + ((f[1] - 14) * s) + ' ' + (f[0] * s) + ' ' + (f[1] * s) + '" stroke="#3f7a3a" stroke-width="' + (6 * s) + '" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const oak = (x, base, s) => '<g><rect x="' + (x - 3 * s) + '" y="' + (base - 30 * s) + '" width="' + (6 * s) + '" height="' + (30 * s) + '" fill="#5b4330"/>' +
    [[-22, -40, 22], [10, -48, 26], [26, -34, 18], [-6, -30, 20]].map(c => '<ellipse cx="' + (x + c[0] * s) + '" cy="' + (base + c[1] * s) + '" rx="' + (c[2] * s) + '" ry="' + (c[2] * 0.7 * s) + '" fill="#3f6b34"/>').join("") + '</g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "dvd-bl" + (i % 2 ? " dvd-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 80) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const RED = "#e31837", GREEN = "#9ee06b", GOLD = "#ffcf5a", CORAL = "#ff8c69";

  /* 1. Stadium Park/Astrodome, METRORail Red Line */
  function dvdstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="124" width="36" height="24" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><path d="M24 182V122q0 -12 14 -12h300q24 0 30 30v42z" fill="#f1f2f4" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="24" y="156" width="344" height="8" fill="' + RED + '"/><rect x="24" y="166" width="344" height="3" fill="#9aa3ab"/>' +
      '<path d="M340 114q22 4 26 30h-26z" fill="#1c2630"/><circle cx="356" cy="174" r="3.5" fill="#fff6c2"/>' +
      '<rect x="200" y="100" width="70" height="10" fill="#8a939b"/><path d="M210 100l25 -26l25 26" stroke="#555" stroke-width="2" fill="none"/>' +
      '<rect x="40" y="112" width="84" height="10" rx="2" fill="#111"/><text x="82" y="120" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">RED · FANNIN SOUTH</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dvds1)"/>' +
      '<path d="M0 72h400" stroke="#333" stroke-width="1.5"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="68" width="6" height="120" fill="#7a8088"/><path d="M' + (x - 22) + ' 72h44" stroke="#7a8088" stroke-width="3"/>').join("") +
      palm(16, 186, 1) + palm(384, 186, 1) +
      '<rect x="0" y="86" width="400" height="8" fill="' + RED + '"/>' + [100, 300].map(x => '<path d="M' + (x - 60) + ' 86l60 -18l60 18z" fill="#d9d4ca"/>').join("") +
      train +
      '<rect x="0" y="186" width="400" height="8" fill="#f2c200"/><rect x="0" y="194" width="400" height="66" fill="#a8a296"/><path d="M0 226h400" stroke="#968f83" stroke-width="2"/>' +
      '<rect x="40" y="204" width="320" height="38" rx="3" fill="#111"/><text x="54" y="221" ' + font + ' font-size="13" fill="#fff">Stadium Park/</text><text x="54" y="236" ' + font + ' font-size="13" fill="#fff">Astrodome</text>' + badge(300, 223, "RED", RED),
      sky("dvds1", "#6aa7dd", "#f7dcb4"));
  }

  /* 2. Eagle St, Third Ward: the bedroom studio where Odd Squad started */
  function dvdeagle() {
    const reel = (cx) => '<g class="dvd-reel" style="transform-origin:' + cx + 'px 150px"><circle cx="' + cx + '" cy="150" r="9" fill="#3a2a22" stroke="#d9c7a2" stroke-width="2"/><path d="M' + (cx - 7) + ' 150h14M' + cx + ' 143v14" stroke="#d9c7a2" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dvds2)"/>' + stars(26) +
      '<circle cx="340" cy="44" r="16" fill="#f4efd2"/><circle cx="347" cy="40" r="14" fill="#141a33"/>' +
      oak(40, 196, 1.1) +
      '<path d="M100 96l100 -50l100 50z" fill="#5a4a3e" stroke="#2a201a" stroke-width="2"/><rect x="110" y="96" width="180" height="96" fill="#d8cdb4" stroke="#8a7c62" stroke-width="2"/>' +
      Array.from({ length: 11 }, (_, i) => '<path d="M110 ' + (104 + i * 8) + 'h180" stroke="#c4b89c" stroke-width="1"/>').join("") +
      '<rect x="128" y="120" width="92" height="58" fill="#ffcf7a" class="dvd-flk"/><rect x="128" y="120" width="92" height="58" fill="none" stroke="#5a4a3e" stroke-width="3"/><path d="M174 120v58" stroke="#5a4a3e" stroke-width="2"/>' +
      '<rect x="136" y="138" width="76" height="26" rx="3" fill="#2a2a30"/>' + reel(156) + reel(192) + '<rect x="166" y="156" width="16" height="5" fill="#d9c7a2"/>' +
      '<rect x="238" y="128" width="34" height="64" fill="#6b4a32" stroke="#3a2a1e" stroke-width="2"/><circle cx="266" cy="162" r="2" fill="#d9c7a2"/>' +
      '<rect x="100" y="188" width="200" height="8" fill="#9a8c70"/><rect x="230" y="192" width="50" height="6" fill="#bdb6a8"/>' +
      [0, 1, 2].map(i => '<g class="dvd-note' + (i ? " dvd-n" + (i + 1) : "") + '"><text x="' + (190 + i * 14) + '" y="118" ' + font + ' font-size="16" fill="' + [GOLD, GREEN, CORAL][i] + '">' + ["&#9834;", "&#9835;", "&#9834;"][i] + '</text></g>').join("") +
      '<rect x="0" y="196" width="400" height="64" fill="#3f5a34"/><rect x="0" y="222" width="400" height="38" fill="#4e4e54"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="11" fill="#f2efe8">EAGLE ST · THIRD WARD · ODD SQUAD</text>',
      sky("dvds2", "#141a33", "#3b3260"));
  }

  /* 3. The studio in a little Bellaire industrial park */
  function dvdstudio() {
    const unit = (x, open) => '<rect x="' + x + '" y="96" width="100" height="100" fill="#b9bec4" stroke="#7d848c" stroke-width="2"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M' + (x + 4 + i * 8) + ' 98v96" stroke="#a6acb3" stroke-width="1"/>').join("") +
      (open ? '<rect x="' + (x + 16) + '" y="126" width="68" height="70" fill="#1a1820"/><rect x="' + (x + 16) + '" y="120" width="68" height="8" fill="#8a9097"/>' +
        '<rect x="' + (x + 22) + '" y="160" width="56" height="16" rx="2" fill="#3a3a44"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (x + 25 + i * 7) + '" y="164" width="3" height="9" fill="#d0d0d8"/>').join("") +
        [0, 1, 2].map(i => '<rect class="dvd-m' + (i ? " dvd-m" + (i + 1) : "") + '" x="' + (x + 32 + i * 12) + '" y="136" width="6" height="18" fill="' + [GREEN, GOLD, CORAL][i] + '"/>').join("") +
        '<rect x="' + (x + 26) + '" y="140" width="10" height="14" fill="#2a2a30"/><rect x="' + (x + 66) + '" y="140" width="10" height="14" fill="#2a2a30"/>'
        : '<rect x="' + (x + 16) + '" y="126" width="68" height="70" fill="#9aa0a7"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (x + 16) + ' ' + (132 + i * 8) + 'h68" stroke="#868c93" stroke-width="2"/>').join("")) +
      '<rect x="' + (x + 30) + '" y="104" width="40" height="10" fill="#e8ecf0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dvds3)"/>' + stars(18) +
      palm(20, 196, 0.9) +
      unit(46, false) + unit(150, true) + unit(254, false) +
      '<circle class="dvd-bl" cx="200" cy="90" r="4" fill="#ffe9a8"/><rect x="198" y="90" width="4" height="8" fill="#555"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5d5a55"/>' + [60, 140, 220, 300].map(x => '<path d="M' + x + ' 200v20" stroke="#e8ecf2" stroke-width="3"/>').join("") +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#f2efe8">THE STUDIO · BELLAIRE · WHAT A JOB</text>',
      sky("dvds3", "#1c1838", "#5a3a5a"));
  }

  /* 4. Hobby Airport, landing gear down */
  function dvdhobby() {
    const plane = '<g class="dvd-plane"><path d="M10 60q0 -8 12 -8h86q14 0 20 8q-6 8 -20 8h-86q-12 0 -12 -8z" fill="#f4f6f8" stroke="#5a646e" stroke-width="2"/>' +
      '<path d="M50 60l26 -26h12l-14 26z" fill="#d7dde3" stroke="#5a646e" stroke-width="1.5"/><path d="M54 62l22 22h12l-12 -22z" fill="#d7dde3" stroke="#5a646e" stroke-width="1.5"/>' +
      '<path d="M14 58l-8 -18h10l12 18z" fill="' + RED + '"/>' + Array.from({ length: 8 }, (_, i) => '<circle cx="' + (34 + i * 9) + '" cy="58" r="1.8" fill="#2c3d4d"/>').join("") +
      '<path d="M112 56q8 0 12 4h-12z" fill="#2c3d4d"/>' +
      '<path d="M66 68v10M96 68v10M114 66v10" stroke="#444" stroke-width="2.5"/><circle cx="66" cy="80" r="3" fill="#222"/><circle cx="96" cy="80" r="3" fill="#222"/><circle cx="114" cy="78" r="3" fill="#222"/>' +
      '<circle class="dvd-bl" cx="120" cy="62" r="2" fill="#fff6c2"/></g>';
    const tower = '<rect x="318" y="96" width="18" height="96" fill="#cfc8b8" stroke="#8a8578" stroke-width="2"/><path d="M306 96l6 -24h30l6 24z" fill="#2c3d4d" stroke="#8a8578" stroke-width="2"/><rect x="304" y="66" width="46" height="8" fill="#cfc8b8"/><circle class="dvd-bl" cx="327" cy="60" r="3" fill="' + RED + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dvds4)"/>' + stars(10) +
      '<rect x="20" y="168" width="140" height="24" fill="#8a8578"/><rect x="20" y="164" width="140" height="6" fill="#5a5650"/>' + tower + plane +
      '<rect x="0" y="192" width="400" height="68" fill="#4a5a3a"/><path d="M0 214l400 -10v30l-400 14z" fill="#3a3a40"/><path d="M20 224l360 -12" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="18 14"/>' +
      Array.from({ length: 10 }, (_, i) => '<circle class="dvd-bl' + (i % 3 ? " dvd-bl" + (i % 3 + 1) : "") + '" cx="' + (20 + i * 40) + '" cy="' + (214 - i) + '" r="2.5" fill="' + (i % 2 ? GOLD : "#7fd3ff") + '"/>').join("") +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#f2efe8">HOBBY AIRPORT · LANDING GEAR</text>',
      sky("dvds4", "#3a5a8a", "#f2a86a"));
  }

  /* 5. Kirby Dr and the 610 Loop, the Astrodome behind */
  function dvdcorner() {
    const dome = '<g><ellipse cx="270" cy="128" rx="120" ry="12" fill="#8a8f96"/><path d="M150 128q0 -60 120 -64q120 4 120 64z" fill="#dfe3e8" stroke="#9aa1a8" stroke-width="2"/>' +
      '<g clip-path="url(#dvddome)">' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (170 + i * 25) + ' 130Q' + (270 + (170 + i * 25 - 270) * 0.55) + ' 90 270 62" stroke="#b8bec5" stroke-width="1.5" fill="none"/>').join("") +
      '<path d="M150 112q120 -18 240 0M150 96q120 -18 240 0M150 80q120 -18 240 0" stroke="#b8bec5" stroke-width="1.5" fill="none"/></g>' +
      '<rect x="150" y="124" width="240" height="6" fill="#6b7178"/></g>';
    const caddy = '<g class="dvd-car"><path d="M8 236v-12q0 -6 8 -8l22 -4l18 -14h62l18 14l26 4q8 2 8 8v12z" fill="' + GOLD + '" stroke="#6b4a12" stroke-width="2"/><path d="M60 200h24v12h-36zM90 200h24l14 12h-38z" fill="#2a3a4a"/>' +
      '<rect x="8" y="224" width="162" height="3" fill="#fff6dc"/><circle cx="42" cy="238" r="9" fill="#111"/><circle cx="42" cy="238" r="4" fill="#d8dde2"/><circle cx="140" cy="238" r="9" fill="#111"/><circle cx="140" cy="238" r="4" fill="#d8dde2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dvds5)"/>' + stars(12) + dome +
      '<rect x="0" y="130" width="400" height="88" fill="#7a3f2c"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      tag("DEVIN", 18, 192, 58, GREEN, -6) + tag("ODD SQUAD", 196, 206, 18, GOLD, -4) + tag("THE DUDE", 30, 214, 15, CORAL, -3) +
      '<rect x="0" y="218" width="400" height="42" fill="#5d5a55"/><rect x="0" y="216" width="400" height="4" fill="#e8ecf2"/>' + caddy +
      '<rect x="336" y="96" width="6" height="122" fill="#2f2f2f"/>' + sign(268, 98, 120, "Kirby Dr") + sign(278, 124, 100, "Loop 610") +
      '<rect x="8" y="110" width="4" height="108" fill="#222"/><circle class="dvd-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="dvd-sp"><circle cx="170" cy="166" r="3" fill="' + GREEN + '" opacity=".7"/></g><g class="dvd-sp dvd-sp2"><circle cx="176" cy="160" r="2" fill="' + GREEN + '" opacity=".6"/></g>',
      sky("dvds5", "#1b1640", "#e08a5a") + '<clipPath id="dvddome"><path d="M150 128q0 -60 120 -64q120 4 120 64z"/></clipPath>');
  }

  window.SCENES = { dvdstation: dvdstation, dvdeagle: dvdeagle, dvdstudio: dvdstudio, dvdhobby: dvdhobby, dvdcorner: dvdcorner };
})();
