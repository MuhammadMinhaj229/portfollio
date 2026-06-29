## 2024-05-24 - O(1) IntersectionObserver lookups
**Learning:** In scroll-spy / navigation active-state management with IntersectionObserver, iterating over all DOM links inside the callback on every intersection event introduces unnecessary O(N) DOM mutations and reads.
**Action:** When implementing IntersectionObserver, cache navigation elements upfront by their target IDs into a Map pointing to arrays of links. Store the current active link state array and diff the reference inside the callback to perform O(1) attribute updates and early returns.

## 2024-05-24 - Batching IntersectionObserver DOM updates
**Learning:** When multiple sections intersect simultaneously (e.g. during fast scrolling), updating the DOM state inside the `entries.forEach` loop leads to intermediate layout thrashing.
**Action:** Process IntersectionObserver entries by finding the *last* intersecting entry ID in the array, then perform the DOM mutation (`setActive()`) exactly once for that ID.
