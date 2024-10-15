// MainContent.js
import React from "react";

const MainContent = () => (
  <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-2 md:py-2 lg:py-4 w-full h-full">
    <section className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
      <h1 className="text-4xl md:text-7xl font-bold text-blue-600 leading-tight">
        One live stream. <br /> 30+ destinations.
      </h1>
      <p className="text-lg md:text-2xl text-gray-600 mt-4">
        Multistream & reach your audience,
        <br /> wherever they are.
      </p>
      <form className="flex flex-col gap-4 mt-6 w-full md:w-1/2 mx-auto md:mx-0">
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 font-bold rounded hover:bg-blue-700"
          >
            Sign Up for Free
          </button>
          <a
            href="#plans"
            className="font-bold text-gray-600 text-lg underline text-center mt-2"
          >
            See Our Plans
          </a>
        </div>
      </form>
    </section>
    <section className="md:w-1/2 flex justify-center">
      <img
        src="/image/main.png"
        alt="Multistream illustration"
        className="w-full max-w-5xl"
      />
    </section>
  </div>
);

export default MainContent;
