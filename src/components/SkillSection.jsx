import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SkillSection({ skillsData }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const categories = gsap.utils.toArray('.skill-category');

    categories.forEach((cat) => {
      const title = cat.querySelector('.category-title');
      const items = cat.querySelectorAll('.skill-item');

      if (!title || !items.length) return;

      gsap.set(title, { x: -20, autoAlpha: 0 });
      gsap.set(items, { y: 15, autoAlpha: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cat,
          start: 'top 95%',
          end: 'top 70%',
          scrub: 0.8
        }
      });

      tl.to(title, {
        x: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: 'none'
      }).to(items, {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.06,
        ease: 'none'
      }, '-=0.3');
    });

    ScrollTrigger.refresh();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full px-4 sm:px-8 md:px-12 py-8 md:py-20 text-white overflow-hidden max-w-[1500px] mx-auto">
      <div className="flex flex-col gap-10 md:gap-14">
        {skillsData.map((category, idx) => (
          <div 
            key={idx} 
            className="skill-category flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-10 pb-8 border-b border-white/10 last:border-b-0"
          >
            {/* Left side: Category Title */}
            <div className="w-full lg:w-72 shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7] shrink-0" />
                <h3 className="category-title text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider text-purple-300 leading-tight">
                  {category.category}
                </h3>
              </div>
              <span className="text-xs text-gray-400 mt-1.5 pl-5 block font-mono">
                {category.items?.length || 0} Core Technologies
              </span>
            </div>
            
            {/* Right side: Skills Grid */}
            <div className="flex-1 flex flex-wrap gap-2.5 sm:gap-3.5 md:gap-4 pointer-events-auto items-center">
              {category.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  className="skill-item flex items-center gap-2 sm:gap-2.5 bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-white/10 hover:shadow-[0_0_18px_rgba(168,85,247,0.2)] transition-all rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-sm group min-h-[42px]"
                >
                  {item.icon && (
                    <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                      {React.createElement(item.icon, { size: "100%", weight: "regular", color: item.color || "#ffffff" })}
                    </div>
                  )}
                  <span className="text-xs sm:text-sm md:text-base font-semibold tracking-wide text-gray-200 group-hover:text-white">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
