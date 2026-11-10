/* Kiana Ledé scenes (Regions tab: Los Angeles + SoCal — no Arizona region yet). Born "on the outskirts of Phoenix, Arizona", went to Mountain Pointe High School
   (Ahwatukee, Tempe Union district; colors maroon + gold, "the Pride"), won the KIDZ STAR USA contest in 2011, moved to North Hollywood at 16.
   On "Forfeit." she says where she's from: the Arizona desert. CSS classes prefixed kl- (the page's own anim-train is kept).
   0 Mill Ave/3rd St (Valley Metro A Line, Tempe): street-level platform with shade canopies, a light-rail car sliding in, black sign with the blue A bullet, Tempe Butte behind.
   1 Mountain Pointe High School: maroon + gold walls, the Pride lion banner, a stage spotlight on a mic, South Mountain ridge behind.
   2 Tempe Town Lake: the Mill Avenue bridge arches over the water, a rower gliding, sun going down.
   3 Camelback Mountain: the red-rock camel hump at sunset, saguaros, heat shimmer, a hawk circling.
   4 E Knox Rd and S 40th St in Ahwatukee: green signs, KIANA LEDÉ tagged on a block wall, saguaro, South Mountain with its blinking radio towers behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes klglow{0%,100%{opacity:.45}50%{opacity:1}}.kl-glow{animation:klglow 2.6s ease-in-out infinite}.kl-g2{animation-delay:-1.3s}' +
    '@keyframes klblink{0%,60%{opacity:1}61%,100%{opacity:.15}}.kl-blink{animation:klblink 1.6s steps(1) infinite}.kl-b2{animation-delay:-.8s}' +
    '@keyframes klrow{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.kl-row{animation:klrow 12s linear infinite}' +
    '@keyframes klrip{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.kl-rip{animation:klrip 3.5s linear infinite}.kl-r2{animation-duration:5s}' +
    '@keyframes klhawk{0%{transform:translate(0,0)}25%{transform:translate(40px,-8px)}50%{transform:translate(80px,0)}75%{transform:translate(40px,8px)}100%{transform:translate(0,0)}}.kl-hawk{animation:klhawk 9s ease-in-out infinite}' +
    '@keyframes klheat{0%,100%{transform:translateY(0);opacity:.25}50%{transform:translateY(-3px);opacity:.5}}.kl-heat{animation:klheat 2.2s ease-in-out infinite}.kl-h2{animation-delay:-1.1s}' +
    '@keyframes klnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.kl-note{animation:klnote 3.4s ease-out infinite}.kl-n2{animation-delay:-1.1s}.kl-n3{animation-delay:-2.2s}' +
    '@keyframes klspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kl-sp{animation:klspray 1.4s ease-out infinite}.kl-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const ORANGE = "#ff9f6b", LAV = "#b58cff", TEAL = "#4fd1c5", MAROON = "#7a1f2b", GOLD = "#e8b84a", ABLUE = "#1f6fc5";
  /* saguaro: trunk + two arms */
  const saguaro = (x, y, h, c) => '<g fill="' + (c || "#3f6b3a") + '"><rect x="' + (x - 5) + '" y="' + (y - h) + '" width="10" height="' + h + '" rx="5"/>' +
    '<path d="M' + (x - 5) + ' ' + (y - h * .45) + 'h-9a4 4 0 0 1 -4 -4v-' + (h * .25) + 'a4 4 0 0 1 8 0v' + (h * .17) + 'h5z"/>' +
    '<path d="M' + (x + 5) + ' ' + (y - h * .6) + 'h8a4 4 0 0 0 4 -4v-' + (h * .2) + 'a4 4 0 0 0 -8 0v' + (h * .13) + 'h-4z"/></g>';
  const note = (x, y, c, k) => '<g class="kl-note ' + k + '"><path d="M' + x + ' ' + y + 'v-16l10 -3v16" stroke="' + c + '" stroke-width="2.2" fill="none"/><circle cx="' + (x - 2.5) + '" cy="' + y + '" r="3.5" fill="' + c + '"/><circle cx="' + (x + 7.5) + '" cy="' + (y - 3) + '" r="3.5" fill="' + c + '"/></g>';
  /* South Mountain ridge with radio towers */
  const southMtn = (y, fill, lights) => '<path d="M0 ' + y + 'l40 -14l30 6l50 -22l40 10l40 -18l50 14l40 -8l50 12l60 -6v40h-400z" fill="' + fill + '"/>' +
    [[120, y - 30], [200, y - 38], [252, y - 26]].map(([x, t], i) => '<path d="M' + x + ' ' + (t + 16) + 'l3 -34l3 34" stroke="#555" stroke-width="1.6" fill="none"/>' +
      (lights ? '<circle class="kl-blink' + (i % 2 ? " kl-b2" : "") + '" cx="' + (x + 3) + '" cy="' + (t - 18) + '" r="2.6" fill="#ff3b3b"/>' : '')).join("");

  /* 0. Mill Ave/3rd St, Valley Metro A Line */
  function klstop() {
    const train = '<g class="anim-train"><rect x="20" y="130" width="270" height="66" rx="14" fill="#e9ecef" stroke="#7a828c" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (38 + i * 40) + '" y="142" width="30" height="24" rx="3" fill="#24303d"/>').join("") +
      '<path d="M20 176h270" stroke="' + ABLUE + '" stroke-width="7"/><path d="M20 185h270" stroke="#9aa3ad" stroke-width="3"/>' +
      '<rect x="274" y="140" width="12" height="26" rx="3" fill="#24303d"/><circle cx="284" cy="188" r="3.5" fill="#fff6c2"/>' +
      '<path d="M120 130l14 -16h40l14 16" stroke="#555" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kl0)"/>' +
      '<circle cx="330" cy="58" r="20" fill="#ffe1a8" opacity=".9"/>' +
      /* Tempe Butte with the A */
      '<path d="M210 120l30 -46l26 8l24 -20l28 30l40 6l42 22z" fill="#9a5a3a"/><path d="M282 94l7 -18l7 18m-11 -6h8" stroke="' + GOLD + '" stroke-width="3.5" fill="none" stroke-linejoin="round"/>' +
      '<path d="M0 120l40 -20l50 8l50 -16l60 28z" fill="#b8865a" opacity=".6"/>' +
      '<rect x="0" y="118" width="400" height="12" fill="#c9b79a"/>' +
      /* canopies */
      '<path d="M296 92l50 -12l50 12z" fill="' + ABLUE + '"/><rect x="300" y="92" width="4" height="106" fill="#666"/><rect x="388" y="92" width="4" height="106" fill="#666"/>' +
      '<path d="M296 92l50 -12l50 12" stroke="#d9e4ef" stroke-width="2" fill="none"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#8c8478"/><rect x="0" y="196" width="400" height="6" fill="#e8d84a"/><path d="M0 222h400M0 240h400" stroke="#5a544a" stroke-width="3"/>' +
      saguaro(330, 196, 46) +
      train +
      '<rect x="18" y="14" width="250" height="38" rx="3" fill="#111"/>' +
      '<circle cx="40" cy="33" r="12" fill="' + ABLUE + '"/><text x="40" y="38.5" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">A</text>' +
      '<text x="60" y="30" ' + font + ' font-size="13" fill="#fff">Mill Ave/3rd St</text><text x="60" y="45" font-family="Helvetica, Arial, sans-serif" font-size="9" fill="#cfd6de">Valley Metro Rail · Tempe</text>',
      sky("kl0", "#5aa0d8", "#f6c89a"));
  }

  /* 1. Mountain Pointe High School */
  function klschool() {
    return svg(
      '<rect width="400" height="260" fill="url(#kl1)"/>' +
      southMtn(116, "#7a5a4a", false) +
      '<rect x="40" y="104" width="320" height="100" fill="#d9c4a0"/><rect x="40" y="104" width="320" height="14" fill="' + MAROON + '"/>' +
      '<rect x="40" y="190" width="320" height="14" fill="' + MAROON + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (58 + i * 50) + '" y="128" width="30" height="22" fill="#4a5a6a"/>').join("") +
      '<rect x="168" y="152" width="64" height="52" fill="#3a2a2a"/><rect x="198" y="152" width="4" height="52" fill="' + GOLD + '"/>' +
      '<text x="200" y="115" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">MOUNTAIN POINTE HIGH SCHOOL</text>' +
      /* Pride banner with a lion paw */
      '<rect x="72" y="150" width="44" height="40" fill="' + MAROON + '" stroke="' + GOLD + '" stroke-width="2"/><ellipse cx="94" cy="174" rx="8" ry="7" fill="' + GOLD + '"/>' +
      [[84, 163], [91, 159], [98, 159], [105, 163]].map(([x, y]) => '<circle cx="' + x + '" cy="' + y + '" r="3" fill="' + GOLD + '"/>').join("") +
      '<text x="94" y="188" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">PRIDE</text>' +
      '<rect x="284" y="150" width="44" height="40" fill="' + GOLD + '" stroke="' + MAROON + '" stroke-width="2"/><text x="306" y="168" text-anchor="middle" ' + font + ' font-size="7" fill="' + MAROON + '">KIDZ</text><text x="306" y="179" text-anchor="middle" ' + font + ' font-size="7" fill="' + MAROON + '">STAR</text>' +
      '<rect x="0" y="204" width="400" height="56" fill="#c8a878"/>' +
      /* spotlight + mic */
      '<path class="kl-glow" d="M200 0l-40 252h80z" fill="#fff6d6" opacity=".35"/>' +
      '<rect x="198" y="214" width="4" height="34" fill="#333"/><rect x="194" y="200" width="12" height="18" rx="6" fill="#444"/><path d="M188 248h24" stroke="#333" stroke-width="4"/>' +
      note(230, 200, LAV, "") + note(250, 196, ORANGE, "kl-n2") + note(160, 204, TEAL, "kl-n3") +
      saguaro(26, 214, 50) + saguaro(378, 214, 40),
      sky("kl1", "#6fb0e0", "#f2d0a4"));
  }

  /* 2. Tempe Town Lake + Mill Avenue bridges */
  function kllake() {
    const arches = (y, c) => Array.from({ length: 5 }, (_, i) => '<path d="M' + (40 + i * 66) + ' ' + y + 'a33 26 0 0 1 66 0" fill="none" stroke="' + c + '" stroke-width="7"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kl2)"/>' +
      '<circle cx="300" cy="96" r="24" fill="#ffd27a"/>' +
      '<path d="M0 118l50 -28l40 8l40 -18l40 24z" fill="#8a5a4a"/><path d="M260 118l40 -22l30 6l40 -14l30 30z" fill="#7a4a3a"/>' +
      '<rect x="0" y="118" width="400" height="142" fill="#2f6f9a"/>' +
      '<rect x="20" y="104" width="360" height="10" fill="#cdbfa8"/>' + arches(140, "#d8cbb4") +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (37 + i * 66) + '" y="110" width="7" height="34" fill="#cdbfa8"/>').join("") +
      '<rect x="0" y="144" width="400" height="116" fill="#24607f" opacity=".6"/>' +
      '<path d="M280 150h40M270 160h60M286 170h30" stroke="#ffd27a" stroke-width="2.5" opacity=".75"/>' +
      '<g class="kl-rip"><path d="M0 196q10 -4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#9fd0ec" stroke-width="2" fill="none"/></g>' +
      '<g class="kl-rip kl-r2"><path d="M0 222q10 -4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#bfe2f4" stroke-width="2" fill="none"/></g>' +
      '<g class="kl-row"><path d="M0 184h56l-6 6h-44z" fill="' + LAV + '"/><circle cx="26" cy="176" r="4" fill="#2a2a2a"/><path d="M26 180v4M8 178l40 12" stroke="#2a2a2a" stroke-width="2"/></g>' +
      '<rect x="0" y="238" width="400" height="22" fill="#b8a07a"/>',
      sky("kl2", "#4a5aa8", "#f2a46a"));
  }

  /* 3. Camelback Mountain */
  function klcamel() {
    return svg(
      '<rect width="400" height="260" fill="url(#kl3)"/>' +
      '<circle cx="80" cy="70" r="26" fill="#ffd27a" opacity=".9"/>' +
      '<g class="kl-hawk"><path d="M150 50q10 -8 20 0q10 -8 20 0" stroke="#2a1a1a" stroke-width="2.5" fill="none"/></g>' +
      /* the camel: head on the left, big hump on the right */
      '<path d="M0 190l40 -30l40 -16l20 -26l22 -6l18 18l20 2l20 -40l30 -26l40 -6l40 20l30 40l40 30l40 20v50h-400z" fill="#a04a2a"/>' +
      '<path d="M200 90l30 -26l40 -6l40 20" stroke="#c86a3a" stroke-width="5" fill="none"/>' +
      '<path d="M100 118l22 -6l18 18" stroke="#c86a3a" stroke-width="4" fill="none"/>' +
      '<path d="M160 130l40 -20l30 12M260 120l40 20" stroke="#7a3420" stroke-width="3" fill="none"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#c8a06a"/>' +
      '<path class="kl-heat" d="M0 204q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#fff3d6" stroke-width="2" fill="none"/>' +
      '<path class="kl-heat kl-h2" d="M0 214q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#fff3d6" stroke-width="2" fill="none"/>' +
      saguaro(60, 240, 70) + saguaro(300, 244, 56) + saguaro(352, 238, 40) +
      '<path d="M140 236q10 -16 20 0M150 236v-10" stroke="#6a8a4a" stroke-width="3" fill="none"/>',
      sky("kl3", "#3a2a6a", "#ff9f6b"));
  }

  /* 4. E Knox Rd and S 40th St, Ahwatukee */
  function klcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#kl4)"/>' +
      '<circle cx="300" cy="50" r="14" fill="#fff3d6" opacity=".9"/>' +
      southMtn(120, "#4a3a4a", true) +
      '<rect x="0" y="120" width="400" height="100" fill="#b8946a"/>' +
      '<rect x="0" y="150" width="300" height="70" fill="#d8c0a0"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M' + (i * 44 + 44) + ' 150v70" stroke="#c0a888" stroke-width="2"/>').join("") +
      '<path d="M0 166h300M0 184h300M0 202h300" stroke="#c4ac8c" stroke-width="1"/><rect x="0" y="146" width="300" height="6" fill="#a88a6a"/>' +
      tag("KIANA LEDÉ", 14, 196, 30, ORANGE, -4) + tag("KIKI", 200, 186, 24, LAV, -8) + tag("ONE MIL'", 210, 212, 14, TEAL, -3) +
      '<g class="kl-sp"><circle cx="196" cy="176" r="3" fill="' + LAV + '" opacity=".7"/></g><g class="kl-sp kl-sp2"><circle cx="202" cy="170" r="2" fill="' + LAV + '" opacity=".6"/></g>' +
      saguaro(330, 222, 70) +
      '<rect x="0" y="220" width="400" height="40" fill="#5a5650"/><path d="M0 240h400" stroke="#f2d24a" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<rect x="384" y="104" width="6" height="116" fill="#2f2f2f"/>' + sign(286, 108, 104, "E Knox Rd") + sign(300, 134, 90, "S 40th St"),
      sky("kl4", "#1a1a4a", "#c86a6a"));
  }

  window.SCENES = { klstop: klstop, klschool: klschool, kllake: kllake, klcamel: klcamel, klcorner: klcorner };
})();
