/* strugglejennings scenes (Regions tab: Memphis + Tennessee; The Nations, West Nashville). CSS classes prefixed sj- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sjflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.sj-flk{animation:sjflick 2.4s infinite}' +
    '@keyframes sjglow{0%,100%{opacity:.45}50%{opacity:1}}.sj-glow{animation:sjglow 2.2s ease-in-out infinite}.sj-g2{animation-delay:-1.1s}' +
    '@keyframes sjbird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-30px)}}.sj-bird{animation:sjbird 9s linear infinite}.sj-bird2{animation-delay:-4.5s}' +
    '@keyframes sjbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.sj-beam{transform-box:fill-box;transform-origin:50% 0%;animation:sjbeam 3.6s ease-in-out infinite}.sj-beam2{animation-delay:-1.8s}' +
    '@keyframes sjstr{0%,100%{transform:translateY(0)}50%{transform:translateY(1.2px)}}.sj-str{animation:sjstr .18s linear infinite}' +
    '@keyframes sjdash{0%{transform:translateY(-60px)}100%{transform:translateY(90px)}}.sj-dash{animation:sjdash 1.1s linear infinite}.sj-d2{animation-delay:-.55s}' +
    '@keyframes sjlite{0%,100%{opacity:.35}50%{opacity:.95}}.sj-lite{animation:sjlite 1.8s ease-in-out infinite}' +
    '@keyframes sjspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sj-sp{animation:sjspray 1.4s ease-out infinite}.sj-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "sj-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const AMBER = "#e0a040", RED = "#c0392b", DENIM = "#7fb3d5", NAVY = "#1f4e79", LIME = "#8cc63f";
  const birds = '<g class="sj-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" stroke="#222" stroke-width="1.6" fill="none"/></g><g class="sj-bird sj-bird2"><path d="M0 60q4 -4 8 0q4 -4 8 0" stroke="#222" stroke-width="1.4" fill="none"/></g>';
  /* small straight-stem digits for the mile marker (no hooked 9s anywhere) */
  const dig = { 0: "M0 0h8v14h-8z", 2: "M0 0h8v7h-8v7h8", 4: "M0 0v7h8M8 0v14" };
  const num = (str, x, y, c) => '<g fill="none" stroke="' + c + '" stroke-width="2" stroke-linejoin="round">' + str.split("").map((d, i) => '<path transform="translate(' + (x + i * 12) + ' ' + y + ')" d="' + dig[d] + '"/>').join("") + '</g>';

  /* 1. WeGo Route 50 Charlotte Pike pulling up to Charlotte Ave and 51st Ave N, the foot of The Nations: low brick storefronts, the blue stop flag */
  function sjstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1b2633"/>').join("");
    const bus = '<g class="anim-train"><rect x="36" y="116" width="316" height="66" rx="10" fill="#f4f6f8" stroke="#7d868f" stroke-width="2"/>' + win +
      '<path d="M36 158h316v12H36z" fill="' + NAVY + '"/><path d="M36 170h316v4H36z" fill="' + LIME + '"/>' +
      '<rect x="326" y="124" width="22" height="40" rx="3" fill="#2b3640"/><rect x="282" y="118" width="70" height="9" rx="2" fill="#111"/><text x="317" y="125.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb347">50 CHARLOTTE</text>' +
      '<circle cx="90" cy="184" r="11" fill="#222"/><circle cx="90" cy="184" r="4" fill="#888"/><circle cx="300" cy="184" r="11" fill="#222"/><circle cx="300" cy="184" r="4" fill="#888"/><circle cx="348" cy="172" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sj1)"/>' + birds +
      '<g><rect x="0" y="70" width="96" height="48" fill="#9a5a3c"/><rect x="96" y="80" width="80" height="38" fill="#d6c7a6"/><rect x="176" y="64" width="110" height="54" fill="#5d6d7e"/><rect x="286" y="76" width="114" height="42" fill="#8e5436"/></g>' +
      [14, 56, 112, 140, 196, 236, 300, 350].map(x => '<rect x="' + x + '" y="90" width="22" height="14" fill="#ffe7a8" opacity=".5"/>').join("") +
      '<path d="M0 40q100 10 200 0t200 0M0 48q100 10 200 0t200 0" stroke="#222" stroke-width="1" fill="none"/>' +
      '<rect x="0" y="116" width="400" height="80" fill="#55565a"/><path d="M0 150h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#b9b3a6"/><path d="M0 196h400" stroke="#8f897c" stroke-width="3"/>' +
      '<rect x="372" y="146" width="5" height="74" fill="#4a4f55"/><rect x="358" y="128" width="34" height="22" rx="2" fill="' + NAVY + '"/><text x="375" y="139" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">WeGo</text><text x="375" y="147" text-anchor="middle" ' + font + ' font-size="6" fill="' + LIME + '">BUS STOP</text>' +
      '<rect x="24" y="204" width="324" height="44" rx="3" fill="#111"/><text x="36" y="222" ' + font + ' font-size="13" fill="#fff">Charlotte Ave &amp; 51st Ave N</text><text x="36" y="239" ' + font + ' font-size="10.5" fill="#cfd8e0">The Nations · Route 50 Charlotte Pike</text>' +
      badge(298, 234, "50", NAVY),
      sky("sj1", "#3a5a8a", "#f2c48a"));
  }

  /* 2. The Nations water tower over the little bungalows of West Nashville, painted with the neighborhood's name, birds crossing the evening sky */
  function sjtower() {
    const house = (x, c) => '<path d="M' + x + ' 196l24 -22l24 22z" fill="#5a4a3a"/><rect x="' + (x + 4) + '" y="196" width="40" height="30" fill="' + c + '"/><rect x="' + (x + 18) + '" y="206" width="10" height="20" fill="#3a2a1e"/><rect class="sj-glow" x="' + (x + 8) + '" y="202" width="7" height="7" fill="#ffd98a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sj2)"/>' + birds +
      /* legs and bracing */
      '<path d="M170 210l14 -110M230 210l-14 -110M150 210l30 -110M250 210l-30 -110" stroke="#6b7480" stroke-width="5"/>' +
      '<path d="M178 170h44M184 136h32M170 196l52 -52M230 196l-52 -52" stroke="#6b7480" stroke-width="2.5"/>' +
      '<rect x="196" y="100" width="8" height="110" fill="#7a838e"/>' +
      /* the tank: rounded bowl, catwalk, cap */
      '<path d="M140 60h120v34q0 20 -60 24q-60 -4 -60 -24z" fill="#d9dfe4" stroke="#7a838e" stroke-width="2"/><path d="M140 60q60 -34 120 0z" fill="#c4ccd3" stroke="#7a838e" stroke-width="2"/><rect x="196" y="24" width="8" height="10" fill="#7a838e"/>' +
      '<rect x="136" y="92" width="128" height="3" fill="#5a636e"/>' +
      '<rect x="146" y="64" width="108" height="24" rx="3" fill="' + DENIM + '"/><text x="200" y="81" text-anchor="middle" ' + font + ' font-size="13" fill="#fff" letter-spacing="1">THE NATIONS</text>' +
      '<circle class="sj-lite" cx="200" cy="22" r="3" fill="#ff4d4d"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#5d7a46"/>' + house(10, "#e8dcc0") + house(66, "#a8c4d8") + house(282, "#d8a878") + house(338, "#c8d8b0") +
      '<rect x="0" y="226" width="400" height="34" fill="#4a4c50"/>' +
      '<rect x="96" y="6" width="208" height="20" rx="3" fill="#111" opacity=".75"/><text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">THE NATIONS · WEST NASHVILLE</text>',
      sky("sj2", "#4a6a9a", "#f4b07a"));
  }

  /* 3. The outlaw's guitar (he's Waylon's grandson): a black-bodied electric under the stage lights, its body wrapped in white tooled leather, strings shimmering */
  function sjoutlaw() {
    return svg(
      '<rect width="400" height="260" fill="#0e0a08"/>' +
      '<path class="sj-beam" d="M120 0l-60 230h120z" fill="#fff2c8" opacity=".14"/><path class="sj-beam sj-beam2" d="M280 0l-60 230h120z" fill="' + AMBER + '" opacity=".16"/>' +
      '<rect x="110" y="0" width="20" height="10" fill="#333"/><rect x="270" y="0" width="20" height="10" fill="#333"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#3a2414"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 40) + ' 214v46" stroke="#2a180c" stroke-width="2"/>').join("") +
      /* stand */
      '<path d="M200 214l-30 -60M200 214l30 -60M200 214v-70" stroke="#555" stroke-width="4"/>' +
      /* the guitar: single-cut body, black, with a white tooled-leather cover and flower swirls */
      '<g transform="rotate(-8 200 140)"><path d="M168 120q-30 0 -30 30q0 36 34 40h56q30 -4 30 -36q0 -18 -18 -22q-12 -2 -16 -12z" fill="#151515" stroke="#c9a24a" stroke-width="2"/>' +
      '<path d="M174 128q-26 2 -26 24q0 28 28 32h48q22 -4 22 -26q0 -10 -12 -14l-24 0q-10 -8 -14 -16z" fill="#f2ecdc"/>' +
      '<g fill="none" stroke="#8a6a3a" stroke-width="1.4"><path d="M162 150q8 -10 16 0q8 10 16 0"/><path d="M208 170q8 -10 16 0q8 10 16 0"/><circle cx="170" cy="168" r="5"/><circle cx="232" cy="148" r="5"/><path d="M190 180q6 -6 12 0"/></g>' +
      '<rect x="190" y="40" width="16" height="104" fill="#c98a4a"/><rect x="186" y="18" width="24" height="26" rx="4" fill="#151515"/>' +
      '<g class="sj-str">' + [192, 196, 200, 204].map(x => '<path d="M' + x + ' 22v156" stroke="#e8e8e8" stroke-width=".8"/>').join("") + '</g>' +
      '<rect x="182" y="166" width="32" height="6" fill="#999"/><rect x="184" y="150" width="28" height="6" fill="#333"/></g>' +
      tag("OUTLAW", 22, 70, 34, AMBER, -6) + tag("WAYLON'S GRANDSON", 236, 236, 15, "#fff", -3) +
      '<rect x="120" y="6" width="160" height="0" fill="none"/>',
      "");
  }

  /* 4. "Old Lost Road": a two-lane Tennessee highway at night, yellow lines rushing under the headlights, the green mile marker, hills on the horizon */
  function sjroad() {
    return svg(
      '<rect width="400" height="260" fill="url(#sj4)"/>' + stars(20) +
      '<path d="M0 120q60 -30 120 -10t140 -14t140 10v14H0z" fill="#1c2a24"/><path d="M0 128q80 -20 160 -4t240 -6v12H0z" fill="#142018"/>' +
      '<path d="M190 128h20L380 260H20z" fill="#2a2c30"/>' +
      '<path d="M196 128L80 260M204 128L320 260" stroke="#e8e4dc" stroke-width="2" opacity=".7"/>' +
      '<g class="sj-dash"><path d="M199 150l-4 26M201 150l4 26" stroke="#f2c200" stroke-width="3"/></g><g class="sj-dash sj-d2"><path d="M198 170l-6 34M202 170l6 34" stroke="#f2c200" stroke-width="3.5"/></g>' +
      '<path d="M200 128L40 260h120zM200 128L240 260h120z" fill="#fff6c8" opacity=".07"/>' +
      /* the mile marker: tall green post with white digits */
      '<rect x="318" y="150" width="6" height="70" fill="#5a636e"/><rect x="298" y="112" width="46" height="44" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="321" y="125" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">MILE</text>' + num("204", 304, 132, "#fff") +
      '<rect x="56" y="150" width="4" height="40" fill="#5a636e"/><rect x="40" y="132" width="36" height="22" rx="2" fill="#fff" stroke="#111" stroke-width="1.5"/><text x="58" y="147" text-anchor="middle" ' + font + ' font-size="9" fill="#111">WEST</text>' +
      '<circle class="sj-lite" cx="196" cy="128" r="2" fill="#fff6c2"/><circle class="sj-lite" cx="204" cy="128" r="2" fill="#fff6c2"/>' +
      '<rect x="110" y="6" width="180" height="20" rx="3" fill="#111" opacity=".75"/><text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">OLD LOST ROAD · OUT OF TOWN</text>',
      sky("sj4", "#05070f", "#24304a"));
  }

  /* 5. 51st Ave N and Centennial Blvd in The Nations: green signs, STRUGGLE tagged on the brick, the neighborhood's tall grain silo (painted, faces left out) behind */
  function sjcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sj5)"/>' + stars(12) +
      /* the silo: twin concrete tubes with a head house, painted in soft color bands */
      '<rect x="150" y="34" width="40" height="100" fill="#d8d2c4"/><rect x="190" y="34" width="40" height="100" fill="#cfc8b8"/><rect x="160" y="18" width="60" height="18" fill="#bdb6a6"/>' +
      '<rect x="154" y="50" width="72" height="60" fill="' + DENIM + '" opacity=".55"/><rect x="154" y="70" width="72" height="18" fill="' + AMBER + '" opacity=".5"/>' +
      '<g fill="#22263a"><rect x="0" y="92" width="110" height="44"/><rect x="250" y="86" width="70" height="50"/><rect x="326" y="100" width="74" height="36"/></g>' +
      '<rect x="0" y="132" width="400" height="92" fill="#7a4232"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#6a3628" stroke-width="1"/>').join("") +
      tag("STRUGGLE", 18, 192, 42, AMBER, -6) + tag("JENNINGS", 40, 214, 22, "#fff", -4) + tag("THE NATIONS", 196, 210, 20, DENIM, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="344" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(298, 98, 96, "51st Ave N") + sign(276, 124, 118, "Centennial Blvd") +
      '<g class="sj-sp"><circle cx="150" cy="160" r="3" fill="' + AMBER + '" opacity=".7"/></g><g class="sj-sp sj-sp2"><circle cx="156" cy="154" r="2" fill="' + AMBER + '" opacity=".6"/></g>',
      sky("sj5", "#1a2440", "#d88a50"));
  }

  window.SCENES = { sjstop: sjstop, sjtower: sjtower, sjoutlaw: sjoutlaw, sjroad: sjroad, sjcorner: sjcorner };
})();
