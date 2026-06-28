import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../screens/Landing/Landing.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Courses from "../screens/Courses/Courses.jsx";
import Blogs from "../screens/blogs/Blogs.jsx";
import AboutUs from "../screens/AboutUs/AboutUs.jsx";
import ContactUs from "../screens/ContactUs/ContactUs.jsx";
import Login from "../screens/Login/Login.jsx";
import SignUp from "../screens/Login/SignUp.jsx";
import Cart from "../screens/Cart/Cart.jsx";
import CourseDetail from "../screens/CourseDetail/CourseDetail.jsx";
import TeachersInfo from "../screens/TeachersInfo/TeachersInfo.jsx";
import BlogDetail from "../screens/BlogDetail/BlogDetail.jsx";
import Book from "../screens/Library/Book.jsx";
import NotFound from "../screens/notfound/NotFound.jsx";
import UserPanel from "../screens/userpanel/UserPanel.jsx";
import TeacherPanel from "../screens/TeacherPanel/TeacherPanel.jsx";
import AdminPanel from "../screens/AdminPanel/AdminPanel.jsx";
import Library from "../screens/Library/Library.jsx";
import Dashboard from "../screens/userpanel/dashboard/Dashboard.jsx";
import CourseList from "../screens/userpanel/CoursesList/CourseList.jsx";
import EditProfile from "../screens/userpanel/editprofile/EditProfile.jsx";
import Favorites from "../screens/userpanel/Favorites/Favorites.jsx";
// import CourseResume from "../screens/userpanel/CourseResume/CourseResume.jsx";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute.jsx";
import TeacherDashboard from "../screens/TeacherPanel/TeacherDashboard.jsx";
import TeacherEditProfile from "../screens/TeacherPanel/TeacherEditProfile.jsx";
import TeachersCourses from "../screens/TeacherPanel/TeachersCourses.jsx";
import AdminPanelDashboard from "../screens/AdminPanel/AdminPanelDashboard.jsx";
import ManageUsers from "../screens/AdminPanel/user/ManageUsers.jsx";
import ManageComments from "../screens/AdminPanel/comment/ManageComments.jsx";
import ManageCourses from "../screens/AdminPanel/course/ManageCourses.jsx";
import ManageBlogs from "../screens/AdminPanel/blog/ManageBlogs.jsx";
import ManageBook from "../screens/AdminPanel/book/ManageBook.jsx";

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
              {/* <Route
                path="student-course-resume/:id"
                element={<CourseResume />}
              /> */}
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
              <Route path="blogs" element={<ManageBlogs />} />
              <Route path="books" element={<ManageBook />} />
            </Route>
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
