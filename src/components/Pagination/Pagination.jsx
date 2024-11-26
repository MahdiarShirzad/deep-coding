import React from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage,
}) => {
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    scrollToTop();
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    scrollToTop();
  };

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container flex font-yekanReg flex-col items-center mx-auto mt-10">
      <ul className="flex gap-2 mt-7">
        <li
          onClick={scrollToTop}
          className="border-1  p-2 bg-blue-200  flex items-center justify-center rounded-full text-xl font-bold"
        >
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            <svg
              className="w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="matrix(-1, 0, 0, 1, 0, 0)"
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
                  d="M14.9991 19L9.83911 14C9.56672 13.7429 9.34974 13.433 9.20142 13.0891C9.0531 12.7452 8.97656 12.3745 8.97656 12C8.97656 11.6255 9.0531 11.2548 9.20142 10.9109C9.34974 10.567 9.56672 10.2571 9.83911 10L14.9991 5"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li
            className={`border-1 px-2 mx-1 flex items-center justify-center  cursor-pointer ${
              currentPage === number ? " border-b-[4px] border-blue-900 " : ""
            }`}
            key={number}
          >
            <button
              className="w-full h-full block p-2"
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li className="border-1 p-2  bg-blue-200 text-xl font-bold flex items-center justify-center rounded-full">
          <button
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}
          >
            <svg
              className="w-6"
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
                  d="M14.9991 19L9.83911 14C9.56672 13.7429 9.34974 13.433 9.20142 13.0891C9.0531 12.7452 8.97656 12.3745 8.97656 12C8.97656 11.6255 9.0531 11.2548 9.20142 10.9109C9.34974 10.567 9.56672 10.2571 9.83911 10L14.9991 5"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
