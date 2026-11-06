/* meekmill scenes (Regions tab: Philadelphia; North Philly). CSS classes prefixed mm- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mmflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.mm-flk{animation:mmflick 2.2s infinite}.mm-flk2{animation-delay:.7s}' +
    '@keyframes mmchase{0%,100%{opacity:.25}50%{opacity:1}}.mm-ch{animation:mmchase 1s ease-in-out infinite}.mm-ch2{animation-delay:-.33s}.mm-ch3{animation-delay:-.66s}' +
    '@keyframes mmswing{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.mm-sw{transform-box:fill-box;transform-origin:50% 0%;animation:mmswing 1.4s ease-in-out infinite}' +
    '@keyframes mmring{0%{transform:scale(.6);opacity:.8}100%{transform:scale(1.6);opacity:0}}.mm-ring{transform-box:fill-box;transform-origin:50% 50%;animation:mmring 1.4s ease-out infinite}.mm-ring2{animation-delay:-.7s}' +
    '@keyframes mmbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.mm-bob{animation:mmbob .8s ease-in-out infinite}.mm-bob2{animation-delay:-.4s}' +
    '@keyframes mmfall{0%{transform:translateY(-20px) rotate(0);opacity:1}100%{transform:translateY(140px) rotate(200deg);opacity:.2}}.mm-cf{transform-box:fill-box;transform-origin:50% 50%;animation:mmfall 3s linear infinite}.mm-cf2{animation-delay:-1s}.mm-cf3{animation-delay:-2s}' +
    '@keyframes mmburst{0%{transform:scale(.2);opacity:1}100%{transform:scale(1.3);opacity:0}}.mm-fw{transform-box:fill-box;transform-origin:50% 50%;animation:mmburst 2s ease-out infinite}.mm-fw2{animation-delay:-1s}' +
    '@keyframes mmcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.mm-car{animation:mmcar 6.5s linear infinite}' +
    '@keyframes mmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mm-sp{animation:mmspray 1.4s ease-out infinite}.mm-sp2{animation-delay:.45s}' +
    '@keyframes mmglow{0%,100%{opacity:.6}50%{opacity:1}}.mm-glow{animation:mmglow 1.8s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "mm-glow") + '" cx="' + ((i * 89) % 400) + '" cy="' + (8 + (i * 47) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#e7c35a", GREEN = "#1fa37a", RED = "#e04848", BSL = "#f58220", MIDNIGHT = "#004c54";

  /* 1. Cecil B. Moore on the Broad Street Line, under North Broad by Temple: deep blue wall tile, the orange band, the black sign with the BSL bullet, the train sliding in */
  function station() {
    const tr = '<g class="anim-train"><rect x="30" y="110" width="320" height="72" rx="8" fill="#c9ced4" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (44 + i * 70) + '" y="122" width="24" height="44" rx="2" fill="#262f38"/><rect x="' + (72 + i * 70) + '" y="122" width="34" height="24" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="30" y="170" width="320" height="6" fill="' + BSL + '"/><rect x="330" y="114" width="20" height="66" rx="4" fill="#9aa1a8"/><circle cx="342" cy="172" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#1f3f6e"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 0v100" stroke="#28497a" stroke-width="1.5"/>').join("") +
      '<rect x="0" y="14" width="400" height="6" fill="#e7e2d4"/><rect x="0" y="86" width="400" height="12" fill="' + BSL + '"/>' +
      '<rect x="0" y="98" width="400" height="92" fill="#232327"/>' + tr +
      '<rect x="0" y="190" width="400" height="8" fill="#f2c200"/><rect x="0" y="198" width="400" height="62" fill="#85817b"/>' +
      [24, 376].map(x => '<rect x="' + (x - 7) + '" y="0" width="14" height="190" fill="#b8b2a4"/>').join("") +
      '<rect x="98" y="34" width="190" height="32" rx="3" fill="#111"/><text x="112" y="56" ' + font + ' font-size="16" fill="#fff">Cecil B. Moore</text>' + badge(236, 50, "BSL", BSL) +
      '<rect class="mm-flk" x="150" y="212" width="100" height="6" rx="3" fill="#fff6c2" opacity=".55"/>',
      "");
  }

  /* 2. The Uptown Theater on North Broad: cream terracotta Art Deco front with green and gold trim, the tall vertical UPTOWN blade sign, the marquee bulbs chasing */
  function uptown() {
    const bulbs = Array.from({ length: 30 }, (_, i) => '<circle class="mm-ch' + (i % 3 ? " mm-ch" + (i % 3 + 1) : "") + '" cx="' + (92 + i * 7.4) + '" cy="152" r="2.4" fill="#ffe28a"/>').join("") +
      Array.from({ length: 30 }, (_, i) => '<circle class="mm-ch' + ((i + 1) % 3 ? " mm-ch" + ((i + 1) % 3 + 1) : "") + '" cx="' + (92 + i * 7.4) + '" cy="180" r="2.4" fill="#ffe28a"/>').join("");
    const letters = "UPTOWN".split("").map((ch, i) => '<text x="200" y="' + (40 + i * 17) + '" text-anchor="middle" ' + font + ' font-size="15" fill="' + RED + '" class="mm-flk' + (i % 2 ? " mm-flk2" : "") + '">' + ch + '</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mm2)"/>' + stars(18) +
      '<rect x="40" y="70" width="320" height="140" fill="#efe4c8"/>' +
      [52, 92, 292, 332].map(x => '<rect x="' + x + '" y="70" width="16" height="140" fill="#e2d4ae"/><path d="M' + (x + 4) + ' 74v132M' + (x + 12) + ' 74v132" stroke="#c9b88a" stroke-width="1.5"/>').join("") +
      '<path d="M40 70h320v-10l-40 -12h-240l-40 12z" fill="#2f7d6a"/><path d="M40 70h320" stroke="' + GOLD + '" stroke-width="3"/>' +
      [70, 110, 290, 330].map(x => '<path d="M' + (x - 12) + ' 100l12 -14 12 14z" fill="#2f7d6a"/><rect x="' + (x - 6) + '" y="102" width="12" height="20" fill="#2f7d6a"/>').join("") +
      '<rect x="182" y="20" width="36" height="124" rx="4" fill="#f6efd8" stroke="#2f7d6a" stroke-width="3"/>' + letters +
      '<path d="M84 142h232l-10 46H94z" fill="#1d2a26"/><rect x="100" y="158" width="200" height="16" fill="#f6efd8"/><text x="200" y="171" text-anchor="middle" ' + font + ' font-size="11" fill="#1d2a26" letter-spacing="2">TONIGHT  MEEK MILL</text>' +
      bulbs + '<rect x="0" y="210" width="400" height="50" fill="#5a5854"/><rect x="0" y="208" width="400" height="4" fill="#d8d4cc"/>' +
      [150, 186, 222].map(x => '<rect x="' + x + '" y="188" width="28" height="20" fill="#6a4a2a"/>').join(""),
      sky("mm2", "#0e1230", "#3a2a52"));
  }

  /* 3. April 2018, the South Philly arena: the Sixers' big bell on its stand at center court, Meek's bell ring sending waves out, the crowd standing in the seats */
  function arena() {
    const fans = Array.from({ length: 30 }, (_, i) => { const x = 6 + i * 13.4, y = 92 + (i % 2) * 8; return '<g class="mm-bob' + (i % 2 ? " mm-bob2" : "") + '"><circle cx="' + x + '" cy="' + y + '" r="4" fill="#1a1a24"/><rect x="' + (x - 4.5) + '" y="' + (y + 4) + '" width="9" height="12" rx="3" fill="' + ["#1d4ed8", "#e04848", "#f2f2f2"][i % 3] + '"/></g>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="#0d0f1a"/>' +
      '<path d="M0 60h400v70H0z" fill="#1a1e30"/>' + Array.from({ length: 4 }, (_, i) => '<path d="M0 ' + (70 + i * 16) + 'h400" stroke="#262b44" stroke-width="2"/>').join("") + fans +
      '<rect x="60" y="8" width="280" height="40" rx="4" fill="#15182a" stroke="#3a3f5e" stroke-width="2"/>' + Array.from({ length: 12 }, (_, i) => '<rect class="mm-ch' + (i % 3 ? " mm-ch" + (i % 3 + 1) : "") + '" x="' + (72 + i * 22) + '" y="18" width="14" height="20" fill="#2b62d9"/>').join("") +
      '<path d="M0 130h400v130H0z" fill="#c8915a"/>' + Array.from({ length: 16 }, (_, i) => '<path d="M' + (i * 26) + ' 130l' + (-40 + i * 2) + ' 130" stroke="#b47f4c" stroke-width="1"/>').join("") +
      '<ellipse cx="200" cy="208" rx="70" ry="22" fill="none" stroke="#1d4ed8" stroke-width="5"/><path d="M200 130v130" stroke="#f2f2f2" stroke-width="3"/>' +
      '<ellipse class="mm-ring" cx="200" cy="150" rx="44" ry="44" fill="none" stroke="' + GOLD + '" stroke-width="3"/><ellipse class="mm-ring mm-ring2" cx="200" cy="150" rx="44" ry="44" fill="none" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<path d="M150 214l18 -104M250 214l-18 -104" stroke="#4a3424" stroke-width="10" stroke-linecap="round"/><rect x="150" y="102" width="100" height="12" rx="3" fill="#6a4a30"/><rect x="140" y="210" width="120" height="8" fill="#3a281a"/>' +
      '<g class="mm-sw"><g transform="translate(200 116)"><path d="M-6 0h12v8h-12z" fill="#7a5a2a"/><path d="M-30 64q0 -54 30 -56q30 2 30 56z" fill="#b8862e" stroke="#6a4a14" stroke-width="2"/><rect x="-34" y="62" width="68" height="8" rx="3" fill="#a0741e"/><path d="M-22 26h44" stroke="#6a4a14" stroke-width="2"/><path d="M4 30l-4 30" stroke="#3a2a0a" stroke-width="2"/><circle cx="0" cy="74" r="5" fill="#6a4a14"/></g></g>',
      "");
  }

  /* 4. Lincoln Financial Field, Super Bowl run 2018: the midnight-green bowl, the wing-shaped roof canopies, the field with yard lines, confetti and fireworks when Dreams and Nightmares hits */
  function stadium() {
    const yards = Array.from({ length: 9 }, (_, i) => '<path d="M' + (40 + i * 40) + ' 176l' + ((i - 4) * 10) + ' 84" stroke="#f2f2f2" stroke-width="2" opacity=".8"/>').join("");
    const conf = Array.from({ length: 18 }, (_, i) => '<rect class="mm-cf mm-cf' + (i % 3 + 1) + '" x="' + (14 + i * 22) + '" y="' + (40 + (i % 5) * 14) + '" width="5" height="8" fill="' + [GREEN, "#f2f2f2", "#a5acaf", GOLD][i % 4] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mm4)"/>' + stars(16) +
      '<g class="mm-fw"><circle cx="90" cy="46" r="20" fill="none" stroke="' + GREEN + '" stroke-width="3" stroke-dasharray="4 5"/></g><g class="mm-fw mm-fw2"><circle cx="310" cy="38" r="22" fill="none" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="4 5"/></g>' +
      '<path d="M0 104q60 -40 130 -30l-6 14q-66 -8 -124 26z" fill="#c9d0d4"/><path d="M400 104q-60 -40 -130 -30l6 14q66 -8 124 26z" fill="#c9d0d4"/>' +
      '<path d="M0 108q200 -40 400 0v76H0z" fill="' + MIDNIGHT + '"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (118 + i * 11) + 'q200 -36 400 0" stroke="#0a6670" stroke-width="2" fill="none"/>').join("") +
      Array.from({ length: 40 }, (_, i) => '<circle cx="' + (6 + i * 10) + '" cy="' + (130 + (i % 4) * 11 - Math.sin(i / 40 * Math.PI) * 20) + '" r="2" fill="' + ["#f2f2f2", "#a5acaf", GREEN][i % 3] + '" opacity=".8"/>').join("") +
      '<rect x="0" y="176" width="400" height="84" fill="#2e7d32"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="0" y="' + (176 + i * 17) + '" width="400" height="8" fill="#2a7330"/>').join("") + yards +
      '<rect x="0" y="174" width="400" height="4" fill="#f2f2f2"/>' + conf,
      sky("mm4", "#071a22", "#1f4a52"));
  }

  /* 5. N Broad St and W Berks St, North Philly: green signs, MEEK tagged on the wall, the Divine Lorraine down Broad Street behind with its red rooftop letters glowing */
  function corner() {
    const dl = '<g transform="translate(150 20)"><rect x="0" y="40" width="110" height="100" fill="#d9cdb4"/><rect x="0" y="40" width="110" height="6" fill="#bfae8a"/>' +
      Array.from({ length: 8 }, (_, r) => Array.from({ length: 7 }, (_, c) => '<rect x="' + (8 + c * 14) + '" y="' + (52 + r * 11) + '" width="7" height="7" fill="' + ((r + c) % 4 ? "#3a3550" : "#ffd98a") + '"/>').join("")).join("") +
      '<rect x="6" y="10" width="98" height="26" fill="none" stroke="#7a7a80" stroke-width="1.5"/><path d="M20 10v-4M55 10v-4M90 10v-4M6 36v4M104 36v4" stroke="#7a7a80" stroke-width="1.5"/>' +
      '<text class="mm-glow" x="55" y="21" text-anchor="middle" ' + font + ' font-size="10" fill="#ff3a3a" letter-spacing="1.5">DIVINE</text><text class="mm-glow" x="55" y="33" text-anchor="middle" ' + font + ' font-size="10" fill="#ff3a3a" letter-spacing="1.5">LORRAINE</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mm5)"/>' + stars(12) +
      '<g fill="#25223a"><rect x="0" y="80" width="70" height="60"/><rect x="74" y="96" width="50" height="44"/><rect x="290" y="70" width="44" height="70"/><rect x="340" y="90" width="60" height="50"/></g>' + dl +
      '<rect x="0" y="136" width="400" height="88" fill="#7d4434"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#6d392b" stroke-width="1"/>').join("") +
      tag("MEEK", 30, 196, 58, GOLD, -6) + tag("DC", 186, 190, 40, GREEN, -4) + tag("MEEK MILLY", 30, 218, 18, "#fff", -3) + tag("FLAMERZ", 168, 216, 18, RED, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524d"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="mm-car"><rect x="0" y="236" width="62" height="14" rx="5" fill="#111"/><rect x="12" y="228" width="36" height="10" rx="3" fill="#111"/><rect x="15" y="230" width="13" height="6" fill="#8fb0c8"/><rect x="32" y="230" width="13" height="6" fill="#8fb0c8"/><circle cx="12" cy="250" r="4" fill="#333"/><circle cx="50" cy="250" r="4" fill="#333"/></g>' +
      '<rect x="336" y="98" width="6" height="126" fill="#2f2f2f"/>' + sign(286, 100, 104, "N Broad St") + sign(286, 126, 104, "W Berks St") +
      '<g class="mm-sp"><circle cx="160" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="mm-sp mm-sp2"><circle cx="166" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("mm5", "#16122e", "#c85a46"));
  }

  window.SCENES = { station: station, uptown: uptown, arena: arena, stadium: stadium, corner: corner };
})();
