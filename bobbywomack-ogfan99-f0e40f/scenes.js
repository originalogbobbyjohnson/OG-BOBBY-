/* bobbywomack scenes (Regions tab: St. Louis + Ohio; Fairfax, Cleveland's east side - born 1944 near E 84th St and Quincy Ave, the third of five Womack brothers, gospel at their Baptist church).
   CSS classes prefixed bw- (the page's own anim-train is kept).
   1 RTA Red Line pulling into E 79th St station, down on the rail embankment under the E 79th St bridge. RED bullet.
   2 The family's Baptist church: their mother's organ, their father's guitar, five little mic stands for the Womack Brothers, stained glass glowing.
   3 Karamu House, the Black theater on Quincy Ave at E 89th St, a few blocks from his first home: brick block, big white letters, stage lights sweeping.
   4 Muscle Shoals Sound Studio, 3614 Jackson Highway, Sheffield AL, where he cut Communication and Understanding: the small white block building, tape reels turning.
   5 E 84th St and Quincy Ave: green signs, WOMACK tagged on the brick, the sun coming up (Daylight) over the Cleveland Clinic's glass towers behind.
   400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bwglow{0%,100%{opacity:.55}50%{opacity:1}}.bw-glow{animation:bwglow 2.6s ease-in-out infinite}.bw-g2{animation-delay:-1.3s}' +
    '@keyframes bwnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.bw-note{animation:bwnote 3s linear infinite}.bw-n2{animation-delay:-1s}.bw-n3{animation-delay:-2s}' +
    '@keyframes bwsweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.bw-sweep{transform-box:fill-box;transform-origin:50% 0;animation:bwsweep 4s ease-in-out infinite}.bw-sw2{animation-delay:-2s}' +
    '@keyframes bwspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.bw-reel{transform-box:fill-box;transform-origin:50% 50%;animation:bwspin 2.4s linear infinite}' +
    '@keyframes bwcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.bw-car{animation:bwcar 7s linear infinite}.bw-c2{animation-delay:-3.5s}' +
    '@keyframes bwsun{0%{transform:translateY(14px)}100%{transform:translateY(-6px)}}.bw-sun{animation:bwsun 6s ease-out infinite alternate}' +
    '@keyframes bwspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bw-sp{animation:bwspray 1.4s ease-out infinite}.bw-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const AMBER = "#f2a541", RED = "#e31837", TEAL = "#3aa6a0", SIGN = "#0f6b3a", BRICK = "#8e3b28";
  const note = (x, y, cls, c) => '<g class="bw-note ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '"/><path d="M' + (x + 4) + ' ' + y + 'v-14l6 3" stroke="' + c + '" stroke-width="1.6" fill="none"/></g>';

  /* 1. RTA Red Line, E 79th St station on the embankment */
  function bwstation() {
    const car = (x) => '<rect x="' + x + '" y="112" width="156" height="58" rx="5" fill="#d7dadf" stroke="#7d858c" stroke-width="2"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 12 + i * 36) + '" y="121" width="28" height="20" rx="2" fill="#1d2733"/>').join("") +
      '<rect x="' + x + '" y="146" width="156" height="7" fill="' + RED + '"/><circle cx="' + (x + 30) + '" cy="172" r="7" fill="#333"/><circle cx="' + (x + 126) + '" cy="172" r="7" fill="#333"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bws1)"/>' +
      /* houses up top of the cut */
      [10, 70, 130, 250, 310, 360].map((x, i) => '<rect x="' + x + '" y="' + (40 + (i % 2) * 6) + '" width="44" height="34" fill="' + (i % 2 ? "#6b4a3a" : "#4f5d6b") + '"/><path d="M' + (x - 3) + ' ' + (40 + (i % 2) * 6) + 'l25 -16l25 16z" fill="#2b2b2b"/><rect x="' + (x + 8) + '" y="' + (50 + (i % 2) * 6) + '" width="10" height="10" fill="#ffd27a" class="bw-glow"/>').join("") +
      /* E 79th St bridge */
      '<rect x="0" y="76" width="400" height="18" fill="#7f7a72"/><rect x="0" y="72" width="400" height="5" fill="#a9a399"/>' +
      '<text x="200" y="89" text-anchor="middle" ' + font + ' font-size="10" fill="#1f1f1f">E 79TH ST</text>' +
      '<rect x="40" y="94" width="12" height="86" fill="#6c675f"/><rect x="348" y="94" width="12" height="86" fill="#6c675f"/>' +
      '<path d="M0 104h400" stroke="#333" stroke-width="1.5"/>' +
      /* embankment + track */
      '<path d="M0 178h400v82h-400z" fill="#5a4a3a"/><rect x="0" y="176" width="400" height="8" fill="#6d6256"/><path d="M0 180h400M0 184h400" stroke="#c9c9c9" stroke-width="1.5"/>' +
      '<g class="anim-train"><path d="M168 112v-8M158 104h20" stroke="#333" stroke-width="2"/>' + car(10) + car(168) + '</g>' +
      /* platform + sign */
      '<rect x="0" y="190" width="400" height="12" fill="#bcb6aa"/><rect x="0" y="200" width="400" height="4" fill="#f2c200"/>' +
      '<rect x="96" y="210" width="208" height="38" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<text x="112" y="235" ' + font + ' font-size="15" fill="#fff" letter-spacing="1">E 79TH ST</text>' +
      '<circle cx="276" cy="229" r="14" fill="' + RED + '"/><text x="276" y="233" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">RED</text>',
      sky("bws1", "#1b1430", "#c46a3a"));
  }

  /* 2. The family church: organ, guitar, five mics for the Womack Brothers */
  function bwchurch() {
    const pew = (y) => '<rect x="20" y="' + y + '" width="150" height="10" rx="2" fill="#6b3f22"/><rect x="230" y="' + y + '" width="150" height="10" rx="2" fill="#6b3f22"/>';
    const mic = (x, h) => '<path d="M' + x + ' 186v-' + h + '" stroke="#c9c9c9" stroke-width="2.5"/><path d="M' + (x - 8) + ' 188h16" stroke="#c9c9c9" stroke-width="3"/><rect x="' + (x - 3) + '" y="' + (176 - h) + '" width="6" height="12" rx="3" fill="#333" stroke="#888"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a1a12"/>' +
      '<path d="M0 0h400v120h-400z" fill="#3a2418"/>' +
      /* stained glass window */
      '<path d="M170 110v-60q30 -36 60 0v60z" fill="#1a1020" stroke="#d9b25f" stroke-width="3"/>' +
      '<g class="bw-glow"><path d="M174 108v-56q26 -30 52 0v56z" fill="url(#bwglass)"/></g>' +
      '<path d="M200 22v86M174 70h52M174 90h52" stroke="#d9b25f" stroke-width="2"/>' +
      '<path d="M196 40h8M200 36v14" stroke="#fff6d8" stroke-width="2.5"/>' +
      /* pulpit platform */
      '<rect x="0" y="186" width="400" height="10" fill="#4a2c18"/><rect x="0" y="184" width="400" height="3" fill="' + AMBER + '"/>' +
      /* organ, left */
      '<rect x="22" y="120" width="88" height="64" rx="3" fill="#5a3520" stroke="#2a170c" stroke-width="2"/>' +
      [30, 42, 54, 66, 78, 90].map((x, i) => '<rect x="' + x + '" y="' + (78 + (i % 3) * 8) + '" width="8" height="' + (42 - (i % 3) * 8) + '" fill="#c9a24a" stroke="#8a6a2a"/>').join("") +
      '<rect x="28" y="140" width="76" height="10" fill="#f3efe4"/>' + [32, 40, 48, 56, 64, 72, 80, 88, 96].map(x => '<rect x="' + x + '" y="140" width="3" height="6" fill="#111"/>').join("") +
      /* guitar on a stand, right */
      '<g transform="translate(330 120) rotate(14)"><ellipse cx="0" cy="40" rx="18" ry="22" fill="#b5651d" stroke="#5a3010" stroke-width="2"/><circle cx="0" cy="36" r="6" fill="#2a170c"/><rect x="-3" y="-30" width="6" height="56" fill="#3a2414"/><rect x="-5" y="-40" width="10" height="12" rx="2" fill="#2a170c"/></g>' +
      '<path d="M318 184l12 -24l12 24" stroke="#888" stroke-width="2" fill="none"/>' +
      /* five mics for five brothers */
      mic(150, 52) + mic(176, 46) + mic(200, 40) + mic(224, 46) + mic(250, 52) +
      '<rect x="118" y="198" width="164" height="18" rx="3" fill="#111" opacity=".85"/><text x="200" y="211" text-anchor="middle" ' + font + ' font-size="10" fill="' + AMBER + '">THE WOMACK BROTHERS</text>' +
      pew(224) + pew(242) +
      note(60, 76, "", "#ffe3a3") + note(120, 70, "bw-n2", "#ffe3a3") + note(300, 80, "bw-n3", "#ffe3a3"),
      '<linearGradient id="bwglass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e84a3c"/><stop offset=".35" stop-color="#f2a541"/><stop offset=".65" stop-color="#3aa6a0"/><stop offset="1" stop-color="#3a5fd9"/></linearGradient>');
  }

  /* 3. Karamu House, Quincy Ave at E 89th St */
  function bwkaramu() {
    return svg(
      '<rect width="400" height="260" fill="url(#bws3)"/>' +
      /* stage lights sweeping the night */
      '<path class="bw-sweep" d="M110 60l-30 -70h60z" fill="#fff6d8" opacity=".18"/><path class="bw-sweep bw-sw2" d="M290 60l-30 -70h60z" fill="#fff6d8" opacity=".18"/>' +
      /* the building */
      '<rect x="40" y="70" width="320" height="130" fill="' + BRICK + '" stroke="#4a1c10" stroke-width="2"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M40 ' + (78 + i * 10) + 'h320" stroke="#6e2c1c" stroke-width="1" opacity=".6"/>').join("") +
      '<rect x="40" y="62" width="320" height="10" fill="#5a2416"/>' +
      '<text x="200" y="112" text-anchor="middle" ' + font + ' font-size="34" fill="#f7f3ea" letter-spacing="6">KARAMU</text>' +
      '<text x="200" y="134" text-anchor="middle" ' + font + ' font-size="13" fill="#f7f3ea" letter-spacing="8">HOUSE</text>' +
      /* glass entry with warm light */
      '<rect x="150" y="146" width="100" height="54" fill="#1d2733"/><rect class="bw-glow" x="154" y="150" width="92" height="46" fill="#ffcf7a" opacity=".8"/>' +
      '<path d="M183 150v46M217 150v46" stroke="#1d2733" stroke-width="3"/>' +
      '<rect x="60" y="150" width="70" height="40" fill="#1d2733"/><rect x="270" y="150" width="70" height="40" fill="#1d2733"/>' +
      '<rect x="64" y="154" width="62" height="32" fill="#3a5fd9" opacity=".35"/><rect x="274" y="154" width="62" height="32" fill="#3a5fd9" opacity=".35"/>' +
      /* sidewalk + street */
      '<rect x="0" y="200" width="400" height="16" fill="#9a958c"/><rect x="0" y="216" width="400" height="44" fill="#2b2b2e"/><path d="M0 238h400" stroke="#e8c15a" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="bw-car"><rect x="0" y="222" width="70" height="20" rx="6" fill="' + TEAL + '"/><rect x="12" y="214" width="40" height="12" rx="4" fill="#2b8580"/><circle cx="14" cy="244" r="6" fill="#111"/><circle cx="56" cy="244" r="6" fill="#111"/></g>' +
      '<rect x="8" y="160" width="4" height="56" fill="#555"/><rect x="0" y="150" width="96" height="14" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1"/><text x="48" y="161" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">QUINCY AV</text>',
      sky("bws3", "#0c0a1c", "#3b2a4a"));
  }

  /* 4. Muscle Shoals Sound Studio, 3614 Jackson Highway */
  function bwshoals() {
    const reel = (x) => '<g class="bw-reel"><circle cx="' + x + '" cy="128" r="13" fill="#2a2a2a" stroke="#999" stroke-width="2"/><circle cx="' + x + '" cy="128" r="3" fill="#ccc"/><path d="M' + x + ' 118v20M' + (x - 10) + ' 128h20" stroke="#777" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bws4)"/>' +
      '<circle cx="330" cy="54" r="22" fill="#ffe3a3" opacity=".9"/>' +
      /* trees behind */
      [20, 60, 300, 350].map(x => '<circle cx="' + x + '" cy="100" r="30" fill="#3c6b3a"/>').join("") +
      /* the block building */
      '<rect x="90" y="84" width="220" height="116" fill="#f2efe8" stroke="#9a968c" stroke-width="2"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M90 ' + (94 + i * 11) + 'h220" stroke="#d6d1c6" stroke-width="1"/>').join("") +
      '<rect x="84" y="78" width="232" height="8" fill="#5a5a5a"/>' +
      '<rect x="104" y="92" width="192" height="16" fill="#111"/><text x="200" y="104" text-anchor="middle" ' + font + ' font-size="8.5" fill="#f7f3ea" letter-spacing="1">MUSCLE SHOALS SOUND STUDIO</text>' +
      /* window with tape machine */
      '<rect x="110" y="112" width="80" height="34" fill="#1d2733" stroke="#555" stroke-width="2"/>' + reel(132) + reel(168) +
      /* door with street number */
      '<rect x="226" y="124" width="40" height="76" fill="#2b2b2b"/><rect x="230" y="128" width="32" height="30" fill="#4a5a6a"/>' +
      '<text x="246" y="120" text-anchor="middle" ' + font + ' font-size="11" fill="#111">3614</text>' +
      /* ground */
      '<rect x="0" y="200" width="400" height="60" fill="#5d6b3a"/><rect x="0" y="214" width="400" height="20" fill="#8a8478"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">JACKSON HWY · SHEFFIELD, ALABAMA</text>' +
      note(140, 70, "", "#2a2a2a") + note(260, 66, "bw-n2", "#2a2a2a"),
      sky("bws4", "#7fb2d9", "#f2d3a0"));
  }

  /* 5. E 84th St and Quincy Ave, sunrise over the Clinic's glass towers */
  function bwcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bws5)"/>' +
      '<g class="bw-sun"><circle cx="372" cy="56" r="26" fill="#ffd27a"/></g>' +
      /* glass towers */
      '<rect x="210" y="48" width="60" height="110" fill="#5f8fb8" stroke="#2c4a66" stroke-width="2"/><rect x="276" y="70" width="80" height="88" rx="6" fill="#7aa8cf" stroke="#2c4a66" stroke-width="2"/>' +
      '<rect x="360" y="90" width="40" height="68" fill="#4f7aa0"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M210 ' + (58 + i * 11) + 'h60" stroke="#c8e0f2" stroke-width="1" opacity=".6"/>').join("") +
      Array.from({ length: 7 }, (_, i) => '<path d="M276 ' + (80 + i * 11) + 'h80" stroke="#c8e0f2" stroke-width="1" opacity=".6"/>').join("") +
      /* brick wall with the tag */
      '<rect x="0" y="110" width="200" height="110" fill="' + BRICK + '"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (120 + i * 10) + 'h200" stroke="#6e2c1c" stroke-width="1"/>').join("") +
      tag("WOMACK", 14, 172, 40, AMBER, -6) + tag("THE PREACHER", 30, 204, 16, "#fff", -3) +
      '<g class="bw-sp"><circle cx="186" cy="150" r="3" fill="' + AMBER + '"/></g><g class="bw-sp bw-sp2"><circle cx="180" cy="160" r="2.5" fill="' + AMBER + '"/></g>' +
      /* street signs */
      '<rect x="248" y="150" width="5" height="70" fill="#555"/>' +
      '<rect x="206" y="146" width="92" height="16" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1"/><text x="252" y="158" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">E 84 ST</text>' +
      '<rect x="212" y="164" width="80" height="16" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1"/><text x="252" y="176" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">QUINCY AV</text>' +
      /* sidewalk + street */
      '<rect x="0" y="220" width="400" height="12" fill="#9a958c"/><rect x="0" y="232" width="400" height="28" fill="#2b2b2e"/>' +
      '<g class="bw-car bw-c2"><rect x="0" y="236" width="64" height="16" rx="5" fill="' + RED + '"/><circle cx="14" cy="254" r="5" fill="#111"/><circle cx="50" cy="254" r="5" fill="#111"/></g>',
      sky("bws5", "#2a3a6a", "#f29a5a"));
  }

  window.SCENES = { bwstation: bwstation, bwchurch: bwchurch, bwkaramu: bwkaramu, bwshoals: bwshoals, bwcorner: bwcorner };
})();
