import React, { useRef, useEffect, useState } from "react";

const Collapse = () => {
  const data = [
    {
      title: "آیا برای دانشجویان تخفیف قائل می شوید؟",
      desc: "بله، ما برای دانشجویان تخفیف‌های ویژه‌ای داریم. اگر شما دانشجوی تمام‌وقت هستید، می‌توانید از تخفیف‌های مخصوص دوره‌های آنلاین ما بهره‌مند شوید. برای اطلاعات بیشتر، لطفاً به صفحه تخفیف‌های دانشجویی مراجعه کنید یا با پشتیبانی تماس بگیرید.",
    },
    {
      title: "آیا پس از خرید دوره می توانم آن را بازپرداخت کنم؟",
      desc: "بله، اگر از دوره‌ای که خریداری کرده‌اید راضی نیستید، می‌توانید تا 30 روز از تاریخ خرید آن را بازپرداخت کنید. برای درخواست بازپرداخت، باید با پشتیبانی ما تماس بگیرید و دلایل عدم رضایت خود را شرح دهید.",
    },
    {
      title: "آیا می‌توانم پس از شروع دوره، آن را به تعویق بیندازم؟",
      desc: "متاسفانه، پس از شروع دوره، امکان تعویق یا تاخیر در دسترسی به محتوای دوره وجود ندارد. با این حال، شما می‌توانید دوره را در هر زمانی آغاز کرده و در زمان دلخواه خود به صورت آنلاین ادامه دهید. دوره‌ها به صورت مادام‌العمر در دسترس شما خواهند بود.",
    },
    {
      title: "چگونه می‌توانم به گواهینامه پایان دوره دست پیدا کنم؟",
      desc: "پس از اتمام تمامی بخش‌های دوره و شرکت در آزمون‌های مربوطه (در صورت وجود)، شما می‌توانید گواهینامه پایان دوره را دریافت کنید. این گواهینامه به صورت دیجیتالی و در قالب یک فایل PDF برای شما ارسال می‌شود.",
    },
    {
      title: "آیا دوره‌ها به زبان فارسی ارائه می‌شوند؟",
      desc: "بله، تمامی دوره‌های ما به زبان فارسی ارائه می‌شوند و تمام ویدیوها، مطالب، و آزمون‌ها به فارسی آماده شده‌اند. ما به راحتی دسترسی به آموزش‌های با کیفیت را برای شما فراهم کرده‌ایم.",
    },
    {
      title: "آیا امکان ارتباط مستقیم با مدرسین وجود دارد؟",
      desc: "بله، شما می‌توانید از طریق بخش پرسش و پاسخ هر دوره با مدرسین ارتباط برقرار کنید. علاوه بر این، در برخی از دوره‌ها جلسات آنلاین و کلاس‌های پرسش و پاسخ به صورت زنده برگزار می‌شود تا شما بتوانید سوالات خود را مستقیماً از مدرسین بپرسید.",
    },
  ];

  return (
    data &&
    data.map((item, idx) => {
      return <Unit item={item} key={idx} />;
    })
  );
};

const Unit = (props) => {
  const { item } = props;
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.height = open
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [open]);

  const onClickHandler = () => {
    setOpen(!open);
  };

  return (
    <section className="wrapper max-lg:mx-20 bg-[#E5F0FD] max-w-[900px] mx-auto text-black px-10 py-4 rounded-3xl my-3 font-yekanReg text-base cursor-pointer ">
      <div className=" flex items-center gap-4">
        <div>
          {!open ? (
            <svg
              className=" w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6 12H18M12 6V18"
                  stroke="#5155c8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          ) : (
            <svg
              className=" w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6 12L18 12"
                  stroke="#5155c8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          )}
        </div>
        <h4 className="m-0 " onClick={onClickHandler}>
          {item.title}
        </h4>
      </div>
      <article
        className="mt-4 text-sm h-0 overflow-hidden transition-[0.5s] text-gray-600 leading-9 px-6  ease-in"
        ref={contentRef}
      >
        {item.desc}
      </article>
    </section>
  );
};

export default Collapse;
