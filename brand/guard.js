/* © OG Bobby / OG FAN 99. All rights reserved. */
(function () {
  try { if (window.top !== window.self) window.top.location = window.self.location.href; } catch (e) { document.documentElement.style.display = "none"; }
  var block = function (e) { var t = e.target; if (t && (t.tagName === "IMG" || (t.closest && t.closest("svg")))) e.preventDefault(); };
  document.addEventListener("contextmenu", block);
  document.addEventListener("dragstart", block);
  var s = document.createElement("style");
  s.textContent = "img,svg{-webkit-touch-callout:none;-webkit-user-drag:none;user-select:none}";
  document.head.appendChild(s);
})();
