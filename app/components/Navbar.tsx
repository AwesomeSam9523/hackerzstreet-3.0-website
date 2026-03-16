"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Schedule", id: "schedule" },
  { name: "Tracks", id: "tracks" },
  { name: "About Us", id: "about" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const registerRef = useRef<HTMLDivElement | null>(null);
  const registerTextRef = useRef<HTMLSpanElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (!registerRef.current || !registerTextRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(".hover-text", { x: "-100%" });

      registerRef.current?.addEventListener("mouseenter", () => {
        if (registerTextRef.current) {
          gsap.to(registerTextRef.current, {
            opacity: 0,
            duration: 0.3,
          });
        }
        gsap.to(".hover-text", {
          x: "0%",
          duration: 0.4,
          ease: "power2.inOut",
        });
      });

      registerRef.current?.addEventListener("mouseleave", () => {
        if (registerTextRef.current) {
          gsap.to(registerTextRef.current, {
            opacity: 1,
            duration: 0.3,
          });
        }
        gsap.to(".hover-text", {
          x: "-100%",
          duration: 0.4,
          ease: "power2.inOut",
        });
      });
    }, registerRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav className="flex w-full items-center justify-between gap-6 rounded-3xl bg-transparent px-4 py-2 shadow-md md:px-8 md:py-4">
      <div className="flex items-center">
        <Image
          src="/cs_logo.svg"
          alt="cs_logo"
          width={100}
          height={40}
          className="h-12 w-auto rounded-lg md:h-20 md:p-2"
        />
      </div>

      {/* desktop links */}
      <div className="hidden items-center space-x-6 rounded-full border border-white bg-transparent px-2 py-2 lg:flex">
        {navLinks.map(({ name, id }) => (
          <div
            key={name}
            onClick={() => handleScroll(id)}
            className={`cursor-pointer rounded-full px-4 py-2 font-bold ${
              name === "Home"
                ? "bg-gray-600 text-white"
                : "text-white hover:bg-gray-700"
            } transition-all`}
          >
            {name}
          </div>
        ))}
      </div>

      {/* register button for desktop */}
      <a
        href="https://cs.ieeemuj.com/reg/hs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          ref={registerRef}
          className="relative hidden cursor-pointer overflow-hidden rounded-full border border-white px-6 py-2 text-white md:block"
        >
          <span
            ref={registerTextRef}
            className="relative z-10 font-bold tracking-tighter"
          >
            REGISTER
          </span>
          <div className="hover-text absolute inset-0 z-0 flex items-center justify-center bg-[#FFA300] font-bold tracking-tighter text-white">
            REGISTER
          </div>
        </div>
      </a>

      {/* hamburger emoji */}
      <div
        className="block cursor-pointer md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Image src="/hamburger.svg" alt="hm" width={20} height={20} />
      </div>

      {/* mobile menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-5/6 transform rounded-l-4xl bg-[#0a0a0a] px-8 pt-10 shadow-lg transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="flex justify-start"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="cursor-pointer text-5xl font-light text-white">
            &times;
          </span>
        </div>

        {/* mobile REGISTER Button */}
        <a
          href="https://cs.ieeemuj.com/reg/hs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            tabIndex={0}
            className="my-5 flex flex-col items-center gap-[0.5px] rounded-4xl border-[0.5px] border-[#6A6A6A] bg-[#232323] px-6 py-2 focus:bg-[#FFA300]"
          >
            <div className="w-full rounded-[50px] px-5 py-2 text-center text-xl font-medium text-white">
              REGISTER
            </div>
          </div>
        </a>

        {/* mObile Nav Links */}
        <div className="flex flex-col items-center gap-[0.5px] rounded-4xl border-[0.5px] border-[#6A6A6A] bg-[#232323] p-3 py-4">
          {navLinks.map(({ name, id }) => (
            <div
              key={name}
              onClick={() => handleScroll(id)}
              className={`w-full cursor-pointer rounded-4xl px-8 py-4 text-center text-3xl font-medium text-white ${
                name === "Home"
                  ? "bg-[#404041] font-bold"
                  : "transition-all hover:bg-gray-700"
              }`}
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
