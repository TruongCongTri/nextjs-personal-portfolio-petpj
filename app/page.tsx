import Collaboration from "@/components/collaboration/Collaboration";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/layouts/footer/Footer";
import Globe from "@/components/layouts/footer/Globe";
import NavBar from "@/components/layouts/NavBar/NavBar";
import StickyNav from "@/components/layouts/NavBar/StickyNav";
import Productivity from "@/components/productivity/Productivity";
import Security from "@/components/security/Security";

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
          <StickyNav />
          <div className="px-4 pt-8 overflow-hidden" id="productivity">
            <Productivity />
          </div>
          <div className="px-4 pt-8 overflow-hidden" id="collaboration">
            <Collaboration />
          </div>
          <div className="px-4 pt-8 overflow-hidden pb-16" id="security">
            <Security />
          </div>
          <Globe />
          <div className="max-w-[1280px] mx-auto relative z-[2] px-5">
            <ul className="lg:w-9/12 text-[14px] pt-16 text-[#7d8590] space-y-1">
              <li>
                <sup id="footnote-1">1</sup> The Total Economic Impact™ Of
                GitHub Enterprise Cloud and Advanced Security, a commissioned
                study conducted by Forrester Consulting, 2022. Results are for a
                composite organization based on interviewed customers.
              </li>
              <li>
                <sup id="footnote-2">2</sup> GitHub, Octoverse 2022 The state of
                open source software.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
