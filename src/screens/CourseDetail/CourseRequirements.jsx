const CourseRequirements = ({ selectedCourse }) => {
  const requirements = selectedCourse?.requirements;

  return (
    <div className=" container max-w-[1320px] mx-auto font-iransans mt-16 max-xl:px-8">
      <p className=" text-2xl font-semibold">پیشنیاز های دوره</p>
      <ul className=" mt-4 flex flex-col gap-2 mr-3 text-sm text-gray-800">
        {requirements?.map((r, index) => (
          <p key={index} className="flex ">
            <li className=" mx-2 mt-2">🔵</li>
            <li className="text-lg ">{r}</li>
          </p>
        ))}
      </ul>
    </div>
  );
};

export default CourseRequirements;
