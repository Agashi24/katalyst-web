"use client";
import { useEffect, useRef, useState } from "react";

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return [count, ref];
}

export default function AnimatedStat({ value, suffix = "" }) {
  const isNumber = !isNaN(value);
  const numericVal = isNumber ? parseInt(value) : 0;
  const [count, ref] = useCountUp(numericVal);

  if (isNumber) {
    return (
      <span ref={ref}>
        {count}
        {suffix}
      </span>
    );
  }
  return <span ref={ref}>{value}</span>;
}
