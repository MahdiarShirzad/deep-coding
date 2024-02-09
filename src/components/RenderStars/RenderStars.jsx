import React from "react";

const RenderStars = ({ starTypes }) => {
  const parseRating = (rating) => {
    return parseFloat(rating);
  };

  const renderStars = (rating) => {
    const maxStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={i}
          className="w-[18px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#fcc419"
          stroke="#fcc419"
        >
          {/* مسیر ستاره پر */}
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    // if (halfStar) {
    //   stars.push(
    //     <svg
    //       key="half"
    //       className="w-[18px] text-yellow-500"
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 20 20"
    //       fill="currentColor"
    //     >
    //       {/* مسیر نیم ستاره */}
    //       <path d="M9.998 0L12.244 7.75H20l-5.75 4.625L14.498 20 9.998 15.25 5.498 20 4.25 12.375H0L2.498 0h7.5zM9.998 2.031l-2.02 6.244H3.465l1.63-5.031L9.998 2.03z" />
    //     </svg>
    //   );
    // }

    // پر کردن با ستاره‌های خالی
    // const emptyStars = maxStars - stars.length;
    // for (let i = 0; i < emptyStars; i++) {
    //   stars.push(
    //     <svg
    //       key={`empty-${i}`}
    //       className="w-[18px] text-gray-300"
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 20 20"
    //       fill="currentColor"
    //     >
    //       {/* مسیر ستاره خالی */}
    //       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    //     </svg>
    //   );
    // }

    return stars;
  };

  return (
    <div className="flex items-center gap-1">
      {renderStars(parseRating(starTypes))}
    </div>
  );
};

export default RenderStars;
