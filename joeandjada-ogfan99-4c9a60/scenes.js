/* joeandjada scenes (NYC map: the Bronx/Yonkers line, Woodlawn). The podcast with Fat Joe (South Bronx) and Jadakiss (Yonkers).
   CSS classes prefixed jj- (the page's own anim-train is kept). No logos, no faces: hosts and audience are shown only as empty chairs and the backs of heads. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jjflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.jj-flk{animation:jjflick 2.6s infinite}.jj-flk2{animation-delay:.9s}' +
    '@keyframes jjglow{0%,100%{opacity:.45}50%{opacity:1}}.jj-glow{animation:jjglow 2s ease-in-out infinite}.jj-g2{animation-delay:-1s}' +
    '@keyframes jjbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.jj-bob{animation:jjbob 1.1s ease-in-out infinite}.jj-bob2{animation-delay:-.55s}.jj-bob3{animation-delay:-.3s}' +
    '@keyframes jjwave{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}.jj-wv{transform-box:fill-box;transform-origin:50% 50%;animation:jjwave .8s ease-in-out infinite}' +
    '@keyframes jjsweep{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.jj-sw{transform-box:fill-box;transform-origin:50% 0%;animation:jjsweep 4s ease-in-out infinite}.jj-sw2{animation-delay:-2s}' +
    '@keyframes jjel{0%{transform:translateX(-260px)}100%{transform:translateX(330px)}}.jj-el{animation:jjel 7s linear infinite}' +
    '@keyframes jjboat{0%{transform:translateX(0)}100%{transform:translateX(-120px)}}.jj-boat{animation:jjboat 14s linear infinite alternate}' +
        '@keyframes jjconf{0%{transform:translateY(-30px) rotate(0)}100%{transform:translateY(270px) rotate(320deg)}}.jj-cf{transform-box:fill-box;animation:jjconf 5s linear infinite}.jj-cf2{animation-delay:-1.7s}.jj-cf3{animation-delay:-3.4s}' +
    '@keyframes jjflag{0%{transform:translate(-10px,-18px) rotate(-20deg);opacity:0}30%{opacity:1}100%{transform:translate(0,0) rotate(8deg);opacity:1}}.jj-flag{transform-box:fill-box;animation:jjflag 2.4s ease-out infinite alternate}' +
    '@keyframes jjspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.jj-sp{animation:jjspray 1.4s ease-out infinite}.jj-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, n, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="14" fill="' + (dark ? "#111" : "#fff") + '">' + n + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "jj-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* back of a head + shoulders (no face): the live audience */
  const head = (x, y, s, fill, cls) => '<g class="' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M-14 22q0 -14 14 -14t14 14v8h-28z" fill="' + fill + '"/><ellipse cx="0" cy="0" rx="8" ry="9" fill="' + fill + '"/></g></g>';
  const RED = "#ff5a36", GOLD = "#ffc83d", BLUE = "#38b6ff", GREEN4 = "#00933c";

  /* 1. Woodlawn, the last stop on the 4, up on the el at Jerome Av: green-painted IRT steel, the black station sign with the 4 bullet,
        a stainless 4 train rolling in, and the Yonkers hills right past the city line in the dusk */
  function jjstation() {
    const train = '<g class="anim-train"><rect x="20" y="96" width="320" height="76" rx="6" fill="#c9ced4" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (32 + i * 42) + '" y="108" width="28" height="26" rx="2" fill="#1d262e"/>').join("") +
      Array.from({ length: 16 }, (_, i) => '<path d="M' + (24 + i * 20) + ' 140v30" stroke="#b3b9c0" stroke-width="1"/>').join("") +
      '<rect x="120" y="138" width="40" height="32" fill="#8e959c"/><path d="M140 138v32" stroke="#6b7178" stroke-width="1.5"/>' +
      bullet(196, 152, "4", GREEN4) + '<rect x="320" y="100" width="20" height="70" rx="4" fill="#a3a9b0"/><circle cx="332" cy="162" r="3.5" fill="#fff6c2"/></g>';
    const houses = [[6, 74, 20, "#6e5a52"], [30, 70, 18, "#5e6470"], [52, 76, 22, "#7a5a44"], [80, 68, 16, "#566070"], [100, 72, 24, "#6a5048"], [130, 66, 18, "#5c5a68"], [152, 74, 20, "#7a6252"], [176, 70, 22, "#585e6a"]]
      .map(h => '<rect x="' + h[0] + '" y="' + h[1] + '" width="' + h[2] + '" height="' + (96 - h[1]) + '" fill="' + h[3] + '"/><path d="M' + (h[0] - 2) + ' ' + h[1] + 'l' + (h[2] / 2 + 2) + ' -8l' + (h[2] / 2 + 2) + ' 8z" fill="#3a3238"/>' +
        '<rect class="jj-glow' + (h[0] % 3 ? " jj-g2" : "") + '" x="' + (h[0] + 5) + '" y="' + (h[1] + 6) + '" width="5" height="5" fill="#ffd98a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jj1)"/>' + stars(8) +
      /* Yonkers hills past McLean Av, a water tower on the ridge */
      '<path d="M0 82q60 -30 130 -16t140 -6t130 4v40H0z" fill="#3e4a5e"/>' + houses +
      '<g transform="translate(112 26)"><path d="M4 30l4 -18h16l4 18" stroke="#3a3238" stroke-width="2" fill="none"/><ellipse cx="16" cy="10" rx="13" ry="7" fill="#7f8a96"/><path d="M3 10q13 -12 26 0" fill="#9aa4ae"/></g>' +
      '<g fill="#2c4a34">' + [210, 250, 290, 330, 370].map((x, i) => '<ellipse cx="' + x + '" cy="' + (84 - (i % 2) * 6) + '" rx="26" ry="18"/>').join("") + '</g>' +
      /* the el: green IRT canopy on the right, track deck */
      '<rect x="0" y="88" width="400" height="8" fill="#3c5a44"/>' + train +
      '<rect x="0" y="172" width="400" height="7" fill="#f2c200"/><rect x="0" y="179" width="400" height="81" fill="#8d8a84"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 179l-20 81" stroke="#7d7a74" stroke-width="1"/>').join("") +
      '<path d="M210 0h190v20H210z" fill="#3c5a44"/><path d="M210 20h190" stroke="#2c4434" stroke-width="3"/>' +
      [226, 384].map(x => '<rect x="' + (x - 6) + '" y="20" width="12" height="160" fill="#3c5a44"/><rect x="' + (x - 9) + '" y="174" width="18" height="6" fill="#2c4434"/>').join("") +
      '<rect class="jj-flk" x="270" y="12" width="70" height="5" rx="2" fill="#fff8dc"/>' +
      /* the black station sign */
      '<path d="M268 20v10M352 20v10" stroke="#222" stroke-width="2"/><rect x="246" y="30" width="128" height="34" rx="3" fill="#111"/>' +
      '<text x="258" y="53" ' + font + ' font-size="16" fill="#fff">Woodlawn</text>' + bullet(352, 47, "4", GREEN4) +
      /* city-line sign down on the platform rail */
      '<rect x="22" y="200" width="104" height="36" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="74" y="215" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">CITY LINE AHEAD</text>' +
      '<text x="74" y="229" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">YONKERS ↑</text><rect x="70" y="236" width="8" height="24" fill="#555"/>' +
      '<rect class="jj-flk jj-flk2" x="150" y="226" width="110" height="5" rx="2" fill="#fff6c2" opacity=".4"/>',
      sky("jj1", "#1d2a52", "#f08a5d"));
  }

  /* 2. The set: two leather chairs at a low table, two broadcast mics on boom arms, the ON AIR light, cameras on the sides,
        and a live studio audience of about thirty seen from behind */
  function jjstudio() {
    const chair = (x, col) => '<g transform="translate(' + x + ' 0)"><rect x="-34" y="124" width="68" height="44" rx="12" fill="' + col + '"/><rect x="-40" y="140" width="14" height="40" rx="6" fill="' + col + '"/><rect x="26" y="140" width="14" height="40" rx="6" fill="' + col + '"/>' +
      '<rect x="-30" y="162" width="60" height="18" rx="5" fill="' + col + '"/><path d="M-26 180v12M26 180v12" stroke="#1a1414" stroke-width="4"/><path d="M-28 132q28 -8 56 0" stroke="#000" stroke-opacity=".25" stroke-width="2" fill="none"/></g>';
    const boom = (bx, mx, flip) => '<path d="M' + bx + ' 186v-70l' + (mx - bx) + ' -22" stroke="#2a2a2e" stroke-width="4" fill="none"/><rect x="' + (mx - 7) + '" y="80" width="14" height="28" rx="7" fill="#1b1b1f" stroke="#555" stroke-width="1.5" transform="rotate(' + (flip ? 18 : -18) + ' ' + mx + ' 94)"/>';
    let aud = "";
    const cols = ["#1a1716", "#141a22", "#221a18", "#18161e"];
    [[214, 10, 0.95], [232, 9, 1.1], [250, 8, 1.25]].forEach((row, r) => {
      const n = row[1], step = 400 / n;
      for (let i = 0; i < n; i++) aud += head(step / 2 + i * step + (r % 2 ? 10 : -6), row[0], row[2], cols[(i + r) % 4], "jj-bob" + ["", " jj-bob2", " jj-bob3"][(i + r) % 3]);
    });
    return svg(
      '<rect width="400" height="260" fill="#16100e"/>' +
      /* back wall: wood slats, shelves of records, a wide screen with a waveform */
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="0" width="16" height="150" fill="' + (i % 2 ? "#3a2418" : "#33201a") + '"/>').join("") +
      '<rect x="0" y="146" width="400" height="6" fill="#120c0a"/>' +
      '<rect x="124" y="16" width="152" height="62" rx="4" fill="#0a0c12" stroke="#2a2f3a" stroke-width="3"/>' +
      Array.from({ length: 26 }, (_, i) => '<rect class="jj-wv" style="animation-delay:-' + ((i * 0.17) % 0.8).toFixed(2) + 's" x="' + (132 + i * 5.4) + '" y="' + (34 + (i % 4) * 2) + '" width="3" height="' + (26 - (i % 4) * 4) + '" fill="' + (i % 6 === 0 ? GOLD : RED) + '"/>').join("") +
      [[18, 30], [302, 30]].map(p => '<rect x="' + p[0] + '" y="' + p[1] + '" width="80" height="4" fill="#5a3a26"/><rect x="' + p[0] + '" y="' + (p[1] + 34) + '" width="80" height="4" fill="#5a3a26"/>' +
        Array.from({ length: 9 }, (_, i) => '<rect x="' + (p[0] + 4 + i * 8.5) + '" y="' + (p[1] + 6 + (i % 3)) + '" width="6" height="' + (26 - (i % 3)) + '" fill="' + ["#c0392b", "#f2c94c", "#2d3436", "#e9e4d4", "#2e86de"][i % 5] + '"/>').join("") +
        Array.from({ length: 9 }, (_, i) => '<rect x="' + (p[0] + 4 + i * 8.5) + '" y="' + (p[1] + 42) + '" width="6" height="22" fill="' + ["#2d3436", "#e17055", "#dfe6e9", "#6c5ce7", "#fdcb6e"][i % 5] + '"/>').join("")).join("") +
      /* ON AIR light */
      '<rect x="172" y="88" width="56" height="18" rx="3" fill="#2a0c0a" stroke="#5a1c16"/><rect class="jj-glow" x="175" y="91" width="50" height="12" rx="2" fill="' + RED + '"/><text x="200" y="101" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" letter-spacing="2">ON AIR</text>' +
      /* rug, table, chairs, booms */
      '<ellipse cx="200" cy="196" rx="190" ry="34" fill="#3d2a22"/><ellipse cx="200" cy="196" rx="150" ry="24" fill="none" stroke="#5a4030" stroke-width="2"/>' +
      chair(110, "#5a1f1a") + chair(290, "#1f1a1a") +
      '<rect x="168" y="160" width="64" height="8" rx="3" fill="#6a4a32"/><path d="M176 168v22M224 168v22" stroke="#4a3222" stroke-width="4"/>' +
      '<rect x="182" y="150" width="10" height="12" rx="2" fill="#e9e4d4"/><rect x="206" y="152" width="10" height="10" rx="2" fill="#c9a24a"/>' +
      boom(150, 128, false) + boom(250, 272, true) +
      /* cameras on tripods */
      '<path d="M14 196l14 -50l14 50M28 146v50" stroke="#2a2a2e" stroke-width="3" fill="none"/><rect x="10" y="126" width="38" height="22" rx="3" fill="#232328"/><circle cx="50" cy="137" r="7" fill="#3a5a7a"/><circle class="jj-glow" cx="16" cy="131" r="2" fill="' + RED + '"/>' +
      '<path d="M358 196l14 -50l14 50M372 146v50" stroke="#2a2a2e" stroke-width="3" fill="none"/><rect x="352" y="126" width="38" height="22" rx="3" fill="#232328"/><circle cx="350" cy="137" r="7" fill="#3a5a7a"/><circle class="jj-glow jj-g2" cx="384" cy="131" r="2" fill="' + RED + '"/>' +
      '<path class="jj-sw" d="M60 0l-40 170h80z" fill="#fff3c8" opacity=".07"/><path class="jj-sw jj-sw2" d="M340 0l-40 170h80z" fill="#fff3c8" opacity=".07"/>' +
      aud,
      "");
  }

  /* 3. Bronx vs Yonkers: the Bronx on the left (brick towers, the el with a train running), Yonkers on the right (the Hudson, the Palisades
        across the water, the riverfront towers), facing each other over the city line like the two chairs on the show */
  function jjskyline() {
    const tower = (x, y, w, col, lit) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (186 - y) + '" fill="' + col + '"/>' +
      Array.from({ length: Math.floor((186 - y - 10) / 12) }, (_, r) => Array.from({ length: Math.floor((w - 4) / 8) }, (_, c) =>
        '<rect x="' + (x + 4 + c * 8) + '" y="' + (y + 6 + r * 12) + '" width="4" height="6" fill="' + ((r * 3 + c * 5 + x) % 7 < lit ? "#ffd98a" : "#2a2228") + '"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jj3)"/>' + stars(16) +
      '<circle cx="200" cy="54" r="16" fill="#fff4d6" opacity=".9"/>' +
      /* Yonkers side: Palisades cliffs across the Hudson, the river, riverfront towers */
      '<path d="M228 140l20 -28l30 -6l40 4l30 -10l52 6v34z" fill="#3a3a48"/><path d="M228 140h172v52H228z" fill="#24405e"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (240 + i * 26) + ' ' + (154 + (i % 3) * 10) + 'h14" stroke="#9ec4e8" stroke-width="1.5" opacity=".5"/>').join("") +
      '<g class="jj-boat"><path d="M352 172h30l-4 8h-22z" fill="#e8e4dc"/><rect x="360" y="164" width="12" height="8" fill="#d0c8b8"/></g>' +
      tower(236, 96, 26, "#4a4458", 3) + tower(266, 110, 22, "#544a5a", 2) + tower(292, 86, 30, "#463e52", 3) +
      '<path d="M226 186h174v6H226z" fill="#2a2a34"/>' +
      /* Bronx side: brick project towers and the el */
      tower(6, 70, 34, "#7a4232", 3) + tower(44, 96, 30, "#6e3a2c", 2) + tower(80, 80, 36, "#844634", 3) + tower(122, 104, 28, "#6a3a2e", 2) + tower(154, 92, 32, "#7a4232", 3) +
      '<rect x="0" y="150" width="200" height="8" fill="#2f3a32"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (10 + i * 36) + '" y="158" width="6" height="34" fill="#2f3a32"/>').join("") +
      '<svg x="0" y="0" width="200" height="260" overflow="hidden"><g class="jj-el"><rect x="0" y="134" width="120" height="16" rx="3" fill="#c9ced4"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (6 + i * 19) + '" y="138" width="12" height="6" fill="#ffe9a8"/>').join("") + '</g></svg>' +
      '<rect x="0" y="192" width="400" height="68" fill="#1c1a22"/>' +
      /* the city line between them */
      '<rect x="197" y="128" width="6" height="64" fill="#555"/>' +
      '<rect x="146" y="112" width="108" height="22" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="127" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">CITY LINE</text>' +
      '<path d="M190 140h-28l-8 9l8 9h28z" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/><path d="M184 149h-20m5 -4l-5 4l5 4" stroke="#fff" stroke-width="1.6" fill="none"/>' +
      '<path d="M210 140h28l8 9l-8 9h-28z" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/><path d="M216 149h20m-5 -4l5 4l-5 4" stroke="#fff" stroke-width="1.6" fill="none"/>' +
      tag("BRONX", 20, 236, 34, RED, -5) + tag("YONKERS", 222, 236, 32, BLUE, -4) +
      '<circle class="jj-glow" cx="98" cy="76" r="2" fill="' + RED + '"/><circle class="jj-glow jj-g2" cx="306" cy="82" r="2" fill="' + RED + '"/>',
      sky("jj3", "#0e1430", "#a2506a"));
  }

  /* 4. Show night: a hip-hop stage in the Garden, speaker stacks on both sides, the DJ booth with two turntables in the middle,
        two mics on stands up front waiting for Joe and Jada, the LED wall pulsing with a waveform, spotlights sweeping,
        confetti coming down and the crowd seen from behind with hands up */
  function jjarena() {
    const conf = Array.from({ length: 22 }, (_, i) => '<rect class="jj-cf' + ["", " jj-cf2", " jj-cf3"][i % 3] + '" x="' + (8 + i * 18) + '" y="' + ((i * 37) % 60) + '" width="5" height="3" fill="' + [RED, BLUE, GOLD, "#fff"][i % 4] + '" style="animation-delay:-' + ((i * 0.41) % 5).toFixed(2) + 's"/>').join("");
    const stack = x => '<g transform="translate(' + x + ' 0)"><rect x="0" y="60" width="54" height="128" rx="3" fill="#141418" stroke="#2c2c34" stroke-width="2"/>' +
      [78, 120, 160].map(y => '<circle cx="27" cy="' + y + '" r="' + (y === 160 ? 19 : 15) + '" fill="#0a0a0c" stroke="#3a3a44" stroke-width="3"/><circle class="jj-glow" cx="27" cy="' + y + '" r="5" fill="#2a2a32"/>').join("") + '</g>';
    const deck = x => '<circle cx="' + x + '" cy="150" r="17" fill="#0c0c10" stroke="#555" stroke-width="2"/><circle cx="' + x + '" cy="150" r="5" fill="' + RED + '"/><path d="M' + (x + 16) + ' 134l8 18" stroke="#c9ced6" stroke-width="2.5"/>';
    const mic = x => '<path d="M' + x + ' 200v-46" stroke="#c9ced6" stroke-width="3"/><path d="M' + (x - 12) + ' 202h24" stroke="#c9ced6" stroke-width="3"/><rect x="' + (x - 5) + '" y="140" width="10" height="16" rx="5" fill="#1b1b1f" stroke="#888"/>';
    let crowd = "";
    for (let i = 0; i < 11; i++) {
      const x = 18 + i * 36 + (i % 2 ? 6 : 0), up = i % 3 !== 1;
      crowd += '<g class="jj-bob' + ["", " jj-bob2", " jj-bob3"][i % 3] + '">' + (up ? '<path d="M' + (x - 8) + ' 236l-6 -26M' + (x + 8) + ' 236l6 -26" stroke="#2a2733" stroke-width="5" stroke-linecap="round"/>' : "") + '</g>' +
        head(x, 236, 1.15, ["#2a2733", "#302c3a", "#26232e"][i % 3], "jj-bob" + ["", " jj-bob2", " jj-bob3"][i % 3]);
    }
    return svg(
      '<rect width="400" height="260" fill="#08070c"/>' +
      /* upper rows of the Garden: tiny phone lights */
      Array.from({ length: 4 }, (_, r) => '<path d="M0 ' + (16 + r * 12) + 'q200 -' + (22 - r * 3) + ' 400 0" stroke="' + ["#18162a", "#1e1a32", "#18162a", "#1e1a32"][r] + '" stroke-width="10" fill="none"/>').join("") +
      Array.from({ length: 36 }, (_, i) => '<circle class="' + (i % 4 ? "" : "jj-glow") + '" cx="' + (6 + i * 11) + '" cy="' + (10 + (i * 7) % 44) + '" r="1" fill="#fff" opacity=".55"/>').join("") +
      /* the LED wall with the waveform */
      '<rect x="96" y="60" width="208" height="70" rx="4" fill="#0d0f18" stroke="#2a2f3a" stroke-width="3"/>' +
      Array.from({ length: 34 }, (_, i) => '<rect class="jj-wv" style="animation-delay:-' + ((i * 0.13) % 0.8).toFixed(2) + 's" x="' + (104 + i * 5.9) + '" y="' + (74 + (i % 5) * 3) + '" width="3.4" height="' + (42 - (i % 5) * 6) + '" fill="' + (i % 7 === 0 ? GOLD : i % 2 ? RED : BLUE) + '"/>').join("") +
      /* the stage deck */
      '<path d="M0 188h400v14H0z" fill="#1c1a22"/><rect x="0" y="186" width="400" height="3" fill="' + GOLD + '"/>' +
      stack(18) + stack(328) +
      /* DJ booth with two turntables and a mixer */
      '<rect x="134" y="160" width="132" height="28" rx="3" fill="#15171e" stroke="#2c2f3a" stroke-width="2"/><rect x="134" y="160" width="132" height="3" fill="' + RED + '"/>' +
      '<rect x="132" y="138" width="136" height="24" rx="3" fill="#22242c"/>' + deck(160) + deck(240) +
      '<rect x="186" y="142" width="28" height="16" rx="2" fill="#111"/>' + [192, 200, 208].map(x => '<path d="M' + x + ' 145v10" stroke="' + GOLD + '" stroke-width="2"/>').join("") +
      /* two mics up front */
      mic(110) + mic(290) +
      /* spotlights */
      '<path class="jj-sw" d="M70 0l-50 200h100z" fill="#fff3c8" opacity=".1"/><path class="jj-sw jj-sw2" d="M330 0l-50 200h100z" fill="' + BLUE + '" opacity=".12"/>' +
      '<path class="jj-sw jj-sw2" d="M200 0l-34 190h68z" fill="' + RED + '" opacity=".08"/>' +
      '<rect x="0" y="202" width="400" height="58" fill="#0c0b10"/>' + crowd +
      conf,
      "");
  }

  /* 5. Katonah Av and E 238 St in Woodlawn, a few blocks from the Yonkers line: green street signs, the streetlight, JOE & JADA tagged big
        on the brick, the crew tags around it, a yellow penalty flag on the sidewalk, the Yonkers hills behind */
  function jjcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#jj5)"/>' + stars(14) +
      '<path d="M0 96q70 -30 150 -14t130 -10t120 6v40H0z" fill="#2a3048"/>' +
      [[20, 80], [60, 74], [110, 82], [176, 76], [226, 70], [300, 74], [350, 80]].map((p, i) => '<rect x="' + p[0] + '" y="' + p[1] + '" width="22" height="' + (110 - p[1]) + '" fill="#363a52"/><path d="M' + (p[0] - 2) + ' ' + p[1] + 'l13 -8l13 8z" fill="#2a2a3c"/><rect class="jj-glow' + (i % 2 ? " jj-g2" : "") + '" x="' + (p[0] + 8) + '" y="' + (p[1] + 8) + '" width="6" height="6" fill="#ffd98a"/>').join("") +
      '<path d="M262 62v-26M256 44h12" stroke="#363a52" stroke-width="3"/><path d="M252 110v-46l10 -8l10 8v46z" fill="#363a52"/>' +
      /* storefront row with plain awnings */
      '<rect x="0" y="104" width="400" height="30" fill="#4a3a3a"/>' + [0, 80, 160, 240, 320].map((x, i) => '<path d="M' + (x + 4) + ' 110h72l-6 12h-60z" fill="' + ["#2e6b4a", "#7a2a2a", "#2a4a7a", "#6b5a2a", "#2e6b4a"][i] + '"/>' +
        Array.from({ length: 6 }, (_, k) => '<path d="M' + (x + 10 + k * 11) + ' 110l-2 12" stroke="#fff" stroke-opacity=".35" stroke-width="3"/>').join("") + '<rect class="jj-flk' + (i % 2 ? " jj-flk2" : "") + '" x="' + (x + 14) + '" y="124" width="50" height="8" fill="#ffe6a8" opacity=".55"/>').join("") +
      /* the tag wall */
      '<rect x="0" y="134" width="400" height="90" fill="#7a4232"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (142 + i * 8) + 'h400" stroke="#6a3628" stroke-width="1"/>').join("") +
      tag("JOE &amp; JADA", 20, 190, 52, GOLD, -6) + tag("CRACK &amp; KISS", 26, 216, 18, "#fff", -3) + tag("THIS AIN'T THAT", 176, 214, 18, BLUE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      /* yellow penalty flag on the sidewalk */
      '<g class="jj-flag"><path d="M196 244q10 -8 20 -2t20 -4l-4 14q-10 4 -20 0t-20 4z" fill="#ffd400" stroke="#7a6400"/><circle cx="214" cy="246" r="3" fill="#7a6400"/></g>' +
      /* streetlight and the sign pole */
      '<path d="M372 224v-150q0 -10 -12 -10h-18" stroke="#2f2f2f" stroke-width="5" fill="none"/><rect x="330" y="60" width="16" height="8" rx="3" fill="#444"/><ellipse class="jj-glow" cx="338" cy="72" rx="12" ry="5" fill="#ffe9a8" opacity=".8"/>' +
      '<rect x="318" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(276, 98, 92, "Katonah Av") + sign(282, 124, 80, "E 238 St") +
      '<g class="jj-sp"><circle cx="268" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="jj-sp jj-sp2"><circle cx="274" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("jj5", "#121a36", "#b4584a"));
  }

  window.SCENES = { jjstation: jjstation, jjstudio: jjstudio, jjskyline: jjskyline, jjarena: jjarena, jjcorner: jjcorner };
})();
