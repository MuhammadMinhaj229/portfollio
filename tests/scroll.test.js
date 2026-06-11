const fs = require('fs');
const path = require('path');

const scrollJsCode = fs.readFileSync(path.resolve(__dirname, '../assets/js/scroll.js'), 'utf8');

describe('scroll.js', () => {
  let observerCallback;

  beforeEach(() => {
    // Mock IntersectionObserver
    window.IntersectionObserver = jest.fn().mockImplementation((callback) => {
      observerCallback = callback;
      return {
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn()
      };
    });

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

    // Mock requestAnimationFrame to execute synchronously
    window.requestAnimationFrame = jest.fn((cb) => cb());
  });

  afterEach(() => {
    jest.restoreAllMocks();
    document.body.innerHTML = '';
    delete window.IntersectionObserver;
    delete window.requestAnimationFrame;
  });

  const loadScript = () => {
    jest.resetModules();
    eval(scrollJsCode);
  };

  test('Initial state sets first section as active', () => {
    loadScript();

    // Trigger observer for section1
    observerCallback([{ target: { id: 'section1' }, isIntersecting: true }]);

    const link1 = document.querySelector('a[href="#section1"]');
    const link2 = document.querySelector('a[href="#section2"]');

    expect(link1.classList.contains('is-active')).toBe(true);
    expect(link1.getAttribute('aria-current')).toBe('true');

    expect(link2.classList.contains('is-active')).toBe(false);
    expect(link2.getAttribute('aria-current')).toBeNull();
  });

  test('Scroll updates active link to second section', () => {
    loadScript();

    // Trigger observer for section1 (initially)
    observerCallback([{ target: { id: 'section1' }, isIntersecting: true }]);

    // Trigger observer for section2 (scrolling down)
    observerCallback([
      { target: { id: 'section1' }, isIntersecting: false },
      { target: { id: 'section2' }, isIntersecting: true }
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

    // Trigger observer for section3
    observerCallback([{ target: { id: 'section3' }, isIntersecting: true }]);

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
