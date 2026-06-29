const fs = require('fs');
const path = require('path');

const scrollJsCode = fs.readFileSync(path.resolve(__dirname, '../assets/js/scroll.js'), 'utf8');

describe('scroll.js', () => {
  beforeEach(() => {
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

    // Mock IntersectionObserver
    window.IntersectionObserver = jest.fn(function(callback, options) {
      this.callback = callback;
      this.options = options;
      this.observe = jest.fn();
      this.unobserve = jest.fn();
      this.disconnect = jest.fn();
      window.__intersectionObserverCallback = callback;
    });

    // Mock window innerHeight
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 1000,
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
    document.body.innerHTML = '';
    delete window.__intersectionObserverCallback;
  });

  const loadScript = () => {
    // Evaluate the script in the current JSDOM environment
    eval(scrollJsCode);
  };

  test('Initial state does not set active without intersection', () => {
    loadScript();

    const link1 = document.querySelector('a[href="#section1"]');
    const link2 = document.querySelector('a[href="#section2"]');

    // No link should be active initially until observer triggers
    expect(link1.classList.contains('is-active')).toBe(false);
    expect(link2.classList.contains('is-active')).toBe(false);
  });

  test('Observer callback updates active link to first section', () => {
    loadScript();

    // Trigger intersection observer callback
    const section1 = document.getElementById('section1');
    window.__intersectionObserverCallback([{
      target: section1,
      isIntersecting: true
    }]);

    const link1 = document.querySelector('a[href="#section1"]');
    const link2 = document.querySelector('a[href="#section2"]');

    expect(link1.classList.contains('is-active')).toBe(true);
    expect(link1.getAttribute('aria-current')).toBe('true');

    expect(link2.classList.contains('is-active')).toBe(false);
    expect(link2.getAttribute('aria-current')).toBeNull();
  });

  test('Observer callback updates active link to second section', () => {
    loadScript();

    // Trigger intersection observer callback for section 2
    const section2 = document.getElementById('section2');
    window.__intersectionObserverCallback([{
      target: section2,
      isIntersecting: true
    }]);

    const link1 = document.querySelector('a[href="#section1"]');
    const link2 = document.querySelector('a[href="#section2"]');

    expect(link1.classList.contains('is-active')).toBe(false);
    expect(link1.getAttribute('aria-current')).toBeNull();

    expect(link2.classList.contains('is-active')).toBe(true);
    expect(link2.getAttribute('aria-current')).toBe('true');
  });

  test('Observer callback for non-intersecting element does not change active state', () => {
    loadScript();

    // Trigger intersection for section 2
    const section2 = document.getElementById('section2');
    window.__intersectionObserverCallback([{
      target: section2,
      isIntersecting: true
    }]);

    // Trigger non-intersection for section 1
    const section1 = document.getElementById('section1');
    window.__intersectionObserverCallback([{
      target: section1,
      isIntersecting: false
    }]);

    const link1 = document.querySelector('a[href="#section1"]');
    const link2 = document.querySelector('a[href="#section2"]');

    expect(link1.classList.contains('is-active')).toBe(false);
    expect(link2.classList.contains('is-active')).toBe(true);
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
