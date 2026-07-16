(function () {
  var nav = document.getElementById("nav");
  if (!nav) return;

  function syncNavState() {
    if (window.scrollY > 10) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }

  syncNavState();
  window.addEventListener("scroll", syncNavState, { passive: true });

  if ("IntersectionObserver" in window) {
    var nodes = document.querySelectorAll(".reveal");
    if (!nodes.length) return;
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    nodes.forEach(function (node) {
      observer.observe(node);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (node) {
      node.classList.add("is-visible");
    });
  }
})();
