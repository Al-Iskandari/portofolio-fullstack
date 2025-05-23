import { useEffect, useState } from "react";

export function ViewPortObserver(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting)

    },{
      rootMargin:"-40%"} //Adjust this value
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}