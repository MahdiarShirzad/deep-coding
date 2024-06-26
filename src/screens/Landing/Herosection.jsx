import React, { useEffect } from "react";
import heroimg from "../../assets/images/home-7/hero/image.png";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const Herosection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1200, // Specify the animation duration
      once: true, // Only play the animation once
    });
  }, []);

  return (
    <div className=" relative" data-aos="fade-left">
      <div className="bg-[url('assets/images/home-6/hero/bg.png')] bg-no-repeat absolute -z-20  bg-cover w-full  h-[780px]"></div>
      <div className="flex  items-center py-20 px-10 max-md:px-3 font-iransans z-20 max-w-[1320px]  container mx-auto">
        <div className="w-1/2  max-lg:mr-20 max-lg:w-3/4 max-lg:mt-16 max-md:w-full">
          <h1 className="text-4xl font-extrabold leading-[60px] text-right">
            دوره های مورد نظر را پیدا کنید و مهارت ها را بهبود ببخشید
          </h1>
          <p className="mt-8 w-3/4 leading-8 text-lg text-right max-lg:text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون است.
          </p>
          <div className="flex items-center justify-center mt-20 gap-5 max-lg:w-full">
            <Link onClick={scrollToTop} to="/sign-up">
              <Button>ثبت نام رایگان</Button>
            </Link>
            <Link onClick={scrollToTop} to="/courses">
              <button className="border-2 border-[#140342] min-w-24 max-md:px-3 max-md:py-2 hover:bg-[#140342] hover:text-white px-9 py-3 rounded-2xl">
                جستجوی دوره
              </button>
            </Link>
          </div>
        </div>
        <div className=" max-lg:hidden">
          <img src={heroimg} alt="" />
        </div>
      </div>
      <div className="font-iransans max-w-[1320px]  container mx-auto ">
        <h2 className="text-center mb-7 text-3xl font-semibold">
          چرا برای آینده یاد بگیریم؟
        </h2>
        <p className="text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </p>
        <div className="flex flex-wrap max-lg:flex-col max-lg:gap-6 justify-between items-center mt-9">
          <div className="flex flex-col items-center justify-center w-[300px] gap-4">
            <div className="p-7 rounded-full shadow-gray-200 shadow-sm">
              <svg
                className="w-14"
                fill="#000000"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 496 496"
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
                      <g>
                        {" "}
                        <path d="M414.56,319.478L352,305.574v-19.768c24.176-17.448,40-45.784,40-77.816v-48h8V94.614c0-3.16-0.304-6.328-0.8-9.496 L432,74.87v22.592c-9.288,3.312-16,12.112-16,22.528v24h48v-24c0-10.416-6.712-19.216-16-22.528V55.99 c0-8.312-5.328-15.552-13.248-18.016L329.656,5.134c-21.816-6.832-45.504-6.832-67.312,0L157.248,37.966 C149.328,40.438,144,47.678,144,55.99s5.328,15.552,13.248,18.016L192.8,85.118c-0.496,3.168-0.8,6.336-0.8,9.496v65.376h8v48 c0,32.032,15.824,60.368,40,77.816v19.768l-62.56,13.896c-0.464,0.104-0.968,0.256-1.44,0.376V183.99H0v224h42.8 c2.64,7.432,7.048,14.008,12.728,19.248l-8.592,68.752h18.36L88,488.422l22.704,7.568H120h9.064H496v-74.992 C496,371.87,462.512,330.134,414.56,319.478z M440,111.99c4.416,0,8,3.584,8,8v8h-16v-8C432,115.574,435.584,111.99,440,111.99z M162.016,58.734c-1.2-0.376-2.016-1.48-2.016-2.744s0.816-2.368,2.016-2.752l105.096-32.84c9.368-2.92,19.08-4.408,28.888-4.408 c9.808,0,19.52,1.488,28.888,4.408l105.096,32.848c1.2,0.376,2.016,1.48,2.016,2.744s-0.816,2.368-2.016,2.752l-105.096,32.84 c-18.736,5.84-39.048,5.84-57.784,0L162.016,58.734z M208,94.614c0-1.544,0.168-3.096,0.336-4.648l54.008,16.88 c10.904,3.416,22.224,5.144,33.656,5.144s22.752-1.728,33.656-5.144l54.016-16.872c0.16,1.552,0.328,3.104,0.328,4.64v49.376h-8 H216h-8V94.614z M216,207.99v-48h160v48c0,44.112-35.888,80-80,80S216,252.102,216,207.99z M296,319.046l-40-20v-3.896 c12.192,5.616,25.712,8.84,40,8.84c14.288,0,27.808-3.224,40-8.84v3.896L296,319.046z M330.768,319.558l-13.096,24l-9.52-12.696 L330.768,319.558z M283.856,330.854l-9.52,12.696l-13.096-24L283.856,330.854z M40,391.99H16v-192h144v192h-24 c0-26.472-21.528-48-48-48S40,365.518,40,391.99z M88,471.558l-22.832,7.608l5.312-42.536c5.44,2.144,11.336,3.36,17.52,3.36 s12.08-1.216,17.52-3.36l5.32,42.536L88,471.558z M88,423.99c-17.648,0-32-14.352-32-32s14.352-32,32-32s32,14.352,32,32 S105.648,423.99,88,423.99z M216,479.99h-24v-32h-16v32h-48.936l-6.592-52.752c5.688-5.24,10.096-11.816,12.728-19.248H176 v-63.296l40,73.336V479.99z M288,479.99h-56v-66.04l-43.888-80.456l55.744-12.392L288,402.03V479.99z M282.744,358.99 L296,341.318l13.256,17.672L296,383.286L282.744,358.99z M360,479.99h-56v-77.96l44.144-80.92l55.744,12.384L360,413.95V479.99z M480,479.99h-64v-32h-16v32h-24v-61.96l43.888-80.456c35.8,11.848,60.112,44.944,60.112,83.424V479.99z"></path>{" "}
                        <rect x="96" y="215.99" width="48" height="16"></rect>{" "}
                        <rect x="32" y="247.99" width="112" height="16"></rect>{" "}
                        <rect x="32" y="279.99" width="112" height="16"></rect>{" "}
                        <rect x="32" y="311.99" width="64" height="16"></rect>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <h4 className="text-center text-lg">هر چیزی یاد بگیر</h4>
            <p className="text-center text-sm text-slate-700">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
            </p>
          </div>{" "}
          <div className="flex flex-col items-center justify-center w-[300px] gap-4">
            <div className="p-7 rounded-full shadow-gray-200 shadow-sm">
              <svg
                className="w-14"
                fill="#000000"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 496 496"
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
                      <g>
                        {" "}
                        <path d="M414.56,319.478L352,305.574v-19.768c24.176-17.448,40-45.784,40-77.816v-48h8V94.614c0-3.16-0.304-6.328-0.8-9.496 L432,74.87v22.592c-9.288,3.312-16,12.112-16,22.528v24h48v-24c0-10.416-6.712-19.216-16-22.528V55.99 c0-8.312-5.328-15.552-13.248-18.016L329.656,5.134c-21.816-6.832-45.504-6.832-67.312,0L157.248,37.966 C149.328,40.438,144,47.678,144,55.99s5.328,15.552,13.248,18.016L192.8,85.118c-0.496,3.168-0.8,6.336-0.8,9.496v65.376h8v48 c0,32.032,15.824,60.368,40,77.816v19.768l-62.56,13.896c-0.464,0.104-0.968,0.256-1.44,0.376V183.99H0v224h42.8 c2.64,7.432,7.048,14.008,12.728,19.248l-8.592,68.752h18.36L88,488.422l22.704,7.568H120h9.064H496v-74.992 C496,371.87,462.512,330.134,414.56,319.478z M440,111.99c4.416,0,8,3.584,8,8v8h-16v-8C432,115.574,435.584,111.99,440,111.99z M162.016,58.734c-1.2-0.376-2.016-1.48-2.016-2.744s0.816-2.368,2.016-2.752l105.096-32.84c9.368-2.92,19.08-4.408,28.888-4.408 c9.808,0,19.52,1.488,28.888,4.408l105.096,32.848c1.2,0.376,2.016,1.48,2.016,2.744s-0.816,2.368-2.016,2.752l-105.096,32.84 c-18.736,5.84-39.048,5.84-57.784,0L162.016,58.734z M208,94.614c0-1.544,0.168-3.096,0.336-4.648l54.008,16.88 c10.904,3.416,22.224,5.144,33.656,5.144s22.752-1.728,33.656-5.144l54.016-16.872c0.16,1.552,0.328,3.104,0.328,4.64v49.376h-8 H216h-8V94.614z M216,207.99v-48h160v48c0,44.112-35.888,80-80,80S216,252.102,216,207.99z M296,319.046l-40-20v-3.896 c12.192,5.616,25.712,8.84,40,8.84c14.288,0,27.808-3.224,40-8.84v3.896L296,319.046z M330.768,319.558l-13.096,24l-9.52-12.696 L330.768,319.558z M283.856,330.854l-9.52,12.696l-13.096-24L283.856,330.854z M40,391.99H16v-192h144v192h-24 c0-26.472-21.528-48-48-48S40,365.518,40,391.99z M88,471.558l-22.832,7.608l5.312-42.536c5.44,2.144,11.336,3.36,17.52,3.36 s12.08-1.216,17.52-3.36l5.32,42.536L88,471.558z M88,423.99c-17.648,0-32-14.352-32-32s14.352-32,32-32s32,14.352,32,32 S105.648,423.99,88,423.99z M216,479.99h-24v-32h-16v32h-48.936l-6.592-52.752c5.688-5.24,10.096-11.816,12.728-19.248H176 v-63.296l40,73.336V479.99z M288,479.99h-56v-66.04l-43.888-80.456l55.744-12.392L288,402.03V479.99z M282.744,358.99 L296,341.318l13.256,17.672L296,383.286L282.744,358.99z M360,479.99h-56v-77.96l44.144-80.92l55.744,12.384L360,413.95V479.99z M480,479.99h-64v-32h-16v32h-24v-61.96l43.888-80.456c35.8,11.848,60.112,44.944,60.112,83.424V479.99z"></path>{" "}
                        <rect x="96" y="215.99" width="48" height="16"></rect>{" "}
                        <rect x="32" y="247.99" width="112" height="16"></rect>{" "}
                        <rect x="32" y="279.99" width="112" height="16"></rect>{" "}
                        <rect x="32" y="311.99" width="64" height="16"></rect>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <h4 className="text-center text-lg">شکوفایی استعدادها</h4>
            <p className="text-center text-sm text-slate-700">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
            </p>
          </div>{" "}
          <div className="flex flex-col items-center justify-center w-[300px] gap-4 max-lg:mt-8">
            <div className="p-7 rounded-full shadow-gray-200 shadow-sm">
              <svg
                className="w-14"
                fill="#000000"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 496 496"
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
                      <g>
                        {" "}
                        <path d="M414.56,319.478L352,305.574v-19.768c24.176-17.448,40-45.784,40-77.816v-48h8V94.614c0-3.16-0.304-6.328-0.8-9.496 L432,74.87v22.592c-9.288,3.312-16,12.112-16,22.528v24h48v-24c0-10.416-6.712-19.216-16-22.528V55.99 c0-8.312-5.328-15.552-13.248-18.016L329.656,5.134c-21.816-6.832-45.504-6.832-67.312,0L157.248,37.966 C149.328,40.438,144,47.678,144,55.99s5.328,15.552,13.248,18.016L192.8,85.118c-0.496,3.168-0.8,6.336-0.8,9.496v65.376h8v48 c0,32.032,15.824,60.368,40,77.816v19.768l-62.56,13.896c-0.464,0.104-0.968,0.256-1.44,0.376V183.99H0v224h42.8 c2.64,7.432,7.048,14.008,12.728,19.248l-8.592,68.752h18.36L88,488.422l22.704,7.568H120h9.064H496v-74.992 C496,371.87,462.512,330.134,414.56,319.478z M440,111.99c4.416,0,8,3.584,8,8v8h-16v-8C432,115.574,435.584,111.99,440,111.99z M162.016,58.734c-1.2-0.376-2.016-1.48-2.016-2.744s0.816-2.368,2.016-2.752l105.096-32.84c9.368-2.92,19.08-4.408,28.888-4.408 c9.808,0,19.52,1.488,28.888,4.408l105.096,32.848c1.2,0.376,2.016,1.48,2.016,2.744s-0.816,2.368-2.016,2.752l-105.096,32.84 c-18.736,5.84-39.048,5.84-57.784,0L162.016,58.734z M208,94.614c0-1.544,0.168-3.096,0.336-4.648l54.008,16.88 c10.904,3.416,22.224,5.144,33.656,5.144s22.752-1.728,33.656-5.144l54.016-16.872c0.16,1.552,0.328,3.104,0.328,4.64v49.376h-8 H216h-8V94.614z M216,207.99v-48h160v48c0,44.112-35.888,80-80,80S216,252.102,216,207.99z M296,319.046l-40-20v-3.896 c12.192,5.616,25.712,8.84,40,8.84c14.288,0,27.808-3.224,40-8.84v3.896L296,319.046z M330.768,319.558l-13.096,24l-9.52-12.696 L330.768,319.558z M283.856,330.854l-9.52,12.696l-13.096-24L283.856,330.854z M40,391.99H16v-192h144v192h-24 c0-26.472-21.528-48-48-48S40,365.518,40,391.99z M88,471.558l-22.832,7.608l5.312-42.536c5.44,2.144,11.336,3.36,17.52,3.36 s12.08-1.216,17.52-3.36l5.32,42.536L88,471.558z M88,423.99c-17.648,0-32-14.352-32-32s14.352-32,32-32s32,14.352,32,32 S105.648,423.99,88,423.99z M216,479.99h-24v-32h-16v32h-48.936l-6.592-52.752c5.688-5.24,10.096-11.816,12.728-19.248H176 v-63.296l40,73.336V479.99z M288,479.99h-56v-66.04l-43.888-80.456l55.744-12.392L288,402.03V479.99z M282.744,358.99 L296,341.318l13.256,17.672L296,383.286L282.744,358.99z M360,479.99h-56v-77.96l44.144-80.92l55.744,12.384L360,413.95V479.99z M480,479.99h-64v-32h-16v32h-24v-61.96l43.888-80.456c35.8,11.848,60.112,44.944,60.112,83.424V479.99z"></path>{" "}
                        <rect x="96" y="215.99" width="48" height="16"></rect>{" "}
                        <rect x="32" y="247.99" width="112" height="16"></rect>{" "}
                        <rect x="32" y="279.99" width="112" height="16"></rect>{" "}
                        <rect x="32" y="311.99" width="64" height="16"></rect>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <h4 className="text-center text-lg">با کارشناسان بیاموزید</h4>
            <p className="text-center text-sm text-slate-700">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
            </p>
          </div>{" "}
          <div className="flex flex-col items-center justify-center w-[300px] gap-4 max-lg:mt-8">
            <div className="p-7 rounded-full shadow-gray-200 shadow-sm">
              <svg
                className="w-14"
                fill="#000000"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 496 496"
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
                      <g>
                        {" "}
                        <path d="M414.56,319.478L352,305.574v-19.768c24.176-17.448,40-45.784,40-77.816v-48h8V94.614c0-3.16-0.304-6.328-0.8-9.496 L432,74.87v22.592c-9.288,3.312-16,12.112-16,22.528v24h48v-24c0-10.416-6.712-19.216-16-22.528V55.99 c0-8.312-5.328-15.552-13.248-18.016L329.656,5.134c-21.816-6.832-45.504-6.832-67.312,0L157.248,37.966 C149.328,40.438,144,47.678,144,55.99s5.328,15.552,13.248,18.016L192.8,85.118c-0.496,3.168-0.8,6.336-0.8,9.496v65.376h8v48 c0,32.032,15.824,60.368,40,77.816v19.768l-62.56,13.896c-0.464,0.104-0.968,0.256-1.44,0.376V183.99H0v224h42.8 c2.64,7.432,7.048,14.008,12.728,19.248l-8.592,68.752h18.36L88,488.422l22.704,7.568H120h9.064H496v-74.992 C496,371.87,462.512,330.134,414.56,319.478z M440,111.99c4.416,0,8,3.584,8,8v8h-16v-8C432,115.574,435.584,111.99,440,111.99z M162.016,58.734c-1.2-0.376-2.016-1.48-2.016-2.744s0.816-2.368,2.016-2.752l105.096-32.84c9.368-2.92,19.08-4.408,28.888-4.408 c9.808,0,19.52,1.488,28.888,4.408l105.096,32.848c1.2,0.376,2.016,1.48,2.016,2.744s-0.816,2.368-2.016,2.752l-105.096,32.84 c-18.736,5.84-39.048,5.84-57.784,0L162.016,58.734z M208,94.614c0-1.544,0.168-3.096,0.336-4.648l54.008,16.88 c10.904,3.416,22.224,5.144,33.656,5.144s22.752-1.728,33.656-5.144l54.016-16.872c0.16,1.552,0.328,3.104,0.328,4.64v49.376h-8 H216h-8V94.614z M216,207.99v-48h160v48c0,44.112-35.888,80-80,80S216,252.102,216,207.99z M296,319.046l-40-20v-3.896 c12.192,5.616,25.712,8.84,40,8.84c14.288,0,27.808-3.224,40-8.84v3.896L296,319.046z M330.768,319.558l-13.096,24l-9.52-12.696 L330.768,319.558z M283.856,330.854l-9.52,12.696l-13.096-24L283.856,330.854z M40,391.99H16v-192h144v192h-24 c0-26.472-21.528-48-48-48S40,365.518,40,391.99z M88,471.558l-22.832,7.608l5.312-42.536c5.44,2.144,11.336,3.36,17.52,3.36 s12.08-1.216,17.52-3.36l5.32,42.536L88,471.558z M88,423.99c-17.648,0-32-14.352-32-32s14.352-32,32-32s32,14.352,32,32 S105.648,423.99,88,423.99z M216,479.99h-24v-32h-16v32h-48.936l-6.592-52.752c5.688-5.24,10.096-11.816,12.728-19.248H176 v-63.296l40,73.336V479.99z M288,479.99h-56v-66.04l-43.888-80.456l55.744-12.392L288,402.03V479.99z M282.744,358.99 L296,341.318l13.256,17.672L296,383.286L282.744,358.99z M360,479.99h-56v-77.96l44.144-80.92l55.744,12.384L360,413.95V479.99z M480,479.99h-64v-32h-16v32h-24v-61.96l43.888-80.456c35.8,11.848,60.112,44.944,60.112,83.424V479.99z"></path>{" "}
                        <rect x="96" y="215.99" width="48" height="16"></rect>{" "}
                        <rect x="32" y="247.99" width="112" height="16"></rect>{" "}
                        <rect x="32" y="279.99" width="112" height="16"></rect>{" "}
                        <rect x="32" y="311.99" width="64" height="16"></rect>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <h4 className="text-center text-lg">دسترسی به برنامه ریزی</h4>
            <p className="text-center text-sm text-slate-700">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
