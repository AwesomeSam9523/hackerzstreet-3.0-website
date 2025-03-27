import Image from "next/image";
import RightSection from "./RightHome";
import { Poppins } from "next/font/google";
import HeroBackground from "@/public/backgrounds/hero.svg";
import { FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import RadialPattern from "@/public/backgrounds/radial.svg";
import RadialPatternMobile from "@/public/backgrounds/radial_mobile.svg";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

function HomePage() {
  return (
    <main className="relative mx-2 rounded-4xl bg-black px-5 py-10 pb-0 text-white md:mx-5 md:my-10 md:px-20 md:pb-10">
      <div className="absolute inset-0 overflow-hidden rounded-4xl md:block">
        <Image
          draggable="false"
          src={HeroBackground}
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>
      {/* Top Section */}
      <div className={``}>
        <h1 className="font-yapari hidden text-5xl font-bold md:block lg:text-6xl xl:text-7xl 2xl:text-8xl">
          HACKERZSTREET
        </h1>
        <h1 className="font-yapari block text-4xl font-bold md:hidden">
          HACKERZ
        </h1>
        <h1 className="font-yapari block text-4xl font-bold md:hidden">
          STREET
        </h1>
        <p
          className={`text-ieeeyellow font-yapari mt-2 text-left text-xs font-bold md:text-lg`}
        >
          A 24-HOUR FLAGSHIP HACKATHON
          <br></br>
          BY IEEE CS MUJ
        </p>
      </div>

      {/* Grid Section */}
      <div className="relative grid h-full grid-cols-2 grid-rows-1 md:grid-cols-4 md:gap-8">
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-4 pt-10">
          <span className="font-yapari text-4xl font-bold md:text-6xl">
            3.0
          </span>
          <p className={`text-tiny md:text-base ${poppins.className}`}>
            Hackerzstreet 3.0, set to ignite creativity and innovation – an
            intense 24-hour coding marathon packed with excitement and
            collaboration. This event features a single round where participants
            delve into diverse technical themes, each presenting unique
            challenges and opportunities.
          </p>

          <div className="relative mt-2 flex cursor-pointer items-center space-x-2 bg-transparent md:mt-10">
            <div className="w-40 rounded-full border-[1px] border-white/50 px-3 py-2 text-xs font-bold md:w-72 md:px-10 md:py-3 md:text-base">
              Want to know more?
              <br></br>
              <span className={"text-tiny font-light text-white/50 md:text-sm"}>
                Scroll to find out!
              </span>
            </div>
            <Image
              src={"/down.svg"}
              alt={"down arrow"}
              width={70}
              height={70}
              className={
                "absolute -right-5 h-12 w-12 md:-right-10 md:h-auto md:w-auto"
              }
            />
          </div>
          <div className="*:hover:bg-ieeeyellow flex w-56 gap-2 *:flex *:h-10 *:w-10 *:cursor-pointer *:flex-row *:items-center *:justify-center *:rounded-xl *:border-2 *:border-dashed *:border-white/50 *:p-2 *:transition-all *:duration-300 *:ease-in-out *:hover:text-black md:hidden">
            <div className="">
              <FaInstagram className={"h-4 md:h-8 md:w-6"} />
            </div>
            <div className="">
              <FaLinkedin className={"h-4 md:h-8 md:w-6"} />
            </div>
            <div className="">
              <FaMedium className={"h-4 md:h-8 md:w-6"} />
            </div>
            <div className="">
              <FaXTwitter className={"h-4 md:h-8 md:w-6"} />
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div
          className={`relative -right-[80px] -bottom-[40px] col-start-2 col-end-4 hidden h-full w-full items-end justify-end md:flex`}
        >
          <Image
            src={RadialPattern}
            alt={"radial pattern"}
            width={800}
            height={800}
            className={"w-full"}
          />
        </div>

        {/* Right Section */}
        <RightSection />
        <div
          className={`relative col-start-1 col-end-3 flex h-full w-full items-start md:hidden`}
        >
          <Image
            src={RadialPatternMobile}
            alt={"radial pattern"}
            width={800}
            height={800}
            className={"w-full"}
          />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
