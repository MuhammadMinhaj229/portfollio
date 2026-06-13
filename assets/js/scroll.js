(() => {
  const links = Array.from(document.querySelectorAll(".side-link"));
  const linksById = new Map();
  const sections = [];

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

  if (!sections.length) return;

  let currentActiveId = null;

  const setActive = (id) => {
    if (currentActiveId === id) return;

    if (currentActiveId && linksById.has(currentActiveId)) {
      linksById.get(currentActiveId).forEach(link => {
        link.classList.remove("is-active");
        link.removeAttribute("aria-current");
      });
    }

    if (id && linksById.has(id)) {
      linksById.get(id).forEach(link => {
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

  sections.forEach((section) => observer.observe(section));
})();
