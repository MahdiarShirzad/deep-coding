import React, { useRef } from "react";
import heroimg from "../../assets/images/home-7/hero/image.png";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Button from "../../components/common/Button/Button";

const Herosection = () => {
  const titleRef = useRef(null);
  const itemsRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });
  const itemsInView = useInView(titleRef, { once: true });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: -500,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.3,
        type: "spring",
        stiffness: 110,
        damping: 9,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 500,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.3,
        type: "spring",
        stiffness: 110,
        damping: 9,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 110,
        damping: 12,
      },
    },
  };
  const ItemsVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.3,
        type: "spring",
        stiffness: 110,
        damping: 12,
      },
    },
  };

  return (
    <div className=" relative">
      <div className="bg-[url('assets/images/home-6/hero/bg.png')] bg-no-repeat absolute -z-20  bg-cover w-full  h-[780px]"></div>
      <div className="flex  items-center py-20 px-10 max-md:px-3 font-iransans z-20 max-w-[1320px]  container mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="w-1/2  max-lg:mr-20 max-lg:w-3/4 max-lg:mt-16 max-md:w-full"
        >
          <h1 className="text-4xl font-extrabold leading-[60px] text-right">
            مسیر یادگیری خود را بسازید و مهارت‌هایتان را متحول کنید
          </h1>
          <p className="mt-8 w-3/4 leading-8 text-lg max-lg:text-justify text-justify">
            به دنیایی از دوره‌های تخصصی دسترسی پیدا کنید و قدمی مؤثر در مسیر رشد
            و پیشرفت خود بردارید. شروع یادگیری هرگز این‌قدر آسان نبوده است!
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
        </motion.div>
        <motion.div
          className="max-lg:hidden"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img src={heroimg} alt="Hero Section" />
        </motion.div>
      </div>
      <div className="font-iransans max-w-[1320px]  container mx-auto ">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h2 className="text-center mb-7 text-3xl font-semibold">
            چرا برای آینده یاد بگیریم؟
          </h2>
          <p className="text-center">
            یادگیری مداوم به ما کمک می‌کند تا برای چالش‌های آینده آماده‌تر باشیم
            و موفقیت بیشتری کسب کنیم.
          </p>
        </motion.div>
        <motion.div
          ref={itemsRef}
          initial="hidden"
          animate={itemsInView ? "visible" : "hidden"}
          variants={ItemsVariants}
          className="flex flex-wrap max-lg:flex-col max-lg:gap-6 justify-between items-center mt-9"
        >
          <div className="flex flex-col items-center justify-center w-[300px] gap-4">
            <div className="p-7 rounded-full shadow-gray-200 shadow-sm">
              <svg
                className=""
                width="50px"
                fill="#000000"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 72 72"
                enable-background="new 0 0 72 72"
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
                      <path d="M65.81,68h-60c-1.104,0-2-0.896-2-2s0.896-2,2-2h60c1.104,0,2,0.896,2,2S66.914,68,65.81,68z"></path>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <path d="M23.19,53.068c0,3.828-3.104,6.932-6.932,6.932h-5.137c-3.828,0-6.932-3.104-6.932-6.932V32.932 C4.19,29.104,7.294,26,11.122,26h5.137c3.828,0,6.932,3.104,6.932,6.932V53.068z M19.19,32.932c0-1.619-1.313-2.932-2.932-2.932 h-5.137c-1.619,0-2.932,1.313-2.932,2.932v20.137C8.19,54.688,9.503,56,11.122,56h5.137c1.619,0,2.932-1.313,2.932-2.932V32.932z"></path>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <path d="M46.19,53.068c0,3.828-3.104,6.932-6.932,6.932h-5.137c-3.828,0-6.932-3.104-6.932-6.932V21.932 c0-3.828,3.104-6.932,6.932-6.932h5.137c3.828,0,6.932,3.104,6.932,6.932V53.068z M42.19,21.932c0-1.619-1.313-2.932-2.932-2.932 h-5.137c-1.619,0-2.932,1.313-2.932,2.932v31.137c0,1.619,1.313,2.932,2.932,2.932h5.137c1.619,0,2.932-1.313,2.932-2.932V21.932z "></path>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M56,19c-0.553,0-0.81-0.447-0.81-1v-6.038C55.19,10,56.801,10,57.456,10h2.354c0.552,0,1,0.447,1,1s-0.448,1-1,1h-2.354 c-0.336,0-0.531,0.016-0.644,0.035L56.905,18C56.905,18.553,56.552,19,56,19z"></path>{" "}
                        </g>{" "}
                        <g>
                          {" "}
                          <path d="M55.81,21.18c-0.261,0-0.521-0.11-0.71-0.29c-0.181-0.189-0.29-0.45-0.29-0.71s0.109-0.52,0.29-0.71 c0.38-0.38,1.05-0.37,1.42,0c0.18,0.19,0.29,0.44,0.29,0.71c0,0.26-0.11,0.521-0.29,0.71 C56.329,21.069,56.069,21.18,55.81,21.18z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                      <g>
                        {" "}
                        <path d="M68.19,53.068c0,3.828-3.104,6.932-6.932,6.932h-5.137c-3.828,0-6.932-3.104-6.932-6.932V10.932 C49.19,7.104,52.294,4,56.122,4h5.137c3.828,0,6.932,3.104,6.932,6.932V53.068z M64.19,10.932C64.19,9.313,62.878,8,61.259,8 h-5.137c-1.619,0-2.932,1.313-2.932,2.932v42.137c0,1.619,1.313,2.932,2.932,2.932h5.137c1.619,0,2.932-1.313,2.932-2.932V10.932 z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <h4 className="text-center text-lg">هر چیزی یاد بگیر</h4>
            <p className="text-center text-sm text-slate-700">
              مهارت‌های جدید و متنوعی را در هر زمینه‌ای که به آن علاقه دارید، از
              برنامه‌نویسی تا طراحی، فرا بگیرید
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-[300px] gap-4">
            <div className="p-7 rounded-full shadow-gray-200 shadow-sm">
              <svg
                width="50px"
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
              با دوره‌های ما، توانایی‌های خود را کشف و شکوفا کنید و به مرحله
              بعدی حرفه‌ای خود قدم بگذارید
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-[300px] gap-4 max-lg:mt-8">
            <div className="p-7 rounded-full shadow-gray-200 shadow-sm">
              <svg
                width="50px"
                fill="#000000"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 511.999 511.999"
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
                      <path d="M474.485,23.06H37.515C16.829,23.06,0,39.889,0,60.575V381.44c0,20.686,16.829,37.515,37.515,37.515h134.503 l-5.733,39.567h-28.913v30.417h24.506h188.242h24.506v-30.417h-28.913l-5.733-39.567h134.503 c20.686,0,37.515-16.829,37.515-37.515V60.575C512,39.889,495.171,23.06,474.485,23.06z M197.02,458.521l5.732-39.567h106.494 l5.733,39.567H197.02z M481.583,381.44c0,3.914-3.185,7.097-7.097,7.097h-138.91h-159.15H37.515c-3.913,0-7.097-3.184-7.097-7.097 v-44.7h451.166V381.44z M481.583,306.323H30.417V60.575c0-3.914,3.185-7.097,7.097-7.097h436.971c3.913,0,7.097,3.184,7.097,7.097 V306.323z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <rect
                        x="235.054"
                        y="347.436"
                        width="41.895"
                        height="30.417"
                      ></rect>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M271.208,73.756h-30.417H74.848v212.289h165.943h30.417v0.001h165.943V73.756H271.208z M240.791,255.627H105.265V104.173 h135.526V255.627z M406.734,255.627H271.208V104.173h135.526V255.627z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <rect
                        x="127.661"
                        y="117.948"
                        width="90.745"
                        height="30.417"
                      ></rect>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <rect
                        x="127.661"
                        y="164.689"
                        width="90.745"
                        height="30.417"
                      ></rect>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <rect
                        x="127.661"
                        y="211.44"
                        width="90.745"
                        height="30.417"
                      ></rect>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <rect
                        x="293.597"
                        y="117.948"
                        width="90.745"
                        height="30.417"
                      ></rect>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <rect
                        x="293.597"
                        y="164.689"
                        width="90.745"
                        height="30.417"
                      ></rect>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <rect
                        x="293.597"
                        y="211.44"
                        width="90.745"
                        height="30.417"
                      ></rect>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <h4 className="text-center text-lg">با کارشناسان بیاموزید</h4>
            <p className="text-center text-sm text-slate-700">
              از بهترین متخصصان صنعت یاد بگیرید و با دانش و تجربیات ارزشمند
              آن‌ها به اهداف خود نزدیک‌تر شوید
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-[300px] gap-4 max-lg:mt-8">
            <div className="p-7 rounded-full shadow-gray-200 shadow-sm">
              <svg
                fill="#000000"
                height="50px"
                width="50px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 511.999 511.999"
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
                      <path d="M280.068,0C175.516,0,90.293,84.355,88.886,188.58L40.731,327.056h48.138V430.24h93.414v81.759h219.545V338.606 c20.245-16.76,37.064-37.757,48.903-61.125c13.627-26.9,20.538-55.929,20.538-86.28C471.268,85.772,385.496,0,280.068,0z M377.402,319.17l-5.991,4.565v157.847H212.7v-81.759h-93.414V296.638H83.513l35.773-102.87v-2.569 c0-88.655,72.127-160.782,160.782-160.782c88.656,0,160.783,72.127,160.783,160.783 C440.851,241.806,417.726,288.45,377.402,319.17z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M280.068,82.389c-56.801,0-103.014,46.212-103.014,103.015c0,27.2,10.504,52.856,29.578,72.242l1.39,1.412 c7.779,8.206,13.161,18.251,15.675,29.224v25.737c0,25.821,21.007,46.828,46.828,46.828h19.087 c25.821,0,46.828-21.007,46.828-46.828v-25.737c2.51-10.957,7.881-20.99,15.643-29.189l1.423-1.447 c19.074-19.387,29.578-45.043,29.578-72.242C383.083,128.601,336.87,82.389,280.068,82.389z M289.612,330.429h-19.087 c-9.049,0-16.411-7.362-16.411-16.411v-12.198h51.908v12.198h0.001C306.023,323.067,298.661,330.429,289.612,330.429z M269.872,185.403c0-5.622,4.574-10.197,10.196-10.197c5.622,0,10.197,4.574,10.197,10.197c0,5.622-4.575,10.196-10.197,10.196 C274.446,195.599,269.872,191.025,269.872,185.403z M332.258,235.868l-0.333,0.332c-10.042,10.005-17.596,22.01-22.229,35.203 h-14.42v-48.351c14.879-6.033,25.405-20.63,25.405-37.647c0-22.394-18.22-40.614-40.614-40.614 c-22.394,0-40.613,18.219-40.613,40.614c0,17.017,10.525,31.615,25.404,37.647v48.351h-14.419 c-4.631-13.194-12.187-25.198-22.229-35.203l-0.322-0.321c-13.172-13.609-20.418-31.508-20.418-50.474 c0-40.03,32.567-72.598,72.597-72.598c40.03,0,72.598,32.567,72.598,72.598C352.666,204.365,345.423,222.259,332.258,235.868z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <h4 className="text-center text-lg">دسترسی به برنامه ریزی</h4>
            <p className="text-center text-sm text-slate-700">
              به تمام محتوای دوره‌ها برای همیشه دسترسی خواهید داشت و می‌توانید
              هر زمان که خواستید بازبینی کنید.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Herosection;
