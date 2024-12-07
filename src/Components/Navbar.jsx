import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Navbar = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleSignInClick = () => {
    navigate("/signin"); // Navigate to the /signin route when clicked
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Left Side */}
      <div className="flex items-center">
        <div className="text-green mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M5 17.5c-.828 0-1.5.672-1.5 1.5S4.172 20.5 5 20.5s1.5-.672 1.5-1.5S5.828 17.5 5 17.5zM19 17.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zM17 8H7v7h10V8z"></path>
          </svg>
        </div>
        <span className="text-lg font-semibold">ShareRide</span>
      </div>

      {/* Right Side */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-green text-white rounded-lg hover:bg-green-600 transition">
          Find Rides
        </button>

        {/* Sign In button now uses useNavigate for programmatic navigation */}
        <button
          onClick={handleSignInClick}
          className="px-4 py-2 bg-green text-white rounded-lg hover:bg-green-600 transition"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
