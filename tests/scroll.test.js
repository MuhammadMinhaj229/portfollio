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
    window.mockIntersectionObserverCallback = null;
    window.IntersectionObserver = jest.fn(function (callback) {
      window.mockIntersectionObserverCallback = callback;
      this.observe = jest.fn();
      this.unobserve = jest.fn();
      this.disconnect = jest.fn();
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
    document.body.innerHTML = '';
    delete window.IntersectionObserver;
    delete window.mockIntersectionObserverCallback;
  });

  const loadScript = () => {
    eval(scrollJsCode);
  };

  test('Initial state sets first section as active', () => {
    loadScript();

    // Simulate initial intersection of section1
    const section1 = document.getElementById('section1');
    window.mockIntersectionObserverCallback([
      { isIntersecting: true, target: section1 }
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

    // Initial state
    const section1 = document.getElementById('section1');
    window.mockIntersectionObserverCallback([
      { isIntersecting: true, target: section1 }
    ]);

    // Simulate scrolling down to section2
    const section2 = document.getElementById('section2');
    window.mockIntersectionObserverCallback([
      { isIntersecting: false, target: section1 },
      { isIntersecting: true, target: section2 }
    ]);

    const link1 = document.querySelector('a[href="#section1"]');
    const link2 = document.querySelector('a[href="#section2"]');

    expect(link1.classList.contains('is-active')).toBe(false);
    expect(link1.getAttribute('aria-current')).toBeNull();

    expect(link2.classList.contains('is-active')).toBe(true);
    expect(link2.getAttribute('aria-current')).toBe('true');
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
