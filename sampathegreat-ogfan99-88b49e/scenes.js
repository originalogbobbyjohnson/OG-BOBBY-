/* sampathegreat scenes (Regions tab: Asia + Australia; Sydney, where Sampa the Great came up after moving from Gaborone in 2013 to study sound engineering). CSS classes prefixed spt- (the page's own anim-train is kept on the train).
   1 Redfern station, Sydney Trains: a silver double-deck train with yellow doors pulling in, black station sign with the T-line badges.
   2 The studio: a sound-engineering desk with faders and bouncing meters (she came to Sydney to study audio engineering).
   3 Sydney Harbour: the steel arch of the Harbour Bridge and the white sails of the Opera House lit up at night, a green-and-gold ferry crossing.
   4 Mosi-oa-Tunya / Victoria Falls, Zambia: the curtain of water, the spray cloud and a rainbow (home, The Return, As Above So Below).
   5 Redfern St and Regent St: green signs, SAMPA tagged on the brick, Sydney Tower's gold turret on the skyline behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sptmeter{0%,100%{transform:scaleY(.35)}30%{transform:scaleY(.9)}60%{transform:scaleY(.55)}80%{transform:scaleY(1)}}.spt-m{transform-box:fill-box;transform-origin:50% 100%;animation:sptmeter 1.1s ease-in-out infinite}.spt-m2{animation-delay:-.3s}.spt-m3{animation-delay:-.6s}.spt-m4{animation-delay:-.85s}' +
    '@keyframes sptferry{from{transform:translateX(-90px)}to{transform:translateX(460px)}}.spt-ferry{animation:sptferry 14s linear infinite}' +
    '@keyframes sptglow{0%,100%{opacity:.55}50%{opacity:1}}.spt-glow{animation:sptglow 2.4s ease-in-out infinite}.spt-glow2{animation-delay:-1.2s}' +
    '@keyframes sptfall{from{transform:translateY(-24px)}to{transform:translateY(0)}}.spt-fall{animation:sptfall .6s linear infinite}' +
    '@keyframes sptmist{0%{transform:translate(0,0) scale(.8);opacity:.75}100%{transform:translate(10px,-40px) scale(1.5);opacity:0}}.spt-mist{transform-box:fill-box;transform-origin:50% 50%;animation:sptmist 3s ease-out infinite}.spt-mist2{animation-delay:-1s}.spt-mist3{animation-delay:-2s}' +
    '@keyframes sptbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-24px)}}.spt-bird{animation:sptbird 11s linear infinite}.spt-bird2{animation-delay:-5.5s}' +
    '@keyframes sptspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.spt-sp{animation:sptspray 1.4s ease-out infinite}.spt-sp2{animation-delay:.45s}' +
    '@keyframes sptblink{0%,100%{opacity:.3}50%{opacity:1}}.spt-bl{animation:sptblink 1.6s ease-in-out infinite}.spt-bl2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="26" height="18" rx="4" fill="' + color + '"/><text x="' + (x + 13) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GOLD = "#f2c14e", GREEN = "#198a00", ORANGE = "#ef7d00", RED = "#de2010";
  /* Sydney Tower: slender gold-grey shaft, the gold turret basket near the top, spire */
  const tower = (x, base, s) => '<g><rect x="' + (x - 3 * s) + '" y="' + (base - 150 * s) + '" width="' + (6 * s) + '" height="' + (150 * s) + '" fill="#9a8f7a"/>' +
    '<path d="M' + (x - 16 * s) + ' ' + (base - 132 * s) + 'h' + (32 * s) + 'l-4 ' + (-22 * s) + 'h' + (-24 * s) + 'z" fill="#d9a93c" stroke="#8a6a1c" stroke-width="' + s + '"/>' +
    Array.from({ length: 5 }, (_, i) => '<path d="M' + (x - 14 * s + i * 7 * s) + ' ' + (base - 133 * s) + 'v' + (-20 * s) + '" stroke="#8a6a1c" stroke-width="' + (0.8 * s) + '"/>').join("") +
    '<rect x="' + (x - 1 * s) + '" y="' + (base - 178 * s) + '" width="' + (2 * s) + '" height="' + (24 * s) + '" fill="#cfcfcf"/><circle class="spt-bl" cx="' + x + '" cy="' + (base - 178 * s) + '" r="' + (2 * s) + '" fill="#ff4a3a"/></g>';

  /* 1. Redfern station, Sydney Trains */
  function sptstation() {
    const deck = (y) => Array.from({ length: 7 }, (_, i) => '<rect x="' + (46 + i * 40) + '" y="' + y + '" width="30" height="16" rx="3" fill="#20303c"/>').join("");
    const train = '<g class="anim-train"><rect x="30" y="104" width="330" height="92" rx="12" fill="#d8dde2" stroke="#7c868f" stroke-width="2"/>' + deck(116) + deck(150) +
      '<rect x="30" y="138" width="330" height="4" fill="#9aa4ad"/>' +
      '<rect x="110" y="120" width="22" height="70" fill="#f6c21c"/><rect x="250" y="120" width="22" height="70" fill="#f6c21c"/><path d="M121 120v70M261 120v70" stroke="#a8800c" stroke-width="1.5"/>' +
      '<rect x="326" y="114" width="30" height="40" rx="5" fill="#20303c"/><rect x="300" y="106" width="56" height="9" rx="2" fill="#111"/><text x="328" y="113.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">CITY CIRCLE</text>' +
      '<circle cx="80" cy="198" r="9" fill="#222"/><circle cx="104" cy="198" r="9" fill="#222"/><circle cx="286" cy="198" r="9" fill="#222"/><circle cx="310" cy="198" r="9" fill="#222"/>' +
      '<circle cx="354" cy="182" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#spts1)"/>' +
      '<rect x="0" y="56" width="400" height="10" fill="#7a3a26"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (8 + i * 46) + '" y="66" width="8" height="40" fill="#6a3020"/>').join("") +
      '<path d="M0 56h400" stroke="#4a2014" stroke-width="2"/><rect x="0" y="40" width="400" height="16" fill="#8b4a33"/>' +
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20 + 2) + '" y="44" width="14" height="8" fill="#a35a3e"/>').join("") +
      train +
      '<rect x="0" y="206" width="400" height="54" fill="#6d6a66"/><rect x="0" y="204" width="400" height="5" fill="#f6c21c"/>' +
      '<rect x="96" y="70" width="208" height="30" rx="3" fill="#111"/><text x="200" y="91" text-anchor="middle" ' + font + ' font-size="19" fill="#fff">Redfern</text>' +
      badge(16, 232, "T1", "#f99d1c") + badge(46, 232, "T2", "#0098cd") + badge(76, 232, "T3", "#f37021") + badge(106, 232, "T4", "#005aa3") + badge(136, 232, "T8", "#00954c") + badge(166, 232, "T9", "#d11f2f") +
      '<rect x="200" y="221" width="186" height="22" rx="3" fill="#111"/><text x="293" y="236" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">PLATFORM 4  CENTRAL</text>',
      sky("spts1", "#1c2a44", "#465a78"));
  }

  /* 2. The studio: mixing desk */
  function sptstudio() {
    const faders = Array.from({ length: 16 }, (_, i) => {
      const x = 40 + i * 20, k = 182 + ((i * 7) % 5) * 6;
      return '<rect x="' + (x - 1) + '" y="168" width="2" height="44" fill="#111"/><rect x="' + (x - 6) + '" y="' + k + '" width="12" height="7" rx="1.5" fill="' + (i % 4 === 0 ? ORANGE : "#e8e8e8") + '"/>' +
        '<circle cx="' + x + '" cy="146" r="4" fill="#3a3a3a" stroke="#888" stroke-width="1"/><circle cx="' + x + '" cy="158" r="3" fill="' + (i % 3 === 0 ? GREEN : "#555") + '"/>';
    }).join("");
    const meters = Array.from({ length: 8 }, (_, i) => '<rect x="' + (124 + i * 20) + '" y="40" width="14" height="60" fill="#0b0b0b"/>' +
      '<g class="spt-m spt-m' + ((i % 4) + 1) + '"><rect x="' + (126 + i * 20) + '" y="66" width="10" height="32" fill="' + GREEN + '"/><rect x="' + (126 + i * 20) + '" y="54" width="10" height="12" fill="' + GOLD + '"/><rect x="' + (126 + i * 20) + '" y="46" width="10" height="8" fill="' + RED + '"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#spts2)"/>' +
      '<rect x="0" y="0" width="400" height="120" fill="#2a1f1a"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="38" height="120" fill="#33261f"/>').join("") +
      '<rect x="20" y="30" width="70" height="80" rx="4" fill="#111"/><circle cx="55" cy="58" r="16" fill="#222" stroke="#555" stroke-width="3"/><circle cx="55" cy="58" r="6" fill="#444"/><circle cx="55" cy="94" r="9" fill="#222" stroke="#555" stroke-width="2"/>' +
      '<rect x="310" y="30" width="70" height="80" rx="4" fill="#111"/><circle cx="345" cy="58" r="16" fill="#222" stroke="#555" stroke-width="3"/><circle cx="345" cy="58" r="6" fill="#444"/><circle cx="345" cy="94" r="9" fill="#222" stroke="#555" stroke-width="2"/>' +
      '<rect x="112" y="32" width="176" height="76" rx="4" fill="#1a1a1a" stroke="#444"/>' + meters +
      '<path d="M10 220L40 130h320l30 90z" fill="#2d2d30" stroke="#55555a" stroke-width="2"/>' + faders +
      '<rect x="0" y="220" width="400" height="40" fill="#1b1410"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '" letter-spacing="3">ON AIR</text><circle class="spt-bl" cx="150" cy="240" r="4" fill="' + RED + '"/><circle class="spt-bl spt-bl2" cx="250" cy="240" r="4" fill="' + RED + '"/>',
      sky("spts2", "#2a1f1a", "#120c09"));
  }

  /* 3. Sydney Harbour: Harbour Bridge + Opera House at night */
  function sptharbour() {
    const arch = '<path d="M150 150Q245 30 340 150" fill="none" stroke="#6f7b85" stroke-width="7"/><path d="M158 150Q245 52 332 150" fill="none" stroke="#6f7b85" stroke-width="4"/>' +
      Array.from({ length: 15 }, (_, i) => { const x = 166 + i * 11.5, t = (x - 150) / 190, y1 = 150 - 240 * t * (1 - t) + 3; return '<path d="M' + x + ' ' + y1 + 'V134" stroke="#6f7b85" stroke-width="1.6"/>'; }).join("") +
      '<rect x="120" y="134" width="250" height="5" fill="#5a646c"/>' +
      '<rect x="130" y="104" width="22" height="50" fill="#c9b48a"/><rect x="128" y="100" width="26" height="6" fill="#b49e74"/><rect x="338" y="104" width="22" height="50" fill="#c9b48a"/><rect x="336" y="100" width="26" height="6" fill="#b49e74"/>';
    const sail = (x, y, w, h, flip) => '<path d="M' + x + ' ' + y + 'q' + (flip ? -w : w) * 0.2 + ' ' + (-h) + ' ' + (flip ? -w : w) + ' ' + (-h * 0.9) + 'q' + (flip ? w : -w) * 0.25 + ' ' + h * 0.4 + ' ' + (flip ? w : -w) * 0.4 + ' ' + h * 0.9 + 'z" fill="#f4f1e8" stroke="#c8c2b2" stroke-width="1.2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#spts3)"/>' +
      Array.from({ length: 22 }, (_, i) => '<circle cx="' + ((i * 71) % 400) + '" cy="' + (10 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>').join("") +
      '<path d="M0 132h80l10-22h14l6 22h40v20H0z" fill="#1d2433"/><rect x="380" y="120" width="20" height="34" fill="#1d2433"/>' +
      arch +
      '<rect x="0" y="152" width="400" height="108" fill="#0d2a48"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' ' + (170 + (i % 3) * 18) + 'h22" stroke="#3d6a94" stroke-width="2" opacity=".6"/>').join("") +
      '<rect x="10" y="172" width="150" height="10" fill="#c9a77a"/><rect x="10" y="164" width="150" height="9" fill="#d8b98c"/>' +
      '<g class="spt-glow">' + sail(30, 166, 30, 36, 0) + sail(52, 166, 34, 46, 0) + sail(80, 166, 30, 40, 0) + '</g>' +
      '<g class="spt-glow spt-glow2">' + sail(108, 166, 22, 28, 0) + sail(124, 166, 22, 24, 0) + '</g>' +
      '<g class="spt-ferry"><path d="M0 214h70l-8 12H8z" fill="' + GREEN + '"/><rect x="10" y="200" width="52" height="14" rx="2" fill="#f2e6c2"/><rect x="14" y="204" width="44" height="5" fill="#2b3a46"/><rect x="30" y="192" width="10" height="8" fill="' + GOLD + '"/></g>',
      sky("spts3", "#0a1230", "#2c3a6a"));
  }

  /* 4. Mosi-oa-Tunya / Victoria Falls, Zambia */
  function sptfalls() {
    const curtain = Array.from({ length: 30 }, (_, i) => '<rect x="' + (20 + i * 12) + '" y="72" width="6" height="140" fill="#e8f4fb" opacity="' + (0.55 + (i % 3) * 0.15) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#spts4)"/>' +
      '<path d="M0 60q100-20 200 0t200 0v40H0z" fill="#3f6b2a"/><rect x="0" y="86" width="400" height="12" fill="#5c4a36"/>' +
      Array.from({ length: 8 }, (_, i) => '<g><rect x="' + (14 + i * 52) + '" y="58" width="4" height="22" fill="#4a3826"/><circle cx="' + (16 + i * 52) + '" cy="54" r="12" fill="#2f5a22"/></g>').join("") +
      '<rect x="18" y="96" width="364" height="112" fill="#bcd9e8"/>' +
      '<g clip-path="url(#sptclip)"><g class="spt-fall">' + curtain + '</g></g>' +
      '<path d="M40 140a170 170 0 0 1 320 0" fill="none" stroke="' + RED + '" stroke-width="4" opacity=".45"/><path d="M46 140a164 164 0 0 1 308 0" fill="none" stroke="' + ORANGE + '" stroke-width="4" opacity=".45"/><path d="M52 140a158 158 0 0 1 296 0" fill="none" stroke="' + GOLD + '" stroke-width="4" opacity=".45"/><path d="M58 140a152 152 0 0 1 284 0" fill="none" stroke="#5fbf4a" stroke-width="4" opacity=".45"/><path d="M64 140a146 146 0 0 1 272 0" fill="none" stroke="#4a8fd8" stroke-width="4" opacity=".45"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#2b4d3a"/>' +
      '<ellipse class="spt-mist" cx="100" cy="206" rx="60" ry="16" fill="#fff" opacity=".7"/><ellipse class="spt-mist spt-mist2" cx="220" cy="206" rx="70" ry="18" fill="#fff" opacity=".7"/><ellipse class="spt-mist spt-mist3" cx="330" cy="206" rx="60" ry="16" fill="#fff" opacity=".7"/>' +
      '<g class="spt-bird"><path d="M0 30q6-6 12 0q6-6 12 0" stroke="#222" stroke-width="2" fill="none"/></g><g class="spt-bird spt-bird2"><path d="M0 44q5-5 10 0q5-5 10 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      '<rect x="120" y="226" width="160" height="24" rx="4" fill="#111" opacity=".75"/><text x="200" y="243" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">MOSI-OA-TUNYA</text>',
      sky("spts4", "#7fb8e0", "#d9eef7") + '<clipPath id="sptclip"><rect x="18" y="96" width="364" height="112"/></clipPath>');
  }

  /* 5. Redfern St and Regent St */
  function sptcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#spts5)"/>' +
      '<g fill="#2b2f45"><rect x="20" y="70" width="50" height="62"/><rect x="80" y="88" width="40" height="44"/><rect x="250" y="76" width="54" height="56"/><rect x="310" y="92" width="80" height="40"/><rect x="140" y="98" width="40" height="34"/></g>' +
      tower(214, 132, 0.62) +
      '<rect x="0" y="126" width="400" height="98" fill="#8b4a33"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#733b28" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#733b28" stroke-width="1"/>').join("")).join("") +
      tag("SAMPA", 24, 190, 46, GOLD, -6) + tag("TEMBO", 168, 214, 20, ORANGE, -4) + tag("FINAL FORM", 24, 216, 16, "#7fd36a", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(256, 98, 134, "Redfern St") + sign(272, 124, 110, "Regent St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="spt-bl" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="spt-sp"><circle cx="236" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="spt-sp spt-sp2"><circle cx="242" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("spts5", "#26305c", "#f09a62"));
  }

  window.SCENES = { sptstation: sptstation, sptstudio: sptstudio, sptharbour: sptharbour, sptfalls: sptfalls, sptcorner: sptcorner };
})();
