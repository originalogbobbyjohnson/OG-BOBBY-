/* ladyofrage scenes (Regions tab: Virginia; Farmville, VA -> L.A.). CSS classes prefixed lr- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lrglow{0%,100%{opacity:.35}50%{opacity:1}}.lr-glow{animation:lrglow 1.8s ease-in-out infinite}.lr-g2{animation-delay:-.9s}' +
    '@keyframes lrbike{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.lr-bike{animation:lrbike 11s linear infinite}.lr-bike2{animation-delay:-5.5s}' +
    '@keyframes lrriver{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.lr-riv{animation:lrriver 3s linear infinite}' +
    '@keyframes lrvu{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}.lr-vu{transform-box:fill-box;transform-origin:50% 100%;animation:lrvu .5s ease-in-out infinite}' +
    '@keyframes lrfade{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.lr-fd{animation:lrfade 2.2s ease-in-out infinite}' +
    '@keyframes lrspin{to{transform:rotate(360deg)}}.lr-spin{transform-box:fill-box;transform-origin:50% 50%;animation:lrspin 1.8s linear infinite}' +
    '@keyframes lrball{0%,100%{transform:translateY(0)}50%{transform:translateY(-46px)}}.lr-ball{animation:lrball 1s cubic-bezier(.5,0,.5,1) infinite}' +
    '@keyframes lrpalm{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.lr-palm{transform-box:fill-box;transform-origin:50% 100%;animation:lrpalm 3s ease-in-out infinite}' +
    '@keyframes lrspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lr-sp{animation:lrspray 1.4s ease-out infinite}.lr-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const usShield = (x, y, num) => '<path d="M' + x + ' ' + y + 'h34q2 10 -2 18q-4 10 -15 16q-11 -6 -15 -16q-4 -8 -2 -18z" fill="#fff" stroke="#111" stroke-width="2"/><text x="' + (x + 17) + '" y="' + (y + 22) + '" text-anchor="middle" ' + font + ' font-size="' + (num.length > 2 ? 12 : 15) + '" fill="#111">' + num + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "lr-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffb02e", RED = "#e8455a", SKYB = "#7ad3ff";

  /* 1. Rolling into Farmville on US 460: the big green exit sign over the four-lane, US 460 and US 15 shields, a car sliding in under it, Prince Edward County pines */
  function lrhighway() {
    const car = '<g class="anim-train"><path d="M70 196l14 -22q4 -6 12 -6h70q8 0 14 6l20 22z" fill="' + RED + '" stroke="#7a1f2c" stroke-width="2"/>' +
      '<path d="M92 174h28v18h-40zM128 174h34l14 18h-48z" fill="#1d2633"/><rect x="58" y="194" width="160" height="22" rx="6" fill="' + RED + '" stroke="#7a1f2c" stroke-width="2"/>' +
      '<circle cx="92" cy="218" r="11" fill="#1a1a1a"/><circle cx="92" cy="218" r="4" fill="#9aa1a8"/><circle cx="186" cy="218" r="11" fill="#1a1a1a"/><circle cx="186" cy="218" r="4" fill="#9aa1a8"/>' +
      '<rect x="210" y="200" width="8" height="6" rx="2" fill="#fff6c2"/><rect x="58" y="200" width="6" height="6" rx="2" fill="#ff5a4a"/></g>';
    const pines = Array.from({ length: 14 }, (_, i) => { const x = i * 30 + (i % 2) * 8, h = 34 + (i * 13) % 22; return '<path d="M' + x + ' 160l12 -' + h + 'l12 ' + h + 'z" fill="' + (i % 2 ? "#1f4a2e" : "#275a37") + '"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lr1)"/>' +
      '<circle cx="330" cy="54" r="20" fill="#ffe2a0" opacity=".9"/>' + pines +
      '<rect x="0" y="160" width="400" height="100" fill="#4a4d52"/><path d="M0 160h400" stroke="#cfcab8" stroke-width="3"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 54 + 6) + '" y="234" width="30" height="4" fill="#f2f2f2"/>').join("") +
      '<rect x="0" y="226" width="400" height="2" fill="#f7d02c"/>' +
      /* sign gantry */
      '<rect x="40" y="20" width="6" height="140" fill="#8a8f98"/><rect x="354" y="20" width="6" height="140" fill="#8a8f98"/><rect x="40" y="30" width="320" height="5" fill="#8a8f98"/>' +
      '<rect x="66" y="36" width="268" height="88" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' +
      usShield(84, 46, "460") + usShield(124, 46, "15") +
            '<text x="200" y="100" text-anchor="middle" ' + font + ' font-size="24" fill="#fff">FARMVILLE</text>' +
      '<text x="200" y="117" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">PRINCE EDWARD COUNTY</text>' +
      '<rect x="270" y="44" width="54" height="22" rx="3" fill="#f7d02c"/><text x="297" y="60" text-anchor="middle" ' + font + ' font-size="12" fill="#111">EXIT</text>' +
      car,
      sky("lr1", "#f5a35c", "#8fc2e6"));
  }

  /* 2. High Bridge over the Appomattox, just outside Farmville: the long steel deck truss up on tall brick piers, trail riders rolling across the top, the river below */
  function lrbridge() {
    const piers = Array.from({ length: 9 }, (_, i) => { const x = 18 + i * 46; return '<path d="M' + x + ' 104h14l3 120h-20z" fill="#9c5a3c"/>' + Array.from({ length: 10 }, (_, j) => '<path d="M' + (x - 1) + ' ' + (114 + j * 11) + 'h16" stroke="#874a30" stroke-width="1"/>').join(""); }).join("");
    const truss = '<rect x="0" y="86" width="400" height="5" fill="#5f646b"/><rect x="0" y="102" width="400" height="4" fill="#5f646b"/>' +
      Array.from({ length: 34 }, (_, i) => '<path d="M' + (i * 12) + ' 91l6 11l6 -11" stroke="#6e737b" stroke-width="1.6" fill="none"/>').join("");
    const rider = (cls, c) => '<g class="lr-bike ' + cls + '"><circle cx="0" cy="80" r="5" fill="none" stroke="#222" stroke-width="1.6"/><circle cx="14" cy="80" r="5" fill="none" stroke="#222" stroke-width="1.6"/><path d="M0 80l6 -7h7l1 7M6 73l2 -9" stroke="#222" stroke-width="1.6" fill="none"/><rect x="4" y="56" width="7" height="10" rx="2" fill="' + c + '"/><circle cx="8" cy="52" r="3.5" fill="#3a2a22"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lr2)"/>' +
      '<path d="M0 120q60 -30 120 -10t140 -6t140 10v146h-400z" fill="#5f7d3a"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + (i * 26 + 8) + '" cy="' + (128 + (i % 3) * 6) + '" r="' + (14 + (i % 4) * 3) + '" fill="' + ["#c8742a", "#9a4f22", "#d99a35", "#6f8a3a"][i % 4] + '"/>').join("") +
      '<rect x="0" y="222" width="400" height="38" fill="#4f7f9a"/>' +
      '<g class="lr-riv">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' 236q10 -4 20 0" stroke="#bfe2f2" stroke-width="2" fill="none" opacity=".7"/>').join("") + '</g>' +
      piers + truss + '<path d="M0 86h400" stroke="#cfc6b0" stroke-width="2"/>' +
      '<path d="M0 84h400" stroke="#8a8f98" stroke-width="1"/>' + Array.from({ length: 40 }, (_, i) => '<rect x="' + (i * 10) + '" y="76" width="1.4" height="9" fill="#8a8f98"/>').join("") +
      rider("", GOLD) + rider("lr-bike2", RED) +
      '<rect x="98" y="236" width="204" height="18" rx="3" fill="#000" opacity=".45"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">HIGH BRIDGE  ·  APPOMATTOX RIVER</text>',
      sky("lr2", "#8cc6ea", "#eaf5fb"));
  }

  /* 3. From VA 2 L.A.: the vocal booth in a 1990s L.A. studio, the mic and pop filter behind the glass, the board's meters jumping, a gold record on the wall, a palm tree outside */
  function lrbooth() {
    const faders = Array.from({ length: 16 }, (_, i) => '<rect x="' + (64 + i * 17) + '" y="210" width="3" height="30" fill="#222"/><rect x="' + (59 + i * 17) + '" y="' + (214 + (i * 7) % 18) + '" width="13" height="6" rx="1" fill="' + (i % 4 === 0 ? RED : "#d8d8d8") + '"/>').join("");
    const vu = Array.from({ length: 10 }, (_, i) => '<rect class="lr-vu" style="animation-delay:' + (-i * 0.13).toFixed(2) + 's" x="' + (150 + i * 10) + '" y="180" width="7" height="22" fill="' + (i > 7 ? RED : i > 5 ? GOLD : "#4ad66d") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#2a1e2a"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (i * 34) + '" y="0" width="30" height="170" fill="#33253a"/>').join("") +
      /* window to the booth */
      '<rect x="110" y="26" width="180" height="120" rx="6" fill="#141018" stroke="#5a4a5e" stroke-width="5"/>' +
      '<rect x="116" y="32" width="168" height="108" fill="url(#lr3b)"/>' +
      '<rect x="196" y="58" width="3" height="80" fill="#888"/><rect x="186" y="134" width="24" height="4" fill="#888"/>' +
      '<rect x="190" y="44" width="15" height="26" rx="7" fill="#c8c8c8" stroke="#666" stroke-width="1.5"/>' +
      '<circle cx="180" cy="58" r="13" fill="#000" opacity=".35" stroke="#555" stroke-width="2"/>' +
      '<path d="M128 140q20 -40 40 0" fill="#000" opacity=".25"/>' +
      /* palm tree through a side window */
      '<rect x="318" y="30" width="62" height="80" rx="4" fill="#ff9a62" stroke="#5a4a5e" stroke-width="4"/>' +
      '<g class="lr-palm"><path d="M350 110q-2 -40 4 -64" stroke="#5a3a24" stroke-width="5" fill="none"/><path d="M354 46q-20 -6 -30 8M354 46q18 -10 28 4M354 46q-8 -16 -24 -14M354 46q10 -16 24 -12" stroke="#1f5a2e" stroke-width="5" fill="none" stroke-linecap="round"/></g>' +
      /* gold record */
      '<rect x="22" y="34" width="66" height="84" rx="3" fill="#1a1a1a" stroke="' + GOLD + '" stroke-width="3"/><circle cx="55" cy="70" r="24" fill="' + GOLD + '"/><circle class="lr-glow" cx="55" cy="70" r="24" fill="#fff3c4" opacity=".4"/><circle cx="55" cy="70" r="7" fill="#1a1a1a"/><rect x="32" y="102" width="46" height="8" fill="#e8e0c8"/>' +
      /* console */
      '<path d="M30 250l24 -84h292l24 84z" fill="#3b3b44"/><rect x="140" y="174" width="120" height="32" rx="3" fill="#111"/>' + vu + faders +
      '<rect x="50" y="176" width="70" height="26" rx="3" fill="#2a2a30"/><circle class="lr-spin" cx="68" cy="189" r="9" fill="none" stroke="#999" stroke-width="2" stroke-dasharray="4 3"/><circle class="lr-spin" cx="100" cy="189" r="9" fill="none" stroke="#999" stroke-width="2" stroke-dasharray="4 3"/>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">FROM VA 2 L.A.</text>',
      sky("lr3b", "#3a2c48", "#1b1422"));
  }

  /* 4. "Rock on wit cha bad self": a blacktop court, the ball bouncing under a chain net, the backboard glowing, ROCK ON painted on the court */
  function lrcourt() {
    return svg(
      '<rect width="400" height="260" fill="url(#lr4)"/>' + stars(12) +
      '<g fill="#2a2140"><rect x="0" y="90" width="60" height="60"/><rect x="66" y="70" width="44" height="80"/><rect x="300" y="80" width="50" height="70"/><rect x="354" y="100" width="46" height="50"/></g>' +
      /* fence */
      '<rect x="0" y="100" width="400" height="60" fill="none"/>' + Array.from({ length: 40 }, (_, i) => '<path d="M' + (i * 10) + ' 100l10 50M' + (i * 10 + 10) + ' 100l-10 50" stroke="#6a6a78" stroke-width=".8" opacity=".7"/>').join("") +
      '<rect x="0" y="150" width="400" height="110" fill="#2e3440"/>' +
      '<path d="M40 258q160 -80 320 0" stroke="#f7f3ea" stroke-width="2.5" fill="none"/><rect x="150" y="196" width="100" height="62" fill="none" stroke="#f7f3ea" stroke-width="2.5"/>' +
      '<text x="200" y="238" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="26" fill="' + GOLD + '" opacity=".85">ROCK ON</text>' +
      /* hoop */
      '<rect x="196" y="40" width="8" height="160" fill="#555"/><rect x="160" y="26" width="80" height="54" rx="3" fill="#f7f3ea" stroke="#999" stroke-width="2"/><rect class="lr-glow" x="160" y="26" width="80" height="54" rx="3" fill="' + SKYB + '" opacity=".25"/>' +
      '<rect x="184" y="50" width="32" height="22" fill="none" stroke="' + RED + '" stroke-width="2.5"/>' +
      '<rect x="182" y="78" width="36" height="4" fill="#ff6a1a"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (184 + i * 6) + ' 82l3 16" stroke="#cfcfcf" stroke-width="1.4"/>').join("") +
      '<g class="lr-ball"><circle cx="246" cy="196" r="11" fill="#e8762a"/><path d="M235 196h22M246 185v22M238 188q8 8 0 16M254 188q-8 8 0 16" stroke="#5a2a10" stroke-width="1.3" fill="none"/></g>' +
      '<ellipse cx="246" cy="208" rx="10" ry="2.5" fill="#000" opacity=".35"/>' +
      '<text x="200" y="16" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">ROCK ON WIT CHA BAD SELF</text>',
      sky("lr4", "#140a22", "#5a2a5a"));
  }

  /* 5. Main St and 3rd St in downtown Farmville: green signs, LADY OF RAGE tagged on the brick wall, Longwood's white rotunda dome behind */
  function lrcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#lr5)"/>' + stars(14) +
      /* rotunda */
      '<rect x="140" y="70" width="120" height="66" fill="#a8432f"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (150 + i * 20) + '" y="82" width="8" height="54" fill="#f2efe6"/>').join("") +
      '<path d="M134 82h132l-66 -18z" fill="#f2efe6"/><rect x="172" y="44" width="56" height="22" fill="#f2efe6"/><path d="M168 46q32 -40 64 0z" fill="#e8ecef"/><rect x="196" y="4" width="8" height="10" fill="#e8ecef"/><circle cx="200" cy="4" r="3" fill="#e8ecef"/>' +
      '<rect class="lr-glow" x="176" y="50" width="48" height="12" fill="#ffe7a0" opacity=".5"/>' +
      '<g fill="#5a3a32"><rect x="20" y="96" width="90" height="40"/><rect x="290" y="90" width="96" height="46"/></g>' +
      /* brick wall */
      '<rect x="0" y="132" width="400" height="92" fill="#8e3e2c"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#7a3424" stroke-width="1"/>').join("") +
      tag("LADY OF RAGE", 16, 184, 36, GOLD, -5) + tag("ROCK ON", 30, 214, 22, "#fff", -3) + tag("VA 2 LA", 178, 214, 22, SKYB, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(314, 96, 84, "Main St") + sign(318, 122, 76, "3rd St") +
      '<g class="lr-sp"><circle cx="252" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="lr-sp lr-sp2"><circle cx="258" cy="162" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("lr5", "#0f1430", "#6a3a4a"));
  }

  window.SCENES = { lrhighway: lrhighway, lrbridge: lrbridge, lrbooth: lrbooth, lrcourt: lrcourt, lrcorner: lrcorner };
})();
