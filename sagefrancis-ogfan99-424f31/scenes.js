/* sagefrancis scenes (Regions tab: Boston + New England; Providence, RI) */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes carsL{from{transform:translateX(490px)}to{transform:translateX(-140px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}' +
    '@keyframes flame{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.25)}}.fm{transform-box:fill-box;transform-origin:50% 100%;animation:flame .6s ease-in-out infinite}.fm2{animation-delay:-.3s}' +
    '@keyframes flag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.fg{transform-box:fill-box;transform-origin:0 50%;animation:flag 1.6s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.2s ease-in-out infinite}' +
    '@keyframes glide{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.gld{animation:glide 16s linear infinite}' +
    '@keyframes smoke{0%{transform:translateY(0);opacity:.6}100%{transform:translateY(-40px);opacity:0}}.smk{animation:smoke 2.6s ease-out infinite}.smk2{animation-delay:-1.3s}' +
    '@keyframes spray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sp{animation:spray 1.4s ease-out infinite}.sp2{animation-delay:.45s}' +
    '@keyframes sweep{0%,100%{transform:rotate(-30deg)}50%{transform:rotate(30deg)}}.sw{transform-box:fill-box;transform-origin:0% 50%;animation:sweep 4s ease-in-out infinite}' +
    '@keyframes flow{from{transform:translateX(0)}to{transform:translateX(-40px)}}.fl{animation:flow 2.4s linear infinite}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vy{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes run{0%{transform:translate(0,0)}100%{transform:translate(60px,-56px)}}.run{animation:run 4s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "bl") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const pole = (x, y1, y2) => '<rect x="' + (x - 3) + '" y="' + y1 + '" width="6" height="' + (y2 - y1) + '" fill="#2f2f2f"/>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 12) + '" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="' + (x + 46) + '" cy="' + (y + 14) + '" r="4" fill="#111"/></g>';
  const GOLD = "#f2c14e", TEAL = "#4fb3bf", RED = "#e4572e", PURP = "#80276c";
  /* RI State House: white marble dome, four little corner towers, the gold Independent Man on top */
  const stateHouse = (x, y, s, col) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="' + col + '">' +
    '<rect x="-90" y="0" width="180" height="50"/><rect x="-40" y="-26" width="80" height="26"/><path d="M-36 -26q36 -64 72 0z"/><rect x="-6" y="-66" width="12" height="16"/>' +
    '<rect x="-56" y="-18" width="12" height="18"/><path d="M-58 -18l8 -12 8 12z"/><rect x="44" y="-18" width="12" height="18"/><path d="M42 -18l8 -12 8 12z"/></g>';
  /* Industrial Trust ("Superman") Building: Art Deco tower with stepped crown */
  const deco = (x, base, col) => '<g fill="' + col + '"><rect x="' + x + '" y="' + (base - 150) + '" width="44" height="150"/><rect x="' + (x + 6) + '" y="' + (base - 170) + '" width="32" height="20"/><rect x="' + (x + 12) + '" y="' + (base - 186) + '" width="20" height="16"/><rect x="' + (x + 17) + '" y="' + (base - 198) + '" width="10" height="12"/><rect x="' + (x + 20.5) + '" y="' + (base - 210) + '" width="3" height="12"/></g>';
  const provSky = (fill, base) => '<g fill="' + fill + '"><rect x="20" y="' + (base - 50) + '" width="40" height="50"/><rect x="66" y="' + (base - 80) + '" width="30" height="80"/><rect x="250" y="' + (base - 70) + '" width="36" height="70"/><rect x="292" y="' + (base - 96) + '" width="28" height="96"/><rect x="330" y="' + (base - 56) + '" width="50" height="56"/></g>' + deco(180, base, fill);

  /* 1. Providence Station: the commuter rail train pulling in below the station deck, State House dome on the hill behind */
  function station() {
    const coach = '<g class="anim-train"><rect x="20" y="130" width="330" height="62" rx="6" fill="#c9ced4" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 44) + '" y="140" width="32" height="20" rx="2" fill="#26313c"/>').join("") +
      '<rect x="20" y="166" width="330" height="8" fill="' + PURP + '"/><rect x="330" y="134" width="20" height="56" rx="4" fill="#9aa0a7"/><circle cx="342" cy="182" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stateHouse(110, 70, 0.7, "#eef0ee") + '<g transform="translate(110 70) scale(.7)"><rect x="-3" y="-80" width="6" height="14" fill="' + GOLD + '"/><circle cx="0" cy="-83" r="3" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="104" width="400" height="18" fill="#7d838b"/><rect x="0" y="100" width="400" height="5" fill="#b8bec5"/>' + [40, 160, 280, 380].map(x => '<rect x="' + (x - 4) + '" y="122" width="8" height="78" fill="#5c6168"/>').join("") +
      '<rect x="0" y="122" width="400" height="80" fill="#3a3f46" opacity=".55"/>' + coach +
      '<rect x="0" y="196" width="400" height="8" fill="#f2c200"/><rect x="0" y="204" width="400" height="56" fill="#9a958c"/><path d="M0 230h400" stroke="#8a857c" stroke-width="2"/>' +
      '<rect x="96" y="210" width="210" height="32" rx="3" fill="#111"/><text x="110" y="232" ' + font + ' font-size="16" fill="#fff">Providence</text>' + badge(214, 226, "Commuter", PURP),
      sky("s1", "#9cc4e8", "#eef5fb"));
  }

  /* 2. WaterFire on the Providence River: braziers burning on the water at night, a boat gliding past, a stone footbridge */
  function waterfire() {
    const braz = [50, 130, 210, 290, 370].map((x, i) => '<rect x="' + (x - 2) + '" y="168" width="4" height="22" fill="#2a2a2a"/><path d="M' + (x - 14) + ' 168h28l-6 8h-16z" fill="#3a3a3a"/>' +
      '<g class="fm' + (i % 2 ? " fm2" : "") + '"><path d="M' + (x - 11) + ' 168q11 -40 22 0z" fill="#ff8a1e"/><path d="M' + (x - 6) + ' 168q6 -24 12 0z" fill="#ffd166"/></g>' +
      '<g opacity=".55"><path d="M' + (x - 10) + ' 196h20M' + (x - 7) + ' 204h14M' + (x - 12) + ' 212h24M' + (x - 5) + ' 220h10" stroke="#ffb347" stroke-width="2.5" stroke-linecap="round"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' + stars(26) + provSky("#1a2236", 150) +
      '<path d="M0 150h400v20H0z" fill="#3b3330"/><path d="M120 150q80 -50 160 0" stroke="#8c7f6c" stroke-width="12" fill="none"/><path d="M120 150v20M280 150v20" stroke="#8c7f6c" stroke-width="10"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#0d1a2c"/>' + braz +
      '<g class="gld"><path d="M0 220h70l-8 10H8z" fill="#2b1d14"/><rect x="28" y="206" width="3" height="14" fill="#2b1d14"/><circle cx="29.5" cy="204" r="3" fill="#ffd166"/></g>' +
      '<g class="fl" opacity=".5"><path d="M0 240q10 -4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#4fb3bf" stroke-width="2" fill="none"/></g>',
      sky("s2", "#05070f", "#24304d"));
  }

  /* 3. The Rhode Island State House: white marble dome, corner towers, the gold Independent Man, flag in the wind */
  function statehouse() {
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' +
      '<rect x="80" y="140" width="240" height="84" fill="#f2f0ea"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (92 + i * 23) + '" y="150" width="8" height="70" fill="#dedad0"/>').join("") +
      '<path d="M150 140l50 -20 50 20z" fill="#e8e4da"/><rect x="155" y="96" width="90" height="30" fill="#f2f0ea"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (160 + i * 11) + '" y="100" width="4" height="24" fill="#d9d5ca"/>').join("") +
      '<path d="M150 98q50 -88 100 0z" fill="#f7f6f1" stroke="#d1ccc0" stroke-width="2"/><rect x="190" y="20" width="20" height="18" fill="#f7f6f1"/><path d="M188 20q12 -10 24 0z" fill="#e8e4da"/>' +
      '<g fill="' + GOLD + '"><rect x="198" y="2" width="4" height="16"/><circle cx="200" cy="2" r="3"/><path d="M202 6l8 -6" stroke="' + GOLD + '" stroke-width="2"/></g>' +
      [100, 300].map(x => '<rect x="' + (x - 10) + '" y="110" width="20" height="30" fill="#f2f0ea"/><path d="M' + (x - 12) + ' 110q12 -20 24 0z" fill="#f7f6f1"/>').join("") +
      '<rect x="350" y="60" width="3" height="164" fill="#888"/><g class="fg"><rect x="353" y="62" width="36" height="24" fill="#fff" stroke="#bbb"/><path d="M371 66l-3 6 6 0z" fill="' + GOLD + '"/><circle cx="371" cy="76" r="4" fill="none" stroke="' + GOLD + '"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#6fa35a"/><path d="M160 260l18 -36h44l18 36z" fill="#d6cfbf"/>' +
      '<g class="bob"><path d="M50 50q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>',
      sky("s3", "#7db8e8", "#eef6fc"));
  }

  /* 4. Federal Hill: the arch over Atwells Avenue with the pinecone (la pigna) hanging in the middle, string lights blinking */
  function federalhill() {
    const lights = Array.from({ length: 14 }, (_, i) => '<circle class="bl' + (i % 3 ? " bl" + (1 + i % 3) : "") + '" cx="' + (20 + i * 28) + '" cy="' + (60 + Math.abs(7 - i) * 3) + '" r="3" fill="' + [GOLD, RED, "#7fd47f"][i % 3] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' + stars(18) +
      '<rect x="0" y="120" width="70" height="110" fill="#6b3a2a"/><rect x="330" y="110" width="70" height="120" fill="#5a4a3a"/><rect x="10" y="134" width="20" height="26" fill="#ffd98a"/><rect x="40" y="134" width="20" height="26" fill="#ffd98a" class="flk"/><rect x="342" y="126" width="20" height="26" fill="#ffd98a"/><rect x="370" y="126" width="20" height="26" fill="#ffd98a"/>' +
      '<rect x="80" y="70" width="16" height="160" fill="#b9b2a2"/><rect x="304" y="70" width="16" height="160" fill="#b9b2a2"/><path d="M88 74q112 -70 224 0" stroke="#b9b2a2" stroke-width="16" fill="none"/>' +
      '<path d="M200 38v26" stroke="#555" stroke-width="2"/><g class="bob"><path d="M200 62c10 6 12 18 0 34c-12 -16 -10 -28 0 -34z" fill="#c8a24a" stroke="#7a5a22" stroke-width="2"/><path d="M193 72h14M192 80h16M194 88h12" stroke="#7a5a22" stroke-width="1.5"/></g>' +
      '<path d="M0 60q100 30 200 6t200 -6" stroke="#333" stroke-width="1" fill="none"/>' + lights +
      '<rect x="0" y="230" width="400" height="30" fill="#4a4a4e"/><path d="M0 245h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="14 12"/>' + car("car", 0, 232, RED),
      sky("s4", "#1a1030", "#4a2a50"));
  }

  /* 5. Westminster St and Dorrance St, downtown Providence: green signs, SAGE tagged on the wall, the Art Deco Industrial Trust tower behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + provSky("#2a2f45", 130) +
      '<rect x="0" y="126" width="400" height="98" fill="#6a5a50"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#5c4e45" stroke-width="1"/>').join("") +
      tag("SAGE", 26, 186, 52, GOLD, -6) + tag("STRANGE FAMOUS", 112, 214, 19, TEAL, -4) + tag("SICK OF", 30, 214, 18, RED, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      pole(339, 96, 224) + sign(270, 98, 128, "Westminster St") + sign(278, 124, 112, "Dorrance St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="sp"><circle cx="150" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="sp sp2"><circle cx="156" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("s5", "#3a3a6a", "#e8906a"));
  }

  window.SCENES = { station: station, waterfire: waterfire, statehouse: statehouse, federalhill: federalhill, corner: corner };
})();
