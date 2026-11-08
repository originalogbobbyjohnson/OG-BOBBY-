/* luthervandross scenes (NYC map, Manhattan: Lower East Side, raised in the Alfred E. Smith Houses until about nine, then the Bronx). 400 x 260 SVGs.
   CSS classes and ids prefixed lvd- (the page's own anim-train is kept on the train).
   0 East Broadway on the F: underground, white tile with a mosaic band, black sign with the orange F bullet, a silver F train pulling in.
   1 The Alfred E. Smith Houses: the red-brick towers on the Lower East Side, a little boy at a toy piano in a lit window (he taught himself piano by ear at three), notes rising.
   2 William Howard Taft High School in the Bronx: the big brick school where he started the first fan club for his favorite singer, a club banner swaying.
   3 The Harlem Cultural Festival stage, summer of '69 (no year drawn): his group Listen My Brother on the bill, stage lights sweeping, crowd swaying.
   4 Madison St and Catherine St by the Smith Houses: green signs, LUTHER tagged, the Municipal Building and its gold statue shining behind. */
(function () {
  const W = 400, H = 260;
  const CHAMP = "#f4d9a0", ORANGE = "#ff6319", PURP = "#b07cff", BRICK = "#a24d36", GOLD = "#e8b84a";
  const css = '<style>' +
    '@keyframes lvdflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.lvd-flk{animation:lvdflick 2.6s infinite}.lvd-flk2{animation-delay:.9s}' +
    '@keyframes lvdnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(16px,-70px);opacity:0}}.lvd-note{animation:lvdnote 3s ease-out infinite}.lvd-n2{animation-delay:-1s}.lvd-n3{animation-delay:-2s}' +
    '@keyframes lvdsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.lvd-sway{transform-box:fill-box;transform-origin:50% 100%;animation:lvdsway 2.2s ease-in-out infinite}.lvd-sw2{animation-delay:-1.1s}' +
    '@keyframes lvdban{0%,100%{transform:skewY(-1.5deg)}50%{transform:skewY(1.5deg)}}.lvd-ban{transform-box:fill-box;transform-origin:0 50%;animation:lvdban 3s ease-in-out infinite}' +
    '@keyframes lvdspot{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.lvd-spot{transform-box:fill-box;transform-origin:50% 0%;animation:lvdspot 4s ease-in-out infinite}.lvd-sp2{animation-delay:-2s}' +
    '@keyframes lvdglow{0%,100%{opacity:.55}50%{opacity:1}}.lvd-glow{animation:lvdglow 2.4s ease-in-out infinite}' +
    '@keyframes lvdspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.lvd-sp{animation:lvdspray 1.4s ease-out infinite}.lvd-spb{animation-delay:.5s}' +
    '@keyframes lvdwalk{from{transform:translateX(-30px)}to{transform:translateX(430px)}}.lvd-walk{animation:lvdwalk 13s linear infinite}' +
    '@keyframes lvdbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-20px)}}.lvd-bird{animation:lvdbird 11s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const bullet = (x, y, r, txt, c, tc) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/><text x="' + x + '" y="' + (y + r * .42) + '" text-anchor="middle" ' + font + ' font-size="' + (r * 1.25) + '" fill="' + (tc || "#fff") + '">' + txt + '</text>';
  const note = (cls, x, y, c) => '<g class="lvd-note ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="4" fill="' + c + '"/><rect x="' + (x + 4) + '" y="' + (y - 18) + '" width="2" height="18" fill="' + c + '"/><path d="M' + (x + 6) + ' ' + (y - 18) + 'q8 4 6 10" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
  const tower = (x, y, w, h, seed) => {
    let win = "";
    for (let r = 0; r < Math.floor((h - 8) / 10); r++) for (let c = 0; c < Math.floor((w - 6) / 9); c++) {
      const on = ((r * 5 + c * 7 + seed) % 6) === 0;
      win += '<rect class="' + (on && (r + c) % 2 ? "lvd-flk" : "") + '" x="' + (x + 5 + c * 9) + '" y="' + (y + 7 + r * 10) + '" width="5" height="6" fill="' + (on ? "#ffd98a" : "#3b2420") + '"/>';
    }
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + BRICK + '"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#733426"/>' + win;
  };

  /* 0. East Broadway on the F, underground */
  function lvdstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 42) + '" y="128" width="28" height="22" rx="3" fill="#d8ecfa" opacity=".9"/>').join("");
    const tr = '<g class="anim-train"><rect x="16" y="116" width="324" height="70" rx="10" fill="#c7ccd3" stroke="#6b7280" stroke-width="2"/>' + win +
      '<rect x="16" y="160" width="324" height="4" fill="#8a9098"/>' + bullet(324, 138, 10, "F", ORANGE) +
      '<rect x="150" y="120" width="24" height="62" rx="2" fill="none" stroke="#6b7280" stroke-width="2"/><circle cx="334" cy="176" r="4" fill="#fff6c2"/></g>';
    const tiles = Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 0v104" stroke="#d6d2c6" stroke-width="1"/>').join("") + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (i * 10) + 'h400" stroke="#d6d2c6" stroke-width="1"/>').join("");
    const mosaic = Array.from({ length: 40 }, (_, i) => '<rect x="' + (i * 10) + '" y="86" width="10" height="10" fill="' + ["#7a2e3a", "#c98a3a", "#2e5a7a", "#e8dcc0"][i % 4] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#ece8dc"/>' + tiles + mosaic +
      '<rect x="0" y="0" width="400" height="10" fill="#2a2d33"/>' + [40, 170, 300].map((x, i) => '<rect class="lvd-flk' + (i === 1 ? " lvd-flk2" : "") + '" x="' + x + '" y="2" width="60" height="5" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="104" width="400" height="84" fill="#1c1f25"/>' + tr +
      '<rect x="0" y="186" width="400" height="8" fill="#f2c200"/><rect x="0" y="194" width="400" height="66" fill="#8f8b84"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="194" width="40" height="66" fill="none" stroke="#7d7972" stroke-width="1"/>').join("") +
      '<rect x="60" y="24" width="280" height="50" rx="4" fill="#111"/><rect x="60" y="24" width="280" height="4" fill="#fff"/>' +
      '<text x="78" y="60" ' + font + ' font-size="26" fill="#fff">East Broadway</text>' + bullet(316, 49, 13, "F", ORANGE) +
      '<g class="lvd-walk"><circle cx="0" cy="214" r="5" fill="#2e2a26"/><rect x="-5" y="219" width="10" height="20" rx="3" fill="' + PURP + '"/></g>',
      "");
  }

  /* 1. The Alfred E. Smith Houses, Lower East Side */
  function lvdsmith() {
    return svg(
      '<rect width="400" height="260" fill="url(#lvds1)"/>' +
      tower(6, 40, 74, 160, 1) + tower(100, 20, 80, 180, 3) + tower(300, 34, 90, 166, 5) +
      '<g><rect x="196" y="60" width="90" height="140" fill="' + BRICK + '"/><rect x="196" y="60" width="90" height="4" fill="#733426"/>' +
      '<rect x="216" y="96" width="50" height="40" fill="#ffd98a"/><rect x="216" y="96" width="50" height="40" fill="none" stroke="#e9e2cf" stroke-width="3"/><path d="M241 96v40" stroke="#e9e2cf" stroke-width="2"/>' +
      '<rect x="224" y="122" width="34" height="10" fill="#3a2a22"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (226 + i * 6.4) + '" y="122" width="4" height="5" fill="#f4f1e8"/>').join("") +
      '<g class="lvd-sway"><circle cx="241" cy="110" r="6" fill="#5a3a26"/><rect x="235" y="116" width="12" height="8" rx="3" fill="' + PURP + '"/></g>' +
      Array.from({ length: 6 }, (_, r) => '<rect x="206" y="' + (150 + r * 8) + '" width="70" height="2" fill="#7a3a28" opacity="0"/>').join("") + '</g>' +
      note("", 270, 92, CHAMP) + note("lvd-n2", 252, 86, "#fff") + note("lvd-n3", 286, 100, GOLD) +
      '<rect x="0" y="196" width="400" height="64" fill="#7d7a72"/><rect x="0" y="196" width="400" height="5" fill="#9a968c"/>' +
      [70, 330].map(x => '<g><rect x="' + (x - 2) + '" y="172" width="5" height="28" fill="#5a3a22"/><circle cx="' + x + '" cy="166" r="16" fill="#2f6b3a"/><circle cx="' + (x + 10) + '" cy="172" r="10" fill="#3a7a44"/></g>').join("") +
      '<rect x="78" y="234" width="244" height="18" rx="3" fill="#111" opacity=".75"/><text x="200" y="247" text-anchor="middle" ' + font + ' font-size="9" fill="' + CHAMP + '" letter-spacing="1.5">ALFRED E. SMITH HOUSES · LOWER EAST SIDE</text>',
      sky("lvds1", "#141a3a", "#7a5a7a"));
  }

  /* 2. William Howard Taft High School, the Bronx */
  function lvdtaft() {
    const wins = Array.from({ length: 4 }, (_, r) => Array.from({ length: 12 }, (_, c) => '<rect x="' + (34 + c * 28) + '" y="' + (50 + r * 30) + '" width="16" height="20" fill="#cfe2ee"/><rect x="' + (34 + c * 28) + '" y="' + (50 + r * 30) + '" width="16" height="20" fill="none" stroke="#e8e0cc" stroke-width="2"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lvds2)"/>' +
      '<rect x="20" y="36" width="360" height="170" fill="#8a4a32"/><rect x="20" y="30" width="360" height="10" fill="#d8ccb0"/>' + wins +
      '<rect x="160" y="150" width="80" height="56" fill="#d8ccb0"/><rect x="174" y="164" width="22" height="42" fill="#3a2a22"/><rect x="204" y="164" width="22" height="42" fill="#3a2a22"/>' +
      '<rect x="110" y="8" width="180" height="20" rx="2" fill="#d8ccb0"/><text x="200" y="22" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="10" fill="#4a2a1a" letter-spacing="1">WILLIAM HOWARD TAFT H.S.</text>' +
      '<g class="lvd-ban"><rect x="56" y="134" width="96" height="40" rx="3" fill="' + PURP + '" stroke="#fff" stroke-width="2"/><text x="104" y="151" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">FAN CLUB</text><text x="104" y="166" text-anchor="middle" ' + font + ' font-size="8" fill="' + CHAMP + '">MEETS TODAY</text></g>' +
      '<rect x="0" y="206" width="400" height="54" fill="#8f8b84"/><rect x="0" y="206" width="400" height="4" fill="#aaa59c"/>' +
      '<g class="lvd-walk"><circle cx="0" cy="222" r="5" fill="#2e2a26"/><rect x="-5" y="227" width="10" height="20" rx="3" fill="' + ORANGE + '"/></g>' +
      note("", 270, 196, CHAMP) + note("lvd-n2", 300, 190, "#fff") +
      '<rect x="296" y="232" width="98" height="20" rx="3" fill="#111" opacity=".75"/><text x="345" y="246" text-anchor="middle" ' + font + ' font-size="9" fill="' + CHAMP + '" letter-spacing="1">THE BRONX</text>',
      sky("lvds2", "#86b2d8", "#e8dcc4"));
  }

  /* 3. Harlem Cultural Festival stage, Listen My Brother on the bill */
  function lvdfest() {
    const crowd = Array.from({ length: 16 }, (_, i) => '<g class="lvd-sway' + (i % 2 ? " lvd-sw2" : "") + '"><circle cx="' + (14 + i * 25) + '" cy="' + (214 + (i % 3) * 6) + '" r="9" fill="#2a1e1a"/><rect x="' + (5 + i * 25) + '" y="' + (222 + (i % 3) * 6) + '" width="18" height="30" rx="6" fill="' + ["#c0392b", "#f2c94c", "#3a8f4a", "#5b8fd8", "#b07cff"][i % 5] + '"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lvds3)"/>' +
      '<path d="M0 150q60 -30 120 -10q60 -30 140 -6q70 -26 140 4v40h-400z" fill="#2f6b3a"/>' +
      '<rect x="80" y="70" width="240" height="96" fill="#3a2a22"/><rect x="70" y="60" width="260" height="14" fill="#e8dcc0"/>' +
      '<path class="lvd-spot" d="M120 74l-40 110h80z" fill="#fff6c8" opacity=".2"/><path class="lvd-spot lvd-sp2" d="M280 74l-40 110h80z" fill="#fff6c8" opacity=".2"/>' +
      [150, 200, 250].map((x, i) => '<g class="lvd-sway' + (i % 2 ? " lvd-sw2" : "") + '"><circle cx="' + x + '" cy="122" r="8" fill="#5a3a26"/><rect x="' + (x - 8) + '" y="130" width="16" height="30" rx="4" fill="' + ORANGE + '"/></g><rect x="' + (x + 12) + '" y="124" width="2" height="38" fill="#999"/><circle cx="' + (x + 13) + '" cy="124" r="3" fill="#444"/>').join("") +
      '<rect x="60" y="22" width="280" height="34" rx="3" fill="' + CHAMP + '" stroke="#7a4a1a" stroke-width="2"/><text x="200" y="37" text-anchor="middle" ' + font + ' font-size="11" fill="#7a2e1a" letter-spacing="1.5">HARLEM CULTURAL FESTIVAL</text>' +
      '<text x="200" y="50" text-anchor="middle" ' + font + ' font-size="8.5" fill="#3a2a22" letter-spacing="1.5">TODAY: LISTEN MY BROTHER</text>' +
      '<rect x="70" y="164" width="260" height="10" fill="#7a5a3a"/>' + crowd +
      '<g class="lvd-bird"><path d="M0 14q5 -6 10 0q5 -6 10 0" stroke="#333" stroke-width="2" fill="none"/></g>',
      sky("lvds3", "#f2b25a", "#f6e2b0"));
  }

  /* 4. Madison St and Catherine St, Municipal Building behind */
  function lvdcorner() {
    const muni = '<g><rect x="150" y="56" width="100" height="74" fill="#d8cdb6"/>' + Array.from({ length: 7 }, (_, r) => Array.from({ length: 9 }, (_, c) => '<rect x="' + (156 + c * 10.4) + '" y="' + (62 + r * 9) + '" width="5" height="5" fill="' + ((r + c) % 4 ? "#6e6656" : "#ffd98a") + '"/>').join("")).join("") +
      '<rect x="176" y="34" width="48" height="24" fill="#cfc4ac"/>' + [180, 192, 204, 216].map(x => '<rect x="' + x + '" y="38" width="5" height="18" fill="#a89d86"/>').join("") +
      '<rect x="186" y="22" width="28" height="14" fill="#c6bba2"/><path d="M190 22l10 -10 10 10z" fill="#bfb49b"/><rect x="198" y="4" width="4" height="10" fill="' + GOLD + '"/>' +
      '<g class="lvd-glow"><circle cx="200" cy="4" r="5" fill="' + GOLD + '"/><path d="M200 0v-4" stroke="' + GOLD + '" stroke-width="2"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lvds4)"/>' +
      tower(4, 54, 70, 90, 2) + tower(320, 46, 76, 100, 4) + muni +
      '<rect x="0" y="126" width="400" height="98" fill="#c9bfae"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#b8ad9a" stroke-width="1"/>').join("") +
      '<path d="M0 126h400" stroke="#7a705e" stroke-width="3"/>' +
      tag("LUTHER", 24, 190, 40, CHAMP, -6) + tag("NEVER TOO MUCH", 30, 216, 17, PURP, -4) + tag("LMB", 236, 210, 22, ORANGE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5a5a60"/><rect x="0" y="222" width="400" height="4" fill="#9a9aa0"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(272, 98, 112, "Madison St") + sign(262, 124, 132, "Catherine St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="lvd-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="lvd-sp"><circle cx="190" cy="166" r="3" fill="' + CHAMP + '" opacity=".7"/></g><g class="lvd-sp lvd-spb"><circle cx="196" cy="160" r="2" fill="' + CHAMP + '" opacity=".6"/></g>',
      sky("lvds4", "#1a1838", "#c98a6a"));
  }

  window.SCENES = { lvdstation: lvdstation, lvdsmith: lvdsmith, lvdtaft: lvdtaft, lvdfest: lvdfest, lvdcorner: lvdcorner };
})();
