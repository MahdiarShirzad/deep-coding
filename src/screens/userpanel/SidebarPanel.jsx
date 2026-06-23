import { NavLink } from "react-router-dom";
import { useLogout } from "../Login/useLogout";
import { toast } from "react-toastify";

const SidebarPanel = ({ role }) => {
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
      ? "bg-slate-800 text-violet-400 px-3 py-1 flex gap-1 rounded-md border-l-2 border-violet-500 timeline-active"
      : "px-3 py-1 rounded-md flex gap-1 text-slate-300 hover:text-white transition-all";

  const DashboardIcon = () => (
    <svg
      className="w-[22px] max-sm:hidden"
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
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const CoursesIcon = () => (
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
  );

  const ProfileIcon = () => (
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
      />
    </svg>
  );

  const FavoritesIcon = () => (
    <svg
      className="w-[20px] max-sm:hidden"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21L2.89443 12.4361C1.63115 11.2325 1 9.61398 1 7.89443C1 4.36278 3.79155 1.5 7.23469 1.5C9.23119 1.5 11.0451 2.47051 12 4C12.9549 2.47051 14.7688 1.5 16.7653 1.5C20.2084 1.5 23 4.36278 23 7.89443C23 9.61398 22.3688 11.2325 21.1056 12.4361L12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const UsersIcon = () => (
    <svg
      className="w-[20px] max-sm:hidden"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );

  const CommentsIcon = () => (
    <svg
      className="w-[20px] max-sm:hidden"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2 22L7 20.6622C8.47087 21.513 10.1786 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const BlogIcon = ({ className = "" }) => (
    <svg
      className={`w-[20px] max-sm:hidden ${className}`}
      viewBox="0 0 512 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect x="293.186" y="307.184" width="131.572" height="112.986" />
        <rect x="87.243" y="308.893" width="154.448" height="17.162" />
        <rect x="87.243" y="401.298" width="154.448" height="17.162" />
        <rect x="87.243" y="355.1" width="154.448" height="17.162" />
        <path d="M416.428,0.004H95.58C42.787,0.013,0.016,42.792,0,95.577v303.685 c0.025,62.262,50.463,112.717,112.742,112.734h286.524c62.27-0.017,112.717-50.464,112.734-112.734V95.577 C511.992,42.792,469.212,0.013,416.428,0.004z M464.805,399.262c-0.008,18.15-7.308,34.424-19.198,46.34 c-11.916,11.891-28.19,19.19-46.34,19.198H112.742c-18.15-0.009-34.433-7.308-46.348-19.198 c-11.892-11.916-19.182-28.19-19.198-46.34V118.696h417.61V399.262z" />
        <path d="M88.96,267.908h34.583c19.71,0,31.642-8.581,31.642-26.548c0-10.852-6.167-18.368-12.2-20.648v-0.268 c6.034-3.352,10.592-9.519,10.592-19.432c0-14.489-9.251-24.268-29.086-24.268H88.96c-0.796,0-1.332,0.536-1.332,1.34v88.475 C87.628,267.371,88.164,267.908,88.96,267.908z M107.338,193.495c0-0.528,0.251-0.804,0.804-0.804h13.944 c7.5,0,11.925,3.888,11.925,10.584c0,6.712-4.425,10.734-11.925,10.734h-13.944c-0.553,0-0.804-0.268-0.804-0.804V193.495z M107.338,229.955c0-0.528,0.251-0.795,0.804-0.795h15c8.061,0,12.343,4.424,12.343,11.405c0,7.097-4.282,11.396-12.343,11.396h-15 c-0.553,0-0.804-0.276-0.804-0.812V229.955z" />
        <path d="M181.516,267.908h59.404c0.796,0,1.332-0.536,1.332-1.349v-14.874c0-0.813-0.536-1.341-1.332-1.341h-40.224 c-0.544,0-0.804-0.268-0.804-0.812v-71.447c0-0.804-0.528-1.34-1.341-1.34h-17.036c-0.805,0-1.332,0.536-1.332,1.34v88.475 C180.183,267.371,180.711,267.908,181.516,267.908z" />
        <path d="M292.708,269.374c15.963,0,28.558-7.366,33.251-22.115c2.011-6.301,2.539-11.396,2.539-24.938 c0-13.542-0.528-18.637-2.539-24.939c-4.693-14.739-17.288-22.114-33.251-22.114c-15.956,0-28.558,7.375-33.243,22.114 c-2.02,6.302-2.556,11.397-2.556,24.939c0,13.542,0.536,18.637,2.556,24.938C264.149,262.009,276.752,269.374,292.708,269.374z M278.361,202.746c2.011-6.301,6.847-10.055,14.346-10.055c7.508,0,12.335,3.754,14.346,10.055 c1.073,3.226,1.474,7.634,1.474,19.576c0,11.924-0.402,16.357-1.474,19.567c-2.011,6.31-6.838,10.072-14.346,10.072 c-7.5,0-12.335-3.763-14.346-10.072c-1.064-3.21-1.475-7.643-1.475-19.567C276.886,210.38,277.297,205.972,278.361,202.746z" />
        <path d="M387.961,269.374c16.081,0,28.685-8.171,33.251-22.794c1.6-4.952,2.263-12.46,2.263-20.505v-7.517 c0-0.788-0.536-1.333-1.332-1.333h-31.366c-0.813,0-1.349,0.545-1.349,1.333v12.888c0,0.796,0.536,1.332,1.349,1.332h12.326 c0.536,0,0.805,0.277,0.805,0.805c0,3.879-0.403,6.703-1.073,8.991c-1.878,6.026-7.777,9.386-14.614,9.386 c-7.91,0-12.88-3.763-14.891-10.072c-1.064-3.21-1.466-7.643-1.466-19.567c0-11.941,0.402-16.223,1.466-19.441 c2.011-6.302,6.847-10.19,14.631-10.19c7.5,0,12.05,3.218,15.678,9.385c0.269,0.67,0.939,0.939,1.886,0.67l14.338-6.033 c0.796-0.402,0.947-1.206,0.536-2.019c-4.299-10.995-15.419-19.425-32.439-19.425c-16.232,0-28.835,7.375-33.527,22.114 c-2.012,6.302-2.556,11.397-2.556,24.939c0,13.542,0.545,18.637,2.556,24.938C359.126,262.009,371.73,269.374,387.961,269.374z" />
      </g>
    </svg>
  );

  const BookIcon = ({ className = "" }) => (
    <svg
      className={`w-[20px] max-sm:hidden ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const getLinksByRole = (currentRole) => {
    switch (currentRole) {
      case "admin":
        return [
          {
            to: "/admin-panel/dashboard",
            label: "داشبورد مدیریت",
            icon: <DashboardIcon />,
            end: true,
          },
          {
            to: "/admin-panel/users",
            label: "مدیریت کاربران",
            icon: <UsersIcon />,
          },
          {
            to: "/admin-panel/comments",
            label: "مدیریت کامنت‌ها",
            icon: <CommentsIcon />,
          },
          {
            to: "/admin-panel/courses",
            label: "دوره‌ها",
            icon: <CoursesIcon />,
          },
          { to: "/admin-panel/blogs", label: "بلاگ ها", icon: <BlogIcon /> },
          { to: "/admin-panel/books", label: "کتاب ها", icon: <BookIcon /> },
        ];
      case "teacher":
        return [
          {
            to: "/teacher-panel/dashboard",
            label: "داشبورد مدرس",
            icon: <DashboardIcon />,
            end: true,
          },
          {
            to: "/teacher-panel/my-courses",
            label: "دوره‌های مدرس",
            icon: <CoursesIcon />,
          },
          {
            to: "/teacher-panel/edit-profile",
            label: "ویرایش پروفایل",
            icon: <ProfileIcon />,
          },
        ];
      case "student":
      default:
        return [
          {
            to: "/user-panel/dashboard",
            label: "داشبورد",
            icon: <DashboardIcon />,
          },
          {
            to: "/user-panel/my-courses",
            label: "دوره‌های من",
            icon: <CoursesIcon />,
          },
          {
            to: "/user-panel/favorites",
            label: "مورد علاقه‌ها",
            icon: <FavoritesIcon />,
          },
          {
            to: "/user-panel/edit-profile",
            label: "ویرایش پروفایل",
            icon: <ProfileIcon />,
          },
        ];
    }
  };

  const links = getLinksByRole(role);

  return (
    <ul className="w-[295px] max-md:w-full max-md:mb-4 max-md:flex-row bg-slate-900 text-white px-5 py-3 flex flex-col max-sm:gap-2 gap-5 rounded-md border border-slate-800">
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          className={activeClass}
          end={link.end}
        >
          <li className="flex gap-1 px-3 max-sm:px-1 max-sm:py-1 items-center max-sm:text-xs w-full">
            {link.icon}
            <p>{link.label}</p>
          </li>
        </NavLink>
      ))}

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
