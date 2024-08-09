import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getBooks } from "../../services/apiBooks";
import { toast } from "react-toastify";
import { Spinner } from "../../components/Spinner/Spinner";

export default function Book() {
  const { data: books, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  const { id } = useParams();

  const selectedBook = books?.find((item) => item.id == id);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success("لینک کپی شد !", {
          position: "top-center",
        });
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
      });
  };

  return (
    <div className="my-36">
      {!isLoading ? (
        <>
          {books ? (
            <div className="container max-w-[1320px] mx-auto">
              <div className="flex items-start justify-between">
                <div className="w-3/5">
                  <div>
                    <h3 className="font-iransans text-3xl font-bold">
                      {selectedBook?.name}
                    </h3>
                    <p className="mt-6 text-gray-700">
                      {selectedBook?.summary}
                    </p>
                  </div>
                  <div className="flex custom-content mt-12">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: selectedBook?.introduction,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="w-1/3">
                  <img
                    className="w-80 rounded-lg"
                    src={selectedBook?.img}
                    alt={selectedBook?.name}
                  />
                  <div className="flex gap-2 mt-8 items-center">
                    <p>اشتراک گذاری</p>
                    <button
                      onClick={handleShare}
                      className="bg-gray-300 p-1 rounded-md"
                    >
                      <svg
                        className="w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
                          stroke="#1C274C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                          stroke="#1C274C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-3xl text-center font-semibold">
              کتاب مورد نظر یافت نشد
            </p>
          )}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
