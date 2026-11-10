/* reubenvincent scenes (Regions tab: THE CAROLINAS; East Charlotte). CSS classes prefixed rv- (the page's own anim-train is kept).
   1 The Eastland Community Transit Center in east Charlotte (on the old Eastland Mall site): a white CATS bus pulling into the bays.
   2 Albemarle Road at night (his song "Albemarle Road"): the wide east-side strip, shop signs, traffic lights, cars rolling.
   3 Rocky River High School, the east-side school he started at: brick front, flag waving, the bell.
   4 The old Eastland Mall ice rink, the east side's famous indoor rink under the skylights, skaters gliding.
   5 Albemarle Rd and N Sharon Amity Rd: green street signs, REUB tagged on the wall, uptown's Spectrum Center lit teal far off behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rvcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.rv-car{animation:rvcar 6s linear infinite}.rv-car2{animation-delay:-3s}' +
    '@keyframes rvcarL{from{transform:translateX(520px)}to{transform:translateX(-140px)}}.rv-carL{animation:rvcarL 7s linear infinite}.rv-carL2{animation-delay:-3.5s}' +
    '@keyframes rvblink{0%,100%{opacity:.3}50%{opacity:1}}.rv-bl{animation:rvblink 1.6s ease-in-out infinite}.rv-bl2{animation-delay:-.8s}' +
    '@keyframes rvflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.rv-flag{transform-box:fill-box;transform-origin:0% 50%;animation:rvflag 1.8s ease-in-out infinite}' +
    '@keyframes rvskate{0%{transform:translateX(0)}50%{transform:translateX(150px)}100%{transform:translateX(0)}}.rv-sk{animation:rvskate 6s ease-in-out infinite}.rv-sk2{animation-delay:-2s}.rv-sk3{animation-delay:-4s}' +
    '@keyframes rvglow{0%,100%{opacity:.55}50%{opacity:1}}.rv-glow{animation:rvglow 2.4s ease-in-out infinite}' +
    '@keyframes rvspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rv-sp{animation:rvspray 1.4s ease-out infinite}.rv-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="54" height="13" rx="5" fill="' + c + '"/><rect x="' + (x + 11) + '" y="' + (y - 8) + '" width="30" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 14) + '" y="' + (y - 6) + '" width="11" height="6" fill="#bfe3ff"/><rect x="' + (x + 28) + '" y="' + (y - 6) + '" width="11" height="6" fill="#bfe3ff"/><circle cx="' + (x + 12) + '" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="' + (x + 42) + '" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="' + (x + 52) + '" cy="' + (y + 5) + '" r="2" fill="#ffe08a"/></g>';
  const badge = (x, y, txt) => '<rect x="' + x + '" y="' + y + '" width="' + (txt.length * 9 + 12) + '" height="18" rx="3" fill="#1d6fb8"/><text x="' + (x + (txt.length * 9 + 12) / 2) + '" y="' + (y + 13.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';

  function rvstation() {
    let win = '';
    for (let i = 0; i < 6; i++) win += '<rect x="' + (40 + i * 24) + '" y="148" width="18" height="16" rx="2" fill="#2a3b4c"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rvs1)"/>' +
      '<circle cx="60" cy="56" r="34" fill="#4e8a3e"/><circle cx="350" cy="60" r="30" fill="#4e8a3e"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#6c6f73"/><path d="M0 222h400" stroke="#f2c14e" stroke-width="2" stroke-dasharray="14 10"/><rect x="0" y="186" width="400" height="10" fill="#b8b9ba"/>' +
      // canopy over the bays
      '<rect x="20" y="88" width="360" height="12" fill="#e9ecef"/><path d="M20 100h360v4H20z" fill="#1d6fb8"/>' +
      '<rect x="40" y="104" width="5" height="82" fill="#555"/><rect x="200" y="104" width="5" height="82" fill="#555"/><rect x="360" y="104" width="5" height="82" fill="#555"/>' +
      // sign
      '<rect x="214" y="110" width="168" height="40" rx="3" fill="#111"/><text x="298" y="126" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Eastland Community</text><text x="298" y="142" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Transit Center</text>' +
      badge(222, 156, '28') + badge(258, 156, '221') +
      // bus
      '<g class="anim-train"><rect x="20" y="138" width="180" height="50" rx="6" fill="#f4f6f8" stroke="#8a9096" stroke-width="2"/><rect x="20" y="168" width="180" height="6" fill="#1d6fb8"/><rect x="20" y="174" width="180" height="3" fill="#7cc6e8"/>' + win +
      '<rect x="186" y="144" width="12" height="22" rx="2" fill="#2a3b4c"/><rect x="130" y="140" width="56" height="8" rx="1" fill="#111"/><text x="158" y="147" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb347">EASTLAND</text>' +
      '<circle cx="54" cy="190" r="9" fill="#111"/><circle cx="166" cy="190" r="9" fill="#111"/><circle cx="54" cy="190" r="4" fill="#888"/><circle cx="166" cy="190" r="4" fill="#888"/></g>',
      sky('rvs1', '#7fb8e6', '#d6ebf8'));
  }

  function rvroad() {
    return svg(
      '<rect width="400" height="260" fill="url(#rvs2)"/>' +
      // strip mall
      '<rect x="0" y="96" width="400" height="74" fill="#3a3340"/>' +
      '<rect x="10" y="104" width="90" height="20" rx="2" fill="#1a1520"/><text class="rv-bl" x="55" y="119" text-anchor="middle" ' + font + ' font-size="12" fill="#ff5c8a">TAQUERIA</text>' +
      '<rect x="110" y="104" width="120" height="20" rx="2" fill="#1a1520"/><text x="170" y="119" text-anchor="middle" ' + font + ' font-size="12" fill="#7ee0f0">BEAUTY SUPPLY</text>' +
      '<rect x="240" y="104" width="70" height="20" rx="2" fill="#1a1520"/><text class="rv-bl rv-bl2" x="275" y="119" text-anchor="middle" ' + font + ' font-size="12" fill="#ffd34d">WINGS</text>' +
      '<rect x="320" y="104" width="74" height="20" rx="2" fill="#1a1520"/><text x="357" y="119" text-anchor="middle" ' + font + ' font-size="11" fill="#9cf29c">LAUNDRY</text>' +
      '<rect x="14" y="132" width="80" height="34" fill="#f2d48a" opacity=".55"/><rect x="114" y="132" width="110" height="34" fill="#f2d48a" opacity=".45"/><rect x="244" y="132" width="60" height="34" fill="#f2d48a" opacity=".55"/><rect x="324" y="132" width="66" height="34" fill="#f2d48a" opacity=".4"/>' +
      // road
      '<rect x="0" y="170" width="400" height="90" fill="#2c2c30"/><path d="M0 214h400" stroke="#f2c14e" stroke-width="2"/><path d="M0 194h400M0 236h400" stroke="#ddd" stroke-width="2" stroke-dasharray="16 12"/>' +
      // signal mast + street sign
      '<rect x="312" y="40" width="6" height="134" fill="#555"/><rect x="206" y="44" width="110" height="5" fill="#555"/>' +
      '<rect x="226" y="49" width="14" height="34" rx="3" fill="#222"/><circle cx="233" cy="56" r="4" fill="#4a1a1a"/><circle cx="233" cy="66" r="4" fill="#4a3a1a"/><circle class="rv-glow" cx="233" cy="76" r="4" fill="#3ee08a"/>' +
      sign(100, 54, 110, 'Albemarle Rd') +
      car('rv-car', 0, 220, '#d6336c') + car('rv-car rv-car2', 0, 220, '#8a9096') + car('rv-carL', 0, 196, '#f4f6f8') + car('rv-carL rv-carL2', 0, 196, '#1fb5c9'),
      sky('rvs2', '#141028', '#4a2a5a'));
  }

  function rvschool() {
    let win = '';
    for (let r = 0; r < 2; r++) for (let c = 0; c < 5; c++) win += '<rect x="' + (36 + c * 26) + '" y="' + (112 + r * 34) + '" width="16" height="20" fill="#bfe3ff" opacity=".85"/>';
    let win2 = '';
    for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) win2 += '<rect x="' + (262 + c * 28) + '" y="' + (112 + r * 34) + '" width="16" height="20" fill="#bfe3ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rvs3)"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#6fa34e"/><path d="M180 260l14 -60h12l14 60z" fill="#b8b9ba"/>' +
      '<rect x="24" y="100" width="140" height="100" fill="#a0522d" stroke="#5e2a16" stroke-width="2"/>' + win +
      '<rect x="250" y="100" width="128" height="100" fill="#a0522d" stroke="#5e2a16" stroke-width="2"/>' + win2 +
      '<rect x="160" y="84" width="94" height="116" fill="#b8b2a4" stroke="#6a655a" stroke-width="2"/><rect x="172" y="140" width="70" height="60" fill="#3d5f78"/><path d="M207 140v60M172 170h70" stroke="#d9dde0" stroke-width="2"/>' +
      '<rect x="164" y="92" width="86" height="34" rx="2" fill="#f4f1e8"/><text x="207" y="106" text-anchor="middle" ' + font + ' font-size="10" fill="#5e2a16">ROCKY RIVER</text><text x="207" y="120" text-anchor="middle" ' + font + ' font-size="10" fill="#5e2a16">HIGH SCHOOL</text>' +
      // flagpole
      '<rect x="120" y="40" width="3" height="160" fill="#ccc"/><g class="rv-flag"><rect x="123" y="42" width="36" height="22" fill="#bf3a3a"/><rect x="123" y="42" width="16" height="12" fill="#2a4a8a"/><path d="M139 46h20M139 50h20M123 58h36" stroke="#fff" stroke-width="2"/></g>' +
      // bell
      '<path d="M330 60q10 -14 20 0l4 14h-28z" fill="#f2c14e" stroke="#8a6512" stroke-width="2"/><circle class="rv-glow" cx="340" cy="78" r="3" fill="#8a6512"/>',
      sky('rvs3', '#78b6e8', '#d9edfa'));
  }

  function rvrink() {
    let sky2 = '';
    for (let i = 0; i < 7; i++) sky2 += '<path d="M' + (20 + i * 54) + ' 20l27 -14l27 14z" fill="#bfe3ff" opacity=".7" stroke="#8aa" stroke-width="1"/>';
    const skater = (cls, x, y, c) => '<g class="' + cls + '"><circle cx="' + x + '" cy="' + (y - 26) + '" r="5" fill="#2b2119"/><path d="M' + (x - 5) + ' ' + (y - 20) + 'h10l3 12h-16z" fill="' + c + '"/><path d="M' + (x - 3) + ' ' + (y - 8) + 'l-4 8M' + (x + 3) + ' ' + (y - 8) + 'l5 8" stroke="#223" stroke-width="3"/><path d="M' + (x - 11) + ' ' + y + 'h8M' + (x + 4) + ' ' + y + 'h8" stroke="#ccc" stroke-width="2"/><path d="M' + (x - 5) + ' ' + (y - 17) + 'l-9 6M' + (x + 5) + ' ' + (y - 17) + 'l9 -4" stroke="' + c + '" stroke-width="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#d9d2c4"/>' +
      '<rect x="0" y="0" width="400" height="26" fill="#9aa"/>' + sky2 +
      // mall upper level + railing
      '<rect x="0" y="26" width="400" height="70" fill="#e8e1d2"/><rect x="20" y="40" width="70" height="40" fill="#c96a3a"/><rect x="110" y="40" width="80" height="40" fill="#3a7a8a"/><rect x="210" y="40" width="70" height="40" fill="#8a5aa0"/><rect x="300" y="40" width="80" height="40" fill="#c9a03a"/>' +
      '<rect x="0" y="92" width="400" height="6" fill="#888"/><path d="M0 98h400" stroke="#aaa" stroke-width="2"/>' +
      '<rect x="120" y="102" width="160" height="22" rx="3" fill="#1d6fb8"/><text x="200" y="118" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">EASTLAND ICE RINK</text>' +
      // rink
      '<rect x="0" y="134" width="400" height="10" fill="#f4f6f8"/><rect x="0" y="144" width="400" height="116" fill="#e6f4fb"/><path d="M200 144v116" stroke="#d6336c" stroke-width="3"/><circle cx="200" cy="200" r="26" fill="none" stroke="#1d6fb8" stroke-width="2"/>' +
      '<path d="M20 170q60 10 120 0M240 230q60 10 120 0" stroke="#cfe6f2" stroke-width="2" fill="none"/>' +
      skater('rv-sk', 40, 190, '#d6336c') + skater('rv-sk rv-sk2', 120, 230, '#1fb5c9') + skater('rv-sk rv-sk3', 210, 176, '#f2c14e'),
      '');
  }

  function rvcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#rvs5)"/>' +
      // uptown far off: Spectrum Center glowing teal, a few towers
      '<rect x="40" y="70" width="18" height="60" fill="#2a2440"/><rect x="62" y="56" width="22" height="74" fill="#2a2440"/><rect x="88" y="78" width="16" height="52" fill="#2a2440"/>' +
      '<rect x="120" y="98" width="120" height="34" rx="4" fill="#3a2a2a"/><path d="M128 98q52 -26 104 0z" fill="#1fb5c9" class="rv-glow"/><rect x="128" y="104" width="104" height="10" fill="#1fb5c9" opacity=".7" class="rv-glow"/><rect x="132" y="116" width="96" height="12" fill="#7a3d6a" opacity=".8"/>' +
      '<text x="180" y="94" text-anchor="middle" ' + font + ' font-size="7" fill="#bfeff5">SPECTRUM CENTER</text>' +
      '<rect x="0" y="226" width="400" height="34" fill="#4a4a50"/><rect x="0" y="218" width="400" height="8" fill="#a9aaab"/>' +
      // wall
      '<rect x="0" y="132" width="270" height="86" fill="#5a4a6a"/><path d="M0 146h270M0 160h270M0 174h270M0 188h270M0 202h270" stroke="#463a54" stroke-width="1"/>' +
      tag('REUB', 26, 194, 50, '#d6336c', -6) + tag('QUEEN CITY', 150, 210, 18, '#f2c14e', -4) +
      '<g class="rv-sp"><circle cx="168" cy="166" r="3" fill="#d6336c"/><circle cx="176" cy="160" r="2" fill="#d6336c"/></g><g class="rv-sp rv-sp2"><circle cx="172" cy="170" r="2.5" fill="#f2c14e"/></g>' +
      '<rect x="334" y="92" width="6" height="128" fill="#4a4f55"/>' + sign(276, 96, 118, 'Albemarle Rd') + sign(270, 122, 124, 'N Sharon Amity') +
      car('rv-car', 0, 232, '#8a9096'),
      sky('rvs5', '#1a1430', '#c25a6a'));
  }

  window.SCENES = { rvstation: rvstation, rvroad: rvroad, rvschool: rvschool, rvrink: rvrink, rvcorner: rvcorner };
})();
