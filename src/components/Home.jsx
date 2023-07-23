import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { GrLocation } from "react-icons/gr";
import "../App.css";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 50,
    position: "relative",
  },
  stretch: {
    width: 300,
    height: 300,
    borderRadius: 400 / 2,
    resizeMode: "stretch",
  },
});

const dynamic = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 50,
    // position: "absolute",
  },
  stretch: {
    width: 300,
    height: 300,
    borderRadius: 400 / 2,
    resizeMode: "stretch",
  },
});

const Home = () => {
  return (
      // #4484CE
      // #0d2137
      // #12354C
    <div name="home" className="w-full h-screen bg-[#24305E]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="Message">
          <ul className="dynamic text-1xl sm:text-7xl">
            <li>
              <span>Hello World!</span>
            </li>
            <li>
              <span>हैलो वर्ल्ड!</span>
            </li>
            <li>
              <span>你好, 世界!</span>
            </li>
            <li>
              <span>مرحبا بالعالم!</span>
            </li>
          </ul>
        </div>
        {/* text-bg-[#F727AB]
        text-pink-600 */}
        <p className="text-red-300">My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Donnie Wu
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] py-1">
          A Full Stack Developer
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

        <h3 className="flex py-2 text-[white]">
          <div className="mr-2">
            <GrLocation style={{color: 'red'}} size = {20}/>
          </div>Boston, MA</h3>
      </div>
    </div>
  );
};

export default Home;
