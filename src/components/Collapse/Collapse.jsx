import React, { useRef, useEffect, useState } from "react";

const Collapse = () => {
  const data = [
    {
      title: "آیا برای دانشجویان تخفیف قائل می شوید؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .",
    },
    {
      title: "آیا برای دانشجویان تخفیف قائل می شوید؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .",
    },
    {
      title: "آیا برای دانشجویان تخفیف قائل می شوید؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .",
    },
    {
      title: "آیا برای دانشجویان تخفیف قائل می شوید؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .",
    },
    {
      title: "آیا برای دانشجویان تخفیف قائل می شوید؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .",
    },
    {
      title: "آیا برای دانشجویان تخفیف قائل می شوید؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .",
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
    <section className="wrapper bg-[#E5F0FD] max-w-[900px] mx-auto text-black px-10 py-4 rounded-3xl my-3 font-yekanReg text-base cursor-pointer ">
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
        className="mt-4 text-sm h-0 overflow-hidden transition-[0.5s] text-gray-600  ease-in"
        ref={contentRef}
      >
        {item.desc}
      </article>
    </section>
  );
};

export default Collapse;
