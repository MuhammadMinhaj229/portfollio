(() => {
  const links = Array.from(document.querySelectorAll(".side-link"));

  if (!links.length) return;

  // Track the currently active ID to prevent redundant DOM updates
  let currentActiveId = null;

  // Map each section ID to an array of its corresponding link elements (O(1) lookup vs O(N) loop)
  const linksById = new Map();
  // Use a Set to avoid observing the same target section multiple times
  const uniqueSections = new Set();

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const id = href.substring(1);
    const section = document.getElementById(id);

    if (section) {
      uniqueSections.add(section);
      if (!linksById.has(id)) {
        linksById.set(id, []);
      }
      linksById.get(id).push(link);
    }
  });

  if (uniqueSections.size === 0) return;

  const setActive = (id) => {
    // Early return if the active section hasn't changed
    if (currentActiveId === id) return;

    // Deactivate previously active links
    if (currentActiveId && linksById.has(currentActiveId)) {
      linksById.get(currentActiveId).forEach((link) => {
        link.classList.remove("is-active");
        link.removeAttribute("aria-current");
      });
    }

    // Activate new links
    if (linksById.has(id)) {
      linksById.get(id).forEach((link) => {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "true");
      });
    }

    currentActiveId = id;
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

  uniqueSections.forEach((section) => observer.observe(section));
})();
