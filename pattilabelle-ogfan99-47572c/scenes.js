/* pattilabelle scenes (Regions tab: Philadelphia; Eastwick, Southwest Philly, where she was born). CSS classes prefixed pl- (the page's own anim-train is kept).
   1 Eastwick station on SEPTA Regional Rail's Airport Line (8438 Bartram Ave, low-level side platforms at grade): a stainless Silverliner pulling in, black station sign, purple RR badge, a jet climbing out of PHL overhead.
   2 John Bartram High School at 67th & Elmwood (her school, where she won the talent show at 16): the block-long buff-brick Moderne building, stepped entrance tower with vertical piers, maroon banners, flag waving, a TALENT SHOW board out front.
   3 The choir stand at Beulah Baptist Church, where she joined the choir at 10: wooden pews, glowing stained-glass windows, organ pipes, robed choir from behind (no faces), notes rising.
   4 Patti LaBelle Way on the Avenue of the Arts (S Broad St between Spruce and Locust, named for her in 2019): the brown honorary sign over the green S Broad St sign, ornate Avenue of the Arts lamps, stage spotlights sweeping.
   5 S 84th St and Lindbergh Blvd in Eastwick: green signs, PATTI LABELLE tagged on the wall, the PHL control tower behind with a jet taking off. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes plglow{0%,100%{opacity:.45}50%{opacity:1}}.pl-glow{animation:plglow 2.6s ease-in-out infinite}.pl-glow2{animation-delay:-1.3s}' +
    '@keyframes plflag{0%,100%{transform:skewY(0deg) scaleX(1)}50%{transform:skewY(-6deg) scaleX(.92)}}.pl-flag{transform-box:fill-box;transform-origin:0% 50%;animation:plflag 1.4s ease-in-out infinite}' +
    '@keyframes plsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.pl-sway{transform-box:fill-box;transform-origin:50% 0%;animation:plsway 2.2s ease-in-out infinite}.pl-sway2{animation-delay:-1.1s}' +
    '@keyframes plnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-80px);opacity:0}}.pl-note{animation:plnote 3.4s linear infinite}.pl-n2{animation-delay:-1.1s}.pl-n3{animation-delay:-2.2s}' +
    '@keyframes plplane{from{transform:translate(-80px,40px)}to{transform:translate(480px,-60px)}}.pl-plane{animation:plplane 9s linear infinite}' +
    '@keyframes plcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.pl-car{animation:plcar 7s linear infinite}' +
    '@keyframes plbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.pl-beam{transform-box:fill-box;transform-origin:50% 100%;animation:plbeam 4s ease-in-out infinite}.pl-beam2{animation-delay:-2s}' +
    '@keyframes plsing{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.pl-sing{animation:plsing 1.2s ease-in-out infinite}.pl-sing2{animation-delay:-.6s}' +
    '@keyframes plspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.pl-sp{animation:plspray 1.4s ease-out infinite}.pl-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "pl-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffc94d", PIE = "#e4572e", LAV = "#b98cff", MAROON = "#7a1f2b", RR = "#91456c";
  /* a twin-engine jet, nose to the right */
  const jet = (c) => '<g fill="' + (c || "#f2f4f7") + '"><path d="M0 10q0 -5 8 -5h44q10 0 14 5q-4 5 -14 5h-44q-8 0 -8 -5z"/><path d="M26 8l-10 -12h7l16 12zM26 12l-10 12h7l16 -12z" fill="#c9d1db"/><path d="M2 8l-4 -9h5l7 9z" fill="#c9d1db"/></g><path d="M56 8h6" stroke="#2c3440" stroke-width="2"/>';

  /* 1. Eastwick station, Airport Line */
  function plstation() {
    const train = '<g class="anim-train"><rect x="20" y="118" width="340" height="70" rx="6" fill="#c9ced6" stroke="#7a8088" stroke-width="2"/>' +
      Array.from({ length: 18 }, (_, i) => '<path d="M' + (24 + i * 19) + ' 170v16" stroke="#aab1bb" stroke-width="1"/>').join("") +
      '<rect x="20" y="160" width="340" height="4" fill="#c8102e"/><rect x="20" y="165" width="340" height="4" fill="#1f4e9a"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 42) + '" y="128" width="30" height="24" rx="2" fill="#1f2830"/>').join("") +
      '<rect x="326" y="126" width="30" height="30" rx="3" fill="#1f2830"/><rect x="40" y="121" width="70" height="6" rx="1" fill="#111"/><text x="75" y="126" text-anchor="middle" ' + font + ' font-size="5" fill="#ffb000">AIRPORT</text>' +
      '<circle cx="352" cy="176" r="4" fill="#fff6c2"/><rect x="30" y="188" width="320" height="6" fill="#3a3f46"/></g>';
    const catenary = Array.from({ length: 4 }, (_, i) => '<rect x="' + (30 + i * 110) + '" y="70" width="4" height="122" fill="#59606a"/><rect x="' + (14 + i * 110) + '" y="74" width="36" height="3" fill="#59606a"/>').join("") +
      '<path d="M0 104h400" stroke="#3a3f46" stroke-width="1.2"/><path d="M0 110h400" stroke="#3a3f46" stroke-width=".8"/>';
    return svg('<rect width="400" height="260" fill="url(#pl-s1)"/>' +
      '<path d="M0 150h400v40h-400z" fill="#5f8a4a"/><path d="M0 146q60 -10 120 -2t140 -4t140 4v10h-400z" fill="#4c7a3c"/>' +
      '<g class="pl-plane"><g transform="translate(40 30) rotate(-12)">' + jet() + '</g></g>' + catenary + train +
      '<rect x="0" y="194" width="400" height="10" fill="#9a8f84"/><rect x="0" y="204" width="400" height="56" fill="#8c9096"/><rect x="0" y="204" width="400" height="5" fill="#ffd200"/>' +
      '<rect x="40" y="214" width="170" height="34" rx="3" fill="#111" stroke="#e8e8e8" stroke-width="1.5"/>' +
      '<rect x="52" y="222" width="26" height="18" rx="9" fill="' + RR + '"/><text x="65" y="235" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">RR</text>' +
      '<text x="88" y="236" ' + font + ' font-size="17" fill="#fff">Eastwick</text>' +
      '<text x="88" y="245" ' + font + ' font-size="6" fill="#c9c9c9">AIRPORT LINE</text>' +
      '<rect x="240" y="216" width="130" height="26" rx="3" fill="#1f2830"/><text x="305" y="233" text-anchor="middle" ' + font + ' font-size="9" fill="#ffb000">TO AIRPORT TERMINALS</text>',
      sky("pl-s1", "#7fb4e0", "#f5d9a6"));
  }

  /* 2. John Bartram High School, 67th & Elmwood */
  function plbartram() {
    const wing = (x0, n) => {
      let s = '<rect x="' + x0 + '" y="104" width="' + (n * 22 + 8) + '" height="96" fill="#d6b77e" stroke="#a88a52" stroke-width="1.5"/>' +
        '<rect x="' + x0 + '" y="100" width="' + (n * 22 + 8) + '" height="6" fill="#efe2c4"/>';
      for (let r = 0; r < 3; r++) for (let i = 0; i < n; i++) s += '<rect x="' + (x0 + 8 + i * 22) + '" y="' + (114 + r * 28) + '" width="14" height="18" fill="#30404e" stroke="#efe2c4" stroke-width="1.2"/>';
      for (let r = 0; r < 3; r++) s += '<rect x="' + x0 + '" y="' + (134 + r * 28) + '" width="' + (n * 22 + 8) + '" height="2" fill="#efe2c4" opacity=".7"/>';
      return s;
    };
    const tower = '<rect x="164" y="56" width="72" height="144" fill="#dcc08a" stroke="#a88a52" stroke-width="1.5"/>' +
      '<rect x="176" y="40" width="48" height="18" fill="#dcc08a" stroke="#a88a52" stroke-width="1.5"/><rect x="186" y="28" width="28" height="14" fill="#dcc08a" stroke="#a88a52" stroke-width="1.5"/>' +
      [172, 186, 200, 214, 228].map(x => '<rect x="' + x + '" y="60" width="4" height="100" fill="#efe2c4"/>').join("") +
      [179, 193, 207, 221].map(x => '<rect x="' + x + '" y="64" width="7" height="92" fill="#30404e"/>').join("") +
      '<rect x="182" y="166" width="36" height="34" fill="#4a2a1e" stroke="#efe2c4" stroke-width="2"/><path d="M200 166v34" stroke="#efe2c4" stroke-width="1.5"/>' +
      '<rect x="168" y="160" width="64" height="6" fill="#efe2c4"/>' +
      '<text x="200" y="53" text-anchor="middle" ' + font + ' font-size="6" fill="#6b5430">BARTRAM</text>';
    const flag = '<rect x="199" y="2" width="2" height="28" fill="#555"/><g class="pl-flag"><rect x="201" y="4" width="22" height="13" fill="#b22234"/>' +
      [6, 10, 14].map(y => '<rect x="201" y="' + y + '" width="22" height="1.6" fill="#fff"/>').join("") + '<rect x="201" y="4" width="9" height="7" fill="#3c3b6e"/></g>';
    const banner = x => '<g class="pl-sway' + (x > 200 ? " pl-sway2" : "") + '"><rect x="' + x + '" y="110" width="12" height="30" fill="' + MAROON + '"/><rect x="' + x + '" y="110" width="12" height="3" fill="#b8b8b8"/><path d="M' + x + ' 140l6 -5 6 5z" fill="#d6b77e"/></g>';
    const board = '<rect x="290" y="206" width="4" height="30" fill="#3a3a3a"/><rect x="342" y="206" width="4" height="30" fill="#3a3a3a"/>' +
      '<rect x="280" y="186" width="76" height="28" rx="2" fill="#f4f1e8" stroke="' + MAROON + '" stroke-width="3"/><text x="318" y="198" text-anchor="middle" ' + font + ' font-size="8" fill="' + MAROON + '">TALENT SHOW</text><text x="318" y="208" text-anchor="middle" ' + font + ' font-size="7" fill="#333">TONIGHT</text>';
    return svg('<rect width="400" height="260" fill="url(#pl-s2)"/>' + flag + wing(4, 7) + wing(238, 7) + tower + banner(150) + banner(238) +
      '<rect x="0" y="200" width="400" height="60" fill="#7a9a5a"/><rect x="0" y="236" width="400" height="24" fill="#8a8e94"/><rect x="0" y="234" width="400" height="3" fill="#d8dce2"/>' +
      '<path d="M170 200h60l14 36h-88z" fill="#c9c2b4"/>' + board +
      '<g class="pl-note"><text x="120" y="232" font-size="18" fill="' + LAV + '">&#9834;</text></g><g class="pl-note pl-n2"><text x="96" y="228" font-size="14" fill="' + GOLD + '">&#9835;</text></g>',
      sky("pl-s2", "#5d9bd8", "#cfe6f5"));
  }

  /* 3. Beulah Baptist Church choir stand */
  function plchoir() {
    const glass = (x, c1, c2) => '<path d="M' + x + ' 120v-56q18 -26 36 0v56z" fill="#2a1c14"/>' +
      '<path class="pl-glow' + (x > 200 ? " pl-glow2" : "") + '" d="M' + (x + 4) + ' 116v-50q14 -20 28 0v50z" fill="' + c1 + '"/>' +
      '<path d="M' + (x + 18) + ' 50v66M' + (x + 4) + ' 90h28M' + (x + 4) + ' 70h28" stroke="#2a1c14" stroke-width="2"/>' +
      '<circle cx="' + (x + 11) + '" cy="80" r="4" fill="' + c2 + '"/><circle cx="' + (x + 25) + '" cy="100" r="4" fill="' + c2 + '"/><circle cx="' + (x + 25) + '" cy="80" r="3" fill="#fff6c2"/>';
    const pipes = Array.from({ length: 13 }, (_, i) => { const h = 70 - Math.abs(i - 6) * 7; return '<rect x="' + (150 + i * 8) + '" y="' + (120 - h) + '" width="6" height="' + h + '" rx="2" fill="#d9b25a" stroke="#8a6a2a" stroke-width=".8"/>'; }).join("");
    const singer = (x, y, c, k) => '<g class="pl-sing' + (k ? " pl-sing2" : "") + '"><path d="M' + (x - 14) + ' ' + (y + 40) + 'q2 -30 14 -32q12 2 14 32z" fill="' + c + '"/><path d="M' + (x - 8) + ' ' + (y + 10) + 'q8 6 16 0" stroke="' + GOLD + '" stroke-width="3" fill="none"/><circle cx="' + x + '" cy="' + y + '" r="8" fill="#2a1a12"/></g>';
    const pew = y => '<rect x="10" y="' + y + '" width="380" height="10" rx="2" fill="#6a3e22"/><rect x="10" y="' + (y + 10) + '" width="380" height="14" fill="#552f18"/>';
    return svg('<rect width="400" height="260" fill="#3a2418"/><rect x="0" y="0" width="400" height="140" fill="#4a2e1e"/>' +
      glass(30, "#3f7fd0", "#e04a3a") + glass(90, "#d04a8a", GOLD) + glass(274, "#3fa86a", "#3f7fd0") + glass(334, "#e0a03a", "#d04a8a") +
      pipes + '<rect x="140" y="118" width="120" height="10" fill="#6a3e22"/>' +
      '<rect x="0" y="128" width="400" height="12" fill="#6a3e22"/>' +
      singer(80, 136, MAROON) + singer(120, 132, MAROON, 1) + singer(160, 136, MAROON) + singer(240, 136, MAROON, 1) + singer(280, 132, MAROON) + singer(320, 136, MAROON, 1) +
      '<rect x="0" y="172" width="400" height="10" fill="#8a5a32"/>' + pew(196) + pew(232) +
      '<g class="pl-note"><text x="190" y="150" font-size="22" fill="' + GOLD + '">&#9834;</text></g><g class="pl-note pl-n2"><text x="210" y="160" font-size="16" fill="#fff">&#9835;</text></g><g class="pl-note pl-n3"><text x="174" y="164" font-size="14" fill="' + LAV + '">&#9834;</text></g>');
  }

  /* 4. Patti LaBelle Way on the Avenue of the Arts */
  function plway() {
    const lamp = x => '<rect x="' + (x - 3) + '" y="120" width="6" height="104" fill="#1e2a24"/><rect x="' + (x - 7) + '" y="216" width="14" height="8" fill="#1e2a24"/>' +
      '<path d="M' + (x - 22) + ' 124q22 -14 44 0" stroke="#1e2a24" stroke-width="3" fill="none"/>' +
      '<circle class="pl-glow" cx="' + (x - 22) + '" cy="132" r="7" fill="#fff2b8"/><circle class="pl-glow pl-glow2" cx="' + (x + 22) + '" cy="132" r="7" fill="#fff2b8"/><circle cx="' + x + '" cy="112" r="6" fill="#fff2b8"/>' +
      '<rect x="' + (x - 6) + '" y="140" width="12" height="34" fill="' + LAV + '"/><rect x="' + (x - 6) + '" y="140" width="12" height="4" fill="' + GOLD + '"/>';
    const bldg = (x, w, h, c, win) => { let s = '<rect x="' + x + '" y="' + (224 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let r = 0; r < Math.floor((h - 20) / 22); r++) for (let i = 0; i < Math.floor((w - 8) / 16); i++) s += '<rect x="' + (x + 8 + i * 16) + '" y="' + (234 - h + r * 22) + '" width="8" height="12" fill="' + ((r + i) % 3 ? win : "#ffe7a0") + '"/>'; return s; };
    const beam = (x, k) => '<path class="pl-beam' + (k ? " pl-beam2" : "") + '" d="M' + (x - 2) + ' 224l-40 -220h84l-40 220z" fill="#fff4c8" opacity=".14"/>';
    return svg('<rect width="400" height="260" fill="url(#pl-s4)"/>' + stars(30) + beam(120) + beam(300, 1) +
      bldg(0, 96, 150, "#6b4a3a", "#2c2a30") + bldg(96, 90, 112, "#8a6a52", "#2c2a30") + bldg(300, 100, 160, "#5a4a44", "#2c2a30") +
      '<rect x="186" y="136" width="114" height="88" fill="#2a2030"/><rect x="194" y="144" width="98" height="40" fill="#1a1420" stroke="' + GOLD + '" stroke-width="2"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle class="pl-glow' + (i % 2 ? " pl-glow2" : "") + '" cx="' + (199 + i * 8) + '" cy="148" r="1.6" fill="#ffe7a0"/>').join("") +
      '<text x="243" y="164" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">AVENUE OF</text><text x="243" y="178" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">THE ARTS</text>' +
      '<rect x="204" y="192" width="78" height="32" fill="#4a2a1e" stroke="' + GOLD + '" stroke-width="1.5"/><path d="M243 192v32" stroke="' + GOLD + '" stroke-width="1"/>' +
      '<rect x="0" y="224" width="400" height="36" fill="#48464a"/><rect x="0" y="222" width="400" height="4" fill="#cfd3d8"/>' +
      lamp(350) +
      '<g class="pl-car"><rect x="0" y="236" width="60" height="14" rx="5" fill="' + PIE + '"/><rect x="12" y="228" width="34" height="10" rx="3" fill="' + PIE + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="48" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="117" y="40" width="6" height="184" fill="#2f2f2f"/>' +
      '<rect x="49" y="44" width="142" height="26" rx="3" fill="#6b3f1f" stroke="#fff" stroke-width="1.5"/><text x="120" y="62" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">Patti LaBelle Way</text>' +
      sign(71, 76, 98, "S Broad St") + sign(81, 102, 78, "Spruce St"),
      sky("pl-s4", "#1c1030", "#5a3060"));
  }

  /* 5. S 84th St & Lindbergh Blvd, Eastwick */
  function plcorner() {
    const towerPHL = '<rect x="270" y="60" width="16" height="64" fill="#cfd4da" stroke="#9aa2ac" stroke-width="1"/>' +
      '<path d="M262 60h32l4 -8h-40z" fill="#9aa2ac"/><rect x="258" y="38" width="40" height="14" fill="#5e8f86" stroke="#d6dde3" stroke-width="1.5"/>' +
      '<path d="M262 38l4 -8h24l4 8z" fill="#d6dde3"/><rect x="276" y="18" width="4" height="12" fill="#9aa2ac"/><circle class="pl-glow" cx="278" cy="17" r="2.4" fill="#e04a3a"/>';
    const plane = '<g class="pl-plane"><g transform="translate(10 70) rotate(-14) scale(1.2)">' + jet() + '</g></g>';
    const wallTop = 124;
    return svg('<rect width="400" height="260" fill="url(#pl-s5)"/>' +
      '<rect x="0" y="100" width="400" height="24" fill="#8fa3b4"/>' + towerPHL + plane +
      '<rect x="0" y="' + wallTop + '" width="400" height="100" fill="#a8563c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (wallTop + 8 + i * 8) + 'h400" stroke="#8a4430" stroke-width="1"/>').join("") +
      '<rect x="0" y="' + (wallTop - 4) + '" width="400" height="6" fill="#4a3a32"/>' +
      tag("PATTI LABELLE", 16, 178, 32, GOLD, -6) + tag("MISS PATTI", 250, 208, 18, LAV, -4) + tag("BLUEBELLES", 16, 214, 16, "#fff", -3) + tag("NEW ATTITUDE", 122, 214, 16, PIE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="pl-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + LAV + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + LAV + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="356" y="98" width="6" height="126" fill="#2f2f2f"/>' + sign(312, 100, 88, "S 84th St") + sign(282, 126, 118, "Lindbergh Blvd") +
      '<g class="pl-sp"><circle cx="200" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="pl-sp pl-sp2"><circle cx="206" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("pl-s5", "#f08a5d", "#fbd7a8"));
  }

  window.SCENES = { plstation: plstation, plbartram: plbartram, plchoir: plchoir, plway: plway, plcorner: plcorner };
})();
