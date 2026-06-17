(() => {
  const links = Array.from(document.querySelectorAll(".side-link"));
  if (!links.length) return;

  // ⚡ Bolt Optimization: Map IDs to link elements to prevent O(N) DOM lookup on every scroll event
  const linkMap = new Map();
  const sectionsToObserve = new Set();

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const id = href.slice(1);
    const section = document.getElementById(id);

    if (section) {
      sectionsToObserve.add(section);
      if (!linkMap.has(id)) {
        linkMap.set(id, []);
      }
      linkMap.get(id).push(link);
    }
  });

  if (!sectionsToObserve.size) return;

  // ⚡ Bolt Optimization: Track active ID to diff changes and minimize DOM mutations
  let activeId = null;

  const setActive = (id) => {
    if (activeId === id) return;

    // Deactivate previous links
    if (activeId && linkMap.has(activeId)) {
      linkMap.get(activeId).forEach((link) => {
        link.classList.remove("is-active");
        link.removeAttribute("aria-current");
      });
    }

    // Activate new links
    if (linkMap.has(id)) {
      linkMap.get(id).forEach((link) => {
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

  // ⚡ Bolt Optimization: Deduplicate elements to observe using Set
  sectionsToObserve.forEach((section) => observer.observe(section));
})();
