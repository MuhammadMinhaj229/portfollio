## 2025-02-13 - Optimizing DOM Lookups for Navigation Links
**Learning:** When using IntersectionObserver to update navigation link states on scroll, repeating `Array.from(document.querySelectorAll(...))` and matching elements in every observer callback introduces an O(N) DOM lookup and iteration bottleneck. A common bug when caching these links is mapping a section ID to a single element instead of an array, causing regressions if multiple menus (e.g., desktop/mobile side-navs) link to the same section.
**Action:** When implementing IntersectionObserver-based navigations, deduplicate observed target elements using a Set. Then, cache DOM lookups by creating a Map of section IDs to arrays of DOM link elements. Also, maintain an `activeId` state to avoid mutating DOM classlists redundantly.

## 2025-02-13 - Batching IntersectionObserver DOM Updates
**Learning:** Processing IntersectionObserver entries individually within the callback can cause redundant DOM updates (layout thrashing) during fast scrolling if multiple sections intersect in a single event loop tick.
**Action:** Always batch DOM state updates by finding the last intersecting entry in the array and applying the DOM mutation only once.
