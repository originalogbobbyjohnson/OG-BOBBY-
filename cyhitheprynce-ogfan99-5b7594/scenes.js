/* cyhitheprynce scenes (Regions tab: Atlanta; Stone Mountain / Redan, east DeKalb County - "all the way to Redan Road"). CSS classes prefixed cy- (the page's own anim-train is kept).
   1 Kensington station on MARTA's Blue line (the stop for the Memorial Dr / Redan side of DeKalb): open-air platform, concrete canopy, a silver MARTA train sliding in.
   2 Redan High School (his school - choir, all-county track and football): the low windowless 1970s brick building, the blue track out front, a runner clearing the hurdles.
   3 Stone Mountain Village's 1857 granite train depot on Main Street (now city hall): the grey stone hall with deep bracketed eaves, a freight train rolling past.
   4 Sunday morning at a red-brick church in east DeKalb ("No Dope On Sundays", the choir boy): white steeple, the bell swinging, stained glass, choir robes in the door.
   5 Redan Rd and S Hairston Rd: green signs, CYHI tagged on the wall, purple-and-gold, downtown Atlanta's skyline glowing far off down the road.
   400 x 260 SVGs. No logos, no faces, no digits drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cyflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.cy-flk{animation:cyflick 2.2s infinite}.cy-flk2{animation-delay:.7s}' +
    '@keyframes cyrun{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.cy-run{animation:cyrun 5s linear infinite}' +
    '@keyframes cyhop{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}.cy-hop{animation:cyhop .62s ease-in-out infinite}' +
    '@keyframes cyfreight{from{transform:translateX(420px)}to{transform:translateX(-760px)}}.cy-fr{animation:cyfreight 11s linear infinite}' +
    '@keyframes cybell{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.cy-bell{transform-box:fill-box;transform-origin:50% 0;animation:cybell 1.6s ease-in-out infinite}' +
    '@keyframes cysway{0%,100%{transform:translateX(0)}50%{transform:translateX(5px)}}.cy-sway{animation:cysway 1.8s ease-in-out infinite}.cy-sway2{animation-delay:-.9s}' +
    '@keyframes cynote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-46px);opacity:0}}.cy-note{animation:cynote 3s ease-out infinite}.cy-note2{animation-delay:-1.5s}' +
    '@keyframes cycar{from{transform:translateX(-150px)}to{transform:translateX(540px)}}.cy-car{animation:cycar 7.5s linear infinite}' +
    '@keyframes cyspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cy-sp{animation:cyspray 1.4s ease-out infinite}.cy-sp2{animation-delay:.45s}' +
    '@keyframes cybird{0%{transform:translate(0,0)}100%{transform:translate(430px,-24px)}}.cy-bird{animation:cybird 13s linear infinite}.cy-bird2{animation-delay:-6.5s}' +
    '@keyframes cyglow{0%,100%{opacity:.35}50%{opacity:.8}}.cy-glow{animation:cyglow 3s ease-in-out infinite}.cy-glow2{animation-delay:-1.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const pine = (x, y, h, c) => '<path d="M' + x + ' ' + (y - h) + 'l' + (h * .26) + ' ' + (h * .45) + 'h-' + (h * .1) + 'l' + (h * .2) + ' ' + (h * .4) + 'h-' + (h * .72) + 'l' + (h * .2) + ' -' + (h * .4) + 'h-' + (h * .1) + 'z" fill="' + (c || "#1f4a2e") + '"/><rect x="' + (x - 2) + '" y="' + (y - h * .15) + '" width="4" height="' + (h * .15) + '" fill="#4a3220"/>';
  const BLUE = "#0072bc", GOLD = "#f2c94c", PURP = "#8e5bd8", SKY = "#4fa3ff";

  /* 1. Kensington station: open-air platform, concrete canopy, silver MARTA train with the blue band */
  function cystation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="112" width="34" height="20" rx="3" fill="#1d2731"/>').join("");
    const train = '<g class="anim-train"><path d="M20 104h312q24 0 30 28v26H20z" fill="#dfe3e8" stroke="#7d868f" stroke-width="2"/>' + wins +
      '<rect x="20" y="138" width="342" height="6" fill="' + BLUE + '"/><rect x="20" y="144" width="342" height="3" fill="#f39a1e"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (96 + i * 92) + '" y="110" width="4" height="46" fill="#aeb6be"/>').join("") +
      '<path d="M332 108q22 4 28 24h-28z" fill="#1d2731"/><circle cx="354" cy="150" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cys1)"/>' +
      Array.from({ length: 13 }, (_, i) => pine(6 + i * 32, 104, 26 + (i * 7) % 16, "#24402e")).join("") +
      '<rect x="0" y="34" width="400" height="14" fill="#cfcabd"/><rect x="0" y="48" width="400" height="4" fill="#9a958a"/>' +
      [40, 150, 260, 370].map(x => '<rect x="' + (x - 4) + '" y="52" width="8" height="52" fill="#a8a397"/>').join("") +
      '<g class="cy-flk"><rect x="80" y="52" width="44" height="3" fill="#fff3c4"/></g><g class="cy-flk cy-flk2"><rect x="280" y="52" width="44" height="3" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="158" width="400" height="6" fill="#f2c200"/><rect x="0" y="164" width="400" height="26" fill="#b9b4a8"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#3e4046"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 46) + '" y="240" width="30" height="3" fill="#f2f2f2" opacity=".6"/>').join("") +
      '<rect x="78" y="196" width="244" height="34" rx="3" fill="#111"/><text x="94" y="219" ' + font + ' font-size="18" fill="#fff">Kensington</text>' +
      '<rect x="248" y="203" width="58" height="20" rx="10" fill="' + BLUE + '"/><text x="277" y="217.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">BLUE</text>' +
      '<g class="cy-bird"><path d="M0 22q5 -5 10 0q5 -5 10 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g><g class="cy-bird cy-bird2"><path d="M-40 28q4 -4 8 0q4 -4 8 0" stroke="#2a2a2a" stroke-width="1.6" fill="none"/></g>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff3e0" opacity=".9">KENSINGTON · MARTA BLUE LINE · EAST DEKALB</text>',
      sky("cys1", "#3a2a6a", "#f0a868"));
  }

  /* 2. Redan High School: low windowless brick building, blue track, a runner clearing the hurdles */
  function cyredan() {
    const bricks = Array.from({ length: 7 }, (_, i) => '<path d="M30 ' + (78 + i * 8) + 'h340" stroke="#7a3a26" stroke-width="1"/>').join("");
    const hurdles = [70, 170, 270, 370].map(x => '<g><rect x="' + (x - 14) + '" y="196" width="28" height="4" fill="#f2f2f2"/><rect x="' + (x - 13) + '" y="196" width="3" height="16" fill="#ddd"/><rect x="' + (x + 10) + '" y="196" width="3" height="16" fill="#ddd"/></g>').join("");
    const runner = '<g class="cy-run"><g class="cy-hop"><circle cx="0" cy="166" r="6" fill="#4a2e1e"/><path d="M0 172l-2 16" stroke="' + GOLD + '" stroke-width="7" stroke-linecap="round"/>' +
      '<path d="M-2 186l12 6l6 -4M-2 186l-12 10" stroke="#4a2e1e" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M0 176l10 -6M0 176l-10 4" stroke="#4a2e1e" stroke-width="3.5" stroke-linecap="round"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cys2)"/>' +
      Array.from({ length: 13 }, (_, i) => pine(4 + i * 32, 72, 22 + (i * 5) % 12, "#2a4a34")).join("") +
      '<rect x="30" y="70" width="340" height="60" fill="#9a4a30"/>' + bricks +
      '<rect x="24" y="64" width="352" height="8" fill="#5a5a5a"/>' +
      '<rect x="164" y="96" width="72" height="34" fill="#2a3a4a"/><rect x="164" y="96" width="72" height="4" fill="#ddd"/>' +
      '<path d="M200 96v34" stroke="#ddd" stroke-width="2"/>' +
      '<rect x="150" y="76" width="100" height="16" fill="#1a2a5a"/><text x="200" y="88" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">REDAN HIGH</text>' +
      '<rect x="0" y="130" width="400" height="26" fill="#3f7a3a"/>' +
      '<rect x="0" y="156" width="400" height="66" fill="#2f58b8"/>' + [168, 182, 196, 210].map(y => '<path d="M0 ' + y + 'h400" stroke="#e8ecff" stroke-width="1.5" opacity=".8"/>').join("") +
      hurdles + runner +
      '<rect x="0" y="222" width="400" height="38" fill="#3f7a3a"/>' +
      [20, 380].map(x => '<rect x="' + (x - 2) + '" y="20" width="4" height="110" fill="#555"/><rect x="' + (x - 16) + '" y="14" width="32" height="10" fill="#777"/>' +
        '<g class="cy-flk"><rect x="' + (x - 14) + '" y="16" width="28" height="6" fill="#fff6c2"/></g>').join("") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f3f0e0" opacity=".9">REDAN RAIDERS · TRACK DAY · STONE MOUNTAIN</text>',
      sky("cys2", "#4f8fd8", "#cfe6f8"));
  }

  /* 3. Stone Mountain Village depot: grey granite hall with deep bracketed eaves, a freight train rolling past */
  function cydepot() {
    const blocks = Array.from({ length: 6 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<rect x="' + (110 + j * 20 + (i % 2) * 10) + '" y="' + (112 + i * 12) + '" width="19" height="11" fill="' + ((i + j) % 3 ? "#a9a9a4" : "#9a9a95") + '"/>').join("")).join("");
    const freight = '<g class="cy-fr">' + Array.from({ length: 7 }, (_, i) => '<g><rect x="' + (i * 108) + '" y="186" width="100" height="34" fill="' + ["#2a3a5a", "#7a2a22", "#3a3a3a", "#5a4a2a", "#2a3a5a", "#7a2a22", "#3a3a3a"][i] + '"/>' +
      '<rect x="' + (i * 108 + 4) + '" y="190" width="92" height="3" fill="#000" opacity=".25"/><circle cx="' + (i * 108 + 18) + '" cy="222" r="5" fill="#111"/><circle cx="' + (i * 108 + 82) + '" cy="222" r="5" fill="#111"/></g>').join("") +
      '<rect x="-60" y="178" width="56" height="42" fill="#d8d8d0"/><rect x="-52" y="184" width="16" height="12" fill="#1d2731"/><rect x="-60" y="204" width="56" height="4" fill="' + BLUE + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cys3)"/>' +
      '<rect x="0" y="120" width="70" height="66" fill="#8a5a3a"/><rect x="8" y="132" width="18" height="22" fill="#f5e0a8"/><rect x="40" y="132" width="18" height="22" fill="#f5e0a8"/><rect x="0" y="114" width="72" height="8" fill="#5a3a24"/>' +
      '<rect x="330" y="116" width="70" height="70" fill="#6a4a5a"/><rect x="342" y="128" width="18" height="22" fill="#f5e0a8"/><rect x="372" y="128" width="18" height="22" fill="#f5e0a8"/><rect x="328" y="110" width="72" height="8" fill="#3a2a34"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (2 + i * 14) + '" y="160" width="10" height="26" fill="' + ["#c8463a", "#3a7ac8", "#e8c24a", "#5aa05a", "#c8463a"][i] + '" opacity=".0"/>').join("") +
      blocks +
      '<rect x="110" y="104" width="180" height="8" fill="#8a8a85"/>' +
      '<path d="M88 106l20 -30h184l20 30z" fill="#3a3e46"/><path d="M88 106h224" stroke="#22262c" stroke-width="3"/>' +
      [118, 156, 200, 244, 282].map(x => '<path d="M' + x + ' 106l6 10" stroke="#5a4a3a" stroke-width="3"/>').join("") +
      '<rect x="186" y="140" width="28" height="42" fill="#4a3324"/><rect x="132" y="128" width="22" height="26" fill="#2a2e34"/><rect x="246" y="128" width="22" height="26" fill="#2a2e34"/>' +
      '<rect x="0" y="182" width="400" height="4" fill="#7a7a72"/>' +
      '<rect x="0" y="226" width="400" height="4" fill="#5a4a3a"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="224" width="10" height="8" fill="#4a3a2a"/>').join("") +
      '<rect x="0" y="222" width="400" height="2" fill="#aaa"/><rect x="0" y="228" width="400" height="2" fill="#aaa"/>' +
      freight +
      '<rect x="0" y="232" width="400" height="28" fill="#6a6560"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f3f0e0" opacity=".9">THE OLD GRANITE DEPOT · MAIN ST · STONE MOUNTAIN VILLAGE</text>',
      sky("cys3", "#f7c27a", "#f8e7c8"));
  }

  /* 4. Sunday morning: red-brick church, white steeple with the bell swinging, stained glass, choir robes in the door */
  function cychurch() {
    const bricks = Array.from({ length: 14 }, (_, i) => '<path d="M110 ' + (110 + i * 8) + 'h180" stroke="#7a3022" stroke-width="1"/>').join("");
    const glass = x => '<path d="M' + x + ' 166v-30q12 -18 24 0v30z" fill="#2a1a3a"/><path d="M' + (x + 2) + ' 164v-26q10 -14 20 0v26z" fill="url(#cyg)"/><path d="M' + (x + 12) + ' 124v40M' + (x + 2) + ' 146h20" stroke="#2a1a3a" stroke-width="1.5"/>';
    const robe = (x, c, cls) => '<g class="' + cls + '"><path d="M' + (x - 8) + ' 228l3 -28q5 -6 10 0l3 28z" fill="' + c + '"/><path d="M' + (x - 4) + ' 202h8l-4 6z" fill="' + GOLD + '"/><circle cx="' + x + '" cy="194" r="5" fill="#5a3a26"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cys4)"/>' +
      Array.from({ length: 13 }, (_, i) => pine(4 + i * 32, 164, 34 + (i * 11) % 18, "#2a5a38")).join("") +
      '<rect x="110" y="104" width="180" height="124" fill="#a8432e"/>' + bricks +
      '<path d="M100 108l100 -46l100 46z" fill="#2e2e36"/>' +
      '<rect x="176" y="22" width="48" height="58" fill="#f4f1ea" stroke="#c9c4b8" stroke-width="1.5"/>' +
      '<path d="M200 22v-6" stroke="#f4f1ea" stroke-width="3"/>' +
      '<path d="M170 22l30 -12l30 12z" fill="#e8e4da"/>' +
      '<rect x="184" y="34" width="32" height="30" fill="#2a2a32"/>' +
      '<g class="cy-bell"><path d="M192 38h16l4 20h-24z" fill="' + GOLD + '"/><circle cx="200" cy="60" r="3" fill="#c9a030"/></g>' +
      '<path d="M200 -2v10M195 3h10" stroke="' + GOLD + '" stroke-width="2.5"/>' +
      glass(124) + glass(252) +
      '<rect x="176" y="168" width="48" height="60" fill="#2a1a12"/><path d="M176 168q24 -26 48 0z" fill="#2a1a12"/>' +
      '<rect x="180" y="172" width="40" height="56" fill="#f5d98a" opacity=".55"/>' +
      robe(190, PURP, "cy-sway") + robe(210, PURP, "cy-sway cy-sway2") +
      '<g class="cy-note"><text x="232" y="170" font-size="16" fill="' + GOLD + '">&#9834;</text></g><g class="cy-note cy-note2"><text x="150" y="176" font-size="14" fill="#fff">&#9835;</text></g>' +
      '<rect x="160" y="228" width="80" height="6" fill="#c9c4b8"/><rect x="150" y="234" width="100" height="6" fill="#b9b4a8"/>' +
      '<rect x="0" y="228" width="400" height="32" fill="#4e7a3a"/><rect x="150" y="234" width="100" height="6" fill="#b9b4a8"/><rect x="140" y="240" width="120" height="20" fill="#aaa59a"/>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2a2a" opacity=".9">SUNDAY MORNING · EAST DEKALB</text>',
      sky("cys4", "#7fb8f0", "#f3ead8") + '<linearGradient id="cyg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + PURP + '"/><stop offset=".5" stop-color="' + GOLD + '"/><stop offset="1" stop-color="' + SKY + '"/></linearGradient>');
  }

  /* 5. Redan Rd and S Hairston Rd: green signs, CYHI tagged, downtown's skyline glowing far off */
  function cycorner() {
    const towers = [[20, 96, 18], [42, 80, 14], [60, 104, 20], [84, 70, 12], [100, 92, 22], [126, 84, 16], [146, 100, 18]].map(t =>
      '<rect x="' + (t[0] + 120) + '" y="' + t[1] + '" width="' + t[2] + '" height="' + (132 - t[1]) + '" fill="#2e2a4a"/>' +
      Array.from({ length: Math.floor((132 - t[1]) / 10) }, (_, k) => '<rect class="cy-glow' + (k % 2 ? " cy-glow2" : "") + '" x="' + (t[0] + 123) + '" y="' + (t[1] + 4 + k * 10) + '" width="' + (t[2] - 6) + '" height="2" fill="#ffd98a"/>').join("")).join("");
    const cutlass = '<g class="cy-car"><path d="M0 246v-10l12 -2l14 -10h40l14 10l18 2v10z" fill="' + PURP + '"/><rect x="28" y="227" width="15" height="7" fill="#bfe3ff"/><rect x="46" y="227" width="15" height="7" fill="#bfe3ff"/>' +
      '<rect x="0" y="238" width="98" height="2" fill="' + GOLD + '"/>' + [20, 78].map(cx => '<circle cx="' + cx + '" cy="247" r="7" fill="#111"/><circle cx="' + cx + '" cy="247" r="4.5" fill="' + GOLD + '"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cys5)"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + ((i * 67) % 400) + '" cy="' + ((i * 19) % 36 + 6) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      '<ellipse cx="200" cy="132" rx="110" ry="14" fill="#ff9a5a" opacity=".18"/>' + towers +
      Array.from({ length: 14 }, (_, i) => pine(4 + i * 30, 136, 22 + (i * 9) % 14, "#1c2426")).join("") +
      '<rect x="0" y="132" width="400" height="92" fill="#3a2e4a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#2a2036" stroke-width="1"/>').join("") +
      Array.from({ length: 11 }, (_, i) => Array.from({ length: 10 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (132 + i * 8) + 'v8" stroke="#2a2036" stroke-width="1"/>').join("")).join("") +
      tag("CYHI", 30, 190, 50, GOLD, -6) + tag("DA PRYNCE", 52, 216, 26, PURP, -5) + tag("IVY LEAGUE", 26, 152, 14, SKY, -4) + tag("CYHI!", 196, 154, 14, "#f4f1ea", -3) +
      '<path d="M178 180l6 -10l6 6l6 -10l6 10l6 -6l6 10z" fill="' + GOLD + '" stroke="#000" stroke-width="1.5"/>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55534f"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(286, 98, 96, "Redan Rd") + sign(270, 124, 128, "S Hairston Rd") +
      '<rect x="390" y="110" width="4" height="114" fill="#222"/><circle class="cy-flk" cx="392" cy="108" r="7" fill="#ffe9a8"/>' +
      cutlass +
      '<g class="cy-sp"><circle cx="150" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="cy-sp cy-sp2"><circle cx="156" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">REDAN RD · S HAIRSTON RD · STONE MOUNTAIN</text>',
      sky("cys5", "#14122e", "#8a4a5a"));
  }

  window.SCENES = { cystation: cystation, cyredan: cyredan, cydepot: cydepot, cychurch: cychurch, cycorner: cycorner };
})();
