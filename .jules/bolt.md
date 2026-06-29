## 2024-05-19 - Intersection Observer Thrashing
**Learning:** Frequent events like scroll or intersection observers easily trigger redundant O(n) DOM operations if not carefully managed. `classList.toggle` and iterating over all DOM nodes repeatedly is a common source of layout thrashing and high CPU usage in simple scroll-spy scripts.
**Action:** Map DOM elements in initialization so they can be looked up in O(1) time. Cache the currently active element and only modify the DOM nodes that actually need a class/attribute change.
