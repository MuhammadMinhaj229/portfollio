## 2024-05-24 - O(1) IntersectionObserver lookups
**Learning:** In scroll-spy / navigation active-state management with IntersectionObserver, iterating over all DOM links inside the callback on every intersection event introduces unnecessary O(N) DOM mutations and reads.
**Action:** When implementing IntersectionObserver, cache navigation elements upfront by their target IDs into a Map pointing to arrays of links. Store the current active link state array and diff the reference inside the callback to perform O(1) attribute updates and early returns.
## 2026-06-26 - Batching IntersectionObserver intermediate layout thrashing
**Learning:** During fast scrolling, an IntersectionObserver callback might receive an array of entries where multiple elements are intersecting simultaneously. Processing each entry sequentially and triggering DOM updates (like setting active navigation classes) causes intermediate layout thrashing.
**Action:** Always process the entire entries array first, finding the last/most-relevant intersecting entry, and perform the DOM mutation only once per callback batch.
