/* Company Flow game (NYC map, Queens: Jamaica - Bigg Jus's home turf; El-P and Mr. Len started the group in Queens in 1992-93).
   1. Jamaica Av & Sutphin Blvd: the Q1 pulling up at the bus stop (every subway stop around Jamaica is already taken on the map).
   2. Corona Yard: the 7 yard from Bigg Jus's "Lune TNS" ("as I progressed to the 7 yard"), silver cars with a full burner under the floodlights.
   3. The elevated A over Queens with the tags on the walls and the handball court underneath ("the elevated trainline ... linin' the A").
   4. Santos Party House on Lafayette St, July 16 2011: the Company Flow reunion show, the line out front, the lights inside.
   5. Jamaica Av & 161 St: the green signs, COMPANY FLOW on the wall, the old Register building (Jamaica Center for Arts & Learning) behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cfflk{0%,100%{opacity:1}46%{opacity:.85}50%{opacity:.3}54%{opacity:.95}}.cf-flk{animation:cfflk 2.6s infinite}.cf-flk2{animation-delay:.9s}' +
    '@keyframes cfrun{from{transform:translateX(-300px)}to{transform:translateX(460px)}}.cf-run{animation:cfrun 6.5s linear infinite}' +
    '@keyframes cfmist{0%{opacity:0;transform:translate(0,0) scale(.5)}40%{opacity:.75}100%{opacity:0;transform:translate(18px,-10px) scale(1.4)}}.cf-mist{transform-box:fill-box;transform-origin:0 50%;animation:cfmist 1.4s ease-out infinite}.cf-mist2{animation-delay:.45s}.cf-mist3{animation-delay:.9s}' +
    '@keyframes cfbeam{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.cf-beam{transform-box:fill-box;transform-origin:50% 0;animation:cfbeam 3.2s ease-in-out infinite}.cf-beam2{animation-delay:-1.6s}' +
    '@keyframes cfbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.cf-bob{animation:cfbob .55s ease-in-out infinite}.cf-bob2{animation-delay:.27s}' +
    '@keyframes cfball{0%{transform:translate(0,0)}25%{transform:translate(40px,-34px)}50%{transform:translate(80px,0)}75%{transform:translate(40px,-20px)}100%{transform:translate(0,0)}}.cf-ball{animation:cfball 2.2s ease-in-out infinite}' +
    '@keyframes cfblink{0%,100%{opacity:.25}50%{opacity:1}}.cf-bl{animation:cfblink 1.5s ease-in-out infinite}.cf-bl2{animation-delay:.5s}.cf-bl3{animation-delay:1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const YEL = "#e8e23a", RED = "#ff4d2e", CYAN = "#7fd3ff", CREAM = "#f4ead8", BUSBLUE = "#0039a6", PURPLE = "#b933ad", ABLUE = "#0039a6", SIGN = "#0b6b3a";

  /* 1. Jamaica Av & Sutphin Blvd: the blue-and-white Q1 rolling in, the bus stop pole, Jamaica Av storefronts at dusk */
  function cfbus() {
    let fronts = "";
    const cols = ["#7a4a3a", "#4a5a7a", "#6a5a3a", "#3e5e4e", "#6a3e5a"];
    for (let i = 0; i < 5; i++) {
      const x = i * 82;
      fronts += '<rect x="' + x + '" y="' + (44 + (i % 2) * 10) + '" width="80" height="' + (126 - (i % 2) * 10) + '" fill="' + cols[i] + '"/>';
      for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) fronts += '<rect class="' + ((r + c + i) % 3 ? "" : "cf-bl cf-bl" + (c + 1)) + '" x="' + (x + 8 + c * 24) + '" y="' + (58 + r * 22) + '" width="14" height="14" fill="#ffd98a" opacity="' + ((r + c + i) % 3 ? ".3" : ".85") + '"/>';
      fronts += '<rect x="' + (x + 4) + '" y="128" width="72" height="11" fill="' + (i % 2 ? YEL : RED) + '" opacity=".9"/><rect x="' + (x + 8) + '" y="142" width="64" height="28" fill="#1b1d26"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#cfs1)"/>' + stars(10) + fronts +
      '<rect x="0" y="170" width="400" height="18" fill="#8d8f93"/><rect x="0" y="188" width="400" height="72" fill="#45474d"/>' +
      '<path d="M0 228 h400" stroke="#e8d27a" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="anim-train">' +
        '<rect x="20" y="148" width="252" height="64" rx="8" fill="#f2f4f6" stroke="#8a8f98" stroke-width="2"/>' +
        '<rect x="20" y="186" width="252" height="10" fill="' + BUSBLUE + '"/>' +
        [34, 76, 118, 160, 202].map(x => '<rect x="' + x + '" y="158" width="34" height="22" rx="2" fill="#26354d"/>').join("") +
        '<rect x="246" y="156" width="22" height="28" rx="3" fill="#26354d"/><rect x="236" y="150" width="32" height="8" rx="2" fill="#111"/><text x="252" y="157" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb000">Q1</text>' +
        '<circle cx="62" cy="214" r="10" fill="#111"/><circle cx="62" cy="214" r="4" fill="#777"/><circle cx="232" cy="214" r="10" fill="#111"/><circle cx="232" cy="214" r="4" fill="#777"/><circle cx="268" cy="202" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="330" y="72" width="4" height="116" fill="#9aa0a8"/>' +
      '<rect x="308" y="72" width="48" height="32" rx="2" fill="' + BUSBLUE + '"/><rect x="314" y="76" width="36" height="10" rx="1" fill="#fff"/>' + txt("BUS", 332, 84, 8, BUSBLUE) +
      '<rect x="320" y="89" width="24" height="12" fill="#fff"/>' + txt("Q1", 332, 98.5, 8, BUSBLUE) +
      person(354, 156, "#1b1b1b") + person(376, 160, "#2c2c2c", "cf-bob") +
      '<rect x="18" y="10" width="226" height="24" rx="3" fill="#111"/>' + txt("JAMAICA AV &amp; SUTPHIN BLVD", 131, 26, 10, CREAM, 'letter-spacing="1"'),
      sky("cfs1", "#141a3a", "#7a4a5a"));
  }

  /* 2. Corona Yard at night: rows of silver 7 cars, one rolling in with a full burner, floodlights, the fence, spray mist */
  function cfyard() {
    let rails = "";
    for (let y of [150, 196, 236]) rails += '<rect x="0" y="' + y + '" width="400" height="3" fill="#6b6f78"/>';
    let ties = "";
    for (let x = 0; x < 400; x += 14) ties += '<rect x="' + x + '" y="236" width="6" height="8" fill="#3a2a22"/>';
    const car = (x, y, w, art) => {
      let wins = "";
      for (let i = 0; i < 4; i++) wins += '<rect x="' + (x + 14 + i * (w - 28) / 4) + '" y="' + (y + 8) + '" width="' + ((w - 28) / 4 - 8) + '" height="12" rx="2" fill="#1e2a3a"/>';
      return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="40" rx="4" fill="#c9ced6" stroke="#7e848e" stroke-width="1.5"/>' + wins + (art || "") +
        '<circle cx="' + (x + w - 12) + '" cy="' + (y + 14) + '" r="6" fill="' + PURPLE + '"/><text x="' + (x + w - 12) + '" y="' + (y + 17.5) + '" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">7</text>';
    };
    const burner = (x, y) => '<rect x="' + (x + 4) + '" y="' + (y + 22) + '" width="232" height="16" fill="#2b1a4a"/>' +
      '<path d="M' + (x + 6) + ' ' + (y + 38) + 'q20-12 40 0t40 0t40 0t40 0t40 0t26 0" fill="' + RED + '" opacity=".9"/>' +
      tag("INDELIBLE", x + 26, y + 36, 18, YEL, -3) + '<path d="M' + (x + 150) + ' ' + (y + 24) + 'l10 6l-10 6z" fill="' + CYAN + '"/><circle cx="' + (x + 214) + '" cy="' + (y + 30) + '" r="5" fill="' + CYAN + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cfs2)"/>' + stars(16) +
      '<rect x="0" y="96" width="400" height="14" fill="#1c2230"/>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 2) + '" y="30" width="4" height="80" fill="#4a505c"/><rect x="' + (x - 12) + '" y="26" width="24" height="8" rx="2" fill="#2a2e38"/><circle class="cf-flk' + (x === 200 ? " cf-flk2" : "") + '" cx="' + x + '" cy="34" r="5" fill="#fff6d0"/>' +
        '<path d="M' + (x - 10) + ' 36 L' + (x - 60) + ' 150 L' + (x + 60) + ' 150 L' + (x + 10) + ' 36z" fill="#fff6d0" opacity=".07"/>').join("") +
      car(10, 110, 180) + car(210, 110, 180) +
      '<rect x="0" y="150" width="400" height="110" fill="#262a32"/>' + rails + ties +
      '<g class="cf-run" style="animation-delay:-2.8s">' + car(0, 156, 240, burner(0, 156)) + '</g>' +
      '<rect x="0" y="200" width="400" height="2" fill="#555b66"/>' +
      '<path d="M0 214 L400 214" stroke="#8a919c" stroke-width="1.5"/>' +
      (function () { let f = ""; for (let x = 0; x < 400; x += 10) f += '<path d="M' + x + ' 214 l10 22 M' + (x + 10) + ' 214 l-10 22" stroke="#8a919c" stroke-width=".8" opacity=".7"/>'; return f; })() +
      '<g transform="translate(330 222)"><rect x="0" y="-10" width="9" height="18" rx="2" fill="' + RED + '"/><rect x="2" y="-14" width="5" height="4" fill="#ddd"/>' +
      '<circle class="cf-mist" cx="12" cy="-12" r="4" fill="' + YEL + '"/><circle class="cf-mist cf-mist2" cx="12" cy="-12" r="4" fill="' + YEL + '"/><circle class="cf-mist cf-mist3" cx="12" cy="-12" r="4" fill="' + YEL + '"/></g>' +
      '<rect x="12" y="8" width="140" height="22" rx="3" fill="#111"/>' + txt("CORONA YARD", 82, 23, 11, CREAM, 'letter-spacing="2"'),
      sky("cfs2", "#06070f", "#1d2340"));
  }

  /* 3. The A up on the el over Queens: steel girders, the A rolling across, tagged walls, kids playing handball underneath */
  function cfel() {
    let girders = "";
    for (let x = 10; x <= W; x += 64) girders += '<rect x="' + (x - 3) + '" y="94" width="7" height="122" fill="#3b4a5c"/><path d="M' + (x + 4) + ' 104 L' + (x + 58) + ' 132 M' + (x + 58) + ' 104 L' + (x + 4) + ' 132" stroke="#3b4a5c" stroke-width="3"/>';
    let wins = "";
    for (let x = 60; x < 270; x += 40) wins += '<rect x="' + x + '" y="62" width="26" height="16" rx="2" fill="#cfe6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cfs3)"/>' +
      '<circle cx="64" cy="34" r="18" fill="#ffe9a8" opacity=".9"/>' +
      '<rect x="0" y="86" width="400" height="10" fill="#3b4a5c"/>' + girders +
      '<g class="cf-run" style="animation-duration:5s;animation-delay:-1.6s">' +
        '<rect x="0" y="54" width="300" height="32" rx="4" fill="#c9ced6" stroke="#7e848e" stroke-width="1.5"/>' + wins +
        bullet(40, 70, "A", ABLUE) + '<path d="M100 54 v32 M200 54 v32" stroke="#7e848e"/>' +
      '</g>' +
      '<rect x="0" y="216" width="400" height="44" fill="#5b5e64"/>' +
      '<rect x="216" y="128" width="170" height="88" fill="#b9b2a2"/><rect x="216" y="128" width="170" height="6" fill="#8d8676"/>' +
      tag("BABY", 228, 166, 18, "#4ab0ff", -8) + tag("STAN", 296, 158, 15, RED, 4) + tag("KING", 318, 196, 16, YEL, -5) + tag("LUNE", 236, 204, 15, "#7cff9a", -3) +
      '<path d="M16 214 h170" stroke="#e8e8e8" stroke-width="2"/><path d="M100 214 v-8" stroke="#e8e8e8" stroke-width="2"/>' +
      '<rect x="10" y="134" width="70" height="80" fill="#a8a294"/><path d="M10 160 h70" stroke="#d64" stroke-width="2"/>' +
      person(120, 182, "#1b1b1b", "cf-bob") + person(160, 184, "#272727", "cf-bob cf-bob2") +
      '<circle class="cf-ball" cx="70" cy="190" r="4" fill="#3a6dff"/>' +
      '<rect x="12" y="8" width="168" height="22" rx="3" fill="#111"/>' + txt("THE A, UP ON THE EL", 96, 23, 10.5, CREAM, 'letter-spacing="1"'),
      sky("cfs3", "#ff9e5a", "#f7d58a"));
  }

  /* 4. Santos Party House, 96 Lafayette St, July 16 2011: black front, the marquee, the line outside, lights sweeping inside */
  function cfsantos() {
    let people = "";
    for (let i = 0; i < 7; i++) people += person(22 + i * 26, 176 + (i % 2) * 3, i % 2 ? "#222" : "#151515", i % 3 ? "" : "cf-bob" + (i % 2 ? " cf-bob2" : ""));
    return svg(
      '<rect width="400" height="260" fill="url(#cfs4)"/>' + stars(14) +
      '<rect x="40" y="24" width="160" height="150" fill="#6a5a4a"/><rect x="200" y="12" width="180" height="162" fill="#151517"/>' +
      [56, 96, 136, 176].map(x => '<rect x="' + x + '" y="40" width="18" height="26" fill="#ffd98a" opacity=".5"/><rect x="' + x + '" y="84" width="18" height="26" fill="#ffd98a" opacity=".3"/>').join("") +
      '<rect x="218" y="30" width="144" height="70" fill="#0a0a0c"/>' +
      '<g class="cf-beam"><path d="M250 30 L226 100 L274 100z" fill="' + CYAN + '" opacity=".35"/></g><g class="cf-beam cf-beam2"><path d="M330 30 L306 100 L354 100z" fill="' + RED + '" opacity=".35"/></g>' +
      '<rect x="210" y="104" width="160" height="26" fill="#111" stroke="' + YEL + '" stroke-width="2"/>' +
      txt("COMPANY FLOW", 290, 116, 10, YEL, 'class="cf-flk" letter-spacing="2"') + txt("JULY 16 2011", 290, 126.5, 7.5, CREAM, 'letter-spacing="2"') +
      '<rect x="250" y="134" width="44" height="40" fill="#2a0e0e"/><rect x="254" y="138" width="36" height="36" fill="#8a1c1c"/><circle cx="286" cy="158" r="1.6" fill="' + YEL + '"/>' +
      '<rect x="0" y="174" width="400" height="16" fill="#8d8f93"/><rect x="0" y="190" width="400" height="70" fill="#3c3e44"/>' + people +
      '<path d="M8 186 h200" stroke="#c9a24a" stroke-width="2"/>' + [12, 60, 108, 156, 204].map(x => '<rect x="' + x + '" y="180" width="3" height="10" fill="#c9a24a"/>').join("") +
      '<rect x="12" y="8" width="16" height="0" fill="none"/>' +
      '<rect x="18" y="214" width="170" height="22" rx="3" fill="#111"/>' + txt("SANTOS PARTY HOUSE", 103, 229, 10, CREAM, 'letter-spacing="1"'),
      sky("cfs4", "#0b0b1e", "#2c1f3e"));
  }

  /* 5. Jamaica Av & 161 St: green street signs, COMPANY FLOW on the wall, the 1898 Register building (now the arts center) behind */
  function cfcorner() {
    let arch = "", sq = "";
    for (let i = 0; i < 7; i++) {
      const x = 196 + i * 26;
      arch += '<path d="M' + x + ' 92 v-18 a7 7 0 0 1 14 0 v18z" fill="#2c3a4a"/><path d="M' + (x - 2) + ' 66 h18" stroke="#b5ae9e" stroke-width="1.5"/>';
      sq += '<rect x="' + x + '" y="46" width="14" height="14" fill="#2c3a4a"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#cfs5)"/>' +
      /* the Register building: dark rusticated base, pale stone body, seven round-arched windows, cornice with brackets */
      '<rect x="184" y="30" width="196" height="150" fill="#d8d2c2"/>' +
      '<rect x="180" y="26" width="204" height="8" fill="#c4bdab"/>' + (function () { let b = ""; for (let x = 186; x < 380; x += 12) b += '<rect x="' + x + '" y="34" width="5" height="5" fill="#b0a894"/>'; return b; })() +
      sq + '<rect x="184" y="64" width="196" height="3" fill="#c4bdab"/>' + arch +
      '<rect x="184" y="100" width="196" height="80" fill="#8e8778"/>' + (function () { let r = ""; for (let y = 106; y < 180; y += 10) r += '<path d="M184 ' + y + ' h196" stroke="#6e685b" stroke-width="1"/>'; return r; })() +
      [196, 222, 248, 326, 352].map(x => '<rect x="' + x + '" y="114" width="14" height="18" fill="#2c3a4a"/>').join("") +
      '<path d="M272 180 v-40 a14 14 0 0 1 28 0 v40z" fill="#1e2a36"/><rect x="266" y="130" width="6" height="50" fill="#a59e8c"/><rect x="300" y="130" width="6" height="50" fill="#a59e8c"/>' +
      '<rect x="262" y="96" width="48" height="5" fill="#3a3a3a"/>' +
      /* the wall with the name */
      '<rect x="0" y="96" width="186" height="96" fill="#5c4a40"/>' + (function () { let r = ""; for (let y = 104; y < 192; y += 8) r += '<path d="M0 ' + y + ' h186" stroke="#4a3a32" stroke-width="1"/>'; return r; })() +
      tag("COMPANY", 10, 140, 25, YEL, -6) + tag("FLOW", 40, 178, 32, RED, -4) +
      '<path d="M140 152 l14 -6 M142 164 l16 0" stroke="' + CYAN + '" stroke-width="3" stroke-linecap="round"/>' +
      '<rect x="0" y="192" width="400" height="16" fill="#9a9a9e"/><rect x="0" y="208" width="400" height="52" fill="#46484e"/>' +
      '<g class="anim-train" style="animation-duration:8s"><rect x="60" y="212" width="70" height="22" rx="6" fill="#d33a2c"/><rect x="72" y="204" width="44" height="12" rx="4" fill="#d33a2c"/><rect x="78" y="206" width="32" height="8" fill="#26354d"/><circle cx="76" cy="236" r="6" fill="#111"/><circle cx="116" cy="236" r="6" fill="#111"/></g>' +
      /* green street signs */
      '<rect x="172" y="40" width="4" height="152" fill="#7c8088"/>' +
      '<rect x="122" y="42" width="104" height="20" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' + txt("JAMAICA AV", 174, 56.5, 11, "#fff", 'letter-spacing="1"') +
      '<rect x="140" y="66" width="68" height="20" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' + txt("161 ST", 174, 80.5, 11, "#fff", 'letter-spacing="1"') +
      person(330, 190, "#1d1d1d", "cf-bob"),
      sky("cfs5", "#3b6fb6", "#a9d0f0"));
  }

  window.SCENES = { cfbus: cfbus, cfyard: cfyard, cfel: cfel, cfsantos: cfsantos, cfcorner: cfcorner };
})();
