/* Capital STEEZ opening scenes (Flatbush / Midwood, Brooklyn). Each one is a small animated SVG, 400 x 260.
   1. Avenue M on the Brighton Line (B/Q), up on the embankment: the stop for Murrow, where Pro Era came together
   2. "L Park" (Kolbert Playground, Avenue L): the courts across from Murrow where the crew freestyled after school
   3. P.S. 222 in Marine Park: his elementary school, where he started The 3rd Kind with Jakk in fourth grade
   4. The attic of the family house in Flatbush: where he wrote and rapped, the lamp on, stars out the window
   5. Avenue L and East 17th St: green street signs, STEEZ tagged on the wall, the Brighton Line embankment behind
   All CSS classes are prefixed "cs" so they never clash with the game page. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes csFlk{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.4}55%{opacity:.9}}.csFlk{animation:csFlk 2.4s infinite}' +
    '@keyframes csBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.csBob{animation:csBob 1s ease-in-out infinite}.csBob2{animation-delay:-.5s}' +
    '@keyframes csNote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-70px);opacity:0}}.csNote{animation:csNote 3.2s linear infinite}.csN2{animation-delay:-1.1s}.csN3{animation-delay:-2.2s}' +
    '@keyframes csWave{0%,100%{transform:skewY(0)}50%{transform:skewY(7deg)}}.csWave{transform-box:fill-box;transform-origin:0 50%;animation:csWave 1.4s ease-in-out infinite}' +
    '@keyframes csTw{0%,100%{opacity:.25}50%{opacity:1}}.csTw{animation:csTw 2s ease-in-out infinite}.csTw2{animation-delay:-1s}' +
    '@keyframes csPen{0%,100%{transform:translate(0,0)}25%{transform:translate(6px,1px)}50%{transform:translate(12px,0)}75%{transform:translate(6px,-1px)}}.csPen{animation:csPen 1.2s ease-in-out infinite}' +
    '@keyframes csTrainR{from{transform:translateX(-420px)}to{transform:translateX(440px)}}.csTrainR{animation:csTrainR 7s linear infinite}' +
    '@keyframes csBall{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.csBall{animation:csBall .9s ease-in infinite alternate}' +
    '@keyframes csLeaf{0%{transform:translate(0,-10px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-50px,200px) rotate(260deg);opacity:.8}}.csLeaf{animation:csLeaf 7s linear infinite}.csL2{animation-delay:-2.4s}.csL3{animation-delay:-4.8s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (cx, cy, letter, color, dark) =>
    '<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="' + color + '"/><text x="' + cx + '" y="' + (cy + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="csTw' + (i % 2 ? " csTw2" : "") + '" cx="' + ((i * 97 + 13) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.5) + '" fill="#fff"/>'; return s; };
  const LAV = "#b39dff", GOLD = "#f5c542", JADE = "#4dd6a8";
  const label = (txt, fill) => '<text x="390" y="252" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="' + (fill || "#f1f1f1") + '" letter-spacing="2">' + txt + '</text>';
  /* a Midwood house row (frame houses with porches and gables) */
  const houses = (y, tone) => {
    let s = "";
    const cols = tone || ["#d9c7a7", "#c98f6b", "#e8e1d0", "#a9b8a0", "#d6b88a"];
    for (let i = 0; i < 7; i++) {
      const x = i * 60 - 10, c = cols[i % cols.length];
      s += '<rect x="' + x + '" y="' + y + '" width="54" height="40" fill="' + c + '"/><path d="M' + (x - 3) + ' ' + y + 'l30-20 30 20z" fill="#5a4a46"/>' +
        '<rect x="' + (x + 8) + '" y="' + (y + 8) + '" width="12" height="12" fill="#3a4250"/><rect x="' + (x + 32) + '" y="' + (y + 8) + '" width="12" height="12" fill="#3a4250"/>' +
        '<rect x="' + (x + 22) + '" y="' + (y - 12) + '" width="10" height="8" fill="#3a4250"/>';
    }
    return s;
  };

  /* 1. Avenue M (B/Q): the Brighton Line up on its embankment over Midwood, the long platform canopy, the black station sign */
  function train() {
    let car = "";
    for (let k = 0; k < 2; k++) {
      const x0 = 20 + k * 196;
      car += '<rect x="' + x0 + '" y="112" width="190" height="62" rx="6" fill="#c9ced6" stroke="#8a919c" stroke-width="2"/>' +
        '<rect x="' + x0 + '" y="160" width="190" height="6" fill="#8a919c"/>';
      for (let w = 0; w < 4; w++) car += '<rect x="' + (x0 + 14 + w * 44) + '" y="122" width="28" height="22" rx="3" fill="#2b3442"/><rect x="' + (x0 + 14 + w * 44) + '" y="122" width="28" height="7" fill="#46546a" opacity=".6"/>';
      car += '<rect x="' + (x0 + 86) + '" y="120" width="18" height="40" fill="#9aa1ab"/><path d="M' + (x0 + 95) + ' 120v40" stroke="#6d747e" stroke-width="1.5"/>';
    }
    car += bullet(48, 152, "Q", "#fccc0a", 1);
    return svg(
      '<rect width="400" height="260" fill="url(#csG1)"/>' +
      '<circle cx="340" cy="40" r="20" fill="#fff4c8" opacity=".9"/>' +
      /* trees of Midwood behind */
      '<circle cx="40" cy="96" r="26" fill="#5f8f4a"/><circle cx="110" cy="92" r="22" fill="#6fa055"/><circle cx="300" cy="94" r="26" fill="#5f8f4a"/><circle cx="370" cy="90" r="22" fill="#6fa055"/>' +
      /* the canopy over the platform */
      '<rect x="0" y="54" width="400" height="10" fill="#2f4a3a"/><path d="M0 64h400" stroke="#203427" stroke-width="2"/>' +
      (function () { let s = ""; for (let x = 30; x < 400; x += 90) s += '<rect x="' + x + '" y="64" width="6" height="118" fill="#2f4a3a"/>'; return s; })() +
      /* black station sign hung from the canopy */
      '<rect x="98" y="68" width="204" height="34" rx="3" fill="#111"/><path d="M98 74h204" stroke="#fff" stroke-width="1.2"/>' +
      '<text x="110" y="95" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">Avenue M</text>' +
      bullet(254, 88, "B", "#ff6319") + bullet(280, 88, "Q", "#fccc0a", 1) +
      /* the train */
      '<g class="anim-train">' + car + '</g>' +
      /* the platform edge + yellow strip */
      '<rect x="0" y="176" width="400" height="16" fill="#9c9a94"/><rect x="0" y="176" width="400" height="4" fill="#f2c200"/>' +
      /* the embankment wall falling to the street, Midwood houses below */
      '<path d="M0 192h400v20H0z" fill="#7a6a58"/>' +
      (function () { let s = ""; for (let x = 0; x < 400; x += 24) s += '<path d="M' + x + ' 192v20" stroke="#6a5a48" stroke-width="1.5"/>'; return s; })() +
      '<rect x="0" y="212" width="400" height="48" fill="#4d5a3c"/>' +
      '<g transform="translate(0 30) scale(1 .7)">' + houses(256) + '</g>' +
      label("AVENUE M · MIDWOOD, BROOKLYN"),
      sky("csG1", "#7fb0e0", "#f3d9b0"));
  }

  /* 2. "L Park" (Kolbert Playground) on Avenue L: the courts across from Murrow, a freestyle circle after school,
        a boombox, notes floating up, a ball bouncing on the next court */
  function lpark() {
    const kid = (x, c, b) => '<g class="csBob' + (b ? " csBob2" : "") + '"><circle cx="' + x + '" cy="152" r="9" fill="#2a2333"/><path d="M' + (x - 12) + ' 196q0-30 12-32q12 2 12 32z" fill="' + c + '"/><rect x="' + (x - 9) + '" y="196" width="7" height="22" fill="#1f2a44"/><rect x="' + (x + 2) + '" y="196" width="7" height="22" fill="#1f2a44"/><rect x="' + (x - 11) + '" y="216" width="10" height="5" rx="2" fill="#f1f1f1"/><rect x="' + (x + 1) + '" y="216" width="10" height="5" rx="2" fill="#f1f1f1"/></g>';
    let fence = "";
    for (let x = 0; x <= 400; x += 10) fence += '<path d="M' + x + ' 70l10 70M' + (x + 10) + ' 70l-10 70" stroke="#9aa3ad" stroke-width=".8" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#csG2)"/>' +
      /* brown-brick school wall far behind the fence (just a strip) and trees */
      '<rect x="0" y="40" width="400" height="34" fill="#8a5a3c"/>' +
      (function () { let s = ""; for (let x = 8; x < 400; x += 26) s += '<rect x="' + x + '" y="46" width="14" height="10" fill="#2e3440"/><rect x="' + x + '" y="60" width="14" height="10" fill="#2e3440"/>'; return s; })() +
      '<circle cx="30" cy="54" r="22" fill="#5f8f4a"/><circle cx="380" cy="50" r="24" fill="#6fa055"/>' +
      /* chain-link fence */
      '<rect x="0" y="70" width="400" height="70" fill="#c7d3dc" opacity=".25"/>' + fence + '<path d="M0 70h400" stroke="#7d8790" stroke-width="3"/>' +
      (function () { let s = ""; for (let x = 0; x <= 400; x += 100) s += '<rect x="' + (x - 2) + '" y="66" width="4" height="78" fill="#6d757d"/>'; return s; })() +
      /* court surface */
      '<rect x="0" y="140" width="400" height="120" fill="#3f7a5a"/><path d="M0 200h400M200 140v120" stroke="#e8e8e0" stroke-width="2" opacity=".8"/>' +
      '<ellipse cx="120" cy="214" rx="70" ry="16" fill="none" stroke="#e8e8e0" stroke-width="2" opacity=".6"/>' +
      /* handball wall on the right with a hoop */
      '<rect x="300" y="96" width="92" height="52" fill="#d8d2c4"/><rect x="336" y="104" width="22" height="14" fill="none" stroke="#c0392b" stroke-width="2"/>' +
      '<circle class="csBall" cx="330" cy="180" r="6" fill="#e07a2b"/>' +
      /* the cypher: kids in a circle, boombox in the middle */
      kid(62, "#6a5acd") + kid(98, GOLD, 1) + kid(150, JADE) + kid(186, "#c0392b", 1) + kid(226, LAV) +
      '<rect x="126" y="206" width="44" height="22" rx="4" fill="#222"/><circle cx="138" cy="217" r="7" fill="#555"/><circle cx="158" cy="217" r="7" fill="#555"/><path d="M134 206q14-12 28 0" stroke="#222" stroke-width="3" fill="none"/>' +
      '<text class="csNote" x="140" y="196" font-size="16" fill="' + GOLD + '">&#9835;</text><text class="csNote csN2" x="160" y="196" font-size="14" fill="' + LAV + '">&#9834;</text><text class="csNote csN3" x="120" y="196" font-size="14" fill="' + JADE + '">&#9835;</text>' +
      '<text x="200" y="30" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="#fff" letter-spacing="3" stroke="#2a1f44" stroke-width="3" paint-order="stroke">L PARK</text>' +
      label("KOLBERT PLAYGROUND · AVENUE L"),
      sky("csG2", "#8ec2ee", "#f6e3c4"));
  }

  /* 3. P.S. 222 on Quentin Rd in Marine Park: the long low tan-brick school with bands of windows, the flag waving,
        a notebook on the steps with "THE 3RD KIND" doodled on it */
  function ps222() {
    let win = "";
    for (let x = 34; x < 370; x += 30) { win += '<rect x="' + x + '" y="92" width="22" height="26" fill="#3d5a78"/><rect x="' + x + '" y="132" width="22" height="26" fill="#3d5a78"/><path d="M' + (x + 11) + ' 92v26M' + (x + 11) + ' 132v26" stroke="#c9d6e2" stroke-width="1"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#csG3)"/>' +
      '<circle cx="60" cy="40" r="18" fill="#fff4c8"/>' +
      /* school body */
      '<rect x="20" y="78" width="360" height="100" fill="#d8b98a"/><rect x="16" y="72" width="368" height="8" fill="#9a7a56"/>' +
      (function () { let s = ""; for (let y = 84; y < 178; y += 6) s += '<path d="M20 ' + y + 'h360" stroke="#c9a877" stroke-width=".6"/>'; return s; })() +
      win +
      /* entrance block */
      '<rect x="160" y="58" width="80" height="120" fill="#c9a877"/><rect x="156" y="54" width="88" height="6" fill="#9a7a56"/>' +
      '<rect x="168" y="66" width="64" height="16" fill="#1d3a6a"/><text x="200" y="78" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">P.S. 222</text>' +
      '<rect x="176" y="130" width="48" height="48" fill="#4a5a6a"/><path d="M200 130v48" stroke="#c9d6e2" stroke-width="2"/>' +
      /* steps */
      '<rect x="166" y="178" width="68" height="6" fill="#bdb6a8"/><rect x="160" y="184" width="80" height="6" fill="#aaa397"/>' +
      /* flagpole + waving flag */
      '<rect x="326" y="18" width="3" height="160" fill="#c0c4c8"/>' +
      '<g class="csWave"><rect x="329" y="20" width="44" height="26" fill="#f4f4f4"/>' +
      (function () { let s = ""; for (let i = 0; i < 7; i++) s += '<rect x="329" y="' + (20 + i * 3.7) + '" width="44" height="1.9" fill="#c0392b"/>'; return s; })() +
      '<rect x="329" y="20" width="18" height="13" fill="#1d3a6a"/></g>' +
      /* sidewalk, kids' notebook with doodle */
      '<rect x="0" y="190" width="400" height="20" fill="#cfc8ba"/><rect x="0" y="210" width="400" height="50" fill="#3a3d44"/><path d="M0 236h400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g transform="rotate(-8 90 196)"><rect x="56" y="180" width="70" height="26" rx="2" fill="#f2efe6" stroke="#333" stroke-width="1.5"/><path d="M62 180v26" stroke="#c0392b" stroke-width="1"/>' +
      '<text x="94" y="198" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="9" fill="#5b3fd0">THE 3RD KIND</text></g>' +
      '<circle cx="40" cy="190" r="16" fill="#5f8f4a"/><rect x="38" y="190" width="4" height="20" fill="#5a3a2a"/>' +
      '<path class="csLeaf" d="M60 70q6-6 10 0q-4 6-10 0z" fill="#d9822b"/><path class="csLeaf csL2" d="M300 60q6-6 10 0q-4 6-10 0z" fill="#e0a030"/><path class="csLeaf csL3" d="M200 40q6-6 10 0q-4 6-10 0z" fill="#c0392b"/>' +
      label("QUENTIN RD · MARINE PARK", "#f1f1f1"),
      sky("csG3", "#8fc6ef", "#e9f2fa"));
  }

  /* 4. The attic in Flatbush: a cutaway of the old frame house, the attic room lit up, desk lamp, open notebook and a pen
        moving, a mic on a stand, an amethyst on the sill, stars and the moon out the round window */
  function attic() {
    return svg(
      '<rect width="400" height="260" fill="url(#csG4)"/>' + stars(40) +
      '<circle cx="350" cy="36" r="14" fill="#f8f1d0"/><circle cx="356" cy="32" r="12" fill="#1a1636"/>' +
      /* the house: siding below, big gable attic in cutaway */
      '<rect x="60" y="150" width="280" height="110" fill="#c9b48e"/>' +
      (function () { let s = ""; for (let y = 156; y < 260; y += 8) s += '<path d="M60 ' + y + 'h280" stroke="#b39e78" stroke-width="1"/>'; return s; })() +
      '<rect x="90" y="176" width="40" height="50" fill="#f7d58a" class="csFlk"/><rect x="270" y="176" width="40" height="50" fill="#3a3550"/><path d="M110 176v50M90 201h40M290 176v50M270 201h40" stroke="#8b7a5a" stroke-width="2"/>' +
      '<path d="M40 152L200 40L360 152z" fill="#5a3f3a"/>' +
      '<path d="M70 146L200 56L330 146z" fill="#3a2a40"/>' +
      /* attic interior glow */
      '<path d="M84 144L200 64L316 144z" fill="#4b3a6a"/>' +
      '<path d="M84 144L200 64L316 144z" fill="' + GOLD + '" opacity=".14" class="csFlk"/>' +
      /* round window with stars */
      '<circle cx="200" cy="96" r="16" fill="#151231" stroke="#a88a5a" stroke-width="3"/><path d="M184 96h32M200 80v32" stroke="#a88a5a" stroke-width="2"/>' +
      '<circle cx="194" cy="90" r="1.3" fill="#fff" class="csTw"/><circle cx="206" cy="102" r="1.3" fill="#fff" class="csTw csTw2"/>' +
      /* desk + lamp + notebook + pen */
      '<rect x="120" y="126" width="80" height="6" fill="#7a4a2a"/><rect x="124" y="132" width="4" height="12" fill="#5a3a20"/><rect x="192" y="132" width="4" height="12" fill="#5a3a20"/>' +
      '<path d="M132 126v-16l10-8" stroke="#222" stroke-width="2" fill="none"/><path d="M136 100l14-4 2 8z" fill="#2f2f2f"/><path d="M148 104l12 22h-26z" fill="#fff3b0" opacity=".25" class="csFlk"/>' +
      '<rect x="156" y="118" width="32" height="8" fill="#f2efe6"/><path d="M172 118v8" stroke="#888" stroke-width=".8"/><path d="M160 121h8M176 121h8M160 123h6M176 123h9" stroke="#666" stroke-width=".6"/>' +
      '<g class="csPen"><path d="M162 112l6 8" stroke="' + GOLD + '" stroke-width="2.2" stroke-linecap="round"/></g>' +
      /* mic on a stand */
      '<path d="M246 144v-30" stroke="#2b2b2b" stroke-width="2.5"/><path d="M236 144h20" stroke="#2b2b2b" stroke-width="3"/><rect x="241" y="100" width="10" height="16" rx="5" fill="#9aa1ab" stroke="#2b2b2b" stroke-width="1.5"/>' +
      /* amethyst cluster + "47" sticker on the beam */
      '<path d="M272 144l4-14 4 14zM278 144l5-20 5 20zM286 144l3-10 4 10z" fill="#9b6bdc" stroke="#5b3a9a" stroke-width="1"/>' +
      '<rect x="210" y="74" width="22" height="12" rx="2" fill="' + JADE + '" transform="rotate(8 221 80)"/><text x="221" y="84" text-anchor="middle" transform="rotate(8 221 80)" font-family="Anton, Impact, sans-serif" font-size="9" fill="#10233a">47</text>' +
      '<text class="csNote" x="250" y="96" font-size="13" fill="' + LAV + '">&#9834;</text><text class="csNote csN2" x="230" y="100" font-size="12" fill="' + GOLD + '">&#9835;</text>' +
      label("THE ATTIC · FLATBUSH, BROOKLYN"),
      sky("csG4", "#0e0b26", "#3b2a5e"));
  }

  /* 5. Avenue L and East 17th St: green street signs, the wall tagged STEEZ / BEAST COAST / 47,
        the Brighton Line embankment behind with a Q train rolling by */
  function corner() {
    let car = "";
    for (let k = 0; k < 3; k++) { const x0 = k * 140; car += '<rect x="' + x0 + '" y="24" width="134" height="30" rx="4" fill="#c9ced6" stroke="#8a919c" stroke-width="1.5"/>'; for (let w = 0; w < 4; w++) car += '<rect x="' + (x0 + 10 + w * 30) + '" y="30" width="20" height="12" rx="2" fill="#2b3442"/>'; }
    car += '<circle cx="402" cy="39" r="7" fill="#fccc0a"/><text x="402" y="43" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#000">Q</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#csG5)"/>' +
      /* embankment with the train */
      '<rect x="0" y="54" width="400" height="20" fill="#7a6a58"/><path d="M0 54h400" stroke="#4a4038" stroke-width="3"/>' +
      '<g class="csTrainR">' + car + '</g>' +
      '<circle cx="20" cy="70" r="16" fill="#5f8f4a"/><circle cx="388" cy="68" r="18" fill="#6fa055"/>' +
      /* the tag wall */
      '<rect x="20" y="74" width="380" height="142" fill="#3a3352"/>' +
      (function () { let s = ""; for (let y = 82; y < 216; y += 10) s += '<path d="M20 ' + y + 'h380" stroke="#2c2742" stroke-width="1"/>'; return s; })() +
      tag("STEEZ", 150, 162, 46, LAV, -5) +
      tag("BEAST COAST", 196, 202, 22, GOLD, -3) +
      tag("47", 330, 120, 30, JADE, 6) +
      '<path d="M146 112l8-14 8 10 8-12 8 12 8-10 8 14z" fill="' + GOLD + '" stroke="#000" stroke-width="2"/>' +
      /* the sign pole */
      '<rect x="60" y="20" width="6" height="200" fill="#6b7280"/>' +
      '<rect x="4" y="22" width="122" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="65" y="38" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">Avenue L</text>' +
      '<rect x="6" y="48" width="120" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="66" y="64" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">E 17th St</text>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2d33"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      label("MIDWOOD, BROOKLYN", "#e5e7eb"),
      sky("csG5", "#5a7fd0", "#e9c7a0"));
  }

  window.SCENES = { train, lpark, ps222, attic, corner };
})();
