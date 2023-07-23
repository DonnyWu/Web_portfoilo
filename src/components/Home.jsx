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

const icon = StyleSheet.create({
  container:{
    color: "white",
    paddingRight: 50
  }
})

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0d2137]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="Message">
          <ul className="dynamic text-1xl sm:text-7xl">
            <li>
              <span>Hello World!</span>
            </li>
            <li>
              <span>你好, 世界!</span>
            </li>
            <li>
              <span>안녕하세요!</span>
            </li>
            <li>
              <span>مرحبا بالعالم!</span>
            </li>
          </ul>
        </div>
        
        <p className="text-pink-600">My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Donnie Wu
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          A Full Stack Developer
        </h2>
        <h3 className="flex py-2 text-[white]"><GrLocation style = {icon} size = {20}/>Boston, MA</h3>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Home;
