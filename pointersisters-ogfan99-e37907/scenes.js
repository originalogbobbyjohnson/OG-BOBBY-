/* The Pointer Sisters scenes (Regions tab: The Bay Area; West Oakland). CSS classes prefixed ptr- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ptrglow{0%,100%{opacity:.35}50%{opacity:1}}.ptr-glow{animation:ptrglow 2.2s ease-in-out infinite}.ptr-g2{animation-delay:-1.1s}' +
    '@keyframes ptrbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.ptr-bob{animation:ptrbob 1s ease-in-out infinite}.ptr-b2{animation-delay:-.5s}.ptr-b3{animation-delay:-.25s}.ptr-b4{animation-delay:-.75s}' +
    '@keyframes ptrnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-46px);opacity:0}}.ptr-note{animation:ptrnote 2.6s ease-out infinite}.ptr-n2{animation-delay:-.9s}.ptr-n3{animation-delay:-1.7s}' +
    '@keyframes ptrflash{0%,86%,100%{opacity:0}90%{opacity:.95}}.ptr-fl{animation:ptrflash 2.4s infinite}.ptr-f2{animation-delay:-.8s}.ptr-f3{animation-delay:-1.6s}' +
    '@keyframes ptrbart{0%{transform:translateX(-260px)}100%{transform:translateX(420px)}}.ptr-bart{animation:ptrbart 7s linear infinite}' +
    '@keyframes ptrbeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.ptr-bm{transform-box:fill-box;transform-origin:50% 0%;animation:ptrbeam 3.6s ease-in-out infinite}.ptr-bm2{animation-delay:-1.8s}' +
    '@keyframes ptrspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ptr-sp{animation:ptrspray 1.4s ease-out infinite}.ptr-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "ptr-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, c, k) => '<g class="ptr-note' + (k ? " ptr-n" + k : "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '"/><path d="M' + (x + 3.5) + ' ' + y + 'v-14l7 3" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  /* a singer in a long dress, silhouette head, no face */
  const singer = (x, y, c, k, hat) => '<g class="ptr-bob' + (k ? " ptr-b" + k : "") + '"><circle cx="' + x + '" cy="' + (y - 56) + '" r="8" fill="#1a1016"/>' +
    (hat ? '<ellipse cx="' + x + '" cy="' + (y - 62) + '" rx="13" ry="3" fill="' + hat + '"/><rect x="' + (x - 6) + '" y="' + (y - 70) + '" width="12" height="8" rx="2" fill="' + hat + '"/>' : '') +
    '<path d="M' + (x - 7) + ' ' + (y - 47) + 'h14l8 47h-30z" fill="' + c + '"/><path d="M' + (x - 7) + ' ' + (y - 42) + 'l-9 14M' + (x + 7) + ' ' + (y - 42) + 'l9 14" stroke="#1a1016" stroke-width="4" stroke-linecap="round"/></g>';
  const PINK = "#e94fd0", CYAN = "#7fe0ff", GOLD = "#ffd166", ACG = "#00843d", ACB = "#0072bc";

  /* 1. The AC Transit 62 pulling up on 7th St at Market St in West Oakland, under the BART aerial track, Victorians behind */
  function ptrstop() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 42) + '" y="128" width="32" height="22" rx="2" fill="#20324a"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="118" width="320" height="64" rx="10" fill="#f4f6f4" stroke="#7d868e" stroke-width="2"/>' + wins +
      '<path d="M40 158h320v8h-320z" fill="' + ACG + '"/><path d="M40 166h320v5h-320z" fill="' + ACB + '"/>' +
      '<rect x="326" y="128" width="30" height="38" rx="3" fill="#20324a"/><rect x="326" y="120" width="28" height="8" rx="2" fill="#111"/><text x="340" y="127" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">62</text>' +
      '<circle cx="356" cy="174" r="3.5" fill="#fff6c2"/><circle cx="92" cy="184" r="11" fill="#111"/><circle cx="92" cy="184" r="5" fill="#777"/><circle cx="300" cy="184" r="11" fill="#111"/><circle cx="300" cy="184" r="5" fill="#777"/></g>';
    const vic = (x, c, t) => '<rect x="' + x + '" y="70" width="46" height="46" fill="' + c + '"/><path d="M' + (x - 3) + ' 72l26 -22l26 22z" fill="' + t + '"/><rect x="' + (x + 6) + '" y="80" width="12" height="16" fill="#2a3448"/><rect class="ptr-glow" x="' + (x + 28) + '" y="80" width="12" height="16" fill="#ffd98a"/><rect x="' + (x + 6) + '" y="100" width="34" height="3" fill="#fff"/>';
    const bart = '<g class="ptr-bart"><rect x="0" y="30" width="220" height="16" rx="4" fill="#d8dce0"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (8 + i * 21) + '" y="33" width="14" height="6" fill="#33405a"/>').join("") + '<rect x="0" y="42" width="220" height="2" fill="#3a6ab0"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ptr1)"/>' + stars(6) +
      vic(4, "#c8a0c8", "#7a3a6a") + vic(58, "#9ad0c8", "#3a6a6a") + vic(112, "#f0d08a", "#8a5a2a") + vic(250, "#e8a0a0", "#7a3a3a") + vic(304, "#a8b8e8", "#3a4a7a") + vic(356, "#e8d8b0", "#6a5a3a") +
      bart + '<rect x="0" y="46" width="400" height="10" fill="#9aa0a6"/>' + [30, 170, 310].map(x => '<rect x="' + x + '" y="56" width="16" height="120" fill="#a8aeb4"/>').join("") +
      '<rect x="0" y="180" width="400" height="80" fill="#3c3e44"/><rect x="0" y="180" width="400" height="5" fill="#c9c4b4"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 54 + 6) + '" y="226" width="30" height="4" fill="#f0d24a"/>').join("") +
      bus +
      '<rect x="16" y="130" width="4" height="54" fill="#7a7f86"/><rect x="2" y="112" width="34" height="22" rx="3" fill="#fff" stroke="' + ACG + '" stroke-width="2.5"/>' +
      '<text x="19" y="121" text-anchor="middle" ' + font + ' font-size="5" fill="' + ACG + '">AC TRANSIT</text><text x="19" y="131" text-anchor="middle" ' + font + ' font-size="9" fill="#111">62</text>' +
      '<rect x="374" y="78" width="4" height="102" fill="#2a2a2a"/>' + sign(310, 60, 88, "7th St") + sign(296, 84, 102, "Market St"),
      sky("ptr1", "#1e1a46", "#d8789a"));
  }

  /* 2. West Oakland Church of God, the church their parents led: little white church, four sisters singing gospel on the steps */
  function ptrchurch() {
    return svg(
      '<rect width="400" height="260" fill="url(#ptr2)"/>' + stars(8) +
      '<rect x="110" y="70" width="180" height="110" fill="#f4f0e6" stroke="#c8c0aa" stroke-width="2"/><path d="M100 72l100 -40l100 40z" fill="#8a3a3a"/>' +
      '<rect x="186" y="10" width="28" height="40" fill="#f4f0e6" stroke="#c8c0aa"/><path d="M182 12l18 -14l18 14z" fill="#8a3a3a"/><path d="M200 -2v-6" stroke="#ffd166" stroke-width="2"/>' +
      [130, 252].map(x => '<path d="M' + x + ' 140v-40q9 -12 18 0v40z" fill="#5a7ac8" class="ptr-glow"/>').join("") +
      '<path d="M178 180v-56q22 -24 44 0v56z" fill="#5a3a24"/><rect x="198" y="128" width="4" height="52" fill="#3a2414"/>' +
      '<rect x="112" y="48" width="176" height="16" fill="#fff" stroke="#8a3a3a"/><text x="200" y="60" text-anchor="middle" ' + font + ' font-size="8" fill="#8a3a3a">WEST OAKLAND CHURCH OF GOD</text>' +
      '<rect x="0" y="180" width="400" height="80" fill="#8a8478"/><rect x="150" y="180" width="100" height="8" fill="#bdb6a6"/><rect x="140" y="188" width="120" height="8" fill="#a8a294"/>' +
      singer(110, 244, PINK, 0) + singer(150, 248, CYAN, 2) + singer(250, 248, GOLD, 3) + singer(290, 244, "#c8a0ff", 4) +
      note(80, 150, "#fff", 0) + note(320, 146, GOLD, 2) + note(200, 110, PINK, 3),
      sky("ptr2", "#1c2452", "#e8a07a"));
  }

  /* 3. The Opry, Nashville, 1974: the first Black female group on that stage; red barn backdrop, wooden boards, the four of them in their vintage dresses and hats */
  function ptropry() {
    const boards = Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 46) + '" y="196" width="44" height="64" fill="' + (i % 2 ? "#a8743e" : "#b8844a") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#140c10"/>' +
      '<rect x="40" y="30" width="320" height="140" fill="#9a2a22"/>' + Array.from({ length: 16 }, (_, i) => '<path d="M' + (40 + i * 20) + ' 30v140" stroke="#7a1e18" stroke-width="2"/>').join("") +
      '<path d="M40 30l160 -26l160 26z" fill="#7a1e18"/><path d="M160 60h80v44h-80z" fill="#f4ead2"/><path d="M160 60l80 44M240 60l-80 44" stroke="#9a2a22" stroke-width="4"/>' +
      '<rect x="40" y="170" width="320" height="26" fill="#3a2414"/>' + boards +
      '<path class="ptr-bm" d="M90 0l-50 220h100z" fill="' + GOLD + '" opacity=".16"/><path class="ptr-bm ptr-bm2" d="M310 0l-50 220h100z" fill="' + PINK + '" opacity=".16"/>' +
      '<rect x="198" y="150" width="3" height="56" fill="#bbb"/><ellipse cx="199.5" cy="148" rx="5" ry="6" fill="#444"/>' +
      singer(140, 214, "#f2d0a8", 0, "#6a3a5a") + singer(176, 216, "#e8b8d8", 2, "#3a3a6a") + singer(224, 216, "#b8e0d8", 3, "#6a3a3a") + singer(260, 214, "#f2e2a0", 4, "#3a5a3a") +
      note(110, 120, "#fff", 0) + note(300, 112, GOLD, 2),
      "");
  }

  /* 4. Hollywood Boulevard, 1994: their star on the Walk of Fame, pink terrazzo with brass, cameras flashing */
  function ptrstar() {
    const tile = Array.from({ length: 5 }, (_, i) => '<path d="M' + (i * 90 - 40) + ' 260l60 -120h90l-60 120z" fill="' + (i % 2 ? "#2a2a2e" : "#323236") + '"/>').join("");
    const star = '<path d="M200 118l14 30h33l-26 20l10 32l-31 -19l-31 19l10 -32l-26 -20h33z" fill="#f2a6c4" stroke="#d4a64a" stroke-width="3"/>' +
      '<circle cx="200" cy="170" r="8" fill="#d4a64a"/><circle cx="200" cy="170" r="4" fill="#2a2a2e"/>';
    const flash = (x, y, k) => '<circle class="ptr-fl' + (k ? " ptr-f" + k : "") + '" cx="' + x + '" cy="' + y + '" r="14" fill="#fff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ptr4)"/>' + stars(14) +
      '<g fill="#1a1530">' + [[0, 60, 50], [56, 40, 40], [100, 70, 60], [170, 30, 50], [230, 54, 70], [310, 44, 40], [356, 64, 44]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (140 - b[1]) + '"/>').join("") + '</g>' +
      [20, 120, 250, 330].map((x, i) => '<rect class="ptr-glow' + (i % 2 ? " ptr-g2" : "") + '" x="' + x + '" y="90" width="6" height="8" fill="#ffd98a"/>').join("") +
      '<rect x="0" y="130" width="400" height="10" fill="#4a4a50"/>' +
      '<rect x="0" y="140" width="400" height="120" fill="#2a2a2e"/>' + tile +
      '<rect x="110" y="104" width="180" height="120" fill="#3a3a40" transform="skewX(-10) translate(20 0)"/>' + star +
      '<text x="200" y="214" text-anchor="middle" ' + font + ' font-size="11" fill="#d4a64a" letter-spacing="1">THE POINTER SISTERS</text>' +
      flash(40, 120, 0) + flash(360, 110, 2) + flash(90, 200, 3) + flash(320, 210, 0),
      sky("ptr4", "#140c2a", "#6a2a6a"));
  }

  /* 5. 10th St and Myrtle St in West Oakland, where their parents' first church stood: POINTERS tagged, Victorians, and the tallest tower in San Francisco lit up across the bay behind */
  function ptrcorner() {
    const tower = '<path d="M244 120v-96q14 -18 28 0v96z" fill="#b8bec8"/><path d="M244 40q14 -18 28 0v10h-28z" class="ptr-glow" fill="' + CYAN + '"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M246 ' + (56 + i * 8) + 'h24" stroke="#9aa2ae" stroke-width="1"/>').join("");
    const city = '<g fill="#3a3a5a">' + [[150, 84, 18], [172, 92, 20], [196, 76, 16], [216, 88, 24], [278, 86, 18], [300, 96, 22], [326, 90, 14]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (120 - b[1]) + '"/>').join("") + '</g>';
    const vic = (x, c, t) => '<rect x="' + x + '" y="84" width="44" height="40" fill="' + c + '"/><path d="M' + (x - 3) + ' 86l25 -20l25 20z" fill="' + t + '"/><rect class="ptr-glow" x="' + (x + 6) + '" y="94" width="10" height="14" fill="#ffd98a"/><rect x="' + (x + 26) + '" y="94" width="10" height="14" fill="#2a3448"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ptr5)"/>' + stars(12) +
      '<rect x="0" y="112" width="400" height="12" fill="#1e3456"/>' + city + tower + vic(6, "#c8a0c8", "#6a3a6a") + vic(58, "#9ad0c8", "#3a6a6a") + vic(352, "#f0d08a", "#7a5a2a") +
      '<rect x="0" y="122" width="400" height="102" fill="#4a3a5a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (130 + i * 8) + 'h400" stroke="#42344f" stroke-width="1"/>').join("") +
      tag("POINTERS", 14, 192, 52, PINK, -6) + tag("YES WE CAN CAN", 30, 216, 18, CYAN, -3) + tag("SO EXCITED", 214, 212, 18, GOLD, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#56544f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="370" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(314, 98, 82, "10th St") + sign(306, 124, 90, "Myrtle St") +
      '<g class="ptr-sp"><circle cx="160" cy="154" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="ptr-sp ptr-sp2"><circle cx="166" cy="148" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("ptr5", "#120c30", "#c86a8a"));
  }

  window.SCENES = { ptrstop: ptrstop, ptrchurch: ptrchurch, ptropry: ptropry, ptrstar: ptrstar, ptrcorner: ptrcorner };
})();
