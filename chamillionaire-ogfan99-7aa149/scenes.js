/* chamillionaire scenes (Regions tab: Houston + Texas; Acres Homes, northwest Houston, where Hakeem Seriki grew up after moving from D.C. at four). CSS classes and ids prefixed cm- (the page's own anim-train is kept).
   1 Acres Home Transit Center (W Little York Rd, Acres Homes): the long bus canopy under the tall pines, the METRO 44 Acres Homes bus pulling in.
   2 The radio studio (he and Paul Wall freestyled on the intro of Michael "5000" Watts' radio show, which Watts put on a mixtape; Mixtape Messiah series): ON AIR light, two mics, a turntable spinning, tapes stacked.
   3 The custom shop (he invested in a Houston custom car shop in 2003; "Color Changin' Click", "chameleon paint appearance"): a slab on the lift whose paint keeps changing color, the spray gun misting.
   4 "Ridin'" on the North Freeway: I-45 North at night, green gantry signs, a candy slab gliding by with music notes, a patrol car's lights flashing behind ("Houston, Texas, you can check my tags").
   5 W Montgomery Rd and W Little York Rd in Acres Homes: green signs, CHAMILLIONAIRE tagged on the brick, pines, the San Jacinto Monument with its star far off on the horizon. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cmflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.25}55%{opacity:.9}}.cm-flk{animation:cmflick 2.2s infinite}' +
    '@keyframes cmspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.cm-spin{transform-box:fill-box;transform-origin:50% 50%;animation:cmspin 1.8s linear infinite}' +
    '@keyframes cmmeter{0%,100%{transform:scaleY(.35)}30%{transform:scaleY(1)}60%{transform:scaleY(.6)}}.cm-mt{transform-box:fill-box;transform-origin:50% 100%;animation:cmmeter .7s ease-in-out infinite}.cm-mt2{animation-delay:-.2s}.cm-mt3{animation-delay:-.45s}.cm-mt4{animation-delay:-.6s}' +
    '@keyframes cmpaint{0%{fill:#3ddc84}25%{fill:#2bb8ff}50%{fill:#a35bff}75%{fill:#ff4fa3}100%{fill:#3ddc84}}.cm-paint{animation:cmpaint 4s linear infinite}' +
    '@keyframes cmmist{0%{transform:translate(0,0);opacity:.8}100%{transform:translate(34px,-14px);opacity:0}}.cm-mist{animation:cmmist 1.2s ease-out infinite}.cm-mist2{animation-delay:-.4s}.cm-mist3{animation-delay:-.8s}' +
    '@keyframes cmslab{from{transform:translateX(-200px)}to{transform:translateX(560px)}}.cm-slab{animation:cmslab 7s linear infinite;animation-delay:-3.2s}' +
    '@keyframes cmcop{from{transform:translateX(-420px)}to{transform:translateX(340px)}}.cm-cop{animation:cmcop 7s linear infinite;animation-delay:-3.2s}' +
    '@keyframes cmred{0%,49%{opacity:1}50%,100%{opacity:.15}}.cm-red{animation:cmred .5s infinite}.cm-blue{animation:cmred .5s infinite;animation-delay:-.25s}' +
    '@keyframes cmnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(20px,-50px);opacity:0}}.cm-note{animation:cmnote 2.2s ease-out infinite}.cm-n2{animation-delay:-.7s}.cm-n3{animation-delay:-1.4s}' +
    '@keyframes cmsway{0%,100%{transform:rotate(-1.5deg)}50%{transform:rotate(1.5deg)}}.cm-sway{transform-box:fill-box;transform-origin:50% 100%;animation:cmsway 3.5s ease-in-out infinite}' +
    '@keyframes cmtwk{0%,100%{opacity:.25}50%{opacity:1}}.cm-tw{animation:cmtwk 1.6s ease-in-out infinite}.cm-tw2{animation-delay:-.8s}' +
    '@keyframes cmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cm-sp{animation:cmspray 1.4s ease-out infinite}.cm-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "cm-tw" + (i % 2 ? " cm-tw2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const METRO = "#1f4e79", GREEN = "#3ddc84", PURP = "#a35bff", GOLD = "#ffd23f", PINK = "#ff4fa3";
  /* tall loblolly pine: bare trunk, crown up top */
  const pine = (x, base, s, cls) => '<g class="' + (cls || "") + '"><rect x="' + (x - 2.5 * s) + '" y="' + (base - 70 * s) + '" width="' + (5 * s) + '" height="' + (70 * s) + '" fill="#5a4330"/>' +
    '<ellipse cx="' + x + '" cy="' + (base - 74 * s) + '" rx="' + (16 * s) + '" ry="' + (12 * s) + '" fill="#2d5a36"/><ellipse cx="' + (x - 8 * s) + '" cy="' + (base - 62 * s) + '" rx="' + (11 * s) + '" ry="' + (7 * s) + '" fill="#346a3f"/><ellipse cx="' + (x + 9 * s) + '" cy="' + (base - 84 * s) + '" rx="' + (10 * s) + '" ry="' + (7 * s) + '" fill="#346a3f"/></g>';
  /* low slab car (no logos) */
  const slab = (body, cls) => '<rect x="0" y="12" width="140" height="22" rx="6" class="' + (cls || "") + '" fill="' + body + '"/><path d="M26 12l16 -16h52l18 16z" class="' + (cls || "") + '" fill="' + body + '"/><path d="M46 -1h44l12 12h-64z" fill="#cfe9ff" opacity=".7"/>' +
    '<path d="M4 20h132" stroke="#fff" stroke-width="2" opacity=".4"/>' + [30, 110].map(x => '<g><circle cx="' + x + '" cy="36" r="11" fill="#d8dde2" stroke="#222" stroke-width="3"/><g class="cm-spin"><path d="M' + x + ' 27v18M' + (x - 9) + ' 36h18" stroke="#8a929a" stroke-width="2"/></g><path d="M' + x + ' 36l-20 0" stroke="#eef2f5" stroke-width="3"/></g>').join("") +
    '<circle cx="138" cy="22" r="3" fill="#fff6c2"/>';

  /* 1. Acres Home Transit Center, METRO 44 Acres Homes */
  function cmstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (62 + i * 36) + '" y="148" width="30" height="22" rx="3" fill="#1d2833"/>').join("");
    const bus = '<g class="anim-train"><rect x="28" y="138" width="318" height="70" rx="10" fill="#f4f5f3" stroke="#8f979e" stroke-width="2"/>' + win +
      '<rect x="34" y="148" width="22" height="48" rx="2" fill="#1d2833"/><rect x="28" y="178" width="318" height="8" fill="' + METRO + '"/><rect x="28" y="188" width="318" height="3" fill="#e31837"/>' +
      '<rect x="32" y="140" width="120" height="10" rx="2" fill="#111"/><text x="92" y="148" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">44 ACRES HOMES</text>' +
      '<circle cx="80" cy="210" r="12" fill="#222"/><circle cx="80" cy="210" r="5" fill="#9aa1a8"/><circle cx="294" cy="210" r="12" fill="#222"/><circle cx="294" cy="210" r="5" fill="#9aa1a8"/>' +
      '<circle cx="32" cy="198" r="3.5" fill="#fff6c2"/></g>';
    const canopy = '<path d="M20 92l40 -16h280l40 16z" fill="#e8ebee" stroke="#9aa3ab" stroke-width="2"/><rect x="20" y="92" width="360" height="6" fill="' + METRO + '"/>' +
      [40, 120, 200, 280, 360].map(x => '<rect x="' + (x - 3) + '" y="98" width="6" height="42" fill="#7a8088"/>').join("") +
      '<rect x="150" y="100" width="100" height="12" rx="2" fill="#111"/><text x="200" y="109" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a" class="cm-flk">44 · 3 · 30</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#cms1)"/>' +
      pine(18, 140, 1.15, "cm-sway") + pine(70, 136, 0.9) + pine(330, 138, 1.05, "cm-sway") + pine(384, 140, 1.2) + pine(250, 120, 0.7) +
      canopy +
      '<rect x="0" y="136" width="400" height="124" fill="#55565c"/><rect x="0" y="132" width="400" height="6" fill="#cfc9bd"/><path d="M0 232h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="22 16"/>' +
      bus +
      '<rect x="20" y="218" width="320" height="34" rx="3" fill="#111"/><text x="30" y="240" ' + font + ' font-size="13" fill="#fff">Acres Home Transit Center</text><rect x="290" y="226" width="40" height="18" rx="9" fill="' + METRO + '"/><text x="310" y="239" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">44</text>',
      sky("cms1", "#f39a5c", "#ffe0ae"));
  }

  /* 2. The radio studio: freestyling on the intro of the mixtape show */
  function cmradio() {
    const meters = Array.from({ length: 8 }, (_, i) => '<rect class="cm-mt cm-mt' + (1 + i % 4) + '" x="' + (232 + i * 14) + '" y="168" width="8" height="26" fill="' + (i < 5 ? GREEN : i < 7 ? GOLD : "#ff4b4b") + '"/>').join("");
    const tapes = Array.from({ length: 5 }, (_, i) => '<g><rect x="' + (22 + (i % 2) * 6) + '" y="' + (196 - i * 15) + '" width="70" height="13" rx="2" fill="' + [GREEN, PURP, "#2bb8ff", PINK, GOLD][i] + '" stroke="#111"/><text x="' + (57 + (i % 2) * 6) + '" y="' + (205.5 - i * 15) + '" text-anchor="middle" ' + font + ' font-size="5.5" fill="#111">MIXTAPE MESSIAH</text></g>').join("");
    const mic = (x, flip) => '<path d="M' + x + ' 40v40l' + (flip ? -30 : 30) + ' 30" stroke="#333" stroke-width="4" fill="none"/><rect x="' + (x + (flip ? -40 : 22)) + '" y="104" width="18" height="34" rx="9" fill="#3a3a3a" stroke="#888" stroke-width="2"/><path d="M' + (x + (flip ? -38 : 24)) + ' 112h14M' + (x + (flip ? -38 : 24)) + ' 118h14M' + (x + (flip ? -38 : 24)) + ' 124h14" stroke="#777"/>';
    return svg(
      '<rect width="400" height="260" fill="#1c1626"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="38" height="150" fill="' + (i % 2 ? "#251d33" : "#2a213a") + '"/>').join("") +
      '<rect x="140" y="18" width="120" height="30" rx="4" fill="#3a0d0d" stroke="#555" stroke-width="2"/><text x="200" y="40" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="#ff3b3b" class="cm-flk">ON AIR</text>' +
      '<rect x="290" y="30" width="90" height="70" fill="#0d1a2a" stroke="#666" stroke-width="3"/>' + stars(6).replace(/cx="(\d+)"/g, (m, a) => 'cx="' + (296 + (+a % 80)) + '"').replace(/cy="(\d+)"/g, (m, a) => 'cy="' + (36 + (+a % 56)) + '"') +
      mic(120, false) + mic(250, true) +
      '<rect x="0" y="150" width="400" height="110" fill="#3b2a1e"/><rect x="0" y="150" width="400" height="8" fill="#5a412e"/>' +
      '<rect x="110" y="162" width="110" height="60" rx="4" fill="#2a2a2e" stroke="#555"/><circle cx="160" cy="192" r="26" fill="#111"/><g class="cm-spin"><circle cx="160" cy="192" r="26" fill="#111"/><circle cx="160" cy="192" r="18" fill="none" stroke="#333"/><circle cx="160" cy="192" r="9" fill="' + PURP + '"/><path d="M160 184v-4" stroke="#fff" stroke-width="2"/></g><circle cx="160" cy="192" r="2" fill="#ddd"/>' +
      '<path d="M206 170l-12 30" stroke="#bbb" stroke-width="3"/>' +
      '<rect x="226" y="162" width="124" height="60" rx="4" fill="#2a2a2e" stroke="#555"/>' + meters +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (232 + i * 14) + '" y="200" width="8" height="14" rx="2" fill="#777"/>').join("") +
      tapes +
      '<g class="cm-note"><text x="300" y="150" font-size="22" fill="' + GREEN + '">&#9834;</text></g><g class="cm-note cm-n2"><text x="330" y="140" font-size="18" fill="' + PURP + '">&#9835;</text></g>');
  }

  /* 3. The custom shop: chameleon paint */
  function cmshop() {
    return svg(
      '<rect width="400" height="260" fill="url(#cms3)"/>' +
      '<rect x="20" y="40" width="360" height="160" fill="#c9c3b6"/><rect x="20" y="40" width="360" height="12" fill="#8c8678"/>' +
      '<rect x="60" y="56" width="280" height="24" rx="3" fill="#111" stroke="' + GREEN + '" stroke-width="2"/><text x="200" y="74" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="' + GREEN + '" class="cm-flk">CUSTOM PAINT · RIMS · AUDIO</text>' +
      '<rect x="44" y="88" width="312" height="112" fill="#2b2f36"/>' + Array.from({ length: 4 }, (_, i) => '<path d="M44 ' + (92 + i * 8) + 'h312" stroke="#4a5059" stroke-width="3"/>').join("") +
      '<rect x="44" y="120" width="312" height="80" fill="#3a4049"/>' +
      '<rect x="110" y="182" width="180" height="8" fill="#e0b021"/><rect x="120" y="190" width="8" height="18" fill="#777"/><rect x="272" y="190" width="8" height="18" fill="#777"/>' +
      '<g transform="translate(130 136)">' + slab(GREEN, "cm-paint") + '</g>' +
      '<g transform="translate(300 150)"><rect x="0" y="0" width="22" height="10" rx="2" fill="#888"/><rect x="6" y="10" width="6" height="18" fill="#555"/><path d="M0 3l-10 2l10 3z" fill="#aaa"/>' +
      '<circle class="cm-mist" cx="-14" cy="5" r="5" fill="#ff4fa3" opacity=".6" transform="scale(-1 1)"/><circle class="cm-mist cm-mist2" cx="-14" cy="5" r="4" fill="#2bb8ff" opacity=".6" transform="scale(-1 1)"/><circle class="cm-mist cm-mist3" cx="-14" cy="5" r="4" fill="' + PURP + '" opacity=".6" transform="scale(-1 1)"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#6c6a66"/><path d="M0 200h400" stroke="#4d4b48" stroke-width="3"/>' +
      [0, 1, 2].map(i => '<ellipse cx="62" cy="' + (192 - i * 12) + '" rx="22" ry="7" fill="#1b1b1b" stroke="#444" stroke-width="2"/>').join("") + '<ellipse cx="62" cy="168" rx="9" ry="3" fill="#555"/>' +
      [0, 1].map(i => '<g transform="translate(' + (326 + i * 26) + ' 186)"><circle r="11" fill="#d8dde2" stroke="#222" stroke-width="3"/><g class="cm-spin"><path d="M0 -9v18M-9 0h18" stroke="#8a929a" stroke-width="2.5"/></g></g>').join(""),
      sky("cms3", "#7fc4f0", "#d9eefa"));
  }

  /* 4. Ridin' on the North Freeway (I-45 North) at night */
  function cmfreeway() {
    const shield = (x, y) => '<path d="M' + x + ' ' + y + 'h26v14q0 12 -13 16q-13 -4 -13 -16z" fill="#1d4f9c" stroke="#fff" stroke-width="1.5"/><rect x="' + x + '" y="' + y + '" width="26" height="6" fill="#c8102e"/><text x="' + (x + 13) + '" y="' + (y + 20) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">45</text>';
    const lamps = [40, 150, 260, 370].map(x => '<g><rect x="' + (x - 2) + '" y="100" width="4" height="70" fill="#4a4f56"/><path d="M' + x + ' 100h14" stroke="#4a4f56" stroke-width="3"/><circle cx="' + (x + 15) + '" cy="102" r="4" fill="#ffdd88"/><path d="M' + (x + 15) + ' 106l-14 60h28z" fill="#ffdd88" opacity=".08"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cms4)"/>' + stars(26) +
      '<path d="M0 150l30 -6l20 4l40 -14l30 6l50 -20l40 12l40 -8l40 10l50 -12l60 10v20h-400z" fill="#141a2a"/>' +
      '<rect x="40" y="24" width="8" height="98" fill="#6b7178"/><rect x="352" y="24" width="8" height="98" fill="#6b7178"/><rect x="40" y="24" width="320" height="8" fill="#6b7178"/>' +
      '<rect x="60" y="34" width="150" height="56" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' + shield(70, 42) + '<text x="104" y="56" ' + font + ' font-size="11" fill="#fff">NORTH</text><text x="104" y="80" ' + font + ' font-size="13" fill="#fff">Conroe</text>' +
      '<rect x="222" y="34" width="122" height="56" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><rect x="292" y="26" width="44" height="12" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="314" y="35.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">EXIT</text>' +
      '<text x="283" y="58" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Tidwell Rd</text><text x="283" y="78" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">1/2 MILE</text>' +
      lamps +
      '<rect x="0" y="168" width="400" height="92" fill="#2c2f36"/><rect x="0" y="166" width="400" height="5" fill="#9aa0a6"/><path d="M0 214h400" stroke="#e8e8e8" stroke-width="3" stroke-dasharray="20 18"/>' +
      '<g class="cm-slab"><g transform="translate(0 176)">' + slab(PURP) + '</g><g class="cm-note"><text x="60" y="166" font-size="18" fill="' + GREEN + '">&#9834;</text></g><g class="cm-note cm-n2"><text x="90" y="160" font-size="16" fill="' + GOLD + '">&#9835;</text></g></g>' +
      '<g class="cm-cop"><g transform="translate(0 190)"><rect x="0" y="12" width="120" height="20" rx="5" fill="#f2f2f2"/><path d="M24 12l14 -12h40l14 12z" fill="#1d1d1d"/><rect x="0" y="20" width="120" height="5" fill="#1d1d1d"/>' +
      '<rect x="44" y="-6" width="14" height="6" rx="2" fill="#ff2a2a" class="cm-red"/><rect x="60" y="-6" width="14" height="6" rx="2" fill="#2a6bff" class="cm-blue"/>' +
      '<circle cx="24" cy="34" r="9" fill="#222"/><circle cx="96" cy="34" r="9" fill="#222"/><circle cx="118" cy="20" r="3" fill="#fff6c2"/></g></g>',
      sky("cms4", "#060a18", "#1e2a4a"));
  }

  /* 5. W Montgomery Rd and W Little York Rd, Acres Homes */
  function cmcorner() {
    const brick = '<rect x="0" y="96" width="400" height="124" fill="#8a4b3a"/>' + Array.from({ length: 12 }, (_, r) => '<path d="M0 ' + (104 + r * 10) + 'h400" stroke="#6e3a2c" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<path d="M' + (c * 30 + (r % 2) * 15) + ' ' + (96 + r * 10) + 'v8" stroke="#6e3a2c" stroke-width="1"/>').join("")).join("");
    /* San Jacinto Monument: tapered octagonal shaft, observation top, star */
    const monument = '<g><path d="M186 92l6 -58h16l6 58z" fill="#d8cdb4"/><path d="M200 34v58" stroke="#bfb397" stroke-width="2"/><rect x="190" y="26" width="20" height="10" fill="#cfc3a8"/>' +
      '<path d="M200 6l2.6 7.4h7.8l-6.3 4.6l2.4 7.5l-6.5 -4.6l-6.5 4.6l2.4 -7.5l-6.3 -4.6h7.8z" fill="#efe6cf" class="cm-flk"/><rect x="172" y="88" width="56" height="8" fill="#cfc3a8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cms5)"/>' + monument +
      pine(30, 96, 0.8) + pine(372, 96, 0.85, "cm-sway") + pine(120, 96, 0.55) + pine(300, 96, 0.6) +
      brick +
      tag("CHAMILLIONAIRE", 150, 184, 25, GREEN, -5) + tag("KOOPA", 214, 132, 22, PURP, -8) + tag("COLOR CHANGIN", 176, 210, 15, GOLD, -3) +
      '<g transform="translate(372 196)"><rect x="0" y="0" width="12" height="24" rx="3" fill="#ddd"/><rect x="2" y="-5" width="8" height="5" fill="#555"/>' +
      '<circle class="cm-sp" cx="6" cy="-10" r="3" fill="' + GREEN + '"/><circle class="cm-sp cm-sp2" cx="10" cy="-12" r="2.5" fill="' + GREEN + '"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#8a8a88"/><rect x="0" y="218" width="400" height="4" fill="#bcbcb6"/>' +
      '<rect x="70" y="96" width="6" height="140" fill="#5c646c"/>' + sign(8, 100, 134, "W Montgomery Rd") + sign(4, 126, 142, "W Little York Rd"),
      sky("cms5", "#3b2f6b", "#f59a5a"));
  }

  window.SCENES = { cmstation, cmradio, cmshop, cmfreeway, cmcorner };
})();
