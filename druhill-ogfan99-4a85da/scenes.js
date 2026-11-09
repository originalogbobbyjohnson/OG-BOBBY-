/* druhill scenes (Regions tab: THE DMV; Baltimore - the group took its name from Druid Hill Park; Sisqo, Nokio, Jazz and Woody sang behind the counter at a fudge shop in Harborplace; Nokio heard Jazz at a Douglass High assembly).
   CSS classes prefixed dh- (the page's own anim-train is kept).
   1 Light RailLink pulling into Woodberry, down in the Jones Falls valley at the west edge of Druid Hill Park. LR bullet.
   2 The fudge shop at Harborplace: copper kettles, a marble slab, four mic stands behind the counter, notes floating out.
   3 The Rawlings Conservatory in Druid Hill Park: the white Victorian glass Palm House, palms inside, the fountain jumping.
   4 Frederick Douglass High School assembly: the stage curtain, a spotlight on one mic, the kid singing that got him in the group.
   5 Druid Park Lake Dr and Madison Ave: green signs, DRU HILL tagged on the brick, the white Moorish Tower over Druid Lake behind.
   400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dhglow{0%,100%{opacity:.5}50%{opacity:1}}.dh-glow{animation:dhglow 2.4s ease-in-out infinite}.dh-g2{animation-delay:-1.2s}' +
    '@keyframes dhnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.dh-note{animation:dhnote 3s linear infinite}.dh-n2{animation-delay:-1s}.dh-n3{animation-delay:-2s}' +
    '@keyframes dhsteam{0%{transform:translateY(0) scale(1);opacity:.7}100%{transform:translateY(-30px) scale(1.6);opacity:0}}.dh-steam{transform-box:fill-box;transform-origin:50% 100%;animation:dhsteam 2.2s ease-out infinite}.dh-s2{animation-delay:-1.1s}' +
    '@keyframes dhjet{0%,100%{transform:scaleY(.6)}50%{transform:scaleY(1.1)}}.dh-jet{transform-box:fill-box;transform-origin:50% 100%;animation:dhjet 1.6s ease-in-out infinite}' +
    '@keyframes dhsweep{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.dh-sweep{transform-box:fill-box;transform-origin:50% 0;animation:dhsweep 4s ease-in-out infinite}' +
    '@keyframes dhrip{0%{transform:scale(.4);opacity:.8}100%{transform:scale(1.6);opacity:0}}.dh-rip{transform-box:fill-box;transform-origin:50% 50%;animation:dhrip 3s ease-out infinite}.dh-r2{animation-delay:-1.5s}' +
    '@keyframes dhcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.dh-car{animation:dhcar 7s linear infinite}' +
    '@keyframes dhspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dh-sp{animation:dhspray 1.4s ease-out infinite}.dh-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const PLAT = "#dfe6ee", GOLD = "#c9a24a", PURP = "#7b4fd6", SIGN = "#0f6b3a", BRICK = "#8e3b28", LR = "#1f63b0";
  const note = (x, y, cls, c) => '<g class="dh-note ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '"/><path d="M' + (x + 4) + ' ' + y + 'v-14l6 3" stroke="' + c + '" stroke-width="1.6" fill="none"/></g>';
  const mic = (x, base, h) => '<path d="M' + x + ' ' + base + 'v-' + h + '" stroke="#c9c9c9" stroke-width="2.5"/><path d="M' + (x - 8) + ' ' + (base + 2) + 'h16" stroke="#c9c9c9" stroke-width="3"/><rect x="' + (x - 3) + '" y="' + (base - h - 10) + '" width="6" height="12" rx="3" fill="#333" stroke="#888"/>';
  const tree = (x, y, r, c) => '<rect x="' + (x - 2) + '" y="' + y + '" width="4" height="' + (r + 6) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/>';

  /* 1. Light RailLink at Woodberry, in the Jones Falls valley */
  function dhstation() {
    const car = (x) => '<rect x="' + x + '" y="118" width="160" height="54" rx="8" fill="#e9ecef" stroke="#6d757d" stroke-width="2"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 14 + i * 36) + '" y="126" width="28" height="20" rx="2" fill="#1d2733"/>').join("") +
      '<rect x="' + x + '" y="150" width="160" height="6" fill="' + LR + '"/><rect x="' + x + '" y="157" width="160" height="3" fill="' + GOLD + '"/>' +
      '<circle cx="' + (x + 30) + '" cy="174" r="7" fill="#333"/><circle cx="' + (x + 130) + '" cy="174" r="7" fill="#333"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dhs1)"/>' +
      /* the park's trees up on the hill */
      [20, 60, 100, 140, 260, 300, 340, 380].map((x, i) => tree(x, 52 + (i % 3) * 6, 16 + (i % 2) * 4, i % 2 ? "#2f5d34" : "#3c7442")).join("") +
      /* old mill chimney (Woodberry / Clipper Mill) */
      '<rect x="190" y="24" width="14" height="70" fill="#8a4a32"/><rect x="186" y="20" width="22" height="6" fill="#6e3826"/>' +
      '<rect x="150" y="70" width="96" height="40" fill="#9a5a3c"/>' + [0, 1, 2, 3, 4].map(i => '<rect x="' + (158 + i * 17) + '" y="78" width="10" height="14" fill="#ffd98a" class="dh-glow ' + (i % 2 ? "dh-g2" : "") + '"/>').join("") +
      /* overhead wire */
      '<path d="M0 98h400" stroke="#222" stroke-width="1.5"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 2) + '" y="96" width="4" height="84" fill="#5a5f66"/>').join("") +
      /* track */
      '<rect x="0" y="178" width="400" height="10" fill="#5e544a"/><path d="M0 182h400M0 186h400" stroke="#c9c9c9" stroke-width="1.5"/>' +
      '<g class="anim-train"><path d="M172 118l-10 -18h20z" stroke="#333" stroke-width="2" fill="none"/>' + car(14) + car(176) + '</g>' +
      /* platform + sign */
      '<rect x="0" y="192" width="400" height="12" fill="#bcb6aa"/><rect x="0" y="202" width="400" height="4" fill="#f2c200"/>' +
      '<rect x="92" y="212" width="216" height="38" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<text x="108" y="237" ' + font + ' font-size="15" fill="#fff" letter-spacing="1">WOODBERRY</text>' +
      '<circle cx="280" cy="231" r="14" fill="' + LR + '"/><text x="280" y="235" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">LR</text>' +
      '<text x="200" y="16" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" opacity=".8">LIGHT RAILLINK · DRUID HILL PARK UP THE HILL</text>',
      sky("dhs1", "#1a1636", "#d0804c"));
  }

  /* 2. The fudge shop at Harborplace: kettles, marble slab, four mics behind the counter */
  function dhfudge() {
    const kettle = (x) => '<ellipse cx="' + x + '" cy="118" rx="26" ry="8" fill="#e2955a"/><path d="M' + (x - 26) + ' 118q0 34 26 34q26 0 26 -34" fill="#c46a32" stroke="#8a4520" stroke-width="2"/>' +
      '<ellipse cx="' + x + '" cy="118" rx="22" ry="6" fill="#5a2e14"/><g class="dh-steam"><ellipse cx="' + x + '" cy="104" rx="8" ry="6" fill="#fff" opacity=".5"/></g><g class="dh-steam dh-s2"><ellipse cx="' + (x + 8) + '" cy="100" rx="6" ry="5" fill="#fff" opacity=".4"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#2a1a14"/>' +
      /* back wall: striped awning + shelves of boxes */
      '<rect x="0" y="0" width="400" height="40" fill="#3a2418"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 40) + ' 40h40v16q-20 10 -40 0z" fill="' + (i % 2 ? "#f3efe4" : "#b0302a") + '"/>').join("") +
      [64, 84].map(y => '<rect x="20" y="' + y + '" width="360" height="4" fill="#6b3f22"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (26 + i * 30) + '" y="' + (y - 14) + '" width="22" height="14" rx="1" fill="' + ["#f3efe4", "#e8c56a", "#c9a24a"][i % 3] + '"/>').join("")).join("") +
      kettle(70) + kettle(330) +
      /* the four of them = four mics behind the counter */
      mic(152, 160, 44) + mic(184, 160, 50) + mic(216, 160, 50) + mic(248, 160, 44) +
      /* marble slab counter with fudge squares */
      '<rect x="0" y="162" width="400" height="16" fill="#e8e4dc" stroke="#b8b2a6" stroke-width="2"/>' +
      '<path d="M30 168q40 -4 80 2t90 -2t110 3" stroke="#c9c3b8" stroke-width="1.5" fill="none"/>' +
      [118, 140, 162, 236, 258, 280].map(x => '<rect x="' + x + '" y="152" width="16" height="10" rx="1" fill="#6b3a1e"/>').join("") +
      '<rect x="0" y="178" width="400" height="82" fill="#5a3520"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (8 + i * 50) + '" y="188" width="40" height="60" rx="3" fill="#6b4028" stroke="#3a2214"/>').join("") +
      '<rect x="110" y="200" width="180" height="22" rx="3" fill="#111" opacity=".85"/><text x="200" y="215" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">FUDGE · HARBORPLACE · INNER HARBOR</text>' +
      note(120, 110, "", PLAT) + note(200, 96, "dh-n2", GOLD) + note(280, 110, "dh-n3", PLAT));
  }

  /* 3. The Rawlings Conservatory: white Victorian glass Palm House */
  function dhconserv() {
    const pane = (x, y, w, h) => Array.from({ length: Math.floor(w / 12) }, (_, i) => '<path d="M' + (x + i * 12) + ' ' + y + 'v' + h + '" stroke="#f7f7f2" stroke-width="1.4"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dhs3)"/>' +
      [30, 370].map(x => tree(x, 120, 26, "#2f5d34")).join("") +
      /* side wings */
      '<rect x="40" y="128" width="110" height="62" fill="#bfe0d6" opacity=".55" stroke="#f7f7f2" stroke-width="3"/>' + pane(40, 128, 110, 62) +
      '<rect x="250" y="128" width="110" height="62" fill="#bfe0d6" opacity=".55" stroke="#f7f7f2" stroke-width="3"/>' + pane(250, 128, 110, 62) +
      '<path d="M40 128l55 -20l55 20M250 128l55 -20l55 20" stroke="#f7f7f2" stroke-width="3" fill="#d8eee6" fill-opacity=".4"/>' +
      /* central palm house: tall glass body + curved roof + lantern */
      '<rect x="150" y="84" width="100" height="106" fill="#cfeee4" opacity=".55" stroke="#f7f7f2" stroke-width="3"/>' + pane(150, 84, 100, 106) +
      '<path d="M146 86q54 -60 108 0z" fill="#e4f4ee" fill-opacity=".6" stroke="#f7f7f2" stroke-width="3"/>' +
      '<path d="M170 76q30 -40 60 0" stroke="#f7f7f2" stroke-width="1.5" fill="none"/>' +
      '<rect x="190" y="30" width="20" height="18" fill="#e4f4ee" stroke="#f7f7f2" stroke-width="2"/><path d="M186 30l14 -10l14 10z" fill="#f7f7f2"/>' +
      /* palms inside */
      '<g opacity=".85"><path d="M200 188v-70" stroke="#6a4a2a" stroke-width="5"/><path d="M200 118q-22 -8 -34 6M200 118q-14 -16 -30 -12M200 118q14 -16 30 -12M200 118q22 -8 34 6" stroke="#2e8a4a" stroke-width="6" fill="none" stroke-linecap="round"/></g>' +
      '<path d="M90 188v-36M310 188v-36" stroke="#6a4a2a" stroke-width="3"/><path d="M90 152q-12 -4 -18 4M90 152q12 -4 18 4M310 152q-12 -4 -18 4M310 152q12 -4 18 4" stroke="#2e8a4a" stroke-width="4" fill="none"/>' +
      /* lawn + fountain */
      '<rect x="0" y="190" width="400" height="70" fill="#4f8a3c"/><path d="M0 196h400" stroke="#3c7030" stroke-width="2"/>' +
      '<ellipse cx="200" cy="226" rx="46" ry="10" fill="#7fb6d6" stroke="#d8d4c8" stroke-width="3"/>' +
      '<g class="dh-jet"><path d="M200 226v-26" stroke="#e6f4ff" stroke-width="4"/><path d="M200 202q-10 6 -14 18M200 202q10 6 14 18" stroke="#e6f4ff" stroke-width="2" fill="none"/></g>' +
      '<rect x="112" y="240" width="176" height="16" rx="3" fill="#111" opacity=".8"/><text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="' + PLAT + '">THE CONSERVATORY · DRUID HILL PARK · 1888</text>',
      sky("dhs3", "#5a8fd0", "#cfe3f2"));
  }

  /* 4. Douglass High assembly: curtain, spotlight, one mic */
  function dhassembly() {
    return svg(
      '<rect width="400" height="260" fill="#120c18"/>' +
      /* proscenium + red curtains */
      '<rect x="20" y="20" width="360" height="16" fill="' + GOLD + '"/>' +
      '<path d="M20 36h70q-10 70 6 150h-76z" fill="#8a1c24"/><path d="M380 36h-70q10 70 -6 150h76z" fill="#8a1c24"/>' +
      [30, 46, 62, 78].map(x => '<path d="M' + x + ' 36q4 70 0 150" stroke="#6a1018" stroke-width="2" fill="none"/>').join("") +
      [322, 338, 354, 370].map(x => '<path d="M' + x + ' 36q-4 70 0 150" stroke="#6a1018" stroke-width="2" fill="none"/>').join("") +
      '<path d="M20 36q180 30 360 0v12q-180 28 -360 0z" fill="#a8222c"/>' +
      /* banner */
      '<rect x="110" y="60" width="180" height="24" rx="3" fill="' + PURP + '"/><text x="200" y="76" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">DOUGLASS HIGH · ASSEMBLY</text>' +
      /* spotlight sweeping onto the mic */
      '<g class="dh-sweep"><path d="M200 36l-50 150h100z" fill="#fff6c8" opacity=".18"/></g>' +
      '<ellipse cx="200" cy="186" rx="52" ry="8" fill="#fff6c8" opacity=".25"/>' +
      mic(200, 184, 56) +
      /* stage floor + seats */
      '<rect x="0" y="186" width="400" height="10" fill="#6b3f22"/><rect x="0" y="196" width="400" height="64" fill="#1c1420"/>' +
      [208, 226, 244].map((y, r) => Array.from({ length: 14 }, (_, i) => '<path d="M' + (14 + i * 28 + (r % 2) * 14) + ' ' + (y + 10) + 'q0 -12 10 -12q10 0 10 12z" fill="#2c2034"/>').join("")).join("") +
      note(160, 140, "", PLAT) + note(240, 130, "dh-n2", GOLD) + note(200, 110, "dh-n3", PLAT));
  }

  /* 5. Druid Park Lake Dr and Madison Ave; the Moorish Tower over Druid Lake behind */
  function dhcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dhs5)"/>' +
      /* hill + the white Moorish Tower with arched windows and a red-tiled cap */
      '<path d="M0 120q120 -40 240 -20t160 10v40h-400z" fill="#2f5d34"/>' +
      '<rect x="292" y="40" width="30" height="64" fill="#efeae0" stroke="#bdb6a8" stroke-width="1.5"/>' +
      '<rect x="286" y="36" width="42" height="8" fill="#efeae0" stroke="#bdb6a8"/>' + [290, 300, 310, 320].map(x => '<rect x="' + x + '" y="30" width="6" height="7" fill="#efeae0" stroke="#bdb6a8"/>').join("") +
      '<path d="M299 60v-8q8 -10 16 0v8z" fill="#2a2430"/><path d="M299 84v-8q8 -10 16 0v8z" fill="#2a2430"/>' +
      '<path d="M286 104h42v6h-42z" fill="#d8d0c0"/>' +
      /* Druid Lake water with ripples */
      '<rect x="210" y="112" width="190" height="20" fill="#4a7fae"/><g class="dh-rip"><ellipse cx="310" cy="122" rx="20" ry="3" fill="none" stroke="#cfe6ff"/></g><g class="dh-rip dh-r2"><ellipse cx="260" cy="124" rx="16" ry="2.5" fill="none" stroke="#cfe6ff"/></g>' +
      /* park lawn and trees down to the sidewalk */
      '<rect x="210" y="132" width="190" height="90" fill="#3c7442"/><path d="M210 132h190" stroke="#d8d4c8" stroke-width="3"/>' +
      [340, 380].map(x => tree(x, 176, 18, "#2f5d34")).join("") +
      /* brick wall with the tag */
      '<rect x="0" y="118" width="210" height="104" fill="' + BRICK + '"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (128 + i * 10) + 'h210" stroke="#6e2c1c" stroke-width="1"/>').join("") +
      tag("DRU HILL", 12, 172, 38, PLAT, -6) + tag("ENTER THE DRU", 26, 204, 15, GOLD, -3) +
      '<g class="dh-sp"><circle cx="196" cy="150" r="3" fill="' + PLAT + '"/></g><g class="dh-sp dh-sp2"><circle cx="190" cy="160" r="2.5" fill="' + PLAT + '"/></g>' +
      /* street signs */
      '<rect x="258" y="150" width="5" height="72" fill="#555"/>' +
      '<rect x="206" y="144" width="110" height="16" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1"/><text x="261" y="156" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">DRUID PARK LAKE DR</text>' +
      '<rect x="222" y="162" width="78" height="16" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1"/><text x="261" y="174" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">MADISON AV</text>' +
      /* sidewalk + street */
      '<rect x="0" y="222" width="400" height="10" fill="#9a958c"/><rect x="0" y="232" width="400" height="28" fill="#2b2b2e"/>' +
      '<g class="dh-car"><rect x="0" y="236" width="64" height="16" rx="5" fill="' + PURP + '"/><circle cx="14" cy="254" r="5" fill="#111"/><circle cx="50" cy="254" r="5" fill="#111"/></g>',
      sky("dhs5", "#241a4a", "#e08a5a"));
  }

  window.SCENES = { dhstation: dhstation, dhfudge: dhfudge, dhconserv: dhconserv, dhassembly: dhassembly, dhcorner: dhcorner };
})();
