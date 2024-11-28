import parse from "html-react-parser";

const WhatYouWillLearn = ({ selectedCourse }) => {
  return (
    <div className=" mt-10 font-iransans">
      <div className=" container max-w-[1320px] mx-auto">
        <div className=" border w-3/5 px-5 py-7 max-md:w-full max-md:mx-4">
          <p className=" text-xl font-semibold">چیزی که یاد خواهید گرفت</p>
          <ul className=" mt-4 flex flex-col gap-2 mr-3  text-sm text-gray-800 will-Learn">
            {parse(selectedCourse?.willLearn)}
            {/* <li>
              16 پروژه توسعه وب برای نمونه کار خود بسازید، آماده درخواست برای
              مشاغل توسعه دهنده جوان.
            </li>
            <li>
              پس از دوره شما قادر خواهید بود هر وب سایتی را که می خواهید بسازید.
            </li>
            <li>
              برای راه اندازی یا کسب و کار خود وب سایت ها و برنامه های وب کامل
              بسازید.
            </li>
            <li>توسعه باطن اصلی با Node</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatYouWillLearn;
