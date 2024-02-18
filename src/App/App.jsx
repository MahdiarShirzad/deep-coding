import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Landing from "../screens/Landing/Landing";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "@fortawesome/fontawesome-free/css/all.css";
import Courses from "../screens/Courses/Courses";
import Blogs from "../screens/blogs/Blogs";
import AboutUs from "../screens/AboutUs/AboutUs";
import ContactUs from "../screens/ContactUs/ContactUs";
import Login from "../screens/Login/Login";
import SignUp from "../screens/Login/SignUp";
import Cart from "../screens/Cart/Cart";
import CourseDetail from "../screens/CourseDetail/CourseDetail";
import TeachersInfo from "../screens/TeachersInfo/TeachersInfo";
import BlogDetail from "../screens/BlogDetail/BlogDetail";

import { useDispatch, useSelector } from "react-redux";
import { fetchCourses, fetchBlogs, fetchTeachers } from "../store/data";

const Layout = ({ children }) => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";
  const isSignUpPage = location.pathname === "/sign-up";

  if (isLoginPage) {
    return <>{children}</>;
  }
  if (isSignUpPage) {
    return <>{children}</>;
  }
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.data.courses);
  const blogs = useSelector((state) => state.data.blogs);
  const teachers = useSelector((state) => state.data.teachers);

  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(fetchBlogs());
    dispatch(fetchTeachers());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            index
            element={
              <Landing courses={courses} blogs={blogs} teachers={teachers} />
            }
          />
          <Route
            path="/courses"
            index
            element={<Courses items={courses} teachers={teachers} />}
          />
          <Route
            path="/courses/:id"
            index
            element={<CourseDetail items={courses} teachers={teachers} />}
          ></Route>
          <Route path="/blogs" index element={<Blogs blogs={blogs} />} />
          <Route path="/blog-detail" index element={<BlogDetail />} />
          <Route path="/about-us" index element={<AboutUs />} />
          <Route path="/cart" index element={<Cart />} />
          <Route path="/contact-us" index element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/teacher-info/:id"
            index
            element={<TeachersInfo teachers={teachers} courses={courses} />}
          />
          <Route path="*" index element={<p className=" my-96">not found</p>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
