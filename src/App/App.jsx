import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../screens/Landing/Landing";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "@fortawesome/fontawesome-free/css/all.css";
import Courses from "../screens/Courses/Courses";

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
        <Routes>
          <Route path="/" index element={<Landing />} />
          <Route path="/courses" index element={<Courses />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
