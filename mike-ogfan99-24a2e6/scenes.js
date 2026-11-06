/* MIKE game (NYC map, Brooklyn: Bed-Stuy, where MIKE records at home and runs his own label, 10k).
   1. Ralph Av on the C, underground under Fulton St (the reserved hub station).
   2. Hackney, London (where he lived from about age 5): the Hackney Empire's red terracotta front and domes on Mare St, a red double-decker going by.
   3. Philadelphia (where he lived from about age 12): a red-brick rowhouse block with white marble steps.
   4. The Bed-Stuy home studio where the 10k records get made: sampler pads, the mic, tape running, brownstones out the window.
   5. Macon St & Lewis Av, the old Macon Library (red brick and limestone, arched windows) behind, MIKE tagged on the wall. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mkbus{from{transform:translateX(-170px)}to{transform:translateX(560px)}}.mk-bus{animation:mkbus 9s linear infinite}' +
    '@keyframes mkrain{from{transform:translateY(-40px)}to{transform:translateY(40px)}}.mk-rain{animation:mkrain .8s linear infinite}' +
    '@keyframes mkflk{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.mk-flk{animation:mkflk 2.6s infinite}' +
    '@keyframes mkbl{0%,100%{opacity:.25}50%{opacity:1}}.mk-bl{animation:mkbl 1.4s ease-in-out infinite}.mk-bl2{animation-delay:.35s}.mk-bl3{animation-delay:.7s}.mk-bl4{animation-delay:1.05s}' +
    '@keyframes mkmt{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.mk-mt{transform-box:fill-box;transform-origin:50% 100%;animation:mkmt .55s ease-in-out infinite}.mk-mt2{animation-delay:.18s}.mk-mt3{animation-delay:.36s}' +
    '@keyframes mkspin{to{transform:rotate(360deg)}}.mk-spin{transform-box:fill-box;transform-origin:50% 50%;animation:mkspin 2s linear infinite}' +
    '@keyframes mkball{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.mk-ball{animation:mkball .9s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes mkbird{0%{transform:translate(0,0)}50%{transform:translate(60px,-14px)}100%{transform:translate(120px,0)}}.mk-bird{animation:mkbird 5s ease-in-out infinite alternate}' +
    '@keyframes mkleaf{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(-40px,150px) rotate(300deg)}}.mk-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:mkleaf 5s linear infinite}.mk-leaf2{animation-delay:-1.7s}.mk-leaf3{animation-delay:-3.4s}' +
    '@keyframes mkmist{0%,100%{opacity:.15}50%{opacity:.55}}.mk-mist{animation:mkmist 2s ease-in-out infinite}' +
    '@keyframes mkcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.mk-car{animation:mkcar 6.5s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col) => '<g><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const PINK = "#ff6fb5", GOLD = "#f2c14e", SKYB = "#7fd1ff", CREAM = "#f4ead8", BLUE = "#0039a6";

  /* 1. Ralph Av, underground on the Fulton St line: cream tile, maroon mosaic band, black sign with the C, the C train sliding in */
  function ralph() {
    let tiles = "";
    for (let y = 30; y < 150; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#ece4d0"/>';
    let band = "";
    for (let x = 0; x < 400; x += 12) band += '<rect x="' + x + '" y="94" width="6" height="6" fill="' + (x % 24 ? "#7b2d3b" : "#d9b45a") + '"/>';
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#d6ccb6"/>' + tiles +
      '<rect x="0" y="90" width="400" height="14" fill="#4a1a24"/>' + band +
      '<rect x="0" y="0" width="400" height="30" fill="#26262a"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="mk-flk" style="animation-delay:-' + i * 0.7 + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      '<rect x="70" y="44" width="260" height="34" rx="3" fill="#111"/><rect x="70" y="44" width="260" height="3" fill="#fff"/>' +
      '<text x="86" y="68" ' + font + ' font-size="17" fill="#fff">Ralph Av</text>' + bullet(304, 61, "C", BLUE) +
      [14, 386].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="130" fill="#2f4f7a"/>').join("") +
      '<g class="anim-train">' +
        '<rect x="10" y="102" width="300" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="110" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 148, "C", BLUE) +
        '<rect x="10" y="140" width="280" height="4" fill="' + BLUE + '"/>' +
        '<circle cx="22" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#eab308"/><rect x="0" y="170" width="400" height="90" fill="#57544f"/>' +
      '<rect x="0" y="170" width="400" height="3" fill="#3b3935"/>' +
      person(332, 194, "#1b1b1b") + person(356, 198, "#2b2430") +
      txt("BED-STUY", 150, 232, 13, CREAM, 'letter-spacing="5"'));
  }

  /* 2. Hackney, London: the Hackney Empire on Mare St (red terracotta front, two green-capped domes, arched windows), drizzle, a red double-decker passing */
  function hackney() {
    let rain = "";
    for (let i = 0; i < 40; i++) rain += '<path d="M' + ((i * 53) % 400) + ' ' + ((i * 37) % 200) + 'l-3 9" stroke="#c9d4e0" stroke-width="1" opacity=".5"/>';
    const dome = x => '<rect x="' + (x - 18) + '" y="64" width="36" height="96" fill="#b5462e"/>' +
      '<path d="M' + (x - 20) + ' 66q20-40 40 0z" fill="#5f8f7a" stroke="#3d6152" stroke-width="2"/><rect x="' + (x - 2) + '" y="20" width="4" height="12" fill="#3d6152"/><circle cx="' + x + '" cy="20" r="3" fill="' + GOLD + '"/>' +
      '<path d="M' + (x - 9) + ' 120v-14q9-12 18 0v14z" fill="#2a3442"/><path d="M' + (x - 9) + ' 92v-10q9-10 18 0v10z" fill="#2a3442"/>' +
      '<rect x="' + (x - 20) + '" y="70" width="40" height="4" fill="#e8d2b0"/>';
    let arches = "";
    for (let x = 152; x < 260; x += 26) arches += '<path d="M' + x + ' 136v-26q9-12 18 0v26z" fill="#2a3442"/><path d="M' + x + ' 136v-26q9-12 18 0v26z" fill="#ffd98a" opacity=".35" class="mk-bl mk-bl' + ((x / 26) % 4 + 1 | 0) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mkh)"/>' +
      '<rect x="0" y="96" width="70" height="80" fill="#6e6a64"/><rect x="330" y="88" width="70" height="88" fill="#6e6a64"/>' +
      [[8, 108], [30, 108], [50, 108], [340, 100], [362, 100], [382, 100]].map(p => '<rect x="' + p[0] + '" y="' + p[1] + '" width="10" height="14" fill="#c9d4e0" opacity=".6"/>').join("") +
      '<rect x="110" y="70" width="180" height="106" fill="#c0573a"/>' +
      '<path d="M140 70l60-26l60 26z" fill="#b5462e" stroke="#e8d2b0" stroke-width="3"/>' +
      '<rect x="110" y="98" width="180" height="5" fill="#e8d2b0"/><rect x="110" y="140" width="180" height="5" fill="#e8d2b0"/>' + arches +
      dome(96) + dome(304) +
      '<rect x="150" y="146" width="100" height="30" fill="#2a1d18"/><rect x="146" y="144" width="108" height="6" fill="#e8d2b0"/>' +
      txt("HACKNEY EMPIRE", 200, 92, 10, CREAM, 'letter-spacing="2"') +
      '<rect x="0" y="176" width="400" height="84" fill="#4b4d52"/><rect x="0" y="176" width="400" height="6" fill="#8a8c90"/>' +
      '<path d="M0 222h400" stroke="#e6e6e6" stroke-width="2" stroke-dasharray="16 12"/>' +
      /* street sign: white plate, black text, red borough code */
      '<rect x="20" y="146" width="84" height="24" rx="2" fill="#fff" stroke="#111" stroke-width="1.5"/><text x="30" y="163" ' + font + ' font-size="11" fill="#111">MARE ST</text><text x="82" y="163" ' + font + ' font-size="11" fill="#c8102e">E8</text>' +
      '<g class="mk-bus"><rect x="0" y="176" width="140" height="62" rx="8" fill="#c8102e"/><rect x="0" y="206" width="140" height="3" fill="#7a0a1c"/>' +
        [10, 36, 62, 88, 112].map(x => '<rect x="' + x + '" y="184" width="20" height="16" rx="2" fill="#dbe7f2"/><rect x="' + x + '" y="214" width="20" height="14" rx="2" fill="#dbe7f2"/>').join("") +
        '<circle cx="28" cy="240" r="9" fill="#111"/><circle cx="112" cy="240" r="9" fill="#111"/><circle cx="28" cy="240" r="3" fill="#888"/><circle cx="112" cy="240" r="3" fill="#888"/>' +
        '<circle cx="136" cy="230" r="3" fill="#fff6c2"/></g>' +
      '<g class="mk-rain">' + rain + '</g>' +
      txt("LONDON YEARS", 330, 30, 10, CREAM, 'letter-spacing="3" opacity=".85"'),
      sky("mkh", "#5b6470", "#a3aab3"));
  }

  /* 3. Philadelphia: a red-brick rowhouse block, white marble steps, cornices, a ball bouncing on the sidewalk, pigeons crossing */
  function philly() {
    let houses = "";
    for (let i = 0; i < 6; i++) {
      const x = 4 + i * 66, c = ["#9b3b2a", "#a8452f", "#8f3526", "#a24030", "#94392a", "#a5482f"][i];
      houses += '<rect x="' + x + '" y="62" width="64" height="130" fill="' + c + '"/>' +
        '<rect x="' + (x - 2) + '" y="56" width="68" height="8" fill="#2e2a2a"/>' +
        [x + 8, x + 36].map(wx => '<rect x="' + wx + '" y="76" width="18" height="24" fill="#f4ead8"/><rect x="' + (wx + 2) + '" y="78" width="14" height="20" fill="#3b4a5c"/><rect x="' + wx + '" y="112" width="18" height="24" fill="#f4ead8"/><rect x="' + (wx + 2) + '" y="114" width="14" height="20" fill="' + (i % 2 ? "#ffd98a" : "#3b4a5c") + '"' + (i % 2 ? ' class="mk-bl mk-bl' + (i % 4 + 1) + '"' : '') + '/>').join("") +
        '<rect x="' + (x + 8) + '" y="148" width="20" height="36" fill="#2b1d16"/><rect x="' + (x + 6) + '" y="144" width="24" height="5" fill="#e9e6df"/>' +
        '<rect x="' + (x + 4) + '" y="184" width="28" height="4" fill="#f2f0ea"/><rect x="' + (x + 1) + '" y="188" width="34" height="4" fill="#e9e6df"/><rect x="' + (x - 2) + '" y="192" width="40" height="4" fill="#dcd8cf"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#mkp)"/>' + houses +
      '<rect x="0" y="196" width="400" height="22" fill="#a7a39b"/><rect x="0" y="218" width="400" height="42" fill="#4a4b4f"/><rect x="0" y="216" width="400" height="3" fill="#cfcbc2"/>' +
      '<g class="mk-ball"><circle cx="300" cy="206" r="7" fill="#e07a2f"/><path d="M293 206h14M300 199v14" stroke="#5a2a0f" stroke-width="1"/></g>' +
      '<g class="mk-bird"><path d="M30 34q5-5 10 0q5-5 10 0" stroke="#333" stroke-width="2" fill="none"/><path d="M58 44q4-4 8 0q4-4 8 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
            txt("PHILLY YEARS", 200, 244, 13, CREAM, 'letter-spacing="5"'),
      sky("mkp", "#8fc6e8", "#f3d9b0"));
  }

  /* 4. The Bed-Stuy home studio: night window with brownstones, sampler pads blinking, the mic, tape reels turning, level meters, a 10k tape label */
  function studio() {
    let pads = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) pads += '<rect class="mk-bl mk-bl' + ((r + c) % 4 + 1) + '" x="' + (60 + c * 18) + '" y="' + (160 + r * 14) + '" width="14" height="10" rx="2" fill="' + [PINK, GOLD, SKYB][r] + '"/>';
    let bs = "";
    for (let i = 0; i < 4; i++) bs += '<rect x="' + (232 + i * 34) + '" y="' + (58 + (i % 2) * 8) + '" width="32" height="70" fill="#4a2e22"/>' + '<rect class="mk-bl mk-bl' + (i + 1) + '" x="' + (240 + i * 34) + '" y="' + (72 + (i % 2) * 8) + '" width="7" height="9" fill="#ffd98a"/><rect x="' + (252 + i * 34) + '" y="' + (90 + (i % 2) * 8) + '" width="7" height="9" fill="#ffd98a" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a1d24"/>' +
      '<rect x="220" y="30" width="160" height="104" fill="#0d1230" stroke="#6b4a3a" stroke-width="6"/>' + bs +
      '<circle cx="356" cy="50" r="9" fill="#f7f0d0"/><path d="M300 30v104M220 82h160" stroke="#6b4a3a" stroke-width="4"/>' +
      /* lamp glow */
      '<circle cx="80" cy="64" r="60" fill="' + PINK + '" opacity=".14"/><path d="M66 40h28l-6 22h-16z" fill="' + PINK + '"/><rect x="78" y="62" width="4" height="40" fill="#222"/>' +
      /* desk */
      '<rect x="0" y="146" width="400" height="12" fill="#5a3b28"/><rect x="0" y="158" width="400" height="102" fill="#3a2619"/>' +
      '<rect x="52" y="152" width="84" height="50" rx="4" fill="#1b1b1f" stroke="#555" stroke-width="2"/>' + pads +
      /* tape deck */
      '<rect x="150" y="150" width="96" height="56" rx="4" fill="#d9d4c7" stroke="#777" stroke-width="2"/>' +
      '<g class="mk-spin"><circle cx="176" cy="172" r="12" fill="#333"/><path d="M176 162v20M166 172h20" stroke="#bbb" stroke-width="2"/></g>' +
      '<g class="mk-spin"><circle cx="220" cy="172" r="12" fill="#333"/><path d="M220 162v20M210 172h20" stroke="#bbb" stroke-width="2"/></g>' +
      '<rect x="166" y="188" width="64" height="12" fill="#fff"/><text x="198" y="198" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="10" fill="#c21d6b">10k</text>' +
      /* meters */
      '<rect x="262" y="150" width="70" height="56" rx="4" fill="#111" stroke="#555" stroke-width="2"/>' +
      [272, 286, 300, 314].map((x, i) => '<rect class="mk-mt mk-mt' + (i % 3 + 1) + '" x="' + x + '" y="160" width="10" height="38" fill="' + (i % 2 ? GOLD : PINK) + '"/>').join("") +
      /* mic on a stand with pop filter */
      '<rect x="356" y="96" width="4" height="56" fill="#888"/><rect x="348" y="74" width="20" height="30" rx="10" fill="#c9ced6" stroke="#666" stroke-width="2"/>' +
      '<circle cx="330" cy="90" r="13" fill="none" stroke="#999" stroke-width="2"/><circle cx="330" cy="90" r="11" fill="#000" opacity=".35"/>' +
      txt("THE 10K STUDIO", 200, 236, 13, CREAM, 'letter-spacing="4"'));
  }

  /* 5. Macon St & Lewis Av: the old Macon Library behind (red brick, limestone trim, tall arched windows), the wall with MIKE tagged, green street signs */
  function corner() {
    let arch = "";
    for (let x = 96; x < 304; x += 42) arch += '<path d="M' + x + ' 120v-34q12-16 24 0v34z" fill="#2c3a4a"/><path d="M' + x + ' 120v-34q12-16 24 0v34z" fill="#ffd98a" opacity=".3" class="mk-bl mk-bl' + ((x / 42) % 4 + 1 | 0) + '"/>';
    const leaf = (x, y, cls) => '<path class="mk-leaf ' + cls + '" d="M' + x + ' ' + y + 'q5-6 10 0q-5 6-10 0z" fill="#d9a441"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mkc)"/>' +
      '<rect x="80" y="54" width="240" height="96" fill="#9b3d2c"/>' +
      '<path d="M70 56h260l-12-14h-236z" fill="#e8dcc2"/><rect x="80" y="70" width="240" height="6" fill="#e8dcc2"/><rect x="80" y="122" width="240" height="6" fill="#e8dcc2"/>' + arch +
      '<path d="M176 150v-22h48v22" fill="#e8dcc2"/>' +
      txt("PUBLIC LIBRARY", 200, 66, 8, "#5a2a1e", 'letter-spacing="2"') +
      /* tree */
      '<rect x="22" y="70" width="8" height="80" fill="#4a3424"/><circle cx="26" cy="64" r="30" fill="#4f7a3a"/><circle cx="46" cy="78" r="20" fill="#5d8a44"/>' +
      leaf(40, 60, "") + leaf(60, 70, "mk-leaf2") + leaf(20, 80, "mk-leaf3") +
      /* the wall */
      '<rect x="0" y="146" width="400" height="80" fill="#3b3a40"/>' +
      (() => { let b = ""; for (let y = 156; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#323137" stroke-width="1"/>'; return b; })() +
      '<ellipse class="mk-mist" cx="120" cy="190" rx="110" ry="34" fill="' + PINK + '"/>' +
      tag("MIKE", 30, 210, 56, PINK, -5) + tag("10K", 196, 216, 26, GOLD, -4) + tag("sLUms", 250, 172, 18, CREAM, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="mk-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + SKYB + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="300" y="66" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Macon St", 348, 82, 12, "#fff") +
      '<rect x="300" y="92" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Lewis Av", 348, 108, 12, "#fff") +
      '<circle class="mk-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("mkc", "#f0a76a", "#6a4a7a"));
  }

  window.SCENES = { ralph: ralph, hackney: hackney, philly: philly, studio: studio, corner: corner };
})();
