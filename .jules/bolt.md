## 2024-05-24 - O(1) IntersectionObserver lookups
**Learning:** In scroll-spy / navigation active-state management with IntersectionObserver, iterating over all DOM links inside the callback on every intersection event introduces unnecessary O(N) DOM mutations and reads.
**Action:** When implementing IntersectionObserver, cache navigation elements upfront by their target IDs into a Map pointing to arrays of links. Store the current active link state array and diff the reference inside the callback to perform O(1) attribute updates and early returns.

## 2024-05-24 - Batch IntersectionObserver Updates
**Learning:** When processing IntersectionObserver entries for scroll-spy functionality, iterating over all entries and updating DOM state for each intersecting one can cause layout thrashing and intermediate DOM manipulations during fast scrolling.
**Action:** Batch DOM state updates by iterating the entries array in reverse to find the last intersecting entry and apply the DOM mutation only once.
