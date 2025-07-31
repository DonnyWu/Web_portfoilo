import React from "react";
import { View, Image, StyleSheet } from "react-native";
import profile from '../logo/Profile.jpg';

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
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
                className="w-20 mx-auto"
                src={profile}
                alt="profile"
            />
        </div>
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-8xl font-bold">
            <p>
              About <br/> Me
            </p>
          </div>
          <div>
            <p>
             I graduated from the University of Massachusetts, Amherst in 2020. Since then I've been actively pursing full-stack development weather that may be from my job or personal projects, there is always something to learn! Throughout my journey as a software engineer I've been in of all part of the software development lifecycle. Which taught me the invaluable lesson of it takes more than just coding ability to be a great engineer. But also through the use of good design, coding standards, and QA testing. Which are just as imporant for an engineer to understand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
