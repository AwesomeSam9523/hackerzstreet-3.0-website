import Image from "next/image";
import HS_Footer from "@/public/hs_footer.svg";
import CS_Logo from "@/public/ieee_cs.svg";
import { CiGlobe } from "react-icons/ci";
import { Poppins } from "next/font/google";
import { FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  return (
    <footer
      id={"contact"}
      className="bg-gradient-to-t from-[#FFA300] to-black px-5 py-8 text-white md:px-10"
    >
      <div className="flex w-full flex-wrap items-center gap-8 md:grid md:grid-cols-2 lg:gap-0">
        <div className="flex w-full flex-wrap items-center justify-evenly md:gap-8 md:px-8">
          <Image
            src={HS_Footer}
            alt={"HackerzStreet 4.0"}
            className={"h-11 w-auto md:h-auto"}
          />
          <span className="text-5xl font-light md:text-8xl md:font-bold">
            /
          </span>
          <Image
            src={CS_Logo}
            alt="IEEE Computer Society MUJ"
            className={"h-11 w-auto md:h-auto"}
          />
        </div>
        <div className="flex w-full flex-row justify-evenly md:grid md:grid-cols-2">
          <div
            className={`flex flex-col gap-4 border-white pr-4 text-center md:border-r-2 md:px-8 lg:border-l-2 ${poppins.className} justify-evenly py-3`}
          >
            <div>
              <p className="text-xs font-bold md:text-2xl">Samaksh Gupta</p>
              <p className={"text-tiny md:text-base"}>+91 9871340076</p>
              <p className={"text-tiny md:text-base"}>Chairperson</p>
            </div>
            <div>
              <p className="text-xs font-bold md:text-2xl">Tamanna Yadav</p>
              <p className={"text-tiny md:text-base"}>+91 8860514740</p>
              <p className={"text-tiny md:text-base"}>Vice-Chairperson</p>
            </div>
          </div>
          <div
            className={
              "mt-4 block h-[12rem] w-[0.25rem] border-r-[2px] border-white md:hidden"
            }
          ></div>
          <div
            className={`flex flex-col items-center justify-center py-6 pl-4 text-right md:p-16 lg:items-start ${poppins.className} `}
          >
            <div className="flex items-center space-x-2">
              <CiGlobe />
              <a
                href="https://cs.ieeemuj.com/"
                className="text-xs underline md:text-base"
                target="_blank"
                rel="noopener"
              >
                https://cs.ieeemuj.com/
              </a>
            </div>

            <div
              className={`my-4 flex items-center justify-center space-x-2 text-2xl md:space-x-4 md:*:w-auto`}
            >
              <a
                href="https://www.instagram.com/ieee_csmuj/"
                aria-label="Instagram"
              >
                <div className="">
                  <FaInstagram className={"h-4"} />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/ieee-cs-muj"
                aria-label="LinkedIn"
              >
                <div className="">
                  <FaLinkedin className={"h-4"} />
                </div>
              </a>
              <a href="https://medium.com/@ieeecs" aria-label="Medium">
                <div className="">
                  <FaMedium className={"h-4"} />
                </div>
              </a>
              <a href="https://x.com/ieee_csmuj" aria-label="X">
                <div className="">
                  <FaXTwitter className={"h-4"} />
                </div>
              </a>
            </div>
            <p className="text-tiny text-center md:text-sm">
              Made with <span className="text-yellow-400">&#x1F49B;</span> by
              IEEE CS MUJ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
