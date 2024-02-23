import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
};

const TopCategoriesSlider = ({ uniqueCategories }) => {
  return (
    <div className="parent mt-8 relative ">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        arrows={false}
        autoPlaySpeed={3000}
      >
        {uniqueCategories.map((category, index) => {
          return (
            <div
              className="slider flex flex-col items-center justify-center gap-5 w-48 border-2 border-slate-100 rounded-lg"
              key={index}
            >
              <div className="p-6 bg-slate-300 rounded-full b-5">
                <svg
                  className="w-14"
                  viewBox="0 0 48 48"
                  id="Layer_1"
                  version="1.1"
                  xml:space="preserve"
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
                    <style type="text/css"> </style>
                    <path
                      class="st0"
                      d="M8.278,35.973c0,3.048,2.48,5.527,5.528,5.527h22.488c0.276,0,0.5-0.224,0.5-0.5v-1.53 c0-0.104-0.039-0.195-0.093-0.274c-0.006-0.009-0.004-0.021-0.01-0.03c-0.705-0.92-1.078-2.024-1.078-3.193s0.373-2.273,1.078-3.194 c0.006-0.008,0.004-0.02,0.01-0.029c0.054-0.08,0.093-0.171,0.093-0.275v-1.03h2.237c0.276,0,0.5-0.224,0.5-0.5v-1.53 c0-0.104-0.039-0.195-0.093-0.275c-0.006-0.009-0.003-0.021-0.01-0.029c-0.705-0.921-1.077-2.025-1.077-3.194 s0.373-2.273,1.077-3.194c0.006-0.008,0.004-0.02,0.01-0.029c0.054-0.08,0.093-0.171,0.093-0.275v-1.53c0-0.276-0.224-0.5-0.5-0.5 h-5.227v-4.659l3.947-1.862v3.428c-0.563,0.206-0.969,0.742-0.969,1.376c0,0.81,0.659,1.469,1.469,1.469 c0.811,0,1.47-0.659,1.47-1.469c0-0.634-0.406-1.17-0.97-1.376V13.08c0-0.088-0.029-0.166-0.068-0.238 c-0.01-0.019-0.022-0.034-0.035-0.051c-0.043-0.059-0.095-0.107-0.159-0.142c-0.008-0.005-0.012-0.015-0.021-0.019L25.854,6.55 c-0.138-0.066-0.297-0.066-0.435,0l-12.615,6.08c-0.173,0.083-0.284,0.26-0.283,0.452c0.001,0.193,0.112,0.368,0.287,0.45 l4.661,2.198v4.659h-0.926c-1.48,0-2.87,0.574-3.912,1.616c-1.042,1.042-1.615,2.431-1.615,3.912c0,1.894,0.958,3.567,2.415,4.564 c-1.337,0.09-2.585,0.627-3.536,1.579C8.852,33.102,8.278,34.491,8.278,35.973z M34.652,35.473H13.15c-0.276,0-0.5,0.224-0.5,0.5 s0.224,0.5,0.5,0.5h21.502c0.069,0.884,0.314,1.729,0.735,2.497H13.972c-1.653,0-2.998-1.344-2.998-2.997 c0-0.803,0.312-1.556,0.874-2.119c0.575-0.567,1.329-0.879,2.124-0.879h21.416C34.966,33.744,34.722,34.588,34.652,35.473z M37.39,25.417H15.887c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H37.39c0.069,0.885,0.314,1.729,0.735,2.498H16.709 c-1.653,0-2.998-1.345-2.998-2.998c0-0.802,0.312-1.556,0.874-2.119c0.575-0.567,1.329-0.879,2.124-0.879h21.415 C37.703,23.688,37.459,24.533,37.39,25.417z M38.252,19.142c-0.259,0-0.469-0.21-0.469-0.469s0.21-0.469,0.469-0.469 s0.47,0.21,0.47,0.469S38.511,19.142,38.252,19.142z M14.184,13.075l11.454-5.52l11.453,5.52l-3.286,1.55v-1.448 c0-0.065-0.014-0.127-0.037-0.185c-0.008-0.021-0.022-0.037-0.033-0.057c-0.019-0.034-0.038-0.068-0.065-0.096 c-0.017-0.018-0.038-0.032-0.057-0.048c-0.028-0.022-0.056-0.044-0.089-0.06c-0.024-0.012-0.05-0.019-0.076-0.027 c-0.022-0.007-0.041-0.019-0.064-0.022l-1.819-0.291c-3.933-0.632-7.921-0.633-11.854,0l-1.82,0.291 c-0.023,0.004-0.042,0.016-0.064,0.022c-0.026,0.008-0.052,0.015-0.076,0.027c-0.033,0.016-0.06,0.037-0.089,0.06 c-0.02,0.016-0.04,0.029-0.057,0.048c-0.027,0.029-0.046,0.062-0.065,0.096c-0.011,0.019-0.025,0.036-0.033,0.057 c-0.023,0.058-0.037,0.119-0.037,0.185v1.448L14.184,13.075z M18.469,15.414v-1.81l1.4-0.224c3.827-0.615,7.708-0.615,11.537,0 l1.398,0.223v1.811v4.976H18.469V15.414z M12.016,25.917c0-1.214,0.47-2.353,1.322-3.205c0.854-0.853,1.992-1.323,3.205-1.323h1.426 h15.335h5.227v0.53H16.709c-1.059,0-2.063,0.415-2.828,1.169c-0.754,0.755-1.169,1.759-1.169,2.828c0,2.204,1.793,3.998,3.998,3.998 h21.822v0.53h-2.237H16.543C14.046,30.445,12.016,28.414,12.016,25.917z M13.806,31.445h2.737h19.251v0.53H13.972 c-1.059,0-2.062,0.415-2.828,1.169c-0.754,0.754-1.169,1.758-1.169,2.828c0,2.204,1.793,3.997,3.998,3.997h21.822v0.53H13.806 c-2.497,0-4.528-2.031-4.528-4.527c0-1.214,0.47-2.353,1.323-3.205C11.454,31.915,12.592,31.445,13.806,31.445z"
                    ></path>
                  </g>
                </svg>
              </div>
              <h5 className="text-lg text-cyan-950 font-medium ">{category}</h5>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TopCategoriesSlider;
