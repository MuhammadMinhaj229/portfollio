## 2023-10-10 - O(N) DOM Traversal in IntersectionObserver Callback
**Learning:** In static sites with scroll-spy features (like `scroll.js`), using an IntersectionObserver is efficient, but performing O(N) array traversals (e.g., looping through all `a` tags) inside the callback to toggle active states defeats the purpose.
**Action:** Always pre-cache the relationship between target elements (sections) and their interactive counterparts (links) in an object/map for O(1) lookups during high-frequency events like scrolling or intersection changes.
