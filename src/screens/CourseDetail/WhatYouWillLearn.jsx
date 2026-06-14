// import parse from "html-react-parser";

const WhatYouWillLearn = ({ selectedCourse }) => {
  const willLearn = selectedCourse?.willLearn;

  return (
    <div className=" mt-10 font-iransans">
      <div className=" container max-w-[1320px] mx-auto">
        <div className=" border w-3/5 px-5 py-7 max-md:w-full max-md:mx-4">
          <p className=" text-xl font-semibold">چیزی که یاد خواهید گرفت</p>
          <ul className=" mt-4 flex flex-col gap-2 mr-3  text-sm text-gray-800 will-Learn">
            {willLearn?.map((learn, index) => (
              <li key={index} className="flex">
                <p className="mx-2">⚫️</p>
                <p className="text-lg">{learn}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatYouWillLearn;
