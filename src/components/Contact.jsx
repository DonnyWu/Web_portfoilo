import React from "react";

const Contact = () => {
  return (
    // #24305E
    // #0E2839
    <div
      name="contact"
      className="w-full h-screen bg-[#374785] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/de14136d-d629-4182-8bb6-77ee22b9af97"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">Send me a message!</p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          name="email"
          placeholder="Email"
        />
        <textarea
          name="message"
          className="bg-[#ccd6f6] p-2"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex item-center">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
