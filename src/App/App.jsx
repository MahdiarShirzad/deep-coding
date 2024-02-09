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
import axios from "axios";

const BASE_URL = "http://localhost:9000";

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
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products
        const productsResponse = await axios.get(`${BASE_URL}/courses/`);
        setCourses(productsResponse.data);
        console.log(productsResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" index element={<Landing courses={courses} />} />
          <Route path="/courses" index element={<Courses items={courses} />} />
          <Route path="/blogs" index element={<Blogs />} />
          <Route path="/about-us" index element={<AboutUs />} />
          <Route path="/contact-us" index element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" index element={<p className=" my-96">not found</p>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
