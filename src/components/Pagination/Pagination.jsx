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
          className="border-1 px-4 p-2 bg-blue-200  flex items-center justify-center rounded-full text-xl font-bold"
        >
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            {`<`}
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
        <li className="border-1 p-2 px-4 bg-blue-200 text-xl font-bold flex items-center justify-center rounded-full">
          <button
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}
          >
            {`>`}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
