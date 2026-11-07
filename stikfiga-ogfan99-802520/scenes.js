/* stikfiga scenes (Regions tab: Kansas City; Stik Figa, central Topeka, Kan.). CSS classes and ids prefixed sf- (the page's own anim-train is kept).
   1 Topeka Metro route 10 (West 10th) pulling up at SW 10th Ave & Jewell Ave: foursquare houses, porches, elm trees, the bus stop flag.
   2 Monroe School, the Brown v. Board of Education site in Topeka: buff brick, the arched stone entry, flag waving.
   3 I-70 through Topeka at night, the green EXIT 362C sign (his song "Exit 362C" opens East of MacVicar Ave), headlights moving.
   4 Gage Park carousel (the 1908 wooden carousel) with the Reinisch Rose Garden in front, horses bobbing.
   5 SW 11th St and SW Jewell Ave, where he hung out after school: green signs, STIK FIGA tagged, the Kansas State Capitol's green copper dome behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sfflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.sf-flk{animation:sfflick 2.4s infinite}.sf-flk2{animation-delay:.8s}' +
    '@keyframes sfcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.sf-car{animation:sfcar 5s linear infinite}.sf-car2{animation-delay:-2.5s}' +
    '@keyframes sfcarb{from{transform:translateX(520px)}to{transform:translateX(-120px)}}.sf-carb{animation:sfcarb 6s linear infinite}.sf-carb2{animation-delay:-3s}' +
    '@keyframes sfwave{0%,100%{transform:skewY(0)}50%{transform:skewY(8deg)}}.sf-flag{transform-box:fill-box;transform-origin:0 50%;animation:sfwave 1.6s ease-in-out infinite}' +
    '@keyframes sfbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}.sf-bob{animation:sfbob 1.4s ease-in-out infinite}.sf-bob2{animation-delay:-.7s}' +
    '@keyframes sfslide{from{transform:translateX(0)}to{transform:translateX(-60px)}}.sf-spin{animation:sfslide 2.8s linear infinite}' +
    '@keyframes sfleaf{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(50px,280px) rotate(360deg)}}.sf-leaf{transform-box:fill-box;animation:sfleaf 8s linear infinite}.sf-leaf2{animation-delay:-2.7s}.sf-leaf3{animation-delay:-5.3s}' +
    '@keyframes sfspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sf-sp{animation:sfspray 1.4s ease-out infinite}.sf-sp2{animation-delay:.45s}' +
    '@keyframes sftw{0%,100%{opacity:.2}50%{opacity:1}}.sf-tw{animation:sftw 2.2s ease-in-out infinite}.sf-tw2{animation-delay:-1.1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const METRO = "#1f4e79", GOLD = "#f2c14e", PATINA = "#5fae9b", RUST = "#e2603b";
  const tree = (x, base, r, c) => '<rect x="' + (x - 2) + '" y="' + (base - r) + '" width="4" height="' + r + '" fill="#4a3426"/><circle cx="' + x + '" cy="' + (base - r - r * .5) + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * .6) + '" cy="' + (base - r * 1.1) + '" r="' + r * .7 + '" fill="' + c + '"/><circle cx="' + (x + r * .6) + '" cy="' + (base - r * 1.1) + '" r="' + r * .7 + '" fill="' + c + '"/>';

  /* a Topeka foursquare house with a full front porch */
  const house = (x, base, w, body, roof) => {
    const top = base - 96;
    return '<path d="M' + (x - 6) + ' ' + (top + 2) + 'L' + (x + w / 2) + ' ' + (top - 26) + 'L' + (x + w + 6) + ' ' + (top + 2) + 'z" fill="' + roof + '"/>' +
      '<rect x="' + (x + w / 2 - 9) + '" y="' + (top - 16) + '" width="18" height="14" fill="' + body + '"/><rect x="' + (x + w / 2 - 5) + '" y="' + (top - 13) + '" width="10" height="8" fill="#ffe0a3"/>' +
      '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="96" fill="' + body + '"/>' +
      '<rect x="' + (x + 10) + '" y="' + (top + 10) + '" width="16" height="20" fill="#ffe0a3" class="sf-flk"/><rect x="' + (x + w - 26) + '" y="' + (top + 10) + '" width="16" height="20" fill="#ffe0a3" opacity=".8"/>' +
      '<path d="M' + (x - 4) + ' ' + (top + 44) + 'h' + (w + 8) + 'l-4 -8H' + x + 'z" fill="' + roof + '"/>' +
      '<rect x="' + (x + 10) + '" y="' + (top + 52) + '" width="14" height="22" fill="#ffd98a" opacity=".9"/><rect x="' + (x + w / 2 - 7) + '" y="' + (top + 50) + '" width="14" height="46" fill="#5a3a26"/>' +
      '<path d="M' + (x + 2) + ' ' + (top + 44) + 'v52M' + (x + w - 2) + ' ' + (top + 44) + 'v52" stroke="#f4f1e8" stroke-width="4"/>' +
      '<path d="M' + x + ' ' + (top + 80) + 'h' + w + '" stroke="#f4f1e8" stroke-width="2.5"/>' +
      Array.from({ length: Math.floor(w / 8) }, (_, i) => '<path d="M' + (x + 4 + i * 8) + ' ' + (top + 80) + 'v14" stroke="#f4f1e8" stroke-width="1.5"/>').join("");
  };

  /* 1. Topeka Metro route 10 at SW 10th Ave & Jewell Ave */
  function sfstop() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (64 + i * 46) + '" y="146" width="36" height="24" rx="2" fill="#203040"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="136" width="300" height="64" rx="7" fill="#f2f3f1" stroke="#8a9096" stroke-width="2"/>' + win +
      '<rect x="40" y="176" width="300" height="9" fill="' + METRO + '"/><rect x="40" y="186" width="300" height="3" fill="' + GOLD + '"/>' +
      '<rect x="318" y="142" width="20" height="40" rx="3" fill="#bcd6ea" opacity=".9"/><rect x="290" y="140" width="26" height="40" fill="#203040"/>' +
      '<rect x="222" y="129" width="86" height="11" rx="2" fill="#111"/><text x="265" y="137.5" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">10 WEST 10TH</text>' +
      '<circle cx="90" cy="202" r="11" fill="#1b1b1b"/><circle cx="90" cy="202" r="4" fill="#8a8a8a"/><circle cx="292" cy="202" r="11" fill="#1b1b1b"/><circle cx="292" cy="202" r="4" fill="#8a8a8a"/>' +
      '<circle cx="336" cy="190" r="3" fill="#fff6c8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sfs1)"/>' +
      house(10, 200, 80, "#c9b48a", "#5b4636") + house(108, 200, 76, "#8fa7a0", "#3e4a4a") + house(204, 200, 82, "#d8cbb4", "#6a3b2e") + house(306, 200, 84, "#b78a6a", "#4a3426") +
      tree(98, 200, 22, "#3f6b35") + tree(196, 200, 20, "#4d7a3a") + tree(298, 200, 23, "#3a5e30") +
      '<rect x="0" y="200" width="400" height="16" fill="#b9b3a8"/><rect x="0" y="214" width="400" height="46" fill="#4a4a4e"/><path d="M0 238h400" stroke="#e8d27a" stroke-width="2" stroke-dasharray="18 14"/>' +
      bus +
      /* bus stop flag */
      '<rect x="356" y="120" width="4" height="96" fill="#555"/><rect x="342" y="112" width="34" height="30" rx="3" fill="' + METRO + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="359" y="125" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">BUS</text><text x="359" y="137" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">10</text>' +
      '<rect x="102" y="240" width="196" height="16" rx="3" fill="#111" opacity=".75"/><text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">SW 10TH AVE &amp; JEWELL AVE · TOPEKA</text>',
      sky("sfs1", "#f7b267", "#f4dfb0"));
  }

  /* 2. Monroe School, Brown v. Board of Education National Historical Park */
  function sfmonroe() {
    let wins = "";
    for (let r = 0; r < 2; r++) for (let i = 0; i < 8; i++) {
      const x = 60 + i * 36 + (i > 3 ? 24 : 0), y = 104 + r * 46;
      if (i === 3 || i === 4) continue;
      wins += '<rect x="' + x + '" y="' + y + '" width="20" height="30" fill="#3d4a55"/><path d="M' + x + ' ' + (y + 15) + 'h20M' + (x + 10) + ' ' + y + 'v30" stroke="#e9e1cf" stroke-width="1.5"/><rect x="' + (x - 2) + '" y="' + (y + 30) + '" width="24" height="3" fill="#e9e1cf"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#sfs2)"/>' +
      '<g class="sf-car"><path d="M10 40q10 -8 22 0q12 -8 22 0" fill="#fff" opacity=".7"/></g>' +
      tree(30, 210, 26, "#4c7a3a") + tree(372, 210, 28, "#3f6b35") +
      /* the buff brick school */
      '<rect x="48" y="90" width="304" height="122" fill="#d9b77a"/>' +
      Array.from({ length: 15 }, (_, i) => '<path d="M48 ' + (96 + i * 8) + 'h304" stroke="#c7a466" stroke-width="1"/>').join("") +
      '<rect x="44" y="82" width="312" height="10" fill="#efe4c8"/><rect x="48" y="140" width="304" height="4" fill="#efe4c8"/>' +
      /* center entry pavilion */
      '<rect x="168" y="70" width="64" height="142" fill="#ddbd82"/><rect x="164" y="64" width="72" height="10" fill="#efe4c8"/>' +
      '<rect x="176" y="80" width="48" height="14" fill="#efe4c8"/><text x="200" y="91" text-anchor="middle" ' + font + ' font-size="8" fill="#6b5a3a">MONROE</text>' +
      '<rect x="184" y="102" width="32" height="30" fill="#3d4a55"/><path d="M184 117h32M200 102v30" stroke="#e9e1cf" stroke-width="1.5"/>' +
      '<path d="M178 212v-46a22 22 0 0 1 44 0v46z" fill="#efe4c8"/><path d="M184 212v-44a16 16 0 0 1 32 0v44z" fill="#5a3a26"/><path d="M200 152v60" stroke="#3a2618" stroke-width="2"/>' +
      wins +
      /* steps, lawn, flagpole */
      '<rect x="172" y="212" width="56" height="6" fill="#cfc6b4"/><rect x="166" y="218" width="68" height="6" fill="#bdb4a2"/>' +
      '<rect x="0" y="212" width="166" height="48" fill="#5f8f45"/><rect x="234" y="212" width="166" height="48" fill="#5f8f45"/><rect x="166" y="224" width="68" height="36" fill="#cfc6b4"/>' +
      '<rect x="330" y="40" width="3" height="172" fill="#ccc"/><g class="sf-flag"><rect x="333" y="42" width="40" height="24" fill="#c8102e"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="333" y="' + (45.5 + i * 7) + '" width="40" height="3.5" fill="#fff"/>').join("") + '<rect x="333" y="42" width="17" height="13" fill="#0a3161"/></g>' +
      '<rect x="98" y="238" width="204" height="16" rx="3" fill="#111" opacity=".75"/><text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">MONROE SCHOOL · BROWN V. BOARD</text>',
      sky("sfs2", "#7fb6e0", "#e8f1f6"));
  }

  /* 3. I-70 through Topeka at night, EXIT 362C */
  function sfexit() {
    const lights = (cls, y, col, n) => '<g class="' + cls + '">' + Array.from({ length: n }, (_, i) => '<rect x="' + (i * 150) + '" y="' + y + '" width="40" height="13" rx="4" fill="#7d8594"/><circle cx="' + (i * 150 + (col === "w" ? 34 : 0)) + '" cy="' + (y + 7) + '" r="3" fill="' + (col === "w" ? "#fff6c8" : "#ff4d4d") + '"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sfs3)"/>' +
      '<circle class="sf-tw" cx="40" cy="30" r="1.4" fill="#fff"/><circle class="sf-tw sf-tw2" cx="120" cy="18" r="1.2" fill="#fff"/><circle class="sf-tw" cx="300" cy="24" r="1.4" fill="#fff"/><circle class="sf-tw sf-tw2" cx="370" cy="44" r="1.2" fill="#fff"/>' +
      '<circle cx="64" cy="54" r="14" fill="#f4ecd0"/><circle cx="70" cy="50" r="13" fill="#20243d"/>' +
      /* far skyline */
      '<g fill="#2c3150"><rect x="200" y="112" width="20" height="52"/><rect x="224" y="98" width="24" height="66"/><rect x="252" y="120" width="18" height="44"/><rect x="274" y="106" width="22" height="58"/><rect x="300" y="126" width="30" height="38"/><rect x="150" y="128" width="40" height="36"/></g>' +
      '<g fill="#ffd98a" opacity=".6"><rect x="228" y="106" width="3" height="3"/><rect x="238" y="118" width="3" height="3"/><rect x="278" y="114" width="3" height="3"/><rect x="286" y="130" width="3" height="3"/><rect x="206" y="124" width="3" height="3"/></g>' +
      /* sign gantry */
      '<rect x="40" y="58" width="6" height="110" fill="#8a9096"/><rect x="354" y="58" width="6" height="110" fill="#8a9096"/><rect x="40" y="96" width="320" height="5" fill="#8a9096"/>' +
      '<rect x="196" y="40" width="64" height="16" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="228" y="52" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">EXIT 362C</text>' +
      '<rect x="150" y="56" width="156" height="52" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      /* interstate shield, white numerals on blue with red cap */
      '<path d="M162 66h28v20q0 10 -14 14q-14 -4 -14 -14z" fill="#fff"/><path d="M164 68h24v6h-24z" fill="#c8102e"/><path d="M164 74h24v12q0 8 -12 11q-12 -3 -12 -11z" fill="#0a3161"/><text x="176" y="90" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">70</text>' +
      '<text x="250" y="78" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Downtown</text><text x="250" y="94" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Topeka</text>' +
      /* the highway */
      '<rect x="0" y="164" width="400" height="96" fill="#2f3138"/><rect x="0" y="162" width="400" height="5" fill="#9aa0a8"/><path d="M0 210h400" stroke="#e8d27a" stroke-width="2" stroke-dasharray="20 16"/><path d="M0 252h400" stroke="#f4f1e8" stroke-width="2"/>' +
      lights("sf-car", 186, "w", 4) + lights("sf-car sf-car2", 192, "w", 4) + lights("sf-carb", 228, "r", 4) + lights("sf-carb sf-carb2", 236, "r", 4),
      sky("sfs3", "#141833", "#3b3f6b"));
  }

  /* 4. Gage Park carousel and the rose garden */
  function sfgage() {
    const horse = (x, y, c, cls) => '<g class="' + cls + '"><rect x="' + (x + 9) + '" y="' + (y - 34) + '" width="2" height="60" fill="#d4af37"/>' +
      '<path d="M' + x + ' ' + y + 'q2 -10 12 -10h6l6 -8 4 2 -2 8q4 4 2 10l-2 0 -2 -6h-4l-2 10h-3l1 -10h-8l-2 10h-3l1 -10q-6 2 -4 4z" fill="' + c + '" stroke="#5a3a26" stroke-width="1"/></g>';
    let stripes = "";
    for (let i = 0; i < 12; i++) stripes += '<path d="M200 40L' + (60 + i * 25) + ' 96L' + (72.5 + i * 25) + ' 96z" fill="' + (i % 2 ? "#f4f1e8" : "#c8102e") + '"/>';
    let roses = "";
    for (let i = 0; i < 28; i++) { const x = 8 + i * 14.2, y = 222 + (i % 3) * 7; roses += '<circle cx="' + x + '" cy="' + y + '" r="4.5" fill="' + ["#e0435b", "#ff8fb1", "#f2c14e", "#e86a3a"][i % 4] + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#sfs4)"/>' +
      tree(20, 200, 26, "#3f6b35") + tree(380, 200, 26, "#4c7a3a") + tree(46, 200, 18, "#4d7a3a") + tree(356, 200, 18, "#3a5e30") +
      /* pavilion roof + canopy */
      '<path d="M190 40h20l-10 -20z" fill="#5a3a26"/>' + stripes +
      '<rect x="56" y="96" width="288" height="12" fill="#d4af37"/>' +
      Array.from({ length: 18 }, (_, i) => '<circle cx="' + (64 + i * 16) + '" cy="102" r="2.2" fill="#fff6c8" class="sf-tw' + (i % 2 ? " sf-tw2" : "") + '"/>').join("") +
      '<rect x="60" y="108" width="280" height="80" fill="#3a2a40"/><rect x="186" y="108" width="28" height="80" fill="#c9a24a"/><rect x="190" y="112" width="20" height="72" fill="#7a3b5a"/>' +
      '<g class="sf-spin">' + horse(70, 150, "#f4f1e8", "sf-bob") + horse(130, 154, "#c8a06a", "sf-bob sf-bob2") + horse(230, 150, "#f4f1e8", "sf-bob") + horse(290, 154, "#8a5a3a", "sf-bob sf-bob2") + horse(350, 150, "#f4f1e8", "sf-bob") + '</g>' +
      '<rect x="52" y="188" width="296" height="12" rx="3" fill="#d4af37"/><rect x="56" y="192" width="288" height="4" fill="#8a6a2a"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#5f8f45"/>' +
      Array.from({ length: 28 }, (_, i) => '<path d="M' + (8 + i * 14.2) + ' 240v-14" stroke="#2f5a2a" stroke-width="2"/>').join("") + roses +
      '<rect x="110" y="238" width="180" height="16" rx="3" fill="#111" opacity=".75"/><text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">GAGE PARK CAROUSEL · TOPEKA</text>',
      sky("sfs4", "#9fd0ee", "#f6efd6"));
  }

  /* 5. SW 11th St and SW Jewell Ave, the Kansas State Capitol dome behind */
  function sfcorner() {
    let ribs = "";
    for (let i = -3; i <= 3; i++) ribs += '<path d="M' + (200 + i * 12) + ' 74Q' + (200 + i * 6) + ' 40 200 34" stroke="#3e8a78" stroke-width="1.6" fill="none"/>';
    let cols = "";
    for (let i = 0; i < 9; i++) cols += '<rect x="' + (160 + i * 10) + '" y="80" width="4" height="34" fill="#e6dcc4"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sfs5)"/>' +
      /* capitol: limestone wings, drum, green copper dome, the statue on top */
      '<rect x="60" y="112" width="280" height="30" fill="#d9ccb0"/><path d="M60 112h280l-10 -10H70z" fill="#c4b696"/>' +
      '<rect x="150" y="76" width="100" height="40" fill="#d9ccb0"/>' + cols + '<rect x="146" y="72" width="108" height="6" fill="#e6dcc4"/>' +
      '<path d="M156 74Q156 34 200 30Q244 34 244 74z" fill="' + PATINA + '"/>' + ribs +
      '<rect x="192" y="20" width="16" height="12" fill="#e6dcc4"/><path d="M190 20h20l-10 -8z" fill="' + PATINA + '"/>' +
      '<path d="M200 12v-10M197 4l3 -4 3 4M196 8l8 -3" stroke="#3a3a3a" stroke-width="1.6" fill="none"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (70 + i * 22) + '" y="118" width="8" height="14" fill="#7b6f58"/>').join("") +
      /* brick wall */
      '<rect x="0" y="136" width="400" height="88" fill="#9a4a32"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#7a3624" stroke-width="1"/>').join("") +
      Array.from({ length: 11 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (136 + i * 8) + 'v8" stroke="#7a3624" stroke-width="1"/>').join("")).join("") +
      tag("STIK FIGA", 18, 192, 42, GOLD, -6) + tag("TOP CITY", 176, 216, 20, PATINA, -3) + tag("785", 40, 216, 16, "#ff8a6b", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="340" y="104" width="6" height="120" fill="#2f2f2f"/>' + sign(270, 106, 126, "SW 11th St") + sign(270, 132, 126, "SW Jewell Ave") +
      '<rect x="8" y="120" width="4" height="104" fill="#222"/><circle class="sf-flk" cx="10" cy="118" r="7" fill="#ffe9a8"/>' +
      '<g class="sf-sp"><circle cx="230" cy="176" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="sf-sp sf-sp2"><circle cx="236" cy="170" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<g class="sf-leaf"><path d="M120 0l5 3-5 3-5-3z" fill="' + RUST + '"/></g><g class="sf-leaf sf-leaf2"><path d="M300 0l5 3-5 3-5-3z" fill="' + GOLD + '"/></g><g class="sf-leaf sf-leaf3"><path d="M200 0l5 3-5 3-5-3z" fill="' + RUST + '"/></g>',
      sky("sfs5", "#3a3f6e", "#f0a868"));
  }

  window.SCENES = { sfstop: sfstop, sfmonroe: sfmonroe, sfexit: sfexit, sfgage: sfgage, sfcorner: sfcorner };
})();
