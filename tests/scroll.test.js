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
        <a href="#section1" class="side-link is-active" aria-current="true">Section 1</a>
        <a href="#section2" class="side-link">Section 2</a>
        <a href="#section3" class="side-link">Section 3</a>
      </nav>
      <main>
        <section id="section1" style="height: 1000px;"></section>
        <section id="section2" style="height: 1000px;"></section>
        <section id="section3" style="height: 1000px;"></section>
      </main>
    `;

    class MockIntersectionObserver {
      constructor(callback) {
        this.callback = callback;
        window.mockObserverInstance = this;
      }
      observe() {}
      unobserve() {}
      disconnect() {}
      trigger(entries) {
        this.callback(entries);
      }
    }

    window.IntersectionObserver = MockIntersectionObserver;
  });

  afterEach(() => {
    jest.restoreAllMocks();
    document.body.innerHTML = '';
    delete window.IntersectionObserver;
  });

  const loadScript = () => {
    eval(scrollJsCode);
  };

  test('Initial state sets first section as active when it intersects', () => {
    loadScript();

    mockObserverInstance.trigger([{ target: { id: 'section1' }, isIntersecting: true }]);

    const link1 = document.querySelector('a[href="#section1"]');
    const link2 = document.querySelector('a[href="#section2"]');

    expect(link1.classList.contains('is-active')).toBe(true);
    expect(link1.getAttribute('aria-current')).toBe('true');

    expect(link2.classList.contains('is-active')).toBe(false);
    expect(link2.getAttribute('aria-current')).toBeNull();
  });

  test('Intersection updates active link to second section', () => {
    loadScript();

    mockObserverInstance.trigger([{ target: { id: 'section2' }, isIntersecting: true }]);

    const link1 = document.querySelector('a[href="#section1"]');
    const link2 = document.querySelector('a[href="#section2"]');

    expect(link1.classList.contains('is-active')).toBe(false);
    expect(link1.getAttribute('aria-current')).toBeNull();

    expect(link2.classList.contains('is-active')).toBe(true);
    expect(link2.getAttribute('aria-current')).toBe('true');
  });

  test('Intersection updates active link to third section', () => {
    loadScript();

    mockObserverInstance.trigger([{ target: { id: 'section3' }, isIntersecting: true }]);

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
