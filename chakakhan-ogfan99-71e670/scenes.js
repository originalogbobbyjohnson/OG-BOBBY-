/* chakakhan scenes (Regions tab: CHICAGO; GENRES: R&B. Born Yvette Marie Stevens in Chicago in 1953 and raised in Hyde Park on the South Side; Calumet High School and Kenwood; the stretch of Blackstone Ave by Kenwood Academy is Honorary Chaka Khan Way since 2013). CSS classes prefixed chk- (the page's own anim-train is kept).
   1 51st/53rd St (Hyde Park) on the Metra Electric: the island platform up on the embankment by Lake Park Ave, a silver electric train sliding in under the wires, black station sign with the orange Metra Electric dot.
   2 Calumet High School (S May St), where she went to school before Rufus: brick and limestone school, the bell swinging, music notes drifting out.
   3 The Jay Pritzker Pavilion in Millennium Park, where she sang on Chaka Khan Day (July 28, 2013): the curling stainless-steel ribbons over the stage, the steel pipe trellis over the lawn, stage lights sweeping, the crowd's hands up.
   4 The Rock & Roll Hall of Fame in Cleveland (Class of 2023): the glass pyramid and the white tower on the Lake Erie shore, spotlights sweeping (no logos).
   5 S Blackstone Ave and E Hyde Park Blvd: green signs plus the brown Honorary Chaka Khan Way sign, CHAKA tagged on the wall, the domed KAM Isaiah Israel temple down the boulevard behind.
   No logos, no faces; no 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes chkglow{0%,100%{opacity:.45}50%{opacity:1}}.chk-glow{animation:chkglow 2.4s ease-in-out infinite}.chk-g2{animation-delay:-1.2s}' +
    '@keyframes chknote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(-24px,-70px);opacity:0}}.chk-note{animation:chknote 3.6s ease-out infinite}.chk-n2{animation-delay:-1.2s}.chk-n3{animation-delay:-2.4s}' +
    '@keyframes chkbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.chk-beam{transform-box:fill-box;transform-origin:50% 100%;animation:chkbeam 3s ease-in-out infinite}.chk-b2{animation-delay:-1.5s}' +
    '@keyframes chkhand{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.chk-hand{animation:chkhand .9s ease-in-out infinite}.chk-h2{animation-delay:-.45s}' +
    '@keyframes chkbell{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.chk-bell{transform-box:fill-box;transform-origin:50% 0%;animation:chkbell 1.2s ease-in-out infinite}' +
    '@keyframes chkfly{0%{transform:translate(0,0)}25%{transform:translate(40px,-14px)}50%{transform:translate(80px,4px)}75%{transform:translate(120px,-10px)}100%{transform:translate(160px,0)}}.chk-fly{animation:chkfly 6s linear infinite}' +
    '@keyframes chkflap{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.3)}}.chk-flap{transform-box:fill-box;transform-origin:50% 50%;animation:chkflap .35s linear infinite}' +
    '@keyframes chkwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.chk-wave{animation:chkwave 3s ease-in-out infinite}' +
    '@keyframes chkcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.chk-car{animation:chkcar 7s linear infinite}' +
    '@keyframes chkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.chk-sp{animation:chkspray 1.4s ease-out infinite}.chk-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fill) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="' + (fill || "#0f6b3a") + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="' + (fill ? 9.5 : 12) + '" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "chk-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const note = (x, y, c, cls) => '<g class="chk-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="1.6" height="14" fill="' + c + '"/><path d="M' + (x + 4.6) + ' ' + (y - 14) + 'q6 3 5 9" stroke="' + c + '" stroke-width="1.6" fill="none"/></g>';
  const fly = (x, y, c, cls) => '<g class="chk-fly ' + (cls || "") + '"><g class="chk-flap"><path d="M' + x + ' ' + y + 'c-8 -10 -14 -2 -8 4c-6 4 -2 10 8 2z" fill="' + c + '"/><path d="M' + x + ' ' + y + 'c8 -10 14 -2 8 4c6 4 2 10 -8 2z" fill="' + c + '"/></g><rect x="' + (x - .8) + '" y="' + (y - 5) + '" width="1.6" height="10" fill="#222"/></g>';
  const FIRE = "#ff7a1a", MAG = "#c2185b", GOLD = "#ffd34d", ME = "#ff5f00";

  /* 1. 51st/53rd St (Hyde Park), Metra Electric, up on the embankment */
  function chkstation() {
    const car = x => '<rect x="' + x + '" y="92" width="150" height="66" rx="6" fill="#d9dde3" stroke="#6b737e" stroke-width="2"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (x + 10 + i * 27) + '" y="100" width="20" height="14" rx="2" fill="#20303f"/><rect x="' + (x + 10 + i * 27) + '" y="120" width="20" height="14" rx="2" fill="#20303f"/>').join("") +
      '<rect x="' + x + '" y="140" width="150" height="4" fill="' + ME + '"/><rect x="' + (x + 66) + '" y="118" width="18" height="38" fill="#b7bec8" stroke="#6b737e"/>' +
      '<path d="M' + (x + 60) + ' 92l10 -14h12l10 14" stroke="#333" stroke-width="2" fill="none"/>';
    const train = '<g class="anim-train">' + car(40) + car(194) + '<circle class="chk-glow" cx="338" cy="148" r="4" fill="#fff6c8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#chk-s1)"/>' + stars(8) +
      /* catenary wire and poles */
      [20, 200, 380].map(x => '<rect x="' + (x - 2) + '" y="50" width="4" height="116" fill="#5a5a60"/><rect x="' + (x - 16) + '" y="56" width="32" height="3" fill="#5a5a60"/>').join("") +
      '<path d="M0 76h400" stroke="#2a2a30" stroke-width="1.5"/><path d="M0 70q100 8 200 0t200 0" stroke="#2a2a30" stroke-width="1" fill="none"/>' +
      train +
      /* island platform edge + embankment wall */
      '<rect x="0" y="158" width="400" height="10" fill="#9a9690"/><rect x="0" y="158" width="400" height="3" fill="#e8d84a"/>' +
      '<rect x="0" y="168" width="400" height="60" fill="#8a7a66"/>' + Array.from({ length: 6 }, (_, r) => '<path d="M0 ' + (176 + r * 9) + 'h400" stroke="#76685a" stroke-width="1"/>').join("") +
      /* the viaduct opening over the street */
      '<rect x="140" y="186" width="120" height="42" fill="#2a2420"/><path d="M140 186h120" stroke="#5a4e44" stroke-width="4"/>' +
      '<g class="chk-car"><rect x="0" y="212" width="54" height="14" rx="4" fill="' + MAG + '"/><circle cx="12" cy="228" r="5" fill="#111"/><circle cx="42" cy="228" r="5" fill="#111"/></g>' +
      '<rect x="0" y="228" width="400" height="32" fill="#3a3a3e"/>' +
      /* black station sign */
      '<rect x="72" y="230" width="256" height="26" rx="3" fill="#111"/><text x="186" y="248" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">51ST / 53RD ST · HYDE PARK</text>' +
      '<circle cx="308" cy="243" r="9" fill="' + ME + '"/><text x="308" y="246.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">ME</text>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">METRA ELECTRIC · LAKE PARK AVE · HYDE PARK, SOUTH SIDE</text>',
      sky("chk-s1", "#141a3a", "#e07a4a"));
  }

  /* 2. Calumet High School */
  function chkschool() {
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="18" height="22" fill="#2a3a4a" stroke="#efe4c8" stroke-width="2"/><path d="M' + (x + 9) + ' ' + y + 'v22" stroke="#efe4c8" stroke-width="1"/>';
    let wins = ""; for (let r = 0; r < 3; r++) for (let c = 0; c < 9; c++) if (!(c === 4)) wins += win(48 + c * 34, 82 + r * 38);
    return svg(
      '<rect width="400" height="260" fill="url(#chk-s2)"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#8a8a8a"/><rect x="0" y="210" width="400" height="5" fill="#d0d0d0"/>' +
      '<rect x="36" y="68" width="328" height="144" fill="#b0683e"/><rect x="30" y="62" width="340" height="10" fill="#efe4c8"/><rect x="36" y="114" width="328" height="3" fill="#efe4c8"/><rect x="36" y="152" width="328" height="3" fill="#efe4c8"/>' +
      wins +
      /* entrance tower with the bell */
      '<rect x="172" y="34" width="56" height="178" fill="#efe4c8"/><path d="M168 36l32 -22l32 22z" fill="#8a4a2a"/>' +
      '<rect x="186" y="44" width="28" height="30" fill="#2a2a34"/><g class="chk-bell"><path d="M192 50h16l3 16h-22z" fill="' + GOLD + '"/><circle cx="200" cy="68" r="2.5" fill="#a87a1a"/></g>' +
      '<rect x="178" y="80" width="44" height="14" fill="#b0683e"/><text x="200" y="91" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff6e6">CALUMET</text>' +
      '<rect x="182" y="160" width="36" height="52" fill="#3a2a1e"/><path d="M182 160a18 12 0 0 1 36 0z" fill="#5a4030"/><rect x="199" y="160" width="2" height="52" fill="#8a6a40"/>' +
      tree(18, 206, 1.5, "#3c6a2e") + tree(384, 206, 1.5, "#3c6a2e") +
      note(230, 150, MAG) + note(170, 140, FIRE, "chk-n2") + note(260, 120, "#fff", "chk-n3") +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">CALUMET HIGH · SOUTH SIDE · BEFORE RUFUS</text>',
      sky("chk-s2", "#4a7ab8", "#f0d8b8"));
  }

  /* 3. Jay Pritzker Pavilion, Millennium Park: Chaka Khan Day */
  function chkpavilion() {
    const rib = (d, c) => '<path d="' + d + '" fill="' + c + '" stroke="#8a96a4" stroke-width="1"/>';
    let trellis = ""; for (let i = 0; i < 9; i++) { trellis += '<path d="M' + (-40 + i * 60) + ' 150q60 -50 120 -100" stroke="#9aa6b4" stroke-width="1" fill="none" opacity=".3"/><path d="M' + (440 - i * 60) + ' 150q-60 -50 -120 -100" stroke="#9aa6b4" stroke-width="1" fill="none" opacity=".3"/>'; }
    let crowd = ""; for (let i = 0; i < 26; i++) { const x = 6 + i * 15.5, y = 222 + (i % 3) * 6; crowd += '<circle cx="' + x + '" cy="' + y + '" r="6" fill="#1a1020"/><rect x="' + (x - 7) + '" y="' + (y + 4) + '" width="14" height="30" fill="#1a1020"/>' + (i % 3 === 0 ? '<rect class="chk-hand ' + (i % 2 ? "chk-h2" : "") + '" x="' + (x + 4) + '" y="' + (y - 18) + '" width="3" height="14" fill="#1a1020"/>' : ""); }
    return svg(
      '<rect width="400" height="260" fill="url(#chk-s3)"/>' + stars(10) +
      /* skyline behind */
      [[0, 60, 40], [40, 80, 30], [300, 50, 36], [338, 70, 30], [372, 40, 28]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (200 - b[1]) + '" fill="#2a2440"/>').join("") +
      /* curling steel ribbons */
      rib("M120 150c-40 -40 -20 -100 30 -110c-30 30 -20 70 20 110z", "#c8d0da") +
      rib("M280 150c40 -40 20 -100 -30 -110c30 30 20 70 -20 110z", "#c8d0da") +
      rib("M150 150c-10 -50 20 -96 60 -112c-24 30 -30 70 -20 112z", "#dfe5ec") +
      rib("M250 150c10 -50 -20 -96 -60 -112c24 30 30 70 20 112z", "#b8c2ce") +
      rib("M170 40c30 -20 60 -10 70 6c-24 -6 -48 -6 -70 -6z", "#e8edf2") +
      /* stage mouth and lights */
      '<rect x="146" y="118" width="108" height="56" fill="#140c1a"/><rect class="chk-glow" x="146" y="118" width="108" height="56" fill="' + MAG + '" opacity=".35"/>' +
      '<g class="chk-beam"><path d="M168 170l-26 -120h18z" fill="#fff3b0" opacity=".25"/></g><g class="chk-beam chk-b2"><path d="M232 170l26 -120h-18z" fill="#fff3b0" opacity=".25"/></g>' +
      '<rect x="198" y="138" width="4" height="30" fill="#888"/><circle cx="200" cy="136" r="4" fill="#333"/>' +
      trellis +
      /* lawn + crowd */
      '<rect x="0" y="200" width="400" height="60" fill="#2f5a2a"/>' + crowd +
      '<rect x="110" y="6" width="180" height="20" rx="3" fill="#140c1a" stroke="' + FIRE + '" stroke-width="1.5"/><text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">CHAKA KHAN DAY · JULY 28, 2013</text>',
      sky("chk-s3", "#0e0a24", "#4a2a5a"));
  }

  /* 4. Rock & Roll Hall of Fame, Cleveland, Class of 2023 */
  function chkhall() {
    let glass = ""; for (let i = 1; i < 8; i++) glass += '<path d="M' + (120 + i * 20) + ' 200L' + (190 + i * 2.5) + ' ' + (88 + i * 0) + '" stroke="#9fc4dc" stroke-width="1" opacity=".7"/>';
    for (let r = 1; r < 6; r++) { const y = 88 + r * 18.4, half = (y - 88) / 112 * 80; glass += '<path d="M' + (200 - half) + ' ' + y + 'h' + (2 * half) + '" stroke="#9fc4dc" stroke-width="1" opacity=".7"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#chk-s4)"/>' + stars(12) +
      '<g class="chk-beam"><path d="M80 210l-30 -190h22z" fill="#fff3b0" opacity=".18"/></g><g class="chk-beam chk-b2"><path d="M320 210l30 -190h-22z" fill="#fff3b0" opacity=".18"/></g>' +
      /* the white tower behind the pyramid */
      '<rect x="214" y="40" width="34" height="160" fill="#f2f2ee"/><rect x="214" y="40" width="34" height="6" fill="#d8d8d2"/>' +
      '<rect x="244" y="96" width="70" height="40" fill="#e6e6e0"/><rect x="250" y="102" width="58" height="6" fill="#b8c8d4"/>' +
      '<ellipse cx="150" cy="150" rx="32" ry="14" fill="#e6e6e0"/><rect x="118" y="150" width="64" height="20" fill="#e6e6e0"/>' +
      /* glass pyramid */
      '<path d="M120 200L200 88L280 200z" fill="#3a6a8a" opacity=".85"/><path d="M120 200L200 88L280 200z" fill="' + GOLD + '" opacity=".1"/><circle class="chk-glow" cx="200" cy="150" r="10" fill="#fff3b0" opacity=".5"/>' + glass +
      '<path d="M120 200L200 88L280 200z" fill="none" stroke="#e6eef4" stroke-width="2"/>' +
      /* plaza and the lake */
      '<rect x="0" y="200" width="400" height="16" fill="#9a9690"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#1e3a5a"/><path class="chk-wave" d="M0 226q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0M0 240q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#6a9ac4" stroke-width="1.5" fill="none"/>' +
      fly(40, 120, FIRE) + fly(30, 160, GOLD, "chk-b2") +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">CLEVELAND · LAKE ERIE · HALL OF FAME CLASS OF 2023</text>',
      sky("chk-s4", "#0c1030", "#5a3a7a"));
  }

  /* 5. S Blackstone Ave and E Hyde Park Blvd: Honorary Chaka Khan Way */
  function chkcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#chk-s5)"/>' +
      /* KAM Isaiah Israel: tan brick drum and dome down the boulevard */
      '<g transform="translate(22 0)"><rect x="210" y="128" width="150" height="80" fill="#c8a47a"/><rect x="236" y="100" width="98" height="30" fill="#c09a70"/>' +
      '<path d="M246 100a39 38 0 0 1 78 0z" fill="#b8916a"/><rect x="280" y="54" width="10" height="10" fill="#a8825c"/><path d="M276 56a9 8 0 0 1 18 0z" fill="#a8825c"/>' +
      [0, 1, 2, 3, 4].map(i => '<path d="M' + (222 + i * 28) + ' 196v-34a8 8 0 0 1 16 0v34z" fill="#5a4a3a"/>').join("") +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (244 + i * 15) + '" y="108" width="6" height="14" rx="3" fill="#5a4a3a"/>').join("") + '</g>' +
      tree(212, 204, 1.4, "#3c6a2e") + tree(388, 204, 1.4, "#3c6a2e") +
      /* brick wall with the tag */
      '<rect x="0" y="116" width="176" height="104" fill="#7a3a3a"/>' + Array.from({ length: 11 }, (_, r) => '<path d="M0 ' + (122 + r * 9) + 'h176" stroke="#5e2a2a" stroke-width="1"/>').join("") +
      tag("CHAKA", 18, 170, 40, FIRE, -8) + tag("QUEEN OF FUNK", 16, 204, 15, GOLD, -4) +
      '<g class="chk-sp"><circle cx="156" cy="158" r="2" fill="' + FIRE + '"/><circle cx="162" cy="154" r="1.5" fill="' + FIRE + '"/></g><g class="chk-sp chk-sp2"><circle cx="152" cy="166" r="1.6" fill="' + GOLD + '"/></g>' +
      fly(60, 100, MAG) +
      /* sidewalk + street */
      '<rect x="0" y="220" width="400" height="40" fill="#555"/><rect x="0" y="218" width="400" height="4" fill="#bbb"/>' +
      '<g class="chk-car"><rect x="0" y="226" width="64" height="18" rx="5" fill="' + MAG + '"/><rect x="10" y="218" width="40" height="12" rx="4" fill="#a8144e"/><rect x="14" y="220" width="14" height="8" fill="#9cc"/><rect x="32" y="220" width="14" height="8" fill="#9cc"/><circle cx="14" cy="246" r="6" fill="#111"/><circle cx="50" cy="246" r="6" fill="#111"/></g>' +
      /* pole with green street signs and the brown honorary sign */
      '<rect x="190" y="34" width="5" height="186" fill="#5f6b5f"/>' + sign(112, 36, 140, "S BLACKSTONE AVE") + sign(122, 60, 140, "E HYDE PARK BLVD") +
      sign(98, 86, 168, "HONORARY CHAKA KHAN WAY", "#6a4022") +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">HYDE PARK · KAM ISAIAH ISRAEL DOWN THE BOULEVARD</text>',
      sky("chk-s5", "#2a3a7a", "#f0905a"));
  }

  window.SCENES = { chkstation, chkschool, chkpavilion, chkhall, chkcorner };
})();
