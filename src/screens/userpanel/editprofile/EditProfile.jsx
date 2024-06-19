import React from "react";
import { Field, Form, Formik } from "formik";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser, updateUser } from "../../../services/apiAuth";
import { useUpdateUser } from "../useUpdateUser";
import { toast } from "react-toastify";

const svgProfile = (
  <svg
    className=" w-20"
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
      <circle
        cx="12"
        cy="9"
        r="3"
        stroke="#000000"
        stroke-width="1.5"
      ></circle>{" "}
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="#000000"
        stroke-width="1.5"
      ></circle>{" "}
      <path
        d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
      ></path>{" "}
    </g>
  </svg>
);

const EditProfile = () => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const { mutate: updateUserMutation, isPending: isUpdating } = useUpdateUser();

  const { isError } = updateUser();

  const initialValues = {
    fullName: user?.user_metadata.fullName,
    email: user?.user_metadata.email,
    phone: user?.user_metadata.phone || "",
    address: user?.user_metadata.address || "",
    aboutMe: user?.user_metadata.aboutMe || "",
  };

  const handleSubmit = (values) => {
    const updates = {
      fullName: values.fullName,
      phone: values.phone,
      address: values.address,
      aboutMe: values.aboutMe,
    };

    updateUserMutation(updates);
    if (!isError) {
      toast.success("پروفایل با موفقیت آپدیت شد !", {
        position: "top-center",
      });
    } else {
      toast.error("خطا در آپدیت پروفایل !", {
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <p className="text-2xl font-semibold">ویرایش پروفایل</p>
      <div className=" mt-7">
        <p className="text-gray-600">تصویر</p>
        <div className=" flex items-center gap-4 mt-3">
          {/* <img className=" w-[90px] rounded-full" src={svgProfile} alt="" /> */}
          <svg
            className=" w-20"
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
              <circle
                cx="12"
                cy="9"
                r="3"
                stroke="#333"
                stroke-width="1.5"
              ></circle>{" "}
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#555"
                stroke-width="1.5"
              ></circle>{" "}
              <path
                d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
                stroke="#555"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
            </g>
          </svg>
          <button className=" bg-blue-200 text-blue-600 h-[40px] px-4 rounded-md">
            تغییر
          </button>
          <button className=" bg-green-300 text-green-800 h-[40px] px-4 rounded-md">
            ثبت
          </button>
        </div>
      </div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div className=" flex flex-wrap justify-between mt-8 mx-4 w-full px-4">
            <div className=" flex flex-col gap-2 my-3 w-full">
              <label htmlFor="fullName">نام کاربری</label>
              <Field
                className=" border max-w-[450px] py-3 rounded-lg px-3 capitalize"
                type="text"
                name="fullName"
                id="fullName"
                placeholder="نام کاربری"
              />
            </div>
            <div className=" flex flex-col gap-2 my-3 w-full lg:w-1/2 lg:pl-6 ">
              <label htmlFor="email">ایمیل</label>
              <Field
                className=" border maxw-w-[450px] py-3 rounded-lg px-3"
                type="email"
                name="email"
                id="email"
                placeholder="ایمیل"
                disabled
              />
            </div>
            <div className=" flex flex-col gap-2 my-3  w-full">
              <label htmlFor="phone">شماره تماس</label>
              <Field
                className=" border max-w-[450px] py-3 rounded-lg px-3"
                type="text"
                name="phone"
                id="phone"
                placeholder="شماره تماس"
              />
            </div>
            <div className=" flex flex-col gap-2 my-3  w-full">
              <label htmlFor="address">آدرس</label>
              <Field
                className=" border max-w-[450px] py-3 rounded-lg px-3"
                type="text"
                name="address"
                id="address"
                placeholder="آدرس"
              />
            </div>
          </div>
          <div className=" flex flex-col mt-6 gap-7  w-full">
            <label className=" text-lg " htmlFor="aboutMe">
              درباره ی من
            </label>
            <Field
              className=" border rounded-lg max-w-[1000px] px-5 py-4 h-[200px]"
              component="textarea"
              name="aboutMe"
              id="aboutMe"
              cols="10"
              rows="10"
              placeholder="درباره من"
            />
          </div>
          <div className=" flex justify-end mt-4">
            <button
              // onClick={notify}
              className="text-white bg-[#140342] rounded-2xl w-44 max-lg:text- px-9 py-3 border-2 border-[#140342] hover:bg-transparent hover:text-[#140342]"
            >
              {isUpdating ? " صبر کنید ..!" : "ذخیره"}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default EditProfile;
