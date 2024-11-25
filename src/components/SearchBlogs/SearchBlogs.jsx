import { useState } from "react";
import Separator from "../common/Seperator/Separator";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

const SearchBlogs = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = products.filter((product) => product.name.includes(query));

    setFilteredProducts(filtered);
  };

  return (
    <div className="mt-8 border max-md:mx-3 border-slate-300 transition-none px-4 flex items-center gap-4 py-3 rounded-3xl relative mb-2">
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
            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
            stroke="#8f8f8f"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
      <input
        className=" transition-none block relative w-full px-3 py-3 rounded-3xl focus:outline-none placeholder:text-base focus:bg-white focus:placeholder:opacity-0"
        type="text"
        placeholder="بلاگ مورد نظر را جستوجوی کنید"
        value={searchQuery}
        onChange={handleInputChange}
      />
      {searchQuery && (
        <div className="max-h-80 absolute w-[100%] top-20  rounded-xl bg-white overflow-y-auto border border-gray-300  z-[1000]">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((blog) => (
              <>
                <Link
                  to={`/blogs/${blog?.id}`}
                  onClick={scrollToTop}
                  className=" flex gap-4 py-2 items-center px-10"
                >
                  <img className="w-20 h-20 rounded-lg" src={blog.img} alt="" />
                  <div key={blog.id} className="p-2 py-8 ">
                    {blog.name}
                  </div>
                </Link>
                <Separator />
              </>
            ))
          ) : (
            <div className=" h-20 flex my-4 justify-center items-center ">
              بلاگ مورد نظر یافت نشد
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBlogs;
