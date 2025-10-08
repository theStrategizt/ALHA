import React from "react";
import { Routes, Route} from "react-router-dom";
import Landing from "../pages/Landing/Landing";

const IndexRouter = () => {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
      </Routes>
    
    </>
  );
};

export default IndexRouter;
