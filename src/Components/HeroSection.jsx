import React from "react";
import drive from "../images/drive.jpg"; // Importing the image
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <section
        className="relative min-h-screen py-40 bg-gray-50"
        style={{
          backgroundImage: `url(${drive})`, // Using the imported image as the background
          backgroundSize: "cover", // Ensures the image covers the entire screen
          backgroundPosition: "center", // Centers the image
        }}
      >
        {/* Green Overlay */}
        <div className="absolute inset-0 bg-green-500 opacity-40"></div>

        <div className="relative z-10 text-left ml-16 px-8">
          {/* Main Heading */}
          <h1 className="text-7xl font-bold text-white leading-tight">
            Share rides,
            <br /> save the planet
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-white text-2xl max-w-4xl">
            Join the sustainable transportation revolution. Connect with drivers
            and passengers heading your way.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex justify-start space-x-8">
            <button className="px-8 py-4 bg-green text-white rounded-lg hover:bg-white hover:text-green border-2 border-green transition">
              Start Driving
            </button>
            <button className="px-8 py-4 bg-green text-white rounded-lg hover:bg-white hover:text-green border-2 border-green transition">
              Book a Ride
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
