import { useEffect, useRef, useState } from "react";

export function CountUpOnVisible(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const increment = end / (duration / 16);

          const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(interval);
              setHasAnimated(true);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        }
      },
      { threshold: 0.6 } // trigger when 60% visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return { count: count.toLocaleString(), ref };
}
