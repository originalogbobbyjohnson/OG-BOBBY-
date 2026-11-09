/* BLACKPINK game (GENRES: Pop / K-pop; INTERNATIONAL region: ASIA + AUSTRALIA; Hapjeong, Mapo-gu, Seoul - the group was formed
   and trained at YG Entertainment's headquarters in Hapjeong-dong).
   Rooms: a Line 2 train pulling into Hapjeong station (underground, Lines 2 and 6, platform screen doors), Hongdae's busking street
   at night (next door to Hapjeong), N Seoul Tower on Namsan with the love-lock fence and cable car, the Han River at Mangwon
   with Yanghwa Bridge and the gold 63 Building across the water, and Yanghwa-ro by Huiujeong-ro in Hapjeong with the tower behind.
   CSS classes prefixed "bpk" (the page's anim-train is kept). No logos, no faces, no 9s. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bpkTw{0%,100%{opacity:.25}50%{opacity:1}}.bpkTw{animation:bpkTw 1.8s ease-in-out infinite}.bpkT2{animation-delay:-.6s}.bpkT3{animation-delay:-1.2s}' +
    '@keyframes bpkNeon{0%,40%,44%,100%{opacity:1}42%{opacity:.2}}.bpkNeon{animation:bpkNeon 3.2s linear infinite}.bpkN2{animation-delay:-1.4s}' +
    '@keyframes bpkCable{0%{transform:translate(0,0)}100%{transform:translate(200px,-60px)}}.bpkCable{animation:bpkCable 8s linear infinite}' +
    '@keyframes bpkBike{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.bpkBike{animation:bpkBike 7s linear infinite}.bpkBk2{animation-delay:-3.5s}' +
    '@keyframes bpkFlow{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.bpkFlow{animation:bpkFlow 3s linear infinite}' +
    '@keyframes bpkBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.bpkBob{animation:bpkBob 1s ease-in-out infinite}.bpkBb2{animation-delay:-.5s}' +
    '@keyframes bpkCar{0%{transform:translateX(-80px)}100%{transform:translateX(480px)}}.bpkCar{animation:bpkCar 6s linear infinite}' +
    '@keyframes bpkHue{0%,100%{fill:#ff8fb1}50%{fill:#ff3d7f}}.bpkHue{animation:bpkHue 2.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const K = 'font-family="Noto Sans CJK KR, Noto Sans KR, Apple SD Gothic Neo, Malgun Gothic, sans-serif" font-weight="700"';
  const PINK = "#ff8fb1", HOT = "#ff3d7f", L2 = "#00a84d", L6 = "#cd7c2f";
  const stars = (n, seed) => {
    let s = "", k = seed || 7;
    for (let i = 0; i < n; i++) { k = (k * 37 + 11) % 101; const x = (k * 4.1 + i * 23) % 400, y = (k * 1.3 + i * 7) % 80; s += '<circle cx="' + x.toFixed(1) + '" cy="' + (6 + y).toFixed(1) + '" r="' + (i % 3 ? 1 : 1.5) + '" fill="#fff" class="bpkTw' + (i % 3 ? ' bpkT' + (1 + i % 3) : '') + '"/>'; }
    return s;
  };
  const lineDot = (x, y, n, c) => '<g><circle cx="' + x + '" cy="' + y + '" r="10" fill="' + c + '"/><text x="' + x + '" y="' + (y + 4.5) + '" ' + F + ' font-size="13" fill="#fff" text-anchor="middle">' + n + '</text></g>';
  /* N Seoul Tower: slim white shaft, pod, antenna */
  const tower = (x, base, k, lit) =>
    '<g><path d="M' + (x - 30 * k) + ' ' + base + 'q' + (30 * k) + ' ' + (-40 * k) + ' ' + (60 * k) + ' 0z" fill="#1d3b2a"/>' +
    '<path d="M' + (x - 4 * k) + ' ' + (base - 20 * k) + 'L' + (x - 3 * k) + ' ' + (base - 110 * k) + 'h' + (6 * k) + 'L' + (x + 4 * k) + ' ' + (base - 20 * k) + 'z" fill="#eef0f2"/>' +
    '<rect x="' + (x - 12 * k) + '" y="' + (base - 126 * k) + '" width="' + (24 * k) + '" height="' + (18 * k) + '" rx="' + (4 * k) + '" fill="#e4e7ea"/>' +
    '<rect x="' + (x - 12 * k) + '" y="' + (base - 120 * k) + '" width="' + (24 * k) + '" height="' + (5 * k) + '" fill="' + (lit ? PINK : "#9fb3c8") + '"' + (lit ? ' class="bpkHue"' : '') + '/>' +
    '<rect x="' + (x - 1.5 * k) + '" y="' + (base - 170 * k) + '" width="' + (3 * k) + '" height="' + (46 * k) + '" fill="#d43a3a"/>' +
    '<rect x="' + (x - 1.5 * k) + '" y="' + (base - 156 * k) + '" width="' + (3 * k) + '" height="' + (8 * k) + '" fill="#fff"/></g>';

  /* 1. Hapjeong station: underground, platform screen doors, a silver Line 2 train with green stripe pulling in */
  function bpkhapjeong() {
    let doors = "";
    for (let x = 20; x < 400; x += 76) doors += '<rect x="' + x + '" y="104" width="60" height="78" fill="#cfe8f0" fill-opacity=".28" stroke="#9aa6ad" stroke-width="2"/><path d="M' + (x + 30) + ' 104v78" stroke="#9aa6ad" stroke-width="1.5"/>';
    let wins = "";
    for (let x = 30; x < 370; x += 34) wins += '<rect x="' + x + '" y="118" width="24" height="18" rx="2" fill="#24323a"/>';
    const train = '<g class="anim-train"><rect x="10" y="108" width="380" height="72" rx="8" fill="#d7dde1"/>' + wins +
      '<rect x="10" y="146" width="380" height="8" fill="' + L2 + '"/><rect x="10" y="156" width="380" height="2" fill="' + L2 + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bpkSk1)"/>' +
      '<rect x="0" y="0" width="400" height="20" fill="#eaeaea"/>' + [40, 140, 240, 340].map(x => '<rect x="' + x + '" y="8" width="60" height="5" rx="2" fill="#fffbe6"/>').join("") +
      '<rect x="80" y="30" width="240" height="40" rx="4" fill="#fff" stroke="#ccc"/>' +
      lineDot(108, 50, "2", L2) + lineDot(132, 50, "6", L6) +
      '<text x="226" y="50" ' + K + ' font-size="18" fill="#111" text-anchor="middle">합정</text>' +
      '<text x="226" y="64" ' + F + ' font-size="10" fill="#333" text-anchor="middle">Hapjeong</text>' +
      '<rect x="0" y="78" width="400" height="26" fill="#3d4448"/><text x="200" y="95" ' + F + ' font-size="9" fill="#9fe0b8" text-anchor="middle">LINE 2  ·  LINE 6  ·  MAPO-GU, SEOUL</text>' +
      train + doors +
      '<rect x="0" y="182" width="400" height="8" fill="#ffd200"/><rect x="0" y="190" width="400" height="70" fill="#b7b0a4"/>' +
      '<g fill="#a69f93">' + [20, 100, 180, 260, 340].map(x => '<rect x="' + x + '" y="206" width="50" height="40" rx="2"/>').join("") + '</g>',
      sky("bpkSk1", "#d9dcdf", "#b9bec2"));
  }

  /* 2. Hongdae busking street at night: neon signs, string lights, a busker's speaker and a crowd of silhouettes */
  function bpkhongdae() {
    let bulbs = "";
    for (let x = 10; x < 400; x += 20) bulbs += '<circle cx="' + x + '" cy="' + (64 + Math.sin(x / 30) * 6) + '" r="3" fill="#ffe08a" class="bpkTw' + (x % 40 ? ' bpkT2' : '') + '"/>';
    let crowd = "";
    for (let i = 0; i < 12; i++) { const x = 20 + i * 32, h = 30 + (i % 3) * 6; crowd += '<g class="bpkBob' + (i % 2 ? ' bpkBb2' : '') + '"><circle cx="' + x + '" cy="' + (216 - h) + '" r="9" fill="#141018"/><rect x="' + (x - 11) + '" y="' + (222 - h) + '" width="22" height="' + (h + 40) + '" rx="9" fill="#141018"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#bpkSk2)"/>' +
      '<rect x="0" y="40" width="120" height="160" fill="#2a1f33"/><rect x="128" y="20" width="140" height="180" fill="#231a2c"/><rect x="276" y="50" width="124" height="150" fill="#2c2236"/>' +
      '<g class="bpkNeon"><rect x="16" y="80" width="88" height="26" rx="5" fill="none" stroke="' + HOT + '" stroke-width="3"/><text x="60" y="99" ' + F + ' font-size="14" fill="' + PINK + '" text-anchor="middle">LIVE</text></g>' +
      '<g class="bpkNeon bpkN2"><rect x="150" y="80" width="96" height="30" rx="5" fill="none" stroke="#5ff0ff" stroke-width="3"/><text x="198" y="101" ' + K + ' font-size="16" fill="#bff8ff" text-anchor="middle">홍대</text></g>' +
      '<g class="bpkNeon"><rect x="292" y="84" width="92" height="26" rx="5" fill="none" stroke="#ffd23f" stroke-width="3"/><text x="338" y="102" ' + F + ' font-size="13" fill="#ffe98a" text-anchor="middle">KARAOKE</text></g>' +
      '<g fill="#ffcf7a" opacity=".6">' + [140, 170, 200, 230].map(x => '<rect x="' + x + '" y="122" width="18" height="18"/><rect x="' + x + '" y="148" width="18" height="18"/>').join("") + '</g>' +
      '<path d="M0 60q100 20 200 4t200 4" stroke="#444" stroke-width="1" fill="none"/>' + bulbs +
      '<rect x="0" y="200" width="400" height="60" fill="#3a3340"/>' +
      '<rect x="182" y="150" width="36" height="50" rx="4" fill="#111"/><circle cx="200" cy="166" r="9" fill="#333"/><circle cx="200" cy="188" r="6" fill="#333"/>' +
      '<path d="M240 200v-56" stroke="#999" stroke-width="2"/><circle cx="240" cy="140" r="4" fill="#ccc"/>' + crowd,
      sky("bpkSk2", "#120a1e", "#3b1d45"));
  }

  /* 3. N Seoul Tower on Namsan at dusk: the love-lock fence and a cable car climbing the hill */
  function bpknamsan() {
    let locks = "";
    const cs = [PINK, "#ffd23f", "#5fd0ff", HOT, "#9be27a", "#fff"];
    for (let i = 0; i < 40; i++) { const x = 8 + i * 10, y = 196 + (i % 4) * 9; locks += '<rect x="' + x + '" y="' + y + '" width="7" height="7" rx="1.5" fill="' + cs[i % 6] + '"/><path d="M' + (x + 1.5) + ' ' + y + 'q2 -5 4 0" stroke="' + cs[i % 6] + '" stroke-width="1.4" fill="none"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#bpkSk3)"/>' + stars(12, 5) +
      '<path d="M0 180q120 -80 220 -70t180 50v100H0z" fill="#25472f"/>' +
      tower(230, 120, 0.62, true) +
      '<path d="M20 200L330 70" stroke="#222" stroke-width="1.2"/>' +
      '<g class="bpkCable"><path d="M60 180v8" stroke="#222" stroke-width="1.5"/><rect x="46" y="188" width="28" height="18" rx="4" fill="#e23b3b"/><rect x="50" y="191" width="20" height="8" fill="#cfe8f5"/></g>' +
      '<rect x="0" y="190" width="400" height="70" fill="#4b3a2f"/>' +
      '<path d="M0 192h400M0 228h400" stroke="#888" stroke-width="3"/>' + '<g stroke="#777" stroke-width="1">' + [0, 40, 80, 120, 160, 200, 240, 280, 320, 360].map(x => '<path d="M' + x + ' 192v36"/>').join("") + '</g>' + locks,
      sky("bpkSk3", "#3b2a6b", "#ff9fb8"));
  }

  /* 4. Han River at Mangwon: Yanghwa Bridge arches, the gold 63 Building across the water, bikes on the riverside path */
  function bpkhangang() {
    let arches = "";
    for (let x = 0; x < 400; x += 80) arches += '<path d="M' + x + ' 146q40 -36 80 0" stroke="#e6e9ee" stroke-width="3" fill="none"/>';
    let lamps = "";
    for (let x = 10; x < 400; x += 26) lamps += '<circle cx="' + x + '" cy="140" r="1.8" fill="#ffe08a" class="bpkTw' + (x % 52 ? ' bpkT3' : '') + '"/>';
    const bike = (cls) => '<g class="bpkBike ' + cls + '"><circle cx="0" cy="226" r="7" fill="none" stroke="#111" stroke-width="2"/><circle cx="22" cy="226" r="7" fill="none" stroke="#111" stroke-width="2"/><path d="M0 226l8 -12h10l4 12M8 214l-2 -4" stroke="' + HOT + '" stroke-width="2.5" fill="none"/><rect x="6" y="196" width="8" height="16" rx="4" fill="#111"/><circle cx="10" cy="192" r="4" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bpkSk4)"/>' + stars(14, 11) +
      '<g fill="#2a2440"><rect x="20" y="96" width="30" height="44"/><rect x="60" y="80" width="24" height="60"/><rect x="200" y="90" width="40" height="50"/><rect x="250" y="100" width="30" height="40"/><rect x="330" y="86" width="26" height="54"/></g>' +
      '<path d="M120 140V52l20 -12l20 12v88z" fill="#e8b84a"/><path d="M140 40v100" stroke="#fff3c4" stroke-width="1" opacity=".6"/>' +
      '<g fill="#fff3c4" opacity=".5">' + [60, 72, 84, 96, 108, 120].map(y => '<rect x="126" y="' + y + '" width="28" height="2"/>').join("") + '</g>' +
      '<rect x="0" y="140" width="400" height="8" fill="#9aa3ad"/>' + arches + lamps +
      '<rect x="0" y="148" width="400" height="60" fill="#14213d"/>' +
      '<g class="bpkFlow">' + [156, 168, 180, 192].map((y, i) => [0, 60, 120, 180, 240, 300, 360, 420].map(x => '<path d="M' + (x + i * 15) + ' ' + y + 'q10 -3 20 0" stroke="' + (i % 2 ? PINK : "#e8b84a") + '" stroke-width="1.5" fill="none" opacity=".55"/>').join("")).join("") + '</g>' +
      '<rect x="0" y="208" width="400" height="26" fill="#55606b"/><rect x="0" y="234" width="400" height="26" fill="#3f7a46"/>' +
      bike("") + bike("bpkBk2"),
      sky("bpkSk4", "#0b0f2a", "#4a2a5e"));
  }

  /* 5. Yanghwa-ro by Huiujeong-ro in Hapjeong: blue Seoul road-name signs, BLACKPINK tagged, N Seoul Tower lit behind */
  function bpkcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bpkSk5)"/>' + stars(10, 3) +
      '<path d="M220 140q60 -40 140 0z" fill="#1d2b22"/>' + tower(290, 134, 0.5, true) +
      '<g fill="#221a2a"><rect x="0" y="90" width="60" height="60"/><rect x="250" y="104" width="40" height="46"/><rect x="340" y="96" width="60" height="54"/></g>' +
      '<rect x="0" y="118" width="250" height="112" fill="#1b1b1f"/>' +
      '<g stroke="#2a2a30" stroke-width="1">' + [130, 144, 158, 172, 186, 200, 214].map(y => '<path d="M0 ' + y + 'H250"/>').join("") + '</g>' +
      tag("BLACKPINK", 14, 196, 40, PINK, -6) + tag("IN YOUR AREA", 60, 222, 18, "#fff", -3) + tag("BORN PINK", 150, 144, 16, HOT, 4) +
      '<rect x="0" y="230" width="400" height="30" fill="#3f4246"/><rect x="0" y="228" width="400" height="4" fill="#c8c8c8"/>' +
      '<g class="bpkCar"><rect x="0" y="234" width="50" height="14" rx="4" fill="#111"/><rect x="10" y="227" width="28" height="10" rx="3" fill="' + PINK + '"/><circle cx="12" cy="249" r="4" fill="#555"/><circle cx="38" cy="249" r="4" fill="#555"/></g>' +
      '<rect x="318" y="98" width="5" height="132" fill="#8a8f94"/>' +
      '<rect x="262" y="96" width="122" height="22" rx="2" fill="#1d4f9c" stroke="#fff" stroke-width="1.5"/><text x="323" y="111" ' + K + ' font-size="11" fill="#fff" text-anchor="middle">양화로 Yanghwa-ro</text>' +
      '<rect x="262" y="122" width="132" height="22" rx="2" fill="#1d4f9c" stroke="#fff" stroke-width="1.5"/><text x="328" y="137" ' + K + ' font-size="11" fill="#fff" text-anchor="middle">희우정로 Huiujeong-ro</text>',
      sky("bpkSk5", "#140a24", "#ff7fa8"));
  }

  window.SCENES = { bpkhapjeong, bpkhongdae, bpknamsan, bpkhangang, bpkcorner };
})();
