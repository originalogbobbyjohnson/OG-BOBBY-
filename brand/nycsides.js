/* © OG Bobby / OG FAN 99. New York street walls down both sides of the play screen (shows on iPad, computer and phone turned sideways) */
(function () {
  if (window.__nycSides) return; window.__nycSides = 1;
  var brick = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="32"><rect width="64" height="32" fill="#2a120e"/><g fill="#6b2a20"><rect x="1" y="1" width="30" height="14" rx="1"/><rect x="33" y="1" width="30" height="14" rx="1"/><rect x="-15" y="17" width="30" height="14" rx="1"/><rect x="17" y="17" width="30" height="14" rx="1"/><rect x="49" y="17" width="30" height="14" rx="1"/></g><g fill="#7d3326" opacity=".55"><rect x="33" y="1" width="30" height="4"/><rect x="17" y="17" width="30" height="4"/></g></svg>');
  var css = "#nycL,#nycR{position:fixed;top:0;bottom:0;z-index:-1;width:calc((100vw - 480px) / 2);overflow:hidden;pointer-events:none;background:#2a120e url('" + brick + "') repeat;background-size:48px 24px}" +
    "#nycL{left:0}#nycR{right:0}" +
    "#nycL:after,#nycR:after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.15),rgba(0,0,0,.55))}#nycR:after{background:linear-gradient(270deg,rgba(0,0,0,.15),rgba(0,0,0,.55))}" +
    "#nycL svg,#nycR svg{position:absolute;inset:0;width:100%;height:100%}" +
    "@font-face{font-family:'Sedgwick Nine';src:url('/brand/sedgwick-nine.woff') format('woff');unicode-range:U+0039;font-display:swap}.nyc-tag{font-family:'Sedgwick Nine','Sedgwick Ave Display','Permanent Marker',cursive;paint-order:stroke;stroke:#000;stroke-width:5px;stroke-linejoin:round}" +
    "@media (max-width:500px){#nycL,#nycR{display:none}}";
  var L = '<svg viewBox="0 0 300 900" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">' +
    /* fire escape */
    '<g stroke="#0b0b0b" stroke-width="4" fill="none"><rect x="40" y="60" width="200" height="8"/><rect x="40" y="250" width="200" height="8"/>' +
    '<path d="M40 60v-40M240 60v-40M40 20h200M60 20v40M80 20v40M100 20v40M120 20v40M140 20v40M160 20v40M180 20v40M200 20v40M220 20v40"/>' +
    '<path d="M40 250v-40M240 250v-40M40 210h200M60 210v40M80 210v40M100 210v40M120 210v40M140 210v40M160 210v40M180 210v40M200 210v40M220 210v40"/>' +
    '<path d="M190 68l40 142M206 68l40 142M195 86h14M200 104h14M205 122h14M210 140h14M215 158h14M220 176h14M225 194h14"/></g>' +
    '<rect x="70" y="80" width="100" height="120" fill="#141b33" stroke="#0b0b0b" stroke-width="6"/><rect x="76" y="86" width="88" height="54" fill="#f2c14e" opacity=".55"/>' +
    /* graffiti */
    '<text class="nyc-tag" x="150" y="380" text-anchor="middle" font-size="64" fill="#f2c14e" transform="rotate(-8 150 380)">BROOKLYN</text>' +
    '<text class="nyc-tag" x="140" y="450" text-anchor="middle" font-size="40" fill="#ff4d5e" transform="rotate(5 140 450)">OG FAN 99</text>' +
    '<text class="nyc-tag" x="120" y="510" text-anchor="middle" font-size="30" fill="#38e8ff" transform="rotate(-4 120 510)">since 99</text>' +
    /* subway entrance: green globes + sign */
    '<g transform="translate(40 600)"><rect x="0" y="40" width="10" height="160" fill="#0b0b0b"/><rect x="200" y="40" width="10" height="160" fill="#0b0b0b"/>' +
    '<circle cx="5" cy="30" r="18" fill="#35b867" stroke="#0b0b0b" stroke-width="4"/><circle cx="205" cy="30" r="18" fill="#35b867" stroke="#0b0b0b" stroke-width="4"/>' +
    '<rect x="20" y="60" width="170" height="44" rx="4" fill="#0b0b0b"/><text x="34" y="90" font-family="Helvetica,Arial,sans-serif" font-weight="700" font-size="22" fill="#fff">86 St</text>' +
    '<circle cx="150" cy="82" r="15" fill="#fccc0a"/><text x="150" y="90" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-weight="700" font-size="20" fill="#000">R</text>' +
    '<rect x="10" y="120" width="190" height="10" fill="#0b0b0b"/><path d="M10 200 L60 130 H150 L200 200" fill="#0b0b0b" opacity=".7"/></g>' +
    /* street lamp glow */
    '<circle cx="270" cy="560" r="70" fill="#f2c14e" opacity=".12"/><path d="M270 900V570h-26" stroke="#0b0b0b" stroke-width="8" fill="none"/><rect x="226" y="562" width="22" height="12" rx="3" fill="#f2c14e"/>' +
    '</svg>';
  var R = '<svg viewBox="0 0 300 900" preserveAspectRatio="xMinYMid slice" aria-hidden="true">' +
    /* water tower on the roof */
    '<g fill="#0b0b0b"><path d="M60 150h120l-6 -70h-108z"/><path d="M58 80l62 -36 62 36z"/><rect x="66" y="150" width="8" height="70"/><rect x="166" y="150" width="8" height="70"/><rect x="116" y="150" width="8" height="70"/><path d="M70 180l100 30M170 180l-100 30" stroke="#0b0b0b" stroke-width="4"/></g>' +
    '<g stroke="#3a1a12" stroke-width="3"><path d="M68 92h104M66 110h108M64 128h112"/></g>' +
    /* graffiti */
    '<text class="nyc-tag" x="150" y="330" text-anchor="middle" font-size="58" fill="#ff4d5e" transform="rotate(7 150 330)">BX · QNS</text>' +
    '<text class="nyc-tag" x="160" y="400" text-anchor="middle" font-size="52" fill="#f2c14e" transform="rotate(-6 160 400)">MANHATTAN</text>' +
    '<text class="nyc-tag" x="150" y="460" text-anchor="middle" font-size="34" fill="#fff" transform="rotate(4 150 460)">SHAOLIN · BK</text>' +
    /* boombox */
    '<g transform="translate(60 520)"><rect x="0" y="20" width="180" height="90" rx="10" fill="#0b0b0b"/><path d="M40 20v-16h100v16" stroke="#0b0b0b" stroke-width="6" fill="none"/>' +
    '<circle cx="42" cy="66" r="28" fill="#222" stroke="#f2c14e" stroke-width="4"/><circle cx="138" cy="66" r="28" fill="#222" stroke="#f2c14e" stroke-width="4"/><circle cx="42" cy="66" r="9" fill="#f2c14e"/><circle cx="138" cy="66" r="9" fill="#f2c14e"/>' +
    '<rect x="76" y="44" width="28" height="16" fill="#38e8ff"/></g>' +
    /* skyline + bridge at the bottom */
    '<g fill="#07070c"><rect x="0" y="760" width="40" height="140"/><rect x="40" y="720" width="30" height="180"/><path d="M80 900V700l12-30 12 30v200z"/><rect x="110" y="740" width="44" height="160"/><rect x="160" y="690" width="26" height="210"/><rect x="190" y="770" width="50" height="130"/><rect x="246" y="730" width="54" height="170"/></g>' +
    '<g fill="#f2c14e" opacity=".7"><rect x="46" y="740" width="4" height="4"/><rect x="58" y="770" width="4" height="4"/><rect x="118" y="760" width="4" height="4"/><rect x="138" y="790" width="4" height="4"/><rect x="168" y="720" width="4" height="4"/><rect x="200" y="790" width="4" height="4"/><rect x="258" y="750" width="4" height="4"/><rect x="280" y="800" width="4" height="4"/></g>' +
    '<path d="M0 840 Q150 760 300 840" stroke="#f2c14e" stroke-width="3" fill="none" opacity=".8"/><rect x="0" y="846" width="300" height="10" fill="#07070c"/>' +
    '</svg>';
  var add = function () {
    if (document.getElementById("nycL")) return;
    var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    var l = document.createElement("div"); l.id = "nycL"; l.innerHTML = L;
    var r = document.createElement("div"); r.id = "nycR"; r.innerHTML = R;
    document.body.appendChild(l); document.body.appendChild(r);
  };
  if (document.body) add(); else document.addEventListener("DOMContentLoaded", add);
})();
