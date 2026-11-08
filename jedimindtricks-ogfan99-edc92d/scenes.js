/* Jedi Mind Tricks scenes (Regions tab: Philadelphia; South Philly). CSS classes prefixed jm- (the page's own anim-train is kept).
   1 Oregon station on the Broad Street Line, under S Broad St
   2 Stoupe's parents' basement, where the first JMT records were made and mail-order packages went out
   3 Irvine Auditorium at Penn (red-brick Gothic tower), where a 12-year-old Vinnie saw his first rap show
   4 The Vet (Veterans Stadium, South Philly's old concrete bowl, "wouldn't come to the Vet" - Monolith)
   5 S Broad St & Oregon Ave, JEDI MIND tagged, Marconi Plaza's old trees and lamps behind */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jmflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.jm-flk{animation:jmflick 2.6s infinite}.jm-flk2{animation-delay:.9s}' +
    '@keyframes jmglow{0%,100%{opacity:.45}50%{opacity:1}}.jm-glow{animation:jmglow 2.2s ease-in-out infinite}.jm-g2{animation-delay:-1.1s}' +
    '@keyframes jmspin{to{transform:rotate(360deg)}}.jm-spin{transform-box:fill-box;transform-origin:50% 50%;animation:jmspin 1.8s linear infinite}' +
    '@keyframes jmbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.jm-bob{animation:jmbob .7s ease-in-out infinite}.jm-bob2{animation-delay:-.35s}' +
    '@keyframes jmsweep{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.jm-sw{transform-box:fill-box;transform-origin:50% 0%;animation:jmsweep 3.6s ease-in-out infinite}.jm-sw2{animation-delay:-1.8s}' +
    '@keyframes jmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jm-sp{animation:jmspray 1.4s ease-out infinite}.jm-sp2{animation-delay:.45s}' +
    '@keyframes jmbar{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.jm-bar{transform-box:fill-box;transform-origin:50% 100%;animation:jmbar .6s ease-in-out infinite}' +
    '@keyframes jmleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-50px,190px) rotate(240deg)}}.jm-lf{transform-box:fill-box;animation:jmleaf 6.5s linear infinite}.jm-lf2{animation-delay:-2.2s}.jm-lf3{animation-delay:-4.3s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "jm-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const RED = "#d94a3a", BONE = "#d8c690", BLUE = "#5fa8d3", BSL = "#f26100";

  /* 1. Oregon station, Broad Street Line, underground at S Broad & Oregon: cream tile wall, orange band, black sign, orange-striped train sliding in */
  function jmstation() {
    const tr = '<g class="anim-train"><rect x="22" y="104" width="330" height="76" rx="8" fill="#cfd3d8" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (36 + i * 44) + '" y="116" width="30" height="26" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="22" y="150" width="330" height="6" fill="' + BSL + '"/><rect x="22" y="160" width="330" height="2" fill="' + BSL + '"/>' +
      '<rect x="332" y="108" width="20" height="70" rx="4" fill="#a3a9b0"/><circle cx="344" cy="168" r="3.5" fill="#fff6c2"/>' +
      '<rect x="96" y="108" width="40" height="7" rx="1" fill="#111"/><text x="116" y="114" text-anchor="middle" ' + font + ' font-size="5.5" fill="' + BSL + '">FERN ROCK</text></g>';
    return svg(
      '<rect width="400" height="260" fill="#ece2c8"/>' + Array.from({ length: 34 }, (_, i) => '<path d="M' + (i * 12) + ' 16v68" stroke="#d8cba8" stroke-width="1"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (26 + i * 11) + 'h400" stroke="#d8cba8" stroke-width="1"/>').join("") +
      '<rect x="0" y="0" width="400" height="16" fill="#2e2e30"/>' + [50, 170, 290].map((x, i) => '<rect class="jm-flk' + (i === 1 ? " jm-flk2" : "") + '" x="' + x + '" y="6" width="60" height="5" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="84" width="400" height="10" fill="' + BSL + '"/><rect x="0" y="94" width="400" height="96" fill="#26262a"/>' + tr +
      '<rect x="0" y="190" width="400" height="7" fill="#f2c200"/><rect x="0" y="197" width="400" height="63" fill="#8a8680"/>' +
      [30, 370].map(x => '<rect x="' + (x - 7) + '" y="16" width="14" height="174" fill="#45505a"/>').join("") +
      '<rect x="86" y="24" width="228" height="36" rx="3" fill="#111"/><text x="102" y="48" ' + font + ' font-size="17" fill="#fff">Oregon</text>' + badge(254, 42, "BSL", BSL) +
      '<text x="102" y="57" font-family="Helvetica, Arial, sans-serif" font-size="7" fill="#bbb">S Broad St &amp; Oregon Ave</text>' +
      '<rect x="140" y="212" width="120" height="6" rx="3" fill="#fff6c2" opacity=".45" class="jm-flk"/>',
      "");
  }

  /* 2. Stoupe's parents' basement: wood paneling, a bare bulb, the sampler and the turntable spinning, crates of records, mail-order boxes stacked for the fans */
  function jmbasement() {
    const crate = (x, y, c) => '<rect x="' + x + '" y="' + y + '" width="56" height="40" fill="#6a4a2a" stroke="#3a2614" stroke-width="2"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (x + 4 + i * 6.4) + '" y="' + (y - 10 + (i % 3) * 2) + '" width="5" height="16" fill="' + ["#111", c, "#2a2a2a", BONE][i % 4] + '"/>').join("") +
      '<path d="M' + x + ' ' + (y + 14) + 'h56M' + x + ' ' + (y + 28) + 'h56" stroke="#3a2614" stroke-width="1.5"/>';
    const box = (x, y, w, h) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#b98d58" stroke="#7a5a32" stroke-width="1.5"/><path d="M' + (x + w / 2) + ' ' + y + 'v' + h + '" stroke="#d9c08a" stroke-width="5" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="#4a3424"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20 + 10) + ' 0v190" stroke="#3a2818" stroke-width="2"/>').join("") +
      '<rect x="0" y="0" width="400" height="14" fill="#2a1e14"/><path d="M200 14v26" stroke="#222" stroke-width="2"/><circle class="jm-glow" cx="200" cy="46" r="9" fill="#ffe08a"/><circle cx="200" cy="46" r="40" fill="#ffe08a" opacity=".08"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#5a5450"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 50) + ' 190v70" stroke="#4a4440" stroke-width="1.5"/>').join("") +
      /* table with sampler + turntable */
      '<rect x="120" y="140" width="190" height="10" fill="#2a2a2e"/><path d="M128 150v52M302 150v52" stroke="#2a2a2e" stroke-width="6"/>' +
      '<rect x="132" y="112" width="70" height="28" rx="3" fill="#cfcbc2" stroke="#6b6b6b" stroke-width="1.5"/>' +
      Array.from({ length: 16 }, (_, i) => '<rect x="' + (156 + (i % 4) * 11) + '" y="' + (115 + Math.floor(i / 4) * 6) + '" width="8" height="4.5" rx="1" fill="' + (i === 5 || i === 10 ? RED : "#7a7a7a") + '" class="' + (i === 5 || i === 10 ? "jm-flk" : "") + '"/>').join("") +
      '<rect x="136" y="116" width="16" height="8" fill="#2a3a2a"/><rect class="jm-glow" x="137" y="117" width="14" height="6" fill="#7fdc8a" opacity=".6"/>' +
      '<rect x="212" y="110" width="92" height="30" rx="3" fill="#2a2a2e" stroke="#555" stroke-width="1.5"/><g class="jm-spin"><circle cx="246" cy="125" r="13" fill="#111"/><circle cx="246" cy="125" r="4" fill="' + RED + '"/><path d="M236 120l4 3" stroke="#444" stroke-width="1"/></g><path d="M292 114l-14 18" stroke="#bbb" stroke-width="2"/>' +
      crate(20, 168, RED) + crate(332, 168, BLUE) + crate(20, 124, BONE) +
      box(320, 92, 64, 40) + box(330, 56, 50, 36) + box(318, 132, 70, 30) +
      '<text x="352" y="116" text-anchor="middle" ' + font + ' font-size="6.5" fill="#5a3a1a">MAIL ORDER</text>' +
      '<rect x="60" y="40" width="54" height="64" fill="#1a1a1e" stroke="#333" stroke-width="2"/><circle cx="87" cy="60" r="12" fill="#333"/><circle cx="87" cy="88" r="7" fill="#333"/>' +
      '<g class="jm-bob"><text x="260" y="72" ' + font + ' font-size="16" fill="' + BONE + '" opacity=".9">&#9835;</text></g><g class="jm-bob jm-bob2"><text x="282" y="62" ' + font + ' font-size="12" fill="' + BONE + '" opacity=".7">&#9834;</text></g>',
      "");
  }

  /* 3. Irvine Auditorium at Penn, 34th & Spruce: dark red brick and terracotta Gothic, the big square tower with corner pinnacles, the arched doors lit for a show, the line out front bobbing */
  function jmirvine() {
    const pin = (x, y) => '<path d="M' + (x - 5) + ' ' + y + 'l5 -18l5 18z" fill="#7a3426"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jm3)"/>' + stars(26) +
      /* tower */
      '<rect x="166" y="34" width="68" height="160" fill="#8b3a2a"/>' + pin(170, 34) + pin(230, 34) + pin(200, 34) +
      '<rect x="166" y="34" width="68" height="6" fill="#c9b48a"/><rect x="166" y="96" width="68" height="4" fill="#c9b48a"/>' +
      [180, 200, 220].map(x => '<path d="M' + (x - 5) + ' 90v-34q5 -9 10 0v34z" fill="#2a1a24"/>').join("") +
      [180, 200, 220].map((x, i) => '<path class="jm-glow' + (i === 1 ? " jm-g2" : "") + '" d="M' + (x - 4) + ' 150v-34q4 -8 8 0v34z" fill="#ffcf7a"/>').join("") +
      /* wings */
      '<rect x="40" y="110" width="126" height="84" fill="#93402e"/><rect x="234" y="110" width="126" height="84" fill="#93402e"/>' +
      '<path d="M40 110l20 -18h86l20 18z" fill="#5a2a22"/><path d="M234 110l20 -18h86l20 18z" fill="#5a2a22"/>' +
      [56, 86, 116, 260, 290, 320].map(x => '<path d="M' + x + ' 170v-40q8 -12 16 0v40z" fill="#2a1a24"/><path d="M' + (x + 8) + ' 132v38" stroke="#c9b48a" stroke-width="1.5"/>').join("") +
      '<rect x="40" y="110" width="320" height="4" fill="#c9b48a"/>' +
      /* doors */
      '<path d="M178 194v-30q22 -24 44 0v30z" fill="#c9b48a"/><path d="M184 194v-26q16 -18 32 0v26z" fill="#ffd98a" class="jm-glow"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#6a6660"/><rect x="0" y="194" width="400" height="5" fill="#9a958c"/>' +
      Array.from({ length: 12 }, (_, i) => '<g class="jm-bob' + (i % 2 ? " jm-bob2" : "") + '"><circle cx="' + (60 + i * 26) + '" cy="' + (214 + (i % 3) * 4) + '" r="6" fill="#141418"/><rect x="' + (53 + i * 26) + '" y="' + (220 + (i % 3) * 4) + '" width="14" height="30" rx="5" fill="#141418"/></g>').join("") +
      '<path class="jm-sw" d="M200 0l-26 120h52z" fill="#fff6c2" opacity=".08"/>',
      sky("jm3", "#141a3a", "#6a4a6a"));
  }

  /* 4. The Vet: Veterans Stadium in South Philly, the round concrete bowl with its ramps, the light towers blazing, the scoreboard flashing, the parking lot */
  function jmvet() {
    return svg(
      '<rect width="400" height="260" fill="url(#jm4)"/>' + stars(30) +
      /* light towers */
      [60, 340].map((x, i) => '<path d="M' + x + ' 150v-110" stroke="#5a5e66" stroke-width="4"/><rect x="' + (x - 22) + '" y="28" width="44" height="18" fill="#2a2e36"/>' +
        Array.from({ length: 8 }, (_, j) => '<circle class="jm-flk' + ((i + j) % 2 ? " jm-flk2" : "") + '" cx="' + (x - 18 + (j % 4) * 12) + '" cy="' + (33 + Math.floor(j / 4) * 8) + '" r="3.5" fill="#fffbe0"/>').join("") +
        '<path d="M' + (x - 22) + ' 46l' + (i ? -60 : 60) + ' 90h' + (i ? 40 : -40) + 'z" fill="#fffbe0" opacity=".07"/>').join("") +
      /* the bowl */
      '<ellipse cx="200" cy="150" rx="170" ry="34" fill="#9a968c"/><rect x="30" y="112" width="340" height="40" fill="#b3aea2"/><ellipse cx="200" cy="112" rx="170" ry="26" fill="#cfcabc"/>' +
      '<ellipse cx="200" cy="112" rx="150" ry="18" fill="#3a3e46"/><ellipse cx="200" cy="114" rx="120" ry="12" fill="#2f7a3a"/>' +
      Array.from({ length: 14 }, (_, i) => '<path d="M' + (44 + i * 24) + ' 122v30" stroke="#8a867c" stroke-width="2"/>').join("") +
      Array.from({ length: 4 }, (_, i) => '<path d="M' + (50 + i * 92) + ' 152l30 -30" stroke="#8a867c" stroke-width="6"/>').join("") +
      '<path d="M30 132h340" stroke="#e8e4dc" stroke-width="2"/>' +
      /* scoreboard over the bowl */
      '<rect x="150" y="54" width="100" height="40" fill="#111" stroke="#555" stroke-width="2"/><path d="M170 94v14M230 94v14" stroke="#555" stroke-width="3"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect class="jm-bar" style="animation-delay:-' + (i * 0.11).toFixed(2) + 's" x="' + (160 + i * 8.4) + '" y="64" width="5" height="22" fill="' + (i % 3 ? RED : BONE) + '"/>').join("") +
      '<text x="200" y="62" text-anchor="middle" ' + font + ' font-size="6" fill="' + BLUE + '">THE VET</text>' +
      /* lot */
      '<rect x="0" y="184" width="400" height="76" fill="#3a3a40"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (20 + i * 46) + ' 196v30" stroke="#e8e4dc" stroke-width="2"/>').join("") +
      [40, 132, 270].map((x, i) => '<rect x="' + x + '" y="232" width="50" height="16" rx="4" fill="' + ["#5a6e8a", "#8a3a2a", "#6a6a6a"][i] + '"/><rect x="' + (x + 8) + '" y="226" width="30" height="10" rx="3" fill="#2a2e36"/>').join(""),
      sky("jm4", "#0c1028", "#3a2a4a"));
  }

  /* 5. S Broad St & Oregon Ave: the green signs, JEDI MIND tagged on a rowhouse side wall, Marconi Plaza's old trees and lamps behind, leaves coming down */
  function jmcorner() {
    const tree = (x, y, r, c) => '<rect x="' + (x - 4) + '" y="' + y + '" width="8" height="40" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 6) + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * .6) + '" cy="' + (y + 2) + '" r="' + (r * .7) + '" fill="' + c + '"/><circle cx="' + (x + r * .6) + '" cy="' + (y + 2) + '" r="' + (r * .7) + '" fill="' + c + '"/>';
    const lamp = x => '<path d="M' + x + ' 136v-50" stroke="#1e2a24" stroke-width="3"/><circle class="jm-glow" cx="' + x + '" cy="84" r="5" fill="#ffe7a0"/><circle cx="' + x + '" cy="84" r="12" fill="#ffe7a0" opacity=".12"/>';
    const leaves = Array.from({ length: 9 }, (_, i) => '<ellipse class="jm-lf' + ["", " jm-lf2", " jm-lf3"][i % 3] + '" cx="' + (30 + i * 44) + '" cy="' + (10 + (i * 23) % 50) + '" rx="4" ry="2.5" fill="' + ["#e2874c", "#d8b04a", "#b8502e"][i % 3] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jm5)"/>' + stars(18) +
      '<rect x="0" y="120" width="400" height="16" fill="#2f4a32"/>' +
      tree(40, 92, 28, "#2e5a34") + tree(110, 86, 32, "#336a3a") + tree(250, 90, 30, "#2e5a34") + tree(330, 84, 34, "#336a3a") + tree(180, 96, 22, "#2a5030") +
      lamp(76) + lamp(214) + lamp(296) +
      /* rowhouse side wall */
      '<rect x="0" y="132" width="290" height="92" fill="#7d4434"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h290" stroke="#6a382a" stroke-width="1"/>').join("") +
      '<rect x="0" y="128" width="290" height="6" fill="#4a2a20"/>' +
      tag("JEDI MIND", 14, 184, 38, RED, -6) + tag("JMT", 222, 214, 24, BONE, -4) + tag("LIVING LIFE", 22, 214, 17, "#fff", -3) + tag("IKON", 148, 214, 20, BLUE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/><path d="M0 248h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(298, 98, 84, "S Broad St") + sign(290, 124, 100, "Oregon Ave") +
      '<g class="jm-sp"><circle cx="196" cy="162" r="3" fill="' + RED + '" opacity=".7"/></g><g class="jm-sp jm-sp2"><circle cx="202" cy="156" r="2" fill="' + RED + '" opacity=".6"/></g>' +
      leaves,
      sky("jm5", "#101830", "#8a4a3a"));
  }

  window.SCENES = { jmstation: jmstation, jmbasement: jmbasement, jmirvine: jmirvine, jmvet: jmvet, jmcorner: jmcorner };
})();
