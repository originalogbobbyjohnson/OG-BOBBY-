/* postmalone scenes (Regions: Houston + Texas / Genres: pop; Grapevine, TX). CSS classes prefixed posty- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes postyglow{0%,100%{opacity:.35}50%{opacity:1}}.posty-glow{animation:postyglow 2.2s ease-in-out infinite}.posty-g2{animation-delay:-1.1s}' +
    '@keyframes postychase{0%,100%{opacity:1}50%{opacity:.2}}.posty-ch{animation:postychase .8s steps(1) infinite}.posty-ch2{animation-delay:-.4s}' +
    '@keyframes postycloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.posty-cl{animation:postycloud 14s ease-in-out infinite alternate}' +
    '@keyframes postyhand{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.posty-hand{transform-origin:200px 52px;animation:postyhand 12s linear infinite}' +
    '@keyframes postysail{0%,100%{transform:translateX(0)}50%{transform:translateX(26px)}}.posty-sail{animation:postysail 7s ease-in-out infinite}.posty-s2{animation-delay:-3.5s}' +
    '@keyframes postybob{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}.posty-bob{animation:postybob 2.4s ease-in-out infinite}' +
    '@keyframes postyflash{0%,92%,100%{opacity:0}94%{opacity:1}}.posty-fl{animation:postyflash 2.6s linear infinite}.posty-fl2{animation-delay:-1.3s}' +
    '@keyframes postyspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.posty-sp{animation:postyspray 1.4s ease-out infinite}.posty-sp2{animation-delay:.45s}' +
    '@keyframes postytwk{0%,100%{opacity:.2}50%{opacity:1}}.posty-tw{animation:postytwk 1.8s ease-in-out infinite}.posty-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const bricks = (x, y, w, h, base, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 6; yy < y + h; yy += 6) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".7" opacity=".55"/>'; return s; };
  const oak = (x, base, r, c) => '<rect x="' + (x - 3) + '" y="' + (base - r) + '" width="6" height="' + r + '" fill="#4a3322"/><circle cx="' + x + '" cy="' + (base - r - r * 0.35) + '" r="' + r * 0.8 + '" fill="' + (c || "#3f6a32") + '"/><circle cx="' + (x - r * 0.6) + '" cy="' + (base - r) + '" r="' + r * 0.55 + '" fill="' + (c || "#3f6a32") + '"/><circle cx="' + (x + r * 0.6) + '" cy="' + (base - r) + '" r="' + r * 0.55 + '" fill="' + (c || "#3f6a32") + '"/>';
  const star = (x, y, r, c, cls) => { let p = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; p += (i ? "L" : "M") + (x + rr * Math.cos(a)).toFixed(1) + " " + (y + rr * Math.sin(a)).toFixed(1); } return '<path d="' + p + 'z" fill="' + c + '" class="' + (cls || "") + '"/>'; };
  const GOLD = "#f2c94c", RED = "#c8102e", BLUE = "#7ec8e3", CREAM = "#f3e7cf", LIME = "#e8dcc0";

  /* the Grapevine Main clock tower (pale limestone, copper cap, clock face) */
  const tower = (x, top, s, cls) => {
    const w = 34 * s, h = 150 * s;
    return '<g><rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + h + '" fill="' + LIME + '" stroke="#a89878" stroke-width="1"/>' +
      '<path d="M' + (x - 4 * s) + ' ' + top + 'h' + (w + 8 * s) + 'l-' + (6 * s) + ' -' + (8 * s) + 'h-' + (w - 4 * s) + 'z" fill="#c8b890"/>' +
      '<path d="M' + (x + 2 * s) + ' ' + (top - 8 * s) + 'l' + (w / 2 - 2 * s) + ' -' + (26 * s) + 'l' + (w / 2 - 2 * s) + ' ' + (26 * s) + 'z" fill="#4f8f7a"/>' +
      '<circle cx="' + (x + w / 2) + '" cy="' + (top + 18 * s) + '" r="' + (11 * s) + '" fill="#fff" stroke="#3a3020" stroke-width="' + (1.5 * s) + '"/>' +
      '<path d="M' + (x + w / 2) + ' ' + (top + 18 * s) + 'v-' + (8 * s) + 'M' + (x + w / 2) + ' ' + (top + 18 * s) + 'h' + (6 * s) + '" stroke="#222" stroke-width="' + (1.4 * s) + '"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 8 * s) + '" y="' + (top + (38 + i * 26) * s) + '" width="' + (18 * s) + '" height="' + (16 * s) + '" fill="#3a4a5a" class="' + (i % 2 ? "posty-glow" : "") + '"/>').join("") + '</g>';
  };

  /* 1. Grapevine Main station: the red TEXRail train sliding in, the black station sign, the clock tower behind */
  function postystation() {
    let oaks = "";
    for (let i = 0; i < 7; i++) oaks += oak(14 + i * 62, 142, 18 + (i * 5) % 8, i % 2 ? "#3f6a32" : "#4c7a3a");
    const car = (x) => '<rect x="' + x + '" y="150" width="120" height="46" rx="6" fill="#eef0f2" stroke="#8a8e94" stroke-width="1.5"/><rect x="' + x + '" y="182" width="120" height="8" fill="' + RED + '"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + 8 + i * 22) + '" y="156" width="16" height="16" rx="2" fill="#2a3a4a"/>').join("") + '<circle cx="' + (x + 18) + '" cy="198" r="6" fill="#222"/><circle cx="' + (x + 102) + '" cy="198" r="6" fill="#222"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#posty1)"/>' +
      '<g class="posty-cl"><ellipse cx="70" cy="30" rx="36" ry="8" fill="#fff" opacity=".6"/><ellipse cx="250" cy="22" rx="40" ry="8" fill="#fff" opacity=".5"/></g>' +
      '<path d="M0 142q100 -14 200 -4t200 -4v20h-400z" fill="#7a9a54"/>' + oaks + tower(300, 52, 0.62) +
      /* hotel block behind the platform */
      bricks(186, 96, 100, 50, "#c9a27a", "#8a6a4a") + Array.from({ length: 4 }, (_, i) => '<rect x="' + (194 + i * 23) + '" y="104" width="14" height="14" fill="#2a3a4a"/><rect x="' + (194 + i * 23) + '" y="124" width="14" height="14" fill="#2a3a4a" class="' + (i % 2 ? "posty-glow" : "") + '"/>').join("") +
      /* black station sign */
      '<rect x="38" y="64" width="4" height="62" fill="#333"/><rect x="146" y="64" width="4" height="62" fill="#333"/><rect x="18" y="40" width="152" height="36" rx="2" fill="#111"/><path d="M18 46h152" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="94" y="62" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">GRAPEVINE/MAIN</text>' +
      '<rect x="78" y="65" width="32" height="9" rx="2" fill="' + RED + '"/><text x="94" y="72" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">TEXRAIL</text>' +
      '<rect x="0" y="144" width="400" height="6" fill="#d8d0c0"/><rect x="0" y="200" width="400" height="60" fill="#5a544c"/><path d="M0 204h400M0 214h400" stroke="#9a9a9a" stroke-width="2"/>' +
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20 + 4) + '" y="202" width="6" height="14" fill="#4a3322"/>').join("") +
      '<g class="anim-train"><g transform="translate(140 0)"><path d="M0 150h60v46h-74q-6 0 -4 -8l6 -26q4 -12 16 -12z" fill="#eef0f2" stroke="#8a8e94" stroke-width="1.5"/><path d="M-14 182h74v8h-76z" fill="' + RED + '"/><path d="M-6 154h30v16h-34z" fill="#2a3a4a"/><circle cx="-10" cy="186" r="3.5" fill="#fff6c0" class="posty-glow"/><circle cx="8" cy="198" r="6" fill="#222"/><circle cx="48" cy="198" r="6" fill="#222"/>' + car(64) + car(190) + '</g></g>' +
      '<rect x="0" y="238" width="400" height="22" fill="#c8c0aa"/><path d="M0 238h400" stroke="' + GOLD + '" stroke-width="3"/>',
      sky("posty1", "#5aa8e0", "#d6eef8"));
  }

  /* 2. The Palace Theatre on Main Street, downtown Grapevine: the tall neon blade sign, chasing marquee bulbs, the brick storefronts */
  function postypalace() {
    let bulbs = "";
    for (let i = 0; i < 18; i++) bulbs += '<circle cx="' + (122 + i * 9) + '" cy="122" r="2.2" fill="#ffe9a0" class="posty-ch ' + (i % 2 ? "posty-ch2" : "") + '"/>';
    const letters = "PALACE".split("").map((ch, i) => '<text x="200" y="' + (34 + i * 13) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#ff6a5a" class="posty-glow ' + (i % 2 ? "posty-g2" : "") + '">' + ch + '</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#posty2)"/>' +
      star(40, 22, 2, "#fff", "posty-tw") + star(340, 30, 2.2, "#fff", "posty-tw posty-tw2") + star(290, 14, 1.6, "#fff", "posty-tw") +
      bricks(0, 70, 104, 140, "#8a4a34", "#5a2a1c") + bricks(296, 64, 104, 146, "#b07a4a", "#7a4a2a") +
      '<rect x="14" y="86" width="22" height="30" fill="#2a3a4a" class="posty-glow"/><rect x="62" y="86" width="22" height="30" fill="#2a3a4a"/><rect x="312" y="80" width="22" height="30" fill="#2a3a4a"/><rect x="356" y="80" width="22" height="30" fill="#2a3a4a" class="posty-glow posty-g2"/>' +
      '<rect x="10" y="150" width="84" height="46" fill="#2a2a34"/><rect x="306" y="150" width="84" height="46" fill="#2a2a34"/>' +
      /* the theatre front: cream stucco, the blade sign up the middle */
      '<rect x="104" y="58" width="192" height="152" fill="' + CREAM + '"/><path d="M104 58h192v8h-192z" fill="#c8b890"/>' +
      '<rect x="186" y="18" width="28" height="86" rx="4" fill="#1a1a2a" stroke="' + GOLD + '" stroke-width="2"/>' + letters +
      '<path d="M112 116h176l-8 40h-160z" fill="#1a1a2a" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="136" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">TONIGHT</text><text x="200" y="150" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">LIVE MUSIC ON MAIN</text>' +
      '<rect x="148" y="164" width="104" height="46" fill="#3a2016"/><rect x="154" y="168" width="44" height="42" fill="#5a3a2a"/><rect x="202" y="168" width="44" height="42" fill="#5a3a2a"/>' +
      '<rect x="116" y="166" width="24" height="34" fill="#2a2030" stroke="' + GOLD + '"/><rect x="260" y="166" width="24" height="34" fill="#2a2030" stroke="' + GOLD + '"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#4a4844"/><rect x="0" y="208" width="400" height="4" fill="#d8d0c0"/><path d="M0 236h400" stroke="#e8d070" stroke-width="2" stroke-dasharray="18 14"/>',
      sky("posty2", "#101634", "#4a3060"));
  }

  /* 3. The big dome stadium out in Arlington where his dad ran the concessions: the silver roof, the two giant steel arches, glass walls, camera flashes */
  function postydome() {
    let crowd = "";
    for (let i = 0; i < 40; i++) crowd += '<circle cx="' + (6 + i * 10) + '" cy="' + (226 + (i % 3) * 3) + '" r="4" fill="' + ["#2a2a3a", "#3a3044", "#24303a"][i % 3] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#posty3)"/>' +
      '<g class="posty-cl"><ellipse cx="90" cy="36" rx="40" ry="8" fill="#fff" opacity=".5"/><ellipse cx="320" cy="28" rx="34" ry="7" fill="#fff" opacity=".45"/></g>' +
      /* glass wall */
      '<path d="M40 196l16 -64h288l16 64z" fill="#6a8aa8"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (60 + i * 21) + ' 132l' + (-4 + i * 0.6) + ' 64" stroke="#9ab8d0" stroke-width="1.2"/>').join("") +
      '<path d="M48 164h304" stroke="#9ab8d0" stroke-width="1.2"/>' +
      /* silver dome roof */
      '<path d="M50 134q150 -70 300 0z" fill="#c8ccd2" stroke="#8a8e94" stroke-width="1.5"/><path d="M110 112q90 -36 180 0" stroke="#e8ecf0" stroke-width="3" fill="none"/><path d="M150 104h100" stroke="#8a8e94" stroke-width="10" opacity=".5"/>' +
      /* the two steel arches over the roof */
      '<path d="M22 200q178 -230 356 0" stroke="#d8dce2" stroke-width="7" fill="none"/><path d="M22 200q178 -230 356 0" stroke="#8a8e94" stroke-width="1.5" fill="none" stroke-dasharray="4 8"/>' +
      '<path d="M38 200q162 -204 324 0" stroke="#b8bcc4" stroke-width="5" fill="none"/>' +
      '<rect x="12" y="196" width="22" height="12" fill="#6a6e74"/><rect x="366" y="196" width="22" height="12" fill="#6a6e74"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#4a4a4a"/>' + crowd +
      '<circle cx="80" cy="150" r="3" fill="#fff" class="posty-fl"/><circle cx="210" cy="170" r="3" fill="#fff" class="posty-fl posty-fl2"/><circle cx="300" cy="146" r="3" fill="#fff" class="posty-fl"/>' +
      '<rect x="0" y="238" width="400" height="22" fill="#2a2a2a"/><path d="M0 240h400" stroke="' + GOLD + '" stroke-width="2" stroke-dasharray="14 10"/>',
      sky("posty3", "#3a6ab0", "#f0b878"));
  }

  /* 4. Lake Grapevine at sunset: sailboats drifting, the dock, a guitar case on the boards */
  function postylake() {
    const sail = (x, y, c, cls) => '<g class="posty-sail ' + (cls || "") + '"><g class="posty-bob"><path d="M' + x + ' ' + y + 'v-44l26 40z" fill="#fff"/><path d="M' + (x - 2) + ' ' + y + 'v-36l-16 32z" fill="' + c + '"/><path d="M' + (x - 22) + ' ' + (y + 2) + 'h52l-8 8h-38z" fill="#3a2a1a"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#posty4)"/>' +
      '<circle cx="290" cy="112" r="30" fill="#ffd36b"/><circle cx="290" cy="112" r="44" fill="#ffd36b" opacity=".22"/>' +
      '<path d="M0 126q60 -10 120 -2t140 -4t140 4v10h-400z" fill="#3a4a3a"/>' +
      '<rect x="0" y="132" width="400" height="128" fill="url(#posty4w)"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (250 + (i % 2) * 14) + ' ' + (140 + i * 10) + 'h' + (60 - i * 4) + '" stroke="#ffd36b" stroke-width="2" opacity=".6" class="posty-glow ' + (i % 2 ? "posty-g2" : "") + '"/>').join("") +
      sail(110, 168, RED, "") + sail(330, 158, BLUE, "posty-s2") +
      /* dock */
      '<path d="M0 214h200l20 -10h-220z" fill="#7a5a3a"/><rect x="0" y="214" width="200" height="8" fill="#5a3a22"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (10 + i * 36) + '" y="222" width="6" height="38" fill="#4a3018"/>').join("") +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 20) + ' 214l' + 4 + ' -10" stroke="#5a3a22" stroke-width="1"/>').join("") +
      /* guitar case */
      '<path d="M60 206q-4 -10 6 -12h40q8 -6 16 -2q12 2 12 8q0 6 -12 8q-8 4 -16 -2h-40q-8 0 -6 0z" fill="#1a1a1a" stroke="' + GOLD + '" stroke-width="1.5"/>',
      sky("posty4", "#4a3a7a", "#f2a070") + '<linearGradient id="posty4w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d0806a"/><stop offset="1" stop-color="#2a3a5a"/></linearGradient>');
  }

  /* 5. His corner: Main St and Northwest Hwy in downtown Grapevine, a wall tagged POSTY, the Grapevine Main clock tower behind */
  function postycorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#posty5)"/>' +
      star(40, 24, 2.2, "#fff", "posty-tw") + star(150, 14, 2, "#fff", "posty-tw posty-tw2") + star(250, 30, 2.4, "#fff", "posty-tw") +
      tower(180, 44, 0.78) +
      bricks(0, 96, 150, 72, "#a8553a", "#6e2a1c") + bricks(250, 104, 150, 64, "#c9a27a", "#8a6a4a") +
      '<rect x="16" y="110" width="20" height="26" fill="#2a3a4a" class="posty-glow"/><rect x="60" y="110" width="20" height="26" fill="#2a3a4a"/><rect x="104" y="110" width="20" height="26" fill="#2a3a4a" class="posty-glow posty-g2"/>' +
      '<rect x="0" y="168" width="400" height="56" fill="#c8b89a"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (176 + i * 9) + 'h400" stroke="#a8987a" stroke-width="1"/>').join("") +
      '<rect x="0" y="164" width="400" height="5" fill="#efe6d2"/>' +
      tag("POSTY", 14, 212, 40, GOLD, -5) + tag("AUSTIN POST", 150, 206, 18, BLUE, -3) + tag("BEERBONGS", 268, 214, 15, RED, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="380" y="60" width="6" height="164" fill="#2f2f2f"/>' +
      sign(290, 60, 104, "MAIN ST") + sign(290, 86, 104, "NW HWY") +
      '<g class="posty-sp"><circle cx="126" cy="190" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="posty-sp posty-sp2"><circle cx="132" cy="184" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("posty5", "#141a44", "#e0906a"));
  }

  window.SCENES = { postystation: postystation, postypalace: postypalace, postydome: postydome, postylake: postylake, postycorner: postycorner };
})();
