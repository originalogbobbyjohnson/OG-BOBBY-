/* hollyn scenes (Regions: St. Louis + Ohio; Waverly, Pike County, Ohio). CSS classes prefixed hlx- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes hlxcar{0%{transform:translateX(-140px)}100%{transform:translateX(470px)}}.hlx-car{animation:hlxcar 7s linear infinite}' +
    '@keyframes hlxcl{0%{transform:translateX(0)}100%{transform:translateX(40px)}}.hlx-cl{animation:hlxcl 14s ease-in-out infinite alternate}' +
    '@keyframes hlxrip{0%{transform:translateX(0)}100%{transform:translateX(-30px)}}.hlx-rip{animation:hlxrip 3s linear infinite}' +
    '@keyframes hlxboat{0%,100%{transform:translate(0,0)}50%{transform:translate(26px,-2px)}}.hlx-boat{animation:hlxboat 6s ease-in-out infinite}' +
    '@keyframes hlxnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(16px,-56px);opacity:0}}.hlx-nt{animation:hlxnote 3.2s ease-out infinite}.hlx-nt2{animation-delay:-1.1s}.hlx-nt3{animation-delay:-2.2s}' +
    '@keyframes hlxblink{0%,100%{opacity:1}50%{opacity:.2}}.hlx-rec{animation:hlxblink 1.2s steps(2) infinite}' +
    '@keyframes hlxglow{0%,100%{opacity:.5}50%{opacity:1}}.hlx-glow{animation:hlxglow 2.2s ease-in-out infinite}.hlx-g2{animation-delay:-1.1s}' +
    '@keyframes hlxheart{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.hlx-ht{animation:hlxheart 3s ease-out infinite}.hlx-ht2{animation-delay:-1.5s}' +
    '@keyframes hlxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.hlx-sp{animation:hlxspray 1.4s ease-out infinite}.hlx-sp2{animation-delay:.45s}' +
    '@keyframes hlxhand{0%,100%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.hlx-hand{transform-box:view-box;transform-origin:200px 64px;animation:hlxhand 12s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="hlx-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const heart = (x, y, s, c, cls) => '<g class="hlx-ht ' + (cls || "") + '"><path transform="translate(' + x + ' ' + y + ') scale(' + s + ')" d="M0 4c-4 -8 -14 -4 -10 4l10 10l10 -10c4 -8 -6 -12 -10 -4z" fill="' + c + '"/></g>';
  const tree = (x, base, h, c) => '<rect x="' + (x - 2) + '" y="' + (base - h * 0.35) + '" width="4" height="' + (h * 0.35) + '" fill="#4a3322"/><ellipse cx="' + x + '" cy="' + (base - h * 0.6) + '" rx="' + (h * 0.32) + '" ry="' + (h * 0.42) + '" fill="' + c + '"/>';
  const usShield = (x, y, n) => '<path d="M' + x + ' ' + y + 'h40q-2 6 2 12q-4 22 -22 30q-18 -8 -22 -30q4 -6 2 -12z" fill="#fff" stroke="#111" stroke-width="2.5"/><text x="' + (x + 20) + '" y="' + (y + 28) + '" text-anchor="middle" ' + font + ' font-size="17" fill="#111">' + n + '</text>';
  const PINK = "#f2a6c4", SKY = "#7fd3e6", GOLD = "#ffd56b", CREAM = "#fff6ea";

  /* 1. US 23 north through the Scioto Valley: the green exit sign for Waverly, Appalachian foothills, a car rolling in */
  function hlxsign() {
    let trees = "";
    [[20, 150, 34, "#2f6b3a"], [52, 150, 28, "#3c7a42"], [356, 150, 32, "#2f6b3a"], [386, 150, 26, "#3c7a42"]].forEach(t => trees += tree(t[0], t[1], t[2], t[3]));
    return svg(
      '<rect width="400" height="260" fill="url(#hlx1)"/>' +
      '<g class="hlx-cl"><ellipse cx="70" cy="36" rx="36" ry="9" fill="#fff" opacity=".6"/><ellipse cx="250" cy="24" rx="30" ry="7" fill="#fff" opacity=".5"/></g>' +
      '<path d="M0 132q50 -40 110 -14q50 -30 110 -6q60 -34 110 -8q40 -16 70 0v46h-400z" fill="#4f7d4a"/>' +
      '<path d="M0 146q70 -22 140 -4q70 -20 140 -2q60 -14 120 2v14h-400z" fill="#6f9a52"/>' +
      trees +
      '<rect x="0" y="160" width="400" height="100" fill="#4a4a4e"/><rect x="0" y="158" width="400" height="4" fill="#d9d4c6"/>' +
      '<path d="M0 210h400" stroke="#f2c14e" stroke-width="3" stroke-dasharray="26 18"/><rect x="0" y="252" width="400" height="3" fill="#f2f2f2"/>' +
      '<rect x="138" y="102" width="6" height="58" fill="#9aa0a6"/><rect x="306" y="102" width="6" height="58" fill="#9aa0a6"/>' +
      '<rect x="120" y="16" width="210" height="90" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="3"/>' +
      '<rect x="272" y="6" width="54" height="16" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><text x="299" y="18" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">EXIT</text>' +
      '<text x="225" y="54" text-anchor="middle" ' + font + ' font-size="28" fill="#fff">Waverly</text>' +
      '<text x="225" y="78" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" letter-spacing="1">SR 104 · LAKE WHITE</text>' +
      '<path d="M211 90h28l-6 -6M239 90l-6 6" stroke="#fff" stroke-width="2.5" fill="none"/>' +
      usShield(62, 92, "23") + '<rect x="58" y="140" width="48" height="14" fill="#fff" stroke="#111"/><text x="82" y="151" text-anchor="middle" ' + font + ' font-size="10" fill="#111">NORTH</text><rect x="80" y="154" width="4" height="6" fill="#9aa0a6"/>' +
      '<g class="hlx-car"><rect x="0" y="186" width="66" height="18" rx="5" fill="' + PINK + '"/><path d="M12 186l10 -12h22l10 12z" fill="' + PINK + '"/><path d="M18 185l6 -8h8v8zM36 185v-8h8l6 8z" fill="#d6f0f7"/><circle cx="16" cy="206" r="7" fill="#111"/><circle cx="52" cy="206" r="7" fill="#111"/><circle cx="16" cy="206" r="3" fill="#bbb"/><circle cx="52" cy="206" r="3" fill="#bbb"/></g>',
      sky("hlx1", "#5b9bd5", "#f6dcc0"));
  }

  /* 2. Lake White State Park, Waverly: the lake at sunset under the hills, the dam, a little boat drifting */
  function hlxlake() {
    return svg(
      '<rect width="400" height="260" fill="url(#hlx2)"/>' +
      '<circle cx="290" cy="104" r="26" fill="#ffd9a0" opacity=".95"/>' +
      '<path d="M0 120q60 -46 130 -16q60 -36 130 -6q70 -30 140 -6v40h-400z" fill="#5a4a6e"/>' +
      '<path d="M0 132q80 -26 170 -6q90 -20 230 2v12h-400z" fill="#3d5a45"/>' +
      '<rect x="0" y="140" width="400" height="70" fill="#4d7fa0"/>' +
      '<path d="M276 142h28l-4 30h-20z" fill="#ffd9a0" opacity=".25"/>' +
      '<g class="hlx-rip"><path d="M0 156h40M70 168h50M150 152h30M210 176h60M300 160h40M360 172h50M420 156h30" stroke="#cfe8f4" stroke-width="1.5" opacity=".6"/></g>' +
      '<rect x="0" y="204" width="260" height="14" fill="#9b9488"/><rect x="0" y="200" width="260" height="5" fill="#bcb5a8"/>' +
      Array.from({ length: 13 }, (_, i) => '<rect x="' + (i * 20 + 6) + '" y="192" width="3" height="10" fill="#6a645a"/>').join("") +
      '<path d="M0 194h262" stroke="#6a645a" stroke-width="1.5"/>' +
      '<rect x="0" y="218" width="400" height="42" fill="#5b7b3e"/>' +
      '<path d="M260 218q20 -16 60 -12q40 4 80 -4v16z" fill="#4a6a32"/>' +
      '<g class="hlx-boat"><path d="M120 168h46l-8 10h-30z" fill="' + CREAM + '"/><rect x="141" y="140" width="2" height="28" fill="#6b4a2e"/><path d="M143 142l18 22h-18z" fill="' + PINK + '"/></g>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="12" fill="' + CREAM + '" letter-spacing="2">LAKE WHITE · WAVERLY, OHIO</text>' +
      note(340, 128, CREAM, "") + note(60, 110, PINK, "hlx-nt2"),
      sky("hlx2", "#3b3a6e", "#f2a38a"));
  }

  /* 3. Her bedroom in Waverly: posting covers to the world, phone on a tripod, guitar, fairy lights */
  function hlxroom() {
    let lights = "";
    for (let i = 0; i < 12; i++) lights += '<circle cx="' + (24 + i * 32) + '" cy="' + (30 + (i % 2) * 8) + '" r="4" fill="' + [GOLD, PINK, SKY][i % 3] + '" class="hlx-glow ' + (i % 2 ? "hlx-g2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#efd9cf"/>' +
      '<path d="M0 32q100 16 200 0t200 0" stroke="#5a4a40" stroke-width="1.2" fill="none"/>' + lights +
      '<rect x="230" y="58" width="120" height="84" rx="4" fill="#24324e" stroke="#fff" stroke-width="5"/><path d="M290 58v84M230 100h120" stroke="#fff" stroke-width="3"/>' +
      '<circle cx="320" cy="78" r="8" fill="#fff7d6"/><circle cx="252" cy="72" r="1.5" fill="#fff"/><circle cx="270" cy="120" r="1.5" fill="#fff"/><circle cx="336" cy="126" r="1.5" fill="#fff"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#b48a6a"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52) + ' 196v64" stroke="#9a7254" stroke-width="1.5"/>').join("") +
      '<rect x="20" y="150" width="170" height="52" rx="6" fill="' + PINK + '"/><rect x="20" y="140" width="170" height="16" rx="6" fill="#fff"/><rect x="26" y="120" width="40" height="24" rx="8" fill="#fff"/>' +
      /* guitar leaning on the bed */
      '<g transform="rotate(-18 120 170)"><ellipse cx="120" cy="186" rx="22" ry="18" fill="#c47a3a"/><ellipse cx="120" cy="166" rx="16" ry="13" fill="#c47a3a"/><circle cx="120" cy="176" r="6" fill="#3a2412"/><rect x="117" y="100" width="6" height="68" fill="#5a3a22"/><rect x="114" y="92" width="12" height="12" rx="2" fill="#3a2412"/></g>' +
      /* tripod + phone recording */
      '<path d="M300 200l-14 50M300 200l14 50M300 200v50" stroke="#333" stroke-width="3"/><rect x="284" y="160" width="32" height="44" rx="4" fill="#222"/><rect x="287" y="164" width="26" height="34" fill="#4d7fa0"/>' +
      '<circle cx="306" cy="168" r="3" fill="#e5322d" class="hlx-rec"/><text x="300" y="186" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">REC</text>' +
      '<rect x="210" y="210" width="50" height="8" rx="2" fill="' + SKY + '"/><text x="235" y="236" text-anchor="middle" ' + font + ' font-size="9" fill="#5a3a22">COVER #1</text>' +
      note(150, 112, "#5a3a22", "") + note(180, 100, "#c45a8a", "hlx-nt2") + note(210, 116, "#5a3a22", "hlx-nt3"));
  }

  /* 4. Main Street, Franklin, Tennessee, where her label lives: old brick storefronts and the glowing theatre marquee */
  function hlxfranklin() {
    const fronts = [[0, 70, "#9a4a3a"], [70, 60, "#c9b28a"], [270, 60, "#7a3e34"], [330, 70, "#b56a4a"]];
    let s = "";
    fronts.forEach(f => { s += '<rect x="' + f[0] + '" y="80" width="' + f[1] + '" height="120" fill="' + f[2] + '"/><rect x="' + f[0] + '" y="76" width="' + f[1] + '" height="8" fill="#5a3a2a"/>'; for (let i = 0; i < 2; i++) s += '<rect x="' + (f[0] + 10 + i * (f[1] / 2)) + '" y="98" width="' + (f[1] / 2 - 18) + '" height="30" fill="#fff2c8" opacity=".85"/>'; s += '<rect x="' + (f[0] + 8) + '" y="150" width="' + (f[1] - 16) + '" height="50" fill="#2a2f3a"/>'; });
    let bulbs = "";
    for (let i = 0; i < 16; i++) bulbs += '<circle cx="' + (142 + i * 8) + '" cy="108" r="2.2" fill="' + GOLD + '" class="hlx-glow ' + (i % 2 ? "hlx-g2" : "") + '"/><circle cx="' + (142 + i * 8) + '" cy="150" r="2.2" fill="' + GOLD + '" class="hlx-glow ' + (i % 2 ? "" : "hlx-g2") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hlx4)"/>' +
      '<circle cx="60" cy="40" r="2" fill="#fff"/><circle cx="330" cy="30" r="1.6" fill="#fff"/><circle cx="210" cy="20" r="1.4" fill="#fff"/>' +
      s +
      '<rect x="130" y="60" width="140" height="140" fill="#5a2a2a"/><rect x="130" y="56" width="140" height="8" fill="#3a1a1a"/>' +
      '<rect x="186" y="10" width="28" height="98" fill="#1d1a2a" stroke="' + GOLD + '" stroke-width="2"/>' +
      "FRANKLIN".split("").map((c, i) => '<text x="200" y="' + (21 + i * 10.4) + '" text-anchor="middle" ' + font + ' font-size="10" fill="' + PINK + '" class="hlx-glow' + (i % 2 ? ' hlx-g2' : '') + '">' + c + '</text>').join("") +
      '<path d="M134 104h132l-8 50h-116z" fill="#1d1a2a"/>' + bulbs +
      '<text x="200" y="126" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">TONIGHT</text><text x="200" y="142" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">HOLLYN</text>' +
      '<rect x="160" y="160" width="80" height="40" fill="#2a2f3a"/><path d="M200 160v40" stroke="#555" stroke-width="2"/>' +
      '<rect x="0" y="200" width="400" height="12" fill="#c9c2b4"/><rect x="0" y="212" width="400" height="48" fill="#3e3e44"/>' +
      '<path d="M0 238h400" stroke="#f2c14e" stroke-width="2" stroke-dasharray="20 16"/>' +
      '<rect x="44" y="150" width="4" height="50" fill="#222"/><circle cx="46" cy="148" r="6" fill="#fff2c8" class="hlx-glow"/><rect x="352" y="150" width="4" height="50" fill="#222"/><circle cx="354" cy="148" r="6" fill="#fff2c8" class="hlx-glow hlx-g2"/>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '" letter-spacing="2">MAIN ST · FRANKLIN, TN</text>' +
      note(290, 120, GOLD, "") + note(110, 130, PINK, "hlx-nt2"),
      sky("hlx4", "#1a1838", "#5a3a6a"));
  }

  /* 5. Her corner in Waverly: Market St and E 2nd St, a wall tagged HOLLYN, the Pike County Courthouse clock tower behind */
  function hlxcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#hlx5)"/>' +
      '<g class="hlx-cl"><ellipse cx="80" cy="30" rx="34" ry="8" fill="#fff" opacity=".5"/><ellipse cx="320" cy="44" rx="28" ry="7" fill="#fff" opacity=".4"/></g>' +
      /* courthouse: red brick, white trim, clock tower */
      '<rect x="120" y="96" width="160" height="70" fill="#9a4a3a"/><path d="M114 98l86 -20l86 20z" fill="#e8e2d6"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (132 + i * 24) + '" y="110" width="12" height="22" rx="5" fill="#fff6e0"/><rect x="' + (132 + i * 24) + '" y="140" width="12" height="20" fill="#fff6e0"/>').join("") +
      '<rect x="184" y="42" width="32" height="40" fill="#e8e2d6"/><rect x="180" y="38" width="40" height="6" fill="#cfc8ba"/><path d="M186 38l14 -22l14 22z" fill="#5a6a7a"/>' +
      '<circle cx="200" cy="64" r="11" fill="#fff" stroke="#333" stroke-width="1.5"/><path d="M200 64v-7" stroke="#333" stroke-width="1.5"/><g class="hlx-hand"><path d="M200 64h7" stroke="#333" stroke-width="1.5"/></g>' +
      '<rect x="0" y="162" width="400" height="58" fill="#efe3d0"/><rect x="0" y="158" width="400" height="6" fill="#5a6a7a"/>' +
      tag("HOLLYN", 20, 206, 34, PINK, -5) + tag("LOVELY", 196, 194, 17, SKY, -4) + tag("WAVERLY", 206, 214, 14, GOLD, -3) +
      '<g class="hlx-sp"><circle cx="176" cy="190" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="hlx-sp hlx-sp2"><circle cx="182" cy="184" r="2" fill="' + PINK + '" opacity=".6"/></g>' +
      heart(150, 172, 0.8, PINK, "") + heart(60, 168, 0.6, SKY, "hlx-ht2") +
      '<rect x="0" y="220" width="400" height="40" fill="#4c4a46"/><rect x="0" y="218" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="338" y="70" width="6" height="150" fill="#2f2f2f"/>' + sign(290, 70, 100, "MARKET ST") + sign(296, 96, 94, "E 2ND ST"),
      sky("hlx5", "#5b9bd5", "#f6c9b0"));
  }

  window.SCENES = { hlxsign: hlxsign, hlxlake: hlxlake, hlxroom: hlxroom, hlxfranklin: hlxfranklin, hlxcorner: hlxcorner };
})();
