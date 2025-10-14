import React from "react";
import { Routes, Route} from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Overview from "../pages/Overview/Overview";
// import PdfViewer from "../components/documents/PdfViewer";

const IndexRouter = () => {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path='/overview' element={<Overview/>} />
        {/* <Route path="/pdf" element={<PdfViewer />} /> */}

      </Routes>
    
    </>
  );
};

export default IndexRouter;
