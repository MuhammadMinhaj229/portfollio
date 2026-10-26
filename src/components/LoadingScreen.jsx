import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    // Assets to preload
    const assets = [
      '/photos/dohad.jpg',
      '/photos/automation_studio.jpg',
      '/photos/air_quality.jpg',
      '/photos/terrain.jpg',
      '/photos/customer_segmentation.jpg',
      '/photos/nlp_review.jpg',
      '/profile.png',
    ];

    let loadedCount = 0;
    const totalAssets = assets.length;

    // Use a GSAP object to animate the percentage smoothly
    const progressObj = { value: 0 };
    
    const updateProgress = () => {
      loadedCount++;
      const target = (loadedCount / totalAssets) * 100;
      
      gsap.to(progressObj, {
        value: target,
        duration: 0.4,
        ease: 'power2.out',
        onUpdate: () => {
          setProgress(Math.round(progressObj.value));
          if (progressObj.value >= 100) {
            handleComplete();
          }
        }
      });
    };

    const handleComplete = () => {
      if (!isLoaded) {
        setIsLoaded(true);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    };

    if (totalAssets === 0) {
      updateProgress();
    } else {
      assets.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = updateProgress;
        img.onerror = updateProgress;
      });
    }

    // Safety fallback: if loading takes more than 4 seconds, force complete
    const fallbackTimer = setTimeout(() => {
      gsap.to(progressObj, {
        value: 100,
        duration: 0.5,
        onUpdate: () => setProgress(Math.round(progressObj.value)),
        onComplete: handleComplete
      });
    }, 4000);

    return () => clearTimeout(fallbackTimer);
  }, [onComplete, isLoaded]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] bg-[#000000] flex flex-col justify-end p-6 sm:p-10 pointer-events-none cursor-none"
      key="loading-screen"
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      {/* Large Counter Right Aligned */}
      <div className="flex justify-end items-end w-full leading-none">
        <h1 
          ref={counterRef}
          className="text-white font-black tracking-tighter"
          style={{ 
            fontSize: 'clamp(80px, 22vw, 250px)',
            marginRight: '0', 
            marginBottom: '0'
          }}
        >
          {progress}
        </h1>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
