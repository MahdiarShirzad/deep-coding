const WhatYouWillLearn = ({ selectedCourse }) => {
  const willLearn = selectedCourse?.willLearn;

  return (
    <div className="mt-16 font-iransans">
      <div className="container max-w-[1320px] mx-auto">
        <div className="border w-3/5 px-6 py-8 max-md:w-full max-md:mx-4 rounded-xl bg-white">
          <p className="text-2xl font-bold text-gray-900">
            چیزی که یاد خواهید گرفت
          </p>

          <div className="relative mt-6">
            <div className="absolute right-2 top-0 h-full w-[2px] bg-gray-200"></div>

            <ul className="flex flex-col gap-4 pr-6">
              {willLearn?.map((learn, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 group transition-all duration-200"
                >
                  <span className="mt-2 w-3 h-3 rounded-full bg-[#4f46e5] group-hover:scale-125 transition"></span>

                  <p className="text-[17px] text-gray-700 leading-7 group-hover:text-black transition">
                    {learn}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouWillLearn;
