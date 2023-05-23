import React, { Dispatch, SetStateAction } from "react";

type ControlPanelProps = {
  timeFrame: string;
  setTimeFrame: Dispatch<SetStateAction<string>>;
};

function SelectTimeFrame({ timeFrame, setTimeFrame }: ControlPanelProps) {
  return (
    <section className="mt-6 grid grid-cols-3 justify-between text-lg font-normal text-white lg:ml-[26px] lg:grid-cols-1 lg:place-items-start lg:gap-[16px]">
      <button
        className={` hover:text-white 
          ${timeFrame === "daily" ? "text-white" : "text-cardSubTitleColor"} `}
        onClick={() => setTimeFrame("daily")}
      >
        Daily
      </button>
      <button
        className={` hover:text-white 
          ${timeFrame === "weekly" ? "text-white" : "text-cardSubTitleColor"}
        `}
        onClick={() => setTimeFrame("weekly")}
      >
        Weekly
      </button>
      <button
        className={`hover:text-white 
          ${timeFrame === "monthly" ? "text-white" : "text-cardSubTitleColor"} 
        `}
        onClick={() => setTimeFrame("monthly")}
      >
        Monthly
      </button>
    </section>
  );
}

export default SelectTimeFrame;
