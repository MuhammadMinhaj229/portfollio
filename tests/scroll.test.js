const fs = require('fs');
const path = require('path');

const scrollJsCode = fs.readFileSync(path.resolve(__dirname, '../assets/js/scroll.js'), 'utf8');

describe('scroll.js', () => {
  let observeMock;
  let intersectionObserverMock;
  let observerCallback;

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

    observeMock = jest.fn();
    intersectionObserverMock = jest.fn(function(callback, options) {
      observerCallback = callback;
      this.observe = observeMock;
      this.unobserve = jest.fn();
      this.disconnect = jest.fn();
    });
    global.IntersectionObserver = intersectionObserverMock;
  });

  afterEach(() => {
    jest.restoreAllMocks();
    document.body.innerHTML = '';
    delete global.IntersectionObserver;
  });

  const loadScript = () => {
    // Evaluate the script in the current JSDOM environment
    eval(scrollJsCode);
  };

  test('Initial state sets first section as active', () => {
    loadScript();

    // Simulate IntersectionObserver firing for the first section
    observerCallback([{
      isIntersecting: true,
      target: { id: 'section1' }
    }]);

    const link1 = document.querySelector('a[href="#section1"]');
    const link2 = document.querySelector('a[href="#section2"]');

    expect(link1.classList.contains('is-active')).toBe(true);
    expect(link1.getAttribute('aria-current')).toBe('true');

    expect(link2.classList.contains('is-active')).toBe(false);
    expect(link2.getAttribute('aria-current')).toBeNull();
  });

  test('Scroll updates active link to second section', () => {
    loadScript();

    // Simulate IntersectionObserver firing for the second section
    observerCallback([{
      isIntersecting: true,
      target: { id: 'section2' }
    }]);

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
