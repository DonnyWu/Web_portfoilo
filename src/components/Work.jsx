import React, { useState }from "react";
import HTML from "../logo/html_logo.png";
import InterExpModal from "./Modals/InterExpModal";
import AllscriptExpModal from "./Modals/AllscriptsExpModal";
import MitsubishiExpModal from "./Modals/MitsubishiExpModal"
import interpro2 from '../logo/interpro.png';
import Allscript from '../logo/Allscript-logo.png';
import Mitsubishi from '../logo/mitsubishi.jpg';

const Work = () => {
    const [openModal0, setOpenModal0] = useState(false);
    const [openModal1, setOpenModal1] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
  return (
    // #102E43
    // #0a192f
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#102E43]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold  text-gray-300">
            Work Experiences
          </p>
          <p></p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* <div
            style={{ backgroundImage: `url(${HTML})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div>
              <span className="text-2xl font-bold text-white tracking-wider">
                Place Holder
              </span>
              <div>
                <button onClick={() => setOpenModal(true)} className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Description</button>
                <ExpModal open={openModal} onClose={() => setOpenModal(false)} />
              </div>
            </div>
          </div> */}

            <div
                style={{ backgroundImage: `url(${Allscript})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
            >
                <div>
                    <AllscriptExpModal open={openModal0} onClose={() => setOpenModal0(false)} />
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-white tracking-wider text-center">
                            Allscripts
                        </span>
                        <div>
                            <button onClick={() => setOpenModal0(true)} className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg content-center">Description</button>
                        </div>
                    </div>
                </div>
            </div>
          
          <div
            style={{ backgroundImage: `url(${interpro2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            <div>
              <InterExpModal open={openModal1} onClose={() => setOpenModal1(false)} />
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider text-center">
                  InterPro Solutions
                </span>
                <div>
                  <button onClick={() => setOpenModal1(true)} className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg content-center">Description</button>
                </div>
              </div>
            </div>
          </div>

            <div
                style={{ backgroundImage: `url(${Mitsubishi})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
            >
                <div>
                    <MitsubishiExpModal open={openModal2} onClose={() => setOpenModal2(false)} />
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-white tracking-wider text-center">
                            Mitsubishi Electric Iconics Digital Solutions
                        </span>
                        <div>
                            <button onClick={() => setOpenModal2(true)} className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg content-center">Description</button>
                        </div>
                    </div>
                </div>
            </div>
          {/* <div
            style={{ backgroundImage: `url(${Allscript})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            <AllscriptExpModal open={openModal} onClose={() => setOpenModal(false)} />
            <div className="opacity-0 group-hover:opacity-100">
            
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Software Engineer Intern at Allscripts
              </span>
              <div>
                <button onClick={() => setOpenModal(true)} className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg content-center">Description</button>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${HTML})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Place Holder
              </span>
              <div>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"></button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"></button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${HTML})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Place Holder
              </span>
              <div>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"></button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"></button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${HTML})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Place Holder
              </span>
              <div>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"></button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"></button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${HTML})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Place Holder
              </span>
              <div>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"></button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"></button>
                </a>
              </div>
            </div>
          </div> */}
          
        </div>
      </div>
    </div>
  );
};

export default Work;