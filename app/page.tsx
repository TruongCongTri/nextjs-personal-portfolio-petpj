import Hero from "@/components/hero/Hero";
import NavBar from "@/components/layouts/NavBar/NavBar";
import Productivity from "@/components/productivity/Productivity";

export default function Home() {
  return (
    <div>
      <div className="relative z-50">
        <div className="absolute">
          <NavBar />
        </div>
      </div>
      <div>
        <div className="overflow-hidden">
          <div className="relative">
            <img
              className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] image "
              width={4377}
              src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
              alt=""
            />  
          </div>
          <div className="Hero-section px-3">
            <Hero />
          </div>
          <div className="px-4 pt-8 overflow-hidden" id="productivity">
            <Productivity />
          </div>
        </div>
      </div>
    </div>
  );
}
