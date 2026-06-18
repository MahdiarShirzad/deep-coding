const BookCardSkeleton = () => {
  return (
    <div className="flex flex-col justify-between w-full max-w-[340px] h-[520px] bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 animate-pulse dir-rtl">
      <div className="relative w-full h-[220px] rounded-2xl bg-gray-200">
        <div className="absolute top-3 right-3 w-16 h-6 bg-gray-300 rounded-xl"></div>
      </div>

      <div className="flex flex-col flex-grow mt-4 justify-between">
        <div>
          <div className="h-5 bg-gray-300 rounded-md w-3/4 mb-3"></div>
          <div className="h-5 bg-gray-300 rounded-md w-1/2 mb-6"></div>

          <div className="h-3.5 bg-gray-200 rounded-md w-full mb-2.5"></div>
          <div className="h-3.5 bg-gray-200 rounded-md w-full mb-2.5"></div>
          <div className="h-3.5 bg-gray-200 rounded-md w-full mb-2.5"></div>
          <div className="h-3.5 bg-gray-200 rounded-md w-2/3 mb-4"></div>
        </div>

        <div className="pt-2 border-t border-gray-50">
          <div className="w-full h-10 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default BookCardSkeleton;
