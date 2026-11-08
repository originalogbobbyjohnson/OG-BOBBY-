/* dorrough scenes (Regions tab: Houston + Texas; Lancaster, south of Dallas). CSS classes and ids prefixed dr- (the page's own anim-train is kept).
   1 Camp Wisdom, DART Blue Line (at grade, two side platforms, on Lancaster Rd): the light-rail car pulling in. A STARNow ride runs from here into Lancaster.
   2 Lancaster High School gym (class of 2005; he captained the basketball team and sold mixtapes at the games): orange-and-black Tigers court, scoreboard, the ball dropping in.
   3 The yard at Prairie View A&M, purple and gold, where his student fan base was built (2008 PV Choice Awards Rapper of the Year): stage, speakers, hands up.
   4 Lancaster's Historic Town Square: red-brick storefronts, and a grape-jelly candy-paint slab out front (ice cream paint job), rims turning, trunk knocking.
   5 E Wintergreen Rd and N Dallas Ave by Lancaster High: green signs, DORROUGH tagged on the wall, the Dallas skyline far off north with the Omni's color-changing LED face. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes drblink{0%,100%{opacity:.2}50%{opacity:1}}.dr-bl{animation:drblink 1.2s ease-in-out infinite}.dr-bl2{animation-delay:-.6s}' +
    '@keyframes drflick{0%,100%{opacity:1}44%{opacity:.8}48%{opacity:.3}52%{opacity:.95}}.dr-flk{animation:drflick 2.6s infinite}' +
    '@keyframes drball{0%{transform:translate(0,0)}45%{transform:translate(58px,-70px)}70%{transform:translate(92px,-46px)}100%{transform:translate(92px,30px)}}.dr-ball{animation:drball 2.4s ease-in infinite}' +
    '@keyframes drhand{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}.dr-hd{transform-box:fill-box;animation:drhand .8s ease-in-out infinite}.dr-h2{animation-delay:-.27s}.dr-h3{animation-delay:-.53s}' +
    '@keyframes drthump{0%,100%{transform:scale(1)}50%{transform:scale(.82)}}.dr-cone{transform-box:fill-box;transform-origin:center;animation:drthump .45s ease-in-out infinite}.dr-c2{animation-delay:-.22s}' +
    '@keyframes drspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.dr-rim{transform-box:fill-box;transform-origin:center;animation:drspin 1.4s linear infinite}' +
    '@keyframes drshine{0%{transform:translateX(-60px);opacity:0}30%{opacity:.8}60%{transform:translateX(150px);opacity:0}100%{transform:translateX(150px);opacity:0}}.dr-shn{animation:drshine 3s ease-in-out infinite}' +
    '@keyframes drled{0%,100%{fill:#ff5fa2}25%{fill:#8f5bd6}50%{fill:#3fa9f5}75%{fill:#f5c542}}.dr-led{animation:drled 6s linear infinite}' +
    '@keyframes drcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.dr-car{animation:drcar 6.5s linear infinite}' +
    '@keyframes drspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dr-sp{animation:drspray 1.4s ease-out infinite}.dr-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 16) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 16) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "dr-bl" + (i % 2 ? " dr-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const GOLD = "#f5c542", PINK = "#ff78b9", PURPLE = "#8f5bd6", BLUE = "#0067b1", ORANGE = "#f26b1d";

  /* 1. Camp Wisdom, DART Blue Line (at grade, side platforms) */
  function drstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="122" width="36" height="24" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><path d="M24 182V122q0 -14 14 -14h300q24 0 30 30v44z" fill="#eceae4" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="24" y="152" width="344" height="7" fill="' + BLUE + '"/><rect x="24" y="161" width="344" height="3" fill="#c9cdd2"/><rect x="24" y="166" width="344" height="4" fill="#5d646b"/>' +
      '<path d="M340 112q22 4 26 30h-26z" fill="#1c2630"/><circle cx="358" cy="174" r="3.5" fill="#fff6c2"/>' +
      '<rect x="200" y="98" width="70" height="10" fill="#8a939b"/><path d="M210 98l25 -24l25 24" stroke="#555" stroke-width="2" fill="none"/>' +
      '<rect x="40" y="111" width="96" height="10" rx="2" fill="#111"/><text x="88" y="119" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">BLUE · UNT DALLAS</text>' +
      '<circle cx="96" cy="184" r="7" fill="#222"/><circle cx="296" cy="184" r="7" fill="#222"/></g>';
    const shelter = x => '<path d="M' + (x - 40) + ' 86h80l-6 -10h-68z" fill="' + BLUE + '"/><rect x="' + (x - 40) + '" y="86" width="80" height="4" fill="#0a3f70"/>' +
      '<rect x="' + (x - 36) + '" y="90" width="4" height="96" fill="#8a9096"/><rect x="' + (x + 32) + '" y="90" width="4" height="96" fill="#8a9096"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#drs1)"/>' +
      '<path d="M0 128q60 -10 130 -4t140 -8t130 6v60H0z" fill="#9cb87a" opacity=".8"/>' +
      [30, 64, 300, 352].map((x, i) => '<circle cx="' + x + '" cy="' + (112 - i % 2 * 6) + '" r="' + (16 + i % 2 * 5) + '" fill="#5f8a44"/>').join("") +
      '<path d="M0 70h400" stroke="#333" stroke-width="1.5"/>' + [20, 200, 380].map(x => '<rect x="' + (x - 3) + '" y="66" width="6" height="120" fill="#7a8088"/><path d="M' + (x - 22) + ' 70h44" stroke="#7a8088" stroke-width="3"/>').join("") +
      shelter(110) + shelter(290) +
      train +
      '<rect x="0" y="186" width="400" height="8" fill="#f2c200"/><rect x="0" y="194" width="400" height="66" fill="#b8b2a6"/><path d="M0 226h400" stroke="#a29a8c" stroke-width="2"/>' +
      '<rect x="56" y="202" width="288" height="42" rx="3" fill="#111"/><text x="72" y="222" ' + font + ' font-size="18" fill="#fff">Camp Wisdom</text>' +
      '<text x="72" y="237" ' + font + ' font-size="9" fill="#c8ccd2">Lancaster Rd · STARNow to Lancaster</text>' + badge(262, 220, "BLUE", BLUE),
      sky("drs1", "#7ab8e8", "#f6e2bc"));
  }

  /* 2. Lancaster High School gym: Tigers court */
  function drgym() {
    const seats = Array.from({ length: 5 }, (_, r) => '<rect x="0" y="' + (52 + r * 12) + '" width="400" height="9" fill="' + (r % 2 ? "#2a2a2e" : "#3a3a40") + '"/>').join("") +
      Array.from({ length: 40 }, (_, i) => '<circle cx="' + (6 + i * 10) + '" cy="' + (50 + (i % 5) * 12) + '" r="3.2" fill="' + ["#6a4a3a", "#b07a5a", "#3a2a24", "#d8a882", "#8a5a40"][i % 5] + '"/>').join("");
    const hoop = '<rect x="318" y="58" width="6" height="96" fill="#555"/><rect x="300" y="62" width="52" height="36" fill="#f4f4f2" stroke="#222" stroke-width="2"/><rect x="316" y="76" width="20" height="14" fill="none" stroke="' + ORANGE + '" stroke-width="2"/>' +
      '<path d="M310 98h32" stroke="' + ORANGE + '" stroke-width="3"/><path d="M312 99l5 16h18l5 -16M318 99l3 16M326 99v16M334 99l-3 16" stroke="#eee" stroke-width="1.2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a1a1e"/>' +
      '<rect x="0" y="0" width="400" height="44" fill="#111"/>' + [40, 120, 200, 280, 360].map(x => '<rect class="dr-flk" x="' + (x - 18) + '" y="6" width="36" height="6" rx="3" fill="#fff6d8"/>').join("") +
      '<rect x="138" y="14" width="124" height="36" rx="3" fill="#000" stroke="#444" stroke-width="2"/><text x="164" y="27" text-anchor="middle" ' + font + ' font-size="7" fill="#ccc">HOME</text><text x="236" y="27" text-anchor="middle" ' + font + ' font-size="7" fill="#ccc">GUEST</text>' +
      '<text class="dr-bl" x="164" y="45" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="16" fill="#ff4a2a">23</text><text x="236" y="45" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="16" fill="#ff4a2a">12</text>' +
      seats +
      '<rect x="0" y="112" width="400" height="20" fill="' + ORANGE + '"/><text x="200" y="127" text-anchor="middle" ' + font + ' font-size="14" fill="#111" letter-spacing="3">LANCASTER TIGERS</text>' +
      [0, 1, 6, 7].map(i => '<path d="M' + (8 + i * 50) + ' 112l10 20M' + (16 + i * 50) + ' 112l10 20" stroke="#111" stroke-width="3"/>').join("") +
      '<path d="M0 132h400v128H0z" fill="#d9a35e"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 30) + ' 132v128" stroke="#c48e4c" stroke-width="1"/>').join("") +
      '<ellipse cx="160" cy="200" rx="56" ry="22" fill="none" stroke="#111" stroke-width="3"/><ellipse cx="160" cy="200" rx="16" ry="7" fill="' + ORANGE + '" stroke="#111" stroke-width="2"/>' +
      '<path d="M400 160h-74q-30 22 0 48h74" fill="' + ORANGE + '" opacity=".55" stroke="#111" stroke-width="3"/><path d="M400 140q-150 40 0 112" fill="none" stroke="#111" stroke-width="3"/>' +
      hoop +
      '<g class="dr-ball"><circle cx="232" cy="150" r="9" fill="' + ORANGE + '" stroke="#5a2a0a" stroke-width="1.5"/><path d="M223 150h18M232 141v18M226 143q6 7 0 14M238 143q-6 7 0 14" stroke="#5a2a0a" stroke-width="1.2" fill="none"/></g>' +
      '<rect x="40" y="150" width="54" height="40" rx="3" fill="#111" stroke="' + ORANGE + '" stroke-width="2"/><text x="67" y="165" text-anchor="middle" ' + font + ' font-size="8" fill="' + ORANGE + '">CAPTAIN</text><text x="67" y="184" text-anchor="middle" ' + font + ' font-size="18" fill="#fff">23</text>' +
      '<rect x="70" y="232" width="260" height="20" rx="4" fill="#14161c" opacity=".8"/><text x="200" y="246" text-anchor="middle" ' + font + ' font-size="11" fill="#f4eee6">MIXTAPES AT THE GAME · CLASS OF 2005</text>');
  }

  /* 3. The yard at Prairie View A&M: purple and gold */
  function drpv() {
    const crowd = Array.from({ length: 22 }, (_, i) => { const x = 10 + i * 18, h = 30 + (i * 7) % 14; const c = ["#2a1a3a", "#3a2450", "#24162f"][i % 3];
      return '<path d="M' + (x - 8) + ' 260v-' + h + 'q8 -12 16 0v' + h + 'z" fill="' + c + '"/><circle cx="' + x + '" cy="' + (252 - h) + '" r="7" fill="' + c + '"/>' +
        (i % 2 ? '<path class="dr-hd' + (i % 3 ? " dr-h" + (i % 3 + 1) : "") + '" d="M' + (x + 6) + ' ' + (246 - h) + 'l6 -22" stroke="' + c + '" stroke-width="5" stroke-linecap="round"/>' : ""); }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#drs3)"/>' + stars(14) +
      '<rect x="40" y="70" width="320" height="100" fill="#3a2a1e"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M40 ' + (78 + i * 9) + 'h320" stroke="#4a3626" stroke-width="1"/>').join("") +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (56 + i * 44) + '" y="86" width="22" height="30" fill="#f5d77a" opacity=".55"/>').join("") +
      '<rect x="40" y="58" width="320" height="14" fill="#5a4636"/>' +
      '<path d="M60 40h280v24H60z" fill="' + PURPLE + '"/><path d="M60 64h280" stroke="' + GOLD + '" stroke-width="4"/><text x="200" y="58" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '" letter-spacing="2">PRAIRIE VIEW A&amp;M</text>' +
      '<rect x="70" y="140" width="260" height="34" fill="#1c1426"/><rect x="70" y="140" width="260" height="5" fill="' + GOLD + '"/>' +
      [80, 290].map(x => '<rect x="' + x + '" y="96" width="30" height="44" rx="2" fill="#111" stroke="#333"/><circle class="dr-cone" cx="' + (x + 15) + '" cy="110" r="9" fill="#2a2a2a" stroke="#555" stroke-width="2"/><circle class="dr-cone dr-c2" cx="' + (x + 15) + '" cy="130" r="6" fill="#2a2a2a" stroke="#555" stroke-width="2"/>').join("") +
      '<rect x="198" y="104" width="4" height="36" fill="#999"/><circle cx="200" cy="102" r="5" fill="#333"/>' +
      '<path d="M150 40l-30 100h40zM250 40l30 100h-40z" fill="' + GOLD + '" opacity=".14"/>' +
      [[118, 82, PURPLE], [282, 82, GOLD]].map(([x, y, c]) => '<path d="M' + x + ' ' + (y - 8) + 'v30" stroke="#ccc" stroke-width="2"/><path d="M' + x + ' ' + (y - 8) + 'h20l-6 7l6 7h-20z" fill="' + c + '"/>').join("") +
      crowd +
      '<rect x="60" y="200" width="280" height="20" rx="4" fill="#14101c" opacity=".85"/><text x="200" y="214" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">PV CHOICE · RAPPER OF THE YEAR 2008</text>',
      sky("drs3", "#1c0f30", "#5a2a6a"));
  }

  /* 4. Lancaster Historic Town Square + the ice cream paint job */
  function drsquare() {
    const store = (x, w, h, c, aw) => '<rect x="' + x + '" y="' + (150 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
      Array.from({ length: Math.floor(w / 18) }, (_, i) => '<rect x="' + (x + 6 + i * 18) + '" y="' + (150 - h + 10) + '" width="10" height="16" fill="#f3e2b0" opacity=".8"/>').join("") +
      '<rect x="' + x + '" y="' + (150 - h - 6) + '" width="' + w + '" height="6" fill="#7a3a24"/>' +
      '<path d="M' + x + ' 120h' + w + 'l-4 10h-' + (w - 8) + 'z" fill="' + aw + '"/><rect x="' + (x + 6) + '" y="130" width="' + (w - 12) + '" height="20" fill="#2a2420" opacity=".8"/>';
    const lights = Array.from({ length: 20 }, (_, i) => '<circle class="' + (i % 2 ? "dr-bl" : "dr-bl dr-bl2") + '" cx="' + (10 + i * 20) + '" cy="' + (98 + Math.sin(i / 3) * 6) + '" r="2" fill="#ffe7a0"/>').join("");
    const car = '<g>' +
      '<path d="M60 214v-22q0 -8 10 -10l40 -6l26 -22h118l30 22l46 6q12 2 12 12v20z" fill="#6a2a8a" stroke="#2a0f3a" stroke-width="2"/>' +
      '<path d="M146 178l20 -18h46v18zM218 178v-18h34l22 18z" fill="#2a3448"/>' +
      '<path d="M70 196h270" stroke="#ff9ccf" stroke-width="2" opacity=".7"/><path d="M60 214h302" stroke="#c9c9c9" stroke-width="4"/>' +
      '<rect class="dr-shn" x="96" y="182" width="14" height="28" fill="#fff" opacity=".6" transform="skewX(-20)"/>' +
      '<path d="M334 182l26 -26l6 6l-20 26z" fill="#5a1f78" stroke="#2a0f3a" stroke-width="2"/>' +
      '<rect x="318" y="158" width="20" height="22" fill="#111"/><circle class="dr-cone" cx="328" cy="164" r="5" fill="#333" stroke="#777"/><circle class="dr-cone dr-c2" cx="328" cy="175" r="4" fill="#333" stroke="#777"/>' +
      [120, 300].map(x => '<circle cx="' + x + '" cy="216" r="20" fill="#111"/><g class="dr-rim"><circle cx="' + x + '" cy="216" r="14" fill="#d8dce2" stroke="#8a9096" stroke-width="2"/><path d="M' + (x - 13) + ' 216h26M' + x + ' 203v26M' + (x - 9) + ' 207l18 18M' + (x + 9) + ' 207l-18 18" stroke="#8a9096" stroke-width="2.5"/></g><circle cx="' + x + '" cy="216" r="3" fill="#555"/>').join("") +
      '<circle cx="66" cy="196" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#drs4)"/>' +
      store(0, 80, 70, "#9a3e2a", "#2f6b4a") + store(80, 92, 84, "#b0523a", "#7a2a2a") + store(172, 70, 64, "#8a3424", "#1f4a7a") + store(242, 86, 78, "#a8482e", "#2f6b4a") + store(328, 72, 66, "#963a28", "#7a2a2a") +
      '<path d="M0 96q100 12 200 0t200 0" stroke="#333" stroke-width="1" fill="none"/>' + lights +
      '<rect x="0" y="150" width="400" height="20" fill="#cfc6b4"/><rect x="0" y="170" width="400" height="90" fill="#4a4a4e"/><path d="M0 172h400" stroke="#e6dfcf" stroke-width="2"/>' +
      car +
      '<rect x="60" y="240" width="280" height="16" rx="4" fill="#14161c" opacity=".8"/><text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="' + PINK + '">LANCASTER TOWN SQUARE · ICE CREAM PAINT JOB</text>',
      sky("drs4", "#f2a65a", "#ffd9a8"));
  }

  /* 5. E Wintergreen Rd and N Dallas Ave, Lancaster */
  function drcorner() {
    const sky5 = '<g fill="#22203a">' + [[130, 34, 16], [148, 52, 14], [196, 30, 14], [214, 44, 12], [232, 26, 16], [252, 38, 12], [268, 22, 14]].map(([x, h, w]) => '<rect x="' + x + '" y="' + (126 - h) + '" width="' + w + '" height="' + h + '"/>').join("") + '</g>' +
      '<rect class="dr-led" x="166" y="66" width="26" height="60" fill="#ff5fa2"/><path d="M166 66h26" stroke="#22203a" stroke-width="2"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect class="' + (i % 2 ? "dr-bl" : "dr-bl dr-bl2") + '" x="' + (134 + i * 24) + '" y="' + (104 + (i * 7) % 14) + '" width="1.6" height="1.6" fill="#ffe7a0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#drs5)"/>' + stars(18) + sky5 +
      '<rect x="0" y="126" width="400" height="98" fill="#c9b9a0"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#b4a488" stroke-width="1"/>').join("") +
      '<rect x="0" y="126" width="400" height="6" fill="#8c7c62"/>' +
      tag("DORROUGH", 16, 182, 40, PINK, -6) + tag("PRIME TIME", 30, 214, 22, GOLD, -4) + tag("YEAH BUDDY", 168, 208, 17, "#7fd8ff", -3) + tag("SIX 3", 196, 176, 18, "#fff", -5) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="dr-car"><rect x="0" y="234" width="50" height="14" rx="5" fill="' + PURPLE + '"/><rect x="10" y="229" width="26" height="7" rx="3" fill="#5a1f78"/><circle cx="49" cy="240" r="2" fill="#fff6c2"/><circle cx="11" cy="249" r="4.5" fill="#ccc" stroke="#111" stroke-width="1.5"/><circle cx="39" cy="249" r="4.5" fill="#ccc" stroke="#111" stroke-width="1.5"/></g>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(248, 98, 148, "E Wintergreen Rd") + sign(262, 124, 134, "N Dallas Ave") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="dr-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="dr-sp"><circle cx="160" cy="168" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="dr-sp dr-sp2"><circle cx="166" cy="162" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("drs5", "#14102e", "#c8604a"));
  }

  window.SCENES = { drstation: drstation, drgym: drgym, drpv: drpv, drsquare: drsquare, drcorner: drcorner };
})();
