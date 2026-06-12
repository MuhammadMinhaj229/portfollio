(() => {
  const links = Array.from(document.querySelectorAll(".side-link"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length) return;

  // ⚡ Bolt: Cache DOM lookups by section ID mapped to array of matching links
  // Why: Removes O(N) DOM getAttribute lookups on every single scroll/intersection event
  // Impact: Reduces CPU main thread blocking on rapid scroll events. Reduces property lookups to an O(1) map lookup.
  // Note: We use an array of links because there could be multiple navigation menus pointing to the same section
  const linksById = new Map();
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      const id = href.slice(1);
      if (!linksById.has(id)) {
        linksById.set(id, []);
      }
      linksById.get(id).push(link);
    }
  });

  const setActive = (activeId) => {
    links.forEach((link) => {
      link.classList.remove("is-active");
      link.removeAttribute("aria-current");
    });

    const activeLinks = linksById.get(activeId);
    if (activeLinks) {
      activeLinks.forEach((link) => {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "true");
      });
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-35% 0px -65% 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));
})();
