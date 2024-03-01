import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import { NavLink } from "react-router-dom";

const SidebarPanel = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  const activeClass = ({ isActive }) =>
    isActive
      ? "bg-slate-500  px-3 py-1 flex gap-1 rounded-md"
      : "   px-3 py-1 rounded-md flex gap-1";
  return (
    <ul className="w-[295px] bg-slate-900 text-white px-5 py-3 flex flex-col gap-5 rounded-md">
      <NavLink to="/user-panel/dashboard" className={activeClass}>
        <li className=" flex gap-1 px-3 py-1">
          <svg
            className=" w-[25px]"
            viewBox="0 -0.5 25 25"
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
                d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          <p>داشبورد</p>
        </li>
      </NavLink>
      <NavLink to="/user-panel/course-list" className={activeClass}>
        <li className="flex gap-1 px-3 py-1">
          <svg
            className=" w-[20px]"
            viewBox="0 -4.5 31 31"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                sketch:type="MSPage"
              >
                <g
                  id="Icon-Set-Filled"
                  sketch:type="MSLayerGroup"
                  transform="translate(-206.000000, -626.000000)"
                  fill="#fff"
                >
                  <path
                    d="M235,643 L216,643 C214.896,643 214,643.896 214,645 C214,646.104 214.896,647 216,647 L235,647 C236.104,647 237,646.104 237,645 C237,643.896 236.104,643 235,643 L235,643 Z M235,635 L216,635 C214.896,635 214,635.896 214,637 C214,638.104 214.896,639 216,639 L235,639 C236.104,639 237,638.104 237,637 C237,635.896 236.104,635 235,635 L235,635 Z M216,631 L235,631 C236.104,631 237,630.104 237,629 C237,627.896 236.104,627 235,627 L216,627 C214.896,627 214,627.896 214,629 C214,630.104 214.896,631 216,631 L216,631 Z M209,642 C207.343,642 206,643.343 206,645 C206,646.657 207.343,648 209,648 C210.657,648 212,646.657 212,645 C212,643.343 210.657,642 209,642 L209,642 Z M209,634 C207.343,634 206,635.343 206,637 C206,638.657 207.343,640 209,640 C210.657,640 212,638.657 212,637 C212,635.343 210.657,634 209,634 L209,634 Z M209,626 C207.343,626 206,627.343 206,629 C206,630.657 207.343,632 209,632 C210.657,632 212,630.657 212,629 C212,627.343 210.657,626 209,626 L209,626 Z"
                    id="list"
                    sketch:type="MSShapeGroup"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
          <p>لیست دوره ها</p>
        </li>
      </NavLink>
      <NavLink to="/user-panel/exams" className={activeClass}>
        <li className=" px-3 py-2 flex gap-2">
          <svg
            className="w-[20px]"
            fill="#fff"
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
              <g>
                <g>
                  <path d="M361.739,0H16.696C7.475,0,0,7.475,0,16.696v478.609C0,504.525,7.475,512,16.696,512h345.043 c9.22,0,16.696-7.475,16.696-16.696V16.696C378.435,7.475,370.96,0,361.739,0z M345.043,478.609H33.391V33.391h311.652V478.609z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                <g>
                  <path d="M510.65,88.032l-33.391-77.913C474.627,3.98,468.591,0,461.913,0c-6.678,0-12.714,3.98-15.346,10.119l-33.391,77.913 c-0.89,2.078-1.35,4.316-1.35,6.577v367.304c0,27.684,22.402,50.087,50.087,50.087C489.597,512,512,489.598,512,461.913V94.609 C512,92.348,511.54,90.11,510.65,88.032z M478.609,461.913c0,9.227-7.466,16.696-16.696,16.696 c-9.227,0-16.696-7.466-16.696-16.696v-16.696h33.391V461.913z M478.609,411.826h-33.391V133.565h33.391V411.826z M478.609,100.174h-33.391v-2.138l16.696-38.957l16.696,38.957V100.174z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                <g>
                  <path d="M228.174,66.783h-77.913c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h77.913 c9.22,0,16.696-7.475,16.696-16.696S237.394,66.783,228.174,66.783z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                <g>
                  <path d="M294.957,133.565H83.478c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h211.478 c9.22,0,16.696-7.475,16.696-16.696S304.177,133.565,294.957,133.565z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                <g>
                  <path d="M294.957,200.348h-77.913c-9.22,0-16.696,7.475-16.696,16.696c0,9.22,7.475,16.696,16.696,16.696h77.913 c9.22,0,16.696-7.475,16.696-16.696C311.652,207.823,304.177,200.348,294.957,200.348z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                <g>
                  <path d="M150.261,200.348H83.478c-9.22,0-16.696,7.475-16.696,16.696c0,9.22,7.475,16.696,16.696,16.696h66.783 c9.22,0,16.696-7.475,16.696-16.696C166.957,207.823,159.481,200.348,150.261,200.348z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                <g>
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
          <p>امتحانات</p>
        </li>
      </NavLink>
      <NavLink to="/user-panel/favorites" className={activeClass}>
        <li className=" px-3 py-1 flex gap-2">
          <svg
            className="w-[20px]"
            fill="#fff"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 294.843 294.843"
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
                <path d="M199.628,175.487c-0.632-1.977,0.067-4.131,1.741-5.358l37.422-27.455c5.958-4.371,8.333-11.736,6.049-18.763 c-2.283-7.028-8.533-11.591-15.922-11.625l-46.413-0.215c-2.076-0.01-3.908-1.34-4.558-3.311l-14.547-44.076 c-2.316-7.017-8.586-11.55-15.975-11.551h0c-7.389,0-13.66,4.534-15.976,11.55l-6.557,19.859c-1.039,3.146,0.669,6.54,3.816,7.578 c3.147,1.041,6.539-0.669,7.579-3.816l6.557-19.859c1.014-3.073,3.762-3.312,4.581-3.312c0.818,0,3.566,0.239,4.58,3.312 l14.547,44.077c2.27,6.875,8.658,11.516,15.897,11.55l46.413,0.215c3.236,0.015,4.313,2.555,4.565,3.333 c0.253,0.778,0.875,3.465-1.734,5.379l-37.423,27.455c-5.837,4.283-8.277,11.793-6.072,18.689l14.143,44.222 c0.986,3.083-1.097,4.892-1.759,5.372c-0.662,0.481-3.025,1.904-5.652,0.013l-37.677-27.114c-5.878-4.229-13.776-4.229-19.654,0 l-37.684,27.119c-2.627,1.89-4.991,0.468-5.652-0.012c-0.662-0.481-2.745-2.289-1.76-5.371l14.139-44.229 c2.205-6.895-0.236-14.405-6.072-18.688l-37.421-27.455c-2.609-1.914-1.987-4.602-1.734-5.379c0.253-0.778,1.33-3.318,4.565-3.333 l46.416-0.215c3.313-0.016,5.987-2.714,5.972-6.028c-0.016-3.304-2.699-5.972-6-5.972c-0.009,0-0.019,0-0.028,0l-46.416,0.215 c-7.389,0.034-13.639,4.597-15.922,11.625c-2.283,7.028,0.091,14.393,6.048,18.764l37.421,27.455 c1.673,1.228,2.373,3.381,1.741,5.358l-14.138,44.229c-2.25,7.038,0.159,14.392,6.137,18.734c3,2.179,6.442,3.269,9.886,3.269 c3.419,0,6.84-1.075,9.829-3.225l37.683-27.119c1.685-1.213,3.95-1.213,5.635,0l37.677,27.114c5.998,4.316,13.736,4.3,19.715-0.044 c5.979-4.343,8.387-11.697,6.136-18.736L199.628,175.487z"></path>{" "}
                <path d="M147.421,0C66.133,0,0,66.133,0,147.421s66.133,147.421,147.421,147.421c3.313,0,6-2.687,6-6s-2.687-6-6-6 C72.75,282.843,12,222.093,12,147.421S72.75,12,147.421,12s135.421,60.75,135.421,135.421c0,46.48-23.42,89.182-62.65,114.228 c-2.793,1.783-3.612,5.493-1.829,8.286c1.783,2.793,5.492,3.612,8.286,1.829c42.7-27.262,68.193-73.745,68.193-124.342 C294.843,66.133,228.71,0,147.421,0z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
          <p>مورد علاقه ها</p>
        </li>
      </NavLink>
      <NavLink to="/user-panel/edit-profile" className={activeClass}>
        <li className=" px-3 py-1 flex gap-2">
          <svg
            className="w-[20px]"
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
                d="M14 6L8 12V16H12L18 10M14 6L17 3L21 7L18 10M14 6L18 10M10 4L4 4L4 20L20 20V14"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          <p>ویرایش پروفایل</p>
        </li>
      </NavLink>
      <button
        onClick={handleLogout}
        className=" px-3 py-2 flex mt-20 gap-2 text-red-600"
      >
        <svg
          className=" w-[25px]"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>Session-Leave</title>{" "}
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              {" "}
              <g id="Session-Leave">
                {" "}
                <rect
                  id="Rectangle"
                  fill-rule="nonzero"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  {" "}
                </rect>{" "}
                <line
                  x1="9"
                  y1="12"
                  x2="19"
                  y2="12"
                  id="Path"
                  stroke="#de1b1b"
                  stroke-width="2"
                  stroke-linecap="round"
                >
                  {" "}
                </line>{" "}
                <path
                  d="M16,8 L18.5858,10.5858 C19.3668,11.3668 19.3668,12.6332 18.5858,13.4142 L16,16"
                  id="Path"
                  stroke="#de1b1b"
                  stroke-width="2"
                  stroke-linecap="round"
                >
                  {" "}
                </path>{" "}
                <path
                  d="M16,4 L6,4 C4.89543,4 4,4.89543 4,6 L4,18 C4,19.1046 4.89543,20 6,20 L16,20"
                  id="Path"
                  stroke="#de1b1b"
                  stroke-width="2"
                  stroke-linecap="round"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <p>خروج</p>
      </button>
    </ul>
  );
};

export default SidebarPanel;
