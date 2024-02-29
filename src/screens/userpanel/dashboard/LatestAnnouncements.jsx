import React from "react";
import AnnouncemntsCarousel from "./AnnouncemntsCarousel";

const LatestAnnouncements = () => {
  return (
    <div className=" mt-10 max-w-[600px]">
      <p className=" text-2xl font-bold">جدید ترین اطلاعیه ها</p>
      <div>
        <AnnouncemntsCarousel />
      </div>
    </div>
  );
};

export default LatestAnnouncements;
