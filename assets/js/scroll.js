(() => {
  const links = Array.from(document.querySelectorAll(".side-link"));

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

  const setActive = (id) => {
    // Early return to prevent unnecessary DOM updates
    if (currentActiveId === id) return;

    // Remove active state from previous link using O(1) map lookup
    if (currentActiveId && linkMap[currentActiveId]) {
      const prevLink = linkMap[currentActiveId];
      prevLink.classList.remove("is-active");
      prevLink.removeAttribute("aria-current");
    }

    // Set active state on new link
    if (linkMap[id]) {
      const newLink = linkMap[id];
      newLink.classList.add("is-active");
      newLink.setAttribute("aria-current", "true");
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
