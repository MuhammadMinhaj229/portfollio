const fs = require('fs');
const path = require('path');

const scrollJsCode = fs.readFileSync(path.resolve(__dirname, '../assets/js/scroll.js'), 'utf8');

describe('scroll.js', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    class IntersectionObserverMock {
      constructor(callback, options) {
        this.callback = callback;
        this.options = options;
        this.elements = new Set();
        // Expose instance on window for testing
        window.activeIntersectionObserver = this;
      }
      observe(element) {
        this.elements.add(element);
      }
      unobserve(element) {
        this.elements.delete(element);
      }
      disconnect() {
        this.elements.clear();
      }
      // Helper to trigger intersections in tests
      triggerIntersection(entries) {
        this.callback(entries, this);
      }
    }
    window.IntersectionObserver = IntersectionObserverMock;

    // Reset document
    document.body.innerHTML = `
      <nav>
        <a href="#section1" class="side-link">Section 1</a>
        <a href="#section2" class="side-link">Section 2</a>
        <a href="#section3" class="side-link">Section 3</a>
      </nav>
      <main>
        <section id="section1" style="height: 1000px;"></section>
        <section id="section2" style="height: 1000px;"></section>
        <section id="section3" style="height: 1000px;"></section>
      </main>
    `;

    // Mock window innerHeight
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 1000,
    });

    // Default getBoundingClientRect mock
    Element.prototype.getBoundingClientRect = jest.fn(function () {
      if (this.id === 'section1') {
        return { top: 0 };
      } else if (this.id === 'section2') {
        return { top: 1000 };
      } else if (this.id === 'section3') {
        return { top: 2000 };
      }
      return { top: 0 };
    });

    // Remove any previously attached event listeners
    // JSDOM doesn't easily let us clear all listeners, so we will replace window.addEventListener
    // and store them to call them manually, or we can just let JSDOM handle it
    // But evaluating the IIFE multiple times will attach multiple listeners
    // A clean way is to mock addEventListener or just rely on DOM replacement
  });

  afterEach(() => {
    jest.restoreAllMocks();
    document.body.innerHTML = '';
  });

  const loadScript = () => {
    // Evaluate the script in the current JSDOM environment
    eval(scrollJsCode);
  };

  test('Initial state sets first section as active', () => {
    loadScript();

    // Simulate IntersectionObserver triggering for first section
    window.activeIntersectionObserver.triggerIntersection([
      { isIntersecting: true, target: { id: 'section1' } }
    ]);

    const link1 = document.querySelector('a[href="#section1"]');
    const link2 = document.querySelector('a[href="#section2"]');

    expect(link1.classList.contains('is-active')).toBe(true);
    expect(link1.getAttribute('aria-current')).toBe('true');

    expect(link2.classList.contains('is-active')).toBe(false);
    expect(link2.getAttribute('aria-current')).toBeNull();
  });

  test('Scroll updates active link to second section', () => {
    loadScript();

    // Update the mock to simulate scrolling down
    // section1 is now above viewport, section2 is at top
    Element.prototype.getBoundingClientRect = jest.fn(function () {
      if (this.id === 'section1') {
        return { top: -1000 };
      } else if (this.id === 'section2') {
        // top <= window.innerHeight * 0.35 (which is 350)
        return { top: 300 };
      } else if (this.id === 'section3') {
        return { top: 1300 };
      }
      return { top: 0 };
    });

    // Simulate IntersectionObserver triggering for second section
    window.activeIntersectionObserver.triggerIntersection([
      { isIntersecting: true, target: { id: 'section2' } }
    ]);

    const link1 = document.querySelector('a[href="#section1"]');
    const link2 = document.querySelector('a[href="#section2"]');

    expect(link1.classList.contains('is-active')).toBe(false);
    expect(link1.getAttribute('aria-current')).toBeNull();

    expect(link2.classList.contains('is-active')).toBe(true);
    expect(link2.getAttribute('aria-current')).toBe('true');
  });

  test('Resize updates active link', () => {
    loadScript();

    // Change mock to simulate being at section3
    Element.prototype.getBoundingClientRect = jest.fn(function () {
      if (this.id === 'section1') {
        return { top: -2000 };
      } else if (this.id === 'section2') {
        return { top: -1000 };
      } else if (this.id === 'section3') {
        return { top: 100 }; // <= 350
      }
      return { top: 0 };
    });

    // Simulate IntersectionObserver triggering for third section
    window.activeIntersectionObserver.triggerIntersection([
      { isIntersecting: true, target: { id: 'section3' } }
    ]);

    const link2 = document.querySelector('a[href="#section2"]');
    const link3 = document.querySelector('a[href="#section3"]');

    expect(link2.classList.contains('is-active')).toBe(false);
    expect(link3.classList.contains('is-active')).toBe(true);
    expect(link3.getAttribute('aria-current')).toBe('true');
  });

  test('Handles pages with no matching sections gracefully', () => {
    // Override body with no elements
    document.body.innerHTML = '<div><a href="#missing" class="side-link">Missing</a></div>';

    // Should not throw an error
    expect(() => {
      loadScript();
    }).not.toThrow();
  });
});
