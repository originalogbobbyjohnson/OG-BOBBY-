/* eve scenes (Regions tab: Philadelphia; West Philly / Mill Creek). CSS classes prefixed ev- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes evsway{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.ev-sway{transform-box:fill-box;transform-origin:50% 100%;animation:evsway 2.8s ease-in-out infinite}.ev-sway2{animation-delay:-1.4s}' +
    '@keyframes evdrop{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(22px);opacity:0}}.ev-drop{animation:evdrop 1s linear infinite}.ev-drop2{animation-delay:-.5s}' +
    '@keyframes evnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(20px,-64px);opacity:0}}.ev-note{animation:evnote 3.2s ease-out infinite}.ev-n2{animation-delay:-1.1s}.ev-n3{animation-delay:-2.2s}' +
    '@keyframes evflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.ev-flag{transform-box:fill-box;transform-origin:0 50%;animation:evflag 1.4s ease-in-out infinite}' +
    '@keyframes evbus{from{transform:translateX(-200px)}to{transform:translateX(560px)}}.ev-bus{animation:evbus 9s linear infinite}' +
    '@keyframes evglow{0%,100%{opacity:.5}50%{opacity:1}}.ev-glow{animation:evglow 2.4s ease-in-out infinite}.ev-glow2{animation-delay:-1.2s}' +
    '@keyframes evsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.ev-sp{animation:evsp 1.4s ease-out infinite}.ev-sp2{animation-delay:.5s}' +
    '@keyframes evbird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-30px)}}.ev-bird{animation:evbird 11s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "ev-glow") + '" cx="' + ((i * 89) % 400) + '" cy="' + (8 + (i * 47) % 64) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, c, cls) => '<g class="ev-note ' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="0" rx="5" ry="3.6" fill="' + c + '"/><rect x="3.6" y="-18" width="2" height="18" fill="' + c + '"/><path d="M5.6 -18q8 4 6 12" stroke="' + c + '" stroke-width="2" fill="none"/></g></g>';
  const paw = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="' + c + '"><ellipse cx="0" cy="4" rx="6" ry="5"/><circle cx="-7" cy="-4" r="2.6"/><circle cx="-2.5" cy="-8" r="2.6"/><circle cx="2.5" cy="-8" r="2.6"/><circle cx="7" cy="-4" r="2.6"/></g>';
  const PINK = "#e8418a", GOLD = "#f5d76e", TEAL = "#2bb3a6", MFL = "#0f75bc";

  /* 1. 46th St on the Market-Frankford Line: the El up over Market St at 46th, open-air platform, the steel canopy, the black sign with the blue MFL tile, the silver car with the blue stripe sliding in, Mill Creek rooftops below */
  function evstation() {
    const roofs = Array.from({ length: 12 }, (_, i) => '<rect x="' + (i * 34) + '" y="' + (150 + (i % 3) * 6) + '" width="32" height="40" fill="' + (i % 2 ? "#7a3d2e" : "#8a4a36") + '"/><rect x="' + (i * 34) + '" y="' + (148 + (i % 3) * 6) + '" width="32" height="4" fill="#4a2a20"/>').join("");
    const tr = '<g class="anim-train"><rect x="20" y="118" width="330" height="62" rx="6" fill="#cfd4da" stroke="#717880" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 44) + '" y="128" width="30" height="22" rx="2" fill="#1d2833"/>').join("") +
      '<rect x="20" y="156" width="330" height="6" fill="' + MFL + '"/><rect x="330" y="122" width="20" height="56" rx="4" fill="#a8aeb5"/><circle cx="342" cy="170" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ev1)"/>' +
      '<g fill="#93a7bd"><rect x="30" y="70" width="18" height="80"/><rect x="52" y="54" width="14" height="96"/><rect x="72" y="80" width="22" height="70"/></g>' + roofs +
      '<rect x="0" y="40" width="400" height="10" fill="#3a4148"/>' + [30, 140, 260, 370].map(x => '<rect x="' + (x - 4) + '" y="50" width="8" height="150" fill="#4b545c"/>').join("") +
      '<path d="M0 50h400" stroke="#2a3036" stroke-width="2"/>' + tr +
      '<rect x="0" y="180" width="400" height="10" fill="#f2c200"/><rect x="0" y="190" width="400" height="22" fill="#9a958c"/>' +
      '<rect x="0" y="212" width="400" height="48" fill="#5b636b"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="212" width="3" height="48" fill="#454c53"/>').join("") +
      '<rect x="0" y="212" width="400" height="5" fill="#3a4148"/>' +
      '<rect x="196" y="58" width="4" height="24" fill="#2a2a2a"/><rect x="236" y="58" width="4" height="24" fill="#2a2a2a"/>' +
      '<rect x="150" y="76" width="140" height="30" rx="3" fill="#111"/><text x="164" y="97" ' + font + ' font-size="16" fill="#fff">46th St</text>' + badge(234, 91, "MFL", MFL) +
      '<g class="ev-bird"><path d="M0 30q5 -5 10 0q5 -5 10 0" stroke="#2a3036" stroke-width="2" fill="none"/></g>',
      sky("ev1", "#8fc1ea", "#f0e6d0"));
  }

  /* 2. Mill Creek Farm at 49th & Brown: raised beds, the hoop house, sunflowers swaying, a watering can dripping, a bright patterned mural on the rowhouse side wall */
  function evfarm() {
    const sun = (x, h, cls) => '<g class="ev-sway ' + cls + '"><path d="M' + x + ' 206v-' + h + '" stroke="#3f7d2a" stroke-width="3"/><path d="M' + x + ' ' + (206 - h / 2) + 'q-10 -6 -14 2q8 4 14 -2z" fill="#4f9a34"/>' +
      Array.from({ length: 10 }, (_, i) => { const a = i * 36 * Math.PI / 180; return '<ellipse cx="' + (x + Math.cos(a) * 9).toFixed(1) + '" cy="' + (206 - h + Math.sin(a) * 9).toFixed(1) + '" rx="5" ry="3" transform="rotate(' + (i * 36) + ' ' + (x + Math.cos(a) * 9).toFixed(1) + ' ' + (206 - h + Math.sin(a) * 9).toFixed(1) + ')" fill="#f6c21c"/>'; }).join("") +
      '<circle cx="' + x + '" cy="' + (206 - h) + '" r="6" fill="#5a3412"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ev2)"/>' +
      '<rect x="0" y="60" width="150" height="150" fill="#8a4a36"/>' +
      '<rect x="10" y="74" width="130" height="120" fill="' + TEAL + '"/><circle cx="104" cy="104" r="16" fill="' + GOLD + '"/><path d="M10 150q40 -24 130 -6v50H10z" fill="#3f7d2a"/><path d="M10 194l40 -60 30 40 25 -34 35 54z" fill="' + PINK + '"/><path d="M10 194l30 -30 30 30z" fill="#f5d76e"/>' +
      '<path d="M18 86h40M18 94h28" stroke="#fff" stroke-width="3" opacity=".7"/>' +
      '<path d="M220 206v-66q70 -60 140 0v66z" fill="#e8eef0" opacity=".85" stroke="#9aa6aa" stroke-width="2"/>' + [250, 290, 330].map(x => '<path d="M' + x + ' 206v-' + (x === 290 ? 96 : 84) + '" stroke="#b9c3c6" stroke-width="1.5"/>').join("") +
      '<rect x="0" y="206" width="400" height="54" fill="#6b4a2c"/>' +
      [[20, 214], [150, 220], [270, 214]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="110" height="18" fill="#9b6a3c" stroke="#5e3c1e" stroke-width="2"/><g fill="#4f9a34">' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (b[0] + 12 + i * 17) + ' ' + b[1] + 'q-6 -12 0 -16q6 4 0 16z"/>').join("") + '</g>').join("") +
      sun(170, 90, "") + sun(196, 112, "ev-sway2") + sun(150, 70, "ev-sway2") + sun(380, 84, "") +
      '<g transform="translate(116 196)"><path d="M0 0h22l-2 18h-18z" fill="#7aa2b8" stroke="#3e5a6a" stroke-width="2"/><path d="M22 4l14 -8" stroke="#3e5a6a" stroke-width="3"/><path d="M2 2q11 -16 18 0" stroke="#3e5a6a" stroke-width="2" fill="none"/></g>' +
      '<g class="ev-drop"><circle cx="152" cy="192" r="1.8" fill="#bfe6ff"/></g><g class="ev-drop ev-drop2"><circle cx="156" cy="196" r="1.8" fill="#bfe6ff"/></g>' +
      '<g class="ev-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>',
      sky("ev2", "#7cc0ef", "#fdf3d8"));
  }

  /* 3. Martin Luther King High School on Stenton Ave in Germantown: the long low 1970s brick school, ribbon windows, the flag waving, choir notes floating out of the music room */
  function evking() {
    const win = (y) => Array.from({ length: 14 }, (_, i) => '<rect x="' + (40 + i * 23) + '" y="' + y + '" width="17" height="14" fill="#2c3e4c"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ev3)"/>' +
      '<path d="M0 120q80 -30 160 -10t240 -6v40H0z" fill="#5f8d4a"/>' +
      '<rect x="30" y="100" width="340" height="96" fill="#9a5a3e"/><rect x="30" y="96" width="340" height="8" fill="#6e3c28"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M30 ' + (110 + i * 7) + 'h340" stroke="#874c33" stroke-width="1"/>').join("") +
      '<rect x="30" y="112" width="340" height="20" fill="#c9c2b4"/>' + win(115) + '<rect x="30" y="148" width="340" height="18" fill="#c9c2b4"/>' + win(150) +
      '<rect x="166" y="168" width="68" height="28" fill="#6e3c28"/><rect x="174" y="172" width="24" height="24" fill="#2c3e4c"/><rect x="202" y="172" width="24" height="24" fill="#2c3e4c"/>' +
      '<rect x="110" y="76" width="180" height="18" rx="2" fill="#f4efe4" stroke="#6e3c28" stroke-width="2"/><text x="200" y="89" text-anchor="middle" ' + font + ' font-size="9.5" fill="#4a2a1c" letter-spacing="1">MARTIN LUTHER KING HIGH</text>' +
      '<rect x="0" y="196" width="400" height="64" fill="#a9a59c"/><rect x="0" y="196" width="400" height="4" fill="#d8d3c8"/><path d="M0 236h400" stroke="#8e8a82" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<rect x="356" y="40" width="3" height="156" fill="#ccc"/><g class="ev-flag"><rect x="359" y="42" width="30" height="18" fill="#c8102e"/><rect x="359" y="42" width="12" height="10" fill="#1c3f94"/><path d="M371 46h18M371 50h18M359 55h30" stroke="#fff" stroke-width="1.6"/></g>' +
      note(80, 112, PINK, "") + note(96, 108, GOLD, "ev-n2") + note(70, 104, "#fff", "ev-n3") +
      '<g class="ev-bird"><path d="M0 50q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>',
      sky("ev3", "#86c4ee", "#eef4f2"));
  }

  /* 4. Germantown Avenue, where she lived from 13: the Belgian-block street with the old trolley rails, gray fieldstone colonial houses with white shutters, gas-style lamps, the Route 23 bus rolling up the Avenue */
  function evgtown() {
    const house = (x, w, h) => '<rect x="' + x + '" y="' + (190 - h) + '" width="' + w + '" height="' + h + '" fill="#8d8a80"/>' +
      Array.from({ length: Math.floor(h / 10) }, (_, r) => Array.from({ length: Math.floor(w / 14) }, (_, c) => '<rect x="' + (x + 2 + c * 14 + (r % 2) * 5) + '" y="' + (192 - h + r * 10) + '" width="11" height="7" rx="2" fill="' + ((r + c) % 3 ? "#9a968b" : "#7b786f") + '"/>').join("")).join("") +
      '<path d="M' + (x - 4) + ' ' + (190 - h) + 'l' + (w / 2 + 4) + ' -26l' + (w / 2 + 4) + ' 26z" fill="#4a4a50"/>' +
      [0.25, 0.75].map(f => '<rect x="' + (x + w * f - 8) + '" y="' + (204 - h) + '" width="16" height="22" fill="#2c3438"/><rect x="' + (x + w * f - 14) + '" y="' + (204 - h) + '" width="5" height="22" fill="#f4f1e8"/><rect x="' + (x + w * f + 9) + '" y="' + (204 - h) + '" width="5" height="22" fill="#f4f1e8"/>').join("") +
      '<rect x="' + (x + w / 2 - 9) + '" y="160" width="18" height="30" fill="#5b2a22"/><rect x="' + (x + w / 2 - 12) + '" y="156" width="24" height="5" fill="#f4f1e8"/>';
    const cobble = Array.from({ length: 6 }, (_, r) => Array.from({ length: 26 }, (_, c) => '<rect x="' + (c * 16 + (r % 2) * 8 - 8) + '" y="' + (206 + r * 9) + '" width="14" height="7" rx="1.5" fill="' + ((r + c) % 3 ? "#6d6a66" : "#5d5a57") + '"/>').join("")).join("");
    const bus = '<g class="ev-bus"><rect x="0" y="176" width="150" height="40" rx="5" fill="#f2f2ee" stroke="#7a7d82" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (10 + i * 22) + '" y="182" width="18" height="14" rx="2" fill="#26323c"/>').join("") +
      '<rect x="0" y="200" width="150" height="4" fill="#1c5aa6"/><rect x="0" y="205" width="150" height="3" fill="#c8102e"/><rect x="130" y="180" width="18" height="10" fill="#111"/><text x="139" y="188" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb000">23</text>' +
      '<circle cx="28" cy="216" r="7" fill="#111"/><circle cx="122" cy="216" r="7" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ev4)"/>' +
      '<circle cx="330" cy="50" r="20" fill="#fff3c4" opacity=".8"/>' +
      '<g fill="#3f6b3a"><circle cx="20" cy="110" r="30"/><circle cx="380" cy="100" r="32"/></g>' +
      house(10, 112, 74) + house(136, 128, 84) + house(278, 112, 70) +
      '<rect x="0" y="190" width="400" height="14" fill="#b5b0a6"/>' + cobble +
      '<path d="M0 222h400M0 230h400M0 246h400M0 254h400" stroke="#a7a9ab" stroke-width="2"/>' +
      [124, 268].map(x => '<rect x="' + (x - 2) + '" y="126" width="4" height="66" fill="#1d1d1d"/><path d="M' + (x - 8) + ' 126h16l-3 -14h-10z" fill="#1d1d1d"/><rect class="ev-glow" x="' + (x - 5) + '" y="114" width="10" height="11" fill="#ffe08a"/>').join("") +
      bus,
      sky("ev4", "#f2a65a", "#fbe3c0"));
  }

  /* 5. N 48th St and Brown St, Mill Creek: West Philly brick rowhouse wall, green signs, EVE tagged big with her paw prints, the Center City towers lit up in the distance behind */
  function evcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ev5)"/>' + stars(16) +
      '<g fill="#2c2a46"><rect x="40" y="70" width="34" height="70"/><rect x="80" y="46" width="28" height="94"/><rect x="118" y="80" width="30" height="60"/><rect x="250" y="62" width="30" height="78"/><rect x="290" y="84" width="40" height="56"/></g>' +
      '<path d="M176 140V26q14 -14 28 0v114z" fill="#3c4a72"/><rect class="ev-glow" x="184" y="30" width="12" height="104" fill="#9fd0ff" opacity=".5"/>' +
      '<path d="M210 140V46l26 -8v102z" fill="#465886"/><path d="M210 46l26 -8" stroke="#c6e2ff" stroke-width="2"/>' +
      '<rect class="ev-glow ev-glow2" x="190" y="20" width="0" height="0"/>' +
      [[86, 60], [92, 76], [124, 92], [256, 76], [262, 96], [298, 98], [312, 110], [48, 84]].map(p => '<rect x="' + p[0] + '" y="' + p[1] + '" width="5" height="6" fill="#ffe7a0" opacity=".6"/>').join("") +
      '<rect x="0" y="136" width="400" height="90" fill="#7a3d2e"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#68332a" stroke-width="1"/>').join("") +
      '<rect x="0" y="132" width="400" height="6" fill="#5a2c22"/>' +
      tag("EVE", 28, 202, 64, PINK, -6) + tag("FIRST LADY", 168, 178, 24, GOLD, -4) + tag("WHO'S THAT GIRL", 158, 212, 18, "#fff", -3) +
      paw(150, 160, 1.1, GOLD) + paw(134, 186, 0.9, GOLD) + paw(330, 192, 1, PINK) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="ev-bus"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + TEAL + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + TEAL + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(300, 98, 96, "N 48th St") + sign(304, 124, 88, "Brown St") +
      '<g class="ev-sp"><circle cx="112" cy="168" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="ev-sp ev-sp2"><circle cx="118" cy="160" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("ev5", "#1c1236", "#d8607a"));
  }

  window.SCENES = { evstation: evstation, evfarm: evfarm, evking: evking, evgtown: evgtown, evcorner: evcorner };
})();
