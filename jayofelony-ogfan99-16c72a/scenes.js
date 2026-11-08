/* jayofelony scenes (Regions tab: Los Angeles + SoCal; Southeast San Diego / Chollas View). CSS classes and ids prefixed jf- (the page's own anim-train is kept).
   1 47th Street station on the MTS Orange Line: at-grade side platforms under a shade canopy, a red San Diego Trolley car sliding in under the wire, palms at sunset.
   2 Gompers Park on Hilltop Dr ("Bring it back to Gompers Park before two" / "On fo' seven, the helicopter lights nearly blind me"): night court, palms, a helicopter sweeping its light.
   3 "Let's take a ride to the coast": the blue San Diego-Coronado Bridge curving over the bay on its concrete piers, a sailboat and cars moving.
   4 Balboa Park: the cream California Tower with its blue-and-gold tiled dome, the carillon bell swinging, pigeons flying.
   5 47th St and Market St, Chollas View: green signs, JAYO tagged on the stucco wall, the downtown San Diego skyline behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jfflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.jf-flk{animation:jfflick 2.4s infinite}.jf-flk2{animation-delay:.8s}' +
    '@keyframes jfsweep{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.jf-beam{transform-box:view-box;transform-origin:300px 52px;animation:jfsweep 4s ease-in-out infinite}' +
    '@keyframes jfheli{0%,100%{transform:translate(0,0)}50%{transform:translate(-12px,4px)}}.jf-heli{animation:jfheli 4s ease-in-out infinite}' +
    '@keyframes jfrotor{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.2)}}.jf-rot{transform-box:fill-box;transform-origin:50% 50%;animation:jfrotor .18s linear infinite}' +
    '@keyframes jfsail{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.jf-sail{animation:jfsail 20s linear infinite}' +
    '@keyframes jfcar{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.jf-car{animation:jfcar 6s linear infinite}.jf-car2{animation-delay:-3s}' +
    '@keyframes jfrip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.jf-rip{animation:jfrip 3s ease-in-out infinite}.jf-rip2{animation-delay:-1.5s}' +
    '@keyframes jfbell{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.jf-bell{transform-box:fill-box;transform-origin:50% 0%;animation:jfbell 1.4s ease-in-out infinite}' +
    '@keyframes jfbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-40px)}}.jf-bird{animation:jfbird 10s linear infinite}.jf-bird2{animation-delay:-5s}' +
    '@keyframes jfball{0%{transform:translate(-40px,30px)}45%{transform:translate(0,-6px)}60%{transform:translate(0,16px)}100%{transform:translate(0,46px);opacity:0}}.jf-ball{animation:jfball 2.6s ease-in infinite}' +
    '@keyframes jfspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jf-sp{animation:jfspray 1.4s ease-out infinite}.jf-sp2{animation-delay:.45s}' +
    '@keyframes jfsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.jf-palm{transform-box:fill-box;transform-origin:50% 100%;animation:jfsway 3.5s ease-in-out infinite}.jf-palm2{animation-delay:-1.7s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const ORANGE = "#f7941d", BLUE = "#4fb3ff", SAND = "#e8d27a", TROLLEY = "#c8102e";

  /* a palm tree: trunk from (x, base) up to height h, fronds at the top */
  const palm = (x, base, h, c, cls) => {
    const tx = x + h * 0.08, ty = base - h;
    const fr = [[-34, 10], [-26, -6], [-10, -16], [10, -16], [26, -6], [34, 10], [-18, 16], [18, 16]].map(f =>
      '<path d="M' + tx + ' ' + ty + 'q' + (f[0] * 0.5) + ' ' + (f[1] * 0.5 - 10) + ' ' + f[0] + ' ' + f[1] + '" stroke="' + c + '" stroke-width="5" fill="none" stroke-linecap="round"/>').join("");
    return '<g class="jf-palm ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'Q' + (x + h * 0.02) + ' ' + (base - h * 0.5) + ' ' + tx + ' ' + ty + '" stroke="' + c + '" stroke-width="5" fill="none"/>' + fr + '</g>';
  };
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="40" height="10" rx="4" fill="' + c + '"/><rect x="' + (x + 9) + '" y="' + (y - 6) + '" width="22" height="8" rx="3" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 4) + '" width="7" height="4" fill="#bfe3ff"/><rect x="' + (x + 21) + '" y="' + (y - 4) + '" width="7" height="4" fill="#bfe3ff"/><circle cx="' + (x + 9) + '" cy="' + (y + 10) + '" r="3.5" fill="#111"/><circle cx="' + (x + 31) + '" cy="' + (y + 10) + '" r="3.5" fill="#111"/></g>';

  /* 1. 47th Street, MTS Orange Line (at grade) */
  function jfstation() {
    const win = [44, 82, 120, 204, 242, 280].map(x => '<rect x="' + x + '" y="124" width="30" height="24" rx="3" fill="#1b2630"/>').join("");
    const train = '<g class="anim-train">' +
      '<path d="M150 104l14 -12h40l14 12" stroke="#333" stroke-width="2.5" fill="none"/><rect x="146" y="104" width="76" height="5" fill="#555"/>' +
      '<rect x="28" y="108" width="320" height="74" rx="9" fill="' + TROLLEY + '" stroke="#7a0a1c" stroke-width="2"/>' + win +
      '<rect x="28" y="154" width="320" height="6" fill="#f3f3f3"/><rect x="28" y="166" width="320" height="16" rx="4" fill="#3a3a3a"/>' +
      '<rect x="160" y="120" width="16" height="46" fill="#2a2a2a"/><rect x="177" y="120" width="16" height="46" fill="#2a2a2a"/><rect x="163" y="124" width="10" height="18" fill="#1b2630"/><rect x="180" y="124" width="10" height="18" fill="#1b2630"/>' +
      '<rect x="326" y="114" width="20" height="62" rx="6" fill="#a50d26"/><rect x="330" y="120" width="13" height="18" rx="2" fill="#1b2630"/><circle cx="337" cy="170" r="3.5" fill="#fff6c2"/>' +
      '<rect x="270" y="112" width="52" height="10" rx="2" fill="#111"/><text x="296" y="120" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + ORANGE + '">EL CAJON</text>' +
      '<circle cx="80" cy="184" r="7" fill="#222"/><circle cx="110" cy="184" r="7" fill="#222"/><circle cx="270" cy="184" r="7" fill="#222"/><circle cx="300" cy="184" r="7" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jfs1)"/><circle cx="330" cy="70" r="22" fill="#ffd27a" opacity=".85"/>' +
      '<path d="M0 98q60 -26 120 -12t130 -10t150 8v20H0z" fill="#8a6a5a"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (10 + i * 44) + '" y="' + (88 - (i % 3) * 4) + '" width="18" height="12" fill="#d8b89a"/><path d="M' + (8 + i * 44) + ' ' + (88 - (i % 3) * 4) + 'l11 -6 11 6z" fill="#a3473a"/>').join("") +
      palm(24, 112, 70, "#2c2a26") + palm(372, 112, 82, "#2c2a26", "jf-palm2") +
      '<path d="M0 98h400" stroke="#3a3a3a" stroke-width="1.5"/>' + [70, 200, 330].map(x => '<rect x="' + (x - 2) + '" y="62" width="4" height="50" fill="#555"/><rect x="' + (x - 14) + '" y="62" width="28" height="3" fill="#555"/>').join("") +
      '<rect x="0" y="108" width="400" height="80" fill="#7d7468" opacity=".35"/>' +
      train +
      '<rect x="0" y="188" width="400" height="8" fill="#f2c200"/><rect x="0" y="196" width="400" height="64" fill="#b9ad9a"/><path d="M0 222h400" stroke="#a89c88" stroke-width="2"/>' +
      
      '<rect x="74" y="204" width="240" height="34" rx="3" fill="#111"/><text x="90" y="227" ' + font + ' font-size="17" fill="#fff">47th Street</text>' + badge(206, 221, "ORANGE", ORANGE),
      sky("jfs1", "#2c3a6b", "#f2a65a"));
  }

  /* 2. Gompers Park at night */
  function jfgompers() {
    return svg(
      '<rect width="400" height="260" fill="url(#jfs2)"/>' +
      Array.from({ length: 22 }, (_, i) => '<circle cx="' + ((i * 67) % 400) + '" cy="' + (8 + (i * 29) % 70) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      '<g class="jf-beam"><path d="M300 52L250 236H350z" fill="#fff6c8" opacity=".22"/></g>' +
      '<g class="jf-heli"><ellipse cx="300" cy="50" rx="18" ry="8" fill="#20242c"/><rect x="314" y="47" width="30" height="4" fill="#20242c"/><rect x="342" y="42" width="3" height="10" fill="#20242c"/>' +
      '<rect class="jf-rot" x="276" y="38" width="48" height="2.5" fill="#444"/><rect x="298" y="39" width="3" height="5" fill="#20242c"/><path d="M290 60h22" stroke="#20242c" stroke-width="2"/><circle cx="292" cy="54" r="2" fill="#ff5050" class="jf-flk"/></g>' +
      '<path d="M0 150q100 -18 200 -6t200 -4v120H0z" fill="#1d3b25"/>' +
      palm(40, 170, 96, "#0e1a12") + palm(120, 160, 74, "#0e1a12", "jf-palm2") + palm(360, 168, 100, "#0e1a12") +
      '<rect x="0" y="176" width="400" height="84" fill="#2f5d8a"/><path d="M0 176h400M200 176v84" stroke="#e8eef5" stroke-width="2"/><circle cx="200" cy="218" r="22" fill="none" stroke="#e8eef5" stroke-width="2"/>' +
      '<path d="M300 176v-56" stroke="#9aa3ad" stroke-width="5"/><rect x="282" y="104" width="40" height="26" fill="#f4f4f4" stroke="#9aa3ad" stroke-width="2"/><rect x="294" y="114" width="16" height="12" fill="none" stroke="#c8102e" stroke-width="2"/>' +
      '<path d="M294 130h16l-2 14h-12z" fill="none" stroke="#fff" stroke-width="1.5"/>' +
      '<g class="jf-ball"><circle cx="302" cy="112" r="6" fill="#e8742a" stroke="#6a2f0e" stroke-width="1"/></g>' +
      '<rect x="16" y="196" width="128" height="40" rx="4" fill="#5a3b22" stroke="#e9d9b8" stroke-width="2"/><text x="80" y="214" text-anchor="middle" ' + font + ' font-size="13" fill="#f3e6c8">GOMPERS PARK</text><text x="80" y="229" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e6c8">HILLTOP DR</text>' +
      '<rect x="40" y="236" width="6" height="24" fill="#3a2716"/><rect x="114" y="236" width="6" height="24" fill="#3a2716"/>',
      sky("jfs2", "#0a0f24", "#2b2f5a"));
  }

  /* 3. The Coronado Bridge over the bay */
  function jfbridge() {
    const pier = (x, top) => '<rect x="' + (x - 4) + '" y="' + top + '" width="8" height="' + (196 - top) + '" fill="#d9d4c8"/><rect x="' + (x - 7) + '" y="' + (top - 2) + '" width="14" height="4" fill="#c4bfb3"/>';
    const deckY = x => 150 - 62 * Math.sin(Math.PI * Math.min(1, Math.max(0, (x - 20) / 360)));
    const piers = [40, 80, 120, 160, 200, 240, 280, 320, 360].map(x => pier(x, deckY(x) + 8)).join("");
    let deck = "M20 " + deckY(20).toFixed(1);
    for (let x = 30; x <= 380; x += 10) deck += "L" + x + " " + deckY(x).toFixed(1);
    return svg(
      '<rect width="400" height="260" fill="url(#jfs3)"/><circle cx="70" cy="56" r="18" fill="#fff1b8" opacity=".9"/>' +
      '<g fill="#6f7d92"><rect x="0" y="132" width="16" height="44"/><rect x="18" y="146" width="12" height="30"/><rect x="380" y="150" width="20" height="26"/></g>' +
      '<rect x="0" y="176" width="400" height="84" fill="#1f6f9e"/>' +
      '<g class="jf-rip"><path d="M10 206h40M120 222h50M250 210h40M330 236h50" stroke="#7fc3e6" stroke-width="2"/></g><g class="jf-rip jf-rip2"><path d="M60 240h40M190 196h30M300 252h40" stroke="#7fc3e6" stroke-width="2"/></g>' +
      piers +
      '<path d="' + deck + '" stroke="#2f6fb6" stroke-width="9" fill="none" stroke-linejoin="round"/><path d="' + deck + '" stroke="#e8eef5" stroke-width="1.5" fill="none" transform="translate(0,-5)"/>' +
      '<g class="jf-car"><rect x="0" y="0" width="12" height="5" rx="2" fill="#ffd34d" transform="translate(150,' + (deckY(150) - 9).toFixed(1) + ')"/></g>' +
      '<g class="jf-car jf-car2"><rect x="0" y="0" width="12" height="5" rx="2" fill="#f4f4f4" transform="translate(70,' + (deckY(70) - 9).toFixed(1) + ')"/></g>' +
      '<g class="jf-sail"><path d="M40 226h44l-6 10H46z" fill="#f4f1e8"/><path d="M62 224V180l22 40z" fill="#fff"/><path d="M60 224V188l-16 32z" fill="#e8d27a"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#e8f4fb" opacity=".9">TO THE COAST</text>',
      sky("jfs3", "#5aa6e0", "#f7d9a8"));
  }

  /* 4. Balboa Park, the California Tower */
  function jfbalboa() {
    const tiles = [189, 195, 200, 205, 211].map((x, i) => '<path d="M200 31Q' + (200 + (x - 200) * 1.25) + ' 44 ' + x + ' 61" stroke="' + SAND + '" stroke-width="' + (i === 2 ? 2 : 1.6) + '" fill="none"/>').join("") + '<path d="M185 58h30" stroke="' + SAND + '" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jfs4)"/>' +
      '<g class="jf-bird"><path d="M0 60q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="1.6" fill="none"/></g><g class="jf-bird jf-bird2"><path d="M30 90q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="1.6" fill="none"/></g>' +
      /* tower stages */
      '<rect x="176" y="96" width="48" height="110" fill="#efe2c4" stroke="#cdb68a" stroke-width="1.5"/>' +
      '<rect x="182" y="62" width="36" height="36" fill="#f2e7cc" stroke="#cdb68a" stroke-width="1.5"/>' +
      '<path d="M190 98v-24a10 10 0 0 1 20 0v24z" fill="#3a2f28"/>' +
      '<g class="jf-bell"><path d="M195 76h10l2 12h-14z" fill="#c9a24a"/></g>' +
      '<path d="M184 62q16 -40 32 0z" fill="#2f6fb6"/>' + tiles +
      '<rect x="198" y="18" width="4" height="10" fill="#c9a24a"/><path d="M200 12l3 6h-6z" fill="#c9a24a"/>' +
      '<g fill="#d9c49a"><path d="M180 120h40v4h-40zM180 150h40v4h-40z"/><circle cx="182" cy="96" r="3"/><circle cx="218" cy="96" r="3"/><circle cx="186" cy="62" r="2.5"/><circle cx="214" cy="62" r="2.5"/></g>' +
      '<path d="M192 112h16v12h-16zM192 134h16v14h-16z" fill="#4a3a30"/>' +
      /* museum wings, arcades */
      '<rect x="40" y="150" width="136" height="56" fill="#e9d9b6" stroke="#cdb68a" stroke-width="1.5"/><rect x="224" y="150" width="136" height="56" fill="#e9d9b6" stroke="#cdb68a" stroke-width="1.5"/>' +
      [52, 76, 100, 124, 148, 236, 260, 284, 308, 332].map(x => '<path d="M' + x + ' 206v-26a8 8 0 0 1 16 0v26z" fill="#6b5640"/>').join("") +
      '<path d="M40 150h136M224 150h136" stroke="#a3473a" stroke-width="4"/>' +
      palm(24, 212, 90, "#3d5a2e") + palm(380, 212, 96, "#3d5a2e", "jf-palm2") +
      '<rect x="0" y="206" width="400" height="54" fill="#cdb894"/><path d="M0 206h400" stroke="#b39d77" stroke-width="2"/>' +
      '<rect x="120" y="226" width="160" height="24" rx="3" fill="#2a2420"/><text x="200" y="243" text-anchor="middle" ' + font + ' font-size="12" fill="#f3e6c8">BALBOA PARK</text>',
      sky("jfs4", "#7cc0ea", "#f6e7c4"));
  }

  /* 5. 47th St and Market St, Chollas View */
  function jfcorner() {
    const towers = [[20, 70, 26], [50, 92, 22], [76, 52, 20], [100, 80, 24], [128, 60, 18], [150, 96, 26], [180, 74, 20], [204, 88, 22]];
    return svg(
      '<rect width="400" height="260" fill="url(#jfs5)"/>' +
      '<g fill="#3b3f63">' + towers.map(t => '<rect x="' + t[0] + '" y="' + t[1] + '" width="' + t[2] + '" height="' + (130 - t[1]) + '"/>').join("") +
      '<path d="M76 52l10 -18 10 18z"/></g>' +
      towers.map((t, i) => '<rect class="jf-flk' + (i % 2 ? " jf-flk2" : "") + '" x="' + (t[0] + 5) + '" y="' + (t[1] + 10) + '" width="3" height="3" fill="#ffe9a8"/>').join("") +
      palm(250, 132, 70, "#2a2a3a") + palm(300, 132, 58, "#2a2a3a", "jf-palm2") +
      '<rect x="0" y="126" width="400" height="98" fill="#e4c9a0"/>' + Array.from({ length: 30 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + (132 + (i * 37) % 88) + '" r="1.4" fill="#c9ab80"/>').join("") +
      '<rect x="0" y="126" width="400" height="5" fill="#b98f62"/>' +
      tag("JAYO", 22, 192, 60, BLUE, -6) + tag("DULO", 150, 214, 22, ORANGE, -4) + tag("ALL OF IT", 30, 216, 16, "#fff2a8", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(262, 98, 120, "47th St") + sign(262, 124, 120, "Market St") +
      '<rect x="230" y="110" width="4" height="114" fill="#222"/><circle class="jf-flk" cx="232" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="jf-sp"><circle cx="196" cy="168" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="jf-sp jf-sp2"><circle cx="202" cy="162" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("jfs5", "#232a5c", "#f29b62"));
  }

  window.SCENES = { jfstation: jfstation, jfgompers: jfgompers, jfbridge: jfbridge, jfbalboa: jfbalboa, jfcorner: jfcorner };
})();
