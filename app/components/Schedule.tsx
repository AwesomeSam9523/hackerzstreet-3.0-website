import React from "react";
import { Poppins } from "next/font/google";
import ArrowRight from "@/public/arrows/arrow_right.svg";
import ArrowLeft from "@/public/arrows/arrow_left.svg";
import ArrowDown from "@/public/arrows/arrow_down.svg";
import ArrowTopLeft from "@/public/arrows/arrow_top_left.svg";
import ScheduleBox from "@/app/components/ScheduleBox";
import Image from "next/image";

const LeftArrow = () => {
  return (
    <Image
      src={ArrowLeft}
      draggable={false}
      alt={"left_arrow"}
      className={`w-24`}
    />
  );
};

const RightArrow = () => {
  return (
    <Image
      src={ArrowRight}
      draggable={false}
      alt={"right_arrow"}
      className={`w-24`}
    />
  );
};

const DownArrow = () => {
  return (
    <Image
      src={ArrowDown}
      alt={"down_arrow"}
      className={`w-10`}
      draggable={false}
    />
  );
};

const LeftDownArrow = () => {
  return (
    <Image
      src={ArrowTopLeft}
      alt={"right_arrow"}
      className={`relative mr-10 w-24 -translate-y-2/6 transform`}
      draggable={false}
    />
  );
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

const schedule = [
  {
    time: "03:00 PM",
    text: "Participants report to the venue given and get themselves checked-in.",
  },
  {
    time: "04:00 PM",
    text: "Problem statements are released at the website and the hackathon begins.",
  },
  {
    time: "12:00 AM",
    text: "Mentorship round 1 begins.",
  },
  {
    time: "3:00 AM",
    text: "Mentorship round 2 begins.",
  },
  {
    time: "5:00 AM",
    text: "Submission link is released to all the teams.",
  },
  {
    time: "6:00 AM",
    text: "Round 1 officially ends and the submission link is closed.",
  },
  {
    time: "10:00 AM",
    text: "Round 1 results are announced.",
  },
];

const schedule2 = [
  {
    time: "11:00 AM",
    text: "Participants report to the venue given.",
  },
  {
    time: "12:00 PM",
    text: "Round 2 starts.",
  },
  {
    time: "5:00 PM",
    text: "Round 2 ends.",
  },
];

function Schedule() {
  return (
    <section id="schedule" className={"px-2 pb-10 md:px-10 md:pb-0"}>
      <h1
        className={`font-yapari pt-10 text-center text-3xl font-bold tracking-tighter text-white md:pt-20 md:text-7xl`}
      >
        SCHEDULE
      </h1>
      <h2
        className={`text-ieeeyellow mb-12 w-full text-center text-sm font-bold md:text-xl ${poppins.className} font-extrabold`}
      >
        Elevate your skills and collaborate with fellow coders!
      </h2>

      <div
        className={`hidden flex-col gap-12 rounded-4xl px-10 py-10 outline-2 outline-white outline-dashed *:flex-grow *:items-center *:gap-4 xl:flex`}
      >
        <label
          className={
            "text-ieeeyellow font-yapari -mb-5 text-center text-4xl font-bold underline"
          }
        >
          Round 1
        </label>

        <div className={"flex flex-row"}>
          <div className={"*:font-yapari flex flex-col *:font-bold"}>
            <label className={"text-ieeeyellow text-4xl"}>21</label>
            <label className={"text-xl text-white"}>MARCH:</label>
          </div>
          <ScheduleBox time={schedule[1].time} text={schedule[1].text} />
          <RightArrow />
          <ScheduleBox time={schedule[2].time} text={schedule[2].text} />
          <RightArrow />
          <ScheduleBox time={schedule[3].time} text={schedule[3].text} />
        </div>

        <div className={"flex flex-row-reverse"}>
          <LeftDownArrow />

          <ScheduleBox time={schedule[4].time} text={schedule[4].text} />
          <LeftArrow />
          <ScheduleBox time={schedule[5].time} text={schedule[5].text} />
          <LeftArrow />
          <ScheduleBox time={schedule[6].time} text={schedule[6].text} />
        </div>

        <label
          className={
            "text-ieeeyellow font-yapari mt-5 -mb-5 text-center text-4xl font-bold underline"
          }
        >
          Round 2
        </label>

        <div className={"flex flex-row"}>
          <div className={"*:font-yapari flex flex-col *:font-bold"}>
            <label className={"text-ieeeyellow text-4xl"}>22</label>
            <label className={"text-xl text-white"}>MARCH:</label>
          </div>
          <ScheduleBox time={schedule2[0].time} text={schedule2[0].text} />
          <RightArrow />
          <ScheduleBox time={schedule2[1].time} text={schedule2[1].text} />
          <RightArrow />
          <ScheduleBox time={schedule2[2].time} text={schedule2[2].text} />
        </div>
      </div>

      <div
        className={`flex flex-col gap-12 rounded-4xl px-2 py-10 outline-2 outline-white outline-dashed *:flex-grow *:items-center *:gap-4 xl:hidden`}
      >
        <label
          className={
            "text-ieeeyellow font-yapari -mb-5 text-center text-xl font-bold underline"
          }
        >
          Round 1
        </label>

        <div className={"flex flex-col"}>
          <div
            className={
              "*:font-yapari flex flex-row gap-2 *:text-xl *:font-bold"
            }
          >
            <label className={"text-ieeeyellow"}>21</label>
            <label className={"text-xl text-white"}>MARCH</label>
          </div>
          <ScheduleBox time={schedule[1].time} text={schedule[1].text} />
          <DownArrow />
          <ScheduleBox time={schedule[2].time} text={schedule[2].text} />
          <DownArrow />
          <ScheduleBox time={schedule[3].time} text={schedule[3].text} />
          <DownArrow />
          <div
            className={
              "*:font-yapari flex flex-row gap-2 *:text-xl *:font-bold"
            }
          ></div>
          <ScheduleBox time={schedule[4].time} text={schedule[4].text} />
          <DownArrow />
          <ScheduleBox time={schedule[5].time} text={schedule[5].text} />
          <DownArrow />
          <ScheduleBox time={schedule[6].time} text={schedule[6].text} />
        </div>

        <label
          className={
            "text-ieeeyellow font-yapari mt-5 -mb-5 text-center text-xl font-bold underline"
          }
        >
          Round 2
        </label>

        <div className={"flex flex-col"}>
          <div
            className={
              "*:font-yapari flex flex-row gap-2 *:text-xl *:font-bold"
            }
          >
            <label className={"text-ieeeyellow"}>22</label>
            <label className={"text-xl text-white"}>MARCH</label>
          </div>
          <ScheduleBox time={schedule2[0].time} text={schedule2[0].text} />
          <DownArrow />
          <ScheduleBox time={schedule2[1].time} text={schedule2[1].text} />
          <DownArrow />
          <ScheduleBox time={schedule2[2].time} text={schedule2[2].text} />
        </div>
      </div>
    </section>
  );
}

export default Schedule;
