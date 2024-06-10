import React, { useEffect } from "react";
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

import NotFound from "../screens/notfound/NotFound";
import UserPanel from "../screens/userpanel/UserPanel";
import Library from "../screens/Library/Library";
import Dashboard from "../screens/userpanel/dashboard/Dashboard";
import CourseList from "../screens/userpanel/CoursesList/CourseList";
import Exams from "../screens/userpanel/exams/Exams";
import EditProfile from "../screens/userpanel/editprofile/EditProfile";
import Favorites from "../screens/userpanel/Favorites/Favorites";
import CourseResume from "../screens/userpanel/CourseResume/CourseResume";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../services/apiCourses";
import { useSelector } from "react-redux";
import { getTeachers } from "../services/apiTeachers";

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
  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  const { data: teachers, isLoading: teachersLoading } = useQuery({
    queryKey: ["teachers"],
    queryFn: getTeachers,
  });

  const { user, isAuth } = useSelector((state) => state.user);

  console.log(isAuth);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            index
            element={
              <Landing
                courses={courses}
                // blogs={blogs}
                teachers={teachers}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/courses" element={<Courses />} />
          <Route
            path="/courses/:id"
            element={<CourseDetail items={courses} teachers={teachers} />}
          ></Route>
          {/* <Route path="/blogs" element={<Blogs blogs={blogs} />} /> */}
          <Route path="/blog-detail" element={<BlogDetail />} />
          {/* <Route path="/library" element={<Library books={books} />} /> */}
          <Route path="/about-us" element={<AboutUs />} />
          {isAuth && (
            <Route path="/cart" element={<Cart courses={courses} />} />
          )}
          <Route path="/contact-us" index element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/teacher-info/:id"
            index
            element={<TeachersInfo teachers={teachers} courses={courses} />}
          />
          {isAuth && (
            <Route path="/user-panel" element={<UserPanel />}>
              <Route path="/user-panel/dashboard" element={<Dashboard />} />
              <Route path="/user-panel/course-list" element={<CourseList />} />
              <Route path="/user-panel/exams" element={<Exams />} />
              <Route
                path="/user-panel/edit-profile"
                element={<EditProfile />}
              />
              <Route path="/user-panel/favorites" element={<Favorites />} />
              <Route
                path="/user-panel/edit-profile"
                element={<EditProfile />}
              />
              <Route
                path="/user-panel/student-course-resume"
                element={<CourseResume />}
              />
            </Route>
          )}
          <Route path="*" index element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
