/* cousinstizz scenes (Regions tab: Boston + New England; Fields Corner, Dorchester). CSS classes and ids prefixed cz- (the page's own anim-train is kept).
   1 Fields Corner on the Red Line (Ashmont branch): open-air platform in the cut under the busway canopy, a silver Red Line train with its red band sliding in.
   2 The Celtics' parquet at the Garden (he's a lifelong Celtics fan): the parquet floor, green key, title banners up top, a ball dropping through the net.
   3 Columbia Point, Dorchester: the white I.M. Pei tower and black glass pavilion of the JFK Library on the harbor, a sailboat gliding by.
   4 Newbury Street, Back Bay (Neimans Barneys / "Saks Fifth, Riccardi's"): brownstone boutiques with colored awnings, shopping bags swinging, a car rolling past.
   5 Dorchester Ave and Adams St in Fields Corner: green signs, STIZZ tagged on the brick, the Rainbow Swash gas tank on Commercial Point behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes czflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.cz-flk{animation:czflick 2.2s infinite}.cz-flk2{animation-delay:.7s}' +
    '@keyframes czcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.cz-car{animation:czcar 7s linear infinite}.cz-car2{animation-delay:-3.5s}' +
    '@keyframes czcarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.cz-carL{animation:czcarL 8s linear infinite}.cz-carL2{animation-delay:-4s}' +
    '@keyframes czball{0%{transform:translate(-70px,-40px)}45%{transform:translate(0,-6px)}60%{transform:translate(0,22px)}100%{transform:translate(0,70px);opacity:0}}.cz-ball{animation:czball 2.6s ease-in infinite}' +
    '@keyframes cznet{0%,50%,100%{transform:scaleY(1)}62%{transform:scaleY(1.25)}}.cz-net{transform-box:fill-box;transform-origin:50% 0%;animation:cznet 2.6s ease-in infinite}' +
    '@keyframes czban{0%,100%{transform:skewX(0)}50%{transform:skewX(4deg)}}.cz-ban{transform-box:fill-box;transform-origin:50% 0%;animation:czban 3s ease-in-out infinite}.cz-ban2{animation-delay:-1.5s}' +
    '@keyframes czsail{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.cz-sail{animation:czsail 18s linear infinite}' +
    '@keyframes czgull{from{transform:translate(-40px,0)}to{transform:translate(440px,-30px)}}.cz-gull{animation:czgull 11s linear infinite}.cz-gull2{animation-delay:-5s}' +
    '@keyframes czrip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.cz-rip{animation:czrip 3s ease-in-out infinite}.cz-rip2{animation-delay:-1.5s}' +
    '@keyframes czswing{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}.cz-bag{transform-box:fill-box;transform-origin:50% 0%;animation:czswing 1.6s ease-in-out infinite}.cz-bag2{animation-delay:-.8s}' +
    '@keyframes czspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cz-sp{animation:czspray 1.4s ease-out infinite}.cz-sp2{animation-delay:.45s}' +
    '@keyframes czblink{0%,100%{opacity:.25}50%{opacity:1}}.cz-bl{animation:czblink 1.6s ease-in-out infinite}.cz-bl2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const RED = "#da291c", GREEN = "#2fa36b", GOLD = "#f2c94c";

  /* Rainbow Swash: the white gas tank with the painted rainbow brush strokes */
  const swash = (cx, base, r, h) => {
    const strokes = [["#e4362f", -0.55], ["#f58a1f", -0.3], ["#f7d23b", -0.05], ["#3aa655", 0.2], ["#2a6fc9", 0.45], ["#7a3fa0", 0.7]];
    return '<g><rect x="' + (cx - r) + '" y="' + (base - h) + '" width="' + (2 * r) + '" height="' + h + '" fill="#f4f4f0"/>' +
      '<ellipse cx="' + cx + '" cy="' + (base - h) + '" rx="' + r + '" ry="' + (r * 0.18) + '" fill="#e2e2dc"/>' +
      '<rect x="' + (cx - r) + '" y="' + (base - h) + '" width="' + (r * 0.35) + '" height="' + h + '" fill="#d9d9d2"/>' +
      strokes.map(s => '<path d="M' + (cx + s[1] * r) + ' ' + (base - h * 0.9) + 'q' + (r * 0.12) + ' ' + (h * 0.35) + ' ' + (-r * 0.04) + ' ' + (h * 0.8) + '" stroke="' + s[0] + '" stroke-width="' + (r * 0.13) + '" stroke-linecap="round" fill="none"/>').join("") + '</g>';
  };

  /* 1. Fields Corner, Red Line */
  function czstation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (44 + i * 48) + '" y="128" width="34" height="22" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="118" width="330" height="70" rx="8" fill="#cfd4d8" stroke="#6d757c" stroke-width="2"/>' + win +
      '<rect x="24" y="156" width="330" height="9" fill="' + RED + '"/><rect x="24" y="168" width="330" height="3" fill="' + RED + '"/>' +
      '<rect x="334" y="122" width="18" height="60" rx="4" fill="#aeb4ba"/><circle cx="344" cy="176" r="3.5" fill="#fff6c2"/>' +
      '<rect x="282" y="124" width="48" height="12" rx="2" fill="#111"/><text x="306" y="133" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">ASHMONT</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#czs1)"/>' +
      '<g fill="#3d3a46"><rect x="0" y="40" width="60" height="50"/><path d="M0 40l30 -18 30 18z"/><rect x="300" y="36" width="52" height="54"/><path d="M300 36l26 -16 26 16z"/><rect x="352" y="48" width="48" height="42"/></g>' +
      '<rect x="0" y="58" width="400" height="12" fill="#55606b"/><rect x="0" y="54" width="400" height="5" fill="#8a96a2"/>' +
      [30, 140, 260, 370].map(x => '<rect x="' + (x - 4) + '" y="70" width="8" height="40" fill="#44505b"/>').join("") +
      '<rect x="0" y="90" width="400" height="22" fill="#8b8579"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 40) + ' 90v22" stroke="#7a7468" stroke-width="2"/>').join("") +
      '<g class="cz-flk"><rect x="80" y="72" width="40" height="4" fill="#fff3c4"/></g><g class="cz-flk cz-flk2"><rect x="280" y="72" width="40" height="4" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="190" width="400" height="8" fill="#f2c200"/><rect x="0" y="198" width="400" height="62" fill="#9a958c"/><path d="M0 226h400" stroke="#8a857c" stroke-width="2"/>' +
      '<rect x="92" y="206" width="216" height="34" rx="3" fill="#111"/><text x="106" y="229" ' + font + ' font-size="17" fill="#fff">Fields Corner</text>' + badge(240, 223, "RL", RED),
      sky("czs1", "#24304f", "#d98a5e"));
  }

  /* 2. The parquet */
  function czgarden() {
    let parquet = "";
    for (let r = 0; r < 6; r++) for (let c = 0; c < 14; c++) {
      const x = c * 30 - (r % 2) * 15, y = 150 + r * 19;
      parquet += '<rect x="' + x + '" y="' + y + '" width="30" height="19" fill="' + ((r + c) % 2 ? "#c98a4b" : "#b5733a") + '"/>' +
        ((r + c) % 2 ? '<path d="M' + (x + 10) + ' ' + y + 'v19M' + (x + 20) + ' ' + y + 'v19" stroke="#a9682f" stroke-width="1"/>' : '<path d="M' + x + ' ' + (y + 6) + 'h30M' + x + ' ' + (y + 13) + 'h30" stroke="#a26330" stroke-width="1"/>');
    }
    const banners = [40, 92, 144, 256, 308, 360].map((x, i) => '<g class="cz-ban' + (i % 2 ? " cz-ban2" : "") + '"><rect x="' + (x - 16) + '" y="6" width="32" height="44" fill="' + GREEN + '"/><path d="M' + (x - 16) + ' 50l16 8 16 -8z" fill="' + GREEN + '"/><rect x="' + (x - 12) + '" y="14" width="24" height="3" fill="#fff"/><rect x="' + (x - 12) + '" y="38" width="24" height="3" fill="#fff"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#czs2)"/>' +
      Array.from({ length: 90 }, (_, i) => '<circle cx="' + ((i * 37) % 400) + '" cy="' + (78 + (i * 13) % 56) + '" r="2.2" fill="' + ["#2fa36b", "#ffffff", "#1d6b45", "#e8e2c8"][i % 4] + '" opacity=".55"/>').join("") +
      banners +
      '<rect x="0" y="140" width="400" height="10" fill="#1d1d1d"/>' + parquet +
      '<path d="M140 150h120l20 110H120z" fill="' + GREEN + '" opacity=".92"/><path d="M140 150h120l20 110H120z" fill="none" stroke="#fff" stroke-width="3"/>' +
      '<ellipse cx="200" cy="258" rx="58" ry="22" fill="none" stroke="#fff" stroke-width="3"/>' +
      '<rect x="196" y="88" width="8" height="64" fill="#555"/><rect x="164" y="64" width="72" height="44" rx="2" fill="#f4f6f8" stroke="#bbb" stroke-width="2"/><rect x="188" y="82" width="24" height="18" fill="none" stroke="' + RED + '" stroke-width="2.5"/>' +
      '<ellipse cx="200" cy="104" rx="15" ry="4" fill="none" stroke="#ff6a1a" stroke-width="3"/>' +
      '<g class="cz-net"><path d="M186 105l4 18h20l4 -18M192 105l3 18M200 105v18M208 105l-3 18" stroke="#fff" stroke-width="1.4" fill="none"/></g>' +
      '<g class="cz-ball"><circle cx="200" cy="92" r="8" fill="#e9772b" stroke="#6b3311" stroke-width="1.5"/><path d="M192 92h16M200 84v16" stroke="#6b3311" stroke-width="1.2"/></g>',
      sky("czs2", "#0f1612", "#24352b"));
  }

  /* 3. JFK Library, Columbia Point */
  function czjfk() {
    return svg(
      '<rect width="400" height="260" fill="url(#czs3)"/>' +
      '<g class="cz-gull"><path d="M20 50q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="cz-gull cz-gull2"><path d="M60 70q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<g fill="#7d8ea3" opacity=".55"><rect x="20" y="118" width="16" height="44"/><rect x="40" y="104" width="14" height="58"/><rect x="58" y="124" width="20" height="38"/></g>' +
      '<rect x="0" y="158" width="400" height="10" fill="#5f7d4a"/>' +
      '<path d="M150 160V62l26 -10h70v108z" fill="#f2f1ec"/><path d="M150 62l26 -10v108h-26z" fill="#dcdbd4"/><rect x="190" y="66" width="44" height="6" fill="#d0cfc8"/>' +
      '<path d="M246 160V74h84v86z" fill="#1c232b"/><path d="M246 74l84 0v86" fill="none" stroke="#3a4552" stroke-width="2"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (258 + i * 13) + ' 76v84" stroke="#33404d" stroke-width="1.5"/>').join("") +
      '<rect x="252" y="80" width="72" height="20" fill="#5b7a99" opacity=".35"/><path d="M118 160v-34h32v34z" fill="#e8e7e0"/>' +
      '<rect x="0" y="166" width="400" height="94" fill="#3f6f9a"/>' +
      '<g class="cz-rip"><path d="M10 186h60M120 200h80M260 184h70M40 222h90M230 236h120" stroke="#9cc6e8" stroke-width="2" stroke-linecap="round" opacity=".7"/></g>' +
      '<g class="cz-rip cz-rip2"><path d="M80 210h50M300 210h60M150 246h70" stroke="#c9e2f5" stroke-width="2" stroke-linecap="round" opacity=".6"/></g>' +
      '<g class="cz-sail"><path d="M40 214h52l-8 12H48z" fill="#fff"/><path d="M66 212V160l-24 50z" fill="#f4f1e6"/><path d="M68 212V170l18 40z" fill="' + RED + '"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#e8f2fb">COLUMBIA POINT · DORCHESTER</text>',
      sky("czs3", "#7fb4e0", "#eaf4fb"));
  }

  /* 4. Newbury Street */
  function cznewbury() {
    const aw = ["#2fa36b", "#1f2a44", "#c0392b", "#d4a017", "#5e3a7a"];
    const fronts = [0, 80, 160, 240, 320].map((x, i) => '<rect x="' + x + '" y="40" width="80" height="150" fill="' + (i % 2 ? "#8a4b3a" : "#9b5a45") + '" stroke="#6e3a2c" stroke-width="2"/>' +
      [0, 1].map(r => '<rect x="' + (x + 14) + '" y="' + (52 + r * 34) + '" width="18" height="24" fill="#f6dfa3" opacity=".85"/><rect x="' + (x + 48) + '" y="' + (52 + r * 34) + '" width="18" height="24" fill="#f6dfa3" opacity=".85"/>').join("") +
      '<path d="M' + (x + 6) + ' 126h68l6 16H' + x + 'z" fill="' + aw[i] + '"/><path d="M' + x + ' 142h80" stroke="#fff" stroke-width="2" stroke-dasharray="6 6"/>' +
      '<rect x="' + (x + 10) + '" y="146" width="60" height="44" fill="#2a3540"/><rect x="' + (x + 14) + '" y="150" width="24" height="36" fill="#d9e8f2" opacity=".55"/><rect x="' + (x + 44) + '" y="150" width="22" height="40" fill="#5a3a2a"/>').join("");
    const bag = (x, cls, c) => '<g class="cz-bag ' + cls + '"><path d="M' + (x + 4) + ' 196q6 -10 12 0" stroke="#222" stroke-width="2" fill="none"/><rect x="' + x + '" y="196" width="20" height="24" rx="2" fill="' + c + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#czs4)"/>' + fronts +
      '<rect x="0" y="190" width="400" height="18" fill="#c7c1b5"/><rect x="0" y="208" width="400" height="52" fill="#4a4a4f"/><path d="M0 236h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="18 14"/>' +
      bag(120, "", "#f2c94c") + bag(146, "cz-bag2", "#1f2a44") + bag(262, "", "#c0392b") +
      car("cz-car", 0, 222, "#e8e8e8") + car("cz-carL cz-carL2", 0, 240, "#2fa36b") +
      '<text x="200" y="30" text-anchor="middle" ' + font + ' font-size="11" fill="#2b2b2b">NEWBURY ST · BACK BAY</text>',
      sky("czs4", "#a9d3f2", "#f6efe2"));
  }

  /* 5. Dorchester Ave and Adams St */
  function czcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#czs5)"/>' +
      '<g fill="#2b2f45"><rect x="0" y="96" width="70" height="40"/><rect x="250" y="90" width="60" height="46"/><rect x="320" y="100" width="80" height="36"/></g>' +
      swash(170, 136, 56, 74) +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("STIZZ", 22, 190, 56, GOLD, -6) + tag("SUFFOLK COUNTY", 112, 216, 18, "#7fd1a8", -4) + tag("MONDA", 30, 214, 17, "#ff7a6b", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(240, 98, 150, "Dorchester Av") + sign(260, 124, 110, "Adams St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="cz-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="cz-sp"><circle cx="196" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="cz-sp cz-sp2"><circle cx="202" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("czs5", "#2e3566", "#f0a070"));
  }

  window.SCENES = { czstation: czstation, czgarden: czgarden, czjfk: czjfk, cznewbury: cznewbury, czcorner: czcorner };
})();
