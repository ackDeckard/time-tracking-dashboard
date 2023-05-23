"use client";
import ProfileCard from "./components/ProfileCard";
import { useEffect, useState } from "react";
import { GeneralCard } from "./components/GeneralCard";

import { db } from "./firebase/firebase";
import { QueryDocumentSnapshot, collection, getDocs } from "firebase/firestore";

type TimeProps = {
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
  title: string;
  cardImage: string;
};

export type { TimeProps };

export default function Home() {
  const [timeFrame, setTimeFrame] = useState<string>("weekly");
  const [timedata, setTimeData] = useState<TimeProps[]>([]);

  const timeTrackingCollectionRef = collection(db, "timetracking");

  useEffect(() => {
    const getTimeTracking = async () => {
      try {
        const data = await getDocs(timeTrackingCollectionRef);
        const filteredData = data.docs.map(
          (doc: QueryDocumentSnapshot) => doc.data() as TimeProps
        );
        setTimeData(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getTimeTracking();
  }, []);

  return (
    <main className="lg:mx-auto lg:grid lg:h-screen lg:max-w-7xl lg:grid-cols-4 lg:place-content-center ">
      <div className="lg:row-span-2">
        <ProfileCard
          timeFrame={timeFrame}
          setTimeFrame={setTimeFrame}
        ></ProfileCard>
      </div>

      <GeneralCard timedata={timedata} timeFrame={timeFrame} />
    </main>
  );
}
