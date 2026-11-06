/* T La Rock game (NYC map, the Bronx: Mount Hope, up the Grand Concourse - "Lyrical King (From the Boogie Down Bronx)").
   1. 174-175 Sts, underground on the B/D under the Grand Concourse, the D sliding in.
   2. Cedar Park (Cedar Playground, Sedgwick Av & W 179 St): the Kool Herc park jams T came up on as a b-boy - speaker stacks, decks, a b-boy spinning.
   3. Danceteria on W 21 St, 1984: the loft-building club where Jazzy Jay spun - "It's Yours" (Def Jam's first record) on the decks.
   4. Piccadilly Circus, London, 1987: "Big Beat in London" (the UK single off Lyrical King) - neon panels, the fountain, a red double-decker going round.
   5. Grand Concourse & E 175 St, the Art Deco Lewis Morris building behind. 400 x 260 SVGs. No digit nine is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tlrcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.tlr-car{animation:tlrcar 7s linear infinite}.tlr-car2{animation-delay:-3.5s}' +
    '@keyframes tlrbus{from{transform:translateX(440px)}to{transform:translateX(-160px)}}.tlr-bus{animation:tlrbus 9s linear infinite}' +
    '@keyframes tlrblink{0%,100%{opacity:.25}50%{opacity:1}}.tlr-bl{animation:tlrblink 1.6s ease-in-out infinite}.tlr-bl2{animation-delay:.5s}.tlr-bl3{animation-delay:1s}' +
    '@keyframes tlrflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.25}55%{opacity:.9}}.tlr-flk{animation:tlrflick 2.4s infinite}' +
    '@keyframes tlrspin{to{transform:rotate(360deg)}}.tlr-spin{transform-box:fill-box;transform-origin:50% 50%;animation:tlrspin 1.4s linear infinite}.tlr-spin2{animation-duration:6s}' +
    '@keyframes tlrhand{to{transform:rotate(360deg)}}.tlr-hand{transform-box:view-box;animation:tlrhand 12s linear infinite}.tlr-hand2{animation-duration:2s}' +
    '@keyframes tlrpump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.tlr-pump{transform-box:fill-box;transform-origin:50% 50%;animation:tlrpump .45s ease-in-out infinite}' +
    '@keyframes tlrbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.tlr-bob{animation:tlrbob .5s ease-in-out infinite}.tlr-bob2{animation-delay:.25s}' +
    '@keyframes tlrsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.tlr-beam{transform-box:fill-box;transform-origin:50% 0%;animation:tlrsweep 3s ease-in-out infinite}.tlr-beam2{animation-delay:-1.5s}' +
    '@keyframes tlrwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.tlr-wave{animation:tlrwave 3s ease-in-out infinite}' +
    '@keyframes tlrnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.tlr-note{animation:tlrnote 2.4s linear infinite}.tlr-note2{animation-delay:-.8s}.tlr-note3{animation-delay:-1.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffcf3f", RED = "#e63946", CREAM = "#f4ead8", ORANGE = "#ff6319", SKY = "#5ec8f2";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const record = (cx, cy, r, label, cls) => '<g class="' + (cls || "tlr-spin") + '"><circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#111"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (r * 0.72) + '" fill="none" stroke="#2c2c2c"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (r * 0.36) + '" fill="' + label + '"/><rect x="' + (cx - 1) + '" y="' + (cy - r * 0.34) + '" width="2" height="' + (r * 0.2) + '" fill="#fff" opacity=".8"/></g>';

  /* 1. 174-175 Sts, IND underground under the Grand Concourse: cream tile, the purple-and-gold tile band, the black sign with two orange bullets, the D sliding in */
  function concourse() {
    let tiles = "";
    for (let y = 30; y < 150; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#eee6d2"/>';
    let band = "";
    for (let x = 0; x < 400; x += 12) band += '<rect x="' + x + '" y="40" width="6" height="6" fill="' + (x % 24 ? "#5b2a6e" : GOLD) + '"/>';
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#d6ccb6"/>' + tiles +
      '<rect x="0" y="36" width="400" height="14" fill="#3b1a4a"/>' + band +
      '<rect x="0" y="0" width="400" height="30" fill="#2a2a2e"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="tlr-flk" style="animation-delay:-' + i * 0.6 + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      '<rect x="44" y="58" width="312" height="32" rx="3" fill="#111"/><rect x="44" y="58" width="312" height="3" fill="#fff"/>' +
      '<text x="58" y="80" ' + font + ' font-size="15" fill="#fff">174-175 Sts</text>' +
      bullet(300, 74, "B", ORANGE) + bullet(326, 74, "D", ORANGE) +
      [18, 382].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="130" fill="#4a3a5c"/>').join("") +
      '<g class="anim-train">' +
        '<rect x="10" y="102" width="300" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="110" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 148, "D", ORANGE) +
        '<rect x="10" y="140" width="280" height="4" fill="' + ORANGE + '"/>' +
        '<circle cx="22" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#eab308"/><rect x="0" y="170" width="400" height="90" fill="#5a5651"/>' +
      '<rect x="0" y="170" width="400" height="3" fill="#3b3935"/>' +
      person(334, 196, "#1b1b1b") + person(356, 200, "#2a2a2a") +
      '<rect x="120" y="222" width="160" height="22" rx="3" fill="#111"/>' + txt("GRAND CONCOURSE", 200, 237, 11, CREAM, 'letter-spacing="2"'));
  }

  /* 2. Cedar Park, the Bronx: Herc-style park jam - speaker stacks, decks on a folding table, a b-boy spinning on cardboard, Sedgwick Av buildings behind */
  function cedar() {
    const bld = (x, y, w, c) => { let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (170 - y) + '" fill="' + c + '"/>';
      for (let yy = y + 8; yy < 160; yy += 13) for (let xx = x + 6; xx < x + w - 8; xx += 12) g += '<rect class="tlr-bl tlr-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="6" height="7" fill="#ffd98a" opacity=".7"/>'; return g; };
    const tree = (x, y, s) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (40 * s) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 4) + '" r="' + (22 * s) + '" fill="#2f6b3a"/><circle cx="' + (x - 14 * s) + '" cy="' + (y + 6) + '" r="' + (14 * s) + '" fill="#3b7d45"/><circle cx="' + (x + 14 * s) + '" cy="' + (y + 4) + '" r="' + (15 * s) + '" fill="#2a5f33"/>';
    const stack = (x) => '<rect x="' + x + '" y="128" width="46" height="88" rx="3" fill="#1c1c1c" stroke="#444"/>' +
      [148, 192].map(cy => '<circle class="tlr-pump" cx="' + (x + 23) + '" cy="' + cy + '" r="15" fill="#2e2e2e" stroke="#666" stroke-width="2"/><circle cx="' + (x + 23) + '" cy="' + cy + '" r="5" fill="#555"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cs)"/>' + stars(10) +
      bld(0, 60, 80, "#7d4a3a") + bld(84, 80, 70, "#8a5a44") + bld(250, 70, 72, "#7a4636") + bld(326, 54, 74, "#6e3e30") +
      tree(126, 104, 0.9) + tree(276, 100, 0.95) +
      '<rect x="0" y="170" width="400" height="90" fill="#6f6a60"/><rect x="0" y="170" width="400" height="6" fill="#86817a"/>' +
      '<rect x="120" y="24" width="160" height="22" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("CEDAR PLAYGROUND", 200, 40, 11, "#fff", 'letter-spacing="1"') +
      stack(14) + stack(340) +
      '<rect x="150" y="150" width="100" height="10" rx="2" fill="#8a6a44"/><rect x="156" y="160" width="4" height="40" fill="#555"/><rect x="240" y="160" width="4" height="40" fill="#555"/>' +
      '<rect x="156" y="140" width="88" height="12" rx="2" fill="#2a2a2a"/>' + record(178, 140, 9, RED) + record(222, 140, 9, GOLD) +
      '<path d="M200 152 Q240 200 330 200" stroke="#222" stroke-width="2" fill="none"/>' +
      '<rect x="160" y="218" width="80" height="10" rx="2" fill="#b8925c"/>' +
      '<g class="tlr-spin" ><circle cx="200" cy="206" r="6" fill="#1b1b1b"/><rect x="194" y="210" width="12" height="8" rx="3" fill="#c0392b"/><path d="M188 214 L176 206 M212 214 L224 222" stroke="#1b1b1b" stroke-width="5" stroke-linecap="round"/></g>' +
      person(100, 182, "#1b1b1b", "tlr-bob") + person(120, 186, "#262626", "tlr-bob tlr-bob2") + person(290, 184, "#1f1f1f", "tlr-bob tlr-bob2") + person(310, 182, "#2b2b2b", "tlr-bob") +
      '<g class="tlr-note"><text x="80" y="120" font-size="16" fill="' + GOLD + '">&#9835;</text></g><g class="tlr-note tlr-note2"><text x="310" y="116" font-size="16" fill="' + SKY + '">&#9834;</text></g>' +
      txt("SEDGWICK AVENUE", 200, 250, 10, CREAM, 'letter-spacing="2" opacity=".85"'),
      sky("cs", "#1a1030", "#e07a3a"));
  }

  /* 3. Danceteria, W 21 St, 1984: the tall loft building, a floor lit up with sweeping lights, the neon name, the line outside, "It's Yours" on the decks in the window */
  function danceteria() {
    let wins = "";
    for (let fl = 0; fl < 5; fl++) for (let c = 0; c < 5; c++) {
      const x = 104 + c * 40, y = 34 + fl * 26, lit = fl === 3;
      wins += '<rect x="' + x + '" y="' + y + '" width="30" height="18" fill="' + (lit ? "#2a0f3a" : "#1a1d2a") + '" stroke="#5a5e6a"/>';
      if (!lit && (c + fl) % 3 === 0) wins += '<rect class="tlr-bl tlr-bl' + (c % 3 + 1) + '" x="' + (x + 2) + '" y="' + (y + 2) + '" width="26" height="14" fill="#ffd98a" opacity=".5"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#ds)"/>' + stars(18) +
      '<rect x="20" y="70" width="70" height="140" fill="#2a2c36"/><rect x="310" y="56" width="80" height="154" fill="#262832"/>' +
      '<rect x="94" y="24" width="212" height="188" fill="#6b6e78"/><rect x="94" y="20" width="212" height="8" fill="#555864"/>' + wins +
      '<g class="tlr-beam"><path d="M150 112 L120 130 L180 130 Z" fill="#ff5ab4" opacity=".55"/></g><g class="tlr-beam tlr-beam2"><path d="M250 112 L220 130 L280 130 Z" fill="' + SKY + '" opacity=".55"/></g>' +
      '<rect x="182" y="114" width="36" height="14" fill="#111"/>' + record(193, 121, 6, RED) + record(208, 121, 6, GOLD) +
      '<rect x="120" y="170" width="160" height="22" rx="3" fill="#120818" stroke="#ff5ab4" stroke-width="2"/>' +
      '<text class="tlr-flk" x="200" y="186" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="3" fill="#ff8ad0">DANCETERIA</text>' +
      '<rect x="0" y="212" width="400" height="48" fill="#4a4a50"/><rect x="0" y="212" width="400" height="4" fill="#77777e"/>' +
      [140, 158, 176, 226, 244, 262, 280].map((x, i) => person(x, 214 + (i % 2) * 2, i % 2 ? "#1a1a1a" : "#2a2a2a", i % 3 ? "" : "tlr-bob")).join("") +
      '<rect x="20" y="226" width="100" height="18" rx="3" fill="#111"/>' + txt("W 21 ST", 70, 239, 10, GOLD) +
      '<rect x="290" y="226" width="96" height="18" rx="3" fill="#111"/>' + txt("IT'S YOURS", 338, 239, 10, "#ff8ad0"),
      sky("ds", "#06060f", "#2a1a3a"));
  }

  /* 4. Piccadilly Circus, London, 1987 ("Big Beat in London"): the curved corner building with its wall of blinking neon panels (no brands),
     the fountain with the winged archer on top, a red double-decker and a black cab going round */
  function london() {
    const cols = ["#ff3b6b", "#38e8ff", "#ffcf3f", "#7cf29a", "#c9a4ff", "#ff8a3d"];
    let neon = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) {
      const x = 196 + c * 46, y = 34 + r * 34;
      neon += '<rect class="tlr-bl tlr-bl' + ((r + c) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="40" height="28" rx="2" fill="' + cols[(r * 4 + c) % 6] + '" opacity=".9"/>';
      neon += '<rect x="' + (x + 6) + '" y="' + (y + 9) + '" width="' + (16 + (c * 7 + r * 5) % 18) + '" height="4" fill="#fff" opacity=".8"/><rect x="' + (x + 6) + '" y="' + (y + 17) + '" width="' + (10 + (c * 5 + r * 3) % 16) + '" height="3" fill="#fff" opacity=".6"/>';
    }
    let win = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) win += '<rect x="' + (14 + c * 28) + '" y="' + (60 + r * 26) + '" width="14" height="16" fill="#ffd98a" opacity="' + ((r + c) % 3 ? ".35" : ".8") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ls)"/>' + stars(16) +
      '<rect x="0" y="44" width="130" height="146" fill="#cfc2a4"/><path d="M0 44 h130 v-8 h-130z" fill="#b8a888"/>' + win +
      '<path d="M186 20 h214 v170 h-214 z" fill="#3a3330"/>' + neon +
      '<rect x="186" y="140" width="214" height="50" fill="#5a4e46"/>' +
      [200, 240, 280, 320, 360].map(x => '<rect x="' + x + '" y="150" width="24" height="30" fill="#ffd98a" opacity=".45"/>').join("") +
      '<rect x="0" y="190" width="400" height="70" fill="#3a3a40"/><path d="M0 222 h400" stroke="#e8d27a" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<rect x="140" y="160" width="40" height="10" rx="2" fill="#6a6e78"/><rect x="146" y="150" width="28" height="10" fill="#7a7e88"/><rect x="156" y="112" width="8" height="40" fill="#5a5e68"/>' +
      '<path d="M160 112 l-10 -8 M160 112 l10 -10 M160 112 v-14" stroke="#4a5a52" stroke-width="3" stroke-linecap="round"/><circle cx="160" cy="96" r="4" fill="#4a5a52"/>' +
      '<g class="tlr-bus"><rect x="0" y="168" width="110" height="46" rx="5" fill="#d11f2a"/><rect x="0" y="188" width="110" height="3" fill="#f4ead8"/>' +
      [8, 32, 56, 80].map(x => '<rect x="' + x + '" y="172" width="18" height="12" rx="1" fill="#ffe7a8"/><rect x="' + x + '" y="194" width="18" height="11" rx="1" fill="#ffe7a8"/>').join("") +
      '<circle cx="22" cy="214" r="6" fill="#111"/><circle cx="88" cy="214" r="6" fill="#111"/></g>' +
      '<g class="tlr-car tlr-car2"><path d="M0 238 h50 v-8 q-6 -10 -16 -10 h-18 q-10 0 -16 10 z" fill="#151515"/><circle cx="12" cy="240" r="5" fill="#333"/><circle cx="38" cy="240" r="5" fill="#333"/><rect x="22" y="216" width="8" height="4" fill="#ffcf3f"/></g>' +
      '<rect x="8" y="8" width="160" height="26" rx="3" fill="#111" stroke="' + GOLD + '"/>' + txt("BIG BEAT IN LONDON", 88, 26, 11, GOLD, 'letter-spacing="1"') +
      txt("PICCADILLY CIRCUS", 293, 254, 9, CREAM, 'letter-spacing="2" opacity=".85"'),
      sky("ls", "#070b1e", "#2a2a4c"));
  }

  /* 5. Grand Concourse & E 175 St: green signs, the Art Deco Lewis Morris building behind, the tag wall, cars on the Concourse */
  function corner() {
    let deco = "";
    for (let fl = 0; fl < 8; fl++) for (let c = 0; c < 9; c++) {
      if (c === 4) continue;
      const x = 98 + c * 22, y = 34 + fl * 13;
      deco += '<rect class="' + ((c + fl) % 4 ? "" : "tlr-bl tlr-bl" + (c % 3 + 1)) + '" x="' + x + '" y="' + y + '" width="12" height="8" fill="#ffd98a" opacity="' + ((c + fl) % 4 ? ".35" : ".8") + '"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#cc)"/>' + stars(14) +
      '<rect x="90" y="24" width="210" height="112" fill="#e8dcc0"/>' +
      '<rect x="182" y="10" width="26" height="126" fill="#d8c8a2"/><path d="M182 10 h26 l-4 -6 h-18z" fill="#c9b48a"/>' +
      [96, 114, 132, 150, 168, 224, 242, 260, 278].map(x => '<rect x="' + (x + 2) + '" y="30" width="2" height="104" fill="#c9b48a" opacity=".6"/>').join("") +
      deco +
      '<rect x="90" y="24" width="210" height="4" fill="#5e8f8a"/><rect x="182" y="10" width="26" height="3" fill="#5e8f8a"/>' +
      txt("LEWIS MORRIS", 195, 20, 8, CREAM, 'letter-spacing="3" opacity=".75"') +
      '<rect x="0" y="80" width="88" height="56" fill="#3a3040"/><rect x="302" y="70" width="98" height="66" fill="#352c3c"/>' +
      '<rect x="0" y="130" width="400" height="96" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("T LA ROCK", 16, 194, 46, GOLD, -5) + tag("IT'S YOURS", 196, 216, 20, RED, -4) + tag("LOUIE LOU", 24, 220, 15, SKY, -3) + tag("BOOGIE DOWN", 200, 168, 14, CREAM, -6) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="tlr-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<g class="tlr-car tlr-car2"><rect x="0" y="240" width="40" height="12" rx="4" fill="' + SKY + '"/><circle cx="9" cy="252" r="4" fill="#111"/><circle cx="31" cy="252" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="284" y="66" width="112" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Grand Concourse", 340, 82, 11, "#fff") +
      '<rect x="300" y="92" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("E 175 St", 348, 108, 12, "#fff") +
      '<circle class="tlr-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("cc", "#0a0c1a", "#3a2a44"));
  }

  window.SCENES = { concourse: concourse, cedar: cedar, danceteria: danceteria, london: london, corner: corner };
})();
