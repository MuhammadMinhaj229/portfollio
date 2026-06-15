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

    // Mock IntersectionObserver
    class MockIntersectionObserver {
      constructor(callback, options) {
        this.callback = callback;
        this.options = options;
        this.elements = [];

        this.checkIntersections = () => {
          const entries = this.elements.map(el => {
            const rect = el.getBoundingClientRect();
            // A simple mock of intersection based on the test's getBoundingClientRect tops:
            // The active section is the one closest to the top but within the "active" zone.
            // Tests set the active one's top to 0, 300, or 100. Let's just say intersecting is top >= -200 && top <= 400
            const isIntersecting = rect.top >= -200 && rect.top <= 400;
            return {
              target: el,
              isIntersecting
            };
          });
          this.callback(entries);
        };

        window.addEventListener('scroll', this.checkIntersections);
        window.addEventListener('resize', this.checkIntersections);

        // Initial check on next tick
        setTimeout(this.checkIntersections, 0);
      }

      observe(element) {
        this.elements.push(element);
        // Fire immediately for initial state
        const rect = element.getBoundingClientRect();
        const isIntersecting = rect.top >= -200 && rect.top <= 400;
        this.callback([{ target: element, isIntersecting }]);
      }

      unobserve(element) {
        this.elements = this.elements.filter(el => el !== element);
      }

      disconnect() {
        window.removeEventListener('scroll', this.checkIntersections);
        window.removeEventListener('resize', this.checkIntersections);
        this.elements = [];
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
    // Evaluate the script in the current JSDOM environment
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

    // Update the mock to simulate scrolling down
    Element.prototype.getBoundingClientRect = jest.fn(function () {
      if (this.id === 'section1') {
        return { top: -1000 };
      } else if (this.id === 'section2') {
        return { top: 300 }; // intersecting
      } else if (this.id === 'section3') {
        return { top: 1300 };
      }
      return { top: 0 };
    });

    // Dispatch scroll event
    window.dispatchEvent(new Event('scroll'));

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
        return { top: 100 }; // intersecting
      }
      return { top: 0 };
    });

    // Dispatch resize event
    window.dispatchEvent(new Event('resize'));

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
