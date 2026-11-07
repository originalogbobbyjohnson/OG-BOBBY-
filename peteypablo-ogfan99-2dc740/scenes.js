/* peteypablo scenes (Regions tab: The Carolinas; Greenville, NC). CSS classes and ids prefixed pp- (the page's own anim-train is kept on the bus).
   1 GREAT bus at the G.K. Butterfield Transportation Center, 600 S Pitt St, Greenville: the bus pulling in under the canopy, black stop sign with the GREAT badge.
   2 Raleigh's hockey arena ("Raise Up" is the home crowd's anthem): red seats, the ice, the big screen flashing RAISE UP, towels spinning like helicopters.
   3 Charlotte's football stadium ("Carolina Colors", his 2016 playoff anthem): blue and black stands, the green field, light towers, uptown towers behind, confetti.
   4 Out in Pitt County ("Get On Dis Motorcycle"): dirt road with pot holes, a screen-door house, the car in the back yard, a motorcycle kicking up dust.
   5 W 5th St and Albemarle Ave, West Greenville: green signs, PETEY tagged on the brick, ECU's white Cupola under a purple and gold sky. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ppflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.pp-flk{animation:ppflick 2.2s infinite}.pp-flk2{animation-delay:.7s}' +
    '@keyframes ppspin{0%{transform:scaleX(1)}50%{transform:scaleX(-1)}100%{transform:scaleX(1)}}.pp-twirl{transform-box:fill-box;transform-origin:50% 50%;animation:ppspin .5s linear infinite}.pp-twirl2{animation-delay:-.2s}.pp-twirl3{animation-delay:-.35s}' +
    '@keyframes ppscr{0%,100%{opacity:1}50%{opacity:.55}}.pp-scr{animation:ppscr 1s ease-in-out infinite}' +
    '@keyframes ppconf{from{transform:translateY(-20px)}to{transform:translateY(200px)}}.pp-cf{animation:ppconf 3s linear infinite}.pp-cf2{animation-delay:-1s}.pp-cf3{animation-delay:-2s}' +
    '@keyframes ppbeam{0%,100%{opacity:.25}50%{opacity:.6}}.pp-beam{animation:ppbeam 2.4s ease-in-out infinite}' +
    '@keyframes ppmoto{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.pp-moto{animation:ppmoto 5s linear infinite}' +
    '@keyframes ppdust{0%{opacity:.7;transform:translateX(0)}100%{opacity:0;transform:translateX(-30px)}}.pp-dust{animation:ppdust .8s linear infinite}' +
    '@keyframes ppbug{0%,100%{transform:translate(0,0)}25%{transform:translate(6px,-4px)}50%{transform:translate(-3px,3px)}75%{transform:translate(4px,5px)}}.pp-bug{animation:ppbug 1.2s linear infinite}.pp-bug2{animation-delay:-.6s}' +
    '@keyframes ppskate{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.pp-skate{animation:ppskate 6s linear infinite}' +
    '@keyframes ppspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.pp-sp{animation:ppspray 1.4s ease-out infinite}.pp-sp2{animation-delay:.45s}' +
    '@keyframes pptw{0%,100%{opacity:.3}50%{opacity:1}}.pp-tw{animation:pptw 2s ease-in-out infinite}.pp-tw2{animation-delay:-1s}' +
    '@keyframes ppcloud{from{transform:translateX(-120px)}to{transform:translateX(480px)}}.pp-cloud{animation:ppcloud 24s linear infinite}.pp-cloud2{animation-delay:-12s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 9 + 12) + '" height="18" rx="4" fill="' + color + '" stroke="#fff" stroke-width="1"/><text x="' + (x + (txt.length * 9 + 12) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const RED = "#e0322f", GOLD = "#f2c14e", BLUE = "#4fa3e0", GREAT = "#1f4e79";
  const cloud = (cls, x, y) => '<g class="pp-cloud ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="30" ry="10" fill="#fff" opacity=".85"/><ellipse cx="' + (x + 16) + '" cy="' + (y - 6) + '" rx="16" ry="9" fill="#fff" opacity=".85"/></g>';

  /* 1. GREAT bus at the G.K. Butterfield Transportation Center */
  function ppstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (64 + i * 42) + '" y="114" width="34" height="26" rx="2" fill="#1e2a33"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="100" width="320" height="86" rx="10" fill="#f4f5f7" stroke="#8a929a" stroke-width="2"/>' + win +
      '<rect x="40" y="148" width="320" height="10" fill="' + GREAT + '"/><rect x="40" y="158" width="320" height="4" fill="' + GOLD + '"/>' +
      '<rect x="44" y="114" width="16" height="50" fill="#26323c"/><rect x="330" y="104" width="26" height="36" rx="3" fill="#26323c"/>' +
      '<rect x="290" y="103" width="38" height="10" rx="2" fill="#111"/><text x="309" y="111" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">GREAT</text>' +
      '<circle cx="100" cy="186" r="13" fill="#222"/><circle cx="100" cy="186" r="5" fill="#888"/><circle cx="310" cy="186" r="13" fill="#222"/><circle cx="310" cy="186" r="5" fill="#888"/><circle cx="354" cy="170" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pps1)"/>' + cloud("", 50, 30) + cloud("pp-cloud2", 250, 22) +
      '<rect x="20" y="46" width="360" height="54" fill="#9b4a34"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (34 + i * 44) + '" y="56" width="30" height="30" fill="#a9d3ea" opacity=".85"/>').join("") +
      '<rect x="10" y="40" width="380" height="8" fill="#d9d4ca"/><path d="M10 40h380" stroke="#6f6a62" stroke-width="2"/>' +
      '<rect x="146" y="18" width="108" height="20" fill="#d9d4ca"/><text x="200" y="32" text-anchor="middle" ' + font + ' font-size="9" fill="#3a3a3a">TRANSPORTATION CENTER</text>' +
      '<rect x="0" y="96" width="400" height="6" fill="#c7c1b5"/>' +
      bus +
      '<rect x="0" y="198" width="400" height="62" fill="#55565b"/><path d="M0 230h400" stroke="#e9d65a" stroke-width="3" stroke-dasharray="20 14"/>' +
      '<rect x="0" y="190" width="400" height="8" fill="#c7c1b5"/>' +
      '<rect x="44" y="204" width="312" height="36" rx="3" fill="#111"/><text x="56" y="227" ' + font + ' font-size="13" fill="#fff">G.K. Butterfield Transportation Ctr</text>' + badge(300, 222, "GREAT", GREAT),
      sky("pps1", "#6fa8dc", "#f3e2c0"));
  }

  /* 2. Raleigh's hockey arena: the crowd spinning towels */
  function pparena() {
    const seats = Array.from({ length: 5 }, (_, r) => '<rect x="0" y="' + (60 + r * 14) + '" width="400" height="10" fill="' + (r % 2 ? "#a3201d" : "#c42a26") + '"/>').join("");
    const fans = Array.from({ length: 14 }, (_, i) => {
      const x = 16 + i * 28, y = 66 + (i % 3) * 14;
      return '<circle cx="' + x + '" cy="' + y + '" r="5" fill="#2a1a14"/><path d="M' + x + ' ' + (y - 4) + 'v-10" stroke="#2a1a14" stroke-width="2"/>' +
        '<rect class="pp-twirl ' + ["", "pp-twirl2", "pp-twirl3"][i % 3] + '" x="' + (x - 9) + '" y="' + (y - 19) + '" width="18" height="6" rx="2" fill="' + (i % 2 ? "#fff" : "#111") + '"/>';
    }).join("");
    return svg(
      '<rect width="400" height="260" fill="#1a1416"/>' +
      '<path d="M0 0h400v40H0z" fill="#0d0b0c"/>' + Array.from({ length: 6 }, (_, i) => '<circle class="pp-tw ' + (i % 2 ? "pp-tw2" : "") + '" cx="' + (30 + i * 68) + '" cy="10" r="3" fill="#fff6c2"/>').join("") +
      '<rect x="140" y="6" width="120" height="44" rx="4" fill="#222" stroke="#555" stroke-width="2"/><rect class="pp-scr" x="146" y="12" width="108" height="32" fill="' + RED + '"/>' +
      '<text x="200" y="35" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="#fff">RAISE UP</text>' +
      seats + fans +
      '<rect x="0" y="130" width="400" height="10" fill="#e9ecef"/><rect x="0" y="130" width="400" height="3" fill="' + RED + '"/>' +
      '<rect x="0" y="140" width="400" height="120" fill="#eef4f8"/><path d="M200 140v120" stroke="' + RED + '" stroke-width="3"/>' +
      '<path d="M60 140v120M340 140v120" stroke="#3a6fd0" stroke-width="3"/>' +
      '<circle cx="200" cy="200" r="30" fill="none" stroke="#3a6fd0" stroke-width="2"/><circle cx="200" cy="200" r="3" fill="#3a6fd0"/>' +
      '<g class="pp-skate"><ellipse cx="0" cy="214" rx="10" ry="3" fill="#cfd8de"/><circle cx="0" cy="210" r="3" fill="#111"/></g>',
      "");
  }

  /* 3. Charlotte's football stadium */
  function ppstadium() {
    const conf = Array.from({ length: 18 }, (_, i) => '<rect class="pp-cf ' + ["", "pp-cf2", "pp-cf3"][i % 3] + '" x="' + (10 + i * 22) + '" y="' + (i * 7 % 30) + '" width="4" height="7" fill="' + [BLUE, "#111", "#c0c6cc"][i % 3] + '" transform="rotate(' + (i * 25) + ' ' + (12 + i * 22) + ' ' + (i * 7 % 30) + ')"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#pps3)"/>' +
      '<g fill="#1f2a44"><rect x="40" y="40" width="26" height="60"/><rect x="72" y="22" width="22" height="78"/><rect x="300" y="30" width="30" height="70"/><rect x="336" y="48" width="24" height="52"/></g>' +
      Array.from({ length: 16 }, (_, i) => '<rect x="' + [46, 78, 306, 342][i % 4] + '" y="' + (46 + (i * 9) % 46) + '" width="4" height="3" fill="#ffe7a0" opacity=".7"/>').join("") +
      '<path class="pp-beam" d="M110 30L60 130h40z" fill="#fff6c2"/><path class="pp-beam" d="M290 30l50 100h-40z" fill="#fff6c2"/>' +
      '<rect x="104" y="20" width="14" height="10" fill="#e8e8e8"/><rect x="282" y="20" width="14" height="10" fill="#e8e8e8"/><path d="M111 30v70M289 30v70" stroke="#777" stroke-width="3"/>' +
      '<path d="M0 100h400v50H0z" fill="#111"/>' + Array.from({ length: 4 }, (_, r) => '<path d="M0 ' + (106 + r * 11) + 'h400" stroke="' + (r % 2 ? "#2b2b2b" : "#0085ca") + '" stroke-width="5"/>').join("") +
      '<rect x="0" y="150" width="400" height="8" fill="#c0c6cc"/>' +
      '<rect x="0" y="158" width="400" height="102" fill="#3f8f3a"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (20 + i * 45) + ' 158l' + (-20 + i * 5) + ' 102" stroke="#fff" stroke-width="2" opacity=".8"/>').join("") +
      '<path d="M0 158h400" stroke="#fff" stroke-width="3"/>' +
      conf,
      sky("pps3", "#0b1a33", "#2a5d8f"));
  }

  /* 4. Out in Pitt County: Get On Dis Motorcycle */
  function ppcountry() {
    return svg(
      '<rect width="400" height="260" fill="url(#pps4)"/>' + cloud("", 80, 36) +
      '<g fill="#3e5a2e"><circle cx="20" cy="110" r="26"/><circle cx="360" cy="104" r="30"/><circle cx="392" cy="116" r="22"/><path d="M290 120l12-50 12 50z"/><path d="M310 120l10-40 10 40z"/></g>' +
      '<rect x="0" y="118" width="400" height="142" fill="#6d8b3a"/>' +
      '<path d="M70 140h140v-36l-70-30-70 30z" fill="#e8e1cf" stroke="#8a7f68" stroke-width="2"/><path d="M60 106l80-40 80 40" fill="none" stroke="#5a4a3a" stroke-width="6"/>' +
      '<rect x="90" y="108" width="22" height="18" fill="#3a3f45"/><rect x="168" y="108" width="22" height="18" fill="#3a3f45"/>' +
      '<rect x="128" y="104" width="22" height="36" fill="#8aa1ad" opacity=".7" stroke="#5a4a3a" stroke-width="2"/><path d="M128 114h22M128 124h22M139 104v36" stroke="#5a4a3a" stroke-width=".8"/>' +
      '<rect x="60" y="140" width="160" height="6" fill="#8a7f68"/>' +
      '<g transform="translate(240 120)"><path d="M0 18h60v-10l-10-10h-30l-10 10z" fill="#9b3b2e"/><rect x="18" y="0" width="12" height="8" fill="#a9d3ea"/><rect x="32" y="0" width="12" height="8" fill="#a9d3ea"/><rect x="6" y="18" width="10" height="6" fill="#7a6a5a"/><rect x="44" y="18" width="10" height="6" fill="#7a6a5a"/></g>' +
      '<rect x="20" y="150" width="20" height="16" fill="#8a5a3a"/><path d="M18 150l12-8 12 8z" fill="#6a4228"/><path d="M40 160q14 6 26 0" stroke="#999" stroke-width="1.5" fill="none" stroke-dasharray="3 2"/><circle cx="68" cy="160" r="4" fill="#c49a6c"/>' +
      '<path d="M0 260L170 160h60l170 100z" fill="#b8915e"/><ellipse cx="190" cy="190" rx="14" ry="4" fill="#8c6a42"/><ellipse cx="236" cy="228" rx="20" ry="5" fill="#8c6a42"/><ellipse cx="150" cy="240" rx="18" ry="5" fill="#8c6a42"/>' +
      '<g class="pp-moto"><circle cx="0" cy="206" r="9" fill="#111"/><circle cx="0" cy="206" r="3" fill="#999"/><circle cx="36" cy="206" r="9" fill="#111"/><circle cx="36" cy="206" r="3" fill="#999"/>' +
      '<path d="M0 206l10-14h18l8 14" fill="none" stroke="#c0392b" stroke-width="4"/><rect x="10" y="188" width="18" height="6" rx="3" fill="#c0392b"/><path d="M30 192l6-8" stroke="#222" stroke-width="2"/>' +
      '<path d="M16 188l2-14 8-2" stroke="#2a2a2a" stroke-width="5" fill="none"/><circle cx="20" cy="168" r="6" fill="' + GOLD + '"/>' +
      '<g class="pp-dust"><circle cx="-12" cy="210" r="5" fill="#d8c3a0"/><circle cx="-22" cy="206" r="4" fill="#d8c3a0"/></g></g>' +
      '<g class="pp-bug"><circle cx="230" cy="96" r="1.5" fill="#222"/></g><g class="pp-bug pp-bug2"><circle cx="250" cy="90" r="1.5" fill="#222"/></g>',
      sky("pps4", "#f7b267", "#fde8c4"));
  }

  /* 5. W 5th St and Albemarle Ave, West Greenville; ECU's Cupola behind */
  function ppcorner() {
    const cupola = '<g transform="translate(150 20)">' +
      '<rect x="20" y="70" width="60" height="38" fill="#a8432f"/>' +
      '<rect x="24" y="40" width="52" height="32" fill="#f4f1e8"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (26 + i * 11) + '" y="42" width="4" height="30" fill="#d9d4c6"/>').join("") +
      '<rect x="31" y="46" width="6" height="20" fill="#3a3550"/><rect x="47" y="46" width="6" height="20" fill="#3a3550"/><rect x="63" y="46" width="6" height="20" fill="#3a3550"/>' +
      '<rect x="20" y="36" width="60" height="6" fill="#f4f1e8"/><path d="M22 36q28-34 56 0z" fill="#5a6b62"/><path d="M50 4v-4" stroke="' + GOLD + '" stroke-width="2"/><circle cx="50" cy="6" r="3" fill="' + GOLD + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pps5)"/>' +
      Array.from({ length: 8 }, (_, i) => '<circle class="pp-tw ' + (i % 2 ? "pp-tw2" : "") + '" cx="' + (20 + i * 50) + '" cy="' + (14 + (i * 13) % 30) + '" r="1.5" fill="#fff"/>').join("") +
      '<g fill="#2b2140"><rect x="20" y="80" width="40" height="50"/><rect x="70" y="66" width="30" height="64"/><rect x="290" y="72" width="36" height="58"/><rect x="334" y="88" width="44" height="42"/></g>' +
      cupola +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("PETEY", 22, 190, 58, GOLD, -6) + tag("RAISE UP", 110, 216, 20, "#ff7a6e", -4) + tag("BIRD DOG", 16, 216, 16, BLUE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(252, 98, 138, "W 5th St") + sign(244, 124, 146, "Albemarle Ave") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="pp-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="pp-sp"><circle cx="196" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="pp-sp pp-sp2"><circle cx="202" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("pps5", "#2a1850", "#e0a43a"));
  }

  window.SCENES = { ppstation: ppstation, pparena: pparena, ppstadium: ppstadium, ppcountry: ppcountry, ppcorner: ppcorner };
})();
