import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "../screens/Landing/Landing";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

const router = createBrowserRouter([{ path: "/", element: <Landing /> }]);

const App = () => {
  return (
    <div className="">
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
};

export default App;
