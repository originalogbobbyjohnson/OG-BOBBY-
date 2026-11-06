/* The Notorious B.I.G. game (NYC map, Brooklyn: Clinton Hill / Bed-Stuy). The C train at Clinton-Washington Avs under Fulton St,
   Queen of All Saints on Lafayette Av (his middle school), Bishop Loughlin Memorial High School on Clermont Av, the Daddy's House studio
   session (Manhattan, where his second album was cut), and Fulton St & St James Pl (Christopher Wallace Way) with 226 St James Pl, the building he grew up in, behind.
   400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.5s}.bl3{animation-delay:1s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes glow{0%,100%{opacity:.55}50%{opacity:1}}.gl{animation:glow 3s ease-in-out infinite}.gl2{animation-delay:-1s}.gl3{animation-delay:-2s}' +
    '@keyframes fly{from{transform:translate(-40px,0)}to{transform:translate(460px,-30px)}}.bird{animation:fly 9s linear infinite}.bird2{animation-delay:-4.5s}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.ball{animation:bounce .9s ease-in infinite alternate}' +
    '@keyframes vu{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}80%{transform:scaleY(.85)}}.vu{transform-box:fill-box;transform-origin:50% 100%;animation:vu .7s ease-in-out infinite}.vu2{animation-delay:-.2s}.vu3{animation-delay:-.45s}' +
    '@keyframes spin{to{transform:rotate(360deg)}}.spin{transform-box:fill-box;transform-origin:50% 50%;animation:spin 2.2s linear infinite}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}.thump{transform-box:fill-box;transform-origin:50% 50%;animation:thump .45s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark, r) => { r = r || 11; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * 0.48) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (r * 1.36) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>'; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, c) => '<circle cx="' + x + '" cy="' + (y - 30) + '" r="6" fill="' + c + '"/><rect x="' + (x - 6) + '" y="' + (y - 24) + '" width="12" height="16" rx="4" fill="' + c + '"/><path d="M' + (x - 3) + ' ' + (y - 9) + 'v9M' + (x + 3) + ' ' + (y - 9) + 'v9" stroke="' + c + '" stroke-width="4" stroke-linecap="round"/>';
  const ACE = "#0039a6", GOLD = "#f4b942", RED = "#d7263d", TEAL = "#1b998b", CREAM = "#f4ead8", SIGN = "#0f6b3a";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const blade = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="20" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 14.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';

  /* 1. The C pulling into Clinton-Washington Avs, underground under Fulton St: white tile walls, the light green trim line with a dark green border,
        dark green mosaic name tablets with a light green border, CLINTON / WASHINGTON captions, emerald green columns at the fare control */
  function station() {
    let tile = "";
    for (let y = 30; y < 150; y += 10) tile += '<path d="M0 ' + y + 'h400" stroke="#d9dcd6" stroke-width="1"/>';
    let win = "";
    for (let x = 30; x < 300; x += 36) win += '<rect x="' + x + '" y="126" width="24" height="22" rx="2" fill="#bcd3ea" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#f1f0e9"/>' + tile +
      '<rect x="0" y="0" width="400" height="26" fill="#3a3d40"/>' +
      [8, 72, 136].map(x => '<rect x="' + x + '" y="10" width="40" height="5" rx="2" fill="#fffbe6" class="flk"/>').join("") +
      /* trim line */
      '<rect x="0" y="44" width="400" height="12" fill="#1f5e35"/><rect x="0" y="46" width="400" height="8" fill="#8fd18a"/>' +
      /* mosaic tablet */
      '<rect x="40" y="66" width="190" height="34" fill="#8fd18a"/><rect x="44" y="70" width="182" height="26" fill="#1f5e35"/>' +
      '<text x="135" y="88" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" letter-spacing="1">CLINTON-WASHINGTON</text>' +
      '<rect x="250" y="70" width="64" height="12" fill="#111"/><text x="282" y="79.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">CLINTON</text>' +
      '<rect x="250" y="88" width="64" height="12" fill="#111"/><text x="282" y="97.5" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">WASHINGTON</text>' +
      /* black hanging sign */
      '<rect x="120" y="20" width="200" height="22" rx="2" fill="#111"/><rect x="120" y="20" width="200" height="2.5" fill="#fff"/>' +
      '<text x="130" y="36" ' + font + ' font-size="12" fill="#fff">Clinton-Washington Avs</text>' + bullet(306, 31, "C", ACE, false, 8) +
      /* emerald columns by the turnstiles */
      '<rect x="338" y="26" width="12" height="150" fill="#0f8a5f"/><rect x="376" y="26" width="12" height="150" fill="#0f8a5f"/>' +
      '<rect x="350" y="130" width="26" height="26" fill="#9aa1a8"/><path d="M352 140h22" stroke="#555" stroke-width="3"/>' +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="6" y="114" width="310" height="62" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="0" y="152" width="316" height="4" fill="' + ACE + '"/>' +
        '<rect x="296" y="124" width="16" height="24" rx="2" fill="#bcd3ea"/>' + bullet(304, 163, "C", ACE, false, 9) +
        '<circle cx="16" cy="166" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform */
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/><rect x="0" y="186" width="400" height="74" fill="#8d8f8c"/>' +
      '<path d="M0 214h400M0 240h400" stroke="#7a7c79" stroke-width="2"/>' +
      person(70, 246, "#2a2a33") + person(220, 250, "#3b2a24") +
      tag("FULTON ST", 238, 236, 16, GOLD, -3)
    );
  }

  /* 2. Queen of All Saints on Lafayette Av: the pale limestone Gothic church and school where he went to middle school,
        the tall pointed window full of stained glass glowing, lancets, pinnacles, pigeons crossing the sky */
  function queen() {
    let glass = "";
    const cols = ["#2b59c3", "#d7263d", "#f4b942", "#1b998b", "#7b2cbf"];
    for (let r = 0; r < 6; r++) for (let c = 0; c < 4; c++) glass += '<rect class="gl gl' + ((r + c) % 3 + 1) + '" x="' + (176 + c * 12) + '" y="' + (96 + r * 13) + '" width="11" height="12" fill="' + cols[(r * 2 + c) % 5] + '"/>';
    const lancet = (x, y) => '<path d="M' + x + ' ' + (y + 46) + 'V' + (y + 12) + 'q8-16 16 0V' + (y + 46) + 'z" fill="#33415c" stroke="#b9ae95" stroke-width="2"/><path class="gl gl2" d="M' + (x + 3) + ' ' + (y + 43) + 'V' + (y + 14) + 'q5-10 10 0V' + (y + 43) + 'z" fill="#4a6fa5" opacity=".7"/>';
    const pin = (x, y, h) => '<path d="M' + (x - 6) + ' ' + y + 'l6-' + h + ' 6 ' + h + 'z" fill="#ddd4bf" stroke="#b9ae95" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#q1)"/>' +
      '<g class="bird"><path d="M0 40q5-5 10 0q5-5 10 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g><g class="bird bird2"><path d="M0 60q4-4 8 0q4-4 8 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g>' +
      /* side school wing */
      '<rect x="0" y="110" width="110" height="110" fill="#e4dccb" stroke="#b9ae95" stroke-width="2"/>' +
      [14, 48, 82].map(x => '<rect x="' + x + '" y="126" width="18" height="26" fill="#33415c"/><rect x="' + x + '" y="166" width="18" height="26" fill="#33415c"/>').join("") +
      '<rect x="290" y="110" width="110" height="110" fill="#e4dccb" stroke="#b9ae95" stroke-width="2"/>' +
      [302, 336, 370].map(x => '<rect x="' + x + '" y="126" width="18" height="26" fill="#33415c"/><rect x="' + x + '" y="166" width="18" height="26" fill="#33415c"/>').join("") +
      /* main gable front */
      '<path d="M110 220V96L200 30L290 96V220z" fill="#ece4d2" stroke="#b9ae95" stroke-width="3"/>' +
      pin(110, 96, 26) + pin(290, 96, 26) + pin(200, 30, 18) +
      '<path d="M196 12h8M200 6v14" stroke="#b9ae95" stroke-width="3"/>' +
      /* the big pointed window */
      '<path d="M170 176V104q30-44 60 0V176z" fill="#1d2440" stroke="#b9ae95" stroke-width="4"/>' + glass +
      '<path d="M170 176V104q30-44 60 0V176z" fill="none" stroke="#b9ae95" stroke-width="4"/><path d="M200 66v110M170 128h60M170 152h60" stroke="#b9ae95" stroke-width="2"/>' +
      lancet(124, 112) + lancet(260, 112) +
      /* doors */
      '<path d="M184 220v-16q16-14 32 0v16z" fill="#5a2e1c" stroke="#b9ae95" stroke-width="3"/><path d="M200 198v22" stroke="#3a1d10" stroke-width="2"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#7d7f84"/><rect x="0" y="220" width="400" height="5" fill="#a3a5a9"/>' +
      '<g class="car"><rect x="0" y="236" width="44" height="14" rx="4" fill="' + RED + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="34" cy="250" r="4" fill="#111"/></g>' +
      '<text x="200" y="186" text-anchor="middle" ' + font + ' font-size="8" fill="#6b5f48" letter-spacing="2">QUEEN OF ALL SAINTS</text>',
      sky("q1", "#7fb4e6", "#e6f1fa"));
  }

  /* 3. Bishop Loughlin Memorial High School on Clermont Av: the boxy red-brick school, big windows, the limestone Tudor-arch doorway
        and carved shield, the wide schoolyard where a ball keeps bouncing */
  function loughlin() {
    let brick = "", wins = "";
    for (let y = 40; y < 196; y += 7) brick += '<path d="M40 ' + y + 'h320" stroke="#8a3524" stroke-width="1" opacity=".5"/>';
    for (let r = 0; r < 4; r++) for (let c = 0; c < 7; c++) { const x = 54 + c * 44, y = 50 + r * 34; if (r === 3 && (c === 3)) continue;
      wins += '<rect x="' + x + '" y="' + y + '" width="28" height="24" fill="#d8e2ea" stroke="#e8dcc0" stroke-width="2.5"/><path d="M' + (x + 14) + ' ' + y + 'v24M' + x + ' ' + (y + 12) + 'h28" stroke="#e8dcc0" stroke-width="1.2"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#l1)"/>' +
      '<rect x="40" y="36" width="320" height="160" fill="#a8462f"/>' + brick +
      '<rect x="36" y="30" width="328" height="8" fill="#e8dcc0"/><rect x="40" y="152" width="320" height="4" fill="#e8dcc0"/>' + wins +
      /* Tudor-arch limestone entrance */
      '<rect x="176" y="142" width="48" height="54" fill="#e8dcc0"/><path d="M184 196v-30q16-14 32 0v30z" fill="#3b2a20"/>' +
      '<path d="M190 128h20v10q-10 8-20 0z" fill="#e8dcc0" stroke="#b9a782" stroke-width="1.5"/><path d="M200 130v12M194 134h12" stroke="#8a3524" stroke-width="2"/>' +
      '<rect x="100" y="38" width="200" height="11" fill="#e8dcc0"/><text x="200" y="46.5" text-anchor="middle" ' + font + ' font-size="7" fill="#5a3a20" letter-spacing="1.5">BISHOP LOUGHLIN MEMORIAL HIGH SCHOOL</text>' +
      /* yard + fence */
      '<rect x="0" y="196" width="400" height="64" fill="#5c5f63"/>' +
      '<path d="M0 206h400" stroke="#c9ced6" stroke-width="2"/>' + (() => { let f = ""; for (let x = 0; x < 400; x += 10) f += '<path d="M' + x + ' 206v-22" stroke="#c9ced6" stroke-width="1.2"/>'; return f; })() +
      '<path d="M0 184h400" stroke="#c9ced6" stroke-width="2"/>' +
      '<rect x="330" y="150" width="4" height="70" fill="#d7dde3"/><rect x="314" y="146" width="36" height="22" fill="#f4f4f4" stroke="#999"/><circle cx="332" cy="172" r="6" fill="none" stroke="' + RED + '" stroke-width="2"/>' +
      '<g class="ball"><circle cx="300" cy="238" r="7" fill="#e07a2e"/><path d="M293 238h14M300 231v14" stroke="#7a3a10" stroke-width="1"/></g>' +
      person(270, 254, "#1f2a44") + person(120, 250, "#2a1f1a") + person(146, 252, "#3a2a50"),
      sky("l1", "#9cc8ef", "#eef6fb"));
  }

  /* 4. The Daddy's House studio session: the mixing board, VU meters jumping, the gold record on the wall, the mic in the booth,
        the red RECORDING light blinking, speakers thumping */
  function studio() {
    let faders = "";
    for (let x = 64; x < 336; x += 14) faders += '<rect x="' + x + '" y="178" width="3" height="30" fill="#222"/><rect class="vu' + (x % 3 ? " vu2" : "") + '" x="' + (x - 3) + '" y="' + (184 + (x % 5) * 3) + '" width="9" height="6" rx="1" fill="#e8e8e8"/>';
    let meters = "";
    for (let i = 0; i < 6; i++) meters += '<rect class="vu vu' + (i % 3 + 1) + '" x="' + (142 + i * 20) + '" y="130" width="12" height="34" fill="' + (i % 2 ? "#6cbe45" : GOLD) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a1416"/>' +
      '<rect x="0" y="0" width="400" height="160" fill="#2a1f22"/>' +
      (() => { let p = ""; for (let x = 0; x < 400; x += 20) p += '<rect x="' + x + '" y="0" width="18" height="160" fill="#33272a"/>'; return p; })() +
      /* booth window */
      '<rect x="128" y="20" width="144" height="92" rx="4" fill="#0e1a2a" stroke="#555" stroke-width="5"/>' +
      '<rect x="196" y="40" width="8" height="40" fill="#888"/><rect x="188" y="30" width="24" height="22" rx="11" fill="#2b2b2b" stroke="#bbb" stroke-width="2"/><circle cx="200" cy="64" r="16" fill="none" stroke="#666" stroke-width="2"/>' +
      '<path d="M140 104h120" stroke="#333" stroke-width="3"/>' +
      /* recording light */
      '<rect x="160" y="4" width="80" height="14" rx="3" fill="#300"/><text class="bl" x="200" y="15" text-anchor="middle" ' + font + ' font-size="10" fill="#ff3b3b" letter-spacing="2">RECORDING</text>' +
      /* gold record */
      '<circle cx="62" cy="62" r="34" fill="#7a5a1a"/><circle class="spin" cx="62" cy="62" r="28" fill="' + GOLD + '"/><circle cx="62" cy="62" r="20" fill="none" stroke="#c99a2e" stroke-width="1.5"/><circle cx="62" cy="62" r="6" fill="#1a1416"/>' +
      '<rect x="306" y="34" width="70" height="58" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><circle cx="341" cy="58" r="16" fill="#e6e6ea"/><circle cx="341" cy="58" r="4" fill="#111"/><text x="341" y="86" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">PLATINUM</text>' +
      /* speakers */
      '<rect x="20" y="112" width="60" height="76" rx="4" fill="#111"/><circle class="thump" cx="50" cy="160" r="18" fill="#2b2b2b" stroke="#555" stroke-width="3"/><circle cx="50" cy="126" r="8" fill="#2b2b2b"/>' +
      '<rect x="320" y="112" width="60" height="76" rx="4" fill="#111"/><circle class="thump" cx="350" cy="160" r="18" fill="#2b2b2b" stroke="#555" stroke-width="3"/><circle cx="350" cy="126" r="8" fill="#2b2b2b"/>' +
      /* console */
      '<path d="M40 214L60 124h280l20 90z" fill="#3a3a3f"/><rect x="132" y="124" width="136" height="44" fill="#141414"/>' + meters +
      faders +
      '<rect x="0" y="214" width="400" height="46" fill="#120d0e"/>' +
      tag("JUNIOR M.A.F.I.A.", 92, 246, 20, GOLD, -3)
    );
  }

  /* 5. Fulton St and St James Pl, co-named Christopher Wallace Way: green signs, the subway globes at the C stair, the wall tagged BIGGIE,
        and up the block behind it 226 St James Pl, the building he grew up in, third-floor window lit */
  function corner() {
    let bw = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) bw += '<rect' + (r === 2 && c === 1 ? ' class="flk"' : '') + ' x="' + (182 + c * 30) + '" y="' + (40 + r * 30) + '" width="18" height="22" fill="' + (r === 2 && c === 1 ? "#ffd98a" : (r + c) % 3 ? "#3a3550" : "#ffe7a8") + '" stroke="#e9dfc8" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(14) +
      /* neighbours + 226 St James Pl (four storeys, cornice, stoop up to the door) */
      '<rect x="20" y="56" width="150" height="120" fill="#5b3a2e"/><rect x="20" y="52" width="150" height="6" fill="#8a6a50"/>' +
      [34, 70, 106, 142].map(x => '<rect x="' + x + '" y="70" width="16" height="22" fill="#3a3550"/><rect x="' + x + '" y="108" width="16" height="22" fill="#ffe7a8" opacity=".7"/>').join("") +
      '<rect x="172" y="28" width="128" height="200" fill="#8b4a36"/><rect x="168" y="22" width="136" height="8" fill="#d8ccb0"/>' +
      (() => { let b = ""; for (let y = 34; y < 226; y += 6) b += '<path d="M172 ' + y + 'h128" stroke="#7a3e2c" stroke-width="1"/>'; return b; })() + bw +
      '<rect x="218" y="160" width="36" height="40" fill="#e9dfc8"/><rect x="223" y="168" width="26" height="32" fill="#2a1d18"/><text x="236" y="166.5" text-anchor="middle" ' + font + ' font-size="7" fill="#5b3a2e">226</text>' +
      '<path d="M212 200h48v7h6v7h6v7h6v7h-84v-7h6v-7h6v-7h6z" fill="#b9ae95"/>' +
      /* tree */
      '<circle cx="324" cy="104" r="26" fill="#2e5a3a" opacity=".9"/><rect x="322" y="118" width="5" height="110" fill="#3a2a1e"/>' +
      /* tag wall in front, left of the stoop */
      '<rect x="0" y="150" width="200" height="78" fill="#4d4b52"/>' +
      (() => { let b = ""; for (let y = 156; y < 228; y += 8) b += '<path d="M0 ' + y + 'h200" stroke="#3f3d44" stroke-width="1"/>'; return b; })() +
      tag("BIGGIE", 8, 204, 42, GOLD, -5) + tag("SPREAD LOVE", 70, 222, 15, CREAM, -4) +
      '<path d="M156 158l7 12 8-10 8 10 7-12v18h-30z" fill="' + GOLD + '" stroke="#000" stroke-width="2"/>' +
      /* subway stair globe for the C at the corner */
      '<rect x="292" y="198" width="4" height="30" fill="#2f5a3c"/><circle class="flk" cx="294" cy="194" r="6" fill="#4caf50"/>' +
      /* street */
      '<rect x="0" y="228" width="400" height="32" fill="#55575c"/><rect x="0" y="228" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="240" width="44" height="13" rx="4" fill="' + TEAL + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="34" cy="253" r="4" fill="#111"/></g>' +
      /* sign pole */
      '<rect x="378" y="52" width="5" height="176" fill="#3d4b3f"/><circle class="flk" cx="380" cy="52" r="4" fill="#fff6c2"/>' +
      blade(268, 62, 130, "Christopher Wallace Way", 10) + blade(306, 86, 92, "St James Pl") + blade(306, 110, 92, "Fulton St"),
      sky("c5", "#0a0c1a", "#2c3554"));
  }

  window.SCENES = { station: station, queen: queen, loughlin: loughlin, studio: studio, corner: corner };
})();
