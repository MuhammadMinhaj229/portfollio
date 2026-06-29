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

  sectionsSet.forEach((section) => observer.observe(section));
})();
