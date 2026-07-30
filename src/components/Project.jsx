import React from "react";

const Project = () => {
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
          <p className="py-4">Project demos coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
