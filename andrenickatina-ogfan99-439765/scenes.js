/* andrenickatina scenes (Regions tab: The Bay Area; the Fillmore, San Francisco). CSS classes and ids prefixed an- (the page's own anim-train is kept).
   1 Fillmore St & Geary Blvd: the Muni 22 Fillmore trolley bus gliding in under its overhead wires, poles up, Geary dipping under the Fillmore St bridge.
   2 The Fillmore Jazz District, "Harlem of the West": Victorian storefronts on Fillmore St at night, a neon horn flickering, notes floating up.
   3 Alamo Square, up the hill from the Fillmore: the Painted Ladies in their pastel paint, the downtown skyline with the pyramid behind, fog drifting.
   4 Herbst Theatre in the War Memorial Veterans Building on Van Ness (where he cut his live record): grey Beaux-Arts colonnade, lanterns, searchlights sweeping.
   5 Fillmore St and Eddy St: green signs, NICKATINA tagged, St. Mary's Cathedral's white cross-shaped sails rising behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes anflick{0%,100%{opacity:1}44%{opacity:.85}48%{opacity:.25}52%{opacity:.95}70%{opacity:.6}}.an-flk{animation:anflick 2.6s infinite}.an-flk2{animation-delay:1.1s}' +
    '@keyframes ancar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.an-car{animation:ancar 6s linear infinite}.an-car2{animation-delay:-3s}' +
    '@keyframes ancarL{from{transform:translateX(540px)}to{transform:translateX(-160px)}}.an-carL{animation:ancarL 7.5s linear infinite}' +
    '@keyframes annote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-70px);opacity:0}}.an-note{animation:annote 3.6s ease-out infinite}.an-n2{animation-delay:-1.2s}.an-n3{animation-delay:-2.4s}' +
    '@keyframes anfog{0%,100%{transform:translateX(0)}50%{transform:translateX(-40px)}}.an-fog{animation:anfog 9s ease-in-out infinite}.an-fog2{animation-delay:-4.5s}' +
    '@keyframes anbird{0%{transform:translate(0,0)}100%{transform:translate(440px,-30px)}}.an-bird{animation:anbird 11s linear infinite}.an-bird2{animation-delay:-5.5s}' +
    '@keyframes answeep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.an-beam{transform-box:fill-box;transform-origin:50% 100%;animation:answeep 4.5s ease-in-out infinite}.an-beam2{animation-delay:-2.25s}' +
    '@keyframes anblink{0%,100%{opacity:.25}50%{opacity:1}}.an-bl{animation:anblink 1.8s ease-in-out infinite}.an-bl2{animation-delay:-.9s}' +
    '@keyframes anspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.an-sp{animation:anspray 1.4s ease-out infinite}.an-sp2{animation-delay:.45s}.an-sp3{animation-delay:.9s}' +
    '@keyframes anwire{0%,100%{transform:translateY(0)}50%{transform:translateY(1.5px)}}.an-wire{animation:anwire 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  /* a two-storey Victorian: body colour, trim colour, bay window, gable roof */
  const vic = (x, y, w, h, body, trim, roof) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + body + '"/>' +
      '<path d="M' + (x - 3) + ' ' + y + 'L' + (x + w / 2) + ' ' + (y - w * 0.55) + 'L' + (x + w + 3) + ' ' + y + 'z" fill="' + (roof || body) + '" stroke="' + trim + '" stroke-width="2"/>' +
      '<circle cx="' + (x + w / 2) + '" cy="' + (y - w * 0.22) + '" r="' + (w * 0.09) + '" fill="#2a3340" stroke="' + trim + '" stroke-width="1.5"/>' +
      '<rect x="' + (x - 2) + '" y="' + (y - 2) + '" width="' + (w + 4) + '" height="4" fill="' + trim + '"/>';
    for (let r = 0; r < 2; r++) {
      const wy = y + 8 + r * (h / 2 - 2);
      s += '<rect x="' + (x + w * 0.14) + '" y="' + wy + '" width="' + (w * 0.26) + '" height="' + (h / 2 - 16) + '" rx="2" fill="#2a3340" stroke="' + trim + '" stroke-width="1.5"/>' +
        '<rect x="' + (x + w * 0.6) + '" y="' + wy + '" width="' + (w * 0.26) + '" height="' + (h / 2 - 16) + '" rx="2" fill="#2a3340" stroke="' + trim + '" stroke-width="1.5"/>';
    }
    return s + '<rect x="' + (x - 2) + '" y="' + (y + h / 2 - 3) + '" width="' + (w + 4) + '" height="3" fill="' + trim + '"/>';
  };
  const RED = "#ff4d4d", GOLD = "#f5d04a", VIO = "#9b7bff", MUNI = "#d31245";

  /* 1. Fillmore St & Geary Blvd: Muni 22 trolley bus under its wires, Geary in the cut below the Fillmore St bridge */
  function anstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (58 + i * 42) + '" y="104" width="30" height="26" rx="3" fill="#24303a"/>').join("");
    const bus = '<g class="anim-train">' +
      '<path d="M118 98L96 54M150 98L128 54" stroke="#3a3f45" stroke-width="3"/><circle cx="96" cy="54" r="2.5" fill="#3a3f45"/><circle cx="128" cy="54" r="2.5" fill="#3a3f45"/>' +
      '<rect x="40" y="94" width="300" height="10" rx="4" fill="#cfd4d8"/>' +
      '<path d="M40 100h284q20 0 22 22v28H40z" fill="#eef0f2" stroke="#7d868e" stroke-width="2"/>' + wins +
      '<rect x="40" y="134" width="306" height="8" fill="' + MUNI + '"/><rect x="40" y="142" width="306" height="4" fill="#3a3f45"/>' +
      '<path d="M312 104h26q4 2 5 20h-31z" fill="#24303a"/><rect x="300" y="104" width="8" height="38" fill="#c9ced3"/>' +
      '<rect x="306" y="96" width="30" height="10" rx="2" fill="#111"/><text x="321" y="104" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb000">22</text>' +
      '<circle cx="84" cy="150" r="10" fill="#111"/><circle cx="84" cy="150" r="4" fill="#888"/><circle cx="290" cy="150" r="10" fill="#111"/><circle cx="290" cy="150" r="4" fill="#888"/>' +
      '<circle cx="342" cy="138" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ans1)"/>' +
      vic(6, 70, 46, 82, "#e7c9a0", "#fff", "#a0573a") + vic(340, 64, 54, 88, "#9fc3d6", "#fff", "#4a6a7a") +
      '<g class="an-wire"><path d="M0 52q200 8 400 0" stroke="#222" stroke-width="1.5" fill="none"/><path d="M0 56q200 8 400 0" stroke="#222" stroke-width="1.5" fill="none"/></g>' +
      '<rect x="216" y="30" width="5" height="128" fill="#5a6066"/><path d="M218 34h40" stroke="#5a6066" stroke-width="3"/>' +
      bus +
      '<rect x="0" y="158" width="400" height="10" fill="#bdb6a8"/><rect x="0" y="168" width="400" height="12" fill="#8c877e"/>' +
      '<path d="M0 180h400v80H0z" fill="#3e3f45"/>' +
      '<path d="M120 180h160l26 34H94z" fill="#2b2c31"/><path d="M200 186v24" stroke="#f2d04a" stroke-width="2" stroke-dasharray="6 6"/>' +
      '<rect x="88" y="176" width="224" height="6" fill="#77746c"/>' +
      car("an-car", 0, 236, RED) + car("an-carL", 0, 214, "#7fb0d6") +
      '<rect x="6" y="186" width="10" height="70" fill="#5a6066"/><rect x="0" y="186" width="22" height="14" rx="2" fill="#ffd400"/><text x="11" y="197" text-anchor="middle" ' + font + ' font-size="10" fill="#111">22</text>' +
      '<rect x="98" y="16" width="204" height="34" rx="3" fill="#111"/><text x="108" y="33" ' + font + ' font-size="13" fill="#fff">Fillmore St &amp; Geary Blvd</text>' +
      '<text x="108" y="45" ' + font + ' font-size="7.5" fill="#cfd6dd">MUNI · INBOUND · THE FILLMORE</text>' +
      '<circle cx="290" cy="33" r="10" fill="' + MUNI + '"/><text x="290" y="37" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">22</text>',
      sky("ans1", "#f7a071", "#5b3a6a"));
  }

  /* 2. The Fillmore Jazz District: Victorian storefronts at night, a neon horn, notes floating up */
  function anjazz() {
    const lamp = (x) => '<rect x="' + (x - 2) + '" y="120" width="4" height="96" fill="#2b2b33"/><circle cx="' + x + '" cy="118" r="7" fill="#ffe7a3" class="an-flk an-flk2"/><circle cx="' + x + '" cy="118" r="16" fill="#ffe7a3" opacity=".18"/>';
    const note = (x, y, cls, c) => '<g class="an-note ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="5" fill="' + c + '"/><path d="M' + (x + 4.5) + ' ' + y + 'v-18l10 4v5l-10 -4" fill="' + c + '" stroke="' + c + '" stroke-width="1.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ans2)"/>' +
      Array.from({ length: 26 }, (_, i) => '<circle cx="' + ((i * 61) % 400) + '" cy="' + (8 + (i * 23) % 50) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      vic(10, 96, 70, 120, "#5a3b5e", GOLD, "#3a2540") + vic(92, 86, 76, 130, "#2f4a5e", "#e6e0d0", "#1f3040") +
      vic(232, 90, 72, 126, "#6b2f2f", GOLD, "#4a1e1e") + vic(316, 98, 74, 118, "#35553f", "#e6e0d0", "#22392a") +
      '<rect x="176" y="70" width="50" height="146" fill="#24222c"/><rect x="176" y="70" width="50" height="6" fill="' + GOLD + '"/>' +
      '<g class="an-flk"><rect x="182" y="84" width="38" height="96" rx="4" fill="none" stroke="' + RED + '" stroke-width="3"/>' +
      '<text x="201" y="104" text-anchor="middle" ' + font + ' font-size="12" fill="' + RED + '">J</text><text x="201" y="122" text-anchor="middle" ' + font + ' font-size="12" fill="' + RED + '">A</text>' +
      '<text x="201" y="140" text-anchor="middle" ' + font + ' font-size="12" fill="' + RED + '">Z</text><text x="201" y="158" text-anchor="middle" ' + font + ' font-size="12" fill="' + RED + '">Z</text></g>' +
      '<g class="an-flk an-flk2"><rect x="92" y="58" width="8" height="6" rx="1" fill="' + GOLD + '"/><path d="M100 61h40" stroke="' + GOLD + '" stroke-width="4"/><path d="M106 61q0 10 14 10h14" stroke="' + GOLD + '" stroke-width="3" fill="none"/>' +
      '<path d="M138 61l18 -12v24z" fill="' + GOLD + '"/><rect x="112" y="50" width="4" height="9" fill="' + GOLD + '"/><rect x="119" y="50" width="4" height="9" fill="' + GOLD + '"/><rect x="126" y="50" width="4" height="9" fill="' + GOLD + '"/></g>' +
      note(140, 60, "", GOLD) + note(220, 64, "an-n2", "#7fd4ff") + note(300, 70, "an-n3", RED) +
      '<rect x="0" y="216" width="400" height="10" fill="#6a6560"/><rect x="0" y="226" width="400" height="34" fill="#2a2a30"/>' +
      lamp(86) + lamp(312) +
      '<path d="M0 244h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#ffe7a3">FILLMORE ST · HARLEM OF THE WEST</text>',
      sky("ans2", "#0d0b1e", "#3b1e3e"));
  }

  /* 3. Alamo Square: the Painted Ladies on Steiner St, the downtown skyline with the pyramid behind, fog drifting */
  function anladies() {
    const cols = [["#8fc1e3", "#fff", "#3e6a8a"], ["#f3e2a6", "#fff", "#a07a3a"], ["#f2b8a2", "#fff", "#9a4a3a"], ["#b9d8a8", "#fff", "#4a7a4a"], ["#d8c4ea", "#fff", "#6a4a8a"], ["#f6d2a0", "#fff", "#9a6a2a"], ["#9fd6cf", "#fff", "#3a7a72"]];
    let row = "";
    cols.forEach((c, i) => { const x = 24 + i * 52, y = 132 - i * 7; row += vic(x, y, 46, 92 + i * 7, c[0], c[1], c[2]); });
    const city = '<g fill="#7d8aa0">' +
      '<rect x="40" y="78" width="22" height="54"/><rect x="66" y="66" width="18" height="66"/><rect x="88" y="84" width="26" height="48"/><rect x="118" y="60" width="20" height="72"/>' +
      '<rect x="230" y="70" width="24" height="62"/><rect x="258" y="82" width="20" height="50"/><rect x="282" y="64" width="22" height="68"/><rect x="330" y="80" width="30" height="52"/></g>' +
      '<path d="M176 132L190 28L204 132z" fill="#9aa6b8"/><path d="M186 132l4 -104l4 104z" fill="#b8c2d0"/><path d="M182 74h16" stroke="#7d8aa0" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ans3)"/>' + city +
      '<g class="an-fog"><ellipse cx="120" cy="96" rx="90" ry="12" fill="#fff" opacity=".45"/></g><g class="an-fog an-fog2"><ellipse cx="320" cy="104" rx="80" ry="10" fill="#fff" opacity=".4"/></g>' +
      '<path d="M0 132h400v20H0z" fill="#6f8f5a"/>' + row +
      '<path d="M0 224q100 -14 200 -6t200 -4v46H0z" fill="#5f9a46"/><path d="M0 240q120 -10 220 -2t180 -2v24H0z" fill="#4c8438"/>' +
      '<g fill="#2f5f2a"><circle cx="40" cy="226" r="14"/><circle cx="360" cy="224" r="16"/><rect x="38" y="226" width="4" height="16" fill="#5a3a22"/><rect x="358" y="224" width="4" height="18" fill="#5a3a22"/></g>' +
      '<g class="an-bird"><path d="M-20 40q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="an-bird an-bird2"><path d="M-20 56q4 -4 8 0q4 -4 8 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="18" text-anchor="middle" ' + font + ' font-size="10" fill="#2a3a4a">ALAMO SQUARE · STEINER ST · WESTERN ADDITION</text>',
      sky("ans3", "#a9d4ef", "#eaf3f6"));
  }

  /* 4. Herbst Theatre, War Memorial Veterans Building on Van Ness: grey Beaux-Arts colonnade, lanterns, searchlights */
  function anherbst() {
    const col = (x) => '<rect x="' + x + '" y="88" width="9" height="66" fill="#d9d6cc"/><rect x="' + (x - 2) + '" y="84" width="13" height="5" fill="#c4c0b4"/><rect x="' + (x - 2) + '" y="153" width="13" height="4" fill="#c4c0b4"/>';
    const arch = (x) => '<path d="M' + x + ' 216v-34a12 12 0 0 1 24 0v34z" fill="#2a2830" stroke="#a8a49a" stroke-width="2"/><rect x="' + (x + 4) + '" y="190" width="16" height="26" fill="#ffd98a" opacity=".55"/>';
    let cols = ""; for (let i = 0; i < 10; i++) cols += col(64 + i * 30 + (i % 2) * 0);
    let arches = ""; for (let i = 0; i < 7; i++) arches += arch(70 + i * 40);
    return svg(
      '<rect width="400" height="260" fill="url(#ans4)"/>' +
      '<g class="an-beam" ><path d="M86 216L70 20L102 20z" fill="#fff6c8" opacity=".18"/></g><g class="an-beam an-beam2"><path d="M314 216L298 20L330 20z" fill="#fff6c8" opacity=".18"/></g>' +
      '<path d="M40 70h320l-14 -18H54z" fill="#5b6a74"/><rect x="46" y="70" width="308" height="14" fill="#cbc7bb"/>' +
      '<rect x="50" y="84" width="300" height="74" fill="#b9b5aa"/>' + cols +
      '<rect x="40" y="156" width="320" height="10" fill="#cbc7bb"/><rect x="44" y="166" width="312" height="52" fill="#bdb9ae"/>' + arches +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (52 + i * 96) + '" y="166" width="2" height="52" fill="#a8a49a"/>').join("") +
      '<g class="an-bl"><circle cx="58" cy="186" r="5" fill="#ffd98a"/></g><g class="an-bl an-bl2"><circle cx="342" cy="186" r="5" fill="#ffd98a"/></g>' +
      '<rect x="140" y="58" width="120" height="12" fill="#3e4a52"/><text x="200" y="67.5" text-anchor="middle" ' + font + ' font-size="8" fill="#e8e2d0">VETERANS BUILDING</text>' +
      '<rect x="0" y="218" width="400" height="8" fill="#8c877e"/><rect x="0" y="226" width="400" height="34" fill="#34343a"/>' +
      '<g fill="#14121a">' + Array.from({ length: 14 }, (_, i) => '<circle cx="' + (30 + i * 26) + '" cy="' + (232 + (i % 3) * 2) + '" r="5"/><rect x="' + (25 + i * 26) + '" y="' + (236 + (i % 3) * 2) + '" width="10" height="20" rx="4"/>').join("") + '</g>' +
      '<rect x="124" y="194" width="152" height="16" rx="2" fill="#111"/><text x="200" y="205.5" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">HERBST THEATRE · LIVE</text>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#e8e2f6">VAN NESS AVE · CIVIC CENTER</text>',
      sky("ans4", "#151530", "#4a3a6a"));
  }

  /* 5. Fillmore St and Eddy St: green signs, NICKATINA tagged, St. Mary's Cathedral's white sails behind */
  function ancorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ans5)"/>' +
      '<path d="M142 150Q190 118 195 24h6Q206 118 254 150z" fill="#eef0ee" stroke="#b9bfc0" stroke-width="2"/>' +
      '<path d="M198 26v124M170 150Q194 110 196 30M226 150Q202 110 200 30" stroke="#b9bfc0" stroke-width="1.5" fill="none"/><path d="M197 40v100" stroke="#8fb0d6" stroke-width="3"/>' +
      '<path d="M196 10h4v14h-4zM191 14h14v3h-14z" fill="#c9ced0"/>' +
      '<rect x="132" y="150" width="132" height="12" fill="#d9dcda"/>' +
      '<rect x="0" y="96" width="120" height="120" fill="#7a4a3a"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (104 + i * 14) + 'h120" stroke="#5e372b" stroke-width="1"/>').join("") +
      tag("NICKATINA", 6, 176, 19, RED, -8) + tag("KHAN!", 30, 128, 18, GOLD, -4) + tag("FILLMOE", 22, 206, 15, VIO, -3) +
      '<rect x="280" y="104" width="120" height="112" fill="#c8b48a"/>' + Array.from({ length: 3 }, (_, i) => '<rect x="' + (292 + i * 36) + '" y="118" width="22" height="30" fill="#2a3340"/><rect x="' + (292 + i * 36) + '" y="164" width="22" height="30" fill="#2a3340"/>').join("") +
      '<rect x="0" y="216" width="400" height="10" fill="#9a958b"/><rect x="0" y="226" width="400" height="34" fill="#3a3a40"/>' +
      car("an-car an-car2", 0, 238, VIO) +
      '<rect x="196" y="112" width="5" height="114" fill="#5a6066"/>' + sign(150, 96, 98, "FILLMORE ST") + sign(178, 120, 74, "EDDY ST") +
      '<g class="an-sp"><circle cx="112" cy="160" r="3" fill="' + RED + '" opacity=".8"/></g><g class="an-sp an-sp2"><circle cx="118" cy="150" r="2.5" fill="' + GOLD + '" opacity=".8"/></g><g class="an-sp an-sp3"><circle cx="106" cy="168" r="2" fill="' + VIO + '" opacity=".8"/></g>' +
      '<path d="M108 182l10 -24l6 2l-8 24z" fill="#ddd" stroke="#333" stroke-width="1"/><rect x="116" y="152" width="8" height="8" rx="2" fill="' + RED + '"/>',
      sky("ans5", "#ffb27a", "#7a5aa0"));
  }

  window.SCENES = { anstation: anstation, anjazz: anjazz, anladies: anladies, anherbst: anherbst, ancorner: ancorner };
})();
