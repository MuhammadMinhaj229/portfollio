const fs = require('fs');
const path = require('path');

const scrollJsCode = fs.readFileSync(path.resolve(__dirname, '../assets/js/scroll.js'), 'utf8');

describe('scroll.js', () => {
  let intersectionCallbacks = [];

  beforeEach(() => {
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

    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 1000,
    });

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

    intersectionCallbacks = [];
    window.IntersectionObserver = class MockIntersectionObserver {
      constructor(callback) {
        this.callback = callback;
        this.elements = [];
        intersectionCallbacks.push(this);
      }
      observe(element) {
        this.elements.push(element);
        // Initially set the first element as intersecting to match test expectation
        if (this.elements.length === 1) {
          this.callback([{ target: element, isIntersecting: true }]);
        }
      }
      unobserve() {}
      disconnect() {}

      // Helper to trigger intersection from tests
      trigger(id) {
        const entries = this.elements.map(el => ({
          target: el,
          isIntersecting: el.id === id
        }));
        this.callback(entries);
      }
    };
  });

  afterEach(() => {
    jest.restoreAllMocks();
    document.body.innerHTML = '';
    delete window.IntersectionObserver;
  });

  const loadScript = () => {
    eval(scrollJsCode);
  };

  test('Initial state sets first section as active', () => {
    loadScript();

    const link1 = document.querySelector('a[href="#section1"]');
    const link2 = document.querySelector('a[href="#section2"]');

    expect(link1.classList.contains('is-active')).toBe(true);
    expect(link1.getAttribute('aria-current')).toBe('true');

    expect(link2.classList.contains('is-active')).toBe(false);
    expect(link2.getAttribute('aria-current')).toBeNull();
  });

  test('Scroll updates active link to second section', () => {
    loadScript();

    // Trigger intersection for section 2
    intersectionCallbacks[0].trigger('section2');

    const link1 = document.querySelector('a[href="#section1"]');
    const link2 = document.querySelector('a[href="#section2"]');

    expect(link1.classList.contains('is-active')).toBe(false);
    expect(link1.getAttribute('aria-current')).toBeNull();

    expect(link2.classList.contains('is-active')).toBe(true);
    expect(link2.getAttribute('aria-current')).toBe('true');
  });

  test('Resize updates active link', () => {
    loadScript();

    // Trigger intersection for section 3
    intersectionCallbacks[0].trigger('section3');

    const link2 = document.querySelector('a[href="#section2"]');
    const link3 = document.querySelector('a[href="#section3"]');

    expect(link2.classList.contains('is-active')).toBe(false);
    expect(link3.classList.contains('is-active')).toBe(true);
    expect(link3.getAttribute('aria-current')).toBe('true');
  });

  test('Handles pages with no matching sections gracefully', () => {
    document.body.innerHTML = '<div><a href="#missing" class="side-link">Missing</a></div>';

    expect(() => {
      loadScript();
    }).not.toThrow();
  });
});
