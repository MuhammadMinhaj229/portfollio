/*
 * ⚡ Bolt Performance Optimization
 * 💡 What: Cached DOM link elements by section ID and deduplicated section observing using Sets/Maps. Tracked current active links to limit DOM updates. Batched DOM state updates by finding the last intersecting entry.
 * 🎯 Why: Previously, setActive iterated over all links with an O(N) loop on every IntersectionObserver callback. Also used `document.querySelector` instead of `getElementById`. Furthermore, fast scrolling caused multiple intermediate DOM manipulations.
 * 📊 Impact: Changes O(N) link iteration loop to O(1) array lookup. Reduces DOM lookups during initial load. Fixes redundant section observing. Prevents layout thrashing by avoiding intermediate DOM mutations.
 */
(() => {
  const links = Array.from(document.querySelectorAll(".side-link"));

  // Cache DOM lookups for links by mapping section IDs to arrays of links
  const linkMap = new Map();
  // Deduplicate target elements to avoid redundant observer events
  const sectionSet = new Set();

  links.forEach((link) => {
    // Clear any pre-existing active classes to prevent multiple active items
    // (e.g. if the user lands directly on a hashed URL, the initial HTML "active" class
    // should be removed before IntersectionObserver sets the correct active item)
    link.classList.remove("is-active");
    link.removeAttribute("aria-current");

    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const id = href.substring(1);
    if (!id) return;

    if (!linkMap.has(id)) {
      linkMap.set(id, []);
    }
    linkMap.get(id).push(link);

    const section = document.getElementById(id);
    if (section) {
      sectionSet.add(section);
    }
  });

  if (sectionSet.size === 0) return;

  // Track the current active id to minimize redundant O(N) DOM mutations
  let activeId = null;

  const setActive = (id) => {
    if (activeId === id) return;

    if (activeId && linkMap.has(activeId)) {
      linkMap.get(activeId).forEach((link) => {
        link.classList.remove("is-active");
        link.removeAttribute("aria-current");
      });
    }

    if (id && linkMap.has(id)) {
      linkMap.get(id).forEach((link) => {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "true");
      });
    }

    activeId = id;
  };

  const observer = new IntersectionObserver(
    (entries) => {
      // Find the last entry in the batch that is intersecting.
      // This prevents layout thrashing by avoiding intermediate DOM updates when scrolling fast.
      const lastIntersectingEntry = entries.slice().reverse().find(entry => entry.isIntersecting);
      if (lastIntersectingEntry) {
        setActive(lastIntersectingEntry.target.id);
      }
    },
    {
      rootMargin: "-35% 0px -65% 0px",
    }
  );

  sectionSet.forEach((section) => observer.observe(section));
})();
