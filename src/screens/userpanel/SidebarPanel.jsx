import { NavLink } from "react-router-dom";
import { useLogout } from "../Login/useLogout";
import { toast } from "react-toastify";

const SidebarPanel = () => {
  const { logout, isError } = useLogout();

  const handleLogout = () => {
    logout();
    if (!isError) {
      toast.success("با موفقیت خارج شدید!", {
        position: "top-center",
      });
    } else {
      toast.error("خطا در خروج !", {
        position: "top-center",
      });
    }
  };

  const activeClass = ({ isActive }) =>
    isActive
      ? "bg-slate-800 text-violet-400 px-3 py-1 flex gap-1 rounded-md border-l-2 border-violet-500"
      : "px-3 py-1 rounded-md flex gap-1 text-slate-300 hover:text-white transition-all";

  return (
    <ul className="w-[295px] max-md:w-full max-md:flex-row bg-slate-900 text-white px-5 py-3 flex flex-col max-sm:gap-2 gap-5 rounded-md border border-slate-800">
      <NavLink to="/user-panel/dashboard" className={activeClass}>
        <li className="flex gap-1 px-3 max-sm:px-1 max-sm:py-1 items-center max-sm:text-xs w-full">
          <svg
            className="w-[25px] max-sm:hidden"
            viewBox="0 -0.5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <p>داشبورد</p>
        </li>
      </NavLink>

      <NavLink to="/user-panel/my-courses" className={activeClass}>
        <li className="flex gap-1 px-3 max-sm:px-1 max-sm:py-1 items-center max-sm:text-xs w-full">
          <svg
            className="w-[20px] max-sm:hidden"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 19V5C4 3.89543 4.89543 3 6 3H19.4C19.7314 3 20 3.26863 20 3.6V16.4C20 16.7314 19.7314 17 19.4 17H6C4.89543 17 4 17.8954 4 19Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 19C4 20.1046 4.89543 21 6 21H20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 7H16M8 11H14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>دوره‌های من</p>
        </li>
      </NavLink>

      <NavLink to="/user-panel/favorites" className={activeClass}>
        <li className="flex gap-1 px-3 max-sm:px-1 max-sm:py-1 items-center max-sm:text-xs w-full">
          <svg
            className="w-[20px] max-sm:hidden"
            viewBox="0 0 294.843 294.843"
            fill="currentColor"
          >
            <path d="M199.628,175.487c-0.632-1.977,0.067-4.131,1.741-5.358l37.422-27.455c5.958-4.371,8.333-11.736,6.049-18.763 c-2.283-7.028-8.533-11.591-15.922-11.625l-46.413-0.215c-2.076-0.01-3.908-1.34-4.558-3.311l-14.547-44.076 c-2.316-7.017-8.586-11.55-15.975-11.551h0c-7.389,0-13.66,4.534-15.976,11.55l-6.557,19.859c-1.039,3.146,0.669,6.54,3.816,7.578 c3.147,1.041,6.539-0.669,7.579-3.816l6.557-19.859c1.014-3.073,3.762-3.312,4.581-3.312c0.818,0,3.566,0.239,4.58,3.312 l14.547,44.077c2.27,6.875,8.658,11.516,15.897,11.55l46.413,0.215c3.236,0.015,4.313,2.555,4.565,3.333 c0.253,0.778,0.875,3.465-1.734,5.379l-37.423,27.455c-5.837,4.283-8.277,11.793-6.072,18.689l14.143,44.222 c0.986,3.083-1.097,4.892-1.759,5.372c-0.662,0.481-3.025,1.904-5.652,0.013l-37.677-27.114c-5.878-4.229-13.776-4.229-19.654,0 l-37.684,27.119c-2.627,1.89-4.991,0.468-5.652-0.012c-0.662-0.481-2.745-2.289-1.76-5.371l14.139-44.229 c2.205-6.895-0.236-14.405-6.072-18.688l-37.421-27.455c-2.609-1.914-1.987-4.602-1.734-5.379c0.253-0.778,1.33-3.318,4.565-3.333 l46.416-0.215c3.313-0.016,5.987-2.714,5.972-6.028c-0.016-3.304-2.699-5.972-6-5.972c-0.009,0-0.019,0-0.028,0l-46.416,0.215 c-7.389,0.034-13.639,4.597-15.922,11.625c-2.283,7.028,0.091,14.393,6.048,18.764l37.421,27.455 c1.673,1.228,2.373,3.381,1.741,5.358l-14.138,44.229c-2.25,7.038,0.159,14.392,6.137,18.734c3,2.179,6.442,3.269,9.886,3.269 c3.419,0,6.84-1.075,9.829-3.225l37.683-27.119c1.685-1.213,3.95-1.213,5.635,0l37.677,27.114c5.998,4.316,13.736,4.3,19.715-0.044 c5.979-4.343,8.387-11.697,6.136-18.736L199.628,175.487z"></path>
            <path d="M147.421,0C66.133,0,0,66.133,0,147.421s66.133,147.421,147.421,147.421c3.313,0,6-2.687,6-6s-2.687-6-6-6 C72.75,282.843,12,222.093,12,147.421S72.75,12,147.421,12s135.421,60.75,135.421,135.421c0,46.48-23.42,89.182-62.65,114.228 c-2.793,1.783-3.612,5.493-1.829,8.286c1.783,2.793,5.492,3.612,8.286,1.829c42.7-27.262,68.193-73.745,68.193-124.342 C294.843,66.133,228.71,0,147.421,0z"></path>
          </svg>
          <p>مورد علاقه‌ها</p>
        </li>
      </NavLink>

      <NavLink to="/user-panel/edit-profile" className={activeClass}>
        <li className="flex gap-1 px-3 max-sm:px-1 max-sm:py-1 items-center max-sm:text-xs w-full">
          <svg
            className="w-[20px] max-sm:hidden"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 6L8 12V16H12L18 10M14 6L17 3L21 7L18 10M14 6L18 10M10 4L4 4L4 20L20 20V14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <p>ویرایش پروفایل</p>
        </li>
      </NavLink>

      <button
        onClick={handleLogout}
        className="px-3 py-2 flex mt-auto max-md:mt-0 gap-2 items-center text-red-500 hover:text-red-400 font-medium max-sm:text-xs transition-colors"
      >
        <svg
          className="w-[25px] max-sm:w-[20px]"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="9"
            y1="12"
            x2="19"
            y2="12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></line>
          <path
            d="M16,8 L18.5858,10.5858 C19.3668,11.3668 19.3668,12.6332 18.5858,13.4142 L16,16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M16,4 L6,4 C4.89543,4 4,4.89543 4,6 L4,18 C4,19.1046 4.89543,20 6,20 L16,20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
        </svg>
        <p>خروج از حساب</p>
      </button>
    </ul>
  );
};

export default SidebarPanel;
