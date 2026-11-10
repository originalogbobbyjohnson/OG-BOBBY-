/* muscadinebloodline scenes (Regions: More of the South / Genres: country; Mobile, Alabama duo Charlie Muncaster + Gary Stanton). CSS classes prefixed mbl- (the page's own anim-train is kept).
   Sources: Holler "Home Sweet Home: Muscadine Bloodline" (both from Mobile; they met through Soul Kitchen, the Dauphin St music hall, 219 Dauphin St, whose owner Charlie's mom babysat;
   Fairhope across the bay, the Gulf beaches, the old forts); their song "Azalea Blooms" (Mobile = the Azalea City; azaleas, Spanish moss, Gulf coast afternoons); label Stancaster Music (independent).
   Landmarks already used by other Mobile kits (RSA tower, USS Alabama, Bienville Square, Cathedral, Fort Conde, the causeway, Mardi Gras, Wave/Amtrak stops) are left out. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#e0b04a", PURP = "#7b2d6e", PINK = "#e88fb0", CREAM = "#f6ecd8", MOSS = "#9aa58a";
  const css = '<style>' +
    '@keyframes mblglow{0%,100%{opacity:.45}50%{opacity:1}}.mbl-glow{animation:mblglow 2.4s ease-in-out infinite}.mbl-g2{animation-delay:-1.2s}' +
    '@keyframes mblnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-58px);opacity:0}}.mbl-nt{animation:mblnote 3.2s ease-out infinite}.mbl-nt2{animation-delay:-1.1s}.mbl-nt3{animation-delay:-2.2s}' +
    '@keyframes mblcloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.mbl-cl{animation:mblcloud 14s ease-in-out infinite alternate}' +
    '@keyframes mblhop{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.mbl-hop{animation:mblhop .55s ease-in-out infinite}.mbl-h2{animation-delay:-.27s}' +
    '@keyframes mblflow{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.mbl-flow{animation:mblflow 4s linear infinite}' +
    '@keyframes mblsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.mbl-sway{transform-box:fill-box;transform-origin:50% 0;animation:mblsway 3.4s ease-in-out infinite}.mbl-s2{animation-delay:-1.7s}' +
    '@keyframes mblfall{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-30px,120px) rotate(200deg);opacity:0}}.mbl-pt{animation:mblfall 5s linear infinite}.mbl-p2{animation-delay:-1.7s}.mbl-p3{animation-delay:-3.4s}' +
    '@keyframes mblfly{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.mbl-fly{animation:mblfly 12s linear infinite}' +
    '@keyframes mblspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mbl-sp{animation:mblspray 1.4s ease-out infinite}.mbl-sp2{animation-delay:.45s}' +
    '@keyframes mbltwk{0%,100%{opacity:.2}50%{opacity:1}}.mbl-tw{animation:mbltwk 1.8s ease-in-out infinite}.mbl-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="mbl-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  /* a live oak: wide low limbs, dark crown, Spanish moss hanging and swaying */
  const oak = (x, y, s, c) => {
    const moss = Array.from({ length: 7 }, (_, i) => { const mx = x - 46 * s + i * 15 * s, my = y - 4 * s + (i % 3) * 4 * s; return '<path d="M' + mx + ' ' + my + 'q' + (3 * s) + ' ' + (12 * s) + ' 0 ' + (22 * s) + 'q-' + (2 * s) + ' ' + (6 * s) + ' ' + (1 * s) + ' ' + (10 * s) + '" stroke="' + MOSS + '" stroke-width="' + (2.4 * s) + '" fill="none" class="mbl-sway' + (i % 2 ? ' mbl-s2' : '') + '"/>'; }).join("");
    return '<path d="M' + (x - 5 * s) + ' ' + (y + 40 * s) + 'q2 -30 -30 -46M' + (x + 4 * s) + ' ' + (y + 40 * s) + 'q0 -28 34 -44M' + x + ' ' + (y + 40 * s) + 'v-40" stroke="#3e2e22" stroke-width="' + (8 * s) + '" fill="none" stroke-linecap="round"/>' +
      '<ellipse cx="' + x + '" cy="' + (y - 18 * s) + '" rx="' + (64 * s) + '" ry="' + (24 * s) + '" fill="' + c + '"/><ellipse cx="' + (x - 34 * s) + '" cy="' + (y - 26 * s) + '" rx="' + (30 * s) + '" ry="' + (16 * s) + '" fill="' + c + '"/><ellipse cx="' + (x + 36 * s) + '" cy="' + (y - 28 * s) + '" rx="' + (30 * s) + '" ry="' + (16 * s) + '" fill="' + c + '"/>' + moss;
  };
  /* an azalea bush: a mound covered in blooms */
  const azalea = (x, y, w, h, c, c2) => {
    let b = '<ellipse cx="' + x + '" cy="' + y + '" rx="' + w + '" ry="' + h + '" fill="#3f6b34"/>';
    for (let i = 0; i < 22; i++) { const a = i * 2.39, r = ((i * 37) % 100) / 100; const bx = x + Math.cos(a) * w * .82 * r, by = y - Math.abs(Math.sin(a)) * h * .8 * r + h * .15; b += '<circle cx="' + bx.toFixed(1) + '" cy="' + by.toFixed(1) + '" r="' + (3.6 + (i % 3)) + '" fill="' + (i % 4 ? c : c2) + '"/>'; }
    return b;
  };
  const water = (y, h, c) => '<rect x="0" y="' + y + '" width="400" height="' + h + '" fill="' + c + '"/><g class="mbl-flow">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (y + 6 + (i % 3) * 7) + 'q10 -3 20 0" stroke="#fde7c0" stroke-width="1.4" fill="none" opacity=".6"/>').join("") + '</g>';

  /* ROOM 0: rolling into Mobile on I-10 West, the green guide sign, the band van pulling in under the pines */
  function mblroad() {
    const pines = Array.from({ length: 24 }, (_, i) => { const x = 6 + i * 17, h = 34 + (i * 11) % 18; return '<rect x="' + (x - 1.5) + '" y="' + (150 - h) + '" width="3" height="' + h + '" fill="#4a3a2a"/><ellipse cx="' + x + '" cy="' + (150 - h) + '" rx="9" ry="6" fill="#2f5a3a"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mbl1)"/>' +
      '<g class="mbl-cl"><ellipse cx="70" cy="34" rx="38" ry="9" fill="#fff" opacity=".6"/><ellipse cx="290" cy="22" rx="44" ry="9" fill="#fff" opacity=".5"/></g>' +
      pines + '<rect x="0" y="150" width="400" height="110" fill="#6f8a4a"/>' +
      '<path d="M0 260L170 160h60L400 260z" fill="#3e3e40"/><path d="M200 160v100" stroke="#f4f4f2" stroke-width="3" stroke-dasharray="12 10"/>' +
      '<path d="M0 260L170 160M400 260L230 160" stroke="#f2d04a" stroke-width="2"/>' +
      /* overhead-style green guide sign on two posts */
      '<rect x="250" y="100" width="5" height="76" fill="#6a6e72"/><rect x="372" y="100" width="5" height="76" fill="#6a6e72"/>' +
      '<rect x="234" y="44" width="158" height="68" rx="5" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      /* interstate shield (I-10) */
      '<path d="M246 52h24v4q0 14 -12 20q-12 -6 -12 -20z" fill="#1a3f8f" stroke="#fff" stroke-width="1.5"/><path d="M246 52h24v5h-24z" fill="#c8202a"/><text x="258" y="71" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">10</text>' +
      '<text x="278" y="66" ' + font + ' font-size="11" fill="#fff">WEST</text>' +
      '<text x="313" y="92" text-anchor="middle" ' + font + ' font-size="19" fill="#fff">Mobile</text>' +
      '<text x="313" y="106" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">DOWNTOWN</text>' +
      /* white "Azalea City" welcome sign on the left */
      '<rect x="36" y="96" width="4" height="64" fill="#6a6e72"/><rect x="84" y="96" width="4" height="64" fill="#6a6e72"/>' +
      '<rect x="22" y="76" width="80" height="34" rx="4" fill="' + CREAM + '" stroke="' + PURP + '" stroke-width="2"/><text x="62" y="91" text-anchor="middle" ' + font + ' font-size="8" fill="' + PURP + '">WELCOME TO</text><text x="62" y="104" text-anchor="middle" ' + font + ' font-size="9.5" fill="' + PURP + '">AZALEA CITY</text>' +
      azalea(62, 160, 40, 12, PINK, "#fff") +
      /* the band van pulling in */
      '<g class="anim-train"><rect x="60" y="182" width="150" height="50" rx="9" fill="' + PURP + '" stroke="#2a1a2a" stroke-width="2"/>' +
      '<path d="M178 186h26q6 0 6 8v14h-32z" fill="#a8cde0" stroke="#2a2a2a" stroke-width="1.5"/>' +
      '<rect x="72" y="190" width="28" height="18" rx="2" fill="#a8cde0"/><rect x="106" y="190" width="28" height="18" rx="2" fill="#a8cde0"/><rect x="140" y="190" width="28" height="18" rx="2" fill="#a8cde0"/>' +
      '<rect x="60" y="214" width="150" height="5" fill="' + GOLD + '"/><circle cx="90" cy="234" r="10" fill="#1d1d1d"/><circle cx="182" cy="234" r="10" fill="#1d1d1d"/><circle cx="90" cy="234" r="4" fill="#9aa"/><circle cx="182" cy="234" r="4" fill="#9aa"/>' +
      '<rect x="40" y="200" width="22" height="22" rx="2" fill="#4a3428"/><rect x="40" y="200" width="22" height="4" fill="' + GOLD + '"/>' +
      '<circle cx="206" cy="222" r="3" fill="#ffe28a" class="mbl-glow"/></g>',
      sky("mbl1", "#6ea6d8", "#f8d8a8"));
  }

  /* ROOM 1: Soul Kitchen on Dauphin St, the downtown music hall where Charlie and Gary met; iron-lace balcony, marquee, the crowd outside */
  function mblsoul() {
    const people = Array.from({ length: 13 }, (_, i) => { const x = 20 + i * 29, c = ["#2a2a34", "#3a2a2a", "#26303a"][i % 3]; return '<g class="mbl-hop' + (i % 2 ? ' mbl-h2' : '') + '"><circle cx="' + x + '" cy="' + (222 - (i % 3) * 2) + '" r="7" fill="' + c + '"/><path d="M' + (x - 10) + ' 248q10 -24 20 0z" fill="' + c + '"/></g>'; }).join("");
    let bricks = ""; for (let i = 0; i < 24; i++) bricks += '<path d="M60 ' + (30 + i * 7) + 'h280" stroke="#5a2418" stroke-width=".8" opacity=".45"/>';
    const lace = Array.from({ length: 14 }, (_, i) => '<path d="M' + (72 + i * 19) + ' 110q9 -12 19 0" stroke="#1a1a1a" stroke-width="1.6" fill="none"/><circle cx="' + (81 + i * 19) + '" cy="104" r="2" fill="none" stroke="#1a1a1a" stroke-width="1.2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mbl2)"/>' +
      '<rect x="60" y="24" width="280" height="186" fill="#9a4a36"/>' + bricks +
      '<rect x="56" y="20" width="288" height="10" fill="#4a2a1a"/>' +
      /* upstairs tall windows */
      [86, 140, 194, 248, 302].map(x => '<rect x="' + (x - 12) + '" y="40" width="24" height="44" rx="10" fill="#f3c47a" class="mbl-glow"/><path d="M' + x + ' 40v44" stroke="#3a2214" stroke-width="2"/>').join("") +
      /* cast-iron balcony */
      '<rect x="64" y="92" width="272" height="6" fill="#1a1a1a"/>' + lace + '<rect x="64" y="110" width="272" height="3" fill="#1a1a1a"/>' +
      [70, 200, 330].map(x => '<rect x="' + (x - 2) + '" y="98" width="4" height="112" fill="#1a1a1a"/>').join("") +
      /* marquee */
      '<rect x="120" y="120" width="160" height="26" rx="3" fill="#1c1420" stroke="' + GOLD + '" stroke-width="2"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + (126 + i * 10) + '" cy="123" r="1.6" fill="' + GOLD + '" class="mbl-tw' + (i % 2 ? ' mbl-tw2' : '') + '"/>').join("") +
      '<text x="200" y="139" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">SOUL KITCHEN</text>' +
      /* doors with warm light, the stage glow inside */
      '<rect x="160" y="152" width="80" height="58" fill="#f0a860"/><rect x="160" y="152" width="80" height="58" fill="none" stroke="#2a1a10" stroke-width="3"/><path d="M200 152v58" stroke="#2a1a10" stroke-width="3"/>' +
      '<rect x="88" y="156" width="52" height="40" fill="#3a2a40"/><rect x="260" y="156" width="52" height="40" fill="#3a2a40"/>' +
      '<text x="114" y="174" text-anchor="middle" ' + font + ' font-size="7" fill="' + PINK + '">TONIGHT</text><text x="114" y="186" text-anchor="middle" ' + font + ' font-size="6.5" fill="' + CREAM + '">LIVE MUSIC</text>' +
      '<text x="286" y="174" text-anchor="middle" ' + font + ' font-size="7" fill="' + PINK + '">DAUPHIN ST</text><text x="286" y="186" text-anchor="middle" ' + font + ' font-size="6.5" fill="' + CREAM + '">MOBILE AL</text>' +
      '<rect x="0" y="210" width="400" height="50" fill="#5a5650"/><rect x="0" y="208" width="400" height="4" fill="#d8d4cc"/>' +
      note(186, 160, "#5a2a14") + note(214, 156, PURP, "mbl-nt2") + note(200, 146, GOLD, "mbl-nt3") +
      people,
      sky("mbl2", "#1e1a3a", "#7a4a6a"));
  }

  /* ROOM 2: azaleas in full bloom under the live oaks and Spanish moss, a footbridge over the bayou (Bellingrath-style garden south of Mobile) */
  function mblazalea() {
    const petals = [[120, 40], [260, 30], [340, 60], [60, 70], [200, 20]].map((p, i) => '<ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="3" ry="2" fill="' + PINK + '" class="mbl-pt mbl-p' + (i % 3 + 1) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mbl3)"/>' +
      oak(90, 96, 1.2, "#2f5a34") + oak(320, 88, 1.1, "#335f38") +
      '<rect x="0" y="150" width="400" height="110" fill="#5f8a44"/>' +
      water(176, 30, "#4a6a5a") +
      /* arched footbridge */
      '<path d="M130 190q70 -44 140 0" stroke="#f4efe6" stroke-width="8" fill="none"/><path d="M130 190q70 -60 140 0" stroke="#f4efe6" stroke-width="2.5" fill="none"/>' +
      Array.from({ length: 9 }, (_, i) => { const x = 138 + i * 15.5; const y = 190 - Math.sin((x - 130) / 140 * Math.PI) * 22; return '<path d="M' + x + ' ' + y.toFixed(1) + 'v-12" stroke="#f4efe6" stroke-width="2"/>'; }).join("") +
      azalea(40, 214, 52, 22, "#e0407a", "#fff") + azalea(140, 226, 46, 18, PINK, "#c02a6a") + azalea(260, 222, 50, 20, "#fff", PINK) + azalea(364, 214, 52, 22, "#c02a6a", PINK) +
      azalea(360, 160, 36, 11, PINK, "#fff") + azalea(40, 158, 40, 12, "#fff", "#e0407a") +
      petals,
      sky("mbl3", "#9fc8e8", "#f8e4c8"));
  }

  /* ROOM 3: a Gulf coast afternoon across the bay, the long municipal pier at Fairhope, lamp posts, pelicans gliding over glassy water */
  function mblpier() {
    const posts = Array.from({ length: 12 }, (_, i) => { const x = 150 + i * 22; return '<rect x="' + x + '" y="150" width="3" height="40" fill="#5a4636"/>'; }).join("");
    const lamps = Array.from({ length: 6 }, (_, i) => { const x = 160 + i * 44; return '<rect x="' + x + '" y="118" width="2" height="24" fill="#2a2a2a"/><circle cx="' + (x + 1) + '" cy="116" r="4" fill="#ffe8a0" class="mbl-glow' + (i % 2 ? ' mbl-g2' : '') + '"/>'; }).join("");
    const pelican = (x, y) => '<path d="M' + x + ' ' + y + 'q8 -8 16 0q8 -8 16 0" stroke="#3a2a2a" stroke-width="2.2" fill="none"/><path d="M' + (x + 16) + ' ' + y + 'l6 2" stroke="#d8a040" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mbl4)"/>' +
      '<circle cx="320" cy="78" r="28" fill="#ffd27a" opacity=".95" class="mbl-glow"/>' +
      '<path d="M0 132q100 -8 200 -2t200 -4v10h-400z" fill="#6a6a8a" opacity=".6"/>' +
      water(132, 128, "#4a7aa0") +
      '<path d="M220 140q100 -2 180 0" stroke="#ffd27a" stroke-width="3" opacity=".6" fill="none" class="mbl-glow"/><path d="M240 160q80 -3 160 0" stroke="#ffd27a" stroke-width="2" opacity=".45" fill="none" class="mbl-glow mbl-g2"/>' +
      /* the pier deck from the shore out to the end */
      '<path d="M0 156L150 146H400V152H150L0 172z" fill="#c8b8a0"/>' + posts + lamps +
      '<rect x="150" y="140" width="250" height="3" fill="#7a6a5a"/>' +
      /* the shore: sand, a little rose garden and a live oak */
      '<path d="M0 150Q60 150 130 176V260H0z" fill="#e8d6b0"/>' + oak(42, 120, .8, "#2f5a34") +
      azalea(80, 186, 26, 10, PINK, "#fff") +
      '<g class="mbl-fly">' + pelican(0, 70) + pelican(46, 84) + pelican(90, 64) + '</g>',
      sky("mbl4", "#f6b48a", "#fbe0b0"));
  }

  /* ROOM 4: Dauphin St and N Joachim St downtown, a brick wall tagged, the Saenger Theatre's tall blade sign and cream facade behind, a live oak with moss */
  function mblcorner() {
    let bricks = ""; for (let r = 0; r < 12; r++) for (let c = 0; c < 15; c++) bricks += '<rect x="' + ((r % 2 ? -12 : 0) + c * 28) + '" y="' + (132 + r * 8) + '" width="26" height="6.5" fill="' + ["#9a4a36", "#8a3e2e", "#a65440"][(r + c) % 3] + '"/>';
    const letters = "SAENGER".split("").map((l, i) => '<text x="210" y="' + (40 + i * 12) + '" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '" class="mbl-tw' + (i % 2 ? ' mbl-tw2' : '') + '">' + l + '</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mbl5)"/>' +
      /* Saenger Theatre: cream terra cotta facade with arched windows, vertical blade sign */
      '<rect x="140" y="56" width="150" height="80" fill="#ecdcbc"/><rect x="136" y="50" width="158" height="8" fill="#d8c49c"/>' +
      [160, 196, 232, 268].map(x => '<rect x="' + (x - 9) + '" y="70" width="18" height="34" rx="9" fill="#8a6a4a"/>').join("") +
      '<path d="M140 110h150" stroke="#c8a878" stroke-width="3"/>' +
      '<rect x="201" y="28" width="18" height="90" rx="3" fill="#7a1e2a" stroke="' + GOLD + '" stroke-width="1.5"/>' + letters +
      oak(60, 92, 1, "#2f5a34") + oak(354, 92, .9, "#335f38") +
      '<rect x="0" y="130" width="400" height="98" fill="#7a3a2a"/>' + bricks +
      '<rect x="0" y="128" width="400" height="5" fill="#cfc8b8"/>' +
      tag("MUSCADINE", 14, 178, 32, PURP, -5) + tag("BLOODLINE", 150, 204, 22, GOLD, -4) + tag("STANCASTER", 20, 212, 14, CREAM, -3) + tag("AZALEA CITY", 268, 166, 14, PINK, -6) +
      '<g class="mbl-sp"><circle cx="262" cy="190" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="mbl-sp mbl-sp2"><circle cx="268" cy="184" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="228" width="400" height="32" fill="#4c4a46"/><rect x="0" y="226" width="400" height="4" fill="#e8e4dc"/>' +
      /* green street signs */
      '<rect x="356" y="62" width="6" height="166" fill="#2f2f2f"/>' + sign(272, 62, 126, "DAUPHIN ST") + sign(262, 88, 136, "N JOACHIM ST"),
      sky("mbl5", "#5a8ac4", "#f0c49a"));
  }

  window.SCENES = { mblroad: mblroad, mblsoul: mblsoul, mblazalea: mblazalea, mblpier: mblpier, mblcorner: mblcorner };
})();
