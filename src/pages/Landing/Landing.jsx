import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/layout/Navbar";
import Hero from "./Hero";
import Requirements from "./Requirements";
import ExpressForm from "./ExpressForm";
import Blogs from "./Blogs";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen relative bg-[#FFFBEC] overflow-hidden">
      <Helmet>
        <title>ALHA - Agricultural Land Holding Authority (ALHA)</title>
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

      {/* Page content */}
      <main className="relative">
        <Hero />
        <Requirements />
        <ExpressForm />
        <Blogs />
      </main>

      {/* <Footer /> */}
    </div>
  );
}
