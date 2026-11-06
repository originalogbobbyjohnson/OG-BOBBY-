/* akrobatik scenes (Regions tab: Boston + New England; Dorchester). CSS classes and ids prefixed ak- (the page's own anim-train is kept).
   1 JFK/UMass on the Red Line (and the Commuter Rail): the open-air platform beside the Expressway, the silver train with its red band sliding in, the black sign with the RL and CR badges.
   2 UMass Boston on the harbor at Columbia Point: the brick campus and the enclosed skywalk he walked to class in 1994 with Wu-Tang in his headphones, where he now teaches the history of hip-hop; a little figure crossing, gulls over the water.
   3 The 94.5 studio where he wrote and read his sports "Rap-Up": ON AIR light blinking, the mic on its arm, faders sliding, the score screen.
   4 Semi-pro football under the lights (he played fullback for the Randolph Oilers): yard lines, goalposts, the ball spiraling through the night.
   5 Bowdoin St and Hancock St on Meeting House Hill, Dorchester: green signs, AKRO tagged on the brick, the tall white steeple of the First Parish Church behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes akflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.ak-flk{animation:akflick 2.2s infinite}.ak-flk2{animation-delay:.7s}' +
    '@keyframes akcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.ak-car{animation:akcar 5s linear infinite}.ak-car2{animation-delay:-2.5s}' +
    '@keyframes akwalk{from{transform:translateX(0)}to{transform:translateX(150px)}}.ak-walk{animation:akwalk 7s linear infinite}' +
    '@keyframes akgull{from{transform:translate(-40px,0)}to{transform:translate(440px,-24px)}}.ak-gull{animation:akgull 11s linear infinite}.ak-gull2{animation-delay:-5.5s}' +
    '@keyframes akrip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.ak-rip{animation:akrip 3s ease-in-out infinite}' +
    '@keyframes akblink{0%,100%{opacity:1}50%{opacity:.35}}.ak-air{animation:akblink 1.2s ease-in-out infinite}' +
    '@keyframes akfade{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}.ak-fd{transform-box:fill-box;animation:akfade 1.8s ease-in-out infinite}.ak-fd2{animation-delay:-.6s}.ak-fd3{animation-delay:-1.2s}' +
    '@keyframes akball{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(300px,-60px) rotate(720deg)}}.ak-ball{transform-box:fill-box;transform-origin:50% 50%;animation:akball 2.8s linear infinite}' +
    '@keyframes akspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ak-sp{animation:akspray 1.4s ease-out infinite}.ak-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="46" height="11" rx="4" fill="' + c + '"/><rect x="' + (x + 10) + '" y="' + (y - 7) + '" width="26" height="8" rx="3" fill="' + c + '"/><circle cx="' + (x + 10) + '" cy="' + (y + 11) + '" r="4" fill="#111"/><circle cx="' + (x + 36) + '" cy="' + (y + 11) + '" r="4" fill="#111"/></g>';
  const RED = "#da291c", CR = "#80276c", GOLD = "#e8b923", HOT = "#d6452b", SKY = "#4fb3e8";

  /* 1. JFK/UMass, open-air platform by the Expressway */
  function akstation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (44 + i * 48) + '" y="132" width="34" height="22" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="122" width="330" height="70" rx="8" fill="#cfd4d8" stroke="#6d757c" stroke-width="2"/>' + win +
      '<rect x="24" y="160" width="330" height="9" fill="' + RED + '"/><rect x="24" y="172" width="330" height="3" fill="' + RED + '"/>' +
      '<rect x="334" y="126" width="18" height="60" rx="4" fill="#aeb4ba"/><circle cx="344" cy="180" r="3.5" fill="#fff6c2"/>' +
      '<rect x="282" y="128" width="48" height="12" rx="2" fill="#111"/><text x="306" y="137" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">ALEWIFE</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#aks1)"/>' +
      '<g fill="#3d4456"><rect x="230" y="40" width="22" height="50"/><rect x="256" y="28" width="18" height="62"/><rect x="278" y="48" width="26" height="42"/><rect x="310" y="36" width="16" height="54"/></g>' +
      '<rect x="0" y="86" width="400" height="10" fill="#8a8f96"/><rect x="0" y="96" width="400" height="4" fill="#5b6068"/>' +
      car("ak-car", 0, 80, "#e8e8e8") + car("ak-car ak-car2", 0, 80, "#c0392b") +
      '<rect x="0" y="100" width="400" height="20" fill="#6f747c"/>' +
      [40, 160, 280].map(x => '<rect x="' + x + '" y="40" width="5" height="80" fill="#3a3f47"/><rect x="' + (x - 14) + '" y="36" width="33" height="6" fill="#3a3f47"/>').join("") +
      '<g class="ak-flk"><rect x="28" y="42" width="30" height="3" fill="#fff3c4"/></g><g class="ak-flk ak-flk2"><rect x="268" y="42" width="30" height="3" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="194" width="400" height="8" fill="#f2c200"/><rect x="0" y="202" width="400" height="58" fill="#9a958c"/><path d="M0 230h400" stroke="#8a857c" stroke-width="2"/>' +
      '<rect x="78" y="208" width="244" height="34" rx="3" fill="#111"/><text x="92" y="231" ' + font + ' font-size="17" fill="#fff">JFK/UMass</text>' + badge(208, 225, "RL", RED) + badge(252, 225, "CR", CR),
      sky("aks1", "#2b3d63", "#e7a46f"));
  }

  /* 2. UMass Boston, the skywalk on the harbor */
  function akumass() {
    const bwin = (x, y, n, rows) => Array.from({ length: rows }, (_, r) => Array.from({ length: n }, (_, c) => '<rect x="' + (x + c * 14) + '" y="' + (y + r * 16) + '" width="8" height="10" fill="#f3d9a4" opacity=".8"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#aks2)"/>' +
      '<g class="ak-gull"><path d="M20 40q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="ak-gull ak-gull2"><path d="M60 58q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<rect x="20" y="70" width="110" height="110" fill="#8e4a35"/><rect x="20" y="70" width="110" height="8" fill="#6e3526"/>' + bwin(30, 86, 7, 5) +
      '<rect x="270" y="56" width="112" height="124" fill="#9b5540"/><rect x="270" y="56" width="112" height="8" fill="#6e3526"/>' + bwin(280, 72, 7, 6) +
      '<rect x="130" y="104" width="140" height="30" fill="#7a3f2c"/><rect x="134" y="110" width="132" height="14" fill="#bfe0f2" opacity=".85"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (150 + i * 16) + ' 110v14" stroke="#7a3f2c" stroke-width="2"/>').join("") +
      '<rect x="160" y="134" width="8" height="46" fill="#6e3526"/><rect x="232" y="134" width="8" height="46" fill="#6e3526"/>' +
      '<g class="ak-walk"><circle cx="140" cy="113" r="3.2" fill="#2b2b2b"/><rect x="137" y="116" width="6" height="8" rx="2" fill="' + HOT + '"/><path d="M136 112q4 -6 8 0" stroke="#111" stroke-width="1.6" fill="none"/></g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#c7c1b5"/><rect x="0" y="190" width="400" height="70" fill="#3f6f9a"/>' +
      '<g class="ak-rip"><path d="M10 206h60M120 220h80M260 204h70M40 240h90M230 248h120" stroke="#9cc6e8" stroke-width="2" stroke-linecap="round" opacity=".7"/></g>' +
      '<text x="200" y="30" text-anchor="middle" ' + font + ' font-size="11" fill="#22303f">UMASS BOSTON · COLUMBIA POINT</text>',
      sky("aks2", "#9fcdee", "#eef6fb"));
  }

  /* 3. The 94.5 studio, the Rap-Up */
  function akradio() {
    const fader = (x, cls, c) => '<rect x="' + (x + 3) + '" y="176" width="3" height="44" fill="#111"/><rect class="ak-fd ' + cls + '" x="' + x + '" y="196" width="9" height="7" rx="1" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#14161c"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="38" height="150" fill="#1c1f27"/><path d="M' + (i * 40 + 6) + ' 10v130M' + (i * 40 + 19) + ' 10v130M' + (i * 40 + 32) + ' 10v130" stroke="#232733" stroke-width="3"/>').join("") +
      '<g class="ak-air"><rect x="150" y="18" width="100" height="30" rx="4" fill="#d6452b"/><text x="200" y="39" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">ON AIR</text></g>' +
      '<rect x="260" y="62" width="120" height="70" rx="4" fill="#0b0e13" stroke="#3a3f47" stroke-width="3"/><text x="320" y="86" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">THE RAP-UP</text><text x="320" y="106" text-anchor="middle" ' + font + ' font-size="11" fill="#7fd1a8">C\'S WIN</text><text x="320" y="122" text-anchor="middle" ' + font + ' font-size="10" fill="#9fb3c8">94.5 FM</text>' +
      '<path d="M60 30l40 50 -14 40" stroke="#6b7280" stroke-width="6" fill="none" stroke-linecap="round"/><rect x="70" y="112" width="30" height="46" rx="14" fill="#2b2f3a" stroke="#8a8f96" stroke-width="2"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M74 ' + (122 + i * 7) + 'h22" stroke="#555a66" stroke-width="1.5"/>').join("") +
      '<rect x="0" y="160" width="400" height="100" fill="#2a2d35"/><rect x="40" y="168" width="320" height="64" rx="4" fill="#1a1c22"/>' +
      [56, 76, 96, 116, 136].map((x, i) => fader(x, ["", "ak-fd2", "ak-fd3", "", "ak-fd2"][i], i % 2 ? GOLD : SKY)).join("") +
      [176, 196, 216].map((x, i) => '<circle cx="' + x + '" cy="186" r="6" fill="#3a3f47"/><circle cx="' + x + '" cy="210" r="6" fill="#3a3f47"/>').join("") +
      '<rect x="244" y="176" width="100" height="44" rx="3" fill="#0b0e13"/>' + Array.from({ length: 10 }, (_, i) => '<rect class="ak-fd' + (i % 3 ? " ak-fd" + (i % 3 + 1) : "") + '" x="' + (250 + i * 9) + '" y="' + (190 + (i % 4) * 4) + '" width="6" height="' + (24 - (i % 4) * 4) + '" fill="' + (i > 7 ? HOT : "#3ddc84") + '"/>').join(""),
      "");
  }

  /* 4. Semi-pro football under the lights */
  function akfield() {
    const light = (x) => '<rect x="' + (x - 2) + '" y="20" width="4" height="100" fill="#3a3f47"/><rect x="' + (x - 16) + '" y="12" width="32" height="14" rx="2" fill="#555"/>' + Array.from({ length: 4 }, (_, i) => '<circle class="ak-flk" cx="' + (x - 11 + i * 7) + '" cy="19" r="2.6" fill="#fffbe0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#aks4)"/>' +
      Array.from({ length: 40 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + (10 + (i * 29) % 70) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      light(40) + light(360) +
      '<rect x="0" y="112" width="400" height="22" fill="#2a2d35"/>' + Array.from({ length: 60 }, (_, i) => '<circle cx="' + (4 + i * 6.7) + '" cy="' + (118 + (i % 3) * 5) + '" r="2.2" fill="' + ["#d6452b", "#e8e8e8", "#4fb3e8"][i % 3] + '" opacity=".75"/>').join("") +
      '<path d="M0 134h400v126H0z" fill="#2f7d3a"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (20 + i * 45) + ' 134l' + ((i - 4) * 14) + ' 126" stroke="#e9f4ea" stroke-width="2"/>').join("") +
      '<path d="M0 134h400" stroke="#e9f4ea" stroke-width="3"/>' +
      '<path d="M200 134v-30M180 104h40M180 104v-40M220 104v-40" stroke="#f2c200" stroke-width="5" fill="none"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="22" fill="#e9f4ea" opacity=".85" letter-spacing="6">RANDOLPH</text>' +
      '<g class="ak-ball"><ellipse cx="60" cy="200" rx="11" ry="6.5" fill="#8b4a22" stroke="#4a2410" stroke-width="1.5"/><path d="M54 200h12M57 198v4M60 198v4M63 198v4" stroke="#fff" stroke-width="1"/></g>',
      sky("aks4", "#060a14", "#1c2a44"));
  }

  /* 5. Bowdoin St and Hancock St, Meeting House Hill */
  function akcorner() {
    const church = '<g transform="translate(0,14)"><path d="M120 126v-46h80v46z" fill="#f4f4f0"/><path d="M114 82l46 -26 46 26z" fill="#e8e8e2"/>' +
      '<rect x="146" y="30" width="28" height="30" fill="#f4f4f0"/><rect x="150" y="12" width="20" height="18" fill="#f4f4f0"/><path d="M148 12l12 -10 12 10z" fill="#e8e8e2"/><path d="M160 2v-8" stroke="#c9a24a" stroke-width="2"/>' +
      '<circle cx="160" cy="44" r="7" fill="#1d2a44" stroke="#c9a24a" stroke-width="1.5"/><path d="M160 44v-5M160 44h4" stroke="#fff" stroke-width="1.2"/>' +
      [132, 152, 172, 188].map(x => '<rect x="' + x + '" y="90" width="10" height="22" rx="5" fill="#9fb3c8"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#aks5)"/>' +
      '<path d="M0 130q120 -40 240 -20t160 10v20H0z" fill="#2b3a2f"/>' +
      '<g fill="#2b2f45"><rect x="0" y="94" width="60" height="44"/><path d="M0 94l30 -16 30 16z"/><rect x="250" y="88" width="56" height="50"/><path d="M250 88l28 -16 28 16z"/><rect x="316" y="98" width="84" height="40"/></g>' +
      church +
      '<rect x="0" y="126" width="400" height="98" fill="#6e3a2a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#5a2f22" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#5a2f22" stroke-width="1"/>').join("")).join("") +
      tag("AKRO", 26, 192, 58, GOLD, -6) + tag("A TO THE K", 30, 216, 18, SKY, -3) + tag("ALWAYS BET ON AK", 176, 204, 16, HOT, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 140, "Bowdoin St") + sign(258, 124, 124, "Hancock St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="ak-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="ak-sp"><circle cx="186" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="ak-sp ak-sp2"><circle cx="192" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("aks5", "#1e2a4a", "#d98a5e"));
  }

  window.SCENES = { akstation: akstation, akumass: akumass, akradio: akradio, akfield: akfield, akcorner: akcorner };
})();
