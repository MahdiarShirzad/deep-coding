import React, { useEffect, useRef, useState } from "react";

const CourseSectionCollapse = ({ sections }) => {
  return sections?.map((item) => {
    return <Unit item={item} key={item._id} />;
  });
};

const Unit = (props) => {
  const [rotate, setRotate] = useState(0);
  const { item } = props;
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.height = open
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
    setRotate(open ? -90 : 0);
  }, [open]);

  const onClickHandler = () => {
    setOpen(!open);
  };

  return (
    <div className=" block">
      <section className="wrapper w-full bg-gray-200  text-black px-10 py-3 rounded-md my-2   font-yekanReg text-base cursor-pointer ">
        <div
          className=" flex items-center justify-between "
          onClick={onClickHandler}
        >
          <h4 className="m-0  text-lg">{item?.title}</h4>
          <div>
            <svg
              className="w-[24px] transition-transform transform"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: `rotate(${rotate}deg)` }}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M14.9991 19L9.83911 14C9.56672 13.7429 9.34974 13.433 9.20142 13.0891C9.0531 12.7452 8.97656 12.3745 8.97656 12C8.97656 11.6255 9.0531 11.2548 9.20142 10.9109C9.34974 10.567 9.56672 10.2571 9.83911 10L14.9991 5"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
        <ul
          className="mt-4 text-sm h-0 overflow-hidden transition-[0.5s] text-gray-700 ease-in"
          ref={contentRef}
        >
          {item?.lessons.map((lesson, index) => (
            <li key={lesson._id} className="my-2 flex justify-between">
              <span
                className="textlg
              "
              >
                {index + 1}. {lesson.title}
              </span>

              <span className="text-md text-gray-500">
                {lesson.duration} دقیقه
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CourseSectionCollapse;
