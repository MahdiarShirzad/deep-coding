import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../screens/Landing/Landing";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
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
import Book from "../screens/Library/Book";
import NotFound from "../screens/notfound/NotFound";
import UserPanel from "../screens/userpanel/UserPanel";
import TeacherPanel from "../screens/TeacherPanel/TeacherPanel";
import AdminPanel from "../screens/AdminPanel/AdminPanel";
import Library from "../screens/Library/Library";
import Dashboard from "../screens/userpanel/dashboard/Dashboard";
import CourseList from "../screens/userpanel/CoursesList/CourseList";
import EditProfile from "../screens/userpanel/editprofile/EditProfile";
import Favorites from "../screens/userpanel/Favorites/Favorites";
import CourseResume from "../screens/userpanel/CourseResume/CourseResume";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import TeacherDashboard from "../screens/TeacherPanel/TeacherDashboard";
import TeacherEditProfile from "../screens/TeacherPanel/TeacherEditProfile";
import TeachersCourses from "../screens/TeacherPanel/TeachersCourses";
import AdminPanelDashboard from "../screens/AdminPanel/AdminPanelDashboard";
import ManageUsers from "../screens/AdminPanel/user/ManageUsers.jsx";
import ManageComments from "../screens/AdminPanel/comment/ManageComments.jsx";
import ManageCourses from "../screens/AdminPanel/course/ManageCourses.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library/:id" element={<Book />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/teacher-info/:id" element={<TeachersInfo />} />
          <Route path="*" element={<NotFound />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/user-panel" element={<UserPanel />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="my-courses" element={<CourseList />} />
              <Route path="edit-profile" element={<EditProfile />} />
              <Route path="favorites" element={<Favorites />} />
              <Route
                path="student-course-resume/:id"
                element={<CourseResume />}
              />
            </Route>
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["teacher"]} />}>
            <Route path="/teacher-panel" element={<TeacherPanel />}>
              <Route path="dashboard" element={<TeacherDashboard />} />
              <Route path="my-courses" element={<TeachersCourses />} />
              <Route path="edit-profile" element={<TeacherEditProfile />} />
            </Route>
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route path="/admin-panel/*" element={<AdminPanel />}>
              <Route path="dashboard" element={<AdminPanelDashboard />} />
              <Route path="users" element={<ManageUsers />} />
              <Route path="comments" element={<ManageComments />} />
              <Route path="courses" element={<ManageCourses />} />
            </Route>
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
