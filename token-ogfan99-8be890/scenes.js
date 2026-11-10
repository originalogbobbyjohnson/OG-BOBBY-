/* token scenes (Regions tab: Boston + New England; Salem / Marblehead, MA). CSS classes and ids prefixed tk- (the page's own anim-train is kept).
   1 Salem on the MBTA Commuter Rail (Newburyport/Rockport Line): the platform in the cut by the garage, a silver bilevel coach with its purple band behind a locomotive sliding in.
   2 The Witch House on Essex St: the near-black 1600s wooden house with steep peaked gables, diamond-pane windows, big center chimney, autumn leaves falling.
   3 Derby Wharf: the three-masted tall ship Friendship of Salem (black hull, yellow band) and the little square white Derby Wharf Light, water rippling, gulls.
   4 Marblehead Harbor (where he was raised): Abbot Hall's red-brick clock tower with its white spire over the water, sailboats gliding.
   5 Essex St and Washington St in Salem: green signs, TOKEN tagged on the brick, Salem's red-brick Old Town Hall on Derby Square behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tkflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.tk-flk{animation:tkflick 2.2s infinite}' +
    '@keyframes tkleaf{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(-40px,260px) rotate(300deg)}}.tk-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:tkleaf 6s linear infinite}.tk-l2{animation-delay:-2s}.tk-l3{animation-delay:-4s}.tk-l4{animation-delay:-1s;animation-duration:7.5s}' +
    '@keyframes tkrip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.tk-rip{animation:tkrip 3s ease-in-out infinite}.tk-rip2{animation-delay:-1.5s}' +
    '@keyframes tkbob{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(2px) rotate(.6deg)}}.tk-bob{transform-box:fill-box;transform-origin:50% 100%;animation:tkbob 3.4s ease-in-out infinite}' +
    '@keyframes tkgull{from{transform:translate(-40px,0)}to{transform:translate(440px,-30px)}}.tk-gull{animation:tkgull 11s linear infinite}.tk-gull2{animation-delay:-5s}' +
    '@keyframes tksail{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.tk-sail{animation:tksail 20s linear infinite}.tk-sail2{animation-delay:-10s;animation-duration:26s}' +
    '@keyframes tkbeam{0%,100%{opacity:.15}50%{opacity:1}}.tk-beam{animation:tkbeam 2s ease-in-out infinite}' +
    '@keyframes tksmoke{0%{transform:translate(0,0);opacity:.6}100%{transform:translate(14px,-30px);opacity:0}}.tk-smk{animation:tksmoke 3s ease-out infinite}.tk-smk2{animation-delay:-1.5s}' +
    '@keyframes tkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tk-sp{animation:tkspray 1.4s ease-out infinite}.tk-sp2{animation-delay:.45s}' +
    '@keyframes tkflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.tk-flag{transform-box:fill-box;transform-origin:0% 50%;animation:tkflag 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 7 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 7 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const gull = (cls, x, y) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'q6 -6 12 0q6 -6 12 0" stroke="#f4f4f4" stroke-width="2" fill="none"/></g>';
  const PURPLE = "#80276c", PINK = "#ff6fb5", GOLD = "#f2c94c";

  /* 1. Salem, MBTA Commuter Rail */
  function tkstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (98 + i * 40) + '" y="112" width="28" height="14" rx="2" fill="#1e2a33"/><rect x="' + (98 + i * 40) + '" y="136" width="28" height="14" rx="2" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train">' +
      '<rect x="20" y="118" width="74" height="70" rx="6" fill="#4b4f57" stroke="#2a2d33" stroke-width="2"/><rect x="26" y="124" width="28" height="18" rx="2" fill="#bfe3ff"/>' +
      '<rect x="20" y="158" width="74" height="10" fill="' + PURPLE + '"/><rect x="20" y="168" width="74" height="4" fill="' + GOLD + '"/><circle cx="34" cy="180" r="3.5" fill="#fff6c2"/>' +
      '<rect x="94" y="104" width="270" height="84" rx="6" fill="#cfd4d8" stroke="#6d757c" stroke-width="2"/>' + win +
      '<rect x="94" y="160" width="270" height="8" fill="' + PURPLE + '"/><rect x="94" y="172" width="270" height="2" fill="' + PURPLE + '"/>' +
      '<rect x="210" y="128" width="16" height="44" fill="#9aa1a8"/>' +
      '<rect x="30" y="146" width="56" height="10" rx="2" fill="#111"/><text x="58" y="154" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">ROCKPORT</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tks1)"/>' +
      '<rect x="0" y="0" width="400" height="60" fill="#5a5f66"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (10 + i * 50) + '" y="16" width="34" height="22" fill="#3b3f45"/>').join("") +
      '<rect x="0" y="60" width="400" height="10" fill="#8a8f96"/>' +
      '<rect x="0" y="70" width="400" height="120" fill="#a9a196"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (78 + i * 12) + 'h400" stroke="#968e83" stroke-width="1"/>').join("") +
      '<rect x="0" y="188" width="400" height="10" fill="#3a3a3a"/><path d="M0 192h400" stroke="#9a9a9a" stroke-width="2"/>' +
      train +
      '<rect x="0" y="198" width="400" height="62" fill="#b8b4ac"/><rect x="0" y="198" width="400" height="6" fill="#f2d33b"/>' +
      '<rect x="60" y="76" width="4" height="30" fill="#222"/><rect x="296" y="76" width="4" height="30" fill="#222"/>' +
      '<rect x="30" y="80" width="300" height="32" rx="3" fill="#111" stroke="#444" stroke-width="2"/><text x="44" y="103" ' + font + ' font-size="20" fill="#fff">Salem</text>' +
      badge(116, 96, "Newburyport/Rockport", PURPLE) +
      '<rect x="320" y="206" width="6" height="40" fill="#2f2f2f"/><circle class="tk-flk" cx="323" cy="204" r="6" fill="#ffe9a8"/>' +
      '<text x="200" y="236" text-anchor="middle" ' + font + ' font-size="11" fill="#333">COMMUTER RAIL · SALEM, MASS.</text>',
      sky("tks1", "#7f8790", "#c9c2b6"));
  }

  /* 2. The Witch House, Essex St */
  function tkwitch() {
    const pane = (x, y, w, h) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#e9c46a" stroke="#3a3226" stroke-width="2"/>' +
      '<path d="M' + x + ' ' + y + 'l' + w + ' ' + h + 'M' + (x + w) + ' ' + y + 'l' + (-w) + ' ' + h + 'M' + (x + w / 2) + ' ' + y + 'l' + (w / 2) + ' ' + (h / 2) + 'l' + (-w / 2) + ' ' + (h / 2) + 'l' + (-w / 2) + ' ' + (-h / 2) + 'z" stroke="#7a5a2a" stroke-width="1" fill="none"/>';
    const leaf = (cls, x, y, c) => '<g class="tk-leaf ' + cls + '"><path d="M' + x + ' ' + y + 'q6 -8 12 0q-6 8 -12 0z" fill="' + c + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tks2)"/>' +
      '<circle cx="330" cy="50" r="22" fill="#fbe6b0" opacity=".9"/>' +
      '<g fill="#2a1d1a"><rect x="60" y="110" width="280" height="100"/>' +
      '<path d="M60 112L110 44L160 112z"/><path d="M150 112L200 36L250 112z"/><path d="M240 112L290 44L340 112z"/>' +
      '<rect x="186" y="18" width="28" height="44"/></g>' +
      '<rect x="182" y="14" width="36" height="8" fill="#3a2a24"/>' +
      '<g class="tk-smk"><circle cx="200" cy="10" r="6" fill="#d8d0c4"/></g><g class="tk-smk tk-smk2"><circle cx="204" cy="8" r="5" fill="#d8d0c4"/></g>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M60 ' + (118 + i * 8) + 'h280" stroke="#3b2a24" stroke-width="1"/>').join("") +
      '<rect x="56" y="110" width="288" height="6" fill="#3b2a24"/>' +
      pane(92, 80, 34, 22) + pane(184, 72, 32, 22) + pane(274, 80, 34, 22) +
      pane(80, 128, 40, 28) + pane(150, 128, 40, 28) + pane(280, 128, 40, 28) +
      '<rect x="214" y="150" width="34" height="60" fill="#4a2f22" stroke="#1a110d" stroke-width="2"/><circle cx="242" cy="182" r="2" fill="' + GOLD + '"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#5d5650"/><rect x="0" y="208" width="400" height="4" fill="#8a8178"/>' +
      '<rect x="20" y="150" width="8" height="60" fill="#3b2a1e"/><circle cx="24" cy="138" r="26" fill="#c75b2a"/><circle cx="40" cy="150" r="18" fill="#e08a2c"/>' +
      '<rect x="370" y="150" width="8" height="60" fill="#3b2a1e"/><circle cx="374" cy="140" r="24" fill="#d9a12c"/>' +
      leaf("", 60, 40, "#e08a2c") + leaf("tk-l2", 160, 30, "#c75b2a") + leaf("tk-l3", 260, 20, "#d9a12c") + leaf("tk-l4", 350, 40, "#b5442a") +
      '<text x="200" y="240" text-anchor="middle" ' + font + ' font-size="11" fill="#f3e9d8">THE WITCH HOUSE · ESSEX ST · SALEM</text>',
      sky("tks2", "#2c2a4a", "#e9a066"));
  }

  /* 3. Derby Wharf: Friendship of Salem + Derby Wharf Light */
  function tkderby() {
    const mast = (x, h) => '<rect x="' + (x - 1.5) + '" y="' + (150 - h) + '" width="3" height="' + h + '" fill="#4a3322"/>' +
      [0.2, 0.45, 0.7].map(f => '<rect x="' + (x - 22 + f * 8) + '" y="' + (150 - h + f * h - 6) + '" width="' + (44 - f * 16) + '" height="' + (h * 0.2) + '" rx="2" fill="#f3ead6" stroke="#b9ad92" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#tks3)"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#2f5d7c"/>' +
      '<g class="tk-rip"><path d="M0 172q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#7fb2d1" stroke-width="2" fill="none"/></g>' +
      '<g class="tk-rip tk-rip2"><path d="M0 200q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#7fb2d1" stroke-width="2" fill="none"/></g>' +
      '<rect x="250" y="142" width="150" height="16" fill="#8f8a80"/><rect x="250" y="156" width="150" height="6" fill="#6e6a62"/>' +
      '<rect x="330" y="106" width="22" height="38" fill="#f4f4f0" stroke="#bdbdb5" stroke-width="1.5"/><rect x="333" y="96" width="16" height="12" fill="#2a2a2a"/>' +
      '<rect class="tk-beam" x="335" y="98" width="12" height="8" fill="#ffe27a"/><path d="M330 96h22l-11 -8z" fill="#2a2a2a"/>' +
      '<g class="tk-bob">' + mast(80, 104) + mast(130, 118) + mast(178, 96) +
      '<path d="M40 64L200 150" stroke="#4a3322" stroke-width="1"/><path d="M130 32L40 150M130 32L220 150" stroke="#6b5640" stroke-width=".8"/>' +
      '<path d="M30 150h196l-14 30H48z" fill="#141414"/><rect x="34" y="154" width="188" height="6" fill="' + GOLD + '"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (52 + i * 20) + '" y="155" width="8" height="4" fill="#141414"/>').join("") +
      '<path d="M226 150l24 -8" stroke="#4a3322" stroke-width="3"/>' +
      '<g class="tk-flag"><rect x="130" y="24" width="16" height="10" fill="#c0392b"/><rect x="130" y="24" width="7" height="5" fill="#1f3a7a"/></g></g>' +
      gull("tk-gull", 0, 50) + gull("tk-gull tk-gull2", 0, 80) +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#e8f2f8">DERBY WHARF · SALEM HARBOR</text>',
      sky("tks3", "#9ccbe8", "#f3e6cf"));
  }

  /* 4. Marblehead Harbor, Abbot Hall */
  function tkabbot() {
    const sail = (cls, x, y, c) => '<g class="tk-sail ' + cls + '"><path d="M' + x + ' ' + y + 'h34l-6 8h-24z" fill="#f4f1e8"/><path d="M' + (x + 16) + ' ' + (y - 34) + 'v34h-14z" fill="' + c + '"/><path d="M' + (x + 18) + ' ' + (y - 30) + 'v30h12z" fill="#fff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tks4)"/>' +
      '<path d="M0 150q60 -14 120 -6t140 -4t140 6v20H0z" fill="#5e7a4a"/>' +
      '<g fill="#e8e0d0"><rect x="40" y="128" width="26" height="20"/><path d="M38 128l15 -10 15 10z" fill="#5b5f6b"/><rect x="290" y="130" width="30" height="18"/><path d="M288 130l17 -10 17 10z" fill="#7a4a3a"/><rect x="330" y="134" width="24" height="14" fill="#f1d8a0"/></g>' +
      '<rect x="120" y="110" width="110" height="40" fill="#9b3d2c" stroke="#6e2a1e" stroke-width="2"/><path d="M116 110l59 -18 59 18z" fill="#5b5f6b"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (132 + i * 24) + '" y="118" width="12" height="20" rx="6" fill="#f3ead6"/>').join("") +
      '<rect x="160" y="40" width="30" height="72" fill="#a8442f" stroke="#6e2a1e" stroke-width="2"/>' +
      '<circle cx="175" cy="62" r="10" fill="#f8f4e8" stroke="#2a2a2a" stroke-width="1.5"/><path d="M175 62v-7M175 62l5 2" stroke="#2a2a2a" stroke-width="1.5"/>' +
      '<rect x="157" y="36" width="36" height="6" fill="#f3ead6"/><rect x="163" y="22" width="24" height="14" fill="#f3ead6"/><rect x="167" y="26" width="5" height="8" fill="#6e2a1e"/><rect x="178" y="26" width="5" height="8" fill="#6e2a1e"/>' +
      '<path d="M163 22l12 -20 12 20z" fill="#f3ead6"/><rect x="174" y="0" width="2" height="4" fill="' + GOLD + '"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#3a6f93"/>' +
      '<g class="tk-rip"><path d="M0 176q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#9cc9e4" stroke-width="2" fill="none"/></g>' +
      '<g class="tk-rip tk-rip2"><path d="M0 214q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#9cc9e4" stroke-width="2" fill="none"/></g>' +
      sail("", 0, 196, PINK) + sail("tk-sail2", 0, 232, "#1f3a7a") +
      gull("tk-gull", 0, 70) +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#eef6fb">ABBOT HALL · MARBLEHEAD HARBOR</text>',
      sky("tks4", "#8fc3e6", "#f6efe2"));
  }

  /* 5. Essex St and Washington St, Salem; Old Town Hall behind */
  function tkcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#tks5)"/>' +
      '<rect x="110" y="40" width="180" height="96" fill="#a8442f" stroke="#6e2a1e" stroke-width="2"/><path d="M104 40h192l-8 -10H112z" fill="#e8e0d0"/>' +
      '<path d="M170 30l30 -16 30 16z" fill="#e8e0d0"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (124 + i * 34) + '" y="54" width="16" height="30" rx="8" fill="#f6dfa3" opacity=".9"/><rect x="' + (124 + i * 34) + '" y="94" width="16" height="30" rx="8" fill="#f6dfa3" opacity=".9"/>').join("") +
      '<g fill="#2b2f45"><rect x="0" y="80" width="90" height="56"/><rect x="310" y="70" width="90" height="66"/></g>' +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("TOKEN", 26, 194, 58, PINK, -6) + tag("NTD", 210, 214, 22, GOLD, -4) + tag("BDG", 40, 216, 18, "#9fd3ff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#7d6a5a"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="230" width="38" height="12" fill="#8a7564" stroke="#6b5848" stroke-width="1"/>').join("") +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 130, "Essex St") + sign(240, 124, 150, "Washington St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="tk-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="tk-sp"><circle cx="196" cy="172" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="tk-sp tk-sp2"><circle cx="202" cy="166" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("tks5", "#2e3566", "#f0a070"));
  }

  window.SCENES = { tkstation: tkstation, tkwitch: tkwitch, tkderby: tkderby, tkabbot: tkabbot, tkcorner: tkcorner };
})();
