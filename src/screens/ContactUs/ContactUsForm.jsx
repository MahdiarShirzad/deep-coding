import React from "react";

const ContactUsForm = () => {
  return (
    <div>
      <div className=" flex items-center gap-12 mt-9">
        <div className=" flex flex-col">
          <label htmlFor="name">نام</label>
          <input
            className=" border-2 focus:outline-none transition-none focus:placeholder:opacity-0 px-6 py-3 mt-2 rounded-md"
            type="text"
            name=""
            id="name"
            placeholder="نام شما"
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="email">ایمیل</label>
          <input
            className=" border-2 focus:outline-none transition-none focus:placeholder:opacity-0 px-6 py-3 mt-2 rounded-md"
            type="email"
            name=""
            id="email"
            placeholder="ایمیل معتبر"
          />
        </div>
      </div>
      <div className=" flex flex-col mt-10">
        <label htmlFor="message">پیام</label>
        <textarea
          className=" border-2 focus:outline-none transition-none focus:placeholder:opacity-0 px-6 py-3 mt-2 rounded-md max-w-[700px] mb-4"
          name=""
          id="message"
          cols="30"
          rows="10"
          placeholder="متن پیام"
        ></textarea>
      </div>
      <button className=" text-white bg-[#6440FB] rounded-lg px-12 py-5 mt-4 text-sm border-2 border-[#6440FB] hover:bg-transparent hover:text-[#6440FB]">
        ارسال
      </button>
    </div>
  );
};

export default ContactUsForm;
