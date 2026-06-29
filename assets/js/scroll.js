/*
 * ⚡ Bolt Performance Optimization
 * 💡 What: Cached DOM link elements by section ID and deduplicated section observing using Sets/Maps. Tracked current active links to limit DOM updates.
 * 🎯 Why: Previously, setActive iterated over all links with an O(N) loop on every IntersectionObserver callback. Also used `document.querySelector` instead of `getElementById`.
 * 📊 Impact: Changes O(N) link iteration loop to O(1) array lookup. Reduces DOM lookups during initial load. Fixes redundant section observing.
 */
(() => {
  const links = Array.from(document.querySelectorAll(".side-link"));

  const linkCache = new Map();
  const sectionsToObserve = new Set();

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const id = href.substring(1);
    const section = document.getElementById(id);

    if (section) {
      if (!linkCache.has(id)) {
        linkCache.set(id, []);
      }
      linkCache.get(id).push(link);
      sectionsToObserve.add(section);
    }
  });

  if (sectionsToObserve.size === 0) return;

  let activeLinks = [];

  const setActive = (id) => {
    // Fast path: if the same section is already active, do nothing.
    const newActiveLinks = linkCache.get(id) || [];
    if (activeLinks === newActiveLinks) return;

    // Remove active state from previously active links
    activeLinks.forEach(link => {
      link.classList.remove("is-active");
      link.removeAttribute("aria-current");
    });

    // Add active state to new links
    newActiveLinks.forEach(link => {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "true");
    });

    activeLinks = newActiveLinks;
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

  sectionsToObserve.forEach((section) => observer.observe(section));
})();
