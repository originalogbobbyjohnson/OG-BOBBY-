/* noname scenes (Regions tab: Chicago; Bronzeville, South Side). CSS classes and ids prefixed nn- (the page's own anim-train is kept).
   1 47th on the CTA Red Line: the station in the middle of the Dan Ryan, traffic on both sides, a silver Red Line train sliding in.
   2 Harold Washington Library: red brick, granite base, green copper roof with its big owl ornaments. YOUmedia's open mics there are where she came up.
   3 Bronzeville block on a summer night ("Diddy Bop": "mama say come home before the streetlights do"): greystones, a hydrant spraying, the streetlights flickering on.
   4 31st Street Beach at sunset ("Telefone"): a red rotary telephone on a towel, the lake rolling in.
   5 E 47th St and S King Dr in Bronzeville: green signs, NONAME tagged, the Victory Monument (pale granite shaft, bronze soldier on top) behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes nnflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.nn-flk{animation:nnflick 2.2s infinite}.nn-flk2{animation-delay:.7s}' +
    '@keyframes nncar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.nn-car{animation:nncar 4.5s linear infinite}.nn-car2{animation-delay:-2.2s}' +
    '@keyframes nncarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.nn-carL{animation:nncarL 5s linear infinite}.nn-carL2{animation-delay:-2.5s}' +
    '@keyframes nnspray{0%{transform:translate(0,0);opacity:.95}100%{transform:translate(34px,-30px);opacity:0}}.nn-hyd{animation:nnspray 1s ease-out infinite}.nn-hyd2{animation-delay:-.33s}.nn-hyd3{animation-delay:-.66s}' +
    '@keyframes nnlamp{0%,30%{opacity:.15}40%{opacity:.9}45%{opacity:.3}55%,100%{opacity:1}}.nn-lamp{animation:nnlamp 4s ease-in-out infinite}.nn-lamp2{animation-delay:-1.3s}' +
    '@keyframes nnrip{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.nn-rip{animation:nnrip 3s ease-in-out infinite}.nn-rip2{animation-delay:-1.5s}' +
    '@keyframes nnring{0%,60%,100%{transform:rotate(0)}65%{transform:rotate(-6deg)}70%{transform:rotate(6deg)}75%{transform:rotate(-6deg)}80%{transform:rotate(6deg)}85%{transform:rotate(0)}}.nn-ring{transform-box:fill-box;transform-origin:50% 100%;animation:nnring 2.4s ease-in-out infinite}' +
    '@keyframes nnwave{0%,100%{opacity:0}60%,80%{opacity:1}}.nn-rw{animation:nnwave 2.4s ease-in-out infinite}' +
    '@keyframes nnbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-24px)}}.nn-bird{animation:nnbird 12s linear infinite}.nn-bird2{animation-delay:-6s}' +
    '@keyframes nnpage{0%{transform:translate(0,0) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(60px,-70px) rotate(40deg);opacity:0}}.nn-page{animation:nnpage 4s ease-out infinite}.nn-page2{animation-delay:-2s}' +
    '@keyframes nnspray2{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.nn-sp{animation:nnspray2 1.4s ease-out infinite}.nn-sp2{animation-delay:.45s}' +
    '@keyframes nnblink{0%,100%{opacity:.25}50%{opacity:1}}.nn-bl{animation:nnblink 1.6s ease-in-out infinite}.nn-bl2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const CTAR = "#c60c30", PINK = "#ff9ec7", GOLD = "#ffd166", TEAL = "#7ad3c8";

  /* 1. 47th (Red Line) in the Dan Ryan median */
  function nnstation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (46 + i * 48) + '" y="98" width="32" height="22" rx="3" fill="#1f2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="26" y="88" width="328" height="64" rx="7" fill="#d4d8dc" stroke="#7a828a" stroke-width="2"/>' + win +
      Array.from({ length: 16 }, (_, i) => '<path d="M' + (34 + i * 20) + ' 126v22" stroke="#b9bfc5" stroke-width="1.5"/>').join("") +
      '<rect x="26" y="122" width="328" height="3" fill="' + CTAR + '"/><rect x="26" y="125" width="328" height="3" fill="#fff"/><rect x="26" y="128" width="328" height="3" fill="#00a1de"/>' +
      '<rect x="334" y="92" width="18" height="56" rx="4" fill="#b3b9bf"/><circle cx="344" cy="144" r="3.5" fill="#fff6c2"/>' +
      '<rect x="276" y="92" width="54" height="12" rx="2" fill="#111"/><text x="303" y="101" text-anchor="middle" ' + font + ' font-size="8" fill="#ff5a6e">HOWARD</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nns1)"/>' +
      '<g fill="#2e2a3e"><rect x="0" y="22" width="60" height="40"/><rect x="66" y="12" width="34" height="50"/><rect x="300" y="18" width="44" height="44"/><rect x="350" y="28" width="50" height="34"/></g>' +
      '<rect x="0" y="56" width="400" height="12" fill="#5d5f66"/><path d="M0 62h400" stroke="#d8d8d8" stroke-width="1.5" stroke-dasharray="14 10"/>' +
      car("nn-carL", 0, 50, "#e0e0e0") + car("nn-carL nn-carL2", 0, 50, "#2a6fc9") +
      '<rect x="0" y="68" width="400" height="8" fill="#b8b4aa"/>' +
      '<rect x="0" y="76" width="400" height="10" fill="#4a4c55"/><path d="M0 80h400" stroke="#ffd166" stroke-width="2" opacity=".6"/>' +
      '<g class="nn-flk"><rect x="90" y="76" width="36" height="3" fill="#fff3c4"/></g><g class="nn-flk nn-flk2"><rect x="270" y="76" width="36" height="3" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="154" width="400" height="7" fill="#f2c200"/><rect x="0" y="161" width="400" height="30" fill="#8e8a82"/>' +
      '<rect x="0" y="191" width="400" height="8" fill="#b8b4aa"/><rect x="0" y="199" width="400" height="61" fill="#4a4c55"/><path d="M0 222h400M0 242h400" stroke="#d8d8d8" stroke-width="1.5" stroke-dasharray="14 10"/>' +
      car("nn-car", 0, 214, "#c0392b") + car("nn-car nn-car2", 0, 236, "#f2f2f2") +
      '<rect x="112" y="164" width="176" height="30" rx="3" fill="#111"/><text x="128" y="185" ' + font + ' font-size="17" fill="#fff">47th</text>' + badge(224, 179, "RED", CTAR) +
      '<text x="200" y="16" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">DAN RYAN · BRONZEVILLE</text>',
      sky("nns1", "#1f2340", "#d97b6a"));
  }

  /* 2. Harold Washington Library (YOUmedia open mic) */
  function nnlibrary() {
    const owl = (x, s) => '<g transform="translate(' + x + ' 30) scale(' + s + ')"><path d="M-14 26q-4 -20 4 -30l4 6q6 -4 12 0l4 -6q8 10 4 30z" fill="#4f8f7a" stroke="#2e5e4e" stroke-width="2"/><circle cx="-5" cy="6" r="4" fill="#2e5e4e"/><circle cx="5" cy="6" r="4" fill="#2e5e4e"/><path d="M-2 11l2 4l2 -4z" fill="#2e5e4e"/><path d="M-10 18q10 6 20 0" stroke="#2e5e4e" stroke-width="1.5" fill="none"/></g>';
    const arches = Array.from({ length: 5 }, (_, i) => '<path d="M' + (78 + i * 52) + ' 160v-44q20 -26 40 0v44z" fill="#2c3e4a" stroke="#d7cdb8" stroke-width="3"/><path d="M' + (98 + i * 52) + ' 160v-50" stroke="#d7cdb8" stroke-width="1.5"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#nns2)"/>' +
      '<g class="nn-bird"><path d="M20 40q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="nn-bird nn-bird2"><path d="M60 60q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<path d="M40 70l18 -20h284l18 20z" fill="#4f8f7a" stroke="#2e5e4e" stroke-width="2"/>' + owl(46, 1) + owl(354, 1) + owl(200, 0.8) +
      '<rect x="44" y="70" width="312" height="112" fill="#a8452f"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M44 ' + (76 + i * 8) + 'h312" stroke="#8f3a27" stroke-width="1"/>').join("") +
      '<rect x="44" y="70" width="312" height="8" fill="#d7cdb8"/>' + arches +
      '<rect x="44" y="160" width="312" height="30" fill="#b9b3a6"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (44 + i * 40) + ' 160v30" stroke="#a29c90" stroke-width="2"/>').join("") +
      '<rect x="168" y="164" width="64" height="26" fill="#1c262e"/><rect x="172" y="168" width="56" height="22" fill="#ffd98a" opacity=".55" class="nn-bl"/>' +
      '<path d="M200 190v-14" stroke="#ccc" stroke-width="2"/><circle cx="200" cy="174" r="3" fill="#ccc"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#8c8a84"/><path d="M0 214h400" stroke="#7a7872" stroke-width="2"/>' +
      '<g class="nn-page"><rect x="150" y="150" width="12" height="15" fill="#fff" stroke="#999"/></g><g class="nn-page nn-page2"><rect x="232" y="152" width="12" height="15" fill="#fff8e0" stroke="#999"/></g>' +
      '<text x="200" y="242" text-anchor="middle" ' + font + ' font-size="10" fill="#1d1d1d">HAROLD WASHINGTON LIBRARY · YOUMEDIA OPEN MIC</text>',
      sky("nns2", "#8fc3ea", "#f4ead6"));
  }

  /* 3. Bronzeville block, summer night */
  function nnblock() {
    const grey = (x, w, h, c) => '<rect x="' + x + '" y="' + (170 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><rect x="' + x + '" y="' + (170 - h) + '" width="' + w + '" height="6" fill="#8d8a80"/>' +
      [0, 1].map(r => '<rect x="' + (x + 10) + '" y="' + (182 - h + r * 36) + '" width="' + (w / 2 - 16) + '" height="22" fill="#ffd98a" opacity=".85"/><rect x="' + (x + w / 2 + 6) + '" y="' + (182 - h + r * 36) + '" width="' + (w / 2 - 16) + '" height="22" fill="#ffd98a" opacity=".6"/>').join("") +
      '<path d="M' + (x + 8) + ' 170v-14h' + (w - 16) + 'v14" fill="#6b675e"/>';
    const lamp = (x, cls) => '<rect x="' + (x - 2) + '" y="96" width="4" height="110" fill="#2a2a2a"/><path d="M' + x + ' 98q12 -6 20 0" stroke="#2a2a2a" stroke-width="3" fill="none"/><g class="' + cls + '"><circle cx="' + (x + 20) + '" cy="101" r="5" fill="#ffe08a"/><path d="M' + (x + 14) + ' 104l-14 100h40l-14 -100z" fill="#ffe08a" opacity=".12"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nns3)"/>' +
      Array.from({ length: 24 }, (_, i) => '<circle cx="' + ((i * 61) % 400) + '" cy="' + ((i * 23) % 50 + 6) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      grey(0, 92, 112, "#b3ad9f") + grey(96, 86, 100, "#a39d90") + grey(186, 96, 116, "#bab4a6") + grey(286, 114, 104, "#a8a294") +
      '<rect x="0" y="170" width="400" height="30" fill="#9a958c"/><path d="M0 200h400" stroke="#c9c4ba" stroke-width="3"/>' +
      '<rect x="0" y="202" width="400" height="58" fill="#3c3d44"/>' +
      lamp(60, "nn-lamp") + lamp(320, "nn-lamp nn-lamp2") +
      '<rect x="146" y="180" width="14" height="22" rx="3" fill="#d8b23a"/><rect x="142" y="178" width="22" height="5" rx="2" fill="#c49e2e"/><rect x="158" y="186" width="8" height="6" fill="#c49e2e"/>' +
      '<g fill="#bfe6ff"><circle class="nn-hyd" cx="168" cy="189" r="6"/><circle class="nn-hyd nn-hyd2" cx="168" cy="189" r="5"/><circle class="nn-hyd nn-hyd3" cx="168" cy="189" r="4.5"/></g><path d="M168 189q20 -16 40 -2" stroke="#bfe6ff" stroke-width="3" fill="none" opacity=".6"/>' +
      '<ellipse cx="200" cy="214" rx="50" ry="6" fill="#6a8fb0" opacity=".5"/>' +
      ''+
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0">HOME BEFORE THE STREETLIGHTS · BRONZEVILLE</text>',
      sky("nns3", "#141a3a", "#7a4a6e"));
  }

  /* 4. 31st Street Beach, the telephone */
  function nnlake() {
    return svg(
      '<rect width="400" height="260" fill="url(#nns4)"/>' +
      '<circle cx="300" cy="118" r="34" fill="#ffcf7a"/><circle cx="300" cy="118" r="44" fill="#ffcf7a" opacity=".25"/>' +
      '<g fill="#5b4a6a" opacity=".75"><rect x="10" y="96" width="14" height="30"/><rect x="28" y="84" width="12" height="42"/><rect x="44" y="102" width="16" height="24"/><rect x="64" y="90" width="10" height="36"/></g>' +
      '<rect x="0" y="126" width="400" height="66" fill="#3e6f9a"/>' +
      '<path d="M260 132h80M270 144h60M284 156h32" stroke="#ffcf7a" stroke-width="3" stroke-linecap="round" opacity=".6"/>' +
      '<g class="nn-rip"><path d="M10 150h60M120 166h80M30 182h90M360 150h40" stroke="#bfe3ff" stroke-width="2" stroke-linecap="round" opacity=".7"/></g>' +
      '<g class="nn-rip nn-rip2"><path d="M80 140h50M200 178h70M330 172h60" stroke="#e6f4ff" stroke-width="2" stroke-linecap="round" opacity=".6"/></g>' +
      '<path d="M0 192q100 -10 200 0t200 0v68H0z" fill="#e8cf9a"/>' +
      '<path d="M120 236l20 -34h150l10 34z" fill="' + PINK + '"/><path d="M128 222h166M134 212h156" stroke="#fff" stroke-width="3" opacity=".7"/>' +
      '<g class="nn-ring"><path d="M180 222l8 -24h64l8 24z" fill="#c8102e" stroke="#7a0a1c" stroke-width="2"/><circle cx="220" cy="212" r="10" fill="#f4e6d0" stroke="#7a0a1c" stroke-width="2"/>' +
      Array.from({ length: 8 }, (_, i) => '<circle cx="' + (220 + 6.5 * Math.cos(i * 0.78)) + '" cy="' + (212 + 6.5 * Math.sin(i * 0.78)) + '" r="1.4" fill="#7a0a1c"/>').join("") +
      '<path d="M184 196q36 -14 72 0l-4 -8q-32 -12 -64 0z" fill="#c8102e" stroke="#7a0a1c" stroke-width="2"/></g>' +
      '<path d="M260 214q30 10 20 24t30 6" stroke="#7a0a1c" stroke-width="2" fill="none"/>' +
      '<g class="nn-rw"><path d="M262 186q8 -8 0 -16M270 190q14 -14 0 -28" stroke="' + GOLD + '" stroke-width="2.5" fill="none"/></g>' +
      '<g class="nn-bird"><path d="M20 50q6 -6 12 0q6 -6 12 0" stroke="#3a2a4a" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="30" text-anchor="middle" ' + font + ' font-size="10" fill="#3a2a4a">31ST STREET BEACH · TELEFONE</text>',
      sky("nns4", "#f4a3b8", "#ffd8a8"));
  }

  /* 5. E 47th St and S King Dr, the Victory Monument behind */
  function nncorner() {
    const mon = '<g><rect x="150" y="128" width="64" height="14" fill="#d9d4c8"/><rect x="160" y="60" width="44" height="70" fill="#e4dfd2"/><rect x="160" y="60" width="10" height="70" fill="#cfc9bb"/>' +
      '<rect x="166" y="84" width="32" height="34" fill="#6f5a3a"/><path d="M170 112l8 -16l6 8l6 -12l4 20z" fill="#8a7248"/><rect x="156" y="54" width="52" height="8" fill="#d4cebf"/>' +
      '<path d="M176 54v-14h12v14z" fill="#3e3a30"/><circle cx="182" cy="34" r="6" fill="#3e3a30"/><path d="M174 30h16l-2 -4h-12z" fill="#3e3a30"/><path d="M188 44l8 -10" stroke="#3e3a30" stroke-width="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nns5)"/>' +
      '<g fill="#2b2f45"><rect x="0" y="96" width="60" height="40"/><rect x="250" y="88" width="50" height="48"/><rect x="306" y="100" width="94" height="36"/></g>' +
      mon +
      '<rect x="0" y="130" width="400" height="94" fill="#7a3f45"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#62313a" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#62313a" stroke-width="1"/>').join("")).join("") +
      tag("NONAME", 16, 194, 50, PINK, -6) + tag("TELEFONE", 120, 218, 18, GOLD, -4) + tag("BOOK CLUB", 18, 216, 15, TEAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(270, 98, 120, "E 47th St") + sign(254, 124, 136, "S King Dr") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="nn-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="nn-sp"><circle cx="232" cy="166" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="nn-sp nn-sp2"><circle cx="238" cy="160" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("nns5", "#2e2a5e", "#f0907a"));
  }

  window.SCENES = { nnstation: nnstation, nnlibrary: nnlibrary, nnblock: nnblock, nnlake: nnlake, nncorner: nncorner };
})();
