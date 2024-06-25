"use client";

// "@tsparticles/engine"
// "@tsparticles/react"
// "@tsparticles/slim"

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  Engine,
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import { ParticlesBackground_Constellation } from "./Backgrounds/Constellation";
import { ParticlesBackground_ColorSquares } from "./Backgrounds/ColorSquares";
import { ParticlesBackground_Bubbles } from "./Backgrounds/Bubbles";

export type ParticlesBackgroundSetting =
  | "Bubbles"
  | "Constellation"
  | "ColorSquares";

type Props = {
  background: ParticlesBackgroundSetting;
  containerClassName?: string;
  fullScreen?: boolean;
};

export const ParticlesBackground = ({
  background,
  containerClassName,
  fullScreen,
}: Props) => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {};

  let backgroundSetting: Object;

  if (background === "Bubbles") {
    backgroundSetting = ParticlesBackground_Bubbles;
  }

  if (background === "Constellation") {
    backgroundSetting = ParticlesBackground_Constellation;
  }

  if (background === "ColorSquares") {
    backgroundSetting = ParticlesBackground_ColorSquares;
  }

  const options: ISourceOptions = useMemo(
    () => ({
      ...backgroundSetting,
      fullScreen: { enable: fullScreen ? true : false },
    }),
    []
  );

  if (init) {
    return (
      <div className={containerClassName}>
        <Particles
          id="tsparticles"
          className="h-full w-full"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }

  return <></>;
};
