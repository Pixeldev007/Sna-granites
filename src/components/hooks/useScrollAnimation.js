import { useState, useEffect } from 'react';

const useScrollAnimation = (threshold = 0.1) => {
  const [animatedElements, setAnimatedElements] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedElements(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold }
    );

    // Observe all elements with animation-trigger class
    const elements = document.querySelectorAll('.animation-trigger');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [threshold]);

  return animatedElements;
};

export default useScrollAnimation;
