(() => {
  const links = Array.from(document.querySelectorAll(".side-link"));

  // ⚡ Bolt Performance Optimization:
  // Map sections to their corresponding links for O(1) lookup
  // instead of iterating through all links on every intersection
  const linkMap = new Map();
  const sections = [];

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      const id = href.substring(1);
      const section = document.getElementById(id);
      if (section) {
        if (!sections.includes(section)) sections.push(section);
        if (!linkMap.has(id)) {
          linkMap.set(id, []);
        }
        linkMap.get(id).push(link);
      }
    }
  });

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      const id = href.substring(1);
      const section = document.getElementById(id);
      if (section) {
        if (!linksById.has(id)) {
          linksById.set(id, []);
          sections.push(section);
        }
        linksById.get(id).push(link);
      }
    }
  });

  // OPTIMIZATION: Cache section elements and their corresponding links
  // This avoids O(N) traversal on every scroll/intersection event
  const linkMap = {};
  const sections = [];

  let currentActiveId = null;

  // Track active links to minimize DOM writes
  let activeLinks = Array.from(document.querySelectorAll(".side-link.is-active"));

  const setActive = (id) => {
    const nextActiveLinks = linkMap.get(id) || [];

    // Skip if already active
    if (activeLinks.length && nextActiveLinks.length && activeLinks[0] === nextActiveLinks[0]) return;

    activeLinks.forEach((link) => {
      link.classList.remove("is-active");
      link.removeAttribute("aria-current");
    });

    nextActiveLinks.forEach((link) => {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "true");
    });

    activeLinks = nextActiveLinks;
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
