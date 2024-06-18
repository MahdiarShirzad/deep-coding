import { Link } from "react-router-dom";

export const UserCoursesCard = ({ course }) => {
  if (course) {
    var { id } = course;
  }
  return (
    <div className=" flex justify-between items-center bg-gray-50 my-3 px-3 py-2 rounded-xl shadow-lg">
      <img src={course?.img} className=" w-28 h-20 rounded-xl my-3" alt="" />
      <p className=" w-1/6">{course?.name}</p>
      <p className=" w-1/6">{course?.teacher}</p>
      <div className=" w-1/6">{course?.level}</div>
      <div className=" flex w-1/6 items-center gap-1">
        <span className=" font-bold">{course?.time}</span>
        <span>ساعت</span>
      </div>

      <Link
        to={`/user-panel/student-course-resume/${id}`}
        className=" bg-sky-100 p-2 rounded-3xl cursor-pointer"
      >
        <svg
          className=" w-9"
          fill="#190d73"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 52 52"
          xml:space="preserve"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path d="M26,0C11.663,0,0,11.663,0,26s11.663,26,26,26s26-11.663,26-26S40.337,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"></path>{" "}
              <path d="M32,36.783V15.438L14.043,25.806L32,36.783z M30,33.217l-12.043-7.362L30,18.902V33.217z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
      </Link>
    </div>
  );
};
