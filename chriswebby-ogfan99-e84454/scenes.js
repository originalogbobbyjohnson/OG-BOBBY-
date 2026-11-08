/* chriswebby scenes (Regions tab: Boston + New England; South Norwalk, Norwalk CT). CSS classes and ids prefixed cw- (the page's own anim-train is kept).
   1 South Norwalk on Metro-North's New Haven Line: raised platform under the canopy, a silver M8 train with its red band sliding in.
   2 The Walk Bridge: the 1896 steel swing bridge over the Norwalk River, swung open while a boat slips through.
   3 Lockwood-Mathews Mansion: the grey granite Second Empire mansion with its slate mansard roof in Mathews Park.
   4 Calf Pasture Beach: sand, jetty and Long Island Sound at sunset, Sheffield Island Lighthouse blinking out on the water.
   5 Washington St and Water St in SoNo: green signs, WEBBY tagged on the brick, the red-brick Maritime Aquarium behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cwflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.cw-flk{animation:cwflick 2.2s infinite}.cw-flk2{animation-delay:.7s}' +
    '@keyframes cwboat{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.cw-boat{animation:cwboat 14s linear infinite}' +
    '@keyframes cwsail{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.cw-sail{animation:cwsail 20s linear infinite}.cw-sail2{animation-delay:-9s}' +
    '@keyframes cwgull{from{transform:translate(-40px,0)}to{transform:translate(440px,-30px)}}.cw-gull{animation:cwgull 11s linear infinite}.cw-gull2{animation-delay:-5s}' +
    '@keyframes cwrip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.cw-rip{animation:cwrip 3s ease-in-out infinite}.cw-rip2{animation-delay:-1.5s}' +
    '@keyframes cwleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-60px,150px) rotate(320deg);opacity:0}}.cw-leaf{transform-box:fill-box;animation:cwleaf 5s linear infinite}.cw-leaf2{animation-delay:-1.7s}.cw-leaf3{animation-delay:-3.4s}' +
    '@keyframes cwflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.cw-flag{transform-box:fill-box;transform-origin:0% 50%;animation:cwflag 1.4s ease-in-out infinite}' +
    '@keyframes cwbeam{0%,100%{opacity:0}40%,60%{opacity:.85}}.cw-beam{animation:cwbeam 3s ease-in-out infinite}' +
    '@keyframes cwwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.cw-wave{animation:cwwave 2.6s ease-in-out infinite}.cw-wave2{animation-delay:-1.3s}' +
    '@keyframes cwspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cw-sp{animation:cwspray 1.4s ease-out infinite}.cw-sp2{animation-delay:.45s}' +
    '@keyframes cwcarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.cw-carL{animation:cwcarL 8s linear infinite}' +
    '@keyframes cwfish{0%,100%{transform:translateX(0)}50%{transform:translateX(26px)}}.cw-fish{animation:cwfish 4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const gull = (cls, x, y) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'q6 -6 12 0q6 -6 12 0" stroke="#f4f4f4" stroke-width="2" fill="none"/></g>';
  const NHRED = "#ee0034", GOLD = "#f2c94c", TEAL = "#3fc1c9";

  /* 1. South Norwalk, Metro-North New Haven Line */
  function cwstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 46) + '" y="124" width="32" height="22" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="20" y="114" width="336" height="72" rx="8" fill="#d3d7db" stroke="#6d757c" stroke-width="2"/>' + win +
      Array.from({ length: 16 }, (_, i) => '<path d="M' + (28 + i * 20) + ' 150v32" stroke="#bfc4c9" stroke-width="1"/>').join("") +
      '<rect x="20" y="152" width="336" height="8" fill="' + NHRED + '"/><rect x="20" y="162" width="336" height="2.5" fill="#1b1b1b"/>' +
      '<rect x="336" y="118" width="18" height="62" rx="4" fill="#b2b8be"/><circle cx="346" cy="174" r="3.5" fill="#fff6c2"/>' +
      '<rect x="270" y="118" width="58" height="12" rx="2" fill="#111"/><text x="299" y="127" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">NEW HAVEN</text>' +
      '<path d="M120 114l10 -16h40l10 16" stroke="#333" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cws1)"/>' +
      /* catenary wires over the New Haven Line */
      '<path d="M0 34h400M0 42h400" stroke="#2c2c34" stroke-width="1.5"/>' + [20, 200, 380].map(x => '<rect x="' + (x - 3) + '" y="26" width="6" height="88" fill="#3b3f47"/>').join("") +
      '<g fill="#3d3a46"><rect x="230" y="62" width="48" height="52"/><rect x="282" y="74" width="40" height="40"/><rect x="326" y="58" width="60" height="56"/><rect x="40" y="70" width="56" height="44"/><path d="M40 70l28 -14 28 14z"/></g>' +
      /* platform canopy */
      '<rect x="0" y="50" width="400" height="8" fill="#5c6670"/><rect x="0" y="58" width="400" height="4" fill="#8a96a2"/>' +
      [60, 170, 290].map(x => '<rect x="' + (x - 3) + '" y="62" width="6" height="52" fill="#4a5560"/>').join("") +
      '<g class="cw-flk"><rect x="90" y="63" width="40" height="4" fill="#fff3c4"/></g><g class="cw-flk cw-flk2"><rect x="300" y="63" width="40" height="4" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="188" width="400" height="8" fill="#f2c200"/><rect x="0" y="196" width="400" height="64" fill="#9b968d"/><path d="M0 228h400" stroke="#8a857c" stroke-width="2"/>' +
      '<rect x="78" y="204" width="244" height="36" rx="3" fill="#0b2a5b"/><text x="94" y="228" ' + font + ' font-size="18" fill="#fff">South Norwalk</text>' + badge(254, 222, "NH", NHRED) +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#2a2a2a">NEW HAVEN LINE · DANBURY BRANCH</text>',
      sky("cws1", "#1f2b4a", "#e08a5a"));
  }

  /* 2. The Walk Bridge, swung open over the Norwalk River */
  function cwbridge() {
    let truss = "";
    for (let i = 0; i < 8; i++) truss += '<path d="M' + (i * 20) + ' 0l10 -26l10 26" stroke="#5f6b74" stroke-width="3" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cws2)"/>' +
      gull("cw-gull", 0, 50) + gull("cw-gull cw-gull2", 0, 74) +
      '<g fill="#5a4f60"><rect x="0" y="104" width="50" height="36"/><rect x="54" y="92" width="34" height="48"/><rect x="318" y="96" width="40" height="44"/><rect x="362" y="108" width="38" height="32"/><path d="M54 92l17 -12 17 12z"/></g>' +
      '<rect x="0" y="140" width="400" height="120" fill="#2f5f78"/>' +
      '<g class="cw-rip"><path d="M10 170h50M120 190h60M260 176h70M40 214h80M300 226h60" stroke="#6fa3bd" stroke-width="2"/></g>' +
      '<g class="cw-rip cw-rip2"><path d="M80 160h40M210 204h50M330 196h40M150 236h70" stroke="#5a8fa9" stroke-width="2"/></g>' +
      /* fixed approach spans on each bank */
      '<rect x="0" y="122" width="96" height="10" fill="#4f5a62"/><rect x="304" y="122" width="96" height="10" fill="#4f5a62"/>' +
      '<rect x="80" y="132" width="14" height="40" fill="#8f877b"/><rect x="306" y="132" width="14" height="40" fill="#8f877b"/>' +
      /* center pivot pier and the swung span (seen end-on/angled) */
      '<rect x="178" y="150" width="44" height="40" fill="#9b9286"/><rect x="172" y="146" width="56" height="6" fill="#7d756a"/>' +
      '<g transform="translate(120 140) skewY(-6)"><rect x="0" y="0" width="160" height="8" fill="#4a565e"/><g transform="translate(0 0)">' + truss + '</g><path d="M0 -26h160" stroke="#5f6b74" stroke-width="3"/></g>' +
      '<rect x="190" y="104" width="20" height="14" fill="#c9bfa9" stroke="#5f6b74" stroke-width="1.5"/>' +
      /* a boat slipping through */
      '<g class="cw-boat"><path d="M0 206h70l-10 14h-52z" fill="#f4f1e8" stroke="#333" stroke-width="1.5"/><rect x="18" y="192" width="30" height="14" fill="#f4f1e8" stroke="#333" stroke-width="1.5"/><rect x="22" y="196" width="8" height="5" fill="#9fd4ff"/><rect x="34" y="196" width="8" height="5" fill="#9fd4ff"/><path d="M32 192v-14" stroke="#333" stroke-width="1.5"/><path d="M32 178l12 4l-12 4z" fill="' + NHRED + '"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#d8ecf5">WALK BRIDGE · NORWALK RIVER</text>',
      sky("cws2", "#3a5f8f", "#f2c38a"));
  }

  /* 3. Lockwood-Mathews Mansion */
  function cwmansion() {
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="12" height="20" rx="5" fill="#2b3340" stroke="#d6d2c8" stroke-width="2"/>';
    const dormer = x => '<rect x="' + x + '" y="72" width="12" height="14" rx="5" fill="#2b3340" stroke="#a8a49a" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cws3)"/>' +
      '<circle cx="62" cy="54" r="20" fill="#fff1c9" opacity=".8"/>' +
      /* trees */
      '<g fill="#3f6b3a"><circle cx="20" cy="150" r="34"/><circle cx="380" cy="146" r="36"/><circle cx="352" cy="162" r="26"/><circle cx="46" cy="166" r="24"/></g>' +
      '<g fill="#5a8a3e"><circle cx="14" cy="130" r="16"/><circle cx="376" cy="124" r="16"/></g>' +
      /* main block: grey granite with slate mansard */
      '<rect x="96" y="90" width="208" height="110" fill="#a9a59c"/>' +
      '<path d="M90 90l12 -26h196l12 26z" fill="#4c5560"/><path d="M90 90h220" stroke="#d6d2c8" stroke-width="3"/>' +
      [110, 134, 248, 272].map(dormer).join("") +
      /* central tower */
      '<rect x="172" y="60" width="56" height="140" fill="#b2aea5"/><path d="M166 60l10 -26h48l10 26z" fill="#434b55"/><path d="M166 60h68" stroke="#d6d2c8" stroke-width="3"/>' +
      '<rect x="188" y="40" width="24" height="12" rx="5" fill="#2b3340" stroke="#a8a49a" stroke-width="1.5"/>' +
      '<path d="M200 34v-14" stroke="#333" stroke-width="1.5"/><g class="cw-flag"><rect x="200" y="20" width="16" height="10" fill="#2a5aa8"/></g>' +
      [108, 132, 256, 280].map(x => win(x, 104) + win(x, 150)).join("") + win(186, 74) + win(202, 74) + win(186, 112) + win(202, 112) +
      /* porch + door */
      '<rect x="168" y="164" width="64" height="36" fill="#9a968d"/><path d="M164 164h72" stroke="#d6d2c8" stroke-width="4"/>' +
      [172, 190, 210, 228].map(x => '<rect x="' + (x - 2) + '" y="166" width="4" height="34" fill="#e2ded4"/>').join("") +
      '<rect x="190" y="174" width="20" height="26" rx="8" fill="#5a3a24"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#5d8a45"/><path d="M180 200l-30 60h100l-30 -60z" fill="#cbbf9e"/>' +
      '<g class="cw-leaf"><path d="M330 110q6 -6 10 0q-4 6 -10 0z" fill="#d38b2c"/></g><g class="cw-leaf cw-leaf2"><path d="M370 100q6 -6 10 0q-4 6 -10 0z" fill="#c4572a"/></g><g class="cw-leaf cw-leaf3"><path d="M40 112q6 -6 10 0q-4 6 -10 0z" fill="#e0a43a"/></g>' +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="11" fill="#f3f0e4">LOCKWOOD-MATHEWS MANSION</text>',
      sky("cws3", "#7aa7d6", "#e8eef2"));
  }

  /* 4. Calf Pasture Beach, Sheffield Island Lighthouse out on the Sound */
  function cwbeach() {
    return svg(
      '<rect width="400" height="260" fill="url(#cws4)"/>' +
      '<circle cx="300" cy="118" r="26" fill="#ffcf6b" opacity=".95"/>' +
      gull("cw-gull", 0, 46) +
      '<rect x="0" y="120" width="400" height="80" fill="#2d5d82"/>' +
      '<path d="M270 128h60M262 140h76M276 152h48" stroke="#f4b860" stroke-width="2" opacity=".7"/>' +
      /* Sheffield Island + its stone lighthouse house */
      '<path d="M40 122q40 -12 90 0z" fill="#4e5b3a"/>' +
      '<rect x="70" y="98" width="30" height="20" fill="#8c867a"/><path d="M66 98l19 -10 19 10z" fill="#4c4f55"/>' +
      '<rect x="80" y="76" width="10" height="22" fill="#9a9488"/><rect x="78" y="70" width="14" height="8" fill="#2b2f36"/><circle cx="85" cy="74" r="3" fill="#fff4b0"/>' +
      '<g class="cw-beam"><path d="M85 74l-60 -14v28z" fill="#fff4b0" opacity=".6"/><path d="M85 74l60 -14v28z" fill="#fff4b0" opacity=".6"/></g>' +
      '<g class="cw-sail"><path d="M0 150h46l-6 8h-34z" fill="#f4f1e8"/><path d="M22 150v-34l20 32z" fill="#fff"/><path d="M20 150v-26l-14 24z" fill="#e8505b"/></g>' +
      '<g class="cw-sail cw-sail2"><path d="M0 172h36l-5 7h-26z" fill="#f4f1e8"/><path d="M18 172v-26l16 24z" fill="#fff"/></g>' +
      '<g class="cw-wave"><path d="M0 196q20 -8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#e9f5ff" stroke-width="3" fill="none"/></g>' +
      '<rect x="0" y="198" width="400" height="62" fill="#e3cf9c"/><path d="M0 198q100 8 200 0t200 0v6H0z" fill="#d4bd85"/>' +
      /* stone jetty */
      '<g fill="#7d7a73"><circle cx="330" cy="196" r="9"/><circle cx="346" cy="190" r="8"/><circle cx="360" cy="184" r="7"/><circle cx="372" cy="178" r="6"/><circle cx="314" cy="200" r="9"/></g>' +
      /* lifeguard chair + umbrella */
      '<path d="M120 252l10 -40M150 252l-10 -40M124 232h22" stroke="#f4f1e8" stroke-width="4"/><rect x="122" y="204" width="26" height="10" fill="#e8505b"/>' +
      '<path d="M236 252v-40" stroke="#555" stroke-width="2"/><path d="M212 214q24 -22 48 0z" fill="' + TEAL + '"/><path d="M228 214q8 -22 16 0z" fill="#fff"/>' +
      '<text x="320" y="240" text-anchor="middle" ' + font + ' font-size="11" fill="#6b5428">CALF PASTURE BEACH</text>',
      sky("cws4", "#3b3f7a", "#f39a6a"));
  }

  /* 5. Washington St and Water St, SoNo; the Maritime Aquarium behind */
  function cwcorner() {
    const arch = (x, y) => '<path d="M' + x + ' ' + (y + 22) + 'v-14a7 7 0 0 1 14 0v14z" fill="#1f2d3a" stroke="#e7d7b8" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cws5)"/>' +
      /* the aquarium: long red-brick factory building with arched windows + glass entry */
      '<rect x="40" y="56" width="320" height="70" fill="#9c3f2a"/><path d="M36 56h328" stroke="#6b2a1c" stroke-width="5"/>' +
      Array.from({ length: 12 }, (_, i) => arch(54 + i * 25, 66) + arch(54 + i * 25, 96)).join("") +
      '<rect x="176" y="40" width="48" height="18" fill="#7d3222"/><rect x="250" y="20" width="12" height="38" fill="#7d3222"/>' +
      '<rect x="150" y="92" width="64" height="34" fill="#7ec8d8"/><path d="M166 92v34M182 92v34M198 92v34M150 108h64" stroke="#2c5f6c" stroke-width="1.5"/>' +
      '<g class="cw-fish"><path d="M156 100q6 -5 12 0q-6 5 -12 0zM168 100l4 -3v6z" fill="#f2a33a"/></g>' +
      '<text x="200" y="52" text-anchor="middle" ' + font + ' font-size="8" fill="#f3e2c0">AQUARIUM</text>' +
      /* street-level brick wall with the tag */
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("WEBBY", 22, 192, 58, TEAL, -6) + tag("BARS ON ME", 142, 218, 18, GOLD, -4) + tag("HOMEGROWN", 24, 216, 15, "#ff7a6b", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="cw-carL"><rect x="0" y="236" width="58" height="14" rx="5" fill="#2a5aa8"/><rect x="12" y="228" width="32" height="10" rx="3" fill="#2a5aa8"/><circle cx="13" cy="250" r="5" fill="#111"/><circle cx="45" cy="250" r="5" fill="#111"/></g>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(232, 98, 150, "Washington St") + sign(262, 124, 104, "Water St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="cw-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="cw-sp"><circle cx="200" cy="168" r="3" fill="' + TEAL + '" opacity=".7"/></g><g class="cw-sp cw-sp2"><circle cx="206" cy="162" r="2" fill="' + TEAL + '" opacity=".6"/></g>',
      sky("cws5", "#232d5c", "#e98f66"));
  }

  window.SCENES = { cwstation: cwstation, cwbridge: cwbridge, cwmansion: cwmansion, cwbeach: cwbeach, cwcorner: cwcorner };
})();
