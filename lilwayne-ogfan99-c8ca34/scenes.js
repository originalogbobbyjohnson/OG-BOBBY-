/* lilwayne scenes (Regions tab: New Orleans; Hollygrove, 17th Ward, Uptown - where Lil Wayne grew up). CSS classes and ids prefixed lw- (the page's own anim-train is kept).
   1 S Carrollton Av / S Claiborne Av: the end of the St. Charles streetcar line (12) and the RTA 3 Tulane-Elmwood hub by Palmer Park, the olive-green car rolling in.
   2 The 17th Street Canal at sunrise ("first came the hurricane, then the morning sun" - Tie My Hands): the rebuilt floodwall and pump station, a pelican gliding by.
   3 His skatepark in the Lower Ninth Ward (he opened it in 2012): plywood ramps in a warehouse, a board rolling up the bowl.
   4 Lil Weezyana Fest, his own hometown festival: the stage at night, lights sweeping, hands up in the crowd.
   5 Eagle St and Forshey St in Hollygrove ("Eagle Street to be specific"): green signs, WEEZY tagged on the wall, the white Hancock Whitney Center tower on the skyline behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lwflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.lw-flk{animation:lwflick 2.2s infinite}.lw-flk2{animation-delay:.7s}' +
    '@keyframes lwmoss{0%,100%{transform:skewX(0)}50%{transform:skewX(6deg)}}.lw-moss{transform-box:fill-box;transform-origin:50% 0%;animation:lwmoss 3.2s ease-in-out infinite}.lw-moss2{animation-delay:-1.6s}' +
    '@keyframes lwbird{from{transform:translate(-80px,20px)}to{transform:translate(470px,-10px)}}.lw-bird{animation:lwbird 13s linear infinite;animation-delay:-4s}' +
    '@keyframes lwwing{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.4)}}.lw-wing{transform-box:fill-box;transform-origin:50% 100%;animation:lwwing .9s ease-in-out infinite}' +
    '@keyframes lwrip{0%,100%{transform:translateX(0)}50%{transform:translateX(9px)}}.lw-rip{animation:lwrip 3s ease-in-out infinite}.lw-rip2{animation-delay:-1.5s}' +
    '@keyframes lwsun{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.lw-sun{animation:lwsun 6s ease-in-out infinite}' +
    '@keyframes lwglow{0%,100%{opacity:.35}50%{opacity:.9}}.lw-glow{animation:lwglow 3s ease-in-out infinite}' +
    '@keyframes lwboard{0%{transform:translate(0,0) rotate(0)}40%{transform:translate(150px,0) rotate(0)}55%{transform:translate(196px,-46px) rotate(-55deg)}70%{transform:translate(150px,0) rotate(0)}100%{transform:translate(0,0) rotate(0)}}.lw-board{animation:lwboard 4s ease-in-out infinite}' +
    '@keyframes lwbeam{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.lw-beam{transform-box:fill-box;transform-origin:50% 0%;animation:lwbeam 3.4s ease-in-out infinite}.lw-beam2{animation-delay:-1.7s}' +
    '@keyframes lwbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.lw-bob{animation:lwbob .6s ease-in-out infinite}.lw-bob2{animation-delay:-.3s}' +
    '@keyframes lwblink{0%,100%{opacity:.3}50%{opacity:1}}.lw-bl{animation:lwblink 1.2s ease-in-out infinite}.lw-bl2{animation-delay:-.6s}' +
    '@keyframes lwspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lw-sp{animation:lwspray 1.4s ease-out infinite}.lw-sp2{animation-delay:.45s}' +
    '@keyframes lwleaf{0%{transform:translate(0,-10px) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(-30px,120px) rotate(200deg);opacity:0}}.lw-leaf{animation:lwleaf 5s linear infinite}.lw-leaf2{animation-delay:-2.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="' + (txt.length * 9 + 14) + '" height="20" rx="10" fill="' + color + '"/><text x="' + (x + (txt.length * 9 + 14) / 2) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const RED = "#ff4d4d", GOLD = "#ffd23f", BLUE = "#39c0ff", SCG = "#2e7d32", BUS = "#c62828";
  const oak = (cx, cy, r, c) => '<g><ellipse cx="' + cx + '" cy="' + cy + '" rx="' + r + '" ry="' + (r * 0.45) + '" fill="' + c + '"/><ellipse cx="' + (cx - r * 0.5) + '" cy="' + (cy + r * 0.1) + '" rx="' + (r * 0.55) + '" ry="' + (r * 0.32) + '" fill="' + c + '"/><ellipse cx="' + (cx + r * 0.5) + '" cy="' + (cy + r * 0.12) + '" rx="' + (r * 0.55) + '" ry="' + (r * 0.3) + '" fill="' + c + '"/>' +
    [-0.6, -0.2, 0.2, 0.6].map((k, i) => '<path class="lw-moss' + (i % 2 ? " lw-moss2" : "") + '" d="M' + (cx + k * r) + ' ' + (cy + r * 0.25) + 'q-3 14 1 24q-2 8 0 12" stroke="#9aa58c" stroke-width="3" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const shotgun = (x, y, w, h, body, trim) => '<g><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + body + '"/><path d="M' + (x - 4) + ' ' + y + 'l' + (w / 2 + 4) + ' -' + (h * 0.42) + 'l' + (w / 2 + 4) + ' ' + (h * 0.42) + 'z" fill="' + trim + '"/>' +
    '<rect x="' + (x + w * 0.14) + '" y="' + (y + h * 0.25) + '" width="' + (w * 0.26) + '" height="' + (h * 0.48) + '" fill="#2a3440" stroke="#fff" stroke-width="1.5"/><rect x="' + (x + w * 0.58) + '" y="' + (y + h * 0.25) + '" width="' + (w * 0.26) + '" height="' + (h * 0.75) + '" fill="#4a3426" stroke="#fff" stroke-width="1.5"/>' +
    '<rect x="' + (x - 4) + '" y="' + (y + h - 4) + '" width="' + (w + 8) + '" height="5" fill="#ddd"/></g>';

  /* 1. S Carrollton Av / S Claiborne Av, end of the St. Charles line */
  function lwstation() {
    const win = Array.from({ length: 8 }, (_, i) => '<rect x="' + (54 + i * 32) + '" y="122" width="24" height="24" rx="2" fill="#2a2a22" stroke="#e9d38a" stroke-width="2.5"/>').join("");
    const car = '<g class="anim-train"><rect x="40" y="104" width="292" height="12" rx="6" fill="#6a6f68"/><rect x="40" y="114" width="292" height="72" rx="6" fill="#3f6a3a" stroke="#203a1e" stroke-width="2"/>' + win +
      '<rect x="40" y="152" width="292" height="5" fill="#e9d38a"/><rect x="40" y="170" width="292" height="16" fill="#7a2a22"/>' +
      '<rect x="300" y="122" width="26" height="46" rx="2" fill="#e9d38a"/><rect x="304" y="126" width="18" height="38" fill="#2a2a22"/>' +
      '<rect x="46" y="106" width="96" height="10" rx="2" fill="#111"/><text x="94" y="114" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffd36a">S. CLAIBORNE</text>' +
      '<path d="M190 104l60 -46" stroke="#222" stroke-width="2.5"/><circle cx="250" cy="58" r="3" fill="#222"/>' +
      '<circle cx="90" cy="188" r="9" fill="#1c1c1c"/><circle cx="130" cy="188" r="9" fill="#1c1c1c"/><circle cx="250" cy="188" r="9" fill="#1c1c1c"/><circle cx="290" cy="188" r="9" fill="#1c1c1c"/>' +
      '<circle class="lw-flk" cx="336" cy="140" r="4" fill="#fff6c2"/></g>';
    /* Palmer Park behind: iron fence and a white gazebo under the oaks */
    const park = '<g><path d="M220 96v-26h50v26" fill="#f2efe6"/><path d="M212 72l33 -20l33 20z" fill="#d9d2c2"/><path d="M226 96v-22M238 96v-22M252 96v-22M264 96v-22" stroke="#e6e0d2" stroke-width="2"/></g>' +
      '<path d="M0 98H400" stroke="#1f1f1f" stroke-width="2"/>' + Array.from({ length: 41 }, (_, i) => '<path d="M' + (i * 10) + ' 98v-14" stroke="#1f1f1f" stroke-width="1.5"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lws1)"/>' +
      oak(70, 44, 96, "#2f5a34") + oak(330, 30, 90, "#2a5230") + park +
      '<path d="M0 58H400" stroke="#333" stroke-width="1.2"/>' +
      '<rect x="0" y="98" width="400" height="88" fill="#7aa35a"/>' +
      '<rect x="0" y="186" width="400" height="10" fill="#7a6a52"/><path d="M0 190h400M0 194h400" stroke="#4a4038" stroke-width="2"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5d5a55"/>' +
      car +
      '<rect x="40" y="206" width="320" height="44" rx="3" fill="#111"/><text x="54" y="224" ' + font + ' font-size="14" fill="#fff">S Carrollton Av /</text><text x="54" y="242" ' + font + ' font-size="14" fill="#fff">S Claiborne Av</text>' +
      badge(222, 228, "12", SCG) + badge(262, 228, "3", BUS) + '<text x="292" y="224" ' + font + ' font-size="8" fill="#cfd8e0">STREETCAR</text><text x="292" y="236" ' + font + ' font-size="8" fill="#cfd8e0">+ BUS HUB</text>',
      sky("lws1", "#6fa8d8", "#f6e2bc"));
  }

  /* 2. The 17th Street Canal at sunrise */
  function lwcanal() {
    const panels = Array.from({ length: 15 }, (_, i) => '<rect x="' + (i * 20) + '" y="132" width="19" height="40" fill="' + (i % 2 ? "#b9b4aa" : "#c4bfb5") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lws2)"/>' +
      '<g class="lw-sun"><circle cx="300" cy="104" r="34" fill="#ffd27a"/><circle class="lw-glow" cx="300" cy="104" r="48" fill="#ffd27a" opacity=".35"/></g>' +
      /* the dark cloud with its silver lining */
      '<g><ellipse cx="120" cy="56" rx="70" ry="20" fill="#5a5a74"/><ellipse cx="90" cy="46" rx="36" ry="18" fill="#5a5a74"/><ellipse cx="146" cy="44" rx="30" ry="16" fill="#5a5a74"/>' +
      '<path class="lw-glow" d="M56 52q20 -26 54 -22q26 -18 56 4" stroke="#e8eef6" stroke-width="3" fill="none" stroke-linecap="round"/></g>' +
      /* pump station on the right */
      '<g><rect x="300" y="108" width="100" height="64" fill="#d8d2c6"/><rect x="296" y="104" width="108" height="8" fill="#9a948a"/>' + [312, 336, 360, 384].map(x => '<rect x="' + x + '" y="120" width="12" height="40" fill="#5a6a7a"/>').join("") + '</g>' +
      '<text x="350" y="100" text-anchor="middle" ' + font + ' font-size="8" fill="#3a3a3a">PUMP STATION</text>' +
      panels + '<rect x="0" y="128" width="300" height="6" fill="#8e8a82"/>' +
      '<rect x="0" y="172" width="400" height="88" fill="#4e7488"/>' +
      '<path d="M220 172l80 -0" stroke="#ffd27a" stroke-width="0"/>' +
      '<g class="lw-rip"><path d="M30 190h60M200 204h80M320 186h50" stroke="#9fc3d2" stroke-width="2.5" stroke-linecap="round"/></g>' +
      '<g class="lw-rip lw-rip2"><path d="M110 220h70M260 232h90M20 240h50" stroke="#c9e2ea" stroke-width="2.5" stroke-linecap="round"/></g>' +
      '<path d="M270 180h60M280 196h40M286 212h28" stroke="#ffd27a" stroke-width="3" stroke-linecap="round" opacity=".7"/>' +
      '<g class="lw-bird"><ellipse cx="56" cy="86" rx="16" ry="6" fill="#9a8a74"/><circle cx="74" cy="80" r="5" fill="#9a8a74"/><path d="M78 80l18 4l-18 3z" fill="#e0a040"/><path class="lw-wing" d="M40 84q16 -26 34 -2" stroke="#6a5a48" stroke-width="5" fill="none" stroke-linecap="round"/></g>' +
      '<rect x="20" y="140" width="168" height="22" rx="2" fill="#1d2a36"/><text x="104" y="156" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">17TH STREET CANAL</text>',
      sky("lws2", "#3a4a7a", "#f6b07a"));
  }

  /* 3. The skatepark in the Lower Ninth Ward */
  function lwskate() {
    const beams = Array.from({ length: 7 }, (_, i) => '<path d="M' + (i * 64) + ' 0L' + (i * 64 + 30) + ' 40" stroke="#4a4a52" stroke-width="3"/>').join("");
    const lights = Array.from({ length: 6 }, (_, i) => '<g><path d="M' + (40 + i * 64) + ' 40v14" stroke="#333" stroke-width="2"/><rect x="' + (30 + i * 64) + '" y="54" width="20" height="6" rx="2" fill="#ddd"/><circle class="lw-bl' + (i % 2 ? " lw-bl2" : "") + '" cx="' + (40 + i * 64) + '" cy="62" r="4" fill="#fff6c2"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="#2c2c34"/>' + '<rect x="0" y="0" width="400" height="44" fill="#3a3a44"/>' + beams + lights +
      /* back wall with painted color blocks */
      '<rect x="0" y="70" width="400" height="90" fill="#3e4250"/><rect x="20" y="82" width="110" height="44" fill="' + RED + '" opacity=".8"/><rect x="140" y="88" width="120" height="38" fill="' + GOLD + '" opacity=".8"/><rect x="270" y="80" width="110" height="46" fill="' + BLUE + '" opacity=".8"/>' +
      tag("SKATE", 34, 116, 30, "#fff", -4) + tag("NOLA", 160, 118, 28, "#1a1a1a", -3) + tag("TUNECHI", 280, 114, 19, "#fff", -5) +
      /* plywood quarter pipes and a funbox */
      '<path d="M0 230V150q70 0 90 80z" fill="#c9a06a" stroke="#8a6a40" stroke-width="2"/><path d="M0 150h14" stroke="#cfd6de" stroke-width="5"/>' +
      '<path d="M400 230V150q-70 0 -90 80z" fill="#c9a06a" stroke="#8a6a40" stroke-width="2"/><path d="M386 150h14" stroke="#cfd6de" stroke-width="5"/>' +
      '<rect x="0" y="228" width="400" height="32" fill="#8c8a86"/>' +
      '<path d="M150 228l20 -20h60l20 20z" fill="#b8905a" stroke="#8a6a40" stroke-width="2"/>' +
      /* the board rolling */
      '<g class="lw-board"><g transform="translate(100 214)"><rect x="0" y="0" width="44" height="6" rx="3" fill="' + RED + '" stroke="#111" stroke-width="1.5"/><circle cx="9" cy="10" r="4" fill="#f2f2f2"/><circle cx="35" cy="10" r="4" fill="#f2f2f2"/></g></g>' +
      '<rect x="120" y="14" width="160" height="22" rx="2" fill="#111"/><text x="200" y="30" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">LOWER NINTH WARD</text>');
  }

  /* 4. Lil Weezyana Fest stage at night */
  function lwfest() {
    const crowd = Array.from({ length: 14 }, (_, i) => {
      const x = 14 + i * 28, cls = 'lw-bob' + (i % 2 ? " lw-bob2" : "");
      return '<g class="' + cls + '"><circle cx="' + x + '" cy="226" r="11" fill="#14141c"/><rect x="' + (x - 13) + '" y="234" width="26" height="30" rx="8" fill="#14141c"/>' + (i % 3 === 0 ? '<path d="M' + (x + 8) + ' 230l10 -30" stroke="#14141c" stroke-width="6" stroke-linecap="round"/>' : '') + '</g>';
    }).join("");
    const skyline = '<g fill="#232846"><rect x="0" y="120" width="40" height="40"/><rect x="34" y="96" width="22" height="64"/><rect x="60" y="110" width="30" height="50"/><rect x="330" y="104" width="26" height="56"/><rect x="356" y="120" width="44" height="40"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lws4)"/>' + skyline +
      '<path class="lw-beam" d="M120 34l-34 150h68z" fill="' + GOLD + '" opacity=".22"/><path class="lw-beam lw-beam2" d="M280 34l-34 150h68z" fill="' + RED + '" opacity=".22"/><path class="lw-beam lw-beam2" d="M200 34l-34 150h68z" fill="' + BLUE + '" opacity=".18"/>' +
      /* truss and stage */
      '<rect x="90" y="30" width="220" height="10" fill="#5a5a66"/><rect x="90" y="30" width="10" height="150" fill="#5a5a66"/><rect x="300" y="30" width="10" height="150" fill="#5a5a66"/>' +
      Array.from({ length: 11 }, (_, i) => '<path d="M' + (100 + i * 20) + ' 30l10 10" stroke="#7a7a86" stroke-width="1.5"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<circle class="lw-bl' + (i % 2 ? " lw-bl2" : "") + '" cx="' + (115 + i * 34) + '" cy="44" r="5" fill="' + [GOLD, RED, BLUE][i % 3] + '"/>').join("") +
      '<rect x="100" y="56" width="200" height="30" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="77" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" fill="' + GOLD + '">LIL WEEZYANA FEST</text>' +
      '<rect x="100" y="86" width="200" height="94" fill="#1a1a24"/><rect x="80" y="180" width="240" height="14" fill="#3a3a46"/>' +
      '<rect x="112" y="140" width="28" height="40" fill="#0c0c10"/><rect x="260" y="140" width="28" height="40" fill="#0c0c10"/><circle cx="126" cy="152" r="7" fill="#2a2a34"/><circle cx="126" cy="168" r="7" fill="#2a2a34"/><circle cx="274" cy="152" r="7" fill="#2a2a34"/><circle cx="274" cy="168" r="7" fill="#2a2a34"/>' +
      '<path d="M200 180v-34" stroke="#888" stroke-width="2"/><circle cx="200" cy="144" r="3" fill="#bbb"/>' +
      crowd,
      sky("lws4", "#0c0a1e", "#3a1e4a"));
  }

  /* 5. Eagle St and Forshey St, Hollygrove */
  function lwcorner() {
    const tower = '<g><rect x="250" y="22" width="40" height="110" fill="#e9e9ec"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M250 ' + (28 + i * 8) + 'h40" stroke="#b9bcc4" stroke-width="1.5"/>').join("") + '<rect x="254" y="14" width="32" height="8" fill="#d0d0d6"/></g>';
    const others = '<g fill="#6a6e86"><rect x="214" y="70" width="30" height="62"/><rect x="296" y="60" width="26" height="72"/><rect x="326" y="84" width="34" height="48"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lws5)"/>' + others + tower +
      shotgun(18, 96, 70, 64, "#e8b4c8", "#8a4a6a") + shotgun(104, 100, 64, 60, "#a8d4c8", "#3a6a5a") +
      oak(372, 100, 46, "#2a4a30") +
      /* the wall */
      '<rect x="0" y="150" width="400" height="74" fill="#e8dcc0"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (158 + i * 9) + 'h400" stroke="#d6c8a8" stroke-width="1"/>').join("") +
      tag("WEEZY", 18, 204, 54, RED, -6) + tag("YOUNG MONEY", 200, 176, 19, GOLD, -4) + tag("TUNECHI", 205, 208, 21, BLUE, -5) + tag("17TH WARD", 300, 216, 13, "#fff", -6) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="370" y="90" width="6" height="134" fill="#2f2f2f"/>' + sign(246, 92, 140, "Eagle St") + sign(256, 118, 130, "Forshey St") +
      '<rect x="8" y="112" width="4" height="112" fill="#222"/><circle class="lw-flk" cx="10" cy="110" r="7" fill="#ffe9a8"/>' +
      '<g class="lw-sp"><circle cx="186" cy="178" r="3" fill="' + RED + '" opacity=".7"/></g><g class="lw-sp lw-sp2"><circle cx="192" cy="172" r="2" fill="' + RED + '" opacity=".6"/></g>' +
      '<g class="lw-leaf"><ellipse cx="340" cy="70" rx="4" ry="2" fill="#5a7a3a"/></g><g class="lw-leaf lw-leaf2"><ellipse cx="120" cy="60" rx="4" ry="2" fill="#6a8a3a"/></g>',
      sky("lws5", "#2b3a6a", "#f0a874"));
  }

  window.SCENES = { lwstation: lwstation, lwcanal: lwcanal, lwskate: lwskate, lwfest: lwfest, lwcorner: lwcorner };
})();
