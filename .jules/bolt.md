## 2025-02-13 - Optimizing DOM Lookups for Navigation Links
**Learning:** When using IntersectionObserver to update navigation link states on scroll, repeating `Array.from(document.querySelectorAll(...))` and matching elements in every observer callback introduces an O(N) DOM lookup and iteration bottleneck. A common bug when caching these links is mapping a section ID to a single element instead of an array, causing regressions if multiple menus (e.g., desktop/mobile side-navs) link to the same section.
**Action:** When implementing IntersectionObserver-based navigations, deduplicate observed target elements using a Set. Then, cache DOM lookups by creating a Map of section IDs to arrays of DOM link elements. Also, maintain an `activeId` state to avoid mutating DOM classlists redundantly.

## 2025-02-14 - Batching IntersectionObserver State Updates
**Learning:** Processing multiple intersecting entries in a single IntersectionObserver callback by updating the DOM for each entry sequentially can cause layout thrashing and intermediate visual states, especially during fast scrolling or large viewport changes.
**Action:** When handling IntersectionObserver entries, batch the DOM state updates by finding the final/target intersecting entry in the array and applying the DOM mutation only once.
