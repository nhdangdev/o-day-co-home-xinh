"use client";
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "~/app/components/HeroSection";
import AboutSection from "~/app/components/AboutSection";
import backgroundImage from "../../public/images/bg.jpg";

export default function Home() {
  return (
    <main className="w-full h-full mx-auto">
      <div className="bg-gradient-to-r from-[#f2f3e2] via-[#b2e5f8] to-[#f4b3ef] h-full w-full ">
        <Navbar />
        <div className="flex flex-col items-center justify-between p-24">
          <HeroSection />
        </div>
      </div>
      <AboutSection />
    </main>
  );
}
