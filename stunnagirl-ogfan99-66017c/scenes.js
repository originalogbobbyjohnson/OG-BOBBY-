/* stunnagirl scenes (Regions tab: The Bay Area; Oak Park, Sacramento). CSS classes prefixed sg- (the page's own anim-train is kept).
   1 Stockton Blvd & 2nd Ave, the east edge of Oak Park: the SacRT 51 (Broadway/Stockton) bus pulling in, Oak Park bungalows and palms behind.
   2 The Runway: a lit catwalk with sweeping spotlights and camera flashes ("I look like I'm fresh off the runway").
   3 Denio's swap meet out in Roseville: rows of colored canopies, flags flapping, shoppers ("you be at the swap meet").
   4 Poolside: palms, loungers, two cocktail glasses clinking, the water shimmering ("We poolside, toasting cocktails, catching tans").
   5 4th Ave and 34th St in Oak Park: green signs, STUNNA GIRL tagged with OAK PARK and TTG, the UC Davis Medical Center tower behind with a helicopter coming in. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sgflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.sg-flk{animation:sgflick 2.4s infinite}.sg-flk2{animation-delay:.8s}' +
    '@keyframes sgblink{0%,100%{opacity:.25}50%{opacity:1}}.sg-bl{animation:sgblink 1.6s ease-in-out infinite}.sg-bl2{animation-delay:-.8s}' +
    '@keyframes sgbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.sg-bm{transform-box:fill-box;transform-origin:50% 0%;animation:sgbeam 3.4s ease-in-out infinite}.sg-bm2{animation-delay:-1.7s}' +
    '@keyframes sgflash{0%,86%,100%{opacity:0}90%{opacity:1}}.sg-fl{animation:sgflash 1.9s linear infinite}.sg-fl2{animation-delay:-.6s}.sg-fl3{animation-delay:-1.2s}' +
    '@keyframes sgwalk{0%{transform:translateY(0) scale(.7)}100%{transform:translateY(70px) scale(1.15)}}.sg-walk{transform-box:fill-box;transform-origin:50% 100%;animation:sgwalk 4s ease-in infinite alternate}' +
    '@keyframes sgflag{0%,100%{transform:skewY(0)}50%{transform:skewY(8deg)}}.sg-flag{transform-box:fill-box;transform-origin:0 50%;animation:sgflag 1.2s ease-in-out infinite}.sg-flag2{animation-delay:-.6s}' +
    '@keyframes sgshop{from{transform:translateX(-30px)}to{transform:translateX(430px)}}.sg-shop{animation:sgshop 14s linear infinite}.sg-shop2{animation-delay:-5s}.sg-shop3{animation-delay:-9.5s}' +
    '@keyframes sgshim{0%{transform:translateX(0)}100%{transform:translateX(-60px)}}.sg-shim{animation:sgshim 3s linear infinite}' +
    '@keyframes sgclink{0%,100%{transform:rotate(0)}50%{transform:rotate(8deg)}}.sg-cl{transform-box:fill-box;transform-origin:50% 100%;animation:sgclink 1.4s ease-in-out infinite}.sg-cl2{animation-direction:reverse}' +
    '@keyframes sgsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.sg-palm{animation:sgsway 3s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}' +
    '@keyframes sgheli{0%{transform:translate(120px,-30px)}100%{transform:translate(0,0)}}.sg-heli{animation:sgheli 6s ease-out infinite alternate}' +
    '@keyframes sgrot{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.2)}}.sg-rot{transform-box:fill-box;transform-origin:center;animation:sgrot .25s linear infinite}' +
    '@keyframes sgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sg-sp{animation:sgspray 1.4s ease-out infinite}.sg-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "sg-bl" + (i % 2 ? " sg-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const palm = (x, base, s) => '<g class="sg-palm"><path d="M' + x + ' ' + base + 'q' + (4 * s) + ' ' + (-40 * s) + ' ' + (2 * s) + ' ' + (-80 * s) + '" stroke="#6b4a2e" stroke-width="' + (5 * s) + '" fill="none"/>' +
    [-60, -25, 10, 40, 75].map((a, i) => '<path d="M' + (x + 2 * s) + ' ' + (base - 80 * s) + 'q' + (Math.cos(a * Math.PI / 180) * 18 * s) + ' ' + (-14 * s) + ' ' + (Math.cos(a * Math.PI / 180) * 34 * s) + ' ' + ((i % 2 ? 6 : 12) * s) + '" stroke="#2f6b3a" stroke-width="' + (4 * s) + '" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const PINK = "#ff3d9a", GOLD = "#ffd23f", TEAL = "#3be0d0", SAC = "#005ba6";

  /* 1. Stockton Blvd & 2nd Ave: the SacRT 51 bus pulling in */
  function sgstop() {
    const homes = [[0, "#e8c9a0"], [70, "#b9d4c4"], [140, "#f1e2b8"], [250, "#d8b4b4"], [320, "#c6cfe0"]].map(h => '<g><rect x="' + (h[0] + 6) + '" y="74" width="58" height="34" fill="' + h[1] + '"/><path d="M' + h[0] + ' 76l35 -20l35 20z" fill="#7a5a48"/><rect x="' + (h[0] + 14) + '" y="84" width="12" height="10" fill="#ffe7a8" class="sg-flk"/><rect x="' + (h[0] + 40) + '" y="88" width="12" height="20" fill="#5a3e30"/></g>').join("");
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 42) + '" y="124" width="32" height="24" rx="2" fill="#1e2c3c"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="114" width="320" height="72" rx="10" fill="#f4f6f6" stroke="#7d868e" stroke-width="2"/>' + wins +
      '<path d="M40 158h320v8h-320z" fill="' + SAC + '"/><path d="M40 166h320v4h-320z" fill="' + GOLD + '"/>' +
      '<rect x="326" y="124" width="30" height="44" rx="3" fill="#1e2c3c"/><rect x="304" y="116" width="52" height="8" rx="2" fill="#111"/><text x="330" y="123" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">51 STOCKTON</text>' +
      '<circle cx="90" cy="186" r="13" fill="#222"/><circle cx="90" cy="186" r="5" fill="#888"/><circle cx="310" cy="186" r="13" fill="#222"/><circle cx="310" cy="186" r="5" fill="#888"/><circle cx="354" cy="176" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sgs1)"/>' + homes + palm(118, 112, .66) + palm(236, 112, .7) +
      '<rect x="0" y="108" width="400" height="6" fill="#bdb6a8"/>' + bus +
      '<rect x="0" y="198" width="400" height="62" fill="#4a4a50"/><path d="M0 226h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<rect x="20" y="10" width="252" height="34" rx="3" fill="#111"/><text x="34" y="33" ' + font + ' font-size="15" fill="#fff">Stockton Blvd &amp; 2nd Ave</text>' + badge(282, 27, "51", SAC) + badge(318, 27, "BUS", "#3a3e46") +
      '<rect x="374" y="60" width="4" height="138" fill="#555"/><rect x="360" y="50" width="32" height="20" rx="2" fill="' + SAC + '"/><text x="376" y="64" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">51</text>',
      sky("sgs1", "#f6a77a", "#ffe1b0"));
  }

  /* 2. The runway: catwalk, spotlights, camera flashes */
  function sgrunway() {
    const flash = (x, y, c) => '<g><rect x="' + (x - 6) + '" y="' + y + '" width="12" height="9" rx="2" fill="#222"/><circle class="sg-fl ' + c + '" cx="' + x + '" cy="' + (y - 2) + '" r="9" fill="#fff"/></g>';
    const crowd = Array.from({ length: 22 }, (_, i) => { const left = i < 11, k = i % 11; const x = left ? 20 + k * 12 : 296 + k * 9; const y = 150 + (k % 3) * 22 + k * 4; return '<circle cx="' + x + '" cy="' + y + '" r="7" fill="#2a1a2a"/><rect x="' + (x - 8) + '" y="' + (y + 6) + '" width="16" height="18" rx="5" fill="#2a1a2a"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="#12060e"/>' +
      '<path class="sg-bm" d="M140 0l-40 200h80z" fill="' + PINK + '" opacity=".18"/><path class="sg-bm sg-bm2" d="M260 0l-40 200h80z" fill="' + GOLD + '" opacity=".16"/>' +
      '<rect x="150" y="40" width="100" height="56" fill="#24101c"/><text x="200" y="74" text-anchor="middle" ' + font + ' font-size="18" fill="' + PINK + '" letter-spacing="3" class="sg-flk">RUNWAY</text>' +
      '<path d="M176 96h48l70 164h-188z" fill="#e9e2ea"/><path d="M176 96h48l70 164h-188z" fill="url(#sgs2)"/>' +
      Array.from({ length: 8 }, (_, i) => '<circle class="sg-bl' + (i % 2 ? " sg-bl2" : "") + '" cx="' + (176 - i * 9) + '" cy="' + (100 + i * 20) + '" r="2.4" fill="' + GOLD + '"/><circle class="sg-bl' + (i % 2 ? "" : " sg-bl2") + '" cx="' + (224 + i * 9) + '" cy="' + (100 + i * 20) + '" r="2.4" fill="' + GOLD + '"/>').join("") +
      '<g class="sg-walk"><path d="M194 150l-4 18h8z" fill="' + PINK + '"/><path d="M206 150l4 18h-8z" fill="' + PINK + '"/><rect x="190" y="166" width="9" height="4" fill="#c4002a"/><rect x="201" y="166" width="9" height="4" fill="#c4002a"/></g>' +
      crowd + flash(40, 130, "") + flash(100, 160, "sg-fl2") + flash(320, 140, "sg-fl3") + flash(370, 176, "") + flash(70, 200, "sg-fl3") + flash(340, 214, "sg-fl2"),
      '<linearGradient id="sgs2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff3d9a" stop-opacity=".35"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></linearGradient>');
  }

  /* 3. Denio's swap meet, Roseville: canopies, flags, shoppers */
  function sgswap() {
    const cols = ["#e2574c", "#3a8fd8", "#f2c14e", "#3fae6a", "#ff7ab8", "#f08a3a"];
    const canopy = (x, y, w, c) => '<g><path d="M' + x + ' ' + y + 'h' + w + 'l8 14h-' + (w + 16) + 'z" fill="' + c + '"/><path d="M' + (x - 8) + ' ' + (y + 14) + 'h' + (w + 16) + 'v4h-' + (w + 16) + 'z" fill="#00000033"/><path d="M' + (x - 4) + ' ' + (y + 14) + 'v40M' + (x + w + 4) + ' ' + (y + 14) + 'v40" stroke="#777" stroke-width="2"/>' +
      '<rect x="' + x + '" y="' + (y + 38) + '" width="' + w + '" height="16" fill="#8a6a4a"/>' + [0, 1, 2].map(i => '<rect x="' + (x + 6 + i * (w / 3)) + '" y="' + (y + 30) + '" width="' + (w / 4) + '" height="8" fill="' + cols[(i + x) % 6] + '"/>').join("") + '</g>';
    const shopper = (c, cls, y) => '<g class="sg-shop ' + cls + '"><circle cx="0" cy="' + y + '" r="5" fill="#6b4532"/><rect x="-5" y="' + (y + 6) + '" width="10" height="16" rx="3" fill="' + c + '"/><path d="M-3 ' + (y + 22) + 'v8M3 ' + (y + 22) + 'v8" stroke="#2a2a2a" stroke-width="3"/><rect x="6" y="' + (y + 10) + '" width="7" height="9" fill="#f4efe6"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sgs3)"/>' +
      '<path d="M0 96q100 -20 200 -6t200 -8v20h-400z" fill="#c9b27a"/>' +
      [20, 110, 200, 290].map((x, i) => '<path d="M' + (x + 30) + ' 96v-44" stroke="#888" stroke-width="2"/><path class="sg-flag' + (i % 2 ? " sg-flag2" : "") + '" d="M' + (x + 31) + ' 52h22v12h-22z" fill="' + cols[i] + '"/>').join("") +
      canopy(10, 100, 70, cols[0]) + canopy(108, 100, 70, cols[1]) + canopy(206, 100, 70, cols[2]) + canopy(304, 100, 70, cols[3]) +
      canopy(40, 160, 80, cols[4]) + canopy(160, 160, 80, cols[5]) + canopy(280, 160, 80, cols[1]) +
      '<rect x="0" y="232" width="400" height="28" fill="#b8a888"/>' +
      shopper("#3a8fd8", "", 220) + shopper(PINK, "sg-shop2", 222) + shopper("#2a2a2a", "sg-shop3", 220),
      sky("sgs3", "#7cc4f0", "#f6e6c0"));
  }

  /* 4. Poolside: palms, loungers, cocktails clinking */
  function sgpool() {
    const glass = (x, c, cls) => '<g class="sg-cl ' + cls + '"><path d="M' + (x - 12) + ' 150h24l-10 18h-4z" fill="' + c + '" stroke="#fff" stroke-width="1.5" opacity=".9"/><rect x="' + (x - 1.5) + '" y="168" width="3" height="16" fill="#fff"/><rect x="' + (x - 8) + '" y="184" width="16" height="3" fill="#fff"/><circle cx="' + (x + 8) + '" cy="148" r="4" fill="#ffe04a"/></g>';
    const shim = Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (206 + (i % 3) * 14) + 'q10 -4 20 0" stroke="#e8fbff" stroke-width="2" fill="none" opacity=".7"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sgs4)"/>' +
      '<circle cx="330" cy="50" r="26" fill="#fff2a8"/><circle cx="330" cy="50" r="36" fill="#fff2a8" opacity=".25" class="sg-bl"/>' +
      palm(40, 190, 1.4) + palm(370, 190, 1.2) +
      '<rect x="0" y="176" width="400" height="16" fill="#f1e4cc"/><rect x="0" y="192" width="400" height="68" fill="#2bb6d8"/>' +
      '<g class="sg-shim">' + shim + '</g>' +
      '<path d="M90 170l60 -20h20l-50 20z" fill="#fff"/><path d="M92 170h80v4h-80z" fill="#ddd"/><path d="M96 174v10M168 174v10" stroke="#bbb" stroke-width="3"/>' +
      '<path d="M220 170l60 -20h20l-50 20z" fill="' + PINK + '"/><path d="M222 170h80v4h-80z" fill="#d82f84"/><path d="M226 174v10M298 174v10" stroke="#bbb" stroke-width="3"/>' +
      '<rect x="176" y="186" width="48" height="4" fill="#ddd"/>' + glass(192, "#ff6aa8", "") + glass(210, "#ffb347", "sg-cl2") +
      '<ellipse cx="300" cy="226" rx="26" ry="9" fill="none" stroke="' + GOLD + '" stroke-width="7"/>',
      sky("sgs4", "#47b4f2", "#c8f0ff"));
  }

  /* 5. 4th Ave and 34th St, Oak Park; the UC Davis Medical Center tower behind with a helicopter coming in */
  function sgcorner() {
    const tower = '<g><rect x="250" y="36" width="70" height="92" fill="#d6c6a6"/>' + Array.from({ length: 8 }, (_, r) => '<rect x="256" y="' + (42 + r * 10) + '" width="58" height="5" fill="#5a86b0" class="' + (r % 3 ? "" : "sg-flk") + '"/>').join("") +
      '<rect x="244" y="30" width="82" height="8" fill="#bfae8c"/><rect x="270" y="24" width="30" height="6" fill="#bfae8c"/><circle cx="285" cy="22" r="2" fill="#ff3a3a" class="sg-bl"/></g>';
    const heli = '<g class="sg-heli"><g transform="translate(232 20)"><ellipse cx="0" cy="0" rx="12" ry="5" fill="#e8ecf2"/><rect x="10" y="-2" width="16" height="3" fill="#e8ecf2"/><rect class="sg-rot" x="-16" y="-9" width="32" height="2" fill="#333"/><circle cx="-5" cy="-1" r="2.6" fill="#4a7aa0"/><path d="M-6 6h12" stroke="#666" stroke-width="2"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sgs5)"/>' + stars(10) +
      '<rect x="0" y="104" width="400" height="24" fill="#2a3048"/>' + [10, 60, 120, 180, 340].map((x, i) => '<rect x="' + x + '" y="' + (86 + (i % 2) * 8) + '" width="44" height="' + (42 - (i % 2) * 8) + '" fill="#232842"/>').join("") + tower + heli +
      '<rect x="0" y="126" width="400" height="98" fill="#d9d2c4"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52 + 20) + ' 126v98" stroke="#c6beae" stroke-width="2"/>').join("") +
      tag("STUNNA GIRL", 12, 190, 38, PINK, -6) + tag("OAK PARK", 24, 218, 20, GOLD, -4) + tag("TTG", 170, 218, 20, TEAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(300, 98, 80, "4th Ave") + sign(286, 124, 100, "34th St") +
      '<g class="sg-sp"><circle cx="236" cy="160" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="sg-sp sg-sp2"><circle cx="242" cy="154" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("sgs5", "#1e1438", "#f08a6a"));
  }

  window.SCENES = { sgstop: sgstop, sgrunway: sgrunway, sgswap: sgswap, sgpool: sgpool, sgcorner: sgcorner };
})();
