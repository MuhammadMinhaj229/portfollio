## 2024-05-24 - O(1) IntersectionObserver lookups
**Learning:** In scroll-spy / navigation active-state management with IntersectionObserver, iterating over all DOM links inside the callback on every intersection event introduces unnecessary O(N) DOM mutations and reads.
**Action:** When implementing IntersectionObserver, cache navigation elements upfront by their target IDs into a Map pointing to arrays of links. Store the current active link state array and diff the reference inside the callback to perform O(1) attribute updates and early returns.

## 2026-06-25 - IntersectionObserver DOM update batching
**Learning:** When scrolling fast, IntersectionObserver can fire callbacks with multiple entries where multiple sections are intersecting or transitioning in a single paint frame. Updating the DOM active state for each one sequentially causes layout thrashing.
**Action:** Batch DOM state updates by finding the last intersecting entry in the array and applying the DOM mutation only once. This minimizes intermediate DOM manipulations during fast scrolling.
