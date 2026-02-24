(() => {
  const links = Array.from(document.querySelectorAll(".side-link"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length) return;

  const setActive = (id) => {
    links.forEach((link) => {
      const isMatch = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", isMatch);
      if (isMatch) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const onScroll = () => {
    const marker = window.innerHeight * 0.35;
    let current = sections[0].id;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= marker) {
        current = section.id;
      }
    });
    setActive(current);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
})();
