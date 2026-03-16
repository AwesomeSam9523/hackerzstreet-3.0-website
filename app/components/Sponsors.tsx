import Sponsor4 from "@/public/sponsors/sponsor4.svg";
import Image from "next/image";

function Sponsors() {
  const sponsors = [Sponsor4];
  return (
    <div
      className={`flex w-full flex-row flex-wrap items-center justify-around gap-4 px-8 py-4`}
    >
      {sponsors.map((sponsor, index) => (
        <Image
          key={index}
          src={sponsor}
          alt={`Sponsor ${index}`}
          className={"h-10 w-auto md:h-16"}
        />
      ))}
    </div>
  );
}

export default Sponsors;
