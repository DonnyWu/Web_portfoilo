import React, { useState } from "react";
import InfoModal from "./Modals/InfoModal";

const Project = () => {
  const [openModal0, setOpenModal0] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  return (
    // #24305E
    // #374785
    <div
      name="projects"
      className="w-full min-h-screen pt-20 text-gray-300"
      style={{ background: 'linear-gradient(180deg, #24305E 0%, #24305E 10%, #374785 100%)' }}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold text-gray-300">
            Projects
          </p>
          <p></p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-white/5">
            <div>
              <InfoModal
                open={openModal0}
                onClose={() => setOpenModal0(false)}
                title="Coming Soon"
                caption="Coming Soon"
              >
                <p>{'•'}Coming Soon</p>
              </InfoModal>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white tracking-wider text-center">
                  Coming Soon
                </span>
                <div className="opacity-0 group-hover:opacity-100">
                  <button onClick={() => setOpenModal0(true)} className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg content-center">Description</button>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-white/5">
            <div>
              <InfoModal
                open={openModal1}
                onClose={() => setOpenModal1(false)}
                title="Coming Soon"
                caption="Coming Soon"
              >
                <p>{'•'}Coming Soon</p>
              </InfoModal>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white tracking-wider text-center">
                  Coming Soon
                </span>
                <div className="opacity-0 group-hover:opacity-100">
                  <button onClick={() => setOpenModal1(true)} className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg content-center">Description</button>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-white/5">
            <div>
              <InfoModal
                open={openModal2}
                onClose={() => setOpenModal2(false)}
                title="Coming Soon"
                caption="Coming Soon"
              >
                <p>{'•'}Coming Soon</p>
              </InfoModal>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white tracking-wider text-center">
                  Coming Soon
                </span>
                <div className="opacity-0 group-hover:opacity-100">
                  <button onClick={() => setOpenModal2(true)} className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg content-center">Description</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Project;
