import React from "react";
import MetalButton from "@/components/Buttons/MetalButton";
import { ParticlesBackground } from "@/components/Effect/ParticlesBackground";
import { Icon } from "@/components/Icons/Icon";

type Props = {};

export const Mugen_HomePageBanner = (props: Props) => {
  return (
    <div className="relative hero h-[450px]">
      <div className="hero-content text-center">
        <div className="absolute w-full flex items-center justify-around max-md:px-3 max-md:h-full max-md:items-end max-md:py-6">
          <div className="relative select-none">
            <div className="absolute -bottom-[3px] w-[125%] h-[12px] rounded-[200%] bg-black/50 left-1/2 -translate-x-1/2"></div>
            <img
              src="/char/anim/wildwolf.gif"
              className="relative h-auto w-[150px]"
            />
          </div>

          <div className="flex flex-col items-center justify-center max-w-md max-md:h-[120%]">
            <p className="pb-6 max-md:pb-3 text-6xl text-nowrap font-saira_stencil_one select-none drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-white/75 max-md:text-wrap max-md:text-5xl">
              MUGEN FIGHT CLUB
            </p>
            <p className="pb-6 text-lg max-md:text-sm select-none drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-white/90">
              Running on a Revamped and Online Version of the Classic Mugen
              Fighting Engine.
            </p>

            <MetalButton
              label="Fight"
              extendStyle="max-w-[220px]"
              href="/rooms"
            />
          </div>

          <div className="relative select-none">
            <div className="absolute -bottom-[5px] w-[125%] h-[12px] rounded-[200%] bg-black/50 left-1/2 -translate-x-1/2"></div>
            <img
              src="/char/anim/iori.gif"
              className="h-auto w-[150px] scale-x-[-1]"
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-950 via-brand-primary-dark/75 to-gray-950 w-full h-full">
        <div className="pattern-brick-wall-gray-950/50 pattern-brick-wall-scale-[0.8] w-full h-full"></div>
      </div>

      <ParticlesBackground
        background="Bubbles"
        containerClassName="w-screen h-full"
      />
    </div>
  );
};
