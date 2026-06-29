(() => {
  const links = Array.from(document.querySelectorAll(".side-link"));
  const sections = links
    .map((link) => {
      const href = link.getAttribute("href");
      return href ? document.querySelector(href) : null;
    })
    .filter(Boolean);

  // OPTIMIZATION: Cache section elements and their corresponding links
  // This avoids O(N) traversal on every scroll/intersection event
  const linkMap = {};
  const sections = [];

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const id = href.substring(1);
    const section = document.getElementById(id);

    if (section) {
      linkMap[id] = link;
      sections.push(section);
    }
  });

  // ⚡ Bolt Performance Optimization:
  // Map sections to their corresponding links for O(1) lookup
  // instead of iterating through all links on every intersection
  const linkMap = new Map();
  const sections = [];

  let currentActiveId = null;

  // Cache link elements by their target section ID.
  // We use an array to support multiple links pointing to the same section (e.g. desktop vs mobile nav).
  const linkMap = new Map();
  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href) {
      const id = href.replace("#", "");
      if (!linkMap.has(id)) {
        linkMap.set(id, []);
      }
      linkMap.get(id).push(link);
    }
  });

  let currentActiveId = null;

  const setActive = (id) => {
    // ⚡ Bolt Optimization: Early return if active section hasn't changed
    if (currentActiveId === id) return;

    // Remove active state from previous links
    if (currentActiveId && linkMap.has(currentActiveId)) {
      const prevLinks = linkMap.get(currentActiveId);
      prevLinks.forEach(prevLink => {
        prevLink.classList.remove("is-active");
        prevLink.removeAttribute("aria-current");
      });
    }

    // Add active state to new links
    if (linkMap.has(id)) {
      const newLinks = linkMap.get(id);
      newLinks.forEach(newLink => {
        newLink.classList.add("is-active");
        newLink.setAttribute("aria-current", "true");
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

  sections.forEach((section) => observer.observe(section));
})();
