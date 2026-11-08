/* monica scenes (Regions tab: Atlanta; College Park, where Monica Denise Arnold was born and raised; discovered at 11 by Dallas Austin at Center Stage in Atlanta).
   CSS classes prefixed mn- (the page's own anim-train is kept on the bus).
   1 MARTA Route 82 (Camp Creek / South Fulton Pkwy) at the College Park station bus bays: white bus with blue + orange bands.
   2 Center Stage, W Peachtree St in Midtown, where an 11-year-old Monica sang "Greatest Love of All" and Dallas Austin heard her: the marquee, bulbs chasing, a lone mic stand in the spotlight.
   3 Jones Hill Chapel United Methodist Church, Newnan, where she sang from age 2 (drawn as a small white country church): steeple, the bell swinging, pines.
   4 The studio with Dallas Austin (Rowdy Records era, Miss Thang): vocal booth, mic with pop filter, headphones swaying, meters jumping. No names, no logos.
   5 Princeton Ave and Main St in College Park: green signs, MONICA tagged with SO GONE and MISS THANG, a jet climbing over the Gateway Center Arena's curved roof behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mnglow{0%,100%{opacity:.4}50%{opacity:1}}.mn-glow{animation:mnglow 2.2s ease-in-out infinite}.mn-g2{animation-delay:-1.1s}' +
    '@keyframes mnchase{0%,100%{opacity:.25}50%{opacity:1}}.mn-b{animation:mnchase 1s steps(1) infinite}.mn-b2{animation-delay:-.5s}' +
    '@keyframes mnbell{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.mn-bell{transform-box:fill-box;transform-origin:50% 0;animation:mnbell 1.8s ease-in-out infinite}' +
    '@keyframes mnnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(30px,-60px);opacity:0}}.mn-n{animation:mnnote 3s ease-out infinite}.mn-n2{animation-delay:-1s}.mn-n3{animation-delay:-2s}' +
    '@keyframes mnsway{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.mn-sway{transform-box:fill-box;transform-origin:50% 0;animation:mnsway 2.4s ease-in-out infinite}' +
    '@keyframes mnmeter{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}}.mn-m{transform-box:fill-box;transform-origin:50% 100%;animation:mnmeter .9s ease-in-out infinite}.mn-m2{animation-delay:-.3s}.mn-m3{animation-delay:-.6s}' +
    '@keyframes mnjet{from{transform:translate(-80px,40px)}to{transform:translate(460px,-60px)}}.mn-jet{animation:mnjet 9s linear infinite}' +
    '@keyframes mnspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mn-sp{animation:mnspray 1.4s ease-out infinite}.mn-sp2{animation-delay:.45s}' +
    '@keyframes mnbeam{0%,100%{opacity:.35}50%{opacity:.6}}.mn-beam{animation:mnbeam 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const LAV = "#c58bff", GOLD = "#ffcf5a", ROSE = "#ff5c8a", MBLUE = "#0a5fb4", MORANGE = "#f58025";
  const pines = (y, n, c) => Array.from({ length: n }, (_, i) => { const x = i * (400 / (n - 1)) + ((i * 37) % 11); const h = 26 + (i * 13) % 18; return '<path d="M' + x + ' ' + y + 'l-9 0l9 -' + h + 'l9 ' + h + 'z" fill="' + c + '"/>'; }).join("");
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="' + (i % 4 ? "" : "mn-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 56) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>').join("");
  const note = (x, y, c, cls) => '<g class="mn-n ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'v-16l10 -3v16" stroke="' + c + '" stroke-width="2" fill="none"/><ellipse cx="' + (x - 3) + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '"/><ellipse cx="' + (x + 7) + '" cy="' + (y - 3) + '" rx="4" ry="3" fill="' + c + '"/></g>';

  /* 1. MARTA Route 82 at the College Park station bus bays: the long station canopy, the bus pulling in */
  function mnbus() {
    const bus = '<g class="anim-train"><rect x="40" y="104" width="300" height="86" rx="10" fill="#f4f5f7" stroke="#5b6470" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (56 + i * 42) + '" y="116" width="34" height="34" rx="3" fill="#1d2a38"/>').join("") +
      '<rect x="306" y="112" width="30" height="50" rx="3" fill="#24384c"/><rect x="40" y="158" width="300" height="8" fill="' + MBLUE + '"/><rect x="40" y="166" width="300" height="5" fill="' + MORANGE + '"/>' +
      '<rect x="58" y="106" width="150" height="9" rx="2" fill="#111"/><text x="133" y="113.6" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb020">82 CAMP CREEK / S FULTON PKWY</text>' +
      '<circle cx="96" cy="192" r="15" fill="#1b1b1b"/><circle cx="96" cy="192" r="6" fill="#9aa2ad"/><circle cx="282" cy="192" r="15" fill="#1b1b1b"/><circle cx="282" cy="192" r="6" fill="#9aa2ad"/>' +
      '<circle cx="333" cy="178" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mn1)"/>' + pines(96, 16, "#2c5a36") +
      /* station canopy on round columns */
      '<rect x="0" y="54" width="400" height="14" fill="#d9d4c8"/><rect x="0" y="66" width="400" height="4" fill="#9a958a"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="70" width="10" height="70" fill="#cfcabd"/>').join("") +
      '<rect x="150" y="36" width="140" height="20" rx="2" fill="#111"/><text x="220" y="50.5" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">COLLEGE PARK</text>' +
      '<rect x="0" y="140" width="400" height="70" fill="#3e4046"/><rect x="0" y="180" width="400" height="3" fill="#f2c200" opacity=".85"/>' +
      bus +
      '<rect x="0" y="210" width="400" height="50" fill="#a19c92"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 210v50" stroke="#8c877d"/>').join("") +
      '<rect x="360" y="84" width="5" height="146" fill="#4a4f57"/><rect x="344" y="80" width="40" height="44" rx="3" fill="' + MBLUE + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="364" y="95" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS BAY</text><rect x="352" y="100" width="24" height="17" rx="3" fill="' + MORANGE + '"/><text x="364" y="113" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">82</text>',
      sky("mn1", "#8fc9f0", "#fde3b8"));
  }

  /* 2. Center Stage on W Peachtree St: the marquee with chasing bulbs, the house dark, a lone mic stand in the spotlight */
  function mnstage() {
    const bulbs = Array.from({ length: 22 }, (_, i) => '<circle class="mn-b' + (i % 2 ? " mn-b2" : "") + '" cx="' + (64 + i * 13) + '" cy="40" r="3" fill="#fff2b0"/>').join("") +
      Array.from({ length: 22 }, (_, i) => '<circle class="mn-b' + (i % 2 ? "" : " mn-b2") + '" cx="' + (64 + i * 13) + '" cy="88" r="3" fill="#fff2b0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#120a1c"/>' +
      '<rect x="54" y="30" width="292" height="68" rx="4" fill="#2a1840" stroke="' + GOLD + '" stroke-width="3"/>' + bulbs +
      '<text x="200" y="62" text-anchor="middle" ' + font + ' font-size="20" letter-spacing="3" fill="' + GOLD + '">CENTER STAGE</text>' +
      '<text x="200" y="80" text-anchor="middle" ' + font + ' font-size="10" letter-spacing="2" fill="#fff">TALENT NIGHT TONIGHT</text>' +
      /* curtains */
      '<path d="M0 104h70q-10 70 6 156h-76z" fill="#7a1430"/><path d="M400 104h-70q10 70 -6 156h76z" fill="#7a1430"/>' +
      '<path d="M0 104h400v14q-50 12 -100 0q-50 12 -100 0q-50 12 -100 0q-50 12 -100 0z" fill="#9b1c3e"/>' +
      '<path class="mn-beam" d="M186 104L120 230H280L214 104z" fill="#fff6d0"/>' +
      '<rect x="0" y="222" width="400" height="38" fill="#3a2414"/><path d="M0 222h400" stroke="#6b4a2a" stroke-width="3"/><ellipse cx="200" cy="230" rx="84" ry="10" fill="#fff6d0" opacity=".45"/>' +
      '<rect x="198" y="150" width="4" height="76" fill="#333"/><path d="M186 226l14 -6l14 6" stroke="#333" stroke-width="3" fill="none"/><rect x="194" y="138" width="12" height="16" rx="5" fill="#555"/><rect x="195" y="140" width="10" height="6" rx="3" fill="#888"/>' +
      note(240, 170, GOLD) + note(150, 180, LAV, "mn-n2") + note(260, 200, ROSE, "mn-n3"),
      "");
  }

  /* 3. Jones Hill Chapel UMC in Newnan (generic small white church): the steeple, the bell swinging, pines, a gravel lot */
  function mnchapel() {
    return svg(
      '<rect width="400" height="260" fill="url(#mn3)"/>' +
      '<circle cx="64" cy="44" r="18" fill="#fff3c0" class="mn-glow"/>' + pines(150, 18, "#2a5a34") +
      '<rect x="110" y="110" width="180" height="96" fill="#f6f4ee" stroke="#b9b4a8" stroke-width="2"/><path d="M100 112L200 64L300 112z" fill="#5c5f66"/>' +
      Array.from({ length: 11 }, (_, i) => '<path d="M110 ' + (118 + i * 8) + 'h180" stroke="#e2ded4" stroke-width="1"/>').join("") +
      /* steeple */
      '<rect x="180" y="40" width="40" height="40" fill="#f6f4ee" stroke="#b9b4a8" stroke-width="2"/><path d="M176 42L200 0L224 42z" fill="#5c5f66"/>' +
      '<rect x="188" y="50" width="24" height="24" rx="11" fill="#2e2a24"/><g class="mn-bell"><path d="M194 54q6 -6 12 0v10h-12z" fill="' + GOLD + '" stroke="#8a6a1a" stroke-width="1"/><circle cx="200" cy="66" r="2" fill="#8a6a1a"/></g>' +
      '<rect x="182" y="150" width="36" height="56" fill="#7a4a2a"/><path d="M200 150v56" stroke="#5a341c" stroke-width="2"/><path d="M182 150q18 -16 36 0" fill="#7a4a2a"/>' +
      [128, 248].map(x => '<rect x="' + x + '" y="132" width="24" height="40" rx="12" fill="#9fc6e8" stroke="#b9b4a8" stroke-width="2"/><path d="M' + (x + 12) + ' 132v40" stroke="#fff" stroke-width="1.5"/>').join("") +
      '<rect x="0" y="206" width="400" height="54" fill="#cdbf9e"/>' + Array.from({ length: 30 }, (_, i) => '<circle cx="' + ((i * 61) % 400) + '" cy="' + (214 + (i * 17) % 40) + '" r="1.5" fill="#a8997a"/>').join("") +
      note(232, 40, LAV) + note(160, 50, ROSE, "mn-n2") + note(250, 70, GOLD, "mn-n3"),
      sky("mn3", "#7fc0ec", "#f7e7c4"));
  }

  /* 4. The studio: the vocal booth glass, a mic with a pop filter, headphones swaying, the console meters jumping */
  function mnstudio() {
    return svg(
      '<rect width="400" height="260" fill="#1a1426"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="38" height="120" fill="#241a36"/>').join("") +
      '<rect x="40" y="20" width="200" height="110" rx="6" fill="#2d4a66" stroke="#555" stroke-width="5"/><path d="M60 40l40 -14M60 60l70 -30" stroke="#fff" stroke-width="3" opacity=".25"/>' +
      '<rect x="134" y="54" width="4" height="66" fill="#222"/><rect x="128" y="40" width="16" height="22" rx="7" fill="#777"/><circle cx="110" cy="52" r="14" fill="none" stroke="#999" stroke-width="2"/><circle cx="110" cy="52" r="12" fill="#333" opacity=".5"/><path d="M124 52h4" stroke="#999" stroke-width="2"/>' +
      '<g class="mn-sway"><path d="M200 30q0 -10 10 -10h12q10 0 10 10" transform="translate(-10 0)" stroke="#111" stroke-width="4" fill="none"/><rect x="186" y="28" width="10" height="16" rx="4" fill="' + LAV + '"/><rect x="218" y="28" width="10" height="16" rx="4" fill="' + LAV + '"/></g>' +
      /* gold record + plaque on the wall */
      '<rect x="270" y="24" width="96" height="88" rx="3" fill="#3a2c18" stroke="' + GOLD + '" stroke-width="2"/><circle cx="318" cy="62" r="26" fill="' + GOLD + '"/><circle cx="318" cy="62" r="16" fill="none" stroke="#c9a22a"/><circle cx="318" cy="62" r="6" fill="' + ROSE + '"/>' +
      '<rect x="290" y="94" width="56" height="10" fill="#e9d9a8"/><text x="318" y="102" text-anchor="middle" ' + font + ' font-size="7" fill="#3a2c18">MISS THANG</text>' +
      /* console */
      '<path d="M0 176L40 140H360L400 176V260H0z" fill="#2a2a30"/><rect x="40" y="140" width="320" height="10" fill="#3a3a44"/>' +
      Array.from({ length: 24 }, (_, i) => '<rect x="' + (52 + i * 12.5) + '" y="160" width="6" height="40" rx="2" fill="#15151a"/><rect x="' + (50 + i * 12.5) + '" y="' + (168 + (i * 7) % 22) + '" width="10" height="6" rx="1" fill="#ddd"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<rect class="mn-m' + (i % 3 === 1 ? " mn-m2" : i % 3 === 2 ? " mn-m3" : "") + '" x="' + (120 + i * 20) + '" y="214" width="12" height="28" fill="' + (i < 5 ? "#5fd36a" : i < 7 ? GOLD : ROSE) + '"/>').join(""),
      "");
  }

  /* 5. Princeton Ave and Main St, College Park: green signs, a cinderblock wall tagged MONICA, SO GONE, MISS THANG, a jet climbing out over the arena's curved roof */
  function mncorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mn5)"/>' + stars(14) +
      '<path d="M150 116 Q250 80 350 116 Z" fill="#3a4a6a"/><rect x="150" y="112" width="200" height="6" fill="#2a3858"/>' + Array.from({ length: 9 }, (_, i) => '<rect class="mn-glow' + (i % 2 ? " mn-g2" : "") + '" x="' + (170 + i * 20) + '" y="104" width="10" height="5" fill="#9fd8ff" opacity=".7"/>').join("") +
      '<g class="mn-jet"><path d="M0 60l40 -6l12 -10l4 0l-6 12l16 -2l4 -4h3l-3 8l-70 10z" fill="#e8ecf2"/><circle class="mn-glow" cx="2" cy="62" r="1.8" fill="#ff4a4a"/></g>' +
      '<rect x="0" y="116" width="400" height="108" fill="#8c8a84"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M0 ' + (124 + i * 8) + 'h400" stroke="#77756f" stroke-width="1"/>').join("") +
      Array.from({ length: 26 }, (_, i) => '<path d="M' + ((i % 2 ? 8 : 0) + Math.floor(i / 2) * 32) + ' ' + (116 + (i % 13) * 8) + 'v8" stroke="#77756f"/>').join("") +
      tag("MONICA", 16, 192, 46, LAV, -5) + tag("SO GONE", 230, 150, 20, ROSE, -4) + tag("MISS THANG", 30, 216, 18, GOLD, -3) +
      '<g class="mn-sp"><circle cx="236" cy="190" r="3" fill="' + LAV + '" opacity=".7"/></g><g class="mn-sp mn-sp2"><circle cx="242" cy="184" r="2" fill="' + LAV + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55534e"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(296, 94, 104, "Princeton Ave") + sign(316, 120, 72, "Main St"),
      sky("mn5", "#141a3c", "#c9744e"));
  }

  window.SCENES = { mnbus: mnbus, mnstage: mnstage, mnchapel: mnchapel, mnstudio: mnstudio, mncorner: mncorner };
})();
