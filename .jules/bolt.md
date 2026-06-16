## 2024-06-16 - Prevent redundant DOM classList mutations and O(N) loops on Intersection events
**Learning:** In scroll spy implementations, running querySelector and toggling classLists across all elements on every IntersectionObserver trigger causes redundant layout calculations, especially when scrolling within the same long section.
**Action:** Use a Map to cache O(1) lookups for link elements by target ID, track the currentActiveId to early return if unchanged, and only toggle the classes of previously active and newly active links.
