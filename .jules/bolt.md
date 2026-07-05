## 2025-02-13 - Optimizing DOM Lookups for Navigation Links
**Learning:** When using IntersectionObserver to update navigation link states on scroll, repeating `Array.from(document.querySelectorAll(...))` and matching elements in every observer callback introduces an O(N) DOM lookup and iteration bottleneck. A common bug when caching these links is mapping a section ID to a single element instead of an array, causing regressions if multiple menus (e.g., desktop/mobile side-navs) link to the same section.
**Action:** When implementing IntersectionObserver-based navigations, deduplicate observed target elements using a Set. Then, cache DOM lookups by creating a Map of section IDs to arrays of DOM link elements. Also, maintain an `activeId` state to avoid mutating DOM classlists redundantly.

## 2025-02-14 - Preconnecting External Third-Party Origins
**Learning:** External scripts loaded synchronously or asynchronously (like `https://platform.linkedin.com/badges/js/profile.js`) incur DNS resolution, TCP connection, and TLS negotiation costs that delay their execution and potentially block `window.onload`.
**Action:** Always add a `<link rel="preconnect" href="https://example.com" />` in the `<head>` for critical third-party domains. This signals the browser to proactively setup the network connection before the actual resource request is dispatched.
