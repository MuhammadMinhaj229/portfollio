
## 2024-05-18 - IntersectionObserver Navigation Optimization
**Learning:** In single-page scroll navs, querying all nav links (`querySelectorAll`) and iterating over them on *every* scroll intersection event causes heavy O(N) DOM mutations, even if the active section hasn't changed. Also, if multiple links point to the same section, the observer triggers redundantly.
**Action:** Use a `Set` to deduplicate observed target sections. Use a `Map` (Key: section ID, Value: Array of DOM link elements) for O(1) link lookups. Implement state diffing (cache `activeId`) to only perform DOM updates when the active section actually changes, turning an O(N) operation into O(1) per scroll event.
