/* vinniepaz scenes (Regions tab: Philadelphia; South Philly) */
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
  const GOLD = "#e8b23a", RED = "#c8102e", BLUE = "#4a90d9", BSL = "#f47b20";
  /* Philadelphia City Hall tower with the William Penn statue (silhouette only) */
  const cityHall = (x, base, s, col) => '<g transform="translate(' + x + ' ' + base + ') scale(' + s + ')" fill="' + col + '"><rect x="-60" y="-60" width="120" height="60"/><rect x="-20" y="-150" width="40" height="90"/><rect x="-16" y="-176" width="32" height="26"/><circle cx="0" cy="-168" r="7" fill="#fff" opacity=".5"/><path d="M-16 -176q16 -40 32 0z"/><rect x="-3" y="-226" width="6" height="16"/><path d="M-10 -200q10 -16 20 0z"/><circle cx="0" cy="-230" r="3"/></g>';
  const phlSky = (fill, base) => '<g fill="' + fill + '"><rect x="20" y="' + (base - 60) + '" width="36" height="60"/><rect x="62" y="' + (base - 110) + '" width="30" height="110"/><path d="M62 ' + (base - 110) + 'l15 -24 15 24z"/><rect x="260" y="' + (base - 120) + '" width="28" height="120"/><path d="M260 ' + (base - 120) + 'l14 -30 14 30z"/><rect x="294" y="' + (base - 90) + '" width="32" height="90"/><rect x="334" y="' + (base - 64) + '" width="46" height="64"/><rect x="100" y="' + (base - 70) + '" width="30" height="70"/></g>' + cityHall(190, base, 0.5, fill);

  /* 1. Snyder station on the Broad Street Line: underground platform, orange tile band, the orange-striped train pulling in */
  function septa() {
    const tr = '<g class="anim-train"><rect x="20" y="108" width="330" height="72" rx="8" fill="#c4c9cf" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 44) + '" y="120" width="32" height="24" rx="2" fill="#1f2830"/>').join("") +
      '<rect x="20" y="152" width="330" height="9" fill="' + BSL + '"/><rect x="330" y="112" width="20" height="66" rx="4" fill="#9aa0a7"/><circle cx="342" cy="170" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#d8d2c4"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 0v100" stroke="#c8c2b4" stroke-width="1"/>').join("") +
      '<rect x="0" y="60" width="400" height="14" fill="' + BSL + '"/><rect x="0" y="0" width="400" height="14" fill="#3a3a3a"/>' +
      '<rect x="0" y="100" width="400" height="90" fill="#2a2a2e"/>' + tr +
      '<rect x="0" y="190" width="400" height="8" fill="#f2c200"/><rect x="0" y="198" width="400" height="62" fill="#8c8780"/>' +
      [70, 330].map(x => '<rect x="' + (x - 6) + '" y="74" width="12" height="116" fill="#4a4a4e"/>').join("") +
      '<rect x="110" y="22" width="180" height="30" rx="3" fill="#111"/><text x="124" y="43" ' + font + ' font-size="16" fill="#fff">Snyder</text>' + badge(230, 37, "BSL", BSL) +
      '<rect class="flk" x="150" y="210" width="100" height="6" rx="3" fill="#fff6c2" opacity=".6"/>',
      "");
  }

  /* 2. The 9th Street Italian Market: striped awnings over the stands, produce piled high, fire barrels smoking */
  function italianmarket() {
    const aw = ["#2e8b3a", RED, "#2e8b3a", "#f2f0ea", RED].map((c, i) => '<path d="M' + (i * 80) + ' 96h80l-6 26H' + (i * 80 + 6) + 'z" fill="' + c + '"/>' + Array.from({ length: 4 }, (_, k) => '<rect x="' + (i * 80 + 8 + k * 18) + '" y="96" width="9" height="26" fill="' + (c === "#f2f0ea" ? "#2e8b3a" : "#f2f0ea") + '" opacity=".55"/>').join("")).join("");
    const fruit = Array.from({ length: 30 }, (_, i) => '<circle cx="' + (10 + i * 13) + '" cy="' + (156 + (i % 3) * 7) + '" r="6" fill="' + ["#e0402a", "#f2a43a", "#7cbf3a", "#f2d23a", "#8a3a8a"][i % 5] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#v2)"/>' +
      '<rect x="0" y="20" width="130" height="80" fill="#8a4a32"/><rect x="130" y="34" width="140" height="66" fill="#a8775a"/><rect x="270" y="14" width="130" height="86" fill="#6a4a3a"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (14 + i * 44) + '" y="' + (40 + (i % 2) * 8) + '" width="16" height="22" fill="#2c3440"/>').join("") +
      aw + '<rect x="0" y="122" width="400" height="28" fill="#5a3a24"/>' + '<rect x="0" y="146" width="400" height="30" fill="#7a5034"/>' + fruit +
      '<rect x="0" y="176" width="400" height="84" fill="#6a6a6e"/>' +
      [60, 330].map((x, i) => '<rect x="' + (x - 14) + '" y="190" width="28" height="36" fill="#3a3a3e"/><path d="M' + (x - 14) + ' 196h28M' + (x - 14) + ' 214h28" stroke="#555" stroke-width="2"/><g class="fm' + (i ? " fm2" : "") + '"><path d="M' + (x - 10) + ' 190q10 -22 20 0z" fill="#ff8a1e"/></g><g class="smk' + (i ? " smk2" : "") + '"><circle cx="' + x + '" cy="172" r="8" fill="#bbb"/></g>').join(""),
      sky("v2", "#8fb8e0", "#e8f0f8"));
  }

  /* 3. 9th and Passyunk at night: two cheesesteak stands facing off across the corner, neon outlines buzzing, a car rolling by */
  function cheesesteak() {
    const stand = (x, c1, c2) => '<rect x="' + x + '" y="100" width="150" height="90" fill="#2a2a30"/><rect x="' + (x + 10) + '" y="70" width="130" height="30" rx="3" fill="#15151a" stroke="' + c1 + '" stroke-width="3" class="flk"/>' +
      '<text x="' + (x + 75) + '" y="92" text-anchor="middle" ' + font + ' font-size="18" fill="' + c1 + '" letter-spacing="3">STEAKS</text>' +
      '<rect x="' + (x + 12) + '" y="118" width="126" height="40" fill="#ffd98a" opacity=".85"/><path d="M' + x + ' 100h150" stroke="' + c2 + '" stroke-width="4" class="flk flk2"/><path d="M' + x + ' 190V100M' + (x + 150) + ' 190V100" stroke="' + c2 + '" stroke-width="3" class="flk"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#v3)"/>' + stars(22) +
      stand(14, "#ff4fa0", "#ffd23a") + stand(236, "#3af0ff", RED) +
      '<rect x="0" y="190" width="400" height="70" fill="#3a3a3e"/><path d="M0 222h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="14 12"/>' +
      car("car", 0, 228, GOLD) +
      '<g transform="translate(60 140)"><path d="M0 14q16 -14 32 0z" fill="#e8c27a"/><rect x="2" y="10" width="28" height="5" fill="#8a4a2a"/><path d="M4 10q12 -6 24 0" stroke="#ffd23a" stroke-width="3" fill="none"/></g>',
      sky("v3", "#0a0a18", "#2a1a3a"));
  }

  /* 4. The Philadelphia Museum of Art: golden Greek temple on the hill, the long steps, a runner bounding up them */
  function artmuseum() {
    const steps = Array.from({ length: 12 }, (_, i) => '<rect x="' + (110 - i * 4) + '" y="' + (160 + i * 8) + '" width="' + (180 + i * 8) + '" height="8" fill="' + (i % 2 ? "#d9c7a0" : "#cdb990") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#v4)"/>' +
      '<rect x="40" y="96" width="320" height="64" fill="#d8b878"/><path d="M130 96l70 -34 70 34z" fill="#c9a764"/><path d="M150 92l50 -24 50 24z" fill="' + BLUE + '" opacity=".55"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (140 + i * 16) + '" y="100" width="8" height="56" fill="#ecd9aa"/>').join("") +
      '<path d="M40 96l20 -14h50v14zM360 96l-20 -14h-50v14z" fill="#c9a764"/>' + Array.from({ length: 4 }, (_, i) => '<rect x="' + (52 + i * 14) + '" y="104" width="7" height="50" fill="#ecd9aa"/><rect x="' + (300 + i * 14) + '" y="104" width="7" height="50" fill="#ecd9aa"/>').join("") +
      steps + '<rect x="0" y="252" width="400" height="8" fill="#9a9a8a"/>' +
      '<g class="run"><g transform="translate(120 230)"><circle cx="0" cy="-22" r="5" fill="#222"/><path d="M0 -17v14M0 -3l-6 10M0 -3l7 8M0 -13l-8 -6M0 -13l8 -8" stroke="#222" stroke-width="3" stroke-linecap="round"/></g></g>' +
      '<path d="M0 170q30 -20 50 0v90H0zM360 170q20 -24 40 -6v96h-40z" fill="#4a7a3a"/>',
      sky("v4", "#f0a060", "#fbe4c0"));
  }

  /* 5. Broad St and Snyder Ave, South Philly: green signs, PAZ tagged on the wall, City Hall and William Penn up Broad Street behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#v5)"/>' + phlSky("#2a2a40", 130) +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3a2e"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#6a3026" stroke-width="1"/>').join("") +
      tag("PAZ", 30, 190, 58, GOLD, -6) + tag("JMT", 160, 186, 34, RED, -4) + tag("AOTP", 120, 216, 22, BLUE, -3) + tag("PAZMAN", 24, 216, 18, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      pole(339, 96, 224) + sign(290, 98, 98, "Broad St") + sign(282, 124, 114, "Snyder Ave") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="sp"><circle cx="200" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="sp sp2"><circle cx="206" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("v5", "#3a2a5a", "#e8806a"));
  }

  window.SCENES = { septa: septa, italianmarket: italianmarket, cheesesteak: cheesesteak, artmuseum: artmuseum, corner: corner };
})();
