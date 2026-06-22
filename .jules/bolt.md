## 2024-05-24 - O(1) IntersectionObserver lookups
**Learning:** In scroll-spy / navigation active-state management with IntersectionObserver, iterating over all DOM links inside the callback on every intersection event introduces unnecessary O(N) DOM mutations and reads.
**Action:** When implementing IntersectionObserver, cache navigation elements upfront by their target IDs into a Map pointing to arrays of links. Store the current active link state array and diff the reference inside the callback to perform O(1) attribute updates and early returns.

## 2026-06-22 - Batch IntersectionObserver callback execution
**Learning:** In scroll-spy implementations, fast scrolling can trigger multiple intersection entries within the same `IntersectionObserver` callback execution frame. Iterating and updating DOM state (like active classes) for *each* entry in the array causes unnecessary layout thrashing and intermediate DOM updates.
**Action:** Always batch DOM updates within `IntersectionObserver` callbacks. Find the final state (e.g., the last visible section in the `entries` array) and execute the DOM mutation function (`setActive`) only once per callback execution instead of inside the `entries.forEach` loop.
