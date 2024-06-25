"use client";

import { useState, useEffect } from "react";

interface WindowSize {
  width: number;
  height: number;
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 1920,
    height: 1080,
  });

  useEffect(() => {
    const handleResize = () => {
      if (typeof window == "object") {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
      }
      return () => {
        if (typeof window == "object") {
          window.removeEventListener("resize", handleResize);
        }
      };
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
