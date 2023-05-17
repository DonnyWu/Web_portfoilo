import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f]">
      {/* <div className=" max-w-[800px] px-3 mx-auto flex flex-wrap justify-center blocl relative">
        <div className="w-6/12 sm:w-4/12 px-4">
          <img src="https://media.licdn.com/dms/image/C4E03AQFn7DuU9UN8yQ/profile-displayphoto-shrink_800_800/0/1602495882730?e=1686787200&v=beta&t=C_MODcN7kVnwrSAEWjmfK6XR7g89ZVlmmg36mRduZUE" alt="Profile Picture" className="shadow rounded-full max-w-full h-auto align-middle border-none" />
        </div>
      </div> */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className=" max-w-[800px] px-3 mx-auto flex flex-wrap justify-start blocl relative">
          <div className="w-6/12 sm:w-4/12 px-4">
            <img
              src="https://media.licdn.com/dms/image/C4E03AQFn7DuU9UN8yQ/profile-displayphoto-shrink_800_800/0/1602495882730?e=1686787200&v=beta&t=C_MODcN7kVnwrSAEWjmfK6XR7g89ZVlmmg36mRduZUE"
              alt="Profile Picture"
              className="shadow rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>

        <p className="text-pink-600">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Donnie Wu
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a full stack developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            view work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
