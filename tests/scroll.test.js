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
    global.triggerIntersection = null;
    global.IntersectionObserver = class IntersectionObserver {
      constructor(callback) {
        global.triggerIntersection = callback;
      }
      observe(element) {
        // Automatically trigger initial intersection for section1 to match test expectations
        if (element.id === 'section1') {
          global.triggerIntersection([{ isIntersecting: true, target: element }]);
        }
      }
      unobserve() {}
      disconnect() {}
    };
  });

  afterEach(() => {
    jest.restoreAllMocks();
    document.body.innerHTML = '';
    delete global.IntersectionObserver;
    delete global.triggerIntersection;
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

    // Trigger intersection for section2
    global.triggerIntersection([
      { isIntersecting: true, target: document.getElementById('section2') }
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

    // Trigger intersection for section3
    global.triggerIntersection([
      { isIntersecting: true, target: document.getElementById('section3') }
    ]);

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
