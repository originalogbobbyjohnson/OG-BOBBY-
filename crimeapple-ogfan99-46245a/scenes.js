/* crimeapple scenes (NYC map, New Jersey: Hackensack, Bergen County). CSS classes and ids prefixed ca- (the page's own anim-train is kept).
   1 Essex Street on NJ Transit's Pascack Valley Line, Hackensack: open-air platform at the Essex St grade crossing, gates down and red lights flashing, a silver NJT train with its orange, purple and blue stripes sliding in at night.
   2 Plaza Botero, Medellin ("In Medellin for a month"; he cut Medallo there with DJ Muggs): the black-and-white checkered Palacio de la Cultura behind, round bronze sculptures on the plaza, pigeons flying.
   3 Mount Fuji, Japan (HANZAI, "Got off the plane in Tokyo", "Tokyo to Paris"): snow cap over blue slopes, a white bullet train with a blue stripe gliding past, cherry petals falling, a jet overhead (14-hour flight).
   4 The Hackensack River at the Court Street Bridge: the old steel truss swing bridge, downtown Hackensack behind, a kayak gliding under.
   5 Essex St and Prospect Ave in Hackensack: green signs, CRIME tagged on the brick, the Manhattan skyline across the Meadowlands behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes caflash{0%,49%{opacity:1}50%,100%{opacity:.15}}.ca-fl{animation:caflash 1s steps(1) infinite}.ca-fl2{animation-delay:-.5s}' +
    '@keyframes caflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.ca-flk{animation:caflick 2.4s infinite}' +
    '@keyframes cabird{from{transform:translate(-40px,0)}to{transform:translate(440px,-40px)}}.ca-bird{animation:cabird 9s linear infinite}.ca-bird2{animation-delay:-4.5s}' +
    '@keyframes cawing{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.ca-wing{transform-box:fill-box;transform-origin:50% 100%;animation:cawing .5s ease-in-out infinite}' +
    '@keyframes cabullet{from{transform:translateX(460px)}to{transform:translateX(-520px)}}.ca-bul{animation:cabullet 6s linear infinite}' +
    '@keyframes capetal{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(-40px,240px) rotate(300deg)}}.ca-pt{transform-box:fill-box;animation:capetal 5s linear infinite}.ca-pt2{animation-delay:-1.7s}.ca-pt3{animation-delay:-3.3s}' +
    '@keyframes cajet{from{transform:translate(-80px,20px)}to{transform:translate(480px,-30px)}}.ca-jet{animation:cajet 12s linear infinite}' +
    '@keyframes cakayak{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.ca-kay{animation:cakayak 14s linear infinite}' +
    '@keyframes carip{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.ca-rip{animation:carip 3s ease-in-out infinite}.ca-rip2{animation-delay:-1.5s}' +
    '@keyframes cacar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.ca-car{animation:cacar 7s linear infinite}' +
    '@keyframes caspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ca-sp{animation:caspray 1.4s ease-out infinite}.ca-sp2{animation-delay:.45s}' +
    '@keyframes catw{0%,100%{opacity:.3}50%{opacity:1}}.ca-tw{animation:catw 2s ease-in-out infinite}.ca-tw2{animation-delay:-1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GOLD = "#ffcd00", RED = "#e03a3e", BLUE = "#2b6cd4";

  /* 1. Essex Street, Pascack Valley Line */
  function castation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (30 + i * 46) + '" y="120" width="30" height="22" rx="3" fill="#ffe9a8" opacity=".85"/>').join("");
    const train = '<g class="anim-train"><rect x="10" y="108" width="310" height="62" rx="8" fill="#d4d8de" stroke="#6b7280" stroke-width="2"/>' + win +
      '<rect x="10" y="150" width="310" height="5" fill="#f58025"/><rect x="10" y="155" width="310" height="5" fill="#8e258d"/><rect x="10" y="160" width="310" height="5" fill="#0039a6"/>' +
      '<rect x="296" y="114" width="20" height="50" rx="3" fill="#aeb4ba"/><circle cx="312" cy="160" r="4" fill="#fff6c2"/></g>';
    const xing = (x) => '<rect x="' + (x - 2) + '" y="96" width="5" height="100" fill="#ddd"/>' +
      '<path d="M' + (x - 14) + ' 104l28 14M' + (x + 14) + ' 104l-28 14" stroke="#fff" stroke-width="5"/><path d="M' + (x - 14) + ' 104l28 14M' + (x + 14) + ' 104l-28 14" stroke="#111" stroke-width="1" fill="none"/>' +
      '<rect x="' + (x - 18) + '" y="124" width="36" height="12" rx="2" fill="#222"/>' +
      '<circle class="ca-fl" cx="' + (x - 10) + '" cy="130" r="5" fill="#ff3b30"/><circle class="ca-fl ca-fl2" cx="' + (x + 10) + '" cy="130" r="5" fill="#ff3b30"/>' +
      '<rect x="' + (x - 120) + '" y="176" width="120" height="5" fill="#fff"/>' + [0, 1, 2, 3, 4].map(i => '<rect x="' + (x - 112 + i * 24) + '" y="176" width="12" height="5" fill="' + RED + '"/>').join("");
    const stars = [[30, 20], [90, 36], [150, 14], [220, 30], [300, 18], [370, 40]].map((p, i) => '<circle class="ca-tw' + (i % 2 ? ' ca-tw2' : '') + '" cx="' + p[0] + '" cy="' + p[1] + '" r="1.6" fill="#fff"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cas1)"/>' + stars +
      '<g fill="#1f2340"><rect x="0" y="66" width="50" height="40"/><path d="M0 66l25-14 25 14z"/><rect x="60" y="74" width="40" height="32"/><rect x="250" y="60" width="44" height="46"/><path d="M250 60l22-14 22 14z"/><rect x="300" y="70" width="60" height="36"/><rect x="364" y="78" width="36" height="28"/></g>' +
      '<g fill="#25402f"><circle cx="120" cy="96" r="20"/><circle cx="150" cy="90" r="18"/><circle cx="200" cy="98" r="20"/><circle cx="230" cy="92" r="16"/></g>' +
      train +
      '<rect x="0" y="170" width="400" height="6" fill="#4a4a50"/><rect x="0" y="181" width="400" height="20" fill="#3a3a40"/>' + xing(360) +
      '<rect x="0" y="200" width="400" height="8" fill="#eab308"/><rect x="0" y="208" width="400" height="52" fill="#8e897f"/>' +
      '<rect x="46" y="196" width="4" height="12" fill="#555"/><rect x="226" y="196" width="4" height="12" fill="#555"/>' +
      '<rect x="20" y="214" width="236" height="34" rx="3" fill="#111"/><text x="34" y="237" ' + font + ' font-size="17" fill="#fff">Essex Street</text>' + badge(156, 231, "NJT", "#0039a6") +
      '<text x="210" y="228" ' + font + ' font-size="6.5" fill="#fff">PASCACK</text><text x="210" y="238" ' + font + ' font-size="6.5" fill="#fff">VALLEY</text>' +
      '<g class="ca-flk"><rect x="270" y="212" width="4" height="40" fill="#555"/><circle cx="272" cy="210" r="7" fill="#ffe9a8"/></g>',
      sky("cas1", "#0d1130", "#3b3566"));
  }

  /* 2. Plaza Botero, Medellin */
  function cabotero() {
    let checks = "";
    for (let r = 0; r < 8; r++) for (let c = 0; c < 22; c++) if ((r + c) % 2 === 0) checks += '<rect x="' + (90 + c * 10) + '" y="' + (70 + r * 10) + '" width="10" height="10" fill="#1b1b1b"/>';
    const pal = '<rect x="90" y="70" width="220" height="80" fill="#f2efe6"/>' + checks +
      '<path d="M90 70l14-18h192l14 18z" fill="#f2efe6"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (106 + i * 19) + '" y="52" width="9" height="18" fill="' + (i % 2 ? '#1b1b1b' : '#f2efe6') + '"/>').join("") +
      '<rect x="180" y="20" width="40" height="34" fill="#f2efe6"/>' + [0, 1, 2, 3].map(i => '<rect x="' + (180 + i * 10) + '" y="' + (i % 2 ? 30 : 20) + '" width="10" height="10" fill="#1b1b1b"/>').join("") +
      '<path d="M176 22q24-30 48 0z" fill="#1b1b1b"/><path d="M200 -6v10" stroke="#1b1b1b" stroke-width="3"/>' +
      [100, 140, 236, 276].map(x => '<path d="M' + x + ' 52l4-16 4 16z" fill="#1b1b1b"/>').join("") +
      [120, 160, 200, 240, 280].map(x => '<path d="M' + (x - 8) + ' 150v-22q8-12 16 0v22z" fill="#5a4a3a"/>').join("");
    const bronze = '#8a5a2b';
    /* round bronze figures, no faces */
    const fig = '<ellipse cx="80" cy="196" rx="26" ry="30" fill="' + bronze + '"/><circle cx="80" cy="156" r="13" fill="' + bronze + '"/><ellipse cx="70" cy="224" rx="8" ry="6" fill="#6e4520"/><ellipse cx="90" cy="224" rx="8" ry="6" fill="#6e4520"/><path d="M62 186q-12 6-10 20" stroke="#a87440" stroke-width="3" fill="none"/>';
    const horse = '<ellipse cx="300" cy="190" rx="44" ry="24" fill="' + bronze + '"/><path d="M336 178q22-26 30-10q-6 14-22 16z" fill="' + bronze + '"/>' +
      [272, 290, 312, 328].map(x => '<rect x="' + (x - 5) + '" y="204" width="10" height="24" rx="5" fill="#6e4520"/>').join("") + '<path d="M258 186q-14 10-8 26" stroke="#6e4520" stroke-width="5" fill="none"/>';
    const bird = (cls) => '<g class="ca-bird ' + cls + '"><path class="ca-wing" d="M0 60q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cas2)"/>' +
      '<path d="M0 120q60-40 120-20t140 0t140-10v60H0z" fill="#5f8a55"/>' + pal +
      '<rect x="0" y="150" width="400" height="110" fill="#c9b08a"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (162 + i * 14) + 'h400" stroke="#b89c74" stroke-width="1"/>').join("") +
      '<rect x="56" y="226" width="48" height="10" fill="#6b6b6b"/><rect x="250" y="226" width="110" height="10" fill="#6b6b6b"/>' + fig + horse +
      bird("") + bird("ca-bird2") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#3a2a18">PLAZA BOTERO · MEDELLIN</text>',
      sky("cas2", "#8fd0ff", "#f6e6c0"));
  }

  /* 3. Mount Fuji, Japan */
  function cafuji() {
    const petals = [[60, 0, ""], [140, 10, "ca-pt2"], [220, -10, "ca-pt3"], [300, 0, ""], [360, 20, "ca-pt2"], [100, 30, "ca-pt3"], [260, 30, ""]]
      .map(p => '<g class="ca-pt ' + p[2] + '"><ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="3.5" ry="2" fill="#ffb7d0"/></g>').join("");
    const train = '<g class="ca-bul"><path d="M0 182h240v20H20q-30 0-20-20z" fill="#f7f7f7" stroke="#9aa3ad" stroke-width="1.5"/><path d="M0 182q-30 4-34 16q4 4 34 4z" fill="#f7f7f7" stroke="#9aa3ad" stroke-width="1.5"/>' +
      '<rect x="-30" y="196" width="270" height="4" fill="#1f4fb5"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (14 + i * 22) + '" y="186" width="14" height="7" rx="2" fill="#2b3a4a"/>').join("") +
      '<path d="M-22 188q8-5 16-4v6h-18z" fill="#2b3a4a"/></g>';
    const tree = (x, y, s) => '<path d="M' + x + ' ' + (y + 40 * s) + 'v-' + (30 * s) + '" stroke="#5b3a2a" stroke-width="' + (5 * s) + '"/>' +
      '<circle cx="' + x + '" cy="' + (y + 6 * s) + '" r="' + (20 * s) + '" fill="#f7a8c4"/><circle cx="' + (x - 16 * s) + '" cy="' + (y + 14 * s) + '" r="' + (14 * s) + '" fill="#fbc3d6"/><circle cx="' + (x + 16 * s) + '" cy="' + (y + 12 * s) + '" r="' + (15 * s) + '" fill="#f59bbb"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cas3)"/>' +
      '<circle cx="320" cy="60" r="22" fill="#ff5a3c" opacity=".9"/>' +
      '<g class="ca-jet"><path d="M0 40l34-4 10-10h6l-6 12 16 2v4l-16 2 6 12h-6l-10-10-34-4z" fill="#e8eef5" stroke="#7b8794" stroke-width="1"/></g>' +
      '<path d="M40 176L170 60q30-14 60 0L360 176z" fill="#3e5f93"/><path d="M170 60q30-14 60 0l26 24q-12 8-20 0q-10 10-20 0q-12 10-22 0q-10 10-20 0q-10 8-22 0z" fill="#fbfdff"/>' +
      '<path d="M0 170q100-16 200-6t200-4v18H0z" fill="#4f8f45"/>' +
      '<rect x="0" y="178" width="400" height="4" fill="#888"/><rect x="0" y="202" width="400" height="6" fill="#666"/>' + train +
      '<rect x="0" y="208" width="400" height="52" fill="#5c9a4a"/>' + tree(40, 192, 1.1) + tree(360, 196, 1) +
      petals +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#1d3a1a">MT. FUJI · JAPAN</text>',
      sky("cas3", "#ffd6c2", "#bfe6ff"));
  }

  /* 4. Hackensack River, Court Street Bridge */
  function cabridge() {
    let truss = "";
    for (let i = 0; i < 8; i++) {
      const x = 70 + i * 32;
      truss += '<path d="M' + x + ' 150V108M' + x + ' 150l32-42" stroke="#4d6b5a" stroke-width="3"/>';
    }
    const city = '<g fill="#8d97a8"><rect x="20" y="60" width="40" height="70"/><rect x="66" y="40" width="34" height="90"/><rect x="250" y="50" width="46" height="80"/><rect x="300" y="72" width="34" height="58"/><rect x="340" y="56" width="44" height="74"/></g>' +
      '<g fill="#e8eef6" opacity=".7">' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (72 + (i % 2) * 14) + '" y="' + (48 + Math.floor(i / 2) * 18) + '" width="8" height="8"/>').join("") + Array.from({ length: 6 }, (_, i) => '<rect x="' + (258 + (i % 3) * 13) + '" y="' + (60 + Math.floor(i / 3) * 18) + '" width="8" height="8"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cas4)"/>' + city +
      '<rect x="0" y="126" width="400" height="10" fill="#5e7d4d"/>' +
      '<rect x="40" y="150" width="320" height="8" fill="#3c5547"/><rect x="66" y="104" width="264" height="6" fill="#3c5547"/>' + truss +
      '<path d="M330 150V108" stroke="#4d6b5a" stroke-width="3"/>' +
      '<rect x="180" y="158" width="40" height="46" fill="#8a8172"/><rect x="20" y="150" width="30" height="54" fill="#8a8172"/><rect x="350" y="150" width="30" height="54" fill="#8a8172"/>' +
      '<rect x="0" y="176" width="400" height="84" fill="#2f5a6b"/>' +
      '<g class="ca-rip"><path d="M20 196h40M140 214h50M280 200h44M60 236h36M300 238h50" stroke="#7fb3c4" stroke-width="2"/></g>' +
      '<g class="ca-rip ca-rip2"><path d="M90 204h30M220 228h40M340 218h30" stroke="#a9d3e0" stroke-width="2"/></g>' +
      '<g class="ca-kay"><path d="M0 222q30 8 60 0q-30-6-60 0z" fill="' + RED + '"/><circle cx="30" cy="212" r="5" fill="#333"/><path d="M30 216v4" stroke="#333" stroke-width="3"/><path d="M12 208l36 16" stroke="' + GOLD + '" stroke-width="2.5"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#e8f4f8">HACKENSACK RIVER · COURT ST BRIDGE</text>',
      sky("cas4", "#f6b26b", "#ffe8c2"));
  }

  /* 5. Essex St and Prospect Ave */
  function cacorner() {
    const sky5 = '<g fill="#3b3f63">' +
      '<rect x="40" y="78" width="16" height="50"/><rect x="60" y="64" width="12" height="64"/><path d="M60 64l6-14 6 14z"/><path d="M66 50v-10" stroke="#3b3f63" stroke-width="2"/>' +
      '<rect x="78" y="72" width="18" height="56"/><rect x="100" y="86" width="22" height="42"/><rect x="126" y="56" width="14" height="72"/><path d="M126 56l7-10 7 10z"/><path d="M133 46v-14" stroke="#3b3f63" stroke-width="1.5"/>' +
      '<rect x="146" y="80" width="20" height="48"/><rect x="170" y="90" width="26" height="38"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cas5)"/>' + sky5 +
      '<rect x="0" y="120" width="400" height="104" fill="#8a4a33"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M0 ' + (128 + i * 8) + 'h400" stroke="#73392a" stroke-width="1"/>').join("") +
      Array.from({ length: 13 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (120 + i * 8) + 'v8" stroke="#73392a" stroke-width="1"/>').join("")).join("") +
      tag("CRIME", 18, 192, 58, GOLD, -6) + tag("APPLE", 60, 216, 22, "#ff7a6b", -4) + tag("PAKA", 186, 212, 20, "#7fb6ff", -3) + tag("BUTTER", 214, 176, 18, "#fff3a0", -5) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="ca-car"><rect x="0" y="238" width="62" height="14" rx="5" fill="#1f2a44"/><rect x="12" y="230" width="34" height="10" rx="3" fill="#1f2a44"/><rect x="16" y="232" width="12" height="6" fill="#bfe3ff"/><rect x="31" y="232" width="12" height="6" fill="#bfe3ff"/><circle cx="14" cy="252" r="5" fill="#111"/><circle cx="48" cy="252" r="5" fill="#111"/></g>' +
      '<rect x="336" y="90" width="6" height="134" fill="#2f2f2f"/>' + sign(262, 92, 128, "Essex St") + sign(262, 118, 128, "Prospect Av") +
      '<g class="ca-sp"><circle cx="196" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="ca-sp ca-sp2"><circle cx="202" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("cas5", "#1d2147", "#e88a5a"));
  }

  window.SCENES = { castation: castation, cabotero: cabotero, cafuji: cafuji, cabridge: cabridge, cacorner: cacorner };
})();
