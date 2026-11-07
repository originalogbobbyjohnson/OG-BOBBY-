/* nelly scenes (Regions tab: St. Louis + Ohio; University City, "U-City"). CSS classes and ids prefixed nl- (the page's own anim-train is kept).
   1 University City–Big Bend on the MetroLink Blue Line: side platforms down in the Big Bend tunnel under Forest Park Pkwy, the white MetroLink car sliding in. BLUE bullet.
   2 The downtown ballpark ("Batter Up"; he played ball growing up): red-brick arches, red seats, green field, a ball flying out over the wall.
   3 The sneaker wall ("Air Force Ones", "two pair"): stacked shoeboxes and a row of plain white-on-white kicks, one pair spinning on the display.
   4 Eads Bridge over the Mississippi (the MetroLink rides across it): the three steel arches on stone piers, a paddle-wheel riverboat churning under.
   5 Delmar Blvd and Trinity Ave in University City: green signs, NELLY tagged on the brick, the two Lion Gates pylons with their lions standing guard behind. No logos, no 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes nlflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.nl-flk{animation:nlflick 2.2s infinite}.nl-flk2{animation-delay:.8s}' +
    '@keyframes nlball{0%{transform:translate(0,0)}100%{transform:translate(230px,-150px)}}.nl-ball{animation:nlball 2.6s ease-out infinite}' +
    '@keyframes nlwave{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.nl-wv{animation:nlwave .9s ease-in-out infinite}.nl-wv2{animation-delay:-.45s}' +
    '@keyframes nlspin{0%,100%{transform:scaleX(1)}50%{transform:scaleX(-1)}}.nl-spin{transform-box:fill-box;transform-origin:50% 50%;animation:nlspin 3s ease-in-out infinite}' +
    '@keyframes nlwheel{from{transform:rotate(0)}to{transform:rotate(360deg)}}.nl-wheel{transform-box:fill-box;transform-origin:50% 50%;animation:nlwheel 3s linear infinite}' +
    '@keyframes nlboat{0%{transform:translateX(-30px)}50%{transform:translateX(30px)}100%{transform:translateX(-30px)}}.nl-boat{animation:nlboat 12s ease-in-out infinite}' +
    '@keyframes nlrip{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}.nl-rip{animation:nlrip 3s ease-in-out infinite}.nl-rip2{animation-delay:-1.5s}' +
    '@keyframes nlblink{0%,100%{opacity:.3}50%{opacity:1}}.nl-bl{animation:nlblink 1.4s ease-in-out infinite}.nl-bl2{animation-delay:-.7s}' +
    '@keyframes nlspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.nl-sp{animation:nlspray 1.4s ease-out infinite}.nl-sp2{animation-delay:.45s}' +
    '@keyframes nlsmoke{0%{transform:translate(0,0);opacity:.7}100%{transform:translate(-20px,-30px);opacity:0}}.nl-smk{animation:nlsmoke 2s ease-out infinite}.nl-smk2{animation-delay:-1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "nl-bl" + (i % 2 ? " nl-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 80) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const BLUE = "#0b6cb5", RED = "#e8423f", GOLD = "#f5c542", SKY = "#4aa3df";

  /* 1. University City-Big Bend, MetroLink Blue Line (in the tunnel) */
  function nlstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="122" width="36" height="26" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><path d="M24 182V120q0 -12 14 -12h304q22 0 26 30v44z" fill="#f1f2f4" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="24" y="154" width="344" height="6" fill="' + RED + '"/><rect x="24" y="161" width="344" height="6" fill="' + BLUE + '"/>' +
      '<path d="M342 112q20 4 24 28h-24z" fill="#1c2630"/><circle cx="356" cy="174" r="3.5" fill="#fff6c2"/>' +
      '<rect x="40" y="110" width="92" height="10" rx="2" fill="#111"/><text x="86" y="118" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">BLUE · SHREWSBURY</text></g>';
    const lights = [60, 160, 260, 360].map((x, i) => '<rect class="nl-flk' + (i % 2 ? " nl-flk2" : "") + '" x="' + (x - 20) + '" y="40" width="40" height="5" rx="2" fill="#fff6d8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#3a3f46"/>' +
      '<path d="M0 0h400v36q-200 -26 -400 0z" fill="#2a2e34"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 42) + '" y="46" width="40" height="52" fill="' + (i % 2 ? "#8c8a84" : "#9a978f") + '"/>').join("") + lights +
      '<rect x="0" y="98" width="400" height="6" fill="' + BLUE + '"/>' +
      train +
      '<rect x="0" y="186" width="400" height="8" fill="#f2c200"/><rect x="0" y="194" width="400" height="66" fill="#a9a59c"/><path d="M0 226h400" stroke="#938f86" stroke-width="2"/>' +
      '<rect x="36" y="204" width="328" height="38" rx="3" fill="#111"/><text x="50" y="221" ' + font + ' font-size="13" fill="#fff">University City–</text><text x="50" y="236" ' + font + ' font-size="13" fill="#fff">Big Bend</text>' + badge(290, 223, "BLUE", BLUE),
      "");
  }

  /* 2. The ballpark: Batter Up */
  function nlballpark() {
    const arches = Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 46 - 4) + ' 92v-26q21 -22 42 0v26z" fill="#2a1a18"/>').join("");
    const seats = Array.from({ length: 5 }, (_, r) => '<rect x="0" y="' + (96 + r * 9) + '" width="400" height="6" fill="' + (r % 2 ? "#b8302b" : "#cf3a33") + '"/>').join("");
    const fans = Array.from({ length: 22 }, (_, i) => '<circle class="nl-wv' + (i % 2 ? " nl-wv2" : "") + '" cx="' + (8 + i * 18) + '" cy="' + (100 + (i % 3) * 12) + '" r="3.5" fill="' + ["#f2d2b0", "#8a5a3a", "#5a3a2a", "#e8c09a"][i % 4] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#nls2)"/>' +
      '<rect x="0" y="40" width="400" height="56" fill="#9b3b2c"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (46 + i * 8) + 'h400" stroke="#86311f" stroke-width="1"/>').join("") + arches +
      seats + fans +
      '<rect x="0" y="142" width="400" height="10" fill="#1f4a2a"/><rect x="0" y="152" width="400" height="108" fill="#3d8b3a"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 50) + '" y="152" width="25" height="108" fill="#47993f" opacity=".6"/>').join("") +
      '<path d="M200 250l-90 -60l90 -40l90 40z" fill="#c8915a"/><path d="M200 236l-56 -38l56 -26l56 26z" fill="#3d8b3a"/><circle cx="200" cy="208" r="7" fill="#c8915a"/>' +
      '<rect x="196" y="244" width="8" height="5" fill="#fff"/>' +
      '<path d="M186 232l-14 10" stroke="#a07040" stroke-width="4" stroke-linecap="round"/>' +
      '<g class="nl-ball"><circle cx="160" cy="232" r="4" fill="#fff" stroke="' + RED + '" stroke-width="1"/></g>' +
      '<text x="200" y="30" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">BATTER UP</text>',
      sky("nls2", "#3c7fc2", "#a9d3f2"));
  }

  /* 3. The sneaker wall: Air Force Ones */
  function nlkicks() {
    const shoe = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 20v-10q0 -6 6 -8l12 -2q8 6 16 6l14 4q8 3 8 10z" fill="#fbfbfb" stroke="#9aa1a8" stroke-width="1.5"/><path d="M0 20h56v4h-56z" fill="#e6e8ea" stroke="#9aa1a8" stroke-width="1"/><path d="M18 4l4 8M24 6l3 7M30 8l2 6" stroke="#cfd3d8" stroke-width="1.2"/></g>';
    const boxes = Array.from({ length: 4 }, (_, r) => Array.from({ length: 6 }, (_, c) => '<rect x="' + (10 + c * 64) + '" y="' + (30 + r * 22) + '" width="58" height="18" rx="2" fill="' + ["#d8c8a8", "#c8b08a", "#e0d4bc"][(r + c) % 3] + '" stroke="#8a7a5a" stroke-width="1"/><rect x="' + (14 + c * 64) + '" y="' + (36 + r * 22) + '" width="16" height="6" fill="#fff" opacity=".8"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#nls3)"/>' + boxes +
      '<rect x="0" y="122" width="400" height="10" fill="#6a4a2a"/>' +
      [20, 100, 260, 330].map(x => shoe(x, 98, 1)).join("") +
      '<rect x="150" y="150" width="100" height="40" rx="4" fill="#26262c"/><ellipse cx="200" cy="150" rx="60" ry="8" fill="#3a3a44"/>' +
      '<g class="nl-spin">' + shoe(150, 120, 1) + shoe(196, 124, 1) + '</g>' +
      '<rect x="0" y="190" width="400" height="70" fill="#c9b79a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 190l-20 70" stroke="#b8a687" stroke-width="2"/>').join("") +
      '<rect x="70" y="206" width="260" height="30" rx="4" fill="' + RED + '"/><text x="200" y="226" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">TWO PAIR · WHITE ON WHITE</text>',
      sky("nls3", "#f4efe6", "#e0d6c4"));
  }

  /* 4. Eads Bridge over the Mississippi */
  function nlbridge() {
    const arch = (x) => '<path d="M' + x + ' 150q60 -56 120 0" stroke="#5a5f66" stroke-width="7" fill="none"/><path d="M' + x + ' 150q60 -44 120 0" stroke="#7a8088" stroke-width="3" fill="none"/>' +
      Array.from({ length: 7 }, (_, i) => { const t = (i + 1) / 8, xx = x + 120 * t, yy = 150 - 4 * 28 * t * (1 - t) * 2; return '<path d="M' + xx.toFixed(1) + ' ' + yy.toFixed(1) + 'V108" stroke="#7a8088" stroke-width="2"/>'; }).join("");
    const pier = x => '<rect x="' + (x - 10) + '" y="104" width="20" height="74" fill="#b9a98a"/><path d="M' + (x - 10) + ' 104l10 -10l10 10z" fill="#a8977a"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M' + (x - 10) + ' ' + (112 + i * 10) + 'h20" stroke="#9c8c70" stroke-width="1"/>').join("");
    const boat = '<g class="nl-boat"><g transform="translate(150 0)"><rect x="0" y="196" width="110" height="16" fill="#f4f1ea" stroke="#555" stroke-width="1.5"/><rect x="10" y="182" width="84" height="14" fill="#f4f1ea" stroke="#555" stroke-width="1.5"/><rect x="24" y="170" width="54" height="12" fill="' + RED + '"/>' +
      '<rect x="34" y="150" width="6" height="20" fill="#333"/><rect x="62" y="150" width="6" height="20" fill="#333"/><g class="nl-smk"><circle cx="37" cy="146" r="5" fill="#ccc"/></g><g class="nl-smk nl-smk2"><circle cx="65" cy="146" r="5" fill="#ccc"/></g>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (16 + i * 16) + '" y="186" width="8" height="6" fill="' + SKY + '"/>').join("") +
      '<g class="nl-wheel"><circle cx="122" cy="204" r="12" fill="none" stroke="' + RED + '" stroke-width="3"/>' + Array.from({ length: 4 }, (_, i) => '<path d="M122 204l' + (12 * Math.cos(i * Math.PI / 4)).toFixed(1) + ' ' + (12 * Math.sin(i * Math.PI / 4)).toFixed(1) + 'M122 204l' + (-12 * Math.cos(i * Math.PI / 4)).toFixed(1) + ' ' + (-12 * Math.sin(i * Math.PI / 4)).toFixed(1) + '" stroke="' + RED + '" stroke-width="2"/>').join("") + '</g></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nls4)"/>' +
      '<g fill="#6a6f7a" opacity=".6"><rect x="0" y="70" width="30" height="40"/><rect x="34" y="56" width="22" height="54"/><rect x="340" y="62" width="26" height="48"/><rect x="370" y="76" width="30" height="34"/></g>' +
      '<rect x="0" y="100" width="400" height="8" fill="#5a5f66"/><rect x="0" y="96" width="400" height="4" fill="#8a8f96"/>' +
      arch(20) + arch(140) + arch(260) + pier(20) + pier(140) + pier(260) + pier(380) +
      '<rect x="0" y="160" width="400" height="100" fill="#6b6a4e"/>' +
      '<g class="nl-rip"><path d="M20 230h50M200 244h60M320 226h40" stroke="#a9a78a" stroke-width="2" stroke-linecap="round"/></g><g class="nl-rip nl-rip2"><path d="M100 220h40M260 236h40" stroke="#a9a78a" stroke-width="2" stroke-linecap="round"/></g>' +
      boat +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#f2efe8">EADS BRIDGE · THE MISSISSIPPI</text>',
      sky("nls4", "#f08a4b", "#ffd9a0"));
  }

  /* 5. Delmar Blvd and Trinity Ave, University City */
  function nlcorner() {
    const lion = x => '<g transform="translate(' + x + ' 0)"><ellipse cx="4" cy="58" rx="18" ry="8" fill="#c9c0aa"/><path d="M20 58q10 -2 8 -12" stroke="#c9c0aa" stroke-width="3" fill="none"/><circle cx="26" cy="45" r="3" fill="#c9c0aa"/>' +
      '<rect x="-12" y="58" width="6" height="8" fill="#c9c0aa"/><rect x="10" y="58" width="6" height="8" fill="#c9c0aa"/>' +
      '<circle cx="-12" cy="46" r="13" fill="#a99e84"/><circle cx="-14" cy="46" r="8" fill="#d8cfb8"/><circle cx="-18" cy="44" r="1.4" fill="#5a5040"/><path d="M-22 50h5" stroke="#5a5040" stroke-width="1.5"/></g>';
    const pylon = x => '<rect x="' + (x - 16) + '" y="70" width="32" height="60" fill="#d8cfb8"/><rect x="' + (x - 20) + '" y="66" width="40" height="6" fill="#c2b89e"/>' + lion(x);
    return svg(
      '<rect width="400" height="260" fill="url(#nls5)"/>' + stars(16) +
      '<g fill="#2a2438"><rect x="120" y="96" width="40" height="34"/><rect x="250" y="88" width="50" height="42"/></g>' +
      pylon(190) + pylon(340) +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("NELLY", 22, 192, 58, RED, -6) + tag("U-CITY", 170, 212, 22, GOLD, -4) + tag("ST. LUNATICS", 24, 216, 16, SKY, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 148, "Delmar Blvd") + sign(276, 124, 110, "Trinity Ave") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="nl-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="nl-sp"><circle cx="164" cy="162" r="3" fill="' + RED + '" opacity=".7"/></g><g class="nl-sp nl-sp2"><circle cx="170" cy="156" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("nls5", "#16153a", "#d06a48"));
  }

  window.SCENES = { nlstation: nlstation, nlballpark: nlballpark, nlkicks: nlkicks, nlbridge: nlbridge, nlcorner: nlcorner };
})();
