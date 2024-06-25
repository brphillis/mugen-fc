"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import useWindowSize from "@/hooks/useWindowSize";

export const ScreenSizeEnforcer = () => {
  const router = useRouter();

  const [isActive, setIsActive] = useState<boolean>(true);
  const [count, setCount] = useState<number>(10);
  const { width } = useWindowSize();

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // handle counter
  useEffect(() => {
    if (width < 1350) {
      setIsActive(true);
      intervalRef.current = setInterval(() => {
        setCount((currentCount) => currentCount - 1);
      }, 1000);
    } else {
      setIsActive(false);
      clearInterval(intervalRef.current!);
      setCount(10);
    }

    return () => clearInterval(intervalRef.current!);
  }, [width]);

  // handle redirect
  useEffect(() => {
    if (count <= 0) {
      clearInterval(intervalRef.current!);
      intervalRef.current = null;
      router.push(`/`);
    }
  }, [count]);

  return (
    <>
      {isActive && (
        <div className="fixed w-screen h-screen bg-black/95 flex justify-center items-center">
          <div>
            <h2 className="text-xl text-center text-wrap">
              MFC Is Not Supported On Mobile Devices
            </h2>

            <div className="text-center text-wrap mt-6">{`You will be Redirected in ${count} Seconds`}</div>
          </div>
        </div>
      )}
    </>
  );
};
