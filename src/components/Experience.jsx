import React from "react";
import HTML from "../logo/html_logo.png";
import CSS from "../logo/css_logo.png";
import Javascript from "../logo/javascript_logo.png";
import React_logo from "../logo/react_logo.png";
import Github from "../logo/github_logo.png";
import Dotnet from "../logo/.Net_logo.png"
import Csharp from "../logo/Logo_C_sharp.svg.png"
import Git from "../logo/Git-Icon.png"

const Experiences = () => {
  return (
    // #102E43
    // #0a192f
    <div name="experiences" className="bg-[#102E43] text-gray-300">
      <div className="max-w-[1000px] mx-auto pt-20 flex flex-col justify-center align-middle w-full h-full">
        <div>
          <p className="text-4xl font-bold inline">
            Technical Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">

            {/*<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">*/}
            {/*    <img*/}
            {/*        className="w-20 mx-auto"*/}
            {/*        src={Dotnet}*/}
            {/*        alt="Dotnet icon"*/}
            {/*    />*/}
            {/*    <p>.NET</p>*/}
            {/*</div>*/}


            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                    className="w-20 mx-auto"
                    src={Dotnet}
                    alt="Dotnet icon"
                />
                <p>.NET</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                    className="w-20 mx-auto"
                    src={Csharp}
                    alt="Csharp icon"
                />
                <p>C#</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                    className="w-20 mx-auto"
                    src={Github}
                    alt="Github"
                />
                <p>Github</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                    className="w-20 mx-auto"
                    src={Git}
                    alt="Git"
                />
                <p>Git</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto"
                        src={HTML}
                        alt="HTML icon" />
                <p>HTML</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto"
                          src={CSS}
                          alt="CSS icon"
                />
                <p>CSS</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img
                    className="w-20 mx-auto"
                    src={Javascript}
                    alt="Javascript icon"
                />
                <p>Javascript</p>
            </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" 
                 src={React_logo}
                 alt="React icon"
               />
            <p>React</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experiences;