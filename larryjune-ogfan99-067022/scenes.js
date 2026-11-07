/* larryjune scenes (Regions tab: The Bay Area; Bayview, San Francisco). CSS classes prefixed lj- (the page's own anim-train is kept).
   1 Oakdale/Palou (signed Opera House): the Muni T Third island platform in the middle of Third Street, a silver-and-red light-rail car sliding in, palms in the median.
   2 The Bayview Opera House (1888) on Third St: the white clapboard hall, the gable with the round window, tall arched windows, bunting swaying over the plaza.
   3 Napa Valley (his "couple days in Napa" world): vineyard rows, golden hills, hot-air balloons drifting up at sunrise.
   4 The Hunters Point gantry crane over the bay, below Harbor Rd where he grew up: steel giant at dusk, gulls, the red beacon blinking.
   5 Third St and Palou Ave: green signs, LARRY JUNE tagged, oranges stacked on a crate, the downtown skyline with the round-topped tower behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ljflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.lj-flk{animation:ljflick 2.4s infinite}.lj-flk2{animation-delay:.8s}' +
    '@keyframes ljcar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.lj-car{animation:ljcar 7s linear infinite}.lj-car2{animation-delay:-3.5s}' +
    '@keyframes ljcarL{from{transform:translateX(540px)}to{transform:translateX(-160px)}}.lj-carL{animation:ljcarL 8s linear infinite}' +
    '@keyframes ljsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.lj-palm{transform-box:fill-box;transform-origin:50% 100%;animation:ljsway 3.6s ease-in-out infinite}.lj-palm2{animation-delay:-1.8s}' +
    '@keyframes ljflag{0%,100%{transform:skewX(0)}50%{transform:skewX(-14deg)}}.lj-bunt{transform-box:fill-box;transform-origin:50% 0;animation:ljflag 1.6s ease-in-out infinite}.lj-bunt2{animation-delay:-.8s}' +
    '@keyframes ljrise{0%{transform:translate(0,30px)}50%{transform:translate(10px,0)}100%{transform:translate(0,30px)}}.lj-bal{animation:ljrise 8s ease-in-out infinite}.lj-bal2{animation-delay:-2.7s}.lj-bal3{animation-delay:-5.3s}' +
    '@keyframes ljbird{0%{transform:translate(0,0)}100%{transform:translate(440px,-24px)}}.lj-bird{animation:ljbird 12s linear infinite}.lj-bird2{animation-delay:-6s}' +
    '@keyframes ljblink{0%,100%{opacity:.2}50%{opacity:1}}.lj-bl{animation:ljblink 1.6s ease-in-out infinite}.lj-bl2{animation-delay:-.8s}' +
    '@keyframes ljwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.lj-wave{animation:ljwave 4s ease-in-out infinite}' +
    '@keyframes ljspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lj-sp{animation:ljspray 1.4s ease-out infinite}.lj-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const palm = (x, y, h, cls) => '<g class="lj-palm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q-4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#6b4a2a" stroke-width="5" fill="none"/>' +
    '<g fill="#2f7a3a"><path d="M' + (x + 2) + ' ' + (y - h) + 'q-20 -6 -30 8q16 -10 30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q20 -6 30 8q-16 -10 -30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q-8 -18 -26 -16q16 2 26 16z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q8 -18 26 -16q-16 2 -26 16z"/></g></g>';
  const orange = (x, y, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#ff8a1f" stroke="#c2560a" stroke-width="1"/><path d="M' + x + ' ' + (y - r) + 'q3 -4 6 -3" stroke="#2f7a3a" stroke-width="2" fill="none"/>';
  const MUNI = "#d31245", ORG = "#ff8a1f", LIME = "#6fcf4a", SKY = "#7fd4ff";

  /* 1. Oakdale/Palou: median island platform on Third St, silver-and-red Muni light rail sliding in */
  function ljstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (60 + i * 44) + '" y="98" width="30" height="24" rx="3" fill="#24303a"/>').join("");
    const train = '<g class="anim-train"><path d="M30 92h296q34 0 38 30v20H30z" fill="#e6e9ec" stroke="#7d868e" stroke-width="2"/>' + wins +
      '<rect x="30" y="126" width="334" height="7" fill="' + MUNI + '"/><rect x="30" y="133" width="334" height="3" fill="#3a3f45"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (98 + i * 88) + '" y="100" width="4" height="42" fill="#c9ced3"/>').join("") +
      '<path d="M326 96q30 2 34 26h-34z" fill="#24303a"/><circle cx="356" cy="138" r="3.5" fill="#fff6c2"/>' +
      '<path d="M150 92l20 -22h20l20 22" stroke="#555" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ljs1)"/>' +
      '<path d="M0 80l70 -20l60 12l80 -26l70 18l60 -14l60 20v10H0z" fill="#8a8f7a" opacity=".55"/>' +
      '<path d="M0 66h400" stroke="#3a3a3a" stroke-width="1.5"/>' +
      palm(18, 150, 92) + palm(384, 150, 100, "lj-palm2") +
      '<rect x="40" y="40" width="320" height="8" rx="2" fill="#5a6b78"/>' + [60, 200, 340].map(x => '<rect x="' + (x - 3) + '" y="48" width="6" height="98" fill="#5a6b78"/>').join("") +
      '<g class="lj-flk"><rect x="100" y="48" width="40" height="3" fill="#fff3c4"/></g><g class="lj-flk lj-flk2"><rect x="260" y="48" width="40" height="3" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="142" width="400" height="5" fill="#f2c200"/><rect x="0" y="147" width="400" height="22" fill="#c9c3b6"/>' +
      '<rect x="0" y="169" width="400" height="91" fill="#4a4a50"/><path d="M0 214h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="18 12"/>' +
      car("lj-car", 0, 232, ORG) + car("lj-carL", 0, 188, SKY) +
      '<rect x="102" y="174" width="196" height="34" rx="3" fill="#111"/><text x="114" y="191" ' + font + ' font-size="15" fill="#fff">Oakdale/Palou</text>' +
      '<text x="114" y="203" ' + font + ' font-size="8" fill="#cfd6dd">OPERA HOUSE · INBOUND</text>' +
      '<circle cx="276" cy="191" r="12" fill="' + MUNI + '"/><text x="276" y="196" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">T</text>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#3a2a1a" opacity=".9">MUNI T THIRD · THIRD ST · BAYVIEW</text>',
      sky("ljs1", "#8fd0f2", "#fde3b8"));
  }

  /* 2. Bayview Opera House: white clapboard hall, gable with a round window, arched windows, bunting over the plaza */
  function ljopera() {
    const arch = (x, y, w, h) => '<path d="M' + x + ' ' + (y + h) + 'v' + (-(h - w / 2)) + 'a' + (w / 2) + ' ' + (w / 2) + ' 0 0 1 ' + w + ' 0v' + (h - w / 2) + 'z" fill="#2f4458" stroke="#8a9aa8" stroke-width="1.5"/>';
    const flags = (cls, x0) => '<g class="lj-bunt ' + cls + '">' + Array.from({ length: 7 }, (_, i) => '<path d="M' + (x0 + i * 22) + ' 64l11 16l11 -16z" fill="' + [ORG, LIME, SKY, "#ffd23f", ORG, LIME, SKY][i] + '"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ljs2)"/>' +
      '<path d="M0 64q100 6 200 0q100 -6 200 0" stroke="#555" stroke-width="1" fill="none"/>' + flags("", 4) + flags("lj-bunt2", 238) +
      '<rect x="96" y="104" width="208" height="112" fill="#f6f3ea"/>' +
      Array.from({ length: 13 }, (_, i) => '<path d="M96 ' + (110 + i * 8) + 'h208" stroke="#ded8c8" stroke-width="1"/>').join("") +
      '<path d="M86 106l114 -56l114 56z" fill="#f6f3ea" stroke="#c8c0ac" stroke-width="2"/><path d="M80 108h240" stroke="#8a7a62" stroke-width="5"/>' +
      '<circle cx="200" cy="82" r="11" fill="#2f4458" stroke="#8a9aa8" stroke-width="2"/><path d="M189 82h22M200 71v22" stroke="#8a9aa8" stroke-width="1.5"/>' +
      arch(112, 120, 22, 52) + arch(148, 120, 22, 52) + arch(230, 120, 22, 52) + arch(266, 120, 22, 52) +
      '<path d="M182 216v-60a18 18 0 0 1 36 0v60z" fill="#5a3a2a" stroke="#8a7a62" stroke-width="2"/><path d="M200 140v76" stroke="#3a2418" stroke-width="2"/>' +
      '<rect x="150" y="96" width="100" height="12" fill="#2a3e52"/><text x="200" y="105.5" text-anchor="middle" ' + font + ' font-size="8" fill="#f6f3ea">OPERA HOUSE</text>' +
      '<rect x="80" y="214" width="240" height="8" fill="#cfc6b2"/><rect x="70" y="222" width="260" height="8" fill="#bdb39c"/>' +
      palm(48, 236, 110) + palm(352, 236, 120, "lj-palm2") +
      '<rect x="0" y="230" width="400" height="30" fill="#8a8578"/>' +
      '<g class="lj-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2a3a">BAYVIEW OPERA HOUSE · THIRD ST · SINCE 1888</text>',
      sky("ljs2", "#a3d8f4", "#fff0d4"));
  }

  /* 3. Napa Valley at sunrise: vineyard rows, golden hills, hot-air balloons drifting */
  function ljnapa() {
    const bal = (cls, x, y, c1, c2, s) => '<g class="lj-bal ' + cls + '"><path d="M' + x + ' ' + (y + 26 * s) + 'q' + (-22 * s) + ' ' + (-12 * s) + ' ' + (-20 * s) + ' ' + (-34 * s) + 'q' + (2 * s) + ' ' + (-20 * s) + ' ' + (20 * s) + ' ' + (-20 * s) + 'q' + (18 * s) + ' 0 ' + (20 * s) + ' ' + (20 * s) + 'q' + (2 * s) + ' ' + (22 * s) + ' ' + (-20 * s) + ' ' + (34 * s) + 'z" fill="' + c1 + '"/>' +
      '<path d="M' + x + ' ' + (y + 26 * s) + 'q' + (-8 * s) + ' ' + (-14 * s) + ' ' + (-7 * s) + ' ' + (-34 * s) + 'q' + (1 * s) + ' ' + (-20 * s) + ' ' + (7 * s) + ' ' + (-20 * s) + 'q' + (6 * s) + ' 0 ' + (7 * s) + ' ' + (20 * s) + 'q' + (1 * s) + ' ' + (20 * s) + ' ' + (-7 * s) + ' ' + (34 * s) + 'z" fill="' + c2 + '"/>' +
      '<path d="M' + (x - 4 * s) + ' ' + (y + 27 * s) + 'l' + (1 * s) + ' ' + (7 * s) + 'M' + (x + 4 * s) + ' ' + (y + 27 * s) + 'l' + (-1 * s) + ' ' + (7 * s) + '" stroke="#5a4030" stroke-width="1"/><rect x="' + (x - 4 * s) + '" y="' + (y + 34 * s) + '" width="' + (8 * s) + '" height="' + (6 * s) + '" fill="#8a5a2a"/></g>';
    const rows = Array.from({ length: 9 }, (_, i) => '<path d="M200 140L' + (-160 + i * 90) + ' 260" stroke="#3f6b2a" stroke-width="' + (6 + Math.abs(4 - i)) + '" stroke-dasharray="4 3"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ljs3)"/>' +
      '<circle cx="352" cy="62" r="22" fill="#ffd27a" opacity=".9"/>' +
      '<path d="M0 132q60 -40 130 -22q70 -30 140 -6q70 -24 130 10v30H0z" fill="#7a6a8a" opacity=".6"/>' +
      '<path d="M0 150q90 -26 200 -12q110 -18 200 6v116H0z" fill="#d9b85a"/>' +
      '<path d="M0 160q100 -16 200 -14q100 -2 200 14v100H0z" fill="#8fae4a"/>' + rows +
      '<g fill="#4f6e3a"><circle cx="40" cy="150" r="9"/><circle cx="56" cy="152" r="7"/><circle cx="352" cy="150" r="10"/></g>' +
      bal("", 80, 60, ORG, "#ffd23f", 1.1) + bal("lj-bal2", 210, 40, LIME, "#fff4d6", 1.3) + bal("lj-bal3", 300, 76, SKY, "#ffffff", .9) +
      '<g class="lj-bird"><path d="M0 70q4 -4 8 0q4 -4 8 0" stroke="#5a4a4a" stroke-width="1.5" fill="none"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#3a2a3a">NAPA VALLEY · A COUPLE DAYS UP NORTH</text>',
      sky("ljs3", "#f6b48a", "#fde8c4"));
  }

  /* 4. The Hunters Point gantry crane over the bay at dusk */
  function ljcrane() {
    const truss = (x1, y1, x2, y2, n) => Array.from({ length: n }, (_, i) => { const t1 = i / n, t2 = (i + 1) / n; return '<path d="M' + (x1 + (x2 - x1) * t1) + ' ' + (y1 + (y2 - y1) * t1) + 'L' + (x1 + (x2 - x1) * t2 + 6) + ' ' + (y1 + (y2 - y1) * t2) + '" stroke="#b9c0c6" stroke-width="1.2"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ljs4)"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + ((i * 61) % 400) + '" cy="' + ((i * 19) % 50 + 30) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      '<path d="M0 176q90 -14 180 -6q120 10 220 -4v94H0z" fill="#4a5a6e"/>' +
      '<g class="lj-wave">' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 60) + ' ' + (196 + (i % 3) * 14) + 'q10 -4 20 0q10 4 20 0" stroke="#8aa0b8" stroke-width="1.5" fill="none" opacity=".6"/>').join("") + '</g>' +
      /* legs */
      '<path d="M150 182L170 92M250 182L230 92" stroke="#8d969e" stroke-width="10"/><path d="M160 140h80" stroke="#8d969e" stroke-width="6"/>' +
      truss(150, 182, 170, 92, 6) + truss(250, 182, 230, 92, 6) +
      /* trapezoid top frame */
      '<path d="M120 92h160l-24 -52h-112z" fill="none" stroke="#a4adb5" stroke-width="7"/>' + truss(120, 92, 144, 40, 5) + truss(256, 40, 280, 92, 5) +
      '<path d="M144 40L256 92M256 40L144 92" stroke="#a4adb5" stroke-width="2"/>' +
      /* boom */
      '<path d="M90 96h220" stroke="#8d969e" stroke-width="8"/><path d="M200 96v34" stroke="#5a6068" stroke-width="2"/><rect x="194" y="128" width="12" height="8" fill="#5a6068"/>' +
      '<circle class="lj-bl" cx="200" cy="36" r="4" fill="#ff3a3a"/><circle class="lj-bl lj-bl2" cx="92" cy="92" r="3" fill="#ff3a3a"/>' +
      '<rect x="130" y="182" width="140" height="10" fill="#3a4250"/>' +
      '<g class="lj-bird"><path d="M0 60q5 -5 10 0q5 -5 10 0" stroke="#fff" stroke-width="1.5" fill="none" opacity=".8"/></g><g class="lj-bird lj-bird2"><path d="M0 80q4 -4 8 0q4 -4 8 0" stroke="#fff" stroke-width="1.5" fill="none" opacity=".7"/></g>' +
      '<g fill="#ffd98a" opacity=".7">' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (300 + i * 9) + '" y="' + (164 + (i % 2) * 3) + '" width="2" height="2"/>').join("") + '</g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#ffe6c8" opacity=".9">HUNTERS POINT · THE CRANE OVER THE BAY</text>',
      sky("ljs4", "#2a2a5a", "#f08a5a"));
  }

  /* 5. Third St and Palou Ave; LARRY JUNE tagged, oranges on a crate, the skyline with the round-topped tower behind */
  function ljcorner() {
    const sky_ = '<g fill="#2a2c46">' +
      '<rect x="40" y="96" width="22" height="40"/><rect x="66" y="84" width="18" height="52"/><rect x="88" y="100" width="26" height="36"/>' +
      '<path d="M190 136V60q10 -30 20 0v76z"/>' +
      '<rect x="150" y="90" width="28" height="46"/><rect x="222" y="82" width="22" height="54"/><rect x="250" y="98" width="30" height="38"/><rect x="290" y="88" width="20" height="48"/><rect x="316" y="104" width="34" height="32"/></g>' +
      '<g fill="#ffd98a" opacity=".55">' + Array.from({ length: 22 }, (_, i) => '<rect x="' + (44 + (i * 37) % 300) + '" y="' + (100 + (i * 13) % 30) + '" width="2" height="2"/>').join("") + '</g>' +
      '<circle class="lj-bl" cx="200" cy="52" r="2.5" fill="#ff3a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ljs5)"/>' +
      '<circle cx="330" cy="70" r="20" fill="#ffb05a" opacity=".85"/>' + sky_ +
      '<rect x="0" y="134" width="400" height="90" fill="#d8cfbf"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (142 + i * 8) + 'h400" stroke="#c4baa8" stroke-width="1"/>').join("") +
      tag("LARRY JUNE", 16, 196, 40, ORG, -6) + tag("TFN", 30, 156, 18, LIME, -4) + tag("GOOD JOB", 120, 218, 15, "#ffffff", -3) +
      '<rect x="236" y="196" width="46" height="26" fill="#a8742a" stroke="#6b4a1a" stroke-width="2"/><path d="M236 209h46" stroke="#6b4a1a" stroke-width="1.5"/>' + orange(246, 192, 6) + orange(259, 191, 6) + orange(272, 192, 6) + orange(252, 182, 6) + orange(266, 182, 6) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="340" y="98" width="6" height="126" fill="#2f2f2f"/>' + sign(286, 100, 102, "Third St") + sign(282, 126, 110, "Palou Ave") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="lj-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("lj-car", 0, 240, ORG) +
      '<g class="lj-sp"><circle cx="210" cy="168" r="3" fill="' + ORG + '" opacity=".7"/></g><g class="lj-sp lj-sp2"><circle cx="216" cy="162" r="2" fill="' + ORG + '" opacity=".6"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff0de" opacity=".9">THIRD ST · PALOU AVE · BAYVIEW</text>',
      sky("ljs5", "#3a2a5a", "#f2a65a"));
  }

  window.SCENES = { ljstation: ljstation, ljopera: ljopera, ljnapa: ljnapa, ljcrane: ljcrane, ljcorner: ljcorner };
})();
