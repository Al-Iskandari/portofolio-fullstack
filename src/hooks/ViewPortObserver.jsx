import { useEffect, useState } from "react";

export function ViewPortObserver(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

    

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    // Get the initial viewport height on component mount
    const initialViewportHeight = window.innerHeight;
    
    // Calculate the dynamic threshold based on the ratio
    const dynamicThreshold = initialViewportHeight * 0.5;

    const observerOptions = {
      root: null, // use the document's viewport
      rootMargin: `-${dynamicThreshold}px 0px`, // Use negative margin for a dynamic offset
      threshold: 0, // No threshold is needed because we use rootMargin
    };

    const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting)

    },
      observerOptions
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}