/* theroots scenes (Regions tab: Philadelphia; South Philly). CSS classes prefixed rt- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rtflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.rt-flk{animation:rtflick 2.4s infinite}.rt-flk2{animation-delay:.8s}' +
    '@keyframes rtnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-70px);opacity:0}}.rt-note{animation:rtnote 3.2s ease-out infinite}.rt-n2{animation-delay:-1.1s}.rt-n3{animation-delay:-2.2s}' +
    '@keyframes rttap{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(14deg)}}.rt-tap{transform-box:fill-box;transform-origin:100% 100%;animation:rttap .42s ease-in-out infinite}.rt-tap2{animation-delay:-.21s}' +
    '@keyframes rtsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.rt-sw{transform-box:fill-box;transform-origin:50% 0%;animation:rtsweep 3.6s ease-in-out infinite}.rt-sw2{animation-delay:-1.8s}' +
    '@keyframes rtbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.rt-bob{animation:rtbob .9s ease-in-out infinite}.rt-bob2{animation-delay:-.45s}' +
    '@keyframes rtjet{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.22)}}.rt-jet{transform-box:fill-box;transform-origin:50% 100%;animation:rtjet 1.1s ease-in-out infinite}.rt-jet2{animation-delay:-.55s}' +
    '@keyframes rtdrop{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(26px);opacity:0}}.rt-drop{animation:rtdrop 1.2s linear infinite}.rt-drop2{animation-delay:-.6s}' +
    '@keyframes rtspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rt-sp{animation:rtspray 1.4s ease-out infinite}.rt-sp2{animation-delay:.45s}' +
    '@keyframes rtcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.rt-car{animation:rtcar 7.5s linear infinite}' +
    '@keyframes rtglow{0%,100%{opacity:.55}50%{opacity:1}}.rt-glow{animation:rtglow 2.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "rt-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, c, cls) => '<g class="rt-note ' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="0" rx="5" ry="3.6" fill="' + c + '"/><rect x="3.6" y="-18" width="2" height="18" fill="' + c + '"/><path d="M5.6 -18q8 4 6 12" stroke="' + c + '" stroke-width="2" fill="none"/></g></g>';
  const GOLD = "#f2c14e", RED = "#d7262b", GREEN = "#3aa655", BSL = "#f58220";

  /* 1. Ellsworth-Federal on the Broad Street Line, under South Broad: cream tile, the orange band, the black sign with the BSL bullet, the orange-striped train sliding in */
  function station() {
    const tr = '<g class="anim-train"><rect x="24" y="104" width="326" height="76" rx="8" fill="#cfd3d8" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (38 + i * 43) + '" y="116" width="30" height="26" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="24" y="150" width="326" height="5" fill="' + BSL + '"/><rect x="24" y="158" width="326" height="3" fill="' + BSL + '"/>' +
      '<rect x="330" y="108" width="20" height="70" rx="4" fill="#a3a9b0"/><circle cx="342" cy="168" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#ece3cc"/>' + Array.from({ length: 34 }, (_, i) => '<path d="M' + (i * 12) + ' 16v76" stroke="#ddd2b8" stroke-width="1"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (22 + i * 12) + 'h400" stroke="#ddd2b8" stroke-width="1"/>').join("") +
      '<rect x="0" y="0" width="400" height="16" fill="#2e2e30"/><rect x="0" y="84" width="400" height="10" fill="' + BSL + '"/>' +
      '<rect x="0" y="94" width="400" height="96" fill="#26262a"/>' + tr +
      '<rect x="0" y="190" width="400" height="7" fill="#f2c200"/><rect x="0" y="197" width="400" height="63" fill="#8e8a84"/>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 7) + '" y="16" width="14" height="174" fill="#3d6b8e"/><rect x="' + (x - 9) + '" y="16" width="18" height="6" fill="#2c4f6a"/>').join("") +
      '<rect x="64" y="34" width="208" height="30" rx="3" fill="#111"/><text x="76" y="55" ' + font + ' font-size="15" fill="#fff">Ellsworth-Federal</text>' + badge(220, 49, "BSL", BSL) +
      '<rect class="rt-flk" x="140" y="212" width="120" height="6" rx="3" fill="#fff6c2" opacity=".55"/>',
      "");
  }

  /* 2. CAPA on South Broad (Broad and Christian), where Black Thought and Questlove met: the old Ridgway Library's gray granite portico, six Doric columns, the wide steps, a kid drumming on a bucket, notes floating up */
  function capa() {
    const cols = Array.from({ length: 6 }, (_, i) => '<rect x="' + (128 + i * 26) + '" y="86" width="14" height="84" fill="#b9b6ae"/><rect x="' + (125 + i * 26) + '" y="82" width="20" height="5" fill="#a8a59d"/><path d="M' + (131 + i * 26) + ' 90v78M' + (136 + i * 26) + ' 90v78" stroke="#a3a097" stroke-width="1"/>').join("");
    const steps = Array.from({ length: 7 }, (_, i) => '<rect x="' + (104 - i * 8) + '" y="' + (170 + i * 7) + '" width="' + (192 + i * 16) + '" height="7" fill="' + (i % 2 ? "#a19e96" : "#b0ada5") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rt2)"/>' +
      '<rect x="20" y="96" width="96" height="74" fill="#9d9a92"/><rect x="284" y="96" width="96" height="74" fill="#9d9a92"/>' +
      [34, 66, 98, 296, 328, 360].map(x => '<rect x="' + (x - 7) + '" y="108" width="14" height="40" fill="#5f6a74"/>').join("") +
      '<rect x="20" y="92" width="96" height="6" fill="#8d8a82"/><rect x="284" y="92" width="96" height="6" fill="#8d8a82"/>' +
      '<rect x="114" y="72" width="172" height="12" fill="#a8a59d"/><path d="M114 72l86 -30 86 30z" fill="#b4b1a9" stroke="#8d8a82" stroke-width="2"/>' +
      cols + '<rect x="114" y="166" width="172" height="6" fill="#8d8a82"/>' + steps +
      '<rect x="164" y="56" width="72" height="14" rx="2" fill="' + RED + '"/><text x="200" y="67" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="2">CAPA</text>' +
      '<g transform="translate(240 206)"><rect x="-10" y="-4" width="20" height="22" rx="3" fill="#e8a33a" stroke="#7a4a14" stroke-width="2"/><ellipse cx="0" cy="-4" rx="10" ry="3" fill="#f6d79a"/>' +
      '<circle cx="0" cy="-30" r="6" fill="#2a1a12"/><path d="M0 -24v16" stroke="#2a1a12" stroke-width="5" stroke-linecap="round"/>' +
      '<g class="rt-tap"><path d="M-2 -18l-10 10" stroke="#2a1a12" stroke-width="3" stroke-linecap="round"/><path d="M-12 -8l4 2" stroke="#f2e2b8" stroke-width="2"/></g>' +
      '<g class="rt-tap rt-tap2"><path d="M2 -18l10 10" stroke="#2a1a12" stroke-width="3" stroke-linecap="round"/><path d="M12 -8l-4 2" stroke="#f2e2b8" stroke-width="2"/></g></g>' +
      note(262, 186, GOLD, "") + note(222, 182, "#fff", "rt-n2") + note(250, 176, RED, "rt-n3"),
      sky("rt2", "#8fc0e8", "#eaf3fa"));
  }

  /* 3. The Roots Picnic at the Mann in Fairmount Park: the big swooping pavilion roof, stage lights sweeping, the drum riser, the lawn crowd with hands up, picnic blankets */
  function picnic() {
    const crowd = Array.from({ length: 22 }, (_, i) => { const x = 8 + i * 18, y = 214 + (i % 3) * 6; return '<g class="rt-bob' + (i % 2 ? " rt-bob2" : "") + '"><circle cx="' + x + '" cy="' + (y - 10) + '" r="5" fill="#1a1416"/><rect x="' + (x - 6) + '" y="' + (y - 5) + '" width="12" height="20" rx="4" fill="#1a1416"/>' + (i % 3 === 0 ? '<path d="M' + (x + 4) + ' ' + (y - 4) + 'l6 -14" stroke="#1a1416" stroke-width="3" stroke-linecap="round"/>' : "") + '</g>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rt3)"/>' + stars(26) +
      '<path d="M0 120q60 -20 120 -10t160 -6t120 20v40H0z" fill="#1d3a22"/>' +
      '<path d="M70 92q130 -60 260 0l-14 14q-116 -46 -232 0z" fill="#f2efe6"/><path d="M84 106h232v6H84z" fill="#c9c4b6"/>' +
      [100, 150, 200, 250, 300].map(x => '<rect x="' + (x - 2) + '" y="106" width="4" height="64" fill="#8c877a"/>').join("") +
      '<rect x="92" y="150" width="216" height="24" fill="#2a2228"/><rect x="92" y="148" width="216" height="4" fill="' + GOLD + '"/>' +
      '<g transform="translate(200 136)"><ellipse cx="0" cy="10" rx="14" ry="5" fill="#c43" /><rect x="-14" y="2" width="28" height="9" fill="#c43"/><circle cx="-24" cy="0" r="7" fill="#d9c27a"/><circle cx="24" cy="0" r="7" fill="#d9c27a"/><path d="M-24 0v12M24 0v12" stroke="#666" stroke-width="2"/></g>' +
      '<g class="rt-sw"><path d="M120 108l-34 110h40z" fill="' + GOLD + '" opacity=".22"/></g><g class="rt-sw rt-sw2"><path d="M280 108l-6 110h40z" fill="' + RED + '" opacity=".22"/></g>' +
      '<g class="rt-sw rt-sw2"><path d="M200 108l-30 110h60z" fill="' + GREEN + '" opacity=".2"/></g>' +
      '<rect x="0" y="174" width="400" height="86" fill="#2f5a2a"/>' +
      '<rect x="20" y="236" width="60" height="16" fill="' + RED + '"/><path d="M20 244h60M50 236v16" stroke="#fff" stroke-width="2" opacity=".7"/>' +
      '<rect x="300" y="238" width="64" height="16" fill="' + RED + '"/><path d="M300 246h64M332 238v16" stroke="#fff" stroke-width="2" opacity=".7"/>' +
      crowd,
      sky("rt3", "#120c2a", "#4a2a5a"));
  }

  /* 4. LOVE Park, JFK Plaza: the red LOVE letters with the tilted O on their pedestal, the fountain jetting, Center City towers behind (Act Too: hip-hop, the love of my life) */
  function lovepark() {
    return svg(
      '<rect width="400" height="260" fill="url(#rt4)"/>' +
      '<g fill="#5e7590"><rect x="10" y="40" width="40" height="110"/><rect x="58" y="70" width="34" height="80"/><rect x="300" y="30" width="36" height="120"/><path d="M300 30l18 -22 18 22z"/><rect x="344" y="60" width="46" height="90"/><rect x="250" y="80" width="40" height="70"/></g>' +
      [[18, 52], [34, 52], [18, 74], [34, 74], [18, 96], [34, 96], [66, 84], [80, 84], [308, 50], [324, 50], [308, 74], [324, 74], [352, 74], [370, 74], [352, 98], [370, 98], [258, 92], [274, 92]].map(p => '<rect x="' + p[0] + '" y="' + p[1] + '" width="6" height="8" fill="#d9e6f2" opacity=".55"/>').join("") +
      '<rect x="0" y="150" width="400" height="110" fill="#b8b3a8"/><path d="M0 150h400" stroke="#9c978c" stroke-width="3"/>' +
      '<ellipse cx="200" cy="214" rx="170" ry="30" fill="#3f7fb3"/><ellipse cx="200" cy="214" rx="170" ry="30" fill="none" stroke="#d8d2c4" stroke-width="5"/>' +
      '<g class="rt-jet"><path d="M192 214q8 -96 16 0z" fill="#d6ecff" opacity=".85"/></g><g class="rt-jet rt-jet2"><path d="M176 214q6 -52 12 0zM212 214q6 -52 12 0z" fill="#d6ecff" opacity=".7"/></g>' +
      '<g class="rt-drop"><circle cx="186" cy="150" r="2" fill="#e8f4ff"/><circle cx="216" cy="146" r="2" fill="#e8f4ff"/></g><g class="rt-drop rt-drop2"><circle cx="196" cy="140" r="2" fill="#e8f4ff"/><circle cx="208" cy="152" r="2" fill="#e8f4ff"/></g>' +
      '<g transform="translate(64 64)"><rect x="-6" y="92" width="108" height="10" fill="#8a8578"/>' +
      [["L", 22, 42, 0], ["O", 70, 42, -24], ["V", 22, 90, 0], ["E", 70, 90, 0]].map(l => '<g transform="rotate(' + l[3] + ' ' + l[1] + ' ' + (l[2] - 18) + ')"><text x="' + (l[1] + 4) + '" y="' + (l[2] + 3) + '" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="60" fill="#1f6b48">' + l[0] + '</text><text x="' + l[1] + '" y="' + l[2] + '" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="60" fill="' + RED + '" stroke="#2a5aa0" stroke-width="1">' + l[0] + '</text></g>').join("") + '</g>',
      sky("rt4", "#7fb6e6", "#f3ead2"));
  }

  /* 5. Broad St and Christian St, South Philly: green signs, ROOTS tagged on the wall, the Kimmel Center's glass barrel vault glowing up Broad Street behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#rt5)"/>' + stars(14) +
      '<g fill="#2b2a3e"><rect x="0" y="70" width="60" height="70"/><rect x="330" y="50" width="70" height="90"/><rect x="290" y="80" width="40" height="60"/></g>' +
      '<rect x="80" y="96" width="220" height="44" fill="#7a4632"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (90 + i * 21) + '" y="104" width="12" height="16" fill="#ffd98a" opacity=".7"/>').join("") +
      '<path d="M80 96q110 -96 220 0z" fill="#9cc8e6" opacity=".9"/><path d="M80 96q110 -96 220 0" fill="none" stroke="#e8f2fa" stroke-width="3"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (102 + i * 22) + ' 96Q' + (102 + i * 22) + ' ' + (60 - Math.abs(4 - i) * 2) + ' 190 50" stroke="#e8f2fa" stroke-width="1.2" fill="none" opacity=".75"/>').join("") +
      '<path class="rt-glow" d="M100 96q90 -76 180 0z" fill="#fff2b0" opacity=".35"/>' +
      '<rect x="0" y="136" width="400" height="88" fill="#6d3a2c"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#5e3125" stroke-width="1"/>').join("") +
      tag("ROOTS", 26, 196, 52, GOLD, -6) + tag("2-1-5", 196, 192, 30, RED, -4) + tag("OKAYPLAYER", 30, 218, 18, "#fff", -3) + tag("BLACK THOUGHT", 160, 216, 16, GREEN, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="rt-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + GREEN + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + GREEN + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="336" y="98" width="6" height="126" fill="#2f2f2f"/>' + sign(290, 100, 98, "Broad St") + sign(280, 126, 118, "Christian St") +
      '<g class="rt-sp"><circle cx="186" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="rt-sp rt-sp2"><circle cx="192" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("rt5", "#1a1438", "#d86a4a"));
  }

  window.SCENES = { station: station, capa: capa, picnic: picnic, lovepark: lovepark, corner: corner };
})();
