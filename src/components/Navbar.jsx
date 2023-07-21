import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaLink } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-end items-center px-4 bg-[black] text-gray-300">
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="experiences" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0d2137] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="experiences" smooth={true} duration={500}>
            Experiences
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* <div className='flex fixed flex-col top-[35%] left-0'>
    <ul>
      <li className='w-[160px] h-[100px]flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'> 
        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/donnie-wu/">
          Linkedin <FaLinkedin size={30} />
        </a>
      </li>
      <li className='w-[160px] h-[100px]flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-purple-800'> 
        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/DonnyWu">
          Github <FaGithub size={30} />
        </a>
      </li>
      <li className='w-[160px] h-[100px]flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'> 
        <a className='flex justify-between items-center w-full text-gray-300' href="/">
          Contacts <HiMailOpen size={30} />
        </a>
      </li>
    </ul>

      </div> */}

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiMailOpen size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
