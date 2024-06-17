import React from "react";
import avatar from "../../../assets/images/userpanel/avatar.jpg";
// import Button from "../../../components/common/Button/Button";
import { Field, Form, Formik } from "formik";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../../services/apiAuth";
import { useUpdateUser } from "../useUpdateUser";
import { toast } from "react-toastify";

const EditProfile = () => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const { mutate: updateUser, isPending: isUpdating } = useUpdateUser();

  console.log(user?.user_metadata.email);

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

    updateUser(updates);
    toast.success("پروفایل با موفقیت آپدیت شد !", {
      position: "top-center",
    });
  };

  return (
    <div>
      <p className="text-2xl font-semibold">ویرایش پروفایل</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div className=" mt-7">
            <p className="text-gray-600">تصویر</p>
            <div className=" flex items-center gap-4 mt-3">
              <img className=" w-[90px] rounded-full" src={avatar} alt="" />
              <button className=" bg-blue-200 text-blue-600 h-[40px] px-4 rounded-md">
                تغییر
              </button>
              <button className=" bg-red-300 text-red-600 h-[40px] px-4 rounded-md">
                حذف
              </button>
            </div>
          </div>
          <div className=" flex flex-wrap justify-between mt-8">
            <div className=" flex flex-col gap-2 my-3">
              <label htmlFor="fullName">نام کاربری</label>
              <Field
                className=" border w-[450px] py-3 rounded-lg px-3 capitalize"
                type="text"
                name="fullName"
                id="fullName"
                placeholder="نام کاربری"
              />
            </div>
            <div className=" flex flex-col gap-2 my-3">
              <label htmlFor="email">ایمیل</label>
              <Field
                className=" border w-[450px] py-3 rounded-lg px-3"
                type="email"
                name="email"
                id="email"
                placeholder="ایمیل"
                disabled
              />
            </div>
            <div className=" flex flex-col gap-2 my-3">
              <label htmlFor="phone">شماره تماس</label>
              <Field
                className=" border w-[450px] py-3 rounded-lg px-3"
                type="text"
                name="phone"
                id="phone"
                placeholder="شماره تماس"
              />
            </div>
            <div className=" flex flex-col gap-2 my-3">
              <label htmlFor="address">آدرس</label>
              <Field
                className=" border w-[450px] py-3 rounded-lg px-3"
                type="text"
                name="address"
                id="address"
                placeholder="آدرس"
              />
            </div>
          </div>
          <div className=" flex flex-col mt-6 gap-7">
            <label className=" text-lg " htmlFor="aboutMe">
              درباره ی من
            </label>
            <Field
              className=" border rounded-lg w-[1000px] px-5 py-4 h-[200px]"
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
