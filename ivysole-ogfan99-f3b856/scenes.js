/* ivysole scenes (Regions tab: Philadelphia; University City, where Ivy Sole landed in 2011 to study at Penn's Wharton School). CSS classes prefixed iv- (the page's own anim-train is kept).
   1 37th St station on SEPTA's subway-surface trolley tunnel (T lines), under 37th & Spruce on Penn's campus: tiled tunnel, a trolley rolling in.
   2 College Hall, Penn: the green serpentine-stone Gothic hall on College Green where the Wharton grad walked every day; leaves drifting.
   3 The BioPond (Kaskey Park) on Penn's campus: an overgrown garden pond and glass greenhouse, the world of her album Overgrown; flowers blooming, a duck gliding.
   4 West Charlotte, where she grew up (her song "West"): a neighborhood court at dusk, a ball bouncing, the Charlotte skyline's crowned tower behind.
   5 S 37th St and Spruce St: green signs, IVY SOLE tagged on a brick wall, the Quad's red-brick Memorial Tower behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ivleaf{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(26px,130px) rotate(200deg);opacity:0}}.iv-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:ivleaf 4.6s linear infinite}.iv-l2{animation-delay:-1.6s}.iv-l3{animation-delay:-3s}' +
    '@keyframes ivbloom{0%,100%{transform:scale(.75)}50%{transform:scale(1.1)}}.iv-bloom{transform-box:fill-box;transform-origin:50% 50%;animation:ivbloom 3s ease-in-out infinite}.iv-b2{animation-delay:-1s}.iv-b3{animation-delay:-2s}' +
    '@keyframes ivduck{0%,100%{transform:translateX(0)}50%{transform:translateX(70px)}}.iv-duck{animation:ivduck 9s ease-in-out infinite}' +
    '@keyframes ivripple{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.iv-rip{transform-box:fill-box;transform-origin:50% 50%;animation:ivripple 2.6s ease-out infinite}' +
    '@keyframes ivball{0%,100%{transform:translateY(0)}50%{transform:translateY(-46px)}}.iv-ball{animation:ivball 1.1s ease-in-out infinite}' +
    '@keyframes ivblink{0%,100%{opacity:.35}50%{opacity:1}}.iv-blink{animation:ivblink 2.2s ease-in-out infinite}.iv-k2{animation-delay:-1.1s}' +
    '@keyframes ivbike{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.iv-bike{animation:ivbike 9s linear infinite}' +
    '@keyframes ivspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.iv-sp{animation:ivspray 1.4s ease-out infinite}.iv-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#5a3e28"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const bricks = (x0, y0, w, h, base, line) => '<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>' +
    Array.from({ length: Math.floor(h / 8) }, (_, r) => '<path d="M' + x0 + ' ' + (y0 + 8 + r * 8) + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>' +
      Array.from({ length: Math.floor(w / 20) }, (_, i) => '<path d="M' + (x0 + i * 20 + (r % 2) * 10) + ' ' + (y0 + r * 8) + 'v8" stroke="' + line + '" stroke-width="1"/>').join("")).join("");
  /* flower: petals around a center */
  const flower = (x, y, r, c, cls) => '<g class="iv-bloom ' + (cls || "") + '">' + [0, 72, 144, 216, 288].map(a => '<circle cx="' + (x + r * Math.cos(a * Math.PI / 180)).toFixed(1) + '" cy="' + (y + r * Math.sin(a * Math.PI / 180)).toFixed(1) + '" r="' + r + '" fill="' + c + '"/>').join("") + '<circle cx="' + x + '" cy="' + y + '" r="' + (r * 0.8) + '" fill="#f6d36b"/></g>';
  /* ivy vine: little leaves along a path */
  const vine = (pts) => pts.map((p, i) => '<path d="M' + p[0] + ' ' + p[1] + 'q5 -7 10 0q-5 7 -10 0z" fill="' + (i % 2 ? "#4f8f3a" : "#6fb04a") + '"/>').join("");
  const GREEN = "#9fd36b", GOLD = "#f2b84b", PINK = "#e86a8e", TROLLEY = "#5a960a";

  /* 1. 37th St trolley station, under 37th & Spruce */
  function ivstation() {
    const tiles = Array.from({ length: 9 }, (_, r) => Array.from({ length: 27 }, (_, i) => '<rect x="' + (i * 15) + '" y="' + (22 + r * 11) + '" width="14" height="10" fill="' + ((i + r) % 5 ? "#e8e4d6" : "#d6d1bf") + '"/>').join("")).join("");
    const trolley = '<g class="anim-train">' +
      '<rect x="40" y="114" width="300" height="76" rx="10" fill="#eceee8" stroke="#6a7068" stroke-width="2"/>' +
      '<path d="M40 128q0 -14 14 -14h40" fill="none" stroke="#6a7068" stroke-width="2"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (56 + i * 34) + '" y="124" width="26" height="28" rx="3" fill="#24302c"/>').join("") +
      '<rect x="40" y="160" width="300" height="5" fill="#c8102e"/><rect x="40" y="167" width="300" height="5" fill="#1f4e9a"/>' +
      '<rect x="150" y="122" width="30" height="62" rx="2" fill="#c7cbc4" stroke="#6a7068"/><path d="M165 122v62" stroke="#6a7068"/>' +
      '<rect x="270" y="122" width="30" height="62" rx="2" fill="#c7cbc4" stroke="#6a7068"/><path d="M285 122v62" stroke="#6a7068"/>' +
      '<rect x="56" y="104" width="52" height="10" rx="2" fill="#111"/><text x="82" y="112" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">T  37TH ST</text>' +
      '<path d="M200 114l-14 -26M200 114l14 -26M186 88h28" stroke="#2a2a2a" stroke-width="2.5" fill="none"/>' +
      '<circle cx="90" cy="194" r="8" fill="#2a2a2a"/><circle cx="130" cy="194" r="8" fill="#2a2a2a"/><circle cx="250" cy="194" r="8" fill="#2a2a2a"/><circle cx="290" cy="194" r="8" fill="#2a2a2a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#2d2f2c"/>' + tiles +
      '<rect x="0" y="16" width="400" height="6" fill="' + TROLLEY + '"/><rect x="0" y="120" width="400" height="4" fill="' + TROLLEY + '"/>' +
      '<rect x="0" y="0" width="400" height="16" fill="#3c3f3a"/><path d="M0 84h400" stroke="#2a2a2a" stroke-width="1.5"/>' +
      '<g class="iv-blink"><rect x="60" y="4" width="40" height="6" rx="2" fill="#fff6d0"/></g><g class="iv-blink iv-k2"><rect x="300" y="4" width="40" height="6" rx="2" fill="#fff6d0"/></g>' +
      '<rect x="0" y="124" width="400" height="74" fill="#1c1d1b"/>' +
      trolley +
      '<rect x="0" y="198" width="400" height="10" fill="#3a3a36"/><path d="M0 204h400" stroke="#8a8f96" stroke-width="2"/>' +
      '<rect x="0" y="208" width="400" height="52" fill="#9a968c"/><rect x="0" y="208" width="400" height="4" fill="#f0d24a"/>' +
      '<rect x="70" y="220" width="260" height="32" rx="3" fill="#111" stroke="#555" stroke-width="1.5"/>' + badge(82, 236, "T", TROLLEY) +
      '<text x="208" y="243" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">37th St</text>');
  }

  /* 2. College Hall, Penn */
  function ivhall() {
    const win = (x, y, h) => '<path d="M' + x + ' ' + (y + h) + 'v-' + (h - 8) + 'q8 -10 16 0v' + (h - 8) + 'z" fill="#2c3a36" stroke="#c9c3a8" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#iv-s2)"/>' +
      tree(26, 150, 2.4, "#5f8f3e") + tree(376, 150, 2.4, "#6b9a42") +
      /* green serpentine stone hall */
      '<rect x="70" y="72" width="260" height="114" fill="#6f8a63"/>' +
      Array.from({ length: 12 }, (_, r) => Array.from({ length: 14 }, (_, i) => '<rect x="' + (72 + i * 18.4 + (r % 2) * 6) + '" y="' + (74 + r * 9.4) + '" width="' + (12 + (i * 7 + r) % 6) + '" height="7" rx="2" fill="' + ["#6a8560", "#7a9670", "#5f7a56", "#86a07a"][(i + r * 3) % 4] + '"/>').join("")).join("") +
      [92, 128, 250, 286].map(x => win(x, 92, 34) + win(x, 140, 34)).join("") +
      /* central tower with spire */
      '<rect x="172" y="44" width="56" height="142" fill="#5f7a56"/>' +
      '<path d="M166 46l34 -40l34 40z" fill="#4a5a50" stroke="#38463e" stroke-width="2"/>' +
      '<path d="M164 46v-14M236 46v-14" stroke="#4a5a50" stroke-width="5"/>' +
      win(192, 64, 36) +
      '<path d="M182 186v-40q18 -22 36 0v40z" fill="#3a2a1e" stroke="#c9c3a8" stroke-width="3"/>' +
      /* roof */
      '<path d="M62 74l20 -20h70v20zM248 74v-20h70l20 20z" fill="#4a5a50"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#7a9a54"/><path d="M150 260l40 -74h20l40 74z" fill="#b9ab90"/>' +
      '<g class="iv-bike"><circle cx="20" cy="236" r="9" fill="none" stroke="#222" stroke-width="2.5"/><circle cx="50" cy="236" r="9" fill="none" stroke="#222" stroke-width="2.5"/><path d="M20 236l12 -14h12l6 14M32 222l-4 -6h-4M44 222l2 -6h6" stroke="' + GOLD + '" stroke-width="2.5" fill="none"/></g>' +
      '<g class="iv-leaf"><path d="M70 40q6 -6 10 0q-4 6 -10 0z" fill="#d9902a"/></g><g class="iv-leaf iv-l2"><path d="M300 30q6 -6 10 0q-4 6 -10 0z" fill="#c0502a"/></g><g class="iv-leaf iv-l3"><path d="M360 60q6 -6 10 0q-4 6 -10 0z" fill="' + GOLD + '"/></g>',
      sky("iv-s2", "#9cc6e4", "#f4ead0"));
  }

  /* 3. The BioPond, Penn: overgrown garden */
  function ivpond() {
    return svg(
      '<rect width="400" height="260" fill="url(#iv-s3)"/>' +
      /* glass greenhouse */
      '<rect x="230" y="70" width="150" height="80" fill="#cfe6e4" stroke="#f4f4ee" stroke-width="3"/>' +
      '<path d="M222 72l83 -40l83 40z" fill="#bfdcda" stroke="#f4f4ee" stroke-width="3"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (255 + i * 25) + ' 70v80" stroke="#f4f4ee" stroke-width="2"/>').join("") + '<path d="M230 110h150" stroke="#f4f4ee" stroke-width="2"/>' +
      '<path d="M255 70l50 -36M355 70l-50 -36" stroke="#f4f4ee" stroke-width="2"/>' +
      tree(40, 120, 2.8, "#3f7a34") + tree(120, 112, 2.2, "#4f8f3a") + tree(200, 124, 1.8, "#2f6a2c") +
      /* overgrown banks */
      '<path d="M0 150q60 -18 120 -4t140 -2t140 6v110h-400z" fill="#4f8f3a"/>' +
      '<ellipse cx="200" cy="208" rx="170" ry="34" fill="#3d7a86"/><ellipse cx="200" cy="204" rx="150" ry="24" fill="#4f93a0"/>' +
      '<g class="iv-rip"><ellipse cx="120" cy="210" rx="14" ry="4" fill="none" stroke="#cfe9ee" stroke-width="1.5"/></g>' +
      '<g class="iv-rip" style="animation-delay:-1.3s"><ellipse cx="290" cy="204" rx="14" ry="4" fill="none" stroke="#cfe9ee" stroke-width="1.5"/></g>' +
      /* lily pads */
      '<path d="M80 214a10 5 0 1 0 1 0z" fill="#6fb04a"/><path d="M320 218a12 5 0 1 0 1 0z" fill="#6fb04a"/>' +
      '<g class="iv-duck"><path d="M150 214q9 -9 20 0q-2 7 -20 0z" fill="#7a5a3a"/><circle cx="170" cy="208" r="4.5" fill="#2f6a3a"/><path d="M173 208l6 1" stroke="#e8a030" stroke-width="2"/></g>' +
      /* reeds and flowers spilling over */
      Array.from({ length: 14 }, (_, i) => '<path d="M' + (8 + i * 29) + ' 260q4 -26 -2 -44" stroke="#2f6a2c" stroke-width="3" fill="none"/>').join("") +
      flower(30, 226, 5, PINK) + flower(96, 244, 4, GOLD, "iv-b2") + flower(176, 248, 5, "#c48bd8", "iv-b3") + flower(250, 240, 4, PINK, "iv-b2") + flower(330, 246, 5, GOLD) + flower(380, 226, 4, "#c48bd8", "iv-b3") +
      vine([[232, 140], [244, 132], [256, 140], [268, 128], [280, 138], [292, 126]]),
      sky("iv-s3", "#a9d8ee", "#f2f0dc"));
  }

  /* 4. West Charlotte: the neighborhood court at dusk, crowned tower on the skyline */
  function ivwest() {
    const bldg = (x, w, h, c) => '<rect x="' + x + '" y="' + (150 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
      Array.from({ length: Math.floor(h / 12) }, (_, r) => '<g class="iv-blink' + (r % 2 ? ' iv-k2' : '') + '"><rect x="' + (x + 4) + '" y="' + (154 - h + r * 12) + '" width="' + (w - 8) + '" height="3" fill="#f6d78a" opacity=".55"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#iv-s4)"/>' +
      '<circle cx="320" cy="70" r="26" fill="#f8c86a" opacity=".85"/>' +
      bldg(110, 26, 70, "#3a2f4a") + bldg(140, 22, 52, "#42365a") +
      /* tall tower with a crown of spikes */
      '<rect x="176" y="40" width="40" height="110" fill="#4a3d62"/>' + Array.from({ length: 8 }, (_, r) => '<rect x="180" y="' + (48 + r * 12) + '" width="32" height="3" fill="#f6d78a" opacity=".5"/>').join("") +
      '<path d="M174 40h44l-4 -10l-4 6l-4 -12l-4 8l-4 -16l-4 16l-4 -8l-4 12l-4 -6z" fill="#c9b27a"/>' +
      bldg(224, 30, 80, "#3a2f4a") + bldg(258, 22, 46, "#42365a") + bldg(84, 22, 40, "#42365a") +
      '<rect x="0" y="150" width="400" height="12" fill="#2a2a3a"/>' +
      /* chain-link fence */
      '<rect x="0" y="120" width="400" height="44" fill="none"/>' + Array.from({ length: 41 }, (_, i) => '<path d="M' + (i * 10) + ' 122l10 40M' + (i * 10 + 10) + ' 122l-10 40" stroke="#8a8a9a" stroke-width=".8" opacity=".6"/>').join("") +
      '<path d="M0 122h400" stroke="#8a8a9a" stroke-width="2"/>' +
      /* court */
      '<path d="M0 164h400v96h-400z" fill="#2f6a5a"/><path d="M0 164h400" stroke="#f4f4ee" stroke-width="2"/>' +
      '<path d="M120 260q80 -60 160 0" fill="none" stroke="#f4f4ee" stroke-width="3"/><path d="M200 260v-40" stroke="#f4f4ee" stroke-width="2"/>' +
      /* hoop */
      '<rect x="56" y="112" width="6" height="110" fill="#5a5a66"/><rect x="40" y="88" width="46" height="32" fill="#f4f4ee" stroke="#5a5a66" stroke-width="2"/><rect x="54" y="100" width="18" height="12" fill="none" stroke="#c8102e" stroke-width="2"/>' +
      '<ellipse cx="74" cy="122" rx="12" ry="3" fill="none" stroke="#e8603c" stroke-width="2.5"/><path d="M64 123l4 12M74 125v12M84 123l-4 12" stroke="#f4f4ee" stroke-width="1"/>' +
      '<g class="iv-ball"><circle cx="150" cy="214" r="10" fill="#e8762c"/><path d="M140 214h20M150 204v20" stroke="#5a2a10" stroke-width="1.5"/></g>' +
      '<ellipse cx="150" cy="228" rx="10" ry="2.5" fill="#1a3a30"/>' +
      tag("WEST", 280, 238, 30, GREEN, -4),
      sky("iv-s4", "#2e2a5a", "#e8866a"));
  }

  /* 5. S 37th St & Spruce St, the Quad's Memorial Tower behind */
  function ivcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#iv-s5)"/>' +
      /* Memorial Tower: red brick with limestone trim, Jacobean gables */
      '<rect x="150" y="30" width="80" height="110" fill="#9a4434"/>' + bricks(150, 30, 80, 110, "#9a4434", "#843a2c") +
      '<rect x="150" y="30" width="80" height="6" fill="#e2d8c0"/><rect x="150" y="70" width="80" height="4" fill="#e2d8c0"/>' +
      '<path d="M146 30h88v-6h-8v-8h-8v8h-8v-8h-8v8h-8v-8h-8v8h-8v-8h-8v8h-8v-8h-8v8h-8z" fill="#e2d8c0"/>' +
      '<path d="M176 64v-18q14 -16 28 0v18z" fill="#2c3440" stroke="#e2d8c0" stroke-width="2"/>' +
      '<path d="M178 120v-34h24v34z" fill="#2c3440" stroke="#e2d8c0" stroke-width="2"/><path d="M190 86v34M178 103h24" stroke="#e2d8c0" stroke-width="1.5"/>' +
      tree(70, 118, 2.6, "#4f7d3a") + tree(340, 116, 2.6, "#3f6e34") +
      /* brick wall with the tag */
      bricks(0, 122, 400, 90, "#8a3e30", "#74342a") +
      '<rect x="0" y="118" width="400" height="6" fill="#5e2a20"/>' +
      vine([[8, 128], [20, 136], [12, 146], [26, 152], [18, 162], [372, 130], [384, 140], [376, 150], [388, 158]]) +
      tag("IVY SOLE", 26, 182, 44, GREEN, -6) + tag("ALL MINE", 34, 206, 18, GOLD, -3) + tag("LES FLEURS", 150, 207, 18, PINK, -3) + tag("WEST", 268, 200, 22, "#fff", -4) +
      '<rect x="0" y="212" width="400" height="48" fill="#5a5a5e"/><path d="M0 236h400" stroke="#f0d24a" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<rect x="0" y="210" width="400" height="4" fill="#9a968c"/>' +
      '<g class="iv-bike"><circle cx="20" cy="248" r="8" fill="none" stroke="#111" stroke-width="2.5"/><circle cx="48" cy="248" r="8" fill="none" stroke="#111" stroke-width="2.5"/><path d="M20 248l11 -13h11l6 13M31 235l-3 -6h-4M42 235l2 -6h6" stroke="' + PINK + '" stroke-width="2.5" fill="none"/></g>' +
      '<rect x="340" y="98" width="6" height="118" fill="#2f2f2f"/>' + sign(286, 100, 104, "S 37th St") + sign(292, 126, 98, "Spruce St") +
      '<g class="iv-sp"><circle cx="232" cy="164" r="3" fill="' + GREEN + '" opacity=".7"/></g><g class="iv-sp iv-sp2"><circle cx="238" cy="158" r="2" fill="' + GREEN + '" opacity=".6"/></g>',
      sky("iv-s5", "#f0a07a", "#fbe0b0"));
  }

  window.SCENES = { ivstation: ivstation, ivhall: ivhall, ivpond: ivpond, ivwest: ivwest, ivcorner: ivcorner };
})();
