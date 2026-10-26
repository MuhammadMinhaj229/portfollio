import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';

export default function ProjectAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full px-3 sm:px-6 md:px-10 py-6 sm:py-12 overflow-hidden">
      <div className="flex flex-col border-t border-gray-300">
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={item.title}
              className="border-b border-gray-300 overflow-hidden group pointer-events-auto transition-colors cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveIndex(activeIndex === index ? null : index); }}
              tabIndex={0}
            >
              <div className="relative">
                {/* Collapsed State Header */}
                <motion.div
                  animate={{ height: isActive ? 0 : 'auto', opacity: isActive ? 0 : 1 }}
                  className="w-full bg-[#f0f2f5] overflow-hidden"
                >
                  <div className="w-full py-4 sm:py-6 px-3 sm:px-6 md:px-8 flex items-center justify-between cursor-pointer gap-2">
                    <div className="flex items-center min-w-0">
                      <div className="bg-[#120F17] text-white p-1 sm:p-1.5 rounded-sm mr-2.5 sm:mr-4 md:mr-6 transition-transform group-hover:-translate-y-1 shrink-0">
                        <ArrowUpRight size={20} weight="bold" className="sm:w-6 sm:h-6" />
                      </div>
                      <h3 className="text-[clamp(1rem,4.2vw,1.8rem)] md:text-5xl font-extrabold uppercase tracking-tight text-[#120F17] leading-snug whitespace-normal break-words">
                        {item.title}
                      </h3>
                    </div>
                    {item.label && (
                      <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-700 shrink-0">
                        {item.label}
                      </span>
                    )}
                  </div>
                </motion.div>

                {/* Expanded State Content */}
                <motion.div
                  initial={false}
                  animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                  className="w-full bg-white overflow-hidden"
                >
                  <div className="w-full flex flex-col md:flex-row py-6 sm:py-10 px-3 sm:px-6 md:px-8 gap-6 md:gap-8 justify-between">
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="bg-[#120F17] text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-sm shrink-0">
                          {item.icon ? React.createElement(item.icon, { size: 24, weight: "bold" }) : index + 1}
                        </div>
                        <div className="min-w-0">
                          <h2 className="text-[clamp(1.35rem,5.5vw,2.4rem)] md:text-5xl font-extrabold tracking-tight text-[#120F17] whitespace-normal leading-tight break-words">
                            {item.title}
                          </h2>
                          {item.label && (
                            <span className="text-[11px] sm:text-xs font-semibold text-purple-600 tracking-wider uppercase block mt-0.5">
                              {item.label}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-5 md:pr-12 lg:pr-16 leading-relaxed text-left sm:text-justify max-w-2xl">
                        {item.description}
                      </p>

                      {Array.isArray(item.stack) && item.stack.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
                          {item.stack.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold rounded-md bg-gray-100 text-gray-800 border border-gray-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 w-full">
                        {item.demo && (
                          <a
                            href={item.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#5227FF] text-white rounded-full text-sm font-semibold tracking-wide hover:bg-[#5227FF]/90 transition-colors cursor-pointer pointer-events-auto shadow-sm w-full sm:w-auto min-h-[44px]"
                          >
                            LIVE DEMO ↗
                          </a>
                        )}
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#120F17] text-white rounded-full text-sm font-semibold tracking-wide hover:bg-[#120F17]/80 transition-colors cursor-pointer pointer-events-auto w-full sm:w-auto min-h-[44px]"
                          >
                            GITHUB
                          </a>
                        )}
                      </div>
                    </div>
                    {item.media && (
                      <div className="w-full md:w-1/2 flex items-center justify-center rounded-xl sm:rounded-2xl overflow-hidden bg-gray-50 shadow-md border border-gray-100 max-h-[260px] sm:max-h-[340px] md:max-h-[420px]">
                        {item.media.type === 'video' ? (
                          <video 
                            src={item.media.url} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="w-full h-full object-cover max-h-[260px] sm:max-h-[340px] md:max-h-[420px]"
                          />
                        ) : (
                          <img 
                            src={item.media.url} 
                            alt={item.title} 
                            className="w-full h-full object-cover max-h-[260px] sm:max-h-[340px] md:max-h-[420px]"
                          />
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
