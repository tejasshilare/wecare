import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { createBrowserRouter as Routes,Route,Router } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    
      <Header />
      <Home />
      <Footer />
      
    </>
  );
}




export default App;
