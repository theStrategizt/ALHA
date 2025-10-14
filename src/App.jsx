import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexRouter from "./Routes/IndexRouter.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <BrowserRouter>
   
      <IndexRouter />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
    </BrowserRouter>
  );
};

export default App;
