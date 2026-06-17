## 2024-06-17 - Scroll Spy DOM Lookups
**Learning:** O(N) DOM lookups inside an IntersectionObserver callback can cause significant frame drops on pages with many sections and duplicate navigation links, as `querySelectorAll` is executed on every intersection event.
**Action:** Deduplicate targets using a `Set` before observing, and cache links to an array mapped by ID (`Map<string, Element[]>`) on initialization. Diff changes with an `activeId` tracker to only perform DOM mutations when the state actually changes.
