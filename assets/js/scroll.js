(() => {
  const links = Array.from(document.querySelectorAll(".side-link"));

  // ⚡ Bolt Optimization: Cache DOM lookups O(1) and deduplicate observer targets
  const sectionMap = new Map();
  const targetSections = new Set();

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const id = href.substring(1);
    const section = document.getElementById(id);

    if (section) {
      if (!sectionMap.has(id)) {
        sectionMap.set(id, []);
      }
      sectionMap.get(id).push(link);
      targetSections.add(section);
    }
  });

  if (targetSections.size === 0) return;

  let activeId = null;

  const setActive = (id) => {
    // ⚡ Bolt Optimization: State diffing to prevent redundant DOM updates
    if (activeId === id) return;

    // Remove active state from previous links
    if (activeId && sectionMap.has(activeId)) {
      sectionMap.get(activeId).forEach((link) => {
        link.classList.remove("is-active");
        link.removeAttribute("aria-current");
      });
    }

    // Add active state to new links
    if (id && sectionMap.has(id)) {
      sectionMap.get(id).forEach((link) => {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "true");
      });
    }

    activeId = id;
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

  targetSections.forEach((section) => observer.observe(section));
})();
