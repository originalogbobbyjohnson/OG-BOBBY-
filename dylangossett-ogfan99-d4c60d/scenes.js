/* dylangossett scenes (Regions: Houston + Texas / Genres: country; Austin, Texas). CSS classes prefixed dgtt- (the page's own anim-train is kept).
   Sources: Wikipedia "Dylan Gossett" (born in Austin 1999; Texas A&M, College Station, class of 2021; interned then worked full-time in event operations at the Circuit of the Americas, left after "Coal");
   Texas Monthly (grew up in Austin, sang in church and school choir; ACL homecoming); Wikipedia "Downtown station (CapMetro Rail)" (401 E 4th St at Neches, Red Line southern terminus);
   Miro Rivera Architects (COTA Observation Tower, 251 ft, red steel tube "veil" sweeping over the stage and up the core); Wikipedia "Moonlight towers (Austin)" (165 ft iron towers; one at W 12th St and Rio Grande St);
   Pennybacker Bridge (Loop 360 over Lake Austin, rust-red weathering-steel arch, limestone cliffs, live oaks); Texas A&M Academic Building (white limestone, columned front, copper dome).
   No logos, no faces. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#e0a83a", RUST = "#a8452a", SKY = "#7fb8e0", CREAM = "#f3ead8", MAROON = "#500000", CAPRED = "#c8102e";
  const css = '<style>' +
    '@keyframes dgttglow{0%,100%{opacity:.45}50%{opacity:1}}.dgtt-glow{animation:dgttglow 2.4s ease-in-out infinite}.dgtt-g2{animation-delay:-1.2s}' +
    '@keyframes dgttnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-58px);opacity:0}}.dgtt-nt{animation:dgttnote 3.2s ease-out infinite}.dgtt-nt2{animation-delay:-1.1s}.dgtt-nt3{animation-delay:-2.2s}' +
    '@keyframes dgttcloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.dgtt-cl{animation:dgttcloud 14s ease-in-out infinite alternate}' +
    '@keyframes dgttcar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.dgtt-car{animation:dgttcar 3.2s linear infinite}.dgtt-c2{animation-delay:-1.6s}' +
    '@keyframes dgttboat{0%{transform:translateX(0)}100%{transform:translateX(-90px)}}.dgtt-boat{animation:dgttboat 8s ease-in-out infinite alternate}' +
    '@keyframes dgttflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.dgtt-flag{transform-box:fill-box;transform-origin:0 50%;animation:dgttflag 1.6s ease-in-out infinite}' +
    '@keyframes dgttleaf{0%{transform:translate(0,0) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(-40px,90px) rotate(200deg);opacity:0}}.dgtt-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:dgttleaf 4s linear infinite}.dgtt-l2{animation-delay:-1.4s}.dgtt-l3{animation-delay:-2.8s}' +
    '@keyframes dgttspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dgtt-sp{animation:dgttspray 1.4s ease-out infinite}.dgtt-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="dgtt-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  /* a wide, low live oak */
  const oak = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M-4 0q2 -20 -10 -34M4 0q0 -18 14 -30M0 0v-26" stroke="#4a3a2a" stroke-width="6" fill="none" stroke-linecap="round"/>' +
    '<ellipse cx="-24" cy="-40" rx="26" ry="13" fill="' + c + '"/><ellipse cx="20" cy="-42" rx="28" ry="14" fill="' + c + '"/><ellipse cx="-2" cy="-52" rx="26" ry="13" fill="' + c + '"/></g>';
  /* the moonlight tower: tall iron lattice with the lamp crown */
  const moontower = (x, y, h) => '<g><path d="M' + (x - 9) + ' ' + y + 'L' + x + ' ' + (y - h) + 'L' + (x + 9) + ' ' + y + '" stroke="#5a5f66" stroke-width="2" fill="none"/>' +
    Array.from({ length: Math.floor(h / 14) }, (_, i) => { const yy = y - i * 14, hw = 9 * (1 - i * 14 / h), hw2 = 9 * (1 - (i + 1) * 14 / h); return '<path d="M' + (x - hw) + ' ' + yy + 'L' + (x + hw2) + ' ' + (yy - 14) + 'M' + (x + hw) + ' ' + yy + 'L' + (x - hw2) + ' ' + (yy - 14) + '" stroke="#5a5f66" stroke-width=".9"/>'; }).join("") +
    '<path d="M' + (x - 12) + ' ' + (y - h + 6) + 'h24" stroke="#5a5f66" stroke-width="2"/>' + [-11, -4, 4, 11].map(d => '<circle cx="' + (x + d) + '" cy="' + (y - h + 3) + '" r="2.4" fill="#fff6c8" class="dgtt-glow"/>').join("") + '</g>';

  /* ROOM 0: CapMetro Rail Downtown station, 4th St and Neches behind the Convention Center; the Red Line train pulling in */
  function dgtttrain() {
    return svg(
      '<rect width="400" height="260" fill="url(#dgtt1)"/>' +
      '<g class="dgtt-cl"><ellipse cx="80" cy="32" rx="40" ry="8" fill="#fff" opacity=".6"/><ellipse cx="290" cy="22" rx="46" ry="8" fill="#fff" opacity=".5"/></g>' +
      /* downtown skyline behind */
      '<g fill="#8aa4ba">' + [[10, 60, 30], [44, 40, 24], [72, 70, 34], [110, 30, 28], [300, 50, 30], [336, 24, 26], [366, 64, 34]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (150 - b[1]) + '"/>').join("") + '</g>' +
      '<path d="M336 24l13 -16 13 16z" fill="#8aa4ba"/>' +
      /* convention center wall */
      '<rect x="140" y="80" width="150" height="70" fill="#c9b79c"/>' + Array.from({ length: 7 }, (_, i) => '<rect x="' + (148 + i * 20) + '" y="92" width="12" height="44" fill="#6a8aa4"/>').join("") +
      /* platform canopy */
      '<rect x="0" y="118" width="400" height="6" fill="#e8e8e2"/>' + [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="124" width="4" height="30" fill="#9aa"/>').join("") +
      /* station sign */
      '<rect x="20" y="78" width="110" height="34" rx="3" fill="#111"/><text x="75" y="93" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">DOWNTOWN</text>' +
      '<rect x="44" y="98" width="62" height="11" rx="5.5" fill="' + CAPRED + '"/><text x="75" y="106.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#fff">RED LINE</text>' +
      '<rect x="0" y="152" width="400" height="10" fill="#b8b2a6"/><rect x="0" y="160" width="400" height="4" fill="#e8d24a"/>' +
      '<rect x="0" y="164" width="400" height="96" fill="#5a5048"/>' +
      '<path d="M0 216h400M0 234h400" stroke="#8a8e94" stroke-width="3"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="212" width="8" height="26" fill="#3a2e26"/>').join("") +
      /* the train: red and white */
      '<g class="anim-train"><path d="M20 168h246q34 0 44 26v14h-290z" fill="' + CAPRED + '"/><rect x="20" y="196" width="290" height="12" fill="#f4f4f2"/>' +
      '<path d="M272 172h16q14 4 18 18h-34z" fill="#a8cde0"/>' + [36, 76, 116, 156, 196, 236].map(x => '<rect x="' + x + '" y="174" width="28" height="14" rx="2" fill="#a8cde0"/>').join("") +
      '<circle cx="306" cy="200" r="3" fill="#ffe28a" class="dgtt-glow"/>' + [50, 90, 230, 270].map(x => '<circle cx="' + x + '" cy="212" r="7" fill="#1d1d1d"/>').join("") + '</g>',
      sky("dgtt1", "#5a9ad8", "#f4e2c0"));
  }

  /* ROOM 1: Circuit of the Americas, where he worked event operations before "Coal": the 251-ft Observation Tower, red steel tubes sweeping over the stage; cars flying past */
  function dgttcota() {
    let veil = ''; for (let i = 0; i < 12; i++) veil += '<path d="M' + (196 + i * 1.2) + ' 40q' + (40 + i * 10) + ' ' + (60 + i * 6) + ' ' + (70 + i * 14) + ' ' + (126 - i * 2) + '" stroke="' + CAPRED + '" stroke-width="2.4" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dgtt2)"/>' +
      '<g class="dgtt-cl"><ellipse cx="80" cy="40" rx="40" ry="8" fill="#fff" opacity=".6"/></g>' +
      '<path d="M0 170q100 -20 200 -6q100 -14 200 4v92h-400z" fill="#8fae5a"/>' +
      /* tower: white lattice shaft + deck */
      '<path d="M190 168l6 -132h12l6 132z" fill="#e8e8e2"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (191 + i * .5) + ' ' + (160 - i * 11) + 'l' + (22 - i) + ' -11M' + (213 - i * .5) + ' ' + (160 - i * 11) + 'l-' + (22 - i) + ' -11" stroke="#a8acb0" stroke-width=".8"/>').join("") +
      '<rect x="182" y="30" width="40" height="8" rx="2" fill="#e8e8e2"/><rect x="186" y="26" width="32" height="4" fill="#a8cde0"/>' + veil +
      '<path d="M206 40q-40 60 -80 128" stroke="' + CAPRED + '" stroke-width="2.4" fill="none"/><path d="M204 40q-30 70 -50 128" stroke="' + CAPRED + '" stroke-width="2.4" fill="none"/>' +
      /* grandstand */
      '<path d="M10 176h120l-10 -26h-100z" fill="#c8ccd0"/>' + Array.from({ length: 4 }, (_, i) => '<path d="M' + (14 + i * 2) + ' ' + (156 + i * 5) + 'h' + (108 - i * 4) + '" stroke="#5a6a7a" stroke-width="2"/>').join("") +
      /* track + curbs */
      '<rect x="0" y="196" width="400" height="34" fill="#3e3e40"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="192" width="10" height="4" fill="' + (i % 2 ? "#fff" : CAPRED) + '"/>').join("") +
      '<g class="dgtt-car"><path d="M0 220h40l6 -6h14l4 6h10v6h-74z" fill="' + SKY + '"/><circle cx="12" cy="226" r="5" fill="#111"/><circle cx="60" cy="226" r="5" fill="#111"/></g>' +
      '<g class="dgtt-car dgtt-c2"><path d="M0 212h40l6 -6h14l4 6h10v6h-74z" fill="' + GOLD + '"/><circle cx="12" cy="218" r="5" fill="#111"/><circle cx="60" cy="218" r="5" fill="#111"/></g>' +
      '<rect x="0" y="230" width="400" height="30" fill="#8fae5a"/>',
      sky("dgtt2", "#3f86d6", "#e8eef4"));
  }

  /* ROOM 2: Texas A&M, College Station, where he graduated in 2021: the Academic Building, white limestone and columns under the copper dome; maroon flag */
  function dgttaggie() {
    return svg(
      '<rect width="400" height="260" fill="url(#dgtt3)"/>' +
      '<g class="dgtt-cl"><ellipse cx="80" cy="30" rx="38" ry="8" fill="#fff" opacity=".6"/><ellipse cx="320" cy="40" rx="42" ry="8" fill="#fff" opacity=".5"/></g>' +
      '<rect x="0" y="176" width="400" height="84" fill="#6f9a4a"/>' +
      '<rect x="60" y="100" width="280" height="78" fill="#ece6d8"/>' + [72, 96, 120, 256, 280, 304].map(x => '<rect x="' + x + '" y="112" width="12" height="20" fill="#3a4a5a"/><rect x="' + x + '" y="144" width="12" height="20" fill="#3a4a5a"/>').join("") +
      '<rect x="54" y="94" width="292" height="8" fill="#d8d0c2"/>' +
      '<path d="M150 112h100l-50 -20z" fill="#f4f1ea"/>' + [154, 172, 190, 208, 226, 242].map(x => '<rect x="' + x + '" y="112" width="6" height="64" fill="#f8f6f0"/>').join("") +
      /* drum + copper dome + lantern */
      '<rect x="168" y="62" width="64" height="24" fill="#ece6d8"/>' + [176, 190, 204, 218].map(x => '<rect x="' + x + '" y="66" width="5" height="16" fill="#3a4a5a"/>').join("") +
      '<path d="M164 64q36 -54 72 0z" fill="#5f9a86"/><path d="M180 50q20 -30 40 0" stroke="#7fbaa6" stroke-width="2" fill="none"/><rect x="194" y="6" width="12" height="10" fill="#ece6d8"/><path d="M192 8l8 -8 8 8z" fill="#5f9a86"/>' +
      '<path d="M170 260l18 -84h24l18 84z" fill="#d8d0c2"/>' +
      '<rect x="356" y="60" width="3" height="118" fill="#ccc"/><g class="dgtt-flag"><rect x="359" y="62" width="30" height="18" fill="' + MAROON + '"/></g>' +
      '<rect x="20" y="196" width="116" height="26" rx="3" fill="' + MAROON + '" stroke="#fff" stroke-width="2"/><text x="78" y="214" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">CLASS OF 2021</text>' +
      note(290, 200, GOLD) + note(320, 190, CREAM, "dgtt-nt2"),
      sky("dgtt3", "#4a90dc", "#dbeaf6"));
  }

  /* ROOM 3: the Pennybacker Bridge on Loop 360 over Lake Austin: rust-red steel arch, limestone cliffs, live oaks; leaves drifting ("Beneath Oak Trees") */
  function dgttbridge() {
    return svg(
      '<rect width="400" height="260" fill="url(#dgtt4)"/>' +
      '<circle cx="320" cy="60" r="22" fill="#ffd89a" opacity=".85"/>' +
      '<path d="M0 120q50 -30 100 -10l20 30v90h-120z" fill="#d8c8a2"/><path d="M400 110q-50 -26 -110 -6l-20 36v90h130z" fill="#d8c8a2"/>' +
      '<path d="M0 140h110M0 160h116M290 140h110M284 162h116" stroke="#b8a682" stroke-width="2"/>' +
      '<rect x="100" y="170" width="200" height="90" fill="#4a7a9a"/><rect x="0" y="210" width="400" height="50" fill="#4a7a9a"/>' +
      '<path d="M110 196q90 -280 180 0" stroke="' + RUST + '" stroke-width="9" fill="none"/>' +
      Array.from({ length: 13 }, (_, i) => { const t = .2 + i * .05, x = 110 + 180 * t, y = 196 * (1 - t) * (1 - t) - 168 * (1 - t) * t + 196 * t * t; return y < 116 ? '<path d="M' + x.toFixed(1) + ' ' + y.toFixed(1) + 'V116" stroke="' + RUST + '" stroke-width="2"/>' : ''; }).join("") +
      '<rect x="60" y="114" width="280" height="8" fill="#8a7a6a"/><rect x="60" y="112" width="280" height="3" fill="#cfc6b4"/>' +
      '<g class="dgtt-car"><rect x="0" y="104" width="22" height="9" rx="3" fill="' + CAPRED + '"/></g><g class="dgtt-car dgtt-c2"><rect x="0" y="104" width="22" height="9" rx="3" fill="' + SKY + '"/></g>' +
      oak(40, 112, .9, "#4f6a34") + oak(370, 106, .8, "#4f6a34") + oak(90, 128, .6, "#5f7a3e") +
      '<g class="dgtt-boat"><path d="M300 228h40l-6 8h-30z" fill="#fff"/><path d="M296 236q30 6 60 0" stroke="#e8f4fa" stroke-width="1.5" fill="none"/></g>' +
      [[60, 70, ""], [120, 50, "dgtt-l2"], [340, 60, "dgtt-l3"]].map(l => '<ellipse class="dgtt-leaf ' + l[2] + '" cx="' + l[0] + '" cy="' + l[1] + '" rx="4" ry="2.2" fill="#9a8a3a"/>').join(""),
      sky("dgtt4", "#5a8ad0", "#f2d6a6"));
  }

  /* ROOM 4: his corner downtown, W 12th St and Rio Grande St, the moonlight tower behind */
  function dgttcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dgtt5)"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + (20 + (i * 53) % 380) + '" cy="' + (14 + (i * 29) % 60) + '" r="1.1" fill="#fff" class="dgtt-glow ' + (i % 2 ? "dgtt-g2" : "") + '"/>').join("") +
      moontower(300, 152, 140) + '<ellipse cx="300" cy="150" rx="70" ry="10" fill="#fff6c8" opacity=".12"/>' +
      oak(200, 152, .9, "#2e4226") +
      '<rect x="0" y="112" width="150" height="40" fill="#5a4a3e"/>' + [12, 52, 92].map(x => '<rect x="' + x + '" y="122" width="26" height="16" fill="#ffd27a" class="dgtt-glow"/>').join("") +
      /* limestone wall + tags */
      '<rect x="0" y="150" width="400" height="70" fill="#cdbf9e"/>' + Array.from({ length: 10 }, (_, j) => '<path d="M0 ' + (150 + j * 7) + 'h400" stroke="#ab9d7c" stroke-width=".8"/>').join("") +
      tag("DYLAN GOSSETT", 70, 186, 24, GOLD, -4) + tag("AUSTIN", 280, 212, 17, "#fff", -6) + tag("STILL COAL", 76, 212, 13, "#ff8a6a", -3) +
      '<g class="dgtt-sp"><circle cx="270" cy="202" r="2" fill="' + GOLD + '"/><circle cx="276" cy="196" r="1.5" fill="' + GOLD + '"/></g><g class="dgtt-sp dgtt-sp2"><circle cx="264" cy="208" r="1.5" fill="' + CREAM + '"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#8a8478"/><path d="M0 222h400" stroke="#b8b0a2" stroke-width="2"/>' +
      '<rect x="44" y="64" width="5" height="158" fill="#6a6e72"/>' + sign(6, 64, 94, "W 12TH ST") + sign(4, 90, 112, "RIO GRANDE ST"),
      sky("dgtt5", "#0e1430", "#3a3a6a"));
  }

  window.SCENES = { dgtttrain: dgtttrain, dgttcota: dgttcota, dgttaggie: dgttaggie, dgttbridge: dgttbridge, dgttcorner: dgttcorner };
})();
