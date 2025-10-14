import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/layout/Navbar";
import AboutALHA from "./AboutALHA";
import Roles from "./Roles";
import Duities from "./Duities";
import Footer from "../../components/layout/Footer";
import Appendixes from "./Appendixes";

const Overview = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen relative bg-[#FFFBEC] overflow-hidden">
        <Helmet>
          <title>Overview | Agricultural Land Holding Authority (ALHA)</title>
          {/* <meta
          name="description"
          content="Join Orbyt – the platform that helps you launch and grow your ideas securely."
        />
        <meta property="og:title" content="Orbyt" />
        <meta
          property="og:description"
          content="Launch your ideas into orbit 🚀"
        />
        <meta property="og:type" content="website" /> */}
        </Helmet>

        <Navbar />
        <main className="relative">
          <AboutALHA />
          <Roles />
          <Duities />
          <Appendixes/>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Overview;
