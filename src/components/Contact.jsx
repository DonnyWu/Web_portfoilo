import React from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaLink } from "react-icons/fa";

const Contact = () => {
  return (
    // #24305E
    // #0E2839


  <div name="contact" className="w-full h-screen bg-[#374785] text-[black]">
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
        <div className="sm:text-right text-1xl font-bold">

            <form
              method="POST"
              action="https://getform.io/f/de14136d-d629-4182-8bb6-77ee22b9af97"
              className="flex flex-col max-w-[600px] w-full"
            >
              <div className="pb-8">
                <p className="text-4xl font-bold border-b-4 border-gray-200 text-gray-300 text-left">
                  Contact
                </p>
                <p className="text-gray-300 py-4 text-left">Send me a message!</p>
              </div>
              <input
                className="p-2 bg-[#ccd6f6]"
                type="text"
                placeholder="Name"
                name="name"
                required
              />

              <input
                className="my-4 p-2 bg-[#ccd6f6]"
                type="email"
                name="email"
                placeholder="Email"
                required
              />

              <textarea
                name="message"
                className="bg-[#ccd6f6] p-2"
                rows="10"
                placeholder="Message"
                required
              ></textarea>

              <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex item-center">
                Send
              </button>                  
            </form>
            </div>

          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-200 text-gray-300 text-left">
              Connect
            </p>
            <p className="text-gray-300 py-4 text-left font-bold">
              Connect with me on these platforms
            </p>
            <div className="flex pt-6">
              <a
                className="flex w-full text-gray-300"
                href="https://www.linkedin.com/in/donnie-wu/"
              >
                <FaLinkedin size={55} />
              </a>

              <a
                className="flex w-full text-gray-300"
                href="https://github.com/DonnyWu"
              >
                <FaGithub size={55} />
              </a>

              

            </div> 
            <p className="text-4xl font-bold border-b-4 border-gray-200 text-gray-300 text-left pt-8">
              Email
            </p>
            <p className="text-gray-300 py-4 text-left font-bold">
             <b>Email:</b><a href="mailto:Donnie.wu@alum.cs.umass.edu"> Donnie.wu@alum.cs.umass.edu</a>
            </p>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
