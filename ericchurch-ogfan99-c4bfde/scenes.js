/* ericchurch scenes (Regions tab: The Carolinas; Granite Falls, Caldwell County NC). CSS classes prefixed ec- (the page's own anim-train is kept).
   1 US 321 (Hickory Blvd) into Granite Falls: a car rolling past the green exit sign and the US 321 shield, the Blue Ridge foothills behind.
   2 The falls the town is named for: Gunpowder Creek splashing white over big pink-gray granite boulders, spray rising, trees on both banks.
   3 Lake Rhodhiss on the Catawba at sunset: a wooden dock, a fishing line bobbing, a jon boat drifting.
   4 Charlotte's football stadium, Concert for Carolina night: the bowl lit up, the stage with a lone mic stand and guitar, phone lights twinkling.
   5 N Main St and Falls Ave in Granite Falls: green signs, CHURCH tagged on the old brick storefront wall, the foothills behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ecflow{0%{stroke-dashoffset:0}100%{stroke-dashoffset:-40}}.ec-flow{animation:ecflow 1.1s linear infinite}.ec-flow2{animation-duration:.8s}' +
    '@keyframes ecmist{0%,100%{opacity:.25;transform:translateY(0)}50%{opacity:.6;transform:translateY(-6px)}}.ec-mist{animation:ecmist 2.4s ease-in-out infinite}' +
    '@keyframes ecbob{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}.ec-bob{animation:ecbob 2.2s ease-in-out infinite}' +
    '@keyframes ecdrift{0%{transform:translateX(0)}100%{transform:translateX(70px)}}.ec-drift{animation:ecdrift 12s ease-in-out infinite alternate}' +
    '@keyframes ectw{0%,100%{opacity:.15}50%{opacity:1}}.ec-tw{animation:ectw 1.6s ease-in-out infinite}.ec-tw2{animation-delay:-.5s}.ec-tw3{animation-delay:-1.1s}' +
    '@keyframes ecbeam{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.ec-beam{transform-box:fill-box;transform-origin:50% 0;animation:ecbeam 4s ease-in-out infinite}.ec-beam2{animation-delay:-2s}' +
    '@keyframes ecfly{0%{transform:translate(0,0)}100%{transform:translate(440px,-20px)}}.ec-fly{animation:ecfly 14s linear infinite}' +
    '@keyframes ecspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ec-sp{animation:ecspray 1.4s ease-out infinite}.ec-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const GOLD = "#e0b04a", RED = "#b23a2e", BLUE = "#6aa3c8";
  /* the Blue Ridge foothills: soft blue rolling layers */
  const hills = (y) => '<path d="M0 ' + y + 'q50 -26 100 -10t110 -16t100 8t90 -12v140h-400z" fill="#8aa6c8"/><path d="M0 ' + (y + 16) + 'q70 -18 140 -4t130 -12t130 10v130h-400z" fill="#6687ad"/>';
  const tree = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-3" y="-4" width="6" height="14" fill="#4e3d2c"/><path d="M0 -58l-16 26h8l-14 18h9l-13 14h52l-13 -14h9l-14 -18h8z" fill="' + (c || "#24502e") + '"/></g>';
  const car = '<g><path d="M0 22v-10q0 -4 4 -5l14 -3l12 -10h34q5 0 8 4l8 9l12 2q4 1 4 5v8z" fill="#2a2a30" stroke="#111" stroke-width="1.5"/><path d="M32 6l9 -8h20l7 8z" fill="#bfe3f2"/><path d="M4 14h90" stroke="' + GOLD + '" stroke-width="2"/>' +
    '<circle cx="22" cy="24" r="8" fill="#111"/><circle cx="22" cy="24" r="3.5" fill="#ccc"/><circle cx="76" cy="24" r="8" fill="#111"/><circle cx="76" cy="24" r="3.5" fill="#ccc"/></g>';

  /* 1. US 321 into Granite Falls */
  function ecsign() {
    const shield = '<g transform="translate(56 50)"><path d="M0 0h50v30q0 14 -25 22q-25 -8 -25 -22z" fill="#fff" stroke="#111" stroke-width="2"/><text x="25" y="13" text-anchor="middle" ' + font + ' font-size="7" fill="#111">US</text><text x="25" y="33" text-anchor="middle" ' + font + ' font-size="17" fill="#111">321</text></g>';
    const big = '<rect x="124" y="32" width="214" height="86" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/><text x="231" y="62" text-anchor="middle" ' + font + ' font-size="24" fill="#fff">GRANITE FALLS</text>' +
      '<text x="231" y="82" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">HICKORY BLVD</text><text x="231" y="102" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">LENOIR   HICKORY</text>' +
      '<rect x="180" y="118" width="6" height="42" fill="#8a9098"/><rect x="276" y="118" width="6" height="42" fill="#8a9098"/>';
    return svg('<rect width="400" height="260" fill="url(#ecs1)"/><circle cx="340" cy="34" r="16" fill="#fff4c8" opacity=".9"/>' + hills(118) +
      tree(24, 160, .9) + tree(372, 158, 1) + tree(346, 162, .7, "#2f5e34") + '<rect x="79" y="94" width="4" height="66" fill="#8a9098"/>' + shield + big +
      '<rect x="0" y="160" width="400" height="100" fill="#55565c"/><path d="M0 162h400M0 252h400" stroke="#f2f2f2" stroke-width="3"/><path d="M0 207h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="26 18"/>' +
      '<g class="anim-train"><g transform="translate(150 182) scale(1.45)">' + car + '</g></g>', sky("ecs1", "#8fbfe6", "#f3e6d6"));
  }

  /* 2. The falls on Gunpowder Creek */
  function ecfalls() {
    const rock = (d, c) => '<path d="' + d + '" fill="' + c + '" stroke="#5a5048" stroke-width="2"/>';
    const rocks = rock("M40 150q20 -30 70 -24q24 6 26 30l-6 30h-96z", "#b5a49a") + rock("M150 160q14 -26 54 -22q20 8 18 34l-4 20h-72z", "#c4b2a6") +
      rock("M250 148q24 -26 70 -18q24 10 22 36l-4 28h-96z", "#a8978c") + rock("M10 200q30 -20 80 -14q20 8 16 30h-100z", "#9d8d84") + rock("M300 206q24 -18 70 -10q20 8 16 26h-90z", "#b0a094") +
      '<path d="M60 140l20 6M270 140l26 4M170 154l16 4" stroke="#e8d8cc" stroke-width="2"/>';
    const water = [[120, 120, 30], [228, 128, 22]].map(w => '<rect x="' + w[0] + '" y="' + w[1] + '" width="' + w[2] + '" height="82" fill="#d8eef6"/>' +
      [0, 1, 2].map(i => '<path class="ec-flow ' + (i % 2 ? "ec-flow2" : "") + '" d="M' + (w[0] + 6 + i * (w[2] / 3)) + ' ' + w[1] + 'v82" stroke="#fff" stroke-width="3" stroke-dasharray="10 10"/>').join("")).join("");
    const pool = '<rect x="0" y="210" width="400" height="50" fill="#4a8aa0"/>' + [0, 1, 2, 3].map(i => '<path class="ec-flow" d="M' + (20 + i * 100) + ' ' + (224 + (i % 2) * 14) + 'h60" stroke="#cfe8f0" stroke-width="2" stroke-dasharray="14 8"/>').join("");
    const spray = [134, 238].map(x => '<g class="ec-mist"><ellipse cx="' + x + '" cy="204" rx="34" ry="10" fill="#fff"/></g>').join("");
    return svg('<rect width="400" height="260" fill="url(#ecs2)"/>' + '<rect x="0" y="80" width="400" height="60" fill="#3a6a40"/>' +
      tree(24, 132, 1.1) + tree(70, 128, .9, "#2f5e34") + tree(330, 130, 1.2) + tree(376, 128, 1, "#2f5e34") + tree(200, 118, .8, "#2f5e34") +
      '<rect x="0" y="116" width="400" height="10" fill="#4a7a9a"/>' + water + rocks + pool + spray +
      '<path class="ec-fly" d="M-20 40l6 -4l6 4l6 -4l6 4" stroke="#333" stroke-width="2" fill="none"/>', sky("ecs2", "#a8d4ee", "#eef6fb"));
  }

  /* 3. Lake Rhodhiss at sunset */
  function eclake() {
    const dock = '<rect x="0" y="176" width="190" height="10" fill="#7a5a3a"/>' + [20, 70, 120, 170].map(x => '<rect x="' + x + '" y="186" width="6" height="40" fill="#5a3a1a"/>').join("") +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 21) + ' 176v10" stroke="#5a3a1a" stroke-width="1.5"/>').join("");
    const rod = '<path d="M150 176l70 -70" stroke="#3a2a1a" stroke-width="3"/><path d="M220 106q14 40 16 92" stroke="#eee" stroke-width="1" fill="none"/><g class="ec-bob"><circle cx="236" cy="198" r="4" fill="' + RED + '"/><circle cx="236" cy="195" r="2" fill="#fff"/></g>';
    const boat = '<g class="ec-drift"><g transform="translate(260 170)"><path d="M0 0h80l-8 14h-64z" fill="#4a6a5a" stroke="#223" stroke-width="1.5"/><rect x="30" y="-8" width="14" height="8" fill="#3a2a1a"/></g></g>';
    const glints = [[60, 210], [300, 216], [210, 236], [340, 240], [120, 244]].map((p, i) => '<path class="ec-tw ' + (i % 3 === 1 ? "ec-tw2" : i % 3 === 2 ? "ec-tw3" : "") + '" d="M' + (p[0] - 9) + ' ' + p[1] + 'h18" stroke="' + GOLD + '" stroke-width="2"/>').join("");
    return svg('<rect width="400" height="260" fill="url(#ecs3)"/><circle cx="300" cy="140" r="26" fill="#ffd27a"/>' +
      '<path d="M0 150q60 -18 120 -6t140 -10t140 6v20h-400z" fill="#3a4a5a"/>' + tree(30, 152, .8, "#1f3a2a") + tree(80, 154, .6, "#1f3a2a") + tree(380, 150, .8, "#1f3a2a") +
      '<rect x="0" y="160" width="400" height="100" fill="url(#ecw3)"/><path d="M270 168h60M280 178h40M290 188h20" stroke="#ffd27a" stroke-width="2" opacity=".7"/>' + glints + boat + dock + rod +
      '<path class="ec-fly" d="M-20 70l6 -4l6 4l6 -4l6 4" stroke="#222" stroke-width="2" fill="none"/>',
      sky("ecs3", "#3a3a6a", "#f0956a") + '<linearGradient id="ecw3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6a5a7a"/><stop offset="1" stop-color="#2a3a5a"/></linearGradient>');
  }

  /* 4. Concert for Carolina night at the stadium in Charlotte */
  function ecstage() {
    const bowl = '<path d="M0 120q200 -60 400 0v60h-400z" fill="#22252c"/><path d="M0 120q200 -60 400 0" stroke="' + BLUE + '" stroke-width="4" fill="none"/>' +
      '<path d="M0 140q200 -50 400 0" stroke="#3a3f4a" stroke-width="2" fill="none"/><path d="M0 158q200 -40 400 0" stroke="#3a3f4a" stroke-width="2" fill="none"/>';
    const lights = Array.from({ length: 34 }, (_, i) => '<circle class="ec-tw ' + (i % 3 === 1 ? "ec-tw2" : i % 3 === 2 ? "ec-tw3" : "") + '" cx="' + (8 + i * 11.6) + '" cy="' + (140 - Math.sin(i / 33 * Math.PI) * 26 + (i % 4) * 6) + '" r="1.8" fill="#fff8d0"/>').join("");
    const towers = [40, 360].map(x => '<rect x="' + (x - 3) + '" y="30" width="6" height="90" fill="#6a707a"/><rect x="' + (x - 18) + '" y="22" width="36" height="12" fill="#e8ecf0"/><path class="ec-beam ' + (x > 200 ? "ec-beam2" : "") + '" d="M' + x + ' 34l-30 150h60z" fill="#fff8d0" opacity=".12"/>').join("");
    const stage = '<rect x="110" y="170" width="180" height="16" fill="#1a1a1e"/><rect x="104" y="96" width="8" height="90" fill="#3a3a40"/><rect x="288" y="96" width="8" height="90" fill="#3a3a40"/><rect x="104" y="92" width="192" height="10" fill="#3a3a40"/>' +
      '<rect x="120" y="104" width="160" height="22" fill="#111"/><text x="200" y="120" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">CONCERT FOR CAROLINA</text>' +
      '<path d="M200 170v-38M194 132h12" stroke="#c8c8d0" stroke-width="2.5"/><circle cx="200" cy="130" r="3" fill="#333"/>' +
      '<g transform="translate(262 150) rotate(-14)"><ellipse cx="0" cy="18" rx="10" ry="9" fill="#7a3a1a" stroke="#2a1408" stroke-width="1.5"/><ellipse cx="0" cy="8" rx="8" ry="7" fill="#7a3a1a" stroke="#2a1408" stroke-width="1.5"/><rect x="-1.5" y="-14" width="3" height="20" fill="#2a1408"/></g>' +
      '<path d="M140 170h28M232 170h28" stroke="' + RED + '" stroke-width="3"/>';
    const crowd = Array.from({ length: 42 }, (_, i) => '<circle cx="' + (5 + i * 9.6) + '" cy="' + (214 + (i % 3) * 4) + '" r="6" fill="' + ["#1e2a3a", "#2a1e2a", "#1e2a24"][i % 3] + '"/>').join("") +
      [30, 90, 150, 250, 310, 370].map((x, i) => '<rect class="ec-tw ' + (i % 2 ? "ec-tw2" : "") + '" x="' + x + '" y="196" width="4" height="7" rx="1" fill="#f0f6ff"/>').join("");
    return svg('<rect width="400" height="260" fill="url(#ecs4)"/>' + towers + bowl + lights + '<rect x="0" y="180" width="400" height="80" fill="#1a2a1e"/>' + stage + crowd,
      sky("ecs4", "#0a0e1e", "#22304e"));
  }

  /* 5. N Main St and Falls Ave in Granite Falls */
  function eccorner() {
    let bricks = '<rect x="0" y="110" width="400" height="104" fill="#9a4a32"/>';
    for (let y = 116; y < 214; y += 7) bricks += '<path d="M0 ' + y + 'h400" stroke="#6e3020" stroke-width=".8" opacity=".7"/>';
    const cornice = '<rect x="0" y="104" width="400" height="10" fill="#d8c8a8"/><rect x="300" y="122" width="34" height="40" fill="#2a3442" stroke="#d8c8a8" stroke-width="3"/><rect x="348" y="122" width="34" height="40" fill="#2a3442" stroke="#d8c8a8" stroke-width="3"/>';
    return svg('<rect width="400" height="260" fill="url(#ecs5)"/>' + hills(86) + tree(250, 104, .7, "#2f5e34") + tree(280, 104, .55, "#24502e") +
      bricks + cornice +
      tag("CHURCH", 98, 172, 50, GOLD, -6) + tag("CHIEF", 120, 198, 20, BLUE, -4) + tag("CHURCH CHOIR", 216, 202, 14, "#f3ead8", -3) +
      '<g fill="' + GOLD + '"><circle class="ec-sp" cx="24" cy="140" r="2.5"/><circle class="ec-sp ec-sp2" cx="42" cy="136" r="2"/></g>' +
      '<rect x="0" y="214" width="400" height="46" fill="#5a5b60"/><path d="M40 230l14 8M200 244l18 -6M300 226l-10 10" stroke="#2f3034" stroke-width="2"/>' +
      '<rect x="56" y="36" width="5" height="180" fill="#6b7178"/>' + sign(4, 40, 116, "N MAIN ST") + sign(14, 66, 100, "FALLS AVE"),
      sky("ecs5", "#5a7ab8", "#f6c48a"));
  }

  window.SCENES = { ecsign: ecsign, ecfalls: ecfalls, eclake: eclake, ecstage: ecstage, eccorner: eccorner };
})();
