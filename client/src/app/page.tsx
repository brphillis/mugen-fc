import { Mugen_HomePageBanner } from "@/components/_MugenFC/Banners/Mugen_HomePageBanner";
import MetalNavBar from "@/components/Navigation/Desktop/NavBar/_Styles/MetalNavBar";

export default function Home() {
  return (
    <>
      <Mugen_HomePageBanner />

      <MetalNavBar extendStyle="justify-center">
        <div
          className="relative cursor-pointer py-3 px-6 mx-1 max-lg:px-3 max-xl:text-sm 
            max-xs:text-sm transition-colors duration-300 hover:text-white border-b-none border-brand-primary-dark/75"
        >
          News
        </div>
      </MetalNavBar>
    </>
  );
}
