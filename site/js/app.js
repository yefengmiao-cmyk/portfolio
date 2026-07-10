(function () {
  var CASES = {
    "hunter": { title: "Hunter — The Future of Sales Recruiting" },
    "pitchbook": { title: "Redefining the deal sourcing engine for private markets" },
    "commerce": { title: "Commerce Systems Vision and Execution" },
    "booking": { title: "Booking Management Analytics Dashboard" },
    "shipment": { title: "Partner Agnostic Shipment Visibility" },
    "last-mile": { title: "From Millions to Billions: Amazon Last Mile Delivery Transformation" },
    "design-system": { title: "Bravado Brand and Design System Refresh" },
    "usl": { title: "Flexport Unified Sub Ledger (USL)" },
    "design-team": { title: "Building a High-Performing Design Team" }
  };

  var PAGES = ["home", "about", "commerce", "booking", "pitchbook", "shipment",
    "last-mile", "hunter", "design-system", "usl", "design-team"];

  var stickyBar = document.getElementById("stickyCaseBar");
  var stickyTitle = document.getElementById("stickyCaseTitle");
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function setActivePage(page) {
    if (PAGES.indexOf(page) === -1) page = "home";

    for (var i = 0; i < PAGES.length; i++) {
      var el = document.getElementById("page-" + PAGES[i]);
      if (el) el.classList.toggle("active", PAGES[i] === page);
    }

    var isCase = page === "home" || page === "about" ? false : true;
    var showNav = page === "home" || page === "about";
    var navHeader = document.getElementById("mainNav");
    if (navHeader) navHeader.style.display = showNav ? "" : "none";

    document.getElementById("nav-work").classList.toggle("active", page === "home" || !!CASES[page]);
    document.getElementById("nav-about").classList.toggle("active", page === "about");

    if (stickyBar && stickyTitle) {
      if (CASES[page]) {
        stickyTitle.textContent = CASES[page].title;
      } else {
        stickyBar.classList.remove("visible");
      }
    }

    document.title = CASES[page] ? CASES[page].title + " — Yefeng Miao" : "Yefeng Miao — Design Leader";

    window.__currentPage = page;
    window.__currentIsCase = !!CASES[page];
  }

  window.go = function (page) {
    if (location.hash.slice(1) !== page) {
      location.hash = page;
    } else {
      setActivePage(page);
    }
    window.scrollTo(0, 0);
  };

  function onHashChange() {
    var page = location.hash.slice(1) || "home";
    setActivePage(page);
  }

  window.addEventListener("hashchange", onHashChange);
  onHashChange();

  var ticking = false;
  function onScroll() {
    if (!stickyBar) return;
    var y = window.scrollY || document.documentElement.scrollTop || 0;
    var on = window.__currentIsCase && y > 240;
    stickyBar.classList.toggle("visible", on);
  }
  window.addEventListener("scroll", onScroll, true);
  setInterval(onScroll, 200);

  // Autoplay <video class="scroll-video"> while it's in the viewport, pause otherwise.
  var scrollVideos = document.querySelectorAll(".scroll-video");
  if (scrollVideos.length && "IntersectionObserver" in window) {
    var videoObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(function () {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.4 });
    for (var vi = 0; vi < scrollVideos.length; vi++) {
      videoObserver.observe(scrollVideos[vi]);
    }
  }
})();
