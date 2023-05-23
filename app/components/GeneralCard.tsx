import Image from "next/image";
import React, { useState } from "react";
import type { TimeProps } from "../page";

type GeneralProps = {
  timedata: TimeProps[];
  timeFrame: string;
};

export const GeneralCard = ({ timedata, timeFrame }: GeneralProps) => {
  const colors = [
    "bg-cardBgYellow",
    "bg-cardBgGreen",
    "bg-cardBgPurple",
    "bg-cardBgPink",
    "bg-cardBgCyan",
    "bg-cardBgOrange",
  ];

  if (!timedata || timedata.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {timedata.map((item, index) => (
        <section
          key={index + item.title}
          className={`relative z-30 mx-6 mt-6 grid h-[160px] self-center overflow-hidden rounded-b-3xl rounded-t-2xl bg-cardsBackgroundColor  lg:mb-[30px] lg:mt-0 lg:h-[245px] lg:w-[254px] `}
        >
          <div
            className={`z-30 grid h-[160px] rounded-b-[30px] rounded-t-2xl   lg:mb-[30px] lg:mt-0 lg:h-[244px]  lg:w-[253px] ${colors[index]}`}
          >
            <Image
              src={item.cardImage}
              alt=""
              width={0}
              height={0}
              className="absolute -top-[12px] right-0 mr-[13px] min-h-[78px] w-[80px] opacity-80	mix-blend-luminosity"
              unoptimized
            />

            <div className="z-50  h-[122px] self-end rounded-t-2xl bg-cardsBackgroundColor hover:cursor-pointer  hover:bg-hoverColor lg:h-[199px] lg:w-[255px]">
              <div className="mx-6 mt-6 grid grid-cols-2 items-center text-white ">
                <h4 className="text-lg">{item.title}</h4>
                <svg
                  width="21"
                  height="5"
                  xmlns="http://www.w3.org/2000/svg"
                  className="justify-self-end"
                >
                  <path
                    d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                    fill="#BBC0FF"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <div className="mx-6 grid grid-cols-2 items-baseline text-cardSubTitleColor lg:grid-cols-1">
                <div className="text-[32px] text-white lg:text-[56px] ">
                  {timeFrame === "daily" &&
                    item.timeframes.daily.current + "hrs"}
                  {timeFrame === "weekly" &&
                    item.timeframes.weekly.current + "hrs"}
                  {timeFrame === "monthly" &&
                    item.timeframes.monthly.current + "hrs"}
                </div>
                <div className="justify-self-end text-[15px] lg:justify-self-auto">
                  Last Week -{" "}
                  {timeFrame === "daily" &&
                    item.timeframes.daily.previous + "hrs"}
                  {timeFrame === "weekly" &&
                    item.timeframes.weekly.previous + "hrs"}
                  {timeFrame === "monthly" &&
                    item.timeframes.monthly.previous + "hrs"}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};
