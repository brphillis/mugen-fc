import { ArcadeButton } from "@/components/_MugenFC/Buttons/ArcadeButton";
import { KeyboardButton } from "@/components/Buttons/KeyboardButton";
import { ParticlesBackground } from "@/components/Effect/ParticlesBackground";
import { Icon } from "@/components/Icons/Icon";
import MetalNavBar from "@/components/Navigation/Desktop/NavBar/_Styles/MetalNavBar";

export default async function Page() {
  return (
    <div>
      <div className="absolute pattern-circuit-board-black/10 pattern-circuit-board-scale-[0.5] w-full h-full"></div>

      <div className="relative hero h-[180px] bg-black/50 border-b-[1px] border-b-brand-white/10">
        <div className="hero-content text-center">
          <div className="flex flex-col items-center justify-center max-w-md">
            <p className="py-6 max-md:pb-3 text-6xl text-nowrap font-saira_stencil_one select-none drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-white/75 max-md:text-wrap max-md:text-5xl">
              TUTORIAL
            </p>
          </div>
        </div>

        <ParticlesBackground
          background="Bubbles"
          containerClassName="w-screen h-full"
        />
      </div>

      <MetalNavBar extendStyle="justify-center">
        <div
          className="relative select-none py-3 px-6 mx-1 max-lg:px-3 max-xl:text-sm 
            max-xs:text-sm transition-colors duration-300 border-b-none border-brand-primary-dark/75"
        >
          CONTROLS
        </div>
      </MetalNavBar>

      <div className="select-none flex flex-col items-center gap-3 py-12">
        <div className="relative flex flex-col items-start gap-3">
          <div className="flex items-center gap-3">
            <KeyboardButton label="#" />
            <p>KEYBOARD</p>
          </div>

          <div className="flex items-center gap-3">
            <ArcadeButton label="#" />
            <p>ARCADE CTRL</p>
          </div>
        </div>

        <div className="relative flex justify-center gap-12 py-6 flex-wrap">
          <div className="flex gap-3 items-center">
            <div className="flex flex-col items-center gap-3">
              <KeyboardButton label="B" />
              <ArcadeButton label="A" />
            </div>

            <div className="flex flex-col items-center gap-3">
              <KeyboardButton label="N" />
              <ArcadeButton label="B" />
            </div>

            <div className="flex flex-col items-center gap-3">
              <KeyboardButton label="M" />
              <ArcadeButton label="C" />
            </div>

            <div className="flex flex-col items-center gap-3">
              <KeyboardButton label="G" />
              <ArcadeButton label="X" />
            </div>

            <div className="flex flex-col items-center gap-3">
              <KeyboardButton label="H" />
              <ArcadeButton label="Y" />
            </div>

            <div className="flex flex-col items-center gap-3">
              <KeyboardButton label="J" />
              <ArcadeButton label="Z" />
            </div>
          </div>

          <div className="relative">
            <div className="flex w-full justify-center mb-2">
              <KeyboardButton label="▲" />
            </div>
            <div className="flex w-full justify-center gap-14">
              <KeyboardButton label="◀︎" />
              <KeyboardButton label="▶︎" />
            </div>
            <div className="flex w-full justify-center mt-2">
              <KeyboardButton label="▼" />
            </div>

            <Icon
              icon="joystick"
              size={60}
              extendStyle="!fill-red-500 !absolute left-[63%] -translate-x-[50%] top-[37%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
