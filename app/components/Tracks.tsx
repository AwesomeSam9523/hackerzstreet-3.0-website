"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import "@/app/styles/tracks.css";
import Image from "next/image";

import HealthcareIcon from "@/public/trackIcons/healthcare.svg";
import FintechIcon from "@/public/trackIcons/fintech.svg";
import EdtechIcon from "@/public/trackIcons/edtech.svg";
import AgricultureIcon from "@/public/trackIcons/blockchain.svg";
import EnviromentIcon from "@/public/trackIcons/environmental.png";
import DisasterManagement from "@/public/trackIcons/networking.svg";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

type TrackItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const TrackItem: React.FC<TrackItemProps> = ({ icon, title, description }) => {
  const [trackActive, setTrackActive] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border-2 border-dashed border-white/50 transition-all duration-300 ease-in-out hover:bg-[#201a12] hover:backdrop-blur-3xl ${trackActive ? "bg-[#201a12] backdrop-blur-3xl" : ""}`}
      onClick={() => setTrackActive(!trackActive)}
    >
      <div className="relative flex h-72 w-full items-center justify-center rounded-3xl">
        <div
          className={`transform transition-all duration-300 ease-in-out group-hover:-translate-y-16 group-hover:scale-75 ${trackActive ? "-translate-y-16 scale-75" : ""}`}
        >
          {icon}
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 w-full px-4 py-4 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 md:px-4 md:py-6 ${trackActive ? "-translate-y-8 opacity-100" : "translate-y-16 opacity-0"}`}
      >
        <p
          className={`lg:text-md text-center text-sm font-medium md:text-lg ${poppins.className}`}
          style={{ lineHeight: "1.4rem" }}
        >
          <span className="text-ieeeyellow">{title}</span>
          <span className="text-white"> {description}</span>
        </p>
      </div>
    </div>
  );
};

function Tracks() {
  const tracks = [
    {
      title: "FinTech",
      description:
        "Innovate in financial services with secure, scalable, and user-friendly solutions.",
      icon: FintechIcon,
    },
    {
      title: "Healthcare",
      description:
        "Develop solutions to enhance patient care, diagnostics, and medical accessibility.",
      icon: HealthcareIcon,
    },
    {
      title: "EdTech",
      description:
        "Transform learning experiences through technology-driven educational advancements.",
      icon: EdtechIcon,
    },
    {
      title: "Agriculture",
      description:
        "",
      icon: AgricultureIcon,
    },
    {
      title: "Environment & Sustainibility",
      description:
        "Build tech-driven solutions to tackle sustainability and climate challenges.",
      icon: EnviromentIcon,
    },
    {
      title: "Networking and Communication",
      description:
        "Enhance global connectivity through efficient and seamless communication systems.",
      icon: DisasterManagement,
    },
  ];

  return (
    <main
      id="tracks"
      className="bg mx-2 my-10 overflow-x-hidden rounded-4xl bg-black px-5 py-15 pb-10 text-white md:mx-5 md:my-10 md:px-20 md:pb-10"
    >
      <div className="z-10 flex flex-col items-center">
        <h1 className="font-yapari text-5xl font-semibold md:text-7xl">
          TRACKS
        </h1>
        <p
          className={`mt-1 text-lg font-medium md:text-2xl ${poppins.className} text-center leading-6`}
        >
          Choose any one from the following themes for your project
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track, index) => (
          <TrackItem
            key={index}
            icon={
              <Image
                width={100}
                height={100}
                src={track.icon}
                alt={track.title}
              />
            }
            title={track.title}
            description={track.description}
          />
        ))}
      </div>
    </main>
  );
}

export default Tracks;
