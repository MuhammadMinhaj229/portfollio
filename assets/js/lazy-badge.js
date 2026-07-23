/*
 * ⚡ Bolt Performance Optimization
 * 💡 What: Dynamically injects LinkedIn's third-party widget script using IntersectionObserver.
 * 🎯 Why: The external `profile.js` script was synchronously parsed, delaying the browser's Time to Interactive (TTI) and adding unnecessary main thread work for a widget positioned far below the fold in the Contact section.
 * 📊 Impact: Defers ~7KB (gzipped) script load and its execution until the user scrolls near the Contact section, freeing up the main thread during initial page load.
 */
(() => {
  const badgeElement = document.querySelector(".LI-profile-badge");
  if (!badgeElement) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          obs.disconnect();

          const script = document.createElement("script");
          script.src = "https://platform.linkedin.com/badges/js/profile.js";
          script.async = true;
          script.defer = true;
          script.type = "text/javascript";
          document.body.appendChild(script);
        }
      });
    },
    {
      rootMargin: "300px", // Start loading slightly before it enters viewport
    }
  );

  observer.observe(badgeElement);
})();
