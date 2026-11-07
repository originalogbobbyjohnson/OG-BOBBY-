/* smino scenes (Regions tab: St. Louis + Ohio; North St. Louis). CSS classes and ids prefixed sm- (the page's own anim-train is kept).
   1 Delmar Loop on the MetroLink: the platform down in the cut under the Delmar Blvd bridge, a white MetroLink car sliding in.
   2 The Pageant on the Delmar Loop at night, the marquee lit for Kribmas (his hometown holiday show), snow falling, brass Walk of Fame stars on the sidewalk.
   3 The CITY SC stadium downtown (his Homegrown music link-up with the club): the clear canopy, red stands, scarves waving, a ball rolling.
   4 Hazelwood Central High in Florissant (class of 2010): the school sign, the flag waving, a yellow bus rolling past.
   5 E Grand Ave and N 20th St on the Northside: green signs, SMINO tagged on the brick, the white Grand water tower (a giant column) behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes smflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.sm-flk{animation:smflick 2.2s infinite}.sm-flk2{animation-delay:.7s}' +
    '@keyframes smsnow{from{transform:translateY(-20px)}to{transform:translateY(270px)}}.sm-sn{animation:smsnow 6s linear infinite}.sm-sn2{animation-delay:-2s}.sm-sn3{animation-delay:-4s}' +
    '@keyframes smchase{0%,100%{opacity:.25}50%{opacity:1}}.sm-ch{animation:smchase .8s steps(1) infinite}.sm-ch2{animation-delay:.4s}' +
    '@keyframes smwave{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(10deg)}}.sm-sc{transform-box:fill-box;transform-origin:0% 100%;animation:smwave 1s ease-in-out infinite}.sm-sc2{animation-delay:-.5s}' +
    '@keyframes smball{0%{transform:translateX(-60px)}100%{transform:translateX(120px)}}.sm-ball{animation:smball 3s ease-in-out infinite alternate}' +
    '@keyframes smflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.sm-flag{transform-box:fill-box;transform-origin:0% 50%;animation:smflag 1.4s ease-in-out infinite}' +
    '@keyframes smbus{from{transform:translateX(-200px)}to{transform:translateX(520px)}}.sm-bus{animation:smbus 9s linear infinite}' +
    '@keyframes smspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sm-sp{animation:smspray 1.4s ease-out infinite}.sm-sp2{animation-delay:.45s}' +
    '@keyframes smbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-20px)}}.sm-bird{animation:smbird 12s linear infinite}.sm-bird2{animation-delay:-6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GOLD = "#f6c445", PINK = "#ff6fae", TEAL = "#45c4c9", ML = "#1f4e79", MLRED = "#d9262e";
  const snow = (n, cls) => Array.from({ length: n }, (_, i) => '<circle class="sm-sn ' + (["", "sm-sn2", "sm-sn3"][i % 3]) + '" cx="' + ((i * 47 + 13) % 400) + '" cy="' + ((i * 29) % 120) + '" r="' + (1.4 + (i % 3) * .6) + '" fill="#fff" opacity=".85"/>').join("");

  /* 1. Delmar Loop MetroLink */
  function smstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 46) + '" y="126" width="32" height="22" rx="3" fill="#1d2833"/>').join("");
    const train = '<g class="anim-train"><rect x="22" y="116" width="336" height="72" rx="9" fill="#f2f3f1" stroke="#9aa1a6" stroke-width="2"/>' + win +
      '<rect x="22" y="156" width="336" height="7" fill="' + MLRED + '"/><rect x="22" y="165" width="336" height="5" fill="' + ML + '"/>' +
      '<rect x="336" y="120" width="20" height="62" rx="5" fill="#dfe2e0"/><circle cx="347" cy="176" r="3.5" fill="#fff6c2"/>' +
      '<rect x="278" y="122" width="54" height="12" rx="2" fill="#111"/><text x="305" y="131" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">AIRPORT</text>' +
      '<path d="M120 116l20 -18M260 116l-20 -18M140 98h100" stroke="#3a3f44" stroke-width="2.5" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sms1)"/>' +
      '<g fill="#2c2433"><rect x="0" y="16" width="70" height="40"/><rect x="74" y="24" width="50" height="32"/><rect x="300" y="18" width="100" height="38"/></g>' +
      '<g class="sm-flk"><rect x="20" y="30" width="10" height="8" fill="#ffd27a"/><rect x="320" y="28" width="10" height="8" fill="#ffd27a"/></g>' +
      '<rect x="0" y="54" width="400" height="22" fill="#6f6a62"/><rect x="0" y="50" width="400" height="6" fill="#958f84"/>' +
      '<text x="200" y="69" text-anchor="middle" ' + font + ' font-size="10" fill="#e9e3d8" letter-spacing="2">DELMAR BLVD</text>' +
      '<path d="M0 76L40 112H0z M400 76L360 112h40z" fill="#7a6e60"/>' +
      '<rect x="0" y="76" width="400" height="36" fill="#8d8170"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52) + ' 76v36" stroke="#7d7262" stroke-width="2"/>').join("") +
      '<rect x="0" y="96" width="400" height="3" fill="#2e2a27"/>' +
      train +
      '<rect x="0" y="188" width="400" height="8" fill="#f2c200"/><rect x="0" y="196" width="400" height="64" fill="#a39d92"/><path d="M0 226h400" stroke="#928c82" stroke-width="2"/>' +
      '<rect x="88" y="204" width="224" height="36" rx="3" fill="#111"/><text x="102" y="228" ' + font + ' font-size="17" fill="#fff">Delmar Loop</text>' + badge(214, 222, "ML", ML) + badge(252, 222, "RED", MLRED),
      sky("sms1", "#1d1730", "#5b3a52"));
  }

  /* 2. The Pageant, Kribmas */
  function smpageant() {
    const bulbs = Array.from({ length: 22 }, (_, i) => '<circle class="sm-ch' + (i % 2 ? " sm-ch2" : "") + '" cx="' + (92 + i * 10.3) + '" cy="96" r="2.3" fill="#ffe08a"/>').join("") +
      Array.from({ length: 22 }, (_, i) => '<circle class="sm-ch' + (i % 2 ? "" : " sm-ch2") + '" cx="' + (92 + i * 10.3) + '" cy="142" r="2.3" fill="#ffe08a"/>').join("");
    const stars = [40, 130, 220, 310].map(x => '<g transform="translate(' + x + ' 236)"><ellipse rx="22" ry="7" fill="#7b6a4a"/><path d="M0 -5l1.6 3.3 3.6.4-2.7 2.4.8 3.5L0 2.8l-3.3 1.8.8-3.5-2.7-2.4 3.6-.4z" fill="#f2cf6b"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sms2)"/>' +
      '<rect x="60" y="30" width="280" height="190" fill="#7d3b2c"/>' + Array.from({ length: 18 }, (_, i) => '<path d="M60 ' + (36 + i * 10) + 'h280" stroke="#6b3124" stroke-width="1"/>').join("") +
      [80, 140, 230, 290].map(x => '<rect x="' + x + '" y="44" width="30" height="34" fill="#ffcf7a" opacity=".8"/><path d="M' + x + ' 61h30M' + (x + 15) + ' 44v34" stroke="#7d3b2c" stroke-width="2"/>').join("") +
      '<rect x="84" y="88" width="232" height="62" rx="4" fill="#1a1420" stroke="#d9b45a" stroke-width="3"/>' + bulbs +
      '<text x="200" y="114" text-anchor="middle" ' + font + ' font-size="15" fill="#fff" letter-spacing="3">THE PAGEANT</text>' +
      '<text x="200" y="134" text-anchor="middle" ' + font + ' font-size="13" fill="' + PINK + '">KRIBMAS · SOLD OUT</text>' +
      '<rect x="150" y="160" width="100" height="60" fill="#2a1a16"/><rect x="156" y="166" width="40" height="54" fill="#e8b85c" opacity=".55"/><rect x="204" y="166" width="40" height="54" fill="#e8b85c" opacity=".55"/>' +
      '<g transform="translate(36 150)"><path d="M0 70L18 0L36 70z" fill="#1f6b3e"/><circle class="sm-ch" cx="12" cy="40" r="2.5" fill="#ff5b5b"/><circle class="sm-ch sm-ch2" cx="24" cy="52" r="2.5" fill="' + GOLD + '"/><circle class="sm-ch" cx="18" cy="24" r="2.5" fill="' + TEAL + '"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#5d5650"/><rect x="0" y="218" width="400" height="4" fill="#d9d4cc"/>' + stars + snow(40),
      sky("sms2", "#0e0b1e", "#33244a"));
  }

  /* 3. CITY SC stadium, Homegrown */
  function smcity() {
    let seats = "";
    for (let r = 0; r < 5; r++) seats += '<path d="M0 ' + (92 + r * 12) + 'L400 ' + (92 + r * 12) + '" stroke="' + (r % 2 ? "#b8202b" : "#d5303b") + '" stroke-width="10"/>';
    const fans = Array.from({ length: 16 }, (_, i) => { const x = 14 + i * 25, y = 100 + (i % 3) * 12; return '<circle cx="' + x + '" cy="' + (y - 6) + '" r="4" fill="#2a1d1d"/><g class="sm-sc' + (i % 2 ? " sm-sc2" : "") + '"><rect x="' + (x + 2) + '" y="' + (y - 22) + '" width="7" height="16" fill="' + (i % 3 ? "#e8333e" : "#0f2147") + '"/><rect x="' + (x + 2) + '" y="' + (y - 22) + '" width="4" height="4" fill="#fff"/></g>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sms3)"/>' +
      '<path d="M0 34Q200 6 400 34L400 60Q200 36 0 60z" fill="#dfe8ee" opacity=".75"/><path d="M0 60Q200 36 400 60" stroke="#9fb3c2" stroke-width="2" fill="none"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' ' + (36 - Math.sin(i / 8 * Math.PI) * 18) + 'v' + (24) + '" stroke="#9fb3c2" stroke-width="1.5"/>').join("") +
      '<rect x="0" y="62" width="400" height="20" fill="#0f2147"/><text x="200" y="76" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="4">HOMEGROWN · ST. LOUIS</text>' +
      '<rect x="0" y="84" width="400" height="66" fill="#8f1a23"/>' + seats + fans +
      '<rect x="0" y="150" width="400" height="110" fill="#2f8a43"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 50) + '" y="150" width="25" height="110" fill="#287a3a"/>').join("") +
      '<path d="M0 150h400M200 150v110" stroke="#fff" stroke-width="2.5"/><ellipse cx="200" cy="205" rx="44" ry="22" fill="none" stroke="#fff" stroke-width="2.5"/>' +
      '<g class="sm-ball"><circle cx="170" cy="222" r="8" fill="#fff" stroke="#222" stroke-width="1.2"/><path d="M167 218l3 -2 3 2-1 3h-4z" fill="#222"/></g>',
      sky("sms3", "#7fb6e6", "#d7ecfa"));
  }

  /* 4. Hazelwood Central High, Florissant */
  function smschool() {
    const win = Array.from({ length: 9 }, (_, i) => '<rect x="' + (66 + i * 30) + '" y="96" width="20" height="22" fill="#cfe4f2" stroke="#e8e2d6" stroke-width="2"/>').join("");
    const bus = '<g class="sm-bus"><rect x="0" y="196" width="120" height="38" rx="6" fill="#f5b800"/><rect x="0" y="222" width="120" height="5" fill="#111"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (10 + i * 20) + '" y="202" width="14" height="12" fill="#2b3a46"/>').join("") +
      '<rect x="104" y="202" width="12" height="18" fill="#2b3a46"/><circle cx="24" cy="236" r="7" fill="#111"/><circle cx="96" cy="236" r="7" fill="#111"/><circle cx="24" cy="236" r="2.5" fill="#888"/><circle cx="96" cy="236" r="2.5" fill="#888"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sms4)"/>' +
      '<g class="sm-bird"><path d="M20 40q6 -6 12 0q6 -6 12 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g><g class="sm-bird sm-bird2"><path d="M40 60q5 -5 10 0q5 -5 10 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g>' +
      '<g fill="#3f7a3a"><circle cx="20" cy="120" r="26"/><circle cx="384" cy="118" r="28"/></g>' +
      '<rect x="50" y="80" width="300" height="100" fill="#a7553f"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M50 ' + (86 + i * 8) + 'h300" stroke="#94493a" stroke-width="1"/>').join("") +
      '<rect x="44" y="74" width="312" height="10" fill="#d8d0c2"/>' + win +
      '<rect x="176" y="132" width="48" height="48" fill="#3b3f46"/><rect x="180" y="136" width="18" height="44" fill="#9fc3da" opacity=".6"/><rect x="202" y="136" width="18" height="44" fill="#9fc3da" opacity=".6"/>' +
      '<rect x="320" y="34" width="3" height="146" fill="#cfd4d8"/><g class="sm-flag"><rect x="323" y="36" width="34" height="20" fill="#c8102e"/><rect x="323" y="40" width="34" height="3" fill="#fff"/><rect x="323" y="46" width="34" height="3" fill="#fff"/><rect x="323" y="36" width="14" height="10" fill="#0a3161"/></g>' +
      '<rect x="0" y="180" width="400" height="16" fill="#6aa04f"/><rect x="0" y="196" width="400" height="64" fill="#4b4b50"/><path d="M0 248h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<rect x="64" y="150" width="124" height="40" rx="3" fill="#2a2a2e" stroke="#c9c2b4" stroke-width="2"/><text x="126" y="166" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">HAZELWOOD CENTRAL</text><text x="126" y="181" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">CLASS OF 2010</text>' +
      bus,
      sky("sms4", "#9ccdf0", "#eef6fb"));
  }

  /* 5. E Grand Ave and N 20th St, the Grand water tower */
  function smcorner() {
    const tower = '<g><rect x="186" y="132" width="44" height="10" fill="#e9e4da"/><rect x="190" y="38" width="36" height="96" fill="#f4f1ea"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (194 + i * 7) + ' 42v90" stroke="#d8d2c6" stroke-width="2"/>').join("") +
      '<path d="M184 38h48l-6 -10h-36z" fill="#ece7dd"/><path d="M186 30q-6 -4 0 -8M230 30q6 -4 0 -8" stroke="#d1cabd" stroke-width="2" fill="none"/>' +
      '<rect x="182" y="18" width="52" height="6" fill="#f4f1ea"/><rect x="200" y="6" width="16" height="12" fill="#e9e4da"/><path d="M196 6h24l-12 -6z" fill="#cfc8ba"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sms5)"/>' +
      '<g fill="#3a2a40"><rect x="0" y="100" width="80" height="40"/><path d="M0 100l40 -16 40 16z"/><rect x="300" y="96" width="100" height="44"/><path d="M300 96l50 -14 50 14z"/></g>' +
      tower +
      '<rect x="0" y="126" width="400" height="98" fill="#8a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#743425" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#743425" stroke-width="1"/>').join("")).join("") +
      tag("SMINO", 24, 192, 58, GOLD, -6) + tag("ZERO FATIGUE", 116, 216, 18, TEAL, -4) + tag("THE LOU", 28, 216, 16, PINK, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5a5753"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 140, "E Grand Av") + sign(270, 124, 100, "N 20th St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="sm-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="sm-sp"><circle cx="214" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="sm-sp sm-sp2"><circle cx="220" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("sms5", "#2a2350", "#f09a6a"));
  }

  window.SCENES = { smstation: smstation, smpageant: smpageant, smcity: smcity, smschool: smschool, smcorner: smcorner };
})();
