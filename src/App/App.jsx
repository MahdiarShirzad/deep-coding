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

const App = () => {
  const router = createBrowserRouter([{ path: "/", element: <Landing /> }]);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
