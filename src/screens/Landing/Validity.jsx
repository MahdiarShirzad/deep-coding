import React from "react";
import ValidityCarousel from "./ValidityCarousel";

import client1 from "../../assets/images/clients/1.svg";
import client2 from "../../assets/images/clients/2.svg";
import client3 from "../../assets/images/clients/3.svg";
import client4 from "../../assets/images/clients/4.svg";
import client5 from "../../assets/images/clients/5.svg";
import client6 from "../../assets/images/clients/6.svg";

const Validity = () => {
  return (
    <div className=" bg-[#1A064F] mt-10">
      <div className=" container max-w-[1320px] mx-auto text-white font-iransans pt-20">
        <div className=" flex items-center gap-14">
          <div className="w-1/2">
            <div>
              <p className="text-3xl font-bold">
                مردم دوست دارند با ما یاد بگیرند
              </p>
              <p className=" mt-4">
                لورم ایپسوم متن ساختگی با تولید سادگی است.
              </p>
            </div>
            <div className=" flex mt-12 gap-7">
              <div>
                <p className="text-3xl">9/10</p>
                <p className="mt-3">
                  9/10 از کاربران یادگیری بهتری را گزارش کردند نتایج.
                </p>
              </div>
              <div>
                <p className="text-3xl">85%</p>
                <p className="mt-3">
                  85 درصد از دانش آموزان دوره خود را تا پایان می بینند
                </p>
              </div>
            </div>
          </div>
          <div>
            <ValidityCarousel />
          </div>
        </div>
        <div className=" mt-20">
          <h6 className=" text-center text-xl mb-8">
            مورد اعتماد بهترین های جهان
          </h6>
          <div className=" flex items-center justify-between px-10">
            <img src={client1} alt="" />
            <img src={client2} alt="" />
            <img src={client3} alt="" />
            <img src={client4} alt="" />
            <img src={client5} alt="" />
            <img src={client6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Validity;
