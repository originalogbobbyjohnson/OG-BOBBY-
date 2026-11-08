/* brianmcknight scenes (Regions tab: Upstate New York; born in Buffalo, raised on Vine Ln off Sweet Home Rd in Amherst until about 10). 400 x 260 SVGs.
   CSS classes and ids prefixed bk- (the page's own anim-train is kept on the train).
   0 University, the underground Metro Rail terminus under UB South Campus: the silver car with the blue and gold bands pulling in, a sign for the 34 bus out Sweet Home Rd.
   1 Emmanuel Temple on Kensington Ave, Buffalo: the choir he sang in as a boy (his grandfather led it, his mother sang in it), robes swaying, a piano, music notes rising.
   2 Willow Ridge Elementary in Amherst: the school stage where he sang in shows (third grade, his first crowd that wasn't church), a kid at the piano, stage lights.
   3 His Broadway debut, 2007: Billy Flynn in Chicago at the Ambassador Theatre, the marquee chasing lights, taxis rolling by (no show logo, plain lettering).
   4 Vine Ln and Sweet Home Rd in Amherst: green signs, B. McKNIGHT tagged, the Rand Building's lit Art Deco tower far off downtown Buffalo, snow falling. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#f2d27a", NFTA = "#1f4e9c", BLUE = "#7fb6e8", RED = "#c0392b";
  const css = '<style>' +
    '@keyframes bkflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.bk-flk{animation:bkflick 2.4s infinite}.bk-flk2{animation-delay:.8s}' +
    '@keyframes bknote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-70px);opacity:0}}.bk-note{animation:bknote 3s ease-out infinite}.bk-n2{animation-delay:-1s}.bk-n3{animation-delay:-2s}' +
    '@keyframes bksway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.bk-sway{transform-box:fill-box;transform-origin:50% 100%;animation:bksway 2.4s ease-in-out infinite}.bk-sw2{animation-delay:-1.2s}' +
    '@keyframes bkchase{0%,100%{opacity:1}50%{opacity:.2}}.bk-ch{animation:bkchase .8s steps(1) infinite}.bk-ch2{animation-delay:-.4s}' +
    '@keyframes bkcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.bk-car{animation:bkcar 6s linear infinite}.bk-car2{animation-delay:-3s}' +
    '@keyframes bkspot{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.bk-spot{transform-box:fill-box;transform-origin:50% 0%;animation:bkspot 4s ease-in-out infinite}.bk-sp2{animation-delay:-2s}' +
    '@keyframes bksnow{from{transform:translateY(-20px)}to{transform:translateY(270px)}}.bk-snow{animation:bksnow 6s linear infinite}.bk-snow2{animation-delay:-3s}' +
    '@keyframes bkglow{0%,100%{opacity:.5}50%{opacity:1}}.bk-glow{animation:bkglow 2.6s ease-in-out infinite}' +
    '@keyframes bkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.bk-sp{animation:bkspray 1.4s ease-out infinite}.bk-spb{animation-delay:.5s}' +
    '@keyframes bkwalk{from{transform:translateX(-30px)}to{transform:translateX(430px)}}.bk-walk{animation:bkwalk 14s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const note = (cls, x, y, c) => '<g class="bk-note ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="4" fill="' + c + '"/><rect x="' + (x + 4) + '" y="' + (y - 18) + '" width="2" height="18" fill="' + c + '"/><path d="M' + (x + 6) + ' ' + (y - 18) + 'q8 4 6 10" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
  const snow = (n, cls) => Array.from({ length: n }, (_, i) => '<circle class="bk-snow ' + (i % 2 ? "bk-snow2 " : "") + (cls || "") + '" cx="' + ((i * 53) % 400) + '" cy="' + ((i * 37) % 120) + '" r="' + (1.2 + (i % 3) * .6) + '" fill="#fff" opacity=".85"/>').join("");

  /* 0. University station, Metro Rail, underground */
  function bkstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 42) + '" y="124" width="28" height="22" rx="3" fill="#d8ecfa" opacity=".9"/>').join("");
    const tr = '<g class="anim-train"><rect x="16" y="112" width="324" height="72" rx="10" fill="#cdd2d9" stroke="#6b7280" stroke-width="2"/>' + win +
      '<rect x="16" y="154" width="324" height="7" fill="' + NFTA + '"/><rect x="16" y="163" width="324" height="3" fill="' + GOLD + '"/>' +
      '<rect x="318" y="120" width="18" height="32" rx="3" fill="#2b3340"/><circle cx="332" cy="174" r="4" fill="#fff6c2"/>' +
      '<rect x="150" y="116" width="24" height="62" rx="2" fill="none" stroke="#6b7280" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#3a3f48"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 46) + '" y="0" width="44" height="98" fill="#4a505a" stroke="#353a42"/>').join("") +
      '<rect x="0" y="0" width="400" height="12" fill="#22262d"/>' + [40, 170, 300].map((x, i) => '<rect class="bk-flk' + (i === 1 ? " bk-flk2" : "") + '" x="' + x + '" y="3" width="60" height="5" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="98" width="400" height="10" fill="' + NFTA + '"/><rect x="0" y="108" width="400" height="80" fill="#1c1f25"/>' + tr +
      '<rect x="0" y="186" width="400" height="8" fill="#f2c200"/><rect x="0" y="194" width="400" height="66" fill="#8f8b84"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="194" width="40" height="66" fill="none" stroke="#7d7972" stroke-width="1"/>').join("") +
      '<rect x="40" y="24" width="250" height="58" rx="4" fill="#111"/><rect x="40" y="24" width="250" height="4" fill="#fff"/>' +
      '<text x="58" y="62" ' + font + ' font-size="28" fill="#fff">University</text>' +
      '<rect x="232" y="44" width="44" height="18" rx="9" fill="' + NFTA + '"/><text x="254" y="57.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">MR</text>' +
      '<text x="60" y="76" ' + font + ' font-size="8" fill="' + BLUE + '" letter-spacing="2">METRO RAIL  ·  END OF THE LINE</text>' +
      '<rect x="302" y="30" width="86" height="46" rx="4" fill="' + NFTA + '" stroke="#fff" stroke-width="1.5"/><text x="345" y="50" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">BUS 34</text>' +
      '<text x="345" y="66" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + GOLD + '">SWEET HOME RD</text>' +
      '<g class="bk-walk"><circle cx="0" cy="214" r="5" fill="#2e2a26"/><rect x="-5" y="219" width="10" height="20" rx="3" fill="' + RED + '"/></g>',
      "");
  }

  /* 1. Emmanuel Temple choir, Kensington Ave */
  function bkchurch() {
    const robe = (x, c, cls) => '<g class="bk-sway ' + cls + '"><circle cx="' + x + '" cy="128" r="9" fill="#5a3a26"/><path d="M' + (x - 13) + ' 176l4 -38q9 -6 18 0l4 38z" fill="' + c + '"/><path d="M' + (x - 7) + ' 140l7 8 7 -8" fill="' + GOLD + '"/></g>';
    const row = [70, 110, 150, 190, 230, 270, 310].map((x, i) => robe(x, i % 2 ? "#5b2a86" : "#6d3699", i % 2 ? "bk-sw2" : "")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bks1)"/>' +
      '<path d="M120 20h160v80h-160z" fill="#2a1c3e"/><path d="M200 22l34 34v44h-68v-44z" fill="url(#bkglass)"/><path d="M200 22v78M166 66h68" stroke="#2a1c3e" stroke-width="3"/>' +
      '<rect x="40" y="100" width="320" height="10" fill="#8a5a33"/><rect x="40" y="176" width="320" height="16" fill="#7a4a28"/>' + row +
      '<rect x="0" y="192" width="400" height="68" fill="#5a3a22"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 52 + 6) + '" y="214" width="40" height="34" rx="3" fill="#6b4528"/>').join("") +
      '<g><rect x="326" y="150" width="62" height="40" rx="3" fill="#1b1b1f"/><rect x="330" y="176" width="54" height="8" fill="#f4f1e8"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (334 + i * 9) + '" y="176" width="4" height="5" fill="#111"/>').join("") + '</g>' +
      note("", 120, 110, GOLD) + note("bk-n2", 210, 104, "#fff") + note("bk-n3", 290, 112, GOLD) +
      '<rect x="0" y="0" width="400" height="18" fill="#1b1126"/><text x="200" y="13" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" letter-spacing="2">EMMANUEL TEMPLE · KENSINGTON AVE · BUFFALO</text>',
      sky("bks1", "#3b2a52", "#6a4a3a") + '<linearGradient id="bkglass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e94f4f"/><stop offset=".5" stop-color="#f2c94c"/><stop offset="1" stop-color="#3f7fd0"/></linearGradient>');
  }

  /* 2. Willow Ridge Elementary stage, Amherst */
  function bkschool() {
    const kid = (x, c) => '<g class="bk-sway"><circle cx="' + x + '" cy="186" r="7" fill="#6a452c"/><rect x="' + (x - 7) + '" y="193" width="14" height="20" rx="4" fill="' + c + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#1a1d2b"/>' +
      '<path d="M0 0h400v30q-200 30 -400 0z" fill="#8e1f2a"/><rect x="0" y="0" width="40" height="230" fill="#a1232f"/><rect x="360" y="0" width="40" height="230" fill="#a1232f"/>' +
      Array.from({ length: 4 }, (_, i) => '<path d="M' + (6 + i * 9) + ' 0v230M' + (366 + i * 9) + ' 0v230" stroke="#7d1822" stroke-width="2"/>').join("") +
      '<path class="bk-spot" d="M120 0l-40 220h80z" fill="#fff6c8" opacity=".18"/><path class="bk-spot bk-sp2" d="M280 0l-40 220h80z" fill="#fff6c8" opacity=".18"/>' +
      '<rect x="90" y="44" width="220" height="30" rx="4" fill="#f4f1e8"/><text x="200" y="65" text-anchor="middle" ' + font + ' font-size="10.5" fill="#1f4e9c">WILLOW RIDGE ELEMENTARY · AMHERST</text>' +
      '<rect x="40" y="214" width="320" height="16" fill="#9a6b3a"/><rect x="40" y="210" width="320" height="4" fill="#c08d52"/>' +
      '<g><rect x="150" y="150" width="90" height="54" rx="4" fill="#2a1a12"/><rect x="154" y="186" width="82" height="10" fill="#f4f1e8"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (158 + i * 8.6) + '" y="186" width="4" height="6" fill="#111"/>').join("") + '</g>' +
      '<g><circle cx="196" cy="160" r="8" fill="#6a452c"/><rect x="188" y="168" width="16" height="22" rx="4" fill="#3f7fd0"/></g>' +
      kid(84, "#f2c94c") + kid(110, "#e86a5a") + kid(286, "#7fd1a8") + kid(312, "#b48be0") +
      note("", 230, 150, GOLD) + note("bk-n2", 170, 146, "#fff") +
      '<rect x="0" y="230" width="400" height="30" fill="#0f111a"/>' + Array.from({ length: 10 }, (_, i) => '<circle cx="' + (20 + i * 40) + '" cy="246" r="10" fill="#22263a"/>').join(""),
      "");
  }

  /* 3. Ambassador Theatre, Broadway debut as Billy Flynn */
  function bkbroadway() {
    const bulbs = Array.from({ length: 22 }, (_, i) => '<circle class="bk-ch' + (i % 2 ? " bk-ch2" : "") + '" cx="' + (78 + i * 11.4) + '" cy="96" r="2.4" fill="#ffe9a0"/>').join("") +
      Array.from({ length: 22 }, (_, i) => '<circle class="bk-ch' + (i % 2 ? "" : " bk-ch2") + '" cx="' + (78 + i * 11.4) + '" cy="150" r="2.4" fill="#ffe9a0"/>').join("");
    const taxi = (cls, y) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="58" height="14" rx="5" fill="#f2c200"/><rect x="12" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="#f2c200"/><rect x="15" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="30" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="12" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="46" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bks3)"/>' +
      '<rect x="40" y="10" width="320" height="200" fill="#c9b79a"/>' + Array.from({ length: 3 }, (_, i) => '<rect x="' + (70 + i * 100) + '" y="24" width="60" height="44" fill="#3a3a48"/><rect x="' + (70 + i * 100) + '" y="24" width="60" height="44" fill="none" stroke="#a8977a" stroke-width="3"/>').join("") +
      '<rect x="66" y="88" width="268" height="70" fill="#141414" stroke="#d4af37" stroke-width="2"/>' + bulbs +
      '<text x="200" y="124" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="30" fill="#f4f1e8" letter-spacing="5">CHICAGO</text>' +
      '<text x="200" y="142" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '" letter-spacing="2">BRIAN McKNIGHT AS BILLY FLYNN</text>' +
      '<rect x="80" y="158" width="240" height="52" fill="#2a1a12"/>' + [96, 156, 216, 276].map(x => '<rect x="' + x + '" y="166" width="28" height="44" fill="#c9a24a" opacity=".85"/>').join("") +
      '<rect class="bk-glow" x="0" y="206" width="400" height="4" fill="#ffe9a0" opacity=".6"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#3d3d42"/><path d="M0 236h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="18 14"/>' +
      taxi("bk-car", 222) + taxi("bk-car bk-car2", 240) +
      '<rect x="6" y="6" width="140" height="16" rx="2" fill="#111"/><text x="76" y="18" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" letter-spacing="1">AMBASSADOR THEATRE</text>',
      sky("bks3", "#141a3a", "#3a2a4a"));
  }

  /* 4. Vine Ln and Sweet Home Rd, Amherst */
  function bkcorner() {
    const rand = '<g><rect x="186" y="40" width="34" height="96" fill="#2c3450"/><rect x="192" y="26" width="22" height="16" fill="#323b5a"/><path d="M196 26l7 -14 7 14z" fill="#3a4466"/>' +
      '<rect x="202" y="0" width="2.5" height="14" fill="#8a93b0"/><circle class="bk-glow" cx="203" cy="20" r="8" fill="' + BLUE + '" opacity=".7"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="192" y="' + (48 + i * 10) + '" width="22" height="3" fill="#ffd97a" opacity=".55"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bks4)"/>' +
      '<g fill="#232a40"><rect x="120" y="96" width="40" height="40"/><rect x="230" y="84" width="30" height="52"/><rect x="266" y="100" width="44" height="36"/></g>' + rand +
      '<rect x="0" y="126" width="400" height="98" fill="#d9d3c6"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#c4bdae" stroke-width="1"/>').join("") +
      '<path d="M0 126h400" stroke="#8a8274" stroke-width="3"/>' +
      tag("B. McKNIGHT", 16, 190, 34, GOLD, -6) + tag("BACK AT ONE", 40, 214, 18, BLUE, -4) + tag("BMc", 250, 212, 22, "#ff7a6b", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#f4f6fa"/><rect x="0" y="222" width="400" height="4" fill="#fff"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 134, "Sweet Home Rd") + sign(270, 124, 94, "Vine Ln") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="bk-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="bk-sp"><circle cx="186" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="bk-sp bk-spb"><circle cx="192" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      snow(26),
      sky("bks4", "#1c2442", "#7a6a8a"));
  }

  window.SCENES = { bkstation: bkstation, bkchurch: bkchurch, bkschool: bkschool, bkbroadway: bkbroadway, bkcorner: bkcorner };
})();
