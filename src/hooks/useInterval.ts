import { useEffect, useRef } from "react";

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback if it changes
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    if (delay === null) return;

    const tick = () => {
      if (savedCallback.current) savedCallback.current();
    };

    const id = setInterval(tick, delay);

    // Cleanup the interval on component unmount or delay change
    return () => clearInterval(id);
  }, [delay]);
}

export default useInterval;
