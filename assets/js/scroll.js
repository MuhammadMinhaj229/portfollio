(() => {
  const links = Array.from(document.querySelectorAll(".side-link"));

  const linkMap = new Map();
  const sectionsSet = new Set();

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith('#')) return;

    const id = href.substring(1);
    if (!linkMap.has(id)) {
      linkMap.set(id, []);
    }
    linkMap.get(id).push(link);

    const section = document.getElementById(id);
    if (section) {
      sectionsSet.add(section);
    }
  });

  if (sectionsSet.size === 0) return;

  let activeLinks = [];

  const setActive = (id) => {
    const newActiveLinks = linkMap.get(id) || [];

    // Quick reference check to avoid redundant O(N) DOM mutations
    if (activeLinks === newActiveLinks) return;

    // Remove active state from previously active links
    activeLinks.forEach((link) => {
      link.classList.remove("is-active");
      link.removeAttribute("aria-current");
    });

    // Add active state to newly active links
    newActiveLinks.forEach((link) => {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "true");
    });

    activeLinks = newActiveLinks;
  };

  const observer = new IntersectionObserver(
    (entries) => {
      // ⚡ Bolt Optimization: Batch DOM state updates by finding the last intersecting entry.
      // This prevents layout thrashing and intermediate DOM manipulations during fast scrolling.
      let lastIntersecting = null;
      for (let i = entries.length - 1; i >= 0; i--) {
        if (entries[i].isIntersecting) {
          lastIntersecting = entries[i];
          break;
        }
      }

      if (lastIntersecting) {
        setActive(lastIntersecting.target.id);
      }
    },
    {
      rootMargin: "-35% 0px -65% 0px",
    }
  );

  sectionsSet.forEach((section) => observer.observe(section));
})();
