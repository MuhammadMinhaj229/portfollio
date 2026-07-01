## 2025-02-13 - Optimizing DOM Lookups for Navigation Links
**Learning:** When using IntersectionObserver to update navigation link states on scroll, repeating `Array.from(document.querySelectorAll(...))` and matching elements in every observer callback introduces an O(N) DOM lookup and iteration bottleneck. A common bug when caching these links is mapping a section ID to a single element instead of an array, causing regressions if multiple menus (e.g., desktop/mobile side-navs) link to the same section.
**Action:** When implementing IntersectionObserver-based navigations, deduplicate observed target elements using a Set. Then, cache DOM lookups by creating a Map of section IDs to arrays of DOM link elements. Also, maintain an `activeId` state to avoid mutating DOM classlists redundantly.

## 2025-02-13 - Batching IntersectionObserver Entries
**Learning:** When processing IntersectionObserver entries for scroll-spy functionality, looping over all entries and updating DOM state for each intersecting entry can cause layout thrashing and intermediate DOM manipulations during fast scrolling.
**Action:** Batch DOM state updates by finding the last intersecting entry in the array and applying the DOM mutation only once.
