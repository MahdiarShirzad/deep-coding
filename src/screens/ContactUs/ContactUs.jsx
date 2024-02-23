import React from "react";
import Map from "./Map";
import contact1 from "../../assets/images/contact-1/1.svg";
import contact2 from "../../assets/images/contact-1/2.svg";
import contact3 from "../../assets/images/contact-1/3.svg";
import ContactUsForm from "./ContactUsForm";
import Collapse from "../../components/Collapse/Collapse";

const ContactUs = () => {
  return (
    <div className="mt-36">
      <Map />
      <div className=" mt-20 max-w-[1320px] mx-auto flex max-lg:flex-wrap-reverse font-iransans gap-16">
        <div className=" w-1/3 max-lg:w-1/2 max-lg:mx-auto">
          <p className=" text-2xl">با ما در ارتباط باشید</p>
          <p className=" mt-4 text-gray-500">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
          <div className=" mt-5 flex items-center gap-4 w-3/4 max-md:w-full text-sm">
            <div className=" p-4 rounded-full bg-sky-100 ">
              <img src={contact1} alt="" />
            </div>
            <p>میدان خزر،نرسیده به دانشگاه روزبهان،جنب دنیای آرزو</p>
          </div>{" "}
          <div className=" mt-5 flex items-center gap-4 w-3/4 text-sm">
            <div className=" p-4 rounded-full bg-sky-100 ">
              <img src={contact2} alt="" />
            </div>
            <p>02188888888</p>
          </div>{" "}
          <div className=" mt-5 flex items-center gap-4 w-3/4 text-sm">
            <div className=" p-4 rounded-full bg-sky-100 ">
              <img src={contact3} alt="" />
            </div>
            <p>info@deep-coding.com</p>
          </div>
        </div>
        <div className=" w-2/3 max-lg:mx-auto">
          <p className=" text-2xl">ارسال پیام</p>
          <p className=" mt-4 text-sm text-gray-500">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
          <ContactUsForm />
        </div>
      </div>
      <div className="bg-[#F7F8FB] py-12 mt-10">
        <div className=" max-w-[1320px] mx-auto font-iransans ">
          <p className=" text-2xl text-center font-medium">سوالات متداول</p>
          <p className=" text-center mt-3 mb-12 text-gray-600">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
          <Collapse />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
