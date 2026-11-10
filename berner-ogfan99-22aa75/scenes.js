/* berner scenes (Regions tab: The Bay Area; the Sunset District, San Francisco). CSS classes and ids prefixed bn- (the page's own anim-train is kept).
   1 Judah St & 34th Av on the Muni N Judah: surface stop in the fog, pastel Sunset row houses, a silver Muni light-rail car sliding in.
   2 The Dutch Windmill at the west end of Golden Gate Park by Ocean Beach: the sails turning over the tulip garden, waves rolling in.
   3 The Marina ("the yacht's at the marina", Lovin' It): a white yacht bobbing on the harbor, the salmon dome of the Palace of Fine Arts behind.
   4 The Financial District: the white Transamerica Pyramid in the fog, office windows blinking (the business side: "business savvy but I'm fair").
   5 Irving St and 33rd Av in the Sunset: green signs, BERNER tagged on the stucco, the white Mount Davidson cross up on the hill behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bnfog{0%{transform:translateX(-60px)}50%{transform:translateX(40px)}100%{transform:translateX(-60px)}}.bn-fog{animation:bnfog 14s ease-in-out infinite}.bn-fog2{animation-duration:19s;animation-delay:-6s}' +
    '@keyframes bnspin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.bn-sails{transform-box:view-box;transform-origin:150px 92px;animation:bnspin 9s linear infinite}' +
    '@keyframes bnwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-18px)}}.bn-wave{animation:bnwave 3.2s ease-in-out infinite}.bn-wave2{animation-delay:-1.6s}' +
    '@keyframes bnbob{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(3px) rotate(1deg)}}.bn-bob{transform-box:fill-box;transform-origin:50% 100%;animation:bnbob 2.8s ease-in-out infinite}' +
    '@keyframes bngull{from{transform:translate(-40px,0)}to{transform:translate(440px,-24px)}}.bn-gull{animation:bngull 12s linear infinite}.bn-gull2{animation-delay:-6s}' +
    '@keyframes bnblink{0%,100%{opacity:.25}50%{opacity:1}}.bn-bl{animation:bnblink 1.8s ease-in-out infinite}.bn-bl2{animation-delay:-.9s}' +
    '@keyframes bnsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.bn-tul{transform-box:fill-box;transform-origin:50% 100%;animation:bnsway 2.4s ease-in-out infinite}.bn-tul2{animation-delay:-1.2s}' +
    '@keyframes bnspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bn-sp{animation:bnspray 1.4s ease-out infinite}.bn-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (cx, cy, r, txt, color) => '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + color + '"/><text x="' + cx + '" y="' + (cy + r * 0.42) + '" text-anchor="middle" ' + font + ' font-size="' + (r * 1.25) + '" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const fog = (cls, y, op) => '<g class="' + cls + '" opacity="' + op + '"><ellipse cx="80" cy="' + y + '" rx="120" ry="14" fill="#eef1f4"/><ellipse cx="250" cy="' + (y + 6) + '" rx="140" ry="12" fill="#eef1f4"/><ellipse cx="420" cy="' + (y - 2) + '" rx="110" ry="13" fill="#eef1f4"/></g>';
  const GOLD = "#f2c94c", BLUE = "#4fb3ff", NJUDAH = "#005b95";

  /* Sunset row house: stucco front, garage at street level, bay window on top */
  const house = (x, w, c, trim) => '<g><rect x="' + x + '" y="70" width="' + w + '" height="80" fill="' + c + '"/><rect x="' + x + '" y="66" width="' + w + '" height="6" fill="' + trim + '"/>' +
    '<path d="M' + (x + 8) + ' 82h' + (w - 16) + 'l-6 26h-' + (w - 28) + 'z" fill="' + trim + '"/><rect x="' + (x + 14) + '" y="86" width="' + (w - 28) + '" height="18" fill="#9cc3d6"/>' +
    '<rect x="' + (x + 10) + '" y="122" width="' + (w - 20) + '" height="28" fill="#e9e4da" stroke="' + trim + '" stroke-width="2"/></g>';

  /* 1. Judah St & 34th Av, N Judah */
  function bnjudah() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 46) + '" y="134" width="32" height="22" rx="3" fill="#1b2430"/>').join("");
    const train = '<g class="anim-train"><rect x="20" y="124" width="330" height="62" rx="8" fill="#d4d8dc" stroke="#7b838b" stroke-width="2"/>' + win +
      '<rect x="20" y="162" width="330" height="7" fill="#c8102e"/><rect x="330" y="128" width="18" height="54" rx="5" fill="#2a2f36"/><circle cx="340" cy="178" r="3" fill="#fff6c2"/>' +
      '<rect x="276" y="114" width="56" height="12" rx="2" fill="#111"/><text x="304" y="123" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">N JUDAH</text>' +
      '<path d="M120 124l14 -14M136 110h40M176 110l14 14" stroke="#333" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bns1)"/>' +
      house(0, 70, "#f3e3c3", "#c9b48d") + house(70, 64, "#cfe3e8", "#8fb0ba") + house(134, 70, "#f4cfc4", "#c99a8d") + house(204, 64, "#e8e1f0", "#a99bbd") + house(268, 70, "#f0ecd8", "#bdb38c") + house(338, 62, "#d8ead2", "#97b48c") +
      fog("bn-fog", 60, .8) +
      '<path d="M0 104h400" stroke="#333" stroke-width="1.5"/>' +
      '<rect x="0" y="150" width="400" height="40" fill="#6e6e72"/>' +
      train +
      '<rect x="0" y="186" width="400" height="6" fill="#4b4b4f"/><path d="M0 189h400" stroke="#b8b8b8" stroke-width="2"/>' +
      '<rect x="0" y="192" width="400" height="10" fill="#f2c200"/><rect x="0" y="202" width="400" height="58" fill="#a39d93"/>' +
      '<rect x="78" y="208" width="244" height="36" rx="3" fill="#111"/><text x="92" y="232" ' + font + ' font-size="17" fill="#fff">Judah St &amp; 34th Av</text>' + bullet(300, 226, 12, "N", NJUDAH),
      sky("bns1", "#b8c4cf", "#f3d7b8"));
  }

  /* 2. The Dutch Windmill, Golden Gate Park */
  function bnwindmill() {
    const sail = (a) => '<g transform="rotate(' + a + ' 150 92)"><rect x="147" y="20" width="6" height="72" fill="#5b3a22"/><rect x="153" y="24" width="20" height="62" fill="none" stroke="#5b3a22" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M153 ' + (30 + i * 10) + 'h20" stroke="#5b3a22" stroke-width="1.5"/>').join("") + '<rect x="154" y="25" width="18" height="60" fill="#f4efe3" opacity=".55"/></g>';
    const tulips = Array.from({ length: 22 }, (_, i) => {
      const x = 40 + i * 15 + (i % 2) * 4, y = 222 + (i % 3) * 8, c = ["#e63946", "#ffd23f", "#ff7aa2", "#f77f00"][i % 4];
      return '<g class="bn-tul' + (i % 2 ? " bn-tul2" : "") + '"><path d="M' + x + ' ' + (y + 20) + 'v-14" stroke="#3f8f3a" stroke-width="2"/><path d="M' + (x - 5) + ' ' + (y + 6) + 'q5 -12 10 0q-5 4 -10 0z" fill="' + c + '"/></g>';
    }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bns2)"/>' +
      '<rect x="250" y="150" width="150" height="40" fill="#5f8fa8"/>' +
      '<g class="bn-wave"><path d="M250 162q20 -6 40 0t40 0t40 0t40 0" stroke="#fff" stroke-width="2.5" fill="none"/></g><g class="bn-wave bn-wave2"><path d="M250 176q20 -6 40 0t40 0t40 0t40 0" stroke="#e8f4f8" stroke-width="2" fill="none"/></g>' +
      '<path d="M240 190q60 -28 160 -18v18z" fill="#e7d7b0"/>' +
      '<g fill="#3f6b3c"><circle cx="30" cy="150" r="30"/><circle cx="70" cy="140" r="26"/><circle cx="220" cy="150" r="28"/><circle cx="252" cy="160" r="20"/></g>' +
      '<path d="M128 196l8 -100h28l8 100z" fill="#cfc6b4"/><path d="M128 196l8 -100h6l-4 100z" fill="#b8ad97"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (131 + i * 0.4) + ' ' + (108 + i * 10) + 'h' + (38 - i * 0.8) + '" stroke="#b3a991" stroke-width="1"/>').join("") +
      '<rect x="144" y="164" width="12" height="32" rx="6" fill="#5b3a22"/><rect x="146" y="120" width="8" height="10" fill="#3a2a1c"/>' +
      '<path d="M132 98q18 -20 36 0z" fill="#5b3a22"/><rect x="134" y="96" width="32" height="6" fill="#4a2f1b"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5c8f45"/>' + tulips +
      '<g class="bn-sails">' + sail(0) + sail(90) + sail(180) + sail(270) + '</g><circle cx="150" cy="92" r="5" fill="#2f2418"/>' +
      fog("bn-fog bn-fog2", 40, .55),
      sky("bns2", "#9fb7c7", "#e6e2d6"));
  }

  /* 3. The Marina, Palace of Fine Arts behind */
  function bnmarina() {
    const cols = Array.from({ length: 8 }, (_, i) => '<rect x="' + (110 + i * 24) + '" y="104" width="8" height="46" fill="#d9a07a"/>').join("");
    const masts = [30, 64, 330, 362].map((x, i) => '<path d="M' + x + ' 196v-' + (70 + i * 8) + '" stroke="#e8e8e8" stroke-width="2"/><path d="M' + (x - 14) + ' 196h28l-4 8h-20z" fill="#f4f4f4"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bns3)"/>' +
      '<g class="bn-gull"><path d="M20 46q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="bn-gull bn-gull2"><path d="M20 66q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<g fill="#3e6a43"><circle cx="70" cy="140" r="30"/><circle cx="330" cy="140" r="32"/><circle cx="110" cy="150" r="20"/><circle cx="292" cy="150" r="22"/></g>' +
      '<path d="M150 104a50 50 0 0 1 100 0z" fill="#d39069"/><path d="M150 104a50 50 0 0 1 100 0" fill="none" stroke="#b87452" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (165 + i * 17) + ' 104q' + (35 - i * 17.5) * 0.25 + ' -30 ' + (35 - i * 17.5) * 0.5 + ' -46" stroke="#b87452" stroke-width="1.5" fill="none"/>').join("") +
      '<rect x="146" y="100" width="108" height="8" fill="#c98a62"/><rect x="104" y="98" width="192" height="6" fill="#e3b28d"/>' + cols +
      '<rect x="100" y="150" width="200" height="10" fill="#c98a62"/>' +
      '<rect x="0" y="160" width="400" height="100" fill="#3f6f8f"/>' +
      Array.from({ length: 6 }, (_, i) => '<g class="bn-wave' + (i % 2 ? " bn-wave2" : "") + '"><path d="M' + (i * 70) + ' ' + (176 + (i % 3) * 22) + 'h36" stroke="#9cc6de" stroke-width="2"/></g>').join("") +
      masts +
      '<g class="bn-bob"><path d="M118 214h168l-22 22h-128z" fill="#fbfbfb" stroke="#9aa3ab" stroke-width="2"/><rect x="146" y="196" width="104" height="18" rx="4" fill="#f1f3f5" stroke="#9aa3ab" stroke-width="1.5"/>' +
      '<rect x="156" y="200" width="84" height="8" rx="2" fill="#1b2a3a"/><rect x="176" y="184" width="54" height="12" rx="3" fill="#e9ecef" stroke="#9aa3ab" stroke-width="1.5"/><rect x="184" y="187" width="38" height="5" fill="#1b2a3a"/>' +
      '<path d="M118 214h168" stroke="' + BLUE + '" stroke-width="3"/></g>' +
      '<rect x="0" y="244" width="400" height="16" fill="#6c5a44"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 244v16" stroke="#5a4a36" stroke-width="2"/>').join(""),
      sky("bns3", "#79b6e3", "#f2e7d8"));
  }

  /* 4. Transamerica Pyramid in the fog */
  function bntrans() {
    const tower = (x, y, w, h, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
      Array.from({ length: Math.floor(h / 14) }, (_, r) => Array.from({ length: Math.floor(w / 10) }, (_, k) => '<rect class="' + ((r + k) % 5 === 0 ? "bn-bl" : (r + k) % 7 === 0 ? "bn-bl bn-bl2" : "") + '" x="' + (x + 3 + k * 10) + '" y="' + (y + 6 + r * 14) + '" width="5" height="6" fill="#ffe29a" opacity=".7"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bns4)"/>' +
      tower(20, 120, 60, 120, "#2c3446") + tower(90, 96, 50, 144, "#3a4458") + tower(270, 104, 56, 136, "#34405a") + tower(332, 130, 60, 110, "#2a3142") +
      '<path d="M200 22l-40 218h80z" fill="#f1f1ee"/><path d="M200 22l-40 218h22z" fill="#d6d6d2"/>' +
      '<path d="M174 160l-14 -4v-30l20 8zM226 160l14 -4v-30l-20 8z" fill="#e6e6e2"/>' +
      Array.from({ length: 14 }, (_, i) => '<path d="M' + (200 - (i + 4) * 2.6) + ' ' + (60 + i * 13) + 'h' + ((i + 4) * 5.2) + '" stroke="#b9b9b3" stroke-width="1"/>').join("") +
      '<rect x="198" y="6" width="4" height="18" fill="#cfcfcb"/><circle class="bn-bl" cx="200" cy="6" r="2.5" fill="#ff4d4d"/>' +
      fog("bn-fog", 150, .7) + fog("bn-fog bn-fog2", 196, .6) +
      '<rect x="0" y="240" width="400" height="20" fill="#3b3b40"/><path d="M0 250h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="18 14"/>',
      sky("bns4", "#26314c", "#c98e73"));
  }

  /* 5. Irving St and 33rd Av */
  function bncorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bns5)"/>' +
      '<path d="M160 120q80 -60 200 -10v20H160z" fill="#3e5a3f"/>' +
      '<g fill="#2f4a33"><circle cx="210" cy="90" r="14"/><circle cx="300" cy="84" r="16"/><circle cx="330" cy="96" r="12"/></g>' +
      '<rect x="252" y="38" width="10" height="62" fill="#f4f4f0"/><rect x="238" y="52" width="38" height="9" fill="#f4f4f0"/><rect x="252" y="38" width="3" height="62" fill="#d8d8d2"/>' +
      fog("bn-fog", 112, .55) +
      '<rect x="0" y="120" width="400" height="104" fill="#e9d9c0"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (132 + i * 16) + 'h400" stroke="#dccab0" stroke-width="1.2"/>').join("") +
      '<rect x="300" y="132" width="70" height="46" fill="#9cc3d6" stroke="#c4ad8a" stroke-width="3"/><path d="M335 132v46M300 155h70" stroke="#c4ad8a" stroke-width="2"/>' +
      tag("BERNER", 24, 190, 50, GOLD, -6) + tag("BERN ONE", 40, 214, 18, BLUE, -4) + tag("SF 415", 300, 208, 20, "#ff7a3d", -5) + tag("BIG PESCADO", 190, 214, 16, "#7fd1a8", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="380" y="84" width="6" height="140" fill="#2f2f2f"/>' + sign(268, 84, 112, "Irving St") + sign(284, 110, 96, "33rd Av") +
      '<g class="bn-sp"><circle cx="186" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="bn-sp bn-sp2"><circle cx="192" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("bns5", "#a9b8c6", "#f4d6b0"));
  }

  window.SCENES = { bnjudah: bnjudah, bnwindmill: bnwindmill, bnmarina: bnmarina, bntrans: bntrans, bncorner: bncorner };
})();
