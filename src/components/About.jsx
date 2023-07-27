import React from "react";
import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  stretch: {
    width: 300,
    height: 300,
    borderRadius: 400 / 2,
    resizeMode: "stretch",
  },
});

const About = () => {
  // #0a192f
  // #304E62

  return (
    <div name="about" className="w-full h-screen bg-[#F76C6C] text-[#D7D7D7]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-8xl font-bold">
            <p>
              About <br/> Me
            </p>
          </div>
          <div>
            <p>
             I graduated from the University of Massachusetts, Amherst in 2020. Since then I've been actively pursing full-stack development weather that may be from my job or personal projects, there is always something to learn! Through my journey as a software engineer I've been part of all part of the software development lifecycle. Which taught me the invaluable lesson of it takes more than just coding ability to be great engineer. Because at the end of the day it maybe that one edge case or curly bracket that shuts that the entire application, and that is what seperates an engineer to a great engineer. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
