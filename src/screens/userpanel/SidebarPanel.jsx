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

  const getLinksByRole = (currentRole) => {
    switch (currentRole) {
      case "admin":
        return [
          {
            to: "/admin-panel",
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
        ];
      case "teacher":
        return [
          {
            to: "/teacher-panel",
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
