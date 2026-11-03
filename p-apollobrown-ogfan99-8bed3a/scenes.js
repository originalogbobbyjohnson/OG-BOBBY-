/* Apollo Brown producer game: Detroit. The People Mover, Michigan Central Station, the red Calder in Grand Rapids, the beat lab, the corner. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes drift{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.cl{animation:drift 22s linear infinite}.cl2{animation-duration:30s;animation-delay:-12s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.8s ease-in-out infinite}.bl2{animation-delay:.6s}.bl3{animation-delay:1.2s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.spn{transform-box:fill-box;transform-origin:50% 50%;animation:spin 1.8s linear infinite}' +
    '@keyframes scan{from{transform:translateX(0)}to{transform:translateX(-144px)}}.sc{animation:scan 2.4s linear infinite}' +
    '@keyframes bird{0%{transform:translate(-30px,0)}100%{transform:translate(430px,-30px)}}.bd{animation:bird 10s linear infinite}.bd2{animation-delay:-5s}' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const BRASS = "#d9a441", CRED = "#d9341f", BLUE = "#5aa0d8";
  const cloud = (x, y, cls) => '<g class="cl ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="34" ry="11" fill="#fff" opacity=".8"/><ellipse cx="' + (x + 16) + '" cy="' + (y - 7) + '" rx="20" ry="10" fill="#fff" opacity=".8"/></g>';

  /* 1. The Detroit People Mover gliding into Grand Circus Park on its concrete guideway */
  function peoplemover() {
    let bld = "";
    [[0, 60, 110, "#6b6f7a"], [64, 30, 140, "#7d7466"], [300, 50, 120, "#5d6470"], [354, 20, 150, "#76705f"]].forEach(b => {
      bld += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + (b[0] === 64 ? 80 : 54) + '" height="' + b[2] + '" fill="' + b[3] + '"/>';
      for (let y = b[1] + 8; y < b[1] + b[2] - 6; y += 14) bld += '<rect x="' + (b[0] + 6) + '" y="' + y + '" width="' + (b[0] === 64 ? 68 : 42) + '" height="5" fill="#ffd98a" opacity=".35"/>';
    });
    let win = "";
    for (let x = 36; x < 250; x += 36) win += '<rect x="' + x + '" y="112" width="24" height="20" rx="3" fill="#2c4256"/><rect x="' + (x + 3) + '" y="114" width="6" height="16" fill="#fff" opacity=".35"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#p1)"/>' + cloud(60, 30) + bld +
      '<rect x="0" y="150" width="400" height="16" fill="#bdb8ad"/><rect x="0" y="166" width="400" height="6" fill="#8f8a80"/>' +
      '<rect x="60" y="172" width="22" height="88" fill="#a8a397"/><rect x="300" y="172" width="22" height="88" fill="#a8a397"/>' +
      '<rect x="150" y="56" width="200" height="30" rx="3" fill="#1d2a3a"/><text x="250" y="76" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">Grand Circus Park</text>' +
      '<g class="anim-train">' +
        '<rect x="20" y="100" width="250" height="50" rx="12" fill="#e9eef2" stroke="#556" stroke-width="2"/>' +
        '<rect x="20" y="136" width="250" height="6" fill="' + BLUE + '"/>' + win +
        '<circle cx="262" cy="128" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="230" width="400" height="30" fill="#3a3a42"/>' +
      tag("APOLLO", 120, 222, 30, BRASS, -5),
      sky("p1", "#7fb2dc", "#e8d7b8"));
  }

  /* 2. Michigan Central Station: the beaux-arts hall with its three great arches and the tall office tower behind, birds circling */
  function centralstation() {
    let tw = "";
    for (let r = 0; r < 12; r++) for (let c = 0; c < 12; c++) tw += '<rect class="' + ((r * 12 + c) % 17 === 0 ? "bl" : (r * 12 + c) % 23 === 0 ? "bl bl2" : "") + '" x="' + (148 + c * 18) + '" y="' + (26 + r * 9) + '" width="10" height="5" fill="' + ((r * 12 + c) % 17 === 0 || (r * 12 + c) % 23 === 0 ? "#ffd98a" : "#3b3a40") + '"/>';
    let arches = "";
    [46, 140, 234].forEach(x => { arches += '<path d="M' + x + ' 236v-56a30 30 0 0 1 60 0v56z" fill="#2c3a44"/>' + (() => { let g = ""; for (let i = 1; i < 4; i++) g += '<path d="M' + (x + i * 15) + ' 152v84" stroke="#9aa7ad" stroke-width="1.5"/>'; return g + '<path d="M' + x + ' 196h60" stroke="#9aa7ad" stroke-width="1.5"/>'; })(); });
    return svg(
      '<rect width="400" height="260" fill="url(#m2)"/>' + cloud(80, 40) + cloud(300, 24, "cl2") +
      '<g class="bd"><path d="M0 60q5-5 10 0q5-5 10 0" stroke="#333" stroke-width="1.6" fill="none"/></g><g class="bd bd2"><path d="M0 80q4-4 8 0q4-4 8 0" stroke="#333" stroke-width="1.6" fill="none"/></g>' +
      '<rect x="140" y="18" width="226" height="120" fill="#cdbb98"/><rect x="136" y="14" width="234" height="6" fill="#a8946e"/>' + tw +
      '<rect x="20" y="130" width="320" height="110" fill="#d8c8a6"/><rect x="16" y="124" width="328" height="10" fill="#a8946e"/>' +
      (() => { let c = ""; for (let x = 28; x < 336; x += 94) c += '<rect x="' + (x + 80) + '" y="140" width="10" height="96" fill="#c4b28d"/>'; return c; })() +
      arches +
      '<rect x="0" y="236" width="400" height="24" fill="#4a4a4f"/>',
      sky("m2", "#6fa6d6", "#f2dcb2"));
  }

  /* 3. Grand Rapids, where he grew up: the big red Calder sculpture on the plaza, clouds drifting over */
  function calder() {
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + cloud(40, 40) + cloud(240, 28, "cl2") +
      '<rect x="0" y="90" width="70" height="110" fill="#8a8f98"/><rect x="330" y="70" width="70" height="130" fill="#7d838d"/><rect x="290" y="110" width="44" height="90" fill="#9aa0a8"/>' +
      (() => { let w = ""; for (let y = 100; y < 196; y += 12) w += '<rect x="8" y="' + y + '" width="54" height="5" fill="#cfd8e0" opacity=".6"/><rect x="338" y="' + (y - 20) + '" width="54" height="5" fill="#cfd8e0" opacity=".6"/>'; return w; })() +
      '<rect x="0" y="200" width="400" height="60" fill="#c9c2b4"/>' +
      (() => { let t = ""; for (let x = 0; x < 400; x += 40) t += '<path d="M' + x + ' 200v60" stroke="#b5ad9d"/>'; return t; })() +
      '<path d="M110 206 L150 80 L178 120 L196 60 L230 140 L262 98 L292 206 L262 206 L246 160 L220 206 L196 206 L190 150 L166 206 L146 206 L150 160 L136 206 Z" fill="' + CRED + '" stroke="#8a1e10" stroke-width="2"/>' +
      '<path d="M150 80 L160 150M196 60 L200 140M262 98 L250 150" stroke="#a82312" stroke-width="3"/>' +
      '<rect x="128" y="226" width="144" height="20" rx="2" fill="#0f6b3a"/><text x="200" y="240" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">GRAND RAPIDS, MICH.</text>',
      sky("g3", "#5a9bd6", "#d8e8f2"));
  }

  /* 4. The beat lab: an old desktop PC with a waveform scrolling, a turntable spinning, record crates */
  function beatlab() {
    let crates = "";
    [[20, "#c0392b"], [32, BRASS], [44, BLUE], [56, "#e0e0e0"]].forEach((c, i) => { crates += '<rect x="' + (c[0]) + '" y="' + (150 + i * 2) + '" width="56" height="54" fill="' + c[1] + '" stroke="#222"/>'; });
    return svg(
      '<rect width="400" height="260" fill="#1a1512"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#2a221c"/>' +
      (() => { let p = ""; for (let i = 0; i < 6; i++) p += '<rect x="' + (20 + i * 64) + '" y="16" width="48" height="48" fill="' + ["#c0392b", BRASS, BLUE, "#7a5a3a", CRED, "#e0e0e0"][i] + '" stroke="#111"/><circle cx="' + (44 + i * 64) + '" cy="40" r="14" fill="#111" opacity=".55"/>'; return p; })() +
      '<rect x="0" y="150" width="400" height="110" fill="#5a3f2a"/><rect x="0" y="150" width="400" height="6" fill="#6e4f36"/>' +
      '<rect x="128" y="70" width="140" height="104" rx="6" fill="#d8d0bc" stroke="#9a927e" stroke-width="2"/>' +
      '<rect x="140" y="80" width="116" height="78" fill="#0a1a10"/>' +
      '<g clip-path="url(#scr)"><g class="sc"><path d="M140 119q4-30 8 0t8 0t8 0q4-18 8 0t8 0t8 0q4-34 8 0t8 0t8 0q4-22 8 0t8 0t8 0q4-30 8 0t8 0t8 0q4-14 8 0t8 0t8 0q4-26 8 0t8 0t8 0q4-30 8 0t8 0t8 0q4-18 8 0t8 0t8 0q4-34 8 0t8 0t8 0q4-22 8 0t8 0t8 0q4-30 8 0t8 0t8 0" fill="none" stroke="#3fe08a" stroke-width="1.5"/></g></g>' +
      '<rect x="190" y="174" width="16" height="12" fill="#b8b09c"/><rect x="164" y="186" width="68" height="8" rx="2" fill="#d8d0bc"/>' +
      '<rect x="280" y="96" width="34" height="96" rx="2" fill="#d8d0bc" stroke="#9a927e" stroke-width="2"/><rect x="286" y="108" width="22" height="5" fill="#9a927e"/><circle class="bl" cx="297" cy="176" r="3" fill="#3fe08a"/>' +
      crates +
      '<rect x="296" y="200" width="96" height="50" rx="4" fill="#2c2c30" stroke="#555" stroke-width="2"/>' +
      '<g class="spn"><circle cx="336" cy="225" r="20" fill="#0b0b0b"/><circle cx="336" cy="225" r="14" fill="none" stroke="#2a2a2a"/><circle cx="336" cy="225" r="6" fill="' + BRASS + '"/><rect x="334" y="219" width="4" height="4" fill="#fff"/></g>' +
      '<path d="M382 206l-12 22" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>',
      '<clipPath id="scr"><rect x="140" y="80" width="116" height="78"/></clipPath>');
  }

  /* 5. The corner: Woodward Ave and Grand River Ave, green signs, APOLLO on the brick, the Renaissance Center glass towers behind */
  function corner() {
    const cyl = (x, w, top, c) => '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (130 - top) + '" fill="' + c + '"/><rect x="' + (x + w * 0.2) + '" y="' + top + '" width="' + (w * 0.18) + '" height="' + (130 - top) + '" fill="#fff" opacity=".18"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#k5)"/>' +
      cyl(110, 26, 60, "#3d5a6e") + cyl(212, 26, 60, "#3d5a6e") + cyl(130, 24, 50, "#4d6c82") + cyl(196, 24, 50, "#4d6c82") +
      cyl(150, 50, 12, "#5a7d96") + '<rect x="150" y="20" width="50" height="4" fill="#ffd98a" class="bl"/>' +
      '<rect x="0" y="120" width="400" height="104" fill="#8a4a36"/>' +
      (() => { let b = ""; for (let y = 128; y < 224; y += 10) b += '<path d="M0 ' + y + 'h400" stroke="#6e3828" stroke-width="1"/>'; return b; })() +
      tag("APOLLO", 22, 196, 50, BRASS, -5) + tag("MELLO", 200, 216, 24, BLUE, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="236" width="50" height="14" rx="5" fill="' + CRED + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="40" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="332" y="40" width="5" height="186" fill="#3d4b3f"/>' +
      '<rect x="278" y="44" width="112" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="334" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Woodward Ave</text>' +
      '<rect x="272" y="70" width="124" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="334" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Grand River Ave</text>',
      sky("k5", "#16223c", "#d98a5a"));
  }

  window.SCENES = { peoplemover: peoplemover, centralstation: centralstation, calder: calder, beatlab: beatlab, corner: corner };
})();
