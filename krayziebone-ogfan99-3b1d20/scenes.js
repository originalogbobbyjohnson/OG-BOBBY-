/* krayziebone scenes (Regions tab: St. Louis + Ohio; Glenville, Cleveland - St. Clair Ave and E 99th St). CSS classes and ids prefixed kz- (the page's own anim-train is kept on the bus).
   1 RTA route 1 St. Clair bus pulling up to the stop at St. Clair Ave and E 99th St (RTA-blue "1" badge). Real route (OSM: RTA 1 St. Clair runs past the corner).
   2 The Cleveland Greyhound station on Chester Ave (1948 Streamline Moderne: cream enamel bands, rounded corner, tall fin pylon) - a plain silver coach pulling out for LOS ANGELES, the 1993 one-way bus trip west. No brand, no dog.
   3 Rockefeller Park on Martin Luther King Jr Dr, a few blocks from the corner: a stone arch bridge over Doan Brook in the rain, dark cloud overhead, an umbrella walking ("Cloudy", "Refuge From the Rain").
   4 The Cleveland Museum of Art in University Circle (white marble columns) over the Wade Park lagoon, the fountain jumping, birds flying away ("Fly Away").
   5 St. Clair Ave and E 99th St: green signs (every 9 drawn by hand with a straight stem), KRAYZIE tagged on the brick, the Lake Erie lighthouse at the harbor mouth (white tower, red roof) sweeping its beam behind.
   400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kzflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.kz-flk{animation:kzflick 2.2s infinite}' +
    '@keyframes kzcoach{0%{transform:translateX(0)}60%,100%{transform:translateX(-470px)}}.kz-coach{animation:kzcoach 6s ease-in infinite}' +
    '@keyframes kzrain{from{transform:translateY(-30px)}to{transform:translateY(30px)}}.kz-rain{animation:kzrain .8s linear infinite}.kz-rain2{animation-delay:-.4s}' +
    '@keyframes kzwalk{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.kz-walk{animation:kzwalk 14s linear infinite;animation-delay:-6s}' +
    '@keyframes kzcloud{0%,100%{transform:translateX(0)}50%{transform:translateX(18px)}}.kz-cl{animation:kzcloud 7s ease-in-out infinite}' +
    '@keyframes kzjet{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.7)}}.kz-jet{transform-box:fill-box;transform-origin:50% 100%;animation:kzjet 1.2s ease-in-out infinite}' +
    '@keyframes kzfly{0%{transform:translate(0,0)}100%{transform:translate(260px,-120px)}}.kz-bird{animation:kzfly 6s linear infinite}.kz-bird2{animation-delay:-2s}.kz-bird3{animation-delay:-4s}' +
    '@keyframes kzflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.kz-wing{transform-box:fill-box;transform-origin:50% 100%;animation:kzflap .5s ease-in-out infinite}' +
    '@keyframes kzbeam{0%,100%{transform:rotate(-38deg)}50%{transform:rotate(38deg)}}.kz-beam{transform-box:view-box;transform-origin:332px 64px;animation:kzbeam 4s ease-in-out infinite}' +
    '@keyframes kzspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kz-sp{animation:kzspray 1.4s ease-out infinite}.kz-sp2{animation-delay:.45s}' +
    '@keyframes kzrip{0%{transform:scale(.4);opacity:.8}100%{transform:scale(1.6);opacity:0}}.kz-rip{transform-box:fill-box;transform-origin:50% 50%;animation:kzrip 2s ease-out infinite}.kz-rip2{animation-delay:-1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* a 9 drawn by hand: round head + straight stem (never a hooked, G-looking 9). x = left edge, y = baseline, sz = font size */
  const nine = (x, y, sz, c) => { const r = sz * 0.2, w = sz * 0.13; return '<circle cx="' + (x + r + w / 2) + '" cy="' + (y - sz * 0.72 + r) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + w + '"/><path d="M' + (x + 2 * r + w / 2) + ' ' + (y - sz * 0.72 + r) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w + '"/>'; };
  /* "E 99 St" with both 9s hand-drawn; x = left edge */
  const e99 = (x, y, sz, c) => '<text x="' + x + '" y="' + y + '" ' + font + ' font-size="' + sz + '" fill="' + c + '">E</text>' + nine(x + sz * 1.0, y, sz, c) + nine(x + sz * 1.68, y, sz, c) +
    '<text x="' + (x + sz * 2.55) + '" y="' + y + '" ' + font + ' font-size="' + sz + '" fill="' + c + '">St</text>';
  const SKY = "#7fd3ff", GOLD = "#f2c94c", VIO = "#b46cff", RTA = "#0a5bab", SIGN = "#0f6b3a";

  /* 1. RTA route 1 St. Clair bus at St. Clair Ave and E 99th St */
  function kzstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 44) + '" y="98" width="36" height="30" rx="3" fill="#1d2733"/>').join("");
    const bus = '<g class="anim-train"><rect x="60" y="84" width="320" height="86" rx="10" fill="#f2f4f6" stroke="#9aa3ab" stroke-width="2"/>' + win +
      '<rect x="60" y="138" width="320" height="8" fill="' + RTA + '"/><rect x="60" y="148" width="320" height="3" fill="#c8102e"/>' +
      '<rect x="64" y="96" width="10" height="56" rx="2" fill="#1d2733"/><rect x="66" y="88" width="80" height="10" rx="2" fill="#111"/><text x="106" y="96" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">1 ST. CLAIR</text>' +
      '<circle class="kz-flk" cx="66" cy="160" r="3.5" fill="#fff6c2"/><circle cx="120" cy="172" r="12" fill="#222"/><circle cx="120" cy="172" r="5" fill="#777"/><circle cx="320" cy="172" r="12" fill="#222"/><circle cx="320" cy="172" r="5" fill="#777"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kzs1)"/>' +
      '<g fill="#2c3247"><rect x="0" y="40" width="54" height="90"/><path d="M60 130V64l30-20 30 20v66z"/><rect x="300" y="50" width="46" height="80"/><path d="M350 130V70l25-16 25 16v60z"/></g>' +
      '<g fill="#ffd98a" opacity=".75"><rect x="12" y="56" width="9" height="12"/><rect x="32" y="56" width="9" height="12"/><rect x="82" y="70" width="10" height="12"/><rect x="314" y="64" width="9" height="12"/><rect x="368" y="80" width="9" height="12"/></g>' +
      '<rect x="0" y="180" width="400" height="80" fill="#3b3e44"/><path d="M0 218h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="0" y="176" width="400" height="8" fill="#a9a59c"/>' +
      bus +
      /* bus stop pole + sign */
      '<rect x="388" y="100" width="4" height="84" fill="#555"/><rect x="372" y="78" width="26" height="22" rx="3" fill="' + RTA + '" stroke="#fff" stroke-width="1.5"/><text x="385" y="93" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">BUS</text>' +
      /* black stop sign, route badge */
      '<rect x="96" y="196" width="208" height="46" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<text x="114" y="218" ' + font + ' font-size="17" fill="#fff" letter-spacing="1">ST. CLAIR AV</text>' + e99(114, 236, 13, "#f3e3c3") +
      '<circle cx="282" cy="219" r="14" fill="' + RTA + '"/><text x="282" y="225" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">1</text>',
      sky("kzs1", "#141a33", "#5a5f8f"));
  }

  /* 2. The Streamline Moderne Greyhound station on Chester Ave, a plain coach leaving for Los Angeles */
  function kzgreyhound() {
    const coach = '<g class="kz-coach"><rect x="250" y="168" width="170" height="52" rx="8" fill="#c9ced3" stroke="#7d858c" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (272 + i * 28) + '" y="176" width="22" height="18" rx="2" fill="#24303c"/>').join("") +
      '<rect x="252" y="176" width="16" height="30" rx="2" fill="#24303c"/><rect x="250" y="200" width="170" height="4" fill="#3d6fb6"/>' +
      '<rect x="256" y="170" width="70" height="8" rx="1" fill="#111"/><text x="291" y="177" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb347">LOS ANGELES</text>' +
      '<circle cx="280" cy="222" r="10" fill="#222"/><circle cx="390" cy="222" r="10" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kzs2)"/>' +
      /* main building: cream enamel, horizontal blue bands, rounded left corner */
      '<path d="M40 160V92a26 26 0 0 1 26-26h290v94z" fill="#efe7d3"/>' +
      '<path d="M40 108h316M40 122h316" stroke="#2f5d9e" stroke-width="5"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (110 + i * 34) + '" y="130" width="24" height="24" fill="#2a3a4a"/>').join("") +
      '<rect x="64" y="130" width="34" height="30" fill="#2a3a4a"/><rect x="64" y="128" width="34" height="3" fill="#2f5d9e"/>' +
      /* tall fin pylon */
      '<rect x="150" y="18" width="30" height="104" rx="3" fill="#efe7d3" stroke="#2f5d9e" stroke-width="3"/>' +
      '<g ' + font + ' font-size="12" fill="#2f5d9e" text-anchor="middle"><text x="165" y="40">B</text><text x="165" y="58">U</text><text x="165" y="76">S</text></g>' +
      '<rect class="kz-flk" x="156" y="84" width="18" height="30" fill="#ffcf6a" opacity=".55"/>' +
      '<rect x="40" y="160" width="340" height="8" fill="#b9b3a4"/>' +
      '<rect x="0" y="168" width="400" height="92" fill="#3a3c41"/><path d="M0 232h400" stroke="#d9d9d9" stroke-width="2" stroke-dasharray="20 14"/>' +
      coach +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e3c3" letter-spacing="2">CHESTER AVE · ONE WAY WEST</text>',
      sky("kzs2", "#f39c6b", "#ffe0a8"));
  }

  /* 3. Rockefeller Park: stone arch bridge over Doan Brook, rain, an umbrella walking */
  function kzgardens() {
    const drops = (cls) => '<g class="kz-rain ' + cls + '" stroke="#bcd6f2" stroke-width="1.3" opacity=".7">' +
      Array.from({ length: 34 }, (_, i) => { const x = (i * 37) % 400 + (cls ? 9 : 0), y = (i * 53) % 200; return '<path d="M' + x + ' ' + y + 'l-3 10"/>'; }).join("") + '</g>';
    const balust = Array.from({ length: 22 }, (_, i) => '<rect x="' + (62 + i * 13) + '" y="104" width="5" height="16" fill="#b6ad9b"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kzs3)"/>' +
      '<g class="kz-cl" fill="#3a3f4f"><ellipse cx="130" cy="42" rx="90" ry="26"/><ellipse cx="220" cy="34" rx="80" ry="24"/><ellipse cx="300" cy="46" rx="90" ry="24"/></g>' +
      '<g fill="#2e5a3a"><circle cx="20" cy="140" r="40"/><circle cx="380" cy="136" r="44"/><circle cx="60" cy="150" r="30"/><circle cx="350" cy="152" r="30"/></g>' +
      /* stone bridge */
      '<path d="M40 120h320v52H40z" fill="#9c927f"/><path d="M130 172a70 52 0 0 1 140 0z" fill="#26313a"/>' +
      '<path d="M40 100h320v6H40z" fill="#c9c0ac"/>' + balust + '<path d="M40 120h320v4H40z" fill="#c9c0ac"/>' +
      '<path d="M126 172a74 56 0 0 1 148 0" fill="none" stroke="#c9c0ac" stroke-width="5"/>' +
      /* brook */
      '<rect x="0" y="172" width="400" height="88" fill="#2f4a5c"/>' +
      '<ellipse class="kz-rip" cx="200" cy="200" rx="18" ry="4" fill="none" stroke="#9cc3e0" stroke-width="1.2"/><ellipse class="kz-rip kz-rip2" cx="120" cy="226" rx="16" ry="4" fill="none" stroke="#9cc3e0" stroke-width="1.2"/><ellipse class="kz-rip" cx="300" cy="216" rx="16" ry="4" fill="none" stroke="#9cc3e0" stroke-width="1.2"/>' +
      /* umbrella walker on the bridge (no face) */
      '<g class="kz-walk"><path d="M0 70a20 13 0 0 1 40 0z" fill="' + VIO + '"/><path d="M20 70v20" stroke="#222" stroke-width="2"/><rect x="13" y="78" width="14" height="20" rx="4" fill="#20232b"/><path d="M15 98l-2 4M25 98l2 4" stroke="#20232b" stroke-width="3"/></g>' +
      drops("") + drops("kz-rain2") +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#e0e8f2" letter-spacing="2">MLK JR DR · ROCKEFELLER PARK</text>',
      sky("kzs3", "#4a5163", "#8a93a6"));
  }

  /* 4. Cleveland Museum of Art over the Wade Park lagoon, the fountain jumping, birds flying away */
  function kzmuseum() {
    const cols = Array.from({ length: 8 }, (_, i) => '<rect x="' + (136 + i * 18) + '" y="70" width="9" height="58" fill="#f4f1ea"/><rect x="' + (134 + i * 18) + '" y="68" width="13" height="4" fill="#e2ddd2"/>').join("");
    const bird = (cls, x, y) => '<g class="kz-bird ' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><path class="kz-wing" d="M0 0q9 -10 18 0q9 -10 18 0" fill="none" stroke="#1f2430" stroke-width="3.2" stroke-linecap="round"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kzs4)"/>' +
      '<circle cx="320" cy="56" r="20" fill="#ffe6a6" opacity=".9"/>' +
      '<g fill="#3e6b46"><circle cx="40" cy="120" r="38"/><circle cx="96" cy="128" r="28"/><circle cx="360" cy="120" r="40"/><circle cx="306" cy="130" r="26"/></g>' +
      /* marble facade */
      '<rect x="110" y="128" width="180" height="16" fill="#e8e3d8"/><rect x="118" y="60" width="164" height="10" fill="#e8e3d8"/><path d="M118 60l82 -26 82 26z" fill="#efebe2"/>' + cols +
      '<rect x="112" y="144" width="176" height="6" fill="#cfc9bb"/><rect x="150" y="150" width="100" height="8" fill="#ddd7c9"/>' +
      /* lagoon + reflection */
      '<rect x="0" y="160" width="400" height="100" fill="#365e7a"/><path d="M118 168h164v34H118z" fill="#e8e3d8" opacity=".18"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (30 + i * 66) + ' ' + (190 + (i % 2) * 20) + 'h30" stroke="#8fb7d4" stroke-width="1.5" opacity=".6"/>').join("") +
      /* fountain */
      '<ellipse cx="200" cy="214" rx="26" ry="5" fill="#a9cbe2"/><path class="kz-jet" d="M194 214q6 -60 12 0z" fill="#d8ecf8" opacity=".9"/><path class="kz-jet" d="M184 214q4 -30 8 0zM208 214q4 -30 8 0z" fill="#d8ecf8" opacity=".75"/>' +
      bird("", 40, 120) + bird("kz-bird2", 70, 140) + bird("kz-bird3", 20, 150) +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e3c3" letter-spacing="2">WADE PARK · UNIVERSITY CIRCLE</text>',
      sky("kzs4", "#8fc8ef", "#f6dfb4"));
  }

  /* 5. St. Clair Ave and E 99th St: green signs, KRAYZIE tagged, the lighthouse on Lake Erie behind */
  function kzcorner() {
    const sign = (x, y, w, inner) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' + inner;
    return svg(
      '<rect width="400" height="260" fill="url(#kzs5)"/>' +
      /* lake + lighthouse */
      '<rect x="0" y="112" width="400" height="20" fill="#2c4f74"/>' +
      '<g class="kz-beam"><path d="M332 64L520 30L520 98z" fill="#fff6c2" opacity=".28"/><path d="M332 64L144 30L144 98z" fill="#fff6c2" opacity=".28"/></g>' +
      '<rect x="312" y="104" width="40" height="10" fill="#d8d2c4"/><path d="M322 104l4 -36h12l4 36z" fill="#f4f1ea"/><rect x="324" y="58" width="16" height="10" fill="#222"/><circle class="kz-flk" cx="332" cy="63" r="4" fill="#fff3b0"/><path d="M320 58l12 -10 12 10z" fill="#c8102e"/>' +
      '<g fill="#2b2f45"><rect x="0" y="92" width="64" height="40"/><path d="M70 132V100l22-14 22 14v32z"/><rect x="230" y="96" width="60" height="36"/></g>' +
      /* brick wall */
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("KRAYZIE", 20, 192, 50, SKY, -6) + tag("THUGLINE", 120, 218, 18, GOLD, -4) + tag("KRAY JACK", 22, 216, 16, VIO, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' +
      sign(250, 98, 140, '<text x="320" y="114" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">St Clair Av</text>') +
      sign(278, 124, 90, e99(296, 140, 13, "#fff")) +
      '<g class="kz-sp"><circle cx="212" cy="170" r="3" fill="' + SKY + '" opacity=".7"/></g><g class="kz-sp kz-sp2"><circle cx="218" cy="164" r="2" fill="' + SKY + '" opacity=".6"/></g>',
      sky("kzs5", "#1e2a55", "#e98e6a"));
  }

  window.SCENES = { kzstation: kzstation, kzgreyhound: kzgreyhound, kzgardens: kzgardens, kzmuseum: kzmuseum, kzcorner: kzcorner };
})();
