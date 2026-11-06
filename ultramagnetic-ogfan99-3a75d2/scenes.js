/* Ultramagnetic MC's game (NYC map, the Bronx: Mount Eden, the West Bronx where Ced Gee came up).
   The 4 pulling into Mt Eden Av up on the Jerome Av el, the Ultra Lab (the silver-wallpaper home studio in the projects on One Sixty-Ninth:
   the four-track, the drum machine, the crates), Paul C's board at 1212 Studio in Jamaica, Queens (Critical Beatdown, Give the Drummer Some),
   LBM Music (TR Love's family record shop up in the Bronx), and Mt Eden Av & Morris Av with the Mount Eden Malls behind. 400 x 260 SVGs.
   No digit nine is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes umflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.um-flk{animation:umflick 2.4s infinite}.um-flk2{animation-delay:1.1s}' +
    '@keyframes umspin{to{transform:rotate(360deg)}}.um-spin{transform-box:fill-box;transform-origin:50% 50%;animation:umspin 1.6s linear infinite}.um-spin2{animation-duration:2.3s}' +
    '@keyframes umblink{0%,100%{opacity:1}50%{opacity:.2}}.um-blink{animation:umblink 1s steps(2) infinite}.um-blink2{animation-delay:.5s}.um-blink3{animation-delay:.25s}' +
    '@keyframes umsheen{0%{transform:translateX(-160px)}100%{transform:translateX(460px)}}.um-sheen{animation:umsheen 3.4s linear infinite}' +
    '@keyframes umfader{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}.um-fad{animation:umfader 1.3s ease-in-out infinite}.um-fad2{animation-delay:-.4s}.um-fad3{animation-delay:-.8s}.um-fad4{animation-delay:-1.1s}' +
    '@keyframes umvu{0%,100%{transform:rotate(-28deg)}40%{transform:rotate(18deg)}70%{transform:rotate(-6deg)}}.um-vu{transform-box:fill-box;transform-origin:50% 100%;animation:umvu .9s ease-in-out infinite}.um-vu2{animation-delay:-.45s}' +
    '@keyframes umbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.um-bob{animation:umbob .6s ease-in-out infinite}.um-bob2{animation-delay:.3s}' +
    '@keyframes umstreak{0%{transform:translateX(-220px);opacity:0}15%{opacity:1}100%{transform:translateX(520px);opacity:0}}.um-streak{animation:umstreak 2.6s linear infinite}.um-streak2{animation-delay:1.3s}' +
    '@keyframes ummist{0%{opacity:.8;transform:translate(0,0) scale(.5)}100%{opacity:0;transform:translate(-26px,-10px) scale(1.5)}}.um-mist{transform-box:fill-box;transform-origin:50% 50%;animation:ummist 1.3s ease-out infinite}.um-mist2{animation-delay:.45s}.um-mist3{animation-delay:.9s}' +
    '@keyframes umtw{0%,100%{opacity:.25}50%{opacity:1}}.um-tw{animation:umtw 2s ease-in-out infinite}.um-tw2{animation-delay:1s}' +
    '@keyframes umleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.um-leaf{transform-box:fill-box;transform-origin:50% 100%;animation:umleaf 3s ease-in-out infinite}.um-leaf2{animation-delay:-1.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 2 ? "um-tw" : "um-tw um-tw2") + '" cx="' + ((i * 97 + 13) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const CYAN = "#38e8ff", MAG = "#ff3fb4", SILV = "#c9d2dc", GRN = "#00933c", BRICK = "#8a3b26";

  /* brick apartment block with windows (some lit) */
  const block = (x, y, w, h, col, seed) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + col + '"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="rgba(0,0,0,.3)"/>';
    let k = seed || 1;
    for (let yy = y + 10; yy < y + h - 8; yy += 14) for (let xx = x + 6; xx < x + w - 8; xx += 14) { k = (k * 37 + 11) % 101; s += '<rect x="' + xx + '" y="' + yy + '" width="8" height="9" fill="' + (k % 4 === 0 ? "#ffd98a" : "#231a17") + '"/>'; }
    return s;
  };

  /* 1. Mt Eden Av, up on the Jerome Av el: the 4 pulling in at dusk, the canopy, the black sign with the green 4, the street below */
  function mteden() {
    let win = "";
    for (let x = 34; x < 290; x += 34) win += '<rect x="' + x + '" y="134" width="22" height="18" rx="2" fill="#d6e6f5" opacity=".9"/>';
    let girders = "";
    for (let x = 0; x < 400; x += 40) girders += '<path d="M' + x + ' 188l20 22l20-22" stroke="#3d4a3f" stroke-width="3" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#us1)"/>' + stars(8) +
      block(0, 40, 70, 120, "#7b3a2a", 3) + block(300, 30, 100, 130, "#8a4a33", 5) + block(76, 60, 60, 100, "#6e3a2c", 7) +
      /* canopy */
      '<path d="M0 92h400v8H0z" fill="#2f4a3a"/><path d="M0 92l200-14l200 14z" fill="#3d5c49"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + (x - 3) + '" y="100" width="6" height="74" fill="#2f4a3a"/>').join("") +
      /* black sign */
      '<rect x="92" y="102" width="216" height="24" rx="3" fill="#111"/><rect x="92" y="102" width="216" height="3" fill="#fff"/>' +
      '<text x="104" y="120" ' + font + ' font-size="14" fill="#fff">Mt Eden Av</text>' + bullet(290, 114, "4", GRN) +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="10" y="128" width="300" height="46" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="134" width="16" height="22" rx="2" fill="#d6e6f5"/>' + bullet(298, 164, "4", GRN) +
        '<rect x="10" y="158" width="276" height="3" fill="' + GRN + '"/><circle cx="22" cy="166" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="174" width="400" height="8" fill="#eab308"/><rect x="0" y="182" width="400" height="8" fill="#5f6a60"/>' + girders +
      /* street under the el */
      '<rect x="0" y="210" width="400" height="50" fill="#2b2b30"/>' +
      [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="234" width="40" height="3" fill="#e8d36b"/>').join("") +
      '<rect x="40" y="188" width="8" height="40" fill="#3d4a3f"/><rect x="350" y="188" width="8" height="40" fill="#3d4a3f"/>' +
      person(334, 196, "#1b1b1b") + person(356, 200, "#2a2a2a", "um-bob"),
      sky("us1", "#1b1f4a", "#e9845a"));
  }

  /* 2. The Ultra Lab: silver wallpaper with a sheen sliding across, the four-track with spinning reels, the drum machine with blinking pads,
        record crates, a speaker, and the window out on the project towers at night */
  function ultralab() {
    let paper = "";
    for (let x = -260; x < 400; x += 22) paper += '<path d="M' + x + ' 0l260 170" stroke="#e8eef4" stroke-width="7" opacity=".55"/>';
    let pads = "";
    for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) pads += '<rect class="um-blink' + ((r + c) % 3 ? " um-blink" + (((r + c) % 3) + 1) : "") + '" x="' + (238 + c * 15) + '" y="' + (152 + r * 13) + '" width="11" height="9" rx="2" fill="' + ((r + c) % 2 ? MAG : CYAN) + '"/>';
    let crate = (x) => '<rect x="' + x + '" y="196" width="64" height="40" fill="#6b4a2a" stroke="#3b2814" stroke-width="2"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (x + 5 + i * 11) + '" y="' + (184 + (i % 2) * 4) + '" width="9" height="20" fill="' + ["#d23", "#222", "#2a6", "#eee", "#f9c22e"][i] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#b9c3cd"/>' +
      '<g>' + paper + '</g>' +
      '<g class="um-sheen"><rect x="0" y="0" width="60" height="170" fill="#fff" opacity=".35" transform="skewX(-20)"/></g>' +
      /* window with the towers outside */
      '<rect x="24" y="22" width="120" height="96" fill="#0e1430" stroke="#6b7480" stroke-width="5"/>' + stars(5).replace(/cy="(\d+)"/g, (m, v) => 'cy="' + (26 + (+v % 30)) + '"').replace(/cx="(\d+)"/g, (m, v) => 'cx="' + (30 + (+v % 108)) + '"') +
      block(34, 54, 40, 64, BRICK, 2) + block(84, 40, 50, 78, "#7d3523", 6) +
      '<path d="M84 22v96M24 70h120" stroke="#6b7480" stroke-width="4"/>' +
      /* hand-lettered sign on tape */
      '<rect x="190" y="26" width="168" height="40" fill="#f3efe4" transform="rotate(-3 274 46)"/><rect x="182" y="22" width="24" height="10" fill="#e8d9a8" opacity=".8" transform="rotate(-30 194 27)"/>' +
      '<text x="274" y="56" text-anchor="middle" transform="rotate(-3 274 46)" font-family="Permanent Marker, cursive" font-size="24" fill="#1b2a7a">ULTRA LAB</text>' +
      /* desk */
      '<rect x="0" y="170" width="400" height="90" fill="#3a2a22"/><rect x="0" y="170" width="400" height="6" fill="#5a4334"/>' +
      /* four-track: grey body, two reels spinning */
      '<rect x="40" y="120" width="140" height="52" rx="4" fill="#4a4f57" stroke="#22252a" stroke-width="2"/>' +
      '<g class="um-spin"><circle cx="78" cy="140" r="15" fill="#1a1a1a"/><path d="M78 126v28M64 140h28" stroke="#888" stroke-width="3"/><circle cx="78" cy="140" r="4" fill="#ccc"/></g>' +
      '<g class="um-spin"><circle cx="142" cy="140" r="15" fill="#1a1a1a"/><path d="M142 126v28M128 140h28" stroke="#888" stroke-width="3"/><circle cx="142" cy="140" r="4" fill="#ccc"/></g>' +
      [56, 76, 96, 116].map((x, i) => '<rect x="' + x + '" y="160" width="10" height="8" fill="#222"/><rect class="um-fad um-fad' + (i + 1) + '" x="' + (x + 2) + '" y="162" width="6" height="3" fill="' + CYAN + '"/>').join("") +
      /* drum machine: grey box with pads */
      '<rect x="226" y="132" width="78" height="42" rx="3" fill="#6d737c" stroke="#30343a" stroke-width="2"/><rect x="232" y="137" width="42" height="10" fill="#1b2d22"/>' +
      '<text x="236" y="145" font-family="monospace" font-size="8" fill="#6cf58f">BEAT 12</text>' + pads +
      /* speaker with pulsing cone */
      '<rect x="320" y="96" width="62" height="78" rx="4" fill="#1d1d22"/><circle cx="351" cy="120" r="11" fill="#333"/><circle class="um-bob" cx="351" cy="150" r="17" fill="#2b2b30" stroke="#555" stroke-width="3"/><circle cx="351" cy="150" r="6" fill="#111"/>' +
      crate(14) + crate(96) +
      tag("ULTRA", 200, 238, 26, CYAN, -4) + tag("MOE LUV", 300, 232, 16, MAG, -3));
  }

  /* 3. 1212 Studio in Jamaica, Queens: Paul C's mixing board with the faders riding, VU needles bouncing, the tape machine,
        and the drum kit behind the glass (give the drummer some) */
  function studio() {
    let faders = "";
    for (let i = 0; i < 16; i++) { const x = 40 + i * 20; faders += '<rect x="' + (x + 4) + '" y="182" width="4" height="40" fill="#111"/><rect class="um-fad um-fad' + (i % 4 + 1) + '" x="' + x + '" y="196" width="12" height="7" rx="1" fill="' + (i % 5 === 0 ? MAG : "#e6e6e6") + '"/>'; }
    let knobs = "";
    for (let i = 0; i < 16; i++) for (let r = 0; r < 2; r++) knobs += '<circle cx="' + (46 + i * 20) + '" cy="' + (162 + r * 10) + '" r="3" fill="' + (r ? "#e4b23a" : "#5fa8e8") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a2420"/>' +
      /* wall panels */
      [0, 80, 160, 240, 320].map(x => '<rect x="' + (x + 4) + '" y="6" width="72" height="56" fill="#4a3a30" stroke="#2a1e18" stroke-width="2"/>').join("") +
      /* control room window to the live room */
      '<rect x="60" y="20" width="280" height="110" fill="#14202c" stroke="#111" stroke-width="6"/>' +
      '<rect x="66" y="96" width="268" height="30" fill="#3a2d26"/>' +
      /* drum kit behind the glass */
      '<ellipse cx="200" cy="108" rx="26" ry="22" fill="#c0392b" stroke="#ddd" stroke-width="3"/><circle cx="200" cy="108" r="12" fill="#e9e3d8"/>' +
      '<ellipse class="um-bob" cx="160" cy="92" rx="14" ry="5" fill="#d9b44a"/><rect x="159" y="92" width="2" height="30" fill="#aaa"/>' +
      '<ellipse class="um-bob um-bob2" cx="244" cy="76" rx="20" ry="5" fill="#d9b44a"/><rect x="243" y="76" width="2" height="46" fill="#aaa"/>' +
      '<rect x="168" y="94" width="20" height="12" rx="3" fill="#c0392b"/><rect x="214" y="92" width="22" height="12" rx="3" fill="#c0392b"/>' +
      '<rect x="66" y="26" width="268" height="6" fill="#fff" opacity=".08"/><path d="M76 36l40 50M96 30l30 38" stroke="#fff" stroke-width="2" opacity=".12"/>' +
      txt("1212 STUDIO", 200, 52, 13, CYAN, 'opacity=".85"') +
      /* VU meters */
      [118, 252].map((x, i) => '<rect x="' + x + '" y="134" width="30" height="20" rx="2" fill="#f2e6b8" stroke="#222" stroke-width="2"/><rect class="um-vu' + (i ? " um-vu2" : "") + '" x="' + (x + 14) + '" y="138" width="2" height="14" fill="#c00"/>').join("") +
      /* console */
      '<path d="M20 152h360l16 78H4z" fill="#5c626b" stroke="#2c3036" stroke-width="2"/>' + knobs + faders +
      '<rect x="0" y="230" width="400" height="30" fill="#1e1a17"/>' +
      /* tape machine at the side, reels turning */
      '<rect x="344" y="62" width="50" height="86" rx="3" fill="#3c3f46"/>' +
      '<g class="um-spin um-spin2"><circle cx="369" cy="82" r="14" fill="#8a8f96"/><circle cx="369" cy="82" r="4" fill="#222"/><path d="M369 70v24" stroke="#555" stroke-width="2"/></g>' +
      '<g class="um-spin um-spin2"><circle cx="369" cy="122" r="14" fill="#8a8f96"/><circle cx="369" cy="122" r="4" fill="#222"/><path d="M369 110v24" stroke="#555" stroke-width="2"/></g>' +
      txt("JAMAICA, QUEENS", 200, 248, 11, SILV));
  }

  /* 4. LBM Music up in the Bronx: TR Love's family record shop. Brick front, awning, records in the window (one spinning),
        cassettes in the rack, a neon OPEN, people outside */
  function lbm() {
    let brick = "";
    for (let y = 8; y < 196; y += 8) for (let x = (y / 8) % 2 ? 0 : -8; x < 400; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#7a3322"/>';
    let lps = "";
    const cols = [MAG, CYAN, "#f9c22e", "#2a2a2a", "#e85d2a", "#7d5cff"];
    for (let i = 0; i < 6; i++) lps += '<rect x="' + (52 + (i % 3) * 40) + '" y="' + (108 + Math.floor(i / 3) * 40) + '" width="34" height="34" fill="' + cols[i] + '"/><circle cx="' + (69 + (i % 3) * 40) + '" cy="' + (125 + Math.floor(i / 3) * 40) + '" r="' + (i % 2 ? 8 : 5) + '" fill="rgba(0,0,0,.35)"/>';
    let tapes = "";
    for (let i = 0; i < 12; i++) tapes += '<rect x="' + (258 + (i % 4) * 22) + '" y="' + (112 + Math.floor(i / 4) * 16) + '" width="18" height="11" rx="1" fill="' + cols[i % 6] + '"/><rect x="' + (262 + (i % 4) * 22) + '" y="' + (115 + Math.floor(i / 4) * 16) + '" width="10" height="4" fill="#111"/>';
    return svg(
      '<rect width="400" height="260" fill="#8a3b26"/>' + brick +
      /* sign band */
      '<rect x="30" y="40" width="340" height="38" fill="#111" stroke="' + SILV + '" stroke-width="3"/>' +
      txt("LBM MUSIC", 200, 69, 26, "#fff", 'letter-spacing="3"') +
      txt("RECORDS · TAPES", 200, 34, 10, "#f3e3b0") +
      /* awning stripes */
      '<path d="M30 82h340l-12 18H42z" fill="' + MAG + '"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<path d="M' + (46 + i * 42) + ' 82h20l-2 18h-20z" fill="#fff" opacity=".85"/>').join("") +
      /* shop window */
      '<rect x="40" y="100" width="150" height="96" fill="#1a1d2a" stroke="#c7c7c7" stroke-width="4"/>' + lps +
      /* spinning record on a stand */
      '<g class="um-spin"><circle cx="164" cy="174" r="15" fill="#111"/><circle cx="164" cy="174" r="10" fill="none" stroke="#333"/><circle cx="164" cy="174" r="4" fill="' + CYAN + '"/></g>' +
      /* door */
      '<rect x="200" y="100" width="44" height="96" fill="#2b2b33" stroke="#c7c7c7" stroke-width="4"/><rect x="206" y="108" width="32" height="50" fill="#3b4256"/><circle cx="236" cy="152" r="2.5" fill="#d8c06a"/>' +
      /* second window with tape rack */
      '<rect x="250" y="100" width="110" height="96" fill="#1a1d2a" stroke="#c7c7c7" stroke-width="4"/>' + tapes +
      '<g class="um-flk"><rect x="268" y="168" width="74" height="20" rx="10" fill="none" stroke="#ff4d4d" stroke-width="3"/>' + txt("OPEN", 305, 183, 12, "#ff6b6b") + '</g>' +
      /* sidewalk */
      '<rect x="0" y="196" width="400" height="64" fill="#77746c"/><rect x="0" y="196" width="400" height="4" fill="#5b5952"/>' +
      [0, 80, 160, 240, 320].map(x => '<rect x="' + x + '" y="200" width="2" height="60" fill="#666259"/>').join("") +
      '<rect x="0" y="244" width="400" height="16" fill="#2b2b30"/>' +
      person(110, 204, "#1d2a44", "um-bob") + person(128, 206, "#3a1d40", "um-bob um-bob2") + person(330, 204, "#222") +
      /* boombox on the stoop */
      '<g class="um-bob"><rect x="292" y="214" width="40" height="18" rx="3" fill="#2a2a30"/><circle cx="302" cy="223" r="6" fill="#555"/><circle cx="322" cy="223" r="6" fill="#555"/><rect x="304" y="208" width="16" height="4" fill="#888"/></g>');
  }

  /* 5. Mt Eden Av & Morris Av: green street signs, the brick wall tagged ULTRA MC'S, and the Mount Eden Malls behind (the tree mall down the middle
        of the avenue, low stone wall, old lamp posts), a speed-of-thought streak across the sky */
  function corner() {
    let brick = "";
    for (let y = 150; y < 232; y += 8) for (let x = (y / 8) % 2 ? 0 : -8; x < 240; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#7a3322"/>';
    const sign = (x, y, t, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 13.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + t + '</text>';
    const tree = (x, y, s, cls) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (40 * s) + '" fill="#4a3424"/><g class="' + cls + '"><circle cx="' + x + '" cy="' + (y - 4) + '" r="' + (20 * s) + '" fill="#2f7a3a"/><circle cx="' + (x - 14 * s) + '" cy="' + (y + 6) + '" r="' + (13 * s) + '" fill="#3a8a44"/><circle cx="' + (x + 14 * s) + '" cy="' + (y + 4) + '" r="' + (14 * s) + '" fill="#286a32"/></g>';
    const lamp = x => '<rect x="' + (x - 1.5) + '" y="104" width="3" height="40" fill="#1f2a24"/><rect x="' + (x - 5) + '" y="96" width="10" height="10" rx="2" fill="#ffe9a8" class="um-flk"/><path d="M' + (x - 6) + ' 96h12l-6-5z" fill="#1f2a24"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#us5)"/>' + stars(6) +
      '<g class="um-streak"><path d="M0 40h180" stroke="' + CYAN + '" stroke-width="3" stroke-linecap="round" opacity=".8"/><circle cx="182" cy="40" r="4" fill="#fff"/></g>' +
      '<g class="um-streak um-streak2"><path d="M0 70h140" stroke="' + MAG + '" stroke-width="2" stroke-linecap="round" opacity=".7"/></g>' +
      /* apartment houses beyond the mall */
      block(150, 50, 80, 96, "#a0603e", 4) + block(232, 36, 90, 110, "#8a4a33", 8) + block(324, 58, 76, 88, "#9b5a3a", 2) +
      /* the mall: trees, lamp posts, low stone wall */
      tree(176, 112, 1, "um-leaf") + tree(250, 108, 1.1, "um-leaf um-leaf2") + tree(318, 114, 0.95, "um-leaf") + tree(384, 110, 1, "um-leaf um-leaf2") +
      lamp(214) + lamp(286) + lamp(356) +
      '<rect x="140" y="140" width="260" height="10" fill="#a8a196"/><rect x="140" y="140" width="260" height="2" fill="#cfc8bb"/>' +
      [150, 186, 222, 258, 294, 330, 366].map(x => '<rect x="' + x + '" y="142" width="1.5" height="8" fill="#8b8478"/>').join("") +
      '<rect x="140" y="150" width="260" height="84" fill="#3b3b42"/>' +
      [160, 230, 300, 370].map(x => '<rect x="' + x + '" y="190" width="40" height="3" fill="#e8d36b"/>').join("") +
      /* the tag wall */
      '<rect x="0" y="146" width="240" height="88" fill="#8a3b26"/>' + brick +
      tag("ULTRA MC'S", 14, 192, 30, CYAN, -5) + tag("WATCH ME NOW", 16, 222, 14, MAG, -3) + tag("FOUR HORSEMEN", 120, 228, 12, "#f9c22e", -4) +
      /* sign pole */
      '<rect x="262" y="58" width="6" height="176" fill="#4a4f56"/>' +
      sign(200, 62, "MT EDEN AV", 110) + sign(214, 84, "MORRIS AV", 96) +
      /* spray can + mist */
      '<g transform="translate(214 196) rotate(-20)"><rect x="0" y="0" width="14" height="30" rx="3" fill="' + MAG + '"/><rect x="3" y="-6" width="8" height="7" fill="#ccc"/></g>' +
      '<circle class="um-mist" cx="206" cy="184" r="6" fill="' + CYAN + '"/><circle class="um-mist um-mist2" cx="206" cy="184" r="5" fill="' + CYAN + '"/><circle class="um-mist um-mist3" cx="206" cy="184" r="4" fill="' + CYAN + '"/>' +
      '<rect x="0" y="234" width="400" height="26" fill="#3a3a40"/><rect x="0" y="234" width="400" height="3" fill="#cfcfcf"/>',
      sky("us5", "#16163c", "#7a3f8a"));
  }

  window.SCENES = { mteden: mteden, ultralab: ultralab, studio: studio, lbm: lbm, corner: corner };
})();
