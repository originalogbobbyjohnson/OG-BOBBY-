/* Gravediggaz game (map: Long Island. Prince Paul the Undertaker was from Amityville and Poetic the Grym Reaper grew up in Wyandanch;
   the group came together around Paul on Long Island. Pinelawn on the LIRR Ronkonkoma Branch sits between the two).
   1. Pinelawn station at night: the high-level platform in the pines, the black sign with the LIRR badge, the train sliding in, fog rolling.
   2. The Undertaker's house in Amityville: where the four first heard the beats; the basement window glowing, bats, a shovel in the lawn.
   3. The Allah School in Mecca, Adam Clayton Powell Jr Blvd & W 126 St, Harlem: the Five Percent school behind "dig up the mentally dead".
   4. The Manhattan label office that dropped Paul's label and shelved Poetic's album: the anger that started the group. A letter drifting down.
   5. Wellwood Av & Long Island Av, East Farmingdale: green signs, the wall tagged GRAVEDIGGAZ, Republic Airport's control tower behind.
   400 x 260 SVGs. No logos, no faces, no 9s. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes gdfog{from{transform:translateX(0)}to{transform:translateX(-200px)}}.gd-fog{animation:gdfog 14s linear infinite}.gd-fog2{animation-duration:20s}' +
    '@keyframes gdblink{0%,100%{opacity:.25}50%{opacity:1}}.gd-bl{animation:gdblink 1.6s ease-in-out infinite}.gd-bl2{animation-delay:.5s}.gd-bl3{animation-delay:1s}' +
    '@keyframes gdflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.gd-flk{animation:gdflick 2.6s infinite}' +
    '@keyframes gdbat{0%{transform:translate(0,0)}50%{transform:translate(-160px,-20px)}100%{transform:translate(-320px,10px)}}.gd-bat{animation:gdbat 7s linear infinite}.gd-bat2{animation-delay:-3.5s}' +
    '@keyframes gdflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.3)}}.gd-flap{transform-box:fill-box;transform-origin:50% 50%;animation:gdflap .3s linear infinite}' +
    '@keyframes gdspin{to{transform:rotate(360deg)}}.gd-spin{transform-box:fill-box;transform-origin:50% 50%;animation:gdspin 1.4s linear infinite}.gd-rays{transform-box:fill-box;transform-origin:50% 50%;animation:gdspin 24s linear infinite}' +
    '@keyframes gdfall{0%{transform:translate(0,0) rotate(0)}50%{transform:translate(30px,60px) rotate(20deg)}100%{transform:translate(-10px,120px) rotate(-12deg)}}.gd-fall{transform-box:fill-box;transform-origin:50% 50%;animation:gdfall 5s ease-in-out infinite}' +
    '@keyframes gdplane{from{transform:translate(-60px,20px)}to{transform:translate(460px,-30px)}}.gd-plane{animation:gdplane 9s linear infinite}' +
    '@keyframes gdbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.gd-bob{animation:gdbob .7s ease-in-out infinite}.gd-bob2{animation-delay:.35s}' +
    '@keyframes gdcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.gd-car{animation:gdcar 8s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (6 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const pine = (x, base, h, col) => '<path d="M' + x + ' ' + (base - h) + 'l' + (h * 0.22) + ' ' + (h * 0.36) + 'h-' + (h * 0.1) + 'l' + (h * 0.18) + ' ' + (h * 0.32) + 'h-' + (h * 0.1) + 'l' + (h * 0.2) + ' ' + (h * 0.32) + 'h-' + (h * 1.0) + 'l' + (h * 0.2) + ' -' + (h * 0.32) + 'h-' + (h * 0.1) + 'l' + (h * 0.18) + ' -' + (h * 0.32) + 'h-' + (h * 0.1) + 'z" fill="' + col + '"/>';
  const fog = (y, op, cls) => '<g class="gd-fog ' + (cls || "") + '" opacity="' + op + '"><path d="M0 ' + y + 'q50-14 100 0t100 0t100 0t100 0t100 0t100 0v30H0z" fill="#d9e2dc"/></g>';
  const moon = (x, y, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + (r + 10) + '" fill="#e8f0c8" opacity=".12"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#eef2d8"/><circle cx="' + (x - r / 3) + '" cy="' + (y - r / 4) + '" r="' + (r / 5) + '" fill="#d6dcc0"/><circle cx="' + (x + r / 3) + '" cy="' + (y + r / 3) + '" r="' + (r / 7) + '" fill="#d6dcc0"/>';
  const bat = (x, y, cls) => '<g class="gd-bat ' + (cls || "") + '"><g class="gd-flap"><path d="M' + x + ' ' + y + 'q-8-8-16-2q6 0 8 6q4-4 8-4q4 0 8 4q2-6 8-6q-8-6-16 2z" fill="#0a0a0c"/></g></g>';
  const GREEN = "#b6f05a", PURPLE = "#9b6bff", BONE = "#e8e2cf", LIRR = "#0039a6";

  /* 1. Pinelawn, LIRR Ronkonkoma Branch, at night in the pines */
  function pinelawn() {
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="124" width="22" height="18" rx="2" fill="#ffe9a8" opacity=".85"/>';
    let pines = "";
    for (let i = 0; i < 12; i++) pines += pine(10 + i * 36, 132, 50 + (i % 3) * 16, i % 2 ? "#0f2219" : "#132a1f");
    return svg(
      '<rect width="400" height="260" fill="url(#gdp)"/>' + stars(18) + moon(330, 44, 20) + pines +
      /* sign on posts */
      '<rect x="66" y="66" width="4" height="40" fill="#555"/><rect x="250" y="66" width="4" height="40" fill="#555"/>' +
      '<rect x="40" y="44" width="240" height="30" rx="3" fill="#111"/><rect x="40" y="44" width="240" height="3" fill="#fff"/>' +
      '<text x="54" y="65" ' + font + ' font-size="15" fill="#fff">Pinelawn</text>' +
      '<rect x="216" y="50" width="54" height="18" rx="9" fill="' + LIRR + '"/>' + txt("LIRR", 243, 63, 11, "#fff") +
      '<rect x="40" y="78" width="160" height="14" rx="2" fill="#111"/>' + txt("RONKONKOMA BRANCH", 120, 89, 8, "#ddd", 'letter-spacing="1"') +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="10" y="112" width="300" height="52" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="10" y="148" width="300" height="5" fill="' + LIRR + '"/><rect x="10" y="154" width="300" height="2" fill="#5b3fa0"/>' +
        '<rect x="290" y="120" width="16" height="24" rx="2" fill="#cfe2f5"/><circle cx="300" cy="156" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* high-level platform + shelter */
      '<rect x="0" y="164" width="400" height="8" fill="#e5c33a"/><rect x="0" y="172" width="400" height="88" fill="#4a4c50"/>' +
      '<rect x="300" y="178" width="80" height="44" fill="#2d3a33" opacity=".9"/><rect x="296" y="174" width="88" height="6" fill="#1d2722"/><rect x="306" y="186" width="68" height="22" fill="#9fb6c4" opacity=".35"/>' +
      '<circle class="gd-flk" cx="340" cy="182" r="4" fill="#fff6c2"/>' +
      fog(204, 0.35) + fog(226, 0.25, "gd-fog2") +
      txt("EAST FARMINGDALE · LONG ISLAND", 150, 248, 10, BONE, 'letter-spacing="2.5"'),
      sky("gdp", "#05070c", "#24304a"));
  }

  /* 2. The Undertaker's house in Amityville: where the beats were first heard. Basement window glowing, a record spinning inside, bats, a shovel in the lawn */
  function house() {
    return svg(
      '<rect width="400" height="260" fill="url(#gdh)"/>' + stars(16) + moon(64, 46, 18) +
      bat(360, 50) + bat(400, 80, "gd-bat2") +
      /* bare tree */
      '<path d="M342 200V120M342 140l-22-22M342 128l18-26M330 128l-10-18M352 112l14-6" stroke="#1a1714" stroke-width="5" stroke-linecap="round" fill="none"/>' +
      /* the house: a plain Long Island split-level */
      '<rect x="96" y="104" width="120" height="76" fill="#4a4f5e"/><path d="M88 106l68-40 68 40z" fill="#2b2e38"/>' +
      '<rect x="216" y="128" width="96" height="52" fill="#555a6a"/><path d="M210 130l54-26 54 26z" fill="#30333e"/>' +
      [112, 172].map(x => '<rect x="' + x + '" y="118" width="28" height="24" fill="#ffd98a" opacity=".85"/><path d="M' + (x + 14) + ' 118v24M' + x + ' 130h28" stroke="#4a4f5e" stroke-width="2"/>').join("") +
      '<rect x="244" y="140" width="40" height="40" fill="#2a2420"/><circle cx="276" cy="162" r="2" fill="#c9a24a"/>' +
      '<rect x="120" y="150" width="20" height="30" fill="#2a2420"/>' +
      /* basement window strip, glowing, record turning inside */
      '<rect x="96" y="180" width="216" height="16" fill="#2e3140"/><rect x="150" y="182" width="96" height="12" fill="' + GREEN + '" opacity=".75"/>' +
      '<g class="gd-spin"><circle cx="198" cy="188" r="5" fill="#111"/><rect x="197.5" y="183" width="1" height="3" fill="#aaa"/></g>' +
      /* lawn + walk + shovel */
      '<rect x="0" y="196" width="400" height="64" fill="#1c2a1e"/><path d="M134 196l-14 64h34l-6-64z" fill="#55574f"/>' +
      '<g transform="rotate(12 70 220)"><rect x="68" y="176" width="4" height="40" fill="#8b5a2b"/><rect x="62" y="172" width="16" height="5" rx="2" fill="#8b5a2b"/><path d="M62 214h16l-2 16q-6 6-12 0z" fill="#9aa0a6"/></g>' +
      '<path d="M50 236q20-10 40 0z" fill="#3a2a1e"/>' +
      fog(214, 0.3) +
      txt("THE UNDERTAKER'S HOUSE · AMITYVILLE", 210, 250, 10, BONE, 'letter-spacing="2"'),
      sky("gdh", "#0a0718", "#3b2b5a"));
  }

  /* 3. The Allah School in Mecca, Harlem: the little brick school, the sun rising over the avenue, the chalkboard of the jewels */
  function mecca() {
    let brick = "";
    for (let y = 70; y < 190; y += 8) for (let x = (y / 8) % 2 ? 98 : 90; x < 310; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#7b3b2a"/>';
    let rays = "";
    for (let i = 0; i < 12; i++) rays += '<path d="M200 60l' + (Math.cos(i * Math.PI / 6) * 90).toFixed(1) + ' ' + (Math.sin(i * Math.PI / 6) * 90).toFixed(1) + 'l' + (Math.cos(i * Math.PI / 6 + 0.15) * 4).toFixed(1) + ' ' + (Math.sin(i * Math.PI / 6 + 0.15) * 4).toFixed(1) + 'z" fill="#ffd36b" opacity=".35"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gdm)"/>' +
      '<g class="gd-rays">' + rays + '</g><circle cx="200" cy="60" r="26" fill="#ffcf5a"/>' +
      /* neighbors */
      '<rect x="0" y="90" width="90" height="110" fill="#5b4a5e"/><rect x="310" y="80" width="90" height="120" fill="#4e5466"/>' +
      [12, 40, 66].map(x => '<rect x="' + x + '" y="104" width="12" height="16" fill="#ffe8b0" opacity=".6"/>').join("") +
      [324, 352, 380].map(x => '<rect x="' + x + '" y="96" width="10" height="16" fill="#ffe8b0" opacity=".6"/>').join("") +
      /* the school */
      '<rect x="90" y="66" width="220" height="134" fill="#8e4632"/>' + brick +
      '<rect x="90" y="62" width="220" height="8" fill="#5a2a1e"/>' +
      [112, 172, 232].map(x => '<rect x="' + x + '" y="80" width="40" height="30" fill="#f3e1b0" opacity=".85"/><path d="M' + (x + 20) + ' 80v30" stroke="#5a2a1e" stroke-width="2"/>').join("") +
      '<rect x="100" y="120" width="200" height="22" fill="#1d3a2a"/>' + txt("ALLAH SCHOOL IN MECCA", 200, 136, 12, "#ffd36b", 'letter-spacing="1.5"') +
      '<rect x="120" y="150" width="60" height="50" fill="#2a1a12" stroke="#ffd36b" stroke-width="2"/>' +
      /* chalkboard */
      '<rect x="200" y="150" width="96" height="44" fill="#1f2d24" stroke="#8b5a2b" stroke-width="3"/>' +
      txt("KNOWLEDGE", 248, 164, 8, "#f4f1e6") + txt("WISDOM", 248, 176, 8, "#f4f1e6") + txt("UNDERSTANDING", 248, 188, 8, "#f4f1e6") +
      '<rect x="0" y="200" width="400" height="12" fill="#9a958c"/><rect x="0" y="212" width="400" height="48" fill="#3f4146"/>' +
      person(60, 178, "#1d1a22", "gd-bob") + person(78, 180, "#2a2430", "gd-bob gd-bob2") + person(340, 178, "#1d1a22", "gd-bob") +
      '<g class="gd-car"><rect x="0" y="226" width="50" height="15" rx="4" fill="' + PURPLE + '"/><circle cx="12" cy="241" r="4.5" fill="#111"/><circle cx="38" cy="241" r="4.5" fill="#111"/></g>' +
      txt("ADAM CLAYTON POWELL JR BLVD · HARLEM", 200, 254, 9, BONE, 'letter-spacing="2"'),
      sky("gdm", "#f6a85c", "#fbe0a8"));
  }

  /* 4. The Manhattan label office: one lit window with gold records on the wall, the letter that said no drifting down, pick, sickle and shovel leaning on the stoop */
  function label() {
    let wins = "";
    for (let y = 30; y < 180; y += 22) for (let x = 120; x < 280; x += 26) wins += '<rect x="' + x + '" y="' + y + '" width="16" height="14" fill="' + ((x + y) % 5 ? "#1c2230" : "#ffd98a") + '" opacity="' + ((x + y) % 5 ? 1 : .7) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gdl)"/>' + stars(10) +
      /* skyline */
      '<rect x="0" y="70" width="60" height="140" fill="#1a1f2c"/><rect x="58" y="100" width="50" height="110" fill="#222838"/><rect x="292" y="60" width="54" height="150" fill="#1e2433"/><rect x="344" y="96" width="56" height="114" fill="#171b27"/>' +
      /* the office tower */
      '<rect x="110" y="18" width="180" height="192" fill="#3a4152"/>' + wins +
      /* the big lit office window */
      '<rect x="150" y="96" width="100" height="56" fill="#ffe7a8"/><rect x="150" y="96" width="100" height="56" fill="none" stroke="#2a2f3c" stroke-width="3"/>' +
      [170, 200, 230].map(x => '<circle cx="' + x + '" cy="114" r="9" fill="#d4af37" stroke="#8a6a00" stroke-width="1.5"/><circle cx="' + x + '" cy="114" r="2.5" fill="#8a6a00"/>').join("") +
      '<rect x="160" y="134" width="80" height="12" fill="#6b4a2e"/>' +
      /* the letter drifting down */
      '<g class="gd-fall"><rect x="250" y="40" width="34" height="24" fill="#f4f1e6" stroke="#999"/><path d="M254 48h26M254 54h20" stroke="#999" stroke-width="1.5"/>' + txt("NO", 267, 61, 8, "#c0392b") + '</g>' +
      /* stoop with the pick, the sickle and the shovel */
      '<rect x="160" y="196" width="80" height="14" fill="#5a5f6a"/>' +
      '<g transform="rotate(-10 150 200)"><rect x="148" y="160" width="4" height="40" fill="#8b5a2b"/><path d="M134 162q16-10 32 0l-2 4q-14-8-28 0z" fill="#9aa0a6"/></g>' +
      '<g transform="rotate(8 252 200)"><rect x="250" y="164" width="4" height="36" fill="#8b5a2b"/><path d="M252 166q22-12 26 10q-8-14-24-6z" fill="#9aa0a6"/></g>' +
      '<g transform="rotate(-4 270 200)"><rect x="268" y="156" width="4" height="40" fill="#8b5a2b"/><rect x="262" y="152" width="16" height="5" rx="2" fill="#8b5a2b"/><path d="M262 194h16l-2 14q-6 6-12 0z" fill="#9aa0a6"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#2e3036"/>' + fog(222, 0.25) +
      txt("THE LABEL THAT SAID NO · MANHATTAN", 200, 250, 10, BONE, 'letter-spacing="2"'),
      sky("gdl", "#0b0f1e", "#3d3550"));
  }

  /* 5. Wellwood Av & Long Island Av, East Farmingdale: green signs, the wall tagged GRAVEDIGGAZ, Republic Airport's control tower behind, a small plane climbing */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gdc)"/>' + stars(14) + moon(300, 36, 14) +
      /* the control tower */
      '<rect x="174" y="40" width="20" height="90" fill="#8d939c"/><path d="M162 40h44l-6-18h-32z" fill="#3a4a5a"/><rect x="166" y="24" width="36" height="12" fill="#bfe3f0" opacity=".85"/><rect x="160" y="18" width="48" height="6" fill="#2e3a46"/>' +
      '<circle class="gd-bl" cx="184" cy="14" r="3" fill="#ff3b3b"/>' +
      '<g class="gd-plane"><path d="M0 70l26-4l8-8h4l-4 9l10-1l4-4h3l-2 6l2 6h-3l-4-4l-10-1l4 9h-4l-8-8z" fill="#cfd5dc"/><circle class="gd-bl gd-bl2" cx="2" cy="70" r="2" fill="#b6f05a"/></g>' +
      '<rect x="0" y="120" width="400" height="14" fill="#2c3330"/>' +
      [10, 60, 110, 230, 280, 330].map((x, i) => pine(x + 20, 134, 40 + (i % 2) * 14, "#122119")).join("") +
      /* the wall */
      '<rect x="0" y="130" width="400" height="96" fill="#3a3c43"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#31333a" stroke-width="1"/>'; return b; })() +
      tag("GRAVEDIGGAZ", 12, 190, 40, GREEN, -5) + tag("DIG IT UP", 196, 220, 19, PURPLE, -4) + tag("6 FEET DEEP", 26, 222, 14, BONE, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#4e5055"/><rect x="0" y="226" width="400" height="5" fill="#7a7c80"/>' +
      fog(218, 0.22) +
      '<g class="gd-car"><rect x="0" y="238" width="46" height="13" rx="4" fill="#2b2b33"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/><rect x="40" y="241" width="5" height="3" fill="#fff6c2"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="60" width="5" height="168" fill="#3d4b3f"/>' +
      '<rect x="292" y="64" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Wellwood Av", 344, 80, 12, "#fff") +
      '<rect x="292" y="90" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Long Island Av", 344, 106, 11, "#fff") +
      '<circle class="gd-flk" cx="358" cy="58" r="4" fill="#fff6c2"/>',
      sky("gdc", "#06080d", "#2a2f45"));
  }

  window.SCENES = { pinelawn: pinelawn, house: house, mecca: mecca, label: label, corner: corner };
})();
