/* juvenile scenes (Regions tab: New Orleans; the Magnolia projects, Uptown / Central City, 3rd Ward - where Juvenile grew up). CSS classes and ids prefixed jv- (the page's own anim-train is kept).
   1 Louisiana Av / Magnolia St on RTA bus route 27 (Louisiana): the bus pulls in past live oaks and the new Magnolia townhouses.
   2 A.L. Davis Park (Washington Av at LaSalle St), Uptown Super Sunday: a Black Masking Indian suit seen from behind, plumes swaying under the oaks, tambourines.
   3 An Uptown snoball stand in "400 Degreez" heat: the sun beating down, the thermometer pinned, syrup dripping off a cup.
   4 The Fly, the Uptown riverfront: a cargo ship sliding down the Mississippi past the levee grass at sunset.
   5 Magnolia St and Louisiana Av: green signs, JUVIE tagged on the brick, the Hibernia Bank tower's lit cupola on the skyline behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jvflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.jv-flk{animation:jvflick 2.2s infinite}.jv-flk2{animation-delay:.8s}' +
    '@keyframes jvmoss{0%,100%{transform:skewX(0)}50%{transform:skewX(6deg)}}.jv-moss{transform-box:fill-box;transform-origin:50% 0%;animation:jvmoss 3.4s ease-in-out infinite}.jv-moss2{animation-delay:-1.7s}' +
    '@keyframes jvsway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.jv-sway{transform-box:fill-box;transform-origin:50% 100%;animation:jvsway 1.6s ease-in-out infinite}.jv-sway2{animation-delay:-.8s}' +
    '@keyframes jvbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.jv-bnc{animation:jvbounce .8s ease-in-out infinite}.jv-bnc2{animation-delay:-.4s}' +
    '@keyframes jvdrip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(26px);opacity:0}}.jv-drip{animation:jvdrip 1.6s ease-in infinite}.jv-drip2{animation-delay:-.8s}' +
    '@keyframes jvheat{0%,100%{transform:translateY(0) scaleX(1);opacity:.5}50%{transform:translateY(-6px) scaleX(1.04);opacity:.9}}.jv-heat{transform-box:fill-box;transform-origin:50% 50%;animation:jvheat 1.8s ease-in-out infinite}.jv-heat2{animation-delay:-.9s}' +
    '@keyframes jvsun{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}.jv-sun{transform-box:fill-box;transform-origin:50% 50%;animation:jvsun 2.4s ease-in-out infinite}' +
    '@keyframes jvship{from{transform:translateX(-260px)}to{transform:translateX(440px)}}.jv-ship{animation:jvship 22s linear infinite;animation-delay:-10s}' +
    '@keyframes jvwave{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.jv-wave{animation:jvwave 3s ease-in-out infinite}.jv-wave2{animation-delay:-1.5s}' +
    '@keyframes jvbird{from{transform:translate(-40px,0)}to{transform:translate(460px,-30px)}}.jv-bird{animation:jvbird 14s linear infinite;animation-delay:-4s}' +
    '@keyframes jvcup{0%,100%{fill:#ffd36a}33%{fill:#ff6aa8}66%{fill:#7ad7ff}}.jv-cup{animation:jvcup 4s linear infinite}' +
    '@keyframes jvspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jv-sp{animation:jvspray 1.4s ease-out infinite}.jv-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GOLD = "#ffb300", RED = "#e53935", PURP = "#9c6bff";
  const oak = (cx, cy, r, c) => '<g><ellipse cx="' + cx + '" cy="' + cy + '" rx="' + r + '" ry="' + (r * 0.45) + '" fill="' + c + '"/><ellipse cx="' + (cx - r * 0.5) + '" cy="' + (cy + r * 0.1) + '" rx="' + (r * 0.55) + '" ry="' + (r * 0.32) + '" fill="' + c + '"/><ellipse cx="' + (cx + r * 0.5) + '" cy="' + (cy + r * 0.12) + '" rx="' + (r * 0.55) + '" ry="' + (r * 0.3) + '" fill="' + c + '"/>' +
    [-0.55, -0.15, 0.25, 0.65].map((k, i) => '<path class="jv-moss' + (i % 2 ? " jv-moss2" : "") + '" d="M' + (cx + k * r) + ' ' + (cy + r * 0.25) + 'q-3 12 1 22q-2 7 0 12" stroke="#9aa58c" stroke-width="3" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const trunk = (x, y, h) => '<path d="M' + (x - 5) + ' ' + (y + h) + 'q4 -' + (h / 2) + ' 2 -' + h + 'h6q-2 ' + (h / 2) + ' 4 ' + h + 'z" fill="#3a2a1e"/>';
  /* townhouse row (the rebuilt Magnolia: two-story, porches, bright siding) */
  const town = (x, y, c) => '<g><rect x="' + x + '" y="' + y + '" width="54" height="58" fill="' + c + '"/><path d="M' + (x - 4) + ' ' + y + 'l31 -16l31 16z" fill="#4a3a36"/>' +
    '<rect x="' + (x + 8) + '" y="' + (y + 8) + '" width="12" height="14" fill="#ffe9a8" class="jv-flk"/><rect x="' + (x + 34) + '" y="' + (y + 8) + '" width="12" height="14" fill="#ffe9a8"/>' +
    '<rect x="' + (x + 4) + '" y="' + (y + 32) + '" width="46" height="4" fill="#f4efe6"/><rect x="' + (x + 22) + '" y="' + (y + 38) + '" width="12" height="20" fill="#3a2a22"/>' +
    [6, 18, 36, 48].map(k => '<rect x="' + (x + k) + '" y="' + (y + 36) + '" width="2" height="22" fill="#f4efe6"/>').join("") + '</g>';

  /* 1. Louisiana Av / Magnolia St, RTA bus 27 */
  function jvstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 36) + '" y="128" width="28" height="22" rx="2" fill="#1d2a36"/>').join("");
    const bus = '<g class="anim-train"><rect x="60" y="118" width="268" height="72" rx="10" fill="#f2f4f6" stroke="#2a3440" stroke-width="2"/>' + win +
      '<rect x="296" y="124" width="30" height="40" rx="4" fill="#1d2a36"/><rect x="60" y="156" width="268" height="8" fill="#1e5aa8"/><rect x="60" y="164" width="268" height="5" fill="' + RED + '"/>' +
      '<rect x="250" y="122" width="44" height="2" fill="#fff"/><rect x="286" y="110" width="40" height="10" rx="2" fill="#111"/><text x="306" y="118" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffd36a">27 LOUISIANA</text>' +
      '<rect x="238" y="168" width="20" height="22" fill="#1d2a36"/><circle cx="104" cy="192" r="11" fill="#1c1c1c"/><circle cx="104" cy="192" r="4" fill="#888"/><circle cx="280" cy="192" r="11" fill="#1c1c1c"/><circle cx="280" cy="192" r="4" fill="#888"/>' +
      '<rect x="322" y="170" width="6" height="8" rx="1" fill="#ffe08a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jvs1)"/>' +
      town(10, 74, "#5f8fb8") + town(70, 74, "#d98a4a") + town(130, 74, "#7aa36a") + town(190, 74, "#c76a7a") + town(250, 74, "#e0c45a") +
      trunk(352, 96, 50) + oak(352, 82, 50, "#24402a") +
      '<rect x="0" y="190" width="400" height="10" fill="#bdb6aa"/><rect x="0" y="200" width="400" height="60" fill="#3a3a3e"/><path d="M0 230h400" stroke="#d9c45a" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="358" y="100" width="5" height="100" fill="#2f2f2f"/><rect x="340" y="104" width="44" height="44" rx="3" fill="#111" stroke="#fff" stroke-width="1"/>' +
      '<circle cx="362" cy="120" r="11" fill="#c62828"/><text x="362" y="124.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">27</text><text x="362" y="142" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">RTA BUS</text>' +
      '<rect x="8" y="16" width="220" height="40" rx="3" fill="#111" stroke="#e8e8e8" stroke-width="1.5"/>' +
      '<text x="20" y="34" ' + font + ' font-size="14" fill="#fff">LOUISIANA AV</text><text x="20" y="50" ' + font + ' font-size="11" fill="#cfd8dc">at Magnolia St  •  Uptown</text>' +
      '<circle cx="206" cy="36" r="12" fill="#c62828"/><text x="206" y="40.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">27</text>',
      sky("jvs1", "#1b1d3a", "#d27a58"));
  }

  /* 2. A.L. Davis Park, Super Sunday */
  function jvsunday() {
    const plume = (x, y, c, cls) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'q-6 -30 0 -60q6 30 0 60z" fill="' + c + '"/><path d="M' + x + ' ' + (y - 8) + 'v-44" stroke="#fff" stroke-width="1" opacity=".6"/></g>';
    const plumes = Array.from({ length: 13 }, (_, i) => plume(140 + i * 10, 112 - Math.abs(6 - i) * 4, ["#ffd23f", "#ff7ab6", "#7ad7ff", "#fff"][i % 4], "jv-sway" + (i % 2 ? " jv-sway2" : ""))).join("");
    const beads = Array.from({ length: 40 }, (_, i) => '<circle cx="' + (166 + (i % 8) * 10) + '" cy="' + (126 + Math.floor(i / 8) * 12) + '" r="3" fill="' + ["#ffd23f", "#e53935", "#2e7dd7", "#fff", "#4caf50"][i % 5] + '"/>').join("");
    const crowd = Array.from({ length: 11 }, (_, i) => '<g class="jv-bnc' + (i % 2 ? " jv-bnc2" : "") + '"><circle cx="' + (12 + i * 36) + '" cy="200" r="9" fill="#2a1f22"/><rect x="' + (2 + i * 36) + '" y="208" width="20" height="40" rx="6" fill="#2a1f22"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jvs2)"/>' +
      trunk(40, 90, 110) + oak(40, 70, 70, "#2f5233") + trunk(360, 90, 110) + oak(362, 66, 66, "#2f5233") +
      '<rect x="0" y="196" width="400" height="64" fill="#5b8a3c"/>' +
      '<rect x="292" y="150" width="96" height="30" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="340" y="164" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">A.L. DAVIS PARK</text><text x="340" y="175" text-anchor="middle" ' + font + ' font-size="7" fill="#d6f0dc">SUPER SUNDAY</text><rect x="336" y="180" width="4" height="20" fill="#333"/>' +
      plumes +
      '<path d="M150 116q50 -14 100 0l10 96h-120z" fill="#ffd23f" stroke="#b8860b" stroke-width="2"/>' + beads +
      '<path d="M140 212l-14 40h40l6 -40zM228 212l6 40h40l-14 -40z" fill="#ffd23f" stroke="#b8860b" stroke-width="2"/>' +
      '<path d="M150 212h110" stroke="#fff" stroke-width="6" stroke-dasharray="4 4"/>' +
      '<g class="jv-sway"><path d="M118 140l-26 -24" stroke="#ffd23f" stroke-width="10" stroke-linecap="round"/><circle cx="90" cy="112" r="10" fill="none" stroke="#c9a24a" stroke-width="3"/></g>' +
      '<g class="jv-sway jv-sway2"><path d="M282 140l26 -24" stroke="#ffd23f" stroke-width="10" stroke-linecap="round"/></g>' +
      crowd,
      sky("jvs2", "#5aa9e6", "#f7e0a6"));
  }

  /* 3. snoball stand, 400 degrees */
  function jvsnoball() {
    const rays = Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<path d="M' + (330 + Math.cos(a) * 34) + ' ' + (46 + Math.sin(a) * 34) + 'L' + (330 + Math.cos(a) * 48) + ' ' + (46 + Math.sin(a) * 48) + '" stroke="#ffcc33" stroke-width="4" stroke-linecap="round"/>'; }).join("");
    const flavors = ["SPEARMINT", "NECTAR", "WEDDING CAKE", "STRAWBERRY", "TIGER'S BLOOD"].map((f, i) => '<text x="152" y="' + (110 + i * 11) + '" ' + font + ' font-size="7.5" fill="#2a1a10">' + f + '</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jvs3)"/>' +
      '<g class="jv-sun">' + rays + '<circle cx="330" cy="46" r="28" fill="#ffe14a"/></g>' +
      '<path class="jv-heat" d="M20 70q20 -8 40 0t40 0" stroke="#fff" stroke-width="2" fill="none" opacity=".6"/><path class="jv-heat jv-heat2" d="M60 52q20 -8 40 0t40 0" stroke="#fff" stroke-width="2" fill="none" opacity=".6"/>' +
      oak(40, 120, 54, "#3c6b34") + trunk(40, 128, 70) +
      '<rect x="0" y="196" width="400" height="64" fill="#c9b79a"/>' +
      '<rect x="120" y="90" width="160" height="110" fill="#f4f0e6" stroke="#8a6a4a" stroke-width="2"/><path d="M110 92l90 -30l90 30z" fill="' + RED + '"/>' +
      '<rect x="128" y="68" width="144" height="18" rx="2" fill="#2e7dd7"/><text x="200" y="81" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">SNO-BALLS</text>' +
      '<rect x="144" y="100" width="76" height="62" fill="#fffbe6" stroke="#8a6a4a" stroke-width="1"/>' + flavors +
      '<rect x="226" y="100" width="46" height="62" fill="#2a3a46"/><rect x="120" y="170" width="160" height="6" fill="#8a6a4a"/>' +
      '<g transform="translate(236 108)"><rect x="0" y="0" width="14" height="44" rx="7" fill="#fff" stroke="#555" stroke-width="1"/><rect x="5" y="4" width="4" height="34" fill="#e53935"/><circle cx="7" cy="42" r="6" fill="#e53935"/>' +
      '<text x="18" y="14" ' + font + ' font-size="9" fill="#ffd36a">400&#176;</text></g>' +
      '<g transform="translate(314 104)"><path d="M0 34l6 30h20l6 -30z" fill="#fff" stroke="#aaa" stroke-width="1"/><path class="jv-cup" d="M-2 34q18 -30 36 0z"/>' +
      '<circle class="jv-drip" cx="4" cy="40" r="2.5" fill="#ff6aa8"/><circle class="jv-drip jv-drip2" cx="26" cy="42" r="2.5" fill="#7ad7ff"/></g>' +
      '<rect x="296" y="168" width="64" height="6" rx="2" fill="#8a6a4a"/><rect x="302" y="174" width="4" height="24" fill="#6a4a2a"/><rect x="350" y="174" width="4" height="24" fill="#6a4a2a"/>',
      sky("jvs3", "#ff8a3d", "#ffe08a"));
  }

  /* 4. The Fly, Mississippi riverfront */
  function jvfly() {
    const cont = Array.from({ length: 9 }, (_, i) => '<rect x="' + (20 + i * 18) + '" y="' + (98 - (i % 3) * 8) + '" width="16" height="' + (12 + (i % 3) * 8) + '" fill="' + ["#c0392b", "#2e86c1", "#f1c40f", "#27ae60"][i % 4] + '"/>').join("");
    const ship = '<g class="jv-ship"><path d="M0 110h220l-14 26h-196z" fill="#2b2f36"/><rect x="0" y="108" width="220" height="4" fill="#c0392b"/>' + cont +
      '<rect x="186" y="74" width="26" height="36" fill="#f2f2f2"/><rect x="190" y="80" width="18" height="5" fill="#1d2a36"/><rect x="198" y="62" width="6" height="14" fill="#c0392b"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jvs4)"/>' +
      '<circle cx="300" cy="96" r="26" fill="#ffcf6a" opacity=".9"/>' +
      '<path class="jv-bird" d="M30 50q6 -6 12 0q6 -6 12 0" stroke="#3a2a36" stroke-width="2" fill="none"/>' +
      '<rect x="0" y="118" width="400" height="10" fill="#4a5a3a"/>' +
      '<rect x="0" y="126" width="400" height="56" fill="#6b5a46"/>' +
      '<g class="jv-wave"><path d="M0 140q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#9a8064" stroke-width="2" fill="none"/></g>' +
      '<g class="jv-wave jv-wave2"><path d="M0 160q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#9a8064" stroke-width="2" fill="none"/></g>' +
      ship +
      '<path d="M0 182q100 -20 200 -8t200 -4v90h-400z" fill="#6aa04a"/><path d="M0 206q120 -14 240 -4t160 0v58h-400z" fill="#55893a"/>' +
      Array.from({ length: 20 }, (_, i) => '<path class="jv-sway' + (i % 2 ? " jv-sway2" : "") + '" d="M' + (8 + i * 20) + ' 226q-2 -10 2 -18" stroke="#3e6b2a" stroke-width="2" fill="none"/>').join("") +
      '<rect x="40" y="214" width="70" height="6" rx="2" fill="#7a5a3a"/><rect x="46" y="220" width="4" height="12" fill="#5a3a24"/><rect x="100" y="220" width="4" height="12" fill="#5a3a24"/>' +
      '<rect x="270" y="166" width="120" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="330" y="181" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">THE FLY  •  UPTOWN</text>',
      sky("jvs4", "#3a2a5a", "#f29a6a"));
  }

  /* 5. Magnolia St and Louisiana Av */
  function jvcorner() {
    const hib = '<g><rect x="168" y="58" width="64" height="74" fill="#cfc6b4"/><rect x="178" y="34" width="44" height="26" fill="#d8d0be"/>' +
      '<rect x="188" y="16" width="24" height="20" fill="#e2dccc"/><path d="M186 16q14 -18 28 0z" fill="#e2dccc"/>' +
      '<g class="jv-cup"><circle cx="200" cy="10" r="5"/></g>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (190 + (i % 3) * 7) + '" y="' + (20 + Math.floor(i / 3) * 8) + '" width="4" height="6" fill="#ffd36a" opacity=".85"/>').join("") +
      Array.from({ length: 18 }, (_, i) => '<rect class="jv-flk' + (i % 3 ? "" : " jv-flk2") + '" x="' + (174 + (i % 6) * 9) + '" y="' + (66 + Math.floor(i / 6) * 20) + '" width="5" height="9" fill="#ffe9a8" opacity=".8"/>').join("") + '</g>' +
      '<g fill="#3a4258"><rect x="110" y="70" width="44" height="62"/><rect x="246" y="64" width="40" height="68"/><rect x="292" y="86" width="30" height="46"/><rect x="80" y="92" width="26" height="40"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jvs5)"/>' + hib +
      oak(30, 104, 60, "#24402a") + oak(372, 108, 52, "#24402a") +
      '<rect x="0" y="126" width="400" height="98" fill="#8a4a36"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#73392a" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#73392a" stroke-width="1"/>').join("")).join("") +
      tag("JUVIE", 18, 196, 60, GOLD, -6) + tag("UTP", 40, 220, 22, RED, -4) + tag("HA!", 200, 176, 28, PURP, -8) + tag("400", 214, 212, 22, "#ff7a2a", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="370" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 138, "Magnolia St") + sign(250, 124, 138, "Louisiana Av") +
      '<rect x="8" y="116" width="4" height="108" fill="#222"/><circle class="jv-flk" cx="10" cy="114" r="7" fill="#ffe9a8"/>' +
      '<g class="jv-sp"><circle cx="172" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="jv-sp jv-sp2"><circle cx="178" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("jvs5", "#1e1a40", "#e0885a"));
  }

  window.SCENES = { jvstation: jvstation, jvsunday: jvsunday, jvsnoball: jvsnoball, jvfly: jvfly, jvcorner: jvcorner };
})();
