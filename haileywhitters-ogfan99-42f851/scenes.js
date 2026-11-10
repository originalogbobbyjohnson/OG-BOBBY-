/* haileywhitters scenes (Regions: Kansas City / Genres: country; Shueyville, Iowa, between Iowa City and Cedar Rapids). CSS classes prefixed hwt- (the page's own anim-train is kept).
   Sources: Wikipedia (born 1989, from Shueyville, attended Prairie High School, Cedar Rapids); Holler "Home Sweet Home: Hailey Whitters" (Shuey's Restaurant & Lounge, Melsha's Tap in the town over where she booked her first show,
   the DanceMor Ballroom in Swisher, open since the 1930s, final stop of her headlining tour and a song title; her parents' cornfield she cut through to her grandma's house); iowahighways.org (I-380 Exit 10 = Swisher / Shueyville / Lake Macbride).
   No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#f4c430", PINK = "#e8507a", GREEN = "#5aa36a", CREAM = "#f6efdc", BARN = "#a8322a";
  const css = '<style>' +
    '@keyframes hwtglow{0%,100%{opacity:.45}50%{opacity:1}}.hwt-glow{animation:hwtglow 2.4s ease-in-out infinite}.hwt-g2{animation-delay:-1.2s}' +
    '@keyframes hwtnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-58px);opacity:0}}.hwt-nt{animation:hwtnote 3.2s ease-out infinite}.hwt-nt2{animation-delay:-1.1s}.hwt-nt3{animation-delay:-2.2s}' +
    '@keyframes hwtcloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.hwt-cl{animation:hwtcloud 14s ease-in-out infinite alternate}' +
    '@keyframes hwthop{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.hwt-hop{animation:hwthop .55s ease-in-out infinite}.hwt-h2{animation-delay:-.27s}' +
    '@keyframes hwtsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.hwt-sway{transform-box:fill-box;transform-origin:50% 100%;animation:hwtsway 2.6s ease-in-out infinite}.hwt-s2{animation-delay:-1.3s}' +
    '@keyframes hwtspin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.hwt-spin{transform-box:fill-box;transform-origin:50% 50%;animation:hwtspin 6s linear infinite}' +
    '@keyframes hwtspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.hwt-sp{animation:hwtspray 1.4s ease-out infinite}.hwt-sp2{animation-delay:.45s}' +
    '@keyframes hwttwk{0%,100%{opacity:.2}50%{opacity:1}}.hwt-tw{animation:hwttwk 1.8s ease-in-out infinite}.hwt-tw2{animation-delay:-.9s}' +
    '@keyframes hwtball{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.hwt-ball{transform-box:fill-box;transform-origin:50% 50%;animation:hwtball 5s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="hwt-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  /* a corn stalk with leaves and a tassel, swaying */
  const stalk = (x, y, h, cls) => '<g class="hwt-sway ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'v-' + h + '" stroke="#4f8a3a" stroke-width="2.4"/>' +
    '<path d="M' + x + ' ' + (y - h * .35) + 'q-12 -4 -16 4M' + x + ' ' + (y - h * .55) + 'q12 -6 16 2M' + x + ' ' + (y - h * .75) + 'q-10 -6 -14 0" stroke="#5aa34a" stroke-width="2.4" fill="none"/>' +
    '<ellipse cx="' + (x + 4) + '" cy="' + (y - h * .5) + '" rx="2.6" ry="6" fill="' + GOLD + '"/><path d="M' + x + ' ' + (y - h) + 'l-4 -7M' + x + ' ' + (y - h) + 'l0 -8M' + x + ' ' + (y - h) + 'l4 -7" stroke="#d8b860" stroke-width="1.4"/></g>';
  const cornrow = (y, h, step, x0, keep) => Array.from({ length: Math.ceil((420 - (x0 || 0)) / step) }, (_, i) => (x0 || 0) + i * step).filter(x => !keep || keep(x)).map((x, i) => stalk(x, y, h + (i * 7) % 6, i % 2 ? 'hwt-s2' : '')).join("");
  const fields = (y, c1, c2) => '<path d="M0 ' + y + 'q100 -14 200 -4t200 -6v' + (H - y + 20) + 'h-400z" fill="' + c1 + '"/><path d="M0 ' + (y + 14) + 'q120 -10 240 0t160 -4v' + (H - y) + 'h-400z" fill="' + c2 + '"/>';

  /* ROOM 0: I-380 Exit 10, Swisher / Shueyville, cornfields on both sides, the tour van pulling in */
  function hwtroad() {
    return svg(
      '<rect width="400" height="260" fill="url(#hwt1)"/>' +
      '<g class="hwt-cl"><ellipse cx="70" cy="34" rx="38" ry="9" fill="#fff" opacity=".6"/><ellipse cx="290" cy="24" rx="44" ry="9" fill="#fff" opacity=".5"/></g>' +
      fields(130, "#c8b45a", "#8aa04a") +
      '<path d="M0 260L170 150h60L400 260z" fill="#55565a"/><path d="M200 150v110" stroke="#f4f4f2" stroke-width="3" stroke-dasharray="12 10"/>' +
      '<path d="M0 260L170 150M400 260L230 150" stroke="#f2d04a" stroke-width="2"/>' +
      cornrow(170, 30, 16, 252) +
      /* green exit sign on two posts */
      '<rect x="250" y="100" width="5" height="70" fill="#6a6e72"/><rect x="372" y="100" width="5" height="70" fill="#6a6e72"/>' +
      '<rect x="318" y="30" width="58" height="16" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="347" y="42" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">EXIT 10</text>' +
      '<rect x="234" y="46" width="160" height="66" rx="5" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="314" y="66" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">Swisher</text>' +
      '<text x="314" y="86" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">Shueyville</text>' +
      '<text x="314" y="104" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">LAKE MACBRIDE</text>' +
      /* interstate shield I-380 */
      '<rect x="40" y="88" width="5" height="70" fill="#6a6e72"/>' +
      '<path d="M18 52h50v8q0 26 -25 38q-25 -12 -25 -38z" fill="#1a3f8f" stroke="#fff" stroke-width="2"/><path d="M18 52h50v9h-50z" fill="#c8202a"/>' +
      '<text x="43" y="82" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">380</text>' +
      cornrow(170, 30, 16, 0, x => x < 110) +
      /* the van pulling in */
      '<g class="anim-train"><rect x="60" y="182" width="150" height="50" rx="9" fill="' + CREAM + '" stroke="#2a2a2a" stroke-width="2"/>' +
      '<path d="M178 186h26q6 0 6 8v14h-32z" fill="#a8cde0" stroke="#2a2a2a" stroke-width="1.5"/>' +
      '<rect x="72" y="190" width="28" height="18" rx="2" fill="#a8cde0"/><rect x="106" y="190" width="28" height="18" rx="2" fill="#a8cde0"/><rect x="140" y="190" width="28" height="18" rx="2" fill="#a8cde0"/>' +
      '<rect x="60" y="214" width="150" height="5" fill="' + PINK + '"/><circle cx="90" cy="234" r="10" fill="#1d1d1d"/><circle cx="182" cy="234" r="10" fill="#1d1d1d"/><circle cx="90" cy="234" r="4" fill="#9aa"/><circle cx="182" cy="234" r="4" fill="#9aa"/>' +
      '<rect x="40" y="200" width="22" height="22" rx="2" fill="#5a4030"/><rect x="40" y="200" width="22" height="4" fill="' + GOLD + '"/>' +
      '<circle cx="206" cy="222" r="3" fill="#ffe28a" class="hwt-glow"/></g>',
      sky("hwt1", "#7ab4e0", "#f8e0b0"));
  }

  /* ROOM 1: the DanceMor Ballroom in Swisher, the old-school dance hall, couples two-stepping under a spinning mirror ball */
  function hwtdance() {
    const couples = Array.from({ length: 8 }, (_, i) => { const x = 34 + i * 46, c = ["#2a2a34", "#3a2a2a", "#26303a"][i % 3]; return '<g class="hwt-hop' + (i % 2 ? ' hwt-h2' : '') + '"><circle cx="' + x + '" cy="196" r="7" fill="' + c + '"/><path d="M' + (x - 9) + ' 236q9 -34 18 0z" fill="' + c + '"/><circle cx="' + (x + 16) + '" cy="194" r="7" fill="' + c + '"/><path d="M' + (x + 6) + ' 236l10 -32l10 32z" fill="' + [PINK, "#5a7ad0", GOLD][i % 3] + '"/></g>'; }).join("");
    const rays = Array.from({ length: 10 }, (_, i) => '<path d="M200 48L' + (40 + i * 36) + ' 180" stroke="#fff6c0" stroke-width="1.2" opacity=".25" class="hwt-tw' + (i % 2 ? ' hwt-tw2' : '') + '"/>').join("");
    let boards = ""; for (let i = 0; i < 16; i++) boards += '<path d="M' + (i * 26 - 20) + ' 260L' + (200 + (i - 8) * 8) + ' 170" stroke="#7a4a24" stroke-width="1" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a1a14"/>' +
      /* wooden arched roof beams */
      Array.from({ length: 5 }, (_, i) => '<path d="M0 ' + (150 - i * 8) + 'Q200 ' + (-10 + i * 18) + ' 400 ' + (150 - i * 8) + '" stroke="#6a4024" stroke-width="' + (8 - i) + '" fill="none"/>').join("") +
      '<rect x="0" y="170" width="400" height="90" fill="#c08a4a"/>' + boards +
      /* the stage with the band and the banner */
      '<rect x="110" y="120" width="180" height="50" fill="#3a2414"/><rect x="104" y="166" width="192" height="8" fill="#8a5a2a"/>' +
      '<rect x="112" y="98" width="176" height="18" rx="2" fill="' + CREAM + '"/><text x="200" y="111" text-anchor="middle" ' + font + ' font-size="10.5" fill="' + BARN + '">DANCEMOR BALLROOM</text>' +
      '<g fill="#111"><circle cx="160" cy="134" r="6"/><rect x="155" y="140" width="10" height="26"/><path d="M156 148l22 8l-2 4l-22 -8z" fill="#7a4a24"/><circle cx="200" cy="132" r="6"/><rect x="195" y="138" width="10" height="28"/><rect x="198" y="124" width="2" height="30" fill="#888"/><circle cx="242" cy="134" r="6"/><rect x="237" y="140" width="10" height="26"/><rect x="226" y="152" width="30" height="4" fill="#9a9a9a"/></g>' +
      rays +
      /* mirror ball */
      '<path d="M200 0v36" stroke="#999" stroke-width="1.5"/><g class="hwt-ball"><circle cx="200" cy="48" r="13" fill="#c8ccd4"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M' + (188 + i * 6) + ' 37v22" stroke="#8a8e96" stroke-width=".8"/>').join("") + '<path d="M187 44h26M187 50h26M188 56h24" stroke="#8a8e96" stroke-width=".8"/></g>' +
      '<circle cx="194" cy="43" r="2" fill="#fff" class="hwt-tw"/><circle cx="206" cy="52" r="1.6" fill="#fff" class="hwt-tw hwt-tw2"/>' +
      note(150, 110, GOLD) + note(250, 106, PINK, "hwt-nt2") + note(204, 92, CREAM, "hwt-nt3") +
      couples);
  }

  /* ROOM 2: a tiny small-town tap in the town over where she booked her very first show, a hand-painted "LIVE TONIGHT" board out front */
  function hwttap() {
    return svg(
      '<rect width="400" height="260" fill="url(#hwt3)"/>' +
      '<circle cx="330" cy="40" r="14" fill="#fff6d8" class="hwt-glow"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle cx="' + (20 + i * 33) + '" cy="' + (16 + (i * 13) % 40) + '" r="1.2" fill="#fff" class="hwt-tw' + (i % 2 ? ' hwt-tw2' : '') + '"/>').join("") +
      fields(140, "#3a3a2a", "#2e3424") +
      /* a little white clapboard tavern with a false front */
      '<rect x="110" y="70" width="190" height="150" fill="#ece6d6"/>' + Array.from({ length: 18 }, (_, i) => '<path d="M110 ' + (78 + i * 8) + 'h190" stroke="#c8c0ae" stroke-width="1"/>').join("") +
      '<path d="M110 70h190v-14h-190z" fill="#ece6d6"/><rect x="104" y="54" width="202" height="6" fill="#5a4a3a"/>' +
      '<rect x="134" y="80" width="142" height="22" rx="2" fill="' + BARN + '"/><text x="205" y="96" text-anchor="middle" ' + font + ' font-size="12" fill="' + CREAM + '">MELSHA\'S TAP</text>' +
      '<rect x="126" y="118" width="48" height="40" fill="#f0b860" class="hwt-glow"/><rect x="236" y="118" width="48" height="40" fill="#f0b860" class="hwt-glow hwt-g2"/>' +
      '<rect x="182" y="132" width="46" height="88" fill="#5a3a24"/><circle cx="220" cy="178" r="2.4" fill="' + GOLD + '"/>' +
      '<rect x="110" y="214" width="190" height="6" fill="#5a4a3a"/>' +
      /* sandwich board: first show */
      '<path d="M320 222l14 -50h34l14 50z" fill="#2a2a2a"/><rect x="326" y="180" width="50" height="34" fill="#1c2a1e"/>' +
      '<text x="351" y="194" text-anchor="middle" ' + font + ' font-size="7" fill="' + GOLD + '">LIVE TONIGHT</text><text x="351" y="206" text-anchor="middle" ' + font + ' font-size="7" fill="' + PINK + '">HAILEY</text>' +
      /* pickup trucks parked, a guitar case by the door */
      '<rect x="20" y="196" width="70" height="22" rx="4" fill="#3a5a8a"/><path d="M60 196v-14h20l10 14z" fill="#3a5a8a"/><circle cx="34" cy="220" r="7" fill="#111"/><circle cx="76" cy="220" r="7" fill="#111"/>' +
      '<path d="M236 220q-6 -12 0 -24q8 -6 16 0q6 12 0 24z" fill="#2a1a10"/>' +
      '<rect x="0" y="226" width="400" height="34" fill="#4c4a40"/>' +
      note(160, 120, CREAM) + note(250, 116, GOLD, "hwt-nt2"),
      sky("hwt3", "#141a3a", "#4a3a5a"));
  }

  /* ROOM 3: the cornfield behind her parents' house, the path cut through the rows to grandma's house, a red barn and windmill */
  function hwtcorn() {
    return svg(
      '<rect width="400" height="260" fill="url(#hwt4)"/>' +
      '<circle cx="330" cy="58" r="22" fill="#ffd27a" class="hwt-glow"/>' +
      '<g class="hwt-cl"><ellipse cx="90" cy="40" rx="40" ry="9" fill="#fff" opacity=".55"/></g>' +
      fields(110, "#9ab060", "#7a9a4a") +
      /* grandma's white farmhouse */
      '<rect x="268" y="84" width="70" height="40" fill="#f4f0e6"/><path d="M262 86l41 -26l41 26z" fill="#6a3a2a"/><rect x="296" y="100" width="12" height="24" fill="#5a3a24"/><rect x="276" y="96" width="12" height="10" fill="#a8cde0"/><rect x="318" y="96" width="12" height="10" fill="#a8cde0"/>' +
      /* red barn */
      '<rect x="40" y="76" width="70" height="50" fill="' + BARN + '"/><path d="M34 80l41 -30l41 30z" fill="#5a2018"/><path d="M62 126v-30h26v30M62 96l26 30M88 96l-26 30" stroke="#fff" stroke-width="2" fill="none"/>' +
      /* windmill */
      '<path d="M200 128l8 -64l8 64z" fill="none" stroke="#7a7a7a" stroke-width="2"/><g class="hwt-spin"><g transform="translate(208 62)">' + Array.from({ length: 8 }, (_, i) => '<rect x="-1.5" y="-18" width="3" height="16" fill="#c8ccd4" transform="rotate(' + i * 45 + ')"/>').join("") + '</g></g>' +
      /* rows of corn, the path through the middle */
      '<path d="M180 260L200 130h12L240 260z" fill="#b8a06a"/>' +
      cornrow(200, 54, 18, 0, x => x < 176 || x > 244) + cornrow(240, 64, 22, 4, x => x < 150 || x > 270) +
      '<path d="M0 214h400" stroke="#3f6a2a" stroke-width="2"/>',
      sky("hwt4", "#86bce8", "#f8e8c0"));
  }

  /* ROOM 4: Curtis Bridge Rd NE and 120th St NE in Shueyville, a red barn wall tagged, grain bins and the cornfield behind */
  function hwtcorner() {
    let planks = ""; for (let i = 0; i < 22; i++) planks += '<path d="M' + (i * 19) + ' 132v96" stroke="#7a2018" stroke-width="2"/>';
    const bin = (x, w, h) => '<rect x="' + x + '" y="' + (128 - h) + '" width="' + w + '" height="' + h + '" fill="#c8ccd2"/>' + Array.from({ length: Math.floor(h / 8) }, (_, i) => '<path d="M' + x + ' ' + (128 - h + 6 + i * 8) + 'h' + w + '" stroke="#a8acb2" stroke-width="1"/>').join("") + '<path d="M' + (x - 2) + ' ' + (128 - h) + 'l' + (w / 2 + 2) + ' -16l' + (w / 2 + 2) + ' 16z" fill="#b8bcc2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hwt5)"/>' +
      '<g class="hwt-cl"><ellipse cx="90" cy="30" rx="40" ry="9" fill="#fff" opacity=".55"/><ellipse cx="300" cy="20" rx="44" ry="9" fill="#fff" opacity=".45"/></g>' +
      fields(100, "#a8b868", "#8aa04a") +
      bin(150, 40, 70) + bin(196, 46, 84) + bin(248, 36, 60) +
      /* grain elevator leg */
      '<rect x="216" y="18" width="8" height="28" fill="#9a9ea4"/><path d="M220 18l50 34" stroke="#9a9ea4" stroke-width="3"/>' +
      cornrow(132, 22, 14, 0) +
      '<rect x="0" y="130" width="400" height="98" fill="' + BARN + '"/>' + planks +
      '<rect x="0" y="128" width="400" height="5" fill="#f4f0e6"/>' +
      tag("CORN QUEEN", 18, 180, 34, GOLD, -5) + tag("SHUEYVILLE", 30, 210, 16, CREAM, -3) + tag("RAISED", 200, 212, 18, PINK, -4) +
      '<g class="hwt-sp"><circle cx="262" cy="172" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="hwt-sp hwt-sp2"><circle cx="268" cy="166" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="228" width="400" height="32" fill="#6a6458"/><rect x="0" y="226" width="400" height="4" fill="#e8e4dc"/>' +
      /* green street signs */
      '<rect x="356" y="56" width="6" height="172" fill="#2f2f2f"/>' + sign(262, 56, 136, "CURTIS BRIDGE RD") + sign(290, 82, 108, "120TH ST NE"),
      sky("hwt5", "#5a9ad4", "#f6d8a8"));
  }

  window.SCENES = { hwtroad: hwtroad, hwtdance: hwtdance, hwttap: hwttap, hwtcorn: hwtcorn, hwtcorner: hwtcorner };
})();
