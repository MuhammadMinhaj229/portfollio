(() => {
  const links = Array.from(document.querySelectorAll(".side-link"));
  if (!links.length) return;

  // ⚡ Bolt Performance Optimization: Deduplicate observed target elements
  // Multiple links (e.g., mobile vs desktop nav) might point to the same section.
  // Using a Set prevents observing the same element multiple times.
  const sections = Array.from(
    new Set(
      links
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean)
    )
  );

  if (!sections.length) return;

  // ⚡ Bolt Performance Optimization: O(1) Lookups & State Diffing
  // Map section IDs to an array of links to avoid O(N) querySelector on every intersection.
  const linksById = new Map();
  links.forEach((link) => {
    const id = link.getAttribute("href").substring(1);
    if (!linksById.has(id)) {
      linksById.set(id, []);
    }
    linksById.get(id).push(link);
  });

  // Track the currently active ID to prevent redundant class toggling
  let activeId = null;

  const setActive = (id) => {
    if (activeId === id) return; // Skip if already active

    // Deactivate previously active links
    if (activeId && linksById.has(activeId)) {
      linksById.get(activeId).forEach((link) => {
        link.classList.remove("is-active");
        link.removeAttribute("aria-current");
      });
    }

    // Activate new links
    if (id && linksById.has(id)) {
      linksById.get(id).forEach((link) => {
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

  sections.forEach((section) => observer.observe(section));
})();
