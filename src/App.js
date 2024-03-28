import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Home />
      {/* <Aside/> */}
      
      
      <Footer />
    </>
  );
}




export default App;
