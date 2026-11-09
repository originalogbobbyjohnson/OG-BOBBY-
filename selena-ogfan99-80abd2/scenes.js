/* selena scenes (Regions tab: Houston + Texas; Molina, Corpus Christi). CSS classes prefixed sq- (the page's own anim-train is kept).
   1 CCRTA's 23 Molina bus pulling up to Molina Dr / Bloomington St on the Westside of Corpus Christi.
   2 Papagayos, her dad's Tex-Mex spot in Lake Jackson (1980): the family band on a little stage, papel picado, the parrot sign.
   3 Q-Productions on Leopard St, the family studio: the console, the vocal booth, the gold gramophone for Live! (1994).
   4 Her own designs: a rhinestone bustier on a dress form, the sewing machine, the purple fabric (Selena Etc., 1994).
   5 Molina Dr and Bloomington St: green signs, SELENA tagged on the wall, palms and the bayfront's lights far off.
   No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sqblink{0%,100%{opacity:.25}50%{opacity:1}}.sq-bl{animation:sqblink 1.4s ease-in-out infinite}.sq-bl2{animation-delay:-.7s}' +
    '@keyframes sqsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.sq-sway{animation:sqsway 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 0}.sq-s2{animation-delay:-.5s}.sq-s3{animation-delay:-1s}' +
    '@keyframes sqbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.sq-bob{animation:sqbob .8s ease-in-out infinite}.sq-b2{animation-delay:-.4s}' +
    '@keyframes sqflap{0%,100%{transform:rotate(0)}50%{transform:rotate(-24deg)}}.sq-wing{animation:sqflap .5s ease-in-out infinite;transform-box:fill-box;transform-origin:10% 20%}' +
    '@keyframes sqnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(12px,-56px);opacity:0}}.sq-note{animation:sqnote 3s ease-out infinite}.sq-n2{animation-delay:-1s}.sq-n3{animation-delay:-2s}' +
    '@keyframes sqspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.sq-reel{animation:sqspin 2s linear infinite;transform-box:fill-box;transform-origin:50% 50%}' +
    '@keyframes sqtw{0%,100%{opacity:.2;transform:scale(.6)}50%{opacity:1;transform:scale(1.2)}}.sq-tw{animation:sqtw 1.2s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}.sq-t2{animation-delay:-.4s}.sq-t3{animation-delay:-.8s}' +
    '@keyframes sqneedle{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}.sq-needle{animation:sqneedle .25s linear infinite}' +
    '@keyframes sqspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sq-sp{animation:sqspray 1.4s ease-out infinite}.sq-sp2{animation-delay:.45s}' +
    '@keyframes sqpalm{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(3deg)}}.sq-palm{animation:sqpalm 3s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "sq-bl" + (i % 2 ? " sq-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const brick = (x, y, w, h, base, line) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>' + Array.from({ length: Math.floor(h / 10) }, (_, r) => '<path d="M' + x + ' ' + (y + 10 + r * 10) + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>').join("");
  const palm = (x, base, s, cls) => '<g class="sq-palm ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q' + (4 * s) + ' ' + (-40 * s) + ' ' + (-2 * s) + ' ' + (-80 * s) + '" stroke="#5a4030" stroke-width="' + (5 * s) + '" fill="none"/>' +
    [[-30, -8], [-22, 10], [26, -6], [22, 12], [0, -18]].map(([dx, dy]) => '<path d="M' + (x - 2 * s) + ' ' + (base - 80 * s) + 'q' + (dx * s / 2) + ' ' + (dy * s - 10 * s) + ' ' + (dx * s) + ' ' + (dy * s + 6 * s) + '" stroke="#2f6a3a" stroke-width="' + (5 * s) + '" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const PURP = "#9b5de5", GOLD = "#ffd166", PINK = "#ff5d8f", BUS = "#0b5fa5", TEAL = "#2ec4b6", RED = "#e63946";
  const kid = (x, base, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (base - 34) + '" r="6" fill="#3a2418"/><path d="M' + (x - 6) + ' ' + (base - 36) + 'q6 -10 12 0" fill="#1a0e08"/>' +
    '<path d="M' + (x - 9) + ' ' + base + 'l2 -26q7 -5 14 0l2 26z" fill="' + c + '"/></g>';
  const note = (x, y, c, cls) => '<g class="sq-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="1.6" height="14" fill="' + c + '"/></g>';
  const label = (x, y, w, a, b, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="26" rx="3" fill="#111" opacity=".88"/><text x="' + (x + w / 2) + '" y="' + (y + 11) + '" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">' + a + '</text><text x="' + (x + w / 2) + '" y="' + (y + 21) + '" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + (c || PURP) + '">' + b + '</text>';
  const house = (x, w, h, c, roof) => '<rect x="' + x + '" y="' + (150 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><path d="M' + (x - 4) + ' ' + (150 - h) + 'l' + (w / 2 + 4) + ' -16 ' + (w / 2 + 4) + ' 16z" fill="' + roof + '"/>' +
    '<rect x="' + (x + 8) + '" y="' + (150 - h + 10) + '" width="12" height="10" fill="#ffd98a" opacity=".75"/><rect x="' + (x + w - 18) + '" y="' + (150 - h + 14) + '" width="8" height="' + (h - 14) + '" fill="#4a3a30"/>';

  /* 1. CCRTA 23 Molina at Molina Dr / Bloomington St */
  function sqstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (70 + i * 44) + '" y="122" width="34" height="26" rx="3" fill="#1c2630"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="108" width="320" height="76" rx="10" fill="#f2f4f6" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="40" y="156" width="320" height="8" fill="' + BUS + '"/><rect x="40" y="166" width="320" height="4" fill="' + TEAL + '"/>' +
      '<rect x="44" y="118" width="22" height="46" rx="3" fill="#24303a"/>' +
      '<rect x="286" y="112" width="70" height="12" rx="2" fill="#111"/><text x="321" y="121.5" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb84a">23 MOLINA</text>' +
      '<circle cx="104" cy="186" r="13" fill="#222"/><circle cx="104" cy="186" r="5" fill="#999"/><circle cx="306" cy="186" r="13" fill="#222"/><circle cx="306" cy="186" r="5" fill="#999"/>' +
      '<circle cx="352" cy="172" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sqs1)"/>' + stars(10) +
      house(6, 70, 38, "#e9b87a", "#8a4a3a") + house(96, 60, 34, "#9fd3c7", "#5a3a5a") + house(300, 76, 40, "#f2a6c0", "#6a3a4a") +
      palm(200, 132, 1.0) + palm(268, 134, 0.8, "sq-s2") +
      '<rect x="0" y="130" width="400" height="66" fill="#2c2e34"/><path d="M0 176h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#a8a196"/><path d="M0 200h400" stroke="#d8d2c6" stroke-width="3"/>' +
      '<rect x="370" y="100" width="5" height="110" fill="#8a9096"/><rect x="352" y="96" width="42" height="40" rx="3" fill="#fff" stroke="' + BUS + '" stroke-width="3"/><circle cx="373" cy="112" r="9" fill="' + BUS + '"/><text x="373" y="116" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">23</text><text x="373" y="131" text-anchor="middle" ' + font + ' font-size="7" fill="' + BUS + '">STOP</text>' +
      '<rect x="14" y="208" width="330" height="42" rx="3" fill="#111"/><circle cx="38" cy="229" r="13" fill="' + BUS + '"/><text x="38" y="234" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">23</text>' +
      '<text x="60" y="226" ' + font + ' font-size="14" fill="#fff">MOLINA DR / BLOOMINGTON ST</text><text x="60" y="242" ' + font + ' font-size="10" fill="' + GOLD + '">MOLINA · CORPUS CHRISTI</text>',
      sky("sqs1", "#2a1440", "#f08a6a"));
  }

  /* 2. Papagayos in Lake Jackson, the family band's first stage */
  function sqpapagayo() {
    const flags = Array.from({ length: 12 }, (_, i) => '<g class="sq-sway sq-s' + (1 + i % 3) + '"><path d="M' + (12 + i * 32) + ' ' + (30 + Math.abs(6 - i) * 1.2) + 'h22l-2 18h-18z" fill="' + [PINK, GOLD, TEAL, PURP][i % 4] + '"/></g>').join("");
    const tables = [40, 150, 300].map(x => '<ellipse cx="' + (x + 30) + '" cy="214" rx="34" ry="8" fill="#c84a2a"/><rect x="' + (x + 27) + '" y="214" width="6" height="26" fill="#5a3020"/><ellipse cx="' + (x + 30) + '" cy="212" rx="34" ry="7" fill="#f2e2c0"/><rect x="' + (x + 14) + '" y="202" width="8" height="10" rx="2" fill="#7ac35a"/><rect x="' + (x + 38) + '" y="204" width="10" height="8" rx="2" fill="' + GOLD + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#f6d9a8"/><rect x="0" y="0" width="400" height="26" fill="#c84a2a"/>' +
      '<path d="M0 30q100 12 200 0t200 0" stroke="#5a3020" stroke-width="1.5" fill="none"/>' + flags +
      '<rect x="120" y="70" width="210" height="98" fill="#2a1a3a"/><rect x="112" y="160" width="226" height="14" fill="#7a4a2a"/>' +
      '<path d="M120 70h210v8q-105 18 -210 0z" fill="' + RED + '"/>' +
      kid(150, 160, "#3a5aa8", "sq-bob") + '<rect x="140" y="128" width="26" height="6" rx="2" fill="#c98a4a" transform="rotate(-20 153 131)"/>' +
      kid(225, 160, PURP, "sq-bob sq-b2") + '<rect x="224" y="112" width="2" height="48" fill="#888"/><circle cx="225" cy="112" r="4" fill="#444"/>' +
      '<ellipse cx="292" cy="150" rx="18" ry="8" fill="#c0c4cc"/><rect x="274" y="140" width="36" height="12" fill="#e9e2d4"/>' + kid(292, 140, "#c84a2a", "sq-bob") +
      note(250, 100, GOLD) + note(180, 96, PINK, "sq-n2") + note(310, 90, "#fff", "sq-n3") +
      '<rect x="14" y="60" width="86" height="60" rx="6" fill="#111" stroke="' + GOLD + '" stroke-width="3"/><text x="57" y="112" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">PAPAGAYOS</text>' +
      '<g transform="translate(40 62) scale(.85)"><path d="M10 34q-6 -20 6 -28q12 -4 14 10q2 14 -8 22z" fill="' + RED + '"/><circle cx="20" cy="12" r="2" fill="#111"/><path d="M27 12l6 3 -6 3z" fill="' + GOLD + '"/><g class="sq-wing"><path d="M12 18q-10 6 -6 18q8 -4 10 -14z" fill="#2a8ad0"/></g><path d="M14 34l-4 8M20 34l2 8" stroke="' + GOLD + '" stroke-width="2"/></g>' +
      '<rect x="0" y="196" width="400" height="64" fill="#b86a3a"/>' + tables +
      label(232, 6, 160, "PAPAGAYOS · LAKE JACKSON", "THE FAMILY BAND", GOLD));
  }

  /* 3. Q-Productions on Leopard St */
  function sqstudio() {
    const meters = Array.from({ length: 12 }, (_, i) => '<rect class="sq-bl' + (i % 2 ? " sq-bl2" : "") + '" x="' + (40 + i * 14) + '" y="' + (176 + (i * 7) % 14) + '" width="8" height="' + (22 - (i * 7) % 14) + '" fill="' + (i % 4 === 3 ? PINK : i % 3 ? TEAL : GOLD) + '"/>').join("");
    const faders = Array.from({ length: 12 }, (_, i) => '<rect x="' + (42 + i * 14) + '" y="208" width="4" height="26" fill="#333"/><rect x="' + (39 + i * 14) + '" y="' + (212 + (i * 5) % 16) + '" width="10" height="6" rx="1" fill="#ddd"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#2a1838"/>' +
      '<rect x="220" y="20" width="160" height="130" rx="4" fill="#3c2a50" stroke="#6a5a7a" stroke-width="4"/><rect x="228" y="28" width="144" height="114" fill="#1a1024"/>' +
      '<rect x="296" y="60" width="4" height="70" fill="#888"/><rect x="284" y="40" width="28" height="36" rx="13" fill="#c8c8d0" stroke="#666" stroke-width="2"/><path d="M286 52h24M286 60h24M286 68h24" stroke="#888" stroke-width="1.5"/>' +
      '<circle cx="298" cy="58" r="22" fill="none" stroke="#666" stroke-width="2" stroke-dasharray="3 3"/>' +
      '<rect x="20" y="30" width="180" height="90" rx="3" fill="#1a1024" stroke="#555" stroke-width="3"/>' +
      '<g class="sq-reel"><circle cx="70" cy="74" r="24" fill="#333" stroke="#888" stroke-width="2"/><circle cx="70" cy="74" r="6" fill="#888"/><path d="M70 52v44M48 74h44" stroke="#555" stroke-width="3"/></g>' +
      '<g class="sq-reel"><circle cx="150" cy="74" r="24" fill="#333" stroke="#888" stroke-width="2"/><circle cx="150" cy="74" r="6" fill="#888"/><path d="M150 52v44M128 74h44" stroke="#555" stroke-width="3"/></g>' +
      '<path d="M70 98h80" stroke="#6a4a2a" stroke-width="3"/>' +
      '<rect x="20" y="160" width="220" height="86" rx="4" fill="#1a1a24"/>' + meters + faders +
      '<g transform="translate(286 152)"><rect x="6" y="56" width="44" height="10" fill="#a07a1a"/><rect x="22" y="36" width="12" height="20" fill="' + GOLD + '"/><circle cx="28" cy="30" r="10" fill="' + GOLD + '"/>' +
      '<path d="M28 26q-4 -24 18 -30l6 14q-18 2 -18 16z" fill="' + GOLD + '" stroke="#a07a1a" stroke-width="1.5"/><circle class="sq-tw" cx="40" cy="4" r="3" fill="#fff"/></g>' +
      note(240, 120, GOLD) + note(200, 150, PINK, "sq-n2") + note(340, 150, "#fff", "sq-n3") +
      label(232, 228, 162, "Q-PRODUCTIONS · LEOPARD ST", "LIVE! · GOLD ON THE SHELF", GOLD));
  }

  /* 4. Her own designs: the rhinestone bustier */
  function sqboutique() {
    const gems = Array.from({ length: 22 }, (_, i) => '<circle class="sq-tw sq-t' + (1 + i % 3) + '" cx="' + (176 + (i * 13) % 50) + '" cy="' + (100 + (i * 17) % 46) + '" r="1.8" fill="#fff"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#3a1a48"/>' +
      '<rect x="0" y="0" width="400" height="160" fill="url(#sqs4)"/>' +
      '<rect x="20" y="24" width="110" height="130" rx="50" fill="#d8c8e8" stroke="' + GOLD + '" stroke-width="5"/><rect x="28" y="32" width="94" height="114" rx="44" fill="#5a3a7a" opacity=".55"/>' +
      '<path d="M44 60l20 -12M56 76l26 -16" stroke="#fff" stroke-width="3" opacity=".5"/>' +
      '<rect x="197" y="44" width="8" height="16" fill="#cdb8a0"/><path d="M160 72q41 -18 82 0l-6 90h-70z" fill="#e2cfb6"/>' +
      '<path d="M170 96q15 -16 31 -2q16 -14 31 2l-4 52q-27 10 -54 0z" fill="#1a0a24" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<path d="M201 94v58M186 100v50M216 100v50" stroke="' + PURP + '" stroke-width="1.5" opacity=".7"/>' + gems +
      '<rect x="198" y="154" width="6" height="40" fill="#5a4a5a"/><path d="M180 200h42l-21 -10z" fill="#5a4a5a"/>' +
      '<rect x="270" y="150" width="110" height="10" fill="#7a4a2a"/>' +
      '<path d="M280 150v-36q0 -12 12 -12h48q10 0 10 10v8h-40v30z" fill="#e8e2d8" stroke="#888" stroke-width="2"/><rect x="342" y="120" width="10" height="30" fill="#e8e2d8" stroke="#888" stroke-width="2"/>' +
      '<g class="sq-needle"><rect x="345" y="146" width="3" height="10" fill="#bbb"/></g>' +
      '<path d="M250 160q40 -10 90 0q20 30 10 60h-110q-10 -30 10 -60z" fill="' + PURP + '"/><path d="M260 170q40 -8 80 0" stroke="#c9a0ff" stroke-width="2" fill="none"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#5a2a4a"/>' +
      '<g transform="translate(40 172)"><rect x="0" y="0" width="80" height="28" rx="3" fill="#f2e6d8"/><path d="M6 14h68" stroke="' + PINK + '" stroke-width="3" stroke-dasharray="4 3"/></g>' +
      '<circle class="sq-tw" cx="150" cy="40" r="3" fill="#fff"/><circle class="sq-tw sq-t2" cx="260" cy="30" r="2.5" fill="#fff"/><circle class="sq-tw sq-t3" cx="360" cy="56" r="3" fill="#fff"/>' +
      label(14, 226, 170, "HER OWN DESIGNS", "RHINESTONE BUSTIERS", GOLD),
      sky("sqs4", "#6a3a8a", "#3a1a48"));
  }

  /* 5. Molina Dr and Bloomington St */
  function sqcorner() {
    const bay = '<rect x="0" y="118" width="400" height="32" fill="#1a3a5a"/>' + Array.from({ length: 9 }, (_, i) => '<path class="sq-bl' + (i % 2 ? " sq-bl2" : "") + '" d="M' + (20 + i * 44) + ' ' + (130 + (i % 3) * 6) + 'h18" stroke="#ffd98a" stroke-width="1.5" opacity=".6"/>').join("") +
      '<g fill="#1a2236"><rect x="40" y="92" width="18" height="30"/><rect x="62" y="80" width="14" height="42"/><rect x="250" y="86" width="16" height="36"/><rect x="270" y="96" width="22" height="26"/><rect x="300" y="74" width="14" height="48"/><rect x="318" y="74" width="14" height="48"/></g>' +
      '<rect x="140" y="92" width="104" height="18" rx="4" fill="#2a2a44"/><text x="192" y="104.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + PINK + '" class="sq-bl">SELENA AUDITORIUM</text>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + [44, 52, 64, 70, 254, 274, 284, 304, 322, 326][i] + '" y="' + (84 + (i * 11) % 30) + '" width="3" height="3" fill="#ffd98a" opacity=".8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sqs5)"/>' + stars(16) + bay + palm(360, 150, 1.0) + palm(24, 150, 0.8, "sq-s2") +
      '<rect x="0" y="150" width="400" height="110" fill="#2b2b30"/>' +
      brick(130, 118, 270, 102, "#e8a0b8", "#c87a98") +
      tag("SELENA", 150, 184, 42, PURP, -8) + tag("LOS DINOS", 262, 210, 20, GOLD, -4) + tag("PRECIOSA", 146, 214, 15, "#fff", -3) +
      '<g class="sq-sp"><circle cx="350" cy="166" r="3" fill="' + PURP + '" opacity=".7"/></g><g class="sq-sp sq-sp2"><circle cx="356" cy="172" r="2" fill="' + PURP + '" opacity=".6"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#9a958c"/><path d="M0 222h400" stroke="#d8d2c6" stroke-width="3"/>' +
      '<rect x="62" y="92" width="5" height="140" fill="#5a6066"/>' + sign(4, 86, 120, "MOLINA DR") + sign(4, 112, 120, "BLOOMINGTON ST") +
      '<text x="64" y="80" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MOLINA · CORPUS CHRISTI</text>',
      sky("sqs5", "#140f30", "#8a3a6a"));
  }

  window.SCENES = { sqstation, sqpapagayo, sqstudio, sqboutique, sqcorner };
})();
