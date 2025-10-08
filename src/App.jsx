import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Landing from "./pages/Landing/Landing.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>

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
