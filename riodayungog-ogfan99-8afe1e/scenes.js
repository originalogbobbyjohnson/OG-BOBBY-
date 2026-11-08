/* riodayungog scenes (Regions tab: Detroit region / Michigan; Flint). CSS classes and ids prefixed ro- (the page's own anim-train is kept, used on the car).
   1 I-475 north into Flint: the big green guide sign over the freeway, the 810, a car rolling in under it.
   2 Bishop International Airport in Flint ("Rolls truck at the airport, I gotta dip" from RIO FREE): the low terminal and control tower, a jet climbing, the truck waiting at the curb.
   3 Somerset Collection in Troy, the glass skybridge over Big Beaver Rd ("Then we was in Somerset, on the rich side"; "they open up the stores for us" from 4 Minutes of Hell): night, shop windows glowing.
   4 The FREE RIO billboard on E Jefferson Ave in Detroit (up while he was in federal prison, 2021-2024): the board lit up over the avenue, cars passing.
   5 N Dupont St and W Pasadena Ave on Flint's north side: green signs, RIO tagged with GHETTO BOYZ and 810 on the brick, the downtown Flint weather ball glowing behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes roflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.ro-flk{animation:roflick 2.3s infinite}.ro-flk2{animation-delay:.8s}' +
    '@keyframes rochase{0%,100%{opacity:.25}50%{opacity:1}}.ro-ch{animation:rochase .8s steps(1) infinite}.ro-ch2{animation-delay:.4s}' +
    '@keyframes roglow{0%,100%{opacity:.35}50%{opacity:1}}.ro-gl{animation:roglow 2s ease-in-out infinite}.ro-gl2{animation-delay:-1s}' +
    '@keyframes rocar{from{transform:translateX(-130px)}to{transform:translateX(520px)}}.ro-car{animation:rocar 6.5s linear infinite}.ro-car2{animation-delay:-3.2s}' +
    '@keyframes rocarL{from{transform:translateX(520px)}to{transform:translateX(-130px)}}.ro-carL{animation:rocarL 7.5s linear infinite}' +
    '@keyframes rojet{0%{transform:translate(-40px,30px)}100%{transform:translate(260px,-70px)}}.ro-jet{animation:rojet 6s linear infinite}' +
    '@keyframes rosp{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(14px,-24px);opacity:0}}.ro-sp{animation:rosp 1.3s ease-out infinite}.ro-sp2{animation-delay:-.6s}' +
    '@keyframes roball{0%,100%{fill:#ff3a2a}33%{fill:#2ecc5a}66%{fill:#3fa7ff}}.ro-wb{animation:roball 3s steps(1) infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const ORANGE = "#ff9a3c", YEL = "#ffd23f", BLUE = "#3fa7ff";
  const stars = n => Array.from({ length: n }, (_, i) => '<circle cx="' + ((i * 61 + 7) % 400) + '" cy="' + ((i * 23) % 70 + 6) + '" r="1.1" fill="#fff" opacity=".7"/>').join("");
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 56) + '" cy="' + (y + 5) + '" r="2" fill="#fff6c2"/></g>';
  const suv = (x, y, c) => '<g><rect x="' + x + '" y="' + (y - 14) + '" width="78" height="28" rx="5" fill="' + c + '"/><rect x="' + (x + 6) + '" y="' + (y - 26) + '" width="56" height="14" rx="3" fill="' + c + '"/>' +
    '<rect x="' + (x + 10) + '" y="' + (y - 23) + '" width="20" height="9" fill="#9fc6e8"/><rect x="' + (x + 34) + '" y="' + (y - 23) + '" width="22" height="9" fill="#9fc6e8"/><rect x="' + (x + 66) + '" y="' + (y - 10) + '" width="10" height="12" rx="1" fill="#d8d8d8"/>' +
    '<circle cx="' + (x + 16) + '" cy="' + (y + 14) + '" r="8" fill="#111"/><circle cx="' + (x + 60) + '" cy="' + (y + 14) + '" r="8" fill="#111"/><circle cx="' + (x + 16) + '" cy="' + (y + 14) + '" r="3" fill="#ccc"/><circle cx="' + (x + 60) + '" cy="' + (y + 14) + '" r="3" fill="#ccc"/></g>';
  const bricks = (y0, h, col) => Array.from({ length: Math.floor(h / 8) }, (_, i) => '<path d="M0 ' + (y0 + i * 8) + 'h400" stroke="' + col + '" stroke-width="1"/>' +
    Array.from({ length: 10 }, (_, j) => '<path d="M' + (j * 44 + (i % 2) * 22) + ' ' + (y0 + i * 8) + 'v8" stroke="' + col + '" stroke-width="1"/>').join("")).join("");

  /* 1. I-475 north into Flint */
  function rostation() {
    const shield = (x, y, n) => '<path d="M' + x + ' ' + y + 'h30v14q0 14 -15 20q-15 -6 -15 -20z" fill="#1f4e9a" stroke="#fff" stroke-width="1.5"/><rect x="' + x + '" y="' + y + '" width="30" height="7" fill="#c8202a"/>' +
      '<text x="' + (x + 15) + '" y="' + (y + 22) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + n + '</text>';
    const gantry = '<rect x="36" y="40" width="8" height="160" fill="#7a7f86"/><rect x="356" y="40" width="8" height="160" fill="#7a7f86"/><rect x="36" y="40" width="328" height="6" fill="#8a8f96"/>' +
      '<rect x="70" y="48" width="260" height="78" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      shield(110, 56, "475") + '<text x="160" y="72" ' + font + ' font-size="13" fill="#fff">NORTH</text>' +
      '<text x="200" y="102" text-anchor="middle" ' + font + ' font-size="22" fill="#fff">Flint</text><text x="200" y="118" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">Downtown · The 810</text>' +
      '<path d="M300 60v20M294 66l6 -8l6 8" stroke="#fff" stroke-width="3" fill="none"/>';
    const road = '<path d="M0 260L150 150H250L400 260z" fill="#3a3d44"/><path d="M200 150V260" stroke="#e8e8e8" stroke-width="3" stroke-dasharray="14 12"/>' +
      '<path d="M150 150L0 260M250 150L400 260" stroke="' + YEL + '" stroke-width="3"/><rect x="0" y="146" width="400" height="6" fill="#4a6a3a"/>';
    const carIn = '<g class="anim-train"><rect x="170" y="210" width="62" height="22" rx="6" fill="#111"/><rect x="178" y="200" width="46" height="12" rx="4" fill="#111"/><rect x="182" y="202" width="38" height="8" fill="#9fc6e8"/><circle cx="178" cy="222" r="4" fill="#ff3b3b"/><circle cx="224" cy="222" r="4" fill="#ff3b3b"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ros1)"/>' + stars(10) +
      '<g fill="#2a2e3e"><rect x="0" y="120" width="60" height="28"/><rect x="66" y="110" width="30" height="38"/><rect x="300" y="116" width="44" height="32"/><rect x="350" y="126" width="50" height="22"/></g>' +
      road + carIn + gantry +
      '<circle class="ro-flk" cx="40" cy="38" r="3" fill="#ffe9a8"/><circle class="ro-flk ro-flk2" cx="360" cy="38" r="3" fill="#ffe9a8"/>' +
      '<rect x="110" y="232" width="180" height="20" rx="3" fill="#111" opacity=".75"/><text x="200" y="246" text-anchor="middle" ' + font + ' font-size="9" fill="' + ORANGE + '">GENESEE COUNTY · MICHIGAN</text>',
      sky("ros1", "#1a1240", "#e07a4a"));
  }

  /* 2. Bishop International Airport: terminal, tower, jet climbing, the truck at the curb */
  function roairport() {
    const tower = '<rect x="318" y="60" width="16" height="100" fill="#d8d2c4"/><path d="M304 60h44l-6 -22h-32z" fill="#2a3a4a" stroke="#d8d2c4" stroke-width="2"/><rect x="306" y="34" width="40" height="4" fill="#d8d2c4"/><circle class="ro-flk" cx="326" cy="30" r="3" fill="#ff3b3b"/>';
    const term = '<rect x="20" y="110" width="290" height="62" fill="#e8e4da"/><rect x="14" y="104" width="302" height="8" fill="#5a6a7a"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (30 + i * 30) + '" y="120" width="22" height="34" fill="#6a9ac8" opacity=".85"/>').join("") +
      '<rect x="120" y="154" width="70" height="18" fill="#3a4a5a"/><rect x="60" y="88" width="190" height="16" rx="2" fill="#2a3a4a"/><text x="155" y="100" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BISHOP INTERNATIONAL</text>';
    const jet = '<g class="ro-jet"><path d="M20 70l40 -8l10 -2l6 3l-6 4l-46 7z" fill="#f4f4f4"/><path d="M44 66l-10 14h6l14 -13zM44 64l-8 -10h6l12 9z" fill="#c9ced6"/><path d="M22 70l-6 -9h5l6 8z" fill="' + BLUE + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ros2)"/>' + jet + tower + term +
      '<rect x="0" y="172" width="400" height="88" fill="#4a4d52"/><rect x="0" y="170" width="400" height="4" fill="#d8d8d8"/><path d="M0 214h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="14 10"/>' +
      suv(150, 196, "#1a1a1a") + '<rect x="234" y="182" width="56" height="16" rx="3" fill="#111" opacity=".8"/><text x="262" y="193.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + YEL + '">ARRIVALS</text>' +
      car("ro-carL", 0, 236, "#c8c8c8") +
      '<rect x="20" y="14" width="200" height="22" rx="3" fill="#111" opacity=".7"/><text x="120" y="29" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">FLINT · I GOTTA DIP</text>',
      sky("ros2", "#5a8ad0", "#f2d0a0"));
  }

  /* 3. Somerset Collection in Troy, the skybridge over Big Beaver at night */
  function romall() {
    const block = (x, w) => '<rect x="' + x + '" y="96" width="' + w + '" height="100" fill="#e8e2d4"/><rect x="' + x + '" y="90" width="' + w + '" height="8" fill="#b8ae98"/>' +
      Array.from({ length: Math.floor(w / 30) }, (_, i) => '<rect class="ro-gl' + (i % 2 ? " ro-gl2" : "") + '" x="' + (x + 8 + i * 30) + '" y="150" width="22" height="40" fill="#ffd98a"/><rect x="' + (x + 8 + i * 30) + '" y="110" width="22" height="26" fill="#3a4a6a" opacity=".6"/>').join("");
    const bridge = '<path d="M110 92H290V128H110z" fill="#7fb0d8" opacity=".55" stroke="#e8eef4" stroke-width="2"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (110 + i * 22.5) + ' 92V128" stroke="#e8eef4" stroke-width="1.5"/>').join("") +
      '<path d="M110 92Q200 72 290 92" fill="none" stroke="#e8eef4" stroke-width="3"/><path d="M110 128H290" stroke="#c9ced6" stroke-width="4"/>' +
      Array.from({ length: 8 }, (_, i) => '<circle class="ro-ch' + (i % 2 ? " ro-ch2" : "") + '" cx="' + (122 + i * 22) + '" cy="110" r="2.5" fill="#fff4c2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ros3)"/>' + stars(16) +
      block(0, 110) + block(290, 110) + bridge +
      '<rect x="0" y="196" width="400" height="64" fill="#34373e"/><rect x="0" y="194" width="400" height="4" fill="#c9cdd2"/><path d="M0 230h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="14 10"/>' +
      car("ro-car", 0, 210, "#f2f2f2") + car("ro-car ro-car2", 0, 210, "#b0202a") + car("ro-carL", 0, 242, "#2a2a2a") +
      '<rect x="128" y="138" width="144" height="20" rx="3" fill="#111" opacity=".8"/><text x="200" y="152" text-anchor="middle" ' + font + ' font-size="9" fill="' + YEL + '">SOMERSET · BIG BEAVER RD</text>',
      sky("ros3", "#090c1e", "#2a2050"));
  }

  /* 4. The FREE RIO billboard on E Jefferson Ave */
  function rofree() {
    const lamps = [100, 160, 240, 300].map(x => '<path d="M' + (x - 8) + ' 128L' + (x - 22) + ' 60H' + (x + 22) + 'L' + (x + 8) + ' 128z" fill="#fff6c2" opacity=".07"/>' +
      '<rect x="' + (x - 1) + '" y="126" width="2" height="10" fill="#9aa"/><path d="M' + (x - 8) + ' 128h16l-3 -5h-10z" fill="#3a3d44"/><circle class="ro-flk" cx="' + x + '" cy="127" r="2" fill="#fff6c2"/>').join("");
    const board = '<rect x="196" y="120" width="8" height="80" fill="#5a5f66"/><rect x="150" y="150" width="100" height="5" fill="#5a5f66"/>' +
      '<rect x="60" y="24" width="280" height="102" fill="#111" stroke="#c9ced6" stroke-width="4"/>' +
      '<rect x="66" y="30" width="268" height="90" fill="url(#rob4)"/>' + lamps +
      '<text x="200" y="86" text-anchor="middle" font-family="Anton, Impact, Helvetica, sans-serif" font-size="52" fill="#fff" stroke="#000" stroke-width="3" paint-order="stroke">FREE RIO</text>' +
      '<text x="200" y="110" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">GHETTO BOYZ · FLINT · THE 810</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#ros4)"/>' + stars(14) +
      '<g fill="#22263a"><rect x="0" y="140" width="70" height="60"/><rect x="330" y="132" width="70" height="68"/></g>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (6 + (i * 37) % 390) + '" y="' + (148 + (i * 11) % 40) + '" width="4" height="5" fill="#ffd98a" opacity=".7"/>').join("") +
      board +
      '<rect x="0" y="200" width="400" height="60" fill="#3a3d44"/><rect x="0" y="198" width="400" height="4" fill="#c9cdd2"/><path d="M0 230h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="14 10"/>' +
      car("ro-car", 0, 210, "#e8e8e8") + car("ro-carL", 0, 240, ORANGE) +
      '<rect x="8" y="232" width="110" height="20" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="63" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">E Jefferson Ave</text>',
      sky("ros4", "#0a0d1e", "#3a2a4a") + '<linearGradient id="rob4" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + ORANGE + '"/><stop offset="1" stop-color="#b0202a"/></linearGradient>');
  }

  /* 5. N Dupont St and W Pasadena Ave, the weather ball downtown */
  function rocorner() {
    const wball = '<rect x="196" y="70" width="8" height="60" fill="#5a5f66"/><rect x="176" y="96" width="48" height="34" fill="#3a3e48"/>' +
      '<circle class="ro-wb" cx="200" cy="54" r="18" fill="#ff5a3a" stroke="#c9ced6" stroke-width="2"/><path d="M182 54h36M200 36v36" stroke="#c9ced6" stroke-width="1" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ros5)"/>' + stars(16) +
      '<g fill="#262a3a"><rect x="90" y="96" width="44" height="34"/><rect x="138" y="84" width="34" height="46"/><rect x="230" y="88" width="40" height="42"/><rect x="276" y="100" width="44" height="30"/></g>' + wball +
      '<rect x="0" y="126" width="400" height="98" fill="#6e3e2e"/>' + bricks(126, 98, "#5a3224") +
      tag("RIO", 24, 192, 62, ORANGE, -6) + tag("GHETTO BOYZ", 128, 212, 20, YEL, -3) + tag("810", 150, 176, 30, BLUE, -8) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="338" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(262, 98, 136, "N Dupont St") + sign(262, 124, 136, "W Pasadena Ave") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="ro-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="ro-sp"><circle cx="246" cy="180" r="3" fill="' + ORANGE + '" opacity=".7"/></g><g class="ro-sp ro-sp2"><circle cx="252" cy="174" r="2" fill="' + ORANGE + '" opacity=".6"/></g>' +
      car("ro-car", 0, 240, "#1a1a1a"),
      sky("ros5", "#0b1020", "#4a3a6a"));
  }

  window.SCENES = { rostation: rostation, roairport: roairport, romall: romall, rofree: rofree, rocorner: rocorner };
})();
