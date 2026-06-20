## 2024-06-20 - O(1) DOM Lookups & Mutation Minimization
**Learning:** Found an O(N) DOM query and layout mutation pattern inside `IntersectionObserver` scroll callbacks that caused thrashing across all navigation links whenever any section intersected.
**Action:** When working with active states linked to scroll events, always cache DOM elements in a `Map`, deduplicate observers with a `Set`, and maintain local state (`activeId`) to perform O(1) diffs before mutating the DOM.
