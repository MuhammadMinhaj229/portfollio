## 2025-02-23 - [Navigation Link Optimization]
**Learning:** When caching or optimizing DOM lookups for navigation links (e.g., using a Map to link section IDs to DOM elements), mapping an ID to a single link can cause bugs if there are multiple navigation menus pointing to the same sections.
**Action:** Always map IDs to an array of links rather than a single link element to handle multiple instances and prevent regressions in navigation functionality.
