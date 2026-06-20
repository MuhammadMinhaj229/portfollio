/**
 * ⚡ Bolt: O(1) DOM Lookups & Mutation Minimization
 *
 * What: Cached DOM lookups and diffed state updates for navigation links.
 * Why: Original code queried all links and toggled classes on every intersection event, causing O(N) operations and layout thrashing.
 * Impact: Reduces CPU work during scrolling by only modifying the specific DOM nodes that changed state. Maps IDs to an array of links for O(1) lookups.
 * Measurement: Run the test suite and observe smooth performance without unnecessary DOM re-evaluations.
 */
(() => {
  const links = Array.from(document.querySelectorAll(".side-link"));

  if (!links.length) return;

  const linksById = new Map();
  const sectionsToObserve = new Set();

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith('#')) return;

    const id = href.slice(1);
    if (!id) return;

    const section = document.getElementById(id);
    if (section) {
      sectionsToObserve.add(section);
      if (!linksById.has(id)) {
        linksById.set(id, []);
      }
      linksById.get(id).push(link);
    }
  });

  if (sectionsToObserve.size === 0) return;

  let activeId = null;

  const setActive = (id) => {
    if (activeId === id) return;

    if (activeId && linksById.has(activeId)) {
      linksById.get(activeId).forEach((link) => {
        link.classList.remove("is-active");
        link.removeAttribute("aria-current");
      });
    }

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

  sectionsToObserve.forEach((section) => observer.observe(section));
})();
