import React from "react";
import Button from "../../components/common/Button/Button";

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
      <Button>ارسال</Button>
    </div>
  );
};

export default ContactUsForm;
