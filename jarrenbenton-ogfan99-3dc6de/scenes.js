/* jarrenbenton scenes (Regions tab: Atlanta; Decatur / east DeKalb County, the Decatur - Stone Mountain side). CSS classes prefixed jb- (the page's own anim-train is kept).
   1 Indian Creek station, the east end of MARTA's Blue line: at-grade island platform, a silver MARTA train sliding in, Georgia pines, Stone Mountain's dome far off.
   2 Grandma's basement ("My Grandma's Basement", where he moved back and wrote): wood paneling, the bare bulb swinging, a mic with a pop filter, speakers, the VU meter jumping, the old couch.
   3 The DeKalb Farmers Market hall in Decatur: the giant warehouse with rows of world flags hanging from the rafters, crates of produce, carts.
   4 Stone Mountain: the bare grey granite dome over the pines and the lake, the red Skyride car gliding up the cable (no carving drawn).
   5 Candler Rd and Glenwood Rd on the east side of Decatur: green signs, JARREN BENTON tagged on the brick, Stone Mountain's dome at dusk behind, a candy Cadillac rolling by.
   400 x 260 SVGs. No logos, no faces, no digits drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jbflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.jb-flk{animation:jbflick 2.2s infinite}.jb-flk2{animation-delay:.7s}' +
    '@keyframes jbcar{from{transform:translateX(-150px)}to{transform:translateX(540px)}}.jb-car{animation:jbcar 7s linear infinite}.jb-car2{animation-delay:-3.5s}' +
    '@keyframes jbswing{0%,100%{transform:rotate(-9deg)}50%{transform:rotate(9deg)}}.jb-bulb{transform-box:view-box;transform-origin:200px 0px;animation:jbswing 2.6s ease-in-out infinite}' +
    '@keyframes jbvu{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}80%{transform:scaleY(.85)}}.jb-vu{transform-box:fill-box;transform-origin:50% 100%;animation:jbvu .9s ease-in-out infinite}.jb-vu2{animation-delay:-.3s}.jb-vu3{animation-delay:-.6s}.jb-vu4{animation-delay:-.15s}' +
    '@keyframes jbflag{0%,100%{transform:skewX(0)}50%{transform:skewX(7deg)}}.jb-flag{transform-box:fill-box;transform-origin:50% 0;animation:jbflag 2s ease-in-out infinite}.jb-flag2{animation-delay:-1s}' +
    '@keyframes jbsky{0%{transform:translate(0,0)}50%{transform:translate(130px,-74px)}100%{transform:translate(0,0)}}.jb-gondola{animation:jbsky 12s ease-in-out infinite}' +
    '@keyframes jbcart{0%,100%{transform:translateX(0)}50%{transform:translateX(60px)}}.jb-cart{animation:jbcart 6s ease-in-out infinite}' +
    '@keyframes jbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jb-sp{animation:jbspray 1.4s ease-out infinite}.jb-sp2{animation-delay:.45s}' +
    '@keyframes jbbird{0%{transform:translate(0,0)}100%{transform:translate(430px,-24px)}}.jb-bird{animation:jbbird 13s linear infinite}.jb-bird2{animation-delay:-6.5s}' +
    '@keyframes jbripple{0%,100%{opacity:.25}50%{opacity:.6}}.jb-rip{animation:jbripple 2.4s ease-in-out infinite}.jb-rip2{animation-delay:-1.2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const pine = (x, y, h, c) => '<path d="M' + x + ' ' + (y - h) + 'l' + (h * .26) + ' ' + (h * .45) + 'h-' + (h * .1) + 'l' + (h * .2) + ' ' + (h * .4) + 'h-' + (h * .72) + 'l' + (h * .2) + ' -' + (h * .4) + 'h-' + (h * .1) + 'z" fill="' + (c || "#1f4a2e") + '"/><rect x="' + (x - 2) + '" y="' + (y - h * .15) + '" width="4" height="' + (h * .15) + '" fill="#4a3220"/>';
  const dome = (x, y, w, h, c) => '<path d="M' + (x - w / 2) + ' ' + y + 'C' + (x - w * .42) + ' ' + (y - h * .9) + ' ' + (x - w * .18) + ' ' + (y - h) + ' ' + x + ' ' + (y - h) + 'S' + (x + w * .4) + ' ' + (y - h * .75) + ' ' + (x + w / 2) + ' ' + y + 'z" fill="' + c + '"/>';
  const caddy = (cls, x, y, c) => '<g class="' + cls + '"><path d="M' + x + ' ' + (y + 14) + 'v-10l10 -2l12 -10h34l14 10l18 2v10z" fill="' + c + '"/><rect x="' + (x + 26) + '" y="' + (y - 5) + '" width="13" height="7" fill="#bfe3ff"/><rect x="' + (x + 42) + '" y="' + (y - 5) + '" width="13" height="7" fill="#bfe3ff"/>' +
    '<rect x="' + x + '" y="' + (y + 6) + '" width="88" height="2" fill="#f2f2f2" opacity=".8"/>' +
    [x + 18, x + 70].map(cx => '<circle cx="' + cx + '" cy="' + (y + 15) + '" r="7" fill="#111"/><circle cx="' + cx + '" cy="' + (y + 15) + '" r="4.5" fill="#d8d8d8"/><path d="M' + (cx - 4) + ' ' + (y + 15) + 'h8M' + cx + ' ' + (y + 11) + 'v8" stroke="#888" stroke-width="1"/>').join("") + '</g>';
  const BLUE = "#0075b2", GOLD = "#e8c26a", GREEN = "#5fbf5a", FUR = "#c9a27a";

  /* 1. Indian Creek station: at-grade island platform, east end of the Blue line */
  function jbstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="104" width="34" height="20" rx="3" fill="#1d2731"/>').join("");
    const train = '<g class="anim-train"><path d="M20 96h312q24 0 30 28v26H20z" fill="#dfe3e8" stroke="#7d868f" stroke-width="2"/>' + wins +
      '<rect x="20" y="130" width="342" height="5" fill="' + BLUE + '"/><rect x="20" y="135" width="342" height="3" fill="#e46b2a"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (96 + i * 92) + '" y="102" width="4" height="46" fill="#aeb6be"/>').join("") +
      '<path d="M332 100q22 4 28 24h-28z" fill="#1d2731"/><circle cx="354" cy="142" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jbs1)"/>' +
      dome(330, 92, 150, 34, "#8d93a0") +
      Array.from({ length: 12 }, (_, i) => pine(8 + i * 36, 96, 30 + (i * 7) % 16, "#244a32")).join("") +
      '<path d="M0 74h400" stroke="#3a3a3a" stroke-width="1.5"/>' +
      '<rect x="0" y="40" width="400" height="10" fill="#c9c4b8"/>' + [60, 200, 340].map(x => '<rect x="' + (x - 3) + '" y="50" width="6" height="46" fill="#8a8578"/>').join("") +
      '<g class="jb-flk"><rect x="110" y="50" width="40" height="3" fill="#fff3c4"/></g><g class="jb-flk jb-flk2"><rect x="250" y="50" width="40" height="3" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="150" width="400" height="6" fill="#f2c200"/><rect x="0" y="156" width="400" height="30" fill="#b9b4a8"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#3e4046"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 46) + '" y="236" width="30" height="3" fill="#f2f2f2" opacity=".6"/>').join("") +
      '<rect x="82" y="192" width="236" height="34" rx="3" fill="#111"/><text x="98" y="215" ' + font + ' font-size="18" fill="#fff">Indian Creek</text>' +
      '<rect x="252" y="199" width="54" height="20" rx="10" fill="' + BLUE + '"/><text x="279" y="213.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">BLUE</text>' +
      '<g class="jb-bird"><path d="M0 30q5 -5 10 0q5 -5 10 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff3e0" opacity=".9">INDIAN CREEK · MARTA BLUE LINE · EAST END</text>',
      sky("jbs1", "#2a3f6a", "#f0a868"));
  }

  /* 2. Grandma's basement: wood paneling, swinging bulb, mic, speakers, VU meter */
  function jbbasement() {
    const panels = Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="40" width="20" height="160" fill="' + (i % 2 ? "#6b4526" : "#74502e") + '"/><path d="M' + (i * 20) + ' 40v160" stroke="#4a2e18" stroke-width="1.5"/>').join("");
    const vu = [0, 1, 2, 3, 4].map(i => '<rect class="jb-vu ' + ["", "jb-vu2", "jb-vu3", "jb-vu4", "jb-vu2"][i] + '" x="' + (292 + i * 9) + '" y="118" width="6" height="26" fill="' + (i > 3 ? "#e84a3a" : i > 2 ? GOLD : GREEN) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#2a1a10"/>' + panels +
      '<rect x="0" y="0" width="400" height="40" fill="#e9e1cf"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52) + ' 0v40" stroke="#c9bfa8" stroke-width="2"/>').join("") +
      '<rect x="140" y="44" width="120" height="30" fill="#8fbf6a" stroke="#3a2a1a" stroke-width="4"/><path d="M140 66q20 -10 40 0t40 0t40 0" stroke="#5a8a3a" stroke-width="5" fill="none"/>' +
      '<g class="jb-bulb"><path d="M200 0v70" stroke="#222" stroke-width="2"/><circle cx="200" cy="76" r="8" fill="#fff2b0"/><circle cx="200" cy="76" r="22" fill="#fff2b0" opacity=".18"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#7a5a4a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 40) + ' 200l-20 60" stroke="#6a4a3a" stroke-width="2"/>').join("") +
      '<rect x="18" y="150" width="110" height="40" rx="8" fill="#8a3a2a"/><rect x="10" y="134" width="126" height="22" rx="8" fill="#9a4a32"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (22 + i * 18) + ' 134v56" stroke="#6a2a1a" stroke-width="2" opacity=".6"/>').join("") +
      '<rect x="14" y="190" width="8" height="12" fill="#3a2010"/><rect x="124" y="190" width="8" height="12" fill="#3a2010"/>' +
      '<path d="M190 202l14 -66M218 202l-14 -66M204 136v66" stroke="#222" stroke-width="3"/><rect x="198" y="104" width="12" height="28" rx="6" fill="#3a3a3a" stroke="#bbb" stroke-width="1.5"/><circle cx="182" cy="116" r="12" fill="#222" opacity=".35" stroke="#555"/>' +
      '<rect x="270" y="150" width="104" height="52" fill="#4a2e18"/><rect x="282" y="110" width="80" height="40" rx="3" fill="#151515"/>' + vu +
      '<rect x="244" y="132" width="24" height="40" rx="3" fill="#1a1a1a"/><circle cx="256" cy="158" r="8" fill="#333"/><circle cx="256" cy="140" r="4" fill="#333"/>' +
      '<rect x="376" y="132" width="20" height="40" rx="3" fill="#1a1a1a"/><circle cx="386" cy="158" r="7" fill="#333"/>' +
      '<rect x="292" y="168" width="60" height="6" rx="2" fill="' + GOLD + '"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">GRANDMA&#8217;S BASEMENT · DECATUR</text>');
  }

  /* 3. DeKalb Farmers Market hall: rafters full of world flags, produce crates */
  function jbmarket() {
    const flagSets = [["#0b5ea8", "#fff", "#e03a3a"], ["#1d8a3a", "#fff", "#e46b2a"], ["#e03a3a", "#f2d03a", "#1d8a3a"], ["#111", "#e03a3a", "#f2d03a"], ["#0b5ea8", "#f2d03a", "#0b5ea8"], ["#e03a3a", "#fff", "#e03a3a"], ["#1d8a3a", "#f2d03a", "#e03a3a"], ["#fff", "#0b5ea8", "#fff"]];
    const flag = (x, y, k, horiz) => { const c = flagSets[k % flagSets.length]; return '<g class="jb-flag ' + (k % 2 ? "jb-flag2" : "") + '">' + (horiz ? c.map((cc, i) => '<rect x="' + x + '" y="' + (y + i * 6) + '" width="26" height="6" fill="' + cc + '"/>').join("") : c.map((cc, i) => '<rect x="' + (x + i * 8.67) + '" y="' + y + '" width="8.7" height="18" fill="' + cc + '"/>').join("")) + '</g>'; };
    const row = (y, n, off) => Array.from({ length: n }, (_, i) => flag(off + i * 38, y, i + y, (i + y) % 3 === 0)).join("");
    const crate = (x, y, c) => '<rect x="' + x + '" y="' + y + '" width="54" height="26" fill="#8a6a3a" stroke="#5a4020" stroke-width="2"/>' + Array.from({ length: 6 }, (_, i) => '<circle cx="' + (x + 6 + i * 8.4) + '" cy="' + (y - 3) + '" r="5" fill="' + c + '"/>').join("") + Array.from({ length: 5 }, (_, i) => '<circle cx="' + (x + 10 + i * 8.4) + '" cy="' + (y - 9) + '" r="5" fill="' + c + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#cfc8b8"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 0l200 70" stroke="#9a9488" stroke-width="2" opacity=".5"/>').join("") +
      '<rect x="0" y="0" width="400" height="10" fill="#8a8478"/>' + [20, 44, 68].map(y => '<path d="M0 ' + (y - 2) + 'h400" stroke="#6a6458" stroke-width="2"/>').join("") +
      row(20, 11, 4) + row(44, 11, 20) + row(68, 11, 2) +
      '<rect x="0" y="100" width="400" height="60" fill="#ece6d6"/><rect x="0" y="100" width="400" height="6" fill="#2a6a3a"/>' +
      '' + [[30, "PRODUCE"], [164, "SEAFOOD"], [298, "BAKERY"]].map(a => '<rect x="' + a[0] + '" y="112" width="70" height="40" fill="#2a3a2e" stroke="#2a6a3a" stroke-width="3"/><text x="' + (a[0] + 35) + '" y="136" text-anchor="middle" ' + font + ' font-size="11" fill="#f2eee2">' + a[1] + '</text>').join("") +
      '<rect x="0" y="160" width="400" height="100" fill="#a8a296"/>' +
      crate(14, 186, "#f08a2a") + crate(76, 186, "#e03a3a") + crate(138, 186, "#7ab83a") + crate(208, 186, "#f2d03a") + crate(270, 186, "#9a3a8a") + crate(332, 186, "#7ab83a") +
      '<rect x="0" y="212" width="400" height="48" fill="#8f897e"/>' +
      '<g class="jb-cart"><path d="M60 222h50l-6 18h-38z" fill="none" stroke="#d8d8d8" stroke-width="3"/><path d="M60 222l-8 -8" stroke="#d8d8d8" stroke-width="3"/><circle cx="72" cy="246" r="4" fill="#333"/><circle cx="100" cy="246" r="4" fill="#333"/><circle cx="76" cy="228" r="4" fill="#f08a2a"/><circle cx="88" cy="228" r="4" fill="#7ab83a"/></g>' +
      '<text x="200" y="96" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2a2a">THE FARMERS MARKET HALL · DECATUR</text>');
  }

  /* 4. Stone Mountain: grey granite dome, pines, lake, the Skyride car on its cable */
  function jbmountain() {
    return svg(
      '<rect width="400" height="260" fill="url(#jbs4)"/>' +
      '<g class="jb-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g><g class="jb-bird jb-bird2"><path d="M0 64q4 -4 8 0q4 -4 8 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>' +
      '<path d="M-10 176C20 120 70 60 170 52S330 70 410 176z" fill="#8a909a"/>' +
      '<path d="M40 150C80 100 120 70 170 64" stroke="#a7adb6" stroke-width="10" fill="none" opacity=".5"/>' +
      '<path d="M220 70q40 20 70 60M250 64q30 30 50 80" stroke="#6e737c" stroke-width="3" fill="none" opacity=".5"/>' +
      '<path d="M120 120q10 -6 24 -2M300 120q8 6 20 4" stroke="#6e737c" stroke-width="2" fill="none" opacity=".6"/>' +
      '<rect x="150" y="48" width="18" height="10" fill="#6e737c"/><path d="M30 176L160 54" stroke="#333" stroke-width="1.5"/>' +
      '<g class="jb-gondola"><path d="M56 150v8" stroke="#333" stroke-width="2"/><rect x="42" y="158" width="28" height="18" rx="4" fill="#d8342a"/><rect x="46" y="161" width="20" height="7" fill="#bfe3ff"/></g>' +
      Array.from({ length: 16 }, (_, i) => pine(-6 + i * 27, 200, 40 + (i * 11) % 22)).join("") +
      '<rect x="0" y="198" width="400" height="62" fill="#3a6a8a"/>' +
      '<path class="jb-rip" d="M30 214h60M140 226h80M260 216h70M60 240h90M230 246h100" stroke="#cfe6f4" stroke-width="2"/><path class="jb-rip jb-rip2" d="M100 220h40M300 232h60M20 230h50M180 236h40" stroke="#cfe6f4" stroke-width="2"/>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#203040">STONE MOUNTAIN · EAST DEKALB</text>',
      sky("jbs4", "#6fb6e8", "#d8eef8"));
  }

  /* 5. Candler Rd and Glenwood Rd: green signs, JARREN BENTON tagged, Stone Mountain at dusk behind */
  function jbcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#jbs5)"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + ((i * 67) % 400) + '" cy="' + ((i * 19) % 36 + 6) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      dome(250, 132, 260, 64, "#4a4a62") +
      Array.from({ length: 14 }, (_, i) => pine(4 + i * 30, 134, 26 + (i * 9) % 14, "#1c2a26")).join("") +
      '<rect x="0" y="130" width="400" height="94" fill="#8a4a32"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#6a3622" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 10 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#6a3622" stroke-width="1"/>').join("")).join("") +
      tag("JARREN", 22, 184, 40, GOLD, -6) + tag("BENTON", 70, 214, 34, GREEN, -5) + tag("FUNK VOLUME", 24, 148, 14, "#7fd0ff", -4) + tag("MINK COAT KILLA", 150, 150, 12, FUR, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55534f"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(278, 98, 98, "Candler Rd") + sign(272, 124, 110, "Glenwood Rd") +
      '<rect x="390" y="110" width="4" height="114" fill="#222"/><circle class="jb-flk" cx="392" cy="108" r="7" fill="#ffe9a8"/>' +
      caddy("jb-car", 0, 232, "#7a1a3a") +
      '<g class="jb-sp"><circle cx="196" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="jb-sp jb-sp2"><circle cx="202" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">CANDLER RD · GLENWOOD RD · DECATUR</text>',
      sky("jbs5", "#141a36", "#a85a3a"));
  }

  window.SCENES = { jbstation: jbstation, jbbasement: jbbasement, jbmarket: jbmarket, jbmountain: jbmountain, jbcorner: jbcorner };
})();
