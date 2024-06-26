const calculateLoginDays = (userSignUpDate) => {
  if (!userSignUpDate) return 0; // Handle cases where userSignUpDate is missing

  const today = new Date();
  const signUpDate = new Date(userSignUpDate);

  // Get the difference in milliseconds
  const timeDifference = today.getTime() - signUpDate.getTime();

  // Convert milliseconds to days and round down to get whole days
  const daysLoggedIn = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysLoggedIn;
};

const UserStats = ({ user }) => {
  const userSignUpDate = user?.created_at;
  const daysLoggedIn = calculateLoginDays(userSignUpDate);

  return (
    <div className=" w-full flex gap-8 max-md:gap-1 max-md:px-2 max-sm:text-xs max-sm:mt-4">
      <div className=" flex  justify-between w-full gap-12 max-md:gap-1">
        <div className=" w-1/3 h-[140px] max-md:h-[100px] bg-blue-950  py-6 gap-3 rounded-lg flex justify-between px-20 items-center">
          <svg
            className="w-[60px] max-sm:hidden"
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
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H13V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V18H5C3.34315 18 2 16.6569 2 15V6ZM5 5C4.44772 5 4 5.44772 4 6V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V6C20 5.44772 19.5523 5 19 5H5Z"
                fill="#fff"
              ></path>{" "}
            </g>
          </svg>
          <div className="  text-lg text-[#fff] max-sm:flex gap-2 items-center justify-center">
            <p className=" font-bold text-2xl text-center">
              {user?.user_metadata.courses.length}
            </p>
            <p className="text-center mt-1">دوره</p>
          </div>
        </div>
        <div className=" w-1/3 h-[140px] max-md:h-[100px] bg-blue-950 flex rounded-lg justify-center px- items-center">
          <svg
            className=" w-[60px] max-sm:hidden"
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
                d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
              ></path>{" "}
            </g>
          </svg>
          <div className=" text-lg text-[#fff] mt-8 max-md:flex max-sm:px-2">
            <p className=" font-bold text-2xl text-center">
              {daysLoggedIn === 0 ? "1" : daysLoggedIn + 1}
            </p>
            <p className="text-center mt-1"> روز با deep-coding</p>
          </div>
        </div>
        <div className=" w-1/3 h-[140px] max-md:h-[100px] bg-blue-950 flex rounded-lg justify-center gap-3 items-center text-white ">
          <svg
            className="w-[60px] max-sm:hidden"
            fill="#fff"
            height="200px"
            width="200px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
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
                <g>
                  {" "}
                  <path d="M361.739,0H16.696C7.475,0,0,7.475,0,16.696v478.609C0,504.525,7.475,512,16.696,512h345.043 c9.22,0,16.696-7.475,16.696-16.696V16.696C378.435,7.475,370.96,0,361.739,0z M345.043,478.609H33.391V33.391h311.652V478.609z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M510.65,88.032l-33.391-77.913C474.627,3.98,468.591,0,461.913,0c-6.678,0-12.714,3.98-15.346,10.119l-33.391,77.913 c-0.89,2.078-1.35,4.316-1.35,6.577v367.304c0,27.684,22.402,50.087,50.087,50.087C489.597,512,512,489.598,512,461.913V94.609 C512,92.348,511.54,90.11,510.65,88.032z M478.609,461.913c0,9.227-7.466,16.696-16.696,16.696 c-9.227,0-16.696-7.466-16.696-16.696v-16.696h33.391V461.913z M478.609,411.826h-33.391V133.565h33.391V411.826z M478.609,100.174h-33.391v-2.138l16.696-38.957l16.696,38.957V100.174z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M228.174,66.783h-77.913c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h77.913 c9.22,0,16.696-7.475,16.696-16.696S237.394,66.783,228.174,66.783z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M294.957,133.565H83.478c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h211.478 c9.22,0,16.696-7.475,16.696-16.696S304.177,133.565,294.957,133.565z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M294.957,200.348h-77.913c-9.22,0-16.696,7.475-16.696,16.696c0,9.22,7.475,16.696,16.696,16.696h77.913 c9.22,0,16.696-7.475,16.696-16.696C311.652,207.823,304.177,200.348,294.957,200.348z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M150.261,200.348H83.478c-9.22,0-16.696,7.475-16.696,16.696c0,9.22,7.475,16.696,16.696,16.696h66.783 c9.22,0,16.696-7.475,16.696-16.696C166.957,207.823,159.481,200.348,150.261,200.348z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M294.957,267.13H83.478c-9.22,0-16.696,7.475-16.696,16.696c0,9.22,7.475,16.696,16.696,16.696h211.478 c9.22,0,16.696-7.475,16.696-16.696C311.652,274.606,304.177,267.13,294.957,267.13z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M183.652,333.913H83.478c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h100.174 c9.22,0,16.696-7.475,16.696-16.696S192.873,333.913,183.652,333.913z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M294.957,400.696H83.478c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h211.478 c9.22,0,16.696-7.475,16.696-16.696S304.177,400.696,294.957,400.696z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M294.957,333.913h-44.522c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h44.522 c9.22,0,16.696-7.475,16.696-16.696S304.177,333.913,294.957,333.913z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
          <div className=" text-lg flex gap-1">
            <p className="font-bold">5</p>
            <p>امتحان</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
