import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import SelectTimeFrame from "./SelectTimeFrame";

type ControlPanelProps = {
  timeFrame: string;
  setTimeFrame: Dispatch<SetStateAction<string>>;
};

function ProfileCard({ timeFrame, setTimeFrame }: ControlPanelProps) {
  return (
    <section className="mx-6 mt-20 h-[203px] rounded-2xl bg-cardsBackgroundColor lg:mt-0 lg:h-[518px] lg:w-[255px]">
      <div className="grid h-[133px] grid-cols-[min-content_1fr] place-items-center justify-center rounded-2xl bg-profileBackgroundColor lg:h-[354px] lg:grid-flow-row lg:grid-cols-1">
        <div className="ml-[34px] grid h-[68px] w-[68px] place-items-center rounded-full bg-white lg:ml-[26px] lg:mt-6 lg:justify-self-start">
          <Image
            src="/image-jeremy.png"
            width={0}
            height={0}
            alt="user profile image"
            className="h-16 w-16 "
            unoptimized
          />
        </div>
        <div className="ml-6 lg:mb-20">
          <h5 className="text-[15px] text-cardSubTitleColor">Report for</h5>
          <h2 className="text-2xl font-light text-white lg:text-[40px] lg:leading-tight">
            Jeremy Robson
          </h2>
        </div>
      </div>

      <SelectTimeFrame timeFrame={timeFrame} setTimeFrame={setTimeFrame} />
    </section>
  );
}
export default ProfileCard;
